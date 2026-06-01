import { Skeleton } from "@/components/ui/skeleton";

function LoadingTasks() {
  
  return (
    <section className='mt-4 md:mt-6 p-4 border rounded grid gap-y-2'>
      <Skeleton className='h-8 w-full rounded' />
      <Skeleton className='h-8 w-full rounded' />
      <Skeleton className='h-8 w-full rounded' />
      <Skeleton className='h-8 w-full rounded' />
      <Skeleton className='h-8 w-full rounded' />
    </section>
  );
}

export default LoadingTasks;
