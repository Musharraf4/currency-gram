import { useEffect, useState } from 'react';

const useCountdown = (targetDate:any) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval:any = setInterval(() => {
      // console.log('hi')
      const setTimer = countDownDate - new Date().getTime()
      if(setTimer < 0) return clearInterval(interval);
      // console.log(interval)
      setCountDown(setTimer);
    }, 1000);
    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

// useEffect(() => {
//   const interval = setTimeout(() => {
//     setCountDown(countDownDate - new Date().getTime());
//   }, 1000);

//   return () => clearInterval(interval);
// }, [countDownDate]);

// return getReturnValues(countDown);
// };
const getReturnValues = (countDown:any) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

export { useCountdown };
