 async function buscaEndereco(cep){
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
   var consultaCEP = fetch(`https://viacep.com.br/ws/${cep}/json/`)
var consultaCEPConvertida = await (await consultaCEP).json();
if (consultaCEPConvertida.erro) {
    throw Error('CEP não existente!!');
}
var cidade = document.getElementById('cidade');
var logradouro = document.getElementById('endereco');
var estado = document.getElementById('estado');
var bairro = document.getElementById('bairro');

cidade.value = consultaCEPConvertida.localidade;
logradouro.value = consultaCEPConvertida.logradouro;
estado.value = consultaCEPConvertida.uf;
bairro.value = consultaCEPConvertida.bairro;

 console.log(consultaCEPConvertida);
   return consultaCEPConvertida;
} catch (erro) {
    mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente</p>`
    console.log(erro) 

    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));











// CÓDIGO ANTERIOR
// .then(resposta => resposta.json())
// .then(r => {
//     if (r.erro) {
//          throw Error('Esse CEP não existe!!')
//     } else 
//     console.log(r)})
// .catch(erro => console.log(erro))
// .finally(mensagem => console.log('Processamento concluído!'));