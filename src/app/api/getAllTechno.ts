'use client';

import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { Techno } from "../../../typing";

const query = groq`
  *[_type == "techno"]{
    ...,
  }
`;

type Data = {
  techno: Techno[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const techno: Techno[] = await sanityClient.fetch(query);

  res.status(200).json({ techno });
}
