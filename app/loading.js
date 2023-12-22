import React from "react";
import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div>
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.ring}></div>
          <div className={styles.ring}></div>
          <div className={styles.ring}></div>
          <div className={styles.ring}></div>
          <div className={styles.h3}>loading</div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Loading;
