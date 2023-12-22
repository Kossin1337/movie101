"use client";

import React, { FC, ChangeEvent, useContext } from "react";
import { AppContext } from "@/app/ContextProvider";

interface InputProps {
  label: string;
  value: string | number | null;
  onChange: any;
  // onChange: (value: string | number | null) => void;
  type?: "text" | "number";
}

const TextInput: FC<InputProps> = ({
  label,
  value,
  onChange,
  type = "text",
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label>{label}</label>
      <input type={type} value={value as string} onChange={handleChange} />
    </div>
  );
};

const NumberInput: FC<InputProps> = ({ label, value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const numericValue = parseInt(e.target.value, 10);
    onChange(isNaN(numericValue) ? null : numericValue);
  };

  return (
    <div>
      <label>{label}</label>
      <input type="number" value={value as number} onChange={handleChange} />
    </div>
  );
};

const Menu = () => {
  const { searchOptions } = useContext(AppContext);

  return (
    <div>
      <TextInput
        label="Title"
        value={searchOptions.title}
        onChange={(value: string) => (searchOptions.title = value)}
        // onChange={searchOptions.title}
      />
      <NumberInput
        label="Page"
        value={searchOptions.page}
        onChange={(value: number) => (searchOptions.page = value)}
      />
      <NumberInput
        label="Start Year"
        value={searchOptions.startYear}
        onChange={(value: number) => (searchOptions.startYear = value)}
      />
      <NumberInput
        label="End Year"
        value={searchOptions.endYear}
        onChange={(value: number) => (searchOptions.endYear = value)}
      />
    </div>
  );
};

export default Menu;
