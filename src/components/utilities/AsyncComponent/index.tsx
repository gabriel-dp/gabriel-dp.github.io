import { FetchStatus } from "@/hooks/useFetchData";

import { Loading } from "./styles";

interface AsyncComponentI {
	status: FetchStatus;
	children: React.ReactNode;
}

export default function AsyncComponent(props: AsyncComponentI) {
	switch (props.status) {
		case FetchStatus.Loading:
			return <Loading />;
		case FetchStatus.Success:
			return <>{props.children}</>;
		case FetchStatus.Error:
			return <>ERROR</>;
		default:
			return null;
	}
}

