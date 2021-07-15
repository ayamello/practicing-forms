function RegisterCompleted({ volunter }) {
    return(
        <div>
            <h3>Cadastro realizado!</h3>
            <div className="Card">
                <p>{volunter.name}</p>
                <p>{volunter.age}</p>
                <p>{volunter.address}</p>
                <p>{volunter.cellphone}</p>
                <p>{volunter.email}</p>
            </div>
            <p>
                Agora você faz parte do Coração Cheios!
            </p>
            <div>
                {volunter.gender === "F" && <span>Será adicionada no grupo do whatsapp em breve.</span>}
                {volunter.gender === "M" && <span>Será adicionado no grupo do whatsapp em breve.</span>}
                {volunter.gender === "Outro" && <span>Será adicionade no grupo do whatsapp em breve.</span>}
            </div>
        </div>
    );
}

export default RegisterCompleted;