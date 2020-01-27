// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~d01aa6d4.826a5b1113083e5d95f8.js
// Retrieved at 1/27/2020, 2:10:16 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~d01aa6d4"], {
		"./src/reddit/components/CrosspostBox/index.m.less": function(e, t, s) {
			e.exports = {
				mediaContainer: "P8p9Nku0-ZbYCsaCOSE2t",
				Container: "_2ED-O3JtIcOqp8iIL1G5cg",
				container: "_2ED-O3JtIcOqp8iIL1G5cg",
				PostMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				postMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				PostTitle: "_2akYJO5RtMK_ptA408seyG",
				postTitle: "_2akYJO5RtMK_ptA408seyG",
				FlatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				flatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				FlatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				flatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				FlatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				flatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				LinkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				linkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				Content: "_379A_08LTBsR4c8POTldR_",
				content: "_379A_08LTBsR4c8POTldR_",
				ThumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX",
				thumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX"
			}
		},
		"./src/reddit/components/CrosspostBox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				u = s("./src/reddit/components/Media/index.tsx"),
				m = s("./src/reddit/components/PostMeta/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				x = s("./src/reddit/components/Thumbnail/index.tsx"),
				E = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/CrosspostBox/index.m.less"),
				g = s.n(O),
				S = s("./src/lib/lessComponent.tsx");

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = S.a.div("Container", g.a),
				y = S.a.div("PostMetaWrapper", g.a),
				h = S.a.wrapped(p.c, "PostTitle", g.a),
				j = S.a.div("FlatList", g.a),
				L = S.a.div("FlatItem", g.a),
				I = S.a.span("FlatListDotSpacer", g.a),
				f = S.a.wrapped(_, "LinkContainer", g.a),
				T = S.a.div("Content", g.a),
				C = S.a.div("ThumbnailContainer", g.a),
				M = Object(c.c)({
					isCurrentUserProfilePost: E.h,
					language: v.T,
					post: E.I,
					shouldOpenPostInNewTab: v.X,
					subreddit: E.U
				}),
				k = Object(a.b)(M);
			t.a = k(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					mediaProps: n,
					post: a,
					subreddit: r,
					language: c
				} = e;
				if (!a) return null;
				const i = {
						post: a,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: r,
						language: c,
						tooltipType: "".concat("CrosspostBox", "--").concat(n.isListing)
					},
					d = t;
				return a && !a.media ? o.a.createElement(f, {
					className: d
				}, o.a.createElement(T, null, o.a.createElement(y, null, o.a.createElement(m.a, i)), N(a), a.source && o.a.createElement(b.a, {
					post: a
				}), B(e)), A(e)) : o.a.createElement(_, {
					className: d
				}, o.a.createElement(y, null, o.a.createElement(m.a, i)), N(a), R(e), B(e))
			});
			const N = e => o.a.createElement(h, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				R = e => {
					const {
						mediaProps: t,
						post: s
					} = e, n = Object.assign({}, t, {
						post: s,
						crosspost: t.post
					});
					return o.a.createElement("div", null, o.a.createElement(u.a, P({}, n, {
						className: g.a.mediaContainer
					})))
				},
				B = e => {
					const {
						language: t,
						post: s
					} = e, {
						score: n
					} = s;
					return o.a.createElement(j, null, o.a.createElement(L, null, Object(i.c)(t, "posts.points.noun", n, {
						count: Object(l.b)(n)
					})), o.a.createElement(I, null), o.a.createElement(L, null, F(e)))
				},
				F = e => {
					const {
						language: t,
						post: s,
						shouldOpenPostInNewTab: n
					} = e, {
						numComments: a
					} = s;
					return o.a.createElement(r.a, {
						"data-click-id": "comments",
						to: Object(d.a)(s.permalink, !0),
						target: n ? "_blank" : void 0
					}, Object(i.c)(t, "posts.comments.noun", a, {
						count: Object(l.b)(a)
					}))
				},
				A = e => o.a.createElement(C, null, o.a.createElement(x.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/PostBadges/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3vju76MdF2FaGmELBeiJ_r",
				adminIcon: "_1cje4rrmwL0yZgCOlGyBJ-",
				approveIcon: "_1knR9NIIXdSFC9IeFN11JL",
				automoderator: "_2etEb_0bRB9axAqF3uX28S",
				lockIcon: "_3wTfn3Meg1rXJ-qd2jUWMt",
				modIcon: "_SMl46gACTEszA_4A0Qfs",
				removeIcon: "_3yuF1RnBRJL4OS_STsoXcC",
				reportIcon: "_3guZWUAROueft8TPPGDZ-R",
				spamIcon: "_2BWw37nLL0rX6n7xcXciyD",
				stickyIcon: "NI8uZ-19oHf9gPO8jOvFu",
				isRemoved: "_27iLVqax1FuPWTymkSkKAq",
				archivedIcon: "_2WSiH2JwZq4bXuvrDn-cgU",
				addRemovalReason: "COGitU-ItwLZG_fP5rsdE",
				removalReason: "_16Ih3bzeELRlI6AWeW-nFy"
			}
		},
		"./src/reddit/components/PostBadges/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/reddit/i18n/components.tsx"),
				c = s("./src/reddit/i18n/utils.ts"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				x = s("./src/reddit/constants/posts.ts"),
				E = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/helpers/isRemoved.ts"),
				O = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				g = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				S = s("./src/reddit/models/Post/index.ts"),
				P = s("./src/reddit/selectors/posts.ts"),
				_ = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				y = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				h = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				j = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				L = s("./src/reddit/icons/fonts/Report/index.tsx"),
				I = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				f = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				T = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				C = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				M = s("./src/reddit/components/PostBadges/index.m.less"),
				k = s.n(M);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const R = e => o.a.createElement("span", N({
					className: k.a.removalReason
				}, e), e.children),
				B = Object(d.e)("posts.archived"),
				F = Object(d.e)("modTools.commentsLocked"),
				A = Object(d.e)("modTools.moderatorOf"),
				w = Object(d.e)("modTools.stickiedPost"),
				H = Object(d.e)("modTools.pinnedPost"),
				D = (e, t, s) => {
					const n = "PostBadges--".concat(e, "--").concat(t);
					return s ? "".concat(n, "--").concat(s) : n
				},
				J = Object(E.t)({
					isProfilePostListing: E.I,
					isSubreddit: E.J,
					pageLayer: e => e
				}),
				G = Object(i.c)({
					isPinned: (e, t) => {
						let {
							post: s
						} = t;
						return Object(P.r)(e, {
							postId: s.id
						})
					},
					modModeEnabled: E.O
				}),
				U = Object(a.b)(G, (e, t) => ({
					onHideTooltip: () => e(Object(m.h)()),
					onOpenRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(m.f)({
						tooltipId: t
					}))
				}));
			t.a = J(U(e => {
				let {
					className: t,
					displayText: s,
					isSubreddit: a,
					inSubredditOrProfile: i,
					isCompactPinnedPost: d,
					isPinned: m,
					isProfilePostListing: E,
					language: P,
					modModeEnabled: M,
					onHideTooltip: J,
					onOpenRemovalReasonModal: G,
					onShowTooltip: U,
					post: W,
					tooltipType: X
				} = e;
				const K = {
						caretOnTop: !1
					},
					V = W.isRemoved && !W.modRemovalReason && !W.modNote && W.belongsTo.type === x.a.SUBREDDIT,
					Z = D("Approve", W.id, X),
					q = D("Archived", W.id, X),
					z = D("Automod", W.id, X),
					Q = D("Lock", W.id, X),
					Y = D("Mod", W.id, X),
					$ = D("Remove", W.id, X),
					ee = D("Report", W.id, X),
					te = D("Spam", W.id, X),
					se = D("Sticky", W.id, X),
					ne = D("Pinned", W.id, X);
				return o.a.createElement("div", {
					className: t
				}, i && s && W.distinguishType === u.B.MODERATOR && o.a.createElement(n.Fragment, null, o.a.createElement(C.a, {
					className: k.a.modIcon,
					desc: A(P, {
						displayText: s
					}),
					id: Y,
					onMouseEnter: U(Y),
					onMouseLeave: J
				}), o.a.createElement(p.c, N({
					tooltipId: Y,
					text: A(P, {
						displayText: s
					})
				}, K))), W.isArchived && o.a.createElement(n.Fragment, null, o.a.createElement(y.a, {
					className: k.a.archivedIcon,
					desc: B(P),
					id: q,
					onMouseEnter: U(q),
					onMouseLeave: J
				}), o.a.createElement(p.c, N({
					tooltipId: q,
					text: B(P)
				}, K))), W.isLocked && o.a.createElement(n.Fragment, null, o.a.createElement(h.a, {
					className: k.a.lockIcon,
					desc: F(P),
					id: Q,
					onMouseEnter: U(Q),
					onMouseLeave: J
				}), o.a.createElement(p.c, N({
					tooltipId: Q,
					text: F(P)
				}, K))), a && Object(S.k)(W) && !d && o.a.createElement(n.Fragment, null, o.a.createElement(f.a, {
					className: k.a.stickyIcon,
					desc: w(P),
					id: se,
					onMouseEnter: U(se),
					onMouseLeave: J
				}), o.a.createElement(p.c, N({
					tooltipId: se,
					text: w(P)
				}, K))), E && m && o.a.createElement(n.Fragment, null, o.a.createElement(f.a, {
					className: k.a.stickyIcon,
					desc: H(P),
					id: ne,
					onMouseEnter: U(ne),
					onMouseLeave: J
				}), o.a.createElement(p.c, N({
					tooltipId: ne,
					text: H(P)
				}, K))), (W.isApproved || W.approvedBy) && o.a.createElement(n.Fragment, null, o.a.createElement(_.a, {
					className: k.a.approveIcon,
					desc: Object(O.a)(P, W),
					id: Z,
					onMouseEnter: U(Z),
					onMouseLeave: J
				}), o.a.createElement(p.c, N({
					tooltipId: Z,
					text: Object(O.a)(P, W)
				}, K))), Object(v.a)(W) && o.a.createElement(n.Fragment, null, o.a.createElement(j.a, {
					className: k.a.removeIcon,
					desc: Object(O.c)(P, W),
					id: $,
					onMouseEnter: U($),
					onMouseLeave: J
				}), V && o.a.createElement(b.a, {
					className: k.a.addRemovalReason,
					onClick: G,
					text: Object(c.c)("Add a removal reason")
				}), (W.modRemovalReason || W.modNote) && o.a.createElement(R, {
					onMouseEnter: U($),
					onMouseLeave: J
				}, o.a.createElement(r.c, null, "Removal reason")), o.a.createElement(p.c, N({
					tooltipId: $,
					text: Object(O.c)(P, W)
				}, K))), W.bannedBy && W.isSpam && o.a.createElement(n.Fragment, null, o.a.createElement(I.a, {
					className: k.a.spamIcon,
					desc: Object(O.e)(P, W),
					id: te,
					onMouseEnter: U(te),
					onMouseLeave: J
				}), o.a.createElement(p.c, N({
					tooltipId: te,
					text: Object(O.e)(P, W)
				}, K))), ("AutoModerator" === W.approvedBy || "AutoModerator" === W.bannedBy) && o.a.createElement(n.Fragment, null, o.a.createElement(T.a, {
					className: Object(l.a)(k.a.automoderator, !!W.bannedBy && k.a.isRemoved),
					desc: Object(O.b)(P),
					id: z,
					onMouseEnter: U(z),
					onMouseLeave: J
				}), o.a.createElement(p.c, N({
					tooltipId: z,
					text: Object(O.b)(P)
				}, K))), Object(g.a)(W) && !M && o.a.createElement(n.Fragment, null, o.a.createElement(L.a, {
					className: k.a.reportIcon,
					desc: Object(O.d)(P, W.numReports),
					id: ee,
					onMouseEnter: U(ee),
					onMouseLeave: J
				}), o.a.createElement(p.c, N({
					tooltipId: ee,
					text: Object(O.d)(P, W.numReports)
				}, K))))
			}))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/reddit/components/CrosspostBox/index.tsx"),
				r = s("./src/reddit/components/Media/index.tsx");
			t.a = e => {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? o.a.createElement(a.a, {
					postId: t.crosspostRootId,
					mediaProps: Object.assign({}, e, {
						crosspost: t,
						primaryContent: !1
					})
				}) : o.a.createElement(r.a, Object.assign({}, e, {
					primaryContent: !!e.showFull
				}))
			}
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				donationAmount: "_1x9gNS8wlrugqgwofOEcGq",
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				r = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				c = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				i = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/PostBadges/index.tsx"),
				l = s("./src/reddit/components/PostTopMeta/index.tsx"),
				u = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				E = s("./src/reddit/helpers/trackers/post.ts"),
				v = s("./src/reddit/models/Subreddit/index.ts"),
				O = s("./src/reddit/components/PostMeta/index.m.less"),
				g = s.n(O);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: O,
					isOverlay: S,
					language: P,
					post: _,
					shouldShowSubscribeButton: y,
					subredditOrProfile: h,
					tooltipType: j
				} = e;
				return o.a.createElement("div", {
					className: g.a.metaContainer
				}, !n && !_.isSponsored && h && o.a.createElement(c.a, {
					postId: _.id,
					subredditName: h.name
				}, o.a.createElement(m.a, {
					className: g.a.subredditName,
					"data-click-id": "subreddit",
					to: h.url
				}, h.displayText)), h && h.isQuarantined && o.a.createElement(u.a, null), !n && !_.isSponsored && h && y && !O && o.a.createElement(p.a, {
					getEventFactory: e => Object(E.f)(_.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: h.name,
						type: Object(v.e)(h) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: _.id,
					small: !0
				}), !n && !_.isSponsored && o.a.createElement(x.b, null), !n && !_.isSponsored && o.a.createElement(i.h, {
					type: _.belongsTo.type,
					id: _.belongsTo.id
				}), o.a.createElement(l.d, {
					className: g.a.postTopMeta,
					flairStyleTemplate: t,
					language: P,
					post: _,
					tooltipType: j
				}), o.a.createElement(d.a, {
					displayText: h ? h.displayText : null,
					inSubredditOrProfile: !!n,
					language: P,
					post: _,
					tooltipType: j
				}), h && o.a.createElement(r.a, {
					className: g.a.donationAmount,
					contentId: _.id,
					subredditId: h.id
				}), o.a.createElement(a.a, {
					hideCta: s,
					isOverlay: S,
					thing: _,
					tooltipType: j
				}))
			}
		},
		"./src/reddit/components/SourceLink/index.m.less": function(e, t, s) {
			e.exports = {
				OutboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				outboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				SourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				sourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				"m-comment": "_1-PD0_zreH-KVwpFoCLvQF",
				mComment: "_1-PD0_zreH-KVwpFoCLvQF"
			}
		},
		"./src/reddit/components/SourceLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/getShortenedLink.ts"),
				c = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				i = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				d = s("./src/reddit/components/SourceLink/index.m.less"),
				l = s.n(d),
				u = s("./src/lib/lessComponent.tsx");
			const m = u.a.wrapped(i.a, "OutboundLinkIcon", l.a),
				p = u.a.div("SourceLinkWrapper", l.a);
			t.a = e => {
				const {
					className: t,
					post: s,
					isCommentsPage: n
				} = e, {
					source: i,
					isSponsored: d
				} = s;
				return i ? o.a.createElement(p, {
					className: Object(a.a)({
						[l.a["m-comment"]]: n
					}, t)
				}, o.a.createElement(c.a, {
					href: i.url,
					isSponsored: d,
					source: i
				}, Object(r.a)(s), o.a.createElement(m, null))) : null
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, s) {
			e.exports = {
				SubscribeInternalButton: "QvUHhznbRVbKaK8dZGZVV",
				subscribeInternalButton: "QvUHhznbRVbKaK8dZGZVV",
				UnsubscribeButton: "_3gteUGkVlyl5VuSsNQJaz1",
				unsubscribeButton: "_3gteUGkVlyl5VuSsNQJaz1",
				isLarge: "_2jGEuWB6HWtIbTjMG68OXY",
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA",
				unsubscribeButtonHoverStyles: "_1tZ_edPYFuF6jhuTr_iPEE",
				joinCleanupContent: "_3GS035a5A47X7LR9VSQYy6"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/app/strings/index.ts"),
				r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				l = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				m = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				p = s.n(m),
				b = s("./src/lib/classNames/index.ts"),
				x = s("./src/lib/lessComponent.tsx");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var v = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const O = x.a.wrapped(e => {
					var {
						small: t,
						shouldReverseColor: s
					} = e, n = v(e, ["small", "shouldReverseColor"]);
					const a = s ? i.i : i.f;
					return o.a.createElement(a, E({}, n, {
						className: Object(b.a)(n.className, {
							[p.a.isLarge]: !t
						})
					}))
				}, "SubscribeInternalButton", p.a),
				g = x.a.wrapped(e => {
					var {
						small: t,
						belongsToType: s,
						shouldReverseColor: n
					} = e, a = v(e, ["small", "belongsToType", "shouldReverseColor"]);
					const r = n ? i.f : i.i;
					return o.a.createElement(r, E({}, a, {
						className: Object(b.a)(a.className, {
							[p.a.isLarge]: !t
						})
					}))
				}, "UnsubscribeButton", p.a),
				S = x.a.wrapped(d.a, "Checkmark", p.a),
				P = x.a.wrapped(l.a, "Plus", p.a),
				_ = x.a.div("ButtonSpacer", p.a);
			class y extends o.a.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						this.setState({
							isHovered: !1
						})
					}, this.onClick = e => {
						const {
							props: t
						} = this;
						if (t.userIsSubscriber ? t.onUnsubscribe() : (this.setState({
								hasJustSubscribed: !0
							}), t.onSubscribe()), t.onClick && t.onClick(e), t.getEventFactory) {
							const e = t.getEventFactory(t.userIsSubscriber);
							e && t.sendEvent(e)
						}
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const e = this.props,
						{
							className: t,
							identifier: s,
							language: n,
							onSubscribe: r,
							onUnsubscribe: c,
							postId: i,
							sendEvent: d,
							small: l = !1,
							subscribeReminderTooltipId: m,
							subscribeTooltipId: x,
							userIsSubscriber: y,
							doNotHideOtherSubscribeButtons: h,
							getEventFactory: j,
							onSubscriptionsRequested: L
						} = e,
						I = v(e, ["className", "identifier", "language", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "subscribeReminderTooltipId", "subscribeTooltipId", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
						f = this.state.isHovered;
					let T = y ? Object(a.a)(n, "subscriptions.".concat(Object(u.a)({
						type: s.type
					}), ".subscribed")) : Object(a.a)(n, "subscriptions.".concat(Object(u.a)({
						type: s.type
					}), ".subscribe"));
					return y && f && (T = Object(a.a)(n, "subscriptions.".concat(Object(u.a)({
						type: s.type
					}), ".unsubscribe"))), y ? this.state.hasJustSubscribed || h ? o.a.createElement(g, E({
						className: Object(b.a)(t, {
							[p.a.isLarge]: !l,
							[p.a.unsubscribeButtonHoverStyles]: !l
						}),
						onClick: this.onClick,
						small: l,
						belongsToType: s.type,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, I), l && o.a.createElement(S, null), !l && !f && o.a.createElement(S, null), !l && T) : l ? null : o.a.createElement(_, null) : o.a.createElement(o.a.Fragment, null, o.a.createElement(O, E({
						className: Object(b.a)(t, {
							[p.a.isLarge]: !l
						}),
						onClick: this.onClick,
						small: l
					}, I, {
						id: "subscribe-button-".concat(i),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}), o.a.createElement(P, null), !l && T))
				}
			}
			t.a = Object(c.a)(Object(r.b)(y))
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(c);
			t.a = e => o.a.createElement("i", {
				className: Object(a.a)(Object(r.b)("archived"), i.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(r.a, null, e.desc))
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~d01aa6d4.826a5b1113083e5d95f8.js.map