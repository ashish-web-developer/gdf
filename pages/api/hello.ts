import type { NextApiRequest, NextApiResponse } from 'next'

async function handler(req:NextApiRequest, res:NextApiResponse) {
    res.send("Hello world");
}


export default handler;

