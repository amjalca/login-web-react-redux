import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import routes from './routes';

export default ({ server, location, context }) => {
  const routesMap = routes.map((route, i) => <Route key={i} {...route} />);
	let router = (
		<BrowserRouter>
			<Switch>
				{routesMap}
			</Switch>
		</BrowserRouter>
	);
	 return (
    <div>
      {router}
    </div>
  );
};

