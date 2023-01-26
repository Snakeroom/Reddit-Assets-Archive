// https://www.redditstatic.com/desktop2x/SnoovatarModal.a9fc6f516fd10a4016dd.js
// Retrieved at 1/25/2023, 7:40:05 PM by Reddit Dataminer v1.0.0
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
				return j
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
				O = r("./src/reddit/selectors/experiments/econ/index.ts"),
				m = r("./src/reddit/selectors/user.ts"),
				b = r("./src/reddit/components/AvatarBuilder/index.m.less"),
				v = r.n(b),
				x = r("./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const j = e => {
				let {
					isModal: t,
					...r
				} = e;
				const b = Object(p.a)(),
					j = Object(o.e)(e => e.user.session),
					[f, E] = Object(n.useState)(!1),
					M = Object(n.useContext)(l.a),
					g = Object(o.d)(),
					S = () => g(Object(i.openLoginModal)()),
					A = Object(x.a)();
				Object(n.useEffect)(() => {
					b(u.r)
				}, [b]), Object(n.useEffect)(() => {
					E(!0)
				}, []);
				const {
					activeDetails: h,
					activeTab: k,
					activeMeSubpage: C,
					shopTabState: N
				} = r, y = Object(n.useMemo)(() => ({
					activeTab: k || void 0,
					activeMeSubpage: C || void 0,
					activeDetails: h || void 0,
					shopTabState: N || void 0
				}), [h, k, C, N]), T = Object(o.e)(e => !Object(m.S)(e) && Object(O.u)(e));
				if (!j || !f) return null;
				if (T) return a.a.createElement("div", {
					className: Object(c.a)(v.a.container, {
						[v.a.containerExp]: M
					})
				}, a.a.createElement(s.f, {
					openLogin: S,
					fancyBackground: !0
				}));
				const R = {
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
						[v.a.container]: !t,
						[v.a.snoovatarModalBuilderV2]: t,
						[v.a.containerExp]: M
					})
				}, a.a.createElement(s.a, _({}, R, {
					navState: y,
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
				return m
			}));
			var s = r("./src/config.ts"),
				n = r("./src/lib/env/index.ts"),
				a = r("./node_modules/react/index.js"),
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/reddit/endpoints/governance/crypto.ts"),
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
					const e = Object(o.e)(d.a),
						t = Object(o.e)(e => e.user.session),
						r = t ? t.accessToken : "",
						n = t ? new Date(t.expires).getTime() : 1,
						m = Object(o.e)(u.fb),
						b = Object(i.a)(),
						v = p ? c.a.Rinkeby : c.a.Ethereum,
						x = Object(a.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${r}`
							},
							expiration: n
						}), [r, n]),
						_ = {
							...O,
							STRIPE_API_KEY: s.a.stripe.apiKey(e),
							ACCESS_TOKEN: r,
							BLOCKCHAIN_PROVIDER: v
						},
						j = Object(a.useCallback)(e => {
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
						authHeaders: x,
						config: _,
						isNightMode: m,
						sendEvent: j
					}), [x, _, m, j])
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
			const O = Object(s.a)(e => a.a.createElement(a.a.Fragment, null, a.a.createElement(i.a, p({
				isModal: !0
			}, e))));
			t.default = () => {
				const e = Object(o.d)(),
					t = Object(o.e)(e => Object(d.a)(e));
				return a.a.createElement(O, p({}, t, {
					className: u.a.snoovatarModal,
					withOverlay: !0,
					onOverlayClick: () => e(Object(c.a)())
				}))
			}
		},
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const a = Object(n.a)(s.rd)
		},
		"ignored /drone/src/node_modules/qs/node_modules/object-inspect ./util.inspect": function(e, t) {}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SnoovatarModal.a9fc6f516fd10a4016dd.js.map