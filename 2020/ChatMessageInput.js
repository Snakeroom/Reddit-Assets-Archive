// https://www.redditstatic.com/desktop2x/ChatMessageInput.2ef6da94fe08c4cb7c49.js
// Retrieved at 3/5/2020, 3:00:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatMessageInput"], {
		"./node_modules/lodash/_arrayReduceRight.js": function(e, t) {
			e.exports = function(e, t, s, n) {
				var a = null == e ? 0 : e.length;
				for (n && a && (s = e[--a]); a--;) s = t(s, e[a], a, e);
				return s
			}
		},
		"./node_modules/lodash/_baseEachRight.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseForOwnRight.js"),
				a = s("./node_modules/lodash/_createBaseEach.js")(n, !0);
			e.exports = a
		},
		"./node_modules/lodash/_baseExtremum.js": function(e, t, s) {
			var n = s("./node_modules/lodash/isSymbol.js");
			e.exports = function(e, t, s) {
				for (var a = -1, r = e.length; ++a < r;) {
					var o = e[a],
						c = t(o);
					if (null != c && (void 0 === i ? c == c && !n(c) : s(c, i))) var i = c,
						d = o
				}
				return d
			}
		},
		"./node_modules/lodash/_baseFilter.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var s = [];
				return n(e, (function(e, n, a) {
					t(e, n, a) && s.push(e)
				})), s
			}
		},
		"./node_modules/lodash/_baseForOwnRight.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseForRight.js"),
				a = s("./node_modules/lodash/keys.js");
			e.exports = function(e, t) {
				return e && n(e, t, a)
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
			e.exports = function(e, t, a, r) {
				for (var o = -1, c = n(s((t - e) / (a || 1)), 0), i = Array(c); c--;) i[r ? c : ++o] = e, e += a;
				return i
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, s, n, a) {
				return a(e, (function(e, a, r) {
					s = n ? (n = !1, e) : t(s, e, a, r)
				})), s
			}
		},
		"./node_modules/lodash/_baseWhile.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseSlice.js");
			e.exports = function(e, t, s, a) {
				for (var r = e.length, o = a ? r : -1;
					(a ? o-- : ++o < r) && t(e[o], o, e););
				return s ? n(e, a ? 0 : o, a ? o + 1 : r) : n(e, a ? o + 1 : 0, a ? r : o)
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
				a = s("./node_modules/lodash/_isIterateeCall.js"),
				r = s("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, s, o) {
					return o && "number" != typeof o && a(t, s, o) && (s = o = void 0), t = r(t), void 0 === s ? (s = t, t = 0) : s = r(s), o = void 0 === o ? t < s ? 1 : -1 : r(o), n(t, s, o, e)
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
				a = s("./node_modules/lodash/_isIterateeCall.js"),
				r = s("./node_modules/lodash/toInteger.js"),
				o = Math.ceil,
				c = Math.max;
			e.exports = function(e, t, s) {
				t = (s ? a(e, t, s) : void 0 === t) ? 1 : c(r(t), 0);
				var i = null == e ? 0 : e.length;
				if (!i || t < 1) return [];
				for (var d = 0, l = 0, u = Array(o(i / t)); d < i;) u[l++] = n(e, d, d += t);
				return u
			}
		},
		"./node_modules/lodash/dropRightWhile.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseIteratee.js"),
				a = s("./node_modules/lodash/_baseWhile.js");
			e.exports = function(e, t) {
				return e && e.length ? a(e, n(t, 3), !0, !0) : []
			}
		},
		"./node_modules/lodash/escape.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_escapeHtmlChar.js"),
				a = s("./node_modules/lodash/toString.js"),
				r = /[&<>"']/g,
				o = RegExp(r.source);
			e.exports = function(e) {
				return (e = a(e)) && o.test(e) ? e.replace(r, n) : e
			}
		},
		"./node_modules/lodash/filter.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayFilter.js"),
				a = s("./node_modules/lodash/_baseFilter.js"),
				r = s("./node_modules/lodash/_baseIteratee.js"),
				o = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (o(e) ? n : a)(e, r(t, 3))
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseFlatten.js"),
				a = s("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return n(a(e, t), 1)
			}
		},
		"./node_modules/lodash/includes.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseIndexOf.js"),
				a = s("./node_modules/lodash/isArrayLike.js"),
				r = s("./node_modules/lodash/isString.js"),
				o = s("./node_modules/lodash/toInteger.js"),
				c = s("./node_modules/lodash/values.js"),
				i = Math.max;
			e.exports = function(e, t, s, d) {
				e = a(e) ? e : c(e), s = s && !d ? o(s) : 0;
				var l = e.length;
				return s < 0 && (s = i(l + s, 0)), r(e) ? s <= l && e.indexOf(t, s) > -1 : !!l && n(e, t, s) > -1
			}
		},
		"./node_modules/lodash/maxBy.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseExtremum.js"),
				a = s("./node_modules/lodash/_baseGt.js"),
				r = s("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return e && e.length ? n(e, r(t, 2), a) : void 0
			}
		},
		"./node_modules/lodash/range.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_createRange.js")();
			e.exports = n
		},
		"./node_modules/lodash/reduce.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayReduce.js"),
				a = s("./node_modules/lodash/_baseEach.js"),
				r = s("./node_modules/lodash/_baseIteratee.js"),
				o = s("./node_modules/lodash/_baseReduce.js"),
				c = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var i = c(e) ? n : o,
					d = arguments.length < 3;
				return i(e, r(t, 4), s, d, a)
			}
		},
		"./node_modules/lodash/reduceRight.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayReduceRight.js"),
				a = s("./node_modules/lodash/_baseEachRight.js"),
				r = s("./node_modules/lodash/_baseIteratee.js"),
				o = s("./node_modules/lodash/_baseReduce.js"),
				c = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var i = c(e) ? n : o,
					d = arguments.length < 3;
				return i(e, r(t, 4), s, d, a)
			}
		},
		"./node_modules/lodash/takeWhile.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseIteratee.js"),
				a = s("./node_modules/lodash/_baseWhile.js");
			e.exports = function(e, t) {
				return e && e.length ? a(e, n(t, 3)) : []
			}
		},
		"./node_modules/lodash/trimEnd.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseToString.js"),
				a = s("./node_modules/lodash/_castSlice.js"),
				r = s("./node_modules/lodash/_charsEndIndex.js"),
				o = s("./node_modules/lodash/_stringToArray.js"),
				c = s("./node_modules/lodash/toString.js"),
				i = /\s+$/;
			e.exports = function(e, t, s) {
				if ((e = c(e)) && (s || void 0 === t)) return e.replace(i, "");
				if (!e || !(t = n(t))) return e;
				var d = o(e),
					l = r(d, o(t)) + 1;
				return a(d, 0, l).join("")
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var n = s("./node_modules/lodash/toString.js"),
				a = 0;
			e.exports = function(e) {
				var t = ++a;
				return n(e) + t
			}
		},
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, s, n) {
				var a = s ? s.call(n, e, t) : void 0;
				if (void 0 !== a) return !!a;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var r = Object.keys(e),
					o = Object.keys(t);
				if (r.length !== o.length) return !1;
				for (var c = Object.prototype.hasOwnProperty.bind(t), i = 0; i < r.length; i++) {
					var d = r[i];
					if (!c(d)) return !1;
					var l = e[d],
						u = t[d];
					if (!1 === (a = s ? s.call(n, l, u, d) : void 0) || void 0 === a && l !== u) return !1
				}
				return !0
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
				a = s.n(n),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const c = Object(r.a)(o.z),
				i = e => async t => {
					t(c(e))
				}, d = () => async e => {
					e(c({
						lastChatActivityUtcTs: Date.now()
					}))
				}, l = () => async e => {
					e(c({
						correlationId: a()()
					}))
				}
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3SwKz63oDhqTWK_aG-xnXF",
				Userpic: "_1c_u99Y2cLg7hhjeq50Op6",
				userpic: "_1c_u99Y2cLg7hhjeq50Op6",
				TrashIcon: "_2xUH_6ZFDwVzDXthdBMEyN",
				trashIcon: "_2xUH_6ZFDwVzDXthdBMEyN",
				ProfileIcon: "_2OVsvDCTt2OzgIct4dAykk",
				profileIcon: "_2OVsvDCTt2OzgIct4dAykk"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/lessComponent.tsx"),
				i = (s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./src/config.ts")),
				d = s("./node_modules/lodash/memoize.js"),
				l = s.n(d),
				u = s("./src/lib/constants/index.ts"),
				m = ["FF4500", "0DD3BB", "24A0ED", "FFB000", "FF8717", "46D160", "25B79F", "0079D3", "4856A3", "C18D42", "A06A42", "46A508", "008985", "7193FF", "7E53C1", "FFD635", "DDBD37", "D4E815", "94E044", "FF66AC", "DB0064", "FF585B", "EA0027", "A5A4A4", "545452"],
				h = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				p = s.n(h);
			const b = c.a.div("Userpic", p.a);
			var _ = l()(e => {
					const {
						userId: t
					} = e, {
						processingAvatarImageUrl: s
					} = i.a, n = (e => e.replace(u.wb.Account + "_", ""))(t), {
						avatar: r,
						color: o
					} = (e => {
						const t = m.length,
							s = parseInt(e, 36),
							n = s % 20 + 1,
							a = Math.floor(s / 20) % t;
						return {
							avatar: ("0" + n).slice(-2),
							color: m[a]
						}
					})(n), c = "".concat(s, "/avatar_default_").concat(r, "_").concat(o, ".png");
					return a.a.createElement(b, {
						style: {
							backgroundImage: "url(".concat(c, ")"),
							backgroundColor: "#".concat(o)
						}
					})
				}),
				g = s("./src/reddit/icons/svgs/Redditor/index.tsx"),
				x = s("./src/reddit/icons/svgs/Remove/index.tsx");
			const f = c.a.img("Userpic", p.a),
				j = Object(o.c)({
					account: e => e.user.account
				}),
				v = Object(r.b)(j);
			t.a = c.a.wrapped(v(e => {
				let {
					account: t,
					className: s,
					height: n,
					isLivestreaming: r,
					trash: o,
					userId: c,
					width: i
				} = e;
				const d = r ? 36 : 20,
					l = {
						height: n || d,
						width: i || d,
						minWidth: i || d
					};
				return o ? a.a.createElement("div", {
					className: s,
					style: l
				}, a.a.createElement(x.a, {
					className: p.a.TrashIcon
				})) : c ? a.a.createElement("div", {
					className: s,
					style: l
				}, t && t.accountIcon && t.id === c ? a.a.createElement(f, {
					src: t.accountIcon,
					alt: "user icon"
				}) : a.a.createElement(_, {
					userId: c
				})) : a.a.createElement("div", {
					className: s,
					style: l
				}, t && t.accountIcon ? a.a.createElement(f, {
					src: t.accountIcon,
					alt: "user icon"
				}) : a.a.createElement(g.a, {
					className: p.a.ProfileIcon
				}))
			}), "ChatIcon", p.a)
		},
		"./src/reddit/components/CommentsChat/MessageInput/index.m.less": function(e, t, s) {
			e.exports = {
				FormWrapper: "mfKS0B5uqUX6PXcuSjTop",
				formWrapper: "mfKS0B5uqUX6PXcuSjTop",
				LivestreamingWrapper: "_1xV0i2uW_2xdNlBcbSEjpS",
				livestreamingWrapper: "_1xV0i2uW_2xdNlBcbSEjpS",
				inputLine: "_2rpcmnaHqKJnQeHI6-RZU8",
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
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/noop.js"),
				a = s.n(n),
				r = s("./node_modules/lodash/throttle.js"),
				o = s.n(r),
				c = s("./node_modules/react/index.js"),
				i = s.n(c),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				u = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				h = s("./src/reddit/models/PostDraft/index.ts"),
				p = s("./src/reddit/actions/comment/index.ts"),
				b = s("./src/reddit/actions/gold/modals.ts"),
				_ = s("./src/reddit/actions/publicAccessNetwork/theaterSettings.ts"),
				g = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				x = s("./src/reddit/components/RichTextEditor/index.tsx"),
				f = s("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				j = s("./src/reddit/components/RichTextJsonChatReply/index.tsx"),
				v = s("./src/reddit/controls/Button/index.tsx"),
				C = s("./src/reddit/controls/ErrorText/index.tsx"),
				E = s("./src/reddit/helpers/correlationIdTracker.ts"),
				O = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				w = s("./src/reddit/helpers/richTextEditor/index.ts"),
				I = s("./src/reddit/helpers/trackers/rpan.ts"),
				N = s("./src/reddit/i18n/utils.ts"),
				y = s("./src/reddit/icons/svgs/Close/index.tsx"),
				k = s("./src/reddit/icons/svgs/Gild/index.tsx"),
				A = s("./src/reddit/icons/svgs/Send/index.tsx"),
				L = s("./src/reddit/models/PostCreationForm/index.ts"),
				T = s("./src/reddit/selectors/comments.ts"),
				S = s("./src/reddit/selectors/posts.ts"),
				R = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				F = s("./src/reddit/selectors/user.ts"),
				D = s("./src/reddit/components/CommentsChat/MessageInput/index.m.less"),
				M = s.n(D);
			const {
				fbt: B
			} = s("./node_modules/fbt/lib/FbtPublic.js"), P = {}, U = 1e3, V = "chat_submission_from_rte", W = m.a.form("Form", M.a), H = m.a.wrapped(v.a, "ChatButton", M.a), K = m.a.div("CloseIconWrap", M.a), q = m.a.div("Reply", M.a), G = m.a.div("ReplyAuthor", M.a), J = m.a.div("ReplyComment", M.a), Z = m.a.wrapped(x.a, "RichTextEditor", M.a), z = m.a.wrapped(g.a, "SmallChatUserIcon", M.a), X = e => Object.values(e).reduce((e, t) => e + t, 0), Y = Object(l.a)(Object(l.c)({
				draft: T.i,
				errorMsgs: T.I,
				hasError: T.w,
				language: F.O,
				liveStreamingChatCharacterLimit: R.a,
				pending: (e, t) => e.comments.submit.pending[t.draftKey],
				post: S.M
			}), e => Object.assign({}, e, {
				awardCount: e.post.awardCountsById && X(e.post.awardCountsById)
			})), Q = Object(d.b)(Y, (e, t) => {
				let {
					isEditing: s,
					comment: n,
					commentsPageKey: a,
					draftKey: r,
					postId: o,
					replyComment: c,
					isLivestreaming: i,
					scrollToBottom: d
				} = t;
				return {
					dispatchSubmit: async (t, c, l) => {
						s && n ? await e(Object(p.eb)({
							id: n.id,
							commentsPageKey: a,
							depth: 0,
							draftKey: r,
							formData: t
						})) : l ? e(Object(p.jb)({
							commentsPageKey: a,
							draftKey: r,
							parentCommentDepth: l.depth,
							parentCommentId: l.id,
							formData: t,
							editorMode: c
						})) : await e(Object(p.lb)(o, a, r, t, c, !0, i)), d && d()
					},
					handleGiveAward: () => e(Object(b.d)(o)),
					onCancelEdit: () => n && e(Object(p.U)({
						commentId: n.id,
						commentsPageKey: a
					})),
					onLivestreamingChatMessageEdit: () => e(Object(_.a)()),
					closeReply: () => c && e(Object(p.O)({
						parentCommentId: c.id,
						commentsPageKey: a
					}))
				}
			});
			class $ extends i.a.Component {
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
					}, this.passChangeToLivestreaming = o()(() => this.props.onLivestreamingChatMessageEdit(), U, {
						leading: !1,
						trailing: !0
					}), this.onClickGiveAward = async () => {
						const {
							handleGiveAward: e,
							isLivestreaming: t,
							postId: n,
							sendEvent: a
						} = this.props;
						Object(E.d)(E.a.GildingFlow), e();
						const {
							clickGildEvent: r,
							clickRpanGiveAward: o
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						a((t ? o : r)(n))
					}, this.handleCloseReply = e => {
						e.preventDefault(), this.props.closeReply()
					}, this.handleSubmit = e => {
						e.preventDefault(), this.onSubmit()
					}, this.onSubmit = () => {
						if (this.canSubmit()) {
							const e = {
								commentMode: L.h.RICH_TEXT,
								draftType: h.c.replyToComment,
								rteState: this.state.rteState,
								hasFocus: !0,
								text: ""
							};
							this.cleanInputForm(), this.props.dispatchSubmit(e, L.h.RICH_TEXT, this.props.replyComment)
						}
						this.props.isLivestreaming && this.props.sendEvent(Object(I.i)(this.props.postId))
					}, this.canSubmit = () => Boolean(!this.props.pending && this.state.hasChanged), this.state = {
						hasChanged: !1,
						showError: e.hasError,
						rteState: e.isEditing && e.comment ? f.a.createInitial(e.comment.media.richtextContent) : f.a.createInitial()
					}
				}
				isReplyCommentChanged(e) {
					const {
						replyComment: t
					} = this.props;
					return (e.replyComment && e.replyComment.id) !== (t && t.id)
				}
				shouldComponentUpdate(e, t) {
					return t.rteState.editorKey !== this.state.rteState.editorKey || t.hasChanged !== this.state.hasChanged || t.showError !== this.state.showError || e.pending !== this.props.pending || e.awardCount !== this.props.awardCount || this.isReplyCommentChanged(e)
				}
				componentWillReceiveProps(e) {
					!this.props.isEditing && this.props.draft && this.props.draft.rteState && e.draft && null === e.draft.rteState && this.cleanInputForm(), this.isReplyCommentChanged(e) && e.replyComment && this.focusOnForm(), e.hasError !== this.props.hasError && this.setState({
						showError: e.hasError
					})
				}
				componentDidUpdate(e) {
					this.props.isLivestreaming || !e.pending || this.props.pending || this.focusOnForm()
				}
				cleanInputForm() {
					this.setState({
						rteState: f.a.createInitial()
					})
				}
				render() {
					const {
						awardCount: e,
						errorMsgs: t,
						isEditing: s,
						isLivestreaming: n,
						language: r,
						liveStreamingChatCharacterLimit: o,
						pending: c,
						post: d,
						replyComment: l
					} = this.props, m = n ? Object(N.c)("Send message (".concat(o || 200, " character limit)")) : Object(N.c)("Send a message (use the Enter key)"), h = d.isGildable && n && !s, p = n;
					return i.a.createElement("div", {
						className: Object(u.a)(M.a.FormWrapper, {
							[M.a.LivestreamingWrapper]: n
						})
					}, !s && l && i.a.createElement(q, null, i.a.createElement(J, {
						onClick: this.handleCloseReply
					}, i.a.createElement(G, null, B._("Replying to u/ {username} :", [B._param("username", l.author)], {
						hk: "lYumD"
					})), i.a.createElement(j.a, {
						className: M.a.RichTextJson,
						key: "rich-text-".concat(l.id),
						content: Object(O.a)(l),
						rtJsonElementProps: P
					}), i.a.createElement(K, null, i.a.createElement(y.a, null)))), i.a.createElement("div", {
						className: M.a.inputLine
					}, i.a.createElement(W, {
						className: Object(u.a)({
							[M.a.Editing]: s
						}),
						onSubmit: this.handleSubmit,
						onReset: this.handleCancel
					}, i.a.createElement(ee, {
						isEditing: !!s,
						isLivestreaming: !!n
					}), i.a.createElement(Z, {
						className: Object(u.a)(M.a.RichTextEditor, {
							[M.a.Livestreaming]: n && !s,
							[M.a.Editing]: !n && s
						}),
						focusableContentRTEClassName: Object(u.a)({
							[M.a.LivestreamingFocusableContent]: n && !s
						}),
						dataTestId: V,
						editorType: w.a.Comment,
						initialMinHeight: 20,
						initialHeight: n ? 20 : void 0,
						rteState: this.state.rteState,
						rteRef: this.setRTEComponentRef,
						language: r,
						onChange: this.handleChange,
						onFocus: this.handleFocus,
						onSubmit: this.onSubmit,
						placeholderText: m,
						readOnly: c,
						showSubmitButton: p,
						submitButtonClassName: M.a.insetSubmitButton,
						submitOnEnter: !0,
						trackToolbarClick: a.a,
						hideToolbar: !0,
						noBorder: !0,
						isChatPost: !0
					}), s && i.a.createElement(H, {
						className: Object(u.a)(M.a.ChatButton, {
							[M.a.LivestreamingResetButton]: n
						}),
						type: "reset"
					}, i.a.createElement(y.a, null)), !p && i.a.createElement(H, {
						className: Object(u.a)(M.a.ChatButton, {
							[M.a.LivestreamingChatButton]: n && !s,
							[M.a.LivestreamingResetButton]: n && s
						}),
						type: "submit",
						disabled: !this.canSubmit(),
						"aria-label": Object(N.c)("send a message")
					}, i.a.createElement(A.a, null))), h && i.a.createElement(H, {
						className: Object(u.a)(M.a.ChatButton, {
							[M.a.LivestreamingChatButton]: n,
							[M.a.leftPad]: !p
						}),
						"aria-label": Object(N.c)("give award"),
						onClick: this.onClickGiveAward
					}, i.a.createElement(k.a, null), e ? i.a.createElement("div", null, e) : null)), this.state.showError && Object(C.c)(t))
				}
			}
			const ee = e => {
				let {
					isEditing: t,
					isLivestreaming: s
				} = e;
				return s ? null : t ? i.a.createElement(z, {
					height: 20,
					width: 20
				}) : i.a.createElement(g.a, {
					height: 25,
					width: 25
				})
			};
			t.default = Q($)
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
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/higherOrderComponents/asModal/index.tsx"),
				o = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = s("./src/reddit/controls/TextButton/index.tsx"),
				i = s("./src/reddit/i18n/utils.ts"),
				d = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = s("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = s.n(l);
			const m = e => e.preventDefault();
			t.a = Object(r.a)(e => a.a.createElement(o.c, null, a.a.createElement(o.g, null, a.a.createElement(d.a, null, a.a.createElement(o.n, null, e.headerText || Object(i.c)("Confirm")), a.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, a.a.createElement(o.b, null)))), a.a.createElement(o.j, null, a.a.createElement(o.m, {
				className: u.a.ModalText
			}, e.modalText)), a.a.createElement(o.e, null, a.a.createElement(o.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !0
			}, e.cancelActionText || Object(i.c)("Cancel")), a.a.createElement(o.r, {
				className: u.a.buttonWidth,
				onMouseDown: m,
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
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/FocusableContent/index.m.less"),
				i = s.n(c);
			t.a = o.a.wrapped(e => a.a.createElement("div", {
				className: Object(r.a)(e.className, {
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
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/RichTextJson/index.tsx"),
				c = s("./src/reddit/components/RichTextJson/elements.tsx"),
				i = s("./src/reddit/components/RichTextJson/renderers.tsx"),
				d = s("./src/reddit/models/RichTextJson/index.ts");
			const l = e => a.a.createElement(c.f, null, e),
				u = e => {
					const t = [],
						s = e.c || [],
						n = s.length;
					for (let a = 0; a < n; a++) {
						const e = s[a];
						t.push(e.e === d.w ? e.t : Object(i.e)(e, {}, a))
					}
					return a.a.createElement(a.a.Fragment, null, t)
				},
				m = e => e.c && e.c.length ? a.a.createElement(a.a.Fragment, null, Object(i.i)(e.c, null, {})) : a.a.createElement("br", null);
			var h = s("./src/reddit/constants/elementClassNames.ts"),
				p = s("./src/reddit/components/RichTextJsonChatReply/index.m.less"),
				b = s.n(p);
			const _ = s("./src/lib/lessComponent.tsx").a.div("Container", b.a),
				g = {
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
				} = e, n = s.document, c = [], i = Object(o.b)(n), p = Object(o.c)(n);
				if (-1 !== i)
					for (let a = i; a <= p; a++) {
						const e = n[a],
							t = e && g[e.e];
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
								c.push(u(e));
								break;
							case d.u:
								c.push(m(e))
						}
					}
				return a.a.createElement(_, {
					className: Object(r.a)(h.j, t)
				}, c)
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
			var n = s("./node_modules/lodash/uniqueId.js"),
				a = s.n(n),
				r = s("./node_modules/raf/index.js"),
				o = s.n(r),
				c = s("./node_modules/react/index.js"),
				i = s.n(c),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				u = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/actions/modal.ts"),
				h = s("./src/reddit/i18n/utils.ts"),
				p = s("./src/reddit/selectors/activeModalId.ts"),
				b = s("./node_modules/fbt/lib/FbtPublic.js"),
				_ = s("./src/higherOrderComponents/asModal/index.tsx"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/layout/row/Inline/index.tsx"),
				f = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				j = s.n(f);
			var v = Object(_.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return i.a.createElement("div", {
						className: j.a.wrapper
					}, i.a.createElement(x.a, {
						className: j.a.titleRow
					}, s), i.a.createElement("div", {
						className: j.a.detailsContainer
					}, t), i.a.createElement(x.a, {
						className: j.a.buttonRow
					}, i.a.createElement(g.f, {
						className: j.a.confirmButton,
						onClick: e.onConfirmed
					}, b.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				C = s("./src/reddit/controls/ErrorText/index.m.less"),
				E = s.n(C);
			s.d(t, "a", (function() {
				return N
			})), s.d(t, "c", (function() {
				return y
			}));
			const O = Object(l.c)({
				activeModalId: p.a
			});
			class w extends i.a.Component {
				constructor(e) {
					super(e), this.spanRef = i.a.createRef(), this.toggleModal = () => {
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
					o()(() => {
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
						errorModalBody: n,
						errorModalTitle: a = Object(h.c)("Error"),
						moreText: r = Object(h.c)("More")
					} = this.props, {
						modalId: o,
						textHasOverflowed: c
					} = this.state;
					return i.a.createElement("div", {
						className: Object(u.a)(E.a.wrapper, s)
					}, i.a.createElement("span", {
						className: E.a.description,
						ref: this.spanRef
					}, e), c && i.a.createElement("span", {
						className: E.a.moreText,
						onClick: this.toggleModal
					}, r), t === o && i.a.createElement(v, {
						onConfirmed: this.toggleModal,
						title: a
					}, n || e))
				}
			}
			const I = Object(d.b)(O, e => ({
					toggleErrorTextModal: t => e(Object(m.i)(t))
				}))(w),
				N = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: n,
						fallbackMessage: a,
						messages: r = []
					} = e, o = r.length ? r : a ? [a] : [];
					return o.length ? i.a.createElement("div", {
						className: t
					}, o.map((e, t) => i.a.createElement(I, {
						className: s,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				y = e => i.a.createElement(N, {
					fallbackMessage: Object(h.c)("Something went wrong"),
					messages: e
				});
			t.b = I
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/controls/Input/index.m.less"),
				r = s.n(a);
			t.a = n.a.input("input", r.a)
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
				return o
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = s.n(a);
			const o = e => {
					let {
						isLoading: t
					} = e;
					return Object(n.a)(r.a.loadingBackground, {
						[r.a["m-loading"]]: t
					})
				},
				c = e => Object(n.a)(r.a.loadingBar, o(e))
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, s) {
			"use strict";
			s.d(t, "m", (function() {
				return i
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "k", (function() {
				return u
			})), s.d(t, "l", (function() {
				return m
			})), s.d(t, "j", (function() {
				return h
			})), s.d(t, "f", (function() {
				return p
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "d", (function() {
				return _
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "c", (function() {
				return x
			})), s.d(t, "i", (function() {
				return f
			})), s.d(t, "h", (function() {
				return j
			}));
			var n = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			const r = e => {
					switch (e) {
						case n.a.LIVE:
							return "stream_live";
						case n.a.VOD:
							return "stream_vod";
						case n.a.UNAVAILABLE:
							return "stream_unavailable";
						default:
							return
					}
				},
				o = (e, t) => {
					if (t) {
						const s = Object(n.h)(e, {
							streamIdFromPath: t.post.id
						});
						return {
							post: a.post(e, t.post.id),
							media: Object.assign({}, a.media(e, t.post.id, void 0, t), {
								type: r(s)
							})
						}
					}
				},
				c = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				i = () => e => ({
					source: "stream_du",
					action: "view",
					noun: "stream_du"
				}),
				d = () => e => ({
					source: "stream_du",
					action: "click",
					noun: "show_less"
				}),
				l = (e, t) => s => Object.assign({
					source: "stream_du",
					action: "click",
					noun: "enlarge",
					actionInfo: {
						position: t || 0
					}
				}, o(s, e)),
				u = e => t => Object.assign({
					source: "stream_player",
					action: "fail",
					noun: "stream"
				}, c(t), e && Object.assign({}, o(t, e))),
				m = e => t => Object.assign({
					source: "stream_player",
					action: "play",
					noun: "stream"
				}, c(t), o(t, e)),
				h = e => t => Object.assign({
					source: "stream_player",
					action: "complete",
					noun: "stream"
				}, c(t), o(t, e)),
				p = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "share"
				}, c(t), o(t, e)),
				b = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "upvote"
				}, c(t), o(t, e)),
				_ = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "downvote"
				}, c(t), o(t, e)),
				g = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "report"
				}, c(t), o(t, e)),
				x = e => t => {
					const s = Object(n.k)(t, e);
					return Object.assign({
						source: "stream_player",
						action: "click",
						noun: "chat"
					}, o(t, s))
				},
				f = e => t => {
					const s = Object(n.k)(t, e);
					return Object.assign({
						source: "stream_player",
						action: "click",
						noun: "send_chat"
					}, o(t, s))
				},
				j = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					}
				})
		},
		"./src/reddit/icons/svgs/Gild/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && a.a.createElement("desc", null, e.desc), a.a.createElement("g", {
				stroke: "none",
				strokeWidth: "1",
				fillRule: "evenodd"
			}, a.a.createElement("g", {
				fill: "inherit"
			}, a.a.createElement("path", {
				d: "m15.1275768 8.9935-2.059 2.204.371 2.992c.022.181-.055.359-.203.466-.087.064-.19.096-.294.096-.072 0-.144-.016-.211-.047l-2.73200003-1.277-2.731 1.277c-.164.076-.359.059-.506-.049-.148-.107-.225-.285-.202-.466l.37-2.992-2.059-2.204c-.124-.133-.166-.323-.11-.496s.202-.302.381-.336l2.96-.573 1.46-2.639c.175-.318.69900003-.318.87500003 0l1.46 2.639 2.959.573c.179.034.325.163.381.336s.014.363-.11.496m2.911-2.985-6.586-4.786c-.869-.63-2.03700003-.63-2.90600003 0v.001l-6.586 4.785c-.869.631-1.23 1.742-.898 2.764l2.515 7.743c.332 1.021 1.278 1.708 2.352 1.708h8.14000003c1.075 0 2.02-.687 2.352-1.708l2.516-7.743c.332-1.022-.03-2.133-.899-2.764"
			}))))
		},
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, a.a.createElement("g", null, a.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				c = s.n(o);
			const i = e => a.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), a.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = i
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				c = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				i = s("./src/reddit/selectors/posts.ts"),
				d = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				l = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				u = s("./node_modules/lodash/memoize.js");
			const m = e => e.publicAccessNetwork.listings,
				h = s.n(u)()(e => Object(a.a)(Object(n.a)(m, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var p = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			s.d(t, "k", (function() {
				return E
			})), s.d(t, "l", (function() {
				return I
			})), s.d(t, "m", (function() {
				return N
			})), s.d(t, "g", (function() {
				return A
			})), s.d(t, "c", (function() {
				return R
			})), s.d(t, "f", (function() {
				return F
			})), s.d(t, "j", (function() {
				return D
			})), s.d(t, "i", (function() {
				return M
			})), s.d(t, "e", (function() {
				return B
			})), s.d(t, "a", (function() {
				return V
			})), s.d(t, "h", (function() {
				return W
			})), s.d(t, "b", (function() {
				return H
			})), s.d(t, "d", (function() {
				return K
			}));
			const b = e => e.publicAccessNetwork.reports.reported,
				_ = e => e.publicAccessNetwork.history,
				g = e => e.publicAccessNetwork.history.cursor,
				x = e => e.publicAccessNetwork.history.visitOrder,
				f = e => e.publicAccessNetwork.hlsStreams,
				j = Object(n.a)(f, e => e.ended),
				v = Object(n.a)(f, e => e.removed),
				C = Object(n.a)(e => e.publicAccessNetwork.models, j, v, (e, t, s) => {
					const n = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const n = s.stream.state,
							a = P(n, c.b.ENDED) ? c.b.ENDED : n,
							r = s.stream.vod_accessible;
						return a === n && !0 === r ? e : Object.assign({}, e, {
							[t]: Object.assign({}, s, {
								stream: Object.assign({}, s.stream, {
									state: a,
									vod_accessible: !0
								})
							})
						})
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const n = s.stream.state,
							a = P(n, c.b.ENDED) ? c.b.ENDED : n,
							r = s.stream.vod_accessible;
						return a === n && !1 === r ? e : Object.assign({}, e, {
							[t]: Object.assign({}, s, {
								stream: Object.assign({}, s.stream, {
									state: a,
									vod_accessible: !1
								})
							})
						})
					}, n)
				}),
				E = (e, t) => {
					return C(e)[Object(o.f)(t)]
				},
				O = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, (e, t) => h(t.listingName)(e, t), C, b, i.g, d.b, (e, t, s, n, a, i) => {
					if (i) {
						const r = [];
						if (e) {
							const t = Object(o.f)(e);
							s[t] && r.push(t)
						}
						const i = r.concat(t),
							d = [...new Set(i)],
							l = new Set([...n, ...a]);
						return d.filter(e => {
							const t = s[e];
							return !l.has(e) && !t.post.isHidden && t.stream.state !== c.b.KILLED && t.stream.state !== c.b.PURGED
						})
					}
					const d = new Set([...n, ...a]);
					return Object.keys(s).filter(e => !d.has(e)).map(e => s[e]).filter(e => e.rank !== r.l).filter(e => !e.post.isHidden).filter(e => e.stream.state !== c.b.KILLED && e.stream.state !== c.b.PURGED).map(e => e.post.id)
				}),
				w = Object(n.a)((e, t) => {
					let {
						count: s
					} = t;
					return s
				}, C, (e, t) => {
					let {
						listingName: s,
						streamIdFromPath: n
					} = t;
					return O(e, {
						listingName: s,
						streamIdFromPath: n
					})
				}, (e, t, s) => {
					const n = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? n.slice(0, e) : n
				}),
				I = Object(n.a)(C, w, (e, t) => {
					const s = t.find(t => {
						const s = e[t];
						return !!s && s.stream.state === c.b.IS_LIVE
					});
					if (s) return e[s]
				}),
				N = Object(n.a)(C, w, (e, t) => t.map(t => e[t]).filter(e => !!e && e.stream.state === c.b.IS_LIVE).reduce((e, t) => e + t.continuous_watchers, 0)),
				y = Object(n.a)(x, (e, t) => {
					let {
						related: s,
						streamIdFromPath: n,
						subreddit: a
					} = t;
					return w(e, {
						listingName: s || a,
						streamIdFromPath: n
					})
				}, (e, t) => {
					const s = new Set(e),
						n = t.filter(e => !s.has(e));
					if (n.length) return n[0]
				}),
				k = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, C, (e, t) => {
					let {
						related: s,
						streamIdFromPath: n,
						subreddit: a
					} = t;
					return w(e, {
						listingName: s || a,
						streamIdFromPath: n
					})
				}, _, (e, t, s, n) => {
					if (!s.length) return;
					const a = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						r = a.find(e => e.stream.state === c.b.IS_LIVE);
					if (r) return r.post.id;
					const o = a.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (n.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return o ? o.post.id : void 0
				}),
				A = Object(a.a)(Object(n.a)(k, C, (e, t) => e ? t[e] : void 0)),
				L = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? Object(o.f)(s) : void 0
				}, k, b, i.g, (e, t) => {
					let {
						related: s,
						streamIdFromPath: n,
						subreddit: a
					} = t;
					return w(e, {
						listingName: s || a,
						streamIdFromPath: n
					})
				}, (e, t, s, n, a) => !e || s.includes(e) || n.includes(e) ? t || a[0] : e),
				T = Object(n.a)(g, x, y, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				S = Object(n.a)(g, x, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				R = Object(a.a)(Object(n.a)(L, C, (e, t) => e ? t[e] : void 0)),
				F = Object(a.a)(Object(n.a)(T, C, (e, t) => e ? t[e] : void 0)),
				D = Object(a.a)(Object(n.a)(S, C, (e, t) => e ? t[e] : void 0)),
				M = (Object(a.a)(Object(n.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, C, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => Object.assign({}, t[s], {
					preloadedPreviewUrl: e[s]
				})))), Object(n.a)((e, t) => {
					let {
						streamId: s
					} = t;
					return s
				}, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => t[e])),
				B = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? E(e, s) : void 0
				}, e => !e || e.chat_disabled);

			function P(e, t) {
				const s = {
					[c.b.NOT_STARTED]: 0,
					[c.b.PUBLISHED]: 1,
					[c.b.IS_LIVE]: 2,
					[c.b.DISCONNECTED]: 2,
					[c.b.ENDED]: 3,
					[c.b.KILLED]: 4,
					[c.b.PURGED]: 4
				};
				return s[t] >= s[e]
			}
			const U = Object(n.a)(L, _, (e, t) => e && t.timestamps[e] || 0);
			var V;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(V || (V = {}));
			const W = Object(n.a)(L, C, p.b, (e, t, s) => {
					if (s) return V.INTRO;
					const n = e && t[e];
					if (!n) return V.UNAVAILABLE;
					const a = n.stream.state;
					return a === c.b.IS_LIVE || a === c.b.DISCONNECTED ? V.LIVE : a === c.b.ENDED && n.stream.vod_accessible ? V.VOD : V.UNAVAILABLE
				}),
				H = Object(n.a)(R, W, p.b, l.c, l.p, (e, t, s, n, a) => s ? n : e ? t === V.LIVE || t === V.VOD ? e.stream.hls_url : a : void 0),
				K = Object(n.a)(R, W, U, (e, t, s) => e ? t === V.LIVE ? e.broadcast_time : t === V.VOD && s < e.broadcast_time ? s : 0 : 0)
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
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				r = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const o = e => e.publicAccessNetwork.theaterSettings,
				c = Object(n.a)(o, r.o, (e, t) => t && !e.isIntroFinished),
				i = Object(n.a)(o, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + a.a > Date.now()
		}
	}
]);
//# sourceMappingURL=ChatMessageInput.2ef6da94fe08c4cb7c49.js.map