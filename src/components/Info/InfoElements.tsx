import styled from "styled-components";
import { theme } from "../../../styles/colours";

interface IContainerProps {
  lightBg?: boolean;
}

interface IRowProps {
  imgFirst?: boolean;
}

interface IHeadingProps {
  lightText?: boolean;
}

interface ISubtitleProps {
  darkText?: boolean;
}

export const InfoContainer = styled.div`
  min-height: 100vh;
  color: #fff;
  background: ${({ lightBg }: IContainerProps) =>
    lightBg ? theme.light : theme.dark};

  @media screen and (max-width: 768px) {
    padding: 6rem 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 54rem;
  width: 100%;
  max-height: 70rem;
  padding: 0 1.5rem;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgFirst }: IRowProps) =>
    imgFirst ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgFirst }: IRowProps) =>
      imgFirst ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 1rem;
  padding: 0 1rem;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 1rem;
  padding: 0 1rem;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  color: #fff;
  max-width: 35rem;
  padding-top: 0;
  padding-bottom: 0rem;
`;

export const TopLine = styled.p`
  color: ${theme.colour};
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const Heading = styled.h1`
  color: #fff;
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 600;
  color: ${({ lightText }: IHeadingProps) =>
    lightText ? theme.lightText : theme.dark};

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Subtitle = styled.p`
  color: #fff;
  max-width: 28rem;
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${({ darkText }: ISubtitleProps) => (darkText ? theme.dark : "#fff")};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 1.5rem;
`;

export const ImgWrapper = styled.div`
  max-width: 35rem;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 0.5rem 0;
  padding-right: 0;
`;
