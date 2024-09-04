'use client'


import ImageWrapper from '@/components/Configurator/ImageWrapper'
import OptionsMenu from '@/components/Configurator/OptionsMenu'
import {useConfigurator} from '@/hooks/useConfigurator'

const Configurator = () => {
    const {selectedOptions, updateOption} = useConfigurator()

    return (
        <div className='flex h-[100vh] max-w-[100vw] bg-background'>
            <div className='flex w-1/2 border-2 h-full'>
                <ImageWrapper selectedOptions={selectedOptions}/>
            </div>
            <div className='flex w-1/2 border-2 h-full'>
                <OptionsMenu selectedOptions={selectedOptions} updateOption={updateOption}/>
            </div>
        </div>
    )
}

export default Configurator
