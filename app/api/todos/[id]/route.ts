import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function PATCH(req: Request, context: { params: Promise<{ id: string }> } | { params: { id: string } }) {
  try {
    const resolvedParams = await Promise.resolve(context.params);
    const { id } = resolvedParams;

    const body = await req.json();
    const { completed } = body;

    const updatedTodo = await db.todo.update({
      where: { id },
      data: { completed },
    });

    return NextResponse.json(updatedTodo, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


export async function DELETE(req: Request, context: { params: Promise<{ id: string }> } | { params: { id: string } }) {
  try {
    const resolvedParams = await Promise.resolve(context.params);
    const { id } = resolvedParams;

    await db.todo.delete({ where: { id } });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}