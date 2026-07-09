
export default function TaskCard({
  task,
  setEditingTask,
  deleteTask,
}) {
  return (
    <div className="bg-white shadow rounded-lg p-5">

      <h2 className="text-xl font-bold">
        {task.title}
      </h2>

      <p className="mt-2 text-gray-600">
        {task.description}
      </p>

      <div className="mt-4 space-y-1">

        <p>
          <strong>Status:</strong> {task.status}
        </p>

        <p>
          <strong>Priority:</strong> {task.priority}
        </p>

        <p>
          <strong>Project:</strong> {task.project?.name}
        </p>

        <p>
          <strong>Due:</strong>{" "}
          {task.dueDate?.substring(0, 10)}
        </p>

      </div>

      <div className="flex gap-3 mt-5">

        <button
          onClick={() => setEditingTask(task)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Edit
        </button>

        <button
          onClick={() => deleteTask(task._id)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete
        </button>

      </div>

    </div>
  );
}