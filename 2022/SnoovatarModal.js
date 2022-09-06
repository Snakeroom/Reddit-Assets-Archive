// https://www.redditstatic.com/desktop2x/SnoovatarModal.886f55ca05dc2245f75e.js
// Retrieved at 9/6/2022, 10:10:05 AM by Reddit Dataminer v1.0.0
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
					p = Object(s.useCallback)(e => {
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
					return p(null === (e = null == b ? void 0 : b.current) || void 0 === e ? void 0 : e.contentWindow)
				}, [b, p]), Object(s.useEffect)(() => {
					const e = e => {
						"refreshAuth" === (null == e ? void 0 : e.data) && p(e.source)
					};
					return window.addEventListener("message", e), () => window.removeEventListener("message", e)
				}, [p]), r.a.createElement("div", {
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
				u = a("./src/reddit/endpoints/governance/crypto.ts"),
				m = a("./src/reddit/helpers/trackers/snoovatar.ts"),
				v = a("./src/reddit/hooks/useTracking.ts"),
				b = a("./src/reddit/selectors/activeModal.ts"),
				p = a("./src/reddit/selectors/experiments/econ/index.ts"),
				O = a("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts"),
				j = a("./src/reddit/selectors/user.ts"),
				f = a("./src/telemetry/index.ts"),
				h = a("./src/reddit/components/SnoovatarModal/index.m.less"),
				E = a.n(h),
				_ = a("./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			const S = !(Object(n.c)() || Object(n.b)()),
				M = {
					GRAPHQL_URL: s.a.gqlUrl,
					IS_DEVELOPMENT: S,
					IS_PRODUCTION: !S,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: s.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${s.a.snoovatarUrl}/api`
				},
				g = c.a.lazy(() => Promise.all([a.e(0), a.e(1), a.e(3), a.e(2), a.e(4), a.e(5)]).then(a.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
					default: e.DataWrapper
				}))),
				A = c.a.lazy(() => Promise.all([a.e(0), a.e(1), a.e(3), a.e(2), a.e(4), a.e(5)]).then(a.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
					default: e.LoggedOut
				}))),
				y = c.a.lazy(() => Promise.all([a.e(0), a.e(1), a.e(3), a.e(2), a.e(4), a.e(5)]).then(a.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
					default: e.Builder
				}))),
				w = Object(r.a)(e => {
					const t = Object(d.e)(e => e.user.session),
						[r, n] = Object(o.useState)(!1),
						l = Object(d.e)(O.a),
						b = Object(o.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${t.accessToken}`
							},
							expiration: new Date(t.expires).getTime()
						}), [t]),
						h = Object(v.a)(),
						w = Object(d.e)(e => b && Object(p.e)(e)),
						L = Object(d.e)(e => !Object(j.Q)(e) && Object(p.B)(e));
					Object(o.useEffect)(() => {
						(async () => {
							await a.e(7).then(a.t.bind(null, "./node_modules/@reddit/avatars/style.css", 7))
						})(), h(m.r), n(!0)
					}, [h]);
					const N = Object(d.d)(),
						T = () => N(Object(i.openLoginModal)()),
						{
							activeDetails: k,
							activeTab: P,
							activeMeSubpage: C,
							shopTabState: D
						} = e,
						R = Object(o.useMemo)(() => ({
							activeTab: P || void 0,
							activeMeSubpage: C || void 0,
							activeDetails: k || void 0,
							shopTabState: D || void 0
						}), [k, P, C, D]);
					if (!t || !r) return null;
					if (L) return c.a.createElement("div", {
						className: E.a.snoovatarModalBuilderV2
					}, c.a.createElement(o.Suspense, {
						fallback: c.a.createElement("div", null)
					}, c.a.createElement(A, {
						openLogin: T,
						fancyBackground: !0
					})));
					let U;
					const B = S ? u.a.Rinkeby : u.a.Ethereum;
					return U = e.share ? {
						...M,
						STRIPE_API_KEY: s.a.stripe.apiKey(l),
						COPY_SHARE_PARAMS: e.share
					} : {
						...M,
						STRIPE_API_KEY: s.a.stripe.apiKey(l)
					}, w ? c.a.createElement("div", {
						className: E.a.snoovatarModalBuilderV2
					}, c.a.createElement(o.Suspense, {
						fallback: c.a.createElement("div", null)
					}, c.a.createElement(g, {
						accessToken: t.accessToken,
						authHeaders: b,
						config: U,
						sendEvent: f.a,
						blockchainProvider: B
					}, c.a.createElement(y, {
						navState: R
					})))) : c.a.createElement(_.a, x({
						className: E.a.snoovatarModalIframeContainer
					}, e))
				});
			t.default = () => {
				const e = Object(d.d)(),
					t = Object(d.e)(e => Object(b.a)(e));
				return c.a.createElement(w, x({}, t, {
					className: E.a.snoovatarModal,
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
			const n = Object(r.a)(s.pd)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SnoovatarModal.886f55ca05dc2245f75e.js.map