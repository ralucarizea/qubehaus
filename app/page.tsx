import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {MoveRight} from "lucide-react";
import {Separator} from "@/components/ui/separator";
import React, {ReactNode} from "react";

const placeholderWidth = '1640';
const placeholderHeight = '900';


interface LandingPageProps {
    children: ReactNode;
}

type MyType = Omit<LandingPageProps, "children">; // Example to omit children


const LandingPage: React.FC<MyType> = () => {
    return (
        <div className='bg-background'>
            <section className='flex flex-col justify-center items-center w-full text-primary '>
                <div
                    className='flex items-center justify-center w-full text-[350px] font-extralight tracking-[-32px] relative mr-16'>
                    XL10
                </div>
                <div className='text-[34px] font-light flex flex-col items-end absolute left-[13%] top-[33%]'>
                    Small living,
                    <span className='mt-[-10px]'> supersized.</span>
                </div>
                <div className='text-[34px] font-light flex flex-col items-start absolute right-[4%]  top-[33%]'>
                    Introducing Backyard XL 10:
                    <span className='mt-[-12px]'> Two bedrooms, two baths.</span>
                    <span className='mt-[-12px]'> 950 square feet.</span>
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
                className={`flex items-start justify-center w-[${placeholderWidth}] font-extralight text-primary pl-32 py-16 flex flex-col gap-16`}>
                <div className=' text-[110px] tracking-[-4px]'>
                    <div>Backyard <Image
                        className='inline-block mx-2'
                        alt=''
                        src={`https://picsum.photos/250/100`}
                        width={'250'}
                        height={'100'}
                    /> is the
                    </div>
                    <div className='mt-[-40px]'>super simple, smartly</div>
                    <div className='mt-[-40px]'>customizable, <Image
                        className='inline-block mx-2'
                        alt=''
                        src={`https://picsum.photos/210/100`}
                        width={'210'}
                        height={'100'}
                    /> all new
                    </div>
                    <div className='mt-[-40px]'>ADU <Image
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
                    className='flex flex-col w-full items-center justify-center text-[60px] text-primary my-[10%] font-extralight tracking-[-4px]'>
                    <div>
                        Rent it. Divide it. Work there. Or live in it.
                    </div>
                    <div className='text-muted-foreground mt-[-12px]'>
                        Unlock the potential of your yard.
                    </div>
                </div>
            </section>
            <section className='flex w-full items-center justify-center gap-24 h-[65vh] py-28'>
                <Card className='w-2/5 h-full bg-orange-50 rounded-[16px] border-none shadow-md'>
                    <CardTitle className='pl-8 pt-8 font-extralight flex flex-col text-h3 gap-2'> Experience QubeHaus in
                        person. <Button variant='link'
                                        className='p-0 text-[30px] font-light flex gap-2 items-center justify-start'> Visit
                            a
                            showroom <MoveRight/>
                        </Button>
                    </CardTitle>
                </Card>
                <Card className='w-2/5 h-full bg-orange-50 rounded-[16px] border-none shadow-md'>
                    <CardTitle className='pl-8 pt-8 font-extralight flex flex-col text-h3 gap-2'> Learn how we squeeze a
                        whole house into your yard. <Button variant='link'
                                                            className='p-0 text-[30px] font-light flex gap-2 items-center justify-start'> How
                            it
                            works <MoveRight/></Button>
                    </CardTitle>
                </Card>
            </section>
            <section
                className='flex flex-col w-full gap-12 min-h-fit justify-between h-[180vh] justify-center items-center my-28'>
                <div className='h-1/2 w-full flex gap-5 justify-center'>
                    <Card
                        className='h-full max-w-[28%] text-[48px] font-light tracking-[-1px] leading-[56px] border-none shadow-none '>
                        <div className='max-w-[70%]'> Get Backyard in
                            four simple steps.
                        </div>
                        <div className='text-muted-foreground max-w-[65%]'>
                            And in as few as
                            seven months.
                        </div>
                    </Card>
                    <Card
                        className='border-none shadow-none max-w-[28%] h-full font-light tracking-[-1px] leading-[56px] max-w-[28%]'>
                        <CardHeader className='w-full p-0'>
                            <div className='flex gap-2  items-center justify-between'>
                                <span
                                    className='flex items-center p-3 rounded-lg bg-black text-background h-[36px] text-[20px]'>01</span>
                                <Separator className='w-[90%]'/>
                            </div>
                        </CardHeader>
                        <CardContent className='w-full p-0 pt-3 flex flex-col gap-5'>
                            <CardTitle className='font-extralight text-h3'> Design yours </CardTitle>
                            <CardDescription className='font-light text-[18px] max-w-[75%] leading-5 tracking-tight'>
                                Tailor your unit with a layout and customizations that reflect your style and needs.
                            </CardDescription>
                            <div className='bg-gray-100 rounded-lg w-[450px] max-w-[80%] h-[630px]'>

                            </div>

                        </CardContent>
                    </Card>
                    <Card
                        className='border-none shadow-none max-w-[28%] h-full font-light tracking-[-1px] leading-[56px] max-w-[28%]'>
                        <CardHeader className='w-full p-0'>
                            <div className='flex gap-2 items-center justify-between'>
                                <span
                                    className='flex items-center p-3 rounded-lg bg-background border-[1px] text-primary h-[36px] text-[20px]'>02</span>
                                <Separator className='w-[520px]'/>
                            </div>
                        </CardHeader>
                        <CardContent className='w-full p-0 pt-3 flex flex-col gap-5'>
                            <CardTitle className='font-extralight text-h3'> Sign off </CardTitle>
                            <CardDescription className='font-light text-[18px] max-w-[80%] leading-5 tracking-tight'>
                                We visit your site to create a complete proposal for the work required to install
                                Backyard.
                            </CardDescription>
                            <div className='bg-gray-100 rounded-lg w-[450px] max-w-[80%] h-[630px]'></div>
                        </CardContent>
                    </Card>

                </div>
                <div className='h-1/2 w-full flex gap-5 justify-center ml-[-76px]'>
                    <Card
                        className='border-none shadow-none max-w-[28%] h-full font-light tracking-[-1px] leading-[56px] max-w-[28%]'>
                        <CardHeader className='w-full p-0'>
                            <div className='flex gap-2  items-center justify-between '>

                                <span
                                    className='flex items-center p-3 rounded-lg bg-black text-background h-[36px] text-[20px]'>03</span>
                                <Separator className='w-[90%]'/>
                            </div>
                        </CardHeader>
                        <CardContent className='w-full p-0 pt-3 flex flex-col gap-5'>
                            <CardTitle className='font-extralight text-h3'> Design yours </CardTitle>
                            <CardDescription className='font-light text-[18px] max-w-[75%] leading-5 tracking-tight'>
                                Tailor your unit with a layout and customizations that reflect your style and needs.
                            </CardDescription>
                            <div className='bg-gray-100 rounded-lg w-[450px] max-w-[80%] h-[630px]'></div>

                        </CardContent>
                    </Card>
                    <Card
                        className='border-none shadow-none max-w-[24%] h-full font-light tracking-[-1px] leading-[56px] '>
                        <CardHeader className='w-full p-0'>
                            <div className='flex gap-2  items-center justify-between'>
                                <span
                                    className='flex items-center p-3 rounded-lg bg-background border-[1px] text-primary h-[36px] text-[20px]'>04</span>

                            </div>
                        </CardHeader>
                        <CardContent className='w-full p-0 pt-3 flex flex-col gap-5'>
                            <CardTitle className='font-extralight text-h3'> Sign off </CardTitle>
                            <CardDescription className='font-light text-[18px] max-w-[85%] leading-5 tracking-tight'>
                                We visit your site to create a complete proposal for the work required to install
                                Backyard.
                            </CardDescription>
                            <div className='bg-gray-100 rounded-lg w-full max-w-full h-[630px]'></div>

                        </CardContent>
                    </Card>
                    <Card
                        className='h-full max-w-[28%] border-none shadow-none text-[28px] font-light tracking-[-1px] leading-[32px] flex flex-col items-start pt-40 pl-20'>
                        <div className='w-[60%]'>
                            <div className='max-w-[90%]'> Want more details?
                            </div>
                            <div className='text-muted-foreground max-w-[75%] '>
                                Learn more about our fast, easy installation process.
                            </div>
                            <div className='flex flex-col w-1/2 gap-4 mt-8 '>
                                <Button className='rounded-xl bg-muted-foreground font-light p-4 py-6 text-[15px]'>
                                    How it works
                                </Button>
                                <Button className='rounded-xl bg-orange-500 font-light p-4 py-6 text-[15px]'>
                                    Design yours
                                </Button></div>
                        </div>
                    </Card>

                </div>
            </section>
        </div>
    );

}

export default LandingPage;



