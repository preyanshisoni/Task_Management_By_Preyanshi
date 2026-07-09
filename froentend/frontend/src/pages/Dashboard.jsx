import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold">
            Task Management System
          </h1>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-8">

        <h2 className="text-3xl font-bold mb-8">
          Dashboard
        </h2>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">

          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-700">
              Projects
            </h3>

            <p className="text-4xl font-bold mt-4 text-blue-600">
              --
            </p>

            <p className="text-gray-500 mt-2">
              Total Projects
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-700">
              Tasks
            </h3>

            <p className="text-4xl font-bold mt-4 text-green-600">
              --
            </p>

            <p className="text-gray-500 mt-2">
              Total Tasks
            </p>
          </div>

        </div>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-2 gap-6">

          <Link
            to="/projects"
            className="bg-white shadow rounded-xl p-8 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold mb-3">
              📁 Projects
            </h2>

            <p className="text-gray-600">
              Create, update and manage your projects.
            </p>

            <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
              Go to Projects
            </button>
          </Link>

          <Link
            to="/tasks"
            className="bg-white shadow rounded-xl p-8 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold mb-3">
              ✅ Tasks
            </h2>

            <p className="text-gray-600">
              Create, assign and manage your tasks.
            </p>

            <button className="mt-6 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700">
              Go to Tasks
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
}