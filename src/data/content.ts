export type Lang = "pt" | "en" | "es";

export const content = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      tech: "Tecnologias",
      projects: "Projetos",
      experience: "Experiência",
      certifications: "Cursos",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, eu sou",
      title: "Engenheiro de Software",
      subtitle: "Engenharia de Software · PUC Minas",
      tagline:
        "Foco em resolver problemas reais com tecnologia — do backend robusto à interface limpa.",
      cta1: "Ver projetos",
      cta2: "Entrar em contato",
      cv: "Ver currículo",
      available: "Disponível para oportunidades",
    },
    about: {
      label: "Sobre mim",
      title: "Construindo soluções com propósito",
      p1: "Desenvolvedor Full Stack com mais de 3 anos de experiência em aplicações web, APIs REST e sistemas de automação.",
      p2: "Proficiente em .NET/C#, React, Python, SQL e TypeScript, com experiência prática em nuvem com Azure. Foco em arquitetura limpa, microsserviços escaláveis e entrega de software de alta qualidade em ambientes ágeis.",
      p3: "Graduando em Engenharia de Software pela PUC Minas, com experiência prática no desenvolvimento de sistemas em produção. Atuo aplicando boas práticas de engenharia e arquitetura para construir soluções escaláveis, performáticas e orientadas a impacto.",
      stats: [
        { value: "3+", label: "Anos de experiência" },
        { value: "20+", label: "Tecnologias" },
        { value: "2027", label: "Formação" },
      ],
    },
    tech: {
      label: "Stack",
      title: "Tecnologias que utilizo",
      subtitle: "Ferramentas com que desenvolvo soluções no dia a dia.",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        database: "Banco de Dados",
        testing: "Testes Unitários",
        tools: "Ferramentas & Outros",
      },
    },
    projects: {
      label: "Portfólio",
      title: "Projetos selecionados",
      subtitle: "Cada projeto resolve um problema concreto. Veja como.",
      problem: "Problema",
      solution: "Solução",
      features: "Funcionalidades",
      impact: "Destaques",
      code: "Código",
      demo: "Demo",
      details: "Ver detalhes",
      back: "Voltar para projetos",
      next: "Próximo projeto",
      prev: "Projeto anterior",
      context: "Contexto",
      architecture: "Arquitetura",
      decisions: "Decisões técnicas",
      challenges: "Desafios",
      results: "Resultados",
      tech: "Tecnologias",
    },
    experience: {
      label: "Trajetória",
      title: "Experiência prática",
      subtitle: "Projetos acadêmicos e pessoais que moldam minha capacidade técnica.",
    },
    education: {
      label: "Formação",
      title: "Educação",
      degree: "Engenharia de Software",
      school: "PUC Minas",
      period: "2024 — 2027 (em andamento)",
      semester: "4º semestre",
      currently: "Estudando atualmente",
      currentTopics: [
        "Estruturas de dados avançadas",
        "Arquitetura de software",
        "Padrões de projeto",
        "Cloud & DevOps",
      ],
    },
    contact: {
      label: "Vamos conversar",
      title: "Entre em contato",
      subtitle:
        "Aberto a oportunidades em backend e full stack, desenvolvendo soluções escaláveis, performáticas e de alto impacto.",
      email: "Enviar email",
      cta: "Entrar em contato",
      form: {
        title: "Envie uma mensagem",
        name: "Nome",
        namePh: "Seu nome completo",
        emailLabel: "Email",
        emailPh: "seu@email.com",
        message: "Mensagem",
        messagePh: "Conte sobre a oportunidade ou projeto...",
        send: "Enviar mensagem",
        sending: "Enviando...",
        success: "Mensagem enviada! Retorno em breve.",
        error: "Erro ao enviar. Tente novamente ou entre em contato pelo e-mail abaixo.",
        configMissing: "Formulário não configurado. Use o email direto abaixo.",
        errors: {
          nameMin: "Nome muito curto",
          nameMax: "Nome muito longo",
          emailInvalid: "Email inválido",
          messageMin: "Mensagem muito curta (mín. 10 caracteres)",
          messageMax: "Mensagem muito longa",
        },
      },
    },
    cvModal: {
      title: "Currículo",
      download: "Baixar PDF",
      lang: "Idioma",
      close: "Fechar",
      preview: "Pré-visualização",
    },
    certifications: {
      label: "Cursos",
      title: "Certificações & Cursos",
      subtitle: "Aprendizado prático com foco em habilidades aplicáveis no mundo real.",
      viewCertificate: "Ver Certificado",
    },
    languages: {
      label: "Idiomas",
      items: [
        { name: "Português", level: "Nativo", flag: "BR", context: "Língua nativa" },
        {
          name: "Inglês",
          level: "Fluente",
          flag: "US",
          context: "Certificado Cultura Inglesa · documentação técnica e comunicação",
        },
        {
          name: "Espanhol",
          level: "Avançado",
          flag: "ES",
          context: "Comunicação profissional e leitura técnica",
        },
      ],
    },
    footer: {
      built: "Desenvolvido por Bernardo Rodrigues",
      rights: "Todos os direitos reservados",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      tech: "Tech",
      projects: "Projects",
      experience: "Experience",
      certifications: "Courses",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      title: "Software Engineer",
      subtitle: "Software Engineering · PUC Minas",
      tagline:
        "Focused on solving real problems with technology — from robust backends to clean interfaces.",
      cta1: "View projects",
      cta2: "Get in touch",
      cv: "View résumé",
      available: "Available for opportunities",
    },
    about: {
      label: "About me",
      title: "Building solutions with purpose",
      p1: "Full Stack Developer with 3+ years of experience building web applications, REST APIs and automation systems.",
      p2: "Proficient in .NET/C#, React, Python, SQL and TypeScript, with hands-on cloud experience on Azure. Focused on clean architecture, scalable microservices and delivering high-quality software in agile environments.",
      p3: "Software Engineering student at PUC Minas, with hands-on experience shipping production systems. I apply solid engineering practices and architecture principles to build scalable, performant and impact-driven solutions.",
      stats: [
        { value: "3+", label: "Years of experience" },
        { value: "20+", label: "Technologies" },
        { value: "2027", label: "Graduation" },
      ],
    },
    tech: {
      label: "Stack",
      title: "Technologies I work with",
      subtitle: "Tools I use to ship solutions every day.",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        database: "Database",
        testing: "Unit Testing",
        tools: "Tools & Others",
      },
    },
    projects: {
      label: "Portfolio",
      title: "Selected projects",
      subtitle: "Each project solves a concrete problem. Here's how.",
      problem: "Problem",
      solution: "Solution",
      features: "Features",
      impact: "Highlights",
      code: "Code",
      demo: "Demo",
      details: "View details",
      back: "Back to projects",
      next: "Next project",
      prev: "Previous project",
      context: "Context",
      architecture: "Architecture",
      decisions: "Technical decisions",
      challenges: "Challenges",
      results: "Results",
      tech: "Technologies",
    },
    experience: {
      label: "Journey",
      title: "Hands-on experience",
      subtitle: "Academic and personal projects shaping my technical skills.",
    },
    education: {
      label: "Education",
      title: "Education",
      degree: "Software Engineering",
      school: "PUC Minas",
      period: "2024 — 2027 (in progress)",
      semester: "4th semester",
      currently: "Currently studying",
      currentTopics: [
        "Advanced data structures",
        "Software architecture",
        "Design patterns",
        "Cloud & DevOps",
      ],
    },
    contact: {
      label: "Let's talk",
      title: "Get in touch",
      subtitle:
        "Open to backend and full stack opportunities, building scalable, performant and high-impact solutions.",
      email: "Send email",
      cta: "Get in touch",
      form: {
        title: "Send a message",
        name: "Name",
        namePh: "Your full name",
        emailLabel: "Email",
        emailPh: "you@email.com",
        message: "Message",
        messagePh: "Tell me about the opportunity or project...",
        send: "Send message",
        sending: "Sending...",
        success: "Message sent! I'll get back to you soon.",
        error: "Failed to send. Try again or use the direct email below.",
        configMissing: "Form not configured. Use the direct email below.",
        errors: {
          nameMin: "Name too short",
          nameMax: "Name too long",
          emailInvalid: "Invalid email",
          messageMin: "Message too short (min. 10 characters)",
          messageMax: "Message too long",
        },
      },
    },
    cvModal: {
      title: "Résumé",
      download: "Download PDF",
      lang: "Language",
      close: "Close",
      preview: "Preview",
    },
    certifications: {
      label: "Courses",
      title: "Certifications & Courses",
      subtitle: "Hands-on learning focused on real-world applicable skills.",
      viewCertificate: "View Certificate",
    },
    languages: {
      label: "Languages",
      items: [
        { name: "Portuguese", level: "Native", flag: "BR", context: "Native language" },
        {
          name: "English",
          level: "Fluent",
          flag: "US",
          context: "Cultura Inglesa certificate · technical documentation and communication",
        },
        {
          name: "Spanish",
          level: "Advanced",
          flag: "ES",
          context: "Professional communication and technical reading",
        },
      ],
    },
    footer: { built: "Built by Bernardo Rodrigues", rights: "All rights reserved" },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      tech: "Tecnologías",
      projects: "Proyectos",
      experience: "Experiencia",
      certifications: "Cursos",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      title: "Ingeniero de Software",
      subtitle: "Ingeniería de Software · PUC Minas",
      tagline:
        "Enfocado en resolver problemas reales con tecnología — del backend robusto a la interfaz limpia.",
      cta1: "Ver proyectos",
      cta2: "Contactar",
      cv: "Ver CV",
      available: "Disponible para oportunidades",
    },
    about: {
      label: "Sobre mí",
      title: "Construyendo soluciones con propósito",
      p1: "Desarrollador Full Stack con más de 3 años de experiencia en aplicaciones web, APIs REST y sistemas de automatización.",
      p2: "Competente en .NET/C#, React, Python, SQL y TypeScript, con experiencia práctica en la nube con Azure. Enfocado en arquitectura limpia, microservicios escalables y entrega de software de alta calidad en entornos ágiles.",
      p3: "Estudiante de Ingeniería de Software en PUC Minas, con experiencia práctica desarrollando sistemas en producción. Aplico buenas prácticas de ingeniería y arquitectura para construir soluciones escalables, performantes y orientadas al impacto.",
      stats: [
        { value: "3+", label: "Años de experiencia" },
        { value: "20+", label: "Tecnologías" },
        { value: "2027", label: "Graduación" },
      ],
    },
    tech: {
      label: "Stack",
      title: "Tecnologías que utilizo",
      subtitle: "Herramientas con las que desarrollo soluciones cada día.",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        database: "Base de datos",
        testing: "Pruebas Unitarias",
        tools: "Herramientas y otros",
      },
    },
    projects: {
      label: "Portafolio",
      title: "Proyectos seleccionados",
      subtitle: "Cada proyecto resuelve un problema concreto. Mira cómo.",
      problem: "Problema",
      solution: "Solución",
      features: "Funcionalidades",
      impact: "Destacados",
      code: "Código",
      demo: "Demo",
      details: "Ver detalles",
      back: "Volver a proyectos",
      next: "Siguiente proyecto",
      prev: "Proyecto anterior",
      context: "Contexto",
      architecture: "Arquitectura",
      decisions: "Decisiones técnicas",
      challenges: "Desafíos",
      results: "Resultados",
      tech: "Tecnologías",
    },
    experience: {
      label: "Trayectoria",
      title: "Experiencia práctica",
      subtitle: "Proyectos académicos y personales que moldean mi capacidad técnica.",
    },
    education: {
      label: "Formación",
      title: "Educación",
      degree: "Ingeniería de Software",
      school: "PUC Minas",
      period: "2024 — 2027 (en curso)",
      semester: "4º semestre",
      currently: "Estudiando actualmente",
      currentTopics: [
        "Estructuras de datos avanzadas",
        "Arquitectura de software",
        "Patrones de diseño",
        "Cloud y DevOps",
      ],
    },
    contact: {
      label: "Hablemos",
      title: "Contáctame",
      subtitle:
        "Abierto a oportunidades en backend y full stack, desarrollando soluciones escalables, performantes y de alto impacto.",
      email: "Enviar email",
      cta: "Contactar",
      form: {
        title: "Envía un mensaje",
        name: "Nombre",
        namePh: "Tu nombre completo",
        emailLabel: "Email",
        emailPh: "tu@email.com",
        message: "Mensaje",
        messagePh: "Cuéntame sobre la oportunidad o proyecto...",
        send: "Enviar mensaje",
        sending: "Enviando...",
        success: "¡Mensaje enviado! Responderé pronto.",
        error: "Error al enviar. Intenta de nuevo o usa el email directo abajo.",
        configMissing: "Formulario no configurado. Usa el email directo abajo.",
        errors: {
          nameMin: "Nombre muy corto",
          nameMax: "Nombre muy largo",
          emailInvalid: "Email inválido",
          messageMin: "Mensaje muy corto (mín. 10 caracteres)",
          messageMax: "Mensaje muy largo",
        },
      },
    },
    cvModal: {
      title: "Currículum",
      download: "Descargar PDF",
      lang: "Idioma",
      close: "Cerrar",
      preview: "Vista previa",
    },
    certifications: {
      label: "Cursos",
      title: "Certificaciones & Cursos",
      subtitle: "Aprendizaje práctico enfocado en habilidades aplicables al mundo real.",
      viewCertificate: "Ver Certificado",
    },
    languages: {
      label: "Idiomas",
      items: [
        { name: "Portugués", level: "Nativo", flag: "BR", context: "Lengua nativa" },
        {
          name: "Inglés",
          level: "Fluido",
          flag: "US",
          context: "Certificado Cultura Inglesa · documentación técnica y comunicación",
        },
        {
          name: "Español",
          level: "Avanzado",
          flag: "ES",
          context: "Comunicación profesional y lectura técnica",
        },
      ],
    },
    footer: {
      built: "Desarrollado por Bernardo Rodrigues",
      rights: "Todos los derechos reservados",
    },
  },
} as const;

