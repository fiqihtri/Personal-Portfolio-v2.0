"use client";

import { useRef as useRef } from 'react';
import emailjs from '@emailjs/browser';
import Link from "next/link";
import { IoSendSharp } from "react-icons/io5";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTiktok, FaDiscord } from "react-icons/fa";


function Page() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fq3zyod', 'template_0xid91h', form.current, 'COL9zvUtxwtMo7WZg')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <div className="bg-white top-24 relative dark:bg-[#212121] shadow-md rounded-xl max-w-xl lg:mx-auto mx-4 lg:max-w-xl  max-2xl  md:mx-auto sm:mx-auto lg:px-0 ">
      <div className="p-2 lg:mx-4">
        <div className=" lg:p-6 p-3">
          <div className="flex justify-between  w-full">
            <div className="flex items-center gap-x-2 font-InterRe">
              <h1 className="text-neutral-700 dark:text-[#C0C0C0] max-md:text-xl text-xl font-InterRe font-bold">
                Contact
              </h1>
            </div>
            <div className="bg-[#F6F8FA] dark:bg-[#115e3b] h-6 w-6 lg:w-fit lg:px-3 rounded-full flex items-center justify-center gap-x-2">
              <div className="w-2 h-2 rounded-full animate-ping dark:animate-none bg-[#28C780]" />
              <p className="text-[#2b9364] hidden lg:flex text-xs font-semibold uppercase ">
                Available for work
              </p>
            </div>
          </div>

          <div className="mt-9">
            <h1 className="text-4xl font-InterBo">Contact Me</h1>
            <p className="dark:text-[#C0C0C0] my-5">
              Got an idea and need some help? Reach out now
            </p>

            <div>
              <form ref={form} onSubmit={sendEmail}>
                <div className="w-full flex gap-x-4">
                  <input
                    className="w-1/2 p-3 outline-none border-none rounded-lg dark:bg-[#2C2C2C]/40 
                  bg-[#F1F4F8]
                  placeholder-zinc-600"
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    required
                  />
                  <input
                    className="w-1/2 p-3 outline-none border-none rounded-lg dark:bg-[#2C2C2C]/40 bg-[#F1F4F8] placeholder-zinc-600"
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="mt-2">
                  <input
                    className="w-full mb-2 p-3 outline-none border-none rounded-lg dark:bg-[#2C2C2C]/40 bg-[#F1F4F8] placeholder-zinc-600"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                  <textarea
                    name="message"
                    id=""
                    cols="40"
                    className="w-full p-3 
                  bg-[#F1F4F8]
                  
                  outline-none border-none  dark:bg-[#2C2C2C]/40 placeholder-zinc-600 rounded-lg"
                    rows="6"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="w-full p-3 rounded-lg text-white dark:bg-neutral-700 bg-black dark:hover:bg-neutral-800 flex text-lg justify-center items-center gap-x-2 py-3 transition-all ease-in-out duration-500 mt-4 font-InterBo">
                  <IoSendSharp className="" />
                  <span>
                    Send Message
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="bg-[#F6F8FA] p-6 dark:bg-[#2C2C2C]  mt-14 mx-5 rounded-md">
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

        <div className="bg-[#F6F8FA] dark:bg-[#2C2C2C] p-6  my-4 mx-5 rounded-md">
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
  );
}

export default Page;
