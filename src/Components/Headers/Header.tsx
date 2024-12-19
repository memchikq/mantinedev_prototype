import { Avatar, BackgroundImage, Box, Burger, Drawer, Flex, Group, Indicator, Space, Text, UnstyledButton } from "@mantine/core"
import { FaChevronRight, FaPlus } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import classes from "./Header.module.css"
import { useDisclosure } from "@mantine/hooks"
import { IoLogoUsd } from "react-icons/io"
import { CiUmbrella } from "react-icons/ci"
import { MdOutlineSecurity } from "react-icons/md"
import { GoGraph } from "react-icons/go"

const tabs = [
  { link: "/", label: "Transfers", icon: IoLogoUsd },
  { link: "/", label: "Insurance", icon: CiUmbrella },
  { link: "/", label: "Smart contracts", icon: MdOutlineSecurity },
  { link: "/", label: "Salaries", icon: GoGraph },
  { link: "/new-product", label: "New products", icon: FaPlus },
]

const Header = () => {
  const navigate = useNavigate()
  const [opened, { toggle, close }] = useDisclosure()
  const links = tabs.map((item,i) => (
    <Link style={{marginTop:i == tabs.length -1 ? "40px":""}} className={classes.link} to={item.link} key={item.label}>
      <item.icon className={classes.linkIcon} />
      <span>{item.label}</span>
    </Link>
  ))
  return (
    <header>
      <Space h={"xl"} />
      <Flex justify={"space-between"} align={"center"}>
        <Flex w={200}>
          <BackgroundImage
            visibleFrom="md"
            h={70}
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png"
            radius="sm"
          ></BackgroundImage>
          <Burger hiddenFrom="md" opened={opened} onClick={toggle} aria-label="Toggle navigation" />
        </Flex>
        <UnstyledButton onClick={() => navigate("/profile")} className={classes.user}>
          <Flex align={"center"} gap={6}>
            <Avatar src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png" radius="xl" />

            <div style={{ flex: 1 }}>
              <Text size="md" fw={500}>
                Harriette Spoonlicker
              </Text>
            </div>

            <Box visibleFrom="md"><FaChevronRight size={14} /></Box>
          </Flex>
        </UnstyledButton>
      </Flex>
      <Drawer opened={opened} onClose={close} title='Menu'>
        <div className={classes.navbarMain}>{links}</div>
      </Drawer>
    </header>
  )
}

export default Header
