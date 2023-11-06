import { SelectedPage } from "@/app/Shared/types";
import useMediaQuery from "@/app/hooks/useMediQuery";
import HomePageGraphic from "../../../public/assets/HomePageGraphic.png";
import Image from "next/image";
import ActionBtn from "@/app/Shared/ActionBtn";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isGreatThanMedScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="gap-16 bg-gray-50 py-10 md:h-full md:scroll-pb-10"
    >
      {/* image and main header */}
      <motion.div 
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6 ">
        {/* main header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* headings */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="md:-mt-20 pt-8"
          >
            <div className="relative">
              <div className="mb-4">
                <h1 className="text-8xl font-bold text-claret">Pilatezen</h1>
                <h3 className="text-xl font-light italic pl-1">
                  Evolve your fitness game
                </h3>
              </div>
            </div>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              porro inventore beatae necessitatibus veritatis amet velit culpa
              praesentium. Ipsam quam culpa quis vitae natus quasi dolores harum
              excepturi nam exercitationem?
            </p>
          </motion.div>
          {/* Actions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex items-center justify-start gap-6 mt-8"
          >
            <AnchorLink
              className="text-sm font-bold text-claret underline hover:text-lavender"
              onClick={() => setSelectedPage(SelectedPage.Contact)}
              href={`#${SelectedPage.Contact}`}
            >
              <p>Learn more</p>
            </AnchorLink>
            <ActionBtn setSelectedPage={setSelectedPage}>
              Book a session
            </ActionBtn>
          </motion.div>
        </div>
        {/* image */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <Image src={HomePageGraphic} alt="Hero-Image" />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
