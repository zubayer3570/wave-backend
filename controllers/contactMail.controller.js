const sendMail = async (req, res) => {
    const data = req.body
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "wave.coredevs@gmail.com",
            pass: "arytdkqzqttxmnxu"
        }
    })
    const toWave = {
        from: data.email,
        to: "wave.coredevs@gmail.com",
        subject: "New Client",
        html: `
            <p>Client's Name: ${data.name}</p>
            <p>Client's Email: ${data.email}</p>
            <p>Client's Phone Number: ${data.phone}</p>
            <p>Client's Location: ${data.location}</p>
            <p>Client's Message: ${data.text}</p>
        `
    }
    const confirmationEmail = {
        from: "wave.coredevs@gmail.com",
        to: data.email,
        subject: "Team Wave",
        html: `
            <p>Hello ${data.name},</p>
            <p>Thank you for contacting us. We have received your mail and will contact you soon.</p>
            <p>Team Wave</p>
            <p style="color:red;font-weight:700">Fuck You!!!</p>
        `
    }
    await transporter.sendMail(confirmationEmail)
    await transporter.sendMail(toWave)
    transporter.close()
    res.send({ message: "mail sent successfully" })
}

module.exports = {
    sendMail
}