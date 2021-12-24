import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ItemDetails from './item-details';
import TvShow from '../../models/tv-show';

type Props = TvShow;

const TvShowItem = ({ name, ...rest }: Props) => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="content"
          id="tv-show-item"
        >
          <b>{name} {rest.originalName === name ? '' : `(${rest.originalName})`}</b>
        </AccordionSummary>
        <AccordionDetails><ItemDetails {...rest} /></AccordionDetails>
      </Accordion>
    </div>
  );
};

export default TvShowItem;
