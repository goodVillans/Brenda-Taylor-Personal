import { SelectedPage, BenefitTypes } from "@/app/Shared/types";
import { motion } from "framer-motion";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/20/solid";
import HeadText from "@/app/Shared/HeadText";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ActionBtn from "@/app/Shared/ActionBtn";
import Image from "next/image";
import BenefitsImage from "@/public/assets/Gen3.png";

const benefits: Array<BenefitTypes> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the art facilities",
    desc: "this is a random descrition of the art facilities",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "State of the art facilities",
    desc: "this is a random descrition of the art facilities",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "State of the art facilities",
    desc: "this is a random descrition of the art facilities",
  },
];

const contianer = {
  hidden: {},
  visible: {
    transition: { StaggerChildren: 0.2 },
  },
};

const childVariant = {
  hidden: { opecity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Headr */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <HeadText>Lorem ipsum dolor sit.</HeadText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus hic
            sequi sed sapiente voluptates beatae aspernatur expedita aperiam
            fuga voluptatem?
          </p>
        </motion.div>
        {/* Benefits */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={contianer}
          className="md:flex items-center justify-between gap-8 mt-5"
        >
          {benefits.map((benefit: BenefitTypes) => (
            <>
              <motion.div
                variants={childVariant}
                className="mt-5 rounded-md border-2 border-claret px-5 py-16 text-center"
              >
                <div className="mb-4 flex justify-center">
                  <div className=" rounded-md bg-lavender p-4">
                    {benefit.icon}
                  </div>
                </div>
                <h4 className="font-bold">{benefit.title}</h4>
                <p className="my-3">{benefit.desc}</p>
                <AnchorLink
                  className="text-sm font-bold text-claret underline hover:text-lavender"
                  onClick={() => setSelectedPage(SelectedPage.Contact)}
                  href={`#${SelectedPage.Contact}`}
                >
                  <p>Learn more</p>
                </AnchorLink>
              </motion.div>
            </>
          ))}
        </motion.div>

        {/* Graphicss and description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <motion.div
             whileHover={{scale: 1.1, originX: 0.5, originY: 0.5,}}
             transition={{type: 'spring', stiffness: 50}}  
            >
            <Image
              width={500}
              height={500}
              className="mx-auto"
              src={BenefitsImage}
              alt="benefits image"
            />
            </motion.div>
          </motion.div>

          <div>
            {/* title */}
            <div className="relative my-10">
              {/* <div className= {`before:absolute before:-top-20 before:-left-20 before: z-1 before:content-${abstractWaves}`}> */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 100 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <HeadText>
                  HUNDREDS OF CLIENTS SATISFIED,{" "}
                  <span className="text-lavender">& FITTER THAN EVER!</span>
                </HeadText>
              </motion.div>
              {/* </div> */}
            </div>
            {/* description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5 text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
                ullam eveniet dicta, rem eaque exercitationem soluta repudiandae
                tempora similique dolor recusandae obcaecati cum quasi veritatis
                a beatae eligendi numquam nostrum?
              </p>
              <p className="mb-5 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
                ea rerum itaque delectus rem sint unde repudiandae praesentium
                optio deserunt!
              </p>
            </motion.div>
            {/* button */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              className="relative mt-8"
            >
              {/* <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles"></div> */}
              <ActionBtn setSelectedPage={setSelectedPage}>Join Now</ActionBtn>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
