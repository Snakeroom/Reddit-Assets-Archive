// https://www.redditstatic.com/desktop2x/Avatar.cfbc099740c0498bc55e.js
// Retrieved at 1/25/2022, 12:00:05 PM by Reddit Dataminer v1.0.0
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
				location: a,
				share: o,
				source: u
			}) => {
				const v = new URLSearchParams(a.search);
				v.append("platform", "desktop"), Object.entries(t.params).forEach(([e, t]) => v.append(e, t)), o && Object.entries(o).forEach(([e, t]) => v.set(e, t)), u && v.set("source", u);
				const _ = Object(l.a)();
				Object(s.useEffect)(() => {
					_(d.q)
				}, [_]);
				const x = Object(n.e)(e => e.user.session),
					b = Object(s.useRef)(null),
					E = Object(s.useCallback)(e => {
						x && e && e.postMessage({
							type: "injectAuth",
							headers: {
								Authorization: `Bearer ${x.accessToken}`
							},
							expiration: new Date(x.expires).getTime()
						}, c.a.snoovatarUrl)
					}, [x]);
				return Object(s.useEffect)(() => {
					var e;
					return E(null === (e = null == b ? void 0 : b.current) || void 0 === e ? void 0 : e.contentWindow)
				}, [b, E]), Object(s.useEffect)(() => {
					const e = e => {
						"refreshAuth" === (null == e ? void 0 : e.data) && E(e.source)
					};
					return window.addEventListener("message", e), () => window.removeEventListener("message", e)
				}, [E]), r.a.createElement("div", {
					className: Object(i.a)(m.a.iframeContainer, e)
				}, r.a.createElement("iframe", {
					ref: b,
					src: `${c.a.snoovatarUrl}/static/client/?${v.toString()}`
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
				i = a("./src/lib/env/index.ts"),
				d = a("./src/reddit/contexts/NavbarExp.ts"),
				l = a("./src/reddit/selectors/experiments/econ/index.ts"),
				u = a("./src/telemetry/index.ts"),
				m = a("./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx"),
				v = a("./src/reddit/pages/Avatar/index.m.less"),
				_ = a.n(v);
			const x = !(Object(i.c)() || Object(i.b)()),
				b = {
					GRAPHQL_URL: s.a.gqlUrl,
					IS_DEVELOPMENT: x,
					IS_PRODUCTION: !x,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: s.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${s.a.snoovatarUrl}/api`
				},
				E = n.a.lazy(() => Promise.all([a.e(0), a.e(1), a.e(2)]).then(a.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
					default: e.DataWrapper
				}))),
				f = n.a.lazy(() => Promise.all([a.e(0), a.e(1), a.e(2)]).then(a.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
					default: e.Builder
				})));
			t.default = function() {
				const e = Object(o.e)(e => e.user.session),
					[t, a] = Object(r.useState)(!1),
					s = Object(r.useContext)(d.a),
					i = Object(r.useMemo)(() => e ? {
						headers: {
							Authorization: `Bearer ${e.accessToken}`
						},
						expiration: new Date(e.expires).getTime()
					} : null, [e]),
					v = Object(o.e)(e => i && Object(l.f)(e));
				return Object(r.useEffect)(() => {
					a(!0)
				}, []), e && t ? n.a.createElement("div", {
					className: Object(c.a)(_.a.container, {
						[_.a.containerExp]: s
					})
				}, v ? n.a.createElement(r.Suspense, {
					fallback: n.a.createElement("div", null)
				}, n.a.createElement(E, {
					authHeaders: i,
					config: b,
					sendEvent: u.a
				}, n.a.createElement(f, null))) : n.a.createElement(m.a, {
					className: _.a.content
				})) : null
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Avatar.cfbc099740c0498bc55e.js.map