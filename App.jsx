import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePages from "./src/pages/Home";
import Counter from "./src/pages/Counter";
import Todo from "./src/pages/Todo";
import WeatherApp from "./src/pages/Weather";
import Profile from "./src/pages/Profile";
import Products from "./src/pages/Products";
import Comment from "./src/pages/Comments";
import Buttons from "./src/pages/Buttons";
import Navigation from "./src/components/Navigation";

function App() {
	return (
		<Router>
			<Routes>
				<Route element={<Navigation />}>
					<Route path="/" element={<HomePages />} />
					<Route path="/counter" element={<Counter />} />
					<Route path="/todo" element={<Todo />} />
					<Route path="/weather" element={<WeatherApp />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/products" element={<Products />} />
					<Route path="/comments" element={<Comment />} />
					<Route path="/buttons" element={<Buttons />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
