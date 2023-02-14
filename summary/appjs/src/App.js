import { useEffect, useMemo, useRef, useState } from 'react';
import Typed from 'typed.js';
import './App.css';
import { getDurationFromNow } from './utils/date';

const knowday = '20200825';
const marriageday = '20210507';
const arriveshday = '20210611';
// const housemoneyday = '20210915';
const prettywords = '';
const hellowords = '亲爱的❤️张永靓同学!';
const manName = '刘泽运';

function App() {
  const typedRef = useRef(null);
  const [timer, setTimer] = useState(null);
  const [isTypedCompleted, setIsTypedCompleted] = useState(false);

  let [alldays1, years1, months1, days1, hours1, minutes1, seconds1] = getDurationFromNow(knowday);
  let [alldays2, years2, months2, days2, hours2, minutes2, seconds2] = getDurationFromNow(marriageday);
  let [alldays3, years3, months3, days3, hours3, minutes3, seconds3] = getDurationFromNow(arriveshday);
  // let [alldays4, years4, months4, days4, hours4, minutes4, seconds4] = getDurationFromNow(housemoneyday);

  const element = useMemo(() => [`
    <strong style="font-size: 18px; line-height: 44px;">${hellowords}</strong>
    <br />
    <br />
    <span style="font-weight: bold; font-size: 14px; line-height: 24px;">今天是你和${manName}先生相识的第<span style="color: yellow;">${alldays1}</span>天，共<span style="color: yellow;">${years1}</span>年<span style="color: yellow;">${months1}</span>个月<span style="color: yellow;">${days1}</span>天<span style="color: yellow;">${hours1}</span>时<span style="color: yellow;">${minutes1}</span>分<span style="color: yellow;">${seconds1}</span>秒。</span>
    <br />
    <br />
    <span style="font-weight: bold; font-size: 14px; line-height: 24px;">今天还是你和${manName}先生领证的第<span style="color: yellow;">${alldays2}</span>天，共<span style="color: yellow;">${years2}</span>年<span style="color: yellow;">${months2}</span>个月<span style="color: yellow;">${days2}</span>天<span style="color: yellow;">${hours2}</span>时<span style="color: yellow;">${minutes2}</span>分<span style="color: yellow;">${seconds2}</span>秒。</span>
    <br />
    <br />
    <span style="font-weight: bold; font-size: 14px; line-height: 24px;">今天还是你在上海生活的第<span style="color: yellow;">${alldays3}</span>天，共<span style="color: yellow;">${years3}</span>年<span style="color: yellow;">${months3}</span>个月<span style="color: yellow;">${days3}</span>天<span style="color: yellow;">${hours3}</span>时<span style="color: yellow;">${minutes3}</span>分<span style="color: yellow;">${seconds3}</span>秒。</span>
    <br />
    <br />
    <span style="font-weight: bold; font-size: 14px; line-height: 24px;">${'你问我：爱在哪里? 我用心地轻轻回答你：爱在云彩里，爱在石块里，爱在所有可见的物件里; 爱在我梦里爱在希望里，爱你在我有生的日日夜夜里!'}</span>
    <br />
    <br />
    <p style="font-weight: bold; font-size: 18px; line-height: 24px; text-align: right;">爱你的${manName}先生!</p>
  `], [timer]);

  useEffect(() => {
    const t = setTimeout(() => {
      clearTimeout(t);
      [alldays1, years1, months1, days1, hours1, minutes1, seconds1] = getDurationFromNow(knowday);
      [alldays2, years2, months2, days2, hours2, minutes2, seconds2] = getDurationFromNow(marriageday);
      [alldays3, years3, months3, days3, hours3, minutes3, seconds3] = getDurationFromNow(arriveshday);
    }, 1000);

    setTimer(t);

    return () => {
      clearTimeout(t);
    };
  }, [timer]);

  // useEffect(() => {
  //   typedRef.current = new Typed(
  //     '#typed',
  //     {
  //       strings: element,
  //       typeSpeed: 150,
  //       smartBackspace: false,
  //       showCursor: true,
  //       cursorChar: ' _',
  //       fadeOut: true,
  //       loop: false,
  //       onComplete: () => {
  //         typedRef.current.destroy();
  //         setIsTypedCompleted(true);
  //       },
  //     } 
  //   );

  //   return () => {
  //     typedRef.current.destroy();
  //   };
  // }, []);

  return (
    <div className="App">
      {!isTypedCompleted ? (
        <div dangerouslySetInnerHTML={{ __html: element[0]}} />
      ) : <span id="typed"></span>}

      <audio src="https://rlogs.youdao.com/rlog.php?_npid=deskdict&_ncat=event&_ncoo=1977134542.970095&_nssn=NULL&_nver=1.2.0&_ntms=1676373286760&_nhrf=first-touch&/search/M/song/%E5%BE%80%E5%90%8E%E4%BD%99%E7%94%9F=NULL&keyfrom=dict_huaci" autoPlay loop />
    </div>
  );
}

export default App;
