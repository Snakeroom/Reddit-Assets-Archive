// https://www.redditstatic.com/desktop2x/ChatMessageInput.0d65ee26ad41c05a90f4.js
// Retrieved at 6/23/2022, 6:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatMessageInput"], {
		"./node_modules/shallowequal/index.js": function(t, e) {
			t.exports = function(t, e, s, r) {
				var n = s ? s.call(r, t, e) : void 0;
				if (void 0 !== n) return !!n;
				if (t === e) return !0;
				if ("object" != typeof t || !t || "object" != typeof e || !e) return !1;
				var a = Object.keys(t),
					i = Object.keys(e);
				if (a.length !== i.length) return !1;
				for (var o = Object.prototype.hasOwnProperty.bind(e), c = 0; c < a.length; c++) {
					var d = a[c];
					if (!o(d)) return !1;
					var u = t[d],
						l = e[d];
					if (!1 === (n = s ? s.call(r, u, l, d) : void 0) || void 0 === n && u !== l) return !1
				}
				return !0
			}
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return o
			})), s.d(e, "b", (function() {
				return c
			})), s.d(e, "c", (function() {
				return d
			})), s.d(e, "d", (function() {
				return u
			})), s.d(e, "e", (function() {
				return l
			})), s.d(e, "f", (function() {
				return m
			})), s.d(e, "g", (function() {
				return p
			})), s.d(e, "h", (function() {
				return b
			})), s.d(e, "i", (function() {
				return h
			})), s.d(e, "j", (function() {
				return f
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/modal.ts"),
				a = s("./src/reddit/constants/modals.ts"),
				i = s("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const o = Object(r.a)(i.a),
				c = Object(r.a)(i.b),
				d = Object(r.a)(i.c),
				u = Object(r.a)(i.d),
				l = Object(r.a)(i.e),
				m = Object(r.a)(i.f),
				p = Object(r.a)(i.g),
				b = Object(r.a)(i.h),
				h = Object(r.a)(i.i),
				f = t => Object(n.h)(a.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: t
				})
		},
		"./src/reddit/actions/publicAccessNetwork/theaterSettings.ts": function(t, e, s) {
			"use strict";
			s.d(e, "c", (function() {
				return c
			})), s.d(e, "a", (function() {
				return d
			})), s.d(e, "b", (function() {
				return u
			}));
			var r = s("./node_modules/uuid/v4.js"),
				n = s.n(r),
				a = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const o = Object(a.a)(i.B),
				c = t => async e => {
					e(o(t))
				}, d = () => async t => {
					t(o({
						lastChatActivityUtcTs: Date.now()
					}))
				}, u = () => async t => {
					t(o({
						correlationId: n()()
					}))
				}
		},
		"./src/reddit/components/CommentsChat/Comment/AwardCountSpectacle/AwardCountAnimation/index.m.less": function(t, e, s) {
			t.exports = {
				container: "_2SvhnxZBM2RoeILBCJaD5n",
				isAnimated: "VI293JaWpM6E2N7qA18GU",
				gildIcon: "_3rbcaT8iS8Ep2_0IS9bNaC",
				hide: "D6DLiE3WESXxUZt-3w5rF",
				show: "_2sw_2-66SMwc0my0qCmuFJ",
				awardingIcon: "_1ZO1lfp292pRk_NeA_KGVk",
				count: "_1v25u3hsWeYJihslYeyZ33"
			}
		},
		"./src/reddit/components/CommentsChat/MessageInput/AwardButton.tsx": function(t, e, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/helpers/correlationIdTracker.ts"),
				d = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-redux/es/index.js")),
				u = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/makeCommentsPageKey/index.ts"),
				m = s("./src/reddit/selectors/comments.ts"),
				p = s("./src/reddit/selectors/commentSelector.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/communityAwards.ts"),
				f = s("./src/reddit/selectors/gold/awardIcon.ts"),
				g = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				y = s("./src/reddit/components/CommentsChat/Comment/AwardCountSpectacle/AwardCountAnimation/index.m.less"),
				v = s.n(y);
			class C extends n.Component {
				render() {
					const {
						className: t,
						count: e,
						iconUrl: s,
						isAnimated: r
					} = this.props;
					return a.a.createElement("div", {
						className: Object(i.a)(v.a.container, t, {
							[v.a.isAnimated]: r
						})
					}, a.a.createElement(g.a, {
						className: v.a.gildIcon
					}), r && s && a.a.createElement("div", {
						className: v.a.awardingIcon,
						style: {
							backgroundImage: `url("${s}")`
						}
					}), e ? a.a.createElement("div", {
						className: v.a.count
					}, e) : null)
				}
			}
			var I = Object(d.b)(() => Object(u.c)({
				iconUrl: (t, e) => {
					let {
						awardId: s
					} = e;
					if (!s) return;
					const r = Object(h.a)(t, s);
					return Object(f.a)(t, {
						award: r,
						minSize: 64
					})
				}
			}))(C);
			const E = Object(d.b)(() => Object(u.a)(t => t, (t, e) => {
					let {
						postId: s
					} = e;
					return Object(m.g)(t, {
						commentsPageKey: Object(l.a)(s)
					})
				}, b.G, (t, e) => {
					let {
						postId: s
					} = e;
					return Object(m.u)(t, {
						commentsPageKey: Object(l.a)(s)
					})
				}, (t, e, s, r) => {
					return {
						commentAwardIds: e.length ? e.reduce((e, s) => {
							const r = Object(p.b)(t, {
								commentId: s.id
							});
							if (r) {
								const {
									associatedAwardId: t
								} = r;
								if (t) return [...e, t]
							}
							return e
						}, []) : [],
						isFullyLoaded: r,
						postAwardCount: s.awardCountsById ? Object.values(s.awardCountsById).reduce((t, e) => t + e, 0) : s.allAwardings ? s.allAwardings.reduce((t, e) => t + e.count, 0) : 0
					}
				})),
				_ = t => ({
					initialCommentAwardIds: t.isFullyLoaded ? [...t.commentAwardIds] : [],
					initialPostAwardCount: t.isFullyLoaded ? t.postAwardCount : 0,
					prevIsFullyLoaded: t.isFullyLoaded,
					prevPostId: t.postId
				});
			class O extends n.Component {
				constructor(t) {
					super(t), this.state = _(t)
				}
				static getDerivedStateFromProps(t, e) {
					return e.prevPostId !== t.postId || !e.prevIsFullyLoaded && t.isFullyLoaded ? _(t) : null
				}
				render() {
					const {
						initialPostAwardCount: t,
						initialCommentAwardIds: e
					} = this.state, {
						postAwardCount: s,
						commentAwardIds: r,
						className: n,
						isFullyLoaded: i
					} = this.props;
					if (!i) return a.a.createElement(I, {
						className: n,
						count: 0
					});
					const o = Math.max(s, t + r.length - e.length),
						c = r.length - 1,
						d = r[c],
						u = r.length !== e.length;
					return a.a.createElement(I, {
						awardId: d,
						className: n,
						count: o,
						isAnimated: u,
						key: c
					})
				}
			}
			var j = E(O),
				S = s("./src/reddit/components/CommentsChat/MessageInput/index.m.less"),
				w = s.n(S);
			e.a = t => {
				let {
					postId: e,
					showSubmitInsideTextArea: n,
					isLivestreaming: d,
					handleGiveAward: u,
					sendEvent: l
				} = t;
				return a.a.createElement(o.e, {
					className: Object(i.a)(w.a.ChatButton, {
						[w.a.LivestreamingChatButton]: d,
						[w.a.leftPad]: !n
					}),
					"aria-label": r.fbt._("give award", null, {
						hk: "1nXRWY"
					}),
					onClick: async t => {
						t.stopPropagation();
						const r = Object(c.d)(c.a.GildingFlow, !0);
						u(r);
						const {
							clickGildEvent: n,
							clickRpanGiveAward: a
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						l((d ? a : n)(e))
					}
				}, a.a.createElement(j, {
					postId: e
				}))
			}
		},
		"./src/reddit/components/CommentsChat/MessageInput/index.m.less": function(t, e, s) {
			t.exports = {
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
				richTextJson: "_2i9z4_kONlAq_kaKny5o8A"
			}
		},
		"./src/reddit/components/CommentsChat/MessageInput/index.tsx": function(t, e, s) {
			"use strict";
			s.r(e);
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/noop.js"),
				a = s.n(n),
				i = s("./node_modules/lodash/throttle.js"),
				o = s.n(i),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				u = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				b = s("./src/reddit/models/PostDraft/index.ts"),
				h = s("./src/reddit/actions/comment/authoring.ts"),
				f = s("./src/reddit/actions/gold/modals.ts"),
				g = s("./src/reddit/actions/publicAccessNetwork/theaterSettings.ts"),
				y = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				v = s("./src/reddit/components/CommentsChat/Comment/Reply/index.tsx");
			const C = t => {
				let {
					durationSec: e,
					onTimeout: s
				} = t;
				const [r, n] = Object(c.useState)(e);
				Object(c.useEffect)(() => {
					if (r <= 0) return void s();
					const t = setTimeout(() => n(r - 1), 1e3);
					return () => clearTimeout(t)
				}, [r, s]);
				const a = Math.floor(r / 60),
					i = r - 60 * a;
				return d.a.createElement("span", null, a, ":", i > 9 ? i : `0${i}`)
			};
			var I = s("./src/reddit/components/RichTextEditor/index.tsx"),
				E = s("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				_ = s("./src/reddit/controls/Button/index.tsx"),
				O = s("./src/reddit/controls/ErrorText/index.tsx"),
				j = s("./src/reddit/helpers/correlationIdTracker.ts"),
				S = s("./src/reddit/helpers/richTextEditor/index.ts"),
				w = s("./src/reddit/helpers/trackers/rpan.ts"),
				A = s("./src/reddit/icons/fonts/helpers.tsx");
			var x = t => d.a.createElement("i", {
					className: Object(m.a)(Object(A.b)("history", t.isFilled), t.className)
				}),
				P = s("./src/reddit/icons/svgs/Close/index.tsx"),
				k = s("./src/reddit/icons/svgs/Send/index.tsx"),
				L = s("./src/reddit/icons/svgs/Send2/index.tsx"),
				N = s("./src/reddit/models/PostCreationForm/index.ts"),
				F = s("./src/reddit/selectors/chatPost.ts"),
				T = s("./src/reddit/selectors/comments.ts"),
				D = s("./src/reddit/selectors/posts.ts"),
				B = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				R = s("./src/reddit/components/CommentsChat/MessageInput/AwardButton.tsx"),
				M = s("./src/lib/constants/index.ts"),
				K = s("./src/reddit/components/CommentsChat/MessageInput/index.m.less"),
				U = s.n(K),
				G = s("./src/reddit/helpers/trackers/commentsChat.ts"),
				V = s("./src/reddit/selectors/experiments/chat.ts");
			const q = "chat_submission_from_rte",
				W = 1e3,
				H = 15,
				Z = p.a.form("Form", U.a),
				z = p.a.wrapped(_.e, "ChatButton", U.a),
				J = p.a.wrapped(I.a, "RichTextEditor", U.a),
				X = p.a.wrapped(y.a, "SmallChatUserIcon", U.a),
				Y = Object(u.b)(() => Object(l.c)({
					draft: T.i,
					errorMsgs: T.L,
					errorType: T.M,
					hasError: T.v,
					isChatPost: F.d,
					isLivePostSpamRateEnabled: V.g,
					liveStreamingChatCharacterLimit: t => {
						const e = Object(B.a)(t);
						return e ? e - 3 : 197
					},
					pending: (t, e) => t.features.comments.submit.pending[e.draftKey],
					post: D.G
				}), (t, e) => {
					let {
						isEditing: s,
						comment: r,
						commentsPageKey: n,
						draftKey: a,
						postId: i,
						replyComment: o,
						isLivestreaming: c,
						scrollToBottom: d
					} = e;
					return {
						dispatchSubmit: async (e, o, u) => {
							s && r ? await t(Object(h.j)({
								id: r.id,
								commentsPageKey: n,
								draftKey: a,
								formData: e
							})) : u ? t(Object(h.n)({
								commentsPageKey: n,
								draftKey: a,
								parentCommentDepth: u.depth,
								parentCommentId: u.id,
								formData: e,
								editorMode: o
							})) : await t(Object(h.p)({
								postId: i,
								commentsPageKey: n,
								draftKey: a,
								formData: e,
								editorMode: o,
								disableAutofocus: !0,
								isLiveStreaming: c
							})), d && d()
						},
						handleGiveAward: e => t(Object(f.d)({
							correlationId: e,
							thingId: i
						})),
						onCancelEdit: () => r && t(Object(h.d)({
							commentId: r.id,
							commentsPageKey: n
						})),
						onLivestreamingChatMessageEdit: () => t(Object(g.a)()),
						closeReply: () => o && t(Object(h.b)({
							parentCommentId: o.id,
							commentsPageKey: n
						})),
						clearSubmitError: e => t(Object(h.a)({
							draftKey: e
						}))
					}
				});
			class Q extends d.a.Component {
				constructor(t) {
					super(t), this.focusOnForm = () => this.editor && this.editor.focus(), this.setRTEComponentRef = t => this.editor = t, this.handleCancel = t => {
						t.preventDefault(), this.props.onCancelEdit && this.props.onCancelEdit()
					}, this.handleChange = (t, e) => {
						this.state.hasChanged && (e = this.state.hasChanged);
						const {
							isLivestreaming: s,
							liveStreamingChatCharacterLimit: r
						} = this.props, n = !!s && t.isBound && t.editorState.getCurrentContent().getPlainText().length > r;
						e && t.isBound && (e = Boolean(e && t.editorState.getCurrentContent().getPlainText().trim())), this.setState(() => ({
							showError: n,
							rteState: t,
							hasChanged: e
						})), this.props.isLivestreaming && e && this.passChangeToLivestreaming()
					}, this.handleFocus = () => {
						this.props.isLivestreaming && this.passChangeToLivestreaming(), this.props.onFocusMessageInput && this.props.onFocusMessageInput()
					}, this.passChangeToLivestreaming = o()(() => this.props.onLivestreamingChatMessageEdit(), W, {
						leading: !1,
						trailing: !0
					}), this.onClickGiveAward = async t => {
						t.stopPropagation();
						const {
							handleGiveAward: e,
							isLivestreaming: r,
							postId: n,
							sendEvent: a
						} = this.props;
						e(Object(j.d)(j.a.GildingFlow, !0));
						const {
							clickGildEvent: i,
							clickRpanGiveAward: o
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						a((r ? o : i)(n))
					}, this.handleSubmit = t => {
						t.preventDefault(), this.onSubmit()
					}, this.onSubmit = () => {
						if (this.canSubmit()) {
							const t = {
								commentMode: N.i.RICH_TEXT,
								draftType: b.c.replyToComment,
								rteState: this.state.rteState,
								hasFocus: !0,
								text: ""
							};
							this.cleanInputForm(), this.props.dispatchSubmit(t, N.i.RICH_TEXT, this.props.replyComment)
						}
						this.props.isLivestreaming && this.props.sendEvent(Object(w.z)(this.props.postId)), this.props.replyComment && this.props.sendEvent(Object(G.d)(this.props.replyComment.id))
					}, this.canSubmit = () => Boolean(!this.props.pending && this.state.hasChanged && !this.state.showError && (!this.props.isLivePostSpamRateEnabled || !this.state.spamTimeoutDraftKey)), this.state = {
						hasChanged: !1,
						showError: t.hasError,
						rteState: t.isEditing && t.comment ? E.a.createInitial(t.comment.media.richtextContent) : E.a.createInitial(),
						spamTimeoutDraftKey: null
					}
				}
				isReplyCommentChanged(t) {
					const {
						replyComment: e
					} = this.props;
					return (t.replyComment && t.replyComment.id) !== (e && e.id)
				}
				shouldComponentUpdate(t, e) {
					return e.rteState.editorKey !== this.state.rteState.editorKey || e.spamTimeoutDraftKey !== this.state.spamTimeoutDraftKey || e.hasChanged !== this.state.hasChanged || e.showError !== this.state.showError || t.pending !== this.props.pending || t.postId !== this.props.postId || this.isReplyCommentChanged(t)
				}
				UNSAFE_componentWillReceiveProps(t) {
					!this.props.isEditing && this.props.draft && this.props.draft.rteState && t.draft && null === t.draft.rteState && this.cleanInputForm(), this.isReplyCommentChanged(t) && t.replyComment && this.focusOnForm(), t.hasError !== this.props.hasError && this.setState({
						showError: t.hasError
					})
				}
				componentDidUpdate(t) {
					t.pending && !this.props.pending && this.focusOnForm(), this.props.isChatPost && this.props.isLivePostSpamRateEnabled && this.props.errorType === M.I.RATELIMIT && t.errorType !== this.props.errorType && (this.props.sendEvent(Object(G.e)(this.props.postId)), this.setState({
						spamTimeoutDraftKey: this.props.draftKey
					}))
				}
				componentWillUnmount() {
					this.props.isLivePostSpamRateEnabled && this.state.spamTimeoutDraftKey && this.props.sendEvent(Object(G.a)(this.props.postId))
				}
				cleanInputForm() {
					this.setState({
						rteState: E.a.createInitial()
					})
				}
				render() {
					var t;
					const {
						isV2: e,
						closeReply: s,
						errorMsgs: n,
						errorType: i,
						isEditing: o,
						isLivestreaming: c,
						isLivePostSpamRateEnabled: u,
						sendEvent: l,
						handleGiveAward: p,
						liveStreamingChatCharacterLimit: b,
						pending: h,
						post: f,
						postId: g,
						replyComment: y
					} = this.props, I = c ? r.fbt._("Send message ({characterLimit} character limit)", [r.fbt._param("characterLimit", b.toLocaleString())], {
						hk: "RIcb6"
					}) : r.fbt._("Send a message (use the Enter key)", null, {
						hk: "3yojgj"
					}), E = f.isGildable && c && !o, _ = c, j = i === M.I.RATELIMIT && parseInt(null === (t = null == n ? void 0 : n[0]) || void 0 === t ? void 0 : t.replace(/\D/g, "")) || H;
					return d.a.createElement("div", {
						className: Object(m.a)(U.a.FormWrapper, {
							[U.a.LivestreamingWrapper]: c,
							[U.a.v2]: e,
							[U.a.V2ChatPost]: !c && e && !o
						})
					}, u && !!this.state.spamTimeoutDraftKey && d.a.createElement("p", {
						className: U.a.spamTimeout
					}, r.fbt._("Time until you can message", null, {
						hk: "3mkJ7J"
					}), " ", d.a.createElement(C, {
						durationSec: j,
						onTimeout: () => {
							this.props.clearSubmitError(this.state.spamTimeoutDraftKey), this.setState({
								spamTimeoutDraftKey: null
							})
						}
					}), d.a.createElement(x, null)), !o && y && d.a.createElement(v.a, {
						commentId: y.id,
						isMessageComposer: !0,
						isLivestreaming: c,
						onReplyClick: s
					}), d.a.createElement("div", {
						className: U.a.inputLine
					}, d.a.createElement(Z, {
						className: Object(m.a)({
							[U.a.Editing]: o
						}),
						onSubmit: this.handleSubmit,
						onReset: this.handleCancel
					}, !e && d.a.createElement($, {
						isEditing: !!o,
						isLivestreaming: !!c
					}), d.a.createElement(J, {
						className: Object(m.a)(U.a.RichTextEditor, {
							[U.a.Livestreaming]: c && !o,
							[U.a.Editing]: !c && o,
							[U.a.isV2ChatPost]: !c && e
						}),
						focusableContentRTEClassName: Object(m.a)({
							[U.a.LivestreamingFocusableContent]: c && !o,
							[U.a.V2ChatPostFocusableContent]: !c && e
						}),
						dataTestId: q,
						editorType: S.a.Comment,
						initialMinHeight: 20,
						initialHeight: void 0,
						rteState: this.state.rteState,
						rteRef: this.setRTEComponentRef,
						onChange: this.handleChange,
						onFocus: this.handleFocus,
						onSubmit: this.onSubmit,
						placeholderText: I,
						readOnly: h,
						showSubmitButton: _ && !this.state.showError,
						submitButtonClassName: Object(m.a)(U.a.insetSubmitButton, U.a.submitButton),
						submitOnEnter: !0,
						trackToolbarClick: a.a,
						hideToolbar: !0,
						noBorder: !0,
						isChatPost: !0
					}), o && d.a.createElement(z, {
						className: Object(m.a)(U.a.ChatButton, {
							[U.a.LivestreamingResetButton]: c
						}),
						type: "reset"
					}, d.a.createElement(P.a, null)), !_ && d.a.createElement(z, {
						className: Object(m.a)(U.a.ChatButton, {
							[U.a.LivestreamingChatButton]: c && !o,
							[U.a.LivestreamingResetButton]: c && o,
							[U.a.v2ChatPostButton]: !c && !o && e
						}),
						type: "submit",
						disabled: !this.canSubmit(),
						"aria-label": r.fbt._("send a message", null, {
							hk: "4bL65Y"
						})
					}, e ? d.a.createElement(L.a, null) : d.a.createElement(k.a, null))), E && d.a.createElement(R.a, {
						showSubmitInsideTextArea: _,
						isLivestreaming: c,
						sendEvent: l,
						postId: g,
						handleGiveAward: p
					})), this.state.showError && Object(O.c)(n.length ? n : [`Input text must be less than ${b} characters`]))
				}
			}
			const $ = t => {
				let {
					isEditing: e,
					isLivestreaming: s
				} = t;
				return s ? null : e ? d.a.createElement(X, {
					height: 20,
					width: 20
				}) : d.a.createElement(y.a, {
					height: 25,
					width: 25
				})
			};
			e.default = Y(Q)
		},
		"./src/reddit/components/FocusableContent/index.m.less": function(t, e, s) {
			t.exports = {
				FocusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				focusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				isFocused: "_3F2J0fSnCI3ZvF_tBSaV0s",
				noBorder: "_1CpUVAt2tGEwaaBV3nZNJs"
			}
		},
		"./src/reddit/components/FocusableContent/index.tsx": function(t, e, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/FocusableContent/index.m.less"),
				c = s.n(o);
			e.a = i.a.wrapped(t => n.a.createElement("div", {
				className: Object(a.a)(t.className, {
					[c.a.isFocused]: t.isFocused,
					[c.a.noBorder]: t.noBorder
				})
			}, t.children), "FocusableContent", c.a)
		},
		"./src/reddit/constants/chat.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return r
			}));
			var r;
			! function(t) {
				t.None = "none", t.Compact = "compact", t.Full = "full_screen"
			}(r || (r = {}));
			var n;
			! function(t) {
				t.SubredditChatNotifcationFtux = "chat_subreddit_notification_ftux"
			}(n || (n = {}))
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return r
			})), s.d(e, "H", (function() {
				return u
			})), s.d(e, "i", (function() {
				return l
			})), s.d(e, "j", (function() {
				return m
			})), s.d(e, "D", (function() {
				return p
			})), s.d(e, "A", (function() {
				return b
			})), s.d(e, "E", (function() {
				return h
			})), s.d(e, "C", (function() {
				return f
			})), s.d(e, "B", (function() {
				return g
			})), s.d(e, "u", (function() {
				return y
			})), s.d(e, "v", (function() {
				return v
			})), s.d(e, "x", (function() {
				return C
			})), s.d(e, "r", (function() {
				return I
			})), s.d(e, "p", (function() {
				return E
			})), s.d(e, "q", (function() {
				return _
			})), s.d(e, "o", (function() {
				return O
			})), s.d(e, "z", (function() {
				return j
			})), s.d(e, "s", (function() {
				return S
			})), s.d(e, "y", (function() {
				return w
			})), s.d(e, "G", (function() {
				return A
			})), s.d(e, "t", (function() {
				return x
			})), s.d(e, "c", (function() {
				return P
			})), s.d(e, "n", (function() {
				return k
			})), s.d(e, "k", (function() {
				return L
			})), s.d(e, "b", (function() {
				return N
			})), s.d(e, "d", (function() {
				return F
			})), s.d(e, "e", (function() {
				return T
			})), s.d(e, "w", (function() {
				return D
			})), s.d(e, "F", (function() {
				return B
			})), s.d(e, "f", (function() {
				return R
			})), s.d(e, "l", (function() {
				return M
			})), s.d(e, "m", (function() {
				return K
			})), s.d(e, "g", (function() {
				return U
			})), s.d(e, "h", (function() {
				return G
			}));
			var r, n = s("./src/reddit/constants/chat.ts"),
				a = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			! function(t) {
				t.Theater = "theater", t.DU = "discovery_unit", t.Feed = "feed_post"
			}(r || (r = {}));
			const o = (t, e) => {
					if (e) {
						const s = i.B(t, e.post.id),
							r = i.I(t, e.post.id),
							n = i.hb(t);
						if (e.post.authorInfo && r && (r.authorId = e.post.authorInfo.id), s) {
							s.streamPublicId = e.stream.stream_id, s.id = e.stream.stream_id;
							const r = Object(a.j)(t, {
								streamIdFromPath: e.post.id
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
						subreddit: i.hb(t)
					}
				},
				c = (t, e, s) => {
					if (!e || !s) return;
					const r = Object(a.j)(t, {
							streamIdFromPath: e.post.id
						}),
						i = e.chat_disabled || s.chatState === n.a.None;
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
						chatState: i ? n.a.None : n.a.Compact,
						scrubbingStartMs: s.scrubbingStartMs,
						scrubbingEndMs: s.scrubbingEndMs,
						playerType: s.playerType
					}
				},
				d = t => ({
					correlationId: t.publicAccessNetwork.theaterSettings.correlationId
				}),
				u = () => t => ({
					source: "stream_du",
					action: "view",
					noun: "stream_du",
					...o(t)
				}),
				l = () => t => ({
					source: "stream_du",
					action: "click",
					noun: "show_less",
					...o(t)
				}),
				m = (t, e) => s => ({
					source: "stream_du",
					action: "click",
					noun: "enlarge",
					...o(s, t),
					actionInfo: i.d(s, {
						position: e || 0
					})
				}),
				p = (t, e) => s => ({
					source: "stream_player",
					action: "fail",
					noun: "stream",
					playback: c(s, t, e),
					...d(s),
					...t && {
						...o(s, t)
					}
				}),
				b = (t, e) => s => ({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: c(s, t, e),
					...d(s),
					...o(s, t)
				}),
				h = (t, e) => s => ({
					source: "stream_player",
					action: "play",
					noun: "stream",
					playback: c(s, t, e),
					...d(s),
					...o(s, t)
				}),
				f = (t, e) => s => ({
					source: "stream_player",
					action: "complete",
					noun: "stream",
					playback: c(s, t, e),
					...d(s),
					...o(s, t)
				}),
				g = (t, e, s) => r => ({
					source: "stream_player",
					action: "click",
					noun: t,
					playback: c(r, e, s),
					...d(r),
					...o(r, e)
				}),
				y = (t, e, s, r) => n => ({
					source: "stream_player",
					action: "click",
					noun: t,
					playback: c(n, e, s),
					...d(n),
					...o(n, e),
					actionInfo: i.d(n, {
						referralId: r
					})
				}),
				v = (t, e, s) => r => ({
					source: "stream_player",
					action: "click",
					noun: t,
					playback: c(r, e, s),
					...d(r),
					...o(r, e)
				}),
				C = t => e => ({
					source: "stream_player",
					action: "click",
					noun: "stream_from_desktop",
					...d(e),
					...o(e, t)
				}),
				I = (t, e) => s => ({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: c(s, t, e),
					...d(s),
					...o(s, t)
				}),
				E = (t, e) => s => ({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: c(s, t, e),
					...d(s),
					...o(s, t)
				}),
				_ = (t, e) => s => ({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: c(s, t, e),
					...d(s),
					...o(s, t)
				}),
				O = (t, e) => s => ({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: c(s, t, e),
					...o(s, t)
				}),
				j = t => e => {
					const s = Object(a.l)(e, t);
					return {
						source: "stream_chat",
						action: "click",
						noun: "send_chat",
						...o(e, s)
					}
				},
				S = (t, e, s) => r => ({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: t.name.toLowerCase()
					},
					playback: c(r, e, s),
					...o(r, e)
				}),
				w = (t, e) => s => ({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: c(s, t, e),
					...d(s)
				}),
				A = t => e => ({
					source: "post",
					action: "view",
					noun: "post",
					profile: i.R(e),
					screen: i.Z(e),
					...o(e, t)
				}),
				x = t => e => {
					const s = o(e, t);
					return {
						source: "post",
						action: "consume",
						noun: "post",
						profile: i.R(e),
						screen: i.Z(e),
						...s
					}
				},
				P = t => e => ({
					source: "stream_player",
					action: "click",
					noun: "follow",
					...o(e, t)
				}),
				k = t => e => ({
					source: "stream_player",
					action: "click",
					noun: "unfollow",
					...o(e, t)
				}),
				L = t => e => ({
					source: "stream_player",
					action: "click",
					noun: "subscribe",
					...o(e, t),
					targetSubreddit: i.hb(e)
				}),
				N = (t, e) => s => ({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: c(s, t, e),
					...o(s, t)
				}),
				F = (t, e) => s => ({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: c(s, t, e),
					...o(s, t)
				}),
				T = (t, e) => s => ({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: c(s, t, e),
					...o(s, t)
				}),
				D = (t, e) => s => ({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: c(s, t, e),
					...o(s, t)
				}),
				B = (t, e) => s => ({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: c(s, t, e),
					...o(s, t)
				}),
				R = (t, e) => s => ({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: c(s, t, e),
					...o(s, t)
				}),
				M = (t, e) => s => ({
					source: "stream_player",
					action: "swipe",
					noun: "next",
					playback: c(s, t, e),
					...o(s, t),
					...d(s)
				}),
				K = (t, e) => s => ({
					source: "stream_player",
					action: "swipe",
					noun: "previous",
					playback: c(s, t, e),
					...o(s, t),
					...d(s)
				}),
				U = (t, e) => s => ({
					source: "rpanstudio_banner",
					action: "click",
					noun: t,
					...o(s, e),
					...d(s)
				}),
				G = (t, e) => s => ({
					source: "rpanstudio_modal",
					action: "click",
					noun: t,
					...o(s, e),
					...d(s)
				})
		},
		"./src/reddit/icons/svgs/Send2/index.tsx": function(t, e, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			e.a = t => n.a.createElement("svg", {
				className: t.className,
				id: t.id,
				viewBox: "0 0 24 24",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M22.6559 10.8L2.39994 0.660011C2.15389 0.5293 1.87278 0.479801 1.59687 0.5186C1.32096 0.557399 1.06441 0.682508 0.863944 0.876011C0.656797 1.06387 0.51403 1.31216 0.455877 1.5857C0.397725 1.85923 0.427136 2.14413 0.539944 2.40001L4.58394 12L0.539944 21.6C0.429918 21.8544 0.401998 22.1368 0.460075 22.4078C0.518153 22.6789 0.659334 22.925 0.863944 23.112C1.10992 23.347 1.43582 23.4799 1.77594 23.484C1.99315 23.4934 2.20883 23.4437 2.39994 23.34L22.6559 13.2C22.8781 13.088 23.0648 12.9165 23.1952 12.7046C23.3256 12.4927 23.3947 12.2488 23.3947 12C23.3947 11.7512 23.3256 11.5073 23.1952 11.2954C23.0648 11.0836 22.8781 10.9121 22.6559 10.8Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/models/Payments/index.ts": function(t, e, s) {
			"use strict";
			var r, n, a, i;
			s.d(e, "b", (function() {
					return n
				})), s.d(e, "a", (function() {
					return a
				})),
				function(t) {
					t.PayPal = "paypal", t.Stripe = "stripe"
				}(r || (r = {})),
				function(t) {
					t.PayPal = "PAYPAL", t.Stripe = "STRIPE"
				}(n || (n = {})),
				function(t) {
					t.NewPayPal = "new-paypal", t.NewStripe = "new-stripe", t.SavedPayPal = "saved-paypal", t.SavedStripe = "saved-stripe"
				}(a || (a = {})),
				function(t) {
					t.Comment = "comment", t.Post = "post", t.Profile = "profile", t.Subreddit = "subreddit"
				}(i || (i = {}))
		},
		"./src/reddit/models/Product/index.ts": function(t, e, s) {
			"use strict";
			var r;

			function n(t) {
				return t.substring(t.lastIndexOf("|") + 1)
			}
			s.d(e, "a", (function() {
					return r
				})), s.d(e, "b", (function() {
					return n
				})),
				function(t) {
					t.Badge = "badge", t.EmotesPack = "emotes_pack", t.Giphy = "giphy", t.Membership = "membership"
				}(r || (r = {}))
		},
		"./src/reddit/models/PublicAccessNetwork/index.ts": function(t, e, s) {
			"use strict";
			var r;
			s.d(e, "a", (function() {
					return r
				})),
				function(t) {
					t.NOT_STARTED = "NOT_STARTED", t.PUBLISHED = "PUBLISHED", t.IS_LIVE = "IS_LIVE", t.DISCONNECTED = "DISCONNECTED", t.KILLED = "KILLED", t.PURGED = "PURGED", t.ENDED = "ENDED"
				}(r || (r = {}))
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(t, e, s) {
			"use strict";
			s.d(e, "l", (function() {
				return E
			})), s.d(e, "m", (function() {
				return j
			})), s.d(e, "i", (function() {
				return A
			})), s.d(e, "d", (function() {
				return L
			})), s.d(e, "h", (function() {
				return N
			})), s.d(e, "k", (function() {
				return F
			})), s.d(e, "c", (function() {
				return T
			})), s.d(e, "f", (function() {
				return D
			})), s.d(e, "a", (function() {
				return M
			})), s.d(e, "j", (function() {
				return K
			})), s.d(e, "b", (function() {
				return U
			})), s.d(e, "e", (function() {
				return G
			})), s.d(e, "g", (function() {
				return V
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				i = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				o = s("./src/reddit/selectors/posts.ts"),
				c = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				d = s("./node_modules/lodash/memoize.js");
			const u = t => t.publicAccessNetwork.listings,
				l = s.n(d)()(t => Object(n.a)(Object(r.a)(u, e => t && e.hasOwnProperty(t) ? e[t] : [])));
			var m = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const p = t => t.publicAccessNetwork.models,
				b = t => t.publicAccessNetwork.reports.reported,
				h = t => t.publicAccessNetwork.history,
				f = t => t.publicAccessNetwork.history.cursor,
				g = t => t.publicAccessNetwork.history.visitOrder,
				y = t => t.publicAccessNetwork.hlsStreams,
				v = Object(r.a)(y, t => t.ended),
				C = Object(r.a)(y, t => t.removed),
				I = Object(r.a)(p, v, C, (t, e, s) => {
					const r = e.reduce((t, e) => {
						const s = t[e];
						if (!s) return t;
						const r = s.stream.state,
							n = B(r, i.a.ENDED) ? i.a.ENDED : r,
							a = s.stream.vod_accessible;
						return n === r && !0 === a ? t : {
							...t,
							[e]: {
								...s,
								stream: {
									...s.stream,
									state: n,
									vod_accessible: !0
								}
							}
						}
					}, t);
					return s.reduce((t, e) => {
						const s = t[e];
						if (!s) return t;
						const r = s.stream.state,
							n = B(r, i.a.ENDED) ? i.a.ENDED : r,
							a = s.stream.vod_accessible;
						return n === r && !1 === a ? t : {
							...t,
							[e]: {
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
				E = (t, e) => {
					return I(t)[Object(a.g)(e)]
				},
				_ = Object(r.a)((t, e) => {
					let {
						streamIdFromPath: s
					} = e;
					return s
				}, (t, e) => l(e.listingName)(t, e), I, b, o.h, (t, e, s, r, n) => {
					const o = [];
					if (t) {
						const e = Object(a.g)(t);
						s[e] && o.push(e)
					}
					const c = o.concat(e),
						d = [...new Set(c)],
						u = new Set([...r, ...n]);
					return d.filter(t => {
						const e = s[t];
						return !u.has(t) && !e.post.isHidden && e.stream.state !== i.a.KILLED && e.stream.state !== i.a.PURGED
					})
				}),
				O = Object(r.a)((t, e) => {
					let {
						count: s
					} = e;
					return s
				}, I, (t, e) => {
					let {
						listingName: s,
						streamIdFromPath: r
					} = e;
					return _(t, {
						listingName: s,
						streamIdFromPath: r
					})
				}, (t, e, s) => {
					const r = s.map(t => e[t]).sort((t, e) => e.rank - t.rank).map(t => t.post.id);
					return t ? r.slice(0, t) : r
				}),
				j = Object(r.a)(I, O, (t, e) => {
					const s = e[0];
					if (s) return t[s]
				}),
				S = Object(r.a)(g, (t, e) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: n
					} = e;
					return O(t, {
						listingName: s || n,
						streamIdFromPath: r
					})
				}, (t, e) => {
					const s = new Set(t),
						r = e.filter(t => !s.has(t));
					if (r.length) return r[0]
				}),
				w = Object(r.a)((t, e) => {
					let {
						streamIdFromPath: s
					} = e;
					return s
				}, I, (t, e) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: n
					} = e;
					return O(t, {
						listingName: s || n,
						streamIdFromPath: r
					})
				}, h, (t, e, s, r) => {
					if (!s.length) return;
					const n = s.map(t => e[t]).filter(e => e && e.post.id !== t),
						a = n.find(t => t.stream.state === i.a.IS_LIVE);
					if (a) return a.post.id;
					const o = n.find(t => {
						if (!t.stream.vod_accessible) return !1;
						return (r.timestamps[t.post.id] || 0) < t.broadcast_time
					});
					return o ? o.post.id : void 0
				}),
				A = Object(n.a)(Object(r.a)(w, I, (t, e) => t ? e[t] : void 0)),
				x = Object(r.a)((t, e) => {
					let {
						streamIdFromPath: s
					} = e;
					return s ? Object(a.g)(s) : void 0
				}, w, b, o.h, (t, e) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: n
					} = e;
					return O(t, {
						listingName: s || n,
						streamIdFromPath: r
					})
				}, (t, e, s, r, n) => !t || s.includes(t) || r.includes(t) ? e || n[0] : t),
				P = Object(r.a)(f, g, S, (t, e, s) => t < e.length - 1 ? e[t + 1] : s),
				k = Object(r.a)(f, g, (t, e) => {
					if (t > 0) return e[t - 1]
				}),
				L = Object(n.a)(Object(r.a)(x, I, (t, e) => t ? e[t] : void 0)),
				N = Object(n.a)(Object(r.a)(P, I, (t, e) => t ? e[t] : void 0)),
				F = Object(n.a)(Object(r.a)(k, I, (t, e) => t ? e[t] : void 0)),
				T = (Object(n.a)(Object(r.a)(t => t.publicAccessNetwork.preloads.discoveryUnitThumbnails, I, (t, e) => Object.keys(t).filter(t => !!e[t]).map(s => ({
					...e[s],
					preloadedPreviewUrl: t[s]
				})))), Object(r.a)(x, t => t.publicAccessNetwork.preloads.streamPreviews, (t, e) => t && e[t])),
				D = Object(r.a)((t, e) => {
					let {
						streamIdFromPath: s
					} = e;
					return s ? E(t, s) : void 0
				}, t => !t || t.chat_disabled || t.post.isArchived || t.post.isLocked);

			function B(t, e) {
				const s = {
					[i.a.NOT_STARTED]: 0,
					[i.a.PUBLISHED]: 1,
					[i.a.IS_LIVE]: 2,
					[i.a.DISCONNECTED]: 2,
					[i.a.ENDED]: 3,
					[i.a.KILLED]: 4,
					[i.a.PURGED]: 4
				};
				return s[e] >= s[t]
			}
			const R = Object(r.a)(x, h, (t, e) => t && e.timestamps[t] || 0);
			var M;
			! function(t) {
				t[t.LIVE = 0] = "LIVE", t[t.VOD = 1] = "VOD", t[t.UNAVAILABLE = 2] = "UNAVAILABLE", t[t.INTRO = 3] = "INTRO"
			}(M || (M = {}));
			const K = Object(r.a)(x, I, m.b, (t, e, s) => {
					if (s) return M.INTRO;
					const r = t && e[t];
					if (!r) return M.UNAVAILABLE;
					const n = r.stream.state;
					return n === i.a.IS_LIVE || n === i.a.DISCONNECTED ? M.LIVE : n === i.a.ENDED && r.stream.vod_accessible ? M.VOD : M.UNAVAILABLE
				}),
				U = Object(r.a)(L, K, m.b, c.b, c.o, (t, e, s, r, n) => s ? r : t ? e === M.LIVE || e === M.VOD ? t.stream.hls_url : n : void 0),
				G = Object(r.a)(L, K, R, (t, e, s) => t ? e === M.LIVE ? t.broadcast_time : e === M.VOD && s < t.broadcast_time ? s : 0 : 0),
				V = (t, e) => {
					const s = p(t);
					return !!s && s[e] && s[e].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(t, e, s) {
			"use strict";
			s.d(e, "b", (function() {
				return o
			})), s.d(e, "c", (function() {
				return c
			})), s.d(e, "a", (function() {
				return d
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const i = t => t.publicAccessNetwork.theaterSettings,
				o = Object(r.a)(i, a.n, (t, e) => e && !t.isIntroFinished),
				c = Object(r.a)(i, t => t.lastChatActivityUtcTs),
				d = t => !!t && t + n.a > Date.now()
		},
		"./src/reddit/selectors/economics.ts": function(t, e, s) {
			"use strict";
			s.d(e, "c", (function() {
				return y
			})), s.d(e, "o", (function() {
				return v
			})), s.d(e, "a", (function() {
				return C
			})), s.d(e, "x", (function() {
				return I
			})), s.d(e, "f", (function() {
				return E
			})), s.d(e, "i", (function() {
				return _
			})), s.d(e, "q", (function() {
				return O
			})), s.d(e, "h", (function() {
				return j
			})), s.d(e, "z", (function() {
				return S
			})), s.d(e, "l", (function() {
				return w
			})), s.d(e, "n", (function() {
				return A
			})), s.d(e, "e", (function() {
				return x
			})), s.d(e, "d", (function() {
				return P
			})), s.d(e, "j", (function() {
				return k
			})), s.d(e, "p", (function() {
				return L
			})), s.d(e, "k", (function() {
				return T
			})), s.d(e, "r", (function() {
				return B
			})), s.d(e, "y", (function() {
				return R
			})), s.d(e, "u", (function() {
				return M
			})), s.d(e, "v", (function() {
				return K
			})), s.d(e, "b", (function() {
				return U
			})), s.d(e, "w", (function() {
				return G
			})), s.d(e, "s", (function() {
				return V
			})), s.d(e, "t", (function() {
				return q
			})), s.d(e, "g", (function() {
				return W
			})), s.d(e, "m", (function() {
				return H
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./src/reddit/featureFlags/index.ts"),
				n = s("./src/reddit/helpers/economics/sortBadges.ts"),
				a = s("./src/reddit/helpers/richTextJson/index.ts"),
				i = s("./src/reddit/models/Badge/index.ts"),
				o = s("./src/reddit/models/Badge/managementPage.ts"),
				c = s("./src/reddit/models/Payments/index.ts"),
				d = s("./src/reddit/models/Product/index.ts"),
				u = s("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				l = s("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = s("./src/reddit/selectors/comments.ts"),
				p = s("./src/reddit/selectors/commentSelector.ts"),
				b = s("./src/reddit/selectors/experiments/mediaInComments.ts"),
				h = s("./src/reddit/selectors/gold/powerups/index.ts"),
				f = s("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const g = [],
				y = (t, e) => {
					const s = t.economics.subredditPremium[e];
					if (s && s.status === l.a.Fetched) {
						const t = s.data.subscription,
							e = t && t.active;
						if (e) {
							let t = Object.keys(e);
							return t.length > 1 && (t = t.filter(t => "provisional_membership" !== t)), e[t[0]] || null
						}
					}
					return null
				},
				v = (t, e) => {
					const s = y(t, e);
					return s && s.endsAt || null
				};
			var C;
			! function(t) {
				t[t.DontKnow = 0] = "DontKnow", t[t.NotSubscribed = 1] = "NotSubscribed", t[t.Subscribed = 2] = "Subscribed"
			}(C || (C = {}));
			const I = (t, e) => {
					const s = t.economics.subredditPremium[e];
					if (s && s.status === l.a.Fetched) {
						const s = v(t, e),
							r = Date.now();
						return s && r < s ? C.Subscribed : C.NotSubscribed
					}
					return C.DontKnow
				},
				E = (t, e) => {
					const s = t.user.account,
						r = t.economics.subredditPremium[e];
					if (s && r && r.status === l.a.Fetched) {
						const r = ((t.users.appliedBadges[s.id] || {})[e] || g).map(e => t.badges.models[e]).filter(Boolean);
						if (r) return {
							[o.a.Loyalty]: r.find(t => t.placement === i.a.First),
							[o.a.Achievement]: r.find(t => t.placement === i.a.Second),
							[o.a.Cosmetic]: r.find(t => !t.placement)
						}
					}
					return {
						[o.a.Loyalty]: void 0,
						[o.a.Achievement]: void 0,
						[o.a.Cosmetic]: void 0
					}
				};

			function _(t, e) {
				return (null == t ? void 0 : t.length) ? Object(n.a)(t.map(t => e[t]).filter(Boolean)) : g
			}
			const O = (t, e, s) => {
					var n;
					if (!r.d.spBadges(t)) return g;
					return _(null === (n = t.users.appliedBadges[s]) || void 0 === n ? void 0 : n[e], t.badges.models)
				},
				j = (t, e) => {
					const s = t.economics.subredditPremium[e.subredditId];
					if (s && s.status === l.a.Fetched) {
						const t = s.raw.collections[e.collectionId];
						if (t) return {
							highlight: t.extra && t.extra.style && t.extra.style.color,
							title: t.title
						}
					}
				};

			function S(t, e) {
				const s = (t.economics.me.data.specialMemberships || {})[e];
				return !!(s && s.settings && s.settings.optOut)
			}

			function w(t, e) {
				const {
					badge: s,
					subredditId: r
				} = e, n = t.user.account ? t.user.account.id : void 0;
				if (Object(i.e)(s) && s.userId === n) return s;
				const a = t.badges.models,
					o = t.user.ownedBadges[r] || {},
					c = Object(i.e)(s) ? s.type : s.id;
				return Object.keys(o).map(t => a[t]).find(t => t && t.type === c)
			}

			function A(t, e, s, r) {
				const n = t.economics.subredditPremium[e];
				if (n && n.status === l.a.Fetched) {
					if (s === o.a.Loyalty || s === o.a.Achievement) return n.data.collections[s];
					if (s === o.a.Cosmetic && r) return n.data.collections[s][r]
				}
				return g
			}

			function x(t, e) {
				const s = A(t, e, o.a.Loyalty).find(t => "membership" === t.id);
				return s ? [].concat(s.locked, s.unlocked).filter(t => t.position).sort((t, e) => t.position - e.position) : g
			}

			function P(t, e) {
				const s = t.economics.subredditPremium[e];
				if (s && s.status === l.a.Fetched) {
					const t = s.data.collections[o.a.Cosmetic];
					return Object.values(t).reduce((t, e) => t.concat(e), []).reduce((t, e) => t.concat(e.locked, e.unlocked), []).filter(i.f)
				}
				return g
			}

			function k(t, e) {
				return A(t, e, o.a.Cosmetic, o.c.Gallery).some(t => t.locked.some(t => Object(i.f)(t) || !!t.price))
			}
			const L = t => {
				const e = [],
					s = t.economics.paymentSystems;
				if (s.status === u.a.Fetched && s.data.stripe && s.data.stripe.sources) {
					const t = s.data.stripe.sources;
					for (const s in t) {
						const r = t[s];
						e.push({
							display: `${r.brand} •••• ${r.last4}`,
							id: s,
							type: c.a.SavedStripe
						})
					}
				}
				if (s.status === u.a.Fetched && s.data.braintree && s.data.braintree.sources) {
					const t = s.data.braintree.sources;
					for (const s in t) {
						const r = t[s];
						"PayPal" === r.brand && e.push({
							display: "PayPal",
							id: r.id,
							type: c.a.SavedPayPal
						})
					}
				}
				return e
			};
			var N;
			! function(t) {
				t[t.Fetched = 0] = "Fetched", t[t.Fetching = 1] = "Fetching", t[t.NotFetched = 2] = "NotFetched"
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
				T = (t, e) => Object.values(t.products.models).filter(t => t.type === d.a.Membership && e && t.subredditId === e),
				D = (t, e) => {
					if (!e) return {};
					const s = F.prices;
					T(t, e).forEach(t => {
						t.price && t.currency && (s[t.currency] = t.price)
					});
					const r = y(t, e);
					return r && r.price && r.currency && (s[r.currency] = r.price), s
				},
				B = (t, e) => {
					var s, r, n, a;
					const i = (null === (a = null === (n = null === (r = null === (s = t.features) || void 0 === s ? void 0 : s.crypto) || void 0 === r ? void 0 : r.points) || void 0 === n ? void 0 : n[e || ""]) || void 0 === a ? void 0 : a.nomenclature) || F;
					return {
						prices: D(t, e),
						member: i.member || F.member,
						memberPlural: i.memberPlural || F.memberPlural,
						memberAlt: i.memberAlt || F.memberAlt,
						memberAltPlural: i.memberAltPlural || F.memberAltPlural,
						membership: i.membership || F.membership,
						membershipAlt: i.membershipAlt || F.membershipAlt
					}
				},
				R = t => {
					const e = t.economics.paymentSystems;
					return !!(e.status === u.a.Fetched && e.data && e.data.tips && e.data.tips.usdr && e.data.tips.usdr.allowed)
				},
				M = (t, e) => {
					const s = t.user.ownedBadges[e] || {};
					return !!Object.keys(s).length
				},
				K = t => {
					const e = t.economics.paymentSystems;
					return e.status === u.a.Fetched && !!e.data && !!e.data.stripe && !!e.data.stripe.stripeAccountId
				},
				U = (t, e) => {
					let {
						subredditId: s
					} = e;
					if (!s) return;
					return t.economics.emotes[s]
				},
				G = (t, e) => {
					const s = e && t.economics.gifs[e];
					return !!s && s.hasGifProduct
				},
				V = (t, e, s) => {
					if (Object(h.p)(t, {
							subredditId: e
						})) return !0;
					const r = "replyToPost" !== s && Object(p.b)(t, {
						commentId: s
					});
					return !(!r || !Object(a.a)(r))
				},
				q = (t, e, s) => {
					if (Object(b.a)(t)) return !!e && Object(m.B)(t, {
						subredditId: e
					});
					if (!Object(f.b)(t, {
							subredditId: e
						})) return !1;
					if (Object(h.q)(t, {
							subredditId: e
						})) return !0;
					const n = "replyToPost" !== s && Object(p.b)(t, {
						commentId: s
					});
					if (n && Object(a.b)(n)) return !0;
					const i = r.d.spGiphy(t),
						o = G(t, e);
					return !(!i || !o) || i && o
				},
				W = (t, e, s) => {
					if (e) {
						const r = t.economics.banners.dismissedBanners[e];
						if (r && r.data) return !!r.data[s]
					}
				},
				H = t => t.economics.pointsCopy.data
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatMessageInput.0d65ee26ad41c05a90f4.js.map