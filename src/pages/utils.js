import { toast } from "react-toastify";

const BASE_URL = "https://a2w-creative-ampere.circumeo-apps.net";

const existing_user = JSON.parse(localStorage.getItem("uservalues1"));
const additionalRequests = [
  {
    id: 3,
    clientName: "Alice Johnson",
    requestDate: "2024-09-18",
    requestType: "Kitchen Remodel",
    status: "Pending",
  },
  {
    id: 4,
    clientName: "Michael Brown",
    requestDate: "2024-09-17",
    requestType: "Bathroom Renovation",
    status: "Completed",
  },
  {
    id: 5,
    clientName: "Emily Davis",
    requestDate: "2024-09-16",
    requestType: "Office Layout",
    status: "In Progress",
  },
  {
    id: 6,
    clientName: "Chris Lee",
    requestDate: "2024-09-15",
    requestType: "Living Room Design",
    status: "Pending",
  },
  {
    id: 7,
    clientName: "Sophia Taylor",
    requestDate: "2024-09-14",
    requestType: "Garden Design",
    status: "Pending",
  },
  {
    id: 8,
    clientName: "James Wilson",
    requestDate: "2024-09-13",
    requestType: "Home Staging",
    status: "In Progress",
  },
  {
    id: 9,
    clientName: "Olivia Martinez",
    requestDate: "2024-09-12",
    requestType: "Color Consultation",
    status: "Pending",
  },
  {
    id: 10,
    clientName: "Liam Anderson",
    requestDate: "2024-09-11",
    requestType: "Space Planning",
    status: "Completed",
  },
  {
    id: 11,
    clientName: "Emma Thomas",
    requestDate: "2024-09-10",
    requestType: "Lighting Design",
    status: "In Progress",
  },
  {
    id: 12,
    clientName: "Noah Jackson",
    requestDate: "2024-09-09",
    requestType: "Interior Design",
    status: "Pending",
  },
  {
    id: 13,
    clientName: "Ava White",
    requestDate: "2024-09-08",
    requestType: "Furniture Selection",
    status: "Completed",
  },
  {
    id: 14,
    clientName: "Ethan Harris",
    requestDate: "2024-09-07",
    requestType: "Wall Treatment",
    status: "In Progress",
  },
  {
    id: 15,
    clientName: "Mia Clark",
    requestDate: "2024-09-06",
    requestType: "Home Office Design",
    status: "Pending",
  },
  {
    id: 16,
    clientName: "Isabella Lewis",
    requestDate: "2024-09-05",
    requestType: "Exterior Design",
    status: "Pending",
  },
  {
    id: 17,
    clientName: "Alexander Lee",
    requestDate: "2024-09-04",
    requestType: "Interior Renovation",
    status: "Completed",
  },
  {
    id: 18,
    clientName: "Charlotte Walker",
    requestDate: "2024-09-03",
    requestType: "Kitchen Layout",
    status: "In Progress",
  },
  {
    id: 19,
    clientName: "Benjamin Hall",
    requestDate: "2024-09-02",
    requestType: "Flooring Consultation",
    status: "Pending",
  },
  {
    id: 20,
    clientName: "Amelia Allen",
    requestDate: "2024-09-01",
    requestType: "Window Treatments",
    status: "In Progress",
  },
  {
    id: 21,
    clientName: "William Young",
    requestDate: "2024-08-31",
    requestType: "Space Redesign",
    status: "Pending",
  },
  {
    id: 22,
    clientName: "Sofia King",
    requestDate: "2024-08-30",
    requestType: "Basement Finish",
    status: "In Progress",
  },
  {
    id: 23,
    clientName: "Lucas Wright",
    requestDate: "2024-08-29",
    requestType: "Color Palette",
    status: "Completed",
  },
  {
    id: 24,
    clientName: "Harper Scott",
    requestDate: "2024-08-28",
    requestType: "Design Consultation",
    status: "Pending",
  },
];

const showToast = (message, type) => {
  toast[type](message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    icon: type === "success" ? "🎉" : "⚠️",
    style: {
      backgroundColor: type === "success" ? "#48bb78" : "#f56565",
      color: "#fff",
    },
    className: `custom-toast-${type}`,
    bodyClassName: `custom-toast-${type}-body`,
  });
};

export { BASE_URL, existing_user, additionalRequests, showToast };
