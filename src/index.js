import prompt from "prompt"
import PromptSchemaMain from "./prompts-schema/prompt-schema-main.js"
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

async function main() {
    prompt.get(PromptSchemaMain, async (err, chooce) => {
        if (chooce.select == 1) await createQRCode()      
        if (chooce.select == 2) await createPassword();
        
    })
    prompt.start
}

main()

