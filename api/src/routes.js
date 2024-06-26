const express = require('express');
const router = express.Router(); 

const Funcionario = require('./controllers/funcionario');
const Telefone = require('./controllers/telefone');
const Veiculo = require('./controllers/veiculo');
const Manutencao = require('./controllers/manutencao');

router.get('/', (req, res) => {
    res.json("API Gerenciamento de Tarefas");
});

// Rotas para funcionários
router.post('/funcionarios', Funcionario.addFuncionario);
router.get('/funcionarios/:matricula', Funcionario.getFuncionarios);
router.put('/funcionarios/:matricula', Funcionario.updateFuncionario);
router.delete('/funcionarios/:matricula', Funcionario.deleteFuncionario);

// Rotas para telefones
router.post('/telefones', Telefone.addTelefone);
router.get('/telefones/:matricula', Telefone.getTelefones);
router.put('/telefones/:matricula', Telefone.updateTelefone);
router.delete('/telefones/:matricula', Telefone.deleteTelefone);

// Rotas para veículos
router.post('/veiculos', Veiculo.addVeiculo);
router.get('/veiculos/:placa', Veiculo.getVeiculos);
router.put('/veiculos/:placa', Veiculo.updateVeiculo);
router.delete('/veiculos/:placa', Veiculo.deleteVeiculo);

// Rotas para manutenções
router.post('/manutencoes', Manutencao.addManutencao);
router.get('/manutencoes/:id', Manutencao.getManutencoes);
router.put('/manutencoes/:id', Manutencao.updateManutencao);
router.delete('/manutencoes/:id', Manutencao.deleteManutencao);

module.exports = router;
