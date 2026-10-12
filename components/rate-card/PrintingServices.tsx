import { Info } from "lucide-react";

const deliverables = [
  "Business Cards",
  "Flyers",
  "Brochures",
  "Banners",
  "Packaging",
  "Merchandise",
  "Stationery",
];

export default function PrintingServices() {
  return (
    <section className="mt-[60px] border border-mist bg-[#FAFAFA] px-5 py-12 md:px-20 md:pt-20 md:pb-14">
      <h2 className="text-[32px] font-bold tracking-[-0.03em]">
        Printing Services
      </h2>
      <p className="mt-3 max-w-[610px] leading-6 font-light text-muted">
        Arahaus extends design concepts into physical spaces. We coordinate with
        high-fidelity print houses to execute physical branding with meticulous
        attention to paper stock, finishes, and dimensional clarity.
      </p>

      <div className="mt-9 flex flex-col gap-6 bg-[#F3F3F3] p-6 md:flex-row md:items-center md:justify-between md:p-8">
        <div className="max-w-[540px]">
          <h3 className="text-lg font-bold">Deliverables</h3>
          <ul className="mt-4 flex flex-wrap gap-[11px]">
            {deliverables.map((item) => (
              <li
                key={item}
                className="border border-mist px-4 py-2 text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4 rounded-lg bg-white px-6 py-5 md:w-[321px]">
          <Info size={22} className="shrink-0" />
          <div>
            <p className="text-sm font-bold uppercase">Logistics notice</p>
            <p className="text-[13px] font-light text-muted">
              Cost of printing is exclusive of delivery fees
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}