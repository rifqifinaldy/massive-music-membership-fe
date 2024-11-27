import useResponse from "@MME-hooks/helper/useResponse";
import {
  MEMBERS_SELECTOR_COLLECTION,
  REQUEST_MEMBER_LIST,
} from "@MME-redux/membership";
import { useAppDispatch, useAppSelector } from "@MME-redux/useRedux";
import { useCallback } from "react";

const useMembers = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(MEMBERS_SELECTOR_COLLECTION);
  const { handleError } = useResponse();

  const getMembersList = useCallback(() => {
    dispatch(REQUEST_MEMBER_LIST()).then((result) => {
      if (result.meta.requestStatus === "rejected") {
        handleError(
          result.payload.response?.status,
          result.payload.response?.data.message
        );
      }
    });
  }, [dispatch, handleError]);

  return { ...state, getMembersList };
};

export default useMembers;
