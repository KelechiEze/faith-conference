import Navbar from './components/Navbar/Navbar';
import HomeSection from './components/HomeSection/Homesection';
import CountdownTimer from './components/CountdownTimer/CountdownTimer';
import FaithSection from './components/FaithSection/FaithSection';
import FaithVerse from './components/FaithVerse/FaithVerse';
import FaithStoriesCarousel from './components/FaithStoriesCarousel/FaithStoriesCarousel';
import FaithSpeakers from './components/FaithSpeakers/FaithSpeakers';
import RegisterForm from './components/RegisterForm/RegisterForm';
import FaithSupportSection from './components/FaithSupportSection/FaithSupportSection';


export default function Home() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <CountdownTimer />
      <FaithSection />
      <FaithVerse />
      <FaithStoriesCarousel />
      <FaithSpeakers />
      <RegisterForm />
      <FaithSupportSection />
    </>
  );
}
