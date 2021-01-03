import { Button } from '@material-ui/core';
import React, { useState } from 'react';

export default function TaskHistory(props) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Посмотреть историю</Button>
      {open && (
        <div>
          {props.task.history.map((item) => (
            <p className="history">{item}</p>
          ))}
          <Button color="primary" onClick={() => setOpen(false)}>
            Закрыть
          </Button>
        </div>
      )}
    </div>
  );
}
