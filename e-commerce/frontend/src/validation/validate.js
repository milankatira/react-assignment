import * as Yup from "yup";

export const registervalidate = () =>
  Yup.object({
    name: Yup.string().required("Name is required"),

    email: Yup.string().email("Email is invalid").required("Email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
  });


  export const loginvalidate = () =>
  Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
  });

export const productvalidate=()=>Yup.object({
name:Yup.string().require("Name is Required"),
decription:Yup.string().require("description is Required"),

})