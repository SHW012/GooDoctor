import React from "react";
import EducationForm from "./forms/EducationForm";
import LanguageCertificationForm from "./forms/LanguageCertificationForm.js";
import AwardsForm from "./forms/AwardsForm.js";
import ActivitiesForm from "./forms/ActivitiesForm.js";
import InternshipForm from "./forms/ExperienceForm";
import StrengthWeaknessForm from "./forms/StrengthWeaknessForm.js";
import CertificateForm from "./forms/CertificateForm";

const SpecContent = ({ selectedTab }) => {
  const renderTabContent = () => {
    switch (selectedTab) {
      case "학력":
        return <EducationForm />;
      case "어학":
        return <LanguageCertificationForm />;
      case "자격증":
        return <CertificateForm />;
      case "수상":
        return <AwardsForm />;
      case "교내외활동":
        return <ActivitiesForm />;
      case "인턴십/경력":
        return <InternshipForm />;
      case "강점/약점":
        return <StrengthWeaknessForm />;
      default:
        return null;
    }
  };

  return <div className="tab-content">{renderTabContent()}</div>;
};

export default SpecContent;
