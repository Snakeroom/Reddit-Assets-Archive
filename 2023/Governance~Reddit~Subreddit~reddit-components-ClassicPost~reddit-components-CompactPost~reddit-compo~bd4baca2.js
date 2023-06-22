// https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compo~bd4baca2.f4946c0dea515a4cd275.js
// Retrieved at 6/22/2023, 6:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compo~bd4baca2"], {
		"./src/higherOrderComponents/withAdClickLocation/Locations.ts": function(e, t, s) {
			"use strict";
			var r, i;
			s.d(t, "a", (function() {
					return r
				})), s.d(t, "b", (function() {
					return i
				})),
				function(e) {
					e.UNKNOWN = "unknown", e.TITLE = "title", e.TOP_BAR = "top_bar", e.MEDIA = "media", e.BODY = "body", e.BACKGROUND = "background", e.CTA_URL = "cta_url", e.CTA_BUTTON = "cta_button", e.CTA_WHITESPACE = "cta_whitespace", e.CTA_CAPTION = "cta_caption", e.SUBREDDIT = "subreddit", e.TIMESTAMP = "timestamp", e.USER = "user"
				}(r || (r = {})),
				function(e) {
					e.COMMENTS = "comments", e.FLATLIST_SHARE = "fl_share", e.FLATLIST_AWARD = "fl_award", e.FLATLIST_SAVE = "fl_save", e.FLATLIST_GENERAL = "fl_unknown", e.OVERFLOW_MENU = "overflow_menu", e.UPVOTE = "upvote", e.DOWNVOTE = "downvote"
				}(i || (i = {}))
		},
		"./src/lib/addAllowQuarantinedParam/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/addQueryParams/index.ts");
			t.a = e => Object(r.a)(e, {
				allow_quarantined: !0
			})
		},
		"./src/lib/forceHttps/index.ts": function(e, t, s) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") || e.startsWith("blob") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				i = s("./src/lib/constants/index.ts"),
				o = s("./src/reddit/constants/intlSupport.ts");

			function n(e) {
				let {
					showDay: t,
					useUtc: s,
					shortMonths: n,
					locale: a = r.DEFAULT_LOCALE
				} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				const d = new Date(e * i.Xb);
				return o.a ? new Intl.DateTimeFormat(a, {
					month: n ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: s ? "UTC" : void 0
				}).format(d) : d.toLocaleString()
			}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js");
			t.a = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.DEFAULT_LOCALE;
				const s = e.toString().length > 10,
					i = new Date(e * (s ? 1 : 1e3));
				return i.toLocaleString(t, {
					weekday: "short",
					month: "short",
					year: "numeric",
					day: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
					timeZoneName: "short",
					timeZone: "UTC"
				})
			}
		},
		"./src/lib/onFocusAndVisibilityChange/index.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/brcast/dist/brcast.es.js");
			const i = () => "undefined" != typeof document,
				o = () => i() && "visible" === document.visibilityState,
				n = () => ({
					documentInFocus: o()
				}),
				{
					subscribe: a,
					unsubscribe: d,
					setState: c
				} = Object(r.a)(n()),
				l = {
					hidden: "visibilitychange",
					webkitHidden: "webkitvisibilitychange",
					mozHidden: "mozvisibilitychange",
					msHidden: "msvisibilitychange"
				},
				u = () => c(n());
			(() => {
				const e = (() => {
					if (!i()) return;
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
		"./src/reddit/actions/jsApi.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return o
			}));
			var r = s("./src/lib/makeActionCreator/index.ts");
			const i = "JSAPI__CONSUMER_SUBSCRIBED",
				o = Object(r.a)(i)
		},
		"./src/reddit/actions/moderatingSubreddits.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/profile/index.ts"),
				o = (s("./src/reddit/endpoints/moderator/moderatingSubreddits.ts"), s("./src/reddit/models/User/index.ts")),
				n = s("./src/reddit/selectors/user.ts");
			const a = "MOD_PERMS__REQUEST_LOADED",
				d = (Object(r.a)("MOD_PERMS__REQUEST_PENDING"), Object(r.a)(a), Object(r.a)("MOD_PERMS__REQUEST_FAILED"), () => async (e, t) => {
					const s = Object(n.m)(t());
					if (s) {
						const t = Object(o.e)(s);
						await e(Object(i.b)(t))
					}
				})
		},
		"./src/reddit/actions/pages/multireddit/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return o
			}));
			const r = "PAGE__MULTIREDDIT_FEED_PENDING",
				i = "PAGE__MULTIREDDIT_FEED_LOADED",
				o = "PAGE__MULTIREDDIT_FEED_FAILED"
		},
		"./src/reddit/actions/pages/profilePosts.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "PROFILE_POSTS_PENDING", (function() {
				return re
			})), s.d(t, "PROFILE_POSTS_LOADED", (function() {
				return ie
			})), s.d(t, "PROFILE_POSTS_FAILED", (function() {
				return oe
			})), s.d(t, "profilePostsPending", (function() {
				return ne
			})), s.d(t, "profilePostsLoaded", (function() {
				return ae
			})), s.d(t, "profilePostsFailed", (function() {
				return de
			})), s.d(t, "profilePostsRequested", (function() {
				return ce
			})), s.d(t, "MORE_POSTS_PENDING", (function() {
				return le
			})), s.d(t, "MORE_POSTS_LOADED", (function() {
				return ue
			})), s.d(t, "MORE_POSTS_FAILED", (function() {
				return me
			})), s.d(t, "morePostsPending", (function() {
				return pe
			})), s.d(t, "morePostsLoaded", (function() {
				return be
			})), s.d(t, "morePostsFailed", (function() {
				return fe
			})), s.d(t, "morePostsRequested", (function() {
				return he
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/pick.js"),
				i = s.n(r),
				o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/lib/makeListingKey/index.ts"),
				a = s("./src/lib/safeGet/index.ts"),
				d = s("./src/reddit/actions/contentGate.ts"),
				c = s("./src/reddit/actions/externalAccount.ts"),
				l = s("./src/reddit/actions/moderatingSubreddits.ts"),
				u = s("./src/reddit/actions/pages/profileShared.ts"),
				m = s("./src/reddit/actions/pinnedPost.ts"),
				p = s("./src/reddit/actions/platform.ts"),
				b = s("./src/reddit/actions/profile/index.ts"),
				f = s("./src/reddit/actions/subreddit.ts"),
				h = s("./src/reddit/constants/errors.ts"),
				O = s("./src/reddit/constants/parameters.ts"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = s("./src/lib/makeGqlRequest/index.ts"),
				y = s("./src/redditGQL/operations/ProfileFeed.json"),
				j = s("./src/redditGQL/types.ts");
			const T = async (e, t) => await Object(_.a)(e, {
				...y,
				variables: t
			}), E = (e, t) => {
				if (!e) return;
				const s = e.toUpperCase();
				return t.includes(s) ? s : void 0
			}, S = e => {
				let {
					username: t,
					profileSort: s,
					filter: r,
					timeSort: i,
					loadMoreData: o,
					shouldUseGqlCursor: n
				} = e;
				const a = {
					username: t,
					sort: E(s, Object.values(j.M)),
					range: E(i, Object.values(j.L)),
					filter: r
				};
				if (o) {
					const {
						token: e
					} = o;
					a.after = n ? e : btoa(e)
				}
				return a
			};
			var x = s("./src/config.ts"),
				C = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				v = s("./src/lib/constants/index.ts"),
				P = s("./src/lib/makeApiRequest/index.ts"),
				I = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				w = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const k = (e, t, s) => Object(P.a)(e, {
				data: s,
				endpoint: Object(I.a)(Object(C.a)(Object(w.a)(`${x.a.gatewayUrl}/desktopapi/v1/user/${t}/posts`))),
				method: v.ob.GET
			}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
				...e,
				body: {
					...e.body,
					pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
				}
			} : e);
			var F = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				D = s("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				A = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				L = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				N = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				R = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				M = s("./src/reddit/models/Post/index.ts");
			const U = (e, t) => {
				if (!Object(M.l)(t) && !Object(M.n)(t)) return null;
				if (e.posts[t.id]) return t.id;
				const s = Object(L.f)(t),
					{
						id: r
					} = s;
				e.posts[r] = s;
				const {
					crosspostRoot: i
				} = t;
				i && i.type === M.a.Post && i.postInfo && U(e, i.postInfo);
				const {
					authorFlair: o
				} = t;
				if (o) {
					const t = s.belongsTo.id;
					e.authorFlair[t] || (e.authorFlair[t] = {}), e.authorFlair[t][s.author] = Object(D.a)(o)[0]
				}
				if (Object(M.l)(t)) {
					const {
						profile: s
					} = t;
					e.profiles[s.id] || (e.profiles[s.id] = Object(N.a)(s))
				} else if (Object(M.n)(t)) {
					const {
						subreddit: s
					} = t;
					e.subreddits[s.id] || (e.subreddits[s.id] = Object(R.a)(s)), e.postFlair[s.id] || (e.postFlair[s.id] = Object(A.a)(s))
				}
				return r
			};
			var V = s("./src/reddit/models/Comment/index.ts"),
				G = (e, t) => {
					var s, r, i;
					const o = {
							authorFlair: {},
							pinned: [],
							postIds: [],
							posts: {},
							postFlair: {},
							profiles: {},
							subreddits: {},
							token: ""
						},
						n = null === (s = null == e ? void 0 : e.redditorInfoByName) || void 0 === s ? void 0 : s.elements;
					if (!n) return o;
					const {
						edges: a
					} = n;
					for (const {
							node: c
						} of a) {
						if (!c || c.__typename === V.d.Comment) continue;
						const e = U(o, c);
						e && o.postIds.push(e)
					}
					const d = null === (i = null === (r = null == e ? void 0 : e.redditorInfoByName) || void 0 === r ? void 0 : r.profile) || void 0 === i ? void 0 : i.stickyPosts;
					if (d && (o.pinned = d.map(e => e.id)), t) o.token = n.pageInfo.endCursor || "";
					else {
						const {
							postIds: e
						} = o, t = e[e.length - 1];
						t && (o.token = t)
					}
					return o
				},
				q = s("./node_modules/@sentry/minimal/esm/index.js"),
				B = s("./node_modules/deep-diff/index.js"),
				H = s("./src/lib/env/index.ts");
			const W = new Set(["authorFlair.cssClass", "posts.adSupplementaryText", "posts.allAwardings", "posts.approvedAtUTC", "posts.approvedBy", "posts.attributionInfo", "posts.audioRoom", "posts.bannedAtUTC", "posts.bannedBy", "posts.collapsedBecauseCrowdControl", "posts.ignoreReports", "posts.isApproved", "posts.isAuthorPremium", "posts.isEligibleForLinkedPosts", "posts.isEligibleForQASchema", "posts.isFollowed", "posts.isPinned", "posts.isReactAllowed", "posts.isRemoved", "posts.isSpam", "posts.lastAuthorModNote", "posts.modQueueTriggers", "posts.modReportsDismissed", "posts.pollData", "posts.predictionTournament", "posts.previewComments", "posts.modReports", "posts.numReports", "posts.reactedFrom", "posts.removedBy", "posts.removedByCategory", "posts.topAwardedType", "posts.userReports", "posts.userReportsDismissed", "posts.modReasonBy", "subreddits.answerableQuestions", "subreddits.freeFormReports", "subreddits.isSubscribed", "authorFlair.richtext", "authorFlair.text", "posts.collectionIds", "posts.liveCommentsWebsocket", "posts.thumbnail.url", "posts.discussionType", "posts.eventsOnRender", "posts.flair", "posts.gildings", "posts.media", "posts.goldCount", "posts.sendReplies", "posts.score", "posts.sendReplies", "posts.source.url", "posts.source.outboundUrl", "posts.source.outboundUrlCreated", "posts.source.outboundUrlExpiration", "profiles.acceptFollowers", "profiles.communityIcon", "profiles.icon.url", "posts.upvoteRatio", "subreddits.acceptFollowers", "subreddits.allowChatPostCreation", "subreddits.communityIcon", "subreddits.icon.url", "subreddits.isChatPostFeatureEnabled", "subreddits.primaryColor", "subreddits.subscribers"]),
				$ = (e, t) => {
					const s = {},
						r = {};
					Object.keys(e).forEach(i => {
						const o = e[i] || {},
							n = t[i] || {};
						s[i] = {}, r[i] = 0, Object.keys(o).forEach(e => {
							const t = o[e],
								a = n[e],
								d = Object(B.diff)(t, a, {
									prefilter: (e, t) => W.has(`${i}.${e.length?`${e.join(".")}.`:""}${t}`) || W.has(`${i}.${t}`),
									normalize: (e, t, s, r) => s || r ? [s, r] : [s, s]
								});
							r[i] = d ? r[i] + d.length : (null == r ? void 0 : r[i]) || 0, d && (s[i][e] = {
								gatewayThing: t,
								gqlThing: a,
								diffResult: d
							})
						})
					});
					const i = Object.keys(r).reduce((e, t) => e += r[t], 0);
					return {
						allDiffs: s,
						issueCounts: r,
						totalIssues: i
					}
				};

			function z(e) {
				let {
					gatewayResponse: t,
					normalizedGqlResponse: s,
					rawGqlResponse: r
				} = e;
				if (Object(H.a)()) {
					console.group("GQL Profiles Shadowtest"), console.groupCollapsed("raw gql response"), console.log(r), console.groupEnd(), console.groupCollapsed("normalized gql response"), console.log(s), console.groupEnd(), console.groupCollapsed("gateway response"), console.log(t), console.groupEnd();
					const {
						allDiffs: e,
						issueCounts: i,
						totalIssues: o
					} = $(t, s);
					console.groupCollapsed(`diff: ${o} issues`), console.log("lhs = gateway\nrhs = gql");
					for (const t in e) {
						if (console.groupCollapsed(`${t}: ${i[t]} issues`), i[t] > 0)
							for (const s in e[t]) {
								const r = e[t][s].diffResult;
								console.groupCollapsed(`${s}: ${r.length||0} issues`), console.log(r), console.log({
									gql: e[t][s].gqlThing,
									gateway: e[t][s].gatewayThing
								}), console.groupEnd()
							}
						console.groupEnd()
					}
					console.groupEnd()
				}
				if (Object(H.b)()) {
					const {
						allDiffs: e,
						issueCounts: r,
						totalIssues: i
					} = $(t, s);
					if (i <= 0) return;
					q.l(t => {
						t.setExtra("info", {
							allDiffs: e,
							issueCounts: r,
							totalIssues: i
						}), t.setExtra("bypassSampling", !0), q.d("GQL Profiles Shadowtest Diff")
					})
				}
			}
			var Q = s("./src/reddit/helpers/post/index.ts"),
				X = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				Y = s("./src/reddit/models/User/index.ts"),
				K = s("./src/reddit/constants/experiments.ts"),
				Z = s("./src/reddit/helpers/chooseVariant/index.ts");
			const J = e => {
					return Object(Z.c)(e, {
						experimentEligibilitySelector: Z.a,
						experimentName: K.Cc
					}) === K.Yd
				},
				ee = e => {
					return Object(Z.c)(e, {
						experimentEligibilitySelector: Z.a,
						experimentName: K.Dc
					}) === K.Yd
				};
			var te = s("./src/reddit/selectors/listings.ts"),
				se = s("./src/reddit/selectors/profile.ts");
			const re = "PAGE__PROFILE_POSTS_PENDING",
				ie = "PAGE__PROFILE_POSTS_LOADED",
				oe = "PAGE__PROFILE_POSTS_FAILED",
				ne = Object(o.a)(re),
				ae = Object(o.a)(ie),
				de = Object(o.a)(oe),
				ce = e => async (t, s, r) => {
					var o, _, y;
					const {
						queryParams: E,
						params: x
					} = e, {
						sort: C,
						t: v
					} = Object(u.b)(E), {
						profileName: P
					} = x, I = Object(n.a)(`u_${P}`, C, E), w = s(), D = Object(a.a)(w.listings.postOrder.ids, I), A = Object(te.c)(w, {
						listingKey: I
					}), L = Object(te.d)(w, {
						listingKey: I
					});
					if (await t(b.d(P)), L || D && !A) {
						if (D) {
							const e = Object(se.s)(s(), {
								profileName: P
							});
							t(p.n({
								title: e
							}))
						}
						return
					}
					t(ne({
						key: I
					}));
					const N = ee(w);
					let R, M, U;
					if (N) {
						const e = S({
							username: P,
							profileSort: C,
							filter: j.S.Posts,
							timeSort: Object(F.a)(C, v),
							shouldUseGqlCursor: !0
						});
						M = null === (y = null === (_ = null === (o = null == (R = await Object(X.a)("profilePosts", () => T(r.gqlContext(), e))) ? void 0 : R.body) || void 0 === o ? void 0 : o.data) || void 0 === _ ? void 0 : _.redditorInfoByName) || void 0 === y ? void 0 : y.__typename
					} else {
						const t = {
							...i()(e.queryParams, [...O.p, ...O.o, O.l]),
							layout: Object(g.U)(w, {}).toLowerCase(),
							sort: C,
							t: Object(F.a)(C, v)
						};
						R = await Object(X.a)("profilePosts", () => k(r.apiContext(), P, t))
					}
					if (!R.ok || N && M !== Y.c.AvailableRedditor) return t(de({
						account: !N && R.body.data ? R.body.data.account : null,
						error: R.body.reason ? {
							type: R.body.reason
						} : R.error,
						key: I
					})), R.body.reason === h.a.DeletedProfile || M === Y.c.DeletedRedditor ? t(Object(d.v)({
						profileName: P
					})) : M === Y.c.UnavailableRedditor ? t(Object(d.B)({
						profileName: P
					})) : N && !M && t(Object(d.p)({
						profileName: P
					})), void t(p.o(R.status));
					if (N) {
						const {
							data: e
						} = R.body;
						U = G(e, !0)
					} else U = R.body, await Object(Q.a)(r.gqlContext, U.posts).then(e => U.posts = e);
					if (!N && J(w)) {
						const e = S({
								username: P,
								profileSort: C,
								filter: j.S.Posts
							}),
							t = await T(r.gqlContext(), e);
						if (t.ok && t.body) {
							const {
								data: e
							} = t.body, s = G(e);
							z({
								gatewayResponse: {
									authorFlair: U.authorFlair,
									pinned: U.pinned,
									postIds: U.postIds,
									posts: U.posts,
									postFlair: U.postFlair,
									profiles: U.profiles,
									subreddits: U.subreddits,
									token: U.token
								},
								normalizedGqlResponse: s,
								rawGqlResponse: e
							})
						}
					}
					t(ae({
						key: I,
						meta: s().meta,
						...U
					}));
					const V = Object(se.o)(s(), P),
						{
							pinned: q
						} = U;
					t(Object(m.h)({
						profileId: V,
						pinned: q
					})), await Promise.all([t(Object(u.c)(P)), t(Object(f.q)()), t(Object(l.b)()), t(c.o(P))])
				}, le = "PROFILE_POSTS__MORE_POSTS_PENDING", ue = "PROFILE_POSTS__MORE_POSTS_LOADED", me = "PROFILE_POSTS__MORE_POSTS_FAILED", pe = Object(o.a)(le), be = Object(o.a)(ue), fe = Object(o.a)(me), he = () => async (e, t, s) => {
					let {
						apiContext: r,
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
						sort: m,
						t: p
					} = Object(u.b)(c), {
						profileName: b
					} = l, f = Object(n.a)(`u_${b}`, m, c), h = Object(te.g)(a, {
						listingKey: f
					});
					if (!h) return;
					const _ = Object(te.d)(a, {
							listingKey: f
						}),
						y = Object(te.e)(a, {
							listingKey: f,
							token: h.token
						});
					if (_ || y) return;
					e(pe({
						key: f,
						fetchedToken: h.token
					}));
					const E = ee(a);
					let x, C;
					if (E) {
						const e = S({
							username: b,
							profileSort: m,
							filter: j.S.Posts,
							timeSort: Object(F.a)(m, p),
							loadMoreData: h,
							shouldUseGqlCursor: !0
						});
						x = await T(o(), e)
					} else {
						const e = {
							after: h.token,
							dist: h.dist,
							sort: m,
							t: p,
							...i()(c, O.p),
							layout: Object(g.U)(a, {}).toLowerCase()
						};
						x = await k(r(), b, e)
					}
					if (!x.ok) return void e(fe({
						account: !E && x.body.data ? x.body.data.account : null,
						error: x.error,
						fetchedToken: h.token,
						key: f
					}));
					if (E) {
						const {
							data: e
						} = x.body;
						C = G(e, !0)
					} else C = x.body, await Object(Q.a)(o, C.posts).then(e => C.posts = e);
					const v = a.listings.postOrder.ids[f],
						P = C.postIds || [],
						I = {
							...C,
							postIds: P.filter(e => !v || !v.includes(e))
						};
					if (J(a)) {
						const e = S({
								username: b,
								profileSort: m,
								filter: j.S.Posts,
								loadMoreData: h
							}),
							t = await T(o(), e);
						if (t.ok && t.body) {
							const {
								data: e
							} = t.body, s = G(e);
							z({
								gatewayResponse: {
									authorFlair: I.authorFlair,
									pinned: I.pinned,
									postIds: I.postIds,
									posts: I.posts,
									postFlair: I.postFlair,
									profiles: I.profiles,
									subreddits: I.subreddits,
									token: I.token
								},
								normalizedGqlResponse: s,
								rawGqlResponse: e
							})
						}
					}
					e(be({
						fetchedToken: h.token,
						key: f,
						meta: a.meta,
						...I
					})), await e(Object(u.c)(b))
				}
		},
		"./src/reddit/actions/pinnedPost.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "h", (function() {
				return b
			})), s.d(t, "d", (function() {
				return f
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "f", (function() {
				return y
			})), s.d(t, "b", (function() {
				return E
			})), s.d(t, "e", (function() {
				return S
			})), s.d(t, "i", (function() {
				return F
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/modal.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/constants/modals.ts"),
				c = s("./src/reddit/endpoints/post/index.tsx"),
				l = s("./src/reddit/models/Toast/index.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				m = s("./src/reddit/selectors/profile.ts");
			const p = "PINNEDPOST__PINNED_POSTS_LOADED",
				b = Object(o.a)(p),
				f = "PINNEDPOST__PIN_POST_SUCCESS",
				h = "PINNEDPOST__UNPIN_POST_SUCCESS",
				O = Object(o.a)(f),
				g = Object(o.a)(h),
				_ = "PINNEDPOST__PIN_POST_PENDING",
				y = "PINNEDPOST__UNPIN_POST_PENDING",
				j = Object(o.a)(_),
				T = Object(o.a)(y),
				E = "PINNEDPOST__PIN_POST_FAILURE",
				S = "PINNEDPOST__UNPIN_POST_FAILURE",
				x = Object(o.a)(E),
				C = Object(o.a)(S),
				v = e => Object(a.f)({
					buttonAction: F(e, !0),
					buttonText: r.fbt._("UNDO", null, {
						hk: "1O9LWh"
					}),
					kind: l.b.SuccessMod,
					text: r.fbt._("Post pinned to profile!", null, {
						hk: "1hbHLt"
					})
				}),
				P = (e, t) => Object(a.f)({
					buttonAction: F(e, !0),
					buttonText: r.fbt._("UNDO", null, {
						hk: "3YtcK2"
					}),
					kind: l.b.SuccessMod,
					text: t ? r.fbt._("Post unpinned, reload to see changes", null, {
						hk: "5FF1g"
					}) : r.fbt._("Post unpinned.", null, {
						hk: "2BgT0h"
					})
				}),
				I = () => Object(a.f)({
					kind: l.b.Error,
					text: r.fbt._("Could not pin post", null, {
						hk: "3uNHEh"
					})
				}),
				w = () => Object(a.f)({
					kind: l.b.Error,
					text: r.fbt._("You can't pin a removed post", null, {
						hk: "3bdn2y"
					})
				}),
				k = () => Object(a.f)({
					kind: l.b.Error,
					text: r.fbt._("Could not unpin post", null, {
						hk: "o8HG0"
					})
				}),
				F = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return async (s, r, o) => {
						let {
							apiContext: a,
							gqlContext: l
						} = o;
						const p = r(),
							b = p.posts.models[e];
						if (!b) return;
						const f = !Object(u.s)(p, {
							postId: e
						});
						if (f && b.isRemoved) return s(w());
						const h = b.author,
							_ = Object(m.o)(p, h),
							[y, E, S, F, D] = f ? [j, O, x, v, I] : [T, g, C, P, k];
						if (f) {
							if (Object(u.O)(p, {
									profileName: h
								}).length >= i.hb) return void s(Object(n.i)(d.a.PINNED_POSTS_LIMIT_REACHED))
						}
						const A = Object(u.p)(p, e, h),
							L = !f && A;
						s(y({
							postId: e,
							profileId: _
						})), (await Object(c.i)(l(), e, f, !0)).ok ? (s(E({
							postId: e,
							profileId: _
						})), t || s(F(e, L))) : (s(S({
							postId: e,
							profileId: _
						})), s(D()))
					}
				}
		},
		"./src/reddit/actions/postCreation/subredditChange.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return T
			})), s.d(t, "b", (function() {
				return E
			})), s.d(t, "a", (function() {
				return S
			})), s.d(t, "d", (function() {
				return x
			})), s.d(t, "c", (function() {
				return C
			}));
			var r = s("./node_modules/react-router-redux/es/index.js"),
				i = s("./src/lib/addQueryParams/index.ts"),
				o = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/filterQueryParams/index.ts"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/actions/pages/postCreation.ts"),
				l = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				u = s("./src/reddit/helpers/name/index.ts"),
				m = s("./src/reddit/models/PostCreationForm/index.ts"),
				p = s("./src/reddit/routes/postCreation/index.ts"),
				b = s("./src/reddit/routes/postCreation/constants.ts"),
				f = s("./src/reddit/selectors/postCreations.ts"),
				h = s("./src/reddit/selectors/platform.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				g = s("./src/reddit/actions/postCreation/constants.ts"),
				_ = s("./src/reddit/actions/postCreation/general.ts");
			const y = Object(a.a)(g.O),
				j = Object(a.a)(g.P),
				T = Object(a.a)(g.N),
				E = (e, t) => async (s, r, i) => {
					let {
						apiContext: n
					} = i, a = r();
					const {
						name: p,
						isProfile: b
					} = e, g = Object(h.e)(a), _ = g && !b && Object(u.a)(g.name, p), j = a.creations.api.subreddit.change.pending;
					if (_ || j) return;
					const T = Object(l.x)(t);
					if (!p) return void s(S(e, T));
					s(y(e));
					const E = b ? {
						profileName: p
					} : {
						subredditName: p
					};
					if (await s(Object(c.postCreationPageDataRequested)(E)), b || !Object(f.C)(a)) return s(S(e, T));
					const x = e.allowedPostTypes || Object(O.B)(r(), {
						subredditName: p
					});
					if (!x) return void s(S(e, T));
					let C;
					a = r();
					const v = Object(f.rb)(a),
						P = Object(f.C)(a);
					if (v === o.bc.MEDIA && P) {
						const e = Object(f.Z)(a),
							t = Object(m.x)(e),
							s = Object(f.P)(a) && e.items.length > 1,
							r = !t && !s;
						if (s && !x.galleries) C = m.q.GalleryWillBeRemovedGalleryNotAllowed;
						else if (r && !x.images) C = m.q.ImageWillBeRemoved;
						else if (t && !x.videos) {
							const t = a.uploads[e.items[0].uploadKey],
								s = t && t.metadata.videoDuration || 0;
							x.images ? s > o.lb && (C = m.q.VideoWillBeRemovedTooLongForGif) : C = m.q.VideoWillBeRemovedMediaNotAllowed
						}
					}
					s(C ? Object(d.i)(C) : S({
						...e,
						allowedPostTypes: x
					}, T))
				}, S = function(e, t) {
					let s = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
					return async (o, n) => {
						const {
							name: a,
							isProfile: d
						} = e, c = n().platform.currentPage, l = c.queryParams, u = d ? p.b : p.c;
						let m = "";
						m = a ? u(a) : b.b, m = Object(i.a)(m, {
							...l,
							draft: t || l.draft
						}), (t || c.url.toLowerCase() !== m.toLowerCase()) && (o(j(e)), s && o(Object(_.t)(!0)), o(Object(_.i)()), o(Object(r.c)(m)))
					}
				}, x = e => async (t, s) => {
					const o = s().platform.currentPage,
						n = o.queryParams,
						a = Object(i.a)(o.url, {
							...n,
							collection: e
						});
					t(Object(r.c)(a))
				}, C = () => async (e, t) => {
					const s = t().platform.currentPage,
						i = Object(n.a)(s.url, ["collection"]);
					e(Object(r.c)(i))
				}
		},
		"./src/reddit/actions/postDraft.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return w
			})), s.d(t, "e", (function() {
				return k
			})), s.d(t, "d", (function() {
				return F
			})), s.d(t, "p", (function() {
				return N
			})), s.d(t, "j", (function() {
				return R
			})), s.d(t, "l", (function() {
				return M
			})), s.d(t, "i", (function() {
				return U
			})), s.d(t, "m", (function() {
				return V
			})), s.d(t, "k", (function() {
				return G
			})), s.d(t, "h", (function() {
				return q
			})), s.d(t, "n", (function() {
				return B
			})), s.d(t, "s", (function() {
				return Y
			})), s.d(t, "r", (function() {
				return K
			})), s.d(t, "g", (function() {
				return Z
			})), s.d(t, "q", (function() {
				return ee
			})), s.d(t, "c", (function() {
				return te
			})), s.d(t, "a", (function() {
				return se
			})), s.d(t, "b", (function() {
				return re
			})), s.d(t, "o", (function() {
				return ae
			}));
			var r = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/formatApiError/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/postCreation/general.ts"),
				a = s("./src/reddit/actions/postCreation/subredditChange.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				l = s("./src/lib/makeApiRequest/index.ts"),
				u = s("./src/lib/omitHeaders/index.ts"),
				m = s("./src/reddit/models/StructuredStyles/index.ts");
			var p = s("./src/reddit/constants/headers.ts"),
				b = s("./src/reddit/helpers/name/index.ts"),
				f = s("./src/reddit/models/PostDraft/index.ts"),
				h = s("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				O = s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"),
				g = s("./src/reddit/models/Subreddit/index.ts");
			const _ = e => {
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
					if (t.subreddit_type === g.g.User) {
						const s = Object(h.a)(t, Object(b.i)(t.display_name_prefixed));
						e.profiles[s.id] = s
					} else {
						const s = Object(O.a)(t);
						e.subreddits[s.id] = s
					}
					return e
				}, t)
			};
			var y = s("./src/reddit/endpoints/post/draft/helpers.ts"),
				j = s("./src/reddit/models/PostCreationForm/index.ts"),
				T = s("./src/reddit/helpers/trackers/postComposer.ts"),
				E = s("./src/reddit/models/Toast/index.ts"),
				S = s("./src/reddit/models/User/index.ts"),
				x = s("./src/reddit/selectors/postCreations.ts"),
				C = s("./src/reddit/selectors/postDraft.ts"),
				v = s("./src/reddit/selectors/profile.ts"),
				P = s("./src/reddit/selectors/subreddit.ts"),
				I = s("./src/reddit/selectors/user.ts");
			const w = "POST_DRAFT__LIST_PENDING",
				k = "POST_DRAFT__LIST_LOADED",
				F = "POST_DRAFT__LIST_FAILED",
				D = Object(o.a)(w),
				A = Object(o.a)(k),
				L = Object(o.a)(F),
				N = () => async (e, t, s) => {
					let {
						apiContext: i
					} = s;
					const o = t();
					if (!Object(I.m)(o) || Object(C.b)(o)) return;
					e(D());
					const n = await (e => Object(l.a)(Object(u.a)(e, [p.a]), {
						endpoint: `${e.apiUrl}/api/v1/drafts.json`,
						method: r.ob.GET
					}))(i());
					n.ok ? e(A(_(n.body))) : e(L(n.error))
				}, R = "POST_DRAFT__SAVE_DRAFT_PENDING", M = "POST_DRAFT__SAVE_DRAFT_SUCCEEDED", U = "POST_DRAFT__SAVE_DRAFT_FAILED", V = "POST_DRAFT__SAVE_DRAFT_VALIDATION_FAILED", G = "POST_DRAFT__SAVE_DRAFT_SUBMIT_VALIDATION_FAILED", q = "POST_DRAFT__SAVE_DRAFT_CAPTCHA_REQUIRED", B = "POST_CREATION__TOGGLE_DRAFT_IS_PUBLIC", H = Object(o.a)(R), W = Object(o.a)(M), $ = Object(o.a)(U), z = Object(o.a)(V), Q = Object(o.a)(G), X = Object(o.a)(q), Y = Object(o.a)(B), K = e => async (t, s, o) => {
					let {
						apiContext: n
					} = o;
					const c = s(),
						m = Object(C.g)(c),
						b = Object(x.eb)(c);
					if (m || b) return;
					const f = Object(C.h)(c, e);
					if (!f) return;
					t(H(f)), T.g(c, f, f.destSubreddit.name);
					const h = await ((e, t, s) => Object(l.a)(Object(u.a)(e, [p.a]), {
						endpoint: `${e.apiUrl}/api/v1/draft`,
						method: s ? r.ob.PUT : r.ob.POST,
						data: Object(y.a)(t)
					}).then(e => e.body.fields && Object(j.w)(e.body.fields[0]) ? {
						...e,
						body: {},
						error: {
							type: r.K.SUBMIT_VALIDATION_ERROR,
							fields: [{
								field: e.body.fields[0],
								msg: e.body.explanation
							}]
						}
					} : e))(n(), f, e);
					if (h.ok) {
						const {
							id: s,
							draftsCount: r
						} = Object(y.c)(h.body);
						t(W({
							draftId: s,
							draftsCount: r
						})), e || t(Object(a.a)(f.destSubreddit, s, !1))
					} else {
						const e = h.error;
						e.type === r.K.BAD_CAPTCHA_ERROR ? t(X()) : e.type === r.K.VALIDATION_ERROR ? t(z(e)) : e.type === r.K.SUBMIT_VALIDATION_ERROR ? t(Q(e)) : t($(e)), t(Object(d.f)({
							duration: d.a,
							kind: E.b.Error,
							text: Object(i.a)(e)
						}))
					}
				}, Z = "POST_DRAFT__LOAD_DRAFT", J = Object(o.a)(Z), ee = e => async (t, s, r) => {
					let {
						apiContext: i
					} = r;
					t(J(e));
					let o = j.f;
					const n = s();
					if (e.subredditId) {
						const t = Object(P.X)(n, {
								subredditId: e.subredditId
							}),
							s = Object(v.r)(n, {
								profileId: e.subredditId
							}),
							r = Object(I.m)(n);
						t ? o = {
							isProfile: !1,
							name: t.name
						} : s && r && (o = {
							isProfile: !0,
							name: Object(S.e)(r)
						})
					}
					await t(Object(a.a)(o, e.id, !1));
					const d = Object(C.h)(s(), e.id);
					d && T.j(s(), d)
				}, te = "POST_DELETE_DRAFT_SUCCEEDED", se = "POST_DELETE_DRAFT_FAILED", re = "POST_DELETE_DRAFT_PENDING", ie = Object(o.a)(te), oe = Object(o.a)(se), ne = Object(o.a)(re), ae = (e, t) => async (s, o, a) => {
					let {
						apiContext: p
					} = a;
					const b = o();
					if (Object(C.a)(b, e)) return;
					const f = Object(C.d)(b, {
						draftId: e
					});
					f && T.h(b, f), s(ne({
						draftId: e
					}));
					const h = await (async (e, t) => Object(l.a)(Object(u.a)(e, [m.g]), {
						endpoint: `${e.apiUrl}/api/v1/draft?draft_id=${t}`,
						method: r.ob.DELETE
					}))(p(), e);
					if (h.ok) {
						const {
							draftsCount: r
						} = Object(y.c)(h.body);
						s(ie({
							draftId: e,
							draftsCount: r
						}));
						const i = Object(c.x)(t);
						e === i && s(Object(n.q)(!0, t))
					} else {
						const t = h.error;
						s(oe({
							draftId: e,
							apiError: t
						})), s(Object(d.f)({
							duration: d.a,
							kind: E.b.Error,
							text: Object(i.a)(t)
						}))
					}
				}
		},
		"./src/reddit/actions/postFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return b
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "f", (function() {
				return T
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "e", (function() {
				return w
			})), s.d(t, "d", (function() {
				return k
			})), s.d(t, "l", (function() {
				return L
			})), s.d(t, "k", (function() {
				return N
			})), s.d(t, "j", (function() {
				return R
			})), s.d(t, "g", (function() {
				return M
			})), s.d(t, "i", (function() {
				return U
			})), s.d(t, "h", (function() {
				return V
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/post.ts"),
				n = s("./src/reddit/actions/postFlairStyleTemplate.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/endpoints/flair/index.ts"),
				c = s("./src/reddit/helpers/flair.ts"),
				l = s("./src/reddit/models/Flair/index.ts"),
				u = s("./src/reddit/models/Toast/index.ts"),
				m = s("./src/reddit/selectors/postFlair.ts"),
				p = s("./src/reddit/selectors/subreddit.ts");
			const b = "STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_SUCCESS",
				f = Object(i.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_PENDING"),
				h = Object(i.a)(b),
				O = Object(i.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_FAILED"),
				g = "STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				_ = Object(i.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				y = Object(i.a)(g),
				j = Object(i.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				T = "STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_SUCCESS",
				E = Object(i.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_PENDING"),
				S = Object(i.a)(T),
				x = Object(i.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				C = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				v = Object(i.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				P = Object(i.a)(C),
				I = Object(i.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_FAILED"),
				w = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_PENDING",
				k = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_FAILED",
				F = Object(i.a)(w),
				D = Object(i.a)("STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_SUCCESS"),
				A = Object(i.a)(k),
				L = (e, t) => async (s, r, i) => {
					let {
						apiContext: o
					} = i;
					const n = r(),
						a = Object(p.X)(n, {
							subredditId: e
						}).name;
					s(f());
					const c = await Object(d.l)(o(), a, t);
					if (c.ok) {
						s(h({
							subredditId: e,
							isEnabled: t
						}))
					} else s(O());
					return c.ok
				}, N = (e, t) => async (s, r, i) => {
					let {
						apiContext: o
					} = i;
					const n = r(),
						a = Object(p.X)(n, {
							subredditId: e
						}).name;
					s(_());
					const c = await Object(d.k)(o(), t, l.d.LinkFlair, a);
					if (c.ok) {
						s(y({
							subredditId: e,
							canAssignOwn: t
						}))
					} else s(j());
					return c.ok
				}, R = (e, t) => async (s, i, o) => {
					let {
						apiContext: c
					} = o;
					const m = i(),
						b = Object(p.X)(m, {
							subredditId: t
						}).name;
					s(E());
					const f = await Object(d.g)(c(), e, b, l.d.LinkFlair);
					let h = f.ok && !(f.body && !1 === f.body.success);
					if (h) {
						const r = f.body;
						if (s(S({
								subredditId: t,
								template: r
							})), r.id) {
							const i = e.styleTemplate,
								o = m.structuredStyles.flairTemplate.models[r.id];
							i ? h = await s(Object(n.d)(t, r.id, i)) : o && (h = await s(Object(n.c)(t, r.id)))
						}
					}
					if (h) {
						const e = Object(a.e)(r.fbt._("Flair saved!", null, {
							hk: "3MQuUt"
						}), u.b.SuccessMod);
						s(Object(a.f)(e))
					} else {
						s(x());
						const i = Object(a.e)(r.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "1yf1Ne"
						}), u.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), R(e, t));
						s(Object(a.f)(i))
					}
					return h
				}, M = (e, t) => async (s, i, o) => {
					let {
						apiContext: n
					} = o;
					const c = i(),
						l = Object(p.X)(c, {
							subredditId: t
						}).name;
					if (s(v()), (await Object(d.b)(n(), e, l)).ok) {
						s(P({
							subredditId: t,
							templateId: e
						}));
						const i = Object(a.e)(r.fbt._("Flair deleted!", null, {
							hk: "44T1il"
						}), u.b.SuccessMod);
						s(Object(a.f)(i))
					} else {
						s(I());
						const i = Object(a.e)(r.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "1nwT0G"
						}), u.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), M(e, t));
						s(Object(a.f)(i))
					}
				}, U = (e, t) => async (s, i, o) => {
					let {
						apiContext: n
					} = o;
					const c = i(),
						b = Object(m.d)(c, {
							subredditId: t
						}).templateIds,
						f = Object(p.X)(c, {
							subredditId: t
						}).name;
					if (s(F({
							subredditId: t,
							templateIds: e
						})), (await Object(d.f)(n(), f, l.d.LinkFlair, e)).ok) {
						s(D());
						const e = Object(a.e)(r.fbt._("Flair reorder saved.", null, {
							hk: "1Xbuan"
						}), u.b.SuccessMod);
						s(Object(a.f)(e))
					} else {
						s(A({
							subredditId: t,
							templateIds: b
						}));
						const i = Object(a.e)(r.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "4ohwNd"
						}), u.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), U(e, t));
						s(Object(a.f)(i))
					}
				}, V = e => {
					let {
						post: t,
						previewFlair: s,
						selectedTemplateId: r
					} = e;
					return async (e, i, n) => {
						let {
							apiContext: a
						} = n;
						const l = t.flair.filter(e => !Object(c.q)(e.type));
						if (s && l.unshift(s), e(Object(o.Q)({
								[t.id]: {
									flair: l
								}
							})), s) {
							const e = Object(c.g)(s);
							Object(d.i)(a(), t.id, r, e)
						} else Object(d.i)(a(), t.id, "", "")
					}
				}
		},
		"./src/reddit/actions/postFlairStyleTemplate.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return j
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "a", (function() {
				return S
			})), s.d(t, "c", (function() {
				return C
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/forEach.js"),
				i = s.n(r),
				o = s("./node_modules/lodash/isEqual.js"),
				n = s.n(o),
				a = s("./node_modules/lodash/values.js"),
				d = s.n(a),
				c = s("./src/lib/makeActionCreator/index.ts"),
				l = s("./src/reddit/actions/imageUploads.ts"),
				u = s("./src/reddit/helpers/media/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/makeApiRequest/index.ts"),
				b = s("./src/lib/omitHeaders/index.ts"),
				f = s("./src/reddit/constants/headers.ts");
			var h = s("./src/reddit/helpers/trackers/blade.ts"),
				O = s("./src/reddit/models/Image/index.tsx"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				_ = s("./src/telemetry/index.ts");
			const y = e => {
					let {
						subredditId: t,
						flairId: s,
						imageKey: r,
						imageData: i
					} = e;
					return async (e, o, n) => {
						const a = o(),
							d = Object(g.X)(a, {
								subredditId: t
							});
						if (!d) return !1;
						e(Object(l.k)(i));
						const c = await (async (e, t, s, r, i, o) => Object(p.a)(Object(b.a)(e, [f.a]), {
							endpoint: `${e.apiUrl}/api/v1/${t}/flair_style_asset_upload_s3/${s}`,
							method: m.ob.POST,
							data: {
								filepath: r,
								imagetype: i,
								mimetype: o
							}
						}))(n.apiContext(), d.name, s, i.file.name, r, await Object(u.h)(i.file));
						let h = !1;
						try {
							const t = await Object(l.g)(o(), c, i, O.a.FlairTemplates);
							t && e(Object(l.j)(t)), h = !0
						} catch (_) {
							if (_ instanceof Error) throw _;
							e(Object(l.i)(_))
						}
						return h
					}
				},
				j = "POSTFLAIR_STYLETEMPLATE_SAVED_SUCCESS",
				T = Object(c.a)(j),
				E = (e, t, s) => async (r, o, a) => {
					const {
						apiContext: c
					} = a;
					let u = o();
					const {
						pendingImages: j,
						...E
					} = s;
					let S = E;
					const x = Object(g.X)(u, {
						subredditId: e
					});
					if (!x) return !1;
					const C = u.structuredStyles.flairTemplate.models[t];
					if (C && n()(C, S)) return !0;
					if (j) {
						const s = [];
						if (i()(j, (i, o) => {
								i && s.push(r(y({
									flairId: t,
									imageData: Object(O.m)(i),
									imageKey: o,
									subredditId: e
								})))
							}), !(await Promise.all(s)).every(e => e)) return !1;
						S = ((e, t, s) => {
							const r = {
								...e
							};
							return i()(t, (e, t) => {
								const i = e && s.imageUploads[e.id];
								i && i.kind === O.b.TempUploaded && (r[t] = i.url)
							}), r
						})(S, j, o())
					}
					u = o();
					let v = null,
						P = null;
					const I = [];
					try {
						(v = await Object(l.f)(u, O.a.FlairTemplates)) && (P = Object(l.m)(v)(r, o, a), I.push(...d()(v.imagesByKey)))
					} catch (D) {
						return !1
					}
					const w = await (async (e, t, s, r) => Object(p.a)(Object(b.a)(e, [f.a]), {
							endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${s}`,
							method: m.ob.PUT,
							data: r
						}))(c(), x.name, t, S),
						k = C ? "edit_post_flair_template" : "save_post_flair_template",
						F = Object(h.e)(u, k);
					if (w.ok) {
						let e;
						if (P) try {
							await P, e = ((e, t, s) => {
								const r = {
									...e
								};
								return t.forEach(e => {
									const t = s.imageUploads[e.id];
									t && t.kind === O.b.Uploaded && (e.url === r.postBackgroundImage ? r.postBackgroundImage = t.url : e.url === r.postPlaceholderImage && (r.postPlaceholderImage = t.url))
								}), r
							})(S, I, o())
						} catch (D) {
							e = null
						} else e = S;
						r(T({
							flairId: t,
							template: e || S
						}))
					} else v && v.websocket.close();
					return Object(_.a)({
						...F,
						actionInfo: {
							...F.actionInfo,
							success: w.ok
						}
					}), w.ok
				}, S = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", x = Object(c.a)(S), C = (e, t) => async (s, r, i) => {
					let {
						apiContext: o
					} = i;
					const n = r(),
						a = Object(g.X)(n, {
							subredditId: e
						});
					if (!a) return !1;
					const d = await (async (e, t, s) => Object(p.a)(Object(b.a)(e, [f.a]), {
							endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${s}`,
							method: m.ob.DELETE
						}))(o(), a.name, t),
						c = Object(h.e)(n, "delete_flair_template");
					return d.ok && s(x({
						flairId: t
					})), Object(_.a)({
						...c,
						actionInfo: {
							...c.actionInfo,
							success: d.ok
						}
					}), d.ok
				}
		},
		"./src/reddit/actions/redditEmbed.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "c", (function() {
				return b
			}));
			var r = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/tabBadging.ts"),
				n = s("./src/reddit/endpoints/me/index.ts"),
				a = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				d = s("./src/reddit/helpers/trackers/screenview.ts");
			const c = "REDDIT_EMBED_LOADED",
				l = "REDDIT_EMBED_FAILED",
				u = Object(i.a)("REDDIT_EMBED_PENDING"),
				m = Object(i.a)(c),
				p = Object(i.a)(l),
				b = (e, t) => async (e, s, r) => {
					let {
						apiContext: i
					} = r;
					const d = s();
					e(u());
					const c = await Object(n.a)(i());
					c.ok && c.body ? !t || c.body.account ? (e(m(c.body)), e(Object(o.d)()), f(d)) : Object(a.a)(e, d) : e(p(c.error))
				}, f = e => {
					e.platform.currentPage && e.platform.currentPage.routeMatch && e.platform.currentPage.routeMatch.route && e.platform.currentPage.routeMatch.route.meta && e.platform.currentPage.routeMatch.route.meta.name && e.platform.currentPage.routeMatch.route.meta.name === r.Tb.INBOX_PAGES && Object(d.f)(e)
				}
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "h", (function() {
				return n
			})), s.d(t, "i", (function() {
				return a
			})), s.d(t, "g", (function() {
				return d
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			}));
			const r = "SUBSCRIPTION__FETCH_DATA_PENDING",
				i = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				o = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				n = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				a = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				d = "SUBSCRIPTION__ORDER_LOADED",
				c = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return k
			})), s.d(t, "d", (function() {
				return D
			})), s.d(t, "c", (function() {
				return L
			})), s.d(t, "a", (function() {
				return R
			})), s.d(t, "b", (function() {
				return U
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/linkMatchers/customLinks.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/login.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/actions/subscription/constants.ts"),
				l = s("./src/reddit/actions/toaster.ts"),
				u = s("./src/reddit/constants/posts.ts"),
				m = s("./src/lib/makeApiRequest/index.ts"),
				p = s("./src/lib/omitHeaders/index.ts"),
				b = s("./src/reddit/constants/headers.ts");
			var f = s("./src/reddit/endpoints/subreddit/subscriptions.ts"),
				h = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				O = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				g = s("./src/reddit/models/GqlTopLevelField.ts"),
				_ = s("./src/reddit/models/User/index.ts");

			function y(e) {
				const t = [],
					s = [],
					r = {},
					i = {},
					{
						followedRedditorsInfo: o
					} = e.identity;
				for (const a of o.edges) {
					if (a.node.__typename !== _.c.AvailableRedditor || !a.node.profile) continue;
					const e = Object(h.a)(a.node.profile);
					r[e.id] = e;
					const {
						isFavorite: s
					} = a.node.profile;
					s && t.push(e.id)
				}
				const {
					subscribedSubreddits: n
				} = e.identity;
				for (const a of n.edges) {
					if (a.node.__typename !== g.a.Subreddit) continue;
					const e = Object(O.a)(a.node);
					i[e.id] = e;
					const {
						isFavorite: t
					} = a.node;
					t && s.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: s,
					profiles: r,
					subreddits: i
				}
			}
			var j = s("./src/reddit/models/Toast/index.ts"),
				T = s("./src/reddit/selectors/profile.ts"),
				E = s("./src/reddit/selectors/subreddit.ts"),
				S = s("./src/reddit/selectors/subscriptions.ts"),
				x = s("./src/reddit/selectors/user.ts");
			const C = () => r.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				v = Object(n.a)(c.c),
				P = Object(n.a)(c.b),
				I = Object(n.a)(c.a),
				w = Object(n.a)(c.h),
				k = (Object(n.a)(c.i), Object(n.a)(c.g), () => async (e, t, s) => {
					let {
						gqlContext: r
					} = s;
					const i = t();
					if (!i.user.account || i.subscriptions.api.fetched) return;
					e(P());
					const o = await Object(f.a)(r());
					if (o.ok) {
						const t = y(o.body.data);
						e(v(t))
					} else e(I({
						error: o.error
					}))
				}),
				F = (e, t) => t.type === u.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				D = (e, t, s) => async (n, c, m) => {
					let {
						apiContext: p
					} = m, b = e.map(e => e.type === u.a.SUBREDDIT ? {
						id: Object(E.I)(c(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(T.o)(c(), e.name),
						name: `${i.qc}${e.name}`,
						type: e.type
					});
					if (!Object(x.S)(c())) return n(Object(d.k)({
						actionSource: d.a.Subscribe
					})), void n(Object(a.openRegisterModal)());
					const h = Object(x.m)(c());
					if (h) {
						const t = b.length,
							s = e.length;
						if (b = b.filter(e => !F(h, e)), (e = e.filter(e => !F(h, e))).length !== s || b.length !== t) {
							const e = r.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							n(Object(l.f)(Object(l.e)(e, j.b.Error)))
						}
						if (!e.length && !b.length) return
					}
					n(w({
						identifiers: b,
						nameIdentifiers: e,
						profileModels: c().profiles.models,
						subredditModels: c().subreddits.models,
						subscriptionsCount: Object(S.b)(c()),
						userIsSubscriber: t,
						widgetId: s
					}));
					const O = await Object(f.c)(p(), {
						subredditNames: b.map(e => {
							let {
								name: t
							} = e;
							return t
						}),
						subscribe: t
					});
					if (O.ok) {
						const s = 1 === e.length ? `${"subreddit"===e[0].type?o.d.subreddit:o.d.profile}${e[0].name}` : r.fbt._({
								"*": "{communities} communities",
								_1: "1 community"
							}, [r.fbt._plural(e.length, "communities")], {
								hk: "IgDzJ"
							}),
							i = r.fbt._("Successfully followed {communityname}", [r.fbt._param("communityname", s)], {
								hk: "23Snyg"
							}),
							a = r.fbt._("Successfully unfollowed {communityname}", [r.fbt._param("communityname", s)], {
								hk: "jfC0S"
							}),
							d = r.fbt._("Successfully joined {communityname}", [r.fbt._param("communityname", s)], {
								hk: "1W9UY3"
							}),
							c = r.fbt._("Successfully left {communityname}", [r.fbt._param("communityname", s)], {
								hk: "1saMW"
							});
						n(Object(l.f)({
							text: 1 === e.length && "profile" === e[0].type ? t ? i : a : t ? d : c
						}))
					} else {
						n(w({
							identifiers: b,
							nameIdentifiers: e,
							profileModels: c().profiles.models,
							subredditModels: c().subreddits.models,
							subscriptionsCount: Object(S.b)(c()),
							userIsSubscriber: !t,
							widgetId: s
						}));
						const i = r.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						n(Object(l.f)(Object(l.e)(i, j.b.Error)))
					}
					return O.ok
				}, A = Object(n.a)(c.f), L = e => async (t, s, r) => {
					let {
						apiContext: i
					} = r;
					const o = s(),
						n = Object(E.Q)(o, {
							identifier: e
						});
					if (!n) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const a = e.type === u.a.SUBREDDIT ? n.name : `u_${n.name}`,
						d = o.subscriptions.favoriteSubredditOrder || [],
						c = o.subscriptions.favoriteProfileOrder || [],
						m = d.indexOf(e.id),
						p = c.indexOf(e.id),
						b = -1 === m && -1 === p,
						h = o.subreddits.models,
						O = o.profiles.models,
						g = {
							type: e.type,
							name: n.name
						},
						_ = () => Object(E.jb)(s(), {
							identifier: g
						});
					(_() || (await t(D([g], !0)), _())) && (t(A({
						makeFavorite: b,
						identifier: e,
						subredditModels: h,
						profileModels: O
					})), (await Object(f.b)(i(), a, b)).ok || (t(A({
						makeFavorite: !b,
						identifier: e,
						subredditModels: h,
						profileModels: O
					})), t(Object(l.f)({
						text: C(),
						kind: j.b.Error
					}))))
				}, N = Object(n.a)(c.d), R = e => async (t, s, r) => {
					let {
						apiContext: o
					} = r;
					const n = s().multireddits.models,
						a = () => {
							t(Object(l.f)({
								text: C(),
								kind: j.b.Error
							}))
						},
						d = n[e];
					if (!d) return void a();
					const c = !d.isFavorited;
					t(N({
						makeFavorite: c,
						multiredditPath: e,
						multiredditsModelsState: n
					})), (await ((e, t, s) => Object(m.a)(Object(p.a)(e, [b.a]), {
						method: i.ob.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: s ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(o(), e, c)).ok || (t(N({
						makeFavorite: !c,
						multiredditPath: e,
						multiredditsModelsState: n
					})), a())
				}, M = Object(n.a)(c.e), U = e => async (t, s, o) => {
					let {
						apiContext: n
					} = o;
					const a = s(),
						d = a.multireddits.models;
					if (!Object(x.S)(a)) return;
					const c = function() {
							let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
							t(Object(l.f)({
								text: r.fbt._("Sorry, failed to {followAction}", [r.fbt._param("followAction", e ? r.fbt._("follow", null, {
									hk: "3YMYJK"
								}) : r.fbt._("unfollow", null, {
									hk: "24IYxj"
								}))], {
									hk: "1ufRSl"
								}),
								kind: j.b.Error
							}))
						},
						u = d[e];
					if (!u) return void c();
					const f = !u.isFollowed;
					t(M({
						follow: f,
						multiredditPath: e,
						multiredditsModelsState: d
					})), (await ((e, t, s) => Object(m.a)(Object(p.a)(e, [b.a]), {
						method: i.ob.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: s ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(n(), e, f)).ok || (t(M({
						follow: !f,
						multiredditPath: e,
						multiredditsModelsState: d
					})), c(f))
				}
		},
		"./src/reddit/components/AdViewability/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/lodash/isEqual.js"),
				i = s.n(r),
				o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				c = s("./src/lib/ads/index.ts"),
				l = s("./src/lib/ads/store.ts"),
				u = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				m = s("./src/reddit/connectors/PostViewable/index.ts"),
				p = s("./src/reddit/constants/adEvents.ts"),
				b = s("./src/reddit/models/Media/index.ts"),
				f = s("./src/reddit/selectors/media.ts"),
				h = s("./src/reddit/selectors/video.ts");
			const O = [{
					event: p.a.ViewableImpression,
					threshold: c.l,
					viewabilityMinimum: c.m
				}, {
					event: p.a.Impression,
					threshold: c.c,
					viewabilityMinimum: c.d
				}, {
					event: p.a.GalleryItemImpression,
					threshold: c.c,
					viewabilityMinimum: c.d
				}, {
					event: p.a.VendorFullyInView,
					threshold: c.b,
					viewabilityMinimum: c.f
				}, {
					event: p.a.GroupMViewable,
					threshold: c.b,
					viewabilityMinimum: c.m
				}, {
					event: p.a.VendorFullyInViewSeconds5,
					threshold: c.l,
					viewabilityMinimum: c.h,
					remainingTime: c.h,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}, {
					event: p.a.VendorFullyInViewSeconds15,
					threshold: c.l,
					viewabilityMinimum: c.g,
					remainingTime: c.g,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}],
				g = [{
					event: p.a.VideoViewableImpression,
					threshold: c.l,
					viewabilityMinimum: c.k,
					remainingTime: c.k,
					timeViewingInterrupted: 0
				}, {
					event: p.a.VideoFullyViewableImpression,
					threshold: c.a,
					viewabilityMinimum: c.i,
					remainingTime: c.i,
					timeViewingInterrupted: 0
				}, {
					event: p.a.VideoGroupMViewable,
					threshold: void 0,
					viewabilityMinimum: c.k,
					remainingTime: void 0,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0,
					checkAudible: !0
				}, {
					event: p.a.VideoVendorFullyViewable50,
					threshold: c.a,
					viewabilityMinimum: void 0,
					remainingTime: void 0,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}],
				_ = e => e.map(e => {
					let {
						event: t,
						cumulative: s = !1,
						cumulativeElapsedTime: r,
						remainingTime: i,
						threshold: o = null,
						viewabilityMinimum: n,
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
						remainingTime: i,
						cumulativeElapsedTime: 0,
						viewabilityMinimum: n,
						timeViewingInitialized: 0,
						timeViewingInterrupted: d
					}
				}),
				y = () => _(O),
				j = () => _(g),
				T = [c.c, c.e, c.l, c.j, c.a, c.b],
				E = [c.c, c.l, c.j, c.a],
				S = [c.c, c.e, c.l, c.b],
				x = e => "boolean" == typeof e.cumulative && e.cumulative,
				C = Object(a.c)({
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
						const r = Object(h.h)(e, {
							postId: s.id
						});
						if (r) return r.length
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
				v = Object(m.a)(C);
			class P extends o.Component {
				constructor(e) {
					super(e), this.viewabilityStats = y(), this.videoStats = j(), this.pageInFocus = !0, this.inViewStats = [], this.outOfViewStats = [], this.handleViewabilityChange = e => {
						this.props.trackDisplay && this.handleThresholds(e, c.r), this.props.trackVideo && this.handleThresholds(e, c.p, !0), this.checkViewabilityByType(e)
					}, this.checkViewabilityByType = e => {
						if (i()(this.state.event, e) || this.setState({
								event: e
							}), this.props.trackDisplay) {
							const t = this.props.post.media && Object(b.G)(this.props.post.media);
							this.viewabilityStats.forEach(s => {
								(s.event !== p.a.GalleryItemImpression || t) && this.checkViewability(e, s)
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
						x(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), s && (l.d(e.id, c.p, !0), this.videoStats.forEach(e => {
						x(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
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
					let s, r = !1,
						i = !1;
					return "object" == typeof t ? (s = t.threshold, r = !!t.playing, i = !!t.withSound) : s = t, this.isAdequatelyInView(e, s) && (!r || this.props.isPlaying) && (!i || this.props.isAudible)
				}
				handleThresholds(e, t) {
					let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const {
						post: r
					} = this.props, o = t.filter(t => this.meetsViewabilityRequirements(e, t));
					!i()(o, this.inViewStats) && o.length > 0 && l.b(r.id, o, s);
					const n = t.filter(t => !this.meetsViewabilityRequirements(e, t));
					!i()(n, this.outOfViewStats) && n.length > 0 && l.d(r.id, n, s), this.outOfViewStats = n, this.inViewStats = o
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
						width: r
					} = e.boundingClientRect;
					return !t.threshold && t.event === p.a.VideoGroupMViewable && this.props.videoDuration && (t.threshold = r * s < 3e5 ? c.a : c.j, t.viewabilityMinimum = .5 * this.props.videoDuration), t.event === p.a.GroupMViewable && r * s > 242500 && (t.threshold = c.l), t
				}
				checkViewability(e, t) {
					if (x(t) && t.event === p.a.VideoVendorFullyViewable50 && this.addDurationBasedViewabilityMinimum(t), e && e.target && this.adjustThreshold(e, t), t.threshold && void 0 !== t.viewabilityMinimum) {
						if (this.isAdequatelyInView(e, t.threshold) && !t.fired) {
							if (t.timer) return;
							const e = this.getLengthForTimer(t);
							return e > 0 ? this.initTimer(t, e) : this.fireStat(t), void(t.timeViewingInitialized = Date.now())
						}
						x(t) && t.cumulative && this.pauseCumulativeStats(t), this.clearTimer(t)
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
					let s = T;
					return e && !t ? s = S : !e && t && (s = E), n.a.createElement(d.a, {
						threshold: s,
						onChange: this.handleViewabilityChange
					}, this.props.children)
				}
			}
			t.a = v(P)
		},
		"./src/reddit/components/Emoji/index.m.less": function(e, t, s) {
			e.exports = {
				EmojiDisplay: "_2Gt13AX94UlLxkluAMsZqP",
				emojiDisplay: "_2Gt13AX94UlLxkluAMsZqP"
			}
		},
		"./src/reddit/components/Flair/index.m.less": function(e, t, s) {
			e.exports = {
				FlairEmojiDisplay: "_1QwShihKKlyRXyQSlqYaWW",
				flairEmojiDisplay: "_1QwShihKKlyRXyQSlqYaWW",
				FlairWrapper: "_2X6EB3ZhEeXCh1eIVA64XM",
				flairWrapper: "_2X6EB3ZhEeXCh1eIVA64XM",
				TextFlair: "_1jNPl3YUk6zbpLWdjaJT1r",
				textFlair: "_1jNPl3YUk6zbpLWdjaJT1r",
				transparentBackgroundColor: "_39BEcWjOlYi1QGcJil6-yl",
				RichTextFlair: "_2hSecp_zkPm_s5ddV2htoj",
				richTextFlair: "_2hSecp_zkPm_s5ddV2htoj",
				MetaFlair: "_1wzhGvvafQFOWAyA157okr",
				metaFlair: "_1wzhGvvafQFOWAyA157okr",
				CloseButton: "_3BPVpMSn5b1vb1yTQuqCRH",
				closeButton: "_3BPVpMSn5b1vb1yTQuqCRH",
				CloseIcon: "_2cvySYWkqJfynvXFOpNc5L",
				closeIcon: "_2cvySYWkqJfynvXFOpNc5L",
				small: "aJrgrewN9C8x1Fusdx4hh",
				large: "_1wj6zoMi6hRP5YhJ8nXWXE",
				flairVariant: "_2VqfzH0dZ9dIl3XWNxs42y"
			}
		},
		"./src/reddit/components/Flair/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return V
			})), s.d(t, "b", (function() {
				return G
			})), s.d(t, "a", (function() {
				return H
			})), s.d(t, "c", (function() {
				return W
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/lodash/pick.js"),
				o = s.n(i),
				n = s("./node_modules/polished/dist/polished.es.js"),
				a = s("./node_modules/react/index.js"),
				d = s.n(a),
				c = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = s("./src/lib/addQueryParams/index.ts"),
				u = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/lib/lessComponent.tsx"),
				b = s("./src/reddit/components/Emoji/index.m.less"),
				f = s.n(b);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const O = p.a.wrapped(e => {
				let {
					backgroundImage: t,
					style: s,
					...r
				} = e;
				return d.a.createElement("div", h({
					style: {
						...s || {},
						backgroundImage: `url('${t}')`
					}
				}, r))
			}, "EmojiDisplay", f.a);
			var g = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				_ = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				y = s("./src/reddit/constants/colors.ts"),
				j = s("./src/reddit/constants/parameters.ts"),
				T = s("./src/reddit/controls/InternalLink/index.tsx"),
				E = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				S = s("./src/reddit/icons/svgs/Close/index.tsx"),
				x = s("./src/reddit/models/Flair/index.ts"),
				C = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				v = s("./src/reddit/components/Flair/index.m.less"),
				P = s.n(v);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const w = Object(_.a)(g.b),
				k = p.a.div("FlairWrapper", P.a),
				F = p.a.wrapped(c.a, "CloseButton", P.a),
				D = p.a.wrapped(Object(m.a)(e => {
					let {
						forceSmallEmojis: t,
						theme: s,
						...r
					} = e;
					const i = s;
					return d.a.createElement(O, I({
						style: {
							...A(!!t, i) || {}
						}
					}, r))
				}), "FlairEmojiDisplay", P.a),
				A = (e, t) => {
					if (!e && !!t.subredditContext.emojiHeight && !!t.subredditContext.emojiWidth) return {
						height: `${t.subredditContext.emojiHeight}px`,
						width: `${t.subredditContext.emojiWidth}px`
					}
				},
				L = (e, t) => {
					const s = t ? `/r/${t}/search` : "/search",
						r = `${t?"flair_name":"flair"}:"${e}"`;
					return Object(l.a)(s, {
						[j.w]: r,
						[j.x]: t ? "1" : ""
					})
				},
				N = e => e.isFlairFilter ? d.a.createElement(T.default, {
					onMouseDown: e.onMouseDown,
					to: e.to || ""
				}, e.flair) : e.onClick ? d.a.createElement(T.default, {
					onClick: () => e.onClick(e.searchableTerm),
					to: L(e.searchableTerm, e.subredditName)
				}, e.flair) : e.flair;
			class R extends d.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.state = {
						isTooltipOpen: !1
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							isTooltipOpen: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							isTooltipOpen: !1
						})
					}
				}
				render() {
					const e = d.a.createElement("span", {
						className: Object(u.a)(this.props.className, {
							[P.a.transparentBackgroundColor]: "transparent" === this.props.backgroundColor
						}),
						onMouseEnter: this.props.tooltip ? this.onShowTooltip : void 0,
						onMouseLeave: this.props.tooltip ? this.onHideTooltip : void 0,
						ref: this.setTooltipTargetRef,
						style: {
							backgroundColor: this.props.backgroundColor || Object(C.a)(this.props).flair,
							color: `${V(this.props)}`
						}
					}, this.props.text, this.props.isSelected && d.a.createElement(F, {
						to: "./",
						onClick: this.props.onCloseClick
					}, d.a.createElement(S.a, {
						className: P.a.CloseIcon,
						style: {
							fill: this.props.backgroundColor || Object(C.a)(this.props).flair
						}
					})), !!this.props.tooltip && d.a.createElement(w, {
						text: this.props.tooltip,
						isOpen: this.state.isTooltipOpen,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					}));
					return d.a.createElement(N, {
						flair: e,
						isFlairFilter: this.props.isFlairFilter,
						onClick: this.props.onClick,
						onMouseDown: this.props.onMouseDown,
						searchableTerm: this.props.text,
						subredditName: this.props.subredditName,
						to: this.props.to
					})
				}
			}
			const M = Object(m.a)(R),
				U = Object(m.a)(e => {
					let t = "",
						s = !1;
					const r = e.richtext.map((r, i) => {
						if (r.e === x.c.Emoji) {
							const o = r;
							return t += o.a, s = !0, d.a.createElement(D, {
								forceSmallEmojis: e.forceSmallEmojis,
								backgroundImage: o.u,
								key: i,
								title: o.a
							})
						} {
							const e = r;
							return t += e.t, d.a.createElement("span", {
								key: i
							}, e.t)
						}
					});
					let i;
					s && !e.forceSmallEmojis && e.theme && e.theme.subredditContext.emojiWidth && e.theme.subredditContext.emojiHeight && e.theme.subredditContext.emojiHeight > 16 && (i = {
						marginTop: `-${e.theme.subredditContext.emojiHeight-16}px`
					});
					const o = d.a.createElement(k, {
						className: Object(u.a)(e.className, {
							[P.a.transparentBackgroundColor]: "transparent" === e.backgroundColor
						}),
						style: {
							...i,
							backgroundColor: e.backgroundColor || Object(C.a)(e).flair,
							color: `${V(e)}`
						}
					}, r, e.isSelected && d.a.createElement(F, {
						to: "./",
						onClick: e.onCloseClick
					}, d.a.createElement(S.a, {
						className: P.a.CloseIcon,
						style: {
							fill: e.backgroundColor || Object(C.a)(e).flair
						}
					})));
					return d.a.createElement(N, {
						flair: o,
						isFlairFilter: e.isFlairFilter,
						onClick: e.onClick ? () => {
							e.onClick(t)
						} : void 0,
						onMouseDown: e.onMouseDown,
						searchableTerm: t,
						subredditName: e.subredditName,
						to: e.to
					})
				}),
				V = e => !e.textColor || e.textColor && !e.backgroundColor ? Object(C.a)(e).postFlairText : "transparent" === e.backgroundColor ? Object(E.a)(Object(C.a)(e).post, y.a.black, y.a.white) : e.textColor === x.e.Dark ? y.a.black : y.a.white,
				G = p.a.wrapped(M, "TextFlair", P.a),
				q = p.a.wrapped(U, "RichTextFlair", P.a),
				B = e => {
					switch (e.type) {
						case "spoiler":
							return "#A4A7A8";
						case "nsfw":
							return "#FF585B";
						default:
							return Object(n.i)(.1, Object(C.a)(o()(e, "theme", "redditStyle", "data-redditstyle")).button)
					}
				},
				H = p.a.wrapped(e => {
					const t = B(e),
						s = d.a.createElement("span", {
							className: e.className,
							style: {
								border: `1px solid ${t}`,
								color: t
							}
						}, e.text);
					return d.a.createElement(N, {
						flair: s,
						searchableTerm: e.text
					})
				}, "MetaFlair", P.a);

			function W(e) {
				const {
					className: t,
					disabled: s = !1,
					flair: i,
					isFlairFilter: o,
					isSelected: n,
					onClick: a,
					onCloseClick: c,
					onMouseDown: l,
					subredditName: m,
					usesCommunityStyles: p,
					forceSmallEmojis: b,
					to: f
				} = e, h = Object(u.a)({
					[P.a.flairVariant]: o,
					[P.a.small]: o && !e.large,
					[P.a.large]: o && e.large
				}, t);
				switch (i.type) {
					case x.f.Richtext:
						return s || !i.richtext ? null : d.a.createElement(q, {
							backgroundColor: i.backgroundColor,
							className: h,
							forceSmallEmojis: b,
							isFlairFilter: o,
							isSelected: n,
							onClick: a,
							onCloseClick: c,
							onMouseDown: l,
							redditStyle: !p,
							richtext: i.richtext,
							subredditName: m,
							textColor: i.textColor,
							to: f
						});
					case x.f.Text:
						return s || !i.text ? null : d.a.createElement(G, {
							backgroundColor: i.backgroundColor,
							className: h,
							isFlairFilter: o,
							isSelected: n,
							onClick: a,
							onCloseClick: c,
							onMouseDown: l,
							subredditName: m,
							text: i.text,
							textColor: i.textColor,
							redditStyle: !p,
							to: f
						});
					case x.f.Meta:
						return d.a.createElement(G, {
							backgroundColor: i.backgroundColor,
							className: t,
							isFlairFilter: o,
							subredditName: m,
							text: i.text,
							textColor: i.textColor,
							redditStyle: !p,
							to: f
						});
					case x.f.Nsfw:
					case x.f.Spoiler:
						return d.a.createElement(H, {
							className: t,
							text: i.text,
							type: i.type
						});
					case x.f.Quarantined:
						return null;
					case x.f.Oc:
						return d.a.createElement(G, {
							backgroundColor: y.a.alienblue,
							text: i.text,
							textColor: x.e.Light,
							tooltip: r.fbt._("This post is marked as Original Content [OC]", null, {
								hk: "h7je6"
							})
						});
					default:
						return i.text ? d.a.createElement(G, {
							backgroundColor: i.backgroundColor,
							className: h,
							isFlairFilter: o,
							onClick: a,
							onCloseClick: c,
							onMouseDown: l,
							subredditName: m,
							text: i.text,
							redditStyle: !p,
							to: f
						}) : null
				}
			}
		},
		"./src/reddit/components/FlairList/index.m.less": function(e, t, s) {
			e.exports = {
				flairVariantInList: "_1Dl-kvSxyJMWO9nuoTof8N"
			}
		},
		"./src/reddit/components/FlairList/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/lodash/noop.js"),
				i = s.n(r),
				o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/Flair/index.tsx"),
				l = s("./src/reddit/helpers/flair.ts"),
				u = s("./src/reddit/models/Flair/index.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				p = s("./src/reddit/components/FlairList/index.m.less"),
				b = s.n(p);
			const f = Object(d.c)({
					labelNSFW: m.cb
				}),
				h = Object(a.b)(f),
				O = e => {
					if (e.type === u.f.Richtext && e.richtext) {
						const t = e.richtext.map(e => e.e === u.c.Emoji ? e.u : e.t).join("-");
						return `${e.type}--${t}`
					}
					return `${e.type}--${e.text}`
				};
			t.a = h(e => {
				let {
					className: t,
					isFlairFilter: s,
					onClick: r,
					onMouseDown: o,
					disabled: a = !1,
					flair: d,
					labelNSFW: m,
					subredditName: p
				} = e;
				const f = !!d.find(e => e.type === u.f.Richtext),
					h = d.map(e => {
						if (e.type === u.f.Text && f) return null;
						if (!m && e.type === u.f.Nsfw) return null;
						const t = Object(l.j)(e),
							d = `/r/${p}/`,
							h = o ? () => o(e) : i.a,
							g = s && (e.type === u.f.Richtext || e.type === u.f.Text);
						return n.a.createElement(c.c, {
							className: g ? b.a.flairVariantInList : void 0,
							isFlairFilter: s,
							key: O(e),
							onClick: r,
							onMouseDown: h,
							disabled: a,
							flair: e,
							forceSmallEmojis: !0,
							subredditName: p,
							to: Object(l.e)(d, t)
						})
					});
				return n.a.createElement("div", {
					className: t
				}, h)
			})
		},
		"./src/reddit/components/FlairWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				flairList: "lrzZ8b0L6AzLkQj5Ww7H1",
				flairWrapper: "_2fiIRtMpITeCAzXc4cANKp",
				flairNoWrap: "_2xu1HuBz1Yx6SP10AGVx_I"
			}
		},
		"./src/reddit/components/FlairWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return j
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				n = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/FlairList/index.tsx"),
				l = s("./src/reddit/components/PostTitle/getLeftAndRightFlair.ts"),
				u = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/helpers/correlationIdTracker.ts"),
				b = s("./src/reddit/helpers/trackers/postFlair.ts"),
				f = s("./src/reddit/models/Flair/index.ts"),
				h = s("./src/reddit/selectors/postFlair.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				g = s("./src/reddit/components/FlairWrapper/index.m.less"),
				_ = s.n(g);
			const y = Object(n.b)(() => Object(a.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(m.r)(e, {
							pageLayer: s
						})
					},
					isPostFlairEnabled: (e, t) => Object(h.c)(e, {
						subredditId: t.post.belongsTo.id
					}),
					subredditName: (e, t) => {
						let {
							post: s
						} = t;
						return Object(O.X)(e, {
							subredditId: s.belongsTo.id
						}).name
					}
				})),
				j = e => {
					const t = [];
					return e.isOriginalContent && t.push({
						text: r.fbt._("OC", null, {
							hk: "1i721p"
						}),
						type: f.f.Oc
					}), e.isMeta && t.push({
						text: r.fbt._("Poll", null, {
							hk: "1scdU1"
						}),
						type: f.f.Meta
					}), t.push(...e.flair), t
				};
			t.a = y(e => {
				let {
					className: t,
					disableFlair: s,
					flairPosition: r,
					isFlairFilter: i,
					isPostFlairEnabled: n,
					nowrap: a,
					post: m,
					sendEvent: h,
					subredditName: O,
					titleFlair: g
				} = e;
				const y = Object(u.a)(),
					T = r === f.b.Left,
					E = g || j(m),
					{
						leftFlair: S,
						rightFlair: x
					} = Object(l.a)({
						flair: E,
						isFlairPositionedLeft: T
					}),
					C = a ? _.a.flairNoWrap : S.length > 0 || x.length > 0 ? _.a.flairWrapper : null,
					v = e => {
						const t = {
							id: m.belongsTo.id,
							eventType: m.belongsTo.type,
							originElement: "post_flair",
							postFlairName: e
						};
						Object(p.d)(p.a.SearchResults), h && h(Object(b.a)(m.id, t))
					},
					P = e => {
						Object(p.d)(p.a.SearchResults), h && h(Object(b.e)(e, m.id))
					},
					I = !(s || !E || !E.length);
				return I ? o.a.createElement("div", {
					className: Object(d.a)(C, t),
					"data-ignore-click": y
				}, I && S && o.a.createElement(c.a, {
					className: _.a.flairList,
					isFlairFilter: i,
					key: "leftFlair",
					onClick: v,
					onMouseDown: P,
					flair: S,
					disabled: !n,
					subredditName: O
				}), I && o.a.createElement(c.a, {
					className: _.a.flairList,
					isFlairFilter: i,
					key: "rightFlair",
					onClick: v,
					onMouseDown: P,
					flair: x,
					disabled: !n,
					subredditName: O
				})) : null
			})
		},
		"./src/reddit/components/Hovercards/SubredditHovercard/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/higherOrderComponents/makeAsync.tsx"),
				i = s("./src/lib/loadWithRetries/index.ts");
			const o = () => null;
			t.a = Object(r.a)({
				ErrorComponent: o,
				getComponent: () => Object(i.a)(() => s.e("SubredditHovercard").then(s.bind(null, "./src/reddit/components/Hovercards/SubredditHovercard/_SubredditHovercard.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
		},
		"./src/reddit/components/HumanDate/HumanDate.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./src/lib/humanizeDate/index.ts"),
				n = s("./src/reddit/hooks/useLocale.ts");
			t.a = function(e) {
				let {
					seconds: t,
					...s
				} = e;
				var r;
				const a = Object(n.a)(),
					d = {
						...s,
						locale: null !== (r = s.locale) && void 0 !== r ? r : a
					};
				return i.a.createElement(i.a.Fragment, null, Object(o.a)(t, d))
			}
		},
		"./src/reddit/components/HumanDate/HumanDateTime.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				n = s("./src/lib/constants/index.ts");
			var a = s("./src/reddit/hooks/useLocale.ts");
			t.a = function(e) {
				let {
					seconds: t,
					locale: s
				} = e;
				const r = Object(a.a)(),
					d = null != s ? s : r;
				return i.a.createElement(i.a.Fragment, null, function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.DEFAULT_LOCALE;
					const s = e * n.Xb;
					return new Date(s).toLocaleString(t, {
						weekday: "short",
						month: "short",
						year: "numeric",
						day: "2-digit",
						hour: "2-digit",
						minute: "2-digit",
						second: "2-digit",
						timeZoneName: "long"
					})
				}(t, d))
			}
		},
		"./src/reddit/components/HumanDate/TimeAgo.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./src/lib/timeAgo/index.ts"),
				n = s("./src/reddit/hooks/useLocale.ts");
			t.a = function(e) {
				let {
					seconds: t,
					...s
				} = e;
				var r;
				const a = Object(n.a)(),
					d = {
						...s,
						locale: null !== (r = s.locale) && void 0 !== r ? r : a
					};
				return i.a.createElement(i.a.Fragment, null, Object(o.d)(t, d))
			}
		},
		"./src/reddit/components/HumanDate/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return r.a
			})), s.d(t, "a", (function() {
				return i.a
			})), s.d(t, "b", (function() {
				return o.a
			})), s.d(t, "c", (function() {
				return f
			}));
			var r = s("./src/reddit/components/HumanDate/TimeAgo.tsx"),
				i = s("./src/reddit/components/HumanDate/HumanDate.tsx"),
				o = s("./src/reddit/components/HumanDate/HumanDateTime.tsx"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				d = s("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				c = s("./node_modules/fbt/lib/FbtPublic.js"),
				l = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/eventTools/index.ts");

			function m(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.DEFAULT_LOCALE;
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function p(e, t) {
				let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.DEFAULT_LOCALE;
				const i = Object(u.e)(e, t),
					o = new Date(e * l.Xb);
				let n;
				if (i === u.a.Live || s) return c.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return i === u.a.Future ? n = Object(u.d)(e) ? c.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(u.b)(e) >= 5 ? m(o, r) : function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.DEFAULT_LOCALE;
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(o, r) : i === u.a.Past && (n = Object(u.d)(e) ? c.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : m(o, r)), `${n} @ ${function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.DEFAULT_LOCALE;return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(o,r)}`
			}
			var b = s("./src/reddit/hooks/useLocale.ts");
			var f = function(e) {
				let {
					startTime: t,
					endTime: s,
					isLive: r,
					locale: i
				} = e;
				const o = Object(b.a)(),
					n = null != i ? i : o;
				return a.a.createElement(a.a.Fragment, null, p(t, s, r, n))
			};
			s("./src/lib/humanizeUTCDate/index.tsx")
		},
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return h
			})), s.d(t, "a", (function() {
				return O
			}));
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				a = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = s("./src/reddit/selectors/tooltip.ts"),
				l = s("./src/reddit/components/InfoTextTooltip/index.m.less"),
				u = s.n(l),
				m = s("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const b = m.a.div("Text", u.a),
				f = m.a.div("BottomText", u.a),
				h = e => i.a.createElement(b, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				O = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return i.a.createElement(f, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				g = Object(n.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(c.b)(s)(e)
					}
				}),
				_ = Object(d.a)(O, [a.a.Click, a.a.Keydown]),
				y = Object(d.a)(h, [a.a.Click, a.a.Keydown]),
				j = Object(o.b)(g);
			t.c = j(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? i.a.createElement(_, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : i.a.createElement(y, p({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./src/higherOrderComponents/asTooltip.tsx"),
				n = s("./src/reddit/constants/elementIds.ts"),
				a = s("./src/reddit/contexts/InsideOverlay.tsx");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e, t) {
				const s = Object(o.a)(e, t);
				class r extends i.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(n.e);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return i.a.createElement(s, d({}, this.props, {
							container: this.state.container || this.props.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(a.b)(r)
			}
		},
		"./src/reddit/components/PostTitle/getLeftAndRightFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./src/reddit/helpers/flair.ts"),
				i = s("./src/reddit/models/Flair/index.ts");

			function o(e) {
				let {
					flair: t,
					isFlairPositionedLeft: s,
					showNSFWSpoilerFlairsOnly: o,
					hideNSFWSpoilerFlair: n
				} = e;
				const a = [],
					d = [],
					c = [];
				for (const m of t) m.type === i.f.Nsfw || m.type === i.f.Spoiler ? a.push(m) : Object(r.q)(m.type) ? d.push(m) : c.push(m);
				let l = [],
					u = [];
				return s ? o ? (l = a, u = []) : n ? (l = d, u = c) : (l = d, u = [...a, ...c]) : o ? (l = [], u = a) : n ? (l = [], u = [...d, ...c]) : (l = [], u = [...d, ...a, ...c]), {
					leftFlair: l,
					rightFlair: u
				}
			}
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./node_modules/react/index.js");
			const i = Object(r.createContext)(!1);

			function o() {
				return Object(r.useContext)(i)
			}
		},
		"./src/reddit/components/Thumbnail/index.m.less": function(e, t, s) {
			e.exports = {
				blurredThumbnail: "GnWcY6GPzeZ5rzsiQ98fo",
				container: "_2MkcR85HDnYngvlVW2gMMa",
				contentType: "_2hIvPRO2xz4rn9LXAJXYDa",
				hasType: "_10qSZsDWnOBwx4bc7GJ1QF",
				hiddenImage: "_25ZOvQhQdAqwdxPd5z-KFB",
				imageThumbnail: "_33Pa96SGhFVpZeI6a7Y_Pl",
				verticallyCenterThumbnail: "Fq7oYOARH1VVCaLAuAh37",
				linkIcon: "m0n699kowSp8Wfa40lqpF",
				outboundLinkIcon: "_2rOixIHGmpfZB93ihJsw3V",
				placeholderThumbnail: "_2YO2O4rMRYYMeH_t2y8M5w",
				thumbnail: "_2c1ElNxHftd8W_nZtcG9zf",
				usePreview: "_78ohNtfA1urjgUhnN1jLi",
				LinkText: "_3HXDOeeCKnmgu_pIdoLofi",
				linkText: "_3HXDOeeCKnmgu_pIdoLofi"
			}
		},
		"./src/reddit/components/Thumbnail/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			})), s.d(t, "c", (function() {
				return k
			}));
			var r = s("./src/lib/isUrl/index.ts"),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/ImageWithFallback/index.tsx"),
				l = s("./src/reddit/controls/ContentType/index.tsx"),
				u = s("./src/reddit/controls/OutboundLink/index.tsx"),
				m = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				p = s("./src/reddit/models/Media/index.ts"),
				b = s("./src/reddit/models/Theme/index.ts"),
				f = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				h = s("./src/telemetry/models/Outbound.ts"),
				O = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				g = s("./src/reddit/components/Thumbnail/index.m.less"),
				_ = s.n(g);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const j = e => e.placeholderImage || Object(f.a)(e).placeholderImage,
				T = e => e.placeholderImage ? "cover" : Object(f.a)(e).placeholderImagePosition,
				E = d.a.span("LinkText", _.a),
				S = e => {
					let {
						className: t,
						onClick: s,
						children: r
					} = e;
					return o.a.createElement("div", {
						onClick: s,
						className: Object(n.a)(_.a.linkIcon, t)
					}, r)
				},
				x = e => o.a.createElement("img", {
					alt: e.alt,
					className: Object(n.a)(_.a.hiddenImage, e.className)
				}),
				C = e => {
					const t = o.a.createRef(),
						{
							src: s,
							errorSrc: r
						} = e;
					return s && r && Object(c.b)(s).catch(() => {
						t.current && (t.current.style.backgroundImage = `url(${r})`)
					}), o.a.createElement("div", {
						"aria-label": e.alt,
						className: Object(n.a)(_.a.thumbnail, _.a.imageThumbnail, e.className),
						"data-click-id": "image",
						"data-adclicklocation": O.a.MEDIA,
						ref: t,
						role: "img",
						style: {
							backgroundImage: `url(${e.src})`,
							borderColor: e.isOutbound ? Object(f.a)(e).button : Object(f.a)(e).line
						}
					}, e.isOutbound && o.a.createElement(S, {
						className: e.linkIconClassName
					}, o.a.createElement(m.a, {
						className: Object(n.a)(_.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && o.a.createElement(E, {
						className: e.linkTextClassName
					}, e.text)), o.a.createElement(x, {
						alt: e.alt,
						className: "hiddenImg"
					}))
				},
				v = e => e.isOutbound ? Object(f.a)(e).button : e.placeholderImage ? "transparent" : Object(f.a)(e).line,
				P = e => {
					const t = j(e),
						s = t && {
							background: Object(b.g)(Object(f.a)(e).placeholder, t, T(e))
						};
					return o.a.createElement("div", {
						className: Object(n.a)(_.a.thumbnail, _.a.placeholderThumbnail, e.className),
						"data-click-id": "image",
						style: {
							...s,
							borderColor: v(e)
						}
					}, (!e.placeholderImage || e.showContentType) && o.a.createElement(l.a, {
						className: Object(n.a)(e.contentTypeClassName, _.a.contentType, {
							[_.a.hasType]: e.type && !e.isOutbound
						}),
						type: e.isMeta || e.isPoll ? "meta" : e.type
					}), e.isOutbound && o.a.createElement(S, {
						className: e.linkIconClassName
					}, o.a.createElement(m.a, {
						className: Object(n.a)(_.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && o.a.createElement(E, {
						className: e.linkTextClassName
					}, e.text)))
				},
				I = e => o.a.createElement(C, y({}, e, {
					className: Object(n.a)(_.a.blurredThumbnail, e.className)
				})),
				w = Object(a.a)(e => {
					const {
						className: t,
						containerClassName: s,
						contentTypeClassName: i,
						crosspost: a,
						forceShowNSFW: d,
						isCommentsPage: c,
						isMeta: l,
						linkIconClassName: m,
						linkTextClassName: b,
						outboundLinkIconClassName: f,
						post: O,
						redditStyle: g,
						removeLink: y,
						showContentType: T,
						templatePlaceholderImage: E,
						text: S,
						theme: x,
						usePreview: C
					} = e, v = !x.subredditContext.shouldShowNSFWContent && (O.isNSFW || !(!a || !a.isNSFW)) && !d, P = j({
						placeholderImage: E,
						redditStyle: g,
						theme: x
					}), I = k(e), w = c ? h.SourceElement.PostImage : h.SourceElement.ListingPostImage, D = F(O, t, P, v, S, x, I, l, T, y, g, m, b, f, i), A = Object(p.E)(O);
					return Object(r.a)(A) && !y && A.indexOf("redditmedia") < 0 ? o.a.createElement("div", {
						className: Object(n.a)(_.a.container, C ? _.a.usePreview : "", s)
					}, o.a.createElement(u.b, {
						href: Object(p.E)(O),
						isSponsored: O.isSponsored,
						postId: O.id,
						source: O.source,
						sourceElement: w
					}, D)) : o.a.createElement("div", {
						className: Object(n.a)(_.a.container, C ? _.a.usePreview : "", s)
					}, D)
				}),
				k = e => {
					let {
						crosspost: t,
						post: s,
						url: r,
						usePreview: i
					} = e;
					if (r) return r;
					const {
						preview: o,
						thumbnail: n
					} = t || s;
					return i && o ? o.url : s.isSponsored && o && "default" === n.url ? o.url : n.url
				},
				F = (e, t, s, i, a, d, c, l, u, m, p, b, f, h, O) => {
					const g = (e => e.source && !e.isSponsored || !1)(e);
					if (Object(r.a)(c)) {
						const s = Object(n.a)(t);
						return i ? o.a.createElement(I, {
							"data-click-id": "image",
							src: c,
							className: s,
							isOutbound: g && !m,
							linkIconClassName: b,
							linkTextClassName: f,
							outboundLinkIconClassName: h,
							redditStyle: p,
							text: a,
							theme: d
						}) : o.a.createElement(C, {
							alt: e.title,
							className: s,
							src: c,
							isOutbound: g && !m,
							linkIconClassName: b,
							linkTextClassName: f,
							outboundLinkIconClassName: h,
							redditStyle: p,
							text: a,
							theme: d
						})
					}
					return o.a.createElement(P, {
						className: t,
						contentTypeClassName: O,
						placeholderImage: s,
						isMeta: l,
						isOutbound: g && !m,
						linkIconClassName: b,
						linkTextClassName: f,
						outboundLinkIconClassName: h,
						redditStyle: p,
						showContentType: u,
						text: a,
						theme: d,
						type: e.media ? e.media.type : null,
						isPoll: !!e.pollData
					})
				};
			t.b = w
		},
		"./src/reddit/connectors/PostViewable/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/actions/post.ts");
			t.a = (e, t) => Object(r.b)(e, function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return {
					...e,
					onPostViewable: i.O
				}
			}(t))
		},
		"./src/reddit/constants/errors.ts": function(e, t, s) {
			"use strict";
			var r, i;
			s.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.BannedProfile = "BANNED", e.DeletedProfile = "DELETED", e.NotFoundProfile = "NOT_FOUND", e.ForbiddenProfile = "FORBIDDEN"
				}(r || (r = {})),
				function(e) {
					e.Unknown = "Unknown"
				}(i || (i = {}))
		},
		"./src/reddit/contexts/Post/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return b
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "e", (function() {
				return h
			})), s.d(t, "b", (function() {
				return O
			}));
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/reddit/constants/posts.ts"),
				a = s("./src/reddit/hooks/useMemoShallowEqual.ts"),
				d = s("./src/reddit/hooks/useUserContext.ts"),
				c = s("./src/reddit/models/User/index.ts"),
				l = s("./src/reddit/selectors/posts.ts"),
				u = s("./src/reddit/selectors/subreddit.ts");

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const p = i.a.createContext(null);

			function b(e) {
				const t = Object(o.e)(t => Object(l.F)(t, {
						postId: e
					})),
					{
						currentUser: s
					} = Object(d.a)();
				let r = Object(o.e)(e => t ? Object(u.Q)(e, {
					identifier: t.belongsTo
				}) : null);
				r || (null == t ? void 0 : t.belongsTo.type) !== n.a.PROFILE || (r = t.profile);
				const i = (null == t ? void 0 : t.belongsTo.type) === n.a.SUBREDDIT ? r : null,
					m = !(!s || (null == t ? void 0 : t.author) !== Object(c.e)(s)),
					p = Object(o.e)(o => ({
						currentUser: s,
						imageGalleryCurrentItem: Object(l.i)(o, {
							postId: e
						}),
						isModerator: !(!i || !o.moderatingSubreddits[i.name]),
						post: t,
						postId: e,
						subreddit: i,
						subredditOrProfile: r,
						userIsOp: m
					}));
				return Object(a.a)(p)
			}

			function f(e) {
				const {
					postId: t,
					children: s
				} = e, r = b(t);
				return i.a.createElement(p.Provider, {
					value: r
				}, s)
			}

			function h(e) {
				const t = e.displayName || e.name;

				function s(s) {
					return i.a.createElement(p.Consumer, null, r => {
						if (!r) throw new Error(`No Post context for <${t}/>!`);
						return i.a.createElement(e, m({}, s, r))
					})
				}
				return s.displayName = `PostContext(${t})`, s
			}

			function O(e) {
				const t = e.displayName || e.name;

				function s(t) {
					const s = b(t.postId);
					return i.a.createElement(p.Provider, {
						value: s
					}, i.a.createElement(e, m({}, t, s)))
				}
				return s.displayName = `PostProvider(${t})`, s
			}
			t.c = p
		},
		"./src/reddit/contexts/User/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			}));
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/reddit/hooks/useMemoShallowEqual.ts"),
				a = s("./src/reddit/reducers/user/prefs/index.ts"),
				d = s("./src/reddit/selectors/user.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const l = i.a.createContext({
				currentUser: null,
				modModeEnabled: !1,
				nightmodeEnabled: !1,
				prefs: a.a,
				isLoggedIn: !1
			});

			function u() {
				const e = Object(o.e)(e => ({
					currentUser: Object(d.m)(e),
					modModeEnabled: e.modModeEnabled,
					nightmodeEnabled: Object(d.fb)(e),
					prefs: e.user.prefs,
					isLoggedIn: Object(d.S)(e)
				}));
				return Object(n.a)(e)
			}

			function m(e) {
				return i.a.createElement(l.Provider, {
					value: u()
				}, e.children)
			}

			function p(e) {
				const t = e.displayName || e.name;

				function s(t) {
					return i.a.createElement(l.Consumer, null, s => i.a.createElement(e, c({}, t, s)))
				}
				return s.displayName = `UserContext(${t})`, s
			}
		},
		"./src/reddit/controls/ContentType/index.m.less": function(e, t, s) {
			e.exports = {
				contentTypeIcon: "_3CquMWJ6RMh8E9D-_84AtZ"
			}
		},
		"./src/reddit/controls/ContentType/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				n = s("./src/lib/constants/icons.ts"),
				a = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/constants/elementClassNames.ts"),
				c = s("./src/reddit/controls/ContentType/index.m.less"),
				l = s.n(c);
			const u = e => Object(o.a)(l.a.contentTypeIcon, e.className),
				m = {
					embed: n.a.embed,
					gallery: n.a.media_gallery,
					gifvideo: n.a.gif_post,
					image: n.a.image_post,
					meta: n.a.poll_post,
					rtjson: n.a.text_post,
					text: n.a.text_post,
					video: n.a.video_post,
					liveaudio: n.a.audio
				};

			function p(e) {
				const t = u(e),
					s = e.type && m[e.type] || n.a.link_post;
				return i.a.createElement(a.a, {
					name: s,
					className: Object(o.a)({
						[d.a]: s === n.a.link_post
					}, t)
				})
			}
		},
		"./src/reddit/controls/OutboundLink/styled.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/constants/elementClassNames.ts"),
				o = s("./src/reddit/controls/OutboundLink/index.tsx"),
				n = s("./src/reddit/controls/OutboundLink/styles.m.less"),
				a = s.n(n);
			t.a = r.a.wrapped(o.b, "styledOutboundLink", {
				styledOutboundLink: `${a.a.styledOutboundLink} ${i.l}`
			})
		},
		"./src/reddit/controls/OutboundLink/styles.m.less": function(e, t, s) {
			e.exports = {
				styledOutboundLink: "_13svhQIUZqD9PVzFcLwOKT"
			}
		},
		"./src/reddit/endpoints/me/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./src/config.ts"),
				i = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeApiRequest/index.ts"),
				n = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const a = e => Object(o.a)(e, {
				endpoint: Object(n.a)(`${r.a.gatewayUrl}/desktopapi/v1/me`),
				method: i.ob.GET
			})
		},
		"./src/reddit/endpoints/subreddit/subscriptions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			}));
			var r = s("./src/redditGQL/operations/SubscribedSubreddits.json"),
				i = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeApiRequest/index.ts"),
				n = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/lib/omitHeaders/index.ts"),
				d = s("./src/reddit/constants/headers.ts"),
				c = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			t.a = e => Object(n.a)(e, r);
			const l = (e, t) => {
					let {
						subredditIds: s,
						subredditNames: r,
						subscribe: n
					} = t;
					return Object(o.a)(Object(a.a)(e, [d.a]), {
						method: i.ob.POST,
						endpoint: Object(c.a)(`${e.apiUrl}/api/subscribe`),
						data: {
							action: n ? "sub" : "unsub",
							sr: s && s.join(",") || void 0,
							sr_name: r && r.join(",") || void 0,
							api_type: "json"
						}
					})
				},
				u = (e, t, s) => Object(o.a)(Object(a.a)(e, [d.a]), {
					method: i.ob.POST,
					endpoint: `${e.apiUrl}/api/favorite`,
					data: {
						make_favorite: s ? "true" : "false",
						sr_name: t,
						api_type: "json"
					}
				})
		},
		"./src/reddit/helpers/trackers/postFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "f", (function() {
				return l
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "e", (function() {
				return p
			}));
			var r = s("./src/reddit/helpers/correlationIdTracker.ts"),
				i = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				o = s("./src/reddit/selectors/telemetry.ts"),
				n = s("./src/reddit/helpers/flair.ts"),
				a = s("./src/reddit/helpers/search/searchImpressionId.ts");
			const d = (e, t) => s => {
					const n = `flair_name:'${t.postFlairName}'`;
					return {
						source: "post",
						action: "click",
						noun: "post_flair",
						...o.o(s),
						actionInfo: o.d(s),
						correlationId: Object(r.c)(r.a.SearchResults),
						post: o.K(s, e),
						search: {
							...o.O(s, t),
							query: n,
							queryId: o.fb(s, i.a.SERP),
							impressionId: a.a.get(i.a.SERP)
						},
						subreddit: o.lb(s)
					}
				},
				c = e => t => ({
					source: "post_flair_widget",
					action: "click",
					noun: "post_flair_search",
					...o.o(t),
					actionInfo: o.d(t),
					correlationId: Object(r.c)(r.a.SearchResults),
					search: o.O(t, e),
					subreddit: o.lb(t)
				}),
				l = e => t => {
					const s = Object(n.g)(e);
					return {
						...o.o(t),
						action: "click",
						noun: "post_flair",
						source: "post_flair_widget",
						subreddit: o.lb(t),
						postFlair: {
							id: e.templateId,
							title: s
						}
					}
				},
				u = () => e => ({
					...o.o(e),
					action: "click",
					noun: "overflow",
					source: "post_flair_widget",
					subreddit: o.lb(e)
				}),
				m = e => t => {
					const s = Object(n.g)(e);
					return {
						...o.o(t),
						action: "click",
						noun: "clear",
						source: "post_flair_widget",
						subreddit: o.lb(t),
						postFlair: {
							id: e.templateId,
							title: s
						}
					}
				},
				p = (e, t) => s => {
					const r = Object(n.g)(e),
						d = o.K(s, t),
						c = `flair_name:'${r}'`;
					return {
						...o.o(s),
						action: "click",
						noun: "post_flair",
						source: "post",
						subreddit: o.lb(s),
						postFlair: {
							id: e.templateId,
							title: r
						},
						post: d,
						search: {
							query: c,
							subredditId: d ? d.subredditId : void 0,
							subredditName: d ? d.subredditName : void 0,
							postFlairName: r,
							originElement: "post_flair",
							queryId: o.fb(s, i.a.SERP),
							impressionId: a.a.get(i.a.SERP),
							originPageType: s.platform.currentPage ? o.v(s.platform.currentPage) : void 0
						},
						feed: o.r(s)
					}
				}
		},
		"./src/reddit/hooks/useClickSourceData.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./node_modules/react/index.js"),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/helpers/clickSourceData/index.ts");

			function n() {
				const e = Object(i.e)(e => e.platform.currentPage),
					[t, s] = Object(r.useState)({});
				return Object(r.useEffect)(() => {
					s(Object(o.b)(e))
				}, [e]), t
			}
		},
		"./src/reddit/hooks/useLocale.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			}));
			var r = s("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				i = s("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				o = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/reddit/selectors/meta.ts");
			const a = "undefined" == typeof document ? function() {
				const e = Object(o.e)(n.k) || i.DEFAULT_LOCALE;
				return Object(r.isPseudoLocale)(e) ? i.DEFAULT_LOCALE : e
			} : function() {
				const e = document.documentElement.lang || i.DEFAULT_LOCALE;
				return Object(r.isPseudoLocale)(e) ? i.DEFAULT_LOCALE : e
			};
			t.a = a;
			const d = () => {
				const e = a(),
					t = Object(o.e)(n.b);
				return t ? e.replace(/([a-z]+-)([A-Z]+)/, `$1${t}`) : e
			}
		},
		"./src/reddit/hooks/useMemoShallowEqual.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./node_modules/react/index.js"),
				i = s("./node_modules/react-redux/es/index.js");

			function o(e) {
				const t = Object(r.useRef)(e);
				return t.current === e || Object(i.c)(t.current, e) || (t.current = e), t.current
			}
		},
		"./src/reddit/hooks/usePostContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./src/lib/sentry/index.ts"),
				i = s("./node_modules/react/index.js"),
				o = s("./src/reddit/contexts/Post/index.tsx");

			function n() {
				const e = Object(i.useContext)(o.c);
				return e || r.c.captureMessage("No post context provided"), e
			}
		},
		"./src/reddit/hooks/useUserContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./node_modules/react/index.js"),
				i = s("./src/reddit/contexts/User/index.tsx");

			function o() {
				return Object(r.useContext)(i.a)
			}
		},
		"./src/reddit/icons/fonts/OutboundLink/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => i.a.createElement("i", {
				className: `${Object(o.b)("external_link",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				i = s.n(r);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, i.a.createElement("g", null, i.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/reducers/user/prefs/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return q
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, i = s("./node_modules/lodash/isEqual.js"),
				o = s.n(i),
				n = s("./node_modules/lodash/merge.js"),
				a = s.n(n),
				d = s("./node_modules/lodash/pick.js"),
				c = s.n(d),
				l = s("./src/lib/constants/index.ts"),
				u = s("./src/reddit/actions/comment/constants.ts"),
				m = s("./src/reddit/actions/contentGate.ts"),
				p = s("./src/reddit/actions/frontpage/constants.ts"),
				b = s("./src/reddit/actions/header.ts"),
				f = s("./src/reddit/actions/modQueue/constants.ts"),
				h = s("./src/reddit/actions/pages/constants.ts"),
				O = s("./src/reddit/actions/pages/modListing/constants.ts"),
				g = s("./src/reddit/actions/pages/multireddit/constants.ts"),
				_ = s("./src/reddit/actions/pages/postCreation.ts"),
				y = s("./src/reddit/actions/pages/postDraft.ts"),
				j = s("./src/reddit/actions/pages/profileComments/constants.ts"),
				T = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				E = s("./src/reddit/actions/pages/profilePosts.ts"),
				S = s("./src/reddit/actions/pages/search/index.ts"),
				x = s("./src/reddit/actions/pages/subreddit/index.ts"),
				C = s("./src/reddit/actions/pages/topic.ts"),
				v = s("./src/reddit/actions/postCreation/constants.ts"),
				P = s("./src/reddit/actions/postDraft.ts"),
				I = s("./src/reddit/actions/preferences.ts"),
				w = s("./src/reddit/actions/redditEmbed.ts"),
				k = s("./src/reddit/actions/search.ts"),
				F = s("./src/reddit/actions/structuredStyles/constants.ts"),
				D = s("./src/reddit/actions/subreddit.ts"),
				A = s("./src/reddit/actions/users.ts"),
				L = s("./src/reddit/constants/postLayout.ts"),
				N = s("./src/reddit/constants/preferences.ts"),
				R = s("./src/reddit/constants/theme.ts"),
				M = s("./src/reddit/models/PostCreationForm/index.ts"),
				U = s("./src/reddit/models/PostDraft/index.ts"),
				V = s("./src/reddit/models/User/index.ts");
			! function(e) {
				e.Whitelisted = "whitelisted", e.Everyone = "everyone"
			}(r || (r = {}));
			const G = ["acceptPrivateMessages", "allowClickTracking", "autoplayVideo", "collapseReadMessages", "defaultCommentSort", "emailDigests", "emailUnreadMessages", "emailUnsubscribe", "enableFollowers", "feedRecommendationsEnabled", "geopopular", "hideAds", "hideFromRobots", "hideNSFW", "highlightComments", "ignoreSuggestedSort", "inBeta", "labelNSFW", "liveBarRecommendationsEnabled", "markMessagesRead", "nightmode", "over18", "sendWelcomeMessages", "showMessagesInInbox", "showNotifications", "showTwitter", "showUsernameMentionNotifications", "showActiveCommunities", "showPresence", ...N.a, "loginOtpEnabled"],
				q = {
					acceptPrivateMessages: void 0,
					activityRelevantAds: !0,
					allowClickTracking: !1,
					autoplayVideo: !0,
					collapsedTraySections: V.a,
					commentMode: M.i.RICH_TEXT,
					countryCode: "",
					badCommentAutocollapse: l.m.OFF,
					layout: L.d.Card,
					rememberCommunityLayout: !1,
					defaultCommentSort: l.v.CONFIDENCE,
					editorMode: M.i.RICH_TEXT,
					enableFollowers: !0,
					geopopular: void 0,
					globalTheme: R.a,
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
					searchOver18: !1,
					showActiveCommunities: !0,
					showPresence: !1,
					showTwitter: !1,
					sort: l.db.Hot,
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
					isContributorRequestTimestamp: 0,
					stylesEnabled: !0,
					layout: void 0,
					sort: void 0
				},
				H = (e, t) => {
					if (!t) return e;
					const s = c()({
							...t.account,
							...t
						}, G),
						r = t.subreddit,
						i = {
							...e.subreddit
						};
					Object.keys(r || {}).forEach(e => {
						i[e] = {
							...B,
							...r && r[e]
						}
					});
					const n = {
						...e,
						...s,
						subreddit: i
					};
					if (n.useMarkdown !== e.useMarkdown) {
						const e = n.useMarkdown ? M.i.MARKDOWN : M.i.RICH_TEXT;
						n.editorMode = e, n.commentMode = e
					}
					return o()(n, e) ? e : n
				},
				W = (e, t, s) => H(e, {
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
					case v.s:
					case v.R: {
						const {
							editorMode: s
						} = t.payload;
						return {
							...e,
							editorMode: s
						}
					}
					case b.d:
						return {
							...e, subscriptionsPinned: !0
						};
					case b.e:
						return {
							...e, subscriptionsPinned: !1
						};
					case P.g: {
						const {
							kind: s
						} = t.payload;
						return {
							...e,
							editorMode: s === U.b.Markdown ? M.i.MARKDOWN : M.i.RICH_TEXT
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
					case I.o: {
						const {
							layout: s,
							subredditId: r
						} = t.payload;
						return W(e, r, {
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
					case m.j:
						return {
							...e, over18: t.payload.over18
						};
					case k.h:
						return {
							...e, searchOver18: t.payload.searchOver18
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
					case m.i:
						return {
							...e, gatedSubredditOptIn: t.payload
						};
					case m.k:
						return {
							...e, quarantineOptIn: t.payload
						};
					case I.q:
						if (void 0 !== t.payload) {
							const {
								topContentDismissalTime: s,
								topContentTimesDismissed: r
							} = t.payload;
							return {
								...e,
								topContentDismissalTime: s,
								topContentTimesDismissed: r
							}
						}
						return e;
					case F.d:
						return t.payload.isNightmodeOn ? {
							...e,
							nightmode: !1,
							nightmodeTempUpdated: !0
						} : e;
					case F.e:
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
					case m.b:
					case m.c:
					case m.l:
					case m.m:
					case m.h:
					case m.a:
					case m.n:
					case O.e:
					case O.h:
					case h.a:
					case h.e:
					case h.b:
					case h.f:
					case h.d:
					case h.h:
					case p.c:
					case x.SUBREDDIT_LOADED:
					case g.b:
					case g.a:
					case j.e:
					case T.e:
					case T.b:
					case E.PROFILE_POSTS_LOADED:
					case p.g:
					case D.i:
					case k.e:
					case w.b:
					case _.PAGE_LOADED:
					case y.PAGE_LOADED:
					case I.j:
					case I.b:
					case S.c:
					case I.a:
					case A.c:
					case C.TOPIC_DATA_LOADED:
						return t.payload && t.payload.preferences ? H(e, t.payload.preferences) : e;
					case I.p: {
						const {
							subredditId: s,
							prefs: r
						} = t.payload;
						return W(e, s, r)
					}
					case j.d:
					case T.d:
					case T.a:
					case E.PROFILE_POSTS_FAILED: {
						let s = e;
						if (t.payload && t.payload.account) {
							const {
								nightmode: r,
								showPresence: i
							} = t.payload.account;
							e.nightmode !== r && (s = {
								...s,
								nightmode: r
							}), e.showPresence !== i && (s = {
								...s,
								showPresence: i
							})
						}
						return s
					}
					case f.h:
					case f.j:
					case f.i:
					case f.g:
					case f.f:
					case f.s:
					case f.r:
					case f.u:
					case f.v:
					case f.B:
					case f.A:
						return t.payload && t.payload.response && t.payload.response.preferences ? H(e, t.payload.preferences) : e;
					case I.n: {
						const s = t.payload,
							{
								enableFollowers: r,
								showActiveCommunities: i
							} = s.additional;
						let o = e;
						return e.enableFollowers !== r && (o = {
							...o,
							enableFollowers: r
						}), e.showActiveCommunities !== i && (o = {
							...o,
							showActiveCommunities: i
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
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				i = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/loadableAction/index.ts"),
				n = s("./src/reddit/routes/postCreation/constants.ts");
			const a = [n.b, n.c, n.a],
				d = Object(r.a)({
					resolved: {},
					chunkName: () => "PostCreation",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("vendors~PostCreation~Subreddit"), s.e("vendors~PostCreation"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), s.e("CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~PostCreation~~bca2b657"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), s.e("PostCreation")]).then(s.bind(null, "./src/reddit/pages/PostCreation/index.tsx")),
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
					return n.c.replace(/:subredditName/, e) + (t ? `?collection=${t}` : "")
				},
				u = e => n.a.replace(/:profileName/, e),
				m = {
					action: Object(o.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("vendors~PostCreation~Subreddit"), s.e("vendors~PostCreation"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), s.e("CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~PostCreation~~bca2b657"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), s.e("PostCreation")]).then(s.bind(null, "./src/reddit/actions/pages/postCreation.ts")).then(e => e.postCreationPageRequested)),
					component: d,
					chunk: i.t.POST_CREATION,
					exact: !0,
					meta: {
						name: i.Tb.POST_CREATION
					},
					path: a,
					prefetches: [i.t.COMMENTS_PAGE]
				};
			t.a = m
		},
		"./src/redditGQL/operations/ProfileFeed.json": function(e) {
			e.exports = JSON.parse('{"id":"e8d58a13151d"}')
		},
		"./src/redditGQL/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"ca83defc2e15"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compo~bd4baca2.f4946c0dea515a4cd275.js.map