// https://www.redditstatic.com/desktop2x/ChatMessageInput.c0c227d5d529aecc4cf0.js
// Retrieved at 5/18/2022, 10:40:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatMessageInput"], {
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, r, s) {
				var n = r ? r.call(s, e, t) : void 0;
				if (void 0 !== n) return !!n;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var a = Object.keys(e),
					o = Object.keys(t);
				if (a.length !== o.length) return !1;
				for (var i = Object.prototype.hasOwnProperty.bind(t), c = 0; c < a.length; c++) {
					var d = a[c];
					if (!i(d)) return !1;
					var u = e[d],
						l = t[d];
					if (!1 === (n = r ? r.call(s, u, l, d) : void 0) || void 0 === n && u !== l) return !1
				}
				return !0
			}
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "h", (function() {
				return b
			})), r.d(t, "i", (function() {
				return h
			})), r.d(t, "j", (function() {
				return f
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/modal.ts"),
				a = r("./src/reddit/constants/modals.ts"),
				o = r("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const i = Object(s.a)(o.a),
				c = Object(s.a)(o.b),
				d = Object(s.a)(o.c),
				u = Object(s.a)(o.d),
				l = Object(s.a)(o.e),
				m = Object(s.a)(o.f),
				p = Object(s.a)(o.g),
				b = Object(s.a)(o.h),
				h = Object(s.a)(o.i),
				f = e => Object(n.h)(a.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/publicAccessNetwork/theaterSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return c
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return u
			}));
			var s = r("./node_modules/uuid/v4.js"),
				n = r.n(s),
				a = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const i = Object(a.a)(o.B),
				c = e => async t => {
					t(i(e))
				}, d = () => async e => {
					e(i({
						lastChatActivityUtcTs: Date.now()
					}))
				}, u = () => async e => {
					e(i({
						correlationId: n()()
					}))
				}
		},
		"./src/reddit/components/CommentsChat/Comment/AwardCountSpectacle/AwardCountAnimation/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_2SvhnxZBM2RoeILBCJaD5n",
				isAnimated: "VI293JaWpM6E2N7qA18GU",
				gildIcon: "_3rbcaT8iS8Ep2_0IS9bNaC",
				hide: "D6DLiE3WESXxUZt-3w5rF",
				show: "_2sw_2-66SMwc0my0qCmuFJ",
				awardingIcon: "_1ZO1lfp292pRk_NeA_KGVk",
				count: "_1v25u3hsWeYJihslYeyZ33"
			}
		},
		"./src/reddit/components/CommentsChat/MessageInput/AwardButton.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				a = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/controls/Button/index.tsx"),
				c = r("./src/reddit/helpers/correlationIdTracker.ts"),
				d = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./node_modules/react-redux/es/index.js")),
				u = r("./node_modules/reselect/es/index.js"),
				l = r("./src/lib/makeCommentsPageKey/index.ts"),
				m = r("./src/reddit/selectors/comments.ts"),
				p = r("./src/reddit/selectors/commentSelector.ts"),
				b = r("./src/reddit/selectors/posts.ts"),
				h = r("./src/reddit/selectors/communityAwards.ts"),
				f = r("./src/reddit/selectors/gold/awardIcon.ts"),
				g = r("./src/reddit/icons/fonts/Gift/index.tsx"),
				y = r("./src/reddit/components/CommentsChat/Comment/AwardCountSpectacle/AwardCountAnimation/index.m.less"),
				v = r.n(y);
			class C extends n.Component {
				render() {
					const {
						className: e,
						count: t,
						iconUrl: r,
						isAnimated: s
					} = this.props;
					return a.a.createElement("div", {
						className: Object(o.a)(v.a.container, e, {
							[v.a.isAnimated]: s
						})
					}, a.a.createElement(g.a, {
						className: v.a.gildIcon
					}), s && r && a.a.createElement("div", {
						className: v.a.awardingIcon,
						style: {
							backgroundImage: `url("${r}")`
						}
					}), t ? a.a.createElement("div", {
						className: v.a.count
					}, t) : null)
				}
			}
			var _ = Object(d.b)(() => Object(u.c)({
				iconUrl: (e, t) => {
					let {
						awardId: r
					} = t;
					if (!r) return;
					const s = Object(h.a)(e, r);
					return Object(f.a)(e, {
						award: s,
						minSize: 64
					})
				}
			}))(C);
			const E = Object(d.b)(() => Object(u.a)(e => e, (e, t) => {
					let {
						postId: r
					} = t;
					return Object(m.g)(e, {
						commentsPageKey: Object(l.a)(r)
					})
				}, b.G, (e, t) => {
					let {
						postId: r
					} = t;
					return Object(m.u)(e, {
						commentsPageKey: Object(l.a)(r)
					})
				}, (e, t, r, s) => {
					return {
						commentAwardIds: t.length ? t.reduce((t, r) => {
							const s = Object(p.b)(e, {
								commentId: r.id
							});
							if (s) {
								const {
									associatedAwardId: e
								} = s;
								if (e) return [...t, e]
							}
							return t
						}, []) : [],
						isFullyLoaded: s,
						postAwardCount: r.awardCountsById ? Object.values(r.awardCountsById).reduce((e, t) => e + t, 0) : r.allAwardings ? r.allAwardings.reduce((e, t) => e + t.count, 0) : 0
					}
				})),
				I = e => ({
					initialCommentAwardIds: e.isFullyLoaded ? [...e.commentAwardIds] : [],
					initialPostAwardCount: e.isFullyLoaded ? e.postAwardCount : 0,
					prevIsFullyLoaded: e.isFullyLoaded,
					prevPostId: e.postId
				});
			class O extends n.Component {
				constructor(e) {
					super(e), this.state = I(e)
				}
				static getDerivedStateFromProps(e, t) {
					return t.prevPostId !== e.postId || !t.prevIsFullyLoaded && e.isFullyLoaded ? I(e) : null
				}
				render() {
					const {
						initialPostAwardCount: e,
						initialCommentAwardIds: t
					} = this.state, {
						postAwardCount: r,
						commentAwardIds: s,
						className: n,
						isFullyLoaded: o
					} = this.props;
					if (!o) return a.a.createElement(_, {
						className: n,
						count: 0
					});
					const i = Math.max(r, e + s.length - t.length),
						c = s.length - 1,
						d = s[c],
						u = s.length !== t.length;
					return a.a.createElement(_, {
						awardId: d,
						className: n,
						count: i,
						isAnimated: u,
						key: c
					})
				}
			}
			var j = E(O),
				w = r("./src/reddit/components/CommentsChat/MessageInput/index.m.less"),
				A = r.n(w);
			t.a = e => {
				let {
					postId: t,
					showSubmitInsideTextArea: n,
					isLivestreaming: d,
					handleGiveAward: u,
					sendEvent: l
				} = e;
				return a.a.createElement(i.e, {
					className: Object(o.a)(A.a.ChatButton, {
						[A.a.LivestreamingChatButton]: d,
						[A.a.leftPad]: !n
					}),
					"aria-label": s.fbt._("give award", null, {
						hk: "1nXRWY"
					}),
					onClick: async e => {
						e.stopPropagation();
						const s = Object(c.d)(c.a.GildingFlow, !0);
						u(s);
						const {
							clickGildEvent: n,
							clickRpanGiveAward: a
						} = await Promise.resolve().then(r.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						l((d ? a : n)(t))
					}
				}, a.a.createElement(j, {
					postId: t
				}))
			}
		},
		"./src/reddit/components/CommentsChat/MessageInput/index.m.less": function(e, t, r) {
			e.exports = {
				v2: "_1wX7EkMv0Avw75sEfz3Qyx",
				FormWrapper: "mfKS0B5uqUX6PXcuSjTop",
				formWrapper: "mfKS0B5uqUX6PXcuSjTop",
				Form: "_76oPIY5CZD4GaQnn-06zO",
				form: "_76oPIY5CZD4GaQnn-06zO",
				RichTextEditor: "_2Zrjn5GTHiDwHULWCseamI",
				richTextEditor: "_2Zrjn5GTHiDwHULWCseamI",
				LivestreamingWrapper: "_1xV0i2uW_2xdNlBcbSEjpS",
				livestreamingWrapper: "_1xV0i2uW_2xdNlBcbSEjpS",
				inputLine: "_2rpcmnaHqKJnQeHI6-RZU8",
				submitButton: "_1CLqZSQ6jz0CFFB9he7ZtW",
				Editing: "CA5bQ-3lhJvw_xfOAOs4K",
				editing: "CA5bQ-3lhJvw_xfOAOs4K",
				SmallChatUserIcon: "_1qnAOkiRLjELVt-lGR1N2O",
				smallChatUserIcon: "_1qnAOkiRLjELVt-lGR1N2O",
				ChatButton: "BtTZ62LYQAh6Ezp2xw_4R",
				chatButton: "BtTZ62LYQAh6Ezp2xw_4R",
				LivestreamingChatButton: "_1pWwFWQOxI4UHucSbgy7Yr",
				livestreamingChatButton: "_1pWwFWQOxI4UHucSbgy7Yr",
				leftPad: "_2nnsSXE8H28qTe0cmiHlbb",
				Livestreaming: "_37GIMhyXqgW50qXsV8kJtg",
				livestreaming: "_37GIMhyXqgW50qXsV8kJtg",
				LivestreamingFocusableContent: "_3ICFMFY3nzpQ8TcBKQA6Cq",
				livestreamingFocusableContent: "_3ICFMFY3nzpQ8TcBKQA6Cq",
				insetSubmitButton: "_2-jlFgTYFKmNDKFKaq5x8Z",
				RichTextJson: "_2i9z4_kONlAq_kaKny5o8A",
				richTextJson: "_2i9z4_kONlAq_kaKny5o8A",
				Reply: "_1VGxfswi7Ejb0tozdhOhnJ",
				reply: "_1VGxfswi7Ejb0tozdhOhnJ",
				isLivestreaming: "_1pHXu-8skDLlMxqw7GXg9W",
				ReplyComment: "_3vHha2uHlOOSaJHExNUTkt",
				replyComment: "_3vHha2uHlOOSaJHExNUTkt",
				CloseIconWrap: "_3SwwKU0q7pRO0pohludkXl",
				closeIconWrap: "_3SwwKU0q7pRO0pohludkXl",
				ReplyAuthor: "_11cxPUL8P03UB2QLjnVQA1",
				replyAuthor: "_11cxPUL8P03UB2QLjnVQA1",
				isLivePostCommentV2: "_2XKKoOyCjVl8x5yDW_X0jG",
				ReplyAvatar: "YyoT3oARMLSlanYs7VFpr",
				replyAvatar: "YyoT3oARMLSlanYs7VFpr",
				icon: "PcmnI5P64G9FEvzKigvkP"
			}
		},
		"./src/reddit/components/CommentsChat/MessageInput/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/noop.js"),
				a = r.n(n),
				o = r("./node_modules/lodash/throttle.js"),
				i = r.n(o),
				c = r("./node_modules/react/index.js"),
				d = r.n(c),
				u = r("./node_modules/react-redux/es/index.js"),
				l = r("./node_modules/reselect/es/index.js"),
				m = r("./src/lib/classNames/index.ts"),
				p = r("./src/lib/lessComponent.tsx"),
				b = r("./src/reddit/models/PostDraft/index.ts"),
				h = r("./src/reddit/actions/comment/authoring.ts"),
				f = r("./src/reddit/actions/gold/modals.ts"),
				g = r("./src/reddit/actions/publicAccessNetwork/theaterSettings.ts"),
				y = r("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				v = r("./src/reddit/components/RichTextEditor/index.tsx"),
				C = r("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				_ = r("./src/reddit/components/RichTextJsonChatReply/index.tsx"),
				E = r("./src/reddit/controls/Button/index.tsx"),
				I = r("./src/reddit/controls/ErrorText/index.tsx"),
				O = r("./src/reddit/helpers/correlationIdTracker.ts"),
				j = r("./src/reddit/helpers/getRichTextContent/index.ts"),
				w = r("./src/reddit/helpers/richTextEditor/index.ts"),
				A = r("./src/reddit/helpers/trackers/rpan.ts"),
				S = r("./src/reddit/icons/svgs/Close/index.tsx"),
				x = r("./src/reddit/icons/svgs/CloseV2/index.tsx"),
				k = r("./src/reddit/icons/svgs/Send/index.tsx"),
				L = r("./src/reddit/models/PostCreationForm/index.ts"),
				P = r("./src/reddit/selectors/comments.ts"),
				N = r("./src/reddit/selectors/posts.ts"),
				F = r("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				D = r("./src/reddit/components/CommentsChat/MessageInput/AwardButton.tsx"),
				T = r("./src/reddit/components/CommentsChat/MessageInput/index.m.less"),
				B = r.n(T),
				R = r("./src/reddit/components/UserIcon/index.tsx"),
				M = r("./src/reddit/selectors/experiments/chat.ts");
			const U = {},
				V = 1e3,
				G = "chat_submission_from_rte",
				K = p.a.form("Form", B.a),
				W = p.a.wrapped(E.e, "ChatButton", B.a),
				H = p.a.div("CloseIconWrap", B.a),
				q = p.a.div("Reply", B.a),
				X = p.a.div("ReplyAuthor", B.a),
				J = p.a.div("ReplyAvatar", B.a),
				Q = p.a.div("ReplyComment", B.a),
				Y = p.a.wrapped(v.a, "RichTextEditor", B.a),
				z = p.a.wrapped(y.a, "SmallChatUserIcon", B.a),
				Z = Object(u.b)(() => Object(l.c)({
					draft: P.i,
					errorMsgs: P.L,
					hasError: P.v,
					isLivePostCommentV2Enabled: M.b,
					liveStreamingChatCharacterLimit: e => {
						const t = Object(F.a)(e);
						return t ? t - 3 : 197
					},
					pending: (e, t) => e.features.comments.submit.pending[t.draftKey],
					post: N.G
				}), (e, t) => {
					let {
						isEditing: r,
						comment: s,
						commentsPageKey: n,
						draftKey: a,
						postId: o,
						replyComment: i,
						isLivestreaming: c,
						scrollToBottom: d
					} = t;
					return {
						dispatchSubmit: async (t, i, u) => {
							r && s ? await e(Object(h.j)({
								id: s.id,
								commentsPageKey: n,
								draftKey: a,
								formData: t
							})) : u ? e(Object(h.n)({
								commentsPageKey: n,
								draftKey: a,
								parentCommentDepth: u.depth,
								parentCommentId: u.id,
								formData: t,
								editorMode: i
							})) : await e(Object(h.p)({
								postId: o,
								commentsPageKey: n,
								draftKey: a,
								formData: t,
								editorMode: i,
								disableAutofocus: !0,
								isLiveStreaming: c
							})), d && d()
						},
						handleGiveAward: t => e(Object(f.d)({
							correlationId: t,
							thingId: o
						})),
						onCancelEdit: () => s && e(Object(h.c)({
							commentId: s.id,
							commentsPageKey: n
						})),
						onLivestreamingChatMessageEdit: () => e(Object(g.a)()),
						closeReply: () => i && e(Object(h.a)({
							parentCommentId: i.id,
							commentsPageKey: n
						}))
					}
				});
			class $ extends d.a.Component {
				constructor(e) {
					super(e), this.focusOnForm = () => this.editor && this.editor.focus(), this.setRTEComponentRef = e => this.editor = e, this.handleCancel = e => {
						e.preventDefault(), this.props.onCancelEdit && this.props.onCancelEdit()
					}, this.handleChange = (e, t) => {
						this.state.hasChanged && (t = this.state.hasChanged);
						const {
							isLivestreaming: r,
							liveStreamingChatCharacterLimit: s
						} = this.props, n = !!r && e.isBound && e.editorState.getCurrentContent().getPlainText().length > s;
						t && e.isBound && (t = Boolean(t && e.editorState.getCurrentContent().getPlainText().trim())), this.setState(() => ({
							showError: n,
							rteState: e,
							hasChanged: t
						})), this.props.isLivestreaming && t && this.passChangeToLivestreaming()
					}, this.handleFocus = () => {
						this.props.isLivestreaming && this.passChangeToLivestreaming(), this.props.onFocusMessageInput && this.props.onFocusMessageInput()
					}, this.passChangeToLivestreaming = i()(() => this.props.onLivestreamingChatMessageEdit(), V, {
						leading: !1,
						trailing: !0
					}), this.onClickGiveAward = async e => {
						e.stopPropagation();
						const {
							handleGiveAward: t,
							isLivestreaming: s,
							postId: n,
							sendEvent: a
						} = this.props;
						t(Object(O.d)(O.a.GildingFlow, !0));
						const {
							clickGildEvent: o,
							clickRpanGiveAward: i
						} = await Promise.resolve().then(r.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						a((s ? i : o)(n))
					}, this.handleCloseReply = e => {
						e.preventDefault(), this.props.closeReply()
					}, this.handleSubmit = e => {
						e.preventDefault(), this.onSubmit()
					}, this.onSubmit = () => {
						if (this.canSubmit()) {
							const e = {
								commentMode: L.i.RICH_TEXT,
								draftType: b.c.replyToComment,
								rteState: this.state.rteState,
								hasFocus: !0,
								text: ""
							};
							this.cleanInputForm(), this.props.dispatchSubmit(e, L.i.RICH_TEXT, this.props.replyComment)
						}
						this.props.isLivestreaming && this.props.sendEvent(Object(A.z)(this.props.postId))
					}, this.canSubmit = () => Boolean(!this.props.pending && this.state.hasChanged && !this.state.showError), this.state = {
						hasChanged: !1,
						showError: e.hasError,
						rteState: e.isEditing && e.comment ? C.a.createInitial(e.comment.media.richtextContent) : C.a.createInitial()
					}
				}
				isReplyCommentChanged(e) {
					const {
						replyComment: t
					} = this.props;
					return (e.replyComment && e.replyComment.id) !== (t && t.id)
				}
				shouldComponentUpdate(e, t) {
					return t.rteState.editorKey !== this.state.rteState.editorKey || t.hasChanged !== this.state.hasChanged || t.showError !== this.state.showError || e.pending !== this.props.pending || e.postId !== this.props.postId || this.isReplyCommentChanged(e)
				}
				UNSAFE_componentWillReceiveProps(e) {
					!this.props.isEditing && this.props.draft && this.props.draft.rteState && e.draft && null === e.draft.rteState && this.cleanInputForm(), this.isReplyCommentChanged(e) && e.replyComment && this.focusOnForm(), e.hasError !== this.props.hasError && this.setState({
						showError: e.hasError
					})
				}
				componentDidUpdate(e) {
					e.pending && !this.props.pending && this.focusOnForm()
				}
				cleanInputForm() {
					this.setState({
						rteState: C.a.createInitial()
					})
				}
				render() {
					const {
						isV2: e,
						errorMsgs: t,
						isEditing: r,
						isLivestreaming: n,
						isLivePostCommentV2Enabled: o,
						sendEvent: i,
						handleGiveAward: c,
						liveStreamingChatCharacterLimit: u,
						pending: l,
						post: p,
						postId: b,
						replyComment: h
					} = this.props, f = n ? s.fbt._("Send message ({characterLimit} character limit)", [s.fbt._param("characterLimit", u.toLocaleString())], {
						hk: "RIcb6"
					}) : s.fbt._("Send a message (use the Enter key)", null, {
						hk: "3yojgj"
					}), g = p.isGildable && n && !r, y = n;
					return d.a.createElement("div", {
						className: Object(m.a)(B.a.FormWrapper, {
							[B.a.LivestreamingWrapper]: n,
							[B.a.v2]: e
						})
					}, !r && h && d.a.createElement(q, {
						className: Object(m.a)({
							[B.a.isLivestreaming]: n,
							[B.a.isLivePostCommentV2]: o
						})
					}, d.a.createElement(Q, {
						onClick: this.handleCloseReply
					}, d.a.createElement(X, null, o && d.a.createElement(J, null, d.a.createElement(R.a, {
						className: Object(m.a)(B.a.icon),
						iconUrl: h.profileImage || h.authorIconImage,
						userName: h.author,
						isNSFW: Boolean(h.profileOver18 || h.authorIconIsNSFW)
					})), s.fbt._("Replying to u/ {username}:", [s.fbt._param("username", h.author)], {
						hk: "2YZre5"
					})), d.a.createElement(_.a, {
						className: B.a.RichTextJson,
						key: `rich-text-${h.id}`,
						content: Object(j.a)(h),
						rtJsonElementProps: U
					}), d.a.createElement(H, null, o ? d.a.createElement(x.a, null) : d.a.createElement(S.a, null)))), d.a.createElement("div", {
						className: B.a.inputLine
					}, d.a.createElement(K, {
						className: Object(m.a)({
							[B.a.Editing]: r
						}),
						onSubmit: this.handleSubmit,
						onReset: this.handleCancel
					}, !e && d.a.createElement(ee, {
						isEditing: !!r,
						isLivestreaming: !!n
					}), d.a.createElement(Y, {
						className: Object(m.a)(B.a.RichTextEditor, {
							[B.a.Livestreaming]: n && !r,
							[B.a.Editing]: !n && r
						}),
						focusableContentRTEClassName: Object(m.a)({
							[B.a.LivestreamingFocusableContent]: n && !r
						}),
						dataTestId: G,
						editorType: w.a.Comment,
						initialMinHeight: 20,
						initialHeight: void 0,
						rteState: this.state.rteState,
						rteRef: this.setRTEComponentRef,
						onChange: this.handleChange,
						onFocus: this.handleFocus,
						onSubmit: this.onSubmit,
						placeholderText: f,
						readOnly: l,
						showSubmitButton: y && !this.state.showError,
						submitButtonClassName: Object(m.a)(B.a.insetSubmitButton, B.a.submitButton),
						submitOnEnter: !0,
						trackToolbarClick: a.a,
						hideToolbar: !0,
						noBorder: !0,
						isChatPost: !0
					}), r && d.a.createElement(W, {
						className: Object(m.a)(B.a.ChatButton, {
							[B.a.LivestreamingResetButton]: n
						}),
						type: "reset"
					}, d.a.createElement(S.a, null)), !y && d.a.createElement(W, {
						className: Object(m.a)(B.a.ChatButton, {
							[B.a.LivestreamingChatButton]: n && !r,
							[B.a.LivestreamingResetButton]: n && r
						}),
						type: "submit",
						disabled: !this.canSubmit(),
						"aria-label": s.fbt._("send a message", null, {
							hk: "4bL65Y"
						})
					}, d.a.createElement(k.a, null))), g && d.a.createElement(D.a, {
						showSubmitInsideTextArea: y,
						isLivestreaming: n,
						sendEvent: i,
						postId: b,
						handleGiveAward: c
					})), this.state.showError && Object(I.c)(t.length ? t : [`Input text must be less than ${u} characters`]))
				}
			}
			const ee = e => {
				let {
					isEditing: t,
					isLivestreaming: r
				} = e;
				return r ? null : t ? d.a.createElement(z, {
					height: 20,
					width: 20
				}) : d.a.createElement(y.a, {
					height: 25,
					width: 25
				})
			};
			t.default = Z($)
		},
		"./src/reddit/components/FocusableContent/index.m.less": function(e, t, r) {
			e.exports = {
				FocusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				focusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				isFocused: "_3F2J0fSnCI3ZvF_tBSaV0s",
				noBorder: "_1CpUVAt2tGEwaaBV3nZNJs"
			}
		},
		"./src/reddit/components/FocusableContent/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/lib/lessComponent.tsx"),
				i = r("./src/reddit/components/FocusableContent/index.m.less"),
				c = r.n(i);
			t.a = o.a.wrapped(e => n.a.createElement("div", {
				className: Object(a.a)(e.className, {
					[c.a.isFocused]: e.isFocused,
					[c.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", c.a)
		},
		"./src/reddit/constants/chat.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var s;
			! function(e) {
				e.None = "none", e.Compact = "compact", e.Full = "full_screen"
			}(s || (s = {}));
			var n;
			! function(e) {
				e.SubredditChatNotifcationFtux = "chat_subreddit_notification_ftux"
			}(n || (n = {}))
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "H", (function() {
				return u
			})), r.d(t, "i", (function() {
				return l
			})), r.d(t, "j", (function() {
				return m
			})), r.d(t, "D", (function() {
				return p
			})), r.d(t, "A", (function() {
				return b
			})), r.d(t, "E", (function() {
				return h
			})), r.d(t, "C", (function() {
				return f
			})), r.d(t, "B", (function() {
				return g
			})), r.d(t, "u", (function() {
				return y
			})), r.d(t, "v", (function() {
				return v
			})), r.d(t, "x", (function() {
				return C
			})), r.d(t, "r", (function() {
				return _
			})), r.d(t, "p", (function() {
				return E
			})), r.d(t, "q", (function() {
				return I
			})), r.d(t, "o", (function() {
				return O
			})), r.d(t, "z", (function() {
				return j
			})), r.d(t, "s", (function() {
				return w
			})), r.d(t, "y", (function() {
				return A
			})), r.d(t, "G", (function() {
				return S
			})), r.d(t, "t", (function() {
				return x
			})), r.d(t, "c", (function() {
				return k
			})), r.d(t, "n", (function() {
				return L
			})), r.d(t, "k", (function() {
				return P
			})), r.d(t, "b", (function() {
				return N
			})), r.d(t, "d", (function() {
				return F
			})), r.d(t, "e", (function() {
				return D
			})), r.d(t, "w", (function() {
				return T
			})), r.d(t, "F", (function() {
				return B
			})), r.d(t, "f", (function() {
				return R
			})), r.d(t, "l", (function() {
				return M
			})), r.d(t, "m", (function() {
				return U
			})), r.d(t, "g", (function() {
				return V
			})), r.d(t, "h", (function() {
				return G
			}));
			var s, n = r("./src/reddit/constants/chat.ts"),
				a = r("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				o = r("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(s || (s = {}));
			const i = (e, t) => {
					if (t) {
						const r = o.A(e, t.post.id),
							s = o.H(e, t.post.id),
							n = o.gb(e);
						if (t.post.authorInfo && s && (s.authorId = t.post.authorInfo.id), r) {
							r.streamPublicId = t.stream.stream_id, r.id = t.stream.stream_id;
							const s = Object(a.j)(e, {
								streamIdFromPath: t.post.id
							});
							s === a.a.LIVE ? r.type = "stream_live" : s === a.a.VOD ? r.type = "stream_vod" : s === a.a.UNAVAILABLE && (r.type = "stream_unavailable")
						}
						return {
							post: s,
							media: r,
							subreddit: n
						}
					}
					return {
						subreddit: o.gb(e)
					}
				},
				c = (e, t, r) => {
					if (!t || !r) return;
					const s = Object(a.j)(e, {
							streamIdFromPath: t.post.id
						}),
						o = t.chat_disabled || r.chatState === n.a.None;
					return {
						id: r.id,
						sessionDurationMs: r.sessionDurationMs,
						watchDurationMs: r.watchDurationMs,
						heartbeatDurationMs: r.heartbeatDurationMs,
						isLive: s === a.a.LIVE,
						playheadOffsetMs: r.playheadOffsetMs,
						timestampMs: r.timestampMs,
						startTimeMs: r.startTimeMs,
						volume: r.volume,
						chatState: o ? n.a.None : n.a.Compact,
						scrubbingStartMs: r.scrubbingStartMs,
						scrubbingEndMs: r.scrubbingEndMs,
						playerType: r.playerType
					}
				},
				d = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				u = () => e => ({
					source: "stream_du",
					action: "view",
					noun: "stream_du",
					...i(e)
				}),
				l = () => e => ({
					source: "stream_du",
					action: "click",
					noun: "show_less",
					...i(e)
				}),
				m = (e, t) => r => ({
					source: "stream_du",
					action: "click",
					noun: "enlarge",
					...i(r, e),
					actionInfo: o.d(r, {
						position: t || 0
					})
				}),
				p = (e, t) => r => ({
					source: "stream_player",
					action: "fail",
					noun: "stream",
					playback: c(r, e, t),
					...d(r),
					...e && {
						...i(r, e)
					}
				}),
				b = (e, t) => r => ({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: c(r, e, t),
					...d(r),
					...i(r, e)
				}),
				h = (e, t) => r => ({
					source: "stream_player",
					action: "play",
					noun: "stream",
					playback: c(r, e, t),
					...d(r),
					...i(r, e)
				}),
				f = (e, t) => r => ({
					source: "stream_player",
					action: "complete",
					noun: "stream",
					playback: c(r, e, t),
					...d(r),
					...i(r, e)
				}),
				g = (e, t, r) => s => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(s, t, r),
					...d(s),
					...i(s, t)
				}),
				y = (e, t, r, s) => n => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(n, t, r),
					...d(n),
					...i(n, t),
					actionInfo: o.d(n, {
						referralId: s
					})
				}),
				v = (e, t, r) => s => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(s, t, r),
					...d(s),
					...i(s, t)
				}),
				C = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "stream_from_desktop",
					...d(t),
					...i(t, e)
				}),
				_ = (e, t) => r => ({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: c(r, e, t),
					...d(r),
					...i(r, e)
				}),
				E = (e, t) => r => ({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: c(r, e, t),
					...d(r),
					...i(r, e)
				}),
				I = (e, t) => r => ({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: c(r, e, t),
					...d(r),
					...i(r, e)
				}),
				O = (e, t) => r => ({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: c(r, e, t),
					...i(r, e)
				}),
				j = e => t => {
					const r = Object(a.l)(t, e);
					return {
						source: "stream_chat",
						action: "click",
						noun: "send_chat",
						...i(t, r)
					}
				},
				w = (e, t, r) => s => ({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: c(s, t, r),
					...i(s, t)
				}),
				A = (e, t) => r => ({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: c(r, e, t),
					...d(r)
				}),
				S = e => t => ({
					source: "post",
					action: "view",
					noun: "post",
					profile: o.Q(t),
					screen: o.Y(t),
					...i(t, e)
				}),
				x = e => t => {
					const r = i(t, e);
					return {
						source: "post",
						action: "consume",
						noun: "post",
						profile: o.Q(t),
						screen: o.Y(t),
						...r
					}
				},
				k = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "follow",
					...i(t, e)
				}),
				L = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "unfollow",
					...i(t, e)
				}),
				P = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "subscribe",
					...i(t, e),
					targetSubreddit: o.gb(t)
				}),
				N = (e, t) => r => ({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: c(r, e, t),
					...i(r, e)
				}),
				F = (e, t) => r => ({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: c(r, e, t),
					...i(r, e)
				}),
				D = (e, t) => r => ({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: c(r, e, t),
					...i(r, e)
				}),
				T = (e, t) => r => ({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: c(r, e, t),
					...i(r, e)
				}),
				B = (e, t) => r => ({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: c(r, e, t),
					...i(r, e)
				}),
				R = (e, t) => r => ({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: c(r, e, t),
					...i(r, e)
				}),
				M = (e, t) => r => ({
					source: "stream_player",
					action: "swipe",
					noun: "next",
					playback: c(r, e, t),
					...i(r, e),
					...d(r)
				}),
				U = (e, t) => r => ({
					source: "stream_player",
					action: "swipe",
					noun: "previous",
					playback: c(r, e, t),
					...i(r, e),
					...d(r)
				}),
				V = (e, t) => r => ({
					source: "rpanstudio_banner",
					action: "click",
					noun: e,
					...i(r, t),
					...d(r)
				}),
				G = (e, t) => r => ({
					source: "rpanstudio_modal",
					action: "click",
					noun: e,
					...i(r, t),
					...d(r)
				})
		},
		"./src/reddit/icons/svgs/CloseV2/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", a({
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("path", {
				d: "M11.065 1.46521L10.5346 0.934814L5.99977 5.46961L1.46497 0.934814L0.93457 1.46521L5.46937 6.00001L0.93457 10.5348L1.46497 11.0652L5.99977 6.53041L10.5346 11.0652L11.065 10.5348L6.53017 6.00001L11.065 1.46521Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var s, n, a, o;
			r.d(t, "b", (function() {
					return n
				})), r.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(s || (s = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(n || (n = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(a || (a = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(o || (o = {}))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, r) {
			"use strict";
			var s;

			function n(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			r.d(t, "a", (function() {
					return s
				})), r.d(t, "b", (function() {
					return n
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(s || (s = {}))
		},
		"./src/reddit/models/PublicAccessNetwork/index.ts": function(e, t, r) {
			"use strict";
			var s;
			r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.NOT_STARTED = "NOT_STARTED", e.PUBLISHED = "PUBLISHED", e.IS_LIVE = "IS_LIVE", e.DISCONNECTED = "DISCONNECTED", e.KILLED = "KILLED", e.PURGED = "PURGED", e.ENDED = "ENDED"
				}(s || (s = {}))
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, r) {
			"use strict";
			r.d(t, "l", (function() {
				return E
			})), r.d(t, "m", (function() {
				return j
			})), r.d(t, "i", (function() {
				return S
			})), r.d(t, "d", (function() {
				return P
			})), r.d(t, "h", (function() {
				return N
			})), r.d(t, "k", (function() {
				return F
			})), r.d(t, "c", (function() {
				return D
			})), r.d(t, "f", (function() {
				return T
			})), r.d(t, "a", (function() {
				return M
			})), r.d(t, "j", (function() {
				return U
			})), r.d(t, "b", (function() {
				return V
			})), r.d(t, "e", (function() {
				return G
			})), r.d(t, "g", (function() {
				return K
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/lib/objectSelector/index.ts"),
				a = r("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				o = r("./src/reddit/models/PublicAccessNetwork/index.ts"),
				i = r("./src/reddit/selectors/posts.ts"),
				c = r("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				d = r("./node_modules/lodash/memoize.js");
			const u = e => e.publicAccessNetwork.listings,
				l = r.n(d)()(e => Object(n.a)(Object(s.a)(u, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var m = r("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const p = e => e.publicAccessNetwork.models,
				b = e => e.publicAccessNetwork.reports.reported,
				h = e => e.publicAccessNetwork.history,
				f = e => e.publicAccessNetwork.history.cursor,
				g = e => e.publicAccessNetwork.history.visitOrder,
				y = e => e.publicAccessNetwork.hlsStreams,
				v = Object(s.a)(y, e => e.ended),
				C = Object(s.a)(y, e => e.removed),
				_ = Object(s.a)(p, v, C, (e, t, r) => {
					const s = t.reduce((e, t) => {
						const r = e[t];
						if (!r) return e;
						const s = r.stream.state,
							n = B(s, o.a.ENDED) ? o.a.ENDED : s,
							a = r.stream.vod_accessible;
						return n === s && !0 === a ? e : {
							...e,
							[t]: {
								...r,
								stream: {
									...r.stream,
									state: n,
									vod_accessible: !0
								}
							}
						}
					}, e);
					return r.reduce((e, t) => {
						const r = e[t];
						if (!r) return e;
						const s = r.stream.state,
							n = B(s, o.a.ENDED) ? o.a.ENDED : s,
							a = r.stream.vod_accessible;
						return n === s && !1 === a ? e : {
							...e,
							[t]: {
								...r,
								stream: {
									...r.stream,
									state: n,
									vod_accessible: !1
								}
							}
						}
					}, s)
				}),
				E = (e, t) => {
					return _(e)[Object(a.g)(t)]
				},
				I = Object(s.a)((e, t) => {
					let {
						streamIdFromPath: r
					} = t;
					return r
				}, (e, t) => l(t.listingName)(e, t), _, b, i.h, (e, t, r, s, n) => {
					const i = [];
					if (e) {
						const t = Object(a.g)(e);
						r[t] && i.push(t)
					}
					const c = i.concat(t),
						d = [...new Set(c)],
						u = new Set([...s, ...n]);
					return d.filter(e => {
						const t = r[e];
						return !u.has(e) && !t.post.isHidden && t.stream.state !== o.a.KILLED && t.stream.state !== o.a.PURGED
					})
				}),
				O = Object(s.a)((e, t) => {
					let {
						count: r
					} = t;
					return r
				}, _, (e, t) => {
					let {
						listingName: r,
						streamIdFromPath: s
					} = t;
					return I(e, {
						listingName: r,
						streamIdFromPath: s
					})
				}, (e, t, r) => {
					const s = r.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? s.slice(0, e) : s
				}),
				j = Object(s.a)(_, O, (e, t) => {
					const r = t[0];
					if (r) return e[r]
				}),
				w = Object(s.a)(g, (e, t) => {
					let {
						related: r,
						streamIdFromPath: s,
						subreddit: n
					} = t;
					return O(e, {
						listingName: r || n,
						streamIdFromPath: s
					})
				}, (e, t) => {
					const r = new Set(e),
						s = t.filter(e => !r.has(e));
					if (s.length) return s[0]
				}),
				A = Object(s.a)((e, t) => {
					let {
						streamIdFromPath: r
					} = t;
					return r
				}, _, (e, t) => {
					let {
						related: r,
						streamIdFromPath: s,
						subreddit: n
					} = t;
					return O(e, {
						listingName: r || n,
						streamIdFromPath: s
					})
				}, h, (e, t, r, s) => {
					if (!r.length) return;
					const n = r.map(e => t[e]).filter(t => t && t.post.id !== e),
						a = n.find(e => e.stream.state === o.a.IS_LIVE);
					if (a) return a.post.id;
					const i = n.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (s.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return i ? i.post.id : void 0
				}),
				S = Object(n.a)(Object(s.a)(A, _, (e, t) => e ? t[e] : void 0)),
				x = Object(s.a)((e, t) => {
					let {
						streamIdFromPath: r
					} = t;
					return r ? Object(a.g)(r) : void 0
				}, A, b, i.h, (e, t) => {
					let {
						related: r,
						streamIdFromPath: s,
						subreddit: n
					} = t;
					return O(e, {
						listingName: r || n,
						streamIdFromPath: s
					})
				}, (e, t, r, s, n) => !e || r.includes(e) || s.includes(e) ? t || n[0] : e),
				k = Object(s.a)(f, g, w, (e, t, r) => e < t.length - 1 ? t[e + 1] : r),
				L = Object(s.a)(f, g, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				P = Object(n.a)(Object(s.a)(x, _, (e, t) => e ? t[e] : void 0)),
				N = Object(n.a)(Object(s.a)(k, _, (e, t) => e ? t[e] : void 0)),
				F = Object(n.a)(Object(s.a)(L, _, (e, t) => e ? t[e] : void 0)),
				D = (Object(n.a)(Object(s.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, _, (e, t) => Object.keys(e).filter(e => !!t[e]).map(r => ({
					...t[r],
					preloadedPreviewUrl: e[r]
				})))), Object(s.a)(x, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				T = Object(s.a)((e, t) => {
					let {
						streamIdFromPath: r
					} = t;
					return r ? E(e, r) : void 0
				}, e => !e || e.chat_disabled || e.post.isArchived || e.post.isLocked);

			function B(e, t) {
				const r = {
					[o.a.NOT_STARTED]: 0,
					[o.a.PUBLISHED]: 1,
					[o.a.IS_LIVE]: 2,
					[o.a.DISCONNECTED]: 2,
					[o.a.ENDED]: 3,
					[o.a.KILLED]: 4,
					[o.a.PURGED]: 4
				};
				return r[t] >= r[e]
			}
			const R = Object(s.a)(x, h, (e, t) => e && t.timestamps[e] || 0);
			var M;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(M || (M = {}));
			const U = Object(s.a)(x, _, m.b, (e, t, r) => {
					if (r) return M.INTRO;
					const s = e && t[e];
					if (!s) return M.UNAVAILABLE;
					const n = s.stream.state;
					return n === o.a.IS_LIVE || n === o.a.DISCONNECTED ? M.LIVE : n === o.a.ENDED && s.stream.vod_accessible ? M.VOD : M.UNAVAILABLE
				}),
				V = Object(s.a)(P, U, m.b, c.b, c.o, (e, t, r, s, n) => r ? s : e ? t === M.LIVE || t === M.VOD ? e.stream.hls_url : n : void 0),
				G = Object(s.a)(P, U, R, (e, t, r) => e ? t === M.LIVE ? e.broadcast_time : t === M.VOD && r < e.broadcast_time ? r : 0 : 0),
				K = (e, t) => {
					const r = p(e);
					return !!r && r[t] && r[t].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "a", (function() {
				return d
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = r("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const o = e => e.publicAccessNetwork.theaterSettings,
				i = Object(s.a)(o, a.n, (e, t) => t && !e.isIntroFinished),
				c = Object(s.a)(o, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + n.a > Date.now()
		},
		"./src/reddit/selectors/economics.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return y
			})), r.d(t, "o", (function() {
				return v
			})), r.d(t, "a", (function() {
				return C
			})), r.d(t, "x", (function() {
				return _
			})), r.d(t, "f", (function() {
				return E
			})), r.d(t, "i", (function() {
				return I
			})), r.d(t, "q", (function() {
				return O
			})), r.d(t, "h", (function() {
				return j
			})), r.d(t, "z", (function() {
				return w
			})), r.d(t, "l", (function() {
				return A
			})), r.d(t, "n", (function() {
				return S
			})), r.d(t, "e", (function() {
				return x
			})), r.d(t, "d", (function() {
				return k
			})), r.d(t, "j", (function() {
				return L
			})), r.d(t, "p", (function() {
				return P
			})), r.d(t, "k", (function() {
				return D
			})), r.d(t, "r", (function() {
				return B
			})), r.d(t, "y", (function() {
				return R
			})), r.d(t, "u", (function() {
				return M
			})), r.d(t, "v", (function() {
				return U
			})), r.d(t, "b", (function() {
				return V
			})), r.d(t, "w", (function() {
				return G
			})), r.d(t, "s", (function() {
				return K
			})), r.d(t, "t", (function() {
				return W
			})), r.d(t, "g", (function() {
				return H
			})), r.d(t, "m", (function() {
				return q
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/reddit/featureFlags/index.ts"),
				n = r("./src/reddit/helpers/economics/sortBadges.ts"),
				a = r("./src/reddit/helpers/richTextJson/index.ts"),
				o = r("./src/reddit/models/Badge/index.ts"),
				i = r("./src/reddit/models/Badge/managementPage.ts"),
				c = r("./src/reddit/models/Payments/index.ts"),
				d = r("./src/reddit/models/Product/index.ts"),
				u = r("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				l = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = r("./src/reddit/selectors/comments.ts"),
				p = r("./src/reddit/selectors/commentSelector.ts"),
				b = r("./src/reddit/selectors/experiments/mediaInComments.ts"),
				h = r("./src/reddit/selectors/gold/powerups/index.ts"),
				f = r("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const g = [],
				y = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === l.a.Fetched) {
						const e = r.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				v = (e, t) => {
					const r = y(e, t);
					return r && r.endsAt || null
				};
			var C;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(C || (C = {}));
			const _ = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === l.a.Fetched) {
						const r = v(e, t),
							s = Date.now();
						return r && s < r ? C.Subscribed : C.NotSubscribed
					}
					return C.DontKnow
				},
				E = (e, t) => {
					const r = e.user.account,
						s = e.economics.subredditPremium[t];
					if (r && s && s.status === l.a.Fetched) {
						const s = ((e.users.appliedBadges[r.id] || {})[t] || g).map(t => e.badges.models[t]).filter(Boolean);
						if (s) return {
							[i.a.Loyalty]: s.find(e => e.placement === o.a.First),
							[i.a.Achievement]: s.find(e => e.placement === o.a.Second),
							[i.a.Cosmetic]: s.find(e => !e.placement)
						}
					}
					return {
						[i.a.Loyalty]: void 0,
						[i.a.Achievement]: void 0,
						[i.a.Cosmetic]: void 0
					}
				};

			function I(e, t) {
				return (null == e ? void 0 : e.length) ? Object(n.a)(e.map(e => t[e]).filter(Boolean)) : g
			}
			const O = (e, t, r) => {
					var n;
					if (!s.d.spBadges(e)) return g;
					return I(null === (n = e.users.appliedBadges[r]) || void 0 === n ? void 0 : n[t], e.badges.models)
				},
				j = (e, t) => {
					const r = e.economics.subredditPremium[t.subredditId];
					if (r && r.status === l.a.Fetched) {
						const e = r.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function w(e, t) {
				const r = (e.economics.me.data.specialMemberships || {})[t];
				return !!(r && r.settings && r.settings.optOut)
			}

			function A(e, t) {
				const {
					badge: r,
					subredditId: s
				} = t, n = e.user.account ? e.user.account.id : void 0;
				if (Object(o.e)(r) && r.userId === n) return r;
				const a = e.badges.models,
					i = e.user.ownedBadges[s] || {},
					c = Object(o.e)(r) ? r.type : r.id;
				return Object.keys(i).map(e => a[e]).find(e => e && e.type === c)
			}

			function S(e, t, r, s) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === l.a.Fetched) {
					if (r === i.a.Loyalty || r === i.a.Achievement) return n.data.collections[r];
					if (r === i.a.Cosmetic && s) return n.data.collections[r][s]
				}
				return g
			}

			function x(e, t) {
				const r = S(e, t, i.a.Loyalty).find(e => "membership" === e.id);
				return r ? [].concat(r.locked, r.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : g
			}

			function k(e, t) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === l.a.Fetched) {
					const e = r.data.collections[i.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(o.f)
				}
				return g
			}

			function L(e, t) {
				return S(e, t, i.a.Cosmetic, i.c.Gallery).some(e => e.locked.some(e => Object(o.f)(e) || !!e.price))
			}
			const P = e => {
				const t = [],
					r = e.economics.paymentSystems;
				if (r.status === u.a.Fetched && r.data.stripe && r.data.stripe.sources) {
					const e = r.data.stripe.sources;
					for (const r in e) {
						const s = e[r];
						t.push({
							display: `${s.brand} •••• ${s.last4}`,
							id: r,
							type: c.a.SavedStripe
						})
					}
				}
				if (r.status === u.a.Fetched && r.data.braintree && r.data.braintree.sources) {
					const e = r.data.braintree.sources;
					for (const r in e) {
						const s = e[r];
						"PayPal" === s.brand && t.push({
							display: "PayPal",
							id: s.id,
							type: c.a.SavedPayPal
						})
					}
				}
				return t
			};
			var N;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(N || (N = {}));
			const F = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				D = (e, t) => Object.values(e.products.models).filter(e => e.type === d.a.Membership && t && e.subredditId === t),
				T = (e, t) => {
					if (!t) return {};
					const r = F.prices;
					D(e, t).forEach(e => {
						e.price && e.currency && (r[e.currency] = e.price)
					});
					const s = y(e, t);
					return s && s.price && s.currency && (r[s.currency] = s.price), r
				},
				B = (e, t) => {
					var r, s, n, a;
					const o = (null === (a = null === (n = null === (s = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === s ? void 0 : s.points) || void 0 === n ? void 0 : n[t || ""]) || void 0 === a ? void 0 : a.nomenclature) || F;
					return {
						prices: T(e, t),
						member: o.member || F.member,
						memberPlural: o.memberPlural || F.memberPlural,
						memberAlt: o.memberAlt || F.memberAlt,
						memberAltPlural: o.memberAltPlural || F.memberAltPlural,
						membership: o.membership || F.membership,
						membershipAlt: o.membershipAlt || F.membershipAlt
					}
				},
				R = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === u.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				M = (e, t) => {
					const r = e.user.ownedBadges[t] || {};
					return !!Object.keys(r).length
				},
				U = e => {
					const t = e.economics.paymentSystems;
					return t.status === u.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				V = (e, t) => {
					let {
						subredditId: r
					} = t;
					if (!r) return;
					return e.economics.emotes[r]
				},
				G = (e, t) => {
					const r = t && e.economics.gifs[t];
					return !!r && r.hasGifProduct
				},
				K = (e, t, r) => {
					if (Object(h.r)(e, {
							subredditId: t
						})) return !0;
					const s = "replyToPost" !== r && Object(p.b)(e, {
						commentId: r
					});
					return !(!s || !Object(a.a)(s))
				},
				W = (e, t, r) => {
					if (Object(b.a)(e)) return !!t && Object(m.B)(e, {
						subredditId: t
					});
					if (!Object(f.b)(e, {
							subredditId: t
						})) return !1;
					if (Object(h.s)(e, {
							subredditId: t
						})) return !0;
					const n = "replyToPost" !== r && Object(p.b)(e, {
						commentId: r
					});
					if (n && Object(a.b)(n)) return !0;
					const o = s.d.spGiphy(e),
						i = G(e, t);
					return !(!o || !i) || o && i
				},
				H = (e, t, r) => {
					if (t) {
						const s = e.economics.banners.dismissedBanners[t];
						if (s && s.data) return !!s.data[r]
					}
				},
				q = e => e.economics.pointsCopy.data
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatMessageInput.c0c227d5d529aecc4cf0.js.map