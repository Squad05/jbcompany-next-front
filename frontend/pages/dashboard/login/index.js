// pages/dashboard/login/index.js

import TesteLoginForm from "@/components/TesteLoginForm";

const LoginPage = () => {
    const handleLoginSubmit = (data) => {
        // Adicione a lógica para lidar com os dados do formulário (por exemplo, autenticação).
        console.log('Dados do formulário de login:', data);
    };

    return (
        <div>
            <img src="/imagens/mulheres_imagem_home.png" alt="Mulheres Imagem Home" />

            <h1>Login</h1>
            <TesteLoginForm onSubmit={handleLoginSubmit} />
        </div>

        
    );
};

export default LoginPage;
