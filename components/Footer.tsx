import React from "react";
import {Card, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {MoveRight} from "lucide-react";
import {Accordion} from "@radix-ui/react-accordion";
import {AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";


const Footer: React.FC = () => {
    return (
        <div className="flex w-full flex-col bg-background py-32 text-[36px] gap-24 justify-between min-h-fit">
            <Accordion type="single" collapsible
                       className="text-white w-full min-h-fit h-[130vh] bg-background text-primary text-h4 rounded-xl mb-16 grid grid-cols-4 grid-rows-2 gap-0.5 px-1">
                <div className='col-span-4 bg-yellow-100 rounded-[16px] relative'>
                    <AccordionItem value="item-1"
                                   className='absolute bottom-[30%] right-14 w-[27%] rounded-[16px] p-3 bg-yellow-600 '>
                        <AccordionTrigger className='flex text-h2  p-4 '> Is it
                            accessible? </AccordionTrigger>
                        <AccordionContent className='bg-red-400 text-h6 leading-5 p-4 font-light'>
                            Backyard is factory assembled using our best-in-class construction system designed for the
                            long haul.
                            Mold, rot, and termite-resistant cold formed steel frame. Unfading smooth-coated insulated
                            steel cladding.
                        </AccordionContent>
                    </AccordionItem>
                </div>
                <div className='col-span-2 bg-blue-100 rounded-[16px] relative'>
                    <AccordionItem value="item-2"
                                   className='absolute bottom-10 right-10  w-[48%] rounded-[16px] p-3 bg-blue-600'>
                        <AccordionTrigger className=' text-white  text-h2 p-4'> Is it
                            styled?</AccordionTrigger>
                        <AccordionContent className='bg-red-400 text-h6 leading-5 p-4 font-light'>
                            Yes. It comes with default styles that matches the other
                            components&apos; aesthetic. Safe and comfortable year round, even when wildfire smoke,
                            viruses,
                            pollen and dust pollute the air.
                        </AccordionContent>
                    </AccordionItem>
                </div>
                <div className='col-span-2  bg-orange-100 rounded-[16px] relative'>
                    <AccordionItem value="item-3"
                                   className='absolute bottom-10 right-10  w-[48%] rounded-[16px] p-3 bg-orange-700 '>
                        <AccordionTrigger className=' text-white text-h2  p-4'> Is it
                            animated? </AccordionTrigger>
                        <AccordionContent className='bg-red-400 text-h6 leading-5 p-4 font-light'>
                            Yes. Its animated by default, but you can disable it if you
                            prefer. Save on energy costs every month and even offset the power consumption of your main
                            home. Yes. Its animated by default, but you can disable it if you
                            prefer. Save on energy costs every month and even offset the power consumption of your main
                            home.
                        </AccordionContent>
                    </AccordionItem>
                </div>
            </Accordion>

            <div className='w-full flex gap-8 h-[80vh] px-16 '>
                <Card className='w-2/5 h-full bg-gray-50 rounded-[16px] border-none shadow-sm'>
                    <CardTitle className='pl-8 pt-8 font-extralight flex flex-col text-h3 gap-2'> Make backyard
                        yours.
                        <Button variant='link'
                                className='p-0 text-[33px] font-light flex gap-2 items-center justify-start'> Configure
                            in 3D <MoveRight/></Button>
                    </CardTitle>
                </Card>
                <Card className='w-2/5 h-full bg-gray-50 rounded-[16px] border-none shadow-sm'>
                    <CardTitle className='pl-8 pt-8 font-extralight flex flex-col text-h3 gap-2'> Seeing is
                        believing.
                        <Button variant='link'
                                className='p-0 text-[33px] font-light flex gap-2 items-center justify-start'> Find
                            a showroom <MoveRight/></Button>
                    </CardTitle>
                </Card>
                <Card className='w-2/5 h-full bg-gray-50 rounded-[16px] border-none shadow-sm'>
                    <CardTitle className='pl-8 pt-8 font-extralight flex flex-col text-h3 gap-2 under'> Backyard
                        Multiunit.
                        <Button variant='link'
                                className='p-0 text-[33px] font-light flex gap-2 items-center justify-start'> For
                            developers <MoveRight/></Button>
                    </CardTitle>
                </Card>
                <Card className='w-2/5 h-full bg-gray-50 rounded-[16px] border-none shadow-sm'>
                    <CardTitle className='pl-8 pt-8 font-extralight flex flex-col text-h3 gap-2'> Get answers.
                        <Button variant='link'
                                className='p-0 text-[33px] font-light flex gap-2 items-center justify-start'> FAQ <MoveRight/>
                        </Button>
                    </CardTitle>
                </Card>
            </div>
            <div className='w-full flex gap-8 px-16'>
                <div className='flex flex-col gap-1 w-1/3 pt-8 pb-24'>
                    <Button
                        variant='link'
                        className='p-0 text-[36px] font-light flex gap-2 items-center justify-start text-muted-foreground'> QubeHaus </Button>
                    <Button
                        variant='link'
                        className='p-0 text-[36px] font-light flex gap-2 items-center justify-start'> News </Button>
                    <Button
                        variant='link'
                        className='p-0 text-[36px] font-light flex gap-2 items-center justify-start'> Jobs </Button>
                    <Button
                        variant='link'
                        className='p-0 text-[36px] font-light flex gap-2 items-center justify-start'> Showrooms </Button>
                    <Button
                        variant='link'
                        className='p-0 text-[36px] font-light flex gap-2 items-center justify-start'> For
                        developers </Button>
                </div>
                <div className='flex flex-col gap-1 w-1/3 pt-8 pb-24'>
                    <Button
                        variant='link'
                        className='p-0 text-[36px] font-light flex gap-2 items-center justify-start text-muted-foreground'> QubeHaus </Button>
                    <Button
                        variant='link'
                        className='p-0 text-[36px] font-light flex gap-2 items-center justify-start'> News </Button>
                    <Button
                        variant='link'
                        className='p-0 text-[36px] font-light flex gap-2 items-center justify-start'> Jobs </Button>
                    <Button
                        variant='link'
                        className='p-0 text-[36px] font-light flex gap-2 items-center justify-start'> Showrooms </Button>
                    <Button
                        variant='link'
                        className='p-0 text-[36px] font-light flex gap-2 items-center justify-start'> For
                        developers </Button>
                </div>
                <div className='flex flex-col gap-1 w-1/3 pt-8 pb-24'>
                    <Button
                        variant='link'
                        className='p-0 text-[36px] font-light flex gap-2 items-center justify-start text-muted-foreground'> QubeHaus </Button>
                    <Button
                        variant='link'
                        className='p-0 text-[36px] font-light flex gap-2 items-center justify-start'> News </Button>
                    <Button
                        variant='link'
                        className='p-0 text-[36px] font-light flex gap-2 items-center justify-start'> Jobs </Button>
                    <Button
                        variant='link'
                        className='p-0 text-[36px] font-light flex gap-2 items-center justify-start'> Showrooms </Button>
                    <Button
                        variant='link'
                        className='p-0 text-[36px] font-light flex gap-2 items-center justify-start'> For
                        developers </Button>
                </div>
                <div className='flex flex-col gap-2 w-1/3 pt-6 pb-24 text-primary '>
                    <span className='text-h6 '>Have questions?</span>
                    <Button className='text-h6 my-2 py-6' variant='secondary'> Contact us</Button>
                    <span className='text-h6'>Get updates </span>
                    <span className='text-h6'>Drop us your email to learn whats next </span>
                    <Button variant='secondary' className='text-h6 py-6 my-2'> Contact us</Button>
                </div>
            </div>

        </div>
    );
};

export default Footer;
