const fs = require("fs")

try {
    let fromData = fs.readFileSync("./from.txt", { encoding: "utf-8" })
    let appendData = fs.readFileSync("./append.txt", { encoding: "utf-8" })
    fs.writeFileSync("./to.txt", fromData, { encoding: "utf-8" })
    console.log("<<<<FINISH WRITE>>>>>")
    fs.appendFileSync("./to.txt", appendData, { encoding: "utf-8" })
    console.log("<<<<FINISH APPEND>>>>>")
} catch (error) {
    console.log("ERROR>>>>>>>", error)
}