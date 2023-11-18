import React from "react";
import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Ошибка 404 </h1>
      <p className={styles.message}>Страница не найдена.</p>
      <Link to="/albums" className={styles.link}>
        К альбомам
      </Link>
    </div>
  );
}
