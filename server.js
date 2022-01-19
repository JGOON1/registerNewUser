const express = require('express');
const routers = require('./routes/signupRouter.js')
const app = express();
const port = process.env.PORT || 3050;


app.use(express.json())
app.use('/users', routers)


app.get('/', (req, res) => {
    res.send('Register A new User')
});


app.listen(port, () => {
    console.log(`Example app is listen at http://localhost:${port}`)
})