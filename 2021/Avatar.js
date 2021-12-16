// https://www.redditstatic.com/desktop2x/Avatar.13fa7790405e93ab822b.js
// Retrieved at 12/15/2021, 8:10:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Avatar"], {
		"./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx": function(e, t, a) {
			"use strict";
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = a("./node_modules/react/index.js"),
				r = a.n(s),
				n = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/react-router/esm/react-router.js"),
				c = a("./src/config.ts"),
				i = a("./src/lib/classNames/index.ts"),
				d = a("./src/reddit/helpers/trackers/snoovatar.ts"),
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
				const v = new URLSearchParams(a.search);
				v.append("platform", "desktop"), Object.entries(t.params).forEach(([e, t]) => v.append(e, t)), o && Object.entries(o).forEach(([e, t]) => v.set(e, t)), u && v.set("source", u);
				const p = Object(l.a)();
				Object(s.useEffect)(() => {
					p(d.p)
				}, [p]);
				const _ = Object(n.e)(e => e.user.session),
					x = Object(s.useRef)(null),
					E = Object(s.useCallback)(e => {
						_ && e && e.postMessage({
							type: "injectAuth",
							headers: {
								Authorization: `Bearer ${_.accessToken}`
							},
							expiration: new Date(_.expires).getTime()
						}, c.a.snoovatarUrl)
					}, [_]);
				return Object(s.useEffect)(() => {
					var e;
					return E(null === (e = null == x ? void 0 : x.current) || void 0 === e ? void 0 : e.contentWindow)
				}, [x, E]), Object(s.useEffect)(() => {
					const e = e => {
						"refreshAuth" === (null == e ? void 0 : e.data) && E(e.source)
					};
					return window.addEventListener("message", e), () => window.removeEventListener("message", e)
				}, [E]), r.a.createElement("div", {
					className: Object(i.a)(m.a.iframeContainer, e)
				}, r.a.createElement("iframe", {
					ref: x,
					src: `${c.a.snoovatarUrl}/static/client/?${v.toString()}`
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
		"./src/reddit/pages/Avatar/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_2Moi-yX3bvB_vnqKAGk7hu",
				containerExp: "_2XQSxcZene8EbyNUVEZqIJ",
				content: "_3WuQYS3HUXsj1Z3hBTnsdb"
			}
		},
		"./src/reddit/pages/Avatar/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var s = a("./src/config.ts"),
				r = a("./node_modules/react/index.js"),
				n = a.n(r),
				o = a("./node_modules/react-redux/es/index.js"),
				c = a("./src/lib/classNames/index.ts"),
				i = a("./src/lib/env/index.ts"),
				d = a("./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx"),
				l = a("./src/reddit/contexts/NavbarExp.ts"),
				u = a("./src/reddit/selectors/experiments/econ/index.ts"),
				m = a("./src/telemetry/index.ts"),
				v = a("./src/reddit/pages/Avatar/index.m.less"),
				p = a.n(v);
			const _ = !(Object(i.c)() || Object(i.b)()),
				x = {
					GRAPHQL_URL: s.a.gqlUrl,
					IS_DEVELOPMENT: _,
					IS_PRODUCTION: !_,
					MOCKING_ENABLED: !1,
					SNOOVATAR_BASE_URL: s.a.snoovatarUrl,
					SNOOVATAR_API_URL: `${s.a.snoovatarUrl}/api`
				},
				E = n.a.lazy(() => Promise.all([a.e(0), a.e(2), a.e(3), a.e(6)]).then(a.bind(null, "./node_modules/@reddit/avatars.templates.data-wrapper/dist/index.js")).then(e => ({
					default: e.DataWrapper
				}))),
				b = n.a.lazy(() => Promise.all([a.e(0), a.e(2), a.e(3), a.e(4), a.e(11)]).then(a.bind(null, "./node_modules/@reddit/avatars.templates.builder/dist/index.js")).then(e => ({
					default: e.Builder
				})));
			t.default = () => {
				const e = Object(o.e)(e => e.user.session),
					[t, a] = Object(r.useState)(!1),
					s = Object(r.useContext)(l.a),
					i = Object(o.e)(e => Object(u.h)(e));
				if (Object(r.useEffect)(() => {
						a(!0)
					}, []), !e || !t) return null;
				const v = {
					headers: {
						Authorization: `Bearer ${e.accessToken}`
					},
					expiration: new Date(e.expires).getTime()
				};
				return n.a.createElement("div", {
					className: Object(c.a)(p.a.container, {
						[p.a.containerExp]: s
					})
				}, i ? n.a.createElement("div", {
					className: p.a.content
				}, n.a.createElement(r.Suspense, {
					fallback: n.a.createElement("div", null)
				}, n.a.createElement(E, {
					authHeaders: v,
					config: x,
					sendEvent: m.a
				}, n.a.createElement(b, null)))) : n.a.createElement(d.a, {
					className: p.a.content
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Avatar.13fa7790405e93ab822b.js.map