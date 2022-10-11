// https://www.redditstatic.com/desktop2x/PowerupsEmotesTooltip.4c5a8fc68b2d77607849.js
// Retrieved at 10/11/2022, 9:50:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PowerupsEmotesTooltip"], {
		"./src/reddit/actions/economics/powerups/helpers.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return s
			}));
			const s = e => (null == e ? void 0 : e.map(e => e.message).join(", ")) || ""
		},
		"./src/reddit/actions/economics/powerups/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return b
			})), o.d(t, "a", (function() {
				return x
			}));
			var s = o("./node_modules/uuid/dist/esm-browser/v4.js"),
				i = o("./src/lib/makeActionCreator/index.ts"),
				n = o("./src/lib/sentry/index.ts"),
				a = o("./src/lib/uploadToS3/index.ts"),
				r = o("./src/reddit/endpoints/gold/powerups/index.ts"),
				d = o("./src/reddit/helpers/media/index.ts"),
				l = o("./src/reddit/selectors/user.ts"),
				c = o("./src/reddit/actions/economics/powerups/constants.ts"),
				m = o("./src/reddit/actions/economics/powerups/helpers.ts");
			const u = Object(i.a)(c.b),
				p = Object(i.a)(c.c),
				b = e => {
					let {
						subredditId: t,
						file: o
					} = e;
					return async (e, i) => {
						var a;
						try {
							const n = i(),
								r = null === (a = Object(l.k)(n)) || void 0 === a ? void 0 : a.id;
							if (!r) throw new Error("Failed to get current user during emoji upload");
							const m = await Object(d.h)(o);
							if (!m) throw new Error("Cannot determine file mimeType");
							const {
								file: u,
								width: p,
								height: b
							} = await Object(d.p)(o, c.a), x = await e(h({
								subredditId: t,
								mimeType: m
							}, {
								userId: r
							})), f = await j({
								file: u,
								s3UploadLease: x
							}, {
								subredditId: t,
								userId: r
							});
							return await e(E({
								subredditId: t,
								mimeType: m,
								url: f,
								x: p,
								y: b,
								nonce: Object(s.a)()
							}))
						} catch (r) {
							throw n.c.captureException(r), r
						}
					}
				},
				h = (e, t) => async (o, s, i) => {
					let {
						gqlContext: n
					} = i;
					const a = await Object(r.c)(n(), {
						input: e
					});
					if (a.error || !a.ok) throw new Error(`Failed to get emoji upload lease. subredditId: ${e.subredditId}; userId: ${t.userId}`);
					const {
						ok: d,
						errors: l,
						s3UploadLease: c
					} = a.body.data.generateCustomEmojiUploadLease;
					if (!d || l) throw new Error(`Failed to get emoji upload lease: ${Object(m.a)(l)}. subredditId: ${e.subredditId}; userId: ${t.userId}`);
					return c
				}, E = e => async (t, o, s) => {
					let {
						gqlContext: i
					} = s;
					const n = await Object(r.a)(i(), {
						input: e
					});
					if (n.error || !n.ok) throw new Error("Failed to create custom emoji");
					const {
						ok: a,
						errors: l,
						emoji: c
					} = n.body.data.createCustomEmoji;
					if (!a || l) throw new Error(`Failed to create custom emoji: ${Object(m.a)(l)}`);
					const p = c.emojiIcon.url;
					await Object(d.o)(p);
					const {
						subredditId: b
					} = e;
					return t(u({
						subredditId: b,
						emoji: c
					})), c
				}, j = async (e, t) => {
					let {
						file: o,
						s3UploadLease: s
					} = e, {
						subredditId: i,
						userId: n
					} = t;
					const r = await Object(a.a)(o, s);
					if (!r.ok) throw new Error(`Failed to upload custom emoji to S3. subredditId: ${i}; userId: ${n}`);
					const d = r.body.PostResponse;
					return `https://${d.Bucket}.s3.amazonaws.com/${d.Key}`
				}, x = e => {
					let {
						emojiId: t,
						subredditId: o
					} = e;
					return async (e, s, i) => {
						let {
							gqlContext: a
						} = i;
						const d = await Object(r.b)(a(), {
							input: {
								id: t
							}
						});
						if (d.error || !d.ok) {
							const e = new Error("Failed to delete custom emoji");
							throw n.c.captureException(e), e
						}
						const {
							ok: l,
							errors: c
						} = d.body.data.deleteCustomEmoji;
						if (!l || c) {
							const e = new Error(`Failed to delete custom emoji: ${Object(m.a)(c)}`);
							throw n.c.captureException(e), e
						}
						return e(p({
							subredditId: o,
							emojiId: t
						})), l
					}
				}
		},
		"./src/reddit/components/RichTextEditor/emotes/BaseTooltip.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				i = o.n(s),
				n = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/components/RichTextEditor/Tooltip/index.tsx"),
				r = o("./src/reddit/components/RichTextEditor/Tooltip/getSelectionClientRect.ts"),
				d = o("./src/reddit/icons/svgs/Close/index.tsx"),
				l = o("./src/reddit/components/RichTextEditor/emotes/tooltipHeader.m.less"),
				c = o.n(l);
			const m = e => {
				let {
					title: t,
					onClickClose: o
				} = e;
				return i.a.createElement("div", {
					className: c.a.header
				}, t, i.a.createElement("div", {
					className: c.a.spacer
				}), i.a.createElement(d.a, {
					className: c.a.closeIcon,
					onClick: o
				}))
			};
			var u = o("./src/reddit/components/RichTextEditor/emotes/baseTooltip.m.less"),
				p = o.n(u);
			class b extends i.a.Component {
				constructor() {
					super(...arguments), this.updateTooltipPosition = null, this.handleWindowClick = e => {
						this.props.isVisible && this.props.setIsVisible(!1)
					}, this.closeTooltip = () => {
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
					}, this.onTooltipBodyClick = e => {
						e.stopPropagation()
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
					this.props.onSetApi && this.props.onSetApi(null), window.removeEventListener("click", this.handleWindowClick)
				}
				componentDidUpdate() {
					this.props.isVisible ? (this.updatePosition(), window.addEventListener("click", this.handleWindowClick)) : window.removeEventListener("click", this.handleWindowClick)
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
					return i.a.createElement(a.b, {
						className: this.props.className,
						onSetPositionUpdater: e => this.updateTooltipPosition = e,
						trianglePlacement: a.a.Below
					}, this.props.isVisible && i.a.createElement("div", {
						className: Object(n.a)(p.a.tooltip, this.props.bodyClassName),
						onClick: this.onTooltipBodyClick
					}, i.a.createElement(m, {
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
				return m
			}));
			var s, i = o("./node_modules/react/index.js"),
				n = o.n(i),
				a = o("./src/lib/classNames/index.ts"),
				r = o("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = o("./src/reddit/components/RichTextEditor/emotes/emoteButton.m.less"),
				l = o.n(d);
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(s || (s = {}));
			const c = 750,
				m = e => {
					let {
						className: t,
						containerClassName: o,
						imageClassName: d,
						disabled: m,
						id: u,
						imagePath: p,
						onClick: b,
						onKeyDown: h,
						title: E,
						onClickDelete: j,
						mouseEnterBufferTime: x = c
					} = e;
					const f = Object(i.useRef)(s.Outside),
						[w, k] = Object(i.useState)(!1);
					return n.a.createElement("div", {
						className: Object(a.a)(l.a.container, o),
						onMouseEnter: j ? () => {
							f.current = s.Inside, setTimeout(() => {
								f.current === s.Inside && k(!0)
							}, x)
						} : void 0,
						onMouseLeave: j ? () => {
							f.current = s.Outside, k(!1)
						} : void 0
					}, w && n.a.createElement("button", {
						className: l.a.deleteButton,
						onClick: j
					}, n.a.createElement(r.b, {
						className: l.a.deleteIcon
					})), n.a.createElement("button", {
						className: Object(a.a)(l.a.emoteButton, t),
						disabled: m,
						id: u,
						title: E,
						onClick: b,
						onKeyDown: h,
						tabIndex: 1
					}, n.a.createElement("div", {
						className: Object(a.a)(l.a.emoteImage, d),
						style: {
							backgroundImage: `url(${p})`
						}
					})))
				}
		},
		"./src/reddit/components/RichTextEditor/emotes/Powerups/DeleteEmojiModal.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return l
			}));
			var s = o("./node_modules/react/index.js"),
				i = o.n(s),
				n = o("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				a = o("./src/reddit/components/RichTextEditor/emotes/Powerups/emotesSection.m.less"),
				r = o.n(a);
			const {
				fbt: d
			} = o("./node_modules/fbt/lib/FbtPublic.js"), l = e => {
				let {
					emojiUrl: t,
					onConfirm: o,
					onCancel: s,
					onClose: a
				} = e;
				return i.a.createElement(n.a, {
					onConfirm: o,
					onCancel: s,
					onClose: a,
					headerText: d._("Delete emoji", null, {
						hk: "27GEDb"
					}),
					modalText: i.a.createElement("p", {
						className: r.a.deleteModalContainer
					}, i.a.createElement("img", {
						className: r.a.deleteModalImage,
						src: t
					}), d._("Are you sure you want to delete this emoji?", null, {
						hk: "1bmNdu"
					})),
					actionText: d._("Delete", null, {
						hk: "4lt26q"
					}),
					cancelActionText: d._("Go back", null, {
						hk: "3zzMov"
					}),
					withOverlay: !0
				})
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/Powerups/Tooltip.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			var s = o("./node_modules/react/index.js"),
				i = o.n(s),
				n = o("./node_modules/react-redux/es/index.js"),
				a = o("./src/reddit/helpers/trackers/powerups.ts"),
				r = o("./src/reddit/hooks/useTracking.ts"),
				d = o("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				l = o("./src/reddit/selectors/experiments/econ/index.ts"),
				c = o("./src/reddit/components/RichTextEditor/emotes/BaseTooltip.tsx"),
				m = o("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				u = o("./node_modules/fbt/lib/FbtPublic.js"),
				p = o("./src/lib/classNames/index.ts"),
				b = o("./src/reddit/actions/economics/powerups/index.ts"),
				h = o("./src/reddit/actions/toaster.ts"),
				E = o("./src/reddit/controls/LoadingIcon/index.tsx"),
				j = o("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				x = o("./src/reddit/models/Toast/index.ts"),
				f = o("./src/reddit/selectors/gold/powerups/index.ts"),
				w = o("./src/reddit/components/RichTextEditor/emotes/EmoteButton.tsx"),
				k = o("./src/reddit/components/RichTextEditor/emotes/Powerups/DeleteEmojiModal.tsx"),
				g = o("./src/reddit/components/RichTextEditor/emotes/Powerups/useEmojiUpload.ts"),
				C = o("./src/reddit/components/RichTextEditor/emotes/Powerups/emotesSection.m.less"),
				T = o.n(C);
			const _ = e => {
				let {
					onEmoteClicked: t,
					subredditId: o,
					subredditName: d,
					userCanUseEmojis: l
				} = e;
				const c = Object(n.d)(),
					m = Object(r.a)(),
					[C, _] = Object(s.useState)(null),
					I = () => _(null),
					[O, v] = Object(s.useState)(!1),
					y = Object(n.e)(e => Object(f.q)(e, {
						subredditId: o
					})),
					N = Object(n.e)(e => Object(f.h)(e, {
						subredditId: o
					})),
					P = Object(n.e)(e => Object(f.i)(e, {
						subredditId: o
					})),
					{
						uploadInput: R,
						numUploading: B,
						maxEmojisUploaded: L,
						onFileChange: U,
						onClickUpload: M
					} = Object(g.a)(o, N, e => {
						c(Object(h.f)({
							duration: 5e3,
							kind: x.b.Error,
							text: u.fbt._({
								"*": "You can only add {number} more custom emojis.",
								_1: "You can only add 1 more custom emoji."
							}, [u.fbt._plural(e, "number")], {
								hk: "2m6dmc"
							})
						}))
					}, e => {
						m(Object(a.a)(e, "powerups"))
					}, e => {
						m(Object(a.l)(e, "powerups")), c(Object(h.f)({
							duration: 5e3,
							kind: x.b.SuccessMod,
							text: u.fbt._({
								"*": "Added {number} custom emojis",
								_1: "Added 1 custom emoji"
							}, [u.fbt._plural(e, "number")], {
								hk: "gf4gL"
							})
						}))
					}, e => {
						c(Object(h.f)({
							duration: 5e3,
							kind: x.b.Error,
							text: u.fbt._({
								"*": "Failed to upload {number} custom emojis",
								_1: "Failed to upload 1 custom emoji"
							}, [u.fbt._plural(e, "number")], {
								hk: "4bKuqU"
							})
						}))
					}),
					A = L,
					D = y ? u.fbt._("Add up to 20 emojis", null, {
						hk: "4kR3Q8"
					}) : u.fbt._("Custom emojis", null, {
						hk: "3K8KMy"
					}),
					S = u.fbt._("Images under 128kb with a transparent background work the best.", null, {
						hk: "c6yXl"
					});
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", null, (y || N.length > 0) && i.a.createElement("article", null, i.a.createElement("header", {
					className: T.a.emotePackTitle
				}, i.a.createElement("span", null, D)), i.a.createElement("header", {
					className: T.a.emotePackSubtitle
				}, y && S), i.a.createElement("div", {
					className: Object(p.a)(T.a.emotes, {
						[T.a.disabled]: !l
					})
				}, y && i.a.createElement(i.a.Fragment, null, i.a.createElement("input", {
					ref: R,
					className: T.a.uploadInput,
					onChange: U,
					type: "file",
					accept: "image/png,image/jpeg",
					multiple: !0
				}), B ? i.a.createElement("div", {
					className: T.a.loadingContainer
				}, i.a.createElement(E.a, {
					sizePx: 12,
					center: !0
				})) : i.a.createElement("button", {
					className: Object(p.a)(T.a.emoteButton, T.a.addButton, {
						[T.a.addButtonDisabled]: A
					}),
					onClick: M,
					title: A ? u.fbt._("You've hit the maximum of 20 emojis", null, {
						hk: "3Qz2UG"
					}) : u.fbt._("Add Custom Emoji", null, {
						hk: "M580t"
					}),
					disabled: A
				}, i.a.createElement(j.a, {
					className: T.a.addIcon
				}))), N.map(e => i.a.createElement(w.a, {
					key: e.id,
					className: T.a.emoteButton,
					imageClassName: T.a.customEmoteImage,
					imagePath: e.emoji.path,
					onClick: () => t(e),
					onClickDelete: y ? () => _(e) : void 0
				})), [...Array(B)].map((e, t) => i.a.createElement("div", {
					key: t,
					className: Object(p.a)(T.a.emoteButton, T.a.placeholderEmoteButton)
				})))), i.a.createElement("article", {
					className: T.a.freeEmotePack
				}, i.a.createElement("header", {
					className: T.a.emotePackTitle
				}, u.fbt._("Reddit emojis", null, {
					hk: "2k2TMN"
				})), i.a.createElement("div", {
					className: Object(p.a)(T.a.emotes, {
						[T.a.disabled]: !l
					})
				}, P.map(e => i.a.createElement(w.a, {
					key: e.id,
					className: T.a.emoteButton,
					imagePath: e.emoji.path,
					title: e.id,
					onClick: () => t(e),
					disabled: !l
				}))))), C && i.a.createElement(k.a, {
					emojiUrl: C.emoji.path,
					onCancel: I,
					onClose: I,
					onConfirm: async () => {
						if (C && !O) try {
							v(!0), await c(Object(b.a)({
								subredditId: o,
								emojiId: C.id
							})), I(), m(Object(a.b)(1, "powerups")), c(Object(h.f)({
								duration: 5e3,
								kind: x.b.SuccessMod,
								text: u.fbt._("Deleted custom emoji", null, {
									hk: "Y41sq"
								})
							}))
						} catch (e) {
							c(Object(h.f)({
								duration: 5e3,
								kind: x.b.Error,
								text: u.fbt._("Failed to delete custom emoji", null, {
									hk: "ngElG"
								})
							}))
						} finally {
							v(!1)
						}
					}
				}))
			};
			var I = o("./src/reddit/components/RichTextEditor/emotes/Powerups/tooltip.m.less"),
				O = o.n(I);
			const {
				fbt: v
			} = o("./node_modules/fbt/lib/FbtPublic.js");
			t.default = e => {
				let {
					editorState: t,
					onChange: o,
					onSetApi: u,
					subreddit: p,
					userCanUseEmojis: b
				} = e;
				const h = Object(r.a)(),
					[E, j] = Object(s.useState)(!1),
					x = Object(n.e)(l.f);
				Object(s.useEffect)(() => {
					E && h(Object(a.i)())
				}, [E, h]);
				return p.id ? i.a.createElement(c.a, {
					className: O.a.toolbarTooltip,
					bodyClassName: O.a.tooltipBody,
					isVisible: E,
					setIsVisible: j,
					onSetApi: u,
					title: i.a.createElement(() => x ? v._("r/{subredditName} emojis", [v._param("subredditName", p.name)], {
						hk: "10hCgO"
					}) : i.a.createElement(i.a.Fragment, null, i.a.createElement(d.a, null), b ? v._("Unlocked with Powerups", null, {
						hk: "4am2RN"
					}) : v._("Unlock with Powerups", null, {
						hk: "Dbu9T"
					})), null)
				}, i.a.createElement("div", {
					className: O.a.body
				}, i.a.createElement(_, {
					subredditId: p.id,
					subredditName: p.name,
					onEmoteClicked: e => {
						const s = Object(m.g)(e, t);
						o(s), j(!1)
					},
					userCanUseEmojis: b
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
				placeholderEmoteButton: "_1xLXujnXEDJIfZl94qCnb6",
				customEmoteImage: "_3yyGg_Mez5tP41OCc9Nne8",
				emotePackTitle: "_2ukOHQG9KkBde1ztDLudOP",
				newIcon: "_3_QvdlHkxRkqBb9ZNRQZXx",
				emotePackSubtitle: "_1-OnXZrmw20X79pBvJWaEy",
				emotes: "DNWbRyf3z71g0nqfrzQ4T",
				freeEmotePack: "_13ylKQWUAkdhTJRIuHyJfq",
				disabled: "Ejq92_2ovDkhH3FjoerXW",
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
		"./src/reddit/components/RichTextEditor/emotes/Powerups/useEmojiUpload.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return a
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = o("./node_modules/react/index.js"),
				i = o("./node_modules/react-redux/es/index.js"),
				n = o("./src/reddit/actions/economics/powerups/index.ts");
			const a = (e, t, o, a, r, d) => {
				const l = Object(i.d)(),
					c = Object(s.useRef)(null),
					[m, u] = Object(s.useState)(0),
					p = async function(t) {
						let o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
							s = arguments.length > 2 ? arguments[2] : void 0;
						try {
							return await l(Object(n.b)({
								subredditId: e,
								file: t
							})), s(), {
								success: !0
							}
						} catch (i) {
							return o ? p(t, !1, s) : (s(), {
								success: !1,
								error: i.message
							})
						}
					}, b = () => u(e => e - 1);
				return {
					maxEmojisUploaded: t.length >= 20,
					maxEmojisUploading: t.length + m >= 20,
					onFileChange: async e => {
						const s = e.currentTarget.files;
						if (!(null == s ? void 0 : s.length)) return;
						if (s.length + t.length > 20) {
							const e = 20 - t.length;
							return null == o || o(e), void(c.current && (c.current.value = ""))
						}
						u(s.length), null == a || a(s.length);
						const i = await Promise.all([...s].map(e => p(e, !0, b))),
							n = i.reduce((e, t) => e + (t.success ? 1 : 0), 0);
						n > 0 && (null == r || r(n));
						const l = i.length - n;
						l > 0 && (null == d || d(l)), c.current && (c.current.value = ""), u(0)
					},
					numUploading: m,
					onClickUpload: () => {
						var e;
						null === (e = c.current) || void 0 === e || e.click()
					},
					uploadInput: c
				}
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
				return n
			}));
			var s = o("./node_modules/react/index.js"),
				i = o.n(s);

			function n(e) {
				return i.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, i.a.createElement("rect", {
					fill: "transparent",
					height: "18",
					rx: "4.5",
					strokeDasharray: "2 2",
					strokeLinejoin: "round",
					strokeWidth: "1",
					width: "18",
					x: "1",
					y: "1"
				}), i.a.createElement("path", {
					clipRule: "evenodd",
					d: "M13 9H11V7C11 6.7235 10.7765 6.5 10.5 6.5H9.5C9.2235 6.5 9 6.7235 9 7V9H7C6.724 9 6.5 9.2235 6.5 9.5V10.5C6.5 10.7765 6.724 11 7 11H9V13C9 13.2765 9.2235 13.5 9.5 13.5H10.5C10.7765 13.5 11 13.2765 11 13V11H13C13.2765 11 13.5 10.7765 13.5 10.5V9.5C13.5 9.2235 13.2765 9 13 9Z",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				i = o.n(s);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id,
				"data-testid": "bolt-tier2"
			}, e.title && i.a.createElement("title", null, e.title), i.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), i.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), i.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), i.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), i.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PowerupsEmotesTooltip.4c5a8fc68b2d77607849.js.map