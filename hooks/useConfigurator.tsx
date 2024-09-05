"use client";

import { useState } from "react";

export const AVAIlABLE_OPTIONS = {
  colors: [
    {
      label: "Red",
      value: "red",
      description: "This is a red color",
      price: 0,
      imgUrl:
        "https://www.samara.com/assets/images/configure/interior/kitchen-style-closed.jpeg",
    },
    {
      label: "Green",
      value: "green",
      description: "This is a green color",
      price: 2000,
      imgUrl:
        "https://www.samara.com/assets/images/configure/interior/kitchen-style-open.jpeg",
    },
  ],
  layout: [
    {
      label: "Normal",
      value: "normal",
      imgUrl:
        "https://www.samara.com/assets/images/configure/interior/kitchen-style-closed.jpeg",
    },
    {
      label: "Full",
      value: "full",
      imgUrl:
        "https://www.samara.com/assets/images/configure/interior/kitchen-style-open.jpeg",
    },
  ],
  windows: [
    {
      label: "Normal",
      value: "normal",
      imgUrl:
        "https://www.samara.com/assets/images/configure/interior/kitchen-style-closed.jpeg",
    },
    {
      label: "Full",
      value: "full",
      imgUrl:
        "https://www.samara.com/assets/images/configure/interior/kitchen-style-open.jpeg",
    },
  ],
};

export const useConfigurator = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    colors: AVAIlABLE_OPTIONS.colors[0].value,
    layout: AVAIlABLE_OPTIONS.layout[0].value,
    windows: AVAIlABLE_OPTIONS.windows[0].value,
  });

  const updateOption = (optionName: string, value: string) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [optionName]: value,
    }));
  };

  return { selectedOptions, updateOption };
};
