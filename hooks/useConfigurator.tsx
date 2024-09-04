'use client'


import { useState } from 'react'



export const useConfigurator = () => {
    const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({
        color: 'Red',
        layout: 'Studio',
        windows: 'Normal',
    })

    const updateOption = (optionName: string, value: string) => {
        setSelectedOptions((prevOptions) => ({
            ...prevOptions,
            [optionName]: value,
        }))
    }

    return { selectedOptions, updateOption }
}
