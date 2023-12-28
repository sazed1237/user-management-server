const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');


const users = [
    {id: 1, name: 'Akram Khan', age: 35,},
    {id: 2, name: 'Sakib Khan', age: 25,},
    {id: 3, name: 'Jakia Sultana', age: 20,},
    {id: 4, name: 'Pakhi Islam', age: 18,},
];

// Middleware
app.use(cors());
app.use(express.json())


app.get('/', (req, res) =>{
    res.send('the user server is running!!')
});

app.get('/users', (req, res) =>{
    res.send(users)
});

app.post('/users', (req, res) => {
    console.log('post api hitting')
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser)
    res.send(newUser)
})


app.listen(port, ()=>{
    console.log(`user server is running on PORT: ${port}`)
});