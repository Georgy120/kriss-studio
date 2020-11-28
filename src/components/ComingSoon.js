import React from 'react'
import styled from "styled-components"
import Img from '../images/background.jpg'

const ComingSoon = () => {
    return (
        <CommingContainer>
            <ComingContent>
                <h1>GABINET KOSMETYCZNY</h1>
                <h2>JASKULSKI SKIN MED</h2>
                <p>tel. 508-866-334 lub 509-659-173</p>
                <h3>Zapraszamy</h3>
                <p> ul. Na Skarpie 10, 06-100 Pułtusk <br />
                    Poniedziałek 13:00 - 20:00 <br />
                    Wtorek, Środa, Czwartek, Piątek 10:00 - 18:00</p>
            </ComingContent>
        </CommingContainer>
    )
}

export default ComingSoon

const CommingContainer = styled.div`
    background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 15%, 
    rgba(0,0,0,0.1) 80%), url(${Img}) no-repeat center;
    background-size: cover;
    height: 100vh;
    width: 100%;
    padding: 5rem calc((100vw - 1300px) / 2);
    color: #fff;
    display: flex;
    justify-content: start;
    align-items: center;
    overflow: hidden;
`


const ComingContent = styled.div`
    padding: 5rem;

    h1 {
        font-size: clamp(2rem, 5vw, 2rem);
        font-weight: lighter;
        margin-bottom: 0.2rem;
    }

    h2 {
        font-size: clamp(1.5rem, 5vw, 2rem);
        margin-bottom: 2rem;
        font-weight: bold;
    }

    p {
        font-size: clamp(1.5rem, 2.5vw, 1rem);
        padding: 0.2rem 0;
        line-height: 1.7rem;
        color: #fff !important;
        text-decoration: none !important;
    }

    h3 {
        font-size: clamp(1.3rem, 5vw, 2rem);
        padding: 1rem 0;
    }

    @media screen and (max-width: 768px) {
        text-align: center;
        justify-content: center;
        width: 100%;
        padding: 0;

        p {
            font-size: clamp(1.5rem, 2.5vw, 2rem);
            color: #fff !important;
            text-decoration: none !important;
        }
    }

    @media screen and (max-width: 500px) {
        p {
            font-size: clamp(1.3rem, 2.5vw, 2rem);
        }

    }
`