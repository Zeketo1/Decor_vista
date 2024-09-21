import { MdOutlineAccessTime } from "react-icons/md";
import { appointments, designs } from "../../../data/home/designs";
import "../../../styles/dashboards/user/Overview.css";
import { IoTimeOutline } from "react-icons/io5";

const Dashboard = () => {
    return (
        <div className="overview-container">
            <div className="designs-container">
                <p className="sub-heading">~ Favorite Designs</p>
                <div className="designns">
                    {designs.slice(5,11).map(design => (
                        <div className="design">
                            <img src={design.image} alt="image" />
                            <div className="details">
                                <div className="designer">
                                    <div className="designer-image">
                                        <span>{design.designer.slice(0,1).toLocaleUpperCase()}</span>
                                    </div>
                                    
                                    <span className="name">{design.designer}</span>
                                </div>

                                <span className="price">$4,200</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="activities-container">
                <p className="sub-heading">~ Appointments</p>
                <div className="appointments">
                    {appointments.map(appointment => (
                        <div className="appointment-container">
                            <div className="name-n-price">
                                <div className="image-container">
                                    <span>{appointment.designer.slice(0,1).toLocaleUpperCase()}</span>
                                </div>

                                <div className="name-container">
                                    <span className="name">{appointment.designer}</span>
                                    <span className="price"><IoTimeOutline /> {appointment.time}pm</span>
                                </div>
                            </div>
                            <div className="title-n-date">
                                <span className="title">{appointment.title}</span>
                                {/* <span>{appointment.dateandtime}</span> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dashboard