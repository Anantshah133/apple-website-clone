import { useEffect, useRef, useState } from "react"
import { hightlightsSlides } from "../constants"
import gsap from "gsap";

const VideoCarousel = () => {
    const videoRef = useRef([]);
    const videoSpanRef = useRef([]);
    const videoDivRef = useRef([]);

    const [video, setVideo] = useState({
        isEnd: false,
        startPlay: false,
        videoId: 0,
        isLastVideo: false,
        isPlaying: false
    });
    const [loadedData, setLoadedData] = useState([])
    const {isEnd, startPlay, videoId, isLastVideo, isPlaying} = video;


    useEffect(()=>{
        if(loadedData.length > 3){
            if(!isPlaying){
                videoRef.current[videoId].pause();
            } else {
                startPlay && videoRef.current[videoId].play();
            }
        }
    }, [videoId, startPlay, isPlaying, loadedData]);

    useEffect(()=>{
        const currentProgress = 0;
        let videoSpan = videoSpanRef.current;

        if(videoSpan[videoId]){
            let anim = gsap.to(videoSpan[videoId], {
                onUpdate: ()=>{

                },
                onComplete: ()=>{

                }
            })
        }
    }, [videoId, startPlay]);

    return (
        <>
            <div className="flex items-center">
                {
                    hightlightsSlides.map((list, i)=>(
                        <div key={list.id} id="slider" className="sm:pr-20 pr-10">
                            <div className="video-carousel_container">
                                <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                                    <video id="video" playsInline={true} preload="auto" muted autoPlay
                                    ref={(el)=>(videoRef.current[i] = el)} onPlay={()=>{
                                        setVideo((preVideo)=>({...preVideo, isPlaying: true}));
                                    }}>
                                        <source src={list.video} type="video/mp4" />
                                    </video>
                                </div>
                                <div className="absolute top-12 left-[5%] z-10">
                                    {
                                        list.textLists.map((text)=>(
                                            <p key={text} className="md:text-2xl text-xl font-medium">
                                                {text}
                                            </p>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default VideoCarousel