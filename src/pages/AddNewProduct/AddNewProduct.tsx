import Header from "../../Components/Headers/Header"
import { Badge, Button, Card, Container, Flex, Grid, Group, Image, Paper, Text } from "@mantine/core"
import UserMenu from "../../Components/UserMenu/UserMenu"

const AddNewProduct = () => {
  return (
    <Container size={"90%"} style={{ padding: "8px" }}>
      <Header />

      <Flex gap={"100px"} className="flex-col" wrap={"wrap"} mt={40}>
        <UserMenu />
        <Flex flex={1} direction={"column"} align={"center"} gap={"md"}>
          <Paper className="bg_img" w={"100%"} shadow="sm" radius={"md"} withBorder>
            <Flex p={"md"} className="header" direction={"column"} gap={"md"}>
              <Text size="30px">Products</Text>
              <Text size="md" className="header-description-text">
                Use all the possibilities of our products to make your business more efficient and profitable
              </Text>
            </Flex>
          </Paper>
          <Grid grow>
            <Grid.Col span={{ base: 3, md: 6, lg: 3 }}>
              <Card w={"100%"} flex={1} style={{ flexShrink: 0 }} shadow="sm" padding="lg" radius="md" withBorder>
                <Text ta={"center"} size="xl" fw={500}>
                  Insurance
                </Text>

                <Card.Section p={10}>
                  <Image
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                    height={160}
                    alt="Norway"
                  />
                </Card.Section>

                <Text size="md" ta={"center"}>
                  Try supply chain insurance with coverage up to $10,000,000
                </Text>

                <Button color="blue" fullWidth size="xl" variant="outline" mt="md" radius="md">
                  Add service
                </Button>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 3, md: 6, lg: 3 }}>
              <Card flex={1} shadow="sm" padding="lg" style={{ flexShrink: 0 }} radius="md" withBorder>
                <Text ta={"center"} size="xl" fw={500}>
                  Insurance
                </Text>

                <Card.Section p={10}>
                  <Image
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                    height={160}
                    alt="Norway"
                  />
                </Card.Section>

                <Text size="md" ta={"center"}>
                  Try supply chain insurance with coverage up to $10,000,000
                </Text>

                <Button color="blue" fullWidth size="xl" variant="outline" mt="md" radius="md">
                  Add service
                </Button>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 3, md: 6, lg: 3 }}>
            <Card flex={1} shadow="sm" padding="lg" style={{ flexShrink: 0 }} radius="md" withBorder>
              <Text ta={"center"} size="xl" fw={500}>
                Insurance
              </Text>

              <Card.Section p={10}>
                <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png" height={160} alt="Norway" />
              </Card.Section>

              <Text size="md" ta={"center"}>
                Try supply chain insurance with coverage up to $10,000,000
              </Text>

              <Button color="blue" fullWidth size="xl" variant="outline" mt="md" radius="md">
                Add service
              </Button>
            </Card>
            </Grid.Col>
          </Grid>
        </Flex>
      </Flex>
    </Container>
  )
}

export default AddNewProduct
