import { useEffect, useState } from "react";
import api from "../services/api.services";


export default function Projects() {
  const [projects, setProjects] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await api.get("/projects");
      setProjects(res.data.projects);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await api.put(`/projects/${editingId}`, formData);
      } else {
        await api.post("/projects", formData);
      }

      setFormData({
        name: "",
        description: "",
      });

      setEditingId(null);

      fetchProjects();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (project) => {
    setEditingId(project._id);

    setFormData({
      name: project.name,
      description: project.description,
    });
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this project?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/projects/${id}`);
      fetchProjects();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">
          Projects
        </h1>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow mb-8"
        >
          <input
            type="text"
            name="name"
            placeholder="Project Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-3 rounded mb-4"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-3 rounded mb-4"
            rows="4"
            required
          />

          <button
            className={`px-6 py-2 rounded text-white ${
              editingId
                ? "bg-yellow-500"
                : "bg-blue-600"
            }`}
          >
            {editingId ? "Update Project" : "Add Project"}
          </button>
        </form>

        {/* Project List */}

        <div className="grid md:grid-cols-2 gap-6">

          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white p-5 rounded-lg shadow"
            >
              <h2 className="text-xl font-bold">
                {project.name}
              </h2>

              <p className="text-gray-600 mt-2">
                {project.description}
              </p>

              <div className="mt-5 flex gap-3">

                <button
                  onClick={() => handleEdit(project)}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(project._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}