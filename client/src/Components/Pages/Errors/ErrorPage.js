import React from "react";
import { Text, Image, Button } from "@geist-ui/core";
import ErrorPageImg from "../../../Assets/error_page.PNG";

export default function ErrorPage({ error, resetErrorBoundary }) {
  return (
    <div
      role="alert"
      className="center"
      style={{ flexDirection: "column", height: "100vh" }}
    >
      <Image src={ErrorPageImg} width="300px" height="300px" />
      <Text h1>Algo no bien</Text>
      <Text p className="text-gray">
        Ocurrió un error en la página, por favor intenta volver a entrar o
        reporta este problema a un administrador.
      </Text>
      <Text small className="text-gray">
        Descripción: {error.message}
      </Text>

      <Button onClick={resetErrorBoundary} className="mt-3">
        Volver entrar
      </Button>
    </div>
  );
}
