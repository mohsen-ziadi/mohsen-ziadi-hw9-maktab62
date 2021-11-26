const fs = require("fs")

fs.readFile("./from.txt", { encoding: "utf-8" }, function(error, fromData) {
    if (error) {
        console.log("ERROR>>>>>>", error)
    } else {
        fs.readFile("./append.txt", { encoding: "utf-8" }, function(error, appendData) {
            if (error) {
                console.log("ERROR>>>>>>", error)
            } else {

                fs.writeFile("./to.txt", fromData, { encoding: "utf-8" }, function(error) {
                    if (error) {
                        console.log("ERROR>>>>>>", error)
                    } else console.log("<<<<FINISH WRITE>>>>")
                })

                fs.appendFile("./to.txt", appendData, { encoding: "utf-8" }, function(error) {
                    if (error) {
                        console.log("ERROR>>>>>>", error)
                    } else console.log("<<<<FINISH APPENDE>>>>")
                })
            }
        })
    }
})