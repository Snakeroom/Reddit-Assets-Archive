// https://www.redditstatic.com/desktop2x/PowerupsEmotesTooltip.dab6d439f06116da7a1e.js
// Retrieved at 7/31/2023, 11:40:04 AM by Reddit Dataminer v1.0.0
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
				i = o.n(s),
				n = o("./src/lib/classNames/index.ts"),
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
				return i.a.createElement("div", {
					className: l.a.header
				}, t, i.a.createElement("div", {
					className: l.a.spacer
				}), i.a.createElement(d.a, {
					className: l.a.closeIcon,
					onClick: o
				}))
			};
			var m = o("./src/reddit/components/RichTextEditor/emotes/baseTooltip.m.less"),
				p = o.n(m);
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
					const e = this.props.isSearching ? Object(a.a)() : this.emoteButtonEl && this.emoteButtonEl.getBoundingClientRect();
					e && this.updateTooltipPosition({
						left: Math.round(e.left + e.width / 2),
						top: Math.round(e.top) + 3
					})
				}
				render() {
					return i.a.createElement(r.b, {
						className: this.props.className,
						onSetPositionUpdater: e => this.updateTooltipPosition = e,
						trianglePlacement: r.a.Below
					}, this.props.isVisible && i.a.createElement("div", {
						className: Object(n.a)(p.a.tooltip, this.props.bodyClassName),
						onClick: this.onTooltipBodyClick
					}, i.a.createElement(u, {
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
			var s, i = o("./node_modules/react/index.js"),
				n = o.n(i),
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
					const x = Object(i.useRef)(s.Outside),
						[k, g] = Object(i.useState)(!1);
					return n.a.createElement("div", {
						className: Object(r.a)(c.a.container, o),
						onMouseEnter: j ? () => {
							x.current = s.Inside, setTimeout(() => {
								x.current === s.Inside && g(!0)
							}, f)
						} : void 0,
						onMouseLeave: j ? () => {
							x.current = s.Outside, g(!1)
						} : void 0
					}, k && n.a.createElement("button", {
						className: c.a.deleteButton,
						onClick: j
					}, n.a.createElement(a.b, {
						className: c.a.deleteIcon
					})), n.a.createElement("button", {
						className: Object(r.a)(c.a.emoteButton, t),
						disabled: u,
						id: m,
						title: E,
						onClick: b,
						onKeyDown: h,
						tabIndex: 1
					}, n.a.createElement("div", {
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
				i = o.n(s),
				n = o("./src/reddit/helpers/trackers/powerups.ts"),
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
				E = o("./src/lib/makeGqlRequest/index.ts"),
				j = o("./src/redditGQL/operations/CreateCustomEmoji.json"),
				f = o("./src/redditGQL/operations/DeleteCustomEmoji.json"),
				x = o("./src/redditGQL/operations/GenerateCustomEmojiUploadLease.json");
			var k = o("./src/reddit/helpers/media/index.ts"),
				g = o("./src/reddit/selectors/user.ts"),
				C = o("./src/reddit/actions/economics/powerups/constants.ts"),
				w = o("./src/reddit/actions/economics/powerups/helpers.ts");
			const I = Object(p.a)(C.b),
				_ = Object(p.a)(C.c),
				T = e => {
					let {
						subredditId: t,
						file: o
					} = e;
					return async (e, s) => {
						var i;
						try {
							const n = s(),
								r = null === (i = Object(g.m)(n)) || void 0 === i ? void 0 : i.id;
							if (!r) throw new Error("Failed to get current user during emoji upload");
							const a = await Object(k.h)(o);
							if (!a) throw new Error("Cannot determine file mimeType");
							const {
								file: d,
								width: c,
								height: l
							} = await Object(k.p)(o, C.a), u = await e(O({
								subredditId: t,
								mimeType: a
							}, {
								userId: r
							})), p = await y({
								file: d,
								s3UploadLease: u
							}, {
								subredditId: t,
								userId: r
							});
							return await e(v({
								subredditId: t,
								mimeType: a,
								url: p,
								x: c,
								y: l,
								nonce: Object(m.a)()
							}))
						} catch (n) {
							throw b.c.captureException(n), n
						}
					}
				},
				O = (e, t) => async (o, s, i) => {
					let {
						gqlContext: n
					} = i;
					const r = await ((e, t) => Object(E.a)(e, {
						...x,
						variables: t
					}))(n(), {
						input: e
					});
					if (r.error || !r.ok) throw new Error(`Failed to get emoji upload lease. subredditId: ${e.subredditId}; userId: ${t.userId}`);
					const {
						ok: a,
						errors: d,
						s3UploadLease: c
					} = r.body.data.generateCustomEmojiUploadLease;
					if (!a || d) throw new Error(`Failed to get emoji upload lease: ${Object(w.a)(d)}. subredditId: ${e.subredditId}; userId: ${t.userId}`);
					return c
				}, v = e => async (t, o, s) => {
					let {
						gqlContext: i
					} = s;
					const n = await ((e, t) => Object(E.a)(e, {
						...j,
						variables: t
					}))(i(), {
						input: e
					});
					if (n.error || !n.ok) throw new Error("Failed to create custom emoji");
					const {
						ok: r,
						errors: a,
						emoji: d
					} = n.body.data.createCustomEmoji;
					if (!r || a) throw new Error(`Failed to create custom emoji: ${Object(w.a)(a)}`);
					const c = d.emojiIcon.url;
					await Object(k.o)(c);
					const {
						subredditId: l
					} = e;
					return t(I({
						subredditId: l,
						emoji: d
					})), d
				}, y = async (e, t) => {
					let {
						file: o,
						s3UploadLease: s
					} = e, {
						subredditId: i,
						userId: n
					} = t;
					const r = await Object(h.a)(o, s);
					if (!r.ok) throw new Error(`Failed to upload custom emoji to S3. subredditId: ${i}; userId: ${n}`);
					const a = r.body.PostResponse;
					return `https://${a.Bucket}.s3.amazonaws.com/${a.Key}`
				}, N = e => {
					let {
						emojiId: t,
						subredditId: o
					} = e;
					return async (e, s, i) => {
						let {
							gqlContext: n
						} = i;
						const r = await ((e, t) => Object(E.a)(e, {
							...f,
							variables: t
						}))(n(), {
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
							const e = new Error(`Failed to delete custom emoji: ${Object(w.a)(d)}`);
							throw b.c.captureException(e), e
						}
						return e(_({
							subredditId: o,
							emojiId: t
						})), a
					}
				};
			var B = o("./src/reddit/actions/toaster.ts"),
				R = o("./src/reddit/controls/LoadingIcon/index.tsx"),
				P = o("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				S = o("./src/reddit/models/Toast/index.ts"),
				L = o("./src/reddit/selectors/gold/powerups/index.ts"),
				U = o("./src/reddit/components/RichTextEditor/emotes/EmoteButton.tsx"),
				A = o("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				D = o("./src/reddit/components/RichTextEditor/emotes/Powerups/emotesSection.m.less"),
				V = o.n(D);
			const {
				fbt: F
			} = o("./node_modules/fbt/lib/FbtPublic.js"), M = e => {
				let {
					emojiUrl: t,
					onConfirm: o,
					onCancel: s,
					onClose: n
				} = e;
				return i.a.createElement(A.a, {
					onConfirm: o,
					onCancel: s,
					onClose: n,
					headerText: F._("Delete emoji", null, {
						hk: "27GEDb"
					}),
					modalText: i.a.createElement("p", {
						className: V.a.deleteModalContainer
					}, i.a.createElement("img", {
						className: V.a.deleteModalImage,
						src: t
					}), F._("Are you sure you want to delete this emoji?", null, {
						hk: "1bmNdu"
					})),
					actionText: F._("Delete", null, {
						hk: "4lt26q"
					}),
					cancelActionText: F._("Go back", null, {
						hk: "3zzMov"
					}),
					withOverlay: !0
				})
			};
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			const H = e => {
				let {
					onEmoteClicked: t,
					subredditId: o,
					subredditName: a,
					userCanUseEmojis: d
				} = e;
				const m = Object(l.d)(),
					p = Object(r.a)(),
					[b, h] = Object(s.useState)(null),
					E = () => h(null),
					[j, f] = Object(s.useState)(!1),
					x = Object(l.e)(e => Object(L.g)(e, {
						subredditId: o
					})),
					k = Object(l.e)(e => Object(L.b)(e, {
						subredditId: o
					})),
					g = Object(l.e)(e => Object(L.c)(e, {
						subredditId: o
					})),
					{
						uploadInput: C,
						numUploading: w,
						maxEmojisUploaded: I,
						onFileChange: _,
						onClickUpload: O
					} = ((e, t, o, i, n, r) => {
						const a = Object(l.d)(),
							d = Object(s.useRef)(null),
							[c, u] = Object(s.useState)(0),
							m = async function(t) {
								let o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
									s = arguments.length > 2 ? arguments[2] : void 0;
								try {
									return await a(T({
										subredditId: e,
										file: t
									})), s(), {
										success: !0
									}
								} catch (i) {
									return o ? m(t, !1, s) : (s(), {
										success: !1,
										error: i.message
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
								u(s.length), null == i || i(s.length);
								const a = await Promise.all([...s].map(e => m(e, !0, p))),
									c = a.reduce((e, t) => e + (t.success ? 1 : 0), 0);
								c > 0 && (null == n || n(c));
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
					})(o, k, e => {
						m(Object(B.f)({
							duration: 5e3,
							kind: S.b.Error,
							text: c.fbt._({
								"*": "You can only add {number} more custom emojis.",
								_1: "You can only add 1 more custom emoji."
							}, [c.fbt._plural(e, "number")], {
								hk: "2m6dmc"
							})
						}))
					}, e => {
						p(Object(n.a)(e, "powerups"))
					}, e => {
						p(Object(n.e)(e, "powerups")), m(Object(B.f)({
							duration: 5e3,
							kind: S.b.SuccessMod,
							text: c.fbt._({
								"*": "Added {number} custom emojis",
								_1: "Added 1 custom emoji"
							}, [c.fbt._plural(e, "number")], {
								hk: "gf4gL"
							})
						}))
					}, e => {
						m(Object(B.f)({
							duration: 5e3,
							kind: S.b.Error,
							text: c.fbt._({
								"*": "Failed to upload {number} custom emojis",
								_1: "Failed to upload 1 custom emoji"
							}, [c.fbt._plural(e, "number")], {
								hk: "4bKuqU"
							})
						}))
					}),
					v = I,
					y = x ? c.fbt._("Add up to 20 emojis", null, {
						hk: "4kR3Q8"
					}) : c.fbt._("Custom emojis", null, {
						hk: "3K8KMy"
					}),
					A = c.fbt._("Images under 128kb with a transparent background work the best.", null, {
						hk: "c6yXl"
					});
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", null, (x || k.length > 0) && i.a.createElement("article", null, i.a.createElement("header", {
					className: V.a.emotePackTitle
				}, i.a.createElement("span", null, y)), i.a.createElement("header", {
					className: V.a.emotePackSubtitle
				}, x && A), i.a.createElement("div", {
					className: Object(u.a)(V.a.emotes, {
						[V.a.disabled]: !d
					})
				}, x && i.a.createElement(i.a.Fragment, null, i.a.createElement("input", {
					ref: C,
					className: V.a.uploadInput,
					onChange: _,
					type: "file",
					accept: "image/png,image/jpeg",
					multiple: !0
				}), w ? i.a.createElement("div", {
					className: V.a.loadingContainer
				}, i.a.createElement(R.a, {
					sizePx: 12,
					center: !0
				})) : i.a.createElement("button", {
					className: Object(u.a)(V.a.emoteButton, V.a.addButton, {
						[V.a.addButtonDisabled]: v
					}),
					onClick: O,
					title: v ? c.fbt._("You've hit the maximum of 20 emojis", null, {
						hk: "3Qz2UG"
					}) : c.fbt._("Add Custom Emoji", null, {
						hk: "M580t"
					}),
					disabled: v
				}, i.a.createElement(P.a, {
					className: V.a.addIcon
				}))), k.map(e => i.a.createElement(U.a, {
					key: e.id,
					className: V.a.emoteButton,
					imageClassName: V.a.customEmoteImage,
					imagePath: e.emoji.path,
					onClick: () => t(e),
					onClickDelete: x ? () => h(e) : void 0
				})), [...Array(w)].map((e, t) => i.a.createElement("div", {
					key: t,
					className: Object(u.a)(V.a.emoteButton, V.a.placeholderEmoteButton)
				})))), i.a.createElement("article", {
					className: V.a.freeEmotePack
				}, i.a.createElement("header", {
					className: V.a.emotePackTitle
				}, c.fbt._("Reddit emojis", null, {
					hk: "2k2TMN"
				})), i.a.createElement("div", {
					className: Object(u.a)(V.a.emotes, {
						[V.a.disabled]: !d
					})
				}, g.map(e => i.a.createElement(U.a, {
					key: e.id,
					className: V.a.emoteButton,
					imagePath: e.emoji.path,
					title: e.id,
					onClick: () => t(e),
					disabled: !d
				}))))), b && i.a.createElement(M, {
					emojiUrl: b.emoji.path,
					onCancel: E,
					onClose: E,
					onConfirm: async () => {
						if (b && !j) try {
							f(!0), await m(N({
								subredditId: o,
								emojiId: b.id
							})), E(), p(Object(n.b)(1, "powerups")), m(Object(B.f)({
								duration: 5e3,
								kind: S.b.SuccessMod,
								text: c.fbt._("Deleted custom emoji", null, {
									hk: "Y41sq"
								})
							}))
						} catch (e) {
							m(Object(B.f)({
								duration: 5e3,
								kind: S.b.Error,
								text: c.fbt._("Failed to delete custom emoji", null, {
									hk: "ngElG"
								})
							}))
						} finally {
							f(!1)
						}
					}
				}))
			};
			var q = o("./src/reddit/components/RichTextEditor/emotes/Powerups/tooltip.m.less"),
				K = o.n(q);
			const {
				fbt: Q
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
					p && m(Object(n.c)())
				}, [p, m]);
				return l.id ? i.a.createElement(a.a, {
					className: K.a.toolbarTooltip,
					bodyClassName: K.a.tooltipBody,
					isVisible: p,
					setIsVisible: b,
					onSetApi: c,
					title: i.a.createElement(() => Q._("r/{subredditName} emojis", [Q._param("subredditName", l.name)], {
						hk: "10hCgO"
					}), null)
				}, i.a.createElement("div", {
					className: K.a.body
				}, i.a.createElement(H, {
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
			}));
			var s = o("./src/reddit/helpers/correlationIdTracker.ts"),
				i = o("./src/reddit/selectors/telemetry.ts");
			const n = (e, t, o) => ({
					...i.q(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !1),
					profile: i.V(e),
					subreddit: i.nb(e),
					powerups: {
						...i.sb(e),
						freeCount: t,
						paidCount: o
					}
				}),
				r = () => e => ({
					source: "meta",
					action: "open",
					noun: "emote_picker",
					...n(e)
				}),
				a = (e, t) => o => ({
					source: t,
					action: "click",
					noun: "add_custom_emojis",
					...n(o),
					powerups: {
						...i.sb(o),
						emojiCount: e
					}
				}),
				d = (e, t) => o => ({
					source: t,
					action: "save",
					noun: "custom_emojis",
					...n(o),
					powerups: {
						...i.sb(o),
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
						...n(o),
						powerups: {
							...i.sb(o),
							emojiCount: e
						}
					})
				},
				l = (e, t) => o => ({
					source: "meta",
					action: "open",
					noun: "gif_tooltip",
					subreddit: t ? i.ob(o, t) : void 0,
					...n(o),
					correlationId: e
				})
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
		"./src/redditGQL/operations/CreateCustomEmoji.json": function(e) {
			e.exports = JSON.parse('{"id":"e443629d50b0"}')
		},
		"./src/redditGQL/operations/DeleteCustomEmoji.json": function(e) {
			e.exports = JSON.parse('{"id":"c13d195ee7ca"}')
		},
		"./src/redditGQL/operations/GenerateCustomEmojiUploadLease.json": function(e) {
			e.exports = JSON.parse('{"id":"cbcafcbff9c6"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PowerupsEmotesTooltip.dab6d439f06116da7a1e.js.map