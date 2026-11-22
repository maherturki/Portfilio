import { SectionWrapper } from "../hoc";
import SectionHeading from "./SectionHeading";

const principles = [
  {
    title: "Understand the problem",
    description:
      "Start with the business workflow and requirements, not with a model choice.",
  },
  {
    title: "Design the system",
    description:
      "Choose an architecture, orchestration strategy, data flow, and integrations.",
  },
  {
    title: "Build and integrate",
    description:
      "Connect AI capabilities with backend services, APIs, databases, and cloud infrastructure.",
  },
  {
    title: "Validate and improve",
    description:
      "Test the application, validate outputs, handle errors, and improve reliability.",
  },
];

const EngineeringApproach = ({ sectionId }) => (
  <>
    <SectionHeading
      eyebrow='Engineering approach'
      title='From AI capabilities to working systems.'
      id={`${sectionId}-heading`}
    />

    <ol className='approach-grid'>
      {principles.map((principle, index) => (
        <li className='approach-step' key={principle.title}>
          <span className='approach-number'>
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3>{principle.title}</h3>
          <p>{principle.description}</p>
        </li>
      ))}
    </ol>
  </>
);

export default SectionWrapper(EngineeringApproach, "approach", true);
