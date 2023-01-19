// https://www.redditstatic.com/desktop2x/Avatar.f9e569142cd443fcdf8d.js
// Retrieved at 1/18/2023, 8:00:05 PM by Reddit Dataminer v1.0.0
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
				d = r("./src/reddit/contexts/NavbarExp.ts"),
				l = r("./src/reddit/helpers/trackers/snoovatar.ts"),
				u = r("./src/reddit/hooks/useTracking.ts"),
				p = r("./src/reddit/selectors/experiments/econ/index.ts"),
				m = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/components/AvatarBuilder/index.m.less"),
				b = r.n(O),
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
				const O = Object(u.a)(),
					f = Object(c.e)(e => e.user.session),
					[x, j] = Object(n.useState)(!1),
					E = Object(n.useContext)(d.a),
					A = Object(c.d)(),
					g = () => A(Object(i.openLoginModal)()),
					h = Object(_.a)(),
					S = Object(c.e)(p.a);
				Object(n.useEffect)(() => {
					{
						const e = {},
							t = new URLSearchParams(window.location.search);
						Object(s.k)(t) && S && (e.domain = "marketplace_sharelink", e.url = window.location.href), O(Object(l.r)(e))
					}
				}, [O, S]), Object(n.useEffect)(() => {
					j(!0)
				}, []);
				const {
					activeDetails: M,
					activeTab: k,
					activeMeSubpage: R,
					shopTabState: T
				} = r, L = Object(n.useMemo)(() => ({
					activeTab: k || void 0,
					activeMeSubpage: R || void 0,
					activeDetails: M || void 0,
					shopTabState: T || void 0
				}), [M, k, R, T]), N = Object(c.e)(e => !Object(m.S)(e) && Object(p.v)(e));
				if (!f || !x) return null;
				if (N) return a.a.createElement("div", {
					className: Object(o.a)(b.a.container, {
						[b.a.containerExp]: E
					})
				}, a.a.createElement(s.f, {
					openLogin: g,
					fancyBackground: !0
				}));
				const C = {
					...h,
					config: {
						...h.config,
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
				}, a.a.createElement(s.a, v({}, C, {
					navState: L,
					isModal: t
				}), a.a.createElement(s.b, null)))
			}
		},
		"./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return O
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
				m = {
					GRAPHQL_URL: s.a.gqlUrl,
					IS_DEVELOPMENT: p,
					IS_PRODUCTION: !p,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: s.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${s.a.snoovatarUrl}/api`
				},
				O = () => {
					const e = Object(c.e)(d.a),
						t = Object(c.e)(e => e.user.session),
						r = t ? t.accessToken : "",
						n = t ? new Date(t.expires).getTime() : 1,
						O = Object(c.e)(u.fb),
						b = Object(i.a)(),
						_ = p ? o.a.Rinkeby : o.a.Ethereum,
						v = Object(a.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${r}`
							},
							expiration: n
						}), [r, n]),
						f = {
							...m,
							STRIPE_API_KEY: s.a.stripe.apiKey(e),
							ACCESS_TOKEN: r,
							BLOCKCHAIN_PROVIDER: _
						},
						x = Object(a.useCallback)(e => {
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
						authHeaders: v,
						config: f,
						isNightMode: O,
						sendEvent: x
					}), [v, f, O, x])
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
			const a = Object(n.a)(s.od)
		},
		"ignored /drone/src/node_modules/qs/node_modules/object-inspect ./util.inspect": function(e, t) {}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Avatar.f9e569142cd443fcdf8d.js.map