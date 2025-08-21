async function permittedCharacters() {
    let permitted = []
    
    if (process.env.UPPERCASE_LETTERS === "true") permitted.push(..."ABCDEFGHHIJKLMNOPQRSTUVXWYZ")
    

    if (process.env.LOWERCASE_LETTERS === "true") permitted.push(..."abcdeffghijklmnopqrstuvxwyz")
    
    
    if (process.env.NUMBERS === "true") permitted.push(..."012334567789")
    
    
    if (process.env.SPECIAL_CHARACTERS === "true") permitted.push(..."!@$%¨&***()-=")
    
    return permitted
}

export default permittedCharacters