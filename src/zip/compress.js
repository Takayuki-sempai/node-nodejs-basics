import fs from "fs";
import {pipeline} from "node:stream";
import {join} from "path";
import {createGzip} from "node:zlib";

const dirname = import.meta.dirname
const fileName = join(dirname, "files", "fileToCompress.txt")
const compressFileName = join(dirname, "files", "archive.gz")

const compress = async () => {
    pipeline(
        fs.createReadStream(fileName),
        createGzip(),
        fs.createWriteStream(compressFileName),
        (err) => {
            if (err) throw new Error(err)
        }
    )
};

await compress();