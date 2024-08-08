import { useEffect, useRef, useState } from "react";
import Confetti from 'react-confetti'
import Time from "./Time";

function App() {
  const [screen, setScreen] = useState({})
  const [birthdayDate, setBirthdayDate] = useState(false);
  const [currentYear, setCurentYear] = useState(new Date().getFullYear())
  const [allTime, setAllTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
 
  const second = 1000;
  const minute = 60 * second;
  const hour = minute * 60;
  const day = hour * 24;

  // можлива модифікація значення року також брати із дати 
  const birthday = Date.parse(`02/27/${currentYear}`);
  const timeId = useRef();

  function countDown(){
    const today = Date.parse(new Date());
    const timeSpan = birthday - today
    console.log('ren')
    if(timeSpan <= - day){
      // модифікація якщо день народження минув, то відраховувати від наступного року
      setCurentYear(currentYear + 1)
      // тоді очистка інтервалу непотрібна
            // clearInterval(timeId.current)
      return
    }
    if(timeSpan <= 0){
      setBirthdayDate(true);
      clearInterval(timeId.current)
      return
    }
    const daysRes = Math.floor(timeSpan / day);
    const hoursRes = Math.floor((timeSpan % day) / hour);
    const minutesRes = Math.floor((timeSpan % hour) / minute);
    const secondREs = Math.floor((timeSpan % minute) / second);
    setAllTime({
      days: daysRes,
      hours: hoursRes,
      minutes: minutesRes,
      seconds: secondREs
    })
  }

  useEffect(() =>{
    timeId.current = setInterval(countDown, 1000)
    return () => clearInterval(timeId.current);
  })

  const titleText = 'countdown to my birthday:';
  return (
    <div className="App">
      {birthdayDate && <Confetti
        width={Math.max(
          document.body.scrollWidth, document.documentElement.scrollWidth,
          document.body.offsetWidth, document.documentElement.offsetWidth,
          document.body.clientWidth, document.documentElement.clientWidth)}
        
        height ={Math.max(
          document.body.scrollHeight, document.documentElement.scrollHeight,
          document.body.offsetHeight, document.documentElement.offsetHeight,
          document.body.clientHeight, document.documentElement.clientHeight,
        )}/>}
      <div className="title">
        {titleText.toUpperCase()}
      </div>
      <Time 
        birthdayDate = {birthdayDate}
        allTime = {allTime}
      ></Time>
    </div>
  );
}

export default App;
