// https://www.redditstatic.com/desktop2x/SnoovatarModal.bab5ed39bfba49e8855f.js
// Retrieved at 6/15/2021, 3:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SnoovatarModal"], {
		"./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx": function(e, a, t) {
			"use strict";
			t("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = t("./node_modules/react/index.js"),
				r = t.n(o),
				s = t("./node_modules/react-redux/es/index.js"),
				n = t("./node_modules/react-router/esm/react-router.js"),
				c = t("./src/config.ts"),
				d = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/helpers/trackers/snoovatar.ts"),
				l = t("./src/reddit/hooks/useTracking.ts"),
				u = t("./src/reddit/components/SnoovatarModal/index.m.less"),
				m = t.n(u);
			a.a = Object(n.i)(({
				className: e,
				match: a,
				location: t
			}) => {
				const n = new URLSearchParams(t.search);
				n.append("platform", "desktop"), Object.entries(a.params).forEach(([e, a]) => n.append(e, a));
				const u = Object(l.a)();
				Object(o.useEffect)(() => {
					u(i.d)
				}, [u]);
				const v = Object(s.e)(e => e.user.session),
					f = Object(o.useRef)(null),
					p = Object(o.useCallback)(e => {
						v && e && e.postMessage({
							type: "injectAuth",
							headers: {
								Authorization: `Bearer ${v.accessToken}`
							},
							expiration: new Date(v.expires).getTime()
						}, c.a.snoovatarUrl)
					}, [v]);
				return Object(o.useEffect)(() => {
					var e;
					return p(null === (e = null == f ? void 0 : f.current) || void 0 === e ? void 0 : e.contentWindow)
				}, [f, p]), Object(o.useEffect)(() => {
					const e = e => {
						"refreshAuth" === (null == e ? void 0 : e.data) && p(e.source)
					};
					return window.addEventListener("message", e), () => window.removeEventListener("message", e)
				}, [p]), r.a.createElement("div", {
					className: Object(d.a)(m.a.iframeContainer, e)
				}, r.a.createElement("iframe", {
					ref: f,
					src: `${c.a.snoovatarUrl}/static/client/?${n.toString()}`
				}))
			})
		},
		"./src/reddit/components/SnoovatarModal/index.m.less": function(e, a, t) {
			e.exports = {
				snoovatarModal: "_1kJxmNuSOWrudEvEj4lSc8",
				snoovatarModalIframeContainer: "_3s-GzuR9XtTMo39iEgLq_z",
				iframeContainer: "hrzwqhyhwMHUQUeis25Ny",
				loader: "_18QBIHixUfNNL8DkS_hw8K"
			}
		},
		"./src/reddit/components/SnoovatarModal/index.tsx": function(e, a, t) {
			"use strict";
			t.r(a);
			var o = t("./node_modules/react/index.js"),
				r = t.n(o),
				s = t("./node_modules/react-redux/es/index.js"),
				n = t("./src/reddit/actions/snoovatar.ts"),
				c = t("./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx"),
				d = t("./src/higherOrderComponents/asModal/index.tsx"),
				i = t("./src/reddit/components/SnoovatarModal/index.m.less"),
				l = t.n(i);

			function u() {
				return (u = Object.assign || function(e) {
					for (var a = 1; a < arguments.length; a++) {
						var t = arguments[a];
						for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(d.a)(() => r.a.createElement(c.a, {
					className: l.a.snoovatarModalIframeContainer
				})),
				v = Object(s.b)(null, e => ({
					closeSnoovatarModal: () => e(Object(n.a)())
				}));
			a.default = v(e => r.a.createElement(m, u({}, e, {
				className: l.a.snoovatarModal,
				withOverlay: !0,
				onOverlayClick: e.closeSnoovatarModal
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SnoovatarModal.bab5ed39bfba49e8855f.js.map