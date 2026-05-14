import Image from "next/image";
import { urlFor } from "@/sanity/image";

interface SanityImageProps {
  image: {
    asset?: { _ref: string };
    alt?: string;
    hotspot?: { x: number; y: number };
    crop?: {
      top: number;
      bottom: number;
      left: number;
      right: number;
    };
  };
  alt?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export default function SanityImage({
  image,
  alt,
  width,
  height,
  fill,
  className,
  sizes,
  priority = false,
}: SanityImageProps) {
  if (!image?.asset?._ref) {
    return null;
  }

  const sanityImage = {
    _type: "image" as const,
    asset: { _type: "reference" as const, _ref: image.asset._ref },
  };

  const imageUrl = urlFor(sanityImage)
    .auto("format")
    .quality(80)
    .url();

  if (fill) {
    return (
      <Image
        src={imageUrl}
        alt={alt || image.alt || ""}
        fill
        className={className}
        sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={imageUrl}
      alt={alt || image.alt || ""}
      width={width || 800}
      height={height || 600}
      className={className}
      sizes={sizes}
      priority={priority}
    />
  );
}
