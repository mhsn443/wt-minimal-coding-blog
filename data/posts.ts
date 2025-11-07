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
  featuredCategories?: string[];
};

export const posts: Post[] = [
  {
    id: 1,
    title: "Mastering React 18: Tips and Best Practices",
    summary:
      "Learn how to build fast and maintainable web applications with React 18. This guide covers hooks, state management, performance optimization, and best practices for scalable frontend architecture.",
    href: "#",
    date: "October 1, 2025",
    author: "Sophia Brown",
    category: { name: "Frontend", href: "#" },
    featuredCategories: ["Trending Now", "Pro Tips"],
  },
  {
    id: 2,
    title: "Mastering Asynchronous Programming in JavaScript",
    summary:
      "Learn the fundamentals of asynchronous programming in JavaScript. Explore callbacks, promises, and async/await to handle concurrent tasks effectively.",
    href: "#",
    date: "December 5, 2025",
    author: "James Walker",
    category: { name: "Frontend", href: "#" },
  },
  {
    id: 3,
    title: "Getting Started with Flutter for Mobile Development",
    summary:
      "Create cross-platform mobile apps with Flutter. Learn about widgets, layouts, state management, API integration, and deploying apps for both Android and iOS.",
    href: "#",
    date: "October 10, 2025",
    author: "Michael Clark",
    category: { name: "Mobile", href: "#" },
    featuredCategories: ["Community Picks", "Trending Now"],
  },
  {
    id: 4,
    title: "Building RESTful APIs with Django Rest Framework",
    summary:
      "Learn to build scalable and secure RESTful APIs with Django and Django Rest Framework. Explore authentication, permissions, and best practices for backend development.",
    href: "#",
    date: "December 8, 2025",
    author: "Chloe Harris",
    category: { name: "Backend", href: "#" },
  },
  {
    id: 5,
    title: "Introduction to Functional Programming in Python",
    summary:
      "Discover the world of functional programming in Python. Learn about immutability, higher-order functions, and how to apply these concepts to write clean, efficient code.",
    href: "#",
    date: "December 10, 2025",
    author: "Olivia Taylor",
    category: { name: "Development", href: "#" },
  },
  {
    id: 6,
    title: "Advanced Git Workflows for Team Collaboration",
    summary:
      "Master Git for team projects. Explore branching strategies, pull requests, rebasing, conflict resolution, and maintaining a clean Git history for collaborative coding.",
    href: "#",
    date: "November 12, 2025",
    author: "Daniel Smith",
    category: { name: "Development", href: "#" },
    featuredCategories: ["Pro Tips"],
  },
  {
    id: 7,
    title: "Design Patterns in Java: An In-depth Guide",
    summary:
      "Explore common design patterns in Java, such as Singleton, Factory, and Observer. Learn how these patterns improve code structure and maintainability.",
    href: "#",
    date: "December 12, 2025",
    author: "Emily Davis",
    category: { name: "Development", href: "#" },
  },
  {
    id: 8,
    title: "Building Microservices with Spring Boot",
    summary:
      "Learn how to create scalable and modular microservices using Spring Boot. Understand service discovery, communication between services, and fault tolerance techniques.",
    href: "#",
    date: "December 15, 2025",
    author: "John Mitchell",
    category: { name: "Backend", href: "#" },
  },
  {
    id: 9,
    title: "CI/CD Best Practices with GitHub Actions",
    summary:
      "Automate build, test, and deployment workflows using GitHub Actions. Learn workflow design, caching, environment setup, and cloud integration for reliable continuous integration and delivery.",
    href: "#",
    date: "December 3, 2025",
    author: "Chloe Harris",
    category: { name: "DevOps", href: "#" },
    featuredCategories: ["Pro Tips", "Trending Now"],
  },
  {
    id: 10,
    title: "Optimizing Python Code for Performance",
    summary:
      "Learn techniques to optimize Python code for better performance, including profiling, algorithmic improvements, and best practices for memory and CPU usage.",
    href: "#",
    date: "December 17, 2025",
    author: "Olivia Taylor",
    category: { name: "Data Science", href: "#" },
  },
  {
    id: 11,
    title: "Building Scalable APIs with Node.js and Express",
    summary:
      "Dive into designing and deploying RESTful APIs with Node.js and Express. Learn about authentication, error handling, performance optimization, and best practices for building robust backend services.",
    href: "#",
    date: "October 5, 2025",
    author: "Michael Clark",
    category: { name: "Backend", href: "#" },
    featuredCategories: ["Deep Dives", "Pro Tips"],
  },
  {
    id: 12,
    title: "Understanding WebSockets for Real-Time Communication",
    summary:
      "Explore the power of WebSockets for building real-time applications. Learn how WebSockets work and how to integrate them into your frontend and backend code.",
    href: "#",
    date: "December 20, 2025",
    author: "James Walker",
    category: { name: "Backend", href: "#" },
  },
  {
    id: 13,
    title: "Introduction to Kubernetes: Container Orchestration Made Simple",
    summary:
      "Understand Kubernetes basics and container orchestration. Learn to manage pods, services, deployments, scaling, and CI/CD integration for production-grade applications.",
    href: "#",
    date: "October 15, 2025",
    author: "Emily Davis",
    category: { name: "DevOps", href: "#" },
    featuredCategories: ["Deep Dives"],
  },
  {
    id: 14,
    title: "A Guide to Object-Oriented Programming in C++",
    summary:
      "Understand object-oriented principles like inheritance, polymorphism, and encapsulation in C++. Learn how to apply these concepts to write robust C++ code.",
    href: "#",
    date: "December 22, 2025",
    author: "Sophia Brown",
    category: { name: "Backend", href: "#" },
  },
  {
    id: 15,
    title: "Mastering SQL Query Optimization",
    summary:
      "Learn how to write efficient SQL queries and optimize database performance. Explore indexing, query plans, and other techniques to speed up database queries.",
    href: "#",
    date: "December 25, 2025",
    author: "Daniel Smith",
    category: { name: "Database", href: "#" },
  },
  {
    id: 16,
    title: "Building Command Line Tools with Node.js",
    summary:
      "Learn to build powerful command-line applications using Node.js. Explore libraries like Commander.js and how to handle input, output, and various command-line arguments.",
    href: "#",
    date: "December 28, 2025",
    author: "John Mitchell",
    category: { name: "Development", href: "#" },
  },
  {
    id: 17,
    title: "Introduction to Rust's Ownership System",
    summary:
      "Understand Rust's ownership model, which ensures memory safety without a garbage collector. Learn the concepts of borrowing, ownership, and lifetimes.",
    href: "#",
    date: "December 30, 2025",
    author: "James Walker",
    category: { name: "Backend", href: "#" },
  },
  {
    id: 18,
    title: "Web Scraping with Python and BeautifulSoup",
    summary:
      "Learn how to extract data from websites using Python and BeautifulSoup. Understand how to handle HTML parsing, scraping strategies, and managing HTTP requests.",
    href: "#",
    date: "January 2, 2026",
    author: "Sophia Brown",
    category: { name: "Data Science", href: "#" },
  },
  {
    id: 19,
    title: "Building Scalable Web Applications with GraphQL",
    summary:
      "Discover how to build efficient and scalable APIs using GraphQL. Learn to implement complex queries, mutations, and subscriptions for dynamic data fetching.",
    href: "#",
    date: "January 5, 2026",
    author: "Chloe Harris",
    category: { name: "Backend", href: "#" },
  },
  {
    id: 20,
    title: "The Art of Writing Clean Code in JavaScript",
    summary:
      "Learn how to write maintainable and readable JavaScript code. Discover modularization, consistent naming, refactoring techniques, and practices that improve long-term code quality.",
    href: "#",
    date: "November 1, 2025",
    author: "Olivia Taylor",
    category: { name: "Development", href: "#" },
    featuredCategories: ["Pro Tips", "Community Picks"],
  },
  {
    id: 21,
    title: "Optimizing Docker Images for Production",
    summary:
      "Master techniques to create lightweight, secure, and efficient Docker images. Learn multi-stage builds, caching, image organization, and security best practices for production environments.",
    href: "#",
    date: "November 3, 2025",
    author: "Daniel Smith",
    category: { name: "DevOps", href: "#" },
    featuredCategories: ["Deep Dives", "Pro Tips"],
  },
  {
    id: 22,
    title: "Building Real-Time Apps with Firebase and React",
    summary:
      "Learn to create real-time web apps by combining Firebase with React. This guide covers authentication, live data syncing, event-driven updates, and strategies for scalable applications.",
    href: "#",
    date: "November 6, 2025",
    author: "Emily Davis",
    category: { name: "Full Stack", href: "#" },
    featuredCategories: ["Trending Now", "Community Picks"],
  },
  {
    id: 23,
    title: "Advanced Algorithms in JavaScript: Sorting and Searching",
    summary:
      "Learn advanced sorting and searching algorithms in JavaScript. Explore algorithms like quicksort, mergesort, and binary search, and understand their complexities.",
    href: "#",
    date: "January 8, 2026",
    author: "Michael Clark",
    category: { name: "Development", href: "#" },
  },
  {
    id: 24,
    title: "Exploring Docker for Development and Production",
    summary:
      "Master Docker for both local development and production environments. Learn how to create and manage containers, build Docker images, and deploy applications.",
    href: "#",
    date: "January 10, 2026",
    author: "John Mitchell",
    category: { name: "DevOps", href: "#" },
  },
  {
    id: 25,
    title: "Data Analysis with Python: Pandas and Matplotlib",
    summary:
      "Learn to manipulate, analyze, and visualize data using Python's Pandas and Matplotlib. Gain practical skills for cleaning datasets, aggregating information, and creating insightful visualizations.",
    href: "#",
    date: "October 20, 2025",
    author: "Olivia Taylor",
    category: { name: "Data Science", href: "#" },
    featuredCategories: ["Community Picks", "Pro Tips"],
  },
  {
    id: 26,
    title: "Building Machine Learning Pipelines with scikit-learn",
    summary:
      "Explore end-to-end machine learning workflows with Python’s scikit-learn. Learn preprocessing, feature engineering, model training, evaluation, and deployment techniques for scalable ML solutions.",
    href: "#",
    date: "October 25, 2025",
    author: "Chloe Harris",
    category: { name: "AI", href: "#" },
    featuredCategories: ["Deep Dives", "Trending Now"],
  },
  {
    id: 27,
    title: "Building a REST API with Flask",
    summary:
      "Learn how to build a simple and scalable REST API using Flask, a lightweight Python web framework. Understand routing, HTTP methods, and error handling.",
    href: "#",
    date: "January 12, 2026",
    author: "James Walker",
    category: { name: "Backend", href: "#" },
  },
  {
    id: 28,
    title: "Testing and Debugging Python Code Efficiently",
    summary:
      "Learn best practices for testing and debugging your Python code. Understand unit testing with PyTest, logging, and using debuggers to trace and fix issues.",
    href: "#",
    date: "January 15, 2026",
    author: "Daniel Smith",
    category: { name: "Data Science", href: "#" },
  },
  {
    id: 29,
    title: "Introduction to Data Structures in Java",
    summary:
      "Learn about common data structures in Java like arrays, linked lists, stacks, queues, and hash maps. Understand how and when to use them in real-world applications.",
    href: "#",
    date: "January 18, 2026",
    author: "Emily Davis",
    category: { name: "Development", href: "#" },
  },
  {
    id: 30,
    title: "Getting Started with Rust for Systems Programming",
    summary:
      "Learn Rust fundamentals for high-performance systems programming. Understand ownership, memory safety, concurrency, and build your first Rust applications.",
    href: "#",
    date: "November 10, 2025",
    author: "Michael Clark",
    category: { name: "Backend", href: "#" },
    featuredCategories: ["Trending Now", "Deep Dives"],
  },
  {
    id: 31,
    title: "Advanced Python Programming: Metaprogramming",
    summary:
      "Dive deep into Python's metaprogramming capabilities. Learn about decorators, class decorators, and modifying code dynamically using Python's introspection features.",
    href: "#",
    date: "January 20, 2026",
    author: "Sophia Brown",
    category: { name: "Data Science", href: "#" },
  },
  {
    id: 32,
    title: "Real-Time Data Processing with Apache Kafka",
    summary:
      "Learn to set up and use Apache Kafka for handling real-time data streams. Understand topics, partitions, and how to scale Kafka for high throughput applications.",
    href: "#",
    date: "January 23, 2026",
    author: "John Mitchell",
    category: { name: "Backend", href: "#" },
  },
  {
    id: 33,
    title: "Using Redis for Caching and Real-Time Data",
    summary:
      "Explore how to use Redis as a caching mechanism and for real-time data processing. Learn about Redis' data structures, commands, and performance optimization.",
    href: "#",
    date: "January 25, 2026",
    author: "Chloe Harris",
    category: { name: "Backend", href: "#" },
  },
  {
    id: 34,
    title: "How to Contribute to Open Source Effectively",
    summary:
      "Learn to contribute to open-source projects efficiently. Discover strategies for finding projects, submitting quality code, collaborating with communities, and maintaining reputation.",
    href: "#",
    date: "November 25, 2025",
    author: "James Walker",
    category: { name: "Development", href: "#" },
    featuredCategories: ["Community Picks"],
  },
  {
    id: 35,
    title: "Exploring GraphQL Subscriptions for Live Data",
    summary:
      "Learn to use GraphQL subscriptions to handle real-time data in apps. Understand integration patterns, event-driven updates, and backend strategies for efficient live data delivery.",
    href: "#",
    date: "November 28, 2025",
    author: "Sophia Brown",
    category: { name: "Backend", href: "#" },
    featuredCategories: ["Deep Dives"],
  },
  {
    id: 36,
    title: "Understanding Memory Management in C",
    summary:
      "Learn how memory is managed in C. Explore pointers, dynamic memory allocation, and memory leaks, and how to manage memory efficiently in your applications.",
    href: "#",
    date: "January 28, 2026",
    author: "Olivia Taylor",
    category: { name: "Backend", href: "#" },
  },
  {
    id: 37,
    title: "Building Full-Stack Apps with Vue.js and Node.js",
    summary:
      "Learn how to build a full-stack web application using Vue.js for the frontend and Node.js for the backend. Cover routing, state management, and database integration.",
    href: "#",
    date: "January 30, 2026",
    author: "Emily Davis",
    category: { name: "Full Stack", href: "#" },
  },
  {
    id: 38,
    title: "Improving App Performance with React Profiler",
    summary:
      "Optimize your React applications using the React Profiler. Identify performance bottlenecks, reduce unnecessary re-renders, and improve rendering efficiency for faster apps.",
    href: "#",
    date: "November 22, 2025",
    author: "Daniel Smith",
    category: { name: "Frontend", href: "#" },
    featuredCategories: ["Pro Tips"],
  },
  {
    id: 39,
    title: "Event-Driven Programming with Node.js",
    summary:
      "Learn how to handle asynchronous events and callbacks in Node.js. Understand the event loop, event emitters, and how to write event-driven applications.",
    href: "#",
    date: "February 2, 2026",
    author: "Michael Clark",
    category: { name: "Backend", href: "#" },
  },
  {
    id: 40,
    title: "Scaling Databases with PostgreSQL Partitioning",
    summary:
      "Master PostgreSQL partitioning techniques to optimize database performance and manage large datasets. Learn indexing, query optimization, and schema design for scalable applications.",
    href: "#",
    date: "December 1, 2025",
    author: "John Mitchell",
    category: { name: "Database", href: "#" },
    featuredCategories: ["Deep Dives", "Pro Tips"],
  },
  {
    id: 41,
    title: "Understanding the Git Workflow: A Beginner’s Guide",
    summary:
      "Get to know the essential Git workflow. Learn how to clone repositories, commit changes, create branches, and merge your work to collaborate with teams efficiently.",
    href: "#",
    date: "February 5, 2026",
    author: "Olivia Taylor",
    category: { name: "Development", href: "#" },
  },
  {
    id: 42,
    title: "Deploying with AWS Lambda: A Serverless Guide",
    summary:
      "Learn to build serverless functions using AWS Lambda. Cover event-driven architectures, security best practices, monitoring, and deploying scalable serverless applications.",
    href: "#",
    date: "November 15, 2025",
    author: "Chloe Harris",
    category: { name: "Cloud", href: "#" },
    featuredCategories: ["Deep Dives"],
  },
  {
    id: 43,
    title: "Introduction to Prompt Engineering for AI Models",
    summary:
      "Learn prompt engineering to improve outputs from AI models. Explore techniques for crafting prompts, reducing bias, and optimizing results for programming and content generation tasks.",
    href: "#",
    date: "November 20, 2025",
    author: "James Walker",
    category: { name: "Artificial Intelligence", href: "#" },
    featuredCategories: ["Trending Now", "Pro Tips"],
  },
  {
    id: 44,
    title: "How to Build a Secure API with JWT Authentication",
    summary:
      "Learn how to build a secure API using JSON Web Tokens (JWT) for authentication and authorization. Understand token management and best security practices.",
    href: "#",
    date: "February 7, 2026",
    author: "Daniel Smith",
    category: { name: "Backend", href: "#" },
  },
  {
    id: 45,
    title: "Mastering Algorithms with Python: Sorting Algorithms",
    summary:
      "Master sorting algorithms in Python. Learn about bubble sort, quicksort, mergesort, and other sorting techniques, and their time and space complexities.",
    href: "#",
    date: "February 10, 2026",
    author: "Sophia Brown",
    category: { name: "Development", href: "#" },
  },
  {
    id: 46,
    title: "Understanding TypeScript Generics Made Easy",
    summary:
      "Master TypeScript generics to write reusable and type-safe code. Learn practical examples for arrays, functions, and classes to improve flexibility and maintainability.",
    href: "#",
    date: "November 8, 2025",
    author: "Michael Clark",
    category: { name: "Frontend", href: "#" },
    featuredCategories: ["Pro Tips"],
  },
  {
    id: 47,
    title: "Exploring Cloud Functions with Google Cloud Platform",
    summary:
      "Learn how to write and deploy serverless functions using Google Cloud Functions. Understand event-driven execution, scalability, and integrating with other GCP services.",
    href: "#",
    date: "February 12, 2026",
    author: "Emily Davis",
    category: { name: "Cloud", href: "#" },
  },
  {
    id: 48,
    title: "Next.js 15: What’s New and Why It Matters",
    summary:
      "Stay updated on Next.js 15 features for server-rendered and static React applications. Learn about routing improvements, incremental static regeneration, and performance optimizations.",
    href: "#",
    date: "October 28, 2025",
    author: "John Mitchell",
    category: { name: "Frontend", href: "#" },
    featuredCategories: ["Trending Now"],
  },
];
