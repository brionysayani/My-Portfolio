import React, { useState } from 'react';
import Coding from './Coding';

const ExtrasAccordion = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <div className="flex flex-col gap-12 w-full overflow-hidden pb-10">
      <Coding isOpen={expandedId === 'coding'} onToggle={() => toggleSection('coding')} />
    </div>
  );
};

export default ExtrasAccordion;
