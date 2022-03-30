import React, { useEffect, useState } from "react";
import styles from "./home.module.scss";
import FormUser from "../../Elements/FormUser";
import TableUsers from "../../Elements/TableUsers";
import { getUsers } from "../../../Helpers/api";
import { useQuery } from "react-query";

export default function Home() {
  const { isLoading, isError, data } = useQuery("users", getUsers);
  const [users, setUsers] = useState(data || []);

  useEffect(() => {
    setUsers(data);
  }, [data]);

  return (
    <div
      className="container mb-5"
      style={{ maxWidth: "900px", marginTop: "5rem" }}
      data-aos="zoom-out-up"
    >
      <FormUser setUsers={setUsers} />

      <TableUsers {...{ isLoading, isError, users, setUsers }} />
    </div>
  );
}
