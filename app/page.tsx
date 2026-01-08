import Navigation from './components/Navigation';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import NextEventCard from './components/NextEventCard';
import PastEventCard from './components/PastEventCard';
import MissionLogs from './components/MissionLogs';
import TeamSection from './components/TeamSection';
import CommunityPartners from './components/CommunityPartners';
import CallForSpeakers from './components/CallForSpeakers';
import CallForVolunteers from './components/CallForVolunteers';
import Sponsors from './components/Sponsors';
import ContactUs from './components/ContactUs';
import ContributorsSection from './components/ContributorsSection';
import { CalendarClock } from 'lucide-react';
import SocialLinks from './components/ContactUs/SocialLinks';
import { MessageSquare } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Navigation />

      <div className="mx-auto space-y-8 mb-24">
        <Header />

        {/* Home */}
        <section id="home">
          <HeroSection />
        </section>
        <section
          id="about-socials"
          className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-16"
        >
          <div className="col-span-full md:col-span-2 w-full flex flex-col h-full">
            <About />
          </div>

        {/* Next Event and Call for Speakers - 50/50 Layout */}
        <section id="events">
          <div className="flex items-center gap-3 mb-6">
            <CalendarClock className="w-6 h-6 text-dark-secondary" />
            <h2 className="text-2xl md:text-3xl font-bold font-sans text-[var(--color-text)]">
              Events
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NextEventCard />
            <CallForSpeakers />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NextEventCard />
            <CallForSpeakers />
          </div>
        </section>

        {/* Past Events */}
        <section>
          <PastEventCard/>
        </section>

        {/* Call for Volunteers */}
        <section>
          <CallForVolunteers />
        </section>

        {/* Past Events */}
        <section>
          <PastEventCard/>
        </section>

        {/* Call for Volunteers */}
        <section>
          <CallForVolunteers />
        </section>

        <section id="mission-logs" className="pt-16">
          <MissionLogs />
        </section>

        {/* Community Partners Section */}
        <section id="partners" className="pt-16">
          <CommunityPartners />
        </section>

        {/* Sponsors Section */}
        <section id="sponsors" className="pt-16">
          <Sponsors />
        </section>

        {/* Contributors Section */}
        <section id="contributors" className="pt-16">
          <ContributorsSection />
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="pt-16">
          <ContactUs />
        </section>
      </div>
    </>
  );
}
