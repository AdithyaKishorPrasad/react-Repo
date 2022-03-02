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

//////////////////////// useState
// import React from 'react';
// import ReactDom from 'react-dom';

// function TestState() {
//   const [colour, setColour] = React.useState('red');
//   const [bike, setBike] = React.useState({
//     year: 1999,
//     name: 'KTM',
//     color: 'orange',
//     model: 'RC 400',
//   });

//   const updateColor = () => {
//     setBike((previousState) => {
//       return { ...previousState, color: 'pink' };
//     });
//   };

//   return (
//     <>
//       <h1>
//         Bike name is {bike.name} and model {bike.model} and color is{' '}
//         {bike.color}
//       </h1>
//       <h1>Colour is : {colour}! </h1>
//       <div class="col">
//         {/* <button type="button" onClick={() => setColour('blue')}> */}
//         <button type="button" onClick={updateColor}>
//           Blue
//         </button>
//       </div>
//     </>
//   );
// }
// export default TestState;


