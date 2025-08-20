'use server'

import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export async function setMerchantService(serviceType: string) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Not authenticated");
  }

  await db.user.update({
    where: { clerkUserId: userId }, 
    data: { type: serviceType },
  });
}
