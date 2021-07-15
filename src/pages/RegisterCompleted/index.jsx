import { Div } from './style';
import { Done } from '@material-ui/icons';
import imgCC from '../../assets/images/coracao-cc.png';

function RegisterCompleted({ volunteer }) {

    function getAge(dateString) {
        const today = new Date();
        const birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    return(
        <Div>
            <header>
                <Done className="Done"/>
                <span> Cadastro realizado!</span>
            </header>

            <div className="divMsg">
                <p>
                    Agora você é um Coração Cheio!
                </p>
                <div>
                    {volunteer.gender === "F" && <span>Será adicionada no grupo do whatsapp em breve.</span>}
                    {volunteer.gender === "M" && <span>Será adicionado no grupo do whatsapp em breve.</span>}
                    {volunteer.gender === "Outro" && <span>Será adicionade no grupo do whatsapp em breve.</span>}
                </div>
            </div>
            
            <div className="Card">
                <div className="divImg">
                    <img src={imgCC} alt="Coração" />
                </div>
                <div className="Infos">
                    <p className="Name">{volunteer.name}</p>

                    <div className="Details">
                        <span>Idade</span>
                        <p>{getAge(volunteer.birthDate)} anos</p>
                        <span>Endereço</span>
                        <p>{volunteer.address}</p>
                        <span>Whatsapp</span>
                        <p>{volunteer.cellphone}</p>
                        <span>Email</span>
                        <p>{volunteer.email}</p>
                    </div>
                </div>
            </div>          
        </Div>
    );
}

export default RegisterCompleted;