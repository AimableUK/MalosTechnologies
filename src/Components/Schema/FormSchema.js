import * as yup from "yup";

export const ValidationSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .min(3, "Your name Should be atleast 3 characters")
    .required("Your name is required"),

  email: yup
    .string()
    .trim()
    .email("Invalid email format")
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    )
    .notOneOf(["test@example.com"], "This email is not allowed"),

  phone: yup
    .string()
    .trim()
    .matches(/^\+?[1-9]\d{9,14}$/, "Please enter a valid phone number")
    .required("Phone number is required"),

  companyname: yup
    .string()
    .trim()
    .min(2, "Company name must be at least 2 characters")
    .max(50, "Company name cannot exceed 50 characters")
    .matches(/^[a-zA-Z0-9\s&.,'-]+$/, "Invalid characters in company name")
    .required("Company name is required"),

  message: yup
    .string()
    .trim()
    .min(10, "Message must be atleast 10 characters")
    .required("Your message is Required"),
});
