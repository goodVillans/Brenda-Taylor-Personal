import { SelectedPage, ClassType } from "@/app/Shared/types";
import { motion } from "framer-motion";
import HeadText from "@/app/Shared/HeadText";
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";
import image1 from "../../../public/assets/image1.png";
import image2 from "../../../public/assets/image2.png";
import image3 from "../../../public/assets/image3.png";
import image4 from "../../../public/assets/image4.png";
import image5 from "../../../public/assets/image5.png";

const classes: Array<ClassType> = [
  {
    name: "class name",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat dolor provident sed fugiat libero illum placeat eveniet ipsum distinctio eius?",
    image: image1,
  },
  {
    name: "class name",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat dolor provident sed fugiat libero illum placeat eveniet ipsum distinctio eius?",
    image: image2,
  },
  {
    name: "class name",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat dolor provident sed fugiat libero illum placeat eveniet ipsum distinctio eius?",
    image: image3,
  },
  {
    name: "class name",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat dolor provident sed fugiat libero illum placeat eveniet ipsum distinctio eius?",
    image: image4,
  },
  {
    name: "class name",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat dolor provident sed fugiat libero illum placeat eveniet ipsum distinctio eius?",
    image: image5,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const MyClasses = ({ setSelectedPage }: Props) => {
  const imageOverlayStyles = `p-5 absolute z-30 flex h-[900px] w-[520px] flex-col items-center justify-start pt-24 whitespace-normal bg-claret text-center text-white opecity-0 transition duration-500 hover:opacity-90 rounded-lg`;

  return (
    <section id="classes" className="w-full bg-gray-50 py-20 relative z-10">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Classes)}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mx-auto w-5/6 "
        >
          <div>
            <HeadText>AVAILABLE CLASSES</HeadText>
            <p className="py-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              quibusdam, tempore, fugiat expedita repudiandae dignissimos earum
              ullam accusamus aspernatur nesciunt est, doloribus a quis sint
              perspiciatis saepe quam porro deleniti!
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes &&
              classes.map((item: ClassType, index) => (
                <li
                  key={`${item.name}-${index}`}
                  className="relative mx-5 inline-block h-[450px] w-[520px]"
                >
                  <div className={`rounded-lg ${imageOverlayStyles}`}>
                    <h5 className="text-2xl font-semibold">{item.name}</h5>
                    <p>{item.desc}</p>
                    <AnchorLink
                      className="mt-5 text-sm font-bold text-lavender underline hover:text-white"
                      onClick={() => setSelectedPage(SelectedPage.Contact)}
                      href={`#${SelectedPage.Contact}`}
                    >
                      <p>Learn more</p>
                    </AnchorLink>
                  </div>
                  <Image
                    src={item.image}
                    alt={`${index}-class-${item.name}}`}
                    className="rounded-lg"
                  />
                </li>
              ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default MyClasses;
