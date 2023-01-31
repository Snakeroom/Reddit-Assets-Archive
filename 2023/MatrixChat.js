// https://www.redditstatic.com/desktop2x/MatrixChat.a01046e4e26d887741c5.js
// Retrieved at 1/31/2023, 1:10:04 PM by Reddit Dataminer v1.0.0
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
				c = a("./src/lib/classNames/index.ts");
			var r = a("./src/reddit/components/IFrame/index.m.less"),
				o = a.n(r);
			t.a = e => {
				let {
					src: t,
					className: a,
					onLoad: r
				} = e;
				const i = Object(n.useRef)(null),
					l = function(e) {
						const [t, a] = Object(n.useState)(0);
						return Object(n.useEffect)(() => {
							a(e => e + 1)
						}, [e]), t
					}(t);
				return s.a.createElement("iframe", {
					key: l,
					className: Object(c.a)(o.a.IFrame, a),
					ref: i,
					src: t,
					onLoad: () => {
						const e = (() => {
							var e, t;
							try {
								return null === (t = null === (e = i.current) || void 0 === e ? void 0 : e.contentWindow) || void 0 === t ? void 0 : t.document
							} catch (a) {}
						})();
						e && r && r(e)
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
		"./src/reddit/components/MatrixChat/Modal/Modal.m.less": function(e, t, a) {
			e.exports = {
				chatModal: "psLhYH_sFHVi8AysukMj4",
				close: "_1z6fntElzWv5nyRY8tOCTG"
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
				return y
			}));
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/react/index.js"),
				c = a.n(s),
				r = a("./node_modules/react-redux/es/index.js"),
				o = a("./src/lib/classNames/index.ts"),
				i = a("./src/lib/portal/index.tsx"),
				l = a("./src/reddit/actions/matrixChat/index.ts"),
				d = a("./src/reddit/components/IFrame/index.tsx"),
				m = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = a("./src/reddit/components/MatrixChat/LoadingState/index.m.less"),
				b = a.n(u);

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
				return c.a.createElement("div", x({
					className: Object(o.a)(b.a.container, t)
				}, s), c.a.createElement("nav", {
					className: b.a.nav
				}), c.a.createElement("section", {
					className: b.a.content
				}, c.a.createElement("header", {
					className: b.a.header
				}, c.a.createElement("span", {
					className: b.a.title
				}, n.fbt._("Loading chats...", null, {
					hk: "3NaRq0"
				})), c.a.createElement("button", {
					className: b.a.closeBtn,
					onClick: a
				}, c.a.createElement(m.b, null))), c.a.createElement("div", null)))
			};
			var E = a("./src/lib/prettyPrintNumber/index.ts"),
				h = a("./src/reddit/icons/svgs/Close/index.tsx"),
				f = a("./src/reddit/reducers/features/matrixChat/index.ts"),
				p = a("./src/reddit/selectors/features/matrixChat/index.ts"),
				M = a("./src/reddit/components/MatrixChat/MinimizedChat/index.m.less"),
				j = a.n(M);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = e => {
				let {
					className: t,
					...a
				} = e;
				const s = Object(r.d)(),
					i = Object(r.e)(p.a);
				return c.a.createElement("section", C({
					className: Object(o.a)(j.a.container, t),
					onClick: () => {
						s(Object(l.c)({
							state: f.b.NORMAL
						}))
					}
				}, a), c.a.createElement("div", {
					className: j.a.titleContainer
				}, n.fbt._("Chat", null, {
					hk: "2Joznw"
				}), i && i > 0 && c.a.createElement("span", {
					className: j.a.notificationsBadge
				}, Object(E.b)(i))), c.a.createElement("button", {
					type: "button",
					onClick: e => {
						null == e || e.stopPropagation(), s(Object(l.c)({
							state: f.b.CLOSED
						}))
					}
				}, c.a.createElement(h.a, null)))
			};
			var I = a("./src/reddit/hooks/useToast.tsx"),
				N = a("./src/reddit/selectors/user.ts"),
				v = a("./src/reddit/components/MatrixChat/Modal/Modal.m.less"),
				L = a.n(v);
			const g = e => c.a.createElement("div", {
				onClick: t => {
					t.stopPropagation(), e.onClose()
				},
				className: L.a.chatModal
			}, e.children, c.a.createElement(h.a, {
				className: L.a.close
			}));
			var A, w = a("./src/reddit/components/MatrixChat/index.m.less"),
				D = a.n(w);
			! function(e) {
				e.CLOSE = "matrix-chat.close", e.MINIMIZE = "matrix-chat.minimize", e.MAXIMIZE = "matrix-chat.maximize", e.LOADED = "matrix-chat.loaded", e.NOTIFICATIONS = "matrix-chat.notifications", e.OPEN_IMAGE = "matrix-chat.open_img_modal"
			}(A || (A = {}));
			const y = () => {
				const [e, t] = c.a.useState(!1), [a, s] = c.a.useState(null), m = c.a.useRef(null), u = Object(r.d)(), b = Object(r.e)(N.k), x = Object(r.e)(p.c), E = Object(r.e)(p.b), h = Object(r.e)(p.d), M = Object(I.a)(), j = E === f.b.CHAT_WITH_USER ? `${x}/user/${h}` : x, C = e => {
					null == e || e.stopPropagation(), s(null), u(Object(l.c)({
						state: f.b.CLOSED
					}))
				};
				return c.a.useLayoutEffect(() => {
					const e = e => {
						var a, n, c;
						if (e.data === A.CLOSE && C(), e.data === A.MINIMIZE && u(Object(l.c)({
								state: f.b.MINIMIZED
							})), e.data === A.MAXIMIZE && u(Object(l.c)({
								state: f.b.MINIMIZED
							})), e.data === A.LOADED && (t(!0), clearTimeout(m.current || void 0)), 0 === (null === (n = null === (a = e.data) || void 0 === a ? void 0 : a.indexOf) || void 0 === n ? void 0 : n.call(a, A.NOTIFICATIONS))) {
							const [, t] = e.data.split(":");
							u(Object(l.b)({
								count: parseInt(t, 10)
							}))
						}
						if (null === (c = e.data) || void 0 === c ? void 0 : c.startsWith(A.OPEN_IMAGE)) {
							const t = e.data.substring(A.OPEN_IMAGE.length + 1, e.data.length);
							s(t)
						}
					};
					return window.addEventListener("message", e), () => window.document.removeEventListener("message", e)
				}, []), c.a.useEffect(() => {
					E === f.b.CLOSED && m.current && (t(!1), clearTimeout(m.current))
				}, [E]), c.a.useEffect(() => {
					E !== f.b.NORMAL || e || (m.current = window.setTimeout(() => {
						C(), M(n.fbt._("Oops, something went wrong. Try again.", null, {
							hk: "4mYDx0"
						}))
					}, 3e4))
				}, [E, e]), c.a.useEffect(() => {
					b && u(Object(l.a)(b))
				}, [b]), E === f.b.CLOSED ? null : c.a.createElement(i.a, null, E === f.b.MINIMIZED && c.a.createElement(_, {
					className: D.a.container
				}), !e && E === f.b.NORMAL && c.a.createElement(O, {
					className: Object(o.a)(D.a.container, D.a.main),
					onClose: C
				}), c.a.createElement(d.a, {
					className: Object(o.a)(D.a.container, D.a.main, {
						[D.a.hidden]: !(e && E === f.b.NORMAL)
					}),
					src: j
				}), a && c.a.createElement(g, {
					onClose: () => s(null)
				}, c.a.createElement("img", {
					src: a
				})))
			}
		},
		"./src/reddit/hooks/useToast.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return o
			}));
			var n = a("./node_modules/react/index.js"),
				s = a("./node_modules/react-redux/es/index.js"),
				c = a("./src/reddit/actions/toaster.ts"),
				r = a("./src/reddit/models/Toast/index.ts");

			function o() {
				const e = function() {
					const e = Object(s.d)();
					return Object(n.useCallback)(t => e(Object(c.f)(t)), [e])
				}();
				return Object(n.useCallback)((t, a) => e({
					duration: 5e3,
					kind: r.b.Error,
					...a,
					text: t
				}), [e])
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MatrixChat.a01046e4e26d887741c5.js.map