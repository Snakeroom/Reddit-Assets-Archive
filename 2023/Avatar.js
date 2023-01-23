// https://www.redditstatic.com/desktop2x/Avatar.5efc30b7a6508bbfd0da.js
// Retrieved at 1/23/2023, 12:20:04 PM by Reddit Dataminer v1.0.0
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
				d = r("./src/reddit/actions/snoovatarModal.ts"),
				l = r("./src/reddit/contexts/NavbarExp.ts"),
				u = r("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = r("./src/reddit/hooks/useTracking.ts"),
				m = r("./src/reddit/selectors/experiments/econ/index.ts"),
				O = r("./src/reddit/selectors/user.ts"),
				b = r("./src/reddit/components/AvatarBuilder/index.m.less"),
				v = r.n(b),
				_ = r("./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx");

			function f() {
				return (f = Object.assign || function(e) {
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
				const b = Object(p.a)(),
					x = Object(c.e)(e => e.user.session),
					[j, E] = Object(n.useState)(!1),
					A = Object(n.useContext)(l.a),
					g = Object(c.d)(),
					h = () => g(Object(i.openLoginModal)()),
					M = Object(_.a)(),
					S = Object(c.e)(m.a);
				Object(n.useEffect)(() => {
					{
						const e = {},
							t = new URLSearchParams(window.location.search);
						Object(s.k)(t) && S && (e.domain = "marketplace_sharelink", e.url = window.location.href), b(Object(u.r)(e))
					}
				}, [b, S]), Object(n.useEffect)(() => {
					E(!0)
				}, []);
				const {
					activeDetails: k,
					activeTab: C,
					activeMeSubpage: R,
					shopTabState: T
				} = r, L = Object(n.useMemo)(() => ({
					activeTab: C || void 0,
					activeMeSubpage: R || void 0,
					activeDetails: k || void 0,
					shopTabState: T || void 0
				}), [k, C, R, T]), N = Object(c.e)(e => !Object(O.S)(e) && Object(m.v)(e));
				if (!x || !j) return null;
				if (N) return a.a.createElement("div", {
					className: Object(o.a)(v.a.container, {
						[v.a.containerExp]: A
					})
				}, a.a.createElement(s.f, {
					openLogin: h,
					fancyBackground: !0
				}));
				const B = {
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
						[v.a.container]: !t,
						[v.a.snoovatarModalBuilderV2]: t,
						[v.a.containerExp]: A
					})
				}, a.a.createElement(s.a, f({}, B, {
					navState: L,
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
						v = p ? o.a.Rinkeby : o.a.Ethereum,
						_ = Object(a.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${r}`
							},
							expiration: n
						}), [r, n]),
						f = {
							...m,
							STRIPE_API_KEY: s.a.stripe.apiKey(e),
							ACCESS_TOKEN: r,
							BLOCKCHAIN_PROVIDER: v
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
						authHeaders: _,
						config: f,
						isNightMode: O,
						sendEvent: x
					}), [_, f, O, x])
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Avatar.5efc30b7a6508bbfd0da.js.map