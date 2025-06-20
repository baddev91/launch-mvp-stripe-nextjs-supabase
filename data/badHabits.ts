export interface Habit {
  id: number;
  name: string;
  category: string;
}

export const badHabits: Habit[] = [
  { id: 1, name: 'Checking social media constantly', category: 'Productivity' },
  { id: 2, name: 'Leaving messy desktop', category: 'Productivity' },
  { id: 3, name: 'Not planning daily tasks', category: 'Productivity' },
  { id: 4, name: 'Procrastinating on bug fixes', category: 'Productivity' },
  { id: 5, name: 'Multitasking excessively', category: 'Productivity' },
  { id: 6, name: 'Working without breaks', category: 'Productivity' },
  { id: 7, name: 'Starting day without a plan', category: 'Productivity' },
  { id: 8, name: 'Ignoring time estimates', category: 'Productivity' },
  { id: 9, name: 'Keeping too many tabs open', category: 'Productivity' },
  { id: 10, name: 'Skipping code cleanup', category: 'Productivity' },
  { id: 11, name: 'Writing code before thinking', category: 'Productivity' },
  { id: 12, name: 'Not setting priorities', category: 'Productivity' },
  { id: 13, name: 'Jumping between tasks', category: 'Productivity' },
  { id: 14, name: 'Forgetting to track time', category: 'Productivity' },
  { id: 15, name: 'Rushing through tasks', category: 'Productivity' },
  { id: 16, name: 'Not reviewing commits', category: 'Productivity' },
  { id: 17, name: 'Over-engineering simple tasks', category: 'Productivity' },
  { id: 18, name: 'Ignoring keyboard shortcuts', category: 'Productivity' },
  { id: 19, name: 'Not automating repetitive work', category: 'Productivity' },
  { id: 20, name: 'Delaying documentation', category: 'Productivity' },

  { id: 21, name: 'Not writing tests', category: 'Code Quality' },
  { id: 22, name: 'Skipping code reviews', category: 'Code Quality' },
  { id: 23, name: 'Leaving TODOs in production', category: 'Code Quality' },
  { id: 24, name: 'Copy-pasting code blindly', category: 'Code Quality' },
  { id: 25, name: 'Ignoring linter warnings', category: 'Code Quality' },
  { id: 26, name: 'Hardcoding values', category: 'Code Quality' },
  { id: 27, name: 'Not handling errors', category: 'Code Quality' },
  { id: 28, name: 'Pushing directly to main', category: 'Code Quality' },
  { id: 29, name: 'Writing long functions', category: 'Code Quality' },
  { id: 30, name: 'Not refactoring regularly', category: 'Code Quality' },
  { id: 31, name: 'Using vague variable names', category: 'Code Quality' },
  { id: 32, name: 'Commenting out dead code', category: 'Code Quality' },
  { id: 33, name: 'Ignoring compiler warnings', category: 'Code Quality' },
  { id: 34, name: 'Leaving debug logs', category: 'Code Quality' },
  { id: 35, name: 'Using magic numbers', category: 'Code Quality' },
  { id: 36, name: 'Not updating dependencies', category: 'Code Quality' },
  { id: 37, name: 'Using outdated patterns', category: 'Code Quality' },
  { id: 38, name: 'Not writing comments', category: 'Code Quality' },
  { id: 39, name: 'Skipping type checks', category: 'Code Quality' },
  { id: 40, name: 'Ignoring code formatting', category: 'Code Quality' },

  { id: 41, name: 'Not asking for feedback', category: 'Communication' },
  { id: 42, name: 'Ignoring documentation', category: 'Communication' },
  { id: 43, name: 'Not updating the team', category: 'Communication' },
  { id: 44, name: 'Poor commit messages', category: 'Communication' },
  { id: 45, name: 'Not attending stand-ups', category: 'Communication' },
  { id: 46, name: 'Interrupting colleagues', category: 'Communication' },
  { id: 47, name: 'Writing vague emails', category: 'Communication' },
  { id: 48, name: 'Not responding to issues', category: 'Communication' },
  { id: 49, name: 'Assuming others understand', category: 'Communication' },
  { id: 50, name: 'Ignoring design specs', category: 'Communication' },
  { id: 51, name: 'Not documenting decisions', category: 'Communication' },
  { id: 52, name: 'Keeping knowledge siloed', category: 'Communication' },
  { id: 53, name: 'Not pairing with teammates', category: 'Communication' },
  { id: 54, name: 'Avoiding difficult conversations', category: 'Communication' },
  { id: 55, name: 'Not celebrating wins', category: 'Communication' },
  { id: 56, name: 'Not giving credit', category: 'Communication' },
  { id: 57, name: 'Rarely sharing progress', category: 'Communication' },
  { id: 58, name: 'Being defensive about code', category: 'Communication' },
  { id: 59, name: 'Overusing jargon', category: 'Communication' },
  { id: 60, name: 'Not mentoring juniors', category: 'Communication' },

  { id: 61, name: 'Skipping meals while coding', category: 'Health' },
  { id: 62, name: 'Sitting all day', category: 'Health' },
  { id: 63, name: 'Ignoring ergonomic setup', category: 'Health' },
  { id: 64, name: 'Working late nights', category: 'Health' },
  { id: 65, name: 'Drinking too much caffeine', category: 'Health' },
  { id: 66, name: 'Staring at screen without breaks', category: 'Health' },
  { id: 67, name: 'Poor posture', category: 'Health' },
  { id: 68, name: 'Not stretching', category: 'Health' },
  { id: 69, name: 'Not drinking water', category: 'Health' },
  { id: 70, name: 'Sacrificing sleep for code', category: 'Health' },
  { id: 71, name: 'Ignoring eye strain', category: 'Health' },
  { id: 72, name: 'Rarely moving from desk', category: 'Health' },
  { id: 73, name: 'Eating junk food', category: 'Health' },
  { id: 74, name: 'Skipping exercise', category: 'Health' },
  { id: 75, name: 'Working during vacations', category: 'Health' },
  { id: 76, name: 'Never disconnecting', category: 'Health' },
  { id: 77, name: 'Using the phone in bed', category: 'Health' },
  { id: 78, name: 'Not scheduling downtime', category: 'Health' },
  { id: 79, name: 'Neglecting mental health', category: 'Health' },
  { id: 80, name: 'Ignoring signs of burnout', category: 'Health' },

  { id: 81, name: 'Fear of refactoring', category: 'Mindset' },
  { id: 82, name: 'Overcomplicating solutions', category: 'Mindset' },
  { id: 83, name: 'Dismissing new technologies', category: 'Mindset' },
  { id: 84, name: 'Not asking for help', category: 'Mindset' },
  { id: 85, name: 'Taking feedback personally', category: 'Mindset' },
  { id: 86, name: 'Perfectionism delaying progress', category: 'Mindset' },
  { id: 87, name: 'Avoiding peer reviews', category: 'Mindset' },
  { id: 88, name: 'Not learning from mistakes', category: 'Mindset' },
  { id: 89, name: 'Underestimating tasks', category: 'Mindset' },
  { id: 90, name: 'Overestimating own skills', category: 'Mindset' },
  { id: 91, name: 'Ignoring user feedback', category: 'Mindset' },
  { id: 92, name: 'Not setting boundaries', category: 'Mindset' },
  { id: 93, name: 'Working without goals', category: 'Mindset' },
  { id: 94, name: 'Resisting automation', category: 'Mindset' },
  { id: 95, name: 'Not keeping skills current', category: 'Mindset' },
  { id: 96, name: 'Comparing to others constantly', category: 'Mindset' },
  { id: 97, name: 'Avoiding leadership roles', category: 'Mindset' },
  { id: 98, name: 'Waiting for inspiration', category: 'Mindset' },
  { id: 99, name: 'Not celebrating progress', category: 'Mindset' },
  { id: 100, name: 'Refusing to document', category: 'Mindset' }
];

export interface TrackedHabit extends Habit {
  streak: number;
  lastUpdated: string;
}
