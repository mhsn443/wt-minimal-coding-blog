type Category = {
  name: string;
  href: string;
};

export type Post = {
  id: number;
  title: string;
  summary: string;
  href: string;
  date: string;
  author: string;
  category: Category;
  featuredCategories: string[];
};

export const posts: Post[] = [
  {
    id: 1,
    title: "Mastering React 18: Tips and Best Practices",
    summary:
      "Learn how to build fast and maintainable web applications with React 18. This guide covers hooks, state management, performance optimization, and best practices for scalable frontend architecture.",
    href: "#",
    date: "October 1, 2025",
    author: "Jane Doe",
    category: { name: "Frontend", href: "#" },
    featuredCategories: ["Trending Now", "Pro Tips"],
  },
  {
    id: 2,
    title: "Building Scalable APIs with Node.js and Express",
    summary:
      "Dive into designing and deploying RESTful APIs with Node.js and Express. Learn about authentication, error handling, performance optimization, and best practices for building robust backend services.",
    href: "#",
    date: "October 5, 2025",
    author: "John Smith",
    category: { name: "Backend", href: "#" },
    featuredCategories: ["Deep Dives", "Pro Tips"],
  },
  {
    id: 3,
    title: "Getting Started with Flutter for Mobile Development",
    summary:
      "Create cross-platform mobile apps with Flutter. Learn about widgets, layouts, state management, API integration, and deploying apps for both Android and iOS.",
    href: "#",
    date: "October 10, 2025",
    author: "Maya Patel",
    category: { name: "Mobile", href: "#" },
    featuredCategories: ["Community Picks", "Trending Now"],
  },
  {
    id: 4,
    title: "Introduction to Kubernetes: Container Orchestration Made Simple",
    summary:
      "Understand Kubernetes basics and container orchestration. Learn to manage pods, services, deployments, scaling, and CI/CD integration for production-grade applications.",
    href: "#",
    date: "October 15, 2025",
    author: "Bob Lee",
    category: { name: "DevOps", href: "#" },
    featuredCategories: ["Deep Dives"],
  },
  {
    id: 5,
    title: "Data Analysis with Python: Pandas and Matplotlib",
    summary:
      "Learn to manipulate, analyze, and visualize data using Python's Pandas and Matplotlib. Gain practical skills for cleaning datasets, aggregating information, and creating insightful visualizations.",
    href: "#",
    date: "October 20, 2025",
    author: "Clara Zhang",
    category: { name: "Data Science", href: "#" },
    featuredCategories: ["Community Picks", "Pro Tips"],
  },
  {
    id: 6,
    title: "Building Machine Learning Pipelines with scikit-learn",
    summary:
      "Explore end-to-end machine learning workflows with Python’s scikit-learn. Learn preprocessing, feature engineering, model training, evaluation, and deployment techniques for scalable ML solutions.",
    href: "#",
    date: "October 25, 2025",
    author: "David Kim",
    category: { name: "AI", href: "#" },
    featuredCategories: ["Deep Dives", "Trending Now"],
  },
  {
    id: 7,
    title: "Next.js 15: What’s New and Why It Matters",
    summary:
      "Stay updated on Next.js 15 features for server-rendered and static React applications. Learn about routing improvements, incremental static regeneration, and performance optimizations.",
    href: "#",
    date: "October 28, 2025",
    author: "Ella Brown",
    category: { name: "Frontend", href: "#" },
    featuredCategories: ["Trending Now"],
  },
  {
    id: 8,
    title: "The Art of Writing Clean Code in JavaScript",
    summary:
      "Learn how to write maintainable and readable JavaScript code. Discover modularization, consistent naming, refactoring techniques, and practices that improve long-term code quality.",
    href: "#",
    date: "November 1, 2025",
    author: "Ethan Carter",
    category: { name: "Development", href: "#" },
    featuredCategories: ["Pro Tips", "Community Picks"],
  },
  {
    id: 9,
    title: "Optimizing Docker Images for Production",
    summary:
      "Master techniques to create lightweight, secure, and efficient Docker images. Learn multi-stage builds, caching, image organization, and security best practices for production environments.",
    href: "#",
    date: "November 3, 2025",
    author: "Sandra Park",
    category: { name: "DevOps", href: "#" },
    featuredCategories: ["Deep Dives", "Pro Tips"],
  },
  {
    id: 10,
    title: "Building Real-Time Apps with Firebase and React",
    summary:
      "Learn to create real-time web apps by combining Firebase with React. This guide covers authentication, live data syncing, event-driven updates, and strategies for scalable applications.",
    href: "#",
    date: "November 6, 2025",
    author: "Tom Nguyen",
    category: { name: "Full Stack", href: "#" },
    featuredCategories: ["Trending Now", "Community Picks"],
  },
  {
    id: 11,
    title: "Understanding TypeScript Generics Made Easy",
    summary:
      "Master TypeScript generics to write reusable and type-safe code. Learn practical examples for arrays, functions, and classes to improve flexibility and maintainability.",
    href: "#",
    date: "November 8, 2025",
    author: "Rachel Adams",
    category: { name: "Frontend", href: "#" },
    featuredCategories: ["Pro Tips"],
  },
  {
    id: 12,
    title: "Getting Started with Rust for Systems Programming",
    summary:
      "Learn Rust fundamentals for high-performance systems programming. Understand ownership, memory safety, concurrency, and build your first Rust applications.",
    href: "#",
    date: "November 10, 2025",
    author: "Mark Stevens",
    category: { name: "Backend", href: "#" },
    featuredCategories: ["Trending Now", "Deep Dives"],
  },
  {
    id: 13,
    title: "Advanced Git Workflows for Team Collaboration",
    summary:
      "Master Git for team projects. Explore branching strategies, pull requests, rebasing, conflict resolution, and maintaining a clean Git history for collaborative coding.",
    href: "#",
    date: "November 12, 2025",
    author: "Laura Chen",
    category: { name: "Development", href: "#" },
    featuredCategories: ["Pro Tips"],
  },
  {
    id: 14,
    title: "Deploying with AWS Lambda: A Serverless Guide",
    summary:
      "Learn to build serverless functions using AWS Lambda. Cover event-driven architectures, security best practices, monitoring, and deploying scalable serverless applications.",
    href: "#",
    date: "November 15, 2025",
    author: "Kevin Patel",
    category: { name: "Cloud", href: "#" },
    featuredCategories: ["Deep Dives"],
  },
  {
    id: 15,
    title: "Introduction to Prompt Engineering for AI Models",
    summary:
      "Learn prompt engineering to improve outputs from AI models. Explore techniques for crafting prompts, reducing bias, and optimizing results for programming and content generation tasks.",
    href: "#",
    date: "November 20, 2025",
    author: "Ethan Ross",
    category: { name: "Artificial Intelligence", href: "#" },
    featuredCategories: ["Trending Now", "Pro Tips"],
  },
  {
    id: 16,
    title: "Improving App Performance with React Profiler",
    summary:
      "Optimize your React applications using the React Profiler. Identify performance bottlenecks, reduce unnecessary re-renders, and improve rendering efficiency for faster apps.",
    href: "#",
    date: "November 22, 2025",
    author: "Jane Doe",
    category: { name: "Frontend", href: "#" },
    featuredCategories: ["Pro Tips"],
  },
  {
    id: 17,
    title: "How to Contribute to Open Source Effectively",
    summary:
      "Learn to contribute to open-source projects efficiently. Discover strategies for finding projects, submitting quality code, collaborating with communities, and maintaining reputation.",
    href: "#",
    date: "November 25, 2025",
    author: "John Smith",
    category: { name: "Development", href: "#" },
    featuredCategories: ["Community Picks"],
  },
  {
    id: 18,
    title: "Exploring GraphQL Subscriptions for Live Data",
    summary:
      "Learn to use GraphQL subscriptions to handle real-time data in apps. Understand integration patterns, event-driven updates, and backend strategies for efficient live data delivery.",
    href: "#",
    date: "November 28, 2025",
    author: "Maya Patel",
    category: { name: "Backend", href: "#" },
    featuredCategories: ["Deep Dives"],
  },
  {
    id: 19,
    title: "Scaling Databases with PostgreSQL Partitioning",
    summary:
      "Master PostgreSQL partitioning techniques to optimize database performance and manage large datasets. Learn indexing, query optimization, and schema design for scalable applications.",
    href: "#",
    date: "December 1, 2025",
    author: "Clara Zhang",
    category: { name: "Database", href: "#" },
    featuredCategories: ["Deep Dives", "Pro Tips"],
  },
  {
    id: 20,
    title: "CI/CD Best Practices with GitHub Actions",
    summary:
      "Automate build, test, and deployment workflows using GitHub Actions. Learn workflow design, caching, environment setup, and cloud integration for reliable continuous integration and delivery.",
    href: "#",
    date: "December 3, 2025",
    author: "Sandra Park",
    category: { name: "DevOps", href: "#" },
    featuredCategories: ["Pro Tips", "Trending Now"],
  },
];
