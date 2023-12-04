"use client";

import { FiArrowRight } from "react-icons/fi";
import { IoMdDownload } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdVerified } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  {
    title: "Belajar Membuat Front-End Web untuk Pemula",
    subtitle: ["Dicoding | Nov 2023"],
    icon: <BsChevronRight />,
    href: "https://www.dicoding.com/certificates/QLZ9RWYR9P5D",
  },
  {
    title: "Belajar Dasar Manajemen Proyek",
    subtitle: ["Dicoding | Jul 2023"],
    href: "https://www.dicoding.com/certificates/4EXGNJ0JDZRL",
  },
  {
    title: "Belajar Dasar Structured Query Language (SQL)",
    subtitle: ["Dicoding | Jul 2023"],
    href: "https://www.dicoding.com/certificates/QLZ9QO3D2Z5D",
  },
  {
    title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    subtitle: ["Dicoding | Jul 2023"],
    href: "https://www.dicoding.com/certificates/07Z6VD0MJXQR",
  },
  {
    title: "Belajar Dasar Pemrograman Web",
    subtitle: ["Dicoding | Jun 2023"],
    href: "https://www.dicoding.com/certificates/JMZV9VDLOPN9",
  },
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    subtitle: ["Dicoding | Oct 2022"],
    href: "https://www.dicoding.com/certificates/EYX49RK3RPDL",
  },
  {
    title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
    subtitle: ["Dicoding | Oct 2022"],
    href: "https://www.dicoding.com/certificates/2VX3YW8GJPYQ",
  },
];
const projects = [
  {
    img: "/img/html.png",
    title: "HTML",
    subtitle: "Hypertext Markup Language",
  },
  {
    img: "/img/css.png",
    title: "CSS",
    subtitle: "Cascading Style Sheets",
  },
  {
    img: "/img/js.png",
    title: "JavaScript",
    subtitle: "Programming Language",
  },
  {
    img: "/img/reactjs.png",
    title: "React JS",
    subtitle: "Library",
  },
  {
    img: "/img/ts.png",
    title: "TypeScript",
    subtitle: "Programming Language",
  },
  {
    img: "/img/nextjs.png",
    title: "Next JS",
    subtitle: 'Framework',
  },
  {
    img: "/img/tailwindcss.png",
    title: "TailwindCSS",
    subtitle: "Framework",
  },
  {
    img: "/img/laravel.svg",
    title: "Laravel",
    subtitle: 'Framework',
  },
  {
    img: "/img/php.png",
    title: "PHP",
    subtitle: 'scripting language',
  },
  {
    img: "/img/nodejs.png",
    title: "Node JS",
    subtitle: 'Runtime',
  },
  {
    img: "/img/mui.png",
    title: "Material UI",
    subtitle: 'library',
  },
  {
    img: "/img/bootstrap.png",
    title: "Bootstrap",
    subtitle: 'Framework',
  },
  {
    img: "/img/sass.png",
    title: "SASS",
    subtitle: 'stylesheet language',
  },
  {
    img: "/img/vite.png",
    title: "Vite",
    subtitle: 'tools',
  },
  {
    img: "/img/github.png",
    title: "Github",
    subtitle: 'cloud based service',
  },
  {
    img: "/img/mysql.png",
    title: "MYSQL",
    subtitle: 'Database',
  },
  {
    img: "/img/firebase.png",
    title: "Firebase",
    subtitle: 'Google Services',
  },
];

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
        className="bg-white top-24 relative dark:bg-[#212121] shadow-md rounded-xl max-w-xl lg:mx-auto mx-4 lg:max-w-xl  max-2xl  md:mx-auto sm:mx-auto lg:px-0 "
      >
        <div className="p-2 lg:mx-4">
          <div className=" lg:p-6 p-3">
            <div className="flex justify-between  w-full">
              <div className="flex items-center gap-x-2 font-InterRe">
                <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
                <motion.h1
                  initial={{ x: 100, opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: { duration: 0.2, delay: 0.4 },
                  }}
                  className="text-neutral-700 dark:text-[#C0C0C0] max-md:text-xl font-InterMe"
                >
                  Frontend Developer
                </motion.h1>
              </div>

              <Link href={"/contact"}>
                <div className="bg-[#F6F8FA] dark:bg-[#115e3b] h-6 w-6 lg:w-fit lg:px-3 rounded-full flex items-center justify-center gap-x-2">
                  <div className="w-2 h-2 rounded-full animate-ping dark:animate-none bg-[#28C780]" />
                  <p className="text-[#2b9364] hidden lg:flex text-xs font-semibold uppercase ">
                    Available for work
                  </p>
                </div>
              </Link>
            </div>

            <div className="flex-col md:flex-row   my-16 flex items-center md:justify-between">
              <div className=" sm:order-2   max-md:mt-10 flex md:block md:flex-row items-center  flex-col md:order-1 order-2">
                <div className="flex gap-x-2 items-center">
                  <h1 className="text-2xl text-neutral-700 font-InterBo dark:text-white">
                    Fiqih Tri
                  </h1>
                  <MdVerified className="text-blue-500" mt-5 />
                </div>


                <motion.p
                  initial={{ x: 100, opacity: 0, filter: "blur(50px)" }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: { duration: 0.2, delay: 0.3 },
                  }}
                  className="text-lg max-md:text-center  my-3 text-neutral-500 dark:text-neutral-300"
                >
                  Software Developer from Indonesia. <br /> Currently working
                  as Freelancer.{" "}
                </motion.p>

                <div className="flex items-center gap-x-2 mt-6">
                  <Link href={"https://www.linkedin.com/in/fiqihtrieko/"}>
                    <div className="bg-black dark:bg-[#373737] w-fit shadow-md  px-2 rounded-md flex items-center gap-x-2 py-1">
                      <AiOutlinePlusCircle className="text-white tex-3" />
                      <span className="text-white  font-semibold">Hire Me</span>
                    </div>
                  </Link>
                  <div className="border-neutral-300 dark:bg-[#373737] dark:border-neutral-700/50 shadow-md border cursor-pointer w-fit h-8 px-2 rounded-md flex items-center gap-x-2 ">
                    <IoMdDownload className="" />
                    <span className="text-neutral-700 dark:text-white  font-semibold">
                      Download Resume
                    </span>
                  </div>
                </div>
              </div>
              <div className="border text-center flex md:justify-center border-neutral-200 dark:border-neutral-700 dark:bg-[#2C2C2C] w-fit md:order-1 order-1 rounded-full p-3 ">
                <motion.img
                  initial={{ x: 100, opacity: 10, filter: "blur(50px)" }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: { duration: 0.4, delay: 0.5 },
                  }}
                  className="w-32 h-32 flex object-cover rounded-full "
                  src="/img/photo.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div>
            <div className="bg-[#F6F8FA] dark:bg-[#2C2C2C] p-6 max-md:p-3 rounded-xl">
              <div className="flex items-center justify-between mt-4">
                <div>
                  <h1 className="text-neutral-700 dark:text-[#C0C0C0] text-lg font-semibold font-InterMe">
                    Courses
                  </h1>
                  <p className="text-neutral-700 dark:text-[#C0C0C0] text-sm font-InterMe">
                    My courses certificates.
                  </p>
                </div>

                <Link href={"https://www.dicoding.com/users/fiqihtri/academies"}>
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
                      key={link.img}
                      className="bg-white dark:bg-[#373737] mt-3  mb-4 rounded-xl  max-md:flex-col max-md:items-start flex items-center justify-between p-5 dark:border-neutral-600  shadow-md drop-shadow-md dark:border max-md:p-7 "
                    >
                      <Link href={link.href}>
                        <div className="flex items-center gap-x-3 max-md:flex-col max-md:items-start">
                          <div className="max-md:mt-5 px-1">
                            <h1 className="text-sm font-InterMe">
                              {link.title}
                            </h1>
                            <div className="text-sm text-neutral-400 max-md:my-1">
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
          <div>
            <div className="dark:bg-[#2C2C2C] bg-[#F6F8FA] p-6  mt-6 rounded-md">
              <div className="flex items-center gap-x-2 font-InterRe">
                <div>
                  <h1 className="text-neutral-700 dark:text-[#C0C0C0] text-lg font-semibold font-InterMe">
                    Skills
                  </h1>
                  <p className="text-neutral-700 dark:text-[#C0C0C0] text-sm font-InterMe">
                    My coding skills.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <div className="relative overflow-hidden hover:overflow-y-scroll h-[300px] overscroll-hidden md:overscroll-contain px-3">
                  <Link href={"/"}>
                    {projects.map((link) => (
                      <div
                        key={link.subtitle}
                        className="dark:bg-[#373737] bg-white mt-3 rounded-xl shadow-md flex  max-md:flex-col max-md:items-start items-center justify-between p-5 "
                      >
                        <div className="flex  items-center gap-x-4">
                          <div className="drop-shadow-md ">
                            <img
                              className="w-10 h-10 object-cover rounded-20 "
                              src={link.img}
                              alt=""
                            />
                          </div>

                          <div>
                            <h1 className="text-lg font-InterMe">{link.title}</h1>
                          </div>
                        </div>

                        <div className="flex max-md:mt-4 w-fit items-center gap-x-3">
                          <p className="text-[11px] font-semibold uppercase text-neutral-40 bg-[#EDEFF3] dark:bg-neutral-600/50 dark:text-neutral-400 text-[#666D80]  px-2 rounded-lg ">
                            {link.subtitle}
                          </p>
                        </div>
                      </div>
                    ))}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 lg:p-2">
          <div className="mx-auto max-w-md">
            <div>
              <h2 className=" text-2xl text-center dark:text-white text-[#353849] font-InterBo">
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

          <div className="bg-[#F6F8FA] p-6 dark:bg-[#2C2C2C]  mt-14 mx-5 rounded-md">
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

          <div className="bg-[#F6F8FA] dark:bg-[#2C2C2C] p-6  mt-4 mb-5 mx-5 rounded-md lg:mb-6">
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
      </motion.div>
    </>
  );
}
