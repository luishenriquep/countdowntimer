import './style.css';
import React , {useEffect, useRef, useState} from 'react';

function App() {


  const [days     , setTimerDays]      = useState ('00');
  const [hours    , setTimerHours]     = useState ('00');
  const [min      , setTimerMinutes]   = useState ('00');
  const [sec      , setTimerSeconds]   = useState ('00');

  let interval = useRef();

  const startTimer = () =>{
    const countdownDate = new Date('Jul 17, 2023 00:00:00').getTime();

    interval = setInterval (
    ()=>{ 
        const now  = new Date().getTime();
        const dist = countdownDate - now;

        const d   = Math.floor(  dist  / (1000 * 60 * 60 *24)) ;
        const h   = Math.floor(( dist  % (1000 * 60 * 60 *24)) / ( 1000 * 60* 60) );
        const m   = Math.floor(( dist  % (1000 * 60 * 60    )) / ( 1000 * 60) );
        const s   = Math.floor(( dist  % (1000 * 60         )) / ( 1000 ) );

        if(dist < 0){
            clearInterval(interval.current)
        }else{
            setTimerDays(d);
            setTimerHours(h);
            setTimerMinutes(m);
            setTimerSeconds(s);
        }

    }   , 1000 );
 
};

useEffect(
()=>{ 
    startTimer();
    return ()=> { clearInterval (interval.current); }   ;
} );





  return (

    <section className="timer-container">
      <section className="timer">
        
        <div className="desc-timer">
            <span className="mdi mdi-calendar-clock timer-icon"></span>
            <h2>Countdown Timer</h2>
            <p> Cronometre uma data especial! </p>
            
          
        </div>


        <div className="crono">

          <section> 
            <p>{days}</p>
            <p><smal>Dias</smal></p>
          </section>
          <span>:</span>

          <section> 
            <p>{hours}</p>
            <p><smal>Horas</smal></p>
          </section>
          <span>:</span>

          <section> 
            <p>{min}</p>
            <p><smal>Minutos</smal></p>
          </section>
          <span>:</span>

          <section> 
            <p>{sec}</p>
            <p><smal>Segundos</smal></p>
          </section>

        </div>
      </section>      
    </section>
  );
}

export default App;
