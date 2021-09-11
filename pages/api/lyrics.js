import { getLyrics, getSong } from 'genius-lyrics-api';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    const options = {
        apiKey: process.env.GENIUS_TOKEN,
        title: 'Blinding Lights',
        artist: 'The Weeknd',
        optimizeQuery: true
    };


    const data = await getLyrics(options)

    console.log(process.env.GENIUS_TOKEN)
    console.log(data)

    res.status(200).send(data);

}
