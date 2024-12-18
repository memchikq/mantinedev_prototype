import { Avatar, Button, Container, Flex, Stepper, Text, Title } from "@mantine/core"
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
                  <Flex style={{ border: "1px solid black" }} p={"md"} gap={"sm"} direction={"column"}>
                    <Text size="lg">Sender</Text>
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
                          transform:"translateY(5px)",
                          background:"white",
                          zIndex:30
                        }}
                      >
                        <AiOutlineDown />

                      </div>
                    </div>
                  </Flex>
                  <Flex style={{ border: "1px solid black" }} p={"md"} gap={"sm"} direction={"column"}>
                    <Text size="lg">Receiver</Text>
                    <Text size="xl">RUSLAN BAKIEV</Text>
                    <Flex gap={"sm"}>
                      <Text size="xl">5'000 USD</Text>
                      <img src="/icons/usa-flag.png" />
                    </Flex>
                    <Text>Sending from individual bank account in Russia</Text>
                  </Flex>
                </Flex>
                <Flex direction={"column"}>
                  
                  <Flex flex={1} direction={"column"} gap={"md"} justify={"center"} align={"center"} p={"md"} bd={"1px solid black"}>
                    <img style={{ width: "180px", height: "180px" }} src="/icons/qr.png" />
                    <Text>PIN: 2467</Text>
                    <Text>Use PIN or QR code to receive the transfer</Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex mt={"xl"}>
                <Flex flex={2.5} direction={"column"} align={"flex-end"}></Flex>
                <Flex flex={1} direction={"column"} gap={"md"}>
                  <Flex flex={1} justify={"flex-end"} align={"center"}>
                    <Flex gap={"md"} align={"center"} flex={1}>
                      <div
                        style={{
                          padding: "2px",
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "1px solid black",
                          borderRadius: "100%",
                        }}
                      >
                        <FaCloudDownloadAlt size={20} />
                      </div>
                      <Flex direction={"column"}>
                        <Text size="20px">Download receipt</Text>
                      </Flex>
                    </Flex>
                    <FaChevronRight />
                  </Flex>
                  <Flex flex={1} justify={"flex-end"} align={"center"}>
                    <Flex gap={"md"} align={"center"} flex={1}>
                      <div
                        style={{
                          padding: "2px",
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "1px solid black",
                          borderRadius: "100%",
                        }}
                      >
                        <FaQuestion size={20} />
                      </div>
                      <Flex direction={"column"}>
                        <Text size="20px">Support</Text>
                      </Flex>
                    </Flex>
                    <FaChevronRight />
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
