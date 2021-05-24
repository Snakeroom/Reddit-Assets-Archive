// https://www.redditstatic.com/desktop2x/SnoovatarModal.54af08abeb623a1ea016.js
// Retrieved at 5/24/2021, 1:20:04 PM by Reddit Dataminer v1.0.0
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
				match: a
			}) => {
				const t = new URLSearchParams("?platform=desktop");
				Object.entries(a.params).forEach(([e, a]) => t.append(e, a));
				const n = Object(l.a)();
				Object(o.useEffect)(() => {
					n(i.d)
				}, [n]);
				const u = Object(s.e)(e => e.user.session),
					v = Object(o.useRef)(null),
					f = Object(o.useCallback)(e => {
						u && e && e.postMessage({
							type: "injectAuth",
							headers: {
								Authorization: `Bearer ${u.accessToken}`
							},
							expiration: new Date(u.expires).getTime()
						}, c.a.snoovatarUrl)
					}, [u]);
				return Object(o.useEffect)(() => {
					var e;
					return f(null === (e = null == v ? void 0 : v.current) || void 0 === e ? void 0 : e.contentWindow)
				}, [v, f]), Object(o.useEffect)(() => {
					const e = e => {
						"refreshAuth" === (null == e ? void 0 : e.data) && f(e.source)
					};
					return window.addEventListener("message", e), () => window.removeEventListener("message", e)
				}, [f]), r.a.createElement("div", {
					className: Object(d.a)(m.a.iframeContainer, e)
				}, r.a.createElement("iframe", {
					ref: v,
					src: `${c.a.snoovatarUrl}/static/client/?${t.toString()}`
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SnoovatarModal.54af08abeb623a1ea016.js.map