import Hero from './components/Hero'
import CourseBenefits from "./components/CourseBenefits";
import Introduce from "./components/Introduce";
import SpecialFeatures from "./components/SpecialFeatures";
import Guest from "./components/Guest";
import MeetYourInstructor from "./components/MeetYourInstructor";
import PrivateCommunity from './components/PrivateCommunity';
import Achievements from './components/Achievements';
import CourseLearning from './components/CourseLearning';
import Bonuses from './components/Bonuses';
import MoneyBackGurantee from './components/MoneyBackGurantee';
import Footer from './components/Footer';
import Faqs from './components/Faqs';

function App() {

  return (
    <div>
      <Hero/>
      <CourseBenefits />
      <Introduce/>
      <SpecialFeatures/>
      <Guest/>
      {/* course curriculum */}
      <CourseLearning/>
      <MeetYourInstructor/>
      <PrivateCommunity/>
      <Achievements/>
      {/* Reviews */}
      {/* Price and Enroll */}
      <Faqs/>
      <Bonuses/>
      <MoneyBackGurantee/>
      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default App
