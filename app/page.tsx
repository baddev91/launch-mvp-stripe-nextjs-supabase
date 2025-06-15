'use client';
import { useEffect, useState } from 'react';
import groupBy from 'lodash/groupBy';
import { badHabits, Habit, TrackedHabit } from '@/data/badHabits';
import { HabitCard } from '@/components/HabitCard';

export default function HomePage() {
  const [tracked, setTracked] = useState<TrackedHabit[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('trackedHabits');
    if (stored) {
      setTracked(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('trackedHabits', JSON.stringify(tracked));
  }, [tracked]);

  const handleSelect = (habit: Habit) => {
    if (tracked.find((h) => h.id === habit.id)) return;
    setTracked([...tracked, { ...habit, streak: 0, lastUpdated: '' }]);
  };

  const handleMark = (id: number) => {
    const today = new Date().toISOString().slice(0, 10);
    setTracked((habs) =>
      habs.map((h) => {
        if (h.id !== id) return h;
        if (h.lastUpdated === today) return h;
        return { ...h, streak: h.streak + 1, lastUpdated: today };
      })
    );
  };

  const handleRemove = (id: number) => {
    setTracked((habs) => habs.filter((h) => h.id !== id));
  };

  const grouped = groupBy(badHabits, 'category');

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Dev Bad Habit Tracker</h1>

      {tracked.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Your Tracked Habits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {tracked.map((habit) => (
              <HabitCard
                key={habit.id}
                habit={habit}
                tracked={habit}
                onMark={() => handleMark(habit.id)}
                onRemove={() => handleRemove(habit.id)}
              />
            ))}
          </div>
        </section>
      )}

      {Object.entries(grouped).map(([category, habits]) => (
        <section key={category} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {(habits as Habit[]).map((habit) => (
              <HabitCard
                key={habit.id}
                habit={habit}
                tracked={tracked.find((h) => h.id === habit.id)}
                onSelect={() => handleSelect(habit)}
                onMark={() => handleMark(habit.id)}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
