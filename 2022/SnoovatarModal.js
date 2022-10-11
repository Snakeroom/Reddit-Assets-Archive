// https://www.redditstatic.com/desktop2x/SnoovatarModal.1e82eb95256f1b26195d.js
// Retrieved at 10/11/2022, 9:50:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SnoovatarModal"], {
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
			var r = a("./node_modules/@reddit/marketplace/marketplace.es.js"),
				n = a("./node_modules/react/index.js"),
				s = a.n(n),
				o = a("./node_modules/react-redux/es/index.js"),
				c = a("./src/lib/classNames/index.ts"),
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
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
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
						E = Object(o.e)(e => e.user.session),
						[x, _] = Object(n.useState)(!1),
						h = Object(n.useContext)(d.a),
						g = Object(o.d)(),
						S = () => g(Object(i.openLoginModal)()),
						A = Object(v.b)(),
						M = Object(o.e)(p.h);
					Object(n.useEffect)(() => {
						b(l.r)
					}, [b]), Object(n.useEffect)(() => {
						_(!0)
					}, []);
					const {
						activeDetails: k,
						activeTab: y,
						activeMeSubpage: C,
						shopTabState: T
					} = a, N = Object(n.useMemo)(() => ({
						activeTab: y || void 0,
						activeMeSubpage: C || void 0,
						activeDetails: k || void 0,
						shopTabState: T || void 0
					}), [k, y, C, T]), R = Object(o.e)(e => !Object(m.Q)(e) && Object(p.C)(e));
					if (!E || !x) return null;
					if (R) return s.a.createElement("div", {
						className: Object(c.a)(O.a.container, {
							[O.a.containerExp]: h
						})
					}, s.a.createElement(r.f, {
						openLogin: S,
						fancyBackground: !0
					}));
					const I = {
						...A,
						config: {
							...A.config,
							...a.share ? {
								COPY_SHARE_PARAMS: a.share
							} : {}
						}
					};
					return s.a.createElement("div", {
						className: Object(c.a)({
							[O.a.container]: !t,
							[O.a.snoovatarModalBuilderV2]: t,
							[O.a.containerExp]: h
						})
					}, M ? s.a.createElement(r.a, I, s.a.createElement(r.b, {
						navState: N
					})) : s.a.createElement(j, f({}, a, {
						appWrapperProps: I,
						navState: N
					})))
				},
				j = e => {
					let {
						appWrapperProps: t,
						navState: r
					} = e;
					const o = s.a.lazy(() => Promise.all([a.e(0), a.e(1), a.e(3)]).then(a.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
							default: e.DataWrapper
						}))),
						c = s.a.lazy(() => Promise.all([a.e(0), a.e(1), a.e(3)]).then(a.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
							default: e.Builder
						})));
					return Object(n.useEffect)(() => {
						(async () => {
							await a.e(6).then(a.t.bind(null, "./node_modules/@reddit/avatars/style.css", 7))
						})()
					}, []), s.a.createElement(n.Suspense, {
						fallback: s.a.createElement("div", null)
					}, s.a.createElement(o, f({}, t, {
						blockchainProvider: t.config.BLOCKCHAIN_PROVIDER,
						accessToken: `${t.config.ACCESS_TOKEN}`
					}), s.a.createElement(c, {
						navState: r
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
			var r = a("./src/config.ts"),
				n = a("./src/lib/env/index.ts"),
				s = a("./node_modules/react/index.js"),
				o = a.n(s),
				c = a("./node_modules/react-redux/es/index.js"),
				i = a("./src/reddit/endpoints/governance/crypto.ts"),
				d = a("./src/reddit/hooks/useTracking.ts"),
				l = a("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts"),
				u = a("./src/reddit/selectors/telemetry.ts"),
				p = a("./src/reddit/selectors/user.ts");
			const m = !(Object(n.c)() || Object(n.b)()),
				b = {
					GRAPHQL_URL: r.a.gqlUrl,
					IS_DEVELOPMENT: m,
					IS_PRODUCTION: !m,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: r.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${r.a.snoovatarUrl}/api`
				},
				O = () => {
					const e = Object(c.e)(l.a),
						t = Object(c.e)(e => e.user.session),
						a = t ? t.accessToken : "",
						n = t ? new Date(t.expires).getTime() : 1,
						o = Object(c.e)(p.db),
						O = Object(d.a)(),
						v = m ? i.a.Rinkeby : i.a.Ethereum,
						f = Object(s.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${a}`
							},
							expiration: n
						}), [a, n]),
						E = {
							...b,
							STRIPE_API_KEY: r.a.stripe.apiKey(e),
							ACCESS_TOKEN: a,
							BLOCKCHAIN_PROVIDER: v
						},
						j = Object(s.useCallback)(e => {
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
						isNightMode: o,
						sendEvent: j
					}), [f, E, o, j])
				},
				v = () => {
					const e = Object(c.e)(e => e.user.session),
						t = e ? e.accessToken : "",
						a = Object(c.e)(p.db),
						n = Object(d.a)(),
						l = m ? i.a.Rinkeby : i.a.Ethereum;
					return Object(s.useMemo)(() => ({
						api: {
							accessToken: t
						},
						fbt: {
							inline: (e, t) => e,
							singular: (e, t) => o.a.createElement(o.a.Fragment, null, e),
							param: (e, t) => o.a.createElement(o.a.Fragment, null, e),
							plural: (e, t) => o.a.createElement(o.a.Fragment, null, e)
						},
						gql: {
							host: r.a.gqlUrl,
							fetchOptions: {
								headers: {
									Authorization: `Bearer ${t}`
								}
							}
						},
						nightModeActive: () => a,
						sendEvent(e) {
							n(t => {
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
					}), [t, l, a, n])
				}
		},
		"./src/reddit/components/SnoovatarModal/index.m.less": function(e, t, a) {
			e.exports = {
				snoovatarModal: "_1kJxmNuSOWrudEvEj4lSc8"
			}
		},
		"./src/reddit/components/SnoovatarModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var r = a("./src/higherOrderComponents/asModal/index.tsx"),
				n = a("./node_modules/react/index.js"),
				s = a.n(n),
				o = a("./node_modules/react-redux/es/index.js"),
				c = a("./src/reddit/actions/snoovatarModal.ts"),
				i = a("./src/reddit/components/AvatarBuilder/index.tsx"),
				d = a("./src/reddit/selectors/activeModal.ts"),
				l = a("./src/reddit/components/SnoovatarModal/index.m.less"),
				u = a.n(l);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(r.a)(e => s.a.createElement(i.a, p({
				isModal: !0
			}, e)));
			t.default = () => {
				const e = Object(o.d)(),
					t = Object(o.e)(e => Object(d.a)(e));
				return s.a.createElement(m, p({}, t, {
					className: u.a.snoovatarModal,
					withOverlay: !0,
					onOverlayClick: () => e(Object(c.a)())
				}))
			}
		},
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			}));
			var r = a("./src/reddit/constants/experiments.ts"),
				n = a("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const s = Object(n.a)(r.td)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SnoovatarModal.1e82eb95256f1b26195d.js.map