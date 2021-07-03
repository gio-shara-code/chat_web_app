import React from "react";

const context = React.createContext({
  value: {},
  set: (user) => {},
} as {
  value: User;
  set(user: User): void;
});

export { context as UserContext };
