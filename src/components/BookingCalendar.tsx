import { BRAND } from "@/content/site";
import { Icon } from "./Icon";

/** The clinic's own consultation calendar, embedded. Replaces the enquiry form (D38). */
export function BookingCalendar() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-card">
      <iframe
        src={BRAND.bookingUrl}
        title="Book your free online consultation"
        loading="lazy"
        className="block h-[900px] w-full border-0"
      />
      <p className="border-t border-ink/10 p-4 text-center text-sm text-stone">
        Calendar not loading?{" "}
        <a href={BRAND.bookingUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-1 font-semibold text-gold-700 hover:text-ink">
          Open the booking calendar <Icon name="arrow" className="h-4 w-4" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </p>
    </div>
  );
}
