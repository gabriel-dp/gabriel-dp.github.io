import { useContext } from "react";

import { ConfigsContext } from "@/contexts/configs";

export const useConfigs = () => {
	const context = useContext(ConfigsContext);
	return context;
};

