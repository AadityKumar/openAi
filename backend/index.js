const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express();
const OpenAI = require('openai');

app.use(bodyParser.json())
dotenv.config({ path: './config.env' })

const openai = new OpenAI({
    apiKey: process.env.API_KEY,
});




app.post('/', async (req, res) => {
    const { message } = req.body;

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role": "user",
                "content": `${message}`
            }
        ],
        temperature: 0.5,
        max_tokens: 1024,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });

    if (response.data.choices[0].text) {
        res.join({
            message: response.data.choices[0].text,
        })
    }
})

app.use(cors());
app.listen(5000, () => {
    console.log("Server running at port 500")
})





