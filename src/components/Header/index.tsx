import { Link } from "react-router-dom";
import styles from "./styles.module.css";

type HeaderProps = {
  title: string;
  isButton: boolean;
};

export function Header({ title, isButton }: HeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.back}>
        {!isButton ? <Link to="/">&lt;</Link> : ""}
        <h3>{title}</h3>
      </div>
      {isButton ? (
        <Link to="/add" className={styles.button}>
          ADD +
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}
