// https://www.redditstatic.com/desktop2x/ChatPost.4300d0cb4bf253855c31.js
// Retrieved at 3/7/2022, 12:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatPost"], {
		"./src/lib/setInterval/index.ts": function(e, t, s) {
			"use strict";
			t.a = function(e, t, ...s) {
				let n, o = !1;
				const a = async () => {
					s && s.length ? await e.call(window, ...s) : await e.call(window), o || (n = window.setTimeout(a, t))
				};
				return n = window.setTimeout(a, t), () => {
					o = !0, window.clearTimeout(n)
				}
			}
		},
		"./src/reddit/components/Comments/States/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Comments/States/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return O
			})), s.d(t, "b", (function() {
				return S
			})), s.d(t, "g", (function() {
				return L
			})), s.d(t, "e", (function() {
				return j
			})), s.d(t, "d", (function() {
				return N
			})), s.d(t, "f", (function() {
				return M
			})), s.d(t, "a", (function() {
				return K
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/times.js"),
				a = s.n(o),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				c = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/pages/comments.ts"),
				p = s("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/helpers/describeApiError/index.ts"),
				C = s("./src/reddit/helpers/path/index.ts"),
				g = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				v = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				b = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				_ = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				x = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				f = s("./src/reddit/components/Comments/States/index.m.less"),
				k = s.n(f);
			const E = d.a.wrapped(_.a, "CommentsIcon", k.a),
				T = d.a.wrapped(x.a, "SnooFacepalm", k.a),
				I = d.a.p("EmptyTitle", k.a),
				y = d.a.p("ErrorTitle", k.a),
				w = d.a.p("EmptyText", k.a),
				O = ({
					className: e,
					isChat: t
				}) => i.a.createElement("div", {
					className: Object(l.a)(k.a.StateContainer, e)
				}, i.a.createElement(E, null), i.a.createElement(I, null, t ? n.fbt._("no messages yet", null, {
					hk: "QOUnY"
				}) : n.fbt._("no comments yet", null, {
					hk: "1yqeoX"
				})), i.a.createElement(w, null, n.fbt._("Be the first to share what you think!", null, {
					hk: "479v5B"
				}))),
				S = () => i.a.createElement("div", {
					className: k.a.StateContainer
				}, i.a.createElement(E, null), i.a.createElement(I, null, n.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), i.a.createElement(w, null, n.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				L = ({
					link: e
				}) => i.a.createElement("div", {
					className: k.a.StateContainer
				}, i.a.createElement(E, null), i.a.createElement(I, null, n.fbt._("That comment is missing", null, {
					hk: "1i1U0i"
				})), i.a.createElement(h.n, {
					to: Object(C.b)(e)
				}, n.fbt._("View all comments", null, {
					hk: "2CgaIx"
				}))),
				j = Object(c.b)(null, (e, {
					postId: t,
					commentId: s,
					sort: n
				}) => ({
					onClick: () => e(Object(m.commentsPageDataRequested)(t, s, {
						sort: n
					}, n))
				}))(({
					apiError: e,
					onClick: t
				}) => i.a.createElement("div", {
					className: k.a.StateContainer
				}, i.a.createElement(T, null), i.a.createElement(y, null, e ? Object(u.a)({
					apiError: e,
					isLoggedOut: !1
				}) : n.fbt._("Sorry, comments couldn't load!", null, {
					hk: "2h6LDi"
				})), i.a.createElement(h.l, {
					onClick: t
				}, n.fbt._("Retry", null, {
					hk: "NOuNi"
				})))),
				N = ({
					postId: e,
					commentId: t,
					sort: s,
					apiError: n
				}) => i.a.createElement("div", {
					className: Object(l.a)(k.a.StateContainer, k.a.ErrorFullPage)
				}, i.a.createElement(j, {
					postId: e,
					commentId: t,
					sort: s,
					apiError: n
				})),
				M = d.a.wrapped(({
					className: e
				}) => i.a.createElement("div", {
					className: e
				}, i.a.createElement(p.a, null)), "LoadingFullPage", k.a),
				A = d.a.div("CommentsPlaceholderContainer", k.a),
				R = d.a.div("CommentPlaceholder", k.a),
				P = d.a.div("Avatar", k.a),
				B = d.a.div("VoteColumn", k.a),
				D = d.a.div("TextColumn", k.a),
				W = d.a.wrapped(b.a, "Upvote", k.a),
				F = d.a.wrapped(v.a, "Downvote", k.a),
				U = () => i.a.createElement("div", {
					className: Object(l.a)(k.a.TopMetaPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				H = () => i.a.createElement("div", {
					className: Object(l.a)(k.a.CommentBodyPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				K = e => i.a.createElement(A, null, a()(10, t => i.a.createElement(R, {
					key: t
				}, e.isAvatarsInCommentsEnabled ? i.a.createElement(P, {
					className: Object(g.a)({
						isLoading: !0
					})
				}) : i.a.createElement(B, null, i.a.createElement(W, null), i.a.createElement(F, null)), i.a.createElement(D, null, i.a.createElement(U, null), i.a.createElement(H, null)))))
		},
		"./src/reddit/components/CommentsChat/Comment/AwardComment/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				o = s("./node_modules/lodash/memoize.js"),
				a = s.n(o),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				c = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				m = ["FF4500", "0DD3BB", "24A0ED", "FFB000", "FF8717", "46D160", "25B79F", "0079D3", "4856A3", "C18D42", "A06A42", "46A508", "008985", "7193FF", "7E53C1", "FFD635", "DDBD37", "D4E815", "94E044", "FF66AC", "DB0064", "FF585B", "EA0027", "A5A4A4", "545452"],
				p = s("./src/reddit/components/Econ/DefaultAvatar/index.tsx"),
				h = s("./src/reddit/selectors/experiments/econ/index.ts"),
				u = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				C = s.n(u);
			const g = d.a.div("Userpic", C.a);
			t.a = a()(({
				defaultImage: e,
				userId: t
			}) => {
				const s = Object(c.e)(h.z),
					{
						processingAvatarImageUrl: o
					} = n.a;
				if (s) return e ? i.a.createElement("img", {
					className: C.a.NewUserpic,
					src: e,
					alt: "user icon"
				}) : i.a.createElement(p.a, {
					className: C.a.NewUserpic,
					userId: t
				});
				const a = (e => e.replace(l.Ib.Account + "_", ""))(t),
					{
						avatar: r,
						color: d
					} = (e => {
						const t = m.length,
							s = parseInt(e, 36),
							n = s % 20 + 1,
							o = Math.floor(s / 20) % t;
						return {
							avatar: ("0" + n).slice(-2),
							color: m[o]
						}
					})(a),
					u = `${o}/avatar_default_${r}_${d}.png`;
				return i.a.createElement(g, {
					"data-testid": "old-default-icon",
					style: {
						backgroundImage: `url(${u})`,
						backgroundColor: `#${d}`
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
				o = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx"),
				l = s("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				d = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				m = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				p = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				h = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				u = s.n(h);
			const C = Object(r.c)({
					account: e => e.user.account
				}),
				g = Object(a.b)(C);
			t.a = i.a.wrapped(g(({
				account: e,
				className: t,
				height: s,
				icon: n,
				isLivestreaming: a,
				isNSFW: r,
				trash: i,
				userId: h,
				width: C
			}) => {
				const g = a ? 36 : 20,
					v = h || `${null==e?void 0:e.id}`,
					b = {
						height: s || g,
						width: C || g,
						minWidth: C || g
					};
				if (i) return o.a.createElement("div", {
					className: t,
					style: b
				}, o.a.createElement(p.a, {
					className: u.a.TrashIcon
				}));
				const _ = e && e.id === h ? e.accountIcon : r ? d.a : null != n ? n : void 0;
				return Object(m.b)(_) ? o.a.createElement("div", {
					className: t,
					style: b
				}, o.a.createElement(l.a, {
					headshot: _
				})) : o.a.createElement("div", {
					className: t,
					style: b
				}, o.a.createElement(c.a, {
					userId: v,
					defaultImage: _
				}))
			}), "ChatIcon", u.a)
		},
		"./src/reddit/components/CommentsChat/Comment/CollapsedComment/index.m.less": function(e, t, s) {
			e.exports = {
				CollapsedComment: "_3atwFTZjTzR7TeUGv2qiiK",
				collapsedComment: "_3atwFTZjTzR7TeUGv2qiiK",
				LivestreamingWrapper: "_3N6gM82gHkrFF8KcG2PFF",
				livestreamingWrapper: "_3N6gM82gHkrFF8KcG2PFF"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/Menu/index.m.less": function(e, t, s) {
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
				DownvoteIcon: "nnun3pxpJpQYatp4jQ8qI",
				downvoteIcon: "nnun3pxpJpQYatp4jQ8qI",
				EditIcon: "_3PW1UsfpSAMxomcTcf_ikU",
				editIcon: "_3PW1UsfpSAMxomcTcf_ikU",
				FlagIcon: "_269qxNSrwp7r6TRmz330pB",
				flagIcon: "_269qxNSrwp7r6TRmz330pB",
				ModeratorIcon: "XH0mr3-n4WSQOuflprs1R",
				moderatorIcon: "XH0mr3-n4WSQOuflprs1R",
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
				UpvoteIcon: "_1MOqImJegfZ2kFkmYR7sN8",
				upvoteIcon: "_1MOqImJegfZ2kFkmYR7sN8",
				HorizontalVotes: "_292WfpEp6iZvLlnRwGwndc",
				horizontalVotes: "_292WfpEp6iZvLlnRwGwndc"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/Reply/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/CommentsChat/Comment/SystemMessage/index.m.less": function(e, t, s) {
			e.exports = {
				SystemMessageText: "_2QTeDg8kTAhAgxZWbsorEm",
				systemMessageText: "_2QTeDg8kTAhAgxZWbsorEm"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/index.m.less": function(e, t, s) {
			e.exports = {
				Menu: "_2qe0ML8CXcWe4YSyvE9LgB",
				menu: "_2qe0ML8CXcWe4YSyvE9LgB",
				CommentWrapper: "_1cLn4fCD5gseRsUmt4bMvC",
				commentWrapper: "_1cLn4fCD5gseRsUmt4bMvC",
				CommentReadMoreButton: "_1MYiq2Hs6CoOoLuxy6wdz4",
				commentReadMoreButton: "_1MYiq2Hs6CoOoLuxy6wdz4",
				SystemMessageWrapper: "_3XyD1I20-_JDHKoCJuLrOW",
				systemMessageWrapper: "_3XyD1I20-_JDHKoCJuLrOW",
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
		"./src/reddit/components/CommentsChat/Scroller/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/CommentsChat/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "COMMENT_TIMESTAMP_UPDATE_INTERVAL", (function() {
				return vs
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/debounce.js"),
				o = s.n(n),
				a = s("./node_modules/lodash/last.js"),
				r = s.n(a),
				i = s("./node_modules/react/index.js"),
				c = s.n(i),
				l = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/setInterval/index.ts"),
				h = s("./src/lib/timeAgo/index.ts"),
				u = s("./src/reddit/actions/blockedRedditors.ts"),
				C = s("./src/reddit/actions/comment/index.ts"),
				g = s("./src/lib/makeActionCreator/index.ts"),
				v = s("./node_modules/lodash/first.js"),
				b = s.n(v),
				_ = s("./node_modules/lodash/isArray.js"),
				x = s.n(_),
				f = s("./src/reddit/helpers/isComment.ts"),
				k = s("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				E = s("./src/reddit/models/Comment/index.ts"),
				T = s("./src/reddit/models/Flair/index.ts"),
				I = s("./src/reddit/models/PostCreationForm/index.ts"),
				y = s("./src/reddit/models/Vote/index.ts");
			const w = (e, t) => {
					if (void 0 !== e.author && void 0 !== e.author_fullname && void 0 !== e.attribs && void 0 !== e.created_utc && void 0 !== e.name && void 0 !== e.subreddit_id && void 0 !== e.body && void 0 !== e.context && void 0 !== e.link_id && void 0 !== e.score) {
						const s = S(e.attribs);
						return {
							allAwardings: [],
							associatedAward: e.associated_award ? Object(k.b)(e.associated_award) : void 0,
							author: e.author,
							authorId: e.author_fullname,
							authorIconImage: e.author_icon_img,
							authorIconIsDefault: e.author_is_default_icon,
							authorIconIsNSFW: e.author_is_nsfw_icon,
							authorSnoovatarImage: e.author_snoovatar_img,
							body: e.body_html,
							bodyMD: e.body,
							collapsed: Boolean(e.collapsed),
							collapsedReasonCode: e.collapsed_reason_code,
							collapsedBecauseCrowdControl: Boolean(e.collapsed_in_crowd_control),
							commentType: e.comment_type,
							created: e.created_utc,
							distinguishType: O(s),
							id: e.name,
							isAdmin: s === E.e.Admin,
							isGildable: !1 !== e.can_gild,
							isOp: s === E.e.Submitter,
							isMod: s === E.e.Moderator,
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
								rteMode: I.i.RICH_TEXT
							},
							parentId: e.parent_id && Object(f.a)(e.parent_id) ? e.parent_id : null,
							permalink: e.context,
							postId: e.link_id,
							score: e.score,
							subredditId: e.subreddit_id,
							treatmentTags: e.treatment_tags,
							isSystem: !1,
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
							voteState: y.a.notVoted,
							...t || {}
						}
					}
				},
				O = e => {
					switch (e) {
						case E.e.Admin:
							return m.G.ADMIN;
						case E.e.Moderator:
							return m.G.MODERATOR;
						case E.e.Alumni:
							return m.G.ALUMNI_ADMIN;
						default:
							return ""
					}
				},
				S = e => b()((e || []).filter(e => x()(e) && e.length >= 2).sort(e => e[0]).map(e => e[1])) || E.e.None;
			const L = (e, t, s) => {
				const n = {
						[t]: {}
					},
					{
						author: o,
						author_flair_background_color: a,
						author_flair_richtext: r,
						author_flair_template_id: i,
						author_flair_text: c,
						author_flair_text_color: l,
						author_flair_type: d
					} = s;
				if (o && d) {
					if (d === T.f.Richtext) {
						if (!a || !r) return;
						return {
							[t]: {
								[o]: {
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
					if (d === T.f.Text) {
						if (!c) return n;
						return {
							[t]: {
								[o]: {
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
			var j = s("./src/lib/env/index.ts");
			const N = new Map,
				M = e => e,
				A = new Set;
			var R;
			! function(e) {
				e.NEW_COMMENT = "new_comment", e.UPDATE_COMMENT = "update_comment", e.UPDATE_COMMENT_SCORE = "update_comment_score", e.DELETE_COMMENT = "delete_comment", e.REMOVE_COMMENT = "remove_comment", e.USER_JOIN = "join_system_message"
			}(R || (R = {}));
			const P = {
					backoffTime: 2e3,
					connectionAttempts: 0,
					jitterAmount: 3e3,
					maximumRetries: 9
				},
				B = (e, t) => {
					const s = M(t),
						n = N.get(s);
					n && n.socket && (n.isClosePlanned = !0, n.socket.close())
				},
				D = (e, t, s, n) => {
					const o = M(t),
						a = N.get(o);
					if (a && (a.socket.readyState === WebSocket.CONNECTING || a.socket.readyState === WebSocket.OPEN)) return;
					const r = {
						socket: new WebSocket(e),
						retries: s,
						uniqueId: t,
						url: e,
						isClosePlanned: !1
					};
					N.set(o, r), r.socket.addEventListener("open", () => {
						r.retries = {
							...P
						}
					}), r.socket.addEventListener("message", U.bind(null, n)), r.socket.addEventListener("close", W.bind(null, o, n)), r.socket.addEventListener("error", H.bind(null, o)), window && window.addEventListener("beforeunload", B.bind(null, e, t))
				},
				W = (e, t, s) => {
					const n = N.get(e);
					n && (n.isClosePlanned ? N.delete(e) : F(e, t))
				},
				F = (e, t) => {
					const s = N.get(e);
					if (!s) return;
					const {
						retries: {
							backoffTime: n,
							connectionAttempts: o,
							jitterAmount: a,
							maximumRetries: r
						},
						socket: i,
						uniqueId: c,
						url: l
					} = s;
					if (N.delete(e), o < r && i.readyState !== WebSocket.OPEN) {
						const e = n * Math.pow(2, o),
							r = Math.random() * a - a / 2,
							i = Math.round(e + r),
							d = {
								...s.retries,
								connectionAttempts: o + 1
							};
						setTimeout(() => {
							D(l, c, d, t)
						}, i), Object(j.a)() && console.debug(`Connection reset, retrying in ${i}ms`)
					}
				},
				U = (e, t) => {
					if (t && t.data) try {
						e(JSON.parse(t.data))
					} catch (t) {
						Object(j.a)() && console.error(t)
					}
				},
				H = (e, t) => {
					const s = N.get(e);
					s && s.isClosePlanned && s.socket && s.socket.readyState === WebSocket.CLOSED ? N.delete(e) : Object(j.a)() && console.error(t)
				};
			var K = s("./src/reddit/selectors/comments.ts"),
				q = s("./src/reddit/selectors/commentSelector.ts"),
				V = s("./src/reddit/selectors/moderatorPermissions.ts"),
				z = s("./src/reddit/actions/comment/websocket/constants.ts");
			const G = Object(g.a)(z.b),
				J = Object(g.a)(z.c),
				Y = Object(g.a)(z.a),
				Q = Object(g.a)(z.d),
				Z = {},
				$ = (e, t, s, n) => async (o, a) => {
					(e => new Promise(t => {
						const {
							cb: s,
							url: n,
							uniqueId: o
						} = e;
						A.has(o) ? t() : (A.add(o), setTimeout(() => {
							A.delete(o), D(n, o, {
								...P
							}, s), t()
						}, 1))
					}))({
						uniqueId: s,
						url: t,
						cb: t => {
							switch (t.type) {
								case R.NEW_COMMENT: {
									const s = t.payload.name,
										r = w(t.payload),
										i = a(),
										c = Object(q.b)(i, {
											commentId: s
										}),
										l = !(!s || !Z[s]);
									if (r && !l) {
										const s = L(0, n, t.payload),
											a = t.payload.total_comment_count;
										if (void 0 === c) {
											const t = Object(K.w)(i, {
												commentsPageKey: e
											});
											o(G({
												authorFlair: s,
												comment: r,
												commentsPageKey: e,
												headCommentId: t,
												numComments: a
											}))
										} else o(J({
											authorFlair: s,
											comment: r,
											commentsPageKey: e,
											numComments: a
										}))
									}
									break
								}
								case R.UPDATE_COMMENT: {
									const s = t.payload.name,
										r = a(),
										i = Object(q.b)(r, {
											commentId: s
										}),
										c = w(t.payload);
									if (i && c) {
										const s = L(0, n, t.payload),
											a = t.payload.total_comment_count;
										o(J({
											authorFlair: s,
											comment: c,
											commentsPageKey: e,
											numComments: a
										}))
									}
									break
								}
								case R.UPDATE_COMMENT_SCORE: {
									const s = t.payload.name,
										n = t.payload.score,
										r = a(),
										i = Object(q.b)(r, {
											commentId: s
										});
									i && o(J({
										comment: {
											...i,
											score: n
										},
										commentsPageKey: e
									}));
									break
								}
								case R.DELETE_COMMENT: {
									const e = t.payload.name,
										s = a(),
										n = Object(q.b)(s, {
											commentId: e
										});
									n && !n.isDeleted ? o(Y({
										id: e
									})) : Z[e] = R.DELETE_COMMENT;
									break
								}
								case R.REMOVE_COMMENT: {
									const e = t.payload.link_id,
										s = t.payload.name,
										n = a(),
										r = Object(q.b)(n, {
											commentId: s
										}),
										i = (n.user.account && n.user.account.id) === (r && r.authorId),
										c = !!e && !!Object(V.l)(n, {
											postId: e
										});
									!r || r.isRemoved && r.isDeleted || i || c ? Z[s] = R.REMOVE_COMMENT : o(Y({
										id: s
									}));
									break
								}
								case R.USER_JOIN: {
									const s = w(t.payload, {
											isSystem: !0
										}),
										n = !0;
									s && o(Q({
										comment: s,
										commentsPageKey: e,
										isChatSort: n
									}));
									break
								}
							}
						}
					})
				};
			var X = s("./src/reddit/actions/pages/comments.ts"),
				ee = s("./src/reddit/components/Comments/States/index.tsx"),
				te = s("./node_modules/fbt/lib/FbtPublic.js"),
				se = s("./node_modules/lodash/defer.js"),
				ne = s.n(se),
				oe = s("./src/lib/classNames/index.ts"),
				ae = s("./src/lib/lessComponent.tsx"),
				re = s("./src/lib/makeDraftKey/index.ts"),
				ie = s("./src/lib/objectSelector/index.ts"),
				ce = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				le = s("./src/reddit/components/Comments/PredictionComment/async.ts"),
				de = s("./src/reddit/helpers/awards/message.ts"),
				me = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				pe = s("./src/reddit/components/RichTextJson/index.tsx"),
				he = s("./src/reddit/icons/svgs/Sparkle/index.tsx"),
				ue = s("./src/reddit/icons/svgs/Star/index.tsx"),
				Ce = s("./src/reddit/icons/svgs/Star2/index.tsx"),
				ge = s("./src/reddit/components/CommentsChat/Comment/AwardComment/index.m.less"),
				ve = s.n(ge);
			const be = Object(ie.b)(e => ({
					renderingObjectInfo: e.comment
				})),
				_e = e => {
					const {
						award: t,
						comment: s,
						iconUrl: n
					} = e;
					let o = "",
						a = !0,
						r = !1;
					return t.coinPrice < de.a ? (o = ve.a.silverTierAwardComment, a = !1) : t.coinPrice < de.b ? o = ve.a.goldTierAwardComment : (o = ve.a.platinumTierAwardComment, r = !0), c.a.createElement("div", {
						className: Object(oe.a)(ve.a.awardComment, o)
					}, c.a.createElement("div", {
						className: ve.a.imageContainer
					}, a && c.a.createElement(c.a.Fragment, null, c.a.createElement(ue.a, {
						className: Object(oe.a)(ve.a.backgroundAnimation, ve.a.backgroundStar)
					}), c.a.createElement(Ce.a, {
						className: Object(oe.a)(ve.a.backgroundAnimation, ve.a.backgroundStar, ve.a.backgroundStar2)
					})), r && c.a.createElement(c.a.Fragment, null, c.a.createElement(he.a, {
						className: Object(oe.a)(ve.a.backgroundAnimation, ve.a.backgroundSparkle, ve.a.sparkleBottomLeft)
					}), c.a.createElement(he.a, {
						className: Object(oe.a)(ve.a.backgroundAnimation, ve.a.backgroundSparkle, ve.a.sparkleTopRight)
					}), c.a.createElement(he.a, {
						className: Object(oe.a)(ve.a.backgroundAnimation, ve.a.backgroundSparkle, ve.a.sparkleBottomRight)
					})), c.a.createElement("img", {
						src: n
					})), c.a.createElement(pe.a, {
						className: ve.a.awardCommentText,
						content: Object(me.a)(s),
						key: `rich-text-${s.id}`,
						rtJsonElementProps: be(e),
						useExplicitTextColor: !0
					}))
				};
			var xe = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				fe = s("./src/reddit/components/CommentsChat/Comment/CollapsedComment/index.m.less"),
				ke = s.n(fe);
			var Ee = ({
					commentCount: e,
					isLivestreaming: t,
					onClick: s
				}) => {
					const n = Object(oe.a)(ke.a.CollapsedComment, {
						[ke.a.LivestreamingWrapper]: t
					});
					return c.a.createElement("div", {
						className: n,
						onClick: s
					}, te.fbt._("collapsed {collapsed message} (may be sensitive)", [te.fbt._param("collapsed message", te.fbt._({
						"*": "{message count} messages",
						_1: "message"
					}, [te.fbt._plural(e, "message count")], {
						hk: "3SYWlH"
					}))], {
						hk: "3equVw"
					}))
				},
				Te = s("./src/reddit/actions/comment/authoring.ts"),
				Ie = s("./src/reddit/actions/comment/moderation.ts"),
				ye = s("./src/reddit/actions/modal.ts"),
				we = s("./src/reddit/actions/reportFlow/index.ts"),
				Oe = s("./src/reddit/actions/tooltip.ts"),
				Se = s("./src/reddit/actions/userBlocks.ts"),
				Le = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				je = s("./src/reddit/constants/tracking.ts"),
				Ne = s("./src/reddit/selectors/telemetry.ts"),
				Me = s("./src/telemetry/models/Event.ts");
			const Ae = e => ({
					screen: Object(Ne.bb)(e),
					profile: Object(Ne.S)(e),
					subreddit: Object(Ne.jb)(e)
				}),
				Re = (e, t) => s => ({
					action: "load",
					noun: e,
					post: Object(Ne.J)(s, t),
					source: Me.b.ChatView,
					subreddit: Object(Ne.jb)(s)
				}),
				Pe = e => t => ({
					source: "chat_post",
					action: je.c.VIEW,
					noun: "last_message",
					post: Object(Ne.J)(t, e),
					comment: Object(Ne.i)(t, e),
					...Ae(t)
				});
			var Be = s("./src/reddit/components/CommentsChat/Comment/Menu/index.m.less"),
				De = s.n(Be);

			function We() {
				return (We = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Fe = ae.a.button("MenuItem", De.a),
				Ue = ae.a.a("MenuItemPermalink", De.a),
				He = ({
					children: e,
					comment: t,
					onClick: s,
					onHideTooltip: n,
					onShowTooltip: o,
					sendEvent: a,
					tooltipId: r,
					tooltipText: i,
					trackingNoun: l
				}) => c.a.createElement(Fe, {
					id: r,
					onMouseEnter: o.bind(void 0, r),
					onMouseLeave: n.bind(void 0, r),
					onClick: e => {
						s(e), l && (a(((e, t) => s => ({
							source: "comment",
							action: je.c.CLICK,
							noun: e,
							post: Object(Ne.J)(s, t),
							comment: Object(Ne.i)(s, t),
							...Ae(s)
						}))(l, t.id)), a(((e, t) => s => ({
							source: "comment_overflow_menu",
							action: je.c.CLICK,
							noun: e,
							post: Object(Ne.J)(s, t),
							comment: Object(Ne.i)(s, t),
							...Ae(s)
						}))(l, t.id)))
					}
				}, e, c.a.createElement(Le.c, {
					tooltipId: r
				}, i)),
				Ke = e => c.a.createElement(He, We({
					onClick: e.onHideTooltip
				}, e), c.a.createElement(Ue, {
					href: e.commentPermalink,
					rel: "nofollow",
					target: "_blank"
				}, e.children));
			var qe = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				Ve = s("./src/reddit/components/HumanDate/index.tsx"),
				ze = s("./src/reddit/components/ModModeReports/helpers.ts"),
				Ge = s("./src/reddit/components/ReportFlow/index.tsx"),
				Je = s("./src/reddit/components/ReportFlow/new.tsx"),
				Ye = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Qe = s("./src/reddit/icons/svgs/Approve/index.tsx"),
				Ze = s("./src/reddit/icons/svgs/Edit/index.tsx"),
				$e = s("./src/reddit/icons/svgs/Flag/index.tsx"),
				Xe = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				et = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				tt = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				st = s("./src/reddit/icons/svgs/ReplyArrow/index.tsx"),
				nt = s("./src/reddit/icons/svgs/Spam/index.tsx"),
				ot = s("./src/reddit/models/PostDraft/index.ts"),
				at = s("./src/reddit/selectors/activeModalId.ts"),
				rt = s("./src/reddit/selectors/blockedRedditors.ts"),
				it = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				ct = s("./src/reddit/selectors/user.ts");

			function lt() {
				return (lt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const dt = ae.a.wrapped(Xe.a, "BlockIcon", De.a),
				mt = ae.a.wrapped($e.a, "FlagIcon", De.a),
				pt = ae.a.wrapped(Ze.a, "EditIcon", De.a),
				ht = ae.a.wrapped(Qe.a, "ApproveIcon", De.a),
				ut = ae.a.wrapped(st.a, "ReplyIcon", De.a),
				Ct = ae.a.wrapped(tt.a, "RemoveIcon", De.a),
				gt = ae.a.wrapped(nt.a, "SpamIcon", De.a),
				vt = ae.a.wrapped(et.a, "ModeratorIcon", De.a),
				bt = e => (t, {
					comment: s
				}) => `${e}${s.id}`,
				_t = e => `Comment-${e}--Modal--DeleteComment`,
				xt = Object(d.c)({
					currentUser: ct.k,
					isMod: (e, {
						comment: t
					}) => !!Object(V.l)(e, {
						postId: t.postId
					}),
					isAuthorBlocked: (e, {
						comment: t
					}) => Object(rt.d)(e, t.authorId),
					reportFlowIsOpen: (e, {
						comment: t
					}) => {
						var s, n;
						return (null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === n ? void 0 : n.postOrCommentId) === t.id
					},
					approveTooltipId: bt("CommentChatPost--Approve--"),
					blockTooltipId: bt("CommentChatPost--Block--"),
					createTooltipId: bt("CommentChatPost--Create--"),
					editTooltipId: bt("CommentChatPost--Edit--"),
					replyTooltipId: bt("CommentChatPost--Reply--"),
					reportTooltipId: bt("CommentChatPost--Report--"),
					upvoteTooltipId: bt("CommentChatPost--Upvote--"),
					downvoteTooltipId: bt("CommentChatPost--Downvote--"),
					distinguishTooltipId: bt("CommentChatPost--Distinguish--"),
					spamTooltipId: bt("CommentChatPost--Spam--"),
					removeTooltipId: bt("CommentChatPost--Remove--"),
					deleteTooltipId: bt("CommentChatPost--Delete--"),
					isDeleteModalOpen: (e, {
						comment: t
					}) => Object(at.a)(e) === _t(t.id),
					reportingRevampEnabled: it.a
				});
			var ft = Object(l.b)(xt, (e, {
					comment: t,
					commentsPageKey: s
				}) => ({
					onReplyClick: () => e(Object(Te.p)({
						parentCommentId: t.id,
						commentsPageKey: s,
						singleOpen: !0
					})),
					onReportClick: s => {
						s.stopPropagation(), e(Object(we.c)(t.id, !1))
					},
					onHideTooltip: () => e(Object(Oe.i)()),
					onShowTooltip: t => e(Object(Oe.f)({
						tooltipId: t
					})),
					onEditClick: () => {
						const n = t.media && t.media.rteMode;
						s && e(Object(Te.d)({
							commentId: t.id,
							draftKey: Object(re.a)(ot.c.edit, t.id),
							text: t.bodyMD || "",
							commentMode: n,
							commentsPageKey: s
						}))
					},
					onApproveClick: () => e(Object(Ie.a)(t.id)),
					onBlockClick: () => e(Object(Se.h)(t.author)),
					onUnblockClick: () => e(Object(Se.g)(t.author)),
					onUpvoteClick: () => e(Object(C.q)(t.id)),
					onDownvoteClick: () => e(Object(C.j)(t.id)),
					onDistinguishClick: s => e(Object(Ie.b)(t.id, s)),
					onSpamClick: () => e(Object(Ie.e)(t.id, !0)),
					onRemoveClick: () => e(Object(Ie.e)(t.id, !1)),
					deleteComment: () => s && e(Object(Te.h)(t.id, t.postId)),
					onDeleteClick: () => e(Object(ye.i)(_t(t.id))),
					toggleDeleteCommentModal: () => e(Object(ye.i)(_t(t.id)))
				}))(Object(Ye.c)(e => {
					const {
						comment: t,
						className: s,
						createTooltipId: n,
						currentUser: o,
						deleteComment: a,
						deleteTooltipId: r,
						editTooltipId: i,
						isAuthorBlocked: l,
						isDeleteModalOpen: d,
						isLivestreaming: p,
						isMod: h,
						onApproveClick: u,
						onBlockClick: C,
						onDeleteClick: g,
						onEditClick: v,
						onHideTooltip: b,
						onRemoveClick: _,
						onReplyClick: x,
						onReportClick: f,
						onShowTooltip: k,
						onSpamClick: E,
						onUnblockClick: T,
						onDistinguishClick: I,
						reportFlowIsOpen: y,
						replyTooltipId: w,
						reportTooltipId: O,
						approveTooltipId: S,
						blockTooltipId: L,
						removeTooltipId: j,
						distinguishTooltipId: N,
						sendEvent: M,
						spamTooltipId: A,
						toggleDeleteCommentModal: R,
						timestampUpdateTrigger: P
					} = e, B = !!o && o.id === t.authorId, D = Object(ze.b)(t), W = t.isApproved && D, F = !t.bannedBy || t.bannedBy === m.l, U = {
						comment: t,
						onHideTooltip: b,
						onShowTooltip: k,
						sendEvent: M
					}, H = t.isMod;
					return c.a.createElement("div", {
						className: s
					}, c.a.createElement("div", {
						className: Object(oe.a)(De.a.Menu, {
							[De.a.Livestreaming]: p
						})
					}, (t.bannedBy || D) && h && c.a.createElement(He, lt({
						onClick: u,
						tooltipId: S,
						tooltipText: W ? te.fbt._("Reapprove", null, {
							hk: "vlRqn"
						}) : te.fbt._("Approve", null, {
							hk: "3Vc0Oh"
						}),
						trackingNoun: "approve"
					}, e), c.a.createElement(ht, null)), !t.isLocked && c.a.createElement(He, lt({
						onClick: x,
						tooltipId: w,
						tooltipText: te.fbt._("Reply", null, {
							hk: "14j3OR"
						}),
						trackingNoun: "reply"
					}, e), c.a.createElement(ut, null)), h && B && c.a.createElement(He, lt({
						onClick: () => I(H ? m.G.NONE : m.G.MODERATOR),
						tooltipId: N,
						tooltipText: H ? te.fbt._("Undistinguish", null, {
							hk: "20neZu"
						}) : te.fbt._("Distinguish as Mod", null, {
							hk: "jywZz"
						})
					}, e), c.a.createElement(vt, null)), h && F && c.a.createElement(He, lt({
						onClick: E,
						tooltipId: A,
						tooltipText: te.fbt._("Spam", null, {
							hk: "15R6K5"
						}),
						trackingNoun: "spam"
					}, e), c.a.createElement(gt, null)), !B && c.a.createElement(He, lt({
						onClick: f,
						tooltipId: O,
						tooltipText: te.fbt._("Report", null, {
							hk: "4oVcnd"
						}),
						trackingNoun: "report"
					}, e), c.a.createElement(mt, null)), y && (() => e.reportingRevampEnabled ? c.a.createElement(Je.a, {
						withOverlay: !0,
						overlayCustomStyles: Ge.b,
						postId: t.postId,
						commentId: t.id
					}) : c.a.createElement(Ge.a, {
						withOverlay: !0,
						commentId: t.id,
						overlayCustomStyles: Ge.b,
						postId: t.postId
					}))(), B && !p && c.a.createElement(He, lt({
						onClick: v,
						tooltipId: i,
						tooltipText: te.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						trackingNoun: "edit"
					}, U), c.a.createElement(pt, null)), h && F ? c.a.createElement(He, lt({
						onClick: _,
						tooltipId: j,
						tooltipText: t.bannedBy === m.l ? te.fbt._("Confirm removal", null, {
							hk: "3q7g1J"
						}) : te.fbt._("Remove", null, {
							hk: "3tYl0U"
						}),
						trackingNoun: t.bannedBy === m.l ? "confirm_remove" : "remove"
					}, U), c.a.createElement(Ct, null)) : B && c.a.createElement(He, lt({
						onClick: g,
						tooltipId: r,
						tooltipText: te.fbt._("Delete", null, {
							hk: "4lt26q"
						}),
						trackingNoun: "delete"
					}, e), c.a.createElement(Ct, null)), d && c.a.createElement(qe.a, {
						actionText: te.fbt._("Delete", null, {
							hk: "3j0q3Z"
						}),
						cancelActionText: te.fbt._("Keep", null, {
							hk: "3LTfYE"
						}),
						headerText: te.fbt._("Delete comment", null, {
							hk: "4uv7tI"
						}),
						modalText: te.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "227ya0"
						}),
						onConfirm: a,
						toggleModal: R,
						withOverlay: !0
					}), !!o && !B && c.a.createElement(He, lt({
						onClick: () => l ? T() : C(),
						tooltipId: L,
						tooltipText: l ? te.fbt._("Unblock User", null, {
							hk: "26F2c9"
						}) : te.fbt._("Block User", null, {
							hk: "1XKY2A"
						}),
						trackingNoun: `sitewide_${l?"unblock":"block"}`
					}, U), c.a.createElement(dt, null))), !p && c.a.createElement(Ke, lt({}, e, {
						tooltipId: n,
						tooltipText: c.a.createElement(Ve.b, {
							seconds: t.created
						}),
						timestampUpdateTrigger: P
					}), c.a.createElement(Ve.d, {
						seconds: t.created
					})))
				})),
				kt = s("./src/chat/helpers/dom.ts"),
				Et = s("./src/reddit/components/RichTextJsonChatReply/index.tsx"),
				Tt = s("./src/reddit/components/CommentsChat/Comment/Reply/index.m.less"),
				It = s.n(Tt);
			const yt = {},
				wt = ae.a.wrapped(xe.a, "ChatIcon", It.a),
				Ot = ae.a.span("ReplyAuthor", It.a),
				St = ae.a.div("ReplyWrapper", It.a);
			var Lt = Object(l.b)(() => Object(d.c)({
					comment: q.b,
					commentPermalink: K.m
				}))(({
					comment: e,
					commentId: t,
					commentPermalink: s,
					isLivestreaming: n,
					onReplyClick: o
				}) => e ? e.isDeleted ? c.a.createElement(St, null, c.a.createElement("span", {
					className: Object(oe.a)(It.a.ReplyLinkBubble, It.a.delete, {
						[It.a.Livestreaming]: n
					})
				}, c.a.createElement(os, null))) : c.a.createElement(St, null, c.a.createElement("a", {
					className: Object(oe.a)(It.a.ReplyLinkBubble, {
						[It.a.Livestreaming]: n
					}),
					href: s,
					rel: "noopener noreferrer",
					target: "_blank",
					onClick: Object(kt.a)(() => o(e.id))
				}, c.a.createElement(wt, {
					userId: e.authorId,
					icon: e.profileImage
				}), c.a.createElement(Ot, null, e.author), c.a.createElement(Et.a, {
					className: It.a.ReplyComment,
					key: `rich-text-${t}`,
					content: Object(me.a)(e),
					rtJsonElementProps: yt
				}))) : null),
				jt = s("./src/reddit/components/CommentsChat/Comment/SystemMessage/index.m.less"),
				Nt = s.n(jt);
			const Mt = Object(ie.b)(e => ({
				renderingObjectInfo: e.comment || void 0
			}));
			var At = e => {
					const {
						comment: t
					} = e;
					return void 0 === Mt(e) ? null : c.a.createElement(pe.a, {
						className: Nt.a.SystemMessageText,
						content: Object(me.a)(t),
						key: `rich-text-${t.id}`,
						rtJsonElementProps: Mt(e),
						useExplicitTextColor: !0
					})
				},
				Rt = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				Pt = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Bt = s("./src/reddit/controls/ErrorText/index.tsx"),
				Dt = s("./src/reddit/constants/experiments.ts"),
				Wt = s("./src/reddit/helpers/chooseVariant/index.ts");
			const Ft = e => Object(Wt.c)(e, {
				experimentName: Dt.lb,
				experimentEligibilitySelector: Wt.a
			}) === Dt.gb.Enabled;
			var Ut = s("./src/reddit/selectors/communityAwards.ts");
			const Ht = (e, {
				commentId: t
			}) => {
				const s = Object(q.b)(e, {
					commentId: t
				});
				if (s && s.associatedAwardId) return Object(Ut.a)(e, s.associatedAwardId)
			};
			var Kt = s("./src/reddit/selectors/gold/awardIcon.ts"),
				qt = s("./src/reddit/selectors/poll/index.ts"),
				Vt = s("./src/reddit/components/CommentsChat/Comment/index.m.less"),
				zt = s.n(Vt);
			const Gt = 250,
				Jt = 10,
				Yt = ae.a.wrapped(Bt.b, "ErrorText", zt.a),
				Qt = ae.a.wrapped(ce.a, "TopMeta", zt.a),
				Zt = ae.a.span("DeleteText", zt.a),
				$t = ae.a.wrapped(Lt, "Reply", zt.a),
				Xt = Object(Pt.u)(),
				es = Object(l.b)(() => Object(d.c)({
					associatedAward: (e, {
						commentId: t
					}) => Ht(e, {
						commentId: t
					}),
					awardIconUrl: (e, {
						commentId: t
					}) => {
						const s = Ht(e, {
							commentId: t
						});
						if (s) return Object(Kt.a)(e, {
							award: s,
							minSize: 64,
							postOrCommentId: t
						})
					},
					comment: q.b,
					commentPermalink: K.m,
					errorMsgs: K.G,
					flair: K.e,
					isActive: (e, {
						commentId: t
					}) => Boolean(e.shortcuts.activeCommentId && t === e.shortcuts.activeCommentId),
					isEditing: K.z,
					prediction: qt.f,
					subreddit: Pt.r,
					shouldRenderSystemMessages: Ft
				})),
				ts = Object(ie.b)(e => ({
					renderingObjectInfo: e.comment || void 0
				}));
			class ss extends c.a.Component {
				constructor(e) {
					super(e), this.elemRef = c.a.createRef(), this.toggleBody = () => {
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
					this.elemRef && this.elemRef.current && this.elemRef.current.scrollHeight > Gt && !this.props.associatedAward && !this.props.isLivestreaming && this.setState({
						isTruncated: !0
					})
				}
				componentDidUpdate(e, t) {
					this.limitCommentBodyHeight(t)
				}
				limitCommentBodyHeight(e) {
					const {
						isExpanded: t,
						isTruncated: s
					} = this.state, n = t !== e.isExpanded || s !== e.isTruncated;
					if (this.elemRef && this.elemRef.current && n) {
						const e = this.elemRef.current;
						let s = Gt;
						if (t) {
							s = e.scrollHeight + Jt;
							const t = () => {
								e.style.maxHeight = "", e.removeEventListener("transitionend", t)
							};
							e.addEventListener("transitionend", t)
						}
						this.elemRef.current.style.maxHeight = `${s}px`
					}
				}
				render() {
					const {
						associatedAward: e,
						awardIconUrl: t,
						childrenInfo: s,
						comment: n,
						commentPermalink: o,
						commentsPageKey: a,
						errorMsgs: r,
						flair: i,
						isActive: l,
						isEditing: d,
						isLivestreaming: m,
						postId: p,
						prediction: h,
						renderedInOverlay: u,
						sendEvent: C,
						targetComment: g,
						timestampUpdateTrigger: v,
						addToRefList: b,
						onReplyClick: _,
						shouldRenderSystemMessages: x
					} = this.props, {
						isCollapsed: f,
						isExpanded: k,
						isTruncated: E
					} = this.state;
					if (!n) return null;
					l && ne()(() => this.elemRef.current && this.elemRef.current.focus()), ne()(() => this.elemRef && this.elemRef.current && b && b(this.elemRef));
					const T = n.isSystem,
						I = !d && !n.isDeleted && !T,
						y = !!e,
						w = Object(oe.a)({
							[zt.a.SystemMessageWrapper]: T && !m && x,
							[zt.a.CommentWrapper]: !m && !T,
							[zt.a.CommentExpanded]: k,
							[zt.a.CommentTruncated]: E,
							[zt.a.HighlightTarget]: g,
							[zt.a.LivestreamingCommentWrapper]: m
						});
					return f ? c.a.createElement(Ee, {
						commentCount: 1,
						onClick: this.expandCollapsedComment
					}) : c.a.createElement("div", {
						id: g ? "targetComment" : void 0,
						ref: this.elemRef,
						tabIndex: 0,
						className: w
					}, d && c.a.createElement(Rt.a, {
						key: "chatCommentsForm",
						isLivestreaming: m,
						postId: p,
						sendEvent: C,
						draftKey: Object(re.a)(ot.c.edit, n.id),
						commentsPageKey: a,
						isEditing: d,
						comment: n
					}), I && c.a.createElement(c.a.Fragment, null, c.a.createElement(Qt, {
						childrenInfo: s,
						collapsedBecauseCrowdControl: !1,
						collapsed: !1,
						comment: n,
						commentsPageKey: a,
						compact: !0,
						flair: i,
						ignoreFlairPosition: !0,
						ignoreLock: !0,
						isLivestreaming: m,
						renderedInOverlay: u
					}, c.a.createElement(xe.a, {
						className: Object(oe.a)(zt.a.ChatIcon, {
							[zt.a.Livestreaming]: m
						}),
						isLivestreaming: m,
						icon: n.profileImage,
						userId: n.authorId,
						isNSFW: n.profileOver18 || n.authorIconIsNSFW
					})), n.parentId && c.a.createElement($t, {
						commentId: n.parentId,
						onReplyClick: _,
						isLivestreaming: m
					}), m && c.a.createElement("span", {
						className: zt.a.livestreamingTimeStamp
					}, c.a.createElement(Ve.d, {
						seconds: n.created
					})), y && e && m ? c.a.createElement(_e, {
						award: e,
						comment: n,
						iconUrl: t
					}) : h ? c.a.createElement(le.a, {
						comment: n,
						prediction: h
					}) : [c.a.createElement(pe.a, {
						className: Object(oe.a)(zt.a.RichTextJson, {
							[zt.a.Livestreaming]: m
						}),
						content: Object(me.a)(n),
						key: `rich-text-${n.id}`,
						rtJsonElementProps: ts(this.props),
						useExplicitTextColor: m
					}), c.a.createElement(ft, {
						key: "Menu",
						className: Object(oe.a)(zt.a.Menu, {
							[zt.a.Livestreaming]: m
						}),
						comment: n,
						commentPermalink: o,
						commentsPageKey: a,
						isLivestreaming: m,
						timestampUpdateTrigger: v
					})]), n.isDeleted && c.a.createElement(os, null), I && r && r.map((e, t) => c.a.createElement(Yt, {
						key: `${t}-${e}`
					}, e)), !d && E && c.a.createElement("button", {
						className: Object(oe.a)(zt.a.CommentReadMoreButton, {
							[zt.a.Livestreaming]: m
						}),
						onClick: this.toggleBody
					}, te.fbt._("Read more", null, {
						hk: "3s9Bqf"
					})), T && !m && x && c.a.createElement(At, {
						comment: n
					}))
				}
			}
			const ns = Xt(es(ss)),
				os = ({
					isLivestreaming: e
				}) => c.a.createElement(c.a.Fragment, null, c.a.createElement(xe.a, {
					className: Object(oe.a)(zt.a.ChatIcon, {
						[zt.a.Livestreaming]: e || !1
					}),
					trash: !0
				}), c.a.createElement(Zt, null, te.fbt._("deleted", null, {
					hk: "4rQ3ZP"
				})));
			var as = ns,
				rs = s("./node_modules/lodash/isEqual.js"),
				is = s.n(rs),
				cs = s("./src/reddit/controls/Button/index.tsx"),
				ls = s("./src/reddit/components/CommentsChat/Scroller/index.m.less"),
				ds = s.n(ls);
			const ms = ae.a.div("ButtonWrapper", ds.a),
				ps = ({
					top: e
				}) => c.a.createElement("span", {
					className: Object(oe.a)(ds.a.ChunkPlaceholder, {
						[ds.a.top]: e
					})
				}, te.fbt._("Loading...", null, {
					hk: "2s97tt"
				})),
				hs = ({
					className: e,
					isLivestreaming: t,
					isLoading: s,
					setRef: n,
					...o
				}) => c.a.createElement("div", {
					ref: n,
					className: Object(oe.a)(e, {
						[ds.a.ScrollerWrapper]: !t,
						[ds.a.LivestreamingWrapper]: t,
						[ds.a.loading]: s
					})
				}, !s && o.isPrevLoading && !t && c.a.createElement(ps, {
					top: !0
				}), o.children, !s && o.isNextLoading && !t && c.a.createElement(ps, null));
			class us extends c.a.Component {
				constructor(e) {
					super(e), this._ref = c.a.createRef(), this._refBeforeActiveComments = c.a.createRef(), this._refNextActiveComments = c.a.createRef(), this.chunkSize = 50, this.loadedMore = !1, this.scrollTop = () => this.$ref ? Math.ceil(this.$ref.scrollTop) : 0, this.scrollHeight = () => this.$ref ? this.$ref.scrollHeight : 0, this.clientHeight = () => this.$ref ? this.$ref.clientHeight : 0, this.scrolledPosition = () => this.scrollHeight() - this.clientHeight() - this.scrollTop(), this.scrolledToTop = () => 0 === this.scrollTop(), this.scrolledToBottom = (e = 0) => e >= this.scrolledPosition(), this.scrollToLastBottomChunk = () => {
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
						targetCommentIndex: s,
						children: n
					} = this.props;
					if (n && n.length && void 0 !== s && n[s]) {
						const e = Math.floor(s / this.chunkSize);
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
							s = e < t ? e : t;
						this.setState({
							activeChunkIndex: s
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
							s = t > e ? e : t;
						e >= 0 && this.setState({
							activeChunkIndex: s
						}, this.setNextTopScroll)
					}
				}
				getChunkIndexOnUpdate(e, t) {
					if (this.props && this.props.children.length && this.props.children[0] && this.props.children.length - e.children.length > 1) {
						const e = t.length - this.state.chunks.length,
							s = this.state.activeChunkIndex + e;
						if (e > 1) return s
					}
				}
				componentDidMount() {
					this.addScrollListener(), this.scrollToLastBottomChunk(), this.setState({
						initialized: !0
					}), this.scrollToTargetComment(), this.props.targetCommentIndex || this.props.onLastMessageView && this.props.onLastMessageView()
				}
				componentWillUnmount() {
					this.removeScrollListener()
				}
				getSnapshotBeforeUpdate(e) {
					const t = e.children.length !== this.props.children.length || !is()(b()(e.children), b()(this.props.children)) || !is()(r()(e.children), r()(this.props.children));
					return t ? {
						childrenAreNotEqual: t,
						scrolledBottom: this.scrolledToBottom(30)
					} : null
				}
				componentDidUpdate(e, t, s) {
					if (s && s.childrenAreNotEqual) {
						const t = this.splitChunks([...this.props.children]),
							n = this.getChunkIndexOnUpdate(e, t),
							o = this.props.children.length - e.children.length;
						this.setState({
							list: this.props.children,
							chunks: t,
							activeChunkIndex: n || this.state.activeChunkIndex,
							newCommentsCount: this.scrolledToBottom() || 1 !== o || this.loadedMore ? this.state.newCommentsCount : this.state.newCommentsCount + o
						}, () => {
							n && this.setNextTopScroll(), s.scrolledBottom && this.scrollToLastBottomChunk(), this.loadedMore = !1, s.scrolledBottom && o > 0 && this.props.onLastMessageView && this.props.onLastMessageView()
						})
					} else t.newCommentsCount > 0 && 0 === this.state.newCommentsCount && this.props.onLastMessageView && this.props.onLastMessageView()
				}
				render() {
					const {
						className: e,
						isLivestreaming: t
					} = this.props, s = this.state.newCommentsCount > 0 ? Object(oe.a)([ds.a.NewComments, ds.a.show]) : ds.a.NewComments;
					return c.a.createElement(c.a.Fragment, null, c.a.createElement(hs, {
						className: e,
						key: "chatScroller",
						chunkSize: this.chunkSize,
						isLoading: !this.state.initialized || !!this.props.isLoading,
						isPrevLoading: !this.scrolledToFirstTopChunk(),
						isLivestreaming: t,
						isNextLoading: !this.scrolledToLastBottomChunk(),
						setRef: this._ref
					}, c.a.createElement("div", {
						key: "beforeActiveCommentsSection",
						ref: this._refBeforeActiveComments,
						className: ds.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex - 1]), c.a.createElement("div", {
						key: "activeCommentsSection",
						className: ds.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex]), c.a.createElement("div", {
						key: "nextActiveCommentsSection",
						ref: this._refNextActiveComments,
						className: ds.a.ScrollerSection
					}, this.state.chunks[this.state.activeChunkIndex + 1])), c.a.createElement(ms, null, c.a.createElement(cs.l, {
						className: s,
						onClick: () => this.scrollToLastBottomChunk()
					}, this.state.newCommentsCount, " ", te.fbt._({
						"*": "NEW MESSAGES",
						_1: "NEW MESSAGE"
					}, [te.fbt._plural(this.state.newCommentsCount)], {
						hk: "1bTJTr"
					}), "↓")))
				}
			}
			var Cs = us,
				gs = s("./src/reddit/selectors/posts.ts");
			const vs = 6e4,
				bs = (e, t, {
					authorId: s,
					id: n
				}) => e.includes(s) && !t.includes(n),
				_s = Object(d.c)({
					blockedRedditors: rt.a,
					blockedRedditorsPending: rt.b,
					chatCommentLinks: K.g,
					isPending: K.d,
					liveCommentsWebsocket: gs.E,
					moreCommentsLink: K.F
				}),
				xs = Object(l.b)(_s, (e, t) => ({
					onLiveCommentsSubscribe: (s, n, o) => e($(s, n, o, t.subredditId)),
					offLiveCommentsSubscribe: (t, s) => e(((e, t) => async () => {
						B(0, t)
					})(0, s)),
					loadMoreComments: s => e(Object(C.l)(t.commentsPageKey, s)),
					loadBlockedRedditors: () => e(Object(u.g)()),
					loadComments: async () => await e(Object(X.commentsPageDataRequested)(t.postId, void 0, {
						sort: m.u.CHAT
					}, m.u.CHAT))
				}));
			class fs extends c.a.Component {
				constructor(e) {
					super(e), this._refList = {}, this._refScroller = c.a.createRef(), this._timestampUpdater = null, this.scrollToBottom = () => {
						this._refScroller && this._refScroller.current && this._refScroller.current.scrollToLastBottomChunk()
					}, e.loadBlockedRedditors(), this.loadMoreComments = this.loadMoreComments.bind(this), this.sendViewLastMessageTelemetry = o()(this.sendViewLastMessageTelemetry.bind(this), 100), this.state = {
						expandedCommentIds: [],
						targetCommentIndex: void 0,
						timestampUpdateTrigger: Date.now()
					}
				}
				isTimestampUpdateNeeded() {
					const {
						chatCommentLinks: e
					} = this.props, t = e[e.length - 1], s = t && t.created;
					return !!s && Object(h.c)(s) < 2
				}
				deferTimestampUpdate() {
					this._timestampUpdater && this._timestampUpdater(), this._timestampUpdater = Object(p.a)(() => {
						this.isTimestampUpdateNeeded() ? this.setState({
							timestampUpdateTrigger: Date.now()
						}) : this._timestampUpdater && this._timestampUpdater()
					}, vs)
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
						liveCommentsWebsocket: s,
						loadComments: n,
						onLiveCommentsSubscribe: o,
						postId: a
					} = this.props;
					s && (e && n(), o(t, s, a), this._subscribedPostId = a, this._subscribedLiveCommentsWebsocket = s)
				}
				componentWillUnmount() {
					const {
						offLiveCommentsSubscribe: e
					} = this.props;
					this._subscribedPostId && this._subscribedLiveCommentsWebsocket && (e(this._subscribedLiveCommentsWebsocket, this._subscribedPostId), this._timestampUpdater && this._timestampUpdater())
				}
				shouldComponentUpdate(e, t) {
					const {
						blockedRedditors: s,
						blockedRedditorsPending: n,
						chatCommentLinks: o,
						commentsPageKey: a,
						isLoading: r,
						isPending: i,
						postId: c,
						draftKey: l
					} = this.props, {
						expandedCommentIds: d,
						timestampUpdateTrigger: m
					} = this.state;
					return e.postId !== c || e.draftKey !== l || e.isLoading !== r || e.isPending !== i || e.blockedRedditorsPending !== n || e.commentsPageKey !== a || e.chatCommentLinks && e.chatCommentLinks.length !== o.length || e.blockedRedditors.ids && e.blockedRedditors.ids.length !== s.ids.length || t.expandedCommentIds.length !== d.length || t.timestampUpdateTrigger !== m
				}
				componentDidUpdate(e) {
					const {
						blockedRedditors: t,
						chatCommentLinks: s,
						commentId: n,
						commentsPageKey: o,
						liveCommentsWebsocket: a,
						offLiveCommentsSubscribe: r,
						onLiveCommentsSubscribe: i,
						postId: c
					} = this.props;
					if (c !== e.postId && (this._subscribedPostId && this._subscribedLiveCommentsWebsocket && r(this._subscribedLiveCommentsWebsocket, this._subscribedPostId), c && a && (i(o, a, c), this._subscribedPostId = c, this._subscribedLiveCommentsWebsocket = a)), e.blockedRedditors.ids !== t.ids) {
						const e = new Set(t.ids),
							n = {};
						s.forEach(e => n[e.id] = e.authorId), this.setState({
							expandedCommentIds: this.state.expandedCommentIds.filter(t => {
								const s = n[t];
								return !e.has(s)
							})
						})
					}
					if (this.deferTimestampUpdate(), n) {
						const e = Object(p.a)(() => {
							const {
								targetCommentIndex: t
							} = this.state;
							void 0 === t && (this.scrollToTargetComment(), n && s.forEach((e, t) => e.id === n && this.setState({
								targetCommentIndex: t
							})), e())
						}, 100)
					}
				}
				loadMoreComments() {
					const {
						loadMoreComments: e,
						moreCommentsLink: t,
						postId: s,
						sendEvent: n
					} = this.props;
					t && !t.pending && (e(t.moreCommentId), n(Re("history", s)))
				}
				sendViewLastMessageTelemetry() {
					const {
						chatCommentLinks: e,
						sendEvent: t
					} = this.props, s = r()(e);
					(null == s ? void 0 : s.id) && t(Pe(s.id))
				}
				scrollToTargetComment(e) {
					if (e && this._refList[e] && this._refList[e].current && this._refScroller && this._refScroller.current) {
						const t = this._refList[e].current,
							s = t ? t.offsetTop : 0;
						return this._refScroller.current.scrollToTargetComment(s), void(t && t.focus())
					}
					const {
						commentId: t
					} = this.props, s = t && document.querySelector("#targetComment");
					s && this._refScroller && this._refScroller.current && this._refScroller.current.scrollToTargetComment(s.offsetTop)
				}
				render() {
					const {
						blockedRedditors: e,
						chatCommentLinks: t,
						className: s,
						commentId: n,
						commentsPageKey: o,
						emptyStateClassName: a,
						isLivestreaming: r,
						isLoading: i,
						isPending: l,
						postId: d,
						renderedInOverlay: m,
						sendEvent: p
					} = this.props, {
						expandedCommentIds: h,
						targetCommentIndex: u,
						timestampUpdateTrigger: C
					} = this.state, g = !(t && t.length || i || l);
					return c.a.createElement(c.a.Fragment, null, g ? c.a.createElement(ee.c, {
						className: a,
						isChat: !0
					}) : c.a.createElement(Cs, {
						className: s,
						ref: this._refScroller,
						key: "comments-chat-scroller",
						isLivestreaming: r,
						isLoading: i || l,
						loadMore: this.loadMoreComments,
						hasMoreComments: !!this.props.moreCommentsLink,
						targetCommentIndex: u,
						onLastMessageView: this.sendViewLastMessageTelemetry
					}, t.map(t => bs(e.ids, h, t) ? c.a.createElement(Ee, {
						commentCount: 1,
						isLivestreaming: r,
						key: `scroll-node-${t.id}`,
						onClick: () => this.expandComment(t.id)
					}) : c.a.createElement(as, {
						ref: t.id,
						key: `scroll-node-${t.id}`,
						commentId: t.id,
						commentsPageKey: o,
						isLivestreaming: r,
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
			t.default = xs(Object(Ye.c)(fs))
		},
		"./src/reddit/components/Econ/DefaultAvatar/index.m.less": function(e, t, s) {
			e.exports = {
				defaultAvatar: "_8gjnVWVhueS_hMv9By4wh"
			}
		},
		"./src/reddit/components/Econ/DefaultAvatar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Econ/DefaultAvatar/index.m.less"),
				c = s.n(i);
			t.a = ({
				className: e,
				style: t = {},
				userId: s
			}) => {
				const {
					processingAvatarImageUrl: o
				} = n.a, i = `url(${o}/defaults/v2/avatar_default_${(e=>{let t=0;for(const s of e)t+=s.charCodeAt();return t%8})(s)}.png)`;
				return a.a.createElement("div", {
					className: Object(r.a)(c.a.avatar, e),
					style: {
						...t,
						backgroundImage: i
					}
				})
			}
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
				c = s("./src/reddit/components/RichTextJson/renderers.tsx"),
				l = s("./src/reddit/models/RichTextJson/index.ts");
			const d = e => o.a.createElement(i.f, null, e),
				m = e => {
					const t = [],
						s = e.c || [],
						n = s.length;
					for (let o = 0; o < n; o++) {
						const e = s[o];
						t.push(e.e === l.w ? e.t : Object(c.e)(e, {}, o))
					}
					return o.a.createElement(o.a.Fragment, null, t)
				},
				p = e => e.c && e.c.length ? o.a.createElement(o.a.Fragment, null, Object(c.i)(e.c, null, {})) : o.a.createElement("br", null);
			var h = s("./src/reddit/constants/elementClassNames.ts"),
				u = s("./src/reddit/components/RichTextJsonChatReply/index.m.less"),
				C = s.n(u);
			const g = s("./src/lib/lessComponent.tsx").a.div("Container", C.a),
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
					content: s
				} = e, n = s.document, i = [], c = Object(r.b)(n), u = Object(r.c)(n);
				if (-1 !== c)
					for (let o = c; o <= u; o++) {
						const e = n[o],
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
				return o.a.createElement(g, {
					className: Object(a.a)(h.j, t)
				}, i)
			}
		},
		"./src/reddit/helpers/awards/message.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return r
			}));
			const n = 500,
				o = 1800,
				a = (e, t = !1) => t ? e.coinPrice < n ? 0 : e.coinPrice < o ? 50 : 100 : 2048,
				r = (e, t, s = !1) => {
					const n = a(t, s);
					return e.slice(0, n)
				}
		},
		"./src/reddit/icons/svgs/Approve/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "m17.707 5.6934-1.399-1.4c-.188-.188-.442-.293-.707-.293-.266 0-.52.105-.707.293l-6.994 6.993-2.793-2.793c-.39-.391-1.023-.391-1.414 0l-1.4 1.4c-.391.391-.391 1.024 0 1.414l4.9 4.9c.196.195.451.293.707.293s.512-.098.707-.293l9.1-9.1c.391-.391.391-1.023 0-1.414",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = ({
				className: e
			}) => o.a.createElement("svg", {
				className: e,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z"
			}), o.a.createElement("path", {
				d: "M17 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.36l1.76 1.83a.5.5 0 0 0 .75 0L13.64 16H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
			}))
		},
		"./src/reddit/icons/svgs/Edit/index.m.less": function(e, t, s) {
			e.exports = {
				edit: "_3TGaJCWUjkbNuBqTHvrC05"
			}
		},
		"./src/reddit/icons/svgs/Edit/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/Edit/index.m.less"),
				i = s.n(r);
			t.a = e => o.a.createElement("svg", {
				className: Object(a.a)(i.a.edit, e.className),
				viewBox: "4 4 12 12"
			}, o.a.createElement("g", {
				transform: "translate(-68.000000, -207.000000)"
			}, o.a.createElement("path", {
				d: "M74,221.73128 L76.2632,221.73128 C76.4752,221.73128 76.6784,221.64728 76.8288,221.49688 L83.2968,215.02808 C83.6096,214.71528 83.6096,214.20968 83.2968,213.89688 L81.0344,211.63448 C80.7216,211.32168 80.216,211.32168 79.9032,211.63448 L73.4344,218.10328 C73.284,218.25288 73.2,218.45608 73.2,218.66888 L73.2,220.93128 C73.2,221.37368 73.5584,221.73128 74,221.73128"
			})))
		},
		"./src/reddit/icons/svgs/Flag/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("polygon", {
				fill: "inherit",
				points: "0 20 20 20 20 0 0 0",
				opacity: "0"
			}), o.a.createElement("path", {
				fill: "inherit",
				d: "M11.71875,3.14525 C14.60125,1.54375 18.75025,3.48025 18.75025,3.48025 L18.75025,13.55475 C18.75025,13.55475 14.86875,11.81975 11.71875,13.21975 C8.70525,14.55925 4.68725,12.88475 4.68725,12.88475 L4.68725,2.81025 C4.68725,2.81025 8.70525,4.81925 11.71875,3.14525 Z M2.75,18.75 C2.232,18.75 2,18.3305 2,17.8125 L2,2.8125 C2,2.2945 2.232,1.875 2.75,1.875 C3.268,1.875 3.5,2.2945 3.5,2.8125 L3.5,17.8125 C3.5,18.3305 3.268,18.75 2.75,18.75 Z"
			}))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/reddit/constants/colors.ts");
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && o.a.createElement("desc", null, e.desc), o.a.createElement("path", {
				d: "M1.88,3.32V9a11.53,11.53,0,0,0,8,11L10,20l.08,0a11.53,11.53,0,0,0,8-11V3.32A11.57,11.57,0,0,1,10,0,11.57,11.57,0,0,1,1.88,3.32"
			}), o.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), o.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "4",
				fill: e.isUnread ? a.a.orangered : "none"
			}))
		},
		"./src/reddit/icons/svgs/ReplyArrow/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "c6SVS_wE2GjDv20G4oiHX"
			}
		},
		"./src/reddit/icons/svgs/ReplyArrow/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/ReplyArrow/index.m.less"),
				i = s.n(r);
			t.a = e => o.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
				viewBox: "0 0 511.63 511.631"
			}, o.a.createElement("path", {
				d: "M496.5,233.842c-30.841-76.706-114.112-115.06-249.823-115.06h-63.953V45.693c0-4.952-1.809-9.235-5.424-12.85 c-3.617-3.617-7.896-5.426-12.847-5.426c-4.952,0-9.235,1.809-12.85,5.426L5.424,179.021C1.809,182.641,0,186.922,0,191.871 c0,4.948,1.809,9.229,5.424,12.847L151.604,350.9c3.619,3.613,7.902,5.428,12.85,5.428c4.947,0,9.229-1.814,12.847-5.428 c3.616-3.614,5.424-7.898,5.424-12.848v-73.094h63.953c18.649,0,35.349,0.568,50.099,1.708c14.749,1.143,29.413,3.189,43.968,6.143 c14.564,2.95,27.224,6.991,37.979,12.135c10.753,5.144,20.794,11.756,30.122,19.842c9.329,8.094,16.943,17.7,22.847,28.839 c5.896,11.136,10.513,24.311,13.846,39.539c3.326,15.229,4.997,32.456,4.997,51.675c0,10.466-0.479,22.176-1.428,35.118 c0,1.137-0.236,3.375-0.715,6.708c-0.473,3.333-0.712,5.852-0.712,7.562c0,2.851,0.808,5.232,2.423,7.136 c1.622,1.902,3.86,2.851,6.714,2.851c3.046,0,5.708-1.615,7.994-4.853c1.328-1.711,2.561-3.806,3.71-6.283 c1.143-2.471,2.43-5.325,3.854-8.562c1.431-3.237,2.43-5.513,2.998-6.848c24.17-54.238,36.258-97.158,36.258-128.756 C511.63,291.039,506.589,259.344,496.5,233.842z"
			}))
		},
		"./src/reddit/icons/svgs/Spam/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				fillRule: "evenodd",
				d: "M12.3535,14.6465 C12.5485,14.8415 12.5485,15.1585 12.3535,15.3535 C12.2555,15.4515 12.1275,15.5005 11.9995,15.5005 C11.8725,15.5005 11.7445,15.4515 11.6465,15.3535 L9.9995,13.7075 L8.3535,15.3535 C8.2555,15.4515 8.1275,15.5005 7.9995,15.5005 C7.8725,15.5005 7.7445,15.4515 7.6465,15.3535 C7.4515,15.1585 7.4515,14.8415 7.6465,14.6465 L9.2925,13.0005 L7.6465,11.3535 C7.4515,11.1585 7.4515,10.8415 7.6465,10.6465 C7.8415,10.4515 8.1585,10.4515 8.3535,10.6465 L9.9995,12.2925 L11.6465,10.6465 C11.8415,10.4515 12.1585,10.4515 12.3535,10.6465 C12.5485,10.8415 12.5485,11.1585 12.3535,11.3535 L10.7075,13.0005 L12.3535,14.6465 Z M15.9995,8.0005 C17.1045,8.0005 17.9995,8.8955 17.9995,10.0005 L17.9995,16.0005 C17.9995,17.1045 17.1045,18.0005 15.9995,18.0005 L3.9995,18.0005 C2.8955,18.0005 1.9995,17.1045 1.9995,16.0005 L1.9995,10.0005 C1.9995,8.8955 2.8955,8.0005 3.9995,8.0005 L15.9995,8.0005 Z M4,7 C3.229,7 2.532,7.301 2,7.78 L2,7 C2,6.586 2.126,6.201 2.342,5.882 C2.485,5.669 2.669,5.485 2.882,5.342 C3.201,5.126 3.586,5 4,5 L16,5 C16.414,5 16.799,5.126 17.118,5.342 C17.225,5.414 17.324,5.495 17.414,5.586 C17.505,5.676 17.587,5.775 17.658,5.882 C17.874,6.201 18,6.586 18,7 L18,7.78 C17.468,7.301 16.771,7 16,7 L4,7 Z M4,4 C3.229,4 2.532,4.301 2,4.78 L2,4 C2,2.896 2.896,2 4,2 L16,2 C17.104,2 18,2.896 18,4 L18,4.78 C17.468,4.301 16.771,4 16,4 L4,4 Z"
			})))
		},
		"./src/reddit/icons/svgs/Sparkle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function a(e) {
				return o.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					d: "M10 0L11.4142 8.58579L20 10L11.4142 11.4142L10 20L8.58579 11.4142L0 10L8.58579 8.58579L10 0Z",
					fill: "inherit"
				}))
			}
		},
		"./src/reddit/icons/svgs/Star/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function a(e) {
				return o.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 93 93",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					d: "m81.4458 35.074-29.1976 11.7753 26.9134 16.3348-28.9722-12.3194 7.4803 30.5811-11.7754-29.1976-16.3347 26.9135 12.3193-28.9723-30.581 7.4803 29.1975-11.7754-26.9134-16.3347 28.9722 12.3193-7.4802-30.581 11.7753 29.1975 16.3348-26.9134-12.3194 28.9722z",
					clipRule: "evenodd",
					fill: "inherit",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/Star2/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function a(e) {
				return o.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 55 55",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					clipRule: "evenodd",
					d: "m27.3003.299194 2.4798 21.013306 16.6121-13.10519-13.1052 16.61209 21.0133 2.4798-21.0133 2.4798 13.1052 16.6121-16.6121-13.1052-2.4798 21.0133-2.4798-21.0133-16.61209 13.1052 13.10519-16.6121-21.013307-2.4798 21.013307-2.4798-13.10519-16.61209 16.61209 13.10519z",
					fill: "inherit",
					fillRule: "evenodd"
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatPost.4300d0cb4bf253855c31.js.map