import { Text } from "@mantine/core";
import "./UserMenu.css";
import { useNavigate } from "react-router-dom";

const UserMenu = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ border: "1px solid black", width: "220px" }}>
        <div onClick={()=> navigate("/")} className="menu_nav_list">
          <p>$</p>
          <Text size="xl">Transfers</Text>
        </div>
        <div className="menu_nav_list">
          <img src="/icons/umbrella.png" />
          <Text size="xl">Insurance</Text>
        </div>
        <div className="menu_nav_list">
          <img src="/icons/security.png" />
          <Text size="xl">Smart contracts</Text>
        </div>
        <div className="menu_nav_list">
          <img src="/icons/bar-graph.png" />
          <Text size="xl">Salaries</Text>
        </div>
      </div>
      <Text onClick={()=> navigate("/new-product")} style={{cursor:"pointer"}} pl={"md"} pt={"md"} size="xl">
        + Add new products
      </Text>
    </div>
  );
};

export default UserMenu;
