// https://www.redditstatic.com/desktop2x/SnoovatarModal.63b3e2869351d372b93f.js
// Retrieved at 10/22/2020, 3:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SnoovatarModal"], {
		"./src/reddit/components/SnoovatarModal/index.m.less": function(a, e, o) {
			a.exports = {
				snoovatarModal: "_1kJxmNuSOWrudEvEj4lSc8",
				loader: "_18QBIHixUfNNL8DkS_hw8K"
			}
		},
		"./src/reddit/components/SnoovatarModal/index.tsx": function(a, e, o) {
			"use strict";
			o.r(e);
			var t = o("./node_modules/react/index.js"),
				r = o.n(t),
				n = o("./node_modules/react-redux/es/index.js"),
				s = o("./src/config.ts"),
				c = o("./src/reddit/actions/snoovatar.ts"),
				l = o("./src/higherOrderComponents/asModal/index.tsx"),
				d = o("./src/reddit/components/SnoovatarModal/index.m.less"),
				i = o.n(d);

			function m() {
				return (m = Object.assign || function(a) {
					for (var e = 1; e < arguments.length; e++) {
						var o = arguments[e];
						for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (a[t] = o[t])
					}
					return a
				}).apply(this, arguments)
			}
			const _ = Object(l.a)(() => {
					const [a, e] = Object(t.useState)(!0), o = new URL(s.a.snoovatarUrl + "/static/client/");
					return o.searchParams.set("platform", "desktop"), r.a.createElement(r.a.Fragment, null, r.a.createElement("iframe", {
						src: o.href,
						onLoad: () => e(!1)
					}), a && r.a.createElement("img", {
						role: "progressbar",
						className: i.a.loader,
						src: "".concat(s.a.assetPath, "/img/loader_2orbit_loop.gif")
					}))
				}),
				u = Object(n.b)(null, a => ({
					closeSnoovatarModal: () => a(Object(c.a)())
				}));
			e.default = u(a => r.a.createElement(_, m({}, a, {
				className: i.a.snoovatarModal,
				withOverlay: !0,
				onOverlayClick: a.closeSnoovatarModal
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SnoovatarModal.63b3e2869351d372b93f.js.map