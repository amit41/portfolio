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
    <div className="container mx-auto px-6 py-16">
      <div className="bg-surface rounded-2xl shadow-medium ring-1 ring-black/5 p-6 sm:p-10 flex flex-col md:flex-row md:items-center gap-8 relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary opacity-10 rounded-full translate-y-12 -translate-x-12"></div>

        <img
          className="h-32 w-32 sm:h-40 sm:w-40 rounded-xl object-cover ring-2 ring-white/20 shadow-soft relative z-10"
          src={photo}
          alt="Profile"
        />
        <div className="flex-1 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight font-semibold text-primary">
                Amit Kumal
              </h1>
              <p className="text-[#4a4a4a] mt-1 font-medium">
                Frontend Developer
              </p>
            </div>
            <div className="flex items-center gap-3 text-xl">
              <a
                className="text-[#4a4a4a] hover:text-primary transition-colors duration-300 p-2 rounded-lg hover:bg-primary/10"
                href="https://github.com/amit41"
                rel="noopener"
                aria-label="GitHub Profile"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                className="text-[#4a4a4a] hover:text-primary transition-colors duration-300 p-2 rounded-lg hover:bg-primary/10"
                href="https://www.xing.com/profile/Amit_KumalKopila2/cv"
                rel="noopener"
                aria-label="Xing Profile"
              >
                <FontAwesomeIcon icon={faXing} />
              </a>
            </div>
          </div>
          <p className="mt-6 leading-7 text-[15px] text-[#4a4a4a]">
            Frontend developer with{" "}
            <span className="text-primary font-semibold">
              {calculateExperience()} years
            </span>{" "}
            of experience focusing on{" "}
            <span className="text-primary font-semibold">Angular</span> and{" "}
            <span className="text-primary font-semibold">React</span>. I turn
            requirements into clean, accessible interfaces, write robust tests,
            and ship features that align with business goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
