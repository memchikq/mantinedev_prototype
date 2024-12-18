import { Avatar, BackgroundImage, Box, Flex, Group, Indicator, Text, UnstyledButton } from "@mantine/core"
import { FaChevronRight } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import classes from "./Header.module.css"
const Header = () => {
  const navigate = useNavigate()
  return (
    <header>
      <Flex justify={"space-between"} align={"center"}>
        <Flex w={200} h={70}>
          <BackgroundImage
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png"
            radius="sm"
          ></BackgroundImage>
        </Flex>
        <UnstyledButton onClick={() => navigate("/profile")} className={classes.user}>
          <Group>
            <Avatar src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png" radius="xl" />

            <div style={{ flex: 1 }}>
              <Text size="sm" fw={500}>
                Harriette Spoonlicker
              </Text>

              <Text c="dimmed" size="xs">
                hspoonlicker@outlook.com
              </Text>
            </div>

            <FaChevronRight size={14} />
          </Group>
        </UnstyledButton>
      </Flex>
    </header>
  )
}

export default Header
