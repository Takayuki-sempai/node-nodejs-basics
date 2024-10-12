import {join} from "path";
import fs from "fs";
import {createHash} from "crypto";

const dirname = import.meta.dirname
const filepath = join(dirname, "files", "fileToCalculateHashFor.txt")

const calculateHash = async () => {
    const rs = fs.createReadStream(filepath);
    const hash = await createHash("sha256");
    rs.pipe(hash).setEncoding("hex").pipe(process.stdout);
};

await calculateHash();