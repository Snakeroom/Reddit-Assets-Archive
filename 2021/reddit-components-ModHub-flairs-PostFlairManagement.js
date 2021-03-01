// https://www.redditstatic.com/desktop2x/reddit-components-ModHub-flairs-PostFlairManagement.1c119806531abe89c804.js
// Retrieved at 2/28/2021, 9:18:37 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModHub-flairs-PostFlairManagement"], {
		"./src/reddit/components/ModHub/flairs/PostFlairManagement/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/postFlair.ts"),
				o = s("./src/reddit/models/Flair/index.ts"),
				l = s("./src/reddit/selectors/postFlair.ts"),
				c = s("./src/reddit/selectors/structuredStyles.ts"),
				p = s("./src/reddit/components/ModHub/flairs/FlairManagement/index.tsx"),
				u = s("./src/reddit/components/ModHub/flairs/FlairManagement/connector.ts");

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const b = Object(i.c)({
					...u.b,
					postFlairData: l.d,
					postFlairSettings: l.e,
					styleTemplates: c.e
				}),
				_ = Object(n.b)(b, (e, t) => ({
					...Object(u.a)(e, t),
					onRemoveTemplate: s => e(Object(d.g)(s, t.subredditId)),
					onReorderTemplates: s => e(Object(d.i)(s, t.subredditId)),
					onSaveTemplate: s => e(Object(d.j)(s, t.subredditId))
				}));
			t.default = _(e => {
				const {
					postFlairData: t,
					postFlairSettings: s,
					...r
				} = e;
				return t && s ? a.a.createElement(p.a, m({
					flairSettings: s,
					flairTemplateType: o.d.LinkFlair,
					helpCenterLink: "hc/en-us/articles/360010513191-Post-Flair",
					templateIds: t.templateIds,
					templates: t.templates
				}, r)) : null
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModHub-flairs-PostFlairManagement.1c119806531abe89c804.js.map