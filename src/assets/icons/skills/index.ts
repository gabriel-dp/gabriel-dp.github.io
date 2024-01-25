// Languages
import Typescript from "./typescript.svg?react";
import Javascript from "./javascript.svg?react";
import Java from "./java.svg?react";
import Python from "./python.svg?react";
import C from "./c.svg?react";
import Cplusplus from "./Cplusplus.svg?react";
import Csharp from "./csharp.svg?react";
import Html from "./html.svg?react";
import Css from "./css.svg?react";

// Frameworks and Libraries
import React from "./react.svg?react";
import Selenium from "./selenium.svg?react";
import Threejs from "./threejs.svg?react";
import Nodejs from "./nodejs.svg?react";

// Others
import Mysql from "./mysql.svg?react";
import Mongodb from "./mongodb.svg?react";
import Git from "./git.svg?react";

const icons: {
	[key: string]: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & {
			title?: string | undefined;
		}
	>;
} = {
	Typescript,
	Javascript,
	Java,
	Python,
	C,
	Cplusplus,
	Csharp,
	Html,
	Css,
	//
	React,
	Threejs,
	Selenium,
	//
	Nodejs,
	Mysql,
	Mongodb,
	Git,
};

export default icons;
