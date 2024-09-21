import { IoIosClose } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegPenToSquare } from "react-icons/fa6";
import {
  EmailScreen,
  EmailScreenEdit,
} from "./../components/dynamic components/emailScreen";
import {
  WelcomeScreen,
  WelcomeScreenEdit,
} from "./../components/dynamic components/welcomeScreen";
import { SectionScreen, SectionScreenEdit } from "../components/dynamic components/sectionScreen";

export const welcomeScreen = {
  name: "Welcome Screen",
  icon: <IoCheckmark />,
  components: {
    screenComponent: <WelcomeScreen />,
    editComponent: <WelcomeScreenEdit />,
  },
};

export const emailScreen = {
  name: "Email",
  icon: <MdOutlineEmail />,
  components: {
    screenComponent: <EmailScreen />,
    editComponent: <EmailScreenEdit />,
  },
};

export const sectionScreen = {
  name: "Section",
  icon: <FaRegPenToSquare/>,
  components: {
    screenComponent: <SectionScreen />,
    editComponent: <SectionScreenEdit />,
  },
};

export const data = [ emailScreen, sectionScreen];
