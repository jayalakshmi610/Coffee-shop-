import React from "react";
import p1 from "../assets/croissant.jpg";
import p2 from "../assets/pastry 1.jpg";
import styles from "./productlist.module.css";
import Image from "next/image";

import p3 from "../assets/Pastry 2.png";
import p4 from "../assets/puff_pastry.jpg";
import p5 from "../assets/PUFF SHELL.jpg";
import product1 from "../assets/image 6.png";
import product2 from "../assets/image 3.png";
import product3 from "../assets/image 4.png";

function Productlist() {
  return (
    <div className={styles.listproduct}>
      <h1>List of items</h1>
      <div className={styles.items}>
        <div className={styles.itemslist}>
          <h2>Croissant</h2>
          <Image
            className={styles.image}
            src={p1}
            alt="coffee"
            placeholder="blur"
          ></Image>
        </div>
        <div className={styles.itemslist}>
          <h2>Fruit cake</h2>
          <Image
            className={styles.image}
            src={p2}
            alt="coffee"
            placeholder="blur"
          ></Image>
        </div>
        <div className={styles.itemslist}>
          <h2>Yule Log cake</h2>
          <Image
            className={styles.image}
            src={product3}
            alt="coffee"
            placeholder="blur"
          ></Image>
        </div>
        <div className={styles.itemslist}>
          <h2>Americano</h2>
          <Image
            className={styles.image}
            src={product1}
            alt="coffee"
            placeholder="blur"
          ></Image>
        </div>
        <div className={styles.itemslist}>
          <h2>Cake</h2>
          <Image
            className={styles.image}
            src={p5}
            alt="coffee"
            placeholder="blur"
          ></Image>
        </div>
        <div className={styles.itemslist}>
          <h2>Cappucino</h2>
          <Image
            className={styles.image}
            src={product2}
            alt="coffee"
            placeholder="blur"
          ></Image>
        </div>
        <div className={styles.itemslist}>
          <h2>Fruit cake</h2>
          <Image
            className={styles.image}
            src={p3}
            alt="coffee"
            placeholder="blur"
          ></Image>
        </div>
        <div className={styles.itemslist}>
          <h2>Fruit cake</h2>
          <Image
            className={styles.image}
            src={p2}
            alt="coffee"
            placeholder="blur"
          ></Image>
        </div>
        <div className={styles.itemslist}>
          <h2>Croissant</h2>
          <Image
            className={styles.image}
            src={p1}
            alt="coffee"
            placeholder="blur"
          ></Image>
        </div>
        <div className={styles.itemslist}>
          <h2>Croissant</h2>
          <Image
            className={styles.image}
            src={p5}
            alt="coffee"
            placeholder="blur"
          ></Image>
        </div>
        <div className={styles.itemslist}>
          <h2>Americano</h2>
          <Image
            className={styles.image}
            src={product1}
            alt="coffee"
            placeholder="blur"
          ></Image>
        </div>
        <div className={styles.itemslist}>
          <h2>Fruit cake</h2>
          <Image
            className={styles.image}
            src={p2}
            alt="coffee"
            placeholder="blur"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default Productlist;
