const fs = require("fs")

fs.readFile("./from.txt", { encoding: "utf-8" }, function(error, data) {
    if (error) {
        console.log("ERROR>>>>", error)
    } else {
        fs.writeFile("./to.txt", data, { encoding: "utf-8" }, function(error, data) {
            if (error) {
                console.log("ERROR>>>>", error)
            } else {
                console.log("<<<<<FINISH>>>>>")
            }
        })
    }
})