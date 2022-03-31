import * as yup from "yup";

export const userCreateSchema = yup.object({
  email: yup
    .string()
    .email("Coloca un correo válido")
    .required("El correo es obligatorio"),
  section: yup.string().required("El código de sección es obligatorio"),
  postal_code: yup
    .number()
    .typeError("El codigo postal debe ser un numero válido")
    .required("El código postal es obligatorio"),
  phone_lada: yup
    .number()
    .typeError("El phone lada debe ser un numero válido")
    .required("El teléfono lada es obligatorio"),
  phone: yup
    .number()
    .typeError("El teléfono debe ser un numero válido")
    .required("El número de celular es obligatorio"),
  last_name: yup.string(),
  mother_last_name: yup.string(),
  names: yup
    .string()
    .min(3, "El nombre debe estar entre 3-200 carácteres")
    .max(200, "El nombre debe estar entre 3-200 carácteres")
    .required("Los nombres son obligatorios"),
  membership_date: yup.date().required("La fecha de afiliación es obligatoria"),
  street: yup.string().required("La calle es obligatoria"),
  no_ext: yup
    .number()
    .typeError("El no_ext debe ser un numero válido")
    .required("no_ext es obligatorio"),
  no_int: yup
    .number()
    .typeError("El no_int debe ser un numero válido")
    .required("no_int es obligatorio"),
  colonia: yup.string().required("La colonia es obligatoria"),
  municipality: yup.string().required("El municipio es obligatorio"),
  entity: yup.string().required("La entidad es obligatoria"),
  selector_key: yup
    .number()
    .typeError("La clave de selector debe ser un numero válido")
    .required("La clave de selector es obligatoria"),
});
