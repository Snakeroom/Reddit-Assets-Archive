// https://www.redditstatic.com/desktop2x/Avatar.79da2741c122c5a2ff16.js
// Retrieved at 7/31/2023, 11:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Avatar"], {
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
				return f
			}));
			var s = r("./node_modules/@reddit/marketplace/marketplace.es.js"),
				n = r("./node_modules/react/index.js"),
				a = r.n(n),
				c = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/actions/login.ts"),
				d = r("./src/reddit/actions/snoovatarModal.ts"),
				l = r("./src/reddit/contexts/NavbarExp.ts"),
				u = r("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = r("./src/reddit/hooks/useTracking.ts"),
				m = r("./src/reddit/selectors/experiments/econ/index.ts"),
				O = r("./src/reddit/selectors/user.ts"),
				b = r("./src/reddit/components/AvatarBuilder/index.m.less"),
				x = r.n(b),
				_ = r("./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const f = e => {
				let {
					isModal: t,
					...r
				} = e;
				const b = Object(p.a)(),
					f = Object(c.e)(e => e.user.session),
					[E, j] = Object(n.useState)(!1),
					A = Object(n.useContext)(l.a),
					g = Object(c.d)(),
					S = () => g(Object(i.openLoginModal)()),
					M = Object(_.a)();
				Object(n.useEffect)(() => {
					b(u.s)
				}, [b]), Object(n.useEffect)(() => {
					j(!0)
				}, []);
				const {
					activeDetails: h,
					activeTab: R,
					activeMeSubpage: k,
					shopTabState: N
				} = r, T = Object(n.useMemo)(() => ({
					activeTab: R || void 0,
					activeMeSubpage: k || void 0,
					activeDetails: h || void 0,
					shopTabState: N || void 0
				}), [h, R, k, N]), C = Object(c.e)(e => !Object(O.S)(e) && Object(m.x)(e));
				if (!f || !E) return null;
				if (C) return a.a.createElement("div", {
					className: Object(o.a)(x.a.container, {
						[x.a.containerExp]: A
					})
				}, a.a.createElement(s.f, {
					openLogin: S,
					fancyBackground: !0
				}));
				const I = {
					...M,
					config: {
						...M.config,
						...r.share ? {
							COPY_SHARE_PARAMS: r.share
						} : {}
					}
				};
				return a.a.createElement("div", {
					className: Object(o.a)({
						[x.a.container]: !t,
						[x.a.snoovatarModalBuilderV2]: t,
						[x.a.containerExp]: A
					})
				}, a.a.createElement(s.a, v({}, I, {
					navState: T,
					isModal: t
				}), a.a.createElement(s.b, {
					isModal: t,
					onCloseClick: () => g(Object(d.a)())
				})))
			}
		},
		"./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return b
			}));
			var s = r("./src/config.ts"),
				n = r("./src/lib/env/index.ts"),
				a = r("./node_modules/react/index.js"),
				c = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/endpoints/governance/crypto.ts"),
				i = r("./src/reddit/hooks/useTracking.ts"),
				d = r("./src/reddit/selectors/experiments/econ/marketplace.ts"),
				l = r("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts"),
				u = r("./src/reddit/selectors/telemetry.ts"),
				p = r("./src/reddit/selectors/user.ts");
			const m = !(Object(n.c)() || Object(n.b)()),
				O = {
					GRAPHQL_URL: s.a.gqlUrl,
					IS_DEVELOPMENT: m,
					IS_PRODUCTION: !m,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: s.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${s.a.snoovatarUrl}/api`
				},
				b = () => {
					const e = Object(c.e)(l.a),
						t = Object(c.e)(d.b),
						r = Object(c.e)(e => e.user.session),
						n = r ? r.accessToken : "",
						b = r ? new Date(r.expires).getTime() : 1,
						x = Object(c.e)(p.fb),
						_ = Object(i.a)(),
						v = m ? o.a.Rinkeby : o.a.Ethereum,
						f = Object(a.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${n}`
							},
							expiration: b
						}), [n, b]),
						E = {
							...O,
							STRIPE_API_KEY: s.a.stripe.apiKey(e),
							STRIPE_API_VERSION: s.a.stripe.apiVersion(!0),
							ACCESS_TOKEN: n,
							BLOCKCHAIN_PROVIDER: v,
							OVERRIDES: t ? {
								NO_VAULT: !0
							} : {}
						},
						j = Object(a.useCallback)(e => {
							_(t => {
								const r = u.q(t);
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
						}, [_]);
					return Object(a.useMemo)(() => ({
						authHeaders: f,
						config: E,
						isNightMode: x,
						sendEvent: j
					}), [f, E, x, j])
				}
		},
		"./src/reddit/pages/Avatar/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/reddit/components/AvatarBuilder/index.tsx");
			t.default = function() {
				return n.a.createElement(a.a, {
					isModal: !1
				})
			}
		},
		"./src/reddit/selectors/experiments/econ/marketplace.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts"),
				a = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const c = e => {
					return !(Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: s.Le
					}) === s.Zd)
				},
				o = Object(a.a)(s.Me)
		},
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const a = Object(n.a)(s.Jd)
		},
		"ignored /drone/src/node_modules/qs/node_modules/object-inspect ./util.inspect": function(e, t) {}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Avatar.79da2741c122c5a2ff16.js.map