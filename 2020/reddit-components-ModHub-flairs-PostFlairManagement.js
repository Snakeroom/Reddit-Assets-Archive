// https://www.redditstatic.com/desktop2x/reddit-components-ModHub-flairs-PostFlairManagement.e6bf3a57bc553dca7c6d.js
// Retrieved at 3/17/2020, 2:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModHub-flairs-PostFlairManagement"], {
		"./src/reddit/components/ModHub/flairs/PostFlairManagement/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			r("./node_modules/core-js/modules/es6.symbol.js");
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/actions/postFlair.ts"),
				l = r("./src/reddit/models/Flair/index.ts"),
				d = r("./src/reddit/selectors/postFlair.ts"),
				c = r("./src/reddit/selectors/structuredStyles.ts"),
				p = r("./src/reddit/components/ModHub/flairs/FlairManagement/index.tsx"),
				u = r("./src/reddit/components/ModHub/flairs/FlairManagement/connector.ts");

			function m() {
				return (m = Object.assign || function(e) {
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
			const O = Object(o.c)(Object.assign({}, u.b, {
					postFlairData: d.d,
					postFlairSettings: d.e,
					styleTemplates: c.f
				})),
				f = Object(a.b)(O, (e, t) => Object.assign({}, Object(u.a)(e, t), {
					onRemoveTemplate: r => e(Object(i.g)(r, t.subredditId)),
					onReorderTemplates: r => e(Object(i.i)(r, t.subredditId)),
					onSaveTemplate: r => e(Object(i.j)(r, t.subredditId))
				}));
			t.default = f(e => {
				const {
					postFlairData: t,
					postFlairSettings: r
				} = e, s = b(e, ["postFlairData", "postFlairSettings"]);
				return t && r ? n.a.createElement(p.a, m({
					flairSettings: r,
					flairTemplateType: l.d.LinkFlair,
					helpCenterLink: "hc/en-us/articles/360010513191-Post-Flair",
					templateIds: t.templateIds,
					templates: t.templates
				}, s)) : null
			})
		}
	}
]);
//# sourceMappingURL=reddit-components-ModHub-flairs-PostFlairManagement.e6bf3a57bc553dca7c6d.js.map