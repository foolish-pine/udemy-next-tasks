import { TaskDocument, TaskModel } from "@/models/task";
import { connectDb } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (
  _: NextResponse,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = await params;

    await connectDb();
    const task = (await TaskModel.findById(id)) as TaskDocument;

    if (!task)
      return NextResponse.json(
        {
          message: "タスクが存在しません",
        },
        { status: 404 }
      );

    return NextResponse.json({ message: "タスク取得成功", task });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: "タスク取得失敗" }, { status: 500 });
  }
};

export const dynamic = "force-dynamic";
