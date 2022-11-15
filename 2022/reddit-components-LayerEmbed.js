// https://www.redditstatic.com/desktop2x/reddit-components-LayerEmbed.81ad23baca94863ed22c.js
// Retrieved at 11/14/2022, 7:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-LayerEmbed"], {
		"./src/reddit/components/LayerEmbed/index.m.less": function(e, t, r) {
			e.exports = {
				layerCanvas: "_3FsXXcIhVTVryfADMRfvfS"
			}
		},
		"./src/reddit/components/LayerEmbed/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "LayerEmbed", (function() {
				return x
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				s = r("./src/config.ts"),
				i = r("./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx"),
				c = r("./node_modules/query-string/index.js"),
				l = r("./src/higherOrderComponents/asModal/index.tsx");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const u = Object(l.a)(e => {
				let {
					backgroundUrl: t,
					baseUrl: r,
					width: n,
					height: a,
					frameRef: s,
					options: i
				} = e, l = r + "/static/layermaker/";
				if (i) {
					const e = Object(c.stringify)(i, {
						skipNull: !0
					});
					e.length && (l += `?${e}`)
				}
				return t && (l += `#${encodeURIComponent(t)}`), o.a.createElement("iframe", {
					ref: s,
					style: {
						width: n,
						height: a
					},
					src: l
				})
			});
			var m = e => {
					let {
						onClose: t,
						...r
					} = e;
					const [a, s] = Object(n.useState)(!1), c = () => s(!1);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(u, d({}, r, {
						withOverlay: !0,
						onOverlayClick: () => s(!0)
					})), a && o.a.createElement(i.a, {
						titleText: "Close Layer maker",
						bodyText: "Are you sure you want to discard all your changes?",
						primaryButtonText: "Back to drawing",
						onPrimaryAction: c,
						secondaryButtonText: "Yes, discard",
						onSecondaryAction: t,
						onClose: c
					}))
				},
				p = r("./src/reddit/components/LayerEmbed/index.m.less"),
				y = r.n(p);
			const x = e => {
				let {
					baseUrl: t,
					subredditId: r
				} = e;
				const c = Object(n.useRef)(null),
					l = Object(n.useRef)(null),
					d = Object(a.e)(e => e.user.session),
					u = Object(n.useCallback)(() => {
						d && [c, l].forEach(e => {
							var t, r;
							null === (r = null === (t = e.current) || void 0 === t ? void 0 : t.contentWindow) || void 0 === r || r.postMessage({
								action: "Layers.injectAuthHeaders",
								payload: {
									headers: {
										Authorization: `bearer ${d.accessToken}`
									},
									expires: new Date(d.expires).getTime()
								}
							}, s.a.layersUrl)
						})
					}, [d, c, l]),
					[p, x] = Object(n.useState)(!1),
					[h, E] = Object(n.useState)(),
					[b, f] = Object(n.useState)({}),
					[g, v] = Object(n.useState)([594, 628]),
					[C, O] = Object(n.useState)(""),
					[k, w] = Object(n.useState)(!1),
					P = () => w(!1),
					L = Object(n.useCallback)(e => {
						var t, r;
						c.current && e.data && e.data.layerEmbedHeight && (c.current.style.height = e.data.layerEmbedHeight + 8 + "px");
						const {
							action: n,
							payload: o
						} = e.data;
						if ("string" == typeof n && n.startsWith("layers.")) {
							if ("layers.openLayerMaker" === n) {
								const {
									backgroundUrl: e,
									...t
								} = o;
								return E(e), f(t), void x(!0)
							}
							if ("layers.closeLayerMaker" === n) return x(!1);
							if ("layers.resizeLayerMaker" !== n) {
								if ("layers.refreshAuth" !== n) return "layers.reportLayer" === n ? (O(o.postUrl), void w(!0)) : void(null === (r = null === (t = c.current) || void 0 === t ? void 0 : t.contentWindow) || void 0 === r || r.postMessage(e.data, "*"));
								u()
							} else {
								const {
									width: e,
									height: t
								} = o;
								v([e, t])
							}
						}
					}, [c, u, x, E, v]);
				Object(n.useEffect)(() => (window.addEventListener("message", L), () => window.removeEventListener("message", L)), [L]), Object(n.useEffect)(u, [u]);
				const [A, j] = g, T = t + `/static/client/?platform=desktop&subreddit=${r}`;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("iframe", {
					id: "layersEmbed",
					ref: c,
					className: y.a.layerCanvas,
					src: T,
					"data-testid": "layers-embed"
				}), p && o.a.createElement(m, {
					frameRef: l,
					backgroundUrl: h,
					baseUrl: t,
					onClose: () => {
						var e, t;
						x(!1), null === (t = null === (e = c.current) || void 0 === e ? void 0 : e.contentWindow) || void 0 === t || t.postMessage({
							action: "layers.closeLayerMaker"
						}, "*")
					},
					width: A,
					height: j,
					options: b
				}), k && o.a.createElement(i.a, {
					withOverlay: !0,
					onOverlayClick: P,
					titleText: "Report layer",
					bodyText: "Please use the Report menu on the Post",
					primaryButtonText: "Go to post",
					onPrimaryAction: () => {
						window.open(C), w(!1)
					},
					secondaryButtonText: "Cancel",
					onSecondaryAction: P,
					onClose: P
				}))
			};
			t.default = x
		},
		"./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less": function(e, t, r) {
			e.exports = {
				PrimaryButton: "_35XIX8S5eAkigMxHxx98TS",
				primaryButton: "_35XIX8S5eAkigMxHxx98TS",
				ModalText: "_1ShPAP1uGnX3ZkiyNiigAA",
				modalText: "_1ShPAP1uGnX3ZkiyNiigAA"
			}
		},
		"./src/reddit/components/PostCreationForm/Prompt/PromptModal.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./src/higherOrderComponents/asModal/index.tsx"),
				s = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = r("./src/reddit/constants/keycodes.ts"),
				c = r("./src/reddit/controls/Button/index.tsx"),
				l = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				d = r("./src/reddit/controls/TextButton/index.tsx"),
				u = r("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				m = r("./src/reddit/components/PostCreationForm/Prompt/PromptModal.m.less"),
				p = r.n(m),
				y = r("./src/lib/lessComponent.tsx");
			const x = y.a.wrapped(c.l, "PrimaryButton", p.a),
				h = y.a.wrapped(s.p, "ModalText", p.a);
			class E extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						e.keyCode === i.a.Escape && this.props.onClose()
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
					return o.a.createElement(s.e, null, o.a.createElement(s.i, null, o.a.createElement(u.a, null, o.a.createElement(s.q, null, this.props.titleText), o.a.createElement(d.a, {
						onClick: this.props.onClose
					}, o.a.createElement(s.b, null)))), o.a.createElement(s.l, null, o.a.createElement(h, null, this.props.bodyText)), o.a.createElement(s.g, null, o.a.createElement(s.a, {
						onClick: this.props.onSecondaryAction
					}, t ? o.a.createElement(l.a, {
						sizePx: 16
					}) : this.props.secondaryButtonText), o.a.createElement(x, {
						onClick: this.props.onPrimaryAction
					}, e ? o.a.createElement(l.a, {
						sizePx: 16
					}) : this.props.primaryButtonText)))
				}
			}
			t.a = Object(a.a)(E)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-LayerEmbed.81ad23baca94863ed22c.js.map