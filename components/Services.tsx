import RateCardButton from "@/components/RateCardButton";

type Service = {
  number: string;
  title: string;
  items: string[];
};

const services: Service[] = [
  {
    number: "1",
    title: "Branding & Identity Design",
    items: ["Logo Design", "Brand Guidelines", "Business Cards & Stationery"],
  },
  {
    number: "2",
    title: "Print & Marketing Materials",
    items: [
      "Flyers & Brochures",
      "Posters & Banners",
      "Event access",
      "Catalogs & Magazines",
      "Menu Design",
      "Packaging Design",
    ],
  },
  {
    number: "3",
    title: "Digital Design",
    items: ["Social Media Graphics", "Email Newsletters & Digital Ads"],
  },
  {
    number: "4",
    title: "Custom Artwork & Illustration",
    items: ["Family Crests", "Heritage Collection"],
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-white px-4 py-24 text-charcoal md:px-16 md:py-[100px]">
      <div className="mx-auto flex max-w-[1152px] flex-col items-center gap-10">
        <div className="flex flex-col items-center text-center">
          <span className="-mb-5 text-2xl leading-[1.23] tracking-[-0.005em] text-rust/60">
            Arahaus’
          </span>
          <h2 className="text-6xl leading-[1.45] tracking-[-0.025em] md:text-[100px]">
            Services
          </h2>
        </div>

        <div className="w-full">
          {services.map((service, index) => (
            <div key={service.number}>
              {index > 0 && <hr className="my-10 border-mist" />}
              <div className="grid grid-cols-[100px_1fr] md:grid-cols-[606fr_303fr_243fr]">
                <p className="row-span-2 text-[128px] leading-[0.75] font-light text-ink md:row-span-1 md:leading-[0.75]">
                  {service.number}
                </p>
                <h3 className="text-[17.92px] leading-[1.3] tracking-[-0.016em] text-ink">
                  {service.title}
                </h3>
                <ul className="mt-[10px] text-[17.92px] leading-6 font-light tracking-[-0.016em] text-muted md:mt-0">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <RateCardButton />
      </div>
    </section>
  );
}