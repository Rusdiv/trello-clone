import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';

export default function AddUrl(props) {
  const handleChange = (e) => {
    props.setUrlValue(e.target.value);
  };
  return (
    <DialogContent>
      Добавить ссылку
      <TextField
        onChange={handleChange}
        value={props.urlValue}
        autoFocus
        margin="dense"
        label="URL"
        fullWidth
      />
      {props.urls && (
        <div>
          <p>Прикрепленные ссылки:</p>
          {props.urls.map((url, index) => (
            <div>
              <a key={index} href={url}>
                {url}
              </a>
            </div>
          ))}
        </div>
      )}
    </DialogContent>
  );
}
