import { useState } from "react";

import { ImageComponent } from "./styles";

interface LazyLoadImageI {
	src: string;
	alt: string;
}

export default function LazyLoadImage(props: LazyLoadImageI) {
	const [loading, setLoading] = useState(true);

	const handleLoad = () => {
		setLoading(false);
	};

	return <ImageComponent src={props.src} alt={props.alt} onLoad={handleLoad} loading={loading.toString()} />;
}

