Projeto desenvolvido como parte de um desafio da [Digital Innovation One (DIO)](https://www.dio.me/) do botcamp MeuTudo Mobile Developer. Ele consiste em um **kit de utilidades para e-commerce**, com duas ferramentas principais: **geração de QR Codes** e **criação de senhas seguras**.

---

## ✨ Funcionalidades

1. **Geração de QR Code**
   - Crie QR Codes a partir de links informados pelo usuário.
   - Suporte a dois tipos de QR Code: *normal* (imagem) e para *terminal* (ASCII).

2. **Geração de Senhas Seguras**
   - Crie senhas personalizadas conforme configurações do arquivo `.env`.
   - Opções de letras maiúsculas, minúsculas, números e caracteres especiais.
   - Defina o comprimento da senha.

---

## 🛠 Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript.
- **Chalk** – Estilização de saída no terminal.
- **Prompt** – Interação com o usuário via terminal.
- **QRCode-Terminal** – Geração de QR Codes no terminal.

---

## 📁 Estrutura do Projeto

```
.
├── .env                               # Configurações de geração de senhas
├── package.json                       # Dependências e scripts do projeto
├── src
│   ├── index.js                       # Arquivo principal
│   ├── prompts-schema
│   │   ├── prompt-schema-main.js      # Esquema principal de prompts
│   │   └── prompt-schema-qrcode.js    # Esquema para QR Code
│   ├── services
│   │   ├── qr-code
│   │   │   ├── create.js              # Serviço para criação de QR Codes
│   │   │   └── handle.js              # Manipulador de QR Codes
│   │   └── password
│   │       ├── create.js              # Serviço para criação de senhas
│   │       └── handle.js              # Manipulador de senhas
│   └── utils
│       └── permitted-characters.js    # Função para definir caracteres permitidos
```

---

## ⚙️ Configuração do Ambiente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/<seu-usuario>/dio-projeto-qrcode.git
   cd dio-projeto-qrcode
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure o arquivo `.env`:**
   Exemplo:
   ```properties
   UPPERCASE_LETTERS=true
   LOWERCASE_LETTERS=true
   NUMBERS=true
   SPECIAL_CHARACTERS=true
   PASSWORD_LENGTH=12
   ```

---

## 🚀 Como Executar

1. Inicie o projeto:
   ```bash
   npm start
   ```

2. Escolha uma das opções no menu:
   - **1**: Gerar QR Code
   - **2**: Gerar Senha Segura

---

## 💡 Exemplos de Uso

### Geração de QR Code

- Insira o link e escolha o tipo de QR Code (normal ou terminal).
- O QR Code será exibido no terminal.

### Geração de Senha

- A senha será criada conforme as configurações do arquivo `.env` e exibida no terminal.

---

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir *issues* e enviar *pull requests*.

---

## 📜 Licença

Este projeto está licenciado sob a licença ISC.

---

Feito com ❤️ por Claudionei de Aguiar(https://github.com/cdaguiar23)
