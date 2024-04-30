import { resolve } from "path";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default () => {
	return {
		publicDir: resolve(__dirname, "public"),
		resolve: { dedupe: ["svelte"] },
		plugins:[svelte({})]
	};
};
