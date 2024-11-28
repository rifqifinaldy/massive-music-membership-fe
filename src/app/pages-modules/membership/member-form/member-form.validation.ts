import * as Yup from "yup";

export const validateMember = Yup.object().shape({
  first_name: Yup.string()
    .required("First name is required")
    .trim()
    .max(20, "Max 20 character"),
  last_name: Yup.string().max(20, "Max 20 character"),
  email: Yup.string()
    .email("Email should be in email format")
    .required("Email is required"),
  gender: Yup.string().required("Please specify the gender"),
  age: Yup.number()
    .typeError("Please input the age for this user")
    .required("Please input the age for this user"),
  member_type: Yup.string().required("Please specify the type for this member"),
});
