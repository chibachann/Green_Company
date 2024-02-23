// src/components/Card/card.js
import * as React from "react"
import * as styles from "./card.module.css"

const Card = ({ image, title, text }) => (
  <div className={styles.card}>
    {image} {/* <StaticImage /> コンポーネントを直接子要素として渡す */}
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

export default Card;
