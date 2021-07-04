import React, { createContext } from "react";

const initialState = {
    active: "overview",
    setActive: () => { },
};

export const CardContext = createContext(initialState);