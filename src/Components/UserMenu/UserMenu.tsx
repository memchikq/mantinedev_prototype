import { NavLink, Text } from "@mantine/core"
import "./UserMenu.css"
import { Link, useNavigate } from "react-router-dom"
import { IoLogoUsd } from "react-icons/io"
import { CiUmbrella } from "react-icons/ci"
import { MdOutlineSecurity } from "react-icons/md"
import { GoGraph } from "react-icons/go"

const UserMenu = () => {
  const navigate = useNavigate()
  return (
    <div>
      <NavLink onClick={() => navigate("/")} label={<Text size="16px">Transfers</Text>} leftSection={<IoLogoUsd />} />
      <NavLink label={<Text size="16px">Insurance</Text>} leftSection={<CiUmbrella />} />
      <NavLink label={<Text size="16px">Smart contracts</Text>} leftSection={<MdOutlineSecurity />} />
      <NavLink label={<Text size="16px">Salaries</Text>} leftSection={<GoGraph />} />
      <Link to={"/new-product"}>
        <Text>+ Add new products</Text>
      </Link>
    </div>
  )
}

export default UserMenu
