import { Formik } from "formik";
import * as Yup from "yup";

import "./Contact.scss";
import Button from "react-bootstrap/Button";

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
  return (
    <>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{ name: "", email: "", subject: "", message: "" }}
        onSubmit={(values) => {
          // Alert the input values of the form that we filled
          alert(JSON.stringify(values));
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
              {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <form className="contact__form" noValidate onSubmit={handleSubmit}>
                <h2 className="mb-4 text-center">Contact Us</h2>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder="Enter name"
                  className="form-control"
                  id="name"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.name && touched.name && errors.name}
                </p>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email"
                  className="form-control"
                  id="email"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="text"
                  name="subject"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.subject}
                  placeholder="Enter subject"
                  className="form-control"
                  id="subject"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.subject && touched.subject && errors.subject}
                </p>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <textarea
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter message"
                  className="form-control"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.message && touched.message && errors.message}
                </p>
                {/* Click on submit button to submit the form */}

                <Button className="contact__btn" type="submit" variant="outline-primary">Send Message</Button>
              </form>
            </div>
          </section>
        )}
      </Formik>
    </>
  );
};

export default Contact;
