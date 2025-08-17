import React from "react";
import { InputField } from "./components/InputField/InputField";
import { DataTable } from "./components/DataTable/DataTable";

interface User {
  id: number;
  name: string;
  email: string;
}

const data: User[] = [
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

const columns = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "email", title: "Email", dataIndex: "email" },
];

export default function App() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Frontend Assignment Demo</h1>

      <InputField
        label="Username"
        placeholder="Enter your name"
        helperText="This is a helper text"
      />

      <InputField
        label="Password"
        type="password"
        placeholder="Enter password"
        invalid
        errorMessage="Password is required"
      />

      <DataTable<User> data={data} columns={columns} selectable />
    </div>
  );
}
