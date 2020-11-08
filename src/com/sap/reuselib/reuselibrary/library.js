/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library com.sap.reuselib.reuselibrary.
 */
sap.ui.define(["sap/ui/core/library"], // library dependency
	function () {

		"use strict";

		/**
		 * Reusable Library
		 *
		 * @namespace
		 * @name com.sap.reuselib.reuselibrary
		 * @author SAP SE
		 * @version 1.0.0
		 * @public
		 */

		// delegate further initialization of this library to the Core
		sap.ui.getCore().initLibrary({
			name: "com.sap.reuselib.reuselibrary",
			version: "1.0.0",
			dependencies: ["sap.ui.core"],
			types: [],
			interfaces: [],
			controls: [
				"com.sap.reuselib.reuselibrary.controls.Example"
			],
			elements: []
		});

		/* eslint-disable */
		return com.sap.reuselib.reuselibrary;
		/* eslint-enable */

	}, /* bExport= */ false);