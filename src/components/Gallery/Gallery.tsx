import React from "react";
import CheckboxInput from "../../utilsComponents/Input/CheckboxInput/CheckboxInput";
import {
  RadioInput,
  TextAreaInput,
  TextInput,
} from "../../utilsComponents/Input/Input";

function Gallery() {
  return (
    <div className="Gallery w-screen h-screen max-w-full p-2 bg-slate-300">
      <TextInput
        label="Testing"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          console.log(event.target.value)
        }
      />
      <TextAreaInput
        label="Testing"
        placeholder="Describe..."
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          console.log(event.target.value)
        }
      />
      <RadioInput
        label="What is your gender?"
        data={[
          { label: "Male", value: "male" },
          { label: "Testing", value: "teesting" },
        ]}
        onSelect={(value: string) => console.log(value)}
        value="male"
      />
      <CheckboxInput
        data={[
          {
            label: "Male",
            value: "male",
          },
          {
            label: "Female",
            value: "female",
          },
        ]}
        label="What is your gender?"
        selected={{
          male: {
            label: "Male",
            value: "male",
          },
        }}
        onSelect={(data: any) => console.log("Checkbox data >>>", data)}
      />
    </div>
  );
}

export default Gallery;
