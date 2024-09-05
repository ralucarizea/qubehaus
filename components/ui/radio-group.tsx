"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";

// RadioGroup Root
const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-4", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

// RadioGroup Item with custom style
const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  const isSelected = props.value === props.checked;

  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "flex items-center justify-between p-4 rounded-lg border transition-colors duration-150",
        isSelected ? "border-blue-500 bg-white" : "border-gray-200 bg-gray-50",
        "hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
        className,
      )}
      {...props}
    >
      <div className="flex flex-col">
        <span
          className={cn(
            "text-lg font-medium",
            isSelected ? "text-black" : "text-gray-900",
          )}
        >
          {children?.[0]}
        </span>
        <span className="text-sm text-gray-500">{children?.[1]}</span>
      </div>

      {children?.[2] && (
        <div className="text-sm font-medium px-3 py-1 bg-gray-100 border rounded-md">
          {children[2]}
        </div>
      )}
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
