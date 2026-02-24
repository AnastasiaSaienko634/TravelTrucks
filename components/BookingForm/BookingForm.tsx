import { Formik, Form, Field } from "formik";
import css from "./BookingForm.module.css";
// react hot-toast
import toast from "react-hot-toast";
// Booking Valigation
// Coming soon...

// Booking Form
const BookingForm = () => {
  const handleSubmit = () => {
    toast.success("Your booking was successful!");
  };
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
      >
        <Form className={css.bookingForm}>
          <Field className={css.bookingField} name="name" placeholder="Name*" />
          <Field
            className={css.bookingField}
            name="email"
            placeholder="Email*"
            required
          />
          <Field
            className={css.bookingField}
            name="bookingDate"
            placeholder="Booking date*"
            required
          />
          <Field
            className={css.bookingTextarea}
            name="comment"
            placeholder="Comment"
            as="textarea"
            rows="4"
          />
          {/* Button Submit Form */}
          <button className={css.bookingButton}>Send</button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookingForm;
