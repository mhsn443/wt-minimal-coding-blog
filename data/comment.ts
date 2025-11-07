export type Comment = {
  postId: number;
  id: number;
  parentId?: number | null;
  name: string;
  date: string;
  message: string;
};

export const comments: Comment[] = [
  {
    postId: 1,
    id: 1,
    parentId: null,
    name: "Michael Carter",
    date: "November 1, 2025",
    message:
      "I finally upgraded my app to React 18 and wow… what a difference! Automatic batching alone makes handling multiple state updates so much smoother. Feels way faster.",
  },
  {
    postId: 1,
    id: 2,
    parentId: null,
    name: "Aman Verma",
    date: "November 1, 2025",
    message:
      "TypeScript + React 18 = ❤️. Automatic batching combined with memoized components has seriously cut down on unnecessary re-renders. My app feels snappier than ever.",
  },
  {
    postId: 1,
    id: 3,
    parentId: 2,
    name: "Sophia Nguyen",
    date: "November 2, 2025",
    message:
      "Totally agree! Even huge tables that used to lag are smooth now. React.memo plus concurrent rendering really is a game changer for performance.",
  },
  {
    postId: 1,
    id: 4,
    parentId: 2,
    name: "Liam O'Connor",
    date: "November 2, 2025",
    message:
      "Yes! And I love how concurrent mode makes lazy-loaded components feel like they’re part of the main UI. It’s subtle but noticeable.",
  },
  {
    postId: 1,
    id: 5,
    parentId: null,
    name: "Jared Lin",
    date: "November 3, 2025",
    message:
      "Anyone else trying out update prioritization? My UI reacts almost instantly now, even under heavy loads. It’s kinda addictive to tweak.",
  },
  {
    postId: 1,
    id: 6,
    parentId: 5,
    name: "Isabella Torres",
    date: "November 3, 2025",
    message:
      "Yep! Prioritizing inputs over background tasks makes a huge difference. Feels way more responsive to the user.",
  },
  {
    postId: 1,
    id: 7,
    parentId: 6,
    name: "Mason Brooks",
    date: "November 5, 2025",
    message:
      "Exactly. It really changes how you think about performance in complex apps. Makes me reconsider which updates really matter.",
  },
  {
    postId: 1,
    id: 8,
    parentId: 7,
    name: "Zoe Carter",
    date: "November 5, 2025",
    message: "Agreed! It also helps with user experience",
  },
];
