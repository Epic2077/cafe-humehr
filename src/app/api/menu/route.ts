import { NextResponse } from "next/server";
import menuData from "@/data/data.json";

export async function GET() {
  return NextResponse.json(menuData);
}
