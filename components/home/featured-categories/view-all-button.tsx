import Link from "next/link";

export function ViewAllButton() {
  return (
    <div className="text-center mt-12">
      <Link href="/categories">
        <span className="text-primary hover:underline">View All Categories →</span>
      </Link>
    </div>
  );
}