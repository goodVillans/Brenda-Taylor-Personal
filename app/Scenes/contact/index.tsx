import { SelectedPage } from "@/app/Shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactImg from "../../../public/assets/Gen2.png";
import HeadText from "@/app/Shared/HeadText";
import Image from "next/image";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-md bg-lavender px-5 py-3 placeholder-claret`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}>
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:w-3/5"
        >
          <HeadText>
            <span className="text-claret">ANY QUESTIONS?</span>
          </HeadText>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            laudantium. Doloribus sequi saepe asperiores repellat eaque sapiente
            voluptates ipsam quae.
          </p>
        </motion.div>
        {/* Form x img */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-10 basis-3/5 md:mt-0"
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/d950cbf8e978a53e51fd52509aec3c32"
              method="POST"
            >
              {/* name */}
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", { required: true, maxLength: 50 })}
              />
              {errors.name && (
                <p className="mt-1 text-red-700">
                  {errors.name.type === "required" &&
                    "Please enter your full name"}
                  {errors.name.type === "maxLength" &&
                    "Must not exceed 50 characters"}
                </p>
              )}
              {/* Email */}
              <input
                className={inputStyles}
                type="email"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-red-700">
                  {errors.email.type === "required" && "This field is required"}
                  {errors.email.type === "pattern" && "Invalid email address"}
                </p>
              )}
              {/* text area */}
              <textarea
                rows={18}
                cols={50}
                className={inputStyles}
                placeholder="MESSAGE"
                {...register("name", { required: true, maxLength: 2000 })}
              />
              {errors.messsage && (
                <p className="mt-1 text-red-700">
                  {errors.messsage.type === "required" &&
                    "Please enter a valid message"}
                  {errors.messsage.type === "maxLength" &&
                    "Must not exceed 2000 characters"}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-md bg-claret font-semibold text-lavender hover:bg-lavender hover:text-claret px-20 py-3 transition duration-500"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="relative mt-16 basis-2/5 md:mt-0"
          >
            <motion.div 
             whileHover={{scale: 1.1, originX: 0.5, originY: 0.5,}}
             transition={{type: 'spring', stiffness: 50}}
            className="w-full sm:flex sm:justify-center justify-end">
               <Image src={ContactImg} alt="contact" className="w-full"/> 
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
