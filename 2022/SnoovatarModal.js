// https://www.redditstatic.com/desktop2x/SnoovatarModal.31bc85001d8688b8b157.js
// Retrieved at 1/6/2022, 1:40:05 PM by Reddit Dataminer v1.0.0
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
				d = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/helpers/trackers/snoovatar.ts"),
				l = a("./src/reddit/hooks/useTracking.ts"),
				u = a("./src/reddit/components/SnoovatarModal/index.m.less"),
				m = a.n(u);
			t.a = Object(o.i)(({
				className: e,
				match: t,
				location: a,
				share: o,
				source: u
			}) => {
				const O = new URLSearchParams(a.search);
				O.append("platform", "desktop"), Object.entries(t.params).forEach(([e, t]) => O.append(e, t)), o && Object.entries(o).forEach(([e, t]) => O.set(e, t)), u && O.set("source", u);
				const v = Object(l.a)();
				Object(r.useEffect)(() => {
					v(i.p)
				}, [v]);
				const j = Object(n.e)(e => e.user.session),
					f = Object(r.useRef)(null),
					b = Object(r.useCallback)(e => {
						j && e && e.postMessage({
							type: "injectAuth",
							headers: {
								Authorization: `Bearer ${j.accessToken}`
							},
							expiration: new Date(j.expires).getTime()
						}, c.a.snoovatarUrl)
					}, [j]);
				return Object(r.useEffect)(() => {
					var e;
					return b(null === (e = null == f ? void 0 : f.current) || void 0 === e ? void 0 : e.contentWindow)
				}, [f, b]), Object(r.useEffect)(() => {
					const e = e => {
						"refreshAuth" === (null == e ? void 0 : e.data) && b(e.source)
					};
					return window.addEventListener("message", e), () => window.removeEventListener("message", e)
				}, [b]), s.a.createElement("div", {
					className: Object(d.a)(m.a.iframeContainer, e)
				}, s.a.createElement("iframe", {
					ref: f,
					src: `${c.a.snoovatarUrl}/static/client/?${O.toString()}`
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
				d = a("./src/reddit/actions/snoovatarModal.ts"),
				i = a("./src/reddit/selectors/activeModal.ts"),
				l = a("./src/reddit/selectors/experiments/econ/index.ts"),
				u = a("./src/telemetry/index.ts"),
				m = a("./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx"),
				O = a("./src/higherOrderComponents/asModal/index.tsx"),
				v = a("./src/reddit/components/SnoovatarModal/index.m.less"),
				j = a.n(v);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
					}
					return e
				}).apply(this, arguments)
			}
			const b = !(Object(c.c)() || Object(c.b)()),
				p = {
					GRAPHQL_URL: r.a.gqlUrl,
					IS_DEVELOPMENT: b,
					IS_PRODUCTION: !b,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: r.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${r.a.snoovatarUrl}/api`
				},
				_ = n.a.lazy(() => Promise.all([a.e(0), a.e(1), a.e(2)]).then(a.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
					default: e.DataWrapper
				}))),
				h = n.a.lazy(() => Promise.all([a.e(0), a.e(1), a.e(2)]).then(a.bind(null, "./node_modules/@reddit/avatars/index.es.js")).then(e => ({
					default: e.Builder
				}))),
				E = Object(O.a)(e => {
					const t = Object(o.e)(e => e.user.session),
						[a, r] = Object(s.useState)(!1),
						c = Object(s.useMemo)(() => t ? {
							headers: {
								Authorization: `Bearer ${t.accessToken}`
							},
							expiration: new Date(t.expires).getTime()
						} : null, [t]),
						d = Object(o.e)(e => c && Object(l.h)(e));
					return Object(s.useEffect)(() => {
						r(!0)
					}, []), t && a ? d ? n.a.createElement(s.Suspense, {
						fallback: n.a.createElement("div", null)
					}, n.a.createElement(_, {
						authHeaders: c,
						config: p,
						sendEvent: u.a
					}, n.a.createElement(h, null))) : n.a.createElement(m.a, f({
						className: j.a.snoovatarModalIframeContainer
					}, e)) : null
				});
			t.default = () => {
				const e = Object(o.d)(),
					t = Object(o.e)(e => Object(i.a)(e));
				return n.a.createElement(E, f({}, t, {
					className: j.a.snoovatarModal,
					withOverlay: !0,
					onOverlayClick: () => e(Object(d.a)())
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SnoovatarModal.31bc85001d8688b8b157.js.map