import React, { useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div data-accordion="collapse" className="pb-4">
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right border border-gray-200 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700  hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 rounded-t-2xl"
          onClick={toggleAccordion}
          aria-expanded={isOpen}
          aria-controls={`accordion-body-${title}`}
        >
          <span>{title}</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 shrink-0 ${isOpen ? "rotate-180" : ""}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      {isOpen && (
        <div
          id={`accordion-body-${title}`}
          className="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900 rounded-b-2xl"
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
