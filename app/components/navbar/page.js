"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const Togglesidebar = () => {
    setSidebar(!sidebar);
    console.log(`I am toggling ${sidebar}`);
  };

  return (
    <>
      <div className={styles.grid_container}>
        <div className={styles.navbar}>
          <div>
            <Link href={"/"} className={styles.logo}>
              <h1>Coffee shop</h1>
            </Link>
          </div>

          <div className={styles.description}>
            <Link href={"/Product"}>Product</Link>
            <Link href={"/Confirmation"}>
              <button className={styles.cartbtn}>
                Cart
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className={styles.cart}
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.mobilenavbar}>
          <div>
            <Link href={"/"} className={styles.logo}>
              <h1>Coffee shop</h1>
            </Link>
          </div>

          <div className={styles.description}>
            <button onClick={Togglesidebar} className={styles.hamburger}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={`${!sidebar ? styles.sidebar : styles.open}`}>
          <button className={styles.closebtn} onClick={Togglesidebar}>
            X
          </button>
          <ul>
            <Link href={"/Product"}>
              <li>Product</li>
            </Link>
            <Link href={"/Confirmation"}>
              <li>Cart</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
