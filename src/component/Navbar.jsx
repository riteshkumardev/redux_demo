import React from "react";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <img src="./Llogo.png" alt="pic" className={styles.logo} />
      <img src="./logo.png" alt="pic" className={styles.logo2} />
    </div>
  );
}

export default Navbar;
