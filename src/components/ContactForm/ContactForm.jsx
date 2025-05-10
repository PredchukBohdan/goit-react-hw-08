import s from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(11, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

export const ContactForm = () => {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const phoneFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <div className={s.contactFormWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        {({ errors, touched }) => (
          <Form className={s.form}>
            <div className={s.fieldWrapper}>
              <label htmlFor={nameFieldId}>Name</label>
              <Field
                type="text"
                name="name"
                id={nameFieldId}
                placeholder="Enter the name"
                className={touched.name && errors.name && s.inputError}
              />
              <ErrorMessage className={s.error} name="name" component="span" />
            </div>
            <div className={s.fieldWrapper}>
              <label htmlFor={phoneFieldId}>Number</label>
              <Field
                type="text"
                name="number"
                id={phoneFieldId}
                placeholder="Enter the number"
                className={touched.number && errors.number && s.inputError}
              />
              <ErrorMessage
                className={s.error}
                name="number"
                component="span"
              />
            </div>
            <button type="submit" className={s.button}>
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
