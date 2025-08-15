import { auth } from "@clerk/nextjs/server";
import {PrismaClient } from "@prisma/client"
import { redirect } from "next/navigation";


const  prisma= new PrismaClient();
export default async function Dashboard(){

    const {userId}= await auth();
    if(!userId){
        return("/auth/sign-in")
    }

    const user = await prisma.user.findUnique({
        where: {
            clerkUserId: userId,
        },
    }); 
    console.log(user);
    if(!user?.role){
        redirect('components/role-selection');
    }

    else if(user.role === 'admin'){
        redirect('/dashboard/admin');
    }
    else if(user.role === 'merchant'){
        redirect('/dashboard/merchant');
    }
    else if(user.role === 'customer'){
        redirect('/dashboard/customer');
    }

    return(
        <div>
            <p>Loading..</p>
        </div>
    )
}