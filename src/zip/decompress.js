import {pipeline} from "node:stream";
import fs from "fs";
import {createGunzip} from "node:zlib";
import {join} from "path";

const dirname = import.meta.dirname
const fileName = join(dirname, "files", "archive.gz")
const decompressFileName = join(dirname, "files", "fileToCompress.txt")

const decompress = async () => {
    await pipeline(
        fs.createReadStream(fileName),
        createGunzip(),
        fs.createWriteStream(decompressFileName),
        (err) => {
            if (err) throw new Error(err)
        }
    )
};

await decompress();