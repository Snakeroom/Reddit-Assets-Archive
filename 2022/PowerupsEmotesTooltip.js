// https://www.redditstatic.com/desktop2x/PowerupsEmotesTooltip.bd80532bddbf26e0b61c.js
// Retrieved at 9/12/2022, 2:10:03 PM by Reddit Dataminer v1.0.0
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
				n = o("./src/lib/makeActionCreator/index.ts"),
				i = o("./src/lib/sentry/index.ts"),
				a = o("./src/lib/uploadToS3/index.ts"),
				r = o("./src/reddit/endpoints/gold/powerups/index.ts"),
				c = o("./src/reddit/helpers/media/index.ts"),
				d = o("./src/reddit/selectors/user.ts"),
				l = o("./src/reddit/actions/economics/powerups/constants.ts"),
				m = o("./src/reddit/actions/economics/powerups/helpers.ts");
			const u = Object(n.a)(l.b),
				p = Object(n.a)(l.c),
				b = e => {
					let {
						subredditId: t,
						file: o
					} = e;
					return async (e, n) => {
						var a;
						try {
							const i = n(),
								r = null === (a = Object(d.k)(i)) || void 0 === a ? void 0 : a.id;
							if (!r) throw new Error("Failed to get current user during emoji upload");
							const m = await Object(c.h)(o);
							if (!m) throw new Error("Cannot determine file mimeType");
							const {
								file: u,
								width: p,
								height: b
							} = await Object(c.p)(o, l.a), x = await e(h({
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
							throw i.c.captureException(r), r
						}
					}
				},
				h = (e, t) => async (o, s, n) => {
					let {
						gqlContext: i
					} = n;
					const a = await Object(r.c)(i(), {
						input: e
					});
					if (a.error || !a.ok) throw new Error(`Failed to get emoji upload lease. subredditId: ${e.subredditId}; userId: ${t.userId}`);
					const {
						ok: c,
						errors: d,
						s3UploadLease: l
					} = a.body.data.generateCustomEmojiUploadLease;
					if (!c || d) throw new Error(`Failed to get emoji upload lease: ${Object(m.a)(d)}. subredditId: ${e.subredditId}; userId: ${t.userId}`);
					return l
				}, E = e => async (t, o, s) => {
					let {
						gqlContext: n
					} = s;
					const i = await Object(r.a)(n(), {
						input: e
					});
					if (i.error || !i.ok) throw new Error("Failed to create custom emoji");
					const {
						ok: a,
						errors: d,
						emoji: l
					} = i.body.data.createCustomEmoji;
					if (!a || d) throw new Error(`Failed to create custom emoji: ${Object(m.a)(d)}`);
					const p = l.emojiIcon.url;
					await Object(c.o)(p);
					const {
						subredditId: b
					} = e;
					return t(u({
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
					const r = await Object(a.a)(o, s);
					if (!r.ok) throw new Error(`Failed to upload custom emoji to S3. subredditId: ${n}; userId: ${i}`);
					const c = r.body.PostResponse;
					return `https://${c.Bucket}.s3.amazonaws.com/${c.Key}`
				}, x = e => {
					let {
						emojiId: t,
						subredditId: o
					} = e;
					return async (e, s, n) => {
						let {
							gqlContext: a
						} = n;
						const c = await Object(r.b)(a(), {
							input: {
								id: t
							}
						});
						if (c.error || !c.ok) {
							const e = new Error("Failed to delete custom emoji");
							throw i.c.captureException(e), e
						}
						const {
							ok: d,
							errors: l
						} = c.body.data.deleteCustomEmoji;
						if (!d || l) {
							const e = new Error(`Failed to delete custom emoji: ${Object(m.a)(l)}`);
							throw i.c.captureException(e), e
						}
						return e(p({
							subredditId: o,
							emojiId: t
						})), d
					}
				}
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
			} = o("./node_modules/fbt/lib/FbtPublic.js"), d = e => {
				let {
					className: t
				} = e;
				return n.a.createElement("span", {
					className: Object(i.a)(r.a.new, t)
				}, c._("NEW", null, {
					hk: "2P5bsM"
				}))
			}
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
			const m = e => {
				let {
					title: t,
					onClickClose: o
				} = e;
				return n.a.createElement("div", {
					className: l.a.header
				}, t, n.a.createElement("div", {
					className: l.a.spacer
				}), n.a.createElement(c.a, {
					className: l.a.closeIcon,
					onClick: o
				}))
			};
			var u = o("./src/reddit/components/RichTextEditor/emotes/baseTooltip.m.less"),
				p = o.n(u);
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
						className: Object(i.a)(p.a.tooltip, this.props.bodyClassName),
						onClick: this.onTooltipBodyClick
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
				return m
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
			const l = 750,
				m = e => {
					let {
						className: t,
						containerClassName: o,
						imageClassName: c,
						disabled: m,
						id: u,
						imagePath: p,
						onClick: b,
						onKeyDown: h,
						title: E,
						onClickDelete: j,
						mouseEnterBufferTime: x = l
					} = e;
					const f = Object(n.useRef)(s.Outside),
						[w, k] = Object(n.useState)(!1);
					return i.a.createElement("div", {
						className: Object(a.a)(d.a.container, o),
						onMouseEnter: j ? () => {
							f.current = s.Inside, setTimeout(() => {
								f.current === s.Inside && k(!0)
							}, x)
						} : void 0,
						onMouseLeave: j ? () => {
							f.current = s.Outside, k(!1)
						} : void 0
					}, w && i.a.createElement("button", {
						className: d.a.deleteButton,
						onClick: j
					}, i.a.createElement(r.b, {
						className: d.a.deleteIcon
					})), i.a.createElement("button", {
						className: Object(a.a)(d.a.emoteButton, t),
						disabled: m,
						id: u,
						title: E,
						onClick: b,
						onKeyDown: h,
						tabIndex: 1
					}, i.a.createElement("div", {
						className: Object(a.a)(d.a.emoteImage, c),
						style: {
							backgroundImage: `url(${p})`
						}
					})))
				}
		},
		"./src/reddit/components/RichTextEditor/emotes/Powerups/DeleteEmojiModal.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return d
			}));
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				i = o("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				a = o("./src/reddit/components/RichTextEditor/emotes/Powerups/emotesSection.m.less"),
				r = o.n(a);
			const {
				fbt: c
			} = o("./node_modules/fbt/lib/FbtPublic.js"), d = e => {
				let {
					emojiUrl: t,
					onConfirm: o,
					onCancel: s,
					onClose: a
				} = e;
				return n.a.createElement(i.a, {
					onConfirm: o,
					onCancel: s,
					onClose: a,
					headerText: c._("Delete emoji", null, {
						hk: "27GEDb"
					}),
					modalText: n.a.createElement("p", {
						className: r.a.deleteModalContainer
					}, n.a.createElement("img", {
						className: r.a.deleteModalImage,
						src: t
					}), c._("Are you sure you want to delete this emoji?", null, {
						hk: "1bmNdu"
					})),
					actionText: c._("Delete", null, {
						hk: "4lt26q"
					}),
					cancelActionText: c._("Go back", null, {
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
				i = o("./src/reddit/helpers/trackers/powerups.ts"),
				a = o("./src/reddit/hooks/useTracking.ts"),
				r = o("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				c = o("./src/reddit/components/RichTextEditor/emotes/BaseTooltip.tsx"),
				d = o("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				l = o("./node_modules/fbt/lib/FbtPublic.js"),
				m = o("./node_modules/react-redux/es/index.js"),
				u = o("./src/lib/classNames/index.ts"),
				p = o("./src/reddit/actions/economics/powerups/index.ts"),
				b = o("./src/reddit/actions/toaster.ts"),
				h = o("./src/reddit/components/Econ/Common/NewIcon/index.tsx"),
				E = o("./src/reddit/controls/LoadingIcon/index.tsx"),
				j = o("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				x = o("./src/reddit/models/Toast/index.ts"),
				f = o("./src/reddit/selectors/gold/powerups/index.ts"),
				w = o("./src/reddit/components/RichTextEditor/emotes/EmoteButton.tsx"),
				k = o("./src/reddit/components/RichTextEditor/emotes/Powerups/DeleteEmojiModal.tsx"),
				g = o("./src/reddit/components/RichTextEditor/emotes/Powerups/useEmojiUpload.ts"),
				C = o("./src/reddit/components/RichTextEditor/emotes/Powerups/emotesSection.m.less"),
				_ = o.n(C);
			const I = e => {
				let {
					onEmoteClicked: t,
					subredditId: o,
					subredditName: r,
					userCanUseEmojis: c
				} = e;
				const d = Object(m.d)(),
					C = Object(a.a)(),
					[I, T] = Object(s.useState)(null),
					v = () => T(null),
					[O, N] = Object(s.useState)(!1),
					y = Object(m.e)(e => Object(f.p)(e, {
						subredditId: o
					})),
					P = Object(m.e)(e => Object(f.g)(e, {
						subredditId: o
					})),
					R = Object(m.e)(e => Object(f.h)(e, {
						subredditId: o
					})),
					{
						uploadInput: B,
						numUploading: L,
						maxEmojisUploaded: U,
						onFileChange: M,
						onClickUpload: A
					} = Object(g.a)(o, P, e => {
						d(Object(b.f)({
							duration: 5e3,
							kind: x.b.Error,
							text: l.fbt._({
								"*": "You can only add {number} more custom emojis.",
								_1: "You can only add 1 more custom emoji."
							}, [l.fbt._plural(e, "number")], {
								hk: "2m6dmc"
							})
						}))
					}, e => {
						C(Object(i.a)(e, "powerups"))
					}, e => {
						C(Object(i.l)(e, "powerups")), d(Object(b.f)({
							duration: 5e3,
							kind: x.b.SuccessMod,
							text: l.fbt._({
								"*": "Added {number} custom emojis",
								_1: "Added 1 custom emoji"
							}, [l.fbt._plural(e, "number")], {
								hk: "gf4gL"
							})
						}))
					}, e => {
						d(Object(b.f)({
							duration: 5e3,
							kind: x.b.Error,
							text: l.fbt._({
								"*": "Failed to upload {number} custom emojis",
								_1: "Failed to upload 1 custom emoji"
							}, [l.fbt._plural(e, "number")], {
								hk: "4bKuqU"
							})
						}))
					}),
					D = U,
					S = y ? l.fbt._("Add up to 20 emojis", null, {
						hk: "4kR3Q8"
					}) : l.fbt._("r/{communityName} Emojis", [l.fbt._param("communityName", r)], {
						hk: "2cn7Yi"
					}),
					F = l.fbt._("Images under 128kb with a transparent background work the best.", null, {
						hk: "c6yXl"
					});
				return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", null, (y || P.length > 0) && n.a.createElement("article", null, n.a.createElement("header", {
					className: _.a.emotePackTitle
				}, n.a.createElement("span", null, S), n.a.createElement(h.a, {
					className: _.a.newIcon
				})), n.a.createElement("header", {
					className: _.a.emotePackSubtitle
				}, y && F), n.a.createElement("div", {
					className: Object(u.a)(_.a.emotes, {
						[_.a.disabled]: !c
					})
				}, y && n.a.createElement(n.a.Fragment, null, n.a.createElement("input", {
					ref: B,
					className: _.a.uploadInput,
					onChange: M,
					type: "file",
					accept: "image/png,image/jpeg",
					multiple: !0
				}), L ? n.a.createElement("div", {
					className: _.a.loadingContainer
				}, n.a.createElement(E.a, {
					sizePx: 12,
					center: !0
				})) : n.a.createElement("button", {
					className: Object(u.a)(_.a.emoteButton, _.a.addButton, {
						[_.a.addButtonDisabled]: D
					}),
					onClick: A,
					title: D ? l.fbt._("You've hit the maximum of 20 emojis", null, {
						hk: "3Qz2UG"
					}) : l.fbt._("Add Custom Emoji", null, {
						hk: "M580t"
					}),
					disabled: D
				}, n.a.createElement(j.a, {
					className: _.a.addIcon
				}))), P.map(e => n.a.createElement(w.a, {
					key: e.id,
					className: _.a.emoteButton,
					imageClassName: _.a.customEmoteImage,
					imagePath: e.emoji.path,
					onClick: () => t(e),
					onClickDelete: y ? () => T(e) : void 0
				})), [...Array(L)].map((e, t) => n.a.createElement("div", {
					key: t,
					className: Object(u.a)(_.a.emoteButton, _.a.placeholderEmoteButton)
				})))), n.a.createElement("article", {
					className: _.a.freeEmotePack
				}, n.a.createElement("header", {
					className: _.a.emotePackTitle
				}, l.fbt._("Reddit emojis", null, {
					hk: "2k2TMN"
				})), n.a.createElement("div", {
					className: Object(u.a)(_.a.emotes, {
						[_.a.disabled]: !c
					})
				}, R.map(e => n.a.createElement(w.a, {
					key: e.id,
					className: _.a.emoteButton,
					imagePath: e.emoji.path,
					title: e.id,
					onClick: () => t(e),
					disabled: !c
				}))))), I && n.a.createElement(k.a, {
					emojiUrl: I.emoji.path,
					onCancel: v,
					onClose: v,
					onConfirm: async () => {
						if (I && !O) try {
							N(!0), await d(Object(p.a)({
								subredditId: o,
								emojiId: I.id
							})), v(), C(Object(i.b)(1, "powerups")), d(Object(b.f)({
								duration: 5e3,
								kind: x.b.SuccessMod,
								text: l.fbt._("Deleted custom emoji", null, {
									hk: "Y41sq"
								})
							}))
						} catch (e) {
							d(Object(b.f)({
								duration: 5e3,
								kind: x.b.Error,
								text: l.fbt._("Failed to delete custom emoji", null, {
									hk: "ngElG"
								})
							}))
						} finally {
							N(!1)
						}
					}
				}))
			};
			var T = o("./src/reddit/components/RichTextEditor/emotes/Powerups/tooltip.m.less"),
				v = o.n(T);
			const {
				fbt: O
			} = o("./node_modules/fbt/lib/FbtPublic.js");
			t.default = e => {
				let {
					editorState: t,
					onChange: o,
					onSetApi: l,
					subreddit: m,
					userCanUseEmojis: u
				} = e;
				const p = Object(a.a)(),
					[b, h] = Object(s.useState)(!1);
				Object(s.useEffect)(() => {
					b && p(Object(i.i)())
				}, [b, p]);
				return m.id ? n.a.createElement(c.a, {
					className: v.a.toolbarTooltip,
					bodyClassName: v.a.tooltipBody,
					isVisible: b,
					setIsVisible: h,
					onSetApi: l,
					title: n.a.createElement(() => n.a.createElement(n.a.Fragment, null, n.a.createElement(r.a, {
						className: v.a.headingPowerupsBolt
					}), u ? O._("Unlocked with Powerups", null, {
						hk: "4am2RN"
					}) : O._("Unlock with Powerups", null, {
						hk: "Dbu9T"
					})), null)
				}, n.a.createElement("div", {
					className: v.a.body
				}, n.a.createElement(I, {
					subredditId: m.id,
					subredditName: m.name,
					onEmoteClicked: e => {
						const s = Object(d.g)(e, t);
						o(s), h(!1)
					},
					userCanUseEmojis: u
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
				n = o("./node_modules/react-redux/es/index.js"),
				i = o("./src/reddit/actions/economics/powerups/index.ts");
			const a = (e, t, o, a, r, c) => {
				const d = Object(n.d)(),
					l = Object(s.useRef)(null),
					[m, u] = Object(s.useState)(0),
					p = async function(t) {
						let o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
							s = arguments.length > 2 ? arguments[2] : void 0;
						try {
							return await d(Object(i.b)({
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
					}, b = () => u(e => e - 1);
				return {
					maxEmojisUploaded: t.length >= 20,
					maxEmojisUploading: t.length + m >= 20,
					onFileChange: async e => {
						const s = e.currentTarget.files;
						if (!(null == s ? void 0 : s.length)) return;
						if (s.length + t.length > 20) {
							const e = 20 - t.length;
							return null == o || o(e), void(l.current && (l.current.value = ""))
						}
						u(s.length), null == a || a(s.length);
						const n = await Promise.all([...s].map(e => p(e, !0, b))),
							i = n.reduce((e, t) => e + (t.success ? 1 : 0), 0);
						i > 0 && (null == r || r(i));
						const d = n.length - i;
						d > 0 && (null == c || c(d)), l.current && (l.current.value = ""), u(0)
					},
					numUploading: m,
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PowerupsEmotesTooltip.bd80532bddbf26e0b61c.js.map