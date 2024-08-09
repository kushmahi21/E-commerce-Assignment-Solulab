import { useState, useEffect} from "react";

const timer = () => {
  const [timeLeft, setTimeLeft] = useState({days:0, hours:0, minutes: 0, seconds: 0})

  useEffect(() => {
    const interval = setInterval(() => {
      const countdownDate = new Date("2025-02-24T00:00:00").getTime();

      const now = new Date().getTime();
      const distance = countdownDate - now;

     if(distance > 0){
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / 1000/60) % 60 );
      const seconds = Math.floor(distance / 1000) % 60;

      setTimeLeft({days, hours, minutes, seconds} )
     }
     else{
      clearInterval(interval);
     }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });


  return (
    <div className="flex justify-between gap-2 items-center ">
      <section className="flex flex-col gap-1 items-center">
        <p className="font-medium text-xs font-poppin text-black">
          Days
        </p>
        <p className=" font-bold font-inter text-[32px] leading-[30px] tracking-wide">
          {timeLeft.days}
        </p>
      </section>
      <span className="mt-4">:</span>
      <section className="flex flex-col gap-1 items-center">
        <p className="font-medium text-xs font-poppin text-black">
            Hours
        </p>
        <p className="font-bold font-inter text-[32px] leading-[30px]">
          {timeLeft.hours}
        </p>
      </section>
      <span className="mt-4">:</span>
      <section className="flex flex-col gap-1 items-center">
        <p className="font-medium text-xs font-poppin text-black">
          Minutes
        </p>
        <p className="font-bold font-inter text-[32px] leading-[30px]">
          {timeLeft.minutes}
        </p>
      </section>
      <span className="mt-4">:</span>
      <section className="flex flex-col gap-1 items-center">
        <p className="font-medium text-xs font-poppin text-black">
          Second
        </p>
        <p className="font-bold font-inter text-[32px] leading-[30px]">
          {timeLeft.seconds}
        </p>
      </section>
    </div>
  );
};

export default timer;
