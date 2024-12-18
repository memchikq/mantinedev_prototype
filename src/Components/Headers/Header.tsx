import { Avatar, Flex, Indicator, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <Flex justify={"space-between"} align={"center"}>
        <div
          style={{ width: "220px", height: "70px", border:"1px solid black" }}
        ></div>
        <Flex onClick={()=> navigate("/profile")} style={{cursor:"pointer"}} align={"center"} gap={"sm"}>
          <Indicator size={15} offset={5}>
            <Avatar size={"md"} src="/icons/user.png" />
          </Indicator>
          <Text size="24px">Ruslan Bakiev</Text>
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
