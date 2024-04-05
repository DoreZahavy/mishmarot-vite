import React from 'react'

import { Accordion, AccordionSummary, AccordionDetails} from "@mui/material"
import { useState } from "react";
import GridSelector from "./GridSelector";

export default function ShiftAccordion ({title, workers, f_expand}) {
  const colors = workers.map(() => '#'+Math.floor(Math.random()*16777215).toString(16))
  const [selected_worker, setSelectedWorker] = useState("");
  return (
    <Accordion elevation={2}
      expanded={f_expand}
      disableGutters
    >
        <AccordionSummary sx={{bgcolor: colors[workers.indexOf(selected_worker)]}}>
            {title} {selected_worker}
        </AccordionSummary>
        <AccordionDetails>
            <GridSelector options={workers} handle={setSelectedWorker} value={selected_worker}/>
        </AccordionDetails>
    </Accordion>
  )
}