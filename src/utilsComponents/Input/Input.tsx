import React from "react";
import RadioInput from "./RadioInput/RadioInput";
import TextAreaInput from "./TextAreaInput/TextAreaInput";
import TextInput from "./TextInput/TextInput";

export interface CommonInputProps {
  label?: string;
  placeholder?: string;
  onChange?: Function;
  value?: string;
  width?: string;
  height?: string;
}

export { TextInput, TextAreaInput, RadioInput };
