import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 pt-20 text-center text-charcoal">
      <span className="-mb-5 text-2xl leading-[1.23] tracking-[-0.005em] text-rust/60">
        Arahaus’
      </span>
      <h1 className="text-[length:clamp(6rem,22vw,12.5rem)] leading-[1.1] tracking-[-0.025em]">
        404
      </h1>
      <p className="mt-2 max-w-[400px] tracking-[-0.005em] text-ink/70">
        We couldn’t find the page you’re looking for. It may have moved, or the
        link may be mistyped.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-[4px] bg-black px-[30px] py-3 leading-[1.45] text-white"
      >
        Back to home
      </Link>
    </main>
  );
}