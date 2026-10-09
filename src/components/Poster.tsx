import type { ReactNode } from 'react';
import type { Palette, Project } from '../data/portfolio';

/**
 * Generated "key art" for thumbnails — layered gradients, light falloff and a motif.
 * No stock imagery: every card is art-directed from its palette.
 */
export function PosterBackdrop({ palette, children, className = '' }: { palette: Palette; children?: ReactNode; className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${palette.via} 0%, transparent 60%),
          radial-gradient(90% 80% at 0% 100%, ${palette.from} 0%, transparent 70%),
          linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute -right-1/4 -top-1/3 h-[140%] w-[70%] rotate-[18deg] opacity-40 blur-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${palette.accent}55, transparent)` }}
      />
      <div aria-hidden className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)]" />
      {children}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
    </div>
  );
}

/** Full image presentation for each Original project without distracting SVG overlays */
export function ProjectArt({ project, className = '' }: { project: Project; className?: string }) {
  return (
    <PosterBackdrop palette={project.palette} className={className}>
      {project.image ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover object-top opacity-90 blur-[2.5px] transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:blur-0"
            loading="lazy"
          />
          {/* subtle top vignette + deep bottom contrast scrim for text readability */}
          <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent via-25%" />
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-[68%] bg-gradient-to-t from-ink via-ink/85 to-transparent" />
        </div>
      ) : null}
    </PosterBackdrop>
  );
}

/** Small fictional platform mark used in the nav and on cards. */
export function SeriesMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <svg viewBox="0 0 24 32" className="h-[1.15em] w-auto drop-shadow-[0_0_8px_rgba(229,19,43,0.5)]" aria-hidden fill="none">
        <path d="M6 5 H19 M6 5 V27 M6 15 H16" stroke="#e5132b" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-sans text-[0.62em] font-bold tracking-[0.36em] text-mist">SERIES</span>
    </span>
  );
}
