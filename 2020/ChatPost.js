// https://www.redditstatic.com/desktop2x/ChatPost.90f3ee40660660ee7908.js
// Retrieved at 6/30/2020, 2:40:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatPost"], {
		"./node_modules/lodash/_baseDelay.js": function(e, t) {
			var o = "Expected a function";
			e.exports = function(e, t, n) {
				if ("function" != typeof e) throw new TypeError(o);
				return setTimeout((function() {
					e.apply(void 0, n)
				}), t)
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, o, n, s) {
				return s(e, (function(e, s, r) {
					o = n ? (n = !1, e) : t(o, e, s, r)
				})), o
			}
		},
		"./node_modules/lodash/defer.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseDelay.js"),
				s = o("./node_modules/lodash/_baseRest.js")((function(e, t) {
					return n(e, 1, t)
				}));
			e.exports = s
		},
		"./node_modules/lodash/first.js": function(e, t, o) {
			e.exports = o("./node_modules/lodash/head.js")
		},
		"./node_modules/lodash/head.js": function(e, t) {
			e.exports = function(e) {
				return e && e.length ? e[0] : void 0
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_arrayReduce.js"),
				s = o("./node_modules/lodash/_baseEach.js"),
				r = o("./node_modules/lodash/_baseIteratee.js"),
				a = o("./node_modules/lodash/_baseReduce.js"),
				i = o("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, o) {
				var c = i(e) ? n : a,
					l = arguments.length < 3;
				return c(e, r(t, 4), o, l, s)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseTimes.js"),
				s = o("./node_modules/lodash/_castFunction.js"),
				r = o("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				i = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = r(e)) < 1 || e > a) return [];
				var o = i,
					l = c(e, i);
				t = s(t), e -= i;
				for (var d = n(l, t); ++o < e;) t(o);
				return d
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, o) {
			var n = o("./node_modules/lodash/toString.js"),
				s = 0;
			e.exports = function(e) {
				var t = ++s;
				return n(e) + t
			}
		},
		"./src/lib/setInterval/index.ts": function(e, t, o) {
			"use strict";
			t.a = function(e, t) {
				for (var o = arguments.length, n = new Array(o > 2 ? o - 2 : 0), s = 2; s < o; s++) n[s - 2] = arguments[s];
				let r, a = !1;
				const i = async () => {
					n && n.length ? await e.call(window, ...n) : await e.call(window), a || (r = window.setTimeout(i, t))
				};
				return r = window.setTimeout(i, t), () => {
					a = !0, window.clearTimeout(r)
				}
			}
		},
		"./src/reddit/components/Comments/States/index.m.less": function(e, t, o) {
			e.exports = {
				CommentsPlaceholderContainer: "_2o0N1VHuLszWHqY5A8iayv",
				commentsPlaceholderContainer: "_2o0N1VHuLszWHqY5A8iayv",
				CommentPlaceholder: "_2114DnVtHe_0MtbEW85tnL",
				commentPlaceholder: "_2114DnVtHe_0MtbEW85tnL",
				Avatar: "_3ES-TCR45dPoj_NuOATuNi",
				avatar: "_3ES-TCR45dPoj_NuOATuNi",
				VoteColumn: "_3j7WNOCzFwCp1SXZGJP1-V",
				voteColumn: "_3j7WNOCzFwCp1SXZGJP1-V",
				TextColumn: "_3tQxKBNuEJsKH_mPQEy34W",
				textColumn: "_3tQxKBNuEJsKH_mPQEy34W",
				StateContainer: "TbMmDiSaSaBQFF9F3FGe8",
				stateContainer: "TbMmDiSaSaBQFF9F3FGe8",
				CommentsIcon: "_1-f8S_KoiOmIpA8kGxOgfh",
				commentsIcon: "_1-f8S_KoiOmIpA8kGxOgfh",
				SnooFacepalm: "_2AxaYiv6EkZse5msRZqowQ",
				snooFacepalm: "_2AxaYiv6EkZse5msRZqowQ",
				EmptyTitle: "_39dVqXnozb8JxasPyFPu6C",
				emptyTitle: "_39dVqXnozb8JxasPyFPu6C",
				ErrorTitle: "_2Nj40mHW74FkFefq6oqWkb",
				errorTitle: "_2Nj40mHW74FkFefq6oqWkb",
				EmptyText: "_2x3Avx0lbWMcic-5bE_guO",
				emptyText: "_2x3Avx0lbWMcic-5bE_guO",
				ErrorFullPage: "_2ze7IsXK_2d3McYZHK6v_D",
				errorFullPage: "_2ze7IsXK_2d3McYZHK6v_D",
				LoadingFullPage: "_3kZ_esGcijvfnM9KjA27vj",
				loadingFullPage: "_3kZ_esGcijvfnM9KjA27vj",
				Downvote: "_32W1DnzyRkYXP82ZO96H0V",
				downvote: "_32W1DnzyRkYXP82ZO96H0V",
				Upvote: "_1lwmFW6D9PmeT_QA-R5F_0",
				upvote: "_1lwmFW6D9PmeT_QA-R5F_0",
				TopMetaPlaceholder: "_24vSs1yG3YhINbU6QRiFR9",
				topMetaPlaceholder: "_24vSs1yG3YhINbU6QRiFR9",
				CommentBodyPlaceholder: "_3S0qviXPTlIEUjYjSKT_Lb",
				commentBodyPlaceholder: "_3S0qviXPTlIEUjYjSKT_Lb"
			}
		},
		"./src/reddit/components/Comments/States/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return O
			})), o.d(t, "b", (function() {
				return j
			})), o.d(t, "g", (function() {
				return L
			})), o.d(t, "e", (function() {
				return S
			})), o.d(t, "d", (function() {
				return N
			})), o.d(t, "f", (function() {
				return R
			})), o.d(t, "a", (function() {
				return K
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/lodash/times.js"),
				r = o.n(s),
				a = o("./node_modules/react/index.js"),
				i = o.n(a),
				c = o("./node_modules/react-redux/es/index.js"),
				l = o("./src/lib/classNames/index.ts"),
				d = o("./src/lib/lessComponent.tsx"),
				m = o("./src/reddit/actions/page.ts"),
				p = o("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				u = o("./src/reddit/controls/Button/index.tsx"),
				h = o("./src/reddit/helpers/describeApiError/index.ts"),
				C = o("./src/reddit/helpers/path/index.ts"),
				b = o("./src/reddit/helpers/styles/mixins/loading.ts"),
				v = o("./src/reddit/icons/fonts/Downvote/index.tsx"),
				g = o("./src/reddit/icons/fonts/Upvote/index.tsx"),
				_ = o("./src/reddit/icons/svgs/Comments/index.tsx"),
				x = o("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				f = o("./src/reddit/components/Comments/States/index.m.less"),
				k = o.n(f);
			const E = d.a.wrapped(_.a, "CommentsIcon", k.a),
				T = d.a.wrapped(x.a, "SnooFacepalm", k.a),
				y = d.a.p("EmptyTitle", k.a),
				I = d.a.p("ErrorTitle", k.a),
				w = d.a.p("EmptyText", k.a),
				O = e => {
					let {
						className: t,
						isChat: o
					} = e;
					return i.a.createElement("div", {
						className: Object(l.a)(k.a.StateContainer, t)
					}, i.a.createElement(E, null), i.a.createElement(y, null, o ? n.fbt._("no messages yet", null, {
						hk: "QOUnY"
					}) : n.fbt._("no comments yet", null, {
						hk: "1yqeoX"
					})), i.a.createElement(w, null, n.fbt._("Be the first to share what you think!", null, {
						hk: "479v5B"
					})))
				},
				j = () => i.a.createElement("div", {
					className: k.a.StateContainer
				}, i.a.createElement(E, null), i.a.createElement(y, null, n.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), i.a.createElement(w, null, n.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				L = e => {
					let {
						link: t
					} = e;
					return i.a.createElement("div", {
						className: k.a.StateContainer
					}, i.a.createElement(E, null), i.a.createElement(y, null, n.fbt._("That comment is missing", null, {
						hk: "1i1U0i"
					})), i.a.createElement(u.h, {
						to: Object(C.b)(t)
					}, n.fbt._("View all comments", null, {
						hk: "2CgaIx"
					})))
				},
				S = Object(c.b)(null, (e, t) => {
					let {
						postId: o,
						commentId: n,
						sort: s
					} = t;
					return {
						onClick: () => e(Object(m.q)(o, n, {
							sort: s
						}, s))
					}
				})(e => {
					let {
						apiError: t,
						onClick: o
					} = e;
					return i.a.createElement("div", {
						className: k.a.StateContainer
					}, i.a.createElement(T, null), i.a.createElement(I, null, t ? Object(h.a)({
						apiError: t,
						isLoggedOut: !1
					}) : n.fbt._("Sorry, comments couldn't load!", null, {
						hk: "2h6LDi"
					})), i.a.createElement(u.f, {
						onClick: o
					}, n.fbt._("retry", null, {
						hk: "BoP8d"
					})))
				}),
				N = e => {
					let {
						postId: t,
						commentId: o,
						sort: n,
						apiError: s
					} = e;
					return i.a.createElement("div", {
						className: Object(l.a)(k.a.StateContainer, k.a.ErrorFullPage)
					}, i.a.createElement(S, {
						postId: t,
						commentId: o,
						sort: n,
						apiError: s
					}))
				},
				R = d.a.wrapped(e => {
					let {
						className: t
					} = e;
					return i.a.createElement("div", {
						className: t
					}, i.a.createElement(p.a, null))
				}, "LoadingFullPage", k.a),
				M = d.a.div("CommentsPlaceholderContainer", k.a),
				A = d.a.div("CommentPlaceholder", k.a),
				P = d.a.div("Avatar", k.a),
				B = d.a.div("VoteColumn", k.a),
				D = d.a.div("TextColumn", k.a),
				U = d.a.wrapped(g.b, "Upvote", k.a),
				W = d.a.wrapped(v.b, "Downvote", k.a),
				F = () => i.a.createElement("div", {
					className: Object(l.a)(k.a.TopMetaPlaceholder, Object(b.a)({
						isLoading: !0
					}))
				}),
				H = () => i.a.createElement("div", {
					className: Object(l.a)(k.a.CommentBodyPlaceholder, Object(b.a)({
						isLoading: !0
					}))
				}),
				K = e => i.a.createElement(M, null, r()(10, t => i.a.createElement(A, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? i.a.createElement(P, {
					className: Object(b.a)({
						isLoading: !0
					})
				}) : i.a.createElement(B, null, i.a.createElement(U, null), i.a.createElement(W, null)), i.a.createElement(D, null, i.a.createElement(F, null), i.a.createElement(H, null)))))
		},
		"./src/reddit/components/CommentsChat/Comment/AwardComment/index.m.less": function(e, t, o) {
			e.exports = {
				awardComment: "Qkdtf2CTKJDknbazL-AMW",
				silverTierAwardComment: "_2K5jTegGACZTi8TWvs4SyB",
				goldTierAwardComment: "_37sBwMRYEzwkWdokXOOlQJ",
				platinumTierAwardComment: "_11aS54KCcFm_OLfRPhp_3D",
				imageContainer: "_1vPp7dOkl_3DKjZYjW06BW",
				backgroundAnimation: "_2i4HeuNgltvyx1u5avuVnK",
				backgroundStar: "_3nk7xeDcgOeGYAfF3Spsbh",
				spinCW: "_2Puyz3btdtqWX6E5eI2hBB",
				spinCw: "_2Puyz3btdtqWX6E5eI2hBB",
				backgroundStar2: "_2kPpfDsovGUW6dzF2F4n3P",
				backgroundSparkle: "_3z4E7G1TTNdvve0FxUTLUo",
				twinkle: "Vv46qL__rbNs6Bj4N8Dsl",
				sparkleBottomLeft: "u1JiASpbiuGwsfsTCsHCf",
				sparkleTopRight: "_3rJK5s9oFDAt1F0Hpr7BRE",
				sparkleBottomRight: "_1RcdEbzgGuOANa3oJzFJdl",
				awardCommentText: "_1uqs3HOwKgnPYqpbzW9WqV",
				coinIcon: "_2uSjw9de_n2QHtDV1EiJPd"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx": function(e, t, o) {
			"use strict";
			o("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = o("./src/config.ts"),
				s = o("./node_modules/lodash/memoize.js"),
				r = o.n(s),
				a = o("./node_modules/react/index.js"),
				i = o.n(a),
				c = o("./src/lib/constants/index.ts"),
				l = o("./src/lib/lessComponent.tsx"),
				d = ["FF4500", "0DD3BB", "24A0ED", "FFB000", "FF8717", "46D160", "25B79F", "0079D3", "4856A3", "C18D42", "A06A42", "46A508", "008985", "7193FF", "7E53C1", "FFD635", "DDBD37", "D4E815", "94E044", "FF66AC", "DB0064", "FF585B", "EA0027", "A5A4A4", "545452"],
				m = o("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				p = o.n(m);
			const u = l.a.div("Userpic", p.a);
			t.a = r()(e => {
				const {
					userId: t
				} = e, {
					processingAvatarImageUrl: o
				} = n.a, s = (e => e.replace(c.xb.Account + "_", ""))(t), {
					avatar: r,
					color: a
				} = (e => {
					const t = d.length,
						o = parseInt(e, 36),
						n = o % 20 + 1,
						s = Math.floor(o / 20) % t;
					return {
						avatar: ("0" + n).slice(-2),
						color: d[s]
					}
				})(s), l = "".concat(o, "/avatar_default_").concat(r, "_").concat(a, ".png");
				return i.a.createElement(u, {
					style: {
						backgroundImage: "url(".concat(l, ")"),
						backgroundColor: "#".concat(a)
					}
				})
			})
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/reselect/es/index.js"),
				i = o("./src/lib/lessComponent.tsx"),
				c = o("./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx"),
				l = o("./src/reddit/icons/svgs/Redditor/index.tsx"),
				d = o("./src/reddit/icons/svgs/Remove/index.tsx"),
				m = o("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				p = o.n(m);
			const u = i.a.img("Userpic", p.a),
				h = Object(a.c)({
					account: e => e.user.account
				}),
				C = Object(r.b)(h);
			t.a = i.a.wrapped(C(e => {
				let {
					account: t,
					className: o,
					height: n,
					isLivestreaming: r,
					trash: a,
					userId: i,
					width: m
				} = e;
				const h = r ? 36 : 20,
					C = {
						height: n || h,
						width: m || h,
						minWidth: m || h
					};
				return a ? s.a.createElement("div", {
					className: o,
					style: C
				}, s.a.createElement(d.a, {
					className: p.a.TrashIcon
				})) : i ? s.a.createElement("div", {
					className: o,
					style: C
				}, t && t.accountIcon && t.id === i ? s.a.createElement(u, {
					src: t.accountIcon,
					alt: "user icon"
				}) : s.a.createElement(c.a, {
					userId: i
				})) : s.a.createElement("div", {
					className: o,
					style: C
				}, t && t.accountIcon ? s.a.createElement(u, {
					src: t.accountIcon,
					alt: "user icon"
				}) : s.a.createElement(l.a, {
					className: p.a.ProfileIcon
				}))
			}), "ChatIcon", p.a)
		},
		"./src/reddit/components/CommentsChat/Comment/CollapsedComment/index.m.less": function(e, t, o) {
			e.exports = {
				CollapsedComment: "_3atwFTZjTzR7TeUGv2qiiK",
				collapsedComment: "_3atwFTZjTzR7TeUGv2qiiK"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/Menu/index.m.less": function(e, t, o) {
			e.exports = {
				Menu: "_5my6mpNfA-0tUAWEfSqKg",
				menu: "_5my6mpNfA-0tUAWEfSqKg",
				Livestreaming: "_3BiWoByLkhvgOFD5mQKC3P",
				livestreaming: "_3BiWoByLkhvgOFD5mQKC3P",
				MenuItem: "_2w0PAV-r7nSn2rWmPNSgkZ",
				menuItem: "_2w0PAV-r7nSn2rWmPNSgkZ",
				MenuItemPermalink: "_2aYTbUyyYyWA0n00oUWj1v",
				menuItemPermalink: "_2aYTbUyyYyWA0n00oUWj1v",
				ApproveIcon: "_3gt_IOdHja-rh09hVkYpPb",
				approveIcon: "_3gt_IOdHja-rh09hVkYpPb",
				BlockIcon: "_1QA0OmqFuhRg545zEsYGHt",
				blockIcon: "_1QA0OmqFuhRg545zEsYGHt",
				EditIcon: "_3PW1UsfpSAMxomcTcf_ikU",
				editIcon: "_3PW1UsfpSAMxomcTcf_ikU",
				FlagIcon: "_269qxNSrwp7r6TRmz330pB",
				flagIcon: "_269qxNSrwp7r6TRmz330pB",
				RemoveIcon: "_2buZ4_GVymVoT-epE6aVWC",
				removeIcon: "_2buZ4_GVymVoT-epE6aVWC",
				ReplyIcon: "GOcnt_7O2SheQ1cMVusGY",
				replyIcon: "GOcnt_7O2SheQ1cMVusGY",
				SpamIcon: "_2uhO8ps5ygzeaMfBqgte48",
				spamIcon: "_2uhO8ps5ygzeaMfBqgte48",
				TrashIcon: "y5OXD3zhZe6eOjDY_te9N",
				trashIcon: "y5OXD3zhZe6eOjDY_te9N",
				UnblockIcon: "_1IhZkqtDhYt8bWr9c-84ox",
				unblockIcon: "_1IhZkqtDhYt8bWr9c-84ox",
				HorizontalVotes: "_292WfpEp6iZvLlnRwGwndc",
				horizontalVotes: "_292WfpEp6iZvLlnRwGwndc"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/Reply/index.m.less": function(e, t, o) {
			e.exports = {
				ChatIcon: "A7lJyo4aA-0ZG543rcU5N",
				chatIcon: "A7lJyo4aA-0ZG543rcU5N",
				ReplyAuthor: "_1oqAMLcBteCs1uqiee6hPH",
				replyAuthor: "_1oqAMLcBteCs1uqiee6hPH",
				ReplyComment: "_1G2J0kP9hg_lbO0_snqlRa",
				replyComment: "_1G2J0kP9hg_lbO0_snqlRa",
				ReplyWrapper: "nJ-zNz-rKWpUAVwBrcicJ",
				replyWrapper: "nJ-zNz-rKWpUAVwBrcicJ",
				ReplyLinkBubble: "_2jEkNe2J7P_4gGTPVvYH_n",
				replyLinkBubble: "_2jEkNe2J7P_4gGTPVvYH_n",
				delete: "YvyNyAbJVOuICmvKmRvEQ",
				Livestreaming: "_2cp8F9ZQJKebx4VCw7KnnY",
				livestreaming: "_2cp8F9ZQJKebx4VCw7KnnY"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/Votes/index.m.less": function(e, t, o) {
			e.exports = {
				ChatHorizontalVotes: "_11h6WbV5fYKK0BS9Ky-Mg9",
				chatHorizontalVotes: "_11h6WbV5fYKK0BS9Ky-Mg9",
				downvoteWrapper: "_1X87ymkKoxgnirYJcVs4Ye",
				upvoteWrapper: "_2iWPXwSHRrHuLMUmvbO2Wn",
				ChatHorizontalVotesWrapper: "_2tzLfnxPYwtq87SptxBSUC",
				chatHorizontalVotesWrapper: "_2tzLfnxPYwtq87SptxBSUC",
				UpvoteOnlyDownvoteWrapper: "_2tPbfMliIDNZtnZOxBZ81q",
				upvoteOnlyDownvoteWrapper: "_2tPbfMliIDNZtnZOxBZ81q",
				DownvoteWrapper: "_1X87ymkKoxgnirYJcVs4Ye",
				Score: "_1q-J1j6guscRCSgb3QosSZ",
				score: "_1q-J1j6guscRCSgb3QosSZ"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/index.m.less": function(e, t, o) {
			e.exports = {
				Menu: "_2qe0ML8CXcWe4YSyvE9LgB",
				menu: "_2qe0ML8CXcWe4YSyvE9LgB",
				CommentWrapper: "_1cLn4fCD5gseRsUmt4bMvC",
				commentWrapper: "_1cLn4fCD5gseRsUmt4bMvC",
				CommentReadMoreButton: "_1MYiq2Hs6CoOoLuxy6wdz4",
				commentReadMoreButton: "_1MYiq2Hs6CoOoLuxy6wdz4",
				LivestreamingCommentWrapper: "_2eTWiuSXGVaOGc5m6zQgeI",
				livestreamingCommentWrapper: "_2eTWiuSXGVaOGc5m6zQgeI",
				livestreamingTimeStamp: "_3tm5nGCrgdKGC7teW20lkz",
				DeleteText: "_3NYb7Rn0lpswKMy5MQyLQd",
				deleteText: "_3NYb7Rn0lpswKMy5MQyLQd",
				HighlightTarget: "_1xb8KSvW9CPjS0xPMZ7Dwf",
				highlightTarget: "_1xb8KSvW9CPjS0xPMZ7Dwf",
				Time: "_3zcUapb9ifA8a4OWCpuUSq",
				time: "_3zcUapb9ifA8a4OWCpuUSq",
				ErrorText: "_2juClHvsqBfQddQtKSlF6V",
				errorText: "_2juClHvsqBfQddQtKSlF6V",
				RichTextJson: "_1E4TbYahRPkKEc1TNmQX-K",
				richTextJson: "_1E4TbYahRPkKEc1TNmQX-K",
				Livestreaming: "_24c_0WdNkjV_cdd2RJ6AmK",
				livestreaming: "_24c_0WdNkjV_cdd2RJ6AmK",
				TopMeta: "SJ4qRd99ApBBSiNYdfSoh",
				topMeta: "SJ4qRd99ApBBSiNYdfSoh",
				ChatIcon: "_3vCuaD6pLcosMuwzU6nhAB",
				chatIcon: "_3vCuaD6pLcosMuwzU6nhAB",
				Reply: "_3F-9o12RM4UV20egYU2h21",
				reply: "_3F-9o12RM4UV20egYU2h21",
				CommentTruncated: "_3PXAOD2xpFqPtI_Lvf2_yc",
				commentTruncated: "_3PXAOD2xpFqPtI_Lvf2_yc",
				CommentExpanded: "yvxBkSg0EB3OQJ-wQuj73",
				commentExpanded: "yvxBkSg0EB3OQJ-wQuj73",
				TruncatedVotesButton: "_3WFcMWN18wFH1DiydIjsja",
				truncatedVotesButton: "_3WFcMWN18wFH1DiydIjsja"
			}
		},
		"./src/reddit/components/CommentsChat/Scroller/index.m.less": function(e, t, o) {
			e.exports = {
				NewComments: "_3GhW7Cq0eM7vr_gXsZP1XK",
				newComments: "_3GhW7Cq0eM7vr_gXsZP1XK",
				show: "Tptm_9duqsvpN1p297GT0",
				ButtonWrapper: "ol-vdNEpF-pHpwSKyGQDF",
				buttonWrapper: "ol-vdNEpF-pHpwSKyGQDF",
				ScrollerWrapper: "_2HUS1KWemnPFcYeDdGcB5k",
				scrollerWrapper: "_2HUS1KWemnPFcYeDdGcB5k",
				loading: "_2Nsq1nyEjWMCKSWs72G7lx",
				ScrollerSection: "_3nKpelf5u6QAnrZcGbvig_",
				scrollerSection: "_3nKpelf5u6QAnrZcGbvig_",
				gradientAnimation: "_1GHoi4QoUeFfb4IzUIMCoR",
				LivestreamingWrapper: "_2kV0SeyyPoyl4Cfm2Fi2UI",
				livestreamingWrapper: "_2kV0SeyyPoyl4Cfm2Fi2UI",
				ChunkPlaceholder: "_1qabk5TtS1HAm0eXfcUmxv",
				chunkPlaceholder: "_1qabk5TtS1HAm0eXfcUmxv",
				top: "ZuYs_5l7Qf6T91OUOD4pG"
			}
		},
		"./src/reddit/components/CommentsChat/index.tsx": function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "COMMENT_TIMESTAMP_UPDATE_INTERVAL", (function() {
				return fo
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/reselect/es/index.js"),
				i = o("./src/lib/constants/index.ts"),
				c = o("./src/lib/setInterval/index.ts"),
				l = o("./src/lib/timeAgo/index.ts"),
				d = o("./src/reddit/actions/blockedRedditors.ts"),
				m = o("./src/reddit/actions/comment/index.ts"),
				p = o("./src/lib/makeActionCreator/index.ts"),
				u = (o("./node_modules/core-js/modules/es6.array.sort.js"), o("./node_modules/lodash/first.js")),
				h = o.n(u),
				C = o("./node_modules/lodash/isArray.js"),
				b = o.n(C),
				v = o("./src/reddit/helpers/isComment.ts"),
				g = o("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				_ = o("./src/reddit/models/Comment/index.ts"),
				x = o("./src/reddit/models/Flair/index.ts"),
				f = o("./src/reddit/models/PostCreationForm/index.ts"),
				k = o("./src/reddit/models/Vote/index.ts");
			const E = e => {
					if (void 0 !== e.author && void 0 !== e.author_fullname && void 0 !== e.attribs && void 0 !== e.created_utc && void 0 !== e.name && void 0 !== e.subreddit_id && void 0 !== e.body && void 0 !== e.context && void 0 !== e.link_id && void 0 !== e.score) {
						const t = y(e.attribs);
						return {
							allAwardings: [],
							associatedAward: e.associated_award ? Object(g.b)(e.associated_award) : void 0,
							author: e.author,
							authorId: e.author_fullname,
							body: e.body_html,
							bodyMD: e.body,
							collapsed: Boolean(e.collapsed),
							collapsedBecauseCrowdControl: Boolean(e.collapsed_in_crowd_control),
							created: e.created_utc,
							distinguishType: T(t),
							id: e.name,
							isAdmin: t === _.c.Admin,
							isGildable: !1 !== e.can_gild,
							isOp: t === _.c.Submitter,
							isMod: t === _.c.Moderator,
							markdown: e.body,
							media: {
								type: "rtjson",
								richtextContent: e.rtjson || {
									document: [{
										c: [{
											e: "text",
											t: e.body
										}],
										e: "par"
									}]
								},
								rteMode: f.h.RICH_TEXT
							},
							parentId: e.parent_id && Object(v.a)(e.parent_id) ? e.parent_id : null,
							permalink: e.context,
							postId: e.link_id,
							score: e.score,
							subredditId: e.subreddit_id,
							treatmentTags: e.treatment_tags,
							approvedAtUTC: null,
							approvedBy: null,
							bannedAtUTC: null,
							bannedBy: null,
							collapsedReason: null,
							deletedBy: null,
							editedAt: null,
							ignoreReports: !1,
							isApproved: !1,
							isAuthorPremium: !1,
							isLocked: !1,
							isDeleted: !1,
							isRemoved: !1,
							isScoreHidden: !1,
							isSpam: !1,
							isStickied: !1,
							isSaved: !1,
							modReports: [],
							modReportsDismissed: [],
							numReports: 0,
							postAuthor: null,
							postTitle: null,
							sendReplies: !0,
							userReports: [],
							userReportsDismissed: [],
							voteState: k.a.notVoted
						}
					}
				},
				T = e => {
					switch (e) {
						case _.c.Admin:
							return i.C.ADMIN;
						case _.c.Moderator:
							return i.C.MODERATOR;
						case _.c.Alumni:
							return i.C.ALUMNI_ADMIN;
						default:
							return ""
					}
				},
				y = e => h()((e || []).filter(e => b()(e) && e.length >= 2).sort(e => e[0]).map(e => e[1])) || _.c.None;
			const I = (e, t, o) => {
				const n = {
						[t]: {}
					},
					{
						author: s,
						author_flair_background_color: r,
						author_flair_richtext: a,
						author_flair_template_id: i,
						author_flair_text: c,
						author_flair_text_color: l,
						author_flair_type: d
					} = o;
				if (s && d) {
					if (d === x.f.Richtext) {
						if (!r || !a) return;
						return {
							[t]: {
								[s]: {
									type: d,
									backgroundColor: r,
									cssClass: void 0,
									richtext: a,
									templateId: i,
									textColor: l
								}
							}
						}
					}
					if (d === x.f.Text) {
						if (!c) return n;
						return {
							[t]: {
								[s]: {
									type: d,
									backgroundColor: r,
									cssClass: void 0,
									text: c,
									templateId: i,
									textColor: l
								}
							}
						}
					}
				}
			};
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var w = o("./src/lib/env/index.ts");
			const O = new Map,
				j = e => e;
			var L;
			! function(e) {
				e.NEW_COMMENT = "new_comment", e.UPDATE_COMMENT = "update_comment", e.UPDATE_COMMENT_SCORE = "update_comment_score", e.DELETE_COMMENT = "delete_comment", e.REMOVE_COMMENT = "remove_comment"
			}(L || (L = {}));
			const S = {
					backoffTime: 2e3,
					connectionAttempts: 0,
					jitterAmount: 3e3,
					maximumRetries: 9
				},
				N = (e, t) => {
					const o = j(t),
						n = O.get(o);
					n && n.socket && (n.isClosePlanned = !0, n.socket.close())
				},
				R = (e, t, o, n) => {
					const s = j(t),
						r = O.get(s);
					if (r && (r.socket.readyState === WebSocket.CONNECTING || r.socket.readyState === WebSocket.OPEN)) return;
					const a = {
						socket: new WebSocket(e),
						retries: o,
						uniqueId: t,
						url: e,
						isClosePlanned: !1
					};
					O.set(s, a), a.socket.addEventListener("open", () => {
						a.retries = Object.assign({}, S)
					}), a.socket.addEventListener("message", P.bind(null, n)), a.socket.addEventListener("close", M.bind(null, s, n)), a.socket.addEventListener("error", B.bind(null, s)), window && window.addEventListener("beforeunload", N.bind(null, e, t))
				},
				M = (e, t, o) => {
					const n = O.get(e);
					n && (n.isClosePlanned ? O.delete(e) : A(e, t))
				},
				A = (e, t) => {
					const o = O.get(e);
					if (!o) return;
					const {
						retries: {
							backoffTime: n,
							connectionAttempts: s,
							jitterAmount: r,
							maximumRetries: a
						},
						socket: i,
						uniqueId: c,
						url: l
					} = o;
					if (O.delete(e), s < a && i.readyState !== WebSocket.OPEN) {
						const e = n * Math.pow(2, s),
							a = Math.random() * r - r / 2,
							i = Math.round(e + a),
							d = Object.assign({}, o.retries, {
								connectionAttempts: s + 1
							});
						setTimeout(() => {
							R(l, c, d, t)
						}, i), w.a && console.debug("Connection reset, retrying in ".concat(i, "ms"))
					}
				},
				P = (e, t) => {
					if (t && t.data) try {
						e(JSON.parse(t.data))
					} catch (t) {
						w.a && console.error(t)
					}
				},
				B = (e, t) => {
					const o = O.get(e);
					o && o.isClosePlanned && o.socket && o.socket.readyState === WebSocket.CLOSED ? O.delete(e) : w.a && console.error(t)
				};
			var D = o("./src/reddit/selectors/comments.ts"),
				U = o("./src/reddit/selectors/moderatorPermissions.ts"),
				W = o("./src/reddit/actions/comment/websocket/constants.ts");
			const F = Object(p.a)(W.b),
				H = Object(p.a)(W.c),
				K = Object(p.a)(W.a),
				V = {},
				q = (e, t, o, n) => async (s, r) => {
					(e => {
						const {
							cb: t,
							url: o,
							uniqueId: n
						} = e;
						R(o, n, Object.assign({}, S), t)
					})({
						uniqueId: o,
						url: t,
						cb: t => {
							switch (t.type) {
								case L.NEW_COMMENT: {
									const o = t.payload.name,
										a = E(t.payload),
										i = r(),
										c = Object(D.n)(i, {
											commentId: o
										}),
										l = !(!o || !V[o]);
									if (a && !l) {
										const o = I(0, n, t.payload),
											r = t.payload.total_comment_count;
										if (void 0 === c) {
											const t = Object(D.x)(i, {
												commentsPageKey: e
											});
											s(F({
												authorFlair: o,
												comment: a,
												commentsPageKey: e,
												headCommentId: t,
												numComments: r
											}))
										} else s(H({
											authorFlair: o,
											comment: a,
											commentsPageKey: e,
											numComments: r
										}))
									}
									break
								}
								case L.UPDATE_COMMENT: {
									const o = t.payload.name,
										a = r(),
										i = Object(D.n)(a, {
											commentId: o
										}),
										c = E(t.payload);
									if (i && c) {
										const o = I(0, n, t.payload),
											r = t.payload.total_comment_count;
										s(H({
											authorFlair: o,
											comment: c,
											commentsPageKey: e,
											numComments: r
										}))
									}
									break
								}
								case L.UPDATE_COMMENT_SCORE: {
									const o = t.payload.name,
										n = t.payload.score,
										a = r(),
										i = Object(D.n)(a, {
											commentId: o
										});
									i && s(H({
										comment: Object.assign({}, i, {
											score: n
										}),
										commentsPageKey: e
									}));
									break
								}
								case L.DELETE_COMMENT: {
									const e = t.payload.name,
										o = r(),
										n = Object(D.n)(o, {
											commentId: e
										});
									n && !n.isDeleted ? s(K({
										id: e
									})) : V[e] = L.DELETE_COMMENT;
									break
								}
								case L.REMOVE_COMMENT: {
									const e = t.payload.link_id,
										o = t.payload.name,
										n = r(),
										a = Object(D.n)(n, {
											commentId: o
										}),
										i = (n.user.account && n.user.account.id) === (a && a.authorId),
										c = !!e && !!Object(U.i)(n, {
											postId: e
										});
									!a || a.isRemoved && a.isDeleted || i || c ? V[o] = L.REMOVE_COMMENT : s(K({
										id: o
									}));
									break
								}
							}
						}
					})
				};
			var z = o("./src/reddit/actions/page.ts"),
				Y = o("./src/reddit/components/Comments/States/index.tsx"),
				Z = o("./node_modules/fbt/lib/FbtPublic.js"),
				G = o("./node_modules/lodash/defer.js"),
				J = o.n(G),
				Q = o("./src/lib/classNames/index.ts"),
				X = o("./src/lib/lessComponent.tsx"),
				$ = o("./src/lib/makeDraftKey/index.ts"),
				ee = o("./src/lib/objectSelector/index.ts"),
				te = o("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				oe = o("./src/reddit/helpers/awards/getIconForSize.ts"),
				ne = o("./src/reddit/helpers/awards/message.ts"),
				se = o("./src/reddit/helpers/getRichTextContent/index.ts"),
				re = o("./src/reddit/components/RichTextJson/index.tsx"),
				ae = o("./src/reddit/icons/svgs/Sparkle/index.tsx"),
				ie = o("./src/reddit/icons/svgs/Star/index.tsx"),
				ce = o("./src/reddit/icons/svgs/Star2/index.tsx"),
				le = o("./src/reddit/components/CommentsChat/Comment/AwardComment/index.m.less"),
				de = o.n(le);
			const me = Object(ee.b)(e => ({
					renderingObjectInfo: e.comment
				})),
				pe = e => {
					const {
						award: t,
						comment: o,
						prefersReducedMotion: n
					} = e, r = Object(oe.a)(t, 64, n);
					let a = "",
						i = !0,
						c = !1;
					return t.coinPrice < ne.a ? (a = de.a.silverTierAwardComment, i = !1) : t.coinPrice < ne.b ? a = de.a.goldTierAwardComment : (a = de.a.platinumTierAwardComment, c = !0), s.a.createElement("div", {
						className: Object(Q.a)(de.a.awardComment, a)
					}, s.a.createElement("div", {
						className: de.a.imageContainer
					}, i && s.a.createElement(s.a.Fragment, null, s.a.createElement(ie.a, {
						className: Object(Q.a)(de.a.backgroundAnimation, de.a.backgroundStar)
					}), s.a.createElement(ce.a, {
						className: Object(Q.a)(de.a.backgroundAnimation, de.a.backgroundStar, de.a.backgroundStar2)
					})), c && s.a.createElement(s.a.Fragment, null, s.a.createElement(ae.a, {
						className: Object(Q.a)(de.a.backgroundAnimation, de.a.backgroundSparkle, de.a.sparkleBottomLeft)
					}), s.a.createElement(ae.a, {
						className: Object(Q.a)(de.a.backgroundAnimation, de.a.backgroundSparkle, de.a.sparkleTopRight)
					}), s.a.createElement(ae.a, {
						className: Object(Q.a)(de.a.backgroundAnimation, de.a.backgroundSparkle, de.a.sparkleBottomRight)
					})), s.a.createElement("img", {
						src: r
					})), s.a.createElement(re.a, {
						className: de.a.awardCommentText,
						content: Object(se.a)(o),
						key: "rich-text-".concat(o.id),
						rtJsonElementProps: me(e),
						useExplicitTextColor: !0
					}))
				};
			var ue = o("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				he = o("./src/reddit/components/CommentsChat/Comment/CollapsedComment/index.m.less"),
				Ce = o.n(he);
			const be = X.a.div("CollapsedComment", Ce.a);
			var ve = e => {
					let {
						commentCount: t,
						onClick: o
					} = e;
					return s.a.createElement(be, {
						onClick: o
					}, Z.fbt._("collapsed {collapsed message} (may be sensitive)", [Z.fbt._param("collapsed message", Z.fbt._({
						"*": "{message count} messages",
						_1: "message"
					}, [Z.fbt._plural(t, "message count")], {
						hk: "3SYWlH"
					}))], {
						hk: "3equVw"
					}))
				},
				ge = o("./src/lib/humanizeDateTime/index.ts"),
				_e = o("./src/reddit/actions/postCreation/general.ts"),
				xe = o("./src/reddit/actions/reportFlow.ts"),
				fe = o("./src/reddit/actions/tooltip.ts"),
				ke = o("./src/reddit/actions/userBlocks.ts"),
				Ee = o("./src/reddit/components/InfoTextTooltip/index.tsx"),
				Te = o("./src/reddit/constants/tracking.ts"),
				ye = o("./src/reddit/selectors/telemetry.ts"),
				Ie = o("./src/telemetry/models/Event.ts");
			const we = e => ({
					screen: Object(ye.screen)(e),
					profile: Object(ye.profile)(e),
					subreddit: Object(ye.subreddit)(e)
				}),
				Oe = (e, t) => o => ({
					action: "load",
					noun: e,
					post: Object(ye.post)(o, t),
					source: Ie.b.ChatView,
					subreddit: Object(ye.subreddit)(o)
				});
			var je = o("./src/reddit/components/CommentsChat/Comment/Menu/index.m.less"),
				Le = o.n(je);

			function Se() {
				return (Se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ne = X.a.button("MenuItem", Le.a),
				Re = X.a.a("MenuItemPermalink", Le.a),
				Me = e => {
					let {
						children: t,
						comment: o,
						onClick: n,
						onHideTooltip: r,
						onShowTooltip: a,
						sendEvent: i,
						tooltipId: c,
						tooltipText: l,
						trackingNoun: d
					} = e;
					return s.a.createElement(Ne, {
						id: c,
						onMouseEnter: a.bind(void 0, c),
						onMouseLeave: r.bind(void 0, c),
						onClick: e => {
							n(e), d && (i(((e, t) => o => Object.assign({
								source: "comment",
								action: Te.c.CLICK,
								noun: e,
								post: Object(ye.post)(o, t),
								comment: Object(ye.comment)(o, t)
							}, we(o)))(d, o.id)), i(((e, t) => o => Object.assign({
								source: "comment_overflow_menu",
								action: Te.c.CLICK,
								noun: e,
								post: Object(ye.post)(o, t),
								comment: Object(ye.comment)(o, t)
							}, we(o)))(d, o.id)))
						}
					}, t, s.a.createElement(Ee.c, {
						tooltipId: c,
						text: l
					}))
				},
				Ae = e => s.a.createElement(Me, Se({
					onClick: e.onHideTooltip
				}, e), s.a.createElement(Re, {
					href: e.comment.permalink,
					rel: "nofollow",
					target: "_blank"
				}, e.children));
			var Pe = o("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				Be = o("./src/reddit/components/ModModeReports/helpers.ts"),
				De = o("./src/reddit/components/ReportFlow/index.tsx"),
				Ue = o("./src/reddit/components/TrackingHelper/index.tsx"),
				We = o("./src/reddit/icons/fonts/Downvote/index.tsx"),
				Fe = o("./src/reddit/icons/fonts/Upvote/index.tsx"),
				He = o("./src/reddit/icons/svgs/Approve/index.tsx"),
				Ke = o("./src/reddit/icons/svgs/Ban/index.tsx"),
				Ve = o("./src/reddit/icons/svgs/Edit/index.m.less"),
				qe = o.n(Ve);
			var ze = e => s.a.createElement("svg", {
					className: Object(Q.a)(qe.a.edit, e.className),
					viewBox: "4 4 12 12"
				}, s.a.createElement("g", {
					transform: "translate(-68.000000, -207.000000)"
				}, s.a.createElement("path", {
					d: "M74,221.73128 L76.2632,221.73128 C76.4752,221.73128 76.6784,221.64728 76.8288,221.49688 L83.2968,215.02808 C83.6096,214.71528 83.6096,214.20968 83.2968,213.89688 L81.0344,211.63448 C80.7216,211.32168 80.216,211.32168 79.9032,211.63448 L73.4344,218.10328 C73.284,218.25288 73.2,218.45608 73.2,218.66888 L73.2,220.93128 C73.2,221.37368 73.5584,221.73128 74,221.73128"
				}))),
				Ye = o("./src/reddit/icons/svgs/Flag/index.tsx"),
				Ze = o("./src/reddit/icons/svgs/Remove/index.tsx"),
				Ge = o("./src/reddit/icons/svgs/ReplyArrow/index.m.less"),
				Je = o.n(Ge);
			var Qe = e => s.a.createElement("svg", {
					className: Object(Q.a)(Je.a.icon, e.className),
					viewBox: "0 0 511.63 511.631"
				}, s.a.createElement("path", {
					d: "M496.5,233.842c-30.841-76.706-114.112-115.06-249.823-115.06h-63.953V45.693c0-4.952-1.809-9.235-5.424-12.85 c-3.617-3.617-7.896-5.426-12.847-5.426c-4.952,0-9.235,1.809-12.85,5.426L5.424,179.021C1.809,182.641,0,186.922,0,191.871 c0,4.948,1.809,9.229,5.424,12.847L151.604,350.9c3.619,3.613,7.902,5.428,12.85,5.428c4.947,0,9.229-1.814,12.847-5.428 c3.616-3.614,5.424-7.898,5.424-12.848v-73.094h63.953c18.649,0,35.349,0.568,50.099,1.708c14.749,1.143,29.413,3.189,43.968,6.143 c14.564,2.95,27.224,6.991,37.979,12.135c10.753,5.144,20.794,11.756,30.122,19.842c9.329,8.094,16.943,17.7,22.847,28.839 c5.896,11.136,10.513,24.311,13.846,39.539c3.326,15.229,4.997,32.456,4.997,51.675c0,10.466-0.479,22.176-1.428,35.118 c0,1.137-0.236,3.375-0.715,6.708c-0.473,3.333-0.712,5.852-0.712,7.562c0,2.851,0.808,5.232,2.423,7.136 c1.622,1.902,3.86,2.851,6.714,2.851c3.046,0,5.708-1.615,7.994-4.853c1.328-1.711,2.561-3.806,3.71-6.283 c1.143-2.471,2.43-5.325,3.854-8.562c1.431-3.237,2.43-5.513,2.998-6.848c24.17-54.238,36.258-97.158,36.258-128.756 C511.63,291.039,506.589,259.344,496.5,233.842z"
				})),
				Xe = o("./src/reddit/icons/svgs/Unlock/index.tsx"),
				$e = o("./src/reddit/models/PostDraft/index.ts"),
				et = o("./src/reddit/selectors/activeModalId.ts"),
				tt = o("./src/reddit/selectors/blockedRedditors.ts"),
				ot = o("./src/reddit/selectors/experiments/chatPost.ts"),
				nt = o("./src/reddit/constants/experiments.ts"),
				st = o("./src/reddit/helpers/chooseVariant/index.ts");
			const rt = Object(a.a)(e => Object(st.c)(e, {
					experimentName: nt.D,
					experimentEligibilitySelector: st.a
				}), e => e),
				at = e => rt(e) === nt.A.UpvoteOnly,
				it = e => rt(e) === nt.A.UpvoteDownvote;
			var ct = o("./src/reddit/selectors/user.ts");

			function lt() {
				return (lt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const dt = X.a.wrapped(Ke.a, "BlockIcon", Le.a),
				mt = X.a.wrapped(Ye.a, "FlagIcon", Le.a),
				pt = X.a.wrapped(ze, "EditIcon", Le.a),
				ut = X.a.wrapped(He.a, "ApproveIcon", Le.a),
				ht = X.a.wrapped(Qe, "ReplyIcon", Le.a),
				Ct = X.a.wrapped(Ze.a, "RemoveIcon", Le.a),
				bt = X.a.wrapped(e => s.a.createElement("svg", {
					className: e.className,
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, s.a.createElement("g", null, s.a.createElement("path", {
					fillRule: "evenodd",
					d: "M12.3535,14.6465 C12.5485,14.8415 12.5485,15.1585 12.3535,15.3535 C12.2555,15.4515 12.1275,15.5005 11.9995,15.5005 C11.8725,15.5005 11.7445,15.4515 11.6465,15.3535 L9.9995,13.7075 L8.3535,15.3535 C8.2555,15.4515 8.1275,15.5005 7.9995,15.5005 C7.8725,15.5005 7.7445,15.4515 7.6465,15.3535 C7.4515,15.1585 7.4515,14.8415 7.6465,14.6465 L9.2925,13.0005 L7.6465,11.3535 C7.4515,11.1585 7.4515,10.8415 7.6465,10.6465 C7.8415,10.4515 8.1585,10.4515 8.3535,10.6465 L9.9995,12.2925 L11.6465,10.6465 C11.8415,10.4515 12.1585,10.4515 12.3535,10.6465 C12.5485,10.8415 12.5485,11.1585 12.3535,11.3535 L10.7075,13.0005 L12.3535,14.6465 Z M15.9995,8.0005 C17.1045,8.0005 17.9995,8.8955 17.9995,10.0005 L17.9995,16.0005 C17.9995,17.1045 17.1045,18.0005 15.9995,18.0005 L3.9995,18.0005 C2.8955,18.0005 1.9995,17.1045 1.9995,16.0005 L1.9995,10.0005 C1.9995,8.8955 2.8955,8.0005 3.9995,8.0005 L15.9995,8.0005 Z M4,7 C3.229,7 2.532,7.301 2,7.78 L2,7 C2,6.586 2.126,6.201 2.342,5.882 C2.485,5.669 2.669,5.485 2.882,5.342 C3.201,5.126 3.586,5 4,5 L16,5 C16.414,5 16.799,5.126 17.118,5.342 C17.225,5.414 17.324,5.495 17.414,5.586 C17.505,5.676 17.587,5.775 17.658,5.882 C17.874,6.201 18,6.586 18,7 L18,7.78 C17.468,7.301 16.771,7 16,7 L4,7 Z M4,4 C3.229,4 2.532,4.301 2,4.78 L2,4 C2,2.896 2.896,2 4,2 L16,2 C17.104,2 18,2.896 18,4 L18,4.78 C17.468,4.301 16.771,4 16,4 L4,4 Z"
				}))), "SpamIcon", Le.a),
				vt = X.a.wrapped(Xe.a, "UnblockIcon", Le.a),
				gt = X.a.wrapped(Fe.a, "UpvoteIcon", Le.a),
				_t = X.a.wrapped(We.a, "DownvoteIcon", Le.a),
				xt = e => (t, o) => {
					let {
						comment: n
					} = o;
					return "".concat(e).concat(n.id)
				},
				ft = e => "Comment-".concat(e, "--Modal--DeleteComment"),
				kt = Object(a.c)({
					currentUser: ct.i,
					isMod: (e, t) => {
						let {
							comment: o
						} = t;
						return !!Object(U.i)(e, {
							postId: o.postId
						})
					},
					isAuthorBlocked: (e, t) => {
						let {
							comment: o
						} = t;
						return Object(tt.c)(e, o.authorId)
					},
					isSimpleReply: ot.f,
					reportFlowIsOpen: (e, t) => {
						let {
							comment: o
						} = t;
						return e.reportFlow.postOrCommentId === o.id
					},
					approveTooltipId: xt("CommentChatPost--Approve--"),
					blockTooltipId: xt("CommentChatPost--Block--"),
					createTooltipId: xt("CommentChatPost--Create--"),
					editTooltipId: xt("CommentChatPost--Edit--"),
					replyTooltipId: xt("CommentChatPost--Reply--"),
					reportTooltipId: xt("CommentChatPost--Report--"),
					upvoteTooltipId: xt("CommentChatPost--Upvote--"),
					downvoteTooltipId: xt("CommentChatPost--Downvote--"),
					spamTooltipId: xt("CommentChatPost--Spam--"),
					removeTooltipId: xt("CommentChatPost--Remove--"),
					deleteTooltipId: xt("CommentChatPost--Delete--"),
					isDeleteModalOpen: (e, t) => {
						let {
							comment: o
						} = t;
						return Object(et.a)(e) === ft(o.id)
					},
					isUpvoteOnly: at,
					isUpvoteDownvote: it
				});
			var Et = Object(r.b)(kt, (e, t) => {
					let {
						comment: o,
						commentsPageKey: n,
						isLivestreaming: s
					} = t;
					return {
						onReplyClick: () => e(Object(m.ob)({
							parentCommentId: o.id,
							commentsPageKey: n,
							singleOpen: !0
						})),
						onReportClick: () => e(Object(xe.j)(o.id, void 0, s)),
						onHideTooltip: () => e(Object(fe.i)()),
						onShowTooltip: t => e(Object(fe.f)({
							tooltipId: t
						})),
						onEditClick: () => {
							const t = o.media && o.media.rteMode;
							n && e(Object(m.V)({
								commentId: o.id,
								draftKey: Object($.a)($e.c.edit, o.id),
								text: o.bodyMD || "",
								commentMode: t,
								commentsPageKey: n
							}))
						},
						onApproveClick: () => e(Object(m.H)(o.id)),
						onBlockClick: () => e(Object(ke.h)(o.author)),
						onUnblockClick: () => e(Object(ke.g)(o.author)),
						onUpvoteClick: () => e(Object(m.rb)(o.id)),
						onDownvoteClick: () => e(Object(m.T)(o.id)),
						onSpamClick: () => e(Object(m.cb)(o.id, !0)),
						onRemoveClick: () => e(Object(m.cb)(o.id, !1)),
						deleteComment: () => n && e(Object(m.db)(o.id, o.postId)),
						onDeleteClick: () => e(Object(_e.m)(ft(o.id))),
						toggleDeleteCommentModal: () => e(Object(_e.m)(ft(o.id)))
					}
				})(Object(Ue.c)(e => {
					const {
						comment: t,
						className: o,
						createTooltipId: n,
						currentUser: r,
						deleteComment: a,
						deleteTooltipId: c,
						editTooltipId: d,
						isAuthorBlocked: m,
						isDeleteModalOpen: p,
						isLivestreaming: u,
						isMod: h,
						isSimpleReply: C,
						onApproveClick: b,
						onBlockClick: v,
						onDeleteClick: g,
						onEditClick: _,
						onHideTooltip: x,
						onRemoveClick: f,
						onReplyClick: E,
						onReportClick: T,
						onShowTooltip: y,
						onSpamClick: I,
						onUnblockClick: w,
						onUpvoteClick: O,
						onDownvoteClick: j,
						reportFlowIsOpen: L,
						replyTooltipId: S,
						reportTooltipId: N,
						approveTooltipId: R,
						blockTooltipId: M,
						removeTooltipId: A,
						upvoteTooltipId: P,
						downvoteTooltipId: B,
						sendEvent: D,
						spamTooltipId: U,
						toggleDeleteCommentModal: W,
						timestampUpdateTrigger: F,
						isUpvoteOnly: H,
						isUpvoteDownvote: K
					} = e, V = !!r && r.id === t.authorId, q = Object(Be.b)(t), z = t.isApproved && q, Y = !t.bannedBy || t.bannedBy === i.k, G = {
						comment: t,
						onHideTooltip: x,
						onShowTooltip: y,
						sendEvent: D
					}, {
						voteState: J,
						score: X,
						isDeleted: $
					} = t, ee = !$ && (0 === X || 1 === X) && J === k.a.notVoted;
					return s.a.createElement("div", {
						className: o
					}, s.a.createElement("div", {
						className: Object(Q.a)(Le.a.Menu, {
							[Le.a.Livestreaming]: u
						})
					}, (t.bannedBy || q) && h && s.a.createElement(Me, lt({
						onClick: b,
						tooltipId: R,
						tooltipText: z ? Z.fbt._("Reapprove", null, {
							hk: "vlRqn"
						}) : Z.fbt._("Approve", null, {
							hk: "3Vc0Oh"
						}),
						trackingNoun: "approve"
					}, e), s.a.createElement(ut, null)), C && !t.isLocked && s.a.createElement(Me, lt({
						onClick: E,
						tooltipId: S,
						tooltipText: Z.fbt._("Reply", null, {
							hk: "14j3OR"
						}),
						trackingNoun: "reply"
					}, e), s.a.createElement(ht, null)), (H || K) && !u && ee && s.a.createElement(Me, lt({
						onClick: O,
						tooltipId: P,
						tooltipText: Z.fbt._("Upvote", null, {
							hk: "21XMb7"
						})
					}, e), s.a.createElement(gt, null)), K && !u && ee && s.a.createElement(Me, lt({
						onClick: j,
						tooltipId: B,
						tooltipText: Z.fbt._("Downvote", null, {
							hk: "k46Xu"
						})
					}, e), s.a.createElement(_t, null)), h && Y && s.a.createElement(Me, lt({
						onClick: I,
						tooltipId: U,
						tooltipText: Z.fbt._("Spam", null, {
							hk: "15R6K5"
						}),
						trackingNoun: "spam"
					}, e), s.a.createElement(bt, null)), !V && s.a.createElement(Me, lt({
						onClick: T,
						tooltipId: N,
						tooltipText: Z.fbt._("Report", null, {
							hk: "4oVcnd"
						}),
						trackingNoun: "report"
					}, e), s.a.createElement(mt, null)), L && s.a.createElement(De.a, {
						commentId: t.id,
						useLiveStreamingFlow: u,
						overlayCustomStyles: De.b,
						postId: t.postId,
						withOverlay: !0
					}), V && !u && s.a.createElement(Me, lt({
						onClick: _,
						tooltipId: d,
						tooltipText: Z.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						trackingNoun: "edit"
					}, G), s.a.createElement(pt, null)), h && Y ? s.a.createElement(Me, lt({
						onClick: f,
						tooltipId: A,
						tooltipText: t.bannedBy === i.k ? Z.fbt._("Confirm removal", null, {
							hk: "3q7g1J"
						}) : Z.fbt._("Remove", null, {
							hk: "1f2QZ6"
						}),
						trackingNoun: t.bannedBy === i.k ? "confirm_remove" : "remove"
					}, G), s.a.createElement(Ct, null)) : V && s.a.createElement(Me, lt({
						onClick: g,
						tooltipId: c,
						tooltipText: Z.fbt._("Delete", null, {
							hk: "48iIX1"
						}),
						trackingNoun: "delete"
					}, e), s.a.createElement(Ct, null)), p && s.a.createElement(Pe.a, {
						actionText: Z.fbt._("delete", null, {
							hk: "29yw7h"
						}),
						cancelActionText: Z.fbt._("keep", null, {
							hk: "1i62Aj"
						}),
						headerText: Z.fbt._("Delete comment", null, {
							hk: "4uv7tI"
						}),
						modalText: Z.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "227ya0"
						}),
						onConfirm: a,
						toggleModal: W,
						withOverlay: !0
					}), !u && s.a.createElement(Me, lt({
						onClick: () => m ? w() : v(),
						tooltipId: M,
						tooltipText: m ? Z.fbt._("Unblock User", null, {
							hk: "26F2c9"
						}) : Z.fbt._("Block User", null, {
							hk: "1XKY2A"
						}),
						trackingNoun: "sitewide_".concat(m ? "unblock" : "block")
					}, G), m ? s.a.createElement(vt, null) : s.a.createElement(dt, null))), !u && s.a.createElement(Ae, lt({}, e, {
						tooltipId: n,
						tooltipText: Object(ge.a)(t.created),
						timestampUpdateTrigger: F
					}), Object(l.d)(t.created)))
				})),
				Tt = o("./src/chat/helpers/dom.ts"),
				yt = o("./src/reddit/components/RichTextJsonChatReply/index.tsx"),
				It = o("./src/reddit/components/CommentsChat/Comment/Reply/index.m.less"),
				wt = o.n(It);
			const Ot = {},
				jt = X.a.wrapped(ue.a, "ChatIcon", wt.a),
				Lt = X.a.span("ReplyAuthor", wt.a),
				St = X.a.div("ReplyWrapper", wt.a);
			var Nt = Object(r.b)(() => Object(a.c)({
					comment: D.n
				}))(e => {
					let {
						comment: t,
						commentId: o,
						isLivestreaming: n,
						onReplyClick: r
					} = e;
					return t ? t.isDeleted ? s.a.createElement(St, null, s.a.createElement("span", {
						className: Object(Q.a)([wt.a.ReplyLinkBubble, wt.a.delete, {
							[wt.a.Livestreaming]: n
						}])
					}, s.a.createElement(so, null))) : s.a.createElement(St, null, s.a.createElement("a", {
						className: Object(Q.a)(wt.a.ReplyLinkBubble, {
							[wt.a.Livestreaming]: n
						}),
						href: t.permalink,
						rel: "noopener noreferrer",
						target: "_blank",
						onClick: Object(Tt.a)(() => r(t.id))
					}, s.a.createElement(jt, {
						userId: t.authorId
					}), s.a.createElement(Lt, null, t.author), s.a.createElement(yt.a, {
						className: wt.a.ReplyComment,
						key: "rich-text-".concat(o),
						content: Object(se.a)(t),
						rtJsonElementProps: Ot
					}))) : null
				}),
				Rt = o("./src/reddit/components/VerticalVotes/index.tsx"),
				Mt = o("./src/reddit/components/CommentsChat/Comment/Votes/index.m.less"),
				At = o.n(Mt);
			const Pt = X.a.wrapped(Rt.a, "ChatHorizontalVotes", At.a),
				Bt = Object(a.c)({
					isUpvoteOnly: at,
					isUpvoteDownvote: it
				});
			class Dt extends s.a.Component {
				render() {
					const {
						comment: e,
						handleVote: t,
						className: o,
						isUpvoteOnly: n,
						isUpvoteDownvote: r
					} = this.props, {
						voteState: a,
						score: i,
						isDeleted: c
					} = e, l = !(c || (0 === i || 1 === i) && a === k.a.notVoted);
					return (n || r) && l && s.a.createElement("div", {
						className: Object(Q.a)(At.a.ChatHorizontalVotesWrapper, o)
					}, s.a.createElement(Pt, {
						model: e,
						onVoteClick: t,
						downvoteButtonClassName: Object(Q.a)(At.a.DownvoteWrapper, {
							[At.a.UpvoteOnlyDownvoteWrapper]: !r
						}),
						isCustomIconDisabled: !0,
						scoreClassName: At.a.Score
					}))
				}
			}
			var Ut = Object(r.b)(Bt, (e, t) => {
					let {
						comment: o
					} = t;
					return {
						handleVote: t => {
							t === k.a.upvoted && e(Object(m.rb)(o.id)), t === k.a.downvoted && e(Object(m.T)(o.id))
						}
					}
				})(Object(Ue.c)(Dt)),
				Wt = o("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Ft = o("./src/reddit/contexts/PageLayer/index.tsx"),
				Ht = o("./src/reddit/controls/ErrorText/index.tsx"),
				Kt = o("./src/reddit/selectors/communityAwards.ts"),
				Vt = o("./src/reddit/selectors/userPrefs.ts"),
				qt = o("./src/reddit/components/CommentsChat/Comment/index.m.less"),
				zt = o.n(qt);
			const Yt = 250,
				Zt = 10,
				Gt = X.a.wrapped(Ht.b, "ErrorText", zt.a),
				Jt = X.a.wrapped(te.a, "TopMeta", zt.a),
				Qt = X.a.span("DeleteText", zt.a),
				Xt = X.a.wrapped(Nt, "Reply", zt.a),
				$t = Object(Ft.t)(),
				eo = Object(r.b)(() => Object(a.c)({
					associatedAward: (e, t) => {
						let {
							commentId: o
						} = t;
						const n = Object(D.n)(e, {
							commentId: o
						});
						if (!n) return;
						const {
							associatedAwardId: s
						} = n;
						return s ? Object(Kt.a)(e, s) : void 0
					},
					comment: D.n,
					errorMsgs: D.E,
					flair: D.e,
					isActive: (e, t) => {
						let {
							commentId: o
						} = t;
						return Boolean(e.shortcuts.activeCommentId && o === e.shortcuts.activeCommentId)
					},
					isEditing: D.z,
					prefersReducedAnimations: Vt.c,
					subreddit: Ft.q
				})),
				to = Object(ee.b)(e => ({
					renderingObjectInfo: e.comment || void 0
				}));
			class oo extends s.a.Component {
				constructor(e) {
					super(e), this.elemRef = s.a.createRef(), this.toggleBody = () => {
						const e = !this.state.isExpanded;
						this.setState({
							isExpanded: e
						})
					}, this.expandCollapsedComment = () => {
						const e = !this.state.isCollapsed;
						this.setState({
							isCollapsed: e
						})
					};
					const t = Boolean(e.comment && e.comment.collapsed);
					this.state = {
						isCollapsed: t,
						isExpanded: !1,
						isTruncated: !1
					}
				}
				componentDidMount() {
					this.elemRef && this.elemRef.current && this.elemRef.current.scrollHeight > Yt && !this.props.associatedAward && !this.props.isLivestreaming && this.setState({
						isTruncated: !0
					})
				}
				componentDidUpdate(e, t) {
					this.limitCommentBodyHeight(t)
				}
				limitCommentBodyHeight(e) {
					const {
						isExpanded: t,
						isTruncated: o
					} = this.state, n = t !== e.isExpanded || o !== e.isTruncated;
					if (this.elemRef && this.elemRef.current && n) {
						const e = this.elemRef.current;
						let o = Yt;
						if (t) {
							o = e.scrollHeight + Zt;
							const t = () => {
								e.style.maxHeight = null, e.removeEventListener("transitionend", t)
							};
							e.addEventListener("transitionend", t)
						}
						this.elemRef.current.style.maxHeight = "".concat(o, "px")
					}
				}
				render() {
					const {
						associatedAward: e,
						childrenInfo: t,
						comment: o,
						commentsPageKey: n,
						errorMsgs: r,
						flair: a,
						isActive: i,
						isEditing: c,
						isLivestreaming: d,
						postId: m,
						prefersReducedAnimations: p,
						renderedInOverlay: u,
						sendEvent: h,
						targetComment: C,
						timestampUpdateTrigger: b,
						addToRefList: v,
						onReplyClick: g
					} = this.props, {
						isCollapsed: _,
						isExpanded: x,
						isTruncated: f
					} = this.state;
					if (!o) return null;
					i && J()(() => this.elemRef.current && this.elemRef.current.focus()), J()(() => this.elemRef && this.elemRef.current && v && v(this.elemRef));
					const k = !c && !o.isDeleted,
						E = !!e,
						T = Object(Q.a)({
							[zt.a.CommentWrapper]: !d,
							[zt.a.CommentExpanded]: x,
							[zt.a.CommentTruncated]: f,
							[zt.a.HighlightTarget]: C,
							[zt.a.LivestreamingCommentWrapper]: d
						});
					return _ ? s.a.createElement(ve, {
						commentCount: 1,
						onClick: this.expandCollapsedComment
					}) : s.a.createElement("div", {
						id: C ? "targetComment" : void 0,
						ref: this.elemRef,
						tabIndex: 0,
						className: T
					}, c && s.a.createElement(Wt.a, {
						key: "chatCommentsForm",
						isLivestreaming: d,
						postId: m,
						sendEvent: h,
						draftKey: Object($.a)($e.c.edit, o.id),
						commentsPageKey: n,
						isEditing: c,
						comment: o
					}), k && s.a.createElement(s.a.Fragment, null, s.a.createElement(Jt, {
						childrenInfo: t,
						collapsedBecauseCrowdControl: !1,
						collapsed: !1,
						comment: o,
						commentsPageKey: n,
						compact: !0,
						flair: a,
						ignoreFlairPosition: !0,
						ignoreLock: !0,
						isLivestreaming: d,
						renderedInOverlay: u
					}, s.a.createElement(ue.a, {
						className: Object(Q.a)(zt.a.ChatIcon, {
							[zt.a.Livestreaming]: d
						}),
						isLivestreaming: d,
						userId: o.authorId
					})), o.parentId && s.a.createElement(Xt, {
						commentId: o.parentId,
						onReplyClick: g,
						isLivestreaming: d
					}), d && s.a.createElement("span", {
						className: zt.a.livestreamingTimeStamp
					}, Object(l.d)(o.created)), E && e && d ? s.a.createElement(pe, {
						award: e,
						comment: o,
						prefersReducedMotion: p
					}) : [s.a.createElement(re.a, {
						className: Object(Q.a)(zt.a.RichTextJson, {
							[zt.a.Livestreaming]: d
						}),
						content: Object(se.a)(o),
						key: "rich-text-".concat(o.id),
						rtJsonElementProps: to(this.props),
						useExplicitTextColor: d
					}), s.a.createElement(Et, {
						key: "Menu",
						className: Object(Q.a)(zt.a.Menu, {
							[zt.a.Livestreaming]: d
						}),
						comment: o,
						commentsPageKey: n,
						isLivestreaming: d,
						timestampUpdateTrigger: b
					})]), o.isDeleted && s.a.createElement(so, null), k && r && r.map((e, t) => s.a.createElement(Gt, {
						key: "".concat(t, "-").concat(e)
					}, e)), !c && f && s.a.createElement("button", {
						className: Object(Q.a)(zt.a.CommentReadMoreButton, {
							[zt.a.Livestreaming]: d
						}),
						onClick: this.toggleBody
					}, Z.fbt._("Read more", null, {
						hk: "3s9Bqf"
					})), !d && k && s.a.createElement(Ut, {
						className: Object(Q.a)({
							[zt.a.TruncatedVotesButton]: f && !x
						}),
						comment: o
					}))
				}
			}
			const no = $t(eo(oo)),
				so = e => {
					let {
						isLivestreaming: t
					} = e;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(ue.a, {
						className: Object(Q.a)(zt.a.ChatIcon, {
							[zt.a.Livestreaming]: t || !1
						}),
						trash: !0
					}), s.a.createElement(Qt, null, Z.fbt._("deleted", null, {
						hk: "4rQ3ZP"
					})))
				};
			var ro = no,
				ao = (o("./node_modules/core-js/modules/es6.symbol.js"), o("./node_modules/lodash/isEqual.js")),
				io = o.n(ao),
				co = o("./node_modules/lodash/last.js"),
				lo = o.n(co),
				mo = o("./src/reddit/controls/Button/index.tsx"),
				po = o("./src/reddit/components/CommentsChat/Scroller/index.m.less"),
				uo = o.n(po),
				ho = function(e, t) {
					var o = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (o[n[s]] = e[n[s]])
					}
					return o
				};
			const Co = X.a.div("ButtonWrapper", uo.a),
				bo = e => {
					let {
						top: t
					} = e;
					return s.a.createElement("span", {
						className: Object(Q.a)(uo.a.ChunkPlaceholder, {
							[uo.a.top]: t
						})
					}, Z.fbt._("Loading...", null, {
						hk: "2s97tt"
					}))
				},
				vo = e => {
					var {
						className: t,
						isLivestreaming: o,
						isLoading: n,
						setRef: r
					} = e, a = ho(e, ["className", "isLivestreaming", "isLoading", "setRef"]);
					return s.a.createElement("div", {
						ref: r,
						className: Object(Q.a)(t, {
							[uo.a.ScrollerWrapper]: !o,
							[uo.a.LivestreamingWrapper]: o,
							[uo.a.loading]: n
						})
					}, !n && a.isPrevLoading && !o && s.a.createElement(bo, {
						top: !0
					}), a.children, !n && a.isNextLoading && !o && s.a.createElement(bo, null))
				};
			class go extends s.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this._ref = s.a.createRef(), this._refBeforeActiveComments = s.a.createRef(), this._refNextActiveComments = s.a.createRef(), this.chunkSize = 50, this.loadedMore = !1, this.scrollTop = () => this.$ref ? Math.ceil(this.$ref.scrollTop) : 0, this.scrollHeight = () => this.$ref ? this.$ref.scrollHeight : 0, this.clientHeight = () => this.$ref ? this.$ref.clientHeight : 0, this.scrolledPosition = () => this.scrollHeight() - this.clientHeight() - this.scrollTop(), this.scrolledToTop = () => 0 === this.scrollTop(), this.scrolledToBottom = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
						return e >= t.scrolledPosition()
					}, this.scrollToLastBottomChunk = () => {
						const e = this.state.chunks.length - 1;
						e !== this.state.activeChunkIndex ? this.setState({
							activeChunkIndex: e
						}, () => {
							this.scrollToBottom(), this.hideNewComments(!0)
						}) : (this.scrollToBottom(), this.hideNewComments(!0))
					}, this.addScrollListener = () => this.$ref && this.$ref.addEventListener("wheel", this.onScroll), this.removeScrollListener = () => this.$ref && this.$ref.removeEventListener("wheel", this.onScroll), this.preventParentScroll = e => {
						e.preventDefault();
						const t = this.$ref && this.$ref.scrollTop + e.deltaY;
						this.scrollTo(t || 0)
					}, this.shouldLoadMoreData = () => {
						this.props.loadMore && this.scrolledToTop() && this.props.loadMore(), this.loadedMore = !(!this.scrolledToTop() || !this.props.hasMoreComments)
					}, this.onScroll = e => {
						this.preventParentScroll(e), this.setNextTopChunk(), this.setNextBottomChunk(), this.shouldLoadMoreData(), this.hideNewComments()
					}, this.state = {
						initialized: !1,
						list: this.props.children,
						chunks: this.splitChunks([...this.props.children]),
						activeChunkIndex: 0,
						newCommentsCount: 0
					}
				}
				get $ref() {
					return this._ref.current
				}
				get $refBeforeActiveComments() {
					return this._refBeforeActiveComments.current
				}
				get $refNextActiveComments() {
					return this._refNextActiveComments.current
				}
				scrollTo(e) {
					this.$ref && (this.$ref.scrollTo ? this.$ref.scrollTo({
						top: e
					}) : this.$ref.scrollTop = e)
				}
				scrollToBottom() {
					this.$ref && (this.$ref.scrollTo ? this.$ref.scrollTo({
						top: this.scrollHeight() - this.clientHeight()
					}) : this.$ref.scrollTop = this.scrollHeight())
				}
				scrolledToFirstTopChunk() {
					return !this.props.hasMoreComments && this.state.activeChunkIndex <= 1
				}
				scrolledToLastBottomChunk() {
					const e = this.state.chunks.length - 1;
					return this.state.activeChunkIndex + 1 >= e
				}
				scrollToTargetComment(e) {
					const t = Math.floor(this.clientHeight() / 2);
					if (void 0 !== e) return void this.scrollTo(e - t);
					const {
						targetCommentIndex: o,
						children: n
					} = this.props;
					if (n && n.length && void 0 !== o && n[o]) {
						const e = Math.floor(o / this.chunkSize);
						this.state.activeChunkIndex !== e && this.setState({
							activeChunkIndex: e
						});
						const n = document.querySelector("#targetComment").offsetTop;
						n > t ? this.scrollTo(n - t) : this.scrollTo(n)
					}
				}
				hideNewComments(e) {
					(this.state.newCommentsCount > 0 && this.scrolledToBottom() || e) && this.setState({
						newCommentsCount: 0
					})
				}
				splitChunks(e) {
					const t = [];
					for (; e.length;) t.push(e.splice(0, this.chunkSize));
					return t
				}
				setNextBottomScroll() {
					const e = this.$refNextActiveComments ? this.$refNextActiveComments.clientHeight : 0;
					this.scrollTo(this.scrollHeight() - this.clientHeight() - e)
				}
				setNextBottomChunk() {
					if (this.scrolledToBottom()) {
						const e = this.state.activeChunkIndex + 1,
							t = this.state.chunks.length - 1,
							o = e < t ? e : t;
						this.setState({
							activeChunkIndex: o
						}, this.setNextBottomScroll)
					}
				}
				setNextTopScroll() {
					this.scrollTo(this.$refBeforeActiveComments && this.$refBeforeActiveComments.clientHeight || 0)
				}
				setNextTopChunk() {
					if (this.scrolledToTop()) {
						const e = this.state.activeChunkIndex - 1,
							t = this.state.chunks.length - 1,
							o = t > e ? e : t;
						e >= 0 && this.setState({
							activeChunkIndex: o
						}, this.setNextTopScroll)
					}
				}
				getChunkIndexOnUpdate(e, t) {
					if (this.props && this.props.children.length && this.props.children[0] && this.props.children.length - e.children.length > 1) {
						const e = t.length - this.state.chunks.length,
							o = this.state.activeChunkIndex + e;
						if (e > 1) return o
					}
				}
				componentDidMount() {
					this.addScrollListener(), this.scrollToLastBottomChunk(), this.setState({
						initialized: !0
					}), this.scrollToTargetComment()
				}
				componentWillUnmount() {
					this.removeScrollListener()
				}
				getSnapshotBeforeUpdate(e) {
					const t = e.children.length !== this.props.children.length || !io()(h()(e.children), h()(this.props.children)) || !io()(lo()(e.children), lo()(this.props.children));
					return t ? {
						childrenAreNotEqual: t,
						scrolledBottom: this.scrolledToBottom(30)
					} : null
				}
				componentDidUpdate(e, t, o) {
					if (o && o.childrenAreNotEqual) {
						const t = this.splitChunks([...this.props.children]),
							n = this.getChunkIndexOnUpdate(e, t),
							s = this.props.children.length - e.children.length;
						this.setState({
							list: this.props.children,
							chunks: t,
							activeChunkIndex: n || this.state.activeChunkIndex,
							newCommentsCount: this.scrolledToBottom() || 1 !== s || this.loadedMore ? this.state.newCommentsCount : this.state.newCommentsCount + s
						}, () => {
							n && this.setNextTopScroll(), o.scrolledBottom && this.scrollToLastBottomChunk(), this.loadedMore = !1
						})
					}
				}
				render() {
					const {
						className: e,
						isLivestreaming: t
					} = this.props, o = this.state.newCommentsCount > 0 ? Object(Q.a)([uo.a.NewComments, uo.a.show]) : uo.a.NewComments;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(vo, {
						className: e,
						key: "chatScroller",
						chunkSize: this.chunkSize,
						isLoading: !this.state.initialized || !!this.props.isLoading,
						isPrevLoading: !this.scrolledToFirstTopChunk(),
						isLivestreaming: t,
						isNextLoading: !this.scrolledToLastBottomChunk(),
						setRef: this._ref
					}, s.a.createElement("div", {
						key: "beforeActiveCommentsSection",
						ref: this._refBeforeActiveComments,
						className: uo.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex - 1]), s.a.createElement("div", {
						key: "activeCommentsSection",
						className: uo.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex]), s.a.createElement("div", {
						key: "nextActiveCommentsSection",
						ref: this._refNextActiveComments,
						className: uo.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex + 1])), s.a.createElement(Co, null, s.a.createElement(mo.f, {
						className: o,
						onClick: () => this.scrollToLastBottomChunk()
					}, this.state.newCommentsCount, " ", Z.fbt._({
						"*": "NEW MESSAGES",
						_1: "NEW MESSAGE"
					}, [Z.fbt._plural(this.state.newCommentsCount)], {
						hk: "1bTJTr"
					}), "↓")))
				}
			}
			var _o = go,
				xo = o("./src/reddit/selectors/posts.ts");
			const fo = 6e4,
				ko = (e, t, o) => {
					let {
						authorId: n,
						id: s
					} = o;
					return e.includes(n) && !t.includes(s)
				},
				Eo = Object(a.c)({
					blockedRedditors: tt.a,
					blockedRedditorsPending: tt.b,
					chatCommentLinks: D.g,
					isPending: D.d,
					liveCommentsWebsocket: xo.L,
					moreCommentsLink: D.D
				}),
				To = Object(r.b)(Eo, (e, t) => ({
					onLiveCommentsSubscribe: (o, n, s) => e(q(o, n, s, t.subredditId)),
					offLiveCommentsSubscribe: (t, o) => e(((e, t) => async () => {
						N(0, t)
					})(0, o)),
					loadMoreComments: o => e(Object(m.Z)(t.commentsPageKey, o)),
					loadBlockedRedditors: () => e(Object(d.g)()),
					loadComments: async () => await e(Object(z.q)(t.postId, void 0, {
						sort: i.r.CHAT
					}, i.r.CHAT))
				}));
			class yo extends s.a.Component {
				constructor(e) {
					super(e), this._refList = {}, this._refScroller = s.a.createRef(), this._timestampUpdater = null, this.scrollToBottom = () => {
						this._refScroller && this._refScroller.current && this._refScroller.current.scrollToLastBottomChunk()
					}, e.loadBlockedRedditors(), this.loadMoreComments = this.loadMoreComments.bind(this), this.state = {
						expandedCommentIds: [],
						targetCommentIndex: void 0,
						timestampUpdateTrigger: Date.now()
					}
				}
				isTimestampUpdateNeeded() {
					const {
						chatCommentLinks: e
					} = this.props, t = e[e.length - 1], o = t && t.created;
					return !!o && Object(l.c)(o) < 2
				}
				deferTimestampUpdate() {
					this._timestampUpdater && this._timestampUpdater(), this._timestampUpdater = Object(c.a)(() => {
						this.isTimestampUpdateNeeded() ? this.setState({
							timestampUpdateTrigger: Date.now()
						}) : this._timestampUpdater && this._timestampUpdater()
					}, fo)
				}
				expandComment(e) {
					this.setState({
						expandedCommentIds: [...this.state.expandedCommentIds, e]
					})
				}
				UNSAFE_componentWillMount() {
					const {
						commentId: e,
						commentsPageKey: t,
						liveCommentsWebsocket: o,
						loadComments: n,
						onLiveCommentsSubscribe: s,
						postId: r
					} = this.props;
					o && (e && n(), s(t, o, r), this._subscribedPostId = r, this._subscribedLiveCommentsWebsocket = o)
				}
				componentWillUnmount() {
					const {
						offLiveCommentsSubscribe: e
					} = this.props;
					this._subscribedPostId && this._subscribedLiveCommentsWebsocket && (e(this._subscribedLiveCommentsWebsocket, this._subscribedPostId), this._timestampUpdater && this._timestampUpdater())
				}
				shouldComponentUpdate(e, t) {
					const {
						blockedRedditors: o,
						blockedRedditorsPending: n,
						chatCommentLinks: s,
						commentsPageKey: r,
						isLoading: a,
						isPending: i,
						postId: c,
						draftKey: l
					} = this.props, {
						expandedCommentIds: d,
						timestampUpdateTrigger: m
					} = this.state;
					return e.postId !== c || e.draftKey !== l || e.isLoading !== a || e.isPending !== i || e.blockedRedditorsPending !== n || e.commentsPageKey !== r || e.chatCommentLinks && e.chatCommentLinks.length !== s.length || e.blockedRedditors.ids && e.blockedRedditors.ids.length !== o.ids.length || t.expandedCommentIds.length !== d.length || t.timestampUpdateTrigger !== m
				}
				componentDidUpdate(e) {
					const {
						chatCommentLinks: t,
						commentId: o,
						commentsPageKey: n,
						liveCommentsWebsocket: s,
						offLiveCommentsSubscribe: r,
						onLiveCommentsSubscribe: a,
						postId: i
					} = this.props;
					if (i !== e.postId && (this._subscribedPostId && this._subscribedLiveCommentsWebsocket && r(this._subscribedLiveCommentsWebsocket, this._subscribedPostId), i && s && (a(n, s, i), this._subscribedPostId = i, this._subscribedLiveCommentsWebsocket = s)), this.deferTimestampUpdate(), o) {
						const e = Object(c.a)(() => {
							const {
								targetCommentIndex: n
							} = this.state;
							void 0 === n && (this.scrollToTargetComment(), o && t.forEach((e, t) => e.id === o && this.setState({
								targetCommentIndex: t
							})), e())
						}, 100)
					}
				}
				loadMoreComments() {
					const {
						loadMoreComments: e,
						moreCommentsLink: t,
						postId: o,
						sendEvent: n
					} = this.props;
					t && !t.pending && (e(t.moreCommentId), n(Oe("history", o)))
				}
				scrollToTargetComment(e) {
					if (e && this._refList[e] && this._refList[e].current && this._refScroller && this._refScroller.current) {
						const t = this._refList[e].current,
							o = t ? t.offsetTop : 0;
						return this._refScroller.current.scrollToTargetComment(o), void(t && t.focus())
					}
					const {
						commentId: t
					} = this.props, o = t && document.querySelector("#targetComment");
					o && this._refScroller && this._refScroller.current && this._refScroller.current.scrollToTargetComment(o.offsetTop)
				}
				render() {
					const {
						blockedRedditors: {
							ids: e
						},
						chatCommentLinks: t,
						className: o,
						commentId: n,
						commentsPageKey: r,
						emptyStateClassName: a,
						isLivestreaming: i,
						isLoading: c,
						isPending: l,
						postId: d,
						renderedInOverlay: m,
						sendEvent: p
					} = this.props, {
						expandedCommentIds: u,
						targetCommentIndex: h,
						timestampUpdateTrigger: C
					} = this.state, b = !(t && t.length || c || l);
					return s.a.createElement(s.a.Fragment, null, b ? s.a.createElement(Y.c, {
						className: a,
						isChat: !0
					}) : s.a.createElement(_o, {
						className: o,
						ref: this._refScroller,
						key: "comments-chat-scroller",
						isLivestreaming: i,
						isLoading: c || l,
						loadMore: this.loadMoreComments,
						hasMoreComments: !!this.props.moreCommentsLink,
						targetCommentIndex: h
					}, t.map(t => ko(e, u, t) ? s.a.createElement(ve, {
						commentCount: 1,
						key: "scroll-node-".concat(t.id),
						onClick: () => this.expandComment(t.id)
					}) : s.a.createElement(ro, {
						ref: t.id,
						key: "scroll-node-".concat(t.id),
						commentId: t.id,
						commentsPageKey: r,
						isLivestreaming: i,
						postId: d,
						renderedInOverlay: !!m,
						sendEvent: p,
						timestampUpdateTrigger: C,
						targetComment: t.id === n,
						addToRefList: e => this._refList[t.id] = e,
						onReplyClick: e => this.scrollToTargetComment(e)
					}))), this.props.children && this.props.children({
						scrollToBottom: this.scrollToBottom
					}))
				}
			}
			t.default = To(Object(Ue.c)(yo))
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return n
			})), o.d(t, "a", (function() {
				return s
			})), o.d(t, "b", (function() {
				return r
			}));
			const n = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				s = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				r = e => (e.numReports || 0) > 0
		},
		"./src/reddit/components/RichTextJsonChatReply/index.m.less": function(e, t, o) {
			e.exports = {
				Container: "qqC8Lcm050i_jAM3CePWY",
				container: "qqC8Lcm050i_jAM3CePWY"
			}
		},
		"./src/reddit/components/RichTextJsonChatReply/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/components/RichTextJson/index.tsx"),
				i = o("./src/reddit/components/RichTextJson/elements.tsx"),
				c = o("./src/reddit/components/RichTextJson/renderers.tsx"),
				l = o("./src/reddit/models/RichTextJson/index.ts");
			const d = e => s.a.createElement(i.f, null, e),
				m = e => {
					const t = [],
						o = e.c || [],
						n = o.length;
					for (let s = 0; s < n; s++) {
						const e = o[s];
						t.push(e.e === l.w ? e.t : Object(c.e)(e, {}, s))
					}
					return s.a.createElement(s.a.Fragment, null, t)
				},
				p = e => e.c && e.c.length ? s.a.createElement(s.a.Fragment, null, Object(c.i)(e.c, null, {})) : s.a.createElement("br", null);
			var u = o("./src/reddit/constants/elementClassNames.ts"),
				h = o("./src/reddit/components/RichTextJsonChatReply/index.m.less"),
				C = o.n(h);
			const b = o("./src/lib/lessComponent.tsx").a.div("Container", C.a),
				v = {
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
					content: o
				} = e, n = o.document, i = [], c = Object(a.b)(n), h = Object(a.c)(n);
				if (-1 !== c)
					for (let s = c; s <= h; s++) {
						const e = n[s],
							t = e && v[e.e];
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
								i.push(d(t));
								break;
							case l.k:
								i.push(m(e));
								break;
							case l.u:
								i.push(p(e))
						}
					}
				return s.a.createElement(b, {
					className: Object(r.a)(u.j, t)
				}, i)
			}
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, o) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, o) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return I
			})), o.d(t, "c", (function() {
				return w
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/lodash/uniqueId.js"),
				r = o.n(s),
				a = o("./node_modules/raf/index.js"),
				i = o.n(a),
				c = o("./node_modules/react/index.js"),
				l = o.n(c),
				d = o("./node_modules/react-redux/es/index.js"),
				m = o("./node_modules/reselect/es/index.js"),
				p = o("./src/lib/classNames/index.ts"),
				u = o("./src/reddit/actions/modal.ts"),
				h = o("./src/reddit/selectors/activeModalId.ts"),
				C = o("./src/higherOrderComponents/asModal/index.tsx"),
				b = o("./src/reddit/controls/Button/index.tsx"),
				v = o("./src/reddit/layout/row/Inline/index.tsx"),
				g = o("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				_ = o.n(g);
			var x = Object(C.a)(e => {
					const {
						children: t,
						title: o
					} = e;
					return l.a.createElement("div", {
						className: _.a.wrapper
					}, l.a.createElement(v.a, {
						className: _.a.titleRow
					}, o), l.a.createElement("div", {
						className: _.a.detailsContainer
					}, t), l.a.createElement(v.a, {
						className: _.a.buttonRow
					}, l.a.createElement(b.f, {
						className: _.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				f = o("./src/reddit/controls/ErrorText/index.m.less"),
				k = o.n(f);
			const E = Object(m.c)({
				activeModalId: h.a
			});
			class T extends l.a.Component {
				constructor(e) {
					super(e), this.spanRef = l.a.createRef(), this.toggleModal = () => {
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
						className: o,
						errorModalBody: s,
						errorModalTitle: r = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: a = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: i,
						textHasOverflowed: c
					} = this.state;
					return l.a.createElement("div", {
						className: Object(p.a)(k.a.wrapper, o)
					}, l.a.createElement("span", {
						className: k.a.description,
						ref: this.spanRef
					}, e), c && l.a.createElement("span", {
						className: k.a.moreText,
						onClick: this.toggleModal
					}, a), t === i && l.a.createElement(x, {
						onConfirmed: this.toggleModal,
						title: r
					}, s || e))
				}
			}
			const y = Object(d.b)(E, e => ({
					toggleErrorTextModal: t => e(Object(u.i)(t))
				}))(T),
				I = e => {
					const {
						className: t,
						errorClassName: o,
						errorModalTitle: n,
						fallbackMessage: s,
						messages: r = []
					} = e, a = r.length ? r : s ? [s] : [];
					return a.length ? l.a.createElement("div", {
						className: t
					}, a.map((e, t) => l.a.createElement(y, {
						className: o,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				w = e => l.a.createElement(I, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = y
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/constants/index.ts");

			function r(e) {
				let {
					apiError: t,
					isLoggedOut: o
				} = e;
				switch (t.type) {
					case s.E.AUTHORIZATION_ERROR:
						return o ? n.fbt._("You might need to be logged in to do that.", null, {
							hk: "1313fG"
						}) : n.fbt._("It looks like you aren't allowed to do that.", null, {
							hk: "5tQod"
						});
					case s.E.VALIDATION_ERROR:
						return n.fbt._("We weren't able to handle your request.", null, {
							hk: "4umMwv"
						});
					case s.E.NOT_FOUND_ERROR:
						return n.fbt._("Sorry, there doesn't seem to be anything here.", null, {
							hk: "2UmS4e"
						});
					case s.E.SERVER_ERROR:
						return n.fbt._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "1Sxl7y"
						});
					case s.E.LIKELY_UBLOCK_ERROR:
						return n.fbt._("It looks like one or more software blocking extensions you are using may be interfering with Reddit's ability to serve you content. Please try disabling them or changing the rules you use.", null, {
							hk: "6Gh68"
						});
					default:
						return n.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "FsWrq"
						})
				}
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, o) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return a
			})), o.d(t, "b", (function() {
				return i
			}));
			var n = o("./src/lib/classNames/index.ts"),
				s = o("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = o.n(s);
			const a = e => {
					let {
						isLoading: t
					} = e;
					return Object(n.a)(r.a.loadingBackground, {
						[r.a["m-loading"]]: t
					})
				},
				i = e => Object(n.a)(r.a.loadingBar, a(e))
		},
		"./src/reddit/icons/svgs/Approve/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "m17.707 5.6934-1.399-1.4c-.188-.188-.442-.293-.707-.293-.266 0-.52.105-.707.293l-6.994 6.993-2.793-2.793c-.39-.391-1.023-.391-1.414 0l-1.4 1.4c-.391.391-.391 1.024 0 1.414l4.9 4.9c.196.195.451.293.707.293s.512-.098.707-.293l9.1-9.1c.391-.391.391-1.023 0-1.414",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Ban/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M12.8172,7.49104 C12.8172,7.70304 12.7332,7.90704 12.5828,8.05664 L9.5196,11.11984 C9.3636,11.27584 9.1588,11.35424 8.954,11.35424 C8.7492,11.35424 8.5444,11.27584 8.3884,11.11984 L7.2572,9.98784 L2.966,14.27904 C2.8092,14.43584 2.6044,14.51344 2.4004,14.51344 C2.1956,14.51344 1.9908,14.43584 1.834,14.27904 C1.522,13.96704 1.522,13.46064 1.834,13.14784 L6.126,8.85664 L4.9948,7.72544 C4.682,7.41264 4.682,6.90704 4.9948,6.59424 L8.0572,3.53104 C8.3572,3.23104 8.8884,3.23104 9.1884,3.53104 L12.5828,6.92544 C12.7332,7.07504 12.8172,7.27904 12.8172,7.49104 Z M3.86328,6.26288 C3.65848,6.26288 3.45368,6.18448 3.29768,6.02848 C2.98488,5.71568 2.98488,5.21008 3.29768,4.89728 L6.36008,1.83408 C6.67288,1.52208 7.17928,1.52208 7.49128,1.83408 C7.80408,2.14688 7.80408,2.65328 7.49128,2.96528 L4.42888,6.02848 C4.27288,6.18448 4.06808,6.26288 3.86328,6.26288 Z M14.27968,8.62264 C14.59248,8.93544 14.59248,9.44104 14.27968,9.75384 L11.21728,12.81624 C11.06128,12.97224 10.85648,13.05064 10.65168,13.05064 C10.44688,13.05064 10.24208,12.97224 10.08608,12.81624 C9.77328,12.50424 9.77328,11.99784 10.08608,11.68504 L13.14848,8.62264 C13.46128,8.30984 13.96688,8.30984 14.27968,8.62264 Z"
			})))
		},
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
			t.a = e => {
				let {
					className: t
				} = e;
				return s.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, s.a.createElement("path", {
					d: "M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z"
				}), s.a.createElement("path", {
					d: "M17 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.36l1.76 1.83a.5.5 0 0 0 .75 0L13.64 16H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
				}))
			}
		},
		"./src/reddit/icons/svgs/Edit/index.m.less": function(e, t, o) {
			e.exports = {
				edit: "_3TGaJCWUjkbNuBqTHvrC05"
			}
		},
		"./src/reddit/icons/svgs/Flag/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("polygon", {
				fill: "inherit",
				points: "0 20 20 20 20 0 0 0",
				opacity: "0"
			}), s.a.createElement("path", {
				fill: "inherit",
				d: "M11.71875,3.14525 C14.60125,1.54375 18.75025,3.48025 18.75025,3.48025 L18.75025,13.55475 C18.75025,13.55475 14.86875,11.81975 11.71875,13.21975 C8.70525,14.55925 4.68725,12.88475 4.68725,12.88475 L4.68725,2.81025 C4.68725,2.81025 8.70525,4.81925 11.71875,3.14525 Z M2.75,18.75 C2.232,18.75 2,18.3305 2,17.8125 L2,2.8125 C2,2.2945 2.232,1.875 2.75,1.875 C3.268,1.875 3.5,2.2945 3.5,2.8125 L3.5,17.8125 C3.5,18.3305 3.268,18.75 2.75,18.75 Z"
			}))
		},
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement("g", null, s.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
		},
		"./src/reddit/icons/svgs/ReplyArrow/index.m.less": function(e, t, o) {
			e.exports = {
				icon: "c6SVS_wE2GjDv20G4oiHX"
			}
		},
		"./src/reddit/icons/svgs/Sparkle/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);

			function r(e) {
				return s.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("path", {
					d: "M10 0L11.4142 8.58579L20 10L11.4142 11.4142L10 20L8.58579 11.4142L0 10L8.58579 8.58579L10 0Z",
					fill: "inherit"
				}))
			}
		},
		"./src/reddit/icons/svgs/Star/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);

			function r(e) {
				return s.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 93 93",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("path", {
					d: "m81.4458 35.074-29.1976 11.7753 26.9134 16.3348-28.9722-12.3194 7.4803 30.5811-11.7754-29.1976-16.3347 26.9135 12.3193-28.9723-30.581 7.4803 29.1975-11.7754-26.9134-16.3347 28.9722 12.3193-7.4802-30.581 11.7753 29.1975 16.3348-26.9134-12.3194 28.9722z",
					clipRule: "evenodd",
					fill: "inherit",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/Star2/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);

			function r(e) {
				return s.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 55 55",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("path", {
					clipRule: "evenodd",
					d: "m27.3003.299194 2.4798 21.013306 16.6121-13.10519-13.1052 16.61209 21.0133 2.4798-21.0133 2.4798 13.1052 16.6121-16.6121-13.1052-2.4798 21.0133-2.4798-21.0133-16.61209 13.1052 13.10519-16.6121-21.013307-2.4798 21.013307-2.4798-13.10519-16.61209 16.61209 13.10519z",
					fill: "inherit",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/Unlock/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 17",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M14.9656 14.8328L13.6 13.4672V8.99847C13.6 8.55608 13.2416 8.19848 12.8 8.19848H12V6.59849C12 4.39291 10.2056 2.59853 8 2.59853C6.5712 2.59853 5.328 3.35852 4.624 4.49131L2.1656 2.03294C1.8528 1.72014 1.3472 1.72014 1.0344 2.03294C0.721605 2.34573 0.721605 2.85133 1.0344 3.16413L13.8344 15.964C13.9904 16.12 14.1952 16.1984 14.4 16.1984C14.6048 16.1984 14.8096 16.12 14.9656 15.964C15.2784 15.6512 15.2784 15.1456 14.9656 14.8328ZM4 8.19859H3.2C2.7584 8.19859 2.4 8.55619 2.4 8.99859V14.5986C2.4 15.041 2.7584 15.3986 3.2 15.3986H11.6688L4 7.72979V8.19859ZM10.4 6.59854C10.4 5.27534 9.32319 4.19854 7.99999 4.19854C7.00959 4.19854 6.15839 4.80174 5.79199 5.65934L8.33119 8.19853H10.4V6.59854Z"
			}))
		}
	}
]);
//# sourceMappingURL=ChatPost.90f3ee40660660ee7908.js.map