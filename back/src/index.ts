import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.json('hello world');
})

app.listen(4000, () => {
    console.log('Listen in port 4000')
});