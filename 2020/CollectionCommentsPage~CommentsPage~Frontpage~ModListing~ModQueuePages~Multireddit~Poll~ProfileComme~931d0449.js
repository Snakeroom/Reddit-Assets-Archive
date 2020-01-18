// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~Poll~ProfileComme~931d0449.117a9b61548ff5c8b895.js
// Retrieved at 1/17/2020, 10:00:23 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~Poll~ProfileComme~931d0449"], {
		"./src/graphql/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/app/strings/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/prettyPrintNumber/index.ts"),
				a = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/config.ts"),
				l = s("./src/reddit/endpoints/governance/requester.ts");
			var u = s("./src/reddit/endpoints/governance/poll.ts");
			var m = s("./src/reddit/endpoints/governance/wallet.ts"),
				p = s("./src/reddit/models/Poll/index.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				x = s("./src/reddit/models/Vote/index.ts"),
				g = s("./src/reddit/selectors/gov.ts"),
				v = s("./src/reddit/actions/governance/constants.ts"),
				O = s("./src/reddit/actions/governance/errorToast.ts");
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return j
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "e", (function() {
				return S
			})), s.d(t, "h", (function() {
				return _
			})), s.d(t, "i", (function() {
				return R
			})), s.d(t, "f", (function() {
				return B
			})), s.d(t, "g", (function() {
				return A
			})), s.d(t, "j", (function() {
				return F
			})), s.d(t, "c", (function() {
				return H
			}));
			const f = Object(r.a)(v.b),
				j = Object(r.a)(v.c),
				y = Object(r.a)(v.d),
				h = Object(r.a)(v.e),
				E = Object(r.a)(v.f),
				S = (Object(r.a)(v.g), Object(r.a)(v.h), Object(r.a)(v.i)),
				I = Object(r.a)(v.j),
				P = Object(r.a)(v.k),
				C = Object(r.a)(v.l),
				k = Object(r.a)(v.r),
				_ = Object(r.a)(v.s),
				L = Object(r.a)(v.t),
				N = Object(r.a)(v.u),
				T = Object(r.a)(v.v),
				w = Object(r.a)(v.w),
				M = Object(r.a)(v.x),
				R = Object(r.a)(v.y),
				B = (e, t) => async (s, n, r) => {
					let o, {
							apiContext: a,
							gqlContext: i
						} = r,
						d = n().polls.models[e];
					if (s(P({
							pollId: e
						})), (o = d.type === p.a.GA ? await Object(u.c)(i(), e, t) : await Object(u.b)(a(), d.subredditId, e, t)).ok) {
						if (d.type === p.a.GA) {
							const {
								options: e
							} = o.body.data.updatePostPollVoteState.poll;
							s(E({
								pollId: d.id,
								optionId: t,
								options: e
							}))
						} else s(C(o.body));
						const r = n();
						if ((d = r.polls.models[e]) && Object(p.d)(d)) {
							const {
								postId: e
							} = d, t = r.posts.models[e];
							t && t.voteState === x.a.notVoted && s(Object(c.N)(e))
						}
					} else s(I({
						pollId: e,
						error: o.error || o.errors[0].message
					})), Object(O.a)(s, o.error || o.errors[0].messsage)
				}, A = (e, t) => async (s, r, c) => {
					let {
						apiContext: u
					} = c;
					s(L());
					const m = r().transfers.communityPoints.contentId || void 0,
						p = await
					function(e, t) {
						return Object(l.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: "".concat(d.a.metaUrl, "/wallets/me/").concat(t.subredditId, "/transfers"),
							method: "post"
						})
					}(u(), Object.assign({}, e, {
						contentId: m
					}));
					if (p.ok) {
						const c = r().user.language;
						s(N(Object.assign({}, p.body, {
							subredditId: e.subredditId
						}))), s(Object(i.e)({
							kind: b.b.SuccessCommunity,
							text: Object(n.a)(c, "gov.transferSuccess", {
								amount: Object(o.a)(e.amount),
								recipient: e.recipient,
								tokenName: Object(g.o)(r(), {
									subredditId: e.subredditId
								})
							})
						})), t && s(Object(a.f)())
					} else s(k({
						error: p.error
					})), Object(O.a)(s, p.error)
				}, F = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					t(w());
					const o = await Object(m.a)(r(), e);
					o.ok ? t(M(o.body)) : t(T({
						error: o.error
					}))
				}, H = (e, t) => async (s, r, o) => {
					let {
						apiContext: a
					} = o;
					s(y());
					const c = await
					function(e, t, s) {
						return Object(l.a)(e, {
							data: {
								optOut: t
							},
							method: "patch",
							endpoint: "".concat(d.a.metaUrl, "/wallets/").concat(s, "/me")
						})
					}(a(), e, t);
					if (c.ok) {
						s(M({
							[t]: c.body
						}));
						const o = e ? "polls.optOutSuccess" : "polls.optInSuccess";
						s(Object(i.e)({
							kind: b.b.SuccessCommunity,
							text: Object(n.a)(r().user.language, o, {
								tokenName: Object(g.o)(r(), {
									subredditId: t
								})
							})
						}))
					} else Object(O.a)(s, c.error)
				}
		},
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
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				u = s("./src/reddit/components/Media/index.tsx"),
				m = s("./src/reddit/components/PostMeta/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				x = s("./src/reddit/components/Thumbnail/index.tsx"),
				g = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/CrosspostBox/index.m.less"),
				f = s.n(O),
				j = s("./src/lib/lessComponent.tsx");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const h = j.a.div("Container", f.a),
				E = j.a.div("PostMetaWrapper", f.a),
				S = j.a.wrapped(p.c, "PostTitle", f.a),
				I = j.a.div("FlatList", f.a),
				P = j.a.div("FlatItem", f.a),
				C = j.a.span("FlatListDotSpacer", f.a),
				k = j.a.wrapped(h, "LinkContainer", f.a),
				_ = j.a.div("Content", f.a),
				L = j.a.div("ThumbnailContainer", f.a),
				N = Object(c.c)({
					isCurrentUserProfilePost: g.h,
					language: v.S,
					post: g.J,
					shouldOpenPostInNewTab: v.W,
					subreddit: g.U
				}),
				T = Object(o.b)(N);
			t.a = T(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					mediaProps: n,
					post: o,
					subreddit: a,
					language: c
				} = e;
				if (!o) return null;
				const i = {
						post: o,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: a,
						language: c,
						tooltipType: "".concat("CrosspostBox", "--").concat(n.isListing)
					},
					d = t;
				return o && !o.media ? r.a.createElement(k, {
					className: d
				}, r.a.createElement(_, null, r.a.createElement(E, null, r.a.createElement(m.a, i)), w(o), o.source && r.a.createElement(b.a, {
					post: o
				}), R(e)), A(e)) : r.a.createElement(h, {
					className: d
				}, r.a.createElement(E, null, r.a.createElement(m.a, i)), w(o), M(e), R(e))
			});
			const w = e => r.a.createElement(S, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				M = e => {
					const {
						mediaProps: t,
						post: s
					} = e, n = Object.assign({}, t, {
						post: s,
						crosspost: t.post
					});
					return r.a.createElement("div", null, r.a.createElement(u.a, y({}, n, {
						className: f.a.mediaContainer
					})))
				},
				R = e => {
					const {
						language: t,
						post: s
					} = e, {
						score: n
					} = s;
					return r.a.createElement(I, null, r.a.createElement(P, null, Object(i.c)(t, "posts.points.noun", n, {
						count: Object(l.b)(n)
					})), r.a.createElement(C, null), r.a.createElement(P, null, B(e)))
				},
				B = e => {
					const {
						language: t,
						post: s,
						shouldOpenPostInNewTab: n
					} = e, {
						numComments: o
					} = s;
					return r.a.createElement(a.a, {
						"data-click-id": "comments",
						to: Object(d.a)(s.permalink, !0),
						target: n ? "_blank" : void 0
					}, Object(i.c)(t, "posts.comments.noun", o, {
						count: Object(l.b)(o)
					}))
				},
				A = e => r.a.createElement(L, null, r.a.createElement(x.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/config.ts"),
				i = s("./src/reddit/selectors/gov.ts");
			const d = Object(a.c)({
				tokenSymbol: i.p
			});
			t.a = Object(o.b)(d)((function(e) {
				const t = e.grey ? e.tokenSymbol.grey : e.tokenSymbol.filled;
				return r.a.createElement("img", {
					className: e.className,
					src: "".concat(c.a.assetPath, "/").concat(t)
				})
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
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/i18n/components.tsx"),
				c = s("./src/reddit/i18n/utils.ts"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				x = s("./src/reddit/constants/posts.ts"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/helpers/isRemoved.ts"),
				O = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				f = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				j = s("./src/reddit/models/Post/index.ts"),
				y = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				E = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				S = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				I = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				P = s("./src/reddit/icons/fonts/Report/index.tsx"),
				C = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				k = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				_ = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				L = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				N = s("./src/reddit/components/PostBadges/index.m.less"),
				T = s.n(N);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const M = e => r.a.createElement("span", w({
					className: T.a.removalReason
				}, e), e.children),
				R = Object(d.e)("posts.archived"),
				B = Object(d.e)("modTools.commentsLocked"),
				A = Object(d.e)("modTools.moderatorOf"),
				F = Object(d.e)("modTools.stickiedPost"),
				H = Object(d.e)("modTools.pinnedPost"),
				G = (e, t, s) => {
					const n = "PostBadges--".concat(e, "--").concat(t);
					return s ? "".concat(n, "--").concat(s) : n
				},
				U = Object(g.t)({
					isProfilePostListing: g.I,
					isSubreddit: g.J,
					pageLayer: e => e
				}),
				J = Object(i.c)({
					isPinned: (e, t) => {
						let {
							post: s
						} = t;
						return Object(y.r)(e, {
							postId: s.id
						})
					},
					modModeEnabled: g.O
				}),
				D = Object(o.b)(J, (e, t) => ({
					onHideTooltip: () => e(Object(m.h)()),
					onOpenRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(m.f)({
						tooltipId: t
					}))
				}));
			t.a = U(D(e => {
				let {
					className: t,
					displayText: s,
					isSubreddit: o,
					inSubredditOrProfile: i,
					isCompactPinnedPost: d,
					isPinned: m,
					isProfilePostListing: g,
					language: y,
					modModeEnabled: N,
					onHideTooltip: U,
					onOpenRemovalReasonModal: J,
					onShowTooltip: D,
					post: W,
					tooltipType: Z
				} = e;
				const q = {
						caretOnTop: !1
					},
					V = W.isRemoved && !W.modRemovalReason && !W.modNote && W.belongsTo.type === x.a.SUBREDDIT,
					X = G("Approve", W.id, Z),
					z = G("Archived", W.id, Z),
					K = G("Automod", W.id, Z),
					Q = G("Lock", W.id, Z),
					Y = G("Mod", W.id, Z),
					$ = G("Remove", W.id, Z),
					ee = G("Report", W.id, Z),
					te = G("Spam", W.id, Z),
					se = G("Sticky", W.id, Z),
					ne = G("Pinned", W.id, Z);
				return r.a.createElement("div", {
					className: t
				}, i && s && W.distinguishType === u.B.MODERATOR && r.a.createElement(n.Fragment, null, r.a.createElement(L.a, {
					className: T.a.modIcon,
					desc: A(y, {
						displayText: s
					}),
					id: Y,
					onMouseEnter: D(Y),
					onMouseLeave: U
				}), r.a.createElement(p.c, w({
					tooltipId: Y,
					text: A(y, {
						displayText: s
					})
				}, q))), W.isArchived && r.a.createElement(n.Fragment, null, r.a.createElement(E.a, {
					className: T.a.archivedIcon,
					desc: R(y),
					id: z,
					onMouseEnter: D(z),
					onMouseLeave: U
				}), r.a.createElement(p.c, w({
					tooltipId: z,
					text: R(y)
				}, q))), W.isLocked && r.a.createElement(n.Fragment, null, r.a.createElement(S.a, {
					className: T.a.lockIcon,
					desc: B(y),
					id: Q,
					onMouseEnter: D(Q),
					onMouseLeave: U
				}), r.a.createElement(p.c, w({
					tooltipId: Q,
					text: B(y)
				}, q))), o && Object(j.k)(W) && !d && r.a.createElement(n.Fragment, null, r.a.createElement(k.a, {
					className: T.a.stickyIcon,
					desc: F(y),
					id: se,
					onMouseEnter: D(se),
					onMouseLeave: U
				}), r.a.createElement(p.c, w({
					tooltipId: se,
					text: F(y)
				}, q))), g && m && r.a.createElement(n.Fragment, null, r.a.createElement(k.a, {
					className: T.a.stickyIcon,
					desc: H(y),
					id: ne,
					onMouseEnter: D(ne),
					onMouseLeave: U
				}), r.a.createElement(p.c, w({
					tooltipId: ne,
					text: H(y)
				}, q))), (W.isApproved || W.approvedBy) && r.a.createElement(n.Fragment, null, r.a.createElement(h.a, {
					className: T.a.approveIcon,
					desc: Object(O.a)(y, W),
					id: X,
					onMouseEnter: D(X),
					onMouseLeave: U
				}), r.a.createElement(p.c, w({
					tooltipId: X,
					text: Object(O.a)(y, W)
				}, q))), Object(v.a)(W) && r.a.createElement(n.Fragment, null, r.a.createElement(I.a, {
					className: T.a.removeIcon,
					desc: Object(O.c)(y, W),
					id: $,
					onMouseEnter: D($),
					onMouseLeave: U
				}), V && r.a.createElement(b.a, {
					className: T.a.addRemovalReason,
					onClick: J,
					text: Object(c.c)("Add a removal reason")
				}), (W.modRemovalReason || W.modNote) && r.a.createElement(M, {
					onMouseEnter: D($),
					onMouseLeave: U
				}, r.a.createElement(a.c, null, "Removal reason")), r.a.createElement(p.c, w({
					tooltipId: $,
					text: Object(O.c)(y, W)
				}, q))), W.bannedBy && W.isSpam && r.a.createElement(n.Fragment, null, r.a.createElement(C.a, {
					className: T.a.spamIcon,
					desc: Object(O.e)(y, W),
					id: te,
					onMouseEnter: D(te),
					onMouseLeave: U
				}), r.a.createElement(p.c, w({
					tooltipId: te,
					text: Object(O.e)(y, W)
				}, q))), ("AutoModerator" === W.approvedBy || "AutoModerator" === W.bannedBy) && r.a.createElement(n.Fragment, null, r.a.createElement(_.a, {
					className: Object(l.a)(T.a.automoderator, !!W.bannedBy && T.a.isRemoved),
					desc: Object(O.b)(y),
					id: K,
					onMouseEnter: D(K),
					onMouseLeave: U
				}), r.a.createElement(p.c, w({
					tooltipId: K,
					text: Object(O.b)(y)
				}, q))), Object(f.a)(W) && !N && r.a.createElement(n.Fragment, null, r.a.createElement(P.a, {
					className: T.a.reportIcon,
					desc: Object(O.d)(y, W.numReports),
					id: ee,
					onMouseEnter: D(ee),
					onMouseLeave: U
				}), r.a.createElement(p.c, w({
					tooltipId: ee,
					text: Object(O.d)(y, W.numReports)
				}, q))))
			}))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/CrosspostBox/index.tsx"),
				a = s("./src/reddit/components/Media/index.tsx");
			t.a = e => {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? r.a.createElement(o.a, {
					postId: t.crosspostRootId,
					mediaProps: Object.assign({}, e, {
						crosspost: t,
						primaryContent: !1
					})
				}) : r.a.createElement(a.a, Object.assign({}, e, {
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
				r = s.n(n),
				o = s("./src/reddit/components/AwardBadges/index.tsx"),
				a = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				c = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				i = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/PostBadges/index.tsx"),
				l = s("./src/reddit/components/PostTopMeta/index.tsx"),
				u = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				g = s("./src/reddit/helpers/trackers/post.ts"),
				v = s("./src/reddit/models/Subreddit/index.ts"),
				O = s("./src/reddit/components/PostMeta/index.m.less"),
				f = s.n(O);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: O,
					isOverlay: j,
					language: y,
					post: h,
					shouldShowSubscribeButton: E,
					subredditOrProfile: S,
					tooltipType: I
				} = e;
				return r.a.createElement("div", {
					className: f.a.metaContainer
				}, !n && !h.isSponsored && S && r.a.createElement(c.a, {
					postId: h.id,
					subredditName: S.name
				}, r.a.createElement(m.a, {
					className: f.a.subredditName,
					"data-click-id": "subreddit",
					to: S.url
				}, S.displayText)), S && S.isQuarantined && r.a.createElement(u.a, null), !n && !h.isSponsored && S && E && !O && r.a.createElement(p.a, {
					getEventFactory: e => Object(g.f)(h.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: S.name,
						type: Object(v.d)(S) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: h.id,
					small: !0
				}), !n && !h.isSponsored && r.a.createElement(x.b, null), !n && !h.isSponsored && r.a.createElement(i.h, {
					type: h.belongsTo.type,
					id: h.belongsTo.id
				}), r.a.createElement(l.d, {
					className: f.a.postTopMeta,
					flairStyleTemplate: t,
					language: y,
					post: h,
					tooltipType: I
				}), r.a.createElement(d.a, {
					displayText: S ? S.displayText : null,
					inSubredditOrProfile: !!n,
					language: y,
					post: h,
					tooltipType: I
				}), S && r.a.createElement(a.a, {
					className: f.a.donationAmount,
					contentId: h.id,
					subredditId: S.id
				}), r.a.createElement(o.a, {
					hideCta: s,
					isOverlay: j,
					thing: h,
					tooltipType: I
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/getShortenedLink.ts"),
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
				return i ? r.a.createElement(p, {
					className: Object(o.a)({
						[l.a["m-comment"]]: n
					}, t)
				}, r.a.createElement(c.a, {
					href: i.url,
					isSponsored: d,
					source: i
				}, Object(a.a)(s), r.a.createElement(m, null))) : null
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
				r = s.n(n),
				o = s("./src/app/strings/index.ts"),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				l = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				m = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				p = s.n(m),
				b = s("./src/lib/classNames/index.ts"),
				x = s("./src/lib/lessComponent.tsx");

			function g() {
				return (g = Object.assign || function(e) {
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
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const O = x.a.wrapped(e => {
					var {
						small: t,
						shouldReverseColor: s
					} = e, n = v(e, ["small", "shouldReverseColor"]);
					const o = s ? i.i : i.f;
					return r.a.createElement(o, g({}, n, {
						className: Object(b.a)(n.className, {
							[p.a.isLarge]: !t
						})
					}))
				}, "SubscribeInternalButton", p.a),
				f = x.a.wrapped(e => {
					var {
						small: t,
						belongsToType: s,
						shouldReverseColor: n
					} = e, o = v(e, ["small", "belongsToType", "shouldReverseColor"]);
					const a = n ? i.f : i.i;
					return r.a.createElement(a, g({}, o, {
						className: Object(b.a)(o.className, {
							[p.a.isLarge]: !t
						})
					}))
				}, "UnsubscribeButton", p.a),
				j = x.a.wrapped(d.a, "Checkmark", p.a),
				y = x.a.wrapped(l.a, "Plus", p.a),
				h = x.a.div("ButtonSpacer", p.a);
			class E extends r.a.Component {
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
							onSubscribe: a,
							onUnsubscribe: c,
							postId: i,
							sendEvent: d,
							small: l = !1,
							subscribeReminderTooltipId: m,
							subscribeTooltipId: x,
							userIsSubscriber: E,
							doNotHideOtherSubscribeButtons: S,
							getEventFactory: I,
							onSubscriptionsRequested: P
						} = e,
						C = v(e, ["className", "identifier", "language", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "subscribeReminderTooltipId", "subscribeTooltipId", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
						k = this.state.isHovered;
					let _ = E ? Object(o.a)(n, "subscriptions.".concat(Object(u.a)({
						type: s.type
					}), ".subscribed")) : Object(o.a)(n, "subscriptions.".concat(Object(u.a)({
						type: s.type
					}), ".subscribe"));
					return E && k && (_ = Object(o.a)(n, "subscriptions.".concat(Object(u.a)({
						type: s.type
					}), ".unsubscribe"))), E ? this.state.hasJustSubscribed || S ? r.a.createElement(f, g({
						className: Object(b.a)(t, {
							[p.a.isLarge]: !l,
							[p.a.unsubscribeButtonHoverStyles]: !l
						}),
						onClick: this.onClick,
						small: l,
						belongsToType: s.type,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, C), l && r.a.createElement(j, null), !l && !k && r.a.createElement(j, null), !l && _) : l ? null : r.a.createElement(h, null) : r.a.createElement(r.a.Fragment, null, r.a.createElement(O, g({
						className: Object(b.a)(t, {
							[p.a.isLarge]: !l
						}),
						onClick: this.onClick,
						small: l
					}, C, {
						id: "subscribe-button-".concat(i),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}), r.a.createElement(y, null), !l && _))
				}
			}
			t.a = Object(c.a)(Object(a.b)(E))
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				Checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				mActive: "tLupTGll01Uj0qzkNAjEB",
				mActiveRedditStyle: "_3zu1ZycuCQZ6UeSogWYVka",
				mDisabled: "_2hst4PduZ_m486CeR0rkEm",
				mDisabledRedditStyle: "_2MFHixazvnGgoOmoOzwbIu",
				CheckboxSizing: "_1yJa2uREsO-mxGPj5tbxXy",
				checkboxSizing: "_1yJa2uREsO-mxGPj5tbxXy"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Checkbox/index.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var i = e => r.a.createElement("svg", c({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), r.a.createElement("g", {
					transform: "translate(-32.000000, -173.000000)"
				}, r.a.createElement("g", {
					transform: "translate(32.000000, 173.000000)"
				}, r.a.createElement("path", {
					d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
				})))),
				d = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = s("./src/reddit/controls/Checkbox/index.m.less"),
				u = s.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const b = e => t => {
					const {
						className: s,
						disabled: n,
						redditStyle: a,
						"data-redditstyle": c
					} = t, i = p(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), d = ((e, t, s) => {
						const n = !(!t && !s);
						let r = "";
						return r = e ? n ? u.a.mDisabledRedditStyle : u.a.mDisabled : n ? u.a.mActiveRedditStyle : u.a.mActive
					})(n, a, c);
					return r.a.createElement(e, m({
						className: Object(o.a)(u.a.Checkbox, d, s)
					}, i))
				},
				x = b(d.a),
				g = b(i);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? g : e.isCheckboxSelected ? x : a.a;
				return r.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: e.className,
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, r.a.createElement(t, {
					className: Object(o.a)(u.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "b", (function() {
				return d
			}));
			var n, r = s("./src/config.ts"),
				o = s("./src/reddit/endpoints/governance/requester.ts");

			function a(e) {
				switch (e) {
					case n.Ethereum:
						return "Ethereum Main Network";
					case n.Rinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}
			async function c(e, t, s) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(r.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: s
					}
				})
			}
			async function i(e, t, s) {
				return await Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(r.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: s
				})
			}
			async function d(e, t, s) {
				return await Object(o.a)(e, {
					method: "delete",
					endpoint: "".concat(r.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(s)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.Stellar = "stellar"
			}(n || (n = {}))
		},
		"./src/reddit/endpoints/governance/poll.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return u
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "a", (function() {
				return p
			}));
			var n = s("./node_modules/lodash/get.js"),
				r = s.n(n),
				o = s("./src/config.ts"),
				a = s("./src/graphql/operations/PollVote.json"),
				c = s("./src/lib/makeGqlRequest/index.ts"),
				i = s("./src/lib/omitHeaders/index.ts"),
				d = s("./src/reddit/constants/headers.ts"),
				l = (s("./src/reddit/models/Poll/index.ts"), s("./src/reddit/endpoints/governance/requester.ts"));

			function u(e, t, s, n) {
				return Object(l.a)(e, {
					method: "put",
					endpoint: "".concat(o.a.metaUrl, "/polls/").concat(t, "/").concat(s, "/votes/me/").concat(n)
				})
			}
			const m = (e, t, s) => Object(c.a)(e, Object.assign({}, a, {
				variables: {
					input: {
						postId: t,
						optionId: s
					}
				}
			}));

			function p(e, t) {
				return Object(l.a)(Object(i.a)(e, [d.a]), {
					method: "get",
					endpoint: "".concat(e.apiUrl, "/by_id/").concat(t, ".json")
				}).then(e => e.ok ? Object.assign({}, e, {
					body: {
						title: r()(e.body, ["data", "children", 0, "data", "title"], ""),
						url: r()(e.body, ["data", "children", 0, "data", "permalink"], "")
					}
				}) : e)
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			}));
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/bignumber.js/bignumber.js"),
				r = s("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const s = new n.BigNumber(e),
					r = new n.BigNumber(t);
				return s.dividedBy(r).decimalPlaces(2).toString()
			}

			function a(e, t) {
				return Object(r.b)(parseInt(o(e, t), 10))
			}

			function c(e, t) {
				const s = new n.BigNumber(e),
					r = new n.BigNumber(t);
				return s.multipliedBy(r).toFixed(0)
			}
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(c);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("archived"), i.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/svgs/CircleCheck/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/platform.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const c = new Set(["pollstest", "whatssnoo"]),
				i = new Set([""]),
				d = e => c.has((Object(o.e)(e) || "").toLowerCase()) || i.has((Object(o.e)(e) || "").toLowerCase()) && Object(r.c)(e, {
					experimentEligibilitySelector: a.J,
					experimentName: n.cb
				}) === n.jb.Enabled
		},
		"./src/reddit/selectors/gov.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "e", (function() {
				return p
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "h", (function() {
				return x
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "j", (function() {
				return v
			})), s.d(t, "o", (function() {
				return O
			})), s.d(t, "p", (function() {
				return f
			})), s.d(t, "n", (function() {
				return j
			})), s.d(t, "k", (function() {
				return y
			})), s.d(t, "l", (function() {
				return h
			})), s.d(t, "s", (function() {
				return E
			})), s.d(t, "a", (function() {
				return S
			})), s.d(t, "f", (function() {
				return I
			})), s.d(t, "q", (function() {
				return P
			})), s.d(t, "m", (function() {
				return C
			})), s.d(t, "r", (function() {
				return k
			}));
			var n = s("./src/reddit/contexts/PageLayer/index.tsx"),
				r = s("./src/reddit/endpoints/governance/crypto.ts"),
				o = s("./src/reddit/featureFlags/index.ts"),
				a = s("./src/reddit/selectors/experiments/pollsGA.ts");
			const c = [],
				i = {},
				d = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				l = (e, t) => {
					let {
						subredditId: s
					} = t;
					const n = E(e, {
						subredditId: s
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.harberger ? n.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				u = (e, t) => {
					const s = y(e, t);
					if (s) return s.mainHeader
				},
				m = (e, t) => {
					const s = y(e, t);
					return s && s.mainHeader ? s.mainHeader.price : "0"
				},
				p = (e, t) => {
					const s = y(e, t);
					return s && s.mainHeader ? {
						owner: s.mainHeader.owner,
						ownerId: s.mainHeader.ownerId
					} : i
				},
				b = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				x = (e, t) => {
					if (Object(a.a)(e)) return !0;
					const s = o.d.spPolls(e) || o.d.spKarmaPoints(e),
						n = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (n) {
						const e = !!n.polls && !1 === n.polls.canCreate;
						return s && !e
					}
					return s
				},
				g = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				v = (e, t) => {
					const s = Object(n.m)(e, t);
					return s && e.subreddits.gov.releaseNotes[s] || c
				},
				O = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				f = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || d,
				j = (e, t) => {
					const s = P(e, t);
					return s && s.decimals ? "1" + "0".repeat(s.decimals) : "1"
				},
				y = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				h = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				E = (e, t) => {
					const s = h(e, t);
					return s && s.walletProvider
				},
				S = (e, t) => {
					const s = E(e, t),
						n = h(e, t);
					return s && s.provider || n && n.provider
				},
				I = (e, t) => {
					const s = S(e, t);
					return s === r.a.Ethereum || s === r.a.Rinkeby
				},
				P = (e, t) => {
					const s = E(e, t),
						n = S(e, t);
					if (s && !s.inTransition && n === r.a.Stellar) return {
						address: s.extra && s.extra.issuerAddress || "",
						decimals: s.extra && s.extra.decimals || 7,
						symbol: s.extra && s.extra.token || "PHOTON"
					};
					const o = s && s.extra && s.extra.contracts,
						a = o && o.unlocked;
					return a && {
						address: a.address,
						symbol: a.token || "",
						decimals: a.decimals || 18,
						image: a.image
					}
				},
				C = (e, t) => {
					let {
						subredditId: s
					} = t;
					const n = E(e, {
						subredditId: s
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.subscriptions ? n.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				k = (e, t) => {
					const s = h(e, t);
					return !!s && !!s.walletProvider && !s.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~Poll~ProfileComme~931d0449.117a9b61548ff5c8b895.js.map