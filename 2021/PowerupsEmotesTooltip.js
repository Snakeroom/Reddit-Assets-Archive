// https://www.redditstatic.com/desktop2x/PowerupsEmotesTooltip.c743cf84db58e61f9d96.js
// Retrieved at 7/20/2021, 12:40:05 PM by Reddit Dataminer v1.0.0
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
				return d
			}));
			const s = 120,
				n = "ON_CREATE_CUSTOM_EMOJI_SUCCESS",
				i = "ON_DELETE_CUSTOM_EMOJI_SUCCESS",
				a = "POWERUPS__SUBREDDIT_USER_ACHIEVEMENTS_LOADED",
				r = "POWERUPS__SUBREDDIT_USER_ACHIEVEMENT_PREFERENCE_UPDATE_REQUESTED",
				c = "POWERUPS__SUBREDDIT_USER_ACHIEVEMENT_PREFERENCE_UPDATED",
				d = "POWERUPS__SUBREDDIT_USER_ACHIEVEMENT_PREFERENCE_UPDATE_FAILED"
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
				const E = Object(n.useRef)(s.Outside),
					[h, _] = Object(n.useState)(!1);
				return i.a.createElement("div", {
					className: d.a.container,
					onMouseEnter: b ? () => {
						E.current = s.Inside, setTimeout(() => {
							E.current === s.Inside && _(!0)
						}, 750)
					} : void 0,
					onMouseLeave: b ? () => {
						E.current = s.Outside, _(!1)
					} : void 0
				}, h && i.a.createElement("button", {
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
				E = o("./src/lib/sentry/index.ts"),
				h = o("./src/lib/uploadToS3/index.ts"),
				_ = o("./src/reddit/endpoints/gold/powerups/index.ts"),
				j = o("./src/reddit/helpers/media/index.ts"),
				f = o("./src/reddit/actions/economics/powerups/constants.ts"),
				x = o("./src/reddit/actions/economics/powerups/helpers.ts");
			const k = Object(b.a)(f.b),
				T = Object(b.a)(f.c),
				g = e => async (t, o, {
					gqlContext: s
				}) => {
					const n = await Object(_.d)(s(), {
						input: e
					});
					if (n.error || !n.ok) throw new Error("Failed to get emoji upload lease");
					const {
						ok: i,
						errors: a,
						s3UploadLease: r
					} = n.body.data.generateCustomEmojiUploadLease;
					if (!i || a) throw new Error(`Failed to get emoji upload lease: ${Object(x.a)(a)}`);
					return r
				}, w = e => async (t, o, {
					gqlContext: s
				}) => {
					const n = await Object(_.a)(s(), {
						input: e
					});
					if (n.error || !n.ok) throw new Error("Failed to create custom emoji");
					const {
						ok: i,
						errors: a,
						emoji: r
					} = n.body.data.createCustomEmoji;
					if (!i || a) throw new Error(`Failed to create custom emoji: ${Object(x.a)(a)}`);
					const c = r.emojiIcon.url;
					await Object(j.m)(c);
					const {
						subredditId: d
					} = e;
					return t(k({
						subredditId: d,
						emoji: r
					})), r
				}, O = async ({
					file: e,
					s3UploadLease: t
				}) => {
					const o = await Object(h.a)(e, t);
					if (!o.ok) throw new Error("Failed to upload custom emoji to S3");
					const s = o.body.PostResponse;
					return `https://${s.Bucket}.s3.amazonaws.com/${s.Key}`
				};
			var I = o("./src/reddit/actions/gold/powerups.ts"),
				C = o("./src/reddit/actions/toaster.ts"),
				N = o("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				y = o("./src/reddit/components/Econ/Common/NewIcon/index.tsx"),
				R = o("./src/reddit/controls/Button/index.tsx"),
				S = o("./src/reddit/controls/LoadingIcon/index.tsx"),
				P = o("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				v = o("./src/reddit/models/Toast/index.ts"),
				D = o("./src/reddit/selectors/gold/powerups/index.ts"),
				B = o("./src/reddit/components/RichTextEditor/emotes/EmoteButton.tsx"),
				A = o("./src/reddit/components/RichTextEditor/emotes/Powerups/emotesSection.m.less"),
				U = o.n(A);
			const M = ({
				onEmoteClicked: e,
				subredditId: t
			}) => {
				const o = Object(n.useRef)(null),
					c = Object(l.d)(),
					d = Object(r.a)(),
					[u, b] = Object(n.useState)(0),
					[h, k] = Object(n.useState)(null),
					[A, M] = Object(n.useState)(!1),
					V = Object(l.e)(e => Object(D.r)(e, {
						subredditId: t
					})),
					L = Object(l.e)(e => Object(D.o)(e, {
						subredditId: t
					})),
					H = Object(l.e)(e => Object(D.g)(e, {
						subredditId: t
					})),
					F = Object(l.e)(e => Object(D.h)(e, {
						subredditId: t
					})),
					q = async (e, o = !1, s) => {
						try {
							return await c((({
								subredditId: e,
								file: t
							}) => async (o, s) => {
								try {
									const s = await Object(j.g)(t);
									if (!s) throw new Error("Cannot determine file mimeType");
									const {
										file: n,
										width: i,
										height: a
									} = await Object(j.n)(t, f.a), r = await o(g({
										subredditId: e,
										mimeType: s
									})), c = await O({
										file: n,
										s3UploadLease: r
									});
									return await o(w({
										subredditId: e,
										mimeType: s,
										url: c,
										x: i,
										y: a,
										nonce: p()()
									}))
								} catch (n) {
									throw E.c.captureException(n), n
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
					}, z = () => b(e => e - 1), K = L ? s.fbt._("Your community has been powered up with emojis.", null, {
						hk: "1S9hhd"
					}) : s.fbt._("Powerup this community to unlock emojis.", null, {
						hk: "17izsl"
					}), W = V ? s.fbt._("Images under 128kb with a transparent background work the best.", null, {
						hk: "c6yXl"
					}) : K, Q = H.length >= 20;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", null, (V || H.length > 0) && i.a.createElement("article", null, i.a.createElement("header", {
					className: U.a.emotePackTitle
				}, i.a.createElement("span", null, V ? s.fbt._("Add up to 20 emojis", null, {
					hk: "4kR3Q8"
				}) : s.fbt._("Custom emojis", null, {
					hk: "3K8KMy"
				})), i.a.createElement(y.a, {
					className: U.a.newIcon
				})), i.a.createElement("header", {
					className: U.a.emotePackSubtitle
				}, W), i.a.createElement("div", {
					className: Object(m.a)(U.a.emotes, {
						[U.a.disabled]: !L
					})
				}, V && i.a.createElement(i.a.Fragment, null, i.a.createElement("input", {
					ref: o,
					className: U.a.uploadInput,
					onChange: async e => {
						const t = e.currentTarget.files;
						if (!(null == t ? void 0 : t.length)) return;
						if (t.length + H.length > 20) {
							const e = 20 - H.length;
							return c(Object(C.f)({
								duration: 5e3,
								kind: v.b.Error,
								text: s.fbt._({
									"*": "You can only add {number} more custom emojis.",
									_1: "You can only add 1 more custom emoji."
								}, [s.fbt._plural(e, "number")], {
									hk: "2m6dmc"
								})
							})), void(o.current && (o.current.value = ""))
						}
						b(t.length), d(Object(a.a)(t.length));
						const n = await Promise.all([...t].map(e => q(e, !0, z))),
							i = n.reduce((e, t) => e + (t.success ? 1 : 0), 0);
						i > 0 && (d(Object(a.m)(i)), c(Object(C.f)({
							duration: 5e3,
							kind: v.b.SuccessMod,
							text: s.fbt._({
								"*": "Added {number} custom emojis",
								_1: "Added 1 custom emoji"
							}, [s.fbt._plural(i, "number")], {
								hk: "gf4gL"
							})
						})));
						const r = n.length - i;
						r > 0 && c(Object(C.f)({
							duration: 5e3,
							kind: v.b.Error,
							text: s.fbt._({
								"*": "Failed to upload {number} custom emojis",
								_1: "Failed to upload 1 custom emoji"
							}, [s.fbt._plural(r, "number")], {
								hk: "4bKuqU"
							})
						})), o.current && (o.current.value = ""), b(0)
					},
					type: "file",
					accept: "image/png,image/jpeg",
					multiple: !0
				}), u ? i.a.createElement("div", {
					className: U.a.loadingContainer
				}, i.a.createElement(S.a, {
					sizePx: 12,
					center: !0
				})) : i.a.createElement("button", {
					className: Object(m.a)(U.a.emoteButton, U.a.addButton, {
						[U.a.addButtonDisabled]: Q
					}),
					onClick: () => {
						var e;
						null === (e = o.current) || void 0 === e || e.click()
					},
					title: Q ? s.fbt._("You've hit the maximum of 20 emojis", null, {
						hk: "3Qz2UG"
					}) : s.fbt._("Add Custom Emoji", null, {
						hk: "M580t"
					}),
					disabled: Q
				}, i.a.createElement(P.a, {
					className: U.a.addIcon
				}))), H.map(t => i.a.createElement(B.a, {
					key: t.id,
					className: U.a.emoteButton,
					imageClassName: U.a.customEmoteImage,
					imagePath: t.emoji.path,
					onClick: () => e(t),
					onClickDelete: V ? () => k(t) : void 0
				})), [...Array(u)].map((e, t) => i.a.createElement("div", {
					key: t,
					className: Object(m.a)(U.a.emoteButton, U.a.placeholderEmoteButton)
				})))), i.a.createElement("article", {
					className: U.a.freeEmotePack
				}, i.a.createElement("header", {
					className: U.a.emotePackTitle
				}, s.fbt._("Reddit emojis", null, {
					hk: "2k2TMN"
				})), i.a.createElement("div", {
					className: Object(m.a)(U.a.emotes, {
						[U.a.disabled]: !L
					})
				}, F.map(t => i.a.createElement(B.a, {
					key: t.id,
					className: U.a.emoteButton,
					imagePath: t.emoji.path,
					title: t.id,
					onClick: () => e(t),
					disabled: !L
				}))))), !L && i.a.createElement(R.q, {
					className: U.a.unlockButton,
					onClick: () => {
						d(Object(a.p)()), c(Object(I.f)("emote_picker"))
					},
					priority: R.b.Primary
				}, s.fbt._("Unlock Emojis", null, {
					hk: "44jXM7"
				})), h && i.a.createElement(N.a, {
					onConfirm: async () => {
						if (h && !A) try {
							M(!0), await c((({
								emojiId: e,
								subredditId: t
							}) => async (o, s, {
								gqlContext: n
							}) => {
								const i = await Object(_.b)(n(), {
									input: {
										id: e
									}
								});
								if (i.error || !i.ok) {
									const e = new Error("Failed to delete custom emoji");
									throw E.c.captureException(e), e
								}
								const {
									ok: a,
									errors: r
								} = i.body.data.deleteCustomEmoji;
								if (!a || r) {
									const e = new Error(`Failed to delete custom emoji: ${Object(x.a)(r)}`);
									throw E.c.captureException(e), e
								}
								return o(T({
									subredditId: t,
									emojiId: e
								})), a
							})({
								subredditId: t,
								emojiId: h.id
							})), k(null), d(Object(a.b)(1)), c(Object(C.f)({
								duration: 5e3,
								kind: v.b.SuccessMod,
								text: s.fbt._("Deleted custom emoji", null, {
									hk: "Y41sq"
								})
							}))
						} catch (e) {
							c(Object(C.f)({
								duration: 5e3,
								kind: v.b.Error,
								text: s.fbt._("Failed to delete custom emoji", null, {
									hk: "ngElG"
								})
							}))
						} finally {
							M(!1)
						}
					},
					onCancel: () => k(null),
					onClose: () => k(null),
					headerText: s.fbt._("Delete emoji", null, {
						hk: "27GEDb"
					}),
					modalText: i.a.createElement("div", {
						className: U.a.deleteModalContainer
					}, i.a.createElement("img", {
						className: U.a.deleteModalImage,
						src: h.emoji.path
					}), s.fbt._("Are you sure you want to delete this emoji?", null, {
						hk: "1bmNdu"
					})),
					actionText: s.fbt._("Delete", null, {
						hk: "4lt26q"
					}),
					cancelActionText: s.fbt._("Go back", null, {
						hk: "3zzMov"
					}),
					withOverlay: !0
				}))
			};
			var V = o("./src/reddit/components/RichTextEditor/emotes/Powerups/tooltip.m.less"),
				L = o.n(V);
			t.default = ({
				editorState: e,
				onChange: t,
				onSetApi: o,
				subreddit: l
			}) => {
				const m = Object(r.a)(),
					[u, p] = Object(n.useState)(!1);
				Object(n.useEffect)(() => {
					u && m(Object(a.i)())
				}, [u, m]);
				return l.id ? i.a.createElement(c.a, {
					className: L.a.toolbarTooltip,
					bodyClassName: L.a.tooltipBody,
					isVisible: u,
					setIsVisible: p,
					onSetApi: o,
					title: s.fbt._("r/{communityName} Emojis", [s.fbt._param("communityName", l.name)], {
						hk: "3OrFxB"
					})
				}, i.a.createElement("div", {
					className: L.a.body
				}, i.a.createElement(M, {
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PowerupsEmotesTooltip.c743cf84db58e61f9d96.js.map