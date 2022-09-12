// https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compo~bd4baca2.494b0b25a6bd054b2a42.js
// Retrieved at 9/12/2022, 12:00:04 PM by Reddit Dataminer v1.0.0
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
					e.UNKNOWN = "unknown", e.TITLE = "title", e.TOP_BAR = "top_bar", e.MEDIA = "media", e.BACKGROUND = "background", e.CTA_URL = "cta_url", e.CTA_BUTTON = "cta_button", e.CTA_WHITESPACE = "cta_whitespace", e.CTA_CAPTION = "cta_caption"
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
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
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
				const d = new Date(e * i.Vb);
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
					const s = Object(n.k)(t());
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
				return se
			})), s.d(t, "PROFILE_POSTS_LOADED", (function() {
				return re
			})), s.d(t, "PROFILE_POSTS_FAILED", (function() {
				return ie
			})), s.d(t, "profilePostsPending", (function() {
				return oe
			})), s.d(t, "profilePostsLoaded", (function() {
				return ne
			})), s.d(t, "profilePostsFailed", (function() {
				return ae
			})), s.d(t, "profilePostsRequested", (function() {
				return de
			})), s.d(t, "MORE_POSTS_PENDING", (function() {
				return ce
			})), s.d(t, "MORE_POSTS_LOADED", (function() {
				return le
			})), s.d(t, "MORE_POSTS_FAILED", (function() {
				return ue
			})), s.d(t, "morePostsPending", (function() {
				return me
			})), s.d(t, "morePostsLoaded", (function() {
				return pe
			})), s.d(t, "morePostsFailed", (function() {
				return be
			})), s.d(t, "morePostsRequested", (function() {
				return fe
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
				y = s("./src/redditGQL/operations/ProfileFeed.json");
			const j = async (e, t) => await Object(_.a)(e, {
				...y,
				variables: t
			}), T = e => {
				let {
					username: t,
					profileSort: s,
					filter: r,
					loadMoreData: i,
					shouldUseGqlCursor: o
				} = e;
				const n = {
					username: t,
					sort: s.toUpperCase(),
					filter: r
				};
				if (i) {
					const {
						token: e
					} = i;
					n.after = o ? e : btoa(e)
				}
				return n
			};
			var E = s("./src/config.ts"),
				S = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				C = s("./src/lib/constants/index.ts"),
				x = s("./src/lib/makeApiRequest/index.ts"),
				P = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				v = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const I = (e, t, s) => Object(x.a)(e, {
				data: s,
				endpoint: Object(P.a)(Object(S.a)(Object(v.a)(`${E.a.gatewayUrl}/desktopapi/v1/user/${t}/posts`))),
				method: C.mb.GET
			}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
				...e,
				body: {
					...e.body,
					pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
				}
			} : e);
			var w = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				k = s("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				F = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				D = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				A = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				L = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				N = s("./src/reddit/models/Post/index.ts");
			const R = (e, t) => {
				if (!Object(N.l)(t) && !Object(N.n)(t)) return null;
				if (e.posts[t.id]) return t.id;
				const s = Object(D.f)(t),
					{
						id: r
					} = s;
				e.posts[r] = s;
				const {
					crosspostRoot: i
				} = t;
				i && i.type === N.a.Post && i.postInfo && R(e, i.postInfo), s.isStickied && e.pinned.push(r);
				const {
					authorFlair: o
				} = t;
				if (o) {
					const t = s.belongsTo.id;
					e.authorFlair[t] || (e.authorFlair[t] = {}), e.authorFlair[t][s.author] = Object(k.a)(o)[0]
				}
				if (Object(N.l)(t)) {
					const {
						profile: s
					} = t;
					e.profiles[s.id] || (e.profiles[s.id] = Object(A.a)(s))
				} else if (Object(N.n)(t)) {
					const {
						subreddit: s
					} = t;
					e.subreddits[s.id] || (e.subreddits[s.id] = Object(L.a)(s)), e.postFlair[s.id] || (e.postFlair[s.id] = Object(F.a)(s))
				}
				return r
			};
			var M = s("./src/reddit/models/Comment/index.ts"),
				U = (e, t) => {
					var s;
					const r = {
							authorFlair: {},
							pinned: new Array,
							postIds: new Array,
							posts: {},
							postFlair: {},
							profiles: {},
							subreddits: {},
							token: ""
						},
						i = null === (s = null == e ? void 0 : e.redditorInfoByName) || void 0 === s ? void 0 : s.elements;
					if (!i) return r;
					const {
						edges: o
					} = i;
					for (const {
							node: n
						} of o) {
						if (!n || n.__typename === M.d.Comment) continue;
						const e = R(r, n);
						e && r.postIds.push(e)
					}
					if (t) r.token = i.pageInfo.endCursor || "";
					else {
						const {
							postIds: e
						} = r, t = e[e.length - 1];
						t && (r.token = t)
					}
					return r
				},
				V = s("./node_modules/@sentry/minimal/esm/index.js"),
				G = s("./node_modules/deep-diff/index.js"),
				q = s("./src/lib/env/index.ts");
			const B = new Set(["authorFlair.cssClass", "posts.adSupplementaryText", "posts.allAwardings", "posts.approvedAtUTC", "posts.approvedBy", "posts.attributionInfo", "posts.audioRoom", "posts.bannedAtUTC", "posts.bannedBy", "posts.collapsedBecauseCrowdControl", "posts.ignoreReports", "posts.isApproved", "posts.isAuthorPremium", "posts.isEligibleForLinkedPosts", "posts.isEligibleForQASchema", "posts.isFollowed", "posts.isPinned", "posts.isReactAllowed", "posts.isRemoved", "posts.isSpam", "posts.lastAuthorModNote", "posts.modQueueTriggers", "posts.modReportsDismissed", "posts.pollData", "posts.predictionTournament", "posts.previewComments", "posts.modReports", "posts.numReports", "posts.reactedFrom", "posts.removedBy", "posts.removedByCategory", "posts.topAwardedType", "posts.userReports", "posts.userReportsDismissed", "posts.modReasonBy", "subreddits.answerableQuestions", "subreddits.freeFormReports", "subreddits.isSubscribed", "authorFlair.richtext", "authorFlair.text", "posts.collectionIds", "posts.liveCommentsWebsocket", "posts.thumbnail.url", "posts.discussionType", "posts.eventsOnRender", "posts.flair", "posts.gildings", "posts.media", "posts.goldCount", "posts.sendReplies", "posts.score", "posts.sendReplies", "posts.source.url", "posts.source.outboundUrl", "posts.source.outboundUrlCreated", "posts.source.outboundUrlExpiration", "profiles.acceptFollowers", "profiles.communityIcon", "profiles.icon.url", "posts.upvoteRatio", "subreddits.acceptFollowers", "subreddits.allowChatPostCreation", "subreddits.communityIcon", "subreddits.icon.url", "subreddits.isChatPostFeatureEnabled", "subreddits.primaryColor", "subreddits.subscribers"]),
				W = (e, t) => {
					const s = {},
						r = {};
					Object.keys(e).forEach(i => {
						const o = e[i] || {},
							n = t[i] || {};
						s[i] = {}, r[i] = 0, Object.keys(o).forEach(e => {
							const t = o[e],
								a = n[e],
								d = Object(G.diff)(t, a, {
									prefilter: (e, t) => B.has(`${i}.${e.length?`${e.join(".")}.`:""}${t}`) || B.has(`${i}.${t}`),
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

			function $(e) {
				let {
					gatewayResponse: t,
					normalizedGqlResponse: s,
					rawGqlResponse: r
				} = e;
				if (Object(q.a)()) {
					console.group("GQL Profiles Shadowtest"), console.groupCollapsed("raw gql response"), console.log(r), console.groupEnd(), console.groupCollapsed("normalized gql response"), console.log(s), console.groupEnd(), console.groupCollapsed("gateway response"), console.log(t), console.groupEnd();
					const {
						allDiffs: e,
						issueCounts: i,
						totalIssues: o
					} = W(t, s);
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
				if (Object(q.b)()) {
					const {
						allDiffs: e,
						issueCounts: r,
						totalIssues: i
					} = W(t, s);
					if (i <= 0) return;
					V.l(t => {
						t.setExtra("info", {
							allDiffs: e,
							issueCounts: r,
							totalIssues: i
						}), t.setExtra("bypassSampling", !0), V.d("GQL Profiles Shadowtest Diff")
					})
				}
			}
			var H = s("./src/reddit/helpers/post/index.ts"),
				z = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				Q = s("./src/reddit/models/User/index.ts"),
				Y = s("./src/reddit/constants/experiments.ts"),
				J = s("./src/reddit/helpers/chooseVariant/index.ts");
			const K = e => {
					return Object(J.c)(e, {
						experimentEligibilitySelector: J.a,
						experimentName: Y.uc
					}) === Y.Jd
				},
				X = e => {
					return Object(J.c)(e, {
						experimentEligibilitySelector: J.a,
						experimentName: Y.vc
					}) === Y.Jd
				};
			var Z = s("./src/reddit/selectors/listings.ts"),
				ee = s("./src/reddit/selectors/profile.ts"),
				te = s("./src/redditGQL/types.ts");
			const se = "PAGE__PROFILE_POSTS_PENDING",
				re = "PAGE__PROFILE_POSTS_LOADED",
				ie = "PAGE__PROFILE_POSTS_FAILED",
				oe = Object(o.a)(se),
				ne = Object(o.a)(re),
				ae = Object(o.a)(ie),
				de = e => async (t, s, r) => {
					var o, _, y;
					const {
						queryParams: E,
						params: S
					} = e, {
						sort: C,
						t: x
					} = Object(u.b)(E), {
						profileName: P
					} = S, v = Object(n.a)(`u_${P}`, C, E), k = s(), F = Object(a.a)(k.listings.postOrder.ids, v), D = Object(Z.c)(k, {
						listingKey: v
					}), A = Object(Z.d)(k, {
						listingKey: v
					});
					if (await t(b.d(P)), A || F && !D) {
						if (F) {
							const e = Object(ee.r)(s(), {
								profileName: P
							});
							t(p.m({
								title: e
							}))
						}
						return
					}
					t(oe({
						key: v
					}));
					const L = X(k);
					let N, R, M;
					if (L) {
						const e = T({
							username: P,
							profileSort: C,
							filter: te.C.Posts,
							shouldUseGqlCursor: !0
						});
						R = null === (y = null === (_ = null === (o = null == (N = await Object(z.a)("profilePosts", () => j(r.gqlContext(), e))) ? void 0 : N.body) || void 0 === o ? void 0 : o.data) || void 0 === _ ? void 0 : _.redditorInfoByName) || void 0 === y ? void 0 : y.__typename
					} else {
						const t = {
							...i()(e.queryParams, [...O.k, ...O.j, O.g]),
							layout: Object(g.S)(k, {}).toLowerCase(),
							sort: C,
							t: Object(w.a)(C, x)
						};
						N = await Object(z.a)("profilePosts", () => I(r.apiContext(), P, t))
					}
					if (!N.ok || L && R !== Q.c.AvailableRedditor) return t(ae({
						account: !L && N.body.data ? N.body.data.account : null,
						error: N.body.reason ? {
							type: N.body.reason
						} : N.error,
						key: v
					})), N.body.reason === h.a.DeletedProfile || R === Q.c.DeletedRedditor ? t(Object(d.u)({
						profileName: P
					})) : R === Q.c.UnavailableRedditor ? t(Object(d.A)({
						profileName: P
					})) : L && !R && t(Object(d.o)({
						profileName: P
					})), void t(p.n(N.status));
					if (L) {
						const {
							data: e
						} = N.body;
						M = U(e, !0)
					} else M = N.body, await Object(H.a)(r.gqlContext, M.posts).then(e => M.posts = e);
					if (!L && K(k)) {
						const e = T({
								username: P,
								profileSort: C,
								filter: te.C.Posts
							}),
							t = await j(r.gqlContext(), e);
						if (t.ok && t.body) {
							const {
								data: e
							} = t.body, s = U(e);
							$({
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
						key: v,
						meta: s().meta,
						...M
					}));
					const V = Object(ee.n)(s(), P),
						{
							pinned: G
						} = M;
					t(Object(m.h)({
						profileId: V,
						pinned: G
					})), await Promise.all([t(Object(u.c)(P)), t(Object(f.q)()), t(Object(l.b)()), t(c.o(P))])
				}, ce = "PROFILE_POSTS__MORE_POSTS_PENDING", le = "PROFILE_POSTS__MORE_POSTS_LOADED", ue = "PROFILE_POSTS__MORE_POSTS_FAILED", me = Object(o.a)(ce), pe = Object(o.a)(le), be = Object(o.a)(ue), fe = () => async (e, t, s) => {
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
					} = l, f = Object(n.a)(`u_${b}`, m, c), h = Object(Z.g)(a, {
						listingKey: f
					});
					if (!h) return;
					const _ = Object(Z.d)(a, {
							listingKey: f
						}),
						y = Object(Z.e)(a, {
							listingKey: f,
							token: h.token
						});
					if (_ || y) return;
					e(me({
						key: f,
						fetchedToken: h.token
					}));
					const E = X(a);
					let S, C;
					if (E) {
						const e = T({
							username: b,
							profileSort: m,
							filter: te.C.Posts,
							loadMoreData: h,
							shouldUseGqlCursor: !0
						});
						S = await j(o(), e)
					} else {
						const e = {
							after: h.token,
							dist: h.dist,
							sort: m,
							t: p,
							...i()(c, O.k),
							layout: Object(g.S)(a, {}).toLowerCase()
						};
						S = await I(r(), b, e)
					}
					if (!S.ok) return void e(be({
						account: !E && S.body.data ? S.body.data.account : null,
						error: S.error,
						fetchedToken: h.token,
						key: f
					}));
					if (E) {
						const {
							data: e
						} = S.body;
						C = U(e, !0)
					} else C = S.body, await Object(H.a)(o, C.posts).then(e => C.posts = e);
					const x = a.listings.postOrder.ids[f],
						P = C.postIds || [],
						v = {
							...C,
							postIds: P.filter(e => !x || !x.includes(e))
						};
					if (K(a)) {
						const e = T({
								username: b,
								profileSort: m,
								filter: te.C.Posts,
								loadMoreData: h
							}),
							t = await j(o(), e);
						if (t.ok && t.body) {
							const {
								data: e
							} = t.body, s = U(e);
							$({
								gatewayResponse: {
									authorFlair: v.authorFlair,
									pinned: v.pinned,
									postIds: v.postIds,
									posts: v.posts,
									postFlair: v.postFlair,
									profiles: v.profiles,
									subreddits: v.subreddits,
									token: v.token
								},
								normalizedGqlResponse: s,
								rawGqlResponse: e
							})
						}
					}
					e(pe({
						fetchedToken: h.token,
						key: f,
						meta: a.meta,
						...v
					})), await e(Object(u.c)(b))
				}
		},
		"./src/reddit/actions/pinnedPost.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "h", (function() {
				return f
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "g", (function() {
				return O
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "f", (function() {
				return j
			})), s.d(t, "b", (function() {
				return S
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "i", (function() {
				return D
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/modal.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/constants/modals.ts"),
				c = s("./src/reddit/endpoints/post/index.tsx"),
				l = s("./src/reddit/models/Toast/index.ts"),
				u = s("./src/reddit/selectors/experiments/cnc/index.ts"),
				m = s("./src/reddit/selectors/posts.ts"),
				p = s("./src/reddit/selectors/profile.ts");
			const b = "PINNEDPOST__PINNED_POSTS_LOADED",
				f = Object(o.a)(b),
				h = "PINNEDPOST__PIN_POST_SUCCESS",
				O = "PINNEDPOST__UNPIN_POST_SUCCESS",
				g = Object(o.a)(h),
				_ = Object(o.a)(O),
				y = "PINNEDPOST__PIN_POST_PENDING",
				j = "PINNEDPOST__UNPIN_POST_PENDING",
				T = Object(o.a)(y),
				E = Object(o.a)(j),
				S = "PINNEDPOST__PIN_POST_FAILURE",
				C = "PINNEDPOST__UNPIN_POST_FAILURE",
				x = Object(o.a)(S),
				P = Object(o.a)(C),
				v = e => Object(a.f)({
					buttonAction: D(e, !0),
					buttonText: r.fbt._("UNDO", null, {
						hk: "1O9LWh"
					}),
					kind: l.b.SuccessMod,
					text: r.fbt._("Post pinned to profile!", null, {
						hk: "1hbHLt"
					})
				}),
				I = (e, t) => Object(a.f)({
					buttonAction: D(e, !0),
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
				w = () => Object(a.f)({
					kind: l.b.Error,
					text: r.fbt._("Could not pin post", null, {
						hk: "3uNHEh"
					})
				}),
				k = () => Object(a.f)({
					kind: l.b.Error,
					text: r.fbt._("You can't pin a removed post", null, {
						hk: "3bdn2y"
					})
				}),
				F = () => Object(a.f)({
					kind: l.b.Error,
					text: r.fbt._("Could not unpin post", null, {
						hk: "o8HG0"
					})
				}),
				D = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return async (s, r, o) => {
						let {
							apiContext: a,
							gqlContext: l
						} = o;
						const b = r(),
							f = b.posts.models[e];
						if (!f) return;
						const h = !Object(m.s)(b, {
							postId: e
						});
						if (h && f.isRemoved) return s(k());
						const O = f.author,
							y = Object(p.n)(b, O),
							[j, S, C, D, A] = h ? [T, g, x, v, w] : [E, _, P, I, F];
						if (h) {
							if (Object(m.P)(b, {
									profileName: O
								}).length >= i.fb) return void s(Object(n.i)(d.a.PINNED_POSTS_LIMIT_REACHED))
						}
						const L = Object(m.p)(b, e, O),
							N = !h && L;
						s(j({
							postId: e,
							profileId: y
						})), (Object(u.c)(b) ? await Object(c.j)(l(), e, h, !0) : await Object(c.v)(a(), e, h, !0)).ok ? (s(S({
							postId: e,
							profileId: y
						})), t || s(D(e, N))) : (s(C({
							postId: e,
							profileId: y
						})), s(A()))
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
				return C
			})), s.d(t, "c", (function() {
				return x
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
			const y = Object(a.a)(g.N),
				j = Object(a.a)(g.O),
				T = Object(a.a)(g.M),
				E = (e, t) => async (s, r, i) => {
					let {
						apiContext: n
					} = i, a = r();
					const {
						name: p,
						isProfile: b
					} = e, g = Object(h.e)(a), _ = g && !b && Object(u.a)(g.name, p), j = a.creations.api.subreddit.change.pending;
					if (_ || j) return;
					const T = Object(l.w)(t);
					if (!p) return void s(S(e, T));
					s(y(e));
					const E = b ? {
						profileName: p
					} : {
						subredditName: p
					};
					if (await s(Object(c.postCreationPageDataRequested)(E)), b || !Object(f.C)(a)) return s(S(e, T));
					const C = e.allowedPostTypes || Object(O.z)(r(), {
						subredditName: p
					});
					if (!C) return void s(S(e, T));
					let x;
					a = r();
					const P = Object(f.mb)(a),
						v = Object(f.C)(a);
					if (P === o.Zb.MEDIA && v) {
						const e = Object(f.W)(a),
							t = Object(m.x)(e),
							s = Object(f.N)(a) && e.items.length > 1,
							r = !t && !s;
						if (s && !C.galleries) x = m.q.GalleryWillBeRemovedGalleryNotAllowed;
						else if (r && !C.images) x = m.q.ImageWillBeRemoved;
						else if (t && !C.videos) {
							const t = a.uploads[e.items[0].uploadKey],
								s = t && t.metadata.videoDuration || 0;
							C.images ? s > o.jb && (x = m.q.VideoWillBeRemovedTooLongForGif) : x = m.q.VideoWillBeRemovedMediaNotAllowed
						}
					}
					s(x ? Object(d.i)(x) : S({
						...e,
						allowedPostTypes: C
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
				}, C = e => async (t, s) => {
					const o = s().platform.currentPage,
						n = o.queryParams,
						a = Object(i.a)(o.url, {
							...n,
							collection: e
						});
					t(Object(r.c)(a))
				}, x = () => async (e, t) => {
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
				return J
			})), s.d(t, "r", (function() {
				return K
			})), s.d(t, "g", (function() {
				return X
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
					if (t.subreddit_type === g.f.User) {
						const s = Object(h.a)(t, Object(b.h)(t.display_name_prefixed));
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
				C = s("./src/reddit/selectors/postCreations.ts"),
				x = s("./src/reddit/selectors/postDraft.ts"),
				P = s("./src/reddit/selectors/profile.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
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
					if (!Object(I.k)(o) || Object(x.b)(o)) return;
					e(D());
					const n = await (e => Object(l.a)(Object(u.a)(e, [p.a]), {
						endpoint: `${e.apiUrl}/api/v1/drafts.json`,
						method: r.mb.GET
					}))(i());
					n.ok ? e(A(_(n.body))) : e(L(n.error))
				}, R = "POST_DRAFT__SAVE_DRAFT_PENDING", M = "POST_DRAFT__SAVE_DRAFT_SUCCEEDED", U = "POST_DRAFT__SAVE_DRAFT_FAILED", V = "POST_DRAFT__SAVE_DRAFT_VALIDATION_FAILED", G = "POST_DRAFT__SAVE_DRAFT_SUBMIT_VALIDATION_FAILED", q = "POST_DRAFT__SAVE_DRAFT_CAPTCHA_REQUIRED", B = "POST_CREATION__TOGGLE_DRAFT_IS_PUBLIC", W = Object(o.a)(R), $ = Object(o.a)(M), H = Object(o.a)(U), z = Object(o.a)(V), Q = Object(o.a)(G), Y = Object(o.a)(q), J = Object(o.a)(B), K = e => async (t, s, o) => {
					let {
						apiContext: n
					} = o;
					const c = s(),
						m = Object(x.g)(c),
						b = Object(C.bb)(c);
					if (m || b) return;
					const f = Object(x.h)(c, e);
					if (!f) return;
					t(W(f)), T.g(c, f);
					const h = await ((e, t, s) => Object(l.a)(Object(u.a)(e, [p.a]), {
						endpoint: `${e.apiUrl}/api/v1/draft`,
						method: s ? r.mb.PUT : r.mb.POST,
						data: Object(y.a)(t)
					}).then(e => e.body.fields && Object(j.w)(e.body.fields[0]) ? {
						...e,
						body: {},
						error: {
							type: r.J.SUBMIT_VALIDATION_ERROR,
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
						t($({
							draftId: s,
							draftsCount: r
						})), e || t(Object(a.a)(f.destSubreddit, s, !1))
					} else {
						const e = h.error;
						e.type === r.J.BAD_CAPTCHA_ERROR ? t(Y()) : e.type === r.J.VALIDATION_ERROR ? t(z(e)) : e.type === r.J.SUBMIT_VALIDATION_ERROR ? t(Q(e)) : t(H(e)), t(Object(d.f)({
							duration: d.a,
							kind: E.b.Error,
							text: Object(i.a)(e)
						}))
					}
				}, X = "POST_DRAFT__LOAD_DRAFT", Z = Object(o.a)(X), ee = e => async (t, s, r) => {
					let {
						apiContext: i
					} = r;
					t(Z(e));
					let o = j.f;
					const n = s();
					if (e.subredditId) {
						const t = Object(v.V)(n, {
								subredditId: e.subredditId
							}),
							s = Object(P.q)(n, {
								profileId: e.subredditId
							}),
							r = Object(I.k)(n);
						t ? o = {
							isProfile: !1,
							name: t.name
						} : s && r && (o = {
							isProfile: !0,
							name: Object(S.e)(r)
						})
					}
					await t(Object(a.a)(o, e.id, !1));
					const d = Object(x.h)(s(), e.id);
					d && T.j(s(), d)
				}, te = "POST_DELETE_DRAFT_SUCCEEDED", se = "POST_DELETE_DRAFT_FAILED", re = "POST_DELETE_DRAFT_PENDING", ie = Object(o.a)(te), oe = Object(o.a)(se), ne = Object(o.a)(re), ae = (e, t) => async (s, o, a) => {
					let {
						apiContext: p
					} = a;
					const b = o();
					if (Object(x.a)(b, e)) return;
					const f = Object(x.d)(b, {
						draftId: e
					});
					f && T.h(b, f), s(ne({
						draftId: e
					}));
					const h = await (async (e, t) => Object(l.a)(Object(u.a)(e, [m.g]), {
						endpoint: `${e.apiUrl}/api/v1/draft?draft_id=${t}`,
						method: r.mb.DELETE
					}))(p(), e);
					if (h.ok) {
						const {
							draftsCount: r
						} = Object(y.c)(h.body);
						s(ie({
							draftId: e,
							draftsCount: r
						}));
						const i = Object(c.w)(t);
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
				return x
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
				C = Object(i.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				x = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				P = Object(i.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				v = Object(i.a)(x),
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
						a = Object(p.V)(n, {
							subredditId: e
						}).name;
					s(f());
					const c = await Object(d.k)(o(), a, t);
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
						a = Object(p.V)(n, {
							subredditId: e
						}).name;
					s(_());
					const c = await Object(d.j)(o(), t, l.d.LinkFlair, a);
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
						b = Object(p.V)(m, {
							subredditId: t
						}).name;
					s(E());
					const f = await Object(d.f)(c(), e, b, l.d.LinkFlair);
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
						s(C());
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
						l = Object(p.V)(c, {
							subredditId: t
						}).name;
					if (s(P()), (await Object(d.b)(n(), e, l)).ok) {
						s(v({
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
						f = Object(p.V)(c, {
							subredditId: t
						}).name;
					if (s(F({
							subredditId: t,
							templateIds: e
						})), (await Object(d.e)(n(), f, l.d.LinkFlair, e)).ok) {
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
						if (s && l.unshift(s), e(Object(o.S)({
								[t.id]: {
									flair: l
								}
							})), s) {
							const e = Object(c.g)(s);
							Object(d.h)(a(), t.id, r, e)
						} else Object(d.h)(a(), t.id, "", "")
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
				return x
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
							d = Object(g.V)(a, {
								subredditId: t
							});
						if (!d) return !1;
						e(Object(l.k)(i));
						const c = await (async (e, t, s, r, i, o) => Object(p.a)(Object(b.a)(e, [f.a]), {
							endpoint: `${e.apiUrl}/api/v1/${t}/flair_style_asset_upload_s3/${s}`,
							method: m.mb.POST,
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
					const C = Object(g.V)(u, {
						subredditId: e
					});
					if (!C) return !1;
					const x = u.structuredStyles.flairTemplate.models[t];
					if (x && n()(x, S)) return !0;
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
					let P = null,
						v = null;
					const I = [];
					try {
						(P = await Object(l.f)(u, O.a.FlairTemplates)) && (v = Object(l.m)(P)(r, o, a), I.push(...d()(P.imagesByKey)))
					} catch (D) {
						return !1
					}
					const w = await (async (e, t, s, r) => Object(p.a)(Object(b.a)(e, [f.a]), {
							endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${s}`,
							method: m.mb.PUT,
							data: r
						}))(c(), C.name, t, S),
						k = x ? "edit_post_flair_template" : "save_post_flair_template",
						F = Object(h.e)(u, k);
					if (w.ok) {
						let e;
						if (v) try {
							await v, e = ((e, t, s) => {
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
					} else P && P.websocket.close();
					return Object(_.a)({
						...F,
						actionInfo: {
							...F.actionInfo,
							success: w.ok
						}
					}), w.ok
				}, S = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", C = Object(c.a)(S), x = (e, t) => async (s, r, i) => {
					let {
						apiContext: o
					} = i;
					const n = r(),
						a = Object(g.V)(n, {
							subredditId: e
						});
					if (!a) return !1;
					const d = await (async (e, t, s) => Object(p.a)(Object(b.a)(e, [f.a]), {
							endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${s}`,
							method: m.mb.DELETE
						}))(o(), a.name, t),
						c = Object(h.e)(n, "delete_flair_template");
					return d.ok && s(C({
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
					e.platform.currentPage && e.platform.currentPage.routeMatch && e.platform.currentPage.routeMatch.route && e.platform.currentPage.routeMatch.route.meta && e.platform.currentPage.routeMatch.route.meta.name && e.platform.currentPage.routeMatch.route.meta.name === r.Qb.INBOX_PAGES && Object(d.g)(e)
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
				C = s("./src/reddit/selectors/user.ts");
			const x = () => r.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				P = Object(n.a)(c.c),
				v = Object(n.a)(c.b),
				I = Object(n.a)(c.a),
				w = Object(n.a)(c.h),
				k = (Object(n.a)(c.i), Object(n.a)(c.g), () => async (e, t, s) => {
					let {
						gqlContext: r
					} = s;
					const i = t();
					if (!i.user.account || i.subscriptions.api.fetched) return;
					e(v());
					const o = await Object(f.a)(r());
					if (o.ok) {
						const t = y(o.body.data);
						e(P(t))
					} else e(I({
						error: o.error
					}))
				}),
				F = (e, t) => t.type === u.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				D = (e, t, s) => async (n, c, m) => {
					let {
						apiContext: p
					} = m, b = e.map(e => e.type === u.a.SUBREDDIT ? {
						id: Object(E.G)(c(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(T.n)(c(), e.name),
						name: `${i.oc}${e.name}`,
						type: e.type
					});
					if (!Object(C.Q)(c())) return n(Object(d.k)({
						actionSource: d.a.Subscribe
					})), void n(Object(a.openRegisterModal)());
					const h = Object(C.k)(c());
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
						n = Object(E.N)(o, {
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
						_ = () => Object(E.hb)(s(), {
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
						text: x(),
						kind: j.b.Error
					}))))
				}, N = Object(n.a)(c.d), R = e => async (t, s, r) => {
					let {
						apiContext: o
					} = r;
					const n = s().multireddits.models,
						a = () => {
							t(Object(l.f)({
								text: x(),
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
						method: i.mb.POST,
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
					if (!Object(C.Q)(a)) return;
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
						method: i.mb.POST,
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
				C = e => "boolean" == typeof e.cumulative && e.cumulative,
				x = Object(a.c)({
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
				P = Object(m.a)(x);
			class v extends o.Component {
				constructor(e) {
					super(e), this.viewabilityStats = y(), this.videoStats = j(), this.pageInFocus = !0, this.inViewStats = [], this.outOfViewStats = [], this.handleViewabilityChange = e => {
						this.props.trackDisplay && this.handleThresholds(e, c.r), this.props.trackVideo && this.handleThresholds(e, c.p, !0), this.checkViewabilityByType(e)
					}, this.checkViewabilityByType = e => {
						if (i()(this.state.event, e) || this.setState({
								event: e
							}), this.props.trackDisplay) {
							const t = this.props.post.media && Object(b.E)(this.props.post.media);
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
						C(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), s && (l.d(e.id, c.p, !0), this.videoStats.forEach(e => {
						C(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
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
					if (C(t) && t.event === p.a.VideoVendorFullyViewable50 && this.addDurationBasedViewabilityMinimum(t), e && e.target && this.adjustThreshold(e, t), t.threshold && void 0 !== t.viewabilityMinimum) {
						if (this.isAdequatelyInView(e, t.threshold) && !t.fired) {
							if (t.timer) return;
							const e = this.getLengthForTimer(t);
							return e > 0 ? this.initTimer(t, e) : this.fireStat(t), void(t.timeViewingInitialized = Date.now())
						}
						C(t) && t.cumulative && this.pauseCumulativeStats(t), this.clearTimer(t)
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
			t.a = P(v)
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
			s.d(t, "c", (function() {
				return V
			})), s.d(t, "a", (function() {
				return G
			})), s.d(t, "b", (function() {
				return $
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
				C = s("./src/reddit/models/Flair/index.ts"),
				x = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				P = s("./src/reddit/components/Flair/index.m.less"),
				v = s.n(P);

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
				k = p.a.div("FlairWrapper", v.a),
				F = p.a.wrapped(c.a, "CloseButton", v.a),
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
				}), "FlairEmojiDisplay", v.a),
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
						[j.p]: r,
						[j.s]: t ? "1" : ""
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
							[v.a.transparentBackgroundColor]: "transparent" === this.props.backgroundColor
						}),
						onMouseEnter: this.props.tooltip ? this.onShowTooltip : void 0,
						onMouseLeave: this.props.tooltip ? this.onHideTooltip : void 0,
						ref: this.setTooltipTargetRef,
						style: {
							backgroundColor: this.props.backgroundColor || Object(x.a)(this.props).flair,
							color: `${V(this.props)}`
						}
					}, this.props.text, this.props.isSelected && d.a.createElement(F, {
						to: "./",
						onClick: this.props.onCloseClick
					}, d.a.createElement(S.a, {
						className: v.a.CloseIcon,
						style: {
							fill: this.props.backgroundColor || Object(x.a)(this.props).flair
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
						if (r.e === C.c.Emoji) {
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
							[v.a.transparentBackgroundColor]: "transparent" === e.backgroundColor
						}),
						style: {
							...i,
							backgroundColor: e.backgroundColor || Object(x.a)(e).flair,
							color: `${V(e)}`
						}
					}, r, e.isSelected && d.a.createElement(F, {
						to: "./",
						onClick: e.onCloseClick
					}, d.a.createElement(S.a, {
						className: v.a.CloseIcon,
						style: {
							fill: e.backgroundColor || Object(x.a)(e).flair
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
				V = e => !e.textColor || e.textColor && !e.backgroundColor ? Object(x.a)(e).postFlairText : "transparent" === e.backgroundColor ? Object(E.a)(Object(x.a)(e).post, y.a.black, y.a.white) : e.textColor === C.e.Dark ? y.a.black : y.a.white,
				G = p.a.wrapped(M, "TextFlair", v.a),
				q = p.a.wrapped(U, "RichTextFlair", v.a),
				B = e => {
					switch (e.type) {
						case "spoiler":
							return "#A4A7A8";
						case "nsfw":
							return "#FF585B";
						default:
							return Object(n.i)(.1, Object(x.a)(o()(e, "theme", "redditStyle", "data-redditstyle")).button)
					}
				},
				W = p.a.wrapped(e => {
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
				}, "MetaFlair", v.a);

			function $(e) {
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
					[v.a.flairVariant]: o,
					[v.a.small]: o && !e.large,
					[v.a.large]: o && e.large
				}, t);
				switch (i.type) {
					case C.f.Richtext:
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
					case C.f.Text:
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
					case C.f.Meta:
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
					case C.f.Nsfw:
					case C.f.Spoiler:
						return d.a.createElement(W, {
							className: t,
							text: i.text,
							type: i.type
						});
					case C.f.Quarantined:
						return null;
					case C.f.Oc:
						return d.a.createElement(G, {
							backgroundColor: y.a.alienblue,
							text: i.text,
							textColor: C.e.Light,
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
					labelNSFW: m.ab
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
						return n.a.createElement(c.b, {
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
						return Object(m.q)(e, {
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
						return Object(O.V)(e, {
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
						rightFlair: C
					} = Object(l.a)({
						flair: E,
						isFlairPositionedLeft: T
					}),
					x = a ? _.a.flairNoWrap : S.length > 0 || C.length > 0 ? _.a.flairWrapper : null,
					P = e => {
						const t = {
							id: m.belongsTo.id,
							eventType: m.belongsTo.type,
							originElement: "post_flair",
							postFlairName: e
						};
						Object(p.d)(p.a.SearchResults), h && h(Object(b.a)(m.id, t))
					},
					v = e => {
						Object(p.d)(p.a.SearchResults), h && h(Object(b.e)(e, m.id))
					},
					I = !(s || !E || !E.length);
				return I ? o.a.createElement("div", {
					className: Object(d.a)(x, t),
					"data-ignore-click": y
				}, I && S && o.a.createElement(c.a, {
					className: _.a.flairList,
					isFlairFilter: i,
					key: "leftFlair",
					onClick: P,
					onMouseDown: v,
					flair: S,
					disabled: !n,
					subredditName: O
				}), I && o.a.createElement(c.a, {
					className: _.a.flairList,
					isFlairFilter: i,
					key: "rightFlair",
					onClick: P,
					onMouseDown: v,
					flair: C,
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
		"./src/reddit/components/HumanDate/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return a
			})), s.d(t, "a", (function() {
				return d.a
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "c", (function() {
				return h
			}));
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./src/lib/timeAgo/index.ts"),
				n = s("./src/reddit/hooks/useLocale.ts");
			var a = function(e) {
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
				},
				d = s("./src/reddit/components/HumanDate/HumanDate.tsx"),
				c = s("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				l = s("./src/lib/constants/index.ts");
			var u = function(e) {
					let {
						seconds: t,
						locale: s
					} = e;
					const r = Object(n.a)(),
						o = null != s ? s : r;
					return i.a.createElement(i.a.Fragment, null, function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.DEFAULT_LOCALE;
						const s = e * l.Vb;
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
					}(t, o))
				},
				m = s("./node_modules/fbt/lib/FbtPublic.js"),
				p = s("./src/lib/eventTools/index.ts");

			function b(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.DEFAULT_LOCALE;
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function f(e, t) {
				let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c.DEFAULT_LOCALE;
				const i = Object(p.e)(e, t),
					o = new Date(e * l.Vb);
				let n;
				if (i === p.a.Live || s) return m.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return i === p.a.Future ? n = Object(p.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(p.b)(e) >= 5 ? b(o, r) : function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.DEFAULT_LOCALE;
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(o, r) : i === p.a.Past && (n = Object(p.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : b(o, r)), `${n} @ ${function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.DEFAULT_LOCALE;return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(o,r)}`
			}
			var h = function(e) {
				let {
					startTime: t,
					endTime: s,
					isLive: r,
					locale: o
				} = e;
				const a = Object(n.a)(),
					d = null != o ? o : a;
				return i.a.createElement(i.a.Fragment, null, f(t, s, r, d))
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
			s.d(t, "b", (function() {
				return F
			}));
			var r = s("./src/lib/isUrl/index.ts"),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				l = s("./src/reddit/components/ImageWithFallback/index.tsx"),
				u = s("./src/reddit/controls/ContentType/index.tsx"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				p = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				b = s("./src/reddit/models/Media/index.ts"),
				f = s("./src/reddit/models/Theme/index.ts"),
				h = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				O = s("./src/telemetry/models/Outbound.ts"),
				g = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				_ = s("./src/reddit/components/Thumbnail/index.m.less"),
				y = s.n(_);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const T = e => e.placeholderImage || Object(h.a)(e).placeholderImage,
				E = e => e.placeholderImage ? "cover" : Object(h.a)(e).placeholderImagePosition,
				S = d.a.span("LinkText", y.a),
				C = e => {
					let {
						className: t,
						onClick: s,
						children: r
					} = e;
					return o.a.createElement("div", {
						onClick: s,
						className: Object(n.a)(y.a.linkIcon, t)
					}, r)
				},
				x = e => o.a.createElement("img", {
					alt: e.alt,
					className: Object(n.a)(y.a.hiddenImage, e.className)
				}),
				P = e => {
					const t = o.a.createRef(),
						{
							src: s,
							errorSrc: r
						} = e;
					return s && r && Object(l.a)(s).catch(() => {
						t.current && (t.current.style.backgroundImage = `url(${r})`)
					}), o.a.createElement("div", {
						"aria-label": e.alt,
						className: Object(n.a)(y.a.thumbnail, y.a.imageThumbnail, e.className),
						"data-click-id": "image",
						"data-adclicklocation": g.a.MEDIA,
						ref: t,
						role: "img",
						style: {
							backgroundImage: `url(${e.src})`,
							borderColor: e.isOutbound ? Object(h.a)(e).button : Object(h.a)(e).line
						}
					}, e.isOutbound && o.a.createElement(C, {
						className: e.linkIconClassName
					}, o.a.createElement(p.a, {
						className: Object(n.a)(y.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && o.a.createElement(S, {
						className: e.linkTextClassName
					}, e.text)), o.a.createElement(x, {
						alt: e.alt,
						className: "hiddenImg"
					}))
				},
				v = e => e.isOutbound ? Object(h.a)(e).button : e.placeholderImage ? "transparent" : Object(h.a)(e).line,
				I = e => {
					const t = T(e),
						s = t && {
							background: Object(f.g)(Object(h.a)(e).placeholder, t, E(e))
						};
					return o.a.createElement("div", {
						className: Object(n.a)(y.a.thumbnail, y.a.placeholderThumbnail, e.className),
						"data-click-id": "image",
						style: {
							...s,
							borderColor: v(e)
						}
					}, (!e.placeholderImage || e.showContentType) && o.a.createElement(u.a, {
						className: Object(n.a)(e.contentTypeClassName, y.a.contentType, {
							[y.a.hasType]: e.type && !e.isOutbound
						}),
						type: e.isMeta || e.isPoll ? "meta" : e.type
					}), e.isOutbound && o.a.createElement(C, {
						className: e.linkIconClassName
					}, o.a.createElement(p.a, {
						className: Object(n.a)(y.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && o.a.createElement(S, {
						className: e.linkTextClassName
					}, e.text)))
				},
				w = e => o.a.createElement(P, j({}, e, {
					className: Object(n.a)(y.a.blurredThumbnail, e.className)
				})),
				k = Object(a.a)(e => {
					const {
						className: t,
						containerClassName: s,
						contentTypeClassName: i,
						crosspost: a,
						forceShowNSFW: d,
						isCommentsPage: c,
						isMeta: l,
						linkIconClassName: u,
						linkTextClassName: p,
						outboundLinkIconClassName: f,
						post: h,
						redditStyle: g,
						removeLink: _,
						showContentType: j,
						templatePlaceholderImage: E,
						text: S,
						theme: C,
						usePreview: x
					} = e, P = !C.subredditContext.shouldShowNSFWContent && (h.isNSFW || !(!a || !a.isNSFW)) && !d, v = T({
						placeholderImage: E,
						redditStyle: g,
						theme: C
					}), I = F(e), w = c ? O.SourceElement.PostImage : O.SourceElement.ListingPostImage, k = A(h, t, v, P, S, C, I, l, j, _, g, u, p, f, i), D = Object(b.D)(h);
					return Object(r.a)(D) && !_ && D.indexOf("redditmedia") < 0 ? o.a.createElement("div", {
						className: Object(n.a)(y.a.container, x ? y.a.usePreview : "", s)
					}, o.a.createElement(m.b, {
						href: Object(b.D)(h),
						isSponsored: h.isSponsored,
						postId: h.id,
						source: h.source,
						sourceElement: w
					}, k)) : o.a.createElement("div", {
						className: Object(n.a)(y.a.container, x ? y.a.usePreview : "", s)
					}, k)
				}),
				F = e => {
					let {
						crosspost: t,
						post: s,
						url: r,
						usePreview: i
					} = e;
					if (r) return r;
					const {
						preview: o,
						media: n,
						thumbnail: a
					} = t || s;
					return i && o ? o.url : s.isSponsored && o && "default" === a.url ? o.url : D(n) ? n.scrubberThumbSource : a.url
				},
				D = e => !!e && e.type === b.o.LIVEVIDEO,
				A = (e, t, s, i, a, d, l, u, m, p, b, f, h, O, g) => {
					const _ = (e => e.source && !e.isSponsored || !1)(e);
					if (Object(r.a)(l)) {
						const s = D(e.media),
							r = s ? {
								errorSrc: c.U
							} : {},
							u = Object(n.a)(t, {
								[y.a.verticallyCenterThumbnail]: s
							});
						return i ? o.a.createElement(w, j({
							"data-click-id": "image",
							src: l
						}, r, {
							className: u,
							isOutbound: _ && !p,
							linkIconClassName: f,
							linkTextClassName: h,
							outboundLinkIconClassName: O,
							redditStyle: b,
							text: a,
							theme: d
						})) : o.a.createElement(P, j({
							alt: e.title,
							className: u,
							src: l
						}, r, {
							isOutbound: _ && !p,
							linkIconClassName: f,
							linkTextClassName: h,
							outboundLinkIconClassName: O,
							redditStyle: b,
							text: a,
							theme: d
						}))
					}
					return o.a.createElement(I, {
						className: t,
						contentTypeClassName: g,
						placeholderImage: s,
						isMeta: u,
						isOutbound: _ && !p,
						linkIconClassName: f,
						linkTextClassName: h,
						outboundLinkIconClassName: O,
						redditStyle: b,
						showContentType: m,
						text: a,
						theme: d,
						type: e.media ? e.media.type : null,
						isPoll: !!e.pollData
					})
				};
			t.a = k
		},
		"./src/reddit/connectors/PostViewable/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/actions/post.ts");
			t.a = (e, t) => Object(r.b)(e, function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return {
					...e,
					onPostViewable: i.Q
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
				const t = Object(o.e)(t => Object(l.G)(t, {
						postId: e
					})),
					{
						currentUser: s
					} = Object(d.a)(),
					r = Object(o.e)(e => t ? Object(u.N)(e, {
						identifier: t.belongsTo
					}) : null),
					i = (null == t ? void 0 : t.belongsTo.type) === n.a.SUBREDDIT ? r : null,
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
					currentUser: Object(d.k)(e),
					modModeEnabled: e.modModeEnabled,
					nightmodeEnabled: Object(d.db)(e),
					prefs: e.user.prefs,
					isLoggedIn: Object(d.Q)(e)
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
					rpan: n.a.video_live,
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
				method: i.mb.GET
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
						method: i.mb.POST,
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
					method: i.mb.POST,
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
						...o.n(s),
						actionInfo: o.d(s),
						correlationId: Object(r.c)(r.a.SearchResults),
						post: o.J(s, e),
						search: {
							...o.N(s, t),
							query: n,
							queryId: o.cb(s, i.a.SERP),
							impressionId: a.a.get(i.a.SERP)
						},
						subreddit: o.ib(s)
					}
				},
				c = e => t => ({
					source: "post_flair_widget",
					action: "click",
					noun: "post_flair_search",
					...o.n(t),
					actionInfo: o.d(t),
					correlationId: Object(r.c)(r.a.SearchResults),
					search: o.N(t, e),
					subreddit: o.ib(t)
				}),
				l = e => t => {
					const s = Object(n.g)(e);
					return {
						...o.n(t),
						action: "click",
						noun: "post_flair",
						source: "post_flair_widget",
						subreddit: o.ib(t),
						postFlair: {
							id: e.templateId,
							title: s
						}
					}
				},
				u = () => e => ({
					...o.n(e),
					action: "click",
					noun: "overflow",
					source: "post_flair_widget",
					subreddit: o.ib(e)
				}),
				m = e => t => {
					const s = Object(n.g)(e);
					return {
						...o.n(t),
						action: "click",
						noun: "clear",
						source: "post_flair_widget",
						subreddit: o.ib(t),
						postFlair: {
							id: e.templateId,
							title: s
						}
					}
				},
				p = (e, t) => s => {
					const r = Object(n.g)(e),
						d = o.J(s, t),
						c = `flair_name:'${r}'`;
					return {
						...o.n(s),
						action: "click",
						noun: "post_flair",
						source: "post",
						subreddit: o.ib(s),
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
							queryId: o.cb(s, i.a.SERP),
							impressionId: a.a.get(i.a.SERP),
							originPageType: s.platform.currentPage ? o.u(s.platform.currentPage) : void 0
						},
						feed: o.q(s)
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
				const e = Object(o.e)(n.j) || i.DEFAULT_LOCALE;
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
				C = s("./src/reddit/actions/pages/subreddit.ts"),
				x = s("./src/reddit/actions/pages/topic.ts"),
				P = s("./src/reddit/actions/postCreation/constants.ts"),
				v = s("./src/reddit/actions/postDraft.ts"),
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
					defaultCommentSort: l.u.CONFIDENCE,
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
					rpanDuDismissalTime: void 0,
					showActiveCommunities: !0,
					showPresence: !1,
					showRpanDu: !0,
					showTwitter: !1,
					sort: l.bb.Hot,
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
				W = (e, t) => {
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
				$ = (e, t, s) => W(e, {
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
					case P.s:
					case P.Q: {
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
					case v.g: {
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
					case I.o:
						return void 0 !== t.payload ? {
							...e,
							rpanDuDismissalTime: t.payload
						} : e;
					case I.p: {
						const {
							layout: s,
							subredditId: r
						} = t.payload;
						return $(e, r, {
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
					case m.i:
						return {
							...e, gatedSubredditOptIn: t.payload
						};
					case m.k:
						return {
							...e, quarantineOptIn: t.payload
						};
					case I.r:
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
					case C.SUBREDDIT_LOADED:
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
					case x.TOPIC_DATA_LOADED:
						return t.payload && t.payload.preferences ? W(e, t.payload.preferences) : e;
					case I.q: {
						const {
							subredditId: s,
							prefs: r
						} = t.payload;
						return $(e, s, r)
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
					case f.n:
					case f.m:
					case f.p:
					case f.q:
					case f.w:
					case f.v:
						return t.payload && t.payload.response && t.payload.response.preferences ? W(e, t.payload.preferences) : e;
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
					return n.c.replace(/:subredditName/, e) + (t ? `?collection=${t}` : "")
				},
				u = e => n.a.replace(/:profileName/, e),
				m = {
					action: Object(o.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("vendors~PostCreation~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), s.e("PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~4c415e24"), s.e("PostCreation")]).then(s.bind(null, "./src/reddit/actions/pages/postCreation.ts")).then(e => e.postCreationPageRequested)),
					component: d,
					chunk: i.s.POST_CREATION,
					exact: !0,
					meta: {
						name: i.Qb.POST_CREATION
					},
					path: a,
					prefetches: [i.s.COMMENTS_PAGE]
				};
			t.a = m
		},
		"./src/redditGQL/operations/ProfileFeed.json": function(e) {
			e.exports = JSON.parse('{"id":"3d3a59368119"}')
		},
		"./src/redditGQL/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"13af47cf5fb3"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compo~bd4baca2.494b0b25a6bd054b2a42.js.map