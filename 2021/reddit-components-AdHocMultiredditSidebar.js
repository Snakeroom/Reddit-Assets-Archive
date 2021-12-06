// https://www.redditstatic.com/desktop2x/reddit-components-AdHocMultiredditSidebar.c7f25bcd5fe921025ae2.js
// Retrieved at 12/6/2021, 6:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-AdHocMultiredditSidebar"], {
		"./src/reddit/components/AdHocMultiredditSidebar/index.tsx": function(t, e, n) {
			"use strict";
			n.r(e);
			var a = n("./node_modules/react/index.js"),
				o = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/components/MultiredditSidebar/index.tsx"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/multireddit.ts");
			const c = Object(i.u)(),
				u = Object(d.c)({
					multireddit: l.a,
					subredditCategory: i.m
				}),
				m = Object(r.b)(u);
			e.default = c(m(t => o.a.createElement(s.a, t)))
		},
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(t, e, n) {
			t.exports = {
				CloseIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				closeIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				ModalBody: "_2R3RlhymCOkPrz9TusvcPq",
				modalBody: "_2R3RlhymCOkPrz9TusvcPq",
				ModalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				modalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				ModalText: "mFTHPdbEAklUs8yhT4Xm7",
				modalText: "mFTHPdbEAklUs8yhT4Xm7",
				ModalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				modalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				ModalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				modalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				ModalMetaText: "_27eskYssCs-urVW1uHI4YI",
				modalMetaText: "_27eskYssCs-urVW1uHI4YI",
				ModalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				modalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				ModalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				modalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				ModalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				modalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				ModalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				modalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				ModalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				modalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				ModalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				modalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				ModalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				modalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				ModalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				modalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				TextArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				textArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				WarningButton: "_17UyTSs2atqnKg9dIq5ERg",
				warningButton: "_17UyTSs2atqnKg9dIq5ERg",
				PrimaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				primaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				CancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				cancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				RemoveButton: "_2ulRgczjI5SWCMgSA1CNLj",
				removeButton: "_2ulRgczjI5SWCMgSA1CNLj",
				ConfirmButton: "JZC61-VzVuaiHdWuRUiSC",
				confirmButton: "JZC61-VzVuaiHdWuRUiSC"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return x
			})), n.d(e, "e", (function() {
				return p
			})), n.d(e, "n", (function() {
				return f
			})), n.d(e, "p", (function() {
				return _
			})), n.d(e, "o", (function() {
				return M
			})), n.d(e, "f", (function() {
				return C
			})), n.d(e, "m", (function() {
				return y
			})), n.d(e, "h", (function() {
				return T
			})), n.d(e, "j", (function() {
				return j
			})), n.d(e, "k", (function() {
				return w
			})), n.d(e, "g", (function() {
				return h
			})), n.d(e, "i", (function() {
				return b
			})), n.d(e, "q", (function() {
				return g
			})), n.d(e, "d", (function() {
				return v
			})), n.d(e, "l", (function() {
				return B
			})), n.d(e, "t", (function() {
				return I
			})), n.d(e, "u", (function() {
				return S
			})), n.d(e, "r", (function() {
				return O
			})), n.d(e, "a", (function() {
				return P
			})), n.d(e, "s", (function() {
				return L
			})), n.d(e, "c", (function() {
				return A
			}));
			var a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				r = n("./node_modules/react/index.js"),
				d = n.n(r),
				s = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/controls/Input/ModalInput.tsx"),
				l = n("./src/reddit/icons/svgs/Close/index.tsx"),
				c = n("./src/reddit/components/ModalStyledComponents/index.m.less"),
				u = n.n(c);

			function m() {
				return (m = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a])
					}
					return t
				}).apply(this, arguments)
			}
			const x = o.a.wrapped(l.a, "CloseIcon", u.a),
				p = o.a.section("ModalBody", u.a),
				f = o.a.section("ModalPostPreview", u.a),
				_ = o.a.p("ModalText", u.a),
				M = o.a.div("ModalSmallText", u.a),
				C = o.a.div("ModalDescriptionText", u.a),
				y = o.a.div("ModalMetaText", u.a),
				T = o.a.label("ModalFormItem", u.a),
				j = o.a.wrapped(i.a, "ModalInput", u.a),
				w = o.a.label("ModalInputLabel", u.a),
				h = o.a.footer("ModalFooter", u.a),
				b = o.a.header("ModalHeader", u.a),
				g = o.a.div("ModalTitle", u.a),
				v = o.a.div("ModalAnnotation", u.a),
				B = o.a.div("ModalMain", u.a),
				I = o.a.textarea("TextArea", u.a),
				S = o.a.wrapped(s.l, "WarningButton", u.a),
				O = o.a.wrapped(s.l, "PrimaryButton", u.a),
				P = o.a.wrapped(s.o, "CancelButton", u.a),
				L = o.a.wrapped(s.r, "RemoveButton", u.a),
				A = ({
					className: t,
					...e
				}) => d.a.createElement(s.t, m({
					kind: s.b.Button,
					priority: s.c.Primary,
					className: Object(a.a)(u.a.ConfirmButton, t)
				}, e))
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(t, e, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				o = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/constants/keycodes.ts"),
				l = n("./src/reddit/controls/Input/index.m.less"),
				c = n.n(l);

			function u() {
				return (u = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a])
					}
					return t
				}).apply(this, arguments)
			}
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = ({
						keyCode: t
					}) => {
						t === i.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: t,
						closeModal: e,
						...n
					} = this.props;
					return o.a.createElement("input", u({
						className: Object(d.a)(c.a.input, t),
						onKeyDown: this.handleKeyDown
					}, n))
				}
			}
			e.a = Object(r.b)(null, {
				closeModal: s.f
			})(m)
		},
		"./src/reddit/controls/Input/index.m.less": function(t, e, n) {
			t.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.m.less": function(t, e, n) {
			t.exports = {
				left: "_5gAwSCo7K8G413IoE78Ml",
				right: "_2ghjBMFIsORwdO3oh2Kq6g",
				exapndLeftContainer: "_1zTJo0Ndih4fp__5DjbClN"
			}
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.tsx": function(t, e, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				o = n.n(a),
				r = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				i = n.n(s);
			e.a = Object(r.a)(t => o.a.createElement("div", {
				className: Object(d.a)(i.a.exapndLeftContainer, t.className)
			}, o.a.createElement("div", {
				className: i.a.left
			}, Array.isArray(t.children) && t.children[0]), o.a.createElement("div", {
				className: i.a.right,
				style: {
					flexBasis: t.widthRight
				}
			}, Array.isArray(t.children) && t.children[1])), 2)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-AdHocMultiredditSidebar.c7f25bcd5fe921025ae2.js.map