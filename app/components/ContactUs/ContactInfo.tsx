"use client";

import { MapPin, Users, Calendar, Clock, ExternalLink } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="bg-dark-card rounded-bento p-6 sm:p-8 border border-dark-border bento-card flex flex-col justify-between h-full">
      <div>
        <div className="mb-6">
          <h3 className="font-bold text-2xl mb-2 bg-linear-to-r from-dark-primary to-dark-primary-light bg-clip-text text-transparent">
            Visit Us
          </h3>
          <p className="text-dark-muted text-sm">
            Join us at our community hub in Chennai
          </p>
        </div>

        <div className="space-y-6">
          {/* Location */}
          <div className="group">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-dark-card-hover border border-dark-border hover:border-dark-primary transition-all duration-300">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                style={{ background: 'var(--gradient-primary)' }}
              >
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-dark-text mb-1 flex items-center gap-2">
                  Chennai, India
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </h4>
                <p className="text-sm text-dark-muted">
                  T-Hub Chennai & Offline Meetups
                </p>
                <span className="inline-block mt-2 text-xs text-green-400 font-medium">
                  Hub Active
                </span>
              </div>
            </div>
          </div>

          {/* Meeting Schedule */}
          <div className="group">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-dark-card-hover border border-dark-border hover:border-dark-primary transition-all duration-300">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                style={{ background: 'var(--gradient-accent)' }}
              >
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-dark-text mb-1">
                  Regular Meetups
                </h4>
                <p className="text-sm text-dark-muted">
                  Monthly workshops, hackathons, and networking events
                </p>
              </div>
            </div>
          </div>

          {/* Community Size */}
          <div className="group">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-dark-card-hover border border-dark-border hover:border-dark-primary transition-all duration-300">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                style={{ background: 'var(--gradient-primary)' }}
              >
                <Users className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-dark-text mb-1">
                  Growing Community
                </h4>
                <p className="text-sm text-dark-muted">
                  Join 500+ AI Full-Stack Developers building the future
                </p>
              </div>
            </div>
          </div>

          {/* Response Time */}
          <div className="group">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-dark-card-hover border border-dark-border hover:border-dark-primary transition-all duration-300">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                style={{ background: 'var(--gradient-accent)' }}
              >
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-dark-text mb-1">
                  Quick Response
                </h4>
                <p className="text-sm text-dark-muted">
                  We typically respond within 24-48 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-6 pt-6 border-t border-dark-border">
        <a
          href="https://d3community.in/luma"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group"
          style={{ background: 'var(--gradient-accent)' }}
        >
          <Calendar className="w-5 h-5" />
          RSVP to Next Event
          <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>
    </div>
  );
}
