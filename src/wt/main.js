import os from "node:os";
import {Worker} from "node:worker_threads"

const workerPath = new URL("./worker.js", import.meta.url);

const performCalculations = async () => {
    const cores = os.cpus().length;
    const result = []
    const workers = []

    for (let i = 0; i < cores; i++) {
        const worker = new Worker(workerPath, {workerData: 10 + i})

        worker.on("message", (data) => {
            result.push({status: "resolved", data })
        })

        worker.on("error", (data) => {
            result.push({status: "error", data: null })
        })

        workers.push(worker)
    }

    await Promise.allSettled(
        workers.map(worker => new Promise(resolve => worker.on("exit", resolve)))
    );
    console.log(result)
};

await performCalculations();