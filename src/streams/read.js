import fs from "fs";
import {join} from "path";

const dirname = import.meta.dirname
const filepath = join(dirname, "files", "fileToRead.txt")

const read = async () => {
    const rs = fs.createReadStream(filepath);
    rs.pipe(process.stdout);
};

await read();