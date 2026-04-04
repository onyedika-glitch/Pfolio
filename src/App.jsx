import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Mail, ExternalLink, Menu, X, Layout, Zap, ArrowLeft, Download, Globe, Award, ChevronLeft, Briefcase, Code, User, GraduationCap, Phone } from 'lucide-react';
import TitleTilt from 'react-parallax-tilt';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Data Hub
// Data Hub
const ALL_PROJECTS = [
    { id: 'zentrix', title: 'Zentrix Equity', category: 'Fintech WebSocket', description: 'Real-time equity distribution and cap table platform with low-latency updates.', tech: ['Node.js', 'Socket.io', 'PostgreSQL', 'React'], live: 'https://equityapp.zentrixinnovationlab.com/', image: 'img/zentrix.png', fileName: 'zentrix.html' },
    { id: 'uhc', title: 'Unlimited Healthcare', category: 'Healthcare AI', description: 'AI-diagnostics and real-time medical platform with 20+ clinical testers.', tech: ['React', 'Capacitor', 'WebSockets', 'AI'], live: 'https://unlimitedhealthcares.com/', image: 'img/uhc.png', fileName: 'uhc.html' },
    { id: 'caremandate', title: 'CareMandate', category: 'Monorepo Stack', description: 'Enterprise Monorepo for clinical management serving high-intensity hospital workflows.', tech: ['Vite', 'TurboRepo', 'Expo', 'TypeScript'], live: 'https://caremandate.com/', image: 'img/caremandate.png', fileName: 'caremandate.html' },
    { id: 'atom', title: 'ATOM Group', category: 'AI UX', description: 'AI technology landing page with engaging UI and service highlights.', tech: ['React', 'Framer'], live: 'https://atom-landing-five.vercel.app/', image: 'img/atom.png', fileName: 'atom-group.html' },
    { id: 'handyman', title: 'Handyman NG', category: 'Marketplace', description: 'Service marketplace connecting professionals with clients.', tech: ['UX/UI'], live: 'https://handymanng.com', image: 'img/Handymann.png', fileName: 'handyman-ng.html' },
    { id: 'ilearnova', title: 'iLearnova', category: 'E-Learning', description: 'E-learning platform for 500+ students and tutors.', tech: ['Node.js', 'React'], live: 'https://ilearnovafrontend.vercel.app.com', image: 'img/ilearnova.png', fileName: 'ilearnova.html' },
    { id: 'pension', title: 'Pension App', category: 'Fintech', description: 'Secure pension management and real-time dashboards.', tech: ['Full-Stack'], live: 'https://Pensionapp.com', image: 'img/pension.png', fileName: 'pension-app.html' },
    { id: 'placebet', title: 'Placebet', category: 'Betting Engine', description: 'Full-featured sports and casino betting platform.', tech: ['Betting Engine'], live: 'https://m.placebet247.com', image: 'img/placement.png', fileName: 'placebet.html' },
    { id: 'ssabhi', title: 'SSABHI NGO', category: 'NGO Hub', description: 'Custom NGO platform with various service integrations.', tech: ['WordPress'], live: 'https://ssabhi.org', image: 'img/ssabhi.png', fileName: 'ssabhi.html' },
    { id: 'e-portal', title: 'Enugu School E-Portal', category: 'Education', description: 'Centralized school board hub for communication.', tech: ['Backend'], live: 'https://e-portal-seven.vercel.app/', image: 'img/ePortal.png', fileName: 'ePortal.html' },
    { id: 's-portal', title: 'Federal S-Portal', category: 'Education', description: 'Federal school board official update hub.', tech: ['Gov Portal'], live: 'https://s-portal.vercel.app/', image: 'img/sPortal.png', fileName: 'sPortal.html' },
    { id: 'student-board', title: 'Student Board', category: 'Bulletin Hub', description: 'Digital bulletin board for announcement sharing.', tech: ['React', 'Node'], live: 'https://student-board.onrender.com/', image: 'img/student-board.png', fileName: 'student-board.html' },
    { id: 'floorhosting', title: 'Floorhosting', category: 'Web Hosting', description: 'Web hosting control panel frontend with persistence.', tech: ['Vanilla JS'], live: 'https://floorhostings.vercel.app/', image: 'img/floorhosting.png', fileName: 'floorhosting.html' },
    { id: 'selfany', title: 'Selfany', category: 'UI Development', description: 'Dynamic React UIs that improved user engagement by 25%.', tech: ['React', 'Redux'], live: 'https://selfany.com', image: 'img/selfany.png', fileName: 'selfany.html' },
    { id: 'restaurant-ui', title: 'Restaurant Design', category: 'Figma UI', description: 'Modern restaurant landing page UI with smooth interactive flows.', tech: ['Figma'], live: 'https://www.figma.com/design/TaBElLQPletCCX5ZQ5hv9O/Restaurant-UI', image: 'img/image.png', fileName: 'restaurant-ui.html' }
];

