import React, { FunctionComponent } from 'react';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import { withStyles } from '@material-ui/core';

const styles = {
  icon: {
    height: 32,
  },
};
interface MicroIconProps {
  handleListening(): void;
  classes: any;
  isActive: boolean;
}

const MicroIcon: FunctionComponent<MicroIconProps> = ({
  classes,
  isActive,
  handleListening,
}): JSX.Element => (
  <IconButton onClick={handleListening}>
    <SvgIcon className={classes.icon} color={isActive ? 'default' : 'disabled'}>
      <g transform="translate(284 140)">
        <path d="M-260-134v4c0,5.943-4.327,10.865-10,11.82v4.18h3c0.554,0,1,0.447,1,1s-0.446,1-1,1h-10c-0.553,0-1-0.447-1-1s0.447-1,1-1   h3v-4.18c-5.672-0.955-10-5.877-10-11.82v-4h2v4c-0.045,3.602,1.853,6.951,4.966,8.764c3.11,1.814,6.959,1.814,10.071,0   c3.111-1.813,5.008-5.162,4.963-8.764v-4H-260z M-272-124c3.313,0,6-2.686,6-6v-8c0-3.313-2.688-6-6-6c-3.312,0-6,2.688-6,6v8   C-278-126.686-275.312-124-272-124z" />
      </g>
    </SvgIcon>
  </IconButton>
);

export default withStyles(styles)(MicroIcon);
