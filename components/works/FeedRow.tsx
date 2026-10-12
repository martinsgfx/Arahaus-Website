import Image from "next/image";
import type { Project } from "@/lib/works";

export default function FeedRow({ project }: { project: Project }) {
  const { name, images } = project;

  return (
    <div className="group @container relative mx-auto aspect-[1280/442] w-full max-w-[1280px]">
      {/* Left image: hidden behind the main image until hover */}
      <div className="absolute top-1/2 left-1/2 aspect-[352/300] w-[27.5cqw] -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 ease-out group-hover:translate-x-[calc(-50%_-_33.3cqw)] group-hover:opacity-100">
        <Image
          src={images.left}
          alt={`${name} mockup`}
          fill
          sizes="30vw"
          className="object-cover"
        />
      </div>

      {/* Right image */}
      <div className="absolute top-1/2 left-1/2 aspect-[352/300] w-[27.5cqw] -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 ease-out group-hover:translate-x-[calc(-50%_+_33.3cqw)] group-hover:opacity-100">
        <Image
          src={images.right}
          alt={`${name} mockup`}
          fill
          sizes="30vw"
          className="object-cover"
        />
      </div>

      {/* Main image: shrinks a little on hover */}
      <div className="absolute inset-y-0 left-1/2 w-[44.45cqw] -translate-x-1/2 transition-transform duration-500 ease-out group-hover:scale-[0.88]">
        <Image
          src={images.main}
          alt={name}
          fill
          sizes="45vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}