import { useAuth } from "@/providers/auth-provider";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { clearToken } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    clearToken(); // Clear the authentication token
    navigate("/", { replace: true });
  };

  setTimeout(() => {
    handleLogout();
  }, 3 * 1000);

  return <>Logout Page</>;
};

export default Logout;
