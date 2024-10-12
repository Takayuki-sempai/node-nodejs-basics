import {rename as renameFile} from "node:fs/promises";
import {join} from "path";

const dirname = import.meta.dirname
const filesPath = join(dirname, 'files')
const oldFileName = join(filesPath, 'wrongFilename.txt')
const newFileName = join(filesPath, 'properFilename.md')

const rename = async () => {
    try {
        await renameFile(oldFileName, newFileName);
    } catch (err) {
        throw new Error("FS operation failed")
    }
};

await rename();