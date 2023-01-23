// https://www.redditstatic.com/desktop2x/SnoovatarModal.d4d067a92de04572f41f.js
// Retrieved at 1/23/2023, 1:50:04 PM by Reddit Dataminer v1.0.0
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
			var a = r("./node_modules/@reddit/marketplace/marketplace.es.js"),
				s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/actions/login.ts"),
				d = r("./src/reddit/actions/snoovatarModal.ts"),
				l = r("./src/reddit/contexts/NavbarExp.ts"),
				u = r("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = r("./src/reddit/hooks/useTracking.ts"),
				O = r("./src/reddit/selectors/experiments/econ/index.ts"),
				m = r("./src/reddit/selectors/user.ts"),
				b = r("./src/reddit/components/AvatarBuilder/index.m.less"),
				v = r.n(b),
				j = r("./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
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
					[f, E] = Object(s.useState)(!1),
					M = Object(s.useContext)(l.a),
					g = Object(o.d)(),
					h = () => g(Object(i.openLoginModal)()),
					S = Object(j.a)(),
					A = Object(o.e)(O.a);
				Object(s.useEffect)(() => {
					{
						const e = {},
							t = new URLSearchParams(window.location.search);
						Object(a.k)(t) && A && (e.domain = "marketplace_sharelink", e.url = window.location.href), b(Object(u.r)(e))
					}
				}, [b, A]), Object(s.useEffect)(() => {
					E(!0)
				}, []);
				const {
					activeDetails: k,
					activeTab: C,
					activeMeSubpage: N,
					shopTabState: y
				} = r, R = Object(s.useMemo)(() => ({
					activeTab: C || void 0,
					activeMeSubpage: N || void 0,
					activeDetails: k || void 0,
					shopTabState: y || void 0
				}), [k, C, N, y]), T = Object(o.e)(e => !Object(m.S)(e) && Object(O.v)(e));
				if (!_ || !f) return null;
				if (T) return n.a.createElement("div", {
					className: Object(c.a)(v.a.container, {
						[v.a.containerExp]: M
					})
				}, n.a.createElement(a.f, {
					openLogin: h,
					fancyBackground: !0
				}));
				const w = {
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
						[v.a.containerExp]: M
					})
				}, n.a.createElement(a.a, x({}, w, {
					navState: R,
					isModal: t
				}), n.a.createElement(a.b, {
					isModal: t,
					onCloseClick: () => g(Object(d.a)())
				})))
			}
		},
		"./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return m
			}));
			var a = r("./src/config.ts"),
				s = r("./src/lib/env/index.ts"),
				n = r("./node_modules/react/index.js"),
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/reddit/endpoints/governance/crypto.ts"),
				i = r("./src/reddit/hooks/useTracking.ts"),
				d = r("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts"),
				l = r("./src/reddit/selectors/telemetry.ts"),
				u = r("./src/reddit/selectors/user.ts");
			const p = !(Object(s.c)() || Object(s.b)()),
				O = {
					GRAPHQL_URL: a.a.gqlUrl,
					IS_DEVELOPMENT: p,
					IS_PRODUCTION: !p,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: a.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${a.a.snoovatarUrl}/api`
				},
				m = () => {
					const e = Object(o.e)(d.a),
						t = Object(o.e)(e => e.user.session),
						r = t ? t.accessToken : "",
						s = t ? new Date(t.expires).getTime() : 1,
						m = Object(o.e)(u.fb),
						b = Object(i.a)(),
						v = p ? c.a.Rinkeby : c.a.Ethereum,
						j = Object(n.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${r}`
							},
							expiration: s
						}), [r, s]),
						x = {
							...O,
							STRIPE_API_KEY: a.a.stripe.apiKey(e),
							ACCESS_TOKEN: r,
							BLOCKCHAIN_PROVIDER: v
						},
						_ = Object(n.useCallback)(e => {
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
					return Object(n.useMemo)(() => ({
						authHeaders: j,
						config: x,
						isNightMode: m,
						sendEvent: _
					}), [j, x, m, _])
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
			var a = r("./src/higherOrderComponents/asModal/index.tsx"),
				s = r("./node_modules/react/index.js"),
				n = r.n(s),
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
						for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
					}
					return e
				}).apply(this, arguments)
			}
			const O = Object(a.a)(e => n.a.createElement(n.a.Fragment, null, n.a.createElement(i.a, p({
				isModal: !0
			}, e))));
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
			var a = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const n = Object(s.a)(a.qd)
		},
		"ignored /drone/src/node_modules/qs/node_modules/object-inspect ./util.inspect": function(e, t) {}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SnoovatarModal.d4d067a92de04572f41f.js.map