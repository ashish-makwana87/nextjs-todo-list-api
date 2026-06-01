import { Todo } from "@/utils/types";
import { fetchTasks } from "@/utils/actions";
import TaskList from "@/components/TaskList";

async function TaskContainer() {
  const todos: Todo[] = await fetchTasks();

  return (
    <section className={todos.length < 1 ? 'mt-4 md:mt-6 p-4 rounded grid gap-y-2' : 'mt-4 md:mt-6 p-4 border rounded grid gap-y-2'}>
      <TaskList todos={todos} />
    </section>
  );
}

export default TaskContainer;
