import "../../../styles/dashboard/UsersDashBoard.css";
import project1 from "../../../assets/images/pexels-fotoaibe-1571453.jpg";
import project2 from "../../../assets/images/pexels-isaw-company-66472-945688.jpg";
import project3 from "../../../assets/images/pexels-fotoaibe-1643383.jpg";
import project4 from "../../../assets/images/pexels-pixabay-276724.jpg";
const projects = [
  { id: 1, title: "Modern Living Room", img: project1 },
  { id: 2, title: "Luxury Bedroom", img: project2 },
  { id: 3, title: "Minimalist Kitchen", img: project3 },
  { id: 4, title: "Contemporary Office", img: project4 },
];

const ProjectGallery = () => {
  return (
    <section className="project-gallery">
      <h2 className="gallery-title">Your Projects</h2>
      <div className="gallery-grid">
        {projects.map((project) => (
          <div className="gallery-item" key={project.id}>
            <img
              src={project.img}
              alt={project.title}
              className="gallery-img"
            />
            <div className="gallery-info">
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;
