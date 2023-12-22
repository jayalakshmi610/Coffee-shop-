import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className={styles.bottom}>
        <Link href={"/People"}>
          <button className={styles.btn}>Our Company</button>
        </Link>
        <Link href={"/Productlist"}>
          <button className={styles.btn}>Our Coffee</button>
        </Link>
        <Link href={"/Productlist"}>
          <button className={styles.btn}>Our Pastry</button>
        </Link>
      </div>
      <footer className={styles.footer}>@2023 All rights preserved</footer>
    </div>
  );
};

export default Footer;
