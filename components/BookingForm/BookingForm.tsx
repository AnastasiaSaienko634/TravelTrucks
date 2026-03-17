"use client";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldProps } from "formik";
import * as Yup from "yup";
import css from "./BookingForm.module.css";

// For Date Picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { enUS } from "date-fns/locale";

// react hot-toast
import toast from "react-hot-toast";

// Date Picker
const FormikDatePicker = ({ field, form }: FieldProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className={css.datePickerContainer}>
      <DatePicker
        {...field}
        selected={field.value}
        onChange={(date: Date | null) => form.setFieldValue(field.name, date)}
        minDate={new Date()}
        placeholderText={
          focused ? "Select a date between today" : "Booking date*"
        }
        onFocus={() => setFocused(true)}
        onBlur={() => {
          setFocused(false);
          form.setFieldTouched(field.name, true);
        }}
        className={css.bookingFieldDate}
        dateFormat="dd/MM/yyyy"
        formatWeekDay={(nameOfDay) => nameOfDay.slice(0, 3)}
        locale={enUS}
        required
      />
    </div>
  );
};

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
          {/* Booking Date Field + Date Picker */}
          <Field
            name="bookingDate"
            placeholder="Booking date*"
            component={FormikDatePicker}
            required
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
