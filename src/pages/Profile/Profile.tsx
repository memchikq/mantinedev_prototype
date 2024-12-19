import { Avatar, BackgroundImage, Button, Card, Container, Divider, Flex, Group, Image, NavLink, Paper, Text, Title } from "@mantine/core"
import Header from "../../Components/Headers/Header"
import UserMenu from "../../Components/UserMenu/UserMenu"
import { IoIosNotifications } from "react-icons/io"
import { FaChevronRight, FaQuestion } from "react-icons/fa"
import { CiLock } from "react-icons/ci"
import classes from "./Profile.module.css"
import { useState } from "react"

const data = [
  {
    link: "",
    label: "Notifications",
    links: [
      {
        link: "",
        icon: IoIosNotifications,
        linkLabel: "Notifications",
      },
      {
        link: "",
        icon: FaQuestion,
        linkLabel: "Help and FAQ's",
      },
    ],
  },
  {
    link: "",
    label: "Settings",
    links: [
      {
        link: "",
        icon: CiLock,
        linkLabel: "Security and privacy",
        linkLabelSecond: "Adjust security and privacy settings",
      },
      {
        link: "",
        icon: CiLock,
        linkLabel: "Security and privacy",
        linkLabelSecond: "Adjust security and privacy settings",
      },
      {
        link: "",
        icon: CiLock,
        linkLabel: "Security and privacy",
        linkLabelSecond: "Adjust security and privacy settings",
      },
    ],
  },
  {
    link: "",
    label: "Settings",
    links: [
      {
        link: "",
        icon: CiLock,
        linkLabel: "Security and privacy",
        linkLabelSecond: "Adjust security and privacy settings",
      },
      {
        link: "",
        icon: CiLock,
        linkLabel: "Security and privacy",
        linkLabelSecond: "Adjust security and privacy settings",
      },
      {
        link: "",
        icon: CiLock,
        linkLabel: "Security and privacy",
        linkLabelSecond: "Adjust security and privacy settings",
      },
    ],
  },
]
const Profile = () => {
  const [active, setActive] = useState("Billing")

  const links = data.map((item, i) => (
    <div
      key={i}
      onClick={(event) => {
        event.preventDefault()
        setActive(item.label)
      }}
    >
      <Title order={5} style={{ textTransform: "uppercase" }}>
        {item.label}
      </Title>

      {item.links.map((v, i) => (
        <>
          <NavLink
            key={i}
            label={
              <Flex direction={"column"}>
                <Text size="md">{v.linkLabel}</Text>
                {v.linkLabelSecond ? <Text size="md">{v.linkLabelSecond}</Text> : ""}
              </Flex>
            }
            className={classes.link}
            rightSection={<FaChevronRight />}
            leftSection={<v.icon className={classes.linkIcon} />}
          ></NavLink>
          <Divider/>
        </>
      ))}
    </div>
  ))
  return (
    <Container size={"90%"} style={{ padding: "8px" }}>
      <Header />

      <Flex gap={"100px"} mt={40}>
        <UserMenu />

        <Flex flex={1} justify={"center"} gap={"md"}>
          <Flex flex={1} direction={"column"} gap={"md"} align={"center"}>
            <Paper className="bg_img" shadow="sm" radius="md" withBorder>
              <Flex
                direction={"column"}
                justify={"center"}
                gap={"md"}
                align={"center"}
                style={{
                  padding: "4px",
                  width: "400px",
                  height: "200px",
                }}
              >
                <Avatar size={"xl"} src={"/icons/user.png"} />
                <Text size="md">Ruslan Bakiev</Text>
              </Flex>
            </Paper>
            <Text size="md">User identificator: P81209445</Text>
            <Button size="xl" variant="outline">
              Logout
            </Button>
          </Flex>
          <Flex direction={"column"} w={"100%"} flex={1} gap={"xl"}>
            <div className={classes.navbarMain}>{links}</div>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  )
}

export default Profile
