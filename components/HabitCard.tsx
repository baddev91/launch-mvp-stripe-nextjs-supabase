'use client';
import { Habit, TrackedHabit } from '@/data/badHabits';

interface HabitCardProps {
  habit: Habit;
  tracked?: TrackedHabit;
  onSelect?: () => void;
  onMark?: () => void;
  onRemove?: () => void;
}

export function HabitCard({ habit, tracked, onSelect, onMark, onRemove }: HabitCardProps) {
  const today = new Date().toISOString().slice(0, 10);
  const alreadyMarked = tracked && tracked.lastUpdated === today;

  return (
    <div className="bg-white dark:bg-neutral-dark border border-slate-200 dark:border-slate-700 rounded-lg p-4 flex flex-col justify-between">
      <div className="flex-1">
        <h3 className="font-medium text-slate-900 dark:text-white mb-2">{habit.name}</h3>
        {tracked && (
          <p className="text-sm text-slate-500 dark:text-slate-400">Streak: {tracked.streak} day{tracked.streak === 1 ? '' : 's'}</p>
        )}
      </div>
      <div className="mt-4 flex items-center justify-between gap-2">
        {tracked ? (
          <button
            onClick={onMark}
            disabled={alreadyMarked}
            className={`flex-1 px-3 py-2 rounded text-white text-sm ${alreadyMarked ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-primary-dark'}`}
          >
            {alreadyMarked ? 'Marked' : 'I avoided today'}
          </button>
        ) : (
          <button
            onClick={onSelect}
            className="flex-1 px-3 py-2 bg-primary hover:bg-primary-dark text-white text-sm rounded"
          >
            Track habit
          </button>
        )}
        {tracked && onRemove && (
          <button
            onClick={onRemove}
            className="px-2 py-2 text-red-500 text-sm"
            title="Remove"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
