import { useField } from 'formik'
import { FormField } from 'semantic-ui-react'
import React from 'react'

export default function CodeTextInput(...props) {
    //console.log(props)
   const [field,meta] = useField(props)
   console.log(meta)
  return (
    
   <FormField>
    <input {...field}{...props} />
   </FormField>
  )
}
