import fs from "fs";

const globalconv = JSON.parse(fs.readFileSync("./config/config.json"));

export default globalconv;