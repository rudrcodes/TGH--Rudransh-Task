import React from "react";
import { MagnifyingGlass } from "react-loader-spinner";

export const Loader = () => {
  return (
    <MagnifyingGlass
    visible={true}
    height="100"
    width="90"
    ariaLabel="MagnifyingGlass-loading"
    wrapperStyle={{}}
    wrapperClass="MagnifyingGlass-wrapper"
    glassColor = '#c0efff'
    color = '#e15b64'
  />
  );
};
