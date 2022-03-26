import React from 'react';
import './Qna.css'

const Qna = () => {
    return (
        <div className='qna'>
            <h1>How React Works</h1>
            <p>React is a JavaScript-based UI development library. React converts a component writen with pure javascrips to pure html code. After that the processed data is converted and injected in index.html through react DOM, and the whole process runs without reloading browsers.
            </p>
            <h1>Difference between props and state</h1>
            <p>Props are known as properties it is used to pass data from a component to another. Props cannot be modified. These are read-only and immutable. On the other hand state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.</p>
        </div>
    );
};

export default Qna;