// https://www.redditstatic.com/desktop2x/Avatar.d17b57045837a0ebcb9c.js
// Retrieved at 4/19/2022, 6:40:05 PM by Reddit Dataminer v1.0.0
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
			t.a = Object(o.i)(e => {
				let {
					className: t,
					match: a,
					location: o,
					share: i,
					source: u
				} = e;
				const m = new URLSearchParams(o.search);
				m.append("platform", "desktop"), Object.entries(a.params).forEach(e => {
					let [t, a] = e;
					return m.append(t, a)
				}), i && Object.entries(i).forEach(e => {
					let [t, a] = e;
					return m.set(t, a)
				}), u && m.set("source", u);
				const v = Object(n.e)(e => e.user.session),
					x = Object(s.useRef)(null),
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
					return _(null === (e = null == x ? void 0 : x.current) || void 0 === e ? void 0 : e.contentWindow)
				}, [x, _]), Object(s.useEffect)(() => {
					const e = e => {
						"refreshAuth" === (null == e ? void 0 : e.data) && _(e.source)
					};
					return window.addEventListener("message", e), () => window.removeEventListener("message", e)
				}, [_]), r.a.createElement("div", {
					className: Object(d.a)(l.a.iframeContainer, t)
				}, r.a.createElement("iframe", {
					ref: x,
					src: `${c.a.snoovatarUrl}/static/client/?${m.toString()}`
				}))
			})
		},
		"./src/reddit/components/SnoovatarModal/index.m.less": function(e, t, a) {
			e.exports = {
				snoovatarModal: "_1kJxmNuSOWrudEvEj4lSc8",
				snoovatarModalIframeContainer: "_3s-GzuR9XtTMo39iEgLq_z",
				snoovatarModalBuilderV2: "d96YWxTBxv7CdfhCOK7Cw",
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
				x = a("./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx"),
				_ = a("./src/reddit/pages/Avatar/index.m.less"),
				b = a.n(_);
			const E = !(Object(d.c)() || Object(d.b)()),
				O = {
					GRAPHQL_URL: s.a.gqlUrl,
					IS_DEVELOPMENT: E,
					IS_PRODUCTION: !E,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: s.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${s.a.snoovatarUrl}/api`
				},
				f = n.a.lazy(() => Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(4)]).then(a.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
					default: e.DataWrapper
				}))),
				j = n.a.lazy(() => Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(4)]).then(a.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
					default: e.Builder
				})));
			t.default = function() {
				const e = Object(o.e)(e => e.user.session),
					[t, s] = Object(r.useState)(!1),
					d = Object(r.useContext)(i.a),
					_ = Object(r.useMemo)(() => ({
						headers: {
							Authorization: `Bearer ${e.accessToken}`
						},
						expiration: new Date(e.expires).getTime()
					}), [e]),
					E = Object(u.a)(),
					p = Object(o.e)(e => _ && Object(m.f)(e));
				return Object(r.useEffect)(() => {
					(async () => {
						await a.e(6).then(a.t.bind(null, "./node_modules/@reddit/avatars/style.css", 7))
					})(), E(l.q), s(!0)
				}, []), e && t ? n.a.createElement("div", {
					className: Object(c.a)(b.a.container, {
						[b.a.containerExp]: d
					})
				}, p ? n.a.createElement(r.Suspense, {
					fallback: n.a.createElement("div", null)
				}, n.a.createElement(f, {
					authHeaders: _,
					config: O,
					sendEvent: v.a
				}, n.a.createElement(j, null))) : n.a.createElement(x.a, {
					className: b.a.content
				})) : null
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Avatar.d17b57045837a0ebcb9c.js.map