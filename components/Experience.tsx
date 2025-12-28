import React from 'react';
import Section from './Section';
import { EXPERIENCE, PUBLICATIONS, OPEN_SOURCE } from '../constants';
import { Briefcase, BookOpen, GitBranch } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section title="Experience & Achievements" id="experience">
      <div className="space-y-10">
        
        {/* Work Experience */}
        <div>
          <div className="flex items-center gap-2 mb-4 text-ink font-semibold">
            <Briefcase size={20} className="text-accent" />
            <h3 className="text-xl">Professional Experience</h3>
          </div>
          {EXPERIENCE.map((job, index) => (
            <div key={index} className="pl-7 border-l-2 border-gray-200 ml-2.5">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h4 className="font-bold text-lg text-ink">{job.company}</h4>
                <span className="text-sm text-gray-500 font-mono">{job.period}</span>
              </div>
              <div className="text-accent font-medium mb-2">{job.role}</div>
              <ul className="list-disc list-outside ml-4 space-y-1 text-gray-700">
                {job.description.map((desc, i) => (
                  <li key={i} className="leading-snug">{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Publications */}
        <div>
          <div className="flex items-center gap-2 mb-4 text-ink font-semibold">
            <BookOpen size={20} className="text-accent" />
            <h3 className="text-xl">Research & Publications</h3>
          </div>
          <div className="space-y-4">
            {PUBLICATIONS.map((pub, index) => (
              <div key={index} className="bg-white p-4 rounded border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-1">{pub.title}</h4>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-accent">{pub.publisher}</span>
                  <span className="text-gray-500 italic">{pub.domain}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Open Source */}
        <div>
           <div className="flex items-center gap-2 mb-4 text-ink font-semibold">
            <GitBranch size={20} className="text-accent" />
            <h3 className="text-xl">Open Source</h3>
          </div>
          {OPEN_SOURCE.map((os, index) => (
             <div key={index} className="bg-white p-4 rounded border border-gray-200">
                <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-bold text-gray-900">{os.event}</h4>
                    <span className="text-sm text-gray-500 font-medium">{os.role}</span>
                </div>
                <p className="text-gray-700 text-sm">{os.details}</p>
             </div>
          ))}
        </div>

      </div>
    </Section>
  );
};

export default Experience;