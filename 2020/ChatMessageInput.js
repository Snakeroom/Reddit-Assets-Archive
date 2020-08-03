// https://www.redditstatic.com/desktop2x/ChatMessageInput.8072d8fcf2774abcee46.js
// Retrieved at 8/3/2020, 6:10:06 PM by Reddit Dataminer v1.0.0
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
						i = t(o);
					if (null != i && (void 0 === c ? i == i && !n(i) : s(i, c))) var c = i,
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
				for (var o = -1, i = n(s((t - e) / (a || 1)), 0), c = Array(i); i--;) c[r ? i : ++o] = e, e += a;
				return c
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
				i = Math.max;
			e.exports = function(e, t, s) {
				t = (s ? a(e, t, s) : void 0 === t) ? 1 : i(r(t), 0);
				var c = null == e ? 0 : e.length;
				if (!c || t < 1) return [];
				for (var d = 0, l = 0, u = Array(o(c / t)); d < c;) u[l++] = n(e, d, d += t);
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
				i = s("./node_modules/lodash/values.js"),
				c = Math.max;
			e.exports = function(e, t, s, d) {
				e = a(e) ? e : i(e), s = s && !d ? o(s) : 0;
				var l = e.length;
				return s < 0 && (s = c(l + s, 0)), r(e) ? s <= l && e.indexOf(t, s) > -1 : !!l && n(e, t, s) > -1
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
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var c = i(e) ? n : o,
					d = arguments.length < 3;
				return c(e, r(t, 4), s, d, a)
			}
		},
		"./node_modules/lodash/reduceRight.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayReduceRight.js"),
				a = s("./node_modules/lodash/_baseEachRight.js"),
				r = s("./node_modules/lodash/_baseIteratee.js"),
				o = s("./node_modules/lodash/_baseReduce.js"),
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var c = i(e) ? n : o,
					d = arguments.length < 3;
				return c(e, r(t, 4), s, d, a)
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
				i = s("./node_modules/lodash/toString.js"),
				c = /\s+$/;
			e.exports = function(e, t, s) {
				if ((e = i(e)) && (s || void 0 === t)) return e.replace(c, "");
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
				for (var i = Object.prototype.hasOwnProperty.bind(t), c = 0; c < r.length; c++) {
					var d = r[c];
					if (!i(d)) return !1;
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
				return c
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			}));
			var n = s("./node_modules/uuid/v4.js"),
				a = s.n(n),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const i = Object(r.a)(o.A),
				c = e => async t => {
					t(i(e))
				}, d = () => async e => {
					e(i({
						lastChatActivityUtcTs: Date.now()
					}))
				}, l = () => async e => {
					e(i({
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
				i = s.n(o),
				c = s("./src/lib/constants/index.ts"),
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
				} = n.a, a = (e => e.replace(c.yb.Account + "_", ""))(t), {
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
				return i.a.createElement(h, {
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
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx"),
				d = s("./src/reddit/icons/svgs/Redditor/index.tsx"),
				l = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				u = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				m = s.n(u);
			const h = i.a.img("Userpic", m.a),
				p = Object(o.c)({
					account: e => e.user.account
				}),
				b = Object(r.b)(p);
			t.a = i.a.wrapped(b(e => {
				let {
					account: t,
					className: s,
					height: n,
					isLivestreaming: r,
					trash: o,
					userId: i,
					width: u
				} = e;
				const p = r ? 36 : 20,
					b = {
						height: n || p,
						width: u || p,
						minWidth: u || p
					};
				return o ? a.a.createElement("div", {
					className: s,
					style: b
				}, a.a.createElement(l.a, {
					className: m.a.TrashIcon
				})) : i ? a.a.createElement("div", {
					className: s,
					style: b
				}, t && t.accountIcon && t.id === i ? a.a.createElement(h, {
					src: t.accountIcon,
					alt: "user icon"
				}) : a.a.createElement(c.a, {
					userId: i
				})) : a.a.createElement("div", {
					className: s,
					style: b
				}, t && t.accountIcon ? a.a.createElement(h, {
					src: t.accountIcon,
					alt: "user icon"
				}) : a.a.createElement(d.a, {
					className: m.a.ProfileIcon
				}))
			}), "ChatIcon", m.a)
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
				i = s.n(o),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/classNames/index.ts"),
				h = s("./src/lib/lessComponent.tsx"),
				p = s("./src/reddit/models/PostDraft/index.ts"),
				b = s("./src/reddit/actions/comment/index.ts"),
				g = s("./src/reddit/actions/gold/modals.ts"),
				_ = s("./src/reddit/actions/publicAccessNetwork/theaterSettings.ts"),
				f = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				x = s("./src/reddit/components/RichTextEditor/index.tsx"),
				j = s("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				C = s("./src/reddit/components/RichTextJsonChatReply/index.tsx"),
				v = s("./src/reddit/controls/Button/index.tsx"),
				E = s("./src/reddit/controls/ErrorText/index.tsx"),
				O = s("./src/reddit/helpers/correlationIdTracker.ts"),
				I = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				y = s("./src/reddit/helpers/richTextEditor/index.ts"),
				w = s("./src/reddit/helpers/trackers/rpan.ts"),
				k = s("./src/reddit/icons/svgs/Close/index.tsx"),
				A = s("./src/reddit/icons/svgs/Send/index.tsx"),
				N = s("./src/reddit/models/PostCreationForm/index.ts"),
				L = s("./src/reddit/selectors/comments.ts"),
				S = s("./src/reddit/selectors/posts.ts"),
				T = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				M = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/makeCommentsPageKey/index.ts")),
				R = s("./src/reddit/selectors/experiments/goldRpanLivePreview.ts"),
				F = s("./src/reddit/helpers/awards/getIconForSize.ts"),
				D = s("./src/reddit/selectors/communityAwards.ts"),
				P = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				B = s("./src/reddit/components/CommentsChat/Comment/AwardCountSpectacle/AwardCountAnimation/index.m.less"),
				U = s.n(B);
			class V extends c.Component {
				render() {
					const {
						award: e,
						className: t,
						count: s,
						isAnimated: n
					} = this.props, a = e ? Object(F.a)(e, 64) : void 0;
					return d.a.createElement("div", {
						className: Object(m.a)(U.a.container, t, {
							[U.a.isAnimated]: n
						})
					}, d.a.createElement(P.a, {
						className: U.a.gildIcon
					}), n && a && d.a.createElement("div", {
						className: U.a.awardingIcon,
						style: {
							backgroundImage: 'url("'.concat(a, '")')
						}
					}), s ? d.a.createElement("div", {
						className: U.a.count
					}, s) : null)
				}
			}
			var G = Object(l.b)(() => Object(u.c)({
				award: (e, t) => {
					let {
						awardId: s
					} = t;
					return s ? Object(D.a)(e, s) : void 0
				}
			}))(V);
			const W = Object(l.b)(() => Object(u.a)(e => e, (e, t) => {
					let {
						postId: s
					} = t;
					return Object(L.g)(e, {
						commentsPageKey: Object(M.a)(s)
					})
				}, S.M, (e, t) => {
					let {
						postId: s
					} = t;
					return Object(L.v)(e, {
						commentsPageKey: Object(M.a)(s)
					})
				}, R.a, (e, t, s, n, a) => {
					return {
						commentAwardIds: t.length ? t.reduce((t, s) => {
							const n = Object(L.n)(e, {
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
						inGoldRpanLivePreview: a,
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
			class q extends c.Component {
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
						className: a,
						isFullyLoaded: r,
						inGoldRpanLivePreview: o
					} = this.props;
					if (!r) return d.a.createElement(G, {
						className: a,
						count: 0
					});
					const i = Math.max(s, e + n.length - t.length);
					if (!o) return d.a.createElement(G, {
						className: a,
						count: i
					});
					const c = n.length - 1,
						l = n[c],
						u = n.length !== t.length;
					return d.a.createElement(G, {
						awardId: l,
						className: a,
						count: i,
						isAnimated: u,
						key: c
					})
				}
			}
			var H = W(q),
				J = s("./src/reddit/components/CommentsChat/MessageInput/index.m.less"),
				Z = s.n(J);
			const X = {},
				Y = 1e3,
				z = "chat_submission_from_rte",
				Q = h.a.form("Form", Z.a),
				$ = h.a.wrapped(v.a, "ChatButton", Z.a),
				ee = h.a.div("CloseIconWrap", Z.a),
				te = h.a.div("Reply", Z.a),
				se = h.a.div("ReplyAuthor", Z.a),
				ne = h.a.div("ReplyComment", Z.a),
				ae = h.a.wrapped(x.a, "RichTextEditor", Z.a),
				re = h.a.wrapped(f.a, "SmallChatUserIcon", Z.a),
				oe = Object(l.b)(() => Object(u.c)({
					draft: L.i,
					errorMsgs: L.I,
					hasError: L.w,
					liveStreamingChatCharacterLimit: T.a,
					pending: (e, t) => e.comments.submit.pending[t.draftKey],
					post: S.M
				}), (e, t) => {
					let {
						isEditing: s,
						comment: n,
						commentsPageKey: a,
						draftKey: r,
						postId: o,
						replyComment: i,
						isLivestreaming: c,
						scrollToBottom: d
					} = t;
					return {
						dispatchSubmit: async (t, i, l) => {
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
								editorMode: i
							})) : await e(Object(b.lb)(o, a, r, t, i, !0, c)), d && d()
						},
						handleGiveAward: t => e(Object(g.d)({
							correlationId: t,
							thingId: o
						})),
						onCancelEdit: () => n && e(Object(b.U)({
							commentId: n.id,
							commentsPageKey: a
						})),
						onLivestreamingChatMessageEdit: () => e(Object(_.a)()),
						closeReply: () => i && e(Object(b.O)({
							parentCommentId: i.id,
							commentsPageKey: a
						}))
					}
				});
			class ie extends d.a.Component {
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
					}, this.passChangeToLivestreaming = i()(() => this.props.onLivestreamingChatMessageEdit(), Y, {
						leading: !1,
						trailing: !0
					}), this.onClickGiveAward = async () => {
						const {
							handleGiveAward: e,
							isLivestreaming: t,
							postId: n,
							sendEvent: a
						} = this.props;
						e(Object(O.d)(O.a.GildingFlow, !0));
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
								commentMode: N.h.RICH_TEXT,
								draftType: p.c.replyToComment,
								rteState: this.state.rteState,
								hasFocus: !0,
								text: ""
							};
							this.cleanInputForm(), this.props.dispatchSubmit(e, N.h.RICH_TEXT, this.props.replyComment)
						}
						this.props.isLivestreaming && this.props.sendEvent(Object(w.q)(this.props.postId))
					}, this.canSubmit = () => Boolean(!this.props.pending && this.state.hasChanged), this.state = {
						hasChanged: !1,
						showError: e.hasError,
						rteState: e.isEditing && e.comment ? j.a.createInitial(e.comment.media.richtextContent) : j.a.createInitial()
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
						rteState: j.a.createInitial()
					})
				}
				render() {
					const {
						errorMsgs: e,
						isEditing: t,
						isLivestreaming: s,
						liveStreamingChatCharacterLimit: a,
						pending: o,
						post: i,
						postId: c,
						replyComment: l
					} = this.props, u = s ? n.fbt._("Send message ({characterLimit} character limit)", [n.fbt._param("characterLimit", (a || 200).toLocaleString())], {
						hk: "RIcb6"
					}) : n.fbt._("Send a message (use the Enter key)", null, {
						hk: "3yojgj"
					}), h = i.isGildable && s && !t, p = s;
					return d.a.createElement("div", {
						className: Object(m.a)(Z.a.FormWrapper, {
							[Z.a.LivestreamingWrapper]: s
						})
					}, !t && l && d.a.createElement(te, {
						className: Object(m.a)({
							[Z.a.isLivestreaming]: s
						})
					}, d.a.createElement(ne, {
						onClick: this.handleCloseReply
					}, d.a.createElement(se, null, n.fbt._("Replying to u/ {username}:", [n.fbt._param("username", l.author)], {
						hk: "2YZre5"
					})), d.a.createElement(C.a, {
						className: Z.a.RichTextJson,
						key: "rich-text-".concat(l.id),
						content: Object(I.a)(l),
						rtJsonElementProps: X
					}), d.a.createElement(ee, null, d.a.createElement(k.a, null)))), d.a.createElement("div", {
						className: Z.a.inputLine
					}, d.a.createElement(Q, {
						className: Object(m.a)({
							[Z.a.Editing]: t
						}),
						onSubmit: this.handleSubmit,
						onReset: this.handleCancel
					}, d.a.createElement(ce, {
						isEditing: !!t,
						isLivestreaming: !!s
					}), d.a.createElement(ae, {
						className: Object(m.a)(Z.a.RichTextEditor, {
							[Z.a.Livestreaming]: s && !t,
							[Z.a.Editing]: !s && t
						}),
						focusableContentRTEClassName: Object(m.a)({
							[Z.a.LivestreamingFocusableContent]: s && !t
						}),
						dataTestId: z,
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
						submitButtonClassName: Z.a.insetSubmitButton,
						submitOnEnter: !0,
						trackToolbarClick: r.a,
						hideToolbar: !0,
						noBorder: !0,
						isChatPost: !0
					}), t && d.a.createElement($, {
						className: Object(m.a)(Z.a.ChatButton, {
							[Z.a.LivestreamingResetButton]: s
						}),
						type: "reset"
					}, d.a.createElement(k.a, null)), !p && d.a.createElement($, {
						className: Object(m.a)(Z.a.ChatButton, {
							[Z.a.LivestreamingChatButton]: s && !t,
							[Z.a.LivestreamingResetButton]: s && t
						}),
						type: "submit",
						disabled: !this.canSubmit(),
						"aria-label": n.fbt._("send a message", null, {
							hk: "4bL65Y"
						})
					}, d.a.createElement(A.a, null))), h && d.a.createElement($, {
						className: Object(m.a)(Z.a.ChatButton, {
							[Z.a.LivestreamingChatButton]: s,
							[Z.a.leftPad]: !p
						}),
						"aria-label": n.fbt._("give award", null, {
							hk: "1nXRWY"
						}),
						onClick: this.onClickGiveAward
					}, d.a.createElement(H, {
						postId: c
					}))), this.state.showError && Object(E.c)(e))
				}
			}
			const ce = e => {
				let {
					isEditing: t,
					isLivestreaming: s
				} = e;
				return s ? null : t ? d.a.createElement(re, {
					height: 20,
					width: 20
				}) : d.a.createElement(f.a, {
					height: 25,
					width: 25
				})
			};
			t.default = oe(ie)
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
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./src/higherOrderComponents/asModal/index.tsx"),
				i = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = s("./src/reddit/controls/TextButton/index.tsx"),
				d = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = s("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = s.n(l);
			const m = e => e.preventDefault();
			t.a = Object(o.a)(e => r.a.createElement(i.d, null, r.a.createElement(i.h, null, r.a.createElement(d.a, null, r.a.createElement(i.p, null, e.headerText || n.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), r.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(i.b, null)))), r.a.createElement(i.k, null, r.a.createElement(i.o, {
				className: u.a.ModalText
			}, e.modalText)), r.a.createElement(i.f, null, !e.hideCancelButton && r.a.createElement(i.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !0
			}, e.cancelActionText || n.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), r.a.createElement(i.t, {
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
				i = s("./src/reddit/components/FocusableContent/index.m.less"),
				c = s.n(i);
			t.a = o.a.wrapped(e => a.a.createElement("div", {
				className: Object(r.a)(e.className, {
					[c.a.isFocused]: e.isFocused,
					[c.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", c.a)
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
				i = s("./src/reddit/components/RichTextJson/elements.tsx"),
				c = s("./src/reddit/components/RichTextJson/renderers.tsx"),
				d = s("./src/reddit/models/RichTextJson/index.ts");
			const l = e => a.a.createElement(i.f, null, e),
				u = e => {
					const t = [],
						s = e.c || [],
						n = s.length;
					for (let a = 0; a < n; a++) {
						const e = s[a];
						t.push(e.e === d.w ? e.t : Object(c.e)(e, {}, a))
					}
					return a.a.createElement(a.a.Fragment, null, t)
				},
				m = e => e.c && e.c.length ? a.a.createElement(a.a.Fragment, null, Object(c.i)(e.c, null, {})) : a.a.createElement("br", null);
			var h = s("./src/reddit/constants/elementClassNames.ts"),
				p = s("./src/reddit/components/RichTextJsonChatReply/index.m.less"),
				b = s.n(p);
			const g = s("./src/lib/lessComponent.tsx").a.div("Container", b.a),
				_ = {
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
				} = e, n = s.document, i = [], c = Object(o.b)(n), p = Object(o.c)(n);
				if (-1 !== c)
					for (let a = c; a <= p; a++) {
						const e = n[a],
							t = e && _[e.e];
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
								i.push(l(t));
								break;
							case d.k:
								i.push(u(e));
								break;
							case d.u:
								i.push(m(e))
						}
					}
				return a.a.createElement(g, {
					className: Object(r.a)(h.j, t)
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
				return w
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/lodash/uniqueId.js"),
				r = s.n(a),
				o = s("./node_modules/raf/index.js"),
				i = s.n(o),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/classNames/index.ts"),
				h = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/selectors/activeModalId.ts"),
				b = s("./src/higherOrderComponents/asModal/index.tsx"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				_ = s("./src/reddit/layout/row/Inline/index.tsx"),
				f = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				x = s.n(f);
			var j = Object(b.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return d.a.createElement("div", {
						className: x.a.wrapper
					}, d.a.createElement(_.a, {
						className: x.a.titleRow
					}, s), d.a.createElement("div", {
						className: x.a.detailsContainer
					}, t), d.a.createElement(_.a, {
						className: x.a.buttonRow
					}, d.a.createElement(g.f, {
						className: x.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				C = s("./src/reddit/controls/ErrorText/index.m.less"),
				v = s.n(C);
			const E = Object(u.c)({
				activeModalId: p.a
			});
			class O extends d.a.Component {
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
						errorModalBody: a,
						errorModalTitle: r = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: o = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: i,
						textHasOverflowed: c
					} = this.state;
					return d.a.createElement("div", {
						className: Object(m.a)(v.a.wrapper, s)
					}, d.a.createElement("span", {
						className: v.a.description,
						ref: this.spanRef
					}, e), c && d.a.createElement("span", {
						className: v.a.moreText,
						onClick: this.toggleModal
					}, o), t === i && d.a.createElement(j, {
						onConfirmed: this.toggleModal,
						title: r
					}, a || e))
				}
			}
			const I = Object(l.b)(E, e => ({
					toggleErrorTextModal: t => e(Object(h.i)(t))
				}))(O),
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
				return i
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
				i = e => Object(n.a)(r.a.loadingBar, o(e))
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "x", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "t", (function() {
				return p
			})), s.d(t, "r", (function() {
				return b
			})), s.d(t, "u", (function() {
				return g
			})), s.d(t, "s", (function() {
				return _
			})), s.d(t, "k", (function() {
				return f
			})), s.d(t, "l", (function() {
				return x
			})), s.d(t, "i", (function() {
				return j
			})), s.d(t, "j", (function() {
				return C
			})), s.d(t, "h", (function() {
				return v
			})), s.d(t, "q", (function() {
				return E
			})), s.d(t, "m", (function() {
				return O
			})), s.d(t, "p", (function() {
				return I
			})), s.d(t, "w", (function() {
				return y
			})), s.d(t, "n", (function() {
				return w
			})), s.d(t, "b", (function() {
				return k
			})), s.d(t, "c", (function() {
				return A
			})), s.d(t, "d", (function() {
				return N
			})), s.d(t, "o", (function() {
				return L
			})), s.d(t, "v", (function() {
				return S
			})), s.d(t, "e", (function() {
				return T
			}));
			var n, a = s("./src/reddit/constants/chat.ts"),
				r = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				o = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(n || (n = {}));
			const c = (e, t) => {
					if (t) {
						const s = i.media(e, t.post.id),
							n = i.post(e, t.post.id),
							a = i.subreddit(e);
						if (t.post.authorInfo && n && (n.authorId = t.post.authorInfo.id), s) {
							s.streamPublicId = t.stream.stream_id, s.id = t.stream.stream_id;
							const n = Object(o.h)(e, {
								streamIdFromPath: t.post.id
							});
							n === o.a.LIVE ? s.type = "stream_live" : n === o.a.VOD ? s.type = "stream_vod" : n === o.a.UNAVAILABLE && (s.type = "stream_unavailable")
						}
						return {
							post: n,
							media: s,
							subreddit: a
						}
					}
					return {
						subreddit: i.subreddit(e)
					}
				},
				d = (e, t, s) => {
					if (!t || !s) return;
					const n = Object(o.h)(e, {
							streamIdFromPath: t.post.id
						}),
						r = t.chat_disabled || s.chatState === a.f.None;
					return {
						id: s.id,
						sessionDurationMs: s.sessionDurationMs,
						watchDurationMs: s.watchDurationMs,
						heartbeatDurationMs: s.heartbeatDurationMs,
						isLive: n === o.a.LIVE,
						playheadOffsetMs: s.playheadOffsetMs,
						timestampMs: s.timestampMs,
						startTimeMs: s.startTimeMs,
						volume: s.volume,
						chatState: r ? a.f.None : a.f.Compact,
						scrubbingStartMs: s.scrubbingStartMs,
						scrubbingEndMs: s.scrubbingEndMs,
						playerType: s.playerType
					}
				},
				l = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				u = () => e => Object.assign({
					source: "stream_du",
					action: "view",
					noun: "stream_du"
				}, c(e)),
				m = () => e => Object.assign({
					source: "stream_du",
					action: "click",
					noun: "show_less"
				}, c(e)),
				h = (e, t) => s => Object.assign({
					source: "stream_du",
					action: "click",
					noun: "rpan",
					actionInfo: {
						position: t || 0
					}
				}, c(s, e)),
				p = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "fail",
					noun: "stream",
					playback: d(s, e, t)
				}, l(s)), e && Object.assign({}, c(s, e))),
				b = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: d(s, e, t)
				}, l(s)), c(s, e)),
				g = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "play",
					noun: "stream",
					playback: d(s, e, t)
				}, l(s)), c(s, e)),
				_ = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "complete",
					noun: "stream",
					playback: d(s, e, t)
				}, l(s)), c(s, e)),
				f = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: "share_video",
					playback: d(s, e, t)
				}, l(s)), c(s, e)),
				x = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: d(s, e, t)
				}, l(s)), c(s, e)),
				j = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: d(s, e, t)
				}, l(s)), c(s, e)),
				C = (e, t) => s => Object.assign(Object.assign({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: d(s, e, t)
				}, l(s)), c(s, e)),
				v = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: d(s, e, t)
				}, c(s, e)),
				E = e => t => {
					const s = Object(o.k)(t, e);
					return Object.assign({
						source: "stream_chat",
						action: "click",
						noun: "send_chat"
					}, c(t, s))
				},
				O = (e, t, s) => n => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: d(n, t, s)
				}, c(n, t)),
				I = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: d(s, e, t)
				}, l(s)),
				y = e => t => Object.assign({
					source: "post",
					action: "view",
					noun: "post",
					profile: i.profile(t),
					screen: i.screen(t)
				}, c(t, e)),
				w = e => e => {
					const t = c(e);
					return !Object(r.f)(e) && t.subreddit && (t.subreddit.id = void 0), Object.assign({
						source: "post",
						action: "consume",
						noun: "post",
						profile: i.profile(e),
						screen: i.screen(e)
					}, t)
				},
				k = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: d(s, e, t)
				}, c(s, e)),
				A = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: d(s, e, t)
				}, c(s, e)),
				N = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: d(s, e, t)
				}, c(s, e)),
				L = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: d(s, e, t)
				}, c(s, e)),
				S = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: d(s, e, t)
				}, c(s, e)),
				T = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: d(s, e, t)
				}, c(s, e))
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
				i = s.n(o);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: "".concat(Object(r.b)("gift"), " ").concat(e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, a.a.createElement(r.a, null, e.desc)), "GiftIcon", i.a);
			t.a = c
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
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = s.n(o);
			const c = e => a.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), a.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return E
			})), s.d(t, "l", (function() {
				return y
			})), s.d(t, "m", (function() {
				return w
			})), s.d(t, "g", (function() {
				return N
			})), s.d(t, "c", (function() {
				return M
			})), s.d(t, "f", (function() {
				return R
			})), s.d(t, "j", (function() {
				return F
			})), s.d(t, "i", (function() {
				return D
			})), s.d(t, "e", (function() {
				return P
			})), s.d(t, "a", (function() {
				return V
			})), s.d(t, "h", (function() {
				return G
			})), s.d(t, "b", (function() {
				return W
			})), s.d(t, "d", (function() {
				return K
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				i = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				c = s("./src/reddit/selectors/posts.ts"),
				d = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				l = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				u = s("./node_modules/lodash/memoize.js");
			const m = e => e.publicAccessNetwork.listings,
				h = s.n(u)()(e => Object(a.a)(Object(n.a)(m, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var p = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const b = e => e.publicAccessNetwork.reports.reported,
				g = e => e.publicAccessNetwork.history,
				_ = e => e.publicAccessNetwork.history.cursor,
				f = e => e.publicAccessNetwork.history.visitOrder,
				x = e => e.publicAccessNetwork.hlsStreams,
				j = Object(n.a)(x, e => e.ended),
				C = Object(n.a)(x, e => e.removed),
				v = Object(n.a)(e => e.publicAccessNetwork.models, j, C, (e, t, s) => {
					const n = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const n = s.stream.state,
							a = B(n, i.a.ENDED) ? i.a.ENDED : n,
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
							a = B(n, i.a.ENDED) ? i.a.ENDED : n,
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
					return v(e)[Object(o.g)(t)]
				},
				O = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, (e, t) => h(t.listingName)(e, t), v, b, c.h, d.c, (e, t, s, n, a, c) => {
					if (c) {
						const r = [];
						if (e) {
							const t = Object(o.g)(e);
							s[t] && r.push(t)
						}
						const c = r.concat(t),
							d = [...new Set(c)],
							l = new Set([...n, ...a]);
						return d.filter(e => {
							const t = s[e];
							return !l.has(e) && !t.post.isHidden && t.stream.state !== i.a.KILLED && t.stream.state !== i.a.PURGED
						})
					}
					const d = new Set([...n, ...a]);
					return Object.keys(s).filter(e => !d.has(e)).map(e => s[e]).filter(e => e.rank !== r.m).filter(e => !e.post.isHidden).filter(e => e.stream.state !== i.a.KILLED && e.stream.state !== i.a.PURGED).map(e => e.post.id)
				}),
				I = Object(n.a)((e, t) => {
					let {
						count: s
					} = t;
					return s
				}, v, (e, t) => {
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
				y = Object(n.a)(v, I, (e, t) => {
					const s = t[0];
					if (s) return e[s]
				}),
				w = Object(n.a)(v, I, (e, t) => t.map(t => e[t]).filter(e => !!e && e.stream.state === i.a.IS_LIVE).reduce((e, t) => e + t.continuous_watchers, 0)),
				k = Object(n.a)(f, (e, t) => {
					let {
						related: s,
						streamIdFromPath: n,
						subreddit: a
					} = t;
					return I(e, {
						listingName: s || a,
						streamIdFromPath: n
					})
				}, (e, t) => {
					const s = new Set(e),
						n = t.filter(e => !s.has(e));
					if (n.length) return n[0]
				}),
				A = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, v, (e, t) => {
					let {
						related: s,
						streamIdFromPath: n,
						subreddit: a
					} = t;
					return I(e, {
						listingName: s || a,
						streamIdFromPath: n
					})
				}, g, (e, t, s, n) => {
					if (!s.length) return;
					const a = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						r = a.find(e => e.stream.state === i.a.IS_LIVE);
					if (r) return r.post.id;
					const o = a.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (n.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return o ? o.post.id : void 0
				}),
				N = Object(a.a)(Object(n.a)(A, v, (e, t) => e ? t[e] : void 0)),
				L = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? Object(o.g)(s) : void 0
				}, A, b, c.h, (e, t) => {
					let {
						related: s,
						streamIdFromPath: n,
						subreddit: a
					} = t;
					return I(e, {
						listingName: s || a,
						streamIdFromPath: n
					})
				}, (e, t, s, n, a) => !e || s.includes(e) || n.includes(e) ? t || a[0] : e),
				S = Object(n.a)(_, f, k, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				T = Object(n.a)(_, f, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				M = Object(a.a)(Object(n.a)(L, v, (e, t) => e ? t[e] : void 0)),
				R = Object(a.a)(Object(n.a)(S, v, (e, t) => e ? t[e] : void 0)),
				F = Object(a.a)(Object(n.a)(T, v, (e, t) => e ? t[e] : void 0)),
				D = (Object(a.a)(Object(n.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, v, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => Object.assign(Object.assign({}, t[s]), {
					preloadedPreviewUrl: e[s]
				})))), Object(n.a)((e, t) => {
					let {
						streamId: s
					} = t;
					return s
				}, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => t[e])),
				P = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? E(e, s) : void 0
				}, e => !e || e.chat_disabled);

			function B(e, t) {
				const s = {
					[i.a.NOT_STARTED]: 0,
					[i.a.PUBLISHED]: 1,
					[i.a.IS_LIVE]: 2,
					[i.a.DISCONNECTED]: 2,
					[i.a.ENDED]: 3,
					[i.a.KILLED]: 4,
					[i.a.PURGED]: 4
				};
				return s[t] >= s[e]
			}
			const U = Object(n.a)(L, g, (e, t) => e && t.timestamps[e] || 0);
			var V;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(V || (V = {}));
			const G = Object(n.a)(L, v, p.b, (e, t, s) => {
					if (s) return V.INTRO;
					const n = e && t[e];
					if (!n) return V.UNAVAILABLE;
					const a = n.stream.state;
					return a === i.a.IS_LIVE || a === i.a.DISCONNECTED ? V.LIVE : a === i.a.ENDED && n.stream.vod_accessible ? V.VOD : V.UNAVAILABLE
				}),
				W = Object(n.a)(M, G, p.b, l.b, l.o, (e, t, s, n, a) => s ? n : e ? t === V.LIVE || t === V.VOD ? e.stream.hls_url : a : void 0),
				K = Object(n.a)(M, G, U, (e, t, s) => e ? t === V.LIVE ? e.broadcast_time : t === V.VOD && s < e.broadcast_time ? s : 0 : 0)
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
			var n = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				r = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const o = e => e.publicAccessNetwork.theaterSettings,
				i = Object(n.a)(o, r.n, (e, t) => t && !e.isIntroFinished),
				c = Object(n.a)(o, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + a.a > Date.now()
		},
		"./src/reddit/selectors/experiments/goldRpanLivePreview.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				a = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				return Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: n.qb
				}) === n.vb.Enabled
			}
		}
	}
]);
//# sourceMappingURL=ChatMessageInput.8072d8fcf2774abcee46.js.map