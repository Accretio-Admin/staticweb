/* eslint-disable */
let instance = null;
import _ from "lodash";

class ImgResource {
	static getInstance() {
		if (!instance) {
			instance = new ImgResource();
		}
		
		return instance;
	}

	constructor() {
		
		this.imgs = {
			center_logo: require("./images/refer/center_logo.png"),
		};

		this.string = {
			// PHP: "Philippine Wallet",
			// HKD: "Hongkong Wallet",
			// SGD: "Singapore Wallet",
			// AED: "United States Emirate Wallet",
		};
	}

	get(name) {
		return this.imgs[name];
	}

	getString(name) {
		return this.string[name];
	}
}

export default ImgResource.getInstance();
