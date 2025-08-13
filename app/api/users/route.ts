import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();

    const {
      id: clerkUserId,
      email_addresses,
      name,
      image_url,
      public_metadata, 
    } = payload.data;

    const email = email_addresses?.[0]?.email_address;
    const role = public_metadata?.role 
    const address = public_metadata?.address || null;
    const about = public_metadata?.about || null;

    await prisma.user.create({
      data: {
        clerkUserId,
        email,
        name: name,
        role,
        imageUrl: image_url,
        address,
        about,
      },
    });

    return NextResponse.json({ message: "User inserted successfully" });
  } catch (err) {
    console.error("Prisma Error:", err);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
