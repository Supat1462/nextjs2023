import connectMongoDB from "@/app/lib/mongodb";
import Department from "@/app/models/Department";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name } = await request.json();
  await connectMongoDB();
  await Department.create({ name });
  return NextResponse.json({ msg: "Department Create" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const departments = await Department.find();
  return NextResponse.json({ departments });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Department.findByIdAndDelete(id);
  return NextResponse.json({ message: "Department deleted" }, { status: 200 });
}
