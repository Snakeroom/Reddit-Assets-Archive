// https://www.redditstatic.com/desktop2x/SnoovatarModal.f780752852e44ec53877.js
// Retrieved at 6/13/2022, 11:20:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SnoovatarModal"], {
		"./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx": function(e, t, a) {
			"use strict";
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = a("./node_modules/react/index.js"),
				s = a.n(r),
				n = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/react-router/esm/react-router.js"),
				c = a("./src/config.ts"),
				i = a("./src/lib/classNames/index.ts"),
				d = a("./src/reddit/components/SnoovatarModal/index.m.less"),
				l = a.n(d);
			t.a = Object(o.i)(e => {
				let {
					className: t,
					match: a,
					location: o,
					share: d,
					source: u
				} = e;
				const m = new URLSearchParams(o.search);
				m.append("platform", "desktop"), Object.entries(a.params).forEach(e => {
					let [t, a] = e;
					return m.append(t, a)
				}), d && Object.entries(d).forEach(e => {
					let [t, a] = e;
					return m.set(t, a)
				}), u && m.set("source", u);
				const v = Object(n.e)(e => e.user.session),
					p = Object(r.useRef)(null),
					O = Object(r.useCallback)(e => {
						v && e && e.postMessage({
							type: "injectAuth",
							headers: {
								Authorization: `Bearer ${v.accessToken}`
							},
							expiration: new Date(v.expires).getTime()
						}, c.a.snoovatarUrl)
					}, [v]);
				return Object(r.useEffect)(() => {
					var e;
					return O(null === (e = null == p ? void 0 : p.current) || void 0 === e ? void 0 : e.contentWindow)
				}, [p, O]), Object(r.useEffect)(() => {
					const e = e => {
						"refreshAuth" === (null == e ? void 0 : e.data) && O(e.source)
					};
					return window.addEventListener("message", e), () => window.removeEventListener("message", e)
				}, [O]), s.a.createElement("div", {
					className: Object(i.a)(l.a.iframeContainer, t)
				}, s.a.createElement("iframe", {
					ref: p,
					src: `${c.a.snoovatarUrl}/static/client/?${m.toString()}`
				}))
			})
		},
		"./src/reddit/components/SnoovatarModal/index.m.less": function(e, t, a) {
			e.exports = {
				snoovatarModal: "_1kJxmNuSOWrudEvEj4lSc8",
				snoovatarModalIframeContainer: "_3s-GzuR9XtTMo39iEgLq_z",
				snoovatarModalBuilderV2: "d96YWxTBxv7CdfhCOK7Cw",
				iframeContainer: "hrzwqhyhwMHUQUeis25Ny",
				loader: "_18QBIHixUfNNL8DkS_hw8K"
			}
		},
		"./src/reddit/components/SnoovatarModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var r = a("./src/config.ts"),
				s = a("./node_modules/react/index.js"),
				n = a.n(s),
				o = a("./node_modules/react-redux/es/index.js"),
				c = a("./src/lib/env/index.ts"),
				i = a("./src/reddit/actions/snoovatarModal.ts"),
				d = a("./src/reddit/helpers/avatarRouting.ts"),
				l = a("./src/reddit/helpers/trackers/snoovatar.ts"),
				u = a("./src/reddit/hooks/useTracking.ts"),
				m = a("./src/reddit/selectors/activeModal.ts"),
				v = a("./src/reddit/selectors/experiments/econ/index.ts"),
				p = a("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts"),
				O = a("./src/telemetry/index.ts"),
				E = a("./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx"),
				b = a("./src/higherOrderComponents/asModal/index.tsx"),
				f = a("./src/reddit/components/SnoovatarModal/index.m.less"),
				S = a.n(f);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
					}
					return e
				}).apply(this, arguments)
			}
			const h = !(Object(c.c)() || Object(c.b)()),
				j = {
					GRAPHQL_URL: r.a.gqlUrl,
					IS_DEVELOPMENT: h,
					IS_PRODUCTION: !h,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: r.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${r.a.snoovatarUrl}/api`
				},
				x = n.a.lazy(() => Promise.all([a.e(0), a.e(1), a.e(2), a.e(4), a.e(3), a.e(5)]).then(a.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
					default: e.DataWrapper
				}))),
				A = n.a.lazy(() => Promise.all([a.e(0), a.e(1), a.e(2), a.e(4), a.e(3), a.e(5)]).then(a.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
					default: e.Builder
				}))),
				M = Object(b.a)(e => {
					const t = Object(o.e)(e => e.user.session),
						[c, i] = Object(s.useState)(!1),
						m = Object(o.e)(p.a),
						b = Object(o.e)(v.d),
						f = Object(s.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${t.accessToken}`
							},
							expiration: new Date(t.expires).getTime()
						}), [t]),
						h = Object(u.a)(),
						M = Object(o.e)(e => f && Object(v.e)(e));
					Object(s.useEffect)(() => {
						(async () => {
							await a.e(7).then(a.t.bind(null, "./node_modules/@reddit/avatars/style.css", 7))
						})(), h(l.r), i(!0)
					}, [h]);
					const {
						activeDetails: R,
						activeTab: T,
						activeMeSubpage: L,
						shopTabState: P
					} = e, g = Object(s.useMemo)(() => {
						const e = b ? d.a.SHOP : d.a.EXPLORE;
						return {
							activeTab: T || e,
							activeMeSubpage: L || void 0,
							activeDetails: R || void 0,
							shopTabState: P || void 0
						}
					}, [R, T, b, L, P]);
					if (!t || !c) return null;
					let y;
					return y = e.share ? {
						...j,
						STRIPE_API_KEY: r.a.stripe.apiKey(m),
						COPY_SHARE_PARAMS: e.share
					} : {
						...j,
						STRIPE_API_KEY: r.a.stripe.apiKey(m)
					}, M ? n.a.createElement("div", {
						className: S.a.snoovatarModalBuilderV2
					}, n.a.createElement(s.Suspense, {
						fallback: n.a.createElement("div", null)
					}, n.a.createElement(x, {
						accessToken: t.accessToken,
						authHeaders: f,
						config: y,
						sendEvent: O.a
					}, n.a.createElement(A, {
						navState: g
					})))) : n.a.createElement(E.a, _({
						className: S.a.snoovatarModalIframeContainer
					}, e))
				});
			t.default = () => {
				const e = Object(o.d)(),
					t = Object(o.e)(e => Object(m.a)(e));
				return n.a.createElement(M, _({}, t, {
					className: S.a.snoovatarModal,
					withOverlay: !0,
					onOverlayClick: () => e(Object(i.a)())
				}))
			}
		},
		"./src/reddit/helpers/avatarRouting.ts": function(e, t, a) {
			"use strict";
			var r, s, n;
			a.d(t, "a", (function() {
					return s
				})), a.d(t, "b", (function() {
					return n
				})),
				function(e) {
					e.BODY = "body", e.EYES = "eyes", e.HAIR = "hair", e.EXPRESSION = "expression", e.FACIAL_HAIR = "facial hair"
				}(r || (r = {})),
				function(e) {
					e.SHOP = "shop", e.EXPLORE = "explore", e.STYLE = "style", e.ME = "me", e.NFT = "nft"
				}(s || (s = {})),
				function(e) {
					e.FEATURED = "featured", e.POPULAR = "popular", e.GALLERY = "gallery", e.ARTISTS = "artists", e.ARTIST_PAGE = "artist_page"
				}(n || (n = {}))
		},
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			}));
			var r = a("./src/reddit/constants/experiments.ts"),
				s = a("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const n = Object(s.a)(r.Wc)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SnoovatarModal.f780752852e44ec53877.js.map