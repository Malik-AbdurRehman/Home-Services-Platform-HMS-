// src/app/api/clerk-webhook/route.ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();

    // Clerk webhook sends user info in `data`
    const { id, email_addresses, name, image_url, public_metadata } = payload.data;

    const email = email_addresses?.[0]?.email_address || "";
    const role = public_metadata?.role || "customer"; // default role
    const address = public_metadata?.address || "N/A";
    const about = public_metadata?.about || "N/A";

    // Store user in DB
     await prisma.user.upsert({
      where: { clerkUserId: id },
      update: {
        email,
        name,
        role,
        imageUrl: image_url || "",
        address,
        about,
      },
      create: {
        clerkUserId: id,
        email,
        name,
        role,
        imageUrl: image_url || "",
        address,
        about,
      },
    });

    return NextResponse.json({ message: "User inserted successfully" }, { status: 200 });
  } catch (err) {
    console.error("Webhook DB Error:", err);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
