import { Text } from "@mantine/core"
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
      <div style={{ border: "1px solid black", width: "220px",borderRadius:"8px" }}>
        <div onClick={() => navigate("/")} className="menu_nav_list">
          <IoLogoUsd />
          <Text size="xl">Transfers</Text>
        </div>
        <div className="menu_nav_list">
          <CiUmbrella />
          <Text size="xl">Insurance</Text>
        </div>
        <div className="menu_nav_list">
          <MdOutlineSecurity />
          <Text size="xl">Smart contracts</Text>
        </div>
        <div className="menu_nav_list">
          <GoGraph />
          <Text size="xl">Salaries</Text>
        </div>
      </div>
      <Link to={"/new-product"} >
        <Text style={{ cursor: "pointer" }} pl={"md"} pt={"md"} size="xl">
          + Add new products
        </Text>
      </Link>
    </div>
  )
}

export default UserMenu
