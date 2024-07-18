import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv'


dotenv.config()
const app = express();
const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

app.use(cors());

app.get("/courses", (req, resp) => {
    const courses = [
        {
            id: 1,
            courseName: "MERN"
        },
        {
            id: 2,
            courseName: "MEAN"
        },
        {
            id: 3,
            courseName: "MERP"
        }
    ]
    resp.send(courses)
})

app.listen(port, () => {
    console.log(`server is running on http://${hostname}:${port}`)
})