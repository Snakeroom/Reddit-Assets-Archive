// https://www.redditstatic.com/desktop2x/Avatar.24126987a105e2c1199d.js
// Retrieved at 6/7/2023, 12:10:03 AM by Reddit Dataminer v1.0.0
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
				return f
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
				x = s.n(b),
				_ = s("./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const f = e => {
				let {
					isModal: t,
					...s
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
					activeMeSubpage: T,
					shopTabState: k
				} = s, N = Object(n.useMemo)(() => ({
					activeTab: R || void 0,
					activeMeSubpage: T || void 0,
					activeDetails: h || void 0,
					shopTabState: k || void 0
				}), [h, R, T, k]), C = Object(c.e)(e => !Object(O.S)(e) && Object(m.x)(e));
				if (!f || !E) return null;
				if (C) return a.a.createElement("div", {
					className: Object(o.a)(x.a.container, {
						[x.a.containerExp]: A
					})
				}, a.a.createElement(r.f, {
					openLogin: S,
					fancyBackground: !0
				}));
				const I = {
					...M,
					config: {
						...M.config,
						...s.share ? {
							COPY_SHARE_PARAMS: s.share
						} : {}
					}
				};
				return a.a.createElement("div", {
					className: Object(o.a)({
						[x.a.container]: !t,
						[x.a.snoovatarModalBuilderV2]: t,
						[x.a.containerExp]: A
					})
				}, a.a.createElement(r.a, v({}, I, {
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
				return x
			}));
			var r = s("./src/config.ts"),
				n = s("./src/lib/env/index.ts"),
				a = s("./node_modules/react/index.js"),
				c = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/endpoints/governance/crypto.ts"),
				i = s("./src/reddit/hooks/useTracking.ts"),
				d = s("./src/reddit/selectors/experiments/econ/index.ts"),
				l = s("./src/reddit/selectors/experiments/econ/marketplace.ts"),
				u = s("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts"),
				p = s("./src/reddit/selectors/telemetry.ts"),
				m = s("./src/reddit/selectors/user.ts");
			const O = !(Object(n.c)() || Object(n.b)()),
				b = {
					GRAPHQL_URL: r.a.gqlUrl,
					IS_DEVELOPMENT: O,
					IS_PRODUCTION: !O,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: r.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${r.a.snoovatarUrl}/api`
				},
				x = () => {
					const e = Object(c.e)(u.a),
						t = Object(c.e)(d.p),
						s = Object(c.e)(l.b),
						n = Object(c.e)(e => e.user.session),
						x = n ? n.accessToken : "",
						_ = n ? new Date(n.expires).getTime() : 1,
						v = Object(c.e)(m.fb),
						f = Object(i.a)(),
						E = O ? o.a.Rinkeby : o.a.Ethereum,
						j = Object(a.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${x}`
							},
							expiration: _
						}), [x, _]),
						A = {
							...b,
							STRIPE_API_KEY: r.a.stripe.apiKey(e),
							STRIPE_API_VERSION: r.a.stripe.apiVersion(t),
							ACCESS_TOKEN: x,
							BLOCKCHAIN_PROVIDER: E,
							OVERRIDES: s ? {
								NO_VAULT: !0
							} : {}
						},
						g = Object(a.useCallback)(e => {
							f(t => {
								const s = p.o(t);
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
						}, [f]);
					return Object(a.useMemo)(() => ({
						authHeaders: j,
						config: A,
						isNightMode: v,
						sendEvent: g
					}), [j, A, v, g])
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
		"./src/reddit/selectors/experiments/econ/marketplace.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return o
			}));
			var r = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				a = s("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const c = e => {
					return !(Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: r.De
					}) === r.Td)
				},
				o = Object(a.a)(r.Ee)
		},
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const a = Object(n.a)(r.Dd)
		},
		"ignored /drone/src/node_modules/qs/node_modules/object-inspect ./util.inspect": function(e, t) {}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Avatar.24126987a105e2c1199d.js.map