import { Button, Container, Flex, Input, Text } from "@mantine/core";
import Header from "../../Components/Headers/Header";
import UserMenu from "../../Components/UserMenu/UserMenu";
import { useNavigate } from "react-router-dom";

const Transfers = () => {
  const navigate = useNavigate();
  return (
    <Container size={"90%"} style={{ padding: "8px" }}>
      <Header />

      <Flex gap={"100px"} mt={40}>
        <UserMenu />

        <Flex direction={"column"} gap={"xl"} flex={1}>
          <Flex
            p={"md"}
            style={{
              border: "1px solid black",
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
                Use all the possibilities of our products to make your business
                more efficient and profitable
              </Text>
              <Button
                onClick={() => navigate("/new-transfer")}
                px={"60px"}
                color="gray"
                variant="outline"
                size="lg"
              >
                New transfer
              </Button>
            </Flex>
          </Flex>
          <Input
            placeholder="Search"
            size="lg"
            rightSection={<img src="/icons/filter.png" />}
          />
          <Flex direction={"column"} gap={"xl"}>
            <Flex onClick={() => navigate("/transfer")} style={{cursor:"pointer"}} direction={"column"}>
              <Text size="xl">Awaiting payment</Text>
              <Flex
                
                style={{ border: "1px solid black" }}
                p={"md"}
                align={"center"}
              >
                <Text size="lg" flex={1}>
                  20 Jan 2024
                </Text>
                <Flex flex={1} direction={"column"} justify={"center"}>
                  <Text size="xl">RUSLAN BAKIEV</Text>
                  <Text size="lg">
                    Sending from individual bank account in Russia
                  </Text>
                </Flex>
                <Flex flex={1} justify={"flex-end"} gap={"sm"} align={"center"}>
                  <Text size="30px">5'000 USD</Text>
                  <img src="/icons/flag.png" />
                </Flex>
              </Flex>
              <Flex
                style={{ border: "1px solid black" }}
                p={"md"}
                align={"center"}
              >
                <Text size="lg" flex={1}>
                  20 Jan 2024
                </Text>
                <Flex flex={1} direction={"column"} justify={"center"}>
                  <Text size="xl">RUSLAN BAKIEV</Text>
                  <Text size="lg">
                    Sending from individual bank account in Russia
                  </Text>
                </Flex>
                <Flex flex={1} justify={"flex-end"} gap={"sm"} align={"center"}>
                  <Text size="30px">5'000 USD</Text>
                  <img src="/icons/flag.png" />
                </Flex>
              </Flex>
            </Flex>
            <Flex onClick={() => navigate("/transfer")} style={{cursor:"pointer"}} direction={"column"}>
              <Text size="xl">Issued</Text>
              <Flex
                style={{ border: "1px solid black" }}
                p={"md"}
                align={"center"}
              >
                <Text size="lg" flex={1}>
                  20 Jan 2024
                </Text>
                <Flex flex={1} direction={"column"} justify={"center"}>
                  <Text size="xl">RUSLAN BAKIEV</Text>
                  <Text size="lg">
                    Sending from individual bank account in Russia
                  </Text>
                </Flex>
                <Flex flex={1} justify={"flex-end"} gap={"sm"} align={"center"}>
                  <Text size="30px">5'000 USD</Text>
                  <img src="/icons/flag.png" />
                </Flex>
              </Flex>
              <Flex
                style={{ border: "1px solid black" }}
                p={"md"}
                align={"center"}
              >
                <Text size="lg" flex={1}>
                  20 Jan 2024
                </Text>
                <Flex flex={1} direction={"column"} justify={"center"}>
                  <Text size="xl">RUSLAN BAKIEV</Text>
                  <Text size="lg">
                    Sending from individual bank account in Russia
                  </Text>
                </Flex>
                <Flex flex={1} justify={"flex-end"} gap={"sm"} align={"center"}>
                  <Text size="30px">5'000 USD</Text>
                  <img src="/icons/flag.png" />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Transfers;
