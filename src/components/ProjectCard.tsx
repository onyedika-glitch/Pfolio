import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { PINK, INK, MUTED, card } from './ui'

type Project = (typeof projects)[number]

export const projectByLink = (link: string) => projects.find((p) => p.link === link)

/** Screenshot card linking to a case study, in the homepage "Things I've shipped" style. */
export default function ProjectCard({ project }: { project: Project }) {
  const extension = 'extension' in project ? project.extension : undefined
  return (
    <div className="flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 h-full" style={card}>
      <Link to={project.link} className="flex flex-col flex-1 no-underline">
        <div className="relative overflow-hidden h-44 sm:h-52" style={{ background: project.bg }}>
          <img src={`/assets/${project.img}`} alt={project.title} loading="lazy" className="block w-full h-full" style={{ objectFit: 'cover', objectPosition: 'top' }} />
          {project.live && (
            <span className="absolute inline-flex items-center gap-1.5" style={{ top: '12px', right: '12px', fontSize: '11px', fontWeight: 600, color: '#047857', background: 'rgba(255,255,255,0.95)', padding: '4px 10px', borderRadius: '100px' }}>
              <span className="status-dot-green"></span> Live
            </span>
          )}
        </div>
        <div className="flex flex-col flex-1 p-5 md:p-7 pb-0 md:pb-0">
          <h3 style={{ fontSize: '19px', fontWeight: 800, letterSpacing: '-0.03em', color: INK, marginBottom: '8px', lineHeight: 1.25 }}>{project.title}</h3>
          <p style={{ fontSize: '14px', lineHeight: 1.65, color: MUTED, flex: 1 }}>{project.desc}</p>
        </div>
      </Link>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 p-5 md:p-7 pt-5 md:pt-5">
        <Link to={project.link} className="inline-flex items-center gap-1.5 no-underline" style={{ fontSize: '13px', fontWeight: 600, color: '#fff', background: INK, padding: '9px 18px', borderRadius: '100px' }}>
          Read the story <i className="fas fa-arrow-right" style={{ fontSize: '11px' }}></i>
        </Link>
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 no-underline" style={{ fontSize: '13px', fontWeight: 600, color: INK }}>
            Visit site <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '10px' }}></i>
          </a>
        )}
        {extension && (
          <a href={extension} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 no-underline" style={{ fontSize: '13px', fontWeight: 600, color: PINK }}>
            <i className="fab fa-chrome" style={{ fontSize: '12px' }}></i> Chrome extension
          </a>
        )}
      </div>
    </div>
  )
}
