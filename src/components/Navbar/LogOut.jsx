import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export const LogOut = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <Button bg="primary" onClick={handleLogOut}>
    </Button>
  );
};
