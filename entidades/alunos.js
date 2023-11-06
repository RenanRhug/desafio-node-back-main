// const mongoose = require('mongoose');

// const alunoTabela = new mongoose.Schema({
//   nome: String,
//   email: String,
//   cpf: string
//   // Verificar se possui outros campos relevantes para o aluno(cara das tabelas)
// });

// module.exports = mongoose.model('Aluno', alunoTabela);

// Cria um novo aluno
function criarAluno(nome, email, cpf) {
  const aluno = new Aluno({
    nome,
    email,
    cpf
  });

  aluno.save();

  return aluno;
}

// Busca um aluno pelo id
function buscarAluno(id) {
  return Aluno.findById(id);
}

// Lista todos os alunos
function listarAlunos() {
  return Aluno.find();
}

// Atualiza um aluno
function atualizarAluno(id, nome, email, cpf) {
  const aluno = Aluno.findById(id);

  aluno.nome = nome;
  aluno.email = email;
  aluno.cpf = cpf;

  aluno.save();

  return aluno;
}

// Deleta um aluno
function deletarAluno(id) {
  return Aluno.deleteOne({ id });
}