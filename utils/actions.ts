"use server"
import db from "@/utils/db";
import { Todo } from "@/utils/types";
import { revalidatePath } from "next/cache.js";


const renderError = (error: unknown): { status: string, message: string } => {

  return {status: "error", message: error instanceof Error ? error.message : "Something went wrong..."}
}


export const fetchTasks = async (): Promise<Todo[]> => {

try {
  const todos = await db.todo.findMany();
   
  return todos; 
} catch (error) {
  throw new Error("Failed to fetch tasks")
}
}


export const createTask =  async (prevState: {status: string, message: string}, formData: FormData): Promise<{status: string, message: string}> => {

const taskName = (formData.get("task") as string).trim()

if(taskName.length === 0) {
  // Additional layer of input check
  return {status: "error", message: "Task field cannot be empty."}
}

 try {

 await db.todo.create({
      data: {
        title: taskName,
        completed: false,
      },
    });
  
    revalidatePath("/");

    return {status: "success", message: "Task added successfully."};
} catch (error) {
 
 return renderError(error);
}
}

export const updateTask = async (id: string, value: boolean): Promise<{status: string, message: string}> => {

 try {
    await db.todo.update({
      where: { id },
      data: { completed: value },
    });
    
    revalidatePath("/");

    return {status: "success", message: "Task updated..."}
  } catch (error) {
    throw new Error("Error updating the task.")
  }
}


export const updateTaskTitle = async (prevState: {status: string, message: string}, formData: FormData): Promise<{status: string, message: string}> => {

  const title = (formData.get("new-title") as string).trim();
  const taskId = formData.get("task-id") as string;

  if(title.length === 0) {
  // Additional layer of input check
  return {status: "error", message: "Task field cannot be empty."}
}

try {
  await db.todo.update({where: {id: taskId}, data: {title: title}})
  revalidatePath("/");

  return {status: "success", message: "Task updated successfully"}
} catch (error) {
  return renderError(error)
}
}

export const deleteTask = async (id: string):Promise<{status: string, message: string}> => {

try {
    await db.todo.delete({ where: { id } });
    revalidatePath("/");
    return {status: "success", message: "Task deleted successfully."}
  } catch (error) {
    return renderError(error);
  }
}

