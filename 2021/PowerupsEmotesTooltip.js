// https://www.redditstatic.com/desktop2x/PowerupsEmotesTooltip.3e5ef6ae535258424ee2.js
// Retrieved at 5/6/2021, 1:10:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PowerupsEmotesTooltip"], {
		"./src/reddit/actions/economics/powerups/constants.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return s
			})), o.d(t, "b", (function() {
				return n
			})), o.d(t, "c", (function() {
				return i
			}));
			const s = 120,
				n = "ON_CREATE_CUSTOM_EMOJI_SUCCESS",
				i = "ON_DELETE_CUSTOM_EMOJI_SUCCESS"
		},
		"./src/reddit/components/Econ/Common/NewIcon/index.m.less": function(e, t, o) {
			e.exports = {
				new: "_2u3fkh0zbVoixCjyXrW0_e"
			}
		},
		"./src/reddit/components/Econ/Common/NewIcon/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return d
			}));
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				i = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/components/Econ/Common/NewIcon/index.m.less"),
				r = o.n(a);
			const {
				fbt: c
			} = o("./node_modules/fbt/lib/FbtPublic.js"), d = ({
				className: e
			}) => n.a.createElement("span", {
				className: Object(i.a)(r.a.new, e)
			}, c._("NEW", null, {
				hk: "2P5bsM"
			}))
		},
		"./src/reddit/components/RichTextEditor/emotes/BaseTooltip.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				i = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/components/RichTextEditor/Tooltip/index.tsx"),
				r = o("./src/reddit/components/RichTextEditor/Tooltip/getSelectionClientRect.ts"),
				c = o("./src/reddit/icons/svgs/Close/index.tsx"),
				d = o("./src/reddit/components/RichTextEditor/emotes/tooltipHeader.m.less"),
				l = o.n(d);
			const m = ({
				title: e,
				onClickClose: t
			}) => n.a.createElement("div", {
				className: l.a.header
			}, e, n.a.createElement("div", {
				className: l.a.spacer
			}), n.a.createElement(c.a, {
				className: l.a.closeIcon,
				onClick: t
			}));
			var u = o("./src/reddit/components/RichTextEditor/emotes/baseTooltip.m.less"),
				p = o.n(u);
			class b extends n.a.Component {
				constructor() {
					super(...arguments), this.updateTooltipPosition = null, this.closeTooltip = () => {
						this.props.setIsVisible(!1)
					}, this.toggleTooltip = e => {
						e.currentTarget instanceof HTMLElement && (this.emoteButtonEl = e.currentTarget), this.props.setIsVisible(!this.props.isVisible)
					}, this.handleEscapeKeyInEditor = () => {
						this.closeTooltip()
					}, this.handleTabInEditor = () => {
						const {
							isVisible: e,
							focusOnTooltip: t
						} = this.props;
						return !!e && (t && t(), !0)
					}, this.handleUpArrowInEditor = () => {
						const {
							isVisible: e,
							focusOnTooltip: t
						} = this.props;
						return !(!document.activeElement || !e) && (t && t(), !0)
					}
				}
				componentDidMount() {
					this.props.onSetApi && this.props.onSetApi({
						closeTooltip: this.closeTooltip,
						handleEscapeKeyInEditor: this.handleEscapeKeyInEditor,
						handleTabInEditor: this.handleTabInEditor,
						handleUpArrowInEditor: this.handleUpArrowInEditor,
						toggleTooltip: this.toggleTooltip
					})
				}
				componentWillUnmount() {
					this.props.onSetApi && this.props.onSetApi(null)
				}
				componentDidUpdate() {
					this.props.isVisible && this.updatePosition()
				}
				updatePosition() {
					if (!this.updateTooltipPosition || !this.props.isVisible) return;
					const e = this.props.isSearching ? Object(r.a)() : this.emoteButtonEl && this.emoteButtonEl.getBoundingClientRect();
					e && this.updateTooltipPosition({
						left: Math.round(e.left + e.width / 2),
						top: Math.round(e.top) + 3
					})
				}
				render() {
					return n.a.createElement(a.b, {
						className: this.props.className,
						onSetPositionUpdater: e => this.updateTooltipPosition = e,
						trianglePlacement: a.a.Below
					}, this.props.isVisible && n.a.createElement("div", {
						className: Object(i.a)(p.a.tooltip, this.props.bodyClassName)
					}, n.a.createElement(m, {
						title: this.props.title,
						onClickClose: this.closeTooltip
					}), this.props.children))
				}
			}
			t.a = b
		},
		"./src/reddit/components/RichTextEditor/emotes/EmoteButton.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return l
			}));
			var s, n = o("./node_modules/react/index.js"),
				i = o.n(n),
				a = o("./src/lib/classNames/index.ts"),
				r = o("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = o("./src/reddit/components/RichTextEditor/emotes/emoteButton.m.less"),
				d = o.n(c);
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(s || (s = {}));
			const l = ({
				className: e,
				imageClassName: t,
				disabled: o,
				id: c,
				imagePath: l,
				onClick: m,
				onKeyDown: u,
				title: p,
				onClickDelete: b
			}) => {
				const h = Object(n.useRef)(s.Outside),
					[E, j] = Object(n.useState)(!1);
				return i.a.createElement("div", {
					className: d.a.container,
					onMouseEnter: b ? () => {
						h.current = s.Inside, setTimeout(() => {
							h.current === s.Inside && j(!0)
						}, 750)
					} : void 0,
					onMouseLeave: b ? () => {
						h.current = s.Outside, j(!1)
					} : void 0
				}, E && i.a.createElement("button", {
					className: d.a.deleteButton,
					onClick: b
				}, i.a.createElement(r.b, {
					className: d.a.deleteIcon
				})), i.a.createElement("button", {
					className: Object(a.a)(d.a.emoteButton, e),
					disabled: o,
					id: c,
					title: p,
					onClick: m,
					onKeyDown: u,
					tabIndex: 1
				}, i.a.createElement("div", {
					className: Object(a.a)(d.a.emoteImage, t),
					style: {
						backgroundImage: `url(${l})`
					}
				})))
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/Powerups/Tooltip.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/react/index.js"),
				i = o.n(n),
				a = o("./src/reddit/helpers/trackers/powerups.ts"),
				r = o("./src/reddit/hooks/useTracking.ts"),
				c = o("./src/reddit/components/RichTextEditor/emotes/BaseTooltip.tsx"),
				d = o("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				l = (o("./node_modules/core-js/modules/web.dom.iterable.js"), o("./node_modules/react-redux/es/index.js")),
				m = o("./src/lib/classNames/index.ts"),
				u = o("./node_modules/uuid/v4.js"),
				p = o.n(u),
				b = o("./src/lib/makeActionCreator/index.ts"),
				h = o("./src/lib/sentry/index.ts"),
				E = o("./src/lib/uploadToS3/index.ts"),
				j = o("./src/reddit/endpoints/gold/powerups.ts"),
				x = o("./src/reddit/helpers/media/index.ts"),
				f = o("./src/reddit/actions/economics/powerups/constants.ts");
			const k = e => (null == e ? void 0 : e.map(e => e.message).join(", ")) || "",
				_ = Object(b.a)(f.b),
				g = Object(b.a)(f.c),
				w = e => async (t, o, {
					gqlContext: s
				}) => {
					const n = await Object(j.c)(s(), {
						input: e
					});
					if (n.error || !n.ok) throw new Error("Failed to get emoji upload lease");
					const {
						ok: i,
						errors: a,
						s3UploadLease: r
					} = n.body.data.generateCustomEmojiUploadLease;
					if (!i || a) throw new Error(`Failed to get emoji upload lease: ${k(a)}`);
					return r
				}, T = e => async (t, o, {
					gqlContext: s
				}) => {
					const n = await Object(j.a)(s(), {
						input: e
					});
					if (n.error || !n.ok) throw new Error("Failed to create custom emoji");
					const {
						ok: i,
						errors: a,
						emoji: r
					} = n.body.data.createCustomEmoji;
					if (!i || a) throw new Error(`Failed to create custom emoji: ${k(a)}`);
					const {
						subredditId: c
					} = e;
					return t(_({
						subredditId: c,
						emoji: r
					})), r
				}, O = async ({
					file: e,
					s3UploadLease: t
				}) => {
					const o = await Object(E.a)(e, t);
					if (!o.ok) throw new Error("Failed to upload custom emoji to S3");
					const s = o.body.PostResponse;
					return `https://${s.Bucket}.s3.amazonaws.com/${s.Key}`
				};
			var C = o("./src/reddit/actions/gold/powerups.ts"),
				I = o("./src/reddit/actions/toaster.ts"),
				y = o("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				N = o("./src/reddit/components/Econ/Common/NewIcon/index.tsx"),
				v = o("./src/reddit/controls/Button/index.tsx"),
				S = o("./src/reddit/controls/LoadingIcon/index.tsx"),
				R = o("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				B = o("./src/reddit/models/Toast/index.ts"),
				P = o("./src/reddit/selectors/gold/powerups.ts"),
				A = o("./src/reddit/components/RichTextEditor/emotes/EmoteButton.tsx"),
				D = o("./src/reddit/components/RichTextEditor/emotes/Powerups/emotesSection.m.less"),
				M = o.n(D);
			const L = ({
				onEmoteClicked: e,
				subredditId: t
			}) => {
				const o = Object(n.useRef)(null),
					c = Object(l.d)(),
					d = Object(r.a)(),
					[u, b] = Object(n.useState)(!1),
					[E, _] = Object(n.useState)(null),
					[D, L] = Object(n.useState)(!1),
					U = Object(l.e)(e => Object(P.s)(e, {
						subredditId: t
					})),
					V = Object(l.e)(e => Object(P.p)(e, {
						subredditId: t
					})),
					H = Object(l.e)(e => Object(P.h)(e, {
						subredditId: t
					})),
					F = Object(l.e)(e => Object(P.i)(e, {
						subredditId: t
					})),
					q = async (e, o = !1) => {
						try {
							return await c((({
								subredditId: e,
								file: t
							}) => async (o, s) => {
								try {
									const s = await Object(x.g)(t);
									if (!s) throw new Error("Cannot determine file mimeType");
									const {
										file: n,
										width: i,
										height: a
									} = await Object(x.m)(t, f.a), r = await o(w({
										subredditId: e,
										mimeType: s
									})), c = await O({
										file: n,
										s3UploadLease: r
									});
									return await o(T({
										subredditId: e,
										mimeType: s,
										url: c,
										x: i,
										y: a,
										nonce: p()()
									}))
								} catch (n) {
									throw h.c.captureException(n), n
								}
							})({
								subredditId: t,
								file: e
							})), {
								success: !0
							}
						} catch (s) {
							return o ? q(e, !1) : {
								success: !1,
								error: s.message
							}
						}
					}, z = V ? s.fbt._("Your community has been powered up with emojis.", null, {
						hk: "1S9hhd"
					}) : s.fbt._("Powerup this community to unlock emojis.", null, {
						hk: "17izsl"
					}), K = U ? s.fbt._("Images under 128kb with a transparent background work the best.", null, {
						hk: "c6yXl"
					}) : z, Y = H.length >= 20;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", null, (U || H.length > 0) && i.a.createElement("article", null, i.a.createElement("header", {
					className: M.a.emotePackTitle
				}, i.a.createElement("span", null, U ? s.fbt._("Add up to 20 emojis", null, {
					hk: "4kR3Q8"
				}) : s.fbt._("Custom emojis", null, {
					hk: "3K8KMy"
				})), i.a.createElement(N.a, {
					className: M.a.newIcon
				})), i.a.createElement("header", {
					className: M.a.emotePackSubtitle
				}, K), i.a.createElement("div", {
					className: Object(m.a)(M.a.emotes, {
						[M.a.disabled]: !V
					})
				}, U && i.a.createElement(i.a.Fragment, null, i.a.createElement("input", {
					ref: o,
					className: M.a.uploadInput,
					onChange: async e => {
						const t = e.currentTarget.files;
						if (!(null == t ? void 0 : t.length)) return;
						if (t.length + H.length > 20) {
							const e = 20 - H.length;
							return c(Object(I.f)({
								duration: 5e3,
								kind: B.b.Error,
								text: s.fbt._({
									"*": "You can only add {number} more custom emojis.",
									_1: "You can only add 1 more custom emoji."
								}, [s.fbt._plural(e, "number")], {
									hk: "2m6dmc"
								})
							})), void(o.current && (o.current.value = ""))
						}
						b(!0), d(Object(a.a)(t.length));
						const n = await Promise.all([...t].map(e => q(e, !0))),
							i = n.reduce((e, t) => e + (t.success ? 1 : 0), 0);
						i > 0 && (d(Object(a.n)(i)), c(Object(I.f)({
							duration: 5e3,
							kind: B.b.SuccessMod,
							text: s.fbt._({
								"*": "Added {number} custom emojis",
								_1: "Added 1 custom emoji"
							}, [s.fbt._plural(i, "number")], {
								hk: "gf4gL"
							})
						})));
						const r = n.length - i;
						r > 0 && c(Object(I.f)({
							duration: 5e3,
							kind: B.b.Error,
							text: s.fbt._({
								"*": "Failed to upload {number} custom emojis",
								_1: "Failed to upload 1 custom emoji"
							}, [s.fbt._plural(r, "number")], {
								hk: "4bKuqU"
							})
						})), o.current && (o.current.value = ""), b(!1)
					},
					type: "file",
					accept: "image/png,image/jpeg",
					multiple: !0
				}), u ? i.a.createElement("div", {
					className: M.a.loadingContainer
				}, i.a.createElement(S.a, {
					sizePx: 12,
					center: !0
				})) : i.a.createElement("button", {
					className: Object(m.a)(M.a.emoteButton, M.a.addButton, {
						[M.a.addButtonDisabled]: Y
					}),
					onClick: () => {
						var e;
						null === (e = o.current) || void 0 === e || e.click()
					},
					title: Y ? s.fbt._("You've hit the maximum of 20 emojis", null, {
						hk: "3Qz2UG"
					}) : s.fbt._("Add Custom Emoji", null, {
						hk: "M580t"
					}),
					disabled: Y
				}, i.a.createElement(R.a, {
					className: M.a.addIcon
				}))), H.map(t => i.a.createElement(A.a, {
					key: t.id,
					className: M.a.emoteButton,
					imageClassName: M.a.customEmoteImage,
					imagePath: t.emoji.path,
					onClick: () => e(t),
					onClickDelete: U ? () => _(t) : void 0
				})))), i.a.createElement("article", {
					className: M.a.freeEmotePack
				}, i.a.createElement("header", {
					className: M.a.emotePackTitle
				}, s.fbt._("Reddit emojis", null, {
					hk: "2k2TMN"
				})), i.a.createElement("div", {
					className: Object(m.a)(M.a.emotes, {
						[M.a.disabled]: !V
					})
				}, F.map(t => i.a.createElement(A.a, {
					key: t.id,
					className: M.a.emoteButton,
					imagePath: t.emoji.path,
					title: t.id,
					onClick: () => e(t),
					disabled: !V
				}))))), !V && i.a.createElement(v.q, {
					className: M.a.unlockButton,
					onClick: () => {
						d(Object(a.q)()), c(Object(C.c)("emote_picker"))
					},
					priority: v.b.Primary
				}, s.fbt._("Unlock Emojis", null, {
					hk: "44jXM7"
				})), E && i.a.createElement(y.a, {
					onConfirm: async () => {
						if (E && !D) try {
							L(!0), await c((({
								emojiId: e,
								subredditId: t
							}) => async (o, s, {
								gqlContext: n
							}) => {
								const i = await Object(j.b)(n(), {
									input: {
										id: e
									}
								});
								if (i.error || !i.ok) {
									const e = new Error("Failed to delete custom emoji");
									throw h.c.captureException(e), e
								}
								const {
									ok: a,
									errors: r
								} = i.body.data.deleteCustomEmoji;
								if (!a || r) {
									const e = new Error(`Failed to delete custom emoji: ${k(r)}`);
									throw h.c.captureException(e), e
								}
								return o(g({
									subredditId: t,
									emojiId: e
								})), a
							})({
								subredditId: t,
								emojiId: E.id
							})), _(null), d(Object(a.b)(1)), c(Object(I.f)({
								duration: 5e3,
								kind: B.b.SuccessMod,
								text: s.fbt._("Deleted custom emoji", null, {
									hk: "Y41sq"
								})
							}))
						} catch (e) {
							c(Object(I.f)({
								duration: 5e3,
								kind: B.b.Error,
								text: s.fbt._("Failed to delete custom emoji", null, {
									hk: "ngElG"
								})
							}))
						} finally {
							L(!1)
						}
					},
					onCancel: () => _(null),
					onClose: () => _(null),
					headerText: s.fbt._("Delete emoji", null, {
						hk: "27GEDb"
					}),
					modalText: i.a.createElement("div", {
						className: M.a.deleteModalContainer
					}, i.a.createElement("img", {
						className: M.a.deleteModalImage,
						src: E.emoji.path
					}), s.fbt._("Are you sure you want to delete this emoji?", null, {
						hk: "1bmNdu"
					})),
					actionText: s.fbt._("Delete", null, {
						hk: "2tA3qL"
					}),
					cancelActionText: s.fbt._("Go back", null, {
						hk: "3zzMov"
					}),
					withOverlay: !0
				}))
			};
			var U = o("./src/reddit/components/RichTextEditor/emotes/Powerups/tooltip.m.less"),
				V = o.n(U);
			t.default = ({
				editorState: e,
				onChange: t,
				onSetApi: o,
				subreddit: l
			}) => {
				const m = Object(r.a)(),
					[u, p] = Object(n.useState)(!1);
				Object(n.useEffect)(() => {
					u && m(Object(a.j)())
				}, [u, m]);
				return l.id ? i.a.createElement(c.a, {
					className: V.a.toolbarTooltip,
					bodyClassName: V.a.tooltipBody,
					isVisible: u,
					setIsVisible: p,
					onSetApi: o,
					title: s.fbt._("r/{communityName} Emojis", [s.fbt._param("communityName", l.name)], {
						hk: "3OrFxB"
					})
				}, i.a.createElement("div", {
					className: V.a.body
				}, i.a.createElement(L, {
					subredditId: l.id,
					onEmoteClicked: o => {
						const s = Object(d.g)(o, e);
						t(s), p(!1)
					}
				}))) : null
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/Powerups/emotesSection.m.less": function(e, t, o) {
			e.exports = {
				addButton: "_131SsHx6UfUQsBbPHh8m1D",
				addButtonDisabled: "eRYyo8WYr0Hti7IAGe_gO",
				addIcon: "R3xFUrQvsMx3gn2gqGv0w",
				uploadInput: "_183AY4WVSatH9Qe_MAXDE-",
				loadingContainer: "_2xoHnDYYs7peY_5Im4vQDn",
				emoteButton: "_2s68zj-4Pb6nTX2IUDzLkz",
				customEmoteImage: "_3yyGg_Mez5tP41OCc9Nne8",
				emotePackTitle: "_2ukOHQG9KkBde1ztDLudOP",
				newIcon: "_3_QvdlHkxRkqBb9ZNRQZXx",
				emotePackSubtitle: "_1-OnXZrmw20X79pBvJWaEy",
				emotes: "DNWbRyf3z71g0nqfrzQ4T",
				freeEmotePack: "_13ylKQWUAkdhTJRIuHyJfq",
				disabled: "Ejq92_2ovDkhH3FjoerXW",
				unlockButton: "_3EI1On_HJixL24yeuq2w62",
				deleteModalContainer: "_2JcZhkY3vXBVFEAMyuM8D5",
				deleteModalImage: "_1V2bCmzxzskT1fA3fY70lK"
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/Powerups/tooltip.m.less": function(e, t, o) {
			e.exports = {
				toolbarTooltip: "_1l8806duAP4T6f7-NQkUTp",
				tooltipBody: "_34smP-7wz5EAT210pLFcyd",
				body: "ddCL4db9_XoRoPj0SK6oK"
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/baseTooltip.m.less": function(e, t, o) {
			e.exports = {
				tooltip: "_2LFEVtexHPCOv-lxi8OsR8"
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/emoteButton.m.less": function(e, t, o) {
			e.exports = {
				container: "_1xDkiINVQUjf0tjZcbF3a7",
				emoteButton: "_2-SqXmcI6RcjKEbTfkrLVe",
				emoteImage: "_1WpEszyqkHofX36kiLrJ8x",
				deleteButton: "_2mgKNuqCKnjSfh2dBW7iqI",
				deleteIcon: "_1BJNzscR61JS-t7pR4p3Ik"
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/tooltipHeader.m.less": function(e, t, o) {
			e.exports = {
				header: "_3TevD19z6_EfVwVFoSJkRo",
				spacer: "_1eD-y2tjKEx_8fbVucvhxI",
				closeIcon: "_1FQVuhZLRBnHYRhiL7giYi"
			}
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return i
			}));
			var s = o("./node_modules/react/index.js"),
				n = o.n(s);

			function i(e) {
				return n.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("rect", {
					fill: "transparent",
					height: "18",
					rx: "4.5",
					strokeDasharray: "2 2",
					strokeLinejoin: "round",
					strokeWidth: "1",
					width: "18",
					x: "1",
					y: "1"
				}), n.a.createElement("path", {
					clipRule: "evenodd",
					d: "M13 9H11V7C11 6.7235 10.7765 6.5 10.5 6.5H9.5C9.2235 6.5 9 6.7235 9 7V9H7C6.724 9 6.5 9.2235 6.5 9.5V10.5C6.5 10.7765 6.724 11 7 11H9V13C9 13.2765 9.2235 13.5 9.5 13.5H10.5C10.7765 13.5 11 13.2765 11 13V11H13C13.2765 11 13.5 10.7765 13.5 10.5V9.5C13.5 9.2235 13.2765 9 13 9Z",
					fillRule: "evenodd"
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PowerupsEmotesTooltip.3e5ef6ae535258424ee2.js.map