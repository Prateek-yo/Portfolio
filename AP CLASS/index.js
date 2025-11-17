const bcrypt = require('bcrypt')
const express = require('express')
const { PrismaClient } = require('@prisma/client')
var jwt = require('jsonwebtoken');
const prisma = new PrismaClient()
const app = express()
app.use(express.json())


app.post('/signup', async (req, res) => {
    const { email, password } = req.body
    // Need to checj whether user already exists
    const user = await prisma.user.findUnique({
        where: { email }
    })
    if (user) {
        return res.status(422).json({ message: "User Already exists" })
    } else {
        // In this case we need to insert or add user in db 
        // we do not want to store password directly we want to hased it first
        // hashing the password
        try {
            const hashedPassword = await bcrypt.hash(password, 10)

            await prisma.user.create({
                data: {
                    email: email,
                    password: hashedPassword
                }
            })
            return res.status(200).json({ message: "User Create Successfully!" })

        } catch {
            return res.status(500).json({ message: "Something went wrong" })

        }


    }
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    // we need to check use existt
    const user = await prisma.user.findUnique({
        where: { email }
    })
    if (!user) {
        return res.status(422).json({ message: "User does not exists" })
    } else {
        // password check
        const isPasswrodMatch = bcrypt.compareSync(password, user.password);
        if (isPasswrodMatch) {
            //  read jsonweb token how to create jwt token
            const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY)
            return res.status(200).json({ token: token, email: email })
        } else {
            return res.status(401).json({ message: "Password is incorrect." })
        }
    }

})

async function isValidToken(req, res, next) {
    try {
        const token = req.headers?.authorization?.split(' ')?.[1] || 'acscvdfv';
        const isTokenVerified = await jwt.verify(token, process.env.SECRET_KEY)
        if (isTokenVerified) {
            next()
        } else {
            return res.status(401).json({ message: "You are not authorized!!" })
        }
    } catch (error) {
        return res.status(401).json({ message: "You are not authorized!!" })
    }
}
app.get("/users", isValidToken, async (req, res) => {
    const users = await prisma.user.findMany();
    return res.status(200).json({ data: users })
})
app.listen(3000, () => {
    console.log('Server runnit')
})