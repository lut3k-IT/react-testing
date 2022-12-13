import React from 'react';
import { Tooltip } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';

const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '.9rem',
          backgroundColor: '#383838',
        },
        arrow: {
          color: '#383838',
        },
      },
    },
  },
});

export default function TooltipMui({
  children,
  title,
  placement = 'bottom',
  arrow = true,
  onClose,
  onOpen,
  isOpen,
  enterDelay,
  leaveDelay,
  config,
}) {
  return (
    <ThemeProvider theme={theme}>
      <Tooltip
        placement={placement}
        title={title}
        arrow={arrow}
        onClose={onClose}
        onOpen={onOpen}
        open={isOpen}
        enterDelay={enterDelay}
        leaveDelay={leaveDelay}
        {...config}
      >
        <span>{children}</span>
      </Tooltip>
    </ThemeProvider>
  );
}

TooltipMui.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node,
  placement: PropTypes.string,
  arrow: PropTypes.bool,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  isOpen: PropTypes.bool,
  enterDelay: PropTypes.number,
  leaveDelay: PropTypes.number,
};
