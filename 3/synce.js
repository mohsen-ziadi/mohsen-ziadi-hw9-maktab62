const fs = require("fs");

let data = "this is a new text in newSynceFile.txt";

try {
    fs.writeFileSync("newSynceFile.txt", data);
    console.log("<<<<<<<<File Created>>>>>>>>");

} catch (err) {
    console.log("ERROR>>>>>> ", err);
}

try {
    fs.accessSync("newSynceFile.txt");
    console.log("<<<<<<<<<<<<File exists.>>>>>>>>>>>");
} catch (err) {
    console.log("<<<<<<<<File does not exist.>>>>>>>>>");
}