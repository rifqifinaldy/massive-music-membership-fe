import type { NextApiRequest, NextApiResponse } from "next";
import MEMBERS from "@MME-db/member.json";
import {
  ERROR_MESSAGE,
  SUCCESS_MESSAGE,
} from "@MME-interface/response.interface";
import { REQUEST_HEADERS } from "@MME-interface/global.interface";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (
    req.headers[REQUEST_HEADERS.API_KEY] === process.env["NEXT_PUBLIC_API_KEY"]
  ) {
    const id = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    res.statusCode = 200;
    return res.status(200).json({
      data: {
        ...req.body,
        id: id,
      },
      message: SUCCESS_MESSAGE.CREATE,
      code: res.statusCode,
      total: MEMBERS.length,
    });
  } else {
    res.statusCode = 500;
    return res.status(500).json({
      message: ERROR_MESSAGE.GENERAL,
      code: res.statusCode,
    });
  }
}
