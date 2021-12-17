import React from "react";
import Input from "../Input/Input";
import Menu from "../Menu/Menu";

function PersonalInfoForm() {
  return (
    <div className="PersonalInfoForm grow p-3">
      <h1>Personal Information</h1>
      <Input label="Email" type="text" />
      <Input label="First name" type="text" />
      <Input label="Last name" type="text" />
      <Input label="Phone" type="text" />
      <Menu
        label="Gender"
        type="radio"
        data={[
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
          { value: "other", label: "Other" },
          { value: "no disclose", label: "Prefer not to disclose" },
        ]}
      />
      <Menu
        label="What university do you attend?"
        type="radio"
        data={[
          {
            value: "drexel",
            label: "Drexel University",
          },
          { value: "temple", label: "Temple University" },
          { value: "upenn", label: "University of Pennsylvania" },
        ]}
      />
      <Input label="Bio" type="textarea" placeholder="Describe yourself..." />
    </div>
  );
}

export default PersonalInfoForm;
