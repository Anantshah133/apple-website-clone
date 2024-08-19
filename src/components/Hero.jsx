import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

    const handleVideoSrc = () => {
        if(window.innerWidth < 760) setVideoSrc(smallHeroVideo);
        else setVideoSrc(heroVideo);
    }

    useEffect(()=>{
        window.addEventListener('resize', handleVideoSrc);

        return () => {
            window.removeEventListener('resize', handleVideoSrc);
        }
    }, []);

    useGSAP(()=>{
        gsap.to(".hero-title", {opacity: 1, delay: 1.4});
        gsap.to("#cta", {opacity: 1, translateY: 0, delay: 1.4});
    }, []);
    return (
        <section className="w-full nav-height bg-black relative flex items-center">
            <div className="h-5/6 flex flex-col flex-center">
                <p className="hero-title">iPhone 15 Pro</p>
                <div className="w-9/12 md:w-10/12">
                    <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
                        <source src={videoSrc} />
                    </video>
                </div>
                <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
                    <a href="#highlights" className="btn">BUY</a>
                    <p className="font-normal text-xl">From $199/Month or $999</p>
                </div>
            </div>
        </section>
    )
}

export default Hero;