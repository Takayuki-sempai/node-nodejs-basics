import {join} from "path";
import {writeFile} from "node:fs/promises";

const dirname = import.meta.dirname
const filepath = join(dirname, "files", "fresh.txt")

const create = async () => {
    try {
        await writeFile(filepath, "I am fresh and young", {encoding: "utf8", flag: "wx"});
    } catch (err) {
        throw new Error("FS operation failed")
    }
};

await create();