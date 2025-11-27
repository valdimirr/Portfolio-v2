import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import Timeline from "@/components/Timeline";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Database, IdCard, Layout as LayoutIcon, Mail, Terminal } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Home() {
  const skillsRef = useScrollReveal();
  const projectsRef = useScrollReveal();
  const journeyRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  const projects = [
    {
      title: "Oficina Mecânica Elétrica",
      description: "Site para para apresentar Serviços, História da empresa e Painel administrativo para gestão de produtos.",
      tags: ["React", "Typescript", "Tailwind", "PHP", "MySQL"],
      image: "/cma-neon.png",
      demoUrl: "https://cmamotores.com/",
      status: "completed" as const
    },
    {
      title: "Oficina Mecânica Automotiva",
      description: "Site para mostragem de oficina mecânica contendo informações de serviços e da empresa",
      tags: ["HTML", "CSS", "Typescript", "Vercel", "Hobby"],
      image: "/garage-neon.png",
      demoUrl: "https://garage41.vercel.app/",
      repoUrl: "https://github.com/valdimirr/garage41",
      status: "active" as const
    }
    // {
    //   title: "API RESTful de Tarefas",
    //   description: "Backend robusto para gerenciamento de tarefas com autenticação JWT, validação de dados e documentação Swagger.",
    //   tags: ["Node.js", "Express", "MongoDB", "Docker"],
    //   image: "/project-1.jpg", // Reusing for demo
    //   repoUrl: "#",
    //   status: "completed" as const
    // }
  ];

  const journey = [
    {
      year: "2023 - Presente",
      title: "Desenvolvedor Jr",
      company: "Freelancer / Projetos Pessoais / SENAI",
      description: "Desenvolvendo soluções web completas, focando em React no frontend e Node.js no backend. Aprimorando habilidades em arquitetura de software."
    },
    {
      year: "2021 - 2023",
      title: "Atuação na área de TI",
      company: "Lasalle",
      description: "Imersão intensiva na área e oportunidade de desenvolvimento web (LMS). Aprendizado prático de HTML, CSS, JavaScript, PHP, e banco de dados."
    },
    {
      year: "2016 - 2018",
      title: "Início dos Estudos",
      company: "Técnico de informática",
      description: "Primeiro contato com lógica de programação e algoritmos. Desenvolvimento mobile e sites."
    }
  ];

  const skills = [
    { name: "Frontend", icon: LayoutIcon, items: ["React", "TypeScript", "Tailwind CSS", "HTML"] },
    { name: "Backend", icon: Terminal, items: ["Node.js", "Express", "Java", "Python"] },
    { name: "Database", icon: Database, items: ["MySQL", "MongoDB", "Drizzle"] },
    { name: "Tools", icon: Code2, items: ["Git", "Docker", "AWS", "Oracle Cloud", "Vercel"] }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>

        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 animate-in slide-in-from-left duration-1000 fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-primary-foreground">Disponível para novos projetos</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight">
              Criando experiências <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">digitais imersivas</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Olá, sou <strong className="text-foreground">Valdimir Ferraz Fogaça</strong>. 
              Um desenvolvedor Full Stack JR apaixonado por construir interfaces modernas e sistemas robustos.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25">
                <a href="#projects">
                  Ver Projetos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm">
              <a href="/curriculo.pdf" download>
                Baixar CV
              </a>
            </Button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end animate-in slide-in-from-right duration-1000 fade-in delay-200">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-purple-500/20 animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Avatar Container */}
              <div className="absolute inset-8 rounded-full overflow-hidden glass-panel p-2">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-purple-500/20">
                  <img 
                    src="/eu-toga.jpeg" 
                    alt="Valdimir Ferraz Fogaça" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              
              {/* Floating Tech Badges */}
              <div className="absolute -top-4 -right-4 p-3 glass-panel rounded-2xl animate-bounce delay-700">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 p-3 glass-panel rounded-2xl animate-bounce delay-1000">
                <Database className="h-6 w-6 text-purple-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative z-10" ref={skillsRef}>
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors">
                <skill.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-3">{skill.name}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative" ref={projectsRef}>
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Projetos em Destaque</h2>
              <p className="text-muted-foreground max-w-lg">
                Uma seleção dos meus trabalhos recentes, incluindo projetos pessoais e colaborações profissionais.
              </p>
            </div>
            <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/10">
              Ver todos os projetos (em breve) <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-24 relative bg-black/20" ref={journeyRef}>
        <div className="container grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Minha Jornada</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Minha trajetória na tecnologia é marcada pela curiosidade constante e pelo desejo de resolver problemas reais através do código. Cada etapa dessa jornada contribuiu para minha formação como profissional completo.
            </p>
            <div className="glass-panel p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
              <h3 className="text-xl font-bold mb-4 text-primary">Objetivo Atual</h3>
              <p className="text-sm text-muted-foreground">
                Atualmente focado em aprofundar conhecimentos em arquitetura de software escalável e contribuir em projetos desafiadores que impactem positivamente a vida das pessoas.
              </p>
            </div>
          </div>
          
          <div>
            <Timeline items={journey} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="about" className="py-24 relative overflow-hidden" ref={ctaRef}>
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Vamos construir algo incrível?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
            Estou sempre aberto a novas oportunidades e parcerias. Se você tem um projeto em mente ou quer apenas trocar uma ideia sobre tecnologia, entre em contato.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 h-12 rounded-full shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
            <Mail className="mr-2 h-5 w-5" /> Entrar em Contato
          </Button>
        </div>
      </section>
    </Layout>
  );
}
