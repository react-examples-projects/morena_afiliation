import React from "react";
import { Text, Table, Image } from "@geist-ui/core";
import styles from "../Pages/Home/home.module.scss";
import { SpinnerCircular } from "spinners-react";
import AddUserImg from "../../Assets/add_user.svg";
import ErrorUserImg from "../../Assets/error_users.PNG";

export default function TableUsers({ isLoading, isError, users }) {
  if (isLoading)
    return (
      <div className="center" style={{ flexDirection: "column" }}>
        <SpinnerCircular
          size={50}
          thickness={100}
          speed={100}
          color="#0070f3"
          secondaryColor="rgba(0, 0, 0, 0.2)"
        />
        <Text className="my-0 mt-1">Cargando lista...</Text>
      </div>
    );

  if (isError) {
    return (
      <div
        className="center"
        style={{ flexDirection: "column", marginTop: "-4rem" }}
      >
        <Image src={ErrorUserImg} width="300px" height="300px" />
        <Text h4 className="my-0" type="error">
          Ocurrió un error al consultar la lista de usuarios
        </Text>
      </div>
    );
  }
  if (!users?.length) {
    return (
      <div
        className="center"
        style={{ flexDirection: "column", marginTop: "-4rem" }}
      >
        <Image src={AddUserImg} width="300px" height="300px" />
        <Text h4 className="my-0">
          Aun no hay registros de usuarios
        </Text>
      </div>
    );
  }

  return (
    <div className={styles.tableUsers}>
      <Table data={users} className="pr-1">
        <Table.Column prop="name" label="Nombre" />
        <Table.Column prop="age" label="Edad" />
        <Table.Column prop="email" label="Correo" />
        <Table.Column prop="whatsapp" label="Whatsapp" />
      </Table>
    </div>
  );
}
