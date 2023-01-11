import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Page, TooltipMui } from 'components';

export default function TooltipPage() {
  const tooltipHTML = (
    <>
      <h1>Heading</h1>
      <p>Paragraph ...</p>
      <a href='https://google.com'>A link to google</a>
    </>
  );

  return (
    <Page>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <TooltipMui title={'Click this button 🎯'} placement='right'>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </TooltipMui>

        <TooltipMui title={tooltipHTML} leaveDelay={600}>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </TooltipMui>
      </div>
    </Page>
  );
}
