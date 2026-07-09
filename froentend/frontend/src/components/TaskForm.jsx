import { useEffect, useState } from "react";
import api from "../services/api.services";


export default function TaskForm({
  editingTask,
  setEditingTask,
  fetchTasks,
  projects,
}) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "Todo",
    priority: "Medium",
    dueDate: "",
    project: "",
  });

  useEffect(() => {
    if (editingTask) {
      setForm({
        ...editingTask,
        dueDate: editingTask.dueDate?.substring(0, 10),
        project: editingTask.project?._id || "",
      });
    }
  }, [editingTask]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingTask) {
      await api.put(`/tasks/${editingTask._id}`, form);
    } else {
      await api.post("/tasks", form);
    }

    setForm({
      title: "",
      description: "",
      status: "Todo",
      priority: "Medium",
      dueDate: "",
      project: "",
    });

    setEditingTask(null);

    fetchTasks();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow p-6 rounded-lg space-y-4"
    >
      <input
        placeholder="Title"
        className="border p-2 rounded w-full"
        value={form.title}
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
      />

      <textarea
        placeholder="Description"
        className="border p-2 rounded w-full"
        value={form.description}
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
      />

      <div className="grid md:grid-cols-4 gap-4">

        <select
          value={form.status}
          onChange={(e) =>
            setForm({ ...form, status: e.target.value })
          }
        >
          <option>Todo</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <select
          value={form.priority}
          onChange={(e) =>
            setForm({ ...form, priority: e.target.value })
          }
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <input
          type="date"
          value={form.dueDate}
          onChange={(e) =>
            setForm({ ...form, dueDate: e.target.value })
          }
        />

        <select
          value={form.project}
          onChange={(e) =>
            setForm({ ...form, project: e.target.value })
          }
        >
          <option value="">Project</option>

          {projects.map((p) => (
            <option key={p._id} value={p._id}>
              {p.name}
            </option>
          ))}
        </select>

      </div>

      <button className="bg-blue-600 text-white px-5 py-2 rounded">
        {editingTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}