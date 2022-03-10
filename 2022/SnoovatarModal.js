// https://www.redditstatic.com/desktop2x/SnoovatarModal.7cbd7936f48bccdd18c8.js
// Retrieved at 3/10/2022, 5:50:03 PM by Reddit Dataminer v1.0.0
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
			t.a = Object(o.i)(({
				className: e,
				match: t,
				location: a,
				share: o,
				source: d
			}) => {
				const u = new URLSearchParams(a.search);
				u.append("platform", "desktop"), Object.entries(t.params).forEach(([e, t]) => u.append(e, t)), o && Object.entries(o).forEach(([e, t]) => u.set(e, t)), d && u.set("source", d);
				const m = Object(n.e)(e => e.user.session),
					v = Object(r.useRef)(null),
					O = Object(r.useCallback)(e => {
						m && e && e.postMessage({
							type: "injectAuth",
							headers: {
								Authorization: `Bearer ${m.accessToken}`
							},
							expiration: new Date(m.expires).getTime()
						}, c.a.snoovatarUrl)
					}, [m]);
				return Object(r.useEffect)(() => {
					var e;
					return O(null === (e = null == v ? void 0 : v.current) || void 0 === e ? void 0 : e.contentWindow)
				}, [v, O]), Object(r.useEffect)(() => {
					const e = e => {
						"refreshAuth" === (null == e ? void 0 : e.data) && O(e.source)
					};
					return window.addEventListener("message", e), () => window.removeEventListener("message", e)
				}, [O]), s.a.createElement("div", {
					className: Object(i.a)(l.a.iframeContainer, e)
				}, s.a.createElement("iframe", {
					ref: v,
					src: `${c.a.snoovatarUrl}/static/client/?${u.toString()}`
				}))
			})
		},
		"./src/reddit/components/SnoovatarModal/index.m.less": function(e, t, a) {
			e.exports = {
				snoovatarModal: "_1kJxmNuSOWrudEvEj4lSc8",
				snoovatarModalIframeContainer: "_3s-GzuR9XtTMo39iEgLq_z",
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
				f = a("./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx"),
				b = a("./src/higherOrderComponents/asModal/index.tsx"),
				j = a("./src/reddit/components/SnoovatarModal/index.m.less"),
				p = a.n(j);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
					}
					return e
				}).apply(this, arguments)
			}
			const E = !(Object(c.c)() || Object(c.b)()),
				_ = {
					GRAPHQL_URL: r.a.gqlUrl,
					IS_DEVELOPMENT: E,
					IS_PRODUCTION: !E,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: r.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${r.a.snoovatarUrl}/api`
				},
				x = n.a.lazy(() => Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(4)]).then(a.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
					default: e.DataWrapper
				}))),
				S = n.a.lazy(() => Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(4)]).then(a.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
					default: e.Builder
				}))),
				M = Object(b.a)(e => {
					const t = Object(o.e)(e => e.user.session),
						[r, c] = Object(s.useState)(!1),
						i = Object(s.useMemo)(() => ({
							headers: {
								Authorization: `Bearer ${t.accessToken}`
							},
							expiration: new Date(t.expires).getTime()
						}), [t]),
						m = Object(u.a)(),
						b = Object(o.e)(t => {
							var a;
							return i && "random" !== (null === (a = e.share) || void 0 === a ? void 0 : a.avatarId) && Object(v.f)(t)
						});
					Object(s.useEffect)(() => {
						(async () => {
							await a.e(6).then(a.t.bind(null, "./node_modules/@reddit/avatars/style.css", 7))
						})(), m(l.q), c(!0)
					}, []);
					const {
						activeDetails: j,
						activeTab: E
					} = e, M = Object(s.useMemo)(() => ({
						activeTab: E || d.a.EXPLORE,
						activeDetails: j || void 0
					}), [j, E]);
					return t && r ? b ? n.a.createElement(s.Suspense, {
						fallback: n.a.createElement("div", null)
					}, n.a.createElement(x, {
						authHeaders: i,
						config: _,
						sendEvent: O.a
					}, n.a.createElement(S, {
						navState: M
					}))) : n.a.createElement(f.a, h({
						className: p.a.snoovatarModalIframeContainer
					}, e)) : null
				});
			t.default = () => {
				const e = Object(o.d)(),
					t = Object(o.e)(e => Object(m.a)(e));
				return n.a.createElement(M, h({}, t, {
					className: p.a.snoovatarModal,
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SnoovatarModal.7cbd7936f48bccdd18c8.js.map