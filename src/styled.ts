import styled from "styled-components"; 

export const Speech = styled.div`
    width: 100vw;
    height: 100vh;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 34px;
    
    

    .speech_microphone-1, .speech_microphone-2, .speech_microphone-3 {
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .speech_microphone-1 {
        width: 148px;
        height: 148px;
        background: var(--primary-100);
    }

    .speech_microphone-2 {
        width: 120px;
        height: 120px;
        background: var(--primary-200);
    }

    .speech_microphone-3 {
        width: 90px;
        height: 90px;
        background: var(--primary-color);
    }

    .speech-animation{
        animation: animationMicrophone 1s alternate-reverse infinite;
    }

    .speech_information {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;

        h4{
            font-size: 16px;
            font-weight: 600;
            color: #090B2A;
        }

        p{
            font-size: 12px;
            font-weight: 500;
            color: #B9B9B9;
            text-align: center;
            max-width: 256px;
        }
    }


${({changeTheme}) => changeTheme && `
    background-color: #4953d8;
    .speech_information h4, .speech_information p {
        color: #FEFEFE;
    } 
`}

    @keyframes animationMicrophone {
        from{
            transform: scale(1);
        }

        to{
            transform: scale(1.1);
        }
    }
`;
