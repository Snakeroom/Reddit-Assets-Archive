// https://www.redditstatic.com/desktop2x/reddit-components-LayerEmbed.3d85c7b4f3b2116afebe.js
// Retrieved at 12/6/2021, 6:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-LayerEmbed"], {
		"./src/reddit/components/LayerEmbed/index.m.less": function(e, t, n) {
			e.exports = {
				layerCanvas: "_3FsXXcIhVTVryfADMRfvfS"
			}
		},
		"./src/reddit/components/LayerEmbed/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "LayerEmbed", (function() {
				return y
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/config.ts"),
				d = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx"),
				i = n("./node_modules/query-string/index.js"),
				l = n("./src/higherOrderComponents/asModal/index.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const u = Object(l.a)(({
				backgroundUrl: e,
				baseUrl: t,
				width: n,
				height: o,
				frameRef: a,
				options: s
			}) => {
				let d = t + "/static/layermaker/";
				if (s) {
					const e = Object(i.stringify)(s, {
						skipNull: !0
					});
					e.length && (d += `?${e}`)
				}
				return e && (d += `#${encodeURIComponent(e)}`), r.a.createElement("iframe", {
					ref: a,
					style: {
						width: n,
						height: o
					},
					src: d
				})
			});
			var m = ({
					onClose: e,
					...t
				}) => {
					const [n, a] = Object(o.useState)(!1), s = () => a(!1);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(u, c({}, t, {
						withOverlay: !0,
						onOverlayClick: () => a(!0)
					})), n && r.a.createElement(d.a, {
						titleText: "Close Layer maker",
						bodyText: "Are you sure you want to discard all your changes?",
						primaryButtonText: "Back to drawing",
						onPrimaryAction: s,
						secondaryButtonText: "Yes, discard",
						onSecondaryAction: e,
						onClose: s
					}))
				},
				p = n("./src/reddit/components/LayerEmbed/index.m.less"),
				x = n.n(p);
			const y = ({
				baseUrl: e,
				subredditId: t
			}) => {
				const n = Object(o.useRef)(null),
					i = Object(o.useRef)(null),
					l = Object(a.e)(e => e.user.session),
					c = Object(o.useCallback)(() => {
						l && [n, i].forEach(e => {
							var t, n;
							null === (n = null === (t = e.current) || void 0 === t ? void 0 : t.contentWindow) || void 0 === n || n.postMessage({
								action: "Layers.injectAuthHeaders",
								payload: {
									headers: {
										Authorization: `bearer ${l.accessToken}`
									},
									expires: new Date(l.expires).getTime()
								}
							}, s.a.layersUrl)
						})
					}, [l, n, i]),
					[u, p] = Object(o.useState)(!1),
					[y, f] = Object(o.useState)(),
					[h, C] = Object(o.useState)({}),
					[b, g] = Object(o.useState)([594, 628]),
					[_, M] = Object(o.useState)(""),
					[v, T] = Object(o.useState)(!1),
					w = () => T(!1),
					E = Object(o.useCallback)(e => {
						var t, o;
						n.current && e.data && e.data.layerEmbedHeight && (n.current.style.height = e.data.layerEmbedHeight + 8 + "px");
						const {
							action: r,
							payload: a
						} = e.data;
						if ("string" == typeof r && r.startsWith("layers.")) {
							if ("layers.openLayerMaker" === r) {
								const {
									backgroundUrl: e,
									...t
								} = a;
								return f(e), C(t), void p(!0)
							}
							if ("layers.closeLayerMaker" === r) return p(!1);
							if ("layers.resizeLayerMaker" !== r) {
								if ("layers.refreshAuth" !== r) return "layers.reportLayer" === r ? (M(a.postUrl), void T(!0)) : void(null === (o = null === (t = n.current) || void 0 === t ? void 0 : t.contentWindow) || void 0 === o || o.postMessage(e.data, "*"));
								c()
							} else {
								const {
									width: e,
									height: t
								} = a;
								g([e, t])
							}
						}
					}, [n, c, p, f, g]);
				Object(o.useEffect)(() => (window.addEventListener("message", E), () => window.removeEventListener("message", E)), [E]), Object(o.useEffect)(c, [c]);
				const [j, P] = b, O = e + `/static/client/?platform=desktop&subreddit=${t}`;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("iframe", {
					id: "layersEmbed",
					ref: n,
					className: x.a.layerCanvas,
					src: O,
					"data-testid": "layers-embed"
				}), u && r.a.createElement(m, {
					frameRef: i,
					backgroundUrl: y,
					baseUrl: e,
					onClose: () => {
						var e, t;
						p(!1), null === (t = null === (e = n.current) || void 0 === e ? void 0 : e.contentWindow) || void 0 === t || t.postMessage({
							action: "layers.closeLayerMaker"
						}, "*")
					},
					width: j,
					height: P,
					options: h
				}), v && r.a.createElement(d.a, {
					withOverlay: !0,
					onOverlayClick: w,
					titleText: "Report layer",
					bodyText: "Please use the Report menu on the Post",
					primaryButtonText: "Go to post",
					onPrimaryAction: () => {
						window.open(_), T(!1)
					},
					secondaryButtonText: "Cancel",
					onSecondaryAction: w,
					onClose: w
				}))
			};
			t.default = y
		},
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(e, t, n) {
			e.exports = {
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
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "n", (function() {
				return y
			})), n.d(t, "p", (function() {
				return f
			})), n.d(t, "o", (function() {
				return h
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "m", (function() {
				return b
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "k", (function() {
				return M
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "i", (function() {
				return T
			})), n.d(t, "q", (function() {
				return w
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "l", (function() {
				return j
			})), n.d(t, "t", (function() {
				return P
			})), n.d(t, "u", (function() {
				return O
			})), n.d(t, "r", (function() {
				return B
			})), n.d(t, "a", (function() {
				return S
			})), n.d(t, "s", (function() {
				return L
			})), n.d(t, "c", (function() {
				return k
			}));
			var o = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/lessComponent.tsx"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				d = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/controls/Input/ModalInput.tsx"),
				l = n("./src/reddit/icons/svgs/Close/index.tsx"),
				c = n("./src/reddit/components/ModalStyledComponents/index.m.less"),
				u = n.n(c);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const p = r.a.wrapped(l.a, "CloseIcon", u.a),
				x = r.a.section("ModalBody", u.a),
				y = r.a.section("ModalPostPreview", u.a),
				f = r.a.p("ModalText", u.a),
				h = r.a.div("ModalSmallText", u.a),
				C = r.a.div("ModalDescriptionText", u.a),
				b = r.a.div("ModalMetaText", u.a),
				g = r.a.label("ModalFormItem", u.a),
				_ = r.a.wrapped(i.a, "ModalInput", u.a),
				M = r.a.label("ModalInputLabel", u.a),
				v = r.a.footer("ModalFooter", u.a),
				T = r.a.header("ModalHeader", u.a),
				w = r.a.div("ModalTitle", u.a),
				E = r.a.div("ModalAnnotation", u.a),
				j = r.a.div("ModalMain", u.a),
				P = r.a.textarea("TextArea", u.a),
				O = r.a.wrapped(d.l, "WarningButton", u.a),
				B = r.a.wrapped(d.l, "PrimaryButton", u.a),
				S = r.a.wrapped(d.o, "CancelButton", u.a),
				L = r.a.wrapped(d.r, "RemoveButton", u.a),
				k = ({
					className: e,
					...t
				}) => s.a.createElement(d.t, m({
					kind: d.b.Button,
					priority: d.c.Primary,
					className: Object(o.a)(u.a.ConfirmButton, e)
				}, t))
		},
		"./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less": function(e, t, n) {
			e.exports = {
				PrimaryButton: "_35XIX8S5eAkigMxHxx98TS",
				primaryButton: "_35XIX8S5eAkigMxHxx98TS",
				ModalText: "_1ShPAP1uGnX3ZkiyNiigAA",
				modalText: "_1ShPAP1uGnX3ZkiyNiigAA"
			}
		},
		"./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/higherOrderComponents/asModal/index.tsx"),
				s = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = n("./src/reddit/constants/keycodes.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				u = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				m = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less"),
				p = n.n(m),
				x = n("./src/lib/lessComponent.tsx");
			const y = x.a.wrapped(i.l, "PrimaryButton", p.a),
				f = x.a.wrapped(s.p, "ModalText", p.a);
			class h extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						e.keyCode === d.a.Escape && this.props.onClose()
					}
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey)
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				render() {
					const {
						primaryButtonLoading: e,
						secondaryButtonLoading: t
					} = this.props;
					return r.a.createElement(s.e, null, r.a.createElement(s.i, null, r.a.createElement(u.a, null, r.a.createElement(s.q, null, this.props.titleText), r.a.createElement(c.a, {
						onClick: this.props.onClose
					}, r.a.createElement(s.b, null)))), r.a.createElement(s.l, null, r.a.createElement(f, null, this.props.bodyText)), r.a.createElement(s.g, null, r.a.createElement(s.a, {
						onClick: this.props.onSecondaryAction
					}, t ? r.a.createElement(l.a, {
						sizePx: 16
					}) : this.props.secondaryButtonText), r.a.createElement(y, {
						onClick: this.props.onPrimaryAction
					}, e ? r.a.createElement(l.a, {
						sizePx: 16
					}) : this.props.primaryButtonText)))
				}
			}
			t.a = Object(a.a)(h)
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/constants/keycodes.ts"),
				l = n("./src/reddit/controls/Input/index.m.less"),
				c = n.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			class m extends r.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = ({
						keyCode: e
					}) => {
						e === i.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...n
					} = this.props;
					return r.a.createElement("input", u({
						className: Object(s.a)(c.a.input, e),
						onKeyDown: this.handleKeyDown
					}, n))
				}
			}
			t.a = Object(a.b)(null, {
				closeModal: d.f
			})(m)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_5gAwSCo7K8G413IoE78Ml",
				right: "_2ghjBMFIsORwdO3oh2Kq6g",
				exapndLeftContainer: "_1zTJo0Ndih4fp__5DjbClN"
			}
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				s = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				i = n.n(d);
			t.a = Object(a.a)(e => r.a.createElement("div", {
				className: Object(s.a)(i.a.exapndLeftContainer, e.className)
			}, r.a.createElement("div", {
				className: i.a.left
			}, Array.isArray(e.children) && e.children[0]), r.a.createElement("div", {
				className: i.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-LayerEmbed.3d85c7b4f3b2116afebe.js.map