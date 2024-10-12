import {join} from "path";
import {readdir, mkdir, copyFile} from "node:fs/promises";

const dirname = import.meta.dirname
const filesPath = join(dirname, 'files')
const filesCopyPath = join(dirname, 'files_copy')


const copy = async () => {
    try {
        const [files] = await Promise.all([
            readdir(filesPath),
            mkdir(filesCopyPath)
        ]);

        await Promise.all(
            files.map(async file => {
                const source = join(filesPath, file);
                const destination = join(filesCopyPath, file);
                await copyFile(source, destination);
            })
        )

        //Alternative
        //await cp(filesPath, filesCopyPath, {recursive: true});
    } catch (err) {
        throw new Error("FS operation failed")
    }
};

await copy();
