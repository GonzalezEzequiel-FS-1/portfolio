import PreviewCard from "../cards/PreviewCard";
import previews from "../../utils/previews.json";

// Main component to render all page previews
export default function PagePreviews() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent dark:via-purple-900/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Featured Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {previews.map((project, index) => (
            <PreviewCard key={project.id} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
