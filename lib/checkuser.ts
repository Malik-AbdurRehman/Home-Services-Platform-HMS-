import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

export const checkUser = async() => {
    const user = await currentUser();
    if (!user) {
        return null;
    }
    const LoggedInUser = await db.user.findUnique({
        where: {
            clerkUserId: user.id,
        },
    });

    if(LoggedInUser) {
        return LoggedInUser;
    }

    const newUser = await db.user.create({
        data: {
            clerkUserId: user.id,
            email: user.emailAddresses[0]?.emailAddress || "",
            firstName: user.firstName || "",
            lastName: user.lastName || "",
            profileImageUrl: user.imageUrl || "",
            role: user.unsafeMetadata?.role || "",
        },
    })
    return newUser;
};