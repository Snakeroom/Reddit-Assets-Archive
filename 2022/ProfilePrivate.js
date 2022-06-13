// https://www.redditstatic.com/desktop2x/ProfilePrivate.1ba913bf90d1b5bff437.js
// Retrieved at 6/13/2022, 10:00:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfilePrivate"], {
		"./src/reddit/actions/pages/profilePrivate/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "privateListingPending", (function() {
				return L
			})), s.d(t, "privateMixedListingLoaded", (function() {
				return N
			})), s.d(t, "privatePostListingLoaded", (function() {
				return R
			})), s.d(t, "privateListingFailed", (function() {
				return F
			})), s.d(t, "profilePrivateRequested", (function() {
				return A
			})), s.d(t, "morePending", (function() {
				return B
			})), s.d(t, "moreMixedLoaded", (function() {
				return D
			})), s.d(t, "morePostLoaded", (function() {
				return G
			})), s.d(t, "moreFailed", (function() {
				return W
			})), s.d(t, "moreProfilePrivateRequested", (function() {
				return U
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/externalAccount.ts"),
				i = s("./src/reddit/actions/pages/profileShared.ts"),
				r = s("./src/reddit/actions/profile/index.ts"),
				d = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/redditGQL/operations/ProfileDownvoted.json"),
				l = s("./src/redditGQL/operations/ProfileGivenGildings.json"),
				c = s("./src/redditGQL/operations/ProfileHidden.json"),
				m = s("./src/redditGQL/operations/ProfileReceivedGildings.json"),
				p = s("./src/redditGQL/operations/ProfileSaved.json"),
				u = s("./src/redditGQL/operations/ProfileUpvoted.json");
			var h = s("./src/reddit/models/Comment/index.ts"),
				b = s("./src/reddit/models/Post/index.ts"),
				x = s("./src/reddit/models/Profile/index.ts"),
				g = s("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				v = s("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				f = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				C = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				y = s("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				O = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				w = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				E = s("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts");
			var j = e => {
					const {
						listingType: t,
						rawData: s,
						includeIdentity: o,
						includeModerated: n
					} = e, {
						identity: i
					} = s, r = (e => {
						const t = {
							account: null,
							authorFlair: {},
							moderatedPageInfo: void 0,
							moderatedSubredditIds: void 0,
							postFlair: {},
							posts: {},
							preferences: void 0,
							profiles: {},
							pageInfo: void 0,
							subreddits: {},
							itemIds: []
						};
						return e !== x.b.Saved && e !== x.b.ReceivedGildings && e !== x.b.GivenGildings || (t.comments = {}), t
					})(t);
					if (!i) return r;
					if (o && (r.account = Object(E.a)(i) || null, r.preferences = Object(y.a)(i.preferences, i.interactions) || null, i.redditor.profile && (r.profiles[i.redditor.profile.id] = Object(O.a)(i.redditor.profile))), n && i.redditor && i.redditor.moderatedSubreddits) {
						const {
							moderatedSubredditIds: e,
							pageInfo: t,
							subreddits: s
						} = Object(O.b)(i.redditor.moderatedSubreddits);
						r.moderatedPageInfo = t, r.moderatedSubredditIds = e, r.subreddits = s
					}
					const d = ((e, t) => {
						switch (t) {
							case x.b.Downvoted:
								return e.identity.downvotedPosts;
							case x.b.Hidden:
								return e.identity.hiddenPosts;
							case x.b.Saved:
								return e.identity.saved;
							case x.b.Upvoted:
								return e.identity.upvotedPosts;
							case x.b.ReceivedGildings:
								return e.identity.receivedGildings;
							case x.b.GivenGildings:
								return e.identity.givenGildings
						}
					})(s, t);
					if (!d) return r;
					r.pageInfo = d.pageInfo;
					for (const {
							node: a
						} of d.edges) {
						let e;
						if (a.__typename === h.d.Comment) {
							const t = Object(g.a)(a);
							if (r.comments || (r.comments = {}), r.comments[t.id] = t, r.itemIds || (r.itemIds = []), r.itemIds.push(t.id), a.authorFlair && (r.authorFlair[t.subredditId] || (r.authorFlair[t.subredditId] = {}), r.authorFlair[t.subredditId][t.author] = Object(v.a)(a.authorFlair)[0]), e = a.postInfo, a.postInfo) {
								const {
									post: e,
									crosspost: t
								} = Object(C.a)(a.postInfo);
								r.posts[e.id] = e, t && (r.posts[t.id] = t)
							}
						} else e = a, r.itemIds || (r.itemIds = []), r.itemIds.push(e.id);
						if (!e) continue;
						const {
							post: t,
							crosspost: s
						} = e && Object(C.a)(e);
						r.posts[t.id] = t, s && (r.posts[s.id] = s), Object(b.i)(e) || Object(b.j)(e) || (e.authorFlair && (r.authorFlair[t.belongsTo.id] || (r.authorFlair[t.belongsTo.id] = {}), r.authorFlair[t.belongsTo.id][t.author] = Object(v.a)(e.authorFlair)[0]), Object(b.l)(e) ? r.profiles[e.profile.id] || (r.profiles[e.profile.id] = Object(O.a)(e.profile)) : Object(b.n)(e) && (r.subreddits[e.subreddit.id] || (r.subreddits[e.subreddit.id] = Object(w.a)(e.subreddit)), r.postFlair[e.subreddit.id] || (r.postFlair[e.subreddit.id] = Object(f.a)(e.subreddit))))
					}
					return r
				},
				k = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				I = s("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				P = s("./src/lib/initializeClient/installReducer.ts"),
				_ = s("./src/reddit/reducers/features/comments/index.ts");
			Object(P.a)({
				features: {
					comments: _.a
				}
			});
			const S = {
					[x.b.Downvoted]: (e, t) => Object(d.a)(e, {
						...a,
						variables: t
					}),
					[x.b.Hidden]: (e, t) => Object(d.a)(e, {
						...c,
						variables: t
					}),
					[x.b.Saved]: (e, t) => Object(d.a)(e, {
						...p,
						variables: t
					}),
					[x.b.Upvoted]: (e, t) => Object(d.a)(e, {
						...u,
						variables: t
					}),
					[x.b.ReceivedGildings]: (e, t) => Object(d.a)(e, {
						...m,
						variables: t
					}),
					[x.b.GivenGildings]: (e, t) => Object(d.a)(e, {
						...l,
						variables: t
					})
				},
				T = (e, t) => {
					switch (e) {
						case x.b.Downvoted:
						case x.b.Hidden:
						case x.b.Saved:
						case x.b.Upvoted:
						case x.b.ReceivedGildings:
						case x.b.GivenGildings:
							return t.body.data
					}
				},
				M = e => {
					switch (e.listingType) {
						case x.b.Downvoted:
						case x.b.Hidden:
						case x.b.Saved:
						case x.b.Upvoted:
						case x.b.ReceivedGildings:
						case x.b.GivenGildings:
							return j(e)
					}
				},
				L = Object(o.a)(I.b),
				N = Object(o.a)(I.c),
				R = Object(o.a)(I.i),
				F = Object(o.a)(I.a),
				A = e => async (t, s, o) => {
					const {
						profileName: d,
						listingType: a
					} = e.params, l = s(), c = Object(k.b)(d.toLowerCase(), a), m = l.profilePrivatePage.ids[c] && l.profilePrivatePage.ids[c].length > 0, p = !!l.profilePrivatePage.api.error[c];
					if (l.profilePrivatePage.api.pending[c] || m && !p) return;
					const {
						account: u
					} = l.user, h = !u, b = !(u && u.displayText && l.profiles.moderated.models[u.displayText.toLowerCase()] && l.profiles.moderated.models[u.displayText.toLowerCase()].length);
					t(L({
						listingKey: c
					}));
					const g = {
							includeIdentity: h,
							includeModerated: b,
							first: I.h,
							after: null
						},
						v = await S[a](o.gqlContext(), g);
					if (v.ok && v.body) {
						const e = M({
							rawData: T(a, v),
							listingType: a,
							includeIdentity: h,
							includeModerated: b
						});
						a === x.b.Saved || a === x.b.ReceivedGildings || a === x.b.GivenGildings ? await t(N({
							listingKey: c,
							profileName: d,
							...e
						})) : await t(R({
							listingKey: c,
							profileName: d,
							...e
						})), await Promise.all([t(Object(i.d)(d)), t(Object(n.o)(d)), t(Object(r.d)(d))])
					} else t(F({
						listingKey: c,
						error: v.error
					}))
				}, B = Object(o.a)(I.f), D = Object(o.a)(I.e), G = Object(o.a)(I.g), W = Object(o.a)(I.d), U = e => async (t, s, o) => {
					const n = s(),
						i = n.user.account && n.user.account.displayText && n.user.account.displayText.toLowerCase();
					if (!i) return;
					const r = Object(k.b)(i, e);
					if (!n.profilePrivatePage.ids[r] || !n.profilePrivatePage.ids[r].length || !n.profilePrivatePage.pageInfo || !n.profilePrivatePage.pageInfo[r].hasNextPage || n.profilePrivatePage.api.error[r] || n.profilePrivatePage.api.pending[r]) return;
					const d = {
						includeIdentity: !1,
						includeModerated: !1,
						after: n.profilePrivatePage.pageInfo[r].endCursor,
						first: I.h
					};
					t(B({
						listingKey: r
					}));
					const a = await S[e](o.gqlContext(), d);
					if (a.ok && a.body) {
						const s = M({
							includeIdentity: !1,
							includeModerated: !1,
							listingType: e,
							rawData: a.body.data
						});
						e === x.b.Saved || e === x.b.ReceivedGildings || e === x.b.GivenGildings ? await t(D({
							listingKey: r,
							profileName: i,
							...s
						})) : await t(G({
							listingKey: r,
							profileName: i,
							...s
						}))
					} else t(W({
						listingKey: r,
						error: a.error
					}))
				}
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				n = s.n(o);
			const i = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", n.a);
			t.a = i
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, s) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/config.ts"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/reddit/components/CallToActionButton/index.tsx"),
				d = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				a = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				l = s.n(a);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: n
				} = e, {
					source: a,
					callToAction: c,
					caption: m
				} = t;
				if (!a || !a.url) return null;
				let p = a.displayText;
				return a.displayText.length >= 40 && (p = a.displayText.slice(0, 40 - "...".length) + "..."), i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: l.a.leftSideContent
				}, m && !n && i.a.createElement("span", {
					className: l.a.caption,
					title: m
				}, m), i.a.createElement(d.a, {
					href: a.url.replace(o.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: a,
					className: l.a.displayUrl
				}, p)), c && i.a.createElement(r.a, {
					className: l.a.callToAction,
					href: a.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: a
				}, c))
			}
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				Icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				isLeft: "p8bIdnQ5pQUQRETAyCoa5",
				isRight: "_36ucS75syCWwJ_ee7IieXZ",
				active: "NPw0Z_HL-yJPXnZ3mpWEA",
				redditStyle: "OGOshepc50ul-kJHrocIO",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/controls/OutboundLink/index.tsx"),
				d = s("./src/reddit/components/CallToActionButton/index.m.less"),
				a = s.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					...s
				} = e;
				return n.a.createElement(r.b, l({
					className: Object(i.a)(a.a.CallToActionButton, t, {
						[a.a.mNotCardView]: s.isNotCardView
					})
				}, s))
			}
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				i = s("./src/lib/ads/index.ts"),
				r = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/lib/getShortenedLink.ts"),
				l = s("./src/lib/hooks/usePrevious.ts"),
				c = s("./src/reddit/hooks/useTracking.ts"),
				m = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				p = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				u = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				h = s("./src/reddit/components/CreatorStats/loader.tsx"),
				b = s("./src/config.ts"),
				x = s("./node_modules/react-redux/es/index.js"),
				g = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/Econ/Audio/index.m.less"),
				f = s.n(v),
				C = s("./src/reddit/components/Econ/Audio/MuteIcon.tsx"),
				y = s("./src/reddit/components/Econ/Audio/SpeakerRings.tsx");
			const {
				fbt: O
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var w = e => {
					let {
						post: t
					} = e;
					const {
						audioRoom: s
					} = t, i = () => Math.floor(10 * Math.random() + 1), d = Object(x.e)(g.db), [a, l] = Object(o.useState)(!1), [c, m] = Object(o.useState)(i());
					return Object(o.useEffect)(() => {
						const e = setInterval(() => {
							l(!0), setTimeout(() => l(!1), 3500), m(i())
						}, 6e3);
						return () => clearInterval(e)
					}, []), (null == s ? void 0 : s.isLive) ? n.a.createElement("a", {
						href: `https://www.reddit.com/talk/${s.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: f.a.liveClassicContainer,
						"data-testid": "audioroom-classic-live"
					}, n.a.createElement("div", {
						className: f.a.classicSpeaker
					}, a && n.a.createElement(y.a, {
						className: Object(r.a)(f.a.speakerRings, {
							[f.a.nightMode]: d
						})
					}), n.a.createElement("img", {
						key: `audioPostAvatar--${c}`,
						className: f.a.snoovatar,
						src: `${b.a.assetPath}/img/talk/avatars/${c}.png`,
						alt: O._("Reddit Talk", null, {
							hk: "XNl4V"
						})
					}), !a && n.a.createElement("div", {
						className: f.a.muteContainer
					}, n.a.createElement(C.a, {
						className: f.a.muteIcon
					})))) : n.a.createElement("div", {
						className: f.a.endedClassicContainer
					}, n.a.createElement(C.a, {
						className: f.a.muteIcon
					}))
				},
				E = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				j = s("./src/reddit/components/ExpandoButton/index.tsx"),
				k = s("./src/reddit/components/Flatlist/index.tsx"),
				I = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				P = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				_ = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				S = s("./src/reddit/components/ModModeReports/index.tsx"),
				T = s("./src/reddit/components/ModModeReports/helpers.ts"),
				M = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				L = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				N = s("./src/reddit/components/PostContainer/index.tsx"),
				R = s("./src/reddit/components/PostMeta/index.tsx"),
				F = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				A = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				B = s("./src/reddit/components/PostTitle/index.tsx"),
				D = s("./src/reddit/components/PostTopMeta/index.tsx"),
				G = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				W = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				U = s("./src/reddit/models/Audio/index.ts"),
				V = s("./src/reddit/models/Media/index.ts"),
				H = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				K = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				z = s("./src/reddit/constants/postLayout.ts"),
				q = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				Q = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Z = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				J = s("./src/reddit/helpers/localStorage/index.ts"),
				X = s("./src/reddit/helpers/search/renderMedia.tsx"),
				Y = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				$ = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				ee = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				te = s.n(ee),
				se = s("./src/reddit/components/ClassicPost/index.m.less"),
				oe = s.n(se);

			function ne() {
				return (ne = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const ie = Object(d.a)(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: d,
					handleVote: b,
					isExpanded: x,
					inSubredditOrProfile: g,
					eventFactory: v,
					first: f,
					flairStyleTemplate: C,
					formatTitle: y,
					hostPostData: O,
					isCheckboxSelected: K,
					isCurrentUserProfilePost: ee,
					isFrontpage: se,
					isGalleryTileLayoutDefault: ie,
					isLoggedIn: re,
					isOverlay: de,
					isProfileCreatorStatsEnabled: ae,
					imageGalleryCurrentItem: le,
					moderatorPermissions: ce,
					modModeEnabled: me,
					onClickPost: pe,
					onIgnoreReports: ue,
					onOpenReportsDropdown: he,
					onSizeChanged: be,
					poll: xe,
					post: ge,
					postId: ve,
					redditStyle: fe,
					scrollerItemRef: Ce,
					showBulkActionCheckbox: ye,
					showEditFlair: Oe,
					showMedia: we,
					subredditOrProfile: Ee,
					toggleCheckbox: je,
					userIsOp: ke,
					shouldShowGalleryTileOption: Ie,
					showPromotedCTA: Pe
				} = e, _e = Object(c.a)(), Se = ke && ae, Te = Object(l.a)(x);
				Object(o.useEffect)(() => {
					be && Te !== x && be(ge.id)
				}, [x, be, ge.id, Te]);
				const Me = fe ? void 0 : C,
					Le = s || void 0,
					Ne = Object(Z.a)(ce),
					Re = Object(q.a)(ce),
					Fe = Object(Q.a)(ce),
					Ae = me && Z.a,
					Be = Object(_.a)(ge),
					De = Object(T.c)(ge),
					Ge = !!ge.media && ge.media.type === V.o.RTJSON,
					We = ke && Ge,
					Ue = g && !we,
					Ve = !!ge.media && Object(V.H)(ge.media),
					He = !!ge.recommendationContext,
					Ke = {
						flairStyleTemplate: Me,
						post: ge,
						inSubredditOrProfile: g,
						isCurrentUserProfilePost: ee,
						isOverlay: de,
						shouldShowSubscribeButton: !(se && re) || He && re,
						subredditOrProfile: Ee
					},
					ze = Object(i.t)(ge, le),
					{
						source: qe
					} = ze,
					[Qe, Ze] = Object(o.useState)(!1),
					Je = Object(o.useCallback)(() => {
						Ze(!Qe), Object(J.Kb)(), _e(Object($.d)(ve))
					}, [Qe, ve, _e]);
				let Xe = n.a.createElement(H.a, {
					className: oe.a.classicThumbnail,
					crosspost: Le && ge,
					isMeta: ge.isMeta,
					post: Le || ge,
					redditStyle: fe,
					templatePlaceholderImage: Me && Me.postPlaceholderImage,
					removeLink: Ve
				});
				Object(U.b)(ge) && (Xe = n.a.createElement(w, {
					post: ge
				}));
				const Ye = n.a.createElement(N.a, {
					className: Object(r.a)(te.a.classicPostStyles, oe.a.postContainer, Object(Y.a)(e), {
						[oe.a.mFirst]: f,
						[oe.a.shouldShowOverflow]: Se
					}, t),
					isOverlay: de,
					style: {
						...Object(Y.d)(e),
						...Object(Y.b)(Me)
					},
					post: ge,
					onClick: pe,
					eventFactory: v
				}, n.a.createElement(A.a, {
					model: ge,
					handleVote: b,
					showBulkActionCheckbox: ye,
					isCheckboxSelected: K,
					toggleCheckbox: je,
					flairStyleTemplate: Me,
					redditStyle: fe,
					postId: ve
				}), n.a.createElement(L.a, {
					className: Se ? oe.a.shouldUseRoundedBorder : void 0,
					"data-click-id": "background",
					flairStyleTemplate: Me
				}, n.a.createElement(E.a, {
					className: oe.a.eventMeta,
					post: ge
				}), n.a.createElement("div", {
					className: oe.a.mainBody
				}, n.a.createElement("div", {
					className: Ue ? oe.a.expandoContainer : oe.a.thumbnailContainer
				}, !Ue && Xe, n.a.createElement(j.a, {
					crosspost: Le,
					className: oe.a.rightExpando,
					isExpanded: !!x,
					post: ge,
					useMediaIcons: !1
				})), n.a.createElement("div", {
					className: Object(r.a)(oe.a.content, {
						[oe.a.showBulkActionCheckbox]: ye
					}),
					"data-click-id": "body"
				}, !!ge.recommendationContext && n.a.createElement(M.a, {
					content: ge.recommendationContext.content,
					layout: z.g.Classic,
					post: ge
				}), n.a.createElement(B.c, {
					className: xe ? oe.a.titleWithPoll : void 0,
					format: y,
					poll: xe,
					post: ge,
					redditStyle: fe,
					size: B.b.Medium,
					titleColor: Me && Me.postTitleColor,
					isOverlay: de
				}, ge.source && !Le && !ge.isSurveyAd && n.a.createElement(W.a, {
					href: ge.source.url,
					isSponsored: ge.isSponsored,
					postId: ge.id,
					source: ge.source
				}, Object(a.a)(ge))), n.a.createElement(R.a, ne({
					key: "PostMeta"
				}, Ke)), me && Ne && Be && n.a.createElement(P.a, {
					thing: ge
				}), me && Ne && De && n.a.createElement(S.a, {
					onIgnoreReports: ue,
					reportable: ge
				}), Pe && qe && qe.url && !ge.isSurveyAd && n.a.createElement(m.a, {
					className: oe.a.adLinkWrapper
				}, n.a.createElement(p.a, {
					post: ge,
					adLinkContent: ze
				})), n.a.createElement("div", {
					className: oe.a.flatlistContainer
				}, n.a.createElement(j.a, {
					className: oe.a.leftExpando,
					crosspost: Le,
					isExpanded: !!x,
					post: ge,
					useMediaIcons: !1
				}), n.a.createElement(u.a, {
					className: oe.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: Me,
					model: ge,
					onVoteClick: b
				}), n.a.createElement(k.a, {
					className: oe.a.flatlistSeparator
				}), !ge.isSurveyAd && n.a.createElement(k.c, {
					className: oe.a.flatlist,
					currentUser: d,
					hasModFlairPerms: Re,
					hasModPostPerms: Ne,
					hasModFullPerms: Fe,
					hostPostData: O,
					isOverlay: !!de,
					modModeEnabled: me,
					onClickInsightsButton: Je,
					onIgnoreReports: ue,
					onOpenReportsDropdown: he,
					post: ge,
					shouldShowInsightsButton: Se,
					showEditPost: We,
					showEditFlair: Oe,
					tooltipType: de ? D.c.Lightbox : void 0,
					useFlatlistBreakpoints: Object(F.b)({
						editPost: !Ae,
						hide: !Ae,
						report: !Ae
					})
				})), n.a.createElement(I.d, null))), Object(X.a)(ge, oe.a, Ce, x, Ie, ie), Ee && Qe && n.a.createElement(h.a, {
					className: oe.a.creatorStatsContainer,
					post: ge,
					subreddit: Ee,
					isOwnProfileStats: !0
				})));
				return n.a.createElement(G.b, null, Ye)
			});
			t.default = Object(K.a)(ie)
		},
		"./src/reddit/components/CommentBodyExpander/index.m.less": function(e, t, s) {
			e.exports = {
				collapsedCommentWrapper: "_3eqiPvSIRa-NZBdZNmskLn",
				collapsedCommentLine: "_3w5mzp5LqE702onvC_Wok3",
				rtjCollapsed: "_1J7xT7G-fgDlzIqRgaBrrB",
				seeMore: "_3NPaMDmW2g_XhEdxfn6inI"
			}
		},
		"./src/reddit/components/CommentContainer/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/higherOrderComponents/withClickTracking/index.tsx");
			const l = Object(r.c)({
					clickTrackingId: (e, t) => {
						let {
							comment: s
						} = t;
						return s.id
					}
				}),
				c = Object(i.b)(l);
			class m extends n.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						children: t,
						className: s,
						comment: o,
						onClick: i,
						style: r
					} = this.props;
					return n.a.createElement("div", {
						className: Object(d.a)(s, `Comment ${o.id}`),
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: t => {
							!this.cancelClick && t.button < 2 && e(() => i && i(t, o))(t)
						},
						style: r
					}, t)
				}
			}
			t.a = c(Object(a.a)(m))
		},
		"./src/reddit/components/CommentModModeDropdown/index.m.less": function(e, t, s) {
			e.exports = {
				StyledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				styledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				Show: "BmpGQCO3oZBeUMzSaC5yX",
				show: "BmpGQCO3oZBeUMzSaC5yX"
			}
		},
		"./src/reddit/components/CommentModModeDropdown/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/comment/moderation.ts"),
				a = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/controls/Dropdown/index.tsx"),
				m = s("./src/reddit/helpers/trackers/modTools.ts"),
				p = s("./src/reddit/selectors/tooltip.ts"),
				u = s("./node_modules/fbt/lib/FbtPublic.js"),
				h = s("./src/lib/lessComponent.tsx"),
				b = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				x = s("./src/reddit/icons/svgs/Show/index.tsx"),
				g = s("./src/reddit/components/CommentModModeDropdown/index.m.less"),
				v = s.n(g);
			const f = h.a.wrapped(x.a, "Show", v.a);
			var C = e => n.a.createElement(b.g, null, !e.comment.isApproved && n.a.createElement(b.e, {
				displayText: e.comment.approvedBy ? u.fbt._("Approved", null, {
					hk: "3BGaEK"
				}) : u.fbt._("Approve", null, {
					hk: "7CwFx"
				}),
				onClick: e.onApproveComment
			}, n.a.createElement(b.a, null)), !e.comment.bannedBy && n.a.createElement(n.a.Fragment, null, n.a.createElement(b.e, {
				displayText: e.comment.isRemoved ? u.fbt._("Removed", null, {
					hk: "17pv2n"
				}) : u.fbt._("Remove", null, {
					hk: "3tYl0U"
				}),
				onClick: e.onRemoveComment
			}, n.a.createElement(b.i, null)), n.a.createElement(b.e, {
				displayText: e.comment.isSpam ? u.fbt._("Removed as spam", null, {
					hk: "2Kv9DF"
				}) : u.fbt._("Remove as spam", null, {
					hk: "OOps6"
				}),
				onClick: e.onSpamComment
			}, n.a.createElement(b.j, null)), n.a.createElement(b.e, {
				displayText: e.comment.isLocked ? u.fbt._("Unlock comment", null, {
					hk: "1canPl"
				}) : u.fbt._("Lock comment", null, {
					hk: "Qp5a0"
				}),
				onClick: e.onLockComment
			}, n.a.createElement(b.h, null))), e.comment.collapsedBecauseCrowdControl && n.a.createElement(b.e, {
				displayText: u.fbt._("Show comment", null, {
					hk: "9SB86"
				}),
				onClick: e.onShowComment
			}, n.a.createElement(f, null)));
			const y = h.a.wrapped(c.a, "StyledDropdown", v.a),
				O = Object(r.c)({
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(p.b)(s)(e)
					}
				}),
				w = Object(i.b)(O, (e, t) => {
					let {
						comment: s
					} = t;
					return {
						onApproveComment: () => e(Object(d.a)(s.id)),
						onLockComment: () => e(Object(d.c)(s.id)),
						onRemoveComment: () => e(Object(d.e)(s.id, !1)),
						onSpamComment: () => e(Object(d.e)(s.id, !0)),
						onShowComment: () => e(Object(d.d)(s.id))
					}
				}),
				E = Object(a.a)(y),
				j = w(Object(l.c)(e => {
					const {
						comment: t,
						isDropdownOpen: s,
						onApproveComment: o,
						onLockComment: i,
						onRemoveComment: r,
						onSpamComment: d,
						onShowComment: a,
						sendEvent: l,
						tooltipId: c
					} = e;
					return n.a.createElement(E, {
						isOpen: s,
						tooltipId: c
					}, n.a.createElement(C, {
						onApproveComment: () => {
							o(), l(Object(m.d)("approve", t.id))
						},
						onRemoveComment: () => {
							r(), l(Object(m.d)("remove", t.id))
						},
						onSpamComment: () => {
							d(), l(Object(m.d)("spam", t.id))
						},
						onLockComment: () => {
							i(), l(Object(m.d)(t.isLocked ? "unlock" : "lock", t.id))
						},
						onShowComment: () => {
							a(), l(Object(m.d)("showComment", t.id))
						},
						comment: t
					}))
				}));
			t.a = j
		},
		"./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				DropdownRow: "_2LNy1r5iuFMrf0PLh4UdV-",
				dropdownRow: "_2LNy1r5iuFMrf0PLh4UdV-",
				DeleteIcon: "_1iKLz-XMCxtewhk3nusoiP",
				deleteIcon: "_1iKLz-XMCxtewhk3nusoiP",
				PencilIcon: "_1bLoeor2W-QStNmx_KRhZL",
				pencilIcon: "_1bLoeor2W-QStNmx_KRhZL",
				ReportIcon: "_2cI15gf51WKaEHlpw-HjhG",
				reportIcon: "_2cI15gf51WKaEHlpw-HjhG",
				SavedIcon: "_4rjQO_f0JDhjAgz1a8hLR",
				savedIcon: "_4rjQO_f0JDhjAgz1a8hLR",
				SaveIcon: "XOeF-g_i5E2Oaxwt9wDdS",
				saveIcon: "XOeF-g_i5E2Oaxwt9wDdS",
				OverflowMenu: "_11rZyhzMB3OOh_i10q1kGT",
				overflowMenu: "_11rZyhzMB3OOh_i10q1kGT",
				ModToolsFlatlist: "_3y5_xjgWBNlHiMIlznzmOH",
				modToolsFlatlist: "_3y5_xjgWBNlHiMIlznzmOH",
				ModActionsMenu: "_2Ff8ezLTpKg92h7e8lIWkW",
				modActionsMenu: "_2Ff8ezLTpKg92h7e8lIWkW",
				Flatlist: "_1PB2jayxHhG493U6RP5qLr",
				flatlist: "_1PB2jayxHhG493U6RP5qLr",
				Button: "VFryWeVNuBPgqyjc5h68S",
				button: "VFryWeVNuBPgqyjc5h68S"
			}
		},
		"./src/reddit/components/Comments/ProfileComment/index.m.less": function(e, t, s) {
			e.exports = {
				TopMeta: "Ov9DvczDidxNqJMR_axF2",
				topMeta: "Ov9DvczDidxNqJMR_axF2",
				CommentBody: "_a5_x7qimk18YbGSwE8Fy",
				commentBody: "_a5_x7qimk18YbGSwE8Fy",
				ProfileCommentWrapper: "_2QR1H6z3qpmyHNdkMUnzVu",
				profileCommentWrapper: "_2QR1H6z3qpmyHNdkMUnzVu",
				isRemoved: "_7kIPhlgZcmDxoV_xaWnX9"
			}
		},
		"./src/reddit/components/Comments/ProfileComment/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/objectSelector/index.ts"),
				c = s("./node_modules/lodash/throttle.js"),
				m = s.n(c),
				p = s("./src/lib/fastdom/index.ts"),
				u = s("./src/reddit/components/CommentBodyExpander/index.m.less"),
				h = s.n(u);
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = .75, g = 10 * a.K;
			class v extends n.a.Component {
				constructor(e) {
					super(e), this.commentElement = null, this.handleResize = m()(() => {
						if (this.state.expandToggled) return null;
						p.a.read(() => {
							(this.commentElement ? this.commentElement.offsetHeight : 0) <= this.props.height * (x + 1) && p.a.write(() => {
								this.setState({
									expandToggled: !0
								})
							})
						})
					}, g), this.onShowMore = e => {
						e.preventDefault(), this.setState({
							expandToggled: !0
						})
					}, this.state = {
						expandToggled: e.isExpanded
					}
				}
				render() {
					const {
						children: e,
						height: t
					} = this.props, {
						expandToggled: s
					} = this.state;
					return s ? n.a.createElement("div", null, e()) : n.a.createElement("div", {
						className: h.a.collapsedCommentWrapper
					}, n.a.createElement("div", {
						className: h.a.collapsedCommentLine,
						style: {
							height: t
						}
					}, n.a.createElement("div", {
						ref: e => this.commentElement = e
					}, e(h.a.rtjCollapsed))), n.a.createElement("a", {
						className: h.a.seeMore,
						onClick: this.onShowMore
					}, b._("see more", null, {
						hk: "1Cx4qU"
					})))
				}
				componentDidUpdate() {
					const {
						expandToggled: e
					} = this.state;
					e && window && window.removeEventListener("resize", this.handleResize)
				}
				componentDidMount() {
					var e, t;
					if (this.state.expandToggled) return null;
					!(null === (t = null === (e = this.commentElement) || void 0 === e ? void 0 : e.textContent) || void 0 === t ? void 0 : t.trim().includes("\n")) && (window.addEventListener("resize", this.handleResize), this.handleResize())
				}
				componentWillUnmount() {
					window && window.removeEventListener("resize", this.handleResize)
				}
			}
			var f = v,
				C = s("./node_modules/fbt/lib/FbtPublic.js"),
				y = s("./node_modules/lodash/noop.js"),
				O = s.n(y),
				w = s("./src/lib/makeCommentsPageKey/index.ts"),
				E = s("./src/lib/makeDraftKey/index.ts"),
				j = s("./src/reddit/actions/comment/index.ts"),
				k = s("./src/reddit/actions/comment/authoring.ts"),
				I = s("./src/reddit/actions/comment/moderation.ts"),
				P = s("./src/reddit/actions/gold/modals.ts"),
				_ = s("./src/reddit/actions/modal.ts"),
				S = s("./src/reddit/actions/reportFlow/index.ts"),
				T = s("./src/reddit/actions/tooltip.ts"),
				M = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				L = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				N = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				R = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				F = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				A = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				B = s("./src/reddit/components/ModModeReports/helpers.ts"),
				D = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				G = s("./src/reddit/contexts/InsideOverlay.tsx"),
				W = s("./src/reddit/contexts/PageLayer/index.tsx"),
				U = s("./src/reddit/helpers/correlationIdTracker.ts"),
				V = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				H = s("./src/reddit/helpers/overlay/index.ts"),
				K = s("./src/reddit/helpers/trackers/lightbox.ts"),
				z = s("./src/reddit/models/PostDraft/index.ts"),
				q = s("./src/reddit/models/Comment/index.ts"),
				Q = s("./src/reddit/selectors/activeModalId.ts"),
				Z = s("./src/reddit/selectors/comments.ts"),
				J = s("./src/reddit/selectors/moderatorPermissions.ts"),
				X = s("./src/reddit/selectors/posts.ts"),
				Y = s("./src/reddit/selectors/tooltip.ts"),
				$ = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				ee = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				te = s("./src/reddit/selectors/user.ts"),
				se = s("./src/reddit/components/OverflowMenu/index.tsx"),
				oe = s("./src/reddit/components/ReportFlow/index.tsx"),
				ne = s("./src/reddit/components/ReportFlow/new.tsx"),
				ie = s("./src/reddit/components/ShareMenu/index.tsx"),
				re = s("./src/reddit/components/TrackingHelper/index.tsx"),
				de = s("./src/reddit/controls/Dropdown/Row.tsx"),
				ae = s("./src/reddit/helpers/trackers/modTools.ts"),
				le = s("./src/reddit/layout/row/Inline/index.tsx"),
				ce = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				me = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				pe = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ue = s("./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less"),
				he = s.n(ue),
				be = s("./src/lib/constants/icons.ts"),
				xe = s("./src/lib/lessComponent.tsx"),
				ge = s("./src/reddit/icons/fonts/index.tsx"),
				ve = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx");
			const fe = xe.a.wrapped(se.b, "OverflowMenu", he.a),
				Ce = xe.a.wrapped(L.a, "ModToolsFlatlist", he.a),
				ye = xe.a.wrapped(A.a, "ModActionsMenu", he.a),
				Oe = xe.a.wrapped(de.b, "DropdownRow", he.a),
				we = xe.a.wrapped(le.a, "Flatlist", he.a),
				Ee = xe.a.button("Button", he.a),
				je = Object(W.u)(),
				ke = e => `Comment-${e}--Modal--DeleteComment`,
				Ie = e => `Distinguish--Dropdown--${e}`,
				Pe = (e, t) => `${e}--${t}-overflow-menu`,
				_e = e => `View--Reports--${e}`,
				Se = Object(r.c)({
					activeTooltipId: Y.a,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Q.a)(e) === ke(s.id)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Z.D)(e, {
							commentId: s.postId
						})
					},
					isLoggedIn: te.Q,
					moderatorPermissions: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(J.o)(e, {
							subredditId: s.subredditId
						})
					},
					currentUser: te.k,
					modModeEnabled: W.U,
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(X.B)(e, {
							postId: s.postId
						})
					},
					commentPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Z.m)(e, {
							commentId: s.id
						})
					},
					reportFlowIsOpen: (e, t) => {
						let {
							comment: s
						} = t;
						var o, n;
						return (null === (n = null === (o = e.features) || void 0 === o ? void 0 : o.reportFlow) || void 0 === n ? void 0 : n.postOrCommentId) === s.id
					},
					subreddit: W.r,
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(X.U)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: ee.a,
					isTrueblockPCBlockeeEnabled: $.d
				});
			class Te extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(ae.b)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleEdit = () => this.props.handleEdit(this.props.commentPermalink), this.handleIgnoreReports = () => {
						this.props.onIgnoreReports(), this.sendCommentReportEvent(this.props.comment.ignoreReports ? "restore_reports" : "ignore_reports")
					}, this.handleGild = async () => {
						const e = Object(U.d)(U.a.GildingFlow, !0);
						this.props.onGildClick(e);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(t(this.props.comment.id))
					}, this.handleModActionsMenu = () => this.props.sendEvent(Object(ae.b)("comment_mod_action_menu", this.props.comment.id)), this.handleOverflowMenuClick = () => this.props.sendEvent(Object(ae.b)("comment_overflow_menu", this.props.comment.id)), this.handleDelete = () => this.props.handleDelete(), this.handleReply = () => this.props.handleReply(this.props.commentPermalink), this.handleRestrictedButtonClick = () => {
						this.props.onToggleReportsDropdown(), this.sendCommentModEventWithName("comment_report_menu")
					}, this.handleSave = () => {
						this.props.comment.isSaved ? this.props.sendEvent(Object(ae.b)("unsave", this.props.comment.id)) : this.props.sendEvent(Object(ae.b)("save", this.props.comment.id)), this.props.onToggleSave()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(ae.c)(e, this.props.comment.id)), this.sendCommentEventWithName = e => this.props.sendEvent(Object(K.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentEventWithNameShare = () => this.sendCommentEventWithName("share"), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(ae.b)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(ae.f)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? n.a.createElement(ne.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: oe.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : n.a.createElement(oe.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: oe.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					})
				}
				renderModTools() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: o,
						showModTools: i
					} = this.props, r = Object(V.a)(s), d = !!t && t.displayText === e.author;
					if (i && r) return o ? n.a.createElement(Ce, {
						comment: e,
						isCommentAuthor: d
					}) : n.a.createElement(ye, {
						dropdownId: `${e.id}-profile-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: this.handleModActionsMenu
					}, n.a.createElement(me.a, null), n.a.createElement(M.a, {
						comment: e,
						tooltipId: `${e.id}-profile-mod-actions-menu`
					}))
				}
				renderReportsDropdown() {
					const {
						comment: e,
						modModeEnabled: t,
						showModTools: s
					} = this.props, o = Object(B.a)(e);
					if (s && Object(B.c)(e) && !t) return n.a.createElement(N.a, {
						text: `${o}`,
						onClick: this.handleRestrictedButtonClick,
						selected: this.props.activeTooltipId === _e(e.id),
						id: _e(e.id)
					}, n.a.createElement(D.a, {
						model: e,
						onIgnoreReports: this.handleIgnoreReports,
						tooltipId: _e(e.id)
					}), e.ignoreReports ? n.a.createElement(ce.a, null) : n.a.createElement(pe.a, null))
				}
				renderDistinguishDropdown() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: o,
						onDistinguishComment: i,
						showModTools: r
					} = this.props, d = Object(V.a)(s), a = !!t && t.displayText === e.author, l = !!t && t.isEmployee;
					if (r && a && !e.bannedBy && (l || d && !o)) return n.a.createElement(N.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.activeTooltipId === Ie(e.id)
					}, n.a.createElement(ve.a, null), n.a.createElement(F.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.activeTooltipId === Ie(e.id),
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: l,
						isUserMod: d,
						onDistinguishComment: i,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Ie(e.id)
					}))
				}
				render() {
					const {
						comment: e,
						commentPermalink: t,
						className: s,
						commentsPageKey: o,
						currentUser: i,
						deleteComment: r,
						isLoggedIn: d,
						isPendingDeletion: a,
						moderatorPermissions: l,
						postIsLocked: c,
						subreddit: m,
						toggleDeleteCommentModal: p,
						isTrueblockPCBlockeeEnabled: u
					} = this.props, h = Object(V.a)(l), b = !!i && i.displayText === e.author, x = (!c && !e.isLocked || h && d) && !(Object(q.g)(e) && u), g = i && e.isGildable && !(Object(q.g)(e) && u);
					return n.a.createElement("div", {
						className: s
					}, n.a.createElement(we, null, x && n.a.createElement(Ee, {
						onClick: this.handleReply,
						disabled: a
					}, C.fbt._("Reply", null, {
						hk: "1xBqIs"
					})), g && n.a.createElement(Ee, {
						onClick: this.handleGild
					}, C.fbt._("Give Award", null, {
						hk: "pQJYk"
					})), n.a.createElement(ie.a, {
						dropdownId: `${o}--${e.id}-comment-share-menu`,
						permalink: t,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == m ? void 0 : m.type
					}, n.a.createElement(Ee, {
						onClick: this.sendCommentEventWithNameShare
					}, C.fbt._("share", null, {
						hk: "3YIXpa"
					}))), this.renderReportsDropdown(), n.a.createElement(fe, {
						dropdownId: Pe(o, e.id),
						onClick: this.handleOverflowMenuClick
					}, !b && !a && n.a.createElement(Oe, {
						displayText: C.fbt._("report", null, {
							hk: "ad7CE"
						}),
						onClick: this.props.onReportClick
					}, n.a.createElement(ge.a, {
						name: be.a.report
					})), n.a.createElement(Oe, {
						displayText: e.isSaved ? C.fbt._("Unsave", null, {
							hk: "4kQcAP"
						}) : C.fbt._("Save", null, {
							hk: "4yMsMq"
						}),
						isSelected: e.isSaved,
						onClick: this.handleSave
					}, e.isSaved ? n.a.createElement(ge.a, {
						name: be.a.saved
					}) : n.a.createElement(ge.a, {
						name: be.a.save
					})), b && n.a.createElement(Oe, {
						displayText: C.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: this.handleEdit
					}, n.a.createElement(ge.a, {
						name: be.a.edit
					})), b && n.a.createElement(Oe, {
						displayText: C.fbt._("delete", null, {
							hk: "e8kvB"
						}),
						onClick: this.handleDelete
					}, n.a.createElement(ge.a, {
						name: be.a.delete
					}))), this.props.isConfirmModalOpen && n.a.createElement(R.a, {
						actionText: C.fbt._("Delete", null, {
							hk: "3hQAl"
						}),
						cancelActionText: C.fbt._("Keep", null, {
							hk: "3vWZkQ"
						}),
						headerText: C.fbt._("Delete comment", null, {
							hk: "2ErmbC"
						}),
						modalText: C.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "21h9zY"
						}),
						onConfirm: r,
						toggleModal: p,
						trackClick: O.a,
						withOverlay: !0
					}), this.renderModTools(), this.renderDistinguishDropdown()), this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Me = je(Object(i.b)(Se, (e, t) => {
					let {
						comment: s,
						commentsPageKey: o
					} = t;
					return {
						deleteComment: () => o && e(Object(k.j)(s.id, s.postId)),
						onDistinguishComment: (t, o) => e(Object(I.b)(s.id, t, o)),
						onIgnoreReports: () => e(Object(I.g)(s.id)),
						onGildClick: t => e(Object(P.d)({
							correlationId: t,
							thingId: s.id
						})),
						onReportClick: () => e(Object(S.c)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(T.h)({
							tooltipId: Ie(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(T.h)({
							tooltipId: _e(s.id)
						})),
						onToggleSave: () => e(Object(j.m)(s.id)),
						handleDelete: () => {
							e(Object(_.i)(ke(s.id))), e(Object(T.h)({
								tooltipId: Pe(o, s.id)
							}))
						},
						handleEdit: t => {
							const o = Object(w.a)(s.postId, s.id, {}),
								n = {
									commentId: s.id,
									draftKey: Object(E.a)(z.c.edit, s.id),
									text: s.bodyMD || "",
									commentMode: s.media && s.media.rteMode,
									commentsPageKey: o
								};
							e(Object(H.a)(t)), e(Object(k.g)(n))
						},
						handleReply: t => {
							const o = Object(w.a)(s.postId, s.id, {}),
								n = {
									parentCommentId: s.id,
									commentsPageKey: o
								};
							e(Object(H.a)(t)), e(Object(k.h)(n))
						},
						toggleDeleteCommentModal: () => e(Object(_.i)(ke(s.id)))
					}
				})(Object(re.c)(Object(G.b)(Te)))),
				Le = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Ne = s("./src/reddit/components/RichTextJson/index.tsx"),
				Re = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Fe = s("./src/reddit/selectors/commentSelector.ts"),
				Ae = s("./src/reddit/components/Comments/ProfileComment/index.m.less"),
				Be = s.n(Ae);
			const De = xe.a.wrapped(Le.a, "TopMeta", Be.a),
				Ge = xe.a.div("ProfileCommentWrapper", Be.a),
				We = xe.a.div("CommentBody", Be.a),
				Ue = Object(i.b)(() => Object(r.c)({
					comment: (e, t) => Object(Fe.b)(e, t),
					flair: Z.e
				})),
				Ve = Object(l.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.a = Ue(e => {
				const {
					comment: t,
					commentsPageKey: s,
					flair: o,
					isExpanded: i,
					showFlatlist: r,
					showModTools: l
				} = e, c = s => n.a.createElement(Ne.a, {
					className: s,
					content: Object(Re.a)(t),
					mediaMetadata: t.media && t.media.mediaMetadata,
					rtJsonElementProps: Ve(e)
				});
				return n.a.createElement(Ge, {
					className: Object(d.a)({
						[Be.a.isRemoved]: !!t.bannedBy
					})
				}, n.a.createElement(De, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: t,
					commentsPageKey: s,
					flair: o,
					renderedInOverlay: !1
				}), n.a.createElement("div", null, !t.isDeleted && n.a.createElement(We, null, i ? c() : n.a.createElement(f, {
					height: a.Ub,
					isExpanded: i
				}, c)), !t.isDeleted && r && n.a.createElement(Me, {
					comment: t,
					commentsPageKey: s,
					showModTools: l
				})))
			})
		},
		"./src/reddit/components/CreatorStats/loader.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "CreatorStats",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("CreatorStats").then(s.bind(null, "./src/reddit/components/CreatorStats/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CreatorStats/index.tsx"
				}
			})
		},
		"./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less": function(e, t, s) {
			e.exports = {
				DistinguishWrapper: "_3aVdI6Y8gye7mgZBvUx5X-",
				distinguishWrapper: "_3aVdI6Y8gye7mgZBvUx5X-",
				Inline: "_2fiLaXOPdMYold0b-FKdVN",
				inline: "_2fiLaXOPdMYold0b-FKdVN",
				RadioOff: "_1kl3eXeS_cuuM03T3_G8G1",
				radioOff: "_1kl3eXeS_cuuM03T3_G8G1",
				RadioOn: "_1EcSEYj-g98-QR-5idlQZr",
				radioOn: "_1EcSEYj-g98-QR-5idlQZr",
				DistinguishOptions: "_1uVj4QJ6tIy-PC9lK3eOYO",
				distinguishOptions: "_1uVj4QJ6tIy-PC9lK3eOYO"
			}
		},
		"./src/reddit/components/DistinguishCommentDropdown/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				i = s("./src/lib/constants/index.ts"),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				d = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = s("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = s("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				m = s("./src/reddit/layout/row/Inline/index.tsx"),
				p = s("./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less"),
				u = s.n(p);
			const h = d.a.div("DistinguishWrapper", u.a),
				b = d.a.wrapped(m.a, "Inline", u.a),
				x = d.a.wrapped(l.a, "RadioOff", u.a),
				g = d.a.wrapped(c.a, "RadioOn", u.a),
				v = e => n.a.createElement(b, {
					onClick: e.selected ? void 0 : e.onClick
				}, e.selected ? n.a.createElement(g, null) : n.a.createElement(x, null), e.text),
				f = d.a.wrapped(e => {
					const {
						className: t,
						style: s,
						isAdminDistinguished: o,
						isUserEmployee: d,
						isUserMod: a,
						isModDistinguished: l,
						isStickied: c,
						isTopLevelComment: m,
						onDistinguishComment: p
					} = e;
					return n.a.createElement(h, {
						className: t,
						style: s
					}, n.a.createElement(v, {
						onClick: () => p(i.G.NONE, null),
						selected: !l && !o,
						text: r.fbt._("Undistinguish", null, {
							hk: "1P0FyT"
						})
					}), a && n.a.createElement(v, {
						onClick: () => p(i.G.MODERATOR, null),
						selected: l && !c,
						text: r.fbt._("Distinguish as Mod", null, {
							hk: "KDx42"
						})
					}), m && a && n.a.createElement(v, {
						onClick: () => p(i.G.MODERATOR, !0),
						selected: l && c,
						text: r.fbt._("Distinguish as Mod and Sticky", null, {
							hk: "1J1DBd"
						})
					}), d && n.a.createElement(v, {
						onClick: () => p(i.G.ADMIN, null),
						selected: o && !c,
						text: r.fbt._("Distinguish as Admin", null, {
							hk: "1JsJOX"
						})
					}), d && a && m && n.a.createElement(v, {
						onClick: () => p(i.G.ADMIN, !0),
						selected: o && c,
						text: r.fbt._("Distinguish as Admin and Sticky", null, {
							hk: "3x8QWN"
						})
					}))
				}, "DistinguishOptions", u.a);
			var C = Object(a.a)(f);
			t.a = e => {
				const {
					className: t,
					isAdminDistinguished: s,
					isUserEmployee: o,
					isUserMod: r,
					isModDistinguished: d,
					isStickied: a,
					isTopLevelComment: l,
					onDistinguishComment: c,
					sendEventWithName: m,
					tooltipId: p
				} = e;
				return n.a.createElement("div", {
					className: t,
					id: p
				}, n.a.createElement(C, {
					isAdminDistinguished: s,
					isUserEmployee: o,
					isUserMod: r,
					isModDistinguished: d,
					isOpen: e.isDropdownOpen,
					tooltipId: p,
					isStickied: a,
					isTopLevelComment: l,
					onDistinguishComment: (e, t) => {
						c(e, t), e === i.G.MODERATOR ? m(!a && t ? "distinguish_sticky" : "distinguish") : e === i.G.ADMIN ? m("admin_distinguish") : d && e !== i.G.MODERATOR ? m("undistinguish") : s && e !== i.G.ADMIN && m("admin_undistinguish"), a && !t && m("unsticky")
					}
				}))
			}
		},
		"./src/reddit/components/Econ/Audio/MuteIcon.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => {
				let {
					className: t
				} = e;
				return n.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, n.a.createElement("path", {
					d: "M13.5,9.5v-5A3.493,3.493,0,0,0,6.723,3.3l6.724,6.723A3.524,3.524,0,0,0,13.5,9.5Z"
				}), n.a.createElement("path", {
					d: "M15.5,9.5a5.472,5.472,0,0,1-.436,2.144l1.487,1.486A7.428,7.428,0,0,0,17.5,9.5Z"
				}), n.a.createElement("path", {
					d: "M2.341,4.1,6.5,8.258V9.5A3.5,3.5,0,0,0,10,13a3.441,3.441,0,0,0,1.059-.183l1.529,1.529A5.449,5.449,0,0,1,10,15,5.506,5.506,0,0,1,4.5,9.5h-2A7.5,7.5,0,0,0,9,16.925V18H7.581v2h4.838V18H11V16.925a7.388,7.388,0,0,0,3.026-1.141l1.044,1.044,1.414-1.414L3.755,2.686Z"
				})))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => {
				let {
					className: t
				} = e;
				return n.a.createElement("svg", {
					className: t,
					width: "226",
					height: "226",
					viewBox: "0 0 226 226",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("g", {
					opacity: "0.8"
				}, n.a.createElement("rect", {
					opacity: "0.8",
					x: "36.7704",
					y: "36.7703",
					width: "152.462",
					height: "152.462",
					rx: "76.2308",
					stroke: "url(#paint0_linear)",
					strokeWidth: "4"
				}), n.a.createElement("rect", {
					opacity: "0.5",
					x: "18.8851",
					y: "18.8822",
					width: "188.231",
					height: "188.231",
					rx: "94.1153",
					stroke: "url(#paint1_linear)",
					strokeWidth: "3"
				}), n.a.createElement("rect", {
					opacity: "0.3",
					x: "1.25",
					y: "1.25",
					width: "223.5",
					height: "223.5",
					rx: "111.75",
					stroke: "url(#paint2_linear)",
					strokeWidth: "2.5"
				})), n.a.createElement("defs", null, n.a.createElement("linearGradient", {
					id: "paint0_linear",
					x1: "17.886",
					y1: "34.7703",
					x2: "213.283",
					y2: "40.3684",
					gradientUnits: "userSpaceOnUse"
				}, n.a.createElement("stop", {
					stopColor: "#FF538C"
				}), n.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				})), n.a.createElement("linearGradient", {
					id: "paint1_linear",
					x1: "-3.25127",
					y1: "17.3822",
					x2: "235.567",
					y2: "24.2243",
					gradientUnits: "userSpaceOnUse"
				}, n.a.createElement("stop", {
					stopColor: "#FF538C"
				}), n.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				})), n.a.createElement("linearGradient", {
					id: "paint2_linear",
					x1: "-24.3885",
					y1: "2.87774e-05",
					x2: "257.851",
					y2: "8.08615",
					gradientUnits: "userSpaceOnUse"
				}, n.a.createElement("stop", {
					stopColor: "#FF538C"
				}), n.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/EmptyProfile/EmptyListing.m.less": function(e, t, s) {
			e.exports = {
				PrimaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				primaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				BackgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				backgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				Wrapper: "_1aYPXfy_h5ZUIu0k_69eX1",
				wrapper: "_1aYPXfy_h5ZUIu0k_69eX1"
			}
		},
		"./src/reddit/components/EmptyProfile/forbidden.m.less": function(e, t, s) {
			e.exports = {
				container: "_1RecBWgyCRDIwbumVv_1eu",
				hideIcon: "_2ahl77ziD4jsIXBLc18_Hc",
				title: "_1MRoVpNql4popp175MVxl6",
				subtitle: "_3HccUrmIe42WfjCGgNekWK",
				buttons: "_1BrhZvjQw9AWs6w5xlkj2F"
			}
		},
		"./src/reddit/components/EmptyProfile/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return u
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "a", (function() {
				return C
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/PostList/Placeholder.tsx"),
				l = s("./src/reddit/constants/postLayout.ts"),
				c = s("./src/reddit/components/EmptyProfile/EmptyListing.m.less"),
				m = s.n(c);
			var p = e => {
				let {
					children: t,
					className: s
				} = e;
				return i.a.createElement("div", {
					className: Object(d.a)(m.a.Wrapper, s)
				}, i.a.createElement(a.a, {
					className: m.a.BackgroundPlaceholder,
					isLoading: !1,
					layout: l.g.Classic
				}), i.a.createElement("div", {
					className: m.a.PrimaryText
				}, t))
			};
			var u = e => {
				let {
					className: t,
					profileName: s,
					timeSort: n = r.ic.ALL
				} = e;
				return i.a.createElement(p, {
					className: t
				}, n === r.ic.ALL ? o.fbt._("hmm... {profileName} hasn't commented on anything", [o.fbt._param("profileName", `u/${s}`)], {
					hk: "1MHn3t"
				}) : o.fbt._("hmm... {profileName} hasn't commented recently", [o.fbt._param("profileName", `u/${s}`)], {
					hk: "qN3uL"
				}))
			};
			var h = e => {
				let {
					className: t,
					profileName: s,
					timeSort: n = r.ic.ALL
				} = e;
				return i.a.createElement(p, {
					className: t
				}, n === r.ic.ALL ? o.fbt._("hmm... {profileName} hasn't posted anything", [o.fbt._param("profileName", `u/${s}`)], {
					hk: "28vBEd"
				}) : o.fbt._("hmm... {profileName} hasn't posted recently", [o.fbt._param("profileName", `u/${s}`)], {
					hk: "38GhqN"
				}))
			};
			var b = e => {
					let {
						className: t,
						text: s
					} = e;
					return i.a.createElement(p, {
						className: t
					}, s)
				},
				x = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				g = s("./src/reddit/components/EmptyProfile/forbidden.m.less"),
				v = s.n(g);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var C = () => i.a.createElement("div", {
				className: v.a.container
			}, i.a.createElement(x.a, {
				className: v.a.hideIcon
			}), i.a.createElement("h3", {
				className: v.a.title
			}, f._("You do not have permission to access this resource", null, {
				hk: "10cPyp"
			})), i.a.createElement("p", {
				className: v.a.subtitle
			}, f._("You can only look at your own saved posts and comments", null, {
				hk: "3pWGtF"
			})))
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/eventTools/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				l = s("./src/reddit/components/PostFollow/index.tsx"),
				c = s("./src/reddit/helpers/postCollection.ts"),
				m = s("./src/reddit/helpers/postEvent.ts"),
				p = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				u = s.n(p);
			const h = d.a.div("EventMetaWrapper", u.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: s,
					post: o
				} = e;
				if (!Object(m.a)(o)) return null;
				const d = o && o.eventInfo,
					p = Object(c.a)(o),
					b = d && Object(r.c)(d.eventStart, d.eventEnd);
				return n.a.createElement("div", {
					className: Object(i.a)(u.a.container, t, {
						[u.a.isCompact]: !!s
					})
				}, n.a.createElement(h, {
					className: u.a.eventMetaWrapper
				}, n.a.createElement(a.a, {
					post: o
				}), !p && b && n.a.createElement(l.a, {
					className: u.a.eventFollowButton,
					post: o,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, s) {
			e.exports = {
				PostEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				postEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				PostEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				postEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				PostEventNowText: "BGfronFwr_0rXxOJmxp10",
				postEventNowText: "BGfronFwr_0rXxOJmxp10",
				Container: "_3NIcD2Vr2xrSAq08U14kCy",
				container: "_3NIcD2Vr2xrSAq08U14kCy",
				CalendarIcon: "LEz3F0HfvMpdo96occzKU",
				calendarIcon: "LEz3F0HfvMpdo96occzKU",
				LiveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				liveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				LoadingState: "_27_KVVxYHZ7v44CE2vg8bT",
				loadingState: "_27_KVVxYHZ7v44CE2vg8bT"
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				i = s("./src/lib/eventTools/index.ts"),
				r = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				l = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(l);
			var m = e => n.a.createElement("i", {
				className: Object(d.a)(Object(a.b)("scheduled", e.isFilled), c.a.calendarIcon, e.className)
			});
			var p = e => n.a.createElement("i", {
					className: Object(d.a)(Object(a.b)("live", e.isFilled), c.a.liveIcon, e.className)
				}),
				u = s("./src/reddit/components/HumanDate/index.tsx"),
				h = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				b = s.n(h),
				x = s("./src/lib/lessComponent.tsx");
			const g = x.a.span("PostEventFutureText", b.a),
				v = x.a.span("PostEventPastText", b.a),
				f = x.a.span("PostEventNowText", b.a),
				C = x.a.span("Container", b.a),
				y = x.a.wrapped(m, "CalendarIcon", b.a),
				O = x.a.wrapped(p, "LiveIcon", b.a),
				w = x.a.div("LoadingState", b.a);
			class E extends o.Component {
				constructor(e) {
					super(e), this.state = {
						mounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						mounted: !0
					})
				}
				render() {
					const {
						className: e,
						post: t
					} = this.props, {
						eventInfo: s
					} = t;
					if (!s) return null;
					const {
						eventEnd: o,
						eventIsLive: d,
						eventStart: a
					} = s, l = Object(i.e)(a, o);
					let c, m;
					if (this.state.mounted || l === i.a.Live) c = n.a.createElement(u.c, {
						startTime: a,
						endTime: o,
						isLive: d
					});
					else {
						const e = Object(r.a)({
							isLoading: !0
						});
						c = n.a.createElement(w, {
							className: e
						})
					}
					if (d) m = n.a.createElement(f, null, n.a.createElement(O, null), c);
					else if (l === i.a.Future) m = n.a.createElement(g, null, n.a.createElement(y, null), c);
					else {
						if (l !== i.a.Past) return null;
						m = n.a.createElement(v, null, n.a.createElement(y, null), c)
					}
					return n.a.createElement(C, {
						className: e
					}, m)
				}
			}
			t.a = E
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, s) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				c = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				p = s("./src/reddit/helpers/path/index.ts"),
				u = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				h = s("./src/reddit/icons/fonts/index.tsx"),
				b = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/models/Post/index.ts"),
				g = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				v = s("./src/telemetry/models/Outbound.ts"),
				f = s("./src/reddit/components/ExpandoButton/index.m.less"),
				C = s.n(f);
			const y = Object(r.b)(null, (e, t) => ({
					toggle: () => e(Object(c.x)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(c.bb)(Object(p.b)(t.permalink), t.id))
				})),
				O = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const o = Object(a.a)(C.a.icon, C.a.hideOnHover);
					if (t) return i.a.createElement(h.a, {
						name: "crosspost",
						className: o
					});
					if (s.pollData) return i.a.createElement(h.a, {
						name: "poll_post",
						className: o
					});
					if (s.audioRoom) return i.a.createElement(h.a, {
						name: "audio",
						className: o
					});
					switch (e) {
						case b.o.GIFVIDEO:
							return i.a.createElement(h.a, {
								name: "gif_post",
								className: o
							});
						case b.o.IMAGE:
							return i.a.createElement(h.a, {
								name: "image_post",
								className: o
							});
						case b.o.TEXT:
						case b.o.RTJSON:
							return i.a.createElement(h.a, {
								name: "text_post",
								className: o
							});
						case b.o.VIDEO:
							return i.a.createElement(h.a, {
								name: "video_post",
								className: o
							});
						case b.o.GALLERY:
							return i.a.createElement(h.a, {
								name: "media_gallery",
								className: o
							});
						case b.o.EMBED:
						default:
							return i.a.createElement(h.a, {
								name: "embed",
								className: o
							})
					}
				};
			t.a = y(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: n,
					isCommentsPage: c,
					isExpanded: p,
					post: b,
					toggle: f,
					useMediaIcons: y
				} = e, w = s || b, E = Object(r.e)(g.b), j = Object(r.e)(g.c), k = t => {
					(E || j) && (t.preventDefault(), e.showModalOnPostLinkClick(w))
				}, I = w.media, P = Object(x.p)(b), _ = n && !!s;
				return I && !P && !(("rtjson" === I.type || "text" === I.type || "liveaudio" === I.type) && !Object(u.a)(w)) || !!b.pollData ? i.a.createElement("button", {
					"aria-expanded": !!p,
					"aria-haspopup": !0,
					"aria-label": o.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(a.a)(t, C.a.outer),
					"data-click-id": p ? "expando_close" : "expando_open",
					onClick: f
				}, p ? i.a.createElement(h.a, {
					name: "collapse",
					className: C.a.icon
				}) : y ? i.a.createElement(i.a.Fragment, null, O(w.media && w.media.type, _, b), i.a.createElement(h.a, {
					name: "expand",
					className: Object(a.a)(C.a.icon, C.a.showOnHover)
				})) : i.a.createElement(h.a, {
					name: "expand",
					className: C.a.icon
				})) : w.source && w.source.url ? i.a.createElement(m.b, {
					"aria-label": o.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(a.a)(t, C.a.outer),
					"data-click-id": "expando_open",
					href: w.source.url,
					isSponsored: b.isSponsored,
					postId: b.id,
					source: b.source,
					sourceElement: c ? v.SourceElement.PostImage : v.SourceElement.ListingPostImage,
					target: "_blank"
				}, i.a.createElement(h.a, {
					name: "external_link",
					className: Object(a.a)(C.a.icon, C.a.outboundLinkIcon)
				})) : i.a.createElement(d.a, {
					"aria-label": o.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(a.a)(t, C.a.outer),
					"data-click-id": "expando_open",
					to: Object(l.a)(w.permalink),
					rel: "nofollow",
					onClick: k
				}, i.a.createElement(h.a, {
					name: "text_post",
					className: C.a.icon
				}))
			})
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.m.less": function(e, t, s) {
			e.exports = {
				RecommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				recommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				classicLayout: "_3gsfwiq-rM6zSz9YoMlnJ0",
				compactLayout: "_9huHAs0mdMzeF-pUhJbwX",
				largeLayout: "_3hWVRt6y8PqOoC2VuZETZI"
			}
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/objectSelector/index.ts"),
				d = s("./src/reddit/components/RichTextJson/index.tsx"),
				a = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/hooks/useRecommendationPostContext.ts"),
				c = s("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				m = s.n(c);
			const p = Object(r.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = e => {
				let {
					content: t,
					layout: s,
					post: o
				} = e;
				return Object(l.a)().hideRecommendationContext ? null : n.a.createElement(d.a, {
					className: Object(i.a)(m.a.RecommendationContextStyles, {
						[m.a.classicLayout]: s === a.g.Classic,
						[m.a.compactLayout]: s === a.g.Compact,
						[m.a.largeLayout]: s === a.g.Large
					}),
					content: t,
					rtJsonElementProps: p(o),
					useExplicitTextColor: !0
				})
			}
		},
		"./src/reddit/components/OverviewChronoComment/index.m.less": function(e, t, s) {
			e.exports = {
				commentOuterWrapper: "_1g70Ndz7edo5LA6hie1Gkt",
				commentWrapper: "_324SLny5spJ682AiI73uBO",
				isLast: "_2nq8DZns5TUNKoe0aDsW4K",
				isAwarded: "_3L-s9jSlG2xSayzJ_b7J1t",
				isNightmodeOn: "Cd5iGkxl9fzuGE1cWMHC4",
				isFirst: "q4WgOJAmvFRFKX_yrlG-1",
				commentSeparator: "_3H85Xyyv141qju7KQFQ_d5",
				commentContentWrapper: "_27uDfyCMhkucg8xWyoTLYp"
			}
		},
		"./src/reddit/components/OverviewChronoList/ListItem.m.less": function(e, t, s) {
			e.exports = {
				OverviewCommentPost: "_2mg6JuVCrcHWJkUQvZXFcZ",
				overviewCommentPost: "_2mg6JuVCrcHWJkUQvZXFcZ",
				ClassicPost: "OZOlqlxhdnIVuS5MQ5yMi",
				classicPost: "OZOlqlxhdnIVuS5MQ5yMi"
			}
		},
		"./src/reddit/components/OverviewChronoList/ListItem.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				i = s("./src/reddit/components/ClassicPost/index.tsx"),
				r = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-redux/es/index.js")),
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/constants/gold.ts"),
				l = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/components/CommentContainer/index.tsx"),
				u = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				h = s("./src/reddit/helpers/getClickInfo.ts"),
				b = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				x = s("./src/reddit/selectors/commentSelector.ts"),
				g = s("./src/reddit/selectors/communityAwards.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/OverviewChronoComment/index.m.less"),
				C = s.n(f);
			const y = Object(r.b)(() => Object(d.c)({
				comment: x.b,
				isAwarded: (e, t) => {
					const s = Object(x.b)(e, t);
					return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(g.a)(e, t);
						return s && s.coinPrice >= a.g
					})
				},
				isNightmodeOn: v.db
			}), e => ({
				openPost: t => e(Object(m.L)(t))
			}));
			var O = Object(c.a)(y(e => {
					const {
						comment: t,
						commentId: s,
						first: o,
						isAwarded: i,
						isNightmodeOn: r,
						last: d,
						openPost: a,
						showModTools: c
					} = e;
					if (!t) return null;
					return n.a.createElement(p.a, {
						comment: t,
						onClick: (e, t) => {
							a({
								postOrComment: t,
								clickInfo: Object(h.a)(e),
								queryParams: {
									context: 3
								}
							})
						},
						style: {
							background: Object(b.e)(e)
						}
					}, n.a.createElement("div", {
						className: Object(l.a)(C.a.commentOuterWrapper, {
							[C.a.isLast]: d,
							[C.a.isAwarded]: i,
							[C.a.isNightmodeOn]: r
						})
					}, n.a.createElement("div", {
						className: Object(l.a)(C.a.commentWrapper, {
							[C.a.isFirst]: o
						})
					}, n.a.createElement("div", {
						className: C.a.commentSeparator
					}), t.parentId && n.a.createElement("div", {
						className: C.a.commentSeparator
					}), n.a.createElement("div", {
						className: C.a.commentContentWrapper
					}, n.a.createElement(u.a, {
						commentId: s,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: !0,
						showModTools: c,
						isExpanded: !0
					})))))
				})),
				w = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				E = s("./src/reddit/contexts/PageLayer/index.tsx"),
				j = s("./src/reddit/helpers/isComment.ts"),
				k = s("./src/reddit/components/OverviewChronoList/ListItem.m.less"),
				I = s.n(k),
				P = s("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const S = Object(E.u)({
					currentProfileName: E.i,
					isCommentsPage: E.x,
					isCommentPermalink: E.w,
					isProfilePostListing: E.L,
					pageLayer: e => e
				}),
				T = P.a.wrapped(w.a, "OverviewCommentPost", I.a),
				M = P.a.wrapped(i.default, "ClassicPost", I.a);
			t.a = S(e => {
				const {
					itemId: t,
					isFirstInCommentList: s,
					isLastInCommentList: o,
					allowModToolsUnderComments: i,
					height: r,
					width: d,
					...a
				} = e;
				return Object(j.a)(t) ? s ? n.a.createElement(n.a.Fragment, null, n.a.createElement(T, _({}, a, {
					availableWidth: d,
					commentId: t
				})), n.a.createElement(O, {
					commentId: t,
					first: s,
					last: o,
					showModTools: i
				})) : n.a.createElement(O, {
					commentId: t,
					first: s,
					last: o,
					showModTools: i
				}) : n.a.createElement(M, _({}, a, {
					inSubredditOrProfile: !1
				}))
			})
		},
		"./src/reddit/components/OverviewCommentPost/index.m.less": function(e, t, s) {
			e.exports = {
				overviewCommentPost: "_32w108aFIBi3H0DKCU4OI7",
				banned: "_3P8_MTWuehQOXRUhWBpwB0",
				reported: "_1Z7-lWgZwHw4sBG3rO44v7",
				InternalLink: "_31VWB3vSkv19o3I7RVE710",
				internalLink: "_31VWB3vSkv19o3I7RVE710",
				Wrapper: "_2otRz3OtuWajw1RleFDJ5P",
				wrapper: "_2otRz3OtuWajw1RleFDJ5P",
				Row: "_1InmLYfaOm6m9MZ8wKxM-0",
				row: "_1InmLYfaOm6m9MZ8wKxM-0",
				CommentIcon: "y05plmPkDK7RiRh8b3b8-",
				commentIcon: "y05plmPkDK7RiRh8b3b8-",
				TitleContainer: "_2ng_YqEhC3QLYqZyRIQ9qB",
				titleContainer: "_2ng_YqEhC3QLYqZyRIQ9qB",
				PostTitleContainer: "_13Ww4V9LL9wHYik5hp8VM4",
				postTitleContainer: "_13Ww4V9LL9wHYik5hp8VM4",
				PostTitle: "_2b_IHdM91weRNGmXfrTYvn",
				postTitle: "_2b_IHdM91weRNGmXfrTYvn",
				postTitleOutboundLink: "_3heiUGSIAJO43_Ertq1e2F",
				postTitleTitle: "_3gWN_jC4sfo4uQ61ZRgOO",
				PostTopMeta: "_3yzuVD_JNtr4EBJ_OesIvh",
				postTopMeta: "_3yzuVD_JNtr4EBJ_OesIvh",
				MetaSeparator: "_3RjYJMG6TaMnSwb88daQ7W",
				metaSeparator: "_3RjYJMG6TaMnSwb88daQ7W",
				postTopMetaMetaSeparator: "_2IhK-xvBLjMsX4HZ-T6j-W"
			}
		},
		"./src/reddit/components/OverviewCommentPost/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/components/PostContainer/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				u = s("./src/reddit/components/PostTopMeta/index.tsx"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/contexts/Post/index.tsx"),
				x = s("./src/reddit/controls/InternalLink/index.tsx"),
				g = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				v = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				f = s.n(v),
				C = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				y = s("./src/reddit/selectors/commentSelector.ts"),
				O = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				w = s("./src/reddit/components/OverviewCommentPost/index.m.less"),
				E = s.n(w);
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = l.a.wrapped(x.default, "InternalLink", E.a), I = l.a.div("Wrapper", E.a), P = l.a.div("Row", E.a), _ = l.a.wrapped(C.a, "CommentIcon", E.a), S = l.a.div("TitleContainer", E.a), T = l.a.div("PostTitleContainer", E.a), M = l.a.wrapped(p.c, "PostTitle", E.a), L = l.a.wrapped(u.d, "PostTopMeta", E.a), N = l.a.wrapped(u.a, "MetaSeparator", E.a), R = Object(i.b)(() => Object(r.c)({
				comment: y.b,
				isBlockingInterstitialEnabled: O.b,
				isBlockingInterstitialV2Enabled: O.b
			}), e => ({
				showModalOnAuthorLinkClick: t => e(Object(c.db)(t))
			})), F = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = e;
				if (s) return n.a.createElement(o.Fragment, null, n.a.createElement(N, null), n.a.createElement(L, {
					metaSeparatorClassName: E.a.postTopMetaMetaSeparator,
					post: t,
					showSub: !0,
					showTimestamp: !1,
					subredditOrProfile: s
				}))
			}, A = e => {
				const {
					comment: t,
					profileName: s,
					isBlockingInterstitialEnabled: o,
					isBlockingInterstitialV2Enabled: i,
					showModalOnAuthorLinkClick: r
				} = e;
				if (!t) return null;
				const d = s || t.author,
					a = `/user/${d}/`;
				return n.a.createElement(k, {
					"data-click-id": "user",
					to: a,
					onClick: e => {
						(o || i) && (e.preventDefault(), r(a))
					}
				}, d)
			};
			t.a = Object(a.a)(Object(b.b)(R(Object(h.c)(e => {
				const {
					className: t,
					eventFactory: s,
					onClickPost: o,
					post: i
				} = e;
				return n.a.createElement(m.a, {
					className: Object(d.a)(f.a.compactPostStyles, E.a.overviewCommentPost, {
						[E.a.banned]: !!e.post.bannedBy,
						[E.a.reported]: !e.post.bannedBy && !!e.post.numReports && e.post.numReports > 0
					}, t),
					post: i,
					onClick: o,
					eventFactory: s
				}, n.a.createElement(I, {
					style: {
						background: Object(g.e)(e)
					}
				}, n.a.createElement(P, null, n.a.createElement(_, null), n.a.createElement(S, null, j._("{postAuthor} commented on {postTitle} {postMeta}", [j._param("postAuthor", A({
					...e
				})), j._param("postTitle", n.a.createElement(T, null, n.a.createElement(M, {
					outboundLinkClassName: E.a.postTitleOutboundLink,
					post: i,
					size: p.b.Small,
					titleClassName: E.a.postTitleTitle
				}))), j._param("postMeta", F(e))], {
					hk: "d6l8e"
				})))))
			}))))
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				a = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				l = s.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(r.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: o,
					onClick: r,
					post: a,
					redditStyle: m,
					theme: p,
					...u
				} = e;
				return n.a.createElement("div", c({
					className: Object(i.a)(l.a.backgroundWrapper, s),
					style: Object(d.c)(o, e),
					onClick: r
				}, u), t)
			})
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, s) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				i = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/ads/index.ts"),
				d = s("./src/reddit/components/AdViewability/index.tsx"),
				a = s("./src/reddit/helpers/trackers/gallery.ts"),
				l = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				c = s("./src/reddit/hooks/useTracking.ts");
			var m = n.a.memo(e => {
					const t = Object(o.useRef)(null),
						s = Object(c.a)(),
						i = Object(o.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: o
								} = t;
								o >= .5 && s(a.d(e.postId))
							})
						}, [s, e.postId]),
						r = Object(o.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(l.a)(t, i, r), n.a.createElement("div", {
						role: "presentation"
					}, n.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/connectors/PostViewable/index.ts"),
				h = s("./src/reddit/models/Media/index.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/telemetry.ts"),
				g = s("./src/lib/classNames/index.ts"),
				v = s("./src/lib/objectSelector/index.ts"),
				f = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				C = s("./src/reddit/components/PostContainer/index.m.less"),
				y = s.n(C);
			const O = Object(u.a)(() => Object(i.c)({
					basePixelMetadata: Object(v.a)((e, t) => {
						let {
							post: s
						} = t;
						return Object(b.b)(e, s.id)
					}),
					clickTrackingId: (e, t) => {
						let {
							post: s
						} = t;
						return s.id
					},
					imageGalleryCurrentItem: (e, t) => {
						let {
							post: s
						} = t;
						return Object(b.i)(e, {
							postId: s.id
						})
					},
					pageType: e => Object(x.d)(e).pageType
				})),
				w = "post-container";
			class E extends n.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: o,
						imageGalleryCurrentItem: i,
						makePostContainerId: l,
						post: c,
						onClick: p,
						pageType: u,
						sendEvent: b,
						style: x,
						ref: v,
						shouldAddGalleryViewability: f = !0
					} = this.props, C = n.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: x,
						ref: v,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && e(() => p && p(s, c, t, i, u))(s), c.id && i) {
								const {
									source: e
								} = Object(r.t)(c, i);
								e && e.outboundUrl && b(Object(a.c)(c.id, e.outboundUrl))
							}
						},
						className: Object(g.a)(y.a.WrappedPost, o, `Post ${c.id}`, {
							promotedlink: c.isSponsored
						}),
						"data-testid": w,
						id: l ? l(c.id) : c.id,
						tabIndex: -1
					}, s), O = !!c.media && c.media.type === h.o.VIDEO;
					return (e => c.media && Object(h.E)(c.media) && f ? n.a.createElement(m, {
						postId: c.id
					}, e) : e)((e => c.isSponsored || O ? n.a.createElement(d.a, {
						post: c,
						trackDisplay: !0
					}, e) : e)(C))
				}
			}
			t.a = O(Object(f.a)(Object(p.c)(E)))
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, s) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/helpers/trackers/postCollection.ts"),
				p = s("./src/reddit/components/PostFollow/index.m.less"),
				u = s.n(p);
			class h extends i.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: o
							},
							sendEvent: n
						} = this.props, i = !!o;
						n(e ? Object(m.o)({
							postId: s,
							isFollowed: i
						}) : Object(m.g)({
							postId: s,
							isFollowed: i
						})), t && t()
					}, this.onMouseEnter = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !1
						})
					}, this.state = {
						isHovered: !1
					}
				}
				render() {
					const {
						className: e,
						isEventFollow: t,
						post: s
					} = this.props, n = this.state.isHovered, r = s.isFollowed;
					let d = r ? o.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : o.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return r && n && (d = o.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), i.a.createElement("button", {
						className: Object(a.a)(u.a.collectionFollow, {
							[u.a.isFollowed]: !!s.isFollowed,
							[u.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, d)
				}
			}
			const b = Object(r.b)(() => Object(d.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(l.A)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(c.c)(h))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				i = s("./src/reddit/components/CrosspostBox/index.tsx"),
				r = s("./src/reddit/components/Media/index.tsx");

			function d(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? n.a.createElement(i.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * i.b - 2 * i.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : n.a.createElement(r.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less": function(e, t, s) {
			e.exports = {
				ListContainer: "VHCAEHBEuD8bln8MDFl35",
				listContainer: "VHCAEHBEuD8bln8MDFl35",
				Icon: "_3WbGqnEpw_ds1P508Qawma",
				icon: "_3WbGqnEpw_ds1P508Qawma",
				DropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				dropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				text: "_1llB9GXV3OPp_55xrtgYNh",
				svgIcon: "_2mkCGM7pDFARBtuKmKCBf0"
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "h", (function() {
				return f
			})), s.d(t, "i", (function() {
				return C
			})), s.d(t, "j", (function() {
				return y
			})), s.d(t, "k", (function() {
				return O
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "b", (function() {
				return E
			})), s.d(t, "c", (function() {
				return j
			})), s.d(t, "e", (function() {
				return k
			})), s.d(t, "g", (function() {
				return I
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				i = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/controls/Dropdown/Row.tsx"),
				d = s("./src/reddit/icons/fonts/index.tsx"),
				a = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				l = s("./src/reddit/icons/fonts/Envelope/index.tsx"),
				c = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				m = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				p = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				u = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				h = s("./src/reddit/icons/svgs/CircleCheckLight/index.tsx"),
				b = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				x = s.n(b);
			const g = i.a.wrapped(a.a, "Icon", x.a),
				v = i.a.wrapped(l.a, "Icon", x.a),
				f = i.a.wrapped(c.a, "Icon", x.a),
				C = i.a.wrapped(m.a, "Icon", x.a),
				y = i.a.wrapped(p.a, "Icon", x.a),
				O = i.a.wrapped(u.a, "Icon", x.a),
				w = () => n.a.createElement(d.a, {
					name: "mod_mute",
					className: x.a.Icon
				}),
				E = () => n.a.createElement(d.a, {
					name: "calendar",
					className: x.a.Icon
				}),
				j = () => n.a.createElement(h.a, {
					className: x.a.svgIcon
				}),
				k = i.a.wrapped(r.b, "DropdownRow", x.a),
				I = i.a.div("ListContainer", x.a)
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, s) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				allowPointerEvents: "_2iiIcja5xIjg-5sI4ECvcV",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/PostLeftRail/index.tsx"),
				d = s("./src/reddit/components/VerticalVotes/index.tsx"),
				a = s("./src/reddit/controls/Checkbox/index.tsx"),
				l = s("./src/reddit/helpers/isPost.ts"),
				c = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				m = s("./src/reddit/components/PostRailAndVotes/index.m.less"),
				p = s.n(m);
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: o = !1,
					isCheckboxSelected: m = !1,
					isCountAnimShadowTestEnabled: u,
					toggleCheckbox: h = (() => {}),
					flairStyleTemplate: b,
					redditStyle: x,
					isOverlay: g,
					isVoteCountAnimation: v,
					postId: f,
					shouldShowUpvoteRatioOnHover: C
				} = e, y = `upvote-button-${t.id}${g?"-overlay":""}`;
				return n.a.createElement(r.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(c.a)(t),
					isSponsored: !!Object(l.b)(t) && t.isSponsored,
					redditStyle: x
				}, o && n.a.createElement(a.a, {
					className: p.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: h
				}), n.a.createElement(d.a, {
					flairStyleTemplate: b,
					model: t,
					onVoteClick: s,
					redditStyle: x,
					upvoteTooltipId: y,
					isVoteCountAnimation: v,
					isCountAnimShadowTestEnabled: u,
					postId: f,
					scoreClassName: Object(i.a)(p.a.score, {
						[p.a.allowPointerEvents]: C
					}),
					shouldShowUpvoteRatioOnHover: C
				}))
			}
		},
		"./src/reddit/components/ProfileItemList/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/lodash/last.js"),
				n = s.n(o),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				d = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/opener/index.ts"),
				l = s("./src/reddit/constants/adEvents.ts"),
				c = s("./src/reddit/components/PostList/LoadMore.tsx"),
				m = s("./src/reddit/components/PostList/Placeholder.tsx"),
				p = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				u = s("./src/reddit/components/Scroller/Simple.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				b = s("./src/reddit/helpers/getClickInfo.ts"),
				x = s("./src/reddit/helpers/isComment.ts"),
				g = s("./src/reddit/contexts/Post/index.tsx"),
				v = s("./src/lib/LRUCache/index.ts"),
				f = s("./src/telemetry/index.ts"),
				C = s("./src/telemetry/models/Timer.ts"),
				y = s("./src/reddit/components/PostList/index.m.less"),
				O = s.n(y);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const E = 500,
				j = new v.a(E),
				k = new v.a(E),
				I = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				P = (e, t, s, o, n, i) => {
					const r = `entered-${e}-${t}-${s?`last-${o}-${n}`:""}`;
					let d = j.get(r);
					return void 0 === d && (d = () => {
						s && i.onBottomViewed(o, n), i.trackOnPostEnteredViewport(e, t)
					}, j.set(r, d)), d
				},
				_ = (e, t) => {
					const s = `click-${e}`;
					let o = k.get(s);
					return void 0 === o && (o = (e, s) => {
						s.isSponsored && t.fireAdPixelsOfType(s, l.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(a.e)(s.source.outboundUrl, a.d.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(b.a)(e)
						})
					}, k.set(s, o)), o
				};
			class S extends r.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new v.a(E), this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}
				}
				UNSAFE_componentWillMount() {
					this.timerId && f.c.cancel(this.timerId), this.props.itemIds.length && (this.timerId = f.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = f.c.end(this.timerId);
						setTimeout(() => Object(f.b)(d.m.Redesign, {
							type: "mount",
							component: "overviewChronoList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && f.c.cancel(this.timerId), e.itemIds.length && (this.timerId = f.c.start()), (e.listingKey !== this.props.listingKey || e.itemIds.length !== this.props.itemIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (this.checkAndSendScreenview(), this.timerId && f.c.has(this.timerId)) {
						const e = f.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(f.b)(d.m.Redesign, {
							duration: e,
							type: "mount",
							component: "overviewChronoList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && f.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && n()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return f.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const o = f.c.end(e);
					setTimeout(() => s(t(o, C.TimerType.InApp)), 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t
					} = this.props;
					return Boolean(e) || !1 !== t
				}
				hasPosts() {
					return this.props.itemIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						itemIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const {
						itemIds: t,
						...s
					} = this.props, {
						itemIds: o,
						...n
					} = e, i = Object.keys(s), r = Object.keys(n);
					return r.length !== i.length || !!r.some(e => s[e] !== n[e])
				}
				scrollChildForItem(e, t, s, o, n, i) {
					const {
						listingKey: d,
						listingName: a,
						postClickEventFactory: l
					} = this.props, c = `post-${i}-${e}-${t}-${s?"last-index":""}-${a}-${d}`;
					let m;
					if (void 0 === (m = this.scrollChildCache.get(c))) {
						const {
							inSubredditOrProfile: t,
							itemIdToPostId: p
						} = this.props, u = p[e], h = `overview-chrono-list-item-[layout: ${i}]-[itemId: ${e}]`, b = P(u, i, s, d, a, this.props), x = {
							key: h,
							eventFactory: l,
							inSubredditOrProfile: t,
							isFirstInCommentList: o,
							isLastInCommentList: n,
							isOverlay: !1,
							itemId: e,
							last: s,
							layout: i,
							onClickPost: _(e, this.props),
							postId: u
						}, v = this.props.itemComponent;
						m = {
							estHeight: this.props.estimateItemHeight(e, i, o),
							id: e,
							isFocusable: !1,
							trackOnEnteredViewport: b,
							render: e => r.a.createElement(g.a, {
								postId: x.postId
							}, r.a.createElement(v, w({}, x, e)))
						}, this.scrollChildCache.set(c, m)
					}
					return m
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return r.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						layout: s,
						onTryAgain: o
					} = this.props;
					return r.a.createElement("div", {
						className: O.a.placeholder
					}, r.a.createElement(m.a, {
						className: t,
						isLoading: !e,
						layout: s
					}), !!e && r.a.createElement(p.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						layout: s,
						onLoadMore: o
					} = this.props;
					return r.a.createElement("div", {
						className: O.a.placeholder
					}, r.a.createElement(c.a, {
						isLoading: !!t,
						layout: s,
						countOverride: I[s]
					}), !!e && r.a.createElement(p.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderList() {
					const {
						commentsById: e,
						layout: t,
						loadMore: s,
						itemIds: o,
						onLoadMore: n
					} = this.props, i = o.map((s, n, i) => {
						const r = n === o.length - 1,
							d = n && o[n - 1],
							a = !r && o[n + 1],
							l = !!Object(x.a)(s) && (!d || !Object(x.a)(d) || e[d].postId !== e[s].postId),
							c = !!Object(x.a)(s) && (!a || !Object(x.a)(a) || e[a].postId !== e[s].postId);
						return this.scrollChildForItem(s, n, r, l, c, t)
					});
					return r.a.createElement("div", null, r.a.createElement(u.b, {
						innerRef: this.updateScrollerRef,
						className: this.props.className,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						enableElementHiding: !0,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: s && s.token ? s.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: n,
						viewportTopPadding: h.f + h.r
					}, i), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			t.a = S
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/post.ts"),
				r = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/reddit/models/Vote/index.ts"),
				a = s("./src/reddit/contexts/InsideOverlay.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/contexts/Post/index.tsx"),
				m = s("./src/reddit/selectors/activeModalId.ts"),
				p = s("./src/reddit/selectors/chatPost.ts"),
				u = s("./src/reddit/selectors/moderatorPermissions.ts"),
				h = s("./src/reddit/selectors/postFlair.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/showPromotedCTA.ts"),
				g = s("./src/reddit/selectors/user.ts");
			const v = {
					autoplayPref: g.b,
					activeModalId: m.a,
					crosspost: b.d,
					isActive: b.j,
					isChatPost: p.d,
					isCurrentUserProfilePost: b.l,
					isExpanded: b.m,
					isLoggedIn: g.Q,
					showPromotedCTA: x.a,
					moderatorPermissions: u.n,
					modModeEnabled: l.U,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: h.a,
					showMedia: l.s,
					flairStyleTemplate: l.W
				},
				f = Object(o.b)(() => Object(n.c)(v), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const o = t === d.a.upvoted ? Object(i.kb)(s) : Object(i.w)(s);
							e(o)
						},
						onIgnoreReports: () => e(Object(i.gb)(s)),
						onOpenReportsDropdown: t => e(Object(r.h)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: e => e.title
				}));
			t.a = e => Object(c.b)(f(Object(a.b)(e)))
		},
		"./src/reddit/constants/gold.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "e", (function() {
				return r
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "i", (function() {
				return l
			})), s.d(t, "h", (function() {
				return c
			})), s.d(t, "g", (function() {
				return m
			}));
			const o = "ModerationPage--Modal--AddAward",
				n = "ModerationPage--Modal--DeleteAwardConfirmation",
				i = 20,
				r = 4,
				d = 1e4,
				a = .2,
				l = .1,
				c = .1,
				m = 500
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/controls/Checkbox/index.m.less"),
				a = s.n(d);
			t.a = e => n.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, n.a.createElement(r.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(i.a)({
					[a.a.redditStyle]: e.redditStyle,
					[a.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const n = e => {
				let {
					edges: t
				} = e;
				const s = [];
				for (const {
						node: n
					} of t) s.push(Object(o.f)(n));
				return s
			}
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/search/renderMedia.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				i = s("./src/reddit/components/PostMedia/index.tsx");
			const r = (e, t, s, o, i, r) => o ? e.crosspostRootId ? n.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, d(e, s, i, r)) : d(e, s, i, r) : null,
				d = (e, t, s, o) => n.a.createElement(i.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: o,
					isListing: !0,
					isNotCardView: !0,
					post: e,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					shouldShowGalleryTileOption: s,
					showCentered: !0,
					showFull: !0
				})
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "d", (function() {
				return g
			}));
			var o = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				i = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				r = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				d = s("./src/reddit/models/Theme/index.ts"),
				a = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				l = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				c = s.n(l);
			const m = {},
				p = e => Object(d.g)(Object(a.a)(e).post, Object(a.a)(e).backgroundImage, Object(a.a)(e).backgroundImagePosition),
				u = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(d.g)(e.postBackgroundColor || Object(a.a)(t).post, e.postBackgroundImage, Object(a.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(d.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: p(t)
					}
				},
				h = e => Object(o.k)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: h(e.postBackgroundColor)
				} : m,
				x = e => e.isActive ? c.a.mIsActive : void 0,
				g = e => {
					const t = Object(i.a)(Object(n.a)(e), r.a.actionIcon, r.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/creatorStats.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return d
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "a", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			}));
			var o = s("./src/reddit/components/CreatorStats/helpers.ts"),
				n = s("./src/reddit/constants/tracking.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			const r = e => {
					switch (e) {
						case o.b.Available:
							return "insights_shown";
						case o.b.NotAvailableYet:
							return "not_enough_views";
						case o.b.NotAvailable:
							return "post_too_old";
						case o.b.Expired:
							return "insights_expired";
						default:
							return ""
					}
				},
				d = (e, t) => s => ({
					...Object(i.n)(s),
					action: n.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(i.gb)(s),
					post: Object(i.H)(s, e),
					userSubreddit: Object(i.qb)(s),
					actionInfo: Object(i.d)(s, {
						reason: r(t)
					})
				}),
				a = (e, t) => s => ({
					...Object(i.n)(s),
					action: n.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(i.H)(s, t),
					subreddit: Object(i.gb)(s),
					userSubreddit: Object(i.qb)(s)
				}),
				l = e => {
					switch (e) {
						case o.b.Available:
							return "stats";
						case o.b.NotAvailableYet:
							return "not_enough_views";
						case o.b.NotAvailable:
						case o.b.Expired:
							return "no_data";
						case o.b.Quarantined:
							return "quarantined";
						default:
							return ""
					}
				},
				c = e => t => ({
					...Object(i.n)(t),
					action: n.c.CLICK,
					noun: "post_stats",
					source: "post",
					actionInfo: Object(i.d)(t, {
						pageType: "profile"
					}),
					post: Object(i.H)(t, e, void 0, 0),
					profile: Object(i.Q)(t)
				}),
				m = (e, t, s) => o => ({
					...Object(i.n)(o),
					action: n.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(i.d)(o, {
						reason: l(t)
					}),
					post: Object(i.H)(o, e, void 0, s)
				}),
				p = (e, t, s, o, r, d) => a => ({
					...Object(i.n)(a),
					action: n.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(i.d)(a, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(i.H)(a, e, void 0, d),
					subreddit: Object(i.gb)(a),
					outbound: {
						postId: s,
						url: t,
						subredditId: o,
						subredditName: r
					}
				}),
				u = (e, t, s) => o => ({
					...Object(i.n)(o),
					action: n.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(i.d)(o, {
						pageType: "post_stats",
						reason: l(t)
					}),
					post: Object(i.H)(o, e, void 0, s),
					subreddit: Object(i.gb)(o)
				})
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: Object(i.a)(Object(r.b)("distinguish", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(i.b)("message",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(i.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/CircleCheckLight/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			const i = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M18.04 7.67457C18.5905 9.55741 18.4654 11.5734 17.6865 13.3738C16.9076 15.1742 15.5238 16.6457 13.7746 17.5336C12.0254 18.4215 10.0209 18.67 8.1078 18.2362C6.19473 17.8023 4.49351 16.7133 3.29851 15.1576C2.10351 13.602 1.48992 11.6775 1.5639 9.71728C1.63788 7.75702 2.39478 5.88429 3.70364 4.42313C5.01249 2.96197 6.79095 2.00431 8.73128 1.71586C10.6716 1.42742 12.6517 1.82633 14.329 2.84357L15.189 1.90557C13.2556 0.658893 10.9412 0.141738 8.661 0.446834C6.38077 0.75193 4.2838 1.85932 2.74608 3.57044C1.20837 5.28156 0.330485 7.4845 0.269845 9.78425C0.209205 12.084 0.969774 14.3301 2.41518 16.1199C3.86058 17.9097 5.89628 19.1261 8.15726 19.5509C10.4182 19.9757 12.7566 19.5813 14.7531 18.4382C16.7496 17.2952 18.2736 15.4783 19.0519 13.3134C19.8301 11.1485 19.8118 8.77715 19 6.62457L18.04 7.67457Z",
				fill: "inherit"
			}), n.a.createElement("path", {
				d: "M9.99503 12.6426C9.91293 12.6427 9.83162 12.6266 9.75577 12.5952C9.67991 12.5638 9.61101 12.5177 9.55303 12.4596L5.54703 8.45257L6.43203 7.56957L9.97603 11.1146L19.013 1.24657L19.935 2.08957L10.456 12.4396C10.3989 12.5013 10.3298 12.5509 10.253 12.5852C10.1762 12.6196 10.0932 12.6381 10.009 12.6396L9.99503 12.6426Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/pages/ProfilePrivate/index.m.less": function(e, t, s) {
			e.exports = {
				mixedList: "_203kLAn6xQ7ktVOvJCzl9p"
			}
		},
		"./src/reddit/pages/ProfilePrivate/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/pages/profilePrivate/index.ts"),
				a = s("./src/reddit/components/EmptyProfile/index.ts"),
				l = s("./src/reddit/components/JumpToContent/index.tsx"),
				c = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				m = s("./src/reddit/components/PostList/index.tsx"),
				p = s("./src/reddit/components/ProfileItemList/index.tsx"),
				u = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				h = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				b = s("./node_modules/lodash/noop.js"),
				x = s.n(b),
				g = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				v = s("./src/reddit/actions/post.ts"),
				f = s("./src/reddit/components/TrackingHelper/index.tsx"),
				C = s("./src/reddit/components/PostList/Placeholder.tsx"),
				y = s("./src/reddit/actions/postList.ts"),
				O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				w = s("./src/reddit/helpers/isComment.ts"),
				E = s("./src/reddit/helpers/isPost.ts"),
				j = s("./src/reddit/helpers/trackers/post.ts"),
				k = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/objectSelector/index.ts")),
				I = s("./src/reddit/models/Flair/index.ts"),
				P = s("./src/reddit/models/PostCreationForm/index.ts"),
				_ = s("./src/reddit/models/Vote/index.ts");
			const S = {
				t3_1: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "that_one_guy",
					authorId: "t2_1234",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_1",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_1",
						type: "subreddit"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "i.redd.it",
					events: [],
					flair: [],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !1,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForLinkedPosts: !1,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isSurveyAd: !1,
					isStickied: !1,
					liveCommentsWebsocket: "wss://reddit.com/live/1",
					isReactAllowed: !1,
					attributionInfo: null,
					reactedFrom: null,
					media: {
						type: "image",
						content: "https://i.redd.it/iap6jbwjlosy.jpg",
						width: 100,
						height: 100,
						obfuscated: null,
						resolutions: []
					},
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					preview: {
						url: "https://i.redditmedia.com/msdj41xc-LgU8OfIuLDP52FtgyyahbFAizi9mp-aBoI.jpg?s=931d28c1922e12dbf6a06a357cdf3ceb",
						width: 480,
						height: 360
					},
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_1",
					removedBy: null,
					removedByCategory: null,
					score: 23,
					isScoreHidden: !1,
					sendReplies: !1,
					source: null,
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "A plain post",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 0
				},
				t3_2: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "that_other_chick",
					authorId: "t2_1235",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_2",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_100",
						type: "profile"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "i.redd.it",
					events: [],
					flair: [],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !1,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForLinkedPosts: !1,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isSurveyAd: !1,
					isStickied: !1,
					isReactAllowed: !1,
					attributionInfo: null,
					reactedFrom: null,
					liveCommentsWebsocket: "wss://reddit.com/live/2",
					media: {
						content: "https://i.redd.it/d43skac7fqsy.jpg",
						type: "image",
						width: 100,
						height: 100,
						obfuscated: null,
						resolutions: []
					},
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_2",
					removedBy: null,
					removedByCategory: null,
					score: 23,
					isScoreHidden: !1,
					sendReplies: !1,
					source: null,
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "Another not so plain post here.",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 1
				},
				t3_3: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "person_number_three",
					authorId: "t2_1236",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_3",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_1",
						type: "subreddit"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "i.redd.it",
					events: [],
					flair: [],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !1,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForLinkedPosts: !1,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isSurveyAd: !1,
					isStickied: !1,
					isReactAllowed: !1,
					attributionInfo: null,
					reactedFrom: null,
					liveCommentsWebsocket: "wss://reddit.com/live/3",
					media: {
						content: "https://i.redd.it/d43skac7fqsy.jpg",
						type: "image",
						width: 100,
						height: 100,
						obfuscated: null,
						resolutions: []
					},
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					preview: {
						url: "https://i.redditmedia.com/msdj41xc-LgU8OfIuLDP52FtgyyahbFAizi9mp-aBoI.jpg?s=931d28c1922e12dbf6a06a357cdf3ceb",
						width: 480,
						height: 360
					},
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_3",
					removedBy: null,
					removedByCategory: null,
					score: 23,
					isScoreHidden: !1,
					sendReplies: !1,
					source: null,
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "Another plain post here.",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 1
				},
				t3_4: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "this_user_is_the_best",
					authorId: "t2_1237",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_4",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_100",
						type: "profile"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "i.redditmedia.com",
					events: [],
					flair: [{
						type: I.f.Text,
						text: "hello world"
					}, {
						type: I.f.Spoiler,
						text: "spoiler"
					}],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !1,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForLinkedPosts: !1,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isSurveyAd: !1,
					isStickied: !1,
					isReactAllowed: !1,
					attributionInfo: null,
					reactedFrom: null,
					liveCommentsWebsocket: "wss://reddit.com/live/4",
					media: null,
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					preview: {
						url: "https://i.redditmedia.com/msdj41xc-LgU8OfIuLDP52FtgyyahbFAizi9mp-aBoI.jpg?s=931d28c1922e12dbf6a06a357cdf3ceb",
						width: 480,
						height: 360
					},
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_4",
					removedBy: null,
					removedByCategory: null,
					score: 300,
					isScoreHidden: !1,
					sendReplies: !1,
					source: {
						displayText: "foobar.com",
						url: "http://foobar.com",
						outboundUrl: "http://foobar.com/foobar"
					},
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "Hello world one two three four five six seven eight. See? I can count!",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 0
				},
				t3_5: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "yet_another_cool_dude",
					authorId: "t2_1238",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_5",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_1",
						type: "subreddit"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "self.listentothis",
					events: [],
					flair: [{
						type: I.f.Text,
						text: "hello world"
					}, {
						type: I.f.Spoiler,
						text: "spoiler"
					}],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !1,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForLinkedPosts: !1,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isSurveyAd: !1,
					isStickied: !1,
					isReactAllowed: !1,
					attributionInfo: null,
					reactedFrom: null,
					liveCommentsWebsocket: "wss://reddit.com/live/5",
					media: {
						type: "text",
						rteMode: P.i.RICH_TEXT,
						markdownContent: "",
						content: "",
						obfuscated: null
					},
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					preview: {
						url: "https://i.redditmedia.com/msdj41xc-LgU8OfIuLDP52FtgyyahbFAizi9mp-aBoI.jpg?s=931d28c1922e12dbf6a06a357cdf3ceb",
						width: 480,
						height: 360
					},
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_5",
					removedBy: null,
					removedByCategory: null,
					score: 300,
					isScoreHidden: !1,
					sendReplies: !1,
					source: null,
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "This is an interesting post title",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 0
				},
				t3_6: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "spez",
					authorId: "t2_1239",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_6",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_100",
						type: "profile"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "self.listentothis",
					events: [],
					flair: [{
						type: I.f.Text,
						text: "hello world"
					}, {
						type: I.f.Spoiler,
						text: "spoiler"
					}],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !1,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForLinkedPosts: !1,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isSurveyAd: !1,
					isReactAllowed: !1,
					attributionInfo: null,
					reactedFrom: null,
					isStickied: !1,
					liveCommentsWebsocket: "wss://reddit.com/live/6",
					media: {
						type: "text",
						rteMode: P.i.RICH_TEXT,
						markdownContent: "",
						content: "",
						obfuscated: null
					},
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					preview: {
						url: "https://i.redditmedia.com/msdj41xc-LgU8OfIuLDP52FtgyyahbFAizi9mp-aBoI.jpg?s=931d28c1922e12dbf6a06a357cdf3ceb",
						width: 480,
						height: 360
					},
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_6",
					removedBy: null,
					removedByCategory: null,
					score: 300,
					isScoreHidden: !1,
					sendReplies: !1,
					source: null,
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "This is an extremely interesting post title",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 0
				},
				abc12345: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "spez",
					authorId: "t2_1240",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_6",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_100",
						type: "profile"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "i.redditmedia.com",
					events: [{
						type: 1,
						url: "https://www.reddit.com/i.gif"
					}],
					flair: [{
						type: I.f.Text,
						text: "hello world"
					}, {
						type: I.f.Spoiler,
						text: "spoiler"
					}],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !0,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForLinkedPosts: !1,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isSurveyAd: !1,
					isStickied: !1,
					isReactAllowed: !1,
					attributionInfo: null,
					reactedFrom: null,
					liveCommentsWebsocket: "wss://reddit.com/live/6",
					media: {
						type: "text",
						rteMode: P.i.RICH_TEXT,
						markdownContent: "",
						content: "",
						obfuscated: null
					},
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					preview: {
						url: "https://i.redditmedia.com/msdj41xc-LgU8OfIuLDP52FtgyyahbFAizi9mp-aBoI.jpg?s=931d28c1922e12dbf6a06a357cdf3ceb",
						width: 480,
						height: 360
					},
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_3",
					removedBy: null,
					removedByCategory: null,
					score: 300,
					isScoreHidden: !1,
					sendReplies: !1,
					source: null,
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "This is an extremely interesting post title",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 0
				}
			};
			T = {
				authorIsBlocked: !0,
				media: {
					type: "text",
					rteMode: P.i.RICH_TEXT,
					markdownContent: "",
					content: "This is content in a post.",
					obfuscated: null
				}
			}, _.a.notVoted;
			var T;
			const M = Object(k.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const o = e.posts.models;
					return L(e, {
						listingKey: s
					}).filter(e => {
						if (Object(w.a)(e)) return !0; {
							const t = o[e];
							return t && !t.hidden
						}
					})
				}),
				L = Object(k.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const o = e.pages.profileOverview.chrono.ids[s];
					return o ? [...o] : []
				}),
				N = Object(k.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					return M(e, {
						listingKey: s
					}).reduce((t, s) => {
						const o = Object(w.a)(s) ? e.features.comments.models[s].postId : s;
						return t[s] = o, t
					}, {})
				}),
				R = (Object(k.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const o = e.posts.models;
					return R(e, {
						listingKey: s
					}).filter(e => {
						const t = o[e];
						return t && !t.hidden
					})
				}), Object(k.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					return M(e, {
						listingKey: s
					}).map(t => Object(w.a)(t) ? e.features.comments.models[t].postId : t)
				})),
				F = Object(k.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const o = e.posts.models,
						n = R(e, {
							listingKey: s
						}),
						i = {};
					return n.forEach(e => i[e] = o[e]), i
				}),
				A = Object(k.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const o = e.features.comments.models,
						n = M(e, {
							listingKey: s
						}),
						i = {};
					return n.forEach(e => !!Object(w.a)(e) && (i[e] = o[e])), i
				});
			var B = s("./src/reddit/selectors/subreddit.ts"),
				D = s("./src/reddit/selectors/tracking.ts"),
				G = s("./src/reddit/selectors/user.ts");
			const W = (e, t) => (e, t, s) => Object(w.a)(e) ? 120 : 47,
				U = (Object(O.u)(), {
					apiError: (e, t) => {
						let {
							listingKey: s
						} = t;
						return e.pages.profileOverview.chrono.api.error[s]
					},
					apiPending: (e, t) => {
						let {
							listingKey: s
						} = t;
						return e.pages.profileOverview.chrono.api.pending[s]
					},
					currentUser: G.k,
					layout: O.S,
					loadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						return e.pages.profileOverview.chrono.loadMore[s]
					},
					subredditsById: B.bb,
					viewportDataLoaded: D.a,
					commentsById: A,
					itemIds: M,
					itemIdToPostId: N,
					postsById: F,
					estimateItemHeight: W
				}),
				V = Object(r.c)(U);
			Object(i.b)(V, (e, t) => ({
				onBottomViewed: (t, s) => e(y.c(t, s)),
				openPost: t => {
					e(v.L(t))
				},
				trackOnPostEnteredViewport: (t, s) => {
					Object(E.a)(t) && e(v.O(t))
				},
				trackOnPostExitedViewport: (t, s, o) => {
					Object(E.a)(t) && e(v.P(t, o))
				},
				fireAdPixelsOfType: x.a
			}), (e, t, s) => ({
				...e,
				...t,
				...s,
				postClickEventFactory: (e, t) => Object(j.k)(e, t)
			}));
			var H = s("./src/reddit/featureFlags/index.ts"),
				K = s("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				z = s("./src/reddit/models/Profile/index.ts");
			const q = (e, t) => {
					let {
						listingKey: s
					} = t;
					return e.profilePrivatePage.api.pending[s]
				},
				Q = (e, t) => {
					let {
						listingKey: s
					} = t;
					return e.profilePrivatePage.api.error[s]
				},
				Z = Object(k.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					return (e.profilePrivatePage.ids[s] || []).reduce((t, s) => {
						const o = Object(w.a)(s) ? e.features.comments.models[s].postId : s;
						return t[s] = o, t
					}, {})
				}),
				J = Object(O.u)(),
				X = Object(O.u)(),
				Y = {
					apiError: Q,
					apiPending: q,
					layout: O.S,
					loadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						if (!e.profilePrivatePage.pageInfo || !e.profilePrivatePage.pageInfo[s] || !e.profilePrivatePage.pageInfo[s].hasNextPage) return null;
						const o = e.profilePrivatePage.ids[s];
						return {
							token: o[o.length - 1],
							dist: K.h
						}
					},
					subredditsById: e => e.subreddits.models,
					postsById: e => e.posts.models,
					viewportDataLoaded: (e, t) => !q(e, t) && !Q(e, t)
				},
				$ = Object(r.c)({
					...Y,
					currentUser: G.k,
					commentsById: e => e.features.comments.models,
					itemIds: (e, t) => {
						let {
							listingKey: s
						} = t;
						return -1 === s.indexOf(z.b.Saved) && -1 === s.indexOf(z.b.ReceivedGildings) && -1 === s.indexOf(z.b.GivenGildings) ? [] : e.profilePrivatePage.ids[s] || []
					},
					itemIdToPostId: Z,
					estimateItemHeight: W
				}),
				ee = Object(r.c)({
					...Y,
					measureScrollFPS: H.d.measureScrollFPS,
					postIds: (e, t) => {
						let {
							listingKey: s
						} = t;
						return s.indexOf(z.b.Saved) > -1 || s.indexOf(z.b.ReceivedGildings) > -1 || s.indexOf(z.b.GivenGildings) > -1 ? [] : e.profilePrivatePage.ids[s] || []
					},
					postListPlaceholderComponent: () => C.a
				}),
				te = e => ({
					onBottomViewed: x.a,
					openPost: t => {
						e(v.L(t))
					},
					trackOnPostEnteredViewport: x.a,
					fireAdPixelsOfType: (t, s) => {
						e(v.z(t, s))
					}
				}),
				se = Object(i.b)($, te, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(j.k)(e, t)
				})),
				oe = Object(i.b)(ee, e => ({
					...te(e),
					onFirstPostChanged: x.a,
					adBrandSafetyStatusReceived: x.a,
					trackOnPostExitedViewport: x.a
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(j.k)(e, t),
					postComponentForLayout: g.b
				}));
			var ne = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				ie = s("./src/reddit/helpers/trackers/screenview.ts"),
				re = s("./src/reddit/layout/page/Listing/index.tsx"),
				de = s("./src/reddit/pages/ProfilePrivate/index.m.less"),
				ae = s.n(de);
			const le = Object(r.c)({
					currentUser: G.k
				}),
				ce = Object(i.b)(le, (e, t) => ({
					onLoadMore: () => e(Object(d.moreProfilePrivateRequested)(t.match.params.listingType))
				})),
				me = (e => Object(f.c)(J(se(e))))(p.a),
				pe = (e => Object(f.c)(X(oe(e))))(m.a);
			class ue extends n.a.Component {
				constructor() {
					super(...arguments), this.onLoadMore = () => this.props.onLoadMore()
				}
				renderNoPosts(e) {
					const t = z.a[e]();
					return () => n.a.createElement(a.d, {
						text: t
					})
				}
				renderContent() {
					const {
						currentUser: e,
						match: {
							params: {
								listingType: t,
								profileName: s
							}
						}
					} = this.props, o = s.toLowerCase(), i = Object(ne.b)(o, t);
					return e && e.displayText && e.displayText.toLowerCase() === o ? t === z.b.Saved || t === z.b.ReceivedGildings || t === z.b.GivenGildings ? n.a.createElement(me, {
						className: ae.a.mixedList,
						itemComponent: c.a,
						listingKey: i,
						noPostsComponent: this.renderNoPosts(t),
						listingName: o,
						listingViewed: Object(ie.s)(i),
						onLoadMore: this.onLoadMore
					}) : n.a.createElement(pe, {
						listingKey: i,
						noPostsComponent: this.renderNoPosts(t),
						listingName: o,
						listingViewed: Object(ie.s)(i),
						onLoadMore: this.onLoadMore
					}) : n.a.createElement(a.a, null)
				}
				render() {
					const {
						profileName: e
					} = this.props.match.params;
					return n.a.createElement(re.a, {
						fitPageToContent: !0,
						contentNavBar: n.a.createElement(u.a, {
							profileName: e
						}),
						content: n.a.createElement(n.a.Fragment, null, n.a.createElement(l.a, null), this.renderContent()),
						sidebar: n.a.createElement(h.a, {
							profileName: e
						})
					})
				}
			}
			t.default = ce(ue)
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				i = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/posts.ts");
			const d = e => Object(i.c)(e, {
					experimentName: n.Me,
					experimentEligibilitySelector: i.a
				}),
				a = (e, t) => t === n.Ue.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored),
				l = Object(o.a)(r.G, d, (e, t) => a(e, t));
			Object(o.a)((e, t) => t, d, (e, t) => a(e, t))
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			const o = (e, t) => {
				let {
					listingKey: s
				} = t;
				return e.tracking.viewportDataLoaded[s]
			}
		},
		"./src/redditGQL/operations/ProfileDownvoted.json": function(e) {
			e.exports = JSON.parse('{"id":"4acc506c916a"}')
		},
		"./src/redditGQL/operations/ProfileGivenGildings.json": function(e) {
			e.exports = JSON.parse('{"id":"f649d259b459"}')
		},
		"./src/redditGQL/operations/ProfileHidden.json": function(e) {
			e.exports = JSON.parse('{"id":"9446fd0182a5"}')
		},
		"./src/redditGQL/operations/ProfileReceivedGildings.json": function(e) {
			e.exports = JSON.parse('{"id":"a50776ef134a"}')
		},
		"./src/redditGQL/operations/ProfileSaved.json": function(e) {
			e.exports = JSON.parse('{"id":"298208a63798"}')
		},
		"./src/redditGQL/operations/ProfileUpvoted.json": function(e) {
			e.exports = JSON.parse('{"id":"4450c1a22029"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfilePrivate.1ba913bf90d1b5bff437.js.map