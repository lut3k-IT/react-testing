import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Page, TooltipMui } from 'components';

export default function TooltipPage() {
  const tooltipHTML = (
    <>
      <h1>Heading</h1>
      <p>Paragraph ...</p>
      <a href='https://google.com'>A link</a>
    </>
  );

  return (
    <Page>
      <TooltipMui title={'Click this button ⚠️'}>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </TooltipMui>

      <TooltipMui title={tooltipHTML}>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </TooltipMui>

      <TooltipMui title={'DIV in paragraph'}>
        <p>DIV</p>
      </TooltipMui>
    </Page>
  );
}
