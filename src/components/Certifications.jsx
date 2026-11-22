import { certifications } from "../constants";
import { SectionWrapper } from "../hoc";
import SectionHeading from "./SectionHeading";

const CertificationCard = ({ certification }) => (
  <article className='certification-card'>
    <span className='certification-mark' aria-hidden='true'>
      {certification.image ? (
        <img
          src={certification.image}
          alt=''
          loading='lazy'
          decoding='async'
        />
      ) : (
        certification.organization.slice(0, 2).toUpperCase()
      )}
    </span>
    <div className='certification-content'>
      <h3>{certification.name}</h3>
      <p>
        {certification.organization}
        {certification.date ? ` · ${certification.date}` : ""}
      </p>
      {certification.certificate_link && (
        <a
          href={certification.certificate_link}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={`Verify ${certification.name} (opens in a new tab)`}
        >
          View credential <span aria-hidden='true'>↗</span>
        </a>
      )}
      {certification.note && (
        <p className='certification-note'>{certification.note}</p>
      )}
    </div>
  </article>
);

const Certifications = ({ sectionId }) => (
  <>
    <SectionHeading
      eyebrow='Certifications'
      title='Continued learning.'
      description='Selected credentials in artificial intelligence, cloud computing, and machine learning.'
      id={`${sectionId}-heading`}
    />

    <div className='certification-grid'>
      {certifications.map((certification) => (
        <CertificationCard key={certification.name} certification={certification} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Certifications, "certifications", true);
