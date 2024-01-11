import { FaSun as SunIcon, FaMoon as MoonIcon } from "react-icons/fa";

import { useConfigs } from "@/contexts/configs/useConfigs";

import { Switch } from "./styles";

export default function ThemeSwitch() {
	const { darkMode, toggleTheme } = useConfigs();

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

