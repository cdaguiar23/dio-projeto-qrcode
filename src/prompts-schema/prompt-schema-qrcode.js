import chalk from "chalk";

const PromptSchemaQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para digitar o QR CODE"),
    },
    {
        name: "type",
        description: chalk.yellow("Escolha o tipo (1 - NORMAL ou (2 - TERMINAL"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2 "),
        required: true
    }
]

export default PromptSchemaQRCode