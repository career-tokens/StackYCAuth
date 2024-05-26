import { motion } from "framer-motion";
import Image from "next/image";

const ProjectsData = [
  {
    id: 1,
    name: "Dark Mode Available",
    description:
      "Theme changer is made available in this starter project. Click to read my blog on how to do it.",
    link: "https://mainakkaniam.hashnode.dev/implementing-light-and-dark-mode-in-multi-page-nextjs-app-using-tailwindcss",
    image: "https://img.icons8.com/fluency/48/image--v1.png",
  },
  {
    id: 2,
    name: "Beautiful Custom Pages",
    description:
      "Experience beautiful custom signup and login pages.Click to read how to develop them using Stack.",
    link: "https://docs.stack-auth.com/docs/customization/page-examples/signup",
    image: "https://img.icons8.com/fluency/48/form.png",
  },
  {
    id: 3,
    name: "OAuth + Credentials Providers",
    description:
      "Be more user friendly by giving them more freedom. Click to read how to implement using Stack",
    link: "https://docs.stack-auth.com/docs",
    image:
      "https://img.icons8.com/external-flat-design-circle/64/external-Modal-Popup-seo-and-web-flat-design-circle.png",
  },
  {
    id: 4,
    name: "Powered by Open Source",
    description:
      "Made using Stack,an open source Auth platform. Click to know more about them",
    link: "https://stack-auth.com",
    image:
      "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-skip-button-advertising-agency-flaticons-lineal-color-flat-icons.png",
  },
];

const Features = () => {
  return (
    <div>
      <div className="w-full flex flex-wrap gap-x-4 gap-y-4 items-center justify-center">
        {ProjectsData.map((project) => {
          return (
            <motion.div
              whileHover={{
                y: -8,
              }}
              transition={{
                type: "spring",
                bounce: 0.7,
              }}
              key={project.id}
              className="mt-5 text-left bg-opacity-10 dark:bg-opacity-20 bg-gray-500 p-5 rounded-lg"
            >
              <a target="_blank" rel="noopener noreferrer" href={project.link}>
                <Image
                  src={project.image}
                  width={30}
                  height={30}
                  className="mb-3 rounded-lg"
                  alt={project.name}
                />
                <div className="mb-1 text-sm font-medium text-gray-900 dark:text-[#5dd59c]">
                  {project.name}
                </div>
                <div className="max-w-[250px] text-sm font-normal text-gray-500 dark:text-gray-400">
                  {project.description}
                </div>
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
