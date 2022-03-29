import * as yup from "yup";

export const userCreateSchema = yup.object({
  name: yup
    .string()
    .min(3, "Mínimo 3 carácteres para el nombre")
    .max(200, "Máximo 200 caracteres para el nombre")
    .required("El nombre es obligatorio"),
  email: yup
    .string()
    .email("El correo debe ser válido, ejemplo: example@domain.es")
    .required("El correo es obligatorio"),
  age: yup
    .number()
    .typeError('La edad debe ser un número')
    .min(1, "La edad debe estar entre 1-100")
    .max(100, "La edad debe estar entre 1-100")
    .required("La edad es obligatoria"),
  whatsapp: yup.string().required("El whatsapp es obligatorio"),
});
