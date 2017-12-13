module.exports = (photo, newPhotoName, newPhotoDir, photoFormat) => {
    let newPhotoPath = `${newPhotoDir}/${newPhotoName}.${photoFormat}`

    return new Promise(function (resolve, reject) {
        photo.mv(newPhotoPath, function (err) {
            if (err) {
                reject(err)
                return
            }

            resolve(newPhotoPath)
        });
    })

}