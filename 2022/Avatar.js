// https://www.redditstatic.com/desktop2x/Avatar.309a6327a3a06964d8b5.js
// Retrieved at 11/2/2022, 11:10:04 AM by Reddit Dataminer v1.0.0
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
				return x
			}));
			var s = r("./node_modules/@reddit/marketplace/marketplace.es.js"),
				n = r("./node_modules/react/index.js"),
				a = r.n(n),
				c = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/actions/login.ts"),
				d = r("./src/reddit/contexts/NavbarExp.ts"),
				l = r("./src/reddit/helpers/trackers/snoovatar.ts"),
				u = r("./src/reddit/hooks/useTracking.ts"),
				p = r("./src/reddit/selectors/experiments/econ/index.ts"),
				O = r("./src/reddit/selectors/user.ts"),
				m = r("./src/reddit/components/AvatarBuilder/index.m.less"),
				b = r.n(m),
				v = r("./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const x = e => {
				let {
					isModal: t,
					...r
				} = e;
				const m = Object(u.a)(),
					x = Object(c.e)(e => e.user.session),
					[f, j] = Object(n.useState)(!1),
					E = Object(n.useContext)(d.a),
					A = Object(c.d)(),
					g = () => A(Object(i.openLoginModal)()),
					S = Object(v.a)();
				Object(n.useEffect)(() => {
					m(l.r)
				}, [m]), Object(n.useEffect)(() => {
					j(!0)
				}, []);
				const {
					activeDetails: M,
					activeTab: h,
					activeMeSubpage: R,
					shopTabState: T
				} = r, k = Object(n.useMemo)(() => ({
					activeTab: h || void 0,
					activeMeSubpage: R || void 0,
					activeDetails: M || void 0,
					shopTabState: T || void 0
				}), [M, h, R, T]), N = Object(c.e)(e => !Object(O.R)(e) && Object(p.y)(e));
				if (!x || !f) return null;
				if (N) return a.a.createElement("div", {
					className: Object(o.a)(b.a.container, {
						[b.a.containerExp]: E
					})
				}, a.a.createElement(s.f, {
					openLogin: g,
					fancyBackground: !0
				}));
				const C = {
					...S,
					config: {
						...S.config,
						...r.share ? {
							COPY_SHARE_PARAMS: r.share
						} : {}
					}
				};
				return a.a.createElement("div", {
					className: Object(o.a)({
						[b.a.container]: !t,
						[b.a.snoovatarModalBuilderV2]: t,
						[b.a.containerExp]: E
					})
				}, a.a.createElement(s.a, _({}, C, {
					navState: k
				}), a.a.createElement(s.b, null)))
			}
		},
		"./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return m
			}));
			var s = r("./src/config.ts"),
				n = r("./src/lib/env/index.ts"),
				a = r("./node_modules/react/index.js"),
				c = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/endpoints/governance/crypto.ts"),
				i = r("./src/reddit/hooks/useTracking.ts"),
				d = r("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts"),
				l = r("./src/reddit/selectors/telemetry.ts"),
				u = r("./src/reddit/selectors/user.ts");
			const p = !(Object(n.c)() || Object(n.b)()),
				O = {
					GRAPHQL_URL: s.a.gqlUrl,
					IS_DEVELOPMENT: p,
					IS_PRODUCTION: !p,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: s.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${s.a.snoovatarUrl}/api`
				},
				m = () => {
					const e = Object(c.e)(d.a),
						t = Object(c.e)(e => e.user.session),
						r = t ? t.accessToken : "",
						n = t ? new Date(t.expires).getTime() : 1,
						m = Object(c.e)(u.eb),
						b = Object(i.a)(),
						v = p ? o.a.Rinkeby : o.a.Ethereum,
						_ = Object(a.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${r}`
							},
							expiration: n
						}), [r, n]),
						x = {
							...O,
							STRIPE_API_KEY: s.a.stripe.apiKey(e),
							ACCESS_TOKEN: r,
							BLOCKCHAIN_PROVIDER: v
						},
						f = Object(a.useCallback)(e => {
							b(t => {
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
						}, [b]);
					return Object(a.useMemo)(() => ({
						authHeaders: _,
						config: x,
						isNightMode: m,
						sendEvent: f
					}), [_, x, m, f])
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
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const a = Object(n.a)(s.zd)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Avatar.309a6327a3a06964d8b5.js.map