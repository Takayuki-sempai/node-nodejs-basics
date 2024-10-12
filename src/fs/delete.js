import {rm} from "fs/promises";
import {join} from "path";

const dirname = import.meta.dirname
const filepath = join(dirname, "files", "fileToRemove.txt")

const remove = async () => {
    try {
        await rm(filepath);
    } catch (err) {
        throw new Error("FS operation failed")
    }
};

await remove();