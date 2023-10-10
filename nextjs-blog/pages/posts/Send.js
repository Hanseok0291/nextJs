import React, { useState, useEffect } from "react";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import GlobalStyle from "../../components/global";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

import styleDefaultLayout from "../../styles/Default.module.css";
import styles from "../../styles/Age.module.css";

export default function Send() {
  const [startDate, setStartDate] = useState(new Date());
  const [age, setAge] = useState(null);
  const [zodiac, setZodiac] = useState(null);

  // 한글 월 이름 배열
  const monthNamesInKorean = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

  const calculateAge = () => {
    if (startDate) {
      const birthDate = new Date(startDate);
      const birthYear = birthDate.getFullYear();
      const today = new Date();
      const currentYear = today.getFullYear();
      let ageInYears = currentYear - birthYear;
      // const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
      // 선택한 날짜가 아직 생일이 오지 않았다면 나이를 1세 감소
      if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
        ageInYears--;
      }
      // 띠 계산
      const zodiacIndex = birthYear % 12;
      const chineseZodiac = ["원숭이", "닭", "개", "돼지", "쥐", "소", "호랑이", "토끼", "용", "뱀", "말", "양"];

      console.log("현재 년도:", currentYear);
      console.log("출생 연도:", birthYear);
      console.log("연도:", zodiacIndex);
      console.log(chineseZodiac[zodiacIndex]);

      setAge(ageInYears);
      setZodiac(chineseZodiac[zodiacIndex]);
    }
  };
  useEffect(() => {
    // 컴포넌트가 처음 로드될 때 calculateAge 함수 실행
    calculateAge();
  }, []);
  return (
    <>
      <GlobalStyle />
      <Header />
      <div className={`${styles.age}`}>
        <div className={`${styleDefaultLayout.container}`}>
          <h1>나이 계산</h1>
          <div className={`${styles.ageWrap}`}>
            <p>출생일 :</p>
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              maxDate={new Date()} // 최대 선택 날짜를 현재 날짜로 설정
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              dateFormat="yyyy/MM/dd"
              placeholderText="생년월일을 선택하세요"
              monthNames={monthNamesInKorean} // 월 이름을 한글로 표시
            />
          </div>

          <div className={`${styles.resultWrap}`}>
            <button onClick={calculateAge}>나이 계산</button>
            <div>
              <p>
                만 <strong>{age}</strong>세, <strong>{zodiac}</strong>띠
              </p>
              <p>
                연나이 <strong>{age}</strong>세
              </p>
            </div>
          </div>
          <Link href="/">돌아가기</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
