import type { Category } from "./posts-list";

type Code = {
  language: string;
  filename: string;
  code: string;
};

type Content = {
  type: string;
  text?: string;
  items?: string[];
  language?: string;
  code?: Code[];
  filename?: string;
  quoteAuthor?: string;
};

type Post = {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: Category;
  content: Content[];
};

export const post: Post[] = [
  {
    slug: "mastering-react-18-for-modern-web-performance",
    title: "Mastering React 18 for Modern Web Performance",
    date: "October 1, 2025",
    author: "Sophia Brown",
    category: {
      name: "Frontend",
      href: "/categories/frontend",
      slug: "frontend",
    },
    content: [
      {
        type: "p",
        text: "React 18 changes how we think about rendering. It’s fast. Really fast.",
      },
      {
        type: "p",
        text: "In traditional React apps, multiple state updates could trigger multiple re-renders. This wasn’t a huge deal for small apps, but as complexity grows, it becomes a major performance bottleneck.",
      },
      {
        type: "p",
        text: "React 18 introduces automatic batching. With this, React groups several state updates into one render. Imagine updating multiple counters or form fields at once—the UI doesn’t blink or lag. Everything feels instantaneous. This small change alone can dramatically improve perceived performance in interactive apps.",
      },
      {
        type: "h2",
        text: "Key Features in React 18",
      },
      {
        type: "p",
        text: "Concurrent rendering is another big change. It allows React to pause work, prioritize important updates, and resume tasks later. User inputs, animations, or urgent updates are handled immediately, while heavy computations wait in the background.",
      },
      {
        type: "p",
        text: "This is different from the old synchronous rendering, where any heavy task could block the entire UI. Developers now have more control over responsiveness and can build apps that feel fluid, even under load.",
      },
      {
        type: "h3",
        text: "Automatic Batching",
      },
      {
        type: "p",
        text: "Automatic batching is simple in concept but powerful in effect. Each state update doesn’t cause a separate render. Instead, React collects them and runs a single render for all. In practice, this reduces wasted computations and makes the app snappier.",
      },
      {
        type: "h3",
        text: "Concurrent Rendering",
      },
      {
        type: "p",
        text: "Concurrent rendering is all about prioritization. Low-priority updates, like background data fetching, can be delayed so that the UI remains responsive. High-priority updates, like typing in an input box, happen immediately.",
      },
      {
        type: "p",
        text: "For complex apps, this feature alone can transform the user experience. Instead of feeling sluggish during intensive operations, the app feels responsive and alive.",
      },
      {
        type: "p",
        text: "Combining automatic batching with concurrent rendering allows React 18 to manage updates more intelligently than ever before.",
      },
      {
        type: "code",
        code: [
          {
            language: "tsx",
            filename: "Counter.tsx",
            code: `import { useState } from "react";

export default function Counter(): JSX.Element {
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  const incrementBoth = (): void => {
    setCount1((c: number) => c + 1);
    setCount2((c: number) => c + 1);
  };

  return (
    <div>
      <p>TypeScript Counter Component (Automatic Batching Example)</p>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
      <button onClick={incrementBoth}>Increment Both</button>
    </div>
  );
}`,
          },
          {
            language: "jsx",
            filename: "Counter.jsx",
            code: `import React, { useState } from "react";

export default function Counter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementBoth = () => {
    setCount1(c => c + 1);
    setCount2(c => c + 1);
  };

  return (
    <div>
      <p>JavaScript Counter Component (Automatic Batching Example)</p>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
      <button onClick={incrementBoth}>Increment Both</button>
    </div>
  );
}`,
          },
        ],
      },
      {
        type: "ul",
        items: [
          "Favor functional components and Hooks over class components.",
          "Use React.memo to prevent unnecessary re-renders.",
          "Adopt TypeScript to reduce runtime errors.",
          "Use Suspense and lazy loading for non-critical content.",
        ],
      },
      {
        type: "blockquote",
        text: "React 18 empowers developers to build faster and more efficient applications with less effort.",
        quoteAuthor: "React Team",
      },
      {
        type: "p",
        text: "Even small optimizations in batching and concurrent rendering have a big impact on perceived performance. Apps feel faster and more fluid without changing the underlying logic.",
      },
      {
        type: "p",
        text: "Understanding these features allows developers to write smarter code. Pairing them with memoization, lazy loading, and careful state management makes React apps truly modern.",
      },
    ],
  },
];
