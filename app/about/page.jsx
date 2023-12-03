"use client";

import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";


function page() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
      className="bg-white top-24 relative dark:bg-[#212121] shadow-md rounded-xl max-w-xl lg:mx-auto mx-4 lg:max-w-xl  max-2xl  md:mx-auto sm:mx-auto lg:px-0 "
    >
      <div className=" lg:p-6 p-3 ">
        <div className="flex mt-4 items-center gap-x-2 font-InterRe">
          <h1 className="text-neutral-700  dark:text-white text-3xl font-semibold font-InterMe">
            About Me
          </h1>
        </div>

        <div>
          <h1 className="text-3xl font-InterBo mt-7 my-3 dark:text-white text-neutral-800">
            Hi, I'm Fiqih Tri
          </h1>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.3 },
            }}
            className="text-neutral-700 text-lg my-7 leading-8 font-InterRe dark:text-[#C0C0C0]"
          >
            I'm Fiqih Tri Eko Firmansyah, a seasoned software engineer with a deep passion for creating elegant and efficient solutions through code.
            With a strong foundation in JavaScript, along with a comprehensive understanding of various frontend libraries and frameworks,
            I heve been navigating the ever-evolving landscape of web development with enthusiasm and dedication. Currently, reside in Purwokerto, Indonesia 🇮🇩.
          </motion.p>
        </div>

        <div className="p-4  rounded-lg dark:bg-[#373737] bg-white border dark:border-neutral-700/70">
          <motion.img
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.3 },
            }}
            className="aspect-square object-cover rounded-lg"
            src="/img/photo.png"
            alt=""
          />
        </div>

        <div>
          <motion.h1
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.5 },
            }}
            className="text-3xl font-InterBo mt-7 my-3 dark:text-white text-neutral-800"
          >
            More About Me
          </motion.h1>

          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.5 },
            }}
            className="text-neutral-700 text-lg my-7 leading-8 font-InterRe dark:text-[#C0C0C0]"
          >
            Fiqih holds a bachelor's degree in Information Systems from a
            prestigious university in the Indonesia and has a relentless
            drive for staying up-to-date with the latest technologies. Actively involved in the tech community.
          </motion.p>

          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.5 },
            }}
            className="text-neutral-700 text-lg my-7 leading-8 font-InterRe dark:text-[#C0C0C0]"
          >
            As a fast learner and adaptive thinker, I thrive in dynamic environments where innovation is the driving force. My collaborative nature allows me to seamlessly integrate with teams, contributing not only my technical prowess but also a humble attitude that values every member's input.
            <br />
            When I am not immersed in lines of code, you might find me exploring the latest trends in the tech world, tinkering with personal coding projects, or engaging in thought-provoking discussions on software architecture and design patterns.
            <br />
          </motion.p>

          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.5 },
            }}
            className="text-neutral-700 text-lg my-7 leading-8 font-InterRe dark:text-[#C0C0C0]"
          >
            This blog is my platform to share insights, experiences, and discoveries from my journey as a software engineer. Join me as we delve into the ever-exciting realm of technology, where each line of code has the potential to shape the digital landscape in remarkable ways.
          </motion.p>

          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.5 },
            }}
            className="text-3xl font-InterBo mt-10 my-3 dark:text-white text-neutral-800"
          >
            Education
          </motion.h1>
        </div>

        <ol className="border-l border-neutral-300 dark:border-neutral-500">
          <li>
            <div className="flex-start flex items-center pt-3">
              <div
                className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
              <p className="text-sm text-neutral-500 dark:text-neutral-300">
                2017 - 2019
              </p>
            </div>
            <div className="mb-6 ml-4 mt-2">
              <h4 className="mb-1.5 text-xl font-semibold">Vocational High School 1 Purwokerto</h4>
              <h6 className="mb-1.5 text-lg font-semibold">Software Engineer</h6>
              <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                C++, Java, PHP, HTML, CSS, Android, Laravel, Computer Network, Algorithm and Structure Data, Database Management System,
                Operation System, Web Progamming.
              </p>
            </div>
          </li>

          <li>
            <div className="flex-start flex items-center pt-2">
              <div
                className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
              <p className="text-sm text-neutral-500 dark:text-neutral-300">
                2019 - 2023
              </p>
            </div>
            <div className="mb-6 ml-4 mt-2">
              <h4 className="mb-1.5 text-xl font-semibold">Institute of Technology Telkom Purwokerto</h4>
              <h6 className="mb-1.5 text-lg font-semibold">Information System</h6>
              <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                Learn about Management System, Management Project, Algorithm and Structure Data, COBIT and ISO, Data Analysis,
                Analysis of Information Systems Design, Object-Oriented Programming, Database Management System, Computer Network, Data Mining,
                Software Engineer, Customers Relationship Management, IT-Business Strategic Alignment, Design and Web Programming,
                IT Service Management, Supply Chain Management.
              </p>
            </div>
          </li>
        </ol>

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
    </motion.div>
  );
}

export default page;
