import React, { useState } from 'react'
import ProgressBar from './ProgressBar';
import '../index.css';

export default function UploadForm() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = [ 'image/png', 'image/jpeg'];

    const handleChange = (e) => {
        let selected = e.target.files[0]
        if(selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('gotta be (png or jpeg), buddy!');
        }
    }

    return (
        <form>
          <div className='form-title'><h4>add photo</h4></div>
          <div className='form-btn'>
            <label>
              <input type="file" onChange={handleChange} />
              <div>+</div>
            </label>
          </div>
          <div className="output">
            { error && <div className="error">{ error }</div>}
            { file && <ProgressBar file={file} setFile={setFile} /> }
          </div>
        </form>
      );
}
