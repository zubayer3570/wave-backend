const { Router } = require("express");
const { sendMail } = require("../controllers/contactMail.controller");

const router = Router()
router.route('/').post(sendMail)
module.exports = router