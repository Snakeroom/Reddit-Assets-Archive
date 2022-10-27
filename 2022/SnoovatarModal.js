// https://www.redditstatic.com/desktop2x/SnoovatarModal.2abfd34f7a9f108f2cc6.js
// Retrieved at 10/27/2022, 3:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SnoovatarModal"], {
		"./src/reddit/components/AvatarBuilder/index.m.less": function(e, t, r) {
			e.exports = {
				container: "fT0_rdsnlF7ryBTKvRyZ6",
				containerExp: "_1kMwdMGtSFekiWe8TICK9z",
				content: "_2huh-5zOcluM64i1RhbsrE",
				snoovatarModal: "_1GRfk7gW4GdyvHdJQ6dmQp",
				snoovatarModalIframeContainer: "_2pOvcTLf5RRemwp6N1WygG",
				snoovatarModalBuilderV2: "_2QOWugLxhnw57a1rESqGtJ",
				iframeContainer: "IAW2lsntPDGHpd_xHkm_3",
				loader: "_fwYlNC-b8anlTK6WN31g"
			}
		},
		"./src/reddit/components/AvatarBuilder/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return _
			}));
			var s = r("./node_modules/@reddit/marketplace/marketplace.es.js"),
				a = r("./node_modules/react/index.js"),
				n = r.n(a),
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/actions/login.ts"),
				d = r("./src/reddit/contexts/NavbarExp.ts"),
				l = r("./src/reddit/helpers/trackers/snoovatar.ts"),
				u = r("./src/reddit/hooks/useTracking.ts"),
				p = r("./src/reddit/selectors/experiments/econ/index.ts"),
				O = r("./src/reddit/selectors/user.ts"),
				m = r("./src/reddit/components/AvatarBuilder/index.m.less"),
				v = r.n(m),
				b = r("./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = e => {
				let {
					isModal: t,
					...r
				} = e;
				const m = Object(u.a)(),
					_ = Object(o.e)(e => e.user.session),
					[j, f] = Object(a.useState)(!1),
					E = Object(a.useContext)(d.a),
					M = Object(o.d)(),
					A = () => M(Object(i.openLoginModal)()),
					S = Object(b.a)();
				Object(a.useEffect)(() => {
					m(l.r)
				}, [m]), Object(a.useEffect)(() => {
					f(!0)
				}, []);
				const {
					activeDetails: g,
					activeTab: h,
					activeMeSubpage: k,
					shopTabState: y
				} = r, C = Object(a.useMemo)(() => ({
					activeTab: h || void 0,
					activeMeSubpage: k || void 0,
					activeDetails: g || void 0,
					shopTabState: y || void 0
				}), [g, h, k, y]), N = Object(o.e)(e => !Object(O.R)(e) && Object(p.y)(e));
				if (!_ || !j) return null;
				if (N) return n.a.createElement("div", {
					className: Object(c.a)(v.a.container, {
						[v.a.containerExp]: E
					})
				}, n.a.createElement(s.f, {
					openLogin: A,
					fancyBackground: !0
				}));
				const R = {
					...S,
					config: {
						...S.config,
						...r.share ? {
							COPY_SHARE_PARAMS: r.share
						} : {}
					}
				};
				return n.a.createElement("div", {
					className: Object(c.a)({
						[v.a.container]: !t,
						[v.a.snoovatarModalBuilderV2]: t,
						[v.a.containerExp]: E
					})
				}, n.a.createElement(s.a, x({}, R, {
					navState: C
				}), n.a.createElement(s.b, null)))
			}
		},
		"./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return m
			}));
			var s = r("./src/config.ts"),
				a = r("./src/lib/env/index.ts"),
				n = r("./node_modules/react/index.js"),
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/reddit/endpoints/governance/crypto.ts"),
				i = r("./src/reddit/hooks/useTracking.ts"),
				d = r("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts"),
				l = r("./src/reddit/selectors/telemetry.ts"),
				u = r("./src/reddit/selectors/user.ts");
			const p = !(Object(a.c)() || Object(a.b)()),
				O = {
					GRAPHQL_URL: s.a.gqlUrl,
					IS_DEVELOPMENT: p,
					IS_PRODUCTION: !p,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: s.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${s.a.snoovatarUrl}/api`
				},
				m = () => {
					const e = Object(o.e)(d.a),
						t = Object(o.e)(e => e.user.session),
						r = t ? t.accessToken : "",
						a = t ? new Date(t.expires).getTime() : 1,
						m = Object(o.e)(u.eb),
						v = Object(i.a)(),
						b = p ? c.a.Rinkeby : c.a.Ethereum,
						x = Object(n.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${r}`
							},
							expiration: a
						}), [r, a]),
						_ = {
							...O,
							STRIPE_API_KEY: s.a.stripe.apiKey(e),
							ACCESS_TOKEN: r,
							BLOCKCHAIN_PROVIDER: b
						},
						j = Object(n.useCallback)(e => {
							v(t => {
								const r = l.o(t);
								return {
									...r,
									...e,
									app: r.app,
									source: e.source || "marketplace",
									actionInfo: {
										...r.actionInfo,
										...e.actionInfo
									}
								}
							})
						}, [v]);
					return Object(n.useMemo)(() => ({
						authHeaders: x,
						config: _,
						isNightMode: m,
						sendEvent: j
					}), [x, _, m, j])
				}
		},
		"./src/reddit/components/SnoovatarModal/index.m.less": function(e, t, r) {
			e.exports = {
				snoovatarModal: "_1kJxmNuSOWrudEvEj4lSc8"
			}
		},
		"./src/reddit/components/SnoovatarModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var s = r("./src/higherOrderComponents/asModal/index.tsx"),
				a = r("./node_modules/react/index.js"),
				n = r.n(a),
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/reddit/actions/snoovatarModal.ts"),
				i = r("./src/reddit/components/AvatarBuilder/index.tsx"),
				d = r("./src/reddit/selectors/activeModal.ts"),
				l = r("./src/reddit/components/SnoovatarModal/index.m.less"),
				u = r.n(l);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const O = Object(s.a)(e => n.a.createElement(i.a, p({
				isModal: !0
			}, e)));
			t.default = () => {
				const e = Object(o.d)(),
					t = Object(o.e)(e => Object(d.a)(e));
				return n.a.createElement(O, p({}, t, {
					className: u.a.snoovatarModal,
					withOverlay: !0,
					onOverlayClick: () => e(Object(c.a)())
				}))
			}
		},
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				a = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const n = Object(a.a)(s.Cd)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SnoovatarModal.2abfd34f7a9f108f2cc6.js.map