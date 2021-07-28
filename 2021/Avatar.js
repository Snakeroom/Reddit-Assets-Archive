// https://www.redditstatic.com/desktop2x/Avatar.d62532618e83752d4043.js
// Retrieved at 7/28/2021, 4:00:05 PM by Reddit Dataminer v1.0.0
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
				i = a("./src/lib/classNames/index.ts"),
				d = a("./src/reddit/helpers/trackers/snoovatar.ts"),
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
					u(d.f)
				}, [u]);
				const v = Object(n.e)(e => e.user.session),
					f = Object(s.useRef)(null),
					x = Object(s.useCallback)(e => {
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
					return x(null === (e = null == f ? void 0 : f.current) || void 0 === e ? void 0 : e.contentWindow)
				}, [f, x]), Object(s.useEffect)(() => {
					const e = e => {
						"refreshAuth" === (null == e ? void 0 : e.data) && x(e.source)
					};
					return window.addEventListener("message", e), () => window.removeEventListener("message", e)
				}, [x]), r.a.createElement("div", {
					className: Object(i.a)(m.a.iframeContainer, e)
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
				containerExp: "_2XQSxcZene8EbyNUVEZqIJ",
				content: "_3WuQYS3HUXsj1Z3hBTnsdb"
			}
		},
		"./src/reddit/pages/Avatar/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var s = a("./node_modules/react/index.js"),
				r = a.n(s),
				n = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/contexts/NavbarExp.ts"),
				c = a("./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx"),
				i = a("./src/reddit/pages/Avatar/index.m.less"),
				d = a.n(i);
			t.default = function() {
				const e = Object(s.useContext)(o.a);
				return r.a.createElement("div", {
					className: Object(n.a)(d.a.container, {
						[d.a.containerExp]: e
					})
				}, r.a.createElement(c.a, {
					className: d.a.content
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Avatar.d62532618e83752d4043.js.map