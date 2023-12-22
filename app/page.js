import Link from "next/link";
import Footer from "./components/footer/page";
import Navbar from "./components/navbar/page";
import styles from "./page.module.css";
import Productlist from "./Productlist/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1> DISCOVER NEW FLAVOURS </h1>

            <p className={styles.para}>
              Coffee always sounds like a brilliant idea
            </p>
          </div>
        </div>
        <Link href={"/Productlist"}>
          <button className={styles.herobtn}>
            View All Products &gt; &gt;
          </button>
        </Link>
      </div>
    </main>
  );
}
