import React, { HTMLInputTypeAttribute } from "react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

type OptionsItemProps = {
  label: string;
  options: {
    label: string;
    value: any;
    description?: string;
    price?: string;
  }[];
  selectedValue: string;
  onChange: (value: string) => void;
  type: HTMLInputTypeAttribute;
  labelClassname?: string;
  className?: string;
};

const OptionsItem: React.FC<OptionsItemProps> = ({
  label,
  labelClassname,
  options,
  selectedValue,
  onChange,
  type,
  className,
}) => {
  return (
    <div
      className={cn(
        "w-3/6 flex flex-col justify-center py-6 mx-auto",
        className,
      )}
    >
      <div className="flex flex-col items-center w-full justify-center">
        <Label
          className={cn(
            "text-3xl text-primary font-light tracking-[-1px] mb-4 w-3/6",
            labelClassname ?? "",
          )}
        >
          {label}
        </Label>
        <div className="flex flex-col gap-3 w-3/6">
          {options.map((option) => (
            <label
              htmlFor={`option-${option.value}`}
              className="flex justify-between items-center w-full cursor-pointer"
              key={option.value}
            >
              <div
                className={cn(
                  "w-full bg-muted text-muted-foreground font-light p-6 rounded-lg text-2xl transition-all border-2 peer-checked:border-blue-500 peer-checked:bg-background peer-checked:text-primary",
                  "flex flex-row justify-between items-center",
                  selectedValue === option.value
                    ? "border-blue-500 bg-background text-primary"
                    : "border-transparent",
                )}
              >
                <div>
                  {option.label}
                  {option.description && (
                    <div className="text-sm text-gray-500">
                      {option.description}
                    </div>
                  )}
                </div>
                {option.price && (
                  <div className="font-mono tracking-wider cursor-pointer text-sm font-medium text-gray-600 border border-gray-400 rounded-md px-3 py-1">
                    {option.price}
                  </div>
                )}
              </div>
              <Input
                id={`option-${option.value}`}
                type={type}
                value={option.value}
                checked={selectedValue === option.value}
                onChange={() => onChange(option.value)}
                className="absolute opacity-0 peer"
              />
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OptionsItem;
