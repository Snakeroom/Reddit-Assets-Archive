// https://www.redditstatic.com/desktop2x/ChatMessageInput.98874661365fb7b7cd2d.js
// Retrieved at 5/9/2022, 4:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatMessageInput"], {
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, r, s) {
				var n = r ? r.call(s, e, t) : void 0;
				if (void 0 !== n) return !!n;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var a = Object.keys(e),
					i = Object.keys(t);
				if (a.length !== i.length) return !1;
				for (var o = Object.prototype.hasOwnProperty.bind(t), c = 0; c < a.length; c++) {
					var d = a[c];
					if (!o(d)) return !1;
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
				return o
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
				i = r("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const o = Object(s.a)(i.a),
				c = Object(s.a)(i.b),
				d = Object(s.a)(i.c),
				u = Object(s.a)(i.d),
				l = Object(s.a)(i.e),
				m = Object(s.a)(i.f),
				p = Object(s.a)(i.g),
				b = Object(s.a)(i.h),
				h = Object(s.a)(i.i),
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
				i = r("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const o = Object(a.a)(i.B),
				c = e => async t => {
					t(o(e))
				}, d = () => async e => {
					e(o({
						lastChatActivityUtcTs: Date.now()
					}))
				}, u = () => async e => {
					e(o({
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
				i = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/Button/index.tsx"),
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
						className: Object(i.a)(v.a.container, e, {
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
			const I = Object(d.b)(() => Object(u.a)(e => e, (e, t) => {
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
				O = e => ({
					initialCommentAwardIds: e.isFullyLoaded ? [...e.commentAwardIds] : [],
					initialPostAwardCount: e.isFullyLoaded ? e.postAwardCount : 0,
					prevIsFullyLoaded: e.isFullyLoaded,
					prevPostId: e.postId
				});
			class E extends n.Component {
				constructor(e) {
					super(e), this.state = O(e)
				}
				static getDerivedStateFromProps(e, t) {
					return t.prevPostId !== e.postId || !t.prevIsFullyLoaded && e.isFullyLoaded ? O(e) : null
				}
				render() {
					const {
						initialPostAwardCount: e,
						initialCommentAwardIds: t
					} = this.state, {
						postAwardCount: r,
						commentAwardIds: s,
						className: n,
						isFullyLoaded: i
					} = this.props;
					if (!i) return a.a.createElement(_, {
						className: n,
						count: 0
					});
					const o = Math.max(r, e + s.length - t.length),
						c = s.length - 1,
						d = s[c],
						u = s.length !== t.length;
					return a.a.createElement(_, {
						awardId: d,
						className: n,
						count: o,
						isAnimated: u,
						key: c
					})
				}
			}
			var j = I(E),
				w = r("./src/reddit/components/CommentsChat/MessageInput/index.m.less"),
				S = r.n(w);
			t.a = e => {
				let {
					postId: t,
					showSubmitInsideTextArea: n,
					isLivestreaming: d,
					handleGiveAward: u,
					sendEvent: l
				} = e;
				return a.a.createElement(o.e, {
					className: Object(i.a)(S.a.ChatButton, {
						[S.a.LivestreamingChatButton]: d,
						[S.a.leftPad]: !n
					}),
					"aria-label": s.fbt._("give award", null, {
						hk: "1nXRWY"
					}),
					onClick: async e => {
						e.stopPropagation();
						const s = Object(c.e)(c.a.GildingFlow, !0);
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
				FormWrapper: "mfKS0B5uqUX6PXcuSjTop",
				formWrapper: "mfKS0B5uqUX6PXcuSjTop",
				LivestreamingWrapper: "_1xV0i2uW_2xdNlBcbSEjpS",
				livestreamingWrapper: "_1xV0i2uW_2xdNlBcbSEjpS",
				inputLine: "_2rpcmnaHqKJnQeHI6-RZU8",
				submitButton: "_1CLqZSQ6jz0CFFB9he7ZtW",
				Form: "_76oPIY5CZD4GaQnn-06zO",
				form: "_76oPIY5CZD4GaQnn-06zO",
				Editing: "CA5bQ-3lhJvw_xfOAOs4K",
				editing: "CA5bQ-3lhJvw_xfOAOs4K",
				SmallChatUserIcon: "_1qnAOkiRLjELVt-lGR1N2O",
				smallChatUserIcon: "_1qnAOkiRLjELVt-lGR1N2O",
				ChatButton: "BtTZ62LYQAh6Ezp2xw_4R",
				chatButton: "BtTZ62LYQAh6Ezp2xw_4R",
				LivestreamingChatButton: "_1pWwFWQOxI4UHucSbgy7Yr",
				livestreamingChatButton: "_1pWwFWQOxI4UHucSbgy7Yr",
				leftPad: "_2nnsSXE8H28qTe0cmiHlbb",
				RichTextEditor: "_2Zrjn5GTHiDwHULWCseamI",
				richTextEditor: "_2Zrjn5GTHiDwHULWCseamI",
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
				replyAuthor: "_11cxPUL8P03UB2QLjnVQA1"
			}
		},
		"./src/reddit/components/CommentsChat/MessageInput/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/noop.js"),
				a = r.n(n),
				i = r("./node_modules/lodash/throttle.js"),
				o = r.n(i),
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
				I = r("./src/reddit/controls/Button/index.tsx"),
				O = r("./src/reddit/controls/ErrorText/index.tsx"),
				E = r("./src/reddit/helpers/correlationIdTracker.ts"),
				j = r("./src/reddit/helpers/getRichTextContent/index.ts"),
				w = r("./src/reddit/helpers/richTextEditor/index.ts"),
				S = r("./src/reddit/helpers/trackers/rpan.ts"),
				A = r("./src/reddit/icons/svgs/Close/index.tsx"),
				k = r("./src/reddit/icons/svgs/Send/index.tsx"),
				x = r("./src/reddit/models/PostCreationForm/index.ts"),
				P = r("./src/reddit/selectors/comments.ts"),
				L = r("./src/reddit/selectors/posts.ts"),
				N = r("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				F = r("./src/reddit/components/CommentsChat/MessageInput/AwardButton.tsx"),
				D = r("./src/reddit/components/CommentsChat/MessageInput/index.m.less"),
				T = r.n(D);
			const B = {},
				R = 1e3,
				M = "chat_submission_from_rte",
				U = p.a.form("Form", T.a),
				G = p.a.wrapped(I.e, "ChatButton", T.a),
				K = p.a.div("CloseIconWrap", T.a),
				V = p.a.div("Reply", T.a),
				H = p.a.div("ReplyAuthor", T.a),
				W = p.a.div("ReplyComment", T.a),
				q = p.a.wrapped(v.a, "RichTextEditor", T.a),
				J = p.a.wrapped(y.a, "SmallChatUserIcon", T.a),
				X = Object(u.b)(() => Object(l.c)({
					draft: P.i,
					errorMsgs: P.L,
					hasError: P.v,
					liveStreamingChatCharacterLimit: e => {
						const t = Object(N.a)(e);
						return t ? t - 3 : 197
					},
					pending: (e, t) => e.features.comments.submit.pending[t.draftKey],
					post: L.G
				}), (e, t) => {
					let {
						isEditing: r,
						comment: s,
						commentsPageKey: n,
						draftKey: a,
						postId: i,
						replyComment: o,
						isLivestreaming: c,
						scrollToBottom: d
					} = t;
					return {
						dispatchSubmit: async (t, o, u) => {
							r && s ? await e(Object(h.j)({
								id: s.id,
								commentsPageKey: n,
								depth: 0,
								draftKey: a,
								formData: t
							})) : u ? e(Object(h.n)({
								commentsPageKey: n,
								draftKey: a,
								parentCommentDepth: u.depth,
								parentCommentId: u.id,
								formData: t,
								editorMode: o
							})) : await e(Object(h.p)({
								postId: i,
								commentsPageKey: n,
								draftKey: a,
								formData: t,
								editorMode: o,
								disableAutofocus: !0,
								isLiveStreaming: c
							})), d && d()
						},
						handleGiveAward: t => e(Object(f.d)({
							correlationId: t,
							thingId: i
						})),
						onCancelEdit: () => s && e(Object(h.c)({
							commentId: s.id,
							commentsPageKey: n
						})),
						onLivestreamingChatMessageEdit: () => e(Object(g.a)()),
						closeReply: () => o && e(Object(h.a)({
							parentCommentId: o.id,
							commentsPageKey: n
						}))
					}
				});
			class Q extends d.a.Component {
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
					}, this.passChangeToLivestreaming = o()(() => this.props.onLivestreamingChatMessageEdit(), R, {
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
						t(Object(E.e)(E.a.GildingFlow, !0));
						const {
							clickGildEvent: i,
							clickRpanGiveAward: o
						} = await Promise.resolve().then(r.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						a((s ? o : i)(n))
					}, this.handleCloseReply = e => {
						e.preventDefault(), this.props.closeReply()
					}, this.handleSubmit = e => {
						e.preventDefault(), this.onSubmit()
					}, this.onSubmit = () => {
						if (this.canSubmit()) {
							const e = {
								commentMode: x.i.RICH_TEXT,
								draftType: b.c.replyToComment,
								rteState: this.state.rteState,
								hasFocus: !0,
								text: ""
							};
							this.cleanInputForm(), this.props.dispatchSubmit(e, x.i.RICH_TEXT, this.props.replyComment)
						}
						this.props.isLivestreaming && this.props.sendEvent(Object(S.z)(this.props.postId))
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
						errorMsgs: e,
						isEditing: t,
						isLivestreaming: r,
						sendEvent: n,
						handleGiveAward: i,
						liveStreamingChatCharacterLimit: o,
						pending: c,
						post: u,
						postId: l,
						replyComment: p
					} = this.props, b = r ? s.fbt._("Send message ({characterLimit} character limit)", [s.fbt._param("characterLimit", o.toLocaleString())], {
						hk: "RIcb6"
					}) : s.fbt._("Send a message (use the Enter key)", null, {
						hk: "3yojgj"
					}), h = u.isGildable && r && !t, f = r;
					return d.a.createElement("div", {
						className: Object(m.a)(T.a.FormWrapper, {
							[T.a.LivestreamingWrapper]: r
						})
					}, !t && p && d.a.createElement(V, {
						className: Object(m.a)({
							[T.a.isLivestreaming]: r
						})
					}, d.a.createElement(W, {
						onClick: this.handleCloseReply
					}, d.a.createElement(H, null, s.fbt._("Replying to u/ {username}:", [s.fbt._param("username", p.author)], {
						hk: "2YZre5"
					})), d.a.createElement(_.a, {
						className: T.a.RichTextJson,
						key: `rich-text-${p.id}`,
						content: Object(j.a)(p),
						rtJsonElementProps: B
					}), d.a.createElement(K, null, d.a.createElement(A.a, null)))), d.a.createElement("div", {
						className: T.a.inputLine
					}, d.a.createElement(U, {
						className: Object(m.a)({
							[T.a.Editing]: t
						}),
						onSubmit: this.handleSubmit,
						onReset: this.handleCancel
					}, d.a.createElement(Z, {
						isEditing: !!t,
						isLivestreaming: !!r
					}), d.a.createElement(q, {
						className: Object(m.a)(T.a.RichTextEditor, {
							[T.a.Livestreaming]: r && !t,
							[T.a.Editing]: !r && t
						}),
						focusableContentRTEClassName: Object(m.a)({
							[T.a.LivestreamingFocusableContent]: r && !t
						}),
						dataTestId: M,
						editorType: w.a.Comment,
						initialMinHeight: 20,
						initialHeight: void 0,
						rteState: this.state.rteState,
						rteRef: this.setRTEComponentRef,
						onChange: this.handleChange,
						onFocus: this.handleFocus,
						onSubmit: this.onSubmit,
						placeholderText: b,
						readOnly: c,
						showSubmitButton: f && !this.state.showError,
						submitButtonClassName: Object(m.a)(T.a.insetSubmitButton, T.a.submitButton),
						submitOnEnter: !0,
						trackToolbarClick: a.a,
						hideToolbar: !0,
						noBorder: !0,
						isChatPost: !0
					}), t && d.a.createElement(G, {
						className: Object(m.a)(T.a.ChatButton, {
							[T.a.LivestreamingResetButton]: r
						}),
						type: "reset"
					}, d.a.createElement(A.a, null)), !f && d.a.createElement(G, {
						className: Object(m.a)(T.a.ChatButton, {
							[T.a.LivestreamingChatButton]: r && !t,
							[T.a.LivestreamingResetButton]: r && t
						}),
						type: "submit",
						disabled: !this.canSubmit(),
						"aria-label": s.fbt._("send a message", null, {
							hk: "4bL65Y"
						})
					}, d.a.createElement(k.a, null))), h && d.a.createElement(F.a, {
						showSubmitInsideTextArea: f,
						isLivestreaming: r,
						sendEvent: n,
						postId: l,
						handleGiveAward: i
					})), this.state.showError && Object(O.c)(e.length ? e : [`Input text must be less than ${o} characters`]))
				}
			}
			const Z = e => {
				let {
					isEditing: t,
					isLivestreaming: r
				} = e;
				return r ? null : t ? d.a.createElement(J, {
					height: 20,
					width: 20
				}) : d.a.createElement(y.a, {
					height: 25,
					width: 25
				})
			};
			t.default = X(Q)
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
				i = r("./src/lib/lessComponent.tsx"),
				o = r("./src/reddit/components/FocusableContent/index.m.less"),
				c = r.n(o);
			t.a = i.a.wrapped(e => n.a.createElement("div", {
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
				return I
			})), r.d(t, "q", (function() {
				return O
			})), r.d(t, "o", (function() {
				return E
			})), r.d(t, "z", (function() {
				return j
			})), r.d(t, "s", (function() {
				return w
			})), r.d(t, "y", (function() {
				return S
			})), r.d(t, "G", (function() {
				return A
			})), r.d(t, "t", (function() {
				return k
			})), r.d(t, "c", (function() {
				return x
			})), r.d(t, "n", (function() {
				return P
			})), r.d(t, "k", (function() {
				return L
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
				return G
			})), r.d(t, "h", (function() {
				return K
			}));
			var s, n = r("./src/reddit/constants/chat.ts"),
				a = r("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				i = r("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(s || (s = {}));
			const o = (e, t) => {
					if (t) {
						const r = i.A(e, t.post.id),
							s = i.H(e, t.post.id),
							n = i.gb(e);
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
						subreddit: i.gb(e)
					}
				},
				c = (e, t, r) => {
					if (!t || !r) return;
					const s = Object(a.j)(e, {
							streamIdFromPath: t.post.id
						}),
						i = t.chat_disabled || r.chatState === n.a.None;
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
						chatState: i ? n.a.None : n.a.Compact,
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
					...o(e)
				}),
				l = () => e => ({
					source: "stream_du",
					action: "click",
					noun: "show_less",
					...o(e)
				}),
				m = (e, t) => r => ({
					source: "stream_du",
					action: "click",
					noun: "enlarge",
					...o(r, e),
					actionInfo: i.d(r, {
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
						...o(r, e)
					}
				}),
				b = (e, t) => r => ({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: c(r, e, t),
					...d(r),
					...o(r, e)
				}),
				h = (e, t) => r => ({
					source: "stream_player",
					action: "play",
					noun: "stream",
					playback: c(r, e, t),
					...d(r),
					...o(r, e)
				}),
				f = (e, t) => r => ({
					source: "stream_player",
					action: "complete",
					noun: "stream",
					playback: c(r, e, t),
					...d(r),
					...o(r, e)
				}),
				g = (e, t, r) => s => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(s, t, r),
					...d(s),
					...o(s, t)
				}),
				y = (e, t, r, s) => n => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(n, t, r),
					...d(n),
					...o(n, t),
					actionInfo: i.d(n, {
						referralId: s
					})
				}),
				v = (e, t, r) => s => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(s, t, r),
					...d(s),
					...o(s, t)
				}),
				C = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "stream_from_desktop",
					...d(t),
					...o(t, e)
				}),
				_ = (e, t) => r => ({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: c(r, e, t),
					...d(r),
					...o(r, e)
				}),
				I = (e, t) => r => ({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: c(r, e, t),
					...d(r),
					...o(r, e)
				}),
				O = (e, t) => r => ({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: c(r, e, t),
					...d(r),
					...o(r, e)
				}),
				E = (e, t) => r => ({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: c(r, e, t),
					...o(r, e)
				}),
				j = e => t => {
					const r = Object(a.l)(t, e);
					return {
						source: "stream_chat",
						action: "click",
						noun: "send_chat",
						...o(t, r)
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
					...o(s, t)
				}),
				S = (e, t) => r => ({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: c(r, e, t),
					...d(r)
				}),
				A = e => t => ({
					source: "post",
					action: "view",
					noun: "post",
					profile: i.Q(t),
					screen: i.Y(t),
					...o(t, e)
				}),
				k = e => t => {
					const r = o(t, e);
					return {
						source: "post",
						action: "consume",
						noun: "post",
						profile: i.Q(t),
						screen: i.Y(t),
						...r
					}
				},
				x = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "follow",
					...o(t, e)
				}),
				P = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "unfollow",
					...o(t, e)
				}),
				L = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "subscribe",
					...o(t, e),
					targetSubreddit: i.gb(t)
				}),
				N = (e, t) => r => ({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: c(r, e, t),
					...o(r, e)
				}),
				F = (e, t) => r => ({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: c(r, e, t),
					...o(r, e)
				}),
				D = (e, t) => r => ({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: c(r, e, t),
					...o(r, e)
				}),
				T = (e, t) => r => ({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: c(r, e, t),
					...o(r, e)
				}),
				B = (e, t) => r => ({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: c(r, e, t),
					...o(r, e)
				}),
				R = (e, t) => r => ({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: c(r, e, t),
					...o(r, e)
				}),
				M = (e, t) => r => ({
					source: "stream_player",
					action: "swipe",
					noun: "next",
					playback: c(r, e, t),
					...o(r, e),
					...d(r)
				}),
				U = (e, t) => r => ({
					source: "stream_player",
					action: "swipe",
					noun: "previous",
					playback: c(r, e, t),
					...o(r, e),
					...d(r)
				}),
				G = (e, t) => r => ({
					source: "rpanstudio_banner",
					action: "click",
					noun: e,
					...o(r, t),
					...d(r)
				}),
				K = (e, t) => r => ({
					source: "rpanstudio_modal",
					action: "click",
					noun: e,
					...o(r, t),
					...d(r)
				})
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var s, n, a, i;
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
				}(i || (i = {}))
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
				return I
			})), r.d(t, "m", (function() {
				return j
			})), r.d(t, "i", (function() {
				return A
			})), r.d(t, "d", (function() {
				return L
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
				return G
			})), r.d(t, "e", (function() {
				return K
			})), r.d(t, "g", (function() {
				return V
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/lib/objectSelector/index.ts"),
				a = r("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				i = r("./src/reddit/models/PublicAccessNetwork/index.ts"),
				o = r("./src/reddit/selectors/posts.ts"),
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
							n = B(s, i.a.ENDED) ? i.a.ENDED : s,
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
							n = B(s, i.a.ENDED) ? i.a.ENDED : s,
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
				I = (e, t) => {
					return _(e)[Object(a.g)(t)]
				},
				O = Object(s.a)((e, t) => {
					let {
						streamIdFromPath: r
					} = t;
					return r
				}, (e, t) => l(t.listingName)(e, t), _, b, o.h, (e, t, r, s, n) => {
					const o = [];
					if (e) {
						const t = Object(a.g)(e);
						r[t] && o.push(t)
					}
					const c = o.concat(t),
						d = [...new Set(c)],
						u = new Set([...s, ...n]);
					return d.filter(e => {
						const t = r[e];
						return !u.has(e) && !t.post.isHidden && t.stream.state !== i.a.KILLED && t.stream.state !== i.a.PURGED
					})
				}),
				E = Object(s.a)((e, t) => {
					let {
						count: r
					} = t;
					return r
				}, _, (e, t) => {
					let {
						listingName: r,
						streamIdFromPath: s
					} = t;
					return O(e, {
						listingName: r,
						streamIdFromPath: s
					})
				}, (e, t, r) => {
					const s = r.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? s.slice(0, e) : s
				}),
				j = Object(s.a)(_, E, (e, t) => {
					const r = t[0];
					if (r) return e[r]
				}),
				w = Object(s.a)(g, (e, t) => {
					let {
						related: r,
						streamIdFromPath: s,
						subreddit: n
					} = t;
					return E(e, {
						listingName: r || n,
						streamIdFromPath: s
					})
				}, (e, t) => {
					const r = new Set(e),
						s = t.filter(e => !r.has(e));
					if (s.length) return s[0]
				}),
				S = Object(s.a)((e, t) => {
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
					return E(e, {
						listingName: r || n,
						streamIdFromPath: s
					})
				}, h, (e, t, r, s) => {
					if (!r.length) return;
					const n = r.map(e => t[e]).filter(t => t && t.post.id !== e),
						a = n.find(e => e.stream.state === i.a.IS_LIVE);
					if (a) return a.post.id;
					const o = n.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (s.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return o ? o.post.id : void 0
				}),
				A = Object(n.a)(Object(s.a)(S, _, (e, t) => e ? t[e] : void 0)),
				k = Object(s.a)((e, t) => {
					let {
						streamIdFromPath: r
					} = t;
					return r ? Object(a.g)(r) : void 0
				}, S, b, o.h, (e, t) => {
					let {
						related: r,
						streamIdFromPath: s,
						subreddit: n
					} = t;
					return E(e, {
						listingName: r || n,
						streamIdFromPath: s
					})
				}, (e, t, r, s, n) => !e || r.includes(e) || s.includes(e) ? t || n[0] : e),
				x = Object(s.a)(f, g, w, (e, t, r) => e < t.length - 1 ? t[e + 1] : r),
				P = Object(s.a)(f, g, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				L = Object(n.a)(Object(s.a)(k, _, (e, t) => e ? t[e] : void 0)),
				N = Object(n.a)(Object(s.a)(x, _, (e, t) => e ? t[e] : void 0)),
				F = Object(n.a)(Object(s.a)(P, _, (e, t) => e ? t[e] : void 0)),
				D = (Object(n.a)(Object(s.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, _, (e, t) => Object.keys(e).filter(e => !!t[e]).map(r => ({
					...t[r],
					preloadedPreviewUrl: e[r]
				})))), Object(s.a)(k, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				T = Object(s.a)((e, t) => {
					let {
						streamIdFromPath: r
					} = t;
					return r ? I(e, r) : void 0
				}, e => !e || e.chat_disabled || e.post.isArchived || e.post.isLocked);

			function B(e, t) {
				const r = {
					[i.a.NOT_STARTED]: 0,
					[i.a.PUBLISHED]: 1,
					[i.a.IS_LIVE]: 2,
					[i.a.DISCONNECTED]: 2,
					[i.a.ENDED]: 3,
					[i.a.KILLED]: 4,
					[i.a.PURGED]: 4
				};
				return r[t] >= r[e]
			}
			const R = Object(s.a)(k, h, (e, t) => e && t.timestamps[e] || 0);
			var M;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(M || (M = {}));
			const U = Object(s.a)(k, _, m.b, (e, t, r) => {
					if (r) return M.INTRO;
					const s = e && t[e];
					if (!s) return M.UNAVAILABLE;
					const n = s.stream.state;
					return n === i.a.IS_LIVE || n === i.a.DISCONNECTED ? M.LIVE : n === i.a.ENDED && s.stream.vod_accessible ? M.VOD : M.UNAVAILABLE
				}),
				G = Object(s.a)(L, U, m.b, c.b, c.o, (e, t, r, s, n) => r ? s : e ? t === M.LIVE || t === M.VOD ? e.stream.hls_url : n : void 0),
				K = Object(s.a)(L, U, R, (e, t, r) => e ? t === M.LIVE ? e.broadcast_time : t === M.VOD && r < e.broadcast_time ? r : 0 : 0),
				V = (e, t) => {
					const r = p(e);
					return !!r && r[t] && r[t].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "a", (function() {
				return d
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = r("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const i = e => e.publicAccessNetwork.theaterSettings,
				o = Object(s.a)(i, a.n, (e, t) => t && !e.isIntroFinished),
				c = Object(s.a)(i, e => e.lastChatActivityUtcTs),
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
				return I
			})), r.d(t, "i", (function() {
				return O
			})), r.d(t, "q", (function() {
				return E
			})), r.d(t, "h", (function() {
				return j
			})), r.d(t, "z", (function() {
				return w
			})), r.d(t, "l", (function() {
				return S
			})), r.d(t, "n", (function() {
				return A
			})), r.d(t, "e", (function() {
				return k
			})), r.d(t, "d", (function() {
				return x
			})), r.d(t, "j", (function() {
				return P
			})), r.d(t, "p", (function() {
				return L
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
				return G
			})), r.d(t, "w", (function() {
				return K
			})), r.d(t, "s", (function() {
				return V
			})), r.d(t, "t", (function() {
				return H
			})), r.d(t, "g", (function() {
				return W
			})), r.d(t, "m", (function() {
				return q
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/reddit/featureFlags/index.ts"),
				n = r("./src/reddit/helpers/economics/sortBadges.ts"),
				a = r("./src/reddit/helpers/richTextJson/index.ts"),
				i = r("./src/reddit/models/Badge/index.ts"),
				o = r("./src/reddit/models/Badge/managementPage.ts"),
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
				I = (e, t) => {
					const r = e.user.account,
						s = e.economics.subredditPremium[t];
					if (r && s && s.status === l.a.Fetched) {
						const s = ((e.users.appliedBadges[r.id] || {})[t] || g).map(t => e.badges.models[t]).filter(Boolean);
						if (s) return {
							[o.a.Loyalty]: s.find(e => e.placement === i.a.First),
							[o.a.Achievement]: s.find(e => e.placement === i.a.Second),
							[o.a.Cosmetic]: s.find(e => !e.placement)
						}
					}
					return {
						[o.a.Loyalty]: void 0,
						[o.a.Achievement]: void 0,
						[o.a.Cosmetic]: void 0
					}
				};

			function O(e, t) {
				return (null == e ? void 0 : e.length) ? Object(n.a)(e.map(e => t[e]).filter(Boolean)) : g
			}
			const E = (e, t, r) => {
					var n;
					if (!s.d.spBadges(e)) return g;
					return O(null === (n = e.users.appliedBadges[r]) || void 0 === n ? void 0 : n[t], e.badges.models)
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

			function S(e, t) {
				const {
					badge: r,
					subredditId: s
				} = t, n = e.user.account ? e.user.account.id : void 0;
				if (Object(i.e)(r) && r.userId === n) return r;
				const a = e.badges.models,
					o = e.user.ownedBadges[s] || {},
					c = Object(i.e)(r) ? r.type : r.id;
				return Object.keys(o).map(e => a[e]).find(e => e && e.type === c)
			}

			function A(e, t, r, s) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === l.a.Fetched) {
					if (r === o.a.Loyalty || r === o.a.Achievement) return n.data.collections[r];
					if (r === o.a.Cosmetic && s) return n.data.collections[r][s]
				}
				return g
			}

			function k(e, t) {
				const r = A(e, t, o.a.Loyalty).find(e => "membership" === e.id);
				return r ? [].concat(r.locked, r.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : g
			}

			function x(e, t) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === l.a.Fetched) {
					const e = r.data.collections[o.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(i.f)
				}
				return g
			}

			function P(e, t) {
				return A(e, t, o.a.Cosmetic, o.c.Gallery).some(e => e.locked.some(e => Object(i.f)(e) || !!e.price))
			}
			const L = e => {
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
					const i = (null === (a = null === (n = null === (s = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === s ? void 0 : s.points) || void 0 === n ? void 0 : n[t || ""]) || void 0 === a ? void 0 : a.nomenclature) || F;
					return {
						prices: T(e, t),
						member: i.member || F.member,
						memberPlural: i.memberPlural || F.memberPlural,
						memberAlt: i.memberAlt || F.memberAlt,
						memberAltPlural: i.memberAltPlural || F.memberAltPlural,
						membership: i.membership || F.membership,
						membershipAlt: i.membershipAlt || F.membershipAlt
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
				G = (e, t) => {
					let {
						subredditId: r
					} = t;
					if (!r) return;
					return e.economics.emotes[r]
				},
				K = (e, t) => {
					const r = t && e.economics.gifs[t];
					return !!r && r.hasGifProduct
				},
				V = (e, t, r) => {
					if (Object(h.r)(e, {
							subredditId: t
						})) return !0;
					const s = "replyToPost" !== r && Object(p.b)(e, {
						commentId: r
					});
					return !(!s || !Object(a.a)(s))
				},
				H = (e, t, r) => {
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
					const i = s.d.spGiphy(e),
						o = K(e, t);
					return !(!i || !o) || i && o
				},
				W = (e, t, r) => {
					if (t) {
						const s = e.economics.banners.dismissedBanners[t];
						if (s && s.data) return !!s.data[r]
					}
				},
				q = e => e.economics.pointsCopy.data
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatMessageInput.98874661365fb7b7cd2d.js.map