import br from "./br.svg?react";
import us from "./us.svg?react";

const flags: {
	[key: string]: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & {
			title?: string | undefined;
		}
	>;
} = {
	br,
	us,
};

export default flags;
