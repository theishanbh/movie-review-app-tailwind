// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const apiKey = "bed7df5b96bf6f4df4f9e3bbe0e4f03c"

const handler = (req:NextApiRequest, res:NextApiResponse) => {
    if (req.method === "POST") {
        try{
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${req.body.search}`)
            .then(data => data.json())
            .then(data => {
                res.send(data.results)
            })
        }catch(e){
            console.log(e)
        }
  } else {
      res.setHeader("Allow", "POST")
      res.status(405).end("Method Not Allowed")
  }
}

export default handler