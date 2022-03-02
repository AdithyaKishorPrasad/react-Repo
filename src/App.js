import React from 'react';

const LAUNCHES_QUERY = `
{
  launchesPast(limit: 10) {
    id 
    mission_name 
  }
}
`;

function App() {
  const launches = useLaunches();

  return (
    <div className="App">
      <h1> SpaceX Launches </h1>

      <ul>
        {/* {JSON.stringify(launches, null, 2)} */}

        {launches.map((launch) => (
          <li key={launch.id}>{launch.mission_name}</li>
        ))}
      </ul>
    </div>
  );
}

function useLaunches() {
  const [launches, setLaunches] = React.useState([]);

  React.useEffect(() => {
    fetch('https://api.spacex.land/graphql/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: LAUNCHES_QUERY }),
    })
      .then((response) => response.json())
      .then((data) => setLaunches(data.data.launchesPast));
  }, []);

  return launches;
}

export default App;
