'use client'
import FormContainer from "@/components/FormContainer";
import TaskContainer from "@/components/TaskContainer";
import Image from "next/image";
import { useCallback, useState } from "react";

export default function Home() {
  const [refreshPage, setRefreshPage] = useState<number>(0);
  
  const handleTaskAdded = useCallback(() => {
    setRefreshPage(prev => prev + 1);
  }, []);

  return (
   <section className="alignment py-20 md:py-24">
    <h1 className="text-center">Nextjs Todo list API</h1>
    <div className="max-w-xl mx-auto mt-8 md:mt-10">
    <FormContainer onTaskAdded={handleTaskAdded} />
    <TaskContainer refreshPage={refreshPage} />
    </div>
   </section>
  );
}
