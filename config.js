module.exports = {
	steal: {
		buildConfig: {
			config: "package.json!npm"
		},
		buildOptions: {
			bundleSteal: true,
			quiet: false,
			minify: false,
			debug: true,
			removeDevelopmentCode: true
		}
	}
};