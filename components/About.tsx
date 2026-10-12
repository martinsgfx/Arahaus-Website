import Image from "next/image";

type FeatureRowProps = {
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  imageFirst?: boolean;
};

function FeatureRow({
  title,
  text,
  imageSrc,
  imageAlt,
  imageFirst = false,
}: FeatureRowProps) {
  return (
    <div
      className={`flex w-full flex-col gap-10 md:flex-row md:items-center md:justify-between ${
        imageFirst ? "md:flex-row-reverse" : ""
      }`}
    >
        <div className="relative aspect-[400/259] w-full md:w-[400px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 768px) 400px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="md:w-[475px]">
        <h3 className="text-4xl font-bold  leading-[0.94] tracking-[-0.005em] md:max-w-[433px] md:text-5xl">
          {title}
        </h3>
        <p className="mt-5 tracking-[-0.005em] text-white/60">{text}</p>
      </div>

      
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-charcoal px-6 py-24 text-white md:px-16 md:py-[100px]">
      <div className="mx-auto flex max-w-[1152px] flex-col items-center gap-16 md:gap-[100px]">
        {/* Title and sticker collage */}
        <div className="flex w-full flex-col gap-10">
          <div className="flex flex-col items-center text-center">
            <span className="-mb-5 text-2xl leading-[1.23] tracking-[-0.005em] text-gold/60">
              Arahaus’
            </span>
            <h2 className="text-6xl leading-[1.45] tracking-[-0.025em] md:text-[100px]">
              About
            </h2>
          </div>

          <div className="flex aspect-[1152/399] items-center justify-center border border-white/20 bg-[#1C1C1C]">
            <div className="relative aspect-[200/105] w-[17.36%]">
              <Image
                src="/about/st-7.png"
                alt="Sticker design"
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[616/399] w-[53.47%]">
              <Image
                src="/about/stickers.png"
                alt="Sticker collection"
                fill
                sizes="55vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[200/144] w-[17.36%]">
              <Image
                src="/about/st-1.png"
                alt="Sticker design"
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Vision + alternating rows */}
        <div className="flex w-full max-w-[1100px] flex-col items-center gap-24 md:gap-[200px]">
          <div className="flex max-w-[878px] flex-col items-center gap-5 text-center">
            <h2 className="text-5xl font-bold leading-[0.95] tracking-[-0.005em] md:text-7xl">
              Business, celebration, family. Designed to last.
            </h2>
            <p className="max-w-[544px] tracking-[-0.005em] text-white/60">
              Our vision extends beyond design. We aspire to build a brand that
              explores uncharted possibilities and create experiences beyond the
              imaginable.
            </p>
          </div>

          <FeatureRow
            title="We are the minds that move culture"
            imageSrc="/about/bcfp.jpg"
            imageAlt="BFCP branding"
            text="Arahaus brings together a dynamic collective of creators, problem solvers, and strategists, all dedicated to elevating branding for individuals and businesses alike. We are driven to push the boundaries of design, developing bold, creative strategies that make our brand memorable and position it at the forefront of industry conversations."
            
          />

          <FeatureRow
            title="Where our vibe meets our vision"
            imageSrc="/about/magazine.jpg"
            imageAlt="Magazine mockup"
            imageFirst
            text="We are focused on creating extra-mile designs that mean business, celebrate with you, and preserve the family moments that matter while cultivating a global team that infuses emotion into every project, driving authentic creativity across all aspects of strategic branding."
            
          />
        </div>
      </div>
    </section>
  );
}