// const heading  = React.createElement('div', {id:'heading'}, 
//     React.createElement('h1', null, 'Hello World from Sanjeet kumar Sahu😊'),
//     React.createElement('p', null, 'This is a simple paragraph written by Sanjeet kumar Sahu in React Js')
// );


const targetElement = React.createElement('div',{id:'parent'},
    React.createElement('div',{id:'child1'},[
        React.createElement('h1',{},'Hello World from Sanjeet kumar Sahu 🚀'),
        React.createElement('p',{},'This is a simple paragraph written by Sanjeet kumar Sahu in React Js')
      ]
    ),
    React.createElement('div',{id:'child2'},
        React.createElement('p',{id:'info'}, 'I am learning React, wish me Good Luck to become a great React Developer')
    )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(targetElement);