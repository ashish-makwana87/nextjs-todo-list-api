import FormContainer from "@/components/FormContainer";
import LoadingTasks from "@/components/LoadingTasks";
import TaskContainer from "@/components/TaskContainer";
import { Suspense } from "react";


export default function Home() {
  

  return (
   <section className="alignment py-20 md:py-24">
    <h1 className="text-center">Nextjs Todo list API</h1>
    <div className="max-w-xl mx-auto mt-8 md:mt-10">
      <FormContainer />
      <Suspense fallback={<LoadingTasks />}>
      <TaskContainer />
      </Suspense>
    </div>
   </section>
  );
}
