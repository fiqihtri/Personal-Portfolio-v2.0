import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTiktok, FaDiscord } from "react-icons/fa";


function page() {
    return (
        <div className="bg-white top-24 relative dark:bg-[#212121] shadow-md rounded-xl max-w-xl lg:mx-auto mx-4 lg:max-w-xl max-2xl md:mx-auto sm:mx-auto lg:px-0 ">
            <div className=" lg:p-6 p-2 max-md:p-5 ">
                <div className="px-4">
                    <div>
                        <h1 className="text-xl font-InterBo my-5">NFT Store</h1>
                        <p className="text-lg dark:text-neutral-300  text-neutral-900">
                            An innovative platform that empowers businesses buy and selling NFT, delivering a seamless user experience
                            while distinguishing itself from competitors.
                        </p>
                        <div>
                            <Link href={"https://github.com/fiqihtri/NFTStore-Landing-Page.git"} className="flex gap-x-1 items-center my-5">
                                <button className="text-blue-500 text-sm font-semibold">
                                    Source Code
                                </button>
                                <FiArrowRight className="text-blue-500" />
                            </Link>
                        </div>
                        <div className="mt-8">
                            <Image
                                className="rounded-lg"
                                src="/img/nftstore/web.png"
                                width={500}
                                height={500}
                                alt=""
                            />
                            <p className="my-5 text-lg dark:text-neutral-300  text-neutral-900">
                                Crafting a modern, professional website, my
                                priority was to set them apart from competitors and attract new
                                customers.
                            </p>

                            <Image
                                className="rounded-lg"
                                src="/img/nftstore/mobile1.png"
                                width={500}
                                height={500}
                                alt=""
                            />

                            <Image
                                className="rounded-lg my-7"
                                src="/img/nftstore/mobile2.png"
                                width={500}
                                height={500}
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-24 p-2">
                    <div className="mx-auto max-w-md">
                        <div>
                            <h2 className=" text-3xl text-center dark:text-white text-[#353849] font-InterBo">
                                We will be partners in the work.
                            </h2>
                            <p className="text-center mt-3 dark:text-neutral-300 text-[#666D80] text-lg">
                                Let`s get in touch
                            </p>
                        </div>

                        <div className="">
                            <div className="flex items-center gap-x-4 justify-center mt-6">
                                <Link href={"/contact"}>
                                    <div className="bg-black dark:bg-[#373737] w-fit shadow-md  px-2 rounded-md flex items-center gap-x-2 py-1">
                                        <MdOutlineMailOutline className="text-white w-5 h-5" />
                                        <span className="text-white font-semibold">Contact Me</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#F6F8FA] p-6 dark:bg-[#2C2C2C]  mt-14 rounded-md">
                        <div className="flex items-center justify-center gap-x-3">
                            <div className="border-neutral-300 bg-white dark:bg-[#373737] dark:border-none shadow-md drop-shadow-md border  w-10 h-10 px-2 rounded-full flex items-center justify-center gap-x-1 hover:cursor-pointer">
                                <Link href={"https://www.tiktok.com/@lepismaaa_?_t=8hsTRNukhrW"}>
                                    <FaTiktok className="text-neutral-500 w-5 h-7 dark:text-white" />
                                </Link>
                            </div>
                            <div className="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737]  dark:border-none w-10 h-10 px-2 rounded-full flex items-center justify-center gap-x-1 hover:cursor-pointer">
                                <Link href={"https://www.instagram.com/pikkihh/"}>
                                    <FaInstagram className="text-neutral-500 w-5 h-8 dark:text-white" />
                                </Link>
                            </div>
                            <div className="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737]  dark:border-none w-10 h-10 px-2 rounded-full flex items-center justify-center gap-x-1 hover:cursor-pointer">
                                <Link href={"https://discordapp.com/users/1075939615908839474"}>
                                    <FaDiscord className="text-neutral-500 w-5 h-8 dark:text-white" />
                                </Link>
                            </div>
                            <div className="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737]  dark:border-none w-10 h-10 px-2 rounded-full flex justify-center items-center  gap-x-1 hover:cursor-pointer">
                                <Link href={"https://github.com/fiqihtri"}>
                                    <FaGithub className="text-neutral-500 w-5 h-8 dark:text-white" />
                                </Link>
                            </div>
                            <div className="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737]  dark:border-none w-10 h-10 px-2 rounded-full flex items-center justify-center gap-x-1  hover:cursor-pointer">
                                <Link href={"https://www.linkedin.com/in/fiqihtrieko/"}>
                                    <FaLinkedinIn className="text-neutral-500 w-5 h-8 dark:text-white" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#F6F8FA] dark:bg-[#2C2C2C] p-6  mt-4 rounded-md">
                        <div className="text-center">
                            <span className="text-neutral-700 dark:text-neutral-400">
                                © 2023 Personal Portfolio
                            </span>
                            <p className="text-neutral-500">
                                By{" "}
                                <span className="hover:underline  hover:text-neutral-400 text-neutral-700 dark:text-neutral-300">
                                    Fiqih Tri
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;