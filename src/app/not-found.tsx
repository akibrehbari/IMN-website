import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <h1 className="font-serif text-8xl font-bold text-imn-red mb-4">404</h1>
        <h2 className="font-serif text-2xl font-bold text-imn-dark mb-4">
          Page Not Found
        </h2>
        <p className="text-imn-gray-500 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
          <Link href="/stories" className="btn-secondary">
            Browse Stories
          </Link>
        </div>
      </div>
    </div>
  );
}
