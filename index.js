import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());


const links = {
    overthinking: 'https://youtu.be/Atv2nCqTJDE?si=0bmNB0x-cLcmHO-Q',
    anxiety: 'https://youtu.be/lVY8zJDHgeA',
    focus: 'https://youtu.be/Onkh5uZIVR0',
    procrastination: 'https://youtu.be/XlaPeUizAEA',
    sleep: 'https://youtu.be/5MuIMqhT8DM',
    stress: 'https://youtu.be/3I5Y4s4xj2s',
    wellbeing: 'https://youtu.be/H8bJnLERV54',
    concentration: 'https://youtu.be/jT_pXE496Tw',

};


app.post('/topic', (req, res) => {
    const topic = req.body.topic;
    const link = links[topic];
    if (link) {
        res.send({status: 200, link});
    } else {
        res.send({status: 400, message: 'No link found for this topic'});
    }
}
);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}
);

