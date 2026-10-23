import Image from "next/image";
import type { Project } from "@/lib/works";

const shapeClasses: Record<Project["gridShape"], string> = {
  short: "aspect-[260/375]",
  tall: "aspect-[260/597]",
};

function GridCard({ project }: { project: Project }) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-[10px] bg-mist ${shapeClasses[project.gridShape]}`}
    >
      <Image
        src={project.gridImage ?? project.images.main}
        alt={project.name}
        fill
        sizes="50vw"
        className="object-cover"
      />
    </div>
  );
}

export default function MobileGrid({ projects }: { projects: Project[] }) {
  // Cards alternate between the two columns: 1st left, 2nd right, 3rd left...
  const left = projects.filter((_, index) => index % 2 === 0);
  const right = projects.filter((_, index) => index % 2 === 1);

  return (
    <div className="flex gap-3 px-4">
      <div className="flex flex-1 flex-col gap-3">
        {left.map((project) => (
          <GridCard key={project.slug} project={project} />
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-3">
        {right.map((project) => (
          <GridCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}