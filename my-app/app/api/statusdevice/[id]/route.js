import connectMongoDB from "@/app/lib/mongodb";
import StatusDevice from "@/app/models/StatusDevice";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { newName: name } = await request.json();
    await connectMongoDB();
    await StatusDevice.findByIdAndUpdate(id, { name });
    return NextResponse.json({ message: "StatusDevice updated" }, { status: 200 });
  }
  
  export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const statusdevices = await StatusDevice.findOne({ _id: id });
    return NextResponse.json({ statusdevices }, { status: 200 });
  }
