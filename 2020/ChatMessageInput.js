// https://www.redditstatic.com/desktop2x/ChatMessageInput.1da04b343d7a19a1bfbf.js
// Retrieved at 10/28/2020, 4:10:08 PM by Reddit Dataminer v1.0.0
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
			const c = Object(r.a)(o.B),
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
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = s("./src/config.ts"),
				a = s("./node_modules/lodash/memoize.js"),
				r = s.n(a),
				o = s("./node_modules/react/index.js"),
				c = s.n(o),
				i = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = ["FF4500", "0DD3BB", "24A0ED", "FFB000", "FF8717", "46D160", "25B79F", "0079D3", "4856A3", "C18D42", "A06A42", "46A508", "008985", "7193FF", "7E53C1", "FFD635", "DDBD37", "D4E815", "94E044", "FF66AC", "DB0064", "FF585B", "EA0027", "A5A4A4", "545452"],
				u = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				m = s.n(u);
			const h = d.a.div("Userpic", m.a);
			t.a = r()(e => {
				const {
					userId: t
				} = e, {
					processingAvatarImageUrl: s
				} = n.a, a = (e => e.replace(i.yb.Account + "_", ""))(t), {
					avatar: r,
					color: o
				} = (e => {
					const t = l.length,
						s = parseInt(e, 36),
						n = s % 20 + 1,
						a = Math.floor(s / 20) % t;
					return {
						avatar: ("0" + n).slice(-2),
						color: l[a]
					}
				})(a), d = "".concat(s, "/avatar_default_").concat(r, "_").concat(o, ".png");
				return c.a.createElement(h, {
					style: {
						backgroundImage: "url(".concat(d, ")"),
						backgroundColor: "#".concat(o)
					}
				})
			})
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
				i = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx"),
				d = s("./src/reddit/components/UserIcon/helpers.ts"),
				l = s("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				u = s("./src/reddit/icons/svgs/Redditor/index.tsx"),
				m = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				h = s("./src/reddit/selectors/experiments/econ/snoovatar.ts"),
				p = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				b = s.n(p);
			const _ = c.a.img("Userpic", b.a),
				g = Object(o.c)({
					account: e => e.user.account,
					isSnoovatarEnabled: h.a
				}),
				f = Object(r.b)(g);
			t.a = c.a.wrapped(f(e => {
				let {
					account: t,
					className: s,
					height: n,
					icon: r,
					isLivestreaming: o,
					isSnoovatarEnabled: c,
					trash: h,
					userId: p,
					width: g
				} = e;
				const f = o ? 36 : 20,
					j = {
						height: n || f,
						width: g || f,
						minWidth: g || f
					};
				if (h) return a.a.createElement("div", {
					className: s,
					style: j
				}, a.a.createElement(m.a, {
					className: b.a.TrashIcon
				}));
				const x = t && t.id === p,
					v = x ? t.accountIcon : r;
				return c && Object(d.a)(v) ? a.a.createElement("div", {
					className: s,
					style: j
				}, a.a.createElement(l.a, {
					headshot: v
				})) : p ? a.a.createElement("div", {
					className: s,
					style: j
				}, x && t.accountIcon ? a.a.createElement(_, {
					src: t.accountIcon,
					alt: "user icon"
				}) : a.a.createElement(i.a, {
					userId: p
				})) : a.a.createElement("div", {
					className: s,
					style: j
				}, t && t.accountIcon && !o ? a.a.createElement(_, {
					src: t.accountIcon,
					alt: "user icon"
				}) : a.a.createElement(u.a, {
					className: b.a.ProfileIcon
				}))
			}), "ChatIcon", b.a)
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
				a = s("./node_modules/lodash/noop.js"),
				r = s.n(a),
				o = s("./node_modules/lodash/throttle.js"),
				c = s.n(o),
				i = s("./node_modules/react/index.js"),
				d = s.n(i),
				l = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/classNames/index.ts"),
				h = s("./src/lib/lessComponent.tsx"),
				p = s("./src/reddit/models/PostDraft/index.ts"),
				b = s("./src/reddit/actions/comment/index.ts"),
				_ = s("./src/reddit/actions/gold/modals.ts"),
				g = s("./src/reddit/actions/publicAccessNetwork/theaterSettings.ts"),
				f = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				j = s("./src/reddit/components/RichTextEditor/index.tsx"),
				x = s("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				v = s("./src/reddit/components/RichTextJsonChatReply/index.tsx"),
				O = s("./src/reddit/controls/Button/index.tsx"),
				C = s("./src/reddit/controls/ErrorText/index.tsx"),
				E = s("./src/reddit/helpers/correlationIdTracker.ts"),
				I = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				y = s("./src/reddit/helpers/richTextEditor/index.ts"),
				w = s("./src/reddit/helpers/trackers/rpan.ts"),
				k = s("./src/reddit/icons/svgs/Close/index.tsx"),
				A = s("./src/reddit/icons/svgs/Send/index.tsx"),
				N = s("./src/reddit/models/PostCreationForm/index.ts"),
				S = s("./src/reddit/selectors/comments.ts"),
				L = s("./src/reddit/selectors/posts.ts"),
				T = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				F = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/makeCommentsPageKey/index.ts")),
				R = s("./src/reddit/selectors/communityAwards.ts"),
				D = s("./src/reddit/selectors/gold/awardIcon.ts"),
				M = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				P = s("./src/reddit/components/CommentsChat/Comment/AwardCountSpectacle/AwardCountAnimation/index.m.less"),
				B = s.n(P);
			class U extends i.Component {
				render() {
					const {
						className: e,
						count: t,
						iconUrl: s,
						isAnimated: n
					} = this.props;
					return d.a.createElement("div", {
						className: Object(m.a)(B.a.container, e, {
							[B.a.isAnimated]: n
						})
					}, d.a.createElement(M.a, {
						className: B.a.gildIcon
					}), n && s && d.a.createElement("div", {
						className: B.a.awardingIcon,
						style: {
							backgroundImage: 'url("'.concat(s, '")')
						}
					}), t ? d.a.createElement("div", {
						className: B.a.count
					}, t) : null)
				}
			}
			var V = Object(l.b)(() => Object(u.c)({
				iconUrl: (e, t) => {
					let {
						awardId: s
					} = t;
					if (!s) return;
					const n = Object(R.a)(e, s);
					return Object(D.a)(e, {
						award: n,
						minSize: 64
					})
				}
			}))(U);
			const K = Object(l.b)(() => Object(u.a)(e => e, (e, t) => {
					let {
						postId: s
					} = t;
					return Object(S.g)(e, {
						commentsPageKey: Object(F.a)(s)
					})
				}, L.O, (e, t) => {
					let {
						postId: s
					} = t;
					return Object(S.v)(e, {
						commentsPageKey: Object(F.a)(s)
					})
				}, (e, t, s, n) => {
					return {
						commentAwardIds: t.length ? t.reduce((t, s) => {
							const n = Object(S.n)(e, {
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
				G = e => ({
					initialCommentAwardIds: e.isFullyLoaded ? [...e.commentAwardIds] : [],
					initialPostAwardCount: e.isFullyLoaded ? e.postAwardCount : 0,
					prevIsFullyLoaded: e.isFullyLoaded,
					prevPostId: e.postId
				});
			class H extends i.Component {
				constructor(e) {
					super(e), this.state = G(e)
				}
				static getDerivedStateFromProps(e, t) {
					return t.prevPostId !== e.postId || !t.prevIsFullyLoaded && e.isFullyLoaded ? G(e) : null
				}
				render() {
					const {
						initialPostAwardCount: e,
						initialCommentAwardIds: t
					} = this.state, {
						postAwardCount: s,
						commentAwardIds: n,
						className: a,
						isFullyLoaded: r
					} = this.props;
					if (!r) return d.a.createElement(V, {
						className: a,
						count: 0
					});
					const o = Math.max(s, e + n.length - t.length),
						c = n.length - 1,
						i = n[c],
						l = n.length !== t.length;
					return d.a.createElement(V, {
						awardId: i,
						className: a,
						count: o,
						isAnimated: l,
						key: c
					})
				}
			}
			var W = K(H),
				q = s("./src/reddit/components/CommentsChat/MessageInput/index.m.less"),
				J = s.n(q);
			const X = {},
				z = 1e3,
				Y = "chat_submission_from_rte",
				Z = h.a.form("Form", J.a),
				Q = h.a.wrapped(O.d, "ChatButton", J.a),
				$ = h.a.div("CloseIconWrap", J.a),
				ee = h.a.div("Reply", J.a),
				te = h.a.div("ReplyAuthor", J.a),
				se = h.a.div("ReplyComment", J.a),
				ne = h.a.wrapped(j.a, "RichTextEditor", J.a),
				ae = h.a.wrapped(f.a, "SmallChatUserIcon", J.a),
				re = Object(l.b)(() => Object(u.c)({
					draft: S.i,
					errorMsgs: S.L,
					hasError: S.w,
					liveStreamingChatCharacterLimit: T.a,
					pending: (e, t) => e.comments.submit.pending[t.draftKey],
					post: L.O
				}), (e, t) => {
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
							s && n ? await e(Object(b.eb)({
								id: n.id,
								commentsPageKey: a,
								depth: 0,
								draftKey: r,
								formData: t
							})) : l ? e(Object(b.jb)({
								commentsPageKey: a,
								draftKey: r,
								parentCommentDepth: l.depth,
								parentCommentId: l.id,
								formData: t,
								editorMode: c
							})) : await e(Object(b.lb)(o, a, r, t, c, !0, i)), d && d()
						},
						handleGiveAward: t => e(Object(_.d)({
							correlationId: t,
							thingId: o
						})),
						onCancelEdit: () => n && e(Object(b.U)({
							commentId: n.id,
							commentsPageKey: a
						})),
						onLivestreamingChatMessageEdit: () => e(Object(g.a)()),
						closeReply: () => c && e(Object(b.O)({
							parentCommentId: c.id,
							commentsPageKey: a
						}))
					}
				});
			class oe extends d.a.Component {
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
						this.props.isLivestreaming && this.passChangeToLivestreaming(), this.props.onFocusMessageInput && this.props.onFocusMessageInput()
					}, this.passChangeToLivestreaming = c()(() => this.props.onLivestreamingChatMessageEdit(), z, {
						leading: !1,
						trailing: !0
					}), this.onClickGiveAward = async e => {
						e.stopPropagation();
						const {
							handleGiveAward: t,
							isLivestreaming: n,
							postId: a,
							sendEvent: r
						} = this.props;
						t(Object(E.d)(E.a.GildingFlow, !0));
						const {
							clickGildEvent: o,
							clickRpanGiveAward: c
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						r((n ? c : o)(a))
					}, this.handleCloseReply = e => {
						e.preventDefault(), this.props.closeReply()
					}, this.handleSubmit = e => {
						e.preventDefault(), this.onSubmit()
					}, this.onSubmit = () => {
						if (this.canSubmit()) {
							const e = {
								commentMode: N.h.RICH_TEXT,
								draftType: p.c.replyToComment,
								rteState: this.state.rteState,
								hasFocus: !0,
								text: ""
							};
							this.cleanInputForm(), this.props.dispatchSubmit(e, N.h.RICH_TEXT, this.props.replyComment)
						}
						this.props.isLivestreaming && this.props.sendEvent(Object(w.t)(this.props.postId))
					}, this.canSubmit = () => Boolean(!this.props.pending && this.state.hasChanged), this.state = {
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
						liveStreamingChatCharacterLimit: a,
						pending: o,
						post: c,
						postId: i,
						replyComment: l
					} = this.props, u = s ? n.fbt._("Send message ({characterLimit} character limit)", [n.fbt._param("characterLimit", (a || 200).toLocaleString())], {
						hk: "RIcb6"
					}) : n.fbt._("Send a message (use the Enter key)", null, {
						hk: "3yojgj"
					}), h = c.isGildable && s && !t, p = s;
					return d.a.createElement("div", {
						className: Object(m.a)(J.a.FormWrapper, {
							[J.a.LivestreamingWrapper]: s
						})
					}, !t && l && d.a.createElement(ee, {
						className: Object(m.a)({
							[J.a.isLivestreaming]: s
						})
					}, d.a.createElement(se, {
						onClick: this.handleCloseReply
					}, d.a.createElement(te, null, n.fbt._("Replying to u/ {username}:", [n.fbt._param("username", l.author)], {
						hk: "2YZre5"
					})), d.a.createElement(v.a, {
						className: J.a.RichTextJson,
						key: "rich-text-".concat(l.id),
						content: Object(I.a)(l),
						rtJsonElementProps: X
					}), d.a.createElement($, null, d.a.createElement(k.a, null)))), d.a.createElement("div", {
						className: J.a.inputLine
					}, d.a.createElement(Z, {
						className: Object(m.a)({
							[J.a.Editing]: t
						}),
						onSubmit: this.handleSubmit,
						onReset: this.handleCancel
					}, d.a.createElement(ce, {
						isEditing: !!t,
						isLivestreaming: !!s
					}), d.a.createElement(ne, {
						className: Object(m.a)(J.a.RichTextEditor, {
							[J.a.Livestreaming]: s && !t,
							[J.a.Editing]: !s && t
						}),
						focusableContentRTEClassName: Object(m.a)({
							[J.a.LivestreamingFocusableContent]: s && !t
						}),
						dataTestId: Y,
						editorType: y.a.Comment,
						initialMinHeight: 20,
						initialHeight: s ? 20 : void 0,
						rteState: this.state.rteState,
						rteRef: this.setRTEComponentRef,
						onChange: this.handleChange,
						onFocus: this.handleFocus,
						onSubmit: this.onSubmit,
						placeholderText: u,
						readOnly: o,
						showSubmitButton: p,
						submitButtonClassName: J.a.insetSubmitButton,
						submitOnEnter: !0,
						trackToolbarClick: r.a,
						hideToolbar: !0,
						noBorder: !0,
						isChatPost: !0
					}), t && d.a.createElement(Q, {
						className: Object(m.a)(J.a.ChatButton, {
							[J.a.LivestreamingResetButton]: s
						}),
						type: "reset"
					}, d.a.createElement(k.a, null)), !p && d.a.createElement(Q, {
						className: Object(m.a)(J.a.ChatButton, {
							[J.a.LivestreamingChatButton]: s && !t,
							[J.a.LivestreamingResetButton]: s && t
						}),
						type: "submit",
						disabled: !this.canSubmit(),
						"aria-label": n.fbt._("send a message", null, {
							hk: "4bL65Y"
						})
					}, d.a.createElement(A.a, null))), h && d.a.createElement(Q, {
						className: Object(m.a)(J.a.ChatButton, {
							[J.a.LivestreamingChatButton]: s,
							[J.a.leftPad]: !p
						}),
						"aria-label": n.fbt._("give award", null, {
							hk: "1nXRWY"
						}),
						onClick: this.onClickGiveAward
					}, d.a.createElement(W, {
						postId: i
					}))), this.state.showError && Object(C.c)(e))
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
				}) : d.a.createElement(f.a, {
					height: 25,
					width: 25
				})
			};
			t.default = re(oe)
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
			s.d(t, "a", (function() {
				return y
			})), s.d(t, "c", (function() {
				return w
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/lodash/uniqueId.js"),
				r = s.n(a),
				o = s("./node_modules/raf/index.js"),
				c = s.n(o),
				i = s("./node_modules/react/index.js"),
				d = s.n(i),
				l = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/classNames/index.ts"),
				h = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/selectors/activeModalId.ts"),
				b = s("./src/higherOrderComponents/asModal/index.tsx"),
				_ = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/layout/row/Inline/index.tsx"),
				f = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				j = s.n(f);
			var x = Object(b.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return d.a.createElement("div", {
						className: j.a.wrapper
					}, d.a.createElement(g.a, {
						className: j.a.titleRow
					}, s), d.a.createElement("div", {
						className: j.a.detailsContainer
					}, t), d.a.createElement(g.a, {
						className: j.a.buttonRow
					}, d.a.createElement(_.i, {
						className: j.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				v = s("./src/reddit/controls/ErrorText/index.m.less"),
				O = s.n(v);
			const C = Object(u.c)({
				activeModalId: p.a
			});
			class E extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: "ErrorTextModal--".concat(r()())
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
						activeModalId: t,
						className: s,
						errorModalBody: a,
						errorModalTitle: r = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: o = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: c,
						textHasOverflowed: i
					} = this.state;
					return d.a.createElement("div", {
						className: Object(m.a)(O.a.wrapper, s)
					}, d.a.createElement("span", {
						className: O.a.description,
						ref: this.spanRef
					}, e), i && d.a.createElement("span", {
						className: O.a.moreText,
						onClick: this.toggleModal
					}, o), t === c && d.a.createElement(x, {
						onConfirmed: this.toggleModal,
						title: r
					}, a || e))
				}
			}
			const I = Object(l.b)(C, e => ({
					toggleErrorTextModal: t => e(Object(h.i)(t))
				}))(E),
				y = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: n,
						fallbackMessage: a,
						messages: r = []
					} = e, o = r.length ? r : a ? [a] : [];
					return o.length ? d.a.createElement("div", {
						className: t
					}, o.map((e, t) => d.a.createElement(I, {
						className: s,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				w = e => d.a.createElement(y, {
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
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "B", (function() {
				return l
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "g", (function() {
				return m
			})), s.d(t, "x", (function() {
				return h
			})), s.d(t, "u", (function() {
				return p
			})), s.d(t, "y", (function() {
				return b
			})), s.d(t, "w", (function() {
				return _
			})), s.d(t, "v", (function() {
				return g
			})), s.d(t, "p", (function() {
				return f
			})), s.d(t, "q", (function() {
				return j
			})), s.d(t, "m", (function() {
				return x
			})), s.d(t, "k", (function() {
				return v
			})), s.d(t, "l", (function() {
				return O
			})), s.d(t, "j", (function() {
				return C
			})), s.d(t, "t", (function() {
				return E
			})), s.d(t, "n", (function() {
				return I
			})), s.d(t, "s", (function() {
				return y
			})), s.d(t, "A", (function() {
				return w
			})), s.d(t, "o", (function() {
				return k
			})), s.d(t, "b", (function() {
				return A
			})), s.d(t, "c", (function() {
				return N
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "r", (function() {
				return L
			})), s.d(t, "z", (function() {
				return T
			})), s.d(t, "e", (function() {
				return F
			})), s.d(t, "h", (function() {
				return R
			})), s.d(t, "i", (function() {
				return D
			}));
			var n, a = s("./src/reddit/constants/chat.ts"),
				r = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(n || (n = {}));
			const c = (e, t) => {
					if (t) {
						const s = o.media(e, t.post.id),
							n = o.post(e, t.post.id),
							a = o.subreddit(e);
						if (t.post.authorInfo && n && (n.authorId = t.post.authorInfo.id), s) {
							s.streamPublicId = t.stream.stream_id, s.id = t.stream.stream_id;
							const n = Object(r.j)(e, {
								streamIdFromPath: t.post.id
							});
							n === r.a.LIVE ? s.type = "stream_live" : n === r.a.VOD ? s.type = "stream_vod" : n === r.a.UNAVAILABLE && (s.type = "stream_unavailable")
						}
						return {
							post: n,
							media: s,
							subreddit: a
						}
					}
					return {
						subreddit: o.subreddit(e)
					}
				},
				i = (e, t, s) => {
					if (!t || !s) return;
					const n = Object(r.j)(e, {
							streamIdFromPath: t.post.id
						}),
						o = t.chat_disabled || s.chatState === a.f.None;
					return {
						id: s.id,
						sessionDurationMs: s.sessionDurationMs,
						watchDurationMs: s.watchDurationMs,
						heartbeatDurationMs: s.heartbeatDurationMs,
						isLive: n === r.a.LIVE,
						playheadOffsetMs: s.playheadOffsetMs,
						timestampMs: s.timestampMs,
						startTimeMs: s.startTimeMs,
						volume: s.volume,
						chatState: o ? a.f.None : a.f.Compact,
						scrubbingStartMs: s.scrubbingStartMs,
						scrubbingEndMs: s.scrubbingEndMs,
						playerType: s.playerType
					}
				},
				d = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				l = () => e => Object.assign({
					source: "stream_du",
					action: "view",
					noun: "stream_du"
				}, c(e)),
				u = () => e => Object.assign({
					source: "stream_du",
					action: "click",
					noun: "show_less"
				}, c(e)),
				m = (e, t) => s => Object.assign(Object.assign({
					source: "stream_du",
					action: "click",
					noun: "enlarge"
				}, c(s, e)), {
					actionInfo: o.actionInfo(s, {
						position: t || 0
					})
				}),
				h = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "fail",
					noun: "stream",
					playback: i(s, e, t)
				}, d(s)), e && Object.assign({}, c(s, e))),
				p = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: i(s, e, t)
				}, d(s)), c(s, e)),
				b = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "play",
					noun: "stream",
					playback: i(s, e, t)
				}, d(s)), c(s, e)),
				_ = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "complete",
					noun: "stream",
					playback: i(s, e, t)
				}, d(s)), c(s, e)),
				g = (e, t, s) => n => Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: i(n, t, s)
				}, d(n)), c(n, t)),
				f = (e, t, s, n) => a => Object.assign(Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: i(a, t, s)
				}, d(a)), c(a, t)), {
					actionInfo: o.actionInfo(a, {
						referralId: n
					})
				}),
				j = (e, t, s) => n => Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: i(n, t, s)
				}, d(n)), c(n, t)),
				x = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: i(s, e, t)
				}, d(s)), c(s, e)),
				v = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: i(s, e, t)
				}, d(s)), c(s, e)),
				O = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: i(s, e, t)
				}, d(s)), c(s, e)),
				C = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: i(s, e, t)
				}, c(s, e)),
				E = e => t => {
					const s = Object(r.l)(t, e);
					return Object.assign({
						source: "stream_chat",
						action: "click",
						noun: "send_chat"
					}, c(t, s))
				},
				I = (e, t, s) => n => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: i(n, t, s)
				}, c(n, t)),
				y = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: i(s, e, t)
				}, d(s)),
				w = e => t => Object.assign({
					source: "post",
					action: "view",
					noun: "post",
					profile: o.profile(t),
					screen: o.screen(t)
				}, c(t, e)),
				k = e => e => {
					const t = c(e);
					return Object.assign({
						source: "post",
						action: "consume",
						noun: "post",
						profile: o.profile(e),
						screen: o.screen(e)
					}, t)
				},
				A = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: i(s, e, t)
				}, c(s, e)),
				N = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: i(s, e, t)
				}, c(s, e)),
				S = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: i(s, e, t)
				}, c(s, e)),
				L = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: i(s, e, t)
				}, c(s, e)),
				T = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: i(s, e, t)
				}, c(s, e)),
				F = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: i(s, e, t)
				}, c(s, e)),
				R = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "swipe",
					noun: "next",
					playback: i(s, e, t)
				}, c(s, e)), d(s)),
				D = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "swipe",
					noun: "previous",
					playback: i(s, e, t)
				}, c(s, e)), d(s))
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
				a = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/Gift/index.m.less"),
				c = s.n(o);
			const i = s("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: "".concat(Object(r.b)("gift"), " ").concat(e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, a.a.createElement(r.a, null, e.desc)), "GiftIcon", c.a);
			t.a = i
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
			s.d(t, "l", (function() {
				return E
			})), s.d(t, "m", (function() {
				return w
			})), s.d(t, "n", (function() {
				return k
			})), s.d(t, "i", (function() {
				return S
			})), s.d(t, "d", (function() {
				return R
			})), s.d(t, "h", (function() {
				return D
			})), s.d(t, "k", (function() {
				return M
			})), s.d(t, "c", (function() {
				return P
			})), s.d(t, "f", (function() {
				return B
			})), s.d(t, "a", (function() {
				return K
			})), s.d(t, "j", (function() {
				return G
			})), s.d(t, "b", (function() {
				return H
			})), s.d(t, "e", (function() {
				return W
			})), s.d(t, "g", (function() {
				return q
			}));
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
			const b = e => e.publicAccessNetwork.models,
				_ = e => e.publicAccessNetwork.reports.reported,
				g = e => e.publicAccessNetwork.history,
				f = e => e.publicAccessNetwork.history.cursor,
				j = e => e.publicAccessNetwork.history.visitOrder,
				x = e => e.publicAccessNetwork.hlsStreams,
				v = Object(n.a)(x, e => e.ended),
				O = Object(n.a)(x, e => e.removed),
				C = Object(n.a)(b, v, O, (e, t, s) => {
					const n = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const n = s.stream.state,
							a = U(n, c.a.ENDED) ? c.a.ENDED : n,
							r = s.stream.vod_accessible;
						return a === n && !0 === r ? e : Object.assign(Object.assign({}, e), {
							[t]: Object.assign(Object.assign({}, s), {
								stream: Object.assign(Object.assign({}, s.stream), {
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
							a = U(n, c.a.ENDED) ? c.a.ENDED : n,
							r = s.stream.vod_accessible;
						return a === n && !1 === r ? e : Object.assign(Object.assign({}, e), {
							[t]: Object.assign(Object.assign({}, s), {
								stream: Object.assign(Object.assign({}, s.stream), {
									state: a,
									vod_accessible: !1
								})
							})
						})
					}, n)
				}),
				E = (e, t) => {
					return C(e)[Object(o.h)(t)]
				},
				I = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, (e, t) => h(t.listingName)(e, t), C, _, i.h, d.e, (e, t, s, n, a, i) => {
					if (i) {
						const r = [];
						if (e) {
							const t = Object(o.h)(e);
							s[t] && r.push(t)
						}
						const i = r.concat(t),
							d = [...new Set(i)],
							l = new Set([...n, ...a]);
						return d.filter(e => {
							const t = s[e];
							return !l.has(e) && !t.post.isHidden && t.stream.state !== c.a.KILLED && t.stream.state !== c.a.PURGED
						})
					}
					const d = new Set([...n, ...a]);
					return Object.keys(s).filter(e => !d.has(e)).map(e => s[e]).filter(e => e.rank !== r.m).filter(e => !e.post.isHidden).filter(e => e.stream.state !== c.a.KILLED && e.stream.state !== c.a.PURGED).map(e => e.post.id)
				}),
				y = Object(n.a)((e, t) => {
					let {
						count: s
					} = t;
					return s
				}, C, (e, t) => {
					let {
						listingName: s,
						streamIdFromPath: n
					} = t;
					return I(e, {
						listingName: s,
						streamIdFromPath: n
					})
				}, (e, t, s) => {
					const n = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? n.slice(0, e) : n
				}),
				w = Object(n.a)(C, y, (e, t) => {
					const s = t[0];
					if (s) return e[s]
				}),
				k = Object(n.a)(C, y, (e, t) => t.map(t => e[t]).filter(e => !!e && e.stream.state === c.a.IS_LIVE).reduce((e, t) => e + t.continuous_watchers, 0)),
				A = Object(n.a)(j, (e, t) => {
					let {
						related: s,
						streamIdFromPath: n,
						subreddit: a
					} = t;
					return y(e, {
						listingName: s || a,
						streamIdFromPath: n
					})
				}, (e, t) => {
					const s = new Set(e),
						n = t.filter(e => !s.has(e));
					if (n.length) return n[0]
				}),
				N = Object(n.a)((e, t) => {
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
					return y(e, {
						listingName: s || a,
						streamIdFromPath: n
					})
				}, g, (e, t, s, n) => {
					if (!s.length) return;
					const a = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						r = a.find(e => e.stream.state === c.a.IS_LIVE);
					if (r) return r.post.id;
					const o = a.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (n.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return o ? o.post.id : void 0
				}),
				S = Object(a.a)(Object(n.a)(N, C, (e, t) => e ? t[e] : void 0)),
				L = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? Object(o.h)(s) : void 0
				}, N, _, i.h, (e, t) => {
					let {
						related: s,
						streamIdFromPath: n,
						subreddit: a
					} = t;
					return y(e, {
						listingName: s || a,
						streamIdFromPath: n
					})
				}, (e, t, s, n, a) => !e || s.includes(e) || n.includes(e) ? t || a[0] : e),
				T = Object(n.a)(f, j, A, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				F = Object(n.a)(f, j, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				R = Object(a.a)(Object(n.a)(L, C, (e, t) => e ? t[e] : void 0)),
				D = Object(a.a)(Object(n.a)(T, C, (e, t) => e ? t[e] : void 0)),
				M = Object(a.a)(Object(n.a)(F, C, (e, t) => e ? t[e] : void 0)),
				P = (Object(a.a)(Object(n.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, C, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => Object.assign(Object.assign({}, t[s]), {
					preloadedPreviewUrl: e[s]
				})))), Object(n.a)(L, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				B = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? E(e, s) : void 0
				}, e => !e || e.chat_disabled);

			function U(e, t) {
				const s = {
					[c.a.NOT_STARTED]: 0,
					[c.a.PUBLISHED]: 1,
					[c.a.IS_LIVE]: 2,
					[c.a.DISCONNECTED]: 2,
					[c.a.ENDED]: 3,
					[c.a.KILLED]: 4,
					[c.a.PURGED]: 4
				};
				return s[t] >= s[e]
			}
			const V = Object(n.a)(L, g, (e, t) => e && t.timestamps[e] || 0);
			var K;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(K || (K = {}));
			const G = Object(n.a)(L, C, p.b, (e, t, s) => {
					if (s) return K.INTRO;
					const n = e && t[e];
					if (!n) return K.UNAVAILABLE;
					const a = n.stream.state;
					return a === c.a.IS_LIVE || a === c.a.DISCONNECTED ? K.LIVE : a === c.a.ENDED && n.stream.vod_accessible ? K.VOD : K.UNAVAILABLE
				}),
				H = Object(n.a)(R, G, p.b, l.b, l.o, (e, t, s, n, a) => s ? n : e ? t === K.LIVE || t === K.VOD ? e.stream.hls_url : a : void 0),
				W = Object(n.a)(R, G, V, (e, t, s) => e ? t === K.LIVE ? e.broadcast_time : t === K.VOD && s < e.broadcast_time ? s : 0 : 0),
				q = (e, t) => {
					const s = b(e);
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
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				r = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const o = e => e.publicAccessNetwork.theaterSettings,
				c = Object(n.a)(o, r.n, (e, t) => t && !e.isIntroFinished),
				i = Object(n.a)(o, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + a.a > Date.now()
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatMessageInput.1da04b343d7a19a1bfbf.js.map