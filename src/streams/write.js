import {join} from "path";
import fs from "fs";

const dirname = import.meta.dirname
const filepath = join(dirname, "files", "fileToWrite.txt")

const write = async () => {
    const ws = fs.createWriteStream(filepath);
    process.stdin.pipe(ws);
};

await write();