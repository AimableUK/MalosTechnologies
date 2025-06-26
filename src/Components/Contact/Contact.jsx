import { Field, Formik, Form, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import { ValidationSchema } from "../Schema/FormSchema";
import emailjs from "@emailjs/browser";
import { Spiral } from "ldrs/react";
import "ldrs/react/Spiral.css";

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  async function handleSubmit(values, actions) {
    try {
      await emailjs.send(
        "service_yf984bb",
        "template_6u9ftea",
        {
          username: values.username,
          email: values.email,
          phone: values.phone,
          companyname: values.companyname,
          message: values.message,
        },
        "Jg3BDUFSxXBvXx9Jx"
      );

      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus("error", error);
    } finally {
      actions.resetForm();
      setShowMessage(true);
    }
  }

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setShowMessage(false);
        setSubmitStatus(null);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  return (
    <section className="py-10 bg-gradient-to-b from-white to-gray-200 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Contact us
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
            Get in touch with us today, and let's bring your ideas to life!
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
          <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
            <div className="overflow-hidden bg-white rounded-xl">
              <div className="p-6">
                <svg
                  className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <p className="mt-6 text-lg font-medium text-gray-900">
                  +250 783 309 468
                </p>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  +250 783 309 468
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-xl">
              <div className="p-6">
                <svg
                  className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p className="mt-6 text-lg font-medium text-gray-900">
                  aimableukobizaba@gmail.com
                </p>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  ukobizaba81@gmail.com
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-xl">
              <div className="p-6">
                <svg
                  className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">
                  Gasabo, Kigali, Rwanda
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 overflow-hidden bg-white rounded-xl">
            <div className="px-6 py-12 sm:p-12">
              <h3 className="text-3xl font-semibold text-center text-gray-900">
                Send us a message
              </h3>
              <Formik
                validationSchema={ValidationSchema}
                initialValues={{
                  username: "",
                  email: "",
                  phone: "",
                  companyname: "",
                  message: "",
                }}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form
                    action="#"
                    method="POST"
                    className="mt-14"
                    autoComplete="off"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                      <div>
                        <label
                          htmlFor="username"
                          className="text-base font-medium text-gray-900"
                        >
                          {" "}
                          Your name{" "}
                        </label>
                        <div className="mt-2.5 relative">
                          <Field
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Enter your full name"
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                        <ErrorMessage
                          id="username"
                          name="username"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="text-base font-medium text-gray-900"
                        >
                          {" "}
                          Email address{" "}
                        </label>
                        <div className="mt-2.5 relative">
                          <Field
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your full name"
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                        <ErrorMessage
                          id="email"
                          name="email"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="text-base font-medium text-gray-900"
                        >
                          {" "}
                          Phone number{" "}
                        </label>
                        <div className="mt-2.5 relative">
                          <Field
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="eg: +(250) 283940829"
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                        <ErrorMessage
                          id="phone"
                          name="phone"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="companyname"
                          className="text-base font-medium text-gray-900"
                        >
                          {" "}
                          Company name{" "}
                        </label>
                        <div className="mt-2.5 relative">
                          <Field
                            type="text"
                            name="companyname"
                            id="companyname"
                            placeholder="Enter your full name"
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                        <ErrorMessage
                          id="companyname"
                          name="companyname"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="message"
                          className="text-base font-medium text-gray-900"
                        >
                          {" "}
                          Message{" "}
                        </label>
                        <div className="mt-2.5 relative">
                          <Field
                            as="textarea"
                            name="message"
                            id="message"
                            placeholder="Enter your message"
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                            rows="4"
                          ></Field>
                        </div>
                        <ErrorMessage
                          id="message"
                          name="message"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <button
                          disabled={isSubmitting}
                          type="submit"
                          className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                        >
                          {isSubmitting ? (
                            <div className="flex justify-center">
                              <Spiral size="30" speed="0.9" color="#a5c3cb" />
                            </div>
                          ) : (
                            "SUBMIT"
                          )}
                        </button>
                      </div>
                      {showMessage && submitStatus === "success" && (
                        <p className="text-green-500 text-sm mt-2">
                          Message sent successfully!
                        </p>
                      )}
                      {showMessage && submitStatus === "error" && (
                        <p className="text-red-500 text-sm mt-2">
                          Failed to send message. Please try again.
                        </p>
                      )}
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
