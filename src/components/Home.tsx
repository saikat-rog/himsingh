import Hero from './Hero'
import CourseBenefits from "./CourseBenefits";
import Introduce from "./Introduce";
import CourseHighlight from "./SpecialFeatures";
import Guest from "./Guest";
import MeetYourInstructor from "./MeetYourInstructor";
import PrivateCommunity from './PrivateCommunity';
// import Achievements from './components/Achievements';
import CourseLearning from './CourseLearning';
import Bonuses from './Bonuses';
import MoneyBackGurantee from './MoneyBackGurantee';
import Footer from './Footer';
import Faqs from './Faqs';
import {Testimonials} from './Testimonials';
import CourseCurriculum from './Curriculum';
import PriceSection from './PriceSection';

function Home() {

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

export default Home
