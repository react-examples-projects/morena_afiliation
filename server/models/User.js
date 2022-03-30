const { Schema, model } = require("mongoose");
const { validateEmail } = require("../helpers/utils");
const UserSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: "El correo es obligatorio",
      validate: [validateEmail, "Coloca un correo válido"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Coloca un correo válido",
      ],
    },
    section: {
      type: Number,
      required: [true, "El código de sección es obligatorio"],
    },
    postal_code: {
      type: Number,
      required: [true, "El código postal es obligatorio"],
    },
    phone_lada: {
      type: Number,
      required: [true, "El télefono lada es obligatorio"],
    },
    phone: {
      type: Number,
      required: [true, "El celular es obligatorio"],
    },
    // apellido paterno
    last_name: {
      type: String,
      minLength: 3,
      maxLength: 200,
      trim: true,
    },
    // apellido materno
    mother_last_name: {
      type: String,
      minLength: 3,
      maxLength: 200,
      trim: true,
    },
    names: {
      type: String,
      required: [true, "Los nombres son obligatorio"],
      minLength: 3,
      maxLength: 200,
      trim: true,
    },
    membership_date: {
      type: Date,
      required: [true, "La fecha de afiliación es obligatoria"],
    },
    street: {
      type: String,
      required: [true, "La calle es obligatoria"],
      trim: true,
      maxLength: 200,
    },
    no_ext: {
      type: Number,
      required: [true, "no_ext es obligatoria"],
    },
    no_int: {
      type: Number,
      required: [true, "no_int es obligatoria"],
    },
    colonia: {
      type: String,
      required: [true, "La colonia es obligatoria"],
      trim: true,
    },
    municipality: {
      type: String,
      required: [true, "El municipio es obligatorio"],
      trim: true,
    },
    entity: {
      type: String,
      required: [true, "La entidad es obligatoria"],
      trim: true,
    },
  },
  { timestamps: true, collection: "users" }
);

module.exports = model("User", UserSchema);
