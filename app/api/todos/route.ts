import db from "@/utils/db"
import { NextResponse } from 'next/server';


export async function POST(req: Request) { 

try {
 const body = await req.json();
 const { task } = body;

 const todo = await db.todo.create({
      data: {
        title: task,
        completed: false,
      },
    });

    return NextResponse.json(todo, { status: 201 });
} catch (error) {
 console.error(error)
 return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
}
}
