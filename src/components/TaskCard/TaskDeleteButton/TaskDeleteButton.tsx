"use client";

import { deleteTask, FormState } from "@/actions/task";
import { useActionState } from "react";
import { FaTrashAlt } from "react-icons/fa";

interface TaskDeleteButtonProps {
  id: string;
}

const TaskDeleteButton: React.FC<TaskDeleteButtonProps> = ({ id }) => {
  const updateTaskWithId = deleteTask.bind(null, id);
  const initialState: FormState = {
    error: "",
  };

  const [state, formAction, isPending] = useActionState(
    updateTaskWithId,
    initialState
  );

  return (
    <form action={formAction}>
      <button
        type="submit"
        className="hover:text-gray-700 
      text-lg cursor-pointer disabled:bg-gray-400"
        disabled={isPending}
      >
        <FaTrashAlt />
      </button>
      {state.error !== "" && (
        <p className="mt-2 text-red-500 text-sm">{state.error}</p>
      )}
    </form>
  );
};

export default TaskDeleteButton;
