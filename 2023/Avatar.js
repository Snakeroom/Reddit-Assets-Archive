// https://www.redditstatic.com/desktop2x/Avatar.a3f4697a6269c7a40e9e.js
// Retrieved at 1/30/2023, 7:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Avatar"], {
		"./src/reddit/components/AvatarBuilder/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/AvatarBuilder/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			var r = s("./node_modules/@reddit/marketplace/marketplace.es.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				c = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/actions/login.ts"),
				d = s("./src/reddit/actions/snoovatarModal.ts"),
				l = s("./src/reddit/contexts/NavbarExp.ts"),
				u = s("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = s("./src/reddit/hooks/useTracking.ts"),
				m = s("./src/reddit/selectors/experiments/econ/index.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				b = s("./src/reddit/components/AvatarBuilder/index.m.less"),
				v = s.n(b),
				_ = s("./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx");

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const x = e => {
				let {
					isModal: t,
					...s
				} = e;
				const b = Object(p.a)(),
					x = Object(c.e)(e => e.user.session),
					[j, E] = Object(n.useState)(!1),
					A = Object(n.useContext)(l.a),
					g = Object(c.d)(),
					M = () => g(Object(i.openLoginModal)()),
					S = Object(_.a)();
				Object(n.useEffect)(() => {
					b(u.r)
				}, [b]), Object(n.useEffect)(() => {
					E(!0)
				}, []);
				const {
					activeDetails: h,
					activeTab: k,
					activeMeSubpage: C,
					shopTabState: T
				} = s, N = Object(n.useMemo)(() => ({
					activeTab: k || void 0,
					activeMeSubpage: C || void 0,
					activeDetails: h || void 0,
					shopTabState: T || void 0
				}), [h, k, C, T]), R = Object(c.e)(e => !Object(O.S)(e) && Object(m.u)(e));
				if (!x || !j) return null;
				if (R) return a.a.createElement("div", {
					className: Object(o.a)(v.a.container, {
						[v.a.containerExp]: A
					})
				}, a.a.createElement(r.f, {
					openLogin: M,
					fancyBackground: !0
				}));
				const L = {
					...S,
					config: {
						...S.config,
						...s.share ? {
							COPY_SHARE_PARAMS: s.share
						} : {}
					}
				};
				return a.a.createElement("div", {
					className: Object(o.a)({
						[v.a.container]: !t,
						[v.a.snoovatarModalBuilderV2]: t,
						[v.a.containerExp]: A
					})
				}, a.a.createElement(r.a, f({}, L, {
					navState: N,
					isModal: t
				}), a.a.createElement(r.b, {
					isModal: t,
					onCloseClick: () => g(Object(d.a)())
				})))
			}
		},
		"./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return O
			}));
			var r = s("./src/config.ts"),
				n = s("./src/lib/env/index.ts"),
				a = s("./node_modules/react/index.js"),
				c = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/endpoints/governance/crypto.ts"),
				i = s("./src/reddit/hooks/useTracking.ts"),
				d = s("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts"),
				l = s("./src/reddit/selectors/telemetry.ts"),
				u = s("./src/reddit/selectors/user.ts");
			const p = !(Object(n.c)() || Object(n.b)()),
				m = {
					GRAPHQL_URL: r.a.gqlUrl,
					IS_DEVELOPMENT: p,
					IS_PRODUCTION: !p,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: r.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${r.a.snoovatarUrl}/api`
				},
				O = () => {
					const e = Object(c.e)(d.a),
						t = Object(c.e)(e => e.user.session),
						s = t ? t.accessToken : "",
						n = t ? new Date(t.expires).getTime() : 1,
						O = Object(c.e)(u.fb),
						b = Object(i.a)(),
						v = p ? o.a.Rinkeby : o.a.Ethereum,
						_ = Object(a.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${s}`
							},
							expiration: n
						}), [s, n]),
						f = {
							...m,
							STRIPE_API_KEY: r.a.stripe.apiKey(e),
							ACCESS_TOKEN: s,
							BLOCKCHAIN_PROVIDER: v
						},
						x = Object(a.useCallback)(e => {
							b(t => {
								const s = l.o(t);
								return {
									...s,
									...e,
									app: s.app,
									source: e.source || "marketplace",
									actionInfo: {
										...s.actionInfo,
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
		"./src/reddit/pages/Avatar/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/reddit/components/AvatarBuilder/index.tsx");
			t.default = function() {
				return n.a.createElement(a.a, {
					isModal: !1
				})
			}
		},
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const a = Object(n.a)(r.rd)
		},
		"ignored /drone/src/node_modules/qs/node_modules/object-inspect ./util.inspect": function(e, t) {}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Avatar.a3f4697a6269c7a40e9e.js.map