// ============================================================
// PROJETOS — PT é fonte da verdade. EN/ES espelham fielmente.
// ============================================================
export type ProjectDetail = {
  slug: string;
  title: string;
  problem: string;
  solution: string;
  features: string[];
  impact: string[];
  context: string;
  architecture: string;
  decisions: string[];
  challenges: string[];
  results: string[];
};

export const projectsData = (lang: Lang): ProjectDetail[] => {
  const data: Record<Lang, ProjectDetail[]> = {
    pt: [
      {
        slug: "so-limpeza-backend",
        title: "Só Limpeza — Backend",
        problem:
          "E-commerce precisava de um backend modular, seguro e escalável, capaz de suportar checkout transacional sem inconsistências.",
        solution:
          "API REST em NestJS + Prisma + PostgreSQL com arquitetura modular, versionamento, autenticação JWT por roles e checkout idempotente.",
        features: [
          "API versionada (/api/v1)",
          "JWT com roles + rate limit",
          "Cache em Redis / memória",
          "Checkout transacional idempotente",
          "Documentação Swagger",
        ],
        impact: [
          "Arquitetura modular pronta para escalar",
          "Checkout seguro contra duplicidade",
          "Testes unitários garantindo confiabilidade",
        ],
        context:
          "Backend de e-commerce com foco em arquitetura modular, segurança, escalabilidade e operações financeiras confiáveis.",
        architecture:
          "NestJS organizado por domínios (módulos). Prisma como ORM tipado sobre PostgreSQL. Camada de serviços isolada de controllers, DTOs validados com class-validator, cache híbrido Redis/memória e Docker para padronização de ambiente.",
        decisions: [
          "NestJS pela estrutura modular e DI nativo",
          "Prisma por type-safety e migrations limpas",
          "Idempotência no checkout para evitar cobranças duplicadas",
          "Versionamento de API desde o dia zero",
          "Swagger gerado automaticamente a partir dos DTOs",
        ],
        challenges: [
          "Garantir consistência transacional no checkout sob concorrência",
          "Definir estratégia de cache sem invalidação inconsistente",
          "Modelar permissões por role sem acoplar à camada HTTP",
        ],
        results: [
          "API estável e documentada",
          "Cobertura de testes nas regras críticas",
          "Base sólida para evolução para microsserviços",
        ],
      },
      {
        slug: "appsupergestao",
        title: "AppSuperGestão",
        problem:
          "Pequenas e médias empresas precisavam de um ERP enxuto para centralizar cadastros, vendas e operação diária.",
        solution:
          "Sistema web de gestão empresarial em Laravel com módulos de produtos, clientes, vendas e usuários, focado em produtividade e clareza.",
        features: [
          "Módulos de produtos, clientes e vendas",
          "Autenticação e níveis de acesso",
          "Painel administrativo",
          "Relatórios operacionais",
        ],
        impact: [
          "Centraliza operações em um único sistema",
          "Reduz dependência de planilhas",
          "Acelera o fluxo de cadastro e consulta",
        ],
        context:
          "Sistema web de gestão empresarial pensado para PMEs que ainda controlavam o negócio em planilhas e arquivos soltos.",
        architecture:
          "MVC do Laravel com Eloquent ORM. Views em Blade com componentes reutilizáveis. Camada de Services para regras de negócio e Form Requests para validação.",
        decisions: [
          "Laravel pelo ecossistema maduro e produtividade",
          "Blade ao invés de SPA para simplicidade e SEO",
          "Eloquent com eager loading para evitar N+1",
          "MySQL pela facilidade de hospedagem",
        ],
        challenges: [
          "Modelar relações entre módulos sem acoplamento excessivo",
          "Controle de permissões granular por usuário",
          "Manter performance com crescimento da base",
        ],
        results: [
          "Sistema usável em operação real",
          "Código organizado e fácil de evoluir",
          "Base preparada para novos módulos",
        ],
      },
      {
        slug: "meulivroreceitas",
        title: "MeuLivroReceitas — API",
        problem:
          "Faltava uma API limpa para gerenciar receitas pessoais, com autenticação e organização por usuário.",
        solution:
          "API REST em C# / .NET para CRUD de receitas, autenticação por usuário e organização por categorias.",
        features: [
          "CRUD completo de receitas",
          "Autenticação de usuários",
          "Organização por categoria",
          "Endpoints REST documentados",
        ],
        impact: [
          "API reutilizável para web e mobile",
          "Boas práticas de .NET aplicadas",
          "Estrutura preparada para escalar",
        ],
        context:
          "Projeto pessoal para praticar arquitetura em .NET aplicando Clean Architecture e boas práticas de API.",
        architecture:
          "ASP.NET Core Web API estruturada em camadas (Application, Domain, Infrastructure). Entity Framework Core para persistência e autenticação JWT.",
        decisions: [
          ".NET pela robustez e tipagem forte",
          "Clean Architecture para separar responsabilidades",
          "EF Core para produtividade no acesso a dados",
          "JWT para autenticação stateless",
        ],
        challenges: [
          "Modelar receitas, ingredientes e passos de forma flexível",
          "Aplicar Clean Architecture sem over-engineering",
          "Garantir isolamento de dados por usuário",
        ],
        results: [
          "API funcional e bem estruturada",
          "Boa base para um app cliente",
          "Aprendizado prático de Clean Architecture",
        ],
      },
      {
        slug: "facta-api",
        title: "FactaAPI — Integração FGTS",
        problem:
          "Operadores precisavam consultar saldo e simular antecipações de FGTS sem entrar manualmente em sistemas externos.",
        solution:
          "API em Node.js + Express que integra com serviços externos para autenticação, consulta de saldo, simulação de valores e cadastro de dados.",
        features: [
          "Autenticação em serviço externo",
          "Consulta de saldo FGTS",
          "Simulação de valores",
          "Cadastro de dados do cliente",
        ],
        impact: [
          "Elimina consultas manuais repetitivas",
          "Padroniza o fluxo de simulação",
          "Permite integração com outros sistemas internos",
        ],
        context:
          "Camada de integração construída para abstrair serviços de FGTS em uma API interna simples e consistente.",
        architecture:
          "Node.js com Express organizado por rotas e serviços. Axios para HTTP, tratamento centralizado de erros e variáveis sensíveis em .env.",
        decisions: [
          "Node.js + Express pela velocidade de entrega",
          "Axios pela ergonomia em chamadas HTTP",
          "Camada de serviços isolando integrações externas",
          "Tratamento de erros padronizado para facilitar consumo",
        ],
        challenges: [
          "Lidar com instabilidade do serviço externo",
          "Gerenciar tokens de autenticação com expiração",
          "Padronizar respostas heterogêneas em um contrato único",
        ],
        results: [
          "Integração estável em uso interno",
          "Tempo de simulação reduzido drasticamente",
          "Base reutilizável para novos produtos financeiros",
        ],
      },
      {
        slug: "amilbot",
        title: "AmilBot — Automação Web",
        problem:
          "Equipe gastava horas consultando manualmente um sistema web para extrair dados de planilhas Excel.",
        solution:
          "Robô em Python com Selenium que lê planilhas Excel, automatiza consultas no sistema web e extrai os dados de forma estruturada.",
        features: [
          "Leitura de planilhas Excel",
          "Automação de consultas com Selenium",
          "Extração estruturada de dados",
          "Logs e tratamento de erros",
        ],
        impact: [
          "Automatiza processo manual recorrente",
          "Elimina erros humanos de digitação",
          "Libera horas da equipe para tarefas de maior valor",
        ],
        context:
          "Substitui um fluxo manual de consultas em sistema web por uma automação confiável que processa lotes a partir de Excel.",
        architecture:
          "Script Python modular: Pandas para leitura de planilhas, Selenium para navegação, camada de parsing dos resultados e logger estruturado.",
        decisions: [
          "Selenium por ser sistema web sem API pública",
          "Pandas para entrada/saída em Excel",
          "Logs detalhados para auditoria das execuções",
          "Modularização para facilitar manutenção",
        ],
        challenges: [
          "Estabilidade dos seletores frente a mudanças do site",
          "Tratar lotes grandes sem cair em rate limits",
          "Reexecutar registros que falharam sem reprocessar tudo",
        ],
        results: [
          "Trabalho manual praticamente zerado",
          "Histórico auditável das execuções",
          "Modelo replicável para outras automações",
        ],
      },
      {
        slug: "ecoestrutura",
        title: "EcoEstrutura",
        problem:
          "Empresas da construção civil precisavam controlar resíduos de forma rastreável, sustentável e alinhada a indicadores ESG.",
        solution:
          "Sistema para gestão de resíduos da construção civil com foco em rastreabilidade, sustentabilidade e eficiência operacional.",
        features: [
          "Controle de resíduos ponta a ponta",
          "Indicadores ESG e ambientais",
          "Apoio à tomada de decisão",
          "Alinhado às ODS (ONU)",
        ],
        impact: [
          "Aumenta rastreabilidade dos resíduos",
          "Gera indicadores ESG confiáveis",
          "Apoia decisões com base em dados",
        ],
        context:
          "Solução voltada à construção civil para tornar o ciclo de resíduos mensurável, transparente e alinhado a metas de sustentabilidade.",
        architecture:
          "Aplicação web com camadas separadas para registro operacional, processamento de indicadores e visualização. Modelagem orientada à rastreabilidade do resíduo do gerador ao destino final.",
        decisions: [
          "Modelo de dados centrado em rastreabilidade",
          "Indicadores derivados em camada própria, separados do operacional",
          "UI focada em escaneabilidade e tomada de decisão",
          "Aderência conceitual às ODS da ONU",
        ],
        challenges: [
          "Modelar fluxos heterogêneos de resíduos sem perder padronização",
          "Transformar dados operacionais em indicadores ESG úteis",
          "Equilibrar profundidade técnica e clareza para gestores",
        ],
        results: [
          "Visão clara do ciclo de resíduos",
          "Indicadores ESG acessíveis ao gestor",
          "Base para evolução em compliance ambiental",
        ],
      },
    ],
    en: [
      {
        slug: "so-limpeza-backend",
        title: "Só Limpeza — Backend",
        problem:
          "An e-commerce platform needed a modular, secure and scalable backend able to support transactional checkout without inconsistencies.",
        solution:
          "REST API built with NestJS + Prisma + PostgreSQL featuring modular architecture, versioning, role-based JWT auth and idempotent checkout.",
        features: [
          "Versioned API (/api/v1)",
          "JWT with roles + rate limiting",
          "Redis / in-memory cache",
          "Idempotent transactional checkout",
          "Swagger documentation",
        ],
        impact: [
          "Modular architecture ready to scale",
          "Checkout safe against duplicate charges",
          "Unit tests ensuring reliability",
        ],
        context:
          "E-commerce backend focused on modular architecture, security, scalability and reliable financial operations.",
        architecture:
          "NestJS organized by domain modules. Prisma as a typed ORM over PostgreSQL. Service layer decoupled from controllers, DTOs validated with class-validator, hybrid Redis/in-memory cache and Docker for environment parity.",
        decisions: [
          "NestJS for its modular structure and built-in DI",
          "Prisma for type safety and clean migrations",
          "Idempotency on checkout to prevent duplicate charges",
          "API versioning from day one",
          "Swagger generated automatically from DTOs",
        ],
        challenges: [
          "Ensuring transactional consistency on checkout under concurrency",
          "Designing a cache strategy without inconsistent invalidation",
          "Modeling role-based permissions without coupling to the HTTP layer",
        ],
        results: [
          "Stable, well-documented API",
          "Test coverage on critical business rules",
          "Solid foundation to evolve toward microservices",
        ],
      },
      {
        slug: "appsupergestao",
        title: "AppSuperGestão",
        problem:
          "Small and mid-sized businesses needed a lean ERP to centralize records, sales and daily operations.",
        solution:
          "Laravel-based web management system with products, clients, sales and users modules, focused on productivity and clarity.",
        features: [
          "Products, clients and sales modules",
          "Authentication and access levels",
          "Admin panel",
          "Operational reports",
        ],
        impact: [
          "Centralizes operations in a single system",
          "Reduces reliance on spreadsheets",
          "Speeds up registration and lookup flows",
        ],
        context:
          "Web-based business management system designed for SMBs still running their operation on spreadsheets and scattered files.",
        architecture:
          "Laravel MVC with Eloquent ORM. Blade views with reusable components. Service layer for business rules and Form Requests for validation.",
        decisions: [
          "Laravel for its mature ecosystem and productivity",
          "Blade over SPA for simplicity and SEO",
          "Eloquent with eager loading to avoid N+1",
          "MySQL for hosting simplicity",
        ],
        challenges: [
          "Modeling relationships across modules without excessive coupling",
          "Granular per-user permission control",
          "Keeping performance as the data grows",
        ],
        results: [
          "Production-usable system",
          "Organized, evolvable codebase",
          "Foundation ready for new modules",
        ],
      },
      {
        slug: "meulivroreceitas",
        title: "MeuLivroReceitas — API",
        problem:
          "There was no clean API to manage personal recipes with per-user authentication and organization.",
        solution:
          "C# / .NET REST API for recipe CRUD, user authentication and organization by category.",
        features: [
          "Full recipe CRUD",
          "User authentication",
          "Category-based organization",
          "Documented REST endpoints",
        ],
        impact: [
          "Reusable API for web and mobile clients",
          "Applied .NET best practices",
          "Structure prepared to scale",
        ],
        context:
          "Personal project to practice .NET architecture applying Clean Architecture and API best practices.",
        architecture:
          "ASP.NET Core Web API structured in layers (Application, Domain, Infrastructure). Entity Framework Core for persistence and JWT authentication.",
        decisions: [
          ".NET for robustness and strong typing",
          "Clean Architecture to separate concerns",
          "EF Core for productive data access",
          "JWT for stateless authentication",
        ],
        challenges: [
          "Modeling recipes, ingredients and steps flexibly",
          "Applying Clean Architecture without over-engineering",
          "Ensuring strict per-user data isolation",
        ],
        results: [
          "Functional, well-structured API",
          "Solid base for a client app",
          "Hands-on Clean Architecture experience",
        ],
      },
      {
        slug: "facta-api",
        title: "FactaAPI — FGTS Integration",
        problem:
          "Operators had to manually look up balances and simulate FGTS advances on external systems.",
        solution:
          "Node.js + Express API integrating with external services for authentication, balance lookup, value simulation and customer data registration.",
        features: [
          "External service authentication",
          "FGTS balance lookup",
          "Value simulation",
          "Customer data registration",
        ],
        impact: [
          "Eliminates repetitive manual lookups",
          "Standardizes the simulation flow",
          "Enables integration with other internal systems",
        ],
        context:
          "Integration layer built to abstract FGTS services behind a simple, consistent internal API.",
        architecture:
          "Node.js with Express organized by routes and services. Axios for HTTP, centralized error handling and sensitive variables in .env.",
        decisions: [
          "Node.js + Express for fast delivery",
          "Axios for ergonomic HTTP calls",
          "Service layer isolating external integrations",
          "Standardized error handling to ease consumption",
        ],
        challenges: [
          "Coping with external service instability",
          "Managing expiring authentication tokens",
          "Normalizing heterogeneous responses into a single contract",
        ],
        results: [
          "Stable integration in internal use",
          "Drastically reduced simulation time",
          "Reusable base for new financial products",
        ],
      },
      {
        slug: "amilbot",
        title: "AmilBot — Web Automation",
        problem:
          "The team spent hours manually querying a web system to extract data from Excel spreadsheets.",
        solution:
          "Python + Selenium bot that reads Excel spreadsheets, automates queries on the web system and extracts data in a structured way.",
        features: [
          "Excel spreadsheet reading",
          "Selenium-driven query automation",
          "Structured data extraction",
          "Logging and error handling",
        ],
        impact: [
          "Automates a recurring manual process",
          "Eliminates human typing errors",
          "Frees up team hours for higher-value work",
        ],
        context:
          "Replaces a manual web-system query flow with a reliable automation that processes batches from Excel.",
        architecture:
          "Modular Python script: Pandas for spreadsheet I/O, Selenium for navigation, parsing layer for results and structured logger.",
        decisions: [
          "Selenium since the target system has no public API",
          "Pandas for Excel input/output",
          "Detailed logs for execution auditing",
          "Modular design for easy maintenance",
        ],
        challenges: [
          "Selector stability against site changes",
          "Handling large batches without hitting rate limits",
          "Re-running failed records without reprocessing everything",
        ],
        results: [
          "Manual work nearly eliminated",
          "Auditable execution history",
          "Replicable model for other automations",
        ],
      },
      {
        slug: "ecoestrutura",
        title: "EcoEstrutura",
        problem:
          "Construction companies needed to manage waste in a traceable and sustainable way, aligned with ESG indicators.",
        solution:
          "System for construction waste management focused on traceability, sustainability and operational efficiency.",
        features: [
          "End-to-end waste control",
          "ESG and environmental indicators",
          "Decision-making support",
          "Aligned with the UN SDGs",
        ],
        impact: [
          "Increases waste traceability",
          "Generates reliable ESG indicators",
          "Supports data-driven decisions",
        ],
        context:
          "A solution for the construction industry that makes the waste cycle measurable, transparent and aligned with sustainability goals.",
        architecture:
          "Web application with separate layers for operational records, indicator processing and visualization. Data model centered on waste traceability from generator to final destination.",
        decisions: [
          "Traceability-centric data model",
          "Derived indicators kept in their own layer, isolated from operational data",
          "UI optimized for scanability and decision-making",
          "Conceptual alignment with the UN SDGs",
        ],
        challenges: [
          "Modeling heterogeneous waste flows without losing standardization",
          "Turning operational data into useful ESG indicators",
          "Balancing technical depth with clarity for managers",
        ],
        results: [
          "Clear view of the full waste cycle",
          "ESG indicators accessible to managers",
          "Foundation to evolve into environmental compliance",
        ],
      },
    ],
    es: [
      {
        slug: "so-limpeza-backend",
        title: "Só Limpeza — Backend",
        problem:
          "Un e-commerce necesitaba un backend modular, seguro y escalable, capaz de soportar checkout transaccional sin inconsistencias.",
        solution:
          "API REST en NestJS + Prisma + PostgreSQL con arquitectura modular, versionado, autenticación JWT por roles y checkout idempotente.",
        features: [
          "API versionada (/api/v1)",
          "JWT con roles + rate limit",
          "Caché en Redis / memoria",
          "Checkout transaccional idempotente",
          "Documentación Swagger",
        ],
        impact: [
          "Arquitectura modular lista para escalar",
          "Checkout seguro contra duplicaciones",
          "Pruebas unitarias garantizando confiabilidad",
        ],
        context:
          "Backend de e-commerce enfocado en arquitectura modular, seguridad, escalabilidad y operaciones financieras confiables.",
        architecture:
          "NestJS organizado por dominios (módulos). Prisma como ORM tipado sobre PostgreSQL. Capa de servicios desacoplada de controllers, DTOs validados con class-validator, caché híbrido Redis/memoria y Docker para paridad de entorno.",
        decisions: [
          "NestJS por su estructura modular e inyección de dependencias nativa",
          "Prisma por type safety y migraciones limpias",
          "Idempotencia en el checkout para evitar cobros duplicados",
          "Versionado de API desde el día cero",
          "Swagger generado automáticamente desde los DTOs",
        ],
        challenges: [
          "Garantizar consistencia transaccional en el checkout bajo concurrencia",
          "Definir estrategia de caché sin invalidaciones inconsistentes",
          "Modelar permisos por rol sin acoplar a la capa HTTP",
        ],
        results: [
          "API estable y documentada",
          "Cobertura de pruebas en reglas críticas",
          "Base sólida para evolucionar hacia microservicios",
        ],
      },
      {
        slug: "appsupergestao",
        title: "AppSuperGestão",
        problem:
          "Pequeñas y medianas empresas necesitaban un ERP simple para centralizar registros, ventas y operación diaria.",
        solution:
          "Sistema web de gestión empresarial en Laravel con módulos de productos, clientes, ventas y usuarios, enfocado en productividad y claridad.",
        features: [
          "Módulos de productos, clientes y ventas",
          "Autenticación y niveles de acceso",
          "Panel administrativo",
          "Informes operativos",
        ],
        impact: [
          "Centraliza operaciones en un único sistema",
          "Reduce la dependencia de hojas de cálculo",
          "Acelera el flujo de registro y consulta",
        ],
        context:
          "Sistema web de gestión empresarial pensado para pymes que aún operaban en hojas de cálculo y archivos sueltos.",
        architecture:
          "MVC de Laravel con Eloquent ORM. Vistas en Blade con componentes reutilizables. Capa de Services para reglas de negocio y Form Requests para validación.",
        decisions: [
          "Laravel por su ecosistema maduro y productividad",
          "Blade en lugar de SPA por simplicidad y SEO",
          "Eloquent con eager loading para evitar N+1",
          "MySQL por la facilidad de hospedaje",
        ],
        challenges: [
          "Modelar relaciones entre módulos sin acoplamiento excesivo",
          "Control granular de permisos por usuario",
          "Mantener el performance al crecer la base",
        ],
        results: [
          "Sistema usable en operación real",
          "Código organizado y fácil de evolucionar",
          "Base preparada para nuevos módulos",
        ],
      },
      {
        slug: "meulivroreceitas",
        title: "MeuLivroReceitas — API",
        problem:
          "Faltaba una API limpia para gestionar recetas personales con autenticación y organización por usuario.",
        solution:
          "API REST en C# / .NET para CRUD de recetas, autenticación de usuarios y organización por categorías.",
        features: [
          "CRUD completo de recetas",
          "Autenticación de usuarios",
          "Organización por categoría",
          "Endpoints REST documentados",
        ],
        impact: [
          "API reutilizable para web y mobile",
          "Buenas prácticas de .NET aplicadas",
          "Estructura preparada para escalar",
        ],
        context:
          "Proyecto personal para practicar arquitectura en .NET aplicando Clean Architecture y buenas prácticas de API.",
        architecture:
          "ASP.NET Core Web API estructurada en capas (Application, Domain, Infrastructure). Entity Framework Core para persistencia y autenticación JWT.",
        decisions: [
          ".NET por su robustez y tipado fuerte",
          "Clean Architecture para separar responsabilidades",
          "EF Core para productividad en el acceso a datos",
          "JWT para autenticación stateless",
        ],
        challenges: [
          "Modelar recetas, ingredientes y pasos de forma flexible",
          "Aplicar Clean Architecture sin sobrediseño",
          "Garantizar aislamiento de datos por usuario",
        ],
        results: [
          "API funcional y bien estructurada",
          "Buena base para una app cliente",
          "Aprendizaje práctico de Clean Architecture",
        ],
      },
      {
        slug: "facta-api",
        title: "FactaAPI — Integración FGTS",
        problem:
          "Los operadores tenían que consultar saldo y simular adelantos de FGTS manualmente en sistemas externos.",
        solution:
          "API en Node.js + Express que integra servicios externos para autenticación, consulta de saldo, simulación de valores y registro de datos del cliente.",
        features: [
          "Autenticación en servicio externo",
          "Consulta de saldo FGTS",
          "Simulación de valores",
          "Registro de datos del cliente",
        ],
        impact: [
          "Elimina consultas manuales repetitivas",
          "Estandariza el flujo de simulación",
          "Permite integración con otros sistemas internos",
        ],
        context:
          "Capa de integración construida para abstraer servicios de FGTS detrás de una API interna simple y consistente.",
        architecture:
          "Node.js con Express organizado por rutas y servicios. Axios para HTTP, manejo centralizado de errores y variables sensibles en .env.",
        decisions: [
          "Node.js + Express por velocidad de entrega",
          "Axios por la ergonomía en llamadas HTTP",
          "Capa de servicios aislando integraciones externas",
          "Manejo de errores estandarizado para facilitar el consumo",
        ],
        challenges: [
          "Lidiar con la inestabilidad del servicio externo",
          "Gestionar tokens de autenticación con expiración",
          "Normalizar respuestas heterogéneas en un único contrato",
        ],
        results: [
          "Integración estable en uso interno",
          "Tiempo de simulación drásticamente reducido",
          "Base reutilizable para nuevos productos financieros",
        ],
      },
      {
        slug: "amilbot",
        title: "AmilBot — Automatización Web",
        problem:
          "El equipo dedicaba horas a consultar manualmente un sistema web para extraer datos desde hojas Excel.",
        solution:
          "Bot en Python con Selenium que lee hojas Excel, automatiza consultas en el sistema web y extrae los datos de forma estructurada.",
        features: [
          "Lectura de hojas Excel",
          "Automatización de consultas con Selenium",
          "Extracción estructurada de datos",
          "Logs y manejo de errores",
        ],
        impact: [
          "Automatiza un proceso manual recurrente",
          "Elimina errores humanos de tipeo",
          "Libera horas del equipo para tareas de mayor valor",
        ],
        context:
          "Reemplaza un flujo manual de consultas en un sistema web por una automatización confiable que procesa lotes desde Excel.",
        architecture:
          "Script Python modular: Pandas para lectura de hojas, Selenium para navegación, capa de parsing de resultados y logger estructurado.",
        decisions: [
          "Selenium porque el sistema no tiene API pública",
          "Pandas para entrada/salida en Excel",
          "Logs detallados para auditoría de ejecuciones",
          "Modularización para facilitar el mantenimiento",
        ],
        challenges: [
          "Estabilidad de los selectores frente a cambios del sitio",
          "Procesar lotes grandes sin caer en rate limits",
          "Reejecutar registros fallidos sin reprocesar todo",
        ],
        results: [
          "Trabajo manual prácticamente eliminado",
          "Historial auditable de ejecuciones",
          "Modelo replicable para otras automatizaciones",
        ],
      },
      {
        slug: "ecoestrutura",
        title: "EcoEstrutura",
        problem:
          "Empresas de construcción necesitaban gestionar residuos de forma trazable, sostenible y alineada con indicadores ESG.",
        solution:
          "Sistema para gestión de residuos de la construcción con foco en trazabilidad, sostenibilidad y eficiencia operativa.",
        features: [
          "Control de residuos de punta a punta",
          "Indicadores ESG y ambientales",
          "Apoyo a la toma de decisiones",
          "Alineado con los ODS (ONU)",
        ],
        impact: [
          "Aumenta la trazabilidad de los residuos",
          "Genera indicadores ESG confiables",
          "Apoya decisiones basadas en datos",
        ],
        context:
          "Solución para la construcción que vuelve el ciclo de residuos medible, transparente y alineado con metas de sostenibilidad.",
        architecture:
          "Aplicación web con capas separadas para registro operativo, procesamiento de indicadores y visualización. Modelo de datos centrado en la trazabilidad del residuo desde el generador hasta el destino final.",
        decisions: [
          "Modelo de datos centrado en trazabilidad",
          "Indicadores derivados en una capa propia, separados de lo operativo",
          "UI optimizada para escaneabilidad y toma de decisiones",
          "Alineación conceptual con los ODS de la ONU",
        ],
        challenges: [
          "Modelar flujos heterogéneos de residuos sin perder estandarización",
          "Convertir datos operativos en indicadores ESG útiles",
          "Equilibrar profundidad técnica y claridad para gestores",
        ],
        results: [
          "Visión clara del ciclo de residuos",
          "Indicadores ESG accesibles para gestores",
          "Base para evolucionar hacia compliance ambiental",
        ],
      },
    ],
  };
  return data[lang];
};

