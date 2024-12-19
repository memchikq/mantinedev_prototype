import Header from "../../Components/Headers/Header"
import { Badge, Button, Card, Container, Flex, Group, Image, Paper, Text, Title } from "@mantine/core"
import UserMenu from "../../Components/UserMenu/UserMenu"

const AddNewProduct = () => {
  return (
    <Container size={"90%"} style={{ padding: "8px" }}>
      <Header />

      <Flex gap={"100px"} mt={40}>
        <UserMenu />
        <Flex flex={1} direction={"column"} align={"center"} gap={"md"}>
          <Paper className="bg_img" w={"100%"} shadow="sm" radius={"md"} withBorder>
            <Flex
              p={"md"}
              style={{ width: "100%", height: "190px" }}
              // bg={"#9fe870"}
              direction={"column"}
              gap={"md"}
              justify={"end"}
              align={"start"}
            >
              <Text  size="30px" >
                Products
              </Text>
              <Text size="md" ta={"center"}>
                Use all the possibilities of our products to make your business more efficient and profitable
              </Text>
            </Flex>
          </Paper>
          <Flex w={"100%"} gap={"md"}>
            <Card flex={1} shadow="sm" padding="lg" radius="md" withBorder>
              <Title ta={"center"} style={{ textTransform: "uppercase" }}  order={5}>
                Insurance
              </Title>

              <Card.Section p={10}>
                <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png" height={160} alt="Norway" />
              </Card.Section>

              <Text size="md" ta={"center"} >
                Try supply chain insurance with coverage up to $10,000,000
              </Text>

              <Button color="blue" fullWidth size="xl" variant="outline" mt="md" radius="md">
                Add service
              </Button>
            </Card>
            <Card flex={1} shadow="sm" padding="lg" radius="md" withBorder>
            <Title ta={"center"} style={{ textTransform: "uppercase" }}  order={5}>
                Insurance
              </Title>

              <Card.Section p={10}>
                <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png" height={160} alt="Norway" />
              </Card.Section>

              <Text size="md" ta={"center"} >
                Try supply chain insurance with coverage up to $10,000,000
              </Text>

              <Button color="blue" fullWidth size="xl" variant="outline" mt="md" radius="md">
                Add service
              </Button>
            </Card>
            <Card flex={1} shadow="sm" padding="lg" radius="md" withBorder>
            <Title ta={"center"} style={{ textTransform: "uppercase" }} order={5}>
                Insurance
              </Title>

              <Card.Section p={10}>
                <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png" height={160} alt="Norway" />
              </Card.Section>

              <Text size="md" ta={"center"} >
                Try supply chain insurance with coverage up to $10,000,000
              </Text>

              <Button color="blue" fullWidth size="xl" variant="outline" mt="md" radius="md">
                Add service
              </Button>
            </Card>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  )
}

export default AddNewProduct
