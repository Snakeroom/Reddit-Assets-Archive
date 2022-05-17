// https://www.redditstatic.com/desktop2x/Avatar.1c40c3ff3d95e0801fc0.js
// Retrieved at 5/17/2022, 12:10:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Avatar"], {
		"./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router/esm/react-router.js"),
				c = s("./src/config.ts"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/SnoovatarModal/index.m.less"),
				l = s.n(d);
			t.a = Object(o.i)(e => {
				let {
					className: t,
					match: s,
					location: o,
					share: d,
					source: u
				} = e;
				const m = new URLSearchParams(o.search);
				m.append("platform", "desktop"), Object.entries(s.params).forEach(e => {
					let [t, s] = e;
					return m.append(t, s)
				}), d && Object.entries(d).forEach(e => {
					let [t, s] = e;
					return m.set(t, s)
				}), u && m.set("source", u);
				const x = Object(n.e)(e => e.user.session),
					p = Object(a.useRef)(null),
					v = Object(a.useCallback)(e => {
						x && e && e.postMessage({
							type: "injectAuth",
							headers: {
								Authorization: `Bearer ${x.accessToken}`
							},
							expiration: new Date(x.expires).getTime()
						}, c.a.snoovatarUrl)
					}, [x]);
				return Object(a.useEffect)(() => {
					var e;
					return v(null === (e = null == p ? void 0 : p.current) || void 0 === e ? void 0 : e.contentWindow)
				}, [p, v]), Object(a.useEffect)(() => {
					const e = e => {
						"refreshAuth" === (null == e ? void 0 : e.data) && v(e.source)
					};
					return window.addEventListener("message", e), () => window.removeEventListener("message", e)
				}, [v]), r.a.createElement("div", {
					className: Object(i.a)(l.a.iframeContainer, t)
				}, r.a.createElement("iframe", {
					ref: p,
					src: `${c.a.snoovatarUrl}/static/client/?${m.toString()}`
				}))
			})
		},
		"./src/reddit/components/SnoovatarModal/index.m.less": function(e, t, s) {
			e.exports = {
				snoovatarModal: "_1kJxmNuSOWrudEvEj4lSc8",
				snoovatarModalIframeContainer: "_3s-GzuR9XtTMo39iEgLq_z",
				snoovatarModalBuilderV2: "d96YWxTBxv7CdfhCOK7Cw",
				iframeContainer: "hrzwqhyhwMHUQUeis25Ny",
				loader: "_18QBIHixUfNNL8DkS_hw8K"
			}
		},
		"./src/reddit/pages/Avatar/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2Moi-yX3bvB_vnqKAGk7hu",
				containerExp: "_2XQSxcZene8EbyNUVEZqIJ",
				content: "_3WuQYS3HUXsj1Z3hBTnsdb"
			}
		},
		"./src/reddit/pages/Avatar/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var a = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/env/index.ts"),
				d = s("./src/reddit/contexts/NavbarExp.ts"),
				l = s("./src/reddit/helpers/trackers/snoovatar.ts"),
				u = s("./src/reddit/hooks/useTracking.ts"),
				m = s("./src/reddit/selectors/experiments/econ/index.ts"),
				x = s("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts"),
				p = s("./src/telemetry/index.ts"),
				v = s("./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx"),
				_ = s("./src/reddit/pages/Avatar/index.m.less"),
				b = s.n(_);
			const E = !(Object(i.c)() || Object(i.b)()),
				O = {
					GRAPHQL_URL: a.a.gqlUrl,
					IS_DEVELOPMENT: E,
					IS_PRODUCTION: !E,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: a.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${a.a.snoovatarUrl}/api`
				},
				f = n.a.lazy(() => Promise.all([s.e(0), s.e(1), s.e(2), s.e(3), s.e(4), s.e(5)]).then(s.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
					default: e.DataWrapper
				}))),
				j = n.a.lazy(() => Promise.all([s.e(0), s.e(1), s.e(2), s.e(3), s.e(4), s.e(5)]).then(s.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
					default: e.Builder
				})));
			t.default = function() {
				const e = Object(o.e)(e => e.user.session),
					[t, i] = Object(r.useState)(!1),
					_ = Object(r.useContext)(d.a),
					E = Object(o.e)(x.a),
					h = Object(r.useMemo)(() => ({
						headers: {
							Authorization: `Bearer ${e.accessToken}`
						},
						expiration: new Date(e.expires).getTime()
					}), [e]),
					S = Object(u.a)(),
					A = Object(o.e)(e => h && Object(m.e)(e));
				if (Object(r.useEffect)(() => {
						(async () => {
							await s.e(7).then(s.t.bind(null, "./node_modules/@reddit/avatars/style.css", 7))
						})(), S(l.r), i(!0)
					}, []), !e || !t) return null;
				const N = {
					...O,
					STRIPE_API_KEY: a.a.stripe.apiKey(E)
				};
				return n.a.createElement("div", {
					className: Object(c.a)(b.a.container, {
						[b.a.containerExp]: _
					})
				}, A ? n.a.createElement(r.Suspense, {
					fallback: n.a.createElement("div", null)
				}, n.a.createElement(f, {
					accessToken: e.accessToken,
					authHeaders: h,
					config: N,
					sendEvent: p.a
				}, n.a.createElement(j, null))) : n.a.createElement(v.a, {
					className: b.a.content
				}))
			}
		},
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var a = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const n = Object(r.a)(a.Rc)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Avatar.1c40c3ff3d95e0801fc0.js.map