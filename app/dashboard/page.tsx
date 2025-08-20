import { auth } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import AdminDashboard from "../components/adminDashboard";
import MerchantDashboard from "../components/merchantDashboard";
import CustomerDashboard from "../components/customerDashboard";

const prisma = new PrismaClient();

export default async function Dashboard() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/auth/sign-in");
  }

  const user = await prisma.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });

  let content;
  if (!user?.role) {
    redirect("/components/role-selection");
  } else if (user.role === "admin") {
    content = <AdminDashboard />;
  } else if (user.role === "merchant") {
    content = <MerchantDashboard />;
  } else if (user.role === "customer") {
    content = <CustomerDashboard />;
  }

  return <div>{content}</div>;
}
