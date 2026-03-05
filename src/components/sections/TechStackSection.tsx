import React from 'react';

const TechStackSection = () => {
  const technologies = [
    { name: "React", logo: "⚛️", category: "Frontend" },
    { name: "Next.js", logo: "▲", category: "Frontend" },
    { name: "TypeScript", logo: "TS", category: "Language" },
    { name: "Node.js", logo: "N", category: "Backend" },
    { name: "Python", logo: "🐍", category: "Backend" },
    { name: "PostgreSQL", logo: "🐘", category: "Database" },
    { name: "MongoDB", logo: "🍃", category: "Database" },
    { name: "AWS", logo: "☁️", category: "Cloud" },
    { name: "Docker", logo: "🐳", category: "DevOps" },
    { name: "Kubernetes", logo: "☸️", category: "DevOps" },
    { name: "GraphQL", logo: "◆", category: "API" },
    { name: "Redis", logo: "◊", category: "Cache" },
    { name: "TailwindCSS", logo: "💨", category: "Styling" },
    { name: "Vue.js", logo: "V", category: "Frontend" },
    { name: "Flutter", logo: "F", category: "Mobile" },
    { name: "React Native", logo: "RN", category: "Mobile" }
  ];

  const categories = ["Frontend", "Backend", "Database", "Cloud", "DevOps", "Mobile"];

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
            The Tech Behind Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We use modern, battle-tested technologies to build scalable and maintainable solutions
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-[#E7107E] hover:text-[#E7107E] transition-colors duration-200"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group bg-[#F8F9FC] rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                {tech.logo}
              </div>
              <div className="text-center">
                <p className="font-semibold text-[#0F172A] text-sm">
                  {tech.name}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {tech.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
