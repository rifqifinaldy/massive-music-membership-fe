import type { NextApiRequest, NextApiResponse } from "next";
import MEMBERS from "@MME-db/member.json";
import { REQUEST_HEADERS } from "@MME-interface/global.interface";
import {
  ERROR_MESSAGE,
  SUCCESS_MESSAGE,
} from "@MME-interface/response.interface";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (
    req.headers[REQUEST_HEADERS.API_KEY] === process.env["NEXT_PUBLIC_API_KEY"]
  ) {
    res.statusCode = 200;
    return res.status(200).json({
      data: req.body,
      message: SUCCESS_MESSAGE.UPDATE,
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