// https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e.a943ba84c54e846c3ee8.js
// Retrieved at 8/10/2022, 7:10:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"], {
		"./src/lib/addAllowQuarantinedParam/index.ts": function(e, t, s) {
			"use strict";
			var i = s("./src/lib/addQueryParams/index.ts");
			t.a = e => Object(i.a)(e, {
				allow_quarantined: !0
			})
		},
		"./src/lib/onFocusAndVisibilityChange/index.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./node_modules/brcast/dist/brcast.es.js");
			const n = () => "undefined" != typeof document,
				o = () => n() && "visible" === document.visibilityState,
				r = () => ({
					documentInFocus: o()
				}),
				{
					subscribe: a,
					unsubscribe: d,
					setState: c
				} = Object(i.a)(r()),
				l = {
					hidden: "visibilitychange",
					webkitHidden: "webkitvisibilitychange",
					mozHidden: "mozvisibilitychange",
					msHidden: "msvisibilitychange"
				},
				u = () => c(r());
			(() => {
				const e = (() => {
					if (!n()) return;
					const e = Object.keys(l).find(e => e in document);
					return e ? l[e] : void 0
				})();
				e && document.addEventListener(e, u)
			})(), t.a = {
				isDocumentHidden: () => !o(),
				isDocumentVisible: o,
				subscribe: a,
				unsubscribe: d
			}
		},
		"./src/reddit/actions/appBadgeIndicators/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return i
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "a", (function() {
				return r
			}));
			const i = "APP_BADGES__PENDING",
				n = "APP_BADGES__LOADED",
				o = "APP_BADGES__UPDATED",
				r = "APP_BADGES__FAILED"
		},
		"./src/reddit/actions/appBadgeIndicators/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "d", (function() {
				return f
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "b", (function() {
				return g
			}));
			var i = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/appBadgeIndicators/constants.ts"),
				o = s("./src/reddit/actions/tabBadging.ts"),
				r = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/redditGQL/operations/BadgeIndicators.json"),
				d = e => Object(r.a)(e, {
					...a
				}),
				c = s("./src/reddit/models/Badge/index.ts");
			const l = Object(i.a)(n.c),
				u = Object(i.a)(n.b),
				p = Object(i.a)(n.d),
				b = Object(i.a)(n.a),
				m = e => {
					let {
						key: t,
						count: s
					} = e;
					return {
						[t]: {
							count: s,
							style: c.b.Numbered
						}
					}
				},
				f = (e, t) => ({
					[c.c.ChatUnreadMessages]: {
						count: e,
						style: c.b.Numbered
					},
					[c.c.ChatHasNewMessages]: {
						isShowing: t,
						style: c.b.Filled
					}
				}),
				h = () => async (e, t, s) => {
					let {
						gqlContext: i
					} = s;
					e(l());
					const n = await async function(e) {
						const t = await d(e());
						if (t.ok && t.body) {
							return function(e) {
								var t;
								const s = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.badgeIndicators;
								if (s) return {
									...s,
									chatUnreadMessages: {
										count: (Number(s.chatUnreadMessages.count) || 0) + (Number(s.chatUnacceptedInvites.count) || 0) + (Number(s.chatUnreadMentions.count) || 0)
									}
								}
							}(t.body)
						}
					}(i);
					n ? (e(u(n)), e(Object(o.d)())) : e(b())
				};
			const g = () => async e => {
				const t = m({
					key: c.c.MessageTab,
					count: 0
				});
				e(p(t))
			}
		},
		"./src/reddit/actions/moderatingSubreddits.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			}));
			var i = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/profile/index.ts"),
				o = (s("./src/reddit/endpoints/moderator/moderatingSubreddits.ts"), s("./src/reddit/models/User/index.ts")),
				r = s("./src/reddit/selectors/user.ts");
			const a = "MOD_PERMS__REQUEST_LOADED",
				d = (Object(i.a)("MOD_PERMS__REQUEST_PENDING"), Object(i.a)(a), Object(i.a)("MOD_PERMS__REQUEST_FAILED"), () => async (e, t) => {
					const s = Object(r.k)(t());
					if (s) {
						const t = Object(o.e)(s);
						await e(Object(n.b)(t))
					}
				})
		},
		"./src/reddit/actions/pages/multireddit/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return i
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return o
			}));
			const i = "PAGE__MULTIREDDIT_FEED_PENDING",
				n = "PAGE__MULTIREDDIT_FEED_LOADED",
				o = "PAGE__MULTIREDDIT_FEED_FAILED"
		},
		"./src/reddit/actions/pages/profilePosts.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "PROFILE_POSTS_PENDING", (function() {
				return ee
			})), s.d(t, "PROFILE_POSTS_LOADED", (function() {
				return te
			})), s.d(t, "PROFILE_POSTS_FAILED", (function() {
				return se
			})), s.d(t, "profilePostsPending", (function() {
				return ie
			})), s.d(t, "profilePostsLoaded", (function() {
				return ne
			})), s.d(t, "profilePostsFailed", (function() {
				return oe
			})), s.d(t, "profilePostsRequested", (function() {
				return re
			})), s.d(t, "MORE_POSTS_PENDING", (function() {
				return ae
			})), s.d(t, "MORE_POSTS_LOADED", (function() {
				return de
			})), s.d(t, "MORE_POSTS_FAILED", (function() {
				return ce
			})), s.d(t, "morePostsPending", (function() {
				return le
			})), s.d(t, "morePostsLoaded", (function() {
				return ue
			})), s.d(t, "morePostsFailed", (function() {
				return pe
			})), s.d(t, "morePostsRequested", (function() {
				return be
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./node_modules/lodash/pick.js"),
				n = s.n(i),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/makeListingKey/index.ts"),
				a = s("./src/lib/safeGet/index.ts"),
				d = s("./src/reddit/actions/contentGate.ts"),
				c = s("./src/reddit/actions/externalAccount.ts"),
				l = s("./src/reddit/actions/moderatingSubreddits.ts"),
				u = s("./src/reddit/actions/pages/profileShared.ts"),
				p = s("./src/reddit/actions/pinnedPost.ts"),
				b = s("./src/reddit/actions/platform.ts"),
				m = s("./src/reddit/actions/profile/index.ts"),
				f = s("./src/reddit/actions/subreddit.ts"),
				h = s("./src/reddit/constants/errors.ts"),
				g = s("./src/reddit/constants/parameters.ts"),
				O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				y = s("./src/lib/makeGqlRequest/index.ts"),
				P = s("./src/redditGQL/operations/ProfileFeed.json");
			const v = async (e, t) => await Object(y.a)(e, {
				...P,
				variables: t
			}), j = (e, t) => {
				const {
					username: s,
					profileSort: i,
					filter: n,
					listingKey: o
				} = t, r = {
					username: s,
					sort: i.toUpperCase(),
					filter: n
				}, d = Object(a.a)(e.listings.postOrder.loadMore, o);
				if (d) {
					const {
						token: e
					} = d;
					r.after = btoa(e)
				}
				return r
			};
			var _ = s("./src/config.ts"),
				C = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				E = s("./src/lib/constants/index.ts"),
				T = s("./src/lib/makeApiRequest/index.ts"),
				w = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				S = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const I = (e, t, s) => Object(T.a)(e, {
				data: s,
				endpoint: Object(w.a)(Object(C.a)(Object(S.a)(`${_.a.gatewayUrl}/desktopapi/v1/user/${t}/posts`))),
				method: E.jb.GET
			}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
				...e,
				body: {
					...e.body,
					pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
				}
			} : e);
			var D = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				x = s("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				A = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				R = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				M = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				k = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				F = s("./src/reddit/models/Post/index.ts");
			const N = (e, t) => {
				if (!Object(F.l)(t) && !Object(F.n)(t)) return null;
				if (e.posts[t.id]) return t.id;
				const s = Object(R.f)(t),
					{
						id: i
					} = s;
				e.posts[i] = s;
				const {
					crosspostRoot: n
				} = t;
				n && n.type === F.a.Post && n.postInfo && N(e, n.postInfo), s.isStickied && e.pinned.push(i);
				const {
					authorFlair: o
				} = t;
				if (o) {
					const t = s.belongsTo.id;
					e.authorFlair[t] || (e.authorFlair[t] = {}), e.authorFlair[t][s.author] = Object(x.a)(o)[0]
				}
				if (Object(F.l)(t)) {
					const {
						profile: s
					} = t;
					e.profiles[s.id] || (e.profiles[s.id] = Object(M.a)(s))
				} else if (Object(F.n)(t)) {
					const {
						subreddit: s
					} = t;
					e.subreddits[s.id] || (e.subreddits[s.id] = Object(k.a)(s)), e.postFlair[s.id] || (e.postFlair[s.id] = Object(A.a)(s))
				}
				return i
			};
			var L = s("./src/reddit/models/Comment/index.ts"),
				V = e => {
					var t;
					const s = {
							authorFlair: {},
							pinned: new Array,
							postIds: new Array,
							posts: {},
							postFlair: {},
							profiles: {},
							subreddits: {},
							token: ""
						},
						i = null === (t = null == e ? void 0 : e.redditorInfoByName) || void 0 === t ? void 0 : t.elements;
					if (!i) return s;
					const {
						edges: n
					} = i;
					for (const {
							node: a
						} of n) {
						if (!a || a.__typename === L.d.Comment) continue;
						const e = N(s, a);
						e && s.postIds.push(e)
					}
					const {
						postIds: o
					} = s, r = o.length - 1;
					return r >= 0 && (s.token = o[r]), s
				},
				G = s("./node_modules/@sentry/minimal/esm/index.js"),
				U = s("./node_modules/deep-diff/index.js"),
				q = s("./src/lib/env/index.ts");
			const B = new Set(["authorFlair.cssClass", "posts.adSupplementaryText", "posts.allAwardings", "posts.approvedAtUTC", "posts.approvedBy", "posts.attributionInfo", "posts.audioRoom", "posts.bannedAtUTC", "posts.bannedBy", "posts.collapsedBecauseCrowdControl", "posts.ignoreReports", "posts.isApproved", "posts.isAuthorPremium", "posts.isEligibleForLinkedPosts", "posts.isEligibleForQASchema", "posts.isFollowed", "posts.isPinned", "posts.isReactAllowed", "posts.isRemoved", "posts.isSpam", "posts.lastAuthorModNote", "posts.modQueueTriggers", "posts.modReportsDismissed", "posts.pollData", "posts.predictionTournament", "posts.previewComments", "posts.modReports", "posts.numReports", "posts.reactedFrom", "posts.removedBy", "posts.removedByCategory", "posts.topAwardedType", "posts.userReports", "posts.userReportsDismissed", "posts.modReasonBy", "subreddits.answerableQuestions", "subreddits.freeFormReports", "subreddits.isSubscribed", "authorFlair.richtext", "authorFlair.text", "posts.collectionIds", "posts.liveCommentsWebsocket", "posts.thumbnail.url", "posts.discussionType", "posts.eventsOnRender", "posts.flair", "posts.gildings", "posts.media", "posts.goldCount", "posts.sendReplies", "posts.score", "posts.sendReplies", "posts.source.url", "posts.source.outboundUrl", "posts.source.outboundUrlCreated", "posts.source.outboundUrlExpiration", "profiles.acceptFollowers", "profiles.communityIcon", "profiles.icon.url", "posts.upvoteRatio", "subreddits.acceptFollowers", "subreddits.allowChatPostCreation", "subreddits.communityIcon", "subreddits.icon.url", "subreddits.isChatPostFeatureEnabled", "subreddits.primaryColor", "subreddits.subscribers"]),
				$ = (e, t) => {
					const s = {},
						i = {};
					Object.keys(e).forEach(n => {
						const o = e[n] || {},
							r = t[n] || {};
						s[n] = {}, i[n] = 0, Object.keys(o).forEach(e => {
							const t = o[e],
								a = r[e],
								d = Object(U.diff)(t, a, {
									prefilter: (e, t) => B.has(`${n}.${e.length?`${e.join(".")}.`:""}${t}`) || B.has(`${n}.${t}`),
									normalize: (e, t, s, i) => s || i ? [s, i] : [s, s]
								});
							i[n] = d ? i[n] + d.length : (null == i ? void 0 : i[n]) || 0, d && (s[n][e] = {
								gatewayThing: t,
								gqlThing: a,
								diffResult: d
							})
						})
					});
					const n = Object.keys(i).reduce((e, t) => e += i[t], 0);
					return {
						allDiffs: s,
						issueCounts: i,
						totalIssues: n
					}
				};

			function H(e) {
				let {
					gatewayResponse: t,
					normalizedGqlResponse: s,
					rawGqlResponse: i
				} = e;
				if (Object(q.a)()) {
					console.group("GQL Profiles Shadowtest"), console.groupCollapsed("raw gql response"), console.log(i), console.groupEnd(), console.groupCollapsed("normalized gql response"), console.log(s), console.groupEnd(), console.groupCollapsed("gateway response"), console.log(t), console.groupEnd();
					const {
						allDiffs: e,
						issueCounts: n,
						totalIssues: o
					} = $(t, s);
					console.groupCollapsed(`diff: ${o} issues`), console.log("lhs = gateway\nrhs = gql");
					for (const t in e) {
						if (console.groupCollapsed(`${t}: ${n[t]} issues`), n[t] > 0)
							for (const s in e[t]) {
								const i = e[t][s].diffResult;
								console.groupCollapsed(`${s}: ${i.length||0} issues`), console.log(i), console.log({
									gql: e[t][s].gqlThing,
									gateway: e[t][s].gatewayThing
								}), console.groupEnd()
							}
						console.groupEnd()
					}
					console.groupEnd()
				}
				if (Object(q.b)()) {
					const {
						allDiffs: e,
						issueCounts: i,
						totalIssues: n
					} = $(t, s);
					if (n <= 0) return;
					G.l(t => {
						t.setExtra("info", {
							allDiffs: e,
							issueCounts: i,
							totalIssues: n
						}), t.setExtra("bypassSampling", !0), G.d("GQL Profiles Shadowtest Diff")
					})
				}
			}
			var z = s("./src/reddit/helpers/post/index.ts"),
				Q = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				W = s("./src/reddit/constants/experiments.ts"),
				K = s("./src/reddit/helpers/chooseVariant/index.ts");
			const J = e => {
				return Object(K.c)(e, {
					experimentEligibilitySelector: K.a,
					experimentName: W.vc
				}) === W.Jd
			};
			var X = s("./src/reddit/selectors/listings.ts"),
				Y = s("./src/reddit/selectors/profile.ts"),
				Z = s("./src/redditGQL/types.ts");
			const ee = "PAGE__PROFILE_POSTS_PENDING",
				te = "PAGE__PROFILE_POSTS_LOADED",
				se = "PAGE__PROFILE_POSTS_FAILED",
				ie = Object(o.a)(ee),
				ne = Object(o.a)(te),
				oe = Object(o.a)(se),
				re = e => async (t, s, i) => {
					const {
						queryParams: o,
						params: y
					} = e, {
						sort: P,
						t: _
					} = Object(u.b)(o), {
						profileName: C
					} = y, E = Object(r.a)(`u_${C}`, P, o), T = s(), w = Object(a.a)(T.listings.postOrder.ids, E), S = Object(X.c)(T, {
						listingKey: E
					}), x = Object(X.d)(T, {
						listingKey: E
					});
					if (await t(m.d(C)), x || w && !S) {
						if (w) {
							const e = Object(Y.r)(s(), {
								profileName: C
							});
							t(b.m({
								title: e
							}))
						}
						return
					}
					const A = {
						...n()(e.queryParams, [...g.k, ...g.j, g.g]),
						layout: Object(O.S)(T, {}).toLowerCase(),
						sort: P,
						t: Object(D.a)(P, _)
					};
					t(ie({
						key: E
					}));
					const R = await Object(Q.a)("profilePosts", () => I(i.apiContext(), C, A));
					if (!R.ok) return t(oe({
						account: R.body.data ? R.body.data.account : null,
						error: R.body.reason ? {
							type: R.body.reason
						} : R.error,
						key: E
					})), R.body.reason === h.a.DeletedProfile && t(Object(d.s)({
						profileName: C
					})), void t(b.n(R.status));
					const M = R.body;
					if (await Object(z.a)(i.gqlContext, M.posts).then(e => M.posts = e), J(T)) {
						const e = j(T, {
								username: C,
								profileSort: P,
								filter: Z.C.Posts,
								listingKey: E
							}),
							t = await v(i.gqlContext(), e);
						if (t.ok && t.body) {
							const {
								data: e
							} = t.body, s = V(e);
							H({
								gatewayResponse: {
									authorFlair: M.authorFlair,
									pinned: M.pinned,
									postIds: M.postIds,
									posts: M.posts,
									postFlair: M.postFlair,
									profiles: M.profiles,
									subreddits: M.subreddits,
									token: M.token
								},
								normalizedGqlResponse: s,
								rawGqlResponse: e
							})
						}
					}
					t(ne({
						key: E,
						meta: s().meta,
						...M
					}));
					const k = Object(Y.n)(s(), C),
						{
							pinned: F
						} = M;
					t(Object(p.h)({
						profileId: k,
						pinned: F
					})), await Promise.all([t(Object(u.c)(C)), t(Object(f.q)()), t(Object(l.b)()), t(c.o(C))])
				}, ae = "PROFILE_POSTS__MORE_POSTS_PENDING", de = "PROFILE_POSTS__MORE_POSTS_LOADED", ce = "PROFILE_POSTS__MORE_POSTS_FAILED", le = Object(o.a)(ae), ue = Object(o.a)(de), pe = Object(o.a)(ce), be = () => async (e, t, s) => {
					let {
						apiContext: i,
						gqlContext: o
					} = s;
					const a = t(),
						{
							currentPage: d
						} = a.platform;
					if (!d || !d.routeMatch) return;
					const {
						queryParams: c,
						params: l
					} = d.routeMatch.match, {
						sort: p,
						t: b
					} = Object(u.b)(c), {
						profileName: m
					} = l, f = Object(r.a)(`u_${m}`, p, c), h = Object(X.g)(a, {
						listingKey: f
					});
					if (!h) return;
					const y = Object(X.d)(a, {
							listingKey: f
						}),
						P = Object(X.e)(a, {
							listingKey: f,
							token: h.token
						});
					if (y || P) return;
					e(le({
						key: f,
						fetchedToken: h.token
					}));
					const _ = {
							after: h.token,
							dist: h.dist,
							sort: p,
							t: b,
							...n()(c, g.k),
							layout: Object(O.S)(a, {}).toLowerCase()
						},
						C = await I(i(), m, _),
						E = C.body,
						T = a.listings.postOrder.ids[f],
						w = E.postIds || [];
					await Object(z.a)(o, E.posts).then(e => E.posts = e);
					const S = {
						...E,
						postIds: w.filter(e => !T || !T.includes(e))
					};
					if (C.ok) {
						if (J(a)) {
							const e = j(a, {
									username: m,
									profileSort: p,
									filter: Z.C.Posts,
									listingKey: f
								}),
								t = await v(o(), e);
							if (t.ok && t.body) {
								const {
									data: e
								} = t.body, s = V(e);
								H({
									gatewayResponse: {
										authorFlair: S.authorFlair,
										pinned: S.pinned,
										postIds: S.postIds,
										posts: S.posts,
										postFlair: S.postFlair,
										profiles: S.profiles,
										subreddits: S.subreddits,
										token: S.token
									},
									normalizedGqlResponse: s,
									rawGqlResponse: e
								})
							}
						}
						e(ue({
							fetchedToken: h.token,
							key: f,
							meta: a.meta,
							...S
						})), await e(Object(u.c)(m))
					} else e(pe({
						account: C.body.data ? C.body.data.account : null,
						error: C.error,
						fetchedToken: h.token,
						key: f
					}))
				}
		},
		"./src/reddit/actions/pinnedPost.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "h", (function() {
				return f
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "c", (function() {
				return P
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "e", (function() {
				return E
			})), s.d(t, "i", (function() {
				return R
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/modal.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/constants/modals.ts"),
				c = s("./src/reddit/endpoints/post/index.tsx"),
				l = s("./src/reddit/models/Toast/index.ts"),
				u = s("./src/reddit/selectors/experiments/cnc/index.ts"),
				p = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/profile.ts");
			const m = "PINNEDPOST__PINNED_POSTS_LOADED",
				f = Object(o.a)(m),
				h = "PINNEDPOST__PIN_POST_SUCCESS",
				g = "PINNEDPOST__UNPIN_POST_SUCCESS",
				O = Object(o.a)(h),
				y = Object(o.a)(g),
				P = "PINNEDPOST__PIN_POST_PENDING",
				v = "PINNEDPOST__UNPIN_POST_PENDING",
				j = Object(o.a)(P),
				_ = Object(o.a)(v),
				C = "PINNEDPOST__PIN_POST_FAILURE",
				E = "PINNEDPOST__UNPIN_POST_FAILURE",
				T = Object(o.a)(C),
				w = Object(o.a)(E),
				S = e => Object(a.f)({
					buttonAction: R(e, !0),
					buttonText: i.fbt._("UNDO", null, {
						hk: "1O9LWh"
					}),
					kind: l.b.SuccessMod,
					text: i.fbt._("Post pinned to profile!", null, {
						hk: "1hbHLt"
					})
				}),
				I = (e, t) => Object(a.f)({
					buttonAction: R(e, !0),
					buttonText: i.fbt._("UNDO", null, {
						hk: "3YtcK2"
					}),
					kind: l.b.SuccessMod,
					text: t ? i.fbt._("Post unpinned, reload to see changes", null, {
						hk: "5FF1g"
					}) : i.fbt._("Post unpinned.", null, {
						hk: "2BgT0h"
					})
				}),
				D = () => Object(a.f)({
					kind: l.b.Error,
					text: i.fbt._("Could not pin post", null, {
						hk: "3uNHEh"
					})
				}),
				x = () => Object(a.f)({
					kind: l.b.Error,
					text: i.fbt._("You can't pin a removed post", null, {
						hk: "3bdn2y"
					})
				}),
				A = () => Object(a.f)({
					kind: l.b.Error,
					text: i.fbt._("Could not unpin post", null, {
						hk: "o8HG0"
					})
				}),
				R = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return async (s, i, o) => {
						let {
							apiContext: a,
							gqlContext: l
						} = o;
						const m = i(),
							f = m.posts.models[e];
						if (!f) return;
						const h = !Object(p.s)(m, {
							postId: e
						});
						if (h && f.isRemoved) return s(x());
						const g = f.author,
							P = Object(b.n)(m, g),
							[v, C, E, R, M] = h ? [j, O, T, S, D] : [_, y, w, I, A];
						if (h) {
							if (Object(p.P)(m, {
									profileName: g
								}).length >= n.cb) return void s(Object(r.i)(d.a.PINNED_POSTS_LIMIT_REACHED))
						}
						const k = Object(p.p)(m, e, g),
							F = !h && k;
						s(v({
							postId: e,
							profileId: P
						})), (Object(u.c)(m) ? await Object(c.j)(l(), e, h, !0) : await Object(c.v)(a(), e, h, !0)).ok ? (s(C({
							postId: e,
							profileId: P
						})), t || s(R(e, F))) : (s(E({
							postId: e,
							profileId: P
						})), s(M()))
					}
				}
		},
		"./src/reddit/actions/postCreation/subredditChange.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return j
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "a", (function() {
				return C
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "c", (function() {
				return T
			}));
			var i = s("./node_modules/react-router-redux/es/index.js"),
				n = s("./src/lib/addQueryParams/index.ts"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/filterQueryParams/index.ts"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/actions/pages/postCreation.ts"),
				l = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				u = s("./src/reddit/helpers/name/index.ts"),
				p = s("./src/reddit/models/PostCreationForm/index.ts"),
				b = s("./src/reddit/routes/postCreation/index.ts"),
				m = s("./src/reddit/routes/postCreation/constants.ts"),
				f = s("./src/reddit/selectors/postCreations.ts"),
				h = s("./src/reddit/selectors/platform.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/actions/postCreation/constants.ts"),
				y = s("./src/reddit/actions/postCreation/general.ts");
			const P = Object(a.a)(O.N),
				v = Object(a.a)(O.O),
				j = Object(a.a)(O.M),
				_ = (e, t) => async (s, i, n) => {
					let {
						apiContext: r
					} = n, a = i();
					const {
						name: b,
						isProfile: m
					} = e, O = Object(h.e)(a), y = O && !m && Object(u.a)(O.name, b), v = a.creations.api.subreddit.change.pending;
					if (y || v) return;
					const j = Object(l.w)(t);
					if (!b) return void s(C(e, j));
					s(P(e));
					const _ = m ? {
						profileName: b
					} : {
						subredditName: b
					};
					if (await s(Object(c.postCreationPageDataRequested)(_)), m || !Object(f.C)(a)) return s(C(e, j));
					const E = e.allowedPostTypes || Object(g.z)(i(), {
						subredditName: b
					});
					if (!E) return void s(C(e, j));
					let T;
					a = i();
					const w = Object(f.mb)(a),
						S = Object(f.C)(a);
					if (w === o.Wb.MEDIA && S) {
						const e = Object(f.W)(a),
							t = Object(p.x)(e),
							s = Object(f.N)(a) && e.items.length > 1,
							i = !t && !s;
						if (s && !E.galleries) T = p.q.GalleryWillBeRemovedGalleryNotAllowed;
						else if (i && !E.images) T = p.q.ImageWillBeRemoved;
						else if (t && !E.videos) {
							const t = a.uploads[e.items[0].uploadKey],
								s = t && t.metadata.videoDuration || 0;
							E.images ? s > o.gb && (T = p.q.VideoWillBeRemovedTooLongForGif) : T = p.q.VideoWillBeRemovedMediaNotAllowed
						}
					}
					s(T ? Object(d.i)(T) : C({
						...e,
						allowedPostTypes: E
					}, j))
				}, C = function(e, t) {
					let s = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
					return async (o, r) => {
						const {
							name: a,
							isProfile: d
						} = e, c = r().platform.currentPage, l = c.queryParams, u = d ? b.b : b.c;
						let p = "";
						p = a ? u(a) : m.b, p = Object(n.a)(p, {
							...l,
							draft: t || l.draft
						}), (t || c.url.toLowerCase() !== p.toLowerCase()) && (o(v(e)), s && o(Object(y.t)(!0)), o(Object(y.i)()), o(Object(i.c)(p)))
					}
				}, E = e => async (t, s) => {
					const o = s().platform.currentPage,
						r = o.queryParams,
						a = Object(n.a)(o.url, {
							...r,
							collection: e
						});
					t(Object(i.c)(a))
				}, T = () => async (e, t) => {
					const s = t().platform.currentPage,
						n = Object(r.a)(s.url, ["collection"]);
					e(Object(i.c)(n))
				}
		},
		"./src/reddit/actions/postDraft.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return D
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "d", (function() {
				return A
			})), s.d(t, "p", (function() {
				return F
			})), s.d(t, "j", (function() {
				return N
			})), s.d(t, "l", (function() {
				return L
			})), s.d(t, "i", (function() {
				return V
			})), s.d(t, "m", (function() {
				return G
			})), s.d(t, "k", (function() {
				return U
			})), s.d(t, "h", (function() {
				return q
			})), s.d(t, "n", (function() {
				return B
			})), s.d(t, "s", (function() {
				return J
			})), s.d(t, "r", (function() {
				return X
			})), s.d(t, "g", (function() {
				return Y
			})), s.d(t, "q", (function() {
				return ee
			})), s.d(t, "c", (function() {
				return te
			})), s.d(t, "a", (function() {
				return se
			})), s.d(t, "b", (function() {
				return ie
			})), s.d(t, "o", (function() {
				return ae
			}));
			var i = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/formatApiError/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/postCreation/general.ts"),
				a = s("./src/reddit/actions/postCreation/subredditChange.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				l = s("./src/lib/makeApiRequest/index.ts"),
				u = s("./src/lib/omitHeaders/index.ts"),
				p = s("./src/reddit/models/StructuredStyles/index.ts");
			var b = s("./src/reddit/constants/headers.ts"),
				m = s("./src/reddit/helpers/name/index.ts"),
				f = s("./src/reddit/models/PostDraft/index.ts"),
				h = s("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				g = s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"),
				O = s("./src/reddit/models/Subreddit/index.ts");
			const y = e => {
				let t = e.drafts.reduce((e, t) => {
					const s = (e => {
						let t;
						return t = "link" === e.kind ? {
							kind: f.b.Link,
							body: e.body || void 0
						} : "markdown" === e.kind ? {
							kind: f.b.Markdown,
							body: e.body || void 0
						} : {
							kind: f.b.RichText,
							body: e.body || void 0
						}, {
							subredditId: e.subreddit || void 0,
							contentCategory: e.content_category || void 0,
							created: e.created,
							flair: e.flair,
							id: e.id,
							isChatPost: !!e.discussion_type,
							isNSFW: !!e.nsfw,
							isOriginalContent: !!e.original_content,
							isSpoiler: !!e.spoiler,
							modified: e.modified || void 0,
							sendReplies: !!e.send_replies,
							isPublicLink: !!e.is_public_link,
							title: e.title || "",
							...t
						}
					})(t);
					return e.postDraftIds.push(s.id), e.postDrafts[s.id] = s, e
				}, {
					postDraftIds: [],
					postDrafts: {},
					profiles: {},
					subreddits: {}
				});
				return t = e.subreddits.reduce((e, t) => {
					if (t.subreddit_type === O.f.User) {
						const s = Object(h.a)(t, Object(m.h)(t.display_name_prefixed));
						e.profiles[s.id] = s
					} else {
						const s = Object(g.a)(t);
						e.subreddits[s.id] = s
					}
					return e
				}, t)
			};
			var P = s("./src/reddit/endpoints/post/draft/helpers.ts"),
				v = s("./src/reddit/models/PostCreationForm/index.ts"),
				j = s("./src/reddit/helpers/trackers/postComposer.ts"),
				_ = s("./src/reddit/models/Toast/index.ts"),
				C = s("./src/reddit/models/User/index.ts"),
				E = s("./src/reddit/selectors/postCreations.ts"),
				T = s("./src/reddit/selectors/postDraft.ts"),
				w = s("./src/reddit/selectors/profile.ts"),
				S = s("./src/reddit/selectors/subreddit.ts"),
				I = s("./src/reddit/selectors/user.ts");
			const D = "POST_DRAFT__LIST_PENDING",
				x = "POST_DRAFT__LIST_LOADED",
				A = "POST_DRAFT__LIST_FAILED",
				R = Object(o.a)(D),
				M = Object(o.a)(x),
				k = Object(o.a)(A),
				F = () => async (e, t, s) => {
					let {
						apiContext: n
					} = s;
					const o = t();
					if (!Object(I.k)(o) || Object(T.b)(o)) return;
					e(R());
					const r = await (e => Object(l.a)(Object(u.a)(e, [b.a]), {
						endpoint: `${e.apiUrl}/api/v1/drafts.json`,
						method: i.jb.GET
					}))(n());
					r.ok ? e(M(y(r.body))) : e(k(r.error))
				}, N = "POST_DRAFT__SAVE_DRAFT_PENDING", L = "POST_DRAFT__SAVE_DRAFT_SUCCEEDED", V = "POST_DRAFT__SAVE_DRAFT_FAILED", G = "POST_DRAFT__SAVE_DRAFT_VALIDATION_FAILED", U = "POST_DRAFT__SAVE_DRAFT_SUBMIT_VALIDATION_FAILED", q = "POST_DRAFT__SAVE_DRAFT_CAPTCHA_REQUIRED", B = "POST_CREATION__TOGGLE_DRAFT_IS_PUBLIC", $ = Object(o.a)(N), H = Object(o.a)(L), z = Object(o.a)(V), Q = Object(o.a)(G), W = Object(o.a)(U), K = Object(o.a)(q), J = Object(o.a)(B), X = e => async (t, s, o) => {
					let {
						apiContext: r
					} = o;
					const c = s(),
						p = Object(T.g)(c),
						m = Object(E.bb)(c);
					if (p || m) return;
					const f = Object(T.h)(c, e);
					if (!f) return;
					t($(f)), j.g(c, f);
					const h = await ((e, t, s) => Object(l.a)(Object(u.a)(e, [b.a]), {
						endpoint: `${e.apiUrl}/api/v1/draft`,
						method: s ? i.jb.PUT : i.jb.POST,
						data: Object(P.a)(t)
					}).then(e => e.body.fields && Object(v.w)(e.body.fields[0]) ? {
						...e,
						body: {},
						error: {
							type: i.I.SUBMIT_VALIDATION_ERROR,
							fields: [{
								field: e.body.fields[0],
								msg: e.body.explanation
							}]
						}
					} : e))(r(), f, e);
					if (h.ok) {
						const {
							id: s,
							draftsCount: i
						} = Object(P.c)(h.body);
						t(H({
							draftId: s,
							draftsCount: i
						})), e || t(Object(a.a)(f.destSubreddit, s, !1))
					} else {
						const e = h.error;
						e.type === i.I.BAD_CAPTCHA_ERROR ? t(K()) : e.type === i.I.VALIDATION_ERROR ? t(Q(e)) : e.type === i.I.SUBMIT_VALIDATION_ERROR ? t(W(e)) : t(z(e)), t(Object(d.f)({
							duration: d.a,
							kind: _.b.Error,
							text: Object(n.a)(e)
						}))
					}
				}, Y = "POST_DRAFT__LOAD_DRAFT", Z = Object(o.a)(Y), ee = e => async (t, s, i) => {
					let {
						apiContext: n
					} = i;
					t(Z(e));
					let o = v.f;
					const r = s();
					if (e.subredditId) {
						const t = Object(S.V)(r, {
								subredditId: e.subredditId
							}),
							s = Object(w.q)(r, {
								profileId: e.subredditId
							}),
							i = Object(I.k)(r);
						t ? o = {
							isProfile: !1,
							name: t.name
						} : s && i && (o = {
							isProfile: !0,
							name: Object(C.e)(i)
						})
					}
					await t(Object(a.a)(o, e.id, !1));
					const d = Object(T.h)(s(), e.id);
					d && j.j(s(), d)
				}, te = "POST_DELETE_DRAFT_SUCCEEDED", se = "POST_DELETE_DRAFT_FAILED", ie = "POST_DELETE_DRAFT_PENDING", ne = Object(o.a)(te), oe = Object(o.a)(se), re = Object(o.a)(ie), ae = (e, t) => async (s, o, a) => {
					let {
						apiContext: b
					} = a;
					const m = o();
					if (Object(T.a)(m, e)) return;
					const f = Object(T.d)(m, {
						draftId: e
					});
					f && j.h(m, f), s(re({
						draftId: e
					}));
					const h = await (async (e, t) => Object(l.a)(Object(u.a)(e, [p.g]), {
						endpoint: `${e.apiUrl}/api/v1/draft?draft_id=${t}`,
						method: i.jb.DELETE
					}))(b(), e);
					if (h.ok) {
						const {
							draftsCount: i
						} = Object(P.c)(h.body);
						s(ne({
							draftId: e,
							draftsCount: i
						}));
						const n = Object(c.w)(t);
						e === n && s(Object(r.q)(!0, t))
					} else {
						const t = h.error;
						s(oe({
							draftId: e,
							apiError: t
						})), s(Object(d.f)({
							duration: d.a,
							kind: _.b.Error,
							text: Object(n.a)(t)
						}))
					}
				}
		},
		"./src/reddit/actions/redditEmbed.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "c", (function() {
				return m
			}));
			var i = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/tabBadging.ts"),
				r = s("./src/reddit/endpoints/me/index.ts"),
				a = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				d = s("./src/reddit/helpers/trackers/screenview.ts");
			const c = "REDDIT_EMBED_LOADED",
				l = "REDDIT_EMBED_FAILED",
				u = Object(n.a)("REDDIT_EMBED_PENDING"),
				p = Object(n.a)(c),
				b = Object(n.a)(l),
				m = (e, t) => async (e, s, i) => {
					let {
						apiContext: n
					} = i;
					const d = s();
					e(u());
					const c = await Object(r.a)(n());
					c.ok && c.body ? !t || c.body.account ? (e(p(c.body)), e(Object(o.d)()), f(d)) : Object(a.a)(e, d) : e(b(c.error))
				}, f = e => {
					e.platform.currentPage && e.platform.currentPage.routeMatch && e.platform.currentPage.routeMatch.route && e.platform.currentPage.routeMatch.route.meta && e.platform.currentPage.routeMatch.route.meta.name && e.platform.currentPage.routeMatch.route.meta.name === i.Nb.INBOX_PAGES && Object(d.g)(e)
				}
		},
		"./src/reddit/actions/tabBadging.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "e", (function() {
				return h
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "f", (function() {
				return O
			}));
			var i = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/fastdom/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				a = s("./src/reddit/helpers/tabBadging/index.ts"),
				d = s("./src/reddit/models/Badge/index.ts"),
				c = s("./src/reddit/selectors/appBadges.ts"),
				l = s("./src/reddit/selectors/user.ts"),
				u = s("./src/reddit/actions/appBadgeIndicators/index.ts");
			const p = "TAB__UPDATE_HAS_UNREAD_MESSAGES_BADGE",
				b = Object(o.a)(p),
				m = (e, t) => {
					e <= 0 ? n.a.write(() => {
						Object(a.b)(!1), window.document.title = t
					}) : n.a.write(() => {
						Object(a.b)(), window.document.title = `(${e}) ${t}`
					})
				},
				f = Object(i.c)({
					basicChannelCount: c.e,
					subredditChannelCount: c.d,
					subredditMentionCount: c.c
				}),
				h = () => async (e, t) => {
					const s = t(),
						i = Object(r.g)(s, {});
					if (!(Object(l.P)(s) || Object(l.Q)(s)) || !i) return;
					const n = Object(c.i)(s);
					m(n, i), e(b({
						hasUnreadMessages: !!n
					}))
				}, g = () => async (e, t) => {
					{
						e(h());
						const s = (e => ({
							inboxCount: Object(c.h)(e),
							basicChannelCount: Object(c.e)(e)
						}))(t());
						Object(a.c)(s)
					}
				}, O = e => async (t, s) => {
					const i = s(),
						n = Object(c.e)(i),
						o = Object(c.h)(i),
						{
							basicChannelCount: r,
							inboxCount: a
						} = e;
					if (n !== r) {
						const e = Object(u.e)({
							count: r,
							key: d.c.ChatTab
						});
						t(Object(u.a)(e))
					}
					if (a && a !== o) {
						const e = Object(u.e)({
							count: a,
							key: d.c.MessageTab
						});
						t(Object(u.a)(e))
					}(n !== r || a && a !== o) && t(h())
				}
		},
		"./src/reddit/components/AdViewability/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/lodash/isEqual.js"),
				n = s.n(i),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				c = s("./src/lib/ads/index.ts"),
				l = s("./src/lib/ads/store.ts"),
				u = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				p = s("./src/reddit/connectors/PostViewable/index.ts"),
				b = s("./src/reddit/constants/adEvents.ts"),
				m = s("./src/reddit/models/Media/index.ts"),
				f = s("./src/reddit/selectors/media.ts"),
				h = s("./src/reddit/selectors/video.ts");
			const g = [{
					event: b.a.ViewableImpression,
					threshold: c.l,
					viewabilityMinimum: c.m
				}, {
					event: b.a.Impression,
					threshold: c.c,
					viewabilityMinimum: c.d
				}, {
					event: b.a.GalleryItemImpression,
					threshold: c.c,
					viewabilityMinimum: c.d
				}, {
					event: b.a.VendorFullyInView,
					threshold: c.b,
					viewabilityMinimum: c.f
				}, {
					event: b.a.GroupMViewable,
					threshold: c.b,
					viewabilityMinimum: c.m
				}, {
					event: b.a.VendorFullyInViewSeconds5,
					threshold: c.l,
					viewabilityMinimum: c.h,
					remainingTime: c.h,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}, {
					event: b.a.VendorFullyInViewSeconds15,
					threshold: c.l,
					viewabilityMinimum: c.g,
					remainingTime: c.g,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}],
				O = [{
					event: b.a.VideoViewableImpression,
					threshold: c.l,
					viewabilityMinimum: c.k,
					remainingTime: c.k,
					timeViewingInterrupted: 0
				}, {
					event: b.a.VideoFullyViewableImpression,
					threshold: c.a,
					viewabilityMinimum: c.i,
					remainingTime: c.i,
					timeViewingInterrupted: 0
				}, {
					event: b.a.VideoGroupMViewable,
					threshold: void 0,
					viewabilityMinimum: c.k,
					remainingTime: void 0,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0,
					checkAudible: !0
				}, {
					event: b.a.VideoVendorFullyViewable50,
					threshold: c.a,
					viewabilityMinimum: void 0,
					remainingTime: void 0,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}],
				y = e => e.map(e => {
					let {
						event: t,
						cumulative: s = !1,
						cumulativeElapsedTime: i,
						remainingTime: n,
						threshold: o = null,
						viewabilityMinimum: r,
						checkAudible: a = !1,
						timeViewingInterrupted: d
					} = e;
					return {
						event: t,
						cumulative: s,
						checkAudible: a,
						timer: null,
						fired: !1,
						threshold: o,
						remainingTime: n,
						cumulativeElapsedTime: 0,
						viewabilityMinimum: r,
						timeViewingInitialized: 0,
						timeViewingInterrupted: d
					}
				}),
				P = () => y(g),
				v = () => y(O),
				j = [c.c, c.e, c.l, c.j, c.a, c.b],
				_ = [c.c, c.l, c.j, c.a],
				C = [c.c, c.e, c.l, c.b],
				E = e => "boolean" == typeof e.cumulative && e.cumulative,
				T = Object(a.c)({
					continuousViewingStartedAt: (e, t) => {
						let {
							post: s
						} = t;
						return Object(h.b)(e, {
							postId: s.id
						})
					},
					videoDuration: (e, t) => {
						let {
							post: s
						} = t;
						const i = Object(h.h)(e, {
							postId: s.id
						});
						if (i) return i.length
					},
					isAudible: e => Object(f.a)(e),
					isPlaying: (e, t) => {
						let {
							post: s
						} = t;
						return Object(h.d)(e, {
							postId: s.id
						})
					},
					isFullScreen: (e, t) => {
						let {
							post: s
						} = t;
						return Object(h.e)(e, {
							postId: s.id
						})
					}
				}),
				w = Object(p.a)(T);
			class S extends o.Component {
				constructor(e) {
					super(e), this.viewabilityStats = P(), this.videoStats = v(), this.pageInFocus = !0, this.inViewStats = [], this.outOfViewStats = [], this.handleViewabilityChange = e => {
						this.props.trackDisplay && this.handleThresholds(e, c.r), this.props.trackVideo && this.handleThresholds(e, c.p, !0), this.checkViewabilityByType(e)
					}, this.checkViewabilityByType = e => {
						if (n()(this.state.event, e) || this.setState({
								event: e
							}), this.props.trackDisplay) {
							const t = this.props.post.media && Object(m.E)(this.props.post.media);
							this.viewabilityStats.forEach(s => {
								(s.event !== b.a.GalleryItemImpression || t) && this.checkViewability(e, s)
							})
						}
						this.props.isPlaying && this.props.trackVideo && this.videoStats.forEach(t => {
							t.checkAudible && !this.props.isAudible || this.checkViewability(e, t)
						})
					}, this.state = {
						event: null,
						currentContinuousViewingStartedAt: e.continuousViewingStartedAt
					}
				}
				componentDidMount() {
					this.visibilityChangeSubscriptionId = u.a.subscribe(e => {
						this.pageInFocus = e.documentInFocus, this.state.event && this.handleViewabilityChange(this.state.event)
					})
				}
				componentWillUnmount() {
					const {
						post: e,
						trackDisplay: t,
						trackVideo: s
					} = this.props;
					this.visibilityChangeSubscriptionId && u.a.unsubscribe(this.visibilityChangeSubscriptionId), t && (l.d(e.id, c.r, !1), this.viewabilityStats.forEach(e => {
						E(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), s && (l.d(e.id, c.p, !0), this.videoStats.forEach(e => {
						E(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), this.outOfViewStats = [], this.inViewStats = []
				}
				componentDidUpdate() {
					this.props.trackVideo && (this.state.currentContinuousViewingStartedAt === this.props.continuousViewingStartedAt ? (this.handleThresholds(this.state.event, c.p, !0), this.videoStats.forEach(e => {
						!this.props.isPlaying || e.checkAudible && !this.props.isAudible ? e.cumulative ? this.pauseCumulativeStats(e) : this.pauseViewableStats(e) : this.checkViewability(this.state.event, e)
					})) : this.resetTimers())
				}
				resetTimers() {
					this.videoStats.forEach(e => {
						e.cumulative || this.resetTimer(e)
					}), this.setState({
						currentContinuousViewingStartedAt: this.props.continuousViewingStartedAt
					})
				}
				resetTimer(e) {
					this.clearTimer(e), e.timeViewingInitialized = 0, void 0 !== e.viewabilityMinimum && (e.remainingTime = e.viewabilityMinimum)
				}
				pauseViewableStats(e) {
					let t;
					if (!e.timer || e.fired) return;
					e.timeViewingInterrupted = Date.now();
					const s = e.timeViewingInterrupted - e.timeViewingInitialized;
					t = (e.viewabilityMinimum || 0) - s, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e)
				}
				pauseCumulativeStats(e) {
					let t;
					e.timer && !e.fired && (e.timeViewingInterrupted = Date.now(), e.cumulativeElapsedTime += e.timeViewingInterrupted - e.timeViewingInitialized, t = (e.viewabilityMinimum || 0) - e.cumulativeElapsedTime, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e))
				}
				meetsViewabilityRequirements(e, t) {
					let s, i = !1,
						n = !1;
					return "object" == typeof t ? (s = t.threshold, i = !!t.playing, n = !!t.withSound) : s = t, this.isAdequatelyInView(e, s) && (!i || this.props.isPlaying) && (!n || this.props.isAudible)
				}
				handleThresholds(e, t) {
					let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const {
						post: i
					} = this.props, o = t.filter(t => this.meetsViewabilityRequirements(e, t));
					!n()(o, this.inViewStats) && o.length > 0 && l.b(i.id, o, s);
					const r = t.filter(t => !this.meetsViewabilityRequirements(e, t));
					!n()(r, this.outOfViewStats) && r.length > 0 && l.d(i.id, r, s), this.outOfViewStats = r, this.inViewStats = o
				}
				isAdequatelyInView(e, t) {
					return !!this.props.isFullScreen || !!e && e.intersectionRatio >= t && this.pageInFocus
				}
				addDurationBasedViewabilityMinimum(e) {
					this.props.videoDuration ? e.viewabilityMinimum = Math.min(.5 * this.props.videoDuration, c.g) : e.viewabilityMinimum = c.g, e.remainingTime = e.viewabilityMinimum
				}
				adjustThreshold(e, t) {
					const {
						height: s,
						width: i
					} = e.boundingClientRect;
					return !t.threshold && t.event === b.a.VideoGroupMViewable && this.props.videoDuration && (t.threshold = i * s < 3e5 ? c.a : c.j, t.viewabilityMinimum = .5 * this.props.videoDuration), t.event === b.a.GroupMViewable && i * s > 242500 && (t.threshold = c.l), t
				}
				checkViewability(e, t) {
					if (E(t) && t.event === b.a.VideoVendorFullyViewable50 && this.addDurationBasedViewabilityMinimum(t), e && e.target && this.adjustThreshold(e, t), t.threshold && void 0 !== t.viewabilityMinimum) {
						if (this.isAdequatelyInView(e, t.threshold) && !t.fired) {
							if (t.timer) return;
							const e = this.getLengthForTimer(t);
							return e > 0 ? this.initTimer(t, e) : this.fireStat(t), void(t.timeViewingInitialized = Date.now())
						}
						E(t) && t.cumulative && this.pauseCumulativeStats(t), this.clearTimer(t)
					}
				}
				clearTimer(e) {
					e.timer && (clearTimeout(e.timer), e.timer = null)
				}
				getLengthForTimer(e) {
					return void 0 !== e.remainingTime ? e.remainingTime : e.viewabilityMinimum || 0
				}
				fireStat(e) {
					setTimeout(() => this.props.onPostViewable(this.props.post, e.event), 0), e.fired = !0
				}
				initTimer(e, t) {
					this.clearTimer(e), e.timer = window.setTimeout(() => {
						this.fireStat(e)
					}, t)
				}
				render() {
					const {
						trackDisplay: e,
						trackVideo: t
					} = this.props;
					let s = j;
					return e && !t ? s = C : !e && t && (s = _), r.a.createElement(d.a, {
						threshold: s,
						onChange: this.handleViewabilityChange
					}, this.props.children)
				}
			}
			t.a = w(S)
		},
		"./src/reddit/connectors/PostViewable/index.ts": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/reddit/actions/post.ts");
			t.a = (e, t) => Object(i.b)(e, function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return {
					...e,
					onPostViewable: n.Q
				}
			}(t))
		},
		"./src/reddit/constants/errors.ts": function(e, t, s) {
			"use strict";
			var i, n;
			s.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.BannedProfile = "BANNED", e.DeletedProfile = "DELETED", e.NotFoundProfile = "NOT_FOUND", e.ForbiddenProfile = "FORBIDDEN"
				}(i || (i = {})),
				function(e) {
					e.Unknown = "Unknown"
				}(n || (n = {}))
		},
		"./src/reddit/contexts/Post/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return m
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "e", (function() {
				return h
			})), s.d(t, "b", (function() {
				return g
			}));
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/reddit/constants/posts.ts"),
				a = s("./src/reddit/hooks/useMemoShallowEqual.ts"),
				d = s("./src/reddit/hooks/useUserContext.ts"),
				c = s("./src/reddit/models/User/index.ts"),
				l = s("./src/reddit/selectors/posts.ts"),
				u = s("./src/reddit/selectors/subreddit.ts");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const b = n.a.createContext(null);

			function m(e) {
				const t = Object(o.e)(t => Object(l.G)(t, {
						postId: e
					})),
					{
						currentUser: s
					} = Object(d.a)(),
					i = Object(o.e)(e => t ? Object(u.N)(e, {
						identifier: t.belongsTo
					}) : null),
					n = (null == t ? void 0 : t.belongsTo.type) === r.a.SUBREDDIT ? i : null,
					p = !(!s || (null == t ? void 0 : t.author) !== Object(c.e)(s)),
					b = Object(o.e)(o => ({
						currentUser: s,
						imageGalleryCurrentItem: Object(l.i)(o, {
							postId: e
						}),
						isModerator: !(!n || !o.moderatingSubreddits[n.name]),
						post: t,
						postId: e,
						subreddit: n,
						subredditOrProfile: i,
						userIsOp: p
					}));
				return Object(a.a)(b)
			}

			function f(e) {
				const {
					postId: t,
					children: s
				} = e, i = m(t);
				return n.a.createElement(b.Provider, {
					value: i
				}, s)
			}

			function h(e) {
				const t = e.displayName || e.name;

				function s(s) {
					return n.a.createElement(b.Consumer, null, i => {
						if (!i) throw new Error(`No Post context for <${t}/>!`);
						return n.a.createElement(e, p({}, s, i))
					})
				}
				return s.displayName = `PostContext(${t})`, s
			}

			function g(e) {
				const t = e.displayName || e.name;

				function s(t) {
					const s = m(t.postId);
					return n.a.createElement(b.Provider, {
						value: s
					}, n.a.createElement(e, p({}, t, s)))
				}
				return s.displayName = `PostProvider(${t})`, s
			}
			t.c = b
		},
		"./src/reddit/contexts/User/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "c", (function() {
				return b
			}));
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/reddit/hooks/useMemoShallowEqual.ts"),
				a = s("./src/reddit/reducers/user/prefs/index.ts"),
				d = s("./src/reddit/selectors/user.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const l = n.a.createContext({
				currentUser: null,
				modModeEnabled: !1,
				nightmodeEnabled: !1,
				prefs: a.a,
				isLoggedIn: !1
			});

			function u() {
				const e = Object(o.e)(e => ({
					currentUser: Object(d.k)(e),
					modModeEnabled: e.modModeEnabled,
					nightmodeEnabled: Object(d.db)(e),
					prefs: e.user.prefs,
					isLoggedIn: Object(d.Q)(e)
				}));
				return Object(r.a)(e)
			}

			function p(e) {
				return n.a.createElement(l.Provider, {
					value: u()
				}, e.children)
			}

			function b(e) {
				const t = e.displayName || e.name;

				function s(t) {
					return n.a.createElement(l.Consumer, null, s => n.a.createElement(e, c({}, t, s)))
				}
				return s.displayName = `UserContext(${t})`, s
			}
		},
		"./src/reddit/endpoints/me/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var i = s("./src/config.ts"),
				n = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeApiRequest/index.ts"),
				r = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const a = e => Object(o.a)(e, {
				endpoint: Object(r.a)(`${i.a.gatewayUrl}/desktopapi/v1/me`),
				method: n.jb.GET
			})
		},
		"./src/reddit/helpers/tabBadging/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			}));
			var i = s("./src/config.ts");
			const n = `${i.a.assetPath}/img/favicon/badged-favicon-32x32.png`,
				o = `${i.a.assetPath}/img/favicon/badged-favicon-16x16.png`,
				r = `${i.a.assetPath}/img/favicon/favicon-32x32.png`,
				a = `${i.a.assetPath}/img/favicon/favicon-16x16.png`,
				d = "badgeCountSync",
				c = e => window.document.querySelector(`link[href="${e}"]`),
				l = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
					const t = c(e ? r : n),
						s = c(e ? a : o);
					t && s && (t.href = e ? n : r, s.href = e ? o : a)
				},
				u = e => {
					navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
						command: d,
						badgeCounts: e
					})
				}
		},
		"./src/reddit/hooks/useMemoShallowEqual.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var i = s("./node_modules/react/index.js"),
				n = s("./node_modules/react-redux/es/index.js");

			function o(e) {
				const t = Object(i.useRef)(e);
				return t.current === e || Object(n.c)(t.current, e) || (t.current = e), t.current
			}
		},
		"./src/reddit/hooks/useUserContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var i = s("./node_modules/react/index.js"),
				n = s("./src/reddit/contexts/User/index.tsx");

			function o() {
				return Object(i.useContext)(n.a)
			}
		},
		"./src/reddit/models/Badge/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i, n, o, r = s("./src/config.ts");

			function a(e) {
				return "userId" in e
			}

			function d(e) {
				return !(!e.extra || !e.extra.membership) && !!e.extra.membership.included
			}

			function c(e, t, s) {
				const i = s.media[0],
					n = Object.keys(i);
				if (i["0x0"]) return i["0x0"];
				let o = {
					width: 1 / 0,
					height: 1 / 0,
					url: ""
				};
				if (n.forEach(s => {
						const n = i[s],
							[r, a] = s.split("x").map(e => parseInt(e));
						(r < o.width && r >= e || a < o.height && a >= t) && (o = {
							height: a,
							width: r,
							url: n
						})
					}), !o.url && n.length) {
					const e = Object.keys(i)[0],
						t = i[e],
						[s, n] = e.split("x").map(e => parseInt(e));
					o = {
						height: n,
						width: s,
						url: t
					}
				}
				return o.url
			}

			function l(e) {
				return e.startsWith("https") ? e : `${r.a.assetPath}/${e}`
			}

			function u(e, t, s) {
				const i = c(e, t, s),
					n = c(2 * e, 2 * t, s);
				return {
					url: l(i),
					url2x: l(n)
				}
			}! function(e) {
				e.First = "p1", e.Second = "p2"
			}(i || (i = {})),
			function(e) {
				e.ActivityTab = "activityTab", e.ChatTab = "chatTab", e.MessageTab = "messageTab", e.ChatHasNewMessages = "chatHasNewMessages", e.ChatUnreadMessages = "chatUnreadMessages"
			}(n || (n = {})),
			function(e) {
				e.Numbered = "NUMBERED", e.Filled = "FILLED"
			}(o || (o = {}))
		},
		"./src/reddit/reducers/user/prefs/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return q
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i, n = s("./node_modules/lodash/isEqual.js"),
				o = s.n(n),
				r = s("./node_modules/lodash/merge.js"),
				a = s.n(r),
				d = s("./node_modules/lodash/pick.js"),
				c = s.n(d),
				l = s("./src/lib/constants/index.ts"),
				u = s("./src/reddit/actions/comment/constants.ts"),
				p = s("./src/reddit/actions/contentGate.ts"),
				b = s("./src/reddit/actions/frontpage/constants.ts"),
				m = s("./src/reddit/actions/header.ts"),
				f = s("./src/reddit/actions/modQueue/constants.ts"),
				h = s("./src/reddit/actions/pages/constants.ts"),
				g = s("./src/reddit/actions/pages/modListing/constants.ts"),
				O = s("./src/reddit/actions/pages/multireddit/constants.ts"),
				y = s("./src/reddit/actions/pages/postCreation.ts"),
				P = s("./src/reddit/actions/pages/postDraft.ts"),
				v = s("./src/reddit/actions/pages/profileComments/constants.ts"),
				j = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				_ = s("./src/reddit/actions/pages/profilePosts.ts"),
				C = s("./src/reddit/actions/pages/search/index.ts"),
				E = s("./src/reddit/actions/pages/subreddit.ts"),
				T = s("./src/reddit/actions/pages/topic.ts"),
				w = s("./src/reddit/actions/postCreation/constants.ts"),
				S = s("./src/reddit/actions/postDraft.ts"),
				I = s("./src/reddit/actions/preferences.ts"),
				D = s("./src/reddit/actions/redditEmbed.ts"),
				x = s("./src/reddit/actions/search.ts"),
				A = s("./src/reddit/actions/structuredStyles/constants.ts"),
				R = s("./src/reddit/actions/subreddit.ts"),
				M = s("./src/reddit/actions/users.ts"),
				k = s("./src/reddit/constants/postLayout.ts"),
				F = s("./src/reddit/constants/preferences.ts"),
				N = s("./src/reddit/constants/theme.ts"),
				L = s("./src/reddit/models/PostCreationForm/index.ts"),
				V = s("./src/reddit/models/PostDraft/index.ts"),
				G = s("./src/reddit/models/User/index.ts");
			! function(e) {
				e.Whitelisted = "whitelisted", e.Everyone = "everyone"
			}(i || (i = {}));
			const U = ["acceptPrivateMessages", "allowClickTracking", "autoplayVideo", "collapseReadMessages", "defaultCommentSort", "emailDigests", "emailUnreadMessages", "emailUnsubscribe", "enableFollowers", "feedRecommendationsEnabled", "geopopular", "hideAds", "hideFromRobots", "hideNSFW", "highlightComments", "ignoreSuggestedSort", "inBeta", "labelNSFW", "liveBarRecommendationsEnabled", "markMessagesRead", "nightmode", "over18", "sendWelcomeMessages", "showMessagesInInbox", "showNotifications", "showTwitter", "showUsernameMentionNotifications", "showActiveCommunities", "showPresence", ...F.a, "loginOtpEnabled"],
				q = {
					acceptPrivateMessages: void 0,
					activityRelevantAds: !0,
					allowClickTracking: !1,
					autoplayVideo: !0,
					collapsedTraySections: G.a,
					commentMode: L.i.RICH_TEXT,
					countryCode: "",
					badCommentAutocollapse: l.l.OFF,
					layout: k.d.Card,
					rememberCommunityLayout: !1,
					defaultCommentSort: l.t.CONFIDENCE,
					editorMode: L.i.RICH_TEXT,
					enableFollowers: !0,
					geopopular: void 0,
					globalTheme: N.a,
					hamburgerTray: void 0,
					hasSeenCustomizeFlyout: !0,
					hideNSFW: !0,
					ignoreSuggestedSort: !1,
					labelNSFW: !0,
					liveBarRecommendationsEnabled: !0,
					loginOtpEnabled: !1,
					markMessagesRead: !0,
					nightmode: !1,
					openPostInNewTab: !1,
					over18: !1,
					profileLayout: void 0,
					reduceAnimationsFromAwards: !1,
					rpanDuDismissalTime: void 0,
					showActiveCommunities: !0,
					showPresence: !1,
					showRpanDu: !0,
					showTwitter: !1,
					sort: l.Y.Hot,
					stylesEnabled: !0,
					subreddit: {},
					subscriptionsPinned: void 0,
					surveyLastSeenTime: void 0,
					thirdPartyDataPersonalizedAds: !0,
					thirdPartyPersonalizedAds: !0,
					thirdPartySiteDataPersonalizedAds: !0,
					thirdPartySiteDataPersonalizedContent: !0,
					showLocationBasedRecommendations: !0,
					topContentDismissalTime: 0,
					topContentTimesDismissed: 0,
					rememberCommunitySort: !1,
					useMarkdown: !1,
					gatedSubredditOptIn: !1,
					quarantineOptIn: !1
				},
				B = {
					rpanDuDismissalTime: void 0,
					isContributorRequestTimestamp: 0,
					stylesEnabled: !0,
					layout: void 0,
					sort: void 0
				},
				$ = (e, t) => {
					if (!t) return e;
					const s = c()({
							...t.account,
							...t
						}, U),
						i = t.subreddit,
						n = {
							...e.subreddit
						};
					Object.keys(i || {}).forEach(e => {
						n[e] = {
							...B,
							...i && i[e]
						}
					});
					const r = {
						...e,
						...s,
						subreddit: n
					};
					if (r.useMarkdown !== e.useMarkdown) {
						const e = r.useMarkdown ? L.i.MARKDOWN : L.i.RICH_TEXT;
						r.editorMode = e, r.commentMode = e
					}
					return o()(r, e) ? e : r
				},
				H = (e, t, s) => $(e, {
					subreddit: {
						[t]: {
							...B,
							...e.subreddit[t],
							...s
						}
					}
				});
			t.c = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case u.o:
					case u.v: {
						const {
							editorMode: s
						} = t.payload;
						return {
							...e,
							commentMode: s
						}
					}
					case w.s:
					case w.Q: {
						const {
							editorMode: s
						} = t.payload;
						return {
							...e,
							editorMode: s
						}
					}
					case m.d:
						return {
							...e, subscriptionsPinned: !0
						};
					case m.e:
						return {
							...e, subscriptionsPinned: !1
						};
					case S.g: {
						const {
							kind: s
						} = t.payload;
						return {
							...e,
							editorMode: s === V.b.Markdown ? L.i.MARKDOWN : L.i.RICH_TEXT
						}
					}
					case I.h: {
						const {
							layout: s
						} = t.payload;
						return e.layout === s ? e : {
							...e,
							layout: s
						}
					}
					case I.o:
						return void 0 !== t.payload ? {
							...e,
							rpanDuDismissalTime: t.payload
						} : e;
					case I.p: {
						const {
							layout: s,
							subredditId: i
						} = t.payload;
						return H(e, i, {
							layout: s
						})
					}
					case I.f:
						return {
							...e, hasSeenCustomizeFlyout: !0
						};
					case I.m:
						return e.profileLayout === t.payload.profileLayout ? e : {
							...e,
							profileLayout: t.payload.profileLayout
						};
					case p.i:
						return {
							...e, over18: !0
						};
					case I.c:
						return void 0 !== t.payload ? {
							...e,
							autoplayVideo: t.payload.autoplayVideo
						} : e;
					case I.i:
						return void 0 !== t.payload ? {
							...e,
							nightmode: t.payload.nightmode
						} : e;
					case p.h:
						return {
							...e, gatedSubredditOptIn: t.payload
						};
					case p.j:
						return {
							...e, quarantineOptIn: t.payload
						};
					case I.r:
						if (void 0 !== t.payload) {
							const {
								topContentDismissalTime: s,
								topContentTimesDismissed: i
							} = t.payload;
							return {
								...e,
								topContentDismissalTime: s,
								topContentTimesDismissed: i
							}
						}
						return e;
					case A.d:
						return t.payload.isNightmodeOn ? {
							...e,
							nightmode: !1,
							nightmodeTempUpdated: !0
						} : e;
					case A.e:
						return t.payload.nightmodeTempUpdated ? {
							...e,
							nightmode: !0,
							nightmodeTempUpdated: !1
						} : e;
					case I.g:
						return void 0 !== t.payload ? {
							...e,
							hamburgerTray: t.payload.set
						} : {
							...e,
							hamburgerTray: !e.hamburgerTray
						};
					case I.d:
						return void 0 !== t.payload ? {
							...e,
							collapsedTraySections: a()({}, e.collapsedTraySections, t.payload)
						} : e;
					case p.b:
					case p.c:
					case p.k:
					case p.l:
					case p.g:
					case p.a:
					case p.m:
					case g.e:
					case g.h:
					case h.a:
					case h.e:
					case h.b:
					case h.f:
					case h.d:
					case h.h:
					case b.c:
					case E.SUBREDDIT_LOADED:
					case O.b:
					case O.a:
					case v.e:
					case j.e:
					case j.b:
					case _.PROFILE_POSTS_LOADED:
					case b.g:
					case R.i:
					case x.e:
					case D.b:
					case y.PAGE_LOADED:
					case P.PAGE_LOADED:
					case I.j:
					case I.b:
					case C.c:
					case I.a:
					case M.c:
					case T.TOPIC_DATA_LOADED:
						return t.payload && t.payload.preferences ? $(e, t.payload.preferences) : e;
					case I.q: {
						const {
							subredditId: s,
							prefs: i
						} = t.payload;
						return H(e, s, i)
					}
					case v.d:
					case j.d:
					case j.a:
					case _.PROFILE_POSTS_FAILED: {
						let s = e;
						if (t.payload && t.payload.account) {
							const {
								nightmode: i,
								showPresence: n
							} = t.payload.account;
							e.nightmode !== i && (s = {
								...s,
								nightmode: i
							}), e.showPresence !== n && (s = {
								...s,
								showPresence: n
							})
						}
						return s
					}
					case f.h:
					case f.j:
					case f.i:
					case f.g:
					case f.f:
					case f.n:
					case f.m:
					case f.p:
					case f.q:
					case f.w:
					case f.v:
						return t.payload && t.payload.response && t.payload.response.preferences ? $(e, t.payload.preferences) : e;
					case I.n: {
						const s = t.payload,
							{
								enableFollowers: i,
								showActiveCommunities: n
							} = s.additional;
						let o = e;
						return e.enableFollowers !== i && (o = {
							...o,
							enableFollowers: i
						}), e.showActiveCommunities !== n && (o = {
							...o,
							showActiveCommunities: n
						}), o
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/routes/postCreation/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			}));
			var i = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/loadableAction/index.ts"),
				r = s("./src/reddit/routes/postCreation/constants.ts");
			const a = [r.b, r.c, r.a],
				d = Object(i.a)({
					resolved: {},
					chunkName: () => "PostCreation",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("vendors~PostCreation~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), s.e("PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~4c415e24"), s.e("PostCreation")]).then(s.bind(null, "./src/reddit/pages/PostCreation/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/PostCreation/index.tsx"
					}
				}),
				c = e => `/${e}/submit`,
				l = (e, t) => {
					return r.c.replace(/:subredditName/, e) + (t ? `?collection=${t}` : "")
				},
				u = e => r.a.replace(/:profileName/, e),
				p = {
					action: Object(o.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("vendors~PostCreation~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), s.e("PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~4c415e24"), s.e("PostCreation")]).then(s.bind(null, "./src/reddit/actions/pages/postCreation.ts")).then(e => e.postCreationPageRequested)),
					component: d,
					chunk: n.r.POST_CREATION,
					exact: !0,
					meta: {
						name: n.Nb.POST_CREATION
					},
					path: a,
					prefetches: [n.r.COMMENTS_PAGE]
				};
			t.a = p
		},
		"./src/reddit/selectors/appBadges.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "e", (function() {
				return o
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "h", (function() {
				return l
			})), s.d(t, "g", (function() {
				return u
			})), s.d(t, "i", (function() {
				return p
			}));
			var i = s("./node_modules/reselect/es/index.js");
			const n = e => e.appBadges.badges,
				o = Object(i.a)(n, e => {
					var t;
					return (null === (t = e.chatUnreadMessages) || void 0 === t ? void 0 : t.count) || 0
				}),
				r = Object(i.a)(n, e => e && e.chatRooms && e.chatRooms.count || 0),
				a = Object(i.a)(n, e => e && e.chatRoomMentions && e.chatRoomMentions.count || 0),
				d = Object(i.a)(o, n, (e, t) => {
					var s;
					return 0 === e && !!(null === (s = t.chatHasNewMessages) || void 0 === s ? void 0 : s.isShowing)
				}),
				c = Object(i.a)(n, e => e && e.activityTab && e.activityTab.count || 0),
				l = Object(i.a)(n, e => e && e.messageTab && e.messageTab.count || 0),
				u = Object(i.a)(c, l, (e, t) => e + t),
				p = Object(i.a)(o, u, (e, t) => e + t)
		},
		"./src/redditGQL/operations/BadgeIndicators.json": function(e) {
			e.exports = JSON.parse('{"id":"9d105ce5d71a"}')
		},
		"./src/redditGQL/operations/ProfileFeed.json": function(e) {
			e.exports = JSON.parse('{"id":"d5bbd27f8c2d"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e.a943ba84c54e846c3ee8.js.map