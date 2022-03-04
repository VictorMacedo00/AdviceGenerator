import React from "react";
import styles from "./Card.module.css";
import { ReactComponent as Dice } from "./../../Assets/icon-dice.svg";
import { ReactComponent as Divider } from "./../../Assets/pattern-divider-desktop.svg";

export const Card = ({ id, advice, onClick }) => {
  return (
    <div className={styles.card}>
      <h1>{`ADVICE #${id}`}</h1>
      <section className={styles.advice}>
        <p>{advice}</p>
        <Divider />
      </section>
      <span onClick={() => onClick()} className={styles.dice}>
        <Dice />
      </span>
    </div>
  );
};
