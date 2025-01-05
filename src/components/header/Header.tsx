import { faGithub, faXing } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import photo from "../../images/photo.png";

const Header = () => {
  function calculateExperience() {
    const startDate = new Date("2018-05-15");
    const currentDate = new Date();
    let experience = currentDate.getFullYear() - startDate.getFullYear();
    let month = currentDate.getMonth() - startDate.getMonth();

    // Adjust for incomplete years
    if (month < 0) {
      experience -= 1;
      month += 12;
    }

    // Include the fraction of the current year
    const totalExperienceInYears = experience + month / 12;

    // Round to the nearest 0.5 year
    const roundedExperience = Math.floor(totalExperienceInYears * 2) / 2;

    return roundedExperience;
  }

  return (
    <div className="header-wrapper container flex flex-wrap p-16 mx-auto xs:flex-wrap xs:justify-center md:flex-nowrap">
      <div className="photo">
        <img
          className="h-80 object-cover p-1 bg-white border rounded max-w-sm"
          src={photo}
          alt="Profile"
        />
      </div>
      <div className="profile flex flex-col xs:mt-4 sm:pl-0 xs:text-center md:mt-0 md:pl-8 md:text-left md:justify-center">
        <div className="profile-name grid grid-cols-1 leading-8 border-b pb-4">
          <span className="text-4xl font-medium">Amit Kumal</span>
          <span>Frontend Developer</span>
          <span className="brand-icons text-xl">
            <a className="pr-2" href="https://github.com/amit41" rel="noopener">
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
        <div className="profile-text mt-4">
          Frontend Developer with {calculateExperience()} years experience in
          Angular framework. Understanding the clients requirements, their
          business value and create a product as their expectation. Proficient
          in creating and developing user interfaces, writing and testing codes,
          troubleshooting issues and implementing new features as per client and
          business needs.
        </div>
      </div>
    </div>
  );
};

export default Header;
