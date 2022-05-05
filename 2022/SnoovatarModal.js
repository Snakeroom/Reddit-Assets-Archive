// https://www.redditstatic.com/desktop2x/SnoovatarModal.a97d2020125d965e70dc.js
// Retrieved at 5/5/2022, 9:50:05 AM by Reddit Dataminer v1.0.0
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
					O = Object(s.useRef)(null),
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
					return p(null === (e = null == O ? void 0 : O.current) || void 0 === e ? void 0 : e.contentWindow)
				}, [O, p]), Object(s.useEffect)(() => {
					const e = e => {
						"refreshAuth" === (null == e ? void 0 : e.data) && p(e.source)
					};
					return window.addEventListener("message", e), () => window.removeEventListener("message", e)
				}, [p]), r.a.createElement("div", {
					className: Object(i.a)(l.a.iframeContainer, t)
				}, r.a.createElement("iframe", {
					ref: O,
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
				r = a("./node_modules/react/index.js"),
				n = a.n(r),
				o = a("./node_modules/react-redux/es/index.js"),
				c = a("./src/lib/env/index.ts"),
				i = a("./src/reddit/actions/snoovatarModal.ts"),
				d = a("./src/reddit/helpers/avatarRouting.ts"),
				l = a("./src/reddit/helpers/trackers/snoovatar.ts"),
				u = a("./src/reddit/hooks/useTracking.ts"),
				m = a("./src/reddit/selectors/activeModal.ts"),
				v = a("./src/reddit/selectors/experiments/econ/index.ts"),
				O = a("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts"),
				p = a("./src/telemetry/index.ts"),
				b = a("./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx"),
				f = a("./src/higherOrderComponents/asModal/index.tsx"),
				E = a("./src/reddit/components/SnoovatarModal/index.m.less"),
				_ = a.n(E);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			const x = !(Object(c.c)() || Object(c.b)()),
				h = {
					GRAPHQL_URL: s.a.gqlUrl,
					IS_DEVELOPMENT: x,
					IS_PRODUCTION: !x,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: s.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${s.a.snoovatarUrl}/api`
				},
				S = n.a.lazy(() => Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(4), a.e(5), a.e(6)]).then(a.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
					default: e.DataWrapper
				}))),
				M = n.a.lazy(() => Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(4), a.e(5), a.e(6)]).then(a.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
					default: e.Builder
				}))),
				A = Object(f.a)(e => {
					const t = Object(o.e)(e => e.user.session),
						[c, i] = Object(r.useState)(!1),
						m = Object(o.e)(O.a),
						f = Object(r.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${t.accessToken}`
							},
							expiration: new Date(t.expires).getTime()
						}), [t]),
						E = Object(u.a)(),
						x = Object(o.e)(e => f && Object(v.d)(e));
					Object(r.useEffect)(() => {
						(async () => {
							await a.e(8).then(a.t.bind(null, "./node_modules/@reddit/avatars/style.css", 7))
						})(), E(l.q), i(!0)
					}, [E]);
					const {
						activeDetails: A,
						activeTab: w
					} = e, L = Object(r.useMemo)(() => ({
						activeTab: w || d.a.EXPLORE,
						activeDetails: A || void 0
					}), [A, w]);
					if (!t || !c) return null;
					let N;
					return N = e.share ? {
						...h,
						STRIPE_API_KEY: s.a.stripe.apiKey(m),
						COPY_SHARE_PARAMS: e.share
					} : {
						...h,
						STRIPE_API_KEY: s.a.stripe.apiKey(m)
					}, x ? n.a.createElement("div", {
						className: _.a.snoovatarModalBuilderV2
					}, n.a.createElement(r.Suspense, {
						fallback: n.a.createElement("div", null)
					}, n.a.createElement(S, {
						accessToken: t.accessToken,
						authHeaders: f,
						config: N,
						sendEvent: p.a
					}, n.a.createElement(M, {
						navState: L
					})))) : n.a.createElement(b.a, j({
						className: _.a.snoovatarModalIframeContainer
					}, e))
				});
			t.default = () => {
				const e = Object(o.d)(),
					t = Object(o.e)(e => Object(m.a)(e));
				return n.a.createElement(A, j({}, t, {
					className: _.a.snoovatarModal,
					withOverlay: !0,
					onOverlayClick: () => e(Object(i.a)())
				}))
			}
		},
		"./src/reddit/helpers/avatarRouting.ts": function(e, t, a) {
			"use strict";
			var s;
			a.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.EXPLORE = "explore", e.STYLE = "style", e.ME = "me", e.NFT = "nft"
				}(s || (s = {}))
		},
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			}));
			var s = a("./src/reddit/constants/experiments.ts"),
				r = a("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const n = Object(r.a)(s.Uc)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SnoovatarModal.a97d2020125d965e70dc.js.map