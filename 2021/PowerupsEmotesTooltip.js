// https://www.redditstatic.com/desktop2x/PowerupsEmotesTooltip.07bc7d4b516c95eb5a5c.js
// Retrieved at 8/10/2021, 1:20:09 PM by Reddit Dataminer v1.0.0
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
			})), o.d(t, "f", (function() {
				return r
			})), o.d(t, "g", (function() {
				return c
			})), o.d(t, "e", (function() {
				return l
			}));
			const s = 120,
				n = "ON_CREATE_CUSTOM_EMOJI_SUCCESS",
				i = "ON_DELETE_CUSTOM_EMOJI_SUCCESS",
				a = "POWERUPS__SUBREDDIT_USER_ACHIEVEMENTS_LOADED",
				r = "POWERUPS__SUBREDDIT_USER_ACHIEVEMENT_PREFERENCE_UPDATE_REQUESTED",
				c = "POWERUPS__SUBREDDIT_USER_ACHIEVEMENT_PREFERENCE_UPDATED",
				l = "POWERUPS__SUBREDDIT_USER_ACHIEVEMENT_PREFERENCE_UPDATE_FAILED"
		},
		"./src/reddit/components/Econ/Common/NewIcon/index.m.less": function(e, t, o) {
			e.exports = {
				new: "_2u3fkh0zbVoixCjyXrW0_e"
			}
		},
		"./src/reddit/components/Econ/Common/NewIcon/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return l
			}));
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				i = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/components/Econ/Common/NewIcon/index.m.less"),
				r = o.n(a);
			const {
				fbt: c
			} = o("./node_modules/fbt/lib/FbtPublic.js"), l = ({
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
				l = o("./src/reddit/components/RichTextEditor/emotes/tooltipHeader.m.less"),
				d = o.n(l);
			const m = ({
				title: e,
				onClickClose: t
			}) => n.a.createElement("div", {
				className: d.a.header
			}, e, n.a.createElement("div", {
				className: d.a.spacer
			}), n.a.createElement(c.a, {
				className: d.a.closeIcon,
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
				return d
			}));
			var s, n = o("./node_modules/react/index.js"),
				i = o.n(n),
				a = o("./src/lib/classNames/index.ts"),
				r = o("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = o("./src/reddit/components/RichTextEditor/emotes/emoteButton.m.less"),
				l = o.n(c);
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(s || (s = {}));
			const d = ({
				className: e,
				imageClassName: t,
				disabled: o,
				id: c,
				imagePath: d,
				onClick: m,
				onKeyDown: u,
				title: p,
				onClickDelete: E
			}) => {
				const b = Object(n.useRef)(s.Outside),
					[h, _] = Object(n.useState)(!1);
				return i.a.createElement("div", {
					className: l.a.container,
					onMouseEnter: E ? () => {
						b.current = s.Inside, setTimeout(() => {
							b.current === s.Inside && _(!0)
						}, 750)
					} : void 0,
					onMouseLeave: E ? () => {
						b.current = s.Outside, _(!1)
					} : void 0
				}, h && i.a.createElement("button", {
					className: l.a.deleteButton,
					onClick: E
				}, i.a.createElement(r.b, {
					className: l.a.deleteIcon
				})), i.a.createElement("button", {
					className: Object(a.a)(l.a.emoteButton, e),
					disabled: o,
					id: c,
					title: p,
					onClick: m,
					onKeyDown: u,
					tabIndex: 1
				}, i.a.createElement("div", {
					className: Object(a.a)(l.a.emoteImage, t),
					style: {
						backgroundImage: `url(${d})`
					}
				})))
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/Powerups/Tooltip.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				i = o("./node_modules/react-redux/es/index.js"),
				a = o("./src/reddit/helpers/trackers/powerups.ts"),
				r = o("./src/reddit/hooks/useTracking.ts"),
				c = o("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				l = o("./src/reddit/selectors/gold/powerups/index.ts"),
				d = o("./src/reddit/components/RichTextEditor/emotes/BaseTooltip.tsx"),
				m = o("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				u = (o("./node_modules/core-js/modules/web.dom.iterable.js"), o("./node_modules/fbt/lib/FbtPublic.js")),
				p = o("./src/lib/classNames/index.ts"),
				E = o("./node_modules/uuid/v4.js"),
				b = o.n(E),
				h = o("./src/lib/makeActionCreator/index.ts"),
				_ = o("./src/lib/sentry/index.ts"),
				f = o("./src/lib/uploadToS3/index.ts"),
				j = o("./src/reddit/endpoints/gold/powerups/index.ts"),
				x = o("./src/reddit/helpers/media/index.ts"),
				k = o("./src/reddit/actions/economics/powerups/constants.ts"),
				w = o("./src/reddit/actions/economics/powerups/helpers.ts");
			const T = Object(h.a)(k.b),
				g = Object(h.a)(k.c),
				O = e => async (t, o, {
					gqlContext: s
				}) => {
					const n = await Object(j.d)(s(), {
						input: e
					});
					if (n.error || !n.ok) throw new Error("Failed to get emoji upload lease");
					const {
						ok: i,
						errors: a,
						s3UploadLease: r
					} = n.body.data.generateCustomEmojiUploadLease;
					if (!i || a) throw new Error(`Failed to get emoji upload lease: ${Object(w.a)(a)}`);
					return r
				}, C = e => async (t, o, {
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
					if (!i || a) throw new Error(`Failed to create custom emoji: ${Object(w.a)(a)}`);
					const c = r.emojiIcon.url;
					await Object(x.m)(c);
					const {
						subredditId: l
					} = e;
					return t(T({
						subredditId: l,
						emoji: r
					})), r
				}, I = async ({
					file: e,
					s3UploadLease: t
				}) => {
					const o = await Object(f.a)(e, t);
					if (!o.ok) throw new Error("Failed to upload custom emoji to S3");
					const s = o.body.PostResponse;
					return `https://${s.Bucket}.s3.amazonaws.com/${s.Key}`
				};
			var N = o("./src/reddit/actions/gold/powerups.ts"),
				y = o("./src/reddit/actions/toaster.ts"),
				R = o("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				v = o("./src/reddit/components/Econ/Common/NewIcon/index.tsx"),
				P = o("./src/reddit/controls/Button/index.tsx"),
				S = o("./src/reddit/controls/LoadingIcon/index.tsx"),
				D = o("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				B = o("./src/reddit/models/Toast/index.ts"),
				A = o("./src/reddit/components/RichTextEditor/emotes/EmoteButton.tsx"),
				U = o("./src/reddit/components/RichTextEditor/emotes/Powerups/emotesSection.m.less"),
				M = o.n(U);
			const L = ({
				onEmoteClicked: e,
				subredditId: t,
				subredditName: o
			}) => {
				const c = Object(s.useRef)(null),
					d = Object(i.d)(),
					m = Object(r.a)(),
					[E, h] = Object(s.useState)(0),
					[f, T] = Object(s.useState)(null),
					[U, L] = Object(s.useState)(!1),
					F = Object(i.e)(e => Object(l.r)(e, {
						subredditId: t
					})),
					H = Object(i.e)(e => Object(l.o)(e, {
						subredditId: t
					})),
					V = Object(i.e)(e => Object(l.g)(e, {
						subredditId: t
					})),
					z = Object(i.e)(e => Object(l.h)(e, {
						subredditId: t
					})),
					q = async (e, o = !1, s) => {
						try {
							return await d((({
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
									} = await Object(x.n)(t, k.a), r = await o(O({
										subredditId: e,
										mimeType: s
									})), c = await I({
										file: n,
										s3UploadLease: r
									});
									return await o(C({
										subredditId: e,
										mimeType: s,
										url: c,
										x: i,
										y: a,
										nonce: b()()
									}))
								} catch (n) {
									throw _.c.captureException(n), n
								}
							})({
								subredditId: t,
								file: e
							})), s(), {
								success: !0
							}
						} catch (n) {
							return o ? q(e, !1, s) : (s(), {
								success: !1,
								error: n.message
							})
						}
					}, K = () => h(e => e - 1), W = V.length >= 20, Q = F ? u.fbt._("Add up to 20 emojis", null, {
						hk: "4kR3Q8"
					}) : u.fbt._("r/{communityName} Emojis", [u.fbt._param("communityName", o)], {
						hk: "2cn7Yi"
					}), X = u.fbt._("Images under 128kb with a transparent background work the best.", null, {
						hk: "c6yXl"
					});
				return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", null, (F || V.length > 0) && n.a.createElement("article", null, n.a.createElement("header", {
					className: M.a.emotePackTitle
				}, n.a.createElement("span", null, Q), n.a.createElement(v.a, {
					className: M.a.newIcon
				})), n.a.createElement("header", {
					className: M.a.emotePackSubtitle
				}, F && X), n.a.createElement("div", {
					className: Object(p.a)(M.a.emotes, {
						[M.a.disabled]: !H
					})
				}, F && n.a.createElement(n.a.Fragment, null, n.a.createElement("input", {
					ref: c,
					className: M.a.uploadInput,
					onChange: async e => {
						const t = e.currentTarget.files;
						if (!(null == t ? void 0 : t.length)) return;
						if (t.length + V.length > 20) {
							const e = 20 - V.length;
							return d(Object(y.f)({
								duration: 5e3,
								kind: B.b.Error,
								text: u.fbt._({
									"*": "You can only add {number} more custom emojis.",
									_1: "You can only add 1 more custom emoji."
								}, [u.fbt._plural(e, "number")], {
									hk: "2m6dmc"
								})
							})), void(c.current && (c.current.value = ""))
						}
						h(t.length), m(Object(a.a)(t.length));
						const o = await Promise.all([...t].map(e => q(e, !0, K))),
							s = o.reduce((e, t) => e + (t.success ? 1 : 0), 0);
						s > 0 && (m(Object(a.n)(s)), d(Object(y.f)({
							duration: 5e3,
							kind: B.b.SuccessMod,
							text: u.fbt._({
								"*": "Added {number} custom emojis",
								_1: "Added 1 custom emoji"
							}, [u.fbt._plural(s, "number")], {
								hk: "gf4gL"
							})
						})));
						const n = o.length - s;
						n > 0 && d(Object(y.f)({
							duration: 5e3,
							kind: B.b.Error,
							text: u.fbt._({
								"*": "Failed to upload {number} custom emojis",
								_1: "Failed to upload 1 custom emoji"
							}, [u.fbt._plural(n, "number")], {
								hk: "4bKuqU"
							})
						})), c.current && (c.current.value = ""), h(0)
					},
					type: "file",
					accept: "image/png,image/jpeg",
					multiple: !0
				}), E ? n.a.createElement("div", {
					className: M.a.loadingContainer
				}, n.a.createElement(S.a, {
					sizePx: 12,
					center: !0
				})) : n.a.createElement("button", {
					className: Object(p.a)(M.a.emoteButton, M.a.addButton, {
						[M.a.addButtonDisabled]: W
					}),
					onClick: () => {
						var e;
						null === (e = c.current) || void 0 === e || e.click()
					},
					title: W ? u.fbt._("You've hit the maximum of 20 emojis", null, {
						hk: "3Qz2UG"
					}) : u.fbt._("Add Custom Emoji", null, {
						hk: "M580t"
					}),
					disabled: W
				}, n.a.createElement(D.a, {
					className: M.a.addIcon
				}))), V.map(t => n.a.createElement(A.a, {
					key: t.id,
					className: M.a.emoteButton,
					imageClassName: M.a.customEmoteImage,
					imagePath: t.emoji.path,
					onClick: () => e(t),
					onClickDelete: F ? () => T(t) : void 0
				})), [...Array(E)].map((e, t) => n.a.createElement("div", {
					key: t,
					className: Object(p.a)(M.a.emoteButton, M.a.placeholderEmoteButton)
				})))), n.a.createElement("article", {
					className: M.a.freeEmotePack
				}, n.a.createElement("header", {
					className: M.a.emotePackTitle
				}, u.fbt._("Reddit emojis", null, {
					hk: "2k2TMN"
				})), n.a.createElement("div", {
					className: Object(p.a)(M.a.emotes, {
						[M.a.disabled]: !H
					})
				}, z.map(t => n.a.createElement(A.a, {
					key: t.id,
					className: M.a.emoteButton,
					imagePath: t.emoji.path,
					title: t.id,
					onClick: () => e(t),
					disabled: !H
				}))))), !H && n.a.createElement(P.q, {
					className: M.a.unlockButton,
					onClick: () => {
						m(Object(a.q)()), d(Object(N.f)("emote_picker"))
					},
					priority: P.b.Primary
				}, u.fbt._("Unlock Emojis", null, {
					hk: "44jXM7"
				})), f && n.a.createElement(R.a, {
					onConfirm: async () => {
						if (f && !U) try {
							L(!0), await d((({
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
									throw _.c.captureException(e), e
								}
								const {
									ok: a,
									errors: r
								} = i.body.data.deleteCustomEmoji;
								if (!a || r) {
									const e = new Error(`Failed to delete custom emoji: ${Object(w.a)(r)}`);
									throw _.c.captureException(e), e
								}
								return o(g({
									subredditId: t,
									emojiId: e
								})), a
							})({
								subredditId: t,
								emojiId: f.id
							})), T(null), m(Object(a.b)(1)), d(Object(y.f)({
								duration: 5e3,
								kind: B.b.SuccessMod,
								text: u.fbt._("Deleted custom emoji", null, {
									hk: "Y41sq"
								})
							}))
						} catch (e) {
							d(Object(y.f)({
								duration: 5e3,
								kind: B.b.Error,
								text: u.fbt._("Failed to delete custom emoji", null, {
									hk: "ngElG"
								})
							}))
						} finally {
							L(!1)
						}
					},
					onCancel: () => T(null),
					onClose: () => T(null),
					headerText: u.fbt._("Delete emoji", null, {
						hk: "27GEDb"
					}),
					modalText: n.a.createElement("div", {
						className: M.a.deleteModalContainer
					}, n.a.createElement("img", {
						className: M.a.deleteModalImage,
						src: f.emoji.path
					}), u.fbt._("Are you sure you want to delete this emoji?", null, {
						hk: "1bmNdu"
					})),
					actionText: u.fbt._("Delete", null, {
						hk: "4lt26q"
					}),
					cancelActionText: u.fbt._("Go back", null, {
						hk: "3zzMov"
					}),
					withOverlay: !0
				}))
			};
			var F = o("./src/reddit/components/RichTextEditor/emotes/Powerups/tooltip.m.less"),
				H = o.n(F);
			const {
				fbt: V
			} = o("./node_modules/fbt/lib/FbtPublic.js");
			t.default = ({
				editorState: e,
				onChange: t,
				onSetApi: o,
				subreddit: u
			}) => {
				const p = Object(r.a)(),
					[E, b] = Object(s.useState)(!1),
					h = Object(i.e)(e => Object(l.o)(e, {
						subredditId: u.id
					}));
				Object(s.useEffect)(() => {
					E && p(Object(a.i)())
				}, [E, p]);
				return u.id ? n.a.createElement(d.a, {
					className: H.a.toolbarTooltip,
					bodyClassName: H.a.tooltipBody,
					isVisible: E,
					setIsVisible: b,
					onSetApi: o,
					title: n.a.createElement(() => n.a.createElement(n.a.Fragment, null, n.a.createElement(c.a, {
						className: H.a.headingPowerupsBolt
					}), h ? V._("Unlocked with Powerups", null, {
						hk: "4am2RN"
					}) : V._("Unlock with Powerups", null, {
						hk: "Dbu9T"
					})), null)
				}, n.a.createElement("div", {
					className: H.a.body
				}, n.a.createElement(L, {
					subredditId: u.id,
					subredditName: u.name,
					onEmoteClicked: o => {
						const s = Object(m.g)(o, e);
						t(s), b(!1)
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
				id: e.id
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PowerupsEmotesTooltip.07bc7d4b516c95eb5a5c.js.map