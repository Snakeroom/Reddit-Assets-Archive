// https://www.redditstatic.com/desktop2x/PowerupsEmotesTooltip.00c18dbd1b151d74559b.js
// Retrieved at 2/16/2022, 7:50:04 PM by Reddit Dataminer v1.0.0
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
			})), o.d(t, "d", (function() {
				return a
			})), o.d(t, "i", (function() {
				return r
			})), o.d(t, "f", (function() {
				return c
			})), o.d(t, "g", (function() {
				return d
			})), o.d(t, "e", (function() {
				return l
			})), o.d(t, "h", (function() {
				return m
			}));
			const s = 120,
				n = "ON_CREATE_CUSTOM_EMOJI_SUCCESS",
				i = "ON_DELETE_CUSTOM_EMOJI_SUCCESS",
				a = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIRS_LOADED",
				r = "POWERUPS__USER_SUPPORTED_SUBREDDITS_LOADED",
				c = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATE_REQUESTED",
				d = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATED",
				l = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_PREFERENCE_UPDATE_FAILED",
				m = "POWERUPS__SUBREDDIT_USER_POWERUPS_FLAIR_VISIBILITY_UPDATE"
		},
		"./src/reddit/actions/economics/powerups/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return b
			})), o.d(t, "a", (function() {
				return x
			}));
			var s = o("./node_modules/uuid/v4.js"),
				n = o.n(s),
				i = o("./src/lib/makeActionCreator/index.ts"),
				a = o("./src/lib/sentry/index.ts"),
				r = o("./src/lib/uploadToS3/index.ts"),
				c = o("./src/reddit/endpoints/gold/powerups/index.ts"),
				d = o("./src/reddit/helpers/media/index.ts"),
				l = o("./src/reddit/selectors/user.ts"),
				m = o("./src/reddit/actions/economics/powerups/constants.ts"),
				u = o("./src/reddit/actions/economics/powerups/helpers.ts");
			const p = Object(i.a)(m.b),
				E = Object(i.a)(m.c),
				b = ({
					subredditId: e,
					file: t
				}) => async (o, s) => {
					var i;
					try {
						const a = s(),
							r = null === (i = Object(l.k)(a)) || void 0 === i ? void 0 : i.id;
						if (!r) throw new Error("Failed to get current user during emoji upload");
						const c = await Object(d.g)(t);
						if (!c) throw new Error("Cannot determine file mimeType");
						const {
							file: u,
							width: p,
							height: E
						} = await Object(d.n)(t, m.a), b = await o(h({
							subredditId: e,
							mimeType: c
						}, {
							userId: r
						})), x = await j({
							file: u,
							s3UploadLease: b
						}, {
							subredditId: e,
							userId: r
						});
						return await o(_({
							subredditId: e,
							mimeType: c,
							url: x,
							x: p,
							y: E,
							nonce: n()()
						}))
					} catch (r) {
						throw a.c.captureException(r), r
					}
				}, h = (e, t) => async (o, s, {
					gqlContext: n
				}) => {
					const i = await Object(c.d)(n(), {
						input: e
					});
					if (i.error || !i.ok) throw new Error(`Failed to get emoji upload lease. subredditId: ${e.subredditId}; userId: ${t.userId}`);
					const {
						ok: a,
						errors: r,
						s3UploadLease: d
					} = i.body.data.generateCustomEmojiUploadLease;
					if (!a || r) throw new Error(`Failed to get emoji upload lease: ${Object(u.a)(r)}. subredditId: ${e.subredditId}; userId: ${t.userId}`);
					return d
				}, _ = e => async (t, o, {
					gqlContext: s
				}) => {
					const n = await Object(c.a)(s(), {
						input: e
					});
					if (n.error || !n.ok) throw new Error("Failed to create custom emoji");
					const {
						ok: i,
						errors: a,
						emoji: r
					} = n.body.data.createCustomEmoji;
					if (!i || a) throw new Error(`Failed to create custom emoji: ${Object(u.a)(a)}`);
					const l = r.emojiIcon.url;
					await Object(d.m)(l);
					const {
						subredditId: m
					} = e;
					return t(p({
						subredditId: m,
						emoji: r
					})), r
				}, j = async ({
					file: e,
					s3UploadLease: t
				}, {
					subredditId: o,
					userId: s
				}) => {
					const n = await Object(r.a)(e, t);
					if (!n.ok) throw new Error(`Failed to upload custom emoji to S3. subredditId: ${o}; userId: ${s}`);
					const i = n.body.PostResponse;
					return `https://${i.Bucket}.s3.amazonaws.com/${i.Key}`
				}, x = ({
					emojiId: e,
					subredditId: t
				}) => async (o, s, {
					gqlContext: n
				}) => {
					const i = await Object(c.b)(n(), {
						input: {
							id: e
						}
					});
					if (i.error || !i.ok) {
						const e = new Error("Failed to delete custom emoji");
						throw a.c.captureException(e), e
					}
					const {
						ok: r,
						errors: d
					} = i.body.data.deleteCustomEmoji;
					if (!r || d) {
						const e = new Error(`Failed to delete custom emoji: ${Object(u.a)(d)}`);
						throw a.c.captureException(e), e
					}
					return o(E({
						subredditId: t,
						emojiId: e
					})), r
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
			class E extends n.a.Component {
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
			t.a = E
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
				containerClassName: t,
				imageClassName: o,
				disabled: c,
				id: l,
				imagePath: m,
				onClick: u,
				onKeyDown: p,
				title: E,
				onClickDelete: b,
				mouseEnterBufferTime: h = 750
			}) => {
				const _ = Object(n.useRef)(s.Outside),
					[j, x] = Object(n.useState)(!1);
				return i.a.createElement("div", {
					className: Object(a.a)(d.a.container, t),
					onMouseEnter: b ? () => {
						_.current = s.Inside, setTimeout(() => {
							_.current === s.Inside && x(!0)
						}, h)
					} : void 0,
					onMouseLeave: b ? () => {
						_.current = s.Outside, x(!1)
					} : void 0
				}, j && i.a.createElement("button", {
					className: d.a.deleteButton,
					onClick: b
				}, i.a.createElement(r.b, {
					className: d.a.deleteIcon
				})), i.a.createElement("button", {
					className: Object(a.a)(d.a.emoteButton, e),
					disabled: c,
					id: l,
					title: E,
					onClick: u,
					onKeyDown: p,
					tabIndex: 1
				}, i.a.createElement("div", {
					className: Object(a.a)(d.a.emoteImage, o),
					style: {
						backgroundImage: `url(${m})`
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
			} = o("./node_modules/fbt/lib/FbtPublic.js"), d = ({
				emojiUrl: e,
				onConfirm: t,
				onCancel: o,
				onClose: s
			}) => n.a.createElement(i.a, {
				onConfirm: t,
				onCancel: o,
				onClose: s,
				headerText: c._("Delete emoji", null, {
					hk: "27GEDb"
				}),
				modalText: n.a.createElement("p", {
					className: r.a.deleteModalContainer
				}, n.a.createElement("img", {
					className: r.a.deleteModalImage,
					src: e
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
				E = o("./src/reddit/actions/gold/powerups.ts"),
				b = o("./src/reddit/actions/toaster.ts"),
				h = o("./src/reddit/components/Econ/Common/NewIcon/index.tsx"),
				_ = o("./src/reddit/controls/Button/index.tsx"),
				j = o("./src/reddit/controls/LoadingIcon/index.tsx"),
				x = o("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				f = o("./src/reddit/models/Toast/index.ts"),
				I = o("./src/reddit/selectors/gold/powerups/index.ts"),
				w = o("./src/reddit/components/RichTextEditor/emotes/EmoteButton.tsx"),
				T = o("./src/reddit/components/RichTextEditor/emotes/Powerups/DeleteEmojiModal.tsx"),
				k = o("./src/reddit/components/RichTextEditor/emotes/Powerups/useEmojiUpload.ts"),
				O = o("./src/reddit/components/RichTextEditor/emotes/Powerups/emotesSection.m.less"),
				g = o.n(O);
			const C = ({
				onEmoteClicked: e,
				subredditId: t,
				subredditName: o,
				userCanUseEmojis: r
			}) => {
				const c = Object(m.d)(),
					d = Object(a.a)(),
					[O, C] = Object(s.useState)(null),
					P = () => C(null),
					[R, U] = Object(s.useState)(!1),
					N = Object(m.e)(e => Object(I.v)(e, {
						subredditId: t
					})),
					S = Object(m.e)(e => Object(I.i)(e, {
						subredditId: t
					})),
					y = Object(m.e)(e => Object(I.j)(e, {
						subredditId: t
					})),
					{
						uploadInput: D,
						numUploading: v,
						maxEmojisUploaded: B,
						onFileChange: A,
						onClickUpload: L
					} = Object(k.a)(t, S, e => {
						c(Object(b.f)({
							duration: 5e3,
							kind: f.b.Error,
							text: l.fbt._({
								"*": "You can only add {number} more custom emojis.",
								_1: "You can only add 1 more custom emoji."
							}, [l.fbt._plural(e, "number")], {
								hk: "2m6dmc"
							})
						}))
					}, e => {
						d(Object(i.a)(e, "powerups"))
					}, e => {
						d(Object(i.A)(e, "powerups")), c(Object(b.f)({
							duration: 5e3,
							kind: f.b.SuccessMod,
							text: l.fbt._({
								"*": "Added {number} custom emojis",
								_1: "Added 1 custom emoji"
							}, [l.fbt._plural(e, "number")], {
								hk: "gf4gL"
							})
						}))
					}, e => {
						c(Object(b.f)({
							duration: 5e3,
							kind: f.b.Error,
							text: l.fbt._({
								"*": "Failed to upload {number} custom emojis",
								_1: "Failed to upload 1 custom emoji"
							}, [l.fbt._plural(e, "number")], {
								hk: "4bKuqU"
							})
						}))
					}),
					F = B,
					M = N ? l.fbt._("Add up to 20 emojis", null, {
						hk: "4kR3Q8"
					}) : l.fbt._("r/{communityName} Emojis", [l.fbt._param("communityName", o)], {
						hk: "2cn7Yi"
					}),
					z = l.fbt._("Images under 128kb with a transparent background work the best.", null, {
						hk: "c6yXl"
					});
				return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", null, (N || S.length > 0) && n.a.createElement("article", null, n.a.createElement("header", {
					className: g.a.emotePackTitle
				}, n.a.createElement("span", null, M), n.a.createElement(h.a, {
					className: g.a.newIcon
				})), n.a.createElement("header", {
					className: g.a.emotePackSubtitle
				}, N && z), n.a.createElement("div", {
					className: Object(u.a)(g.a.emotes, {
						[g.a.disabled]: !r
					})
				}, N && n.a.createElement(n.a.Fragment, null, n.a.createElement("input", {
					ref: D,
					className: g.a.uploadInput,
					onChange: A,
					type: "file",
					accept: "image/png,image/jpeg",
					multiple: !0
				}), v ? n.a.createElement("div", {
					className: g.a.loadingContainer
				}, n.a.createElement(j.a, {
					sizePx: 12,
					center: !0
				})) : n.a.createElement("button", {
					className: Object(u.a)(g.a.emoteButton, g.a.addButton, {
						[g.a.addButtonDisabled]: F
					}),
					onClick: L,
					title: F ? l.fbt._("You've hit the maximum of 20 emojis", null, {
						hk: "3Qz2UG"
					}) : l.fbt._("Add Custom Emoji", null, {
						hk: "M580t"
					}),
					disabled: F
				}, n.a.createElement(x.a, {
					className: g.a.addIcon
				}))), S.map(t => n.a.createElement(w.a, {
					key: t.id,
					className: g.a.emoteButton,
					imageClassName: g.a.customEmoteImage,
					imagePath: t.emoji.path,
					onClick: () => e(t),
					onClickDelete: N ? () => C(t) : void 0
				})), [...Array(v)].map((e, t) => n.a.createElement("div", {
					key: t,
					className: Object(u.a)(g.a.emoteButton, g.a.placeholderEmoteButton)
				})))), n.a.createElement("article", {
					className: g.a.freeEmotePack
				}, n.a.createElement("header", {
					className: g.a.emotePackTitle
				}, l.fbt._("Reddit emojis", null, {
					hk: "2k2TMN"
				})), n.a.createElement("div", {
					className: Object(u.a)(g.a.emotes, {
						[g.a.disabled]: !r
					})
				}, y.map(t => n.a.createElement(w.a, {
					key: t.id,
					className: g.a.emoteButton,
					imagePath: t.emoji.path,
					title: t.id,
					onClick: () => e(t),
					disabled: !r
				}))))), !r && n.a.createElement(_.t, {
					className: g.a.unlockButton,
					onClick: () => {
						d(Object(i.E)()), c(Object(E.g)("emote_picker"))
					},
					priority: _.c.Primary
				}, l.fbt._("Unlock Emojis", null, {
					hk: "44jXM7"
				})), O && n.a.createElement(T.a, {
					emojiUrl: O.emoji.path,
					onCancel: P,
					onClose: P,
					onConfirm: async () => {
						if (O && !R) try {
							U(!0), await c(Object(p.a)({
								subredditId: t,
								emojiId: O.id
							})), P(), d(Object(i.d)(1, "powerups")), c(Object(b.f)({
								duration: 5e3,
								kind: f.b.SuccessMod,
								text: l.fbt._("Deleted custom emoji", null, {
									hk: "Y41sq"
								})
							}))
						} catch (e) {
							c(Object(b.f)({
								duration: 5e3,
								kind: f.b.Error,
								text: l.fbt._("Failed to delete custom emoji", null, {
									hk: "ngElG"
								})
							}))
						} finally {
							U(!1)
						}
					}
				}))
			};
			var P = o("./src/reddit/components/RichTextEditor/emotes/Powerups/tooltip.m.less"),
				R = o.n(P);
			const {
				fbt: U
			} = o("./node_modules/fbt/lib/FbtPublic.js");
			t.default = ({
				editorState: e,
				onChange: t,
				onSetApi: o,
				subreddit: l,
				userCanUseEmojis: m
			}) => {
				const u = Object(a.a)(),
					[p, E] = Object(s.useState)(!1);
				Object(s.useEffect)(() => {
					p && u(Object(i.k)())
				}, [p, u]);
				return l.id ? n.a.createElement(c.a, {
					className: R.a.toolbarTooltip,
					bodyClassName: R.a.tooltipBody,
					isVisible: p,
					setIsVisible: E,
					onSetApi: o,
					title: n.a.createElement(() => n.a.createElement(n.a.Fragment, null, n.a.createElement(r.a, {
						className: R.a.headingPowerupsBolt
					}), m ? U._("Unlocked with Powerups", null, {
						hk: "4am2RN"
					}) : U._("Unlock with Powerups", null, {
						hk: "Dbu9T"
					})), null)
				}, n.a.createElement("div", {
					className: R.a.body
				}, n.a.createElement(C, {
					subredditId: l.id,
					subredditName: l.name,
					onEmoteClicked: o => {
						const s = Object(d.g)(o, e);
						t(s), E(!1)
					},
					userCanUseEmojis: m
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
					p = async (t, o = !1, s) => {
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
					}, E = () => u(e => e - 1);
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
						const n = await Promise.all([...s].map(e => p(e, !0, E))),
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PowerupsEmotesTooltip.00c18dbd1b151d74559b.js.map