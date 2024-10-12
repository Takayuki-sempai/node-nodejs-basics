import {join} from "path";
import {readFile} from "fs/promises";

const dirname = import.meta.dirname
const filepath = join(dirname, "files", "fileToRead.txt")

const read = async () => {
    try {
        const contents = await readFile(filepath, { encoding: 'utf8' });
        console.log(contents);
    } catch (err) {
        throw new Error("FS operation failed")
    }
};

await read();