import React from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <Section title="Selected Projects" id="projects">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
        {PROJECTS.map((project, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-sm transition-shadow">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-ink">{project.title}</h3>
                  <div className="flex gap-3">
                      {project.links.github && (
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-ink transition-colors" title="View Code">
                              <Github size={18} />
                          </a>
                      )}
                      {project.links.live && (
                          <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-accent transition-colors" title="Live Demo">
                              <ExternalLink size={18} />
                          </a>
                      )}
                  </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded border border-gray-200">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mb-4 space-y-3">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="bg-blue-50 border border-blue-100 rounded-md p-3">
                    <p className="text-sm text-ink leading-relaxed">
                        <span className="font-bold text-accent uppercase text-xs tracking-wider block mb-1">Key Achievement</span>
                        {project.key_achievement}
                    </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
         <p className="text-sm text-gray-500 italic">Detailed project breakdown available in the attached CV.</p>
      </div>
    </Section>
  );
};

export default Projects;