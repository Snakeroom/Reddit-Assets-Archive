// https://www.redditstatic.com/desktop2x/SnoovatarModal.8ff5d16715f3959dbaaf.js
// Retrieved at 4/15/2021, 3:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SnoovatarModal"], {
		"./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx": function(e, a, t) {
			"use strict";
			var o = t("./node_modules/react/index.js"),
				r = t.n(o),
				n = t("./node_modules/react-redux/es/index.js"),
				s = t("./src/config.ts"),
				c = t("./src/lib/classNames/index.ts"),
				d = t("./src/reddit/helpers/trackers/snoovatar.ts"),
				i = t("./src/reddit/hooks/useTracking.ts"),
				l = t("./src/reddit/components/SnoovatarModal/index.m.less"),
				u = t.n(l);
			a.a = ({
				className: e
			}) => {
				const a = Object(i.a)();
				Object(o.useEffect)(() => {
					a(d.d)
				}, [a]);
				const t = Object(n.e)(e => e.user.session),
					l = Object(o.useRef)(null),
					m = Object(o.useCallback)(e => {
						t && e && e.postMessage({
							type: "injectAuth",
							headers: {
								Authorization: `Bearer ${t.accessToken}`
							},
							expiration: new Date(t.expires).getTime()
						}, s.a.snoovatarUrl)
					}, [t]);
				return Object(o.useEffect)(() => {
					var e;
					return m(null === (e = null == l ? void 0 : l.current) || void 0 === e ? void 0 : e.contentWindow)
				}, [l, m]), Object(o.useEffect)(() => {
					const e = e => {
						"refreshAuth" === (null == e ? void 0 : e.data) && m(e.source)
					};
					return window.addEventListener("message", e), () => window.removeEventListener("message", e)
				}, [m]), r.a.createElement("div", {
					className: Object(c.a)(u.a.iframeContainer, e)
				}, r.a.createElement("iframe", {
					ref: l,
					src: `${s.a.snoovatarUrl}/static/client/?platform=desktop`
				}))
			}
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
				n = t("./node_modules/react-redux/es/index.js"),
				s = t("./src/reddit/actions/snoovatar.ts"),
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
				v = Object(n.b)(null, e => ({
					closeSnoovatarModal: () => e(Object(s.a)())
				}));
			a.default = v(e => r.a.createElement(m, u({}, e, {
				className: l.a.snoovatarModal,
				withOverlay: !0,
				onOverlayClick: e.closeSnoovatarModal
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SnoovatarModal.8ff5d16715f3959dbaaf.js.map