// https://www.redditstatic.com/desktop2x/ProfilePrivate.fc8136aa6eb827ae2e51.js
// Retrieved at 6/27/2022, 2:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfilePrivate"], {
		"./src/reddit/actions/pages/profilePrivate/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "privateListingPending", (function() {
				return T
			})), s.d(t, "privateMixedListingLoaded", (function() {
				return M
			})), s.d(t, "privatePostListingLoaded", (function() {
				return R
			})), s.d(t, "privateListingFailed", (function() {
				return A
			})), s.d(t, "profilePrivateRequested", (function() {
				return F
			})), s.d(t, "morePending", (function() {
				return B
			})), s.d(t, "moreMixedLoaded", (function() {
				return D
			})), s.d(t, "morePostLoaded", (function() {
				return W
			})), s.d(t, "moreFailed", (function() {
				return G
			})), s.d(t, "moreProfilePrivateRequested", (function() {
				return U
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/externalAccount.ts"),
				i = s("./src/reddit/actions/pages/profileShared.ts"),
				r = s("./src/reddit/actions/profile/index.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/redditGQL/operations/ProfileDownvoted.json"),
				l = s("./src/redditGQL/operations/ProfileGivenGildings.json"),
				c = s("./src/redditGQL/operations/ProfileHidden.json"),
				m = s("./src/redditGQL/operations/ProfileReceivedGildings.json"),
				p = s("./src/redditGQL/operations/ProfileSaved.json"),
				u = s("./src/redditGQL/operations/ProfileUpvoted.json");
			var h = s("./src/reddit/models/Comment/index.ts"),
				b = s("./src/reddit/models/Post/index.ts"),
				x = s("./src/reddit/models/Profile/index.ts"),
				g = s("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				f = s("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				v = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				y = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				C = s("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				O = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				P = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				E = s("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts");
			var w = e => {
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
					if (o && (r.account = Object(E.a)(i) || null, r.preferences = Object(C.a)(i.preferences, i.interactions) || null, i.redditor.profile && (r.profiles[i.redditor.profile.id] = Object(O.a)(i.redditor.profile))), n && i.redditor && i.redditor.moderatedSubreddits) {
						const {
							moderatedSubredditIds: e,
							pageInfo: t,
							subreddits: s
						} = Object(O.b)(i.redditor.moderatedSubreddits);
						r.moderatedPageInfo = t, r.moderatedSubredditIds = e, r.subreddits = s
					}
					const a = ((e, t) => {
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
					if (!a) return r;
					r.pageInfo = a.pageInfo;
					for (const {
							node: d
						} of a.edges) {
						let e;
						if (d.__typename === h.d.Comment) {
							const t = Object(g.a)(d);
							if (r.comments || (r.comments = {}), r.comments[t.id] = t, r.itemIds || (r.itemIds = []), r.itemIds.push(t.id), d.authorFlair && (r.authorFlair[t.subredditId] || (r.authorFlair[t.subredditId] = {}), r.authorFlair[t.subredditId][t.author] = Object(f.a)(d.authorFlair)[0]), e = d.postInfo, d.postInfo) {
								const {
									post: e,
									crosspost: t
								} = Object(y.a)(d.postInfo);
								r.posts[e.id] = e, t && (r.posts[t.id] = t)
							}
						} else e = d, r.itemIds || (r.itemIds = []), r.itemIds.push(e.id);
						if (!e) continue;
						const {
							post: t,
							crosspost: s
						} = e && Object(y.a)(e);
						r.posts[t.id] = t, s && (r.posts[s.id] = s), Object(b.i)(e) || Object(b.j)(e) || (e.authorFlair && (r.authorFlair[t.belongsTo.id] || (r.authorFlair[t.belongsTo.id] = {}), r.authorFlair[t.belongsTo.id][t.author] = Object(f.a)(e.authorFlair)[0]), Object(b.l)(e) ? r.profiles[e.profile.id] || (r.profiles[e.profile.id] = Object(O.a)(e.profile)) : Object(b.n)(e) && (r.subreddits[e.subreddit.id] || (r.subreddits[e.subreddit.id] = Object(P.a)(e.subreddit)), r.postFlair[e.subreddit.id] || (r.postFlair[e.subreddit.id] = Object(v.a)(e.subreddit))))
					}
					return r
				},
				k = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				j = s("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				I = s("./src/lib/initializeClient/installReducer.ts"),
				_ = s("./src/reddit/reducers/features/comments/index.ts");
			Object(I.a)({
				features: {
					comments: _.a
				}
			});
			const S = {
					[x.b.Downvoted]: (e, t) => Object(a.a)(e, {
						...d,
						variables: t
					}),
					[x.b.Hidden]: (e, t) => Object(a.a)(e, {
						...c,
						variables: t
					}),
					[x.b.Saved]: (e, t) => Object(a.a)(e, {
						...p,
						variables: t
					}),
					[x.b.Upvoted]: (e, t) => Object(a.a)(e, {
						...u,
						variables: t
					}),
					[x.b.ReceivedGildings]: (e, t) => Object(a.a)(e, {
						...m,
						variables: t
					}),
					[x.b.GivenGildings]: (e, t) => Object(a.a)(e, {
						...l,
						variables: t
					})
				},
				L = (e, t) => {
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
				N = e => {
					switch (e.listingType) {
						case x.b.Downvoted:
						case x.b.Hidden:
						case x.b.Saved:
						case x.b.Upvoted:
						case x.b.ReceivedGildings:
						case x.b.GivenGildings:
							return w(e)
					}
				},
				T = Object(o.a)(j.b),
				M = Object(o.a)(j.c),
				R = Object(o.a)(j.i),
				A = Object(o.a)(j.a),
				F = e => async (t, s, o) => {
					const {
						profileName: a,
						listingType: d
					} = e.params, l = s(), c = Object(k.b)(a.toLowerCase(), d), m = l.profilePrivatePage.ids[c] && l.profilePrivatePage.ids[c].length > 0, p = !!l.profilePrivatePage.api.error[c];
					if (l.profilePrivatePage.api.pending[c] || m && !p) return;
					const {
						account: u
					} = l.user, h = !u, b = !(u && u.displayText && l.profiles.moderated.models[u.displayText.toLowerCase()] && l.profiles.moderated.models[u.displayText.toLowerCase()].length);
					t(T({
						listingKey: c
					}));
					const g = {
							includeIdentity: h,
							includeModerated: b,
							first: j.h,
							after: null
						},
						f = await S[d](o.gqlContext(), g);
					if (f.ok && f.body) {
						const e = N({
							rawData: L(d, f),
							listingType: d,
							includeIdentity: h,
							includeModerated: b
						});
						d === x.b.Saved || d === x.b.ReceivedGildings || d === x.b.GivenGildings ? await t(M({
							listingKey: c,
							profileName: a,
							...e
						})) : await t(R({
							listingKey: c,
							profileName: a,
							...e
						})), await Promise.all([t(Object(i.d)(a)), t(Object(n.o)(a)), t(Object(r.d)(a))])
					} else t(A({
						listingKey: c,
						error: f.error
					}))
				}, B = Object(o.a)(j.f), D = Object(o.a)(j.e), W = Object(o.a)(j.g), G = Object(o.a)(j.d), U = e => async (t, s, o) => {
					const n = s(),
						i = n.user.account && n.user.account.displayText && n.user.account.displayText.toLowerCase();
					if (!i) return;
					const r = Object(k.b)(i, e);
					if (!n.profilePrivatePage.ids[r] || !n.profilePrivatePage.ids[r].length || !n.profilePrivatePage.pageInfo || !n.profilePrivatePage.pageInfo[r].hasNextPage || n.profilePrivatePage.api.error[r] || n.profilePrivatePage.api.pending[r]) return;
					const a = {
						includeIdentity: !1,
						includeModerated: !1,
						after: n.profilePrivatePage.pageInfo[r].endCursor,
						first: j.h
					};
					t(B({
						listingKey: r
					}));
					const d = await S[e](o.gqlContext(), a);
					if (d.ok && d.body) {
						const s = N({
							includeIdentity: !1,
							includeModerated: !1,
							listingType: e,
							rawData: d.body.data
						});
						e === x.b.Saved || e === x.b.ReceivedGildings || e === x.b.GivenGildings ? await t(D({
							listingKey: r,
							profileName: i,
							...s
						})) : await t(W({
							listingKey: r,
							profileName: i,
							...s
						}))
					} else t(G({
						listingKey: r,
						error: d.error
					}))
				}
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
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				l = s.n(d);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: n
				} = e, {
					source: d,
					callToAction: c,
					caption: m
				} = t;
				if (!d || !d.url) return null;
				let p = d.displayText;
				return d.displayText.length >= 40 && (p = d.displayText.slice(0, 40 - "...".length) + "..."), i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: l.a.leftSideContent
				}, m && !n && i.a.createElement("span", {
					className: l.a.caption,
					title: m
				}, m), i.a.createElement(a.a, {
					href: d.url.replace(o.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: d,
					className: l.a.displayUrl
				}, p)), c && i.a.createElement(r.a, {
					className: l.a.callToAction,
					href: d.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: d
				}, c))
			}
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				i = s("./src/lib/ads/index.ts"),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/getShortenedLink.ts"),
				l = s("./src/lib/hooks/usePrevious.ts"),
				c = s("./src/reddit/hooks/useTracking.ts"),
				m = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				p = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				u = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				h = s("./src/reddit/components/CreatorStats/loader.tsx"),
				b = s("./src/config.ts"),
				x = s("./node_modules/react-redux/es/index.js"),
				g = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/Econ/Audio/index.m.less"),
				v = s.n(f),
				y = s("./src/reddit/components/Econ/Audio/MuteIcon.tsx"),
				C = s("./src/reddit/components/Econ/Audio/SpeakerRings.tsx");
			const {
				fbt: O
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var P = e => {
					let {
						post: t
					} = e;
					const {
						audioRoom: s
					} = t, i = () => Math.floor(10 * Math.random() + 1), a = Object(x.e)(g.db), [d, l] = Object(o.useState)(!1), [c, m] = Object(o.useState)(i());
					return Object(o.useEffect)(() => {
						const e = setInterval(() => {
							l(!0), setTimeout(() => l(!1), 3500), m(i())
						}, 6e3);
						return () => clearInterval(e)
					}, []), (null == s ? void 0 : s.isLive) ? n.a.createElement("a", {
						href: `https://www.reddit.com/talk/${s.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: v.a.liveClassicContainer,
						"data-testid": "audioroom-classic-live"
					}, n.a.createElement("div", {
						className: v.a.classicSpeaker
					}, d && n.a.createElement(C.a, {
						className: Object(r.a)(v.a.speakerRings, {
							[v.a.nightMode]: a
						})
					}), n.a.createElement("img", {
						key: `audioPostAvatar--${c}`,
						className: v.a.snoovatar,
						src: `${b.a.assetPath}/img/talk/avatars/${c}.png`,
						alt: O._("Reddit Talk", null, {
							hk: "XNl4V"
						})
					}), !d && n.a.createElement("div", {
						className: v.a.muteContainer
					}, n.a.createElement(y.a, {
						className: v.a.muteIcon
					})))) : n.a.createElement("div", {
						className: v.a.endedClassicContainer
					}, n.a.createElement(y.a, {
						className: v.a.muteIcon
					}))
				},
				E = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				w = s("./src/reddit/components/ExpandoButton/index.tsx"),
				k = s("./src/reddit/components/Flatlist/index.tsx"),
				j = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				I = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				_ = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				S = s("./src/reddit/components/ModModeReports/index.tsx"),
				L = s("./src/reddit/components/ModModeReports/helpers.ts"),
				N = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				T = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				M = s("./src/reddit/components/PostContainer/index.tsx"),
				R = s("./src/reddit/components/PostMeta/index.tsx"),
				A = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				F = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				B = s("./src/reddit/components/PostTitle/index.tsx"),
				D = s("./src/reddit/components/PostTopMeta/index.tsx"),
				W = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				G = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				U = s("./src/reddit/models/Audio/index.ts"),
				K = s("./src/reddit/models/Media/index.ts"),
				V = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				H = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				q = s("./src/reddit/constants/postLayout.ts"),
				z = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				J = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Q = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				Z = s("./src/reddit/helpers/localStorage/index.ts"),
				$ = s("./src/reddit/helpers/search/renderMedia.tsx"),
				X = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				Y = s("./src/reddit/helpers/trackers/creatorStats.ts"),
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
			const ie = Object(a.a)(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: a,
					handleVote: b,
					isExpanded: x,
					inSubredditOrProfile: g,
					eventFactory: f,
					first: v,
					flairStyleTemplate: y,
					formatTitle: C,
					hostPostData: O,
					isCheckboxSelected: H,
					isCurrentUserProfilePost: ee,
					isFrontpage: se,
					isGalleryTileLayoutDefault: ie,
					isLoggedIn: re,
					isOverlay: ae,
					isProfileCreatorStatsEnabled: de,
					imageGalleryCurrentItem: le,
					moderatorPermissions: ce,
					modModeEnabled: me,
					onClickPost: pe,
					onIgnoreReports: ue,
					onOpenReportsDropdown: he,
					onSizeChanged: be,
					poll: xe,
					post: ge,
					postId: fe,
					redditStyle: ve,
					scrollerItemRef: ye,
					showBulkActionCheckbox: Ce,
					showEditFlair: Oe,
					showMedia: Pe,
					subredditOrProfile: Ee,
					toggleCheckbox: we,
					userIsOp: ke,
					shouldShowGalleryTileOption: je,
					showPromotedCTA: Ie
				} = e, _e = Object(c.a)(), Se = ke && de, Le = Object(l.a)(x);
				Object(o.useEffect)(() => {
					be && Le !== x && be(ge.id)
				}, [x, be, ge.id, Le]);
				const Ne = ve ? void 0 : y,
					Te = s || void 0,
					Me = Object(Q.a)(ce),
					Re = Object(z.a)(ce),
					Ae = Object(J.a)(ce),
					Fe = me && Q.a,
					Be = Object(_.a)(ge),
					De = Object(L.c)(ge),
					We = !!ge.media && ge.media.type === K.o.RTJSON,
					Ge = ke && We,
					Ue = g && !Pe,
					Ke = !!ge.media && Object(K.H)(ge.media),
					Ve = !!ge.recommendationContext,
					He = {
						flairStyleTemplate: Ne,
						post: ge,
						inSubredditOrProfile: g,
						isCurrentUserProfilePost: ee,
						isOverlay: ae,
						shouldShowSubscribeButton: !(se && re) || Ve && re,
						subredditOrProfile: Ee
					},
					qe = Object(i.t)(ge, le),
					{
						source: ze
					} = qe,
					[Je, Qe] = Object(o.useState)(!1),
					Ze = Object(o.useCallback)(() => {
						Qe(!Je), Object(Z.Mb)(), _e(Object(Y.d)(fe))
					}, [Je, fe, _e]);
				let $e = n.a.createElement(V.a, {
					className: oe.a.classicThumbnail,
					crosspost: Te && ge,
					isMeta: ge.isMeta,
					post: Te || ge,
					redditStyle: ve,
					templatePlaceholderImage: Ne && Ne.postPlaceholderImage,
					removeLink: Ke
				});
				Object(U.b)(ge) && ($e = n.a.createElement(P, {
					post: ge
				}));
				const Xe = n.a.createElement(M.a, {
					className: Object(r.a)(te.a.classicPostStyles, oe.a.postContainer, Object(X.a)(e), {
						[oe.a.mFirst]: v,
						[oe.a.shouldShowOverflow]: Se
					}, t),
					isOverlay: ae,
					style: {
						...Object(X.d)(e),
						...Object(X.b)(Ne)
					},
					post: ge,
					onClick: pe,
					eventFactory: f
				}, n.a.createElement(F.a, {
					model: ge,
					handleVote: b,
					showBulkActionCheckbox: Ce,
					isCheckboxSelected: H,
					toggleCheckbox: we,
					flairStyleTemplate: Ne,
					redditStyle: ve,
					postId: fe
				}), n.a.createElement(T.a, {
					className: Se ? oe.a.shouldUseRoundedBorder : void 0,
					"data-click-id": "background",
					flairStyleTemplate: Ne
				}, n.a.createElement(E.a, {
					className: oe.a.eventMeta,
					post: ge
				}), n.a.createElement("div", {
					className: oe.a.mainBody
				}, n.a.createElement("div", {
					className: Ue ? oe.a.expandoContainer : oe.a.thumbnailContainer
				}, !Ue && $e, n.a.createElement(w.a, {
					crosspost: Te,
					className: oe.a.rightExpando,
					isExpanded: !!x,
					post: ge,
					useMediaIcons: !1
				})), n.a.createElement("div", {
					className: Object(r.a)(oe.a.content, {
						[oe.a.showBulkActionCheckbox]: Ce
					}),
					"data-click-id": "body"
				}, !!ge.recommendationContext && n.a.createElement(N.a, {
					content: ge.recommendationContext.content,
					layout: q.g.Classic,
					post: ge
				}), n.a.createElement(B.c, {
					className: xe ? oe.a.titleWithPoll : void 0,
					format: C,
					poll: xe,
					post: ge,
					redditStyle: ve,
					size: B.b.Medium,
					titleColor: Ne && Ne.postTitleColor,
					isOverlay: ae
				}, ge.source && !Te && !ge.isSurveyAd && n.a.createElement(G.a, {
					href: ge.source.url,
					isSponsored: ge.isSponsored,
					postId: ge.id,
					source: ge.source
				}, Object(d.a)(ge))), n.a.createElement(R.a, ne({
					key: "PostMeta"
				}, He)), me && Me && Be && n.a.createElement(I.a, {
					thing: ge
				}), me && Me && De && n.a.createElement(S.a, {
					onIgnoreReports: ue,
					reportable: ge
				}), Ie && ze && ze.url && !ge.isSurveyAd && n.a.createElement(m.a, {
					className: oe.a.adLinkWrapper
				}, n.a.createElement(p.a, {
					post: ge,
					adLinkContent: qe
				})), n.a.createElement("div", {
					className: oe.a.flatlistContainer
				}, n.a.createElement(w.a, {
					className: oe.a.leftExpando,
					crosspost: Te,
					isExpanded: !!x,
					post: ge,
					useMediaIcons: !1
				}), n.a.createElement(u.a, {
					className: oe.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: Ne,
					model: ge,
					onVoteClick: b
				}), n.a.createElement(k.a, {
					className: oe.a.flatlistSeparator
				}), !ge.isSurveyAd && n.a.createElement(k.c, {
					className: oe.a.flatlist,
					currentUser: a,
					hasModFlairPerms: Re,
					hasModPostPerms: Me,
					hasModFullPerms: Ae,
					hostPostData: O,
					isOverlay: !!ae,
					modModeEnabled: me,
					onClickInsightsButton: Ze,
					onIgnoreReports: ue,
					onOpenReportsDropdown: he,
					post: ge,
					shouldShowInsightsButton: Se,
					showEditPost: Ge,
					showEditFlair: Oe,
					tooltipType: ae ? D.c.Lightbox : void 0,
					useFlatlistBreakpoints: Object(A.b)({
						editPost: !Fe,
						hide: !Fe,
						report: !Fe
					})
				})), n.a.createElement(j.d, null))), Object($.a)(ge, oe.a, ye, x, je, ie), Ee && Je && n.a.createElement(h.a, {
					className: oe.a.creatorStatsContainer,
					post: ge,
					subreddit: Ee,
					isOwnProfileStats: !0
				})));
				return n.a.createElement(W.b, null, Xe)
			});
			t.default = Object(H.a)(ie)
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
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/higherOrderComponents/withClickTracking/index.tsx");
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
						className: Object(a.a)(s, `Comment ${o.id}`),
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
			t.a = c(Object(d.a)(m))
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
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/objectSelector/index.ts"),
				c = s("./node_modules/lodash/throttle.js"),
				m = s.n(c),
				p = s("./src/lib/fastdom/index.ts"),
				u = s("./src/reddit/components/CommentBodyExpander/index.m.less"),
				h = s.n(u);
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = .75, g = 10 * d.K;
			class f extends n.a.Component {
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
			var v = f,
				y = s("./node_modules/fbt/lib/FbtPublic.js"),
				C = s("./node_modules/lodash/noop.js"),
				O = s.n(C),
				P = s("./src/lib/makeCommentsPageKey/index.ts"),
				E = s("./src/lib/makeDraftKey/index.ts"),
				w = s("./src/reddit/actions/comment/index.ts"),
				k = s("./src/reddit/actions/comment/authoring.ts"),
				j = s("./src/reddit/actions/comment/moderation.ts"),
				I = s("./src/reddit/actions/gold/modals.ts"),
				_ = s("./src/reddit/actions/modal.ts"),
				S = s("./src/reddit/actions/reportFlow/index.ts"),
				L = s("./src/reddit/actions/tooltip.ts"),
				N = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				T = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				M = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				R = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				A = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				F = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				B = s("./src/reddit/components/ModModeReports/helpers.ts"),
				D = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				W = s("./src/reddit/contexts/InsideOverlay.tsx"),
				G = s("./src/reddit/contexts/PageLayer/index.tsx"),
				U = s("./src/reddit/helpers/correlationIdTracker.ts"),
				K = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				V = s("./src/reddit/helpers/overlay/index.ts"),
				H = s("./src/reddit/helpers/trackers/lightbox.ts"),
				q = s("./src/reddit/models/PostDraft/index.ts"),
				z = s("./src/reddit/models/Comment/index.ts"),
				J = s("./src/reddit/selectors/activeModalId.ts"),
				Q = s("./src/reddit/selectors/comments.ts"),
				Z = s("./src/reddit/selectors/moderatorPermissions.ts"),
				$ = s("./src/reddit/selectors/posts.ts"),
				X = s("./src/reddit/selectors/tooltip.ts"),
				Y = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				ee = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				te = s("./src/reddit/selectors/user.ts"),
				se = s("./src/reddit/components/OverflowMenu/index.tsx"),
				oe = s("./src/reddit/components/ReportFlow/index.tsx"),
				ne = s("./src/reddit/components/ReportFlow/new.tsx"),
				ie = s("./src/reddit/components/ShareMenu/index.tsx"),
				re = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ae = s("./src/reddit/controls/Dropdown/Row.tsx"),
				de = s("./src/reddit/helpers/trackers/modTools.ts"),
				le = s("./src/reddit/layout/row/Inline/index.tsx"),
				ce = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				me = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				pe = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ue = s("./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less"),
				he = s.n(ue),
				be = s("./src/lib/constants/icons.ts"),
				xe = s("./src/lib/lessComponent.tsx"),
				ge = s("./src/reddit/icons/fonts/index.tsx"),
				fe = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx");
			const ve = xe.a.wrapped(se.b, "OverflowMenu", he.a),
				ye = xe.a.wrapped(T.a, "ModToolsFlatlist", he.a),
				Ce = xe.a.wrapped(F.a, "ModActionsMenu", he.a),
				Oe = xe.a.wrapped(ae.b, "DropdownRow", he.a),
				Pe = xe.a.wrapped(le.a, "Flatlist", he.a),
				Ee = xe.a.button("Button", he.a),
				we = Object(G.u)(),
				ke = e => `Comment-${e}--Modal--DeleteComment`,
				je = e => `Distinguish--Dropdown--${e}`,
				Ie = (e, t) => `${e}--${t}-overflow-menu`,
				_e = e => `View--Reports--${e}`,
				Se = Object(r.c)({
					activeTooltipId: X.a,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(J.a)(e) === ke(s.id)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Q.D)(e, {
							commentId: s.postId
						})
					},
					isLoggedIn: te.Q,
					moderatorPermissions: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Z.o)(e, {
							subredditId: s.subredditId
						})
					},
					currentUser: te.k,
					modModeEnabled: G.U,
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object($.B)(e, {
							postId: s.postId
						})
					},
					commentPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Q.m)(e, {
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
					subreddit: G.r,
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object($.U)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: ee.a,
					isTrueblockPCBlockeeEnabled: Y.d
				});
			class Le extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(de.b)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleEdit = () => this.props.handleEdit(this.props.commentPermalink), this.handleIgnoreReports = () => {
						this.props.onIgnoreReports(), this.sendCommentReportEvent(this.props.comment.ignoreReports ? "restore_reports" : "ignore_reports")
					}, this.handleGild = async () => {
						const e = Object(U.d)(U.a.GildingFlow, !0);
						this.props.onGildClick(e);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(t(this.props.comment.id))
					}, this.handleModActionsMenu = () => this.props.sendEvent(Object(de.b)("comment_mod_action_menu", this.props.comment.id)), this.handleOverflowMenuClick = () => this.props.sendEvent(Object(de.b)("comment_overflow_menu", this.props.comment.id)), this.handleDelete = () => this.props.handleDelete(), this.handleReply = () => this.props.handleReply(this.props.commentPermalink), this.handleRestrictedButtonClick = () => {
						this.props.onToggleReportsDropdown(), this.sendCommentModEventWithName("comment_report_menu")
					}, this.handleSave = () => {
						this.props.comment.isSaved ? this.props.sendEvent(Object(de.b)("unsave", this.props.comment.id)) : this.props.sendEvent(Object(de.b)("save", this.props.comment.id)), this.props.onToggleSave()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(de.c)(e, this.props.comment.id)), this.sendCommentEventWithName = e => this.props.sendEvent(Object(H.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentEventWithNameShare = () => this.sendCommentEventWithName("share"), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(de.b)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(de.f)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? n.a.createElement(ne.a, {
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
					} = this.props, r = Object(K.a)(s), a = !!t && t.displayText === e.author;
					if (i && r) return o ? n.a.createElement(ye, {
						comment: e,
						isCommentAuthor: a
					}) : n.a.createElement(Ce, {
						dropdownId: `${e.id}-profile-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: this.handleModActionsMenu
					}, n.a.createElement(me.a, null), n.a.createElement(N.a, {
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
					if (s && Object(B.c)(e) && !t) return n.a.createElement(M.a, {
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
					} = this.props, a = Object(K.a)(s), d = !!t && t.displayText === e.author, l = !!t && t.isEmployee;
					if (r && d && !e.bannedBy && (l || a && !o)) return n.a.createElement(M.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.activeTooltipId === je(e.id)
					}, n.a.createElement(fe.a, null), n.a.createElement(A.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.activeTooltipId === je(e.id),
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: l,
						isUserMod: a,
						onDistinguishComment: i,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: je(e.id)
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
						isLoggedIn: a,
						isPendingDeletion: d,
						moderatorPermissions: l,
						postIsLocked: c,
						subreddit: m,
						toggleDeleteCommentModal: p,
						isTrueblockPCBlockeeEnabled: u
					} = this.props, h = Object(K.a)(l), b = !!i && i.displayText === e.author, x = (!c && !e.isLocked || h && a) && !(Object(z.g)(e) && u), g = i && e.isGildable && !(Object(z.g)(e) && u);
					return n.a.createElement("div", {
						className: s
					}, n.a.createElement(Pe, null, x && n.a.createElement(Ee, {
						onClick: this.handleReply,
						disabled: d
					}, y.fbt._("Reply", null, {
						hk: "1xBqIs"
					})), g && n.a.createElement(Ee, {
						onClick: this.handleGild
					}, y.fbt._("Give Award", null, {
						hk: "pQJYk"
					})), n.a.createElement(ie.a, {
						dropdownId: `${o}--${e.id}-comment-share-menu`,
						permalink: t,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == m ? void 0 : m.type
					}, n.a.createElement(Ee, {
						onClick: this.sendCommentEventWithNameShare
					}, y.fbt._("share", null, {
						hk: "3YIXpa"
					}))), this.renderReportsDropdown(), n.a.createElement(ve, {
						dropdownId: Ie(o, e.id),
						onClick: this.handleOverflowMenuClick
					}, !b && !d && n.a.createElement(Oe, {
						displayText: y.fbt._("report", null, {
							hk: "ad7CE"
						}),
						onClick: this.props.onReportClick
					}, n.a.createElement(ge.a, {
						name: be.a.report
					})), n.a.createElement(Oe, {
						displayText: e.isSaved ? y.fbt._("Unsave", null, {
							hk: "4kQcAP"
						}) : y.fbt._("Save", null, {
							hk: "4yMsMq"
						}),
						isSelected: e.isSaved,
						onClick: this.handleSave
					}, e.isSaved ? n.a.createElement(ge.a, {
						name: be.a.saved
					}) : n.a.createElement(ge.a, {
						name: be.a.save
					})), b && n.a.createElement(Oe, {
						displayText: y.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: this.handleEdit
					}, n.a.createElement(ge.a, {
						name: be.a.edit
					})), b && n.a.createElement(Oe, {
						displayText: y.fbt._("delete", null, {
							hk: "e8kvB"
						}),
						onClick: this.handleDelete
					}, n.a.createElement(ge.a, {
						name: be.a.delete
					}))), this.props.isConfirmModalOpen && n.a.createElement(R.a, {
						actionText: y.fbt._("Delete", null, {
							hk: "3hQAl"
						}),
						cancelActionText: y.fbt._("Keep", null, {
							hk: "3vWZkQ"
						}),
						headerText: y.fbt._("Delete comment", null, {
							hk: "2ErmbC"
						}),
						modalText: y.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "21h9zY"
						}),
						onConfirm: r,
						toggleModal: p,
						trackClick: O.a,
						withOverlay: !0
					}), this.renderModTools(), this.renderDistinguishDropdown()), this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Ne = we(Object(i.b)(Se, (e, t) => {
					let {
						comment: s,
						commentsPageKey: o
					} = t;
					return {
						deleteComment: () => o && e(Object(k.i)(s.id, s.postId)),
						onDistinguishComment: (t, o) => e(Object(j.b)(s.id, t, o)),
						onIgnoreReports: () => e(Object(j.g)(s.id)),
						onGildClick: t => e(Object(I.d)({
							correlationId: t,
							thingId: s.id
						})),
						onReportClick: () => e(Object(S.c)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(L.h)({
							tooltipId: je(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(L.h)({
							tooltipId: _e(s.id)
						})),
						onToggleSave: () => e(Object(w.n)(s.id)),
						handleDelete: () => {
							e(Object(_.i)(ke(s.id))), e(Object(L.h)({
								tooltipId: Ie(o, s.id)
							}))
						},
						handleEdit: t => {
							const o = Object(P.a)(s.postId, s.id, {}),
								n = {
									commentId: s.id,
									draftKey: Object(E.a)(q.c.edit, s.id),
									text: s.bodyMD || "",
									commentMode: s.media && s.media.rteMode,
									commentsPageKey: o
								};
							e(Object(V.a)(t)), e(Object(k.g)(n))
						},
						handleReply: t => {
							const o = Object(P.a)(s.postId, s.id, {}),
								n = {
									parentCommentId: s.id,
									commentsPageKey: o
								};
							e(Object(V.a)(t)), e(Object(k.h)(n))
						},
						toggleDeleteCommentModal: () => e(Object(_.i)(ke(s.id)))
					}
				})(Object(re.c)(Object(W.b)(Le)))),
				Te = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Me = s("./src/reddit/components/RichTextJson/index.tsx"),
				Re = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Ae = s("./src/reddit/selectors/commentSelector.ts"),
				Fe = s("./src/reddit/components/Comments/ProfileComment/index.m.less"),
				Be = s.n(Fe);
			const De = xe.a.wrapped(Te.a, "TopMeta", Be.a),
				We = xe.a.div("ProfileCommentWrapper", Be.a),
				Ge = xe.a.div("CommentBody", Be.a),
				Ue = Object(i.b)(() => Object(r.c)({
					comment: (e, t) => Object(Ae.b)(e, t),
					flair: Q.e
				})),
				Ke = Object(l.b)(e => ({
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
				} = e, c = s => n.a.createElement(Me.b, {
					className: s,
					content: Object(Re.a)(t),
					mediaMetadata: t.media && t.media.mediaMetadata,
					rtJsonElementProps: Ke(e)
				});
				return n.a.createElement(We, {
					className: Object(a.a)({
						[Be.a.isRemoved]: !!t.bannedBy
					})
				}, n.a.createElement(De, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: t,
					commentsPageKey: s,
					flair: o,
					renderedInOverlay: !1
				}), n.a.createElement("div", null, !t.isDeleted && n.a.createElement(Ge, null, i ? c() : n.a.createElement(v, {
					height: d.Ub,
					isExpanded: i
				}, c)), !t.isDeleted && r && n.a.createElement(Ne, {
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
				return E
			})), s.d(t, "a", (function() {
				return w
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				c = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				p = s("./src/reddit/components/PostMeta/index.tsx"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				h = s("./src/reddit/components/SourceLink/index.tsx"),
				b = s("./src/reddit/components/Thumbnail/index.tsx"),
				x = s("./src/lib/constants/index.ts"),
				g = s("./src/reddit/contexts/Post/index.tsx"),
				f = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/components/CrosspostBox/index.m.less"),
				C = s.n(y),
				O = s("./src/lib/lessComponent.tsx");

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const E = 8,
				w = 1,
				k = O.a.div("Container", C.a),
				j = O.a.div("PostMetaWrapper", C.a),
				I = O.a.wrapped(u.c, "PostTitle", C.a),
				_ = O.a.div("FlatList", C.a),
				S = O.a.div("FlatItem", C.a),
				L = O.a.span("FlatListDotSpacer", C.a),
				N = O.a.wrapped(k, "LinkContainer", C.a),
				T = O.a.div("Content", C.a),
				M = O.a.div("ThumbnailContainer", C.a),
				R = Object(d.c)({
					isCurrentUserProfilePost: f.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== x.Nb.TOPIC),
					shouldOpenPostInNewTab: v.jb
				}),
				A = Object(r.b)(R);
			t.c = Object(g.b)(A(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: o,
					mediaProps: n,
					post: r,
					subredditOrProfile: a
				} = e;
				if (!r) return null;
				const d = {
						post: r,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: o,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: a,
						tooltipType: `CrosspostBox--${n.isListing}`
					},
					l = t;
				return r && !r.media ? i.a.createElement(N, {
					className: l
				}, i.a.createElement(T, null, i.a.createElement(j, null, i.a.createElement(p.a, d)), F(r), r.source && i.a.createElement(h.a, {
					post: r
				}), D(e)), G(e)) : i.a.createElement(k, {
					className: l
				}, i.a.createElement(j, null, i.a.createElement(p.a, d)), F(r), B(e), D(e))
			}));
			const F = e => i.a.createElement(I, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: u.b.Small
				}),
				B = e => {
					const {
						mediaProps: t,
						post: s
					} = e, o = {
						...t,
						post: s,
						crosspost: t.post
					};
					return i.a.createElement("div", null, i.a.createElement(m.a, P({}, o, {
						className: C.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				D = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return i.a.createElement(_, null, i.a.createElement(S, null, o.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [o.fbt._plural(s, "point count", Object(c.b)(s))], {
						hk: "PNZhd"
					})), i.a.createElement(L, null), i.a.createElement(S, null, W(e)))
				},
				W = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: n
					} = t;
					return i.a.createElement(a.a, {
						"data-click-id": "comments",
						to: Object(l.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, o.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [o.fbt._plural(n, "comment count", Object(c.b)(n))], {
						hk: "xPYWL"
					}))
				},
				G = e => i.a.createElement(M, null, i.a.createElement(b.a, {
					post: e.post
				}))
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
				return y
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/PostList/Placeholder.tsx"),
				l = s("./src/reddit/constants/postLayout.ts"),
				c = s("./src/reddit/components/EmptyProfile/EmptyListing.m.less"),
				m = s.n(c);
			var p = e => {
				let {
					children: t,
					className: s
				} = e;
				return i.a.createElement("div", {
					className: Object(a.a)(m.a.Wrapper, s)
				}, i.a.createElement(d.a, {
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
				f = s.n(g);
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var y = () => i.a.createElement("div", {
				className: f.a.container
			}, i.a.createElement(x.a, {
				className: f.a.hideIcon
			}), i.a.createElement("h3", {
				className: f.a.title
			}, v._("You do not have permission to access this resource", null, {
				hk: "10cPyp"
			})), i.a.createElement("p", {
				className: f.a.subtitle
			}, v._("You can only look at your own saved posts and comments", null, {
				hk: "3pWGtF"
			})))
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
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				c = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				p = s("./src/reddit/helpers/path/index.ts"),
				u = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				h = s("./src/reddit/icons/fonts/index.tsx"),
				b = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/models/Post/index.ts"),
				g = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				f = s("./src/telemetry/models/Outbound.ts"),
				v = s("./src/reddit/components/ExpandoButton/index.m.less"),
				y = s.n(v);
			const C = Object(r.b)(null, (e, t) => ({
					toggle: () => e(Object(c.x)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(c.bb)(Object(p.b)(t.permalink), t.id))
				})),
				O = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const o = Object(d.a)(y.a.icon, y.a.hideOnHover);
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
			t.a = C(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: n,
					isCommentsPage: c,
					isExpanded: p,
					post: b,
					toggle: v,
					useMediaIcons: C
				} = e, P = s || b, E = Object(r.e)(g.b), w = Object(r.e)(g.c), k = t => {
					(E || w) && (t.preventDefault(), e.showModalOnPostLinkClick(P))
				}, j = P.media, I = Object(x.p)(b), _ = n && !!s;
				return j && !I && !(("rtjson" === j.type || "text" === j.type || "liveaudio" === j.type) && !Object(u.a)(P)) || !!b.pollData ? i.a.createElement("button", {
					"aria-expanded": !!p,
					"aria-haspopup": !0,
					"aria-label": o.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(d.a)(t, y.a.outer),
					"data-click-id": p ? "expando_close" : "expando_open",
					onClick: v
				}, p ? i.a.createElement(h.a, {
					name: "collapse",
					className: y.a.icon
				}) : C ? i.a.createElement(i.a.Fragment, null, O(P.media && P.media.type, _, b), i.a.createElement(h.a, {
					name: "expand",
					className: Object(d.a)(y.a.icon, y.a.showOnHover)
				})) : i.a.createElement(h.a, {
					name: "expand",
					className: y.a.icon
				})) : P.source && P.source.url ? i.a.createElement(m.b, {
					"aria-label": o.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(d.a)(t, y.a.outer),
					"data-click-id": "expando_open",
					href: P.source.url,
					isSponsored: b.isSponsored,
					postId: b.id,
					source: b.source,
					sourceElement: c ? f.SourceElement.PostImage : f.SourceElement.ListingPostImage,
					target: "_blank"
				}, i.a.createElement(h.a, {
					name: "external_link",
					className: Object(d.a)(y.a.icon, y.a.outboundLinkIcon)
				})) : i.a.createElement(a.a, {
					"aria-label": o.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(d.a)(t, y.a.outer),
					"data-click-id": "expando_open",
					to: Object(l.a)(P.permalink),
					rel: "nofollow",
					onClick: k
				}, i.a.createElement(h.a, {
					name: "text_post",
					className: y.a.icon
				}))
			})
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2cB6ysPhgaYtknebHcCXGH",
				container: "_2cB6ysPhgaYtknebHcCXGH",
				Component: "qQD1kUtHq2K4gyBqJrEnF",
				component: "qQD1kUtHq2K4gyBqJrEnF",
				"m-consider-sidebar": "gd0BrpRBoY73xB5YwvDWU",
				mConsiderSidebar: "gd0BrpRBoY73xB5YwvDWU"
			}
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/constants/componentSizes.ts"),
				l = s("./src/reddit/constants/postLayout.ts"),
				c = s("./src/reddit/constants/screenWidths.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				u = s.n(p),
				h = s("./src/lib/lessComponent.tsx");
			const b = Object(m.u)(),
				x = Object(r.c)({
					layout: m.S
				}),
				g = Object(i.b)(x);
			class f extends n.a.Component {
				constructor(e) {
					super(e), this.onClickIcon = e => {
						if (void 0 === this.state.left) {
							const e = this.ref.offsetLeft;
							this.setState({
								left: e
							})
						}
					}, this.onMouseEnter = () => {
						this.state.mouseInside || this.setState({
							mouseInside: !0
						})
					}, this.onMouseLeave = () => {
						this.state.mouseInside && this.setState({
							left: void 0,
							mouseInside: !1
						})
					}, this.ref = null, this.state = {
						left: void 0,
						mouseInside: !1
					}
				}
				componentWillReceiveProps(e) {
					0 !== e.offsetLeft - this.props.offsetLeft && (this.noTransition = !0)
				}
				componentDidUpdate() {
					this.noTransition && (this.noTransition = !1)
				}
				getDynamicStyleTags() {
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n          .${u.a.Component} {\n            --layoutNavigation-considerateNav-offsetLeft: ${this.props.offsetLeft}px;\n          }\n        `
						}
					}), this.getLargeLayoutStyle())
				}
				getLargeLayoutStyle() {
					const e = this.props.offsetLeft + 2 * d.l + d.p + d.q,
						t = c.a - e,
						s = d.g - t,
						o = c.a + s + (this.props.bladeOpen ? d.a : 0);
					return this.props.layout !== l.g.Large ? null : n.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n            @media (min-width: ${o}px) {\n              .${u.a.Component} {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ${d.g+d.p+d.q}px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${d.q}px) / 2);\n              }\n\n              .${u.a.Component}.${u.a["m-consider-sidebar"]} {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${d.g+d.p+d.q}px) / 2);\n              }\n            }\n          `
						}
					})
				}
				render() {
					const e = Object(a.a)(this.props.className, u.a.Component, {
						[u.a["m-consider-sidebar"]]: this.props.considerSidebar
					});
					return n.a.createElement("div", {
						className: u.a.Container
					}, n.a.createElement("div", {
						className: e,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseEnter,
						ref: e => this.ref = e,
						style: {
							left: this.state.left || void 0,
							transition: this.noTransition ? "initial" : void 0
						}
					}, this.getDynamicStyleTags(), this.props.render(this.onClickIcon)))
				}
			}
			t.a = b(g(h.a.wrapped(f, "Component", u.a)))
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
				a = s("./src/reddit/components/RichTextJson/index.tsx"),
				d = s("./src/reddit/constants/postLayout.ts"),
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
				return Object(l.a)().hideRecommendationContext ? null : n.a.createElement(a.b, {
					className: Object(i.a)(m.a.RecommendationContextStyles, {
						[m.a.classicLayout]: s === d.g.Classic,
						[m.a.compactLayout]: s === d.g.Compact,
						[m.a.largeLayout]: s === d.g.Large
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
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/constants/gold.ts"),
				l = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/components/CommentContainer/index.tsx"),
				u = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				h = s("./src/reddit/helpers/getClickInfo.ts"),
				b = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				x = s("./src/reddit/selectors/commentSelector.ts"),
				g = s("./src/reddit/selectors/communityAwards.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/OverviewChronoComment/index.m.less"),
				y = s.n(v);
			const C = Object(r.b)(() => Object(a.c)({
				comment: x.b,
				isAwarded: (e, t) => {
					const s = Object(x.b)(e, t);
					return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(g.a)(e, t);
						return s && s.coinPrice >= d.g
					})
				},
				isNightmodeOn: f.db
			}), e => ({
				openPost: t => e(Object(m.L)(t))
			}));
			var O = Object(c.a)(C(e => {
					const {
						comment: t,
						commentId: s,
						first: o,
						isAwarded: i,
						isNightmodeOn: r,
						last: a,
						openPost: d,
						showModTools: c
					} = e;
					if (!t) return null;
					return n.a.createElement(p.a, {
						comment: t,
						onClick: (e, t) => {
							d({
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
						className: Object(l.a)(y.a.commentOuterWrapper, {
							[y.a.isLast]: a,
							[y.a.isAwarded]: i,
							[y.a.isNightmodeOn]: r
						})
					}, n.a.createElement("div", {
						className: Object(l.a)(y.a.commentWrapper, {
							[y.a.isFirst]: o
						})
					}, n.a.createElement("div", {
						className: y.a.commentSeparator
					}), t.parentId && n.a.createElement("div", {
						className: y.a.commentSeparator
					}), n.a.createElement("div", {
						className: y.a.commentContentWrapper
					}, n.a.createElement(u.a, {
						commentId: s,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: !0,
						showModTools: c,
						isExpanded: !0
					})))))
				})),
				P = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				E = s("./src/reddit/contexts/PageLayer/index.tsx"),
				w = s("./src/reddit/helpers/isComment.ts"),
				k = s("./src/reddit/components/OverviewChronoList/ListItem.m.less"),
				j = s.n(k),
				I = s("./src/lib/lessComponent.tsx");

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
				L = I.a.wrapped(P.a, "OverviewCommentPost", j.a),
				N = I.a.wrapped(i.default, "ClassicPost", j.a);
			t.a = S(e => {
				const {
					itemId: t,
					isFirstInCommentList: s,
					isLastInCommentList: o,
					allowModToolsUnderComments: i,
					height: r,
					width: a,
					...d
				} = e;
				return Object(w.a)(t) ? s ? n.a.createElement(n.a.Fragment, null, n.a.createElement(L, _({}, d, {
					availableWidth: a,
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
				}) : n.a.createElement(N, _({}, d, {
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
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/components/PostContainer/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				u = s("./src/reddit/components/PostTopMeta/index.tsx"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/contexts/Post/index.tsx"),
				x = s("./src/reddit/controls/InternalLink/index.tsx"),
				g = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				f = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				v = s.n(f),
				y = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				C = s("./src/reddit/selectors/commentSelector.ts"),
				O = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				P = s("./src/reddit/components/OverviewCommentPost/index.m.less"),
				E = s.n(P);
			const {
				fbt: w
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = l.a.wrapped(x.default, "InternalLink", E.a), j = l.a.div("Wrapper", E.a), I = l.a.div("Row", E.a), _ = l.a.wrapped(y.a, "CommentIcon", E.a), S = l.a.div("TitleContainer", E.a), L = l.a.div("PostTitleContainer", E.a), N = l.a.wrapped(p.c, "PostTitle", E.a), T = l.a.wrapped(u.d, "PostTopMeta", E.a), M = l.a.wrapped(u.a, "MetaSeparator", E.a), R = Object(i.b)(() => Object(r.c)({
				comment: C.b,
				isBlockingInterstitialEnabled: O.b,
				isBlockingInterstitialV2Enabled: O.b
			}), e => ({
				showModalOnAuthorLinkClick: t => e(Object(c.db)(t))
			})), A = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = e;
				if (s) return n.a.createElement(o.Fragment, null, n.a.createElement(M, null), n.a.createElement(T, {
					metaSeparatorClassName: E.a.postTopMetaMetaSeparator,
					post: t,
					showSub: !0,
					showTimestamp: !1,
					subredditOrProfile: s
				}))
			}, F = e => {
				const {
					comment: t,
					profileName: s,
					isBlockingInterstitialEnabled: o,
					isBlockingInterstitialV2Enabled: i,
					showModalOnAuthorLinkClick: r
				} = e;
				if (!t) return null;
				const a = s || t.author,
					d = `/user/${a}/`;
				return n.a.createElement(k, {
					"data-click-id": "user",
					to: d,
					onClick: e => {
						(o || i) && (e.preventDefault(), r(d))
					}
				}, a)
			};
			t.a = Object(d.a)(Object(b.b)(R(Object(h.c)(e => {
				const {
					className: t,
					eventFactory: s,
					onClickPost: o,
					post: i
				} = e;
				return n.a.createElement(m.a, {
					className: Object(a.a)(v.a.compactPostStyles, E.a.overviewCommentPost, {
						[E.a.banned]: !!e.post.bannedBy,
						[E.a.reported]: !e.post.bannedBy && !!e.post.numReports && e.post.numReports > 0
					}, t),
					post: i,
					onClick: o,
					eventFactory: s
				}, n.a.createElement(j, {
					style: {
						background: Object(g.e)(e)
					}
				}, n.a.createElement(I, null, n.a.createElement(_, null), n.a.createElement(S, null, w._("{postAuthor} commented on {postTitle} {postMeta}", [w._param("postAuthor", F({
					...e
				})), w._param("postTitle", n.a.createElement(L, null, n.a.createElement(N, {
					outboundLinkClassName: E.a.postTitleOutboundLink,
					post: i,
					size: p.b.Small,
					titleClassName: E.a.postTitleTitle
				}))), w._param("postMeta", A(e))], {
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
				a = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				d = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				l = s.n(d);

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
					post: d,
					redditStyle: m,
					theme: p,
					...u
				} = e;
				return n.a.createElement("div", c({
					className: Object(i.a)(l.a.backgroundWrapper, s),
					style: Object(a.c)(o, e),
					onClick: r
				}, u), t)
			})
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				i = s("./src/reddit/components/CrosspostBox/index.tsx"),
				r = s("./src/reddit/components/Media/index.tsx");

			function a(e) {
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/reddit/selectors/moderatorPermissions.ts"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = s("./src/reddit/components/PostBadges/index.tsx"),
				m = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				u = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				h = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				v = s("./src/reddit/hooks/useClickSourceData.ts"),
				y = s("./src/reddit/models/Subreddit/index.ts"),
				C = s("./src/reddit/components/PostMeta/index.m.less"),
				O = s.n(C);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: o,
					isCurrentUserProfilePost: C,
					isOverlay: P,
					isTopicPage: E,
					post: w,
					shouldShowSubscribeButton: k,
					subredditOrProfile: j,
					tooltipType: I
				} = e, _ = !!E, S = Object(v.a)(), L = Object(i.e)(e => !!j && Object(r.j)(e, j.id));
				return n.a.createElement("div", {
					className: O.a.metaContainer
				}, !o && !w.isSponsored && j && n.a.createElement(d.a, {
					postId: w.id,
					subredditName: j.name
				}, n.a.createElement(u.a, {
					className: O.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: j.url,
						state: S
					}
				}, j.displayText)), j && j.isQuarantined && n.a.createElement(p.a, null), !o && !w.isSponsored && j && k && !C && n.a.createElement(h.a, {
					className: O.a.SubscribeButton,
					getEventFactory: e => Object(f.k)(w.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: j.name,
						type: Object(y.i)(j) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: w.id,
					size: x.d.XXS,
					small: !0
				}), !o && !w.isSponsored && n.a.createElement(g.b, null), !o && !w.isSponsored && n.a.createElement(l.h, {
					type: w.belongsTo.type,
					id: w.belongsTo.id
				}), n.a.createElement(m.d, {
					className: O.a.postTopMeta,
					flairStyleTemplate: t,
					post: w,
					tooltipType: I,
					isModWithUserNotesPermissions: L
				}), n.a.createElement(c.a, {
					displayText: j ? j.displayText : null,
					inSubredditOrProfile: !!o,
					post: w,
					tooltipType: I
				}), !_ && n.a.createElement(a.a, {
					hideCta: s,
					thing: w,
					tooltipType: P ? m.c.Lightbox : void 0
				}))
			}
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
				a = s("./src/reddit/components/VerticalVotes/index.tsx"),
				d = s("./src/reddit/controls/Checkbox/index.tsx"),
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
					isVoteCountAnimation: f,
					postId: v,
					shouldShowUpvoteRatioOnHover: y
				} = e, C = `upvote-button-${t.id}${g?"-overlay":""}`;
				return n.a.createElement(r.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(c.a)(t),
					isSponsored: !!Object(l.b)(t) && t.isSponsored,
					redditStyle: x
				}, o && n.a.createElement(d.a, {
					className: p.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: h
				}), n.a.createElement(a.a, {
					flairStyleTemplate: b,
					model: t,
					onVoteClick: s,
					redditStyle: x,
					upvoteTooltipId: C,
					isVoteCountAnimation: f,
					isCountAnimShadowTestEnabled: u,
					postId: v,
					scoreClassName: Object(i.a)(p.a.score, {
						[p.a.allowPointerEvents]: y
					}),
					shouldShowUpvoteRatioOnHover: y
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
				a = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/opener/index.ts"),
				l = s("./src/reddit/constants/adEvents.ts"),
				c = s("./src/reddit/components/PostList/LoadMore.tsx"),
				m = s("./src/reddit/components/PostList/Placeholder.tsx"),
				p = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				u = s("./src/reddit/components/Scroller/Simple.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				b = s("./src/reddit/helpers/getClickInfo.ts"),
				x = s("./src/reddit/helpers/isComment.ts"),
				g = s("./src/reddit/contexts/Post/index.tsx"),
				f = s("./src/lib/LRUCache/index.ts"),
				v = s("./src/telemetry/index.ts"),
				y = s("./src/telemetry/models/Timer.ts"),
				C = s("./src/reddit/components/PostList/index.m.less"),
				O = s.n(C);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const E = 500,
				w = new f.a(E),
				k = new f.a(E),
				j = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				I = (e, t, s, o, n, i) => {
					const r = `entered-${e}-${t}-${s?`last-${o}-${n}`:""}`;
					let a = w.get(r);
					return void 0 === a && (a = () => {
						s && i.onBottomViewed(o, n), i.trackOnPostEnteredViewport(e, t)
					}, w.set(r, a)), a
				},
				_ = (e, t) => {
					const s = `click-${e}`;
					let o = k.get(s);
					return void 0 === o && (o = (e, s) => {
						s.isSponsored && t.fireAdPixelsOfType(s, l.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(d.e)(s.source.outboundUrl, d.d.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(b.a)(e)
						})
					}, k.set(s, o)), o
				};
			class S extends r.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new f.a(E), this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}
				}
				UNSAFE_componentWillMount() {
					this.timerId && v.c.cancel(this.timerId), this.props.itemIds.length && (this.timerId = v.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = v.c.end(this.timerId);
						setTimeout(() => Object(v.b)(a.m.Redesign, {
							type: "mount",
							component: "overviewChronoList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && v.c.cancel(this.timerId), e.itemIds.length && (this.timerId = v.c.start()), (e.listingKey !== this.props.listingKey || e.itemIds.length !== this.props.itemIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (this.checkAndSendScreenview(), this.timerId && v.c.has(this.timerId)) {
						const e = v.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(v.b)(a.m.Redesign, {
							duration: e,
							type: "mount",
							component: "overviewChronoList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && v.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
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
					return v.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const o = v.c.end(e);
					setTimeout(() => s(t(o, y.TimerType.InApp)), 0)
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
						listingKey: a,
						listingName: d,
						postClickEventFactory: l
					} = this.props, c = `post-${i}-${e}-${t}-${s?"last-index":""}-${d}-${a}`;
					let m;
					if (void 0 === (m = this.scrollChildCache.get(c))) {
						const {
							inSubredditOrProfile: t,
							itemIdToPostId: p
						} = this.props, u = p[e], h = `overview-chrono-list-item-[layout: ${i}]-[itemId: ${e}]`, b = I(u, i, s, a, d, this.props), x = {
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
						}, f = this.props.itemComponent;
						m = {
							estHeight: this.props.estimateItemHeight(e, i, o),
							id: e,
							isFocusable: !1,
							trackOnEnteredViewport: b,
							render: e => r.a.createElement(g.a, {
								postId: x.postId
							}, r.a.createElement(f, P({}, x, e)))
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
						countOverride: j[s]
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
							a = n && o[n - 1],
							d = !r && o[n + 1],
							l = !!Object(x.a)(s) && (!a || !Object(x.a)(a) || e[a].postId !== e[s].postId),
							c = !!Object(x.a)(s) && (!d || !Object(x.a)(d) || e[d].postId !== e[s].postId);
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
		"./src/reddit/components/ProfileNavMenu/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2vH__bwuub4wzWRqcvhh3m",
				menuContainer: "LSvZ4rzt8zI_VpizIGPDF",
				dropdown: "_3ulncTe6l8jRF_TM6HZZFk",
				mainLink: "_1JNzvBgvzSnX27gUBKqqmJ",
				isActive: "Zvl1svdkcyUlRhf5RHGKc",
				dropdownLink: "_3FXf9zUWKXtpapv4rBHh1L"
			}
		},
		"./src/reddit/components/ProfileNavMenu/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/fastdom/index.ts"),
				i = s("./node_modules/lodash/isEqual.js"),
				r = s.n(i),
				a = s("./node_modules/lodash/throttle.js"),
				d = s.n(a),
				l = s("./node_modules/react/index.js"),
				c = s.n(l),
				m = s("./node_modules/react-redux/es/index.js"),
				p = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				u = s("./node_modules/reselect/es/index.js"),
				h = s("./src/config.ts"),
				b = s("./src/higherOrderComponents/asTooltip.tsx"),
				x = s("./src/lib/classNames/index.ts"),
				g = s("./src/lib/constants/index.ts"),
				f = s("./src/reddit/actions/tooltip.ts"),
				v = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				y = s("./src/reddit/constants/componentSizes.ts"),
				C = s("./src/reddit/contexts/PageLayer/index.tsx"),
				O = s("./src/reddit/controls/Dropdown/index.tsx"),
				P = s("./src/reddit/controls/InternalLink/index.tsx"),
				E = s("./src/reddit/icons/fonts/index.tsx"),
				w = s("./src/reddit/models/Profile/index.ts"),
				k = s("./src/reddit/featureFlags/index.ts"),
				j = s("./src/reddit/selectors/tooltip.ts"),
				I = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/selectors/userPrefs.ts"),
				S = s("./src/reddit/components/ProfileNavMenu/index.m.less"),
				L = s.n(S);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const T = Object(C.u)({
					routeName: C.Z,
					privateListingType: C.j
				}),
				M = Object(u.c)({
					isDropdownMenuOpen: e => Object(j.a)(e) === A,
					isOwnProfile: (e, t) => Object(I.W)(e, t.profileName),
					isSnoovatar30Enabled: k.d.snoovatar30,
					isSubscriptionsPinned: _.b
				}),
				R = Object(b.a)(O.a),
				A = "profile-nav-menu-tooltip",
				F = y.g + y.q + y.p;
			var B;
			t.a = T(Object(m.b)(M, e => ({
					toggleTooltip: t => e(Object(f.h)({
						tooltipId: t
					}))
				}))(e => {
					let {
						isDropdownMenuOpen: t,
						isOwnProfile: s,
						privateListingType: o,
						profileName: i,
						routeName: a,
						toggleTooltip: m,
						isSnoovatar30Enabled: p,
						isSubscriptionsPinned: u,
						viewBlockedConsent: h
					} = e;
					const [b, g] = Object(l.useState)(!1), f = Object(l.useRef)(null), [C, O] = Object(l.useState)([]), [P, w] = Object(l.useState)([]);
					return Object(l.useEffect)(() => {
						const e = G({
							profileName: i,
							isOwnProfile: s,
							routeName: a,
							privateListingType: o,
							isSnoovatar30Enabled: p,
							viewBlockedConsent: h
						});
						O(e.filter(e => e.position === B.MENU));
						const t = [],
							l = d()(() => {
								const s = document.documentElement.clientWidth - 2 * y.p,
									o = s > F ? F : s;
								let n = 42;
								t.forEach(t => {
									n += t.offsetWidth;
									const s = e.find(e => e.text.toString().toLowerCase() === t.text);
									s.position = n > o ? B.DROPDOWN : B.MENU
								});
								const i = e.filter(e => e.position === B.MENU);
								O(e => r()(i, e) ? e : i);
								const a = e.filter(e => e.position === B.DROPDOWN);
								w(e => r()(a, e) ? e : a), g(a.length > 0)
							}, 50);
						return n.a.read(() => {
							const e = f.current;
							e && (e.childNodes.forEach((e, s) => {
								t.push({
									text: e.textContent.toLowerCase(),
									offsetWidth: e.offsetWidth
								})
							}), l())
						}), window.addEventListener("resize", l), () => {
							window.removeEventListener("resize", l)
						}
					}, [i, s, a, o, p, h]), c.a.createElement("div", {
						className: L.a.container
					}, c.a.createElement(v.a, {
						bladeOpen: !1,
						offsetLeft: u ? y.t : 0,
						render: () => c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
							className: L.a.menuContainer,
							ref: f
						}, C.map(e => c.a.createElement(D, N({}, e, {
							key: e.key
						})))), b && c.a.createElement("button", {
							className: Object(x.a)(L.a.mainLink),
							id: A,
							onClick: () => m(A)
						}, c.a.createElement(E.a, {
							name: "overflow_horizontal"
						})), b && c.a.createElement(R, {
							className: L.a.dropdown,
							isOpen: t,
							tooltipId: A
						}, P.map(e => c.a.createElement(W, N({}, e, {
							key: e.key
						})))))
					}))
				})),
				function(e) {
					e.MENU = "menu", e.DROPDOWN = "dropdown"
				}(B || (B = {}));
			const D = e => {
					let {
						isActive: t,
						text: s,
						url: o,
						internal: n
					} = e;
					return n ? c.a.createElement(P.default, {
						className: Object(x.a)(L.a.mainLink, {
							[L.a.isActive]: t
						}),
						to: o
					}, s) : c.a.createElement("a", {
						className: Object(x.a)(L.a.mainLink, {
							[L.a.isActive]: t
						}),
						href: o
					}, s)
				},
				W = e => {
					let {
						isActive: t,
						internal: s,
						url: o,
						text: n
					} = e;
					return s ? c.a.createElement(p.a, {
						className: Object(x.a)(L.a.dropdownLink, {
							[L.a.isActive]: t
						}),
						to: o,
						rel: "nofollow noopener noreferrer",
						role: "listitem"
					}, n) : c.a.createElement("a", {
						className: Object(x.a)(L.a.dropdownLink),
						href: o,
						rel: "nofollow noopener noreferrer",
						role: "listitem",
						target: "_blank"
					}, n)
				},
				G = e => {
					let {
						profileName: t,
						isOwnProfile: s,
						routeName: n,
						privateListingType: i,
						isSnoovatar30Enabled: r,
						viewBlockedConsent: a
					} = e;
					const d = s ? [{
						internal: !0,
						isActive: n === g.Nb.PROFILE_PRIVATE && i === w.b.Saved,
						key: "profile.mainmenu.saved",
						text: o.fbt._("Saved", null, {
							hk: "2w1YRh"
						}),
						url: `/user/${t}/saved/`,
						position: B.MENU
					}, {
						internal: !0,
						isActive: n === g.Nb.PROFILE_PRIVATE && i === w.b.Hidden,
						key: "profile.mainmenu.hidden",
						text: o.fbt._("Hidden", null, {
							hk: "225tka"
						}),
						url: `/user/${t}/hidden/`,
						position: B.MENU
					}, {
						internal: !0,
						isActive: n === g.Nb.PROFILE_PRIVATE && i === w.b.Upvoted,
						key: "profile.mainmenu.upvoted",
						text: o.fbt._("Upvoted", null, {
							hk: "RKwFZ"
						}),
						url: `/user/${t}/upvoted/`,
						position: B.MENU
					}, {
						internal: !0,
						isActive: n === g.Nb.PROFILE_PRIVATE && i === w.b.Downvoted,
						key: "profile.mainmenu.downvoted",
						text: o.fbt._("Downvoted", null, {
							hk: "2F9IL4"
						}),
						url: `/user/${t}/downvoted/`,
						position: B.MENU
					}] : [];
					s ? (d.push({
						internal: !0,
						isActive: n === g.Nb.PROFILE_PRIVATE && i === w.b.ReceivedGildings,
						key: "profile.mainmenu.receiverGildings",
						text: o.fbt._("Awards received", null, {
							hk: "iwLBV"
						}),
						url: `/user/${t}/gilded/`,
						position: B.MENU
					}), d.push({
						internal: !0,
						isActive: n === g.Nb.PROFILE_PRIVATE && i === w.b.GivenGildings,
						key: "profile.mainmenu.givenGildings",
						text: o.fbt._("Awards given", null, {
							hk: "2UPYZc"
						}),
						url: `/user/${t}/gilded/given/`,
						position: B.MENU
					})) : d.push({
						internal: !1,
						isActive: !1,
						key: "profile.mainmenu.gildedLegacy",
						text: o.fbt._("Awards received (legacy)", null, {
							hk: "1YgfYU"
						}),
						url: `${h.a.oldRedditUrl}/user/${t}/gilded/`,
						position: B.MENU
					});
					const l = r ? [{
							internal: !0,
							isActive: n === g.Nb.PROFILE_SNOOBUILDER,
							key: "profile.mainmenu.snoobuilder",
							text: o.fbt._("Snoobuilder", null, {
								hk: "3SSKff"
							}),
							url: `/user/${t}/snoo/`,
							position: B.MENU
						}] : [],
						c = a ? "?consent=true" : "";
					return [{
						internal: !0,
						isActive: n === g.Nb.PROFILE_OVERVIEW,
						key: "profile.mainmenu.overview",
						text: o.fbt._("Overview", null, {
							hk: "2IBbqy"
						}),
						url: `/user/${t}/${c}`,
						position: B.MENU
					}, {
						internal: !0,
						isActive: n === g.Nb.PROFILE_POSTS,
						key: "profile.mainmenu.posts",
						text: o.fbt._("Posts", null, {
							hk: "a1BoF"
						}),
						url: `/user/${t}/posts/${c}`,
						position: B.MENU
					}, {
						internal: !0,
						isActive: n === g.Nb.PROFILE_COMMENTS,
						key: "profile.mainmenu.comments",
						text: o.fbt._("Comments", null, {
							hk: "2VwjOc"
						}),
						url: `/user/${t}/comments/${c}`,
						position: B.MENU
					}, ...l, ...d]
				}
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/post.ts"),
				r = s("./src/reddit/actions/tooltip.ts"),
				a = s("./src/reddit/models/Vote/index.ts"),
				d = s("./src/reddit/contexts/InsideOverlay.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/contexts/Post/index.tsx"),
				m = s("./src/reddit/selectors/activeModalId.ts"),
				p = s("./src/reddit/selectors/chatPost.ts"),
				u = s("./src/reddit/selectors/moderatorPermissions.ts"),
				h = s("./src/reddit/selectors/postFlair.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/showPromotedCTA.ts"),
				g = s("./src/reddit/selectors/user.ts");
			const f = {
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
				v = Object(o.b)(() => Object(n.c)(f), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const o = t === a.a.upvoted ? Object(i.kb)(s) : Object(i.w)(s);
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
			t.a = e => Object(c.b)(v(Object(d.b)(e)))
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
				return a
			})), s.d(t, "c", (function() {
				return d
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
				a = 1e4,
				d = .2,
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
				a = s("./src/reddit/controls/Checkbox/index.m.less"),
				d = s.n(a);
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
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
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
				}, a(e, s, i, r)) : a(e, s, i, r) : null,
				a = (e, t, s, o) => n.a.createElement(i.a, {
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
				a = s("./src/reddit/models/Theme/index.ts"),
				d = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				l = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				c = s.n(l);
			const m = {},
				p = e => Object(a.g)(Object(d.a)(e).post, Object(d.a)(e).backgroundImage, Object(d.a)(e).backgroundImagePosition),
				u = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(a.g)(e.postBackgroundColor || Object(d.a)(t).post, e.postBackgroundImage, Object(d.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(a.g)(e.postBackgroundColor, null, null)
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
				return a
			})), s.d(t, "b", (function() {
				return d
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
				a = (e, t) => s => ({
					...Object(i.n)(s),
					action: n.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(i.hb)(s),
					post: Object(i.I)(s, e),
					userSubreddit: Object(i.rb)(s),
					actionInfo: Object(i.d)(s, {
						reason: r(t)
					})
				}),
				d = (e, t) => s => ({
					...Object(i.n)(s),
					action: n.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(i.I)(s, t),
					subreddit: Object(i.hb)(s),
					userSubreddit: Object(i.rb)(s)
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
					post: Object(i.I)(t, e, void 0, 0),
					profile: Object(i.R)(t)
				}),
				m = (e, t, s) => o => ({
					...Object(i.n)(o),
					action: n.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(i.d)(o, {
						reason: l(t)
					}),
					post: Object(i.I)(o, e, void 0, s)
				}),
				p = (e, t, s, o, r, a) => d => ({
					...Object(i.n)(d),
					action: n.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(i.d)(d, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(i.I)(d, e, void 0, a),
					subreddit: Object(i.hb)(d),
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
					post: Object(i.I)(o, e, void 0, s),
					subreddit: Object(i.hb)(o)
				})
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
				a = s("./src/reddit/actions/pages/profilePrivate/index.ts"),
				d = s("./src/reddit/components/EmptyProfile/index.ts"),
				l = s("./src/reddit/components/JumpToContent/index.tsx"),
				c = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				m = s("./src/reddit/components/PostList/index.tsx"),
				p = s("./src/reddit/components/ProfileItemList/index.tsx"),
				u = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				h = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				b = s("./node_modules/lodash/noop.js"),
				x = s.n(b),
				g = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				f = s("./src/reddit/actions/post.ts"),
				v = s("./src/reddit/components/TrackingHelper/index.tsx"),
				y = s("./src/reddit/components/PostList/Placeholder.tsx"),
				C = s("./src/reddit/actions/postList.ts"),
				O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				P = s("./src/reddit/helpers/isComment.ts"),
				E = s("./src/reddit/helpers/isPost.ts"),
				w = s("./src/reddit/helpers/trackers/post.ts"),
				k = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/objectSelector/index.ts")),
				j = s("./src/reddit/models/Flair/index.ts"),
				I = s("./src/reddit/models/PostCreationForm/index.ts"),
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
						type: j.f.Text,
						text: "hello world"
					}, {
						type: j.f.Spoiler,
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
						type: j.f.Text,
						text: "hello world"
					}, {
						type: j.f.Spoiler,
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
						rteMode: I.i.RICH_TEXT,
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
						type: j.f.Text,
						text: "hello world"
					}, {
						type: j.f.Spoiler,
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
						rteMode: I.i.RICH_TEXT,
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
						type: j.f.Text,
						text: "hello world"
					}, {
						type: j.f.Spoiler,
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
						rteMode: I.i.RICH_TEXT,
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
			L = {
				authorIsBlocked: !0,
				media: {
					type: "text",
					rteMode: I.i.RICH_TEXT,
					markdownContent: "",
					content: "This is content in a post.",
					obfuscated: null
				}
			}, _.a.notVoted;
			var L;
			const N = Object(k.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const o = e.posts.models;
					return T(e, {
						listingKey: s
					}).filter(e => {
						if (Object(P.a)(e)) return !0; {
							const t = o[e];
							return t && !t.hidden
						}
					})
				}),
				T = Object(k.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const o = e.pages.profileOverview.chrono.ids[s];
					return o ? [...o] : []
				}),
				M = Object(k.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					return N(e, {
						listingKey: s
					}).reduce((t, s) => {
						const o = Object(P.a)(s) ? e.features.comments.models[s].postId : s;
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
					return N(e, {
						listingKey: s
					}).map(t => Object(P.a)(t) ? e.features.comments.models[t].postId : t)
				})),
				A = Object(k.a)((e, t) => {
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
				F = Object(k.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const o = e.features.comments.models,
						n = N(e, {
							listingKey: s
						}),
						i = {};
					return n.forEach(e => !!Object(P.a)(e) && (i[e] = o[e])), i
				});
			var B = s("./src/reddit/selectors/subreddit.ts"),
				D = s("./src/reddit/selectors/tracking.ts"),
				W = s("./src/reddit/selectors/user.ts");
			const G = (e, t) => (e, t, s) => Object(P.a)(e) ? 120 : 47,
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
					currentUser: W.k,
					layout: O.S,
					loadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						return e.pages.profileOverview.chrono.loadMore[s]
					},
					subredditsById: B.bb,
					viewportDataLoaded: D.a,
					commentsById: F,
					itemIds: N,
					itemIdToPostId: M,
					postsById: A,
					estimateItemHeight: G
				}),
				K = Object(r.c)(U);
			Object(i.b)(K, (e, t) => ({
				onBottomViewed: (t, s) => e(C.c(t, s)),
				openPost: t => {
					e(f.L(t))
				},
				trackOnPostEnteredViewport: (t, s) => {
					Object(E.a)(t) && e(f.O(t))
				},
				trackOnPostExitedViewport: (t, s, o) => {
					Object(E.a)(t) && e(f.P(t, o))
				},
				fireAdPixelsOfType: x.a
			}), (e, t, s) => ({
				...e,
				...t,
				...s,
				postClickEventFactory: (e, t) => Object(w.k)(e, t)
			}));
			var V = s("./src/reddit/featureFlags/index.ts"),
				H = s("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				q = s("./src/reddit/models/Profile/index.ts");
			const z = (e, t) => {
					let {
						listingKey: s
					} = t;
					return e.profilePrivatePage.api.pending[s]
				},
				J = (e, t) => {
					let {
						listingKey: s
					} = t;
					return e.profilePrivatePage.api.error[s]
				},
				Q = Object(k.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					return (e.profilePrivatePage.ids[s] || []).reduce((t, s) => {
						const o = Object(P.a)(s) ? e.features.comments.models[s].postId : s;
						return t[s] = o, t
					}, {})
				}),
				Z = Object(O.u)(),
				$ = Object(O.u)(),
				X = {
					apiError: J,
					apiPending: z,
					layout: O.S,
					loadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						if (!e.profilePrivatePage.pageInfo || !e.profilePrivatePage.pageInfo[s] || !e.profilePrivatePage.pageInfo[s].hasNextPage) return null;
						const o = e.profilePrivatePage.ids[s];
						return {
							token: o[o.length - 1],
							dist: H.h
						}
					},
					subredditsById: e => e.subreddits.models,
					postsById: e => e.posts.models,
					viewportDataLoaded: (e, t) => !z(e, t) && !J(e, t)
				},
				Y = Object(r.c)({
					...X,
					currentUser: W.k,
					commentsById: e => e.features.comments.models,
					itemIds: (e, t) => {
						let {
							listingKey: s
						} = t;
						return -1 === s.indexOf(q.b.Saved) && -1 === s.indexOf(q.b.ReceivedGildings) && -1 === s.indexOf(q.b.GivenGildings) ? [] : e.profilePrivatePage.ids[s] || []
					},
					itemIdToPostId: Q,
					estimateItemHeight: G
				}),
				ee = Object(r.c)({
					...X,
					measureScrollFPS: V.d.measureScrollFPS,
					postIds: (e, t) => {
						let {
							listingKey: s
						} = t;
						return s.indexOf(q.b.Saved) > -1 || s.indexOf(q.b.ReceivedGildings) > -1 || s.indexOf(q.b.GivenGildings) > -1 ? [] : e.profilePrivatePage.ids[s] || []
					},
					postListPlaceholderComponent: () => y.a
				}),
				te = e => ({
					onBottomViewed: x.a,
					openPost: t => {
						e(f.L(t))
					},
					trackOnPostEnteredViewport: x.a,
					fireAdPixelsOfType: (t, s) => {
						e(f.z(t, s))
					}
				}),
				se = Object(i.b)(Y, te, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(w.k)(e, t)
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
					postClickEventFactory: (e, t) => Object(w.k)(e, t),
					postComponentForLayout: g.b
				}));
			var ne = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				ie = s("./src/reddit/helpers/trackers/screenview.ts"),
				re = s("./src/reddit/layout/page/Listing/index.tsx"),
				ae = s("./src/reddit/pages/ProfilePrivate/index.m.less"),
				de = s.n(ae);
			const le = Object(r.c)({
					currentUser: W.k
				}),
				ce = Object(i.b)(le, (e, t) => ({
					onLoadMore: () => e(Object(a.moreProfilePrivateRequested)(t.match.params.listingType))
				})),
				me = (e => Object(v.c)(Z(se(e))))(p.a),
				pe = (e => Object(v.c)($(oe(e))))(m.a);
			class ue extends n.a.Component {
				constructor() {
					super(...arguments), this.onLoadMore = () => this.props.onLoadMore()
				}
				renderNoPosts(e) {
					const t = q.a[e]();
					return () => n.a.createElement(d.d, {
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
					return e && e.displayText && e.displayText.toLowerCase() === o ? t === q.b.Saved || t === q.b.ReceivedGildings || t === q.b.GivenGildings ? n.a.createElement(me, {
						className: de.a.mixedList,
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
					}) : n.a.createElement(d.a, null)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfilePrivate.fc8136aa6eb827ae2e51.js.map