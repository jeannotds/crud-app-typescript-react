import { validateHeaderValue } from "http";
import React, { useState } from "react";
import { Employee } from "./Employee.type";

type props = {
  onBackBtnClick: () => void;
  SubmitHandler: (data: Employee    ) => void;
};

export const AddEmployee = (props: props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const { onBackBtnClick, SubmitHandler } = props;

  const onFirstNameChange = (e: any) => {
    setFirstname(e.target.value);
  };

  const onLastNameChange = (e: any) => {
    setLastname(e.target.value);
  };

  const onEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const SubmitBtnHandler = (e: any) => {
    e.preventDefault();
    const data : Employee = {
        id: new Date().toJSON().toString(),
        firstname: firstname,
        lastname: lastname,
        email: email
    }
    SubmitHandler(data)
  };

  return (
    <>
      <form onSubmit={SubmitBtnHandler}>
        <div>
          <label>First Name</label>
          <input type="text" value={firstname} onChange={onFirstNameChange} />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" value={lastname} onChange={onLastNameChange} />
        </div>
        <div>
          <label>Email</label>
          <input type="text" value={email} onChange={onEmailChange} />
        </div>
        <div>
          <input type="button" value="Back" onClick={onBackBtnClick} />
          <input type="submit" value="Add Employee" />
        </div>
      </form>
    </>
  );
};
