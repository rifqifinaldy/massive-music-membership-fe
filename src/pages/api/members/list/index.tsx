import type { NextApiRequest, NextApiResponse } from "next";
import MEMBERS from "@MME-db/member.json";
import {
  ERROR_MESSAGE,
  SUCCESS_MESSAGE,
} from "@MME-interface/response.interface";
import { REQUEST_HEADERS } from "@MME-interface/global.interface";
import { IMembers } from "@MME-interface/member.interface";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const members: IMembers[] | [] = MEMBERS as IMembers[] | [];

  if (
    MEMBERS &&
    req.headers[REQUEST_HEADERS.API_KEY] === process.env["NEXT_PUBLIC_API_KEY"]
  ) {
    res.statusCode = 200;
    return res.status(200).json({
      data: members,
      message:
        members?.length > 0 ? SUCCESS_MESSAGE.GET : SUCCESS_MESSAGE.NO_RECORDS,
      code: res.statusCode,
      total: MEMBERS.length,
    });
  } else {
    res.statusCode = 500;
    return res.status(500).json({
      data: [],
      message: ERROR_MESSAGE.GENERAL,
      code: res.statusCode,
    });
  }
}
