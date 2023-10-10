import router from "next/router";
import Link from "next/link";

import styleDefaultLayout from "../../styles/Default.module.css";
import styles from "../../styles/Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={`${styles.footer}`}>
        <div className={`${styleDefaultLayout.container}`}>
          <div className={`${styles.footerWrap}`}>
            <h1 className={`${styles.logo}`}></h1>
            <button type="button" className={`${styleDefaultLayout.btn} ${styles.menu}`}>
              메뉴
            </button>
            <button type="button" className={`${styleDefaultLayout.btn} ${styles.menu}`}>
              메뉴
            </button>
            <button type="button" className={`${styleDefaultLayout.btn} ${styles.menu}`}>
              <Link href="/posts/Menu1">메뉴</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
