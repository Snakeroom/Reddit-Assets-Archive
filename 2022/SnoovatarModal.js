// https://www.redditstatic.com/desktop2x/SnoovatarModal.5ccf5e955d23f6611d44.js
// Retrieved at 12/13/2022, 5:40:04 PM by Reddit Dataminer v1.0.0
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
				d = r("./src/reddit/contexts/NavbarExp.ts"),
				l = r("./src/reddit/helpers/trackers/snoovatar.ts"),
				u = r("./src/reddit/hooks/useTracking.ts"),
				p = r("./src/reddit/selectors/experiments/econ/index.ts"),
				m = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/components/AvatarBuilder/index.m.less"),
				b = r.n(O),
				v = r("./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx");

			function x() {
				return (x = Object.assign || function(e) {
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
				const O = Object(u.a)(),
					j = Object(o.e)(e => e.user.session),
					[_, f] = Object(n.useState)(!1),
					E = Object(n.useContext)(d.a),
					g = Object(o.d)(),
					M = () => g(Object(i.openLoginModal)()),
					S = Object(v.a)();
				Object(n.useEffect)(() => {
					O(l.r)
				}, [O]), Object(n.useEffect)(() => {
					f(!0)
				}, []);
				const {
					activeDetails: A,
					activeTab: h,
					activeMeSubpage: k,
					shopTabState: C
				} = r, N = Object(n.useMemo)(() => ({
					activeTab: h || void 0,
					activeMeSubpage: k || void 0,
					activeDetails: A || void 0,
					shopTabState: C || void 0
				}), [A, h, k, C]), y = Object(o.e)(e => !Object(m.S)(e) && Object(p.v)(e));
				if (!j || !_) return null;
				if (y) return a.a.createElement("div", {
					className: Object(c.a)(b.a.container, {
						[b.a.containerExp]: E
					})
				}, a.a.createElement(s.f, {
					openLogin: M,
					fancyBackground: !0
				}));
				const T = {
					...S,
					config: {
						...S.config,
						...r.share ? {
							COPY_SHARE_PARAMS: r.share
						} : {}
					}
				};
				return a.a.createElement("div", {
					className: Object(c.a)({
						[b.a.container]: !t,
						[b.a.snoovatarModalBuilderV2]: t,
						[b.a.containerExp]: E
					})
				}, a.a.createElement(s.a, x({}, T, {
					navState: N,
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
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/reddit/endpoints/governance/crypto.ts"),
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
					const e = Object(o.e)(d.a),
						t = Object(o.e)(e => e.user.session),
						r = t ? t.accessToken : "",
						n = t ? new Date(t.expires).getTime() : 1,
						O = Object(o.e)(u.fb),
						b = Object(i.a)(),
						v = p ? c.a.Rinkeby : c.a.Ethereum,
						x = Object(a.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${r}`
							},
							expiration: n
						}), [r, n]),
						j = {
							...m,
							STRIPE_API_KEY: s.a.stripe.apiKey(e),
							ACCESS_TOKEN: r,
							BLOCKCHAIN_PROVIDER: v
						},
						_ = Object(a.useCallback)(e => {
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
						config: j,
						isNightMode: O,
						sendEvent: _
					}), [x, j, O, _])
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
				d = r("./src/reddit/icons/svgs/Close/index.tsx"),
				l = r("./src/reddit/selectors/activeModal.ts"),
				u = r("./src/reddit/components/SnoovatarModal/index.m.less"),
				p = r.n(u);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const O = Object(s.a)(e => {
				const t = Object(o.d)();
				return a.a.createElement(a.a.Fragment, null, a.a.createElement(i.a, m({
					isModal: !0
				}, e)), a.a.createElement(d.a, {
					className: p.a.button,
					onClick: () => t(Object(c.a)())
				}))
			});
			t.default = () => {
				const e = Object(o.d)(),
					t = Object(o.e)(e => Object(l.a)(e));
				return a.a.createElement(O, m({}, t, {
					className: p.a.snoovatarModal,
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
			const a = Object(n.a)(s.zd)
		},
		"ignored /drone/src/node_modules/qs/node_modules/object-inspect ./util.inspect": function(e, t) {}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SnoovatarModal.5ccf5e955d23f6611d44.js.map