// https://www.redditstatic.com/desktop2x/ChatPost.655c5850c91daa97c1d0.js
// Retrieved at 3/11/2020, 3:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatPost"], {
		"./node_modules/lodash/_baseDelay.js": function(e, t) {
			var n = "Expected a function";
			e.exports = function(e, t, o) {
				if ("function" != typeof e) throw new TypeError(n);
				return setTimeout((function() {
					e.apply(void 0, o)
				}), t)
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, n, o, s) {
				return s(e, (function(e, s, a) {
					n = o ? (o = !1, e) : t(n, e, s, a)
				})), n
			}
		},
		"./node_modules/lodash/defer.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseDelay.js"),
				s = n("./node_modules/lodash/_baseRest.js")((function(e, t) {
					return o(e, 1, t)
				}));
			e.exports = s
		},
		"./node_modules/lodash/first.js": function(e, t, n) {
			e.exports = n("./node_modules/lodash/head.js")
		},
		"./node_modules/lodash/head.js": function(e, t) {
			e.exports = function(e) {
				return e && e.length ? e[0] : void 0
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_arrayReduce.js"),
				s = n("./node_modules/lodash/_baseEach.js"),
				a = n("./node_modules/lodash/_baseIteratee.js"),
				r = n("./node_modules/lodash/_baseReduce.js"),
				i = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var c = i(e) ? o : r,
					l = arguments.length < 3;
				return c(e, a(t, 4), n, l, s)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseTimes.js"),
				s = n("./node_modules/lodash/_castFunction.js"),
				a = n("./node_modules/lodash/toInteger.js"),
				r = 9007199254740991,
				i = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = a(e)) < 1 || e > r) return [];
				var n = i,
					l = c(e, i);
				t = s(t), e -= i;
				for (var d = o(l, t); ++n < e;) t(n);
				return d
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var o = n("./node_modules/lodash/toString.js"),
				s = 0;
			e.exports = function(e) {
				var t = ++s;
				return o(e) + t
			}
		},
		"./src/lib/setInterval/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e, t) {
				for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++) o[s - 2] = arguments[s];
				let a, r = !1;
				const i = async () => {
					o && o.length ? await e.call(window, ...o) : await e.call(window), r || (a = window.setTimeout(i, t))
				};
				return a = window.setTimeout(i, t), () => {
					r = !0, window.clearTimeout(a)
				}
			}
		},
		"./src/reddit/components/Comments/States/index.m.less": function(e, t, n) {
			e.exports = {
				CommentsPlaceholderContainer: "_2o0N1VHuLszWHqY5A8iayv",
				commentsPlaceholderContainer: "_2o0N1VHuLszWHqY5A8iayv",
				CommentPlaceholder: "_2114DnVtHe_0MtbEW85tnL",
				commentPlaceholder: "_2114DnVtHe_0MtbEW85tnL",
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
				LoadingFullPage: "_3kZ_esGcijvfnM9KjA27vj",
				loadingFullPage: "_3kZ_esGcijvfnM9KjA27vj",
				Upvote: "_1lwmFW6D9PmeT_QA-R5F_0",
				upvote: "_1lwmFW6D9PmeT_QA-R5F_0",
				Downvote: "_32W1DnzyRkYXP82ZO96H0V",
				downvote: "_32W1DnzyRkYXP82ZO96H0V",
				TopMetaPlaceholder: "_24vSs1yG3YhINbU6QRiFR9",
				topMetaPlaceholder: "_24vSs1yG3YhINbU6QRiFR9",
				CommentBodyPlaceholder: "_3S0qviXPTlIEUjYjSKT_Lb",
				commentBodyPlaceholder: "_3S0qviXPTlIEUjYjSKT_Lb"
			}
		},
		"./src/reddit/components/Comments/States/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return j
			})), n.d(t, "b", (function() {
				return L
			})), n.d(t, "g", (function() {
				return S
			})), n.d(t, "e", (function() {
				return M
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "f", (function() {
				return R
			})), n.d(t, "a", (function() {
				return q
			}));
			var o = n("./node_modules/lodash/times.js"),
				s = n.n(o),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/app/strings/index.ts"),
				l = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/actions/page.ts"),
				u = n("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/helpers/describeApiError/index.ts"),
				C = n("./src/reddit/helpers/path/index.ts"),
				g = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				b = n("./src/reddit/i18n/components.tsx"),
				v = n("./src/reddit/icons/fonts/Downvote/index.tsx"),
				x = n("./src/reddit/icons/fonts/Upvote/index.tsx"),
				f = n("./src/reddit/icons/svgs/Comments/index.tsx"),
				_ = n("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				E = n("./src/reddit/components/Comments/States/index.m.less"),
				k = n.n(E);
			const T = d.a.wrapped(f.a, "CommentsIcon", k.a),
				y = d.a.wrapped(_.a, "SnooFacepalm", k.a),
				I = d.a.p("EmptyTitle", k.a),
				w = d.a.p("ErrorTitle", k.a),
				O = d.a.p("EmptyText", k.a),
				j = e => {
					let {
						className: t,
						isChat: n
					} = e;
					return r.a.createElement("div", {
						className: Object(l.a)(k.a.StateContainer, t)
					}, r.a.createElement(T, null), r.a.createElement(I, null, r.a.createElement(b.c, null, "no ", n ? "messages" : "comments", " yet")), r.a.createElement(O, null, r.a.createElement(b.c, null, "Be the first to share what you think!")))
				},
				L = () => r.a.createElement("div", {
					className: k.a.StateContainer
				}, r.a.createElement(T, null), r.a.createElement(I, null, r.a.createElement(b.c, null, "no other discussions yet")), r.a.createElement(O, null, r.a.createElement(b.c, null, "Be the first to post the same link or crosspost in another community!"))),
				S = e => {
					let {
						link: t
					} = e;
					return r.a.createElement("div", {
						className: k.a.StateContainer
					}, r.a.createElement(T, null), r.a.createElement(I, null, r.a.createElement(b.c, null, "That comment is missing")), r.a.createElement(p.h, {
						to: Object(C.b)(t)
					}, r.a.createElement(b.c, null, "View all comments")))
				},
				M = Object(i.b)(null, (e, t) => {
					let {
						postId: n,
						commentId: o,
						sort: s
					} = t;
					return {
						onClick: () => e(Object(m.q)(n, o, {
							sort: s
						}, s))
					}
				})(e => {
					let {
						apiError: t,
						language: n,
						onClick: o
					} = e;
					return r.a.createElement("div", {
						className: k.a.StateContainer
					}, r.a.createElement(y, null), r.a.createElement(w, null, t ? Object(h.a)({
						apiError: t,
						language: n,
						isLoggedOut: !1
					}) : Object(c.a)(n, "comment.error")), r.a.createElement(p.f, {
						onClick: o
					}, r.a.createElement(b.c, null, "retry")))
				}),
				N = () => r.a.createElement("div", null, "500"),
				R = d.a.wrapped(e => {
					let {
						className: t
					} = e;
					return r.a.createElement("div", {
						className: t
					}, r.a.createElement(u.a, null))
				}, "LoadingFullPage", k.a),
				A = d.a.div("CommentsPlaceholderContainer", k.a),
				P = d.a.div("CommentPlaceholder", k.a),
				B = d.a.div("VoteColumn", k.a),
				D = d.a.div("TextColumn", k.a),
				W = d.a.wrapped(x.a, "Upvote", k.a),
				F = d.a.wrapped(v.a, "Downvote", k.a),
				U = () => r.a.createElement("div", {
					className: Object(l.a)(k.a.TopMetaPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				H = () => r.a.createElement("div", {
					className: Object(l.a)(k.a.CommentBodyPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				q = () => r.a.createElement(A, null, s()(10, e => r.a.createElement(P, {
					key: e
				}, r.a.createElement(B, null, r.a.createElement(W, null), r.a.createElement(F, null)), r.a.createElement(D, null, r.a.createElement(U, null), r.a.createElement(H, null)))))
		},
		"./src/reddit/components/CommentsChat/Comment/AwardComment/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/lessComponent.tsx"),
				c = (n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./src/config.ts")),
				l = n("./node_modules/lodash/memoize.js"),
				d = n.n(l),
				m = n("./src/lib/constants/index.ts"),
				u = ["FF4500", "0DD3BB", "24A0ED", "FFB000", "FF8717", "46D160", "25B79F", "0079D3", "4856A3", "C18D42", "A06A42", "46A508", "008985", "7193FF", "7E53C1", "FFD635", "DDBD37", "D4E815", "94E044", "FF66AC", "DB0064", "FF585B", "EA0027", "A5A4A4", "545452"],
				p = n("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				h = n.n(p);
			const C = i.a.div("Userpic", h.a);
			var g = d()(e => {
					const {
						userId: t
					} = e, {
						processingAvatarImageUrl: n
					} = c.a, o = (e => e.replace(m.wb.Account + "_", ""))(t), {
						avatar: a,
						color: r
					} = (e => {
						const t = u.length,
							n = parseInt(e, 36),
							o = n % 20 + 1,
							s = Math.floor(n / 20) % t;
						return {
							avatar: ("0" + o).slice(-2),
							color: u[s]
						}
					})(o), i = "".concat(n, "/avatar_default_").concat(a, "_").concat(r, ".png");
					return s.a.createElement(C, {
						style: {
							backgroundImage: "url(".concat(i, ")"),
							backgroundColor: "#".concat(r)
						}
					})
				}),
				b = n("./src/reddit/icons/svgs/Redditor/index.tsx"),
				v = n("./src/reddit/icons/svgs/Remove/index.tsx");
			const x = i.a.img("Userpic", h.a),
				f = Object(r.c)({
					account: e => e.user.account
				}),
				_ = Object(a.b)(f);
			t.a = i.a.wrapped(_(e => {
				let {
					account: t,
					className: n,
					height: o,
					isLivestreaming: a,
					trash: r,
					userId: i,
					width: c
				} = e;
				const l = a ? 36 : 20,
					d = {
						height: o || l,
						width: c || l,
						minWidth: c || l
					};
				return r ? s.a.createElement("div", {
					className: n,
					style: d
				}, s.a.createElement(v.a, {
					className: h.a.TrashIcon
				})) : i ? s.a.createElement("div", {
					className: n,
					style: d
				}, t && t.accountIcon && t.id === i ? s.a.createElement(x, {
					src: t.accountIcon,
					alt: "user icon"
				}) : s.a.createElement(g, {
					userId: i
				})) : s.a.createElement("div", {
					className: n,
					style: d
				}, t && t.accountIcon ? s.a.createElement(x, {
					src: t.accountIcon,
					alt: "user icon"
				}) : s.a.createElement(b.a, {
					className: h.a.ProfileIcon
				}))
			}), "ChatIcon", h.a)
		},
		"./src/reddit/components/CommentsChat/Comment/CollapsedComment/index.m.less": function(e, t, n) {
			e.exports = {
				CollapsedComment: "_3atwFTZjTzR7TeUGv2qiiK",
				collapsedComment: "_3atwFTZjTzR7TeUGv2qiiK"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/Menu/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CommentsChat/Comment/Reply/index.m.less": function(e, t, n) {
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
				delete: "YvyNyAbJVOuICmvKmRvEQ"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/index.m.less": function(e, t, n) {
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
				DeleteText: "_3NYb7Rn0lpswKMy5MQyLQd",
				deleteText: "_3NYb7Rn0lpswKMy5MQyLQd",
				Reply: "_3F-9o12RM4UV20egYU2h21",
				reply: "_3F-9o12RM4UV20egYU2h21",
				CommentTruncated: "_3PXAOD2xpFqPtI_Lvf2_yc",
				commentTruncated: "_3PXAOD2xpFqPtI_Lvf2_yc",
				CommentExpanded: "yvxBkSg0EB3OQJ-wQuj73",
				commentExpanded: "yvxBkSg0EB3OQJ-wQuj73"
			}
		},
		"./src/reddit/components/CommentsChat/Scroller/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CommentsChat/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				a = n("./node_modules/react-dom/index.js"),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/setInterval/index.ts"),
				d = n("./src/lib/timeAgo/index.ts"),
				m = n("./src/reddit/actions/blockedRedditors.ts"),
				u = n("./src/reddit/actions/comment/index.ts"),
				p = n("./src/lib/makeActionCreator/index.ts"),
				h = (n("./node_modules/core-js/modules/es6.array.sort.js"), n("./node_modules/lodash/first.js")),
				C = n.n(h),
				g = n("./node_modules/lodash/isArray.js"),
				b = n.n(g),
				v = n("./src/reddit/helpers/isComment.ts"),
				x = n("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				f = n("./src/reddit/models/Comment/index.ts"),
				_ = n("./src/reddit/models/Flair/index.ts"),
				E = n("./src/reddit/models/PostCreationForm/index.ts"),
				k = n("./src/reddit/models/Vote/index.ts");
			const T = e => {
					if (void 0 !== e.author && void 0 !== e.author_fullname && void 0 !== e.attribs && void 0 !== e.created_utc && void 0 !== e.name && void 0 !== e.subreddit_id && void 0 !== e.body && void 0 !== e.context && void 0 !== e.link_id && void 0 !== e.score) {
						const t = I(e.attribs);
						return {
							allAwardings: [],
							associatedAward: e.associated_award ? Object(x.b)(e.associated_award) : void 0,
							author: e.author,
							authorId: e.author_fullname,
							body: e.body_html,
							bodyMD: e.body,
							collapsed: Boolean(e.collapsed),
							collapsedBecauseCrowdControl: Boolean(e.collapsed_in_crowd_control),
							created: e.created_utc,
							distinguishType: y(t),
							id: e.name,
							isAdmin: t === f.c.Admin,
							isGildable: !1 !== e.can_gild,
							isOp: t === f.c.Submitter,
							isMod: t === f.c.Moderator,
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
								rteMode: E.h.RICH_TEXT
							},
							parentId: e.parent_id && Object(v.a)(e.parent_id) ? e.parent_id : null,
							permalink: e.context,
							postId: e.link_id,
							score: e.score,
							subredditId: e.subreddit_id,
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
				y = e => {
					switch (e) {
						case f.c.Admin:
							return c.C.ADMIN;
						case f.c.Moderator:
							return c.C.MODERATOR;
						case f.c.Alumni:
							return c.C.ALUMNI_ADMIN;
						default:
							return ""
					}
				},
				I = e => C()((e || []).filter(e => b()(e) && e.length >= 2).sort(e => e[0]).map(e => e[1])) || f.c.None;
			const w = (e, t, n) => {
				const o = {
						[t]: {}
					},
					{
						author: s,
						author_flair_background_color: a,
						author_flair_richtext: r,
						author_flair_template_id: i,
						author_flair_text: c,
						author_flair_text_color: l,
						author_flair_type: d
					} = n;
				if (s && d) {
					if (d === _.f.Richtext) {
						if (!a || !r) return;
						return {
							[t]: {
								[s]: {
									type: d,
									backgroundColor: a,
									cssClass: void 0,
									richtext: r,
									templateId: i,
									textColor: l
								}
							}
						}
					}
					if (d === _.f.Text) {
						if (!c) return o;
						return {
							[t]: {
								[s]: {
									type: d,
									backgroundColor: a,
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
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var O = n("./src/lib/env/index.ts");
			const j = new Map,
				L = e => e;
			var S;
			! function(e) {
				e.NEW_COMMENT = "new_comment", e.UPDATE_COMMENT = "update_comment", e.DELETE_COMMENT = "delete_comment", e.REMOVE_COMMENT = "remove_comment"
			}(S || (S = {}));
			const M = {
					backoffTime: 2e3,
					connectionAttempts: 0,
					jitterAmount: 3e3,
					maximumRetries: 9
				},
				N = (e, t) => {
					const n = L(t),
						o = j.get(n);
					o && o.socket && (o.isClosePlanned = !0, o.socket.close())
				},
				R = (e, t, n, o) => {
					const s = L(t),
						a = j.get(s);
					if (a && (a.socket.readyState === WebSocket.CONNECTING || a.socket.readyState === WebSocket.OPEN)) return;
					const r = {
						socket: new WebSocket(e),
						retries: n,
						uniqueId: t,
						url: e,
						isClosePlanned: !1
					};
					j.set(s, r), r.socket.addEventListener("open", () => {
						r.retries = Object.assign({}, M)
					}), r.socket.addEventListener("message", B.bind(null, o)), r.socket.addEventListener("close", A.bind(null, s, o)), r.socket.addEventListener("error", D.bind(null, s)), window && window.addEventListener("beforeunload", N.bind(null, e, t))
				},
				A = (e, t, n) => {
					const o = j.get(e);
					o && (o.isClosePlanned ? j.delete(e) : P(e, t))
				},
				P = (e, t) => {
					const n = j.get(e);
					if (!n) return;
					const {
						retries: {
							backoffTime: o,
							connectionAttempts: s,
							jitterAmount: a,
							maximumRetries: r
						},
						socket: i,
						uniqueId: c,
						url: l
					} = n;
					if (j.delete(e), s < r && i.readyState !== WebSocket.OPEN) {
						const e = o * Math.pow(2, s),
							r = Math.random() * a - a / 2,
							i = Math.round(e + r),
							d = Object.assign({}, n.retries, {
								connectionAttempts: s + 1
							});
						setTimeout(() => {
							R(l, c, d, t)
						}, i), O.a && console.debug("Connection reset, retrying in ".concat(i, "ms"))
					}
				},
				B = (e, t) => {
					if (t && t.data) try {
						e(JSON.parse(t.data))
					} catch (t) {
						O.a && console.error(t)
					}
				},
				D = (e, t) => {
					const n = j.get(e);
					n && n.isClosePlanned && n.socket && n.socket.readyState === WebSocket.CLOSED ? j.delete(e) : O.a && console.error(t)
				};
			var W = n("./src/reddit/selectors/comments.ts"),
				F = n("./src/reddit/selectors/moderatorPermissions.ts"),
				U = n("./src/reddit/actions/comment/websocket/constants.ts");
			const H = Object(p.a)(U.a),
				q = Object(p.a)(U.b),
				K = {},
				V = (e, t, n, o) => async (s, a) => {
					(e => {
						const {
							cb: t,
							url: n,
							uniqueId: o
						} = e;
						R(n, o, Object.assign({}, M), t)
					})({
						uniqueId: n,
						url: t,
						cb: t => {
							switch (t.type) {
								case S.NEW_COMMENT: {
									const n = t.payload.name,
										r = T(t.payload),
										i = a(),
										c = Object(W.n)(i, {
											commentId: n
										}),
										l = !(!n || !K[n]);
									if (r && !l) {
										const n = w(0, o, t.payload),
											a = t.payload.total_comment_count;
										if (void 0 === c) {
											const t = Object(W.x)(i, {
												commentsPageKey: e
											});
											s(H({
												authorFlair: n,
												comment: r,
												commentsPageKey: e,
												headCommentId: t,
												numComments: a
											}))
										} else s(q({
											authorFlair: n,
											comment: r,
											commentsPageKey: e,
											numComments: a
										}))
									}
									break
								}
								case S.UPDATE_COMMENT: {
									const n = t.payload.name,
										r = a(),
										i = Object(W.n)(r, {
											commentId: n
										}),
										c = T(t.payload);
									if (i && c) {
										const n = w(0, o, t.payload),
											a = t.payload.total_comment_count;
										s(q({
											authorFlair: n,
											comment: c,
											commentsPageKey: e,
											numComments: a
										}))
									}
									break
								}
								case S.DELETE_COMMENT: {
									const e = t.payload.name,
										n = a(),
										o = Object(W.n)(n, {
											commentId: e
										});
									o && !o.isDeleted ? s(Object(u.db)(o.id, o.postId)) : K[e] = S.DELETE_COMMENT;
									break
								}
								case S.REMOVE_COMMENT: {
									const e = t.payload.link_id,
										n = t.payload.name,
										o = a(),
										r = Object(W.n)(o, {
											commentId: n
										}),
										i = (o.user.account && o.user.account.id) === (r && r.authorId),
										c = !!e && !!Object(F.i)(o, {
											postId: e
										});
									!r || r.isRemoved && r.isDeleted || i || c ? K[n] = S.REMOVE_COMMENT : s(Object(u.db)(r.id, r.postId));
									break
								}
							}
						}
					})
				};
			var z = n("./src/reddit/actions/page.ts"),
				G = n("./src/reddit/components/Comments/States/index.tsx"),
				Y = n("./node_modules/fbt/lib/FbtPublic.js"),
				Z = n("./node_modules/lodash/defer.js"),
				J = n.n(Z),
				Q = n("./src/lib/classNames/index.ts"),
				X = n("./src/lib/lessComponent.tsx"),
				$ = n("./src/lib/makeDraftKey/index.ts"),
				ee = n("./src/lib/objectSelector/index.ts"),
				te = n("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				ne = n("./src/reddit/helpers/awards/message.ts"),
				oe = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				se = n("./src/reddit/components/RichTextJson/index.tsx");

			function ae(e) {
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

			function re(e) {
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

			function ie(e) {
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
			var ce = n("./src/reddit/components/CommentsChat/Comment/AwardComment/index.m.less"),
				le = n.n(ce);
			const de = Object(ee.b)(e => ({
					renderingObjectInfo: e.comment
				})),
				me = e => {
					const {
						award: t,
						comment: n
					} = e;
					let o = t.icon64 ? t.icon64.url : t.icon128 ? t.icon128.url : t.icon.url,
						a = "",
						r = !0,
						i = !1;
					return t.coinPrice < ne.a ? (a = le.a.silverTierAwardComment, r = !1, t.icon32 && (o = t.icon32.url)) : t.coinPrice < ne.b ? a = le.a.goldTierAwardComment : (a = le.a.platinumTierAwardComment, i = !0), s.a.createElement("div", {
						className: Object(Q.a)(le.a.awardComment, a)
					}, s.a.createElement("div", {
						className: le.a.imageContainer
					}, r && s.a.createElement(s.a.Fragment, null, s.a.createElement(re, {
						className: Object(Q.a)(le.a.backgroundAnimation, le.a.backgroundStar)
					}), s.a.createElement(ie, {
						className: Object(Q.a)(le.a.backgroundAnimation, le.a.backgroundStar, le.a.backgroundStar2)
					})), i && s.a.createElement(s.a.Fragment, null, s.a.createElement(ae, {
						className: Object(Q.a)(le.a.backgroundAnimation, le.a.backgroundSparkle, le.a.sparkleBottomLeft)
					}), s.a.createElement(ae, {
						className: Object(Q.a)(le.a.backgroundAnimation, le.a.backgroundSparkle, le.a.sparkleTopRight)
					}), s.a.createElement(ae, {
						className: Object(Q.a)(le.a.backgroundAnimation, le.a.backgroundSparkle, le.a.sparkleBottomRight)
					})), s.a.createElement("img", {
						src: o
					})), s.a.createElement(se.a, {
						className: le.a.awardCommentText,
						content: Object(oe.a)(n),
						key: "rich-text-".concat(n.id),
						rtJsonElementProps: de(e),
						useExplicitTextColor: !0
					}))
				};
			var ue = n("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				pe = n("./src/reddit/components/CommentsChat/Comment/CollapsedComment/index.m.less"),
				he = n.n(pe);
			const Ce = X.a.div("CollapsedComment", he.a);
			var ge = e => {
					let {
						commentCount: t,
						onClick: n
					} = e;
					return s.a.createElement(Ce, {
						onClick: n
					}, Y.fbt._("collapsed {collapsed message} (may be sensitive)", [Y.fbt._param("collapsed message", Y.fbt._({
						"*": "{message count} messages",
						_1: "message"
					}, [Y.fbt._plural(t, "message count")], {
						hk: "3SYWlH"
					}))], {
						hk: "3equVw"
					}))
				},
				be = n("./src/lib/humanizeDateTime/index.ts"),
				ve = n("./src/reddit/actions/postCreation/general.ts"),
				xe = n("./src/reddit/actions/reportFlow.ts"),
				fe = n("./src/reddit/actions/tooltip.ts"),
				_e = n("./src/reddit/actions/userBlocks.ts"),
				Ee = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				ke = n("./src/reddit/constants/tracking.ts"),
				Te = n("./src/reddit/selectors/telemetry.ts"),
				ye = n("./src/telemetry/models/Event.ts");
			const Ie = e => ({
					screen: Object(Te.screen)(e),
					profile: Object(Te.profile)(e),
					subreddit: Object(Te.subreddit)(e)
				}),
				we = (e, t) => n => ({
					action: "load",
					noun: e,
					post: Object(Te.post)(n, t),
					source: ye.b.ChatView,
					subreddit: Object(Te.subreddit)(n)
				});
			var Oe = n("./src/reddit/i18n/utils.ts"),
				je = n("./src/reddit/components/CommentsChat/Comment/Menu/index.m.less"),
				Le = n.n(je);

			function Se() {
				return (Se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Me = X.a.button("MenuItem", Le.a),
				Ne = X.a.a("MenuItemPermalink", Le.a),
				Re = e => {
					let {
						children: t,
						comment: n,
						onClick: o,
						onHideTooltip: a,
						onShowTooltip: r,
						sendEvent: i,
						tooltipId: c,
						tooltipText: l,
						trackingNoun: d
					} = e;
					return s.a.createElement(Me, {
						id: c,
						onMouseEnter: r.bind(void 0, c),
						onMouseLeave: a.bind(void 0, c),
						onClick: e => {
							o(e), d && (i(((e, t) => n => Object.assign({
								source: "comment",
								action: ke.c.CLICK,
								noun: e,
								post: Object(Te.post)(n, t),
								comment: Object(Te.comment)(n, t)
							}, Ie(n)))(d, n.id)), i(((e, t) => n => Object.assign({
								source: "comment_overflow_menu",
								action: ke.c.CLICK,
								noun: e,
								post: Object(Te.post)(n, t),
								comment: Object(Te.comment)(n, t)
							}, Ie(n)))(d, n.id)))
						}
					}, t, s.a.createElement(Ee.c, {
						tooltipId: c,
						text: l
					}))
				},
				Ae = e => s.a.createElement(Re, Se({
					onClick: e.onHideTooltip,
					tooltipId: e.tooltipId,
					tooltipText: Object(Oe.c)("Moderate")
				}, e), s.a.createElement(Ne, {
					href: e.comment.permalink,
					rel: "nofollow",
					target: "_blank"
				}, e.children));
			var Pe = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				Be = n("./src/reddit/components/ModModeReports/helpers.ts"),
				De = n("./src/reddit/components/ReportFlow/index.tsx"),
				We = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Fe = n("./src/reddit/icons/svgs/Approve/index.tsx"),
				Ue = n("./src/reddit/icons/svgs/Ban/index.tsx"),
				He = n("./src/reddit/icons/svgs/Edit/index.m.less"),
				qe = n.n(He);
			var Ke = e => s.a.createElement("svg", {
					className: Object(Q.a)(qe.a.edit, e.className),
					viewBox: "4 4 12 12"
				}, s.a.createElement("g", {
					transform: "translate(-68.000000, -207.000000)"
				}, s.a.createElement("path", {
					d: "M74,221.73128 L76.2632,221.73128 C76.4752,221.73128 76.6784,221.64728 76.8288,221.49688 L83.2968,215.02808 C83.6096,214.71528 83.6096,214.20968 83.2968,213.89688 L81.0344,211.63448 C80.7216,211.32168 80.216,211.32168 79.9032,211.63448 L73.4344,218.10328 C73.284,218.25288 73.2,218.45608 73.2,218.66888 L73.2,220.93128 C73.2,221.37368 73.5584,221.73128 74,221.73128"
				}))),
				Ve = n("./src/reddit/icons/svgs/Flag/index.tsx"),
				ze = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				Ge = n("./src/reddit/icons/svgs/ReplyArrow/index.m.less"),
				Ye = n.n(Ge);
			var Ze = e => s.a.createElement("svg", {
					className: Object(Q.a)(Ye.a.icon, e.className),
					viewBox: "0 0 511.63 511.631"
				}, s.a.createElement("path", {
					d: "M496.5,233.842c-30.841-76.706-114.112-115.06-249.823-115.06h-63.953V45.693c0-4.952-1.809-9.235-5.424-12.85 c-3.617-3.617-7.896-5.426-12.847-5.426c-4.952,0-9.235,1.809-12.85,5.426L5.424,179.021C1.809,182.641,0,186.922,0,191.871 c0,4.948,1.809,9.229,5.424,12.847L151.604,350.9c3.619,3.613,7.902,5.428,12.85,5.428c4.947,0,9.229-1.814,12.847-5.428 c3.616-3.614,5.424-7.898,5.424-12.848v-73.094h63.953c18.649,0,35.349,0.568,50.099,1.708c14.749,1.143,29.413,3.189,43.968,6.143 c14.564,2.95,27.224,6.991,37.979,12.135c10.753,5.144,20.794,11.756,30.122,19.842c9.329,8.094,16.943,17.7,22.847,28.839 c5.896,11.136,10.513,24.311,13.846,39.539c3.326,15.229,4.997,32.456,4.997,51.675c0,10.466-0.479,22.176-1.428,35.118 c0,1.137-0.236,3.375-0.715,6.708c-0.473,3.333-0.712,5.852-0.712,7.562c0,2.851,0.808,5.232,2.423,7.136 c1.622,1.902,3.86,2.851,6.714,2.851c3.046,0,5.708-1.615,7.994-4.853c1.328-1.711,2.561-3.806,3.71-6.283 c1.143-2.471,2.43-5.325,3.854-8.562c1.431-3.237,2.43-5.513,2.998-6.848c24.17-54.238,36.258-97.158,36.258-128.756 C511.63,291.039,506.589,259.344,496.5,233.842z"
				})),
				Je = n("./src/reddit/icons/svgs/Unlock/index.tsx"),
				Qe = n("./src/reddit/models/PostDraft/index.ts"),
				Xe = n("./src/reddit/selectors/activeModalId.ts"),
				$e = n("./src/reddit/selectors/blockedRedditors.ts"),
				et = n("./src/reddit/selectors/experiments/chatPost.ts"),
				tt = n("./src/reddit/selectors/user.ts");

			function nt() {
				return (nt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const ot = X.a.wrapped(Ue.a, "BlockIcon", Le.a),
				st = X.a.wrapped(Ve.a, "FlagIcon", Le.a),
				at = X.a.wrapped(Ke, "EditIcon", Le.a),
				rt = X.a.wrapped(Fe.a, "ApproveIcon", Le.a),
				it = X.a.wrapped(Ze, "ReplyIcon", Le.a),
				ct = X.a.wrapped(ze.a, "RemoveIcon", Le.a),
				lt = X.a.wrapped(e => s.a.createElement("svg", {
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
				dt = X.a.wrapped(Je.a, "UnblockIcon", Le.a),
				mt = e => (t, n) => {
					let {
						comment: o
					} = n;
					return "".concat(e).concat(o.id)
				},
				ut = e => "Comment-".concat(e, "--Modal--DeleteComment"),
				pt = Object(i.c)({
					currentUser: tt.i,
					isMod: (e, t) => {
						let {
							comment: n
						} = t;
						return !!Object(F.i)(e, {
							postId: n.postId
						})
					},
					isAuthorBlocked: (e, t) => {
						let {
							comment: n
						} = t;
						return Object($e.c)(e, n.authorId)
					},
					isSimpleReply: et.f,
					reportFlowIsOpen: (e, t) => {
						let {
							comment: n
						} = t;
						return e.reportFlow.postOrCommentId === n.id
					},
					approveTooltipId: mt("CommentChatPost--Approve--"),
					blockTooltipId: mt("CommentChatPost--Block--"),
					createTooltipId: mt("CommentChatPost--Create--"),
					editTooltipId: mt("CommentChatPost--Edit--"),
					replyTooltipId: mt("CommentChatPost--Reply--"),
					reportTooltipId: mt("CommentChatPost--Report--"),
					spamTooltipId: mt("CommentChatPost--Spam--"),
					removeTooltipId: mt("CommentChatPost--Remove--"),
					deleteTooltipId: mt("CommentChatPost--Delete--"),
					isDeleteModalOpen: (e, t) => {
						let {
							comment: n
						} = t;
						return Object(Xe.a)(e) === ut(n.id)
					}
				});
			var ht = Object(r.b)(pt, (e, t) => {
					let {
						comment: n,
						commentsPageKey: o,
						isLivestreaming: s
					} = t;
					return {
						onReplyClick: () => e(Object(u.ob)({
							parentCommentId: n.id,
							commentsPageKey: o,
							singleOpen: !0
						})),
						onReportClick: () => e(Object(xe.j)(n.id, void 0, s)),
						onHideTooltip: () => e(Object(fe.i)()),
						onShowTooltip: t => e(Object(fe.f)({
							tooltipId: t
						})),
						onEditClick: () => {
							const t = n.media && n.media.rteMode;
							o && e(Object(u.V)({
								commentId: n.id,
								draftKey: Object($.a)(Qe.c.edit, n.id),
								text: n.bodyMD || "",
								commentMode: t,
								commentsPageKey: o
							}))
						},
						onApproveClick: () => e(Object(u.H)(n.id)),
						onBlockClick: () => e(Object(_e.h)(n.author)),
						onUnblockClick: () => e(Object(_e.g)(n.author)),
						onSpamClick: () => e(Object(u.cb)(n.id, !0)),
						onRemoveClick: () => e(Object(u.cb)(n.id, !1)),
						deleteComment: () => o && e(Object(u.db)(n.id, n.postId)),
						onDeleteClick: () => e(Object(ve.m)(ut(n.id))),
						toggleDeleteCommentModal: () => e(Object(ve.m)(ut(n.id)))
					}
				})(Object(We.b)(e => {
					const {
						comment: t,
						className: n,
						createTooltipId: o,
						currentUser: a,
						deleteComment: r,
						deleteTooltipId: i,
						editTooltipId: l,
						isAuthorBlocked: m,
						isDeleteModalOpen: u,
						isLivestreaming: p,
						isMod: h,
						isSimpleReply: C,
						language: g,
						onApproveClick: b,
						onBlockClick: v,
						onDeleteClick: x,
						onEditClick: f,
						onHideTooltip: _,
						onRemoveClick: E,
						onReplyClick: k,
						onReportClick: T,
						onShowTooltip: y,
						onSpamClick: I,
						onUnblockClick: w,
						reportFlowIsOpen: O,
						replyTooltipId: j,
						reportTooltipId: L,
						approveTooltipId: S,
						blockTooltipId: M,
						removeTooltipId: N,
						sendEvent: R,
						spamTooltipId: A,
						toggleDeleteCommentModal: P,
						timestampUpdateTrigger: B
					} = e, D = !!a && a.id === t.authorId, W = Object(Be.b)(t), F = t.isApproved && W, U = !t.bannedBy || t.bannedBy === c.k, H = {
						comment: t,
						onHideTooltip: _,
						onShowTooltip: y,
						sendEvent: R
					};
					return s.a.createElement("div", {
						className: n
					}, s.a.createElement("div", {
						className: Object(Q.a)(Le.a.Menu, {
							[Le.a.Livestreaming]: p
						})
					}, (t.bannedBy || W) && h && !p && s.a.createElement(Re, nt({
						onClick: b,
						tooltipId: S,
						tooltipText: F ? Y.fbt._("Reapprove", null, {
							hk: "vlRqn"
						}) : Y.fbt._("Approve", null, {
							hk: "3Vc0Oh"
						}),
						trackingNoun: "approve"
					}, e), s.a.createElement(rt, null)), C && !t.isLocked && !p && s.a.createElement(Re, nt({
						onClick: k,
						tooltipId: j,
						tooltipText: Y.fbt._("Reply", null, {
							hk: "14j3OR"
						}),
						trackingNoun: "reply"
					}, e), s.a.createElement(it, null)), h && U && !p && s.a.createElement(Re, nt({
						onClick: I,
						tooltipId: A,
						tooltipText: Y.fbt._("Spam", null, {
							hk: "15R6K5"
						}),
						trackingNoun: "spam"
					}, e), s.a.createElement(lt, null)), !D && s.a.createElement(Re, nt({
						onClick: T,
						tooltipId: L,
						tooltipText: Y.fbt._("Report", null, {
							hk: "OHiOO"
						}),
						trackingNoun: "report"
					}, e), s.a.createElement(st, null)), O && s.a.createElement(De.a, {
						commentId: t.id,
						useLiveStreamingFlow: p,
						overlayCustomStyles: De.b,
						postId: t.postId,
						withOverlay: !0
					}), D && !p && s.a.createElement(Re, nt({
						onClick: f,
						tooltipId: l,
						tooltipText: Y.fbt._("Edit", null, {
							hk: "30rf1x"
						}),
						trackingNoun: "edit"
					}, H), s.a.createElement(at, null)), p ? null : h && U ? s.a.createElement(Re, nt({
						onClick: E,
						tooltipId: N,
						tooltipText: t.bannedBy === c.k ? Y.fbt._("Confirm removal", null, {
							hk: "3q7g1J"
						}) : Y.fbt._("Remove", null, {
							hk: "1f2QZ6"
						}),
						trackingNoun: t.bannedBy === c.k ? "confirm_remove" : "remove"
					}, H), s.a.createElement(ct, null)) : D && s.a.createElement(Re, nt({
						onClick: x,
						tooltipId: i,
						tooltipText: Y.fbt._("Delete", null, {
							hk: "48iIX1"
						}),
						trackingNoun: "delete"
					}, e), s.a.createElement(ct, null)), u && s.a.createElement(Pe.a, {
						actionText: Y.fbt._("delete", null, {
							hk: "29yw7h"
						}),
						cancelActionText: Y.fbt._("keep", null, {
							hk: "1i62Aj"
						}),
						headerText: Y.fbt._("Delete comment", null, {
							hk: "4uv7tI"
						}),
						modalText: Y.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "227ya0"
						}),
						onConfirm: r,
						toggleModal: P,
						withOverlay: !0
					}), !p && s.a.createElement(Re, nt({
						onClick: () => m ? w() : v(),
						tooltipId: M,
						tooltipText: m ? Y.fbt._("Unblock User", null, {
							hk: "26F2c9"
						}) : Y.fbt._("Block User", null, {
							hk: "1XKY2A"
						}),
						trackingNoun: "sitewide_".concat(m ? "unblock" : "block")
					}, H), m ? s.a.createElement(dt, null) : s.a.createElement(ot, null))), !p && s.a.createElement(Ae, nt({}, e, {
						tooltipId: o,
						tooltipText: Object(be.a)(t.created),
						timestampUpdateTrigger: B
					}), Object(d.d)(g, t.created)))
				})),
				Ct = n("./src/reddit/components/RichTextJsonChatReply/index.tsx"),
				gt = n("./src/reddit/components/CommentsChat/Comment/Reply/index.m.less"),
				bt = n.n(gt);
			const vt = {},
				xt = X.a.wrapped(ue.a, "ChatIcon", bt.a),
				ft = X.a.span("ReplyAuthor", bt.a),
				_t = X.a.div("ReplyWrapper", bt.a);
			var Et = Object(r.b)(() => Object(i.c)({
					comment: W.n
				}))(e => {
					let {
						comment: t,
						commentId: n
					} = e;
					return t ? t.isDeleted ? s.a.createElement(_t, null, s.a.createElement("span", {
						className: Object(Q.a)([bt.a.ReplyLinkBubble, bt.a.delete])
					}, s.a.createElement(Ft, null))) : s.a.createElement(_t, null, s.a.createElement("a", {
						className: bt.a.ReplyLinkBubble,
						href: t.permalink,
						rel: "noopener noreferrer",
						target: "_blank"
					}, s.a.createElement(xt, {
						userId: t.authorId
					}), s.a.createElement(ft, null, t.author), s.a.createElement(Ct.a, {
						className: bt.a.ReplyComment,
						key: "rich-text-".concat(n),
						content: Object(oe.a)(t),
						rtJsonElementProps: vt
					}))) : null
				}),
				kt = n("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Tt = n("./src/reddit/contexts/PageLayer/index.tsx"),
				yt = n("./src/reddit/controls/ErrorText/index.tsx"),
				It = n("./src/reddit/selectors/communityAwards.ts"),
				wt = n("./src/reddit/components/CommentsChat/Comment/index.m.less"),
				Ot = n.n(wt);
			const jt = 250,
				Lt = 10,
				St = X.a.wrapped(yt.b, "ErrorText", Ot.a),
				Mt = X.a.wrapped(te.a, "TopMeta", Ot.a),
				Nt = X.a.span("DeleteText", Ot.a),
				Rt = X.a.wrapped(Et, "Reply", Ot.a),
				At = Object(Tt.t)(),
				Pt = Object(r.b)(() => Object(i.c)({
					associatedAward: (e, t) => {
						let {
							commentId: n
						} = t;
						const o = Object(W.n)(e, {
							commentId: n
						});
						if (!o) return;
						const {
							associatedAwardId: s
						} = o;
						return s ? Object(It.a)(e, s) : void 0
					},
					comment: W.n,
					errorMsgs: W.E,
					flair: W.e,
					isActive: (e, t) => {
						let {
							commentId: n
						} = t;
						return Boolean(e.shortcuts.activeCommentId && n === e.shortcuts.activeCommentId)
					},
					isEditing: W.z,
					language: tt.O,
					subreddit: Tt.q
				})),
				Bt = Object(ee.b)(e => ({
					renderingObjectInfo: e.comment || void 0
				}));
			class Dt extends s.a.Component {
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
					this.elemRef && this.elemRef.current && this.elemRef.current.scrollHeight > jt && !this.props.associatedAward && this.setState({
						isTruncated: !0
					})
				}
				componentDidUpdate(e, t) {
					this.limitCommentBodyHeight(t)
				}
				limitCommentBodyHeight(e) {
					const {
						isExpanded: t,
						isTruncated: n
					} = this.state, o = t !== e.isExpanded || n !== e.isTruncated;
					if (this.elemRef && this.elemRef.current && o) {
						const e = this.elemRef.current;
						let n = jt;
						if (t) {
							n = e.scrollHeight + Lt;
							const t = () => {
								e.style.maxHeight = null, e.removeEventListener("transitionend", t)
							};
							e.addEventListener("transitionend", t)
						}
						this.elemRef.current.style.maxHeight = "".concat(n, "px")
					}
				}
				render() {
					const {
						associatedAward: e,
						childrenInfo: t,
						comment: n,
						commentsPageKey: o,
						errorMsgs: a,
						flair: r,
						isActive: i,
						isEditing: c,
						isLivestreaming: l,
						language: m,
						postId: u,
						renderedInOverlay: p,
						sendEvent: h,
						targetComment: C,
						timestampUpdateTrigger: g
					} = this.props, {
						isCollapsed: b,
						isExpanded: v,
						isTruncated: x
					} = this.state;
					if (!n) return null;
					i && J()(() => this.elemRef.current && this.elemRef.current.focus());
					const f = !c && !n.isDeleted,
						_ = !!e,
						E = Object(Q.a)({
							[Ot.a.CommentWrapper]: !l,
							[Ot.a.CommentExpanded]: v,
							[Ot.a.CommentTruncated]: x,
							[Ot.a.HighlightTarget]: C,
							[Ot.a.LivestreamingCommentWrapper]: l
						});
					return b ? s.a.createElement(ge, {
						commentCount: 1,
						onClick: this.expandCollapsedComment
					}) : s.a.createElement("div", {
						id: C ? "targetComment" : void 0,
						ref: this.elemRef,
						tabIndex: 0,
						className: E
					}, c && s.a.createElement(kt.a, {
						key: "chatCommentsForm",
						isLivestreaming: l,
						language: m,
						postId: u,
						sendEvent: h,
						draftKey: Object($.a)(Qe.c.edit, n.id),
						commentsPageKey: o,
						isEditing: c,
						comment: n
					}), f && s.a.createElement(s.a.Fragment, null, s.a.createElement(Mt, {
						childrenInfo: t,
						collapsedBecauseCrowdControl: !1,
						collapsed: !1,
						comment: n,
						commentsPageKey: o,
						compact: !0,
						flair: r,
						ignoreFlairPosition: !0,
						ignoreLock: !0,
						isLivestreaming: l,
						language: m,
						renderedInOverlay: p
					}, s.a.createElement(ue.a, {
						className: Object(Q.a)(Ot.a.ChatIcon, {
							[Ot.a.Livestreaming]: l
						}),
						isLivestreaming: l,
						userId: n.authorId
					})), n.parentId && s.a.createElement(Rt, {
						commentId: n.parentId
					}), l && s.a.createElement("span", {
						className: Ot.a.livestreamingTimeStamp
					}, Object(d.d)(m, n.created)), _ && e && l ? s.a.createElement(me, {
						award: e,
						comment: n
					}) : [s.a.createElement(se.a, {
						className: Object(Q.a)(Ot.a.RichTextJson, {
							[Ot.a.Livestreaming]: l
						}),
						content: Object(oe.a)(n),
						key: "rich-text-".concat(n.id),
						rtJsonElementProps: Bt(this.props),
						useExplicitTextColor: l
					}), s.a.createElement(ht, {
						key: "Menu",
						className: Ot.a.Menu,
						comment: n,
						commentsPageKey: o,
						isLivestreaming: l,
						language: m,
						timestampUpdateTrigger: g
					})]), n.isDeleted && s.a.createElement(Ft, null), f && a && a.map(e => s.a.createElement(St, {
						language: m
					}, e)), !c && x && s.a.createElement("button", {
						className: Object(Q.a)(Ot.a.CommentReadMoreButton, {
							[Ot.a.Livestreaming]: l
						}),
						onClick: this.toggleBody
					}, Y.fbt._("Read more", null, {
						hk: "3s9Bqf"
					})))
				}
			}
			const Wt = At(Pt(Dt)),
				Ft = e => {
					let {
						isLivestreaming: t
					} = e;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(ue.a, {
						className: Object(Q.a)(Ot.a.ChatIcon, {
							[Ot.a.Livestreaming]: t || !1
						}),
						trash: !0
					}), s.a.createElement(Nt, null, Y.fbt._("deleted", null, {
						hk: "4rQ3ZP"
					})))
				};
			var Ut = Wt,
				Ht = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./node_modules/lodash/isEqual.js")),
				qt = n.n(Ht),
				Kt = n("./node_modules/lodash/last.js"),
				Vt = n.n(Kt),
				zt = n("./src/reddit/controls/Button/index.tsx"),
				Gt = n("./src/reddit/components/CommentsChat/Scroller/index.m.less"),
				Yt = n.n(Gt),
				Zt = function(e, t) {
					var n = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
					}
					return n
				};
			const Jt = X.a.div("ButtonWrapper", Yt.a),
				Qt = e => {
					let {
						top: t
					} = e;
					return s.a.createElement("span", {
						className: Object(Q.a)(Yt.a.ChunkPlaceholder, {
							[Yt.a.top]: t
						})
					}, Object(Oe.c)("Loading..."))
				},
				Xt = e => {
					var {
						className: t,
						isLivestreaming: n,
						isLoading: o,
						setRef: a
					} = e, r = Zt(e, ["className", "isLivestreaming", "isLoading", "setRef"]);
					return s.a.createElement("div", {
						ref: a,
						className: Object(Q.a)(t, {
							[Yt.a.ScrollerWrapper]: !n,
							[Yt.a.LivestreamingWrapper]: n,
							[Yt.a.loading]: o
						})
					}, !o && r.isPrevLoading && !n && s.a.createElement(Qt, {
						top: !0
					}), r.children, !o && r.isNextLoading && !n && s.a.createElement(Qt, null))
				};
			class $t extends s.a.Component {
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
						targetCommentIndex: n,
						children: o
					} = this.props;
					if (o && o.length && void 0 !== n && o[n]) {
						const e = Math.floor(n / this.chunkSize);
						this.state.activeChunkIndex !== e && this.setState({
							activeChunkIndex: e
						});
						const o = document.querySelector("#targetComment").offsetTop;
						o > t ? this.scrollTo(o - t) : this.scrollTo(o)
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
							n = e < t ? e : t;
						this.setState({
							activeChunkIndex: n
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
							n = t > e ? e : t;
						e >= 0 && this.setState({
							activeChunkIndex: n
						}, this.setNextTopScroll)
					}
				}
				getChunkIndexOnUpdate(e, t) {
					if (this.props && this.props.children.length && this.props.children[0] && this.props.children.length - e.children.length > 1) {
						const e = t.length - this.state.chunks.length,
							n = this.state.activeChunkIndex + e;
						if (e > 1) return n
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
					const t = e.children.length !== this.props.children.length || !qt()(C()(e.children), C()(this.props.children)) || !qt()(Vt()(e.children), Vt()(this.props.children));
					return t ? {
						childrenAreNotEqual: t,
						scrolledBottom: this.scrolledToBottom(30)
					} : null
				}
				componentDidUpdate(e, t, n) {
					if (n && n.childrenAreNotEqual) {
						const t = this.splitChunks([...this.props.children]),
							o = this.getChunkIndexOnUpdate(e, t),
							s = this.props.children.length - e.children.length;
						this.setState({
							list: this.props.children,
							chunks: t,
							activeChunkIndex: o || this.state.activeChunkIndex,
							newCommentsCount: this.scrolledToBottom() || 1 !== s || this.loadedMore ? this.state.newCommentsCount : this.state.newCommentsCount + s
						}, () => {
							o && this.setNextTopScroll(), n.scrolledBottom && this.scrollToLastBottomChunk(), this.loadedMore = !1
						})
					}
					this.scrollToTargetComment()
				}
				render() {
					const {
						className: e,
						isLivestreaming: t
					} = this.props, n = this.state.newCommentsCount > 0 ? Object(Q.a)([Yt.a.NewComments, Yt.a.show]) : Yt.a.NewComments;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(Xt, {
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
						className: Yt.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex - 1]), s.a.createElement("div", {
						key: "activeCommentsSection",
						className: Yt.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex]), s.a.createElement("div", {
						key: "nextActiveCommentsSection",
						ref: this._refNextActiveComments,
						className: Yt.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex + 1])), s.a.createElement(Jt, null, s.a.createElement(zt.f, {
						className: n,
						onClick: () => this.scrollToLastBottomChunk()
					}, this.state.newCommentsCount, " ", Object(Oe.c)("NEW ".concat(Object(Oe.a)("MESSAGES", ["MESSAGE", "MESSAGES"], this.state.newCommentsCount))), "↓")))
				}
			}
			var en = $t,
				tn = n("./src/reddit/selectors/posts.ts");
			n.d(t, "COMMENT_TIMESTAMP_UPDATE_INTERVAL", (function() {
				return nn
			}));
			const nn = 6e4,
				on = (e, t, n) => {
					let {
						authorId: o,
						id: s
					} = n;
					return e.includes(o) && !t.includes(s)
				},
				sn = Object(i.c)({
					blockedRedditors: $e.a,
					blockedRedditorsPending: $e.b,
					chatCommentLinks: W.g,
					isPending: W.d,
					liveCommentsWebsocket: tn.J,
					moreCommentsLink: W.D
				}),
				an = Object(r.b)(sn, (e, t) => ({
					onLiveCommentsSubscribe: (n, o, s) => e(V(n, o, s, t.subredditId)),
					offLiveCommentsSubscribe: (t, n) => e(((e, t) => async () => {
						N(0, t)
					})(0, n)),
					loadMoreComments: n => e(Object(u.Z)(t.commentsPageKey, n)),
					loadBlockedRedditors: () => e(Object(m.g)()),
					loadComments: async () => await e(Object(z.q)(t.postId, void 0, {
						sort: c.r.CHAT
					}, c.r.CHAT))
				}));
			class rn extends s.a.Component {
				constructor(e) {
					super(e), this._refScroller = s.a.createRef(), this._timestampUpdater = null, this.scrollToBottom = () => {
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
					} = this.props, t = e[e.length - 1], n = t && t.created;
					return !!n && Object(d.c)(n) < 2
				}
				deferTimestampUpdate() {
					this._timestampUpdater && this._timestampUpdater(), this._timestampUpdater = Object(l.a)(() => {
						this.isTimestampUpdateNeeded() ? this.setState({
							timestampUpdateTrigger: Date.now()
						}) : this._timestampUpdater && this._timestampUpdater()
					}, nn)
				}
				expandComment(e) {
					this.setState({
						expandedCommentIds: [...this.state.expandedCommentIds, e]
					})
				}
				componentWillMount() {
					const {
						commentId: e,
						commentsPageKey: t,
						liveCommentsWebsocket: n,
						loadComments: o,
						onLiveCommentsSubscribe: s,
						postId: a
					} = this.props;
					n && (e && o(), s(t, n, a), this._subscribedPostId = a, this._subscribedLiveCommentsWebsocket = n)
				}
				componentWillUnmount() {
					const {
						offLiveCommentsSubscribe: e
					} = this.props;
					this._subscribedPostId && this._subscribedLiveCommentsWebsocket && (e(this._subscribedLiveCommentsWebsocket, this._subscribedPostId), this._timestampUpdater && this._timestampUpdater())
				}
				shouldComponentUpdate(e, t) {
					const {
						blockedRedditors: n,
						blockedRedditorsPending: o,
						chatCommentLinks: s,
						commentsPageKey: a,
						isLoading: r,
						isPending: i,
						postId: c,
						draftKey: l
					} = this.props, {
						expandedCommentIds: d,
						timestampUpdateTrigger: m
					} = this.state;
					return e.postId !== c || e.draftKey !== l || e.isLoading !== r || e.isPending !== i || e.blockedRedditorsPending !== o || e.commentsPageKey !== a || e.chatCommentLinks && e.chatCommentLinks.length !== s.length || e.blockedRedditors.ids && e.blockedRedditors.ids.length !== n.ids.length || t.expandedCommentIds.length !== d.length || t.timestampUpdateTrigger !== m
				}
				componentDidUpdate(e) {
					const {
						chatCommentLinks: t,
						commentId: n,
						commentsPageKey: o,
						liveCommentsWebsocket: s,
						offLiveCommentsSubscribe: a,
						onLiveCommentsSubscribe: r,
						postId: i
					} = this.props;
					if (i !== e.postId && (this._subscribedPostId && this._subscribedLiveCommentsWebsocket && a(this._subscribedLiveCommentsWebsocket, this._subscribedPostId), i && s && (r(o, s, i), this._subscribedPostId = i, this._subscribedLiveCommentsWebsocket = s)), this.deferTimestampUpdate(), n) {
						const e = Object(l.a)(() => {
							const {
								targetCommentIndex: o
							} = this.state;
							void 0 === o ? (this.scrollToTargetComment(), e()) : n && t.forEach((e, t) => e.id === n && this.setState({
								targetCommentIndex: t
							}))
						}, 100)
					}
				}
				loadMoreComments() {
					const {
						loadMoreComments: e,
						moreCommentsLink: t,
						postId: n,
						sendEvent: o
					} = this.props;
					t && !t.pending && (e(t.moreCommentId), o(we("history", n)))
				}
				scrollToTargetComment() {
					const {
						commentId: e
					} = this.props, t = e && document.querySelector("#targetComment"), n = e && Object(a.findDOMNode)(this.refs[e]), o = t || n;
					o && this._refScroller && this._refScroller.current && this._refScroller.current.scrollToTargetComment(o.offsetTop)
				}
				render() {
					const {
						blockedRedditors: {
							ids: e
						},
						chatCommentLinks: t,
						className: n,
						commentId: o,
						commentsPageKey: a,
						emptyStateClassName: r,
						isLivestreaming: i,
						isLoading: c,
						isPending: l,
						postId: d,
						renderedInOverlay: m,
						sendEvent: u
					} = this.props, {
						expandedCommentIds: p,
						targetCommentIndex: h,
						timestampUpdateTrigger: C
					} = this.state, g = !(t && t.length || c || l);
					return s.a.createElement(s.a.Fragment, null, g ? s.a.createElement(G.c, {
						className: r,
						isChat: !0
					}) : s.a.createElement(en, {
						className: n,
						ref: this._refScroller,
						key: "comments-chat-scroller",
						isLivestreaming: i,
						isLoading: c || l,
						loadMore: this.loadMoreComments,
						hasMoreComments: !!this.props.moreCommentsLink,
						targetCommentIndex: h
					}, t.map(t => on(e, p, t) ? s.a.createElement(ge, {
						commentCount: 1,
						key: "scroll-node-".concat(t.id),
						onClick: () => this.expandComment(t.id)
					}) : s.a.createElement(Ut, {
						ref: t.id,
						key: "scroll-node-".concat(t.id),
						commentId: t.id,
						commentsPageKey: a,
						isLivestreaming: i,
						postId: d,
						renderedInOverlay: !!m,
						sendEvent: u,
						timestampUpdateTrigger: C,
						targetComment: t.id === o
					}))), this.props.children && this.props.children({
						scrollToBottom: this.scrollToBottom
					}))
				}
			}
			t.default = an(Object(We.b)(rn))
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			}));
			const o = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				s = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				a = e => (e.numReports || 0) > 0
		},
		"./src/reddit/components/RichTextJsonChatReply/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "qqC8Lcm050i_jAM3CePWY",
				container: "qqC8Lcm050i_jAM3CePWY"
			}
		},
		"./src/reddit/components/RichTextJsonChatReply/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/components/RichTextJson/index.tsx"),
				i = n("./src/reddit/components/RichTextJson/elements.tsx"),
				c = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				l = n("./src/reddit/models/RichTextJson/index.ts");
			const d = e => s.a.createElement(i.f, null, e),
				m = e => {
					const t = [],
						n = e.c || [],
						o = n.length;
					for (let s = 0; s < o; s++) {
						const e = n[s];
						t.push(e.e === l.w ? e.t : Object(c.e)(e, {}, s))
					}
					return s.a.createElement(s.a.Fragment, null, t)
				},
				u = e => e.c && e.c.length ? s.a.createElement(s.a.Fragment, null, Object(c.i)(e.c, null, {})) : s.a.createElement("br", null);
			var p = n("./src/reddit/constants/elementClassNames.ts"),
				h = n("./src/reddit/components/RichTextJsonChatReply/index.m.less"),
				C = n.n(h);
			const g = n("./src/lib/lessComponent.tsx").a.div("Container", C.a),
				b = {
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
					content: n
				} = e, o = n.document, i = [], c = Object(r.b)(o), h = Object(r.c)(o);
				if (-1 !== c)
					for (let s = c; s <= h; s++) {
						const e = o[s],
							t = e && b[e.e];
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
								i.push(u(e))
						}
					}
				return s.a.createElement(g, {
					className: Object(a.a)(p.j, t)
				}, i)
			}
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/uniqueId.js"),
				a = n.n(s),
				r = n("./node_modules/raf/index.js"),
				i = n.n(r),
				c = n("./node_modules/react/index.js"),
				l = n.n(c),
				d = n("./node_modules/react-redux/es/index.js"),
				m = n("./node_modules/reselect/es/index.js"),
				u = n("./src/lib/classNames/index.ts"),
				p = n("./src/reddit/actions/modal.ts"),
				h = n("./src/reddit/selectors/activeModalId.ts"),
				C = n("./src/higherOrderComponents/asModal/index.tsx"),
				g = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/layout/row/Inline/index.tsx"),
				v = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				x = n.n(v);
			var f = Object(C.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return l.a.createElement("div", {
						className: x.a.wrapper
					}, l.a.createElement(b.a, {
						className: x.a.titleRow
					}, n), l.a.createElement("div", {
						className: x.a.detailsContainer
					}, t), l.a.createElement(b.a, {
						className: x.a.buttonRow
					}, l.a.createElement(g.f, {
						className: x.a.confirmButton,
						onClick: e.onConfirmed
					}, o.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				_ = n("./src/reddit/controls/ErrorText/index.m.less"),
				E = n.n(_);
			n.d(t, "a", (function() {
				return I
			})), n.d(t, "c", (function() {
				return w
			}));
			const k = Object(m.c)({
				activeModalId: h.a
			});
			class T extends l.a.Component {
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
						className: n,
						errorModalBody: s,
						errorModalTitle: a = o.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: r = o.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: i,
						textHasOverflowed: c
					} = this.state;
					return l.a.createElement("div", {
						className: Object(u.a)(E.a.wrapper, n)
					}, l.a.createElement("span", {
						className: E.a.description,
						ref: this.spanRef
					}, e), c && l.a.createElement("span", {
						className: E.a.moreText,
						onClick: this.toggleModal
					}, r), t === i && l.a.createElement(f, {
						onConfirmed: this.toggleModal,
						title: a
					}, s || e))
				}
			}
			const y = Object(d.b)(k, e => ({
					toggleErrorTextModal: t => e(Object(p.i)(t))
				}))(T),
				I = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: o,
						fallbackMessage: s,
						messages: a = []
					} = e, r = a.length ? a : s ? [s] : [];
					return r.length ? l.a.createElement("div", {
						className: t
					}, r.map((e, t) => l.a.createElement(y, {
						className: n,
						errorModalTitle: o,
						key: t
					}, e))) : null
				},
				w = e => l.a.createElement(I, {
					fallbackMessage: o.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = y
		},
		"./src/reddit/helpers/awards/message.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return r
			}));
			const o = 500,
				s = 1800,
				a = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return t ? e.coinPrice < o ? 0 : e.coinPrice < s ? 50 : 100 : 2048
				},
				r = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const o = a(t, n);
					return e.slice(0, o)
				}
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");

			function a(e) {
				let {
					apiError: t,
					isLoggedOut: n,
					language: a
				} = e;
				switch (t.type) {
					case s.E.AUTHORIZATION_ERROR:
						return n ? o.fbt._("You might need to be logged in to do that.", null, {
							hk: "1313fG"
						}) : o.fbt._("It looks like you aren't allowed to do that.", null, {
							hk: "5tQod"
						});
					case s.E.VALIDATION_ERROR:
						return o.fbt._("We weren't able to handle your request.", null, {
							hk: "4umMwv"
						});
					case s.E.NOT_FOUND_ERROR:
						return o.fbt._("Sorry, there doesn't seem to be anything here.", null, {
							hk: "2UmS4e"
						});
					case s.E.SERVER_ERROR:
						return o.fbt._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "1Sxl7y"
						});
					case s.E.LIKELY_UBLOCK_ERROR:
						return o.fbt._("It looks like one or more software blocking extensions you are using may be interfering with Reddit's ability to serve you content. Please try disabling them or changing the rules you use.", null, {
							hk: "6Gh68"
						});
					default:
						return o.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "FsWrq"
						})
				}
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, n) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			}));
			var o = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				a = n.n(s);
			const r = e => {
					let {
						isLoading: t
					} = e;
					return Object(o.a)(a.a.loadingBackground, {
						[a.a["m-loading"]]: t
					})
				},
				i = e => Object(o.a)(a.a.loadingBar, r(e))
		},
		"./src/reddit/icons/svgs/Approve/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
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
		"./src/reddit/icons/svgs/Ban/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M12.8172,7.49104 C12.8172,7.70304 12.7332,7.90704 12.5828,8.05664 L9.5196,11.11984 C9.3636,11.27584 9.1588,11.35424 8.954,11.35424 C8.7492,11.35424 8.5444,11.27584 8.3884,11.11984 L7.2572,9.98784 L2.966,14.27904 C2.8092,14.43584 2.6044,14.51344 2.4004,14.51344 C2.1956,14.51344 1.9908,14.43584 1.834,14.27904 C1.522,13.96704 1.522,13.46064 1.834,13.14784 L6.126,8.85664 L4.9948,7.72544 C4.682,7.41264 4.682,6.90704 4.9948,6.59424 L8.0572,3.53104 C8.3572,3.23104 8.8884,3.23104 9.1884,3.53104 L12.5828,6.92544 C12.7332,7.07504 12.8172,7.27904 12.8172,7.49104 Z M3.86328,6.26288 C3.65848,6.26288 3.45368,6.18448 3.29768,6.02848 C2.98488,5.71568 2.98488,5.21008 3.29768,4.89728 L6.36008,1.83408 C6.67288,1.52208 7.17928,1.52208 7.49128,1.83408 C7.80408,2.14688 7.80408,2.65328 7.49128,2.96528 L4.42888,6.02848 C4.27288,6.18448 4.06808,6.26288 3.86328,6.26288 Z M14.27968,8.62264 C14.59248,8.93544 14.59248,9.44104 14.27968,9.75384 L11.21728,12.81624 C11.06128,12.97224 10.85648,13.05064 10.65168,13.05064 C10.44688,13.05064 10.24208,12.97224 10.08608,12.81624 C9.77328,12.50424 9.77328,11.99784 10.08608,11.68504 L13.14848,8.62264 C13.46128,8.30984 13.96688,8.30984 14.27968,8.62264 Z"
			})))
		},
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
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
		"./src/reddit/icons/svgs/Edit/index.m.less": function(e, t, n) {
			e.exports = {
				edit: "_3TGaJCWUjkbNuBqTHvrC05"
			}
		},
		"./src/reddit/icons/svgs/Flag/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
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
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
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
		"./src/reddit/icons/svgs/ReplyArrow/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "c6SVS_wE2GjDv20G4oiHX"
			}
		},
		"./src/reddit/icons/svgs/Unlock/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
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
//# sourceMappingURL=ChatPost.655c5850c91daa97c1d0.js.map