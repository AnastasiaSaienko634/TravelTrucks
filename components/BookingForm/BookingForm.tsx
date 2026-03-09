import { Formik, Form, Field, validateYupSchema, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./BookingForm.module.css";
// react hot-toast
import toast from "react-hot-toast";

// Booking Form
const BookingForm = () => {
  const handleSubmit = () => {
    toast.success("Your booking was successful!");
  };
  // Booking Schmema / Validation
  const BookingSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short Name!")
      .max(50, "Too Long Name!")
      .required("Required Name!"),
    email: Yup.string().email("Invalid email!").required("Required Email!"),
    bookingDate: Yup.string()
      .min(2, "Too Short Booking Date!")
      .max(50, "Too Long Booking Date!")
      .required("Required Booking Date!"),
    comment: Yup.string().max(300, "Too Long Comment!"),
  });
  return (
    // Booking Container
    <div className={css.container}>
      <h3 className={css.bookingTitle}>Book your campervan now</h3>
      <p className={css.bookingDescription}>
        Stay connected! We are always ready to help you.
      </p>
      {/* Booking Form */}
      <Formik
        initialValues={{
          name: "",
          email: "",
          bookingDate: "",
          comment: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={BookingSchema}
      >
        <Form className={css.bookingForm}>
          <Field className={css.bookingField} name="name" placeholder="Name*" />
          {/* Error Message for Validation Name */}
          <ErrorMessage
            name="name"
            component="span"
            className={css.errorMessage}
          />
          <Field
            className={css.bookingField}
            name="email"
            placeholder="Email*"
            required
          />
          {/* Error Message for Validation Email */}
          <ErrorMessage
            name="email"
            component="span"
            className={css.errorMessage}
          />
          <Field
            className={css.bookingField}
            name="bookingDate"
            placeholder="Booking date*"
            required
          />
          {/* Error Message for Validation Booking Date */}
          <ErrorMessage
            name="bookingDate"
            component="span"
            className={css.errorMessage}
          />
          <Field
            className={css.bookingTextarea}
            name="comment"
            placeholder="Comment"
            as="textarea"
            rows="4"
          />
          {/* Error Message for Validation Comment */}
          <ErrorMessage
            name="comment"
            component="span"
            className={css.errorMessage}
          />
          {/* Button Submit Form */}
          <button className={css.bookingButton}>Send</button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookingForm;
