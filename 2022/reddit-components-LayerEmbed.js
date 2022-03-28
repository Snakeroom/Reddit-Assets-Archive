// https://www.redditstatic.com/desktop2x/reddit-components-LayerEmbed.8441216a913308f4b6ec.js
// Retrieved at 3/28/2022, 6:10:04 PM by Reddit Dataminer v1.0.0
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/config.ts"),
				d = n("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx"),
				i = n("./node_modules/query-string/index.js"),
				l = n("./src/higherOrderComponents/asModal/index.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const u = Object(l.a)(e => {
				let {
					backgroundUrl: t,
					baseUrl: n,
					width: r,
					height: a,
					frameRef: s,
					options: d
				} = e, l = n + "/static/layermaker/";
				if (d) {
					const e = Object(i.stringify)(d, {
						skipNull: !0
					});
					e.length && (l += `?${e}`)
				}
				return t && (l += `#${encodeURIComponent(t)}`), o.a.createElement("iframe", {
					ref: s,
					style: {
						width: r,
						height: a
					},
					src: l
				})
			});
			var m = e => {
					let {
						onClose: t,
						...n
					} = e;
					const [a, s] = Object(r.useState)(!1), i = () => s(!1);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(u, c({}, n, {
						withOverlay: !0,
						onOverlayClick: () => s(!0)
					})), a && o.a.createElement(d.a, {
						titleText: "Close Layer maker",
						bodyText: "Are you sure you want to discard all your changes?",
						primaryButtonText: "Back to drawing",
						onPrimaryAction: i,
						secondaryButtonText: "Yes, discard",
						onSecondaryAction: t,
						onClose: i
					}))
				},
				p = n("./src/reddit/components/LayerEmbed/index.m.less"),
				x = n.n(p);
			const y = e => {
				let {
					baseUrl: t,
					subredditId: n
				} = e;
				const i = Object(r.useRef)(null),
					l = Object(r.useRef)(null),
					c = Object(a.e)(e => e.user.session),
					u = Object(r.useCallback)(() => {
						c && [i, l].forEach(e => {
							var t, n;
							null === (n = null === (t = e.current) || void 0 === t ? void 0 : t.contentWindow) || void 0 === n || n.postMessage({
								action: "Layers.injectAuthHeaders",
								payload: {
									headers: {
										Authorization: `bearer ${c.accessToken}`
									},
									expires: new Date(c.expires).getTime()
								}
							}, s.a.layersUrl)
						})
					}, [c, i, l]),
					[p, y] = Object(r.useState)(!1),
					[f, h] = Object(r.useState)(),
					[C, b] = Object(r.useState)({}),
					[g, _] = Object(r.useState)([594, 628]),
					[M, v] = Object(r.useState)(""),
					[T, w] = Object(r.useState)(!1),
					E = () => w(!1),
					j = Object(r.useCallback)(e => {
						var t, n;
						i.current && e.data && e.data.layerEmbedHeight && (i.current.style.height = e.data.layerEmbedHeight + 8 + "px");
						const {
							action: r,
							payload: o
						} = e.data;
						if ("string" == typeof r && r.startsWith("layers.")) {
							if ("layers.openLayerMaker" === r) {
								const {
									backgroundUrl: e,
									...t
								} = o;
								return h(e), b(t), void y(!0)
							}
							if ("layers.closeLayerMaker" === r) return y(!1);
							if ("layers.resizeLayerMaker" !== r) {
								if ("layers.refreshAuth" !== r) return "layers.reportLayer" === r ? (v(o.postUrl), void w(!0)) : void(null === (n = null === (t = i.current) || void 0 === t ? void 0 : t.contentWindow) || void 0 === n || n.postMessage(e.data, "*"));
								u()
							} else {
								const {
									width: e,
									height: t
								} = o;
								_([e, t])
							}
						}
					}, [i, u, y, h, _]);
				Object(r.useEffect)(() => (window.addEventListener("message", j), () => window.removeEventListener("message", j)), [j]), Object(r.useEffect)(u, [u]);
				const [P, O] = g, B = t + `/static/client/?platform=desktop&subreddit=${n}`;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("iframe", {
					id: "layersEmbed",
					ref: i,
					className: x.a.layerCanvas,
					src: B,
					"data-testid": "layers-embed"
				}), p && o.a.createElement(m, {
					frameRef: l,
					backgroundUrl: f,
					baseUrl: t,
					onClose: () => {
						var e, t;
						y(!1), null === (t = null === (e = i.current) || void 0 === e ? void 0 : e.contentWindow) || void 0 === t || t.postMessage({
							action: "layers.closeLayerMaker"
						}, "*")
					},
					width: P,
					height: O,
					options: C
				}), T && o.a.createElement(d.a, {
					withOverlay: !0,
					onOverlayClick: E,
					titleText: "Report layer",
					bodyText: "Please use the Report menu on the Post",
					primaryButtonText: "Go to post",
					onPrimaryAction: () => {
						window.open(M), w(!1)
					},
					secondaryButtonText: "Cancel",
					onSecondaryAction: E,
					onClose: E
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
			var r = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
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
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const p = o.a.wrapped(l.a, "CloseIcon", u.a),
				x = o.a.section("ModalBody", u.a),
				y = o.a.section("ModalPostPreview", u.a),
				f = o.a.p("ModalText", u.a),
				h = o.a.div("ModalSmallText", u.a),
				C = o.a.div("ModalDescriptionText", u.a),
				b = o.a.div("ModalMetaText", u.a),
				g = o.a.label("ModalFormItem", u.a),
				_ = o.a.wrapped(i.a, "ModalInput", u.a),
				M = o.a.label("ModalInputLabel", u.a),
				v = o.a.footer("ModalFooter", u.a),
				T = o.a.header("ModalHeader", u.a),
				w = o.a.div("ModalTitle", u.a),
				E = o.a.div("ModalAnnotation", u.a),
				j = o.a.div("ModalMain", u.a),
				P = o.a.textarea("TextArea", u.a),
				O = o.a.wrapped(d.l, "WarningButton", u.a),
				B = o.a.wrapped(d.l, "PrimaryButton", u.a),
				S = o.a.wrapped(d.o, "CancelButton", u.a),
				L = o.a.wrapped(d.r, "RemoveButton", u.a),
				k = e => {
					let {
						className: t,
						...n
					} = e;
					return s.a.createElement(d.t, m({
						kind: d.b.Button,
						priority: d.c.Primary,
						className: Object(r.a)(u.a.ConfirmButton, t)
					}, n))
				}
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
			class h extends o.a.PureComponent {
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
					return o.a.createElement(s.e, null, o.a.createElement(s.i, null, o.a.createElement(u.a, null, o.a.createElement(s.q, null, this.props.titleText), o.a.createElement(c.a, {
						onClick: this.props.onClose
					}, o.a.createElement(s.b, null)))), o.a.createElement(s.l, null, o.a.createElement(f, null, this.props.bodyText)), o.a.createElement(s.g, null, o.a.createElement(s.a, {
						onClick: this.props.onSecondaryAction
					}, t ? o.a.createElement(l.a, {
						sizePx: 16
					}) : this.props.secondaryButtonText), o.a.createElement(y, {
						onClick: this.props.onPrimaryAction
					}, e ? o.a.createElement(l.a, {
						sizePx: 16
					}) : this.props.primaryButtonText)))
				}
			}
			t.a = Object(a.a)(h)
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = e => {
						let {
							keyCode: t
						} = e;
						t === i.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...n
					} = this.props;
					return o.a.createElement("input", u({
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
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				s = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				i = n.n(d);
			t.a = Object(a.a)(e => o.a.createElement("div", {
				className: Object(s.a)(i.a.exapndLeftContainer, e.className)
			}, o.a.createElement("div", {
				className: i.a.left
			}, Array.isArray(e.children) && e.children[0]), o.a.createElement("div", {
				className: i.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-LayerEmbed.8441216a913308f4b6ec.js.map