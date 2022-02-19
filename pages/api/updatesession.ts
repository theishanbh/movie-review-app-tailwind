// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = (req:NextApiRequest, res:NextApiResponse) => {
    if (req.method === "POST") {
      try {
          res.status(200).json("checkoutSession")
      } catch (err: any) {
          res.status(500).json({ statusCode: 500, message: err.message })
      }
  } else {
      res.setHeader("Allow", "POST")
      res.status(405).end("Method Not Allowed")
  }
}

export default handler