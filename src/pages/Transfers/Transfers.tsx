import { BackgroundImage, Button, Container, Flex, Input, Paper, Text, Title } from "@mantine/core"
import Header from "../../Components/Headers/Header"
import UserMenu from "../../Components/UserMenu/UserMenu"
import { useNavigate } from "react-router-dom"

const Transfers = () => {
  const navigate = useNavigate()
  return (
    <Container size={"90%"} style={{ padding: "8px" }}>
      <Header />

      <Flex gap={"100px"} mt={40}>
        <UserMenu />

        <Flex direction={"column"} gap={"xl"} flex={1}>
          <Paper shadow="sm" radius="md" withBorder>
            <BackgroundImage src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png" radius="sm">
              <Flex
                p={"md"}
                style={{
                  width: "100%",
                  height: "190px",
                }}
                direction={"column"}
                gap={"md"}
                justify={"end"}
                align={"start"}
              >
                <Text size="30px">Transfers</Text>
                <Flex w={"100%"} align={"end"} justify={"space-between"}>
                  <Text size="xl" maw={"50%"}>
                    Use all the possibilities of our products to make your business more efficient and profitable
                  </Text>
                  <Button onClick={() => navigate("/new-transfer")} px={"60px"} size="xl">
                    New transfer
                  </Button>
                </Flex>
              </Flex>
            </BackgroundImage>
          </Paper>
          <Input placeholder="Search" size="lg" rightSection={<img src="/icons/filter.png" />} />
          <Flex direction={"column"} gap={"xl"}>
            <Flex onClick={() => navigate("/transfer")} style={{ cursor: "pointer" }} direction={"column"}>
            <Title order={4} style={{textTransform:"uppercase"}}>Awaiting payment</Title>
              <Paper shadow="sm" radius={"md"} withBorder>
                <Flex p={"md"} align={"center"}>
                  <Text size="lg" flex={1}>
                    20 Jan 2024
                  </Text>
                  <Flex flex={1} direction={"column"} justify={"center"}>
                    <Text size="xl">RUSLAN BAKIEV</Text>
                    <Text size="lg">Sending from individual bank account in Russia</Text>
                  </Flex>
                  <Flex flex={1} justify={"flex-end"} gap={"sm"} align={"center"}>
                    <Text size="30px">5'000 USD</Text>
                    <img src="/icons/usa-flag.png" />
                  </Flex>
                </Flex>
              </Paper>
              <Paper shadow="sm" radius={"md"} withBorder>
                <Flex p={"md"} align={"center"}>
                  <Text size="lg" flex={1}>
                    20 Jan 2024
                  </Text>
                  <Flex flex={1} direction={"column"} justify={"center"}>
                    <Text size="xl">RUSLAN BAKIEV</Text>
                    <Text size="lg">Sending from individual bank account in Russia</Text>
                  </Flex>
                  <Flex flex={1} justify={"flex-end"} gap={"sm"} align={"center"}>
                    <Text size="30px">5'000 USD</Text>
                    <img src="/icons/usa-flag.png" />
                  </Flex>
                </Flex>
              </Paper>
            </Flex>
            <Flex onClick={() => navigate("/transfer")}  style={{ cursor: "pointer" }} direction={"column"}>
            <Title order={4} style={{textTransform:"uppercase"}} >Issued</Title>
              
              <Paper shadow="sm" radius={"md"} withBorder>
                <Flex p={"md"} align={"center"}>
                  <Text size="lg" flex={1}>
                    20 Jan 2024
                  </Text>
                  <Flex flex={1} direction={"column"} justify={"center"}>
                    <Text size="xl">RUSLAN BAKIEV</Text>
                    <Text size="lg">Sending from individual bank account in Russia</Text>
                  </Flex>
                  <Flex flex={1} justify={"flex-end"} gap={"sm"} align={"center"}>
                    <Text size="30px">5'000 USD</Text>
                    <img src="/icons/usa-flag.png" />
                  </Flex>
                </Flex>
              </Paper>
              <Paper shadow="sm" radius={"md"} withBorder>
                <Flex p={"md"} align={"center"}>
                  <Text size="lg" flex={1}>
                    20 Jan 2024
                  </Text>
                  <Flex flex={1} direction={"column"} justify={"center"}>
                    <Text size="xl">RUSLAN BAKIEV</Text>
                    <Text size="lg">Sending from individual bank account in Russia</Text>
                  </Flex>
                  <Flex flex={1} justify={"flex-end"} gap={"sm"} align={"center"}>
                    <Text size="30px">5'000 USD</Text>
                    <img src="/icons/usa-flag.png" />
                  </Flex>
                </Flex>
              </Paper>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  )
}

export default Transfers
