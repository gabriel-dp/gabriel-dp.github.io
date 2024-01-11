import { useContext } from "react";
import { MdSunny, MdNightlight } from "react-icons/md";

import { ConfigsContext } from "@/contexts/ConfigsContext";

import { Switch } from "./styles";

export default function ThemeSwitch() {
	const { darkMode, toggleTheme } = useContext(ConfigsContext);

	return (
		<Switch>
			<input type="checkbox" id="cb" name="cb" checked={darkMode} onChange={() => {}} />
			<label htmlFor="cb" onClick={toggleTheme}>
				<div className="track"></div>
				<div className="button">{darkMode ? <MdNightlight className="icon" /> : <MdSunny className="icon" />}</div>
			</label>
		</Switch>
	);
}

