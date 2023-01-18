// https://www.redditstatic.com/desktop2x/SnoovatarModal.e08330877f6c89842f2e.js
// Retrieved at 1/18/2023, 11:10:04 AM by Reddit Dataminer v1.0.0
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
			var n = r("./node_modules/@reddit/marketplace/marketplace.es.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
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
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
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
					[_, f] = Object(s.useState)(!1),
					E = Object(s.useContext)(d.a),
					g = Object(o.d)(),
					M = () => g(Object(i.openLoginModal)()),
					h = Object(v.a)(),
					S = Object(o.e)(p.a);
				Object(s.useEffect)(() => {
					{
						const e = {},
							t = new URLSearchParams(window.location.search);
						Object(n.k)(t) && S && (e.domain = "marketplace_sharelink", e.url = window.location.href), O(Object(l.r)(e))
					}
				}, [O, S]), Object(s.useEffect)(() => {
					f(!0)
				}, []);
				const {
					activeDetails: A,
					activeTab: k,
					activeMeSubpage: C,
					shopTabState: N
				} = r, y = Object(s.useMemo)(() => ({
					activeTab: k || void 0,
					activeMeSubpage: C || void 0,
					activeDetails: A || void 0,
					shopTabState: N || void 0
				}), [A, k, C, N]), R = Object(o.e)(e => !Object(m.S)(e) && Object(p.v)(e));
				if (!j || !_) return null;
				if (R) return a.a.createElement("div", {
					className: Object(c.a)(b.a.container, {
						[b.a.containerExp]: E
					})
				}, a.a.createElement(n.f, {
					openLogin: M,
					fancyBackground: !0
				}));
				const T = {
					...h,
					config: {
						...h.config,
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
				}, a.a.createElement(n.a, x({}, T, {
					navState: y,
					isModal: t
				}), a.a.createElement(n.b, null)))
			}
		},
		"./src/reddit/components/AvatarBuilder/useMarketplaceConfig.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return O
			}));
			var n = r("./src/config.ts"),
				s = r("./src/lib/env/index.ts"),
				a = r("./node_modules/react/index.js"),
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/reddit/endpoints/governance/crypto.ts"),
				i = r("./src/reddit/hooks/useTracking.ts"),
				d = r("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts"),
				l = r("./src/reddit/selectors/telemetry.ts"),
				u = r("./src/reddit/selectors/user.ts");
			const p = !(Object(s.c)() || Object(s.b)()),
				m = {
					GRAPHQL_URL: n.a.gqlUrl,
					IS_DEVELOPMENT: p,
					IS_PRODUCTION: !p,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: n.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${n.a.snoovatarUrl}/api`
				},
				O = () => {
					const e = Object(o.e)(d.a),
						t = Object(o.e)(e => e.user.session),
						r = t ? t.accessToken : "",
						s = t ? new Date(t.expires).getTime() : 1,
						O = Object(o.e)(u.fb),
						b = Object(i.a)(),
						v = p ? c.a.Rinkeby : c.a.Ethereum,
						x = Object(a.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${r}`
							},
							expiration: s
						}), [r, s]),
						j = {
							...m,
							STRIPE_API_KEY: n.a.stripe.apiKey(e),
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
			var n = r("./src/higherOrderComponents/asModal/index.tsx"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
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
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const O = Object(n.a)(e => {
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
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const a = Object(s.a)(n.kd)
		},
		"ignored /drone/src/node_modules/qs/node_modules/object-inspect ./util.inspect": function(e, t) {}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SnoovatarModal.e08330877f6c89842f2e.js.map