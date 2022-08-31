// https://www.redditstatic.com/desktop2x/Avatar.b8e5a63cf17e727dace5.js
// Retrieved at 8/31/2022, 7:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Avatar"], {
		"./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router/esm/react-router.js"),
				c = s("./src/config.ts"),
				d = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/SnoovatarModal/index.m.less"),
				l = s.n(i);
			t.a = Object(o.i)(e => {
				let {
					className: t,
					match: s,
					location: o,
					share: i,
					source: u
				} = e;
				const m = new URLSearchParams(o.search);
				m.append("platform", "desktop"), Object.entries(s.params).forEach(e => {
					let [t, s] = e;
					return m.append(t, s)
				}), i && Object.entries(i).forEach(e => {
					let [t, s] = e;
					return m.set(t, s)
				}), u && m.set("source", u);
				const b = Object(r.e)(e => e.user.session),
					p = Object(a.useRef)(null),
					v = Object(a.useCallback)(e => {
						b && e && e.postMessage({
							type: "injectAuth",
							headers: {
								Authorization: `Bearer ${b.accessToken}`
							},
							expiration: new Date(b.expires).getTime()
						}, c.a.snoovatarUrl)
					}, [b]);
				return Object(a.useEffect)(() => {
					var e;
					return v(null === (e = null == p ? void 0 : p.current) || void 0 === e ? void 0 : e.contentWindow)
				}, [p, v]), Object(a.useEffect)(() => {
					const e = e => {
						"refreshAuth" === (null == e ? void 0 : e.data) && v(e.source)
					};
					return window.addEventListener("message", e), () => window.removeEventListener("message", e)
				}, [v]), n.a.createElement("div", {
					className: Object(d.a)(l.a.iframeContainer, t)
				}, n.a.createElement("iframe", {
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
				n = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/env/index.ts"),
				o = s("./node_modules/react/index.js"),
				c = s.n(o),
				d = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/actions/login.ts"),
				l = s("./src/reddit/contexts/NavbarExp.ts"),
				u = s("./src/reddit/endpoints/governance/crypto.ts"),
				m = s("./src/reddit/helpers/trackers/snoovatar.ts"),
				b = s("./src/reddit/hooks/useTracking.ts"),
				p = s("./src/reddit/selectors/experiments/econ/index.ts"),
				v = s("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				E = s("./src/telemetry/index.ts"),
				O = s("./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx"),
				j = s("./src/reddit/pages/Avatar/index.m.less"),
				_ = s.n(j);
			const f = !(Object(r.c)() || Object(r.b)()),
				h = {
					GRAPHQL_URL: a.a.gqlUrl,
					IS_DEVELOPMENT: f,
					IS_PRODUCTION: !f,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: a.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${a.a.snoovatarUrl}/api`
				},
				S = c.a.lazy(() => Promise.all([s.e(0), s.e(1), s.e(3), s.e(2), s.e(4), s.e(5)]).then(s.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
					default: e.DataWrapper
				}))),
				A = c.a.lazy(() => Promise.all([s.e(0), s.e(1), s.e(3), s.e(2), s.e(4), s.e(5)]).then(s.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
					default: e.LoggedOut
				}))),
				g = c.a.lazy(() => Promise.all([s.e(0), s.e(1), s.e(3), s.e(2), s.e(4), s.e(5)]).then(s.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
					default: e.Builder
				})));
			t.default = function() {
				const e = Object(d.e)(e => e.user.session),
					[t, r] = Object(o.useState)(!1),
					j = Object(o.useContext)(l.a),
					N = Object(d.e)(v.a),
					L = Object(o.useMemo)(() => ({
						headers: {
							Authorization: `Bearer ${e.accessToken}`
						},
						expiration: new Date(e.expires).getTime()
					}), [e]),
					w = Object(b.a)(),
					k = Object(d.e)(e => L && Object(p.e)(e));
				Object(o.useEffect)(() => {
					(async () => {
						await s.e(7).then(s.t.bind(null, "./node_modules/@reddit/avatars/style.css", 7))
					})(), w(m.r), r(!0)
				}, [w]);
				const y = Object(d.e)(e => !Object(x.Q)(e) && Object(p.B)(e)),
					U = Object(d.d)(),
					M = () => U(Object(i.openLoginModal)());
				if (!e || !t) return null;
				if (y) return c.a.createElement("div", {
					className: Object(n.a)(_.a.container, {
						[_.a.containerExp]: j
					})
				}, c.a.createElement(o.Suspense, {
					fallback: c.a.createElement("div", null)
				}, c.a.createElement(A, {
					openLogin: M,
					fancyBackground: !0
				})));
				const T = f ? u.a.Rinkeby : u.a.Ethereum,
					B = {
						...h,
						STRIPE_API_KEY: a.a.stripe.apiKey(N)
					};
				return c.a.createElement("div", {
					className: Object(n.a)(_.a.container, {
						[_.a.containerExp]: j
					})
				}, k ? c.a.createElement(o.Suspense, {
					fallback: c.a.createElement("div", null)
				}, c.a.createElement(S, {
					accessToken: e.accessToken,
					authHeaders: L,
					config: B,
					sendEvent: E.a,
					blockchainProvider: T
				}, c.a.createElement(g, null))) : c.a.createElement(O.a, {
					className: _.a.content
				}))
			}
		},
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var a = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const r = Object(n.a)(a.sd)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Avatar.b8e5a63cf17e727dace5.js.map