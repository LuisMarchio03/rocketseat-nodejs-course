**Requisitos funcionais (RF)**
**Requisitos não funcionais (RNF)**
**Regra de negócio (RN)**

# Cadastro de carros

## RF =>

**[] Deve ser possível cadastrar um novo carro**
**[X] Deve ser possível listar todas as categorias**

## RN =>

**[] Não deve ser possível cadastrar um carro com uma placa já existente**
**[] Não deve ser possível alterar a placa de um carro já cadastrado**
**[] O carro deve ser cadastrado, por padrão, com disponibilidade**
**[] O usuário responsável pelo cadastro deve ser um usuário admin**

# Listagem de carros

## RF =>

**[] Deve ser possível listar todos os carros disponíveis**
**[] Deve ser possível listar todos os carros disponíveis pelo nome da categoria**
**[] Deve ser possível listar todos os carros disponíveis pelo nome da marca**
**[] Deve ser possível listar todos os carros disponíveis pelo nome do carro**

## RN =>

**[] O usuário não precisa estar logado no sistema**

# Cadastro de Especificação no carro

## RF =>

**[] Deve ser possível cadastrar uma especificação para um carro**
**[] Deve ser possível listar todas as especificação**
**[] Deve ser possível listar todos os carros**

## RN =>

**[] Não deve ser possível cadastrar uma especificação para um carro não cadastrado**
**[] Não deve ser possível cadastrar uma especificação já existente para um mesmo carro**
**[] O usuário responsável pelo cadastro deve ser um usuário admin**

# Cadastro de imagens do carros

## RF =>

**[] Deve ser possível cadastrar a imagem do carro**
**[] Deve ser possível cadastrar listar todos os carros**

## RNF =>

**[] Utilizar o multer para upload de arquivos**

## RN =>

**[] O usuário deve poder cadastrar mais de uma imagem para o mesmo carro**
**[] O usuário responsável pelo cadastro deve ser um usuário admin**

# aluguel de carro

## RF =>

**[] Deve ser possível cadastrar um aluguel**

## RN =>

**[] O aluguel deve ter duração minima de 24 hora**
**[] Não deve ser possível cadastrar um novo aluguel caso já exista uma aberto para o mesmo usuário**
**[] Não deve ser possível cadastrar um novo aluguel caso já exista uma aberto para o mesmo carro**
