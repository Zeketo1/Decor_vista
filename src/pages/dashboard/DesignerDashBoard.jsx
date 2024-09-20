// import { SlLike } from "react-icons/sl";
import "../../styles/dashboard/UsersDashBoard.css";
import { MdOutlineDesignServices } from "react-icons/md";
// import { FiBriefcase, FiFilePlus, FiMessageSquare } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { BsCollection } from "react-icons/bs";
import { motion } from "framer-motion";
// import vector1 from "../../assets/images/Ellipse 2.png";
import vector2 from "../../assets/images/Ellipse 3.png";
import vector3 from "../../assets/images/Vector.png";
import ProjectGallery from "./components/ProjectGallery";

const DesignerDashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Main Dashboard Content */}
      <main className="dashboard-content">
        <section className="dashboard-banner">
          <div className="dashboard-balance">
            <div className="balance-text">
              <h1>
                Welcome{" "}
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { delay: 1 } }}
                >
                  Dubby Bantin
                </motion.span>{" "}
              </h1>
              <p>Today&apos;s stats</p>
              <p className="balance-change">$328.32 Increase Today</p>
            </div>
            <div className="actions">
              <button className="btn view-projects">View Projects</button>
              <button className="btn view-reviews">View Reviews</button>
              <button className="btn view-requests">View Requests</button>
            </div>
          </div>
        </section>

        <section className="dashboard-cards">
          <div className="card">
            <img src={vector2} alt="" />
            <div className="icon">
              <BsCollection />
            </div>
            <p className="title"> Projects Added This Month</p>
            <h1 className="amount">
              3. <span>00</span>{" "}
            </h1>
            <button className="trigger_button">View projects</button>
          </div>
          <div className="card">
            <div className="icon">
              <AiFillStar />
            </div>
            <p className="title">Reviews</p>
            <h1 className="amount">
              {" "}
              12. <span>00</span>
            </h1>
            <button className="trigger_button">View requests</button>
            <img src={vector2} alt="" />
          </div>
          <div className="card">
            <div className="icon">
              <MdOutlineDesignServices />
            </div>

            <p className="title"> New Requests</p>
            <h1 className="amount">
              2. <span>00</span>
            </h1>
            <button className="trigger_button">View requests</button>
            <img src={vector3} alt="" />
          </div>
        </section>
        {/* project gallery */}
        <section className="">
          <ProjectGallery />
        </section>
      </main>
    </div>
  );
};

export default DesignerDashboard;
