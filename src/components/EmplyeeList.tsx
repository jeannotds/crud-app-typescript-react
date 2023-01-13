import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import "../styles/EmployeeList.css";
import { Employee } from "./Employee.type";

type props = {
  list: Employee[];
};

export const EmplyeeList = (props: props) => {
  const { list } = props;
  return (
    <div>
      This is employee list page
      <table className="tableList">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
          {list.map((emplyee) => {
            return (
              <tr key={emplyee.id}>
                <td>{`${emplyee.firstname} ${emplyee.lastname}`}</td>
                <td>{emplyee.email}</td>
                <td>Actions</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
