import Navigation from "./components/Navigation";

const UserDashBoard = () => {
  return (
    <div className="dashboard-">
      {/* Sidebar */}
      <Navigation />

      {/* Main Dashboard Content */}
      <main className="dashboard">
        {/* <Navigation /> */}
        <section className="dashboard-content">
          <h1 className="dashboard-title">Welcome User</h1>
          <div className="dashboard-banner" />
          <div className="dashboard-row">
            <div className="dashboard-box" />
            <div className="dashboard-box" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserDashBoard;
