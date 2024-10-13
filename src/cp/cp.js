import {fork} from 'child_process';
import {join} from "path";

const dirname = import.meta.dirname
const filepath = join(dirname, "files", "script.js")

const spawnChildProcess = async (args) => {
    fork(filepath, args)
    //const childProcess = fork(filepath, args, {silent: true})
    // process.stdin.pipe(childProcess.stdin)
    // childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ["arg1", "arg2", "33"]);
