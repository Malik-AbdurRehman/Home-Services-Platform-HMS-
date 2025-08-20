import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const serviceType = searchParams.get("serviceType");

    if (!serviceType) {
      return NextResponse.json(
        { error: "Service type is required" },
        { status: 400 }
      );
    }

    const merchants = await db.user.findMany({
      where: { type: serviceType },
      select: { id: true, name: true, email: true, type: true },
    });

    return NextResponse.json(merchants);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
