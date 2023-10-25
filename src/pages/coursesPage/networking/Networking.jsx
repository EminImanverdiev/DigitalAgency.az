import Header from "../../../components/header/Header";
import networkingImg from "../../../assets/images/network.png";
import { BiLogoLinkedin, BiLogoWhatsapp } from "react-icons/bi";
import { BsSend } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import CourseFooter from "../../../components/courseFooter/CourseFooter";
import "./style.css";

export default function Networking() {
  return (
    <div className="networkingSection">
      <Header />
      <div className="networkingBanner">
        <div className="container center ">
          <div className="wrapper">
            <h5>Networking fürsəti</h5>
            <p>
              Welcome to Agency DigitalHands, where we take your cravings to a
              whole new
            </p>
            <form>
              <input type="email" placeholder="Email" />
              <input type="submit" />
            </form>
            <div className="networkingIconsWrapper">
              <BiLogoLinkedin className="socialIcon" />
              <BiLogoWhatsapp className="socialIcon" />
              <BsSend className="socialIcon" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <p className="sectionTitle">Biz nə təklif edirik?</p>
        <div className="offersWrapper">
          <div className="offer">
            <FaHandsHelping size={64} />
            <span>Dəstək</span>
            <p>
              A dark themed wireframe kit made of interchangealbe components to
              speed.
            </p>
          </div>
          <div className="offer">
            <FaHandsHelping size={64} />
            <span>Community</span>
            <p>
              A dark themed wireframe kit made of interchangealbe components to
              speed.
            </p>
          </div>
          <div className="offer">
            <FaHandsHelping size={64} />
            <span>Dəstək</span>
            <p>
              A dark themed wireframe kit made of interchangealbe components to
              speed.
            </p>
          </div>
        </div>
      </div>
      <CourseFooter />
    </div>
  );
}
