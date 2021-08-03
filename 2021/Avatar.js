// https://www.redditstatic.com/desktop2x/Avatar.af56b1a586ed6c8a7143.js
// Retrieved at 8/3/2021, 1:40:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Avatar"], {
		"./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router/esm/react-router.js"),
				c = s("./src/config.ts"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/helpers/trackers/snoovatar.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				u = s("./src/reddit/components/SnoovatarModal/index.m.less"),
				m = s.n(u);
			t.a = Object(o.i)(({
				className: e,
				match: t,
				location: s,
				share: o,
				source: u
			}) => {
				const v = new URLSearchParams(s.search);
				v.append("platform", "desktop"), Object.entries(t.params).forEach(([e, t]) => v.append(e, t)), o && Object.entries(o).forEach(([e, t]) => v.set(e, t));
				let _ = "";
				(null == u ? void 0 : u.postId) && (_ = "try_this_look_post"), _ && v.set("source", _);
				const f = Object(l.a)();
				Object(a.useEffect)(() => {
					f(d.f)
				}, [f]);
				const p = Object(n.e)(e => e.user.session),
					x = Object(a.useRef)(null),
					E = Object(a.useCallback)(e => {
						p && e && e.postMessage({
							type: "injectAuth",
							headers: {
								Authorization: `Bearer ${p.accessToken}`
							},
							expiration: new Date(p.expires).getTime()
						}, c.a.snoovatarUrl)
					}, [p]);
				return Object(a.useEffect)(() => {
					var e;
					return E(null === (e = null == x ? void 0 : x.current) || void 0 === e ? void 0 : e.contentWindow)
				}, [x, E]), Object(a.useEffect)(() => {
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
		"./src/reddit/components/SnoovatarModal/index.m.less": function(e, t, s) {
			e.exports = {
				snoovatarModal: "_1kJxmNuSOWrudEvEj4lSc8",
				snoovatarModalIframeContainer: "_3s-GzuR9XtTMo39iEgLq_z",
				iframeContainer: "hrzwqhyhwMHUQUeis25Ny",
				loader: "_18QBIHixUfNNL8DkS_hw8K"
			}
		},
		"./src/reddit/pages/Avatar/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2Moi-yX3bvB_vnqKAGk7hu",
				containerExp: "_2XQSxcZene8EbyNUVEZqIJ",
				content: "_3WuQYS3HUXsj1Z3hBTnsdb"
			}
		},
		"./src/reddit/pages/Avatar/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/contexts/NavbarExp.ts"),
				c = s("./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx"),
				i = s("./src/reddit/pages/Avatar/index.m.less"),
				d = s.n(i);
			t.default = function() {
				const e = Object(a.useContext)(o.a);
				return r.a.createElement("div", {
					className: Object(n.a)(d.a.container, {
						[d.a.containerExp]: e
					})
				}, r.a.createElement(c.a, {
					className: d.a.content
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Avatar.af56b1a586ed6c8a7143.js.map