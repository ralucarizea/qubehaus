import React, {HTMLInputTypeAttribute} from 'react';
import {Label} from "@/components/ui/label";
import {cn} from "@/lib/utils";
import {Input} from "@/components/ui/input";

type OptionsItemProps = {
    label: string
    options: string[]
    selectedValue: string
    onChange: (value: string) => void,
    type: HTMLInputTypeAttribute,
    labelClassname?: string
}

const OptionsItem: React.FC<OptionsItemProps> = ({label, labelClassname, options, selectedValue, onChange, type}) => {
    return (
        <div className='flex flex-col gap-2 py-6'>
            <Label
                className={cn('text-3xl text-primary font-light tracking-[-1px] mb-4', labelClassname ?? '')}>
                {label}
            </Label>
            <div className='flex flex-col gap-3 w-full'>
                {options.map((option) => (
                    <label className="flex justify-between items-center w-full cursor-pointer" key={option}>
                        <div
                            className={cn(
                                'w-full bg-muted text-muted-foreground font-light p-6 rounded-lg text-2xl transition-all border-2',
                                selectedValue === option ? 'border-blue-500 bg-background text-primary' : 'border-transparent',
                            )}
                        >
                            {option}
                        </div>
                        <Input
                            type={type}
                            value={option}
                            checked={selectedValue === option}
                            onChange={(e) => onChange(option)}
                            className="absolute opacity-0 peer w-fit"
                        />
                    </label>
                ))}
            </div>
        </div>
    );
}

export default OptionsItem;
