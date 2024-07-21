import { inputType } from "./enum";

export const addRoleForm = [
  {
    key: "role",
    eletype: inputType.input,
    initialValue: "",
    inputProps: {
      name: "role",
    },
  },
  {
    key: "permissions",
    eletype: inputType.select,
    options: [],
    inputProps: {
      name: "permissions",
    },
  },
];
