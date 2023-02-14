import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import Typed from 'typed.js';
import './App.css';
import { getDurationFromNow } from './utils/date';
import {Howl, Howler} from 'howler';

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
    <span style="font-weight: bold; font-size: 16px; line-height: 34px;">今天是你和${manName}先生相识的第<span style="color: yellow;">${alldays1}</span>个日子，共<span style="color: yellow;">${years1}</span>年<span style="color: yellow;">${months1}</span>个月<span style="color: yellow;">${days1}</span>天<span style="color: yellow;">${hours1}</span>小时<span style="color: yellow;">${minutes1}</span>分<span style="color: yellow;">${seconds1}</span>秒。</span>
    <br />
    <br />
    <span style="font-weight: bold; font-size: 16px; line-height: 34px;">今天还是你和${manName}先生领证的第<span style="color: yellow;">${alldays2}</span>个日子，共<span style="color: yellow;">${years2}</span>年<span style="color: yellow;">${months2}</span>个月<span style="color: yellow;">${days2}</span>天<span style="color: yellow;">${hours2}</span>小时<span style="color: yellow;">${minutes2}</span>分<span style="color: yellow;">${seconds2}</span>秒。</span>
    <br />
    <br />
    <span style="font-weight: bold; font-size: 16px; line-height: 34px;">今天还是你在上海生活的第<span style="color: yellow;">${alldays3}</span>个日子，共<span style="color: yellow;">${years3}</span>年<span style="color: yellow;">${months3}</span>个月<span style="color: yellow;">${days3}</span>天<span style="color: yellow;">${hours3}</span>小时<span style="color: yellow;">${minutes3}</span>分<span style="color: yellow;">${seconds3}</span>秒。</span>
    <br />
    <br />
    <span style="font-weight: bold; font-size: 16px; line-height: 34px;">${'你问我：爱在哪里? '}</span>
    <br />
    <br />
    <span style="font-weight: bold; font-size: 16px; line-height: 34px;">我用心地轻轻回答你：爱在云彩里，爱在石块里，爱在所有可见的物件里; 爱在我梦里，爱在希望里，爱在我有生的日日夜夜里!</span>
    <br />
    <br />
    <p style="font-weight: bold; font-size: 18px; line-height: 34px; text-align: right;">爱你的${manName}先生!</p>
  `], [timer]);

  useEffect(() => {
    const t = setTimeout(() => {
      setTimer(t);
      clearTimeout(t);
      [alldays1, years1, months1, days1, hours1, minutes1, seconds1] = getDurationFromNow(knowday);
      [alldays2, years2, months2, days2, hours2, minutes2, seconds2] = getDurationFromNow(marriageday);
      [alldays3, years3, months3, days3, hours3, minutes3, seconds3] = getDurationFromNow(arriveshday);
    }, 1000);

    return () => {
      clearTimeout(t);
    };
  }, [timer]);

  useEffect(() => {
    typedRef.current = new Typed(
      '#typed',
      {
        strings: element,
        typeSpeed: 150,
        smartBackspace: false,
        showCursor: true,
        cursorChar: ' _',
        fadeOut: true,
        loop: false,
        onComplete: () => {
          typedRef.current.destroy();
          setIsTypedCompleted(true);
        },
      } 
    );

    return () => {
      typedRef.current.destroy();
    };
  }, []);

  useLayoutEffect(() => {
    const soundBgm = new Howl({
      src: ["https://m10.music.126.net/20230214212720/4260d0597fd7bb188657db38aec4869c/ymusic/9ddc/b10e/919e/2ef50b0473f7f2cce3193ed620898cd7.mp3"],
      loop: true,
      preload: true,
    });
    
    // 音频资源 load 之后通过微信桥接触发播放
    soundBgm.on('load',()=>{
      window.WeixinJSBridge && window.WeixinJSBridge.invoke('getNetworkType', {},  ()=> {
        soundBgm.play();
      }, false);
    });
  }, []);

  return (
    <div className="App">
      {isTypedCompleted ? (
        <div dangerouslySetInnerHTML={{ __html: element[0]}} />
      ) : <span id="typed"></span>}

      <audio src="https://m10.music.126.net/20230214212720/4260d0597fd7bb188657db38aec4869c/ymusic/9ddc/b10e/919e/2ef50b0473f7f2cce3193ed620898cd7.mp3" autoPlay loop></audio>
    </div>
  );
}

export default App;
