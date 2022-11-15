// https://www.redditstatic.com/desktop2x/MatrixChat.c32a3b3d5b7ca1b2e929.js
// Retrieved at 11/14/2022, 7:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MatrixChat"], {
		"./src/reddit/components/IFrame/index.m.less": function(e, t, a) {
			e.exports = {
				IFrame: "saPujbGMyXRwqISHcmJH9",
				iFrame: "saPujbGMyXRwqISHcmJH9"
			}
		},
		"./src/reddit/components/IFrame/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/lib/classNames/index.ts");
			var c = a("./src/reddit/components/IFrame/index.m.less"),
				i = a.n(c);
			t.a = e => {
				let {
					src: t,
					className: a,
					onLoad: c
				} = e;
				const o = Object(n.useRef)(null),
					d = function(e) {
						const [t, a] = Object(n.useState)(0);
						return Object(n.useEffect)(() => {
							a(e => e + 1)
						}, [e]), t
					}(t);
				return s.a.createElement("iframe", {
					key: d,
					className: Object(r.a)(i.a.IFrame, a),
					ref: o,
					src: t,
					onLoad: () => {
						const e = (() => {
							var e, t;
							try {
								return null === (t = null === (e = o.current) || void 0 === e ? void 0 : e.contentWindow) || void 0 === t ? void 0 : t.document
							} catch (a) {}
						})();
						e && c && c(e)
					}
				})
			}
		},
		"./src/reddit/components/MatrixChat/LoadingState/index.m.less": function(e, t, a) {
			e.exports = {
				container: "vjyhtWT7cI9IhsOA7L2As",
				nav: "_2-GHwpQ47S5e-3sCD9_I3K",
				content: "_1dxzy9vQ0KNVew49j0rz4q",
				header: "_3Dt8tfRxeByrHvgD7HLk9W",
				title: "_22xz0Atg-oRKMLlZiU_Kg9",
				closeBtn: "_1O8fhvoUDQCc6xR_kTVwxz"
			}
		},
		"./src/reddit/components/MatrixChat/MinimizedChat/index.m.less": function(e, t, a) {
			e.exports = {
				container: "XnTJFdgGnHy_r9dV1Ezq8",
				titleContainer: "_12DakgjN8uMuRRPaPyLu2N",
				notificationsBadge: "_2_G8AiSLv08c4T_gxptwUt"
			}
		},
		"./src/reddit/components/MatrixChat/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_33u6YbC6AlnzIulwsYr05H",
				main: "_3cIQAjonpVpMgj97-cQoWL",
				hidden: "_2WjiIh10sMeANfnbMEowgV"
			}
		},
		"./src/reddit/components/MatrixChat/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "MatrixChat", (function() {
				return w
			}));
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/react/index.js"),
				r = a.n(s),
				c = a("./node_modules/react-redux/es/index.js"),
				i = a("./src/lib/classNames/index.ts"),
				o = a("./src/lib/portal/index.tsx"),
				d = a("./src/reddit/actions/matrixChat/index.ts"),
				l = a("./src/reddit/components/IFrame/index.tsx"),
				u = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = a("./src/reddit/components/MatrixChat/LoadingState/index.m.less"),
				b = a.n(m);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			const O = e => {
				let {
					className: t,
					onClose: a,
					...s
				} = e;
				return r.a.createElement("div", x({
					className: Object(i.a)(b.a.container, t)
				}, s), r.a.createElement("nav", {
					className: b.a.nav
				}), r.a.createElement("section", {
					className: b.a.content
				}, r.a.createElement("header", {
					className: b.a.header
				}, r.a.createElement("span", {
					className: b.a.title
				}, n.fbt._("Loading chats...", null, {
					hk: "3NaRq0"
				})), r.a.createElement("button", {
					className: b.a.closeBtn,
					onClick: a
				}, r.a.createElement(u.b, null))), r.a.createElement("div", null)))
			};
			var f = a("./src/lib/prettyPrintNumber/index.ts"),
				E = a("./src/reddit/icons/svgs/Close/index.tsx"),
				j = a("./src/reddit/reducers/features/matrixChat/index.ts"),
				h = a("./src/reddit/selectors/features/matrixChat/index.ts"),
				p = a("./src/reddit/components/MatrixChat/MinimizedChat/index.m.less"),
				I = a.n(p);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			const N = e => {
				let {
					className: t,
					...a
				} = e;
				const s = Object(c.d)(),
					o = Object(c.e)(h.a);
				return r.a.createElement("section", C({
					className: Object(i.a)(I.a.container, t),
					onClick: () => {
						s(Object(d.c)({
							state: j.b.NORMAL
						}))
					}
				}, a), r.a.createElement("div", {
					className: I.a.titleContainer
				}, n.fbt._("Chat", null, {
					hk: "2Joznw"
				}), o && o > 0 && r.a.createElement("span", {
					className: I.a.notificationsBadge
				}, Object(f.b)(o))), r.a.createElement("button", {
					type: "button",
					onClick: e => {
						null == e || e.stopPropagation(), s(Object(d.c)({
							state: j.b.CLOSED
						}))
					}
				}, r.a.createElement(E.a, null)))
			};
			var _, v = a("./src/reddit/hooks/useToast.tsx"),
				M = a("./src/reddit/selectors/user.ts"),
				L = a("./src/reddit/components/MatrixChat/index.m.less"),
				g = a.n(L);
			! function(e) {
				e.CLOSE = "matrix-chat.close", e.MINIMIZE = "matrix-chat.minimize", e.MAXIMIZE = "matrix-chat.maximize", e.LOADED = "matrix-chat.loaded", e.NOTIFICATIONS = "matrix-chat.notifications"
			}(_ || (_ = {}));
			const w = () => {
				const [e, t] = r.a.useState(!1), a = r.a.useRef(null), s = Object(c.d)(), u = Object(c.e)(M.j), m = Object(c.e)(h.c), b = Object(c.e)(h.b), x = Object(c.e)(h.d), f = Object(v.a)(), E = b === j.b.CHAT_WITH_USER ? `${m}/user/${x}` : m, p = e => {
					null == e || e.stopPropagation(), s(Object(d.c)({
						state: j.b.CLOSED
					}))
				};
				return r.a.useLayoutEffect(() => {
					const e = e => {
						var n, r;
						if (e.data === _.CLOSE && p(), e.data === _.MINIMIZE && s(Object(d.c)({
								state: j.b.MINIMIZED
							})), e.data === _.MAXIMIZE && s(Object(d.c)({
								state: j.b.MINIMIZED
							})), e.data === _.LOADED && (t(!0), clearTimeout(a.current || void 0)), 0 === (null === (r = null === (n = e.data) || void 0 === n ? void 0 : n.indexOf) || void 0 === r ? void 0 : r.call(n, _.NOTIFICATIONS))) {
							const [, t] = e.data.split(":");
							s(Object(d.b)({
								count: parseInt(t, 10)
							}))
						}
					};
					return window.addEventListener("message", e), () => window.document.removeEventListener("message", e)
				}, []), r.a.useEffect(() => {
					b === j.b.CLOSED && a.current && (t(!1), clearTimeout(a.current))
				}, [b]), r.a.useEffect(() => {
					b !== j.b.NORMAL || e || (a.current = window.setTimeout(() => {
						p(), f(n.fbt._("Oops, something went wrong. Try again.", null, {
							hk: "4mYDx0"
						}))
					}, 3e4))
				}, [b, e]), r.a.useEffect(() => {
					u && s(Object(d.a)(u))
				}, [u]), b === j.b.CLOSED ? null : r.a.createElement(o.a, null, b === j.b.MINIMIZED && r.a.createElement(N, {
					className: g.a.container
				}), !e && b === j.b.NORMAL && r.a.createElement(O, {
					className: Object(i.a)(g.a.container, g.a.main),
					onClose: p
				}), r.a.createElement(l.a, {
					className: Object(i.a)(g.a.container, g.a.main, {
						[g.a.hidden]: !(e && b === j.b.NORMAL)
					}),
					src: E
				}))
			}
		},
		"./src/reddit/hooks/useToast.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return i
			}));
			var n = a("./node_modules/react/index.js"),
				s = a("./node_modules/react-redux/es/index.js"),
				r = a("./src/reddit/actions/toaster.ts"),
				c = a("./src/reddit/models/Toast/index.ts");

			function i() {
				const e = function() {
					const e = Object(s.d)();
					return Object(n.useCallback)(t => e(Object(r.f)(t)), [e])
				}();
				return Object(n.useCallback)((t, a) => e({
					duration: 5e3,
					kind: c.b.Error,
					...a,
					text: t
				}), [e])
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MatrixChat.c32a3b3d5b7ca1b2e929.js.map