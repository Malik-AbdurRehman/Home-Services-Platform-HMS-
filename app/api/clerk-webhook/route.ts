// src/app/api/clerk-webhook/route.ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();

    
    const { id, email_addresses, name, image_url, public_metadata } = payload.data;

    const email = email_addresses?.[0]?.email_address || "";
    const role = public_metadata?.role || "";
    const address = public_metadata?.address || "N/A";
    const about = public_metadata?.about || "N/A";


    const existingUserByEmail = await prisma.user.findUnique({ where: { email } });

if (existingUserByEmail) {
  await prisma.user.update({
    where: { email },
    data: {
      clerkUserId: id,
      name,
      role,
      imageUrl: image_url || "",
      address,
      about,
    },
  });
} else {
  await prisma.user.create({
    data: {
      clerkUserId: id,
      email,
      name,
      role,
      imageUrl: image_url || "",
      address,
      about,
    },
  });
}


    return NextResponse.json({ message: "User inserted successfully" }, { status: 200 });
  } catch (err) {
    console.error("Webhook DB Error:", err);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
