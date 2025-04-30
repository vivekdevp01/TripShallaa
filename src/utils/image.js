// const multer = require("multer");
// const path = require("path");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     let folder = "rafting"; // default

//     // You can customize this logic based on your routes or request
//     if (req.baseUrl.includes("camping")) {
//       folder = "camping";
//     }
//     if (req.baseUrl.includes("places")) {
//       folder = "places";
//     }
//     cb(null, path.join(__dirname, `../uploads/${folder}`));
//   },
//   filename: function (req, file, cb) {
//     const ext = path.extname(file.originalname);
//     const uniqueName = `${Date.now()}-${file.fieldname}${ext}`;
//     cb(null, uniqueName);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   const allowed = /jpeg|jpg|png/;
//   const extValid = allowed.test(path.extname(file.originalname).toLowerCase());
//   const mimeValid = allowed.test(file.mimetype);
//   if (extValid && mimeValid) cb(null, true);
//   else cb(new Error("Only .jpg, .jpeg, .png formats allowed!"));
// };

// const upload = multer({
//   storage: storage,
//   fileFilter,
//   limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
// });

// module.exports = {
//   singleUpload: upload.single("image"),
//   multipleUpload: upload.array("images", 10),
//   singleCampingUpload: upload.single("image"),
//   multipleCampingUpload: upload.array("images", 10),
//   singlePlaceUpload: upload.single("image"),
//   multiplePlaceUpload: upload.array("images", 10),
// };

const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder = "rafting"; // default folder

    // Check for custom folder passed from route
    if (req.uploadFolder) {
      folder = req.uploadFolder;
    }

    const fullPath = path.join(__dirname, `../uploads/${folder}`);
    // Create the folder if it doesn't exist
    fs.mkdirSync(fullPath, { recursive: true });

    cb(null, fullPath);
  },

  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const uniqueName = `${Date.now()}-${file.fieldname}${ext}`;
    cb(null, uniqueName);
  },
});

const fileFilter = (req, file, cb) => {
  const allowed = /jpeg|jpg|png/;
  const extValid = allowed.test(path.extname(file.originalname).toLowerCase());
  const mimeValid = allowed.test(file.mimetype);
  if (extValid && mimeValid) cb(null, true);
  else cb(new Error("Only .jpg, .jpeg, .png formats allowed!"));
};

const upload = multer({
  storage: storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
});

// Middlewares that set upload folder then call multer
const setUploadFolder = (folder) => (req, res, next) => {
  req.uploadFolder = folder;
  next();
};

module.exports = {
  setUploadFolder,
  singleUpload: upload.single("image"),
  multipleUpload: upload.array("images", 10),
};
