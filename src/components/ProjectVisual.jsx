
const visuals = {
  invoice: {
    className: "",
    label: "AI-powered invoice processing flow",
    description:
      "Email, Logic Apps, Blob Storage, Event Grid, Storage Queue, FastAPI worker, AI agent orchestration and package preparation, Mistral Large 3 extraction, validation and PostgreSQL.",
    nodes: [
      "Email",
      "Logic Apps",
      "Blob Storage",
      "Event Grid",
      "Storage Queue",
      "FastAPI worker",
      "AI agent orchestration",
      "Prepare processing package",
      "Extract + validate",
      "PostgreSQL",
    ],
    applicationLayer: ["Next.js frontend", "FastAPI API"],
    caption:
      "Separate API and worker · LangGraph orchestration and package preparation · direct XML parsing · Mistral Large 3 PDF extraction via Azure AI Foundry",
  },
  retrieval: {
    className: "project-visual--retrieval",
    label: "Enterprise AI assistant concept",
    description:
      "Technical sources, embeddings, semantic search, contextual retrieval, GPT-4, natural-language responses.",
    nodes: [
      "Technical sources",
      "Embeddings",
      "Semantic search",
      "Relevant context",
      "GPT-4",
      "Natural-language response",
    ],
    caption: "Retrieval-Augmented Generation for source code and technical documentation",
  },
  fax: {
    className: "project-visual--fax",
    label: "Email-to-fax workflow",
    description:
      "Incoming email, recipient validation, Sipgate Fax API, delivery-status polling.",
    nodes: ["Email", "Recipient validation", "Sipgate Fax API", "Status polling"],
    caption: "Automated success and failure handling",
  },
  contract: {
    className: "project-visual--contract",
    label: "Contract analysis workflow",
    description:
      "Contract documents, information extraction, AI analysis, structured summaries.",
    nodes: [
      "Contract",
      "Information extraction",
      "AI analysis",
      "Structured summary",
    ],
    caption: "AI-powered contract review developed during internship",
  },
};

const ProjectVisual = ({ type }) => {
  const visual = visuals[type];
  if (!visual) return null;

  return (
    <div
      className={`project-visual ${visual.className}`}
      role='img'
      aria-label={visual.description}
    >
      <p className='visual-label'>{visual.label}</p>
      {visual.applicationLayer && (
        <div className='flow-application-layer'>
          <span>APPLICATION LAYER</span>
          <strong>{visual.applicationLayer[0]}</strong>
          <span aria-hidden='true'>↔</span>
          <strong>{visual.applicationLayer[1]}</strong>
        </div>
      )}
      <ol className='flow-grid'>
        {visual.nodes.map((node, index) => (
          <li className='flow-node' key={`${node}-${index}`}>
            <span className='flow-node-index'>
              {String(index + 1).padStart(2, "0")}
            </span>
            <strong>{node}</strong>
          </li>
        ))}
      </ol>
      <p className='flow-caption'>{visual.caption}</p>
    </div>
  );
};

export default ProjectVisual;
