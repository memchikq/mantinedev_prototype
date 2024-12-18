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
      <NavLink onClick={() => navigate("/")} label="Transfers" leftSection={<IoLogoUsd />} />
      <NavLink label="Insurance" leftSection={<CiUmbrella />} />
      <NavLink label="Smart contracts" leftSection={<MdOutlineSecurity />} />
      <NavLink label="Salaries" leftSection={<GoGraph />} />
      <Link to={"/new-product"}>
        <Text>+ Add new products</Text>
      </Link>
    </div>
  )
}

export default UserMenu
