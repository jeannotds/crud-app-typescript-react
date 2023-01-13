import React, { useState } from "react";
import "../styles/Home.css";
import { Employee, employeeList } from "./Employee.type";
import { EmplyeeList } from "./EmplyeeList";

export const Home = () => {
  const [employee, setEmployee] = useState(employeeList as Employee[]);
  console.log(employee);

  return (
    <>
      <article className="article-header">
        <header>
          <h1>React Simple SCRUD Application </h1>
        </header>
      </article>
      <section className="section-content">
        <div>This content part</div>
        <EmplyeeList list={employee} />
      </section>
    </>
  );
};
