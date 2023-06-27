// https://www.redditstatic.com/desktop2x/SnoovatarModal.13a9568677869cab30c6.js
// Retrieved at 6/27/2023, 1:50:05 PM by Reddit Dataminer v1.0.0
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
				n = r("./node_modules/react/index.js"),
				a = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/actions/login.ts"),
				d = r("./src/reddit/actions/snoovatarModal.ts"),
				l = r("./src/reddit/contexts/NavbarExp.ts"),
				u = r("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = r("./src/reddit/hooks/useTracking.ts"),
				m = r("./src/reddit/selectors/experiments/econ/index.ts"),
				O = r("./src/reddit/selectors/user.ts"),
				b = r("./src/reddit/components/AvatarBuilder/index.m.less"),
				x = r.n(b),
				v = r("./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx");

			function j() {
				return (j = Object.assign || function(e) {
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
				const b = Object(p.a)(),
					_ = Object(o.e)(e => e.user.session),
					[f, E] = Object(n.useState)(!1),
					M = Object(n.useContext)(l.a),
					S = Object(o.d)(),
					g = () => S(Object(i.openLoginModal)()),
					A = Object(v.a)();
				Object(n.useEffect)(() => {
					b(u.s)
				}, [b]), Object(n.useEffect)(() => {
					E(!0)
				}, []);
				const {
					activeDetails: h,
					activeTab: k,
					activeMeSubpage: N,
					shopTabState: I
				} = r, R = Object(n.useMemo)(() => ({
					activeTab: k || void 0,
					activeMeSubpage: N || void 0,
					activeDetails: h || void 0,
					shopTabState: I || void 0
				}), [h, k, N, I]), C = Object(o.e)(e => !Object(O.S)(e) && Object(m.x)(e));
				if (!_ || !f) return null;
				if (C) return a.a.createElement("div", {
					className: Object(c.a)(x.a.container, {
						[x.a.containerExp]: M
					})
				}, a.a.createElement(s.f, {
					openLogin: g,
					fancyBackground: !0
				}));
				const T = {
					...A,
					config: {
						...A.config,
						...r.share ? {
							COPY_SHARE_PARAMS: r.share
						} : {}
					}
				};
				return a.a.createElement("div", {
					className: Object(c.a)({
						[x.a.container]: !t,
						[x.a.snoovatarModalBuilderV2]: t,
						[x.a.containerExp]: M
					})
				}, a.a.createElement(s.a, j({}, T, {
					navState: R,
					isModal: t
				}), a.a.createElement(s.b, {
					isModal: t,
					onCloseClick: () => S(Object(d.a)())
				})))
			}
		},
		"./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return x
			}));
			var s = r("./src/config.ts"),
				n = r("./src/lib/env/index.ts"),
				a = r("./node_modules/react/index.js"),
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/reddit/endpoints/governance/crypto.ts"),
				i = r("./src/reddit/hooks/useTracking.ts"),
				d = r("./src/reddit/selectors/experiments/econ/index.ts"),
				l = r("./src/reddit/selectors/experiments/econ/marketplace.ts"),
				u = r("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts"),
				p = r("./src/reddit/selectors/telemetry.ts"),
				m = r("./src/reddit/selectors/user.ts");
			const O = !(Object(n.c)() || Object(n.b)()),
				b = {
					GRAPHQL_URL: s.a.gqlUrl,
					IS_DEVELOPMENT: O,
					IS_PRODUCTION: !O,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: s.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${s.a.snoovatarUrl}/api`
				},
				x = () => {
					const e = Object(o.e)(u.a),
						t = Object(o.e)(d.p),
						r = Object(o.e)(l.b),
						n = Object(o.e)(e => e.user.session),
						x = n ? n.accessToken : "",
						v = n ? new Date(n.expires).getTime() : 1,
						j = Object(o.e)(m.fb),
						_ = Object(i.a)(),
						f = O ? c.a.Rinkeby : c.a.Ethereum,
						E = Object(a.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${x}`
							},
							expiration: v
						}), [x, v]),
						M = {
							...b,
							STRIPE_API_KEY: s.a.stripe.apiKey(e),
							STRIPE_API_VERSION: s.a.stripe.apiVersion(t),
							ACCESS_TOKEN: x,
							BLOCKCHAIN_PROVIDER: f,
							OVERRIDES: r ? {
								NO_VAULT: !0
							} : {}
						},
						S = Object(a.useCallback)(e => {
							_(t => {
								const r = p.o(t);
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
						authHeaders: E,
						config: M,
						isNightMode: j,
						sendEvent: S
					}), [E, M, j, S])
				}
		},
		"./src/reddit/components/SnoovatarModal/index.m.less": function(e, t, r) {
			e.exports = {
				snoovatarModal: "_1kJxmNuSOWrudEvEj4lSc8",
				button: "_3gYxd9wO-Y4iI3DIopoYjt"
			}
		},
		"./src/reddit/components/SnoovatarModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var s = r("./src/higherOrderComponents/asModal/index.tsx"),
				n = r("./node_modules/react/index.js"),
				a = r.n(n),
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
			const m = Object(s.a)(e => a.a.createElement(a.a.Fragment, null, a.a.createElement(i.a, p({
				isModal: !0
			}, e))));
			t.default = () => {
				const e = Object(o.d)(),
					t = Object(o.e)(e => Object(d.a)(e));
				return a.a.createElement(m, p({}, t, {
					className: u.a.snoovatarModal,
					withOverlay: !0,
					onOverlayClick: () => e(Object(c.a)())
				}))
			}
		},
		"./src/reddit/selectors/experiments/econ/marketplace.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return c
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts"),
				a = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = e => {
					return !(Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: s.Je
					}) === s.Yd)
				},
				c = Object(a.a)(s.Ke)
		},
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const a = Object(n.a)(s.Id)
		},
		"ignored /drone/src/node_modules/qs/node_modules/object-inspect ./util.inspect": function(e, t) {}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SnoovatarModal.13a9568677869cab30c6.js.map