// https://www.redditstatic.com/desktop2x/SearchResults.1981d92723785e976f38.js
// Retrieved at 10/27/2022, 1:50:11 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SearchResults"], {
		"./node_modules/lodash/_baseDelay.js": function(e, t) {
			var s = "Expected a function";
			e.exports = function(e, t, n) {
				if ("function" != typeof e) throw new TypeError(s);
				return setTimeout((function() {
					e.apply(void 0, n)
				}), t)
			}
		},
		"./node_modules/lodash/defer.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseDelay.js"),
				r = s("./node_modules/lodash/_baseRest.js")((function(e, t) {
					return n(e, 1, t)
				}));
			e.exports = r
		},
		"./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/reddit/selectors/experiments/devPlatform.ts");
			const c = Object(i.a)({
				resolved: {},
				chunkName: () => "devPlatform-components-ContextActions",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("vendors~devPlatform-components-AdminPanel-Utilities-DevPlatformConfig~devPlatform-components-ContextActions"), s.e("devPlatform-components-ContextActions")]).then(s.bind(null, "./src/devPlatform/components/ContextActions/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/devPlatform/components/ContextActions/index.tsx"
				}
			}, {
				ssr: !1
			});

			function d(e) {
				return Object(o.e)(e => Object(a.a)(e)) ? r.a.createElement(c, {
					contextType: e.contextType,
					contextData: e.contextData,
					moderator: e.moderator
				}) : null
			}
		},
		"./src/devPlatform/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			}));
			const n = "devvit-gateway-url",
				r = "devvit-mock-metadata",
				o = "devvit-debug-logging",
				i = "DEV_PLAT__OPEN_USER_INPUT_MODAL";
			var a;
			! function(e) {
				e[e.POST = 0] = "POST", e[e.COMMENT = 1] = "COMMENT", e[e.SUBREDDIT = 2] = "SUBREDDIT", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
			}(a || (a = {}))
		},
		"./src/higherOrderComponents/withAdClickLocation/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/telemetry.ts");
			const a = e => (e, t, s) => ({
				...i.o(e),
				source: "post",
				action: "click",
				noun: "ad",
				adClick: {
					location: t
				},
				actionInfo: i.d(e),
				adblock: i.e(e),
				app: i.f(e),
				feed: i.r(e),
				geo: i.t(e),
				platform: i.I(e),
				referrer: i.Z(e),
				request: i.ab(e),
				screen: i.cb(e),
				session: i.gb(e),
				user: i.sb(e),
				media: s ? i.C(e, s) : null,
				post: s ? i.K(e, s) : null
			});
			var c = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				d = s("./src/telemetry/index.ts");
			const l = new Set;

			function m(e) {
				function t(t) {
					const s = Object(o.f)().getState(),
						{
							post: n
						} = {
							...t
						};
					return n && n.isSponsored ? r.a.createElement("div", {
						onClickCapture: function(e, n) {
							var r, o;
							if (l.has(e.timeStamp)) return;
							l.add(e.timeStamp);
							const i = function(e) {
								if (e.dataset.adclicklocation) return e.dataset.adclicklocation;
								const t = e.closest(".PostContainer, [data-adclicklocation]");
								return t ? t.dataset.adclicklocation : c.a.UNKNOWN
							}(e.target);
							i && (! function(e, t) {
								return Object.values(t).some(t => t === e)
							}(i, c.b) ? Object(d.a)(a(n)(s, i, null === (o = t.post) || void 0 === o ? void 0 : o.postId)) : Object(d.a)(a(n)(s, c.a.UNKNOWN, null === (r = t.post) || void 0 === r ? void 0 : r.postId)))
						}
					}, r.a.createElement(e, t)) : r.a.createElement(e, t)
				}
				const s = e.name || e.displayName;
				return t.displayName = `WithAdClickLocation(${s})`, t
			}
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			}));
			const n = e => {
					let t = 0,
						s = 0;
					const n = [0];
					for (const r of e) t++, s += r.length, n[t] = s;
					return n
				},
				r = e => {
					let t = 0,
						s = 0;
					const n = [];
					for (const r of e) {
						for (let e = 0; e < r.length; e++) n[s] = t, s++;
						t++
					}
					return n[s] = t, n
				}
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return k
			})), s.d(t, "b", (function() {
				return I
			}));
			var n, r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/performanceTimings/index.tsx"),
				i = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(n || (n = {}));
			var d, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				m = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var u = s("./src/lib/objectSelector/index.ts"),
				p = s("./src/reddit/featureFlags/index.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/subreddit.ts"),
				x = s("./src/reddit/selectors/user.ts");
			const f = [],
				O = (Object(u.a)((e, t) => {
					const s = O(e, t);
					if (!s) return f;
					const n = Object(h.cb)(e, {
						subredditName: s.name
					});
					return n && n.postIds && n.postIds.length ? n.postIds : f
				}), (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(h.Y)(e, {
						subredditId: s
					}) : null
				}),
				g = (e, t, s, n, r) => {
					const o = r.find(e => e <= t) || -1,
						i = r.find(e => e > t) || 1 / 0;
					return t !== i && t !== o && (!(o + s > t) && (!(t + s > i) && !((e, t, s) => {
						const n = s[t - 1],
							r = s[t],
							o = r && Object(b.G)(e, {
								postId: n
							}) || null,
							i = r && Object(b.G)(e, {
								postId: r
							}) || null;
						return o && o.isSponsored || i && i.isSponsored
					})(e, t, n)))
				},
				v = [3];
			Object(u.a)((e, t) => {
				let {
					existingDUPositions: s,
					listingProps: n
				} = t;
				const r = s.slice().sort();
				let o = -1;
				const i = Object(b.z)(e, {
						listingKey: n.listingKey
					}),
					a = [];
				return v.forEach(t => {
					let s = o + t;
					if (!(s >= i.length)) {
						for (; s < i.length && !g(e, s, t, i, r);) s += 1;
						s < i.length && (a.push(s), o = s)
					}
				}), a
			});
			var j = s("./src/reddit/selectors/platform.ts");
			const C = Object(r.a)(i.f),
				y = Object(r.a)(i.d),
				E = Object(r.a)(i.g),
				_ = Object(r.a)(i.c),
				k = Object(r.a)(i.e),
				S = (Object(r.a)(i.i), Object(r.a)(i.h), () => async (e, t, s) => {
					let {
						gqlContext: r
					} = s;
					const o = t(),
						i = (e => {
							return e.focusedVerticals.api.pending.focusedVerticalGqlPending
						})(o),
						d = (e => {
							const t = Object(x.Q)(e),
								s = p.d.geoSubredditRecommendationDULoggedIn(e),
								n = p.d.geoSubredditRecommendationDULoggedOut(e);
							return t && s || !t && n
						})(o),
						u = Object(x.Q)(o);
					if (i || !d) return;
					e(E());
					let b = !1;
					try {
						const t = u ? n.LoggedInGeo : n.LoggedOutGeo,
							s = await ((e, t, s) => Object(a.a)(e, {
								...c,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(r(), t);
						if (s.ok && s.body) {
							const {
								data: t
							} = s.body;
							if (w(t)) {
								if (N(t)) {
									e(_({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), b = !0
								} else if (T(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: n,
											interactedSubreddit: r,
											category: o
										} = s.focusRecommendations[0],
										i = [n, r],
										a = Object(m.d)(i),
										c = Object(l.b)(i),
										d = Object(m.c)(n),
										u = {
											recommendedSubredditIds: [n.id],
											interactedSubredditIds: [r.id],
											subreddits: a,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: o,
											lastLoadedEnv: "client"
										};
									e(C(u)), b = !0
								}
							} else b = !1
						}
					} catch (h) {
						b = !1
					}
					b || e(y({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}),
				w = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				},
				N = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				},
				T = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						n = t && t.type;
					return !!(s && !N(e) && n === d.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				},
				I = () => async (e, t, s) => {
					var n, r;
					const i = t(),
						a = (e => e.focusedVerticals.lastLoadedEnv)(i);
					if ((e => {
							return e.focusedVerticals.api.error.focusedVerticalGqlError
						})(i) || null === a || "client" === a) {
						const s = null === (r = null === (n = Object(j.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							a = Object(x.R)(i);
						return Object(o.i)(() => e(S()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(k({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/pages/search/searchResultsRequested.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "searchResultsRequested", (function() {
				return b
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/pick.js"),
				o = s.n(r),
				i = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/makeSearchKey/index.ts"),
				c = s("./src/lib/pageTitle/index.ts"),
				d = s("./src/reddit/actions/pages/search/index.ts"),
				l = s("./src/reddit/actions/platform.ts"),
				m = s("./src/reddit/constants/parameters.ts"),
				u = s("./src/reddit/models/Multireddit/index.ts");
			const p = e => n.fbt._("reddit.com: search results - {query}", [n.fbt._param("query", e || "None")], {
					hk: "1XOKAg"
				}),
				b = e => async (t, s) => {
					const n = s(),
						r = Object(a.e)(o()(e.queryParams, m.C)),
						{
							multiredditName: b,
							subredditName: h,
							username: x
						} = e.params;
					let f;
					x && b && (f = Object(u.h)(x, b));
					const O = Object(a.b)(h || b, x, r);
					await t(Object(d.d)(O, r, h, x, f));
					let g = !1;
					const {
						type: v = []
					} = r, j = v.indexOf(i.ic.Posts) > -1, C = v.indexOf(i.ic.Users) > -1, y = v.indexOf(i.ic.Subreddits) > -1;
					j && n.listings.postOrder.api.error[O] && (g = !0), C && n.listings.authorOrder.api.error[O] && (g = !0), y && n.listings.communityOrder.api.error[O] && (g = !0), t(g ? l.m({
						title: Object(c.f)()
					}) : l.m({
						title: p(r.q)
					}))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return u
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "f", (function() {
				return E
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/query-string/index.js"),
				r = s.n(n),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				c = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				d = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				l = s("./src/reddit/selectors/subreddit.ts");
			const m = new Set(["home", "r/popular"]),
				u = e => {
					const t = location && location.search || "",
						s = r.a.parse(t);
					m.has(e) && (s.related = e);
					const n = r.a.stringify(s);
					return n ? `?${n}` : ""
				},
				p = Object(o.a)(i.N),
				b = Object(o.a)(i.y),
				h = Object(o.a)(i.O),
				x = Object(o.a)(i.z),
				f = Object(o.a)(i.M),
				O = Object(o.a)(i.L),
				g = Object(o.a)(i.t),
				v = Object(o.a)(i.u),
				j = e => async (t, s, n) => {
					let {
						gqlContext: r
					} = n;
					const o = Object(c.g)(e),
						i = s();
					if (Object(d.d)(i, o)) return;
					t(p(o));
					const l = await Object(a.e)(r(), o),
						m = Date.now();
					if (l.ok && l.body && l.body.data) {
						const e = l.body.data;
						t(b({
							model: e,
							utcTimeStamp: m
						}))
					} else t(k({
						streamId: o,
						error: l.error,
						utcTimeStamp: m
					}))
				}, C = (e, t) => async (s, n) => s(y(e, t)), y = (e, t) => async (s, n, r) => {
					let {
						gqlContext: o
					} = r;
					const i = n();
					if (Object(d.f)(i)) return;
					s(h());
					const c = await Object(a.f)(o(), e, t),
						l = Date.now();
					if (c.ok && c.body && c.body.data) {
						const t = c.body.data;
						s(x({
							listingName: e,
							models: t,
							utcTimeStamp: l
						}))
					} else s(S({
						error: c.error,
						utcTimeStamp: l
					}))
				}, E = (e, t) => async (s, n) => s(_(e, t)), _ = (e, t) => async (s, n, r) => {
					let {
						gqlContext: o
					} = r;
					const i = n();
					if (Object(d.f)(i)) return;
					s(h());
					const c = Date.now(),
						m = e.replace("r/", ""),
						u = Object(l.I)(i, m),
						p = await Object(a.b)(o(), {
							subredditId: u,
							options: t
						}),
						b = p.body;
					p.ok && b && b.data || s(S({
						error: p.error,
						utcTimeStamp: c
					}));
					const f = b.data.liveVideoFeed.posts.edges.map(e => (async (e, t) => {
							const s = await Object(a.e)(e, t),
								n = Date.now(),
								r = s.body;
							return r && r.data ? r.data : void k({
								streamId: t,
								error: s.error,
								utcTimeStamp: n
							})
						})(o(), e.node.id)),
						O = (await Promise.all(f)).filter(e => void 0 !== typeof e);
					s(x({
						listingName: e,
						models: O,
						utcTimeStamp: c
					}))
				}, k = e => async t => {
					t(f(e))
				}, S = e => async t => {
					t(O(e))
				}
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/loadableAction/index.ts");
			const r = Object(n.a)(() => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				o = Object(n.a)(() => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				i = Object(n.a)(() => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/actions/subreddit/muting.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return k
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "e", (function() {
				return N
			})), s.d(t, "g", (function() {
				return T
			})), s.d(t, "a", (function() {
				return I
			})), s.d(t, "f", (function() {
				return P
			})), s.d(t, "b", (function() {
				return R
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/toaster.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/redditGQL/operations/DeleteSubredditMuteSettings.json"),
				c = s("./src/redditGQL/operations/MutedSubreddits.json"),
				d = s("./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json"),
				l = s("./src/redditGQL/operations/UpdateSubredditMuteSettings.json");
			const m = (e, t) => Object(i.a)(e, {
					...l,
					variables: {
						input: {
							subredditId: t
						}
					}
				}),
				u = (e, t) => Object(i.a)(e, {
					...a,
					variables: {
						input: {
							subredditId: t
						}
					}
				});
			var p = s("./src/reddit/models/Toast/index.ts"),
				b = s("./src/reddit/actions/subreddit/constants.ts"),
				h = s("./src/reddit/actions/subreddit/notifications.ts"),
				x = s("./src/reddit/selectors/subreddit.ts");
			const f = e => Object(o.f)({
					id: e,
					kind: p.b.Error,
					duration: o.a,
					text: n.fbt._("An error has occured. Please try again later", null, {
						hk: "2FpsLy"
					})
				}),
				O = (e, t) => Object(o.f)({
					kind: p.b.SuccessCommunityGreen,
					text: n.fbt._("Muted r/{subreddit name}", [n.fbt._param("subreddit name", e)], {
						hk: "Mg9mO"
					}),
					...t ? {
						buttonText: n.fbt._("Undo", null, {
							hk: "2siioQ"
						}),
						buttonAction: t
					} : {}
				}),
				g = (e, t) => Object(o.f)({
					kind: p.b.SuccessCommunityGreen,
					text: n.fbt._("Unmuted r/{subreddit name}", [n.fbt._param("subreddit name", e)], {
						hk: "Fhnht"
					}),
					...t ? {
						buttonText: n.fbt._("Undo", null, {
							hk: "2siioQ"
						}),
						buttonAction: t
					} : {}
				});
			var v = s("./src/reddit/endpoints/subreddit/about.ts");
			const j = Object(r.a)(b.i),
				C = Object(r.a)(b.h),
				y = Object(r.a)(b.G),
				E = (Object(r.a)(b.j), Object(r.a)(b.F), Object(r.a)(b.g)),
				_ = Object(r.a)(b.f),
				k = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, r, o) => {
						let {
							gqlContext: i
						} = o;
						if ((await m(i(), t)).ok) n && n(), O(s, S({
							subredditId: t,
							subredditName: s
						}));
						else {
							e(f(`error-muting-${t}`))
						}
					}
				},
				S = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, r, o) => {
						let {
							gqlContext: i
						} = o;
						if ((await u(i(), t)).ok) n && n(), g(s, k({
							subredditId: t,
							subredditName: s
						}));
						else {
							e(f(`error-muting-${t}`))
						}
					}
				},
				w = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, r, o) => {
						let {
							gqlContext: i
						} = o;
						if ((await m(i(), t)).ok) n && n(), e(Object(h.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !0
								}
							}
						})), e(O(s, N({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(f(`error-muting-${t}`))
						}
					}
				},
				N = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, r, o) => {
						let {
							gqlContext: i
						} = o;
						if ((await u(i(), t)).ok) n && n(), e(Object(h.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !1
								}
							}
						})), e(g(s, w({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(f(`error-muting-${t}`))
						}
					}
				},
				T = e => {
					let {
						subredditId: t,
						notificationLevel: s
					} = e;
					return async (e, r, a) => {
						let {
							gqlContext: c
						} = a;
						const l = Object(h.a)(s);
						(await ((e, t, s) => Object(i.a)(e, {
							...d,
							variables: {
								input: {
									...s,
									subredditId: t
								}
							}
						}))(c(), t, l)).ok ? (e(y({
							subredditId: t,
							notificationLevel: s
						})), e(Object(o.f)({
							kind: p.b.SuccessCommunityGreen,
							text: Object(h.b)(s)
						}))) : e(Object(o.f)({
							kind: p.b.Error,
							text: n.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
								hk: "4avFFV"
							})
						}))
					}
				},
				I = () => async (e, t, s) => {
					let {
						gqlContext: r
					} = s;
					const a = await (e => Object(i.a)(e, c))(r());
					if (a.ok && a.body && a.body.data) {
						const {
							data: t
						} = a.body, s = (t && t.identity.mutedSubreddits).edges.map(e => e.node);
						e(j({
							nodes: s
						}))
					} else e(C()), e(Object(o.f)({
						duration: o.a,
						kind: p.b.Error,
						text: n.fbt._("Failed to get muted subreddits, please try again.", null, {
							hk: "2dCj3Q"
						})
					}))
				}, P = e => {
					let {
						subredditId: t,
						subredditName: s
					} = e;
					return async (e, n, r) => {
						let {
							gqlContext: o
						} = r;
						const i = await u(o(), t),
							{
								data: a
							} = i.body;
						if (i.ok && a.deleteSubredditMuteSettings.ok) e(E(t)), e(g(s));
						else {
							e(f(`error-unmuting-${t}`))
						}
					}
				}, R = e => {
					let {
						subredditName: t
					} = e;
					return async (e, s, r) => {
						let {
							gqlContext: i
						} = r;
						const a = s(),
							c = Object(x.t)(a).find(e => e.name.toLowerCase() === t.toLowerCase());
						if (c) {
							const t = c.name,
								s = `error-muting-duplicate-${t}`;
							return e(Object(o.f)({
								id: s,
								kind: p.b.Error,
								duration: o.a,
								text: n.fbt._("Sorry, r/{subreddit name} is already muted.", [n.fbt._param("subreddit name", t)], {
									hk: "4n64wl"
								})
							}))
						}
						const d = await Object(v.a)(i(), t, !0),
							{
								data: l
							} = d.body,
							u = l && l.subreddit;
						if (!d.ok || null === u) {
							return e(((e, t) => Object(o.f)({
								id: e,
								kind: p.b.Error,
								duration: o.a,
								text: n.fbt._("Sorry, r/{subreddit name} isn't a community.", [n.fbt._param("subreddit name", t)], {
									hk: "3UtglL"
								})
							}))(`error-muting-${t}`, t))
						}
						const b = u.id,
							h = await m(i(), b),
							{
								data: g
							} = h.body;
						if (h.ok && g.updateSubredditMuteSettings.ok) e(_([u])), e(O(u.name));
						else {
							e(f(`error-muting-${b}`))
						}
					}
				}
		},
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return u
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "d", (function() {
				return f
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				i = s("./src/reddit/actions/notificationsInbox/index.ts"),
				a = s("./src/reddit/actions/subreddit/constants.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = s("./src/reddit/models/Subreddit/index.ts"),
				m = s("./src/reddit/models/Toast/index.ts");
			const u = Object(r.a)(a.z),
				p = Object(r.a)(a.y),
				b = Object(r.a)(a.x),
				h = e => {
					switch (e) {
						case l.c.FREQUENT:
							return {
								isSubredditUpdatesInterestingPostEnabled: !0, isUpdateFromSubredditEnabled: !0
							};
						case l.c.LOW:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !0
							};
						case l.c.OFF:
						default:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !1
							}
					}
				},
				x = e => {
					switch (e) {
						case l.c.OFF:
							return n.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case l.c.FREQUENT:
							return n.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case l.c.LOW:
							return n.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
								hk: "4x3TS8"
							});
						default:
							return null
					}
				};
			const f = e => {
				let {
					subredditId: t,
					notificationLevel: s,
					successCallback: r,
					undoCallback: a
				} = e;
				return async (e, l, f) => {
					let {
						gqlContext: O
					} = f;
					var g, v, j;
					e(p());
					const C = h(s),
						y = await Object(d.b)(O(), t, C);
					if ((null === (v = null === (g = y.error) || void 0 === g ? void 0 : g.fields) || void 0 === v ? void 0 : v.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(y.body) && (null === (j = y.body.data.updateSubredditNotificationSettings.errors) || void 0 === j ? void 0 : j.length)) return e(b()), e(Object(c.f)({
						kind: m.b.Error,
						text: n.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					y.ok && (e(Object(o.c)({
						subredditId: t,
						notificationLevel: s
					})), e(u({
						subredditAboutInfo: {
							[t]: {
								notificationLevel: s
							}
						}
					})), r && r(), e(a ? Object(c.f)(Object(c.e)(x(s), m.b.Undo, n.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(i.i)(t, a))) : Object(c.f)(Object(c.e)(x(s), m.b.SuccessCommunityGreen))))
				}
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				ctaExperiment: "_3JgLF82C_0NM3uN8pOyJTu",
				borders: "_3LUqJuEsn44ivYFDMegLQG",
				borderTop: "_2n1stnecLcYB2e1RjBwSq_",
				borderBottom: "_2EVJbBkxJortsXpkuVWaPA"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				a = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = function(e) {
				const {
					className: t,
					ctaExperimentDesign: s,
					children: n,
					...a
				} = e, l = Object(o.a)(c.a.adLinkWrapper, t, {
					[c.a.ctaExperiment]: !!s,
					[c.a.borders]: "classic" === s,
					[c.a.borderTop]: "compact" === s || "conversation" === s,
					[c.a.borderBottom]: "card" === s
				});
				return r.a.createElement("div", d({
					className: l,
					"data-adclicklocation": i.a.CTA_WHITESPACE
				}, a), n)
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				bananaPill: "_2GJIRTOkmAXwBwD8gnpjoC",
				transform: "EUsCIvjLoHDQUlMif6rU3",
				icon: "hf82tIE9hVksLDPq4aS4W",
				text: "_3iPvcis9xcmXbF66ZaOGLu",
				altText: "-kJjcqwGv75MM1ykroFtu",
				bouncing: "_2ytFCvT-cA8CdwGKbaK3jG"
			}
		},
		"./src/reddit/components/BackToTop/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/config.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/timeAgo/index.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/elementIds.ts"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/localStorage/index.ts"),
				b = s("./src/reddit/selectors/telemetry.ts");
			var h = s("./src/reddit/constants/experiments.ts"),
				x = s("./src/reddit/helpers/chooseVariant/index.ts");
			const f = e => {
				return Object(x.c)(e, {
					experimentEligibilitySelector: x.a,
					experimentName: h.xf
				}) === h.Sd
			};
			var O = s("./src/reddit/selectors/recapGame.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/BackToTop/index.m.less"),
				j = s.n(v);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), y = e => {
				if (e) {
					const e = document.getElementById(m.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: s,
					style: m
				} = e;
				const h = Object(l.b)(),
					x = Object(r.useRef)(null),
					[v, E] = Object(r.useState)(!1),
					[_, k] = Object(r.useState)(),
					[S, w] = Object(r.useState)(),
					[N, T] = Object(r.useState)(0),
					I = Object(i.e)(g.l),
					P = Object(i.e)(f),
					R = Object(i.e)(g.R),
					M = Object(i.e)(O.a),
					L = encodeURIComponent(a.a.redditUrl + "/r/recap"),
					F = a.a.accountManagerOrigin,
					B = R ? "/r/recap" : `${F}/login/?dest=${L}`,
					A = I ? I.id : "anonymous",
					D = "on" === M.recapGameState,
					U = () => {
						v && w(setTimeout(() => {
							x.current && (x.current.classList.add(j.a.transform), x.current.style.width = `${N}px`)
						}, 4750)), v && k(setTimeout(() => {
							E(!1), Object(p.Rb)(A, !1)
						}, 5e3))
					};
				Object(r.useEffect)(() => {
					D || setTimeout(() => {
						const e = Object(p.N)(A);
						e ? Object(d.e)(e.lastSeenTime) >= 24 && e.dropSkip === p.a.NONE ? E(!0) : Date.now() >= new Date(2022, 10, 2).getTime() && e.dropSkip !== p.a.SECOND && E(!0) : E(!0)
					})
				}, [A, D]);
				const H = Object(r.useCallback)(e => {
					if (e) {
						const t = e.clientWidth;
						T(t + 32)
					}
				}, []);
				return o.a.createElement("div", {
					className: Object(c.a)(t, j.a.container),
					style: m
				}, v && P && !s && !D ? o.a.createElement("a", {
					ref: x,
					href: B,
					className: j.a.bananaPill,
					onMouseEnter: () => {
						_ && clearTimeout(_), S && clearTimeout(S), x.current && (x.current.classList.remove(j.a.transform), x.current.style.width = "65px")
					},
					onMouseLeave: U,
					onClick: () => {
						_ && clearTimeout(_), S && clearTimeout(S), E(!1), Object(p.Rb)(A, !0), h((() => e => ({
							source: "recap",
							action: "click",
							noun: "feed_banana",
							...b.o(e)
						}))())
					}
				}, o.a.createElement("img", {
					className: j.a.icon,
					src: `${a.a.assetPath}/img/recap/banana_pill.png`,
					alt: C._("banana", null, {
						hk: "1fs9mn"
					})
				}), o.a.createElement("span", {
					className: j.a.text
				}, "+1"), C._("{=Back to Top}", [C._param("=Back to Top", o.a.createElement("span", {
					ref: H,
					className: j.a.altText
				}, C._("Back to Top", null, {
					hk: "4BTAZ0"
				})))], {
					hk: "4Foziy"
				}), o.a.createElement(n.a, {
					onChange: e => {
						e.isIntersecting && (U(), h((() => e => ({
							source: "recap",
							action: "view",
							noun: "feed_banana",
							...b.o(e)
						}))()))
					},
					rootMargin: "0px 0px 0px 0px",
					threshold: .5
				}, o.a.createElement("div", null))) : o.a.createElement(u.a, {
					className: j.a.button,
					onClick: () => y(s)
				}, C._("Back to Top", null, {
					hk: "YjBtV"
				})))
			}
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				ctaExperiment: "O3tUaKrd54EXILNilEqF_",
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/OutboundLink/index.tsx"),
				a = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				c = s("./src/reddit/components/CallToActionButton/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					showCTAExperiment: s,
					...n
				} = e;
				return r.a.createElement(i.b, l({
					className: Object(o.a)(d.a.CallToActionButton, t, {
						[d.a.mNotCardView]: n.isNotCardView,
						[d.a.ctaExperiment]: !!s
					}),
					"data-adclicklocation": a.a.CTA_BUTTON
				}, n))
			}
		},
		"./src/reddit/components/CommentCreation/Loader.m.less": function(e, t, s) {
			e.exports = {
				spacer: "_25blA2uobENRg70NGewwpP",
				isTopLevelComment: "_1chAIcRfDnelKBQkWMIXfl",
				isCommentBoxDesign: "_2mGbbSC1nHodWNoj5NJEYY",
				editor: "_3NuRqPrgRBPdjWunXX3Q8E",
				byline: "_1KZHWcRRAqnSYcyX8FzWOK",
				avatar: "_2gYdPXSssI0f1R9BPp9qsd"
			}
		},
		"./src/reddit/components/CommentCreation/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/RichTextEditor/Placeholder.tsx"),
				d = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/selectors/experiments/commentBox.ts"),
				m = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/components/CommentCreation/Loader.m.less"),
				p = s.n(u);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const h = "bottom",
				x = Object(a.c)({
					isCommentBoxDesignEnabled: l.a
				}),
				f = Object(i.b)(x),
				O = e => {
					let {
						isCommentBoxDesignEnabled: t,
						isTopLevelComment: s,
						children: n
					} = e;
					return o.a.createElement("div", {
						className: Object(m.a)(p.a.spacer, {
							[p.a.isCommentBoxDesign]: t,
							[p.a.isTopLevelComment]: s
						})
					}, n)
				},
				g = () => o.a.createElement("div", {
					className: Object(m.a)(p.a.byline, Object(d.a)({
						isLoading: !0
					}))
				}),
				v = () => o.a.createElement("div", {
					className: Object(m.a)(p.a.avatar, Object(d.a)({
						isLoading: !0
					}))
				}),
				j = e => o.a.createElement(O, e, e.isCommentBoxDesignEnabled ? o.a.createElement(v, null) : o.a.createElement(g, null), o.a.createElement(c.a, {
					className: p.a.editor,
					isCommentBoxDesignEnabled: e.isCommentBoxDesignEnabled,
					isLoading: !0,
					toolbarPosition: h
				})),
				C = f(j),
				y = Object(n.a)({
					resolved: {},
					chunkName: () => "RichTextEditor",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/CommentCreation/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/CommentCreation/index.tsx"
					}
				}, {
					ssr: !1
				}),
				E = e => o.a.createElement(y, b({}, e, {
					fallback: o.a.createElement(C, {
						isTopLevelComment: e.isTopLevelComment
					})
				}));
			t.a = E
		},
		"./src/reddit/components/Comments/Comment/ExpandButton/index.m.less": function(e, t, s) {
			e.exports = {
				expandButton: "_2Gzh48SaLz7dQBCULfOC6V",
				expandIcon: "_1tnrhhM9S7dYjApTfvd14l"
			}
		},
		"./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less": function(e, t, s) {
			e.exports = {
				depth6: "SwOx7KbRrXYrqQCWMYPf0",
				isModModeEnabled: "_2hXOR2fIcfnUg0p-Env7KQ",
				LoggedInUserGroup: "_14hLFU5cIJCyxH9DSgsCov",
				loggedInUserGroup: "_14hLFU5cIJCyxH9DSgsCov",
				HideIfVWSmaller: "_2hr3tRWszeMRQ0u_Whs7t8",
				hideIfVwSmaller: "_2hr3tRWszeMRQ0u_Whs7t8",
				HideIfVWLarger: "_1YnPvd-E5MbmcM3PvRRcX",
				hideIfVwLarger: "_1YnPvd-E5MbmcM3PvRRcX",
				isFollowCommentEnabled: "_3rHRwVOKmBBlBOQ4kIW_vq",
				ModeratorGroup: "_1CUkbmFVuU6wklfYeYwPFk",
				moderatorGroup: "_1CUkbmFVuU6wklfYeYwPFk",
				depth9: "_2EcU45Nj3OvIEdu169RlLK",
				depth10: "_2sxg06qfN6lCskrSU7pyoj",
				depth0: "_2t8wLytikHzPCUnvXdS_wu",
				depth3: "_2Ik7QEXtA-lbZKj0ssL89G",
				isInOverlay: "FOPddbU-vkQ5LYmQP6Fgc"
			}
		},
		"./src/reddit/components/Comments/Comment/Flatlist/index.m.less": function(e, t, s) {
			e.exports = {
				ModActionsMenu: "_3IuprPPEDVWAHB_tWQFgad",
				modActionsMenu: "_3IuprPPEDVWAHB_tWQFgad",
				ViewReportsDropdown: "_1JwG70oEVxaFNeRI-8q_bd",
				viewReportsDropdown: "_1JwG70oEVxaFNeRI-8q_bd",
				IgnoreReport: "_1QhRdH9FgEwuJIYiBlnog8",
				ignoreReport: "_1QhRdH9FgEwuJIYiBlnog8",
				Report: "tfULaYlP83dV84XOxX3YE",
				report: "tfULaYlP83dV84XOxX3YE",
				OverflowMenuSpacer: "hrV8gUgmt0V7wM2wgZ81l",
				overflowMenuSpacer: "hrV8gUgmt0V7wM2wgZ81l",
				DropdownRow: "uoWjzSc1sqcAD_cLV6MWa",
				dropdownRow: "uoWjzSc1sqcAD_cLV6MWa",
				Flatlist: "_1LXnp2ufrzN6ioaTLTjGQ1",
				flatlist: "_1LXnp2ufrzN6ioaTLTjGQ1",
				CommentIcon: "_1g4YvNNIFoV_5_EhsVfyRy",
				commentIcon: "_1g4YvNNIFoV_5_EhsVfyRy",
				Button: "_374Hkkigy4E4srsI2WktEd",
				button: "_374Hkkigy4E4srsI2WktEd",
				ModToolsFlatlist: "_2sGRD7t2kAbCLKrZ6UjoMW",
				modToolsFlatlist: "_2sGRD7t2kAbCLKrZ6UjoMW",
				dropdownRowText: "_3my60CXALAaQkY4P4xVmad",
				overflowMenu: "_1VR6DV38j4rMT5OMeU4gJZ"
			}
		},
		"./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less": function(e, t, s) {
			e.exports = {
				glowHighlightContainer: "_3VH2iGVh92XtlKq0-eVoEN"
			}
		},
		"./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less": function(e, t, s) {
			e.exports = {
				gradientHighlightContainer: "TmlaIdEplCzZ0F1aRGYQh"
			}
		},
		"./src/reddit/components/Comments/Comment/HighlightEffect/index.m.less": function(e, t, s) {
			e.exports = {
				effectContainer: "_15G4fCS1bzGgGK9kBOtN2t",
				bubbleEffectContainer: "_3rhkMikNPUTfnVDvk-6EFo",
				lottieEffectContainer: "_28x1bnTjOY6zWZfooCxkKQ"
			}
		},
		"./src/reddit/components/Comments/Comment/HighlightEffect/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var n, r = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				c = s("./src/reddit/components/LottieAnimation/index.tsx"),
				d = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.m.less"),
				l = s.n(d);
			! function(e) {
				e.Lottie = "lottie"
			}(n || (n = {}));
			const m = {
				threshold: [.75, .001]
			};
			t.b = i.a.memo(e => {
				const t = Object(o.useRef)(null),
					[s, d] = Object(o.useState)(!1),
					u = Object(o.useCallback)(e => {
						e.forEach(e => {
							const {
								intersectionRatio: t
							} = e;
							t >= .75 && d(!1), t <= .001 && d(!0)
						})
					}, []);
				Object(a.a)(t, u, m);
				const p = e.type;
				return i.a.createElement("div", {
					className: Object(r.a)(l.a.effectContainer, l.a[p + "EffectContainer"]),
					ref: t,
					role: "presentation"
				}, p === n.Lottie && i.a.createElement(c.a, {
					assetUrl: e.assetUrl,
					prefersReducedAnimation: e.prefersReducedAnimation,
					hidden: s
				}))
			})
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				o = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				i = s.n(o);
			const a = n.a.wrapped(r.c, "RestrictedButton", i.a);
			t.a = a
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				RestrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				restrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				Show: "YoaDbMbI8PpFFWQbD_Uwq",
				show: "YoaDbMbI8PpFFWQbD_Uwq",
				CommentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk",
				commentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk"
			}
		},
		"./src/reddit/components/Comments/Comment/index.m.less": function(e, t, s) {
			e.exports = {
				CommentWrapper: "P8SGAKMtRxNwlmLz1zdJu",
				commentWrapper: "P8SGAKMtRxNwlmLz1zdJu",
				redesign: "HZ-cv9q391bm8s7qT54B3",
				voteButton: "_2m5vzALl8kQdr9kwIFUo5t",
				upDownVote: "_22nWXKAY6OzAfK5GcUqWV2",
				score: "_3ChHiOyYyUkpZ_Nm3ZyM2M",
				ActionBar: "_3KgrO85L1p9wQbgwG27q4y",
				actionBar: "_3KgrO85L1p9wQbgwG27q4y",
				HorizontalVotes: "_1ewTEGuogtFmDvDII2T2Yy",
				horizontalVotes: "_1ewTEGuogtFmDvDII2T2Yy",
				FlatList: "_2_lhaFUJdP8q0o2L9MN2TN",
				flatList: "_2_lhaFUJdP8q0o2L9MN2TN",
				ExpandButton: "_1nGapmdexvR0BuOkfAi6wa",
				expandButton: "_1nGapmdexvR0BuOkfAi6wa",
				hidden: "_1zN1-lYh2LfbYOMAho_O8g",
				visible: "O_Ica0k2O4KFcZyNfsJDU",
				ErrorText: "_3XArRVBsKuWegVHX9CQjH-",
				errorText: "_3XArRVBsKuWegVHX9CQjH-",
				CommentBody: "_3cjCphgls6DH-irkVaA0GM",
				commentBody: "_3cjCphgls6DH-irkVaA0GM",
				restrictHeight: "_2SI6K-u7PZ8koDfUmq7jlz",
				EditCommentForm: "JchsqHyN3thfSnN8dUM3",
				editCommentForm: "JchsqHyN3thfSnN8dUM3",
				AuthorHoverDiv: "ZvAy-PJfJmB8pzQxpz1sS",
				authorHoverDiv: "ZvAy-PJfJmB8pzQxpz1sS",
				UserIconContainer: "_3GfQMgsm3HGd3838lwqCST",
				userIconContainer: "_3GfQMgsm3HGd3838lwqCST",
				UserIconContainerSmall: "zAxFYkzSByRTsKWHEMfFF",
				userIconContainerSmall: "zAxFYkzSByRTsKWHEMfFF",
				UserIcon: "_13ScjOmi6dGdJw0JAonQEr",
				userIcon: "_13ScjOmi6dGdJw0JAonQEr",
				V1NftTreatment: "_3yYNickUtSp9utejxh7dFL",
				v1NftTreatment: "_3yYNickUtSp9utejxh7dFL",
				topSupporterIcon: "PjnQ0fgBT0oSZ9nR8HeaJ",
				VerticalVotes: "kB7GZ7EzNg1Msq-nEnY0z",
				verticalVotes: "kB7GZ7EzNg1Msq-nEnY0z",
				CommentContentWrapper: "_3tw__eCCe7j-epNCKGXUKk",
				commentContentWrapper: "_3tw__eCCe7j-epNCKGXUKk",
				isPendingDeletion: "_2R8NbVFaqNnBbuA7o2osje",
				isRemoved: "_2zA6eSGIr_oQU7np0uNqoB",
				isLocked: "t8jgOblBrQTKWHnVy0zGD",
				isActive: "_1vvFtxiq5874iIdCUYlL-d",
				highlightComment: "_2ym9uYDdCxu8P4UFCLNCgE",
				topLevel: "_1z5rdmX8TDr6mqwNv7A70U",
				focused: "_1Sy9NCNbLA9uJZj-qgUrMG",
				noSpacing: "_3nqqnHjXPJkfr8j5t_I85P",
				TopMeta: "_1S45SPAIb30fsXtEcKPSdt",
				topMeta: "_1S45SPAIb30fsXtEcKPSdt",
				noFlair: "_3LqBzV8aCO9tge99jHiUGy",
				collapsed: "_3c9Go6433BnvYx8_7MkPnt",
				CommentCreation: "_2jhbZV6mVCM5Ma7Z376DW2",
				commentCreation: "_2jhbZV6mVCM5Ma7Z376DW2",
				commentPerfMarkVisibility: "_2CkgPEY8ljDZH3np9UY1ws"
			}
		},
		"./src/reddit/components/Comments/Comment/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/models/PostDraft/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/makeDraftKey/index.ts"),
				m = s("./src/lib/objectSelector/index.ts"),
				u = s("./src/reddit/actions/comment/index.ts"),
				p = s("./src/reddit/actions/comment/authoring.ts"),
				b = s("./src/reddit/actions/comment/moderation.ts"),
				h = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				x = s("./src/reddit/icons/fonts/Expand/index.tsx"),
				f = s("./src/reddit/components/Comments/Comment/ExpandButton/index.m.less"),
				O = s.n(f);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var v, j, C = s("./node_modules/lodash/defer.js"),
				y = s.n(C),
				E = s("./src/lib/lessComponent.tsx"),
				_ = s("./src/reddit/actions/tooltip.ts"),
				k = s("./src/reddit/selectors/tooltip.ts"),
				S = s("./src/reddit/actions/gold/modals.ts"),
				w = s("./src/reddit/actions/modal.ts"),
				N = s("./src/reddit/actions/reportFlow/index.ts"),
				T = s("./src/reddit/helpers/correlationIdTracker.ts"),
				I = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				P = s("./src/reddit/helpers/trackers/lightbox.ts"),
				R = s("./src/reddit/models/Comment/index.ts"),
				M = s("./src/reddit/selectors/activeModalId.ts"),
				L = s("./src/reddit/selectors/comments.ts"),
				F = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				B = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				A = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				D = s("./src/reddit/selectors/posts.ts"),
				U = s("./src/reddit/selectors/subreddit.ts"),
				H = s("./src/reddit/selectors/user.ts"),
				W = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				V = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				G = s.n(V);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(v || (v = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(j || (j = {}));
			const K = (e, t) => {
					const s = G.a[t],
						n = G.a[e];
					return Object(d.a)(s, n)
				},
				q = e => Object(d.a)(G.a[`depth${Math.min(3*Math.ceil(e.depth/3),10)}`], {
					[G.a.isInOverlay]: e.isInOverlay,
					[G.a.isModModeEnabled]: e.isModModeEnabled,
					[G.a.isFollowCommentEnabled]: e.isFollowCommentEnabled
				});
			var z = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				J = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				Y = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				Q = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				X = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				Z = s("./src/reddit/components/ModModeReports/helpers.ts"),
				$ = s("./src/reddit/components/OverflowMenu/index.tsx"),
				ee = s("./src/reddit/components/ReportFlow/index.tsx"),
				te = s("./src/reddit/components/ReportFlow/new.tsx"),
				se = s("./src/reddit/components/ShareMenu/index.tsx"),
				ne = s("./src/reddit/components/TrackingHelper/index.tsx"),
				re = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				oe = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				ie = s("./src/reddit/helpers/trackers/modTools.ts"),
				ae = s("./src/reddit/layout/row/Inline/index.tsx"),
				ce = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.tsx"),
				de = s("./src/reddit/icons/fonts/index.tsx"),
				le = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				me = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				ue = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				pe = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				be = s("./src/reddit/icons/fonts/Report/index.tsx"),
				he = s("./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx"),
				xe = s("./src/devPlatform/constants.ts"),
				fe = s("./src/reddit/selectors/experiments/devPlatform.ts"),
				Oe = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				ge = s.n(Oe);
			const ve = E.a.wrapped(le.a, "CommentIcon", ge.a),
				je = E.a.wrapped(be.a, "Report", ge.a),
				Ce = E.a.wrapped(ue.a, "IgnoreReport", ge.a),
				ye = E.a.wrapped(X.a, "ModActionsMenu", ge.a),
				Ee = E.a.div("OverflowMenuSpacer", ge.a),
				_e = E.a.wrapped($.a, "DropdownRow", ge.a),
				ke = E.a.wrapped(ae.a, "Flatlist", ge.a),
				Se = E.a.button("Button", ge.a),
				we = E.a.wrapped(z.a, "ModToolsFlatlist", ge.a),
				Ne = E.a.wrapped(re.a, "ViewReportsDropdown", ge.a),
				Te = e => `Comment-${e}--Modal--DeleteComment`,
				Ie = e => `Distinguish--Dropdown--${e}`,
				Pe = e => `${e}-overflow-menu`,
				Re = e => `View--Reports--${e}`,
				Me = Object(a.c)({
					claimedFreeAward: A.b,
					currentUser: H.l,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(M.a)(e) === Te(s.id)
					},
					isDistinguishDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(k.b)(Ie(s.id))(e)
					},
					isFollowed: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(L.y)(e, {
							commentId: s.id
						})
					},
					isFollowedCommentExpired: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(L.A)(e, {
							commentId: s.id
						})
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(L.E)(e, {
							commentId: s.id
						})
					},
					isReportsDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(k.b)(Re(s.id))(e)
					},
					isLoggedIn: H.R,
					postIsArchived: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(D.A)(e, {
							postId: s.postId
						})
					},
					isBlockedUserBannerEnabled: (e, t) => {
						let {
							comment: s
						} = t;
						return !!Object(D.w)(e, {
							postId: s.postId
						}) && Object(F.a)(e)
					},
					postAuthorIsBlocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(D.w)(e, {
							postId: s.postId
						})
					},
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(D.B)(e, {
							postId: s.postId
						})
					},
					commentPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(L.m)(e, {
							commentId: s.id
						})
					},
					reportFlowIsOpen: (e, t) => {
						let {
							comment: s
						} = t;
						var n, r;
						return (null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.reportFlow) || void 0 === r ? void 0 : r.postOrCommentId) === s.id
					},
					sendRepliesToggled: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(L.K)(e, {
							commentId: s.id
						})
					},
					subredditAboutInfo: (e, t) => {
						let {
							subreddit: s
						} = t;
						return s ? Object(U.z)(e, {
							subredditName: s.name
						}) : void 0
					},
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(D.V)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: B.a,
					isPostUnrepliable: (e, t) => {
						let {
							comment: s
						} = t;
						var n;
						return null === (n = Object(D.G)(e, {
							postId: s.postId
						})) || void 0 === n ? void 0 : n.unrepliableReason
					},
					isTrueblockPCBlockeeEnabled: F.d,
					isDevPlatformEnabled: e => Object(fe.a)(e)
				});
			class Le extends o.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(P.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(ie.b)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(ie.f)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						this.props.sendEvent(Object(ie.e)("edit", this.props.comment.id)), this.props.handleEdit()
					}, this.handleGild = async () => {
						var e;
						const t = Object(T.d)(T.a.GildingFlow, !0);
						this.props.onGildClick(t, null === (e = this.props.claimedFreeAward) || void 0 === e ? void 0 : e.id);
						const {
							clickGildEvent: n
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(n(this.props.comment.id))
					}, this.handleDelete = () => {
						this.props.sendEvent(Object(ie.e)("delete", this.props.comment.id)), this.props.toggleDeleteCommentModal()
					}, this.handleReportClick = () => {
						this.props.sendEvent(Object(ie.b)("report", this.props.comment.id)), this.props.onReportClick()
					}, this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(ie.b)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleFollow = () => {
						const {
							onCommentFollow: e,
							sendEvent: t,
							comment: s,
							isFollowed: n
						} = this.props;
						e(n ? R.a.UNFOLLOWED : R.a.FOLLOWED), t(n ? Object(ie.g)("follow", s.id) : Object(ie.b)("follow", s.id))
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(ie.c)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? o.a.createElement(te.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: ee.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : o.a.createElement(ee.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: ee.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					})
				}
				componentDidMount() {
					this.props.isFollowedCommentExpired && this.props.onFollowedCommentExpire()
				}
				render() {
					const {
						comment: e,
						className: t,
						currentUser: s,
						commentPermalink: i,
						deleteComment: a,
						depth: c,
						handleReply: l,
						isAvatarsInCommentsEnabled: m,
						isFollowed: u,
						isLoggedIn: p,
						isPendingDeletion: b,
						onDistinguishComment: h,
						onIgnoreReports: x,
						onToggleReportsDropdown: f,
						moderatorPermissions: O,
						modModeEnabled: g,
						postIsArchived: C,
						postAuthorIsBlocked: E,
						isBlockedUserBannerEnabled: _,
						postIsLocked: k,
						renderedInOverlay: S,
						sendEvent: w,
						subreddit: N,
						subredditAboutInfo: T,
						toggleDeleteCommentModal: P,
						toggleSendReplies: M,
						trackCommentClick: L,
						isPostUnrepliable: F,
						isTrueblockPCBlockeeEnabled: B,
						isDevPlatformEnabled: A
					} = this.props, D = Object(I.a)(O), U = !!s && s.displayText === e.author, H = !!s && s.isEmployee, V = B && e.unrepliableReason, G = B && F, z = !(E && B) && !(Object(R.g)(e) && B) && !(F && B) && !V && !G && !(T && T.userIsBanned) && (k || C || E && _ || D && p || e.isLocked ? D && p : p || m), X = Object(Z.a)(e), ee = D && U && !e.bannedBy, te = U && H && !e.bannedBy, ne = ee || te, re = !(Object(R.g)(e) && B) && s && e.isGildable && !G && !(V && "[deleted]" === e.author), ae = !C && !V, le = [];
					z && le.push(o.a.createElement(Se, {
						disabled: b,
						key: "reply",
						onClick: () => {
							l(), y()(() => L("reply", e.id)())
						}
					}, o.a.createElement(ve, null), n.fbt._("Reply", null, {
						hk: "dq9W0"
					}))), re && le.push({
						breakpointGroup: j.LoggedInUser,
						icon: o.a.createElement(ce.a, null),
						isIconOverflowOnly: !0,
						key: "award",
						onClick: this.handleGild,
						text: () => n.fbt._("Give Award", null, {
							hk: "1GmM1v"
						})
					}), le.push(o.a.createElement(se.a, {
						dropdownId: `${e.id}-comment-share-menu`,
						key: "share",
						permalink: i,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == N ? void 0 : N.type
					}, o.a.createElement(Se, {
						onClick: () => this.sendCommentEventWithName("share")
					}, n.fbt._("Share", null, {
						hk: "3Ak3Tw"
					})))), U || le.push({
						breakpointGroup: j.LoggedInUser,
						icon: o.a.createElement(be.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: () => n.fbt._("Report", null, {
							hk: "4oVcnd"
						})
					}), le.push({
						breakpointGroup: j.LoggedInUser,
						icon: o.a.createElement(de.a, {
							name: e.isSaved ? "saved" : "save"
						}),
						isIconOverflowOnly: !0,
						key: "save",
						onClick: this.handleSave,
						text: e.isSaved ? () => n.fbt._("Unsave", null, {
							hk: "48MWs0"
						}) : () => n.fbt._("Save", null, {
							hk: "4yMsMq"
						})
					}), U && le.push({
						breakpointGroup: j.LoggedInUser,
						icon: o.a.createElement(de.a, {
							name: "edit"
						}),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: () => n.fbt._("Edit", null, {
							hk: "1nftDt"
						})
					}), ae && le.push({
						breakpointGroup: j.LoggedInUser,
						icon: o.a.createElement(de.a, {
							name: "notification",
							isFilled: u
						}),
						isIconOverflowOnly: !0,
						key: "follow",
						onClick: this.handleFollow,
						text: u ? () => n.fbt._("Followed", null, {
							hk: "43P2OR"
						}) : () => n.fbt._("Follow", null, {
							hk: "1vo8lJ"
						})
					});
					const ue = le.map(e => o.a.isValidElement(e) ? e : o.a.createElement(Se, {
							className: K(e.breakpointGroup, v.HideIfVWSmaller),
							disabled: b,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text())),
						fe = le.map(e => o.a.isValidElement(e) ? null : o.a.createElement(_e, {
							className: K(e.breakpointGroup, v.HideIfVWLarger),
							displayText: e.text(),
							key: e.key,
							onClick: e.onClick,
							textClassName: ge.a.dropdownRowText
						}, e.icon));
					return o.a.createElement(r.Fragment, null, o.a.createElement(ke, {
						className: Object(d.a)(q({
							depth: c,
							isInOverlay: S,
							isModModeEnabled: D && g || A,
							isFollowCommentEnabled: ae
						}), t)
					}, ue, o.a.createElement(Ee, {
						className: U ? void 0 : K(j.LoggedInUser, v.HideIfVWLarger)
					}, o.a.createElement($.b, {
						className: ge.a.overflowMenu,
						disabled: b,
						dropdownId: Pe(e.id),
						onClick: () => w(Object(ie.b)("comment_overflow_menu", e.id))
					}, fe, U && o.a.createElement(o.a.Fragment, null, o.a.createElement(_e, {
						displayText: n.fbt._("Delete comment", null, {
							hk: "4lMUDO"
						}),
						onClick: this.handleDelete,
						textClassName: ge.a.dropdownRowText
					}, o.a.createElement(de.a, {
						name: "delete"
					})), o.a.createElement(oe.a, {
						text: n.fbt._("Send me reply notifications", null, {
							hk: "4ebRRu"
						}),
						onClick: M,
						isSelected: this.props.sendRepliesToggled
					})), o.a.createElement(he.a, {
						contextType: xe.a.COMMENT,
						contextData: e
					}))), this.props.isConfirmModalOpen && o.a.createElement(Y.a, {
						actionText: n.fbt._("Delete", null, {
							hk: "1bl9Tc"
						}),
						cancelActionText: n.fbt._("Keep", null, {
							hk: "3hCBEF"
						}),
						headerText: n.fbt._("Delete comment", null, {
							hk: "2EYJqi"
						}),
						modalText: n.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "OzOZd"
						}),
						onConfirm: a,
						toggleModal: P,
						trackClick: () => {},
						withOverlay: !0
					}), D && o.a.createElement(o.a.Fragment, null, g && o.a.createElement(we, {
						className: K(j.Moderator, v.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: U
					}), o.a.createElement(ye, {
						className: g ? K(j.Moderator, v.HideIfVWLarger) : void 0,
						dropdownId: `${e.id}-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: () => w(Object(ie.b)("comment_mod_action_menu", e.id))
					}, o.a.createElement(pe.a, null), o.a.createElement(W.a, {
						comment: e,
						tooltipId: `${e.id}-mod-actions-menu`
					}))), Object(Z.c)(e) && !g && o.a.createElement(J.a, {
						text: `${X}`,
						onClick: () => {
							f(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: Re(e.id)
					}, o.a.createElement(Ne, {
						model: e,
						onIgnoreReports: () => {
							x(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Re(e.id)
					}), e.ignoreReports ? o.a.createElement(Ce, null) : o.a.createElement(je, null)), ne && o.a.createElement(J.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, o.a.createElement(me.a, null), o.a.createElement(Q.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: H,
						isUserMod: D,
						onDistinguishComment: h,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Ie(e.id)
					}))), (!this.props.renderedInOverlay || !this.props.isCommentFocused) && this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Fe = Object(i.b)(Me, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n
					} = t;
					return {
						deleteComment: () => n && e(Object(p.i)(s.id, s.postId)),
						handleDelete: () => {
							e(Object(w.i)(Te(s.id))), e(Object(_.h)({
								tooltipId: Pe(s.id)
							}))
						},
						handleEdit: () => {
							const t = s.media && s.media.rteMode;
							n && e(Object(p.e)({
								commentId: s.id,
								draftKey: Object(l.a)(c.c.edit, s.id),
								text: s.bodyMD || "",
								commentMode: t,
								commentsPageKey: n
							}))
						},
						handleReply: () => n && e(Object(p.s)({
							parentCommentId: s.id,
							commentsPageKey: n
						})),
						onCommentFollow: t => e(Object(p.u)(s.id, t)),
						onDistinguishComment: (t, n) => e(Object(b.b)(s.id, t, n)),
						onFollowedCommentExpire: () => e(Object(u.p)({
							id: s.id,
							expiresAt: 0
						})),
						onGildClick: (t, n) => e(Object(S.d)({
							awardId: n,
							correlationId: t,
							thingId: s.id
						})),
						onIgnoreReports: () => e(Object(b.g)(s.id)),
						onReportClick: () => e(Object(N.c)(s.id)),
						onToggleSave: () => e(Object(u.o)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(_.h)({
							tooltipId: Ie(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(_.h)({
							tooltipId: Re(s.id)
						})),
						toggleDeleteCommentModal: () => e(Object(w.i)(Te(s.id))),
						toggleSendReplies: () => e(Object(p.l)(s.id))
					}
				})(Object(ne.c)(Le)),
				Be = s("./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less"),
				Ae = s.n(Be);
			var De = o.a.memo(e => {
					const {
						hexColor: t
					} = e;
					return o.a.createElement("div", {
						className: Ae.a.glowHighlightContainer,
						role: "presentation",
						style: {
							boxShadow: `#${t} 0px 0px 14px`
						}
					})
				}),
				Ue = s("./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less"),
				He = s.n(Ue);
			var We = o.a.memo(e => o.a.createElement("div", {
					className: He.a.gradientHighlightContainer,
					role: "presentation"
				})),
				Ve = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.tsx"),
				Ge = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Ke = s("./src/reddit/components/Comments/PredictionComment/async.ts"),
				qe = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				ze = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				Je = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				Ye = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				Qe = s("./src/reddit/components/ModModeReports/index.tsx"),
				Xe = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Ze = s("./src/reddit/components/RichTextJson/index.tsx"),
				$e = s("./src/reddit/components/UserIcon/index.tsx"),
				et = s("./src/reddit/components/UserIcon/constants.ts"),
				tt = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				st = s("./src/reddit/helpers/author.ts"),
				nt = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				rt = s("./src/reddit/constants/componentTestIds.ts"),
				ot = s("./src/reddit/contexts/PageLayer/index.tsx"),
				it = s("./src/reddit/contexts/Visibility.tsx"),
				at = s("./src/reddit/controls/ErrorText/index.tsx"),
				ct = s("./src/reddit/controls/InternalLink/index.tsx"),
				dt = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				lt = s("./src/reddit/helpers/flair.ts"),
				mt = s("./src/reddit/models/Subreddit/index.ts"),
				ut = s("./src/reddit/models/User/index.ts"),
				pt = s("./src/reddit/models/Vote/index.ts"),
				bt = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				ht = s("./src/reddit/selectors/commentSelector.ts"),
				xt = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				ft = s("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				Ot = s("./src/reddit/selectors/moderatorPermissions.ts"),
				gt = s("./src/reddit/selectors/poll/index.ts"),
				vt = s("./src/reddit/selectors/userPrefs.ts"),
				jt = s("./src/reddit/selectors/moderatingComments.ts"),
				Ct = s("./src/reddit/components/Comments/Comment/index.m.less"),
				yt = s.n(Ct),
				Et = s("./src/config.ts"),
				_t = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				kt = s("./src/reddit/components/SubredditIcon/index.tsx"),
				St = s("./src/reddit/helpers/trackers/comment.ts");

			function wt() {
				return (wt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Nt = 300,
				Tt = E.a.wrapped((function(e) {
					const {
						className: t,
						...s
					} = e;
					return o.a.createElement("button", g({}, s, {
						className: Object(d.a)(t, O.a.expandButton)
					}), o.a.createElement(x.a, {
						className: O.a.expandIcon
					}))
				}), "ExpandButton", yt.a),
				It = E.a.wrapped(Fe, "FlatList", yt.a),
				Pt = E.a.wrapped(at.b, "ErrorText", yt.a),
				Rt = E.a.wrapped(qe.a, "HorizontalVotes", yt.a),
				Mt = E.a.div("ActionBar", yt.a),
				Lt = E.a.wrapped(Ge.a, "TopMeta", yt.a),
				Ft = E.a.div("CommentContentWrapper", yt.a),
				Bt = E.a.wrapped(ze.b, "AuthorHovercard", yt.a),
				At = Object(ot.u)(),
				Dt = Object(i.b)(() => Object(a.c)({
					comment: (e, t) => Object(ht.b)(e, t),
					currentProfileModPermissions: ot.h,
					depth: (e, t) => Object(L.j)(e, t),
					collapsed: jt.b,
					collapsedBecauseCrowdControl: jt.a,
					currentUser: H.l,
					flair: L.e,
					focused: (e, t) => !t.noFocus && Object(L.t)(e, t),
					highlightAnimationDisabled: vt.d,
					isAdmin: H.L,
					isEditing: L.z,
					isLoggedIn: H.R,
					isPendingDeletion: L.E,
					isPresenceConsumptionExpEnabled: ft.c,
					moderatorPermissions: (e, t) => {
						const s = Object(ht.b)(e, t);
						return s ? Object(Ot.n)(e, {
							subredditId: s.subredditId
						}) : null
					},
					prediction: gt.f,
					modModeEnabled: ot.U,
					errorMsgs: L.I,
					replyFormOpen: L.L,
					subreddit: ot.r,
					subredditType: L.O,
					isOnlineConsumptionLoadTest: ft.a,
					isOnlineUserPref: H.W,
					userIsBanned: (e, t) => {
						const s = Object(ht.b)(e, t);
						return !!s && Object(U.jb)(e, {
							subredditId: s.subredditId
						})
					},
					isBlockingInterstitialEnabled: xt.b,
					isBlockingInterstitialV2Enabled: xt.c
				}), (e, t) => {
					let {
						commentId: s,
						commentsPageKey: n,
						scrollToAndRemeasure: r,
						trackCommentClick: o
					} = t;
					return {
						onCollapseClick: () => e(Object(u.q)({
							commentId: s,
							commentsPageKey: n,
							scrollToAndRemeasure: r
						})),
						onIgnoreReports: () => e(Object(b.g)(s)),
						onVoteClick: t => {
							const [n, r] = t === pt.a.upvoted ? [Object(u.s)(s), "upvote_comment"] : [Object(u.k)(s), "downvote_comment"];
							o(r, s)(), e(n)
						},
						onMediaReload: () => {
							e(Object(u.l)(s))
						}
					}
				}),
				Ut = Object(m.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				Ht = e => o.a.createElement("div", e, e.children),
				Wt = e => o.a.createElement(o.a.Fragment, null, e.children),
				Vt = At(Dt(e => {
					const {
						childrenInfo: t,
						clearHovered: s,
						collapsed: i,
						collapsedBecauseCrowdControl: a,
						comment: m,
						commentsPageKey: u,
						currentProfileModPermissions: b,
						currentUser: x,
						depth: f,
						errorMsgs: O,
						flair: g,
						flatlist: v,
						focused: j,
						hasAwardGradient: C,
						highlightAnimationDisabled: y,
						highlightTreatment: E,
						index: _,
						isActive: k,
						isAdmin: S,
						isAvatarsInCommentsEnabled: w,
						isBlockingInterstitialEnabled: N,
						isBlockingInterstitialV2Enabled: T,
						isEditing: P,
						isFirstInList: M,
						isHighlighted: L,
						isLoggedIn: F,
						isOnlineConsumptionLoadTest: B,
						isOnlineUserPref: A,
						isPendingDeletion: D,
						isPresenceConsumptionExpEnabled: U,
						moderatorPermissions: H,
						modModeEnabled: W,
						noSpacing: V = !1,
						onCommentAuthorClick: G,
						onCommentTimestampClick: K,
						onCollapseClick: q,
						onIgnoreReports: z,
						onLineMouseOver: J,
						onPresenceIndicatorInViewport: Y,
						onVoteClick: Q,
						postId: X,
						prediction: $,
						renderedInOverlay: ee,
						replyFormOpen: te,
						restrictHeight: se,
						rtJSONRedditStyle: re,
						showBlockingInterstitial: oe,
						subreddit: ie,
						subredditType: ae,
						trackCommentClick: ce,
						userIconSmall: de,
						userIsBanned: le,
						onClickRevealSpoilerText: me,
						onMediaReload: ue
					} = e, pe = m.isDeleted, be = !P && !pe && !!O && O.length > 0, he = Object(l.a)(c.c.edit, m.id), xe = Object(l.a)(c.c.replyToComment, m.id), fe = Object(I.a)(H), Oe = Object(Ye.a)(m), ge = Object(Z.c)(m), ve = m.authorIsContractor && ae === mt.g.EmployeesOnly, je = m.isLocked, Ce = fe && W, ye = !P && !pe && (F || w), Ee = w && !m.unrepliableReason, _e = !!x && Object(ut.e)(x) === m.author, [ke, Se] = Object(r.useState)(null), [we, Ne] = Object(r.useState)(null), Te = Object(r.useRef)(null), Ie = Object(R.f)(m) || Object(R.g)(m), Pe = Ie ? Ht : ct.default, Re = Object(R.f)(m) ? Wt : Bt, Me = Object(ne.b)();
					Object(r.useEffect)(() => {
						if (!P && !pe && (C && Se(o.a.createElement(We, null)), null !== E)) {
							if (E.glowHexColor) {
								const e = E.glowHexColor;
								Se(o.a.createElement(De, {
									hexColor: e
								}))
							}
							if (E.effectHighlight) {
								const {
									type: e,
									assetUrl: t
								} = E.effectHighlight;
								Ne(o.a.createElement(Ve.b, {
									prefersReducedAnimation: y,
									type: e,
									assetUrl: t
								}))
							}
						}
					}, [P, pe, C, y, E]);
					const Le = Object(r.useCallback)(() => {
							Me(Object(St.c)(m.id))
						}, [Me, m.id]),
						Fe = Object(it.b)();
					(N || T) && Fe && _ >= xt.a - 1 && oe();
					const Be = !pe && !Object(R.f)(m) && (!le || le && _e) && !Object(R.g)(m) && F,
						Ae = Object(r.useCallback)(() => {
							Be && U && !_e && Y && Y(m.id)
						}, [m.id, Y, Be, U, _e]),
						Ue = Object(nt.a)(m),
						He = !!x && Object(ut.e)(x) === m.author ? null == x ? void 0 : x.accountIcon : m.profileImage,
						Ge = Object(_t.c)(He),
						qe = Ge || Object(_t.b)(He);
					return o.a.createElement("div", {
						key: `comment-${m.id}`,
						className: Object(d.a)(`Comment ${m.id}`, yt.a.CommentWrapper, {
							[yt.a.highlightComment]: L,
							[yt.a.deleted]: pe,
							[yt.a.focused]: j,
							[yt.a.redesign]: w,
							[yt.a.topLevel]: !f,
							[yt.a.noSpacing]: V
						})
					}, ke, we, !P && !pe && M && o.a.createElement("div", {
						className: yt.a.commentPerfMarkVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n                <img alt='' src='${Et.a.assetPath}/img/renderTimingPixel.png' style='width: 1px; height: 1px;' onLoad='(__markFirstCommentVisible || function(){})();' />\n              `
						}
					}), o.a.createElement(Tt, {
						className: Object(d.a)(m.id, {
							[yt.a.hidden]: !i,
							[yt.a.visible]: i
						}),
						onClick: () => {
							s(), q(), ce("collapse", m.id)()
						},
						onMouseOver: () => J(m.id),
						onMouseOut: s
					}), Object(st.a)(m.author) ? ie ? o.a.createElement(kt.b, {
						className: Object(d.a)(yt.a.UserIconContainer, de && yt.a.UserIconContainerSmall),
						subredditOrProfile: ie,
						linkTo: `/user/${m.author}/`
					}) : null : o.a.createElement(Re, {
						alwaysShowChildren: !0,
						collapsed: i,
						hoverDivClassName: yt.a.AuthorHoverDiv,
						isCommentAuthorBlocked: Object(R.g)(m),
						postOrComment: m,
						tooltipIdPrefix: "AvatarUserInfoTooltip",
						tooltipType: ee ? Xe.f.Lightbox : void 0
					}, o.a.createElement(Pe, {
						className: Object(d.a)(yt.a.UserIconContainer, de && yt.a.UserIconContainerSmall),
						"data-testid": Ie ? void 0 : "comment_author_icon",
						onClick: Ie ? void 0 : G,
						to: `/user/${m.author}/`
					}, Fe ? o.a.createElement($e.a, {
						isNft: qe,
						className: Object(d.a)(yt.a.UserIcon, {
							[yt.a.v1NftTreatment]: Ge
						}),
						iconUrl: He,
						isNSFW: m.profileOver18 || !1,
						nsfwIconUrl: et.a,
						userName: m.author,
						isHighlighted: L,
						shouldShowPresenceIndicator: Be && U,
						onPresenceIndicatorInViewport: Ae,
						isCommentAuthorBlocked: Object(R.g)(m),
						collapsed: i,
						shouldUseOnlineOverride: _e,
						isOnlineOverrideValue: A,
						isOnlineStatusLoadTest: Be && B,
						authorId: m.authorId
					}) : o.a.createElement("div", {
						className: yt.a.UserIcon
					}))), o.a.createElement(Ft, {
						className: Object(d.a)({
							[yt.a.isActive]: k,
							[yt.a.isCollapsed]: i,
							[yt.a.isLocked]: je && Ce,
							[yt.a.isPendingDeletion]: D,
							[yt.a.isRemoved]: !!m.bannedBy && Ce || m.isDeleted && S
						})
					}, o.a.createElement(dt.a, null, n.fbt._("level {depth}", [n.fbt._param("depth", f + 1)], {
						hk: "2XnyAV"
					})), o.a.createElement(Lt, {
						userHasNft: qe,
						childrenInfo: t,
						className: Object(d.a)({
							[yt.a.collapsed]: i,
							[yt.a.noFlair]: Object(lt.o)(g || null)
						}),
						collapsed: i,
						collapsedBecauseCrowdControl: a,
						comment: m,
						commentsPageKey: u,
						flair: g,
						isAdmin: S,
						isPostComment: !0,
						onCommentAuthorClick: G,
						onCommentTimestampClick: K,
						renderedInOverlay: ee,
						renderContractorBadge: ve
					}), !i && o.a.createElement(r.Fragment, null, P && o.a.createElement(h.a, {
						className: Object(d.a)(yt.a.EditCommentForm, yt.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: u,
						depth: f,
						draftType: c.c.edit,
						draftKey: he,
						postId: X,
						rtJson: Object(nt.a)(m),
						mediaMetadata: m.media && m.media.mediaMetadata || void 0,
						isTopLevelComment: !1,
						parentCommentId: m.id,
						submitAction: e => Object(p.j)({
							id: m.id,
							commentsPageKey: u,
							draftKey: he,
							formData: e
						}),
						submitButtonText: n.fbt._("Save Edits", null, {
							hk: "2NKEFr"
						})
					}), !P && (!pe || S) && o.a.createElement("div", {
						"data-testid": rt.d,
						ref: Te,
						className: Object(d.a)(yt.a.CommentBody, {
							[yt.a.restrictHeight]: !(!se || !Te.current) && Te.current.clientHeight > Nt
						})
					}, $ ? o.a.createElement(Ke.a, {
						comment: m,
						prediction: $
					}) : o.a.createElement(Ze.b, {
						content: Ue,
						mediaMetadata: m.media && m.media.mediaMetadata,
						redditStyle: re,
						rtJsonElementProps: Ut(e),
						onClickRevealSpoilerText: me,
						mediaProps: {
							alignLeft: !0,
							renderSmallMedia: !0,
							onReload: ue,
							onClick: Le
						}
					}), o.a.createElement(bt.b, {
						content: Ue
					})), W && fe && Oe && o.a.createElement(Je.a, {
						thing: m
					}), W && fe && ge && o.a.createElement(Qe.a, {
						onIgnoreReports: z,
						reportable: m
					}), null != v ? v : ye && o.a.createElement(Mt, null, Ee && o.a.createElement(Rt, {
						downvoteButtonClassName: yt.a.voteButton,
						downvoteClassName: yt.a.upDownVote,
						model: m,
						onVoteClick: Q,
						scoreClassName: yt.a.score,
						upvoteButtonClassName: yt.a.voteButton,
						upvoteClassName: yt.a.upDownVote
					}), o.a.createElement(It, {
						comment: m,
						commentsPageKey: u,
						depth: f,
						isAvatarsInCommentsEnabled: w,
						collapsedBecauseCrowdControl: a,
						modModeEnabled: W,
						moderatorPermissions: b || H,
						renderedInOverlay: ee,
						isCommentFocused: j,
						subreddit: ie,
						trackCommentClick: ce
					})), be && O.map(e => o.a.createElement(Pt, {
						key: e
					}, e)), te && o.a.createElement(h.a, {
						className: Object(d.a)(yt.a.EditCommentForm, yt.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: u,
						depth: f,
						draftType: c.c.replyToComment,
						draftKey: xe,
						isTopLevelComment: !1,
						parentCommentId: m.id,
						postId: X,
						submitAction: (e, t) => {
							let {
								validate: s,
								...n
							} = e;
							return s ? Object(p.v)({
								commentsPageKey: u,
								draftKey: xe,
								parentCommentDepth: f,
								parentCommentId: m.id,
								formData: n,
								editorMode: t
							}) : Object(p.o)({
								commentsPageKey: u,
								draftKey: xe,
								parentCommentDepth: f,
								parentCommentId: m.id,
								formData: n,
								editorMode: t
							})
						},
						submitButtonText: n.fbt._("Reply", null, {
							hk: "2ymsie"
						})
					}))))
				}));
			t.a = e => o.a.createElement(tt.a.Consumer, null, t => o.a.createElement(Vt, wt({}, e, {
				trackCommentClick: t
			})))
		},
		"./src/reddit/components/Comments/PredictionComment/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Comments-PredictionComment",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Comments-PredictionComment").then(s.bind(null, "./src/reddit/components/Comments/PredictionComment/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Comments/PredictionComment/index.tsx"
				}
			})
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, s) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/modals.ts"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/CreateCommunityButton/index.m.less"),
				f = s.n(x),
				O = s("./src/lib/lessComponent.tsx");
			const g = "create-community-button",
				v = O.a.wrapped(l.c, "StyledTooltip", f.a),
				j = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.qb)(e),
					userIsSuspended: h.Y
				});
			t.a = Object(i.b)(j, (e, t) => {
				let {
					eventSource: s
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(b.c)(s)), e(Object(c.h)(u.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(d.f)({
						tooltipId: g
					})),
					onHideTooltip: () => e(Object(d.i)())
				}
			})(Object(m.c)(e => {
				let {
					className: t,
					eventSource: s,
					onShowTooltip: r,
					onHideTooltip: i,
					openCommunityCreation: a,
					sendEvent: c,
					userDoesNotHaveEnoughExpToCreateCommunity: d,
					userIsSuspended: l,
					onClick: m
				} = e;
				return o.a.createElement(p.t, {
					className: t,
					disabled: l || d,
					onClick: e => {
						m && m(e), a(c)
					},
					onMouseEnter: r,
					onMouseLeave: i,
					priority: p.c.Secondary,
					id: g,
					isFullWidth: !0
				}, n.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), d ? o.a.createElement(v, {
					caretOnTop: !0,
					tooltipId: g,
					text: n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? o.a.createElement(v, {
					caretOnTop: !0,
					tooltipId: g,
					text: n.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/CreateCommunitySidebar/index.m.less": function(e, t, s) {
			e.exports = {
				BannerImg: "_2ddpn_fVcA1SYZzLivK-SD",
				bannerImg: "_2ddpn_fVcA1SYZzLivK-SD",
				ButtonContainer: "_2ymEyPXQM0ccuwfvIOMpnZ",
				buttonContainer: "_2ymEyPXQM0ccuwfvIOMpnZ",
				Button: "_1vv6LrKIsjHuIJCCgIntnC",
				button: "_1vv6LrKIsjHuIJCCgIntnC",
				CommunityText: "_9jODC2-h7cM9Y6Duqs_W4",
				communityText: "_9jODC2-h7cM9Y6Duqs_W4",
				Container: "_3lfTEmyI7x9ib1wz4e8RWP",
				container: "_3lfTEmyI7x9ib1wz4e8RWP",
				SnooImg: "_20axzOalQqYkHj-7Idfqun",
				snooImg: "_20axzOalQqYkHj-7Idfqun"
			}
		},
		"./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less": function(e, t, s) {
			e.exports = {
				img: "_2j4blQAaYrPKIhe5jBJ9c8"
			}
		},
		"./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less"),
				c = s.n(a),
				d = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				l = s("./src/reddit/selectors/gold/awardIcon.ts"),
				m = s("./src/reddit/selectors/gold/purchaseCatalog.ts");
			t.a = e => {
				const t = Object(o.e)(m.b),
					s = Object(o.e)(e => Object(l.a)(e, {
						award: t,
						minSize: 32
					}));
				return t && s ? r.a.createElement("img", {
					alt: t.name,
					className: Object(i.a)(c.a.img, e.className),
					id: e.id,
					src: s
				}) : r.a.createElement(d.a, e)
			}
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/eventTools/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				m = s("./src/reddit/helpers/postEvent.ts"),
				u = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = s.n(u);
			const b = a.a.div("EventMetaWrapper", p.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: s,
					post: n
				} = e;
				if (!Object(m.a)(n)) return null;
				const a = n && n.eventInfo,
					u = Object(l.a)(n),
					h = a && Object(i.c)(a.eventStart, a.eventEnd);
				return r.a.createElement("div", {
					className: Object(o.a)(p.a.container, t, {
						[p.a.isCompact]: !!s
					})
				}, r.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, r.a.createElement(c.a, {
					post: n
				}), !u && h && r.a.createElement(d.a, {
					className: p.a.eventFollowButton,
					post: n,
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/eventTools/index.ts"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				c = s("./src/reddit/icons/fonts/Live/index.tsx"),
				d = s("./src/reddit/components/HumanDate/index.tsx"),
				l = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				m = s.n(l),
				u = s("./src/lib/lessComponent.tsx");
			const p = u.a.span("PostEventFutureText", m.a),
				b = u.a.span("PostEventPastText", m.a),
				h = u.a.span("PostEventNowText", m.a),
				x = u.a.span("Container", m.a),
				f = u.a.wrapped(a.a, "CalendarIcon", m.a),
				O = u.a.wrapped(c.a, "LiveIcon", m.a),
				g = u.a.div("LoadingState", m.a);
			class v extends n.Component {
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
						eventEnd: n,
						eventIsLive: a,
						eventStart: c
					} = s, l = Object(o.e)(c, n);
					let m, u;
					if (this.state.mounted || l === o.a.Live) m = r.a.createElement(d.c, {
						startTime: c,
						endTime: n,
						isLive: a
					});
					else {
						const e = Object(i.a)({
							isLoading: !0
						});
						m = r.a.createElement(g, {
							className: e
						})
					}
					if (a) u = r.a.createElement(h, null, r.a.createElement(O, null), m);
					else if (l === o.a.Future) u = r.a.createElement(p, null, r.a.createElement(f, null), m);
					else {
						if (l !== o.a.Past) return null;
						u = r.a.createElement(b, null, r.a.createElement(f, null), m)
					}
					return r.a.createElement(x, {
						className: e
					}, u)
				}
			}
			t.a = v
		},
		"./src/reddit/components/FocusableContent/index.m.less": function(e, t, s) {
			e.exports = {
				FocusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				focusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				isFocused: "_3F2J0fSnCI3ZvF_tBSaV0s",
				noBorder: "_1CpUVAt2tGEwaaBV3nZNJs"
			}
		},
		"./src/reddit/components/FocusableContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/FocusableContent/index.m.less"),
				c = s.n(a);
			t.a = i.a.wrapped(e => r.a.createElement("div", {
				className: Object(o.a)(e.className, {
					[c.a.isFocused]: e.isFocused,
					[c.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", c.a)
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/reddit/featureFlags/component.tsx");
			const o = Object(n.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("CryptoVault").then(s.bind(null, "./src/reddit/components/Governance/VaultActionLink/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/index.tsx"
					}
				}, {
					ssr: !1
				}),
				i = Object(r.a)("spBurnLinks", Object(n.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("CryptoVault").then(s.bind(null, "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx"
					}
				}, {
					ssr: !1
				}))
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("IdCard").then(s.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/Media/BlurredContent.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/reddit/components/Media/index.m.less"),
				a = s.n(i);
			const c = (e, t) => e && t ? n.fbt._("Click to see nsfw spoiler", null, {
					hk: "4EdPWu"
				}) : e ? n.fbt._("Click to see nsfw", null, {
					hk: "4CErse"
				}) : t ? n.fbt._("Click to see spoiler", null, {
					hk: "1x3iUE"
				}) : void 0,
				d = e => {
					let {
						isNSFW: t,
						isSpoiler: s
					} = e;
					return o.a.createElement("div", {
						className: a.a.unblurButtonContainer
					}, o.a.createElement("button", {
						className: a.a.unblurButton
					}, c(t, s)))
				}
		},
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, s) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/addQueryParams/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/forceHttps/index.ts"),
				l = s("./src/reddit/constants/tracking.ts"),
				m = s("./src/reddit/models/Media/index.ts"),
				u = s("./src/reddit/selectors/user.ts"),
				p = s("./src/reddit/components/Media/EmbedBox/index.m.less"),
				b = s.n(p);
			const h = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				x = Object(o.b)(() => Object(i.c)({
					isNightmodeOn: u.eb
				}));
			t.a = x(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					s = e.isResponsive ? Object(a.a)(Object(d.a)(e.source), t) : Object(d.a)(e.source),
					n = {
						overflow: "hidden"
					};
				return n.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (n.margin = "0 auto"), e.isListing || (n.maxHeight = `${m.e}px`), void 0 !== e.maxHeight && (n.maxHeight = e.maxHeight || void 0), e.isTweet || (n.height = "100%"), r.a.createElement("iframe", {
					className: Object(c.a)(l.a, b.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: h,
					scrolling: "no",
					src: s,
					style: n,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3Oa0THmZ3f5iZXAQ0hBJ0k",
				alignLeft: "WjuR4W-BBrvdtABBeKUMx",
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				renderSmallMedia: "vgwLfcw0MneE2ejmdh_l9",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				imageLink: "_3m20hIKOhTTeMgPnfMbVNN"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return T
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/forceHttps/index.ts"),
				m = s("./src/lib/opener/index.ts"),
				u = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = s("./src/reddit/components/Media/BlurredContent.tsx"),
				b = s("./src/reddit/components/PlayButton/index.tsx"),
				h = s("./src/reddit/constants/adEvents.ts"),
				x = s("./src/reddit/constants/elementClassNames.ts"),
				f = s("./src/reddit/controls/OutboundLink/index.tsx"),
				O = s("./src/reddit/helpers/trackers/ads.ts"),
				g = s("./src/reddit/hooks/useClickSourceData.ts"),
				v = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				j = s("./src/reddit/models/Media/index.ts"),
				C = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/selectors/telemetry.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/constants/tracking.ts"),
				k = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				S = s("./src/reddit/components/Media/ImageBox/index.m.less"),
				w = s.n(S);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const T = e => e > 2 * j.e,
				I = e => o.a.createElement("img", {
					alt: e.altText || n.fbt._("Comment image", null, {
						hk: "1DiDxV"
					}),
					className: Object(d.a)(e.className, {
						[w.a.renderSmallMedia]: e.renderSmallMedia
					}),
					src: e.src
				}),
				P = e => {
					const t = Object(d.a)(w.a.image, x.g, e.className, {
							[w.a.mShowCentered]: e.showCentered,
							[w.a.mShowBlurred]: e.shouldBlur
						}),
						s = {};
					e.showFull || e.isTall || (s.maxHeight = `${j.j}px`), e.isListing || e.isTall && T(e.height) || (s.maxHeight = `${j.e}px`), e.isExpando && e.maxHeight && (s.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (s.maxWidth = `${e.maxWidth}px`);
					const i = Object(r.useRef)(null),
						[a, c] = Object(r.useState)(!1),
						l = Object(r.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t
								} = e;
								!a && t && c(!0)
							})
						}, [a]),
						m = Object(r.useRef)({
							rootMargin: "750px 0px 750px 0px"
						});
					Object(v.a)(i, l, m.current);
					const {
						width: u,
						height: p
					} = e;
					let b = 240;
					if (u / p > 1)
						if (u < 240) b = p;
						else {
							(b = p * (240 / u)) < 20 && (b = 20)
						}
					else b = Math.min(b, p);
					const h = Object(r.useRef)({
						height: b
					});
					return e.renderSmallMedia ? o.a.createElement("div", {
						ref: i,
						style: h.current
					}, a && o.a.createElement(I, N({}, e, {
						className: t
					}))) : o.a.createElement("img", {
						alt: e.altText || n.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: s
					})
				},
				R = e => {
					const t = {};
					return (!e.showFull && Object(j.L)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${j.j}px`, e.shouldBlur && (t.maxWidth = Object(j.L)(e.height, e.width) ? `${j.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), o.a.createElement("div", {
						className: Object(d.a)(w.a.container, e.className, {
							[w.a.alignLeft]: e.alignLeft
						}),
						style: t
					}, e.children)
				},
				M = Object(i.b)(() => Object(c.a)(C.F, E.kb, (e, t) => {
					let {
						isSponsored: s,
						postId: n
					} = t;
					return s && n ? Object(C.b)(e, n) : null
				}, y.d, C.G, (e, t, s, n, r) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: s,
					pageType: n.pageType,
					post: r
				})));
			t.a = M(e => {
				const t = Object(g.a)();
				return e.outboundUrl && !e.shouldBlur ? o.a.createElement("a", {
					"data-testid": "imagebox-outboundurl",
					"data-adclicklocation": k.a.MEDIA,
					href: e.outboundUrl,
					target: "_blank",
					rel: m.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(f.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && (e.fireAdPixelsOfType && e.fireAdPixelsOfType(e.post, h.a.Click), Object(O.a)(e.post, e.pageType))
					}
				}, F(e)) : e.isListing && e.postPermalink ? o.a.createElement(a.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: Object(u.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, F(e)) : F(e)
			});
			const L = (e, t) => o.a.createElement(P, {
					altText: t.altText,
					className: Object(d.a)(t.imageClassName, {
						[_.a]: !e
					}),
					height: t.height,
					isExpando: !!t.isExpando,
					isListing: t.isListing,
					isTall: e,
					maxHeight: t.maxHeight,
					maxWidth: t.maxWidth,
					shouldBlur: t.shouldBlur,
					showCentered: t.showCentered,
					showFull: t.showFull,
					src: Object(l.a)(t.source),
					width: t.width,
					renderSmallMedia: t.renderSmallMedia
				}),
				F = e => {
					let {
						onClick: t,
						...s
					} = e;
					const r = Object(j.L)(s.height, s.width),
						i = T(s.height) && r;
					return o.a.createElement(R, N({}, s, {
						className: `${r?`${_.a} `:""}${s.className||""}`
					}), s.isListing ? o.a.createElement("div", {
						className: s.contentImageClassName
					}, L(r, s)) : o.a.createElement("a", {
						href: s.originalSource,
						onClick: t,
						style: i ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: m.c,
						className: w.a.imageLink
					}, L(r, s), s.shouldBlur && !s.isVideoThumbnail && !s.isNsfwBlockingModalEligible && o.a.createElement(p.a, {
						isNSFW: !!s.isNSFW,
						isSpoiler: !!s.isSpoiler
					})), s.isListing && !s.showFull && s.height > j.j && Object(j.L)(s.height, s.width) && o.a.createElement("div", {
						className: w.a.seeMore
					}, n.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), s.isVideoThumbnail && o.a.createElement(b.a, {
						onClick: t
					}))
				}
		},
		"./src/reddit/components/Media/MediaContainer/index.m.less": function(e, t, s) {
			e.exports = {
				blur: "_2iaYXFpGyyEGq1rp02cl5w",
				container: "m3aNC6yp8RrNM_-a0rrfa",
				isGalleryTileLayout: "_1fptM9wVD8i598KW_RjLWO",
				video: "_3PIKVMCKdveCEcyiKr43sU",
				spacer: "_3gBRFDB5C34UWyxEe_U6mD",
				wrapper: "_3JgI-GOrkmyIeDeyzXdyUD",
				mColoredBackground: "_2CSlKHjH7lsjx0IpjORx14"
			}
		},
		"./src/reddit/components/Media/MediaContainer/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/forceHttps/index.ts"),
				a = s("./src/reddit/models/Media/index.ts"),
				c = s("./src/reddit/components/Media/MediaContainer/index.m.less"),
				d = s.n(c);
			const l = e => {
				let t = null;
				(e.showFull || e.height < a.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
				const s = {
						...t ? {
							maxHeight: `${t}px`
						} : {},
						...e.showFull && !e.showCentered ? {
							maxWidth: `${e.width}px`
						} : {},
						...e.blurSrc ? {
							overflow: "hidden"
						} : {}
					},
					n = e.blurSrc ? r.a.createElement("img", {
						className: d.a.blur,
						src: Object(i.a)(e.blurSrc)
					}) : null,
					c = Object(a.B)(e.height, e.width, e.forceAspectRatio);
				return r.a.createElement("div", {
					className: Object(o.a)(d.a.container, e.className, {
						[d.a.video]: e.isVideo,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : s
				}, n, !e.isGalleryTileLayout && r.a.createElement("div", {
					className: d.a.spacer,
					style: {
						paddingBottom: `${c}%`
					}
				}), r.a.createElement("div", {
					className: Object(o.a)(d.a.wrapper, {
						[d.a.mColoredBackground]: !e.blurSrc,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class m extends r.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return r.a.Children.only(this.props.children) || r.a.createElement("div", null)
					}
					return r.a.createElement(l, this.props)
				}
			}
		},
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				renderSmallMedia: "_2WxICCKdnGu7x2n4CBv6zE",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return _
			}));
			var n = s("./node_modules/lodash/throttle.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./node_modules/@reddit/adblock-detection/browser.js"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/actions/video.ts"),
				u = s("./src/reddit/constants/tracking.ts"),
				p = s("./src/reddit/models/Media/index.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/selectors/video.ts");
			const x = 100,
				f = x / 2 / 1e3;
			var O = s("./src/lib/forceHttps/index.ts"),
				g = s("./src/lib/hooks/usePrevious.ts");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function j(e) {
				let {
					autoplay: t,
					isListing: s,
					isNotCardView: n,
					onBufferingChange: r,
					shouldLoad: a,
					shouldPause: c,
					showCentered: d,
					showFull: l,
					source: m,
					onClick: u,
					...p
				} = e;
				const b = Object(o.useRef)(),
					h = Object(o.useRef)(),
					j = Object(g.a)(c);

				function C(e) {
					if (e) {
						const e = null === (t = null == h ? void 0 : h.current) || void 0 === t ? void 0 : t.play();
						e && e.catch && e.catch(() => {})
					} else ! function() {
						var e;
						null === (e = null == h ? void 0 : h.current) || void 0 === e || e.pause()
					}();
					var t
				}
				return Object(o.useEffect)(() => {
					if (C(!c && (t || n)), h.current && r) return b.current = function(e, t) {
						let s = !1,
							n = !1;
						const r = () => s = !0,
							o = () => n = !0;
						e.addEventListener("loadeddata", r), e.addEventListener("play", o), e.addEventListener("playing", o);
						let i = !1,
							a = 0,
							c = 0;
						const d = window.setInterval(() => {
							if (c = e.currentTime, n) return n = !1, void(a = c);
							if (e.paused || e.seeking || !s) return void(a = c);
							const r = i;
							4 === e.readyState ? i = !1 : !i && c >= a && c < a + f ? i = !0 : i && c >= a && c > a + f && (i = !1), a = c, r !== i && t(i)
						}, x);
						return () => {
							clearInterval(d), e.removeEventListener("playing", o), e.removeEventListener("play", o), e.removeEventListener("loadeddata", r)
						}
					}(h.current, r), () => {
						b.current && b.current()
					}
				}, []), Object(o.useEffect)(() => {
					j !== c && C(!c && (t || n))
				}, [j, c, t, n]), i.a.createElement("video", v({}, p, {
					ref: e => h.current = e,
					muted: !0,
					onClick: u
				}), i.a.createElement("source", {
					src: Object(O.a)(m || "")
				}))
			}
			var C = s("./src/reddit/components/Media/VideoBox/index.m.less"),
				y = s.n(C);
			const E = Object(c.c)({
				autoplayPref: b.c,
				consumed: h.a,
				loadTimes: h.f,
				metadata: h.h,
				started: h.k
			});

			function _(e) {
				const {
					autoplayPref: t,
					consumed: s,
					loadTimes: n,
					metadata: o,
					started: c
				} = Object(a.e)(t => E(t, e)), {
					postId: b,
					shouldLoad: h,
					source: x,
					height: f,
					isNotCardView: O,
					showFull: g,
					shouldPause: v,
					width: C,
					isListing: _,
					className: k,
					showCentered: S,
					originalSource: w,
					isPromoted: N,
					renderSmallMedia: T,
					onClick: I
				} = e, P = t && !(N && Object(d.hasAcceptableAds)()), R = Object(a.d)();

				function M(e) {
					R(e ? Object(m.r)(b) : Object(m.E)(b))
				}

				function L() {
					return R(Object(m.z)({
						postId: b
					}))
				}
				const F = r()(e => {
					if (s) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && R(Object(m.s)(b))
				}, 200);

				function B(e) {
					e.persist(), F(e)
				}

				function A(e) {
					var t;
					(o || U(e), c) || (t = e.timeStamp, R(Object(m.A)(b, t)))
				}

				function D(e) {
					R(Object(m.q)(b, e.timeStamp))
				}

				function U(e) {
					! function(e) {
						R(Object(m.D)({
							metadata: e,
							postId: b
						}))
					}({
						id: b,
						length: 1e3 * e.target.duration,
						originalHeight: e.target.videoHeight,
						originalWidth: e.target.videoWidth
					})
				}

				function H(e) {
					n || A(e), o || U(e), R(Object(m.C)(b))
				}

				function W() {
					const e = {};
					return S && (e.margin = "0 auto"), _ || (e.maxHeight = `${p.e}px`), i.a.createElement(j, {
						autoplay: P,
						className: Object(l.a)(u.a, y.a.styledVideo, {
							[y.a.renderSmallMedia]: T
						}),
						height: T ? void 0 : f,
						isListing: _,
						isNotCardView: O,
						key: b,
						loop: !0,
						onBufferingChange: M,
						onClick: I,
						onLoadStart: D,
						onLoadedData: A,
						onLoadedMetadata: U,
						onPause: L,
						onPlaying: H,
						onTimeUpdate: B,
						shouldLoad: h,
						shouldPause: v,
						showCentered: S,
						showFull: g,
						source: x,
						style: T ? void 0 : e,
						width: T ? void 0 : C
					})
				}
				return _ ? W() : i.a.createElement("div", {
					className: Object(l.a)(y.a.container, k, {
						[y.a.centered]: S
					})
				}, i.a.createElement("a", {
					href: w,
					target: "_blank",
					rel: "noopener noreferrer"
				}, W()))
			}
		},
		"./src/reddit/components/Media/index.m.less": function(e, t, s) {
			e.exports = {
				hiddenLink: "_3dhFVFchWAAFXfLFTa94n9",
				visibilityWrapper: "_1NSbknF8ucHV2abfCZw2Z1",
				displayNone: "_1Q2mF3u7v9hBVu_4bkC7R4",
				galleryMediaContainer: "_3ozFpM1W8BRdrzkr_ssGxZ",
				miniCardVideo: "_18_METUBD2i2iqGBz4ofw1",
				unblurButtonContainer: "_3jrT7JqZwfGWyxKf4SYuRj",
				unblurButton: "_2bcjL-4RRFQN5OUQMrcioo"
			}
		},
		"./src/reddit/components/ModActionsMenu/index.m.less": function(e, t, s) {
			e.exports = {
				ModActionsMenu: "_28noJDp6DzFWESejYQdpcD",
				modActionsMenu: "_28noJDp6DzFWESejYQdpcD"
			}
		},
		"./src/reddit/components/ModActionsMenu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				d = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				l = s("./src/reddit/selectors/tooltip.ts"),
				m = s("./src/reddit/components/ModActionsMenu/index.m.less"),
				u = s.n(m);
			const p = Object(i.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(l.b)(s)(e)
					}
				}),
				b = Object(o.b)(p, (e, t) => {
					let {
						dropdownId: s
					} = t;
					return {
						toggleDropdown: () => e(Object(a.h)({
							tooltipId: s
						}))
					}
				}),
				h = () => null;
			t.a = b(e => r.a.createElement("div", {
				className: u.a.ModActionsMenu,
				id: e.dropdownId,
				onClick: e.dropdownIsOpen ? h : e.onClick
			}, e.inCommentFlatlist ? r.a.createElement(c.a, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children) : r.a.createElement(d.c, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children)))
		},
		"./src/reddit/components/ModModeBanners/index.m.less": function(e, t, s) {
			e.exports = {
				banner: "_3FJq-cq7boH_EAWZsUPWY0",
				icon: "_1QOFlf2Sv2RU3pPqUKD6UD",
				staticBanner: "_14wV0QXuPq6IJL_pdl8sQs"
			}
		},
		"./src/reddit/components/ModModeFilteredReason/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/models/ModQueueTrigger/index.ts");
			const r = e => (e => !e.isApproved && !!Object(n.b)(e, n.a.AUTOMOD))(e) || (e => !e.isApproved && !!Object(n.b)(e, n.a.BAN_EVASION))(e) || (e => !e.isApproved && !!Object(n.b)(e, n.a.CROWD_CONTROL))(e) || (e => !e.isApproved && !!Object(n.b)(e, n.a.HATEFUL_CONTENT))(e)
		},
		"./src/reddit/components/ModModeFilteredReason/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/reddit/components/ModModeBanners/index.m.less"),
				c = s.n(a);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(r.a)(c.a.banner, c.a.staticBanner)
			}, d._("Loading filter reason…", null, {
				hk: "K3Ipd"
			})), m = Object(n.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ModModeBanners").then(s.bind(null, "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx"
				}
			}, {
				fallback: i.a.createElement(l, null),
				ssr: !1
			});
			t.a = m
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			}));
			const n = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				r = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				o = e => (e.numReports || 0) > 0
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/reddit/components/ModModeBanners/index.m.less"),
				c = s.n(a);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(r.a)(c.a.banner, c.a.staticBanner)
			}, d._("Loading reports…", null, {
				hk: "4gwdQw"
			})), m = Object(n.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ModModeBanners").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeReports/_ModModeReports.tsx"
				}
			}, {
				fallback: i.a.createElement(l, null),
				ssr: !1
			});
			t.a = m
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/Row.tsx"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/selectors/tooltip.ts"),
				x = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				f = s("./src/reddit/components/OverflowMenu/index.m.less"),
				O = s.n(f);
			const g = d.a.wrapped(u.a, "_Dropdown", O.a),
				v = Object(m.a)(g),
				j = d.a.button("MenuButton", O.a),
				C = d.a.wrapped(p.b, "DropdownRow", O.a),
				y = Object(a.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(h.b)(s)(e)
					}
				}),
				E = Object(i.b)(y, (e, t) => {
					let {
						dropdownId: s
					} = t;
					return {
						toggleDropdown: () => e(Object(l.h)({
							tooltipId: s
						}))
					}
				}),
				_ = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = E(e => o.a.createElement(j, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": n.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(c.a)(e.className, {
					[O.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: _(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId,
				"data-adclicklocation": x.b.OVERFLOW_MENU
			}, e.icon ? e.icon : o.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: O.a.MenuIcon
			}), o.a.createElement(v, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/Pill/PillButton/index.m.less": function(e, t, s) {
			e.exports = {
				primaryButton: "cmR5BF4NpBUm3DBMZCmJS",
				active: "_2dj14FxV-bfkwopj1jV_fF",
				redditStyle: "C64b9palJF2n26mG_1q3D",
				DangerButtonColors: "_1aqI4zAQaNw-k6Jp5j3WJz",
				dangerButtonColors: "_1aqI4zAQaNw-k6Jp5j3WJz",
				GoldButtonColors: "Vi9jnbb9vJd6ugulSJIAD",
				goldButtonColors: "Vi9jnbb9vJd6ugulSJIAD",
				PremiumButtonColors: "ntawTzO-ZquMyaWgqE0je",
				premiumButtonColors: "ntawTzO-ZquMyaWgqE0je",
				Icon: "_1V9TNuAloX-Z3moRIXc8tO",
				icon: "_1V9TNuAloX-Z3moRIXc8tO",
				isLeft: "HjpiNF5rj_I6fiMfmW-X7",
				isRight: "_1A_npZJAxjfyiijZ14jtzh",
				tabGroup: "_2jNQT-6WbFOjX2hdDWV56w",
				inactive: "_1g3g98ViMb36cM-peU17Jk"
			}
		},
		"./src/reddit/components/Pill/PillButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return u
			}));
			var n, r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Pill/PillButton/index.m.less"),
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.BUTTON = "BUTTON", e.TAB_GROUP = "TAB_GROUP"
			}(n || (n = {}));
			const l = {
					[n.BUTTON]: void 0,
					[n.TAB_GROUP]: c.a.tabGroup
				},
				m = (e, t) => {
					if (t !== n.BUTTON) return e ? c.a.active : c.a.inactive
				},
				u = e => {
					let {
						active: t = !0,
						children: s,
						className: n,
						disabled: r = !1,
						variant: a,
						...u
					} = e;
					return o.a.createElement("button", d({}, u, {
						className: Object(i.a)(c.a.primaryButton, l[a], m(t, a), n),
						disabled: r
					}), s)
				}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = s("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				d = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				l = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				m = s.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(c.a)(Object(i.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: i,
					post: c,
					redditStyle: l,
					theme: p,
					...b
				} = e;
				return r.a.createElement("div", u({
					className: Object(o.a)(m.a.backgroundWrapper, s),
					style: Object(a.c)(n, e),
					onClick: i,
					"data-adclicklocation": d.a.BACKGROUND
				}, b), t)
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
			s.d(t, "a", (function() {
				return _
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/ads/index.ts"),
				a = s("./src/reddit/components/AdViewability/index.tsx"),
				c = s("./src/reddit/helpers/trackers/gallery.ts"),
				d = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = s("./src/reddit/hooks/useTracking.ts");
			var m = r.a.memo(e => {
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
						i = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, o, i), r.a.createElement("div", {
						role: "presentation"
					}, r.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/connectors/PostViewable/index.ts"),
				b = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/telemetry.ts"),
				f = s("./src/lib/classNames/index.ts"),
				O = s("./src/lib/objectSelector/index.ts"),
				g = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				v = s("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				j = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				C = s("./src/reddit/components/PostContainer/index.m.less"),
				y = s.n(C);
			const E = Object(p.a)(() => Object(o.c)({
					basePixelMetadata: Object(O.a)((e, t) => {
						let {
							post: s
						} = t;
						return Object(h.b)(e, s.id)
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
						return Object(h.i)(e, {
							postId: s.id
						})
					},
					pageType: e => Object(x.d)(e).pageType
				})),
				_ = "post-container";
			class k extends r.a.Component {
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
						onClick: u,
						pageType: p,
						sendEvent: h,
						style: x,
						ref: O,
						shouldAddGalleryViewability: g = !0
					} = this.props, v = r.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: x,
						ref: O,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && e(() => u && u(s, l, t, o, p))(s), l.id && o) {
								const {
									source: e
								} = Object(i.t)(l, o);
								e && e.outboundUrl && h(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(f.a)(y.a.WrappedPost, n, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": _,
						id: d ? d(l.id) : l.id,
						tabIndex: -1,
						"data-adclicklocation": j.a.BACKGROUND
					}, s), C = !!l.media && l.media.type === b.o.VIDEO;
					return (e => l.media && Object(b.E)(l.media) && g ? r.a.createElement(m, {
						postId: l.id
					}, e) : e)((e => l.isSponsored || C ? r.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, e) : e)(v))
				}
			}
			t.b = E(Object(v.a)(Object(g.a)(Object(u.c)(k))))
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/helpers/trackers/postCollection.ts"),
				u = s("./src/reddit/components/PostFollow/index.m.less"),
				p = s.n(u);
			class b extends o.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: n
							},
							sendEvent: r
						} = this.props, o = !!n;
						r(e ? Object(m.o)({
							postId: s,
							isFollowed: o
						}) : Object(m.g)({
							postId: s,
							isFollowed: o
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
					} = this.props, r = this.state.isHovered, i = s.isFollowed;
					let a = i ? n.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : n.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && r && (a = n.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), o.a.createElement("button", {
						className: Object(c.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!s.isFollowed,
							[p.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, a)
				}
			}
			const h = Object(i.b)(() => Object(a.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(d.z)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(l.c)(b))
		},
		"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			const o = Object(n.createContext)({
					currentTime: 0,
					setCurrentTime: () => {},
					isLive: !1,
					setIsLive: () => {},
					totalTime: 0,
					setTotalTime: () => {}
				}),
				i = e => {
					let {
						children: t
					} = e;
					const [s, i] = Object(n.useState)(0), [a, c] = Object(n.useState)(!1), [d, l] = Object(n.useState)(0), m = {
						currentTime: s,
						setCurrentTime: i,
						isLive: a,
						setIsLive: c,
						totalTime: d,
						setTotalTime: l
					};
					return r.a.createElement(o.Provider, {
						value: m
					}, t)
				}
		},
		"./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = e => `PublicAccessNetwork--VideoShare--Modal-${e}`,
				o = Object(n.a)({
					resolved: {},
					chunkName: () => "VideoShareModal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("VideoShareModal").then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/VideoShareModal.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/VideoShareModal.tsx"
					}
				}, {
					ssr: !1
				});
			t.b = o
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, s) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/actions/urlRequested.ts"),
				l = s("./src/reddit/hooks/useOutboundClickTracking.ts"),
				m = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = s.n(u);
			const b = Object(i.b)(null, e => ({
					onNavigate: t => e(Object(d.a)(t))
				})),
				h = c.a.wrapped(e => {
					const t = Object(l.a)();
					return o.a.createElement("div", {
						className: e.className,
						dangerouslySetInnerHTML: {
							__html: e.html
						},
						onClick: s => {
							((e, t, s, n, r) => {
								if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
									e.preventDefault();
									const s = e.target.getAttribute("href");
									r && n(s, r), t(s)
								}
								e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), s && s(e)
							})(s, e.onNavigate, e.onClick, t, e.sourceElement)
						},
						style: {
							...e.style,
							"--RawHTMLDisplay-tr-even": Object(n.f)(Object(m.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(n.f)(Object(m.a)(e).line, .8)
						}
					})
				}, "StyledRawHTMLDisplay", p.a);
			t.a = b(Object(a.a)(h))
		},
		"./src/reddit/components/ReportFlow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/reddit/constants/colors.ts");
			const o = {
				backgroundColor: r.a.overlayReportFlow
			};
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "ReportFlow",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ReportFlow/_ReportFlow.tsx"
				}
			})
		},
		"./src/reddit/components/ReportFlow/new.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/reddit/constants/colors.ts");
			const o = {
					backgroundColor: r.a.overlayReportFlow
				},
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "ReportFlow",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx"
					}
				}),
				a = Object(n.a)({
					resolved: {},
					chunkName: () => "ReportFlowNew",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("ReportFlowNew").then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNew.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ReportFlow/_ReportFlowNew.tsx"
					}
				});
			t.b = a
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.m.less": function(e, t, s) {
			e.exports = {
				removalReasonButton: "_3IEDcFIIs_TeXsZtKZGzUd",
				TextWrapper: "smOzqVIOoNqmSJcyBX2N6",
				textWrapper: "smOzqVIOoNqmSJcyBX2N6",
				Button: "_1rNBkuuOkN2SorEXyRkYjB",
				button: "_1rNBkuuOkN2SorEXyRkYjB",
				ApproveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				approveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				RemoveButton: "_2OvUr_pd3kddsNP_f35S28",
				removeButton: "_2OvUr_pd3kddsNP_f35S28"
			}
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				c = s.n(a);
			const d = e => r.a.createElement("button", {
					className: Object(o.a)(c.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, e.children, e.text && r.a.createElement("span", {
					className: Object(o.a)(c.a.TextWrapper, e.textClassName)
				}, e.text, " ")),
				l = i.a.wrapped(d, "ApproveButton", c.a),
				m = i.a.wrapped(d, "RemoveButton", c.a),
				u = e => r.a.createElement("button", {
					className: Object(o.a)(c.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/components/RichTextEditor/Placeholder.m.less": function(e, t, s) {
			e.exports = {
				content: "_3Yo9aCwUoJBBuPKwf3r5cP",
				mCollapsed: "_225DoZxfrLcZu0fM8-Svk8",
				prompt: "_3CuuiBuYvA4VXTClabDCUK",
				toolbar: "_31gqZmjkDlF5-81EKQ7w_Y",
				topToolbar: "_6rO7u4xvTeWjMNR68asbw",
				bottomToolbar: "_2Qh8N3s0Z7NWIPCVBDCcxH"
			}
		},
		"./src/reddit/components/RichTextEditor/Placeholder.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/FocusableContent/index.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				c = s("./src/reddit/components/RichTextEditor/Placeholder.m.less"),
				d = s.n(c);
			t.a = e => {
				let {
					className: t,
					isCommentBoxDesignEnabled: s,
					isLoading: n,
					toolbarPosition: c
				} = e;
				return r.a.createElement("div", {
					className: t
				}, r.a.createElement(i.a, {
					isFocused: !1
				}, !s && "top" === c && r.a.createElement("div", {
					className: Object(o.a)(d.a.toolbar, d.a.topToolbar, Object(a.a)({
						isLoading: n
					}))
				}), r.a.createElement("div", {
					className: Object(o.a)(d.a.content, {
						[d.a.mCollapsed]: s
					})
				}, r.a.createElement("div", {
					className: Object(o.a)(d.a.prompt, Object(a.a)({
						isLoading: !0
					}))
				})), !s && "bottom" === c && r.a.createElement("div", {
					className: Object(o.a)(d.a.toolbar, d.a.bottomToolbar, Object(a.a)({
						isLoading: n
					}))
				})))
			}
		},
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, s) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.m.less": function(e, t, s) {
			e.exports = {
				InnerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				innerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				TooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				tooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				SpoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				spoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				isOpen: "_15VS32zBYFUDI5ssldQhEK",
				Component: "_3CBmNG6xIaLHHh1ts_10tN",
				component: "_3CBmNG6xIaLHHh1ts_10tN"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = s("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				m = s.n(l),
				u = s("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const b = ["left", "top"],
				h = ["left", "bottom"],
				x = u.a.span("InnerSpan", m.a),
				f = u.a.span("TooltipTarget", m.a),
				O = u.a.span("SpoilerWrapper", m.a),
				g = u.a.wrapped(e => {
					let {
						className: t,
						isOpen: s,
						...n
					} = e;
					return o.a.createElement(O, p({}, n, {
						className: Object(i.a)(t, {
							[m.a.isOpen]: s
						})
					}))
				}, "SpoilerWrapper", m.a),
				v = Object(d.a)(u.a.wrapped(c.b, "Component", m.a), [a.a.Click, a.a.Keydown]);
			class j extends o.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.onClick = e => {
						const {
							isOpen: t
						} = this.state, {
							onClickReveal: s
						} = this.props;
						t || (e.preventDefault(), e.stopPropagation(), this.setState({
							isOpen: !0
						}), null == s || s(e))
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.state.isOpen || this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						isOpen: !1,
						showTooltip: !1
					}
				}
				render() {
					const {
						isOpen: e,
						showTooltip: t
					} = this.state;
					return o.a.createElement(g, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, o.a.createElement(x, null, o.a.createElement(f, {
						innerRef: this.setTooltipTargetRef
					}), o.a.createElement(v, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: n.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: b,
						tooltipPosition: h
					}), this.props.children))
				}
			}
			t.a = j
		},
		"./src/reddit/components/RichTextJson/elements.m.less": function(e, t, s) {
			e.exports = {
				H1: "_7T4UafM1PdBGycd5na9nF",
				h1: "_7T4UafM1PdBGycd5na9nF",
				H2: "_1WODZhR-x-fbMu3MOL9cH1",
				h2: "_1WODZhR-x-fbMu3MOL9cH1",
				H3: "WFFrvt6_3z5B7MBcYKr8U",
				h3: "WFFrvt6_3z5B7MBcYKr8U",
				H4: "_2UlSUuiYR4BRv_FiLxCcu9",
				h4: "_2UlSUuiYR4BRv_FiLxCcu9",
				H5: "hnYPKCNkyo9X6QpCXHj1I",
				h5: "hnYPKCNkyo9X6QpCXHj1I",
				H6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				h6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				Hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				M: "_34q3PgLsx9zIU5BiSOjFoM",
				m: "_34q3PgLsx9zIU5BiSOjFoM",
				Pre: "_3GnarIQX9tD_qsgXkfSDz1",
				pre: "_3GnarIQX9tD_qsgXkfSDz1",
				Blockquote: "_28lDeogZhLGXvE95QRPeDL",
				blockquote: "_28lDeogZhLGXvE95QRPeDL",
				P: "_1qeIAgB0cPwnLhDF9XSiJM",
				p: "_1qeIAgB0cPwnLhDF9XSiJM",
				Li: "_3gqTEjt4x9UIIpWiro7YXz",
				li: "_3gqTEjt4x9UIIpWiro7YXz",
				Ul: "_33MEMislY0GAlB78wL1_CR",
				ul: "_33MEMislY0GAlB78wL1_CR",
				Ol: "_1eJr7K139jnMstd4HajqYP",
				ol: "_1eJr7K139jnMstd4HajqYP",
				B: "_12FoOEddL7j_RgMQN0SNeU",
				b: "_12FoOEddL7j_RgMQN0SNeU",
				I: "_7s4syPYtk5hfUIjySXcRE",
				i: "_7s4syPYtk5hfUIjySXcRE",
				U: "HoWuCifWxDx-PnwllGmZd",
				u: "HoWuCifWxDx-PnwllGmZd",
				Sub: "_2aQztsTwdz2uTN4arsyBD6",
				sub: "_2aQztsTwdz2uTN4arsyBD6",
				Sup: "_1jsgSPRO0cMQfs1UZrSovE",
				sup: "_1jsgSPRO0cMQfs1UZrSovE",
				Table: "MRH-njmSb5ZTkfb1o4dqv",
				table: "MRH-njmSb5ZTkfb1o4dqv",
				Tr: "s6JZe6869f81l9E_5G7Q9",
				tr: "s6JZe6869f81l9E_5G7Q9",
				Tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				Tdc: "_1LHijgw3WoeCUe8AUewfUB",
				tdc: "_1LHijgw3WoeCUe8AUewfUB",
				Tdr: "_3DqGFKR55y45L5IxBTgsFz",
				tdr: "_3DqGFKR55y45L5IxBTgsFz",
				Thl: "_4uv59XIILEFm6V3BmtSuR",
				thl: "_4uv59XIILEFm6V3BmtSuR",
				Thc: "_3TNkDptlyGOiWXvdX_acOB",
				thc: "_3TNkDptlyGOiWXvdX_acOB",
				Thr: "_1AUCpXmm3maPuEbUSe90Y8",
				thr: "_1AUCpXmm3maPuEbUSe90Y8",
				A: "_3t5uN8xUmg0TOwRCOGQEcU",
				a: "_3t5uN8xUmg0TOwRCOGQEcU"
			}
		},
		"./src/reddit/components/RichTextJson/elements.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "x", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "h", (function() {
				return u
			})), s.d(t, "k", (function() {
				return p
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "j", (function() {
				return h
			})), s.d(t, "g", (function() {
				return x
			})), s.d(t, "v", (function() {
				return f
			})), s.d(t, "i", (function() {
				return O
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "u", (function() {
				return j
			})), s.d(t, "d", (function() {
				return C
			})), s.d(t, "l", (function() {
				return y
			})), s.d(t, "m", (function() {
				return E
			})), s.d(t, "n", (function() {
				return _
			})), s.d(t, "t", (function() {
				return k
			})), s.d(t, "p", (function() {
				return S
			})), s.d(t, "o", (function() {
				return w
			})), s.d(t, "q", (function() {
				return N
			})), s.d(t, "s", (function() {
				return T
			})), s.d(t, "r", (function() {
				return I
			})), s.d(t, "a", (function() {
				return P
			})), s.d(t, "w", (function() {
				return R
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/controls/OutboundLink/index.tsx"),
				i = s("./src/reddit/components/RichTextJson/elements.m.less"),
				a = s.n(i),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [c.a.div("H1", a.a), c.a.div("H2", a.a), c.a.div("H3", a.a), c.a.div("H4", a.a), c.a.div("H5", a.a), c.a.div("H6", a.a)],
				m = c.a.hr("Hr", a.a),
				u = c.a.code("M", a.a),
				p = c.a.pre("Pre", a.a),
				b = c.a.blockquote("Blockquote", a.a),
				h = c.a.p("P", a.a),
				x = c.a.li("Li", a.a),
				f = c.a.ul("Ul", a.a),
				O = c.a.ol("Ol", a.a),
				g = c.a.strong("B", a.a),
				v = c.a.em("I", a.a),
				j = c.a.span("U", a.a),
				C = e => r.a.createElement("del", e),
				y = c.a.sub("Sub", a.a),
				E = c.a.sup("Sup", a.a),
				_ = c.a.table("Table", a.a),
				k = c.a.tr("Tr", a.a),
				S = c.a.td("Tdl", a.a),
				w = c.a.td("Tdc", a.a),
				N = c.a.td("Tdr", a.a),
				T = c.a.th("Thl", a.a),
				I = c.a.th("Thc", a.a),
				P = (c.a.th("Thr", a.a), c.a.wrapped(e => r.a.createElement(o.b, e), "A", a.a)),
				R = c.a.wrapped(d.a, "A", a.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ",
				Component: "_1GPL7pYOAn5YHfoARxZ8-F",
				component: "_1GPL7pYOAn5YHfoARxZ8-F"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return j
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "a", (function() {
				return y
			})), s.d(t, "b", (function() {
				return E
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/findLastIndex.js"),
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/sentry/index.ts"),
				m = s("./src/reddit/components/Media/BlurredContent.tsx"),
				u = s("./src/reddit/constants/elementClassNames.ts"),
				p = s("./src/reddit/models/RichTextJson/index.ts"),
				b = s("./src/reddit/components/RichTextJson/media.tsx"),
				h = s("./src/reddit/components/RichTextJson/renderers.tsx"),
				x = s("./src/reddit/components/RichTextJson/index.m.less"),
				f = s.n(x);
			const O = s("./src/lib/lessComponent.tsx").a.div("Container", f.a),
				g = Object(d.a)(e => {
					let {
						flairStyleTemplate: t,
						theme: s,
						...n
					} = e;
					return a.a.createElement(O, n)
				}),
				v = e => e.e === p.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== p.v || !!e.c && !e.c.every(e => e.e === p.B && !e.t),
				j = e => o()(e, v),
				C = e => e.findIndex(v),
				y = e => {
					const {
						altText: t,
						className: s,
						content: n,
						isListing: r,
						isNSFW: o,
						isNsfwBlockingModalEligible: i,
						isSpoiler: d,
						onClickRevealBlurred: l,
						postId: x,
						renderMediaAsLinks: v,
						rtJsonElementProps: y,
						useExplicitTextColor: E,
						shouldBlur: _,
						onClickRevealSpoilerText: k,
						mediaProps: S
					} = e, w = n.document, N = [], T = e.mediaMetadata || null, I = C(w), P = j(w);
					if (_ && !r && !i) return a.a.createElement(O, {
						className: Object(c.a)(u.j, s)
					}, a.a.createElement("div", {
						className: f.a.unblurButtonContainer
					}, a.a.createElement("button", {
						className: f.a.unblurButton,
						onClick: l
					}, Object(m.b)(!!o, !!d))));
					if (-1 !== I)
						for (let a = I; a <= P; a++) {
							const e = w[a];
							switch (e.e) {
								case p.k:
									N.push(h.c(e, y, a));
									break;
								case p.l:
									N.push(h.d(a));
									break;
								case p.b:
									N.push(h.a(e, T, y, a));
									break;
								case p.c:
									N.push(h.b(e, a));
									break;
								case p.p:
									N.push(h.f(e, T, y, a, k));
									break;
								case p.A:
									N.push(h.h(e, T, y, a, k));
									break;
								case p.v:
									N.push(h.g(e, T, y, a, k, S));
									break;
								case p.h:
									N.push(Object(b.a)(e, a));
									break;
								case p.m:
								case p.a:
								case p.E:
									N.push(...Object(b.b)({
										node: e,
										key: a,
										rtJsonElementProps: y,
										mediaMetadata: T,
										renderMediaAsLinks: v,
										postId: x,
										altText: t,
										mediaProps: S
									}))
							}
						}
					return E ? a.a.createElement(O, {
						className: Object(c.a)(u.j, s)
					}, N) : a.a.createElement(g, {
						className: Object(c.a)(u.j, s),
						flairStyleTemplate: e.flairStyleTemplate,
						redditStyle: e.redditStyle
					}, N)
				};
			class E extends a.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => n.fbt._("Something went wrong while trying to render this", null, {
						hk: "2UcBL3"
					})
				}
				componentDidCatch(e) {
					this.setState({
						hasError: !0
					}), this.logError(e)
				}
				logError(e) {
					l.c.withScope(t => {
						t.setExtra("objectInfo", this.props.rtJsonElementProps.renderingObjectInfo), t.setTag("rtjson", "rendering"), l.c.captureException(e)
					})
				}
				render() {
					const {
						renderFallback: e = this.renderDefaultFallback,
						...t
					} = this.props;
					if (this.hasError || this.state.hasError) return e();
					try {
						return y(t)
					} catch (s) {
						return this.hasError = !0, this.logError(s), e()
					}
				}
			}
		},
		"./src/reddit/components/RichTextJson/media.m.less": function(e, t, s) {
			e.exports = {
				A: "_1PlxnYkerei9iGJsL9JyrP",
				a: "_1PlxnYkerei9iGJsL9JyrP",
				ImageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				imageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				MediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mHasCaption: "c1cmiB1jfdq4sxidlPDAx",
				hasSmallMedia: "_1yyTGHoIL7vZ6fNJ2-s3dL",
				CommentGifWrapper: "FyBv9YqsilS7j6RNlD9id",
				commentGifWrapper: "FyBv9YqsilS7j6RNlD9id",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				renderSmallMedia: "_18dflNtNlz_sHfoBK19VZn",
				reload: "_2O6ZaJBTx6OGys4GI6Egy-",
				Giphy: "_3YoP8vEuPSoGYyKJc1eUli",
				giphy: "_3YoP8vEuPSoGYyKJc1eUli",
				GiphyLogo: "_3R8qf79yqt1VjL8vHhrdMt",
				giphyLogo: "_3R8qf79yqt1VjL8vHhrdMt"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return I
			})), s.d(t, "b", (function() {
				return R
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/config.ts"),
				c = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				d = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				m = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				u = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/isComment.ts"),
				h = s("./src/reddit/helpers/richTextJson/index.ts"),
				x = s("./src/reddit/icons/fonts/index.tsx"),
				f = s("./src/reddit/models/RichTextJson/index.ts");
			var O = e => o.a.createElement("svg", {
					width: "20",
					height: "20",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					className: e.className
				}, o.a.createElement("path", {
					d: "M2 1.714h2.286v16.571H2V1.714z",
					fill: "#04FF8E"
				}), o.a.createElement("path", {
					d: "M15.715 6.286H18v12h-2.285v-12z",
					fill: "#8E2EFF"
				}), o.a.createElement("path", {
					d: "M2 17.714h16V20H2v-2.286z",
					fill: "#00C5FF"
				}), o.a.createElement("path", {
					d: "M2 0h9.143v2.286H2V0z",
					fill: "#FFF152"
				}), o.a.createElement("path", {
					d: "M15.714 4.571V2.286h-2.286V0h-2.285v6.857H18V4.571",
					fill: "#FF5B5B"
				}), o.a.createElement("path", {
					d: "M15.715 9.143V6.857H18",
					fill: "#551C99"
				}), o.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M11.143 0v2.286H8.857",
					fill: "#999131"
				})),
				g = s("./src/reddit/components/RichTextJson/elements.tsx"),
				v = s("./src/reddit/components/RichTextJson/media.m.less"),
				j = s.n(v),
				C = s("./src/lib/lessComponent.tsx"),
				y = s("./src/reddit/helpers/media/index.ts");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = /\/(\w+)\/asset\/(\w+)\//,
				k = C.a.wrapped(g.a, "A", j.a),
				S = C.a.wrapped(l.a, "ImageBox", j.a),
				w = C.a.wrapped(e => o.a.createElement("p", e), "Caption", j.a),
				N = C.a.div("Placeholder", j.a),
				T = C.a.wrapped(e => {
					let {
						className: t,
						e: s,
						renderSmallMedia: a,
						onReload: c,
						...d
					} = e;
					const l = s === f.E ? n.fbt._("Processing video...", null, {
							hk: "3SXDRi"
						}) : n.fbt._("Processing image...", null, {
							hk: "1qwmbc"
						}),
						[m, u] = Object(r.useState)(!1);
					return Object(r.useEffect)(() => {
						c && setTimeout(() => {
							u(!0)
						}, 1500)
					}), o.a.createElement(N, E({
						className: Object(i.a)(t, {
							[j.a.renderSmallMedia]: a,
							[j.a.reload]: !!c
						}),
						style: {
							"--placeholder-content-text": `'${l}'`
						}
					}, d), !!c && m && o.a.createElement(p.t, {
						priority: p.c.Plain,
						className: j.a.ModalTopicsErrorButton,
						Icon: Object(x.b)("refresh"),
						text: n.fbt._("Reload", null, {
							hk: "3Yt2Hl"
						}),
						onClick: c
					}))
				}, "Placeholder", j.a),
				I = (e, t) => {
					let {
						c: s,
						x: n,
						y: r
					} = e;
					return o.a.createElement("div", {
						className: j.a.MediaWrapper
					}, o.a.createElement(m.a, {
						height: r,
						isListing: !1,
						key: t,
						showCentered: !0,
						showFull: !0,
						width: n
					}, o.a.createElement(d.a, {
						isListing: !1,
						source: s,
						height: r,
						width: n,
						showCentered: !0,
						showFull: !0
					})))
				},
				P = (e, t, s) => {
					const n = e.c;
					let r = "";
					return s && (s.e === f.s ? r = s.s.u : s.e === f.r ? r = s.s.gif : s.e === f.t && (r = (e => {
						const t = _.exec(e);
						return t ? `${a.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(s.dashUrl))), r ? o.a.createElement(k, {
						href: r,
						key: t,
						title: n
					}, n || r) : null
				},
				R = e => {
					let {
						node: t,
						key: s,
						rtJsonElementProps: n,
						mediaMetadata: r,
						renderMediaAsLinks: a,
						postId: d,
						altText: l,
						mediaProps: p
					} = e;
					const x = f.F(r, t.id);
					if (a) return [P(t, s, x)];
					const g = [];
					return !x || x.e === f.s && null === x.s.x && null === x.s.y ? g.push(((e, t, s, n) => o.a.createElement(T, {
						e,
						key: t,
						renderSmallMedia: s,
						onReload: n
					}))(t.e, s, null == p ? void 0 : p.renderSmallMedia, null == p ? void 0 : p.onReload)) : x.e === f.s ? g.push(((e, t, s, n, r) => {
						let {
							id: a,
							s: c,
							p: d
						} = e;
						const {
							alignLeft: l,
							renderSmallMedia: u,
							onClick: p
						} = r || {};
						let b = c;
						return u && (b = Object(y.i)(240, 20, c, d)), o.a.createElement("div", {
							className: Object(i.a)(j.a.MediaWrapper, {
								[j.a.mHasCaption]: s,
								[j.a.hasSmallMedia]: u
							})
						}, o.a.createElement(m.a, {
							height: b.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: b.x
						}, o.a.createElement(S, {
							altText: n,
							originalSource: c.u,
							postId: a,
							source: b.u,
							height: b.y,
							width: b.x,
							shouldBlur: !1,
							showCentered: !0,
							showFull: !0,
							isListing: !1,
							alignLeft: l,
							renderSmallMedia: u,
							onClick: p
						})))
					})(x, s, !!t.c, l, p)) : x.e === f.r ? g.push(((e, t, s, n, r) => {
						let {
							id: a,
							ext: c,
							s: d
						} = e;
						if (Object(h.h)(a)) {
							const e = n.renderingObjectInfo,
								l = !!e && Object(b.b)(e),
								m = c || Object(h.g)(a);
							return o.a.createElement("div", {
								className: Object(i.a)({
									[j.a.MediaWrapper]: !l,
									[j.a.CommentGifWrapper]: l,
									[j.a.mHasCaption]: s
								})
							}, o.a.createElement(k, {
								href: m,
								key: t,
								target: "_blank"
							}, d.mp4 ? o.a.createElement("video", {
								className: j.a.Giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0,
								onClick: null == r ? void 0 : r.onClick
							}, o.a.createElement("source", {
								src: d.mp4
							})) : m), o.a.createElement(O, {
								className: j.a.GiphyLogo
							}))
						}
						return o.a.createElement("div", {
							className: Object(i.a)(j.a.MediaWrapper, {
								[j.a.mHasCaption]: s,
								[j.a.hasSmallMedia]: null == r ? void 0 : r.renderSmallMedia
							})
						}, o.a.createElement(m.a, {
							height: d.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: d.x
						}, o.a.createElement(u.a, {
							height: d.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: d.mp4,
							width: d.x,
							postId: a,
							source: d.mp4,
							shouldPause: !1,
							showCentered: !(null == r ? void 0 : r.renderSmallMedia),
							shouldLoad: !0,
							showFull: !0,
							renderSmallMedia: null == r ? void 0 : r.renderSmallMedia,
							onClick: null == r ? void 0 : r.onClick
						})))
					})(x, s, !!t.c, n, p)) : x.e === f.t && g.push(((e, t, s, n) => {
						let {
							hlsUrl: r,
							dashUrl: a,
							x: d,
							y: l,
							isGif: u
						} = e;
						return o.a.createElement("div", {
							className: Object(i.a)(j.a.MediaWrapper, {
								[j.a.mHasCaption]: s
							})
						}, o.a.createElement(m.a, {
							height: l,
							isListing: !1,
							isVideo: !0,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: d
						}, o.a.createElement(c.b, {
							shouldLoad: !0,
							shouldPause: !0,
							shouldCreateFakeThumbnail: !0,
							autoPlay: u,
							hlsSource: r,
							mpegDashSource: a,
							postId: n,
							isGif: u
						})))
					})(x, s, !!t.c, d)), t.c && g.push(((e, t) => o.a.createElement(w, {
						key: t
					}, e))(t.c, `caption${s}`)), g
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return I
			})), s.d(t, "d", (function() {
				return P
			})), s.d(t, "a", (function() {
				return R
			})), s.d(t, "b", (function() {
				return M
			})), s.d(t, "f", (function() {
				return L
			})), s.d(t, "h", (function() {
				return B
			})), s.d(t, "g", (function() {
				return A
			})), s.d(t, "i", (function() {
				return D
			})), s.d(t, "e", (function() {
				return U
			}));
			var n = s("./src/lib/unicodeUtils/index.ts"),
				r = s("./node_modules/lodash/reduce.js"),
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./src/reddit/components/RichTextJson/elements.tsx"),
				d = s("./node_modules/uuid/dist/esm-browser/v4.js"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/models/Product/index.ts"),
				u = s("./src/reddit/models/RichTextJson/index.ts"),
				p = s("./src/reddit/selectors/telemetry.ts"),
				b = s("./src/higherOrderComponents/makeAsync.tsx");
			var h = Object(b.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("RichTextJsonEmoteTooltip").then(s.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				x = s("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				f = s.n(x);
			const O = 1e3,
				g = 1e3;
			var v;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(v || (v = {}));
			class j extends a.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = v.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = v.Inside, setTimeout(() => {
							this.mouseLocation === v.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, O)
					}, this.onMouseOut = () => {
						this.mouseLocation = v.Outside, setTimeout(() => {
							this.mouseLocation !== v.Inside && this.setState({
								tooltipOpen: !1
							})
						}, g)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const s = p.o(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...s,
								actionInfo: {
									...s.actionInfo,
									reason: this.props.node.id
								},
								subreddit: p.kb(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let s, n, r;
					t.e === u.s ? (s = t.s.x, n = t.s.y, r = t.s.u) : t.e === u.r && (s = t.s.x, n = t.s.y, r = t.s.gif);
					const o = this.state.tooltipOpen ? Object(d.a)() : void 0;
					return r ? a.a.createElement("div", {
						className: f.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, a.a.createElement("img", {
						id: o,
						src: r,
						width: s,
						height: n,
						title: `:${Object(m.b)(e.id)}:`
					}), this.state.tooltipOpen && a.a.createElement(h, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: `${o}`,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var C = Object(l.c)(j),
				y = s("./src/reddit/components/RichTextJson/media.tsx"),
				E = s("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				_ = s("./src/reddit/components/SubredditMention/index.tsx"),
				k = s("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				S = s("./src/reddit/helpers/isComment.ts"),
				w = s("./src/reddit/helpers/isPost.ts"),
				N = s("./src/reddit/helpers/richTextJson/index.ts"),
				T = s("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const I = (e, t, s) => {
					const n = e.c || [],
						r = e.l,
						o = [],
						i = n.length;
					for (let a = 0; a < i; a++) {
						const e = n[a];
						o.push(e.e === u.x ? e.t : U(e, t, a))
					}
					const d = c.x[r - 1];
					return a.a.createElement(d, {
						key: s
					}, o)
				},
				P = e => a.a.createElement(c.e, {
					key: e
				}),
				R = (e, t, s, n, r) => {
					const o = e.c;
					if (!o) return;
					const i = o.length,
						d = [];
					for (let a = 0; a < i; a++) d.push(F(o[a], t, s, a, r));
					return a.a.createElement(c.c, {
						key: n
					}, d)
				},
				M = (e, t) => {
					const s = e.c;
					return a.a.createElement(c.k, {
						key: t
					}, a.a.createElement(c.h, null, s.reduce((e, t, s, n) => e += t.t + (s < n.length ? "\n" : ""), "")))
				},
				L = (e, t, s, n, r) => {
					const o = e.c,
						i = [],
						d = o.length;
					for (let m = 0; m < d; m++) {
						const e = o[m].c;
						e && e.length && i.push(a.a.createElement(c.g, {
							key: m
						}, e.map((e, n) => F(e, t, s, n, r))))
					}
					const l = e.o ? c.i : c.v;
					return a.a.createElement(l, {
						key: n
					}, i)
				},
				F = (e, t, s, n, r) => {
					switch (e.e) {
						case u.b:
							return R(e, t, s, n, r);
						case u.c:
							return M(e, n);
						case u.k:
							return I(e, s, n);
						case u.l:
							return P(n);
						case u.p:
							return L(e, t, s, n, r);
						case u.v:
							return A(e, t, s, n, r);
						case u.A:
							return B(e, t, s, n, r)
					}
				},
				B = (e, t, s, n, r) => {
					const o = e.c,
						i = e.h,
						d = o.length,
						l = i.length,
						m = [],
						u = [],
						p = [];
					for (let c = 0; c < l; c++) {
						const e = i[c],
							{
								H: n,
								D: o
							} = G(e.a),
							{
								c: d = []
							} = e;
						m.push(a.a.createElement(n, {
							key: c
						}, D(d, t, s, r))), p[c] = o
					}
					for (let b = 0; b < d; b++) {
						const e = o[b],
							n = e.length,
							i = [];
						for (let o = 0; o < n; o++) {
							const n = p[o],
								{
									c = []
								} = e[o];
							i.push(a.a.createElement(n, {
								key: o
							}, D(c, t, s, r)))
						}
						u.push(a.a.createElement(c.t, {
							key: b
						}, i))
					}
					return a.a.createElement(c.n, {
						key: n
					}, a.a.createElement("thead", null, a.a.createElement(c.t, null, m)), a.a.createElement("tbody", null, u))
				},
				A = (e, t, s, n, r, o) => {
					if (!e.c || !e.c.length) return (e => a.a.createElement(c.j, {
						key: e
					}, a.a.createElement("br", null)))(n);
					const i = e.c[0];
					return i.e !== u.m && i.e !== u.a || !Object(N.h)(i.id) ? a.a.createElement(c.j, {
						key: n
					}, D(e.c, t, s, r)) : Object(y.b)({
						node: i,
						key: n,
						rtJsonElementProps: s,
						mediaMetadata: t,
						mediaProps: o
					})
				},
				D = (e, t, s, n) => {
					const r = [],
						o = e.length;
					for (let i = 0; i < o; i++) {
						const o = e[i];
						if (o.e === u.B) r.push(H(o, i));
						else if (o.e === u.y) r.push(a.a.createElement(E.a, {
							key: i,
							onClickReveal: n
						}, D(o.c, t, s, n)));
						else if (o.e === u.n) r.push(a.a.createElement("br", {
							key: i
						}));
						else if (o.e === u.m || o.e === u.a) {
							if (o.id.startsWith("emote|")) {
								const e = u.F(t, o.id);
								e && r.push(a.a.createElement(C, {
									key: i,
									node: o,
									media: e
								}))
							}
						} else r.push(U(o, s, i))
					}
					return r
				},
				U = (e, t, s) => {
					switch (e.e) {
						case u.o:
							const n = H({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(k.b)(e.u)) return a.a.createElement(c.w, {
								to: e.u,
								key: s,
								title: e.a
							}, n);
							let r, o;
							const i = Object(T.a)(t),
								d = t.renderingObjectInfo;
							return d && Object(w.b)(d) && (r = d.postId), d && Object(S.b)(d) && (o = d.id, r = d.postId), a.a.createElement(c.a, {
								href: e.u,
								key: s,
								title: e.a,
								sourceElement: i,
								postId: r,
								commentId: o
							}, n);
						case u.z:
							return a.a.createElement(_.b, {
								key: s,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case u.C:
						case u.D:
							return a.a.createElement(c.a, {
								href: `/u/${e.t}/`,
								key: s
							}, `${e.l?"/":""}u/${e.t}`);
						case u.g:
						case u.w:
							return a.a.createElement(c.a, {
								href: e.t,
								key: s
							}, e.t)
					}
				},
				H = (e, t) => {
					const {
						f: s,
						t: r
					} = e, o = [];
					if (!s) return V(0, r, t);
					const i = Object(n.a)(r);
					let a = 0,
						c = 0;
					const d = s.length;
					for (; a < d; a++) {
						const [e, t, n] = s[a], d = t + n, l = i[t], m = i[d] - l;
						l > c && o.push(V(0, r.substr(c, l - c), `between${a}`)), o.push(V(e, r.substr(l, m), a)), c = l + m
					}
					return c < r.length && o.push(V(0, r.substr(c), `remaining${a}`)), o
				},
				W = {
					[u.j.monospace]: c.h,
					[u.j.bold]: c.b,
					[u.j.italic]: c.f,
					[u.j.underline]: c.u,
					[u.j.strikethrough]: c.d,
					[u.j.subscript]: c.l,
					[u.j.superscript]: c.m
				},
				V = (e, t, s) => {
					let n = t;
					return n = o()(W, (t, n, r) => e & parseInt(r, 10) ? a.a.createElement(n, {
						key: s
					}, t) : t, n)
				},
				G = e => {
					switch (e) {
						case u.f:
							return {
								H: c.r, D: c.q
							};
						case u.d:
							return {
								H: c.r, D: c.o
							};
						case u.e:
						default:
							return {
								H: c.r, D: c.p
							}
					}
				}
		},
		"./src/reddit/components/SearchDiscoveryUnits/HeroUnit/index.m.less": function(e, t, s) {
			e.exports = {
				postContainer: "_3W4fKI_ey_jDfiIO7ElMuP",
				eventMeta: "_2IeaiLn4GyfAXKD1TLrIS1",
				postContent: "_3zoWB97jg8GAUJCl4XA57a",
				postItemMetaContainer: "_3xctgCPJ_3knmtE3O9TQzE",
				postItemTitleContainer: "_3CAq9fn45Es59QdDzgtbhZ",
				postItemFlatlistContainer: "oNxebZMPvUlTJIOtprxhP",
				mediaWrapper: "_1eIKxpeFNBTQ699qAcQRbd",
				marginCancel: "_3IElQYxAJq_0qRyeyMDc_K",
				twitterEmbed: "Tzfi4PWE-V9cQ78MJ3GkX",
				promotedTrend: "_1yoxdnJLJUmMiTSTn_QkNJ",
				mediaContent: "_1zcwL6v8t8G0OHvf5D4WW-",
				textMediaWrapper: "_2ZlSdmjvWREfUPvdtzIAN_",
				textMedia: "_2dnz6aKPWeFF1opQ_XsTYW",
				seeMore: "_2oliTAoFFxS1mse-sOZinV",
				adLinkWrapper: "p35vRG-PK5zfK-G5gjGAr",
				outboundLink: "_16eWoJfxv365opQYh3dOAJ",
				ctaExperiment: "_1fSEjc0jhvt02_0z07145y",
				adCallToAction: "BMx4T197BjzZgmRjegR7y",
				active: "_28VWbryTIGJPb62Ey50lm8",
				redditStyle: "n1f3mSINfKiMWmz1fdi1o"
			}
		},
		"./src/reddit/components/SearchNSFWToggle/SearchNSFWToggle.m.less": function(e, t, s) {
			e.exports = {
				searchNSFWToggle: "S53DUJItOf0GhJnniZ_fP",
				searchNsfwToggle: "S53DUJItOf0GhJnniZ_fP",
				searchNSFWToggleLabel: "_21fWc_5nZQR--Hc7UhjtY9",
				searchNsfwToggleLabel: "_21fWc_5nZQR--Hc7UhjtY9"
			}
		},
		"./src/reddit/components/SearchPost/index.m.less": function(e, t, s) {
			e.exports = {
				postContainer: "_2dkUkgRYbhbpU_2O2Wc5am",
				mFirst: "_28efb5XEIggTEMzT5v9i61",
				eventMeta: "_1rd6n9Xvtg4-5Vw7E3NhEh",
				postContent: "_2i5O0KNpb9tDq0bsNOZB_Q",
				postItemMetaContainer: "_37TF67KpZQl9SHbiAhz3mf",
				postItemWarningContainer: "_1nfcZWg35_OmccxqivQ1EN",
				postItemTitleContainer: "_19FzInkloQSdrf0rh3Omen",
				postItemFlatlistContainer: "HNL__wz5plDpzJe5Lnn",
				outboundLink: "a6Bzb7gqvN3mqBOAEyFIv",
				titleMedium: "_1FT0e6kh1BBb_oALAMW_l7",
				titleTextColor: "_1-SZ3VwLjbFwTzaZvU8FBX",
				thumbnail: "_2r9BZFotuBbLYnijAaskeZ",
				blurred: "rIj9lvusQvb0-Mf16X6ZL",
				container: "PrfaR-luawcEBK2dhGuDp",
				thumbnailContainer: "Gk-MlLujgqsaX1n-sGa_O",
				syntaxHighlight: "_1Nh8xLEUG3orjY1k1aijj",
				paddingSide: "_2n04GrCyhhQf-Kshn7akmH",
				paddingRight: "_1yBpz1MEPxxYTxjlEilGtB",
				postTitleVisibility: "_1SAKlLic4t9BBtiiE-Z6ob",
				postTitleColors: "nbO8VWsMIB-Mv-tIa37NF",
				backgroundWrapper: "UcytmAhLeRTIrWR81xl4P",
				inline: "_1AKeAGcglmBjK1SUUXNFti"
			}
		},
		"./src/reddit/components/SearchPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return G
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/lib/getShortenedLink.ts"),
				c = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				m = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				u = s("./src/reddit/components/ModModeReports/index.tsx"),
				p = s("./src/reddit/components/ModModeReports/helpers.ts"),
				b = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				h = s("./src/reddit/components/PostContainer/index.tsx"),
				x = s("./src/reddit/components/PostTitle/index.tsx"),
				f = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				O = s("./src/reddit/components/SearchPostFlatlist/index.tsx"),
				g = s("./src/reddit/components/SearchPostMeta/index.tsx"),
				v = s("./src/reddit/components/SearchWarnings/index.tsx"),
				j = s("./src/reddit/components/Thumbnail/index.tsx"),
				C = s("./node_modules/react-redux/es/index.js"),
				y = s("./node_modules/reselect/es/index.js"),
				E = s("./src/reddit/actions/post.ts"),
				_ = s("./src/reddit/contexts/PageLayer/index.tsx"),
				k = s("./src/reddit/selectors/moderatorPermissions.ts"),
				S = s("./src/reddit/selectors/poll/index.ts"),
				w = s("./src/reddit/selectors/postFlair.ts"),
				N = s("./src/reddit/selectors/posts.ts"),
				T = s("./src/reddit/selectors/user.ts");
			const I = {
					crosspost: N.d,
					isActive: N.j,
					isLoggedIn: T.R,
					moderatorPermissions: k.m,
					modModeEnabled: _.U,
					poll: S.e,
					showEditFlair: w.a,
					flairStyleTemplate: _.W
				},
				P = () => Object(y.c)(I);
			var R = s("./src/reddit/contexts/Post/index.tsx"),
				M = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				L = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				F = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				B = s("./src/reddit/models/Media/index.ts"),
				A = s("./src/lib/isUrl/index.ts"),
				D = s("./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx"),
				U = s("./src/reddit/components/SearchPost/index.m.less"),
				H = s.n(U);

			function W() {
				return (W = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const V = Object(i.a)(e => {
					const {
						className: t,
						crosspost: s,
						eventFactory: i,
						first: C,
						flairStyleTemplate: y,
						isLoggedIn: E,
						isOverlay: _,
						moderatorPermissions: k,
						modModeEnabled: S,
						onClickPost: w,
						onClickPostAuthor: N,
						onClickPostCommunity: T,
						onIgnoreReports: I,
						poll: P,
						post: R,
						redditStyle: U,
						searchQuery: V,
						showBulkActionCheckbox: G,
						subredditOrProfile: K,
						title: q
					} = e, z = U ? void 0 : y, J = s || void 0, Y = Object(L.a)(k), Q = Object(m.a)(R), X = Object(p.c)(R), Z = Object(j.c)({
						crosspost: s,
						post: R,
						url: void 0,
						usePreview: !1
					}), $ = Z && Object(A.a)(Z), ee = !!R.media && Object(B.H)(R.media), te = !E, se = Object(n.useMemo)(() => q ? void 0 : Object(D.a)(V, e => r.a.createElement("span", {
						className: Object(o.a)(H.a.syntaxHighlight)
					}, e), e => e), [q, V]), ne = {
						flairStyleTemplate: z,
						isOverlay: _,
						onClickPostAuthor: N,
						onClickPostCommunity: T,
						post: R,
						shouldShowSubscribeButton: te,
						subredditOrProfile: K
					}, re = null != q ? q : r.a.createElement("div", {
						className: Object(o.a)(H.a.paddingSide, H.a.postItemTitleContainer)
					}, r.a.createElement("div", null, r.a.createElement(x.c, {
						format: se,
						hideSourceLink: !0,
						poll: P,
						post: R,
						redditStyle: !0,
						size: x.b.Medium,
						isOverlay: _,
						hideNSFWSpoilerFlair: !0
					}), R.source && !J && r.a.createElement(M.a, {
						className: H.a.outboundLink,
						href: R.source.url,
						isSponsored: R.isSponsored,
						postId: R.id,
						source: R.source
					}, Object(a.a)(R))), $ && r.a.createElement("div", {
						className: H.a.thumbnailContainer
					}, r.a.createElement(j.b, {
						className: H.a.thumbnail,
						crosspost: J && R,
						isMeta: R.isMeta,
						post: J || R,
						redditStyle: U,
						templatePlaceholderImage: z && z.postPlaceholderImage,
						removeLink: ee
					}))), oe = r.a.createElement(h.b, {
						className: Object(o.a)(H.a.postContainer, Object(F.a)(e), C ? H.a.mFirst : void 0, t),
						eventFactory: i,
						isOverlay: _,
						onClick: w,
						post: R,
						style: {
							...Object(F.d)(e),
							...Object(F.b)(z)
						}
					}, r.a.createElement(b.a, {
						"data-click-id": "background",
						flairStyleTemplate: z,
						redditStyle: !0
					}, r.a.createElement(c.a, {
						className: H.a.eventMeta,
						post: R
					}), r.a.createElement("div", {
						className: Object(o.a)(H.a.postContent, {
							[H.a.showBulkActionCheckbox]: G
						}),
						"data-click-id": "body"
					}, r.a.createElement(g.c, W({
						className: Object(o.a)(H.a.paddingSide, H.a.postItemMetaContainer),
						key: "PostMeta"
					}, ne)), r.a.createElement(v.a, {
						className: Object(o.a)(H.a.paddingSide, H.a.postItemWarningContainer),
						isSpoiler: R.isSpoiler,
						isNSFW: R.isNSFW,
						isQuarantined: null == K ? void 0 : K.isQuarantined
					}), re, S && Y && Q && r.a.createElement(l.a, {
						thing: R
					}), S && Y && X && r.a.createElement(u.a, {
						onIgnoreReports: I,
						reportable: R
					}), r.a.createElement(O.c, {
						className: Object(o.a)(H.a.paddingSide, H.a.postItemFlatlistContainer),
						post: R
					}), r.a.createElement(d.d, null))));
					return r.a.createElement(f.b, null, oe)
				}),
				G = Object(R.b)((e => t => {
					const s = Object(_.eb)(),
						n = ((e, t) => {
							let {
								postId: s
							} = t;
							return {
								onIgnoreReports: () => e(Object(E.fb)(s))
							}
						})(Object(C.d)(), {
							...t
						}),
						o = Object(_.ab)(s),
						i = Object(C.e)(P),
						a = {
							...t,
							...i,
							...n,
							searchQuery: o
						};
					return r.a.createElement(e, a)
				})(V))
		},
		"./src/reddit/components/SearchPostFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				flatlistContainer: "_2IpBiHtzKzIxk2fKI4UOv1",
				flatlistItem: "_vaFo96phV6L5Hltvwcox"
			}
		},
		"./src/reddit/components/SearchPostFlatlist/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "a", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/prettyPrintNumber/index.ts"),
				c = s("./src/reddit/components/SearchPostFlatlist/index.m.less"),
				d = s.n(c);
			const l = e => {
					let {
						children: t,
						className: s
					} = e;
					return o.a.createElement("div", {
						className: Object(i.a)(d.a.flatlistContainer, s)
					}, t)
				},
				m = e => {
					let {
						score: t
					} = e;
					return o.a.createElement("span", {
						className: Object(i.a)(d.a.flatlistItem)
					}, n.fbt._({
						"*": "{upvotesCount} upvotes",
						_1: "{upvotesCount} upvote"
					}, [n.fbt._param("upvotesCount", Object(a.b)(t)), n.fbt._plural(t)], {
						hk: "4rxl9Z"
					}))
				},
				u = e => {
					let {
						awardCountsById: t,
						awardingsTotal: s
					} = e;
					const r = s && s > 0 ? s : Object.values(t || {}).reduce((e, t) => e += t, 0);
					return o.a.createElement("span", {
						className: Object(i.a)(d.a.flatlistItem)
					}, n.fbt._({
						"*": "{awardsCount} awards",
						_1: "{awardsCount} award"
					}, [n.fbt._param("awardsCount", Object(a.b)(r)), n.fbt._plural(r)], {
						hk: "1jrEck"
					}))
				};

			function p(e) {
				let {
					post: t,
					className: s
				} = e;
				return o.a.createElement(l, {
					className: s
				}, o.a.createElement(m, {
					score: t.score
				}), o.a.createElement("span", {
					className: Object(i.a)(d.a.flatlistItem)
				}, n.fbt._({
					"*": "{commentsCount} comments",
					_1: "{commentsCount} comment"
				}, [n.fbt._param("commentsCount", Object(a.b)(t.numComments)), n.fbt._plural(t.numComments)], {
					hk: "4uhYwJ"
				})), o.a.createElement(u, {
					awardCountsById: t.awardCountsById,
					awardingsTotal: t.awardingsTotal
				}))
			}
		},
		"./src/reddit/components/SearchPostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				crosspostIcon: "_1-Dnj_BC9slzHImx9Qex6x",
				hovercardContainer: "_3Wz607wX-KXslTUjYvTZWi",
				metaContainer: "_3xeOZ4NlqvpwzbB5E8QC6r",
				postTopMeta: "_1wxi9M8fCejzbsH0YGSer2",
				subredditName: "_305seOZmrgus3clHOXCmfs",
				enlargedSubredditName: "_2QZLJe3l7lBGN9JNI51gn9",
				subredditIcon: "id5ExZR7GqiUypGICnSYs",
				enlargedSubredditIcon: "_3dUPuwEf-ssCOozUxvm-HX",
				SubscribeButton: "_2vYQV4h1KDa5M62EoOG3t-",
				subscribeButton: "_2vYQV4h1KDa5M62EoOG3t-",
				metadataFont: "_3zxBrqnz24HT1z7OOcRXCS",
				metaSpacer: "_3-fo1J0EWS8TawiUkoZ9DH",
				defaultCommunityIcon: "_3hvmfTpZq_W24eaylznBmS",
				mNightmode: "_15ad3usdVw8bRqdw2I-vhN",
				blur: "_35xBFzll_c4A2_N9fEuuuY",
				contents: "_3d8GzWNAiVF7ncwmjHXlNf"
			}
		},
		"./src/reddit/components/SearchPostMeta/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return O
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/PostTopMeta/index.tsx"),
				l = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				m = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				u = s("./src/reddit/hooks/useClickSourceData.ts"),
				p = s("./src/reddit/selectors/experiments/searchSubDiscovery.ts"),
				b = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				h = s("./src/reddit/components/SearchPostMeta/index.m.less"),
				x = s.n(h);
			const f = "subreddit_icon_link",
				O = "subreddit-name";
			t.c = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					onClickPostAuthor: r,
					onClickPostCommunity: h,
					post: g,
					subredditOrProfile: v,
					tooltipType: j
				} = e, C = Object(u.a)(), {
					isSubEnlarged: y
				} = Object(i.e)(p.a);
				return o.a.createElement("div", {
					className: Object(n.a)(t, x.a.metaContainer)
				}, !g.isSponsored && v && o.a.createElement(a.a, {
					className: Object(n.a)(x.a.hovercardContainer, x.a.hovercardContainer),
					postId: g.id,
					subredditName: v.name
				}, o.a.createElement(b.b, {
					className: Object(n.a)(x.a.subredditIcon, y && x.a.enlargedSubredditIcon),
					linkTo: v.url,
					linkProps: h ? {
						"data-testid": f,
						onClick: h
					} : void 0,
					subredditOrProfile: v
				}), o.a.createElement(l.a, {
					className: Object(n.a)(x.a.subredditName, y && x.a.enlargedSubredditName),
					"data-testid": O,
					"data-click-id": "subreddit",
					onClick: h,
					to: {
						pathname: v.url,
						state: C
					}
				}, v.displayText)), !g.isSponsored && o.a.createElement(o.a.Fragment, null, o.a.createElement(m.b, null), o.a.createElement(c.h, {
					type: g.belongsTo.type,
					id: g.belongsTo.id
				})), o.a.createElement(d.g, {
					className: x.a.postTopMeta,
					flairStyleTemplate: s,
					onClickPostAuthor: r,
					post: g,
					tooltipType: j
				}))
			}
		},
		"./src/reddit/components/SearchResultsContent/Comment/index.m.less": function(e, t, s) {
			e.exports = {
				commentContainer: "_2lwxooVpRNqH_bjx-Nm4m4",
				postTitleContainer: "_1nhxJR41hD8jXWqUVy3wTT",
				postTitle: "_1HsM08P8HBGOIPATQsthMA",
				commentContent: "_1i_lg5WToFS_KM8bSao5FB",
				commentAuthor: "q6Rzyt18sGpgOFFoG9gUg",
				commentFlatlist: "_3bkDvRYnc0SodO59dk5n3p",
				goToThreadLinkButton: "_3Yys9Taiw4B3XiXhmbLrra",
				mediaIcon: "_14gjyiBw0XSVan9XLN7ER-"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.m.less": function(e, t, s) {
			e.exports = {
				postContainer: "_2u_haOaI877DTCSOfFouuF",
				commentContainer: "_2Uv1IcU4LjDH6OqbNZ0BwO",
				comment: "yNjWq2s_3V0N5m9u-Bx-D",
				link: "-fCtQc5X_zwd1tnX_0s4W",
				linkContainer: "tSwYm_NW9-rD1G91vZi4d"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = s("./src/reddit/components/SearchPost/placeholder.m.less"),
				c = s.n(a),
				d = s("./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.m.less"),
				l = s.n(d);
			const m = e => r.a.createElement("div", {
				className: Object(o.a)(e.className, l.a.postContainer),
				"data-testid": "comment-placeholder"
			}, r.a.createElement("div", {
				className: c.a.postContent
			}, r.a.createElement("div", {
				className: c.a.postItemMetaContainer
			}, r.a.createElement("div", {
				className: Object(o.a)(c.a.subredditName, Object(i.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(c.a.author, Object(i.b)(e))
			})), r.a.createElement("div", {
				className: Object(o.a)(c.a.title, Object(i.b)(e))
			}), r.a.createElement("div", {
				className: l.a.commentContainer
			}, r.a.createElement("div", {
				className: Object(o.a)(l.a.comment, Object(i.b)(e))
			})), r.a.createElement("div", {
				className: l.a.linkContainer
			}, r.a.createElement("div", {
				className: Object(o.a)(l.a.link, Object(i.b)(e))
			})), r.a.createElement("div", {
				className: c.a.flatlist
			}, r.a.createElement("div", {
				className: Object(o.a)(c.a.flatListItem, Object(i.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(c.a.flatListItem, Object(i.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(c.a.flatListItem, Object(i.b)(e))
			}))))
		},
		"./src/reddit/components/SearchResultsContent/Communities/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2mO8vClBdPxiJ30y_C6od2",
				title: "_1hYBlRBooHG-eY5iAHen-R",
				separator: "_1LvQXvsxpSVi-JRudk3e4e",
				previewCommunityStyles: "_3MfNPE_vLKliHPkiYMAtZm",
				loadMoreItem: "_1mLDB-TFHMY0SRGTRD-ipK",
				viewMore: "DMHO9Pay4I5LSwZTtE4TY"
			}
		},
		"./src/reddit/components/SearchResultsContent/Community/index.m.less": function(e, t, s) {
			e.exports = {
				link: "_3BWq3z8_9gA3oThgYXnngR",
				sidebar: "iwmtpuJa21jtA4y_LuOVI",
				mFirst: "YLZe4_XS9hOtObp1VjEF-",
				container: "ei8_Bq_te0jjwNIqmk8Tw",
				subredditIcon: "_2YBzxh6YUsSdcmbcJ-kE5L",
				contentContainer: "_1Nla8vW02K39sy0E826Iug",
				subredditInfo: "_1nTSkRaTteYjCY91DwVEF3",
				title: "_2torGbn_fNOMbGw3UAasPl",
				subtitle: "_3CUjJH8t2eFynKUAv1ER7C",
				flair: "_3sOM1thDS-RiUzmUb8yzxN",
				description: "_3JYXhJlwZCvjZTBplEncbq",
				buttonContainer: "_3llSmEBMCJTcO537oPxHIH",
				warnings: "_1QstT010Ns0i6YkU4n5O25"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less": function(e, t, s) {
			e.exports = {
				communityContainer: "_2-tXnoxd32Utasnz79k34",
				sidebar: "_2PlcVxaNCQS2-GyaX_mhOA",
				subreddtiIcon: "_3yGdKsP-cHl-Cb_SH-PyXp",
				contentContainer: "Lsafh1CsbqQ8tiuBPTucl",
				subredditInfo: "_1TKuN8SZONE4tjAoEul8sp",
				title: "_11V3zVIqp59I7JvzWnky0w",
				author: "_2GNPL8YTca77gPEWlF9nDb",
				description: "_3C8z4MmIB_gou30f3ojB0V",
				buttonContainer: "_14X6ixd8jgBYsNSxRPXTbL"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less"),
				c = s.n(a);
			const d = e => r.a.createElement("div", {
				className: Object(o.a)(c.a.communityContainer, e.sidebar && c.a.sidebar),
				"data-testid": "community-placeholder"
			}, r.a.createElement("div", {
				className: Object(o.a)(c.a.subreddtiIcon, Object(i.a)(e))
			}), r.a.createElement("div", {
				className: c.a.contentContainer
			}, r.a.createElement("div", {
				className: Object(o.a)(c.a.subredditInfo, e.sidebar && c.a.sidebar)
			}, r.a.createElement("div", {
				className: Object(o.a)(c.a.title, Object(i.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(c.a.author, Object(i.b)(e))
			})), !e.sidebar && r.a.createElement("div", {
				className: Object(o.a)(c.a.description, Object(i.b)(e))
			})), r.a.createElement("div", {
				className: Object(o.a)(c.a.buttonContainer, Object(i.a)(e))
			}))
		},
		"./src/reddit/components/SearchResultsContent/NoResults/index.m.less": function(e, t, s) {
			e.exports = {
				noResults: "_1VDJFxZ-XJSB8yo1UyJzsi",
				withSidebar: "_3C2YoevK_DDUuAyafjSuUs",
				header: "kKE_PXkpQNWEX-RiwWuTA",
				text: "_1tEoY-vmgG3yWH6hCdgy3p",
				image: "e6PSfRI3_H3v8fgbIqj-x",
				button: "_3FKXXAcRW_DvCNr6yMbF73"
			}
		},
		"./src/reddit/components/SearchResultsContent/SearchResultsList/index.m.less": function(e, t, s) {
			e.exports = {
				separatedCommunity: "_2kqt-kRLvKQ1Kqi8OjMEa7"
			}
		},
		"./src/reddit/components/SearchResultsContent/SearchResultsList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return bt
			})), s.d(t, "b", (function() {
				return vt
			}));
			var n = s("./node_modules/lodash/times.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/hooks/usePrevious.ts"),
				m = s("./src/lib/LRUCache/index.ts"),
				u = s("./src/reddit/actions/search.ts"),
				p = s("./src/reddit/components/Scroller/Simple.tsx"),
				b = s("./src/config.ts"),
				h = s("./node_modules/lodash/noop.js"),
				x = s.n(h),
				f = s("./node_modules/polished/dist/polished.es.js"),
				O = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				g = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				v = s.n(g),
				j = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				C = s("./src/lib/classNames/index.ts"),
				y = s("./src/lib/isUrl/index.ts"),
				E = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				_ = s("./src/reddit/components/FlairList/index.tsx"),
				k = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				S = s("./src/reddit/components/PostContainer/index.tsx"),
				w = s("./src/reddit/components/SearchPostFlatlist/index.tsx"),
				N = s("./node_modules/fbt/lib/FbtPublic.js"),
				T = s("./src/reddit/components/Flair/index.tsx"),
				I = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				P = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				R = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				M = s("./src/reddit/controls/InternalLink/index.tsx"),
				L = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				F = s("./src/reddit/controls/ScrollerTooltipPortal/index.tsx"),
				B = s("./src/reddit/hooks/useClickSourceData.ts"),
				A = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				D = s("./src/reddit/hooks/useTheme.ts"),
				U = s("./src/reddit/icons/fonts/index.tsx"),
				H = s("./src/reddit/selectors/experiments/searchSubDiscovery.ts"),
				W = s("./src/reddit/selectors/user.ts"),
				V = s("./src/reddit/components/SearchPostMeta/index.tsx"),
				G = s("./src/reddit/components/AuthorLink/index.tsx"),
				K = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				q = s("./src/reddit/components/HumanDate/HumanDateTime.tsx"),
				z = s("./src/reddit/components/HumanDate/TimeAgo.tsx"),
				J = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Y = s("./src/reddit/components/SearchPostMeta/index.m.less"),
				Q = s.n(Y);

			function X(e) {
				var t;
				const {
					className: s,
					clickSourceData: n,
					onClick: r,
					subredditOrProfile: o
				} = e, c = Object(a.e)(W.eb), d = null === (t = o.icon) || void 0 === t ? void 0 : t.url, l = null == o ? void 0 : o.color;
				let m;
				return m = d ? i.a.createElement("img", {
					alt: N.fbt._("Subreddit Icon", null, {
						hk: "134aM1"
					}),
					className: s,
					style: {
						backgroundColor: l
					},
					role: "presentation",
					src: d
				}) : i.a.createElement(U.a, {
					name: "community",
					isFilled: !c,
					className: Object(C.a)(Q.a.defaultCommunityIcon, s, c && Q.a.mNightmode)
				}), i.a.createElement(M.default, {
					className: Q.a.contents,
					"data-testid": V.a,
					onClick: r,
					to: {
						pathname: o.url,
						state: n
					}
				}, m)
			}

			function Z(e) {
				const {
					post: t,
					onClickPostAuthor: s
				} = e, n = Object(A.a)(J.e), r = t.crosspostRootId ? N.fbt._("Crossposted by", null, {
					hk: "1r1JSX"
				}) : N.fbt._("Posted by", null, {
					hk: "3mow5F"
				});
				return i.a.createElement("div", {
					className: Q.a.metaContainer
				}, t.crosspostRootId && i.a.createElement(U.a, {
					name: "crosspost",
					className: Object(C.a)(Q.a.crosspostIcon, Q.a.metaSpacer)
				}), i.a.createElement("span", {
					className: Q.a.metaSpacer
				}, r), i.a.createElement(K.b, {
					postOrComment: t
				}, i.a.createElement(G.a, {
					author: t.author,
					className: Q.a.metaSpacer,
					isAuthorDeleted: t.author === d.H,
					isUnstyled: !0,
					linkProps: {
						"data-click-id": j.a.USER,
						"data-testid": J.b
					},
					onClick: s
				}, `u/${t.author}`)), t.authorFlair && i.a.createElement("div", {
					className: Q.a.flairContainer
				}, i.a.createElement(T.b, {
					flair: t.authorFlair,
					forceSmallEmojis: !0
				})), !t.isSponsored && i.a.createElement(i.a.Fragment, null, i.a.createElement("span", {
					className: Q.a.timestamp,
					"data-testid": J.c,
					"data-click-id": j.a.TIMESTAMP,
					onMouseEnter: n.show,
					onMouseLeave: n.hide,
					ref: n.target.ref
				}, i.a.createElement(z.a, {
					seconds: t.createdAt / d.Xb
				})), i.a.createElement(F.a, null, i.a.createElement(P.a, {
					arrowProps: n.arrowProps,
					popperProps: n.popperProps,
					visible: n.visible
				}, i.a.createElement(q.a, {
					seconds: t.createdAt / d.Xb
				})))))
			}

			function $(e) {
				const {
					className: t,
					isOptimizedSerp: s,
					onClickPostAuthor: n,
					onClickPostCommunity: r,
					post: o,
					subredditOrProfile: c
				} = e, d = Object(B.a)(), {
					isSubEnlarged: l
				} = Object(a.e)(H.a), m = Object(D.a)();
				return i.a.createElement("div", {
					className: Object(C.a)(t, Q.a.metaContainer, Q.a.metadataFont)
				}, !o.isSponsored && c && i.a.createElement(I.a, {
					className: Object(C.a)(Q.a.hovercardContainer, Q.a.hovercardContainer),
					postId: o.id,
					subredditName: c.name
				}, i.a.createElement(X, {
					className: Object(C.a)(Q.a.subredditIcon, l && Q.a.enlargedSubredditIcon),
					"data-click-id": j.a.SUBREDDIT,
					clickSourceData: d,
					onClick: r,
					subredditOrProfile: c
				}), i.a.createElement(M.default, {
					className: Object(C.a)(Q.a.subredditName, l && Q.a.enlargedSubredditName),
					"data-testid": V.b,
					"data-click-id": j.a.SUBREDDIT,
					onClick: r,
					to: {
						pathname: c.url,
						state: d
					}
				}, c.displayText)), !o.isSponsored && !s && i.a.createElement(i.a.Fragment, null, i.a.createElement(L.b, null), i.a.createElement(R.h, {
					type: o.belongsTo.type,
					id: o.belongsTo.id
				})), i.a.createElement(L.b, null), i.a.createElement(Z, {
					className: Q.a.postTopMeta,
					onClickPostAuthor: n,
					post: o,
					theme: m
				}))
			}
			var ee = s("./src/reddit/components/SearchWarnings/index.tsx"),
				te = s("./src/reddit/components/SEOTitle/index.tsx"),
				se = s("./src/reddit/components/SEOTitle/constants.ts"),
				ne = s("./src/reddit/components/Thumbnail/index.tsx"),
				re = s("./src/reddit/components/TrackingHelper/index.tsx"),
				oe = s("./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx"),
				ie = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ae = s("./src/reddit/controls/OutboundLink/index.tsx"),
				ce = s("./src/reddit/helpers/clickSourceData/index.ts"),
				de = s("./src/reddit/helpers/overlay/index.ts"),
				le = s("./src/reddit/helpers/path/index.ts"),
				me = s("./src/reddit/helpers/trackers/searchResults.ts"),
				ue = s("./src/reddit/hooks/usePageLayer.ts"),
				pe = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				be = s("./src/reddit/selectors/searchResults.ts"),
				he = s("./src/telemetry/models/Outbound.ts"),
				xe = s("./src/reddit/components/SearchPost/index.m.less"),
				fe = s.n(xe);

			function Oe() {
				return (Oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ge = "post-title";

			function ve(e) {
				var t;
				const {
					isCommentsPage: s,
					post: n,
					searchQuery: r
				} = e, a = s ? se.a.PostComments : se.a.PostItem, c = Object(B.a)(), d = Object(E.a)(n.permalink, void 0, c), l = Object(D.a)(), m = Object(o.useMemo)(() => Object(oe.a)(r, e => i.a.createElement("span", {
					className: Object(C.a)(fe.a.syntaxHighlight)
				}, e), e => e), [r])(n);
				return i.a.createElement("div", {
					className: Object(C.a)(n.id, fe.a.postTitleColors),
					"data-adclicklocation": j.a.TITLE
				}, i.a.createElement("style", {
					dangerouslySetInnerHTML: {
						__html: `\n        .${n.id}.${fe.a.postTitleColors} {\n          --postTitle-VisitedLinkColor: ${Object(f.c)(.45,Object(pe.a)({theme:l}).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(f.c)(.45,Object(pe.a)({theme:l}).titleText,Object(pe.a)({theme:l}).body)};\n          --postBodyLink-VisitedLinkColor: ${Object(f.c)(.45,Object(pe.a)({theme:l}).bodyText,Object(pe.a)({theme:l}).body)};\n        }\n      `
					}
				}), i.a.createElement("div", {
					className: fe.a.postTitleVisibility,
					dangerouslySetInnerHTML: {
						__html: `\n            <img alt="" src="${b.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n          `
					}
				}), i.a.createElement("div", {
					className: fe.a.titleContainer
				}, i.a.createElement(O.a, {
					to: d
				}, i.a.createElement("div", {
					className: Object(C.a)(fe.a.inline, fe.a.titleTextColor, fe.a.titleMedium, fe.a.paddingRight),
					"data-testid": ge,
					style: {
						"--posttitletextcolor": Object(pe.a)({
							theme: l
						}).titleText
					}
				}, i.a.createElement(te.b, {
					type: a
				}, m))), n.flair && i.a.createElement(_.a, {
					className: fe.a.inline,
					subredditName: null === (t = n.subreddit) || void 0 === t ? void 0 : t.name,
					isFlairFilter: !0,
					flair: n.flair
				})))
			}

			function je(e) {
				var t, s;
				const n = !e.theme.subredditContext.shouldShowNSFWContent && e.post.isNSFW,
					r = (null === (t = e.post.source) || void 0 === t ? void 0 : t.url) || "",
					o = (null === (s = e.post) || void 0 === s ? void 0 : s.mediaContentUrl) || "",
					a = i.a.createElement(ne.a, {
						alt: e.post.title,
						className: Object(C.a)(fe.a.thumbnail, n && fe.a.blurred),
						src: e.post.thumbnail.url,
						theme: e.theme,
						isOutbound: r && !e.post.isSponsored || !1
					});
				return i.a.createElement("div", {
					className: fe.a.container,
					onClick: e.makeSendClickEventFn
				}, Object(y.a)(o) && !e.post.media ? i.a.createElement(ae.b, {
					href: r || o,
					isSponsored: e.post.isSponsored,
					postId: e.post.id,
					source: e.post.source,
					sourceElement: he.SourceElement.PostImage
				}, a) : a)
			}
			var Ce = s("./src/reddit/components/SearchPost/Placeholder.tsx"),
				ye = s("./src/reddit/helpers/trackers/screenview.ts"),
				Ee = s("./src/reddit/selectors/platform.ts"),
				_e = s("./src/reddit/selectors/tracking.ts"),
				ke = s("./src/telemetry/index.ts"),
				Se = s("./src/telemetry/models/Timer.ts"),
				we = s("./node_modules/react-router-redux/es/index.js"),
				Ne = s("./src/reddit/components/Comments/Comment/index.tsx"),
				Te = s("./src/reddit/components/PostList/index.tsx"),
				Ie = s("./src/reddit/components/PostTitle/index.tsx"),
				Pe = s("./src/reddit/components/SearchPost/index.tsx"),
				Re = s("./src/reddit/connectors/PostList/index.ts"),
				Me = s("./src/reddit/contexts/Visibility.tsx"),
				Le = s("./src/reddit/controls/Button/index.tsx"),
				Fe = s("./src/reddit/controls/Button/index.m.less"),
				Be = s.n(Fe),
				Ae = s("./src/reddit/hooks/useTracking.ts"),
				De = s("./src/reddit/selectors/comments.ts"),
				Ue = s("./src/reddit/selectors/commentSelector.ts"),
				He = s("./src/reddit/selectors/posts.ts");

			function We(e) {
				let {
					className: t,
					comment: s
				} = e;
				return i.a.createElement(w.b, {
					className: t
				}, i.a.createElement(w.d, {
					score: s.score
				}), i.a.createElement(w.a, {
					awardCountsById: s.awardCountsById
				}))
			}
			var Ve = s("./src/reddit/components/SearchResultsContent/Comment/index.m.less"),
				Ge = s.n(Ve);
			var Ke;
			! function(e) {
				e.COMMENT = "comment", e.COMMENT_AUTHOR = "comment_author", e.COMMENT_TIMESTAMP = "comment_timestamp", e.GO_TO_COMMENT_LINK = "go_to_comment_link", e.POST = "post", e.POST_AUTHOR = "post_author", e.POST_COMMUNITY = "post_community"
			}(Ke || (Ke = {}));
			var qe = s("./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.tsx"),
				ze = s("./src/lib/truncateText/index.ts"),
				Je = s("./src/reddit/actions/post.ts"),
				Ye = s("./src/lib/prettyPrintNumber/index.ts"),
				Qe = s("./src/reddit/components/SubscribeButton/index.tsx"),
				Xe = s("./src/reddit/helpers/karma.ts");
			var Ze = s("./src/reddit/constants/tracking.ts"),
				$e = s("./src/reddit/helpers/correlationIdTracker.ts"),
				et = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				tt = s("./src/reddit/selectors/telemetry.ts");
			var st = s("./src/reddit/components/SubredditIcon/index.tsx"),
				nt = s("./src/reddit/constants/posts.ts"),
				rt = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				ot = s("./src/reddit/selectors/subreddit.ts"),
				it = s("./src/reddit/components/SearchResultsContent/Community/index.m.less"),
				at = s.n(it);
			const ct = Object(c.c)({
					isBlockingInterstitialEnabled: rt.b,
					isBlockingInterstitialV2Enabled: rt.c,
					hideNSFWPref: W.G,
					subredditOrProfile: ot.Q,
					subredditOrProfileAboutInfo: ot.M,
					userIsSubscriber: ot.kb
				}),
				dt = e => {
					const {
						className: t,
						first: s,
						identifier: n,
						listingKey: r,
						searchOptions: c,
						sidebar: d
					} = e, l = Object(ie.eb)(), m = Object(Ae.a)(), u = Object(B.a)(), {
						isBlockingInterstitialEnabled: p,
						isBlockingInterstitialV2Enabled: b,
						hideNSFWPref: h,
						subredditOrProfile: x,
						subredditOrProfileAboutInfo: f
					} = Object(a.e)(t => ct(t, e)), {
						withCommunityDescription: O
					} = Object(a.e)(H.a), g = d && O, v = Object(a.d)(), j = Object(o.useCallback)(e => {
						x && n.type === nt.a.PROFILE && (p || b) && (e.preventDefault(), v(Object(Je.cb)(x.url))), m(Object(me.r)(c, l, n, r))
					}, [m, c, l, r, n, p, b, v, x]);
					if (!x) return null;
					const y = x.displayText,
						E = f.publicDescription,
						_ = ((e, t) => {
							if ("subreddit" !== e) {
								const e = t,
									s = Object(Xe.a)(e),
									n = Object(Ye.b)(s);
								return N.fbt._({
									"*": "{karma count} Karma",
									_1: "1 Karma"
								}, [N.fbt._plural(s, "karma count", n)], {
									hk: "4r0tyT"
								})
							}
							const s = t;
							return "number" == typeof s.subscribers ? N.fbt._({
								"*": "{number of subscribers} Members",
								_1: "1 Member"
							}, [N.fbt._plural(s.subscribers, "number of subscribers", Object(Ye.b)(s.subscribers))], {
								hk: "vb11y"
							}) : null
						})(n.type, f),
						k = (e => {
							let {
								identifierType: t,
								subredditOrProfile: s,
								subredditOrProfileAboutInfo: n,
								onSubscribeButtonClick: r,
								subscribeEventFactory: o,
								priority: a
							} = e;
							if ("subreddit" !== t) return s.acceptFollowers ? i.a.createElement(Qe.a, {
								getEventFactory: o,
								identifier: {
									name: s.name,
									type: "profile"
								},
								onClick: r,
								priority: a,
								small: !0
							}) : null;
							return "number" == typeof n.subscribers ? i.a.createElement(Qe.a, {
								getEventFactory: o,
								identifier: {
									name: s.name,
									type: "subreddit"
								},
								onClick: r,
								priority: a,
								small: !0
							}) : null
						})({
							identifierType: n.type,
							subredditOrProfile: x,
							subredditOrProfileAboutInfo: f,
							onSubscribeButtonClick: e => {
								e.preventDefault(), e.stopPropagation()
							},
							subscribeEventFactory: e => {
								return ((e, t, s) => n => {
									const r = tt.H(n, void 0);
									return {
										source: me.c.SEARCH,
										action: Ze.c.CLICK,
										noun: `${s}_${me.d[e.type]}`,
										actionInfo: Object(me.l)(n, void 0, r, void 0),
										correlationId: Object($e.c)($e.a.SearchResults),
										profile: "profile" === e.type ? tt.X(n, e.id) : void 0,
										search: tt.db(n, t, et.a.SERP),
										subreddit: "subreddit" === e.type ? tt.ob(n, e.id) : void 0
									}
								})(n, c, e ? "unsubscribe" : "subscribe")
							},
							priority: Le.c.Tertiary
						});
					return i.a.createElement(M.default, {
						"data-testid": `${n.type}-link`,
						className: Object(C.a)(at.a.link, d && at.a.sidebar, s ? at.a.mFirst : void 0, t),
						onClick: j,
						to: {
							pathname: x.url,
							state: u
						}
					}, i.a.createElement("div", {
						className: at.a.container
					}, i.a.createElement(st.b, {
						className: Object(C.a)(at.a.subredditIcon, g && at.a.sidebar),
						shouldHideNsfwIcon: h,
						subredditOrProfile: x
					}), i.a.createElement("div", {
						className: at.a.contentContainer
					}, i.a.createElement("div", {
						className: Object(C.a)(at.a.subredditInfo, d && at.a.sidebar)
					}, i.a.createElement("h6", {
						className: Object(C.a)(at.a.title, d && at.a.sidebar)
					}, y), i.a.createElement(ee.a, {
						className: Object(C.a)(at.a.warnings, d && at.a.sidebar),
						isQuarantined: null == x ? void 0 : x.isQuarantined,
						isNSFW: null == x ? void 0 : x.isNSFW
					}), _ && i.a.createElement(i.a.Fragment, null, i.a.createElement("p", {
						className: at.a.subtitle
					}, !d && i.a.createElement(L.b, null), _))), !d && i.a.createElement("p", {
						className: at.a.description
					}, Object(ze.a)(E, 150, "..."))), i.a.createElement("div", {
						className: at.a.buttonContainer
					}, k)), g && n.type !== nt.a.PROFILE && i.a.createElement("p", {
						className: Object(C.a)(at.a.description, d && at.a.sidebar)
					}, Object(ze.a)(E, 75, "...")))
				};
			var lt = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx"),
				mt = s("./src/reddit/components/SearchResultsContent/helpers/viewSearchThingTracker.ts"),
				ut = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.m.less"),
				pt = s.n(ut);
			const bt = 5,
				ht = Object(c.c)({
					apiError: be.b,
					apiPending: be.c,
					loadMore: be.t,
					viewportDataLoaded: _e.a
				}),
				xt = Object(c.c)({
					apiError: be.e,
					apiPending: be.f,
					loadMore: be.u,
					viewportDataLoaded: _e.a
				}),
				ft = Object(c.c)({
					apiError: be.h,
					apiPending: be.i,
					loadMore: be.v,
					viewportDataLoaded: _e.a
				}),
				Ot = Object(c.c)({
					apiError: be.y,
					apiPending: be.z,
					loadMore: be.w,
					viewportDataLoaded: _e.a
				}),
				gt = {
					[d.hc.Comments]: {
						cacheName: "comment",
						Component: e => {
							let {
								identifier: t,
								listingKey: s,
								searchOptions: n
							} = e;
							const r = Object(ie.eb)(),
								o = Object(Ae.a)(),
								c = Object(a.d)(),
								d = Object(a.e)(e => Object(Ue.b)(e, {
									commentId: t
								})),
								l = Object(a.e)(e => Object(De.m)(e, {
									commentId: t
								})),
								m = Object(a.e)(e => (null == d ? void 0 : d.postId) ? Object(He.G)(e, {
									postId: null == d ? void 0 : d.postId
								}) : void 0),
								u = Object(a.e)(e => (null == d ? void 0 : d.postId) && Object(He.F)(e, {
									postId: null == d ? void 0 : d.postId
								})),
								p = Object(a.e)(e => e.search.searchQuery),
								b = Object(B.a)();
							if (!(null == d ? void 0 : d.postId) || !u) return null;
							const h = Object(Re.b)(c),
								f = function(e) {
									let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x.a;
									return function() {
										o(Object(me.q)({
											comment: d,
											key: s,
											originElement: e,
											pageLayer: r,
											searchOptions: n
										})), t(...arguments)
									}
								},
								O = Object(Te.b)(d.postId, h),
								g = e => f(e);
							return i.a.createElement(Pe.a, {
								crosspost: void 0,
								isActive: !1,
								isLoggedIn: !1,
								modModeEnabled: !1,
								moderatorPermissions: void 0,
								onClickPost: f(Ke.POST, null != O ? O : x.a),
								onClickPostAuthor: g(Ke.POST_AUTHOR),
								onClickPostCommunity: g(Ke.POST_COMMUNITY),
								onIgnoreReports: x.a,
								postId: d.postId,
								searchQuery: p,
								showEditFlair: !1,
								title: i.a.createElement(Me.a, null, i.a.createElement("div", {
									className: Ge.a.commentContainer,
									"data-testid": "search_comment_container"
								}, i.a.createElement("div", {
									className: Ge.a.postTitleContainer,
									"data-testid": "search_comment_post_title_container",
									onClick: g(Ke.POST)
								}, m && i.a.createElement(Ie.c, {
									className: Ge.a.postTitle,
									hideSourceLink: !0,
									post: m,
									redditStyle: !0,
									disableFlair: !0,
									size: Ie.b.Metadata
								})), i.a.createElement("div", {
									className: Ge.a.commentContent,
									"data-testid": "search_comment",
									onClick: f(Ke.COMMENT, e => {
										e.stopPropagation(), c(Object(we.b)(Object(E.a)(l, !0, b)))
									})
								}, i.a.createElement(Ne.a, {
									clearHovered: x.a,
									commentId: t,
									commentsPageKey: "",
									flatlist: i.a.createElement(We, {
										className: Ge.a.commentFlatlist,
										comment: d
									}),
									hasAwardGradient: !1,
									highlightTreatment: null,
									index: 0,
									isHighlighted: !1,
									isFirstInList: !0,
									isActive: !1,
									noFocus: !0,
									noSpacing: !0,
									onLineMouseOver: x.a,
									onCommentAuthorClick: e => (e.stopPropagation(), g(Ke.COMMENT_AUTHOR)(e)),
									onCommentTimestampClick: e => (e.stopPropagation(), g(Ke.COMMENT_TIMESTAMP)(e)),
									postId: d.postId,
									renderedInOverlay: !1,
									restrictHeight: !0,
									rtJSONRedditStyle: !0,
									scrollToAndRemeasure: x.a,
									showBlockingInterstitial: x.a,
									userIconSmall: !0,
									onClickRevealSpoilerText: () => {
										o(Object(me.t)(n, d, s, r))
									}
								})), i.a.createElement(Le.t, {
									kind: Le.b.InternalLink,
									priority: Le.c.PlainLink,
									className: Object(C.a)(Ge.a.goToThreadLinkButton, Be.a.PlainLinkButton),
									"data-testid": "go_to_thread_link",
									onClick: f(Ke.GO_TO_COMMENT_LINK, e => {
										e.stopPropagation()
									}),
									to: Object(E.a)(u, !0, b)
								}, N.fbt._("Go to thread", null, {
									hk: "npBX6"
								}))))
							})
						},
						moreResultsTypes: [d.ic.Comments],
						Placeholder: qe.a,
						selector: xt,
						telemetryComponentName: "commentSearchResults",
						telemetryViewEvent: mt.c
					},
					[d.hc.Subreddits]: {
						cacheName: "community",
						Component: dt,
						moreResultsTypes: [d.ic.Subreddits],
						Placeholder: lt.a,
						selector: ft,
						telemetryComponentName: "communitySearchResults",
						telemetryViewEvent: mt.d
					},
					[d.hc.Users]: {
						cacheName: "author",
						Component: dt,
						moreResultsTypes: [d.ic.Users],
						Placeholder: lt.a,
						selector: ht,
						telemetryComponentName: "authorSearchResults",
						telemetryViewEvent: mt.d
					},
					[d.hc.Posts]: {
						cacheName: "post",
						Component: e => {
							var t, s;
							const {
								first: n,
								listingKey: r,
								searchOptions: o
							} = e, c = Object(a.e)(t => Object(be.A)(t, e)), d = Object(a.e)(e => {
								if (c.crosspostRootId) return Object(be.A)(e, {
									identifier: c.crosspostRootId
								})
							}), l = Object(a.e)(e => Object(W.kb)(e)), m = Object(ue.a)(), u = Object(a.d)(), p = Object(re.b)(), b = function(e) {
								var t;
								const s = (null === (t = e.source) || void 0 === t ? void 0 : t.url) || "",
									n = v.a.parse(s),
									r = n.path || "",
									o = r.length > 7 ? r.substring(0, 7) + "..." : r;
								return (n.hostname ? n.hostname.replace("www.", "") : "") + o
							}(c), h = Object(ie.ab)(m), f = d ? d.thumbnail.url : c.thumbnail.url, O = f && Object(y.a)(f), g = Object(D.a)(), E = function(e) {
								let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x.a;
								return function() {
									p(Object(me.s)(c.id, o, m, e || null, r)), t(...arguments)
								}
							}, _ = e => E(e), N = {
								isOptimizedSerp: !0,
								post: c,
								subredditOrProfile: c.subreddit || c.profile,
								onClickPostAuthor: e => (e.stopPropagation(), _(me.e.POST_AUTHOR)(e)),
								onClickPostCommunity: e => (e.stopPropagation(), _(me.e.POST_COMMUNITY)(e))
							};
							return i.a.createElement("div", {
								className: Object(C.a)(fe.a.postContainer, n && fe.a.mFirst),
								"data-adclicklocation": j.a.BACKGROUND,
								"data-click-id": j.a.BACKGROUND,
								"data-testid": S.a,
								id: c.id,
								onClick: E(me.e.POST, e => {
									e.stopPropagation(), l ? window.open(c.permalink) : u(Object(de.a)({
										pathname: Object(le.b)(c.permalink),
										state: Object(ce.b)(m)
									}))
								}),
								tabIndex: -1
							}, i.a.createElement(k.a, {
								"data-click-id": j.a.BACKGROUND,
								redditStyle: !0
							}, i.a.createElement("div", {
								className: fe.a.postContent,
								"data-click-id": j.a.BODY
							}, i.a.createElement($, Oe({
								className: Object(C.a)(fe.a.paddingSide, fe.a.postItemMetaContainer),
								key: "PostMeta"
							}, N)), i.a.createElement(ee.a, {
								className: Object(C.a)(fe.a.paddingSide, fe.a.postItemWarningContainer),
								isQuarantined: (null === (t = c.subreddit) || void 0 === t ? void 0 : t.isQuarantined) || (null === (s = c.profile) || void 0 === s ? void 0 : s.isQuarantined),
								isNSFW: c.isNSFW,
								isSpoiler: c.isSpoiler
							}), i.a.createElement("div", {
								className: Object(C.a)(fe.a.paddingSide, fe.a.postItemTitleContainer)
							}, i.a.createElement("div", {
								className: fe.a.postContent
							}, i.a.createElement(ve, {
								searchQuery: h,
								post: c
							}), c.source && !c.crosspostRootId && i.a.createElement(ae.b, {
								className: fe.a.outboundLink,
								href: c.source.url,
								isSponsored: c.isSponsored,
								postId: c.id,
								source: c.source
							}, b)), O && i.a.createElement("div", {
								className: fe.a.thumbnailContainer
							}, i.a.createElement(je, {
								makeSendClickEventFn: e => (e.stopPropagation(), _(me.e.POST)(e)),
								post: c,
								theme: g
							}))), i.a.createElement(w.c, {
								className: Object(C.a)(fe.a.paddingSide, fe.a.postItemFlatlistContainer),
								post: c
							}))))
						},
						moreResultsTypes: [d.ic.Posts],
						Placeholder: Ce.a,
						selector: Ot,
						telemetryComponentName: "postList",
						telemetryViewEvent: mt.e
					}
				};
			const vt = e => {
				const t = Object(o.useRef)(!1);
				let s = !1,
					n = !1;
				const c = new m.a(250),
					b = Object(o.useRef)(),
					h = Object(o.useRef)(null),
					x = Object(o.useRef)(!1),
					f = Object(ie.eb)(),
					O = Object(re.b)(),
					g = Object(a.d)(),
					{
						identifiers: v,
						listingKey: j,
						searchOptions: C,
						componentType: y,
						sidebar: E
					} = e,
					{
						cacheName: _,
						Component: k,
						moreResultsTypes: S,
						Placeholder: w,
						selector: N,
						telemetryComponentName: T,
						telemetryViewEvent: I
					} = gt[y],
					{
						apiError: P,
						apiPending: R,
						loadMore: M,
						viewportDataLoaded: L
					} = Object(a.e)(t => N(t, e)),
					F = Object(a.e)(e => Object(Ee.i)(e)),
					B = E ? bt : v.length,
					A = E ? bt : 10,
					D = Object(l.a)(F),
					U = () => {
						const e = ke.c.has(j) ? ke.c.end(j) : 0;
						O(Object(ye.v)(j, C, Se.TimerType.InApp, e, f)), x.current = !0
					},
					H = () => {
						q() && U()
					},
					W = () => {
						const e = b.current && Array.from(b.current.children),
							t = e && e.pop();
						return t && t.getBoundingClientRect().bottom > window.innerHeight
					};
				Object(o.useEffect)(() => {
					H(), h.current && Object(ke.b)(d.o.Redesign, {
						type: "mount",
						component: T,
						duration: ke.c.end(h.current)
					})
				}, []), Object(o.useEffect)(() => {
					if (H(), h.current && ke.c.has(h.current)) {
						const e = ke.c.end(h.current);
						if (e < 10) return;
						Object(ke.b)(d.o.Redesign, {
							duration: e,
							type: "mount",
							component: T
						})
					}
				});
				const V = Object(l.a)(j),
					G = Object(l.a)(v.length);
				Object(o.useEffect)(() => {
					h.current && ke.c.cancel(h.current), v.length && (h.current = ke.c.start()), (j !== V || !W() && v.length !== G) && (t.current = !1)
				}, [h, j, v.length, V, G, t]), Object(o.useEffect)(() => () => {
					h.current && ke.c.cancel(h.current), b.current = void 0, t.current = !1
				}), Object(o.useEffect)(() => {
					D && !F && (!ke.c.has(j) && x.current || U())
				}, [F, D]);
				const K = () => {
						t.current = !0, H()
					},
					q = () => {
						const e = W();
						return (ke.c.has(j) || !x.current) && (P || !n && (s || t && (e || L)))
					},
					z = e => {
						b.current = e instanceof Element ? e : void 0
					},
					J = () => {
						const e = v.slice(0, B).map((e, t) => ((e, t) => {
							let s;
							s = function(e) {
								return void 0 !== e.type
							}(e) ? e.id : e;
							const n = `${_}-search-${t}-${j}`,
								r = Object(mt.b)(s, j, () => I(O, C, e, j, f));
							let o;
							if (void 0 === (o = c.get(n))) {
								const n = `${_}-search-item-[id:${s}]`;
								o = {
									estHeight: 32,
									trackOnEnteredViewport: r,
									id: s,
									render: () => i.a.createElement(k, {
										className: pt.a.separatedCommunity,
										first: 0 === t,
										identifier: e,
										key: n,
										listingKey: j,
										searchOptions: C,
										sidebar: E
									})
								}
							}
							return c.set(n, o), o
						})(e, t));
						return i.a.createElement(p.b, {
							key: j,
							innerRef: z,
							loadMoreToken: M && M.token ? M.token : void 0,
							onLastVisibleChildRendered: K,
							onLoadMore: () => {
								g(Object(u.n)(S))
							}
						}, e)
					};
				return (() => v.length > 0)() ? (s = !1, n = !1, J()) : (() => Boolean(P) || !1 === R)() ? (s = !0, n = !1, J()) : (s = !1, n = !0, (() => {
					const e = !P;
					return i.a.createElement("div", {
						"data-testid": `${y}-list-placeholder`
					}, r()(A, t => i.a.createElement(w, {
						key: t,
						isLoading: e,
						sidebar: !1
					})))
				})())
			}
		},
		"./src/reddit/components/SearchResultsContent/helpers/viewSearchThingTracker.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			}));
			var n = s("./src/lib/LRUCache/index.ts"),
				r = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/helpers/trackers/searchResults.ts"),
				i = s("./src/reddit/selectors/commentSelector.ts");
			const a = new n.a(250),
				c = (new n.a(250), (e, t, s) => {
					const n = `entered-${e}-${`last-${t}`}`;
					let r = a.get(n);
					return void 0 === r && (r = s, a.set(n, r)), r
				}),
				d = (e, t, s, n, i) => e(e => Object(o.k)({
					action: r.c.VIEW,
					state: e,
					searchOptions: t,
					pageLayer: i,
					subredditOrProfileIdentifier: s,
					key: n
				})),
				l = (e, t, s, n, a) => e(e => {
					const c = Object(i.b)(e, {
						commentId: s
					});
					return Object(o.j)({
						action: r.c.VIEW,
						state: e,
						searchOptions: t,
						pageLayer: a,
						comment: c,
						key: n
					})
				}),
				m = (e, t, s, n, i) => e(e => ({
					...Object(o.m)({
						state: e,
						searchOptions: t,
						pageLayer: i,
						postId: s,
						key: n,
						useSearchPost: !0
					}),
					action: r.c.VIEW
				}))
		},
		"./src/reddit/components/SearchResultsContent/index.m.less": function(e, t, s) {
			e.exports = {
				resultsContainer: "_1MTbwSHIISfMYM16YhZ8kN"
			}
		},
		"./src/reddit/components/SearchResultsContent/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return pt
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/lodash/isEmpty.js")),
				c = s.n(a),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/hooks/usePrevious.ts"),
				m = s("./src/lib/search/index.ts"),
				u = s("./src/reddit/actions/search.ts"),
				p = s("./src/config.ts"),
				b = s("./src/lib/intersectionObserver/index.ts"),
				h = s("./src/lib/isUrl/index.ts"),
				x = s("./src/lib/opener/index.ts"),
				f = s("./src/reddit/actions/post.ts"),
				O = s("./src/reddit/components/BlankPost/index.tsx"),
				g = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				v = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				j = s("./src/reddit/components/Media/index.tsx"),
				C = s("./src/reddit/components/PostContainer/index.tsx"),
				y = s("./src/reddit/components/Thumbnail/index.tsx"),
				E = s("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = s("./src/reddit/constants/adEvents.ts"),
				k = s("./src/reddit/contexts/PageLayer/index.tsx"),
				S = s("./src/reddit/contexts/Post/index.tsx"),
				w = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				N = s("./src/reddit/helpers/clickSourceData/index.ts"),
				T = s("./src/reddit/helpers/overlay/index.ts"),
				I = s("./src/reddit/helpers/path/index.ts"),
				P = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				R = s("./src/reddit/helpers/trackers/searchResults.ts"),
				M = s("./src/reddit/models/Media/index.ts"),
				L = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				F = s("./src/reddit/selectors/posts.ts"),
				B = s("./src/reddit/selectors/searchResults.ts"),
				A = s("./src/reddit/selectors/showPromotedCTA.ts"),
				D = s("./src/reddit/selectors/user.ts"),
				U = s("./node_modules/reselect/es/index.js"),
				H = s("./src/lib/getShortenedLink.ts"),
				W = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				V = s("./src/reddit/components/PostTitle/index.tsx"),
				G = s("./src/reddit/components/SearchPostFlatlist/index.tsx"),
				K = s("./src/reddit/components/SearchPostMeta/index.tsx"),
				q = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				z = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				J = s("./src/reddit/components/CallToActionButton/index.tsx"),
				Y = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				Q = s("./src/reddit/hooks/useTheme.ts"),
				X = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Z = s("./src/reddit/components/SearchDiscoveryUnits/HeroUnit/index.m.less"),
				$ = s.n(Z);
			const {
				fbt: ee
			} = s("./node_modules/fbt/lib/FbtPublic.js"), te = `${p.a.assetPath}/img/link-placeholder.png`, se = Object(U.c)({
				autoplayPref: D.c,
				showPromotedCTA: A.a,
				flairStyleTemplate: k.W,
				showCTAExperiment: L.a
			});

			function ne(e) {
				var t;
				const {
					postId: s,
					listingKey: a,
					searchOptions: c,
					discoveryUnit: d
				} = e, l = Object(r.useRef)(), m = Object(r.useRef)(), {
					autoplayPref: u,
					flairStyleTemplate: L,
					showPromotedCTA: A,
					showCTAExperiment: D
				} = Object(i.e)(t => se(t, e)), U = Object(i.e)(e => Object(B.A)(e, {
					identifier: s
				})), Z = Object(i.e)(e => Object(F.d)(e, {
					postId: s
				})), ne = Object(i.e)(X.b), re = Object(i.e)(X.c), oe = Object(k.eb)(), ie = Object(E.b)(), ae = Object(i.d)(), ce = Object(Q.a)(), {
					post: de,
					subredditOrProfile: le
				} = Object(S.d)(s), me = Object(r.useCallback)((e, t) => {
					ae(Object(f.P)(e, t))
				}, [ae]), ue = !!de.source && !Z;
				if (Object(r.useEffect)(() => (l.current && Object(b.a)(l.current, (e, t) => {
						m.current && (t ? m.current.focusContent() : m.current.pauseContent())
					}), Object(R.x)(a, de.id, c, oe, d), () => {
						l.current && Object(b.b)(l.current), m.current && m.current.stopContent(), l.current = null, m.current = null
					}), []), !de) return null;
				const {
					media: pe
				} = Z || de || {}, be = (null == pe ? void 0 : pe.type) === M.o.EMBED && (null == pe ? void 0 : pe.provider) === M.v.Twitter, he = (null == pe ? void 0 : pe.type) === M.o.VIDEO || (null == pe ? void 0 : pe.type) === M.o.GIFVIDEO;

				function xe(e) {
					e.stopPropagation(), e.preventDefault(), de.isSponsored ? (ae(Object(f.y)(de, _.a.Click)), de.source ? de.source.outboundUrl ? Object(x.e)(de.source.outboundUrl, x.d.BLANK) : Object(x.e)(de.source.url, x.d.BLANK) : Object(x.e)(de.permalink, x.d.BLANK)) : ae(ne || re ? Object(f.ab)(Object(I.b)(de.permalink), de.id) : Object(T.a)({
						pathname: Object(I.b)(de.permalink),
						state: Object(N.b)(oe)
					}))
				}

				function fe(e) {
					de.isSponsored && he || xe(e), de.isSponsored && function(e) {
						he || (e.stopPropagation(), e.preventDefault()), ie(Object(R.y)(de.id, c, d, a, oe))
					}(e)
				}
				return de.isBlank ? o.a.createElement(O.BlankPost, {
					onPostViewable: me,
					post: de,
					postId: de.id
				}) : o.a.createElement(S.a, {
					postId: s
				}, o.a.createElement(C.b, {
					className: $.a.postContainer,
					eventFactory: function(e, t) {
						var s;
						let n = null,
							r = P.r;
						return de.isSponsored || (r = P.t, n = null !== (s = R.E[t]) && void 0 !== s ? s : R.e.POST), r(c, oe, n, a, d)(e)
					},
					onClick: xe,
					post: de,
					"data-click-id": "hero_unit",
					style: {
						...Object(Y.d)({
							theme: ce,
							flairStyleTemplate: L,
							redditStyle: !1
						}),
						...Object(Y.b)(L)
					}
				}, o.a.createElement(W.a, {
					"data-click-id": "background"
				}, o.a.createElement(g.a, {
					className: $.a.eventMeta,
					post: de
				}), o.a.createElement("div", {
					className: Object(n.a)($.a.postContent, {}),
					"data-click-id": "body"
				}, o.a.createElement(K.c, {
					className: $.a.postItemMetaContainer,
					key: "PostMeta",
					shouldShowSubscribeButton: !1,
					post: de,
					subredditOrProfile: le
				}), o.a.createElement("div", {
					className: $.a.postItemTitleContainer
				}, o.a.createElement(V.c, {
					hideSourceLink: !0,
					post: de,
					size: V.b.Medium,
					isOverlay: !1
				}), !A && ue && o.a.createElement(q.a, {
					className: $.a.outboundLink,
					href: (null === (t = null == de ? void 0 : de.source) || void 0 === t ? void 0 : t.url) || "",
					isSponsored: de.isSponsored,
					postId: de.id,
					source: de.source
				}, Object(H.a)(de))), function() {
					let e = o.a.createElement(o.a.Fragment, null);
					const t = !!de.source && Object(h.a)(de.source.url) || !!de.thumbnail && Object(h.a)(de.thumbnail.url),
						s = !(null == pe ? void 0 : pe.type) && t,
						r = Object(n.a)($.a.mediaWrapper, {
							[$.a.marginCancel]: A && !!de.source,
							[$.a.promotedTrend]: de.isSponsored
						});
					if (s) e = o.a.createElement("div", {
						className: r
					}, o.a.createElement(y.b, {
						className: $.a.thumbnail,
						post: de,
						templatePlaceholderImage: te,
						usePreview: !0
					}));
					else if (pe)
						if (pe.type !== M.o.RTJSON && pe.type !== M.o.TEXT) e = o.a.createElement("div", {
							className: Object(n.a)(r, be && $.a.twitterEmbed),
							onClickCapture: fe,
							ref: e => l.current = e
						}, o.a.createElement(j.a, {
							className: $.a.mediaContent,
							autoplayPref: u,
							isListing: !1,
							isMiniCard: !1,
							isNotCardView: !0,
							isPromotedTrend: de.isSponsored,
							post: Z || de,
							primaryContent: !0,
							scrollerItemRef: e => m.current = e,
							shouldLoad: !0,
							shouldPause: !0,
							showCentered: !0,
							showFull: !0
						}));
						else {
							e = o.a.createElement("div", {
								className: $.a.mediaPlaceholder
							}), (pe.type === M.o.RTJSON && pe.richtextContent || pe.type === M.o.TEXT && pe.content) && Object(w.a)(de, null == ce ? void 0 : ce.subredditContext) && (e = o.a.createElement("div", {
								className: r,
								onClickCapture: xe,
								ref: e => l.current = e
							}, o.a.createElement(j.a, {
								autoplayPref: u,
								className: $.a.textMedia,
								isListing: !1,
								isMiniCard: !1,
								isNotCardView: !1,
								post: Z || de,
								shouldPause: !0,
								shouldLoad: !0,
								showCentered: !0,
								showFull: !0
							}), o.a.createElement("div", {
								className: $.a.seeMore
							}, ee._("More", null, {
								hk: "362mDE"
							}))))
						} return e
				}(), A && de.source && o.a.createElement(z.a, {
					className: $.a.adLinkWrapper,
					ctaExperimentDesign: D && "card"
				}, o.a.createElement(q.a, {
					className: Object(n.a)($.a.outboundLink, {
						[$.a.ctaExperiment]: D
					}),
					href: de.source.url.replace(p.a.redditUrl, ""),
					isSponsored: de.isSponsored,
					postId: de.id,
					source: de.source
				}, de.source.displayText), de.callToAction && o.a.createElement(J.a, {
					className: $.a.adCallToAction,
					href: de.source.url.replace(p.a.redditUrl, ""),
					isSponsored: de.isSponsored,
					postId: de.id,
					source: de.source,
					showCTAExperiment: D
				}, de.callToAction)), !de.isSponsored && o.a.createElement(G.c, {
					className: Object(n.a)($.a.postItemFlatlistContainer),
					post: U || de
				}), o.a.createElement(v.d, null)))))
			}
			var re = s("./src/lib/LRUCache/index.ts"),
				oe = s("./src/reddit/components/Scroller/Simple.tsx"),
				ie = s("./src/reddit/components/SearchResultsContent/helpers/viewSearchThingTracker.ts"),
				ae = s("./src/reddit/hooks/usePageLayer.ts"),
				ce = s("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const de = 376,
				le = new re.a(1);

			function me(e) {
				let {
					discoveryUnit: t,
					listingKey: s,
					searchOptions: n,
					postId: r,
					children: a
				} = e;
				const c = Object(i.d)(),
					d = Object(ae.a)();
				if (!t || !r) return null;
				const l = () => {
					const e = `entered-hero-unit-${r}`;
					let o = ie.a.get(e);
					if (void 0 === o) {
						const i = t.layout.viewTypeWeb === ce.b.PromotedTrendHero;
						o = () => {
							c((e, o) => Object(P.u)(o(), t, r, n, d, s, i))
						}, ie.a.set(e, o)
					}
					return o
				};
				return o.a.createElement(oe.b, null, (() => {
					const e = `hero-unit-search-${s}`;
					let n;
					return void 0 === (n = le.get(e)) && (n = {
						estHeight: de,
						trackOnEnteredViewport: l(),
						id: t.id,
						render: () => a
					}), le.set(e, n), [n]
				})())
			}
			var ue = s("./src/reddit/constants/page.ts"),
				pe = s("./src/reddit/helpers/trackers/screenview.ts"),
				be = s("./src/reddit/hooks/useTracking.ts"),
				he = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				xe = s("./src/reddit/selectors/listings.ts"),
				fe = s("./src/reddit/selectors/platform.ts");
			const Oe = e => {
				const t = e.listings.activeKey,
					s = e.searchDiscoveryUnits.models[t];
				return s || {}
			};
			var ge = s("./src/reddit/selectors/searchFix.ts"),
				ve = s("./src/telemetry/index.ts"),
				je = s("./src/telemetry/models/Timer.ts");
			const {
				Hero: Ce,
				PromotedTrendHero: ye
			} = ce.b;

			function Ee(e) {
				const t = Object.values(e).find(e => e.layout.viewTypeWeb === Ce || e.layout.viewTypeWeb === ye);
				if (null == t ? void 0 : t.postOrder) return t.postOrder[0]
			}
			var _e = s("./src/reddit/helpers/search/searchClickSearchBarOriginElement.ts"),
				ke = s("./src/reddit/pages/SearchResults/index.tsx"),
				Se = s("./src/reddit/components/SearchResultsContent/NoResults/index.m.less"),
				we = s.n(Se);
			const {
				fbt: Ne
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Te = `${p.a.assetPath}/img/telescope-snoo.png`;
			var Ie;

			function Pe(e) {
				let {
					query: t,
					type: s,
					searchOptions: i,
					tab: a
				} = e;
				const c = Object(be.a)();
				Object(r.useEffect)(() => {
					c(Object(R.o)(s, i))
				}, [s]);
				const d = i.restrict_sr || ke.pageConfig[a].sidebar;
				return o.a.createElement("div", {
					className: Object(n.a)(we.a.noResults, d && we.a.withSidebar),
					"data-testid": "no-results"
				}, o.a.createElement("img", {
					alt: Ne._("No results image", null, {
						hk: "1BoGUJ"
					}),
					src: Te,
					className: we.a.image
				}), o.a.createElement("h2", {
					className: we.a.header
				}, Ne._("Hm... we couldn’t find any results for “", null, {
					hk: "4fFM7J"
				}), Ne._("{search query}", [Ne._param("search query", t)], {
					hk: "4vP3YT"
				}), "”"), o.a.createElement("p", {
					className: we.a.text
				}, Ne._("Double-check your spelling or try different keywords to {=adjust your search}", [Ne._param("=adjust your search", o.a.createElement("button", {
					className: we.a.button,
					onClick: () => {
						const e = document.querySelector('input[type="search"]');
						_e.b.set(_e.a.ADJUST_SEARCH_BUTTON), null == e || e.focus()
					}
				}, Ne._("adjust your search", null, {
					hk: "1pUIox"
				})))], {
					hk: "33XStx"
				})))
			}! function(e) {
				e.Comments = "comments", e.Communities = "communities", e.People = "people", e.Posts = "posts"
			}(Ie || (Ie = {}));
			var Re = s("./src/reddit/components/PostList/index.tsx"),
				Me = s("./src/reddit/components/SearchPost/index.tsx"),
				Le = s("./src/reddit/constants/postLayout.ts"),
				Fe = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				Be = s("./src/reddit/helpers/trackers/post.ts"),
				Ae = s("./src/reddit/selectors/tracking.ts"),
				De = s("./src/reddit/connectors/PostList/index.ts");
			const Ue = Object(De.c)(),
				He = Object(U.c)({
					...De.d,
					layout: () => Le.g.Search,
					viewportDataLoaded: Ae.a,
					postIds: (e, t) => {
						let {
							heroPostId: s,
							listingKey: n,
							listingName: r,
							inSubredditOrProfile: o,
							searchDiscoveryUnit: i
						} = t;
						const a = i && i.postOrder,
							c = Ee(Oe(e));
						if (a && a.length > 0) {
							if (s) {
								const t = a.indexOf(s);
								if (t > -1) return a.splice(t, 1), Object(F.X)(e, a)
							}
							return Object(F.X)(e, a)
						}
						const {
							models: d
						} = e.posts;
						return Object(F.D)(e, n, r, !!o).filter(e => d && d[e] && !d[e].isSponsored && c !== e)
					}
				}),
				We = (e, t, s, n) => {
					if (s) return Object(Be.k)(e, t);
					const {
						listingKey: r,
						searchOptions: o,
						pageLayer: i,
						searchDiscoveryUnit: a,
						sendEvent: c
					} = n;
					return c(Object(R.s)(e, o, i, R.E[t], r, a)), Object(Be.k)(e, t)
				},
				Ve = Object(i.b)(He, (e, t) => ({
					...Object(De.b)(e),
					trackOnPostEnteredViewport: e => {
						t.sendEvent(Object(R.x)(t.listingKey, e, t.searchOptions, t.pageLayer, t.searchDiscoveryUnit))
					}
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					openPost: e => t.openPost(e),
					postClickEventFactory: We,
					postComponentForLayout: e => {
						let {
							post: t
						} = e;
						return t.isBlank ? Fe.a : Me.a
					}
				}));
			const Ge = (e => Object(E.c)(Ue(Ve(e))))(Re.a),
				Ke = () => null,
				qe = Object(U.c)({
					viewTreatment: B.D,
					searchDiscoveryUnitsModels: Oe,
					hasPostResults: B.o,
					apiPending: xe.d,
					postIds: F.z,
					posts: F.y,
					loadMore: xe.g,
					isOverlayOpen: fe.i
				});

			function ze(e) {
				const {
					listingKey: t,
					listingName: s,
					location: n,
					searchOptions: a
				} = e, p = Object(ae.a)(), b = Object(be.a)(), h = Object(i.d)(), {
					viewTreatment: x,
					searchDiscoveryUnitsModels: f,
					hasPostResults: O,
					postIds: g,
					isOverlayOpen: v,
					apiPending: j
				} = Object(i.e)(t => qe(t, e)), C = Object(l.a)(v), y = Object(r.useRef)(!1), E = void 0 === j || j, _ = (e, s) => b(Object(pe.v)(t, a, s, e, p, Object(ge.b)({
					pageLayer: p
				})));
				let k;
				Object(r.useEffect)(() => {
					O && !c()(g) && T()
				}, [O, g]), Object(r.useEffect)(() => {
					C && !v && T()
				}, [v, C]), x === ce.c.Trending && (k = Ee(f));
				const S = Object(m.a)(a.q || ""),
					w = Object(r.useMemo)(() => Object.values(f).find(e => e.name === he.l || e.name === he.f), [f]),
					N = k && w;

				function T() {
					if (ve.c.has(t) || !y.current) {
						y.current = !0;
						const e = ve.c.has(t) ? ve.c.end(t) : 0;
						_(e, je.TimerType.InApp)
					}
				}
				return O || N || E ? o.a.createElement(o.a.Fragment, null, N && o.a.createElement(me, {
					key: k,
					postId: k,
					discoveryUnit: w,
					searchOptions: a,
					listingKey: t
				}, o.a.createElement(ne, {
					key: k,
					discoveryUnit: w,
					postId: k,
					listingKey: t,
					searchOptions: a
				})), (O || E) && o.a.createElement(Ge, {
					key: "posts",
					listingKey: t,
					listingName: s,
					location: n,
					inSubredditOrProfile: !1,
					noPostsComponent: Ke,
					onLoadMore: function() {
						h(Object(u.n)([d.ic.Posts]))
					},
					searchOptions: a
				})) : o.a.createElement(Pe, {
					query: S,
					type: Ie.Posts,
					searchOptions: a,
					tab: ue.h.Posts
				})
			}
			var Je = s("./src/reddit/selectors/experiments/optimizedSerpPosts.ts"),
				Ye = s("./node_modules/lodash/constant.js"),
				Qe = s.n(Ye),
				Xe = s("./node_modules/lodash/times.js"),
				Ze = s.n(Xe),
				$e = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.tsx"),
				et = s("./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.tsx"),
				tt = s("./src/reddit/components/SearchResultsContent/Communities/index.m.less"),
				st = s.n(tt);
			const nt = e => {
				const {
					listingKey: t,
					searchOptions: s
				} = e, n = Object(i.e)(e => Object(B.d)(e, {
					listingKey: t
				})), r = Object(i.e)(e => Object(B.u)(e, {
					listingKey: t
				})), a = Boolean(r && r.token) && n.length > 0;
				return o.a.createElement("div", {
					className: st.a.container,
					"data-testid": "comments-list"
				}, o.a.createElement($e.b, {
					identifiers: n,
					listingKey: t,
					searchOptions: s,
					componentType: d.hc.Comments
				}), a && o.a.Children.toArray(Ze()(3, Qe()(o.a.createElement(et.a, {
					className: st.a.loadMoreItem,
					isLoading: !0
				})))))
			};
			var rt = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx");
			const ot = (e, t) => Boolean(t && t.token) && e.length > 0,
				it = e => {
					const {
						listingKey: t,
						searchOptions: s
					} = e, n = Object(i.e)(e => Object(B.g)(e, {
						listingKey: t
					})), r = Object(i.e)(e => Object(B.v)(e, {
						listingKey: t
					}));
					return o.a.createElement("div", {
						className: st.a.container,
						"data-testid": "communities-list"
					}, !s.is_multi && o.a.createElement($e.b, {
						identifiers: n,
						listingKey: t,
						searchOptions: s,
						componentType: d.hc.Subreddits
					}), ot(n, r) && o.a.Children.toArray(Ze()(3, Qe()(o.a.createElement(rt.a, {
						className: st.a.loadMoreItem,
						isLoading: !0
					})))))
				};
			var at = s("./src/reddit/components/SearchResultsContent/index.m.less"),
				ct = s.n(at);
			const dt = e => {
				const {
					listingKey: t,
					searchOptions: s
				} = e, n = Object(i.e)(e => Object(B.a)(e, {
					listingKey: t
				})), r = Object(i.e)(e => Object(B.t)(e, {
					listingKey: t
				}));
				return o.a.createElement("div", {
					className: st.a.container,
					"data-testid": "people-list"
				}, !s.is_multi && o.a.createElement($e.b, {
					identifiers: n,
					listingKey: t,
					searchOptions: s,
					componentType: d.hc.Users
				}), ot(n, r) && o.a.Children.toArray(Ze()(3, Qe()(o.a.createElement(rt.a, {
					className: st.a.loadMoreItem,
					isLoading: !0
				})))))
			};
			var lt = s("./src/reddit/components/SearchPost/Placeholder.tsx");
			const mt = e => {
				const {
					listingKey: t,
					searchOptions: s
				} = e;
				let n = Object(i.e)(e => Object(B.x)(e, {
					listingKey: t
				}));
				const a = Object(i.e)(e => Object(B.w)(e, {
						listingKey: t
					})),
					c = Object(i.e)(e => Object(B.D)(e)),
					l = Object(i.e)(e => Oe(e));
				let m;
				c === ce.c.Trending && (m = Ee(l));
				const u = Object(r.useMemo)(() => Object.values(l).find(e => e.name === he.l || e.name === he.f), [l]);
				if (m && u) {
					const e = (n = [...n]).indexOf(m);
					n.splice(e, 1)
				}
				return o.a.createElement(o.a.Fragment, null, m && u && o.a.createElement(me, {
					key: m,
					postId: m,
					discoveryUnit: u,
					searchOptions: s,
					listingKey: t
				}, o.a.createElement(ne, {
					key: m,
					discoveryUnit: u,
					postId: m,
					listingKey: t,
					searchOptions: s
				})), o.a.createElement("div", {
					className: st.a.container,
					"data-testid": "posts-list"
				}, o.a.createElement($e.b, {
					identifiers: n,
					listingKey: t,
					searchOptions: s,
					componentType: d.hc.Posts
				}), function(e, t) {
					return Boolean(t && t.token) && e.length > 0
				}(n, a) && o.a.Children.toArray(Ze()(3, Qe()(o.a.createElement(lt.a, {
					className: st.a.loadMoreItem,
					isLoading: !0
				}))))))
			};

			function ut(e) {
				const {
					hasResults: t,
					searchOptions: s,
					noResultsType: n,
					searchResultsTab: r,
					pendingSelector: a
				} = e, c = Object(m.a)(s.q || ""), d = Object(i.e)(t => a(t, e)), l = void 0 === d || d;
				return o.a.createElement(o.a.Fragment, null, t || l ? e.children : o.a.createElement(Pe, {
					searchOptions: s,
					query: c,
					type: n,
					tab: r
				}))
			}

			function pt(e) {
				const {
					listingKey: t,
					listingName: s,
					location: r,
					searchOptions: a,
					tab: c
				} = e, d = Object(i.e)(e => Object(B.n)(e, {
					listingKey: t
				})), l = Object(i.e)(e => Object(B.l)(e, {
					listingKey: t
				})), m = Object(i.e)(e => Object(B.m)(e, {
					listingKey: t
				})), u = Object(i.e)(e => Object(B.p)(e, {
					listingKey: t
				})), p = Object(i.e)(e => Object(Je.a)(e));
				return o.a.createElement("div", {
					className: Object(n.a)(ct.a.resultsContainer)
				}, c === ue.h.Listings ? o.a.createElement(ut, {
					hasResults: d,
					searchOptions: a,
					noResultsType: Ie.Communities,
					searchResultsTab: ue.h.Listings,
					listingKey: t,
					pendingSelector: B.i
				}, o.a.createElement(it, {
					listingKey: t,
					searchOptions: a,
					key: ue.h.Listings
				})) : c === ue.h.People ? o.a.createElement(ut, {
					hasResults: l,
					searchOptions: a,
					noResultsType: Ie.People,
					searchResultsTab: ue.h.People,
					listingKey: t,
					pendingSelector: B.c
				}, o.a.createElement(dt, {
					listingKey: t,
					searchOptions: a,
					key: ue.h.People
				})) : c === ue.h.Comments ? o.a.createElement(ut, {
					hasResults: m,
					searchOptions: a,
					noResultsType: Ie.Comments,
					searchResultsTab: ue.h.Comments,
					listingKey: t,
					pendingSelector: B.f
				}, o.a.createElement(nt, {
					listingKey: t,
					searchOptions: a,
					key: ue.h.Comments
				})) : p ? o.a.createElement(ut, {
					hasResults: u,
					searchOptions: a,
					noResultsType: Ie.Posts,
					searchResultsTab: ue.h.Posts,
					listingKey: t,
					pendingSelector: B.z
				}, o.a.createElement(mt, {
					listingKey: t,
					searchOptions: a,
					key: ue.h.Comments
				})) : o.a.createElement(ze, {
					key: t,
					listingKey: t,
					listingName: s,
					location: r,
					searchOptions: a
				}))
			}
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/selectors.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/selectors/searchFix.ts"),
				r = s("./src/reddit/selectors/subreddit.ts");
			const o = (e, t) => {
				const s = Object(n.a)(e, t);
				return s ? Object(r.C)(e, {
					subredditName: s
				}) : null
			}
		},
		"./src/reddit/components/SearchResultsNav/index.m.less": function(e, t, s) {
			e.exports = {
				searchResultsNav: "_21H_PIzpqfpibB_EcUDwpj",
				pillRow: "_3XkfKrHLCXvnVsLyBJXzzv",
				pillElement: "_1gui9gwvmz0Ta6TaySS6jf",
				nsfwToggleContainer: "_1nT46ChOZ3tgGqgs2CyMeJ",
				searchSwitcherContainer: "_10JrVcY3xBcUNO7dNh0Js2"
			}
		},
		"./src/reddit/components/SearchResultsNav/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return H
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/noop.js"),
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/constants/colors.ts"),
				m = s("./src/lib/makeSearchKey/index.ts"),
				u = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				p = s("./src/reddit/helpers/localStorage/index.ts");
			const b = () => {
				const [e, t] = Object(i.useState)(!1);
				return Object(i.useEffect)(() => {
					var e;
					const s = null !== (e = Object(p.B)("should-show-comment-tab-tooltip")) && void 0 !== e ? e : 2;
					t(Boolean(s)), 2 === s ? Object(p.Hb)("should-show-comment-tab-tooltip", 1) : 1 === s && Object(p.Hb)("should-show-comment-tab-tooltip", !1)
				}, []), {
					get shouldShowCommentTabTooltip() {
						return e
					},
					resetShowCommentTabTooltip() {
						e && t(!1)
					}
				}
			};
			var h = s("./src/reddit/constants/page.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/controls/InternalLink/index.tsx"),
				O = s("./src/reddit/helpers/search/searchResultsTabTo.ts"),
				g = s("./src/reddit/helpers/trackers/searchResults.ts"),
				v = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				j = s("./src/reddit/hooks/useTracking.ts"),
				C = s("./src/reddit/models/SearchDiscoveryUnit/index.ts"),
				y = s("./src/reddit/selectors/searchResults.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/components/Pill/PillButton/index.tsx"),
				k = s("./node_modules/history/esm/history.js"),
				S = s("./node_modules/react-router-redux/es/index.js"),
				w = s("./src/lib/addQueryParams/index.ts"),
				N = s("./src/lib/classNames/index.ts"),
				T = s("./src/lib/colors/constants.ts"),
				I = s("./src/reddit/constants/parameters.ts"),
				P = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				R = s("./src/reddit/hooks/usePageLayer.ts"),
				M = s("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				L = s("./src/reddit/components/SearchNSFWToggle/SearchNSFWToggle.m.less"),
				F = s.n(L);
			const B = "safe-search-toggle";

			function A(e) {
				let {
					searchOptions: t
				} = e;
				const s = Object(j.a)(),
					[r, o] = a.a.useState(!0);
				Object(i.useEffect)(() => {
					var e;
					o(null), p(!!(null === (e = null == x ? void 0 : x.queryParams) || void 0 === e ? void 0 : e.include_over_18))
				}, []);
				const d = Object(v.a)({}),
					{
						nsfwSessionSetting: m,
						setNsfwSessionSetting: p
					} = Object(M.b)(),
					{
						shouldShowTooltip: b,
						resetShowTooltip: h
					} = Object(M.c)(!m);
				Object(i.useEffect)(() => {
					if (b) return window.addEventListener("click", h), () => {
						window.removeEventListener("click", h)
					}
				}, [b]);
				const x = Object(R.a)(),
					f = Object(c.d)();
				d.arrowProps.style = {
					...d.arrowProps.style,
					borderBottom: `3px solid ${l.a.alien600}`
				}, d.popperProps.style = {
					...d.popperProps.style,
					backgroundColor: l.a.alien600,
					top: "4px",
					maxWidth: "360px",
					textAlign: "center"
				};
				const C = null != r ? r : !m;
				return a.a.createElement("div", {
					className: Object(N.a)(F.a.searchNSFWToggle),
					"data-testid": B,
					onMouseEnter: d.show,
					onMouseLeave: d.hide
				}, a.a.createElement("label", {
					htmlFor: B,
					className: Object(N.a)(F.a.searchNSFWToggleLabel)
				}, n.fbt._("Safe Search", null, {
					hk: "x1C2Y"
				})), a.a.createElement(P.a, {
					activeColorOverride: T.a,
					id: B,
					onToggle: function() {
						var e;
						s(Object(g.i)(!C, t, x));
						const n = !m;
						p(n);
						const {
							include_over_18: r,
							...o
						} = (null == x ? void 0 : x.queryParams) || {}, i = (null === (e = null == x ? void 0 : x.routeMatch) || void 0 === e ? void 0 : e.match.url) || O.a, a = {
							...o,
							...n && {
								[I.l]: "1"
							}
						}, c = {
							pathname: i,
							search: Object(w.a)("", {
								...a
							})
						};
						f(Object(S.b)(Object(k.c)(c)))
					},
					on: C,
					redditStyle: !0,
					ref: d.target.ref
				}), a.a.createElement(u.a, {
					visible: b || d.visible,
					arrowProps: d.arrowProps,
					popperProps: d.popperProps
				}, C ? n.fbt._("You won’t see adult or Not Safe for Work (NSFW) search results unless you turn Safe Search off", null, {
					hk: "tefl0"
				}) : n.fbt._("You’ll see adult and Not Safe for Work (NSFW) search results unless you turn Safe Search on", null, {
					hk: "1SDOFf"
				})))
			}
			var D = s("./src/reddit/components/SearchResultsNav/index.m.less"),
				U = s.n(D);

			function H(e) {
				let {
					activeTab: t,
					searchOptions: s,
					searchSwitcher: r
				} = e;
				const p = Object(j.a)(),
					k = Object(c.e)(E.lb),
					S = Object(c.e)(y.D),
					w = Object(x.eb)(),
					N = S === C.c.Trending,
					T = Object(v.a)({}),
					{
						shouldShowCommentTabTooltip: I,
						resetShowCommentTabTooltip: P
					} = b();
				T.arrowProps.style = {
					...T.arrowProps.style,
					borderLeft: "4px solid transparent",
					borderRight: "4px solid transparent",
					top: "-3px",
					left: "50%",
					transform: "translateX(-50%)",
					borderBottom: `3px solid ${l.a.alien600}`
				}, T.popperProps.style = {
					...T.popperProps.style,
					backgroundColor: l.a.alien600,
					top: "100%",
					left: "50%",
					transform: "translateX(-50%)",
					whiteSpace: "nowrap"
				}, Object(i.useEffect)(() => {
					if (I) return window.addEventListener("click", P), () => {
						window.removeEventListener("click", P)
					}
				}, [I]);
				const R = {
						condition: !0,
						active: t === h.h.Posts,
						target: g.b.Posts,
						contentType: d.ic.Posts,
						text: n.fbt._("Posts", null, {
							hk: "vNVpl"
						})
					},
					M = {
						condition: !s.is_multi && !s.restrict_sr,
						active: t === h.h.Listings,
						target: g.b.Communities,
						contentType: d.ic.Subreddits,
						text: n.fbt._("Communities", null, {
							hk: "45NgGC"
						})
					},
					L = {
						condition: !s.is_multi && !s.restrict_sr,
						active: t === h.h.People,
						target: g.b.People,
						contentType: d.ic.Users,
						text: n.fbt._("People", null, {
							hk: "Ttxbf"
						})
					},
					F = [R, {
						condition: !(s.source === m.a.Trending || s.source === m.a.PromotedTrend),
						active: t === h.h.Comments,
						target: g.b.Comments,
						contentType: d.ic.Comments,
						text: n.fbt._("Comments", null, {
							hk: "z0DGA"
						}),
						showTooltip: !0
					}, M, L],
					B = k && !N && "1" !== s.sr_nsfw;
				return a.a.createElement("div", {
					"data-testid": "search-results-nav",
					className: U.a.searchResultsNav
				}, a.a.createElement("div", {
					className: U.a.pillRow,
					role: "tablist"
				}, F.filter(e => e.condition).map(e => {
					const {
						active: t,
						target: r,
						text: i,
						contentType: c
					} = e;
					return a.a.createElement(f.default, {
						key: r,
						"data-testid": r,
						to: Object(O.b)({
							searchType: c,
							pageLayer: w
						}),
						"aria-selected": t,
						role: "tab",
						className: U.a.pillElement,
						onClick: () => (e => {
							e.active || p(Object(g.n)(e.target, s))
						})(e)
					}, a.a.createElement(u.a, {
						visible: Boolean(e.showTooltip) && I,
						arrowProps: T.arrowProps,
						popperProps: T.popperProps
					}, n.fbt._("Now you can search comments!", null, {
						hk: "LePo6"
					})), a.a.createElement(_.a, {
						active: t,
						onClick: o.a,
						variant: _.b.TAB_GROUP
					}, i))
				})), r && a.a.createElement("div", {
					className: U.a.searchSwitcherContainer
				}, r), B && a.a.createElement("div", {
					className: U.a.nsfwToggleContainer
				}, a.a.createElement(A, {
					searchOptions: s
				})))
			}
		},
		"./src/reddit/components/SearchResultsSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				container: "DpriHZnFiOfa0afZpg8vf",
				header: "_3n4VKjpr-iVnAmYcon-YbI",
				link: "_2tLIUcp3fYt74ZlVikNlz5",
				noResults: "YoadDFUejEmzEbJmjTvHn"
			}
		},
		"./src/reddit/components/SearchResultsSidebar/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return D
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/config.ts"),
				l = s("./src/reddit/components/CreateCommunityButton/index.tsx"),
				m = s("./src/reddit/components/CreateCommunitySidebar/index.m.less"),
				u = s.n(m),
				p = s("./src/lib/lessComponent.tsx");
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = p.a.div("ButtonContainer", u.a), x = p.a.div("Container", u.a), f = p.a.img("BannerImg", u.a), O = p.a.img("SnooImg", u.a), g = p.a.div("CommunityText", u.a);
			var v = () => o.a.createElement(x, null, o.a.createElement(f, {
					src: `${d.a.assetPath}/img/search-results-community-banner.png`
				}), o.a.createElement(O, {
					src: `${d.a.assetPath}/img/snoo-thinking.png`
				}), o.a.createElement(g, null, b._("Have an idea for a new community?", null, {
					hk: "LfgUP"
				})), o.a.createElement(h, null, o.a.createElement(l.a, {
					className: u.a.Button,
					eventSource: "sidebar"
				}))),
				j = s("./src/reddit/components/IdCard/async.tsx"),
				C = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.tsx"),
				y = s("./src/reddit/components/SidebarContainer/index.tsx"),
				E = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				_ = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				k = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				S = s("./src/reddit/controls/InternalLink/index.tsx"),
				w = s("./src/reddit/helpers/search/searchResultsTabTo.ts"),
				N = s("./src/reddit/hooks/usePageLayer.ts"),
				T = s("./src/reddit/selectors/platform.ts"),
				I = s("./src/reddit/selectors/searchResults.ts"),
				P = s("./src/reddit/selectors/subreddit.ts"),
				R = s("./src/reddit/selectors/user.ts"),
				M = s("./src/reddit/selectors/widgets.ts"),
				L = s("./src/reddit/components/SearchResultsSidebar/index.m.less"),
				F = s.n(L);
			const B = Object(a.c)({
					authorIdentifiers: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(I.a)(e, {
							listingKey: s
						})
					},
					authorLoadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(I.t)(e, {
							listingKey: s
						})
					},
					communityIdentifiers: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(I.g)(e, {
							listingKey: s
						})
					},
					communitiesLoadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(I.v)(e, {
							listingKey: s
						})
					},
					currentSubreddit: T.e,
					isLoggedIn: R.R,
					hasCommunityResults: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(I.n)(e, {
							listingKey: s
						})
					},
					hasAuthorResults: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(I.l)(e, {
							listingKey: s
						})
					},
					subredditId: (e, t) => {
						let {
							listingName: s
						} = t;
						return Object(P.I)(e, s)
					},
					postFlairWidgets: (e, t) => {
						let {
							listingName: s
						} = t;
						const n = Object(P.I)(e, s);
						return Object(M.g)(e, {
							subredditId: n
						})
					},
					idCardWidget: (e, t) => {
						let {
							listingName: s
						} = t;
						return Object(M.d)(e, {
							subredditName: s
						})
					}
				}),
				A = e => {
					let {
						authorIdentifiers: t,
						authorLoadMore: s,
						className: r,
						communityIdentifiers: i,
						communitiesLoadMore: a,
						hasAuthorResults: d,
						hasCommunityResults: l,
						listingKey: m,
						listingName: u,
						idCardWidget: p,
						isLoggedIn: b,
						postFlairWidgets: h,
						searchOptions: x,
						currentSubreddit: f
					} = e;
					const O = Boolean(f && u === f.name && x.restrict_sr),
						g = !!x.is_multi,
						T = i.length > C.a || !!a,
						I = t.length > C.a || !!s;
					let P;
					const R = Object(N.a)();
					return O ? P = o.a.createElement(o.a.Fragment, null, p && o.a.createElement(j.a, {
						listingName: u
					}), h && h.map((e, t) => o.a.createElement(E.a, {
						key: `widgetSpacer-${t}`
					}, o.a.createElement(k.a, {
						subredditName: u,
						widget: e
					})))) : g || (P = o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: F.a.container,
						"data-testid": "communities-list"
					}, o.a.createElement("h4", {
						className: F.a.header
					}, n.fbt._("Communities", null, {
						hk: "3cMR66"
					})), l ? o.a.createElement(o.a.Fragment, null, !x.is_multi && o.a.createElement(C.b, {
						componentType: c.hc.Subreddits,
						identifiers: i,
						listingKey: m,
						searchOptions: x,
						sidebar: !0
					}), T && o.a.createElement(S.default, {
						to: Object(w.b)({
							searchType: c.ic.Subreddits,
							pageLayer: R
						})
					}, o.a.createElement("p", {
						className: F.a.link
					}, n.fbt._("See more communities", null, {
						hk: "2VoaHj"
					})))) : o.a.createElement("p", {
						className: F.a.noResults
					}, n.fbt._("No results", null, {
						hk: "3feoKq"
					}))), o.a.createElement("div", {
						className: F.a.container,
						"data-testid": "authors-list"
					}, o.a.createElement("h4", {
						className: F.a.header
					}, n.fbt._("People", null, {
						hk: "2M8TqB"
					})), d ? o.a.createElement(o.a.Fragment, null, !x.is_multi && o.a.createElement(C.b, {
						componentType: c.hc.Users,
						identifiers: t,
						listingKey: m,
						searchOptions: x,
						sidebar: !0
					}), I && o.a.createElement(S.default, {
						to: Object(w.b)({
							searchType: c.ic.Users,
							pageLayer: R
						})
					}, o.a.createElement("p", {
						className: F.a.link
					}, n.fbt._("See more people", null, {
						hk: "yjtZU"
					})))) : o.a.createElement("p", {
						className: F.a.noResults
					}, n.fbt._("No results", null, {
						hk: "3qx6oy"
					}))), b && o.a.createElement("div", {
						className: F.a.container
					}, o.a.createElement(v, null)))), o.a.createElement(y.a, {
						"data-testid": "search-results-sidebar",
						className: r
					}, P, o.a.createElement(_.a, null))
				},
				D = e => {
					const t = Object(i.e)(t => B(t, e)),
						s = {
							...e,
							...t
						};
					return o.a.createElement(A, s)
				}
		},
		"./src/reddit/components/SearchResultsSubNav/GlobalSearchResultsLink/index.m.less": function(e, t, s) {
			e.exports = {
				TertiaryButton: "_3t6mNXBt6sQ7oZpTvfpI-D",
				tertiaryButton: "_3t6mNXBt6sQ7oZpTvfpI-D",
				AllRedditResultsButton: "_3DJNcKXVcC9fp5NF4suS_j",
				allRedditResultsButton: "_3DJNcKXVcC9fp5NF4suS_j"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/Select/SelectOption/index.m.less": function(e, t, s) {
			e.exports = {
				SelectOption: "_iuAkxGWujgYETf2Xyv89",
				selectOption: "_iuAkxGWujgYETf2Xyv89",
				mIsSelected: "hxyadGitKiIMfl81IVThw"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/Select/index.m.less": function(e, t, s) {
			e.exports = {
				caret: "OGoNN0lGfOACQsVwIa1wo",
				Wrapper: "_3yqn7UgWZCfM22Sk-rcBbs",
				wrapper: "_3yqn7UgWZCfM22Sk-rcBbs",
				caretOpen: "_1ILOkGbdwmhXOmzBDCYXFT",
				filterButton: "BZDMD8yWu5imupa73nqYE",
				hasValue: "_1HyZhQLyitFqci_zC5jGCy",
				Dropdown: "_3RwR0q62tl_HktsM6eNnOn",
				dropdown: "_3RwR0q62tl_HktsM6eNnOn"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/index.m.less": function(e, t, s) {
			e.exports = {
				RightLink: "_3AmQ4JXJufVLUdOsC6v61i",
				rightLink: "_3AmQ4JXJufVLUdOsC6v61i",
				ArrowRight: "FGX7ywlMTix8BeUr5G7TE",
				arrowRight: "FGX7ywlMTix8BeUr5G7TE",
				Component: "_1fPZw9wLFaCEzhzp2Hkx18",
				component: "_1fPZw9wLFaCEzhzp2Hkx18",
				ComponentRedesign: "_26jxFFm8Z3TxPyZxoddAGy",
				componentRedesign: "_26jxFFm8Z3TxPyZxoddAGy"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return be
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/layout/row/Inline/index.tsx"),
				l = s("./src/reddit/selectors/subreddit.ts"),
				m = s("./src/lib/constants/index.ts"),
				u = s("./node_modules/fbt/lib/FbtPublic.js"),
				p = s("./src/reddit/constants/parameters.ts"),
				b = s("./src/reddit/selectors/searchResults.ts"),
				h = s("./src/lib/addQueryParams/index.ts");
			const x = (e, t, s, n, r, o) => {
				const i = e && e[s],
					a = {};
				let c = Object(h.a)(t, {
					[s]: r
				});
				const d = [];
				for (const l of n) {
					const e = Object(h.a)(t, {
						[s]: l
					});
					a[e] = o[l](), d.push(e), i === l && (c = e)
				}
				return {
					optionLabels: a,
					options: d,
					value: c
				}
			};
			var f = s("./src/higherOrderComponents/asTooltip.tsx"),
				O = s("./src/reddit/components/Pill/PillButton/index.tsx"),
				g = s("./src/reddit/controls/Dropdown/index.tsx"),
				v = s("./src/reddit/icons/fonts/index.tsx"),
				j = s("./src/reddit/actions/tooltip.ts"),
				C = s("./src/reddit/selectors/tooltip.ts");
			const y = Object(i.c)({
				isOpen: (e, t) => {
					let {
						tooltipId: s
					} = t;
					return Object(C.b)(s)(e)
				}
			});
			var E = s("./src/reddit/components/SearchResultsSubNav/Select/index.m.less"),
				_ = s.n(E),
				k = s("./node_modules/query-string/index.js"),
				S = s.n(k),
				w = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				N = s("./src/reddit/components/TrackingHelper/index.tsx"),
				T = s("./src/reddit/constants/history.ts"),
				I = s("./src/reddit/controls/Dropdown/Row.tsx"),
				P = s("./src/reddit/helpers/history/index.ts"),
				R = s("./node_modules/lodash/fromPairs.js"),
				M = s.n(R),
				L = s("./src/lib/extractQueryParams/index.ts"),
				F = s("./src/reddit/helpers/correlationIdTracker.ts"),
				B = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				A = s("./src/reddit/helpers/trackers/searchResults.ts"),
				D = s("./src/reddit/selectors/telemetry.ts");
			const U = (e, t) => {
					const s = M()([...Object(L.a)(e)]);
					return Object(m.zc)(s.sort) && (t.sort = s.sort), Object(m.Ac)(s.t) && (t.t = s.t), t
				},
				H = (e, t, s, n) => () => e(e => ({
					...Object(A.g)(e),
					source: "search",
					action: "click",
					noun: t,
					correlationId: Object(F.c)(F.a.SearchResults),
					actionInfo: D.d(e),
					search: D.db(e, U(s, n), B.a.SERP)
				})),
				W = e => {
					let {
						isSelected: t,
						option: s,
						searchOptions: n,
						type: o,
						styles: i,
						displayText: c
					} = e;
					const d = Object(N.b)();
					return r.a.createElement(w.a, {
						key: s,
						to: {
							pathname: S.a.parseUrl(s).url,
							state: {
								[T.b.SearchOriginPage]: Object(P.b)(T.b.SearchOriginPage)
							},
							search: s.replace(S.a.parseUrl(s).url + "?", "")
						},
						onClick: H(d, o, s, n)
					}, r.a.createElement(I.b, {
						className: Object(a.a)(i.SelectOption, t && i.mIsSelected),
						displayText: c,
						isSelected: t
					}))
				};
			var V = s("./src/reddit/components/SearchResultsSubNav/Select/SelectOption/index.m.less"),
				G = s.n(V);

			function K() {
				return (K = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const q = Object(f.a)(e => r.a.createElement(g.a, K({
					className: _.a.Component
				}, e))),
				z = e => {
					let {
						active: t,
						label: s,
						options: n,
						optionLabels: i,
						searchOptions: c,
						tooltipId: d,
						type: l,
						value: m,
						...u
					} = e;
					const {
						isOpen: p,
						onClick: b
					} = (e => {
						const {
							isOpen: t
						} = Object(o.e)(t => y(t, {
							tooltipId: e
						})), s = Object(o.d)();
						return {
							isOpen: t,
							onClick: t ? () => s(Object(j.i)()) : () => s(Object(j.f)({
								tooltipId: e
							}))
						}
					})(d);
					return r.a.createElement("div", {
						className: _.a.Wrapper
					}, r.a.createElement(O.a, K({}, u, {
						active: p,
						className: Object(a.a)(_.a.filterButton, t && _.a.hasValue),
						onClick: b,
						variant: O.b.TAB_GROUP
					}), s, r.a.createElement(v.a, {
						name: "caret_down",
						className: Object(a.a)(_.a.caret, p && _.a.caretOpen)
					})), r.a.createElement("div", {
						id: d
					}, r.a.createElement(q, {
						className: _.a.Dropdown,
						isOpen: p,
						tooltipId: d
					}, n.map((e, t) => r.a.createElement(W, {
						displayText: i[e],
						key: t,
						isSelected: e === m,
						option: e,
						searchOptions: c,
						styles: {
							mIsSelected: G.a.mIsSelected,
							SelectOption: G.a.SelectOption
						},
						type: l
					})))))
				},
				J = [m.fc.Relevance, m.fc.Hot, m.fc.Top, m.fc.New, m.fc.Comments],
				Y = {
					[m.fc.Hot]: () => u.fbt._("Hot", null, {
						hk: "3c99Ga"
					}),
					[m.fc.Relevance]: () => u.fbt._("Relevance", null, {
						hk: "LvJkD"
					}),
					[m.fc.Top]: () => u.fbt._("Top", null, {
						hk: "bijGV"
					}),
					[m.fc.New]: () => u.fbt._("New", null, {
						hk: "23egpt"
					}),
					[m.fc.Comments]: () => u.fbt._("Most Comments", null, {
						hk: "4k1FoM"
					})
				};

			function Q() {
				return (Q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const X = [m.oc.HOUR, m.oc.DAY, m.oc.WEEK, m.oc.MONTH, m.oc.YEAR, m.oc.ALL],
				Z = {
					[m.oc.HOUR]: () => u.fbt._("Past Hour", null, {
						hk: "4qCarL"
					}),
					[m.oc.DAY]: () => u.fbt._("Past 24 Hours", null, {
						hk: "GI5qN"
					}),
					[m.oc.WEEK]: () => u.fbt._("Past Week", null, {
						hk: "3jQHYQ"
					}),
					[m.oc.MONTH]: () => u.fbt._("Past Month", null, {
						hk: "11eVJy"
					}),
					[m.oc.YEAR]: () => u.fbt._("Past Year", null, {
						hk: "38MavC"
					}),
					[m.oc.ALL]: () => u.fbt._("All Time", null, {
						hk: "2buTB7"
					})
				};

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = [m.ec.Sort, m.ec.Time],
				te = {
					[m.ec.Sort]: e => {
						let t = Object(o.e)(b.C);
						t = t !== m.Vb ? t : void 0;
						const {
							options: s,
							optionLabels: n,
							value: i
						} = x(e.queryParams, e.url, p.H, J, t || m.Vb, Y), a = {
							"data-testid": "search-results-filter-sort",
							options: s,
							optionLabels: n,
							searchOptions: e.searchOptions,
							tooltipId: "search-results-sort",
							value: i
						}, c = Boolean(e.queryParams[p.H] || t);
						return r.a.createElement(z, Q({}, a, {
							active: c,
							label: c ? n[i] : u.fbt._("Sort", null, {
								hk: "2COMme"
							}),
							type: m.ec.Sort
						}))
					},
					[m.ec.Time]: e => {
						const t = Object(o.e)(b.C),
							{
								options: s,
								optionLabels: n,
								value: i
							} = x(e.queryParams, e.url, p.N, X.slice().reverse(), m.Wb, Z);
						if (!e.searchOptions || e.searchOptions.sort === m.bb.NEW || e.searchOptions.sort === m.bb.HOT || t === m.bb.NEW || t === m.bb.HOT) return null;
						const a = {
							"data-testid": "search-results-filter-time",
							options: s,
							optionLabels: n,
							searchOptions: e.searchOptions,
							tooltipId: "search-results-time",
							value: i
						};
						return r.a.createElement(z, $({}, a, {
							active: Boolean(e.queryParams[p.N]),
							label: e.queryParams[p.N] ? n[i] : u.fbt._("Time", null, {
								hk: "3hL0P3"
							}),
							type: m.ec.Filter
						}))
					}
				};
			var se = s("./src/lib/lessComponent.tsx"),
				ne = s("./src/reddit/controls/Button/index.tsx"),
				re = s("./src/reddit/helpers/search/switchSearchScope.ts"),
				oe = s("./src/reddit/components/SearchResultsSubNav/GlobalSearchResultsLink/index.m.less"),
				ie = s.n(oe);
			const {
				fbt: ae
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ce = se.a.wrapped(ne.r, "TertiaryButton", ie.a), de = se.a.wrapped(ce, "AllRedditResultsButton", ie.a), le = e => {
				const t = Object(N.b)();
				return r.a.createElement(w.a, {
					to: Object(re.a)(e.queryParams)
				}, r.a.createElement(de, {
					onClick: () => {
						t(t => ({
							...Object(A.g)(t, e.searchOptions),
							action: "click",
							noun: "unrestrict_to_subreddit",
							source: "search_results"
						}))
					},
					"data-redditstyle": !0
				}, ae._("All reddit results", null, {
					hk: "2IBCsX"
				}), r.a.createElement(v.a, {
					name: "forward"
				})))
			};
			var me = s("./src/reddit/components/SearchResultsSubNav/index.m.less"),
				ue = s.n(me);
			const pe = Object(i.c)({
					subreddit: l.C
				}),
				be = e => {
					const {
						subreddit: t
					} = Object(o.e)(t => pe(t, e)), s = Object(c.eb)(), n = Object(c.X)(s), i = Object(c.db)(s), l = t && !!e.searchOptions.restrict_sr && !e.shouldHideGlobalSearchLink;
					return r.a.createElement(d.a, {
						className: Object(a.a)(ue.a.ComponentRedesign),
						"data-testid": "search-results-subnav"
					}, ee.map((t, s) => {
						const o = te[t];
						return r.a.createElement(o, {
							key: s,
							queryParams: n,
							searchOptions: e.searchOptions,
							tab: e.tab,
							url: i
						})
					}), l && r.a.createElement(le, {
						queryParams: n,
						searchOptions: e.searchOptions
					}))
				}
		},
		"./src/reddit/components/SearchSwitcher/index.m.less": function(e, t, s) {
			e.exports = {
				searchSwitcher: "_1i7CStyaaHQU2aiG0GdpSA",
				mSr: "_3-pePLWUAV_CAVhht1dfup",
				redesign: "_3Tphf4AA5J39saIlrB1SYD",
				subredditIcon: "_3swS56fqtrGcixPfTzK_Cl",
				searchSwitcherText: "-V0kqUlRHvLoNRUAUmCy9",
				arrowIcon: "N0zmIZbfRSCGk2rUOGHSS"
			}
		},
		"./src/reddit/components/SearchSwitcher/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				i = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/components/SubredditIcon/index.tsx"),
				l = s("./src/reddit/components/ThemeProvider/index.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/history.ts"),
				p = s("./src/reddit/controls/InternalLink/index.tsx"),
				b = s("./src/reddit/helpers/history/index.ts"),
				h = s("./src/reddit/helpers/trackers/searchResults.ts"),
				x = s("./src/reddit/icons/fonts/index.tsx"),
				f = s("./src/reddit/components/SearchSwitcher/index.m.less"),
				O = s.n(f);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class v extends r.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							searchOptions: e,
							sendEvent: t,
							subreddit: s
						} = this.props;
						t(Object(h.C)(!!s, e))
					}
				}
				render() {
					const {
						redesign: e,
						subreddit: t,
						url: s
					} = this.props, n = {
						[O.a.mSr]: !!t
					}, {
						pathname: o,
						search: l
					} = i.a.parse(s), m = t ? c.gc.ToSubreddit : c.gc.ToGlobal, h = t ? r.a.createElement(r.a.Fragment, null, r.a.createElement("span", null, g._("Show results from", null, {
						hk: "3aVDvz"
					})), r.a.createElement(d.b, {
						className: O.a.subredditIcon,
						subredditOrProfile: t
					}), r.a.createElement("p", {
						className: Object(a.a)(O.a.searchSwitcherText, n)
					}, t.displayText)) : r.a.createElement(r.a.Fragment, null, g._("{=Show results from}{=all of Reddit}", [g._param("=Show results from", r.a.createElement("span", null, g._("Show results from", null, {
						hk: "4l8fSw"
					}))), g._param("=all of Reddit", r.a.createElement("p", {
						className: Object(a.a)(O.a.searchSwitcherText, n)
					}, g._("all of Reddit", null, {
						hk: "rc9dH"
					})))], {
						hk: "2NDUqb"
					}));
					return r.a.createElement(p.default, {
						className: Object(a.a)(O.a.searchSwitcher, e && O.a.redesign, n),
						"data-testid": "search-switcher-link",
						onClick: this.onClick,
						to: {
							pathname: o,
							search: l,
							state: {
								searchSwitcherType: m,
								[u.b.SearchOriginPage]: Object(b.b)(u.b.SearchOriginPage)
							}
						}
					}, h, r.a.createElement(x.a, {
						name: "forward",
						className: Object(a.a)(O.a.arrowIcon, n)
					}))
				}
			}
			t.a = Object(m.c)(e => e.subreddit ? r.a.createElement(l.b, {
				subredditName: e.subreddit.name
			}, r.a.createElement(v, e)) : r.a.createElement(v, e))
		},
		"./src/reddit/components/SearchWarnings/index.m.less": function(e, t, s) {
			e.exports = {
				warningText: "_3qUPSbrS00ULxlso5V3tIN",
				warningIcon: "_1fMbGLM3cAHfas4PNZTps4",
				quarantineIcon: "Ap9gKlmTQdcI17NgCE4yQ",
				quarantineWarning: "_2cvv3TnzlFQHZE4upgevMn",
				nsfwWarning: "_1-dYjh5S-IQybef811XyCF",
				spoilerWarning: "_1P0ASR__enq34IxkSim2Rk"
			}
		},
		"./src/reddit/components/SearchWarnings/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/index.tsx"),
				a = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				c = s("./src/reddit/components/SearchWarnings/index.m.less"),
				d = s.n(c);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function m(e) {
				let {
					className: t,
					isQuarantined: s,
					isNSFW: n,
					isSpoiler: c
				} = e;
				return s || n || c ? r.a.createElement("div", {
					className: t
				}, s ? r.a.createElement("span", {
					className: Object(o.a)(d.a.warningText, d.a.quarantineWarning)
				}, r.a.createElement(a.a, {
					className: Object(o.a)(d.a.warningIcon, d.a.quarantineIcon)
				}), l._("quarantined", null, {
					hk: "1j7soK"
				})) : null, n ? r.a.createElement("span", {
					className: Object(o.a)(d.a.warningText, d.a.nsfwWarning)
				}, r.a.createElement(i.a, {
					name: "nsfw_fill",
					className: Object(o.a)(d.a.warningIcon)
				}), l._("nsfw", null, {
					hk: "2IetSA"
				})) : null, c ? r.a.createElement("span", {
					className: Object(o.a)(d.a.warningText, d.a.spoilerWarning)
				}, r.a.createElement(i.a, {
					name: "spoiler_fill",
					className: Object(o.a)(d.a.warningIcon)
				}), l._("spoiler", null, {
					hk: "3SHbs3"
				})) : null) : null
			}
		},
		"./src/reddit/components/ShareMenu/index.m.less": function(e, t, s) {
			e.exports = {
				dropdown: "PWY92ySDjTYrTAiutq4ty",
				dropdownRow: "_2snJGyyGyyH38duHobOUKE",
				linkIcon: "_1GObrri0j7y_9IWiGUfPjp",
				chatIcon: "_1PhtucoKocd-ADJ-JDEoiC",
				crosspostIcon: "_1m76BHzDzRsM1te7HBxUqd",
				embedIcon: "_3MSdPVJwGxrpakz-e1MQhO",
				modalBody: "T4VmKX-IOkP4UG-B4jUR-"
			}
		},
		"./src/reddit/components/ShareMenu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/uuid/dist/esm-browser/v4.js"),
				c = s("./src/config.ts"),
				d = s("./src/lib/addQueryParams/index.ts"),
				l = s("./src/reddit/actions/chat/toggle.ts"),
				m = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				b = s("./src/reddit/actions/tooltip.ts"),
				h = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				x = s("./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx"),
				f = s("./src/reddit/constants/parameters.ts"),
				O = s("./src/reddit/controls/Dropdown/index.tsx"),
				g = s("./src/reddit/controls/Dropdown/Row.tsx"),
				v = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				j = s("./src/reddit/helpers/trackers/shareToChat.ts"),
				C = s("./src/reddit/hooks/useTracking.ts"),
				y = s("./src/reddit/icons/fonts/index.tsx"),
				E = s("./src/reddit/models/Post/index.ts"),
				_ = s("./src/reddit/models/Subreddit/index.ts"),
				k = s("./src/reddit/routes/postCreation/constants.ts"),
				S = s("./src/reddit/selectors/activeModalId.ts"),
				w = s("./src/reddit/selectors/tooltip.ts"),
				N = s("./src/reddit/components/ShareMenu/index.m.less"),
				T = s.n(N);
			const I = Object(h.a)(O.a),
				P = Object(a.a)(),
				R = e => {
					let {
						permalink: t,
						onShare: s
					} = e;
					return o.a.createElement(g.b, {
						id: "shareToChat",
						className: T.a.dropdownRow,
						displayText: n.fbt._("share to chat", null, {
							hk: "3EuIWT"
						}),
						onClick: () => {
							const e = Object(d.a)(t, {
								utm_source: "share",
								utm_medium: "web2x",
								context: 3
							});
							s(e)
						}
					}, o.a.createElement(y.a, {
						name: "chat",
						className: T.a.chatIcon
					}))
				},
				M = e => {
					let {
						permalink: t,
						sendEventWithName: s
					} = e;
					return o.a.createElement(g.b, {
						className: T.a.dropdownRow,
						displayText: n.fbt._("Embed", null, {
							hk: "2CcsuC"
						}),
						onClick: () => {
							s("share_embed"), window.open(`${c.a.rebedMediaUrl}/embed?url=${t}`, "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, o.a.createElement(y.a, {
						name: "embed",
						className: T.a.embedIcon
					}))
				},
				L = e => {
					let {
						onCrosspost: t
					} = e;
					return o.a.createElement(g.b, {
						className: T.a.dropdownRow,
						displayText: n.fbt._("crosspost", null, {
							hk: "23zSN6"
						}),
						onClick: t
					}, o.a.createElement(y.a, {
						name: "crosspost",
						className: T.a.crosspostIcon
					}))
				},
				F = o.a.memo(e => {
					const t = Object(i.d)(),
						s = Object(C.a)(),
						a = Object(i.e)(t => Object(w.b)(e.dropdownId)(t)),
						c = Object(i.e)(t => Object(S.b)(Object(x.a)(e.dropdownId))(t)),
						h = Object(r.useCallback)(() => {
							t(Object(b.h)({
								tooltipId: e.dropdownId
							}))
						}, [t, e.dropdownId]),
						O = e => t(Object(u.C)(e)),
						N = Object(r.useCallback)(() => {
							e.post && (t(Object(p.d)(e.post.id)), t(Object(m.i)(Object(x.a)(e.post.id))))
						}, [t, e.post]),
						F = !e.subredditType || e.subredditType === _.g.Public,
						B = !!e.post && e.post.isCrosspostable && !e.post.isSponsored,
						A = Object(r.useCallback)(e => {
							t(Object(l.e)(e)), s(Object(j.a)())
						}, [t, s]);
					return o.a.createElement("div", {
						className: e.className,
						onClick: h,
						id: e.dropdownId
					}, e.children, o.a.createElement(I, {
						className: T.a.dropdown,
						isOpen: a,
						tooltipId: e.dropdownId
					}, o.a.createElement(g.b, {
						className: T.a.dropdownRow,
						displayText: n.fbt._("Copy link", null, {
							hk: "1tCqox"
						}),
						onClick: () => {
							const {
								permalink: t,
								post: s
							} = e;
							if (s && Object(E.r)(s)) e.sendEventWithName("share_copy", {
								referralId: P
							}), N();
							else {
								const s = Object(d.a)(t, {
									utm_source: "share",
									utm_medium: "web2x",
									context: 3
								});
								e.sendEventWithName("share_copy"), O(s)
							}
						}
					}, o.a.createElement(y.a, {
						name: "link_post",
						className: T.a.linkIcon
					})), B && o.a.createElement(L, {
						onCrosspost: () => {
							e.sendEventWithName("share_crosspost"), e.post && window.open(`${k.b}?source_id=${e.post.id}`, "_blank")
						}
					}), F && o.a.createElement(M, {
						permalink: e.permalink,
						sendEventWithName: e.sendEventWithName
					}), o.a.createElement(R, {
						permalink: e.permalink,
						onShare: A
					})), c && e.post && o.a.createElement(x.b, {
						className: T.a.modalBody,
						onClose: t => {
							t && (e.sendEventWithName("copy_link", {
								referralId: P
							}), O(t)), N()
						},
						url: Object(d.a)(Object(v.a)(e.post.id), {
							[f.z]: P,
							utm_source: "share",
							utm_medium: "web2x",
							utm_content: "rpan_stream"
						})
					}))
				});
			t.a = F
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/SidebarContainer/index.m.less"),
				o = s.n(r);
			t.a = n.a.div("container", o.a)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, s) {
			e.exports = {
				GreyRereddit: "_3Y8af3R9_DE3lpXa6Hq5Ab",
				greyRereddit: "_3Y8af3R9_DE3lpXa6Hq5Ab",
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				NoneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				noneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				m = s("./src/reddit/constants/experiments.ts"),
				u = s("./src/reddit/constants/location.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/trackers/navigation.ts"),
				h = s("./src/reddit/selectors/experiments/countrySites.ts"),
				x = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				f = s("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				O = s("./src/reddit/selectors/meta.ts"),
				g = s("./src/reddit/components/SidebarFooter/index.m.less"),
				v = s.n(g);
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js"), C = c.a.a("Link", v.a), y = Object(i.c)({
				countryCode: O.b,
				d2xPdpSideRailRecsVariant: x.a,
				isCountrySitesEnabled: h.b,
				isD2xPdpSideRailRecsEnabled: x.b,
				isNavbarLikeMwebEnabled: f.a
			}), E = Object(o.b)(y), _ = Object(p.u)({
				isFrontpage: p.A,
				isCountrySitePage: p.y
			}), k = e => {
				let {
					countryCode: t,
					reredditContent: s
				} = e;
				return r.a.createElement("div", {
					className: v.a.GreyRereddit
				}, s, !!u.c[t] && r.a.createElement("div", {
					className: v.a.LinkContainer
				}, r.a.createElement("div", {
					className: v.a.Column
				}, r.a.createElement(C, {
					href: "https://www.redditinc.com/policies/impressum"
				}, j._("Impressum", null, {
					hk: "4cKXSI"
				})), r.a.createElement(C, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: v.a.NoneCapitalizeLink
				}, j._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: v.a.Column
				}, r.a.createElement(C, {
					href: "https://www.reddithelp.com"
				}, j._("help", null, {
					hk: "4lyYaD"
				})), r.a.createElement(C, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, j._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: v.a.LinkContainer
				}, r.a.createElement("div", {
					className: v.a.Column
				}, r.a.createElement(C, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, j._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(C, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, j._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: v.a.Column
				}, r.a.createElement(C, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, j._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(C, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, j._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), r.a.createElement("div", {
					className: v.a.Copyright
				}, j._("Reddit Inc © {year}. All rights reserved", [j._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = _(E(Object(d.c)(e => {
				const t = Object(o.f)().getState(),
					s = Object(h.a)(t, Object(a.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === m.ed.GreyRereddit || e.d2xPdpSideRailRecsVariant === m.ed.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === m.ed.LargeImagePreview ? e.reredditButtons : [];
					return r.a.createElement(k, {
						reredditContent: t,
						countryCode: e.countryCode
					})
				}
				if (!e.isFrontpage && !e.isCountrySitePage) return null;
				const n = t => {
					const n = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "English",
						it: "Italiano",
						pt: "Português"
					};
					return s.includes(t) || "en" === t ? r.a.createElement(C, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(b.a)(t))
					}, n[t]) : null
				};
				return r.a.createElement(l.a, {
					className: v.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, !!u.c[e.countryCode] && r.a.createElement("div", {
					className: v.a.LinkContainer
				}, r.a.createElement("div", {
					className: v.a.Column
				}, r.a.createElement(C, {
					href: "https://www.redditinc.com/policies/impressum"
				}, j._("Impressum", null, {
					hk: "4cKXSI"
				})), r.a.createElement(C, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: v.a.NoneCapitalizeLink
				}, j._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: v.a.Column
				}, r.a.createElement(C, {
					href: "https://www.reddithelp.com"
				}, j._("help", null, {
					hk: "4lyYaD"
				})), r.a.createElement(C, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, j._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: v.a.LinkContainer
				}, r.a.createElement("div", {
					className: v.a.Column
				}, r.a.createElement(C, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, j._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(C, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, j._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: v.a.Column
				}, r.a.createElement(C, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, j._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(C, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, j._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && r.a.createElement("div", {
					className: v.a.LinkContainer
				}, r.a.createElement("div", {
					className: v.a.Column
				}, n("en"), n("fr"), n("it")), r.a.createElement("div", {
					className: v.a.Column
				}, n("de"), n("es"), n("pt"))), r.a.createElement("div", {
					className: v.a.Copyright
				}, j._("Reddit Inc © {year}. All rights reserved", [j._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			})))
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				BottomStickyStyles: "xTKAJNhaO7iI3cnAQ1PpJ",
				bottomStickyStyles: "xTKAJNhaO7iI3cnAQ1PpJ",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				StickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				stickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/lodash/throttle.js"),
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/components/BackToTop/index.tsx"),
				l = s("./src/reddit/components/SidebarFooter/index.tsx"),
				m = s("./src/reddit/constants/componentSizes.ts"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				b = s.n(p),
				h = s("./src/lib/lessComponent.tsx");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const f = c.g[1] + 24,
				O = m.f + 8,
				g = O + 152 + 16,
				v = g + f + 8,
				j = h.a.div("Container", b.a),
				C = h.a.wrapped(e => {
					let {
						className: t,
						isOverlay: s,
						...n
					} = e;
					return a.a.createElement(d.a, x({
						className: t,
						isOverlay: s,
						style: {
							top: `calc(100vh - ${s?O:8}px)`
						}
					}, n))
				}, "BackToTop", b.a),
				y = e => {
					let {
						children: t,
						className: s,
						isFakeOverlay: r,
						isSticky: o,
						shouldStickToBottom: i
					} = e;
					return a.a.createElement("div", {
						className: Object(n.a)(s, {
							[b.a.BottomStickyStyles]: i,
							[b.a.StickyStyles]: !i && o && !r,
							[b.a.StickyStylesFakeOverlay]: !i && !!r
						})
					}, t)
				};
			class E extends i.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > v,
						shouldFooterSticky: this.windowHeight > g
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
					}, this.handleResize = o()(() => {
						this.updateMeasurements(), this.updateState()
					}, c.N), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isBottomSticky: !1,
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
					var e;
					const {
						props: {
							adComponent: t,
							adComponentOnFakeOverlay: s,
							children: n,
							className: r,
							hideFooter: o,
							pageLayer: i,
							recommendationsComponent: c,
							reredditButtons: d
						}
					} = this, m = this.state.isAdSticky && !(!t && !n), u = this.state.isBottomSticky;
					return a.a.createElement(j, {
						className: r,
						innerRef: this.setWrapperRef
					}, a.a.createElement(y, {
						isFakeOverlay: s,
						isSticky: m,
						shouldStickToBottom: u
					}, t, n, c, !o && a.a.createElement(l.a, {
						reredditButtons: d
					})), !c && !this.props.hideBackToTop && a.a.createElement(C, {
						isOverlay: !!(null === (e = null == i ? void 0 : i.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const _ = Object(u.u)();
			t.a = _(E)
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.m.less": function(e, t, s) {
			e.exports = {
				S: "Zwo7CZoszMU6kBYhWyIC7",
				s: "Zwo7CZoszMU6kBYhWyIC7",
				SubredditIcon: "_33bYVIxJlbFcqiiYlexnqp",
				subredditIcon: "_33bYVIxJlbFcqiiYlexnqp"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/SubredditIcon/index.tsx"),
				a = s("./src/reddit/controls/OutboundLink/index.tsx"),
				c = s("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				d = s.n(c);
			const l = o.a.wrapped(i.b, "SubredditIcon", d.a),
				m = o.a.wrapped(e => r.a.createElement(a.b, e), "S", d.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less": function(e, t, s) {
			e.exports = {
				topPostsTitle: "_2Pw8j7a2DYkjTDOFbIdODA",
				hovercardStyle: "_2ktYI4-r7C-HaMk9ulbwog",
				top: "_3rKUrAbYNFvE7-nMDs6lwZ",
				subredditMentionContainer: "_1e2szH8g0XMMM_EuCN8Olk",
				subredditIconContainer: "_3kpwADnYG-SH40aaSdX3ZE"
			}
		},
		"./src/reddit/components/SubredditMention/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/RichTextJson/elements.tsx"),
				c = s("./src/higherOrderComponents/makeAsync.tsx"),
				d = s("./src/lib/loadWithRetries/index.ts"),
				l = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				m = s("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				u = s.n(m);
			var p = Object(c.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(d.a)(() => s.e("SubredditMentionWithIcon").then(s.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent(e) {
						let {
							subredditName: t
						} = e;
						return r.a.createElement("span", {
							className: u.a.subredditMentionContainer
						}, r.a.createElement(l.a, {
							href: `/r/${t}/`
						}, r.a.createElement("span", {
							className: u.a.subredditIconContainer
						}, r.a.createElement(l.b, null)), `r/${t}`))
					}
				}),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/experiments.ts"),
				x = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				f = s("./src/reddit/selectors/subredditMention.ts");
			class O extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: s
						} = this.props;
						t(Object(x.a)({
							...e,
							subredditName: s
						}))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return r.a.createElement(a.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const g = Object(b.c)(O),
				v = Object(i.c)({
					isFeatureFlagEnabled: f.b,
					isUserInTreatment: f.e,
					userVariant: f.a
				}),
				j = Object(o.b)(v),
				C = e => {
					let {
						isFeatureFlagEnabled: t,
						isUserInTreatment: s,
						subredditName: n,
						userVariant: o,
						rtJsonElementProps: i
					} = e;
					if (!s || !t) return r.a.createElement(g, {
						subredditName: n,
						rtJsonElementProps: i
					});
					switch (o) {
						case h.Zf.SmIcon:
							return r.a.createElement(p, {
								subredditName: n,
								rtJsonElementProps: i
							});
						case h.Zf.SmIconHc:
							return r.a.createElement(p, {
								subredditName: n,
								isHoverable: !0,
								rtJsonElementProps: i
							});
						default:
							return r.a.createElement(g, {
								subredditName: n,
								rtJsonElementProps: i
							})
					}
				};
			t.b = j(C)
		},
		"./src/reddit/components/UserIcon/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = "https://www.redditstatic.com/avatars/avatar_default_02_24A0ED.png"
		},
		"./src/reddit/components/ViewReportsDropdown/Loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-ViewReportsDropdown-index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-ViewReportsDropdown-index").then(s.bind(null, "./src/reddit/components/ViewReportsDropdown/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ViewReportsDropdown/index.tsx"
				}
			})
		},
		"./src/reddit/components/Widgets/PostFlair/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				widgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				TertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				tertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				StyledFlair: "ij57zT3Rtmsew_4V8vYmY",
				styledFlair: "ij57zT3Rtmsew_4V8vYmY",
				cloudDisplay: "l8B49A4v1dhWGGEwM7vYA",
				flairFilter: "_1Dpo5nORF-CHLCeoDHpZuR",
				Flair: "_3b9QdopIknN9AuNvj2kI9X",
				flair: "_3b9QdopIknN9AuNvj2kI9X",
				"m-selected": "XUSGYTFEMdkVpqVqn1ZsC",
				mSelected: "XUSGYTFEMdkVpqVqn1ZsC",
				flairFilterContainer: "qHKWh5t-0ZHqZ00w567bU",
				flairFilterButton: "_1Uh_u9ypgpntBJ_2RC1Ge3"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/fastdom/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/Flair/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = s("./src/reddit/constants/parameters.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/helpers/correlationIdTracker.ts"),
				O = s("./src/reddit/helpers/flair.ts"),
				g = s("./src/reddit/helpers/trackers/postFlair.ts"),
				v = s("./src/reddit/models/Widgets/index.ts"),
				j = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				y = s.n(C);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = 129,
				k = Object(h.u)({
					filterName: e => Object(h.X)(e)[b.i],
					url: e => Object(h.db)(e)
				}),
				S = Object(a.c)({
					subredditId: (e, t) => Object(j.I)(e, t.subredditName)
				}),
				w = Object(i.b)(S),
				N = l.a.div("WidgetContent", y.a),
				T = e => {
					let {
						display: t,
						isFlairFilter: s,
						onMouseDown: n,
						onClick: r,
						...i
					} = e;
					return o.a.createElement("li", {
						className: Object(c.a)(y.a.StyledFlair, t === v.g.Cloud && y.a.cloudDisplay, {
							[y.a.flairFilter]: s,
							[y.a["m-selected"]]: i.isSelected
						}),
						onClick: () => null == r ? void 0 : r(Object(O.g)(i.flair)),
						onMouseDown: n
					}, o.a.createElement(m.b, E({}, i, {
						className: y.a.Flair,
						isFlairFilter: s,
						forceSmallEmojis: !0
					})))
				};
			class I extends o.a.Component {
				constructor(e) {
					super(e), this.flairListRef = o.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(g.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(g.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(g.d)())
					}, this.onClickFlair = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(f.d)(f.a.SearchResults), this.props.sendEvent(Object(g.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(O.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(O.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					d.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > _ && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return o.a.createElement(x.r, {
						className: y.a.flairFilterButton,
						onMouseDown: this.trackFlairOverflowClick,
						onClick: this.onToggleCollapse
					}, this.state.isCollapsed ? n.fbt._("See more", null, {
						hk: "2fWFes"
					}) : n.fbt._("See less", null, {
						hk: "3oxSZ9"
					}))
				}
				renderFlairs(e) {
					const {
						subredditName: t,
						widget: s
					} = this.props;
					return o.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => o.a.createElement(T, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onClick: this.onClickFlair,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(O.e)(this.props.url, Object(O.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, s = t ? _ : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return o.a.createElement("div", {
						className: y.a.flairFilterContainer,
						style: {
							maxHeight: s
						}
					}, this.renderFlairs(e))
				}
				renderSelectedFlairFilter(e) {
					const {
						subredditName: t,
						widget: s
					} = this.props;
					return o.a.createElement("ul", null, o.a.createElement(T, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(O.e)(this.props.url, Object(O.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: s
					} = this.state, n = t.order, r = this.getFlairsFromIds(n), i = e && this.getSelectedFlair(r) || void 0, a = t.order.length > n.length || s && !i;
					return o.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, o.a.createElement(N, null, i && this.renderSelectedFlairFilter(i), !i && this.renderFlairFilters(r), a && this.renderButton()))
				}
			}
			t.a = k(w(Object(u.c)(I)))
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/trackers/widgets.ts"),
				b = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = s("./src/reddit/selectors/experiments/topPosts.ts"),
				x = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/models/Theme/index.ts"),
				g = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const v = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(g.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				j = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(g.a)(e).widgetColors.sidebarWidgetHeaderColor,
				C = e => {
					const t = v(e);
					return Object(O.f)(t)
				},
				y = e => {
					const t = j(e);
					return Object(O.f)(t)
				};
			var E = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				_ = s.n(E);
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), S = Object(m.u)(), w = Object(o.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(m.n)(e, t) || void 0,
						n = t.redditStyle || Object(x.l)(e, {
							subredditId: s
						}),
						r = Object(f.eb)(e);
					return n || r
				},
				nigtmode: f.eb,
				subredditId: m.n,
				topPostVariant: h.d
			}));
			class N extends r.a.Component {
				constructor() {
					super(...arguments), this.contentRef = r.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(p.b)(e, t)), this.setState({
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
					return e.backgroundColor = v(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = C(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = j(this.props), e.color = e.fill = y(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: o,
						id: i,
						onClick: c,
						onHeaderClick: l,
						title: m,
						titleClassName: p,
						truncateThreshold: b
					} = this.props, h = s ? _.a.widgetContentOnly : _.a.widgetContent, x = !n && this.props.styles, f = x ? this.getWidgetBackgroundStyles() : {}, O = x ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(a.a)(t, _.a.widgetBackground, {
							[_.a.redditStyle]: n,
							[_.a.clickable]: !!c,
							[_.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: c,
						style: f
					}, m && r.a.createElement("div", {
						className: Object(a.a)(_.a.widgetHeader, {
							[_.a.clickable]: !!l
						}),
						id: i,
						style: {
							...O,
							...this.props.headerStyles
						},
						onClick: l
					}, r.a.createElement("div", {
						className: Object(a.a)(_.a.widgetTitle, p)
					}, r.a.createElement(d.b, {
						type: d.a.Widget
					}, m)), o), r.a.createElement("div", {
						className: Object(a.a)(h, {
							[_.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(u.r, {
						className: _.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, k._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = S(w(Object(c.a)(Object(l.c)(N))))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return _
			})), s.d(t, "b", (function() {
				return S
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/index.ts"),
				c = s("./src/reddit/actions/gold/tooltips.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				m = s("./src/reddit/actions/survey/index.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				x = s("./src/reddit/components/PostList/Placeholder.tsx"),
				f = s("./src/reddit/featureFlags/index.ts"),
				O = s("./src/reddit/selectors/experiments/survey.ts"),
				g = s("./src/reddit/selectors/listings.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				j = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/selectors/tracking.ts");

			function y() {
				return Object(p.u)({
					currentProfileName: p.i,
					isCommentPermalink: p.w,
					isCommentsPage: p.x,
					isFrontpage: p.A,
					isProfilePostListing: p.L,
					isTopicPage: p.R,
					pageLayer: e => e
				})
			}
			const E = y(),
				_ = {
					apiError: g.c,
					apiPending: g.d,
					measureScrollFPS: f.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.S)(e, t),
					loadMore: g.g,
					postsById: v.T,
					postIds: Object(o.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: r
						} = t;
						return Object(v.D)(e, s, n, r)
					}),
					subredditsById: j.fb,
					viewportDataLoaded: C.a,
					pageReferrer: p.V,
					postListPlaceholderComponent: () => x.a,
					isNpsScrollSurveyEnabled: O.e
				},
				k = Object(r.c)(_),
				S = e => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(c.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(i.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(d.K(t))
					},
					fireAdPixelsOfType: (t, s) => {
						e(d.y(t, s))
					},
					trackOnPostEnteredViewport: (t, s, n, r) => {
						e(d.N(t, n, r))
					},
					trackOnPostExitedViewport: (t, s, n, r) => {
						e(d.O(t, n, r))
					},
					showModalOnScroll: () => e(d.bb()),
					surveyTriggerScrollCounted: () => e(Object(m.m)())
				}),
				w = e => Object(b.b)({
					...e
				}),
				N = (e, t, s, n) => {
					const {
						listingKey: r,
						hostPostData: o,
						listingBelowVariant: i
					} = n;
					return Object(h.k)(e, t, "post", r, o, i, void 0)
				},
				T = Object(n.b)(k, S, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: w,
					postClickEventFactory: N
				}));
			t.a = e => Object(u.c)(E(T(e)))
		},
		"./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/LRUCache/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r);
			const i = new n.a(250),
				a = (e, t, s) => {
					const n = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const r = `${e.id}-${n}`;
						let a = i.get(r);
						if (void 0 === a) {
							const c = new RegExp(`(\\b${n}\\b)`, "gi"),
								d = e.title.split(c);
							a = s(o.a.createElement(o.a.Fragment, null, o.a.Children.toArray(d.map((e, s) => s % 2 != 0 ? t(e) : e)))), i.set(r, a)
						}
						return a
					}
				}
		},
		"./src/reddit/constants/componentTestIds.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "e", (function() {
				return a
			}));
			const n = "comment",
				r = "comment-submission-form-markdown",
				o = "comment-submission-form-richtext",
				i = "comments-page-link-num-comments",
				a = "post-content"
		},
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = r.a.createContext(() => () => {})
		},
		"./src/reddit/contexts/Visibility.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return u
			}));
			var n = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				r = s("./node_modules/raf/index.js"),
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				a = s.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const d = {
					rootMargin: "100px 0px",
					threshold: .01
				},
				l = a.a.createContext(!1);
			class m extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isVisible: !1
					}, this.fastIsVisible = !1, this.setVisible = () => {
						this.setState(e => e.isVisible ? null : {
							isVisible: !0
						})
					}, this.scheduleVisibilityChange = () => {
						this.state.isVisible || o()(this.setVisible)
					}, this.handleIntersectionChange = e => {
						const t = e.isIntersecting;
						!this.fastIsVisible && t && (this.scheduleVisibilityChange(), this.fastIsVisible = !0)
					}
				}
				render() {
					const {
						children: e,
						...t
					} = this.props, {
						isVisible: s
					} = this.state, r = {
						...d,
						...t
					};
					return a.a.createElement(n.a, c({}, r, {
						onChange: this.handleIntersectionChange
					}), a.a.createElement("div", null, a.a.createElement(l.Provider, {
						value: s
					}, e)))
				}
			}

			function u() {
				return Object(i.useContext)(l)
			}
		},
		"./src/reddit/controls/CheckboxMenuItem/index.m.less": function(e, t, s) {
			e.exports = {
				checkboxIcon: "_3Ebr0mkLD0A7HiowzExNW-",
				checkboxMenuItem: "_2eawLPCtwzvTZhWKtaUgZQ",
				expandRight: "_34Odk7t6y-rCPxPcYJa4Nw",
				postCheckboxMenuItem: "_3LyKu57c-QkPvlFvAgWop5"
			}
		},
		"./src/reddit/controls/CheckboxMenuItem/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/index.tsx"),
				a = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				c = s("./src/reddit/controls/CheckboxMenuItem/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const m = e => r.a.createElement("div", {
					className: Object(o.a)(d.a.checkboxMenuItem, e.className),
					onClick: e.onClick
				}, r.a.createElement(a.a, {
					className: d.a.expandRight
				}, r.a.createElement(i.a, {
					name: "checkbox",
					isFilled: e.isSelected,
					className: d.a.checkboxIcon
				}), e.text)),
				u = e => {
					let {
						className: t,
						...s
					} = e;
					return r.a.createElement(m, l({
						className: Object(o.a)(d.a.postCheckboxMenuItem, t)
					}, s))
				}
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			})), s.d(t, "c", (function() {
				return j
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/uniqueId.js"),
				o = s.n(r),
				i = s("./node_modules/raf/index.js"),
				a = s.n(i),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/higherOrderComponents/asModal/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/layout/row/Inline/index.tsx"),
				b = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				h = s.n(b);
			var x = Object(m.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return d.a.createElement("div", {
						className: h.a.wrapper
					}, d.a.createElement(p.a, {
						className: h.a.titleRow
					}, s), d.a.createElement("div", {
						className: h.a.detailsContainer
					}, t), d.a.createElement(p.a, {
						className: h.a.buttonRow
					}, d.a.createElement(u.l, {
						className: h.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				f = s("./src/reddit/controls/ErrorText/index.m.less"),
				O = s.n(f);
			class g extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${o()()}`,
						isModalOpen: !1
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					a()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						className: t,
						errorModalBody: s,
						errorModalTitle: r = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: o = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: i,
						isModalOpen: a
					} = this.state;
					return d.a.createElement("div", {
						className: Object(l.a)(O.a.wrapper, t)
					}, d.a.createElement("span", {
						className: O.a.description,
						ref: this.spanRef
					}, e), i && d.a.createElement("span", {
						className: O.a.moreText,
						onClick: this.toggleModal
					}, o), a && d.a.createElement(x, {
						onConfirmed: this.toggleModal,
						title: r
					}, s || e))
				}
			}
			const v = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: n,
						fallbackMessage: r,
						messages: o = []
					} = e, i = o.length ? o : r ? [r] : [];
					return i.length ? d.a.createElement("div", {
						className: t
					}, i.map((e, t) => d.a.createElement(g, {
						className: s,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				j = e => d.a.createElement(v, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = g
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/featureFlags/index.ts");

			function c(e, t, s) {
				const n = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(o.b)(n)(e => {
					const {
						featureEnabled: n,
						...o
					} = e, i = o;
					return n ? r.a.createElement(t, i) : void 0 !== s ? r.a.createElement(s, i) : null
				})
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/models/WhitelistStatus/index.ts");
			const r = (e, t) => {
				const s = e.some(e => e.isNSFW),
					r = t.some(e => e.wls === n.b.NO_ADS);
				return !s && !r
			}
		},
		"./src/reddit/helpers/hasModPostPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.posts
		},
		"./src/reddit/helpers/isRemoved.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/humanizeUTCDate/index.tsx");
			const o = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? n.fbt._("Approved by {username} at {time}", [n.fbt._param("username", e.approvedBy), n.fbt._param("time", Object(r.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : n.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				i = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(r.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : n.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (t = t + "\n" + n.fbt._("Reason by {username}:", [n.fbt._param("username", `u/${e.bannedBy}`)], {
						hk: "3qLdNZ"
					}) + e.modRemovalReason), e.modNote && (t = t + "\n" + n.fbt._("Note:", null, {
						hk: "2LD4vO"
					}) + e.modNote), t
				},
				a = e => n.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [n.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				c = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed as spam by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(r.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : n.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
		},
		"./src/reddit/helpers/search/searchResultsTabTo.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/lib/addQueryParams/index.ts"),
				r = s("./src/reddit/constants/history.ts"),
				o = s("./src/reddit/helpers/history/index.ts");
			const i = "/search/",
				a = e => {
					let {
						searchType: t,
						pageLayer: s
					} = e;
					var a;
					const {
						type: c,
						...d
					} = (null == s ? void 0 : s.queryParams) || {}, l = {
						...d,
						type: t
					};
					return {
						pathname: (null === (a = null == s ? void 0 : s.routeMatch) || void 0 === a ? void 0 : a.match.url) || i,
						search: Object(n.a)("", {
							...l
						}),
						state: {
							[r.b.SearchOriginPage]: Object(o.b)(r.b.SearchOriginPage)
						}
					}
				}
		},
		"./src/reddit/helpers/search/searchTabType.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/constants/page.ts");
			const o = (e, t) => e.includes(n.ic.Comments) ? r.h.Comments : t || e.includes(n.ic.Posts) ? r.h.Posts : e.includes(n.ic.Users) && !e.includes(n.ic.Subreddits) ? r.h.People : r.h.Listings
		},
		"./src/reddit/helpers/search/switchSearchScope.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/lib/addQueryParams/index.ts"),
				r = s("./src/reddit/constants/parameters.ts");

			function o(e, t) {
				let s = "/search/",
					o = "",
					i = e && e[r.y] || "";
				return t ? (i = i.replace("flair:", "flair_name:"), s = `/r/${t}/search`, o = "1", Object(n.a)(s, {
					[r.y]: i,
					[r.B]: o
				})) : (i = i.replace("flair_name:", "flair:"), Object(n.a)(s, {
					[r.y]: i
				}))
			}
		},
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !e.ignoreReports && (e.numReports || 0) > 0
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "d", (function() {
				return f
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = s("./src/reddit/models/Theme/index.ts"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const m = {},
				u = e => Object(a.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(a.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(a.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: u(t)
					}
				},
				b = e => Object(n.k)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : m,
				x = e => e.isActive ? l.a.mIsActive : void 0,
				f = e => {
					const t = Object(o.a)(Object(r.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, s) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				o = s.n(r);
			const i = e => {
					let {
						isLoading: t
					} = e;
					return Object(n.a)(o.a.loadingBackground, {
						[o.a["m-loading"]]: t
					})
				},
				a = e => Object(n.a)(o.a.loadingBar, i(e))
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/contexts/PageLayer/index.tsx"),
				r = s("./src/reddit/helpers/isComment.ts"),
				o = s("./src/reddit/helpers/isPost.ts"),
				i = s("./src/telemetry/models/Outbound.ts");
			const a = e => {
				let {
					renderingObjectInfo: t,
					pageLayer: s
				} = e;
				if (t && (Object(r.b)(t) || Object(o.b)(t))) return Object(r.b)(t) ? i.SourceElement.Comment : Object(n.x)(s) ? i.SourceElement.PostDetail : Object(n.H)(s) ? i.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/postCollection.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "h", (function() {
				return d
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "o", (function() {
				return m
			})), s.d(t, "f", (function() {
				return p
			})), s.d(t, "e", (function() {
				return b
			})), s.d(t, "n", (function() {
				return h
			})), s.d(t, "m", (function() {
				return x
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "p", (function() {
				return g
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "j", (function() {
				return j
			})), s.d(t, "q", (function() {
				return C
			})), s.d(t, "k", (function() {
				return y
			})), s.d(t, "l", (function() {
				return E
			})), s.d(t, "i", (function() {
				return _
			})), s.d(t, "d", (function() {
				return k
			}));
			var n, r, o = s("./src/reddit/constants/tracking.ts"),
				i = s("./src/reddit/helpers/trackers/postEvent.ts"),
				a = s("./src/reddit/selectors/platform.ts"),
				c = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.collection = "collection", e.collectionComposer = "collection_composer", e.postComposer = "post_composer", e.postOverflowMenu = "post_overflow_menu"
			}(n || (n = {})),
			function(e) {
				e.post = "post", e.follow = "follow", e.unfollow = "unfollow", e.screen = "screen", e.eventEducation = "event_education", e.eventEducationGotIt = "event_education_got_it", e.collectionEducation = "collection_education", e.collectionEducationGotIt = "collection_education_got_it", e.collectionCancel = "cancel", e.collectionCreate = "collection_create", e.collectionSelect = "collection_select", e.collectionDelete = "collection_delete", e.collectionEdit = "collection_edit", e.collectionAddPost = "collection_add_post", e.collectionRemovePost = "remove_post_from_collection", e.startEvent = "start_event"
			}(r || (r = {}));
			const d = e => t => ({
					source: n.collection,
					noun: r.post,
					...u(t, e)
				}),
				l = e => {
					let {
						postId: t,
						isFollowed: s
					} = e;
					return e => ({
						source: n.collection,
						noun: s ? r.unfollow : r.follow,
						...u(e, t)
					})
				},
				m = e => {
					let {
						postId: t,
						isFollowed: s
					} = e;
					return e => ({
						source: i.a.postEvent,
						noun: s ? r.unfollow : r.follow,
						...u(e, t)
					})
				},
				u = (e, t) => {
					const s = {
						...c.o(e),
						action: o.c.CLICK,
						subreddit: c.kb(e)
					};
					return void 0 === t ? s : {
						...s,
						post: c.K(e, t),
						postCollection: c.M(e, {
							postId: t
						}),
						postEvent: c.N(e, {
							postId: t
						})
					}
				},
				p = e => ({
					...f(e),
					action: o.c.VIEW,
					noun: r.collectionEducation
				}),
				b = e => ({
					...f(e),
					action: o.c.CLICK,
					noun: r.collectionEducationGotIt
				}),
				h = e => ({
					...f(e),
					action: o.c.VIEW,
					noun: r.eventEducation
				}),
				x = e => ({
					...f(e),
					action: o.c.CLICK,
					noun: r.eventEducationGotIt
				}),
				f = e => ({
					...c.o(e),
					subreddit: c.kb(e),
					source: n.postComposer
				}),
				O = (e, t) => s => ({
					...u(s, e),
					source: t || n.postOverflowMenu,
					noun: r.collectionAddPost
				}),
				g = e => t => ({
					...u(t, e),
					source: n.collectionComposer,
					noun: r.collectionRemovePost
				}),
				v = () => e => ({
					...u(e),
					source: n.collectionComposer,
					noun: r.collectionCancel
				}),
				j = () => e => {
					const t = Object(a.o)(e) || void 0;
					return {
						...u(e, t),
						source: n.collectionComposer,
						noun: r.collectionCreate
					}
				},
				C = () => e => ({
					...u(e),
					source: n.collectionComposer,
					noun: r.collectionSelect
				}),
				y = e => t => ({
					...c.o(t),
					subreddit: c.kb(t),
					source: n.collectionComposer,
					action: o.c.CLICK,
					noun: r.collectionDelete,
					postCollection: c.L(t, {
						collectionId: e
					})
				}),
				E = e => t => ({
					...u(t),
					source: n.collectionComposer,
					noun: r.collectionEdit,
					postCollection: c.L(t, {
						collectionId: e
					})
				}),
				_ = e => t => ({
					...u(t, e),
					source: n.collectionComposer,
					noun: r.startEvent
				}),
				k = () => e => {
					const t = Object(a.o)(e) || void 0;
					return {
						...u(e, t),
						source: n.collectionComposer,
						action: o.c.VIEW,
						noun: r.screen
					}
				}
		},
		"./src/reddit/helpers/trackers/postEvent.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "f", (function() {
				return b
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return g
			}));
			var n, r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/eventTools/index.ts"),
				i = s("./src/lib/timezone/index.ts"),
				a = s("./src/reddit/constants/tracking.ts"),
				c = s("./src/reddit/models/PostCreationForm/index.ts"),
				d = s("./src/reddit/selectors/platform.ts"),
				l = s("./src/reddit/selectors/postCreations.ts"),
				m = s("./src/reddit/selectors/telemetry.ts"),
				u = s("./src/telemetry/index.ts");
			! function(e) {
				e.postEvent = "post_event", e.postComposer = "post_composer", e.eventComposer = "event_composer"
			}(n || (n = {}));
			const p = e => m.d(e, {
					pageType: "event_submit"
				}),
				b = e => {
					Object(u.a)({
						...m.o(e),
						source: n.postComposer,
						action: a.c.CLICK,
						noun: "event_create",
						subreddit: m.kb(e)
					})
				},
				h = e => {
					Object(u.a)({
						...m.o(e),
						source: n.postComposer,
						action: a.c.CLICK,
						noun: "event_edit",
						subreddit: m.kb(e),
						postEvent: v(e),
						postComposer: j(e)
					})
				},
				x = () => e => ({
					source: n.eventComposer,
					action: a.c.VIEW,
					noun: a.b.SCREEN,
					actionInfo: p(e),
					postEvent: v(e)
				}),
				f = e => t => ({
					...E(t, Object(d.o)(t)),
					source: n.postComposer,
					noun: "apply",
					postComposer: C(e)
				}),
				O = () => e => ({
					...E(e, Object(d.o)(e)),
					noun: "cancel",
					actionInfo: p(e)
				}),
				g = e => t => ({
					...E(t, Object(d.o)(t)),
					noun: "delete",
					actionInfo: p(t),
					postComposer: j(t),
					postEvent: y(e)
				}),
				v = e => {
					const t = Object(l.p)(e);
					return t && y(t)
				},
				j = e => C(Object(l.p)(e)),
				C = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === c.j.AtEventTime ? Object(i.f)(e.startDate).getTime() / r.Xb : void 0
					}
				},
				y = e => {
					const t = Object(i.f)(e.startDate).getTime() / r.Xb,
						s = Object(i.f)(e.endDate).getTime() / r.Xb;
					return {
						eventStartTimestamp: t,
						eventEndTimestamp: s,
						eventState: Object(o.e)(t, s)
					}
				},
				E = (e, t) => {
					const s = {
						source: n.eventComposer,
						action: a.c.CLICK,
						subreddit: m.kb(e)
					};
					return t ? {
						...s,
						post: m.K(e, t),
						postEvent: m.N(e, {
							postId: t
						}),
						postCollection: m.M(e, {
							postId: t
						})
					} : s
				}
		},
		"./src/reddit/helpers/trackers/shareToChat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const o = () => e => ({
				...Object(r.o)(e),
				source: "post",
				action: n.c.CLICK,
				noun: "share_chat",
				subreddit: Object(r.kb)(e)
			})
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "g", (function() {
				return O
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "e", (function() {
				return C
			}));
			var n, r, o = s("./src/reddit/constants/tracking.ts"),
				i = s("./src/reddit/helpers/isComment.ts"),
				a = s("./src/reddit/helpers/isPost.ts"),
				c = s("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				d = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = s("./src/reddit/selectors/subreddit.ts"),
				m = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(n || (n = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(r || (r = {}));
			const u = e => ({
					...m.o(e),
					source: r.LINK,
					action: o.c.CLICK,
					noun: n.INTERNAL_LINK
				}),
				p = e => ({
					...m.o(e),
					source: r,
					screen: m.cb(e),
					discoveryUnit: {
						id: "xd_100",
						name: n.SUBREDDIT_HOVERCARD,
						type: d.e.Listing,
						title: n.SUBREDDIT_HOVERCARD
					}
				}),
				b = (e, t) => {
					const {
						renderingObjectInfo: s,
						subredditName: n
					} = t;
					if (!s || !Object(a.b)(s) && !Object(i.b)(s)) return {
						outbound: void 0
					};
					const r = Object(a.b)(s) ? "postId" : "commentId",
						o = {
							url: `/r/${n}/`,
							sourceElement: Object(c.a)(t),
							subredditName: n,
							[r]: s.id
						},
						d = Object(l.C)(e, {
							subredditName: n
						});
					return d ? {
						outbound: {
							...o,
							url: d.url,
							subredditId: d.id
						}
					} : {
						outbound: {
							...o
						}
					}
				},
				h = (e, t) => {
					const {
						renderingObjectInfo: s
					} = t;
					if (!s || !Object(a.b)(s) && !Object(i.b)(s)) return {};
					const n = Object(a.b)(s) ? s.belongsTo.id : s.subredditId;
					return {
						post: m.K(e, s.id),
						subreddit: m.lb(e, n),
						...b(e, t)
					}
				},
				x = e => t => ({
					...u(t),
					...h(t, e)
				}),
				f = e => t => ({
					...p(t),
					source: "global",
					action: o.c.VIEW,
					noun: n.SUBREDDIT_HOVERCARD,
					subreddit: m.mb(t, e),
					screen: m.cb(t)
				}),
				O = (e, t) => s => ({
					...p(s),
					source: r.DISCOVERY_UNIT,
					action: o.c.VIEW,
					noun: n.ITEM_POST,
					post: m.K(s, t),
					subreddit: m.mb(s, e),
					screen: m.cb(s)
				}),
				g = (e, t) => s => ({
					...p(s),
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.ITEM_POST,
					post: m.K(s, t),
					subreddit: m.mb(s, e),
					screen: m.cb(s)
				}),
				v = e => t => ({
					...p(t),
					subreddit: m.lb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT
				}),
				j = e => t => ({
					...p(t),
					subreddit: m.lb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				C = e => t => ({
					...p(t),
					subreddit: m.lb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/helpers/trackers/subredditMuting.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "h", (function() {
				return i
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "a", (function() {
				return m
			})), s.d(t, "e", (function() {
				return u
			}));
			var n = s("./src/reddit/selectors/telemetry.ts"),
				r = s("./src/telemetry/models/Event.ts");
			const o = () => e => ({
					source: r.f.HomeFeed,
					action: r.d.Click,
					noun: r.e.MuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				i = () => e => ({
					source: r.f.UserPreferences,
					action: r.d.Click,
					noun: r.e.UnmuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				a = () => e => ({
					source: r.f.UserPreferences,
					action: r.d.Click,
					noun: r.e.MuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				c = () => e => ({
					source: r.f.CommunityNotificationsSettings,
					action: r.d.Click,
					noun: r.e.UnmuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				d = () => e => ({
					source: r.f.PopularFeed,
					action: r.d.Click,
					noun: r.e.MuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				l = () => e => ({
					source: r.f.SubredditIdBanner,
					action: r.d.Click,
					noun: r.e.UnmuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				m = () => e => ({
					source: r.f.AboutCommunityOverflow,
					action: r.d.Click,
					noun: r.e.MuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				u = () => e => ({
					source: r.f.AboutCommunityOverflow,
					action: r.d.Click,
					noun: r.e.UnmuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			}));
			var n, r, o = s("./src/reddit/constants/tracking.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {}));
			const a = (e, t) => s => ({
					source: r.COMMUNITY_WIDGETS,
					action: o.c.CLICK,
					noun: n.SEE_MORE,
					widget: Object(i.yb)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...i.o
				}),
				c = (e, t) => s => ({
					source: r.POST,
					action: o.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: i.K(s, e),
					subreddit: i.kb(s),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...i.o(s)
				}),
				d = () => e => ({
					source: r.SIDEBAR,
					action: o.c.VIEW,
					noun: n.TOPICS_WIDGET,
					...i.o(e)
				}),
				l = e => t => ({
					source: r.TOPICS_WIDGET,
					action: o.c.CLICK,
					noun: n.TOPIC,
					...i.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("approve", e.isFilled), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Calendar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("scheduled", e.isFilled), c.a.calendarIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Comment/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					...s
				} = e;
				return r.a.createElement("i", d({
					className: Object(o.a)(Object(i.b)("comment", s.isFilled), c.a.commentIcon, t)
				}, s))
			}
		},
		"./src/reddit/icons/fonts/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("expand", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement(o.a, i({
				name: "award"
			}, e))
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("live", e.isFilled), c.a.liveIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("lock", e.isFilled), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/ModActions/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("i", d({}, e, {
				className: Object(o.a)(Object(i.b)("mod", e.isFilled), c.a.modActions, e.className)
			}))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("remove", e.isFilled), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("report", e.isFilled), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("spam", e.isFilled), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Tag/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("tag",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, s) {},
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"
			}), r.a.createElement("path", {
				d: "M15.18,11.76a1,1,0,0,0-1.68.74V14c-2.23-.16-3.29-1.32-4.39-2.56-.21-.24-.43-.48-.66-.72a5.63,5.63,0,0,1-1.77,1.06,13.34,13.34,0,0,1,.94,1A7.85,7.85,0,0,0,13.5,16v1.59a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74Z"
			}))
		},
		"./src/reddit/layout/page/SearchResults/index.m.less": function(e, t, s) {
			e.exports = {
				bodyContainer: "eZLYleuk3b8ykGiskfpo3",
				contentContainer: "_3Up38k81YNBWQoW1ovMU88",
				content: "_2lzCpzHH0OvyFsvuESLurr",
				mainContent: "_1BJGsKulUQfhJyO19XsBph",
				withSidebar: "_3SktesklDBwXt2pEl0sHY8",
				sidebarContent: "_2iRJ8DI-3RTbsXRSDXE5ZG"
			}
		},
		"./src/reddit/layout/page/SearchResults/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				a = s("./src/reddit/constants/elementClassNames.ts"),
				c = s("./src/reddit/contexts/NavbarExp.ts"),
				d = s("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				l = s("./src/reddit/layout/page/Listing/index.m.less"),
				m = s.n(l),
				u = s("./src/reddit/layout/page/SearchResults/index.m.less"),
				p = s.n(u);
			t.a = e => {
				let {
					backgroundColor: t,
					className: s,
					containerRef: l,
					content: u,
					navBar: b,
					redditStyle: h,
					sidebar: x,
					subredditId: f
				} = e;
				const O = Object(n.useContext)(c.a),
					g = Boolean(x);
				return r.a.createElement(i.a, {
					subredditId: f
				}, r.a.createElement("div", {
					className: Object(o.a)(m.a.outerContainer, a.i, s, {
						[m.a.outerContainerExp]: O
					}),
					ref: l
				}, r.a.createElement(d.a, {
					className: a.h,
					redditStyle: h,
					backgroundColor: t
				}), r.a.createElement("div", {
					className: m.a.innerContainer
				}, r.a.createElement("div", {
					className: p.a.bodyContainer
				}, r.a.createElement("div", {
					className: p.a.contentContainer
				}, r.a.createElement("div", {
					className: p.a.navContent
				}, b), r.a.createElement("div", {
					className: Object(o.a)(p.a.content, g && p.a.withSidebar)
				}, r.a.createElement("div", {
					className: Object(o.a)(p.a.mainContent, g && p.a.withSidebar)
				}, u), g && r.a.createElement("div", {
					className: p.a.sidebarContent
				}, x)))))))
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, s) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(o.a)(e => {
				const {
					className: t,
					children: s,
					heightLeft: n,
					widthLeft: o,
					gutter: a,
					...l
				} = e;
				return r.a.createElement("div", d({
					className: Object(i.a)(c.a.expandRightContainer, t)
				}, l), r.a.createElement("div", {
					className: c.a.left,
					style: {
						flexBasis: o,
						height: n,
						marginRight: a
					}
				}, Array.isArray(s) && s[0]), r.a.createElement("div", {
					className: c.a.right
				}, Array.isArray(s) && s[1]))
			}, 2)
		},
		"./src/reddit/models/ModQueueTrigger/index.ts": function(e, t, s) {
			"use strict";
			var n;

			function r(e, t) {
				var s;
				return null === (s = e.modQueueTriggers) || void 0 === s ? void 0 : s.find(e => e.type === t)
			}
			s.d(t, "a", (function() {
					return n
				})), s.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e.USER_REPORTS = "USER_REPORTS", e.AUTOMOD = "AUTOMOD", e.MOD = "MOD", e.ADMIN = "ADMIN", e.SHADOWBANNED_SUBMITTER = "SHADOWBANNED_SUBMITTER", e.HATEFUL_CONTENT = "HATEFUL_CONTENT", e.CROWD_CONTROL = "CROWD_CONTROL", e.BAN_EVASION = "BAN_EVASION"
				}(n || (n = {}))
		},
		"./src/reddit/pages/SearchResults/index.m.less": function(e, t, s) {
			e.exports = {
				sidebar: "_35ky2Wm3TP6kFdIh-DOxmA",
				announcement: "_38miRaQjZDUy2B55AHWYlg",
				searchSwitcherContainer: "_79QamRjUfUQIFHxCnTvSZ"
			}
		},
		"./src/reddit/pages/SearchResults/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "pageConfig", (function() {
				return Y
			})), s.d(t, "default", (function() {
				return Q
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/lodash/pick.js"),
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/hooks/usePrevious.ts"),
				m = s("./src/lib/makeSearchKey/index.ts"),
				u = s("./node_modules/lodash/isEqual.js"),
				p = s.n(u),
				b = s("./src/reddit/actions/searchQueryId/index.tsx"),
				h = s("./src/reddit/actions/survey/index.ts"),
				x = s("./src/reddit/components/JumpToContent/index.tsx"),
				f = s("./src/reddit/components/SearchResultsContent/index.tsx"),
				O = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/selectors.ts"),
				g = s("./src/reddit/components/SearchResultsNav/index.tsx"),
				v = s("./src/reddit/components/SearchResultsSidebar/index.tsx"),
				j = s("./src/reddit/components/SearchResultsSubNav/index.tsx"),
				C = s("./src/reddit/components/SearchSwitcher/index.tsx"),
				y = s("./src/reddit/components/TrackingHelper/index.tsx"),
				E = s("./src/reddit/constants/covid.ts"),
				_ = s("./src/reddit/constants/page.ts"),
				k = s("./src/reddit/constants/parameters.ts"),
				S = s("./src/reddit/contexts/PageLayer/index.tsx"),
				w = s("./src/reddit/helpers/correlationIdTracker.ts"),
				N = s("./src/reddit/helpers/search/searchImpressionId.ts"),
				T = s("./src/reddit/helpers/search/searchQueryId.ts"),
				I = s("./src/reddit/helpers/search/searchTabType.ts"),
				P = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				R = s("./src/reddit/helpers/search/switchSearchScope.ts"),
				M = s("./src/reddit/helpers/trackers/searchResults.ts"),
				L = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				F = s("./src/reddit/hooks/useTheme.ts"),
				B = s("./src/reddit/layout/page/SearchResults/index.tsx"),
				A = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				D = s("./src/reddit/selectors/searchFix.ts"),
				U = s("./src/reddit/selectors/searchQueryId.ts"),
				H = s("./src/reddit/selectors/subreddit.ts"),
				W = s("./node_modules/lodash/isEmpty.js"),
				V = s.n(W),
				G = s("./src/reddit/pages/SearchResults/index.m.less"),
				K = s.n(G);

			function q() {
				return (q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const z = 3e3,
				J = Object(n.a)({
					resolved: {},
					chunkName: () => "FeaturedLiveEntrypointLegacyAnnouncement",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("FeaturedLiveEntrypointLegacyAnnouncement").then(s.bind(null, "./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.tsx"
					}
				}),
				Y = {
					[_.h.Listings]: {
						tab: _.h.Listings,
						sidebar: !1,
						filterNav: !1
					},
					[_.h.People]: {
						tab: _.h.People,
						sidebar: !1,
						filterNav: !1
					},
					[_.h.Posts]: {
						tab: _.h.Posts,
						sidebar: !0,
						filterNav: !0
					},
					[_.h.Comments]: {
						tab: _.h.Comments,
						sidebar: !1,
						filterNav: !1
					}
				};

			function Q(e) {
				let {
					location: t,
					match: s
				} = e;
				const n = Object(c.d)(),
					r = Object(S.eb)(),
					u = Object(y.b)(),
					W = Object(F.a)(),
					G = Object(i.useRef)(!1),
					Q = Object(i.useRef)(!1),
					X = Object(c.e)(e => Object(H.C)(e, {
						subredditName: s.params.subredditName
					})),
					Z = Object(c.e)(e => Object(O.a)(e, {
						pageLayer: r
					})),
					$ = Object(c.e)(e => Object(D.c)(e, {
						pageLayer: r
					})),
					{
						searchQueryId: ee
					} = Object(c.e)(e => Object(U.a)(e)),
					te = Object(S.X)(r),
					se = Object(S.bb)(r),
					[ne, re] = Object(i.useState)(!1),
					oe = Object(l.a)(te) || null;
				Object(L.c)(), Object(i.useEffect)((function() {
					return () => {
						N.a.clear(P.a.SERP)
					}
				}), []), Object(i.useEffect)(() => {
					let e = 0;
					return e = window.setTimeout(() => n(Object(h.k)()), z), () => {
						Object(w.b)(w.a.SearchResults), window.clearTimeout(e)
					}
				}, []), Object(i.useEffect)(() => {
					te !== oe && (G.current = !1, re(!1)), te && oe && te[k.y] !== oe[k.y] && (Object(w.b)(w.a.SearchResults), Object(w.d)(w.a.SearchResults))
				}, [te, oe]), Object(i.useEffect)(() => {
					const e = {
							...te,
							type: void 0
						},
						t = {
							...oe,
							type: void 0
						};
					!p()(e, t) && !V()(oe) && N.a.update(P.a.SERP)
				}, [te, oe]);
				const ie = s.params.multiredditName,
					ae = s.params.subredditName || ie || "",
					ce = s.params.username,
					de = Object(m.e)(o()(te || {}, k.C)),
					le = Object(m.b)(ae, ce, de);
				ee && (T.a.set(P.a.SERP, le, ee), n(Object(b.c)()));
				const me = X && de.restrict_sr,
					ue = Object(I.a)(de.type, me),
					pe = {
						...de,
						type: [d.ic.Posts, d.ic.Subreddits, d.ic.Users]
					},
					be = Object(m.b)(ae, ce, pe),
					he = {
						redesign: !0,
						searchOptions: de
					};
				let xe;
				Object(S.Q)(r) || Object(S.C)(r) ? xe = a.a.createElement(C.a, q({}, he, {
					url: Object(R.a)(te)
				})) : Z && $ && (xe = a.a.createElement(C.a, q({}, he, {
					subreddit: Z,
					url: Object(R.a)(te, Z.name)
				})));
				const fe = Y[ue].tab,
					Oe = Boolean(me) || Y[ue].sidebar && !ie,
					ge = Y[ue].filterNav,
					ve = Object(A.a)({
						redditStyle: !0,
						theme: W
					});
				return Object(i.useEffect)(() => {
					if (fe === _.h.Comments && !Q.current) {
						let e = 0;
						return e = window.setTimeout(() => {
							Q.current = !0, n(Object(h.j)())
						}, z), () => {
							window.clearTimeout(e)
						}
					}
				}, [fe]), a.a.createElement(B.a, {
					backgroundColor: ve.canvas,
					content: a.a.createElement(a.a.Fragment, null, a.a.createElement(x.a, null), se && !ne && (() => {
						const e = e => u(Object(M.f)(e, Object(m.e)(o()(te || {}, k.C))));
						return G.current || (e("view"), G.current = !0), a.a.createElement(J, {
							announcement: E.a,
							className: K.a.announcement,
							onBtnClick: () => e("click"),
							onClose: () => {
								e("dismiss"), re(!0)
							}
						})
					})(), a.a.createElement(f.a, {
						listingKey: le,
						listingName: ae,
						location: t,
						searchOptions: de,
						tab: fe
					})),
					navBar: a.a.createElement(a.a.Fragment, null, a.a.createElement(g.a, {
						activeTab: fe,
						searchOptions: de,
						searchSwitcher: xe
					}), ge && a.a.createElement(j.a, {
						key: "subNav",
						searchOptions: de,
						shouldHideGlobalSearchLink: !0,
						subredditName: ae,
						tab: fe
					}), xe && a.a.createElement("div", {
						className: K.a.searchSwitcherContainer
					}, xe)),
					sidebar: Oe && a.a.createElement(v.a, {
						className: K.a.sidebar,
						listingKey: be,
						listingName: ae || _.c,
						searchOptions: pe,
						tab: fe
					})
				})
			}
		},
		"./src/reddit/selectors/experiments/commentBox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = Object(n.a)(i.R, i.Q, (e, t) => e || t),
				c = Object(n.a)(e => Object(o.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: r.N
				}), e => e === r.X.Enabled)
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return u
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/experiments/index.ts"),
				i = s("./src/reddit/selectors/experiments/utils.ts"),
				a = s("./src/reddit/selectors/meta.ts"),
				c = s("./node_modules/reselect/es/index.js");
			const d = Object(c.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => Object(a.h)(e) && Object(o.f)(e),
					experimentName: n.wc
				}), i.a),
				l = Object(c.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => !Object(a.h)(e) && Object(o.f)(e),
					experimentName: n.vc
				}), i.a),
				m = Object(c.a)(d, l, (e, t) => e || t),
				u = Object(c.a)(d, l, (e, t) => !(!e && !t))
		},
		"./src/reddit/selectors/experiments/reportingRevampDesktop.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/runTimeEnvVars.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = e => !!Object(o.b)(e) || Object(r.c)(e, {
				experimentEligibilitySelector: i.R,
				experimentName: n.m
			}) === n.g.Enabled
		},
		"./src/reddit/selectors/experiments/searchSubDiscovery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./node_modules/reselect/es/index.js");
			const i = Object(o.a)(e => Object(r.c)(e, {
				experimentEligibilitySelector: r.a,
				experimentName: n.Kf
			}), e => ({
				isSubEnlarged: e === n.Xf.Variant1 || e === n.Xf.Variant3,
				withCommunityDescription: e === n.Xf.Variant2 || e === n.Xf.Variant3
			}))
		},
		"./src/reddit/selectors/experiments/web2x_cta.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const i = Object(n.a)(e => Object(o.c)(e, {
					experimentName: r.og,
					experimentEligibilitySelector: o.a
				}), e => e),
				a = Object(n.a)(i, e => e === r.fg)
		},
		"./src/reddit/selectors/searchQueryId.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = e => e.searchQueryId
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/models/Post/index.ts"),
				a = s("./src/reddit/selectors/posts.ts");
			const c = e => Object(o.c)(e, {
					experimentName: r.lf,
					experimentEligibilitySelector: o.a
				}),
				d = (e, t) => (t === r.tf.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored)) && !Object(i.A)(e),
				l = Object(n.a)(a.G, c, (e, t) => d(e, t));
			Object(n.a)((e, t) => t, c, (e, t) => d(e, t))
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "f", (function() {
				return u
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/featureFlags/index.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/subreddit.ts");
			const a = e => r.d.subredditMentionD2xExperiment(e),
				c = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: a,
						experimentName: n.Tf
					}) || ""
				},
				d = e => {
					const t = c(e);
					return t === n.Zf.SmIcon || t === n.Zf.SmIconHc
				},
				l = (e, t) => {
					let {
						subredditName: s
					} = t;
					return !!e.subreddits.api.models.pending[s]
				},
				m = (e, t) => {
					let {
						subredditName: s
					} = t;
					return !!e.subreddits.api.models.error[s]
				},
				u = (e, t) => {
					let {
						subredditName: s
					} = t;
					const n = Object(i.cb)(e, {
						subredditName: s
					});
					return (n && n.postIds || []).slice(0, 2)
				}
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = (e, t) => {
				let {
					listingKey: s
				} = t;
				return e.tracking.viewportDataLoaded[s]
			}
		},
		"./src/redditGQL/operations/DeleteSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"c518a45f60a5"}')
		},
		"./src/redditGQL/operations/MutedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"2717435b2dc0"}')
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"4f7ad6ca44ac"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"2620d72fd633"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"432f6b475ece"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SearchResults.1981d92723785e976f38.js.map