import React from "react";
import Accordion from "./Accordion";
import { Button } from "@/components/ui/button";
import { TResourcesList } from "../types";
interface ResourcesAccordionProps {
  resourceList: TResourcesList[];
}

const ResourcesAccordion: React.FC<ResourcesAccordionProps> = ({
  resourceList,
}) => {
  return (
    <div id="accordion-nested-parent" data-accordion="collapse">
      <Accordion title="Resources">
        <>
          <div id="accordion-nested-collapse" data-accordion="collapse">
            {resourceList.map((resource, index) => (
              <Accordion
                title={resource.name}
                key={`Accordion Resource-${index}`}
              >
                <p className="mb-2 ">{resource.description}</p>
                <Button onClick={() => window.open(resource.link, "_blank")}>
                  {resource.link}
                </Button>
              </Accordion>
            ))}
            <Button className="mx-auto w-full" onClick={() => {}}>
              Add more resources
            </Button>
          </div>
        </>
      </Accordion>
    </div>
  );
};

export default ResourcesAccordion;
