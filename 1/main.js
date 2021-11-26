function fullName(firstName, lastName, callback) {
    let fullname = firstName + " " + lastName
    callback(fullname)
}

fullName("mohsen", "ziadi", function(fullname) {
    console.log(fullname)
})