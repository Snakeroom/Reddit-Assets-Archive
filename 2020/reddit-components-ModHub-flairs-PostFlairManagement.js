// https://www.redditstatic.com/desktop2x/reddit-components-ModHub-flairs-PostFlairManagement.90718ce8ca7158bf8678.js
// Retrieved at 7/28/2020, 10:42:45 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModHub-flairs-PostFlairManagement"], {
		"./src/reddit/components/ModHub/flairs/PostFlairManagement/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/postFlair.ts"),
				l = s("./src/reddit/models/Flair/index.ts"),
				d = s("./src/reddit/selectors/postFlair.ts"),
				c = s("./src/reddit/selectors/structuredStyles.ts"),
				p = s("./src/reddit/components/ModHub/flairs/FlairManagement/index.tsx"),
				u = s("./src/reddit/components/ModHub/flairs/FlairManagement/connector.ts");

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
				}
				return s
			};
			const O = Object(o.c)(Object.assign(Object.assign({}, u.b), {
					postFlairData: d.d,
					postFlairSettings: d.e,
					styleTemplates: c.f
				})),
				j = Object(a.b)(O, (e, t) => Object.assign(Object.assign({}, Object(u.a)(e, t)), {
					onRemoveTemplate: s => e(Object(i.g)(s, t.subredditId)),
					onReorderTemplates: s => e(Object(i.i)(s, t.subredditId)),
					onSaveTemplate: s => e(Object(i.j)(s, t.subredditId))
				}));
			t.default = j(e => {
				const {
					postFlairData: t,
					postFlairSettings: s
				} = e, r = m(e, ["postFlairData", "postFlairSettings"]);
				return t && s ? n.a.createElement(p.a, b({
					flairSettings: s,
					flairTemplateType: l.d.LinkFlair,
					helpCenterLink: "hc/en-us/articles/360010513191-Post-Flair",
					templateIds: t.templateIds,
					templates: t.templates
				}, r)) : null
			})
		}
	}
]);
//# sourceMappingURL=reddit-components-ModHub-flairs-PostFlairManagement.90718ce8ca7158bf8678.js.map