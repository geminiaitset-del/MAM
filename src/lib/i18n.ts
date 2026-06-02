export type Locale = "en" | "ar";

export const translations = {
  en: {
    common: {
      languageButtonLabel: "AR",
      languageToggleAria: "Switch to Arabic",
      readDetails: "Read details",
      exploreCaseStudy: "Explore Case Study",
      secure: "// SECURE",
      startProject: "Start Project",
      startYourProject: "Start Your Project",
    },
    nav: {
      home: "Home",
      services: "Services",
      aiLab: "AI Lab",
      work: "Work",
      process: "Process",
      techStack: "Tech Stack",
      testimonials: "Testimonials",
      navigationSystems: "// NAVIGATION SYSTEMS",
      systemStatus: "SYSTEM STATUS // OK",
      copyright: "MAM COMPANY © 2026",
      toggleMenu: "Toggle menu",
    },
    hero: {
      headline: ["Engineering", "The Future Of", "Intelligence"],
      subtitle:
        "We design and engineer advanced AI systems, enterprise software, and scalable digital products for ambitious businesses worldwide.",
      exploreWork: "Explore Our Work",
      stats: [
        { value: "50+", label: "Projects Delivered" },
        { value: "15+", label: "AI Systems Built" },
        { value: "98%", label: "Satisfaction" },
        { value: "24/7", label: "Tech Support" },
      ],
    },
    services: {
      kicker: "// EXPERTISE",
      titleLine: "SOLUTIONS THAT POWER",
      titleHighlight: "YOUR DIGITAL GROWTH",
      description:
        "We design, build, and scale premium software products and intelligent systems that turn ambitious visions into bulletproof software.",
      embeds: {
        neuralEngine: "Neural Engine",
        optimizingModel: "Optimizing Model",
        apiLatency: "API LATENCY",
        avgLatency: "14ms AVG",
        grossVolume: "Gross Volume",
        conversionRate: "+142% CONVERSION RATE",
      },
      items: [
        {
          title: "AI Solutions",
          description:
            "Custom Machine Learning systems, computer vision models, and predictive intelligence engines designed to turn raw data into strategic operations.",
        },
        {
          title: "AI Agents",
          description:
            "Autonomous digital workforce systems that streamline decision-making and execute complex multi-system workflows with precision.",
        },
        {
          title: "Mobile Apps",
          description:
            "High-performance native and cross-platform mobile apps prioritizing fluid animations, gesture navigation, and premium ergonomics.",
        },
        {
          title: "Web Platforms",
          description:
            "Next-generation web applications, SaaS dashboards, and portal structures engineered for ultra-low latency and scalable growth.",
        },
        {
          title: "E-Commerce Platforms",
          description:
            "Premium scale digital storefronts optimized for high transaction speeds, checkout flows, and immersive brand presentation.",
        },
        {
          title: "Custom Systems",
          description:
            "Bespoke backend engines, real-time database cluster designs, complex API integrations, and resilient architecture migrations.",
        },
      ],
    },
    aiBrain: {
      kicker: "// SYSTEMS ENGINEERING",
      titleLine1: "Architectural",
      titleLine2: "Software Infrastructure",
      description:
        "We design, build, and maintain the underlying software architecture that powers complex autonomous systems. No generic templates, no third-party wrappers, just custom, high-performance, and resilient custom enterprise engines built to endure.",
      metrics: [
        { value: "0.04ms", label: "Edge Latency" },
        { value: "99.98%", label: "System Accuracy" },
        { value: "40%+", label: "Compute Speedup" },
      ],
      stackTitle: "INFRASTRUCTURE STACK // LAYERS",
      systemState: "SYSTEM STATE // OK",
      layers: [
        {
          title: "Edge Interface & Routing Mesh",
          status: "OPTIMAL",
          desc: "Distributed global endpoint management, secure request prioritization, and low-latency client connection gateways.",
          metrics: "LATENCY: 0.04ms // CONCURRENT: 120k",
        },
        {
          title: "Autonomous Agent Coordinator",
          status: "ACTIVE",
          desc: "Multi-routine context queuing, thread orchestration, and intelligent resource allocation across cluster models.",
          metrics: "THREADS: 8,192 // EFFICIENCY: 99.98%",
        },
        {
          title: "Semantic Indexing & Memory Pool",
          status: "STABLE",
          desc: "High-performance vector memory partitions, multi-tenant caching layers, and high-frequency semantic graph search structures.",
          metrics: "CAPACITY: 48TB // RETRIEVAL: 8.5ms",
        },
        {
          title: "Distributed GPU Compute Matrix",
          status: "OPTIMIZED",
          desc: "Direct metal-level cluster integration, automated failover pipelines, and scalable tensor computation loops.",
          metrics: "GPU_LOAD: 34.2% // CORE_TEMP: 42°C",
        },
      ],
    },
    portfolio: {
      kicker: "// PORTFOLIO",
      titleLine: "SOME PROJECTS WE ARE",
      titleHighlight: "PROUD OF",
      categories: [
        { id: "all", label: "All" },
        { id: "ai", label: "AI" },
        { id: "mobile", label: "Mobile Apps" },
        { id: "ecommerce", label: "E-Commerce" },
        { id: "saas", label: "SaaS" },
        { id: "enterprise", label: "Enterprise" },
      ],
      mockups: {
        checkoutPlatform: "Checkout Platform",
        online: "ONLINE",
        authStatus: "Auth Status",
        approved: "APPROVED",
        txDelay: "Tx Delay",
        secureGate: "Secure Gate",
        dataMatrix: "DATA MATRIX",
        retrieving: "RETRIEVING DB_CLUSTERS...",
        apexShield: "Apex Shield Active",
        threatRatio: "Threat Ratio",
        edgeNodes: "Edge Nodes",
        activeNodes: "1,450 ACTIVE",
      },
      projects: [
        {
          title: "OmniAgent Platforms",
          categoryId: "ai",
          categoryLabel: "AI",
          outcome: "Automated 85% of Customer Queries",
          description:
            "An autonomous multi-agent platform designed to resolve complex, multi-system enterprise customer support tasks in seconds.",
        },
        {
          title: "ShopEase Storefronts",
          categoryId: "ecommerce",
          categoryLabel: "E-Commerce",
          outcome: "+142% Increase in Conversion",
          description:
            "Next-generation digital storefront optimized with real-time recommendation engines, micro-second checkout systems, and sleek transitions.",
        },
        {
          title: "NovaCore Analytics",
          categoryId: "saas",
          categoryLabel: "SaaS",
          outcome: "40% Operational Efficiency Gain",
          description:
            "A highly resilient cloud database dashboard aggregating business analytics and projecting growth trends using neural networks.",
        },
        {
          title: "Apex Cloud Networks",
          categoryId: "enterprise",
          categoryLabel: "Enterprise",
          outcome: "99.99% Uptime SLA",
          description:
            "Secure, isolated core network infrastructure and ML-powered threat detection system engineered for global companies.",
        },
      ],
    },
    process: {
      kicker: "OUR PROCESS",
      titleLine1: "HOW WE BUILD",
      titleLine2: "GREAT DIGITAL PRODUCTS",
      description:
        "A meticulous, high-fidelity engineering workflow designed to bring complex applications and advanced AI intelligence to life.",
      steps: [
        {
          title: "Discover",
          subtitle: "RESEARCH & SCOPE",
          description:
            "We dissect your vision, analyze target demographics, map existing technical boundaries, and scope precise operational objectives.",
        },
        {
          title: "Strategy",
          subtitle: "SYSTEM DESIGN & ROADMAP",
          description:
            "We structure database schemas, select the optimal tech stack, architect AI agents, and outline an agile sprint schedule.",
        },
        {
          title: "Design",
          subtitle: "AESTHETICS & INTERACTION",
          description:
            "We craft high-fidelity luxury UI layouts, design glassmorphic graphics, specify micro-interactions, and compile standard design kits.",
        },
        {
          title: "Develop",
          subtitle: "ENGINEERING & INTEGRATION",
          description:
            "Our elite engineers draft high-performance TypeScript components, scale robust APIs, implement neural models, and secure configurations.",
        },
        {
          title: "Deploy",
          subtitle: "CONFIDENT DEPLOYMENT",
          description:
            "We orchestrate containerized builds, configure global edge routing, audit database stability, and launch zero-downtime clusters.",
        },
        {
          title: "Scale",
          subtitle: "OPTIMIZATION & ANALYSIS",
          description:
            "We monitor operational latency, optimize agent accuracy ratios, perform server audits, and continuously scale database operations.",
        },
      ],
    },
    techStack: {
      title: "TECH STACK",
      description:
        "Our systems are built on high-performance frameworks, state-of-the-art vector databases, global-scale clouds, and advanced cognitive integrations.",
      technologies: [
        { name: "React", category: "Frontend Framework", isActive: true },
        { name: "Next.js", category: "Core Architecture", isActive: true },
        { name: "TypeScript", category: "Core Language", isActive: false },
        { name: "Node.js", category: "Backend Runtime", isActive: false },
        { name: "Flutter", category: "Mobile System", isActive: false },
        { name: "Python", category: "AI & Scripting", isActive: true },
        { name: "FastAPI", category: "High-Performance API", isActive: true },
        { name: "PostgreSQL", category: "Relational DB", isActive: false },
        { name: "MongoDB", category: "Document DB", isActive: false },
        { name: "Docker", category: "Deployment Container", isActive: false },
        { name: "AWS Cloud", category: "Infrastructure", isActive: true },
        { name: "OpenAI Models", category: "Neural Integration", isActive: false },
        { name: "Anthropic API", category: "Cognitive Models", isActive: false },
        { name: "LangChain", category: "Agent Orchestration", isActive: false },
        { name: "Pinecone DB", category: "Vector Database", isActive: true },
        { name: "TensorFlow", category: "Deep Learning Engine", isActive: false },
      ],
    },
    testimonials: {
      kicker: "Testimonials",
      titleLine1: "Trusted by businesses",
      titleLine2: "like yours",
      previousAria: "Previous testimonial",
      nextAria: "Next testimonial",
      items: [
        {
          quote:
            "Professional, fast, and exceptionally skilled. The custom SaaS platform has zero latency, looks beautiful, and scales perfectly under heavy traffic. Their engineering quality is peerless.",
          name: "David Smith",
          designation: "Founder, Taskly",
          src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop",
        },
        {
          quote:
            "Their AI systems transformed how we operate. The team deeply understands enterprise needs and delivers with precision and speed we haven't seen elsewhere.",
          name: "Sarah Chen",
          designation: "CTO, NexaFlow",
          src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop",
        },
        {
          quote:
            "From architecture to deployment, every detail was handled with care. The result exceeded our expectations both technically and visually.",
          name: "Marcus Webb",
          designation: "CEO, Orbix Systems",
          src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop",
        },
      ],
    },
    contact: {
      kicker: "GET IN TOUCH",
      titleLine1: "LET'S BUILD SOMETHING",
      titleLine2: "AMAZING TOGETHER",
      description:
        "Have a project in mind? Fill out the contact form below and let us discuss how to build it perfectly.",
      informationTitle: "Contact Information",
      info: [
        { title: "Email", value: "hello@mamcompany.com" },
        { title: "Phone", value: "+1 (234) 567-8900" },
        { title: "Location", value: "Remote / Worldwide" },
        { title: "Working Hours", value: "24/7 Available" },
      ],
      form: {
        labels: {
          name: "Your Name",
          email: "Email Address",
          company: "Company Name",
          projectType: "Project Type",
          budget: "Estimated Budget",
          message: "Tell us about your project",
        },
        placeholders: {
          name: "e.g. John Doe",
          email: "e.g. john@company.com",
          company: "e.g. ShopEase LLC",
          projectType: "Select Category",
          budget: "Select Range",
          message:
            "Please details key feature needs, database expectations, or AI capabilities requested...",
        },
        validation: {
          name: "Name must be at least 2 characters",
          email: "Invalid email address",
          company: "Company name is required",
          projectType: "Please select a project type",
          budget: "Please select a budget range",
          message: "Message must be at least 10 characters",
        },
        projectTypes: [
          { value: "ai-agents", label: "AI Agent Integrations" },
          { value: "mobile-apps", label: "Mobile Applications" },
          { value: "saas-platform", label: "SaaS Platform" },
          { value: "ecommerce", label: "E-Commerce Solutions" },
          { value: "enterprise", label: "Custom Enterprise Software" },
          { value: "transformation", label: "Digital Transformation" },
        ],
        budgets: [
          { value: "< $10,000", label: "< $10,000" },
          { value: "$10,000 - $25,000", label: "$10,000 - $25,000" },
          { value: "$25,000 - $50,000", label: "$25,000 - $50,000" },
          { value: "$50,000+", label: "$50,000+" },
        ],
        sending: "Sending...",
        submit: "Send Message",
      },
      success: {
        title: "MESSAGE SENT SUCCESSFULLY!",
        description:
          "Thank you for reaching out. Our lead architect will review your design specifications and contact you within 12 hours.",
        action: "Submit Another Query",
      },
    },
    footer: {
      description:
        "MAM Company is a software engineering studio specialized in building cutting-edge digital products, premium mobile/web platforms, and advanced AI agents.",
      ctaKicker: "READY TO START YOUR PROJECT?",
      ctaTitle: "Let's create something world-class.",
      ctaAction: "Let's Talk",
      rights: "All rights reserved.",
      brand: "MAM",
      columns: [
        {
          title: "COMPANY",
          links: [
            { name: "About Us", href: "#home" },
            { name: "Our Team", href: "#home" },
            { name: "Careers", href: "#home" },
            { name: "Blog", href: "#home" },
          ],
        },
        {
          title: "SERVICES",
          links: [
            { name: "Mobile Apps", href: "#services" },
            { name: "E-Commerce", href: "#services" },
            { name: "AI Solutions", href: "#services" },
            { name: "Web Development", href: "#services" },
            { name: "UI/UX Design", href: "#services" },
          ],
        },
        {
          title: "WORK",
          links: [
            { name: "All Projects", href: "#portfolio" },
            { name: "Case Studies", href: "#portfolio" },
            { name: "Our Process", href: "#process" },
          ],
        },
        {
          title: "RESOURCES",
          links: [
            { name: "Articles", href: "#home" },
            { name: "FAQ", href: "#home" },
            { name: "Privacy Policy", href: "#home" },
            { name: "Terms of Service", href: "#home" },
          ],
        },
      ],
    },
  },
  ar: {
    common: {
      languageButtonLabel: "EN",
      languageToggleAria: "التبديل إلى الإنجليزية",
      readDetails: "قراءة التفاصيل",
      exploreCaseStudy: "استكشف دراسة الحالة",
      secure: "// آمن",
      startProject: "ابدأ مشروعك",
      startYourProject: "ابدأ مشروعك",
    },
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      aiLab: "مختبر الذكاء",
      work: "الأعمال",
      process: "المنهجية",
      techStack: "التقنيات",
      testimonials: "الآراء",
      navigationSystems: "// أنظمة التصفح",
      systemStatus: "حالة النظام // ممتاز",
      copyright: "شركة MAM © 2026",
      toggleMenu: "فتح القائمة",
    },
    hero: {
      headline: ["نُهندس", "مستقبل", "الذكاء"],
      subtitle:
        "نصمم ونبني أنظمة ذكاء اصطناعي متقدمة، وبرمجيات مؤسسية، ومنتجات رقمية قابلة للتوسع للشركات الطموحة حول العالم.",
      exploreWork: "استكشف أعمالنا",
      stats: [
        { value: "50+", label: "مشروع مُنجز" },
        { value: "15+", label: "نظام ذكاء مبني" },
        { value: "98%", label: "رضا العملاء" },
        { value: "24/7", label: "دعم تقني" },
      ],
    },
    services: {
      kicker: "// الخبرات",
      titleLine: "حلول تدفع",
      titleHighlight: "نموك الرقمي",
      description:
        "نصمم ونبني ونوسع منتجات برمجية فاخرة وأنظمة ذكية تحول الرؤى الطموحة إلى برمجيات قوية وجاهزة للسوق.",
      embeds: {
        neuralEngine: "محرك عصبي",
        optimizingModel: "تحسين النموذج",
        apiLatency: "زمن استجابة API",
        avgLatency: "متوسط 14ms",
        grossVolume: "إجمالي الحجم",
        conversionRate: "+142% معدل التحويل",
      },
      items: [
        {
          title: "حلول الذكاء الاصطناعي",
          description:
            "أنظمة تعلم آلي مخصصة، ونماذج رؤية حاسوبية، ومحركات تنبؤ ذكية تحول البيانات الخام إلى عمليات استراتيجية.",
        },
        {
          title: "وكلاء الذكاء الاصطناعي",
          description:
            "قوى عمل رقمية مستقلة تبسط اتخاذ القرار وتنفذ سير عمل معقد عبر عدة أنظمة بدقة عالية.",
        },
        {
          title: "تطبيقات الموبايل",
          description:
            "تطبيقات أصلية ومتعددة المنصات عالية الأداء، تركز على الحركة السلسة والتنقل بالإيماءات وتجربة استخدام راقية.",
        },
        {
          title: "منصات الويب",
          description:
            "تطبيقات ويب حديثة، ولوحات SaaS، وبوابات رقمية مبنية لزمن استجابة منخفض ونمو قابل للتوسع.",
        },
        {
          title: "منصات التجارة الإلكترونية",
          description:
            "واجهات بيع رقمية فاخرة محسنة لسرعة المعاملات، وسلاسة الدفع، وعرض العلامة التجارية بشكل غامر.",
        },
        {
          title: "أنظمة مخصصة",
          description:
            "محركات خلفية مصممة خصيصاً، وتصاميم قواعد بيانات فورية، وتكاملات API معقدة، وترحيلات معمارية مرنة.",
        },
      ],
    },
    aiBrain: {
      kicker: "// هندسة الأنظمة",
      titleLine1: "بنية برمجية",
      titleLine2: "تحتية معمارية",
      description:
        "نصمم ونبني ونحافظ على المعمارية البرمجية التي تشغل الأنظمة المستقلة المعقدة. بلا قوالب جاهزة ولا أغلفة طرف ثالث، فقط محركات مؤسسية مخصصة وعالية الأداء ومبنية لتدوم.",
      metrics: [
        { value: "0.04ms", label: "زمن الحافة" },
        { value: "99.98%", label: "دقة النظام" },
        { value: "40%+", label: "تسريع الحوسبة" },
      ],
      stackTitle: "طبقات البنية // STACK",
      systemState: "حالة النظام // ممتاز",
      layers: [
        {
          title: "واجهة الحافة وشبكة التوجيه",
          status: "مثالي",
          desc: "إدارة نقاط نهاية عالمية موزعة، وترتيب طلبات آمن، وبوابات اتصال بزمن استجابة منخفض.",
          metrics: "الزمن: 0.04ms // المتزامن: 120k",
        },
        {
          title: "منسق الوكلاء المستقلين",
          status: "نشط",
          desc: "تنظيم السياق متعدد المسارات، وتنسيق الخيوط، وتوزيع ذكي للموارد عبر نماذج عنقودية.",
          metrics: "الخيوط: 8,192 // الكفاءة: 99.98%",
        },
        {
          title: "فهرسة دلالية ومجمع ذاكرة",
          status: "مستقر",
          desc: "تقسيمات ذاكرة متجهية عالية الأداء، وطبقات تخزين مؤقت متعددة المستأجرين، وبحث دلالي عالي التردد.",
          metrics: "السعة: 48TB // الاسترجاع: 8.5ms",
        },
        {
          title: "مصفوفة حوسبة GPU موزعة",
          status: "محسّن",
          desc: "تكامل مباشر مع عتاد الحوسبة، وخطوط فشل تلقائية، وحلقات معالجة tensor قابلة للتوسع.",
          metrics: "حمل GPU: 34.2% // الحرارة: 42°C",
        },
      ],
    },
    portfolio: {
      kicker: "// الأعمال",
      titleLine: "مشاريع نفخر",
      titleHighlight: "بإنجازها",
      categories: [
        { id: "all", label: "الكل" },
        { id: "ai", label: "الذكاء" },
        { id: "mobile", label: "موبايل" },
        { id: "ecommerce", label: "تجارة" },
        { id: "saas", label: "SaaS" },
        { id: "enterprise", label: "مؤسسي" },
      ],
      mockups: {
        checkoutPlatform: "منصة الدفع",
        online: "متصل",
        authStatus: "حالة التحقق",
        approved: "مقبول",
        txDelay: "تأخير العملية",
        secureGate: "بوابة آمنة",
        dataMatrix: "مصفوفة البيانات",
        retrieving: "استرجاع DB_CLUSTERS...",
        apexShield: "درع Apex نشط",
        threatRatio: "نسبة التهديد",
        edgeNodes: "عُقد الحافة",
        activeNodes: "1,450 نشطة",
      },
      projects: [
        {
          title: "منصات OmniAgent",
          categoryId: "ai",
          categoryLabel: "الذكاء",
          outcome: "أتمتة 85% من استفسارات العملاء",
          description:
            "منصة وكلاء مستقلة متعددة مصممة لحل مهام دعم مؤسسية معقدة عبر عدة أنظمة خلال ثوان.",
        },
        {
          title: "واجهات ShopEase",
          categoryId: "ecommerce",
          categoryLabel: "تجارة",
          outcome: "+142% زيادة في التحويل",
          description:
            "واجهة متجر رقمية حديثة محسنة بمحركات توصية فورية، وأنظمة دفع بالميكروثانية، وانتقالات سلسة.",
        },
        {
          title: "تحليلات NovaCore",
          categoryId: "saas",
          categoryLabel: "SaaS",
          outcome: "40% مكسب في الكفاءة التشغيلية",
          description:
            "لوحة بيانات سحابية مرنة تجمع تحليلات الأعمال وتتنبأ باتجاهات النمو باستخدام الشبكات العصبية.",
        },
        {
          title: "شبكات Apex السحابية",
          categoryId: "enterprise",
          categoryLabel: "مؤسسي",
          outcome: "99.99% اتفاقية تشغيل",
          description:
            "بنية شبكية أساسية معزولة وآمنة ونظام كشف تهديدات مدعوم بالتعلم الآلي للشركات العالمية.",
        },
      ],
    },
    process: {
      kicker: "منهجيتنا",
      titleLine1: "كيف نبني",
      titleLine2: "منتجات رقمية عظيمة",
      description:
        "مسار هندسي دقيق وعالي الجودة مصمم لإحياء التطبيقات المعقدة وأنظمة الذكاء الاصطناعي المتقدمة.",
      steps: [
        {
          title: "اكتشاف",
          subtitle: "بحث وتحديد النطاق",
          description:
            "نفكك رؤيتك، ونحلل الجمهور المستهدف، ونرسم الحدود التقنية الحالية، ونحدد أهدافاً تشغيلية دقيقة.",
        },
        {
          title: "استراتيجية",
          subtitle: "تصميم النظام والخارطة",
          description:
            "نبني مخططات قواعد البيانات، ونختار التقنية الأنسب، ونصمم وكلاء الذكاء، ونحدد مسار سبرنت مرن.",
        },
        {
          title: "تصميم",
          subtitle: "جماليات وتفاعل",
          description:
            "نصمم واجهات فاخرة عالية الدقة، ورسومات زجاجية، وتفاعلات دقيقة، ومجموعات تصميم قياسية.",
        },
        {
          title: "تطوير",
          subtitle: "هندسة وتكامل",
          description:
            "يبني مهندسونا مكونات TypeScript عالية الأداء، ويوسعون APIs قوية، وينفذون نماذج عصبية، ويؤمنون الإعدادات.",
        },
        {
          title: "إطلاق",
          subtitle: "نشر بثقة",
          description:
            "ندير عمليات بناء حاوية، ونضبط توجيه الحافة العالمي، ونراجع استقرار قواعد البيانات، ونطلق بلا توقف.",
        },
        {
          title: "توسعة",
          subtitle: "تحسين وتحليل",
          description:
            "نراقب زمن التشغيل، ونحسن دقة الوكلاء، ونجري تدقيقات خوادم، ونوسع عمليات قواعد البيانات باستمرار.",
        },
      ],
    },
    techStack: {
      title: "منظومة التقنيات",
      description:
        "نبني أنظمتنا على أطر عالية الأداء، وقواعد بيانات متجهية حديثة، وسحابات عالمية، وتكاملات معرفية متقدمة.",
      technologies: [
        { name: "React", category: "إطار الواجهات", isActive: true },
        { name: "Next.js", category: "معمارية أساسية", isActive: true },
        { name: "TypeScript", category: "لغة أساسية", isActive: false },
        { name: "Node.js", category: "تشغيل الخلفية", isActive: false },
        { name: "Flutter", category: "نظام الموبايل", isActive: false },
        { name: "Python", category: "ذكاء وسكربتات", isActive: true },
        { name: "FastAPI", category: "API عالي الأداء", isActive: true },
        { name: "PostgreSQL", category: "قاعدة علائقية", isActive: false },
        { name: "MongoDB", category: "قاعدة وثائق", isActive: false },
        { name: "Docker", category: "حاويات النشر", isActive: false },
        { name: "AWS Cloud", category: "بنية تحتية", isActive: true },
        { name: "OpenAI Models", category: "تكامل عصبي", isActive: false },
        { name: "Anthropic API", category: "نماذج معرفية", isActive: false },
        { name: "LangChain", category: "تنسيق الوكلاء", isActive: false },
        { name: "Pinecone DB", category: "قاعدة متجهية", isActive: true },
        { name: "TensorFlow", category: "محرك تعلم عميق", isActive: false },
      ],
    },
    testimonials: {
      kicker: "آراء العملاء",
      titleLine1: "موثوق من شركات",
      titleLine2: "تشبه طموحك",
      previousAria: "الرأي السابق",
      nextAria: "الرأي التالي",
      items: [
        {
          quote:
            "احترافية وسرعة ومهارة استثنائية. منصة SaaS المخصصة تعمل بزمن استجابة شبه معدوم، ومظهرها جميل، وتتوسع بثبات تحت الضغط العالي. جودة الهندسة لديهم نادرة.",
          name: "David Smith",
          designation: "مؤسس Taskly",
          src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop",
        },
        {
          quote:
            "أنظمة الذكاء الاصطناعي التي بنوها غيرت طريقة عملنا. الفريق يفهم احتياجات المؤسسات بعمق ويسلم بدقة وسرعة لم نرها في مكان آخر.",
          name: "Sarah Chen",
          designation: "المديرة التقنية في NexaFlow",
          src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop",
        },
        {
          quote:
            "من المعمارية إلى النشر، تمت العناية بكل تفصيل. النتيجة تجاوزت توقعاتنا تقنياً وبصرياً.",
          name: "Marcus Webb",
          designation: "الرئيس التنفيذي في Orbix Systems",
          src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop",
        },
      ],
    },
    contact: {
      kicker: "تواصل معنا",
      titleLine1: "لنبنِ شيئاً",
      titleLine2: "مذهلاً معاً",
      description:
        "لديك مشروع في ذهنك؟ املأ نموذج التواصل أدناه ودعنا نناقش كيف نبنيه بأفضل صورة.",
      informationTitle: "معلومات التواصل",
      info: [
        { title: "البريد", value: "hello@mamcompany.com" },
        { title: "الهاتف", value: "+1 (234) 567-8900" },
        { title: "الموقع", value: "عن بعد / حول العالم" },
        { title: "ساعات العمل", value: "متاحون 24/7" },
      ],
      form: {
        labels: {
          name: "اسمك",
          email: "البريد الإلكتروني",
          company: "اسم الشركة",
          projectType: "نوع المشروع",
          budget: "الميزانية المتوقعة",
          message: "حدثنا عن مشروعك",
        },
        placeholders: {
          name: "مثال: علي محمد",
          email: "مثال: ali@company.com",
          company: "مثال: ShopEase LLC",
          projectType: "اختر التصنيف",
          budget: "اختر النطاق",
          message:
            "اكتب أهم الميزات المطلوبة، توقعات قاعدة البيانات، أو قدرات الذكاء الاصطناعي التي تحتاجها...",
        },
        validation: {
          name: "يجب أن يتكون الاسم من حرفين على الأقل",
          email: "البريد الإلكتروني غير صالح",
          company: "اسم الشركة مطلوب",
          projectType: "يرجى اختيار نوع المشروع",
          budget: "يرجى اختيار نطاق الميزانية",
          message: "يجب أن تتكون الرسالة من 10 أحرف على الأقل",
        },
        projectTypes: [
          { value: "ai-agents", label: "تكامل وكلاء الذكاء الاصطناعي" },
          { value: "mobile-apps", label: "تطبيقات الموبايل" },
          { value: "saas-platform", label: "منصة SaaS" },
          { value: "ecommerce", label: "حلول التجارة الإلكترونية" },
          { value: "enterprise", label: "برمجيات مؤسسية مخصصة" },
          { value: "transformation", label: "تحول رقمي" },
        ],
        budgets: [
          { value: "< $10,000", label: "أقل من $10,000" },
          { value: "$10,000 - $25,000", label: "$10,000 - $25,000" },
          { value: "$25,000 - $50,000", label: "$25,000 - $50,000" },
          { value: "$50,000+", label: "$50,000+" },
        ],
        sending: "جارٍ الإرسال...",
        submit: "إرسال الرسالة",
      },
      success: {
        title: "تم إرسال الرسالة بنجاح",
        description:
          "شكراً لتواصلك معنا. سيراجع مهندسونا تفاصيل مشروعك ويتواصلون معك خلال 12 ساعة.",
        action: "إرسال طلب آخر",
      },
    },
    footer: {
      description:
        "شركة MAM استوديو هندسة برمجيات متخصص في بناء منتجات رقمية متقدمة، ومنصات موبايل وويب فاخرة، ووكلاء ذكاء اصطناعي متطورين.",
      ctaKicker: "جاهز لبدء مشروعك؟",
      ctaTitle: "لنصنع شيئاً بمستوى عالمي.",
      ctaAction: "لنتحدث",
      rights: "جميع الحقوق محفوظة.",
      brand: "MAM",
      columns: [
        {
          title: "الشركة",
          links: [
            { name: "من نحن", href: "#home" },
            { name: "فريقنا", href: "#home" },
            { name: "الوظائف", href: "#home" },
            { name: "المدونة", href: "#home" },
          ],
        },
        {
          title: "الخدمات",
          links: [
            { name: "تطبيقات الموبايل", href: "#services" },
            { name: "التجارة الإلكترونية", href: "#services" },
            { name: "حلول الذكاء", href: "#services" },
            { name: "تطوير الويب", href: "#services" },
            { name: "تصميم UI/UX", href: "#services" },
          ],
        },
        {
          title: "الأعمال",
          links: [
            { name: "كل المشاريع", href: "#portfolio" },
            { name: "دراسات الحالة", href: "#portfolio" },
            { name: "منهجيتنا", href: "#process" },
          ],
        },
        {
          title: "الموارد",
          links: [
            { name: "مقالات", href: "#home" },
            { name: "الأسئلة الشائعة", href: "#home" },
            { name: "سياسة الخصوصية", href: "#home" },
            { name: "شروط الخدمة", href: "#home" },
          ],
        },
      ],
    },
  },
} as const;

export type Translation = (typeof translations)[Locale];
