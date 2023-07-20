import { Link } from "react-router-dom";
import style from "./Menu.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { BsSun } from "react-icons/bs";

export default function Menu() {
  return (
    <nav className={style.container}>
      <Link className={style.link} to={"/"}>
        <AiOutlineMenu className={style.icon} />
      </Link>
      <Link className={style.link} to={"/details"}>
        <BsSun className={style.icon} />
      </Link>
    </nav>
  );
}
