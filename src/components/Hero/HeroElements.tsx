import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  height: 50rem;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  /* top: 0;
  right: 0;
  left: 0;
  bottom: 0; */
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    -o-object-fit: cover;
    background: #272d35;
`