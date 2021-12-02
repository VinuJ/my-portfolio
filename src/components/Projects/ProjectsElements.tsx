import styled from 'styled-components'
import { theme } from '../../../styles/colours'

export const ProjectsContainer = styled.div`
    border: 1px solid red;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${theme.dark};

    @media screen and (max-width: 768px) {
        height: 70rem;
    }

    @media screen and (max-width: 480px) {
        height: 85rem;
    }
`
export const ProjectsH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin: 1rem;
    margin-bottom: 3rem;
    text-align: center;
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`
export const ProjectsWrapper = styled.div`
    //border: 1px solid red;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
`

export const ProjectsCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0 1rem;
    border-radius: 10px;
    max-width: 20rem;
    max-height: 25rem;
    padding: 2rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ProjectsThumbnail = styled.img`
    height: 10rem;
    width: 10rem;
    margin-bottom: 10px;
`

export const ProjectsH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ProjectsP = styled.p`
    font-size: 1rem;
    text-align: center;
`

// export const ProjectsButtons = styled.div`
//     width: 90%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 1.5rem;
//     @media screen and (max-width: 768px) {
//         flex-direction: column;
//     }
// `