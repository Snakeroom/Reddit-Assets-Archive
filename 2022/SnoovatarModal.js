// https://www.redditstatic.com/desktop2x/SnoovatarModal.251c879db24f5ace905d.js
// Retrieved at 6/29/2022, 9:40:04 AM by Reddit Dataminer v1.0.0
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
				i = a("./src/lib/classNames/index.ts"),
				d = a("./src/reddit/components/SnoovatarModal/index.m.less"),
				l = a.n(d);
			t.a = Object(o.i)(e => {
				let {
					className: t,
					match: a,
					location: o,
					share: d,
					source: u
				} = e;
				const m = new URLSearchParams(o.search);
				m.append("platform", "desktop"), Object.entries(a.params).forEach(e => {
					let [t, a] = e;
					return m.append(t, a)
				}), d && Object.entries(d).forEach(e => {
					let [t, a] = e;
					return m.set(t, a)
				}), u && m.set("source", u);
				const v = Object(n.e)(e => e.user.session),
					p = Object(s.useRef)(null),
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
					return O(null === (e = null == p ? void 0 : p.current) || void 0 === e ? void 0 : e.contentWindow)
				}, [p, O]), Object(s.useEffect)(() => {
					const e = e => {
						"refreshAuth" === (null == e ? void 0 : e.data) && O(e.source)
					};
					return window.addEventListener("message", e), () => window.removeEventListener("message", e)
				}, [O]), r.a.createElement("div", {
					className: Object(i.a)(l.a.iframeContainer, t)
				}, r.a.createElement("iframe", {
					ref: p,
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
				i = a("./node_modules/react-redux/es/index.js"),
				d = a("./src/reddit/actions/snoovatarModal.ts"),
				l = a("./src/reddit/helpers/trackers/snoovatar.ts"),
				u = a("./src/reddit/hooks/useTracking.ts"),
				m = a("./src/reddit/selectors/activeModal.ts"),
				v = a("./src/reddit/selectors/experiments/econ/index.ts"),
				p = a("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts"),
				O = a("./src/telemetry/index.ts"),
				b = a("./src/reddit/components/SnoovatarModal/index.m.less"),
				_ = a.n(b),
				j = a("./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx");

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			const x = !(Object(n.c)() || Object(n.b)()),
				h = {
					GRAPHQL_URL: s.a.gqlUrl,
					IS_DEVELOPMENT: x,
					IS_PRODUCTION: !x,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: s.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${s.a.snoovatarUrl}/api`
				},
				E = c.a.lazy(() => Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(4), a.e(5)]).then(a.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
					default: e.DataWrapper
				}))),
				S = c.a.lazy(() => Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(4), a.e(5)]).then(a.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
					default: e.Builder
				}))),
				M = Object(r.a)(e => {
					const t = Object(i.e)(e => e.user.session),
						[r, n] = Object(o.useState)(!1),
						d = Object(i.e)(p.a),
						m = Object(o.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${t.accessToken}`
							},
							expiration: new Date(t.expires).getTime()
						}), [t]),
						b = Object(u.a)(),
						x = Object(i.e)(e => m && Object(v.e)(e));
					Object(o.useEffect)(() => {
						(async () => {
							await a.e(7).then(a.t.bind(null, "./node_modules/@reddit/avatars/style.css", 7))
						})(), b(l.r), n(!0)
					}, [b]);
					const {
						activeDetails: M,
						activeTab: A,
						activeMeSubpage: w,
						shopTabState: T
					} = e, N = Object(o.useMemo)(() => ({
						activeTab: A || void 0,
						activeMeSubpage: w || void 0,
						activeDetails: M || void 0,
						shopTabState: T || void 0
					}), [M, A, w, T]);
					if (!t || !r) return null;
					let g;
					return g = e.share ? {
						...h,
						STRIPE_API_KEY: s.a.stripe.apiKey(d),
						COPY_SHARE_PARAMS: e.share
					} : {
						...h,
						STRIPE_API_KEY: s.a.stripe.apiKey(d)
					}, x ? c.a.createElement("div", {
						className: _.a.snoovatarModalBuilderV2
					}, c.a.createElement(o.Suspense, {
						fallback: c.a.createElement("div", null)
					}, c.a.createElement(E, {
						accessToken: t.accessToken,
						authHeaders: m,
						config: g,
						sendEvent: O.a
					}, c.a.createElement(S, {
						navState: N
					})))) : c.a.createElement(j.a, f({
						className: _.a.snoovatarModalIframeContainer
					}, e))
				});
			t.default = () => {
				const e = Object(i.d)(),
					t = Object(i.e)(e => Object(m.a)(e));
				return c.a.createElement(M, f({}, t, {
					className: _.a.snoovatarModal,
					withOverlay: !0,
					onOverlayClick: () => e(Object(d.a)())
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
			const n = Object(r.a)(s.cd)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SnoovatarModal.251c879db24f5ace905d.js.map