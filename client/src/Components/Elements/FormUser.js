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
  const [section, setSection] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phoneLanda, setPhoneLanda] = useState("");
  const [selectorKey, setSelectorKey] = useState("");
  const [phone, setPhone] = useState("");
  const { setToast } = useToasts();

  const onChangeSection = (value) => setSection(value);
  const onChangePostalCode = (value) => setPostalCode(value);
  const onChangePhoneLanda = (value) => setPhoneLanda(value);
  const onChangePhone = (value) => setPhone(value);
  const onChangeSelectorKey = (value) => setSelectorKey(value);

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
        email: e.target.email.value,
        postal_code: postalCode,
        section,
        phone_lada: phoneLanda,
        phone,
        last_name: e.target.last_name.value,
        mother_last_name: e.target.mother_last_name.value,
        names: e.target.names.value,
        membership_date: e.target.membership_date.value,
        street: e.target.street.value,
        no_ext: e.target.no_ext.value,
        no_int: e.target.no_int.value,
        colonia: e.target.colonia.value,
        municipality: e.target.municipality.value,
        entity: e.target.entity.value,
        selector_key: selectorKey,
      };

      await userCreateSchema.validate(obj);
      const fd = new FormData(e.target);
      fd.append("section", section);
      fd.append("postal_code", postalCode);
      fd.append("phone_lada", phoneLanda);
      fd.append("phone", phone);
      fd.append("selector_key", selectorKey);

      const data = await createUserMutation.mutateAsync(fd);

      if (data?.ok) {
        setToast({
          text: `El usuario ${obj.names} se agrego correctamente.`,
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
            <Grid xs={24} sm={12} md={5} lg={5}>
              <div className="d-column">
                <label htmlFor="section" className="mb-1">
                  Sección
                  <ReactCodeInput
                    onChange={onChangeSection}
                    value={section}
                    type="number"
                    fields={4}
                    {...inputCodeProps}
                  />
                </label>

                <label htmlFor="postal_code" className="mb-1 mt-1">
                  Código postal
                  <ReactCodeInput
                    onChange={onChangePostalCode}
                    value={postalCode}
                    type="number"
                    fields={5}
                    {...inputCodeProps}
                  />
                </label>
              </div>
            </Grid>

            <Grid xs={0} sm={0} md={10} lg={10}>
              <Image src={MorenaLogo} width="400px" height="121px" />
            </Grid>

            <Grid xs={24} sm={12} md={9} lg={9}>
              <div className="d-column">
                <label htmlFor="phone_lada" className="mb-1">
                  Teléfono con landa
                  <ReactCodeInput
                    onChange={onChangePhoneLanda}
                    value={phoneLanda}
                    type="number"
                    fields={10}
                    {...inputCodeProps}
                  />
                </label>

                <label htmlFor="phone" className="mb-1 mt-1">
                  Celular
                  <ReactCodeInput
                    onChange={onChangePhone}
                    value={phone}
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

            <Grid xs={24} sm={24} md={24} lg={24} className="py-0">
              <Text b small className="text-morena">
                Datos del afiliado
              </Text>
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
                  required
                />
              </label>
            </Grid>

            <Grid xs={24} sm={24} md={24} lg={24} className="py-0">
              <Text b small className="text-morena">
                Fecha de afiliación
              </Text>
            </Grid>

            <Grid xs={24} sm={24} md={15} lg={15}>
              <label htmlFor="names" className="text-gray d-block-100">
                Nombres
                <Input
                  className="mt-1"
                  width="100%"
                  name="names"
                  id="names"
                  placeholder="Luis José"
                  required
                />
              </label>
            </Grid>

            <Grid xs={24} sm={24} md={9} lg={9}>
              <label
                htmlFor="membership_date"
                className="text-gray d-block-100"
              >
                Fecha de afiliación
                <Input
                  className="mt-1"
                  width="100%"
                  name="membership_date"
                  id="membership_date"
                  placeholder="Luis José"
                  htmlType="date"
                  required
                />
              </label>
            </Grid>

            <Grid xs={24} sm={24} md={24} lg={24} className="py-0">
              <Text b small className="text-morena">
                Domicio
              </Text>
            </Grid>

            <Grid xs={24} sm={24} md={6} lg={6}>
              <label htmlFor="street" className="text-gray d-block-100">
                Calle
                <Input
                  className="mt-1"
                  width="100%"
                  name="street"
                  id="street"
                  required
                />
              </label>
            </Grid>

            <Grid xs={24} sm={24} md={6} lg={6}>
              <label htmlFor="no_ext" className="text-gray d-block-100">
                No. Ext
                <Input
                  className="mt-1"
                  width="100%"
                  name="no_ext"
                  htmlType="number"
                  id="no_ext"
                  required
                />
              </label>
            </Grid>

            <Grid xs={24} sm={24} md={6} lg={6}>
              <label htmlFor="no_int" className="text-gray d-block-100">
                No. Int
                <Input
                  className="mt-1"
                  width="100%"
                  name="no_int"
                  htmlType="number"
                  id="no_int"
                  required
                />
              </label>
            </Grid>

            <Grid xs={24} sm={24} md={6} lg={6}>
              <label htmlFor="colonia" className="text-gray d-block-100">
                Colonia
                <Input
                  className="mt-1"
                  width="100%"
                  name="colonia"
                  id="colonia"
                  required
                />
              </label>
            </Grid>

            <Grid xs={24} sm={24} md={12} lg={12}>
              <label htmlFor="municipality" className="text-gray d-block-100">
                Delegación o Municipio
                <Input
                  className="mt-1"
                  width="100%"
                  name="municipality"
                  id="municipality"
                  required
                />
              </label>
            </Grid>

            <Grid xs={24} sm={24} md={12} lg={12}>
              <label htmlFor="entity" className="text-gray d-block-100">
                Entidad
                <Input
                  className="mt-1"
                  width="100%"
                  name="entity"
                  id="entity"
                  required
                />
              </label>
            </Grid>

            <Grid xs={24} sm={24} md={12} lg={12}>
              <label htmlFor="selector_key" className="text-gray d-block-100">
                Clave de selector
                <ReactCodeInput
                  onChange={onChangeSelectorKey}
                  value={selectorKey}
                  type="number"
                  fields={18}
                  {...inputCodeProps}
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
              type="error"
              className="mt-3 btn-morena"
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
