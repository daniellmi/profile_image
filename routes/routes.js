const Test = require("../model/model.js");
const router = require('express').Router();
const {v4: uuidv4} = require('uuid');
const upload = require('../model/multer.js');

router.post("/upload", upload.single("image"), async (req, res) => {

    const imageUrl = `/uploads/${req.file.filename}`;
    if (!req.file) {
      return res.status(400);
    }
  
    if (!Test.findOne({ where: { image: imageUrl } })) {
      await new Test({
        id: uuidv4(),
        image: imageUrl
      }).save();
  
    }
    res.json({ imageUrl });
  });

module.exports = router;