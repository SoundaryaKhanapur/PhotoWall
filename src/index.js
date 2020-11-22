import React from 'react';
import ReactDOM from 'react-dom';

const tasks = ['work','exercise','sleep'];

const element = <ol>
    { tasks.map((task, index) => <li key = {index}>{task}</li>)}   
</ol>

ReactDOM.render(element, document.getElementById('root'));