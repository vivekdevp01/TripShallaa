import { HeroSection, ActivityCards } from "../../components/index.components.js"
import FaqSection from "../../components/User/FaqSection.jsx";
export default function UserDashboard() {
  return (
    <div>
      <HeroSection />
      <ActivityCards />
      <FaqSection/>
    </div>
  );
};
