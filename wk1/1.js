let sayHello = (name) => {
    return `Hello, ${name}!`
}

console.log(sayHello(process.argv[0])) // interpretorul
console.log(sayHello(process.argv[1])) // fisierul
console.log(sayHello(process.argv[2])) // argumente date de user