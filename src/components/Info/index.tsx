import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  ImgWrapper,
  TopLine,
  Heading,
  Subtitle,
  Img,
  ButtonWrapper,
} from "./InfoElements";
import { Button } from "../ButtonElement";

interface IProps {
  id: string;
  lightBg: boolean;
  lightText: boolean;
  darkText: boolean;
  lightTextDesc: boolean;
  topLine: string;
  headline: string;
  description: string;
  buttonLabel: string;
  imgFirst: boolean;
  img: any;
  alt: string;
  primary: boolean;
  dark: boolean;
}

const Info = ({
  id,
  lightBg,
  lightText,
  darkText,
  lightTextDesc,
  topLine,
  headline,
  description,
  buttonLabel,
  imgFirst,
  img,
  alt,
  primary,
  dark,
}: IProps) => {
  return (
    <InfoContainer id={id} lightBg={lightBg}>
      <InfoWrapper>
        <InfoRow imgFirst={imgFirst}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <ButtonWrapper>
                <Button to="home" smooth={true} duration={500} spy={true} offset={-80} primary={primary} dark={dark}>
                  {buttonLabel}
                </Button>
              </ButtonWrapper>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrapper>
              <Img src={img} alt={alt}></Img>
            </ImgWrapper>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default Info;
