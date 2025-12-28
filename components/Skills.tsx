import React from 'react';
import Section from './Section';
import { SKILLS, EDUCATION } from '../constants';

const Skills: React.FC = () => {
  return (
    <Section title="Technical Proficiency" id="skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {SKILLS.map((cat, index) => (
          <div key={index}>
            <h3 className="font-semibold text-ink mb-3">{cat.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <li key={skill} className="px-3 py-1 bg-white border border-gray-300 rounded text-sm text-gray-700">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-6 pt-4 border-t border-gray-200">
        Education
      </h2>
      <div className="space-y-4">
          {EDUCATION.map((edu, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div>
                      <h4 className="font-bold text-ink">{edu.degree}</h4>
                      <p className="text-gray-600 text-sm">{edu.institution}</p>
                      <p className="text-accent text-sm font-medium mt-1">Specialization: {edu.specialization}</p>
                  </div>
                  <div className="text-sm text-gray-500 font-mono mt-2 sm:mt-0 bg-gray-100 px-2 py-1 rounded">
                      {edu.year}
                  </div>
              </div>
          ))}
      </div>
    </Section>
  );
};

export default Skills;