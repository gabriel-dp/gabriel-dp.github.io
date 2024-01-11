import { useContext } from "react";
import { FaSun as SunIcon, FaMoon as MoonIcon } from "react-icons/fa";

import { ConfigsContext } from "@/contexts/ConfigsContext";

import { Switch } from "./styles";

export default function ThemeSwitch() {
	const { darkMode, toggleTheme } = useContext(ConfigsContext);

	return (
		<Switch>
			<input type="checkbox" id="cb" name="cb" checked={darkMode} onChange={() => {}} />
			<label htmlFor="cb" onClick={toggleTheme}>
				<div className="track"></div>
				<div className="button">{darkMode ? <MoonIcon className="icon" /> : <SunIcon className="icon" />}</div>
			</label>
		</Switch>
	);
}