const EXPERIENCE = [
    ...Array(1).fill({ role: 'Lead Software Engineer (Project Based)', company: 'Zentrix Equity', date: 'Feb 2026 - Present', highlights: ['Orchestrating the development of a real-time fintech platform for cap table management.', 'Implemented a high-performance WebSocket architecture (Socket.io) for live updates.', 'Engineered secure, type-safe API architectures using TypeScript and PostgreSQL.'] }),
    { role: 'Lead Software Engineer (Project Based)', company: 'Unlimited Healthcare (UHC)', date: 'Feb 2026 - Present', highlights: ['Leading end-to-end development of a high-scale healthcare platform with 10k+ users.', 'Integrated AI-driven health diagnostics and real-time medical consultation systems.', 'Directed full release cycle to Google Play Store, managing production configuration.'] },
    { role: 'Lead Software Engineer (Project Based)', company: 'CareMandate', date: 'Feb 2026 - Present', highlights: ['Orchestrated development of an enterprise clinical management system (Monorepo).', 'Synchronized web (React) and native mobile (Expo) applications to maintain data consistency.', 'Implemented highly secure and type-safe API architectures using Node.js.'] },
    { role: 'Full-Stack Developer (Remote)', company: 'iLearnova', date: 'June 2023 - Present', highlights: ['Built and maintained an e-learning platform for 500+ students and tutors.', 'Designed RESTful APIs and integrated backend services using Node.js and MySQL.', 'Led a 4-person dev team, optimizing frontend for 40% faster load times.'] },
    { role: 'Frontend Developer (Remote)', company: 'Selfany', date: 'Jan 2022 - March 2023', highlights: ['Created dynamic, responsive UIs with React.js that increased user engagement by 25%.', 'Collaborated with backend teams to integrate APIs seamlessly.', 'Conducted code reviews and implemented performance enhancements for better speed.'] },
    { role: 'Full-Stack Developer (Remote, Contract)', company: 'Pension App', date: 'Aug 2022 - Oct 2022', highlights: ['Developed secure pension management system handling sensitive financial transactions.', 'Implemented scalable backend architecture and reusable frontend components.', 'Integrated real-time dashboards to track pension growth and withdrawal history.'] },
    { role: 'Mailchimp Integration Specialist', company: 'Freelance', date: 'Nov 2021 - Present', highlights: ['Integrated Mailchimp APIs into 7+ client websites, improving email delivery by 60%.', 'Automated audience segmentation, onboarding sequences, and newsletters.', 'Reduced email bounce rates by optimizing list hygiene and workflow logic.'] },
    { role: 'Full-Stack Developer (Remote)', company: 'Dimatech IT Consultancy', date: 'Jan 2021 - April 2022', highlights: ['Built and deployed multiple full-stack projects for SMEs and startups.', 'Designed and documented REST APIs, implemented data validation and security.', 'contributed to technical documentation for long-term maintenance.'] },
    { role: 'Independent Project', company: 'School Management Dashboard', date: 'Jan 2021 - June 2021', highlights: ['Developed comprehensive school management dashboard with role-based access.', 'Implemented advanced filtering, reporting, and data visualization features.'] },
    { role: 'Full-Stack Developer', company: 'Atom Group (AI Landing Page)', date: '2021', highlights: ['Designed and developed a modern, responsive landing page for an AI technology company.', 'Created engaging UI with animated elements, service showcases, and product highlights.'] },
    { role: 'Full-Stack Developer', company: 'Enugu State School Board (E-Portal)', date: '2021', highlights: ['Developed digital hub for school community to facilitate communication and access to educational information.'] },
    { role: 'Full-Stack Developer', company: 'Federal School Board (S-Portal)', date: '2021', highlights: ['Created a one-stop portal for official announcements, academic updates, and official student information.'] },
    { role: 'Full-Stack Developer', company: 'Labile Consults', date: '2021', highlights: ['Built company website for building media brands and strategy-led marketing campaigns.'] }
];

