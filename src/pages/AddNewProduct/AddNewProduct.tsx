import Header from "../../Components/Headers/Header";
import { Container, Flex, Text } from "@mantine/core";
import UserMenu from "../../Components/UserMenu/UserMenu";

const AddNewProduct = () => {
  return (
    <Container size={"90%"} style={{ padding: "8px" }}>
      <Header />

      <Flex gap={"100px"} mt={40}>
        <UserMenu />
        <Flex flex={1} direction={"column"} align={"center"} gap={"md"}>
          <Flex
            p={"md"}
            style={{ border: "1px solid black", width: "100%",height:"190px" }}
            direction={"column"}
            gap={"md"}
            justify={"end"}
            align={"start"}
          >
            <Text size="30px">Products</Text>
            <Text size="xl" maw={"50%"}>
              Use all the possibilities of our products to make your business
              more efficient and profitable
            </Text>
          </Flex>
          <Flex
            
            w={"100%"}
            gap={"md"}
          >
            <Flex style={{border: "1px solid black"}} p={"md"} direction={"column"} w={"100%"} gap={"xl"}>
              <Text ta={"center"} size="30px">
                Insurance
              </Text>
              <div
                style={{
                  border: "1px solid black",
                  width: "100%",
                  height: "120px",
                }}
              ></div>
              <Text size="20px" ta={"center"}>
                Try supply chain insurance with coverage up to $10,000,000
              </Text>
              <Text pt={"md"} size="20px" ta={"center"}>
                Add service
              </Text>
            </Flex>
            <Flex style={{border: "1px solid black"}} p={"md"} direction={"column"} w={"100%"} gap={"xl"}>
              <Text ta={"center"} size="30px">
                Insurance
              </Text>
              <div
                style={{
                  border: "1px solid black",
                  width: "100%",
                  height: "120px",
                }}
              ></div>
              <Text size="20px" ta={"center"}>
                Try supply chain insurance with coverage up to $10,000,000
              </Text>
              <Text pt={"md"} size="20px" ta={"center"}>
                Add service
              </Text>
            </Flex>
            <Flex style={{border: "1px solid black"}} p={"md"} direction={"column"} w={"100%"} gap={"xl"}>
              <Text ta={"center"} size="30px">
                Insurance
              </Text>
              <div
                style={{
                  border: "1px solid black",
                  width: "100%",
                  height: "120px",
                }}
              ></div>
              <Text size="20px" ta={"center"}>
                Try supply chain insurance with coverage up to $10,000,000
              </Text>
              <Text pt={"md"} size="20px" ta={"center"}>
                Add service
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default AddNewProduct;
