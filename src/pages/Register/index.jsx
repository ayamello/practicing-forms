import { useForm } from "react-hook-form";
import * as yup from "yup"; 
import { yupResolver } from "@hookform/resolvers/yup";
import { volunteers } from '../../utils/volunteers';
import { Div } from './style';
import { useHistory } from "react-router-dom";
import InputMask from 'react-input-mask';

function Register({ setVolunteer }) {
    let history = useHistory();

    const formSchema = yup.object().shape({
        name: yup.string().required("Nome é obrigatório"),
        gender: yup.string().required("Gênero é obrigatório"),
        birthDate: yup.date().required("Data de nascimento é obrigatório"),
        address: yup.string().required("Endereço é obrigatório"),
        cellphone: yup.string()
            .required("Whatsapp é obrigatório")
            .matches(/(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/g, "Whatsapp inválido"),
        email: yup.string().required("Email é obrigatório").email("Email inválido"),
        password: yup.string()
            .min(8, "Mínimo 8 caracteres")
            .required("Senha é obrigatório")
            .matches(/(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g, "Senha inválida"),
        confirmPassword: yup.string()
            .required("Confirmação de senha é obrigatório")
            .oneOf([yup.ref('password'), null], 'As senhas não são iguais')
    });

    const {
        register, 
        handleSubmit, 
        formState: {errors}
    } = useForm({
        resolver: yupResolver(formSchema)
    });

    function handleSubmitRegister(data) {
        setVolunteer(data);
        volunteers.push(data);
        history.push("/cadastro-concluido");
        console.log(data.cellphone)
    }
  
    return(
        <Div className="divForm">
            <div className="header">
                <p>Faça parte do Corações Cheios!</p>
                <span>Cadastre-se</span>
            </div>
            
            <form className="form" onSubmit={handleSubmit(handleSubmitRegister)}>
                <label htmlFor="name">Nome</label>
                <input type="text" 
                       id="name" 
                       placeholder="Nome*" 
                       {...register("name")} 
                       onChange={e => e.target.value}/>            
                
                <div className="GenderAndBirthDate">
                    <label htmlFor="gender">Gênero</label>
                    <select id="gender" {...register("gender")} onChange={e => e.target.value}>
                        <option>Gênero</option>
                        <option value="F">F</option>
                        <option value="M">M</option>
                        <option value="Outro">Outro</option>
                    </select>
                    
                    <label htmlFor="birthDate">Data de nascimento</label>
                    <input type="date" 
                           id="birthDate" 
                           placeholder="Data de nascimento*" 
                           {...register("birthDate")} 
                           onChange={e => e.target.value}/>

                </div>
                
                <label htmlFor="address">Endereço</label>
                <input type="text" 
                       id="address" 
                       placeholder="Endereço*" 
                       {...register("address")}
                       onChange={e => e.target.value}/>  

                <label htmlFor="cellphone">Whatsapp</label>
                <input type="text" 
                       id="cellphone" 
                       placeholder="Whatsapp*" 
                       {...register("cellphone")} 
                       onChange={e => e.target.value}/>
                
                <label htmlFor="email">Email</label>
                <input type="text" 
                       id="email" 
                       placeholder="Email*" 
                       {...register("email")} 
                       onChange={e => e.target.value}/>   
                                 
                <div className="Passwords">
                    <label htmlFor="password">Senha</label>
                    <input type="password" 
                           id="password" 
                           placeholder="Senha*" 
                           {...register("password")} 
                           onChange={e => e.target.value}/>
                    
                    <label htmlFor="confirmPassword">Confirmar senha</label>
                    <input type="password" 
                           id="confirmPassword" 
                           placeholder="Confirmar senha*" 
                           {...register("confirmPassword")} 
                           onChange={e => e.target.value}/>
                </div>
                
                <div className="TermsCheck">
                    <input type="checkbox" id="terms" {...register("terms")} required/> 
                    <label htmlFor="terms">Eu li e aceito os termos do grupo</label>
                </div>
                
                <button type="submit">Cadastrar</button>
            </form>
        </Div>
    );
}

export default Register;