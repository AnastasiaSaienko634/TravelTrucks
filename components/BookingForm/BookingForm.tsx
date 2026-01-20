import { Formik, Form, Field } from "formik";
import css from "./BookingForm.module.css";

const BookingForm = () => {
  const handleSubmit = () => {};
  return (
    <div className={css.container}>
      <h3 className={css.bookingTitle}>Book your campervan now</h3>
      <p className={css.bookingDescription}>
        Stay connected! We are always ready to help you.
      </p>
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
            name="name"
            placeholder="Email*"
          />
          <Field
            className={css.bookingField}
            name="name"
            placeholder="Booking date*"
          />
          <Field
            className={css.bookingTextarea}
            name="name"
            placeholder="Comment"
            as="textarea"
            rows="4"
          />
          <button className={css.bookingButton}>Send</button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookingForm;