export const experienceData = (lang: Lang) => {
  const data = {
    pt: [
      {
        title: "Full Stack Developer Intern — DTI Digital",
        date: "Nov 2024 — Presente",
        description:
          "Desenvolvimento de sistemas web corporativos para visualização de dados e relatórios estratégicos. Construção e manutenção de APIs REST e microsserviços escaláveis com .NET e Azure Functions. Interfaces responsivas com React e TypeScript, testes automatizados com xUnit e React Testing Library.",
        tech: [
          ".NET",
          "C#",
          "React",
          "TypeScript",
          "Azure",
          "Azure Functions",
          "xUnit",
          "RTL",
          "SQL Server",
        ],
      },
      {
        title: "Desenvolvedor Full Stack — Foco Interação",
        date: "Jul 2023 — Nov 2024",
        description:
          "Entrega de sistemas web customizados com integração a APIs bancárias. Automação de processos repetitivos com bots inteligentes, reduzindo significativamente o trabalho manual. Administração de bancos MySQL e SQL Server, interfaces com React e Vue.js, integração com APIs externas e pipelines de dados.",
        tech: [
          ".NET",
          "Laravel",
          "Python",
          "Node.js",
          "React",
          "Vue.js",
          "MySQL",
          "SQL Server",
          "Selenium",
        ],
      },
      {
        title: "Estagiário de Engenharia de Software — Brandt Meio Ambiente",
        date: "Jan 2023 — Jul 2023",
        description:
          "Criação e manutenção de banco de dados relacional e desenvolvimento de aplicações internas para gestão de dados ambientais. Automação de workflows de relatórios corporativos com Python, PostgreSQL e ferramentas Microsoft Office.",
        tech: ["Python", "PostgreSQL", "SQL", "Microsoft Office"],
      },
    ],
    en: [
      {
        title: "Full Stack Developer Intern — DTI Digital",
        date: "Nov 2024 — Present",
        description:
          "Building corporate web systems for data visualization and strategic reporting. Designing and maintaining scalable REST APIs and microservices with .NET and Azure Functions. Responsive interfaces with React and TypeScript and automated tests with xUnit and React Testing Library.",
        tech: [
          ".NET",
          "C#",
          "React",
          "TypeScript",
          "Azure",
          "Azure Functions",
          "xUnit",
          "RTL",
          "SQL Server",
        ],
      },
      {
        title: "Full Stack Developer — Foco Interação",
        date: "Jul 2023 — Nov 2024",
        description:
          "Delivering custom web systems integrating banking APIs. Automating repetitive processes with smart bots, significantly reducing manual workload. Managing MySQL and SQL Server databases, building React and Vue.js interfaces and integrating external APIs and data pipelines.",
        tech: [
          ".NET",
          "Laravel",
          "Python",
          "Node.js",
          "React",
          "Vue.js",
          "MySQL",
          "SQL Server",
          "Selenium",
        ],
      },
      {
        title: "Software Engineering Intern — Brandt Meio Ambiente",
        date: "Jan 2023 — Jul 2023",
        description:
          "Creating and maintaining relational databases and building internal apps for environmental data management. Automating corporate reporting workflows with Python, PostgreSQL and Microsoft Office tools.",
        tech: ["Python", "PostgreSQL", "SQL", "Microsoft Office"],
      },
    ],
    es: [
      {
        title: "Pasante Full Stack — DTI Digital",
        date: "Nov 2024 — Presente",
        description:
          "Desarrollo de sistemas web corporativos para visualización de datos e informes estratégicos. Construcción y mantenimiento de APIs REST y microservicios escalables con .NET y Azure Functions. Interfaces responsivas con React y TypeScript y pruebas automatizadas con xUnit y React Testing Library.",
        tech: [
          ".NET",
          "C#",
          "React",
          "TypeScript",
          "Azure",
          "Azure Functions",
          "xUnit",
          "RTL",
          "SQL Server",
        ],
      },
      {
        title: "Desarrollador Full Stack — Foco Interação",
        date: "Jul 2023 — Nov 2024",
        description:
          "Entrega de sistemas web personalizados con integración a APIs bancarias. Automatización de procesos repetitivos con bots inteligentes, reduciendo significativamente el trabajo manual. Administración de bases MySQL y SQL Server, interfaces con React y Vue.js e integración con APIs externas y pipelines de datos.",
        tech: [
          ".NET",
          "Laravel",
          "Python",
          "Node.js",
          "React",
          "Vue.js",
          "MySQL",
          "SQL Server",
          "Selenium",
        ],
      },
      {
        title: "Pasante de Ingeniería de Software — Brandt Meio Ambiente",
        date: "Ene 2023 — Jul 2023",
        description:
          "Creación y mantenimiento de bases de datos relacionales y desarrollo de aplicaciones internas para gestión de datos ambientales. Automatización de workflows de informes corporativos con Python, PostgreSQL y herramientas Microsoft Office.",
        tech: ["Python", "PostgreSQL", "SQL", "Microsoft Office"],
      },
    ],
  };
  return data[lang];
};

