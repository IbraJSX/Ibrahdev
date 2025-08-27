const skills = [
  'React',
  'Tailwind CSS',
  'Next.js',
  'Vue',
  'SQL',
  'JavaScript',
];

export function Skills() {
  return (
    <section className="mb-8 animate-fade-in">
      <h2 className="mb-4 text-xl font-semibold tracking-tighter">Habilidades</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center justify-center p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg"
          >
            <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
              {skill}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
