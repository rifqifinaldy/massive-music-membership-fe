import { createReducer } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { REQUEST_MEMBER_LIST } from "./action";

interface IState<T> {
  data?: T;
  pending: boolean;
  success: boolean;
  error: null | AxiosError;
  total?: number;
  isEmpty?: boolean;
}

const commonState = {
  pending: false,
  success: false,
  error: null,
};

export type IMembersState = {
  membersList: IState<any[] | []>;
};

const initialState: IMembersState = {
  membersList: { ...commonState, data: [], total: 0 },
};

export const MEMBER_REDUCER = createReducer(initialState, (builder) => {
  builder
    // MEMBERSHIP LIST
    .addCase(REQUEST_MEMBER_LIST.pending, (state) => {
      state.membersList.success = false;
      state.membersList.error = null;
      state.membersList.pending = true;
    })
    .addCase(REQUEST_MEMBER_LIST.fulfilled, (state, { payload }) => {
      state.membersList.data = payload.data;
      state.membersList.success = true;
      state.membersList.error = null;
      state.membersList.pending = false;
    })
    .addCase(REQUEST_MEMBER_LIST.rejected, (state, { payload }) => {
      state.membersList.success = false;
      state.membersList.error = payload as AxiosError;
      state.membersList.pending = false;
    });
});
