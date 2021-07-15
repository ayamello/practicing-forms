import styled from 'styled-components';

export const Div = styled.div`
    width: 100%;
    margin: 0 auto;

    label {
        display: none;
    }

    .MsgError {
        font-size: 10px;
        color: red;
    }

    .header {
        text-align: center;
        font-size: 18px;
        margin: 7vh 0 4vh;
        padding-bottom: 5vh;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
    }

    form {
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }

    form input, form select {
        height:40px;
        padding: 1vh;
        margin: 0.5vh 0;
        background: transparent;
        border: 1px solid #000;
    }
        form .GenderAndBirthDate, form .Passwords {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
            form #gender {
                width: 35%;
            }
            form #birthDate {
                width: 63%;
            }
            form #password {
                width: 40%;
            }
            form #confirmPassword {
                width: 58%;
            }

        form .TermsCheck {
            margin-top: 2.5vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
            // Contrariar o display none padrão
            form .TermsCheck label {
                display: inline-block;
                font-size: 0.9em;
                margin-left: 1vw;
            }   
            // Checkbox 
            #terms {
                width: 17px;
                height: 16px;
            }
        form button {
            height: 40px;
            margin: 3vh 0;
            border: none;
            color: #FFEB84;
            font-size: 20px;
            background-color: #FE3467;
            text-transform: uppercase;
        }
    
        @media screen and (min-width: 500px) {
        form .TermsCheck {
            margin-top: 3vh 0;
        }
        form .TermsCheck label {
            font-size: 1.2em;
        }
    }

    @media screen and (min-width: 700px) {
        form {
            width: 65%;
        }
    }
    @media screen and (min-width: 1024px) {
        .header {
            font-size: 25px;
        }
        form {
            width: 30%;
        }
            form .TermsCheck {
                margin: 3vh 0 1vh 0;
            }    
            form button:hover {
                cursor: pointer;
                box-shadow: 1px 0px 4px 0px rgba(0,0,0,.6);
                -webkit-box-shadow: 1px 0px 4px 0px rgba(0,0,0,.6);
                -moz-box-shadow: 1px 0px 4px 0px rgba(0,0,0,.6);
            }
    }
`;