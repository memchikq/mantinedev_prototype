import { Avatar, Button, Container, Flex, NavLink, Paper, Stepper, Text, Title } from "@mantine/core"
import Header from "../../Components/Headers/Header"
import UserMenu from "../../Components/UserMenu/UserMenu"
import { FaChevronRight, FaCloudDownloadAlt, FaQuestion } from "react-icons/fa"
import { AiOutlineDown } from "react-icons/ai"

const Transfer = () => {
  return (
    <Container size={"90%"} style={{ padding: "8px" }}>
      <Header />

      <Flex gap={"100px"} mt={40}>
        <UserMenu />

        <Flex justify={"center"} flex={1}>
          <Flex flex={1} direction={"column"} gap={"xl"}>
            <Stepper active={1}>
              <Stepper.Step label="Created" description="2024.12.01 10:30 "></Stepper.Step>
              <Stepper.Step label="Accepted payment" description="2024.12.01 10:30"></Stepper.Step>
              <Stepper.Step label="Ready to be issued " description="2024.12.01 10:32"></Stepper.Step>
              <Stepper.Step label="Issued">Issued</Stepper.Step>
            </Stepper>

            <Flex flex={1} direction={"column"} justify={"center"}>
              <Flex flex={1} justify={"center"} gap={"xl"}>
                <Flex flex={1} pos={"relative"} direction={"column"} gap={"sm"}>
                  <Paper shadow="sm" radius={"md"} withBorder>
                    <Flex p={"md"} gap={"sm"} direction={"column"}>
                      <Title order={4} style={{ textTransform: "uppercase" }} size="xl">
                        Sender
                      </Title>
                      <Text size="xl">RUSLAN BAKIEV</Text>
                      <Flex gap={"sm"}>
                        <Text size="xl">5'000 USD</Text>
                        <img src="/icons/usa-flag.png" />
                      </Flex>
                      <Text>Sending from individual bank account in Russia</Text>
                      <div style={{ display: "flex", justifyContent: "center", zIndex: 30 }}>
                        <div
                          style={{
                            borderRadius: "100%",
                            position: "absolute",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "30px",
                            height: "30px",
                            border: "2px solid black",
                            transform: "translateY(5px)",
                            background: "white",
                            zIndex: 30,
                          }}
                        >
                          <AiOutlineDown />
                        </div>
                      </div>
                    </Flex>
                  </Paper>
                  <Paper shadow="sm" radius={"md"} withBorder>
                    <Flex p={"md"} gap={"sm"} direction={"column"}>
                      <Title order={4} style={{ textTransform: "uppercase" }} size="xl">
                        Receiver
                      </Title>
                      <Text size="xl">RUSLAN BAKIEV</Text>
                      <Flex gap={"sm"}>
                        <Text size="xl">5'000 USD</Text>
                        <img src="/icons/usa-flag.png" />
                      </Flex>
                      <Text>Sending from individual bank account in Russia</Text>
                    </Flex>
                  </Paper>
                </Flex>
                <Flex direction={"column"}>
                  <Paper flex={1} shadow="sm" h={"100%"} radius={"md"} withBorder>
                    <Flex flex={1} direction={"column"} gap={"md"} justify={"center"} align={"center"} p={"md"}>
                      <img style={{ width: "180px", height: "180px" }} src="/icons/qr.png" />
                      <Text>PIN: 2467</Text>
                      <Text>Use PIN or QR code to receive the transfer</Text>
                    </Flex>
                  </Paper>
                </Flex>
              </Flex>
              <Flex mt={"xl"}>
                <Flex flex={2.5} direction={"column"} align={"flex-end"}></Flex>
                <Flex  w={335} direction={"column"} gap={"md"}>
                  <Flex flex={1} justify={"flex-end"} align={"center"}>
                    <Flex gap={"md"} align={"center"} flex={1}>
                      <NavLink
                        label="Download receipt"
                        rightSection={<FaChevronRight size={20} />}
                        leftSection={<FaCloudDownloadAlt size={20} />}
                      />
                    </Flex>
                  </Flex>
                  <Flex flex={1} justify={"flex-end"} align={"center"}>
                    <Flex gap={"md"} align={"center"} flex={1}>
                      <NavLink
                        label="Download receipt"
                        rightSection={<FaChevronRight size={20} />}
                        leftSection={<FaQuestion size={20} />}
                      />
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  )
}

export default Transfer
