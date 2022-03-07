// https://www.redditstatic.com/desktop2x/Avatar.ba4dbb8282264dcccaed.js
// Retrieved at 3/7/2022, 3:00:06 PM by Reddit Dataminer v1.0.0
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
				i = a("./src/reddit/components/SnoovatarModal/index.m.less"),
				l = a.n(i);
			t.a = Object(o.i)(({
				className: e,
				match: t,
				location: a,
				share: o,
				source: i
			}) => {
				const u = new URLSearchParams(a.search);
				u.append("platform", "desktop"), Object.entries(t.params).forEach(([e, t]) => u.append(e, t)), o && Object.entries(o).forEach(([e, t]) => u.set(e, t)), i && u.set("source", i);
				const m = Object(n.e)(e => e.user.session),
					v = Object(s.useRef)(null),
					_ = Object(s.useCallback)(e => {
						m && e && e.postMessage({
							type: "injectAuth",
							headers: {
								Authorization: `Bearer ${m.accessToken}`
							},
							expiration: new Date(m.expires).getTime()
						}, c.a.snoovatarUrl)
					}, [m]);
				return Object(s.useEffect)(() => {
					var e;
					return _(null === (e = null == v ? void 0 : v.current) || void 0 === e ? void 0 : e.contentWindow)
				}, [v, _]), Object(s.useEffect)(() => {
					const e = e => {
						"refreshAuth" === (null == e ? void 0 : e.data) && _(e.source)
					};
					return window.addEventListener("message", e), () => window.removeEventListener("message", e)
				}, [_]), r.a.createElement("div", {
					className: Object(d.a)(l.a.iframeContainer, e)
				}, r.a.createElement("iframe", {
					ref: v,
					src: `${c.a.snoovatarUrl}/static/client/?${u.toString()}`
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
			var s = a("./src/config.ts"),
				r = a("./node_modules/react/index.js"),
				n = a.n(r),
				o = a("./node_modules/react-redux/es/index.js"),
				c = a("./src/lib/classNames/index.ts"),
				d = a("./src/lib/env/index.ts"),
				i = a("./src/reddit/contexts/NavbarExp.ts"),
				l = a("./src/reddit/helpers/trackers/snoovatar.ts"),
				u = a("./src/reddit/hooks/useTracking.ts"),
				m = a("./src/reddit/selectors/experiments/econ/index.ts"),
				v = a("./src/telemetry/index.ts"),
				_ = a("./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx"),
				x = a("./src/reddit/pages/Avatar/index.m.less"),
				b = a.n(x);
			const E = !(Object(d.c)() || Object(d.b)()),
				O = {
					GRAPHQL_URL: s.a.gqlUrl,
					IS_DEVELOPMENT: E,
					IS_PRODUCTION: !E,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: s.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${s.a.snoovatarUrl}/api`
				},
				j = n.a.lazy(() => Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(4)]).then(a.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
					default: e.DataWrapper
				}))),
				p = n.a.lazy(() => Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(4)]).then(a.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
					default: e.Builder
				})));
			t.default = function() {
				const e = Object(o.e)(e => e.user.session),
					[t, s] = Object(r.useState)(!1),
					d = Object(r.useContext)(i.a),
					x = Object(r.useMemo)(() => ({
						headers: {
							Authorization: `Bearer ${e.accessToken}`
						},
						expiration: new Date(e.expires).getTime()
					}), [e]),
					E = Object(u.a)(),
					f = Object(o.e)(e => x && Object(m.e)(e));
				return Object(r.useEffect)(() => {
					(async () => {
						await a.e(6).then(a.t.bind(null, "./node_modules/@reddit/avatars/style.css", 7))
					})(), E(l.q), s(!0)
				}, []), e && t ? n.a.createElement("div", {
					className: Object(c.a)(b.a.container, {
						[b.a.containerExp]: d
					})
				}, f ? n.a.createElement(r.Suspense, {
					fallback: n.a.createElement("div", null)
				}, n.a.createElement(j, {
					authHeaders: x,
					config: O,
					sendEvent: v.a
				}, n.a.createElement(p, null))) : n.a.createElement(_.a, {
					className: b.a.content
				})) : null
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Avatar.ba4dbb8282264dcccaed.js.map