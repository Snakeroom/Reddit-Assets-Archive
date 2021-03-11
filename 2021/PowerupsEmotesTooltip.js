// https://www.redditstatic.com/desktop2x/PowerupsEmotesTooltip.596a90a842796009789b.js
// Retrieved at 3/11/2021, 4:40:06 PM by Reddit Dataminer v1.0.0
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
				r = o("./src/reddit/components/Econ/Common/NewIcon/index.m.less"),
				c = o.n(r);
			const {
				fbt: a
			} = o("./node_modules/fbt/lib/FbtPublic.js"), d = ({
				className: e
			}) => n.a.createElement("span", {
				className: Object(i.a)(c.a.new, e)
			}, a._("NEW", null, {
				hk: "2P5bsM"
			}))
		},
		"./src/reddit/components/RichTextEditor/emotes/BaseTooltip.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				i = o("./src/lib/classNames/index.ts"),
				r = o("./src/reddit/components/RichTextEditor/Tooltip/index.tsx"),
				c = o("./src/reddit/components/RichTextEditor/Tooltip/getSelectionClientRect.ts"),
				a = o("./src/reddit/icons/svgs/Close/index.tsx"),
				d = o("./src/reddit/components/RichTextEditor/emotes/tooltipHeader.m.less"),
				l = o.n(d);
			const u = ({
				title: e,
				onClickClose: t
			}) => n.a.createElement("div", {
				className: l.a.header
			}, e, n.a.createElement("div", {
				className: l.a.spacer
			}), n.a.createElement(a.a, {
				className: l.a.closeIcon,
				onClick: t
			}));
			var m = o("./src/reddit/components/RichTextEditor/emotes/baseTooltip.m.less"),
				p = o.n(m);
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
					const e = this.props.isSearching ? Object(c.a)() : this.emoteButtonEl && this.emoteButtonEl.getBoundingClientRect();
					e && this.updateTooltipPosition({
						left: e.left + e.width / 2,
						top: e.top + 3
					})
				}
				render() {
					return n.a.createElement(r.b, {
						className: this.props.className,
						onSetPositionUpdater: e => this.updateTooltipPosition = e,
						trianglePlacement: r.a.Below
					}, this.props.isVisible && n.a.createElement("div", {
						className: Object(i.a)(p.a.tooltip, this.props.bodyClassName)
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
				return l
			}));
			var s, n = o("./node_modules/react/index.js"),
				i = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = o("./src/reddit/components/RichTextEditor/emotes/emoteButton.m.less"),
				d = o.n(a);
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(s || (s = {}));
			const l = ({
				className: e,
				disabled: t,
				id: o,
				imagePath: a,
				onClick: l,
				onKeyDown: u,
				title: m,
				onClickDelete: p
			}) => {
				const b = Object(n.useRef)(s.Outside),
					[h, E] = Object(n.useState)(!1);
				return i.a.createElement("div", {
					className: d.a.container,
					onMouseEnter: p ? () => {
						b.current = s.Inside, setTimeout(() => {
							b.current === s.Inside && E(!0)
						}, 2e3)
					} : void 0,
					onMouseLeave: p ? () => {
						b.current = s.Outside, E(!1)
					} : void 0
				}, h && i.a.createElement("button", {
					className: d.a.deleteButton,
					onClick: p
				}, i.a.createElement(c.b, {
					className: d.a.deleteIcon
				})), i.a.createElement("button", {
					className: Object(r.a)(d.a.emoteButton, e),
					disabled: t,
					id: o,
					title: m,
					onClick: l,
					onKeyDown: u,
					tabIndex: 1
				}, i.a.createElement("div", {
					className: d.a.emoteImage,
					style: {
						backgroundImage: `url(${a})`
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
				r = o("./src/reddit/helpers/trackers/powerups.ts"),
				c = o("./src/reddit/hooks/useTracking.ts"),
				a = o("./src/reddit/components/RichTextEditor/emotes/BaseTooltip.tsx"),
				d = o("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				l = (o("./node_modules/core-js/modules/web.dom.iterable.js"), o("./node_modules/react-redux/es/index.js")),
				u = o("./src/lib/classNames/index.ts"),
				m = o("./node_modules/uuid/v4.js"),
				p = o.n(m),
				b = o("./src/lib/makeActionCreator/index.ts"),
				h = o("./src/lib/sentry/index.ts"),
				E = o("./src/lib/uploadToS3/index.ts"),
				j = o("./src/reddit/endpoints/gold/powerups.ts"),
				w = o("./src/reddit/helpers/media/index.ts"),
				f = o("./src/reddit/actions/economics/powerups/constants.ts");
			const x = e => (null == e ? void 0 : e.map(e => e.message).join(", ")) || "",
				k = Object(b.a)(f.b),
				_ = Object(b.a)(f.c),
				O = e => async (t, o, {
					gqlContext: s
				}) => {
					const n = await Object(j.c)(s(), {
						input: e
					});
					if (n.error || !n.ok) throw new Error("Failed to get emoji upload lease");
					const {
						ok: i,
						errors: r,
						s3UploadLease: c
					} = n.body.data.generateCustomEmojiUploadLease;
					if (!i || r) throw new Error(`Failed to get emoji upload lease: ${x(r)}`);
					return c
				}, I = e => async (t, o, {
					gqlContext: s
				}) => {
					const n = await Object(j.a)(s(), {
						input: e
					});
					if (n.error || !n.ok) throw new Error("Failed to create custom emoji");
					const {
						ok: i,
						errors: r,
						emoji: c
					} = n.body.data.createCustomEmoji;
					if (!i || r) throw new Error(`Failed to create custom emoji: ${x(r)}`);
					const {
						subredditId: a
					} = e;
					return t(k({
						subredditId: a,
						emoji: c
					})), c
				}, T = async ({
					file: e,
					s3UploadLease: t
				}) => {
					const o = await Object(E.a)(e, t);
					if (!o.ok) throw new Error("Failed to upload custom emoji to S3");
					const s = o.body.PostResponse;
					return `https://${s.Bucket}.s3.amazonaws.com/${s.Key}`
				};
			var g = o("./src/reddit/actions/gold/powerups.ts"),
				C = o("./src/reddit/actions/toaster.ts"),
				y = o("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				N = o("./src/reddit/components/Econ/Common/NewIcon/index.tsx"),
				v = o("./src/reddit/controls/Button/index.tsx"),
				P = o("./src/reddit/controls/LoadingIcon/index.tsx"),
				S = o("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				R = o("./src/reddit/models/Toast/index.ts"),
				B = o("./src/reddit/selectors/gold/powerups.ts"),
				A = o("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				F = o("./src/reddit/components/RichTextEditor/emotes/EmoteButton.tsx"),
				D = o("./src/reddit/components/RichTextEditor/emotes/Powerups/emotesSection.m.less"),
				M = o.n(D);
			const L = ({
				onEmoteClicked: e,
				subredditId: t
			}) => {
				const o = Object(n.useRef)(null),
					a = Object(l.d)(),
					d = Object(c.a)(),
					[m, b] = Object(n.useState)(!1),
					[E, k] = Object(n.useState)(null),
					D = Object(l.e)(e => !!t && Object(A.a)(e, {
						subredditId: t
					})),
					L = Object(l.e)(e => Object(B.n)(e, {
						subredditId: t
					})),
					V = Object(l.e)(e => Object(B.g)(e, {
						subredditId: t
					})),
					U = Object(l.e)(e => Object(B.h)(e, {
						subredditId: t
					})),
					H = async (e, o = !1) => {
						try {
							return await a((({
								subredditId: e,
								file: t
							}) => async (o, s) => {
								try {
									const s = await Object(w.g)(t);
									if (!s) throw new Error("Cannot determine file mimeType");
									const {
										file: n,
										width: i,
										height: r
									} = await Object(w.m)(t, f.a), c = await o(O({
										subredditId: e,
										mimeType: s
									})), a = await T({
										file: n,
										s3UploadLease: c
									});
									return await o(I({
										subredditId: e,
										mimeType: s,
										url: a,
										x: i,
										y: r,
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
							return o ? H(e, !1) : {
								success: !1,
								error: s.message
							}
						}
					}, K = L ? s.fbt._("Your community has been powered up with emojis.", null, {
						hk: "1S9hhd"
					}) : s.fbt._("Powerup this community to unlock emojis.", null, {
						hk: "17izsl"
					}), q = D ? s.fbt._("Images under 128kb with a transparent background work the best.", null, {
						hk: "c6yXl"
					}) : K;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", null, i.a.createElement("article", null, i.a.createElement("header", {
					className: M.a.emotePackTitle
				}, i.a.createElement("span", null, D ? s.fbt._("Add up to 20 emojis", null, {
					hk: "4kR3Q8"
				}) : s.fbt._("Custom emojis", null, {
					hk: "3K8KMy"
				})), i.a.createElement(N.a, {
					className: M.a.newIcon
				})), i.a.createElement("header", {
					className: M.a.emotePackSubtitle
				}, q), i.a.createElement("div", {
					className: Object(u.a)(M.a.emotes, {
						[M.a.disabled]: !L
					})
				}, D && i.a.createElement(i.a.Fragment, null, i.a.createElement("input", {
					ref: o,
					className: M.a.uploadInput,
					onChange: async e => {
						b(!0);
						const t = e.currentTarget.files;
						if (null == t ? void 0 : t.length) {
							d(Object(r.a)(t.length));
							const e = await Promise.all([...t].map(e => H(e, !0))),
								n = e.reduce((e, t) => e + (t.success ? 1 : 0), 0);
							n > 0 && (d(Object(r.h)(n)), a(Object(C.e)({
								duration: 5e3,
								kind: R.b.SuccessMod,
								text: s.fbt._({
									"*": "Added {number} custom emojis",
									_1: "Added 1 custom emoji"
								}, [s.fbt._plural(n, "number")], {
									hk: "gf4gL"
								})
							})));
							const i = e.length - n;
							i > 0 && a(Object(C.e)({
								duration: 5e3,
								kind: R.b.Error,
								text: s.fbt._({
									"*": "Failed to upload {number} custom emojis",
									_1: "Failed to upload 1 custom emoji"
								}, [s.fbt._plural(i, "number")], {
									hk: "4bKuqU"
								})
							})), o.current && (o.current.value = ""), b(!1)
						}
					},
					type: "file",
					accept: "image/png,image/jpeg",
					multiple: !0
				}), m ? i.a.createElement("div", {
					className: M.a.loadingContainer
				}, i.a.createElement(P.a, {
					sizePx: 12,
					center: !0
				})) : i.a.createElement("button", {
					className: Object(u.a)(M.a.emoteButton, M.a.addButton),
					onClick: () => {
						var e;
						null === (e = o.current) || void 0 === e || e.click()
					},
					title: s.fbt._("Add Custom Emoji", null, {
						hk: "M580t"
					})
				}, i.a.createElement(S.a, {
					className: M.a.addIcon
				}))), V.map(t => i.a.createElement(F.a, {
					key: t.id,
					className: M.a.emoteButton,
					imagePath: t.emoji.path,
					onClick: () => e(t),
					onClickDelete: D ? () => k(t) : void 0
				})))), i.a.createElement("article", {
					className: M.a.freeEmotePack
				}, i.a.createElement("header", {
					className: M.a.emotePackTitle
				}, s.fbt._("Reddit emojis", null, {
					hk: "2k2TMN"
				})), i.a.createElement("div", {
					className: Object(u.a)(M.a.emotes, {
						[M.a.disabled]: !L
					})
				}, U.map(t => i.a.createElement(F.a, {
					key: t.id,
					className: M.a.emoteButton,
					imagePath: t.emoji.path,
					title: t.id,
					onClick: () => e(t),
					disabled: !L
				}))))), !L && i.a.createElement(v.q, {
					className: M.a.unlockButton,
					onClick: () => {
						d(Object(r.j)()), a(Object(g.b)())
					},
					priority: v.b.Primary
				}, s.fbt._("Unlock Emojis", null, {
					hk: "44jXM7"
				})), E && i.a.createElement(y.a, {
					onConfirm: async () => {
						if (E) try {
							await a((({
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
									ok: r,
									errors: c
								} = i.body.data.deleteCustomEmoji;
								if (!r || c) {
									const e = new Error(`Failed to delete custom emoji: ${x(c)}`);
									throw h.c.captureException(e), e
								}
								return o(_({
									subredditId: t,
									emojiId: e
								})), r
							})({
								subredditId: t,
								emojiId: E.id
							})), d(Object(r.b)(1)), k(null), a(Object(C.e)({
								duration: 5e3,
								kind: R.b.SuccessMod,
								text: s.fbt._("Deleted custom emoji", null, {
									hk: "Y41sq"
								})
							}))
						} catch (e) {
							a(Object(C.e)({
								duration: 5e3,
								kind: R.b.Error,
								text: s.fbt._("Failed to delete custom emoji", null, {
									hk: "ngElG"
								})
							}))
						}
					},
					onCancel: () => k(null),
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
			var V = o("./src/reddit/components/RichTextEditor/emotes/Powerups/tooltip.m.less"),
				U = o.n(V);
			t.default = ({
				editorState: e,
				onChange: t,
				onSetApi: o,
				subreddit: l
			}) => {
				const u = Object(c.a)(),
					[m, p] = Object(n.useState)(!1);
				Object(n.useEffect)(() => {
					m && u(Object(r.e)())
				}, [m, u]);
				return l.id ? i.a.createElement(a.a, {
					className: U.a.toolbarTooltip,
					bodyClassName: U.a.tooltipBody,
					isVisible: m,
					setIsVisible: p,
					onSetApi: o,
					title: s.fbt._("r/{communityName} Emojis", [s.fbt._param("communityName", l.name)], {
						hk: "3OrFxB"
					})
				}, i.a.createElement("div", {
					className: U.a.body
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
				addIcon: "R3xFUrQvsMx3gn2gqGv0w",
				uploadInput: "_183AY4WVSatH9Qe_MAXDE-",
				loadingContainer: "_2xoHnDYYs7peY_5Im4vQDn",
				emoteButton: "_2s68zj-4Pb6nTX2IUDzLkz",
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
		"./src/reddit/helpers/trackers/powerups.ts": function(e, t, o) {
			"use strict";
			o.d(t, "k", (function() {
				return r
			})), o.d(t, "i", (function() {
				return c
			})), o.d(t, "g", (function() {
				return a
			})), o.d(t, "f", (function() {
				return d
			})), o.d(t, "c", (function() {
				return l
			})), o.d(t, "d", (function() {
				return u
			})), o.d(t, "j", (function() {
				return m
			})), o.d(t, "e", (function() {
				return p
			})), o.d(t, "a", (function() {
				return b
			})), o.d(t, "h", (function() {
				return h
			})), o.d(t, "b", (function() {
				return E
			}));
			var s = o("./src/reddit/helpers/correlationIdTracker.ts"),
				n = o("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, o) => ({
					...n.defaults(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !1),
					profile: n.profile(e),
					subreddit: n.subreddit(e),
					powerups: {
						...n.subredditPowerups(e),
						freeCount: t,
						paidCount: o
					}
				}),
				r = e => t => ({
					source: e,
					action: "click",
					noun: "powerups_user_badge",
					...i(t),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				c = () => e => ({
					source: "postlist",
					action: "click",
					noun: "powerups_supporters_cta",
					...i(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				a = () => e => ({
					source: "powerups",
					action: "view",
					noun: "post_upsell",
					...i(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				d = () => e => ({
					source: "powerups",
					action: "click",
					noun: "post_upsell",
					...i(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				l = (e, t) => o => ({
					source: "powerups_modal",
					action: "click",
					noun: "benefit",
					...i(o, e, t)
				}),
				u = (e, t) => o => ({
					source: "powerups_modal",
					action: "view",
					noun: "purchase_step",
					...i(o, e, t)
				}),
				m = () => e => ({
					source: "powerups",
					action: "click",
					noun: "unlock_emojis",
					...i(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				p = () => e => ({
					source: "meta",
					action: "open",
					noun: "emote_picker",
					...i(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				b = e => t => ({
					source: "powerups",
					action: "click",
					noun: "add_custom_emojis",
					...i(t),
					powerups: {
						...n.subredditPowerups(t),
						emojiCount: e
					},
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				h = e => t => ({
					source: "powerups",
					action: "save",
					noun: "custom_emojis",
					...i(t),
					powerups: {
						...n.subredditPowerups(t),
						emojiCount: e
					},
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				E = (e = 1) => t => ({
					source: "powerups",
					action: "delete",
					noun: "custom_emojis",
					...i(t),
					powerups: {
						...n.subredditPowerups(t),
						emojiCount: e
					},
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PowerupsEmotesTooltip.596a90a842796009789b.js.map