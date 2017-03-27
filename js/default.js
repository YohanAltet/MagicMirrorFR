/* exported defaults */

/* Magic Mirror
 * Config Defauls
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var defaults = {
	port: 8080,
	kioskmode: false,
	electronOptions: {},
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],

	language: "en",
	timeFormat: 24,
	units: "metric",
	zoom: 1,

	modules: [
		{
			module: "updatenotification",
			position: "top_center"
		},
		{
			module: "helloworld",
			position: "upper_third",
			classes: "large thin",
			config: {
				text: "Magic Mirror<sup>2</sup>"
			}
		},
		{
			module: "helloworld",
			position: "middle_center",
			config: {
				text: "Veuillez créer un fichier de configuration config.js."
			}
		},
		{
			module: "helloworld",
			position: "middle_center",
			classes: "small dimmed",
			config: {
				text: "Veuillez lire le README pour plus d'informations."
			}
		},
		{
			module: "helloworld",
			position: "middle_center",
			classes: "xsmall",
			config: {
				text: "Si vous lisez ce message alors que vous avez créé un<br>fichier de configuration, ce fichier contient probablement une erreur.<br>Utilisez un débogueur JavaScript pour valider votre fichier."
			}
		},
		{
			module: "helloworld",
			position: "bottom_bar",
			classes: "xsmall dimmed",
			config: {
				text: "www.michaelteeuw.nl"
			}
		},
	],

	paths: {
		modules: "modules",
		vendor: "vendor"
	},
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = defaults;}
