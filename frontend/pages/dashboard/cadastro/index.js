import TesteCadastroForm from "@/components/TesteCadastroForm";


const CadastroPage = () => {
  const handleCadastroSubmit = (data) => {

    // Aqui vai ficar a lógica para envio dos dados pro banco
    
    console.log('Dados do formulário:', data);
  };

  return (
    <div>
      <h1>Cadastro</h1>

      
      <TesteCadastroForm onSubmit={handleCadastroSubmit} />
    </div>
  );
};

export default CadastroPage;
