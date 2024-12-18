import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Input,
  Stepper,
  Text,
} from "@mantine/core";
import Header from "../../Components/Headers/Header";

import UserMenu from "../../Components/UserMenu/UserMenu";
import { BsArrowDown } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
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
                  <Input
                    size="xl"
                    rightSection={
                      <Flex
                        pr={"md"}
                        direction={"row-reverse"}
                        align={"center"}
                        miw={"10px"}
                        gap={"md"}
                      >
                        <Text size="xl" style={{ whiteSpace: "nowrap" }}>
                          RUB <AiOutlineDown />
                        </Text>
                        <img
                          style={{ objectFit: "scale-down" }}
                          src="/icons/ru-flag.png"
                        />
                        <Text size="xl">200'000</Text>
                      </Flex>
                    }
                  />
                </Flex>
                <Flex direction={"column"}>
                  <Text size="xl">Receiving in Turkey</Text>
                  <Input
                    size="xl"
                    rightSection={
                      <Flex
                        pr={"md"}
                        direction={"row-reverse"}
                        align={"center"}
                        miw={"10px"}
                        gap={"md"}
                      >
                        <Text size="xl" style={{ whiteSpace: "nowrap" }}>
                          TRY <AiOutlineDown />
                        </Text>
                        <img
                          style={{ objectFit: "scale-down" }}
                          src="/icons/turkey-flag.png"
                        />
                        <Text size="xl">6'000</Text>
                      </Flex>
                    }
                  />
                </Flex>
                <Flex
                  style={{ border: "1px solid black",borderRadius:"8px" }}
                  p={"sm"}
                  mt={"xl"}
                  gap={"md"}
                  align={"center"}
                >
                  <img src="/icons/info.png" />
                  <Text size="xl">
                    Because of current regulations, we can't send money to this
                    country right now. We'll let you know if this changes.
                  </Text>
                </Flex>
                <Text ta={"center"}>I agree with terms and conditions</Text>
                <Flex justify={"center"}>
                  <Button px={"100px"} color="gray" size="xl" variant="outline">
                    Continue
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default NewTransfer;
