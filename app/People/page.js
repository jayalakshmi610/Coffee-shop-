import React from "react";
import styles from "./people.module.css";
import Image from "next/image";
import UsernamesWithId from "./users";

function People() {
  return (
    <div className={styles.listproduct}>
      <h1>Employers list</h1>
      <div className={styles.items}>
        {UsernamesWithId.map((username, id) => (
          <div className={styles.itemslist} key={id}>
            <h2>{username.username}</h2>

            <Image
              className={styles.image}
              src={`${username.profile_image} ${username.id}`}
              width={200}
              height={200}
              alt={""}
            ></Image>
          </div>
        ))}
      </div>
    </div>
  );
}

export default People;
