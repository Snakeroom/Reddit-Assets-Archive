// https://www.redditstatic.com/desktop2x/Avatar.ff7d9c404ffed7f3a1e8.js
// Retrieved at 8/30/2022, 3:10:05 PM by Reddit Dataminer v1.0.0
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
					x = Object(a.useRef)(null),
					p = Object(a.useCallback)(e => {
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
					return p(null === (e = null == x ? void 0 : x.current) || void 0 === e ? void 0 : e.contentWindow)
				}, [x, p]), Object(a.useEffect)(() => {
					const e = e => {
						"refreshAuth" === (null == e ? void 0 : e.data) && p(e.source)
					};
					return window.addEventListener("message", e), () => window.removeEventListener("message", e)
				}, [p]), n.a.createElement("div", {
					className: Object(d.a)(l.a.iframeContainer, t)
				}, n.a.createElement("iframe", {
					ref: x,
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
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/env/index.ts"),
				i = s("./src/reddit/actions/login.ts"),
				l = s("./src/reddit/contexts/NavbarExp.ts"),
				u = s("./src/reddit/helpers/trackers/snoovatar.ts"),
				m = s("./src/reddit/hooks/useTracking.ts"),
				b = s("./src/reddit/selectors/experiments/econ/index.ts"),
				x = s("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts"),
				p = s("./src/reddit/selectors/user.ts"),
				v = s("./src/telemetry/index.ts"),
				O = s("./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx"),
				E = s("./src/reddit/pages/Avatar/index.m.less"),
				j = s.n(E);
			const _ = !(Object(d.c)() || Object(d.b)()),
				f = {
					GRAPHQL_URL: a.a.gqlUrl,
					IS_DEVELOPMENT: _,
					IS_PRODUCTION: !_,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: a.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${a.a.snoovatarUrl}/api`
				},
				h = r.a.lazy(() => Promise.all([s.e(0), s.e(1), s.e(2), s.e(3), s.e(4), s.e(5)]).then(s.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
					default: e.DataWrapper
				}))),
				S = r.a.lazy(() => Promise.all([s.e(0), s.e(1), s.e(2), s.e(3), s.e(4), s.e(5)]).then(s.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
					default: e.LoggedOut
				}))),
				A = r.a.lazy(() => Promise.all([s.e(0), s.e(1), s.e(2), s.e(3), s.e(4), s.e(5)]).then(s.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
					default: e.Builder
				})));
			t.default = function() {
				const e = Object(o.e)(e => e.user.session),
					[t, d] = Object(n.useState)(!1),
					E = Object(n.useContext)(l.a),
					_ = Object(o.e)(x.a),
					g = Object(n.useMemo)(() => ({
						headers: {
							Authorization: `Bearer ${e.accessToken}`
						},
						expiration: new Date(e.expires).getTime()
					}), [e]),
					N = Object(m.a)(),
					L = Object(o.e)(e => g && Object(b.e)(e));
				Object(n.useEffect)(() => {
					(async () => {
						await s.e(7).then(s.t.bind(null, "./node_modules/@reddit/avatars/style.css", 7))
					})(), N(u.r), d(!0)
				}, [N]);
				const w = Object(o.e)(e => !Object(p.Q)(e) && Object(b.A)(e)),
					U = Object(o.d)(),
					k = () => U(Object(i.openLoginModal)());
				if (!e || !t) return null;
				if (w) return r.a.createElement("div", {
					className: Object(c.a)(j.a.container, {
						[j.a.containerExp]: E
					})
				}, r.a.createElement(n.Suspense, {
					fallback: r.a.createElement("div", null)
				}, r.a.createElement(S, {
					openLogin: k,
					fancyBackground: !0
				})));
				const y = {
					...f,
					STRIPE_API_KEY: a.a.stripe.apiKey(_)
				};
				return r.a.createElement("div", {
					className: Object(c.a)(j.a.container, {
						[j.a.containerExp]: E
					})
				}, L ? r.a.createElement(n.Suspense, {
					fallback: r.a.createElement("div", null)
				}, r.a.createElement(h, {
					accessToken: e.accessToken,
					authHeaders: g,
					config: y,
					sendEvent: v.a
				}, r.a.createElement(A, null))) : r.a.createElement(O.a, {
					className: j.a.content
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
			const r = Object(n.a)(a.ud)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Avatar.ff7d9c404ffed7f3a1e8.js.map