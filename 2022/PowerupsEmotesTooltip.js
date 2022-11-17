// https://www.redditstatic.com/desktop2x/PowerupsEmotesTooltip.da0fb51be5f4ccf7e20b.js
// Retrieved at 11/17/2022, 12:10:07 PM by Reddit Dataminer v1.0.0
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
				return f
			}));
			var s = o("./node_modules/uuid/dist/esm-browser/v4.js"),
				n = o("./src/lib/makeActionCreator/index.ts"),
				i = o("./src/lib/sentry/index.ts"),
				r = o("./src/lib/uploadToS3/index.ts"),
				a = o("./src/reddit/endpoints/gold/powerups/index.ts"),
				d = o("./src/reddit/helpers/media/index.ts"),
				c = o("./src/reddit/selectors/user.ts"),
				l = o("./src/reddit/actions/economics/powerups/constants.ts"),
				u = o("./src/reddit/actions/economics/powerups/helpers.ts");
			const m = Object(n.a)(l.b),
				p = Object(n.a)(l.c),
				b = e => {
					let {
						subredditId: t,
						file: o
					} = e;
					return async (e, n) => {
						var r;
						try {
							const i = n(),
								a = null === (r = Object(c.l)(i)) || void 0 === r ? void 0 : r.id;
							if (!a) throw new Error("Failed to get current user during emoji upload");
							const u = await Object(d.h)(o);
							if (!u) throw new Error("Cannot determine file mimeType");
							const {
								file: m,
								width: p,
								height: b
							} = await Object(d.p)(o, l.a), f = await e(h({
								subredditId: t,
								mimeType: u
							}, {
								userId: a
							})), x = await j({
								file: m,
								s3UploadLease: f
							}, {
								subredditId: t,
								userId: a
							});
							return await e(E({
								subredditId: t,
								mimeType: u,
								url: x,
								x: p,
								y: b,
								nonce: Object(s.a)()
							}))
						} catch (a) {
							throw i.c.captureException(a), a
						}
					}
				},
				h = (e, t) => async (o, s, n) => {
					let {
						gqlContext: i
					} = n;
					const r = await Object(a.c)(i(), {
						input: e
					});
					if (r.error || !r.ok) throw new Error(`Failed to get emoji upload lease. subredditId: ${e.subredditId}; userId: ${t.userId}`);
					const {
						ok: d,
						errors: c,
						s3UploadLease: l
					} = r.body.data.generateCustomEmojiUploadLease;
					if (!d || c) throw new Error(`Failed to get emoji upload lease: ${Object(u.a)(c)}. subredditId: ${e.subredditId}; userId: ${t.userId}`);
					return l
				}, E = e => async (t, o, s) => {
					let {
						gqlContext: n
					} = s;
					const i = await Object(a.a)(n(), {
						input: e
					});
					if (i.error || !i.ok) throw new Error("Failed to create custom emoji");
					const {
						ok: r,
						errors: c,
						emoji: l
					} = i.body.data.createCustomEmoji;
					if (!r || c) throw new Error(`Failed to create custom emoji: ${Object(u.a)(c)}`);
					const p = l.emojiIcon.url;
					await Object(d.o)(p);
					const {
						subredditId: b
					} = e;
					return t(m({
						subredditId: b,
						emoji: l
					})), l
				}, j = async (e, t) => {
					let {
						file: o,
						s3UploadLease: s
					} = e, {
						subredditId: n,
						userId: i
					} = t;
					const a = await Object(r.a)(o, s);
					if (!a.ok) throw new Error(`Failed to upload custom emoji to S3. subredditId: ${n}; userId: ${i}`);
					const d = a.body.PostResponse;
					return `https://${d.Bucket}.s3.amazonaws.com/${d.Key}`
				}, f = e => {
					let {
						emojiId: t,
						subredditId: o
					} = e;
					return async (e, s, n) => {
						let {
							gqlContext: r
						} = n;
						const d = await Object(a.b)(r(), {
							input: {
								id: t
							}
						});
						if (d.error || !d.ok) {
							const e = new Error("Failed to delete custom emoji");
							throw i.c.captureException(e), e
						}
						const {
							ok: c,
							errors: l
						} = d.body.data.deleteCustomEmoji;
						if (!c || l) {
							const e = new Error(`Failed to delete custom emoji: ${Object(u.a)(l)}`);
							throw i.c.captureException(e), e
						}
						return e(p({
							subredditId: o,
							emojiId: t
						})), c
					}
				}
		},
		"./src/reddit/components/RichTextEditor/emotes/BaseTooltip.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				i = o("./src/lib/classNames/index.ts"),
				r = o("./src/reddit/components/RichTextEditor/Tooltip/index.tsx"),
				a = o("./src/reddit/components/RichTextEditor/Tooltip/getSelectionClientRect.ts"),
				d = o("./src/reddit/icons/svgs/Close/index.tsx"),
				c = o("./src/reddit/components/RichTextEditor/emotes/tooltipHeader.m.less"),
				l = o.n(c);
			const u = e => {
				let {
					title: t,
					onClickClose: o
				} = e;
				return n.a.createElement("div", {
					className: l.a.header
				}, t, n.a.createElement("div", {
					className: l.a.spacer
				}), n.a.createElement(d.a, {
					className: l.a.closeIcon,
					onClick: o
				}))
			};
			var m = o("./src/reddit/components/RichTextEditor/emotes/baseTooltip.m.less"),
				p = o.n(m);
			class b extends n.a.Component {
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
					const e = this.props.isSearching ? Object(a.a)() : this.emoteButtonEl && this.emoteButtonEl.getBoundingClientRect();
					e && this.updateTooltipPosition({
						left: Math.round(e.left + e.width / 2),
						top: Math.round(e.top) + 3
					})
				}
				render() {
					return n.a.createElement(r.b, {
						className: this.props.className,
						onSetPositionUpdater: e => this.updateTooltipPosition = e,
						trianglePlacement: r.a.Below
					}, this.props.isVisible && n.a.createElement("div", {
						className: Object(i.a)(p.a.tooltip, this.props.bodyClassName),
						onClick: this.onTooltipBodyClick
					}, n.a.createElement(u, {
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
				return u
			}));
			var s, n = o("./node_modules/react/index.js"),
				i = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = o("./src/reddit/components/RichTextEditor/emotes/emoteButton.m.less"),
				c = o.n(d);
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(s || (s = {}));
			const l = 750,
				u = e => {
					let {
						className: t,
						containerClassName: o,
						imageClassName: d,
						disabled: u,
						id: m,
						imagePath: p,
						onClick: b,
						onKeyDown: h,
						title: E,
						onClickDelete: j,
						mouseEnterBufferTime: f = l
					} = e;
					const x = Object(n.useRef)(s.Outside),
						[w, k] = Object(n.useState)(!1);
					return i.a.createElement("div", {
						className: Object(r.a)(c.a.container, o),
						onMouseEnter: j ? () => {
							x.current = s.Inside, setTimeout(() => {
								x.current === s.Inside && k(!0)
							}, f)
						} : void 0,
						onMouseLeave: j ? () => {
							x.current = s.Outside, k(!1)
						} : void 0
					}, w && i.a.createElement("button", {
						className: c.a.deleteButton,
						onClick: j
					}, i.a.createElement(a.b, {
						className: c.a.deleteIcon
					})), i.a.createElement("button", {
						className: Object(r.a)(c.a.emoteButton, t),
						disabled: u,
						id: m,
						title: E,
						onClick: b,
						onKeyDown: h,
						tabIndex: 1
					}, i.a.createElement("div", {
						className: Object(r.a)(c.a.emoteImage, d),
						style: {
							backgroundImage: `url(${p})`
						}
					})))
				}
		},
		"./src/reddit/components/RichTextEditor/emotes/Powerups/DeleteEmojiModal.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return c
			}));
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				i = o("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				r = o("./src/reddit/components/RichTextEditor/emotes/Powerups/emotesSection.m.less"),
				a = o.n(r);
			const {
				fbt: d
			} = o("./node_modules/fbt/lib/FbtPublic.js"), c = e => {
				let {
					emojiUrl: t,
					onConfirm: o,
					onCancel: s,
					onClose: r
				} = e;
				return n.a.createElement(i.a, {
					onConfirm: o,
					onCancel: s,
					onClose: r,
					headerText: d._("Delete emoji", null, {
						hk: "27GEDb"
					}),
					modalText: n.a.createElement("p", {
						className: a.a.deleteModalContainer
					}, n.a.createElement("img", {
						className: a.a.deleteModalImage,
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
				n = o.n(s),
				i = o("./node_modules/react-redux/es/index.js"),
				r = o("./src/reddit/helpers/trackers/powerups.ts"),
				a = o("./src/reddit/hooks/useTracking.ts"),
				d = o("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				c = o("./src/reddit/selectors/experiments/econ/index.ts"),
				l = o("./src/reddit/components/RichTextEditor/emotes/BaseTooltip.tsx"),
				u = o("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				m = o("./node_modules/fbt/lib/FbtPublic.js"),
				p = o("./src/lib/classNames/index.ts"),
				b = o("./src/reddit/actions/economics/powerups/index.ts"),
				h = o("./src/reddit/actions/toaster.ts"),
				E = o("./src/reddit/controls/LoadingIcon/index.tsx"),
				j = o("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				f = o("./src/reddit/models/Toast/index.ts"),
				x = o("./src/reddit/selectors/gold/powerups/index.ts"),
				w = o("./src/reddit/components/RichTextEditor/emotes/EmoteButton.tsx"),
				k = o("./src/reddit/components/RichTextEditor/emotes/Powerups/DeleteEmojiModal.tsx"),
				g = o("./src/reddit/components/RichTextEditor/emotes/Powerups/useEmojiUpload.ts"),
				C = o("./src/reddit/components/RichTextEditor/emotes/Powerups/emotesSection.m.less"),
				_ = o.n(C);
			const T = e => {
				let {
					onEmoteClicked: t,
					subredditId: o,
					subredditName: d,
					userCanUseEmojis: c
				} = e;
				const l = Object(i.d)(),
					u = Object(a.a)(),
					[C, T] = Object(s.useState)(null),
					I = () => T(null),
					[v, O] = Object(s.useState)(!1),
					y = Object(i.e)(e => Object(x.i)(e, {
						subredditId: o
					})),
					N = Object(i.e)(e => Object(x.c)(e, {
						subredditId: o
					})),
					P = Object(i.e)(e => Object(x.d)(e, {
						subredditId: o
					})),
					{
						uploadInput: R,
						numUploading: B,
						maxEmojisUploaded: L,
						onFileChange: S,
						onClickUpload: U
					} = Object(g.a)(o, N, e => {
						l(Object(h.f)({
							duration: 5e3,
							kind: f.b.Error,
							text: m.fbt._({
								"*": "You can only add {number} more custom emojis.",
								_1: "You can only add 1 more custom emoji."
							}, [m.fbt._plural(e, "number")], {
								hk: "2m6dmc"
							})
						}))
					}, e => {
						u(Object(r.a)(e, "powerups"))
					}, e => {
						u(Object(r.e)(e, "powerups")), l(Object(h.f)({
							duration: 5e3,
							kind: f.b.SuccessMod,
							text: m.fbt._({
								"*": "Added {number} custom emojis",
								_1: "Added 1 custom emoji"
							}, [m.fbt._plural(e, "number")], {
								hk: "gf4gL"
							})
						}))
					}, e => {
						l(Object(h.f)({
							duration: 5e3,
							kind: f.b.Error,
							text: m.fbt._({
								"*": "Failed to upload {number} custom emojis",
								_1: "Failed to upload 1 custom emoji"
							}, [m.fbt._plural(e, "number")], {
								hk: "4bKuqU"
							})
						}))
					}),
					M = L,
					A = y ? m.fbt._("Add up to 20 emojis", null, {
						hk: "4kR3Q8"
					}) : m.fbt._("Custom emojis", null, {
						hk: "3K8KMy"
					}),
					D = m.fbt._("Images under 128kb with a transparent background work the best.", null, {
						hk: "c6yXl"
					});
				return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", null, (y || N.length > 0) && n.a.createElement("article", null, n.a.createElement("header", {
					className: _.a.emotePackTitle
				}, n.a.createElement("span", null, A)), n.a.createElement("header", {
					className: _.a.emotePackSubtitle
				}, y && D), n.a.createElement("div", {
					className: Object(p.a)(_.a.emotes, {
						[_.a.disabled]: !c
					})
				}, y && n.a.createElement(n.a.Fragment, null, n.a.createElement("input", {
					ref: R,
					className: _.a.uploadInput,
					onChange: S,
					type: "file",
					accept: "image/png,image/jpeg",
					multiple: !0
				}), B ? n.a.createElement("div", {
					className: _.a.loadingContainer
				}, n.a.createElement(E.a, {
					sizePx: 12,
					center: !0
				})) : n.a.createElement("button", {
					className: Object(p.a)(_.a.emoteButton, _.a.addButton, {
						[_.a.addButtonDisabled]: M
					}),
					onClick: U,
					title: M ? m.fbt._("You've hit the maximum of 20 emojis", null, {
						hk: "3Qz2UG"
					}) : m.fbt._("Add Custom Emoji", null, {
						hk: "M580t"
					}),
					disabled: M
				}, n.a.createElement(j.a, {
					className: _.a.addIcon
				}))), N.map(e => n.a.createElement(w.a, {
					key: e.id,
					className: _.a.emoteButton,
					imageClassName: _.a.customEmoteImage,
					imagePath: e.emoji.path,
					onClick: () => t(e),
					onClickDelete: y ? () => T(e) : void 0
				})), [...Array(B)].map((e, t) => n.a.createElement("div", {
					key: t,
					className: Object(p.a)(_.a.emoteButton, _.a.placeholderEmoteButton)
				})))), n.a.createElement("article", {
					className: _.a.freeEmotePack
				}, n.a.createElement("header", {
					className: _.a.emotePackTitle
				}, m.fbt._("Reddit emojis", null, {
					hk: "2k2TMN"
				})), n.a.createElement("div", {
					className: Object(p.a)(_.a.emotes, {
						[_.a.disabled]: !c
					})
				}, P.map(e => n.a.createElement(w.a, {
					key: e.id,
					className: _.a.emoteButton,
					imagePath: e.emoji.path,
					title: e.id,
					onClick: () => t(e),
					disabled: !c
				}))))), C && n.a.createElement(k.a, {
					emojiUrl: C.emoji.path,
					onCancel: I,
					onClose: I,
					onConfirm: async () => {
						if (C && !v) try {
							O(!0), await l(Object(b.a)({
								subredditId: o,
								emojiId: C.id
							})), I(), u(Object(r.b)(1, "powerups")), l(Object(h.f)({
								duration: 5e3,
								kind: f.b.SuccessMod,
								text: m.fbt._("Deleted custom emoji", null, {
									hk: "Y41sq"
								})
							}))
						} catch (e) {
							l(Object(h.f)({
								duration: 5e3,
								kind: f.b.Error,
								text: m.fbt._("Failed to delete custom emoji", null, {
									hk: "ngElG"
								})
							}))
						} finally {
							O(!1)
						}
					}
				}))
			};
			var I = o("./src/reddit/components/RichTextEditor/emotes/Powerups/tooltip.m.less"),
				v = o.n(I);
			const {
				fbt: O
			} = o("./node_modules/fbt/lib/FbtPublic.js");
			t.default = e => {
				let {
					editorState: t,
					onChange: o,
					onSetApi: m,
					subreddit: p,
					userCanUseEmojis: b
				} = e;
				const h = Object(a.a)(),
					[E, j] = Object(s.useState)(!1),
					f = Object(i.e)(c.e);
				Object(s.useEffect)(() => {
					E && h(Object(r.c)())
				}, [E, h]);
				return p.id ? n.a.createElement(l.a, {
					className: v.a.toolbarTooltip,
					bodyClassName: v.a.tooltipBody,
					isVisible: E,
					setIsVisible: j,
					onSetApi: m,
					title: n.a.createElement(() => f ? O._("r/{subredditName} emojis", [O._param("subredditName", p.name)], {
						hk: "10hCgO"
					}) : n.a.createElement(n.a.Fragment, null, n.a.createElement(d.a, null), b ? O._("Unlocked with Powerups", null, {
						hk: "4am2RN"
					}) : O._("Unlock with Powerups", null, {
						hk: "Dbu9T"
					})), null)
				}, n.a.createElement("div", {
					className: v.a.body
				}, n.a.createElement(T, {
					subredditId: p.id,
					subredditName: p.name,
					onEmoteClicked: e => {
						const s = Object(u.g)(e, t);
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
				return r
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = o("./node_modules/react/index.js"),
				n = o("./node_modules/react-redux/es/index.js"),
				i = o("./src/reddit/actions/economics/powerups/index.ts");
			const r = (e, t, o, r, a, d) => {
				const c = Object(n.d)(),
					l = Object(s.useRef)(null),
					[u, m] = Object(s.useState)(0),
					p = async function(t) {
						let o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
							s = arguments.length > 2 ? arguments[2] : void 0;
						try {
							return await c(Object(i.b)({
								subredditId: e,
								file: t
							})), s(), {
								success: !0
							}
						} catch (n) {
							return o ? p(t, !1, s) : (s(), {
								success: !1,
								error: n.message
							})
						}
					}, b = () => m(e => e - 1);
				return {
					maxEmojisUploaded: t.length >= 20,
					maxEmojisUploading: t.length + u >= 20,
					onFileChange: async e => {
						const s = e.currentTarget.files;
						if (!(null == s ? void 0 : s.length)) return;
						if (s.length + t.length > 20) {
							const e = 20 - t.length;
							return null == o || o(e), void(l.current && (l.current.value = ""))
						}
						m(s.length), null == r || r(s.length);
						const n = await Promise.all([...s].map(e => p(e, !0, b))),
							i = n.reduce((e, t) => e + (t.success ? 1 : 0), 0);
						i > 0 && (null == a || a(i));
						const c = n.length - i;
						c > 0 && (null == d || d(c)), l.current && (l.current.value = ""), m(0)
					},
					numUploading: u,
					onClickUpload: () => {
						var e;
						null === (e = l.current) || void 0 === e || e.click()
					},
					uploadInput: l
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
		"./src/reddit/helpers/trackers/powerups.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return r
			})), o.d(t, "a", (function() {
				return a
			})), o.d(t, "e", (function() {
				return d
			})), o.d(t, "b", (function() {
				return c
			})), o.d(t, "d", (function() {
				return l
			})), o.d(t, "f", (function() {
				return u
			}));
			var s = o("./src/reddit/helpers/correlationIdTracker.ts"),
				n = o("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, o) => ({
					...n.o(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !1),
					profile: n.T(e),
					subreddit: n.kb(e),
					powerups: {
						...n.pb(e),
						freeCount: t,
						paidCount: o
					}
				}),
				r = () => e => ({
					source: "meta",
					action: "open",
					noun: "emote_picker",
					...i(e)
				}),
				a = (e, t) => o => ({
					source: t,
					action: "click",
					noun: "add_custom_emojis",
					...i(o),
					powerups: {
						...n.pb(o),
						emojiCount: e
					}
				}),
				d = (e, t) => o => ({
					source: t,
					action: "save",
					noun: "custom_emojis",
					...i(o),
					powerups: {
						...n.pb(o),
						emojiCount: e
					}
				}),
				c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
						t = arguments.length > 1 ? arguments[1] : void 0;
					return o => ({
						source: t,
						action: "delete",
						noun: "custom_emojis",
						...i(o),
						powerups: {
							...n.pb(o),
							emojiCount: e
						}
					})
				},
				l = (e, t) => o => ({
					source: "meta",
					action: "open",
					noun: "gif_tooltip",
					subreddit: t ? n.lb(o, t) : void 0,
					...i(o),
					correlationId: e
				}),
				u = (e, t, o) => s => ({
					source: "powerups_settings",
					action: "click",
					noun: e,
					setting: {
						value: String(t),
						oldValue: String(o)
					},
					subreddit: n.kb(s),
					...n.o(s)
				})
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
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id,
				"data-testid": "bolt-tier2"
			}, e.title && n.a.createElement("title", null, e.title), n.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), n.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), n.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), n.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), n.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PowerupsEmotesTooltip.da0fb51be5f4ccf7e20b.js.map