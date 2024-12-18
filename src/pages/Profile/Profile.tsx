import { Avatar, Button, Container, Flex, Text, Title } from "@mantine/core"
import Header from "../../Components/Headers/Header"
import UserMenu from "../../Components/UserMenu/UserMenu"
import { IoIosNotifications } from "react-icons/io"
import { FaChevronRight, FaQuestion } from "react-icons/fa"
import { CiLock } from "react-icons/ci"

const Profile = () => {
  return (
    <Container size={"90%"} style={{ padding: "8px" }}>
      <Header />

      <Flex gap={"100px"} mt={40}>
        <UserMenu />

        <Flex flex={1} justify={"center"} gap={"md"}>
          <Flex flex={1} direction={"column"} gap={"md"} align={"center"}>
            <Flex
              direction={"column"}
              justify={"center"}
              gap={"md"}
              align={"center"}
              style={{
                padding: "4px",
                width: "400px",
                height: "200px",
                border: "1px solid black",
                borderRadius:"8px"
              }}
            >
              <Avatar size={"xl"} src={"/icons/user.png"} />
              <Text size="xl">Ruslan Bakiev</Text>
            </Flex>

            <Text>User identificator: P81209445</Text>
            <Button size="xl" variant="outline" color="gray">
              Logout
            </Button>
          </Flex>
          <Flex direction={"column"} w={"100%"} flex={1} gap={"xl"}>
            <Flex direction={"column"} gap={"lg"}>
              <Text size="30px">Quick access</Text>
              <Flex justify={"space-between"} align={"center"}>
                <Flex gap={"md"} align={"center"} flex={1}>
                  <Flex
                    justify={"center"}
                    align={"center"}
                    style={{
                      padding: "2px",
                      width: "40px",
                      height: "40px",
                      border: "1px solid black",
                      borderRadius: "100%",
                      
                    }}
                  >
                    <IoIosNotifications size={20} />
                  </Flex>
                  <Text size="26px">Notifications</Text>
                </Flex>
                <FaChevronRight />
              </Flex>
              <Flex justify={"space-between"} align={"center"}>
                <Flex gap={"md"} align={"center"} flex={1}>
                  <Flex
                    justify={"center"}
                    align={"center"}
                    style={{
                      padding: "2px",
                      width: "40px",
                      height: "40px",
                      border: "1px solid black",
                      borderRadius: "100%",
                      
                    }}
                  >
                    <FaQuestion />
                  </Flex>
                  <Text size="26px">Help and FAQ's</Text>
                </Flex>
                <FaChevronRight />
              </Flex>
            </Flex>
            <Flex direction={"column"} gap={"lg"}>
              <Text size="30px">Settings</Text>
              <Flex justify={"space-between"} align={"center"}>
                <Flex gap={"md"} align={"center"} flex={1}>
                  <Flex
                    justify={"center"}
                    align={"center"}
                    style={{
                      padding: "2px",
                      width: "40px",
                      height: "40px",
                      border: "1px solid black",
                      borderRadius: "100%",
                    }}
                  >
                    <CiLock size={20} />
                  </Flex>
                  <Flex direction={"column"}>
                    <Text size="26px">Security and privacy</Text>
                    <Text size="20px">Adjust security and privacy settings.</Text>
                  </Flex>
                </Flex>
                <FaChevronRight />
              </Flex>
              <Flex justify={"space-between"} align={"center"}>
                <Flex gap={"md"} align={"center"} flex={1}>
                  <Flex
                    justify={"center"}
                    align={"center"}
                    style={{
                      padding: "2px",
                      width: "40px",
                      height: "40px",
                      border: "1px solid black",
                      borderRadius: "100%",
                    }}
                  >
                    <CiLock size={20} />
                  </Flex>
                  <Flex direction={"column"}>
                    <Text size="26px">Security and privacy</Text>
                    <Text size="20px">Adjust security and privacy settings.</Text>
                  </Flex>
                </Flex>
                <FaChevronRight />
              </Flex>
              <Flex justify={"space-between"} align={"center"}>
                <Flex gap={"md"} align={"center"} flex={1}>
                  <Flex
                    justify={"center"}
                    align={"center"}
                    style={{
                      padding: "2px",
                      width: "40px",
                      height: "40px",
                      border: "1px solid black",
                      borderRadius: "100%",
                    }}
                  >
                    <CiLock size={20} />
                  </Flex>
                  <Flex direction={"column"}>
                    <Text size="26px">Security and privacy</Text>
                    <Text size="20px">Adjust security and privacy settings.</Text>
                  </Flex>
                </Flex>
                <FaChevronRight />
              </Flex>

              
            </Flex>
            <Flex direction={"column"} gap={"lg"}>
              <Text size="30px">Settings</Text>
              <Flex justify={"space-between"} align={"center"}>
                <Flex gap={"md"} align={"center"} flex={1}>
                  <Flex
                    justify={"center"}
                    align={"center"}
                    style={{
                      padding: "2px",
                      width: "40px",
                      height: "40px",
                      border: "1px solid black",
                      borderRadius: "100%",
                    }}
                  >
                    <CiLock size={20} />
                  </Flex>
                  <Flex direction={"column"}>
                    <Text size="26px">Security and privacy</Text>
                    <Text size="20px">Adjust security and privacy settings.</Text>
                  </Flex>
                </Flex>
                <FaChevronRight />
              </Flex>
              <Flex justify={"space-between"} align={"center"}>
                <Flex gap={"md"} align={"center"} flex={1}>
                  <Flex
                    justify={"center"}
                    align={"center"}
                    style={{
                      padding: "2px",
                      width: "40px",
                      height: "40px",
                      border: "1px solid black",
                      borderRadius: "100%",
                    }}
                  >
                    <CiLock size={20} />
                  </Flex>
                  <Flex direction={"column"}>
                    <Text size="26px">Security and privacy</Text>
                    <Text size="20px">Adjust security and privacy settings.</Text>
                  </Flex>
                </Flex>
                <FaChevronRight />
              </Flex>
              <Flex justify={"space-between"} align={"center"}>
                <Flex gap={"md"} align={"center"} flex={1}>
                  <Flex
                    justify={"center"}
                    align={"center"}
                    style={{
                      padding: "2px",
                      width: "40px",
                      height: "40px",
                      border: "1px solid black",
                      borderRadius: "100%",
                    }}
                  >
                    <CiLock size={20} />
                  </Flex>
                  <Flex direction={"column"}>
                    <Text size="26px">Security and privacy</Text>
                    <Text size="20px">Adjust security and privacy settings.</Text>
                  </Flex>
                </Flex>
                <FaChevronRight />
              </Flex>

              
            </Flex>
          
          </Flex>
        </Flex>
      </Flex>
    </Container>
  )
}

export default Profile
