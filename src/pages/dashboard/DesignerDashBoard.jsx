import { Link } from "react-router-dom";
import { FaThumbsUp, FaBox } from "react-icons/fa"; // Example icons
import "../../styles/dashboard/DesignerDashBoard.css"; // Custom CSS

const DesignerDashboard = () => {
  // Mock Data for designs and likes
  const designData = [
    { id: 1, title: "Modern Living Room", likes: 120 },
    { id: 2, title: "Luxury Bedroom", likes: 85 },
    // Add more designs
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="brand">
          <h2>DecorVista</h2>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/my-designs">My Designs</Link>
            </li>
            <li>
              <Link to="/likes">Likes</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>
        {/* <div className="pro-upgrade">
          <button>Upgrade to Pro</button>
        </div> */}
      </aside>

      {/* Main Dashboard Content */}
      <main className="dashboard-main">
        <h1>Designer Dashboard</h1>

        <div className="dashboard-metrics">
          <div className="metric-card">
            <FaThumbsUp className="metric-icon" />
            <h2>Total Likes</h2>
            <p>{designData.reduce((acc, design) => acc + design.likes, 0)}</p>
          </div>

          <div className="metric-card">
            <FaBox className="metric-icon" />
            <h2>Total Designs</h2>
            <p>{designData.length}</p>
          </div>
        </div>

        {/* Designs List */}
        <div className="design-list">
          <h2>My Designs</h2>
          <div className="design-grid">
            {designData.map((design) => (
              <div className="design-card" key={design.id}>
                <h3>{design.title}</h3>
                <p>{design.likes} Likes</p>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DesignerDashboard;
