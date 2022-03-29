import { Text, Button, Input, useToasts, Grid, Image } from "@geist-ui/core";
import ReactCodeInput from "react-code-input";
import { useMutation } from "react-query";
import { createUser } from "../../Helpers/api";
import React, { useState } from "react";
import ErrorText from "./ErrorText";
import { getErrorValidation } from "../../Helpers/utils";
import { userCreateSchema } from "../../Helpers/validations";
import MorenaLogo from "../../Assets/morena_logo.PNG";
export default function FormUser({ setUsers }) {
  const createUserMutation = useMutation((user) => createUser(user));
  const [error, setError] = useState(null);
  const { setToast } = useToasts();
  const inputCodeProps = {
    className: "arrows-hidden-input-number",
    inputStyle: {
      width: "28px",
      height: "28px",
    },
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const obj = {
        name: e.target.name.value,
        email: e.target.email.value,
        age: e.target.age.value,
        whatsapp: e.target.whatsapp.value,
      };

      await userCreateSchema.validate(obj);
      const fd = new FormData(e.target);
      const data = await createUserMutation.mutateAsync(fd);

      if (data?.ok) {
        setToast({
          text: `El usuario ${obj.name} se agrego correctamente.`,
          type: "success",
          delay: 4000,
        });

        setUsers((users) => setUsers([...users, obj]));
      } else {
        setToast({
          text: `Error al agregar el usuario.`,
          type: "error",
          delay: 4000,
        });
      }
    } catch (err) {
      console.log(err);
      if (err.name === "ValidationError") setError(err.message);
    }
  };

  return (
    <div className="mt-3 mb-5" data-aos="fade-up" data-aos-duration="900">
      <div className="center">
        <form style={{ width: "100%" }} onSubmit={onSubmit}>
          <Grid.Container gap={1}>
            <Grid xs={24} sm={12} md={6} lg={6}>
              <div className="d-column">
                <label htmlFor="section" className="mb-1">
                  Sección
                  <ReactCodeInput
                    type="number"
                    fields={4}
                    {...inputCodeProps}
                  />
                </label>

                <label htmlFor="postal_code" className="mb-1 mt-1">
                  Código postal
                  <ReactCodeInput
                    type="number"
                    fields={5}
                    {...inputCodeProps}
                  />
                </label>
              </div>
            </Grid>

            <Grid xs={0} sm={0} md={9} lg={9}>
              <Image src={MorenaLogo} width="400px" height="100px" />
            </Grid>

            <Grid xs={24} sm={12} md={9} lg={9}>
              <div className="d-column">
                <label htmlFor="phone_lada" className="mb-1">
                  Teléfono con landa
                  <ReactCodeInput
                    type="number"
                    fields={10}
                    {...inputCodeProps}
                  />
                </label>

                <label htmlFor="phone" className="mb-1 mt-1">
                  Celular
                  <ReactCodeInput
                    type="number"
                    fields={10}
                    {...inputCodeProps}
                  />
                </label>
              </div>
            </Grid>

            <Grid xs={24} sm={24} md={24} lg={24}>
              <label htmlFor="email" className="text-gray d-block-100">
                Correo Electrónico
                <Input
                  className="mt-1"
                  width="100%"
                  name="email"
                  id="email"
                  placeholder="email@gmail.com"
                  htmlType="email"
                  required
                />
              </label>
            </Grid>

            <Grid xs={24} sm={24} md={12} lg={12}>
              <label htmlFor="last_name" className="text-gray d-block-100">
                Apellido Paterno
                <Input
                  className="mt-1"
                  width="100%"
                  name="last_name"
                  id="last_name"
                  placeholder="Mendez Ortega"
                  htmlType="last_name"
                  required
                />
              </label>
            </Grid>

            <Grid xs={24} sm={24} md={12} lg={12}>
              <label
                htmlFor="mother_last_name"
                className="text-gray d-block-100"
              >
                Apellido Materno
                <Input
                  className="mt-1"
                  width="100%"
                  name="mother_last_name"
                  id="mother_last_name"
                  placeholder="Vazquez"
                  htmlType="mother_last_name"
                  required
                />
              </label>
            </Grid>
          </Grid.Container>

          <ErrorText
            text={error || getErrorValidation(createUserMutation)}
            isVisible={!!error || createUserMutation.isError}
          />
          <div>
            <Button
              type="success"
              className="mr-2"
              auto
              htmlType="submit"
              disabled={createUserMutation.isLoading}
              loading={createUserMutation.isLoading}
            >
              Aceptar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
