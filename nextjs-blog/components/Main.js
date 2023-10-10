import router from "next/router";
import Link from "next/link";

import styleDefaultLayout from "../styles/Default.module.css";
import styles from "../styles/Main.module.css";

export default function Main() {
  const cateItem = [
    {
      title: "전체",
      default: "true"
    },
    {
      title: "프리다이빙"
    },
    {
      title: "헬스"
    },
    {
      title: "주짓수"
    },
    {
      title: "크로스핏"
    },
    {
      title: "스쿼시"
    },
    {
      title: "수영"
    },
    {
      title: "등산"
    },
    {
      title: "F45"
    },
    {
      title: "자전거"
    }
  ];

  const listItem = [
    {
      title: "프리다이빙",
      subTitle: "경력/기간",
      img: "images/test.svg",
      label: "",
      nickName: "삐삐",
      intro: "프리다이빙 하실분",
      href: "/posts/Send"
    },
    {
      title: "헬스",
      subTitle: "경력/기간",
      img: "images/test2.svg",
      label: "",
      nickName: "빠빠",
      intro: "운동 하실분",
      href: "/posts/Menu1"
    },
    {
      title: "주짓수",
      subTitle: "경력/기간",
      img: "images/test3.svg",
      label: "",
      nickName: "빠빠",
      intro: "운동 하실분",
      href: "/posts/Menu1"
    },
    {
      title: "크로스핏",
      subTitle: "경력/기간",
      img: "images/test.svg",
      label: "",
      nickName: "빠빠",
      intro: "운동 하실분",
      href: "/posts/Menu1"
    },
    {
      title: "스쿼시",
      subTitle: "경력/기간",
      img: "images/test4.svg",
      label: "",
      nickName: "빠빠",
      intro: "운동 하실분",
      href: "/posts/Menu1"
    },
    {
      title: "주짓수",
      subTitle: "경력/기간",
      img: "images/test3.svg",
      label: "",
      nickName: "빠빠",
      intro: "운동 하실분",
      href: "/posts/Menu1"
    },
    {
      title: "수영",
      subTitle: "경력/기간",
      img: "images/test2.svg",
      label: "",
      nickName: "뽀뽀",
      intro: "운동 하실분",
      href: "/posts/Menu1"
    }
  ];

  return (
    <>
      <div className={`${styles.cate}`}>
        <div className={`${styleDefaultLayout.container}`}>
          {/* cateWrap */}
          <div className={`${styles.cateWrap}`}>
            <ul className={`${styles.cateList}`}>
              {cateItem.map((list, index) => {
                return (
                  <>
                    <li key={index} className={`${list.default ? "on" : ""}`}>
                      <a href="#">{list.title}</a>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          {/* //cateWrap */}

          {/* <div class="py-8 px-8 mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
				<img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="images/test.svg" alt="Woman's Face" />
				<div class="text-center space-y-2 sm:text-left">
					<div class="space-y-0.5">
						<p class="text-lg text-black font-semibold">
						뽀뽀
						</p>
						<p class="text-slate-500 font-medium">
						프리다이빙
						</p>
					</div>
					<button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">보내기</button>
				</div>
			</div> */}

          {/* listWrap */}
          <div className={`${styles.listWrap}`}>
            <div className={`${styles.row}`}>
              {listItem.map(list => {
                return (
                  <>
                    <div className={`${styles.col}`}>
                      <div className={`${styles.item}`}>
                        <p className={`${styles.title}`}>{list.title}</p>
                        <p className={`${styles.subTitle}`}>{list.subTitle}</p>
                        <div className={`${styles.imgWrap}`}>
                          <p className={`${styles.img}`}>
                            <img src={list.img}></img>
                          </p>
                          <p className={`${styles.label}`}>{list.label}</p>
                        </div>
                        <p className={`${styles.nickName}`}>{list.nickName}</p>
                        <p className={`${styles.intro}`}>{list.intro}</p>
                        <div className={`${styles.btnWrap}`}>
                          <Link href={list.href}>
                            <button type="button" className={`${styles.btn}`}>
                              보내기
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          {/* //listWrap */}
        </div>
      </div>
    </>
  );
}
