// https://www.redditstatic.com/desktop2x/MatrixChat.df2d757c6babf3206dd8.js
// Retrieved at 8/30/2022, 3:10:05 PM by Reddit Dataminer v1.0.0
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
				o = a.n(c);
			t.a = e => {
				let {
					src: t,
					className: a,
					onLoad: c
				} = e;
				const i = Object(n.useRef)(null),
					d = function(e) {
						const [t, a] = Object(n.useState)(0);
						return Object(n.useEffect)(() => {
							a(e => e + 1)
						}, [e]), t
					}(t);
				return s.a.createElement("iframe", {
					key: d,
					className: Object(r.a)(o.a.IFrame, a),
					ref: i,
					src: t,
					onLoad: () => {
						const e = (() => {
							var e, t;
							try {
								return null === (t = null === (e = i.current) || void 0 === e ? void 0 : e.contentWindow) || void 0 === t ? void 0 : t.document
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
		"./src/reddit/components/MatrixChat/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_33u6YbC6AlnzIulwsYr05H",
				main: "_3cIQAjonpVpMgj97-cQoWL",
				hidden: "_2WjiIh10sMeANfnbMEowgV",
				minimizedChat: "_3TjRLgcOyxxeAJ8Ks9YSsx"
			}
		},
		"./src/reddit/components/MatrixChat/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "MatrixChat", (function() {
				return p
			}));
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/react/index.js"),
				r = a.n(s),
				c = a("./node_modules/react-redux/es/index.js"),
				o = a("./src/lib/classNames/index.ts"),
				i = a("./src/lib/portal/index.tsx"),
				d = a("./src/reddit/actions/matrixChat/index.ts"),
				l = a("./src/reddit/components/IFrame/index.tsx"),
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
			const E = e => {
				let {
					className: t,
					onClose: a,
					...s
				} = e;
				return r.a.createElement("div", x({
					className: Object(o.a)(b.a.container, t)
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
				}, r.a.createElement(m.b, null))), r.a.createElement("div", null)))
			};
			var O, f = a("./src/reddit/hooks/useToast.tsx"),
				I = a("./src/reddit/icons/svgs/Close/index.tsx"),
				j = a("./src/reddit/reducers/features/matrixChat/index.ts"),
				h = a("./src/reddit/selectors/features/matrixChat/index.ts"),
				_ = a("./src/reddit/selectors/user.ts"),
				M = a("./src/reddit/components/MatrixChat/index.m.less"),
				C = a.n(M);
			! function(e) {
				e.CLOSE = "matrix-chat.close", e.MINIMIZE = "matrix-chat.minimize", e.MAXIMIZE = "matrix-chat.maximize", e.LOADED = "matrix-chat.loaded"
			}(O || (O = {}));
			const p = () => {
				const [e, t] = r.a.useState(!1), a = r.a.useRef(null), s = Object(c.d)(), m = Object(c.e)(_.i), u = Object(c.e)(h.b), b = Object(c.e)(h.a), x = Object(c.e)(h.c), M = Object(f.a)(), p = b === j.b.CHAT_WITH_USER ? `${u}/user/${x}` : u, v = e => {
					null == e || e.stopPropagation(), s(Object(d.b)({
						state: j.b.CLOSED
					}))
				};
				return r.a.useLayoutEffect(() => {
					const e = e => {
						e.data === O.CLOSE && v(), e.data === O.MINIMIZE && s(Object(d.b)({
							state: j.b.MINIMIZED
						})), e.data === O.MAXIMIZE && s(Object(d.b)({
							state: j.b.MINIMIZED
						})), e.data === O.LOADED && (t(!0), clearTimeout(a.current || void 0))
					};
					return window.addEventListener("message", e), () => window.document.removeEventListener("message", e)
				}, []), r.a.useEffect(() => {
					b === j.b.CLOSED && (t(!1), clearTimeout(a.current || void 0))
				}, [b]), r.a.useEffect(() => {
					b !== j.b.NORMAL || e || (a.current = window.setTimeout(() => {
						v(), M(n.fbt._("Oops, something went wrong. Try again.", null, {
							hk: "4mYDx0"
						}))
					}, 3e4))
				}, [b, e]), r.a.useEffect(() => {
					m && s(Object(d.a)(m))
				}, [m]), b === j.b.CLOSED ? null : r.a.createElement(i.a, null, b === j.b.MINIMIZED && r.a.createElement("section", {
					className: Object(o.a)(C.a.container, C.a.minimizedChat),
					onClick: () => {
						s(Object(d.b)({
							state: j.b.NORMAL
						}))
					}
				}, n.fbt._("Chat", null, {
					hk: "2Joznw"
				}), r.a.createElement("button", {
					type: "button",
					onClick: v
				}, r.a.createElement(I.a, null))), !e && b !== j.b.MINIMIZED && r.a.createElement(E, {
					className: Object(o.a)(C.a.container, C.a.main),
					onClose: v
				}), r.a.createElement(l.a, {
					className: Object(o.a)(C.a.container, C.a.main, {
						[C.a.hidden]: !e || b === j.b.MINIMIZED
					}),
					src: p
				}))
			}
		},
		"./src/reddit/hooks/useToast.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return o
			}));
			var n = a("./node_modules/react/index.js"),
				s = a("./node_modules/react-redux/es/index.js"),
				r = a("./src/reddit/actions/toaster.ts"),
				c = a("./src/reddit/models/Toast/index.ts");

			function o() {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MatrixChat.df2d757c6babf3206dd8.js.map