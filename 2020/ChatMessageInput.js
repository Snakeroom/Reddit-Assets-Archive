// https://www.redditstatic.com/desktop2x/ChatMessageInput.13a5255cfa959666096b.js
// Retrieved at 5/28/2020, 6:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatMessageInput"], {
		"./node_modules/lodash/_arrayReduceRight.js": function(e, t) {
			e.exports = function(e, t, s, n) {
				var o = null == e ? 0 : e.length;
				for (n && o && (s = e[--o]); o--;) s = t(s, e[o], o, e);
				return s
			}
		},
		"./node_modules/lodash/_baseEachRight.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseForOwnRight.js"),
				o = s("./node_modules/lodash/_createBaseEach.js")(n, !0);
			e.exports = o
		},
		"./node_modules/lodash/_baseExtremum.js": function(e, t, s) {
			var n = s("./node_modules/lodash/isSymbol.js");
			e.exports = function(e, t, s) {
				for (var o = -1, a = e.length; ++o < a;) {
					var r = e[o],
						i = t(r);
					if (null != i && (void 0 === d ? i == i && !n(i) : s(i, d))) var d = i,
						l = r
				}
				return l
			}
		},
		"./node_modules/lodash/_baseFilter.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var s = [];
				return n(e, (function(e, n, o) {
					t(e, n, o) && s.push(e)
				})), s
			}
		},
		"./node_modules/lodash/_baseForOwnRight.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseForRight.js"),
				o = s("./node_modules/lodash/keys.js");
			e.exports = function(e, t) {
				return e && n(e, t, o)
			}
		},
		"./node_modules/lodash/_baseForRight.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_createBaseFor.js")(!0);
			e.exports = n
		},
		"./node_modules/lodash/_baseGt.js": function(e, t) {
			e.exports = function(e, t) {
				return e > t
			}
		},
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var s = Math.ceil,
				n = Math.max;
			e.exports = function(e, t, o, a) {
				for (var r = -1, i = n(s((t - e) / (o || 1)), 0), d = Array(i); i--;) d[a ? i : ++r] = e, e += o;
				return d
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, s, n, o) {
				return o(e, (function(e, o, a) {
					s = n ? (n = !1, e) : t(s, e, o, a)
				})), s
			}
		},
		"./node_modules/lodash/_baseWhile.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseSlice.js");
			e.exports = function(e, t, s, o) {
				for (var a = e.length, r = o ? a : -1;
					(o ? r-- : ++r < a) && t(e[r], r, e););
				return s ? n(e, o ? 0 : r, o ? r + 1 : a) : n(e, o ? r + 1 : 0, o ? a : r)
			}
		},
		"./node_modules/lodash/_charsEndIndex.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseIndexOf.js");
			e.exports = function(e, t) {
				for (var s = e.length; s-- && n(t, e[s], 0) > -1;);
				return s
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseRange.js"),
				o = s("./node_modules/lodash/_isIterateeCall.js"),
				a = s("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, s, r) {
					return r && "number" != typeof r && o(t, s, r) && (s = r = void 0), t = a(t), void 0 === s ? (s = t, t = 0) : s = a(s), r = void 0 === r ? t < s ? 1 : -1 : a(r), n(t, s, r, e)
				}
			}
		},
		"./node_modules/lodash/_escapeHtmlChar.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_basePropertyOf.js")({
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#39;"
			});
			e.exports = n
		},
		"./node_modules/lodash/chunk.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseSlice.js"),
				o = s("./node_modules/lodash/_isIterateeCall.js"),
				a = s("./node_modules/lodash/toInteger.js"),
				r = Math.ceil,
				i = Math.max;
			e.exports = function(e, t, s) {
				t = (s ? o(e, t, s) : void 0 === t) ? 1 : i(a(t), 0);
				var d = null == e ? 0 : e.length;
				if (!d || t < 1) return [];
				for (var l = 0, c = 0, m = Array(r(d / t)); l < d;) m[c++] = n(e, l, l += t);
				return m
			}
		},
		"./node_modules/lodash/dropRightWhile.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseIteratee.js"),
				o = s("./node_modules/lodash/_baseWhile.js");
			e.exports = function(e, t) {
				return e && e.length ? o(e, n(t, 3), !0, !0) : []
			}
		},
		"./node_modules/lodash/escape.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_escapeHtmlChar.js"),
				o = s("./node_modules/lodash/toString.js"),
				a = /[&<>"']/g,
				r = RegExp(a.source);
			e.exports = function(e) {
				return (e = o(e)) && r.test(e) ? e.replace(a, n) : e
			}
		},
		"./node_modules/lodash/filter.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayFilter.js"),
				o = s("./node_modules/lodash/_baseFilter.js"),
				a = s("./node_modules/lodash/_baseIteratee.js"),
				r = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (r(e) ? n : o)(e, a(t, 3))
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseFlatten.js"),
				o = s("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return n(o(e, t), 1)
			}
		},
		"./node_modules/lodash/includes.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseIndexOf.js"),
				o = s("./node_modules/lodash/isArrayLike.js"),
				a = s("./node_modules/lodash/isString.js"),
				r = s("./node_modules/lodash/toInteger.js"),
				i = s("./node_modules/lodash/values.js"),
				d = Math.max;
			e.exports = function(e, t, s, l) {
				e = o(e) ? e : i(e), s = s && !l ? r(s) : 0;
				var c = e.length;
				return s < 0 && (s = d(c + s, 0)), a(e) ? s <= c && e.indexOf(t, s) > -1 : !!c && n(e, t, s) > -1
			}
		},
		"./node_modules/lodash/maxBy.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseExtremum.js"),
				o = s("./node_modules/lodash/_baseGt.js"),
				a = s("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return e && e.length ? n(e, a(t, 2), o) : void 0
			}
		},
		"./node_modules/lodash/range.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_createRange.js")();
			e.exports = n
		},
		"./node_modules/lodash/reduce.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayReduce.js"),
				o = s("./node_modules/lodash/_baseEach.js"),
				a = s("./node_modules/lodash/_baseIteratee.js"),
				r = s("./node_modules/lodash/_baseReduce.js"),
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var d = i(e) ? n : r,
					l = arguments.length < 3;
				return d(e, a(t, 4), s, l, o)
			}
		},
		"./node_modules/lodash/reduceRight.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayReduceRight.js"),
				o = s("./node_modules/lodash/_baseEachRight.js"),
				a = s("./node_modules/lodash/_baseIteratee.js"),
				r = s("./node_modules/lodash/_baseReduce.js"),
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var d = i(e) ? n : r,
					l = arguments.length < 3;
				return d(e, a(t, 4), s, l, o)
			}
		},
		"./node_modules/lodash/takeWhile.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseIteratee.js"),
				o = s("./node_modules/lodash/_baseWhile.js");
			e.exports = function(e, t) {
				return e && e.length ? o(e, n(t, 3)) : []
			}
		},
		"./node_modules/lodash/trimEnd.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseToString.js"),
				o = s("./node_modules/lodash/_castSlice.js"),
				a = s("./node_modules/lodash/_charsEndIndex.js"),
				r = s("./node_modules/lodash/_stringToArray.js"),
				i = s("./node_modules/lodash/toString.js"),
				d = /\s+$/;
			e.exports = function(e, t, s) {
				if ((e = i(e)) && (s || void 0 === t)) return e.replace(d, "");
				if (!e || !(t = n(t))) return e;
				var l = r(e),
					c = a(l, r(t)) + 1;
				return o(l, 0, c).join("")
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var n = s("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var t = ++o;
				return n(e) + t
			}
		},
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, s, n) {
				var o = s ? s.call(n, e, t) : void 0;
				if (void 0 !== o) return !!o;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var a = Object.keys(e),
					r = Object.keys(t);
				if (a.length !== r.length) return !1;
				for (var i = Object.prototype.hasOwnProperty.bind(t), d = 0; d < a.length; d++) {
					var l = a[d];
					if (!i(l)) return !1;
					var c = e[l],
						m = t[l];
					if (!1 === (o = s ? s.call(n, c, m, l) : void 0) || void 0 === o && c !== m) return !1
				}
				return !0
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
		"./src/reddit/components/CommentsChat/MessageInput/index.m.less": function(e, t, s) {
			e.exports = {
				FormWrapper: "mfKS0B5uqUX6PXcuSjTop",
				formWrapper: "mfKS0B5uqUX6PXcuSjTop",
				LivestreamingWrapper: "_1xV0i2uW_2xdNlBcbSEjpS",
				livestreamingWrapper: "_1xV0i2uW_2xdNlBcbSEjpS",
				Form: "_76oPIY5CZD4GaQnn-06zO",
				form: "_76oPIY5CZD4GaQnn-06zO",
				inputLine: "_2rpcmnaHqKJnQeHI6-RZU8",
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
				o = s("./node_modules/lodash/noop.js"),
				a = s.n(o),
				r = s("./node_modules/lodash/throttle.js"),
				i = s.n(r),
				d = s("./node_modules/react/index.js"),
				l = s.n(d),
				c = s("./node_modules/react-redux/es/index.js"),
				m = s("./node_modules/reselect/es/index.js"),
				u = s("./src/lib/classNames/index.ts"),
				h = s("./src/lib/lessComponent.tsx"),
				p = s("./src/reddit/models/PostDraft/index.ts"),
				_ = s("./src/reddit/actions/comment/index.ts"),
				x = s("./src/reddit/actions/gold/modals.ts"),
				g = s("./src/reddit/actions/publicAccessNetwork/theaterSettings.ts"),
				b = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				f = s("./src/reddit/components/RichTextEditor/index.tsx"),
				C = s("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				v = s("./src/reddit/components/RichTextJsonChatReply/index.tsx"),
				j = s("./src/reddit/controls/Button/index.tsx"),
				E = s("./src/reddit/controls/ErrorText/index.tsx"),
				w = s("./src/reddit/helpers/correlationIdTracker.ts"),
				I = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				y = s("./src/reddit/helpers/richTextEditor/index.ts"),
				O = s("./src/reddit/helpers/trackers/rpan.ts"),
				R = s("./src/reddit/icons/svgs/Close/index.tsx"),
				T = s("./src/reddit/icons/svgs/Send/index.tsx"),
				S = s("./src/reddit/models/PostCreationForm/index.ts"),
				A = s("./src/reddit/selectors/comments.ts"),
				L = s("./src/reddit/selectors/posts.ts"),
				k = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				N = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/makeCommentsPageKey/index.ts")),
				M = s("./src/reddit/selectors/experiments/goldRpanLivePreview.ts"),
				F = s("./src/reddit/selectors/communityAwards.ts"),
				B = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				P = s("./src/reddit/components/CommentsChat/Comment/AwardCountSpectacle/AwardCountAnimation/index.m.less"),
				W = s.n(P);
			class G extends d.Component {
				render() {
					const {
						award: e,
						className: t,
						count: s,
						isAnimated: n
					} = this.props, o = e ? e.icon64 ? e.icon64.url : e.icon.url : void 0;
					return l.a.createElement("div", {
						className: Object(u.a)(W.a.container, t, {
							[W.a.isAnimated]: n
						})
					}, l.a.createElement(B.a, {
						className: W.a.gildIcon
					}), n && o && l.a.createElement("div", {
						className: W.a.awardingIcon,
						style: {
							backgroundImage: 'url("'.concat(o, '")')
						}
					}), s ? l.a.createElement("div", {
						className: W.a.count
					}, s) : null)
				}
			}
			var U = Object(c.b)(() => Object(m.c)({
				award: (e, t) => {
					let {
						awardId: s
					} = t;
					return s ? Object(F.a)(e, s) : void 0
				}
			}))(G);
			const D = Object(c.b)(() => Object(m.a)(e => e, (e, t) => {
					let {
						postId: s
					} = t;
					return Object(A.g)(e, {
						commentsPageKey: Object(N.a)(s)
					})
				}, L.O, (e, t) => {
					let {
						postId: s
					} = t;
					return Object(A.v)(e, {
						commentsPageKey: Object(N.a)(s)
					})
				}, M.a, (e, t, s, n, o) => {
					return {
						commentAwardIds: t.length ? t.reduce((t, s) => {
							const n = Object(A.n)(e, {
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
						inGoldRpanLivePreview: o,
						isFullyLoaded: n,
						postAwardCount: s.awardCountsById ? Object.values(s.awardCountsById).reduce((e, t) => e + t, 0) : s.allAwardings ? s.allAwardings.reduce((e, t) => e + t.count, 0) : 0
					}
				})),
				K = e => ({
					initialCommentAwardIds: e.isFullyLoaded ? [...e.commentAwardIds] : [],
					initialPostAwardCount: e.isFullyLoaded ? e.postAwardCount : 0,
					prevIsFullyLoaded: e.isFullyLoaded,
					prevPostId: e.postId
				});
			class q extends d.Component {
				constructor(e) {
					super(e), this.state = K(e)
				}
				static getDerivedStateFromProps(e, t) {
					return t.prevPostId !== e.postId || !t.prevIsFullyLoaded && e.isFullyLoaded ? K(e) : null
				}
				render() {
					const {
						initialPostAwardCount: e,
						initialCommentAwardIds: t
					} = this.state, {
						postAwardCount: s,
						commentAwardIds: n,
						className: o,
						isFullyLoaded: a,
						inGoldRpanLivePreview: r
					} = this.props;
					if (!a) return l.a.createElement(U, {
						className: o,
						count: 0
					});
					const i = Math.max(s, e + n.length - t.length);
					if (!r) return l.a.createElement(U, {
						className: o,
						count: i
					});
					const d = n.length - 1,
						c = n[d],
						m = n.length !== t.length;
					return l.a.createElement(U, {
						awardId: c,
						className: o,
						count: i,
						isAnimated: m,
						key: d
					})
				}
			}
			var H = D(q),
				J = s("./src/reddit/components/CommentsChat/MessageInput/index.m.less"),
				X = s.n(J);
			const Y = {},
				Z = 1e3,
				Q = "chat_submission_from_rte",
				V = h.a.form("Form", X.a),
				z = h.a.wrapped(j.a, "ChatButton", X.a),
				$ = h.a.div("CloseIconWrap", X.a),
				ee = h.a.div("Reply", X.a),
				te = h.a.div("ReplyAuthor", X.a),
				se = h.a.div("ReplyComment", X.a),
				ne = h.a.wrapped(f.a, "RichTextEditor", X.a),
				oe = h.a.wrapped(b.a, "SmallChatUserIcon", X.a),
				ae = Object(c.b)(() => Object(m.c)({
					draft: A.i,
					errorMsgs: A.I,
					hasError: A.w,
					liveStreamingChatCharacterLimit: k.a,
					pending: (e, t) => e.comments.submit.pending[t.draftKey],
					post: L.O
				}), (e, t) => {
					let {
						isEditing: s,
						comment: n,
						commentsPageKey: o,
						draftKey: a,
						postId: r,
						replyComment: i,
						isLivestreaming: d,
						scrollToBottom: l
					} = t;
					return {
						dispatchSubmit: async (t, i, c) => {
							s && n ? await e(Object(_.eb)({
								id: n.id,
								commentsPageKey: o,
								depth: 0,
								draftKey: a,
								formData: t
							})) : c ? e(Object(_.jb)({
								commentsPageKey: o,
								draftKey: a,
								parentCommentDepth: c.depth,
								parentCommentId: c.id,
								formData: t,
								editorMode: i
							})) : await e(Object(_.lb)(r, o, a, t, i, !0, d)), l && l()
						},
						handleGiveAward: () => e(Object(x.d)({
							thingId: r
						})),
						onCancelEdit: () => n && e(Object(_.U)({
							commentId: n.id,
							commentsPageKey: o
						})),
						onLivestreamingChatMessageEdit: () => e(Object(g.a)()),
						closeReply: () => i && e(Object(_.O)({
							parentCommentId: i.id,
							commentsPageKey: o
						}))
					}
				});
			class re extends l.a.Component {
				constructor(e) {
					super(e), this.focusOnForm = () => this.editor && this.editor.focus(), this.setRTEComponentRef = e => this.editor = e, this.handleCancel = e => {
						e.preventDefault(), this.props.onCancelEdit && this.props.onCancelEdit()
					}, this.handleChange = (e, t) => {
						this.state.hasChanged && (t = this.state.hasChanged), t && e.isBound && (t = Boolean(t && e.editorState.getCurrentContent().getPlainText().trim())), this.setState(() => ({
							showError: !1,
							rteState: e,
							hasChanged: t
						})), this.props.isLivestreaming && t && this.passChangeToLivestreaming()
					}, this.handleFocus = () => {
						this.props.isLivestreaming && this.passChangeToLivestreaming()
					}, this.passChangeToLivestreaming = i()(() => this.props.onLivestreamingChatMessageEdit(), Z, {
						leading: !1,
						trailing: !0
					}), this.onClickGiveAward = async () => {
						const {
							handleGiveAward: e,
							isLivestreaming: t,
							postId: n,
							sendEvent: o
						} = this.props;
						Object(w.d)(w.a.GildingFlow), e();
						const {
							clickGildEvent: a,
							clickRpanGiveAward: r
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						o((t ? r : a)(n))
					}, this.handleCloseReply = e => {
						e.preventDefault(), this.props.closeReply()
					}, this.handleSubmit = e => {
						e.preventDefault(), this.onSubmit()
					}, this.onSubmit = () => {
						if (this.canSubmit()) {
							const e = {
								commentMode: S.h.RICH_TEXT,
								draftType: p.c.replyToComment,
								rteState: this.state.rteState,
								hasFocus: !0,
								text: ""
							};
							this.cleanInputForm(), this.props.dispatchSubmit(e, S.h.RICH_TEXT, this.props.replyComment)
						}
						this.props.isLivestreaming && this.props.sendEvent(Object(O.p)(this.props.postId))
					}, this.canSubmit = () => Boolean(!this.props.pending && this.state.hasChanged), this.state = {
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
					this.props.isLivestreaming || !e.pending || this.props.pending || this.focusOnForm()
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
						isLivestreaming: s,
						liveStreamingChatCharacterLimit: o,
						pending: r,
						post: i,
						postId: d,
						replyComment: c
					} = this.props, m = s ? n.fbt._("Send message ({characterLimit} character limit)", [n.fbt._param("characterLimit", (o || 200).toLocaleString())], {
						hk: "RIcb6"
					}) : n.fbt._("Send a message (use the Enter key)", null, {
						hk: "3yojgj"
					}), h = i.isGildable && s && !t, p = s;
					return l.a.createElement("div", {
						className: Object(u.a)(X.a.FormWrapper, {
							[X.a.LivestreamingWrapper]: s
						})
					}, !t && c && l.a.createElement(ee, {
						className: Object(u.a)({
							[X.a.isLivestreaming]: s
						})
					}, l.a.createElement(se, {
						onClick: this.handleCloseReply
					}, l.a.createElement(te, null, n.fbt._("Replying to u/ {username}:", [n.fbt._param("username", c.author)], {
						hk: "2YZre5"
					})), l.a.createElement(v.a, {
						className: X.a.RichTextJson,
						key: "rich-text-".concat(c.id),
						content: Object(I.a)(c),
						rtJsonElementProps: Y
					}), l.a.createElement($, null, l.a.createElement(R.a, null)))), l.a.createElement("div", {
						className: X.a.inputLine
					}, l.a.createElement(V, {
						className: Object(u.a)({
							[X.a.Editing]: t
						}),
						onSubmit: this.handleSubmit,
						onReset: this.handleCancel
					}, l.a.createElement(ie, {
						isEditing: !!t,
						isLivestreaming: !!s
					}), l.a.createElement(ne, {
						className: Object(u.a)(X.a.RichTextEditor, {
							[X.a.Livestreaming]: s && !t,
							[X.a.Editing]: !s && t
						}),
						focusableContentRTEClassName: Object(u.a)({
							[X.a.LivestreamingFocusableContent]: s && !t
						}),
						dataTestId: Q,
						editorType: y.a.Comment,
						initialMinHeight: 20,
						initialHeight: s ? 20 : void 0,
						rteState: this.state.rteState,
						rteRef: this.setRTEComponentRef,
						onChange: this.handleChange,
						onFocus: this.handleFocus,
						onSubmit: this.onSubmit,
						placeholderText: m,
						readOnly: r,
						showSubmitButton: p,
						submitButtonClassName: X.a.insetSubmitButton,
						submitOnEnter: !0,
						trackToolbarClick: a.a,
						hideToolbar: !0,
						noBorder: !0,
						isChatPost: !0
					}), t && l.a.createElement(z, {
						className: Object(u.a)(X.a.ChatButton, {
							[X.a.LivestreamingResetButton]: s
						}),
						type: "reset"
					}, l.a.createElement(R.a, null)), !p && l.a.createElement(z, {
						className: Object(u.a)(X.a.ChatButton, {
							[X.a.LivestreamingChatButton]: s && !t,
							[X.a.LivestreamingResetButton]: s && t
						}),
						type: "submit",
						disabled: !this.canSubmit(),
						"aria-label": n.fbt._("send a message", null, {
							hk: "4bL65Y"
						})
					}, l.a.createElement(T.a, null))), h && l.a.createElement(z, {
						className: Object(u.a)(X.a.ChatButton, {
							[X.a.LivestreamingChatButton]: s,
							[X.a.leftPad]: !p
						}),
						"aria-label": n.fbt._("give award", null, {
							hk: "1nXRWY"
						}),
						onClick: this.onClickGiveAward
					}, l.a.createElement(H, {
						postId: d
					}))), this.state.showError && Object(E.c)(e))
				}
			}
			const ie = e => {
				let {
					isEditing: t,
					isLivestreaming: s
				} = e;
				return s ? null : t ? l.a.createElement(oe, {
					height: 20,
					width: 20
				}) : l.a.createElement(b.a, {
					height: 25,
					width: 25
				})
			};
			t.default = ae(re)
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, s) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				r = s("./src/higherOrderComponents/asModal/index.tsx"),
				i = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = s("./src/reddit/controls/TextButton/index.tsx"),
				l = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				c = s("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = s.n(c);
			const u = e => e.preventDefault();
			t.a = Object(r.a)(e => a.a.createElement(i.d, null, a.a.createElement(i.h, null, a.a.createElement(l.a, null, a.a.createElement(i.p, null, e.headerText || n.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), a.a.createElement(d.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, a.a.createElement(i.b, null)))), a.a.createElement(i.k, null, a.a.createElement(i.o, {
				className: m.a.ModalText
			}, e.modalText)), a.a.createElement(i.f, null, a.a.createElement(i.a, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !0
			}, e.cancelActionText || n.fbt._("Cancel", null, {
				hk: "3DgVq6"
			})), a.a.createElement(i.t, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !0
			}, e.actionText))))
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
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/FocusableContent/index.m.less"),
				d = s.n(i);
			t.a = r.a.wrapped(e => o.a.createElement("div", {
				className: Object(a.a)(e.className, {
					[d.a.isFocused]: e.isFocused,
					[d.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", d.a)
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
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/RichTextJson/index.tsx"),
				i = s("./src/reddit/components/RichTextJson/elements.tsx"),
				d = s("./src/reddit/components/RichTextJson/renderers.tsx"),
				l = s("./src/reddit/models/RichTextJson/index.ts");
			const c = e => o.a.createElement(i.f, null, e),
				m = e => {
					const t = [],
						s = e.c || [],
						n = s.length;
					for (let o = 0; o < n; o++) {
						const e = s[o];
						t.push(e.e === l.w ? e.t : Object(d.e)(e, {}, o))
					}
					return o.a.createElement(o.a.Fragment, null, t)
				},
				u = e => e.c && e.c.length ? o.a.createElement(o.a.Fragment, null, Object(d.i)(e.c, null, {})) : o.a.createElement("br", null);
			var h = s("./src/reddit/constants/elementClassNames.ts"),
				p = s("./src/reddit/components/RichTextJsonChatReply/index.m.less"),
				_ = s.n(p);
			const x = s("./src/lib/lessComponent.tsx").a.div("Container", _.a),
				g = {
					[l.a]: "<animated image>",
					[l.b]: "<quote>",
					[l.c]: "<code block>",
					[l.h]: "<embed>",
					[l.m]: "<image>",
					[l.p]: "<list>",
					[l.z]: "<table>",
					[l.D]: "<video>"
				};
			t.a = e => {
				const {
					className: t,
					content: s
				} = e, n = s.document, i = [], d = Object(r.b)(n), p = Object(r.c)(n);
				if (-1 !== d)
					for (let o = d; o <= p; o++) {
						const e = n[o],
							t = e && g[e.e];
						switch (e.e) {
							case l.l:
								break;
							case l.b:
							case l.c:
							case l.p:
							case l.z:
							case l.m:
							case l.a:
							case l.D:
							case l.h:
								i.push(c(t));
								break;
							case l.k:
								i.push(m(e));
								break;
							case l.u:
								i.push(u(e))
						}
					}
				return o.a.createElement(x, {
					className: Object(a.a)(h.j, t)
				}, i)
			}
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
				return y
			})), s.d(t, "c", (function() {
				return O
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/uniqueId.js"),
				a = s.n(o),
				r = s("./node_modules/raf/index.js"),
				i = s.n(r),
				d = s("./node_modules/react/index.js"),
				l = s.n(d),
				c = s("./node_modules/react-redux/es/index.js"),
				m = s("./node_modules/reselect/es/index.js"),
				u = s("./src/lib/classNames/index.ts"),
				h = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/selectors/activeModalId.ts"),
				_ = s("./src/higherOrderComponents/asModal/index.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/layout/row/Inline/index.tsx"),
				b = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				f = s.n(b);
			var C = Object(_.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return l.a.createElement("div", {
						className: f.a.wrapper
					}, l.a.createElement(g.a, {
						className: f.a.titleRow
					}, s), l.a.createElement("div", {
						className: f.a.detailsContainer
					}, t), l.a.createElement(g.a, {
						className: f.a.buttonRow
					}, l.a.createElement(x.f, {
						className: f.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				v = s("./src/reddit/controls/ErrorText/index.m.less"),
				j = s.n(v);
			const E = Object(m.c)({
				activeModalId: p.a
			});
			class w extends l.a.Component {
				constructor(e) {
					super(e), this.spanRef = l.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: "ErrorTextModal--".concat(a()())
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					i()(() => {
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
						activeModalId: t,
						className: s,
						errorModalBody: o,
						errorModalTitle: a = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: r = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: i,
						textHasOverflowed: d
					} = this.state;
					return l.a.createElement("div", {
						className: Object(u.a)(j.a.wrapper, s)
					}, l.a.createElement("span", {
						className: j.a.description,
						ref: this.spanRef
					}, e), d && l.a.createElement("span", {
						className: j.a.moreText,
						onClick: this.toggleModal
					}, r), t === i && l.a.createElement(C, {
						onConfirmed: this.toggleModal,
						title: a
					}, o || e))
				}
			}
			const I = Object(c.b)(E, e => ({
					toggleErrorTextModal: t => e(Object(h.i)(t))
				}))(w),
				y = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: n,
						fallbackMessage: o,
						messages: a = []
					} = e, r = a.length ? a : o ? [o] : [];
					return r.length ? l.a.createElement("div", {
						className: t
					}, r.map((e, t) => l.a.createElement(I, {
						className: s,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				O = e => l.a.createElement(y, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = I
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/controls/Input/index.m.less"),
				a = s.n(o);
			t.a = n.a.input("input", a.a)
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, s) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				a = s.n(o);
			const r = e => {
					let {
						isLoading: t
					} = e;
					return Object(n.a)(a.a.loadingBackground, {
						[a.a["m-loading"]]: t
					})
				},
				i = e => Object(n.a)(a.a.loadingBar, r(e))
		},
		"./src/reddit/icons/fonts/Gift/index.m.less": function(e, t, s) {
			e.exports = {
				GiftIcon: "_12P1l1cITUMF05krI6QUSj",
				giftIcon: "_12P1l1cITUMF05krI6QUSj"
			}
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				r = s("./src/reddit/icons/fonts/Gift/index.m.less"),
				i = s.n(r);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(a.b)("gift"), " ").concat(e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc)), "GiftIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = s.n(r);
			const d = e => o.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), o.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = d
		}
	}
]);
//# sourceMappingURL=ChatMessageInput.13a5255cfa959666096b.js.map