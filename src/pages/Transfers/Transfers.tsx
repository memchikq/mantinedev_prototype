import { BackgroundImage, Button, Container, Divider, Flex, Input, Paper, Text, Title } from "@mantine/core"
import Header from "../../Components/Headers/Header"
import UserMenu from "../../Components/UserMenu/UserMenu"
import { useNavigate } from "react-router-dom"

const data = [
  { date: "20 Jan 2024", name: "Ruslan Bakiev", description: "Sending from individual bank account in Russia", sum: "5'000", type: "$" },
  { date: "20 Jan 2024", name: "Ruslan Bakiev", description: "Sending from individual bank account in Russia", sum: "5'000", type: "$" },
  { date: "20 Jan 2024", name: "Ruslan Bakiev", description: "Sending from individual bank account in Russia", sum: "5'000", type: "$" },
  { date: "20 Jan 2024", name: "Ruslan Bakiev", description: "Sending from individual bank account in Russia", sum: "5'000", type: "$" },
  { date: "20 Jan 2024", name: "Ruslan Bakiev", description: "Sending from individual bank account in Russia", sum: "5'000", type: "$" },
]

const Transfers = () => {
  const navigate = useNavigate()
  return (
    <Container size={"90%"} style={{ padding: "8px" }}>
      <Header />

      <Flex gap={"100px"} mt={40}>
        <UserMenu />

        <Flex direction={"column"} gap={"xl"} flex={1}>
          <Paper className="bg_img" shadow="sm" radius="md" withBorder>
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
          </Paper>
          <Input placeholder="Search" size="lg" rightSection={<img src="/icons/filter.png" />} />
          <Flex direction={"column"} gap={"xl"}>
            <Flex onClick={() => navigate("/transfer")} style={{ cursor: "pointer" }} direction={"column"}>
              <Title order={5} style={{ textTransform: "uppercase" }}>
                Awaiting payment
              </Title>
              {data.map((v, i) => (
                <Paper
                  key={i}
                  shadow="sm"
                  radius={"md"}
                  styles={{
                    root: {
                      borderBottom: i !== data.length - 1 ? "0px" : "",
                      borderBottomRightRadius: i == data.length -1 ? "8px" : 0,
                      borderBottomLeftRadius: i == data.length -1 ? "8px" : 0 ,
                      borderTopLeftRadius: i !== 0 ? 0 : "8px",
                      borderTopRightRadius: i !== 0 ? 0 : "8px",
                      borderTop: i !== 0 ? 0 : "",
                    },
                  }}
                  withBorder
                >
                  <Flex p={"md"} align={"center"}>
                    <Text size="md" flex={1}>
                      {v.date}
                    </Text>
                    <Flex flex={1} direction={"column"} justify={"center"}>
                      <Text size="md">{v.name}</Text>
                      <Text size="md">{v.description}</Text>
                    </Flex>
                    <Flex flex={1} justify={"flex-end"} gap={"sm"} align={"center"}>
                      <Text size="md" fw={500}>
                        {v.sum} {v.type}
                      </Text>
                      <img src="/icons/usa-flag.png" />
                    </Flex>
                  </Flex>
                  <Divider hidden={i == data.length -1} />
                </Paper>
              ))}
            </Flex>
            <Flex onClick={() => navigate("/transfer")} style={{ cursor: "pointer" }} direction={"column"}>
              <Title order={5} style={{ textTransform: "uppercase" }}>
                Issued
              </Title>

              {data.map((v, i) => (
                <Paper
                  key={i}
                  shadow="sm"
                  radius={"md"}
                  styles={{
                    root: {
                      borderBottom: i !== data.length - 1 ? "0px" : "",
                      borderBottomRightRadius: i == data.length -1 ? "8px" : 0,
                      borderBottomLeftRadius: i == data.length -1 ? "8px" : 0 ,
                      borderTopLeftRadius: i !== 0 ? 0 : "8px",
                      borderTopRightRadius: i !== 0 ? 0 : "8px",
                      borderTop: i !== 0 ? 0 : "",
                    },
                  }}
                  withBorder
                >
                  <Flex p={"md"} align={"center"}>
                    <Text size="md" flex={1}>
                      {v.date}
                    </Text>
                    <Flex flex={1} direction={"column"} justify={"center"}>
                      <Text size="md">{v.name}</Text>
                      <Text size="md">{v.description}</Text>
                    </Flex>
                    <Flex flex={1} justify={"flex-end"} gap={"sm"} align={"center"}>
                      <Text size="md" fw={500}>
                        {v.sum} {v.type}
                      </Text>
                      <img src="/icons/usa-flag.png" />
                    </Flex>
                  </Flex>
                  <Divider hidden={i == data.length -1} />
                </Paper>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  )
}

export default Transfers
