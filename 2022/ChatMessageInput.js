// https://www.redditstatic.com/desktop2x/ChatMessageInput.42d495d35ff58a3c2e08.js
// Retrieved at 2/24/2022, 1:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatMessageInput"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var n = s("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return n(e) + t
			}
		},
		"./src/reddit/actions/publicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return i
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			}));
			var n = s("./node_modules/uuid/v4.js"),
				r = s.n(n),
				a = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const c = Object(a.a)(o.B),
				i = e => async t => {
					t(c(e))
				}, d = () => async e => {
					e(c({
						lastChatActivityUtcTs: Date.now()
					}))
				}, l = () => async e => {
					e(c({
						correlationId: r()()
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
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				r = s("./node_modules/lodash/memoize.js"),
				a = s.n(r),
				o = s("./node_modules/react/index.js"),
				c = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = ["FF4500", "0DD3BB", "24A0ED", "FFB000", "FF8717", "46D160", "25B79F", "0079D3", "4856A3", "C18D42", "A06A42", "46A508", "008985", "7193FF", "7E53C1", "FFD635", "DDBD37", "D4E815", "94E044", "FF66AC", "DB0064", "FF585B", "EA0027", "A5A4A4", "545452"],
				u = s("./src/reddit/components/Econ/DefaultAvatar/index.tsx"),
				p = s("./src/reddit/selectors/experiments/econ/index.ts"),
				h = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				b = s.n(h);
			const f = l.a.div("Userpic", b.a);
			t.a = a()(({
				defaultImage: e,
				userId: t
			}) => {
				const s = Object(i.e)(p.z),
					{
						processingAvatarImageUrl: r
					} = n.a;
				if (s) return e ? c.a.createElement("img", {
					className: b.a.NewUserpic,
					src: e,
					alt: "user icon"
				}) : c.a.createElement(u.a, {
					className: b.a.NewUserpic,
					userId: t
				});
				const a = (e => e.replace(d.Ib.Account + "_", ""))(t),
					{
						avatar: o,
						color: l
					} = (e => {
						const t = m.length,
							s = parseInt(e, 36),
							n = s % 20 + 1,
							r = Math.floor(s / 20) % t;
						return {
							avatar: ("0" + n).slice(-2),
							color: m[r]
						}
					})(a),
					h = `${r}/avatar_default_${o}_${l}.png`;
				return c.a.createElement(f, {
					"data-testid": "old-default-icon",
					style: {
						backgroundImage: `url(${h})`,
						backgroundColor: `#${l}`
					}
				})
			})
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3SwKz63oDhqTWK_aG-xnXF",
				Userpic: "_1c_u99Y2cLg7hhjeq50Op6",
				userpic: "_1c_u99Y2cLg7hhjeq50Op6",
				roundedIcon: "qzfpAikXRAwHLMGlL6_5m",
				NewUserpic: "_2Zwmb9SDpYPNT8z3bJMLCX",
				newUserpic: "_2Zwmb9SDpYPNT8z3bJMLCX",
				TrashIcon: "_2xUH_6ZFDwVzDXthdBMEyN",
				trashIcon: "_2xUH_6ZFDwVzDXthdBMEyN",
				ProfileIcon: "_2OVsvDCTt2OzgIct4dAykk",
				profileIcon: "_2OVsvDCTt2OzgIct4dAykk"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx"),
				d = s("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				l = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				m = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				u = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				p = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				h = s.n(p);
			const b = Object(o.c)({
					account: e => e.user.account
				}),
				f = Object(a.b)(b);
			t.a = c.a.wrapped(f(({
				account: e,
				className: t,
				height: s,
				icon: n,
				isLivestreaming: a,
				isNSFW: o,
				trash: c,
				userId: p,
				width: b
			}) => {
				const f = a ? 36 : 20,
					C = p || `${null==e?void 0:e.id}`,
					g = {
						height: s || f,
						width: b || f,
						minWidth: b || f
					};
				if (c) return r.a.createElement("div", {
					className: t,
					style: g
				}, r.a.createElement(u.a, {
					className: h.a.TrashIcon
				}));
				const _ = e && e.id === p ? e.accountIcon : o ? l.a : null != n ? n : void 0;
				return Object(m.b)(_) ? r.a.createElement("div", {
					className: t,
					style: g
				}, r.a.createElement(d.a, {
					headshot: _
				})) : r.a.createElement("div", {
					className: t,
					style: g
				}, r.a.createElement(i.a, {
					userId: C,
					defaultImage: _
				}))
			}), "ChatIcon", h.a)
		},
		"./src/reddit/components/CommentsChat/MessageInput/AwardButton.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				i = s("./src/reddit/helpers/correlationIdTracker.ts"),
				d = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-redux/es/index.js")),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/makeCommentsPageKey/index.ts"),
				u = s("./src/reddit/selectors/comments.ts"),
				p = s("./src/reddit/selectors/commentSelector.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/communityAwards.ts"),
				f = s("./src/reddit/selectors/gold/awardIcon.ts"),
				C = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				g = s("./src/reddit/components/CommentsChat/Comment/AwardCountSpectacle/AwardCountAnimation/index.m.less"),
				_ = s.n(g);
			class x extends r.Component {
				render() {
					const {
						className: e,
						count: t,
						iconUrl: s,
						isAnimated: n
					} = this.props;
					return a.a.createElement("div", {
						className: Object(o.a)(_.a.container, e, {
							[_.a.isAnimated]: n
						})
					}, a.a.createElement(C.a, {
						className: _.a.gildIcon
					}), n && s && a.a.createElement("div", {
						className: _.a.awardingIcon,
						style: {
							backgroundImage: `url("${s}")`
						}
					}), t ? a.a.createElement("div", {
						className: _.a.count
					}, t) : null)
				}
			}
			var E = Object(d.b)(() => Object(l.c)({
				iconUrl: (e, {
					awardId: t
				}) => {
					if (!t) return;
					const s = Object(b.a)(e, t);
					return Object(f.a)(e, {
						award: s,
						minSize: 64
					})
				}
			}))(x);
			const v = Object(d.b)(() => Object(l.a)(e => e, (e, {
					postId: t
				}) => Object(u.g)(e, {
					commentsPageKey: Object(m.a)(t)
				}), h.G, (e, {
					postId: t
				}) => Object(u.u)(e, {
					commentsPageKey: Object(m.a)(t)
				}), (e, t, s, n) => {
					return {
						commentAwardIds: t.length ? t.reduce((t, s) => {
							const n = Object(p.b)(e, {
								commentId: s.id
							});
							if (n) {
								const {
									associatedAwardId: e
								} = n;
								if (e) return [...t, e]
							}
							return t
						}, []) : [],
						isFullyLoaded: n,
						postAwardCount: s.awardCountsById ? Object.values(s.awardCountsById).reduce((e, t) => e + t, 0) : s.allAwardings ? s.allAwardings.reduce((e, t) => e + t.count, 0) : 0
					}
				})),
				I = e => ({
					initialCommentAwardIds: e.isFullyLoaded ? [...e.commentAwardIds] : [],
					initialPostAwardCount: e.isFullyLoaded ? e.postAwardCount : 0,
					prevIsFullyLoaded: e.isFullyLoaded,
					prevPostId: e.postId
				});
			class w extends r.Component {
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
						postAwardCount: s,
						commentAwardIds: n,
						className: r,
						isFullyLoaded: o
					} = this.props;
					if (!o) return a.a.createElement(E, {
						className: r,
						count: 0
					});
					const c = Math.max(s, e + n.length - t.length),
						i = n.length - 1,
						d = n[i],
						l = n.length !== t.length;
					return a.a.createElement(E, {
						awardId: d,
						className: r,
						count: c,
						isAnimated: l,
						key: i
					})
				}
			}
			var y = v(w),
				O = s("./src/reddit/components/CommentsChat/MessageInput/index.m.less"),
				j = s.n(O);
			t.a = ({
				postId: e,
				showSubmitInsideTextArea: t,
				isLivestreaming: r,
				handleGiveAward: d,
				sendEvent: l
			}) => {
				return a.a.createElement(c.e, {
					className: Object(o.a)(j.a.ChatButton, {
						[j.a.LivestreamingChatButton]: r,
						[j.a.leftPad]: !t
					}),
					"aria-label": n.fbt._("give award", null, {
						hk: "1nXRWY"
					}),
					onClick: async t => {
						t.stopPropagation();
						const n = Object(i.e)(i.a.GildingFlow, !0);
						d(n);
						const {
							clickGildEvent: a,
							clickRpanGiveAward: o
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						l((r ? o : a)(e))
					}
				}, a.a.createElement(y, {
					postId: e
				}))
			}
		},
		"./src/reddit/components/CommentsChat/MessageInput/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/CommentsChat/MessageInput/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/noop.js"),
				a = s.n(r),
				o = s("./node_modules/lodash/throttle.js"),
				c = s.n(o),
				i = s("./node_modules/react/index.js"),
				d = s.n(i),
				l = s("./node_modules/react-redux/es/index.js"),
				m = s("./node_modules/reselect/es/index.js"),
				u = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				h = s("./src/reddit/models/PostDraft/index.ts"),
				b = s("./src/reddit/actions/comment/authoring.ts"),
				f = s("./src/reddit/actions/gold/modals.ts"),
				C = s("./src/reddit/actions/publicAccessNetwork/theaterSettings.ts"),
				g = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				_ = s("./src/reddit/components/RichTextEditor/index.tsx"),
				x = s("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				E = s("./src/reddit/components/RichTextJsonChatReply/index.tsx"),
				v = s("./src/reddit/controls/Button/index.tsx"),
				I = s("./src/reddit/controls/ErrorText/index.tsx"),
				w = s("./src/reddit/helpers/correlationIdTracker.ts"),
				y = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				O = s("./src/reddit/helpers/richTextEditor/index.ts"),
				j = s("./src/reddit/helpers/trackers/rpan.ts"),
				A = s("./src/reddit/icons/svgs/Close/index.tsx"),
				k = s("./src/reddit/icons/svgs/Send/index.tsx"),
				N = s("./src/reddit/models/PostCreationForm/index.ts"),
				S = s("./src/reddit/selectors/comments.ts"),
				L = s("./src/reddit/selectors/posts.ts"),
				D = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				T = s("./src/reddit/components/CommentsChat/MessageInput/AwardButton.tsx"),
				F = s("./src/reddit/components/CommentsChat/MessageInput/index.m.less"),
				R = s.n(F);
			const P = {},
				B = 1e3,
				M = "chat_submission_from_rte",
				U = p.a.form("Form", R.a),
				V = p.a.wrapped(v.e, "ChatButton", R.a),
				G = p.a.div("CloseIconWrap", R.a),
				K = p.a.div("Reply", R.a),
				W = p.a.div("ReplyAuthor", R.a),
				H = p.a.div("ReplyComment", R.a),
				q = p.a.wrapped(_.a, "RichTextEditor", R.a),
				J = p.a.wrapped(g.a, "SmallChatUserIcon", R.a),
				z = Object(l.b)(() => Object(m.c)({
					draft: S.i,
					errorMsgs: S.K,
					hasError: S.v,
					liveStreamingChatCharacterLimit: e => {
						const t = Object(D.a)(e);
						return t ? t - 3 : 197
					},
					pending: (e, t) => e.features.comments.submit.pending[t.draftKey],
					post: L.G
				}), (e, {
					isEditing: t,
					comment: s,
					commentsPageKey: n,
					draftKey: r,
					postId: a,
					replyComment: o,
					isLivestreaming: c,
					scrollToBottom: i
				}) => ({
					dispatchSubmit: async (o, d, l) => {
						t && s ? await e(Object(b.i)({
							id: s.id,
							commentsPageKey: n,
							depth: 0,
							draftKey: r,
							formData: o
						})) : l ? e(Object(b.l)({
							commentsPageKey: n,
							draftKey: r,
							parentCommentDepth: l.depth,
							parentCommentId: l.id,
							formData: o,
							editorMode: d
						})) : await e(Object(b.n)(a, n, r, o, d, !0, c)), i && i()
					},
					handleGiveAward: t => e(Object(f.d)({
						correlationId: t,
						thingId: a
					})),
					onCancelEdit: () => s && e(Object(b.c)({
						commentId: s.id,
						commentsPageKey: n
					})),
					onLivestreamingChatMessageEdit: () => e(Object(C.a)()),
					closeReply: () => o && e(Object(b.a)({
						parentCommentId: o.id,
						commentsPageKey: n
					}))
				}));
			class X extends d.a.Component {
				constructor(e) {
					super(e), this.focusOnForm = () => this.editor && this.editor.focus(), this.setRTEComponentRef = e => this.editor = e, this.handleCancel = e => {
						e.preventDefault(), this.props.onCancelEdit && this.props.onCancelEdit()
					}, this.handleChange = (e, t) => {
						this.state.hasChanged && (t = this.state.hasChanged);
						const {
							isLivestreaming: s,
							liveStreamingChatCharacterLimit: n
						} = this.props, r = !!s && e.isBound && e.editorState.getCurrentContent().getPlainText().length > n;
						t && e.isBound && (t = Boolean(t && e.editorState.getCurrentContent().getPlainText().trim())), this.setState(() => ({
							showError: r,
							rteState: e,
							hasChanged: t
						})), this.props.isLivestreaming && t && this.passChangeToLivestreaming()
					}, this.handleFocus = () => {
						this.props.isLivestreaming && this.passChangeToLivestreaming(), this.props.onFocusMessageInput && this.props.onFocusMessageInput()
					}, this.passChangeToLivestreaming = c()(() => this.props.onLivestreamingChatMessageEdit(), B, {
						leading: !1,
						trailing: !0
					}), this.onClickGiveAward = async e => {
						e.stopPropagation();
						const {
							handleGiveAward: t,
							isLivestreaming: n,
							postId: r,
							sendEvent: a
						} = this.props;
						t(Object(w.e)(w.a.GildingFlow, !0));
						const {
							clickGildEvent: o,
							clickRpanGiveAward: c
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						a((n ? c : o)(r))
					}, this.handleCloseReply = e => {
						e.preventDefault(), this.props.closeReply()
					}, this.handleSubmit = e => {
						e.preventDefault(), this.onSubmit()
					}, this.onSubmit = () => {
						if (this.canSubmit()) {
							const e = {
								commentMode: N.i.RICH_TEXT,
								draftType: h.c.replyToComment,
								rteState: this.state.rteState,
								hasFocus: !0,
								text: ""
							};
							this.cleanInputForm(), this.props.dispatchSubmit(e, N.i.RICH_TEXT, this.props.replyComment)
						}
						this.props.isLivestreaming && this.props.sendEvent(Object(j.z)(this.props.postId))
					}, this.canSubmit = () => Boolean(!this.props.pending && this.state.hasChanged && !this.state.showError), this.state = {
						hasChanged: !1,
						showError: e.hasError,
						rteState: e.isEditing && e.comment ? x.a.createInitial(e.comment.media.richtextContent) : x.a.createInitial()
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
						rteState: x.a.createInitial()
					})
				}
				render() {
					const {
						errorMsgs: e,
						isEditing: t,
						isLivestreaming: s,
						sendEvent: r,
						handleGiveAward: o,
						liveStreamingChatCharacterLimit: c,
						pending: i,
						post: l,
						postId: m,
						replyComment: p
					} = this.props, h = s ? n.fbt._("Send message ({characterLimit} character limit)", [n.fbt._param("characterLimit", c.toLocaleString())], {
						hk: "RIcb6"
					}) : n.fbt._("Send a message (use the Enter key)", null, {
						hk: "3yojgj"
					}), b = l.isGildable && s && !t, f = s;
					return d.a.createElement("div", {
						className: Object(u.a)(R.a.FormWrapper, {
							[R.a.LivestreamingWrapper]: s
						})
					}, !t && p && d.a.createElement(K, {
						className: Object(u.a)({
							[R.a.isLivestreaming]: s
						})
					}, d.a.createElement(H, {
						onClick: this.handleCloseReply
					}, d.a.createElement(W, null, n.fbt._("Replying to u/ {username}:", [n.fbt._param("username", p.author)], {
						hk: "2YZre5"
					})), d.a.createElement(E.a, {
						className: R.a.RichTextJson,
						key: `rich-text-${p.id}`,
						content: Object(y.a)(p),
						rtJsonElementProps: P
					}), d.a.createElement(G, null, d.a.createElement(A.a, null)))), d.a.createElement("div", {
						className: R.a.inputLine
					}, d.a.createElement(U, {
						className: Object(u.a)({
							[R.a.Editing]: t
						}),
						onSubmit: this.handleSubmit,
						onReset: this.handleCancel
					}, d.a.createElement(Y, {
						isEditing: !!t,
						isLivestreaming: !!s
					}), d.a.createElement(q, {
						className: Object(u.a)(R.a.RichTextEditor, {
							[R.a.Livestreaming]: s && !t,
							[R.a.Editing]: !s && t
						}),
						focusableContentRTEClassName: Object(u.a)({
							[R.a.LivestreamingFocusableContent]: s && !t
						}),
						dataTestId: M,
						editorType: O.a.Comment,
						initialMinHeight: 20,
						initialHeight: void 0,
						rteState: this.state.rteState,
						rteRef: this.setRTEComponentRef,
						onChange: this.handleChange,
						onFocus: this.handleFocus,
						onSubmit: this.onSubmit,
						placeholderText: h,
						readOnly: i,
						showSubmitButton: f && !this.state.showError,
						submitButtonClassName: Object(u.a)(R.a.insetSubmitButton, R.a.submitButton),
						submitOnEnter: !0,
						trackToolbarClick: a.a,
						hideToolbar: !0,
						noBorder: !0,
						isChatPost: !0
					}), t && d.a.createElement(V, {
						className: Object(u.a)(R.a.ChatButton, {
							[R.a.LivestreamingResetButton]: s
						}),
						type: "reset"
					}, d.a.createElement(A.a, null)), !f && d.a.createElement(V, {
						className: Object(u.a)(R.a.ChatButton, {
							[R.a.LivestreamingChatButton]: s && !t,
							[R.a.LivestreamingResetButton]: s && t
						}),
						type: "submit",
						disabled: !this.canSubmit(),
						"aria-label": n.fbt._("send a message", null, {
							hk: "4bL65Y"
						})
					}, d.a.createElement(k.a, null))), b && d.a.createElement(T.a, {
						showSubmitInsideTextArea: f,
						isLivestreaming: s,
						sendEvent: r,
						postId: m,
						handleGiveAward: o
					})), this.state.showError && Object(I.c)(e.length ? e : [`Input text must be less than ${c} characters`]))
				}
			}
			const Y = ({
				isEditing: e,
				isLivestreaming: t
			}) => t ? null : e ? d.a.createElement(J, {
				height: 20,
				width: 20
			}) : d.a.createElement(g.a, {
				height: 25,
				width: 25
			});
			t.default = z(X)
		},
		"./src/reddit/components/Econ/DefaultAvatar/index.m.less": function(e, t, s) {
			e.exports = {
				defaultAvatar: "_8gjnVWVhueS_hMv9By4wh"
			}
		},
		"./src/reddit/components/Econ/DefaultAvatar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/Econ/DefaultAvatar/index.m.less"),
				i = s.n(c);
			t.a = ({
				className: e,
				style: t = {},
				userId: s
			}) => {
				const {
					processingAvatarImageUrl: r
				} = n.a, c = `url(${r}/defaults/v2/avatar_default_${(e=>{let t=0;for(const s of e)t+=s.charCodeAt();return t%8})(s)}.png)`;
				return a.a.createElement("div", {
					className: Object(o.a)(i.a.avatar, e),
					style: {
						...t,
						backgroundImage: c
					}
				})
			}
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/FocusableContent/index.m.less"),
				i = s.n(c);
			t.a = o.a.wrapped(e => r.a.createElement("div", {
				className: Object(a.a)(e.className, {
					[i.a.isFocused]: e.isFocused,
					[i.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", i.a)
		},
		"./src/reddit/components/RichTextJsonChatReply/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "qqC8Lcm050i_jAM3CePWY",
				container: "qqC8Lcm050i_jAM3CePWY"
			}
		},
		"./src/reddit/components/RichTextJsonChatReply/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/RichTextJson/index.tsx"),
				c = s("./src/reddit/components/RichTextJson/elements.tsx"),
				i = s("./src/reddit/components/RichTextJson/renderers.tsx"),
				d = s("./src/reddit/models/RichTextJson/index.ts");
			const l = e => r.a.createElement(c.f, null, e),
				m = e => {
					const t = [],
						s = e.c || [],
						n = s.length;
					for (let r = 0; r < n; r++) {
						const e = s[r];
						t.push(e.e === d.w ? e.t : Object(i.e)(e, {}, r))
					}
					return r.a.createElement(r.a.Fragment, null, t)
				},
				u = e => e.c && e.c.length ? r.a.createElement(r.a.Fragment, null, Object(i.i)(e.c, null, {})) : r.a.createElement("br", null);
			var p = s("./src/reddit/constants/elementClassNames.ts"),
				h = s("./src/reddit/components/RichTextJsonChatReply/index.m.less"),
				b = s.n(h);
			const f = s("./src/lib/lessComponent.tsx").a.div("Container", b.a),
				C = {
					[d.a]: "<animated image>",
					[d.b]: "<quote>",
					[d.c]: "<code block>",
					[d.h]: "<embed>",
					[d.m]: "<image>",
					[d.p]: "<list>",
					[d.z]: "<table>",
					[d.D]: "<video>"
				};
			t.a = e => {
				const {
					className: t,
					content: s
				} = e, n = s.document, c = [], i = Object(o.b)(n), h = Object(o.c)(n);
				if (-1 !== i)
					for (let r = i; r <= h; r++) {
						const e = n[r],
							t = e && C[e.e];
						switch (e.e) {
							case d.l:
								break;
							case d.b:
							case d.c:
							case d.p:
							case d.z:
							case d.m:
							case d.a:
							case d.D:
							case d.h:
								c.push(l(t));
								break;
							case d.k:
								c.push(m(e));
								break;
							case d.u:
								c.push(u(e))
						}
					}
				return r.a.createElement(f, {
					className: Object(a.a)(p.j, t)
				}, c)
			}
		},
		"./src/reddit/constants/chat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var n;
			! function(e) {
				e.None = "none", e.Compact = "compact", e.Full = "full_screen"
			}(n || (n = {}));
			var r;
			! function(e) {
				e.SubredditChatNotifcationFtux = "chat_subreddit_notification_ftux"
			}(r || (r = {}))
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "c", (function() {
				return E
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/uniqueId.js"),
				a = s.n(r),
				o = s("./node_modules/raf/index.js"),
				c = s.n(o),
				i = s("./node_modules/react/index.js"),
				d = s.n(i),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/higherOrderComponents/asModal/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/layout/row/Inline/index.tsx"),
				h = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				b = s.n(h);
			var f = Object(m.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return d.a.createElement("div", {
						className: b.a.wrapper
					}, d.a.createElement(p.a, {
						className: b.a.titleRow
					}, s), d.a.createElement("div", {
						className: b.a.detailsContainer
					}, t), d.a.createElement(p.a, {
						className: b.a.buttonRow
					}, d.a.createElement(u.l, {
						className: b.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				C = s("./src/reddit/controls/ErrorText/index.m.less"),
				g = s.n(C);
			class _ extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${a()()}`,
						isModalOpen: !1
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					c()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						className: t,
						errorModalBody: s,
						errorModalTitle: r = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: a = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: o,
						isModalOpen: c
					} = this.state;
					return d.a.createElement("div", {
						className: Object(l.a)(g.a.wrapper, t)
					}, d.a.createElement("span", {
						className: g.a.description,
						ref: this.spanRef
					}, e), o && d.a.createElement("span", {
						className: g.a.moreText,
						onClick: this.toggleModal
					}, a), c && d.a.createElement(f, {
						onConfirmed: this.toggleModal,
						title: r
					}, s || e))
				}
			}
			const x = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: n,
						fallbackMessage: r,
						messages: a = []
					} = e, o = a.length ? a : r ? [r] : [];
					return o.length ? d.a.createElement("div", {
						className: t
					}, o.map((e, t) => d.a.createElement(_, {
						className: s,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				E = e => d.a.createElement(x, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = _
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "H", (function() {
				return l
			})), s.d(t, "i", (function() {
				return m
			})), s.d(t, "j", (function() {
				return u
			})), s.d(t, "D", (function() {
				return p
			})), s.d(t, "A", (function() {
				return h
			})), s.d(t, "E", (function() {
				return b
			})), s.d(t, "C", (function() {
				return f
			})), s.d(t, "B", (function() {
				return C
			})), s.d(t, "u", (function() {
				return g
			})), s.d(t, "v", (function() {
				return _
			})), s.d(t, "x", (function() {
				return x
			})), s.d(t, "r", (function() {
				return E
			})), s.d(t, "p", (function() {
				return v
			})), s.d(t, "q", (function() {
				return I
			})), s.d(t, "o", (function() {
				return w
			})), s.d(t, "z", (function() {
				return y
			})), s.d(t, "s", (function() {
				return O
			})), s.d(t, "y", (function() {
				return j
			})), s.d(t, "G", (function() {
				return A
			})), s.d(t, "t", (function() {
				return k
			})), s.d(t, "c", (function() {
				return N
			})), s.d(t, "n", (function() {
				return S
			})), s.d(t, "k", (function() {
				return L
			})), s.d(t, "b", (function() {
				return D
			})), s.d(t, "d", (function() {
				return T
			})), s.d(t, "e", (function() {
				return F
			})), s.d(t, "w", (function() {
				return R
			})), s.d(t, "F", (function() {
				return P
			})), s.d(t, "f", (function() {
				return B
			})), s.d(t, "l", (function() {
				return M
			})), s.d(t, "m", (function() {
				return U
			})), s.d(t, "g", (function() {
				return V
			})), s.d(t, "h", (function() {
				return G
			}));
			var n, r = s("./src/reddit/constants/chat.ts"),
				a = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(n || (n = {}));
			const c = (e, t) => {
					if (t) {
						const s = o.C(e, t.post.id),
							n = o.J(e, t.post.id),
							r = o.jb(e);
						if (t.post.authorInfo && n && (n.authorId = t.post.authorInfo.id), s) {
							s.streamPublicId = t.stream.stream_id, s.id = t.stream.stream_id;
							const n = Object(a.j)(e, {
								streamIdFromPath: t.post.id
							});
							n === a.a.LIVE ? s.type = "stream_live" : n === a.a.VOD ? s.type = "stream_vod" : n === a.a.UNAVAILABLE && (s.type = "stream_unavailable")
						}
						return {
							post: n,
							media: s,
							subreddit: r
						}
					}
					return {
						subreddit: o.jb(e)
					}
				},
				i = (e, t, s) => {
					if (!t || !s) return;
					const n = Object(a.j)(e, {
							streamIdFromPath: t.post.id
						}),
						o = t.chat_disabled || s.chatState === r.a.None;
					return {
						id: s.id,
						sessionDurationMs: s.sessionDurationMs,
						watchDurationMs: s.watchDurationMs,
						heartbeatDurationMs: s.heartbeatDurationMs,
						isLive: n === a.a.LIVE,
						playheadOffsetMs: s.playheadOffsetMs,
						timestampMs: s.timestampMs,
						startTimeMs: s.startTimeMs,
						volume: s.volume,
						chatState: o ? r.a.None : r.a.Compact,
						scrubbingStartMs: s.scrubbingStartMs,
						scrubbingEndMs: s.scrubbingEndMs,
						playerType: s.playerType
					}
				},
				d = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				l = () => e => ({
					source: "stream_du",
					action: "view",
					noun: "stream_du",
					...c(e)
				}),
				m = () => e => ({
					source: "stream_du",
					action: "click",
					noun: "show_less",
					...c(e)
				}),
				u = (e, t) => s => ({
					source: "stream_du",
					action: "click",
					noun: "enlarge",
					...c(s, e),
					actionInfo: o.d(s, {
						position: t || 0
					})
				}),
				p = (e, t) => s => ({
					source: "stream_player",
					action: "fail",
					noun: "stream",
					playback: i(s, e, t),
					...d(s),
					...e && {
						...c(s, e)
					}
				}),
				h = (e, t) => s => ({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: i(s, e, t),
					...d(s),
					...c(s, e)
				}),
				b = (e, t) => s => ({
					source: "stream_player",
					action: "play",
					noun: "stream",
					playback: i(s, e, t),
					...d(s),
					...c(s, e)
				}),
				f = (e, t) => s => ({
					source: "stream_player",
					action: "complete",
					noun: "stream",
					playback: i(s, e, t),
					...d(s),
					...c(s, e)
				}),
				C = (e, t, s) => n => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: i(n, t, s),
					...d(n),
					...c(n, t)
				}),
				g = (e, t, s, n) => r => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: i(r, t, s),
					...d(r),
					...c(r, t),
					actionInfo: o.d(r, {
						referralId: n
					})
				}),
				_ = (e, t, s) => n => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: i(n, t, s),
					...d(n),
					...c(n, t)
				}),
				x = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "stream_from_desktop",
					...d(t),
					...c(t, e)
				}),
				E = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: i(s, e, t),
					...d(s),
					...c(s, e)
				}),
				v = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: i(s, e, t),
					...d(s),
					...c(s, e)
				}),
				I = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: i(s, e, t),
					...d(s),
					...c(s, e)
				}),
				w = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: i(s, e, t),
					...c(s, e)
				}),
				y = e => t => {
					const s = Object(a.l)(t, e);
					return {
						source: "stream_chat",
						action: "click",
						noun: "send_chat",
						...c(t, s)
					}
				},
				O = (e, t, s) => n => ({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: i(n, t, s),
					...c(n, t)
				}),
				j = (e, t) => s => ({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: i(s, e, t),
					...d(s)
				}),
				A = e => t => ({
					source: "post",
					action: "view",
					noun: "post",
					profile: o.S(t),
					screen: o.bb(t),
					...c(t, e)
				}),
				k = e => t => {
					const s = c(t, e);
					return {
						source: "post",
						action: "consume",
						noun: "post",
						profile: o.S(t),
						screen: o.bb(t),
						...s
					}
				},
				N = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "follow",
					...c(t, e)
				}),
				S = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "unfollow",
					...c(t, e)
				}),
				L = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "subscribe",
					...c(t, e),
					targetSubreddit: o.jb(t)
				}),
				D = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: i(s, e, t),
					...c(s, e)
				}),
				T = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: i(s, e, t),
					...c(s, e)
				}),
				F = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: i(s, e, t),
					...c(s, e)
				}),
				R = (e, t) => s => ({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: i(s, e, t),
					...c(s, e)
				}),
				P = (e, t) => s => ({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: i(s, e, t),
					...c(s, e)
				}),
				B = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: i(s, e, t),
					...c(s, e)
				}),
				M = (e, t) => s => ({
					source: "stream_player",
					action: "swipe",
					noun: "next",
					playback: i(s, e, t),
					...c(s, e),
					...d(s)
				}),
				U = (e, t) => s => ({
					source: "stream_player",
					action: "swipe",
					noun: "previous",
					playback: i(s, e, t),
					...c(s, e),
					...d(s)
				}),
				V = (e, t) => s => ({
					source: "rpanstudio_banner",
					action: "click",
					noun: e,
					...c(s, t),
					...d(s)
				}),
				G = (e, t) => s => ({
					source: "rpanstudio_modal",
					action: "click",
					noun: e,
					...c(s, t),
					...d(s)
				})
		},
		"./src/reddit/models/PublicAccessNetwork/index.ts": function(e, t, s) {
			"use strict";
			var n;
			s.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.NOT_STARTED = "NOT_STARTED", e.PUBLISHED = "PUBLISHED", e.IS_LIVE = "IS_LIVE", e.DISCONNECTED = "DISCONNECTED", e.KILLED = "KILLED", e.PURGED = "PURGED", e.ENDED = "ENDED"
				}(n || (n = {}))
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "l", (function() {
				return v
			})), s.d(t, "m", (function() {
				return y
			})), s.d(t, "i", (function() {
				return A
			})), s.d(t, "d", (function() {
				return L
			})), s.d(t, "h", (function() {
				return D
			})), s.d(t, "k", (function() {
				return T
			})), s.d(t, "c", (function() {
				return F
			})), s.d(t, "f", (function() {
				return R
			})), s.d(t, "a", (function() {
				return M
			})), s.d(t, "j", (function() {
				return U
			})), s.d(t, "b", (function() {
				return V
			})), s.d(t, "e", (function() {
				return G
			})), s.d(t, "g", (function() {
				return K
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				o = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				c = s("./src/reddit/selectors/posts.ts"),
				i = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				d = s("./node_modules/lodash/memoize.js");
			const l = e => e.publicAccessNetwork.listings,
				m = s.n(d)()(e => Object(r.a)(Object(n.a)(l, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var u = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const p = e => e.publicAccessNetwork.models,
				h = e => e.publicAccessNetwork.reports.reported,
				b = e => e.publicAccessNetwork.history,
				f = e => e.publicAccessNetwork.history.cursor,
				C = e => e.publicAccessNetwork.history.visitOrder,
				g = e => e.publicAccessNetwork.hlsStreams,
				_ = Object(n.a)(g, e => e.ended),
				x = Object(n.a)(g, e => e.removed),
				E = Object(n.a)(p, _, x, (e, t, s) => {
					const n = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const n = s.stream.state,
							r = P(n, o.a.ENDED) ? o.a.ENDED : n,
							a = s.stream.vod_accessible;
						return r === n && !0 === a ? e : {
							...e,
							[t]: {
								...s,
								stream: {
									...s.stream,
									state: r,
									vod_accessible: !0
								}
							}
						}
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const n = s.stream.state,
							r = P(n, o.a.ENDED) ? o.a.ENDED : n,
							a = s.stream.vod_accessible;
						return r === n && !1 === a ? e : {
							...e,
							[t]: {
								...s,
								stream: {
									...s.stream,
									state: r,
									vod_accessible: !1
								}
							}
						}
					}, n)
				}),
				v = (e, t) => {
					return E(e)[Object(a.g)(t)]
				},
				I = Object(n.a)((e, {
					streamIdFromPath: t
				}) => t, (e, t) => m(t.listingName)(e, t), E, h, c.h, (e, t, s, n, r) => {
					const c = [];
					if (e) {
						const t = Object(a.g)(e);
						s[t] && c.push(t)
					}
					const i = c.concat(t),
						d = [...new Set(i)],
						l = new Set([...n, ...r]);
					return d.filter(e => {
						const t = s[e];
						return !l.has(e) && !t.post.isHidden && t.stream.state !== o.a.KILLED && t.stream.state !== o.a.PURGED
					})
				}),
				w = Object(n.a)((e, {
					count: t
				}) => t, E, (e, {
					listingName: t,
					streamIdFromPath: s
				}) => I(e, {
					listingName: t,
					streamIdFromPath: s
				}), (e, t, s) => {
					const n = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? n.slice(0, e) : n
				}),
				y = Object(n.a)(E, w, (e, t) => {
					const s = t[0];
					if (s) return e[s]
				}),
				O = Object(n.a)(C, (e, {
					related: t,
					streamIdFromPath: s,
					subreddit: n
				}) => w(e, {
					listingName: t || n,
					streamIdFromPath: s
				}), (e, t) => {
					const s = new Set(e),
						n = t.filter(e => !s.has(e));
					if (n.length) return n[0]
				}),
				j = Object(n.a)((e, {
					streamIdFromPath: t
				}) => t, E, (e, {
					related: t,
					streamIdFromPath: s,
					subreddit: n
				}) => w(e, {
					listingName: t || n,
					streamIdFromPath: s
				}), b, (e, t, s, n) => {
					if (!s.length) return;
					const r = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						a = r.find(e => e.stream.state === o.a.IS_LIVE);
					if (a) return a.post.id;
					const c = r.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (n.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return c ? c.post.id : void 0
				}),
				A = Object(r.a)(Object(n.a)(j, E, (e, t) => e ? t[e] : void 0)),
				k = Object(n.a)((e, {
					streamIdFromPath: t
				}) => t ? Object(a.g)(t) : void 0, j, h, c.h, (e, {
					related: t,
					streamIdFromPath: s,
					subreddit: n
				}) => w(e, {
					listingName: t || n,
					streamIdFromPath: s
				}), (e, t, s, n, r) => !e || s.includes(e) || n.includes(e) ? t || r[0] : e),
				N = Object(n.a)(f, C, O, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				S = Object(n.a)(f, C, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				L = Object(r.a)(Object(n.a)(k, E, (e, t) => e ? t[e] : void 0)),
				D = Object(r.a)(Object(n.a)(N, E, (e, t) => e ? t[e] : void 0)),
				T = Object(r.a)(Object(n.a)(S, E, (e, t) => e ? t[e] : void 0)),
				F = (Object(r.a)(Object(n.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, E, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => ({
					...t[s],
					preloadedPreviewUrl: e[s]
				})))), Object(n.a)(k, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				R = Object(n.a)((e, {
					streamIdFromPath: t
				}) => t ? v(e, t) : void 0, e => !e || e.chat_disabled || e.post.isArchived || e.post.isLocked);

			function P(e, t) {
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
			const B = Object(n.a)(k, b, (e, t) => e && t.timestamps[e] || 0);
			var M;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(M || (M = {}));
			const U = Object(n.a)(k, E, u.b, (e, t, s) => {
					if (s) return M.INTRO;
					const n = e && t[e];
					if (!n) return M.UNAVAILABLE;
					const r = n.stream.state;
					return r === o.a.IS_LIVE || r === o.a.DISCONNECTED ? M.LIVE : r === o.a.ENDED && n.stream.vod_accessible ? M.VOD : M.UNAVAILABLE
				}),
				V = Object(n.a)(L, U, u.b, i.b, i.o, (e, t, s, n, r) => s ? n : e ? t === M.LIVE || t === M.VOD ? e.stream.hls_url : r : void 0),
				G = Object(n.a)(L, U, B, (e, t, s) => e ? t === M.LIVE ? e.broadcast_time : t === M.VOD && s < e.broadcast_time ? s : 0 : 0),
				K = (e, t) => {
					const s = p(e);
					return !!s && s[t] && s[t].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const o = e => e.publicAccessNetwork.theaterSettings,
				c = Object(n.a)(o, a.n, (e, t) => t && !e.isIntroFinished),
				i = Object(n.a)(o, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + r.a > Date.now()
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatMessageInput.42d495d35ff58a3c2e08.js.map