import { Box, NavLink, Space, Text } from "@mantine/core"
import "./UserMenu.css"
import { Link, useNavigate } from "react-router-dom"
import { IoLogoUsd } from "react-icons/io"
import { CiUmbrella } from "react-icons/ci"
import { MdOutlineSecurity } from "react-icons/md"
import { GoGraph } from "react-icons/go"
import { FaPlus } from "react-icons/fa"

const UserMenu = () => {
  const navigate = useNavigate()
  return (
    <Box visibleFrom="md">
      <NavLink onClick={() => navigate("/")} label={<Text size="16px">Transfers</Text>} leftSection={<IoLogoUsd />} />
      <NavLink label={<Text size="16px">Insurance</Text>} leftSection={<CiUmbrella />} />
      <NavLink label={<Text size="16px">Smart contracts</Text>} leftSection={<MdOutlineSecurity />} />
      <NavLink label={<Text size="16px">Salaries</Text>} leftSection={<GoGraph />} />
      <Space h="xl"/>
      <NavLink onClick={()=> navigate("/new-product")} label={<Text size="16px">New products</Text>} leftSection={<FaPlus />} />
      
    </Box>
  )
}

export default UserMenu
