import Image, { StaticImageData } from "next/image";

interface FeatureItemProps {
  imgSrc: StaticImageData;
  alt: string;
  title: string;
  highlight: string;
  features: { subtitle: string; description: string }[];
  color: string;
}

export default function FeatureItem({
  imgSrc,
  alt,
  title,
  highlight,
  features,
  color,
}: FeatureItemProps) {
  return (
    <li className="flex space-x-15 items-center">
      <Image src={imgSrc} alt={alt} className="w-[180px] h-auto" />
      <div className="space-y-5">
        <h3 className="text-[color:var(--color-gray-500)] text-xl font-bold">
          <strong style={{ color: `var(--color-${color})` }}>
            {highlight}
          </strong>{" "}
          {title}
        </h3>
        <ul className="space-y-4">
          {features.map((f, i) => (
            <li
              key={i}
              className="text-[color:var(--color-gray-200)] flex flex-col gap-1"
            >
              <strong className="font-semibold text-[color:var(--color-gray-500)]">
                • {f.subtitle}
              </strong>
              <p className="text-[14px] whitespace-pre-line leading-loose">
                {f.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
