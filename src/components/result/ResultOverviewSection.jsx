import Image from "next/image";
import ResultDoctorCard from "@/components/result/ResultDoctorCard";

export default function ResultOverviewSection({ overview }) {
  return (
    <section className="result-left-top">
      <div className="result-left-inner">
        <div className="img-box result-user-box">
          <h1 className="desktop-none" >{overview.greeting}</h1>
          <Image src={overview.userImage} alt="User avatar" />
          <p className="desktop-none" >
            Based on your answers, you&apos;re experiencing{" "}
            <strong>{overview.highlight}</strong> {overview.summarySuffix}
          </p>
        </div>

        <ul className="result-actions" aria-label="Result actions">
          {overview.actions.map((action) => (
            <li key={action.id}>
              <button type="button" className="result-action-button">
                <span>{action.label}</span>
                <Image src={action.icon} alt="" aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>

        <ResultDoctorCard doctor={overview.doctor} />
      </div>

      <div className="result-right-inner">
        <div className="result-copy mobile-none">
          <h1>{overview.greeting}</h1>
          <p>
            Based on your answers, you&apos;re experiencing{" "}
            <strong>{overview.highlight}</strong> {overview.summarySuffix}
          </p>
        </div>

        <div className="result-cause-box">
          <p className="result-cause-label">CAUSE OF HAIR LOSS</p>
          <ul className="result-cause-list">
            {overview.causes.map((cause) => (
              <li key={cause.id}>
                <Image src={cause.icon} alt="" aria-hidden="true" />
                <span>{cause.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="result-quote-box">
          <Image
            src={overview.quote.image}
            alt=""
            aria-hidden="true"
            className="result-quote-box__bg"
          />
          <p>{overview.quote.text}</p>
        </div>
      </div>
    </section>
  );
}
