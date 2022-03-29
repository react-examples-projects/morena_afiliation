import React from "react";
import useBody from "../../Hooks/useBody";
import css from "./NotFound.module.scss";
import { Text, Image, Button } from "@geist-ui/core";
import { Link } from "react-router-dom";
import NotFoundImg from "../../../Assets/404.svg";

export default function NotFound() {
  useBody({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  });

  return (
    <div className={css.container}>
      <Image src={NotFoundImg} />
      <Text h1 className="my-0 mt-2">
        No encontrado
      </Text>
      <Text className="text-gray">
        La página o recurso que intentas acceder no existe o ya no se encuentra
        disponible, te recomendamos regresar al inicio.
      </Text>
      <Link to="/">
        <Button>Regresar</Button>
      </Link>
    </div>
  );
}
