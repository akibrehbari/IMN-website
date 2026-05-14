interface Testimonial {
  _id: string;
  quote: string;
  source: string;
  organization?: string;
}

interface PressTestimonialsProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    _id: "1",
    quote: "A bold new voice in Pakistani digital journalism that refuses to look away.",
    source: "The Guardian",
    organization: "The Guardian",
  },
  {
    _id: "2",
    quote: "Ibex Media Network is redefining how stories from underrepresented regions reach the world.",
    source: "Reuters Institute",
    organization: "Reuters Institute",
  },
  {
    _id: "3",
    quote: "One of the most exciting digital media startups to emerge from South Asia in recent years.",
    source: "Columbia Journalism Review",
    organization: "CJR",
  },
  {
    _id: "4",
    quote: "Their climate coverage from Gilgit-Baltistan is essential viewing for understanding Pakistan's future.",
    source: "Al Jazeera",
    organization: "Al Jazeera",
  },
];

export default function PressTestimonials({ testimonials }: PressTestimonialsProps) {
  const displayTestimonials =
    testimonials && testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <section className="bg-imn-gray-50 py-20 md:py-32">
      <div className="container-wide">
        <h2 className="text-center font-sans text-3xl md:text-display-sm font-black uppercase tracking-tight text-imn-dark mb-16">
          What the World Is Saying
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {displayTestimonials.map((testimonial) => (
            <div
              key={testimonial._id}
              className="bg-white p-8 md:p-10 rounded-sm border-l-4 border-imn-red"
            >
              <svg
                className="w-8 h-8 text-imn-red/20 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-imn-dark text-lg md:text-xl font-semibold leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-imn-gray-100 rounded-sm flex items-center justify-center">
                  <span className="text-imn-gray-400 text-xs font-bold">
                    {(testimonial.organization || testimonial.source).charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-imn-gray-500">
                    {testimonial.source}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
