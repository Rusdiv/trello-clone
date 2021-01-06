import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import ColorPicker from '../ColorPicker';

export default function Menu() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div role="presentation">
      <ColorPicker button={true} />
    </div>
  );

  return (
    <div>
      {
        <React.Fragment key={'right'}>
          <div className='menu__button'>
            <Button
              variant="contained"
              color="primary"
              onClick={toggleDrawer('right', true)}
            >
              Меню
            </Button>
          </div>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
        </React.Fragment>
      }
    </div>
  );
}
