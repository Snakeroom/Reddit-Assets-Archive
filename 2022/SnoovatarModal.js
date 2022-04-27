// https://www.redditstatic.com/desktop2x/SnoovatarModal.e75a701129a779222892.js
// Retrieved at 4/27/2022, 11:10:04 AM by Reddit Dataminer v1.0.0
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
					O = Object(r.useRef)(null),
					b = Object(r.useCallback)(e => {
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
					return b(null === (e = null == O ? void 0 : O.current) || void 0 === e ? void 0 : e.contentWindow)
				}, [O, b]), Object(r.useEffect)(() => {
					const e = e => {
						"refreshAuth" === (null == e ? void 0 : e.data) && b(e.source)
					};
					return window.addEventListener("message", e), () => window.removeEventListener("message", e)
				}, [b]), s.a.createElement("div", {
					className: Object(i.a)(l.a.iframeContainer, t)
				}, s.a.createElement("iframe", {
					ref: O,
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
				O = a("./src/telemetry/index.ts"),
				b = a("./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx"),
				f = a("./src/higherOrderComponents/asModal/index.tsx"),
				E = a("./src/reddit/components/SnoovatarModal/index.m.less"),
				j = a.n(E);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = !(Object(c.c)() || Object(c.b)()),
				h = {
					GRAPHQL_URL: r.a.gqlUrl,
					IS_DEVELOPMENT: _,
					IS_PRODUCTION: !_,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: r.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${r.a.snoovatarUrl}/api`,
					STRIPE_API_KEY: r.a.stripe.apiKey(_ || Object(c.c)())
				},
				x = n.a.lazy(() => Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(4), a.e(5), a.e(6)]).then(a.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
					default: e.DataWrapper
				}))),
				S = n.a.lazy(() => Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(4), a.e(5), a.e(6)]).then(a.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
					default: e.Builder
				}))),
				M = Object(f.a)(e => {
					const t = Object(o.e)(e => e.user.session),
						[r, c] = Object(s.useState)(!1),
						i = Object(s.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${t.accessToken}`
							},
							expiration: new Date(t.expires).getTime()
						}), [t]),
						m = Object(u.a)(),
						f = Object(o.e)(e => i && Object(v.e)(e));
					Object(s.useEffect)(() => {
						(async () => {
							await a.e(8).then(a.t.bind(null, "./node_modules/@reddit/avatars/style.css", 7))
						})(), m(l.q), c(!0)
					}, [m]);
					const {
						activeDetails: E,
						activeTab: _
					} = e, M = Object(s.useMemo)(() => ({
						activeTab: _ || d.a.EXPLORE,
						activeDetails: E || void 0
					}), [E, _]);
					return t && r ? f ? n.a.createElement("div", {
						className: j.a.snoovatarModalBuilderV2
					}, n.a.createElement(s.Suspense, {
						fallback: n.a.createElement("div", null)
					}, n.a.createElement(x, {
						accessToken: t.accessToken,
						authHeaders: i,
						config: e.share ? {
							...h,
							COPY_SHARE_PARAMS: e.share
						} : h,
						sendEvent: O.a
					}, n.a.createElement(S, {
						navState: M
					})))) : n.a.createElement(b.a, p({
						className: j.a.snoovatarModalIframeContainer
					}, e)) : null
				});
			t.default = () => {
				const e = Object(o.d)(),
					t = Object(o.e)(e => Object(m.a)(e));
				return n.a.createElement(M, p({}, t, {
					className: j.a.snoovatarModal,
					withOverlay: !0,
					onOverlayClick: () => e(Object(i.a)())
				}))
			}
		},
		"./src/reddit/helpers/avatarRouting.ts": function(e, t, a) {
			"use strict";
			var r;
			a.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.EXPLORE = "explore", e.STYLE = "style", e.ME = "me", e.NFT = "nft"
				}(r || (r = {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SnoovatarModal.e75a701129a779222892.js.map