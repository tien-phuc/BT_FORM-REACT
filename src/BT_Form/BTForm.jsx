import React from "react";
import { Form } from "./Form";
import { Table } from "./Table";

export const BTForm = () => {
  return (
    <div className="container">
      <h1 className="text-center fw-bold">Bài Tập Form</h1>
      <Form />
      <Table />
    </div>
  );
};
