import { createReducer } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import {
  REQUEST_MEMBER_ADD,
  REQUEST_MEMBER_EDIT,
  REQUEST_MEMBER_LIST,
} from "./action";
import { IMembers } from "@MME-interface/member.interface";

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
  membersList: IState<IMembers[] | []>;
  createMember: IState<undefined>;
  editMember: IState<undefined>;
};

const initialState: IMembersState = {
  membersList: { ...commonState, data: [], total: 0 },
  createMember: { ...commonState, data: undefined },
  editMember: { ...commonState, data: undefined },
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
    })
    // CREATE NEW MEMBER
    .addCase(REQUEST_MEMBER_ADD.fulfilled, (state, { payload }) => {
      const membersListData = state.membersList.data || [];
      state.membersList.data = [...membersListData, payload.data];
      state.createMember.success = true;
      state.createMember.error = null;
      state.createMember.pending = false;
    })
    .addCase(REQUEST_MEMBER_ADD.rejected, (state, { payload }) => {
      state.createMember.success = false;
      state.createMember.error = payload as AxiosError;
      state.createMember.pending = false;
    })
    .addCase(REQUEST_MEMBER_ADD.pending, (state) => {
      state.createMember.error = null;
      state.createMember.pending = true;
    })
    // EDIT MEMBER;
    // REQUEST EDIT USER
    .addCase(REQUEST_MEMBER_EDIT.pending, (state) => {
      state.editMember.error = null;
      state.editMember.pending = true;
    })
    .addCase(REQUEST_MEMBER_EDIT.fulfilled, (state, { payload }) => {
      const membersList = state.membersList.data || [];
      const tmpUser = [...membersList];
      const edit = membersList.findIndex(
        (user) => user.id === Number(payload.data.id)
      );
      tmpUser[edit] = payload.data;
      state.membersList.data = tmpUser;
      state.editMember.success = true;
      state.editMember.error = null;
      state.editMember.pending = false;
    })
    .addCase(REQUEST_MEMBER_EDIT.rejected, (state, { payload }) => {
      state.editMember.success = false;
      state.editMember.error = payload as AxiosError;
      state.editMember.pending = false;
    });
});
