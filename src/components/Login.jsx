import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Login Page</h2>
      <button
        onClick={handleLogin}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Click to Login
      </button>
    </div>
  );
}

export default Login;
