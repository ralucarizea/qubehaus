"use client";

import { AVAIlABLE_OPTIONS, useConfigurator } from "@/hooks/useConfigurator";
import React, { useEffect, useRef, useState } from "react";
import OptionsItem from "@/components/configurator/OptionsItem";

const Configurator = () => {
  const { selectedOptions, updateOption } = useConfigurator();
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null); // Track the visible index
  const observerRef = useRef<IntersectionObserver | null>(null);
  const optionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          let mostVisibleIndex = null;
          let maxVisibility = 0;

          entries.forEach((entry) => {
            const index = optionRefs.current.indexOf(
              entry.target as HTMLDivElement,
            );
            const visibility = entry.intersectionRatio;

            // Find the element with the highest visibility
            if (visibility > maxVisibility) {
              maxVisibility = visibility;
              mostVisibleIndex = index;
            }
          });

          if (mostVisibleIndex !== null) {
            setVisibleIndex(mostVisibleIndex);
          }
        },
        {
          threshold: Array.from({ length: 11 }, (_, i) => i / 10), // Create thresholds from 0.0 to 1.0 for more granular visibility detection
        },
      );
    }

    // Observe each option element
    optionRefs.current.forEach((el) => {
      if (el) observerRef.current?.observe(el);
    });

    // Cleanup observer when component unmounts
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="flex h-[100vh] max-w-[100vw] bg-background">
      <div className="flex w-full h-full">
        <div className="flex flex-col gap-4 w-full">
          {Object.entries(AVAIlABLE_OPTIONS).map(([key, value], index) => {
            const selectedOption = selectedOptions[key];
            const imgUrl = value.find(
              (item) => item.value === selectedOption,
            )?.imgUrl;

            // Apply opacity based on whether the current option is in view
            const opacityClass =
              index === visibleIndex ? "opacity-100" : "opacity-80"; // Use 30% for non-visible options to ensure readability

            return (
              <div
                key={key}
                ref={(el) => (optionRefs.current[index] = el)} // Assign ref to each option
                className={`flex flex-row gap-8 w-full transition-opacity duration-300 ${opacityClass}`}
              >
                <div className="w-3/6 h-full flex items-center justify-center sticky top-7">
                  {imgUrl && (
                    <img
                      src={imgUrl}
                      alt={`Image of ${key}`}
                      className="w-full h-full bg-no-repeat bg-center bg-contain rounded-r-lg transition-all"
                    />
                  )}
                </div>
                <OptionsItem
                  label={`Alege-ti ${key}`}
                  type="radio"
                  className={opacityClass}
                  options={value.map((item) => ({
                    label: item.label,
                    value: item.value,
                    price: item.price
                      ? `+$${item.price?.toLocaleString()}`
                      : null, // Price formatting
                    description: item.description || "", // Optional description
                  }))}
                  selectedValue={selectedOptions[key]}
                  onChange={(value) => updateOption(key, value)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Configurator;
