import Link from "next/link";

export default function RateCardButton() {
  return (
    <div className="relative pb-[18px] pl-[10px]">
      <Link
        href="/rate-card"
        className="block rounded-[4px] bg-black px-[30px] py-3 leading-[1.45] text-white"
      >
        View rate card
      </Link>
      <svg
        width="167"
        height="21"
        viewBox="0 0 167 21"
        className="absolute top-[44px] left-3 overflow-visible blur-[6px]"
        aria-hidden="true"
      >
        <path
          d="M0 0 L167 0 L53.65 21 Z"
          fill="black"
          fillOpacity="0.3"
          stroke="black"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}