// https://www.redditstatic.com/desktop2x/Avatar.1cb97b735bb01b735ce2.js
// Retrieved at 10/11/2022, 9:50:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Avatar"], {
		"./src/reddit/components/AvatarBuilder/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/AvatarBuilder/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return E
			}));
			var n = a("./node_modules/@reddit/marketplace/marketplace.es.js"),
				r = a("./node_modules/react/index.js"),
				s = a.n(r),
				c = a("./node_modules/react-redux/es/index.js"),
				o = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/actions/login.ts"),
				d = a("./src/reddit/contexts/NavbarExp.ts"),
				l = a("./src/reddit/helpers/trackers/snoovatar.ts"),
				u = a("./src/reddit/hooks/useTracking.ts"),
				p = a("./src/reddit/selectors/experiments/econ/index.ts"),
				m = a("./src/reddit/selectors/user.ts"),
				b = a("./src/reddit/components/AvatarBuilder/index.m.less"),
				O = a.n(b),
				v = a("./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx");

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			const E = e => {
					let {
						isModal: t,
						...a
					} = e;
					const b = Object(u.a)(),
						E = Object(c.e)(e => e.user.session),
						[j, x] = Object(r.useState)(!1),
						g = Object(r.useContext)(d.a),
						h = Object(c.d)(),
						A = () => h(Object(i.openLoginModal)()),
						S = Object(v.b)(),
						k = Object(c.e)(p.h);
					Object(r.useEffect)(() => {
						b(l.r)
					}, [b]), Object(r.useEffect)(() => {
						x(!0)
					}, []);
					const {
						activeDetails: M,
						activeTab: T,
						activeMeSubpage: C,
						shopTabState: R
					} = a, y = Object(r.useMemo)(() => ({
						activeTab: T || void 0,
						activeMeSubpage: C || void 0,
						activeDetails: M || void 0,
						shopTabState: R || void 0
					}), [M, T, C, R]), I = Object(c.e)(e => !Object(m.Q)(e) && Object(p.C)(e));
					if (!E || !j) return null;
					if (I) return s.a.createElement("div", {
						className: Object(o.a)(O.a.container, {
							[O.a.containerExp]: g
						})
					}, s.a.createElement(n.f, {
						openLogin: A,
						fancyBackground: !0
					}));
					const N = {
						...S,
						config: {
							...S.config,
							...a.share ? {
								COPY_SHARE_PARAMS: a.share
							} : {}
						}
					};
					return s.a.createElement("div", {
						className: Object(o.a)({
							[O.a.container]: !t,
							[O.a.snoovatarModalBuilderV2]: t,
							[O.a.containerExp]: g
						})
					}, k ? s.a.createElement(n.a, N, s.a.createElement(n.b, {
						navState: y
					})) : s.a.createElement(_, f({}, a, {
						appWrapperProps: N,
						navState: y
					})))
				},
				_ = e => {
					let {
						appWrapperProps: t,
						navState: n
					} = e;
					const c = s.a.lazy(() => Promise.all([a.e(0), a.e(1), a.e(3)]).then(a.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
							default: e.DataWrapper
						}))),
						o = s.a.lazy(() => Promise.all([a.e(0), a.e(1), a.e(3)]).then(a.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
							default: e.Builder
						})));
					return Object(r.useEffect)(() => {
						(async () => {
							await a.e(6).then(a.t.bind(null, "./node_modules/@reddit/avatars/style.css", 7))
						})()
					}, []), s.a.createElement(r.Suspense, {
						fallback: s.a.createElement("div", null)
					}, s.a.createElement(c, f({}, t, {
						blockchainProvider: t.config.BLOCKCHAIN_PROVIDER,
						accessToken: `${t.config.ACCESS_TOKEN}`
					}), s.a.createElement(o, {
						navState: n
					}), s.a.createElement("div", {
						id: "legacy-avatar-builder"
					})))
				}
		},
		"./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return O
			})), a.d(t, "a", (function() {
				return v
			}));
			var n = a("./src/config.ts"),
				r = a("./src/lib/env/index.ts"),
				s = a("./node_modules/react/index.js"),
				c = a.n(s),
				o = a("./node_modules/react-redux/es/index.js"),
				i = a("./src/reddit/endpoints/governance/crypto.ts"),
				d = a("./src/reddit/hooks/useTracking.ts"),
				l = a("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts"),
				u = a("./src/reddit/selectors/telemetry.ts"),
				p = a("./src/reddit/selectors/user.ts");
			const m = !(Object(r.c)() || Object(r.b)()),
				b = {
					GRAPHQL_URL: n.a.gqlUrl,
					IS_DEVELOPMENT: m,
					IS_PRODUCTION: !m,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: n.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${n.a.snoovatarUrl}/api`
				},
				O = () => {
					const e = Object(o.e)(l.a),
						t = Object(o.e)(e => e.user.session),
						a = t ? t.accessToken : "",
						r = t ? new Date(t.expires).getTime() : 1,
						c = Object(o.e)(p.db),
						O = Object(d.a)(),
						v = m ? i.a.Rinkeby : i.a.Ethereum,
						f = Object(s.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${a}`
							},
							expiration: r
						}), [a, r]),
						E = {
							...b,
							STRIPE_API_KEY: n.a.stripe.apiKey(e),
							ACCESS_TOKEN: a,
							BLOCKCHAIN_PROVIDER: v
						},
						_ = Object(s.useCallback)(e => {
							O(t => {
								const a = u.o(t);
								return {
									...a,
									...e,
									app: a.app,
									source: e.source || "marketplace",
									actionInfo: {
										...a.actionInfo,
										...e.actionInfo
									}
								}
							})
						}, [O]);
					return Object(s.useMemo)(() => ({
						authHeaders: f,
						config: E,
						isNightMode: c,
						sendEvent: _
					}), [f, E, c, _])
				},
				v = () => {
					const e = Object(o.e)(e => e.user.session),
						t = e ? e.accessToken : "",
						a = Object(o.e)(p.db),
						r = Object(d.a)(),
						l = m ? i.a.Rinkeby : i.a.Ethereum;
					return Object(s.useMemo)(() => ({
						api: {
							accessToken: t
						},
						fbt: {
							inline: (e, t) => e,
							singular: (e, t) => c.a.createElement(c.a.Fragment, null, e),
							param: (e, t) => c.a.createElement(c.a.Fragment, null, e),
							plural: (e, t) => c.a.createElement(c.a.Fragment, null, e)
						},
						gql: {
							host: n.a.gqlUrl,
							fetchOptions: {
								headers: {
									Authorization: `Bearer ${t}`
								}
							}
						},
						nightModeActive: () => a,
						sendEvent(e) {
							r(t => {
								const a = u.o(t);
								return {
									...a,
									...e,
									app: a.app,
									source: e.source || "marketplace",
									actionInfo: {
										...a.actionInfo,
										...e.actionInfo
									}
								}
							})
						},
						blockchainProvider: l
					}), [t, l, a, r])
				}
		},
		"./src/reddit/pages/Avatar/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				s = a("./src/reddit/components/AvatarBuilder/index.tsx");
			t.default = function() {
				return r.a.createElement(s.a, {
					isModal: !1
				})
			}
		},
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			}));
			var n = a("./src/reddit/constants/experiments.ts"),
				r = a("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const s = Object(r.a)(n.td)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Avatar.1cb97b735bb01b735ce2.js.map