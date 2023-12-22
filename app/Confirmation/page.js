"use client";
import React from "react";
import Styles from "./confirmation.module.css";
import Image from "next/image";
import product1 from "../assets/image 6.png";
import product2 from "../assets/image 3.png";
import product3 from "../assets/image 4.png";
import visa from "../assets/Rectangle 8.png";
import touch from "../assets/Rectangle 9.png";
import cash from "../assets/Rectangle 10.png";
import Link from "next/link";
import { useState } from "react";

function Confirmation() {
  let [count, setCount] = useState(1);
  const handlesubtract = () => {
    setCount(count - 1);
    console.log("hi,count");
  };
  const handleadd = () => {
    setCount((count) => count + 1);
    console.log("hi, i am adding");
  };

  return (
    <div className={Styles.cartlist}>
      <h1>Shopping Cart</h1>
      <div className={Styles.listbox}>
        <table className={Styles.table}>
          <tr>
            <th>Product</th>
            <th>Quality</th>
            <th>Total Price</th>
            <th></th>
          </tr>
          <tr>
            <td>
              <div className={Styles.image}>
                <Image src={product1} width={100} height={100}></Image>Coffee
              </div>
            </td>
            <td>
              <div className={Styles.box}>
                <button onClick={handlesubtract}> - </button>
                <p> {count} </p>
                <button onClick={handleadd}> + </button>
              </div>
            </td>
            <td>Rs 19.90</td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </td>
          </tr>
          <tr>
            <td>
              <div className={Styles.image}>
                <Image src={product2} width={100} height={100}></Image>
                Cappuccino
              </div>
            </td>
            <td>
              <div className={Styles.box}>
                <button onClick={handlesubtract}> - </button>
                <p> {count} </p>
                <button onclick={handleadd}> + </button>
              </div>
            </td>
            <td>Rs 59.70</td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </td>
          </tr>
          <tr>
            <td>
              <div className={Styles.image}>
                <Image src={product3} width={100} height={100}></Image>
                Yule cake
              </div>
            </td>
            <td>
              <div className={Styles.box}>
                <button onClick={handlesubtract}> - </button>
                <p> {count} </p>
                <button onClick={handleadd}> + </button>
              </div>
            </td>
            <td>Rs 159.70</td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>Total</td>
            <td>Rs 238.97</td>
          </tr>
        </table>
        <div className={Styles.payment}>
          <h3>Pay By</h3>
          <Image src={visa}></Image>
          <Image src={touch}></Image>
          <Image src={cash}></Image>
        </div>
      </div>
      <Link href={"/Productlist"}>
        <button>Back to Order</button>
      </Link>
    </div>
  );
}

export default Confirmation;
