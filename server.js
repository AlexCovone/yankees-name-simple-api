const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

const players = {
    'aaron judge':{
        'player': 'batter',
        'name': 'Aaron Judge',
        'age': 30,
        'plateAppearances': 689,
        'battingAverage': .311,
        'onBasePercentage': .426,
        'sluggingPercentage': .686,
        'OPS+': 212
    },
    'giancarlo stanton':{
        'player': 'batter',
        'name': 'Giancarlo Stanton',
        'age': 32,
        'plateAppearances': 448,
        'battingAverage': .210,
        'onBasePercentage': .295,
        'sluggingPercentage': .456,
        'OPS+': 111
    },
    'anthony rizzo':{
        'name': 'Anthony Rizzo',
        'player': 'batter',
        'age': 33,
        'plateAppearances': 540,
        'battingAverage': .227,
        'onBasePercentage': .339,
        'sluggingPercentage': .486,
        'OPS+': 133
    },
    'gerrit cole':{
        'name': 'Gerrit Cole',
        'player': 'pitcher',
        'age': 32,
        'inningsPitched': 194.2,
        'era': 3.51,
        'whip': 1.017,
        'strikeouts': 248
    },
    'nestor cortes jr': {
        'name': 'Nestor Cortes Jr.',
        'player': 'pitcher',
        'age': 27,
        'inningsPitched': 158.1,
        'era': 2.44,
        'whip': 0.922,
        'strikeouts': 163
    },
    'luis severino':{
        'name': 'Luis Severino',
        'player': 'pitcher',
        'age': 28,
        'inningsPitched': 102.0,
        'era': 3.18,
        'whip': 1.000,
        'strikeouts': 112
    },
    'unknown':{
        'name': 'unknown',
        'age': 'unknown',
        'plateAppearances': 'unknown',
        'battingAverage': 'unknown',
        'onBasePercentage': 'unknown',
        'sluggingPercentage': 'unknown',
        'OPS+': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const yankeeName = request.params.name.toLowerCase();

    if(players[yankeeName]){
        response.json(players[yankeeName])
    // }else if(pitchingPlayers[yankeeName]){
    //     response.json(pitchingPlayers[yankeeName])
    }else{
        response.json(players['unknown'])
    }   
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})