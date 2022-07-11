// https://www.redditstatic.com/desktop2x/SnoovatarModal.b4114558db962eca68c8.js
// Retrieved at 7/11/2022, 7:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SnoovatarModal"], {
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
					b = Object(s.useRef)(null),
					O = Object(s.useCallback)(e => {
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
					return O(null === (e = null == b ? void 0 : b.current) || void 0 === e ? void 0 : e.contentWindow)
				}, [b, O]), Object(s.useEffect)(() => {
					const e = e => {
						"refreshAuth" === (null == e ? void 0 : e.data) && O(e.source)
					};
					return window.addEventListener("message", e), () => window.removeEventListener("message", e)
				}, [O]), r.a.createElement("div", {
					className: Object(d.a)(l.a.iframeContainer, t)
				}, r.a.createElement("iframe", {
					ref: b,
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
		"./src/reddit/components/SnoovatarModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var s = a("./src/config.ts"),
				r = a("./src/higherOrderComponents/asModal/index.tsx"),
				n = a("./src/lib/env/index.ts"),
				o = a("./node_modules/react/index.js"),
				c = a.n(o),
				d = a("./node_modules/react-redux/es/index.js"),
				i = a("./src/reddit/actions/login.ts"),
				l = a("./src/reddit/actions/snoovatarModal.ts"),
				u = a("./src/reddit/helpers/trackers/snoovatar.ts"),
				m = a("./src/reddit/hooks/useTracking.ts"),
				v = a("./src/reddit/selectors/activeModal.ts"),
				b = a("./src/reddit/selectors/experiments/econ/index.ts"),
				O = a("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts"),
				p = a("./src/reddit/selectors/user.ts"),
				j = a("./src/telemetry/index.ts"),
				f = a("./src/reddit/components/SnoovatarModal/index.m.less"),
				_ = a.n(f),
				E = a("./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			const x = !(Object(n.c)() || Object(n.b)()),
				S = {
					GRAPHQL_URL: s.a.gqlUrl,
					IS_DEVELOPMENT: x,
					IS_PRODUCTION: !x,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: s.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${s.a.snoovatarUrl}/api`
				},
				M = c.a.lazy(() => Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(4), a.e(5)]).then(a.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
					default: e.DataWrapper
				}))),
				g = c.a.lazy(() => Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(4), a.e(5)]).then(a.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
					default: e.LoggedOut
				}))),
				A = c.a.lazy(() => Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(4), a.e(5)]).then(a.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
					default: e.Builder
				}))),
				w = Object(r.a)(e => {
					const t = Object(d.e)(e => e.user.session),
						[r, n] = Object(o.useState)(!1),
						l = Object(d.e)(O.a),
						v = Object(o.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${t.accessToken}`
							},
							expiration: new Date(t.expires).getTime()
						}), [t]),
						f = Object(m.a)(),
						x = Object(d.e)(e => v && Object(b.e)(e)),
						w = Object(d.e)(e => !Object(p.Q)(e) && Object(b.w)(e));
					Object(o.useEffect)(() => {
						(async () => {
							await a.e(7).then(a.t.bind(null, "./node_modules/@reddit/avatars/style.css", 7))
						})(), f(u.r), n(!0)
					}, [f]);
					const L = Object(d.d)(),
						y = () => L(Object(i.openLoginModal)()),
						{
							activeDetails: N,
							activeTab: T,
							activeMeSubpage: k,
							shopTabState: C
						} = e,
						D = Object(o.useMemo)(() => ({
							activeTab: T || void 0,
							activeMeSubpage: k || void 0,
							activeDetails: N || void 0,
							shopTabState: C || void 0
						}), [N, T, k, C]);
					if (!t || !r) return null;
					if (w) return c.a.createElement("div", {
						className: _.a.snoovatarModalBuilderV2
					}, c.a.createElement(o.Suspense, {
						fallback: c.a.createElement("div", null)
					}, c.a.createElement(g, {
						openLogin: y,
						fancyBackground: !0
					})));
					let P;
					return P = e.share ? {
						...S,
						STRIPE_API_KEY: s.a.stripe.apiKey(l),
						COPY_SHARE_PARAMS: e.share
					} : {
						...S,
						STRIPE_API_KEY: s.a.stripe.apiKey(l)
					}, x ? c.a.createElement("div", {
						className: _.a.snoovatarModalBuilderV2
					}, c.a.createElement(o.Suspense, {
						fallback: c.a.createElement("div", null)
					}, c.a.createElement(M, {
						accessToken: t.accessToken,
						authHeaders: v,
						config: P,
						sendEvent: j.a
					}, c.a.createElement(A, {
						navState: D
					})))) : c.a.createElement(E.a, h({
						className: _.a.snoovatarModalIframeContainer
					}, e))
				});
			t.default = () => {
				const e = Object(d.d)(),
					t = Object(d.e)(e => Object(v.a)(e));
				return c.a.createElement(w, h({}, t, {
					className: _.a.snoovatarModal,
					withOverlay: !0,
					onOverlayClick: () => e(Object(l.a)())
				}))
			}
		},
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			}));
			var s = a("./src/reddit/constants/experiments.ts"),
				r = a("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const n = Object(r.a)(s.fd)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SnoovatarModal.b4114558db962eca68c8.js.map