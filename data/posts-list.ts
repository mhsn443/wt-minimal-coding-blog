import type { FeaturedCategory } from "./featured-category";

export type Category = {
  name: string;
  href: string;
  slug: string;
};

export type PostList = {
  id: number;
  title: string;
  summary: string;
  href: string;
  date: string;
  author: string;
  category: Category;
  featuredCategories?: FeaturedCategory[];
};

export const postsList: PostList[] = [
  {
    id: 1,
    title: "Mastering React 18: Tips and Best Practices",
    summary:
      "Gain in-depth knowledge on building high-performing and maintainable web applications using React 18. This guide delves into modern features like hooks, concurrent rendering, and advanced state management techniques. You’ll also explore optimization strategies, reusable component design, and best practices for scalable frontend architecture.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "October 1, 2025",
    author: "Sophia Brown",
    category: {
      name: "Frontend",
      href: "/categories/frontend",
      slug: "frontend",
    },
    featuredCategories: [
      {
        name: "Trending Now",
        value: "Trending Now",
        href: "/categories/trending-now",
        slug: "trending-now",
      },
      {
        name: "Pro Tips",
        value: "Pro Tips",
        href: "/categories/pro-tips",
        slug: "pro-tips",
      },
    ],
  },
  {
    id: 2,
    title: "Mastering Asynchronous Programming in JavaScript",
    summary:
      "Understand the core concepts behind asynchronous behavior in JavaScript and how it impacts modern web development. This tutorial covers callbacks, promises, and async/await with real-world coding examples. Learn how to efficiently manage concurrent operations, handle API requests, and improve application responsiveness.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "December 5, 2025",
    author: "James Walker",
    category: {
      name: "Frontend",
      href: "/categories/frontend",
      slug: "frontend",
    },
  },
  {
    id: 3,
    title: "Getting Started with Flutter for Mobile Development",
    summary:
      "Dive into Flutter and learn how to create beautiful, cross-platform mobile applications with a single codebase. This guide walks you through widget composition, UI layouts, and state management fundamentals. You’ll also explore API integration, testing, and the deployment process for Android and iOS platforms.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "October 10, 2025",
    author: "Michael Clark",
    category: {
      name: "Mobile",
      href: "/categories/mobile",
      slug: "mobile",
    },
    featuredCategories: [
      {
        name: "Community Picks",
        value: "Community Picks",
        href: "/categories/community-picks",
        slug: "community-picks",
      },
      {
        name: "Trending Now",
        value: "Trending Now",
        href: "/categories/trending-now",
        slug: "trending-now",
      },
    ],
  },
  {
    id: 4,
    title: "Building RESTful APIs with Django Rest Framework",
    summary:
      "Learn how to design and implement secure, scalable RESTful APIs using Django and the Django Rest Framework. This article covers serialization, authentication, permissions, and versioning in detail. You’ll also discover best practices for structuring backend systems that are easy to maintain and extend.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "December 8, 2025",
    author: "Chloe Harris",
    category: {
      name: "Backend",
      href: "/categories/backend",
      slug: "backend",
    },
  },
  {
    id: 5,
    title: "Introduction to Functional Programming in Python",
    summary:
      "Explore the principles of functional programming and how they can enhance the way you write Python code. Understand key concepts like immutability, pure functions, and higher-order functions. Through examples, learn how to create clean, concise, and efficient programs that reduce bugs and improve readability.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "December 10, 2025",
    author: "Olivia Taylor",
    category: {
      name: "Backend",
      href: "/categories/backend",
      slug: "backend",
    },
  },
  {
    id: 6,
    title: "Advanced Git Workflows for Team Collaboration",
    summary:
      "Take your Git skills to the next level with advanced workflows designed for collaborative development. Learn effective branching strategies, pull request management, and techniques for conflict resolution. This guide also covers rebasing, maintaining a clean history, and fostering seamless teamwork in large projects.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "November 12, 2025",
    author: "Daniel Smith",
    category: {
      name: "DevOps",
      href: "/categories/devops",
      slug: "devops",
    },
    featuredCategories: [
      {
        name: "Pro Tips",
        value: "Pro Tips",
        href: "/categories/pro-tips",
        slug: "pro-tips",
      },
    ],
  },
  {
    id: 7,
    title: "Design Patterns in Java: An In-depth Guide",
    summary:
      "Discover essential design patterns that form the backbone of robust Java applications. This article explores the Singleton, Factory, Observer, and other common patterns through practical examples. Understand how these techniques enhance code organization, reduce redundancy, and improve long-term maintainability.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "December 12, 2025",
    author: "Emily Davis",
    category: {
      name: "Backend",
      href: "/categories/backend",
      slug: "backend",
    },
  },
  {
    id: 8,
    title: "Building Microservices with Spring Boot",
    summary:
      "Learn how to develop modular, scalable, and independent microservices using Spring Boot’s powerful features. This guide covers service discovery, inter-service communication, and data consistency patterns. You’ll also explore fault tolerance, monitoring, and deployment strategies for resilient enterprise systems.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "December 15, 2025",
    author: "John Mitchell",
    category: {
      name: "Backend",
      href: "/categories/backend",
      slug: "backend",
    },
  },
  {
    id: 9,
    title: "CI/CD Best Practices with GitHub Actions",
    summary:
      "Master the art of automation by implementing CI/CD pipelines using GitHub Actions. Understand how to build, test, and deploy code efficiently across multiple environments. The guide walks through caching, parallel jobs, environment variables, and integrating with cloud platforms for seamless delivery.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "December 3, 2025",
    author: "Chloe Harris",
    category: {
      name: "DevOps",
      href: "/categories/devops",
      slug: "devops",
    },
    featuredCategories: [
      {
        name: "Pro Tips",
        value: "Pro Tips",
        href: "/categories/pro-tips",
        slug: "pro-tips",
      },
      {
        name: "Trending Now",
        value: "Trending Now",
        href: "/categories/trending-now",
        slug: "trending-now",
      },
    ],
  },
  {
    id: 10,
    title: "Optimizing Python Code for Performance",
    summary:
      "Boost your Python applications by learning proven techniques for performance tuning and optimization. Explore profiling tools, algorithmic improvements, and ways to minimize memory and CPU usage. With practical examples, you’ll learn how to write faster, more efficient code for data-heavy and production-grade projects.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "December 17, 2025",
    author: "Olivia Taylor",
    category: {
      name: "Data Science",
      href: "/categories/data-science",
      slug: "data-science",
    },
  },
  {
    id: 11,
    title: "Building Scalable APIs with Node.js and Express",
    summary:
      "Explore how to design and deploy robust RESTful APIs using Node.js and Express. This guide covers authentication, error handling, middleware, and performance optimization. You’ll also learn best practices for creating maintainable backend services that can scale with your application’s growth.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "October 5, 2025",
    author: "Michael Clark",
    category: {
      name: "Backend",
      href: "/categories/backend",
      slug: "backend",
    },
    featuredCategories: [
      {
        name: "Deep Dives",
        value: "Deep Dives",
        href: "/categories/deep-dives",
        slug: "deep-dives",
      },
      {
        name: "Pro Tips",
        value: "Pro Tips",
        href: "/categories/pro-tips",
        slug: "pro-tips",
      },
    ],
  },
  {
    id: 12,
    title: "Understanding WebSockets for Real-Time Communication",
    summary:
      "Dive into WebSockets and learn how they enable real-time, two-way communication between clients and servers. This guide explains the underlying protocol, event handling, and integration into frontend and backend systems. You’ll gain practical insights for building chat apps, live dashboards, and interactive features.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "December 20, 2025",
    author: "James Walker",
    category: {
      name: "Backend",
      href: "/categories/backend",
      slug: "backend",
    },
  },
  {
    id: 13,
    title: "Introduction to Kubernetes: Container Orchestration Made Simple",
    summary:
      "Get started with Kubernetes and understand the fundamentals of container orchestration for modern applications. Learn to manage pods, deployments, services, and scaling strategies efficiently. The guide also covers integrating Kubernetes into CI/CD pipelines and deploying production-ready, resilient systems.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "October 15, 2025",
    author: "Emily Davis",
    category: {
      name: "DevOps",
      href: "/categories/devops",
      slug: "devops",
    },
    featuredCategories: [
      {
        name: "Deep Dives",
        value: "Deep Dives",
        href: "/categories/deep-dives",
        slug: "deep-dives",
      },
    ],
  },
  {
    id: 14,
    title: "A Guide to Object-Oriented Programming in C++",
    summary:
      "Learn the key principles of object-oriented programming in C++, including inheritance, polymorphism, and encapsulation. This guide provides practical examples of how to structure classes and manage relationships effectively. Apply these concepts to write robust, maintainable, and reusable C++ code.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "December 22, 2025",
    author: "Sophia Brown",
    category: {
      name: "Backend",
      href: "/categories/backend",
      slug: "backend",
    },
  },
  {
    id: 15,
    title: "Mastering SQL Query Optimization",
    summary:
      "Enhance your SQL skills by learning techniques to write efficient queries and optimize database performance. This guide covers indexing strategies, analyzing query execution plans, and minimizing resource usage. You’ll gain the tools to improve database responsiveness and handle large datasets effectively.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "December 25, 2025",
    author: "Daniel Smith",
    category: {
      name: "Database",
      href: "/categories/database",
      slug: "database",
    },
  },
  {
    id: 16,
    title: "Building Command Line Tools with Node.js",
    summary:
      "Learn to create powerful and user-friendly command-line applications using Node.js. Explore libraries like Commander.js to handle input, output, and complex command-line arguments. This guide also covers structuring tools for reusability and integrating scripts into larger workflows.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "December 28, 2025",
    author: "John Mitchell",
    category: {
      name: "Backend",
      href: "/categories/backend",
      slug: "backend",
    },
  },
  {
    id: 17,
    title: "Introduction to Rust's Ownership System",
    summary:
      "Understand Rust’s unique ownership model, which ensures memory safety without a garbage collector. Learn the concepts of ownership, borrowing, and lifetimes, and see how they prevent common memory bugs. This guide provides practical examples to help you write safe and efficient Rust programs.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "December 30, 2025",
    author: "James Walker",
    category: {
      name: "Backend",
      href: "/categories/backend",
      slug: "backend",
    },
  },
  {
    id: 18,
    title: "Web Scraping with Python and BeautifulSoup",
    summary:
      "Learn how to extract data from websites using Python and BeautifulSoup efficiently. This guide covers parsing HTML, navigating document structures, and handling HTTP requests responsibly. You’ll also explore scraping strategies, best practices, and real-world examples for gathering web data.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "January 2, 2026",
    author: "Sophia Brown",
    category: {
      name: "Data Science",
      href: "/categories/data-science",
      slug: "data-science",
    },
  },
  {
    id: 19,
    title: "Building Scalable Web Applications with GraphQL",
    summary:
      "Discover how to build APIs with GraphQL that are efficient, flexible, and scalable. Learn to implement complex queries, mutations, and subscriptions for dynamic data handling. This guide also covers schema design, caching strategies, and best practices for maintaining high-performance applications.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "January 5, 2026",
    author: "Chloe Harris",
    category: {
      name: "Backend",
      href: "/categories/backend",
      slug: "backend",
    },
  },
  {
    id: 20,
    title: "The Art of Writing Clean Code in JavaScript",
    summary:
      "Master the principles of writing clean, readable, and maintainable JavaScript code. Learn modularization, consistent naming conventions, refactoring techniques, and other practices that improve long-term code quality. The guide helps you build scalable codebases that are easier to debug, extend, and maintain.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "November 1, 2025",
    author: "Olivia Taylor",
    category: {
      name: "Frontend",
      href: "/categories/frontend",
      slug: "frontend",
    },
    featuredCategories: [
      {
        name: "Pro Tips",
        value: "Pro Tips",
        href: "/categories/pro-tips",
        slug: "pro-tips",
      },
      {
        name: "Community Picks",
        value: "Community Picks",
        href: "/categories/community-picks",
        slug: "community-picks",
      },
    ],
  },
  {
    id: 21,
    title: "Optimizing Docker Images for Production",
    summary:
      "Learn how to build lightweight, secure, and efficient Docker images for production environments. This guide covers multi-stage builds, caching strategies, and image organization best practices. You’ll also explore security measures and optimization techniques to reduce image size and improve deployment performance.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "November 3, 2025",
    author: "Daniel Smith",
    category: {
      name: "DevOps",
      href: "/categories/devops",
      slug: "devops",
    },
    featuredCategories: [
      {
        name: "Deep Dives",
        value: "Deep Dives",
        href: "/categories/deep-dives",
        slug: "deep-dives",
      },
      {
        name: "Pro Tips",
        value: "Pro Tips",
        href: "/categories/pro-tips",
        slug: "pro-tips",
      },
    ],
  },
  {
    id: 22,
    title: "Building Real-Time Apps with Firebase and React",
    summary:
      "Create interactive, real-time web applications by integrating Firebase with React. This guide covers authentication, live data syncing, and event-driven updates. You’ll also learn strategies for scalable applications, efficient state management, and maintaining performance under heavy user interaction.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "November 6, 2025",
    author: "Emily Davis",
    category: {
      name: "Full Stack",
      href: "/categories/full-stack",
      slug: "full-stack",
    },
    featuredCategories: [
      {
        name: "Trending Now",
        value: "Trending Now",
        href: "/categories/trending-now",
        slug: "trending-now",
      },
      {
        name: "Community Picks",
        value: "Community Picks",
        href: "/categories/community-picks",
        slug: "community-picks",
      },
    ],
  },
  {
    id: 23,
    title: "Advanced Algorithms in JavaScript: Sorting and Searching",
    summary:
      "Deepen your understanding of advanced algorithms in JavaScript for sorting and searching tasks. Learn the implementation of quicksort, mergesort, and binary search, along with their time and space complexities. This guide also explores practical applications to solve real-world programming challenges efficiently.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "January 8, 2026",
    author: "Michael Clark",
    category: {
      name: "Backend",
      href: "/categories/backend",
      slug: "backend",
    },
  },
  {
    id: 24,
    title: "Exploring Docker for Development and Production",
    summary:
      "Master Docker to streamline both development and production workflows. Learn to create, manage, and orchestrate containers, build Docker images, and deploy applications reliably. This guide also covers best practices for maintaining reproducible environments across local and production setups.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "January 10, 2026",
    author: "John Mitchell",
    category: {
      name: "DevOps",
      href: "/categories/devops",
      slug: "devops",
    },
  },
  {
    id: 25,
    title: "Data Analysis with Python: Pandas and Matplotlib",
    summary:
      "Learn to manipulate, analyze, and visualize data effectively using Python’s Pandas and Matplotlib libraries. Explore techniques for cleaning datasets, aggregating information, and generating insightful visualizations. You’ll gain hands-on skills to transform raw data into actionable insights for real-world projects.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "October 20, 2025",
    author: "Olivia Taylor",
    category: {
      name: "Data Science",
      href: "/categories/data-science",
      slug: "data-science",
    },
    featuredCategories: [
      {
        name: "Community Picks",
        value: "Community Picks",
        href: "/categories/community-picks",
        slug: "community-picks",
      },
      {
        name: "Pro Tips",
        value: "Pro Tips",
        href: "/categories/pro-tips",
        slug: "pro-tips",
      },
    ],
  },
  {
    id: 26,
    title: "Building Machine Learning Pipelines with scikit-learn",
    summary:
      "Understand the full lifecycle of machine learning projects using Python’s scikit-learn. Learn preprocessing, feature engineering, model training, evaluation, and deployment techniques. This guide also covers building scalable, maintainable ML pipelines suitable for production environments.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "October 25, 2025",
    author: "Chloe Harris",
    category: {
      name: "AI",
      href: "/categories/ai",
      slug: "ai",
    },
    featuredCategories: [
      {
        name: "Deep Dives",
        value: "Deep Dives",
        href: "/categories/deep-dives",
        slug: "deep-dives",
      },
      {
        name: "Trending Now",
        value: "Trending Now",
        href: "/categories/trending-now",
        slug: "trending-now",
      },
    ],
  },
  {
    id: 27,
    title: "Building a REST API with Flask",
    summary:
      "Learn to design and implement a scalable REST API using Flask, a lightweight Python web framework. Explore routing, HTTP methods, request handling, and error management. The guide provides practical examples to help you develop robust APIs ready for integration with frontend or mobile applications.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "January 12, 2026",
    author: "James Walker",
    category: {
      name: "Backend",
      href: "/categories/backend",
      slug: "backend",
    },
  },
  {
    id: 28,
    title: "Testing and Debugging Python Code Efficiently",
    summary:
      "Improve your Python development workflow with effective testing and debugging strategies. Learn unit testing with PyTest, implementing logging, and using debuggers to trace and fix errors. This guide emphasizes best practices to ensure reliable, maintainable, and bug-free code in professional projects.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "January 15, 2026",
    author: "Daniel Smith",
    category: {
      name: "Data Science",
      href: "/categories/data-science",
      slug: "data-science",
    },
  },
  {
    id: 29,
    title: "Introduction to Data Structures in Java",
    summary:
      "Explore fundamental data structures in Java, including arrays, linked lists, stacks, queues, and hash maps. Learn how and when to apply each structure in real-world programming scenarios. This guide also emphasizes efficiency, performance trade-offs, and practical usage for building robust applications.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "January 18, 2026",
    author: "Emily Davis",
    category: {
      name: "Backend",
      href: "/categories/backend",
      slug: "backend",
    },
  },
  {
    id: 30,
    title: "Getting Started with Rust for Systems Programming",
    summary:
      "Learn Rust fundamentals to build high-performance, safe systems applications. Understand the ownership model, memory safety, concurrency, and error handling in Rust. This guide provides practical examples to help you develop efficient programs while leveraging Rust’s unique safety and performance advantages.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "November 10, 2025",
    author: "Michael Clark",
    category: {
      name: "Backend",
      href: "/categories/backend",
      slug: "backend",
    },
    featuredCategories: [
      {
        name: "Trending Now",
        value: "Trending Now",
        href: "/categories/trending-now",
        slug: "trending-now",
      },
      {
        name: "Deep Dives",
        value: "Deep Dives",
        href: "/categories/deep-dives",
        slug: "deep-dives",
      },
    ],
  },
  {
    id: 31,
    title: "Advanced Python Programming: Metaprogramming",
    summary:
      "Dive into Python’s advanced metaprogramming capabilities to write more dynamic and flexible code. Learn about decorators, class decorators, and modifying behavior at runtime using introspection. This guide shows how to leverage these techniques to improve code reuse and reduce boilerplate in complex applications.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "January 20, 2026",
    author: "Sophia Brown",
    category: {
      name: "Data Science",
      href: "/categories/data-science",
      slug: "data-science",
    },
  },
  {
    id: 32,
    title: "Real-Time Data Processing with Apache Kafka",
    summary:
      "Learn to handle high-throughput, real-time data streams using Apache Kafka. Explore core concepts like topics, partitions, producers, and consumers, and understand how to scale Kafka clusters efficiently. The guide also covers strategies for fault-tolerant and resilient real-time data pipelines.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "January 23, 2026",
    author: "John Mitchell",
    category: {
      name: "Backend",
      href: "/categories/backend",
      slug: "backend",
    },
  },
  {
    id: 33,
    title: "Using Redis for Caching and Real-Time Data",
    summary:
      "Explore how Redis can accelerate applications with caching and real-time data processing. Learn about Redis data structures, commands, persistence, and performance optimization techniques. This guide also covers practical strategies to integrate Redis for faster, more scalable backend systems.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "January 25, 2026",
    author: "Chloe Harris",
    category: {
      name: "Backend",
      href: "/categories/backend",
      slug: "backend",
    },
  },
  {
    id: 34,
    title: "How to Contribute to Open Source Effectively",
    summary:
      "Learn best practices for contributing to open-source projects efficiently and meaningfully. Discover how to find suitable projects, submit high-quality code, collaborate with communities, and build a positive reputation. This guide also emphasizes communication, code review etiquette, and long-term contribution strategies.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "November 25, 2025",
    author: "James Walker",
    category: {
      name: "DevOps",
      href: "/categories/devops",
      slug: "devops",
    },
    featuredCategories: [
      {
        name: "Community Picks",
        value: "Community Picks",
        href: "/categories/community-picks",
        slug: "community-picks",
      },
    ],
  },
  {
    id: 35,
    title: "Exploring GraphQL Subscriptions for Live Data",
    summary:
      "Understand how to implement GraphQL subscriptions to deliver real-time data to applications. Learn integration patterns for frontends and backends, event-driven updates, and managing live connections efficiently. This guide helps you build responsive apps that can react instantly to data changes.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "November 28, 2025",
    author: "Sophia Brown",
    category: {
      name: "Backend",
      href: "/categories/backend",
      slug: "backend",
    },
    featuredCategories: [
      {
        name: "Deep Dives",
        value: "Deep Dives",
        href: "/categories/deep-dives",
        slug: "deep-dives",
      },
    ],
  },
  {
    id: 36,
    title: "Understanding Memory Management in C",
    summary:
      "Learn how memory is allocated and managed in the C programming language. Explore pointers, dynamic memory allocation, and techniques to avoid memory leaks and undefined behavior. The guide also covers strategies for writing efficient, safe, and high-performance C programs.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "January 28, 2026",
    author: "Olivia Taylor",
    category: {
      name: "Backend",
      href: "/categories/backend",
      slug: "backend",
    },
  },
  {
    id: 37,
    title: "Building Full-Stack Apps with Vue.js and Node.js",
    summary:
      "Learn to build modern full-stack web applications using Vue.js for the frontend and Node.js for the backend. This guide covers frontend routing, state management, server-side APIs, and database integration. You’ll gain practical skills to develop scalable, maintainable applications from end to end.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "January 30, 2026",
    author: "Emily Davis",
    category: {
      name: "Full Stack",
      href: "/categories/full-stack",
      slug: "full-stack",
    },
  },
  {
    id: 38,
    title: "Improving App Performance with React Profiler",
    summary:
      "Optimize the performance of your React applications using the React Profiler tool. Identify rendering bottlenecks, reduce unnecessary re-renders, and improve component efficiency. This guide provides actionable strategies to enhance user experience and make React apps faster and more responsive.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "November 22, 2025",
    author: "Daniel Smith",
    category: {
      name: "Frontend",
      href: "/categories/frontend",
      slug: "frontend",
    },
    featuredCategories: [
      {
        name: "Pro Tips",
        value: "Pro Tips",
        href: "/categories/pro-tips",
        slug: "pro-tips",
      },
    ],
  },
  {
    id: 39,
    title: "Event-Driven Programming with Node.js",
    summary:
      "Learn the fundamentals of event-driven programming in Node.js to handle asynchronous operations effectively. Understand the event loop, event emitters, and callback patterns for responsive applications. This guide also covers practical approaches to design scalable, non-blocking Node.js applications.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "February 2, 2026",
    author: "Michael Clark",
    category: {
      name: "Backend",
      href: "/categories/backend",
      slug: "backend",
    },
  },
  {
    id: 40,
    title: "Scaling Databases with PostgreSQL Partitioning",
    summary:
      "Master database scaling using PostgreSQL partitioning to handle large datasets efficiently. Learn indexing strategies, query optimization, and schema design for high-performance applications. This guide provides techniques to maintain speed, reliability, and scalability as your database grows.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "December 1, 2025",
    author: "John Mitchell",
    category: {
      name: "Database",
      href: "/categories/database",
      slug: "database",
    },
    featuredCategories: [
      {
        name: "Deep Dives",
        value: "Deep Dives",
        href: "/categories/deep-dives",
        slug: "deep-dives",
      },
      {
        name: "Pro Tips",
        value: "Pro Tips",
        href: "/categories/pro-tips",
        slug: "pro-tips",
      },
    ],
  },
  {
    id: 41,
    title: "Understanding the Git Workflow: A Beginner’s Guide",
    summary:
      "Get started with Git by learning the essential workflow for version control. Understand how to clone repositories, commit changes, create branches, and merge work efficiently. This guide helps beginners collaborate effectively in team projects while maintaining a clean Git history.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "February 5, 2026",
    author: "Olivia Taylor",
    category: {
      name: "DevOps",
      href: "/categories/devops",
      slug: "devops",
    },
  },
  {
    id: 42,
    title: "Deploying with AWS Lambda: A Serverless Guide",
    summary:
      "Learn to build and deploy serverless applications using AWS Lambda. Explore event-driven architectures, security best practices, and monitoring techniques. This guide provides practical steps to create scalable, cost-efficient serverless solutions.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "November 15, 2025",
    author: "Chloe Harris",
    category: {
      name: "Cloud",
      href: "/categories/cloud",
      slug: "cloud",
    },
    featuredCategories: [
      {
        name: "Deep Dives",
        value: "Deep Dives",
        href: "/categories/deep-dives",
        slug: "deep-dives",
      },
    ],
  },
  {
    id: 43,
    title: "Introduction to Prompt Engineering for AI Models",
    summary:
      "Discover how to craft effective prompts to get better results from AI models. Learn strategies to reduce bias, refine outputs, and optimize prompts for tasks like coding, content generation, and data analysis. This guide empowers users to interact with AI models more intelligently.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "November 20, 2025",
    author: "James Walker",
    category: {
      name: "AI",
      href: "/categories/ai",
      slug: "ai",
    },
    featuredCategories: [
      {
        name: "Trending Now",
        value: "Trending Now",
        href: "/categories/trending-now",
        slug: "trending-now",
      },
      {
        name: "Pro Tips",
        value: "Pro Tips",
        href: "/categories/pro-tips",
        slug: "pro-tips",
      },
    ],
  },
  {
    id: 44,
    title: "How to Build a Secure API with JWT Authentication",
    summary:
      "Learn to secure APIs using JSON Web Tokens (JWT) for authentication and authorization. Understand token creation, management, and best security practices. This guide provides practical steps to protect your API and safeguard sensitive data.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "February 7, 2026",
    author: "Daniel Smith",
    category: {
      name: "Backend",
      href: "/categories/backend",
      slug: "backend",
    },
  },
  {
    id: 45,
    title: "Mastering Algorithms with Python: Sorting Algorithms",
    summary:
      "Deepen your understanding of sorting algorithms in Python. Explore techniques like bubble sort, quicksort, mergesort, and their respective time and space complexities. This guide helps you write efficient, optimized code for data organization tasks.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "February 10, 2026",
    author: "Sophia Brown",
    category: {
      name: "Backend",
      href: "/categories/backend",
      slug: "backend",
    },
  },
  {
    id: 46,
    title: "Understanding TypeScript Generics Made Easy",
    summary:
      "Master TypeScript generics to create reusable, type-safe code. Learn practical examples for arrays, functions, and classes to improve flexibility and maintainability. This guide equips you to build robust TypeScript applications with fewer type errors.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "November 8, 2025",
    author: "Michael Clark",
    category: {
      name: "Frontend",
      href: "/categories/frontend",
      slug: "frontend",
    },
    featuredCategories: [
      {
        name: "Pro Tips",
        value: "Pro Tips",
        href: "/categories/pro-tips",
        slug: "pro-tips",
      },
    ],
  },
  {
    id: 47,
    title: "Exploring Cloud Functions with Google Cloud Platform",
    summary:
      "Learn to create and deploy serverless functions using Google Cloud Functions. Understand event-driven execution, auto-scaling, and integration with other GCP services. This guide enables you to develop scalable, cost-efficient cloud applications.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "February 12, 2026",
    author: "Emily Davis",
    category: {
      name: "Cloud",
      href: "/categories/cloud",
      slug: "cloud",
    },
  },
  {
    id: 48,
    title: "Next.js 15: What’s New and Why It Matters",
    summary:
      "Stay up-to-date with the latest features in Next.js 15 for React applications. Explore improvements in routing, incremental static regeneration, and performance optimizations. This guide helps developers leverage new capabilities for faster, more efficient web apps.",
    href: "/mastering-react-18-for-modern-web-performance",
    date: "October 28, 2025",
    author: "John Mitchell",
    category: {
      name: "Frontend",
      href: "/categories/frontend",
      slug: "frontend",
    },
    featuredCategories: [
      {
        name: "Trending Now",
        value: "Trending Now",
        href: "/categories/trending-now",
        slug: "trending-now",
      },
    ],
  },
];
