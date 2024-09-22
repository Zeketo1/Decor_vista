import "../../../styles/dashboards/designer/DesignerDashBoard.css";
import { MdOutlineDesignServices } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { BsCollection } from "react-icons/bs";
import { motion } from "framer-motion";
import vector2 from "../../../assets/images/Ellipse 3.png";
import vector3 from "../../../assets/images/Vector.png";
import ProjectGallery from "../components/ProjectGallery";
import { Link } from "react-router-dom";

const DesignerDashboard = () => {
  const designer = JSON.parse(localStorage.getItem("userData"));
  return (
    <div className="dashboard-container">
      {/* Main Dashboard Content */}
      <main className="dashboard-content">
        <section className="dashboard-banner">
          <div className="dashboard-balance">
            <div className="balance-text">
              <h1>
                Welcome-
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 1 } }}
                >
                   { designer.username}
                </motion.span>{" "}
              </h1>
              <p>Today&apos;s stats</p>
              <p className="balance-change">$328.32 Increase Today</p>
            </div>
            <div className="actions">
              <button className="btn view-projects">View Projects</button>
              <button className="btn view-reviews">View Reviews</button>
              <Link
                to={"/dashboard/designer-dashboard/client-requests"}
                className="btn view-requests"
              >
                View Requests
              </Link>
            </div>
          </div>
        </section>

        <section className="dashboard-cards">
          <motion.div
            initial={{ y: -40 }}
            animate={{
              y: 0,
              transition: { delay: 0.2, type: "spring" },
            }}
            className="card"
          >
            <img src={vector2} alt="" />
            <div className="icon">
              <BsCollection />
            </div>
            <p className="title"> Projects Added This Month</p>
            <h1 className="amount">
              3. <span>00</span>{" "}
            </h1>
          </motion.div>
          <motion.div
            initial={{ y: -40 }}
            animate={{
              y: 0,
              transition: { delay: 0.3, type: "spring" },
            }}
            className="card"
          >
            <div className="icon">
              <AiFillStar />
            </div>
            <p className="title">Reviews</p>
            <h1 className="amount">
              {" "}
              12. <span>00</span>
            </h1>
            <img src={vector2} alt="" />
          </motion.div>
          <motion.div
            initial={{ y: -40 }}
            animate={{
              y: 0,
              transition: { delay: 0.3, type: "spring" },
            }}
            className="card"
          >
            <div className="icon">
              <MdOutlineDesignServices />
            </div>

            <p className="title"> New Requests</p>
            <h1 className="amount">
              2. <span>00</span>
            </h1>
            <img src={vector3} alt="" />
          </motion.div>
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