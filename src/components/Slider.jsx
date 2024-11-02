
import { useEffect, useState } from "react";
import SkillsImage from "../assets/edu.jpeg";
import Design from "../assets/desker.jpeg";
import JobImg from "../assets/deskers.jpeg";
import ArrowBtn from "../assets/arrow1.png";
import PlayIcon from "../assets/play.png";
import PauseIcon from "../assets/Pause.png"


//Slide image and text
const sliderData = [
    {
        text: "Acquire skills that benefits you",
        textSub: "from confort of your home",
        image: 'url'
    },
    {
        text: "Create your resume on the fly!",
        textSub: "Just a Click away",
        image: 'url'
    },
    {
        text: "Get a Job, and flex that skill",
        textSub: 'Without a hustle',
        image: 'url'
    }
]
function SliderBgImage({ slideCounter }) {
    if (slideCounter === 0) {
        return (
            <img className="bgImage" src={SkillsImage} alt="Education" />
        );

    } else if (slideCounter === 1) {
        return (
            <img className="bgImage" src={Design} alt="Education" />
        );
    } else if (slideCounter === 2) {
        return (
            <img className="bgImage" src={JobImg} alt="Education" />
        );

    }
}

function InfoText({sliderData,slideCounter,setSlideCounter,playVideo,setPlayVideo}){
    return(
        <div className="hero">
            <div className="wecome-txt">
                <p>{sliderData.text}</p>
                <p>{sliderData.textSub}</p>
            </div>
            <div className="explore">
                <p>Explore More</p>
                <img className="arrow-btn" src={ArrowBtn}/>
            </div>
            <div className="slider-index">
                <ul>
                    <li onClick={()=>setSlideCounter(0)} className={slideCounter===0?"slider-dot green":"slider-dot"}></li>
                    <li onClick={()=>setSlideCounter(1)} className={slideCounter===1?"slider-dot green":"slider-dot"}></li>
                    <li onClick={()=>setSlideCounter(2)} className={slideCounter===2?"slider-dot green":"slider-dot"}></li>
                </ul>
            </div>
        {/*
            <div className="play_video">
                <img onClick={()=>setPlayVideo(!playVideo)} src={playVideo?PauseIcon:PlayIcon} alt="" class="playicon" />
                <p>Play video</p>
            </div>
            */}
        </div>
    );

}

export default function Slider() {
    //states
    const [slideCounter, setSlideCounter] = useState(0);
    const [playVideo,setPlayVideo]=useState(false); 

    //Automatic carosel change
    useEffect(()=>{
        setInterval(()=>{
            setSlideCounter((count)=>{return count===2 ? 0: count+1})
        },5000);

    },[])

     const handlePlayVideo=()=>{
        setPlayVideo(true);
     }

    return (
        <div>
            <SliderBgImage slideCounter={slideCounter} playVideo={handlePlayVideo} />
            <InfoText sliderData={sliderData[slideCounter]}
            slideCounter={slideCounter} setSlideCounter={setSlideCounter}/>
        </div>
    );
}