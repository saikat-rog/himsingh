import Hero from './components/Hero'
import CourseBenefits from "./components/CourseBenefits";
import Introduce from "./components/Introduce";
import SpecialFeatures from "./components/SpecialFeatures";
import Guest from "./components/Guest";
import MeetYourInstructor from "./components/MeetYourInstructor";
import PrivateCommunity from './components/PrivateCommunity';
import Achievements from './components/Achievements';

function App() {

  return (
    <div>
      <Hero/>
      <CourseBenefits />
      <Introduce/>
      <SpecialFeatures/>
      <Guest/>
      <MeetYourInstructor/>
      <PrivateCommunity/>
      <Achievements/>
    </div>
  )
}

export default App
