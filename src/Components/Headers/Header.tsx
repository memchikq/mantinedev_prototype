import { Avatar, Flex, Indicator, Text } from "@mantine/core";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <Flex justify={"space-between"} align={"center"}>
        <Text size="30px">Prototype</Text>
        <Flex onClick={()=> navigate("/profile")} style={{cursor:"pointer"}} align={"center"} gap={"sm"}>
          <Indicator size={15} offset={5}>
            <Avatar size={"md"} src="/icons/user.png" />
          </Indicator>
          <Text size="24px">Ruslan Bakiev <FaChevronRight size={18} /></Text>
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
