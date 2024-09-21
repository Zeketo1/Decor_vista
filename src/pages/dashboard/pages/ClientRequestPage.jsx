import { useState } from "react";
import "../../../styles/dashboard/ClientRequestsPage.css";
import { FiSearch, FiPlus, FiEye } from "react-icons/fi";

const ClientRequestsPage = () => {
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
    {
      id: 3,
      clientName: "Jane Smith",
      requestDate: "2024-09-19",
      requestType: "Furniture Setup",
      status: "In Progress",
    },
  ]);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleViewDetails = (request) => {
    setSelectedRequest(request);
  };

  const handleCloseModal = () => {
    setSelectedRequest(null);
  };

  return (
    <div className="client-requests-page">
      <header className="page-header">
        <h1>Client Requests</h1>
        <div className="header-actions">
          <div className="search-bar">
            <FiSearch className="search-icon" />
            <input type="text" placeholder="Search requests..." />
          </div>
          <button className="new-request-btn">
            <FiPlus className="plus-icon" /> New Request
          </button>
        </div>
      </header>

      <section className="requests-section">
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
            {requests.map((request) => (
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
          {requests.map((request) => (
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
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientRequestsPage;
