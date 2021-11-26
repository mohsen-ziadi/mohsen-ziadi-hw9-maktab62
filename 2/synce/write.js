const fs = require("fs")

try {
    let data = fs.readFileSync("./from.txt", { encoding: "utf-8" })
    fs.writeFileSync("./to.txt", data, { encoding: "utf-8" })
    console.log("<<<<FINISH>>>>>")
} catch (error) {
    console.log("ERROR>>>>>>>", error)
}