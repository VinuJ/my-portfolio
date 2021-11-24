import React from 'react'
import { HeroContainer, HeroBg, VideoBg } from './HeroElements'

const Hero = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={"/video.mp4"}/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Hi, I'm Vinu</HeroH1>
                <HeroP>
                    Aiming to grow my skills and your company simultaen
                </HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
