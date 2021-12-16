// https://www.redditstatic.com/desktop2x/6.8683df1fc1e95fc8dfb9.js
// Retrieved at 12/15/2021, 8:10:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[6, 11], {
		"./node_modules/@apollo/client/react/context/ApolloProvider.js": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return d
			}));
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				o = a("./node_modules/@apollo/client/node_modules/ts-invariant/lib/invariant.esm.js"),
				r = a("./node_modules/@apollo/client/react/context/ApolloContext.js"),
				d = function(e) {
					var t = e.client,
						a = e.children,
						n = Object(r.a)();
					return s.a.createElement(n.Consumer, null, (function(e) {
						return void 0 === e && (e = {}), t && e.client !== t && (e = Object.assign({}, e, {
							client: t
						})), Object(o.b)(e.client, 28), s.a.createElement(n.Provider, {
							value: e
						}, a)
					}))
				}
		},
		"./node_modules/@reddit/avatars.templates.data-wrapper/dist/Fonts/Fonts.module.less": function(e, t, a) {},
		"./node_modules/@reddit/avatars.templates.data-wrapper/dist/index.js": function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "DataWrapper", (function() {
				return C
			}));
			var n = a("./node_modules/@apollo/client/react/context/ApolloProvider.js"),
				s = a("./node_modules/react/index.js"),
				o = a.n(s),
				r = a("./node_modules/lodash/lodash.js"),
				d = a("./node_modules/@reddit/avatars.ui.loading-spinner/dist/index.js"),
				i = a("./node_modules/@reddit/avatars.ui.splash-banner/dist/SplashBanner.module.less"),
				l = a.n(i);
			const c = e => {
				let {
					onClick: t
				} = e;
				return o.a.createElement("div", {
					className: l.a.container,
					onClick: t
				})
			};
			var u = a("./node_modules/classnames/index.js"),
				m = a.n(u),
				v = a("./node_modules/@reddit/avatars.externals/dist/index.js"),
				p = a("./node_modules/@reddit/avatars.ui.empty-component/dist/index.js"),
				_ = a("./node_modules/@reddit/avatars.utils/dist/index.js"),
				E = a("./node_modules/@reddit/avatars.ui.svgs/dist/index.js"),
				b = a("./node_modules/@reddit/avatars.ui.toast/dist/Toast.module.less"),
				j = a.n(b);
			const f = e => {
					let {
						toast: t,
						onDismiss: a
					} = e;
					return o.a.createElement("div", {
						"data-testid": "toast",
						className: m()(j.a.toastContainer, {
							[j.a.errorToastContainer]: t.kind === _.y.Error,
							[j.a.infoToastContainer]: t.kind === _.y.Info
						})
					}, o.a.createElement("div", {
						className: j.a.colorBar,
						onClick: a
					}, o.a.createElement(E.b, {
						className: j.a.dismissIcon
					})), o.a.createElement("div", {
						className: j.a.toastContent
					}, t.kind === _.y.SuccessProfileSave && o.a.createElement(g, null), o.a.createElement("p", {
						className: j.a.text
					}, t.text), t.kind === _.y.SuccessProfileSave && o.a.createElement("a", {
						className: j.a.anchorLink,
						href: _.r,
						target: "_top",
						rel: "noopener noreferrer"
					}, o.a.createElement(p.a, {
						desc: "View Profile"
					}, "View Profile"))))
				},
				g = () => {
					var e;
					const {
						user: t
					} = Object(v.Q)(), a = null == t ? void 0 : null === (e = t.snoovatar) || void 0 === e ? void 0 : e.imageUrl;
					return o.a.createElement("span", {
						className: j.a.previewImageContainer
					}, o.a.createElement("img", {
						className: j.a.previewImageUrl,
						src: a,
						alt: Object(p.b)("Your saved avatar", "Image alt text: the user's saved icon")
					}))
				};
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var x = a("./node_modules/@reddit/avatars.ui.toast/dist/ToastWrapper/ToastWrapper.module.less"),
				h = a.n(x);
			const w = e => {
				let {
					children: t
				} = e;
				const [a, n] = Object(s.useState)([]), r = e => {
					n(t => t.filter(t => t.id !== e))
				};
				return o.a.createElement(o.a.Fragment, null, o.a.createElement(_.x.Provider, {
					value: {
						toasts: a,
						addToast: e => {
							n(t => [...t, e])
						},
						dismissToast: r
					}
				}, t), o.a.createElement("div", {
					className: h.a.toastWrapper
				}, a.map(e => o.a.createElement(f, {
					key: e.id,
					toast: e,
					onDismiss: () => r(e.id)
				}))))
			};
			var O = a("./node_modules/@reddit/avatars.constants/dist/index.js");
			a("./node_modules/normalize.css/normalize.css"), a("./node_modules/@reddit/avatars.templates.data-wrapper/dist/Fonts/Fonts.module.less");
			v.c.init({
				attachStacktrace: !0,
				dsn: "https://cd2a8f90b4ed4e0ba2b233f8661f2dd8@oops.redditmedia.com/138",
				environment: "production",
				ignoreErrors: ["$ is not defined"],
				integrations: [...Object(v.u)(), new v.c.Integrations.Breadcrumbs({
					console: !1
				}), new v.c.Integrations.GlobalHandlers({
					onerror: !0,
					onunhandledrejection: !1
				})],
				beforeSend: e => (e = Object(v.g)(e), Object(v.A)(e) ? null : Object(v.y)(e))
			}), v.c.setTag("project", "snoovatar-web-builder"), v.c.setTag("app", "snoovatar-web-builder");
			const C = e => {
					let {
						authHeaders: t,
						children: a,
						config: n,
						sendEvent: s
					} = e;
					return t ? o.a.createElement(O.a, {
						config: n
					}, o.a.createElement(T, {
						authHeaders: t,
						sendEvent: s
					}, a)) : null
				},
				T = o.a.memo(e => {
					let {
						authHeaders: t,
						children: a,
						sendEvent: d
					} = e;
					const i = Object(v.J)(),
						l = Object(s.useMemo)(() => i(t), []);
					return o.a.createElement(n.a, {
						client: l
					}, !Object(r.isNil)(l.extract()) && o.a.createElement(w, null, o.a.createElement(B, {
						sendEvent: d
					}, a)))
				}),
				B = e => {
					let {
						children: t,
						sendEvent: a
					} = e;
					const n = Object(v.L)(),
						s = Object(_.wb)(),
						r = () => s({
							text: Object(_.H)("Please log in to continue", "Error notification: log in required for access"),
							kind: _.y.Error
						});
					return n === v.a.Loading ? o.a.createElement(d.a, null) : n === v.a.Failed ? o.a.createElement(c, {
						onClick: r
					}) : o.a.createElement(v.e, {
						sendEvent: a
					}, t)
				}
		},
		"./node_modules/@reddit/avatars.ui.splash-banner/dist/SplashBanner.module.less": function(e, t, a) {
			e.exports = {
				container: "_5qE670u4Q8BniYuzdar7Y",
				splashBannerImage: "lUAw5GgaziwXQK98Br0lP",
				getStartedButton: "_3alrPcUehYLaXB1bnVi6xO",
				disabled: "_2azzx1eSKTWWdyFZT8Pe5z"
			}
		},
		"./node_modules/@reddit/avatars.ui.toast/dist/Toast.module.less": function(e, t, a) {
			e.exports = {
				toastContainer: "_3W7qpgcuOhKkFKWv8NelyY",
				animatedIn: "_1Pd8a5fT07R-qvVLsoFD3U",
				errorToastContainer: "_1ovuYyuuck9H1FD_QgEqfx",
				infoToastContainer: "_2aquLoI-3_Jst9oiH61gf6",
				colorBar: "IZsghRBX-3roRvM0r7qiS",
				dismissIcon: "EEUIogRaVuMv8-N2wERci",
				toastContent: "iNivq-LhxB0X1YgKdx8rR",
				anchorLink: "_3z3aHw0a0Ob6EUjPIuxUHz",
				text: "_2i57VQuvq_WtTVje0AXcm6",
				previewImageContainer: "_3iLAZJ7_8YjWo4SAy4fBgc",
				previewImageUrl: "_-5vanJnOG0ymtmQ5RjqsM"
			}
		},
		"./node_modules/@reddit/avatars.ui.toast/dist/ToastWrapper/ToastWrapper.module.less": function(e, t, a) {
			e.exports = {
				toastWrapper: "_1BWxvy9CwD4e3IB9Ml5biq"
			}
		},
		"./node_modules/normalize.css/normalize.css": function(e, t, a) {},
		"ignored /drone/src/node_modules/qs/node_modules/object-inspect ./util.inspect": function(e, t) {}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/6.8683df1fc1e95fc8dfb9.js.map