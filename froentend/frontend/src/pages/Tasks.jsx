import { useEffect, useState } from "react";

import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
import api from "../services/api.services";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const [filters, setFilters] = useState({
    status: "",
    priority: "",
    project: "",
    search: "",
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [filters]);

  const fetchProjects = async () => {
    try {
      const res = await api.get("/projects");
      setProjects(res.data.projects);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks", {
        params: filters,
      });

      setTasks(res.data.tasks);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTask = async (id) => {
    if (!window.confirm("Delete Task?")) return;

    await api.delete(`/tasks/${id}`);

    fetchTasks();
  };

  return (
    <div className="max-w-7xl mx-auto p-8">

      <h1 className="text-3xl font-bold mb-8">
        Task Management
      </h1>

      <TaskForm
        editingTask={editingTask}
        setEditingTask={setEditingTask}
        fetchTasks={fetchTasks}
        projects={projects}
      />

      {/* Filters */}

      <div className="grid md:grid-cols-4 gap-4 my-8">

        <input
          placeholder="Search..."
          className="border p-2 rounded"
          onChange={(e) =>
            setFilters({
              ...filters,
              search: e.target.value,
            })
          }
        />

        <select
          className="border p-2 rounded"
          onChange={(e) =>
            setFilters({
              ...filters,
              status: e.target.value,
            })
          }
        >
          <option value="">Status</option>
          <option>Todo</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <select
          className="border p-2 rounded"
          onChange={(e) =>
            setFilters({
              ...filters,
              priority: e.target.value,
            })
          }
        >
          <option value="">Priority</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <select
          className="border p-2 rounded"
          onChange={(e) =>
            setFilters({
              ...filters,
              project: e.target.value,
            })
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

      <div className="grid md:grid-cols-2 gap-5">

        {tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            setEditingTask={setEditingTask}
            deleteTask={deleteTask}
          />
        ))}

      </div>

    </div>
  );
}