import { Tooltip } from '@mui/material';

export default function TooltipMui({
  children,
  title,
  placement = 'bottom',
  arrow = true,
}) {
  return (
    <Tooltip title={title} placement={placement} arrow={arrow}>
      {children}
    </Tooltip>
  );
}
