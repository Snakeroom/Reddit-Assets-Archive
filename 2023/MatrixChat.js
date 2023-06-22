// https://www.redditstatic.com/desktop2x/MatrixChat.0c04ac311f3d7a1398c2.js
// Retrieved at 6/22/2023, 12:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MatrixChat"], {
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
				r = a.n(s),
				c = a("./node_modules/react-redux/es/index.js"),
				o = a("./src/lib/classNames/index.ts"),
				i = a("./src/lib/portal/index.tsx"),
				l = a("./src/reddit/actions/matrixChat/index.ts"),
				d = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = a("./src/reddit/components/MatrixChat/LoadingState/index.m.less"),
				m = a.n(u);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			const x = e => {
				let {
					className: t,
					onClose: a,
					...s
				} = e;
				return r.a.createElement("div", b({
					className: Object(o.a)(m.a.container, t)
				}, s), r.a.createElement("nav", {
					className: m.a.nav
				}), r.a.createElement("section", {
					className: m.a.content
				}, r.a.createElement("header", {
					className: m.a.header
				}, r.a.createElement("span", {
					className: m.a.title
				}, n.fbt._("Loading chats...", null, {
					hk: "3NaRq0"
				})), r.a.createElement("button", {
					className: m.a.closeBtn,
					onClick: a
				}, r.a.createElement(d.b, null))), r.a.createElement("div", null)))
			};
			var O = a("./src/lib/prettyPrintNumber/index.ts"),
				E = a("./src/reddit/icons/svgs/Close/index.tsx"),
				h = a("./src/reddit/reducers/features/matrixChat/index.ts"),
				f = a("./src/reddit/selectors/features/matrixChat/index.ts"),
				p = a("./src/reddit/components/MatrixChat/MinimizedChat/index.m.less"),
				M = a.n(p);

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
				const s = Object(c.d)(),
					i = Object(c.e)(f.a);
				return r.a.createElement("section", C({
					className: Object(o.a)(M.a.container, t),
					onClick: () => {
						s(Object(l.d)({
							state: h.b.NORMAL
						}))
					}
				}, a), r.a.createElement("div", {
					className: M.a.titleContainer
				}, n.fbt._("Chat", null, {
					hk: "2Joznw"
				}), i && i > 0 && r.a.createElement("span", {
					className: M.a.notificationsBadge
				}, Object(O.b)(i))), r.a.createElement("button", {
					type: "button",
					onClick: e => {
						null == e || e.stopPropagation(), s(Object(l.d)({
							state: h.b.CLOSED
						}))
					}
				}, r.a.createElement(E.a, null)))
			};
			var v = a("./src/reddit/hooks/useToast.tsx"),
				j = a("./src/reddit/selectors/user.ts"),
				N = a("./src/reddit/components/MatrixChat/Modal/Modal.m.less"),
				I = a.n(N);
			const g = e => r.a.createElement("div", {
				onClick: t => {
					t.stopPropagation(), e.onClose()
				},
				className: I.a.chatModal
			}, e.children, r.a.createElement(E.a, {
				className: I.a.close
			}));
			var L, A, D = a("./src/reddit/components/MatrixChat/index.m.less"),
				w = a.n(D);
			! function(e) {
				e.CLOSE = "matrix-chat.close", e.MINIMIZE = "matrix-chat.minimize", e.MAXIMIZE = "matrix-chat.maximize", e.LOADED = "matrix-chat.loaded", e.NOTIFICATIONS = "matrix-chat.notifications", e.OPEN_IMAGE = "matrix-chat.open_img_modal"
			}(L || (L = {})),
			function(e) {
				e.openDM = "openDM"
			}(A || (A = {}));
			const y = () => {
				const e = r.a.useRef(null),
					[t, a] = r.a.useState(!1),
					[s, d] = r.a.useState(null),
					u = r.a.useRef(null),
					m = Object(c.d)(),
					b = Object(c.e)(j.k),
					O = Object(c.e)(f.c),
					E = Object(c.e)(f.b),
					p = Object(c.e)(f.d),
					M = Object(v.a)(),
					C = e => {
						null == e || e.stopPropagation(), d(null), m(Object(l.d)({
							state: h.b.CLOSED
						}))
					};
				r.a.useLayoutEffect(() => {
					const e = e => {
						var t, n, s, r;
						if (e.data === L.CLOSE && C(), e.data === L.MINIMIZE && m(Object(l.d)({
								state: h.b.MINIMIZED
							})), e.data === L.MAXIMIZE && m(Object(l.d)({
								state: h.b.MINIMIZED
							})), e.data === L.LOADED && (a(!0), clearTimeout(u.current || void 0)), 0 === (null === (n = null === (t = e.data) || void 0 === t ? void 0 : t.indexOf) || void 0 === n ? void 0 : n.call(t, L.NOTIFICATIONS))) {
							const [, t] = e.data.split(":");
							m(Object(l.c)({
								count: parseInt(t, 10)
							}))
						}
						if (null === (r = null === (s = e.data) || void 0 === s ? void 0 : s.startsWith) || void 0 === r ? void 0 : r.call(s, L.OPEN_IMAGE)) {
							const t = e.data.substring(L.OPEN_IMAGE.length + 1, e.data.length);
							d(t)
						}
					};
					return window.addEventListener("message", e), () => window.removeEventListener("message", e)
				}, []), r.a.useEffect(() => {
					E === h.b.CLOSED && u.current && (a(!1), clearTimeout(u.current))
				}, [E]), r.a.useEffect(() => {
					E !== h.b.NORMAL || t || (u.current = window.setTimeout(() => {
						C(), M(n.fbt._("Oops, something went wrong. Try again.", null, {
							hk: "4mYDx0"
						}))
					}, 3e4))
				}, [E, t]), r.a.useEffect(() => {
					var a, n;
					t && p && (null === (n = null === (a = e.current) || void 0 === a ? void 0 : a.contentWindow) || void 0 === n || n.postMessage(`${A.openDM}:${p}`, "*"), m(Object(l.a)()))
				}, [t, p]), r.a.useEffect(() => {
					b && m(Object(l.b)(b))
				}, [b]);
				const N = E === h.b.NORMAL;
				return E === h.b.CLOSED ? null : r.a.createElement(i.a, null, E === h.b.MINIMIZED && r.a.createElement(_, {
					className: w.a.container
				}), !t && N && r.a.createElement(x, {
					className: Object(o.a)(w.a.container, w.a.main),
					onClose: C
				}), r.a.createElement("iframe", {
					ref: e,
					className: Object(o.a)(w.a.container, w.a.main, {
						[w.a.hidden]: !(t && N)
					}),
					src: O
				}), s && r.a.createElement(g, {
					onClose: () => d(null)
				}, r.a.createElement("img", {
					src: s
				})))
			}
		},
		"./src/reddit/hooks/useToast.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return o
			})), a.d(t, "a", (function() {
				return i
			}));
			var n = a("./node_modules/react/index.js"),
				s = a("./node_modules/react-redux/es/index.js"),
				r = a("./src/reddit/actions/toaster.ts"),
				c = a("./src/reddit/models/Toast/index.ts");

			function o() {
				const e = Object(s.d)();
				return Object(n.useCallback)(t => e(Object(r.f)(t)), [e])
			}

			function i() {
				const e = o();
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MatrixChat.0c04ac311f3d7a1398c2.js.map