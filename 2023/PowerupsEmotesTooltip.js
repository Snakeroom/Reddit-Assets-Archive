// https://www.redditstatic.com/desktop2x/PowerupsEmotesTooltip.439157737a7c98b1a8c8.js
// Retrieved at 1/18/2023, 11:10:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PowerupsEmotesTooltip"], {
		"./src/reddit/actions/economics/powerups/helpers.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return s
			}));
			const s = e => (null == e ? void 0 : e.map(e => e.message).join(", ")) || ""
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
					const k = Object(n.useRef)(s.Outside),
						[g, x] = Object(n.useState)(!1);
					return i.a.createElement("div", {
						className: Object(r.a)(c.a.container, o),
						onMouseEnter: j ? () => {
							k.current = s.Inside, setTimeout(() => {
								k.current === s.Inside && x(!0)
							}, f)
						} : void 0,
						onMouseLeave: j ? () => {
							k.current = s.Outside, x(!1)
						} : void 0
					}, g && i.a.createElement("button", {
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
		"./src/reddit/components/RichTextEditor/emotes/Powerups/Tooltip.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				i = o("./src/reddit/helpers/trackers/powerups.ts"),
				r = o("./src/reddit/hooks/useTracking.ts"),
				a = o("./src/reddit/components/RichTextEditor/emotes/BaseTooltip.tsx"),
				d = o("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				c = o("./node_modules/fbt/lib/FbtPublic.js"),
				l = o("./node_modules/react-redux/es/index.js"),
				u = o("./src/lib/classNames/index.ts"),
				m = o("./node_modules/uuid/dist/esm-browser/v4.js"),
				p = o("./src/lib/makeActionCreator/index.ts"),
				b = o("./src/lib/sentry/index.ts"),
				h = o("./src/lib/uploadToS3/index.ts"),
				E = o("./src/reddit/endpoints/gold/powerups/index.ts"),
				j = o("./src/reddit/helpers/media/index.ts"),
				f = o("./src/reddit/selectors/user.ts"),
				k = o("./src/reddit/actions/economics/powerups/constants.ts"),
				g = o("./src/reddit/actions/economics/powerups/helpers.ts");
			const x = Object(p.a)(k.b),
				w = Object(p.a)(k.c),
				C = e => {
					let {
						subredditId: t,
						file: o
					} = e;
					return async (e, s) => {
						var n;
						try {
							const i = s(),
								r = null === (n = Object(f.m)(i)) || void 0 === n ? void 0 : n.id;
							if (!r) throw new Error("Failed to get current user during emoji upload");
							const a = await Object(j.h)(o);
							if (!a) throw new Error("Cannot determine file mimeType");
							const {
								file: d,
								width: c,
								height: l
							} = await Object(j.p)(o, k.a), u = await e(I({
								subredditId: t,
								mimeType: a
							}, {
								userId: r
							})), p = await T({
								file: d,
								s3UploadLease: u
							}, {
								subredditId: t,
								userId: r
							});
							return await e(_({
								subredditId: t,
								mimeType: a,
								url: p,
								x: c,
								y: l,
								nonce: Object(m.a)()
							}))
						} catch (i) {
							throw b.c.captureException(i), i
						}
					}
				},
				I = (e, t) => async (o, s, n) => {
					let {
						gqlContext: i
					} = n;
					const r = await Object(E.c)(i(), {
						input: e
					});
					if (r.error || !r.ok) throw new Error(`Failed to get emoji upload lease. subredditId: ${e.subredditId}; userId: ${t.userId}`);
					const {
						ok: a,
						errors: d,
						s3UploadLease: c
					} = r.body.data.generateCustomEmojiUploadLease;
					if (!a || d) throw new Error(`Failed to get emoji upload lease: ${Object(g.a)(d)}. subredditId: ${e.subredditId}; userId: ${t.userId}`);
					return c
				}, _ = e => async (t, o, s) => {
					let {
						gqlContext: n
					} = s;
					const i = await Object(E.a)(n(), {
						input: e
					});
					if (i.error || !i.ok) throw new Error("Failed to create custom emoji");
					const {
						ok: r,
						errors: a,
						emoji: d
					} = i.body.data.createCustomEmoji;
					if (!r || a) throw new Error(`Failed to create custom emoji: ${Object(g.a)(a)}`);
					const c = d.emojiIcon.url;
					await Object(j.o)(c);
					const {
						subredditId: l
					} = e;
					return t(x({
						subredditId: l,
						emoji: d
					})), d
				}, T = async (e, t) => {
					let {
						file: o,
						s3UploadLease: s
					} = e, {
						subredditId: n,
						userId: i
					} = t;
					const r = await Object(h.a)(o, s);
					if (!r.ok) throw new Error(`Failed to upload custom emoji to S3. subredditId: ${n}; userId: ${i}`);
					const a = r.body.PostResponse;
					return `https://${a.Bucket}.s3.amazonaws.com/${a.Key}`
				};
			var O = o("./src/reddit/actions/toaster.ts"),
				v = o("./src/reddit/controls/LoadingIcon/index.tsx"),
				y = o("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				N = o("./src/reddit/models/Toast/index.ts"),
				B = o("./src/reddit/selectors/gold/powerups/index.ts"),
				R = o("./src/reddit/components/RichTextEditor/emotes/EmoteButton.tsx"),
				P = o("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				S = o("./src/reddit/components/RichTextEditor/emotes/Powerups/emotesSection.m.less"),
				A = o.n(S);
			const {
				fbt: U
			} = o("./node_modules/fbt/lib/FbtPublic.js"), D = e => {
				let {
					emojiUrl: t,
					onConfirm: o,
					onCancel: s,
					onClose: i
				} = e;
				return n.a.createElement(P.a, {
					onConfirm: o,
					onCancel: s,
					onClose: i,
					headerText: U._("Delete emoji", null, {
						hk: "27GEDb"
					}),
					modalText: n.a.createElement("p", {
						className: A.a.deleteModalContainer
					}, n.a.createElement("img", {
						className: A.a.deleteModalImage,
						src: t
					}), U._("Are you sure you want to delete this emoji?", null, {
						hk: "1bmNdu"
					})),
					actionText: U._("Delete", null, {
						hk: "4lt26q"
					}),
					cancelActionText: U._("Go back", null, {
						hk: "3zzMov"
					}),
					withOverlay: !0
				})
			};
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			const V = e => {
				let {
					onEmoteClicked: t,
					subredditId: o,
					subredditName: a,
					userCanUseEmojis: d
				} = e;
				const m = Object(l.d)(),
					p = Object(r.a)(),
					[h, j] = Object(s.useState)(null),
					f = () => j(null),
					[k, x] = Object(s.useState)(!1),
					I = Object(l.e)(e => Object(B.h)(e, {
						subredditId: o
					})),
					_ = Object(l.e)(e => Object(B.c)(e, {
						subredditId: o
					})),
					T = Object(l.e)(e => Object(B.d)(e, {
						subredditId: o
					})),
					{
						uploadInput: P,
						numUploading: S,
						maxEmojisUploaded: U,
						onFileChange: V,
						onClickUpload: L
					} = ((e, t, o, n, i, r) => {
						const a = Object(l.d)(),
							d = Object(s.useRef)(null),
							[c, u] = Object(s.useState)(0),
							m = async function(t) {
								let o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
									s = arguments.length > 2 ? arguments[2] : void 0;
								try {
									return await a(C({
										subredditId: e,
										file: t
									})), s(), {
										success: !0
									}
								} catch (n) {
									return o ? m(t, !1, s) : (s(), {
										success: !1,
										error: n.message
									})
								}
							}, p = () => u(e => e - 1);
						return {
							maxEmojisUploaded: t.length >= 20,
							maxEmojisUploading: t.length + c >= 20,
							onFileChange: async e => {
								const s = e.currentTarget.files;
								if (!(null == s ? void 0 : s.length)) return;
								if (s.length + t.length > 20) {
									const e = 20 - t.length;
									return null == o || o(e), void(d.current && (d.current.value = ""))
								}
								u(s.length), null == n || n(s.length);
								const a = await Promise.all([...s].map(e => m(e, !0, p))),
									c = a.reduce((e, t) => e + (t.success ? 1 : 0), 0);
								c > 0 && (null == i || i(c));
								const l = a.length - c;
								l > 0 && (null == r || r(l)), d.current && (d.current.value = ""), u(0)
							},
							numUploading: c,
							onClickUpload: () => {
								var e;
								null === (e = d.current) || void 0 === e || e.click()
							},
							uploadInput: d
						}
					})(o, _, e => {
						m(Object(O.f)({
							duration: 5e3,
							kind: N.b.Error,
							text: c.fbt._({
								"*": "You can only add {number} more custom emojis.",
								_1: "You can only add 1 more custom emoji."
							}, [c.fbt._plural(e, "number")], {
								hk: "2m6dmc"
							})
						}))
					}, e => {
						p(Object(i.a)(e, "powerups"))
					}, e => {
						p(Object(i.e)(e, "powerups")), m(Object(O.f)({
							duration: 5e3,
							kind: N.b.SuccessMod,
							text: c.fbt._({
								"*": "Added {number} custom emojis",
								_1: "Added 1 custom emoji"
							}, [c.fbt._plural(e, "number")], {
								hk: "gf4gL"
							})
						}))
					}, e => {
						m(Object(O.f)({
							duration: 5e3,
							kind: N.b.Error,
							text: c.fbt._({
								"*": "Failed to upload {number} custom emojis",
								_1: "Failed to upload 1 custom emoji"
							}, [c.fbt._plural(e, "number")], {
								hk: "4bKuqU"
							})
						}))
					}),
					F = U,
					M = I ? c.fbt._("Add up to 20 emojis", null, {
						hk: "4kR3Q8"
					}) : c.fbt._("Custom emojis", null, {
						hk: "3K8KMy"
					}),
					H = c.fbt._("Images under 128kb with a transparent background work the best.", null, {
						hk: "c6yXl"
					});
				return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", null, (I || _.length > 0) && n.a.createElement("article", null, n.a.createElement("header", {
					className: A.a.emotePackTitle
				}, n.a.createElement("span", null, M)), n.a.createElement("header", {
					className: A.a.emotePackSubtitle
				}, I && H), n.a.createElement("div", {
					className: Object(u.a)(A.a.emotes, {
						[A.a.disabled]: !d
					})
				}, I && n.a.createElement(n.a.Fragment, null, n.a.createElement("input", {
					ref: P,
					className: A.a.uploadInput,
					onChange: V,
					type: "file",
					accept: "image/png,image/jpeg",
					multiple: !0
				}), S ? n.a.createElement("div", {
					className: A.a.loadingContainer
				}, n.a.createElement(v.a, {
					sizePx: 12,
					center: !0
				})) : n.a.createElement("button", {
					className: Object(u.a)(A.a.emoteButton, A.a.addButton, {
						[A.a.addButtonDisabled]: F
					}),
					onClick: L,
					title: F ? c.fbt._("You've hit the maximum of 20 emojis", null, {
						hk: "3Qz2UG"
					}) : c.fbt._("Add Custom Emoji", null, {
						hk: "M580t"
					}),
					disabled: F
				}, n.a.createElement(y.a, {
					className: A.a.addIcon
				}))), _.map(e => n.a.createElement(R.a, {
					key: e.id,
					className: A.a.emoteButton,
					imageClassName: A.a.customEmoteImage,
					imagePath: e.emoji.path,
					onClick: () => t(e),
					onClickDelete: I ? () => j(e) : void 0
				})), [...Array(S)].map((e, t) => n.a.createElement("div", {
					key: t,
					className: Object(u.a)(A.a.emoteButton, A.a.placeholderEmoteButton)
				})))), n.a.createElement("article", {
					className: A.a.freeEmotePack
				}, n.a.createElement("header", {
					className: A.a.emotePackTitle
				}, c.fbt._("Reddit emojis", null, {
					hk: "2k2TMN"
				})), n.a.createElement("div", {
					className: Object(u.a)(A.a.emotes, {
						[A.a.disabled]: !d
					})
				}, T.map(e => n.a.createElement(R.a, {
					key: e.id,
					className: A.a.emoteButton,
					imagePath: e.emoji.path,
					title: e.id,
					onClick: () => t(e),
					disabled: !d
				}))))), h && n.a.createElement(D, {
					emojiUrl: h.emoji.path,
					onCancel: f,
					onClose: f,
					onConfirm: async () => {
						if (h && !k) try {
							x(!0), await m((e => {
								let {
									emojiId: t,
									subredditId: o
								} = e;
								return async (e, s, n) => {
									let {
										gqlContext: i
									} = n;
									const r = await Object(E.b)(i(), {
										input: {
											id: t
										}
									});
									if (r.error || !r.ok) {
										const e = new Error("Failed to delete custom emoji");
										throw b.c.captureException(e), e
									}
									const {
										ok: a,
										errors: d
									} = r.body.data.deleteCustomEmoji;
									if (!a || d) {
										const e = new Error(`Failed to delete custom emoji: ${Object(g.a)(d)}`);
										throw b.c.captureException(e), e
									}
									return e(w({
										subredditId: o,
										emojiId: t
									})), a
								}
							})({
								subredditId: o,
								emojiId: h.id
							})), f(), p(Object(i.b)(1, "powerups")), m(Object(O.f)({
								duration: 5e3,
								kind: N.b.SuccessMod,
								text: c.fbt._("Deleted custom emoji", null, {
									hk: "Y41sq"
								})
							}))
						} catch (e) {
							m(Object(O.f)({
								duration: 5e3,
								kind: N.b.Error,
								text: c.fbt._("Failed to delete custom emoji", null, {
									hk: "ngElG"
								})
							}))
						} finally {
							x(!1)
						}
					}
				}))
			};
			var L = o("./src/reddit/components/RichTextEditor/emotes/Powerups/tooltip.m.less"),
				F = o.n(L);
			const {
				fbt: M
			} = o("./node_modules/fbt/lib/FbtPublic.js");
			t.default = e => {
				let {
					editorState: t,
					onChange: o,
					onSetApi: c,
					subreddit: l,
					userCanUseEmojis: u
				} = e;
				const m = Object(r.a)(),
					[p, b] = Object(s.useState)(!1);
				Object(s.useEffect)(() => {
					p && m(Object(i.c)())
				}, [p, m]);
				return l.id ? n.a.createElement(a.a, {
					className: F.a.toolbarTooltip,
					bodyClassName: F.a.tooltipBody,
					isVisible: p,
					setIsVisible: b,
					onSetApi: c,
					title: n.a.createElement(() => M._("r/{subredditName} emojis", [M._param("subredditName", l.name)], {
						hk: "10hCgO"
					}), null)
				}, n.a.createElement("div", {
					className: F.a.body
				}, n.a.createElement(V, {
					subredditId: l.id,
					subredditName: l.name,
					onEmoteClicked: e => {
						const s = Object(d.g)(e, t);
						o(s), b(!1)
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PowerupsEmotesTooltip.439157737a7c98b1a8c8.js.map