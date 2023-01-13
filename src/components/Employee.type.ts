export interface Employee {
    id: string;
    firstname: String;
    lastname: string;
    email: string
}

export const employeeList : Employee[] = [{
    id: new Date().toJSON().toString(),
    firstname: "Jeannot",
    lastname: "DIAMBU",
    email: "jean@gmail.om"
},]

export enum PageList {
    list,
    add
}