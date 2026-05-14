import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

interface StoryCardProps {
  title: string;
  slug: string;
  excerpt?: string;
  imageUrl?: string;
  imageAlt?: string;
  publishedAt?: string;
  authorName?: string;
  authorImage?: string;
  categoryTitle?: string;
  categoryColor?: string;
  variant?: "large" | "compact";
}

export default function StoryCard({
  title,
  slug,
  excerpt,
  imageUrl,
  imageAlt,
  publishedAt,
  authorName,
  categoryTitle,
  variant = "compact",
}: StoryCardProps) {
  if (variant === "large") {
    return (
      <Link
        href={`/stories/${slug}`}
        className="group relative overflow-hidden rounded-sm bg-imn-gray-100 aspect-[4/3]"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={imageAlt || title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-imn-dark to-imn-gray-700" />
        )}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          {categoryTitle && (
            <span className="inline-block bg-imn-red text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 mb-3">
              {categoryTitle}
            </span>
          )}
          <h3 className="font-sans text-xl md:text-2xl font-bold uppercase text-white mb-2 line-clamp-3 leading-tight">
            {title}
          </h3>
          {excerpt && (
            <p className="text-white/60 text-sm line-clamp-2">{excerpt}</p>
          )}
          {publishedAt && (
            <p className="text-white/40 text-xs mt-2 font-bold uppercase tracking-wider">
              {formatDate(publishedAt)}
            </p>
          )}
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/stories/${slug}`}
      className="group flex flex-col rounded-sm overflow-hidden bg-white border border-imn-gray-100"
    >
      <div className="relative aspect-video bg-imn-gray-100 overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={imageAlt || title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-imn-gray-200 to-imn-gray-300 flex items-center justify-center">
            <span className="text-imn-gray-400 text-sm font-bold">IMN</span>
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        {categoryTitle && (
          <span className="text-[10px] font-bold uppercase tracking-widest text-imn-red mb-2">
            {categoryTitle}
          </span>
        )}
        <h3 className="font-sans text-sm font-bold uppercase text-imn-dark line-clamp-2 group-hover:text-imn-red transition-colors mb-2 leading-tight">
          {title}
        </h3>
        {excerpt && (
          <p className="text-imn-gray-500 text-sm line-clamp-2 mb-3">{excerpt}</p>
        )}
        <div className="flex items-center gap-2 mt-auto pt-2 text-xs text-imn-gray-400 font-medium">
          {authorName && <span>{authorName}</span>}
          {authorName && publishedAt && <span>&middot;</span>}
          {publishedAt && <span>{formatDate(publishedAt)}</span>}
        </div>
      </div>
    </Link>
  );
}
