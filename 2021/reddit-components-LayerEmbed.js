// https://www.redditstatic.com/desktop2x/reddit-components-LayerEmbed.da97b90421bf496812b7.js
// Retrieved at 11/4/2021, 10:30:05 AM by Reddit Dataminer v1.0.0
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
			const u = Object(l.a)(({
				backgroundUrl: e,
				baseUrl: t,
				width: r,
				height: n,
				frameRef: a,
				options: s
			}) => {
				let i = t + "/static/layermaker/";
				if (s) {
					const e = Object(c.stringify)(s, {
						skipNull: !0
					});
					e.length && (i += `?${e}`)
				}
				return e && (i += `#${encodeURIComponent(e)}`), o.a.createElement("iframe", {
					ref: a,
					style: {
						width: r,
						height: n
					},
					src: i
				})
			});
			var m = ({
					onClose: e,
					...t
				}) => {
					const [r, a] = Object(n.useState)(!1), s = () => a(!1);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(u, d({}, t, {
						withOverlay: !0,
						onOverlayClick: () => a(!0)
					})), r && o.a.createElement(i.a, {
						titleText: "Close Layer maker",
						bodyText: "Are you sure you want to discard all your changes?",
						primaryButtonText: "Back to drawing",
						onPrimaryAction: s,
						secondaryButtonText: "Yes, discard",
						onSecondaryAction: e,
						onClose: s
					}))
				},
				p = r("./src/reddit/components/LayerEmbed/index.m.less"),
				y = r.n(p);
			const x = ({
				baseUrl: e,
				subredditId: t
			}) => {
				const r = Object(n.useRef)(null),
					c = Object(n.useRef)(null),
					l = Object(a.e)(e => e.user.session),
					d = Object(n.useCallback)(() => {
						l && [r, c].forEach(e => {
							var t, r;
							null === (r = null === (t = e.current) || void 0 === t ? void 0 : t.contentWindow) || void 0 === r || r.postMessage({
								action: "Layers.injectAuthHeaders",
								payload: {
									headers: {
										Authorization: `bearer ${l.accessToken}`
									},
									expires: new Date(l.expires).getTime()
								}
							}, s.a.layersUrl)
						})
					}, [l, r, c]),
					[u, p] = Object(n.useState)(!1),
					[x, h] = Object(n.useState)(),
					[E, b] = Object(n.useState)({}),
					[f, g] = Object(n.useState)([594, 628]),
					[v, C] = Object(n.useState)(""),
					[O, k] = Object(n.useState)(!1),
					w = () => k(!1),
					P = Object(n.useCallback)(e => {
						var t, n;
						r.current && e.data && e.data.layerEmbedHeight && (r.current.style.height = e.data.layerEmbedHeight + 8 + "px");
						const {
							action: o,
							payload: a
						} = e.data;
						if ("string" == typeof o && o.startsWith("layers.")) {
							if ("layers.openLayerMaker" === o) {
								const {
									backgroundUrl: e,
									...t
								} = a;
								return h(e), b(t), void p(!0)
							}
							if ("layers.closeLayerMaker" === o) return p(!1);
							if ("layers.resizeLayerMaker" !== o) {
								if ("layers.refreshAuth" !== o) return "layers.reportLayer" === o ? (C(a.postUrl), void k(!0)) : void(null === (n = null === (t = r.current) || void 0 === t ? void 0 : t.contentWindow) || void 0 === n || n.postMessage(e.data, "*"));
								d()
							} else {
								const {
									width: e,
									height: t
								} = a;
								g([e, t])
							}
						}
					}, [r, d, p, h, g]);
				Object(n.useEffect)(() => (window.addEventListener("message", P), () => window.removeEventListener("message", P)), [P]), Object(n.useEffect)(d, [d]);
				const [L, A] = f, j = e + `/static/client/?platform=desktop&subreddit=${t}`;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("iframe", {
					id: "layersEmbed",
					ref: r,
					className: y.a.layerCanvas,
					src: j,
					"data-testid": "layers-embed"
				}), u && o.a.createElement(m, {
					frameRef: c,
					backgroundUrl: x,
					baseUrl: e,
					onClose: () => {
						var e, t;
						p(!1), null === (t = null === (e = r.current) || void 0 === e ? void 0 : e.contentWindow) || void 0 === t || t.postMessage({
							action: "layers.closeLayerMaker"
						}, "*")
					},
					width: L,
					height: A,
					options: E
				}), O && o.a.createElement(i.a, {
					withOverlay: !0,
					onOverlayClick: w,
					titleText: "Report layer",
					bodyText: "Please use the Report menu on the Post",
					primaryButtonText: "Go to post",
					onPrimaryAction: () => {
						window.open(v), k(!1)
					},
					secondaryButtonText: "Cancel",
					onSecondaryAction: w,
					onClose: w
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-LayerEmbed.da97b90421bf496812b7.js.map