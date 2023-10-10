import router from "next/router";

import styleDefaultLayout from "../../styles/Default.module.css";
import styles from "../../styles/Header.module.css";

export default function Header() {
  return (
    <>
      <div className={`${styles.header}`}>
        <div className={`${styleDefaultLayout.container}`}>
          <div className={`${styles.headerWrap}`}>
            <h1 className={`${styles.logo}`}></h1>
            <button type="button" className={`${styleDefaultLayout.btn} ${styles.search}`}>
              검색
            </button>
            <button type="button" className={`${styleDefaultLayout.btn} ${styles.menu}`}>
              메뉴
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
