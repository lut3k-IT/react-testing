import { Tooltip } from '@mui/material';
import React from 'react';

export default function TooltipMui({
  children,
  title,
  placement = 'bottom',
  arrow = true,
}) {
  return (
    <Tooltip title={title} placement={placement} arrow={arrow}>
      <span>{children}</span>
    </Tooltip>
  );
}
