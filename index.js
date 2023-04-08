const fs = require('fs');

fs.writeFileSync("Read.txt", "this is read file");

async function readFile (path) {
try {
    const data = await fs.readFileSync(path, {encoding : 'utf8'})
    return data
} catch (error) {
    throw error
}
}

async function main() {
    try {
        const data = await readFile('Read.txt')
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}


main()