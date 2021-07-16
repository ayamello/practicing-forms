import styled from 'styled-components';

export const Div = styled.div`
    overflow: hidden;
    
    header {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 3vh;
        padding-bottom: 2vh;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
    }
        header span {
            font-size: 12px;
            padding: 0.4rem;
            color: green;
        }
            header .Done {
                color: green;
                font-size: 12px;
            }
    
    .divMsg {
        width: 100%;
        margin: 0 auto;
        margin-bottom: 5vh;
        text-align: center;
        font-size: 12px;
        background-color: rgba(255,141,169, .6);
    }
    
    .Card {
        width: 80%;
        padding: 2vh 2vw;
        margin: 0 auto;
        border: 1px solid rgba(0, 0, 0, .1);
        border-radius: 20px;
    }  
        .Card .divImg {
            margin: 1vh 0 2vh 0;
            text-align: center;
        }
            .Card img {
                width: 100px;
            }
        .Card .Infos .Name {
           text-align: center;
           font-weight: 700;
           font-size: 16px;
           margin-bottom: 1vh;
        }
        .Card .Infos {
            font-size: 12px;
        }
            .Card .Infos .Details {
                width: 90%;
                margin: 0 auto;
            }
                .Card .Infos .Details span {
                    display: block;
                    font-weight: 700;
                    margin-top: 2vh;
                    margin-bottom: 0.5vh;
                    padding-bottom: 0.3vh;
                    border-bottom: 1px solid rgba(0, 0, 0, .1);
                }

    @media screen and (min-width: 700px) {
        header span {
            font-size: 14px;
        }
        header .Done {
            font-size: 14px;
        }

        .divMsg{
            font-size: 14px;
        }
        .Card {
            width: 65%;
        }
            .Card .Infos .Name {
                font-size: 18px;
            }
            .Card .Infos {
                font-size: 14px;
            }
    }
    @media screen and (min-width: 1024px) {
        .Card {
            width: 30%;
        }
            .Card .Infos .Details {
                width: 95%;
                padding: 2vh 0;
            }
    }       
`;