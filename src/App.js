// import React from 'react';

// const LAUNCHES_QUERY = `
// {
//   launchesPast(limit: 10) {
//     id
//     mission_name
//   }
// }
// `;

// function App() {
//   const launches = useLaunches();

//   return (
//     <div className="App">
//       <h1> SpaceX Launches </h1>

//       <ul>
//         {/* {JSON.stringify(launches, null, 2)} */}

//         {launches.map((launch) => (
//           <li key={launch.id}>{launch.mission_name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function useLaunches() {
//   const [launches, setLaunches] = React.useState([]);

//   React.useEffect(() => {
//     fetch('https://api.spacex.land/graphql/', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ query: LAUNCHES_QUERY }),
//     })
//       .then((response) => response.json())
//       .then((data) => setLaunches(data.data.launchesPast));
//   }, []);

//   return launches;
// }

// export default App;

// import React from 'react';
// import ReactDom from 'react-dom';

// function TestState() {
//   const [colour, setColour] = React.useState('red');
//   return (
//     <>
//       <h1>Colour is : {colour}! </h1>
//       <div class="col">
//         <button type="button" onClick={() => setColour('blue')}>
//           Blue
//         </button>
//       </div>
//     </>
//   );
// }

// export default TestState;
// ReactDom.render(<TestState />,document.getElementById('root'));

// import React from 'react';

// class StateIncrement extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       name: '',
//     };
//   }
//   render() {
//     return (
//       <>
//         <p>Name is {this.state.name}</p>
//         <p>Button Pressed {this.state.count} times</p>
//         <div>
//           <button
//             type="button"
//             onClick={() =>
//               this.setState({ count: this.state.count + 1, name: 'Time' })
//             }
//           >
//             Click Me!
//           </button>
//         </div>
//       </>
//     );
//   }
// }

// export default StateIncrement;

// import React from 'react';
// import { useState, useEffect } from 'react';

// function CounterTitleUpdate() {
//   useEffect(() => {
//     if (count % 2 == 0) {
//       document.body.style.backgroundColor = 'red';
//     } else {
//       document.body.style.backgroundColor = 'blue';
//     }
//   });

//   const [count, Incrementstate] = useState(0);
//   return (
//     <>
//       <p>Counter {count}</p>
//       <div>
//         <button type="button" onClick={() => Incrementstate(count + 1)}>
//           Click{' '}
//         </button>
//       </div>
//     </>
//   );
// }

// export default CounterTitleUpdate;

import React from 'react';
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.LikeAction = this.LikeAction.bind(this);
  }
  componentDidUpdate() {
    // this.likeAction();
    document.body.style.backgroundColor = 'orange';
    this.setState({ count: this.state.count + 1 });
  }
  LikeAction() {
    document.body.style.color = 'green';
  }
  render() {
    return (
      <>
        <div className="like" onClick={() => this.LikeAction()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#FF0000"
          >
            <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
            <path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z" />
          </svg>
        </div>
        <p>Like Count: {this.state.count}</p>
      </>
    );
  }
}
export default LikeButton;
