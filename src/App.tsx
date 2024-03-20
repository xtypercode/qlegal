import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AllRoutes } from "./routes/index";
import Layout from "./layouts";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{AllRoutes.map((route) => (
					<Route
						key={route.path}
						path={route.path}
						element={
							<Layout
								element={route.element}
								label={route.label}
								type={route.type}
								path={route.path}
							/>
						}
						loader={() => <>Loading...</>}
					/>
				))}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
