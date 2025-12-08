import urlAei from "/qqb.gif";
import urlBgPng from "/bg.webp?url";
import urlBgSvg from "/bg.svg?url";

export function MainBg() {
	return (
		<div className="w-full h-full absolute z-0 left-0 top-0">
			<img
				alt="Bg"
				src={urlBgSvg}
				className="absolute left-0 top-0 w-full h-full object-cover "
			/>
			<img
				alt="Bg"
				src={urlBgPng}
				className="absolute bottom-0 right-0 w-full h-[calc(100%-5rem)] object-fill"
			/>
			<img
				src={urlAei}
				className="absolute left-0 top-0 w-full h-full hidden lg:block object-contain"
			/>
		</div>
	);
}
