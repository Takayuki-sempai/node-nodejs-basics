import {join} from "path";
import {readdir} from "node:fs/promises";

const dirname = import.meta.dirname
const filesPath = join(dirname, 'files')

const list = async () => {
    try {
        const files = await readdir(filesPath)
        console.log(files)
    } catch (err) {
        throw new Error("FS operation failed")
    }
};

await list();