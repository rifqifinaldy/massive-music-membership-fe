import { API } from "@MME-config/api-collection";
import { REQUEST } from "@MME-config/axios";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const REQUEST_RESET_MEMBER_STATE = createAction("member/reset");

export const REQUEST_MEMBER_LIST = createAsyncThunk(
  "member/list",
  async (_, { rejectWithValue }) => {
    try {
      const response = await REQUEST.get(API.MEMBERS.LIST);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
