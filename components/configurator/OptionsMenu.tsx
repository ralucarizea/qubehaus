import React from 'react'
import OptionsItem from "@/components/configurator/OptionsItem";
import {Button} from "@/components/ui/button";
import {ScrollArea} from "@/components/ui/scroll-area";

type OptionsMenuProps = {
    selectedOptions: Record<string, string>
    updateOption: (optionName: string, value: string) => void
}

const OptionsMenu: React.FC<OptionsMenuProps> = ({selectedOptions, updateOption}) => {
    const handleChange = (optionName: string, value: string) => {
        updateOption(optionName, value)
    }

    return (
        <ScrollArea className='flex flex-col gap-8 w-full font-light text-primary text-h2 leading-10 px-32 ' >
            <div className='flex flex-col gap-4 w-full tracking-[-0.5px] text-primary '>
                <div className='text-h2 pt-28'>Design your Backyard</div>
                <div className='text-[28px]  leading-8 text-muted-foreground w-[80%]'>Make it yours. Pick your layout and
                    finishes. Customize your windows, doors, and decks.
                </div>
                <div className='flex flex-col py-4 text-h6 font-light'>
                    Don’t want to start with a design? <Button variant='link'
                                                               className='w-fit mt-[-16px] text-[16px] text-blue-500 p-0 font-normal'> Get
                    a quick estimate instead </Button>
                </div>
            </div>
            <OptionsItem
                label="Choose your color"
                type={'radio'}
                options={['Red', 'Blue', 'Green']}
                selectedValue={selectedOptions.color}
                onChange={(value) => handleChange('color', value)}
            />
            <OptionsItem
                label="Choose your layout"
                type={'radio'}
                options={['Studio', '2 Bedrooms', 'XL']}
                selectedValue={selectedOptions.layout}
                onChange={(value) => handleChange('layout', value)}
            />
            <OptionsItem
                label="Choose your windows"
                type={'radio'}
                options={['Full', 'Normal']}
                selectedValue={selectedOptions.window}
                onChange={(value) => handleChange('window', value)}
            />
        </ScrollArea>
    )
}

export default OptionsMenu
