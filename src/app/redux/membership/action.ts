import { API } from "@MME-config/api-collection";
import { REQUEST } from "@MME-config/axios";
import { IMembers } from "@MME-interface/member.interface";
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

export const REQUEST_MEMBER_ADD = createAsyncThunk(
  "member/add",
  async (payload: IMembers, { rejectWithValue }) => {
    try {
      const response = await REQUEST.post(API.MEMBERS.CREATE, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
