import { useState } from 'react';
import './MirrorImage.css'
function MirrorImage(){
    const [text, setText] =  useState('');
    return (
        <div className='container'>
            <h3>Mirror Image App</h3>
            <div className="row">
                <div className="col-6 mirror-image text-end">
                    {text.split('').reverse().join('')}
                </div>
                <div className="col-6">
                    <input type="text" className="form-control" 
                        placeholder="Enter Your Text Here"
                        value={text}
                        onChange={e=>setText(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default MirrorImage;