export const techStack = {
  backend: [
    { name: ".NET (C#)", level: "Avançado" },
    { name: "Python", level: "Avançado" },
    { name: "PHP / Laravel", level: "Intermediário" },
    { name: "Java", level: "Avançado" },
    { name: "Node.js", level: "Avançado" },
    { name: "Azure Functions", level: "Intermediário" },
  ],
  frontend: [
    { name: "React", level: "Avançado" },
    { name: "TypeScript", level: "Avançado" },
    { name: "Vue.js", level: "Intermediário" },
    { name: "Tailwind CSS", level: "Avançado" },
    { name: "JavaScript", level: "Avançado" },
    { name: "HTML / CSS", level: "Avançado" },
  ],
  database: [
    { name: "SQL Server", level: "Avançado" },
    { name: "MySQL", level: "Avançado" },
    { name: "PostgreSQL", level: "Avançado" },
    { name: "MongoDB", level: "Intermediário" },
  ],
  testing: [
    { name: "xUnit (.NET)", level: "Avançado" },
    { name: "JUnit (Java)", level: "Avançado" },
    { name: "React Testing Library", level: "Avançado" },
    { name: "Selenium", level: "Avançado" },
    { name: "SonarQube", level: "Avançado" },
    { name: "PHPUnit", level: "Básico" },
  ],
  tools: [
    { name: "Azure / AWS", level: "Intermediário" },
    { name: "Azure DevOps / CI/CD", level: "Avançado" },
    { name: "Git / GitHub", level: "Avançado" },
    { name: "REST APIs", level: "Avançado" },
    { name: "Microservices / DDD", level: "Avançado" },
    { name: "Clean Architecture", level: "Avançado" },
    { name: "SOLID / Design Patterns", level: "Avançado" },
    { name: "Linux", level: "Intermediário" },
  ],
};

