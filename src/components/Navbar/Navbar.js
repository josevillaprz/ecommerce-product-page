import { useState } from "react";
import logo from "../../images/logo.svg";
import avatar from "../../images/image-avatar.png";
import { BsCart2 } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import styles from "./styles.module.css";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const [numInCart] = useState(2);

  return (
    <header className={styles.container}>
      <div className={styles.leftNav}>
        <button
          className={styles.menu}
          onClick={() => {
            setShowLinks(!showLinks);
          }}
        >
          {!showLinks ? (
            <HiMenu size={"24px"} className={styles.menuIcon} />
          ) : (
            <IoClose size={"24px"} className={styles.menuIcon} />
          )}
        </button>
        <a href="/">
          <img src={logo} alt="logo" className={styles.logo} />
        </a>
        <nav className={showLinks ? styles.open : ""}>
          <a href="/" className={styles.link}>
            Collections
          </a>
          <a href="/" className={styles.link}>
            Men
          </a>
          <a href="/" className={styles.link}>
            Women
          </a>
          <a href="/" className={styles.link}>
            Contact
          </a>
        </nav>
      </div>
      <div className={styles.rightNav}>
        <button className={styles.cart}>
          <BsCart2 size={"24px"} />
          <span>{numInCart}</span>
        </button>
        <a href="/">
          <img src={avatar} alt="avatar" className={styles.avatar} />
        </a>
      </div>
    </header>
  );
}
