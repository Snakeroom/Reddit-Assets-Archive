// https://www.redditstatic.com/desktop2x/ProfilePrivate.1c89115108019b99aa81.js
// Retrieved at 3/5/2020, 3:00:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfilePrivate", "reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796", "ChatPost~ModQueuePages"], {
		"./node_modules/lodash/_baseFindKey.js": function(e, t) {
			e.exports = function(e, t, s) {
				var o;
				return s(e, (function(e, s, n) {
					if (t(e, s, n)) return o = s, !1
				})), o
			}
		},
		"./node_modules/lodash/findKey.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseFindKey.js"),
				n = s("./node_modules/lodash/_baseForOwn.js"),
				r = s("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return o(e, r(t, 3), n)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var o = s("./node_modules/lodash/toString.js"),
				n = 0;
			e.exports = function(e) {
				var t = ++n;
				return o(e) + t
			}
		},
		"./src/graphql/operations/ProfileDownvoted.json": function(e) {
			e.exports = JSON.parse('{"id":"3d5f4c123223"}')
		},
		"./src/graphql/operations/ProfileGivenGildings.json": function(e) {
			e.exports = JSON.parse('{"id":"b06432765343"}')
		},
		"./src/graphql/operations/ProfileHidden.json": function(e) {
			e.exports = JSON.parse('{"id":"b32e677a5258"}')
		},
		"./src/graphql/operations/ProfileReceivedGildings.json": function(e) {
			e.exports = JSON.parse('{"id":"7ce2d6adf2c9"}')
		},
		"./src/graphql/operations/ProfileSaved.json": function(e) {
			e.exports = JSON.parse('{"id":"209ac78b3df8"}')
		},
		"./src/graphql/operations/ProfileUpvoted.json": function(e) {
			e.exports = JSON.parse('{"id":"d5e88830af62"}')
		},
		"./src/higherOrderComponents/withClickTracking.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return m
			})), s.d(t, "a", (function() {
				return p
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "d", (function() {
				return b
			}));
			var o = s("./node_modules/lodash/omit.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/selectors/telemetry.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const l = (e, t, s) => (function() {
				let o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return n => {
					const r = b(n.target, n.currentTarget);
					u(n.target, n.currentTarget, p.anchors) ? r && t && e(t(s, r)) : r && t && e(e => Object.assign({}, t(s, r)(e), {
						actionInfo: Object(d.previousPageActionInfo)(e)
					})), u(n.target, n.currentTarget, p.anchorsAndButtons) && o(n)
				}
			});

			function m(e) {
				class t extends i.a.Component {
					constructor() {
						super(...arguments), this.cancelClick = !1
					}
					render() {
						const {
							sendEvent: t,
							eventFactory: s,
							clickTrackingId: o
						} = this.props;
						return i.a.createElement(e, c({}, n()(this.props, "sendEvent", "eventFactory", "clickTrackingId"), {
							afterClickTracking: l(t, s, o)
						}))
					}
				}
				return Object(a.b)(t)
			}
			const p = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				u = (e, t, s) => !s.includes(e.tagName) && (e === t || !!e.parentElement && u(e.parentElement, t, s)),
				b = (e, t) => {
					const s = e.dataset.clickId;
					return s || (e === t ? null : !!e.parentElement && b(e.parentElement, t))
				}
		},
		"./src/reddit/actions/pages/profilePrivate/index.ts": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/externalAccount.ts"),
				r = s("./src/reddit/actions/pages/profileShared.ts"),
				i = s("./src/reddit/actions/profile/index.ts"),
				a = s("./src/graphql/operations/ProfileDownvoted.json"),
				d = s("./src/graphql/operations/ProfileGivenGildings.json"),
				c = s("./src/graphql/operations/ProfileHidden.json"),
				l = s("./src/graphql/operations/ProfileReceivedGildings.json"),
				m = s("./src/graphql/operations/ProfileSaved.json"),
				p = s("./src/graphql/operations/ProfileUpvoted.json"),
				u = s("./src/lib/makeGqlRequest/index.ts");
			var b = s("./src/reddit/models/Comment/index.ts"),
				h = s("./src/reddit/models/Post/index.ts"),
				x = s("./src/reddit/models/Profile/index.ts"),
				g = s("./src/lib/constants/index.ts"),
				v = s("./src/reddit/helpers/graphql/helpers.ts"),
				f = s("./src/reddit/helpers/graphql/normalizeModeratorPartFromGql/index.ts"),
				O = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				y = s("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				E = s("./src/reddit/models/PostCreationForm/index.ts"),
				C = s("./src/reddit/models/User/index.ts");
			const j = e => ({
					richtextContent: e.content && e.content.richtext ? Object(v.k)(e.content.richtext) : {},
					type: "rtjson",
					rteMode: E.h.RICH_TEXT
				}),
				w = (e, t) => !(!e || !t || Object(O.c)(t) || !t.authorInfo) && Object(y.b)(e) === Object(y.b)(t.authorInfo),
				I = e => e && !Object(O.c)(e) && e.authorInfo ? Object(y.b)(e.authorInfo) : null;
			var T = e => {
					const {
						associatedAward: t,
						authorInfo: s,
						awardings: o,
						content: n,
						createdAt: r,
						distinguishedAs: i,
						editedAt: a,
						id: d,
						isGildable: c,
						isScoreHidden: l,
						isStickied: m,
						isSaved: p,
						parent: u,
						permalink: b,
						postInfo: x,
						score: O,
						voteState: E
					} = e, T = "ADMIN" === i, P = "MODERATOR" === i, S = o ? Object(v.h)(o) : void 0, k = s && s.__typename === C.d.AvailableRedditor && s.isCakeDayNow || !1, _ = s && s.__typename === C.d.AvailableRedditor && s.isPremiumMember || !1, L = Object.assign({
						allAwardings: S,
						associatedAward: t,
						author: s && Object(y.b)(s) || g.A,
						authorId: s && s.id || "",
						body: n && n.html || "",
						bodyMD: n && n.markdown || "",
						created: Object(v.j)(r) / 1e3,
						distinguishType: i || "",
						editedAt: Object(v.j)(a) / 1e3 || null,
						id: d,
						isAdmin: T,
						isAuthorCakeday: k,
						isAuthorPremium: _,
						isGildable: c,
						isMod: P,
						isOp: w(s, x),
						isSaved: p,
						isScoreHidden: l,
						isStickied: m,
						markdown: n && n.markdown || "",
						media: j(e),
						parentId: u && u.id,
						permalink: "https://www.reddit.com".concat(b),
						postAuthor: I(x),
						postId: x && x.id || "",
						postTitle: x && x.title || null,
						score: O || 0,
						subredditId: "",
						voteState: Object(v.i)(E)
					}, Object(f.a)(e), {
						collapsed: !1,
						collapsedReason: null,
						collapsedBecauseCrowdControl: !1,
						isDeleted: !1,
						isLocked: !1,
						deletedBy: null,
						sendReplies: !0,
						modReports: [],
						userReports: []
					});
					return e.postInfo && e.postInfo.__typename === h.f.SubredditPost ? L.subredditId = e.postInfo.subreddit.id : e.postInfo && e.postInfo.__typename === h.f.ProfilePost && (L.subredditId = e.postInfo.profile.id), L
				},
				P = s("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				S = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				k = s("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				_ = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				L = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			var M = e => {
					const {
						listingType: t,
						rawData: s,
						includeIdentity: o,
						includeModerated: n
					} = e, {
						identity: r
					} = s, i = (e => {
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
						return e !== x.a.Saved && e !== x.a.ReceivedGildings && e !== x.a.GivenGildings || (t.comments = {}), t
					})(t);
					if (!r) return i;
					if (o && (i.account = Object(y.a)(r) || null, i.preferences = Object(k.a)(r.preferences, r.interactions) || null, r.redditor.profile && (i.profiles[r.redditor.profile.id] = Object(_.a)(r.redditor.profile))), n && r.redditor && r.redditor.moderatedSubreddits) {
						const {
							moderatedSubredditIds: e,
							pageInfo: t,
							subreddits: s
						} = Object(_.b)(r.redditor.moderatedSubreddits);
						i.moderatedPageInfo = t, i.moderatedSubredditIds = e, i.subreddits = s
					}
					const a = ((e, t) => {
						switch (t) {
							case x.a.Downvoted:
								return e.identity.downvotedPosts;
							case x.a.Hidden:
								return e.identity.hiddenPosts;
							case x.a.Saved:
								return e.identity.saved;
							case x.a.Upvoted:
								return e.identity.upvotedPosts;
							case x.a.ReceivedGildings:
								return e.identity.receivedGildings;
							case x.a.GivenGildings:
								return e.identity.givenGildings
						}
					})(s, t);
					if (!a) return i;
					i.pageInfo = a.pageInfo;
					for (const {
							node: d
						} of a.edges) {
						let e;
						if (d.__typename === b.b.Comment) {
							const t = T(d);
							if (i.comments || (i.comments = {}), i.comments[t.id] = t, i.itemIds || (i.itemIds = []), i.itemIds.push(t.id), d.authorFlair && (i.authorFlair[t.subredditId] || (i.authorFlair[t.subredditId] = {}), i.authorFlair[t.subredditId][t.author] = Object(P.a)(d.authorFlair)[0]), e = d.postInfo, d.postInfo) {
								const {
									post: e,
									crosspost: t
								} = Object(O.a)(d.postInfo);
								i.posts[e.id] = e, t && (i.posts[t.id] = t)
							}
						} else e = d, i.itemIds || (i.itemIds = []), i.itemIds.push(e.id);
						if (!e) continue;
						const {
							post: t,
							crosspost: s
						} = e && Object(O.a)(e);
						i.posts[t.id] = t, s && (i.posts[s.id] = s), e.__typename !== h.f.DeletedProfilePost && e.__typename !== h.f.DeletedSubredditPost && (e.authorFlair && (i.authorFlair[t.belongsTo.id] || (i.authorFlair[t.belongsTo.id] = {}), i.authorFlair[t.belongsTo.id][t.author] = Object(P.a)(e.authorFlair)[0]), e.__typename === h.f.ProfilePost ? i.profiles[e.profile.id] || (i.profiles[e.profile.id] = Object(_.a)(e.profile)) : e.__typename === h.f.SubredditPost && (i.subreddits[e.subreddit.id] || (i.subreddits[e.subreddit.id] = Object(L.a)(e.subreddit)), i.postFlair[e.subreddit.id] || (i.postFlair[e.subreddit.id] = Object(S.a)(e.subreddit))))
					}
					return i
				},
				N = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				R = s("./src/reddit/actions/pages/profilePrivate/constants.ts");
			s.d(t, "privateListingPending", (function() {
				return D
			})), s.d(t, "privateMixedListingLoaded", (function() {
				return H
			})), s.d(t, "privatePostListingLoaded", (function() {
				return W
			})), s.d(t, "privateListingFailed", (function() {
				return V
			})), s.d(t, "profilePrivateRequested", (function() {
				return G
			})), s.d(t, "morePending", (function() {
				return U
			})), s.d(t, "moreMixedLoaded", (function() {
				return z
			})), s.d(t, "morePostLoaded", (function() {
				return K
			})), s.d(t, "moreFailed", (function() {
				return q
			})), s.d(t, "moreProfilePrivateRequested", (function() {
				return J
			}));
			const A = {
					[x.a.Downvoted]: (e, t) => Object(u.a)(e, Object.assign({}, a, {
						variables: t
					})),
					[x.a.Hidden]: (e, t) => Object(u.a)(e, Object.assign({}, c, {
						variables: t
					})),
					[x.a.Saved]: (e, t) => Object(u.a)(e, Object.assign({}, m, {
						variables: t
					})),
					[x.a.Upvoted]: (e, t) => Object(u.a)(e, Object.assign({}, p, {
						variables: t
					})),
					[x.a.ReceivedGildings]: (e, t) => Object(u.a)(e, Object.assign({}, l, {
						variables: t
					})),
					[x.a.GivenGildings]: (e, t) => Object(u.a)(e, Object.assign({}, d, {
						variables: t
					}))
				},
				B = (e, t) => {
					switch (e) {
						case x.a.Downvoted:
						case x.a.Hidden:
						case x.a.Saved:
						case x.a.Upvoted:
						case x.a.ReceivedGildings:
						case x.a.GivenGildings:
							return t.body.data
					}
				},
				F = e => {
					switch (e.listingType) {
						case x.a.Downvoted:
						case x.a.Hidden:
						case x.a.Saved:
						case x.a.Upvoted:
						case x.a.ReceivedGildings:
						case x.a.GivenGildings:
							return M(e)
					}
				},
				D = Object(o.a)(R.b),
				H = Object(o.a)(R.c),
				W = Object(o.a)(R.i),
				V = Object(o.a)(R.a),
				G = e => async (t, s, o) => {
					const {
						profileName: a,
						listingType: d
					} = e.params, c = s(), l = Object(N.b)(a.toLowerCase(), d), m = c.profilePrivatePage.ids[l] && c.profilePrivatePage.ids[l].length > 0, p = !!c.profilePrivatePage.api.error[l];
					if (c.profilePrivatePage.api.pending[l] || m && !p) return;
					const {
						account: u
					} = c.user, b = !u, h = !(u && u.displayText && c.profiles.moderated.models[u.displayText.toLowerCase()] && c.profiles.moderated.models[u.displayText.toLowerCase()].length);
					t(D({
						listingKey: l
					}));
					const g = {
							includeIdentity: b,
							includeModerated: h,
							first: R.h,
							after: null
						},
						v = await A[d](o.gqlContext(), g);
					if (v.ok && v.body) {
						const e = F({
							rawData: B(d, v),
							listingType: d,
							includeIdentity: b,
							includeModerated: h
						});
						d === x.a.Saved || d === x.a.ReceivedGildings || d === x.a.GivenGildings ? await t(H(Object.assign({
							listingKey: l,
							profileName: a
						}, e))) : await t(W(Object.assign({
							listingKey: l,
							profileName: a
						}, e))), await Promise.all([t(Object(r.d)(a)), t(Object(n.o)(a)), t(Object(i.d)(a))])
					} else t(V({
						listingKey: l,
						error: v.error
					}))
				}, U = Object(o.a)(R.f), z = Object(o.a)(R.e), K = Object(o.a)(R.g), q = Object(o.a)(R.d), J = e => async (t, s, o) => {
					const n = s(),
						r = n.user.account && n.user.account.displayText && n.user.account.displayText.toLowerCase();
					if (!r) return;
					const i = Object(N.b)(r, e);
					if (!n.profilePrivatePage.ids[i] || !n.profilePrivatePage.ids[i].length || !n.profilePrivatePage.pageInfo || !n.profilePrivatePage.pageInfo[i].hasNextPage || n.profilePrivatePage.api.error[i] || n.profilePrivatePage.api.pending[i]) return;
					const a = {
						includeIdentity: !1,
						includeModerated: !1,
						after: n.profilePrivatePage.pageInfo[i].endCursor,
						first: R.h
					};
					t(U({
						listingKey: i
					}));
					const d = await A[e](o.gqlContext(), a);
					if (d.ok && d.body) {
						const s = F({
							includeIdentity: !1,
							includeModerated: !1,
							listingType: e,
							rawData: d.body.data
						});
						e === x.a.Saved || e === x.a.ReceivedGildings || e === x.a.GivenGildings ? await t(z(Object.assign({
							listingKey: i,
							profileName: r
						}, s))) : await t(K(Object.assign({
							listingKey: i,
							profileName: r
						}, s)))
					} else t(q({
						listingKey: i,
						error: d.error
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
			const r = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", n.a);
			t.a = r
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				a = s("./src/reddit/components/CallToActionButton/index.m.less"),
				d = s.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			t.a = e => {
				var {
					className: t
				} = e, s = l(e, ["className"]);
				return n.a.createElement(i.a, c({
					className: Object(r.a)(t, d.a.CallToActionButton, {
						[d.a.mNotCardView]: s.isNotCardView
					})
				}, s))
			}
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/config.ts"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/getShortenedLink.ts"),
				c = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				l = s("./src/reddit/components/CallToActionButton/index.tsx"),
				m = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				p = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				u = s("./src/reddit/components/ExpandoButton/index.tsx"),
				b = s("./src/reddit/components/Flatlist/index.tsx"),
				h = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				x = s("./src/reddit/components/ModModeReports/index.tsx"),
				g = s("./src/reddit/components/ModModeReports/helpers.ts"),
				v = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				f = s("./src/reddit/components/PostContainer/index.tsx"),
				O = s("./src/reddit/components/PostMedia/index.tsx"),
				y = s("./src/reddit/components/PostMeta/index.tsx"),
				E = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				C = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				j = s("./src/reddit/components/PostTitle/index.tsx"),
				w = s("./src/reddit/components/PostTopMeta/index.tsx"),
				I = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				T = s("./src/reddit/models/Media/index.ts"),
				P = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				S = s("./node_modules/react-redux/es/index.js"),
				k = s("./node_modules/reselect/es/index.js"),
				_ = s("./src/reddit/actions/post.ts"),
				L = s("./src/reddit/actions/tooltip.ts"),
				M = s("./src/reddit/models/Vote/index.ts"),
				N = s("./src/reddit/contexts/InsideOverlay.tsx"),
				R = s("./src/reddit/contexts/PageLayer/index.tsx"),
				A = s("./src/reddit/selectors/activeModalId.ts"),
				B = s("./src/reddit/selectors/experiments/chatPost.ts"),
				F = s("./src/reddit/selectors/moderatorPermissions.ts"),
				D = s("./src/reddit/selectors/postFlair.ts"),
				H = s("./src/reddit/selectors/posts.ts"),
				W = s("./src/reddit/selectors/user.ts");
			const V = {
					autoplayPref: W.b,
					activeModalId: A.a,
					crosspost: H.c,
					currentUser: W.i,
					isActive: H.h,
					isChatPostExperiment: B.d,
					isCurrentUserProfilePost: H.i,
					isExpanded: H.k,
					isLoggedIn: W.G,
					isMeta: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(H.p)(e, s)
					},
					language: W.O,
					moderatorPermissions: F.i,
					modModeEnabled: R.N,
					post: H.M,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: D.a,
					showMedia: R.r,
					subredditOrProfile: H.Y,
					userIsOp: W.eb,
					flairStyleTemplate: R.P
				},
				G = (e, t) => {
					let {
						listingKey: s,
						listingName: o,
						postId: n
					} = t;
					return {
						handleVote: t => {
							const s = t === M.a.upvoted ? Object(_.X)(n) : Object(_.u)(n);
							e(s)
						},
						onIgnoreReports: () => e(Object(_.V)(n)),
						onOpenReportsDropdown: t => e(Object(L.h)({
							tooltipId: t
						}))
					}
				},
				U = Object(S.b)(() => Object(k.c)(V), G, (e, t, s) => Object.assign({}, e, t, s, {
					formatTitle: e => e.title
				}));
			s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/es6.regexp.constructor.js");
			var z = s("./src/lib/LRUCache/index.ts");
			const K = Object(R.t)({
					searchQuery: R.T
				}),
				q = new z.a(250),
				J = e => {
					const t = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const s = "".concat(e.id, "-").concat(t);
						let o = q.get(s);
						if (void 0 === o) {
							const r = new RegExp("(\\b".concat(t, "\\b)"), "gi"),
								i = e.title.split(r);
							for (let e = 1; e < i.length; e += 2) i[e] = n.a.createElement("em", {
								style: {
									fontWeight: 700
								}
							}, i[e]);
							o = n.a.createElement("span", {
								style: {
									fontWeight: "normal"
								}
							}, n.a.Children.toArray(i)), q.set(s, o)
						}
						return o
					}
				},
				Q = Object(S.b)(() => Object(k.c)(V), G, (e, t, s) => Object.assign({}, e, t, s, {
					formatTitle: J(s.searchQuery || "")
				}));
			var Z = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				X = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Y = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				$ = s("./src/reddit/helpers/styles/mixins/index.tsx"),
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
			s.d(t, "renderMedia", (function() {
				return ae
			})), s.d(t, "SearchResultsClassicPost", (function() {
				return le
			}));
			const re = 16;
			class ie extends n.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						className: e,
						currentUser: t,
						handleVote: s,
						isExpanded: o,
						isMeta: a,
						inSubredditOrProfile: O,
						eventFactory: S,
						first: k,
						flairStyleTemplate: _,
						formatTitle: L,
						isCheckboxSelected: M,
						isCurrentUserProfilePost: N,
						isFrontpage: R,
						isLoggedIn: A,
						isOverlay: B,
						language: F,
						moderatorPermissions: D,
						modModeEnabled: H,
						onClickPost: W,
						onIgnoreReports: V,
						onOpenReportsDropdown: G,
						poll: U,
						post: z,
						redditStyle: K,
						scrollerItemRef: q,
						showBulkActionCheckbox: J,
						showEditFlair: Q,
						showMedia: ee,
						subredditOrProfile: se,
						toggleCheckbox: ie,
						userIsOp: de
					} = this.props, ce = K ? void 0 : _, le = this.props.crosspost || void 0, me = Object(Y.a)(D), pe = Object(Z.a)(D), ue = Object(X.a)(D), be = H && Y.a, he = !!z.media && z.media.type === T.n.RTJSON, xe = de && he, ge = O && !ee, ve = !!z.media && Object(T.C)(z.media), fe = {
						flairStyleTemplate: ce,
						post: z,
						inSubredditOrProfile: O,
						isCurrentUserProfilePost: N,
						isOverlay: B,
						shouldShowSubscribeButton: !(R && A),
						subredditOrProfile: se,
						language: F
					}, Oe = n.a.createElement(f.a, {
						className: Object(i.a)(te.a.classicPostStyles, oe.a.postContainer, Object($.a)(this.props), k ? oe.a.mFirst : void 0, e),
						isOverlay: B,
						style: Object.assign({}, Object($.d)(this.props), Object($.b)(this.props.flairStyleTemplate)),
						post: z,
						onClick: W,
						eventFactory: S
					}, n.a.createElement(C.a, {
						model: z,
						handleVote: s,
						showBulkActionCheckbox: J,
						isCheckboxSelected: M,
						toggleCheckbox: ie,
						flairStyleTemplate: ce,
						redditStyle: K
					}), n.a.createElement(v.a, {
						"data-click-id": "background",
						flairStyleTemplate: ce
					}, n.a.createElement(p.a, {
						className: oe.a.eventMeta,
						post: z,
						language: F
					}), n.a.createElement("div", {
						className: oe.a.mainBody
					}, n.a.createElement("div", {
						className: ge ? oe.a.expandoContainer : oe.a.thumbnailContainer
					}, !ge && n.a.createElement(P.a, {
						className: oe.a.classicThumbnail,
						crosspost: le && z,
						isMeta: a,
						post: le || z,
						redditStyle: K,
						templatePlaceholderImage: ce && ce.postPlaceholderImage,
						removeLink: ve
					}), n.a.createElement(u.a, {
						crosspost: le,
						className: oe.a.rightExpando,
						isExpanded: !!o,
						post: z,
						useMediaIcons: !1
					})), n.a.createElement("div", {
						className: oe.a.content,
						"data-click-id": "body",
						style: {
							paddingBottom: "".concat(re, "px")
						}
					}, n.a.createElement(j.c, {
						className: U ? oe.a.titleWithPoll : void 0,
						format: L,
						poll: U,
						post: z,
						redditStyle: K,
						size: j.b.Medium,
						titleColor: ce && ce.postTitleColor,
						isOverlay: B
					}, z.source && !le && n.a.createElement(I.a, {
						href: z.source.url,
						isSponsored: z.isSponsored,
						source: z.source
					}, Object(d.a)(z))), n.a.createElement(y.a, ne({
						key: "PostMeta"
					}, fe)), H && me && Object(g.c)(z) && n.a.createElement(x.a, {
						language: F,
						onIgnoreReports: V,
						reportable: z
					}), n.a.createElement("div", {
						className: oe.a.spacer
					}), z.source && z.source.url && z.isSponsored && n.a.createElement(c.a, {
						className: oe.a.adLinkWrapper
					}, n.a.createElement(I.a, {
						href: z.source.url.replace(r.a.redditUrl, ""),
						isSponsored: z.isSponsored,
						source: z.source
					}, z.source.displayText), z.callToAction && n.a.createElement(l.a, {
						href: z.source.url.replace(r.a.redditUrl, ""),
						isSponsored: z.isSponsored,
						source: z.source
					}, z.callToAction)), n.a.createElement("div", {
						className: oe.a.flatlistContainer
					}, n.a.createElement(u.a, {
						className: oe.a.leftExpando,
						crosspost: le,
						isExpanded: !!o,
						post: z,
						useMediaIcons: !1
					}), n.a.createElement(m.a, {
						className: oe.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: ce,
						model: z,
						onVoteClick: s
					}), n.a.createElement(b.a, {
						className: oe.a.flatlistSeparator
					}), n.a.createElement(b.c, {
						className: oe.a.flatlist,
						currentUser: t,
						hasModFlairPerms: pe,
						hasModPostPerms: me,
						hasModFullPerms: ue,
						isOverlay: !!B,
						language: F,
						modModeEnabled: H,
						onIgnoreReports: V,
						onOpenReportsDropdown: G,
						post: z,
						showEditPost: xe,
						showEditFlair: Q,
						tooltipType: B ? w.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(E.h)({
							editPost: !be,
							save: !be,
							hide: !be,
							report: !be
						})
					})), n.a.createElement(h.d, {
						postId: z.id
					}))), ae(z, q, o)));
					return n.a.createElement(n.a.Fragment, null, Oe)
				}
			}
			const ae = (e, t, s) => s ? e.crosspostRootId ? n.a.createElement("div", {
					className: oe.a.crosspostMediaWrapper
				}, de(e, t)) : de(e, t) : null,
				de = (e, t) => n.a.createElement(O.a, {
					isExpando: !0,
					isListing: !0,
					isNotCardView: !0,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					showFull: !0,
					showCentered: !0,
					post: e
				}),
				ce = Object(a.a)(ie),
				le = (e => K(Q(e)))(ce);
			t.default = (e => U(Object(N.b)(e)))(ce)
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
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/higherOrderComponents/withClickTracking.tsx");
			const c = Object(i.c)({
					clickTrackingId: (e, t) => {
						let {
							comment: s
						} = t;
						return s.id
					}
				}),
				l = Object(r.b)(c);
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
						onClick: r,
						style: i
					} = this.props;
					return n.a.createElement("div", {
						className: Object(a.a)(s, "Comment ".concat(o.id)),
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: t => {
							!this.cancelClick && t.button < 2 && e(() => r && r(t, o))(t)
						},
						style: i
					}, t)
				}
			}
			t.a = l(Object(d.c)(m))
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
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/comment/index.ts"),
				d = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Dropdown/index.tsx"),
				m = s("./src/reddit/helpers/trackers/modTools.ts"),
				p = s("./src/reddit/selectors/tooltip.ts"),
				u = s("./src/app/strings/index.ts"),
				b = s("./src/lib/lessComponent.tsx"),
				h = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				x = s("./src/reddit/icons/svgs/Show/index.tsx"),
				g = s("./src/reddit/components/CommentModModeDropdown/index.m.less"),
				v = s.n(g);
			const f = b.a.wrapped(x.a, "Show", v.a);
			var O = e => n.a.createElement(h.e, null, !e.comment.isApproved && n.a.createElement(h.c, {
				displayText: e.comment.approvedBy ? Object(u.a)(e.language, "modTools.approved") : Object(u.a)(e.language, "modTools.approve"),
				onClick: e.onApproveComment
			}, n.a.createElement(h.a, null)), !e.comment.bannedBy && n.a.createElement(n.a.Fragment, null, n.a.createElement(h.c, {
				displayText: e.comment.isRemoved ? Object(u.a)(e.language, "modTools.removed") : Object(u.a)(e.language, "modTools.remove"),
				onClick: e.onRemoveComment
			}, n.a.createElement(h.g, null)), n.a.createElement(h.c, {
				displayText: e.comment.isSpam ? Object(u.a)(e.language, "modTools.removedAsSpam") : Object(u.a)(e.language, "modTools.removeAsSpam"),
				onClick: e.onSpamComment
			}, n.a.createElement(h.h, null)), n.a.createElement(h.c, {
				displayText: e.comment.isLocked ? Object(u.a)(e.language, "modTools.unlockComment") : Object(u.a)(e.language, "modTools.lockComment"),
				onClick: e.onLockComment
			}, n.a.createElement(h.f, null))), e.comment.collapsedBecauseCrowdControl && n.a.createElement(h.c, {
				displayText: Object(u.a)(e.language, "modTools.showComment"),
				onClick: e.onShowComment
			}, n.a.createElement(f, null)));
			const y = b.a.wrapped(l.a, "StyledDropdown", v.a),
				E = Object(i.c)({
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(p.b)(s)(e)
					}
				}),
				C = Object(r.b)(E, (e, t) => {
					let {
						comment: s
					} = t;
					return {
						onApproveComment: () => e(Object(a.H)(s.id)),
						onLockComment: () => e(Object(a.X)(s.id)),
						onRemoveComment: () => e(Object(a.cb)(s.id, !1)),
						onSpamComment: () => e(Object(a.cb)(s.id, !0)),
						onShowComment: () => e(Object(a.Y)(s.id))
					}
				}),
				j = Object(d.a)(y),
				w = C(Object(c.b)(e => {
					const {
						comment: t,
						isDropdownOpen: s,
						language: o,
						onApproveComment: r,
						onLockComment: i,
						onRemoveComment: a,
						onSpamComment: d,
						onShowComment: c,
						sendEvent: l,
						tooltipId: p
					} = e;
					return n.a.createElement(j, {
						isOpen: s,
						tooltipId: p
					}, n.a.createElement(O, {
						language: o,
						onApproveComment: () => {
							r(), l(Object(m.c)("approve", t.id))
						},
						onRemoveComment: () => {
							a(), l(Object(m.c)("remove", t.id))
						},
						onSpamComment: () => {
							d(), l(Object(m.c)("spam", t.id))
						},
						onLockComment: () => {
							i(), l(Object(m.c)(t.isLocked ? "unlock" : "lock", t.id))
						},
						onShowComment: () => {
							c(), l(Object(m.c)("showComment", t.id))
						},
						comment: t
					}))
				}));
			t.a = w
		},
		"./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				DropdownRow: "_2LNy1r5iuFMrf0PLh4UdV-",
				dropdownRow: "_2LNy1r5iuFMrf0PLh4UdV-",
				DeleteIcon: "_1iKLz-XMCxtewhk3nusoiP",
				deleteIcon: "_1iKLz-XMCxtewhk3nusoiP",
				ReportIcon: "_2cI15gf51WKaEHlpw-HjhG",
				reportIcon: "_2cI15gf51WKaEHlpw-HjhG",
				PencilIcon: "_1bLoeor2W-QStNmx_KRhZL",
				pencilIcon: "_1bLoeor2W-QStNmx_KRhZL",
				SaveIcon: "XOeF-g_i5E2Oaxwt9wDdS",
				saveIcon: "XOeF-g_i5E2Oaxwt9wDdS",
				SavedIcon: "_4rjQO_f0JDhjAgz1a8hLR",
				savedIcon: "_4rjQO_f0JDhjAgz1a8hLR",
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
		"./src/reddit/components/Comments/Comment/TopMeta/index.m.less": function(e, t, s) {
			e.exports = {
				CommentAuthorLink: "f3THgbzMYccGW8vbqZBUH",
				commentAuthorLink: "f3THgbzMYccGW8vbqZBUH",
				badgeIconStyle: "_2MlVoXUc3Eo3KGWDukM9xn",
				modBadgeIconStyle: "_1kqPGnOAdnd9gPUXDU2_AS",
				DonationAmount: "_3sY3k4LLYR5dbXRxnGkhwG",
				donationAmount: "_3sY3k4LLYR5dbXRxnGkhwG",
				RightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				rightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				EditedText: "uMVXpG5M2xxHNW2g94S8K",
				editedText: "uMVXpG5M2xxHNW2g94S8K",
				MetaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				metaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				publicPoints: "_2LXcsgibmlCEsBPk8MLy7e",
				AuthorHoverCard: "_16AAktgl_rVbXAeiWU9CQd",
				authorHoverCard: "_16AAktgl_rVbXAeiWU9CQd",
				Component: "_36uQqfCEixcb8d3_aWB5H6",
				component: "_36uQqfCEixcb8d3_aWB5H6",
				AdminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				adminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				Approve: "_34mJxMS9sOCTo8dtFMQOLR",
				approve: "_34mJxMS9sOCTo8dtFMQOLR",
				Lock: "_3ATarJMtY0XRI9Lgu7e7DC",
				lock: "_3ATarJMtY0XRI9Lgu7e7DC",
				AdminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				adminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				Automoderator: "EytgzUMjj1jcbKtFsodey",
				automoderator: "EytgzUMjj1jcbKtFsodey",
				removed: "_2jIbl66ymb_twdJlZslQ-e",
				CakeIcon: "_1HLCDx7CkNvQgmNroGXenu",
				cakeIcon: "_1HLCDx7CkNvQgmNroGXenu",
				Moderator: "_174Mk1p6pYIrr6f1y6b4fn",
				moderator: "_174Mk1p6pYIrr6f1y6b4fn",
				Remove: "_1DQWCB93pHPVVJCXOGsblO",
				remove: "_1DQWCB93pHPVVJCXOGsblO",
				Report: "_2wYWDvjfG1JR6VNK9ryPFk",
				report: "_2wYWDvjfG1JR6VNK9ryPFk",
				Spam: "_3kK86gdpll9ihjOPWJE6f2",
				spam: "_3kK86gdpll9ihjOPWJE6f2",
				Op: "_2pZswNTz_uW46hN02djL7j",
				op: "_2pZswNTz_uW46hN02djL7j",
				Contractor: "_1hbZy7yehvtj0w4ec-2u3Y",
				contractor: "_1hbZy7yehvtj0w4ec-2u3Y",
				redditorIcon: "_2SkK42s487b14gsRa4zinm",
				MetaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				metaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				StickiedText: "_1eNQE7Kj1TEqCLAn1BUKJy",
				stickiedText: "_1eNQE7Kj1TEqCLAn1BUKJy",
				DeletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				deletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				RemovalReason: "Gtgj2P-Js5aSN72H6Mqms",
				removalReason: "Gtgj2P-Js5aSN72H6Mqms",
				container: "_3ezOJqKdLbgkHsXcfvS5SA",
				collapsed: "_2k27lgIDltx9kOzVGXt48i",
				hasBadges: "_1KMFaeLEhRikeFEOlWE9Ti",
				liveStreaming: "_1iUed95f0HTc84gBtoOxdc",
				metaText: "_3_GZIIN1xcMEC5AVuv4kfa",
				CrowdControlText: "Eoj3NCGwtl7hQcr7Rnc0N",
				crowdControlText: "Eoj3NCGwtl7hQcr7Rnc0N"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/app/strings/index.ts"),
				d = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/humanizeDateTime/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				u = s("./src/lib/timeAgo/index.ts"),
				b = s("./src/reddit/components/AuthorLink/index.tsx"),
				h = s("./src/reddit/components/AwardBadges/index.tsx"),
				x = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				g = s("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				v = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				f = s("./src/reddit/featureFlags/index.ts"),
				O = s("./src/reddit/selectors/economics.ts"),
				y = s("./src/reddit/components/Economics/TopTippers/Icon/index.tsx"),
				E = s("./src/reddit/components/Economics/TopTippers/CommentUsername/index.m.less"),
				C = s.n(E);
			const j = e => {
				switch (e) {
					case 1:
						return {
							color: "#FF2500", fontWeight: 700
						};
					case 2:
						return {
							color: "#FF7300", fontWeight: 700
						};
					case 3:
						return {
							color: "#FFA200", fontWeight: 700
						};
					default:
						return {}
				}
			};
			var w = Object(r.b)(() => Object(i.c)({
					post: (e, t) => {
						let {
							contentId: s
						} = t;
						return e.posts.models[s]
					},
					tippers: (e, t) => {
						if (f.d.spTopTippers(e)) return Object(O.v)(e, t)
					}
				}))((function(e) {
					if (e.tippers && e.tippers.allTippers.has(e.userId)) {
						const t = e.tippers.topTippers.ranking[e.userId] || 5,
							s = n.a.cloneElement(n.a.Children.only(e.children), {
								style: j(t)
							});
						return n.a.createElement("div", {
							className: C.a.container
						}, n.a.createElement(y.a, {
							className: C.a.badge,
							creatorId: e.creatorId || e.post && e.post.authorId,
							rank: t,
							subredditId: e.subredditId
						}), s)
					}
					return e.children
				})),
				I = s("./src/reddit/components/Flair/index.tsx"),
				T = s("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				P = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				S = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				k = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				_ = s("./src/reddit/components/PostTopMeta/index.tsx"),
				L = s("./src/reddit/helpers/isRemoved.ts"),
				M = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				N = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				R = s("./src/reddit/i18n/utils.ts"),
				A = s("./src/reddit/actions/comment/index.ts"),
				B = s("./src/reddit/models/Comment/index.ts"),
				F = s("./src/reddit/models/Flair/index.ts"),
				D = s("./src/reddit/icons/fonts/Admin/index.tsx"),
				H = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				W = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				V = s("./src/reddit/icons/fonts/helpers.tsx"),
				G = s("./src/reddit/icons/fonts/Op/index.m.less"),
				U = s.n(G);
			var z = p.a.wrapped(e => n.a.createElement("i", {
					className: "".concat(Object(V.b)("op"), " ").concat(e.className),
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, n.a.createElement(V.a, null, e.desc)), "OpIcon", U.a),
				K = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				q = s("./src/reddit/icons/fonts/Report/index.tsx"),
				J = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				Q = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				Z = s("./src/reddit/icons/svgs/Cake/index.tsx"),
				X = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				Y = s("./src/reddit/controls/MetaData/index.tsx"),
				$ = s("./src/reddit/selectors/experiments/publicAwarding.ts"),
				ee = s("./src/reddit/selectors/subreddit.ts"),
				te = s("./src/reddit/selectors/userFlair.ts"),
				se = s("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
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
			var re = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const ie = p.a.wrapped(I.b, "RightPositionedAuthorFlair", oe.a),
				ae = p.a.wrapped(D.a, "AdminIcon", oe.a),
				de = p.a.wrapped(H.a, "Approve", oe.a),
				ce = p.a.wrapped(W.a, "Lock", oe.a),
				le = p.a.div("AdminEmeritus", oe.a),
				me = p.a.wrapped(Q.a, "Automoderator", oe.a),
				pe = p.a.wrapped(Z.a, "CakeIcon", oe.a),
				ue = p.a.wrapped(X.a, "Moderator", oe.a),
				be = p.a.wrapped(K.a, "Remove", oe.a),
				he = p.a.wrapped(q.a, "Report", oe.a),
				xe = p.a.wrapped(J.a, "Spam", oe.a),
				ge = p.a.wrapped(z, "Op", oe.a),
				ve = p.a.wrapped(D.a, "Contractor", oe.a),
				fe = p.a.a("MetaLink", oe.a),
				Oe = p.a.wrapped(Y.a, "EditedText", oe.a),
				ye = p.a.wrapped(Y.a, "StickiedText", oe.a),
				Ee = p.a.span("DeletedText", oe.a),
				Ce = p.a.wrapped(Y.a, "MetaSeparator", oe.a),
				je = p.a.wrapped(Y.a, "CrowdControlText", oe.a),
				we = p.a.wrapped(P.b, "AuthorHoverCard", oe.a),
				Ie = p.a.a("RemovalReason", oe.a),
				Te = p.a.wrapped(x.b, "Component", oe.a),
				Pe = Object(a.c)("comment.children"),
				Se = Object(a.c)("comment.moreThanChildren"),
				ke = e => (t, s) => {
					let {
						comment: o,
						renderedInOverlay: n
					} = s;
					return "".concat(e).concat(o.id).concat(n ? "inOverlay" : "")
				},
				_e = Object(a.d)("comment.tooltips.admin"),
				Le = Object(a.d)("comment.tooltips.cakeday"),
				Me = Object(a.d)("comment.tooltips.adminEmeritus"),
				Ne = Object(a.d)("comment.tooltips.moderator"),
				Re = Object(a.d)("comment.tooltips.op"),
				Ae = Object(a.d)("comment.tooltips.contractor"),
				Be = Object(r.b)(() => Object(i.c)({
					adminTooltipId: ke("CommentTopMeta--Admin--"),
					cakedayTooltipId: ke("CommentTopMeta--cakeday--"),
					adminEmeritusTooltipId: ke("CommentTopMeta--AdEm--"),
					automodTooltipId: ke("CommentTopMeta--Automod--"),
					approveTooltipId: ke("CommentTopMeta--Approve--"),
					createdTooltipId: ke("CommentTopMeta--Created--"),
					contractorTooltipId: ke("CommentTopMeta--Contractor--"),
					gildedTooltipId: ke("CommentTopMeta--Gold--"),
					lockedTooltipId: ke("CommentTopMeta--Locked--"),
					modTooltipId: ke("CommentTopMeta--Mod--"),
					opTooltipId: ke("CommentTopMeta--OP--"),
					publicAwardersEnabled: e => !!Object($.a)(e),
					removeTooltipId: ke("CommentTopMeta--Remove--"),
					reportTooltipId: ke("CommentTopMeta--Report--"),
					spamTooltipId: ke("CommentTopMeta--Spam--"),
					hasBadges: (e, t) => {
						let {
							comment: s
						} = t;
						return !!Object(O.t)(e, s.subredditId, s.authorId).length
					},
					subredditDisplayText: (e, t) => {
						const s = Object(ee.G)(e, {
							commentId: t.comment.id
						});
						return s ? s.displayText : ""
					},
					topTippersEnabled: f.d.spTopTippers,
					flairPosition: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(te.d)(e, {
							subredditId: s.subredditId
						})
					}
				}), (e, t) => ({
					onCreatedClick: () => {
						window.addEventListener("focus", (function s() {
							((e, t, s) => {
								window.removeEventListener("focus", s), e(Object(A.N)({
									commentListNodeId: t
								})), window.setTimeout(() => e(Object(A.N)({
									commentListNodeId: t
								})), 5e3)
							})(e, t.comment.id, s)
						}))
					},
					onHideTooltip: () => e(Object(d.i)()),
					onShowTooltip: t => e(Object(d.f)({
						tooltipId: t
					})),
					openRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.comment.subredditId, [t.comment.id])))
					}
				}));
			t.a = Be(e => {
				const {
					adminEmeritusTooltipId: t,
					adminTooltipId: s,
					approveTooltipId: o,
					automodTooltipId: r,
					cakedayTooltipId: i,
					children: a,
					className: d,
					collapsed: m,
					collapsedBecauseCrowdControl: p,
					comment: u,
					commentsPageKey: b,
					contractorTooltipId: x,
					compact: f,
					flair: O,
					flairPosition: y,
					hasBadges: E,
					isLivestreaming: C,
					ignoreFlairPosition: j,
					ignoreLock: w,
					language: P,
					lockedTooltipId: S,
					modTooltipId: L,
					onHideTooltip: M,
					onShowTooltip: N,
					opTooltipId: R,
					openRemovalReasonModal: A,
					publicAwardersEnabled: D,
					removeTooltipId: H,
					renderContractorBadge: W,
					renderedInOverlay: V,
					reportTooltipId: G,
					spamTooltipId: U,
					subredditDisplayText: z,
					topTippersEnabled: K
				} = e;
				if (u.isDeleted) return n.a.createElement(Fe, ne({}, e, {
					className: Object(c.a)(d, oe.a.container, {
						[oe.a.collapsed]: m
					})
				}));
				if (m) return n.a.createElement(De, ne({}, e, {
					className: Object(c.a)(d, oe.a.container, {
						[oe.a.collapsed]: m
					})
				}));
				const q = !j && y === F.b.Left;
				return n.a.createElement("div", {
					className: Object(c.a)(d, oe.a.container, {
						[oe.a.collapsed]: m,
						[oe.a.hasBadges]: E,
						[oe.a.liveStreaming]: C
					})
				}, O && q && n.a.createElement(I.b, {
					flair: O,
					forceSmallEmojis: f
				}), !Object(B.d)(u) && n.a.createElement(Te, {
					showAddCustom: !0,
					subredditId: u.subredditId,
					userId: u.authorId,
					uniqueIdentifier: u.id
				}), n.a.createElement(we, {
					postOrComment: u,
					tooltipType: V ? _.c.Lightbox : void 0
				}, n.a.createElement(g.b, {
					ignore: Object(B.d)(u) || !!u.distinguishType && u.distinguishType !== l.C.NONE,
					subredditId: u.subredditId,
					userId: u.authorId
				}, n.a.createElement(We, {
					comment: u,
					isLivestreaming: C,
					isStrong: !!f,
					isAuthorDeleted: Object(B.d)(u),
					topTippersEnabled: K
				}, a && a))), p && n.a.createElement(je, null, "Crowd Control"), p && n.a.createElement(Y.c, {
					className: oe.a.metaText,
					key: "crowdControlSeparator"
				}), O && !q && n.a.createElement(ie, {
					flair: O,
					forceSmallEmojis: f
				}), !f && n.a.createElement(T.a, {
					className: oe.a.publicPoints,
					contentId: u.id,
					subredditId: u.subredditId,
					userId: u.authorId,
					username: u.author
				}), n.a.createElement(n.a.Fragment, null, n.a.createElement(k.b, {
					commentId: u.id
				}), n.a.createElement(k.a, {
					commentId: u.id,
					commentsPageKey: b
				}), n.a.createElement(Ue, {
					comment: u,
					compact: f,
					adminTooltipId: s,
					adminEmeritusTooltipId: t,
					cakedayTooltipId: i,
					contractorTooltipId: x,
					language: P,
					modTooltipId: L,
					onHideTooltip: M,
					onShowTooltip: N,
					opTooltipId: R,
					renderContractorBadge: W,
					subredditDisplayText: z
				})), !f && n.a.createElement(n.a.Fragment, null, !u.isDeleted && n.a.createElement(Y.b, {
					className: oe.a.metaText,
					isScoreHidden: u.isScoreHidden,
					language: P,
					score: u.score
				}), n.a.createElement(Y.c, {
					className: oe.a.metaText,
					key: "scoreCreatedSeparator"
				}), n.a.createElement(Ve, ne({
					key: "Created"
				}, e)), u.isStickied && Ke(P), u.editedAt && He(P, u.editedAt)), n.a.createElement(n.a.Fragment, null, n.a.createElement(ze, {
					comment: u,
					approveTooltipId: o,
					automodTooltipId: r,
					ignoreLock: w,
					language: P,
					lockedTooltipId: S,
					onHideTooltip: M,
					onShowTooltip: N,
					openRemovalReasonModal: A,
					removeTooltipId: H,
					reportTooltipId: G,
					spamTooltipId: U
				}), n.a.createElement(v.a, {
					className: oe.a.DonationAmount,
					contentId: u.id,
					subredditId: u.subredditId
				})), n.a.createElement(h.a, {
					showAwarders: D,
					tooltipType: V ? _.c.Lightbox : void 0,
					thing: u
				}))
			});
			const Fe = e => {
					const {
						language: t,
						childrenInfo: s,
						collapsed: o,
						className: r,
						comment: i
					} = e;
					return n.a.createElement("div", {
						className: r
					}, n.a.createElement(Ee, null, i.deletedBy === B.a.User ? Object(a.a)(t, "comment.commentDeletedByAuthor") : Object(a.a)(t, "comment.commentDeletedByMod")), n.a.createElement(Ve, ne({
						key: "Created"
					}, e)), o && Ge({
						childrenInfo: s,
						language: t
					}))
				},
				De = e => {
					const {
						comment: t,
						language: s,
						className: o,
						childrenInfo: r
					} = e;
					return n.a.createElement("div", {
						className: o
					}, n.a.createElement("div", null, n.a.createElement(We, {
						comment: t,
						isAuthorDeleted: Object(B.d)(t),
						topTippersEnabled: !1
					})), n.a.createElement(Y.b, {
						className: oe.a.metaText,
						isScoreHidden: t.isScoreHidden,
						language: s,
						score: t.score
					}), n.a.createElement(Y.c, {
						className: oe.a.metaText,
						key: "scoreCreatedSeparator"
					}), n.a.createElement(Ve, ne({
						key: "Created"
					}, e)), Ge({
						childrenInfo: r,
						language: s
					}))
				},
				He = (e, t) => n.a.createElement(o.Fragment, null, n.a.createElement(Y.c, {
					className: oe.a.metaText
				}), n.a.createElement(Oe, null, Object(a.a)(e, "comment.edited", {
					time: Object(u.d)(e, t)
				}))),
				We = e => {
					const t = n.a.createElement(b.a, {
						className: oe.a.CommentAuthorLink,
						author: e.comment.author,
						isAdmin: e.comment.isAdmin,
						isAdminEmeritus: e.comment.distinguishType === l.C.ALUMNI_ADMIN,
						isAuthorDeleted: e.isAuthorDeleted,
						isLivestreaming: e.isLivestreaming,
						isMod: e.comment.isMod,
						isOp: e.comment.isOp,
						isStrong: e.isStrong,
						style: e.style
					}, e.children && e.children, e.comment.author);
					return e.topTippersEnabled ? n.a.createElement(w, {
						contentId: e.comment.postId,
						subredditId: e.comment.subredditId,
						userId: e.comment.authorId
					}, t) : t
				};
			class Ve extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCreatedTooltip = () => this.props.onShowTooltip(this.props.createdTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t,
							language: s,
							onCreatedClick: o
						} = e,
						r = re(e, ["comment", "language", "onCreatedClick"]);
					return n.a.createElement(fe, {
						href: t.permalink,
						id: r.createdTooltipId,
						onClick: o,
						onMouseEnter: this.onShowCreatedTooltip,
						onMouseLeave: r.onHideTooltip,
						rel: "nofollow",
						target: "_blank"
					}, n.a.createElement("span", null, Object(u.d)(s, t.created)), qe(r.createdTooltipId, Object(m.a)(t.created)))
				}
			}
			const Ge = e => {
				const {
					hasContinueThread: t,
					numChildren: s
				} = e.childrenInfo || {
					hasContinueThread: !1,
					numChildren: 0
				};
				return n.a.createElement(Ce, {
					className: oe.a.metaText
				}, "(", t ? Se(e.language, s, {
					numChildren: s
				}) : Pe(e.language, s, {
					numChildren: s
				}), ")")
			};
			class Ue extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCakedayTooltip = () => this.props.onShowTooltip(this.props.cakedayTooltipId), this.onShowAdminTooltip = () => this.props.onShowTooltip(this.props.adminTooltipId), this.onShowAdminEmeritusTooltip = () => this.props.onShowTooltip(this.props.adminEmeritusTooltipId), this.onShowModTooltip = () => this.props.onShowTooltip(this.props.modTooltipId), this.onShowOpTooltip = () => this.props.onShowTooltip(this.props.opTooltipId), this.onShowContractorTooltip = () => this.props.onShowTooltip(this.props.contractorTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						s = re(e, ["comment"]);
					return n.a.createElement(o.Fragment, null, t.isAuthorCakeday && n.a.createElement(pe, {
						"aria-label": Le(s.language),
						id: s.cakedayTooltipId,
						onMouseEnter: this.onShowCakedayTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isAuthorCakeday && qe(s.cakedayTooltipId, Le(s.language)), t.isAdmin && n.a.createElement(ae, {
						desc: _e(s.language),
						id: s.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isAdmin && qe(s.adminTooltipId, _e(s.language)), t.distinguishType === l.C.ALUMNI_ADMIN && n.a.createElement(le, {
						"aria-label": Me(s.language),
						children: "Δ",
						id: s.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.distinguishType === l.C.ALUMNI_ADMIN && qe(s.adminEmeritusTooltipId, Me(s.language)), t.isMod && n.a.createElement(ue, {
						desc: Ne(s.language, {
							displayText: s.subredditDisplayText
						}),
						id: s.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isMod && qe(s.modTooltipId, Ne(s.language, {
						displayText: s.subredditDisplayText
					})), t.isOp && n.a.createElement(ge, {
						desc: Re(s.language),
						id: s.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isOp && qe(s.opTooltipId, Re(s.language)), s.renderContractorBadge && n.a.createElement(ve, {
						desc: Ae(s.language),
						id: s.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: s.onHideTooltip
					}), s.renderContractorBadge && qe(s.contractorTooltipId, Ae(s.language)))
				}
			}
			class ze extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowApproveTooltip = () => this.props.onShowTooltip(this.props.approveTooltipId), this.onShowRemoveTooltip = () => this.props.onShowTooltip(this.props.removeTooltipId), this.onShowSpamTooltip = () => this.props.onShowTooltip(this.props.spamTooltipId), this.onShowAutomodTooltip = () => this.props.onShowTooltip(this.props.automodTooltipId), this.onShowReportTooltip = () => this.props.onShowTooltip(this.props.reportTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						s = re(e, ["comment"]);
					return n.a.createElement(o.Fragment, null, (t.approvedBy || t.isApproved) && n.a.createElement(de, {
						desc: Object(M.a)(s.language, t),
						id: s.approveTooltipId,
						onMouseEnter: this.onShowApproveTooltip,
						onMouseLeave: s.onHideTooltip
					}), (t.approvedBy || t.isApproved) && qe(s.approveTooltipId, Object(M.a)(s.language, t)), Object(L.a)(t) && n.a.createElement(be, {
						desc: Object(M.c)(s.language, t),
						id: s.removeTooltipId,
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: s.onHideTooltip
					}), Object(L.a)(t) && qe(s.removeTooltipId, Object(M.c)(s.language, t)), Object(L.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && n.a.createElement(Ie, {
						onClick: s.openRemovalReasonModal
					}, Object(a.a)(s.language, "modTools.addARemovalReason")), Object(L.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && n.a.createElement(Ie, {
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: s.onHideTooltip
					}, Object(a.a)(s.language, "modTools.removalReason")), t.isLocked && !s.ignoreLock && n.a.createElement(ce, {
						desc: Object(R.c)("Locked"),
						id: s.lockedTooltipId,
						onMouseEnter: () => {
							s.onShowTooltip(s.lockedTooltipId)
						},
						onMouseLeave: s.onHideTooltip
					}), t.bannedBy && t.isSpam && n.a.createElement(xe, {
						desc: Object(M.e)(s.language, t),
						id: s.spamTooltipId,
						onMouseEnter: this.onShowSpamTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.bannedBy && t.isSpam && qe(s.spamTooltipId, Object(M.e)(s.language, t)), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && n.a.createElement(me, {
						className: Object(c.a)({
							[oe.a.removed]: !!t.bannedBy
						}),
						desc: Object(M.b)(s.language),
						id: s.automodTooltipId,
						key: s.automodTooltipId,
						onMouseEnter: this.onShowAutomodTooltip,
						onMouseLeave: s.onHideTooltip
					}), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && qe(s.automodTooltipId, Object(M.b)(s.language)), Object(N.a)(t) && n.a.createElement(he, {
						desc: Object(M.d)(s.language, t.numReports),
						id: s.reportTooltipId,
						onMouseEnter: this.onShowReportTooltip,
						onMouseLeave: s.onHideTooltip
					}), Object(N.a)(t) && qe(s.reportTooltipId, Object(M.d)(s.language, t.numReports)))
				}
			}
			const Ke = e => n.a.createElement(o.Fragment, null, n.a.createElement(Y.c, {
					className: oe.a.metaText
				}), n.a.createElement(ye, null, Object(a.a)(e, "comment.stickied"))),
				qe = (e, t) => n.a.createElement(S.c, {
					tooltipId: e,
					text: t
				})
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
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/objectSelector/index.ts"),
				l = s("./node_modules/lodash/throttle.js"),
				m = s.n(l),
				p = s("./src/lib/fastdom/index.ts"),
				u = s("./src/reddit/i18n/components.tsx"),
				b = s("./src/reddit/components/CommentBodyExpander/index.m.less"),
				h = s.n(b);
			const x = .75,
				g = 10 * d.G;
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
						href: "javascript: void 0;",
						onClick: this.onShowMore
					}, n.a.createElement(u.c, null, "see more")))
				}
				componentDidUpdate() {
					const {
						expandToggled: e
					} = this.state;
					e && window && window.removeEventListener("resize", this.handleResize)
				}
				componentDidMount() {
					if (this.state.expandToggled) return null;
					this.commentElement && !this.commentElement.innerText.trim().includes("\n") && (window.addEventListener("resize", this.handleResize), this.handleResize())
				}
				componentWillUnmount() {
					window && window.removeEventListener("resize", this.handleResize)
				}
			}
			var f = v,
				O = s("./node_modules/lodash/noop.js"),
				y = s.n(O),
				E = s("./src/lib/makeCommentPermalink/index.ts"),
				C = s("./src/lib/makeCommentsPageKey/index.ts"),
				j = s("./src/lib/makeDraftKey/index.ts"),
				w = s("./src/reddit/actions/comment/index.ts"),
				I = s("./src/reddit/actions/gold/modals.ts"),
				T = s("./src/reddit/actions/modal.ts"),
				P = s("./src/reddit/actions/reportFlow.ts"),
				S = s("./src/reddit/actions/tooltip.ts"),
				k = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				_ = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				L = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				M = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				N = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				R = s("./src/reddit/components/ModModeReports/helpers.ts"),
				A = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				B = s("./src/reddit/contexts/InsideOverlay.tsx"),
				F = s("./src/reddit/contexts/PageLayer/index.tsx"),
				D = s("./src/reddit/helpers/correlationIdTracker.ts"),
				H = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				W = s("./src/reddit/helpers/overlay/index.ts"),
				V = s("./src/reddit/helpers/trackers/lightbox.ts"),
				G = s("./src/reddit/i18n/utils.ts"),
				U = s("./src/reddit/models/PostDraft/index.ts"),
				z = s("./src/reddit/selectors/activeModalId.ts"),
				K = s("./src/reddit/selectors/comments.ts"),
				q = s("./src/reddit/selectors/moderatorPermissions.ts"),
				J = s("./src/reddit/selectors/posts.ts"),
				Q = s("./src/reddit/selectors/tooltip.ts"),
				Z = s("./src/reddit/selectors/user.ts"),
				X = s("./src/reddit/components/OverflowMenu/index.tsx"),
				Y = s("./src/reddit/components/ReportFlow/index.tsx"),
				$ = s("./src/reddit/components/ShareMenu/index.tsx"),
				ee = s("./src/reddit/components/TrackingHelper/index.tsx"),
				te = s("./src/reddit/controls/Dropdown/Row.tsx"),
				se = s("./src/reddit/helpers/trackers/modTools.ts"),
				oe = s("./src/reddit/layout/row/Inline/index.tsx"),
				ne = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				re = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				ie = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ae = s("./src/reddit/icons/svgs/Flag/index.tsx"),
				de = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				ce = s("./src/reddit/icons/svgs/Save/index.m.less"),
				le = s.n(ce);
			var me = e => n.a.createElement("svg", {
					className: Object(a.a)(le.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("defs", null, n.a.createElement("path", {
					id: "".concat("save-svg", "a"),
					d: "M14 16.209l-3.403-1.486a1.52 1.52 0 0 0-1.198.002L6 16.21V5.5c0-.52-.087-1.024-.255-1.5H12.5c.827 0 1.5.673 1.5 1.5V16.21zM12.5 2h-11a.5.5 0 1 0 0 1C2.879 3 4 4.12 4 5.5v12.236a.999.999 0 0 0 1.4.916l4.6-2.008 4.6 2.008a1 1 0 0 0 1.4-.917V5.5C16 3.57 14.43 2 12.5 2z"
				})), n.a.createElement("g", {
					fill: "inherit",
					fillRule: "evenodd"
				}, n.a.createElement("path", {
					d: "M0 20h20V0H0z",
					fill: "none"
				}), n.a.createElement("mask", {
					id: "".concat("save-svg", "b"),
					fill: "none"
				}, n.a.createElement("use", {
					xlinkHref: "#".concat("save-svg", "a")
				})), n.a.createElement("use", {
					fill: "inherit",
					xlinkHref: "#".concat("save-svg", "a")
				}), n.a.createElement("g", {
					mask: "url(#".concat("save-svg", "b)"),
					fill: "none"
				}, n.a.createElement("path", {
					d: "M0 0h20v20H0z"
				})))),
				pe = s("./src/reddit/icons/svgs/Saved/index.tsx"),
				ue = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				be = s("./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less"),
				he = s.n(be),
				xe = s("./src/lib/lessComponent.tsx");
			const ge = xe.a.wrapped(ue.b, "DeleteIcon", he.a),
				ve = xe.a.wrapped(ae.a, "ReportIcon", he.a),
				fe = xe.a.wrapped(de.a, "PencilIcon", he.a),
				Oe = xe.a.wrapped(me, "SaveIcon", he.a),
				ye = xe.a.wrapped(pe.a, "SavedIcon", he.a),
				Ee = xe.a.wrapped(X.b, "OverflowMenu", he.a),
				Ce = xe.a.wrapped(_.c, "ModToolsFlatlist", he.a),
				je = xe.a.wrapped(N.a, "ModActionsMenu", he.a),
				we = xe.a.wrapped(te.b, "DropdownRow", he.a),
				Ie = xe.a.wrapped(oe.a, "Flatlist", he.a),
				Te = xe.a.button("Button", he.a),
				Pe = Object(F.t)(),
				Se = e => "Comment-".concat(e, "--Modal--DeleteComment"),
				ke = e => "Distinguish--Dropdown--".concat(e),
				_e = (e, t) => "".concat(e, "--").concat(t, "-overflow-menu"),
				Le = e => "View--Reports--".concat(e),
				Me = Object(i.c)({
					activeTooltipId: Q.a,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(z.a)(e) === Se(s.id)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(K.A)(e, {
							commentId: s.postId
						})
					},
					isLoggedIn: Z.G,
					moderatorPermissions: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(q.j)(e, {
							subredditId: s.subredditId
						})
					},
					currentUser: Z.i,
					modModeEnabled: F.N,
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(J.H)(e, {
							postId: s.postId
						})
					},
					postPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(J.K)(e, {
							postId: s.postId
						})
					},
					reportFlowIsOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return e.reportFlow.postOrCommentId === s.id
					},
					subreddit: F.q,
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(J.Y)(e, {
							postId: s.postId
						})
					}
				});
			class Ne extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(se.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleEdit = () => this.props.handleEdit(this.props.comment.permalink), this.handleIgnoreReports = () => {
						this.props.onIgnoreReports(), this.sendCommentReportEvent(this.props.comment.ignoreReports ? "restore_reports" : "ignore_reports")
					}, this.handleGild = async () => {
						Object(D.d)(D.a.GildingFlow), this.props.onGildClick();
						const {
							clickGildEvent: e
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(e(this.props.comment.id))
					}, this.handleModActionsMenu = () => this.props.sendEvent(Object(se.a)("comment_mod_action_menu", this.props.comment.id)), this.handleOverflowMenuClick = () => this.props.sendEvent(Object(se.a)("comment_overflow_menu", this.props.comment.id)), this.handleDelete = () => this.props.handleDelete(), this.handleReply = () => this.props.handleReply(this.props.comment.permalink), this.handleRestrictedButtonClick = () => {
						this.props.onToggleReportsDropdown(), this.sendCommentModEventWithName("comment_report_menu")
					}, this.handleSave = () => {
						this.props.comment.isSaved ? this.props.sendEvent(Object(se.a)("unsave", this.props.comment.id)) : this.props.sendEvent(Object(se.a)("save", this.props.comment.id)), this.props.onToggleSave()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(se.b)(e, this.props.comment.id)), this.sendCommentEventWithName = e => this.props.sendEvent(Object(V.b)(this.props.comment.postId, "comment_".concat(e))), this.sendCommentEventWithNameShare = () => this.sendCommentEventWithName("share"), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(se.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(se.e)(e, this.props.comment.id))
				}
				renderModTools() {
					const {
						comment: e,
						currentUser: t,
						language: s,
						moderatorPermissions: o,
						modModeEnabled: r,
						showModTools: i
					} = this.props, a = Object(H.a)(o), d = !!t && t.displayText === e.author;
					if (i && a) return r ? n.a.createElement(Ce, {
						comment: e,
						isCommentAuthor: d,
						language: s
					}) : n.a.createElement(je, {
						dropdownId: "".concat(e.id, "-profile-mod-actions-menu"),
						inCommentFlatlist: !0,
						onClick: this.handleModActionsMenu
					}, n.a.createElement(re.a, null), n.a.createElement(k.a, {
						comment: e,
						language: s,
						tooltipId: "".concat(e.id, "-profile-mod-actions-menu")
					}))
				}
				renderReportsDropdown() {
					const {
						comment: e,
						modModeEnabled: t,
						showModTools: s
					} = this.props, o = Object(R.a)(e);
					if (s && Object(R.c)(e) && !t) return n.a.createElement(_.b, {
						text: "".concat(o),
						onClick: this.handleRestrictedButtonClick,
						selected: this.props.activeTooltipId === Le(e.id),
						id: Le(e.id)
					}, n.a.createElement(A.a, {
						model: e,
						onIgnoreReports: this.handleIgnoreReports,
						tooltipId: Le(e.id)
					}), e.ignoreReports ? n.a.createElement(ne.a, null) : n.a.createElement(ie.a, null))
				}
				renderDistinguishDropdown() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: o,
						onDistinguishComment: r,
						showModTools: i
					} = this.props, a = Object(H.a)(s), d = !!t && t.displayText === e.author, c = !!t && t.isEmployee;
					if (i && d && !e.bannedBy && (c || a && !o)) return n.a.createElement(_.b, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.activeTooltipId === ke(e.id)
					}, n.a.createElement(_.a, null), n.a.createElement(M.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.activeTooltipId === ke(e.id),
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: c,
						isUserMod: a,
						onDistinguishComment: r,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: ke(e.id)
					}))
				}
				render() {
					const {
						comment: e,
						className: t,
						commentsPageKey: s,
						currentUser: o,
						deleteComment: r,
						isLoggedIn: i,
						isPendingDeletion: a,
						moderatorPermissions: d,
						postIsLocked: c,
						postPermalink: l,
						subreddit: m,
						toggleDeleteCommentModal: p
					} = this.props, b = Object(H.a)(d), h = !!o && o.displayText === e.author, x = !c && !e.isLocked || b && i, g = o && e.isGildable;
					return n.a.createElement("div", {
						className: t
					}, n.a.createElement(Ie, null, x && n.a.createElement(Te, {
						onClick: this.handleReply,
						disabled: a
					}, n.a.createElement(u.c, null, "Reply")), g && n.a.createElement(Te, {
						onClick: this.handleGild
					}, n.a.createElement(u.c, null, "Give Award")), n.a.createElement($.a, {
						dropdownId: "".concat(s, "--").concat(e.id, "-comment-share-menu"),
						permalink: Object(E.a)(l, e.id),
						sendEventWithName: this.sendCommentEventWithName,
						subreddit: m
					}, n.a.createElement(Te, {
						onClick: this.sendCommentEventWithNameShare
					}, n.a.createElement(u.c, null, "share"))), this.renderReportsDropdown(), n.a.createElement(Ee, {
						dropdownId: _e(s, e.id),
						onClick: this.handleOverflowMenuClick
					}, !h && !a && n.a.createElement(we, {
						displayText: Object(G.c)("report"),
						onClick: this.props.onReportClick
					}, n.a.createElement(ve, null)), n.a.createElement(we, {
						displayText: e.isSaved ? Object(G.c)("Unsave") : Object(G.c)("Save"),
						isSelected: e.isSaved,
						onClick: this.handleSave
					}, e.isSaved ? n.a.createElement(ye, null) : n.a.createElement(Oe, null)), h && n.a.createElement(we, {
						displayText: Object(G.c)("edit"),
						onClick: this.handleEdit
					}, n.a.createElement(fe, null)), h && n.a.createElement(we, {
						displayText: Object(G.c)("delete"),
						onClick: this.handleDelete
					}, n.a.createElement(ge, null))), this.props.isConfirmModalOpen && n.a.createElement(L.a, {
						actionText: Object(G.c)("delete"),
						cancelActionText: Object(G.c)("keep"),
						headerText: Object(G.c)("Delete comment"),
						modalText: Object(G.c)("Are you sure you want to delete your comment?"),
						onConfirm: r,
						toggleModal: p,
						trackClick: y.a,
						withOverlay: !0
					}), this.renderModTools(), this.renderDistinguishDropdown()), this.props.reportFlowIsOpen && n.a.createElement(Y.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: Y.b,
						postId: this.props.comment.postId
					}))
				}
			}
			var Re = Pe(Object(r.b)(Me, (e, t) => {
					let {
						comment: s,
						commentsPageKey: o
					} = t;
					return {
						deleteComment: () => o && e(Object(w.db)(s.id, s.postId)),
						onDistinguishComment: (t, o) => e(Object(w.S)(s.id, t, o)),
						onIgnoreReports: () => e(Object(w.pb)(s.id)),
						onGildClick: () => e(Object(I.d)(s.id)),
						onReportClick: () => e(Object(P.j)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(S.h)({
							tooltipId: ke(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(S.h)({
							tooltipId: Le(s.id)
						})),
						onToggleSave: () => e(Object(w.gb)(s.id)),
						handleDelete: () => {
							e(Object(T.i)(Se(s.id))), e(Object(S.h)({
								tooltipId: _e(o, s.id)
							}))
						},
						handleEdit: t => {
							const o = Object(C.a)(s.postId, s.id, {}),
								n = {
									commentId: s.id,
									draftKey: Object(j.a)(U.c.edit, s.id),
									text: s.bodyMD || "",
									commentMode: s.media && s.media.rteMode,
									commentsPageKey: o
								};
							e(Object(W.a)(t)), e(Object(w.ab)(n))
						},
						handleReply: t => {
							const o = Object(C.a)(s.postId, s.id, {}),
								n = {
									parentCommentId: s.id,
									commentsPageKey: o
								};
							e(Object(W.a)(t)), e(Object(w.bb)(n))
						},
						toggleDeleteCommentModal: () => e(Object(T.i)(Se(s.id)))
					}
				})(Object(ee.b)(Object(B.b)(Ne)))),
				Ae = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Be = s("./src/reddit/components/GildModal/getGildModalId.ts"),
				Fe = s("./src/reddit/components/GildModal/Loader.tsx"),
				De = s("./src/reddit/components/RichTextJson/index.tsx"),
				He = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				We = s("./src/reddit/selectors/gild.ts"),
				Ve = s("./src/reddit/components/Comments/ProfileComment/index.m.less"),
				Ge = s.n(Ve);
			const Ue = xe.a.wrapped(Ae.a, "TopMeta", Ge.a),
				ze = xe.a.div("ProfileCommentWrapper", Ge.a),
				Ke = xe.a.div("CommentBody", Ge.a),
				qe = Object(r.b)(() => Object(i.c)({
					comment: (e, t) => Object(K.n)(e, t),
					gildModalIsOpen: (e, t) => {
						let {
							commentId: s
						} = t;
						const o = Object(Be.b)(s);
						return Object(We.c)(e, o)
					},
					flair: K.e,
					language: Z.O
				})),
				Je = Object(c.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.a = qe(e => {
				const {
					comment: t,
					commentsPageKey: s,
					flair: o,
					gildModalIsOpen: r,
					isExpanded: i,
					language: c,
					showFlatlist: l,
					showModTools: m
				} = e, p = s => n.a.createElement(De.a, {
					className: s,
					content: Object(He.a)(t),
					rtJsonElementProps: Je(e)
				});
				return n.a.createElement(ze, {
					className: Object(a.a)({
						[Ge.a.isRemoved]: !!t.bannedBy
					})
				}, n.a.createElement(Ue, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: t,
					commentsPageKey: s,
					flair: o,
					language: c,
					renderedInOverlay: !1
				}), n.a.createElement("div", null, !t.isDeleted && n.a.createElement(Ke, null, i ? p() : n.a.createElement(f, {
					height: d.Fb,
					isExpanded: i
				}, p)), !t.isDeleted && l && n.a.createElement(Re, {
					comment: t,
					commentsPageKey: s,
					language: c,
					showModTools: m
				})), r && n.a.createElement(Fe.a, null))
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				p = s("./src/reddit/components/PostMeta/index.tsx"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				h = s("./src/reddit/components/Thumbnail/index.tsx"),
				x = s("./src/lib/constants/index.ts"),
				g = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/CrosspostBox/index.m.less"),
				O = s.n(f),
				y = s("./src/lib/lessComponent.tsx");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const C = y.a.div("Container", O.a),
				j = y.a.div("PostMetaWrapper", O.a),
				w = y.a.wrapped(u.c, "PostTitle", O.a),
				I = y.a.div("FlatList", O.a),
				T = y.a.div("FlatItem", O.a),
				P = y.a.span("FlatListDotSpacer", O.a),
				S = y.a.wrapped(C, "LinkContainer", O.a),
				k = y.a.div("Content", O.a),
				_ = y.a.div("ThumbnailContainer", O.a),
				L = Object(a.c)({
					isCurrentUserProfilePost: g.i,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== x.zb.TOPIC),
					language: v.O,
					post: g.M,
					shouldOpenPostInNewTab: v.S,
					subreddit: g.Y
				}),
				M = Object(r.b)(L);
			t.a = M(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: o,
					mediaProps: r,
					post: i,
					subreddit: a,
					language: d
				} = e;
				if (!i) return null;
				const c = {
						post: i,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: o,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: a,
						language: d,
						tooltipType: "".concat("CrosspostBox", "--").concat(r.isListing)
					},
					l = t;
				return i && !i.media ? n.a.createElement(S, {
					className: l
				}, n.a.createElement(k, null, n.a.createElement(j, null, n.a.createElement(p.a, c)), N(i), i.source && n.a.createElement(b.a, {
					post: i
				}), A(e)), F(e)) : n.a.createElement(C, {
					className: l
				}, n.a.createElement(j, null, n.a.createElement(p.a, c)), N(i), R(e), A(e))
			});
			const N = e => n.a.createElement(w, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: u.b.Small
				}),
				R = e => {
					const {
						mediaProps: t,
						post: s
					} = e, o = Object.assign({}, t, {
						post: s,
						crosspost: t.post
					});
					return n.a.createElement("div", null, n.a.createElement(m.a, E({}, o, {
						className: O.a.mediaContainer
					})))
				},
				A = e => {
					const {
						language: t,
						post: s
					} = e, {
						score: o
					} = s;
					return n.a.createElement(I, null, n.a.createElement(T, null, Object(d.b)(t, "posts.points.noun", o, {
						count: Object(l.b)(o)
					})), n.a.createElement(P, null), n.a.createElement(T, null, B(e)))
				},
				B = e => {
					const {
						language: t,
						post: s,
						shouldOpenPostInNewTab: o
					} = e, {
						numComments: r
					} = s;
					return n.a.createElement(i.a, {
						"data-click-id": "comments",
						to: Object(c.a)(s.permalink, !0),
						target: o ? "_blank" : void 0
					}, Object(d.b)(t, "posts.comments.noun", r, {
						count: Object(l.b)(r)
					}))
				},
				F = e => n.a.createElement(_, null, n.a.createElement(h.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/Economics/TopTippers/CommentUsername/index.m.less": function(e, t, s) {
			e.exports = {
				badge: "_17rA6EEcc6RUglkZkHnYGO",
				container: "EorVQyBcpl50FYvpH-VTa"
			}
		},
		"./src/reddit/components/Economics/TopTippers/Icon/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/config.ts");
			const i = new Set(["t2_ktrtg"]),
				a = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
						t = arguments.length > 1 ? arguments[1] : void 0;
					return "".concat(r.a.assetPath, "/img/badges/topTippers/").concat(t, "/rank-").concat(e, ".png")
				};
			t.a = e => n.a.createElement("img", {
				className: e.className,
				src: a(e.rank, e.creatorId && i.has(e.creatorId) ? e.creatorId : e.subredditId)
			})
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/constants/index.ts"),
				d = s("./src/app/strings/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/PostList/Placeholder.tsx"),
				m = s("./src/reddit/constants/postLayout.ts"),
				p = s("./src/reddit/components/EmptyProfile/EmptyListing.m.less"),
				u = s.n(p);
			const b = c.a.div("PrimaryText", u.a),
				h = c.a.wrapped(l.a, "BackgroundPlaceholder", u.a),
				x = c.a.div("Wrapper", u.a);
			var g = e => {
					let {
						children: t,
						className: s
					} = e;
					return n.a.createElement(x, {
						className: s
					}, n.a.createElement(h, {
						isLoading: !1,
						layout: m.g.Classic
					}), n.a.createElement(b, null, t))
				},
				v = s("./src/reddit/selectors/user.ts");
			const f = Object(i.c)({
				language: v.O
			});
			var O = Object(r.b)(f)(e => {
				let {
					className: t,
					language: s,
					profileName: o,
					timeSort: r = a.Qb.ALL
				} = e;
				return n.a.createElement(g, {
					className: t
				}, r === a.Qb.ALL ? Object(d.a)(s, "listings.noComments", {
					profileName: o
				}) : Object(d.a)(s, "listings.noRecentComments", {
					profileName: o
				}))
			});
			const y = Object(i.c)({
				language: v.O
			});
			var E = Object(r.b)(y)(e => {
					let {
						className: t,
						language: s,
						profileName: o,
						timeSort: r = a.Qb.ALL
					} = e;
					return n.a.createElement(g, {
						className: t
					}, r === a.Qb.ALL ? Object(d.a)(s, "listings.noPosts", {
						profileName: o
					}) : Object(d.a)(s, "listings.noRecentPosts", {
						profileName: o
					}))
				}),
				C = s("./src/reddit/components/Translated/index.tsx");
			var j = e => {
					let {
						className: t,
						verb: s
					} = e;
					return n.a.createElement(g, {
						className: t
					}, n.a.createElement(C.a, {
						msgId: "listings.privateEmpty",
						replacements: {
							verb: s
						}
					}))
				},
				w = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				I = s("./src/reddit/components/EmptyProfile/forbidden.m.less"),
				T = s.n(I),
				P = () => n.a.createElement("div", {
					className: T.a.container
				}, n.a.createElement(w.a, {
					className: T.a.hideIcon
				}), n.a.createElement("h3", {
					className: T.a.title
				}, n.a.createElement(C.a, {
					msgId: "profile.forbidden.title"
				})), n.a.createElement("p", {
					className: T.a.subtitle
				}, n.a.createElement(C.a, {
					msgId: "profile.forbidden.savedSubtitle"
				})));
			s.d(t, "b", (function() {
				return O
			})), s.d(t, "c", (function() {
				return E
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "a", (function() {
				return P
			}))
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
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/eventTools/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				c = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				m = s("./src/reddit/helpers/postEvent.ts"),
				p = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				u = s.n(p);
			const b = a.a.div("EventMetaWrapper", u.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: s,
					language: o,
					post: a
				} = e;
				if (!Object(m.a)(a)) return null;
				const p = a && a.eventInfo,
					h = Object(l.a)(a),
					x = p && Object(i.c)(p.eventStart, p.eventEnd);
				return n.a.createElement("div", {
					className: Object(r.a)(u.a.container, t, {
						[u.a.isCompact]: !!s
					})
				}, n.a.createElement(b, {
					className: u.a.eventMetaWrapper
				}, n.a.createElement(d.a, {
					language: o,
					post: a
				}), !h && x && n.a.createElement(c.a, {
					className: u.a.eventFollowButton,
					post: a,
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
				r = s("./src/lib/eventTools/index.ts"),
				i = (s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./src/app/strings/index.ts")),
				a = s("./src/lib/constants/index.ts");

			function d(e, t) {
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}
			var c = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				m = s("./src/reddit/icons/fonts/Live/index.tsx"),
				p = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				u = s.n(p),
				b = s("./src/lib/lessComponent.tsx");
			const h = b.a.span("PostEventFutureText", u.a),
				x = b.a.span("PostEventPastText", u.a),
				g = b.a.span("PostEventNowText", u.a),
				v = b.a.span("Container", u.a),
				f = b.a.wrapped(l.a, "CalendarIcon", u.a),
				O = b.a.wrapped(m.a, "LiveIcon", u.a),
				y = b.a.div("LoadingState", u.a);
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
						language: t,
						post: s
					} = this.props, {
						eventInfo: o
					} = s;
					if (!o) return null;
					const {
						eventEnd: l,
						eventIsLive: m,
						eventStart: p
					} = o, u = Object(r.e)(p, l);
					let b, E;
					if (this.state.mounted || u === r.a.Live) b = function(e, t, s, o) {
						const n = Object(r.e)(e, t),
							c = new Date(e * a.Db);
						let l;
						if (n === r.a.Live || o) return Object(i.a)(s, "posts.event.inProgress");
						n === r.a.Future ? l = Object(r.d)(e) ? Object(i.a)(s, "posts.event.today") : Object(r.b)(e) >= 5 ? d(c, s) : function(e, t) {
							return e.toLocaleDateString(t, {
								weekday: "long"
							})
						}(c, s) : n === r.a.Past && (l = Object(r.d)(e) ? Object(i.a)(s, "posts.event.today") : d(c, s));
						const m = function(e, t) {
							return e.toLocaleTimeString(t, {
								hour12: !0,
								hour: "numeric",
								minute: "2-digit"
							}).replace(/ /g, "").toUpperCase()
						}(c, s);
						return "".concat(l, " @ ").concat(m)
					}(p, l, t, m);
					else {
						const e = Object(c.a)({
							isLoading: !0
						});
						b = n.a.createElement(y, {
							className: e
						})
					}
					if (m) E = n.a.createElement(g, null, n.a.createElement(O, null), b);
					else if (u === r.a.Future) E = n.a.createElement(h, null, n.a.createElement(f, null), b);
					else {
						if (u !== r.a.Past) return null;
						E = n.a.createElement(x, null, n.a.createElement(f, null), b)
					}
					return n.a.createElement(v, {
						className: e
					}, E)
				}
			}
			t.a = E
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, s) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo",
				outboundLinkIcon: "_1zB4YvOwHPxdPEXG2CYhKB"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				c = s("./src/reddit/i18n/utils.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				p = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				u = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				b = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"),
				h = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				x = s("./src/reddit/icons/fonts/helpers.tsx"),
				g = s("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less"),
				v = s.n(g);
			var f = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
					className: "".concat(Object(x.b)("expandoMediaLightbox"), " ").concat(e.className),
					onClick: e.onClick
				}), "LightboxIcon", v.a),
				O = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				y = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				E = s("./src/reddit/icons/fonts/Link/index.tsx"),
				C = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				j = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				w = s("./src/reddit/icons/fonts/Text/index.tsx"),
				I = s("./src/reddit/models/Media/index.ts"),
				T = s("./src/reddit/components/ExpandoButton/index.m.less"),
				P = s.n(T);
			const S = Object(r.b)(null, (e, t) => ({
					toggle: () => e(Object(l.v)({
						postId: t.post.id
					}))
				})),
				k = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					const s = Object(a.a)(P.a.icon, P.a.hideOnHover);
					if (t) return n.a.createElement(u.a, {
						className: s
					});
					switch (e) {
						case I.n.GIFVIDEO:
							return n.a.createElement(y.a, {
								className: s
							});
						case I.n.IMAGE:
							return n.a.createElement(j.a, {
								className: s
							});
						case I.n.TEXT:
						case I.n.RTJSON:
							return n.a.createElement(w.a, {
								className: s
							});
						case I.n.VIDEO:
							return n.a.createElement(O.a, {
								className: s
							});
						case I.n.EMBED:
						default:
							return n.a.createElement(E.a, {
								className: s
							})
					}
				};
			t.a = S(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: o,
					isExpanded: r,
					post: l,
					toggle: u,
					useMediaIcons: x
				} = e, g = s || l, v = o && !!s;
				return g.media && !(("rtjson" === g.media.type || "text" === g.media.type) && !Object(p.a)(g)) ? n.a.createElement("button", {
					"aria-expanded": r,
					"aria-haspopup": !0,
					"aria-label": Object(c.c)("Expand content"),
					className: Object(a.a)(t, P.a.outer),
					"data-click-id": r ? "expando_close" : "expando_open",
					onClick: u
				}, r ? n.a.createElement(b.a, {
					className: P.a.icon
				}) : x ? n.a.createElement(n.a.Fragment, null, k(g.media && g.media.type, v), n.a.createElement(h.a, {
					className: Object(a.a)(P.a.icon, P.a.showOnHover)
				})) : n.a.createElement(h.a, {
					className: P.a.icon
				})) : g.source && g.source.url ? n.a.createElement(m.a, {
					"aria-label": Object(c.c)("Open external content"),
					className: Object(a.a)(t, P.a.outer),
					"data-click-id": "expando_open",
					href: g.source.url,
					isSponsored: l.isSponsored,
					source: l.source,
					target: "_blank"
				}, n.a.createElement(C.a, {
					className: Object(a.a)(P.a.icon, P.a.outboundLinkIcon)
				})) : n.a.createElement(i.a, {
					"aria-label": Object(c.c)("View content"),
					className: Object(a.a)(t, P.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(g.permalink),
					rel: "nofollow"
				}, n.a.createElement(f, {
					className: P.a.icon
				}))
			})
		},
		"./src/reddit/components/GildModal/Loader.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/loadWithRetries/index.ts");
			const r = Object(o.a)({
				getComponent: () => Object(n.a)(() => Promise.all([s.e("FramedGild~GildModal"), s.e("GildModal")]).then(s.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = r
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
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/constants/componentSizes.ts"),
				c = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/constants/screenWidths.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				u = s.n(p),
				b = s("./src/lib/lessComponent.tsx");
			const h = Object(m.t)(),
				x = Object(i.c)({
					layout: m.L
				}),
				g = Object(r.b)(x);
			class v extends n.a.Component {
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
							__html: "\n          .".concat(u.a.Component, " {\n            --layoutNavigation-considerateNav-offsetLeft: ").concat(this.props.offsetLeft, "px;\n          }\n        ")
						}
					}), this.getLargeLayoutStyle())
				}
				getLargeLayoutStyle() {
					const e = this.props.offsetLeft + 2 * d.m + d.q + d.r,
						t = l.a - e,
						s = d.g - t,
						o = l.a + s + (this.props.bladeOpen ? d.a : 0);
					return this.props.layout !== c.g.Large ? null : n.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n            @media (min-width: ".concat(o, "px) {\n              .").concat(u.a.Component, " {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ").concat(d.g + d.q + d.r, "px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(d.r, "px) / 2);\n              }\n\n              .").concat(u.a.Component, ".").concat(u.a["m-consider-sidebar"], " {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(d.g + d.q + d.r, "px) / 2);\n              }\n            }\n          ")
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
			t.a = h(g(b.a.wrapped(v, "Component", u.a)))
		},
		"./src/reddit/components/ModModeReports/index.m.less": function(e, t, s) {
			e.exports = {
				Text: "_1gNngyeM0l7oKkuGjoSTm",
				text: "_1gNngyeM0l7oKkuGjoSTm",
				Placeholder: "_1oYW-msczpGlYVcXmyEu9j",
				placeholder: "_1oYW-msczpGlYVcXmyEu9j"
			}
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/higherOrderComponents/makeAsync.tsx"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts"),
				d = s("./src/reddit/i18n/components.tsx"),
				c = s("./src/reddit/components/ModModeReports/index.m.less"),
				l = s.n(c);
			const m = i.a.div("Text", l.a),
				p = i.a.div("Placeholder", l.a),
				u = Object(r.a)({
					ErrorComponent: e => {
						let {
							className: t
						} = e;
						return n.a.createElement(p, {
							className: t
						})
					},
					getComponent: () => Object(a.a)(() => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							className: t
						} = e;
						return n.a.createElement(p, {
							className: t
						}, n.a.createElement(m, null, n.a.createElement(d.c, null, "Loading reports…")))
					}
				});
			t.a = e => n.a.createElement(u, e)
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
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/ClassicPost/index.tsx"),
				i = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-redux/es/index.js")),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/constants/gold.ts"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/components/CommentContainer/index.tsx"),
				u = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				b = s("./src/reddit/helpers/getClickInfo.ts"),
				h = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				x = s("./src/reddit/selectors/comments.ts"),
				g = s("./src/reddit/selectors/communityAwards.ts"),
				v = s("./src/reddit/selectors/experiments/goldAwardedCommentHighlight.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/OverviewChronoComment/index.m.less"),
				y = s.n(O);
			const E = Object(i.b)(() => Object(a.c)({
				comment: x.n,
				isCommentHighlightExperiment: (e, t) => {
					if (!Object(v.a)(e)) return !1;
					const s = Object(x.n)(e, t);
					return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(g.a)(e, t);
						return s && s.coinPrice >= d.g
					})
				},
				isNightmodeOn: f.Q
			}), e => ({
				openPost: t => e(Object(m.H)(t))
			}));
			var C = Object(l.a)(E(e => {
					const {
						comment: t,
						commentId: s,
						first: o,
						isCommentHighlightExperiment: r,
						isNightmodeOn: i,
						last: a,
						openPost: d,
						showModTools: l
					} = e;
					if (!t) return null;
					return n.a.createElement(p.a, {
						comment: t,
						onClick: (e, t) => {
							d({
								postOrComment: t,
								clickInfo: Object(b.a)(e),
								queryParams: {
									context: 3
								}
							})
						},
						style: {
							background: Object(h.e)(e)
						}
					}, n.a.createElement("div", {
						className: Object(c.a)(y.a.commentOuterWrapper, {
							[y.a.isLast]: a,
							[y.a.isAwarded]: r,
							[y.a.isNightmodeOn]: i
						})
					}, n.a.createElement("div", {
						className: Object(c.a)(y.a.commentWrapper, {
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
						showModTools: l,
						isExpanded: !0
					})))))
				})),
				j = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				w = s("./src/reddit/contexts/PageLayer/index.tsx"),
				I = s("./src/reddit/helpers/isComment.ts"),
				T = s("./src/reddit/components/OverviewChronoList/ListItem.m.less"),
				P = s.n(T),
				S = s("./src/lib/lessComponent.tsx");

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var _ = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const L = Object(w.t)({
					currentProfileName: w.h,
					isCommentsPage: w.w,
					isCommentPermalink: w.v,
					isProfilePostListing: w.H,
					pageLayer: e => e
				}),
				M = S.a.wrapped(j.a, "OverviewCommentPost", P.a),
				N = S.a.wrapped(r.default, "ClassicPost", P.a);
			t.a = L(e => {
				const {
					itemId: t,
					isFirstInCommentList: s,
					isLastInCommentList: o,
					allowModToolsUnderComments: r,
					height: i,
					width: a
				} = e, d = _(e, ["itemId", "isFirstInCommentList", "isLastInCommentList", "allowModToolsUnderComments", "height", "width"]);
				return Object(I.a)(t) ? s ? n.a.createElement(n.a.Fragment, null, n.a.createElement(M, k({}, d, {
					availableWidth: a,
					commentId: t
				})), n.a.createElement(C, {
					commentId: t,
					first: s,
					last: o,
					showModTools: r
				})) : n.a.createElement(C, {
					commentId: t,
					first: s,
					last: o,
					showModTools: r
				}) : n.a.createElement(N, k({}, d, {
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
				postTopMetaMetaSeparator: "_2IhK-xvBLjMsX4HZ-T6j-W",
				MetaSeparator: "_3RjYJMG6TaMnSwb88daQ7W",
				metaSeparator: "_3RjYJMG6TaMnSwb88daQ7W"
			}
		},
		"./src/reddit/components/OverviewCommentPost/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/i18n/components.tsx"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/controls/InternalLink/index.tsx"),
				u = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				b = s("./src/reddit/selectors/comments.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/PostContainer/index.tsx"),
				v = s("./src/reddit/components/PostTitle/index.tsx"),
				f = s("./src/reddit/components/PostTopMeta/index.tsx"),
				O = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				y = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				E = s.n(y),
				C = s("./src/reddit/components/OverviewCommentPost/index.m.less"),
				j = s.n(C);
			const w = l.a.wrapped(p.a, "InternalLink", j.a),
				I = l.a.div("Wrapper", j.a),
				T = l.a.div("Row", j.a),
				P = l.a.wrapped(O.a, "CommentIcon", j.a),
				S = l.a.div("TitleContainer", j.a),
				k = l.a.div("PostTitleContainer", j.a),
				_ = l.a.wrapped(v.c, "PostTitle", j.a),
				L = l.a.wrapped(f.d, "PostTopMeta", j.a),
				M = l.a.wrapped(f.a, "MetaSeparator", j.a),
				N = Object(r.b)(() => Object(a.c)({
					comment: b.n,
					language: x.O,
					post: h.M,
					subredditOrProfile: h.Y
				})),
				R = e => {
					const {
						language: t,
						post: s,
						subredditOrProfile: r
					} = e;
					if (r) return n.a.createElement(o.Fragment, null, n.a.createElement(M, null), n.a.createElement(L, {
						language: t,
						metaSeparatorClassName: j.a.postTopMetaMetaSeparator,
						post: s,
						showSub: !0,
						showTimestamp: !1,
						subredditOrProfile: r
					}))
				},
				A = e => {
					const {
						comment: t,
						profileName: s
					} = e;
					if (!t) return null;
					const o = s || t.author;
					return n.a.createElement(w, {
						"data-click-id": "user",
						to: "/user/".concat(o, "/")
					}, o)
				};
			t.a = Object(c.a)(N(Object(m.b)(e => {
				const {
					className: t,
					eventFactory: s,
					onClickPost: o,
					post: r
				} = e;
				return n.a.createElement(g.a, {
					className: Object(d.a)(E.a.compactPostStyles, j.a.overviewCommentPost, {
						[j.a.banned]: !!e.post.bannedBy,
						[j.a.reported]: !e.post.bannedBy && !!e.post.numReports && e.post.numReports > 0
					}, t),
					post: r,
					onClick: o,
					eventFactory: s
				}, n.a.createElement(I, {
					style: {
						background: Object(u.e)(e)
					}
				}, n.a.createElement(T, null, n.a.createElement(P, null), n.a.createElement(S, null, A(e), n.a.createElement(i.c, null, " commented on "), n.a.createElement(k, null, n.a.createElement(_, {
					outboundLinkClassName: j.a.postTitleOutboundLink,
					post: r,
					size: v.b.Small,
					titleClassName: j.a.postTitleTitle
				})), R(e)))))
			})))
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				d = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				c = s.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: o,
					onClick: i,
					post: d,
					redditStyle: p,
					theme: u
				} = e, b = m(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return n.a.createElement("div", l({
					className: Object(r.a)(c.a.backgroundWrapper, s),
					style: Object(a.c)(o, e),
					onClick: i
				}, b), t)
			})
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/i18n/components.tsx"),
				a = s("./src/reddit/i18n/utils.ts"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/app/strings/index.ts"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/helpers/isRemoved.ts"),
				v = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				f = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				O = s("./src/reddit/models/Post/index.ts"),
				y = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				C = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				j = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				w = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				I = s("./src/reddit/icons/fonts/Report/index.tsx"),
				T = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				P = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				S = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				k = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				_ = s("./src/reddit/components/PostBadges/index.m.less"),
				L = s.n(_);

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const N = e => n.a.createElement("span", M({
					className: L.a.removalReason
				}, e), e.children),
				R = Object(c.d)("posts.archived"),
				A = Object(c.d)("modTools.commentsLocked"),
				B = Object(c.d)("modTools.moderatorOf"),
				F = Object(c.d)("modTools.stickiedPost"),
				D = Object(c.d)("modTools.pinnedPost"),
				H = (e, t, s) => {
					const o = "PostBadges--".concat(e, "--").concat(t);
					return s ? "".concat(o, "--").concat(s) : o
				},
				W = Object(x.t)({
					isProfilePostListing: x.H,
					isSubreddit: x.I,
					pageLayer: e => e
				}),
				V = Object(d.c)({
					isPinned: (e, t) => {
						let {
							post: s
						} = t;
						return Object(y.s)(e, {
							postId: s.id
						})
					},
					modModeEnabled: x.N
				}),
				G = Object(r.b)(V, (e, t) => ({
					onHideTooltip: () => e(Object(p.i)()),
					onOpenRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(p.f)({
						tooltipId: t
					}))
				}));
			t.a = W(G(e => {
				let {
					className: t,
					displayText: s,
					isSubreddit: r,
					inSubredditOrProfile: d,
					isCompactPinnedPost: c,
					isPinned: p,
					isProfilePostListing: x,
					language: y,
					modModeEnabled: _,
					onHideTooltip: W,
					onOpenRemovalReasonModal: V,
					onShowTooltip: G,
					post: U,
					tooltipType: z
				} = e;
				const K = {
						caretOnTop: !1
					},
					q = U.isRemoved && !U.modRemovalReason && !U.modNote && U.belongsTo.type === h.a.SUBREDDIT,
					J = H("Approve", U.id, z),
					Q = H("Archived", U.id, z),
					Z = H("Automod", U.id, z),
					X = H("Lock", U.id, z),
					Y = H("Mod", U.id, z),
					$ = H("Remove", U.id, z),
					ee = H("Report", U.id, z),
					te = H("Spam", U.id, z),
					se = H("Sticky", U.id, z),
					oe = H("Pinned", U.id, z);
				return n.a.createElement("div", {
					className: t
				}, d && s && U.distinguishType === m.C.MODERATOR && n.a.createElement(o.Fragment, null, n.a.createElement(k.a, {
					className: L.a.modIcon,
					desc: B(y, {
						displayText: s
					}),
					id: Y,
					onMouseEnter: G(Y),
					onMouseLeave: W
				}), n.a.createElement(u.c, M({
					tooltipId: Y,
					text: B(y, {
						displayText: s
					})
				}, K))), U.isArchived && n.a.createElement(o.Fragment, null, n.a.createElement(C.a, {
					className: L.a.archivedIcon,
					desc: R(y),
					id: Q,
					onMouseEnter: G(Q),
					onMouseLeave: W
				}), n.a.createElement(u.c, M({
					tooltipId: Q,
					text: R(y)
				}, K))), U.isLocked && n.a.createElement(o.Fragment, null, n.a.createElement(j.a, {
					className: L.a.lockIcon,
					desc: A(y),
					id: X,
					onMouseEnter: G(X),
					onMouseLeave: W
				}), n.a.createElement(u.c, M({
					tooltipId: X,
					text: A(y)
				}, K))), r && Object(O.k)(U) && !c && n.a.createElement(o.Fragment, null, n.a.createElement(P.a, {
					className: L.a.stickyIcon,
					desc: F(y),
					id: se,
					onMouseEnter: G(se),
					onMouseLeave: W
				}), n.a.createElement(u.c, M({
					tooltipId: se,
					text: F(y)
				}, K))), x && p && n.a.createElement(o.Fragment, null, n.a.createElement(P.a, {
					className: L.a.stickyIcon,
					desc: D(y),
					id: oe,
					onMouseEnter: G(oe),
					onMouseLeave: W
				}), n.a.createElement(u.c, M({
					tooltipId: oe,
					text: D(y)
				}, K))), (U.isApproved || U.approvedBy) && n.a.createElement(o.Fragment, null, n.a.createElement(E.a, {
					className: L.a.approveIcon,
					desc: Object(v.a)(y, U),
					id: J,
					onMouseEnter: G(J),
					onMouseLeave: W
				}), n.a.createElement(u.c, M({
					tooltipId: J,
					text: Object(v.a)(y, U)
				}, K))), Object(g.a)(U) && n.a.createElement(o.Fragment, null, n.a.createElement(w.a, {
					className: L.a.removeIcon,
					desc: Object(v.c)(y, U),
					id: $,
					onMouseEnter: G($),
					onMouseLeave: W
				}), q && n.a.createElement(b.a, {
					className: L.a.addRemovalReason,
					onClick: V,
					text: Object(a.c)("Add a removal reason")
				}), (U.modRemovalReason || U.modNote) && n.a.createElement(N, {
					onMouseEnter: G($),
					onMouseLeave: W
				}, n.a.createElement(i.c, null, "Removal reason")), n.a.createElement(u.c, M({
					tooltipId: $,
					text: Object(v.c)(y, U)
				}, K))), U.bannedBy && U.isSpam && n.a.createElement(o.Fragment, null, n.a.createElement(T.a, {
					className: L.a.spamIcon,
					desc: Object(v.e)(y, U),
					id: te,
					onMouseEnter: G(te),
					onMouseLeave: W
				}), n.a.createElement(u.c, M({
					tooltipId: te,
					text: Object(v.e)(y, U)
				}, K))), ("AutoModerator" === U.approvedBy || "AutoModerator" === U.bannedBy) && n.a.createElement(o.Fragment, null, n.a.createElement(S.a, {
					className: Object(l.a)(L.a.automoderator, !!U.bannedBy && L.a.isRemoved),
					desc: Object(v.b)(y),
					id: Z,
					onMouseEnter: G(Z),
					onMouseLeave: W
				}), n.a.createElement(u.c, M({
					tooltipId: Z,
					text: Object(v.b)(y)
				}, K))), Object(f.a)(U) && !_ && n.a.createElement(o.Fragment, null, n.a.createElement(I.a, {
					className: L.a.reportIcon,
					desc: Object(v.d)(y, U.numReports),
					id: ee,
					onMouseEnter: G(ee),
					onMouseLeave: W
				}), n.a.createElement(u.c, M({
					tooltipId: ee,
					text: Object(v.d)(y, U.numReports)
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
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/AdViewability/index.tsx"),
				a = s("./src/reddit/components/GildModal/getGildModalId.ts"),
				d = s("./src/reddit/components/GildModal/Loader.tsx"),
				c = s("./src/reddit/connectors/PostViewable/index.ts"),
				l = s("./src/reddit/models/Media/index.ts"),
				m = s("./src/reddit/selectors/gild.ts"),
				p = s("./src/reddit/selectors/video.ts"),
				u = s("./src/lib/classNames/index.ts"),
				b = s("./src/higherOrderComponents/withClickTracking.tsx"),
				h = s("./src/reddit/components/PostContainer/index.m.less"),
				x = s.n(h),
				g = s("./src/lib/lessComponent.tsx");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var f = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const O = g.a.div("WrappedPost", x.a),
				y = Object(r.c)({
					clickTrackingId: (e, t) => {
						let {
							post: s
						} = t;
						return s.id
					},
					buffering: (e, t) => {
						let {
							post: s
						} = t;
						return Object(p.a)(e, {
							postId: s.id
						})
					},
					gildModalIsOpen: (e, t) => {
						let {
							isOverlay: s,
							post: o
						} = t;
						const n = Object(a.b)(o.postId, s);
						return Object(m.c)(e, n)
					},
					playing: (e, t) => {
						let {
							post: s
						} = t;
						return Object(p.e)(e, {
							postId: s.id
						})
					},
					continuousViewingStartedAt: (e, t) => {
						let {
							post: s
						} = t;
						return Object(p.c)(e, {
							postId: s.id
						})
					}
				}),
				E = Object(c.a)(y),
				C = e => {
					const t = Object(b.d)(e.target, e.currentTarget),
						s = Object(b.b)(e.target, e.currentTarget, b.a.buttons);
					return "subreddit" !== t && s
				};
			class j extends n.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const e = this.props,
						{
							pixelPostHasEnteredView: t,
							pixelPostHasExitedView: s,
							afterClickTracking: o,
							buffering: r,
							children: a,
							className: c,
							continuousViewingStartedAt: m,
							gildModalIsOpen: p,
							makePostContainerId: b,
							playing: h,
							post: x,
							onClick: g,
							onPostContentClick: y,
							onPostViewable: E,
							isOverlay: j
						} = e,
						w = f(e, ["pixelPostHasEnteredView", "pixelPostHasExitedView", "afterClickTracking", "buffering", "children", "className", "continuousViewingStartedAt", "gildModalIsOpen", "makePostContainerId", "playing", "post", "onClick", "onPostContentClick", "onPostViewable", "isOverlay"]),
						I = n.a.createElement(O, v({}, w, {
							onMouseUp: e => {
								0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
									this.cancelClick = !1
								}, 1e3))
							},
							onClick: e => {
								!this.cancelClick && e.button < 2 && (o(() => g && g(e, x))(e), y && C(e) && y(e, x))
							},
							className: Object(u.a)(c, "Post ".concat(x.id), {
								promotedlink: x.isSponsored
							}),
							id: b ? b(x.id) : x.id,
							tabIndex: -1
						}), a, p && n.a.createElement(d.a, null)),
						T = !!x.media && x.media.type === l.n.VIDEO;
					return x.isSponsored || T ? n.a.createElement(i.a, {
						onViewable: e => E(x, e),
						pixelPostHasEnteredView: e => t(x, e),
						pixelPostHasExitedView: e => s(x, e),
						children: I,
						trackVideoMetrics: T && !r && h,
						continuousViewingStartedAt: m
					}) : I
				}
			}
			t.a = E(Object(b.c)(j))
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
				return h
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Translated/index.tsx"),
				m = s("./src/reddit/helpers/trackers/postCollection.ts"),
				p = s("./src/reddit/components/PostFollow/index.m.less"),
				u = s.n(p);
			class b extends n.a.Component {
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
						} = this.props, r = !!o;
						n(e ? Object(m.o)({
							postId: s,
							isFollowed: r
						}) : Object(m.g)({
							postId: s,
							isFollowed: r
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
					} = this.props, o = this.state.isHovered, r = s.isFollowed;
					let i = r ? "collection.follow.followed" : "collection.follow.follow";
					return r && o && (i = "collection.follow.unfollow"), n.a.createElement("button", {
						className: Object(a.a)(u.a.collectionFollow, {
							[u.a.isFollowed]: !!s.isFollowed,
							[u.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, n.a.createElement(l.a, {
						msgId: i
					}))
				}
			}
			const h = Object(r.b)(() => Object(i.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(d.B)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(c.b)(b))
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return K
			})), s.d(t, "a", (function() {
				return J
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/history/esm/history.js"),
				n = s("./node_modules/lodash/debounce.js"),
				r = s.n(n),
				i = s("./node_modules/lodash/last.js"),
				a = s.n(i),
				d = s("./node_modules/react/index.js"),
				c = s.n(d),
				l = s("./node_modules/react-dom/index.js"),
				m = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				b = s("./src/lib/fastdom/index.ts"),
				h = s("./src/lib/lessComponent.tsx"),
				x = s("./src/lib/opener/index.ts"),
				g = s("./src/lib/sentry/index.ts"),
				v = s("./src/reddit/components/PostList/LoadMore.tsx"),
				f = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				O = s("./src/reddit/components/Scroller/Simple.tsx"),
				y = s("./src/reddit/components/Translated/index.tsx"),
				E = s("./src/reddit/constants/adEvents.ts"),
				C = s("./src/reddit/constants/componentSizes.ts"),
				j = s("./src/reddit/constants/postLayout.ts"),
				w = s("./src/reddit/controls/InternalLink/index.tsx"),
				I = s("./src/reddit/helpers/getClickInfo.ts"),
				T = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				P = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				S = s("./src/reddit/models/Media/index.ts"),
				k = s("./src/reddit/helpers/brandSafety/index.ts"),
				_ = s("./src/lib/LRUCache/index.ts"),
				L = s("./src/telemetry/index.ts"),
				M = s("./src/telemetry/models/Timer.ts"),
				N = s("./src/reddit/components/PostList/index.m.less"),
				R = s.n(N),
				A = function(e, t) {
					var s = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
					}
					return s
				};
			const B = 500,
				F = new _.a(B),
				D = new _.a(B),
				H = new _.a(B),
				W = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				V = h.a.div("SeeMore", R.a),
				G = h.a.wrapped(P.a, "ArrowRight", R.a),
				U = (e, t, s, o, n, r, i, a) => {
					const d = s ? "last-".concat(o, "-").concat(n) : "",
						c = "entered-".concat(e, "-").concat(t, "-").concat(d, "-").concat(r);
					let l = F.get(c);
					return void 0 === l && (l = () => {
						s && i.onBottomViewed(o, n), i.trackOnPostEnteredViewport(e, t, a)
					}, F.set(c, l)), l
				},
				z = (e, t, s, o) => {
					const n = "left-".concat(e, "-").concat(t);
					let r = D.get(n);
					return void 0 === r && (r = n => {
						s.trackOnPostExitedViewport(e, t, n, o)
					}, D.set(n, r)), r
				},
				K = (e, t) => {
					const s = "click-".concat(e);
					let o = H.get(s);
					return void 0 === o && (o = (e, s) => {
						s.isSponsored && t.fireAdPixelsOfType(s, E.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(x.d)(s.source.outboundUrl, x.c.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(I.a)(e)
						})
					}, H.set(s, o)), o
				},
				q = (e, t) => {
					const s = [...e];
					return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
						s.splice(e, 0, t[e])
					}), s
				};
			class J extends c.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new _.a(B), this.updateScrollerRef = e => {
						const t = e && Object(l.findDOMNode)(e);
						this.scrollerRef = t instanceof Element ? t : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						this.dispatchBrandSafety(e)
					}, this.dispatchBrandSafety = r()(e => {
						let {
							getVisibleItemsInViewport: t
						} = e;
						const {
							postsById: s,
							subredditsById: o
						} = this.props, n = t(), r = [];
						n.forEach(e => r.push(e.id));
						const i = r.map(e => s[e]).filter(Boolean),
							a = i.map(e => o[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(k.a)(i, a))
					}, u.d, {
						leading: !0
					})
				}
				componentWillMount() {
					this.timerId && L.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = L.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = L.c.end(this.timerId);
						setTimeout(() => Object(L.b)(u.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				componentWillUpdate(e) {
					this.timerId && L.c.cancel(this.timerId), e.postIds.length && (this.timerId = L.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (b.a.read(() => this.checkAndSendScreenview()), this.timerId && L.c.has(this.timerId)) {
						const e = L.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(L.b)(u.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && L.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && a()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return L.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const o = L.c.end(e);
					setTimeout(() => {
						s(t(o, M.TimerType.InApp))
					}, 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s
					} = this.props;
					return !s && (Boolean(e) || !1 !== t)
				}
				hasPosts() {
					return this.props.postIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						postIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const t = this.props,
						{
							postsById: s
						} = t,
						o = A(t, ["postsById"]),
						{
							postsById: n
						} = e,
						r = A(e, ["postsById"]),
						i = Object.keys(o),
						a = Object.keys(r);
					if (a.length !== i.length) return !0;
					if (a.some(e => o[e] !== r[e])) return !0;
					if (s === n) return !1;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: t
						} = this.props;
						return this.props.postIds.some((o, r) => {
							const i = 0 === r;
							return t({
								isFirstPost: i,
								layout: e,
								post: s[o]
							}) !== t({
								isFirstPost: i,
								layout: e,
								post: n[o]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, o) {
					const {
						currentProfileName: n,
						isCommentPermalink: r,
						isCommentsPage: i,
						isFrontpage: a,
						isProfilePostListing: d,
						isTopicPage: l,
						listingKey: m,
						listingName: p,
						pageLayer: b,
						pageReferrer: h,
						postClickEvent: x,
						redditStyle: v
					} = this.props, f = 0 === t, O = s ? "last-index" : "", y = "post-".concat(o, "-").concat(e, "-").concat(t, "-").concat(O, "-").concat(p, "-").concat(m, "-").concat(h);
					let E;
					if (void 0 === (E = this.scrollChildCache.get(y))) {
						const {
							inSubredditOrProfile: O,
							postsById: C
						} = this.props, w = C[e], I = w.crosspostRootId && C[w.crosspostRootId] ? C[w.crosspostRootId] : w;
						w.crosspostRootId && !C[w.crosspostRootId] && g.c.withScope(e => {
							e.setExtra("errorType", u.q.API), e.setExtra("description", "Post ".concat(w.id, " is crosspost of ").concat(w.crosspostRootId, ", but ") + "".concat(w.crosspostRootId, " details are missing in the state")), g.c.captureMessage("Crosspost parent details are missing")
						});
						const P = this.props.postComponentForLayout({
								isCrosspost: !!w.crosspostRootId,
								isFirstPost: f,
								layout: o,
								post: I
							}),
							k = "post-list-item-[layout: ".concat(o, "]-[postId: ").concat(e, "]"),
							_ = U(e, o, s, m, p, h, this.props, t),
							L = z(e, o, this.props, t),
							M = K(e, this.props),
							N = I.media && I.media.type === S.n.EMBED ? I.media.provider : null;
						E = {
							estHeight: Object(T.c)(w, o),
							id: e,
							isFocusable: !(!I.media || o !== j.g.Large) && (S.d.has(I.media.type) && (!N || !S.q.has(N)) && !I.isSpoiler && !I.isNSFW),
							trackOnEnteredViewport: _,
							trackOnExitedViewport: L,
							render: t => {
								let {
									className: o,
									height: u,
									width: h,
									remeasure: g,
									setScrollerChildRef: y,
									shouldLoadInitially: E
								} = t;
								return c.a.createElement(P, {
									className: o,
									currentProfileName: n,
									key: k,
									availableWidth: h,
									eventFactory: x,
									first: f,
									forceLoadMedia: E,
									inSubredditOrProfile: O,
									isCommentPermalink: r,
									isCommentsPage: i,
									isFrontpage: a,
									isProfilePostListing: d,
									isTopicPage: l,
									listingKey: m,
									listingName: p,
									pageLayer: b,
									last: s,
									onClickPost: M,
									onSizeChanged: g,
									postId: e,
									redditStyle: v,
									sendEvent: this.props.sendEvent,
									scrollerItemRef: y
								})
							}
						}, this.scrollChildCache.set(y, E)
					}
					return E
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return c.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: s,
						layout: o,
						onTryAgain: n,
						postListPlaceholderComponent: r
					} = this.props;
					if (s) return;
					const i = r;
					return c.a.createElement("div", {
						className: R.a.placeholder
					}, c.a.createElement(i, {
						className: t,
						isLoading: !e,
						layout: o
					}), !!e && c.a.createElement(f.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: o,
						loadMoreClassName: n,
						onLoadMore: r
					} = this.props;
					if (!s) return c.a.createElement("div", {
						className: R.a.placeholder
					}, c.a.createElement(v.a, {
						className: n,
						isLoading: !!t,
						layout: o,
						countOverride: W[o]
					}), !!e && c.a.createElement(f.a, {
						apiError: e,
						onTryAgain: r
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: n,
						isTruncated: r,
						layout: i,
						location: a,
						loadMore: l,
						postIds: b,
						onLoadMore: h
					} = this.props;
					let x = b.map((e, t, s) => {
						const o = t === b.length - 1;
						return this.scrollChildForPost(e, t, o, i)
					});
					n && (x = q(x, n));
					const g = this.props.measureScrollFPS ? "post-listings-".concat(i) : void 0,
						v = a ? Object(o.e)(a) : null,
						f = v || r;
					return c.a.createElement(d.Fragment, null, c.a.createElement(O.b, {
						innerRef: this.updateScrollerRef,
						className: f ? R.a.truncatedPostList : Object(p.a)(R.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: l && l.token ? l.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: h,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: g,
						viewportTopPadding: C.f
					}, x), v && c.a.createElement(V, {
						className: R.a.seeMoreButton
					}, c.a.createElement(w.a, {
						className: R.a.seeMorePostsText,
						to: Object(m.a)(v, {
							type: u.Lb.Posts
						})
					}, c.a.createElement(y.a, {
						msgId: "search.seeMorePosts"
					}), c.a.createElement(G, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			J.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: c.a.Fragment
			}
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				i = s("./src/reddit/components/Media/index.tsx");
			t.a = e => {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? n.a.createElement(r.a, {
					postId: t.crosspostRootId,
					mediaProps: Object.assign({}, e, {
						crosspost: t,
						primaryContent: !1
					})
				}) : n.a.createElement(i.a, Object.assign({}, e, {
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/AwardBadges/index.tsx"),
				i = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				a = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = s("./src/reddit/components/PostBadges/index.tsx"),
				l = s("./src/reddit/components/PostTopMeta/index.tsx"),
				m = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				p = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				x = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/models/Subreddit/index.ts"),
				v = s("./src/reddit/components/PostMeta/index.m.less"),
				f = s.n(v);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: o,
					isCurrentUserProfilePost: v,
					isOverlay: O,
					isTopicPage: y,
					language: E,
					post: C,
					shouldShowSubscribeButton: j,
					subredditOrProfile: w,
					tooltipType: I
				} = e, T = !!y;
				return n.a.createElement("div", {
					className: f.a.metaContainer
				}, !o && !C.isSponsored && w && n.a.createElement(a.a, {
					postId: C.id,
					subredditName: w.name
				}, n.a.createElement(p.a, {
					className: f.a.subredditName,
					"data-click-id": "subreddit",
					to: w.url
				}, w.displayText)), w && w.isQuarantined && n.a.createElement(m.a, null), !o && !C.isSponsored && w && j && !v && n.a.createElement(u.a, {
					getEventFactory: e => Object(x.f)(C.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: w.name,
						type: Object(g.e)(w) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: C.id,
					small: !0
				}), !o && !C.isSponsored && n.a.createElement(h.b, null), !o && !C.isSponsored && n.a.createElement(d.h, {
					type: C.belongsTo.type,
					id: C.belongsTo.id
				}), n.a.createElement(l.d, {
					className: f.a.postTopMeta,
					flairStyleTemplate: t,
					language: E,
					post: C,
					tooltipType: I
				}), n.a.createElement(c.a, {
					displayText: w ? w.displayText : null,
					inSubredditOrProfile: !!o,
					language: E,
					post: C,
					tooltipType: I
				}), w && n.a.createElement(i.a, {
					className: f.a.donationAmount,
					contentId: C.id,
					subredditId: w.id
				}), !T && n.a.createElement(r.a, {
					hideCta: s,
					isOverlay: O,
					thing: C,
					tooltipType: I
				}))
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
				CheckboxMenuItem: "_9csa2XobkeFZUX8Fc_FNY",
				checkboxMenuItem: "_9csa2XobkeFZUX8Fc_FNY"
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "h", (function() {
				return v
			})), s.d(t, "i", (function() {
				return f
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "e", (function() {
				return E
			}));
			var o = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				r = s("./src/reddit/controls/Dropdown/Row.tsx"),
				i = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				a = s("./src/reddit/icons/fonts/Envelope/index.tsx"),
				d = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				c = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				l = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				m = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				p = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				u = s.n(p);
			const b = o.a.wrapped(i.a, "Icon", u.a),
				h = o.a.wrapped(a.a, "Icon", u.a),
				x = o.a.wrapped(d.a, "Icon", u.a),
				g = o.a.wrapped(c.a, "Icon", u.a),
				v = o.a.wrapped(l.a, "Icon", u.a),
				f = o.a.wrapped(m.a, "Icon", u.a),
				O = o.a.wrapped(n.b, "CheckboxMenuItem", u.a),
				y = o.a.wrapped(r.b, "DropdownRow", u.a),
				E = o.a.div("ListContainer", u.a)
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/PostLeftRail/index.tsx"),
				i = s("./src/reddit/components/VerticalVotes/index.tsx"),
				a = s("./src/reddit/controls/Checkbox/index.tsx"),
				d = s("./src/reddit/helpers/isPost.ts"),
				c = s("./src/reddit/helpers/showReportIndicator/index.ts");
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: o = !1,
					isCheckboxSelected: l = !1,
					toggleCheckbox: m = (() => {}),
					flairStyleTemplate: p,
					redditStyle: u
				} = e, b = "upvote-button-".concat(t.id);
				return n.a.createElement(r.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(c.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: u
				}, o && n.a.createElement(a.a, {
					isCheckboxSelected: l,
					toggleCheckbox: m
				}), n.a.createElement(i.a, {
					flairStyleTemplate: p,
					model: t,
					onVoteClick: s,
					redditStyle: u,
					upvoteTooltipId: b
				}))
			}
		},
		"./src/reddit/components/ProfileItemList/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/lodash/last.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-dom/index.js"),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/opener/index.ts"),
				l = s("./src/reddit/constants/adEvents.ts"),
				m = s("./src/reddit/components/PostList/LoadMore.tsx"),
				p = s("./src/reddit/components/PostList/Placeholder.tsx"),
				u = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				b = s("./src/reddit/components/Scroller/Simple.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				x = s("./src/reddit/helpers/getClickInfo.ts"),
				g = s("./src/reddit/helpers/isComment.ts"),
				v = s("./src/lib/LRUCache/index.ts"),
				f = s("./src/telemetry/index.ts"),
				O = s("./src/telemetry/models/Timer.ts"),
				y = s("./src/reddit/components/PostList/index.m.less"),
				E = s.n(y);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var j = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const w = 500,
				I = new v.a(w),
				T = new v.a(w),
				P = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				S = (e, t, s, o, n, r) => {
					const i = s ? "last-".concat(o, "-").concat(n) : "",
						a = "entered-".concat(e, "-").concat(t, "-").concat(i);
					let d = I.get(a);
					return void 0 === d && (d = () => {
						s && r.onBottomViewed(o, n), r.trackOnPostEnteredViewport(e, t)
					}, I.set(a, d)), d
				},
				k = (e, t) => {
					const s = "click-".concat(e);
					let o = T.get(s);
					return void 0 === o && (o = (e, s) => {
						s.isSponsored && t.fireAdPixelsOfType(s, l.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(c.d)(s.source.outboundUrl, c.c.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(x.a)(e)
						})
					}, T.set(s, o)), o
				};
			class _ extends i.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new v.a(w), this.updateScrollerRef = e => {
						const t = e && Object(a.findDOMNode)(e);
						this.scrollerRef = t instanceof Element ? t : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}
				}
				componentWillMount() {
					this.timerId && f.c.cancel(this.timerId), this.props.itemIds.length && (this.timerId = f.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = f.c.end(this.timerId);
						setTimeout(() => Object(f.b)(d.l.Redesign, {
							type: "mount",
							component: "overviewChronoList",
							duration: e
						}), 0)
					}
				}
				componentWillUpdate(e) {
					this.timerId && f.c.cancel(this.timerId), e.itemIds.length && (this.timerId = f.c.start()), (e.listingKey !== this.props.listingKey || e.itemIds.length !== this.props.itemIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (this.checkAndSendScreenview(), this.timerId && f.c.has(this.timerId)) {
						const e = f.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(f.b)(d.l.Redesign, {
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
					setTimeout(() => s(t(o, O.TimerType.InApp)), 0)
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
					const t = this.props,
						{
							itemIds: s
						} = t,
						o = j(t, ["itemIds"]),
						{
							itemIds: n
						} = e,
						r = j(e, ["itemIds"]),
						i = Object.keys(o),
						a = Object.keys(r);
					return a.length !== i.length || !!a.some(e => o[e] !== r[e])
				}
				scrollChildForItem(e, t, s, o, n, r) {
					const {
						listingKey: a,
						listingName: d,
						postClickEvent: c
					} = this.props, l = s ? "last-index" : "", m = "post-".concat(r, "-").concat(e, "-").concat(t, "-").concat(l, "-").concat(d, "-").concat(a);
					let p;
					if (void 0 === (p = this.scrollChildCache.get(m))) {
						const {
							inSubredditOrProfile: t,
							itemIdToPostId: l
						} = this.props, u = l[e], b = "overview-chrono-list-item-[layout: ".concat(r, "]-[itemId: ").concat(e, "]"), h = S(u, r, s, a, d, this.props), x = {
							key: b,
							eventFactory: c,
							inSubredditOrProfile: t,
							isFirstInCommentList: o,
							isLastInCommentList: n,
							isOverlay: !1,
							itemId: e,
							last: s,
							layout: r,
							onClickPost: k(e, this.props),
							postId: u
						}, g = this.props.itemComponent;
						p = {
							estHeight: this.props.estimateItemHeight(e, r, o),
							id: e,
							isFocusable: !1,
							trackOnEnteredViewport: h,
							render: e => i.a.createElement(g, C({}, x, e))
						}, this.scrollChildCache.set(m, p)
					}
					return p
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return i.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						layout: s,
						onTryAgain: o
					} = this.props;
					return i.a.createElement("div", {
						className: E.a.placeholder
					}, i.a.createElement(p.a, {
						className: t,
						isLoading: !e,
						layout: s
					}), !!e && i.a.createElement(u.a, {
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
					return i.a.createElement("div", {
						className: E.a.placeholder
					}, i.a.createElement(m.a, {
						isLoading: !!t,
						layout: s,
						countOverride: P[s]
					}), !!e && i.a.createElement(u.a, {
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
					} = this.props, r = o.map((s, n, r) => {
						const i = n === o.length - 1,
							a = n && o[n - 1],
							d = !i && o[n + 1],
							c = !!Object(g.a)(s) && (!a || !Object(g.a)(a) || e[a].postId !== e[s].postId),
							l = !!Object(g.a)(s) && (!d || !Object(g.a)(d) || e[d].postId !== e[s].postId);
						return this.scrollChildForItem(s, n, i, c, l, t)
					});
					return i.a.createElement("div", null, i.a.createElement(b.b, {
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
						viewportTopPadding: h.f + h.s
					}, r), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			t.a = _
		},
		"./src/reddit/components/ProfileNavMenu/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2vH__bwuub4wzWRqcvhh3m",
				dropdown: "_3ulncTe6l8jRF_TM6HZZFk",
				mainLink: "_1JNzvBgvzSnX27gUBKqqmJ",
				isActive: "Zvl1svdkcyUlRhf5RHGKc",
				hideOnNarrow: "kp9WWKDE0A0U0u7XOOEQP",
				dropdownLink: "_3FXf9zUWKXtpapv4rBHh1L",
				showOnNarrow: "_2cJiWyA-Vif_pfBPZVATnV",
				overflowMenuButton: "_2glPIthm-tV6ZxKaznhb72"
			}
		},
		"./src/reddit/components/ProfileNavMenu/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/app/strings/index.ts"),
				l = s("./src/config.ts"),
				m = s("./src/higherOrderComponents/asTooltip.tsx"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				b = s("./src/reddit/actions/tooltip.ts"),
				h = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				x = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/controls/Dropdown/index.tsx"),
				f = s("./src/reddit/controls/InternalLink/index.tsx"),
				O = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				y = s("./src/reddit/models/Profile/index.ts"),
				E = s("./src/reddit/featureFlags/index.ts"),
				C = s("./src/reddit/selectors/tooltip.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				w = s("./src/reddit/selectors/userPrefs.ts"),
				I = s("./src/reddit/i18n/utils.ts"),
				T = s("./src/reddit/components/ProfileNavMenu/index.m.less"),
				P = s.n(T);
			const S = Object(g.t)({
					routeName: g.S,
					privateListingType: g.i
				}),
				k = Object(d.c)({
					isDropdownMenuOpen: e => Object(C.a)(e) === L,
					isOwnProfile: (e, t) => Object(j.J)(e, t.profileName),
					language: j.O,
					isSnoovatar30Enabled: E.d.snoovatar30,
					isSubscriptionsPinned: w.b
				}),
				_ = Object(m.a)(v.a),
				L = "profile-nav-menu-tooltip";
			t.a = S(Object(i.b)(k, e => ({
				toggleTooltip: t => e(Object(b.h)({
					tooltipId: t
				}))
			}))(e => {
				let {
					isDropdownMenuOpen: t,
					isOwnProfile: s,
					language: o,
					privateListingType: n,
					profileName: i,
					routeName: a,
					toggleTooltip: d,
					isSnoovatar30Enabled: c,
					isSubscriptionsPinned: l
				} = e;
				return r.a.createElement("div", {
					className: P.a.container
				}, r.a.createElement(h.a, {
					bladeOpen: !1,
					offsetLeft: l ? x.u : 0,
					render: () => r.a.createElement(r.a.Fragment, null, R({
						language: o,
						profileName: i,
						isOwnProfile: s,
						routeName: a,
						privateListingType: n,
						isSnoovatar30Enabled: c
					}).map(e => r.a.createElement(M, e)), r.a.createElement("button", {
						className: Object(p.a)(P.a.mainLink, P.a.overflowMenuButton),
						id: L,
						onClick: () => d(L)
					}, r.a.createElement(O.a, null)), r.a.createElement(_, {
						className: P.a.dropdown,
						isOpen: t,
						tooltipId: L
					}, A({
						language: o,
						profileName: i,
						isOwnProfile: s,
						routeName: a,
						privateListingType: n
					}).map(e => r.a.createElement(N, e))))
				}))
			}));
			const M = e => {
					let {
						hideOnNarrow: t,
						isActive: s,
						text: o,
						url: n,
						internal: i
					} = e;
					return i ? r.a.createElement(f.a, {
						className: Object(p.a)(P.a.mainLink, {
							[P.a.hideOnNarrow]: !!t,
							[P.a.isActive]: s
						}),
						to: n
					}, o) : r.a.createElement("a", {
						className: Object(p.a)(P.a.mainLink, {
							[P.a.hideOnNarrow]: !!t,
							[P.a.isActive]: s
						}),
						href: n
					}, o)
				},
				N = e => {
					let {
						isActive: t,
						internal: s,
						key: o,
						url: n,
						showOnNarrow: i,
						text: d
					} = e;
					return s ? r.a.createElement(a.a, {
						className: Object(p.a)(P.a.dropdownLink, {
							[P.a.isActive]: t,
							[P.a.showOnNarrow]: !!i
						}),
						to: n,
						key: o,
						rel: "nofollow",
						role: "listitem"
					}, d) : r.a.createElement("a", {
						className: Object(p.a)(P.a.dropdownLink, {
							[P.a.showOnNarrow]: !!i
						}),
						href: n,
						key: o,
						rel: "nofollow",
						role: "listitem",
						target: "_blank"
					}, d)
				},
				R = e => {
					let {
						language: t,
						profileName: s,
						isOwnProfile: n,
						routeName: r,
						privateListingType: i,
						isSnoovatar30Enabled: a
					} = e;
					const d = n ? [{
						internal: !0,
						isActive: r === u.zb.PROFILE_PRIVATE && i === y.a.Saved,
						key: "profile.saved",
						text: Object(c.a)(t, "profile.sections.saved"),
						url: "/user/".concat(s, "/saved/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: r === u.zb.PROFILE_PRIVATE && i === y.a.Hidden,
						key: "profile.hidden",
						text: Object(c.a)(t, "profile.sections.hidden"),
						url: "/user/".concat(s, "/hidden/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: r === u.zb.PROFILE_PRIVATE && i === y.a.Upvoted,
						key: "profile.upvoted",
						text: Object(c.a)(t, "profile.sections.upvoted"),
						url: "/user/".concat(s, "/upvoted/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: r === u.zb.PROFILE_PRIVATE && i === y.a.Downvoted,
						key: "profile.downvoted",
						text: Object(c.a)(t, "profile.sections.downvoted"),
						url: "/user/".concat(s, "/downvoted/")
					}] : [];
					n ? (d.push({
						hideOnNarrow: !0,
						internal: !0,
						isActive: r === u.zb.PROFILE_PRIVATE && i === y.a.ReceivedGildings,
						key: "profile.receiverGildings",
						text: o.fbt._("Awards received", null, {
							hk: "10CLzb"
						}),
						url: "/user/".concat(s, "/gilded/")
					}), d.push({
						hideOnNarrow: !0,
						internal: !0,
						isActive: r === u.zb.PROFILE_PRIVATE && i === y.a.GivenGildings,
						key: "profile.receiverGildings",
						text: o.fbt._("Awards given", null, {
							hk: "JzMR1"
						}),
						url: "/user/".concat(s, "/gilded/given/")
					})) : d.push({
						hideOnNarrow: !0,
						internal: !1,
						isActive: !1,
						key: "profile.gilded_legacy",
						text: o.fbt._("Awards received (legacy)", null, {
							hk: "3zOgw1"
						}),
						url: "".concat(l.a.oldRedditUrl, "/user/").concat(s, "/gilded/")
					});
					const m = a ? [{
						internal: !0,
						isActive: r === u.zb.PROFILE_SNOOBUILDER,
						key: "profile.snoobuilder",
						text: Object(I.c)("Snoobuilder"),
						url: "/user/".concat(s, "/snoo/")
					}] : [];
					return [{
						internal: !0,
						isActive: r === u.zb.PROFILE_OVERVIEW,
						key: "profile.overview",
						text: Object(c.a)(t, "profile.overview"),
						url: "/user/".concat(s, "/")
					}, {
						internal: !0,
						isActive: r === u.zb.PROFILE_POSTS,
						key: "profile.posts",
						text: Object(c.a)(t, "profile.posts"),
						url: "/user/".concat(s, "/posts/")
					}, {
						internal: !0,
						isActive: r === u.zb.PROFILE_COMMENTS,
						key: "profile.comments",
						text: Object(c.a)(t, "profile.comments"),
						url: "/user/".concat(s, "/comments/")
					}, ...m, ...d]
				},
				A = e => {
					let {
						language: t,
						profileName: s,
						isOwnProfile: n,
						routeName: r,
						privateListingType: i
					} = e;
					const a = n ? [{
						showOnNarrow: !0,
						internal: !0,
						isActive: r === u.zb.PROFILE_PRIVATE && i === y.a.Hidden,
						key: "profile.hidden",
						text: Object(c.a)(t, "profile.sections.hidden"),
						url: "/user/".concat(s, "/hidden/")
					}, {
						showOnNarrow: !0,
						internal: !0,
						isActive: r === u.zb.PROFILE_PRIVATE && i === y.a.Upvoted,
						key: "profile.upvoted",
						text: Object(c.a)(t, "profile.sections.upvoted"),
						url: "/user/".concat(s, "/upvoted/")
					}, {
						showOnNarrow: !0,
						internal: !0,
						isActive: r === u.zb.PROFILE_PRIVATE && i === y.a.Downvoted,
						key: "profile.downvoted",
						text: Object(c.a)(t, "profile.sections.downvoted"),
						url: "/user/".concat(s, "/downvoted/")
					}] : [];
					return n ? (a.push({
						showOnNarrow: !0,
						internal: !0,
						isActive: r === u.zb.PROFILE_PRIVATE && i === y.a.ReceivedGildings,
						key: "profile.receiverGildings",
						text: o.fbt._("Awards received", null, {
							hk: "10CLzb"
						}),
						url: "/user/".concat(s, "/gilded/")
					}), a.push({
						showOnNarrow: !0,
						internal: !0,
						isActive: r === u.zb.PROFILE_PRIVATE && i === y.a.GivenGildings,
						key: "profile.receiverGildings",
						text: o.fbt._("Awards given", null, {
							hk: "JzMR1"
						}),
						url: "/user/".concat(s, "/gilded/given/")
					}), a) : [...a, {
						showOnNarrow: !0,
						internal: !1,
						isActive: !1,
						key: "profile.gilded_legacy",
						text: o.fbt._("Awards received (legacy)", null, {
							hk: "3zOgw1"
						}),
						url: "".concat(l.a.oldRedditUrl, "/user/").concat(s, "/gilded/")
					}]
				}
		},
		"./src/reddit/components/ProfileSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/components/SidebarContainer/index.tsx"),
				a = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx"),
				d = s("./src/reddit/components/SidebarProfileMultireddits/index.tsx"),
				c = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				l = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				m = s("./src/reddit/components/SidebarTrophyCase/index.tsx"),
				p = s("./src/reddit/components/Widgets/ConnectedAccounts/index.tsx"),
				u = s("./src/reddit/constants/posts.ts");
			const b = Object(o.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-ProfileIdCard").then(s.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ProfileIdCard/index.tsx"
					}
				}),
				h = e => r.a.createElement(i.a, {
					className: e.className
				}, r.a.createElement(b, {
					profileName: e.profileName,
					isOverlay: e.isOverlay
				}), r.a.createElement(p.a, {
					subredditOrProfile: {
						name: e.profileName,
						type: u.a.PROFILE
					}
				}), r.a.createElement(a.a, {
					profileName: e.profileName
				}), r.a.createElement(d.a, {
					profileName: e.profileName
				}), r.a.createElement(c.a, null, r.a.createElement(m.a, {
					profileName: e.profileName
				})), r.a.createElement(l.a, {
					hideBackToTop: e.hideBackToTop
				}));
			h.defaultProps = {
				isOverlay: !1
			}, t.a = h
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, s) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/actions/page.ts"),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = s.n(m);
			const u = Object(i.b)(null, e => ({
					onNavigate: t => e(Object(c.G)(t))
				})),
				b = d.a.wrapped(e => r.a.createElement("div", {
					className: e.className,
					dangerouslySetInnerHTML: {
						__html: e.html
					},
					onClick: t => {
						((e, t, s) => {
							if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
								e.preventDefault(), t(e.target.getAttribute("href"))
							}
							e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), s && s(e)
						})(t, e.onNavigate, e.onClick)
					},
					style: Object.assign({}, e.style, {
						"--RawHTMLDisplay-tr-even": Object(o.j)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(o.j)(Object(l.a)(e).line, .8)
					})
				}), "StyledRawHTMLDisplay", p.a);
			t.a = u(Object(a.a)(b))
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/SidebarContainer/index.m.less"),
				r = s.n(n);
			t.a = o.a.div("container", r.a)
		},
		"./src/reddit/components/SidebarExpandableList/index.m.less": function(e, t, s) {
			e.exports = {
				TertiaryButton: "_1rpFWd0ROODHctwG096Da",
				tertiaryButton: "_1rpFWd0ROODHctwG096Da"
			}
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/lodash/take.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/app/strings/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				b = s("./src/reddit/layout/row/Inline/index.tsx"),
				h = s("./src/reddit/layout/row/RightAlign/index.tsx"),
				x = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/SidebarExpandableList/index.m.less"),
				v = s.n(g),
				f = s("./src/lib/lessComponent.tsx");
			const O = 10,
				y = f.a.wrapped(p.n, "TertiaryButton", v.a);
			class E extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1
					}, this.onButtonClick = () => {
						const {
							expanded: e
						} = this.state, {
							hasMoreItems: t,
							onLoadMore: s
						} = this.props;
						e || this.setState({
							expanded: !0
						}), e && !t && this.setState({
							expanded: !1
						}), t && s && s()
					}, this.renderToggleButton = () => {
						const {
							expanded: e
						} = this.state, {
							hasMoreItems: t,
							language: s,
							onLoadMore: o,
							pending: n
						} = this.props, r = !e || t && o ? Object(c.a)(s, "sidebar.widgets.expandableList.viewMore") : Object(c.a)(s, "sidebar.widgets.expandableList.viewLess");
						return i.a.createElement(y, {
							onClick: this.onButtonClick
						}, n ? i.a.createElement(u.a, {
							sizePx: O
						}) : r)
					}
				}
				render() {
					const {
						className: e,
						hasMoreItems: t,
						headerButton: s,
						items: o,
						minimizedLength: r,
						renderItem: a,
						title: d
					} = this.props, {
						expanded: c
					} = this.state, l = o.length > r || t, p = (!l || c ? o : n()(o, r)).map(e => a({
						item: e
					}));
					return i.a.createElement(m.a, {
						className: e,
						headerButton: s,
						title: d
					}, p, i.a.createElement(b.a, null, i.a.createElement(h.a, null, l && this.renderToggleButton())))
				}
			}
			E.defaultProps = {
				minimizedLength: l.Eb
			};
			const C = Object(d.c)({
				language: x.O
			});
			t.a = Object(a.b)(C)(E)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, s) {
			e.exports = {
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				a = s("./src/reddit/components/SidebarFooter/index.m.less"),
				d = s.n(a);
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = r.a.a("Link", d.a);
			t.a = e => n.a.createElement(i.a, {
				className: d.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, n.a.createElement("div", {
				className: d.a.LinkContainer
			}, n.a.createElement("div", {
				className: d.a.Column
			}, n.a.createElement(l, {
				href: "https://www.reddithelp.com"
			}, c._("help", null, {
				hk: "4lyYaD"
			})), n.a.createElement(l, {
				href: "https://www.reddit.com/mobile/download"
			}, c._("Reddit App", null, {
				hk: "1ehrjP"
			})), n.a.createElement(l, {
				href: "https://www.reddit.com/coins"
			}, c._("Reddit coins", null, {
				hk: "32iMaN"
			})), n.a.createElement(l, {
				href: "https://www.reddit.com/premium"
			}, c._("Reddit premium", null, {
				hk: "RuO3A"
			})), n.a.createElement(l, {
				href: "http://redditgifts.com/"
			}, c._("Reddit gifts", null, {
				hk: "2XziRN"
			})), n.a.createElement(l, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, c._("Communities", null, {
				hk: "3CJu37"
			})), n.a.createElement(l, {
				href: "https://www.reddit.com/posts/a-1/"
			}, c._("Top Posts", null, {
				hk: "2NOEW2"
			})), n.a.createElement(l, {
				href: "https://www.reddit.com/topics/a-1/"
			}, c._("Topics", null, {
				hk: "349RFt"
			}))), n.a.createElement("div", {
				className: d.a.Column
			}, n.a.createElement(l, {
				href: "https://about.reddit.com"
			}, c._("about", null, {
				hk: "1sqJKs"
			})), n.a.createElement(l, {
				href: "https://about.reddit.com/careers/"
			}, c._("careers", null, {
				hk: "26ABvc"
			})), n.a.createElement(l, {
				href: "https://about.reddit.com/press/"
			}, c._("press", null, {
				hk: "2Qmgdz"
			})), n.a.createElement(l, {
				href: "https://www.redditinc.com/advertising"
			}, c._("advertise", null, {
				hk: "Mt40U"
			})), n.a.createElement(l, {
				href: "http://www.redditblog.com/"
			}, c._("blog", null, {
				hk: "46IQJw"
			})), n.a.createElement(l, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, c._("Terms", null, {
				hk: "4qRzfE"
			})), n.a.createElement(l, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, c._("Content policy", null, {
				hk: "1DyxZS"
			})), n.a.createElement(l, {
				href: "https://www.reddit.com/help/privacypolicy"
			}, c._("Privacy policy", null, {
				hk: "10K04G"
			})), n.a.createElement(l, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, c._("Mod policy", null, {
				hk: "2gYc2T"
			})))), n.a.createElement("div", {
				className: d.a.Copyright
			}, c._("Reddit Inc © {year}. All rights reserved", [c._param("year", (new Date).getFullYear().toString())], {
				hk: "4BrCkA"
			})))
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3thndRe559UZy14xE1gZ_"
			}
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/app/strings/index.ts"),
				d = s("./src/reddit/actions/profile/index.ts"),
				c = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				m = s("./src/reddit/models/User/index.ts"),
				p = s("./src/reddit/selectors/profile.ts"),
				u = s("./src/reddit/selectors/subscriptions.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				x = s.n(h);
			const g = Object(i.c)({
					currentUser: b.i,
					language: b.O,
					moderated: p.n,
					subscriptions: u.f,
					hasMoreModerated: p.d,
					loadMorePending: p.a
				}),
				v = Object(r.b)(g, (e, t) => ({
					onLoadMoreGqlModeratedSubreddits: () => e(Object(d.c)(t.profileName))
				}), (e, t, s) => Object.assign({}, s, e, t, {
					onLoadMore: () => {
						e.hasMoreModerated && t.onLoadMoreGqlModeratedSubreddits()
					}
				})),
				f = e => {
					let {
						item: t
					} = e;
					return n.a.createElement(l.a, {
						id: t.id,
						iconUrl: t.iconUrl,
						isNSFW: t.isNSFW,
						key: "".concat(t.type, "-").concat(t.name),
						name: t.name,
						subscribers: t.subscribers,
						isSubscribed: t.isSubscribed,
						widget: void 0,
						sendEvent: () => void 0,
						type: t.type
					})
				};
			t.a = v(e => {
				const {
					currentUser: t,
					language: s,
					moderated: o,
					profileName: r,
					subscriptions: i,
					hasMoreModerated: d,
					onLoadMore: l,
					loadMorePending: p
				} = e;
				if (0 === o.length) return null;
				const u = t && Object(m.f)(t).toLowerCase() === r.toLowerCase() ? Object(a.a)(s, "profile.moderatedSubredditsYours") : Object(a.a)(s, "profile.moderatedSubreddits"),
					b = function(e, t, s) {
						return e.map(e => ({
							name: e.name,
							subscribers: e.subscribers,
							iconUrl: e.icon.url,
							isNSFW: e.isNSFW,
							isSubscribed: t.has(e.id),
							type: "user" === e.type ? "profile" : "subreddit",
							language: s,
							sendEvent: () => void 0
						}))
					}(o, new Set(i), s);
				return n.a.createElement(c.a, {
					className: x.a.container,
					title: u,
					items: b,
					renderItem: f,
					hasMoreItems: d,
					onLoadMore: l,
					pending: p
				})
			})
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.m.less": function(e, t, s) {
			e.exports = {
				listItem: "_3lbnTBPV5H4wHdRz5ATVc9",
				icon: "Vm0_pCIi1Z6JWa0EVf6jK",
				description: "_2xcc4c-4TOL7KOsJidXtl",
				name: "_3nt8_GidTIn88UciXx27E7",
				meta: "_3iC0Hyv57ON8dAtU94HFE_"
			}
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/profile/index.ts"),
				c = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				m = s("./src/reddit/i18n/components.tsx"),
				p = s("./src/reddit/i18n/utils.ts"),
				u = s("./src/reddit/selectors/profile.ts"),
				b = s("./src/reddit/components/SidebarProfileMultireddits/index.m.less"),
				h = s.n(b);
			const x = Object(a.c)({
					hasMoreMultireddits: u.e,
					loadMorePending: u.b,
					multireddits: u.o
				}),
				g = Object(r.b)(x, (e, t) => ({
					onLoadMoreMultireddits: () => e(Object(d.e)(t.profileName, !0))
				}), (e, t, s) => Object.assign({}, s, e, t, {
					onLoadMore: () => {
						e.hasMoreMultireddits && t.onLoadMoreMultireddits()
					}
				})),
				v = e => {
					let {
						item: t
					} = e;
					return n.a.createElement("div", {
						className: h.a.listItem,
						key: t.url
					}, n.a.createElement("img", {
						className: h.a.icon,
						src: t.icon
					}), n.a.createElement("div", {
						className: h.a.description
					}, n.a.createElement(i.a, {
						className: h.a.name,
						to: t.url
					}, t.displayText), n.a.createElement("div", {
						className: h.a.meta
					}, n.a.createElement(m.c, null, n.a.createElement(m.b, {
						name: "subredditCount"
					}, t.subredditCount), " ", n.a.createElement(m.a, {
						name: "communities",
						singular: "community",
						plural: "communities",
						count: t.subredditCount
					})))))
				};
			t.a = g(e => {
				const {
					hasMoreMultireddits: t,
					loadMorePending: s,
					multireddits: o,
					onLoadMore: r,
					profileName: i
				} = e;
				return o && o.length ? n.a.createElement(l.a, null, n.a.createElement(c.a, {
					hasMoreItems: t,
					items: o,
					onLoadMore: r,
					pending: s,
					renderItem: v,
					title: Object(p.c)("Public custom feeds by u/".concat(Object(p.b)("username", i)))
				})) : null
			})
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				n = s.n(o),
				r = s("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", n.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/lodash/throttle.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/i18n/components.tsx"),
				m = s("./src/reddit/components/BackToTop/index.m.less"),
				p = s.n(m),
				u = e => a.a.createElement("div", {
					className: Object(o.a)(e.className, p.a.container),
					style: e.style
				}, a.a.createElement(c.f, {
					className: p.a.button,
					onClick: () => window.scroll(0, 0)
				}, a.a.createElement(l.c, null, "Back to top"))),
				b = s("./src/reddit/components/SidebarFooter/index.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				v = s.n(g),
				f = s("./src/lib/lessComponent.tsx");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var y = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const E = d.e[1] + 24,
				C = h.f + 8 + 152 + 32 + 16,
				j = C + E + 8,
				w = f.a.div("Container", v.a),
				I = f.a.wrapped(e => {
					var {
						className: t
					} = e, s = y(e, ["className"]);
					return a.a.createElement(u, O({
						className: t,
						style: {
							top: "calc(100vh - ".concat(40, "px)")
						}
					}, s))
				}, "BackToTop", v.a),
				T = e => {
					let {
						children: t,
						className: s,
						isSticky: n
					} = e;
					return a.a.createElement("div", {
						className: Object(o.a)(s, {
							[v.a.StickyStyles]: n
						})
					}, t)
				};
			class P extends i.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > j,
						shouldFooterSticky: this.windowHeight > C
					}), this.updateState = () => {
						if (this.isHidden()) return;
						const {
							shouldAdSticky: e,
							shouldFooterSticky: t
						} = this.getStickyContents();
						e === this.state.isAdSticky && t === this.state.isFooterSticky || this.setState({
							isAdSticky: e,
							isFooterSticky: t
						})
					}, this.updateMeasurements = () => {
						this.windowHeight = window.innerHeight
					}, this.handleResize = r()(() => {
						this.updateMeasurements(), this.updateState()
					}, d.G), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isFooterSticky: !0
					}
				}
				isHidden() {
					return !this.containerEl || null === this.containerEl.offsetParent
				}
				componentDidMount() {
					this.isHidden() || this.handleResize(), window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					const {
						props: {
							adComponent: e,
							children: t,
							className: s,
							hideFooter: o
						}
					} = this, n = this.state.isAdSticky && !(!e && !t);
					return a.a.createElement(w, {
						className: s,
						innerRef: this.setWrapperRef
					}, a.a.createElement(T, {
						isSticky: n
					}, e, t, !o && a.a.createElement(b.a, null)), !this.props.hideBackToTop && a.a.createElement(I, null))
				}
			}
			const S = Object(x.t)();
			t.a = S(P)
		},
		"./src/reddit/components/SidebarTrophyCase/index.m.less": function(e, t, s) {
			e.exports = {
				TrophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				trophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				TrophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				trophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				TrophyItem: "QY_PhyoOHbRd-_92ivr-m",
				trophyItem: "QY_PhyoOHbRd-_92ivr-m",
				TrophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				trophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				Description: "_3n5-aYyk15dtyt-boqlDrq",
				description: "_3n5-aYyk15dtyt-boqlDrq"
			}
		},
		"./src/reddit/components/SidebarTrophyCase/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				d = s("./src/reddit/controls/OutboundLink/index.tsx"),
				c = s("./src/reddit/controls/Typography/index.tsx"),
				l = s("./src/reddit/i18n/utils.ts"),
				m = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				p = s("./node_modules/lodash/isEqual.js"),
				u = s.n(p);
			const b = Object(i.b)(i.d, u.a);
			var h = s("./src/reddit/selectors/profile.ts"),
				x = s("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				g = s.n(x),
				v = s("./src/lib/lessComponent.tsx");
			const f = Object(i.c)({
				trophyCase: (e, t) => {
					let {
						profileName: s
					} = t;
					return Object(h.r)(e, Object(h.m)(e, s))
				}
			}, b);
			t.a = Object(r.b)(f)(e => {
				let {
					trophyCase: t
				} = e;
				return 0 === t.length ? null : n.a.createElement(a.a, {
					title: Object(l.c)("Trophy Case (".concat(Object(l.b)("trophyCount", t.length), ")")),
					items: t,
					renderItem: w
				})
			});
			const O = v.a.wrapped(m.a, "TrophyItem", g.a),
				y = v.a.div("TrophyIcon", g.a),
				E = v.a.h5("TrophyName", g.a),
				C = v.a.div("TrophyContent", g.a),
				j = v.a.wrapped(c.f, "Description", g.a);

			function w(e) {
				let {
					item: t
				} = e;
				const s = n.a.createElement("img", {
					src: t.icon,
					title: t.name
				});
				return n.a.createElement(O, {
					key: t.id
				}, n.a.createElement(y, null, t.url ? n.a.createElement(d.a, {
					href: t.url,
					source: void 0,
					isSponsored: !1
				}, s) : s), n.a.createElement(C, null, n.a.createElement(E, null, t.name), n.a.createElement(j, null, t.description)))
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/getShortenedLink.ts"),
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				c = s("./src/reddit/components/SourceLink/index.m.less"),
				l = s.n(c),
				m = s("./src/lib/lessComponent.tsx");
			const p = m.a.wrapped(d.a, "OutboundLinkIcon", l.a),
				u = m.a.div("SourceLinkWrapper", l.a);
			t.a = e => {
				const {
					className: t,
					post: s,
					isCommentsPage: o
				} = e, {
					source: d,
					isSponsored: c
				} = s;
				return d ? n.a.createElement(u, {
					className: Object(r.a)({
						[l.a["m-comment"]]: o
					}, t)
				}, n.a.createElement(a.a, {
					href: d.url,
					isSponsored: c,
					source: d
				}, Object(i.a)(s), n.a.createElement(p, null))) : null
			}
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, s) {
			e.exports = {
				IconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				iconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				active: "_2FebEA49ReODemDlwzYHSR",
				SubscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				subscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				UnsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				unsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				isSmall: "_2ilDLNSvkCHD3Cs9duy9Q_",
				SubscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				subscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				UnsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				unsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				SubscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				subscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				UnsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				unsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return I
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/constants/elementClassNames.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				c = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				m = s("./src/reddit/components/SubscribeButton/Base.m.less"),
				p = s.n(m),
				u = s("./src/lib/classNames/index.ts"),
				b = s("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var x = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const g = b.a.button("IconButton", p.a),
				v = b.a.wrapped(c.a, "SubscribeIcon", p.a),
				f = b.a.wrapped(d.a, "UnsubscribeIcon", p.a),
				O = b.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, o = x(e, ["border", "small"]);
					return r.a.createElement(g, o, r.a.createElement(v, {
						className: Object(u.a)(o.className, {
							[p.a.isSmall]: s
						})
					}))
				}, "SubscribeIconButton", p.a),
				y = b.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, o = x(e, ["border", "small"]);
					return t ? r.a.createElement(a.f, h({}, o, {
						className: Object(u.a)(o.className, {
							[p.a.isSmall]: s
						})
					})) : r.a.createElement(a.n, h({}, o, {
						className: Object(u.a)(o.className, {
							[p.a.isSmall]: s
						})
					}))
				}, "SubscribeInternalButton", p.a),
				E = e => {
					var {
						icon: t
					} = e, s = x(e, ["icon"]);
					return t ? r.a.createElement(O, h({}, s, {
						className: Object(u.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					})) : r.a.createElement(y, h({}, s, {
						className: Object(u.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					}))
				},
				C = b.a.wrapped(e => {
					var {
						border: t,
						language: s,
						small: o,
						type: n
					} = e, a = x(e, ["border", "language", "small", "type"]);
					return r.a.createElement(g, a, r.a.createElement(f, {
						className: Object(u.a)(i.n, a.className, {
							[p.a.isSmall]: o
						})
					}))
				}, "UnsubscribeIconButton", p.a),
				j = b.a.wrapped(e => {
					var {
						border: t,
						language: s,
						small: n,
						type: i
					} = e, d = x(e, ["border", "language", "small", "type"]);
					const c = r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
							className: p.a.UnsubscribeButtonDefault
						}, "subreddit" === i ? o.fbt._("Joined", null, {
							hk: "1MTmIz"
						}) : o.fbt._("Following", null, {
							hk: "1wQlVR"
						})), r.a.createElement("span", {
							className: p.a.UnsubscribeButtonHover
						}, "subreddit" === i ? o.fbt._("Leave", null, {
							hk: "2lLnnn"
						}) : o.fbt._("Unfollow", null, {
							hk: "2b5ERD"
						}))),
						l = Object(u.a)(d.className, {
							[p.a.isSmall]: n
						});
					return t ? r.a.createElement(a.i, h({}, d, {
						className: l,
						children: c
					})) : r.a.createElement(a.n, h({}, d, {
						className: l,
						children: c
					}))
				}, "UnsubscribeButton", p.a),
				w = e => {
					var {
						icon: t
					} = e, s = x(e, ["icon"]);
					return t ? r.a.createElement(C, h({}, s, {
						className: Object(u.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					})) : r.a.createElement(j, h({}, s, {
						className: Object(u.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					}))
				};
			class I extends r.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? this.props.onUnsubscribe() : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						icon: s = !1,
						id: o,
						language: n,
						small: i = !1
					} = this.props, a = {
						border: e,
						className: t,
						icon: s,
						onClick: this.onClick,
						small: i
					};
					return this.props.userIsSubscriber ? r.a.createElement(w, h({}, a, {
						language: n,
						type: this.props.identifier.type
					})) : r.a.createElement(E, h({}, a, {
						id: o
					}), this.props.children, Object(l.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				c = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				m = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				p = s.n(m),
				u = s("./src/lib/classNames/index.ts"),
				b = s("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var x = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const g = b.a.wrapped(e => {
					var {
						small: t,
						shouldReverseColor: s
					} = e, o = x(e, ["small", "shouldReverseColor"]);
					const r = s ? a.i : a.f;
					return n.a.createElement(r, h({}, o, {
						className: Object(u.a)(o.className, {
							[p.a.isLarge]: !t
						})
					}))
				}, "SubscribeInternalButton", p.a),
				v = b.a.wrapped(e => {
					var {
						small: t,
						belongsToType: s,
						shouldReverseColor: o
					} = e, r = x(e, ["small", "belongsToType", "shouldReverseColor"]);
					const i = o ? a.f : a.i;
					return n.a.createElement(i, h({}, r, {
						className: Object(u.a)(r.className, {
							[p.a.isLarge]: !t
						})
					}))
				}, "UnsubscribeButton", p.a),
				f = b.a.wrapped(d.a, "Checkmark", p.a),
				O = b.a.wrapped(c.a, "Plus", p.a),
				y = b.a.div("ButtonSpacer", p.a);
			class E extends n.a.Component {
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
							language: o,
							onSubscribe: r,
							onUnsubscribe: i,
							postId: a,
							sendEvent: d,
							small: c = !1,
							userIsSubscriber: m,
							doNotHideOtherSubscribeButtons: b,
							getEventFactory: E,
							onSubscriptionsRequested: C
						} = e,
						j = x(e, ["className", "identifier", "language", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
						w = this.state.isHovered;
					let I = m ? "subscribed" : "subscribe";
					m && w && (I = "unsubscribe");
					const T = Object(l.a)({
						type: s.type,
						key: I
					});
					return m ? this.state.hasJustSubscribed || b ? n.a.createElement(v, h({
						className: Object(u.a)(t, {
							[p.a.isLarge]: !c,
							[p.a.unsubscribeButtonHoverStyles]: !c
						}),
						onClick: this.onClick,
						small: c,
						belongsToType: s.type,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, j), c && n.a.createElement(f, null), !c && !w && n.a.createElement(f, null), !c && T) : c ? null : n.a.createElement(y, null) : n.a.createElement(n.a.Fragment, null, n.a.createElement(g, h({
						className: Object(u.a)(t, {
							[p.a.isLarge]: !c
						}),
						onClick: this.onClick,
						small: c
					}, j, {
						id: "subscribe-button-".concat(a),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}), n.a.createElement(O, null), !c && T))
				}
			}
			t.a = Object(i.a)(Object(r.b)(E))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js");
			const n = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				r = {
					subredditActions: {
						subscribe: () => o.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => o.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => o.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => o.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => o.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => o.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				i = e => {
					let {
						type: t,
						key: s
					} = e;
					return r[n({
						type: t
					})][s]()
				}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/reddit/components/TrackingHelper/index.tsx"),
				n = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				r = s("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(n.a)(Object(o.b)(r.a))
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/SEOTitle/index.tsx"),
				a = s("./src/reddit/components/Widgets/Base/index.m.less"),
				d = s.n(a),
				c = function(e, t) {
					var s = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
					}
					return s
				};
			const l = r.a.div("WidgetBackground", d.a),
				m = r.a.wrapped(e => {
					var {
						children: t
					} = e, s = c(e, ["children"]);
					return n.a.createElement("div", s, n.a.createElement(i.b, {
						type: i.a.Widget
					}, t))
				}, "WidgetHeader", d.a);
			t.b = e => n.a.createElement("div", {
				className: e.className
			}, n.a.createElement(l, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Flair/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/index.tsx"),
				u = s("./src/reddit/actions/subscription/index.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(a.c)({
				language: b.O
			});
			var x = Object(r.b)(h, (e, t) => {
					const s = t.widget.id || void 0;
					return {
						onSubscribe: () => e(u.d([t.identifier], !0, s)),
						onSubscriptionsRequested: () => e(u.e()),
						onUnsubscribe: () => e(u.d([t.identifier], !1, s))
					}
				})(s("./src/reddit/components/SubscribeButton/Base.tsx").a),
				g = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				v = s("./src/reddit/constants/componentSizes.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				O = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				y = s("./src/reddit/i18n/utils.ts"),
				E = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				C = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				j = s("./src/reddit/models/Flair/index.ts"),
				w = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				I = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				T = s.n(I);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "b", (function() {
				return S
			})), s.d(t, "a", (function() {
				return _
			}));
			const S = e => n.a.createElement(g.a, {
					className: Object(c.a)(T.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, n.a.createElement("div", {
					className: T.a.container
				}, e.isLoading ? n.a.createElement(O.a, {
					className: T.a.loadingIcon,
					sizePx: 32
				}) : n.a.createElement(n.a.Fragment, null, e.isError ? n.a.createElement("p", {
					className: T.a.errorMsg
				}, e.errorMsg || Object(y.c)("Something went wrong.")) : n.a.createElement(n.a.Fragment, null, e.communities.map(t => n.a.createElement(_, P({
					key: t.name
				}, t, {
					getSubscribeEventFactory: e.getSubscribeEventFactoryHandler ? e.getSubscribeEventFactoryHandler(t) : void 0,
					widget: e.widget,
					sendEvent: e.sendEvent,
					type: t.type || "subreddit",
					buttonDisabled: e.itemButtonDisabled,
					isLoading: e.loadingItemName && e.loadingItemName.toLowerCase() === t.name.toLowerCase() || !1,
					isNSFW: t.isNSFW,
					onCommunityNameClick: e.getClickEventFactory ? () => e.sendEvent(e.getClickEventFactory(t)) : void 0,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && n.a.createElement(f.n, {
					className: T.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				k = Object(a.c)({
					hideNSFWPref: b.y,
					language: b.O
				}),
				_ = Object(r.b)(k)(e => n.a.createElement("div", {
					className: T.a.communityItemContainer
				}, n.a.createElement(C.a, {
					widthRight: v.t
				}, n.a.createElement("div", {
					className: T.a.iconContainer
				}, e.communityIcon || e.iconUrl ? n.a.createElement("img", {
					className: T.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : n.a.createElement(E.a, {
					className: T.a.planetIcon,
					"data-redditstyle": !0
				})), n.a.createElement("div", {
					className: T.a.communityDescriptionContainer
				}, n.a.createElement(i.a, {
					className: T.a.communityName,
					to: Object(w.a)(e.name, e.type),
					onClick: e.onCommunityNameClick
				}, Object(w.b)(e.name, e.type)), n.a.createElement("div", {
					className: T.a.communityInfoContainer
				}, !!e.subscribers && n.a.createElement("p", {
					className: T.a.subscriberCount
				}, Object(d.b)(e.language, "listings.subscribers", e.subscribers, {
					count: Object(l.b)(e.subscribers)
				})), e.isNSFW && n.a.createElement(m.b, {
					flair: {
						type: j.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? n.a.createElement(O.a, {
					className: Object(c.a)(T.a.communityCta, T.a.smallLoadingIcon),
					sizePx: 12
				}) : n.a.createElement(f.n, {
					className: Object(c.a)(T.a.communityCta, {
						[T.a.showOnHover]: e.showTertiaryButtonOnHover
					}),
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? n.a.createElement(x, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					sendEvent: e.sendEvent,
					small: !0,
					userIsSubscriber: !!e.isSubscribed,
					widget: e.widget
				}) : n.a.createElement(p.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && n.a.createElement("p", {
					title: e.description,
					className: T.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var o = s("./src/reddit/constants/posts.ts"),
				n = s("./src/reddit/helpers/name/index.ts");

			function r(e, t) {
				return (t === o.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function i(e, t) {
				return t === o.a.PROFILE ? Object(n.c)(e) : Object(n.b)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, s) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				showOnHover: "_1kul3JsqY5kjVe9kzGy4bV",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1zLylbOLqdzG2C4JhdkEVQ",
				twitterLogo: "_1N1dJvzR-m3nNoVl8cxHul",
				link: "JqNsQRTEcAPCq8_G0O5mO",
				name: "_28fbIV1TS_oSVjfzjWnM0f",
				linkDescription: "_2Y1Xv08xrWbsDZuEvIuRKo",
				linkTitle: "elMVR2YfkbHdFTihhlUK4",
				linkIcon: "oi2L0mBSRAULcOPEtjXSh",
				description: "KKNu_jB7N6A-PuBrW0WoR",
				visitButton: "NBL39n3gjYvG4c9qlXJIk"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.m.less": function(e, t, s) {
			e.exports = {
				account: "_25M-5tlJjQOChCI8sg84QU"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/components/Widgets/Base/index.tsx"),
				l = s("./src/reddit/constants/posts.ts"),
				m = s("./src/reddit/helpers/trackers/profileSettings.ts"),
				p = s("./src/reddit/i18n/components.tsx"),
				u = s("./src/reddit/models/ExternalAccount/index.ts"),
				b = s("./src/reddit/selectors/externalAccount.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/controls/OutboundLink/index.tsx"),
				g = s("./src/reddit/i18n/utils.ts"),
				v = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				f = s("./src/reddit/icons/svgs/Twitter/index.tsx"),
				O = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				y = s("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				E = s.n(y);
			var C = e => {
					const {
						account: t,
						clickEvent: s,
						provider: o
					} = e;
					let r, i = t.username,
						a = "";
					return o !== u.a.Twitter ? null : (r = n.a.createElement(f.a, {
						className: E.a.twitterLogo
					}), a = Object(g.c)("View on Twitter"), i = "@".concat(t.username), n.a.createElement(O.a, null, n.a.createElement("span", {
						className: E.a.icon
					}, r), n.a.createElement(x.a, {
						className: E.a.link,
						href: t.link,
						isSponsored: !1,
						source: void 0,
						onClick: s
					}, n.a.createElement("div", {
						className: E.a.linkTitle
					}, n.a.createElement("span", {
						className: E.a.name
					}, i), n.a.createElement(v.a, {
						className: E.a.linkIcon
					})), n.a.createElement("div", {
						className: E.a.linkDescription
					}, a))))
				},
				j = s("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				w = s.n(j);
			const I = Object(i.c)({
					twitterAccount: (e, t) => {
						let {
							subredditOrProfile: s
						} = t;
						return s.type === l.a.PROFILE ? Object(b.c)(e, {
							profileName: s.name
						}) : null
					},
					user: (e, t) => {
						let {
							subredditOrProfile: s
						} = t;
						return s.type === l.a.PROFILE ? Object(h.cb)(e, {
							userName: s.name
						}) : null
					}
				}),
				T = Object(r.b)(I, e => ({
					trackTwitterAccountClicked: t => e((e, s) => m.k(s(), t))
				}), (e, t, s) => Object.assign({}, s, e, t, {
					onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
				}));
			t.a = Object(d.b)(T(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: s
				} = e;
				return s ? n.a.createElement(a.a, null, n.a.createElement(c.b, null, n.a.createElement(c.a, null, n.a.createElement(p.c, null, "Connected accounts")), s && n.a.createElement("div", {
					className: w.a.account
				}, n.a.createElement(C, {
					provider: u.a.Twitter,
					account: s,
					clickEvent: t
				})))) : null
			}))
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, s) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/selectors/telemetry.ts");
			const b = (e, t) => s => Object.assign({
				source: "community_widgets",
				action: "click",
				noun: "see_more",
				widget: Object(u.widget)(s, {
					subredditId: e,
					widgetKind: t
				})
			}, u.defaults);
			var h = s("./src/reddit/i18n/components.tsx"),
				x = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				g = s("./src/reddit/selectors/experiments/topPosts.ts"),
				v = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/models/Theme/index.ts"),
				y = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const E = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(y.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				C = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(y.a)(e).widgetColors.sidebarWidgetHeaderColor,
				j = e => {
					const t = E(e);
					return Object(O.f)(t)
				},
				w = e => {
					const t = C(e);
					return Object(O.f)(t)
				};
			var I = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				T = s.n(I);
			const P = Object(m.t)(),
				S = Object(r.b)(() => Object(i.c)({
					forceRedditStyle: (e, t) => {
						const s = Object(m.m)(e, t) || void 0,
							o = t.redditStyle || Object(v.m)(e, {
								subredditId: s
							}),
							n = Object(f.Q)(e);
						return o || n
					},
					nigtmode: f.Q,
					subredditId: m.m,
					topPostVariant: g.d
				}));
			class k extends n.a.Component {
				constructor() {
					super(...arguments), this.contentRef = n.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(b(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = E(this.props), e.borderColor = Object(x.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = j(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = C(this.props), e.color = e.fill = w(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: o,
						headerButton: r,
						onClick: i,
						title: d,
						titleClassName: l,
						truncateThreshold: m
					} = this.props, u = s ? T.a.widgetContentOnly : T.a.widgetContent, b = !o && this.props.styles, x = b ? this.getWidgetBackgroundStyles() : {}, g = b ? this.getWidgetHeaderStyles() : {};
					return n.a.createElement("div", {
						className: Object(a.a)(t, T.a.widgetBackground, {
							[T.a.redditStyle]: o,
							[T.a.clickable]: !!i,
							[T.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": o,
						onClick: i,
						style: x
					}, d && n.a.createElement("div", {
						className: T.a.widgetHeader,
						style: g
					}, n.a.createElement("div", {
						className: Object(a.a)(T.a.widgetTitle, l)
					}, n.a.createElement(c.b, {
						type: c.a.Widget
					}, d)), r), n.a.createElement("div", {
						className: Object(a.a)(u, {
							[T.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? m : "none"
						}
					}, e), this.state.isTruncated && n.a.createElement(p.n, {
						className: T.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, n.a.createElement(h.c, null, "See More")))
				}
			}
			t.a = P(S(Object(d.a)(Object(l.b)(k))))
		},
		"./src/reddit/connectors/OverviewChronoList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return v
			}));
			var o = s("./node_modules/lodash/noop.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/actions/postList.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/isComment.ts"),
				p = s("./src/reddit/helpers/isPost.ts"),
				u = s("./src/reddit/helpers/trackers/post.ts"),
				b = s("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				h = s("./src/reddit/selectors/subreddit.ts"),
				x = s("./src/reddit/selectors/tracking.ts"),
				g = s("./src/reddit/selectors/user.ts");
			const v = (e, t) => (e, t, s) => Object(m.a)(e) ? 120 : 47,
				f = Object(l.t)(),
				O = {
					apiError: b.a,
					apiPending: b.b,
					currentUser: g.i,
					layout: l.L,
					loadMore: b.d,
					subredditsById: h.V,
					viewportDataLoaded: x.a,
					commentsById: b.g,
					itemIds: b.f,
					itemIdToPostId: b.e,
					postsById: b.h,
					estimateItemHeight: v
				},
				y = Object(i.c)(O),
				E = Object(r.b)(y, (e, t) => ({
					onBottomViewed: (t, s) => e(d.c(t, s)),
					openPost: t => {
						e(a.H(t))
					},
					trackOnPostEnteredViewport: (t, s) => {
						Object(p.a)(t) && e(a.K(t))
					},
					trackOnPostExitedViewport: (t, s, o) => {
						Object(p.a)(t) && e(a.L(t, o))
					},
					fireAdPixelsOfType: n.a
				}), (e, t, s) => Object.assign({}, e, t, s, {
					postClickEvent: u.f
				}));
			t.a = e => Object(c.b)(f(E(e)))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/subscription/index.ts"),
				i = s("./src/reddit/selectors/subreddit.ts"),
				a = s("./src/reddit/selectors/user.ts");
			t.a = Object(o.b)(() => Object(n.c)({
				language: a.O,
				userIsSubscriber: i.Z
			}), (e, t) => {
				let {
					identifier: s
				} = t;
				return {
					onSubscribe: () => e(r.d([s], !0)),
					onSubscriptionsRequested: () => e(r.e()),
					onUnsubscribe: () => e(r.d([s], !1))
				}
			})
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Checkbox/index.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var d = e => n.a.createElement("svg", a({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), n.a.createElement("g", {
					transform: "translate(-32.000000, -173.000000)"
				}, n.a.createElement("g", {
					transform: "translate(32.000000, 173.000000)"
				}, n.a.createElement("path", {
					d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
				})))),
				c = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = s("./src/reddit/controls/Checkbox/index.m.less"),
				m = s.n(l);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const b = e => t => {
					const {
						className: s,
						disabled: o,
						redditStyle: i,
						"data-redditstyle": a
					} = t, d = u(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), c = ((e, t, s) => {
						const o = !(!t && !s);
						let n = "";
						return n = e ? o ? m.a.mDisabledRedditStyle : m.a.mDisabled : o ? m.a.mActiveRedditStyle : m.a.mActive
					})(o, i, a);
					return n.a.createElement(e, p({
						className: Object(r.a)(m.a.Checkbox, c, s)
					}, d))
				},
				h = b(c.a),
				x = b(d);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? x : e.isCheckboxSelected ? h : i.a;
				return n.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: e.className,
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, n.a.createElement(t, {
					className: Object(r.a)(m.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, s) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "d", (function() {
				return x
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/app/strings/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/lib/prettyPrintNumber/index.ts"),
				d = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/i18n/utils.ts")),
				c = s("./src/reddit/controls/MetaData/index.m.less"),
				l = s.n(c),
				m = function(e, t) {
					var s = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
					}
					return s
				};
			const p = i.a.span("metaText", l.a),
				u = e => n.a.createElement(p, e, " · "),
				b = Object(r.c)("comment.point"),
				h = e => {
					var {
						isScoreHidden: t,
						language: s,
						score: o,
						useUpvotes: r
					} = e, i = m(e, ["isScoreHidden", "language", "score", "useUpvotes"]);
					const c = Object(a.b)(o),
						l = Object(d.c)("\n    ".concat(Object(d.b)("score", c), " ").concat(Object(d.a)("upvotes", ["upvote", "upvotes"], o), "\n  ")),
						u = t ? Object(d.c)("Score hidden") : r ? l : b(s, o, {
							count: c
						});
					return n.a.createElement(p, i, u)
				},
				x = (e, t) => {
					const s = Object(r.b)(t, "posts.comments.noun", e, {
						count: Object(a.b)(e)
					});
					return n.a.createElement(p, null, s)
				}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./src/reddit/models/WhitelistStatus/index.ts");
			const n = (e, t) => {
				const s = e.some(e => e.isNSFW),
					n = t.some(e => e.wls === o.a.NO_ADS);
				return !s && !n
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
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "d", (function() {
				return g
			}));
			var o = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = s("./src/reddit/models/Theme/index.ts"),
				d = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(c);
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
				b = e => Object(o.o)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : m,
				x = e => e.isActive ? l.a.mIsActive : void 0,
				g = e => {
					const t = Object(r.a)(Object(n.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("archived"), d.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Envelope/index.m.less": function(e, t, s) {
			e.exports = {
				Envelope: "gsQG-L1wCCIUe8dJEOA6C",
				envelope: "gsQG-L1wCCIUe8dJEOA6C"
			}
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Envelope/index.m.less"),
				a = s.n(i);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("envelope"), " ").concat(e.className)
			}), "Envelope", a.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less": function(e, t, s) {
			e.exports = {
				CollapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI",
				collapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				a = s.n(i);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoArrowCollapse"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", a.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, s) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				a = s.n(i);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoArrowExpand"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", a.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less": function(e, t, s) {
			e.exports = {
				LightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3",
				lightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, s) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Menu/index.m.less"),
				a = s.n(i);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", a.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, s) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				className: e.className,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M37.5,22.5V20h-35v15c0,1.4,1.1,2.5,2.5,2.5h30c1.4,0,2.5-1.1,2.5-2.5v0H6.2C5.6,35,5,34.5,5,33.8l0,0c0-0.7,0.6-1.2,1.2-1.2h31.3V30H6.2C5.6,30,5,29.5,5,28.8v0c0-0.7,0.6-1.2,1.2-1.2h31.3V25H6.2C5.6,25,5,24.5,5,23.8v0c0-0.7,0.6-1.2,1.2-1.2H37.5z"
			}), n.a.createElement("path", {
				d: "M22.5,6c0,1.4-1.1,2.5-2.5,2.5S17.5,7.4,17.5,6S20,0,20,0S22.5,4.6,22.5,6z"
			}), n.a.createElement("path", {
				d: "M20,15L20,15c-0.7,0-1.3-0.6-1.3-1.2v-2.5c0-0.7,0.6-1.2,1.2-1.2h0c0.7,0,1.2,0.6,1.2,1.2v2.5C21.2,14.5,20.7,15,20,15z"
			}), n.a.createElement("path", {
				d: "M22.8,11.3v2.3c0,1.4-1,2.7-2.5,2.9c-1.6,0.2-3-1.1-3-2.7v-5c0,0,0-0.1,0-0.1l-0.8-0.4c-0.9-0.4-2-0.3-2.7,0.4L2.5,18.5h35L22.8,11.3z"
			}))))
		},
		"./src/reddit/icons/svgs/Flag/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("polygon", {
				fill: "inherit",
				points: "0 20 20 20 20 0 0 0",
				opacity: "0"
			}), n.a.createElement("path", {
				fill: "inherit",
				d: "M11.71875,3.14525 C14.60125,1.54375 18.75025,3.48025 18.75025,3.48025 L18.75025,13.55475 C18.75025,13.55475 14.86875,11.81975 11.71875,13.21975 C8.70525,14.55925 4.68725,12.88475 4.68725,12.88475 L4.68725,2.81025 C4.68725,2.81025 8.70525,4.81925 11.71875,3.14525 Z M2.75,18.75 C2.232,18.75 2,18.3305 2,17.8125 L2,2.8125 C2,2.2945 2.232,1.875 2.75,1.875 C3.268,1.875 3.5,2.2945 3.5,2.8125 L3.5,17.8125 C3.5,18.3305 3.268,18.75 2.75,18.75 Z"
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
		"./src/reddit/icons/svgs/Save/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2qT9eltTv4vv9GxxEZqvc0"
			}
		},
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);

			function r(e) {
				return n.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 400 400",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					fill: "inherit",
					d: "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
				}))
			}
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, s) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/layout/row/RightAlign/index.m.less"),
				r = s.n(n);
			t.a = o.a.div("rightAligned", r.a)
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, s) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				d = s.n(a);
			t.a = Object(r.a)(e => n.a.createElement("div", {
				className: Object(i.a)(d.a.expandedCenterContainer, e.className)
			}, n.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), n.a.createElement("div", {
				className: d.a.center
			}, Array.isArray(e.children) && e.children[1]), n.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/pages/ProfilePrivate/index.m.less": function(e, t, s) {
			e.exports = {
				mixedList: "_203kLAn6xQ7ktVOvJCzl9p"
			}
		},
		"./src/reddit/pages/ProfilePrivate/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.regexp.match.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/pages/profilePrivate/index.ts"),
				d = s("./src/reddit/components/EmptyProfile/index.ts"),
				c = s("./src/reddit/components/JumpToContent/index.tsx"),
				l = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				m = s("./src/reddit/components/PostList/index.tsx"),
				p = s("./src/reddit/components/ProfileItemList/index.tsx"),
				u = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				b = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				h = s("./node_modules/lodash/noop.js"),
				x = s.n(h),
				g = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				v = s("./src/reddit/actions/post.ts"),
				f = s("./src/reddit/components/TrackingHelper/index.tsx"),
				O = s("./src/reddit/components/PostList/Placeholder.tsx"),
				y = s("./src/reddit/connectors/OverviewChronoList/index.ts"),
				E = s("./src/reddit/contexts/PageLayer/index.tsx"),
				C = s("./src/reddit/featureFlags/index.ts"),
				j = s("./src/reddit/helpers/trackers/post.ts"),
				w = s("./src/lib/objectSelector/index.ts"),
				I = s("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				T = s("./src/reddit/helpers/isComment.ts"),
				P = s("./src/reddit/models/Profile/index.ts");
			const S = (e, t) => {
					let {
						listingKey: s
					} = t;
					return e.profilePrivatePage.api.pending[s]
				},
				k = (e, t) => {
					let {
						listingKey: s
					} = t;
					return e.profilePrivatePage.api.error[s]
				},
				_ = Object(w.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					return (e.profilePrivatePage.ids[s] || []).reduce((t, s) => {
						const o = Object(T.a)(s) ? e.comments.models[s].postId : s;
						return t[s] = o, t
					}, {})
				});
			var L = s("./src/reddit/selectors/user.ts");
			const M = Object(E.t)(),
				N = Object(E.t)(),
				R = {
					apiError: k,
					apiPending: S,
					layout: E.L,
					loadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						if (!e.profilePrivatePage.pageInfo || !e.profilePrivatePage.pageInfo[s] || !e.profilePrivatePage.pageInfo[s].hasNextPage) return null;
						const o = e.profilePrivatePage.ids[s];
						return {
							token: o[o.length - 1],
							dist: I.h
						}
					},
					subredditsById: e => e.subreddits.models,
					postsById: e => e.posts.models,
					viewportDataLoaded: (e, t) => !S(e, t) && !k(e, t)
				},
				A = Object(i.c)(Object.assign({}, R, {
					currentUser: L.i,
					commentsById: e => e.comments.models,
					itemIds: (e, t) => {
						let {
							listingKey: s
						} = t;
						return -1 === s.indexOf(P.a.Saved) && -1 === s.indexOf(P.a.ReceivedGildings) && -1 === s.indexOf(P.a.GivenGildings) ? [] : e.profilePrivatePage.ids[s] || []
					},
					itemIdToPostId: _,
					estimateItemHeight: y.b
				})),
				B = Object(i.c)(Object.assign({}, R, {
					measureScrollFPS: C.d.measureScrollFPS,
					postIds: (e, t) => {
						let {
							listingKey: s
						} = t;
						return s.indexOf(P.a.Saved) > -1 || s.indexOf(P.a.ReceivedGildings) > -1 || s.indexOf(P.a.GivenGildings) > -1 ? [] : e.profilePrivatePage.ids[s] || []
					},
					postListPlaceholderComponent: () => O.a
				})),
				F = e => ({
					onBottomViewed: x.a,
					openPost: t => {
						e(v.H(t))
					},
					trackOnPostEnteredViewport: x.a,
					fireAdPixelsOfType: (t, s) => {
						e(v.y(t, s))
					}
				}),
				D = Object(r.b)(A, F, (e, t, s) => Object.assign({}, e, t, s, {
					postClickEvent: j.f
				})),
				H = Object(r.b)(B, e => Object.assign({}, F(e), {
					adBrandSafetyStatusReceived: x.a,
					trackOnPostExitedViewport: x.a
				}), (e, t, s) => Object.assign({}, e, t, s, {
					postClickEvent: j.f,
					postComponentForLayout: g.b
				}));
			var W = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				V = s("./src/reddit/helpers/trackers/screenview.ts"),
				G = s("./src/reddit/layout/page/Listing/index.tsx"),
				U = s("./src/reddit/pages/ProfilePrivate/index.m.less"),
				z = s.n(U);
			const K = Object(i.c)({
					currentUser: L.i
				}),
				q = Object(r.b)(K, (e, t) => ({
					onLoadMore: () => e(Object(a.moreProfilePrivateRequested)(t.match.params.listingType))
				})),
				J = (e => Object(f.b)(M(D(e))))(p.a),
				Q = (e => Object(f.b)(N(H(e))))(m.a);
			class Z extends n.a.Component {
				constructor() {
					super(...arguments), this.onLoadMore = () => this.props.onLoadMore()
				}
				renderNoPosts(e) {
					const t = e === P.a.GivenGildings ? "given any awards" : e === P.a.ReceivedGildings ? "received any awards" : "".concat(e, " anything");
					return () => n.a.createElement(d.d, {
						verb: t
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
					} = this.props, o = s.toLowerCase(), r = Object(W.b)(o, t);
					return e && e.displayText && e.displayText.toLowerCase() === o ? t === P.a.Saved || t === P.a.ReceivedGildings || t === P.a.GivenGildings ? n.a.createElement(J, {
						className: z.a.mixedList,
						itemComponent: l.a,
						listingKey: r,
						noPostsComponent: this.renderNoPosts(t),
						listingName: o,
						listingViewed: Object(V.m)(r),
						onLoadMore: this.onLoadMore
					}) : n.a.createElement(Q, {
						listingKey: r,
						noPostsComponent: this.renderNoPosts(t),
						listingName: o,
						listingViewed: Object(V.m)(r),
						onLoadMore: this.onLoadMore
					}) : n.a.createElement(d.a, null)
				}
				render() {
					const {
						profileName: e
					} = this.props.match.params;
					return n.a.createElement(G.a, {
						fitPageToContent: !0,
						contentNavBar: n.a.createElement(u.a, {
							profileName: e
						}),
						content: n.a.createElement(n.a.Fragment, null, n.a.createElement(c.a, null), this.renderContent()),
						sidebar: n.a.createElement(b.a, {
							profileName: e
						})
					})
				}
			}
			t.default = q(Z)
		},
		"./src/reddit/selectors/experiments/goldAwardedCommentHighlight.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const i = e => !!(e => {
				const t = Object(n.c)(e, {
					experimentEligibilitySelector: e => Object(r.G)(e),
					experimentName: o.H
				});
				return Object(o.Ob)(t) ? void 0 : t
			})(e)
		},
		"./src/reddit/selectors/experiments/publicAwarding.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: o.hb
				});
				return Object(o.Ob)(t) ? void 0 : t
			}
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
		}
	}
]);
//# sourceMappingURL=ProfilePrivate.1c89115108019b99aa81.js.map