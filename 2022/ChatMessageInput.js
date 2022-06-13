// https://www.redditstatic.com/desktop2x/ChatMessageInput.3c0bf2a05eb27606b8d9.js
// Retrieved at 6/13/2022, 9:30:03 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatMessageInput"], {
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, s, r) {
				var n = s ? s.call(r, e, t) : void 0;
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
					if (!1 === (n = s ? s.call(r, u, l, d) : void 0) || void 0 === n && u !== l) return !1
				}
				return !0
			}
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "e", (function() {
				return l
			})), s.d(t, "f", (function() {
				return m
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "h", (function() {
				return h
			})), s.d(t, "i", (function() {
				return b
			})), s.d(t, "j", (function() {
				return f
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/modal.ts"),
				a = s("./src/reddit/constants/modals.ts"),
				o = s("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const i = Object(r.a)(o.a),
				c = Object(r.a)(o.b),
				d = Object(r.a)(o.c),
				u = Object(r.a)(o.d),
				l = Object(r.a)(o.e),
				m = Object(r.a)(o.f),
				p = Object(r.a)(o.g),
				h = Object(r.a)(o.h),
				b = Object(r.a)(o.i),
				f = e => Object(n.h)(a.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/publicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return u
			}));
			var r = s("./node_modules/uuid/v4.js"),
				n = s.n(r),
				a = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/constants.ts");
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
		"./src/reddit/components/CommentsChat/Comment/AwardCountSpectacle/AwardCountAnimation/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/CommentsChat/MessageInput/AwardButton.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/helpers/correlationIdTracker.ts"),
				d = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-redux/es/index.js")),
				u = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/makeCommentsPageKey/index.ts"),
				m = s("./src/reddit/selectors/comments.ts"),
				p = s("./src/reddit/selectors/commentSelector.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/communityAwards.ts"),
				f = s("./src/reddit/selectors/gold/awardIcon.ts"),
				g = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				y = s("./src/reddit/components/CommentsChat/Comment/AwardCountSpectacle/AwardCountAnimation/index.m.less"),
				v = s.n(y);
			class C extends n.Component {
				render() {
					const {
						className: e,
						count: t,
						iconUrl: s,
						isAnimated: r
					} = this.props;
					return a.a.createElement("div", {
						className: Object(o.a)(v.a.container, e, {
							[v.a.isAnimated]: r
						})
					}, a.a.createElement(g.a, {
						className: v.a.gildIcon
					}), r && s && a.a.createElement("div", {
						className: v.a.awardingIcon,
						style: {
							backgroundImage: `url("${s}")`
						}
					}), t ? a.a.createElement("div", {
						className: v.a.count
					}, t) : null)
				}
			}
			var E = Object(d.b)(() => Object(u.c)({
				iconUrl: (e, t) => {
					let {
						awardId: s
					} = t;
					if (!s) return;
					const r = Object(b.a)(e, s);
					return Object(f.a)(e, {
						award: r,
						minSize: 64
					})
				}
			}))(C);
			const I = Object(d.b)(() => Object(u.a)(e => e, (e, t) => {
					let {
						postId: s
					} = t;
					return Object(m.g)(e, {
						commentsPageKey: Object(l.a)(s)
					})
				}, h.G, (e, t) => {
					let {
						postId: s
					} = t;
					return Object(m.u)(e, {
						commentsPageKey: Object(l.a)(s)
					})
				}, (e, t, s, r) => {
					return {
						commentAwardIds: t.length ? t.reduce((t, s) => {
							const r = Object(p.b)(e, {
								commentId: s.id
							});
							if (r) {
								const {
									associatedAwardId: e
								} = r;
								if (e) return [...t, e]
							}
							return t
						}, []) : [],
						isFullyLoaded: r,
						postAwardCount: s.awardCountsById ? Object.values(s.awardCountsById).reduce((e, t) => e + t, 0) : s.allAwardings ? s.allAwardings.reduce((e, t) => e + t.count, 0) : 0
					}
				})),
				_ = e => ({
					initialCommentAwardIds: e.isFullyLoaded ? [...e.commentAwardIds] : [],
					initialPostAwardCount: e.isFullyLoaded ? e.postAwardCount : 0,
					prevIsFullyLoaded: e.isFullyLoaded,
					prevPostId: e.postId
				});
			class O extends n.Component {
				constructor(e) {
					super(e), this.state = _(e)
				}
				static getDerivedStateFromProps(e, t) {
					return t.prevPostId !== e.postId || !t.prevIsFullyLoaded && e.isFullyLoaded ? _(e) : null
				}
				render() {
					const {
						initialPostAwardCount: e,
						initialCommentAwardIds: t
					} = this.state, {
						postAwardCount: s,
						commentAwardIds: r,
						className: n,
						isFullyLoaded: o
					} = this.props;
					if (!o) return a.a.createElement(E, {
						className: n,
						count: 0
					});
					const i = Math.max(s, e + r.length - t.length),
						c = r.length - 1,
						d = r[c],
						u = r.length !== t.length;
					return a.a.createElement(E, {
						awardId: d,
						className: n,
						count: i,
						isAnimated: u,
						key: c
					})
				}
			}
			var j = I(O),
				w = s("./src/reddit/components/CommentsChat/MessageInput/index.m.less"),
				S = s.n(w);
			t.a = e => {
				let {
					postId: t,
					showSubmitInsideTextArea: n,
					isLivestreaming: d,
					handleGiveAward: u,
					sendEvent: l
				} = e;
				return a.a.createElement(i.e, {
					className: Object(o.a)(S.a.ChatButton, {
						[S.a.LivestreamingChatButton]: d,
						[S.a.leftPad]: !n
					}),
					"aria-label": r.fbt._("give award", null, {
						hk: "1nXRWY"
					}),
					onClick: async e => {
						e.stopPropagation();
						const r = Object(c.d)(c.a.GildingFlow, !0);
						u(r);
						const {
							clickGildEvent: n,
							clickRpanGiveAward: a
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						l((d ? a : n)(t))
					}
				}, a.a.createElement(j, {
					postId: t
				}))
			}
		},
		"./src/reddit/components/CommentsChat/MessageInput/index.m.less": function(e, t, s) {
			e.exports = {
				v2: "_1wX7EkMv0Avw75sEfz3Qyx",
				FormWrapper: "mfKS0B5uqUX6PXcuSjTop",
				formWrapper: "mfKS0B5uqUX6PXcuSjTop",
				V2ChatPost: "_2gIG6JZYU1cqtNUDcj9p1x",
				v2ChatPost: "_2gIG6JZYU1cqtNUDcj9p1x",
				Form: "_76oPIY5CZD4GaQnn-06zO",
				form: "_76oPIY5CZD4GaQnn-06zO",
				RichTextEditor: "_2Zrjn5GTHiDwHULWCseamI",
				richTextEditor: "_2Zrjn5GTHiDwHULWCseamI",
				LivestreamingWrapper: "_1xV0i2uW_2xdNlBcbSEjpS",
				livestreamingWrapper: "_1xV0i2uW_2xdNlBcbSEjpS",
				inputLine: "_2rpcmnaHqKJnQeHI6-RZU8",
				submitButton: "_1CLqZSQ6jz0CFFB9he7ZtW",
				spamTimeout: "_3IH6D8ThGGGzPY0gTh7ctb",
				Editing: "CA5bQ-3lhJvw_xfOAOs4K",
				editing: "CA5bQ-3lhJvw_xfOAOs4K",
				SmallChatUserIcon: "_1qnAOkiRLjELVt-lGR1N2O",
				smallChatUserIcon: "_1qnAOkiRLjELVt-lGR1N2O",
				ChatButton: "BtTZ62LYQAh6Ezp2xw_4R",
				chatButton: "BtTZ62LYQAh6Ezp2xw_4R",
				LivestreamingChatButton: "_1pWwFWQOxI4UHucSbgy7Yr",
				livestreamingChatButton: "_1pWwFWQOxI4UHucSbgy7Yr",
				leftPad: "_2nnsSXE8H28qTe0cmiHlbb",
				v2ChatPostButton: "_23u5-3OLMKFq7xMrqNY9Wk",
				Livestreaming: "_37GIMhyXqgW50qXsV8kJtg",
				livestreaming: "_37GIMhyXqgW50qXsV8kJtg",
				LivestreamingFocusableContent: "_3ICFMFY3nzpQ8TcBKQA6Cq",
				livestreamingFocusableContent: "_3ICFMFY3nzpQ8TcBKQA6Cq",
				insetSubmitButton: "_2-jlFgTYFKmNDKFKaq5x8Z",
				isV2ChatPost: "_1Hzb3asSDcxQPD8y3wsKaY",
				V2ChatPostFocusableContent: "_1s9IEAwL1pv1FFcX8Qtbzd",
				v2ChatPostFocusableContent: "_1s9IEAwL1pv1FFcX8Qtbzd",
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
		"./src/reddit/components/CommentsChat/MessageInput/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/noop.js"),
				a = s.n(n),
				o = s("./node_modules/lodash/throttle.js"),
				i = s.n(o),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				u = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				h = s("./src/reddit/models/PostDraft/index.ts"),
				b = s("./src/reddit/actions/comment/authoring.ts"),
				f = s("./src/reddit/actions/gold/modals.ts"),
				g = s("./src/reddit/actions/publicAccessNetwork/theaterSettings.ts"),
				y = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx");
			const v = e => {
				let {
					durationSec: t,
					onTimeout: s
				} = e;
				const [r, n] = Object(c.useState)(t);
				Object(c.useEffect)(() => {
					if (r <= 0) return void s();
					const e = setTimeout(() => n(r - 1), 1e3);
					return () => clearTimeout(e)
				}, [r, s]);
				const a = Math.floor(r / 60),
					o = r - 60 * a;
				return d.a.createElement("span", null, a, ":", o > 9 ? o : `0${o}`)
			};
			var C = s("./src/reddit/components/RichTextEditor/index.tsx"),
				E = s("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				I = s("./src/reddit/components/RichTextJsonChatReply/index.tsx"),
				_ = s("./src/reddit/controls/Button/index.tsx"),
				O = s("./src/reddit/controls/ErrorText/index.tsx"),
				j = s("./src/reddit/helpers/correlationIdTracker.ts"),
				w = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				S = s("./src/reddit/helpers/richTextEditor/index.ts"),
				x = s("./src/reddit/helpers/trackers/rpan.ts"),
				A = s("./src/reddit/icons/fonts/helpers.tsx");
			var L = e => d.a.createElement("i", {
					className: Object(m.a)(Object(A.b)("history", e.isFilled), e.className)
				}),
				P = s("./src/reddit/icons/svgs/Close/index.tsx"),
				k = s("./src/reddit/icons/svgs/CloseV2/index.tsx"),
				N = s("./src/reddit/icons/svgs/Send/index.tsx"),
				T = s("./src/reddit/icons/svgs/Send2/index.tsx"),
				F = s("./src/reddit/models/PostCreationForm/index.ts"),
				D = s("./src/reddit/selectors/chatPost.ts"),
				B = s("./src/reddit/selectors/comments.ts"),
				R = s("./src/reddit/selectors/posts.ts"),
				M = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				U = s("./src/reddit/components/CommentsChat/MessageInput/AwardButton.tsx"),
				K = s("./src/lib/constants/index.ts"),
				V = s("./src/reddit/components/CommentsChat/MessageInput/index.m.less"),
				G = s.n(V),
				W = s("./src/reddit/components/UserIcon/index.tsx"),
				H = s("./src/reddit/helpers/trackers/commentsChat.ts"),
				q = s("./src/reddit/selectors/experiments/chat.ts");
			const J = {},
				X = "chat_submission_from_rte",
				Y = 1e3,
				z = 15,
				Q = p.a.form("Form", G.a),
				Z = p.a.wrapped(_.e, "ChatButton", G.a),
				$ = p.a.div("CloseIconWrap", G.a),
				ee = p.a.div("Reply", G.a),
				te = p.a.div("ReplyAuthor", G.a),
				se = p.a.div("ReplyAvatar", G.a),
				re = p.a.div("ReplyComment", G.a),
				ne = p.a.wrapped(C.a, "RichTextEditor", G.a),
				ae = p.a.wrapped(y.a, "SmallChatUserIcon", G.a),
				oe = Object(u.b)(() => Object(l.c)({
					draft: B.i,
					errorMsgs: B.L,
					errorType: B.M,
					hasError: B.v,
					isChatPost: D.d,
					isLivePostCommentV2Enabled: q.c,
					isLivePostSpamRateEnabled: q.e,
					liveStreamingChatCharacterLimit: e => {
						const t = Object(M.a)(e);
						return t ? t - 3 : 197
					},
					pending: (e, t) => e.features.comments.submit.pending[t.draftKey],
					post: R.G
				}), (e, t) => {
					let {
						isEditing: s,
						comment: r,
						commentsPageKey: n,
						draftKey: a,
						postId: o,
						replyComment: i,
						isLivestreaming: c,
						scrollToBottom: d
					} = t;
					return {
						dispatchSubmit: async (t, i, u) => {
							s && r ? await e(Object(b.k)({
								id: r.id,
								commentsPageKey: n,
								draftKey: a,
								formData: t
							})) : u ? e(Object(b.o)({
								commentsPageKey: n,
								draftKey: a,
								parentCommentDepth: u.depth,
								parentCommentId: u.id,
								formData: t,
								editorMode: i
							})) : await e(Object(b.q)({
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
						onCancelEdit: () => r && e(Object(b.d)({
							commentId: r.id,
							commentsPageKey: n
						})),
						onLivestreamingChatMessageEdit: () => e(Object(g.a)()),
						closeReply: () => i && e(Object(b.b)({
							parentCommentId: i.id,
							commentsPageKey: n
						})),
						clearSubmitError: t => e(Object(b.a)({
							draftKey: t
						}))
					}
				});
			class ie extends d.a.Component {
				constructor(e) {
					super(e), this.focusOnForm = () => this.editor && this.editor.focus(), this.setRTEComponentRef = e => this.editor = e, this.handleCancel = e => {
						e.preventDefault(), this.props.onCancelEdit && this.props.onCancelEdit()
					}, this.handleChange = (e, t) => {
						this.state.hasChanged && (t = this.state.hasChanged);
						const {
							isLivestreaming: s,
							liveStreamingChatCharacterLimit: r
						} = this.props, n = !!s && e.isBound && e.editorState.getCurrentContent().getPlainText().length > r;
						t && e.isBound && (t = Boolean(t && e.editorState.getCurrentContent().getPlainText().trim())), this.setState(() => ({
							showError: n,
							rteState: e,
							hasChanged: t
						})), this.props.isLivestreaming && t && this.passChangeToLivestreaming()
					}, this.handleFocus = () => {
						this.props.isLivestreaming && this.passChangeToLivestreaming(), this.props.onFocusMessageInput && this.props.onFocusMessageInput()
					}, this.passChangeToLivestreaming = i()(() => this.props.onLivestreamingChatMessageEdit(), Y, {
						leading: !1,
						trailing: !0
					}), this.onClickGiveAward = async e => {
						e.stopPropagation();
						const {
							handleGiveAward: t,
							isLivestreaming: r,
							postId: n,
							sendEvent: a
						} = this.props;
						t(Object(j.d)(j.a.GildingFlow, !0));
						const {
							clickGildEvent: o,
							clickRpanGiveAward: i
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						a((r ? i : o)(n))
					}, this.handleCloseReply = e => {
						e.preventDefault(), this.props.closeReply()
					}, this.handleSubmit = e => {
						e.preventDefault(), this.onSubmit()
					}, this.onSubmit = () => {
						if (this.canSubmit()) {
							const e = {
								commentMode: F.i.RICH_TEXT,
								draftType: h.c.replyToComment,
								rteState: this.state.rteState,
								hasFocus: !0,
								text: ""
							};
							this.cleanInputForm(), this.props.dispatchSubmit(e, F.i.RICH_TEXT, this.props.replyComment)
						}
						this.props.isLivestreaming && this.props.sendEvent(Object(x.z)(this.props.postId)), this.props.replyComment && this.props.sendEvent(Object(H.d)(this.props.replyComment.id))
					}, this.canSubmit = () => Boolean(!this.props.pending && this.state.hasChanged && !this.state.showError && (!this.props.isLivePostSpamRateEnabled || !this.state.spamTimeoutDraftKey)), this.state = {
						hasChanged: !1,
						showError: e.hasError,
						rteState: e.isEditing && e.comment ? E.a.createInitial(e.comment.media.richtextContent) : E.a.createInitial(),
						spamTimeoutDraftKey: null
					}
				}
				isReplyCommentChanged(e) {
					const {
						replyComment: t
					} = this.props;
					return (e.replyComment && e.replyComment.id) !== (t && t.id)
				}
				shouldComponentUpdate(e, t) {
					return t.rteState.editorKey !== this.state.rteState.editorKey || t.spamTimeoutDraftKey !== this.state.spamTimeoutDraftKey || t.hasChanged !== this.state.hasChanged || t.showError !== this.state.showError || e.pending !== this.props.pending || e.postId !== this.props.postId || this.isReplyCommentChanged(e)
				}
				UNSAFE_componentWillReceiveProps(e) {
					!this.props.isEditing && this.props.draft && this.props.draft.rteState && e.draft && null === e.draft.rteState && this.cleanInputForm(), this.isReplyCommentChanged(e) && e.replyComment && this.focusOnForm(), e.hasError !== this.props.hasError && this.setState({
						showError: e.hasError
					})
				}
				componentDidUpdate(e) {
					e.pending && !this.props.pending && this.focusOnForm(), this.props.isChatPost && this.props.isLivePostSpamRateEnabled && this.props.errorType === K.I.RATELIMIT && e.errorType !== this.props.errorType && (this.props.sendEvent(Object(H.e)(this.props.postId)), this.setState({
						spamTimeoutDraftKey: this.props.draftKey
					}))
				}
				componentWillUnmount() {
					this.props.isLivePostSpamRateEnabled && this.state.spamTimeoutDraftKey && this.props.sendEvent(Object(H.a)(this.props.postId))
				}
				cleanInputForm() {
					this.setState({
						rteState: E.a.createInitial()
					})
				}
				render() {
					var e;
					const {
						isV2: t,
						errorMsgs: s,
						errorType: n,
						isEditing: o,
						isLivestreaming: i,
						isLivePostCommentV2Enabled: c,
						isLivePostSpamRateEnabled: u,
						sendEvent: l,
						handleGiveAward: p,
						liveStreamingChatCharacterLimit: h,
						pending: b,
						post: f,
						postId: g,
						replyComment: y
					} = this.props, C = i ? r.fbt._("Send message ({characterLimit} character limit)", [r.fbt._param("characterLimit", h.toLocaleString())], {
						hk: "RIcb6"
					}) : r.fbt._("Send a message (use the Enter key)", null, {
						hk: "3yojgj"
					}), E = f.isGildable && i && !o, _ = i, j = n === K.I.RATELIMIT && parseInt(null === (e = null == s ? void 0 : s[0]) || void 0 === e ? void 0 : e.replace(/\D/g, "")) || z;
					return d.a.createElement("div", {
						className: Object(m.a)(G.a.FormWrapper, {
							[G.a.LivestreamingWrapper]: i,
							[G.a.v2]: t,
							[G.a.V2ChatPost]: !i && t && !o
						})
					}, u && !!this.state.spamTimeoutDraftKey && d.a.createElement("p", {
						className: G.a.spamTimeout
					}, r.fbt._("Time until you can message", null, {
						hk: "3mkJ7J"
					}), " ", d.a.createElement(v, {
						durationSec: j,
						onTimeout: () => {
							this.props.clearSubmitError(this.state.spamTimeoutDraftKey), this.setState({
								spamTimeoutDraftKey: null
							})
						}
					}), d.a.createElement(L, null)), !o && y && d.a.createElement(ee, {
						className: Object(m.a)({
							[G.a.isLivestreaming]: i,
							[G.a.isLivePostCommentV2]: c
						})
					}, d.a.createElement(re, {
						onClick: this.handleCloseReply
					}, d.a.createElement(te, null, c && d.a.createElement(se, null, d.a.createElement(W.a, {
						className: Object(m.a)(G.a.icon),
						iconUrl: y.profileImage || y.authorIconImage,
						userName: y.author,
						isNSFW: Boolean(y.profileOver18 || y.authorIconIsNSFW)
					})), r.fbt._("Replying to u/ {username}:", [r.fbt._param("username", y.author)], {
						hk: "2YZre5"
					})), d.a.createElement(I.a, {
						className: G.a.RichTextJson,
						key: `rich-text-${y.id}`,
						content: Object(w.a)(y),
						rtJsonElementProps: J
					}), d.a.createElement($, null, c ? d.a.createElement(k.a, null) : d.a.createElement(P.a, null)))), d.a.createElement("div", {
						className: G.a.inputLine
					}, d.a.createElement(Q, {
						className: Object(m.a)({
							[G.a.Editing]: o
						}),
						onSubmit: this.handleSubmit,
						onReset: this.handleCancel
					}, !t && d.a.createElement(ce, {
						isEditing: !!o,
						isLivestreaming: !!i
					}), d.a.createElement(ne, {
						className: Object(m.a)(G.a.RichTextEditor, {
							[G.a.Livestreaming]: i && !o,
							[G.a.Editing]: !i && o,
							[G.a.isV2ChatPost]: !i && t
						}),
						focusableContentRTEClassName: Object(m.a)({
							[G.a.LivestreamingFocusableContent]: i && !o,
							[G.a.V2ChatPostFocusableContent]: !i && t
						}),
						dataTestId: X,
						editorType: S.a.Comment,
						initialMinHeight: 20,
						initialHeight: void 0,
						rteState: this.state.rteState,
						rteRef: this.setRTEComponentRef,
						onChange: this.handleChange,
						onFocus: this.handleFocus,
						onSubmit: this.onSubmit,
						placeholderText: C,
						readOnly: b,
						showSubmitButton: _ && !this.state.showError,
						submitButtonClassName: Object(m.a)(G.a.insetSubmitButton, G.a.submitButton),
						submitOnEnter: !0,
						trackToolbarClick: a.a,
						hideToolbar: !0,
						noBorder: !0,
						isChatPost: !0
					}), o && d.a.createElement(Z, {
						className: Object(m.a)(G.a.ChatButton, {
							[G.a.LivestreamingResetButton]: i
						}),
						type: "reset"
					}, d.a.createElement(P.a, null)), !_ && d.a.createElement(Z, {
						className: Object(m.a)(G.a.ChatButton, {
							[G.a.LivestreamingChatButton]: i && !o,
							[G.a.LivestreamingResetButton]: i && o,
							[G.a.v2ChatPostButton]: !i && !o && t
						}),
						type: "submit",
						disabled: !this.canSubmit(),
						"aria-label": r.fbt._("send a message", null, {
							hk: "4bL65Y"
						})
					}, t ? d.a.createElement(T.a, null) : d.a.createElement(N.a, null))), E && d.a.createElement(U.a, {
						showSubmitInsideTextArea: _,
						isLivestreaming: i,
						sendEvent: l,
						postId: g,
						handleGiveAward: p
					})), this.state.showError && Object(O.c)(s.length ? s : [`Input text must be less than ${h} characters`]))
				}
			}
			const ce = e => {
				let {
					isEditing: t,
					isLivestreaming: s
				} = e;
				return s ? null : t ? d.a.createElement(ae, {
					height: 20,
					width: 20
				}) : d.a.createElement(y.a, {
					height: 25,
					width: 25
				})
			};
			t.default = oe(ie)
		},
		"./src/reddit/components/FocusableContent/index.m.less": function(e, t, s) {
			e.exports = {
				FocusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				focusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				isFocused: "_3F2J0fSnCI3ZvF_tBSaV0s",
				noBorder: "_1CpUVAt2tGEwaaBV3nZNJs"
			}
		},
		"./src/reddit/components/FocusableContent/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/FocusableContent/index.m.less"),
				c = s.n(i);
			t.a = o.a.wrapped(e => n.a.createElement("div", {
				className: Object(a.a)(e.className, {
					[c.a.isFocused]: e.isFocused,
					[c.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", c.a)
		},
		"./src/reddit/constants/chat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var r;
			! function(e) {
				e.None = "none", e.Compact = "compact", e.Full = "full_screen"
			}(r || (r = {}));
			var n;
			! function(e) {
				e.SubredditChatNotifcationFtux = "chat_subreddit_notification_ftux"
			}(n || (n = {}))
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "H", (function() {
				return u
			})), s.d(t, "i", (function() {
				return l
			})), s.d(t, "j", (function() {
				return m
			})), s.d(t, "D", (function() {
				return p
			})), s.d(t, "A", (function() {
				return h
			})), s.d(t, "E", (function() {
				return b
			})), s.d(t, "C", (function() {
				return f
			})), s.d(t, "B", (function() {
				return g
			})), s.d(t, "u", (function() {
				return y
			})), s.d(t, "v", (function() {
				return v
			})), s.d(t, "x", (function() {
				return C
			})), s.d(t, "r", (function() {
				return E
			})), s.d(t, "p", (function() {
				return I
			})), s.d(t, "q", (function() {
				return _
			})), s.d(t, "o", (function() {
				return O
			})), s.d(t, "z", (function() {
				return j
			})), s.d(t, "s", (function() {
				return w
			})), s.d(t, "y", (function() {
				return S
			})), s.d(t, "G", (function() {
				return x
			})), s.d(t, "t", (function() {
				return A
			})), s.d(t, "c", (function() {
				return L
			})), s.d(t, "n", (function() {
				return P
			})), s.d(t, "k", (function() {
				return k
			})), s.d(t, "b", (function() {
				return N
			})), s.d(t, "d", (function() {
				return T
			})), s.d(t, "e", (function() {
				return F
			})), s.d(t, "w", (function() {
				return D
			})), s.d(t, "F", (function() {
				return B
			})), s.d(t, "f", (function() {
				return R
			})), s.d(t, "l", (function() {
				return M
			})), s.d(t, "m", (function() {
				return U
			})), s.d(t, "g", (function() {
				return K
			})), s.d(t, "h", (function() {
				return V
			}));
			var r, n = s("./src/reddit/constants/chat.ts"),
				a = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(r || (r = {}));
			const i = (e, t) => {
					if (t) {
						const s = o.A(e, t.post.id),
							r = o.H(e, t.post.id),
							n = o.gb(e);
						if (t.post.authorInfo && r && (r.authorId = t.post.authorInfo.id), s) {
							s.streamPublicId = t.stream.stream_id, s.id = t.stream.stream_id;
							const r = Object(a.j)(e, {
								streamIdFromPath: t.post.id
							});
							r === a.a.LIVE ? s.type = "stream_live" : r === a.a.VOD ? s.type = "stream_vod" : r === a.a.UNAVAILABLE && (s.type = "stream_unavailable")
						}
						return {
							post: r,
							media: s,
							subreddit: n
						}
					}
					return {
						subreddit: o.gb(e)
					}
				},
				c = (e, t, s) => {
					if (!t || !s) return;
					const r = Object(a.j)(e, {
							streamIdFromPath: t.post.id
						}),
						o = t.chat_disabled || s.chatState === n.a.None;
					return {
						id: s.id,
						sessionDurationMs: s.sessionDurationMs,
						watchDurationMs: s.watchDurationMs,
						heartbeatDurationMs: s.heartbeatDurationMs,
						isLive: r === a.a.LIVE,
						playheadOffsetMs: s.playheadOffsetMs,
						timestampMs: s.timestampMs,
						startTimeMs: s.startTimeMs,
						volume: s.volume,
						chatState: o ? n.a.None : n.a.Compact,
						scrubbingStartMs: s.scrubbingStartMs,
						scrubbingEndMs: s.scrubbingEndMs,
						playerType: s.playerType
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
				m = (e, t) => s => ({
					source: "stream_du",
					action: "click",
					noun: "enlarge",
					...i(s, e),
					actionInfo: o.d(s, {
						position: t || 0
					})
				}),
				p = (e, t) => s => ({
					source: "stream_player",
					action: "fail",
					noun: "stream",
					playback: c(s, e, t),
					...d(s),
					...e && {
						...i(s, e)
					}
				}),
				h = (e, t) => s => ({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: c(s, e, t),
					...d(s),
					...i(s, e)
				}),
				b = (e, t) => s => ({
					source: "stream_player",
					action: "play",
					noun: "stream",
					playback: c(s, e, t),
					...d(s),
					...i(s, e)
				}),
				f = (e, t) => s => ({
					source: "stream_player",
					action: "complete",
					noun: "stream",
					playback: c(s, e, t),
					...d(s),
					...i(s, e)
				}),
				g = (e, t, s) => r => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(r, t, s),
					...d(r),
					...i(r, t)
				}),
				y = (e, t, s, r) => n => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(n, t, s),
					...d(n),
					...i(n, t),
					actionInfo: o.d(n, {
						referralId: r
					})
				}),
				v = (e, t, s) => r => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(r, t, s),
					...d(r),
					...i(r, t)
				}),
				C = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "stream_from_desktop",
					...d(t),
					...i(t, e)
				}),
				E = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: c(s, e, t),
					...d(s),
					...i(s, e)
				}),
				I = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: c(s, e, t),
					...d(s),
					...i(s, e)
				}),
				_ = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: c(s, e, t),
					...d(s),
					...i(s, e)
				}),
				O = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: c(s, e, t),
					...i(s, e)
				}),
				j = e => t => {
					const s = Object(a.l)(t, e);
					return {
						source: "stream_chat",
						action: "click",
						noun: "send_chat",
						...i(t, s)
					}
				},
				w = (e, t, s) => r => ({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: c(r, t, s),
					...i(r, t)
				}),
				S = (e, t) => s => ({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: c(s, e, t),
					...d(s)
				}),
				x = e => t => ({
					source: "post",
					action: "view",
					noun: "post",
					profile: o.Q(t),
					screen: o.Y(t),
					...i(t, e)
				}),
				A = e => t => {
					const s = i(t, e);
					return {
						source: "post",
						action: "consume",
						noun: "post",
						profile: o.Q(t),
						screen: o.Y(t),
						...s
					}
				},
				L = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "follow",
					...i(t, e)
				}),
				P = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "unfollow",
					...i(t, e)
				}),
				k = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "subscribe",
					...i(t, e),
					targetSubreddit: o.gb(t)
				}),
				N = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: c(s, e, t),
					...i(s, e)
				}),
				T = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: c(s, e, t),
					...i(s, e)
				}),
				F = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: c(s, e, t),
					...i(s, e)
				}),
				D = (e, t) => s => ({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: c(s, e, t),
					...i(s, e)
				}),
				B = (e, t) => s => ({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: c(s, e, t),
					...i(s, e)
				}),
				R = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: c(s, e, t),
					...i(s, e)
				}),
				M = (e, t) => s => ({
					source: "stream_player",
					action: "swipe",
					noun: "next",
					playback: c(s, e, t),
					...i(s, e),
					...d(s)
				}),
				U = (e, t) => s => ({
					source: "stream_player",
					action: "swipe",
					noun: "previous",
					playback: c(s, e, t),
					...i(s, e),
					...d(s)
				}),
				K = (e, t) => s => ({
					source: "rpanstudio_banner",
					action: "click",
					noun: e,
					...i(s, t),
					...d(s)
				}),
				V = (e, t) => s => ({
					source: "rpanstudio_modal",
					action: "click",
					noun: e,
					...i(s, t),
					...d(s)
				})
		},
		"./src/reddit/icons/svgs/CloseV2/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
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
		"./src/reddit/icons/svgs/Send2/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 24 24",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M22.6559 10.8L2.39994 0.660011C2.15389 0.5293 1.87278 0.479801 1.59687 0.5186C1.32096 0.557399 1.06441 0.682508 0.863944 0.876011C0.656797 1.06387 0.51403 1.31216 0.455877 1.5857C0.397725 1.85923 0.427136 2.14413 0.539944 2.40001L4.58394 12L0.539944 21.6C0.429918 21.8544 0.401998 22.1368 0.460075 22.4078C0.518153 22.6789 0.659334 22.925 0.863944 23.112C1.10992 23.347 1.43582 23.4799 1.77594 23.484C1.99315 23.4934 2.20883 23.4437 2.39994 23.34L22.6559 13.2C22.8781 13.088 23.0648 12.9165 23.1952 12.7046C23.3256 12.4927 23.3947 12.2488 23.3947 12C23.3947 11.7512 23.3256 11.5073 23.1952 11.2954C23.0648 11.0836 22.8781 10.9121 22.6559 10.8Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, s) {
			"use strict";
			var r, n, a, o;
			s.d(t, "b", (function() {
					return n
				})), s.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(r || (r = {})),
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
		"./src/reddit/models/Product/index.ts": function(e, t, s) {
			"use strict";
			var r;

			function n(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			s.d(t, "a", (function() {
					return r
				})), s.d(t, "b", (function() {
					return n
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(r || (r = {}))
		},
		"./src/reddit/models/PublicAccessNetwork/index.ts": function(e, t, s) {
			"use strict";
			var r;
			s.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.NOT_STARTED = "NOT_STARTED", e.PUBLISHED = "PUBLISHED", e.IS_LIVE = "IS_LIVE", e.DISCONNECTED = "DISCONNECTED", e.KILLED = "KILLED", e.PURGED = "PURGED", e.ENDED = "ENDED"
				}(r || (r = {}))
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "l", (function() {
				return I
			})), s.d(t, "m", (function() {
				return j
			})), s.d(t, "i", (function() {
				return x
			})), s.d(t, "d", (function() {
				return k
			})), s.d(t, "h", (function() {
				return N
			})), s.d(t, "k", (function() {
				return T
			})), s.d(t, "c", (function() {
				return F
			})), s.d(t, "f", (function() {
				return D
			})), s.d(t, "a", (function() {
				return M
			})), s.d(t, "j", (function() {
				return U
			})), s.d(t, "b", (function() {
				return K
			})), s.d(t, "e", (function() {
				return V
			})), s.d(t, "g", (function() {
				return G
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				o = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				i = s("./src/reddit/selectors/posts.ts"),
				c = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				d = s("./node_modules/lodash/memoize.js");
			const u = e => e.publicAccessNetwork.listings,
				l = s.n(d)()(e => Object(n.a)(Object(r.a)(u, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var m = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const p = e => e.publicAccessNetwork.models,
				h = e => e.publicAccessNetwork.reports.reported,
				b = e => e.publicAccessNetwork.history,
				f = e => e.publicAccessNetwork.history.cursor,
				g = e => e.publicAccessNetwork.history.visitOrder,
				y = e => e.publicAccessNetwork.hlsStreams,
				v = Object(r.a)(y, e => e.ended),
				C = Object(r.a)(y, e => e.removed),
				E = Object(r.a)(p, v, C, (e, t, s) => {
					const r = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const r = s.stream.state,
							n = B(r, o.a.ENDED) ? o.a.ENDED : r,
							a = s.stream.vod_accessible;
						return n === r && !0 === a ? e : {
							...e,
							[t]: {
								...s,
								stream: {
									...s.stream,
									state: n,
									vod_accessible: !0
								}
							}
						}
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const r = s.stream.state,
							n = B(r, o.a.ENDED) ? o.a.ENDED : r,
							a = s.stream.vod_accessible;
						return n === r && !1 === a ? e : {
							...e,
							[t]: {
								...s,
								stream: {
									...s.stream,
									state: n,
									vod_accessible: !1
								}
							}
						}
					}, r)
				}),
				I = (e, t) => {
					return E(e)[Object(a.g)(t)]
				},
				_ = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, (e, t) => l(t.listingName)(e, t), E, h, i.h, (e, t, s, r, n) => {
					const i = [];
					if (e) {
						const t = Object(a.g)(e);
						s[t] && i.push(t)
					}
					const c = i.concat(t),
						d = [...new Set(c)],
						u = new Set([...r, ...n]);
					return d.filter(e => {
						const t = s[e];
						return !u.has(e) && !t.post.isHidden && t.stream.state !== o.a.KILLED && t.stream.state !== o.a.PURGED
					})
				}),
				O = Object(r.a)((e, t) => {
					let {
						count: s
					} = t;
					return s
				}, E, (e, t) => {
					let {
						listingName: s,
						streamIdFromPath: r
					} = t;
					return _(e, {
						listingName: s,
						streamIdFromPath: r
					})
				}, (e, t, s) => {
					const r = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? r.slice(0, e) : r
				}),
				j = Object(r.a)(E, O, (e, t) => {
					const s = t[0];
					if (s) return e[s]
				}),
				w = Object(r.a)(g, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: n
					} = t;
					return O(e, {
						listingName: s || n,
						streamIdFromPath: r
					})
				}, (e, t) => {
					const s = new Set(e),
						r = t.filter(e => !s.has(e));
					if (r.length) return r[0]
				}),
				S = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, E, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: n
					} = t;
					return O(e, {
						listingName: s || n,
						streamIdFromPath: r
					})
				}, b, (e, t, s, r) => {
					if (!s.length) return;
					const n = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						a = n.find(e => e.stream.state === o.a.IS_LIVE);
					if (a) return a.post.id;
					const i = n.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (r.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return i ? i.post.id : void 0
				}),
				x = Object(n.a)(Object(r.a)(S, E, (e, t) => e ? t[e] : void 0)),
				A = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? Object(a.g)(s) : void 0
				}, S, h, i.h, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: n
					} = t;
					return O(e, {
						listingName: s || n,
						streamIdFromPath: r
					})
				}, (e, t, s, r, n) => !e || s.includes(e) || r.includes(e) ? t || n[0] : e),
				L = Object(r.a)(f, g, w, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				P = Object(r.a)(f, g, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				k = Object(n.a)(Object(r.a)(A, E, (e, t) => e ? t[e] : void 0)),
				N = Object(n.a)(Object(r.a)(L, E, (e, t) => e ? t[e] : void 0)),
				T = Object(n.a)(Object(r.a)(P, E, (e, t) => e ? t[e] : void 0)),
				F = (Object(n.a)(Object(r.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, E, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => ({
					...t[s],
					preloadedPreviewUrl: e[s]
				})))), Object(r.a)(A, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				D = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? I(e, s) : void 0
				}, e => !e || e.chat_disabled || e.post.isArchived || e.post.isLocked);

			function B(e, t) {
				const s = {
					[o.a.NOT_STARTED]: 0,
					[o.a.PUBLISHED]: 1,
					[o.a.IS_LIVE]: 2,
					[o.a.DISCONNECTED]: 2,
					[o.a.ENDED]: 3,
					[o.a.KILLED]: 4,
					[o.a.PURGED]: 4
				};
				return s[t] >= s[e]
			}
			const R = Object(r.a)(A, b, (e, t) => e && t.timestamps[e] || 0);
			var M;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(M || (M = {}));
			const U = Object(r.a)(A, E, m.b, (e, t, s) => {
					if (s) return M.INTRO;
					const r = e && t[e];
					if (!r) return M.UNAVAILABLE;
					const n = r.stream.state;
					return n === o.a.IS_LIVE || n === o.a.DISCONNECTED ? M.LIVE : n === o.a.ENDED && r.stream.vod_accessible ? M.VOD : M.UNAVAILABLE
				}),
				K = Object(r.a)(k, U, m.b, c.b, c.o, (e, t, s, r, n) => s ? r : e ? t === M.LIVE || t === M.VOD ? e.stream.hls_url : n : void 0),
				V = Object(r.a)(k, U, R, (e, t, s) => e ? t === M.LIVE ? e.broadcast_time : t === M.VOD && s < e.broadcast_time ? s : 0 : 0),
				G = (e, t) => {
					const s = p(e);
					return !!s && s[t] && s[t].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const o = e => e.publicAccessNetwork.theaterSettings,
				i = Object(r.a)(o, a.n, (e, t) => t && !e.isIntroFinished),
				c = Object(r.a)(o, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + n.a > Date.now()
		},
		"./src/reddit/selectors/economics.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return y
			})), s.d(t, "o", (function() {
				return v
			})), s.d(t, "a", (function() {
				return C
			})), s.d(t, "x", (function() {
				return E
			})), s.d(t, "f", (function() {
				return I
			})), s.d(t, "i", (function() {
				return _
			})), s.d(t, "q", (function() {
				return O
			})), s.d(t, "h", (function() {
				return j
			})), s.d(t, "z", (function() {
				return w
			})), s.d(t, "l", (function() {
				return S
			})), s.d(t, "n", (function() {
				return x
			})), s.d(t, "e", (function() {
				return A
			})), s.d(t, "d", (function() {
				return L
			})), s.d(t, "j", (function() {
				return P
			})), s.d(t, "p", (function() {
				return k
			})), s.d(t, "k", (function() {
				return F
			})), s.d(t, "r", (function() {
				return B
			})), s.d(t, "y", (function() {
				return R
			})), s.d(t, "u", (function() {
				return M
			})), s.d(t, "v", (function() {
				return U
			})), s.d(t, "b", (function() {
				return K
			})), s.d(t, "w", (function() {
				return V
			})), s.d(t, "s", (function() {
				return G
			})), s.d(t, "t", (function() {
				return W
			})), s.d(t, "g", (function() {
				return H
			})), s.d(t, "m", (function() {
				return q
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./src/reddit/featureFlags/index.ts"),
				n = s("./src/reddit/helpers/economics/sortBadges.ts"),
				a = s("./src/reddit/helpers/richTextJson/index.ts"),
				o = s("./src/reddit/models/Badge/index.ts"),
				i = s("./src/reddit/models/Badge/managementPage.ts"),
				c = s("./src/reddit/models/Payments/index.ts"),
				d = s("./src/reddit/models/Product/index.ts"),
				u = s("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				l = s("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = s("./src/reddit/selectors/comments.ts"),
				p = s("./src/reddit/selectors/commentSelector.ts"),
				h = s("./src/reddit/selectors/experiments/mediaInComments.ts"),
				b = s("./src/reddit/selectors/gold/powerups/index.ts"),
				f = s("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const g = [],
				y = (e, t) => {
					const s = e.economics.subredditPremium[t];
					if (s && s.status === l.a.Fetched) {
						const e = s.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				v = (e, t) => {
					const s = y(e, t);
					return s && s.endsAt || null
				};
			var C;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(C || (C = {}));
			const E = (e, t) => {
					const s = e.economics.subredditPremium[t];
					if (s && s.status === l.a.Fetched) {
						const s = v(e, t),
							r = Date.now();
						return s && r < s ? C.Subscribed : C.NotSubscribed
					}
					return C.DontKnow
				},
				I = (e, t) => {
					const s = e.user.account,
						r = e.economics.subredditPremium[t];
					if (s && r && r.status === l.a.Fetched) {
						const r = ((e.users.appliedBadges[s.id] || {})[t] || g).map(t => e.badges.models[t]).filter(Boolean);
						if (r) return {
							[i.a.Loyalty]: r.find(e => e.placement === o.a.First),
							[i.a.Achievement]: r.find(e => e.placement === o.a.Second),
							[i.a.Cosmetic]: r.find(e => !e.placement)
						}
					}
					return {
						[i.a.Loyalty]: void 0,
						[i.a.Achievement]: void 0,
						[i.a.Cosmetic]: void 0
					}
				};

			function _(e, t) {
				return (null == e ? void 0 : e.length) ? Object(n.a)(e.map(e => t[e]).filter(Boolean)) : g
			}
			const O = (e, t, s) => {
					var n;
					if (!r.d.spBadges(e)) return g;
					return _(null === (n = e.users.appliedBadges[s]) || void 0 === n ? void 0 : n[t], e.badges.models)
				},
				j = (e, t) => {
					const s = e.economics.subredditPremium[t.subredditId];
					if (s && s.status === l.a.Fetched) {
						const e = s.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function w(e, t) {
				const s = (e.economics.me.data.specialMemberships || {})[t];
				return !!(s && s.settings && s.settings.optOut)
			}

			function S(e, t) {
				const {
					badge: s,
					subredditId: r
				} = t, n = e.user.account ? e.user.account.id : void 0;
				if (Object(o.e)(s) && s.userId === n) return s;
				const a = e.badges.models,
					i = e.user.ownedBadges[r] || {},
					c = Object(o.e)(s) ? s.type : s.id;
				return Object.keys(i).map(e => a[e]).find(e => e && e.type === c)
			}

			function x(e, t, s, r) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === l.a.Fetched) {
					if (s === i.a.Loyalty || s === i.a.Achievement) return n.data.collections[s];
					if (s === i.a.Cosmetic && r) return n.data.collections[s][r]
				}
				return g
			}

			function A(e, t) {
				const s = x(e, t, i.a.Loyalty).find(e => "membership" === e.id);
				return s ? [].concat(s.locked, s.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : g
			}

			function L(e, t) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === l.a.Fetched) {
					const e = s.data.collections[i.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(o.f)
				}
				return g
			}

			function P(e, t) {
				return x(e, t, i.a.Cosmetic, i.c.Gallery).some(e => e.locked.some(e => Object(o.f)(e) || !!e.price))
			}
			const k = e => {
				const t = [],
					s = e.economics.paymentSystems;
				if (s.status === u.a.Fetched && s.data.stripe && s.data.stripe.sources) {
					const e = s.data.stripe.sources;
					for (const s in e) {
						const r = e[s];
						t.push({
							display: `${r.brand} •••• ${r.last4}`,
							id: s,
							type: c.a.SavedStripe
						})
					}
				}
				if (s.status === u.a.Fetched && s.data.braintree && s.data.braintree.sources) {
					const e = s.data.braintree.sources;
					for (const s in e) {
						const r = e[s];
						"PayPal" === r.brand && t.push({
							display: "PayPal",
							id: r.id,
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
			const T = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				F = (e, t) => Object.values(e.products.models).filter(e => e.type === d.a.Membership && t && e.subredditId === t),
				D = (e, t) => {
					if (!t) return {};
					const s = T.prices;
					F(e, t).forEach(e => {
						e.price && e.currency && (s[e.currency] = e.price)
					});
					const r = y(e, t);
					return r && r.price && r.currency && (s[r.currency] = r.price), s
				},
				B = (e, t) => {
					var s, r, n, a;
					const o = (null === (a = null === (n = null === (r = null === (s = e.features) || void 0 === s ? void 0 : s.crypto) || void 0 === r ? void 0 : r.points) || void 0 === n ? void 0 : n[t || ""]) || void 0 === a ? void 0 : a.nomenclature) || T;
					return {
						prices: D(e, t),
						member: o.member || T.member,
						memberPlural: o.memberPlural || T.memberPlural,
						memberAlt: o.memberAlt || T.memberAlt,
						memberAltPlural: o.memberAltPlural || T.memberAltPlural,
						membership: o.membership || T.membership,
						membershipAlt: o.membershipAlt || T.membershipAlt
					}
				},
				R = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === u.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				M = (e, t) => {
					const s = e.user.ownedBadges[t] || {};
					return !!Object.keys(s).length
				},
				U = e => {
					const t = e.economics.paymentSystems;
					return t.status === u.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				K = (e, t) => {
					let {
						subredditId: s
					} = t;
					if (!s) return;
					return e.economics.emotes[s]
				},
				V = (e, t) => {
					const s = t && e.economics.gifs[t];
					return !!s && s.hasGifProduct
				},
				G = (e, t, s) => {
					if (Object(b.r)(e, {
							subredditId: t
						})) return !0;
					const r = "replyToPost" !== s && Object(p.b)(e, {
						commentId: s
					});
					return !(!r || !Object(a.a)(r))
				},
				W = (e, t, s) => {
					if (Object(h.a)(e)) return !!t && Object(m.B)(e, {
						subredditId: t
					});
					if (!Object(f.b)(e, {
							subredditId: t
						})) return !1;
					if (Object(b.s)(e, {
							subredditId: t
						})) return !0;
					const n = "replyToPost" !== s && Object(p.b)(e, {
						commentId: s
					});
					if (n && Object(a.b)(n)) return !0;
					const o = r.d.spGiphy(e),
						i = V(e, t);
					return !(!o || !i) || o && i
				},
				H = (e, t, s) => {
					if (t) {
						const r = e.economics.banners.dismissedBanners[t];
						if (r && r.data) return !!r.data[s]
					}
				},
				q = e => e.economics.pointsCopy.data
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatMessageInput.3c0bf2a05eb27606b8d9.js.map