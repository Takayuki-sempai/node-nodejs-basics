const parseArgs = () => {
    const argsObject = []
    for(let i = 2; i < process.argv.length; i+=2) {
        argsObject[process.argv[i]] = process.argv[i + 1]
    }
    const args = Object.entries(argsObject)
        .map(([key, value]) =>`${key.slice(2)} is ${value}`)
    console.log(args.join(', '));
};

parseArgs();