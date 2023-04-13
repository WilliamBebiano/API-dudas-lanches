const multer = require('multer')
const { resolve } = require('path')
const { v4 } = require('uuid')
const { extname } = require('path')

module.exports = {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'uploads'),
    filename: (request, file, callback) => {
      return callback(null, v4() + extname(file.originalname));
    }
  })
}