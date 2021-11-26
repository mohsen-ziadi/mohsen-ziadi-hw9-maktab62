const fs = require("fs");


fs.writeFile("newAsynceFile.txt", "this is a new text in newAsynceFile.txt", function(err) {
    if (err) {
        console.log("error: ", err);
    } else {
        console.log("<<<<<<<<File Created>>>>>>>>");

    }
    fs.access("newAsynceFile.txt", (err) => {
        if (err) {
            console.log("<<<<<<<<File does not exist.>>>>>>>>>");
        } else {
            console.log("<<<<<<<<<<<<File exists.>>>>>>>>>>>");
        }
    });

});