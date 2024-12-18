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
            style={{  width: "100%",height:"190px",borderRadius:"8px",fontWeight:"bold" }}
            // bg={"#9fe870"}
            bd={"1px solid black"}
            direction={"column"}
            gap={"md"}
            justify={"end"}
            align={"start"}
          >
            <Text size="30px" fw={555}>Products</Text>
            <Text fw={500}  size="xl" maw={"50%"}>
              Use all the possibilities of our products to make your business
              more efficient and profitable
            </Text>
          </Flex>
          <Flex
            
            w={"100%"}
            gap={"md"}
          >
            <Flex style={{border: "1px solid black",borderRadius:"8px"}} p={"md"} direction={"column"} w={"100%"} gap={"xl"}>
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
            <Flex style={{border: "1px solid black",borderRadius:"8px"}} p={"md"} direction={"column"} w={"100%"} gap={"xl"}>
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
            <Flex style={{border: "1px solid black",borderRadius:"8px"}} p={"md"} direction={"column"} w={"100%"} gap={"xl"}>
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
