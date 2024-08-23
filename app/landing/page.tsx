"use client"
import Layout from "@/components/Layout";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card, CardContent, CardTitle} from "@/components/ui/card";
import {ArrowRight, MoveRight} from "lucide-react";
// import {useEffect, useState} from "react";


const placeholderWidth = '1650';
const placeholderHeight = '900';


export default function LandingPageContent() {

    return (
        <Layout>
            <section className='flex flex-col justify-center items-center w-full text-primary pt-16'>
                <div
                    className='flex items-center justify-center w-full text-[350px] font-extralight tracking-[-28px] relative mr-16'>
                    XL10
                </div>
                <div className='text-[34px] font-light flex flex-col items-end absolute left-[13%] top-[33%]'>
                    Small living,
                    <span className='mt-[-10px]'> supersized.</span>
                </div>
                <div className='text-[34px] font-light flex flex-col items-start absolute right-[4%]  top-[33%]'>
                    Introducing Backyard XL 10:
                    <span className='mt-[-10px]'> Two bedrooms, two baths.</span>
                    <span className='mt-[-10px]'> 950 square feet.</span>
                </div>
                <div className='mt-[-36px] flex justify-center w-full '>
                    <Image
                        src={`https://picsum.photos/${parseInt(placeholderWidth)}/${parseInt(placeholderHeight)}`}
                        alt={'placeholder'}
                        width={parseInt(placeholderWidth)}
                        height={parseInt(placeholderHeight)}
                    />
                </div>
            </section>
            <section
                className={`flex items-start justify-center w-[${placeholderWidth}] font-extralight text-primary pl-16 py-16 flex flex-col gap-16`}>
                <div className=' text-[110px] tracking-[-4px]'>
                    <div>Backyard <Image
                        className='inline-block mx-2'
                        alt=''
                        src={`https://picsum.photos/250/100`}
                        width={'250'}
                        height={'100'}
                    /> is the
                    </div>
                    <div className='mt-[-36px]'>super simple, smartly</div>
                    <div className='mt-[-36px]'>customizable, <Image
                        className='inline-block mx-2'
                        alt=''
                        src={`https://picsum.photos/210/100`}
                        width={'210'}
                        height={'100'}
                    /> all new
                    </div>
                    <div className='mt-[-36px]'>ADU <Image
                        className='inline-block mx-2'
                        alt=''
                        src={`https://picsum.photos/280/100`}
                        width={'280'}
                        height={'100'}
                    /> from
                        {/*<span className='font-thin'>*/}
                        {' '}Qube
                        {/*</span><span className='font-bold'>*/}
                        Haus.
                        {/*</span>*/}
                    </div>
                </div>
                <div className='text-[32px] tracking-[-1px]'>
                    <div className=''>
                        We handle everything, from permits to installation.
                    </div>
                    <div className='mt-[-8px] text-zinc-400'>
                        Available now in California.
                    </div>
                </div>
                <div className='text-h5 mt-[-24px] text-zinc-400 tracking-[-0.5px] font-light'>
                    Not in California? <Button variant='link' className='text-lg pl-1 font-normal'> Tell us where to
                    build
                    next </Button>
                </div>
            </section>
            <section className='mt-16  py-10'>
                <Carousel className="w-full max-w-full" opts={{
                    align: "center",
                    loop: true,
                }}>
                    <CarouselContent className="-ml-1">
                        {Array.from({length: 5}).map((_, index) => (
                            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-2/3">
                                <div className="p-4">
                                    <Card className='shadow-md'>
                                        <CardContent className="flex aspect-video items-center justify-center p-6">
                                            <span className="text-h2 font-light ">{index + 1}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='ml-16  border-none'/>
                    <CarouselNext className='mr-16  border-none'/>
                    <div
                        className='flex justify-center text-h3 gap-4 items-baseline text-accent-foreground font-light tracking-[-1px] mt-3'> Backyard
                        XL <span className='text-muted-foreground text-h5 font-light'>800 sq. ft.</span></div>
                </Carousel>
            </section>
            <section>
                <div
                    className='flex flex-col w-full items-center justify-center text-[60px] text-primary my-[13%] font-extralight tracking-[-4px]'>
                    <div>
                        Rent it. Divide it. Work there. Or live in it.
                    </div>
                    <div className='text-muted-foreground mt-[-12px]'>
                        Unlock the potential of your yard.
                    </div>
                </div>
            </section>
            <section className='flex w-full items-center justify-center gap-10 h-[65vh]'>
                <Card className='w-2/5 h-full bg-orange-50 rounded-[16px] border-none shadow-md'>
                    <CardTitle className='pl-8 pt-8 font-extralight flex flex-col text-h3 gap-2'> Experience QubeHaus in
                        person. <Button variant='link'
                                        className='p-0 text-[30px] font-light flex gap-2 items-center justify-start'> Visit a
                            showroom <MoveRight/></Button>
                    </CardTitle>
                    <CardContent className="">

                    </CardContent>
                </Card>
                <Card className='w-2/5 h-full bg-orange-50 rounded-[16px] border-none shadow-md'>
                    <CardTitle className='pl-8 pt-8 font-extralight flex flex-col text-h3 gap-2'> Learn how we squeeze a
                        whole house into your yard. <Button variant='link'
                                                            className='p-0 text-[30px] font-light flex gap-2 items-center justify-start'> How
                            it
                            works <MoveRight/></Button>
                    </CardTitle>
                    <CardContent className="">

                    </CardContent>
                </Card>
            </section>
        </Layout>
    );
}


