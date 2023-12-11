import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Button, FormField , Icon, Label} from "semantic-ui-react";
import '../style.css';



export default function () {
  const initialValues = { productName: "", unitPrice: 0 };

  const schema = Yup.object({
    productName: Yup.string().required("product name is required!"),
    unitPrice: Yup.number().required("product price is required!"),
  });

  return (
    <div>
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={(values) => {
        console.log(values)
      }}>
        <Form className="ui form">
          <FormField>
            <div> <Icon name='amazon'></Icon></div>
            <div className="preference"><label>Product Name</label></div>
            <Field name="productName" placeholder="product Name"></Field>
            <ErrorMessage name="productName" render={error =>
                 <Label pointing basic color ="red" content={error}></Label>
            }></ErrorMessage>
          </FormField>
          <FormField>
          <div className="preference"><label>Unit Price</label></div>
          <Field name="unitPrice" placeholder="unit Price"></Field>
          <ErrorMessage name="unitPrice" render={error =>
                 <Label pointing basic color ="red" content={error}></Label>
            }></ErrorMessage>
          </FormField>
          <Button color="linkedin" type="submit"> Add </Button>
        </Form>
      </Formik>
    </div>
  );
}
