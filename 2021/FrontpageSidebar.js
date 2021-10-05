// https://www.redditstatic.com/desktop2x/FrontpageSidebar.d05bec7ce0b0cd195d61.js
// Retrieved at 10/5/2021, 7:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FrontpageSidebar"], {
		"./src/reddit/contexts/ApiContext.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			})), n.d(e, "b", (function() {
				return c
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);

			function a() {
				return (a = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const i = {
					apiContext: () => {
						throw new Error("Component attempted to make an API request with no ApiContext")
					},
					gqlContext: () => {
						throw new Error("Component attempted to make an API request with no GqlContext")
					}
				},
				s = Object(o.createContext)(i);

			function c(t) {
				const e = e => r.a.createElement(s.Consumer, null, ({
					apiContext: n,
					gqlContext: o
				}) => r.a.createElement(t, a({
					apiContext: n,
					gqlContext: o
				}, e)));
				return e.displayName = `WithApiContext(${t.displayName||t.name})`, e
			}
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			e.a = t => r.a.createElement("svg", {
				className: t.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: t.onClick
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FrontpageSidebar.d05bec7ce0b0cd195d61.js.map