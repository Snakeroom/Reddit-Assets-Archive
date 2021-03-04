// https://www.redditstatic.com/desktop2x/reddit-components-ModHub-flairs-UserFlairManagement.f2c6968a1a8e54b0d999.js
// Retrieved at 3/4/2021, 5:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModHub-flairs-UserFlairManagement"], {
		"./src/reddit/components/ModHub/flairs/UserFlairManagement/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var s = r("./node_modules/react/index.js"),
				a = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/actions/userFlair/index.ts"),
				l = r("./src/reddit/models/Flair/index.ts"),
				o = r("./src/reddit/selectors/userFlair.ts"),
				c = r("./src/reddit/components/ModHub/flairs/FlairManagement/index.tsx"),
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
			const p = Object(i.c)({
					...u.b,
					userFlairData: o.c,
					userFlairSettings: o.e
				}),
				b = Object(n.b)(p, (e, t) => ({
					...Object(u.a)(e, t),
					onRemoveTemplate: r => e(Object(d.a)(r, t.subredditId)),
					onReorderTemplates: r => e(Object(d.b)(r, t.subredditId)),
					onSaveTemplate: r => e(Object(d.c)(r, t.subredditId))
				}));
			t.default = b(e => {
				const {
					userFlairData: t,
					userFlairSettings: r,
					...s
				} = e;
				return t && r ? a.a.createElement(c.a, m({
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModHub-flairs-UserFlairManagement.f2c6968a1a8e54b0d999.js.map