// ============================================================
// CERTIFICAÇÕES — PT é fonte da verdade. EN/ES espelham.
// ============================================================
export type Certification = {
  name: string;
  platform: string;
  description: string;
  tech: string[];
  certificateUrl?: string;
};

// Cursos comuns às 3 línguas — apenas description varia.
type CourseTemplate = {
  platform: string;
  tech: string[];
  pt: { name: string; description: string };
  en: { name: string; description: string };
  es: { name: string; description: string };
};

const courses: CourseTemplate[] = [
  {
    platform: "Cultura Inglesa",
    tech: ["Inglês", "Comunicação Técnica", "Documentação"],
    pt: {
      name: "Certificado Avançado de Inglês",
      description:
        "Formação completa em inglês ao longo de 11 anos, com certificação de nível avançado. Fluência para leitura de documentação técnica e comunicação em ambientes profissionais internacionais.",
    },
    en: {
      name: "Advanced English Certificate",
      description:
        "11-year comprehensive English program with advanced-level certification. Fluency for reading technical documentation and communicating in international professional environments.",
    },
    es: {
      name: "Certificado Avanzado de Inglés",
      description:
        "Formación completa de inglés durante 11 años con certificación de nivel avanzado. Fluidez para leer documentación técnica y comunicarse en entornos profesionales internacionales.",
    },
  },
  {
    platform: "Udemy",
    tech: ["Inglês", "Conversação", "Fluência"],
    pt: {
      name: "Inglês Rápido: do Básico à Fluência",
      description:
        "Curso intensivo focado em fluência prática, conversação e comunicação real, sem rodeios.",
    },
    en: {
      name: "Fast English: From Basic to Fluency",
      description:
        "Intensive course focused on practical fluency, conversation and real-world communication.",
    },
    es: {
      name: "Inglés Rápido: del Básico a la Fluidez",
      description:
        "Curso intensivo enfocado en fluidez práctica, conversación y comunicación real.",
    },
  },
  {
    platform: "Udemy",
    tech: ["Python", "OOP", "Projetos"],
    pt: {
      name: "Python 3 do Básico ao Avançado — com Projetos Reais",
      description:
        "Domínio de Python 3 do básico ao avançado, com OOP, estruturas de dados e projetos práticos.",
    },
    en: {
      name: "Python 3 from Basics to Advanced — Real Projects",
      description:
        "Python 3 mastery from basics to advanced, covering OOP, data structures and hands-on projects.",
    },
    es: {
      name: "Python 3 del Básico al Avanzado — Proyectos Reales",
      description:
        "Dominio de Python 3 desde lo básico hasta avanzado, con POO, estructuras de datos y proyectos prácticos.",
    },
  },
  {
    platform: "Udemy",
    tech: [".NET Core", "C#", "API"],
    pt: {
      name: ".NET Core: Curso Orientado para o Mercado de Trabalho",
      description:
        "Curso aplicado de .NET Core focado em práticas reais do mercado, APIs e arquitetura.",
    },
    en: {
      name: ".NET Core: Job-Market Oriented Course",
      description:
        "Applied .NET Core course focused on real industry practices, APIs and architecture.",
    },
    es: {
      name: ".NET Core: Curso Orientado al Mercado Laboral",
      description:
        "Curso aplicado de .NET Core enfocado en prácticas reales del mercado, APIs y arquitectura.",
    },
  },
  {
    platform: "Udemy",
    tech: ["C#", "POO", "Projetos"],
    pt: {
      name: "C# Completo — POO + Projetos",
      description:
        "Programação orientada a objetos em C# com base sólida e construção de projetos práticos.",
    },
    en: {
      name: "Complete C# — OOP + Projects",
      description:
        "Object-oriented programming in C# with a solid foundation and hands-on projects.",
    },
    es: {
      name: "C# Completo — POO + Proyectos",
      description:
        "Programación orientada a objetos en C# con base sólida y construcción de proyectos prácticos.",
    },
  },
  {
    platform: "Udemy",
    tech: ["React", "JavaScript", "Hooks"],
    pt: {
      name: "React.js do Zero ao Avançado na Prática",
      description:
        "Construção de interfaces modernas com React, hooks, Context API e consumo de APIs.",
    },
    en: {
      name: "React.js from Zero to Advanced in Practice",
      description: "Building modern UIs with React, hooks, Context API and REST API consumption.",
    },
    es: {
      name: "React.js de Cero a Avanzado en la Práctica",
      description:
        "Construcción de interfaces modernas con React, hooks, Context API y consumo de APIs.",
    },
  },
  {
    platform: "Udemy",
    tech: ["Git", "GitHub", "Gist"],
    pt: {
      name: "Git e GitHub do Básico ao Avançado",
      description:
        "Controle de versão com Git e fluxo de trabalho profissional no GitHub, incluindo Gist e GitHub Pages.",
    },
    en: {
      name: "Git and GitHub from Basics to Advanced",
      description:
        "Version control with Git and professional GitHub workflow, including Gist and GitHub Pages.",
    },
    es: {
      name: "Git y GitHub del Básico al Avanzado",
      description:
        "Control de versiones con Git y flujo de trabajo profesional en GitHub, incluyendo Gist y GitHub Pages.",
    },
  },
  {
    platform: "Udemy",
    tech: ["PHP", "Laravel", "Vue.js"],
    pt: {
      name: "Desenvolvimento Web Avançado com PHP, Laravel e Vue.js",
      description:
        "Stack fullstack moderna combinando Laravel no backend e Vue.js no frontend para apps reais.",
    },
    en: {
      name: "Advanced Web Development with PHP, Laravel and Vue.js",
      description:
        "Modern fullstack combining Laravel on the backend and Vue.js on the frontend for real apps.",
    },
    es: {
      name: "Desarrollo Web Avanzado con PHP, Laravel y Vue.js",
      description:
        "Stack fullstack moderno combinando Laravel en backend y Vue.js en frontend para apps reales.",
    },
  },
  {
    platform: "Udemy",
    tech: ["Java", "POO", "Projetos"],
    pt: {
      name: "Java Completo — POO + Projetos",
      description:
        "Programação orientada a objetos em Java com fundamentos sólidos e projetos práticos.",
    },
    en: {
      name: "Complete Java — OOP + Projects",
      description:
        "Object-oriented programming in Java with solid foundations and hands-on projects.",
    },
    es: {
      name: "Java Completo — POO + Proyectos",
      description:
        "Programación orientada a objetos en Java con fundamentos sólidos y proyectos prácticos.",
    },
  },
  {
    platform: "Udemy",
    tech: ["C", "Algoritmos", "Estruturas"],
    pt: {
      name: "Programação em C do Básico ao Avançado",
      description:
        "Fundamentos da linguagem C, algoritmos e estruturas de dados desde o básico ao avançado.",
    },
    en: {
      name: "C Programming from Basics to Advanced",
      description:
        "C language fundamentals, algorithms and data structures from basics to advanced.",
    },
    es: {
      name: "Programación en C del Básico al Avanzado",
      description:
        "Fundamentos del lenguaje C, algoritmos y estructuras de datos desde lo básico a lo avanzado.",
    },
  },
  {
    platform: "Udemy",
    tech: ["ASP.NET", ".NET 8", "Web API"],
    pt: {
      name: "Web API ASP.NET Core Essencial (.NET 8 / .NET 9)",
      description:
        "Construção de APIs RESTful com ASP.NET Core nas versões mais atuais (.NET 8 / .NET 9).",
    },
    en: {
      name: "ASP.NET Core Web API Essentials (.NET 8 / .NET 9)",
      description:
        "Building RESTful APIs with ASP.NET Core on the latest versions (.NET 8 / .NET 9).",
    },
    es: {
      name: "Web API ASP.NET Core Esencial (.NET 8 / .NET 9)",
      description:
        "Construcción de APIs RESTful con ASP.NET Core en las versiones más recientes (.NET 8 / .NET 9).",
    },
  },
  {
    platform: "Udemy",
    tech: ["React", "TypeScript", "Hooks"],
    pt: {
      name: "React.js com TypeScript do Zero ao Avançado",
      description:
        "Frontend moderno com React + TypeScript, tipagem forte, hooks e consumo de APIs.",
    },
    en: {
      name: "React.js with TypeScript from Zero to Advanced",
      description:
        "Modern frontend with React + TypeScript, strong typing, hooks and REST API consumption.",
    },
    es: {
      name: "React.js con TypeScript de Cero a Avanzado",
      description:
        "Frontend moderno con React + TypeScript, tipado fuerte, hooks y consumo de APIs.",
    },
  },
  {
    platform: "Udemy",
    tech: ["Excel", "VBA", "Power BI"],
    pt: {
      name: "Excel do Básico ao Avançado + Macro, VBA e Power BI",
      description:
        "Domínio de Excel avançado, automação com Macros e VBA, e visualização de dados em Power BI.",
    },
    en: {
      name: "Excel from Basics to Advanced + Macros, VBA and Power BI",
      description:
        "Advanced Excel mastery, automation with Macros and VBA, and data visualization in Power BI.",
    },
    es: {
      name: "Excel del Básico al Avanzado + Macros, VBA y Power BI",
      description:
        "Dominio de Excel avanzado, automatización con Macros y VBA, y visualización de datos en Power BI.",
    },
  },
  {
    platform: "Udemy",
    tech: ["Data Science", "Python", "ML"],
    pt: {
      name: "Formação Cientista de Dados — Curso Completo 2026",
      description:
        "Trilha completa de Ciência de Dados: estatística, Python, machine learning e visualização.",
    },
    en: {
      name: "Data Scientist Training — Complete Course 2026",
      description:
        "Full Data Science path: statistics, Python, machine learning and visualization.",
    },
    es: {
      name: "Formación Científico de Datos — Curso Completo 2026",
      description:
        "Ruta completa de Ciencia de Datos: estadística, Python, machine learning y visualización.",
    },
  },
  {
    platform: "Udemy",
    tech: ["Clean Architecture", "ASP.NET", "C#"],
    pt: {
      name: "Clean Architecture Essencial — ASP.NET Core com C#",
      description:
        "Aplicação prática de Clean Architecture em projetos ASP.NET Core com C#, separando responsabilidades de forma escalável.",
    },
    en: {
      name: "Essential Clean Architecture — ASP.NET Core with C#",
      description:
        "Practical application of Clean Architecture on ASP.NET Core projects with C#, separating concerns in a scalable way.",
    },
    es: {
      name: "Clean Architecture Esencial — ASP.NET Core con C#",
      description:
        "Aplicación práctica de Clean Architecture en proyectos ASP.NET Core con C#, separando responsabilidades de forma escalable.",
    },
  },
];

export const certificationsData = (lang: Lang): Certification[] =>
  courses.map((c) => ({
    name: c[lang].name,
    platform: c.platform,
    description: c[lang].description,
    tech: c.tech,
  }));
