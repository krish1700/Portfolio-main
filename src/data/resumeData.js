// Update this file with your actual resume information
export const resumeData = {
  personal: {
    name: "Krish Naresh Patil",
    title: "Data Engineer & Analytics",
    email: "krishpatil4151@gmail.com",
    phone: "(480) 791-9504",
    location: "Tempe, AZ",
    photo: "/photo.jpg",
    summary:
      "M.S. Software Engineering student focused on data engineering and analytics. Built scalable ETL on AWS/GCP/Azure, real-time dashboards, and ML-powered insights; experienced with Airflow, Databricks, Spark, Power BI, and Kubernetes.",
    tagline: "Turning data into decisions",
    links: {
      github: "https://github.com/krish1700",
      linkedin: "https://www.linkedin.com/in/krish-naresh-patil/",
      email: "mailto:krishpatil4151@gmail.com"
    }
  },

  experience: [
    {
      id: 1,
      company: "Arizona State University",
      position: "Teaching Assistant – Big Data Analytics",
      location: "Tempe, AZ",
      startDate: "Jan 2026",
      endDate: "Present",
      description: [
        "Designed and delivered lab instruction on Spark, Hadoop, and distributed systems concepts for 100+ graduate students",
        "Analyzed 50K+ App Store and Google Play records using Python and SQL to study global platform adoption trends",
        "Developed Tableau dashboards visualizing app adoption trends and user behavior, used for coursework and research presentations"
      ],
      technologies: ["Spark", "Hadoop", "Python", "SQL", "Tableau"],
      metrics: { students: "100+", records: "50K+" }
    },
    {
      id: 2,
      company: "Flex Technology Group",
      position: "Data Analytics Intern",
      location: "Tempe, AZ",
      startDate: "Jun 2025",
      endDate: "Aug 2025",
      description: [
        "Created 5+ Power BI dashboards integrating SQL Server and Microsoft Fabric tracking revenue, operations, and sales for 500+ clients",
        "Streamlined weekly reporting in Microsoft Fabric using SQL and Power BI, reducing manual analysis by 60% (16 to 6.5 hrs/week)",
        "Migrated legacy SSRS reports to Power BI with enhanced interactivity and drill-through, improving usability and cutting time by 15%",
        "Partnered with sales & operations teams to define 20+ KPIs and build data models, consolidating reporting across 3 business units"
      ],
      technologies: ["Power BI", "SQL Server", "Microsoft Fabric", "Lakehouse"],
      metrics: { dashboards: "5+", efficiencyGain: "60%", turnaround: "15% faster", clients: "500+", kpis: "20+" }
    },
    {
      id: 3,
      company: "Capgemini",
      position: "Software Engineer",
      location: "India",
      startDate: "Jul 2022",
      endDate: "Jul 2024",
      description: [
        "Architected ETL pipelines with Python, SQL, Airflow, and BigQuery processing 50M+ daily records, reducing latency from 6 to 4 hrs",
        "Migrated 50+ legacy SAS workflows to Python on GCP with parallel processing, cutting average job runtime by 55%",
        "Automated data ingestion across PostgreSQL, MySQL, MongoDB, and FTP, reducing manual effort by 40% (15 to 6 hrs/week)",
        "Deployed Kubernetes workflows with monitoring and auto-healing, achieving 99.9% uptime and cutting incident resolution to 45 min",
        "Engineered FTP/SFTP ingestion pipelines for 10+ server feeds, converting raw data into structured, analytics-ready datasets",
        "Refactored AWS Glue, Lambda, and S3 workflows to reduce execution time by 30% and improve end-to-end reliability",
        "Implemented real-time AWS SNS alerting to surface pipeline failures earlier, reducing operational downtime by 25%",
        "Processed 20M+ records on Databricks clusters, optimizing compute usage and improving pipeline throughput by 35%"
      ],
      technologies: [
        "Python",
        "Airflow",
        "GCP BigQuery",
        "GCP Cloud Storage",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Kubernetes",
        "Databricks",
        "AWS Glue",
        "AWS Lambda",
        "Amazon S3",
        "AWS SNS",
        "SAS",
        "dbt"
      ],
      metrics: { dailyRecords: "50M+", sasMigrations: "50+", manualReduction: "40%", uptime: "99.9%" }
    }
  ],

  education: [
    {
      id: 1,
      institution: "Arizona State University",
      degree: "M.S. in Software Engineering",
      location: "Tempe, AZ",
      startDate: "August 2024",
      endDate: "May 2026",
      gpa: "3.67/4.0",
      achievements: [
        "GPA: 3.67/4.0",
        "Relevant Coursework: Cloud Computing, Advanced Data Structures & Algorithms, Info Assurance & Security"
      ]
    },
    {
      id: 2,
      institution: "University of Mumbai",
      degree: "B.E. in Computer Engineering",
      location: "Mumbai, India",
      startDate: "August 2018",
      endDate: "May 2022",
      gpa: "3.46/4.0",
      achievements: [
        "GPA: 3.46/4.0",
        "Relevant Coursework: Data Structures, Data Warehousing, Machine Learning, Big Data, Distributed Computing"
      ]
    }
  ],

  skills: {
    "Programming Languages": [
      { name: "Python", level: 95 },
      { name: "SQL", level: 90 },
      { name: "JavaScript", level: 75 },
      { name: "Java", level: 70 },
      { name: "Bash", level: 80 }
    ],
    "Data Engineering & ETL": [
      { name: "Apache Airflow", level: 90 },
      { name: "Apache Kafka", level: 80 },
      { name: "PySpark", level: 85 },
      { name: "Spark Structured Streaming", level: 80 },
      { name: "dbt", level: 75 },
      { name: "Databricks", level: 85 },
      { name: "Snowflake", level: 80 },
      { name: "ETL Pipelines", level: 90 },
      { name: "Data Warehousing", level: 85 },
      { name: "Data Modeling", level: 85 }
    ],
    "Cloud Platforms": [
      { name: "AWS (EC2, Lambda, Glue, S3, SNS, CloudWatch)", level: 90 },
      { name: "GCP (BigQuery, Cloud Storage, Dataflow)", level: 85 },
      { name: "Microsoft Fabric", level: 85 }
    ],
    "Databases": [
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 75 },
      { name: "Neo4j (Graph DB)", level: 70 }
    ],
    "Analytics & Visualization": [
      { name: "Power BI", level: 95 },
      { name: "Tableau", level: 90 },
      { name: "Looker Studio", level: 80 },
      { name: "Pandas", level: 90 },
      { name: "Scikit-learn", level: 75 }
    ],
    "DevOps & Orchestration": [
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 80 },
      { name: "Git", level: 90 },
      { name: "CI/CD", level: 85 },
      { name: "Prometheus", level: 75 },
      { name: "Grafana", level: 75 }
    ],
    "Tools & Frameworks": [
      { name: "FastAPI", level: 80 },
      { name: "REST APIs", level: 85 },
      { name: "JIRA", level: 80 },
      { name: "Agile/Scrum", level: 85 },
      { name: "Linux", level: 85 }
    ],
    "Core Concepts": [
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "System Design", level: 80 },
      { name: "Distributed Systems", level: 80 }
    ]
  },

  projects: [
    {
      id: 1,
      name: "Real-Time Fraud Detection Pipeline",
      description:
        "Engineered a fraud detection system using Kafka, Spark Structured Streaming, and PostgreSQL, processing 100 TPS with <15s latency. Implemented velocity-based fraud detection and Neo4j graph analytics to detect fraud networks.",
      technologies: ["Apache Kafka", "Spark Structured Streaming", "PostgreSQL", "Neo4j", "Apache Airflow", "dbt", "Prometheus", "Grafana"],
      github: "https://github.com/krish1700",
      live: "",
      category: "Data Engineering",
      metrics: {
        throughput: "100 TPS",
        latency: "<15s",
        monitoring: "Prometheus + Grafana"
      },
      highlights: [
        "Kafka + Spark Structured Streaming pipeline processing 100 TPS with <15s latency",
        "Neo4j graph analytics (PageRank, Louvain) to detect fraud networks",
        "Orchestrated with Airflow and dbt; monitored end-to-end with Prometheus and Grafana"
      ],
      dates: "Feb 2026 – Mar 2026"
    },
    {
      id: 2,
      name: "TherapyAI",
      description:
        "Built an AI therapy companion with LLM personas using Gemini API, FastAPI, and pyttsx3 for human-like voice responses. Stored user profiles and conversation history in AWS S3, enabling personalized therapy continuity. Won Best Use of AI Personas at DevHacks 2025 among 200+ participants.",
      technologies: ["FastAPI", "Python", "Gemini API", "AWS S3", "pyttsx3"],
      github: "",
      live: "",
      category: "AI Applications",
      metrics: { participants: "200+", award: "Best Use of AI Personas" },
      highlights: [
        "Won Best Use of AI Personas at DevHacks 2025 among 200+ participants",
        "LLM personas with human-like voice responses using Gemini API and pyttsx3",
        "AWS S3 persistence for personalized therapy continuity across sessions"
      ],
      dates: "Oct 2025 – Nov 2025"
    },
    {
      id: 3,
      name: "Elastic Face Recognition Platform (AWS)",
      description:
        "Multi-tier AWS system (EC2, S3, SQS) for real-time face recognition with autoscaling from 0–15 instances; Python web/app tiers for ingestion, inference, and delivery",
      technologies: ["AWS EC2", "Amazon S3", "Amazon SQS", "Python"],
      github: "",
      live: "",
      category: "Cloud & ML Systems",
      metrics: {
        accuracy: "100% (benchmarked)",
        latency: "<1s",
        concurrency: "100 requests"
      },
      highlights: [
        "Validated using AWS autograder benchmarks",
        "Autoscaling from 0 to 15 instances based on queue depth"
      ],
      dates: "Sept 2025 – Oct 2025"
    },
    {
      id: 4,
      name: "CareerCatalyst.ai",
      description:
        "AI-powered resume analysis tool using FastAPI and NLP for personalized, data-driven feedback; containerized and deployed with Docker",
      technologies: ["FastAPI", "Python", "LLM APIs", "Docker"],
      github: "",
      live: "",
      category: "AI Applications",
      metrics: { accuracyGain: "35% recommendation improvement" },
      highlights: [
        "Scalable backend supporting concurrent requests",
        "Algorithmic scoring for actionable feedback"
      ],
      dates: "Dec 2024 – Jan 2025"
    },
    {
      id: 5,
      name: "Scrum Simulator (Agile)",
      description:
        "Java application delivered over a structured 4-week Agile timeline across two sprints with iterative feedback",
      technologies: ["Java"],
      github: "",
      live: "",
      category: "Software Engineering",
      metrics: { deliveryTime: "15% faster" },
      highlights: [
        "Sprint planning, reviews, and retrospectives to boost team communication"
      ],
      dates: "Oct 2024 – Nov 2024"
    },
    {
    id: 6,
    name: "AgrInsight",
    description:
      "Built Looker Studio dashboard for 500K+ agriculture records, analyzing crop yields and environmental impacts. Integrated RDF graphs to enhance data integration and visualization accuracy.",
    technologies: ["Python", "Looker Studio", "RDF", "Knowledge Graphs"],
    github: "",
    live: "",
    category: "Data Analytics & Visualization",
    metrics: {
      records: "500K+",
      integrationBoost: "30%",
      processingImprovement: "25%"
    },
    highlights: [
      "Built Looker Studio dashboard for 500K+ agriculture records",
      "Constructed 1000+ RDF triples with Python, boosting data integration by 30%",
      "Integrated RDF knowledge graphs, minimizing processing time by 25% and improving visualization accuracy"
    ],
    dates: "November 2024"
  },
  {
    id: 7,
    name: "Movie Recommender",
    description:
      "Developed a collaborative filtering–based recommendation system using Python to enhance personalization and engagement. Implemented user-item interaction matrices and optimized performance via real-time recommendation updates.",
    technologies: ["Python", "Pandas", "NumPy", "Flask"],
    github: "",
    live: "",
    category: "Machine Learning & AI",
    metrics: {
      engagementIncrease: "20%",
      accuracyBoost: "15%",
      userSatisfaction: "30%"
    },
    highlights: [
      "Developed collaborative filtering–based movie recommender system using Python, achieving 20% increase in engagement",
      "Implemented user-item matrix to generate personalized recommendations",
      "Enhanced algorithm accuracy by 15% and user satisfaction by 30%",
      "Integrated real-time web interface for live movie recommendations"
    ],
    dates: "January 2022"
  }
  ],

  certifications: [
    { id: 1, name: "DevHacks 2025 Winner – Best Use of AI Personas (TherapyAI)", issuer: "DevHacks – Arizona State University", date: "2025", credentialId: "" },
    { id: 2, name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", date: "2022", credentialId: "EE68G9W1RERQ1XCK" },
    { id: 3, name: "AZ-900: Microsoft Azure Fundamentals", issuer: "Microsoft", date: "2022", credentialId: "I390-0533" },
    { id: 4, name: "Power BI Desktop", issuer: "Coursera", date: "2022", credentialId: "" },
    { id: 5, name: "Machine Learning, Data Science & AI Engineering with Python", issuer: "Udemy", date: "2021", credentialId: "" }
  ]
};
