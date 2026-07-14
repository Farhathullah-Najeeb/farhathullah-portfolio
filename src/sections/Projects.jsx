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
    <section id="projects" className="py-28 px-6 bg-transparent relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex items-end justify-between mb-16">
          <div className="space-y-2">
            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white heading-display tracking-tight">
              Featured Work
            </h2>
          </div>

          <a
            href="https://github.com/Farhathullah-Najeeb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold text-zinc-400 hover:text-white uppercase tracking-wider transition-colors duration-300 group hover-target"
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

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.55, delay: (idx % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={isClickable ? { y: -6 } : {}}
                className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-[#16171a] border border-white/5 hover:border-white/15 transition-colors duration-500 shadow-[0_30px_70px_rgba(0,0,0,0.5)]"
              >
                {/* Image */}
                <div className="relative aspect-video w-full overflow-hidden">
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
                        <div className="flex h-full w-full flex-col items-center justify-center bg-dot-pattern p-8 text-center">
                          <span className="text-glow mb-2 text-4xl">💻</span>
                          <span className="font-sans text-sm font-bold uppercase tracking-widest text-white">
                            {project.name}
                          </span>
                        </div>
                      )}
                    </a>
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-dot-pattern p-8 text-center select-none cursor-default">
                      <span className="text-glow mb-2 text-4xl">💻</span>
                      <span className="font-sans text-sm font-bold uppercase tracking-widest text-zinc-500">
                        {project.name}
                      </span>
                    </div>
                  )}

                  {/* Status badge */}
                  <div className="pointer-events-none absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    <span className={`h-1.5 w-1.5 rounded-full ${isClickable ? 'bg-[#D4AF37]' : 'bg-zinc-500'}`} />
                    {isClickable ? badgeLabel : 'OFFLINE'}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]/70">
                      {isMobile ? <Smartphone className="h-3 w-3" /> : <Globe className="h-3 w-3" />}
                      {isMobile ? 'Mobile App' : 'Website'}
                    </div>

                    <h3 className="text-lg sm:text-xl font-extrabold text-white heading-display tracking-wide group-hover:text-zinc-200 transition-colors duration-300">
                      {isClickable ? (
                        <a
                          href={projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover-target hover:underline decoration-white/20"
                        >
                          {project.name}
                        </a>
                      ) : (
                        <span className="cursor-default select-none">{project.name}</span>
                      )}
                    </h3>

                    <p className="text-xs sm:text-[13px] leading-relaxed text-zinc-400 font-medium">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/5 bg-white/[0.02] px-2.5 py-1 text-[10px] font-semibold text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer action row */}
                  <div className="mt-6 border-t border-white/5 pt-5">
                    {isMobile && mobileLinks ? (
                      <div className="flex flex-wrap items-center gap-2.5">
                        <a
                          href={mobileLinks.ios}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-all hover:border-white/20 hover:bg-white/10 hover-target"
                        >
                          <FaApple className="h-4 w-4 text-zinc-300" />
                          App Store
                        </a>
                        <a
                          href={mobileLinks.android}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-all hover:border-white/20 hover:bg-white/10 hover-target"
                        >
                          <FaAndroid className="h-4 w-4 text-zinc-300" />
                          Play Store
                        </a>
                      </div>
                    ) : isClickable ? (
                      <a
                        href={projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-transform hover:scale-[1.02] hover-target"
                      >
                        <ArrowUpRight className="h-3.5 w-3.5" />
                        Launch Site
                      </a>
                    ) : (
                      <div className="flex items-center justify-between select-none cursor-default">
                        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                          Internal Release
                        </span>
                        <span className="rounded-full border border-white/5 bg-white/[0.02] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
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