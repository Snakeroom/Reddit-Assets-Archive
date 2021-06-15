// https://www.redditstatic.com/desktop2x/Avatar.6693e11aeb445491d513.js
// Retrieved at 6/15/2021, 3:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Avatar"], {
		"./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx": function(e, t, a) {
			"use strict";
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = a("./node_modules/react/index.js"),
				r = a.n(s),
				n = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/react-router/esm/react-router.js"),
				c = a("./src/config.ts"),
				d = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/helpers/trackers/snoovatar.ts"),
				l = a("./src/reddit/hooks/useTracking.ts"),
				u = a("./src/reddit/components/SnoovatarModal/index.m.less"),
				m = a.n(u);
			t.a = Object(o.i)(({
				className: e,
				match: t,
				location: a
			}) => {
				const o = new URLSearchParams(a.search);
				o.append("platform", "desktop"), Object.entries(t.params).forEach(([e, t]) => o.append(e, t));
				const u = Object(l.a)();
				Object(s.useEffect)(() => {
					u(i.d)
				}, [u]);
				const v = Object(n.e)(e => e.user.session),
					f = Object(s.useRef)(null),
					_ = Object(s.useCallback)(e => {
						v && e && e.postMessage({
							type: "injectAuth",
							headers: {
								Authorization: `Bearer ${v.accessToken}`
							},
							expiration: new Date(v.expires).getTime()
						}, c.a.snoovatarUrl)
					}, [v]);
				return Object(s.useEffect)(() => {
					var e;
					return _(null === (e = null == f ? void 0 : f.current) || void 0 === e ? void 0 : e.contentWindow)
				}, [f, _]), Object(s.useEffect)(() => {
					const e = e => {
						"refreshAuth" === (null == e ? void 0 : e.data) && _(e.source)
					};
					return window.addEventListener("message", e), () => window.removeEventListener("message", e)
				}, [_]), r.a.createElement("div", {
					className: Object(d.a)(m.a.iframeContainer, e)
				}, r.a.createElement("iframe", {
					ref: f,
					src: `${c.a.snoovatarUrl}/static/client/?${o.toString()}`
				}))
			})
		},
		"./src/reddit/components/SnoovatarModal/index.m.less": function(e, t, a) {
			e.exports = {
				snoovatarModal: "_1kJxmNuSOWrudEvEj4lSc8",
				snoovatarModalIframeContainer: "_3s-GzuR9XtTMo39iEgLq_z",
				iframeContainer: "hrzwqhyhwMHUQUeis25Ny",
				loader: "_18QBIHixUfNNL8DkS_hw8K"
			}
		},
		"./src/reddit/pages/Avatar/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_2Moi-yX3bvB_vnqKAGk7hu",
				content: "_3WuQYS3HUXsj1Z3hBTnsdb"
			}
		},
		"./src/reddit/pages/Avatar/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var s = a("./node_modules/react/index.js"),
				r = a.n(s),
				n = a("./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx"),
				o = a("./src/reddit/pages/Avatar/index.m.less"),
				c = a.n(o);
			t.default = function() {
				return r.a.createElement("div", {
					className: c.a.container
				}, r.a.createElement(n.a, {
					className: c.a.content
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Avatar.6693e11aeb445491d513.js.map