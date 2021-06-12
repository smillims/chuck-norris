import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <h2 className={styles.headerH2}>Chuck Norris</h2>
      </div>
    </header>
  );
}

export default Header;
