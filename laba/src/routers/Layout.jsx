import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

export default function Layout() {
  return (
    <div>
      <header>
        <NavLink
          to="/albums"
          className={({ isActive }) =>
            isActive ? styles.linkActive : styles.navLink
          }
        >
          Альбомы
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.linkActive : styles.navLink
          }
        >
          Пользователи
        </NavLink>
      </header>
      <hr className={styles.line} />
      <main>
        <Outlet />
      </main>
      <hr className={styles.line} />
      <footer>
        <div>Created by: Mary Gordeytchuk</div>
        <div className={styles.bsu}>BSU 2023</div>
      </footer>
    </div>
  );
}
