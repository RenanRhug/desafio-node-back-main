const mongoose = require('mongoose');

const Aluno = new mongoose.Schema({
  nome: String,
  email: String,
  cpf: string
  // Verificar se possui outros campos relevantes para o aluno(cara das tabelas)
});


