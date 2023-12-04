"use client";

import Link from "next/link";
import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

const links = [
  {
    title: "Personal Portfolio v2.0",
    subtitle: ["Next JS, Framer Motion, Tailwind CSS"],
    href: "/portfolio-v2",
  },
  {
    title: "BookShelf App",
    subtitle: ["Javascript"],
    href: "/bookshelf",
  },
  {
    title: "Homestead Road",
    subtitle: ["Laravel"],
    href: "/homestead",
  },
  {
    title: "Personal Portfolio v1.0",
    subtitle: ["Tailwind CSS"],
    href: "/portfolio-v1",
  },
  {
    title: "NFT Store",
    subtitle: ["Bootstrap"],
    href: "/nftstore",
  },
];


function page() {
  return (
    <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0, transition: { duration: 0.4 } }}
      className="bg-white top-24 relative dark:bg-[#212121] shadow-md rounded-xl max-w-xl lg:mx-auto mx-4 lg:max-w-xl max-2xl md:mx-auto sm:mx-auto lg:px-0 "
    >
      <div className=" lg:p-6 p-4 max-md:p-5 ">
        <div className=" mt-5 md:px-6 p-2 ">
          <h1 className="text-2xl font-InterBo mt-7 my-3 dark:text-white text-neutral-800">
            Explore My Projects
          </h1>
          <p className="text-neutral-700 text-base my-7 leading-8 font-InterRe dark:text-[#C0C0C0]">
            Discover my portfolio, where purposeful interfaces meet captivating
            design. My work strives to enhance experiences and inspire.
          </p>
        </div>

        <div>
          <div className="dark:bg-[#2C2C2C] bg-[#F6F8FA] md:p-6 p-2  mt-6 rounded-md">
            <div className="flex items-center justify-between mt-4 font-InterRe">
              <div>
                <h1 className="text-neutral-700 dark:text-[#C0C0C0] text-1xl font-semibold font-InterMe">
                  Projects
                </h1>
              </div>

              <Link href={"https://github.com/fiqihtri?tab=repositories"}>
                <div className="border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#373737] shadow-md border  w-fit h-8 px-2 rounded-md  flex items-center gap-x-1 ">
                  <button className="text-neutral-700 dark:text-white  text-sm font-semibold">
                    View All
                  </button>
                  <FiArrowRight className="text-neutral-500" />
                </div>
              </Link>
            </div>
            <div className="mt-6">
              <div className="cursor-pointer relative overflow-hidden hover:overflow-y-scroll h-[300px] overscroll-hidden md:overscroll-contain px-3">
                {links.map((link) => (
                  <div
                    key={link.subtitle}
                    className="bg-white dark:bg-[#373737] mt-3  mb-4 rounded-xl  max-md:flex-col max-md:items-start flex items-center justify-between p-5 dark:border-neutral-600  shadow-md drop-shadow-md dark:border max-md:p-7 "
                  >
                    <Link href={link.href}>
                      <div className="flex items-center gap-x-3 max-md:flex-col max-md:items-start">
                        <div className="max-md:mt-5 px-1">
                          <h1 className="text-lg font-InterMe">
                            {link.title}
                          </h1>
                          <div className="text-lg text-neutral-400 max-md:my-1">
                            {link.subtitle.map((subt) => (
                              <span key={subt}>{subt}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                    <div className="max-md:hidden md:block">
                      <BsChevronRight />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 lg:p-2 ">
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
              <div className="border-neutral-300 bg-white dark:bg-[#373737] dark:border-none shadow-md drop-shadow-md border  w-12 h-12 px-2 rounded-full flex items-center justify-center gap-x-1 hover:cursor-pointer">
                <Link href={"https://www.tiktok.com/@lepismaaa_?_t=8hsTRNukhrW"}>
                  <FaTiktok className="text-neutral-500 w-6 h-8 dark:text-white" />
                </Link>
              </div>
              <div className="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737]  dark:border-none w-12 h-12 px-2 rounded-full flex items-center justify-center gap-x-1 hover:cursor-pointer">
                <Link href={"https://www.instagram.com/pikkihh/"}>
                  <FaInstagram className="text-neutral-500 w-6 h-9 dark:text-white" />
                </Link>
              </div>
              <div className="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737]  dark:border-none w-12 h-12 px-2 rounded-full flex justify-center items-center  gap-x-1 hover:cursor-pointer">
                <Link href={"https://github.com/fiqihtri"}>
                  <FaGithub className="text-neutral-500 w-6 h-9 dark:text-white" />
                </Link>
              </div>
              <div className="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737]  dark:border-none w-12 h-12 px-2 rounded-full flex items-center justify-center gap-x-1  hover:cursor-pointer">
                <Link href={"https://www.linkedin.com/in/fiqihtrieko/"}>
                  <FaLinkedinIn className="text-neutral-500 w-6 h-9 dark:text-white" />
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
    </motion.div >
  );
}

export default page;