const SKILLS = [
    { group: 'Frontend Core', items: ['React.js', 'React Native', 'Next.js', 'Angular', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'] },
    { group: 'Backend & Cloud', items: ['Node.js', 'Express', 'Laravel', 'PHP', 'Python', 'Nest.js', 'MySQL', 'MongoDB', 'AWS', 'Docker'] },
    { group: 'Leadership & Tools', items: ['Capacitor', 'Expo', 'TurboRepo (Monorepo)', 'WebSockets', 'Team Leadership', 'Project Management'] }
];

const LayoutWrapper = ({ children }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const cursorRef = useRef(null);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        const moveCursor = (e) => {
            if (cursorRef.current) gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0.1, ease: 'power2.out' });
        };
        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, [pathname]);

    return (
        <div className="mesh-gradient min-h-screen relative overflow-x-hidden font-sans">
            <div ref={cursorRef} className="custom-cursor hidden md:block" />
            <nav className="fixed w-full z-[90] py-6 bg-[#020c1b]/80 backdrop-blur-xl border-b border-white/5">
                <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                    <Link to="/" className="text-3xl font-black text-white hover:text-accent transition-all tracking-tighter">O.</Link>
                    <div className="hidden md:flex space-x-12 text-[10px] items-center text-slate-300 font-bold tracking-[0.3em] uppercase underline-offset-8 font-mono">
                        <Link to="/projects" className={`hover:text-white transition-colors ${pathname.includes('projects') ? 'text-accent underline' : ''}`}>Projects</Link>
                        <Link to="/experience" className={`hover:text-white transition-colors ${pathname.includes('experience') ? 'text-accent underline' : ''}`}>Experience</Link>
                        <Link to="/resume" className="border-2 border-accent text-accent px-8 py-3 rounded-md hover:bg-accent hover:text-background transition-all">Resume Hub</Link>
                    </div>
                    <button className="md:hidden text-accent" onClick={() => setIsNavOpen(!isNavOpen)}><Menu /></button>
                </div>
            </nav>

            <AnimatePresence>
                {isNavOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-[#020c1b] flex flex-col items-center justify-center space-y-10 text-3xl font-bold">
                        <button className="absolute top-8 right-8 text-accent" onClick={() => setIsNavOpen(false)}><X /></button>
                        <Link to="/" onClick={() => setIsNavOpen(false)} className="hover:text-accent">HOME</Link>
                        <Link to="/projects" onClick={() => setIsNavOpen(false)} className="hover:text-accent">PROJECTS</Link>
                        <Link to="/experience" onClick={() => setIsNavOpen(false)} className="hover:text-accent">EXPERIENCE</Link>
                        <Link to="/resume" onClick={() => setIsNavOpen(false)} className="hover:text-accent">RESUME</Link>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="relative z-10 min-h-screen pt-24">{children}</div>
            <footer className="py-20 text-center text-[10px] md:text-xs font-mono text-slate-600 tracking-[0.5em] md:tracking-[1em] uppercase border-t border-white/5 mx-6 md:mx-12">
                Omogo Peter Onyedika © 2026
            </footer>
        </div>
    );
};

const HomePage = () => {
    useEffect(() => {
        const sections = document.querySelectorAll('.section-reveal');
        sections.forEach((section) => {
            gsap.from(section, {
                y: 50,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                }
            });
        });

        gsap.from('.hero-reveal', {
            y: 30,
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out',
            delay: 0.2
        });
    }, []);

    return (
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
            {/* HERO SECTION */}
            <section className="min-h-[85vh] flex flex-col justify-center items-center text-center py-20">
                <p className="hero-reveal text-accent font-mono text-base md:text-xl tracking-[0.4em] uppercase mb-6 md:mb-8">Engineering Impact</p>
                <h1 className="hero-reveal text-5xl sm:text-7xl md:text-[8rem] font-black text-white leading-[1.1] mb-8 tracking-tighter hero-glow">Omogo Peter</h1>
                <h2 className="hero-reveal text-2xl sm:text-3xl md:text-5xl font-medium text-slate-200">Lead Systems & <span className="text-white">Fintech Architect.</span></h2>
                <p className="hero-reveal text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mt-10 md:mt-12 leading-relaxed">Designing high-performance clinical ecosystems and real-time financial architectures across Africa.</p>
                <div className="hero-reveal mt-12 md:mt-16 flex flex-col sm:flex-row justify-center items-center gap-6 w-full max-w-lg sm:max-w-none">
                    <Link to="/projects" className="btn-primary w-full sm:w-auto text-center px-6 py-4 md:px-10 md:py-5 text-base md:text-lg">Explore Deep Case Studies</Link>
                    <a href="https://wa.me/2349132175272" className="btn-secondary w-full sm:w-auto text-center px-6 py-4 md:px-10 md:py-5 text-base md:text-lg">Consult Enterprise</a>
                </div>
            </section>

            {/* ABOUT / SUMMARY SECTION */}
            <section className="py-20 md:py-32 section-reveal">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    <div className="lg:w-1/3">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">About Me</h2>
                        <div className="h-2 w-20 bg-accent rounded-full mb-8 md:mb-10"></div>
                        <p className="text-accent font-mono tracking-widest uppercase text-sm mb-4">Omogo Peter Onyedika</p>
                        <p className="text-slate-400">Full Stack Developer | Systems Architect</p>
                    </div>
                    <div className="lg:w-2/3">
                        <p className="text-xl md:text-2xl text-slate-200 font-medium leading-relaxed italic border-l-4 border-accent pl-6 md:pl-10 mb-8 md:mb-12">
                            "I am a result-driven Full-Stack Developer with over three years of experience building scalable, secure, and user-focused web applications."
                        </p>
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6">
                            Proficient in both frontend and backend development, with strong expertise in JavaScript frameworks (React.js, Next.js), backend technologies (Laravel, Node.js), and API integrations. Demonstrates excellent problem-solving abilities, team leadership, and a passion for delivering impactful digital solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 text-slate-300 font-mono text-xs md:text-sm mt-10 md:mt-12">
                            <span className="flex items-center space-x-3"><Mail size={18} className="text-accent" /> <span className="break-all">omogopeter48@gmail.com</span></span>
                            <span className="flex items-center space-x-3"><Phone size={18} className="text-accent" /> <span>+2349132175272</span></span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="section-divider"></div>

            {/* TECH SKILLS MATRIX */}
            <section className="py-20 md:py-32 section-reveal">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-12 md:mb-20 text-center uppercase tracking-tighter">Technical Power Stack</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                    {SKILLS.map((stack, i) => (
                        <div key={i} className="glass-card p-8 md:p-12 rounded-2xl group">
                            <div className="flex items-center space-x-4 mb-6 md:mb-10">
                                <Code className="text-accent" size={32} />
                                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors">{stack.group}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2 md:gap-3">
                                {stack.items.map((item, ii) => (
                                    <span key={ii} className="bg-white/5 border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-md text-slate-300 text-xs md:text-sm font-mono hover:bg-accent/10 hover:border-accent transition-all cursor-default">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="section-divider"></div>

            {/* EDUCATION SECTION */}
            <section className="py-20 md:py-32 section-reveal">
                <div className="max-w-4xl mx-auto glass-card p-8 md:p-16 rounded-3xl border-l-8 border-l-accent text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6 mb-8 md:mb-10">
                        <GraduationCap size={48} className="text-accent" />
                        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">Academic Foundation</h2>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-200">Software Engineering</h3>
                        <p className="text-lg md:text-xl text-accent font-mono uppercase tracking-[0.2em] leading-relaxed">Federal University of Technology, Owerri (FUTO)</p>
                        <p className="text-slate-400 font-bold text-base md:text-lg">Class of 2022 - 2027</p>
                    </div>
                </div>
            </section>

            <div className="section-divider"></div>

            {/* CALL TO ACTION */}
            <section className="py-20 md:py-32 text-center section-reveal">
                <div className="max-w-4xl mx-auto">
                    <Award size={48} className="text-accent mx-auto mb-8 md:mb-10" />
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 md:mb-8 tracking-tighter uppercase leading-tight">Elevate Your Next<br className="hidden sm:block" />Enterprise Infrastructure.</h2>
                    <p className="text-lg md:text-2xl text-slate-400 mb-10 md:mb-16 leading-relaxed px-4">From AI diagnostics to fintech equity hubs, I engineer the systems that power modern Africa.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-8 px-6">
                        <a href="https://wa.me/2349132175272" className="btn-primary py-4 md:py-5">Consult On Enterprise</a>
                        <Link to="/resume" className="btn-secondary py-4 md:py-5">Technical Resume Dossier</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

const ProjectsPage = () => (
    <section className="py-24 container mx-auto px-6 md:px-12 lg:px-24 min-h-screen">
        <div className="flex flex-col sm:flex-row sm:items-center space-y-6 sm:space-y-0 sm:space-x-6 mb-16 md:mb-24 section-reveal">
            <Link to="/" className="text-accent hover:text-white transition-colors group self-start sm:self-auto">
                <ChevronLeft size={32} className="md:size-12 group-hover:-translate-x-2 transition-transform" />
            </Link>
            <div>
                <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase">Global Gallery</h2>
                <p className="text-slate-400 font-mono text-xs md:text-base tracking-widest uppercase mt-2">Chronicle of 15+ Engineered Platforms</p>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {ALL_PROJECTS.map((p) => (
                <TitleTilt key={p.id} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.03} className="h-full">
                    <div className="glass-card rounded-3xl overflow-hidden min-h-[500px] md:h-[550px] flex flex-col group relative border-white/5">
                        <div className="h-48 sm:h-64 md:h-2/3 overflow-hidden relative">
                            <img src={"/" + p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
                            <div className="absolute inset-0 bg-[#020c1b]/60 group-hover:bg-transparent transition-all pointer-events-none" />
                        </div>
                        <div className="p-6 md:p-10 flex-grow flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-center mb-4 md:mb-6">
                                    <span className="bg-accent/10 text-accent font-mono text-[9px] md:text-[10px] px-2 py-0.5 md:px-3 md:py-1 rounded-full uppercase font-bold">{p.category}</span>
                                    <div className="flex space-x-3 md:space-x-4">
                                        <a href={p.live} target="_blank" className="text-slate-300 hover:text-white transition-colors" title="Live Site"><Globe size={18} md:size={20} /></a>
                                        <a href={"/" + p.fileName} className="text-accent hover:text-white transition-colors" title="View Details"><ExternalLink size={18} md:size={20} /></a>
                                    </div>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-accent transition-colors leading-tight"><a href={"/" + p.fileName}>{p.title}</a></h3>
                                <p className="text-slate-400 text-[10px] leading-relaxed line-clamp-2 uppercase tracking-widest opacity-60">{p.tech.join(' • ')}</p>
                            </div>
                            <a href={"/" + p.fileName} className="btn-secondary w-full text-center mt-6 md:mt-8 cursor-pointer hover:bg-accent hover:text-background transition-all font-black text-[10px] md:text-xs py-3 md:py-4">
                                View Case Study
                            </a>
                        </div>
                    </div>
                </TitleTilt>
            ))}
        </div>
    </section>
);

const ProjectDetailPage = () => {
    const { id } = useParams();
    const project = ALL_PROJECTS.find(p => p.id === id);
    const cursorRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) return <Navigate to="/projects" replace />;

    return (
        <div className="min-h-screen bg-[#020c1b] py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto">
                <Link to="/projects" className="inline-flex items-center space-x-2 text-accent hover:text-white transition-colors mb-12 font-mono uppercase tracking-widest text-sm">
                    <ChevronLeft size={20} /> <span>Back to Infinity Gallery</span>
                </Link>

                <div className="mb-12 md:mb-20">
                    <p className="text-accent font-mono text-xs md:text-sm tracking-[0.4em] uppercase mb-4">{project.category}</p>
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter mb-6 md:mb-8 uppercase leading-tight">{project.title}</h1>
                    <p className="text-lg md:text-2xl text-slate-400 leading-relaxed max-w-2xl">{project.description}</p>

                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-10 md:mt-12">
                        <a href={project.live} target="_blank" className="btn-primary w-full sm:w-auto px-12 py-4 md:py-5 text-center">Visit Live Node</a>
                        <a href="https://wa.me/2349132175272" className="btn-secondary w-full sm:w-auto px-12 py-4 md:py-5 text-center">Consult on Similar Stack</a>
                    </div>
                </div>

                <div className="glass-card rounded-3xl overflow-hidden mb-20 aspect-video relative group">
                    <img src={"/" + project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 ring-1 ring-white/10 ring-inset rounded-3xl" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6 md:mb-8">Executive Summary</h2>
                            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium">
                                {project.longDescription || project.description}
                            </p>
                        </section>

                        {project.highlights && (
                            <section>
                                <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6 md:mb-8">Technical Milestones</h2>
                                <div className="space-y-4 md:space-y-6">
                                    {project.highlights.map((h, i) => (
                                        <div key={i} className="flex items-start space-x-3 md:space-x-4 text-slate-300 text-base md:text-lg">
                                            <Zap size={20} md:size={24} className="text-accent shrink-0 mt-1" />
                                            <span className="leading-relaxed">{h}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    <div className="space-y-12">
                        <section>
                            <h3 className="text-accent font-mono tracking-widest uppercase text-sm mb-8">Engineered Stack</h3>
                            <div className="flex flex-wrap gap-3">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="bg-white/5 border border-white/10 px-4 py-2 rounded-md text-slate-300 text-xs font-mono">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ExperiencePage = () => (
    <section className="py-24 container mx-auto px-6 md:px-12 lg:px-24 min-h-screen">
        <div className="flex flex-col sm:flex-row sm:items-center space-y-6 sm:space-y-0 sm:space-x-6 mb-16 md:mb-28 section-reveal">
            <Link to="/" className="text-accent hover:text-white transition-colors group self-start sm:self-auto">
                <ChevronLeft size={32} className="md:size-12 group-hover:-translate-x-2 transition-transform" />
            </Link>
            <div>
                <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-tight">Professional Odyssey</h2>
                <p className="text-slate-400 font-mono text-xs md:text-base tracking-widest uppercase mt-2">Experience Narrative (2021-2026)</p>
            </div>
        </div>
        <div className="max-w-4xl mx-auto relative pl-8 border-l-2 border-white/10 space-y-32">
            {EXPERIENCE.map((exp, i) => (
                <div key={i} className="relative">
                    <div className="absolute -left-[41px] w-6 h-6 rounded-full bg-[#020c1b] border-4 border-accent shadow-[0_0_20px_rgba(100,255,218,0.5)] mt-3 md:mt-4" />
                    <div className="flex flex-col mb-6 md:mb-8">
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight uppercase tracking-tighter">{exp.role}</h3>
                        <p className="text-xl sm:text-2xl font-mono text-accent mt-2 tracking-widest">@ {exp.company}</p>
                        <p className="text-slate-500 font-mono text-xs md:text-sm mt-3 md:mt-4 tracking-[0.3em] uppercase">{exp.date}</p>
                    </div>
                    <div className="flex flex-col space-y-4 md:space-y-6">
                        {exp.highlights.map((h, hi) => (
                            <div key={hi} className="flex items-start space-x-3 md:space-x-4 text-slate-300 text-lg md:text-xl leading-relaxed">
                                <Zap size={20} md:size={24} className="text-accent shrink-0 mt-1" />
                                <span>{h}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
);

const ResumePage = () => (
    <section className="py-20 md:py-24 container mx-auto px-6 md:px-12 min-h-[80vh] flex flex-col justify-center items-center text-center">
        <div className="max-w-4xl mx-auto glass-card p-10 md:p-24 rounded-3xl w-full border-white/5">
            <Award size={64} md:size={80} className="text-accent mx-auto mb-8 md:mb-10" />
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 md:mb-8 tracking-tighter uppercase leading-tight">Leadership Dossier</h2>
            <p className="text-lg md:text-2xl text-slate-400 mb-12 md:mb-16 leading-relaxed max-w-2xl mx-auto font-medium px-4">
                Chronicling 5+ years of engineering large-scale clinical, fintech, and governmental architectures across Nigeria and Africa.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-10 px-6">
                <a href="resume.html" className="btn-primary flex items-center justify-center space-x-4 py-4 md:py-5">
                    <Download size={20} md:size={24} /><span>Secure PDF Hub</span>
                </a>
                <Link to="/" className="btn-secondary flex items-center justify-center space-x-4 font-black py-4 md:py-5">
                    <ArrowLeft size={20} md:size={24} /><span>Return Home</span>
                </Link>
            </div>
        </div>
    </section>
);

export default function App() {
    return (
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <LayoutWrapper>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/index.html" element={<Navigate to="/" replace />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/projects/:id" element={<ProjectDetailPage />} />
                    <Route path="/project.html" element={<ProjectsPage />} />
                    <Route path="/experience" element={<ExperiencePage />} />
                    <Route path="/experience.html" element={<ExperiencePage />} />
                    <Route path="/resume" element={<ResumePage />} />
                    <Route path="/resume.html" element={<ResumePage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </LayoutWrapper>
        </Router>
    );
}
