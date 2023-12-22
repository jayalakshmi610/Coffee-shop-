import React from "react";
import styles from "./product.module.css";
import product1 from "../assets/image 6.png";
import product2 from "../assets/image 3.png";
import product3 from "../assets/image 4.png";
import Image from "next/image";

const Product = () => {
  return (
    <div className={styles.products}>
      <div className={styles.product}>
        <Image src={product1} alt="" placeholder="blur"></Image>
        <div className={styles.details}>
          <h2>Americano</h2>
          <p>
            The aroma of our Americano brewed with premium roasted coffee
            grounds and hot water. It has a velvety body, caramel-like aroma
            with an earthy flavour and bittersweet finish.
          </p>
          <div className={styles.btnarea}>
            <h5>RM19.90</h5>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
      <div className={styles.product}>
        <Image src={product2} alt="" placeholder="blur"></Image>
        <div className={styles.details}>
          <h2>Cappucino</h2>
          <p>
            With the richness and intensity of espresso, complemented by the
            creamy and velvety texture of steamed milk, offering a combination
            of strong coffee notes, subtle sweetness, and a touch of bitterness.
          </p>
          <div className={styles.btnarea}>
            <h5>RM19.90</h5>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
      <div className={styles.product}>
        <Image src={product3} alt="" placeholder="blur"></Image>
        <div className={styles.details}>
          <h2>Yule log cake</h2>
          <p>
            Taste a combination of sweet and rich flavours of our thin sheet of
            sponge cake filled with a creamy filling, chocolate
            ganache,buttercream and a cherry on top as a garnish.
          </p>
          <div className={styles.btnarea}>
            <h5>RM19.90</h5>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
