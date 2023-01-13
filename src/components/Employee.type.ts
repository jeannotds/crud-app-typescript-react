export interface Employee {
    id: string;
    firstname: String;
    lastname: string;
    email: string
}

export const employeeList : Employee[] = []

export enum PageList {
    list,
    add
}