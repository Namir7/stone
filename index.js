const fs = require("fs");
const path = require("path");

const readableStream = fs.createReadStream("../../DATA/DOCS/pass.txt");

readableStream.on("data", (data) => {
    const dir = "./files";

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    const writableStream = fs.createWriteStream(path.join(dir, "data.txt"));
    writableStream.write(data);

    writableStream.on("close", () => {
        console.log("end of writeable stream");
    });
});