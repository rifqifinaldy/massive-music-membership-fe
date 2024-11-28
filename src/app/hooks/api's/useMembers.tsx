import { IRootContext, RootContext } from "@MME-context/root.context";
import useResponse from "@MME-hooks/helper/useResponse";
import { IMembers } from "@MME-interface/member.interface";
import {
  MEMBERS_SELECTOR_COLLECTION,
  REQUEST_MEMBER_ADD,
  REQUEST_MEMBER_DELETE,
  REQUEST_MEMBER_EDIT,
  REQUEST_MEMBER_LIST,
} from "@MME-redux/membership";
import { useAppDispatch, useAppSelector } from "@MME-redux/useRedux";
import { useCallback, useContext } from "react";

const useMembers = () => {
  const { modal } = useContext(RootContext) as IRootContext;
  const dispatch = useAppDispatch();
  const state = useAppSelector(MEMBERS_SELECTOR_COLLECTION);
  const { handleError, handleSuccess } = useResponse();

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

  const createMembers = useCallback(
    (payload: IMembers) => {
      dispatch(REQUEST_MEMBER_ADD(payload)).then((result) => {
        if (result.meta.requestStatus === "fulfilled") {
          modal.onClose();
          handleSuccess("New member has been added");
        } else if (result.meta.requestStatus === "rejected") {
          modal.onClose();
          handleError(
            result.payload.response?.status,
            result.payload.response?.data.message
          );
        }
      });
    },
    [dispatch, handleError, handleSuccess, modal]
  );

  const editMembers = useCallback(
    (payload: IMembers) => {
      dispatch(REQUEST_MEMBER_EDIT(payload)).then((result) => {
        if (result.meta.requestStatus === "fulfilled") {
          modal.onClose();
          handleSuccess("Member has been edited");
        } else if (result.meta.requestStatus === "rejected") {
          modal.onClose();
          handleError(
            result.payload.response?.status,
            result.payload.response?.data.message
          );
        }
      });
    },
    [dispatch, handleError, handleSuccess, modal]
  );

  const deleteMember = useCallback(
    (id: number) => {
      dispatch(REQUEST_MEMBER_DELETE(id)).then((result) => {
        if (result.meta.requestStatus === "fulfilled") {
          modal.onClose();
          handleSuccess("Member has been deleted");
        } else if (result.meta.requestStatus === "rejected") {
          modal.onClose();
          handleError(
            result.payload.response?.status,
            result.payload.response?.data.message
          );
        }
      });
    },
    [dispatch, handleError, handleSuccess, modal]
  );

  return { ...state, getMembersList, createMembers, editMembers, deleteMember };
};

export default useMembers;
