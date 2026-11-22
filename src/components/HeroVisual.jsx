const HeroVisual = () => (
  <div
    className='hero-visual'
    role='img'
    aria-label='Abstract illustration of data, language models, APIs, and cloud services connected in an AI system'
  >
    <div className='visual-topline' aria-hidden='true'>
      <span>INTELLIGENT SYSTEMS</span>
      <span className='visual-live'>ENGINEERED</span>
    </div>
    <div className='visual-orbit visual-orbit--outer' aria-hidden='true' />
    <div className='visual-orbit' aria-hidden='true' />
    <div className='visual-orbit visual-orbit--inner' aria-hidden='true' />
    <div className='visual-core' aria-hidden='true'>
      AI
    </div>
    <div className='visual-node visual-node--data' aria-hidden='true'>
      <strong>Context</strong>
      <span>Data + retrieval</span>
    </div>
    <div className='visual-node visual-node--agent' aria-hidden='true'>
      <strong>Reasoning</strong>
      <span>LLMs + agents</span>
    </div>
    <div className='visual-node visual-node--api' aria-hidden='true'>
      <strong>Services</strong>
      <span>Python + APIs</span>
    </div>
    <div className='visual-node visual-node--cloud' aria-hidden='true'>
      <strong>Delivery</strong>
      <span>Cloud workflows</span>
    </div>
    <div className='visual-caption' aria-hidden='true'>
      <span>RETRIEVAL</span>
      <span>ORCHESTRATION</span>
      <span>INTEGRATION</span>
    </div>
  </div>
);

export default HeroVisual;
