// pages/dashboard/login/index.js

import TesteLoginForm from "@/components/TesteLoginForm";

const LoginPage = () => {
    const handleLoginSubmit = (data) => {
        // Adicione a lógica para lidar com os dados do formulário (por exemplo, autenticação).
        console.log('Dados do formulário de login:', data);
    };

    return (
        <div>
            <h1>Login</h1>
            <TesteLoginForm onSubmit={handleLoginSubmit} />
        </div>
    );
};

export default LoginPage;
