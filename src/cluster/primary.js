const { exec } = require("child_process");
const cluster = require("cluster");
const os = require("os");
const path = require("path");
const server = path.resolve(__dirname, "../server.js");

const cpuCount = os.cpus().length;

console.log(`The total number of CPUs is ${cpuCount}`);
console.log(`Primary pid=${process.pid}`);

cluster.setupPrimary({
  exec: server,
});

for (let i = 0; i < cpuCount; i++) {
  cluster.fork();
}

cluster.on("exit", (worker, code, signal) => {
  console.log(`worker ${worker.process.pid} has been killed`);
  console.log(`Starting another woker`);
  cluster.fork();
});
