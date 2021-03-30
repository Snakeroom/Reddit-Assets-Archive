// https://www.redditstatic.com/desktop2x/Avatar.c5f8c8ade2ca90b1c88c.js
// Retrieved at 3/30/2021, 4:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Avatar"], {
		"./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				r = a("./node_modules/react-redux/es/index.js"),
				o = a("./src/config.ts"),
				c = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/helpers/trackers/snoovatar.ts"),
				d = a("./src/reddit/hooks/useTracking.ts"),
				l = a("./src/reddit/components/SnoovatarModal/index.m.less"),
				u = a.n(l);
			t.a = ({
				className: e
			}) => {
				const t = Object(d.a)();
				Object(s.useEffect)(() => {
					t(i.c)
				}, [t]);
				const a = Object(r.e)(e => e.user.session),
					l = Object(s.useRef)(null),
					m = Object(s.useCallback)(e => {
						a && e && e.postMessage({
							type: "injectAuth",
							headers: {
								Authorization: `Bearer ${a.accessToken}`
							},
							expiration: new Date(a.expires).getTime()
						}, o.a.snoovatarUrl)
					}, [a]);
				return Object(s.useEffect)(() => {
					var e;
					return m(null === (e = null == l ? void 0 : l.current) || void 0 === e ? void 0 : e.contentWindow)
				}, [l, m]), Object(s.useEffect)(() => {
					const e = e => {
						"refreshAuth" === (null == e ? void 0 : e.data) && m(e.source)
					};
					return window.addEventListener("message", e), () => window.removeEventListener("message", e)
				}, [m]), n.a.createElement("div", {
					className: Object(c.a)(u.a.iframeContainer, e)
				}, n.a.createElement("iframe", {
					ref: l,
					src: `${o.a.snoovatarUrl}/static/client/?platform=desktop`
				}))
			}
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
				content: "_3WuQYS3HUXsj1Z3hBTnsdb"
			}
		},
		"./src/reddit/pages/Avatar/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				r = a("./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx"),
				o = a("./src/reddit/pages/Avatar/index.m.less"),
				c = a.n(o);
			t.default = function() {
				return n.a.createElement("div", {
					className: c.a.container
				}, n.a.createElement(r.a, {
					className: c.a.content
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Avatar.c5f8c8ade2ca90b1c88c.js.map