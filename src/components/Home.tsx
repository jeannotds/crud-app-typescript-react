import React, { useState } from "react";
import "../styles/Home.css";
import { AddEmployee } from "./AddEmployee";
import { Employee, employeeList, PageList } from "./Employee.type";
import { EmplyeeList } from "./EmplyeeList";

export const Home = () => {
  const [employee, setEmployee] = useState(employeeList as Employee[]);
  const [showList, setShowList] = useState(PageList.list);

  const onAddEmployeeClick = () => {
    setShowList(PageList.add);
  };

  const showListPage = () => {
    setShowList(PageList.list);
  };
  const addEmplyee = (data: Employee) => {
    setEmployee([...employee, data]);
  };

  return (
    <>
      <article className="article-header">
        <header>
          <h1>React Simple SCRUD Application </h1>
        </header>
      </article>
      <section className="section-content">
        {showList === PageList.list && (
          <>
            <input
              type="submit"
              value="add Employee"
              onClick={onAddEmployeeClick}
            />
            <EmplyeeList list={employee} />
          </>
        )}
        {showList === PageList.add && (
          <AddEmployee
            onBackBtnClick={showListPage}
            SubmitHandler={addEmplyee}
          ></AddEmployee>
        )}
      </section>
    </>
  );
};
