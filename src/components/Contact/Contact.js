import { useRef, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import emailjs from "@emailjs/browser";

import "./Contact.scss";
import Button from "react-bootstrap/Button";

import AlertBox from "../AlertBox/AlertBox";

// Creating schema
const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Names must have at least 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is a required field"),
});

const Contact = () => {
  const form = useRef();
  const [sendEmail, setSendEmail] = useState("");

  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={{ name: "", email: "", subject: "", message: "" }}
        onSubmit={() => {
          emailjs
            .sendForm(
              "ia-website-contact",
              "template_miifhml",
              form.current,
              "qh1FHH8ABw3iW-g-J"
            )
            .then(
              () => {
                setSendEmail("success");
              },
              (error) => {
                setSendEmail("warning");
                console.warn(error.text);
              }
            );
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <section id="contact-us" className="contact">
            <div className="container">
              <h2 className="mb-4 text-center section-title">Contact Us</h2>
              <p className="text-center mb-4">Please do not hesitate to leave us a message.</p>
              {sendEmail === "success" && (
                <AlertBox
                  variant={"success"}
                  icon={"check"}
                  text={"Your message has been sent. Thank you!"}
                  size={"contact__alert"}
                />
              )}
              {sendEmail === "warning" && (
                <AlertBox
                  variant={"warning"}
                  icon={"exclamation"}
                  text={"Ooops! There was an error"}
                  size={"contact__alert"}
                />
              )}

              <form
                ref={form}
                className="contact__form"
                noValidate
                onSubmit={handleSubmit}
              >
               
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder="Full name"
                  className="form-control"
                  id="name"
                />
                {/* If validation is not passed show errors */}
                <p className="contact__error">
                  {errors.name && touched.name && errors.name}
                </p>
              
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Email"
                  className="form-control"
                  id="email"
                />
                {/* If validation is not passed show errors */}
                <p className="contact__error">
                  {errors.email && touched.email && errors.email}
                </p>
              
                <input
                  type="text"
                  name="subject"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.subject}
                  placeholder="Subject"
                  className="form-control"
                  id="subject"
                />
                {/* If validation is not passed show errors */}
                <p className="contact__error">
                  {errors.subject && touched.subject && errors.subject}
                </p>
              
                <textarea
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Message"
                  className="contact__message form-control"
                />
                {/* If validation is not passed show errors */}
                <p className="contact__error">
                  {errors.message && touched.message && errors.message}
                </p>
               
                <Button
                  className="contact__btn"
                  type="submit"
                  variant="outline-primary"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </section>
        )}
      </Formik>
    </>
  );
};

export default Contact;
