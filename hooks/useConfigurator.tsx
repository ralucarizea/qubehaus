"use client";

import { useState } from "react";

export const AVAIlABLE_OPTIONS = {
  culoarea: [
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
  structura: [
    {
      label: "Normal",
      value: "normal",
      imgUrl:
        "https://www.samara.com/assets/images/configure/interior/kitchen-style-closed.jpeg",
    },
    {
      label: "Full",
      value: "full1",
      imgUrl:
        "https://www.samara.com/assets/images/configure/interior/kitchen-style-open.jpeg",
    },
  ],
  geamurile: [
    {
      label: "Normal",
      value: "normal2",
      imgUrl:
        "https://www.samara.com/assets/images/configure/interior/kitchen-style-closed.jpeg",
    },
    {
      label: "Full",
      value: "full2",
      imgUrl:
        "https://www.samara.com/assets/images/configure/interior/kitchen-style-open.jpeg",
    },
  ],
  ["nivelul de fraier"]: [
    {
      label: "Normal",
      value: "normal3",
      imgUrl:
        "https://media.cleanshot.cloud/media/86833/IIM7RSds5TH4It682S074zvbO5mYxal09c2OghRT.jpeg?Expires=1725661380&Signature=W45ooRa~acLM5B6RTrFJ0NpueBJ5nZMdBtyQNrvP4ESrzV1cvEdPsIRVeoC7jAMRiw4lfTEzkveBtkF0g4KEHyfh4kOmbmieF614lxS4DXwG9PPbY~MUN5nRG0O~NAuXRCWeF3wpk3YTM4PaT8VKslew7Yx7iFiRjdT9t~sgovKYZv65kxJfhSwps8PgZH7ogM8RNLGssT2SMIJmaJLVMrNX88WilPriXIdf5S8W0KodcvCBXPZWz-rztygkMeD7uKLBmuEKgY4Xtll34SirJJPsPKjp8ZQPjSB04lnK9eFI9BHlqiIhy6vqUVf2dK4Y5u1CyGOpG9QQYBMuSByCaQ__&Key-Pair-Id=K269JMAT9ZF4GZ",
    },
    {
      label: "Foarte",
      value: "Foarte",
      imgUrl:
        "https://media.cleanshot.cloud/media/86833/4Ove9j3kYuhgA4c1RRjaUJvS3ozfh2BHcTHPMayq.jpeg?Expires=1725661606&Signature=jX39xyj2tRKBEQoiZwN4Ie6zNRVhKWi-3vclTF6bUFXmWxOGZEoJRGgJHeBcis344NcoOuhDPm2pHz~DVJuDl4i~Zgm2fiY1UlUJgkWTrWHSvf4qpdQH1m-NMxbdz9db-BuaUVkSENOF00W~Vnc4kTps3FDEClC9aqtDqlYRgy2t-CSlTZx4VwHYk0h~KR5Cw~8m8m4KvlN4L09pYwFKd1HFBm9N2fpXGLFd2CkPSzvcIcvimrjf1jGirmN3u-ruVv2ehSp5gSnBE4UeDHK55XibWqNIjGWQTmHiriTMbOGYe-WHOi7OQsENShB~ZeHMoTrJ9yMwMi9d7FVazBMKLw__&Key-Pair-Id=K269JMAT9ZF4GZ",
    },
    {
      label: "Mega",
      value: "Mega",
      imgUrl:
        "https://media.cleanshot.cloud/media/86833/ET7IBg2Ud85Tiij6ybYEJzfaNIseKCJ8XlX88SmE.jpeg?Expires=1725661500&Signature=nFTS8fiI2S-6OC6Lklq9DN3JZy58ymknqaqBDv2ZoJvsWVdiOArN-So5opLbwbebeLS8i-ynPkmMH5dNXnM~VnZ3DBiy2rfgxTOPlQC1NYx3K6WVLTqd44S6KBcDO1Ff7vbUa3OEdP2zQDUrOgUdVxJMl7-9nARNmMeKCtu~xidZO6ta2O5IwX9wXMkn4TOCGYBvk6FLNiy01a-gd4PDxskTs3kzhxRNqEomvbSn2WeG-j0T3pll~kOscA-T93SLz5-s5xO30GuZ6tfeYviAzZ9xAzazBTV~SXinuda2IaYGLy6qmyTaA25Twd9l9CJiHHubHZpyv1hP-4NFkCzccQ__&Key-Pair-Id=K269JMAT9ZF4GZ",
    },
    {
      label: "Ultra",
      value: "ultra",
      imgUrl:
        "https://media.cleanshot.cloud/media/86833/VcxotpvWODSKqbhwGjyv16pmK5g2w1qIAblAGio6.jpeg?Expires=1725661345&Signature=sa1yLe4iE6L~01YysPqt3QEgaI9v2QxaV2bUG7i6Z382EEQK3blqwSWXr3JTcgygJimkwFhGyu4GtG2wZNA9w~-VRUHwgq1ZrOpZ7~tTx00fRSurtYuCeiKy0RKYV0fCd6aulGBwyk7ccHZwlMmxRm1iSG7ssz104KPeR6HLLye1CW2YdakBx9uH~JRjTBj2JwgnzxngsABHxAuePcyxbaU5cQgG1oCq8kGp2BxXpXeCWZNbJPjpBvDHO3hHqxiVrOVtBPG9W5MPqHJTNfrvjTcCqLLHHY0FxRyO6WmKakCt4i20DdL-1STox9Eisarkx4jOB59M0DX1B6njzBoNFA__&Key-Pair-Id=K269JMAT9ZF4GZ",
    },
  ],
};

export const useConfigurator = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    culoarea: AVAIlABLE_OPTIONS.culoarea[0].value,
    structura: AVAIlABLE_OPTIONS.structura[0].value,
    geamurile: AVAIlABLE_OPTIONS.geamurile[0].value,
    ["nivelul de fraier"]: AVAIlABLE_OPTIONS["nivelul de fraier"][0].value,
  });

  const updateOption = (optionName: string, value: string) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [optionName]: value,
    }));
  };

  return { selectedOptions, updateOption };
};
