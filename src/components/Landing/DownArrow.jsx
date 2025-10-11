import Lottie from "lottie-react";
import arrowScrollAnimation from "../../assets/DownArrow.json";

export default function ArrowScrollAnimation () {
  return (
    <Lottie animationData={arrowScrollAnimation} loop={true} onClick={() => document.getElementById('about')?.scrollIntoView()} className="down-arrow"/>
  );
}