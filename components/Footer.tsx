import React from "react";
import {Card, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {MoveRight} from "lucide-react";


const Footer: React.FC = () => {
    return (
        <div className="flex w-full flex-col bg-background sm:p-4 md:p-6 lg:p-16 text-[36px] ">
            <div className='w-full  flex gap-8 h-[80vh] py-16 '>
                <Card className='w-2/5 h-full bg-orange-50 rounded-[16px] border-none shadow-md'>
                    <CardTitle className='pl-8 pt-8 font-extralight flex flex-col text-h3 gap-2'> Make backyard
                        yours.
                        <Button variant='link'
                                className='p-0 text-[36px] font-light flex gap-2 items-center justify-start'> Configure
                            in 3D <MoveRight/></Button>
                    </CardTitle>
                </Card>
                <Card className='w-2/5 h-full bg-orange-50 rounded-[16px] border-none shadow-md'>
                    <CardTitle className='pl-8 pt-8 font-extralight flex flex-col text-h3 gap-2'> Seeing is
                        believing.
                        <Button variant='link'
                                className='p-0 text-[36px] font-light flex gap-2 items-center justify-start'> Find
                            a showroom <MoveRight/></Button>
                    </CardTitle>
                </Card>
                <Card className='w-2/5 h-full bg-orange-50 rounded-[16px] border-none shadow-md'>
                    <CardTitle className='pl-8 pt-8 font-extralight flex flex-col text-h3 gap-2'> Backyard
                        Multiunit.
                        <Button variant='link'
                                className='p-0 text-[36px] font-light flex gap-2 items-center justify-start'> For
                            developers <MoveRight/></Button>
                    </CardTitle>
                </Card>
                <Card className='w-2/5 h-full bg-orange-50 rounded-[16px] border-none shadow-md'>
                    <CardTitle className='pl-8 pt-8 font-extralight flex flex-col text-h3 gap-2'> Get answers.
                        <Button
                            variant='link'
                            className='p-0 text-[36px] font-light flex gap-2 items-center justify-start'> FAQ <MoveRight/>
                        </Button>
                    </CardTitle>
                </Card>
            </div>
            <div className='w-full flex gap-5 '>
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
