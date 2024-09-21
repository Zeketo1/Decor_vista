import { useState } from "react";
import "../../../styles/dashboard/ClientRequestsPage.css";
import { FiSearch, FiEye } from "react-icons/fi";
import { additionalRequests } from "../../utils";

const ClientRequestsPage = () => {
  const [search, setSearch] = useState("");
  const [requests, setRequests] = useState([
    {
      id: 1,
      clientName: "John Doe",
      requestDate: "2024-09-20",
      requestType: "Interior Design",
      status: "Pending",
    },
    {
      id: 2,
      clientName: "Jane Smith",
      requestDate: "2024-09-19",
      requestType: "Furniture Setup",
      status: "In Progress",
    },
    ...additionalRequests,
  ]);
  const [selectedRequest, setSelectedRequest] = useState(null);

  // Search functionality, case insensitive search
  const filteredRequests = requests.filter(
    (request) =>
      request.clientName.toLowerCase().includes(search.toLowerCase()) ||
      request.requestType.toLowerCase().includes(search.toLowerCase())
  );

  const handleViewDetails = (request) => {
    setSelectedRequest(request);
  };

  const handleCloseModal = () => {
    setSelectedRequest(null);
  };

  const handleDecline = (id) => {
    setRequests(requests.filter((request) => request.id !== id));
    handleCloseModal();
  };

  const handleAccept = (id) => {
    setRequests(
      requests.map((request) =>
        request.id === id ? { ...request, status: "In Progress" } : request
      )
    );
    handleCloseModal();
  };

  return (
    <div className="client-requests-page">
      <header className="page-header">
        <h1>Client Requests</h1>
        <div className="header-actions">
          <div className="search-bar">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search requests..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </header>

      <section className="requests-section">
        <div className="fade_bottom"></div>
        {/* Table view for desktop */}
        <table className="requests-table">
          <thead>
            <tr>
              <th>Client Name</th>
              <th>Request Date</th>
              <th>Request Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map((request) => (
              <tr key={request.id}>
                <td>{request.clientName}</td>
                <td>{request.requestDate}</td>
                <td>{request.requestType}</td>
                <td>
                  <span
                    className={`status ${request.status
                      .toLowerCase()
                      .replace(" ", "")}`}
                  >
                    {request.status}
                  </span>
                </td>
                <td>
                  <button
                    className="view-btn"
                    onClick={() => handleViewDetails(request)}
                  >
                    <FiEye className="eye-icon" /> View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile View - Cards */}
        <div className="mobile-cards">
          {filteredRequests.map((request) => (
            <div key={request.id} className="request-card">
              <div className="card-header">
                <h3>{request.clientName}</h3>
                <span
                  className={`status ${request.status
                    .toLowerCase()
                    .replace(" ", "")}`}
                >
                  {request.status}
                </span>
              </div>
              <p>Request Date: {request.requestDate}</p>
              <p>Request Type: {request.requestType}</p>
              <button
                className="view-btn"
                onClick={() => handleViewDetails(request)}
              >
                <FiEye className="eye-icon" /> View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for Request Details */}
      {selectedRequest && (
        <div className="request-modal">
          <div className="modal-content fade-in">
            <div className="modal-header">
              <h2>Request Details</h2>
              <button className="close-btn" onClick={handleCloseModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p>
                <strong>Client Name:</strong> {selectedRequest.clientName}
              </p>
              <p>
                <strong>Request Date:</strong> {selectedRequest.requestDate}
              </p>
              <p>
                <strong>Request Type:</strong> {selectedRequest.requestType}
              </p>
              <p>
                <strong>Status:</strong> {selectedRequest.status}
              </p>
            </div>
            <div className="modal-footer">
              <button
                className="decline-btn"
                onClick={() => handleDecline(selectedRequest.id)}
              >
                Decline
              </button>
              <button
                className="accept-btn"
                onClick={() => handleAccept(selectedRequest.id)}
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientRequestsPage;
