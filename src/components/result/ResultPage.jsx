import ResultHeader from "@/components/result/ResultHeader";
import ResultOverviewSection from "@/components/result/ResultOverviewSection";
import ResultAddonsSection from "@/components/result/ResultAddonsSection";
import ResultTestimonialsSection from "@/components/result/ResultTestimonialsSection";
import ResultFaqSection from "@/components/result/ResultFaqSection";
import ResultKitSidebar from "@/components/result/ResultKitSidebar";
import {
  resultAddOns,
  resultFaqs,
  resultKit,
  resultOverview,
  resultTestimonials,
  resultTestimonialSlider,
} from "@/components/result/resultData";
import ResultFooter from "./ResultFooter";

export default function ResultPage() {
  return (
    <main className="result-page">
      <ResultHeader />

      <div className="result-shell">
        <div className="container">
          <div className="result-layout">
            <div className="result-card result-left-card">
              <ResultOverviewSection overview={resultOverview} />
              <ResultAddonsSection addOns={resultAddOns} />
              <ResultTestimonialsSection
                arrows={resultTestimonialSlider}
                testimonials={resultTestimonials}
              />
              <ResultFaqSection faqs={resultFaqs} />
            </div>

            <ResultKitSidebar kit={resultKit} />
          </div>
        </div>
      </div>

      <ResultFooter/>

    </main>
  );
}
