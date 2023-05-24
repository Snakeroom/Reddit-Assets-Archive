// https://www.redditstatic.com/desktop2x/vendors~mod-nav~shreddit-player.930efaad11445a6ef568.js
// Retrieved at 5/24/2023, 2:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~mod-nav~shreddit-player"], {
		"./node_modules/@lit/localize/lit-localize.js": function(n, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return e
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "a", (function() {
				return u
			}));
			const e = (n, ...t) => ({
					strTag: !0,
					strings: n,
					values: t
				}),
				o = (n, t, r) => {
					let e = n[0];
					for (let o = 1; o < n.length; o++) e += t[r ? r[o - 1] : o - 1], e += n[o];
					return e
				},
				a = n => (n => "string" != typeof n && "strTag" in n)(n) ? o(n.strings, n.values) : n;
			class i {
				constructor() {
					this.settled = !1, this.promise = new Promise((n, t) => {
						this._resolve = n, this._reject = t
					})
				}
				resolve(n) {
					this.settled = !0, this._resolve(n)
				}
				reject(n) {
					this.settled = !0, this._reject(n)
				}
			}
			const l = [];
			for (let b = 0; b < 256; b++) l[b] = (b >> 4 & 15).toString(16) + (15 & b).toString(16);
			new WeakMap, new Map;
			let c = new i;
			c.resolve();
			let d = a,
				s = !1;

			function u(n) {
				if (s) throw new Error("lit-localize can only be configured once");
				d = n, s = !0
			}
		},
		"./node_modules/@reddit/baseplate/lib/device/getDeviceTierForYearClass.js": function(n, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			const e = "high",
				o = new Map([
					[2011, "low"],
					[2012, "moderately_low"],
					[2014, "medium"],
					[2016, "moderately_high"]
				]);

			function a(n) {
				for (const [t, r] of o)
					if (n <= t) return r;
				return e
			}
		},
		"./node_modules/@reddit/faceplate-ui/lib/IconSize.js": function(n, t, r) {
			"use strict";
			var e;
			r.d(t, "a", (function() {
					return e
				})),
				function(n) {
					n.ExtraSmall = "xs", n.Small = "sm", n.Medium = "md", n.Large = "lg", n.ExtraLarge = "xl", n.XXLarge = "2xl"
				}(e || (e = {}))
		},
		"./node_modules/@reddit/faceplate/lib/custom-event.js": function(n, t, r) {
			"use strict";

			function e(n, t, r = !0) {
				return new CustomEvent(n, {
					composed: !0,
					bubbles: r,
					cancelable: !0,
					detail: t
				})
			}
			r.d(t, "a", (function() {
				return e
			}))
		},
		"./node_modules/@reddit/faceplate/lib/device.js": function(n, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			const e = [{
				dpi: 3,
				height: 926,
				width: 428,
				version: "iphone 12 Pro Max",
				yearClass: 2020
			}, {
				dpi: 3,
				height: 896,
				width: 414,
				version: "iphone 11 Pro Max",
				yearClass: 2019
			}, {
				dpi: 3,
				height: 844,
				width: 390,
				version: "iphone 12",
				yearClass: 2020
			}, {
				dpi: 3,
				height: 812,
				width: 375,
				version: "iphone 7",
				yearClass: 2016
			}, {
				dpi: 3,
				height: 736,
				width: 414,
				version: "iphone 8 Plus",
				yearClass: 2017
			}, {
				dpi: 2,
				height: 896,
				width: 414,
				version: "iphone 11",
				yearClass: 2019
			}, {
				dpi: 2,
				height: 667,
				width: 375,
				version: "iphone SE 2nd Gen",
				yearClass: 2020
			}, {
				dpi: 2,
				height: 568,
				width: 320,
				version: "iphone 5S",
				yearClass: 2013
			}, {
				dpi: 2,
				height: 480,
				width: 320,
				version: "iphone 4S",
				yearClass: 2011
			}];

			function o() {
				const n = function(n) {
					if (!window.screen || !window.devicePixelRatio) return;
					const {
						height: t,
						width: r
					} = window.screen, e = window.devicePixelRatio;
					return r && t && e ? n.find(n => e === n.dpi && t === n.height && r === n.width) : void 0
				}(e);
				if (n) return {
					deviceName: n.version.toLowerCase().replace(" ", "-"),
					yearClass: n.yearClass
				}
			}
		},
		"./node_modules/@reddit/shreddit.styles/dist/index.js": function(n, t, r) {
			"use strict";
			var e = r("./node_modules/lit/index.js");
			e.b;
			const o = function(n) {
				const t = [n];
				return t.raw = t, Object(e.b)(t)
			}(r("./node_modules/@reddit/shreddit.styles/dist/tailwind-build.css").a);
			t.a = o
		},
		"./node_modules/@reddit/shreddit.styles/dist/tailwind-build.css": function(n, t, r) {
			"use strict";
			var e = r("./node_modules/css-loader/dist/runtime/api.js"),
				o = r.n(e)()(!1);
			o.push([n.i, "faceplate-expandable-section-helper {\n  display: contents;\n  /* [rpl] just to boost the selector */\n  /*\n  Target the [open] attribute on either the root element OR the details\n  element to rotate the chevron. This is to handle rotating chevrons both\n  before and after the faceplate-expandable-section-helper component is defined.\n  \n  Before the component is defined, the [open] attribute on the component will not\n  toggle if the user clicks on details, but the [open] attribute will toggle on\n  the details element, so we need to target details too.\n\n  The reason we can't target only the details element is because once the web\n  component is defined, we delay toggling the [open] attribute on the details\n  element until AFTER the animation finishes. So if we only targeted the details\n  element for the chevron rotation the chevron wouldn't rotate until after the\n  collapse animation finished and we finally toggle the [open] attriubte on the\n  details element.\n  */\n  /*\n    Specific handling for nested menus. We only need to handle collapse menus inside of\n    expanded menus, not expanded menus inside collapsed menus because you can't see those!\n  */\n}\nfaceplate-expandable-section-helper > details > summary {\n  list-style-type: none;\n}\nfaceplate-expandable-section-helper[rpl] > details > summary {\n  /* override details.less */\n  margin: 0;\n}\nfaceplate-expandable-section-helper > details > summary [icon-name='caret-down-outline'] {\n  transition: transform 0.22s ease-in-out;\n}\nfaceplate-expandable-section-helper[open] summary [icon-name='caret-down-outline'],\nfaceplate-expandable-section-helper:not(:defined) > details[open] summary [icon-name='caret-down-outline'] {\n  transform: rotate(180deg);\n}\nfaceplate-expandable-section-helper:not([open]) summary [icon-name='caret-down-outline'],\nfaceplate-expandable-section-helper:not(:defined) > details:not([open]) summary [icon-name='caret-down-outline'] {\n  transform: rotate(0deg);\n}\n/*\n * This is a Tailwind CSS file, it must be run through the PostCSS compiler\n * with the Tailwind plugin, not Less. The `postcss-import` plugin is also\n * needed, if you have other additions to your Tailwind entry point CSS.\n *\n * @example\n * // tailwind.css\n * @import '@reddit/faceplate/styles/tailwind-components.css'\n * @tailwind components;\n * @tailwind utilities;\n *\n * // styles.less\n * @import (less) '@reddit/faceplate/faceplate.css';\n * @import (less) './tailwind-build.css';\n */\n.-translate-y-1\\/2, .-translate-x-1\\/2, .translate-x-0, .translate-y-md, .rotate-90, .scale-75, .scale-150, .scale-100, .-scale-x-100, .transform {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n}\n.ordinal {\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n}\n.shadow-none, .shadow-sm, .shadow-md {\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n}\n.ring {\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n}\n.container {\n  width: 100%;\n}\n.\\!container {\n  width: 100% !important;\n}\n@media (min-width: 1024px) {\n  .container {\n    max-width: 1024px;\n  }\n  .\\!container {\n    max-width: 1024px !important;\n  }\n}\n/* Anchor component*/\n.a {\n    border: var(--line-a-focus) solid transparent;\n    border-radius: 2px;\n    color: var(--color-a-default);\n    font-size: 1em;\n    padding: 0 var(--spacer-a-px);\n    margin: calc(-1 * var(--line-a-focus)) calc(-1 * (var(--spacer-a-px) + var(--line-a-focus)));\n    text-decoration: none;\n  }\n.\\!a {\n    border: var(--line-a-focus) solid transparent !important;\n    border-radius: 2px !important;\n    color: var(--color-a-default) !important;\n    font-size: 1em !important;\n    padding: 0 var(--spacer-a-px) !important;\n    margin: calc(-1 * var(--line-a-focus)) calc(-1 * (var(--spacer-a-px) + var(--line-a-focus))) !important;\n    text-decoration: none !important;\n  }\n.a:hover {\n    color: var(--color-a-hover);\n  }\n.\\!a:hover {\n    color: var(--color-a-hover) !important;\n  }\n.a:visited:not(.no-visited),\n  .a.visited:not(.no-visited) {\n    color: var(--color-a-visited);\n  }\n.\\!a:visited:not(.no-visited),\n  .\\!a.visited:not(.no-visited) {\n    color: var(--color-a-visited) !important;\n  }\n/* Button component */\n.button {\n    background: var(--button-color-background);\n    border-radius: 999px;\n    border: none;\n    border: var(--button-border-width, 0) solid var(--button-border-color, transparent);\n    box-shadow: var(--button-shadow);\n    box-sizing: border-box;\n    color: var(--button-color-text);\n    cursor: pointer;\n    display: inline-block;\n    font: var(--button-font);\n    height: var(--button-height);\n    line-height: calc(var(--button-height) - (2 * var(--button-border-width, 0px)));\n    overflow: hidden;\n    padding: 0 calc(var(--button-padding) - var(--button-border-width, 0px));\n    text-align: center;\n    text-decoration: none;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    --button-border-color: var(--button-border-color-default);\n    --button-border-width: var(--button-border-width-default);\n    --button-color-background: var(--button-color-background-default);\n    --button-color-text: var(--button-color-text-default);\n    /* This is :active, AKA Pressed */\n    /* This is Selected */\n  }\n.\\!button {\n    background: var(--button-color-background) !important;\n    border-radius: 999px !important;\n    border: none !important;\n    border: var(--button-border-width, 0) solid var(--button-border-color, transparent) !important;\n    box-shadow: var(--button-shadow) !important;\n    box-sizing: border-box !important;\n    color: var(--button-color-text) !important;\n    cursor: pointer !important;\n    display: inline-block !important;\n    font: var(--button-font) !important;\n    height: var(--button-height) !important;\n    line-height: calc(var(--button-height) - (2 * var(--button-border-width, 0px))) !important;\n    overflow: hidden !important;\n    padding: 0 calc(var(--button-padding) - var(--button-border-width, 0px)) !important;\n    text-align: center !important;\n    text-decoration: none !important;\n    text-overflow: ellipsis !important;\n    white-space: nowrap !important;\n    --button-border-color: var(--button-border-color-default) !important;\n    --button-border-width: var(--button-border-width-default) !important;\n    --button-color-background: var(--button-color-background-default) !important;\n    --button-color-text: var(--button-color-text-default) !important;\n    /* This is :active, AKA Pressed */\n    /* This is Selected */\n  }\n.button .button-icon {\n    margin-right: var(--spacer-xs);\n  }\n.\\!button .button-icon {\n    margin-right: var(--spacer-xs) !important;\n  }\n.button .dropdown-icon {\n    transform: rotate(0deg);\n    transition: transform 0.2s ease-in-out;\n  }\n.\\!button .dropdown-icon {\n    transform: rotate(0deg) !important;\n    transition: transform 0.2s ease-in-out !important;\n  }\n.button:focus,\n  .button:hover,\n  .button.hover {\n    --button-color-overlay: var(--color-button-overlay-focus);\n  }\n.\\!button:focus,\n  .\\!button:hover,\n  .\\!button.hover {\n    --button-color-overlay: var(--color-button-overlay-focus) !important;\n  }\n.button:hover,\n  .button.hover {\n    --button-border-color: var(--button-border-color-hover);\n    --button-color-background: var(--button-color-background-hover);\n  }\n.\\!button:hover,\n  .\\!button.hover {\n    --button-border-color: var(--button-border-color-hover) !important;\n    --button-color-background: var(--button-color-background-hover) !important;\n  }\n.button:active,\n  .button.active {\n    --button-color-overlay: var(--color-button-overlay-active);\n    --button-color-background: linear-gradient(var(--color-interactive-pressed), var(--color-interactive-pressed)),\n      var(--button-color-background-active);\n  }\n.\\!button:active,\n  .\\!button.active {\n    --button-color-overlay: var(--color-button-overlay-active) !important;\n    --button-color-background: linear-gradient(var(--color-interactive-pressed), var(--color-interactive-pressed)),\n      var(--button-color-background-active) !important;\n  }\n.button:active,\n  .button.\\!active {\n    --button-color-overlay: var(--color-button-overlay-active) !important;\n    --button-color-background: linear-gradient(var(--color-interactive-pressed), var(--color-interactive-pressed)),\n      var(--button-color-background-active) !important;\n  }\n.button:disabled {\n    --button-color-background: var(--button-color-background-disabled);\n    --button-color-text: var(--button-color-text-disabled);\n    cursor: not-allowed;\n  }\n.\\!button:disabled {\n    --button-color-background: var(--button-color-background-disabled) !important;\n    --button-color-text: var(--button-color-text-disabled) !important;\n    cursor: not-allowed !important;\n  }\n.button.button-activated {\n    --button-border-width: 0;\n    --button-border-color: var(--button-border-color-activated);\n    --button-color-background: var(--button-color-background-activated);\n    --button-color-text: var(--button-color-text-activated);\n  }\n.\\!button.button-activated {\n    --button-border-width: 0 !important;\n    --button-border-color: var(--button-border-color-activated) !important;\n    --button-color-background: var(--button-color-background-activated) !important;\n    --button-color-text: var(--button-color-text-activated) !important;\n  }\n.button-shell {\n    background: var(--button-color-background);\n    border-radius: 999px;\n    border: none;\n    border: var(--button-border-width, 0) solid var(--button-border-color, transparent);\n    box-shadow: var(--button-shadow);\n    box-sizing: border-box;\n    color: var(--button-color-text);\n    cursor: pointer;\n    display: inline-block;\n    font: var(--button-font);\n    height: var(--button-height);\n    line-height: calc(var(--button-height) - (2 * var(--button-border-width, 0px)));\n    overflow: hidden;\n    padding: 0 calc(var(--button-padding) - var(--button-border-width, 0px));\n    text-align: center;\n    text-decoration: none;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    --button-border-color: var(--button-border-color-default);\n    --button-border-width: var(--button-border-width-default);\n    --button-color-background: var(--button-color-background-default);\n    --button-color-text: var(--button-color-text-default);\n  }\n.button-large {\n    --button-height: var(--size-button-lg-h);\n    --button-padding: var(--spacer-xs);\n    --button-font: var(--font-button-lg);\n    --button-border-width-default: var(--line-button-lg-border);\n  }\n.button-large.icon {\n    padding: calc(var(--rem12) + var(--rem1));\n  }\n.button-large.\\!icon {\n    padding: calc(var(--rem12) + var(--rem1)) !important;\n  }\n.button-medium {\n    --button-height: var(--size-button-md-h);\n    --button-padding: var(--spacer-xs);\n    --button-font: var(--font-button-md);\n    --button-border-width-default: var(--line-button-md-border);\n  }\n.button-medium.icon {\n    padding: calc(var(--rem8) + var(--rem1));\n  }\n.button-medium.\\!icon {\n    padding: calc(var(--rem8) + var(--rem1)) !important;\n  }\n.button-small {\n    --button-height: var(--size-button-sm-h);\n    --button-padding: var(--spacer-2xs);\n    --button-font: var(--font-button-sm);\n    --button-border-width-default: var(--line-button-sm-border);\n  }\n.button-small.icon {\n    padding: calc(var(--rem6) + var(--rem1));\n  }\n.button-small.\\!icon {\n    padding: calc(var(--rem6) + var(--rem1)) !important;\n  }\n.button-x-small {\n    --button-height: var(--size-button-xs-h);\n    --button-padding: var(--spacer-sm);\n    --button-font: var(--font-button-xs);\n    --button-border-width-default: var(--line-button-xs-border);\n  }\n.button-icon {\n    --button-padding: 0;\n    width: var(--button-height);\n  }\n.button-primary {\n    --button-color-background-default: var(--color-primary-background);\n    --button-color-background-focus: var(--color-primary-background);\n    --button-color-background-hover: var(--color-button-primary-background-hover);\n    --button-color-background-active: linear-gradient(var(--color-button-primary-background-hover), var(--color-button-primary-background-hover));\n    --button-color-background-disabled: var(--color-button-primary-background-disabled);\n    --button-color-background-activated: var(--color-button-primary-background-activated);\n    --button-color-text-default: var(--color-global-white);\n    --button-color-text-disabled: var(--color-button-primary-text-disabled);\n    --button-color-text-activated: var(--color-button-primary-text-activated);\n    --button-border-color-default: transparent;\n  }\n.button-secondary {\n    --button-color-background-default: var(--color-button-secondary-background);\n    --button-color-background-focus: var(--color-button-secondary-background-focus);\n    --button-color-background-hover: var(--color-button-secondary-background-hover);\n    --button-color-background-active: linear-gradient(var(--color-button-secondary-background-hover), var(--color-button-secondary-background-hover));\n    --button-color-background-disabled: var(--color-button-secondary-background-disabled);\n    --button-color-background-activated: var(--color-button-secondary-background-activated);\n    --button-color-text-default: var(--color-button-secondary-text);\n    --button-color-text-disabled: var(--color-button-secondary-text-disabled);\n    --button-color-text-activated: var(--color-button-secondary-text-activated);\n    --button-border-color-default: var(--color-button-secondary-border);\n  }\n.button-tertiary {\n    --button-color-background-default: var(--color-button-tertiary-background);\n    --button-color-background-focus: var(--color-button-tertiary-background-focus);\n    --button-color-background-hover: var(--color-button-tertiary-background-hover);\n    --button-color-background-disabled: var(--color-button-tertiary-background-disabled);\n    --button-color-background-activated: var(--color-button-tertiary-background-activated);\n    --button-color-text-default: var(--color-button-tertiary-text);\n    --button-color-text-disabled: var(--color-button-tertiary-text-disabled);\n    --button-color-text-activated: var(--color-button-tertiary-text-activated);\n    --button-border-color-default: transparent;\n  }\n.button-plain {\n    --button-color-background-default: transparent;\n    --button-color-background-focus: transparent;\n    --button-color-background-hover: var(--color-button-plain-background-hover);\n    --button-color-background-disabled: var(--color-button-plain-background-disabled);\n    --button-color-background-activated: var(--color-button-plain-background-activated);\n    --button-color-background-active: linear-gradient(var(--color-button-secondary-background-hover), var(--color-button-secondary-background-hover));\n    --button-color-text-default: var(--color-button-plain-text);\n    --button-color-text-disabled: var(--color-button-plain-text-disabled);\n    --button-color-text-activated: var(--color-button-plain-text-activated);\n    --button-border-color-default: transparent;\n  }\n.button-bordered {\n    --button-color-background-default: transparent;\n    --button-color-background-focus: transparent;\n    --button-color-background-hover: transparent;\n    --button-color-background-active: linear-gradient(transparent, transparent);\n    --button-color-background-disabled: transparent;\n    --button-color-background-activated: var(--color-button-secondary-background-activated);\n    --button-color-text-default: var(--color-neutral-content);\n    --button-color-text-disabled: var(--color-neutral-content-disabled);\n    --button-color-text-activated: var(--color-neutral-content-strong);\n    --button-border-color-default: var(--color-neutral-border-medium);\n    --button-border-color-hover: var(--color-neutral-border-strong);\n    --button-border-color-active: var(--color-neutral-border-strong);\n    --button-border-color-activated: var(--color-neutral-border-strong);\n    --button-border-color-disabled: var(--color-neutral-content-disabled);\n    --button-border-width-default: var(--line-sm);\n    --button-border-width-activated: var(--line-sm);\n  }\n.button-destructive {\n    --button-color-background-default: var(--color-danger-background);\n    --button-color-background-focus: var(--color-danger-background-hover);\n    --button-color-background-hover: var(--color-danger-background-hover);\n    --button-color-background-active: linear-gradient(var(--color-danger-background-hover), var(--color-danger-background-hover));\n    --button-color-background-disabled: var(--color-button-secondary-background-disabled);\n    --button-color-text-default: var(--color-danger-content-default);\n    --button-color-text-disabled: var(--color-button-secondary-text-disabled);\n    --button-border-color-default: transparent;\n    --button-border-color-hover: transparent;\n    --button-border-color-active: transparent;\n  }\n.button-media {\n    --button-color-background-default: var(--color-media-background);\n    --button-color-background-focus: var(--color-media-background-hover);\n    --button-color-background-hover: var(--color-media-background-hover);\n    --button-color-background-active: linear-gradient(var(--color-media-background-hover), var(--color-media-background-hover));\n    --button-border-color-activated: var(--color-neutral-content-strong);\n    --button-color-text-default: white;\n    --button-color-text-disabled: var(--color-media-onbackground-disabled);\n    --button-color-background-disabled: var(--color-media-background);\n  }\n.button-brand {\n    --button-color-background-default: var(--color-brand-background);\n    --button-color-background-hover: var(--color-brand-background-hover);\n    --button-color-background-active: linear-gradient(var(--color-brand-background-hover), var(--color-brand-background-hover));\n    --button-color-background-disabled: var(--color-interactive-background-disabled);\n    --button-color-text-default: var(--color-danger-content-default);\n    --button-color-text-disabled: var(--color-neutral-content-disabled);\n    --button-border-color-default: transparent;\n  }\n.button-success {\n    --button-color-background-default: var(--color-success-background);\n    --button-color-background-focus: var(--color-success-background-hover);\n    --button-color-background-hover: var(--color-success-background-hover);\n    --button-color-background-active: linear-gradient(var(--color-success-background-hover), var(--color-success-background-hover));\n    --button-color-background-disabled: var(--color-button-primary-background-disabled);\n    --button-color-text-default: var(--color-success-onBackground);\n    --button-color-text-disabled: var(--color-button-primary-text-disabled);\n    --button-border-color-default: transparent;\n  }\n.button-plain-inverted {\n    --button-color-background-default: transparent;\n    --button-color-background-focus: var(--color-neutral-content);\n    --button-color-background-hover: var(--color-neutral-content);\n    --button-color-background-active: var(--color-interactive-pressed);\n    --button-color-background-disabled: transparent;\n    --button-color-text-default: var(--color-neutral-background-weak);\n    --button-color-text-disabled: var(--color-neutral-content);\n    --button-border-color-default: transparent;\n    --button-color-background-activated: var(--color-button-plain-inverted-background-activated);\n    --button-color-text-activated: var(--color-button-plain-inverted-text-activated);\n  }\n/* Featured avatar */\n.full-snoo-xs {\n    --full-snoo-xs-size: var(--rem48);\n    height: var(--full-snoo-xs-size);\n    width: var(--full-snoo-xs-size);\n    margin-top: 0.125rem;\n  }\n.full-snoo-xs > img {\n    width: var(--rem36);\n    bottom: calc(-1 * 0.1875rem);\n  }\n.full-snoo-sm {\n    --full-snoo-sm-size: var(--rem64);\n    height: var(--full-snoo-sm-size);\n    width: var(--full-snoo-sm-size);\n    margin-top: 0.125rem;\n  }\n.full-snoo-sm > img {\n    width: var(--rem48);\n    bottom: calc(-1 * var(--rem4));\n  }\n.full-snoo-md {\n    --full-snoo-md-size: var(--rem88);\n    height: var(--full-snoo-md-size);\n    width: var(--full-snoo-md-size);\n    margin-top: var(--spacer-2xs);\n  }\n.full-snoo-md > img {\n    width: var(--rem64);\n    bottom: calc(-1 * var(--rem6));\n  }\n.full-snoo-lg {\n    --full-snoo-lg-size: var(--rem144);\n    height: var(--full-snoo-lg-size);\n    width: var(--full-snoo-lg-size);\n    margin-top: 0.375rem;\n  }\n.full-snoo-lg > img {\n    width: 6.625rem;\n    bottom: calc(-1 * var(--rem10));\n  }\n.full-snoo-xl {\n    --full-snoo-xl-size: var(--rem192);\n    height: var(--full-snoo-xl-size);\n    width: var(--full-snoo-xl-size);\n    margin-top: var(--spacer-xs);\n  }\n.full-snoo-xl > img {\n    width: 8.8125rem;\n    bottom: calc(-1 * var(--rem14));\n  }\n.full-snoo-2xl {\n    --full-snoo-2xl-size: var(--rem320);\n    height: var(--full-snoo-2xl-size);\n    width: var(--full-snoo-2xl-size);\n    margin-top: var(--spacer-sm);\n  }\n.full-snoo-2xl > img {\n    width: 14.75rem;\n    bottom: calc(-1 * var(--rem22));\n  }\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n.pointer-events-none {\n  pointer-events: none;\n}\n.pointer-events-auto {\n  pointer-events: auto;\n}\n.visible {\n  visibility: visible;\n}\n.\\!visible {\n  visibility: visible !important;\n}\n.invisible {\n  visibility: hidden;\n}\n.static {\n  position: static;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.sticky {\n  position: sticky;\n}\n.\\!sticky {\n  position: sticky !important;\n}\n.inset-0 {\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.top-0 {\n  top: 0px;\n}\n.left-0 {\n  left: 0px;\n}\n.right-0 {\n  right: 0px;\n}\n.top-\\[128px\\] {\n  top: 128px;\n}\n.top-\\[30px\\] {\n  top: 30px;\n}\n.bottom-0 {\n  bottom: 0px;\n}\n.top-1\\/2 {\n  top: 50%;\n}\n.bottom-2xl {\n  bottom: 3rem;\n}\n.left-1\\/2 {\n  left: 50%;\n}\n.left-xs {\n  left: 0.5rem;\n}\n.top-2xs {\n  top: 0.25rem;\n}\n.right-2xs {\n  right: 0.25rem;\n}\n.right-xs {\n  right: 0.5rem;\n}\n.right-sm {\n  right: 0.75rem;\n}\n.top-sm {\n  top: 0.75rem;\n}\n.left-md {\n  left: 1rem;\n}\n.top-md {\n  top: 1rem;\n}\n.top-100 {\n  top: 100%;\n}\n.left-lg {\n  left: 1.5rem;\n}\n.top-3xl {\n  top: 4rem;\n}\n.-right-\\[0\\.0625rem\\] {\n  right: -0.0625rem;\n}\n.-right-\\[0\\.0825rem\\] {\n  right: -0.0825rem;\n}\n.-right-\\[0\\.125rem\\] {\n  right: -0.125rem;\n}\n.-right-\\[\\.65rem\\] {\n  right: -.65rem;\n}\n.-right-\\[\\.75rem\\] {\n  right: -.75rem;\n}\n.isolate {\n  isolation: isolate;\n}\n.z-\\[80\\] {\n  z-index: 80;\n}\n.z-10 {\n  z-index: 10;\n}\n.z-0 {\n  z-index: 0;\n}\n.z-20 {\n  z-index: 20;\n}\n.z-50 {\n  z-index: 50;\n}\n.z-\\[1\\] {\n  z-index: 1;\n}\n.z-\\[2\\] {\n  z-index: 2;\n}\n.z-\\[3\\] {\n  z-index: 3;\n}\n.col-span-full {\n  grid-column: 1 / -1;\n}\n.col-span-6 {\n  grid-column: span 6 / span 6;\n}\n.col-span-1 {\n  grid-column: span 1 / span 1;\n}\n.col-span-4 {\n  grid-column: span 4 / span 4;\n}\n.col-span-2 {\n  grid-column: span 2 / span 2;\n}\n.col-start-1 {\n  grid-column-start: 1;\n}\n.col-start-2 {\n  grid-column-start: 2;\n}\n.col-start-3 {\n  grid-column-start: 3;\n}\n.col-end-1 {\n  grid-column-end: 1;\n}\n.col-end-4 {\n  grid-column-end: 4;\n}\n.col-end-2 {\n  grid-column-end: 2;\n}\n.row-start-1 {\n  grid-row-start: 1;\n}\n.row-end-auto {\n  grid-row-end: auto;\n}\n.float-right {\n  float: right;\n}\n.m-0 {\n  margin: 0px;\n}\n.m-lg {\n  margin: 1.5rem;\n}\n.m-auto {\n  margin: auto;\n}\n.m-xs {\n  margin: 0.5rem;\n}\n.m-sm {\n  margin: 0.75rem;\n}\n.m-md {\n  margin: 1rem;\n}\n.my-0 {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.mx-md {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n.mx-0 {\n  margin-left: 0px;\n  margin-right: 0px;\n}\n.mx-sm {\n  margin-left: 0.75rem;\n  margin-right: 0.75rem;\n}\n.mx-xs {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n.my-sm {\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.mx-2xs {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n.-mx-md {\n  margin-left: -1rem;\n  margin-right: -1rem;\n}\n.my-md {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.my-xs {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.mb-xs {\n  margin-bottom: 0.5rem;\n}\n.mb-lg {\n  margin-bottom: 1.5rem;\n}\n.mr-md {\n  margin-right: 1rem;\n}\n.mb-0 {\n  margin-bottom: 0px;\n}\n.mt-\\[2px\\] {\n  margin-top: 2px;\n}\n.ml-\\[-4px\\] {\n  margin-left: -4px;\n}\n.ml-\\[8px\\] {\n  margin-left: 8px;\n}\n.mt-\\[4px\\] {\n  margin-top: 4px;\n}\n.ml-auto {\n  margin-left: auto;\n}\n.mb-\\[10px\\] {\n  margin-bottom: 10px;\n}\n.mt-2xs {\n  margin-top: 0.25rem;\n}\n.mt-sm {\n  margin-top: 0.75rem;\n}\n.mr-sm {\n  margin-right: 0.75rem;\n}\n.mr-2xs {\n  margin-right: 0.25rem;\n}\n.ml-md {\n  margin-left: 1rem;\n}\n.mb-sm {\n  margin-bottom: 0.75rem;\n}\n.ml-xs {\n  margin-left: 0.5rem;\n}\n.ml-2xs {\n  margin-left: 0.25rem;\n}\n.ml-sm {\n  margin-left: 0.75rem;\n}\n.mt-md {\n  margin-top: 1rem;\n}\n.mb-md {\n  margin-bottom: 1rem;\n}\n.mt-lg {\n  margin-top: 1.5rem;\n}\n.mt-0 {\n  margin-top: 0px;\n}\n.mt-xs {\n  margin-top: 0.5rem;\n}\n.mr-xs {\n  margin-right: 0.5rem;\n}\n.mt-xl {\n  margin-top: 2rem;\n}\n.-mt-xl {\n  margin-top: -2rem;\n}\n.mr-0 {\n  margin-right: 0px;\n}\n.mb-2xs {\n  margin-bottom: 0.25rem;\n}\n.-ml-sm {\n  margin-left: -0.75rem;\n}\n.mr-auto {\n  margin-right: auto;\n}\n.ml-0 {\n  margin-left: 0px;\n}\n.-ml-md {\n  margin-left: -1rem;\n}\n.-mt-sm {\n  margin-top: -0.75rem;\n}\n.mb-2xl {\n  margin-bottom: 3rem;\n}\n.ml-px {\n  margin-left: 1px;\n}\n.ml-xl {\n  margin-left: 2rem;\n}\n.-ml-\\[var\\(--rem4\\)\\] {\n  margin-left: calc(var(--rem4) * -1);\n}\n.-ml-\\[var\\(--rem6\\)\\] {\n  margin-left: calc(var(--rem6) * -1);\n}\n.-ml-\\[var\\(--rem8\\)\\] {\n  margin-left: calc(var(--rem8) * -1);\n}\n.-ml-\\[var\\(--rem10\\)\\] {\n  margin-left: calc(var(--rem10) * -1);\n}\n.-ml-\\[var\\(--rem12\\)\\] {\n  margin-left: calc(var(--rem12) * -1);\n}\n.-ml-\\[var\\(--rem14\\)\\] {\n  margin-left: calc(var(--rem14) * -1);\n}\n.-ml-\\[var\\(--rem16\\)\\] {\n  margin-left: calc(var(--rem16) * -1);\n}\n.-ml-\\[var\\(--rem18\\)\\] {\n  margin-left: calc(var(--rem18) * -1);\n}\n.-ml-\\[var\\(--rem20\\)\\] {\n  margin-left: calc(var(--rem20) * -1);\n}\n.mr-\\[calc\\(var\\(--size-button-sm-h\\)-var\\(--rem10\\)-var\\(--button-border-width-default\\)\\)\\] {\n  margin-right: calc(var(--size-button-sm-h) - var(--rem10) - var(--button-border-width-default));\n}\n.mr-\\[length\\:var\\(--rem6\\)\\] {\n  margin-right: var(--rem6);\n}\n.mt-\\[-0\\.125rem\\] {\n  margin-top: -0.125rem;\n}\n.ml-\\[-\\.25rem\\] {\n  margin-left: -.25rem;\n}\n.mt-\\[-0\\.25rem\\] {\n  margin-top: -0.25rem;\n}\n.box-border {\n  box-sizing: border-box;\n}\n.block {\n  display: block;\n}\n.\\!block {\n  display: block !important;\n}\n.inline-block {\n  display: inline-block;\n}\n.inline {\n  display: inline;\n}\n.flex {\n  display: flex;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.table {\n  display: table;\n}\n.\\!table {\n  display: table !important;\n}\n.table-cell {\n  display: table-cell;\n}\n.grid {\n  display: grid;\n}\n.contents {\n  display: contents;\n}\n.list-item {\n  display: list-item;\n}\n.hidden {\n  display: none;\n}\n.\\!hidden {\n  display: none !important;\n}\n.aspect-square {\n  aspect-ratio: 1 / 1;\n}\n.h-0 {\n  height: 0px;\n}\n.h-\\[10px\\] {\n  height: 10px;\n}\n.h-\\[20px\\] {\n  height: 20px;\n}\n.\\!h-\\[32px\\] {\n  height: 32px !important;\n}\n.h-\\[16px\\] {\n  height: 16px;\n}\n.h-full {\n  height: 100%;\n}\n.h-3xl {\n  height: 4rem;\n}\n.h-xs {\n  height: 0.5rem;\n}\n.h-2xl {\n  height: 3rem;\n}\n.h-100 {\n  height: 100%;\n}\n.h-2xs {\n  height: 0.25rem;\n}\n.h-lg {\n  height: 1.5rem;\n}\n.h-md {\n  height: 1rem;\n}\n.h-\\[28px\\] {\n  height: 28px;\n}\n.h-sm {\n  height: 0.75rem;\n}\n.h-px {\n  height: 1px;\n}\n.h-auto {\n  height: auto;\n}\n.h-xl {\n  height: 2rem;\n}\n.h-4xl {\n  height: 6rem;\n}\n.h-screen {\n  height: 100vh;\n}\n.h-\\[60px\\] {\n  height: 60px;\n}\n.h-\\[316px\\] {\n  height: 316px;\n}\n.h-\\[240px\\] {\n  height: 240px;\n}\n.h-\\[500px\\] {\n  height: 500px;\n}\n.h-\\[1rem\\] {\n  height: 1rem;\n}\n.h-\\[1\\.25rem\\] {\n  height: 1.25rem;\n}\n.h-\\[1\\.5rem\\] {\n  height: 1.5rem;\n}\n.h-\\[2rem\\] {\n  height: 2rem;\n}\n.h-\\[2\\.5rem\\] {\n  height: 2.5rem;\n}\n.h-\\[3rem\\] {\n  height: 3rem;\n}\n.h-\\[2\\.87rem\\] {\n  height: 2.87rem;\n}\n.h-\\[3\\.25rem\\] {\n  height: 3.25rem;\n}\n.h-\\[4\\.5rem\\] {\n  height: 4.5rem;\n}\n.h-\\[3\\.5rem\\] {\n  height: 3.5rem;\n}\n.h-\\[4rem\\] {\n  height: 4rem;\n}\n.h-\\[5\\.5rem\\] {\n  height: 5.5rem;\n}\n.h-\\[\\.25rem\\] {\n  height: .25rem;\n}\n.h-\\[\\.375rem\\] {\n  height: .375rem;\n}\n.h-\\[\\.625rem\\] {\n  height: .625rem;\n}\n.h-\\[\\.75rem\\] {\n  height: .75rem;\n}\n.max-h-\\[4\\.143em\\] {\n  max-height: 4.143em;\n}\n.max-h-full {\n  max-height: 100%;\n}\n.max-h-\\[240px\\] {\n  max-height: 240px;\n}\n.max-h-\\[253px\\] {\n  max-height: 253px;\n}\n.min-h-\\[20px\\] {\n  min-height: 20px;\n}\n.min-h-screen {\n  min-height: 100vh;\n}\n.min-h-full {\n  min-height: 100%;\n}\n.min-h-\\[1rem\\] {\n  min-height: 1rem;\n}\n.w-0 {\n  width: 0px;\n}\n.w-100 {\n  width: 100%;\n}\n.w-\\[539px\\] {\n  width: 539px;\n}\n.w-\\[16px\\] {\n  width: 16px;\n}\n.\\!w-\\[32px\\] {\n  width: 32px !important;\n}\n.w-full {\n  width: 100%;\n}\n.w-3xl {\n  width: 4rem;\n}\n.w-fit {\n  width: fit-content;\n}\n.w-\\[280px\\] {\n  width: 280px;\n}\n.w-\\[268px\\] {\n  width: 268px;\n}\n.w-xs {\n  width: 0.5rem;\n}\n.w-\\[64px\\] {\n  width: 64px;\n}\n.w-lg {\n  width: 1.5rem;\n}\n.w-md {\n  width: 1rem;\n}\n.w-5xl {\n  width: 8rem;\n}\n.w-xl {\n  width: 2rem;\n}\n.w-auto {\n  width: auto;\n}\n.w-screen {\n  width: 100vw;\n}\n.w-2xl {\n  width: 3rem;\n}\n.w-px {\n  width: 1px;\n}\n.w-\\[1rem\\] {\n  width: 1rem;\n}\n.w-\\[1\\.25rem\\] {\n  width: 1.25rem;\n}\n.w-\\[1\\.5rem\\] {\n  width: 1.5rem;\n}\n.w-\\[2rem\\] {\n  width: 2rem;\n}\n.w-\\[2\\.5rem\\] {\n  width: 2.5rem;\n}\n.w-\\[3rem\\] {\n  width: 3rem;\n}\n.w-\\[2\\.87rem\\] {\n  width: 2.87rem;\n}\n.w-\\[3\\.25rem\\] {\n  width: 3.25rem;\n}\n.w-\\[4\\.5rem\\] {\n  width: 4.5rem;\n}\n.w-\\[3\\.5rem\\] {\n  width: 3.5rem;\n}\n.w-\\[4rem\\] {\n  width: 4rem;\n}\n.w-\\[5\\.5rem\\] {\n  width: 5.5rem;\n}\n.w-\\[\\.25rem\\] {\n  width: .25rem;\n}\n.w-\\[\\.375rem\\] {\n  width: .375rem;\n}\n.w-\\[\\.625rem\\] {\n  width: .625rem;\n}\n.w-\\[\\.75rem\\] {\n  width: .75rem;\n}\n.min-w-\\[500px\\] {\n  min-width: 500px;\n}\n.min-w-0 {\n  min-width: 0px;\n}\n.min-w-\\[20px\\] {\n  min-width: 20px;\n}\n.min-w-full {\n  min-width: 100%;\n}\n.min-w-\\[0\\.5rem\\] {\n  min-width: 0.5rem;\n}\n.max-w-\\[12rem\\] {\n  max-width: 12rem;\n}\n.max-w-\\[230px\\] {\n  max-width: 230px;\n}\n.max-w-full {\n  max-width: 100%;\n}\n.max-w-\\[240px\\] {\n  max-width: 240px;\n}\n.max-w-none {\n  max-width: none;\n}\n.max-w-\\[480px\\] {\n  max-width: 480px;\n}\n.flex-auto {\n  flex: 1 1 auto;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.flex-none {\n  flex: none;\n}\n.flex-shrink-0 {\n  flex-shrink: 0;\n}\n.flex-shrink {\n  flex-shrink: 1;\n}\n.shrink {\n  flex-shrink: 1;\n}\n.shrink-0 {\n  flex-shrink: 0;\n}\n.flex-grow-0 {\n  flex-grow: 0;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.grow {\n  flex-grow: 1;\n}\n.grow-0 {\n  flex-grow: 0;\n}\n.basis-0 {\n  flex-basis: 0px;\n}\n.basis-2xl {\n  flex-basis: 3rem;\n}\n.basis-full {\n  flex-basis: 100%;\n}\n.border-separate {\n  border-collapse: separate;\n}\n.-translate-y-1\\/2 {\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-x-1\\/2 {\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-x-0 {\n  --tw-translate-x: 0px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-md {\n  --tw-translate-y: 1rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.rotate-90 {\n  --tw-rotate: 90deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.scale-75 {\n  --tw-scale-x: .75;\n  --tw-scale-y: .75;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.scale-150 {\n  --tw-scale-x: 1.5;\n  --tw-scale-y: 1.5;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.scale-100 {\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-scale-x-100 {\n  --tw-scale-x: -1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.transform-gpu {\n  transform: translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.animate-spin {\n  animation: spin 1s linear infinite;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.cursor-default {\n  cursor: default;\n}\n.cursor-none {\n  cursor: none;\n}\n.select-none {\n  user-select: none;\n}\n.resize-y {\n  resize: vertical;\n}\n.resize {\n  resize: both;\n}\n.list-none {\n  list-style-type: none;\n}\n.columns-1 {\n  columns: 1;\n}\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.grid-cols-8 {\n  grid-template-columns: repeat(8, minmax(0, 1fr));\n}\n.flex-row {\n  flex-direction: row;\n}\n.flex-col {\n  flex-direction: column;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n.flex-nowrap {\n  flex-wrap: nowrap;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-end {\n  align-items: flex-end;\n}\n.items-center {\n  align-items: center;\n}\n.items-stretch {\n  align-items: stretch;\n}\n.justify-start {\n  justify-content: flex-start;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.justify-around {\n  justify-content: space-around;\n}\n.justify-items-start {\n  justify-items: start;\n}\n.justify-items-center {\n  justify-items: center;\n}\n.gap-xs {\n  gap: 0.5rem;\n}\n.gap-sm {\n  gap: 0.75rem;\n}\n.gap-md {\n  gap: 1rem;\n}\n.gap-2xs {\n  gap: 0.25rem;\n}\n.gap-\\[0\\.5rem\\] {\n  gap: 0.5rem;\n}\n.gap-x-md {\n  column-gap: 1rem;\n}\n.gap-x-xs {\n  column-gap: 0.5rem;\n}\n.self-start {\n  align-self: flex-start;\n}\n.self-end {\n  align-self: flex-end;\n}\n.self-center {\n  align-self: center;\n}\n.self-baseline {\n  align-self: baseline;\n}\n.overflow-auto {\n  overflow: auto;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.overflow-visible {\n  overflow: visible;\n}\n.overflow-scroll {\n  overflow: scroll;\n}\n.overflow-y-auto {\n  overflow-y: auto;\n}\n.overflow-x-hidden {\n  overflow-x: hidden;\n}\n.overflow-x-visible {\n  overflow-x: visible;\n}\n.overflow-x-scroll {\n  overflow-x: scroll;\n}\n.overscroll-none {\n  overscroll-behavior: none;\n}\n.scroll-smooth {\n  scroll-behavior: smooth;\n}\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.overflow-ellipsis {\n  text-overflow: ellipsis;\n}\n.text-ellipsis {\n  text-overflow: ellipsis;\n}\n.whitespace-normal {\n  white-space: normal;\n}\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n.break-normal {\n  overflow-wrap: normal;\n  word-break: normal;\n}\n.rounded-sm {\n  border-radius: 0.25rem;\n}\n.rounded-full {\n  border-radius: 624.9375rem;\n}\n.rounded-\\[4px\\] {\n  border-radius: 4px;\n}\n.rounded-\\[0\\.5rem\\] {\n  border-radius: 0.5rem;\n}\n.rounded-lg {\n  border-radius: 2rem;\n}\n.rounded-\\[16px\\] {\n  border-radius: 16px;\n}\n.rounded-none {\n  border-radius: 0rem;\n}\n.rounded-\\[\\.5rem\\] {\n  border-radius: .5rem;\n}\n.rounded-l-sm {\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.rounded-t-lg {\n  border-top-left-radius: 2rem;\n  border-top-right-radius: 2rem;\n}\n.rounded-r-sm {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n.rounded-r-lg {\n  border-top-right-radius: 2rem;\n  border-bottom-right-radius: 2rem;\n}\n.rounded-b-none {\n  border-bottom-right-radius: 0rem;\n  border-bottom-left-radius: 0rem;\n}\n.rounded-br-none {\n  border-bottom-right-radius: 0rem;\n}\n.border {\n  border-width: 0.0625rem;\n}\n.border-sm {\n  border-width: 0.0625rem;\n}\n.border-lg {\n  border-width: 0.25rem;\n}\n.border-0 {\n  border-width: 0rem;\n}\n.border-md {\n  border-width: 0.125rem;\n}\n.border-y-sm {\n  border-top-width: 0.0625rem;\n  border-bottom-width: 0.0625rem;\n}\n.border-x-0 {\n  border-left-width: 0rem;\n  border-right-width: 0rem;\n}\n.border-y-0 {\n  border-top-width: 0rem;\n  border-bottom-width: 0rem;\n}\n.border-b {\n  border-bottom-width: 0.0625rem;\n}\n.border-r-sm {\n  border-right-width: 0.0625rem;\n}\n.border-t-sm {\n  border-top-width: 0.0625rem;\n}\n.border-b-0 {\n  border-bottom-width: 0rem;\n}\n.border-r-0 {\n  border-right-width: 0rem;\n}\n.border-l-0 {\n  border-left-width: 0rem;\n}\n.border-b-sm {\n  border-bottom-width: 0.0625rem;\n}\n.border-t-0 {\n  border-top-width: 0rem;\n}\n.border-t {\n  border-top-width: 0.0625rem;\n}\n.border-l-sm {\n  border-left-width: 0.0625rem;\n}\n.border-r-md {\n  border-right-width: 0.125rem;\n}\n.border-r {\n  border-right-width: 0.0625rem;\n}\n.border-l-lg {\n  border-left-width: 0.25rem;\n}\n.border-solid {\n  border-style: solid;\n}\n.border-none {\n  border-style: none;\n}\n.border-neutral-border-weak {\n  border-color: var(--color-neutral-border-weak);\n}\n.border-white {\n  --tw-border-opacity: 1;\n  border-color: rgb(255 255 255 / var(--tw-border-opacity));\n}\n.border-\\[color\\:var\\(--newCommunityTheme-postLine\\)\\] {\n  border-color: var(--newCommunityTheme-postLine);\n}\n.border-neutral-border {\n  border-color: var(--color-neutral-border);\n}\n.border-global-white {\n  border-color: var(--color-global-white);\n}\n.border-tone-2 {\n  border-color: var(--color-tone-2);\n}\n.border-neutral-content {\n  border-color: var(--color-neutral-content);\n}\n.border-tone-4 {\n  border-color: var(--color-tone-4);\n}\n.border-action-secondary {\n  border-color: var(--color-action-secondary);\n}\n.border-tone-7 {\n  border-color: var(--color-tone-7);\n}\n.border-tone-5 {\n  border-color: var(--color-tone-5);\n}\n.border-danger-content {\n  border-color: var(--color-danger-content);\n}\n.border-tone-6 {\n  border-color: var(--color-tone-6);\n}\n.border-tone-3 {\n  border-color: var(--color-tone-3);\n}\n.border-coolgray-350 {\n  --tw-border-opacity: 1;\n  border-color: rgb(184 197 201 / var(--tw-border-opacity));\n}\n.border-transparent {\n  border-color: transparent;\n}\n.border-alert-negative {\n  border-color: var(--color-alert-negative);\n}\n.border-global-orangered {\n  border-color: var(--color-global-orangered);\n}\n.border-neutral-border-medium {\n  border-color: var(--color-neutral-border-medium);\n}\n.border-coolgray-100 {\n  --tw-border-opacity: 1;\n  border-color: rgb(242 244 245 / var(--tw-border-opacity));\n}\n.border-action-primary {\n  border-color: var(--color-action-primary);\n}\n.border-alert-caution {\n  border-color: var(--color-alert-caution);\n}\n.border-neutral-background {\n  border-color: var(--color-neutral-background);\n}\n.border-secondary-background-selected {\n  border-color: var(--color-secondary-background-selected);\n}\n.border-action-upvote {\n  border-color: var(--color-action-upvote);\n}\n.border-action-downvote {\n  border-color: var(--color-action-downvote);\n}\n.border-r-neutral-border-weak {\n  border-right-color: var(--color-neutral-border-weak);\n}\n.bg-neutral-background {\n  background-color: var(--color-neutral-background);\n}\n.bg-neutral-background-weak {\n  background-color: var(--color-neutral-background-weak);\n}\n.bg-global-orangered {\n  background-color: var(--color-global-orangered);\n}\n.bg-coolgray-350 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(184 197 201 / var(--tw-bg-opacity));\n}\n.bg-\\[color\\:var\\(--newCommunityTheme-body\\)\\] {\n  background-color: var(--newCommunityTheme-body);\n}\n.bg-neutral-background-strong {\n  background-color: var(--color-neutral-background-strong);\n}\n.bg-secondary-background-selected {\n  background-color: var(--color-secondary-background-selected);\n}\n.bg-alert-caution {\n  background-color: var(--color-alert-caution);\n}\n.bg-success-background {\n  background-color: var(--color-success-background);\n}\n.bg-black {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.bg-opacity-50 {\n  background-color: var(--color-opacity-50);\n}\n.bg-transparent {\n  background-color: transparent;\n}\n.bg-scrim {\n  background-color: var(--color-scrim);\n}\n.bg-tone-7 {\n  background-color: var(--color-tone-7);\n}\n.bg-tone-6 {\n  background-color: var(--color-tone-6);\n}\n.bg-tone-4 {\n  background-color: var(--color-tone-4);\n}\n.bg-ui-modalbackground {\n  background-color: var(--color-ui-modalbackground);\n}\n.bg-tone-5 {\n  background-color: var(--color-tone-5);\n}\n.bg-tone-1 {\n  background-color: var(--color-tone-1);\n}\n.bg-secondary-background {\n  background-color: var(--color-secondary-background);\n}\n.bg-neutral-background-hover {\n  background-color: var(--color-neutral-background-hover);\n}\n.bg-primary-background {\n  background-color: var(--color-primary-background);\n}\n.bg-global-white {\n  background-color: var(--color-global-white);\n}\n.bg-brand-background {\n  background-color: var(--color-brand-background);\n}\n.bg-global-alienblue {\n  background-color: var(--color-global-alienblue);\n}\n.bg-secondary-weak {\n  background-color: var(--color-secondary-weak);\n}\n.bg-kiwigreen-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(85 189 70 / var(--tw-bg-opacity));\n}\n.bg-kiwigreen-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(10 96 0 / var(--tw-bg-opacity));\n}\n.bg-yelloworange-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 156 26 / var(--tw-bg-opacity));\n}\n.bg-action-primary {\n  background-color: var(--color-action-primary);\n}\n.bg-orangered-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 190 166 / var(--tw-bg-opacity));\n}\n.bg-coolgray-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(226 231 233 / var(--tw-bg-opacity));\n}\n.bg-online {\n  background-color: var(--color-online);\n}\n.bg-warning-content {\n  background-color: var(--color-warning-content);\n}\n.bg-success-content {\n  background-color: var(--color-success-content);\n}\n.bg-neutral-content {\n  background-color: var(--color-neutral-content);\n}\n.bg-danger-content {\n  background-color: var(--color-danger-content);\n}\n.bg-neutral-content-disabled {\n  background-color: var(--color-neutral-content-disabled);\n}\n.bg-brand-onBackground {\n  background-color: var(--color-brand-onBackground);\n}\n.bg-action-upvote {\n  background-color: var(--color-action-upvote);\n}\n.bg-action-downvote {\n  background-color: var(--color-action-downvote);\n}\n.bg-interactive-background-disabled {\n  background-color: var(--color-interactive-background-disabled);\n}\n.bg-\\[color\\:var\\(--button-color-background-default\\)\\] {\n  background-color: var(--button-color-background-default);\n}\n.bg-neutral-background-selected {\n  background-color: var(--color-neutral-background-selected);\n}\n.bg-\\[color\\:var\\(--color-button-plain-background-disabled\\)\\] {\n  background-color: var(--color-button-plain-background-disabled);\n}\n.bg-opacity-25 {\n  --tw-bg-opacity: 0.25;\n}\n.bg-opacity-50 {\n  --tw-bg-opacity: 0.5;\n}\n.bg-gradient-to-r {\n  background-image: linear-gradient(to right, var(--tw-gradient-stops));\n}\n.bg-gradient-to-l {\n  background-image: linear-gradient(to left, var(--tw-gradient-stops));\n}\n.bg-gradient-to-t {\n  background-image: linear-gradient(to top, var(--tw-gradient-stops));\n}\n.from-white {\n  --tw-gradient-from: #ffffff;\n  --tw-gradient-to: rgb(255 255 255 / 0);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.from-transparent {\n  --tw-gradient-from: transparent;\n  --tw-gradient-to: rgb(0 0 0 / 0);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.via-white {\n  --tw-gradient-to: rgb(255 255 255 / 0);\n  --tw-gradient-stops: var(--tw-gradient-from), #ffffff, var(--tw-gradient-to);\n}\n.fill-brand-background {\n  fill: var(--color-brand-background);\n}\n.fill-current {\n  fill: currentColor;\n}\n.stroke-tone-2 {\n  stroke: var(--color-tone-2);\n}\n.object-contain {\n  object-fit: contain;\n}\n.p-md {\n  padding: 1rem;\n}\n.p-sm {\n  padding: 0.75rem;\n}\n.p-xs {\n  padding: 0.5rem;\n}\n.p-\\[32px\\] {\n  padding: 32px;\n}\n.p-px {\n  padding: 1px;\n}\n.p-0 {\n  padding: 0px;\n}\n.p-2xs {\n  padding: 0.25rem;\n}\n.p-lg {\n  padding: 1.5rem;\n}\n.px-lg {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n.px-\\[8px\\] {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.py-\\[6px\\] {\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n.px-\\[length\\:var\\(--rem8\\)\\] {\n  padding-left: var(--rem8);\n  padding-right: var(--rem8);\n}\n.py-\\[32px\\] {\n  padding-top: 32px;\n  padding-bottom: 32px;\n}\n.px-\\[16px\\] {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.py-\\[8px\\] {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n.py-sm {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.px-md {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-xs {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.px-2xs {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n.py-lg {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n.py-0 {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n.px-sm {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.py-2xs {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.px-2xl {\n  padding-left: 3rem;\n  padding-right: 3rem;\n}\n.px-xs {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.py-md {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.px-0 {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n.px-\\[length\\:var\\(--rem10\\)\\] {\n  padding-left: var(--rem10);\n  padding-right: var(--rem10);\n}\n.px-\\[length\\:var\\(--rem6\\)\\] {\n  padding-left: var(--rem6);\n  padding-right: var(--rem6);\n}\n.px-\\[length\\:var\\(--rem14\\)\\] {\n  padding-left: var(--rem14);\n  padding-right: var(--rem14);\n}\n.px-\\[length\\:var\\(--rem12\\)\\] {\n  padding-left: var(--rem12);\n  padding-right: var(--rem12);\n}\n.px-\\[0\\.375rem\\] {\n  padding-left: 0.375rem;\n  padding-right: 0.375rem;\n}\n.py-\\[0\\.125rem\\] {\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n}\n.py-\\[length\\:var\\(--rem6\\)\\] {\n  padding-top: var(--rem6);\n  padding-bottom: var(--rem6);\n}\n.py-\\[length\\:var\\(--rem8\\)\\] {\n  padding-top: var(--rem8);\n  padding-bottom: var(--rem8);\n}\n.py-\\[length\\:var\\(--rem10\\)\\] {\n  padding-top: var(--rem10);\n  padding-bottom: var(--rem10);\n}\n.py-\\[length\\:var\\(--rem14\\)\\] {\n  padding-top: var(--rem14);\n  padding-bottom: var(--rem14);\n}\n.pr-0 {\n  padding-right: 0px;\n}\n.pt-md {\n  padding-top: 1rem;\n}\n.pt-sm {\n  padding-top: 0.75rem;\n}\n.pb-xs {\n  padding-bottom: 0.5rem;\n}\n.pl-sm {\n  padding-left: 0.75rem;\n}\n.pb-2xs {\n  padding-bottom: 0.25rem;\n}\n.pt-lg {\n  padding-top: 1.5rem;\n}\n.pt-2xs {\n  padding-top: 0.25rem;\n}\n.\\!pt-2xs {\n  padding-top: 0.25rem !important;\n}\n.pb-\\[8px\\] {\n  padding-bottom: 8px;\n}\n.pt-\\[4px\\] {\n  padding-top: 4px;\n}\n.pr-sm {\n  padding-right: 0.75rem;\n}\n.pb-lg {\n  padding-bottom: 1.5rem;\n}\n.pb-md {\n  padding-bottom: 1rem;\n}\n.pr-lg {\n  padding-right: 1.5rem;\n}\n.pl-xs {\n  padding-left: 0.5rem;\n}\n.pl-md {\n  padding-left: 1rem;\n}\n.pt-\\[20px\\] {\n  padding-top: 20px;\n}\n.pb-\\[6px\\] {\n  padding-bottom: 6px;\n}\n.pt-0 {\n  padding-top: 0px;\n}\n.pt-px {\n  padding-top: 1px;\n}\n.pt-xs {\n  padding-top: 0.5rem;\n}\n.pr-xs {\n  padding-right: 0.5rem;\n}\n.pb-sm {\n  padding-bottom: 0.75rem;\n}\n.pl-2xs {\n  padding-left: 0.25rem;\n}\n.pl-lg {\n  padding-left: 1.5rem;\n}\n.pr-2xs {\n  padding-right: 0.25rem;\n}\n.pr-md {\n  padding-right: 1rem;\n}\n.pb-0 {\n  padding-bottom: 0px;\n}\n.pb-xl {\n  padding-bottom: 2rem;\n}\n.pt-xl {\n  padding-top: 2rem;\n}\n.pr-xl {\n  padding-right: 2rem;\n}\n.pr-2xl {\n  padding-right: 3rem;\n}\n.pr-3xl {\n  padding-right: 4rem;\n}\n.pl-0 {\n  padding-left: 0px;\n}\n.pl-\\[length\\:var\\(--rem10\\)\\] {\n  padding-left: var(--rem10);\n}\n.pr-\\[length\\:var\\(--rem14\\)\\] {\n  padding-right: var(--rem14);\n}\n.pr-\\[length\\:var\\(--rem6\\)\\] {\n  padding-right: var(--rem6);\n}\n.pl-\\[length\\:var\\(--rem14\\)\\] {\n  padding-left: var(--rem14);\n}\n.pr-\\[length\\:var\\(--rem10\\)\\] {\n  padding-right: var(--rem10);\n}\n.pl-\\[length\\:var\\(--rem12\\)\\] {\n  padding-left: var(--rem12);\n}\n.pr-\\[length\\:var\\(--rem12\\)\\] {\n  padding-right: var(--rem12);\n}\n.pr-\\[length\\:var\\(--rem16\\)\\] {\n  padding-right: var(--rem16);\n}\n.pr-\\[length\\:var\\(--rem8\\)\\] {\n  padding-right: var(--rem8);\n}\n.pl-\\[length\\:var\\(--rem16\\)\\] {\n  padding-left: var(--rem16);\n}\n.text-left {\n  text-align: left;\n}\n.text-center {\n  text-align: center;\n}\n.text-right {\n  text-align: right;\n}\n.indent-0 {\n  text-indent: 0px;\n}\n.align-top {\n  vertical-align: top;\n}\n.align-middle {\n  vertical-align: middle;\n}\n.align-text-bottom {\n  vertical-align: text-bottom;\n}\n.font-mono {\n  font-family: var(--font-mono);\n}\n.font-sans {\n  font-family: var(--font-sans);\n}\n.text-24 {\n  font-size: 1.5rem;\n  line-height: 1.75rem;\n}\n.text-16 {\n  font-size: 1rem;\n  line-height: 1.25rem;\n}\n.text-14 {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-12 {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.\\!text-12 {\n  font-size: 0.75rem !important;\n  line-height: 1rem !important;\n}\n.text-\\[32px\\] {\n  font-size: 32px;\n}\n.text-20 {\n  font-size: 1.25rem;\n  line-height: 1.25rem;\n}\n.\\!text-\\[32px\\] {\n  font-size: 32px !important;\n}\n.text-\\[14px\\] {\n  font-size: 14px;\n}\n.text-\\[12px\\] {\n  font-size: 12px;\n}\n.text-18 {\n  font-size: 1.125rem;\n  line-height: 1.5rem;\n}\n.text-64 {\n  font-size: 4rem;\n  line-height: 4rem;\n}\n.text-32 {\n  font-size: 2rem;\n  line-height: 2.25rem;\n}\n.text-10 {\n  font-size: 0.625rem;\n  line-height: 1rem;\n}\n.text-48 {\n  font-size: 3rem;\n  line-height: 3rem;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-normal {\n  font-weight: 400;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.lowercase {\n  text-transform: lowercase;\n}\n.capitalize {\n  text-transform: capitalize;\n}\n.italic {\n  font-style: italic;\n}\n.not-italic {\n  font-style: normal;\n}\n.ordinal {\n  --tw-ordinal: ordinal;\n  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);\n}\n.leading-5 {\n  line-height: 1.25rem;\n}\n.leading-4 {\n  line-height: 1rem;\n}\n.\\!leading-none {\n  line-height: 1 !important;\n}\n.leading-\\[16px\\] {\n  line-height: 16px;\n}\n.leading-\\[14px\\] {\n  line-height: 14px;\n}\n.leading-\\[20px\\] {\n  line-height: 20px;\n}\n.leading-6 {\n  line-height: 1.5rem;\n}\n.leading-none {\n  line-height: 1;\n}\n.leading-3 {\n  line-height: .75rem;\n}\n.leading-8 {\n  line-height: 2rem;\n}\n.leading-normal {\n  line-height: 1.5;\n}\n.leading-9 {\n  line-height: 2.25rem;\n}\n.leading-7 {\n  line-height: 1.75rem;\n}\n.tracking-normal {\n  letter-spacing: 0em;\n}\n.tracking-widest {\n  letter-spacing: 0.1em;\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.text-neutral-content-strong {\n  color: var(--color-neutral-content-strong);\n}\n.text-neutral-content-weak {\n  color: var(--color-neutral-content-weak);\n}\n.text-coolgray-900 {\n  --tw-text-opacity: 1;\n  color: rgb(11 20 22 / var(--tw-text-opacity));\n}\n.text-primary {\n  color: var(--color-primary);\n}\n.text-action-primary {\n  color: var(--color-action-primary);\n}\n.text-secondary-weak {\n  color: var(--color-secondary-weak);\n}\n.text-neutral-content {\n  color: var(--color-neutral-content);\n}\n.text-global-white {\n  color: var(--color-global-white);\n}\n.text-tone-3 {\n  color: var(--color-tone-3);\n}\n.text-global-alienblue {\n  color: var(--color-global-alienblue);\n}\n.text-tone-1 {\n  color: var(--color-tone-1);\n}\n.text-action-secondary {\n  color: var(--color-action-secondary);\n}\n.text-primary-background-hover {\n  color: var(--color-primary-background-hover);\n}\n.text-category-nsfw {\n  color: var(--color-category-nsfw);\n}\n.text-tone-2 {\n  color: var(--color-tone-2);\n}\n.text-puregray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(172 172 172 / var(--tw-text-opacity));\n}\n.text-danger-content {\n  color: var(--color-danger-content);\n}\n.text-tone-7 {\n  color: var(--color-tone-7);\n}\n.text-primary-background {\n  color: var(--color-primary-background);\n}\n.text-identity-moderator {\n  color: var(--color-identity-moderator);\n}\n.text-alert-negative {\n  color: var(--color-alert-negative);\n}\n.text-coolgray-850 {\n  --tw-text-opacity: 1;\n  color: rgb(15 26 28 / var(--tw-text-opacity));\n}\n.text-coolgray-650 {\n  --tw-text-opacity: 1;\n  color: rgb(42 60 66 / var(--tw-text-opacity));\n}\n.text-coolgray-550 {\n  --tw-text-opacity: 1;\n  color: rgb(75 96 102 / var(--tw-text-opacity));\n}\n.text-neutral-background-strong {\n  color: var(--color-neutral-background-strong);\n}\n.text-periwinkle-500 {\n  --tw-text-opacity: 1;\n  color: rgb(106 92 255 / var(--tw-text-opacity));\n}\n.text-coolgray-950 {\n  --tw-text-opacity: 1;\n  color: rgb(4 9 10 / var(--tw-text-opacity));\n}\n.text-action-downvote {\n  color: var(--color-action-downvote);\n}\n.text-global-black {\n  color: var(--color-global-black);\n}\n.text-secondary {\n  color: var(--color-secondary);\n}\n.text-alert-caution {\n  color: var(--color-alert-caution);\n}\n.text-current {\n  color: currentColor;\n}\n.text-category-spoiler {\n  color: var(--color-category-spoiler);\n}\n.text-warning-content {\n  color: var(--color-warning-content);\n}\n.text-primary-onBackground {\n  color: var(--color-primary-onBackground);\n}\n.text-brand-onBackground {\n  color: var(--color-brand-onBackground);\n}\n.text-neutral-content-disabled {\n  color: var(--color-neutral-content-disabled);\n}\n.text-\\[color\\:var\\(--button-color-text-default\\)\\] {\n  color: var(--button-color-text-default);\n}\n.text-secondary-onBackground {\n  color: var(--color-secondary-onBackground);\n}\n.text-\\[color\\:var\\(--color-button-secondary-text-disabled\\)\\] {\n  color: var(--color-button-secondary-text-disabled);\n}\n.text-\\[color\\:var\\(--color-button-plain-text-disabled\\)\\] {\n  color: var(--color-button-plain-text-disabled);\n}\n.underline {\n  text-decoration-line: underline;\n}\n.line-through {\n  text-decoration-line: line-through;\n}\n.no-underline {\n  text-decoration-line: none;\n}\n.opacity-25 {\n  opacity: 0.25;\n}\n.opacity-75 {\n  opacity: 0.75;\n}\n.opacity-0 {\n  opacity: 0;\n}\n.opacity-100 {\n  opacity: 1;\n}\n.opacity-30 {\n  opacity: 0.3;\n}\n.opacity-50 {\n  opacity: 0.5;\n}\n.opacity-20 {\n  opacity: 0.2;\n}\n.opacity-60 {\n  opacity: 0.6;\n}\n.opacity-40 {\n  opacity: 0.4;\n}\n.shadow-none {\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-sm {\n  --tw-shadow: var(--elevation-sm);\n  --tw-shadow-colored: var(--elevation-sm);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-md {\n  --tw-shadow: var(--elevation-md);\n  --tw-shadow-colored: var(--elevation-md);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.outline {\n  outline-style: solid;\n}\n.ring {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.drop-shadow {\n  --tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.grayscale {\n  --tw-grayscale: grayscale(100%);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.invert {\n  --tw-invert: invert(100%);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-transform {\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-opacity {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-150 {\n  transition-duration: 150ms;\n}\n.duration-300 {\n  transition-duration: 300ms;\n}\n.duration-100 {\n  transition-duration: 100ms;\n}\n.duration-1000 {\n  transition-duration: 1000ms;\n}\n.ease-out {\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.ease-linear {\n  transition-timing-function: linear;\n}\n.scrollbar-hide {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.scrollbar-hide::-webkit-scrollbar {\n  display: none;\n}\n.\\[-webkit-line-clamp\\:3\\] {\n  -webkit-line-clamp: 3;\n}\n.\\[text-overflow\\:ellipsis\\] {\n  text-overflow: ellipsis;\n}\n.\\[display\\:-webkit-box\\] {\n  display: -webkit-box;\n}\n.\\[-webkit-box-orient\\:vertical\\] {\n  -webkit-box-orient: vertical;\n}\n.before\\:absolute::before {\n  content: var(--tw-content);\n  position: absolute;\n}\n.before\\:top-\\[28px\\]::before {\n  content: var(--tw-content);\n  top: 28px;\n}\n.before\\:left-\\[9px\\]::before {\n  content: var(--tw-content);\n  left: 9px;\n}\n.before\\:top-\\[-6px\\]::before {\n  content: var(--tw-content);\n  top: -6px;\n}\n.before\\:left-\\[-6\\.5px\\]::before {\n  content: var(--tw-content);\n  left: -6.5px;\n}\n.before\\:top-0::before {\n  content: var(--tw-content);\n  top: 0px;\n}\n.before\\:left-\\[11\\.5px\\]::before {\n  content: var(--tw-content);\n  left: 11.5px;\n}\n.before\\:top-\\[-3px\\]::before {\n  content: var(--tw-content);\n  top: -3px;\n}\n.before\\:left-\\[-16\\.5px\\]::before {\n  content: var(--tw-content);\n  left: -16.5px;\n}\n.before\\:left-\\[16\\.5px\\]::before {\n  content: var(--tw-content);\n  left: 16.5px;\n}\n.before\\:h-\\[calc\\(100\\%-28px\\)\\]::before {\n  content: var(--tw-content);\n  height: calc(100% - 28px);\n}\n.before\\:h-full::before {\n  content: var(--tw-content);\n  height: 100%;\n}\n.before\\:h-\\[calc\\(100\\%\\+6px\\)\\]::before {\n  content: var(--tw-content);\n  height: calc(100% + 6px);\n}\n.before\\:border-y-0::before {\n  content: var(--tw-content);\n  border-top-width: 0rem;\n  border-bottom-width: 0rem;\n}\n.before\\:border-l-\\[1px\\]::before {\n  content: var(--tw-content);\n  border-left-width: 1px;\n}\n.before\\:border-r-\\[0px\\]::before {\n  content: var(--tw-content);\n  border-right-width: 0px;\n}\n.before\\:border-solid::before {\n  content: var(--tw-content);\n  border-style: solid;\n}\n.before\\:border-tone-4::before {\n  content: var(--tw-content);\n  border-color: var(--color-tone-4);\n}\n.before\\:content-\\[\\'\\'\\]::before {\n  --tw-content: '';\n  content: var(--tw-content);\n}\n.after\\:absolute::after {\n  content: var(--tw-content);\n  position: absolute;\n}\n.after\\:-top-\\[8px\\]::after {\n  content: var(--tw-content);\n  top: -8px;\n}\n.after\\:-left-\\[6\\.5px\\]::after {\n  content: var(--tw-content);\n  left: -6.5px;\n}\n.after\\:bottom-\\[15px\\]::after {\n  content: var(--tw-content);\n  bottom: 15px;\n}\n.after\\:left-\\[11\\.5px\\]::after {\n  content: var(--tw-content);\n  left: 11.5px;\n}\n.after\\:-top-sm::after {\n  content: var(--tw-content);\n  top: -0.75rem;\n}\n.after\\:left-\\[-16\\.5px\\]::after {\n  content: var(--tw-content);\n  left: -16.5px;\n}\n.after\\:left-\\[3\\.5px\\]::after {\n  content: var(--tw-content);\n  left: 3.5px;\n}\n.after\\:h-\\[20px\\]::after {\n  content: var(--tw-content);\n  height: 20px;\n}\n.after\\:h-\\[54px\\]::after {\n  content: var(--tw-content);\n  height: 54px;\n}\n.after\\:h-\\[26px\\]::after {\n  content: var(--tw-content);\n  height: 26px;\n}\n.after\\:h-\\[30px\\]::after {\n  content: var(--tw-content);\n  height: 30px;\n}\n.after\\:w-\\[6px\\]::after {\n  content: var(--tw-content);\n  width: 6px;\n}\n.after\\:w-md::after {\n  content: var(--tw-content);\n  width: 1rem;\n}\n.after\\:w-\\[23px\\]::after {\n  content: var(--tw-content);\n  width: 23px;\n}\n.after\\:rounded-bl-\\[12px\\]::after {\n  content: var(--tw-content);\n  border-bottom-left-radius: 12px;\n}\n.after\\:border-y-0::after {\n  content: var(--tw-content);\n  border-top-width: 0rem;\n  border-bottom-width: 0rem;\n}\n.after\\:border-l-\\[1px\\]::after {\n  content: var(--tw-content);\n  border-left-width: 1px;\n}\n.after\\:border-r-\\[0px\\]::after {\n  content: var(--tw-content);\n  border-right-width: 0px;\n}\n.after\\:border-b-\\[1px\\]::after {\n  content: var(--tw-content);\n  border-bottom-width: 1px;\n}\n.after\\:border-solid::after {\n  content: var(--tw-content);\n  border-style: solid;\n}\n.after\\:border-tone-4::after {\n  content: var(--tw-content);\n  border-color: var(--color-tone-4);\n}\n.after\\:content-\\[\\'\\'\\]::after {\n  --tw-content: '';\n  content: var(--tw-content);\n}\n.first\\:ml-0:first-child {\n  margin-left: 0px;\n}\n.visited\\:bg-transparent:visited {\n  background-color: transparent;\n}\n.hover\\:border-secondary-background-selected:hover {\n  border-color: var(--color-secondary-background-selected);\n}\n.hover\\:border-secondary-background-hover:hover {\n  border-color: var(--color-secondary-background-hover);\n}\n.hover\\:bg-neutral-background-hover:hover {\n  background-color: var(--color-neutral-background-hover);\n}\n.hover\\:bg-transparent:hover {\n  background-color: transparent;\n}\n.hover\\:bg-secondary-background-selected:hover {\n  background-color: var(--color-secondary-background-selected);\n}\n.hover\\:bg-secondary-background-hover:hover {\n  background-color: var(--color-secondary-background-hover);\n}\n.hover\\:bg-neutral-background-selected:hover {\n  background-color: var(--color-neutral-background-selected);\n}\n.hover\\:bg-brand-background-hover:hover {\n  background-color: var(--color-brand-background-hover);\n}\n.hover\\:text-secondary:hover {\n  color: var(--color-secondary);\n}\n.hover\\:text-danger-content-hover:hover {\n  color: var(--color-danger-content-hover);\n}\n.hover\\:text-secondary-hover:hover {\n  color: var(--color-secondary-hover);\n}\n.hover\\:text-global-white:hover {\n  color: var(--color-global-white);\n}\n.hover\\:text-action-upvote:hover {\n  color: var(--color-action-upvote);\n}\n.hover\\:text-action-downvote:hover {\n  color: var(--color-action-downvote);\n}\n.hover\\:underline:hover {\n  text-decoration-line: underline;\n}\n.hover\\:no-underline:hover {\n  text-decoration-line: none;\n}\n.focus\\:bg-transparent:focus {\n  background-color: transparent;\n}\n.focus-visible\\:text-action-upvote:focus-visible {\n  color: var(--color-action-upvote);\n}\n.focus-visible\\:text-action-downvote:focus-visible {\n  color: var(--color-action-downvote);\n}\n.active\\:bg-transparent:active {\n  background-color: transparent;\n}\n.active\\:bg-interactive-pressed:active {\n  background-color: var(--color-interactive-pressed);\n}\n.active\\:bg-secondary-background:active {\n  background-color: var(--color-secondary-background);\n}\n.disabled\\:bg-interactive-background-disabled:disabled {\n  background-color: var(--color-interactive-background-disabled);\n}\n.disabled\\:text-interactive-content-disabled:disabled {\n  color: var(--color-interactive-content-disabled);\n}\n", ""]), t.a = o
		},
		"./node_modules/css-loader/dist/runtime/api.js": function(n, t, r) {
			"use strict";
			n.exports = function(n) {
				var t = [];
				return t.toString = function() {
					return this.map((function(t) {
						var r = function(n, t) {
							var r = n[1] || "",
								e = n[3];
							if (!e) return r;
							if (t && "function" == typeof btoa) {
								var o = (i = e, l = btoa(unescape(encodeURIComponent(JSON.stringify(i)))), c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l), "/*# ".concat(c, " */")),
									a = e.sources.map((function(n) {
										return "/*# sourceURL=".concat(e.sourceRoot || "").concat(n, " */")
									}));
								return [r].concat(a).concat([o]).join("\n")
							}
							var i, l, c;
							return [r].join("\n")
						}(t, n);
						return t[2] ? "@media ".concat(t[2], " {").concat(r, "}") : r
					})).join("")
				}, t.i = function(n, r, e) {
					"string" == typeof n && (n = [
						[null, n, ""]
					]);
					var o = {};
					if (e)
						for (var a = 0; a < this.length; a++) {
							var i = this[a][0];
							null != i && (o[i] = !0)
						}
					for (var l = 0; l < n.length; l++) {
						var c = [].concat(n[l]);
						e && o[c[0]] || (r && (c[2] ? c[2] = "".concat(r, " and ").concat(c[2]) : c[2] = r), t.push(c))
					}
				}, t
			}
		},
		"./node_modules/lit-html/directive.js": function(n, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return e
			})), r.d(t, "c", (function() {
				return o
			}));
			const e = {
					ATTRIBUTE: 1,
					CHILD: 2,
					PROPERTY: 3,
					BOOLEAN_ATTRIBUTE: 4,
					EVENT: 5,
					ELEMENT: 6
				},
				o = n => (...t) => ({
					_$litDirective$: n,
					values: t
				});
			class a {
				constructor(n) {}
				get _$AU() {
					return this._$AM._$AU
				}
				_$AT(n, t, r) {
					this._$Ct = n, this._$AM = t, this._$Ci = r
				}
				_$AS(n, t) {
					return this.update(n, t)
				}
				update(n, t) {
					return this.render(...t)
				}
			}
		},
		"./node_modules/lit-html/lit-html.js": function(n, t, r) {
			"use strict";
			var e;
			r.d(t, "a", (function() {
				return I
			})), r.d(t, "b", (function() {
				return _
			})), r.d(t, "c", (function() {
				return A
			})), r.d(t, "d", (function() {
				return S
			})), r.d(t, "e", (function() {
				return z
			})), r.d(t, "f", (function() {
				return $
			}));
			const o = window,
				a = o.trustedTypes,
				i = a ? a.createPolicy("lit-html", {
					createHTML: n => n
				}) : void 0,
				l = `lit$${(Math.random()+"").slice(9)}$`,
				c = "?" + l,
				d = `<${c}>`,
				s = document,
				u = (n = "") => s.createComment(n),
				b = n => null === n || "object" != typeof n && "function" != typeof n,
				p = Array.isArray,
				h = n => p(n) || "function" == typeof(null == n ? void 0 : n[Symbol.iterator]),
				m = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
				g = /-->/g,
				v = />/g,
				f = RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)", "g"),
				w = /'/g,
				x = /"/g,
				y = /^(?:script|style|textarea|title)$/i,
				k = n => (t, ...r) => ({
					_$litType$: n,
					strings: t,
					values: r
				}),
				_ = k(1),
				$ = k(2),
				A = Symbol.for("lit-noChange"),
				S = Symbol.for("lit-nothing"),
				E = new WeakMap,
				z = (n, t, r) => {
					var e, o;
					const a = null !== (e = null == r ? void 0 : r.renderBefore) && void 0 !== e ? e : t;
					let i = a._$litPart$;
					if (void 0 === i) {
						const n = null !== (o = null == r ? void 0 : r.renderBefore) && void 0 !== o ? o : null;
						a._$litPart$ = i = new U(t.insertBefore(u(), n), n, void 0, null != r ? r : {})
					}
					return i._$AI(n), i
				},
				C = s.createTreeWalker(s, 129, null, !1),
				P = (n, t) => {
					const r = n.length - 1,
						e = [];
					let o, a = 2 === t ? "<svg>" : "",
						c = m;
					for (let i = 0; i < r; i++) {
						const t = n[i];
						let r, s, u = -1,
							b = 0;
						for (; b < t.length && (c.lastIndex = b, null !== (s = c.exec(t)));) b = c.lastIndex, c === m ? "!--" === s[1] ? c = g : void 0 !== s[1] ? c = v : void 0 !== s[2] ? (y.test(s[2]) && (o = RegExp("</" + s[2], "g")), c = f) : void 0 !== s[3] && (c = f) : c === f ? ">" === s[0] ? (c = null != o ? o : m, u = -1) : void 0 === s[1] ? u = -2 : (u = c.lastIndex - s[2].length, r = s[1], c = void 0 === s[3] ? f : '"' === s[3] ? x : w) : c === x || c === w ? c = f : c === g || c === v ? c = m : (c = f, o = void 0);
						const p = c === f && n[i + 1].startsWith("/>") ? " " : "";
						a += c === m ? t + d : u >= 0 ? (e.push(r), t.slice(0, u) + "$lit$" + t.slice(u) + l + p) : t + l + (-2 === u ? (e.push(void 0), i) : p)
					}
					const s = a + (n[r] || "<?>") + (2 === t ? "</svg>" : "");
					if (!Array.isArray(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
					return [void 0 !== i ? i.createHTML(s) : s, e]
				};
			class T {
				constructor({
					strings: n,
					_$litType$: t
				}, r) {
					let e;
					this.parts = [];
					let o = 0,
						i = 0;
					const d = n.length - 1,
						s = this.parts,
						[b, p] = P(n, t);
					if (this.el = T.createElement(b, r), C.currentNode = this.el.content, 2 === t) {
						const n = this.el.content,
							t = n.firstChild;
						t.remove(), n.append(...t.childNodes)
					}
					for (; null !== (e = C.nextNode()) && s.length < d;) {
						if (1 === e.nodeType) {
							if (e.hasAttributes()) {
								const n = [];
								for (const t of e.getAttributeNames())
									if (t.endsWith("$lit$") || t.startsWith(l)) {
										const r = p[i++];
										if (n.push(t), void 0 !== r) {
											const n = e.getAttribute(r.toLowerCase() + "$lit$").split(l),
												t = /([.?@])?(.*)/.exec(r);
											s.push({
												type: 1,
												index: o,
												name: t[2],
												strings: n,
												ctor: "." === t[1] ? H : "?" === t[1] ? M : "@" === t[1] ? L : R
											})
										} else s.push({
											type: 6,
											index: o
										})
									} for (const t of n) e.removeAttribute(t)
							}
							if (y.test(e.tagName)) {
								const n = e.textContent.split(l),
									t = n.length - 1;
								if (t > 0) {
									e.textContent = a ? a.emptyScript : "";
									for (let r = 0; r < t; r++) e.append(n[r], u()), C.nextNode(), s.push({
										type: 2,
										index: ++o
									});
									e.append(n[t], u())
								}
							}
						} else if (8 === e.nodeType)
							if (e.data === c) s.push({
								type: 2,
								index: o
							});
							else {
								let n = -1;
								for (; - 1 !== (n = e.data.indexOf(l, n + 1));) s.push({
									type: 7,
									index: o
								}), n += l.length - 1
							} o++
					}
				}
				static createElement(n, t) {
					const r = s.createElement("template");
					return r.innerHTML = n, r
				}
			}

			function j(n, t, r = n, e) {
				var o, a, i, l;
				if (t === A) return t;
				let c = void 0 !== e ? null === (o = r._$Cl) || void 0 === o ? void 0 : o[e] : r._$Cu;
				const d = b(t) ? void 0 : t._$litDirective$;
				return (null == c ? void 0 : c.constructor) !== d && (null === (a = null == c ? void 0 : c._$AO) || void 0 === a || a.call(c, !1), void 0 === d ? c = void 0 : (c = new d(n))._$AT(n, r, e), void 0 !== e ? (null !== (i = (l = r)._$Cl) && void 0 !== i ? i : l._$Cl = [])[e] = c : r._$Cu = c), void 0 !== c && (t = j(n, c._$AS(n, t.values), c, e)), t
			}
			class O {
				constructor(n, t) {
					this.v = [], this._$AN = void 0, this._$AD = n, this._$AM = t
				}
				get parentNode() {
					return this._$AM.parentNode
				}
				get _$AU() {
					return this._$AM._$AU
				}
				p(n) {
					var t;
					const {
						el: {
							content: r
						},
						parts: e
					} = this._$AD, o = (null !== (t = null == n ? void 0 : n.creationScope) && void 0 !== t ? t : s).importNode(r, !0);
					C.currentNode = o;
					let a = C.nextNode(),
						i = 0,
						l = 0,
						c = e[0];
					for (; void 0 !== c;) {
						if (i === c.index) {
							let t;
							2 === c.type ? t = new U(a, a.nextSibling, this, n) : 1 === c.type ? t = new c.ctor(a, c.name, c.strings, this, n) : 6 === c.type && (t = new B(a, this, n)), this.v.push(t), c = e[++l]
						}
						i !== (null == c ? void 0 : c.index) && (a = C.nextNode(), i++)
					}
					return o
				}
				m(n) {
					let t = 0;
					for (const r of this.v) void 0 !== r && (void 0 !== r.strings ? (r._$AI(n, r, t), t += r.strings.length - 2) : r._$AI(n[t])), t++
				}
			}
			class U {
				constructor(n, t, r, e) {
					var o;
					this.type = 2, this._$AH = S, this._$AN = void 0, this._$AA = n, this._$AB = t, this._$AM = r, this.options = e, this._$C_ = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o
				}
				get _$AU() {
					var n, t;
					return null !== (t = null === (n = this._$AM) || void 0 === n ? void 0 : n._$AU) && void 0 !== t ? t : this._$C_
				}
				get parentNode() {
					let n = this._$AA.parentNode;
					const t = this._$AM;
					return void 0 !== t && 11 === n.nodeType && (n = t.parentNode), n
				}
				get startNode() {
					return this._$AA
				}
				get endNode() {
					return this._$AB
				}
				_$AI(n, t = this) {
					n = j(this, n, t), b(n) ? n === S || null == n || "" === n ? (this._$AH !== S && this._$AR(), this._$AH = S) : n !== this._$AH && n !== A && this.$(n) : void 0 !== n._$litType$ ? this.T(n) : void 0 !== n.nodeType ? this.k(n) : h(n) ? this.O(n) : this.$(n)
				}
				S(n, t = this._$AB) {
					return this._$AA.parentNode.insertBefore(n, t)
				}
				k(n) {
					this._$AH !== n && (this._$AR(), this._$AH = this.S(n))
				}
				$(n) {
					this._$AH !== S && b(this._$AH) ? this._$AA.nextSibling.data = n : this.k(s.createTextNode(n)), this._$AH = n
				}
				T(n) {
					var t;
					const {
						values: r,
						_$litType$: e
					} = n, o = "number" == typeof e ? this._$AC(n) : (void 0 === e.el && (e.el = T.createElement(e.h, this.options)), e);
					if ((null === (t = this._$AH) || void 0 === t ? void 0 : t._$AD) === o) this._$AH.m(r);
					else {
						const n = new O(o, this),
							t = n.p(this.options);
						n.m(r), this.k(t), this._$AH = n
					}
				}
				_$AC(n) {
					let t = E.get(n.strings);
					return void 0 === t && E.set(n.strings, t = new T(n)), t
				}
				O(n) {
					p(this._$AH) || (this._$AH = [], this._$AR());
					const t = this._$AH;
					let r, e = 0;
					for (const o of n) e === t.length ? t.push(r = new U(this.S(u()), this.S(u()), this, this.options)) : r = t[e], r._$AI(o), e++;
					e < t.length && (this._$AR(r && r._$AB.nextSibling, e), t.length = e)
				}
				_$AR(n = this._$AA.nextSibling, t) {
					var r;
					for (null === (r = this._$AP) || void 0 === r || r.call(this, !1, !0, t); n && n !== this._$AB;) {
						const t = n.nextSibling;
						n.remove(), n = t
					}
				}
				setConnected(n) {
					var t;
					void 0 === this._$AM && (this._$C_ = n, null === (t = this._$AP) || void 0 === t || t.call(this, n))
				}
			}
			class R {
				constructor(n, t, r, e, o) {
					this.type = 1, this._$AH = S, this._$AN = void 0, this.element = n, this.name = t, this._$AM = e, this.options = o, r.length > 2 || "" !== r[0] || "" !== r[1] ? (this._$AH = Array(r.length - 1).fill(new String), this.strings = r) : this._$AH = S
				}
				get tagName() {
					return this.element.tagName
				}
				get _$AU() {
					return this._$AM._$AU
				}
				_$AI(n, t = this, r, e) {
					const o = this.strings;
					let a = !1;
					if (void 0 === o) n = j(this, n, t, 0), (a = !b(n) || n !== this._$AH && n !== A) && (this._$AH = n);
					else {
						const e = n;
						let i, l;
						for (n = o[0], i = 0; i < o.length - 1; i++)(l = j(this, e[r + i], t, i)) === A && (l = this._$AH[i]), a || (a = !b(l) || l !== this._$AH[i]), l === S ? n = S : n !== S && (n += (null != l ? l : "") + o[i + 1]), this._$AH[i] = l
					}
					a && !e && this.P(n)
				}
				P(n) {
					n === S ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != n ? n : "")
				}
			}
			class H extends R {
				constructor() {
					super(...arguments), this.type = 3
				}
				P(n) {
					this.element[this.name] = n === S ? void 0 : n
				}
			}
			const N = a ? a.emptyScript : "";
			class M extends R {
				constructor() {
					super(...arguments), this.type = 4
				}
				P(n) {
					n && n !== S ? this.element.setAttribute(this.name, N) : this.element.removeAttribute(this.name)
				}
			}
			class L extends R {
				constructor(n, t, r, e, o) {
					super(n, t, r, e, o), this.type = 5
				}
				_$AI(n, t = this) {
					var r;
					if ((n = null !== (r = j(this, n, t, 0)) && void 0 !== r ? r : S) === A) return;
					const e = this._$AH,
						o = n === S && e !== S || n.capture !== e.capture || n.once !== e.once || n.passive !== e.passive,
						a = n !== S && (e === S || o);
					o && this.element.removeEventListener(this.name, this, e), a && this.element.addEventListener(this.name, this, n), this._$AH = n
				}
				handleEvent(n) {
					var t, r;
					"function" == typeof this._$AH ? this._$AH.call(null !== (r = null === (t = this.options) || void 0 === t ? void 0 : t.host) && void 0 !== r ? r : this.element, n) : this._$AH.handleEvent(n)
				}
			}
			class B {
				constructor(n, t, r) {
					this.element = n, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r
				}
				get _$AU() {
					return this._$AM._$AU
				}
				_$AI(n) {
					j(this, n)
				}
			}
			const I = {
					A: "$lit$",
					M: l,
					C: c,
					L: 1,
					R: P,
					D: O,
					V: h,
					I: j,
					H: U,
					N: R,
					U: M,
					B: L,
					F: H,
					W: B
				},
				X = o.litHtmlPolyfillSupport;
			null == X || X(T, U), (null !== (e = o.litHtmlVersions) && void 0 !== e ? e : o.litHtmlVersions = []).push("2.3.1")
		},
		"./node_modules/lit/decorators.js": function(n, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return e
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "c", (function() {
				return c
			}));
			const e = n => t => "function" == typeof t ? ((n, t) => (customElements.define(n, t), t))(n, t) : ((n, t) => {
					const {
						kind: r,
						elements: e
					} = t;
					return {
						kind: r,
						elements: e,
						finisher(t) {
							customElements.define(n, t)
						}
					}
				})(n, t),
				o = (n, t) => "method" !== t.kind || !t.descriptor || "value" in t.descriptor ? {
					kind: "field",
					key: Symbol(),
					placement: "own",
					descriptor: {},
					originalKey: t.key,
					initializer() {
						"function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
					},
					finisher(r) {
						r.createProperty(t.key, n)
					}
				} : {
					...t,
					finisher(r) {
						r.createProperty(t.key, n)
					}
				};

			function a(n) {
				return (t, r) => void 0 !== r ? ((n, t, r) => {
					t.constructor.createProperty(r, n)
				})(n, t, r) : o(n, t)
			}

			function i(n) {
				return a({
					...n,
					state: !0
				})
			}
			const l = ({
				finisher: n,
				descriptor: t
			}) => (r, e) => {
				var o;
				if (void 0 === e) {
					const e = null !== (o = r.originalKey) && void 0 !== o ? o : r.key,
						a = null != t ? {
							kind: "method",
							placement: "prototype",
							key: e,
							descriptor: t(r.key)
						} : {
							...r,
							key: e
						};
					return null != n && (a.finisher = function(t) {
						n(t, e)
					}), a
				} {
					const o = r.constructor;
					void 0 !== t && Object.defineProperty(r, e, t(e)), null == n || n(o, e)
				}
			};

			function c(n, t) {
				return l({
					descriptor: r => {
						const e = {
							get() {
								var t, r;
								return null !== (r = null === (t = this.renderRoot) || void 0 === t ? void 0 : t.querySelector(n)) && void 0 !== r ? r : null
							},
							enumerable: !0,
							configurable: !0
						};
						if (t) {
							const t = "symbol" == typeof r ? Symbol() : "__" + r;
							e.get = function() {
								var r, e;
								return void 0 === this[t] && (this[t] = null !== (e = null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelector(n)) && void 0 !== e ? e : null), this[t]
							}
						}
						return e
					}
				})
			}
			var d;
			null === (d = window.HTMLSlotElement) || void 0 === d || d.prototype.assignedElements
		},
		"./node_modules/lit/index.js": function(n, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return k.b
			})), r.d(t, "d", (function() {
				return k.c
			})), r.d(t, "e", (function() {
				return k.d
			})), r.d(t, "f", (function() {
				return k.e
			})), r.d(t, "g", (function() {
				return k.f
			})), r.d(t, "a", (function() {
				return _
			}));
			const e = window,
				o = e.ShadowRoot && (void 0 === e.ShadyCSS || e.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
				a = Symbol(),
				i = new WeakMap;
			class l {
				constructor(n, t, r) {
					if (this._$cssResult$ = !0, r !== a) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
					this.cssText = n, this.t = t
				}
				get styleSheet() {
					let n = this.o;
					const t = this.t;
					if (o && void 0 === n) {
						const r = void 0 !== t && 1 === t.length;
						r && (n = i.get(t)), void 0 === n && ((this.o = n = new CSSStyleSheet).replaceSync(this.cssText), r && i.set(t, n))
					}
					return n
				}
				toString() {
					return this.cssText
				}
			}
			const c = (n, ...t) => {
					const r = 1 === n.length ? n[0] : t.reduce((t, r, e) => t + (n => {
						if (!0 === n._$cssResult$) return n.cssText;
						if ("number" == typeof n) return n;
						throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
					})(r) + n[e + 1], n[0]);
					return new l(r, n, a)
				},
				d = (n, t) => {
					o ? n.adoptedStyleSheets = t.map(n => n instanceof CSSStyleSheet ? n : n.styleSheet) : t.forEach(t => {
						const r = document.createElement("style"),
							o = e.litNonce;
						void 0 !== o && r.setAttribute("nonce", o), r.textContent = t.cssText, n.appendChild(r)
					})
				},
				s = o ? n => n : n => n instanceof CSSStyleSheet ? (n => {
					let t = "";
					for (const r of n.cssRules) t += r.cssText;
					return (n => new l("string" == typeof n ? n : n + "", void 0, a))(t)
				})(n) : n;
			var u;
			const b = window,
				p = b.trustedTypes,
				h = p ? p.emptyScript : "",
				m = b.reactiveElementPolyfillSupport,
				g = {
					toAttribute(n, t) {
						switch (t) {
							case Boolean:
								n = n ? h : null;
								break;
							case Object:
							case Array:
								n = null == n ? n : JSON.stringify(n)
						}
						return n
					},
					fromAttribute(n, t) {
						let r = n;
						switch (t) {
							case Boolean:
								r = null !== n;
								break;
							case Number:
								r = null === n ? null : Number(n);
								break;
							case Object:
							case Array:
								try {
									r = JSON.parse(n)
								} catch (n) {
									r = null
								}
						}
						return r
					}
				},
				v = (n, t) => t !== n && (t == t || n == n),
				f = {
					attribute: !0,
					type: String,
					converter: g,
					reflect: !1,
					hasChanged: v
				};
			class w extends HTMLElement {
				constructor() {
					super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u()
				}
				static addInitializer(n) {
					var t;
					null !== (t = this.h) && void 0 !== t || (this.h = []), this.h.push(n)
				}
				static get observedAttributes() {
					this.finalize();
					const n = [];
					return this.elementProperties.forEach((t, r) => {
						const e = this._$Ep(r, t);
						void 0 !== e && (this._$Ev.set(e, r), n.push(e))
					}), n
				}
				static createProperty(n, t = f) {
					if (t.state && (t.attribute = !1), this.finalize(), this.elementProperties.set(n, t), !t.noAccessor && !this.prototype.hasOwnProperty(n)) {
						const r = "symbol" == typeof n ? Symbol() : "__" + n,
							e = this.getPropertyDescriptor(n, r, t);
						void 0 !== e && Object.defineProperty(this.prototype, n, e)
					}
				}
				static getPropertyDescriptor(n, t, r) {
					return {
						get() {
							return this[t]
						},
						set(e) {
							const o = this[n];
							this[t] = e, this.requestUpdate(n, o, r)
						},
						configurable: !0,
						enumerable: !0
					}
				}
				static getPropertyOptions(n) {
					return this.elementProperties.get(n) || f
				}
				static finalize() {
					if (this.hasOwnProperty("finalized")) return !1;
					this.finalized = !0;
					const n = Object.getPrototypeOf(this);
					if (n.finalize(), this.elementProperties = new Map(n.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
						const n = this.properties,
							t = [...Object.getOwnPropertyNames(n), ...Object.getOwnPropertySymbols(n)];
						for (const r of t) this.createProperty(r, n[r])
					}
					return this.elementStyles = this.finalizeStyles(this.styles), !0
				}
				static finalizeStyles(n) {
					const t = [];
					if (Array.isArray(n)) {
						const r = new Set(n.flat(1 / 0).reverse());
						for (const n of r) t.unshift(s(n))
					} else void 0 !== n && t.push(s(n));
					return t
				}
				static _$Ep(n, t) {
					const r = t.attribute;
					return !1 === r ? void 0 : "string" == typeof r ? r : "string" == typeof n ? n.toLowerCase() : void 0
				}
				u() {
					var n;
					this._$E_ = new Promise(n => this.enableUpdating = n), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (n = this.constructor.h) || void 0 === n || n.forEach(n => n(this))
				}
				addController(n) {
					var t, r;
					(null !== (t = this._$ES) && void 0 !== t ? t : this._$ES = []).push(n), void 0 !== this.renderRoot && this.isConnected && (null === (r = n.hostConnected) || void 0 === r || r.call(n))
				}
				removeController(n) {
					var t;
					null === (t = this._$ES) || void 0 === t || t.splice(this._$ES.indexOf(n) >>> 0, 1)
				}
				_$Eg() {
					this.constructor.elementProperties.forEach((n, t) => {
						this.hasOwnProperty(t) && (this._$Ei.set(t, this[t]), delete this[t])
					})
				}
				createRenderRoot() {
					var n;
					const t = null !== (n = this.shadowRoot) && void 0 !== n ? n : this.attachShadow(this.constructor.shadowRootOptions);
					return d(t, this.constructor.elementStyles), t
				}
				connectedCallback() {
					var n;
					void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (n = this._$ES) || void 0 === n || n.forEach(n => {
						var t;
						return null === (t = n.hostConnected) || void 0 === t ? void 0 : t.call(n)
					})
				}
				enableUpdating(n) {}
				disconnectedCallback() {
					var n;
					null === (n = this._$ES) || void 0 === n || n.forEach(n => {
						var t;
						return null === (t = n.hostDisconnected) || void 0 === t ? void 0 : t.call(n)
					})
				}
				attributeChangedCallback(n, t, r) {
					this._$AK(n, r)
				}
				_$EO(n, t, r = f) {
					var e;
					const o = this.constructor._$Ep(n, r);
					if (void 0 !== o && !0 === r.reflect) {
						const a = (void 0 !== (null === (e = r.converter) || void 0 === e ? void 0 : e.toAttribute) ? r.converter : g).toAttribute(t, r.type);
						this._$El = n, null == a ? this.removeAttribute(o) : this.setAttribute(o, a), this._$El = null
					}
				}
				_$AK(n, t) {
					var r;
					const e = this.constructor,
						o = e._$Ev.get(n);
					if (void 0 !== o && this._$El !== o) {
						const n = e.getPropertyOptions(o),
							a = "function" == typeof n.converter ? {
								fromAttribute: n.converter
							} : void 0 !== (null === (r = n.converter) || void 0 === r ? void 0 : r.fromAttribute) ? n.converter : g;
						this._$El = o, this[o] = a.fromAttribute(t, n.type), this._$El = null
					}
				}
				requestUpdate(n, t, r) {
					let e = !0;
					void 0 !== n && (((r = r || this.constructor.getPropertyOptions(n)).hasChanged || v)(this[n], t) ? (this._$AL.has(n) || this._$AL.set(n, t), !0 === r.reflect && this._$El !== n && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(n, r))) : e = !1), !this.isUpdatePending && e && (this._$E_ = this._$Ej())
				}
				async _$Ej() {
					this.isUpdatePending = !0;
					try {
						await this._$E_
					} catch (n) {
						Promise.reject(n)
					}
					const n = this.scheduleUpdate();
					return null != n && await n, !this.isUpdatePending
				}
				scheduleUpdate() {
					return this.performUpdate()
				}
				performUpdate() {
					var n;
					if (!this.isUpdatePending) return;
					this.hasUpdated, this._$Ei && (this._$Ei.forEach((n, t) => this[t] = n), this._$Ei = void 0);
					let t = !1;
					const r = this._$AL;
					try {
						(t = this.shouldUpdate(r)) ? (this.willUpdate(r), null === (n = this._$ES) || void 0 === n || n.forEach(n => {
							var t;
							return null === (t = n.hostUpdate) || void 0 === t ? void 0 : t.call(n)
						}), this.update(r)) : this._$Ek()
					} catch (n) {
						throw t = !1, this._$Ek(), n
					}
					t && this._$AE(r)
				}
				willUpdate(n) {}
				_$AE(n) {
					var t;
					null === (t = this._$ES) || void 0 === t || t.forEach(n => {
						var t;
						return null === (t = n.hostUpdated) || void 0 === t ? void 0 : t.call(n)
					}), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(n)), this.updated(n)
				}
				_$Ek() {
					this._$AL = new Map, this.isUpdatePending = !1
				}
				get updateComplete() {
					return this.getUpdateComplete()
				}
				getUpdateComplete() {
					return this._$E_
				}
				shouldUpdate(n) {
					return !0
				}
				update(n) {
					void 0 !== this._$EC && (this._$EC.forEach((n, t) => this._$EO(t, this[t], n)), this._$EC = void 0), this._$Ek()
				}
				updated(n) {}
				firstUpdated(n) {}
			}
			w.finalized = !0, w.elementProperties = new Map, w.elementStyles = [], w.shadowRootOptions = {
				mode: "open"
			}, null == m || m({
				ReactiveElement: w
			}), (null !== (u = b.reactiveElementVersions) && void 0 !== u ? u : b.reactiveElementVersions = []).push("1.4.1");
			var x, y, k = r("./node_modules/lit-html/lit-html.js");
			class _ extends w {
				constructor() {
					super(...arguments), this.renderOptions = {
						host: this
					}, this._$Do = void 0
				}
				createRenderRoot() {
					var n, t;
					const r = super.createRenderRoot();
					return null !== (n = (t = this.renderOptions).renderBefore) && void 0 !== n || (t.renderBefore = r.firstChild), r
				}
				update(n) {
					const t = this.render();
					this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(n), this._$Do = Object(k.e)(t, this.renderRoot, this.renderOptions)
				}
				connectedCallback() {
					var n;
					super.connectedCallback(), null === (n = this._$Do) || void 0 === n || n.setConnected(!0)
				}
				disconnectedCallback() {
					var n;
					super.disconnectedCallback(), null === (n = this._$Do) || void 0 === n || n.setConnected(!1)
				}
				render() {
					return k.c
				}
			}
			_.finalized = !0, _._$litElement$ = !0, null === (x = globalThis.litElementHydrateSupport) || void 0 === x || x.call(globalThis, {
				LitElement: _
			});
			const $ = globalThis.litElementPolyfillSupport;
			null == $ || $({
				LitElement: _
			});
			(null !== (y = globalThis.litElementVersions) && void 0 !== y ? y : globalThis.litElementVersions = []).push("3.2.2")
		},
		"./node_modules/tslib/tslib.es6.js": function(n, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return o
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "l", (function() {
				return i
			})), r.d(t, "h", (function() {
				return l
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "j", (function() {
				return d
			})), r.d(t, "n", (function() {
				return s
			})), r.d(t, "k", (function() {
				return u
			})), r.d(t, "m", (function() {
				return b
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "g", (function() {
				return v
			}));
			var e = function(n, t) {
				return (e = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(n, t) {
						n.__proto__ = t
					} || function(n, t) {
						for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
					})(n, t)
			};

			function o(n, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

				function r() {
					this.constructor = n
				}
				e(n, t), n.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
			}
			var a = function() {
				return (a = Object.assign || function(n) {
					for (var t, r = 1, e = arguments.length; r < e; r++)
						for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
					return n
				}).apply(this, arguments)
			};

			function i(n, t) {
				var r = {};
				for (var e in n) Object.prototype.hasOwnProperty.call(n, e) && t.indexOf(e) < 0 && (r[e] = n[e]);
				if (null != n && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (e = Object.getOwnPropertySymbols(n); o < e.length; o++) t.indexOf(e[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, e[o]) && (r[e[o]] = n[e[o]])
				}
				return r
			}

			function l(n, t, r, e) {
				var o, a = arguments.length,
					i = a < 3 ? t : null === e ? e = Object.getOwnPropertyDescriptor(t, r) : e;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(n, t, r, e);
				else
					for (var l = n.length - 1; l >= 0; l--)(o = n[l]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, r, i) : o(t, r)) || i);
				return a > 3 && i && Object.defineProperty(t, r, i), i
			}

			function c(n, t, r, e) {
				return new(r || (r = Promise))((function(o, a) {
					function i(n) {
						try {
							c(e.next(n))
						} catch (t) {
							a(t)
						}
					}

					function l(n) {
						try {
							c(e.throw(n))
						} catch (t) {
							a(t)
						}
					}

					function c(n) {
						var t;
						n.done ? o(n.value) : (t = n.value, t instanceof r ? t : new r((function(n) {
							n(t)
						}))).then(i, l)
					}
					c((e = e.apply(n, t || [])).next())
				}))
			}

			function d(n, t) {
				var r, e, o, a, i = {
					label: 0,
					sent: function() {
						if (1 & o[0]) throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return a = {
					next: l(0),
					throw: l(1),
					return: l(2)
				}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
					return this
				}), a;

				function l(a) {
					return function(l) {
						return function(a) {
							if (r) throw new TypeError("Generator is already executing.");
							for (; i;) try {
								if (r = 1, e && (o = 2 & a[0] ? e.return : a[0] ? e.throw || ((o = e.return) && o.call(e), 0) : e.next) && !(o = o.call(e, a[1])).done) return o;
								switch (e = 0, o && (a = [2 & a[0], o.value]), a[0]) {
									case 0:
									case 1:
										o = a;
										break;
									case 4:
										return i.label++, {
											value: a[1],
											done: !1
										};
									case 5:
										i.label++, e = a[1], a = [0];
										continue;
									case 7:
										a = i.ops.pop(), i.trys.pop();
										continue;
									default:
										if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
											i = 0;
											continue
										}
										if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
											i.label = a[1];
											break
										}
										if (6 === a[0] && i.label < o[1]) {
											i.label = o[1], o = a;
											break
										}
										if (o && i.label < o[2]) {
											i.label = o[2], i.ops.push(a);
											break
										}
										o[2] && i.ops.pop(), i.trys.pop();
										continue
								}
								a = t.call(n, i)
							} catch (l) {
								a = [6, l], e = 0
							} finally {
								r = o = 0
							}
							if (5 & a[0]) throw a[1];
							return {
								value: a[0] ? a[1] : void 0,
								done: !0
							}
						}([a, l])
					}
				}
			}
			Object.create;

			function s(n) {
				var t = "function" == typeof Symbol && Symbol.iterator,
					r = t && n[t],
					e = 0;
				if (r) return r.call(n);
				if (n && "number" == typeof n.length) return {
					next: function() {
						return n && e >= n.length && (n = void 0), {
							value: n && n[e++],
							done: !n
						}
					}
				};
				throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
			}

			function u(n, t) {
				var r = "function" == typeof Symbol && n[Symbol.iterator];
				if (!r) return n;
				var e, o, a = r.call(n),
					i = [];
				try {
					for (;
						(void 0 === t || t-- > 0) && !(e = a.next()).done;) i.push(e.value)
				} catch (l) {
					o = {
						error: l
					}
				} finally {
					try {
						e && !e.done && (r = a.return) && r.call(a)
					} finally {
						if (o) throw o.error
					}
				}
				return i
			}

			function b(n, t, r) {
				if (r || 2 === arguments.length)
					for (var e, o = 0, a = t.length; o < a; o++) !e && o in t || (e || (e = Array.prototype.slice.call(t, 0, o)), e[o] = t[o]);
				return n.concat(e || t)
			}

			function p(n) {
				return this instanceof p ? (this.v = n, this) : new p(n)
			}

			function h(n, t, r) {
				if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
				var e, o = r.apply(n, t || []),
					a = [];
				return e = {}, i("next"), i("throw"), i("return"), e[Symbol.asyncIterator] = function() {
					return this
				}, e;

				function i(n) {
					o[n] && (e[n] = function(t) {
						return new Promise((function(r, e) {
							a.push([n, t, r, e]) > 1 || l(n, t)
						}))
					})
				}

				function l(n, t) {
					try {
						(r = o[n](t)).value instanceof p ? Promise.resolve(r.value.v).then(c, d) : s(a[0][2], r)
					} catch (e) {
						s(a[0][3], e)
					}
					var r
				}

				function c(n) {
					l("next", n)
				}

				function d(n) {
					l("throw", n)
				}

				function s(n, t) {
					n(t), a.shift(), a.length && l(a[0][0], a[0][1])
				}
			}

			function m(n) {
				if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
				var t, r = n[Symbol.asyncIterator];
				return r ? r.call(n) : (n = s(n), t = {}, e("next"), e("throw"), e("return"), t[Symbol.asyncIterator] = function() {
					return this
				}, t);

				function e(r) {
					t[r] = n[r] && function(t) {
						return new Promise((function(e, o) {
							(function(n, t, r, e) {
								Promise.resolve(e).then((function(t) {
									n({
										value: t,
										done: r
									})
								}), t)
							})(e, o, (t = n[r](t)).done, t.value)
						}))
					}
				}
			}
			Object.create;

			function g(n, t, r, e) {
				if ("a" === r && !e) throw new TypeError("Private accessor was defined without a getter");
				if ("function" == typeof t ? n !== t || !e : !t.has(n)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
				return "m" === r ? e : "a" === r ? e.call(n) : e ? e.value : t.get(n)
			}

			function v(n, t, r, e, o) {
				if ("m" === e) throw new TypeError("Private method is not writable");
				if ("a" === e && !o) throw new TypeError("Private accessor was defined without a setter");
				if ("function" == typeof t ? n !== t || !o : !t.has(n)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
				return "a" === e ? o.call(n, r) : o ? o.value = r : t.set(n, r), r
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~mod-nav~shreddit-player.930efaad11445a6ef568.js.map