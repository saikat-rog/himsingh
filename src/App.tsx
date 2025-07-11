import Hero from './components/Hero'
import CourseBenefits from "./components/CourseBenefits";
import Introduce from "./components/Introduce";
import CourseHighlight from "./components/SpecialFeatures";
import Guest from "./components/Guest";
import MeetYourInstructor from "./components/MeetYourInstructor";
import PrivateCommunity from './components/PrivateCommunity';
// import Achievements from './components/Achievements';
import CourseLearning from './components/CourseLearning';
import Bonuses from './components/Bonuses';
import MoneyBackGurantee from './components/MoneyBackGurantee';
import Footer from './components/Footer';
import Faqs from './components/Faqs';
import {Testimonials} from './components/Testimonials';
import CourseCurriculum from './components/Curriculum';
import PriceSection from './components/PriceSection';

function App() {

  return (
    <div>
      <Hero/>
      <CourseBenefits />
      <Introduce/>
      <CourseHighlight/>
      <Guest/>
      <CourseCurriculum/>
      <CourseLearning/>
      <MeetYourInstructor/>
      <PrivateCommunity/>
      <Testimonials/>
      {/* <Achievements/> Not needed */}
      {/* Price and Enroll */}
      <PriceSection/>
      <Faqs/>
      <Bonuses/>
      <MoneyBackGurantee/>
      <Footer/>
    </div>
  )
}

export default App
