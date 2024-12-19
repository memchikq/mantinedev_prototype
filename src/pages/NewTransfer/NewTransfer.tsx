import {
  Alert,
  Box,
  Button,
  Container,
  Flex,
  Group,
  Image,
  Input,
  Menu,
  NativeSelect,
  Select,
  Stepper,
  Text,
  TextInput,
  UnstyledButton,
} from "@mantine/core"
import Header from "../../Components/Headers/Header"

import UserMenu from "../../Components/UserMenu/UserMenu"
import { BsArrowDown } from "react-icons/bs"
import { AiOutlineDown } from "react-icons/ai"
import { CiCircleInfo } from "react-icons/ci"
import { useState } from "react"
import classes from "./NewTransfer.module.css"
const data = [
  { label: "USA", image: <span className="fi fi-us"></span>, currency: "USD" },
  { label: "German", image: <span className="fi fi-de"></span>, currency: "EUR" },
  { label: "Italian", image: <span className="fi fi-it"></span>, currency: "EUR" },
  { label: "French", image: <span className="fi fi-fr"></span>, currency: "EUR" },
]
const NewTransfer = () => {
  const [val, setVal] = useState<any>("")
  const [openedFrom, setOpenedFrom] = useState(false)
  const [selectedFrom, setSelectedFrom] = useState(data[0])
  const [openedTo, setOpenedTo] = useState(false)
  const [selectedTo, setSelectedTo] = useState(data[0])
  const itemsFrom = data.map((item) => (
    <Menu.Item onClick={() => setSelectedFrom(item)} key={item.label}>
      {item.image}  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, corporis.
    </Menu.Item>
  ))
  const itemsTo = data.map((item) => (
    <Menu.Item onClick={() => setSelectedTo(item)} key={item.label}>
      {item.image}  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, corporis.
    </Menu.Item>
  ))
  return (
    <Container size={"90%"} style={{ padding: "8px" }}>
      <Header />

      <Flex className="flex-col" gap={"100px"} mt={40}>
        <UserMenu />

        <Flex pb={"xl"} justify={"center"} flex={1}>
          <Flex flex={1} direction={"column"} gap={"xl"}>
            <Stepper active={1}>
              <Stepper.Step  icon={<></>} label="Amount"></Stepper.Step>
              <Stepper.Step icon={<></>} label="Receiver detail"></Stepper.Step>
              <Stepper.Step icon={<></>} label="Review "></Stepper.Step>
              <Stepper.Step icon={<></>} label="Pay"></Stepper.Step>
            </Stepper>
            <Flex direction={"column"} align={"center"} gap={"lg"}>
              <Flex className="new-transfer" direction={"column"} gap={"lg"}>
                <Flex direction={"column"}>
                  <Text size="xl">Sending from Russia</Text>
                  <TextInput
                    size="xl"
                    styles={{
                      input: {
                        fontSize: "16px",
                      },
                    }}
                    mr={"md"}
                    rightSection={
                      <Menu
                        onOpen={() => setOpenedTo(true)}
                        onClose={() => setOpenedTo(false)}
                        styles={{
                          dropdown: {
                            minWidth: "500px",
                          },
                        }}
                        radius="md"
                        width="target"
                      >
                        <Menu.Target>
                          <UnstyledButton className={classes.control} data-expanded={openedFrom || undefined}>
                            <Flex gap="xs" w={80}>
                              <span className={classes.label}>{selectedTo.currency}</span>
                              <>{selectedTo.image}</>
                            </Flex>
                          </UnstyledButton>
                        </Menu.Target>
                        <Menu.Dropdown>{itemsTo}</Menu.Dropdown>
                      </Menu>
                    }
                  />
                </Flex>
                <Flex direction={"column"}>
                  <Text size="xl">Receiving in Turkey</Text>
                  <TextInput
                    size="xl"
                    mr={"md"}
                    rightSection={
                      <Menu
                        onOpen={() => setOpenedFrom(true)}
                        onClose={() => setOpenedFrom(false)}
                        styles={{
                          dropdown: {
                            minWidth: "500px",
                          },
                        }}
                        radius="md"
                        width="target"
                      >
                        <Menu.Target>
                          <UnstyledButton className={classes.control} data-expanded={openedFrom || undefined}>
                            <Flex gap="xs" w={80}>
                              <span className={classes.label}>{selectedFrom.currency} </span>
                              <>{selectedFrom.image}</>
                            </Flex>
                          </UnstyledButton>
                        </Menu.Target>
                        <Menu.Dropdown>{itemsFrom}</Menu.Dropdown>
                      </Menu>
                    }
                  />
                </Flex>
                <Alert variant="light" color="blue" icon={<CiCircleInfo />}>
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
