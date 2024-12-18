import { Alert, Box, Button, Container, Flex, Image, Input, NativeSelect, Select, Stepper, Text, TextInput } from "@mantine/core"
import Header from "../../Components/Headers/Header"

import UserMenu from "../../Components/UserMenu/UserMenu"
import { BsArrowDown } from "react-icons/bs"
import { AiOutlineDown } from "react-icons/ai"
import { CiCircleInfo } from "react-icons/ci"
const NewTransfer = () => {
  return (
    <Container size={"90%"} style={{ padding: "8px" }}>
      <Header />

      <Flex gap={"100px"} mt={40}>
        <UserMenu />

        <Flex justify={"center"} flex={1}>
          <Flex flex={1} direction={"column"} gap={"xl"}>
            <Stepper active={1}>
              <Stepper.Step label="Amount"></Stepper.Step>
              <Stepper.Step label="Receiver detail"></Stepper.Step>
              <Stepper.Step label="Review "></Stepper.Step>
              <Stepper.Step label="Pay"></Stepper.Step>
            </Stepper>
            <Flex direction={"column"} align={"center"} gap={"lg"}>
              <Flex w={"60%"} direction={"column"} gap={"lg"}>
                <Flex direction={"column"}>
                  <Text size="xl">Sending from Russia</Text>
                  <TextInput
                    size="xl"
                    rightSection={
                      <Select
                        data={["USD", "EUR"]}
                        size="xl"
                        rightSectionWidth={18}
                        styles={{
                          input: {
                            fontWeight: 500,
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                            whiteSpace: "nowrap",
                            overflow: "visible",
                            width: "90px",
                          },
                          dropdown: {
                            overflow: "auto",
                            width: "300px",
                            minWidth: "max-content",
                          },
                        }}
                      />
                    }
                  />
                </Flex>
                <Flex direction={"column"}>
                  <Text size="xl">Receiving in Turkey</Text>
                  <TextInput
                    size="xl"
                    rightSection={
                      <Select
                        data={["USD", "EUR"]}
                        size="xl"
                        rightSectionWidth={18}
                        styles={{
                          input: {
                            fontWeight: 500,
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                            whiteSpace: "nowrap",
                            overflow: "visible",
                            width: "90px",
                          },
                          dropdown: {
                            overflow: "auto",
                            width: "300px",
                            minWidth: "max-content",
                          },
                        }}
                      />
                    }
                  />
                </Flex>
                <Alert variant="light" color="blue" title="Alert title" icon={<CiCircleInfo />}>
                  Because of current regulations, we can't send money to this country right now. We'll let you know if this changes.
                </Alert>
                <Text ta={"center"}>I agree with terms and conditions</Text>
                <Flex justify={"center"}>
                  <Button px={"100px"} size="xl">
                    Continue
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  )
}

export default NewTransfer
