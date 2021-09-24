const botao = document.getElementById(['botaoOk']);
const input = document.getElementById(['campoNome']);
const enemail = document.getElementById(['campoEmail']);
const password = document.getElementById(['campoSenha']);
const cnascimento = document.getElementById(['campoNascimento']);
const cpais = document.getElementById(['campoPais']);
const cestado = document.getElementById(['campoEstado']);
const ccidade = document.getElementById(['campoCidade']);
const ccpf = document.getElementById(['campoCpf']);
const ctelefone = document.getElementById(['campoTelefone']);


var lista = []

var escuta = botao.addEventListener('click', ()=> {        
    var inputNome = input.value
    var inputEmail = enemail.value
    var inputSenha = password.value
    var inputNascimento = cnascimento.value
    var inputPais = cpais.value
    var inputEstado = cestado.value
    var inputCidade = ccidade.value
    var inputCPF = ccpf.value
    var inputTelefone = ctelefone.value
    var usuario = {
            nome: inputNome,
            email: inputEmail,
            senha: inputSenha,
            nascimento: inputNascimento,
            pais: inputPais,
            estado: inputEstado,
            cidade: inputCidade,
            cpf: inputCPF,
            telefone: inputTelefone
        }

        

lista.push(usuario)
    var bancodeDados = localStorage.setItem('cadastro',(JSON.stringify(lista)))
        

})
