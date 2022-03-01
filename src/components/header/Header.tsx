import { faGithub, faXing } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import photo from "../../images/photo.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="photo">
        <img src={photo} alt="Profile" />
      </div>
      <div className="profile">
        <div className="profile-name">
          <span>Amit Kumal</span>
          <span>Frontend Developer</span>
          <span className="brand-icons">
            <a href="https://github.com/amit41" rel="noopener">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.xing.com/profile/Amit_KumalKopila2/cv"
              rel="noopener"
            >
              <FontAwesomeIcon icon={faXing} className="xing" />
            </a>
          </span>
        </div>
        <div className="profile-text">
          Frontend Developer with 3.5 years experience in Angular framework.
          Understanding the clients requirements, their business value and
          create a product as their expectation. Proficient in creating and
          developing user interfaces, writing and testing codes, troubleshooting
          issues and implementing new features as per client and business needs.
        </div>
      </div>
    </div>
  );
};

export default Header;
