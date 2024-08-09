import Speaker from "../../img/speaker.png";
import { useState, useEffect} from "react";

const Banner = () => {

  const [timeLeft, setTimeLeft] = useState({days:0, hours:0, minutes: 0, seconds: 0})
  useEffect(() => {
    const interval = setInterval(() => {
      const countdownDate = new Date("2024-08-24T00:00:00").getTime();

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
    <div className="flex flex-row justify-between max-w-7xl mx-auto h-[500px] px-4 bg-black  my-[140px]">
      <div className="w-1/2 flex flex-col justify-evenly ml-14 my-16">
        <p className="font-poppins font-semibold text-base leading-5 text-[#00FF66]">
          Categories
        </p>
        <h1 className="font-inter font-semibold text-5xl leading-[60px] tracking-wide text-white mt-8">
          Enhance Your Music Experience
        </h1>

        <div className="flex flex-row gap-6 mt-8">
          <div className="flex flex-col justify-center items-center rounded-full w-[62px] h-[62px] bg-slate-100">
            <p className="font-poppin font-semibold text-base leading-5 text-black">
            {timeLeft.hours}
            </p>
            <p className="font-poppin font-normal text-xs leading-4 text-black">
              Hours
            </p>
          </div>

          <div className="flex flex-col justify-center items-center rounded-full w-[62px] h-[62px] bg-slate-100">
            <p className="font-poppin font-semibold text-base leading-5 text-black">
            {timeLeft.days}
            </p>
            <p className="font-poppin font-normal text-xs leading-4 text-black">
              Days
            </p>
          </div>

          <div className="flex flex-col justify-center items-center rounded-full w-[62px] h-[62px] bg-slate-100">
            <p className="font-poppin font-semibold text-base leading-5 text-black">
            {timeLeft.minutes}
            </p>
            <p className="font-poppin font-normal text-xs leading-4 text-black">
              Minutes
            </p>
          </div>

          <div className="flex flex-col justify-center items-center rounded-full w-[62px] h-[62px] bg-slate-100">
            <p className="font-poppin font-semibold text-base leading-5 text-black">
            {timeLeft.seconds}
            </p>
            <p className="font-poppin font-normal text-xs leading-4 text-black">
              Second
            </p>
          </div>
        </div>

        <button className="w-[171px] h-[56px] px-[48px] py-[16px] mt-10 rounded bg-[#00FF66] text-black">
          Buy Now!
        </button>
      </div>
      <div className="relative w-6/12 my-auto mr-10">
        <div className="absolute inset-0 bg-[#8d8d8d]  blur-[80px] rounded-full z-0"></div>
        <img className="relative z-10" src={Speaker} alt="" />
      </div>

       {/* <div className="bg-gradient-to-r from-white"> 
        <div className="w-1/2 my-9 mr-6 ml-11  ">
          <img src={Speaker} className="" />
        </div>
       </div> */}
    </div>
  );
};

export default Banner;
