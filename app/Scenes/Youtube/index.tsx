import { motion } from "framer-motion";
import HeadText from "@/app/Shared/HeadText";
import { SelectedPage } from "@/app/Shared/types";
import ActionBtn from "@/app/Shared/ActionBtn";
import Link from "next/link";

const videoLinks = [
  "https://www.youtube.com/embed/2f3fKmLw9tY",
  "https://www.youtube.com/embed/Kn548OayQ-I",
  "https://www.youtube.com/embed/JVqMYpqJlDs",
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const YouTubeVideos = ({ setSelectedPage }: Props) => {
  return (
    <section id="videos" className="mx-auto w-full md:px-40 xs:px-8 py-5 bg-lavender">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Youtube)}>
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-full"
        >
          <div className="flex items-start justify-between w-full py-10">
            <div className="">
              <HeadText>Brendas Channel</HeadText>
              <p className="my-5 text-sm">
                Explore a broad range fitness and movement content on my youtube channel
              </p>
            </div>
            <Link
              className=" rounded-md px-10 py-2 bg-red-700 animate-pulse hover:animate-none text-white font-semibold transition duration-500"
              href={"https://www.youtube.com/@brendataylor9140"}
              target="_blank"
            >
              Subscribe
            </Link>
          </div>
        </motion.div>
        {/* Videos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className="md:flex items-center justify-between gap-2 mt-5"
        >
          {videoLinks.map((link, index) => (
            <motion.div
              key={index}
              variants={childVariant}
              className="mt-5 rounded-md px-5 pt-4 pb-16 text-center w-full"
            >
              <iframe
                className="w-full h-64 rounded-lg"
                src={link}
                title={`YouTube video ${index}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default YouTubeVideos;
