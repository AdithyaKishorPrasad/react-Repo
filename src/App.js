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
//     };
//   }
//   render() {
//     return (
//       <>
//         <p>Button Pressed {this.state.count} times</p>
//         <div>
//           <button
//             type="button"
//             onClick={() => this.setState({ count: this.state.count + 1 })}
//           >
//             Click Me!
//           </button>
//         </div>
//       </>
//     );
//   }
// }

// export default StateIncrement;


