const SectionHeading = ({ eyebrow, title, description, id, wide = false }) => (
  <div className={`section-heading${wide ? " section-heading--wide" : ""}`}>
    <p className='section-kicker'>{eyebrow}</p>
    <h2 className='section-title' id={id}>
      {title}
    </h2>
    {description && <p className='section-description'>{description}</p>}
  </div>
);

export default SectionHeading;
