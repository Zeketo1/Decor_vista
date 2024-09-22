import "../../../styles/dashboards/user/Top_Menu.css";
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa";
import PropTypes from "prop-types";
const TopMenu = ({ user }) => {
  return (
    <div className="top-area">
      <div className="text-contents">
        <div className="details-container">
          <h1 className="username">Welcome, {user?.username}</h1>
          <p>We sure hope you’re having a great day! </p>
          <span className="balance">$4,500.65</span>
        </div>

        <div className="buttons">
          <button className="withd">
            <TiMinus />
            Withdrawal
          </button>

          <button className="fund">
            <FaPlus />
            Fund Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

TopMenu.propTypes = {
  user: PropTypes.object,
};

export default TopMenu;
