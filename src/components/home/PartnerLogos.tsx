interface Partner {
  _id: string;
  name: string;
  logo?: {
    asset?: { _ref: string };
  };
  url?: string;
}

interface PartnerLogosProps {
  partners?: Partner[];
}

const placeholderPartners: Partner[] = [
  { _id: "1", name: "UNESCO" },
  { _id: "2", name: "WWF Pakistan" },
  { _id: "3", name: "British Council" },
  { _id: "4", name: "UNDP Pakistan" },
  { _id: "5", name: "USAID" },
  { _id: "6", name: "GIZ" },
];

export default function PartnerLogos({ partners }: PartnerLogosProps) {
  const displayPartners =
    partners && partners.length > 0 ? partners : placeholderPartners;

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container-wide">
        <h2 className="text-center font-sans text-3xl md:text-display-sm font-black uppercase tracking-tight text-imn-dark mb-16">
          Advertising Partners
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {displayPartners.map((partner) => (
            <div
              key={partner._id}
              className="border border-imn-gray-200 rounded-sm p-6 md:p-8 flex items-center justify-center hover:border-imn-red/30 transition-colors min-h-[100px]"
            >
              <span className="text-imn-gray-500 text-sm font-bold uppercase tracking-wider text-center">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
