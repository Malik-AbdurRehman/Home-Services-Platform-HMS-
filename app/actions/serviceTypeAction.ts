// 'use server'
// import { auth } from "@clerk/nextjs/server"
// import { db } from "@/lib/db";
// import { redirect } from "next/navigation";

// export async function handleServiceTypeAction(formData: FormData) {
//   const { userId } = await auth()
//   if (!userId) throw new Error("User not authenticated")

//   const serviceType = formData.get("serviceType") as string

//   return await db.user.findMany({
//     where: {
//       type: serviceType,
//     },
//   })
// }
