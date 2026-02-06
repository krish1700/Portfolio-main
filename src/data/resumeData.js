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
      company: "Flex Technology Group",
      position: "Data Analytics Intern",
      location: "Tempe, AZ",
      startDate: "Jun 2025",
      endDate: "Aug 2025",
      description: [
        "Built 5+ Power BI dashboards integrating SQL Server and Microsoft Fabric Lakehouse to track revenue, usage, and sales in real time",
        "Automated reporting workflows in Fabric and SQL, reducing manual analysis by 40%",
        "Migrated legacy SSRS reports to Power BI, improving usability and cutting turnaround time by 15%",
        "Defined KPIs and data models with cross-functional teams to streamline analytics and stakeholder insights"
      ],
      technologies: ["Power BI", "SQL Server", "Microsoft Fabric", "Lakehouse"],
      metrics: { dashboards: "5+", efficiencyGain: "40%", turnaround: "15% faster" }
    },
    {
      id: 2,
      company: "Capgemini (India)",
      position: "Data Engineer",
      location: "India",
      startDate: "Jul 2022",
      endDate: "Jul 2024",
      description: [
        "Built distributed ETL pipelines using Python, SQL, Airflow, and GCP (BigQuery, Cloud Storage) to process operational data",
        "Migrated 50+ SAS jobs to Python on GCP with parallelization to improve scalability and consistency",
        "Automated ingestion from PostgreSQL, MySQL, MongoDB, and FTP agents, reducing manual work by 85%",
        "Deployed and managed workflows on Kubernetes, improving pipeline uptime to 99.9%",
        "Crafted BigQuery dashboards for membership and gift-card KPIs by U.S. region",
        "Refactored AWS Glue/Lambda/S3 workflows to cut execution time by ~30% and improve reliability",
        "Implemented AWS SNS alerting for early failure detection, reducing operational downtime by 25%",
        "Processed millions of records on Databricks clusters, improving pipeline efficiency by ~35%",
        "Streamlined IAM roles to enforce secure, role-based access across pipelines"
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
        "IAM",
        "SAS"
      ],
      metrics: { sasMigrations: "50+", manualReduction: "85%", uptime: "99.9%" }
    }
  ],

  education: [
    {
      id: 1,
      institution: "Arizona State University",
      degree: "M.S. in Software Engineering",
      location: "Tempe, AZ",
      startDate: "August 2024",
      endDate: "Expected May 2026",
      achievements: []
    },
    {
      id: 2,
      institution: "University of Mumbai",
      degree: "B.E. in Computer Engineering",
      location: "Mumbai, India",
      startDate: "August 2018",
      endDate: "May 2022",
      achievements: []
    }
  ],

  skills: {
    "Programming Languages": [
      { name: "Python", level: 95 },
      { name: "SQL", level: 90 },
      { name: "TypeScript", level: 65 },
      { name: "JavaScript", level: 75 },
      { name: "Java", level: 70 },
      { name: "C++", level: 65 },
      { name: "Bash", level: 80 }
    ],
    "Data Engineering & Big Data": [
      { name: "Apache Airflow", level: 90 },
      { name: "Apache Kafka", level: 75 },
      { name: "PySpark", level: 85 },
      { name: "Databricks", level: 85 },
      { name: "ETL Pipelines", level: 90 },
      { name: "Data Warehousing", level: 85 },
      { name: "Data Integration", level: 85 },
      { name: "Data Modeling", level: 85 }
    ],
    "Cloud Platforms": [
      { name: "AWS (EC2, Lambda, Glue, S3)", level: 90 },
      { name: "GCP (BigQuery, Cloud Storage)", level: 85 },
      { name: "Azure", level: 75 },
      { name: "Microsoft Fabric", level: 85 },
      { name: "Snowflake", level: 80 }
    ],
    "Databases & Storage": [
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "RDBMS", level: 85 },
      { name: "MongoDB", level: 75 },
      { name: "JSON/XML", level: 85 }
    ],
    "Analytics & Visualization": [
      { name: "Power BI", level: 95 },
      { name: "Tableau", level: 90 },
      { name: "Excel", level: 85 },
      { name: "Visual Studio Code", level: 90 }
    ],
    "DevOps & Tools": [
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 80 },
      { name: "Git", level: 90 },
      { name: "CI/CD", level: 85 },
      { name: "JIRA", level: 80 },
      { name: "Linux", level: 85 },
      { name: "Scripting", level: 85 }
    ],
    "Development & Frameworks": [
      { name: "React", level: 80 },
      { name: "SDLC", level: 85 },
      { name: "Agile", level: 85 },
      { name: "Testing", level: 80 },
      { name: "Debugging", level: 85 },
      { name: "Troubleshooting", level: 85 }
    ],
    "Core Concepts": [
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "Networking", level: 75 },
      { name: "System Design", level: 80 }
    ]
  },

  projects: [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
    id: 4,
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
    id: 5,
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
    { id: 1, name: "DevHacks 2025 Winner – Best Use of AI Personas (TherapyAI)", issuer: "DevHack - Arizona State University", date: "2025", credentialId: "" },
    { id: 2, name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", date: "2022", credentialId: "EE68G9W1RERQ1XCK" },
    { id: 3, name: "AZ-900: Microsoft Azure Fundamentals", issuer: "Microsoft", date: "2022", credentialId: "I390-0533" },
    { id: 4, name: "Power BI Desktop", issuer: "Coursera", date: "2022", credentialId: "" },
    { id: 5, name: "Machine Learning, Data Science & AI Engineering with Python", issuer: "Udemy", date: "2021", credentialId: "" }
  ]
};
