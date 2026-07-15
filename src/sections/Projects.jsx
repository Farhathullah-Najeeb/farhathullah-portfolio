import { motion } from 'framer-motion';
import { FaApple, FaAndroid } from 'react-icons/fa';
import { Globe, Smartphone, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  // Completed projects only
  const completedProjects = projects.filter(project => project.status !== "in-progress");

  const getProjectImage = (name) => {
    switch (name) {
      case "GoldVault+":
        return "/goldvault_mockup.png";
      case "RingMe":
        return "/ringme_mockup.png";
      case "Finance Finzoa":
        return "/finzoa_mockup.png";
      case "Urban Aana":
        return "/urbanaana_mockup.png";
      case "Velocity Homes":
        return "/velocity_mockup.png";
      default:
        return null;
    }
  };

  // Identify mobile apps and non-clickable projects
  const nonClickableProjects = ["Zealosh", "VILA", "E-Wallet"];
  const mobileApps = ["GoldVault+", "RingMe"];

  const getMobileLinks = (name) => {
    if (name === "GoldVault+") {
      return {
        ios: "https://apps.apple.com/in/app/goldvault/id6755378043",
        android: "https://play.google.com/store/apps/details?id=com.pipstechnologies.goldvault&pcampaignid=web_share"
      };
    }
    if (name === "RingMe") {
      return {
        ios: "https://play.google.com/store/apps/details?id=com.ringmeonline.user&hl=en",
        android: "https://play.google.com/store/apps/details?id=com.ringmeonline.user&hl=en"
      };
    }
    return null;
  };

  return (
    <section id="projects" className="py-28 px-6 bg-transparent relative border-t-2 border-dashed border-[#1A1A1A]/10">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex items-end justify-between mb-16">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-[0.2em] text-red-500 uppercase font-mono">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#1A1A1A] heading-display tracking-tight">
              Featured Work
            </h2>
          </div>

          <a
            href="https://github.com/Farhathullah-Najeeb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold text-zinc-600 hover:text-black uppercase tracking-wider transition-colors duration-300 group hover-target font-mono"
          >
            Explore All Projects
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {completedProjects.map((project, idx) => {
            const projectImg = getProjectImage(project.name);
            const isClickable = !nonClickableProjects.includes(project.name);
            const isMobile = mobileApps.includes(project.name);
            const mobileLinks = getMobileLinks(project.name);
            const projectUrl = project.link || "https://github.com/Farhathullah-Najeeb";
            const badgeLabel = project.badge || "LIVE";
            const cardVarClass = idx % 3 === 0 ? 'sketch-card-var-1' : idx % 3 === 1 ? 'sketch-card-var-2' : 'sketch-card-var-3';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.55, delay: (idx % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative flex flex-col overflow-hidden sketch-card-base ${cardVarClass} spiral-bound-top wobble-hover scribble-hover blueprint-grid-hover`}
              >
                {/* Image */}
                <div className="relative aspect-video w-full overflow-hidden border-b-2 border-[#1A1A1A]">
                  {isClickable ? (
                    <a
                      href={projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 block hover-target"
                    >
                      {projectImg ? (
                        <img
                          alt={project.name}
                          src={projectImg}
                          className="h-full w-full object-cover object-top opacity-95 group-hover:opacity-100 group-hover:scale-[1.04] transition-transform duration-700"
                        />
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center bg-stone-50 p-8 text-center">
                          <span className="mb-2 text-4xl">💻</span>
                          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1A1A1A]">
                            {project.name}
                          </span>
                        </div>
                      )}
                    </a>
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-stone-50 p-8 text-center select-none cursor-default">
                      <span className="mb-2 text-4xl">💻</span>
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500">
                        {project.name}
                      </span>
                    </div>
                  )}

                  {/* Status badge */}
                  <div className="pointer-events-none absolute right-3 top-3 flex items-center gap-1.5 rounded-lg border-2 border-[#1A1A1A] bg-yellow-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A] font-mono shadow-[2px_2px_0_0_#1A1A1A]">
                    <span className={`h-1.5 w-1.5 rounded-full ${isClickable ? 'bg-red-500' : 'bg-zinc-500'}`} />
                    {isClickable ? badgeLabel : 'OFFLINE'}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7 relative z-10">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-blue-600 font-mono">
                      {isMobile ? <Smartphone className="h-3 w-3" /> : <Globe className="h-3 w-3" />}
                      {isMobile ? 'Mobile App' : 'Website'}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A] heading-display tracking-wide">
                      {isClickable ? (
                        <a
                          href={projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover-target hover:underline decoration-zinc-400"
                        >
                          {project.name}
                        </a>
                      ) : (
                        <span className="cursor-default select-none">{project.name}</span>
                      )}
                    </h3>

                    <p className="text-xs sm:text-[13px] leading-relaxed text-zinc-700 font-medium">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border-2 border-[#1A1A1A]/85 bg-stone-50 px-2.5 py-0.5 text-[10px] font-bold text-zinc-700 font-mono shadow-[1px_1px_0_0_#1A1A1A]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer action row */}
                  <div className="mt-6 border-t-2 border-dashed border-[#1A1A1A]/10 pt-5">
                    {isMobile && mobileLinks ? (
                      <div className="flex flex-wrap items-center gap-2.5">
                        <a
                          href={mobileLinks.ios}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-[#1A1A1A] bg-stone-100 hover:bg-stone-200 px-4 py-2 text-xs font-bold text-[#1A1A1A] transition-all hover-target shadow-[2px_2px_0_0_#1A1A1A] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_0_#1A1A1A]"
                        >
                          <FaApple className="h-4 w-4 text-zinc-800" />
                          App Store
                        </a>
                        <a
                          href={mobileLinks.android}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-[#1A1A1A] bg-stone-100 hover:bg-stone-200 px-4 py-2 text-xs font-bold text-[#1A1A1A] transition-all hover-target shadow-[2px_2px_0_0_#1A1A1A] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_0_#1A1A1A]"
                        >
                          <FaAndroid className="h-4 w-4 text-zinc-800" />
                          Play Store
                        </a>
                      </div>
                    ) : isClickable ? (
                      <a
                        href={projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center gap-2 rounded-xl btn-sketch px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] transition-all hover-target h-10"
                      >
                        <ArrowUpRight className="h-3.5 w-3.5" />
                        Launch Site
                      </a>
                    ) : (
                      <div className="flex items-center justify-between select-none cursor-default">
                        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 font-mono">
                          Internal Release
                        </span>
                        <span className="rounded-lg border-2 border-[#1A1A1A]/30 bg-stone-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-zinc-500 font-mono">
                          Offline
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}