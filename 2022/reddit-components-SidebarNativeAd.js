// https://www.redditstatic.com/desktop2x/reddit-components-SidebarNativeAd.cb287e573c406c6c3ab5.js
// Retrieved at 3/7/2022, 12:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-SidebarNativeAd"], {
		"./src/lib/constants/specialMembership.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = "custom"
		},
		"./src/lib/getShortenedLink.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/models/Media/index.ts"),
				r = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				o = s.n(r);
			t.a = function(e) {
				const {
					source: t,
					isSponsored: s,
					domainOverride: r
				} = e;
				let a = "";
				if (s) {
					if (t && t.displayText) return t.displayText.length > 30 ? t.displayText.substring(0, 30) + "..." : t.displayText;
					a = r || Object(n.D)(e)
				} else a = Object(n.D)(e);
				const i = o.a.parse(a),
					c = i.path || "",
					d = c.length > 7 ? c.substring(0, 7) + "..." : c;
				return (i.hostname ? i.hostname.replace("www.", "") : "") + d
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts");
			const o = [r.rc, r.pb, r.B, r.Q, r.kb, r.Sb],
				a = {
					[r.Sb]: e => n.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [n.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[r.kb]: e => n.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [n.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[r.Q]: e => n.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [n.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[r.B]: e => n.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [n.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[r.pb]: e => n.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [n.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[r.rc]: e => n.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [n.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				i = {
					[r.Sb]: e => n.fbt._("{amount}s", [n.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[r.kb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[r.Q]: e => n.fbt._("{amount}h", [n.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[r.B]: e => n.fbt._("{amount}d", [n.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[r.pb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.rc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[r.pb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.rc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e, t = !1, s = !1) {
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[r.rc]: "",
						[r.pb]: "",
						[r.B]: "",
						[r.Q]: "",
						[r.kb]: "",
						[r.Sb]: ""
					};
				let u = d - c;
				if (u <= 0) return n.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const n of o) {
					const e = Math.floor(u / n);
					e && (l[n] = (t ? i : a)[n](e).toString()), u -= e * n
				}
				const m = o.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || s ? m : n.fbt._("{amount of time left} left", [n.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "e", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return i
			}));
			const n = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "g", (function() {
				return d
			})), s.d(t, "h", (function() {
				return l
			})), s.d(t, "i", (function() {
				return u
			}));
			const n = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/components/AvatarPost/index.m.less": function(e, t, s) {
			e.exports = {
				avatarPostContainer: "_2nck8non0VYnkIkyUpuvpw",
				avatarPostImage: "_2yQLdTnHA0y3hZ3I588oUM"
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
			s.d(t, "b", (function() {
				return I
			})), s.d(t, "a", (function() {
				return P
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				u = s("./src/reddit/components/Media/index.tsx"),
				m = s("./src/reddit/components/PostMeta/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				_ = s("./src/reddit/components/Thumbnail/index.tsx"),
				x = s("./src/lib/constants/index.ts"),
				E = s("./src/reddit/contexts/Post/index.tsx"),
				f = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/CrosspostBox/index.m.less"),
				S = s.n(O),
				y = s("./src/lib/lessComponent.tsx");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const I = 8,
				P = 1,
				C = y.a.div("Container", S.a),
				g = y.a.div("PostMetaWrapper", S.a),
				k = y.a.wrapped(p.c, "PostTitle", S.a),
				j = y.a.div("FlatList", S.a),
				L = y.a.div("FlatItem", S.a),
				N = y.a.span("FlatListDotSpacer", S.a),
				T = y.a.wrapped(C, "LinkContainer", S.a),
				M = y.a.div("Content", S.a),
				F = y.a.div("ThumbnailContainer", S.a),
				B = Object(c.c)({
					isCurrentUserProfilePost: f.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== x.Nb.TOPIC),
					shouldOpenPostInNewTab: h.hb
				}),
				w = Object(a.b)(B);
			t.c = Object(E.b)(w(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: n,
					mediaProps: r,
					post: a,
					subredditOrProfile: i
				} = e;
				if (!a) return null;
				const c = {
						post: a,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: n,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i,
						tooltipType: `CrosspostBox--${r.isListing}`
					},
					d = t;
				return a && !a.media ? o.a.createElement(T, {
					className: d
				}, o.a.createElement(M, null, o.a.createElement(g, null, o.a.createElement(m.a, c)), A(a), a.source && o.a.createElement(b.a, {
					post: a
				}), D(e)), H(e)) : o.a.createElement(C, {
					className: d
				}, o.a.createElement(g, null, o.a.createElement(m.a, c)), A(a), R(e), D(e))
			}));
			const A = e => o.a.createElement(k, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				R = e => {
					const {
						mediaProps: t,
						post: s
					} = e, n = {
						...t,
						post: s,
						crosspost: t.post
					};
					return o.a.createElement("div", null, o.a.createElement(u.a, v({}, n, {
						className: S.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				D = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return o.a.createElement(j, null, o.a.createElement(L, null, n.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [n.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), o.a.createElement(N, null), o.a.createElement(L, null, U(e)))
				},
				U = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: r
					} = t;
					return o.a.createElement(i.a, {
						"data-click-id": "comments",
						to: Object(d.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, n.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [n.fbt._plural(r, "comment count", Object(l.b)(r))], {
						hk: "xPYWL"
					}))
				},
				H = e => o.a.createElement(F, null, o.a.createElement(_.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/NativeBannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				BannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG",
				bannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG"
			}
		},
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/components/HumanDate/index.tsx"),
				o = s("./src/lib/timeUntil/index.ts"),
				a = s("./node_modules/react/index.js"),
				i = s.n(a);
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return i.a.createElement("span", {
					className: e.className
				}, t ? c._("Voting closed {timeAgo}", [c._param("timeAgo", i.a.createElement(r.d, {
					seconds: e.poll.endsAt / n.Sb
				}))], {
					hk: "3OERID"
				}) : Object(o.a)(new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/Poll/PostTitleMetaData/index.m.less": function(e, t, s) {
			e.exports = {
				proposalMetaData: "_3yYOHq_rWQcgaR_pinEQU7",
				proposalExpiry: "_1poH87fXNrjNu84jKXBtun"
			}
		},
		"./src/reddit/components/PostBadges/index.m.less": function(e, t, s) {
			e.exports = {
				adminIcon: "_1cje4rrmwL0yZgCOlGyBJ-",
				approveIcon: "_1knR9NIIXdSFC9IeFN11JL",
				automoderator: "_2etEb_0bRB9axAqF3uX28S",
				icon: "_3vju76MdF2FaGmELBeiJ_r",
				lockIcon: "_3wTfn3Meg1rXJ-qd2jUWMt",
				modIcon: "_SMl46gACTEszA_4A0Qfs",
				removeIcon: "_3yuF1RnBRJL4OS_STsoXcC",
				reportIcon: "_3guZWUAROueft8TPPGDZ-R",
				spamIcon: "_2BWw37nLL0rX6n7xcXciyD",
				stickyIcon: "NI8uZ-19oHf9gPO8jOvFu",
				addRemovalReason: "COGitU-ItwLZG_fP5rsdE",
				isRemoved: "_27iLVqax1FuPWTymkSkKAq",
				archivedIcon: "_2WSiH2JwZq4bXuvrDn-cgU",
				removalReason: "_16Ih3bzeELRlI6AWeW-nFy"
			}
		},
		"./src/reddit/components/PostBadges/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/ads/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				p = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				b = s("./src/reddit/constants/experiments.ts"),
				_ = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/reddit/helpers/isRemoved.ts"),
				f = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				h = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				O = s("./src/reddit/icons/fonts/index.tsx"),
				S = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				y = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				v = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				I = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				P = s("./src/reddit/icons/fonts/Report/index.tsx"),
				C = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				g = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				k = s("./src/reddit/models/Post/index.ts"),
				j = s("./src/reddit/selectors/experiments/adHeaderExperiment.ts"),
				L = s("./src/reddit/selectors/posts.ts"),
				N = s("./src/reddit/components/PostBadges/index.m.less"),
				T = s.n(N);

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const F = e => o.a.createElement("span", M({
					className: T.a.removalReason
				}, e), e.children),
				B = () => n.fbt._("Archived", null, {
					hk: "zv3q3"
				}),
				w = () => n.fbt._("Comments are locked", null, {
					hk: "8HjJ9"
				}),
				A = e => n.fbt._("Moderator of {community name}", [n.fbt._param("community name", e)], {
					hk: "nJqIB"
				}),
				R = () => n.fbt._("Stickied post", null, {
					hk: "3qSaBs"
				}),
				D = () => n.fbt._("Pinned post", null, {
					hk: "2oxErI"
				}),
				U = (e, t, s) => {
					const n = `PostBadges--${e}--${t}`;
					return s ? `${n}--${s}` : n
				},
				H = Object(x.u)({
					isProfilePostListing: x.L,
					isSubreddit: x.N,
					pageLayer: e => e
				}),
				W = Object(i.c)({
					isPinned: (e, {
						post: t
					}) => Object(L.q)(e, {
						postId: t.id
					}),
					modModeEnabled: x.T
				}),
				G = Object(a.b)(W, (e, t) => ({
					onHideTooltip: () => e(Object(u.i)()),
					onOpenRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(u.f)({
						tooltipId: t
					}))
				}));
			t.a = H(G(({
				className: e,
				displayText: t,
				isSubreddit: s,
				inSubredditOrProfile: i,
				isCompactPinnedPost: u,
				isPinned: x,
				isProfilePostListing: L,
				modModeEnabled: N,
				onHideTooltip: H,
				onOpenRemovalReasonModal: W,
				onShowTooltip: G,
				post: V,
				tooltipType: q,
				pageLayer: z
			}) => {
				const K = {
						caretOnTop: !1
					},
					X = Object(a.e)(j.a),
					Q = (V.isSponsored || Object(c.u)(z)) && (X === b.u.NoLockIcon || X === b.u.PromotedGrey),
					Y = V.isRemoved && !V.modRemovalReason && !V.modNote && V.belongsTo.type === _.a.SUBREDDIT,
					J = U("Approve", V.id, q),
					Z = U("Archived", V.id, q),
					$ = U("Lock", V.id, q),
					ee = U("Mod", V.id, q),
					te = U("Remove", V.id, q),
					se = U("Report", V.id, q),
					ne = U("Spam", V.id, q),
					re = U("Sticky", V.id, q),
					oe = U("Pinned", V.id, q);
				return o.a.createElement("div", {
					className: e
				}, i && t && V.distinguishType === l.G.MODERATOR && o.a.createElement(r.Fragment, null, o.a.createElement(O.a, {
					name: "mod",
					isFilled: !0,
					className: Object(d.a)(T.a.icon, T.a.modIcon)
				}), o.a.createElement(m.c, M({
					tooltipId: ee,
					text: A(t)
				}, K))), V.isArchived && o.a.createElement(r.Fragment, null, o.a.createElement(y.a, {
					isFilled: !0,
					className: Object(d.a)(T.a.icon, T.a.archivedIcon),
					desc: B(),
					id: Z,
					onMouseEnter: G(Z),
					onMouseLeave: H
				}), o.a.createElement(m.c, M({
					tooltipId: Z,
					text: B()
				}, K))), V.isLocked && !Q && o.a.createElement(r.Fragment, null, o.a.createElement(v.a, {
					isFilled: !0,
					className: Object(d.a)(T.a.icon, T.a.lockIcon),
					desc: w(),
					id: $,
					onMouseEnter: G($),
					onMouseLeave: H
				}), o.a.createElement(m.c, M({
					tooltipId: $,
					text: w()
				}, K))), s && Object(k.r)(V) && !u && o.a.createElement(r.Fragment, null, o.a.createElement(g.a, {
					isFilled: !0,
					className: Object(d.a)(T.a.icon, T.a.stickyIcon),
					desc: R(),
					id: re,
					onMouseEnter: G(re),
					onMouseLeave: H
				}), o.a.createElement(m.c, M({
					tooltipId: re,
					text: R()
				}, K))), L && x && o.a.createElement(r.Fragment, null, o.a.createElement(g.a, {
					isFilled: !0,
					className: Object(d.a)(T.a.icon, T.a.stickyIcon),
					desc: D(),
					id: oe,
					onMouseEnter: G(oe),
					onMouseLeave: H
				}), o.a.createElement(m.c, M({
					tooltipId: oe,
					text: D()
				}, K))), (V.isApproved || V.approvedBy) && o.a.createElement(r.Fragment, null, o.a.createElement(S.a, {
					isFilled: !0,
					className: Object(d.a)(T.a.icon, T.a.approveIcon),
					desc: Object(f.a)(V),
					id: J,
					onMouseEnter: G(J),
					onMouseLeave: H
				}), o.a.createElement(m.c, M({
					tooltipId: J,
					text: Object(f.a)(V)
				}, K))), Object(E.a)(V) && o.a.createElement(r.Fragment, null, o.a.createElement(I.a, {
					isFilled: !0,
					className: Object(d.a)(T.a.icon, T.a.removeIcon),
					desc: Object(f.b)(V),
					id: te,
					onMouseEnter: G(te),
					onMouseLeave: H
				}), Y && o.a.createElement(p.a, {
					className: T.a.addRemovalReason,
					onClick: W,
					text: n.fbt._("Add a removal reason", null, {
						hk: "1YDo3"
					})
				}), (V.modRemovalReason || V.modNote) && o.a.createElement(F, {
					onMouseEnter: G(te),
					onMouseLeave: H
				}, n.fbt._("Removal reason", null, {
					hk: "2DhKVZ"
				})), o.a.createElement(m.c, M({
					tooltipId: te,
					text: Object(f.b)(V)
				}, K))), V.bannedBy && V.isSpam && o.a.createElement(r.Fragment, null, o.a.createElement(C.a, {
					isFilled: !0,
					className: Object(d.a)(T.a.icon, T.a.spamIcon),
					desc: Object(f.d)(V),
					id: ne,
					onMouseEnter: G(ne),
					onMouseLeave: H
				}), o.a.createElement(m.c, M({
					tooltipId: ne,
					text: Object(f.d)(V)
				}, K))), Object(h.a)(V) && !N && o.a.createElement(r.Fragment, null, o.a.createElement(P.a, {
					isFilled: !0,
					className: Object(d.a)(T.a.icon, T.a.reportIcon),
					desc: Object(f.c)(V.numReports),
					id: se,
					onMouseEnter: G(se),
					onMouseLeave: H
				}), o.a.createElement(m.c, M({
					tooltipId: se,
					text: Object(f.c)(V.numReports)
				}, K))))
			}))
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, s) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/ads/index.ts"),
				i = s("./src/reddit/components/AdViewability/index.tsx"),
				c = s("./src/reddit/helpers/trackers/gallery.ts"),
				d = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = s("./src/reddit/hooks/useTracking.ts");
			var u = r.a.memo(e => {
					const t = Object(n.useRef)(null),
						s = Object(l.a)(),
						o = Object(n.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: n
								} = t;
								n >= .5 && s(c.d(e.postId))
							})
						}, [s, e.postId]),
						a = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, o, a), r.a.createElement("div", {
						role: "presentation"
					}, r.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/connectors/PostViewable/index.ts"),
				b = s("./src/reddit/models/Media/index.ts"),
				_ = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/telemetry.ts"),
				E = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/objectSelector/index.ts"),
				h = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				O = s("./src/reddit/components/PostContainer/index.m.less"),
				S = s.n(O);
			const y = Object(p.a)(() => Object(o.c)({
				basePixelMetadata: Object(f.a)((e, {
					post: t
				}) => Object(_.b)(e, t.id)),
				clickTrackingId: (e, {
					post: t
				}) => t.id,
				imageGalleryCurrentItem: (e, {
					post: t
				}) => Object(_.i)(e, {
					postId: t.id
				}),
				pageType: e => Object(x.d)(e).pageType
			}));
			class v extends r.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: n,
						imageGalleryCurrentItem: o,
						makePostContainerId: d,
						post: l,
						onClick: m,
						pageType: p,
						sendEvent: _,
						style: x,
						ref: f,
						shouldAddGalleryViewability: h = !0
					} = this.props, O = r.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: x,
						ref: f,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && e(() => m && m(s, l, t, o, p))(s), l.id && o) {
								const {
									source: e
								} = Object(a.t)(l, o);
								e && e.outboundUrl && _(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(E.a)(S.a.WrappedPost, n, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": "post-container",
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, s), y = !!l.media && l.media.type === b.o.VIDEO;
					return l.isSponsored || y ? r.a.createElement(i.a, {
						post: l,
						trackDisplay: !0
					}, O) : l.media && Object(b.E)(l.media) && h ? r.a.createElement(u, {
						postId: l.id
					}, O) : O
				}
			}
			t.a = y(Object(h.a)(Object(m.c)(v)))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/CrosspostBox/index.tsx"),
				a = s("./src/reddit/components/Media/index.tsx");

			function i(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? r.a.createElement(o.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * o.b - 2 * o.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : r.a.createElement(a.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR",
				SubscribeButton: "_2r87gmhJ9n0MsylKHkgDcp",
				subscribeButton: "_2r87gmhJ9n0MsylKHkgDcp"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/AwardBadges/index.tsx"),
				a = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				i = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = s("./src/reddit/components/PostBadges/index.tsx"),
				d = s("./src/reddit/components/PostTopMeta/index.tsx"),
				l = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				u = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				p = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				_ = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				x = s("./src/reddit/helpers/trackers/post.ts"),
				E = s("./src/reddit/hooks/useClickSourceData.ts"),
				f = s("./src/reddit/models/Subreddit/index.ts"),
				h = s("./src/reddit/components/PostMeta/index.m.less"),
				O = s.n(h);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: h,
					isOverlay: S,
					isTopicPage: y,
					post: v,
					shouldShowSubscribeButton: I,
					subredditOrProfile: P,
					tooltipType: C
				} = e, g = !!y, k = Object(E.a)();
				return r.a.createElement("div", {
					className: O.a.metaContainer
				}, !n && !v.isSponsored && P && r.a.createElement(a.a, {
					postId: v.id,
					subredditName: P.name
				}, r.a.createElement(u.a, {
					className: O.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: P.url,
						state: k
					}
				}, P.displayText)), P && P.isQuarantined && r.a.createElement(l.a, null), !n && !v.isSponsored && P && I && !h && r.a.createElement(m.a, {
					className: O.a.SubscribeButton,
					getEventFactory: e => Object(x.h)(v.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: P.name,
						type: Object(f.h)(P) ? p.a.PROFILE : p.a.SUBREDDIT
					},
					postId: v.id,
					size: b.d.XXS,
					small: !0
				}), !n && !v.isSponsored && r.a.createElement(_.b, null), !n && !v.isSponsored && r.a.createElement(i.h, {
					type: v.belongsTo.type,
					id: v.belongsTo.id
				}), r.a.createElement(d.d, {
					className: O.a.postTopMeta,
					flairStyleTemplate: t,
					post: v,
					tooltipType: C
				}), r.a.createElement(c.a, {
					displayText: P ? P.displayText : null,
					inSubredditOrProfile: !!n,
					post: v,
					tooltipType: C
				}), !g && r.a.createElement(o.a, {
					hideCta: s,
					thing: v,
					tooltipType: S ? d.c.Lightbox : void 0
				}))
			}
		},
		"./src/reddit/components/PostTitle/index.m.less": function(e, t, s) {
			e.exports = {
				outboundLinkIcon: "qgDkGQIoFEpMMeNtfI0BY",
				pollMeta: "FKej75-i0z1XubMqeVh9Q",
				styledLink: "SQnoC3ObvgnGjWt90zD9Z",
				isVisitedEnabled: "_2INHSNB8V5eaWp4P0rY_mE",
				Title: "_2SdHzo12ISmrC8H86TgSCp",
				title: "_2SdHzo12ISmrC8H86TgSCp",
				titleContainer: "y8HYJ-y_lTUHkQIc1mdCq",
				isNoWrap: "_2_QBmCTk6VD4M3dvKqXD23",
				postTitleVisibility: "_1hLrLjnE1G_RBCNcN9MVQf",
				ExtraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				extraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				Large: "_3wqmjmv3tb_k-PROt7qFZe",
				large: "_3wqmjmv3tb_k-PROt7qFZe",
				Medium: "_1zpZYP8cFNLfLDexPY65Y7",
				medium: "_1zpZYP8cFNLfLDexPY65Y7",
				Small: "uWdXen_41bh0iwLrgzFkc",
				small: "uWdXen_41bh0iwLrgzFkc",
				ExtraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				extraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				Metadata: "_2_YD0sbnnLrJvpCrMxBFaC",
				metadata: "_2_YD0sbnnLrJvpCrMxBFaC",
				Component: "_2FCtq-QzlfuN-SwVMUZMM3",
				component: "_2FCtq-QzlfuN-SwVMUZMM3"
			}
		},
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return M
			})), s.d(t, "a", (function() {
				return z
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/ads/index.ts"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/controls/OutboundLink/index.tsx"),
				b = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				_ = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				x = s("./src/reddit/actions/post.ts"),
				E = s("./src/reddit/helpers/flair.ts"),
				f = s("./src/reddit/helpers/path/index.ts"),
				h = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				O = s("./src/reddit/icons/fonts/index.tsx"),
				S = s("./src/reddit/models/Flair/index.ts"),
				y = s("./src/reddit/models/Media/index.ts"),
				v = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				I = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				P = s("./src/lib/getShortenedLink.ts"),
				C = s("./src/reddit/components/FlairWrapper/index.tsx"),
				g = s("./node_modules/fbt/lib/FbtPublic.js"),
				k = s("./src/lib/prettyPrintNumber/index.ts"),
				j = s("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				L = s("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				N = s.n(L);
			const T = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var M, F = Object(a.b)(T)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, n = s ? s.totalVotes : "0";
					return o.a.createElement("div", {
						className: Object(l.a)(e.className, N.a.proposalMetaData)
					}, o.a.createElement("span", null, g.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [g.fbt._param("count", Object(k.a)(n)), g.fbt._plural(parseInt(n))], {
						hk: "4rP1VK"
					})), t && o.a.createElement(j.a, {
						className: N.a.proposalExpiry,
						poll: t
					}))
				})),
				B = s("./src/reddit/components/SEOTitle/index.tsx"),
				w = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				A = s("./src/reddit/selectors/user.ts"),
				R = s("./src/reddit/components/PostTitle/index.m.less"),
				D = s.n(R),
				U = s("./src/config.ts"),
				H = s("./src/reddit/hooks/useClickSourceData.ts"),
				W = s("./src/reddit/hooks/usePostContext.ts"),
				G = s("./src/reddit/hooks/useTheme.ts"),
				V = s("./src/telemetry/models/Outbound.ts");

			function q() {
				return (q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall", e[e.Metadata = 5] = "Metadata"
			}(M || (M = {}));
			const z = ({
					size: e,
					titleColor: t,
					titleType: s,
					nowrap: n,
					children: r,
					className: a,
					redditStyle: i
				}) => {
					const c = Object(G.a)();
					let d = "";
					switch (e) {
						case M.ExtraLarge:
							d = D.a.ExtraLarge;
							break;
						case M.Large:
							d = D.a.Large;
							break;
						case M.Medium:
							d = D.a.Medium;
							break;
						case M.Small:
							d = D.a.Small;
							break;
						case M.ExtraSmall:
							d = D.a.ExtraSmall;
							break;
						case M.Metadata:
							d = D.a.Metadata
					}
					return o.a.createElement("div", {
						className: Object(l.a)(D.a.Title, a, d, {
							[D.a.isNoWrap]: n
						}),
						style: {
							"--posttitletextcolor": t || Object(I.a)({
								redditStyle: i,
								theme: c
							}).titleText
						}
					}, s ? o.a.createElement(B.b, {
						type: s
					}, r) : r)
				},
				K = ({
					className: e,
					disableVisited: t,
					titleColor: s,
					children: n,
					...r
				}) => o.a.createElement(i.a, q({}, r, {
					className: Object(l.a)(e, D.a.styledLink, {
						[D.a.isVisitedEnabled]: !t
					})
				}), n),
				X = ({
					disableVisited: e,
					nowrap: t,
					className: s,
					children: n
				}) => o.a.createElement("div", {
					className: Object(l.a)(D.a.titleContainer, s, {
						[D.a.isNoWrap]: t,
						[D.a.isVisitedEnabled]: !e
					})
				}, n),
				Q = Object(c.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(m.q)(e, {
						pageLayer: t
					}),
					shouldOpenPostInNewTab: A.hb
				}),
				Y = e => {
					const {
						post: t,
						subreddit: s
					} = e, {
						isSponsored: n
					} = t, r = Object(a.d)(), i = Object(H.a)(), c = Object(a.e)(w.b), l = e => {
						!c || t.media && Object(y.H)(t.media) || (e.preventDefault(), r(Object(x.ab)(Object(f.b)(t.permalink), t.id)))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return o.a.createElement(X, {
						nowrap: e.nowrap
					}, o.a.createElement(J, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return o.a.createElement(p.b, {
						href: t.source.url,
						isSponsored: n,
						postId: t.id,
						source: t.source
					}, o.a.createElement(J, e)); {
						const r = t.media && Object(y.H)(t.media) ? Object(h.c)(t.id, s.name) : t.permalink,
							a = e.isCommentPermalink ? Object(f.b)(r) : Object(_.a)(r, void 0, i);
						return o.a.createElement(X, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, n ? ((e, t) => {
							const {
								source: s
							} = Object(d.t)(e, t.imageGalleryCurrentItem);
							return s ? o.a.createElement(p.b, {
								href: s.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: s
							}, o.a.createElement(J, t)) : o.a.createElement(J, t)
						})(t, e) : o.a.createElement(K, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: a,
							onClick: l
						}, o.a.createElement(J, e)))
					}
				},
				J = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: s,
						post: n
					} = e;
					let r = e.format ? e.format(n) : n.title;
					s && "string" == typeof r && (r = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(r));
					const a = e.isCommentsPage ? B.a.PostComments : B.a.PostItem;
					return o.a.createElement(z, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: a
					}, t && o.a.createElement(C.a, {
						titleFlair: t,
						nowrap: !0,
						post: n,
						sendEvent: e.sendEvent
					}), r)
				},
				Z = e => {
					const {
						hideSourceLink: t,
						post: s
					} = e, {
						isSponsored: n
					} = s, r = e.isCommentsPage ? V.SourceElement.PostLink : V.SourceElement.ListingPostLink, a = !t && !e.isCrosspost && e.size !== M.Large && !s.isSponsored && !(s.media && Object(y.H)(s.media)) && (s.source || s.media && (s.media.type === y.o.GIFVIDEO || s.media.type === y.o.IMAGE || s.media.type === y.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (a) return o.a.createElement(b.a, {
							className: e.outboundLinkClassName,
							href: Object(y.D)(s),
							isSponsored: n,
							postId: s.id,
							source: s.source,
							sourceElement: r
						}, Object(P.a)(s), !s.isSponsored && o.a.createElement(O.a, {
							name: "external_link",
							className: D.a.outboundLinkIcon
						}))
					} else if (s.source && !e.isCrosspost && e.size !== M.Large && e.size !== M.ExtraLarge) return o.a.createElement(b.a, {
						className: e.outboundLinkClassName,
						href: s.source.url,
						isSponsored: n,
						postId: s.id,
						source: s.source,
						sourceElement: r
					}, Object(P.a)(s), !s.isSponsored && o.a.createElement(O.a, {
						name: "external_link",
						className: D.a.outboundLinkIcon
					}));
					return null
				};
			class $ extends o.a.Component {
				getDynamicStyleTags() {
					return o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id}.${D.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(n.c)(.45,Object(I.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(n.c)(.45,this.props.titleColor||Object(I.a)(this.props).titleText,Object(I.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: s,
						isCommentsPage: n,
						isOverlay: r,
						poll: a,
						post: i,
						showNSFWSpoilerFlairsOnly: c,
						showNSFWFlairsOnly: d
					} = this.props, u = s === S.b.Left, m = Object(C.b)(i), p = c ? m.filter(e => e.type === S.f.Nsfw || e.type === S.f.Spoiler) : u ? m.filter(e => Object(E.q)(e.type)) : [];
					let b = m;
					c ? b = [] : d ? b = m.filter(e => e.type === S.f.Nsfw) : u && (b = m.filter(e => !Object(E.q)(e.type)));
					const _ = !r && !n,
						x = !t && p && p.length > 0 && _,
						f = !t && b && b.length > 0 && _;
					return o.a.createElement("div", {
						className: Object(l.a)(D.a.Component, e, i.id),
						ref: this.props.innerRef
					}, !c && x && o.a.createElement(C.a, {
						isFlairFilter: !0,
						titleFlair: p,
						nowrap: !0,
						post: i,
						sendEvent: this.props.sendEvent
					}), !Object(v.b)(i) && o.a.createElement(Y, q({}, this.props, {
						leftFlair: c ? p : void 0
					})), a && o.a.createElement(F, {
						className: D.a.pollMeta,
						pollId: a.id
					}), o.a.createElement(Z, this.props), f && o.a.createElement(C.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: i,
						sendEvent: this.props.sendEvent
					}), o.a.createElement("div", {
						className: D.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${U.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = o.a.memo((function(e) {
				const t = Object(m.fb)(),
					s = Object(m.w)(t),
					n = Object(W.a)(),
					r = Object(a.e)(r => Q(r, {
						...n,
						...e,
						isCommentPermalink: s,
						pageLayer: t
					})),
					i = Object(G.a)(),
					c = Object(u.b)();
				return n ? o.a.createElement($, q({
					pageLayer: t,
					isCommentPermalink: s
				}, n, r, e, {
					theme: i,
					sendEvent: c
				})) : null
			}))
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router/esm/react-router.js"),
				c = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/actions/snoovatarModal.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = s("./src/reddit/icons/svgs/Shirt/index.tsx"),
				b = s("./src/reddit/models/Vote/index.ts"),
				_ = s("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				x = s.n(_);
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(i.i)(({
				isHovercard: e,
				username: t,
				isAvatarPost: s,
				post: i,
				share: _
			}) => {
				const f = Object(l.b)(),
					h = Object(a.d)(),
					O = i && i.id,
					S = i && i.voteState;
				let y = null;
				O || (y = e ? "user_hovercard" : "profile_overview");
				const v = Object(r.useCallback)(() => f(Object(m.g)(e ? "user_hovercard" : "profile_overview", t)), [e, f, t]);
				return o.a.createElement(u.t, {
					onClick: () => {
						s ? (f(m.h), O && S === b.a.notVoted && h(Object(c.jb)(O))) : v();
						const e = s ? "postify" : "copy";
						h(Object(d.b)({
							clickSource: y,
							share: _,
							source: e
						}))
					},
					className: Object(n.a)(x.a.snoovatarButton, x.a.snoovatarExtraPadding, x.a.compactButtonLayout, {
						[x.a.avatarPostifyButton]: s
					}),
					isFullWidth: !0
				}, o.a.createElement(p.a, {
					className: Object(n.a)({
						[x.a.shirtIcon]: !s,
						[x.a.avatarPostButtonShirtIcon]: s
					})
				}), E._("Try this Look", null, {
					hk: "dOuPb"
				}), o.a.createElement("div", {
					className: x.a.chevronIcon
				}))
			})
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, s) {
			e.exports = {
				snoovatarButton: "_3F1tNW0P4Ff182mO_CefIg",
				avatarPostifyButton: "_2Viile0fcrruho_hQqpnUx",
				snoovatarExtraPadding: "_3DnDqV66Np6rVEiI8QK7kl",
				shirtIcon: "_3gYTHRBO1S_S5AOddgqD6Z",
				avatarPostButtonShirtIcon: "ARFP2bx6U967JwMoJ2Xr5",
				compactButtonLayout: "VFbNvXfZXUhRFiCTDHO6f",
				chevronIcon: "_12pWM-aURvVUuSrUyqfNZh"
			}
		},
		"./src/reddit/components/SidebarNativeAd/index.m.less": function(e, t, s) {
			e.exports = {
				PostTopMeta: "_3AEXgAHaL2MFPHNuqOhEIE",
				postTopMeta: "_3AEXgAHaL2MFPHNuqOhEIE",
				BannerAdContainer: "_2c-vsdp-tGBM0QBPbMrQFy",
				bannerAdContainer: "_2c-vsdp-tGBM0QBPbMrQFy",
				PromotedPostContainer: "_3zZKTUxTxtgzF9ilawHBK-",
				promotedPostContainer: "_3zZKTUxTxtgzF9ilawHBK-",
				OutboundLinkIcon: "_32E2t93Jat5cKH_mcrBYWl",
				outboundLinkIcon: "_32E2t93Jat5cKH_mcrBYWl",
				SourceLinkWrapper: "oh3GXRqFb0Uvz5YUITfaW",
				sourceLinkWrapper: "oh3GXRqFb0Uvz5YUITfaW",
				TopLine: "_1kNrrHG9HK0nS07e9SmLEe",
				topLine: "_1kNrrHG9HK0nS07e9SmLEe",
				PostTitle: "_1j3PvrSrLpQFwf1wyUgEGj",
				postTitle: "_1j3PvrSrLpQFwf1wyUgEGj",
				PostMediaWrapper: "_39qBPkK3qVaXIie5LYoVdo",
				postMediaWrapper: "_39qBPkK3qVaXIie5LYoVdo",
				BackgroundWrapper: "_2c4IeOXoWvRb5OhOoDmy93",
				backgroundWrapper: "_2c4IeOXoWvRb5OhOoDmy93",
				PostContainer: "_2UoyU3i2ufwgr3Cy2lz5Jf",
				postContainer: "_2UoyU3i2ufwgr3Cy2lz5Jf"
			}
		},
		"./src/reddit/components/SidebarNativeAd/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "SidebarNativeAd", (function() {
				return Z
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/components/PostMedia/index.tsx"),
				c = s("./src/reddit/components/PostTitle/index.tsx"),
				d = s("./src/reddit/components/PostTopMeta/index.tsx"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/lib/getShortenedLink.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				p = s("./src/lib/opener/index.ts"),
				b = s("./src/reddit/actions/ads/index.ts"),
				_ = s("./src/reddit/actions/post.ts"),
				x = s("./src/reddit/components/PostContainer/index.tsx"),
				E = s("./src/reddit/constants/adEvents.ts"),
				f = s("./src/reddit/contexts/InsideOverlay.tsx"),
				h = s("./src/reddit/contexts/Post/index.tsx"),
				O = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				S = s("./src/reddit/helpers/adCount/index.ts"),
				y = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				v = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				I = s("./src/reddit/helpers/truncateStringWithEllipsis.ts"),
				P = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				C = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				g = s("./src/reddit/models/Theme/index.ts"),
				k = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				j = s("./src/lib/constants/index.ts"),
				L = s("./src/reddit/models/Media/index.ts"),
				N = s("./src/reddit/components/NativeBannerAd/index.m.less"),
				T = s.n(N);
			const M = m.a.wrapped(e => o.a.createElement("img", {
				className: e.className,
				src: e.src
			}), "BannerAdImage", T.a);
			class F extends o.a.Component {
				render() {
					const {
						post: e
					} = this.props;
					if (!e.media) return null;
					const t = !e.media || Object(L.N)(e.media) || Object(L.G)(e.media) || Object(L.H)(e.media) ? "" : e.media.content,
						{
							type: s
						} = e.media;
					if (!t || !s) return null;
					switch (s) {
						case j.qb.IMAGE:
							return o.a.createElement(M, {
								src: t
							});
						default:
							return null
					}
				}
			}
			var B = s("./src/reddit/components/SidebarNativeAd/index.m.less"),
				w = s.n(B);
			const A = m.a.wrapped(d.d, "PostTopMeta", w.a),
				R = m.a.div("BannerAdContainer", w.a),
				D = ({
					children: e
				}) => o.a.createElement("div", null, e),
				U = m.a.div("PromotedPostContainer", w.a),
				H = m.a.wrapped(P.a, "OutboundLinkIcon", w.a),
				W = m.a.div("SourceLinkWrapper", w.a),
				G = m.a.div("TopLine", w.a),
				V = m.a.wrapped(c.c, "PostTitle", w.a),
				q = m.a.div("PostMediaWrapper", w.a),
				z = m.a.div("BackgroundWrapper", w.a),
				K = m.a.wrapped(x.a, "PostContainer", w.a),
				X = 640,
				Q = e => Object(I.a)(e.title, 100),
				Y = e => {
					if (e.post.isMediaOnly) return {};
					const t = Object(v.a)(Object(y.a)(e), C.a.actionIcon, C.b.actionIcon);
					return {
						color: t,
						fill: t
					}
				},
				J = e => ({
					background: Object(g.g)(Object(k.a)(e).body, null, null) || ""
				});
			class Z extends o.a.Component {
				constructor() {
					super(...arguments), this.refreshedAt = 1 / 0, this.onClick = (e, t) => {
						this.props.fireAdPixelsOfType(t, E.a.Click), t.source ? t.source.outboundUrl ? Object(p.e)(t.source.outboundUrl, p.d.BLANK) : Object(p.e)(t.source.url, p.d.BLANK) : Object(p.e)(t.permalink, p.d.BLANK)
					}
				}
				refresh(e) {
					this.refreshedAt = Date.now(), this.props.refreshSidebarPromotedPost()
				}
				componentDidMount() {
					this.refreshedAt = Date.now()
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.props.refreshKey !== e.refreshKey && Date.now() - this.refreshedAt > 6e3 && this.refresh(e)
				}
				render() {
					const {
						post: e,
						className: t,
						eventFactory: s,
						isOverlay: r
					} = this.props;
					let a, l, m = {};
					return e.isBlank ? (a = D, l = null) : e.isMediaOnly ? (a = R, m = {
						"data-before-content": n.fbt._("advertisement", null, {
							hk: "4b2OD7"
						})
					}, l = o.a.createElement(F, {
						post: e
					})) : (a = U, l = o.a.createElement(z, {
						style: J(this.props)
					}, o.a.createElement(G, null, o.a.createElement(A, {
						tooltipType: r ? d.c.Lightbox : void 0,
						post: e,
						showTimestamp: !1
					})), o.a.createElement(V, {
						post: e,
						size: c.b.Large,
						format: Q
					}), e.source && o.a.createElement(W, null, o.a.createElement(O.a, {
						href: e.source.url,
						isSponsored: !0,
						postId: e.id,
						source: e.source
					}, Object(u.a)(e), o.a.createElement(H, null))), o.a.createElement(q, null, e.media && o.a.createElement(i.a, {
						isListing: !0,
						isNotCardView: !0,
						showCentered: !0,
						post: e,
						availableWidth: X,
						shouldLoad: !0
					})))), o.a.createElement(a, m, o.a.createElement(K, {
						className: t,
						isOverlay: r,
						post: e,
						onClick: this.onClick,
						eventFactory: s,
						style: Y(this.props)
					}, l))
				}
			}
			const $ = Object(a.b)(null, (e, t) => ({
				fireAdPixelsOfType: (t, s) => {
					e(Object(_.z)(t, s))
				},
				refreshSidebarPromotedPost: () => {
					const {
						placement: s,
						placementIndex: n,
						isOverlay: r
					} = t;
					e(Object(b.c)(Object(S.a)(s, !!r, n)))
				}
			}));
			t.default = Object(h.b)($(Object(f.b)(Object(l.a)(Z))))
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
			s.d(t, "a", (function() {
				return C
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/ads/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/getShortenedLink.ts"),
				c = s("./node_modules/fbt/lib/FbtPublic.js");
			const d = 16765092,
				l = "https://i.redd.it/snoovatar",
				u = "snoovatars",
				m = "avatars";
			var p = s("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				b = s("./src/reddit/components/AvatarPost/index.m.less"),
				_ = s.n(b);
			var x = ({
					sourceUrl: e,
					username: t,
					post: s
				}) => {
					const [n, o] = new URL(e).pathname.split("/").slice(2), a = function(e) {
						return `${l}/${+e>=d?m:u}/shared/${e}.png`
					}(o);
					return r.a.createElement("div", {
						className: _.a.avatarPostContainer
					}, r.a.createElement("img", {
						className: _.a.avatarPostImage,
						src: a,
						alt: c.fbt._("User Shared Avatar", null, {
							hk: "FDRaA"
						})
					}), r.a.createElement(p.a, {
						isHovercard: !1,
						username: t,
						isAvatarPost: !0,
						post: s,
						share: {
							username: n,
							avatarId: o
						}
					}))
				},
				E = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				f = s("./src/reddit/hooks/useIsAvatarPost.ts"),
				h = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				O = s("./src/reddit/components/SourceLink/index.m.less"),
				S = s.n(O),
				y = s("./src/lib/lessComponent.tsx"),
				v = s("./src/telemetry/models/Outbound.ts");
			const I = y.a.wrapped(h.a, "OutboundLinkIcon", S.a),
				P = y.a.div("SourceLinkWrapper", S.a);

			function C(e) {
				const {
					className: t,
					post: s,
					isCommentsPage: n,
					pageLayer: c
				} = e, d = n ? v.SourceElement.PostLink : v.SourceElement.ListingPostLink, {
					source: l
				} = s, u = s.isSponsored || Object(o.u)(c), m = Object(f.a)(s);
				return l ? m ? r.a.createElement(x, {
					sourceUrl: l.url,
					username: s.author,
					post: s
				}) : r.a.createElement(P, {
					className: Object(a.a)({
						[S.a["m-comment"]]: n
					}, t)
				}, r.a.createElement(E.a, {
					href: l.url,
					isSponsored: u,
					postId: s.id,
					source: l,
					sourceElement: d
				}, Object(i.a)({
					...s,
					isSponsored: u
				}), r.a.createElement(I, {
					isFilled: !0
				}))) : null
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, s) {
			e.exports = {
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/TrackingHelper/index.tsx"),
				a = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				l = s.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const m = s("./src/lib/lessComponent.tsx").a.div("ButtonSpacer", l.a);
			class p extends r.a.Component {
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
					}, this.renderUnsubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: s,
							onUnsubscribe: n,
							postId: o,
							sendEvent: a,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: p,
							onSubscriptionsRequested: b,
							..._
						} = this.props, x = this.state.isHovered, E = Object(c.a)({
							type: t.type,
							key: x ? "unsubscribe" : "subscribed"
						});
						return r.a.createElement(i.t, u({
							className: e,
							priority: _.shouldReverseColor ? i.c.Primary : i.c.Secondary,
							text: E,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: i.d.XSP
						}, _))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: s,
							onUnsubscribe: n,
							postId: o,
							sendEvent: a,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: p,
							onSubscriptionsRequested: b,
							..._
						} = this.props, x = Object(c.a)({
							type: t.type,
							key: "subscribe"
						});
						return r.a.createElement(i.t, u({
							className: e,
							priority: _.shouldReverseColor ? i.c.Secondary : i.c.Primary,
							size: i.d.XSP,
							text: x,
							onClick: this.onClick
						}, _, {
							id: `subscribe-button-${o}`,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}))
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						small: e = !1,
						userIsSubscriber: t,
						doNotHideOtherSubscribeButtons: s
					} = this.props;
					return t ? this.state.hasJustSubscribed || s ? this.renderUnsubscribeButton() : e ? null : r.a.createElement(m, null) : this.renderSubscribeButton()
				}
			}
			t.a = Object(a.a)(Object(o.c)(p))
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, s) {
			"use strict";

			function n(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let s = 0;
				return e.placement && t.placement && (s = e.placement.localeCompare(t.placement)), 0 === s && e.position && t.position && (s = e.position - t.position), 0 === s && (s = e.title.localeCompare(t.title)), s
			}

			function r(e) {
				return [...e].sort(n)
			}
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/lib/constants/index.ts");
			const r = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case n.I.NO_STRIPE_SUBSCRIPTION:
							case n.I.USER_DOESNT_EXIST:
							case n.I.USER_REQUIRED_ERROR:
							case n.I.VALIDATION_ERROR:
								return e;
							case n.I.NO_USER:
							case n.I.NO_TEXT:
							case n.I.NO_URL:
								return n.I.VALIDATION_ERROR;
							case n.I.CREDIT_CARD_FAILURE:
							case n.I.CREDIT_CARD_FAILURE_GENERIC:
								return n.I.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return n.I.SUBMIT_VALIDATION_ERROR
						}
					}
					return n.I.VALIDATION_ERROR
				},
				o = e => {
					const t = e.body;
					return {
						type: r(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				a = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: o(e)
					} : e
				};
			t.a = o
		},
		"./src/reddit/helpers/truncateStringWithEllipsis.ts": function(e, t, s) {
			"use strict";
			t.a = (e, t) => e.length > t ? e.slice(0, t - 1).replace(/\s*$/, "") + "…" : e
		},
		"./src/reddit/hooks/useIsAvatarPost.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react-redux/es/index.js");
			const r = ["t2_83axfjo9", "t2_5ybo8iyi", "t2_7yef0w0w", "t2_fvlxukt", "t2_16060o", "t2_364me452", "t2_46dwatoq", "t2_86xzqcqi", "t2_97lsdz5t", "t2_8394tzuq ", "t2_b46ms2wj", "t2_btxoz0zb"],
				o = ["t5_q0gj4", "t5_2rjli"],
				a = new RegExp(/https:\/\/(www\.)?reddit.com\/avatar\/.*\/\d+$/);
			var i = s("./src/reddit/selectors/experiments/econ/index.ts");
			const c = e => Object(n.e)(t => {
				return !!(({
					adminId: e,
					subredditId: t,
					avatarShareUrl: s
				}) => {
					const n = a.test(s.trim()),
						i = r.includes(e),
						c = o.includes(t);
					return n && i && c
				})({
					adminId: e.authorId,
					subredditId: e.belongsTo.id,
					avatarShareUrl: e.source ? e.source.url : ""
				}) && Object(i.d)(t)
			})
		},
		"./src/reddit/hooks/useTheme.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js"),
				r = s("./src/lib/CSSVariableProvider/index.tsx");

			function o() {
				return Object(n.useContext)(r.b)
			}
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("archived", e.isFilled), c.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("pin", e.isFilled), c.a.stickyIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = function({
				className: e
			}) {
				return r.a.createElement("svg", {
					className: e,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, r.a.createElement("g", {
					fill: "inherit"
				}, r.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "d", (function() {
				return i
			}));
			var n, r, o = s("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(n || (n = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(r || (r = {}));
			const a = {
					[n.Loyalty]: o.a.First,
					[n.Achievement]: o.a.Second,
					[n.Cosmetic]: void 0
				},
				i = e => e === o.a.First ? n.Loyalty : e === o.a.Second ? n.Achievement : n.Cosmetic
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var n, r = s("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(n || (n = {}));
			const o = {
				status: n.NotFetched
			};
			t.b = (e = o, t) => {
				switch (t.type) {
					case r.a:
						if (e.status === n.Fetched && e.data.stripe && e.data.stripe.sources) {
							const s = t.payload.cardId,
								{
									[s]: n,
									...r
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: r
									}
								}
							}
						}
						return e;
					case r.e:
						if (e.status === n.Fetched && e.data.braintree && e.data.braintree.sources) {
							const s = t.payload.sourceId,
								{
									[s]: n,
									...r
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: r
									}
								}
							}
						}
						return e;
					case r.b:
						return {
							error: t.payload.error, status: n.Failure
						};
					case r.c:
						return {
							data: t.payload, status: n.Fetched
						};
					case r.d:
						return {
							status: n.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, r = s("./src/lib/constants/specialMembership.ts"),
				o = s("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				a = s("./src/reddit/helpers/economics/sortBadges.ts"),
				i = s("./src/reddit/models/Badge/index.ts"),
				c = s("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(n || (n = {}));
			const d = {};

			function l(e) {
				return "userId" in e
			}

			function u(e, t, s, n) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(r => {
						let o;
						(o = e.placement ? e.placement === i.a.First ? n[c.a.Loyalty][r] : n[c.a.Achievement][r] : l(e) ? n[c.a.Cosmetic][c.c.MyBadges][r] : n[c.a.Cosmetic][c.c.Gallery][r]) && (l(e) ? s.has(e.id) && o.unlocked.push(e) : t.has(e.id) || o.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const s = parseInt(e.price || "0"),
						n = parseInt(t.price || "0");
					return s === n ? Object(a.b)(e, t) : s - n
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === r.a).map(m).sort((e, s) => {
					const n = t[e.id],
						r = t[s.id];
					return Object(a.b)(n, r)
				})
			}

			function b(e) {
				const t = {
					[c.a.Loyalty]: {},
					[c.a.Achievement]: {},
					[c.a.Cosmetic]: {
						[c.c.Gallery]: {},
						[c.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(s => {
					const n = e.collections[s],
						r = {
							description: n.description,
							highlight: n.extra && n.extra.style && n.extra.style.color,
							id: n.id,
							locked: [],
							title: n.title,
							unlocked: []
						};
					t[c.a.Loyalty][s] = {
						...r,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][s] = {
						...r,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][s] = {
						...r,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][s] = {
						...r,
						locked: [],
						unlocked: []
					}
				});
				const s = new Set;
				e.userOwnedBadges.forEach(t => {
					const n = e.badges[t];
					n && s.add(n.type)
				});
				const n = new Set(e.userOwnedBadges);
				return u(Object.keys(e.badges).map(t => e.badges[t]), s, n, t), u(Object.keys(e.products).map(t => e.products[t]), s, n, t), {
					collections: {
						[c.a.Loyalty]: p(t[c.a.Loyalty], e.collections),
						[c.a.Achievement]: p(t[c.a.Achievement], e.collections),
						[c.a.Cosmetic]: {
							[c.c.Gallery]: p(t[c.a.Cosmetic][c.c.Gallery], e.collections),
							[c.c.MyBadges]: p(t[c.a.Cosmetic][c.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = (e = d, t) => {
				switch (t.type) {
					case o.a: {
						const {
							subredditId: s
						} = t.payload, r = e[s];
						return r && r.status === n.Fetched ? {
							...e,
							[s]: {
								...r,
								data: {
									...r.data
								},
								raw: {
									...r.raw
								}
							}
						} : e
					}
					case o.h: {
						const {
							subredditId: s
						} = t.payload, r = e[s];
						return r && r.status === n.Fetched ? {
							...e,
							[s]: {
								...r,
								data: {
									...r.data,
									subscription: {
										...r.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...r.raw,
									subscription: {
										...r.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case o.i: {
						const s = t.payload;
						return {
							...e,
							[s.subredditId]: {
								raw: s,
								data: b(s),
								status: n.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-SidebarNativeAd.cb287e573c406c6c3ab5.js.map