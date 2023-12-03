import Link from "next/link";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";


function page() {
  return (
    <div className="bg-white top-24 relative dark:bg-[#212121] shadow-md rounded-xl max-w-xl lg:mx-auto mx-4 lg:max-w-xl max-2xl md:mx-auto sm:mx-auto lg:px-0 " suppressHydrationWarning={true}>
      <div className=" lg:p-6 p-3 max-md:p-5 ">
        <div className="flex items-center mt-4  gap-x-2 ">
          <h1 className="text-neutral-700 dark:text-white text-3xl font-semibold font-InterMe">
            Work Experiences
          </h1>
        </div>

        <div>
          <h1 className="text-xl font-InterBo mt-7 my-3 dark:text-white text-neutral-800">
            [Jan 2023 - Present] Freelance Web Developer
          </h1>
          <span className="mb-1.5 text-lg font-semibold">Software Engineer - Freelancer</span>
          <p className="text-neutral-700 text-base my-7 leading-8 font-InterRe dark:text-[#C0C0C0]">
            Creation of dashboards for business intelligence and resource planning.
            We help you create custom dashboards that display key information from business intelligence and resource planning, so you can make better, informed business decisions. <br />
            Creation of an integrated information system.
            We develop integrated information systems in the form of web applications, specifically designed to solve problems and improve efficiency in your business.
          </p>
        </div>
        <div>
          <h1 className="text-xl font-InterBo mt-10 my-3 dark:text-white text-neutral-800">
            [Aug 2022 - Sep 2022] Dinas Perpustakaan dan Kearsipan Daerah Kabupaten Banyumas
          </h1>
          <span className="mb-1.5 text-lg font-semibold">Copywriter - Internship</span>
          <p className="text-neutral-700 text-base mt-7 leading-8 font-InterRe dark:text-[#C0C0C0]">
            He participated in the event "Pameran Kearsipan Virtual 2022 Kabupaten Banyumas" organized by Dinas Kearsipan Jawa Tengah, some of the tasks he did:<br />
          </p>
          <ul className="list-disc mx-5 text-neutral-700 text-base leading-8 font-InterRe dark:text-[#C0C0C0]">
            <li>Monitor daily Pameran Arsip Virtual 2022 Kabupaten Banyumas</li>
            <li>Create content for Pameran Arsip Virtual 2022 Kabupaten Banyumas</li>
            <li>Editing videos for Pameran Arsip Virtual 2022 Kabupaten Banyumas</li>
            <li>Design innovative content for Pameran Arsip Virtual 2022 Kabupaten Banyumas</li>
          </ul>

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
    </div>
  );
}

export default page;
