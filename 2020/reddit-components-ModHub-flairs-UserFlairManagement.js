// https://www.redditstatic.com/desktop2x/reddit-components-ModHub-flairs-UserFlairManagement.4feaedd5e7a3f14e0589.js
// Retrieved at 7/28/2020, 10:42:45 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModHub-flairs-UserFlairManagement"], {
		"./src/reddit/components/ModHub/flairs/UserFlairManagement/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			r("./node_modules/core-js/modules/es6.symbol.js");
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/actions/userFlair.ts"),
				l = r("./src/reddit/models/Flair/index.ts"),
				d = r("./src/reddit/selectors/userFlair.ts"),
				c = r("./src/reddit/components/ModHub/flairs/FlairManagement/index.tsx"),
				u = r("./src/reddit/components/ModHub/flairs/FlairManagement/connector.ts");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			var b = function(e, t) {
				var r = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (r[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (s = Object.getOwnPropertySymbols(e); n < s.length; n++) t.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (r[s[n]] = e[s[n]])
				}
				return r
			};
			const m = Object(i.c)(Object.assign(Object.assign({}, u.b), {
					userFlairData: d.c,
					userFlairSettings: d.e
				})),
				O = Object(a.b)(m, (e, t) => Object.assign(Object.assign({}, Object(u.a)(e, t)), {
					onRemoveTemplate: r => e(Object(o.j)(r, t.subredditId)),
					onReorderTemplates: r => e(Object(o.k)(r, t.subredditId)),
					onSaveTemplate: r => e(Object(o.l)(r, t.subredditId))
				}));
			t.default = O(e => {
				const {
					userFlairData: t,
					userFlairSettings: r
				} = e, s = b(e, ["userFlairData", "userFlairSettings"]);
				return t && r ? n.a.createElement(c.a, p({
					flairSettings: r,
					flairTemplateType: l.d.UserFlair,
					helpCenterLink: "hc/en-us/articles/360010541651-User-Flair",
					templateIds: t.templateIds,
					templates: t.templates
				}, s)) : null
			})
		}
	}
]);
//# sourceMappingURL=reddit-components-ModHub-flairs-UserFlairManagement.4feaedd5e7a3f14e0589.js.map