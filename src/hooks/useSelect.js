import { useState } from "react";

export const useSelect = (props) => {
  const { datas, k, v, onChange, ...styleProps } = props;
  if (!Array.isArray(datas) || datas.length === 0) {
    return;
  }
  const [item, setItem] = useState();

  const setOptions = (obj) => {
    let optKey;
    let optValue;
    for (let key in obj) {
      if (k === key) {
        optKey = obj[key];
      }
      if (v === key) {
        optValue = obj[key];
      }
    }
    return (
      <option value={optKey} key={`${optKey}`}>
        {optValue}
      </option>
    );
  };

  const handleChange = (e) => {
    setItem(e.target.value);
    if (typeof onChange === "function") {
      onChange(e.target.value);
    }
  };

  return (
    <select value={item} onChange={handleChange} style={{ ...styleProps }}>
      {datas.map((data, i) => setOptions(data))}
    </select>
  );
};
