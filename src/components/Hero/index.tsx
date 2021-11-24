import React from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, ButtonWrapper } from './HeroElements'
import { Button } from '../ButtonElement'

const Hero = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={"/video.mp4"}/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Hi, I'm Vinu</HeroH1>
                <HeroP>
                    Software developer looking to learn new skills and improve your company at the same time.
                </HeroP>
                <ButtonWrapper>
                    <Button to='about' primary dark>Learn More</Button>
                </ButtonWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
