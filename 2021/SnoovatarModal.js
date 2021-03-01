// https://www.redditstatic.com/desktop2x/SnoovatarModal.7cb3677c4c265eaadba7.js
// Retrieved at 2/28/2021, 9:18:37 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SnoovatarModal"], {
		"./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx": function(a, e, o) {
			"use strict";
			var t = o("./node_modules/react/index.js"),
				r = o.n(t),
				n = o("./src/config.ts"),
				s = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/helpers/trackers/snoovatar.ts"),
				d = o("./src/reddit/hooks/useTracking.ts"),
				i = o("./src/reddit/components/SnoovatarModal/index.m.less"),
				l = o.n(i);
			e.a = ({
				className: a
			}) => {
				const e = Object(d.a)();
				return Object(t.useEffect)(() => {
					e(c.c)
				}, [e]), r.a.createElement("div", {
					className: Object(s.a)(l.a.iframeContainer, a)
				}, r.a.createElement("iframe", {
					src: `${n.a.snoovatarUrl}/static/client/?platform=desktop`
				}))
			}
		},
		"./src/reddit/components/SnoovatarModal/index.m.less": function(a, e, o) {
			a.exports = {
				snoovatarModal: "_1kJxmNuSOWrudEvEj4lSc8",
				snoovatarModalIframeContainer: "_3s-GzuR9XtTMo39iEgLq_z",
				iframeContainer: "hrzwqhyhwMHUQUeis25Ny",
				loader: "_18QBIHixUfNNL8DkS_hw8K"
			}
		},
		"./src/reddit/components/SnoovatarModal/index.tsx": function(a, e, o) {
			"use strict";
			o.r(e);
			var t = o("./node_modules/react/index.js"),
				r = o.n(t),
				n = o("./node_modules/react-redux/es/index.js"),
				s = o("./src/reddit/actions/snoovatar.ts"),
				c = o("./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx"),
				d = o("./src/higherOrderComponents/asModal/index.tsx"),
				i = o("./src/reddit/components/SnoovatarModal/index.m.less"),
				l = o.n(i);

			function m() {
				return (m = Object.assign || function(a) {
					for (var e = 1; e < arguments.length; e++) {
						var o = arguments[e];
						for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (a[t] = o[t])
					}
					return a
				}).apply(this, arguments)
			}
			const v = Object(d.a)(() => r.a.createElement(c.a, {
					className: l.a.snoovatarModalIframeContainer
				})),
				u = Object(n.b)(null, a => ({
					closeSnoovatarModal: () => a(Object(s.a)())
				}));
			e.default = u(a => r.a.createElement(v, m({}, a, {
				className: l.a.snoovatarModal,
				withOverlay: !0,
				onOverlayClick: a.closeSnoovatarModal
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SnoovatarModal.7cb3677c4c265eaadba7.js.map