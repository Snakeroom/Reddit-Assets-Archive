// https://www.redditstatic.com/desktop2x/ModerationPages.e4ca3af4d6b29777b48b.js
// Retrieved at 7/15/2021, 12:10:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModerationPages"], {
		"./src/higherOrderComponents/withImageUploads.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/imageUploads.ts"),
				r = s("./src/reddit/models/Image/index.tsx"),
				i = s("./src/reddit/selectors/imageUploads.ts");
			const d = Object(a.c)({
				_imageUploads: i.b
			});

			function l(e, t) {
				return Object(n.b)(d, e => ({
					uploadImage: s => e(t(s)),
					cancelUpload: t => e(Object(o.h)(t))
				}), (function(e, t, s) {
					return {
						...s,
						...t,
						getImageUploadsIfModified: function(t) {
							return function(e, t) {
								const s = [];
								let n = !1;
								for (const a of t)
									if (Object(r.i)(a) || e[a.id])
										if (e[a.id]) {
											const t = e[a.id];
											s.push(t), n = n || t !== a
										} else n = !0;
								else s.push(a);
								return n ? s : null
							}(e._imageUploads, t)
						}
					}
				}))(e)
			}
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return p
			})), s.d(t, "e", (function() {
				return b
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "j", (function() {
				return g
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "d", (function() {
				return _
			})), s.d(t, "h", (function() {
				return C
			})), s.d(t, "i", (function() {
				return k
			}));
			var n = s("./node_modules/linkify-it/index.js"),
				a = s.n(n),
				o = s("./node_modules/tlds/index.js"),
				r = s.n(o),
				i = s("./src/lib/linkMatchers/customLinks.ts"),
				d = s("./node_modules/lodash/values.js"),
				l = s.n(d);
			const c = e => l()(i.b).includes(e.substring(1)),
				m = ["//", "ftp:", "http:", "https:", "mailto:"],
				u = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, m),
				p = a()().tlds(r.a).set({
					fuzzyIP: !0
				}),
				b = a()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.mention.prefix, i.g.mention.config),
				h = u(a()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config),
				g = u(a()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config),
				f = a()().tlds(r.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config).add(i.g.mention.prefix, i.g.mention.config),
				x = a()().tlds(r.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subredditFullUrl.config).add(i.g.subredditFull.prefix, i.g.subredditFullUrl.config),
				E = p.normalize;
			p.normalize = e => {
				E.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const v = (e, t) => {
					return (f.match(e) || []).filter(e => {
						const s = c(e.text);
						return !s || s && t
					})
				},
				_ = e => {
					return [...g.match(e) || [], ...b.match(e) || []].map(e => !c(e.text) && e.text.replace(i.a, "")).filter(e => e)
				},
				C = (e, t) => {
					const s = e.match(t);
					if (s && 1 === s.length && 0 === s[0].index && s[0].lastIndex === t.length) return s[0]
				},
				k = e => {
					const t = p.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const s = t[0];
						return s.lastIndex === e.length ? s : ((e, t) => {
							const s = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(s)) return t.lastIndex += s.length, t.url += s, t
						})(e, s)
					}
				}
		},
		"./src/lib/loginHref/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				a = s("./node_modules/history/esm/history.js");
			t.a = (e, t, s) => {
				const o = Object(a.e)(e),
					r = encodeURIComponent(`${t}${o}`);
				return `${n.a.accountManagerOrigin}${s||"/login"}?dest=${r}`
			}
		},
		"./src/lib/stripQueryParams/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				a = s.n(n);
			t.a = e => {
				const t = a.a.parse(e);
				return t.search = void 0, t.query = null, a.a.format(t)
			}
		},
		"./src/reddit/actions/grantUserFlair/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return C
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "c", (function() {
				return R
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/makeGqlRequest/index.ts"),
				r = s("./src/redditGQL/operations/SubredditFlairedRedditorByName.json"),
				i = s("./src/redditGQL/operations/SubredditFlairedRedditors.json");
			var d = s("./src/reddit/endpoints/flair/index.ts"),
				l = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/helpers/flair.ts"),
				m = s("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts");
			var u = e => {
				const {
					subreddit: t,
					redditorInfoByName: s
				} = e.data, {
					id: n,
					flairedRedditorByName: a
				} = t, o = {};
				let r = null;
				if (!s) return {
					subredditId: n,
					searchResult: r,
					flairedUsers: o
				};
				const {
					name: i
				} = s;
				if (r = i, a) {
					const {
						flair: e,
						redditor: t
					} = a, {
						name: s
					} = t;
					e && (o[s] = Object(m.a)(e)[0])
				}
				return {
					subredditId: n,
					searchResult: r,
					flairedUsers: o
				}
			};
			var p = e => {
					const {
						subreddit: t
					} = e.data, {
						id: s,
						flairedRedditors: n
					} = t, {
						pageInfo: a,
						edges: o
					} = n, r = [], i = {};
					return o.forEach(e => {
						const {
							node: t
						} = e, {
							flair: s,
							redditor: {
								name: n
							}
						} = t;
						if (r.push(n), s) {
							const e = Object(m.a)(s)[0];
							i[n] = e
						}
					}), {
						subredditId: s,
						flairedUsers: i,
						userOrder: r,
						pageInfo: a
					}
				},
				b = s("./src/reddit/models/SubredditModeration/index.ts"),
				h = s("./src/reddit/models/Toast/index.ts"),
				g = s("./src/reddit/models/User/index.ts"),
				f = s("./src/reddit/selectors/subreddit.ts"),
				x = s("./src/reddit/actions/grantUserFlair/constants.ts");
			const E = Object(a.a)(x.i),
				v = Object(a.a)(x.g),
				_ = Object(a.a)(x.f),
				C = (e, t) => async (s, a, {
					gqlContext: r
				}) => {
					const d = t && t.after || "",
						c = t && t.before || "",
						m = Object(f.D)(a(), e),
						u = Object(b.d)(m, d, c);
					if (!!a().pages.modHub.flairedUsers.userOrder[u]) return;
					s(E());
					const g = await ((e, t, s) => Object(o.a)(e, {
						...i,
						variables: {
							subredditName: t,
							...s
						}
					}))(r(), e, t);
					if (g.ok) {
						const e = {
							...p(g.body),
							key: u
						};
						s(v(e))
					} else {
						const e = g.error;
						s(_(e)), s(Object(l.f)({
							kind: h.b.Error,
							text: n.fbt._("Something went wrong", null, {
								hk: "1IJNeH"
							})
						}))
					}
				}, k = Object(a.a)(x.l), y = Object(a.a)(x.k), S = Object(a.a)(x.j), O = (e, t) => async (s, a, {
					gqlContext: i
				}) => {
					const d = Object(f.S)(a(), {
						subredditId: e
					}).name;
					s(k());
					const c = await ((e, t, s) => Object(o.a)(e, {
						...r,
						variables: {
							subredditName: t,
							name: s
						}
					}))(i(), d, t);
					if (c.ok) {
						const e = u(c.body);
						s(y(e))
					} else s(S(c.error)), s(Object(l.f)({
						kind: h.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						})
					}))
				}, j = Object(a.a)(x.e), w = Object(a.a)(x.c), I = Object(a.a)(x.d), N = (e, t) => async (s, a, {
					apiContext: o
				}) => {
					const r = a(),
						i = Object(f.S)(r, {
							subredditId: t
						}).name;
					s(j());
					const c = await Object(d.a)(o(), e, i);
					if (c.ok) {
						s(w({
							userName: e,
							subredditId: t
						}));
						const a = Object(l.e)(n.fbt._("User flair cleared", null, {
							hk: "4yyH00"
						}), h.b.SuccessMod);
						s(Object(l.f)(a))
					} else {
						s(I());
						const a = Object(l.e)(n.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "uG2KO"
						}), h.b.Error, n.fbt._("Retry", null, {
							hk: "3oiY99"
						}), N(e, t));
						s(Object(l.f)(a))
					}
					return c.ok || c.error
				}, T = Object(a.a)(x.h), M = Object(a.a)(x.b), P = Object(a.a)(x.a), R = (e, t, s) => async (a, o, {
					apiContext: r
				}) => {
					const i = o(),
						m = i.pages.modHub.flairedUsers.search.result === e && !i.pages.modHub.flairedUsers.models[e],
						u = {
							userName: e,
							subredditId: t,
							applied: s
						},
						p = s && s.templateId,
						b = Object(f.S)(i, {
							subredditId: t
						}),
						x = s && Object(c.g)(s),
						E = s ? s.cssClass : void 0,
						v = await Object(d.g)(r(), e, b.name, p, x, E);
					if (v.ok) {
						if (m) {
							let e;
							Object.keys(i.pages.modHub.flairedUsers.userOrder).forEach(t => {
								!1 === i.pages.modHub.flairedUsers.pageInfo[t].hasNextPage && i.pages.modHub.flairedUsers.userOrder[t].length < 50 && (e = t)
							});
							const t = {
								...u,
								key: e
							};
							a(P(t))
						}
						e === (i.user.account && Object(g.e)(i.user.account)) ? a(T(u)) : m || a(M(u))
					} else {
						const e = Object(l.e)(n.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "4hXQvr"
						}), h.b.Error);
						a(Object(l.f)(e))
					}
					return v.ok || v.error
				}
		},
		"./src/reddit/actions/pages/moderationPages/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "moderationPageRequested", (function() {
				return ge
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react-router-redux/es/index.js"),
				a = s("./src/lib/assertNever.ts"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/initializeClient/installReducer.ts"),
				i = s("./src/lib/makeListingKey/index.ts"),
				d = s("./src/reddit/actions/scheduledPosts/index.ts"),
				l = s("./src/reddit/helpers/canAccessModerationPage/index.ts"),
				c = s("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				m = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				u = s("./src/reddit/helpers/trackers/communityTopics.ts"),
				p = s("./src/reddit/helpers/trackers/screenview.ts"),
				b = s("./src/reddit/actions/contentControls/index.ts"),
				h = s("./src/reddit/actions/emoji.ts"),
				g = s("./src/reddit/actions/eventPosts/index.ts"),
				f = s("./src/reddit/actions/gold/communityAwards/index.ts"),
				x = s("./src/reddit/actions/grantUserFlair/index.ts"),
				E = s("./src/lib/makeActionCreator/index.ts"),
				v = s("./src/reddit/endpoints/subredditModeration/moderationLog.ts"),
				_ = s("./src/reddit/helpers/graphql/normalizeModerationLogFromGql/index.ts"),
				C = s("./src/reddit/models/SubredditModeration/ModerationLog/index.ts"),
				k = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/actions/moderationLog/constants.ts");
			const S = Object(E.a)(y.b),
				O = (e, t) => async (s, n, {
					gqlContext: a
				}) => {
					const o = await Object(v.a)(a(), e, t);
					if (o.body) {
						const t = o.body.data.subreddit.moderation;
						if (t && t.actions) {
							const a = n(),
								o = Object(_.b)(t.actions),
								r = Object(k.D)(a, e),
								{
									hasNextPage: i,
									hasPreviousPage: d,
									endCursor: l,
									startCursor: c
								} = t.actions.pageInfo,
								m = Object(C.a)(r, l, c),
								u = [];
							o.forEach(e => {
								u.push(e.id)
							}), s(S({
								hasNextPage: i,
								hasPreviousPage: d,
								endCursor: l,
								key: m,
								startCursor: c,
								normalizedModerationLog: o,
								actionIds: u,
								subredditId: r
							}))
						}
					}
				};
			var j = s("./src/reddit/actions/modQueue/index.ts"),
				w = s("./src/reddit/actions/pages/chatSettings.ts"),
				I = s("./src/reddit/actions/pages/subreddit.ts"),
				N = s("./src/reddit/actions/pages/subredditWiki/index.ts"),
				T = s("./src/reddit/actions/platform.ts"),
				M = s("./src/reddit/actions/profile/index.ts"),
				P = s("./src/reddit/actions/removalReasons/index.ts"),
				R = s("./src/reddit/actions/streaming/modSettings.ts"),
				F = s("./src/reddit/actions/subreddit.ts"),
				A = s("./src/reddit/actions/subreddit/questions.ts"),
				D = s("./src/reddit/actions/subredditModeration/index.ts"),
				L = s("./src/reddit/actions/subredditModeration/approvedSubmitters.ts"),
				U = s("./src/reddit/actions/subredditModeration/ban.ts"),
				B = s("./src/reddit/actions/subredditModeration/mute.ts"),
				H = s("./src/reddit/actions/subredditSettings.ts"),
				W = s("./src/reddit/actions/tags/index.ts"),
				Z = s("./node_modules/fbt/lib/FbtPublic.js"),
				V = s("./src/reddit/actions/toaster.ts"),
				q = s("./src/reddit/actions/trafficStats/constants.ts"),
				G = s("./src/lib/makeGqlRequest/index.ts"),
				z = s("./src/redditGQL/operations/FetchSubredditTrafficStats.json");
			var K = s("./node_modules/lodash/forEach.js"),
				Q = s.n(K),
				J = s("./src/reddit/helpers/graphql/helpers.ts"),
				X = s("./src/reddit/models/TrafficStats/index.ts");
			const Y = e => ({
					desktop: new Array(e).fill(0),
					oldReddit: new Array(e).fill(0),
					mWeb: new Array(e).fill(0),
					apps: new Array(e).fill(0),
					total: new Array(e).fill(0)
				}),
				$ = (e, t) => {
					return Object(J.e)(e.startsAt) > Object(J.e)(t.startsAt) ? 1 : -1
				},
				ee = (e, t, s) => {
					const n = {
							pageViews: Y(t),
							uniqueUsers: Y(t)
						},
						a = Object(J.e)(e[0].startsAt);
					return e.map(e => {
						const o = Object(J.e)(e.startsAt),
							r = new Date(o),
							i = t === X.c ? r.getMonth() : Math.round((o - a) / s) % t,
							d = X.d[e.client];
						n.pageViews[d][i] += e.pageViews, n.uniqueUsers[d][i] += e.uniqueUsers
					}), n
				};
			var te = s("./src/reddit/models/Toast/index.ts");
			const se = Object(E.a)(q.b),
				ne = Object(E.a)(q.c),
				ae = Object(E.a)(q.a),
				oe = e => async (t, s, {
					gqlContext: n
				}) => {
					const a = Object(k.S)(s(), {
						subredditId: e
					}).name;
					t(ne({
						subredditId: e
					}));
					const r = await ((e, t) => Object(G.a)(e, {
						...z,
						variables: t
					}))(n(), {
						subredditName: a
					});
					if (r.ok) {
						const s = r.body.data.subreddit.moderation;
						if (s && s.trafficStats) {
							const n = (e => {
								const t = Q()(e, (e, t) => e.sort($)),
									s = t.subscriptionData,
									n = s.map(e => e.subscribers),
									a = s.map(e => e.unsubscribers),
									r = ee(t.hourStats, X.b, o.O),
									i = ee(t.dayStats, X.a, o.z),
									d = ee(t.monthStats, X.c, o.nb);
								return {
									pageViews: {
										byHour: r.pageViews,
										byDay: i.pageViews,
										byMonth: d.pageViews
									},
									uniqueUsers: {
										byHour: r.uniqueUsers,
										byDay: i.uniqueUsers,
										byMonth: d.uniqueUsers
									},
									subscribers: n,
									unsubscribers: a
								}
							})(s.trafficStats);
							t(se({
								subredditId: e,
								trafficStats: n
							}))
						}
					} else t(ae({
						subredditId: e
					})), t(V.f({
						id: "error-block-trafficStats",
						kind: te.b.Error,
						text: Z.fbt._("Try again later", null, {
							hk: "41Goel"
						})
					}))
				};
			var re = s("./src/reddit/models/ModQueue/index.ts"),
				ie = s("./src/reddit/models/ScheduledPost/index.ts"),
				de = s("./src/reddit/reducers/pages/modHub/index.ts"),
				le = s("./src/reddit/selectors/moderatorPermissions.ts"),
				ce = s("./src/reddit/selectors/modQueue.ts"),
				me = s("./src/reddit/selectors/platform.ts"),
				ue = s("./src/reddit/selectors/postCreations.ts"),
				pe = s("./src/reddit/selectors/profile.ts"),
				be = s("./src/reddit/selectors/streamingModSettings.ts"),
				he = s("./src/reddit/selectors/user.ts");
			Object(r.a)({
				pages: {
					modHub: de.a
				}
			});
			const ge = e => async (t, s, r) => {
				const {
					params: E
				} = e, {
					pageName: v,
					profileName: _,
					subredditName: C
				} = E;
				if (v === o.Zb.Wiki) {
					if (await t(Object(N.handleWikiRedirects)(e))) return
				}
				if (v === o.Zb.SubredditContent) return void t(Object(n.c)(ie.r));
				const y = e.queryParams,
					S = y.page || re.b,
					Z = s();
				if (C) {
					const e = Object(i.a)(C, o.U.HOT),
						s = Z.listings.postOrder.ids[e],
						n = Z.listings.postOrder.api.error[e],
						a = Z.listings.postOrder.api.pending[e];
					if (n) return;
					a || s && !n || await t(Object(I.subredditDataRequested)(e, C, {}))
				} else _ && await t(Object(M.e)(_));
				if (!Object(he.J)(s()) && v !== o.Zb.Moderators && v !== o.Zb.SubredditRules && v !== o.Zb.Contributors) return void Object(m.a)(t, s());
				if (Object(p.i)(s(), !0, C, _), !v) return;
				let V, q, G, z, K, Q, J, X, Y, $ = !1;
				switch (v) {
					case o.Zb.Awards:
						V = f.i;
						break;
					case o.Zb.Muted:
						V = B.b;
						break;
					case o.Zb.Contributors:
						V = L.b;
						break;
					case o.Zb.Banned:
						V = U.c;
						break;
					case o.Zb.Moderators:
						G = !0;
						break;
					case o.Zb.Removal:
						V = P.removalReasonsRequested;
						break;
					case o.Zb.ContentControls:
						V = b.a, Q = !0;
						break;
					case o.Zb.ChatSettings:
						$ = !0;
						break;
					case o.Zb.CommunitySettings:
						V = H.h, J = !0;
						break;
					case o.Zb.Flair:
						V = x.b, K = !0;
						break;
					case o.Zb.UserFlair:
					case o.Zb.PostFlair:
						V = void 0;
						break;
					case o.Zb.Emojis:
						V = h.l;
						break;
					case o.Zb.Badges:
					case o.Zb.Emotes:
					case o.Zb.SubredditRules:
						V = void 0;
						break;
					case o.Zb.Traffic:
						V = oe;
						break;
					case o.Zb.Modlog:
						V = O, z = !0;
						break;
					case o.Zb.Streaming:
						V = R.g;
						break;
					case o.Zb.Modqueue:
					case o.Zb.Reports:
					case o.Zb.Spam:
					case o.Zb.Edited:
					case o.Zb.Unmoderated:
						q = v;
						break;
					case o.Zb.Wiki:
					case o.Zb.WikiContributors:
					case o.Zb.WikiBanned:
						await t(Object(N.subredditWikDataRequested)(E, y, !0));
						break;
					case o.Zb.ScheduledPostContent:
						X = !0, V = d.i;
						break;
					case o.Zb.EventPostContent:
						Y = !0;
						break;
					case o.Zb.Predictions:
						break;
					default:
						return Object(a.a)(v)
				}
				const ee = s(),
					te = !!C && Object(ue.hb)(ee),
					se = Object(he.G)(ee),
					ne = C ? Object(k.V)(ee, {
						subredditName: C.toLowerCase()
					}) : Object(pe.q)(ee, {
						profileName: _.toLowerCase()
					}),
					ae = C && Object(k.D)(ee, C),
					de = _ && Object(pe.m)(ee, _),
					ge = ae || de;
				ae && !Object(be.b)(Z, ae) && await t(Object(R.g)(ae));
				const fe = !!ae && Object(be.c)(ee, ae),
					xe = Object(le.l)(ee, {
						subredditId: ge
					}),
					Ee = C && Object(k.v)(ee, {
						subredditName: C
					}),
					ve = !(!Ee || !Ee.userIsContributor),
					_e = Object(k.X)(ee, {
						subredditId: ge
					});
				if (Object(l.a)({
						canCreateScheduledPosts: te,
						isContributor: ve,
						isEmployee: se,
						isStreamingEnabled: fe,
						moderatorPermissions: xe,
						pageName: v,
						subredditType: _e
					})) {
					if (q && C) {
						const e = Object(c.a)({
								onlyOfType: y.only,
								subreddit: C
							}),
							n = !!Object(ce.d)(Z, {
								pageName: q,
								page: `${S}`,
								subredditName: C,
								queryParams: y
							}),
							a = Z.pages.modHub.modQueue[q].api.error;
						if (Object(ce.c)(Z, {
								pageName: q
							}) || n && !a) return;
						if (!Object(me.n)(Z)) {
							const n = Object(j.e)(e, q, {
								...y,
								subreddit: C
							});
							await n(t, s, r)
						}
					} else if (G && ae) {
						if (await Object(D.g)(ae, y)(t, s, r), Z.moderatingSubreddits[ae]) {
							await Object(D.e)(ae, y)(t, s, r), Z.pages.modHub.moderators.invitedModerators.userOrder[ae] || await Object(D.f)(ae)(t, s, r)
						}
					} else Q && C ? await V(C)(t, s, r) : $ && ae ? await Object(w.e)(ae)(t, s, r) : J && ae ? await Promise.all([V(C, ae)(t, s, r), Object(W.k)(ae, u.a.communitySettings)(t, s, r), Object(A.b)(ae)(t, s, r)]) : z || K ? await V(C, y)(t, s, r) : X && ae ? await Object(d.i)({
						subredditId: ae
					})(t, s, r) : Y && C ? await Object(g.eventPostsRequested)(C)(t, s, r) : V && await V(ge, y)(t, s, r);
					C && ae && !Z.subreddits.rules[ae] && await F.o(C)(t, s, r), t(T.l({
						title: ne
					}))
				}
			}
		},
		"./src/reddit/actions/scheduledPosts/delete.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/scheduledPosts/constants.ts"),
				o = s("./src/reddit/actions/toaster.ts"),
				r = s("./src/lib/makeGqlRequest/index.ts"),
				i = s("./src/redditGQL/operations/DeleteScheduledPost.json");
			var d = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				l = s("./src/reddit/models/ScheduledPost/index.ts"),
				c = s("./src/reddit/models/Toast/index.ts"),
				m = s("./src/reddit/selectors/scheduledPosts/index.ts"),
				u = s("./src/telemetry/index.ts");
			const p = Object(n.a)(a.i),
				b = (e, t) => async (s, n, {
					gqlContext: b
				}) => {
					const h = Object(m.a)(n(), {
						subredditId: e,
						scheduledPostId: t
					});
					h && Object(l.p)(h) && Object(u.a)(Object(d.s)()(n(), h)), h ? (await ((e, t) => Object(r.a)(e, {
						...i,
						variables: t
					}))(b(), {
						input: {
							id: h.id
						}
					})).ok ? (s(Object(o.f)(Object(o.e)(a.q(), c.b.SuccessCommunity))), s(p({
						subredditId: e,
						scheduledPostId: t
					}))) : s(Object(o.f)(Object(o.e)(a.p(), c.b.Error))) : s(Object(o.f)(Object(o.e)(a.u(), c.b.Error)))
				}
		},
		"./src/reddit/actions/scheduledPosts/edit.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return E
			})), s.d(t, "a", (function() {
				return _
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react-router-redux/es/index.js"),
				o = s("./src/telemetry/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/scheduledPosts/index.ts"),
				d = s("./src/reddit/actions/scheduledPosts/constants.ts"),
				l = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/endpoints/scheduledPosts/update.ts"),
				m = s("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				u = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				p = s("./src/reddit/models/ScheduledPost/index.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				h = s("./src/reddit/routes/postCreation/index.ts"),
				g = s("./src/reddit/selectors/scheduledPosts/index.ts");
			const f = Object(r.a)(d.n),
				x = Object(r.a)(d.b),
				E = (e, t) => async (s, n, o) => {
					const r = Object(g.a)(n(), {
						scheduledPostId: t,
						subredditId: e
					});
					r && (await s(Object(a.b)(Object(h.c)(r.subreddit.name, r.collectionId))), s((Object(p.p)(r) ? x : f)(r)))
				}, v = (e, t) => {
					Object(p.p)(t) ? e(Object(i.d)({
						scheduledPost: t
					})) : e(Object(i.h)({
						scheduledPost: t
					}))
				}, _ = (e, t, s) => async (a, r, {
					gqlContext: h
				}) => {
					a(Object(i.g)());
					const f = Object(g.a)(r(), {
						subredditId: e,
						scheduledPostId: t
					});
					if (f && Object(p.p)(f) && Object(o.a)(Object(u.u)()(r(), f)), !f) return void a(Object(i.f)({
						message: n.fbt._("Scheduled post not found", null, {
							hk: "2zjM55"
						})
					}));
					if (!Object.keys(s).length) return void v(a, f);
					const x = await Object(c.a)(h(), {
							...s,
							id: t
						}),
						E = x.body;
					if (!(x.ok && E && E.data && E.data.updateScheduledPost && E.data.updateScheduledPost.ok && E.data.updateScheduledPost.scheduledPost)) return a(Object(i.f)({
						message: x.error && x.error.fields && x.error.fields.length && x.error.fields[0].msg || n.fbt._("Unknown error", null, {
							hk: "fXs5s"
						})
					})), void a(Object(l.f)(Object(l.e)(d.t(), b.b.Error, d.s(), _(e, t, s))));
					a(Object(l.f)(Object(l.e)(d.w(), b.b.SuccessCommunity))), v(a, Object(m.d)(E.data.updateScheduledPost.scheduledPost))
				}
		},
		"./src/reddit/actions/scheduledPosts/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "g", (function() {
				return g
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "h", (function() {
				return x
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "c", (function() {
				return k
			})), s.d(t, "e", (function() {
				return S
			})), s.d(t, "i", (function() {
				return j
			})), s.d(t, "a", (function() {
				return w
			})), s.d(t, "b", (function() {
				return N
			}));
			var n = s("./src/lib/assertNever.ts"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/scheduledPosts/constants.ts"),
				r = s("./src/reddit/actions/scheduledPosts/edit.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/endpoints/scheduledPosts/index.ts"),
				l = s("./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts"),
				c = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				m = s("./src/reddit/models/ScheduledPost/index.ts"),
				u = s("./src/reddit/models/Toast/index.ts"),
				p = s("./src/reddit/selectors/scheduledPosts/index.ts"),
				b = s("./src/telemetry/index.ts");
			const h = Object(a.a)(o.g),
				g = Object(a.a)(o.k),
				f = Object(a.a)(o.j),
				x = Object(a.a)(o.o),
				E = Object(a.a)(o.d),
				v = Object(a.a)(o.f),
				_ = Object(a.a)(o.m),
				C = Object(a.a)(o.a),
				k = Object(a.a)(o.c),
				y = Object(a.a)(o.e),
				S = Object(a.a)(o.h),
				O = (e, t) => {
					e(y()), e(Object(i.f)(Object(i.e)(o.r(), u.b.Error, o.s(), j(t))))
				},
				j = ({
					subredditId: e,
					includeStandalone: t = {
						standaloneFirst: 25
					},
					includeRecurring: s = {
						recurringFirst: 1e4
					},
					...n
				}) => async (a, o, {
					gqlContext: r
				}) => {
					if (Object(p.h)(o(), {
							subredditId: e
						})) return;
					a(h());
					const i = {
							subredditId: e,
							includeRecurring: s,
							includeStandalone: t,
							...n
						},
						c = await Object(d.b)(r(), i);
					Object(d.f)(c, i) ? I(a, Object(l.e)(c.body.data), i) : O(a, i)
				}, w = e => async (t, s, {
					gqlContext: n
				}) => {
					const a = s();
					if (!Object(p.h)(a, {
							subredditId: e
						})) return t(j({
						subredditId: e
					}));
					if (!Object(p.g)(a, {
							subredditId: e,
							type: m.f.standalonePosts
						})) return;
					const o = Object(p.c)(a, {
						subredditId: e,
						type: m.f.standalonePosts
					});
					if (!o) return;
					t(h());
					const r = {
							subredditId: e,
							includeStandalone: {
								standaloneFirst: 25,
								standaloneAfter: o
							}
						},
						i = await Object(d.b)(n(), r);
					i.ok ? I(t, Object(l.e)(i.body.data), r) : t(y())
				}, I = (e, t, s) => {
					Object(l.b)(t) ? e(v(t)) : Object(l.a)(t) ? e(C(t)) : Object(l.c)(t) ? e(_(t)) : O(e, s)
				}, N = (e, t) => async (s, a, o) => {
					const i = {},
						d = a();
					switch (e) {
						case "isModDistinguished":
						case "isNsfw":
						case "isOriginalContent":
						case "isContestMode":
						case "isPostAsMetaMod":
						case "isSpoiler":
							i[e] = !t[e];
							break;
						case "isSticky":
							const s = !!t.sticky && "NONE" !== t.sticky;
							i.sticky = s ? "NONE" : "SECOND";
							break;
						default:
							return Object(n.a)(e)
					}
					Object(b.a)(Object(c.t)(e, i[e], Object(m.p)(t))(d)), s(Object(r.a)(t.subreddit.id, t.id, i))
				}
		},
		"./src/reddit/actions/subredditModeration/approvedSubmitters.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return _
			})), s.d(t, "c", (function() {
				return S
			})), s.d(t, "a", (function() {
				return w
			})), s.d(t, "d", (function() {
				return I
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/lodash/get.js"),
				o = s.n(a),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/makeApiRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
				m = s("./src/reddit/constants/headers.ts"),
				u = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const p = (e, t, s) => Object(l.a)(Object(c.a)(e, [m.a]), {
				endpoint: Object(u.a)(`${e.apiUrl}/api/v1/${t}/contributors`),
				method: d.hb.GET,
				data: s
			});
			var b = s("./src/reddit/helpers/normalizeUsername/index.tsx"),
				h = s("./src/reddit/models/SubredditModeration/index.ts"),
				g = s("./src/reddit/models/Toast/index.ts"),
				f = s("./src/reddit/actions/subredditModeration/constants.ts");
			const x = Object(r.a)(f.g),
				E = Object(r.a)(f.f),
				v = Object(r.a)(f.e),
				_ = (e, t = {}) => async (s, n, {
					apiContext: a
				}) => {
					const o = n(),
						r = t.after || "",
						i = Object(h.d)(e, r),
						d = o.pages.modHub.approvedSubmitters.fetchedTokens[i];
					if (o.pages.modHub.approvedSubmitters.api.pending[i] || d) return;
					s(x({
						subredditId: e,
						fetchedToken: r
					}));
					const l = o.subreddits.models[e].name,
						c = await p(a(), l, t);
					c.ok ? s(E({
						...c.body,
						fetchedToken: r
					})) : s(v({
						subredditId: e,
						fetchedToken: r
					}))
				}, C = Object(r.a)(f.j), k = Object(r.a)(f.i), y = Object(r.a)(f.h), S = (e, t) => async (s, n, {
					apiContext: a
				}) => {
					const o = n().subreddits.models[e].name,
						r = {
							username: Object(b.a)(t)
						};
					s(C());
					const i = await p(a(), o, r);
					i.ok ? s(k(i.body)) : s(y(i.error))
				}, O = Object(r.a)(f.d), j = Object(r.a)(f.k), w = (e, t) => async (s, a, {
					apiContext: r
				}) => {
					const u = a(),
						h = u.subreddits.models[e].url,
						f = u.subreddits.models[e].name;
					t = Object(b.a)(t);
					const x = await ((e, t, s) => Object(l.a)(Object(c.a)(e, [m.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: d.hb.POST,
						data: {
							api_type: "json",
							name: s,
							type: "contributor"
						}
					}))(r(), h, t);
					if (x.ok) {
						const e = {
							username: t
						};
						s(Object(i.f)({
							kind: g.b.SuccessMod,
							text: n.fbt._("Successfully added an approved submitter", null, {
								hk: "4gruK7"
							})
						}));
						const a = await p(r(), f, e);
						a.ok && s(O(a.body))
					} else {
						const e = o()(x, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						s(Object(i.f)({
							kind: g.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, I = (e, t) => async (s, a, {
					apiContext: r
				}) => {
					const u = a().subreddits.models[e].url,
						p = await ((e, t, s) => Object(l.a)(Object(c.a)(e, [m.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: d.hb.POST,
							data: {
								api_type: "json",
								id: s,
								type: "contributor"
							}
						}))(r(), u, t);
					if (p.ok) s(j({
						subredditId: e,
						userId: t
					}));
					else {
						const e = o()(p, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						s(Object(i.f)({
							kind: g.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}
		},
		"./src/reddit/actions/subredditModeration/mute.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return _
			})), s.d(t, "c", (function() {
				return S
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "a", (function() {
				return I
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./node_modules/lodash/get.js"),
				r = s.n(o),
				i = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/makeApiRequest/index.ts"),
				l = s("./src/lib/omitHeaders/index.ts"),
				c = s("./src/reddit/constants/headers.ts"),
				m = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const u = (e, t, s) => Object(d.a)(Object(l.a)(e, [c.a]), {
				endpoint: Object(m.a)(`${e.apiUrl}/api/v1/${t}/muted`),
				method: i.hb.GET,
				data: s
			});
			var p = s("./src/reddit/helpers/normalizeUsername/index.tsx"),
				b = s("./src/reddit/models/SubredditModeration/index.ts"),
				h = s("./src/reddit/models/Toast/index.ts"),
				g = s("./src/reddit/actions/toaster.ts"),
				f = s("./src/reddit/actions/subredditModeration/constants.ts");
			const x = Object(a.a)(f.N),
				E = Object(a.a)(f.L),
				v = Object(a.a)(f.K),
				_ = (e, t = {}) => async (s, n, {
					apiContext: a
				}) => {
					const o = n(),
						r = t.after || "",
						i = Object(b.d)(e, r),
						d = o.pages.modHub.muted.fetchedTokens[i];
					if (o.pages.modHub.muted.api.pending[i] || d) return;
					s(x({
						subredditId: e,
						fetchedToken: r
					}));
					const l = o.subreddits.models[e].name,
						c = await u(a(), l, t);
					c.ok ? s(E({
						...c.body,
						fetchedToken: r
					})) : s(v({
						subredditId: e,
						fetchedToken: r
					}))
				}, C = Object(a.a)(f.Q), k = Object(a.a)(f.P), y = Object(a.a)(f.O), S = (e, t) => async (s, n, {
					apiContext: a
				}) => {
					const o = n().subreddits.models[e].name,
						r = {
							username: Object(p.a)(t)
						};
					s(C());
					const i = await u(a(), o, r);
					i.ok ? s(k(i.body)) : s(y(i.error))
				}, O = Object(a.a)(f.M), j = Object(a.a)(f.R), w = (e, t) => async (s, a, {
					apiContext: o
				}) => {
					const m = a().subreddits.models[e].url,
						u = await ((e, t, s) => Object(d.a)(Object(l.a)(e, [c.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: i.hb.POST,
							data: {
								api_type: "json",
								id: s,
								type: "muted"
							}
						}))(o(), m, t);
					if (u.ok) s(j({
						subredditId: e,
						userId: t
					}));
					else {
						const e = r()(u, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						s(Object(g.f)({
							kind: h.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, I = (e, t, s) => async (a, o, {
					apiContext: m
				}) => {
					const b = o(),
						f = b.subreddits.models[e].url,
						x = b.subreddits.models[e].name;
					t = Object(p.a)(t);
					const E = await ((e, t, s, n) => Object(d.a)(Object(l.a)(e, [c.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: i.hb.POST,
						data: {
							api_type: "json",
							name: s,
							note: n,
							type: "muted"
						}
					}))(m(), f, t, s);
					if (E.ok) {
						const e = {
							username: t
						};
						a(Object(g.f)({
							kind: h.b.SuccessMod,
							text: n.fbt._("Successfully muted a user", null, {
								hk: "2ypyuL"
							})
						}));
						const s = await u(m(), x, e);
						s.ok && a(O(s.body))
					} else {
						const e = r()(E, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						a(Object(g.f)({
							kind: h.b.Error,
							text: e,
							duration: 3e3
						}))
					}
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
			var n = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				a = s.n(n);
			const o = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", a.a);
			t.a = o
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
			var n = s("./src/config.ts"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/reddit/components/CallToActionButton/index.tsx"),
				i = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				l = s.n(d);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: a
				} = e, {
					source: d,
					callToAction: c,
					caption: m
				} = t;
				if (!d || !d.url) return null;
				let u = d.displayText;
				return d.displayText.length >= 40 && (u = d.displayText.slice(0, 40 - "...".length) + "..."), o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: l.a.leftSideContent
				}, m && !a && o.a.createElement("span", {
					className: l.a.caption,
					title: m
				}, m), o.a.createElement(i.a, {
					href: d.url.replace(n.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: d,
					className: l.a.displayUrl
				}, u)), c && o.a.createElement(r.a, {
					className: l.a.callToAction,
					href: d.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: d
				}, c))
			}
		},
		"./src/reddit/components/ApprovedSubmitterList/AddApprovedSubmitterModal.m.less": function(e, t, s) {
			e.exports = {
				PrimaryButton: "_2MgVqpGJKTGicaQowt_R9h",
				primaryButton: "_2MgVqpGJKTGicaQowt_R9h"
			}
		},
		"./src/reddit/components/ApprovedSubmitterList/AddApprovedSubmitterModal.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/higherOrderComponents/asModal/index.tsx"),
				i = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = s("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/controls/TextButton/index.tsx"),
				u = s("./src/reddit/helpers/isValidUsername/index.tsx"),
				p = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				b = s("./src/reddit/components/ApprovedSubmitterList/AddApprovedSubmitterModal.m.less"),
				h = s.n(b);
			const g = i.a.wrapped(c.i, "PrimaryButton", h.a);
			class f extends o.a.Component {
				constructor(e) {
					super(e), this.onInputChange = e => {
						this.setState({
							username: e.currentTarget.value
						})
					}, this.onSubmit = () => {
						const {
							props: e,
							state: t
						} = this;
						e.onAddSubmitter(e.subredditId, t.username), e.sendEventWithName("add")(), e.toggleModal()
					}, this.state = {
						username: ""
					}
				}
				componentDidMount() {
					this.setState({
						username: this.props.username || ""
					})
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return o.a.createElement(d.d, null, o.a.createElement(d.h, null, o.a.createElement(p.a, null, o.a.createElement(d.p, null, n.fbt._("Add approved user", null, {
						hk: "rVlIL"
					})), o.a.createElement(m.a, {
						onClick: e.toggleModal
					}, o.a.createElement(d.b, null)))), o.a.createElement(d.k, null, o.a.createElement(l.d, {
						placeholder: n.fbt._("Enter username", null, {
							hk: "4DdFFr"
						}),
						onChange: this.onInputChange,
						value: this.state.username,
						autoFocus: !0
					})), o.a.createElement(d.f, null, o.a.createElement(d.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, n.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(g, {
						onClick: this.onSubmit,
						"data-redditstyle": !0,
						disabled: !Object(u.a)(t.username)
					}, n.fbt._("Add user", null, {
						hk: "23A7cj"
					}))))
				}
			}
			t.a = Object(r.a)(f)
		},
		"./src/reddit/components/ApprovedSubmitterList/index.m.less": function(e, t, s) {
			e.exports = {
				PencilIcon: "_1XoRj9AWrCZUnxJt2JB2QS",
				pencilIcon: "_1XoRj9AWrCZUnxJt2JB2QS",
				noPermissions: "_2LSmyOf3zXlFqKumLW0h7B"
			}
		},
		"./src/reddit/components/ApprovedSubmitterList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/timeAgo/index.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/actions/subredditModeration/approvedSubmitters.ts"),
				b = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				h = s("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				g = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				f = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				x = s("./src/reddit/components/Scroller/Simple.tsx"),
				E = s("./src/reddit/components/SubredditModerationSearch/index.tsx"),
				v = s("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				_ = s("./src/reddit/components/SubredditModerationUserItem/index.tsx"),
				C = s("./src/reddit/controls/Button/index.tsx"),
				k = s("./src/reddit/icons/fonts/index.tsx"),
				y = s("./src/reddit/models/SubredditModeration/index.ts"),
				S = s("./src/reddit/selectors/activeModalId.ts"),
				O = s("./src/lib/objectSelector/index.ts"),
				j = s("./src/reddit/components/InboxTooltip/Component.tsx");
			const w = Object(O.a)((e, {
				subredditId: t
			}) => {
				const s = e.pages.modHub.approvedSubmitters.userOrder[t];
				return s ? s.map(s => e.pages.modHub.approvedSubmitters.models[t][s]) : j.a
			});
			var I = s("./src/reddit/selectors/user.ts"),
				N = s("./src/reddit/contexts/PageLayer/index.tsx"),
				T = s("./src/reddit/components/ApprovedSubmitterList/AddApprovedSubmitterModal.tsx"),
				M = s("./src/reddit/components/ApprovedSubmitterList/index.m.less"),
				P = s.n(M);
			const R = 24,
				F = Object(N.t)({
					username: e => Object(N.T)(e).user
				}),
				A = Object(d.c)({
					approvedSubmitters: w,
					approvedSubmittersListPending: (e, {
						subredditId: t
					}) => {
						const s = Object(y.d)(t);
						return !!e.pages.modHub.approvedSubmitters.api.pending[s]
					},
					isAddUserModalOpen: e => "ModerationPage--Modal--AddUser" === Object(S.a)(e),
					isConfirmModalOpen: e => "ModerationPage--Modal--RemoveUserConfirmation" === Object(S.a)(e),
					loadMoreToken: (e, {
						subredditId: t
					}) => e.pages.modHub.approvedSubmitters.loadMore[t],
					searchPending: e => !!e.pages.modHub.approvedSubmitters.search.api.pending,
					searchResult: e => e.pages.modHub.approvedSubmitters.search.result,
					currentUser: I.j
				}),
				D = Object(i.b)(A, (e, {
					subredditId: t
				}) => ({
					addSubmitter: (t, s) => e(Object(p.a)(t, s)),
					loadMore: s => e(Object(p.b)(t, {
						after: s
					})),
					removeSubmitter: (t, s) => e(Object(p.d)(t, s)),
					searchForSubmitter: (t, s) => e(Object(p.c)(t, s)),
					toggleRemoveUserModal: () => e(Object(u.i)("ModerationPage--Modal--RemoveUserConfirmation")),
					toggleAddUserModal: () => e(Object(u.i)("ModerationPage--Modal--AddUser"))
				}));
			class L extends r.a.Component {
				constructor(e) {
					super(e), this.handleRemoveToggled = (e, t) => {
						this.setState({
							userId: e,
							username: t
						}), this.props.toggleRemoveUserModal()
					}, this.handleRemoveConfirmed = () => {
						this.state.userId && this.props.removeSubmitter(this.props.subredditId, this.state.userId)
					}, this.onSearch = e => {
						this.props.searchForSubmitter(this.props.subredditId, e), this.props.sendEventWithName("search_done")(), this.setState({
							searchTerm: e
						})
					}, this.cancelSearch = () => this.setState({
						searchTerm: null
					}), this.onLoadMore = () => {
						this.props.loadMoreToken && this.props.loadMore(this.props.loadMoreToken)
					}, this.approveSubmitter = () => {
						this.props.sendEventWithName("open_add_dialog")(), this.props.toggleAddUserModal()
					}, this.renderUser = e => {
						var t, s;
						return r.a.createElement(_.b, {
							timeAgo: Object(m.d)(e.approvedAtUTC),
							pageName: c.Zb.Contributors,
							primaryButton: (null === (t = this.props.currentUser) || void 0 === t ? void 0 : t.id) !== e.id ? r.a.createElement("a", {
								href: `${n.a.redditUrl}/message/compose/?to=${e.username}`,
								rel: "noopener noreferrer",
								target: "_blank"
							}, r.a.createElement(C.o, null, a.fbt._("Send message", null, {
								hk: "2bul7M"
							}))) : null,
							secondaryButton: (null === (s = this.props.moderatorPermissions) || void 0 === s ? void 0 : s.access) ? r.a.createElement(C.o, {
								onClick: () => this.handleRemoveToggled(e.id, e.username)
							}, a.fbt._("Remove", null, {
								hk: "40fFvl"
							})) : null,
							subredditId: this.props.subredditId,
							userIcon: e.accountIcon,
							username: e.username
						})
					}, this.renderAddUserModal = () => r.a.createElement(T.a, {
						ignoreDefaultFocus: !0,
						onAddSubmitter: this.props.addSubmitter,
						sendEventWithName: this.props.sendEventWithName,
						subredditId: this.props.subredditId,
						toggleModal: this.props.toggleAddUserModal,
						username: this.props.username,
						withOverlay: !0
					}), this.state = y.a
				}
				componentDidMount() {
					this.props.username && this.approveSubmitter()
				}
				render() {
					var e;
					const {
						props: t,
						state: s
					} = this, o = t.approvedSubmitters.length ? t.approvedSubmitters[t.approvedSubmitters.length - 1].id : void 0, i = null === (e = t.moderatorPermissions) || void 0 === e ? void 0 : e.access;
					return t.approvedSubmitters.length ? r.a.createElement(r.a.Fragment, null, i && r.a.createElement(f.c, null, r.a.createElement(C.i, {
						onClick: this.approveSubmitter
					}, a.fbt._("Approve user", null, {
						hk: "2v6FxN"
					}))), r.a.createElement(f.a, {
						className: Object(l.a)(!i && P.a.noPermissions)
					}, r.a.createElement(f.b, null, a.fbt._("Approved users", null, {
						hk: "1alMeD"
					}), r.a.createElement(g.a, {
						linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/360009164452`
					})), r.a.createElement(v.b, {
						activeSearchQuery: this.state.searchTerm,
						onSearch: this.onSearch
					}), s.searchTerm ? r.a.createElement(E.a, {
						cancelSearch: this.cancelSearch,
						noResultsFound: !t.searchResult,
						searchPending: t.searchPending,
						searchTerm: s.searchTerm
					}, t.searchResult && this.renderUser(t.searchResult)) : r.a.createElement(x.b, {
						loadMoreToken: o,
						onLoadMore: this.onLoadMore
					}, t.approvedSubmitters.map((e, t) => ({
						estHeight: R,
						id: e.id,
						render: () => this.renderUser(e)
					})))), t.isAddUserModalOpen && this.renderAddUserModal(), t.isConfirmModalOpen && s.userId && s.username && r.a.createElement(b.a, {
						actionText: a.fbt._("Remove", null, {
							hk: "42TALr"
						}),
						modalText: a.fbt._("Are you sure you want to remove {username} as an approved user?", [a.fbt._param("username", s.username)], {
							hk: "4ELjHt"
						}),
						onConfirm: this.handleRemoveConfirmed,
						toggleModal: t.toggleRemoveUserModal,
						trackClick: t.sendEventWithName("remove"),
						withOverlay: !0
					})) : r.a.createElement(r.a.Fragment, null, i && r.a.createElement(f.c, null, r.a.createElement(C.i, {
						onClick: this.approveSubmitter
					}, a.fbt._("Approve user", null, {
						hk: "1qX1LT"
					}))), r.a.createElement(f.a, {
						className: Object(l.a)(!i && P.a.noPermissions)
					}, r.a.createElement(f.b, null, a.fbt._("Approved users", null, {
						hk: "pxkv2"
					}), r.a.createElement(g.a, {
						linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/360009164452`
					})), t.approvedSubmittersListPending ? r.a.createElement(_.a, null) : r.a.createElement(h.c, {
						text: a.fbt._("No approved users in {subredditName}", [a.fbt._param("subredditName", t.subreddit.displayText)], {
							hk: "1VEG1v"
						})
					}, r.a.createElement(k.a, {
						name: "edit",
						className: P.a.PencilIcon
					}))), t.isAddUserModalOpen && this.renderAddUserModal())
				}
			}
			t.a = F(D(L))
		},
		"./src/reddit/components/BannedUserList/ExpandedComponent.m.less": function(e, t, s) {
			e.exports = {
				UnthreadedComment: "lOLiM3i26F_WjvQ8LeLft",
				unthreadedComment: "lOLiM3i26F_WjvQ8LeLft",
				BanReason: "SrZ1u3sJDzvdTgFW_XYZl",
				banReason: "SrZ1u3sJDzvdTgFW_XYZl",
				ExpandedComponentContainer: "_3q58C3lscUB_CbjoSfgVW2",
				expandedComponentContainer: "_3q58C3lscUB_CbjoSfgVW2",
				ModNote: "_3hA381rnksvJreaBfQTIC3",
				modNote: "_3hA381rnksvJreaBfQTIC3",
				ModNoteContainer: "_35E0y1j_QASeOMGpNM97k7",
				modNoteContainer: "_35E0y1j_QASeOMGpNM97k7",
				SectionTitle: "_3QIBdlHwReGVNodLBY3cSt",
				sectionTitle: "_3QIBdlHwReGVNodLBY3cSt",
				ContextContainer: "_1pqL5T1jpl-iWaJcvRftmU",
				contextContainer: "_1pqL5T1jpl-iWaJcvRftmU"
			}
		},
		"./src/reddit/components/BannedUserList/index.m.less": function(e, t, s) {
			e.exports = {
				BanIcon: "_1c2rKv1iuQylye8ejI6-1v",
				banIcon: "_1c2rKv1iuQylye8ejI6-1v"
			}
		},
		"./src/reddit/components/BannedUserList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return J
			}));
			var n = s("./src/config.ts"),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				c = s("./node_modules/lodash/find.js"),
				m = s.n(c);
			const u = [{
				ms: l.kc,
				unit: "years"
			}, {
				ms: l.nb,
				unit: "months"
			}, {
				ms: l.z,
				unit: "days"
			}, {
				ms: l.O,
				unit: "hours"
			}, {
				ms: l.ib,
				unit: "minutes"
			}, {
				ms: l.Nb,
				unit: "seconds"
			}, {
				ms: 1,
				unit: "milliseconds"
			}];
			var p = s("./src/lib/timeAgo/index.ts"),
				b = s("./src/reddit/actions/modal.ts"),
				h = s("./src/reddit/actions/subredditModeration/ban.ts"),
				g = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				f = s("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				x = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				E = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				v = s("./src/reddit/components/Scroller/Simple.tsx"),
				_ = s("./src/reddit/components/SubredditModerationSearch/index.tsx"),
				C = s("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				k = s("./src/reddit/components/SubredditModerationUserItem/index.tsx"),
				y = s("./src/reddit/controls/Button/index.tsx"),
				S = s("./src/reddit/icons/fonts/index.tsx"),
				O = s("./src/reddit/models/SubredditModeration/index.ts"),
				j = s("./src/reddit/selectors/activeModalId.ts"),
				w = s("./src/reddit/selectors/bannedUser.ts"),
				I = s("./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx"),
				N = s("./src/lib/lessComponent.tsx"),
				T = s("./src/reddit/components/Comments/UnthreadedComment/index.tsx"),
				M = s("./src/reddit/components/CompactPost/index.tsx"),
				P = s("./src/reddit/contexts/PageLayer/index.tsx"),
				R = s("./src/reddit/components/BannedUserList/ExpandedComponent.m.less"),
				F = s.n(R);
			const {
				fbt: A
			} = s("./node_modules/fbt/lib/FbtPublic.js"), D = Object(P.t)({
				currentProfileName: P.h,
				isCommentsPage: P.w,
				isCommentPermalink: P.v,
				isProfilePostListing: P.I,
				pageLayer: e => e
			}), L = N.a.wrapped(T.c, "UnthreadedComment", F.a), U = N.a.div("BanReason", F.a), B = N.a.div("ExpandedComponentContainer", F.a), H = N.a.div("ModNote", F.a), W = N.a.div("ModNoteContainer", F.a), Z = N.a.div("SectionTitle", F.a), V = N.a.div("ContextContainer", F.a), q = e => () => {};
			var G = D(e => {
					const {
						currentProfileName: t,
						isCommentPermalink: s,
						isCommentsPage: n,
						isProfilePostListing: a,
						pageLayer: o,
						user: i
					} = e;
					return r.a.createElement(B, null, i.modNote && r.a.createElement(W, null, r.a.createElement(Z, null, A._("Mod note:", null, {
						hk: "2LBtSw"
					})), r.a.createElement(H, null, i.modNote)), r.a.createElement("div", null, r.a.createElement(Z, null, A._("Banned For:", null, {
						hk: "3UbXsX"
					})), r.a.createElement(U, null, i.reason), (i.postId || i.commentId) && r.a.createElement(V, null, i.postId && r.a.createElement(M.default, {
						currentProfileName: t,
						isCommentsPage: n,
						isCommentPermalink: s,
						isProfilePostListing: a,
						pageLayer: o,
						last: !0,
						postId: i.postId,
						hideModTools: !0,
						inSubredditOrProfile: !0
					}), i.commentId && r.a.createElement(L, {
						commentId: i.commentId,
						highlight: !1,
						trackClick: q
					}))))
				}),
				z = s("./src/reddit/components/BannedUserList/index.m.less"),
				K = s.n(z);
			const Q = 48,
				J = e => {
					if (null == e) return a.fbt._("Permanent", null, {
						hk: "3pNDzS"
					}); {
						const t = function(e) {
							const t = m()(u, t => e >= t.ms);
							return t ? {
								amount: Math.floor(e / t.ms),
								unit: t.unit
							} : {
								amount: 0,
								unit: "justNow"
							}
						}(864e5 * e);
						return a.fbt._({
							"*": "{number} days left",
							_1: "1 day left"
						}, [a.fbt._plural(t.amount, "number")], {
							hk: "3VM32a"
						})
					}
				},
				X = e => {
					return `${Object(p.d)(e.bannedAtUTC)} (${J(e.duration)})`
				},
				Y = Object(d.c)({
					bannedUsers: w.h,
					bannedUsersList: w.d,
					bannedUsersListPending: w.c,
					loadMoreToken: w.e,
					isBanUserModalOpen: e => "ModerationPage--Modal--AddUser" === Object(j.a)(e),
					isConfirmModalOpen: e => "ModerationPage--Modal--BanUserConfirmation" === Object(j.a)(e),
					searchPending: w.f,
					searchResult: w.g
				}),
				$ = Object(i.b)(Y, (e, {
					subredditId: t
				}) => ({
					loadMore: s => e(Object(h.c)(t, {
						after: s
					})),
					onUnbanUser: s => () => e(Object(h.e)(t, s)),
					searchForBannedUser: s => e(Object(h.d)(t, s)),
					toggleBanUserModal: () => e(Object(b.i)("ModerationPage--Modal--AddUser"))
				}));
			class ee extends r.a.Component {
				constructor(e) {
					super(e), this.handleBanUserToggled = e => {
						if (e) {
							const {
								id: t,
								username: s
							} = e;
							this.setState({
								userId: t,
								username: s
							})
						} else this.setState({
							...O.a,
							searchTerm: this.state.searchTerm
						});
						this.props.isBanUserModalOpen || this.props.sendEventWithName(e ? "edit_user" : "ban_dialog_banpage")(), this.props.toggleBanUserModal()
					}, this.addBannedUser = () => this.handleBanUserToggled(null), this.onSearch = e => {
						this.props.searchForBannedUser(e), this.props.sendEventWithName("search_done")(), this.setState({
							searchTerm: e
						})
					}, this.cancelSearch = () => this.setState({
						searchTerm: null
					}), this.onLoadMore = () => {
						this.props.loadMoreToken && this.props.loadMore(this.props.loadMoreToken)
					}, this.renderBannedUser = e => {
						const t = this.props.bannedUsers[e] || this.props.searchResult;
						return t ? r.a.createElement(k.b, {
							description: t.reason,
							expandedComponent: r.a.createElement(G, {
								user: t
							}),
							pageName: l.Zb.Banned,
							primaryButton: r.a.createElement(y.o, {
								onClick: () => this.handleBanUserToggled(t),
								"data-redditstyle": !0
							}, a.fbt._("Edit", null, {
								hk: "1nftDt"
							})),
							subredditId: this.props.subredditId,
							timeAgo: X(t),
							userIcon: t.accountIcon,
							username: t.username
						}) : r.a.createElement("div", null)
					}, this.renderAddBannedUserModal = () => r.a.createElement(I.a, {
						ignoreDefaultFocus: !0,
						onUnbanUser: this.state.userId ? this.props.onUnbanUser(this.state.userId) : void 0,
						subredditId: this.props.subredditId,
						toggleModal: () => this.handleBanUserToggled(null),
						trackAddEvent: this.props.sendEventWithName("add_banpage"),
						trackEventWithName: this.props.sendEventWithName,
						user: this.state.userId ? this.state.searchTerm ? this.props.searchResult || null : this.props.bannedUsers[this.state.userId] : null,
						withOverlay: !0
					}), this.state = O.a
				}
				render() {
					const {
						props: e,
						state: t
					} = this, s = e.bannedUsersList.length ? e.bannedUsersList[e.bannedUsersList.length - 1].id : void 0;
					return e.bannedUsersList.length ? r.a.createElement(r.a.Fragment, null, r.a.createElement(E.c, null, r.a.createElement(y.i, {
						onClick: this.addBannedUser,
						"data-redditstyle": !0
					}, a.fbt._("Ban user", null, {
						hk: "2q7TuL"
					}))), r.a.createElement(E.a, null, r.a.createElement(E.b, null, a.fbt._("Banned users", null, {
						hk: "3hvISm"
					}), r.a.createElement(x.a, {
						linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/360009161872`
					})), r.a.createElement(C.b, {
						onSearch: this.onSearch,
						activeSearchQuery: this.state.searchTerm
					}), t.searchTerm ? r.a.createElement(_.a, {
						cancelSearch: this.cancelSearch,
						searchPending: e.searchPending,
						searchTerm: t.searchTerm,
						noResultsFound: !e.searchResult
					}, e.searchResult && this.renderBannedUser(e.searchResult.id)) : r.a.createElement(v.b, {
						loadMoreToken: s,
						onLoadMore: this.onLoadMore
					}, e.bannedUsersList.map(e => ({
						estHeight: Q,
						id: e.id,
						render: () => this.renderBannedUser(e.id)
					})))), e.isBanUserModalOpen && this.renderAddBannedUserModal(), e.isConfirmModalOpen && t.userId && t.username && r.a.createElement(g.a, {
						actionText: a.fbt._("Remove", null, {
							hk: "Lczwm"
						}),
						modalText: a.fbt._("Are you sure you want to ban {username}?", [a.fbt._param("username", t.username)], {
							hk: "4f7Mkp"
						}),
						onConfirm: () => {},
						toggleModal: e.toggleBanUserModal,
						trackClick: e.sendEventWithName("remove")
					})) : r.a.createElement(r.a.Fragment, null, r.a.createElement(E.c, null, r.a.createElement(y.i, {
						onClick: this.addBannedUser,
						"data-redditstyle": !0
					}, " ", a.fbt._("Ban user", null, {
						hk: "2q7TuL"
					}))), r.a.createElement(E.a, null, r.a.createElement(E.b, null, a.fbt._("Banned users", null, {
						hk: "3hvISm"
					}), r.a.createElement(x.a, {
						linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/360009161872`
					})), e.bannedUsersListPending ? r.a.createElement(k.a, null) : r.a.createElement(f.c, {
						text: a.fbt._("No banned users in {subredditName}", [a.fbt._param("subredditName", e.subreddit.displayText)], {
							hk: "1nOcbC"
						})
					}, r.a.createElement(S.a, {
						name: "ban",
						className: K.a.BanIcon
					}))), e.isBanUserModalOpen && this.renderAddBannedUserModal())
				}
			}
			t.a = $(ee)
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
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				i = s("./src/reddit/components/CallToActionButton/index.m.less"),
				d = s.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => a.a.createElement(r.a, l({
				className: Object(o.a)(e, d.a.CallToActionButton, {
					[d.a.mNotCardView]: t.isNotCardView
				})
			}, t))
		},
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, s) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				i = s("./src/reddit/components/CharacterCountdown/index.m.less"),
				d = s.n(i);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => a.a.createElement(r.b, {
				className: Object(o.a)(e.className, d.a.container, e.text.length >= e.maxChars ? d.a.mOverflow : null)
			}, l._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [l._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "renderMedia", (function() {
				return Z
			})), s.d(t, "SearchResultsClassicPost", (function() {
				return G
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/ads/index.ts"),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/getShortenedLink.ts"),
				l = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				c = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				m = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				u = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				p = s("./src/reddit/components/ExpandoButton/index.tsx"),
				b = s("./src/reddit/components/Flatlist/index.tsx"),
				h = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				g = s("./src/reddit/components/ModModeReports/index.tsx"),
				f = s("./src/reddit/components/ModModeReports/helpers.ts"),
				x = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				E = s("./src/reddit/components/PostContainer/index.tsx"),
				v = s("./src/reddit/components/PostMedia/index.tsx"),
				_ = s("./src/reddit/components/PostMeta/index.tsx"),
				C = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				k = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				y = s("./src/reddit/components/PostTitle/index.tsx"),
				S = s("./src/reddit/components/PostTopMeta/index.tsx"),
				O = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				j = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				w = s("./src/reddit/models/Media/index.ts"),
				I = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				N = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				T = s("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
				M = s("./src/reddit/contexts/Post/index.tsx"),
				P = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				R = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				F = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				A = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				D = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				L = s.n(D),
				U = s("./src/reddit/components/ClassicPost/index.m.less"),
				B = s.n(U);

			function H() {
				return (H = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class W extends a.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						className: e,
						currentUser: t,
						handleVote: s,
						isExpanded: n,
						inSubredditOrProfile: i,
						eventFactory: v,
						first: N,
						flairStyleTemplate: T,
						formatTitle: M,
						hostPostData: D,
						isCheckboxSelected: U,
						isCurrentUserProfilePost: W,
						isCommentCountAnimationEnabled: V,
						isVoteCountAnimationEnabled: q,
						isCountAnimShadowTestEnabled: G,
						isFrontpage: z,
						isGalleryTileLayoutDefault: K,
						isLoggedIn: Q,
						isOverlay: J,
						imageGalleryCurrentItem: X,
						moderatorPermissions: Y,
						modModeEnabled: $,
						onClickPost: ee,
						onIgnoreReports: te,
						onOpenReportsDropdown: se,
						poll: ne,
						post: ae,
						postId: oe,
						redditStyle: re,
						scrollerItemRef: ie,
						showBulkActionCheckbox: de,
						showEditFlair: le,
						showMedia: ce,
						subredditOrProfile: me,
						toggleCheckbox: ue,
						userIsOp: pe,
						shouldShowGalleryTileOption: be,
						showPromotedCTA: he
					} = this.props, ge = re ? void 0 : T, fe = this.props.crosspost || void 0, xe = Object(F.a)(Y), Ee = Object(P.a)(Y), ve = Object(R.a)(Y), _e = $ && F.a, Ce = !!ae.media && ae.media.type === w.o.RTJSON, ke = pe && Ce, ye = i && !ce, Se = !!ae.media && Object(w.G)(ae.media), Oe = {
						flairStyleTemplate: ge,
						post: ae,
						inSubredditOrProfile: i,
						isCurrentUserProfilePost: W,
						isOverlay: J,
						shouldShowSubscribeButton: !(z && Q),
						subredditOrProfile: me
					}, je = Object(o.t)(ae, X), {
						source: we
					} = je, Ie = a.a.createElement(E.a, {
						className: Object(r.a)(L.a.classicPostStyles, B.a.postContainer, Object(A.a)(this.props), N ? B.a.mFirst : void 0, e),
						isOverlay: J,
						style: {
							...Object(A.d)(this.props),
							...Object(A.b)(this.props.flairStyleTemplate)
						},
						post: ae,
						onClick: ee,
						eventFactory: v
					}, a.a.createElement(k.a, {
						model: ae,
						handleVote: s,
						showBulkActionCheckbox: de,
						isCheckboxSelected: U,
						isCountAnimShadowTestEnabled: G,
						isVoteCountAnimation: q,
						toggleCheckbox: ue,
						flairStyleTemplate: ge,
						redditStyle: re,
						subreddit: me,
						postId: oe
					}), a.a.createElement(x.a, {
						"data-click-id": "background",
						flairStyleTemplate: ge
					}, a.a.createElement(u.a, {
						className: B.a.eventMeta,
						post: ae
					}), a.a.createElement("div", {
						className: B.a.mainBody
					}, a.a.createElement("div", {
						className: ye ? B.a.expandoContainer : B.a.thumbnailContainer
					}, !ye && a.a.createElement(I.a, {
						className: B.a.classicThumbnail,
						crosspost: fe && ae,
						isMeta: ae.isMeta,
						post: fe || ae,
						redditStyle: re,
						templatePlaceholderImage: ge && ge.postPlaceholderImage,
						removeLink: Se
					}), a.a.createElement(p.a, {
						crosspost: fe,
						className: B.a.rightExpando,
						isExpanded: !!n,
						post: ae,
						useMediaIcons: !1
					})), a.a.createElement("div", {
						className: Object(r.a)(B.a.content, {
							[B.a.showBulkActionCheckbox]: de
						}),
						"data-click-id": "body"
					}, a.a.createElement(y.c, {
						className: ne ? B.a.titleWithPoll : void 0,
						format: M,
						poll: ne,
						post: ae,
						redditStyle: re,
						size: y.b.Medium,
						titleColor: ge && ge.postTitleColor,
						isOverlay: J
					}, ae.source && !fe && a.a.createElement(j.a, {
						href: ae.source.url,
						isSponsored: ae.isSponsored,
						postId: ae.id,
						source: ae.source
					}, Object(d.a)(ae))), a.a.createElement(_.a, H({
						key: "PostMeta"
					}, Oe)), $ && xe && Object(f.c)(ae) && a.a.createElement(g.a, {
						onIgnoreReports: te,
						reportable: ae
					}), he && we && we.url && a.a.createElement(l.a, {
						className: B.a.adLinkWrapper
					}, a.a.createElement(c.a, {
						post: ae,
						adLinkContent: je
					})), a.a.createElement("div", {
						className: B.a.flatlistContainer
					}, a.a.createElement(p.a, {
						className: B.a.leftExpando,
						crosspost: fe,
						isExpanded: !!n,
						post: ae,
						useMediaIcons: !1
					}), a.a.createElement(m.a, {
						className: B.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: ge,
						model: ae,
						onVoteClick: s
					}), a.a.createElement(b.a, {
						className: B.a.flatlistSeparator
					}), a.a.createElement(b.c, {
						className: B.a.flatlist,
						currentUser: t,
						hasModFlairPerms: Ee,
						hasModPostPerms: xe,
						hasModFullPerms: ve,
						hostPostData: D,
						isCommentCountAnimation: V,
						isCountAnimShadowTestEnabled: G,
						isOverlay: !!J,
						modModeEnabled: $,
						onIgnoreReports: te,
						onOpenReportsDropdown: se,
						post: ae,
						showEditPost: ke,
						showEditFlair: le,
						tooltipType: J ? S.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(C.b)({
							editPost: !_e,
							save: !_e,
							hide: !_e,
							report: !_e
						})
					})), a.a.createElement(h.d, null))), Z(ae, ie, n, be, K)));
					return a.a.createElement(O.b, null, Ie)
				}
			}
			const Z = (e, t, s, n, o) => s ? e.crosspostRootId ? a.a.createElement("div", {
					className: B.a.crosspostMediaWrapper
				}, V(e, t, n, o)) : V(e, t, n, o) : null,
				V = (e, t, s, n) => a.a.createElement(v.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: n,
					isListing: !0,
					isNotCardView: !0,
					post: e,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					shouldShowGalleryTileOption: s,
					showCentered: !0,
					showFull: !0
				}),
				q = Object(i.a)(W),
				G = Object(M.b)(Object(T.a)(q));
			t.default = Object(N.a)(q)
		},
		"./src/reddit/components/CommunityAwardList/AwardRow/index.m.less": function(e, t, s) {
			e.exports = {
				row: "_1SJYzo3UAyKEOF7dfuB9mj",
				awardName: "KMxVBNnYo_dcBwZGB9Y7a",
				unfilledAward: "_3s20dmDQOAFnj9VBvMb_K9",
				awardDetail: "_2NA5kHSdCz8PTAq-oiC2lE",
				awardExpiresDetail: "_23IvuOow0OJsmKnkmU_FEX",
				headerRow: "_1NbiD8qa7KncC2IlK9RoSb",
				awardIconImage: "_3sB_KQUJdYFc6cPgCjizd4",
				deleteIcon: "_1Aox5T2z7StzW_M0WfnDTe",
				rightAlign: "_3MpqTEDv3tS3-u-1uNAt6Y",
				createButton: "_3pXwHsShRJ0s12b9e-_gCX",
				emptyIcon: "yy-p6aZDVdPVBPBYMhbEy",
				emptyDetails: "LUZArpcpRdOTEPUDrjKVR",
				awardLoadingContainer: "_2WNYZIJMYIXJIS_IJIIiTe"
			}
		},
		"./src/reddit/components/CommunityAwardList/AwardSettings/index.m.less": function(e, t, s) {
			e.exports = {
				awardToggleContainer: "_2E_k43b0N9nhGQKfSvT_c_",
				emptyToggleContainer: "_1lQVQi-D8yElpWeJLbrix0",
				emptyToggleContainerLabel: "_2Porr9EjtYqQt8OhMaCU3h",
				optionalAwardInfo: "ZViyY3IDk7c6MplUKuCKa",
				awardToggleItem: "XwXRf6eWep27jKV1kkNDN",
				awardToggleLabelItem: "_2d9jt8apy5IwNRPdrC_RtG",
				awardIconWrapper: "_3DGDvlViP1uosxrUobijCu",
				awardIcon: "_10ar4v6qlEgLvqEhxk_wyP",
				awardInfoWrapper: "_2LxUe9vOie60H44Rkl5YYd",
				awardToggleItemDisabled: "_1touzuLFgoSGqEcDiLDD00",
				awardTitle: "_1fG-NkjOvo6khgB4qJmizu",
				awardDescription: "_2VABiA5W4pgqWyCK_oV4Hg"
			}
		},
		"./src/reddit/components/CommunityAwardList/index.m.less": function(e, t, s) {
			e.exports = {
				contentContainer: "_27C02100EX-RnLoDyL_PYT",
				gildIcon: "_3f4YbBVVbX4YXols-8AmgC",
				infoIcon: "_1HPeb_FxEOzicQ4BuIVonK",
				pageInfo: "_2bEhfADeSjJE-8zKoxjbGy",
				awardToDelete: "dzAx082Iu3F9M7xS-PL80",
				awardToDeleteIcon: "_11ikfBu3qqa0paYAJLQINO"
			}
		},
		"./src/reddit/components/CommunityAwardList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/gold/communityAwards/index.ts"),
				l = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/constants/gold.ts"),
				u = s("./src/reddit/helpers/awards/isEligibleForCommunityAwards.ts"),
				p = s("./src/reddit/helpers/awards/isEligibleForGlobalAwards.ts"),
				b = s("./src/reddit/helpers/correlationIdTracker.ts"),
				h = s("./src/reddit/helpers/trackers/communityAwards.ts"),
				g = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/higherOrderComponents/makeAsync.tsx")),
				f = s("./src/lib/loadWithRetries/index.ts");
			var x = Object(g.a)({
					getComponent: () => Object(f.a)(() => Promise.all([s.e("AwardCreationModal").then(s.bind(null, "./src/reddit/components/AwardCreationModal/index.tsx"))])).then(e => e[0].default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				E = s("./src/reddit/models/Gold/Award.ts"),
				v = s("./src/reddit/components/ConfirmModal/index.tsx"),
				_ = s("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				C = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				k = s("./src/reddit/components/TrackingHelper/index.tsx"),
				y = s("./src/reddit/icons/fonts/index.tsx"),
				S = s("./src/reddit/selectors/activeModalId.ts"),
				O = s("./node_modules/lodash/times.js"),
				j = s.n(O),
				w = s("./src/lib/classNames/index.ts"),
				I = s("./src/reddit/controls/Button/index.tsx"),
				N = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				T = s("./src/reddit/helpers/awards/isEligibleForTemporaryAwards.ts"),
				M = s("./src/reddit/layout/row/RightAlign/index.tsx"),
				P = s("./src/reddit/components/CommunityAwardList/AwardRow/index.m.less"),
				R = s.n(P);
			const {
				fbt: F
			} = s("./node_modules/fbt/lib/FbtPublic.js"), A = () => o.a.createElement("div", {
				className: R.a.row
			}, o.a.createElement("div", {
				className: R.a.awardName
			}, o.a.createElement("div", {
				className: R.a.emptyDetails
			})), o.a.createElement("div", {
				className: R.a.awardDetail
			}, o.a.createElement("div", {
				className: R.a.emptyIcon
			})), o.a.createElement("div", {
				className: R.a.awardDetail
			}, o.a.createElement("div", {
				className: R.a.emptyDetails
			})), o.a.createElement("div", {
				className: R.a.awardDetail
			}, o.a.createElement("div", {
				className: R.a.emptyDetails
			}))), D = e => o.a.createElement("div", {
				className: Object(w.a)(e.className, R.a.awardLoadingContainer)
			}, j()(10, e => o.a.createElement(A, {
				key: e
			}))), L = ({
				subredditId: e
			}) => o.a.createElement("div", {
				className: R.a.headerRow
			}, o.a.createElement("div", {
				className: R.a.awardName
			}, F._("Name", null, {
				hk: "2rgEdc"
			})), o.a.createElement("div", {
				className: R.a.awardDetail
			}, F._("Icon", null, {
				hk: "zWzOj"
			})), o.a.createElement("div", {
				className: R.a.awardDetail
			}, F._("Coins", null, {
				hk: "2uhz31"
			})), o.a.createElement("div", {
				className: R.a.awardDetail
			}, F._("Type", null, {
				hk: "1rYgKO"
			})), Object(T.a)(e) && o.a.createElement("div", {
				className: R.a.awardDetail
			}, F._("Starts", null, {
				hk: "HW61W"
			})), Object(T.a)(e) && o.a.createElement("div", {
				className: R.a.awardDetail
			}, F._("Expires", null, {
				hk: "3hS2VX"
			}))), U = ({
				date: e
			}) => o.a.createElement("div", {
				className: R.a.awardExpiresDetail
			}, e && e.toLocaleString()), B = e => o.a.createElement("div", {
				className: R.a.row
			}, o.a.createElement("div", {
				className: Object(w.a)(R.a.awardName, R.a.unfilledAward)
			}, F._({
				"*": "Create up to {quantity} more {coin-price} Coin Awards",
				_1: "Create up to {quantity} more {coin-price} Coin Award"
			}, [F._param("quantity", e.quantity), F._param("coin-price", e.coinPrice), F._plural(e.quantity)], {
				hk: "4nSQI7"
			})), o.a.createElement(M.a, {
				className: R.a.rightAlign
			}, o.a.createElement(I.i, {
				className: R.a.createButton,
				onClick: e.onCreate
			}, F._("Create", null, {
				hk: "3aEi77"
			})))), H = e => o.a.createElement("div", {
				className: R.a.row
			}, o.a.createElement("div", {
				className: Object(w.a)(R.a.awardName, R.a.unfilledAward)
			}, F._("Create a Moderator-Only Award", null, {
				hk: "3aMmTo"
			})), o.a.createElement(M.a, {
				className: R.a.rightAlign
			}, o.a.createElement(I.i, {
				className: R.a.createButton,
				onClick: e.onCreate
			}, F._("Create", null, {
				hk: "3aEi77"
			})))), W = e => o.a.createElement("div", {
				className: R.a.row
			}, o.a.createElement("div", {
				className: Object(w.a)(R.a.awardName, R.a.unfilledAward)
			}, F._("Create an Award", null, {
				hk: "1zGxjw"
			})), o.a.createElement(M.a, {
				className: R.a.rightAlign
			}, o.a.createElement(I.i, {
				className: R.a.createButton,
				onClick: e.onCreate
			}, F._("Create", null, {
				hk: "3aEi77"
			}))));
			class Z extends o.a.Component {
				constructor() {
					super(...arguments), this.onDelete = e => {
						e.preventDefault(), this.props.onDelete(this.props.award.id)
					}
				}
				render() {
					const {
						award: e,
						canDelete: t,
						iconUrl: s,
						subredditId: n
					} = this.props, a = Object(T.a)(n), r = e.startsAt ? new Date(e.startsAt) : void 0, i = e.endsAt ? new Date(e.endsAt) : void 0;
					return o.a.createElement("div", {
						className: R.a.row
					}, o.a.createElement("div", {
						className: R.a.awardName
					}, e.name), o.a.createElement("div", {
						className: R.a.awardDetail
					}, o.a.createElement("img", {
						className: R.a.awardIconImage,
						src: s,
						title: e.name
					})), o.a.createElement("div", {
						className: R.a.awardDetail
					}, e.coinPrice || 0), o.a.createElement("div", {
						className: R.a.awardDetail
					}, e.awardType === E.f.Moderator ? F._("Mod only", null, {
						hk: "UxkP0"
					}) : F._("All", null, {
						hk: "2J55F0"
					})), a && [o.a.createElement(U, {
						key: "startDate",
						date: r
					}), o.a.createElement(U, {
						key: "endDate",
						date: i
					})], o.a.createElement(M.a, {
						className: R.a.rightAlign
					}, t && o.a.createElement("a", {
						href: ".",
						onClick: this.onDelete
					}, o.a.createElement(N.b, {
						className: R.a.deleteIcon
					}))))
				}
			}
			var V = Z,
				q = s("./src/reddit/components/Settings/shared/Widgets.tsx"),
				G = s("./src/reddit/hooks/useTracking.ts"),
				z = s("./src/reddit/selectors/communityAwards.ts"),
				K = s("./src/reddit/selectors/gold/awardIcon.ts"),
				Q = s("./src/reddit/components/CommunityAwardList/AwardSettings/index.m.less"),
				J = s.n(Q);
			const {
				fbt: X
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Y = ({
				award: e,
				iconUrl: t
			}) => o.a.createElement("div", {
				className: J.a.awardToggleLabelItem
			}, o.a.createElement("div", {
				className: J.a.awardIconWrapper
			}, o.a.createElement("img", {
				className: J.a.awardIcon,
				src: t
			})), o.a.createElement("div", {
				className: J.a.awardInfoWrapper
			}, o.a.createElement("div", {
				className: J.a.awardTitle
			}, e.name), o.a.createElement("div", {
				className: J.a.awardDescription
			}, e.description)));
			var $ = ({
					subredditOrProfile: e,
					subredditOrProfileId: t,
					moderatorPermissions: s
				}) => {
					const n = Object(r.d)(),
						a = Object(G.a)(),
						i = Object(r.e)(e => Object(z.f)(e, {
							subredditOrProfileId: t
						})),
						l = Object(r.e)(e => Object(z.d)(e, {
							subredditOrProfileId: t
						})),
						c = Object(r.e)(e => Object(K.b)(e, {
							awards: i,
							minSize: 64
						}));
					if (!i.length) return o.a.createElement("div", {
						className: J.a.emptyToggleContainer
					}, o.a.createElement("div", {
						className: J.a.emptyToggleContainerLabel
					}, l ? X._("Pending", null, {
						hk: "1heuFt"
					}) : X._("No Awards currently available for configuration. Please try again later.", null, {
						hk: "3BsFsT"
					})));
					const m = s && s.all;
					return o.a.createElement("div", {
						className: J.a.awardToggleContainer
					}, o.a.createElement("div", {
						className: J.a.optionalAwardInfo
					}, X._("Toggle whether these awards are available in your community. If disabled, they cannot be given on any posts or comments.", null, {
						hk: "4e1OPL"
					})), o.a.createElement("div", null, i.map(s => o.a.createElement(q.o, {
						key: s.id,
						on: s.isEnabled,
						forceOn: s.isEnabled,
						className: Object(w.a)(J.a.awardToggleItem, {
							[J.a.awardToggleItemDisabled]: !s.isEnabled
						}),
						label: o.a.createElement(Y, {
							award: s,
							iconUrl: c[s.id]
						}),
						onClick: () => (s => {
							const o = s.isEnabled ? d.g : d.h,
								r = s.isEnabled ? h.h : h.i;
							a(r(s, t)), m && n(o(e, s))
						})(s),
						disabled: !m
					}))))
				},
				ee = s("./src/reddit/components/CommunityAwardList/index.m.less"),
				te = s.n(ee);
			const se = Object(i.c)({
					awardIcons: (e, {
						subredditOrProfileId: t
					}) => {
						const s = Object(z.e)(e, {
							subredditOrProfileId: t
						});
						return Object(K.b)(e, {
							awards: s,
							minSize: 32
						})
					},
					awards: z.e,
					awardsPending: z.d,
					communityAwardsDisabled: z.b,
					isAddAwardModalOpen: e => Object(S.a)(e) === m.a,
					isConfirmModalOpen: e => Object(S.a)(e) === m.b
				}),
				ne = Object(r.b)(se, (e, {
					subredditOrProfileId: t
				}) => ({
					deleteAward: s => e(Object(d.j)(t, s)),
					toggleAddAwardModal: () => e(Object(l.i)(m.a)),
					toggleConfirmModal: () => e(Object(l.i)(m.b)),
					toggleTooltip: t => e(Object(c.h)({
						tooltipId: t
					}))
				})),
				ae = {
					awardId: null,
					selectedCoinPrice: void 0,
					selectedModOnly: void 0
				};
			class oe extends o.a.Component {
				constructor(e) {
					super(e), this.openAddAwardModal = (e, t) => {
						Object(b.d)(b.a.AwardCreationFlow), this.props.sendEvent(Object(h.e)()), this.setState({
							selectedCoinPrice: e,
							selectedModOnly: t
						}, this.props.toggleAddAwardModal)
					}, this.openDeleteAwardModal = e => {
						Object(b.d)(b.a.AwardDeletionFlow), this.props.toggleConfirmModal(), this.setState({
							awardId: e
						})
					}, this.confirmDeleteAward = () => {
						const {
							awardId: e
						} = this.state, {
							awards: t
						} = this.props;
						if (this.props.toggleConfirmModal(), e) {
							const s = t.filter(t => t.id === e)[0];
							s && this.props.sendEvent(Object(h.g)(s)), this.props.deleteAward(e), Object(b.b)(b.a.AwardDeletionFlow)
						}
					}, this.renderAwardSlotRow = e => {
						const {
							awardIcons: t,
							awards: s,
							moderatorPermissions: n,
							subredditOrProfileId: a
						} = this.props, r = !(!n || !n.all);
						if (!e.filled && s.length < m.d) return o.a.createElement(B, {
							coinPrice: e.price,
							key: e.price,
							onCreate: () => this.openAddAwardModal(e.price),
							quantity: e.quantity
						});
						if (!e.filled) return null;
						const {
							award: i
						} = e, d = t[i.id];
						return o.a.createElement(V, {
							key: i.id,
							award: i,
							canDelete: r,
							onDelete: this.openDeleteAwardModal,
							iconUrl: d,
							subredditId: a
						})
					}, this.renderAwardToDelete = () => {
						const {
							awards: e
						} = this.props, {
							awardId: t
						} = this.state;
						if (!t) return null;
						const s = e.filter(e => e.id === t)[0];
						return s ? o.a.createElement("div", {
							className: te.a.awardToDelete
						}, o.a.createElement("span", null, n.fbt._("Remove:", null, {
							hk: "1Y4r4o"
						})), o.a.createElement("img", {
							src: s.icon.url,
							className: te.a.awardToDeleteIcon
						}), o.a.createElement("span", null, s.name)) : null
					}, this.renderInfo = () => o.a.createElement("div", {
						className: te.a.pageInfo
					}, o.a.createElement(y.a, {
						name: "info",
						className: te.a.infoIcon
					}), o.a.createElement("p", null, n.fbt._("Community Awards are unique to each community, and members can give them to each other. Moderators can design and name the Awards however they want.", null, {
						hk: "1mzX5Y"
					})), o.a.createElement("p", null, n.fbt._("A portion of Coins from Community Award purchases will be deposited to the community’s Coin balance. Moderators can use Coins from that balance to reward members with Mod Awards. The Coin balance is shown only to moderators in the community’s sidebar", null, {
						hk: "2TVMDb"
					}))), this.state = ae
				}
				renderAwardsList() {
					const {
						awards: e,
						awardsPending: t,
						moderatorPermissions: s,
						subredditOrProfileId: n
					} = this.props;
					if (t) return o.a.createElement(D, null);
					const a = Object(p.a)(n),
						r = s && s.all,
						i = this.getAwardSlots().filter(e => r && !a || e.filled),
						d = e.filter(e => e.awardType === E.f.Moderator),
						l = e.length < m.d && d.length < m.e && r && !a;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(L, {
						subredditId: n
					}), a && o.a.createElement(W, {
						onCreate: () => this.openAddAwardModal()
					}), i.map(this.renderAwardSlotRow), l && o.a.createElement(H, {
						onCreate: () => this.openAddAwardModal(void 0, !0)
					}), this.renderInfo())
				}
				getAwardSlots() {
					const {
						awards: e
					} = this.props, t = Object(E.j)(e), s = e => e.filled && e.award.awardType === E.f.Moderator;
					return t.sort((e, t) => s(e) && !s(t) ? 1 : s(t) && !s(e) ? -1 : e.price !== t.price ? e.price - t.price : e.filled && !t.filled ? -1 : (t.filled && e.filled, 1))
				}
				render() {
					const {
						communityAwardsDisabled: e,
						isAddAwardModalOpen: t,
						isConfirmModalOpen: s,
						moderatorPermissions: a,
						subredditOrProfile: r,
						subredditOrProfileId: i,
						toggleAddAwardModal: d,
						toggleConfirmModal: l
					} = this.props, {
						awardId: c,
						selectedCoinPrice: m,
						selectedModOnly: p
					} = this.state, h = r.isNSFW || e;
					return o.a.createElement(o.a.Fragment, null, Object(u.a)(r) && o.a.createElement(C.a, {
						className: te.a.contentContainer
					}, o.a.createElement(C.b, null, n.fbt._("Community Awards", null, {
						hk: "lraSi"
					})), h ? this.renderBlacklistedView() : this.renderAwardsList()), o.a.createElement(C.a, {
						className: te.a.contentContainer
					}, o.a.createElement(C.b, null, n.fbt._("Enable/Disable Awards", null, {
						hk: "1IRmfG"
					})), o.a.createElement($, {
						subredditOrProfile: r,
						subredditOrProfileId: i,
						moderatorPermissions: a
					})), t && o.a.createElement(x, {
						defaultCoinPrice: m,
						defaultModOnly: p,
						subredditId: i,
						toggleModal: () => {
							d(), Object(b.b)(b.a.AwardCreationFlow)
						}
					}), s && c && o.a.createElement(v.a, {
						acceptText: n.fbt._("Delete", null, {
							hk: "4bgtZx"
						}),
						cancelText: n.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}),
						headerText: n.fbt._("Delete Award", null, {
							hk: "7q2D7"
						}),
						message: n.fbt._("Deleting an Award will remove the option for members of your community to give the Award. Existing Awards will remain on the posts and comments that have received them.", null, {
							hk: "3tX5sQ"
						}),
						onAccept: this.confirmDeleteAward,
						onCancel: l,
						onClose: l,
						onOverlayClick: l,
						withOverlay: !0
					}, this.renderAwardToDelete()))
				}
				renderBlacklistedView() {
					return o.a.createElement(_.c, {
						text: n.fbt._("Community Awards have been disabled for this community.", null, {
							hk: "2g21s6"
						})
					}, o.a.createElement(y.a, {
						name: "award",
						className: te.a.gildIcon
					}))
				}
			}
			t.a = ne(Object(k.c)(oe))
		},
		"./src/reddit/components/CommunitySettings/Notifications/Loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-CommunitySettings-Notifications",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-CommunitySettings-Notifications").then(s.bind(null, "./src/reddit/components/CommunitySettings/Notifications/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CommunitySettings/Notifications/index.tsx"
				}
			});
			t.a = a
		},
		"./src/reddit/components/CommunitySettings/components.m.less": function(e, t, s) {
			e.exports = {
				InputField: "_3V4RO9mtZyZCWAu4P0ST4A",
				inputField: "_3V4RO9mtZyZCWAu4P0ST4A",
				FormContainer: "_37sNfY6fNJVPqyQXOHlg3K",
				formContainer: "_37sNfY6fNJVPqyQXOHlg3K"
			}
		},
		"./src/reddit/components/CommunitySettings/components.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/controls/FormFields/index.tsx"),
				o = s("./src/reddit/components/CommunitySettings/components.m.less"),
				r = s.n(o);
			const i = n.a.wrapped(a.b, "InputField", r.a),
				d = n.a.div("FormContainer", r.a)
		},
		"./src/reddit/components/CommunitySettings/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "e", (function() {
				return r
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "k", (function() {
				return l
			})), s.d(t, "l", (function() {
				return c
			})), s.d(t, "n", (function() {
				return m
			})), s.d(t, "m", (function() {
				return u
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "j", (function() {
				return h
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "i", (function() {
				return f
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			const a = 500,
				o = 100,
				r = 5e3,
				i = 0,
				d = 1440,
				l = 36600,
				c = 1e9,
				m = {
					disabled: n.fbt._("Disabled", null, {
						hk: "1KaunG"
					}).toString(),
					modonly: n.fbt._("Mods only", null, {
						hk: "2yA6R8"
					}).toString(),
					anyone: n.fbt._("Anyone", null, {
						hk: "4gPsEy"
					}).toString()
				},
				u = [n.fbt._("Wiki is disabled for all users except mods", null, {
					hk: "2loUiE"
				}).toString(), n.fbt._("Only mods, approved wiki contributors, or those on a page's edit list may edit", null, {
					hk: "1WUeVN"
				}).toString(), n.fbt._("Anyone who can submit to the community may edit", null, {
					hk: "3hxotT"
				}).toString()],
				p = {
					any: n.fbt._("Any", null, {
						hk: "hVUT8"
					}),
					link: n.fbt._("Links only", null, {
						hk: "3upkyk"
					}),
					self: n.fbt._("Text posts only", null, {
						hk: "1VZn8Y"
					})
				},
				b = [n.fbt._("Any post type is allowed", null, {
					hk: "1rOxtJ"
				}), n.fbt._("Only links to external sites are allowed", null, {
					hk: "OJQdj"
				}), n.fbt._("Only text posts are allowed", null, {
					hk: "3q3v14"
				})],
				h = {
					low: n.fbt._("Low", null, {
						hk: "4k3iTe"
					}),
					high: n.fbt._("High (default)", null, {
						hk: "2GOHsH"
					}),
					all: n.fbt._("All", null, {
						hk: "gl6gc"
					})
				},
				g = {
					low: n.fbt._("Low (default)", null, {
						hk: "2tqJd7"
					}),
					high: n.fbt._("High", null, {
						hk: "ABfkc"
					}),
					all: n.fbt._("All", null, {
						hk: "3bPDOM"
					})
				},
				f = {
					nullValue: n.fbt._("none (recommended)", null, {
						hk: "2FMwQH"
					}),
					confidence: n.fbt._("best", null, {
						hk: "13cLYH"
					}),
					old: n.fbt._("old", null, {
						hk: "3V0QN8"
					}),
					top: n.fbt._("top", null, {
						hk: "40R5FY"
					}),
					qa: n.fbt._("q&a", null, {
						hk: "3cm6YL"
					}),
					live: n.fbt._("live (beta)", null, {
						hk: "2EVYAd"
					}),
					controversial: n.fbt._("controversial", null, {
						hk: "1uFV5F"
					}),
					new: n.fbt._("new", null, {
						hk: "39TZi6"
					})
				}
		},
		"./src/reddit/components/CommunitySettings/index.m.less": function(e, t, s) {
			e.exports = {
				communityTopicsHelpLink: "_2Tzl9XrmQzUn94gYHRUYMI",
				welcomeMessageHelpLink: "_3-XV8EhlxRlIzoFKUI6gmQ",
				fullWidthTextContainer: "_2SnK_8NMPSqmFfF-es2GGa",
				subtextContainer: "_2sWG233wmE9wNycTEyRHRN",
				sectionSubtext: "_2gZA-d4bPf-v-QStyl39CP",
				subtextLink: "_3m7YXm3a55mNltI6wwKkal",
				numCommunityTopicsSelected: "Ty_datAAaSbn2GX5-1O58",
				welcomeMessageEnabled: "_21a0DjKnRl3i1ItjJ8cSyf",
				geoForm: "_1QCMnCbDgm4T-QmBwOFkQ7",
				geoText: "lhgqy5yEx-4vqJhuaRIW_",
				geoInput: "_20j3hiEorqFwMLxftPVQG1",
				contentTag: "_26M_DkGPAeiqHaMshbczhg",
				contentTagColumn: "_2lbeaHzGFIYy6MK6YfLqrd",
				ratingAudience: "_3HR2r8RW7cFhNSKPiAT6VO",
				ratingDescription: "_3Wy4OBl1ksNXzpoeV4dvli",
				ratingReason: "_254fRg3JX4apEtqVAAXfbm",
				promptText: "RqDOw50ARYjx_TliwJR0l",
				surveyButton: "_7aZGYzh7hj5VihV4LcNzP",
				previewButton: "_2OmdANJm2jP7a_6G2-JCqg",
				warning: "_3QMvrP_WL3Jp-P0vsV4NUS"
			}
		},
		"./src/reddit/components/CommunitySettings/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/isEqual.js"),
				a = s.n(n),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/actions/pages/shared.ts"),
				m = s("./src/reddit/actions/subredditSettings.ts"),
				u = s("./src/reddit/actions/subredditWelcomeMessage.ts"),
				p = s("./src/reddit/actions/tags/index.ts"),
				b = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/helpers/trackers/communitySettings.ts"),
				x = s("./src/reddit/helpers/trackers/communityTopics.ts"),
				E = s("./src/reddit/models/Gold/Powerups/index.ts"),
				v = s("./src/reddit/models/Tags/index.ts"),
				_ = s("./src/reddit/selectors/chatPost.ts"),
				C = s("./src/reddit/selectors/experiments/subredditWelcomeMessage.ts"),
				k = s("./src/reddit/selectors/gold/powerups/index.ts"),
				y = s("./src/reddit/selectors/gold/powerups/benefitSettings.ts"),
				S = s("./src/reddit/selectors/streamingModSettings.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				j = s("./src/reddit/selectors/subredditSettings.ts"),
				w = s("./src/reddit/selectors/tags.ts"),
				I = s("./src/reddit/selectors/user.ts"),
				N = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/config.ts")),
				T = s("./node_modules/fbt/lib/FbtPublic.js"),
				M = s("./src/reddit/components/CommunityTopics/index.tsx"),
				P = s("./src/reddit/components/CommunityTopics/NumTopicsSelected.tsx"),
				R = s("./src/reddit/components/CommunityTopics/PrimaryTopic/index.tsx"),
				F = s("./src/reddit/components/CommunityTopics/SuggestedTopics/index.tsx"),
				A = s("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				D = s("./src/reddit/components/Settings/shared/Widgets.tsx"),
				L = s("./src/reddit/controls/Link/index.tsx"),
				U = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				B = s("./src/reddit/controls/RadioInput/index.tsx"),
				H = s("./src/reddit/models/Flair/index.ts"),
				W = s("./src/reddit/models/SubredditRestrictions/index.ts"),
				Z = s("./src/reddit/pages/SubredditCreation/index.tsx"),
				V = s("./src/reddit/components/CommunitySettings/components.ts"),
				q = s("./src/reddit/components/CommunitySettings/helpers.ts"),
				G = s("./src/lib/classNames/index.ts"),
				z = s("./src/reddit/actions/toaster.ts"),
				K = s("./src/reddit/components/GeoForm/GeoForm.tsx"),
				Q = s("./src/reddit/components/ModHub/ModHubNav/NavItem.tsx"),
				J = s("./src/reddit/endpoints/geotagging/setSubredditGeoPlace.ts"),
				X = s("./src/reddit/helpers/localStorage/index.ts"),
				Y = s("./src/reddit/hooks/useGqlContext.ts"),
				$ = s("./src/reddit/models/Toast/index.ts"),
				ee = s("./src/reddit/components/CommunitySettings/index.m.less"),
				te = s.n(ee);

			function se(e) {
				var t;
				const {
					initialPlace: s,
					subredditId: n,
					update: a
				} = e, d = Object(Y.a)(), l = Object(i.d)(), [c, m] = Object(o.useState)(s), [u, p] = Object(o.useState)(!1), [b, h] = Object(o.useState)(!0);
				return Object(o.useEffect)(() => {
					h(Object(X.D)("location")), Object(X.Cb)("location")
				}, []), r.a.createElement(r.a.Fragment, null, r.a.createElement(A.a, null, T.fbt._("Community Location", null, {
					hk: "3aowzb"
				})), r.a.createElement(D.k, {
					label: r.a.createElement(r.a.Fragment, null, T.fbt._("Get discovered by local redditors", null, {
						hk: "1qjcaD"
					}), !b && r.a.createElement(Q.a, null)),
					textContainerClassName: Object(G.a)(te.a.fullWidthTextContainer, te.a.geoText),
					subtext: T.fbt._("Add a location to your community and get discovered by redditors near you.", null, {
						hk: "SZnsE"
					})
				}, r.a.createElement(K.a, {
					initialValue: null !== (t = null == s ? void 0 : s.name) && void 0 !== t ? t : "",
					initialPlace: c,
					onPlace: e => a(e, "place"),
					onSubmit: async function({
						place: e,
						sessionId: t
					}) {
						if ((null == e ? void 0 : e.id) === (null == c ? void 0 : c.id)) return;
						p(!0);
						const s = await Object(J.a)(d(), {
							subredditId: n,
							placeId: e.id,
							source: e.source,
							sessionId: t
						});
						if (p(!1), !s.ok) return l(Object(z.f)({
							kind: $.b.Error,
							text: T.fbt._("Something went wrong", null, {
								hk: "2PnKbu"
							}),
							duration: 5e3
						}));
						m(e), l(Object(z.f)({
							kind: $.b.SuccessCommunity,
							text: T.fbt._("Successfully updated community location", null, {
								hk: "3aGk2e"
							}),
							duration: 5e3
						}))
					},
					disabled: u,
					className: te.a.geoForm,
					inputClassName: te.a.geoInput
				})))
			}
			const ne = {
				[W.e.Post]: {
					short: () => T.fbt._("Post only (default)", null, {
						hk: "2XJHW4"
					}),
					long: () => T.fbt._("Only approved users can post. Anyone can comment.", null, {
						hk: "3frgit"
					})
				},
				[W.e.Comment]: {
					short: () => T.fbt._("Comment only", null, {
						hk: "2OhQB5"
					}),
					long: () => T.fbt._("Only approved users can comment. Anyone can post.", null, {
						hk: "2F24kr"
					})
				},
				[W.e.PostAndComment]: {
					short: () => T.fbt._("Post & Comment", null, {
						hk: "1lWCl2"
					}),
					long: () => T.fbt._("Only approved users can post and comment.", null, {
						hk: "4GkEs6"
					})
				}
			};

			function ae(e) {
				const {
					isEmployee: t,
					restrictions: s,
					settings: n,
					subredditId: a,
					subredditName: o,
					testWelcomeMessage: i,
					update: d,
					geoPlace: c,
					onShowWelcomeMessagePreview: m,
					onFocusWelcomeMessageInput: u
				} = e, {
					disableContributorRequests: p,
					over18: h,
					publicDescription: g,
					restrictCommenting: E,
					restrictPosting: v,
					subredditType: _,
					title: C,
					welcomeMessageEnabled: k,
					welcomeMessageText: y
				} = n, S = [], O = [];
				for (const r of Object.keys(ne)) O.push(ne[r].short()), S.push(ne[r].long());
				return r.a.createElement(b.a, null, r.a.createElement(V.a, null, r.a.createElement(b.b, null, T.fbt._("Community settings", null, {
					hk: "3mvH70"
				})), r.a.createElement(A.a, null, T.fbt._("Community Profile", null, {
					hk: "91aEK"
				})), r.a.createElement(D.e, {
					label: T.fbt._("Community name", null, {
						hk: "260EEx"
					}),
					maxChars: q.d,
					onChange: e => d(e.currentTarget.value, "title"),
					textContainerClassName: te.a.fullWidthTextContainer,
					value: C || ""
				}), r.a.createElement(D.k, {
					label: T.fbt._("Community topics", null, {
						hk: "49aoGo"
					}),
					textContainerClassName: te.a.fullWidthTextContainer,
					subtext: r.a.createElement("span", {
						className: te.a.subtextContainer
					}, T.fbt._("This will help Reddit recommend your community to relevant users and other discovery experiences.", null, {
						hk: "3WYTu5"
					}), " ", r.a.createElement(U.a, {
						className: te.a.communityTopicsHelpLink,
						href: "https://mods.reddithelp.com/hc/en-us/articles/360024518712",
						rel: "noopener noreferrer",
						target: "_blank"
					}, T.fbt._("Learn more.", null, {
						hk: "1y3kXY"
					})), " ", " ", r.a.createElement("span", {
						className: te.a.numCommunityTopicsSelected
					}, r.a.createElement(P.a, {
						subredditId: a
					}))),
					direction: "column"
				}, r.a.createElement(R.c, {
					subredditId: a,
					onPrimarySelect: e.onPrimarySelect
				}), (!!e.selectedPrimaryTag || e.hasSecondaryTags) && r.a.createElement(M.b, {
					context: x.a.communitySettings,
					subredditId: a
				}), r.a.createElement(F.a, {
					context: x.a.communitySettings,
					subredditId: a
				})), r.a.createElement(D.g, {
					label: T.fbt._("Community description", null, {
						hk: "1XBKXj"
					}),
					onChange: e => d(e.currentTarget.value, "publicDescription", !1),
					maxChars: q.c,
					rows: 2,
					subtext: T.fbt._("This is how new members come to understand your community.", null, {
						hk: "llaA4"
					}),
					value: g || ""
				}), r.a.createElement(D.o, {
					className: k ? te.a.welcomeMessageEnabled : void 0,
					on: k,
					onClick: () => d(!k, "welcomeMessageEnabled"),
					label: T.fbt._("Send welcome message to new members", null, {
						hk: "4euZSE"
					}),
					subtext: r.a.createElement("span", null, T.fbt._("Create a custom message that new members will see as a prompt after joining and/or as a direct message to their inbox. Keep your message under 500 characters if you’d like it to display as a prompt right after joining. This field supports markdown.", null, {
						hk: "Qne1T"
					}), " ", r.a.createElement(U.a, {
						className: te.a.welcomeMessageHelpLink,
						href: "https://mods.reddithelp.com/hc/en-us/articles/360002551551-Welcoming-new-members",
						rel: "noopener noreferrer",
						target: "_blank"
					}, T.fbt._("Learn more.", null, {
						hk: "NkFhF"
					})))
				}), k && r.a.createElement(r.a.Fragment, null, r.a.createElement(D.g, {
					actionLink: r.a.createElement(r.a.Fragment, null, y && y.length <= 500 && r.a.createElement(L.a, {
						className: te.a.previewButton,
						onClick: m
					}, T.fbt._("Save and show me a preview", null, {
						hk: "1HXlZ"
					})), r.a.createElement(L.a, {
						className: te.a.previewButton,
						onClick: () => i(o, y)
					}, T.fbt._("Send me a test message", null, {
						hk: "4iE1go"
					}))),
					hideCountdown: (y || "").length > 500,
					label: null,
					onChange: e => {
						d(e.currentTarget.value, "welcomeMessageText")
					},
					onFocus: u,
					placeholder: T.fbt._("Welcome to our community! We’re here to discuss our passion for all things related to grated cheese. (Heads up—we’re a text-only community, so sorry no image posts.) Get started by introducing yourself in our post for newbies, then check out our rules to learn more and dive in.", null, {
						hk: "AnOYs"
					}),
					maxChars: q.e,
					rows: 5,
					value: y || "",
					warning: (y || "").length > 500 ? r.a.createElement("div", {
						className: te.a.warning
					}, T.fbt._({
						"*": "{characters} Characters",
						_1: "1 Character"
					}, [T.fbt._plural((y || "").length, "characters")], {
						hk: "21H5Ye"
					}), " ", T.fbt._("- Messages over 500 characters will only be sent as a direct message", null, {
						hk: "3QcgDF"
					})) : void 0
				})), r.a.createElement(se, {
					subredditId: a,
					update: d,
					initialPlace: c
				}), r.a.createElement(A.a, null, T.fbt._("community type", null, {
					hk: "3T2OkK"
				})), r.a.createElement(D.k, {
					label: T.fbt._("Type of Community", null, {
						hk: "2PReGw"
					}),
					direction: "column"
				}, r.a.createElement(B.a, {
					value: _,
					name: "type",
					onChange: e => d(e, "subredditType")
				}, Object(Z.radioOptions)(t, s, void 0))), r.a.createElement(D.o, {
					on: h,
					onClick: () => d(!h, "over18"),
					label: r.a.createElement("span", null, T.fbt._("18+ year old community", null, {
						hk: "3VzYZp"
					}), r.a.createElement(D.l, {
						flair: H.f.Nsfw
					})),
					subtext: T.fbt._("When your community is marked as an 18+ community, users must be flagged as 18+ in their user settings", null, {
						hk: "2h28m0"
					})
				}), "restricted" === _ && r.a.createElement(r.a.Fragment, null, r.a.createElement(A.a, null, T.fbt._("Restricted Community Settings", null, {
					hk: "1HiDiC"
				})), r.a.createElement(D.d, {
					label: T.fbt._("Approved users have the ability to", null, {
						hk: "2pduhW"
					}),
					items: O,
					selected: (() => {
						let e = W.e.Post;
						return E && v ? e = W.e.PostAndComment : E && (e = W.e.Comment), ne[e].short()
					})(),
					onClick: e => {
						e === ne[W.e.PostAndComment].short() ? (d(!0, W.f.Comment), d(!0, W.f.Post)) : e === ne[W.e.Comment].short() ? (d(!1, W.f.Post), d(!0, W.f.Comment)) : e === ne[W.e.Post].short() && (d(!0, W.f.Post), d(!1, W.f.Comment))
					},
					id: "restrictionOptions",
					descriptions: S
				}), r.a.createElement(D.o, {
					on: !p,
					onClick: () => d(!p, "disableContributorRequests"),
					label: T.fbt._("Accepting new requests to post", null, {
						hk: "bTpYB"
					})
				})), "private" === _ && r.a.createElement(r.a.Fragment, null, r.a.createElement(A.a, null, T.fbt._("Private Community Settings", null, {
					hk: "2JjNXE"
				})), r.a.createElement(D.o, {
					on: !p,
					onClick: () => d(!p, "disableContributorRequests"),
					label: T.fbt._("Accepting requests to join", null, {
						hk: "1l1acS"
					})
				})), r.a.createElement(A.a, null, T.fbt._("Advanced Settings", null, {
					hk: "1e5Esr"
				})), r.a.createElement(D.f, {
					label: T.fbt._("Settings for old site", null, {
						hk: "4wmYj3"
					}),
					subtext: T.fbt._("To change settings that influence the old site, you must go to the old settings page", null, {
						hk: "gYPuP"
					}),
					link: `${N.a.oldRedditUrl}/r/${o}/about/edit`,
					onClick: () => e.sendEvent(Object(f.b)(l.ac.Posts)),
					openInNewTab: !0,
					last: !0
				})))
			}
			var oe = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				re = s("./src/reddit/components/ModHub/StyledComponents/index.m.less"),
				ie = s.n(re),
				de = s("./src/reddit/components/ContentSurvey/RatingCard.tsx"),
				le = s("./src/reddit/components/ContentSurvey/SurveyModal.tsx"),
				ce = s("./src/reddit/helpers/trackers/contentTag.ts"),
				me = s("./src/reddit/hooks/useTracking.ts");
			const {
				fbt: ue
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function pe(e) {
				const {
					subreddit: t
				} = e, s = Object(i.e)(e => e.subreddits.survey[t.id]), n = Object(me.a)();
				Object(o.useEffect)(() => n(Object(ce.k)()), [n]);
				const [a, d] = Object(o.useState)(!1);

				function l() {
					n(Object(ce.o)()), d(!0)
				}
				const c = !(null == s ? void 0 : s.response) && (null == s ? void 0 : s.isEligible),
					m = (null == s ? void 0 : s.response) && (null == s ? void 0 : s.isEligible);
				return r.a.createElement("div", {
					className: Object(G.a)(ie.a.ContentContainer, te.a.contentTag)
				}, r.a.createElement("h2", null, ue._("Content Tag", null, {
					hk: "1AhgrD"
				})), r.a.createElement("p", null, ue._("Your content tag is based on a moderator survey about community posts and discussions. {=Learn More}", [ue._param("=Learn More", r.a.createElement("a", {
					href: "https://www.reddithelp.com/hc/en-us/articles/360048185132",
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: () => n(Object(ce.d)())
				}, ue._("Learn More", null, {
					hk: "2gJ4PL"
				})))], {
					hk: "2xoqeD"
				})), r.a.createElement("div", {
					className: te.a.contentTagColumn
				}, r.a.createElement(de.a, {
					subredditId: t.id,
					ratingResponse: null == s ? void 0 : s.response
				}, (null == s ? void 0 : s.response) ? r.a.createElement(r.a.Fragment, null, r.a.createElement("p", {
					className: te.a.ratingAudience
				}, ue._("Tagged as {ratingName} due to:", [ue._param("ratingName", s.response.rating.name)], {
					hk: "3VVnt5"
				})), r.a.createElement("ul", null, s.response.ratingReasons.map(e => r.a.createElement("li", {
					key: e.id,
					className: te.a.ratingReason
				}, e.contentRatingReasonText)))) : r.a.createElement(r.a.Fragment, null, r.a.createElement("p", {
					className: te.a.ratingAudience
				}, ue._("Set up your tag", null, {
					hk: "2Fb5bg"
				})), r.a.createElement("p", {
					className: te.a.ratingDescription
				}, ue._("Take a quick survey to help people know what to expect when they visit this community", null, {
					hk: "VvmPr"
				})))), c && r.a.createElement(g.q, {
					redditStyle: !0,
					className: te.a.surveyButton,
					onClick: l
				}, ue._("Start Survey", null, {
					hk: "myDPK"
				})), m && r.a.createElement(r.a.Fragment, null, r.a.createElement("p", {
					className: te.a.promptText
				}, ue._("Does this content tag look wrong to you?", null, {
					hk: "72VuM"
				})), r.a.createElement(g.q, {
					priority: g.b.Secondary,
					redditStyle: !0,
					className: te.a.surveyButton,
					onClick: l
				}, ue._("Take the Survey", null, {
					hk: "W30wE"
				})), r.a.createElement(oe.a, {
					to: "/r/modsupport/submit"
				}, r.a.createElement(g.q, {
					priority: g.b.Tertiary,
					redditStyle: !0,
					className: te.a.surveyButton,
					onClick: () => n(Object(ce.f)())
				}, "Message r/modsupport")))), a && s && r.a.createElement(le.a, {
					withOverlay: !0,
					subredditId: t.id,
					survey: s,
					onClose: () => d(!1)
				}))
			}
			var be = s("./src/reddit/components/CommunitySettings/Notifications/Loader.ts");
			var he = e => {
				const {
					settings: t,
					subredditName: s,
					update: n,
					isChatPostsCreationEnabled: a,
					powerupsBenefitSettings: o,
					subredditHasPowerups: i
				} = e, {
					allowChatPostCreation: d,
					allowGalleries: c,
					allowImages: m,
					allowPolls: u,
					allowPostCrossposts: p,
					collapseDeletedComments: h,
					commentScoreHideMins: g,
					contentOptions: x,
					spamComments: v,
					spamLinks: _,
					spamSelfposts: C,
					spoilersEnabled: k,
					suggestedCommentSort: y
				} = t, S = (null == o ? void 0 : o[E.a.CommentsWithGifs]) || !1, O = null === y ? "nullValue" : y;
				return r.a.createElement(b.a, null, r.a.createElement(V.a, null, r.a.createElement(b.b, null, T.fbt._("Post and Comment settings", null, {
					hk: "14OI7p"
				})), r.a.createElement(A.a, null, T.fbt._("Posts", null, {
					hk: "2i2G4r"
				})), r.a.createElement(D.d, {
					label: T.fbt._("Post type options", null, {
						hk: "M9AdT"
					}),
					items: Object.keys(q.h),
					displayItems: Object.values(q.h),
					displayTitle: q.h[x],
					selected: x,
					onClick: e => n(e, "contentOptions"),
					id: "contentOptions",
					descriptions: q.g
				}), r.a.createElement(D.o, {
					on: p,
					onClick: () => n(!p, "allowPostCrossposts"),
					label: T.fbt._("Allow crossposting of posts.", null, {
						hk: "19EiBT"
					})
				}), a && r.a.createElement(D.o, {
					on: d,
					onClick: () => n(!d, "allowChatPostCreation"),
					label: T.fbt._("Allow chat posts creation by users.", null, {
						hk: "4zwoUf"
					})
				}), r.a.createElement(D.o, {
					on: k,
					onClick: () => n(!k, "spoilersEnabled"),
					label: r.a.createElement("span", null, T.fbt._("Enable spoiler tag", null, {
						hk: "2CtBpB"
					}), r.a.createElement(D.l, {
						flair: H.f.Spoiler
					})),
					subtext: T.fbt._("Media on posts with the spoiler tag are blurred", null, {
						hk: "4rVOs6"
					})
				}), r.a.createElement(D.o, {
					on: m,
					onClick: () => {
						n(!m, "allowImages"), n(!m, "allowGalleries")
					},
					label: T.fbt._("Allow image uploads and links to image hosting sites", null, {
						hk: "20ETVO"
					})
				}), m && r.a.createElement(D.o, {
					on: c,
					onClick: () => n(!c, "allowGalleries"),
					label: T.fbt._("Allow multiple images per post", null, {
						hk: "Pcjq5"
					})
				}), r.a.createElement(D.o, {
					on: u,
					onClick: () => n(!u, "allowPolls"),
					label: T.fbt._("Allow polls", null, {
						hk: "15LXRO"
					})
				}), i && r.a.createElement(D.o, {
					on: S,
					onClick: () => n(!S, E.a.CommentsWithGifs),
					label: T.fbt._("Allow GIFs in comments", null, {
						hk: "2nJiHt"
					}),
					subtext: T.fbt._("It may take a few minutes to update", null, {
						hk: "aU7tk"
					})
				}), r.a.createElement(D.k, {
					label: T.fbt._("Spam filter strength", null, {
						hk: "4C4qar"
					}),
					subtext: T.fbt._("'HIGH' is the standard filter, 'LOW' disables most filtering, 'ALL' will filter every post initially and they will need to be approved manually to be visible", null, {
						hk: "mdxeP"
					})
				}), r.a.createElement(D.d, {
					label: T.fbt._("Posts", null, {
						hk: "1SdpTj"
					}),
					items: Object.keys(q.j),
					displayItems: Object.values(q.j),
					displayTitle: q.j[C],
					id: "spamSelfposts",
					selected: C,
					onClick: e => n(e, "spamSelfposts"),
					indent: !0
				}), r.a.createElement(D.d, {
					label: T.fbt._("Links", null, {
						hk: "Ia7TU"
					}),
					items: Object.keys(q.j),
					displayItems: Object.values(q.j),
					displayTitle: q.j[_],
					id: "spamLinks",
					selected: _,
					onClick: e => n(e, "spamLinks"),
					indent: !0
				}), r.a.createElement(D.d, {
					label: T.fbt._("Comments", null, {
						hk: "1X5Fv2"
					}),
					items: Object.keys(q.b),
					displayItems: Object.values(q.b),
					displayTitle: q.b[v],
					selected: v,
					onClick: e => n(e, "spamComments"),
					indent: !0,
					id: "spamComments"
				}), r.a.createElement(A.a, null, T.fbt._("Comments", null, {
					hk: "4sAqsA"
				})), r.a.createElement(D.d, {
					label: T.fbt._("Suggested sort", null, {
						hk: "4Af3Lr"
					}),
					subtext: T.fbt._("All comment feeds in community will default to this sort setting", null, {
						hk: "4grj1W"
					}),
					items: Object.keys(q.i),
					displayItems: Object.values(q.i),
					displayTitle: q.i[O],
					selected: O,
					onClick: e => n("nullValue" === e ? null : e, "suggestedCommentSort"),
					id: "suggestedCommentSort"
				}), r.a.createElement(D.o, {
					on: h,
					onClick: () => n(!h, "collapseDeletedComments"),
					label: T.fbt._("Collapse deleted and removed comments", null, {
						hk: "Iw8kU"
					})
				}), r.a.createElement(D.k, {
					label: T.fbt._("Minutes to hide comment scores", null, {
						hk: "1DJhj0"
					}),
					direction: "column"
				}, r.a.createElement(V.b, {
					onChange: e => n(e.currentTarget.value, "commentScoreHideMins"),
					isInvalid: !(g >= q.f && g <= q.a),
					min: q.f,
					max: q.a,
					type: "number",
					value: g
				})), r.a.createElement(A.a, null, T.fbt._("Advanced Settings", null, {
					hk: "53xlS"
				})), r.a.createElement(D.f, {
					label: T.fbt._("Settings for old site", null, {
						hk: "2jzUi8"
					}),
					subtext: T.fbt._("To change settings that influence the old site, you must go to the old settings page", null, {
						hk: "4DHBV2"
					}),
					link: `${N.a.oldRedditUrl}/r/${s}/about/edit`,
					onClick: () => e.sendEvent(Object(f.b)(l.ac.Posts)),
					openInNewTab: !0,
					last: !0
				})))
			};

			function ge(e) {
				const {
					isChatPostsCreationEnabled: t,
					isBroadcastingEnabled: s,
					settings: n,
					subredditName: a,
					update: o
				} = e, {
					allowDiscovery: i,
					contentVisible: d,
					crowdControlMode: c,
					crowdControlLevel: m,
					crowdControlChatLevel: u,
					excludeBannedModqueue: p,
					toxicityThresholdChatLevel: h
				} = n, g = {
					0: {
						text: "Off",
						color: "#787C7E",
						subText: "Use Crowd Control to automatically collapse comments from users you’re not sure about."
					},
					1: {
						text: "Lenient",
						color: "#46D160",
						subText: "Comments from users who have negative karma in your community are automatically collapsed."
					},
					2: {
						text: "Moderate",
						color: "#FFB000",
						subText: "Comments from new users and users with negative karma in your community are automatically collapsed."
					},
					3: {
						text: "Strict",
						color: "#EA0027",
						subText: "Comments from users who haven’t joined your community, new users, and users with negative karma in your community are automatically collapsed."
					}
				};
				return r.a.createElement(b.a, null, r.a.createElement(V.a, null, r.a.createElement(b.b, null, T.fbt._("Safety & privacy settings", null, {
					hk: "34ghQV"
				})), r.a.createElement(A.a, null, T.fbt._("Safety", null, {
					hk: "2QSter"
				})), r.a.createElement(D.o, {
					on: p,
					onClick: () => o(!p, "excludeBannedModqueue"),
					label: T.fbt._("Exclude posts by site-wide banned users", null, {
						hk: "Kmfy0"
					}),
					subtext: T.fbt._("Posts are excluded from modqueue/unmoderated", null, {
						hk: "2P2pfc"
					})
				}), r.a.createElement(D.o, {
					on: c,
					onClick: () => o(!c, "crowdControlMode"),
					label: T.fbt._("Turn on crowd control mode", null, {
						hk: "2qY8D5"
					}),
					subtext: T.fbt._("When crowd control is enabled, comments from users who aren't yet fully trusted in your community (including new users) will display as collapsed by default", null, {
						hk: "13Z3pC"
					})
				}), r.a.createElement(D.i, {
					ticks: g,
					min: 0,
					max: Object.keys(g).length - 1,
					step: 1,
					value: m,
					onChange: e => o(e.target.value, "crowdControlLevel"),
					label: T.fbt._("Adjust Crowd Control", null, {
						hk: "4oJUSP"
					}),
					subtext: T.fbt._("{subText}", [T.fbt._param("subText", g[m].subText)], {
						hk: "3ZFhAV"
					})
				}), (t || s) && r.a.createElement(r.a.Fragment, null, r.a.createElement(D.i, {
					ticks: g,
					min: 0,
					max: Object.keys(g).length - 1,
					step: 1,
					value: u,
					onChange: e => o(e.target.value, "crowdControlChatLevel"),
					label: T.fbt._("Adjust Crowd Control for Chat Posts", null, {
						hk: "vTy7k"
					}),
					subtext: T.fbt._("{subText}", [T.fbt._param("subText", g[u].subText)], {
						hk: "12hf9Y"
					})
				}), r.a.createElement(D.o, {
					on: !!Number(h),
					onClick: () => {
						o(Number(h) ? "0" : "1", "toxicityThresholdChatLevel")
					},
					label: T.fbt._("Collapse Toxic Messages in Chat Post", null, {
						hk: "1Pk3G5"
					}),
					subtext: T.fbt._("Comments that our model scores as toxic will be automatically collapsed.", null, {
						hk: "Rohtu"
					})
				})), r.a.createElement(A.a, null, T.fbt._("Discover", null, {
					hk: "1I53SY"
				})), r.a.createElement(D.m, {
					className: te.a.sectionSubtext
				}, T.fbt._("Show your community to the general Reddit population or just to people who have similar interests, by adjusting how people can find it. Not sure what’s best for you? {=Learn More.}", [T.fbt._param("=Learn More.", r.a.createElement("a", {
					className: te.a.subtextLink,
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://mods.reddithelp.com/hc/en-us/sections/360000685771-General-Common-Questions"
				}, T.fbt._("Learn More.", null, {
					hk: "3oTITT"
				})))], {
					hk: "4nomNH"
				})), r.a.createElement(D.o, {
					on: d,
					onClick: () => o(!d, "contentVisible"),
					label: T.fbt._("Show up in high-traffic feeds", null, {
						hk: "3l7KBc"
					}),
					subtext: T.fbt._("Allow your community to be in r/all, r/popular, and trending lists where it can be seen by the general Reddit population.", null, {
						hk: "iH0lY"
					})
				}), r.a.createElement(D.o, {
					on: i,
					onClick: () => o(!i, "allowDiscovery"),
					label: T.fbt._("Get recommended to individual redditors", null, {
						hk: "4wmaiH"
					}),
					subtext: T.fbt._("Let Reddit recommend your community to people who have similar interests.", null, {
						hk: "487MMM"
					})
				}), r.a.createElement(A.a, null, T.fbt._("Advanced Settings", null, {
					hk: "3TL9Or"
				})), r.a.createElement(D.f, {
					link: `${N.a.oldRedditUrl}/r/${a}/about/edit`,
					onClick: () => e.sendEvent(Object(f.b)(l.ac.Safety)),
					openInNewTab: !0,
					last: !0,
					label: T.fbt._("Settings for old site", null, {
						hk: "1WHvCJ"
					}),
					subtext: T.fbt._("To change settings that influence the old site, you must go to the old settings page", null, {
						hk: "2wPmwa"
					})
				})))
			}

			function fe(e) {
				const {
					settings: t,
					subredditName: s,
					update: n
				} = e, {
					wikiEditAge: a,
					wikiEditKarma: o,
					wikimode: i
				} = t;
				return r.a.createElement(b.a, null, r.a.createElement(V.a, null, r.a.createElement(b.b, null, T.fbt._("Wiki settings", null, {
					hk: "1gmluS"
				})), r.a.createElement(A.a, null, T.fbt._("Community wiki pages", null, {
					hk: "1LwxaS"
				})), r.a.createElement(D.d, {
					label: T.fbt._("Wikis can be edited by", null, {
						hk: "3brAqG"
					}),
					displayItems: Object.values(q.n),
					displayTitle: q.n[i],
					items: Object.keys(q.n),
					selected: i,
					onClick: e => n(e, "wikimode"),
					id: "wikimode",
					descriptions: q.m
				}), r.a.createElement(D.k, {
					label: T.fbt._("Karma required to edit and create wiki pages", null, {
						hk: "3OgR7v"
					}),
					direction: "column"
				}, r.a.createElement(V.b, {
					onChange: e => n(e.currentTarget.value, "wikiEditKarma"),
					isInvalid: !(o >= q.f && o <= q.l),
					min: q.f,
					max: q.l,
					type: "number",
					value: o
				})), r.a.createElement(D.k, {
					label: T.fbt._("Age of Reddit account required to edit and create wiki pages", null, {
						hk: "3UE6cD"
					}),
					direction: "column"
				}, r.a.createElement(V.b, {
					onChange: e => n(e.currentTarget.value, "wikiEditAge"),
					isInvalid: !(a >= q.f && a <= q.k),
					min: q.f,
					max: q.k,
					type: "number",
					value: a
				})), r.a.createElement(A.a, null, T.fbt._("Advanced Settings", null, {
					hk: "4drMhK"
				})), r.a.createElement(D.f, {
					label: T.fbt._("Settings for old site", null, {
						hk: "2YU3sQ"
					}),
					subtext: T.fbt._("To change settings that influence the old site, you must go to the old settings page", null, {
						hk: "1ihkVe"
					}),
					link: `${N.a.oldRedditUrl}/r/${s}/about/edit`,
					onClick: () => e.sendEvent(Object(f.b)(l.ac.Wikis)),
					openInNewTab: !0,
					last: !0
				})))
			}
			const {
				fbt: xe
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ee = {
				isModeratedSrContentFoundationPnEnabled: !1,
				isModeratedSrEngagementPnEnabled: !1,
				isModeratedSrMilestonePnEnabled: !1
			}, ve = Object(d.c)({
				allowChatPostCreation: (e, t) => Object(_.b)(e, t.subredditId),
				isBroadcastingEnabled: (e, t) => Object(S.c)(e, t.subredditId),
				isChatPostsCreationEnabled: (e, t) => Object(_.c)(e, t.subredditId),
				isEmployee: I.G,
				notificationSettings: j.b,
				restrictions: O.m,
				settings: (e, t) => Object(O.U)(e, t.subredditId),
				subreddit: O.S,
				selectedPrimaryTag: w.w,
				hasSecondaryTags: w.p,
				geoPlace: (e, t) => e.tags.models.geoPlaces[t.subredditId],
				isWelcomeMessageExperimentEnabledSelector: C.a,
				subredditHasPowerups: (e, t) => Object(k.f)(e, {
					subredditId: t.subredditId
				}),
				powerupsBenefitSettings: (e, t) => Object(y.a)(e, {
					subredditId: t.subredditId
				})
			}), _e = Object(i.b)(ve, (e, {
				subredditId: t
			}) => ({
				onViewPageEvent: () => e(Object(c.a)()),
				testWelcomeMessage: (t, s) => e(Object(m.i)(t, s)),
				save: (t, s, n, a) => e(Object(m.j)(a, t, s, void 0, n)),
				saveCommunityTopics: t => e(Object(p.i)(t, x.a.communitySettings)),
				onPrimarySelect: s => e(Object(p.j)({
					primaryTagId: s,
					subredditId: t
				})),
				savePrimaryTopic: s => {
					s && e(Object(p.s)(t, {
						tagId: s.id,
						state: v.d.TAGGED
					}, !1))
				},
				openPreviewWelcomeMessageModal: () => e(Object(u.c)(t)),
				updateSubredditWelcomeMessage: (t, s, n) => e(Object(u.e)(t, s, n))
			}));
			class Ce extends r.a.Component {
				constructor(e) {
					super(e), this.saveSettings = () => {
						const {
							welcomeMessageEnabled: e,
							welcomeMessageText: t,
							...s
						} = this.state.changed;
						void 0 !== e || t ? (this.fireSaveWelcomeMessageEvents(), this.props.save(s, this.state.changedNotificationsSettings, this.state.changedPowerupsBenefitSettings, this.props.subredditId), this.props.updateSubredditWelcomeMessage(this.props.subredditId, e, t)) : this.props.save(this.state.changed, this.state.changedNotificationsSettings, this.state.changedPowerupsBenefitSettings, this.props.subredditId), this.props.saveCommunityTopics(this.props.subredditId), this.props.savePrimaryTopic(this.props.selectedPrimaryTag);
						for (const n in this.state.changed) {
							!("welcomeMessageEnabled" === n || "welcomeMessageText" === n) && this.props.sendEvent(Object(f.c)(n, this.state.changed[n], this.props.settings[n]))
						}
						this.setState({
							settings: this.state.settings,
							changed: {},
							changedNotificationsSettings: {}
						})
					}, this.update = (e, t, s = !0) => {
						if (s && !("welcomeMessageText" === t) && this.props.sendEvent(Object(f.e)(t, e, this.state.settings[t])), t === E.a.CommentsWithGifs) return this.setState(s => ({
							changedPowerupsBenefitSettings: {
								...s.changedPowerupsBenefitSettings,
								[t]: !!e
							},
							powerupsBenefitSettings: {
								...s.powerupsBenefitSettings,
								[t]: !!e
							}
						}));
						this.setState(s => ({
							changed: {
								...s.changed,
								[t]: e
							},
							settings: {
								...s.settings,
								[t]: e
							}
						}))
					}, this.updateNotificationSettings = (e, t) => {
						this.setState(s => ({
							changedNotificationsSettings: {
								...s.changedNotificationsSettings,
								[t]: e
							},
							notificationSettings: {
								...s.notificationSettings,
								[t]: e
							}
						}))
					}, this.fireSaveWelcomeMessageEvents = () => {
						const {
							welcomeMessageEnabled: e,
							welcomeMessageText: t
						} = this.state.changed;
						void 0 !== e && this.props.sendEvent(Object(f.f)("save", "welcome_message", e, this.props.settings.welcomeMessageEnabled)), t && this.props.sendEvent(Object(f.f)("save", "welcome_message", t, this.props.settings.welcomeMessageText))
					}, this.onShowWelcomeMessagePreview = async () => {
						const {
							welcomeMessageEnabled: e,
							welcomeMessageText: t
						} = this.state.changed;
						(void 0 !== e || t) && (await this.props.updateSubredditWelcomeMessage(this.props.subredditId, e, t), this.fireSaveWelcomeMessageEvents()), this.props.openPreviewWelcomeMessageModal(), this.props.sendEvent(Object(f.d)())
					}, this.onFocusWelcomeMessageInput = () => this.props.sendEvent(Object(f.f)("click", "welcome_message_edit")), this.renderSubpage = () => {
						const e = {
							...this.props,
							notificationSettings: this.state.notificationSettings,
							settings: this.state.settings,
							powerupsBenefitSettings: this.state.powerupsBenefitSettings,
							update: this.update,
							updateNotificationSettings: this.updateNotificationSettings,
							onShowWelcomeMessagePreview: this.onShowWelcomeMessagePreview,
							onFocusWelcomeMessageInput: this.onFocusWelcomeMessageInput
						};
						if (!this.state.settings) return null;
						switch (this.props.subpageName) {
							case l.ac.Safety:
								return r.a.createElement(ge, e);
							case l.ac.Notifications:
								return r.a.createElement(be.a, e);
							case l.ac.Posts:
								return r.a.createElement(he, e);
							case l.ac.Wikis:
								return r.a.createElement(fe, e);
							case l.ac.ContentTag:
								return r.a.createElement(pe, {
									subreddit: e.subreddit
								});
							default:
								return r.a.createElement(ae, e)
						}
					}, this.state = {
						settings: e.settings,
						changed: {},
						changedNotificationsSettings: {},
						notificationSettings: e.notificationSettings || Ee,
						powerupsBenefitSettings: e.powerupsBenefitSettings,
						changedPowerupsBenefitSettings: {}
					}
				}
				componentDidMount() {
					this.props.onViewPageEvent()
				}
				componentDidUpdate(e) {
					!this.props.settings || a()(e.settings, this.props.settings) || a()(this.state.settings, this.props.settings) || this.setState({
						settings: this.props.settings
					})
				}
				render() {
					return r.a.createElement(r.a.Fragment, null, this.props.subpageName !== l.ac.ContentTag && r.a.createElement(b.c, null, r.a.createElement(g.i, {
						onClick: this.saveSettings,
						"data-redditstyle": !0
					}, xe._("Save changes", null, {
						hk: "8mSp0"
					}))), this.renderSubpage())
				}
			}
			t.a = _e(Object(h.c)(Ce))
		},
		"./src/reddit/components/CommunityTopics/NumTopicsSelected.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/models/Tags/index.ts"),
				d = s("./src/reddit/selectors/tags.ts");
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), c = Object(r.c)({
				selectedOptions: (e, {
					subredditId: t
				}) => Object(d.v)(e, {
					subredditId: t
				})
			});
			t.a = Object(o.b)(c)(e => a.a.createElement(a.a.Fragment, null, e.selectedOptions.length, "/", i.a))
		},
		"./src/reddit/components/CommunityTopics/PrimaryTopic/index.m.less": function(e, t, s) {
			e.exports = {
				menuItemsWrapper: "_1OISxDncG3tn4CibwqeC4e",
				tooltip: "UNHdPZIwwyCehEV-NfEY7"
			}
		},
		"./src/reddit/components/CommunityTopics/PrimaryTopic/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return P
			})), s.d(t, "a", (function() {
				return R
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/tags/index.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/components/ContentTooltip/index.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/localStorage/index.ts"),
				b = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				h = s("./src/reddit/components/InlineSubredditEditing/index.m.less"),
				g = s.n(h);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class x extends o.a.Component {
				componentDidMount() {
					this.props.sendEvent(b.e), this.props.onViewTooltip()
				}
				render() {
					const {
						translatedTitle: e,
						translatedDesc: t,
						translatedButtonText: s
					} = this.props;
					return o.a.createElement("div", {
						className: g.a.tooltipContent,
						onClick: e => {
							e.preventDefault(), e.stopPropagation()
						}
					}, o.a.createElement("span", {
						className: g.a.topRow
					}, o.a.createElement("h3", {
						className: g.a.title
					}, e)), o.a.createElement("p", {
						className: g.a.tooltipBody
					}, t), o.a.createElement(u.i, {
						className: g.a.gotIt,
						onClick: this.props.onDismissTooltip
					}, s || f._("Got it", null, {
						hk: "4CoCjQ"
					})))
				}
			}
			var E = Object(r.b)(void 0, e => ({
				onDismissTooltip: () => {
					e(Object(l.i)()), Object(p.tb)()
				},
				onViewTooltip: () => {
					Object(p.Nb)()
				}
			}))(Object(m.c)(x));
			const v = "editable-primary-topic-idcard";
			var _ = s("./src/reddit/controls/DropdownSelector/index.tsx"),
				C = s("./src/reddit/models/Tags/index.ts"),
				k = s("./src/reddit/selectors/tags.ts"),
				y = s("./src/reddit/components/CommunityTopics/PrimaryTopic/index.m.less"),
				S = s.n(y);
			const O = ({
					hasPrimaryTag: e,
					hasSecondaryTags: t
				}) => {
					if (e) return null;
					let s = n.fbt._("Add Community Topics", null, {
							hk: "2wd4kg"
						}),
						a = n.fbt._("Tell us what topics are relevant to your community so we can surface it to the right users", null, {
							hk: "24NCiQ"
						});
					return t && (s = n.fbt._("Add a Primary Topic", null, {
						hk: "41x5Gv"
					}), a = n.fbt._("Oops we don’t have a primary topic yet. Add one so we can surface your community to the right users", null, {
						hk: "XayPA"
					})), o.a.createElement(c.a, {
						className: S.a.tooltip,
						tooltipId: v,
						defaultTooltipPosition: "left",
						tooltipSizeEstimate: {
							height: 150,
							width: 320
						}
					}, o.a.createElement(E, {
						translatedTitle: s,
						translatedDesc: a
					}))
				},
				j = {
					availablePrimaryTags: k.t
				},
				w = Object(i.c)({
					...j,
					selectedPrimaryTag: (e, {
						subredditId: t
					}) => t && Object(k.w)(e, {
						subredditId: t
					}) || null,
					hasSecondaryTags: (e, {
						subredditId: t
					}) => Object.keys(Object(k.s)(e, {
						itemId: t
					})).length > 0,
					isSaving: k.H
				}),
				I = Object(i.c)({
					...j,
					selectedPrimaryTag: (e, {
						subredditId: t
					}) => t && Object(k.B)(e, {
						subredditId: t
					}) || null,
					hasSecondaryTags: (e, {
						subredditId: t
					}) => Object.keys(Object(k.s)(e, {
						itemId: t
					})).length > 0,
					isSaving: k.H
				}),
				N = Object(i.c)({
					...j,
					selectedPrimaryTag: k.z,
					hasSecondaryTags: () => !1,
					isSaving: e => Object(k.H)(e)
				}),
				T = (e, {
					subredditId: t,
					onPrimarySelect: s
				}) => ({
					onPrimaryTopicSelected: n => {
						n.isSelected || !s ? n.isSelected || (e(Object(d.j)({
							primaryTagId: n.value,
							subredditId: t
						})), e(Object(d.s)(t, {
							tagId: n.value,
							state: C.d.TAGGED
						}))) : s(n.value)
					},
					onShowTooltip: () => {
						e(Object(l.f)({
							tooltipId: v
						}))
					}
				});
			class M extends o.a.Component {
				constructor(e) {
					super(e), this.state = {
						tooltipDismissed: !0
					}
				}
				componentDidMount() {
					const e = this.props.onShowTooltip;
					this.setState({
						tooltipDismissed: Object(p.s)()
					}, () => {
						this.isTooltipEnabled() && e && e()
					})
				}
				isTooltipEnabled() {
					const {
						shouldShowTooltip: e = !1,
						selectedPrimaryTag: t
					} = this.props;
					return !this.state.tooltipDismissed && !t && e
				}
				render() {
					const {
						availablePrimaryTags: e,
						className: t,
						hasSecondaryTags: s,
						isSaving: a,
						onPrimaryTopicSelected: r,
						selectedPrimaryTag: i
					} = this.props, d = i && i.text;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(_.b, {
						id: this.isTooltipEnabled() ? v : void 0,
						className: t,
						isTopicsStyle: !0,
						displayText: d || n.fbt._("Add a Primary Topic", null, {
							hk: "1HgVte"
						}),
						options: e.map(e => ({
							displayText: e.text,
							value: e.id,
							isSelected: !!i && i.id === e.id
						})),
						onSelect: r,
						menuItemsClassName: S.a.menuItemsWrapper,
						showSelectedCheckmark: !0,
						isSaving: a
					}), this.isTooltipEnabled() && o.a.createElement(O, {
						hasPrimaryTag: !!i,
						hasSecondaryTags: s
					}))
				}
			}
			const P = Object(r.b)(N, e => ({
					onPrimaryTopicSelected: t => {
						e(Object(d.d)({
							primaryTagId: t.value
						}))
					}
				}))(M),
				R = Object(r.b)(I, T)(M),
				F = Object(r.b)(w, T);
			t.c = F(M)
		},
		"./src/reddit/components/CommunityTopics/SuggestedTopics/index.m.less": function(e, t, s) {
			e.exports = {
				suggestedTopicsContainer: "_3qCTJNZ-iSCZa0wyVfs6my",
				relatedText: "_389N9jvZJu60U3E7vIF00n",
				closeIcon: "M40GQ3RaivlkCl8WQ-pXo",
				plusIcon: "_2OYvdU1reofcbKMJ0wvC_x",
				suggestedTopic: "_1RmiLhJpOUx_hgduPf3F5O",
				closeIconContainer: "sHLJV3zATRod0k1f_m71I",
				suggestedTopicText: "_1-rmQV4Wee08Dt-h2GyW-o"
			}
		},
		"./src/reddit/components/CommunityTopics/SuggestedTopics/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/tags/index.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				m = s("./src/reddit/icons/svgs/Close/index.tsx"),
				u = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				p = s("./src/reddit/components/CommunityTopics/SuggestedTopics/index.m.less"),
				b = s.n(p);
			var h = e => o.a.createElement("span", {
					className: b.a.suggestedTopic,
					onClick: () => e.onSuggestedTopicSelected(e.suggestedTopic)
				}, o.a.createElement(u.a, {
					className: b.a.plusIcon
				}), o.a.createElement("span", {
					className: b.a.suggestedTopicText
				}, e.suggestedTopic.displayText), o.a.createElement("span", {
					className: b.a.closeIconContainer,
					onClick: t => {
						t.preventDefault(), t.stopPropagation(), e.onSuggestedTopicDismissed(e.suggestedTopic)
					}
				}, o.a.createElement(m.a, {
					className: b.a.closeIcon
				}))),
				g = s("./src/reddit/helpers/trackers/communityTopics.ts"),
				f = s("./src/reddit/models/Tags/index.ts"),
				x = s("./src/reddit/models/Toast/index.ts"),
				E = s("./src/reddit/selectors/tags.ts");
			const v = Object(i.c)({
					suggestedOptions: (e, {
						subredditId: t
					}) => {
						const s = Object(E.C)(e, {
								itemId: t
							}),
							n = Object(E.v)(e, {
								subredditId: t
							}),
							a = Object(E.A)(e, {
								subredditId: t
							});
						return s.filter(e => !!e.id && a !== e.id && !n.find(t => !!t.id && t.id === e.id))
					}
				}),
				_ = Object(r.b)(v, (e, {
					subredditId: t,
					onOptionSelected: s,
					context: a
				}) => ({
					onSuggestedOptionDismissed: s => {
						e(Object(l.r)(t, [], [{
							subredditId: t,
							tagId: s.id,
							isRelevant: !1
						}], a, !0))
					},
					onSuggestedOptionSelected: o => {
						e((e, r) => {
							const i = r();
							Object(E.v)(i, {
								subredditId: t
							}).length >= f.a ? e(Object(c.f)({
								...Object(c.e)(n.fbt._("You can only add up to {max number of topics} community topics", [n.fbt._param("max number of topics", f.a.toString())], {
									hk: "1OySAh"
								}), x.b.Error),
								duration: c.a
							})) : (e(Object(l.n)({
								subredditId: t,
								option: o
							})), Object(g.c)(r(), t, o, {
								context: a
							}), s && s(o))
						})
					}
				}));
			t.a = _(e => e.suggestedOptions.length ? o.a.createElement("div", {
				className: Object(d.a)(b.a.suggestedTopicsContainer, e.className)
			}, e.children || o.a.createElement("span", {
				className: b.a.relatedText
			}, n.fbt._("Related:", null, {
				hk: "1qt7CO"
			})), e.suggestedOptions.map(t => o.a.createElement(h, {
				key: t.id,
				suggestedTopic: t,
				onSuggestedTopicSelected: e.onSuggestedOptionSelected,
				onSuggestedTopicDismissed: e.onSuggestedOptionDismissed
			}))) : null)
		},
		"./src/reddit/components/CommunityTopics/index.m.less": function(e, t, s) {
			e.exports = {
				communityTopicsContainer: "wsNyCIZw7veQPURlfXwXb"
			}
		},
		"./src/reddit/components/CommunityTopics/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/tags/index.ts"),
				l = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/components/MultiOptionSelect/index.tsx"),
				m = s("./src/reddit/helpers/trackers/communityTopics.ts"),
				u = s("./src/reddit/models/Tags/index.ts"),
				p = s("./src/reddit/models/Toast/index.ts"),
				b = s("./src/reddit/selectors/tags.ts"),
				h = s("./src/reddit/components/CommunityTopics/index.m.less"),
				g = s.n(h);
			const f = Object(i.c)({
				availableSubredditTags: (e, {
					subredditId: t
				}) => Object(b.d)(e, {
					subredditId: t
				}),
				subredditTags: (e, {
					subredditId: t
				}) => Object(b.s)(e, {
					itemId: t
				}),
				availableGlobalOptions: (e, {
					subredditId: t
				}) => Object(b.a)(e, {
					thingId: t
				}),
				selectedOptions: (e, {
					subredditId: t
				}) => Object(b.v)(e, {
					subredditId: t
				}),
				isLoading: e => Object(b.F)(e),
				currentInput: (e, {
					subredditId: t
				}) => Object(b.l)(e, {
					subredditId: t
				})
			});
			class x extends o.a.Component {
				constructor() {
					super(...arguments), this.onOptionsChanged = e => {
						const t = e.filter(e => e.selected),
							s = e.filter(e => !e.selected);
						this.onOptionsSelected(t), s.forEach(e => this.onOptionDeselected(e))
					}, this.onFocus = () => {
						this.props.onSearchBarFocused(), this.props.onFocus && this.props.onFocus()
					}
				}
				onOptionsSelected(e) {
					const t = u.a - this.props.selectedOptions.length,
						s = e.filter(e => !!e.displayText.trim()),
						n = s.slice(0, t);
					n.forEach(e => {
						if (!e.id) {
							const t = Object(b.c)(e.displayText, this.props.availableSubredditTags);
							t && (e = Object(u.f)(t, !0))
						}
						this.props.optionSelected({
							...e,
							displayText: e.displayText.trim()
						})
					}), n.length !== s.length && this.props.onMaxTopicsHit()
				}
				onOptionDeselected(e) {
					this.props.optionDeselected(e)
				}
				render() {
					return o.a.createElement("div", {
						className: g.a.communityTopicsContainer
					}, o.a.createElement(c.a, {
						readOnlyMode: this.props.readOnlyMode,
						addText: n.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						allowFreeTextEntry: !0,
						availableOptions: this.props.availableGlobalOptions,
						childClassNames: this.props.childClassNames,
						dropdownHeaderText: n.fbt._("Suggested topics", null, {
							hk: "1RASWg"
						}),
						input: this.props.currentInput,
						isError: this.props.selectedOptions.length > u.a,
						isLoading: this.props.isLoading,
						maxOptionLength: u.b,
						maxOptionsToDisplay: this.props.maxTopicsToDisplay,
						onSearchBarFocus: this.onFocus,
						onSearchBarBlur: this.props.onBlur,
						onInputChanged: e => {
							this.props.onInputChanged(e)
						},
						onOptionsChanged: this.onOptionsChanged,
						selectedOptions: this.props.selectedOptions,
						selectedOptionComponent: this.props.selectedOptionComponent,
						splitOnCommaPress: !0
					}, this.props.children))
				}
			}
			t.b = Object(r.b)(f, (e, {
				subredditId: t,
				context: s
			}) => ({
				optionSelected: n => {
					e(Object(d.n)({
						subredditId: t,
						option: n
					})), e((e, a) => {
						m.e(a(), t, n, {
							context: s
						})
					})
				},
				optionDeselected: n => {
					e(Object(d.m)({
						subredditId: t,
						option: n
					})), e((e, a) => {
						m.d(a(), t, n, {
							context: s
						})
					})
				},
				onInputChanged: s => e(Object(d.l)({
					subredditId: t,
					input: s
				})),
				onSearchBarFocused: () => e((e, n) => {
					m.b(n(), t, {
						context: s
					})
				}),
				onMaxTopicsHit: () => e((e, t) => {
					e(Object(l.f)({
						...Object(l.e)(n.fbt._({
							"*": "You can only add up to max {number} community topics",
							_1: "You can only add up to max 1 community topic"
						}, [n.fbt._plural(u.a, "number")], {
							hk: "s07I1"
						}), p.b.Error),
						duration: l.a
					}))
				})
			}))(x)
		},
		"./src/reddit/components/CompactPost/index.m.less": function(e, t, s) {
			e.exports = {
				hideAboveSmallTablet: "FX_aWE8xMirpzniJDh7I9",
				responsiveExpandoButton: "_3gazhzxd2iBGYb2k67_HTw",
				mHideAboveSmallTablets: "_2zV_ARVPrYN10xmbbb_4Lu",
				responsiveMeta: "_1xomvNxK4aHGoGa-YDw1Mc",
				verticalVotes: "WAapGmF_gr09J509Af-gC",
				commentsLink: "Nz0lkWnnj2V_4iBKE0WL7",
				hideBelowSmallTablet: "z_7pbLL4hZp6ikYkq0prE",
				horizontalVotes: "_37nbKm3ee5NGx6e-LXErLD",
				postTopMeta: "_1ghZRP5m5xDLh0up1rFt0e",
				mHideBelowSmallTablets: "_3x_hdVQw5uJh6xeAGoZock",
				adLinkWrapper: "_4Dt8djtbHlJ5uCZDX_SeV",
				content: "_1B7SUGHK0QDoHimxX2a9D0",
				leftRail: "_2r9FABr2qYEUDyZoenhn6N",
				bulkActionCheckbox: "_44ehKZ_pl1NGGaaTYouZR",
				subredditIcon: "_1kWbgdOrvSeXIZZRIw4uBS",
				topLine: "_2ZjElFi3ORaU3VPrwmdoCp",
				postBadges: "_126a2ACB41algqMEwA34TF",
				flatList: "_3jwri54NGT-SRatPIZYiMo",
				expandedContentWrapper: "_12wy0ZFFaS3a49145uXWXt",
				crosspostMediaWrapper: "_2fCIreZsKBNS3esgsKKksM",
				compactWrapper: "YA9IzN0YR-G5_oD5EUydl",
				compactPostRow: "WnMeTcero48dKo501T-19",
				leftRailWrapper: "_3YgWdffoKyCp7UaGAEQpoo",
				proposalMetaData: "_1_B8IWlNlt5jJVg4cKy7nL",
				isEvent: "_1csviRG5jI9xOrcsmpbfwt",
				chain: "_1el-fLKTUXg-19pIbGUHgk",
				modToolsFlatlist: "_20p7Nh6bZU7MOqYuB2uJcy",
				postContainer: "_2bHVWuR_l_wVivC3FKfLFf",
				leftBorderWrapper: "_3ZmFVbkR23TIZ-3nboLYXe"
			}
		},
		"./src/reddit/components/CompactPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "renderSubredditIcon", (function() {
				return Ne
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/ads/index.ts"),
				l = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/postLayout.ts"),
				u = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				p = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				b = s("./src/reddit/helpers/trackers/post.ts"),
				h = s("./src/reddit/models/Media/index.ts"),
				g = s("./src/reddit/models/User/index.ts"),
				f = s("./src/reddit/models/Vote/index.ts"),
				x = s("./src/reddit/actions/post.ts"),
				E = s("./src/reddit/actions/postFlair.ts"),
				v = s("./src/reddit/actions/tooltip.ts"),
				_ = s("./src/reddit/selectors/activeModalId.ts"),
				C = s("./src/reddit/selectors/moderatorPermissions.ts"),
				k = s("./src/reddit/selectors/postFlair.ts"),
				y = s("./src/reddit/selectors/posts.ts"),
				S = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				O = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				j = s("./src/reddit/components/AwardBadges/index.tsx"),
				w = s("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				I = s("./src/reddit/components/CommentsLink/index.tsx"),
				N = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				T = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				M = s("./src/reddit/components/ExpandoButton/index.tsx"),
				P = s("./src/reddit/components/Flatlist/index.tsx"),
				R = s("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				F = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				A = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				D = s("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
				L = s("./src/reddit/components/ModerationPrompts/Survey.tsx"),
				U = s("./src/reddit/components/ModModeReports/index.tsx"),
				B = s("./src/reddit/components/ModModeReports/helpers.ts"),
				H = s("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				W = s("./src/reddit/components/PopupPortal/index.tsx"),
				Z = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				V = s("./src/reddit/components/PostBadges/index.tsx"),
				q = s("./src/reddit/components/PostContainer/index.tsx"),
				G = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				z = s("./src/reddit/components/PostLeftRail/index.tsx"),
				K = s("./src/reddit/components/PostMedia/index.tsx"),
				Q = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				J = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				X = s("./src/reddit/components/PostTitle/index.tsx"),
				Y = s("./src/reddit/components/PostTopMeta/index.tsx"),
				$ = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				ee = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				te = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				se = s("./src/reddit/components/SubredditIcon/index.tsx"),
				ne = s("./src/reddit/components/VerticalVotes/index.tsx"),
				ae = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				oe = s("./src/reddit/contexts/PageLayer/index.tsx"),
				re = s("./src/reddit/contexts/Post/index.tsx"),
				ie = s("./src/reddit/controls/Checkbox/index.tsx"),
				de = s("./src/reddit/controls/MetaData/index.tsx"),
				le = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				ce = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				me = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				ue = s("./src/reddit/helpers/postEvent.ts"),
				pe = s("./src/reddit/hooks/useIsOverlay.ts"),
				be = s("./src/reddit/hooks/useTheme.ts"),
				he = s("./src/reddit/hooks/useUserContext.ts"),
				ge = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				fe = s("./src/reddit/icons/fonts/Report/index.tsx"),
				xe = s("./src/reddit/selectors/showPromotedCTA.ts"),
				Ee = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ve = s.n(Ee),
				_e = s("./src/reddit/components/CompactPost/index.m.less"),
				Ce = s.n(_e);

			function ke() {
				return (ke = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ye = ({
					isCompact: e,
					...t
				}) => a.a.createElement(M.a, ke({
					className: Object(l.a)(Ce.a.responsiveExpandoButton, {
						[Ce.a.mHideAboveSmallTablets]: !!e,
						[Ce.a.mHideBelowSmallTablets]: !e
					})
				}, t)),
				Se = () => Object(i.c)({
					activeModalId: _.a,
					crosspost: y.d,
					flairStyleTemplate: oe.S,
					isActive: y.j,
					isExpanded: y.l,
					showPromotedCTA: xe.a,
					layout: oe.O,
					moderatorPermissions: C.k,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						if (s) return e.polls.models[s]
					},
					showEditFlair: k.a
				}),
				Oe = (e, {
					postId: t
				}) => ({
					dispatchFlairChanged: ({
						post: t,
						previewFlair: s,
						selectedTemplateId: n
					}) => e(Object(E.h)({
						post: t,
						previewFlair: s,
						selectedTemplateId: n
					})),
					handleVote: s => {
						const n = s === f.a.upvoted ? Object(x.fb)(t) : Object(x.w)(t);
						e(n)
					},
					onIgnoreReports: () => e(Object(x.bb)(t)),
					onOpenReportsDropdown: t => e(Object(v.h)({
						tooltipId: t
					}))
				});
			class je extends a.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						activeModalId: e,
						className: t,
						currentProfileName: s,
						crosspost: n,
						currentUser: o,
						eventFactory: r,
						flairStyleTemplate: i,
						handleVote: c,
						imageGalleryCurrentItem: f,
						isCheckboxSelected: x = !1,
						isCommentsPage: E,
						isCommentPermalink: v,
						isExpanded: _,
						isGalleryTileLayoutDefault: C,
						isOverlay: k,
						isProfilePostListing: y,
						inSubredditOrProfile: M = !1,
						layout: K,
						moderatorPermissions: te,
						modModeEnabled: se,
						onClickPost: oe,
						onFlairChanged: re,
						onIgnoreReports: de,
						poll: pe,
						post: be,
						subredditOrProfile: he,
						userIsOp: xe,
						hideModTools: Ee,
						scrollerItemRef: _e,
						showBulkActionCheckbox: ke,
						showEditFlair: Se,
						toggleCheckbox: Oe,
						tooltipType: je,
						sendEvent: Ie,
						shouldShowGalleryTileOption: Ne,
						showPromotedCTA: Me
					} = this.props, Pe = !!be.media && be.media.type === h.o.RTJSON, Re = xe && Pe, Fe = Object(G.b)(be.id, k), Ae = Object(me.a)(te), De = Object(le.a)(te), Le = Object(ce.a)(te), Ue = `-mod-actions-menu-${be.id}`, Be = `voting-arrows-${be.id}`, He = !!o && Object(g.e)(o) === be.author, We = Object(B.c)(be), Ze = Object(R.a)("View--Reports", be.id, je), Ve = Object(B.a)(be), qe = !(k || E || v), Ge = be.media && be.media.type === h.o.LIVEVIDEO, {
						moderationPrompt: ze
					} = be, Ke = e => Ie(Object(b.h)(be.id, e)), Qe = Object(d.t)(be, f), {
						source: Je
					} = Qe, Xe = a.a.createElement(q.a, {
						className: Object(l.a)(ve.a.compactPostStyles, Ce.a.postContainer, Object(p.a)(this.props), t),
						isOverlay: k,
						style: {
							...Object(p.d)(this.props),
							...Object(p.b)(this.props.flairStyleTemplate)
						},
						post: be,
						onClick: oe,
						eventFactory: r
					}, a.a.createElement("div", {
						className: Ce.a.compactWrapper
					}, a.a.createElement("div", {
						className: Ce.a.leftRailWrapper
					}, a.a.createElement("div", {
						className: Ce.a.leftRail,
						style: {
							borderColor: Object(z.c)({
								isRemoved: !!be.bannedBy,
								isReported: Object(u.a)(be),
								isSponsored: be.isSponsored,
								theme: this.props.theme
							})
						}
					}, ke && a.a.createElement(ie.a, {
						className: Ce.a.bulkActionCheckbox,
						isCheckboxSelected: x,
						toggleCheckbox: Oe
					}), a.a.createElement(ne.a, {
						className: Ce.a.verticalVotes,
						compact: !0,
						flairStyleTemplate: i,
						model: be,
						onVoteClick: c
					}), a.a.createElement(N.a, {
						className: Ce.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: i,
						model: be,
						onVoteClick: c,
						upvoteTooltipId: Be
					}), ze && a.a.createElement(W.b, {
						rightOf: Be
					}, "survey" === ze ? a.a.createElement(L.a, {
						post: be,
						subredditName: he.name,
						isOverlay: !!k
					}) : a.a.createElement(D.a, {
						post: be,
						subredditName: he.name,
						isOverlay: !!k
					})))), a.a.createElement(Z.a, {
						className: Object(l.a)(Ce.a.content, {
							[Ce.a.isEvent]: Object(ue.a)(be)
						}),
						"data-click-id": "background",
						flairStyleTemplate: i
					}, a.a.createElement(T.a, {
						isCompactMode: !0,
						post: be
					}), a.a.createElement("div", {
						className: Ce.a.compactPostRow
					}, !Ee && a.a.createElement(ye, {
						crosspost: n,
						isCommentsPage: E,
						isCompact: !1,
						isExpanded: _,
						post: be,
						useMediaIcons: !0
					}), !M && !be.isSponsored && a.a.createElement(F.h, {
						type: be.belongsTo.type,
						id: be.belongsTo.id
					}), a.a.createElement("div", {
						className: Ce.a.topLine,
						"data-click-id": "body"
					}, a.a.createElement(X.c, {
						post: be,
						poll: pe,
						size: X.b.Small,
						titleColor: i && i.postTitleColor,
						isOverlay: !1
					}), Te(be, he), a.a.createElement(Y.d, {
						className: Ce.a.postTopMeta,
						flairStyleTemplate: i,
						post: be,
						showSub: !!he && !M && !be.isSponsored,
						subredditOrProfile: he
					}), a.a.createElement(V.a, {
						className: Ce.a.postBadges,
						displayText: he ? he.displayText : null,
						inSubredditOrProfile: M,
						post: be
					}), a.a.createElement(j.a, {
						thing: be,
						tooltipType: k ? Y.c.Lightbox : void 0
					})), qe && !Ge && a.a.createElement("div", null, a.a.createElement(w.a, {
						className: Ce.a.liveDiscussionIcon,
						isMod: Ae,
						postId: be.postId
					})), a.a.createElement("div", {
						className: Ce.a.flatList
					}, a.a.createElement(I.a, {
						className: Ce.a.commentsLink,
						hasModPostPerms: Ae,
						isCommentsPage: E,
						isCommentPermalink: v,
						isOverlay: k,
						postId: be.id,
						modModeEnabled: se,
						numComments: be.numComments,
						type: m.g.Compact
					}), a.a.createElement(H.a, {
						className: Ce.a.modToolsFlatlist,
						isOverlay: !1,
						layout: K,
						modModeEnabled: se,
						post: be,
						sendEvent: Ie,
						showIconsOnly: !0
					}), Ae && a.a.createElement(A.a, {
						dropdownId: Ue,
						onClick: () => Ke("post_mod_action_menu")
					}, a.a.createElement(P.b, null), a.a.createElement(Q.a, {
						canEditFlair: De && Se,
						hasModPostPerms: Ae,
						hasModFullPerms: Le,
						isOverlay: !1,
						isPostAuthor: He,
						modModeEnabled: se,
						post: be,
						tooltipId: Ue
					})), Ae && We && !se && a.a.createElement(ee.c, {
						text: `${Ve}`,
						onClick: () => {
							this.props.onOpenReportsDropdown(Ze), Ke("post_report_menu")
						},
						id: Ze
					}, a.a.createElement(ae.a, {
						model: be,
						onIgnoreReports: () => {
							de(), Ke(be.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Ze
					}), be.ignoreReports ? a.a.createElement(ge.a, null) : a.a.createElement(fe.a, null)), a.a.createElement(J.a, {
						currentProfileName: s,
						isCommentsPage: E,
						isOverlay: !1,
						isProfilePostListing: y,
						layout: K,
						permalink: be.permalink,
						sendEvent: Ie,
						showEditPost: Re,
						showEditFlair: Se,
						dropdownId: `${be.id}-overflow-menu`,
						useFlatlistBreakpoints: Object(J.b)({
							share: !1,
							editPost: !1,
							save: !1,
							gild: !1,
							hide: !1,
							report: !1
						})
					}), !Ee && a.a.createElement(ye, {
						crosspost: n,
						isCommentsPage: E,
						isCompact: !0,
						isExpanded: _,
						post: be,
						useMediaIcons: !0
					}))), Me && Je && Je.url && a.a.createElement(S.a, {
						className: Ce.a.adLinkWrapper
					}, a.a.createElement(O.a, {
						post: be,
						adLinkContent: Qe,
						isCompact: !0
					})), se && Ae && We && a.a.createElement("div", {
						className: Ce.a.compactPostRow
					}, a.a.createElement(U.a, {
						onIgnoreReports: de,
						reportable: be
					})), a.a.createElement(F.d, null))), _ && a.a.createElement(we, {
						post: be,
						scrollerItemRef: _e,
						flairStyleTemplate: i,
						shouldShowGalleryTileOption: Ne,
						isGalleryTileLayoutDefault: C
					}), e === Fe && a.a.createElement(G.a, {
						flairs: be.flair,
						subredditId: be.belongsTo.id,
						modalId: Fe,
						onFlairChanged: re
					}));
					return a.a.createElement($.b, null, Xe)
				}
			}
			const we = e => a.a.createElement(Z.a, {
					className: Object(l.a)(e.className, Ce.a.expandedContentWrapper),
					flairStyleTemplate: e.flairStyleTemplate
				}, e.post.crosspostRootId ? a.a.createElement("div", {
					className: Ce.a.crosspostMediaWrapper
				}, Ie(e.post, e.scrollerItemRef, e.shouldShowGalleryTileOption, e.isGalleryTileLayoutDefault)) : Ie(e.post, e.scrollerItemRef, e.shouldShowGalleryTileOption, e.isGalleryTileLayoutDefault)),
				Ie = (e, t, s, n) => a.a.createElement(K.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: n,
					isListing: !0,
					isNotCardView: !0,
					post: e,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					shouldShowGalleryTileOption: s,
					showCentered: !0,
					showFull: !0
				}),
				Ne = e => a.a.createElement(r.a, {
					"data-click-id": "subreddit",
					to: e.url
				}, a.a.createElement(se.b, {
					className: Ce.a.subredditIcon,
					subredditOrProfile: e
				})),
				Te = (e, t) => a.a.createElement("div", {
					className: Ce.a.responsiveMeta
				}, a.a.createElement(de.b, {
					isScoreHidden: e.scoreHidden,
					score: e.score
				}), a.a.createElement(de.c, null), Object(de.d)(e.numComments), a.a.createElement(de.c, null), t && a.a.createElement("a", {
					href: t.url
				}, a.a.createElement(de.a, null, t.displayText)), e.isSponsored && [a.a.createElement(te.a, {
					key: "label"
				}), a.a.createElement(de.c, {
					key: "separator"
				})], !e.isSponsored && a.a.createElement(de.a, null, " Posted by "), a.a.createElement(Y.b, {
					post: e
				}));
			t.default = Object(re.b)(a.a.memo((function(e) {
				const t = Object(he.a)(),
					s = Object(n.useMemo)(() => Se(), []),
					r = Object(o.e)(n => s(n, {
						...e,
						...t
					})),
					i = Object(o.d)(),
					d = Oe(i, {
						...e,
						...t
					});
				return a.a.createElement(je, ke({}, e, t, r, d, {
					onFlairChanged: ({
						previewFlair: t,
						selectedTemplateId: s
					}) => d.dispatchFlairChanged({
						post: e.post,
						previewFlair: t,
						selectedTemplateId: s
					}),
					sendEvent: Object(c.b)(),
					isOverlay: Object(pe.a)(),
					theme: Object(be.a)()
				}))
			})))
		},
		"./src/reddit/components/ConfirmModal/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3DhQ2s_h1XCiwltypHmlbp",
				close: "_2oxgXPm-tiPAEPsJoUw-ZD",
				headerText: "_2sDCzF6zlpNJ5cbVDRCPOS",
				text: "_3eWjwYvkDvPzyq4FlubrF9",
				buttonWrapper: "_6ZHRZ8Epefe887d7LL-q6",
				primaryButton: "Ch-0dFLxLOtcc6xCyQvsk",
				secondaryButton: "bgwHoiDoSwFVZKRTLRQMF"
			}
		},
		"./src/reddit/components/ConfirmModal/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/higherOrderComponents/asModal/index.tsx"),
				r = s("./src/reddit/controls/Button/index.tsx"),
				i = s("./src/reddit/components/ConfirmModal/index.m.less"),
				d = s.n(i),
				l = s("./src/reddit/components/ModalStyledComponents/index.tsx");
			t.a = Object(o.a)(e => a.a.createElement("div", {
				className: d.a.container
			}, a.a.createElement("button", {
				onClick: () => e.onClose ? e.onClose() : e.onCancel(),
				className: d.a.close
			}, a.a.createElement(l.b, null)), a.a.createElement(l.h, null, a.a.createElement("h2", {
				className: d.a.headerText
			}, e.headerText)), a.a.createElement(l.k, null, e.message && a.a.createElement("p", {
				className: d.a.text
			}, e.message), e.children && a.a.createElement("div", {
				className: d.a.text
			}, e.children), a.a.createElement("div", {
				className: d.a.buttonWrapper
			}, e.cancelText && a.a.createElement(r.l, {
				className: d.a.secondaryButton,
				onClick: e.onCancel
			}, e.cancelText), a.a.createElement(r.i, {
				className: d.a.primaryButton,
				onClick: e.onAccept
			}, e.acceptText)))))
		},
		"./src/reddit/components/ContentSurvey/RatingCard.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/reddit/components/ContentSurvey/index.m.less"),
				i = s.n(r),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/SubredditIcon/index.tsx"),
				c = s("./src/reddit/hooks/useTheme.ts"),
				m = s("./src/reddit/icons/svgs/Info/index.tsx"),
				u = s("./src/reddit/models/Theme/index.ts"),
				p = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = s("./src/reddit/selectors/subreddit.ts");
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function g(e) {
				var t, s;
				const {
					ratingResponse: n,
					subredditId: r,
					children: g
				} = e, f = null !== (t = Object(o.e)(e => Object(b.S)(e, {
					subredditId: r
				}))) && void 0 !== t ? t : {}, x = Object(c.a)();
				return a.a.createElement("div", {
					className: i.a.ratingCard
				}, "PENDING" === (null == n ? void 0 : n.status) && a.a.createElement("div", {
					className: Object(d.a)(i.a.card, i.a.pending)
				}, a.a.createElement(m.a, {
					className: i.a.infoIcon
				}), h._("Content tag is pending until reviewed", null, {
					hk: "Umha7"
				})), a.a.createElement("div", {
					className: i.a.card
				}, a.a.createElement("div", {
					className: i.a.banner,
					style: {
						background: Object(u.g)(Object(p.a)({
							theme: x
						}).banner.backgroundColor, Object(p.a)({
							theme: x
						}).banner.backgroundImage, Object(p.a)({
							theme: x
						}).banner.backgroundImagePosition)
					}
				}, a.a.createElement(l.b, {
					className: i.a.communityIcon,
					iconUrl: null === (s = f.icon) || void 0 === s ? void 0 : s.url
				})), a.a.createElement("h3", {
					className: i.a.communityName
				}, n ? a.a.createElement("span", null, f.displayText, a.a.createElement("img", {
					className: i.a.ratingImg,
					src: n.rating.icon.png
				})) : f.displayText), g))
			}
		},
		"./src/reddit/components/ContentSurvey/SurveyModal.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/higherOrderComponents/asModal/index.tsx");
			const o = Object(n.a)({
					resolved: {},
					chunkName: () => "",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e(0), s.e(1)]).then(s.bind(null, "./src/reddit/components/ContentSurvey/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ContentSurvey/index.tsx"
					}
				}),
				r = Object(a.a)(o);
			t.a = r
		},
		"./src/reddit/components/ContentSurvey/index.m.less": function(e, t, s) {
			e.exports = {
				feedBanner: "_3oY2sjcQ7EgBYd7agqleJv",
				notepadSnoo: "B0cLCCVs794x74kjJidDO",
				bannerCopy: "_2NfcId0Mtt4-NP4AbrAck5",
				copy: "BcSr5zM39F4cQJ9MQqkRn",
				meta: "r9AkMaLWOPKfC5Swx9XQf",
				chevron: "yFbNzMMxa-u2DgUP3Gz5h",
				header: "wKkshJ3Og8gaDgJmSULiK",
				introCopy: "m3rT-KnA6An7scRNg10UW",
				checkbox: "Y5aDAUsXXQaMbdCe1-qdG",
				result: "_29ewfEVekvKEl_P2hqf4tI",
				heading: "_3yKTUBG4MrGHv9n644t4Ua",
				card: "_18VT-IpGoX6SDdyHHLI_eo",
				pending: "hg80uiMz2ssH44RLsmlhG",
				infoIcon: "_3HgNBpJCFAy2mohcd9VxmZ",
				banner: "_23eBsXSECZlQ3Eh-zXhEbC",
				communityIcon: "_2Z8cRxGvjX2hQUlQK_VEOE",
				communityName: "_1sHP__xe_7iTbSpLKp7FeC",
				ratingImg: "UZWqo3i6ydUcE18iJqx3P",
				ratingAudience: "_1Y5aAemcMRF3uwSgYpqbsT",
				ratingDescription: "_1e5wHYsIyWJlZSjZCHhBKg",
				reasonsHeader: "_1npcgCYHbRcUsU6KOI7ony",
				reason: "_3rlzPcuZsxLsVx6ib3oBjk"
			}
		},
		"./src/reddit/components/EmailInvitePaintedDoor/loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(n.a)({
				resolved: {},
				chunkName: () => "EmailInvitePaintedDoor",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("EmailInvitePaintedDoor").then(s.bind(null, "./src/reddit/components/EmailInvitePaintedDoor/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/EmailInvitePaintedDoor/index.tsx"
				}
			});
			t.a = a
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
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/eventTools/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				l = s("./src/reddit/components/PostFollow/index.tsx"),
				c = s("./src/reddit/helpers/postCollection.ts"),
				m = s("./src/reddit/helpers/postEvent.ts"),
				u = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = s.n(u);
			const b = i.a.div("EventMetaWrapper", p.a);
			t.a = ({
				className: e,
				isCompactMode: t,
				post: s
			}) => {
				if (!Object(m.a)(s)) return null;
				const n = s && s.eventInfo,
					i = Object(c.a)(s),
					u = n && Object(r.c)(n.eventStart, n.eventEnd);
				return a.a.createElement("div", {
					className: Object(o.a)(p.a.container, e, {
						[p.a.isCompact]: !!t
					})
				}, a.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, a.a.createElement(d.a, {
					post: s
				}), !i && u && a.a.createElement(l.a, {
					className: p.a.eventFollowButton,
					post: s,
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
				a = s.n(n),
				o = s("./src/lib/eventTools/index.ts"),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/constants/index.ts");

			function d(e) {
				return e.toLocaleDateString(void 0, {
					month: "numeric",
					day: "numeric"
				})
			}
			var l = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				c = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/icons/fonts/helpers.tsx"),
				u = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				p = s.n(u);
			var b = e => a.a.createElement("i", {
				className: Object(c.a)(Object(m.b)("scheduled", e.isFilled), p.a.calendarIcon, e.className)
			});
			var h = e => a.a.createElement("i", {
					className: Object(c.a)(Object(m.b)("live", e.isFilled), p.a.liveIcon, e.className)
				}),
				g = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				f = s.n(g),
				x = s("./src/lib/lessComponent.tsx");
			const E = x.a.span("PostEventFutureText", f.a),
				v = x.a.span("PostEventPastText", f.a),
				_ = x.a.span("PostEventNowText", f.a),
				C = x.a.span("Container", f.a),
				k = x.a.wrapped(b, "CalendarIcon", f.a),
				y = x.a.wrapped(h, "LiveIcon", f.a),
				S = x.a.div("LoadingState", f.a);
			class O extends n.Component {
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
						eventIsLive: c,
						eventStart: m
					} = s, u = Object(o.e)(m, n);
					let p, b;
					if (this.state.mounted || u === o.a.Live) p = function(e, t, s) {
						const n = Object(o.e)(e, t),
							a = new Date(e * i.Nb);
						let l;
						return n === o.a.Live || s ? r.fbt._("Now", null, {
							hk: "Prpcg"
						}) : (n === o.a.Future ? l = Object(o.d)(e) ? r.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : Object(o.b)(e) >= 5 ? d(a) : a.toLocaleDateString(void 0, {
							weekday: "long"
						}) : n === o.a.Past && (l = Object(o.d)(e) ? r.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : d(a)), `${l} @ ${function(e){return e.toLocaleTimeString(void 0,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(a)}`)
					}(m, n, c);
					else {
						const e = Object(l.a)({
							isLoading: !0
						});
						p = a.a.createElement(S, {
							className: e
						})
					}
					if (c) b = a.a.createElement(_, null, a.a.createElement(y, null), p);
					else if (u === o.a.Future) b = a.a.createElement(E, null, a.a.createElement(k, null), p);
					else {
						if (u !== o.a.Past) return null;
						b = a.a.createElement(v, null, a.a.createElement(k, null), p)
					}
					return a.a.createElement(C, {
						className: e
					}, b)
				}
			}
			t.a = O
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				c = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				u = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				p = s("./src/reddit/icons/fonts/index.tsx"),
				b = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/telemetry/models/Outbound.ts"),
				g = s("./src/reddit/components/ExpandoButton/index.m.less"),
				f = s.n(g);
			const x = Object(r.b)(null, (e, t) => ({
					toggle: () => e(Object(c.x)({
						postId: t.post.id
					}))
				})),
				E = (e, t = !1, s) => {
					const n = Object(d.a)(f.a.icon, f.a.hideOnHover);
					if (t) return o.a.createElement(p.a, {
						name: "crosspost",
						className: n
					});
					if (s.pollData) return o.a.createElement(p.a, {
						name: "poll_post",
						className: n
					});
					switch (e) {
						case b.o.GIFVIDEO:
							return o.a.createElement(p.a, {
								name: "gif_post",
								className: n
							});
						case b.o.IMAGE:
							return o.a.createElement(p.a, {
								name: "image_post",
								className: n
							});
						case b.o.TEXT:
						case b.o.RTJSON:
							return o.a.createElement(p.a, {
								name: "text_post",
								className: n
							});
						case b.o.VIDEO:
							return o.a.createElement(p.a, {
								name: "video_post",
								className: n
							});
						case b.o.GALLERY:
							return o.a.createElement(p.a, {
								name: "media_gallery",
								className: n
							});
						case b.o.EMBED:
						default:
							return o.a.createElement(p.a, {
								name: "embed",
								className: n
							})
					}
				};
			t.a = x(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: a,
					isCommentsPage: r,
					isExpanded: c,
					post: b,
					toggle: g,
					useMediaIcons: x
				} = e, v = s || b, _ = a && !!s;
				return v.media && !(("rtjson" === v.media.type || "text" === v.media.type) && !Object(u.a)(v)) || !!b.pollData ? o.a.createElement("button", {
					"aria-expanded": !!c,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(d.a)(t, f.a.outer),
					"data-click-id": c ? "expando_close" : "expando_open",
					onClick: g
				}, c ? o.a.createElement(p.a, {
					name: "collapse",
					className: f.a.icon
				}) : x ? o.a.createElement(o.a.Fragment, null, E(v.media && v.media.type, _, b), o.a.createElement(p.a, {
					name: "expand",
					className: Object(d.a)(f.a.icon, f.a.showOnHover)
				})) : o.a.createElement(p.a, {
					name: "expand",
					className: f.a.icon
				})) : v.source && v.source.url ? o.a.createElement(m.b, {
					"aria-label": n.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(d.a)(t, f.a.outer),
					"data-click-id": "expando_open",
					href: v.source.url,
					isSponsored: b.isSponsored,
					postId: b.id,
					source: b.source,
					sourceElement: r ? h.SourceElement.PostImage : h.SourceElement.ListingPostImage,
					target: "_blank"
				}, o.a.createElement(p.a, {
					name: "external_link",
					className: Object(d.a)(f.a.icon, f.a.outboundLinkIcon)
				})) : o.a.createElement(i.a, {
					"aria-label": n.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(d.a)(t, f.a.outer),
					"data-click-id": "expando_open",
					to: Object(l.a)(v.permalink),
					rel: "nofollow"
				}, o.a.createElement(p.a, {
					name: "text_post",
					className: f.a.icon
				}))
			})
		},
		"./src/reddit/components/GeoForm/GeoForm.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return j
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/uuid/v4.js"),
				r = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/controls/Button/index.tsx");
			var l, c = s("./node_modules/fbt/lib/FbtPublic.js"),
				m = s("./node_modules/p-debounce/index.js"),
				u = s.n(m),
				p = s("./src/lib/hooks/useOnClickOutside.ts"),
				b = s("./src/reddit/constants/keycodes.ts"),
				h = s("./src/lib/makeGqlRequest/index.ts"),
				g = s("./src/lib/sentry/index.ts"),
				f = s("./src/redditGQL/operations/GeoPlaceAutocomplete.json");
			! function(e) {
				e.GoogleMaps = "GOOGLE_MAPS", e.Geonames = "GEONAMES"
			}(l || (l = {}));
			const x = (e, t) => async s => {
				let n;
				try {
					n = await async function(e, t) {
						return Object(h.a)(e, {
							...f,
							variables: t
						})
					}(e(), {
						query: s,
						sessionId: t
					})
				} catch (a) {
					return g.c.captureException(a), []
				}
				return n.body.data.geoPlaceAutocomplete || []
			};
			var E = s("./src/reddit/hooks/useGqlContext.ts"),
				v = s("./src/reddit/icons/svgs/Location/index.tsx"),
				_ = s("./src/reddit/components/GeoForm/index.m.less"),
				C = s.n(_);

			function k(e) {
				const {
					value: t,
					setValue: s,
					setPlace: o,
					disabled: r,
					onFocus: d,
					sessionId: l,
					className: m
				} = e, p = Object(E.a)(), [h, g] = Object(n.useState)(!1), f = function(e, t, s) {
					const [a, o] = Object(n.useState)([]), r = Object(n.useMemo)(() => u()(s, 300), [s]);
					return Object(n.useEffect)(() => {
						e && t && r(e).then(e => {
							o(e)
						}).catch(() => o([]))
					}, [e]), a
				}(t, h, x(p, l)), {
					highlightValue: _,
					selectedIndex: k,
					onKeyDown: S,
					isClosed: O,
					setClosed: j
				} = function(e, t, s) {
					const [a, o] = Object(n.useState)(-1), [r, i] = Object(n.useState)(!!e.length), [d, l] = Object(n.useState)(void 0);
					return {
						highlightValue: d,
						selectedIndex: a,
						onKeyDown: n => {
							if (n.key === b.b.ArrowDown) {
								const t = Math.min(a + 1, e.length - 1);
								o(t), l(e[t])
							} else if (n.key === b.b.ArrowUp) {
								const t = Math.max(a - 1, -1);
								o(t), l(e[t])
							} else n.key === b.b.Enter && a > -1 ? (o(-1), t(e[a].name), s(e[a]), i(!0), n.preventDefault()) : n.key === b.b.Escape ? (o(-1), i(!0)) : l(void 0)
						},
						isClosed: r,
						setClosed: i
					}
				}(f, s, o), w = `location-input-${l}`;
				return a.a.createElement("div", {
					className: C.a.autocompleteInput
				}, a.a.createElement("label", {
					className: C.a.geoLabel,
					htmlFor: w
				}, a.a.createElement(v.a, {
					className: C.a.locationIcon
				})), a.a.createElement("input", {
					className: Object(i.a)(C.a.geoInput, m),
					name: w,
					disabled: r,
					onKeyDown: S,
					value: _ && _.name || t,
					placeholder: c.fbt._("Add location", null, {
						hk: "1BaqFd"
					}),
					onChange: e => {
						s(e.currentTarget.value), o(void 0), j(!1)
					},
					onFocus: () => {
						g(!0), d()
					},
					onBlur: () => g(!1)
				}), f.length && !O ? a.a.createElement(y, {
					id: l,
					items: f.map(e => e.name),
					selectedIndex: k,
					selectValue: e => {
						s(f[e].name), o(f[e]), j(!0)
					},
					onClickOutside: () => j(!0)
				}) : null)
			}

			function y(e) {
				const {
					id: t,
					items: s,
					selectedIndex: n,
					selectValue: o,
					onClickOutside: r
				} = e;
				return Object(p.a)(`autocomplete-dropdown-${t}`, r), a.a.createElement("ul", {
					className: C.a.autocompleteDropdown,
					id: `autocomplete-dropdown-${t}`
				}, s.map((e, t) => a.a.createElement("li", {
					key: `${e}${t}`,
					onClick: () => o(t),
					className: Object(i.a)({
						[C.a.highlight]: t === n
					})
				}, e)))
			}
			const {
				fbt: S
			} = s("./node_modules/fbt/lib/FbtPublic.js"), O = () => {};

			function j(e) {
				const {
					className: t,
					initialValue: s,
					initialPlace: o,
					disabled: l = !1,
					onFocus: c = O,
					onPlace: m = O,
					onValue: u = O,
					inputClassName: p
				} = e, b = function() {
					const [e, t] = Object(n.useState)(!1);
					return Object(n.useEffect)(() => t(!0), []), e
				}(), [h] = Object(n.useState)(() => r()()), [g, f] = Object(n.useState)(s || ""), [x, E] = Object(n.useState)(o);
				return b ? a.a.createElement("form", {
					className: Object(i.a)(C.a.geoForm, t),
					onSubmit: t => {
						t.preventDefault(), (null == o ? void 0 : o.id) !== (null == x ? void 0 : x.id) && e.onSubmit({
							name: g,
							place: x,
							sessionId: h
						})
					}
				}, a.a.createElement(k, {
					className: p,
					value: g,
					sessionId: h,
					setValue: e => {
						f(e), u(e)
					},
					setPlace: e => {
						E(e), m(e)
					},
					disabled: l,
					onFocus: c
				}), x && x.id !== (null == o ? void 0 : o.id) && a.a.createElement(d.l, {
					className: C.a.submitButton,
					type: "submit",
					disabled: l
				}, S._("Submit", null, {
					hk: "3kKxBt"
				}))) : null
			}
		},
		"./src/reddit/components/GeoForm/index.m.less": function(e, t, s) {
			e.exports = {
				geoForm: "dnC9V9HtkUxsmza-vEXgC",
				geoLabel: "_3T9bJ1ttSXUxb9rxZI9jMC",
				locationIcon: "_2Jm0p-hd1-KYZJI9iP3n6",
				geoInput: "_2O28-fZaU1kYnMmsiMKw3y",
				autocompleteInput: "oP84ZJjEgYLr154hrXHd8",
				autocompleteDropdown: "_1pwsnPyclgUCyjdfT0xWmx",
				highlight: "_1kfPE4TrjHsTFgvmrF1s33"
			}
		},
		"./src/reddit/components/GrantUserFlair/index.m.less": function(e, t, s) {
			e.exports = {
				titleRow: "_1knBg4PWacEaLvDRHAvsTp",
				flairDetails: "_2bPY-7msbc_UjCac-In6Li",
				flairEditColumn: "_2ebZb7SML8ZCy-QsS6tUc0",
				column: "_3vuuCvX3U56Wb64Bz3AX9W",
				iconsColumn: "Q9C1YLEYQHPi_NuLIcsS3",
				removeIcon: "_2IP600IxdVV8-hzfus_xst",
				removeButton: "Yd-aY1XSmw6atYPPJHm9n",
				row: "_3W5UQ4TDClfiDY4zEBYSqT",
				flairEditHelperText: "_2JpPK1gCbDBJBbMRrx-fe6",
				errorIndicator: "_1gmumWT2YihpY16NJJw_ac",
				hasError: "Uu_my_fNiUJaUT-wFhyeq",
				flairContainer: "_1c46XAzSY3wg6lATaRh11v",
				userLink: "_14IDyvxQsRUGTR9unevdzm",
				textInput: "_3OzKI46CUHBipWh2v7Cfq",
				dropdownTriangle: "_3L2zEwdN8hdor-MjnuTTXx",
				dropdownTarget: "_2q91kdzeOjUsLeozfWfPZI",
				dropdownContainer: "_2SgxV6WihN0lLBZ06jChDN",
				dropdownRow: "Hsh_7uWgjhtYFcA5QqiI6",
				userIcon: "uHVmBRWHNpGMMkIFBthWs",
				modIcon: "_31YDoZrj2KLLxWJhYimRfb",
				infoTooltip: "i75byXeh_ZzdbD0HGxb4",
				tooltipText: "_3FXJw0xh37YZHaJP_j3Npe",
				tooltipIconContainer: "_1dZeti3tpsM8YrfluheTX5",
				tooltipIconRow: "_2B9YDCXdUsKx20YPQ_0guj",
				tooltipIconText: "_2_doCenMWfLXsGEvDSq1NB",
				cssInputError: "_3ySNKx0QJZRCNOFB6345zX",
				bottomBarRow: "Tf16TWgXZcNKzLmD4PDPq",
				topBar: "e-h9YD6UZh8FOUPTG6drY",
				disabledBanner: "_3rrCSsx0QD7pFwGJquTq-6",
				warningIcon: "_3MSU8YNfdz6icABES0GIkK",
				emptyList: "y4YDfdWBHO7s3GVuYjBDF",
				flairIcon: "_3RYWcdo8Ov1AjwCGeCUsfs",
				mainText: "_8uYoAAuUrGW1iwcBP-2eS",
				fadeIn: "_3YR0vW4lNgbJJ7RgssVmf-"
			}
		},
		"./src/reddit/components/GrantUserFlair/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/config.ts"),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/find.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				d = s.n(i),
				l = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/addQueryParams/index.ts"),
				u = s("./src/lib/omitKey/index.ts"),
				p = s("./src/lib/stripQueryParams/index.ts"),
				b = s("./src/reddit/actions/grantUserFlair/index.ts"),
				h = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				g = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				f = s("./src/reddit/components/ModHub/InfoTooltip/index.tsx"),
				x = s("./src/reddit/components/ModHub/PaginationButtons/index.tsx"),
				E = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				v = s("./src/lib/classNames/index.ts"),
				_ = s("./src/reddit/components/SaveIndicator/index.m.less"),
				C = s.n(_),
				k = s("./src/reddit/icons/svgs/CheckmarkFitted/index.tsx"),
				y = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				S = s("./src/reddit/icons/svgs/Replay/index.tsx"),
				O = s("./src/reddit/models/ApiRequestState/index.ts");
			const j = {
				[O.a.Pending]: () => a.fbt._("Saving", null, {
					hk: "3r9uZO"
				}),
				[O.a.Complete]: () => a.fbt._("Saved", null, {
					hk: "e9tAk"
				}),
				[O.a.Failed]: () => a.fbt._("Save error", null, {
					hk: "3NFi3S"
				})
			};
			var w = e => d.a.createElement(d.a.Fragment, null, e.status === O.a.Pending && d.a.createElement(S.a, {
					className: Object(v.a)(C.a.icon, C.a.pendingIcon)
				}), e.status === O.a.Complete && d.a.createElement(k.a, {
					className: Object(v.a)(C.a.icon, C.a.savedIcon)
				}), e.status === O.a.Failed && d.a.createElement(y.a, {
					className: Object(v.a)(C.a.icon, C.a.saveErrorIcon)
				}), d.a.createElement("span", {
					className: C.a.caption
				}, j[e.status]())),
				I = s("./src/reddit/components/SubredditModerationSearch/index.tsx"),
				N = s("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				T = s("./src/reddit/components/SubredditModerationUserItem/index.tsx"),
				M = s("./src/reddit/components/TrackingHelper/index.tsx"),
				P = s("./src/reddit/constants/colors.ts"),
				R = s("./src/reddit/contexts/PageLayer/index.tsx"),
				F = s("./src/reddit/helpers/flair.ts"),
				A = s("./src/reddit/selectors/telemetry.ts");
			const D = e => ({
					subreddit: A.subreddit(e),
					profile: A.profile(e),
					userSubreddit: A.userSubreddit(e)
				}),
				L = e => t => ({
					source: "grant_user_flair",
					action: "click",
					noun: e,
					...D(t)
				}),
				U = () => L("search_username"),
				B = () => L("page_forward"),
				H = () => L("page_back"),
				W = () => L("remove_granted_user_flair"),
				Z = (e, t) => s => ({
					source: "grant_user_flair",
					action: "autosave",
					noun: e,
					actionInfo: {
						...A.actionInfo(s),
						settingValue: t
					},
					...D(s)
				}),
				V = () => Z("flair_text"),
				q = e => Z("flair_template", e || "none"),
				G = e => Z("css_class", e);
			var z = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				K = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				Q = s("./src/reddit/icons/svgs/User/index.tsx"),
				J = s("./src/reddit/models/SubredditModeration/index.ts");
			const X = [];
			var Y = s("./src/reddit/selectors/meta.ts"),
				$ = s("./src/reddit/selectors/userFlair.ts"),
				ee = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				te = s("./src/reddit/components/GrantUserFlair/index.m.less"),
				se = s.n(te);
			var ne = () => d.a.createElement("div", {
					className: se.a.emptyList
				}, d.a.createElement(ee.a, {
					className: se.a.flairIcon
				}), d.a.createElement("div", {
					className: se.a.mainText
				}, a.fbt._("You do not have any users with user flair", null, {
					hk: "4D1S5Z"
				})), d.a.createElement("div", null, a.fbt._("Search for a user to assign a user flair", null, {
					hk: "2YaDOy"
				}))),
				ae = s("./node_modules/lodash/filter.js"),
				oe = s.n(ae),
				re = s("./node_modules/lodash/isEqual.js"),
				ie = s.n(re),
				de = s("./node_modules/lodash/omit.js"),
				le = s.n(de),
				ce = s("./src/reddit/constants/flair.ts"),
				me = s("./src/reddit/helpers/validateFlairCssClass.ts");
			const ue = 200;
			var pe;
			! function(e) {
				e[e.Save = 0] = "Save", e[e.Delete = 1] = "Delete"
			}(pe || (pe = {}));
			const be = e => null === e.flair,
				he = e => !(!e.apiError && !e.clientValidationError),
				ge = (e, t = !1) => {
					const s = Date.now();
					return oe()(e, e => {
						if (!e || e.clientValidationError) return !1;
						if (e.apiError && !t) return !1;
						if (be(e)) return !0;
						return s - e.changedAt > 2e3 || t
					})
				},
				fe = (e, t, s) => {
					const n = Object.keys(e).filter(n => {
						const a = e[n],
							o = t[n] || null;
						return !(!!o || n === s || !he(a)) || !!ie()(o, a.flair)
					});
					return n.length ? le()(e, n) : e
				},
				xe = (e, t) => {
					const s = t || ce.a;
					return (e ? Object(F.m)(e, s) || Object(me.a)(e.cssClass || "") : "") || void 0
				};
			var Ee = s("./node_modules/lodash/noop.js"),
				ve = s.n(Ee),
				_e = s("./src/reddit/components/Flair/index.tsx"),
				Ce = s("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				ke = s("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				ye = s("./src/reddit/controls/InternalLink/index.tsx"),
				Se = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				Oe = s("./src/reddit/models/Flair/index.ts"),
				je = s("./src/higherOrderComponents/asTooltip.tsx"),
				we = s("./src/reddit/actions/tooltip.ts"),
				Ie = s("./src/reddit/constants/keycodes.ts"),
				Ne = s("./src/reddit/controls/Dropdown/index.tsx"),
				Te = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				Me = s("./src/reddit/selectors/tooltip.ts");
			const Pe = e => `UserFlairPicker--${e}`,
				Re = Object(je.a)(Ne.a),
				Fe = ({
					flair: e
				}) => d.a.createElement(d.a.Fragment, null, d.a.createElement(_e.b, {
					flair: Object(F.c)(e),
					forceSmallEmojis: !0
				}), e.textEditable && d.a.createElement(Q.a, {
					className: se.a.userIcon
				}), e.modOnly && d.a.createElement(z.a, {
					className: se.a.modIcon
				})),
				Ae = Object(c.c)({
					isDropdownOpen: (e, t) => Object(Me.b)(Pe(t.userName))(e)
				});
			class De extends d.a.Component {
				constructor(e) {
					super(e), this.onSetFocus = e => {
						this.setState({
							focusedIndex: e
						})
					}, this.findNextFocusableItem = () => {
						if (void 0 === this.state.focusedIndex) return -1; {
							const e = this.state.focusedIndex + 1;
							if (e <= this.props.templateIds.length - 1) return e
						}
					}, this.onMouseEnter = e => {
						const t = document.getElementById(`focus-${e}`);
						t && (t.focus(), this.onSetFocus(e))
					}, this.findPreviousFocusableItem = () => {
						if (void 0 !== this.state.focusedIndex && -1 !== this.state.focusedIndex) return this.state.focusedIndex - 1
					}, this.onKeyDown = e => {
						if (e.keyCode === Ie.a.ArrowDown)
							if (e.preventDefault(), this.props.isDropdownOpen) {
								const e = this.findNextFocusableItem();
								if (void 0 !== e) {
									const t = document.getElementById(`focus-${e}`);
									t && (t.focus(), t.scrollIntoView({
										block: "nearest"
									})), this.onSetFocus(e)
								}
							} else this.props.onToggleDropdown();
						if (e.keyCode === Ie.a.ArrowUp) {
							e.preventDefault();
							const t = this.findPreviousFocusableItem();
							if (void 0 !== t) {
								const e = document.getElementById(`focus-${t}`);
								e && (e.focus(), e.scrollIntoView({
									block: "nearest"
								})), this.onSetFocus(t)
							}
						}
						if (e.keyCode === Ie.a.Tab && this.props.isDropdownOpen && e.preventDefault(), e.keyCode === Ie.a.Enter) {
							if (e.preventDefault(), e.stopPropagation(), this.props.isDropdownOpen && void 0 !== this.state.focusedIndex) {
								const e = this.props.templateIds[this.state.focusedIndex];
								this.props.onSelectFlairTemplate(e)
							}
							this.props.onToggleDropdown()
						}
					}, this.state = {}
				}
				render() {
					const {
						props: e
					} = this;
					return d.a.createElement("button", {
						className: se.a.dropdownTarget,
						id: Pe(e.userName),
						onClick: e.onToggleDropdown,
						onKeyDown: this.onKeyDown
					}, e.selectedTemplateId && e.userFlairTemplates[e.selectedTemplateId] ? d.a.createElement(Fe, {
						flair: e.userFlairTemplates[e.selectedTemplateId]
					}) : a.fbt._("none", null, {
						hk: "ng6B"
					}), d.a.createElement(Te.a, {
						className: se.a.dropdownTriangle
					}), d.a.createElement(Re, {
						className: se.a.dropdownContainer,
						isOpen: e.isDropdownOpen,
						tooltipId: Pe(e.userName)
					}, d.a.createElement("button", {
						className: se.a.dropdownRow,
						id: "focus--1",
						onClick: () => e.onSelectFlairTemplate(void 0),
						onMouseEnter: () => this.onMouseEnter(-1),
						tabIndex: -1
					}, a.fbt._("none", null, {
						hk: "ng6B"
					})), e.templateIds.map((t, s) => {
						const n = e.userFlairTemplates[t];
						return d.a.createElement("button", {
							className: se.a.dropdownRow,
							id: `focus-${s}`,
							key: t,
							onClick: () => e.onSelectFlairTemplate(t),
							onMouseEnter: () => this.onMouseEnter(s),
							tabIndex: -1
						}, d.a.createElement(Fe, {
							flair: n
						}))
					})))
				}
			}
			var Le = Object(l.b)(Ae, (e, t) => ({
				onToggleDropdown: () => e(Object(we.h)({
					tooltipId: Pe(t.userName)
				}))
			}))(De);
			const Ue = e => `emoji-picker-${e}`,
				Be = Object(F.b)();
			class He extends d.a.PureComponent {
				constructor() {
					super(...arguments), this.onSelectFlairTemplate = e => {
						const t = e && this.props.userFlairTemplates[e],
							s = t ? Object(F.c)(t) : Be;
						this.props.onChange(this.props.username, s)
					}, this.onFlairContentChanged = e => {
						this.props.onChange(this.props.username, e)
					}, this.onChangeCssClass = e => {
						const t = e.target.value,
							s = this.props.flair || Be;
						this.props.onChange(this.props.username, {
							...s,
							cssClass: t
						})
					}, this.removeFlair = () => {
						this.props.onChange(this.props.username, null)
					}
				}
				render() {
					const {
						props: e
					} = this, {
						hasError: t
					} = e, s = e.flair || Be, n = Object(Ce.a)(), a = s.templateId, o = a && e.userFlairTemplates[a] || ce.a, r = !!o && o.modOnly, i = !Object(me.a)(s.cssClass || "");
					return d.a.createElement("div", {
						className: Object(v.a)(se.a.row, t ? se.a.hasError : null)
					}, d.a.createElement("div", {
						className: se.a.errorIndicator
					}, d.a.createElement(y.a, null)), d.a.createElement(ye.a, {
						className: se.a.userLink,
						to: `/user/${e.username}`
					}, d.a.createElement(ke.a, {
						user: e.username,
						tooltipId: `grantuserflair--userhovercard--${e.username}`,
						subredditId: e.subredditId,
						sendHoverCardEvent: ve.a
					}, e.username, d.a.createElement("div", {
						className: se.a.flairContainer
					}, d.a.createElement(_e.b, {
						flair: s
					})))), d.a.createElement("div", {
						className: se.a.flairDetails
					}, d.a.createElement("div", {
						className: se.a.column
					}, d.a.createElement(Le, {
						onSelectFlairTemplate: this.onSelectFlairTemplate,
						selectedTemplateId: a,
						templateIds: e.templateIds,
						userFlairTemplates: e.userFlairTemplates,
						userName: this.props.username
					})), d.a.createElement("div", {
						className: se.a.flairEditColumn
					}, d.a.createElement(n, {
						allowBlank: !e.isChanged,
						emojiPickerId: Ue(e.username),
						flair: s,
						flairTemplateType: Oe.d.UserFlair,
						flairTemplate: o,
						helperTextClass: se.a.flairEditHelperText,
						isCompact: !0,
						isFlairModOnly: r,
						onChange: this.onFlairContentChanged,
						subredditId: e.subredditId
					})), d.a.createElement("div", {
						className: se.a.column
					}, d.a.createElement("input", {
						className: Object(v.a)(se.a.textInput, {
							[se.a.cssInputError]: !i
						}),
						value: s.cssClass || "",
						onChange: this.onChangeCssClass,
						disabled: !!o.id
					})), d.a.createElement("button", {
						className: se.a.removeButton,
						onClick: this.removeFlair
					}, d.a.createElement(Se.a, {
						className: se.a.removeIcon
					}))))
				}
			}
			var We = He;
			const Ze = {},
				Ve = Object(R.t)({
					currentPageUrl: R.e
				}),
				qe = Object(c.c)({
					flairedUserOrder: (e, t) => {
						const s = Object(J.d)(t.subredditId, t.after, t.before);
						return e.pages.modHub.flairedUsers.userOrder[s] || X
					},
					flairedUsers: (e, t) => e.pages.modHub.flairedUsers.models[t.subredditId],
					isFlairedUsersListPending: e => e.pages.modHub.flairedUsers.api.pending,
					isSearchPending: e => e.pages.modHub.flairedUsers.search.api.pending,
					isUserFlairEnabled: $.a,
					origin: Y.j,
					pageInfo: (e, t) => {
						const s = Object(J.d)(t.subredditId, t.after, t.before);
						return e.pages.modHub.flairedUsers.pageInfo[s]
					},
					searchResult: (e, t) => e.pages.modHub.flairedUsers.search.result,
					userFlairData: $.c
				}),
				Ge = Object(l.b)(qe, (e, {
					subredditId: t
				}) => ({
					deleteUserFlair: (t, s) => e(Object(b.a)(t, s)),
					saveFlairedUser: (s, n) => e(Object(b.c)(s, t, n)),
					searchFlairedUser: s => e(Object(b.d)(t, s))
				}));
			class ze extends d.a.Component {
				constructor(e) {
					super(e), this.isUnmounted = !1, this.pendingRequestsMap = new Map, this.autoSaveIntervalId = 0, this.processChanges = (e = !1) => {
						this.autoSaveIntervalId || (this.autoSaveIntervalId = window.setInterval(this.processChanges, ue));
						const {
							flairedUsers: t
						} = this.props, {
							unsavedChanges: s,
							searchTerm: n
						} = this.state, a = fe(s, t, n);
						ge(a, e).forEach(this.sendChangeToServer), a !== s && this.setState({
							unsavedChanges: a
						})
					}, this.sendChangeToServer = async e => {
						const t = e.username;
						if (this.pendingRequestsMap.get(t)) return;
						const s = this.props.flairedUsers[t] || null;
						this.sendTelemetryEvents(s, e.flair);
						const n = e.flair ? {
							type: pe.Save,
							promise: this.props.saveFlairedUser(t, e.flair)
						} : {
							type: pe.Delete,
							promise: this.props.deleteUserFlair(t, this.props.subredditId)
						};
						this.pendingRequestsMap.set(t, n);
						const a = await n.promise;
						this.pendingRequestsMap.delete(t), this.isUnmounted || this.setState(s => {
							const n = s.unsavedChanges[t];
							return e !== n ? null : {
								unsavedChanges: !0 === a ? Object(u.a)(s.unsavedChanges, t) : {
									...this.state.unsavedChanges,
									[t]: {
										...e,
										apiError: a
									}
								}
							}
						})
					}, this.onFlairChanged = (e, t) => {
						const {
							templates: s
						} = this.props.userFlairData, n = t && t.templateId ? s[t.templateId] : void 0;
						this.setState(s => {
							return {
								unsavedChanges: {
									...s.unsavedChanges,
									[e]: {
										flair: t,
										username: e,
										changedAt: Date.now(),
										clientValidationError: xe(t, n)
									}
								}
							}
						})
					}, this.onSearch = e => {
						this.props.searchFlairedUser(e), this.setState({
							searchTerm: e
						}), this.props.sendEvent(U())
					}, this.onCancelSearch = () => {
						this.setState({
							searchTerm: null
						})
					}, this.onClickNextPage = () => this.props.sendEvent(B()), this.onClickPrevPage = () => this.props.sendEvent(H()), this.renderUserRow = e => {
						const {
							state: t,
							props: s
						} = this, n = s.flairedUsers[e] || null, a = t.unsavedChanges[e], o = a && !be(a) ? a.flair : n;
						return d.a.createElement(We, {
							flair: o,
							hasError: !!a && he(a),
							isChanged: !!a,
							key: e,
							onChange: this.onFlairChanged,
							subredditId: s.subredditId,
							templateIds: s.userFlairData.templateIds,
							userFlairTemplates: s.userFlairData.templates,
							username: e
						})
					}, this.state = {
						searchTerm: null,
						unsavedChanges: Ze
					}
				}
				componentDidUpdate() {
					this.processChanges()
				}
				componentWillUnmount() {
					this.isUnmounted = !0, this.processChanges(!0), window.clearInterval(this.autoSaveIntervalId)
				}
				sendTelemetryEvents(e, t) {
					if (!t) return void this.props.sendEvent(W());
					let s = e || Object(F.b)();
					const n = s.templateId || void 0,
						a = t.templateId || void 0;
					if (a !== n) {
						this.props.sendEvent(q(a));
						const e = t.templateId && this.props.userFlairData.templates[t.templateId];
						s = e ? Object(F.c)(e) : s
					}
					Object(F.p)(t, s) || this.props.sendEvent(V()), t.cssClass !== s.cssClass && this.props.sendEvent(G(t.cssClass || ""))
				}
				getIndicatorStatus() {
					const {
						unsavedChanges: e
					} = this.state;
					if (e === Ze) return null;
					const t = !!r()(e, e => he(e));
					return !!r()(e, e => !he(e)) ? O.a.Pending : t ? O.a.Failed : O.a.Complete
				}
				render() {
					const {
						props: e,
						state: t
					} = this, s = this.getIndicatorStatus(), o = e.pageInfo && (e.pageInfo.hasNextPage || e.pageInfo.hasPreviousPage), r = !e.flairedUserOrder.length && !o;
					return d.a.createElement(d.a.Fragment, null, d.a.createElement(E.c, {
						className: se.a.topBar
					}, null !== s && d.a.createElement(w, {
						status: s
					})), d.a.createElement(E.a, null, d.a.createElement(E.b, null, a.fbt._("Grant user flair", null, {
						hk: "N1r42"
					}), d.a.createElement(g.a, {
						linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/360028091332`
					})), !e.isUserFlairEnabled && d.a.createElement(h.a, {
						className: se.a.disabledBanner,
						color: P.b.quarantine,
						icon: d.a.createElement(K.a, {
							className: se.a.warningIcon
						}),
						title: a.fbt._("User flair has been disabled for this community", null, {
							hk: "3BBvFe"
						}),
						subtitle: a.fbt._("User flair will not be displayed in posts or comments", null, {
							hk: "3E4WaA"
						})
					}), d.a.createElement(N.b, {
						activeSearchQuery: t.searchTerm,
						onSearch: this.onSearch
					}, e.pageInfo && !t.searchTerm && d.a.createElement(x.a, {
						prevTo: Object(m.a)(Object(p.a)(`${e.origin}${e.currentPageUrl}`), {
							before: e.pageInfo.startCursor
						}),
						prevButtonEnabled: e.pageInfo.hasPreviousPage,
						prevButtonOnClick: this.onClickPrevPage,
						nextButtonEnabled: e.pageInfo.hasNextPage,
						nextButtonOnClick: this.onClickNextPage,
						nextTo: Object(m.a)(Object(p.a)(`${e.origin}${e.currentPageUrl}`), {
							after: e.pageInfo.endCursor
						})
					})), d.a.createElement("div", {
						className: se.a.titleRow
					}, a.fbt._("Username with preview", null, {
						hk: "1RFjbI"
					}), d.a.createElement("div", {
						className: se.a.flairDetails
					}, d.a.createElement("div", {
						className: se.a.column
					}, a.fbt._("Flair template", null, {
						hk: "18cQfH"
					}), d.a.createElement(f.a, {
						className: se.a.infoTooltip
					}, d.a.createElement("div", {
						className: se.a.tooltipText
					}, a.fbt._("Flair templates determine the flair's background colors, text colors, and permissions", null, {
						hk: "4y58Eg"
					})), d.a.createElement("div", {
						className: se.a.tooltipIconContainer
					}, d.a.createElement("div", {
						className: se.a.tooltipIconRow
					}, d.a.createElement(z.a, {
						className: se.a.modIcon
					}), d.a.createElement("span", {
						className: se.a.tooltipIconText
					}, a.fbt._("Available only to mods", null, {
						hk: "2s7Gci"
					}))), d.a.createElement("div", {
						className: se.a.tooltipIconRow
					}, d.a.createElement(Q.a, {
						className: se.a.userIcon
					}), d.a.createElement("span", {
						className: se.a.tooltipIconText
					}, a.fbt._("User editable", null, {
						hk: "3tIGRy"
					})))))), d.a.createElement("div", {
						className: se.a.flairEditColumn
					}, a.fbt._("Flair text", null, {
						hk: "2ab8Up"
					}), d.a.createElement(f.a, {
						text: a.fbt._("Changes the text and emojis within the user flair", null, {
							hk: "4dBW4C"
						})
					})), d.a.createElement("div", {
						className: se.a.column
					}, a.fbt._("Css class", null, {
						hk: "1TNNcJ"
					}), d.a.createElement(f.a, {
						text: a.fbt._("CSS classes determine styling for flair in old Reddit", null, {
							hk: "j4AU"
						})
					})))), t.searchTerm ? d.a.createElement(I.a, {
						cancelSearch: this.onCancelSearch,
						noResultsFound: !e.searchResult,
						searchTerm: t.searchTerm,
						searchPending: e.isSearchPending
					}, e.searchResult && this.renderUserRow(e.searchResult)) : e.isFlairedUsersListPending ? d.a.createElement(T.a, null) : r ? d.a.createElement(ne, null) : e.flairedUserOrder.map(this.renderUserRow), e.pageInfo && !t.searchTerm && d.a.createElement("div", {
						className: se.a.bottomBarRow
					}, d.a.createElement(x.a, {
						prevTo: Object(m.a)(Object(p.a)(`${e.origin}${e.currentPageUrl}`), {
							before: e.pageInfo.startCursor
						}),
						prevButtonEnabled: e.pageInfo.hasPreviousPage,
						prevButtonOnClick: this.onClickPrevPage,
						nextButtonEnabled: e.pageInfo.hasNextPage,
						nextButtonOnClick: this.onClickNextPage,
						nextTo: Object(m.a)(Object(p.a)(`${e.origin}${e.currentPageUrl}`), {
							after: e.pageInfo.endCursor
						})
					}))))
				}
			}
			t.a = Ve(Ge(Object(M.c)(ze)))
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.m.less": function(e, t, s) {
			e.exports = {
				IconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				iconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				TextWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				textWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				leftSideRectangle: "_3TLlMYjrPH9Kl9522LpSxb",
				wrapper: "_1DUKbp8va6vxOv9zemBDBi",
				subtitle: "_2J85dtk0HKQBLk8HTSWduv",
				title: "Nt8TnDvJ2BsL8KWcFQKy5"
			}
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				i = s.n(r),
				d = s("./src/lib/lessComponent.tsx");
			const l = d.a.div("IconWrapper", i.a),
				c = d.a.div("TextWrapper", i.a);

			function m(e) {
				const {
					className: t,
					color: s,
					icon: n,
					subtitle: r,
					title: d
				} = e;
				return a.a.createElement("div", {
					className: Object(o.a)(t, i.a.wrapper),
					style: s && {
						borderColor: s
					} || {}
				}, a.a.createElement("div", {
					className: i.a.leftSideRectangle,
					style: s && {
						backgroundColor: s
					} || {}
				}), n ? a.a.createElement(l, null, n) : a.a.createElement(l, null), a.a.createElement(c, null, a.a.createElement("div", {
					className: i.a.title
				}, d), r && a.a.createElement("div", {
					className: i.a.subtitle
				}, r)))
			}
		},
		"./src/reddit/components/InlineSubredditEditing/index.m.less": function(e, t, s) {
			e.exports = {
				tooltipContent: "RrvkJ7ntzKYyaCOxMJ1RM",
				title: "BE2vGjFTJ80XkdBpRRr0p",
				tooltipBody: "_2yezzi8dgIemh3F2q_kvcp",
				topRow: "_1JfvdiRxYTSKf1IIe7DUvM",
				gotIt: "_1MHKCZd72tAgyoZWvIYM-G"
			}
		},
		"./src/reddit/components/ModHub/BadgesAndEmotes/EmptyState/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_12gWQ2C_gotA8s5-CJIlq9",
				icon: "_3-Fcrds7R5ihAWPAttv3AL",
				title: "_1vL1j4mpTYI5NOR335bInG",
				subtitle: "_3FOOtAw2Q-T7szrSBAbo9i"
			}
		},
		"./src/reddit/components/ModHub/BadgesAndEmotes/TabBar/index.m.less": function(e, t, s) {
			e.exports = {
				tabBar: "_1ItRVjBpP4aLG0vg-nXbwO",
				tab: "_3A18ggmDWAI5_Fz0nDOs-z",
				selected: "_3U85C8qDDoOUoOINg-E_3S"
			}
		},
		"./src/reddit/components/ModHub/BadgesAndEmotes/index.m.less": function(e, t, s) {
			e.exports = {
				contentContainer: "_2O3bUryrh35-WVnz9Zoet5",
				content: "_1FTRfhuddBV5YzYiIzObiO",
				grid: "_3i8uEN2ZVREoZOqW0PBJKD",
				header: "_3TFv4L83k0sAQxxxDJCzh9",
				actionHeader: "_3XGx1tfvY30VXMwrnAYMfZ",
				cell: "_30GfT3S_RWhS9B1JiSCaIJ",
				imageCell: "_1mzA539xYQn08RGzbn-Rgl",
				image: "_2UKv8w6-nnOZn6-lOqv57x",
				imagePlaceholder: "_2-8LfoYIQ37smNisBTPrPA",
				title: "_2cEKePFj4PUyuqlM_8uInw",
				caption: "_33iTirQvYAUBeq5vAp6Nr6",
				timeCell: "_1EzbYLhrmLPhhpk2FFAmcj",
				actionCell: "_1JvlfJR1EFT7pnSONpgiXk",
				dropdownSelector: "_2K7txHCmQX-J_7K7zNiCM1",
				byModerator: "_3czV_FVsdvYbnimTT57vCK",
				line: "_22JqeR_rL-tI8mxRb7N8Mq",
				loadingTextLong: "_2AZFpVa_LwltM1gTwCGIDe",
				loadingTextShort: "_1LWRk2sNojXWsOI1Y85nf7"
			}
		},
		"./src/reddit/components/ModHub/BadgesAndEmotes/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return W
			})), s.d(t, "b", (function() {
				return Z
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/actions/governance/errorToast.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				c = s("./src/reddit/contexts/ApiContext.tsx"),
				m = s("./src/reddit/endpoints/economics/uploadedAssets.ts"),
				u = s("./src/reddit/models/Toast/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				b = s("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				h = s("./src/reddit/components/ModHub/BadgesAndEmotes/EmptyState/index.m.less"),
				g = s.n(h);
			const f = {
				[m.a.Uploaded]: {
					title: () => n.fbt._("No more to review!", null, {
						hk: "2rF58X"
					}),
					subtitle: () => n.fbt._("There are no new submissions", null, {
						hk: "3h54Ot"
					})
				},
				[m.a.Approved]: {
					title: () => n.fbt._("Nothing approved yet", null, {
						hk: "157fUO"
					}),
					subtitle: () => n.fbt._("Submissions will be here once you approve them", null, {
						hk: "pLc2c"
					})
				},
				[m.a.Rejected]: {
					title: () => n.fbt._("Nothing rejected yet", null, {
						hk: "1XN9kw"
					}),
					subtitle: () => n.fbt._("Submissions will be here once you reject them", null, {
						hk: "2IYFHB"
					})
				}
			};

			function x(e) {
				const t = f[e.selectedStatus];
				return o.a.createElement("div", {
					className: g.a.container
				}, o.a.createElement(b.a, {
					className: g.a.icon
				}), o.a.createElement("h3", {
					className: g.a.title
				}, t.title()), o.a.createElement("p", {
					className: g.a.subtitle
				}, t.subtitle()))
			}
			var E = s("./src/reddit/components/AuthorLink/index.tsx"),
				v = s("./src/reddit/controls/DropdownSelector/index.tsx"),
				_ = s("./src/reddit/components/ModHub/BadgesAndEmotes/index.m.less"),
				C = s.n(_);
			const k = p.a.div("cell", C.a),
				y = () => [{
					displayText: n.fbt._("New", null, {
						hk: "2xTBYx"
					}),
					value: m.a.Uploaded
				}, {
					displayText: n.fbt._("Approved", null, {
						hk: "1xx5DL"
					}),
					value: m.a.Approved
				}, {
					displayText: n.fbt._("Rejected", null, {
						hk: "25TTJE"
					}),
					value: m.a.Rejected
				}],
				S = () => y().slice(1, 3),
				O = new Intl.DateTimeFormat(void 0, {
					month: "numeric",
					day: "numeric",
					year: "numeric",
					hour: "numeric",
					minute: "numeric",
					second: "numeric"
				}).format;

			function j(e) {
				const {
					item: t,
					onItemAction: s
				} = e, a = y().find(e => e.value === t.status);
				let r = t.type === m.b.Badge ? t.extra.description : void 0;
				return r && r.endsWith(" u/" + t.uploader) && (r = r.slice(0, r.length - t.uploader.length - 3)), o.a.createElement(o.a.Fragment, null, o.a.createElement(k, {
					className: C.a.imageCell
				}, o.a.createElement("div", {
					className: C.a.image,
					style: {
						backgroundImage: `url(${t.url})`
					}
				})), o.a.createElement(k, {
					className: C.a.nameCell
				}, o.a.createElement("div", {
					className: C.a.title
				}, t.type === m.b.Emote ? `:${t.name}:` : t.name), o.a.createElement("div", {
					className: C.a.caption
				}, r, " ", o.a.createElement(E.a, {
					author: t.uploader,
					style: {
						color: t.type === m.b.Badge ? t.extra.color : void 0
					}
				}, "u/", t.uploader))), o.a.createElement(k, {
					className: C.a.timeCell
				}, O(t.createdAt)), o.a.createElement(k, {
					className: C.a.actionCell
				}, o.a.createElement(v.a, {
					className: C.a.dropdownSelector,
					displayText: a ? a.displayText : "",
					options: S(),
					onSelect: e => s(t, e.value),
					isCompactStyle: !0
				}), t.status !== m.a.Uploaded && !!t.moderator && !!t.modifiedAt && o.a.createElement("div", {
					className: C.a.byModerator
				}, n.fbt._("by u/ {moderator}, {time-modified}", [n.fbt._param("moderator", t.moderator), n.fbt._param("time-modified", O(t.modifiedAt))], {
					hk: "25I5ES"
				}))), o.a.createElement("div", {
					className: C.a.line
				}))
			}
			var w = s("./src/lib/classNames/index.ts");
			const I = p.a.div("cell", C.a),
				N = () => o.a.createElement(o.a.Fragment, null, o.a.createElement(I, {
					className: C.a.imageCell
				}, o.a.createElement("div", {
					className: Object(w.a)(C.a.image, C.a.imagePlaceholder)
				})), o.a.createElement(I, {
					className: C.a.nameCell
				}, o.a.createElement("div", {
					className: C.a.loadingTextLong
				})), o.a.createElement(I, null, o.a.createElement("div", {
					className: C.a.loadingTextShort
				})), o.a.createElement(I, {
					className: C.a.actionCell
				}, o.a.createElement("div", {
					className: C.a.loadingTextShort
				})), o.a.createElement("div", {
					className: C.a.line
				}));
			var T = () => o.a.createElement(o.a.Fragment, null, o.a.createElement(N, null), o.a.createElement(N, null), o.a.createElement(N, null), o.a.createElement(N, null));
			const {
				fbt: M
			} = s("./node_modules/fbt/lib/FbtPublic.js"), P = p.a.div("header", C.a);

			function R(e) {
				const {
					onAssetAction: t,
					assets: s,
					selectedStatus: n
				} = e;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: C.a.grid
				}, o.a.createElement(P, null, M._("Image", null, {
					hk: "3ImlXy"
				})), o.a.createElement(P, null, M._("Name and Description", null, {
					hk: "ZMWPH"
				})), o.a.createElement(P, null, M._("Submission Time", null, {
					hk: "3qPqQa"
				})), o.a.createElement(P, {
					className: C.a.actionHeader
				}, M._("Action", null, {
					hk: "27SYzP"
				})), !s && o.a.createElement(T, null), s && !!s.length && s.map(e => o.a.createElement(j, {
					item: e,
					key: e.name,
					onItemAction: t
				}))), s && !s.length && o.a.createElement(x, {
					selectedStatus: n
				}))
			}
			var F = s("./src/reddit/components/ModHub/BadgesAndEmotes/TabBar/index.m.less"),
				A = s.n(F);
			const D = e => o.a.createElement("button", {
					className: Object(w.a)(A.a.tab, {
						[A.a.selected]: e.selected
					}),
					onClick: e.onClick
				}, e.children),
				L = e => o.a.createElement("div", {
					className: A.a.tabBar
				}, [m.a.Uploaded, m.a.Approved, m.a.Rejected].map(t => o.a.createElement(D, {
					onClick: () => e.onTabSelected(t),
					selected: t === e.value,
					value: t,
					key: t
				}, (e => {
					switch (e) {
						case m.a.Uploaded:
							return n.fbt._("Uploaded", null, {
								hk: "1AgqhR"
							});
						case m.a.Approved:
							return n.fbt._("Approved", null, {
								hk: "37lIL9"
							});
						case m.a.Rejected:
							return n.fbt._("Rejected", null, {
								hk: "W16pI"
							});
						default:
							return n.fbt._("Uploaded", null, {
								hk: "1AgqhR"
							})
					}
				})(t))));

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class B extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						selectedStatus: m.a.Uploaded
					}, this.onTabChange = async e => {
						this.setState({
							assets: void 0,
							selectedStatus: e
						});
						const t = await Object(m.c)(this.props.apiContext(), this.props.subredditId, this.props.assetType, e);
						t.ok ? this.setState({
							assets: t.body.assets || []
						}) : this.props.onGovernanceError(t.error)
					}, this.onAssetAction = async (e, t) => {
						if (e.status === t) return;
						const s = this.props.assetType,
							n = await Object(m.d)(this.props.apiContext(), this.props.subredditId, s, e.id, {
								status: t
							});
						if (n.ok) {
							const n = this.state.assets;
							this.setState({
								assets: n && n.filter(t => t !== e)
							}), t === m.a.Approved ? this.props.onApproved(s) : t === m.a.Rejected && this.props.onRejected(s)
						} else this.props.onGovernanceError(n.error)
					}
				}
				componentDidMount() {
					this.onTabChange(this.state.selectedStatus)
				}
				render() {
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(l.a, {
						className: C.a.contentContainer
					}, o.a.createElement(l.b, null, this.props.assetType === m.b.Badge ? n.fbt._("User uploaded badges", null, {
						hk: "3qGdzT"
					}) : n.fbt._("User uploaded emotes", null, {
						hk: "1GJiVz"
					})), o.a.createElement("div", {
						className: C.a.content
					}, o.a.createElement(L, {
						onTabSelected: this.onTabChange,
						value: this.state.selectedStatus
					}), o.a.createElement(R, {
						selectedStatus: this.state.selectedStatus,
						assets: this.state.assets,
						onAssetAction: this.onAssetAction
					}))))
				}
			}
			const H = Object(c.b)(Object(r.b)(void 0, (e, t) => ({
					onGovernanceError: t => Object(i.a)(e, t),
					onApproved: t => e(Object(d.f)({
						kind: u.b.SuccessCommunity,
						text: t === m.b.Badge ? n.fbt._("Approved badge!", null, {
							hk: "3B3r07"
						}) : n.fbt._("Approved emote!", null, {
							hk: "tWzSE"
						})
					})),
					onRejected: t => e(Object(d.f)({
						kind: u.b.SuccessCommunity,
						text: t === m.b.Badge ? n.fbt._("Rejected badge", null, {
							hk: "1X6cSg"
						}) : n.fbt._("Rejected emote", null, {
							hk: "3RS2kT"
						})
					}))
				}))(B)),
				W = e => o.a.createElement(H, U({
					assetType: m.b.Badge
				}, e)),
				Z = e => o.a.createElement(H, U({
					assetType: m.b.Emote
				}, e))
		},
		"./src/reddit/components/ModHub/Content/NoPermissions.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/reddit/contexts/NavbarExp.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/ModHub/Content/index.m.less"),
				c = s.n(l);
			t.a = e => {
				const t = Object(o.useContext)(i.a);
				return r.a.createElement("div", {
					className: Object(d.a)(c.a.noPermissions, {
						[c.a.noPermissionsExp]: t
					})
				}, r.a.createElement("img", {
					className: c.a.rememberTheHuman,
					src: `${n.a.assetPath}/img/content-gate-icons/remember-the-human.png`
				}), e.isModerator ? a.fbt._("Sorry, you do not have the moderator permissions needed to view this page", null, {
					hk: "4wUDIF"
				}) : a.fbt._("Sorry, this is a moderator-only page", null, {
					hk: "2BZEIA"
				}), r.a.createElement("div", {
					className: c.a.noPermissionsSmallText
				}, e.isModerator ? a.fbt._("You need to change your mod permissions to view this page", null, {
					hk: "RS9sd"
				}) : e.subredditDisplayText ? a.fbt._("You must be a moderator of {subredditName} to view this page", [a.fbt._param("subredditName", e.subredditDisplayText)], {
					hk: "8eU68"
				}) : a.fbt._("You must be a moderator to view this page", null, {
					hk: "2N7TXH"
				})))
			}
		},
		"./src/reddit/components/ModHub/Content/WelcomeMessage.m.less": function(e, t, s) {
			e.exports = {
				ModerateIcon: "khXWcHNm7cUFKCGgNfNPy",
				moderateIcon: "khXWcHNm7cUFKCGgNfNPy",
				ModHubWelcomeMessage: "_1WUhYUiKwTt20VZZiLFRXQ",
				modHubWelcomeMessage: "_1WUhYUiKwTt20VZZiLFRXQ"
			}
		},
		"./src/reddit/components/ModHub/Content/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "CgYEK3BSwEitV3N5dS53Y",
				titleFontH2: "WtxSi4x3A6EHSYOlNO6dC",
				titleFontH3: "_1s8gRCw9ZEGeZdDLi4SjEs",
				titleFontH4: "iJgEN-DVO9xH1ING9PGia",
				titleFontH5: "_1Pk2HmstIcHsVCyXL0s7WR",
				titleFontH6: "_27G51xRMOXRk6p8hF2iFF4",
				metadataFont: "_3qFnOmsyfNVU4dOg-nT7AH",
				flairFont: "IHVtmv3d9vjFTy7sOv4nb",
				labelsFont: "_3veeqeCCuB-y_5Uz7aZwNo",
				actionFont: "_2GGs_1qJNsgRTBkJjB3JyV",
				smallButtonFont: "_1wMkSw4TKFwpURuJjoijc8",
				largeButtonFont: "_37n4mei_IKI2b0S9cUN6kj",
				strongTextFont: "_3iiIycx9Jvd-wtbZRRlyrS",
				tabFont: "_2uzD_ZiaRuda1gPntdeFV-",
				buttonFontXS: "X1zM6CuE0STTL567u2KEr",
				buttonFontXs: "X1zM6CuE0STTL567u2KEr",
				buttonFontS: "_35xxostuR-t_KnCQpTxb0F",
				buttonFontM: "_1siVd6fOXNWDs8SbSH_HQ5",
				buttonFontL: "_1mAbhFs88EE9k-jaJMzlbM",
				buttonFontXL: "FxQ8KBPxEROiwB1EG0sLr",
				buttonFontXl: "FxQ8KBPxEROiwB1EG0sLr",
				bodyFontH1: "_18F7ywSczMXfDxvUzIkKou",
				bodyFontH2: "_2gpSS7qXgM9-crN9KgQr_O",
				bodyFontH3: "-JM-6-h-SOMTCi9a5ZG0g",
				bodyFontH4: "_3ZVYgWzZxJjL_cahDG32l",
				bodyFontH5: "_15iJEJUM-il2Ud09a9yqhY",
				bodyFontH6: "_2kFIrTxjdWaprwQ9leev5x",
				bodyFont: "_38q9ZzND20FKMoX8BeB0u8",
				bodyFontSmall: "_1tFfFAHeLftmld2a2M4yIs",
				bodyFontMono: "_1N1SJCd40K_9LeW3MSWULf",
				rememberTheHuman: "_2S6IM2TPtTriI4r_2Op1Od",
				noPermissions: "_3jaCG74Q3u55JqGJy3u664",
				noPermissionsExp: "_30KCF1VJPMgbkHOfEhoE2p",
				noPermissionsSmallText: "_1Kxv5kLQoEOhRatEhltXrQ",
				container: "_3gsyCuYXsGWEEgPSTuX9aw",
				isLargePostLayout: "_1WGjuBpIEjcQC-x3_lE_Nu"
			}
		},
		"./src/reddit/components/ModHub/Content/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/lib/assertNever.ts"),
				i = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/components/ApprovedSubmitterList/index.tsx"),
				l = s("./src/reddit/components/BannedUserList/index.tsx"),
				c = s("./src/reddit/components/CommunityAwardList/index.tsx"),
				m = s("./src/reddit/components/CommunitySettings/index.tsx"),
				u = s("./src/reddit/components/GrantUserFlair/index.tsx"),
				p = s("./src/reddit/components/ModerationLog/index.tsx"),
				b = s("./src/reddit/components/ModeratorsList/index.tsx"),
				h = s("./src/reddit/components/ModHub/BadgesAndEmotes/index.tsx"),
				g = s("./src/reddit/components/ModHub/Emojis/index.tsx"),
				f = s("./src/reddit/components/MutedUserList/index.tsx"),
				x = s("./src/reddit/components/RemovalReasons/index.tsx"),
				E = s("./src/reddit/components/Streaming/ModSettings/index.tsx"),
				v = s("./src/reddit/components/SubredditContent/EventPostContent/index.tsx"),
				_ = s("./src/reddit/components/SubredditContent/PredictionsContent/async.ts"),
				C = s("./src/reddit/components/SubredditContent/ScheduledPostContent/index.tsx"),
				k = s("./src/reddit/components/SubredditRules/index.tsx");
			const y = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ModHub-ContentControls",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-ModHub-ContentControls").then(s.bind(null, "./src/reddit/components/ModHub/ContentControls/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ModHub/ContentControls/index.tsx"
					}
				}),
				S = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ModHub-ChatSettings",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-ModHub-ChatSettings").then(s.bind(null, "./src/reddit/components/ModHub/ChatSettings/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ModHub/ChatSettings/index.tsx"
					}
				}),
				O = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ModHub-TrafficStats",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-ModHub-TrafficStats").then(s.bind(null, "./src/reddit/components/ModHub/TrafficStats/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ModHub/TrafficStats/index.tsx"
					}
				}),
				j = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ModHub-flairs-PostFlairManagement",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("reddit-components-ModHub-flairs-PostFlairManagement~reddit-components-ModHub-flairs-UserFlairManagement"), s.e("reddit-components-ModHub-flairs-PostFlairManagement")]).then(s.bind(null, "./src/reddit/components/ModHub/flairs/PostFlairManagement/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ModHub/flairs/PostFlairManagement/index.tsx"
					}
				}),
				w = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ModHub-flairs-UserFlairManagement",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("reddit-components-ModHub-flairs-PostFlairManagement~reddit-components-ModHub-flairs-UserFlairManagement"), s.e("reddit-components-ModHub-flairs-UserFlairManagement")]).then(s.bind(null, "./src/reddit/components/ModHub/flairs/UserFlairManagement/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ModHub/flairs/UserFlairManagement/index.tsx"
					}
				}),
				I = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-Wiki-ModHubWikiManagement",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-Wiki-ModHubWikiManagement").then(s.bind(null, "./src/reddit/components/Wiki/ModHubWikiManagement/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/Wiki/ModHubWikiManagement/index.tsx"
					}
				}),
				N = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ModHub-Content-ModQueue",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ModQueuePages~reddit-components-ModHub-Content-ModQueue"), s.e("reddit-components-ModHub-Content-ModQueue")]).then(s.bind(null, "./src/reddit/components/ModHub/Content/ModQueue.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ModHub/Content/ModQueue.tsx"
					}
				}),
				T = e => {
					const {
						layout: t,
						pageName: s,
						postTypeFilter: n,
						subpageName: a,
						...T
					} = e, M = {
						...T,
						subredditId: e.subreddit.id
					};
					switch (s) {
						case i.Zb.Removal:
							return o.a.createElement(x.a, {
								subredditId: e.subreddit.id,
								sendEventWithName: e.sendEventWithName
							});
						case i.Zb.Contributors:
							return o.a.createElement(d.a, M);
						case i.Zb.Banned:
							return o.a.createElement(l.a, M);
						case i.Zb.Streaming:
							return o.a.createElement(E.a, {
								subredditName: e.subreddit.name,
								subredditId: e.subreddit.id
							});
						case i.Zb.Muted:
							return o.a.createElement(f.a, M);
						case i.Zb.Moderators:
							return o.a.createElement(b.a, M);
						case i.Zb.Modlog:
							return o.a.createElement(p.a, M);
						case i.Zb.ContentControls:
							return o.a.createElement(y, {
								subredditName: e.subreddit.name
							});
						case i.Zb.ChatSettings:
							return o.a.createElement(S, {
								subredditName: e.subreddit.name,
								subredditId: e.subreddit.id
							});
						case i.Zb.Flair:
							return o.a.createElement(u.a, {
								after: e.after,
								before: e.before,
								subredditId: e.subreddit.id
							});
						case i.Zb.PostFlair:
							return o.a.createElement(j, {
								subredditId: e.subreddit.id
							});
						case i.Zb.UserFlair:
							return o.a.createElement(w, {
								subredditId: e.subreddit.id
							});
						case i.Zb.Badges:
							return o.a.createElement(h.a, {
								subredditId: e.subreddit.id
							});
						case i.Zb.Emotes:
							return o.a.createElement(h.b, {
								subredditId: e.subreddit.id
							});
						case i.Zb.SubredditRules:
							return o.a.createElement(k.a, {
								subreddit: e.subreddit
							});
						case i.Zb.CommunitySettings:
							return o.a.createElement(m.a, {
								subredditId: e.subreddit.id,
								subpageName: e.subpageName,
								subredditName: e.subreddit.name
							});
						case i.Zb.Modqueue:
						case i.Zb.Reports:
						case i.Zb.Spam:
						case i.Zb.Edited:
						case i.Zb.Unmoderated:
							return o.a.createElement(N, {
								after: e.after,
								layout: t,
								page: e.page,
								pageName: s,
								postTypeFilter: n,
								sendEventWithName: e.sendEventWithName,
								subredditName: e.subreddit.name
							});
						case i.Zb.Awards:
							return o.a.createElement(c.a, {
								subredditOrProfile: e.subreddit,
								subredditOrProfileId: e.subreddit.id,
								moderatorPermissions: e.moderatorPermissions
							});
						case i.Zb.Emojis:
							return o.a.createElement(g.a, {
								subreddit: e.subreddit
							});
						case i.Zb.Wiki:
						case i.Zb.WikiContributors:
						case i.Zb.WikiBanned:
							return o.a.createElement(I, {
								subreddit: e.subreddit
							});
						case i.Zb.Traffic:
							return o.a.createElement(O, {
								subreddit: e.subreddit
							});
						case i.Zb.SubredditContent:
							return null;
						case i.Zb.ScheduledPostContent:
							return o.a.createElement(C.a, {
								subreddit: e.subreddit
							});
						case i.Zb.EventPostContent:
							return o.a.createElement(v.a, {
								subredditName: e.subreddit.name
							});
						case i.Zb.Predictions:
							return o.a.createElement(_.a, {
								subreddit: e.subreddit
							});
						default:
							return Object(r.a)(s)
					}
				};
			t.a = T
		},
		"./src/reddit/components/ModHub/Emojis/EmojiUploadModal/index.m.less": function(e, t, s) {
			e.exports = {
				checkbox: "_20ADRJAodM5zU1OpvNEeRz",
				checkboxText: "_21Bw38NODPHxkJ8zAXjoUZ",
				closeButton: "_3m2cog1fzR2zNYfyXI2GUB",
				emojiDisplay: "_1mMSj2QBZEQ97i-4y3-WOp",
				emojiNameDisplay: "_2lbIQVKPZ4LHDNpBLwSOps",
				imageDisplay: "_3BXziWyChS-zhQ5XC9lt4k",
				appearsIn: "_1DhToTbLLM2OC-Ze5nDwCq",
				imageTitle: "_2KrLezTGMfd18btz-KkYMi",
				modalBody: "_1PLlW-_ZV0vWQQ6LS1Z2lH",
				modalAddButton: "_1vUjBClk27uHOAYH__0rj9",
				modalCancelButton: "_23RRFTkR9NKrC22rmMDNfI",
				modFlairOnlyToggle: "_19ExxuLL5lOZW35TZFXIHf",
				modIcon: "_3ta-U9hY9R1H_BRwYv1zhl",
				modProTip: "_2yN7aUrL8peCADm-u303LV",
				modProTips: "_3WtRXJc1jCLpCEw7-mlEBU",
				proTip: "_8wjmRK1w6qEGzue3BNNOA",
				modProTipTitle: "_392GI--ZxhpUHn1eRTKzqA",
				tipList: "_3PPlagKiQrtoOsW4pcf3vc"
			}
		},
		"./src/reddit/components/ModHub/Emojis/EmojiUploader/index.m.less": function(e, t, s) {
			e.exports = {
				alertIcon: "_34rhMfrLYNSjUkhTK958Um",
				characterCountdown: "_15Hq3tMBKH4TWo9OJs8gny",
				clearIcon: "aCmT6tHKACP3PLk6IU6XT",
				duplicatesIcon: "Eq88P0Zb-rOoo4N5OL5uk",
				duplicateWarning: "DRp2YTik6Ln3yUKp7LBUv",
				editEmojiFooter: "_2ZoRiRDs45wlLK-ZnHzUh",
				editEmojiDisplay: "_2rDJJ0Uk_ySvUA9QNoKoKU",
				emojiDisplays: "_2FsakuX5ZR_IIPcwXQu0eD",
				errorText: "_3bRRwpzb2xfP5erPt9R6Cg",
				expandLeft: "_2byjR1IbLclRfoyvyjMDUz",
				iconSpacer: "_3tWeESqi0MQaqN5wKqkv68",
				imageDisplay: "_1MHWj3sdAGALX7r7UzFF0J",
				duplicateInput: "_280zGglckljUYhFjwaBt14",
				input: "_3xzW-TBy6RXHXBjCE9Yz7s",
				inputPlaceholder: "_1964bAdk8xBAb8-d_Mthtt",
				modalAddButton: "_2yQ10LXNPJ6antT2NgaTmI",
				modalCancelButton: "_31Qk2tb7PaP2XWWL2o4HM1",
				modProTip: "NSSpRN8n70A1TesDNcvxE",
				progressBar: "_3EbPa1JwqT9b_QgXnHzJsx",
				innerBarClassName: "_3CJpdsYAp2vfEOO_U7AaO8",
				progressText: "Wz5fdVLDZuS4d-ix-j4s9",
				replacingDescription: "_1oXr6AKswirSKypchDoX1n",
				replacingTitle: "oNyr5QxUcemiI3SFwjhvc",
				uploadingTitle: "_3ZEFRZKrLVT92hTIG7sRa9",
				textButton: "_3ZzQTZKV1t84-ND6HHwnsx",
				uploaderContainer: "OCFZ6HIQUbokDXiubxQEZ"
			}
		},
		"./src/reddit/components/ModHub/Emojis/index.m.less": function(e, t, s) {
			e.exports = {
				alertIcon: "_3x5p0Ujs6EWdeLO8-fVE7v",
				emojisDisabled: "_2H7y73ZptDGSake8tFEj0n",
				labelTitle: "_2R2K1Sz81kscliWYqOq1xU",
				labelDescription: "_1TqFvv__UfmckLHp5llo7q",
				leftForm: "_22aW9zYAhDGH2HdlJ-WWIM",
				modalBody: "_1_UK8ZmVC7e_nkeSs5CGnA",
				modalCloseButton: "_2-arZqA5i-aG-76OM9aj7k",
				modalEnableSection: "_2Wd3qBH4SU1NauwzVOQbVT",
				modalEmojiSizeSection: "_3PsrWxvZyoYyzlCO8-teTE",
				disabledSection: "nviCef6_SvGHUNBJ0PXCH",
				customSizesForm: "YV6F0NfRo0VVVRzgk8aWf",
				emojiSizeBlock: "_1W4FjSOnfJWdtKYBcNtUYO",
				emojiDimensions: "_1_bSuIYPhn5kOylTKydVsO",
				emojiDimensionInput: "e4AoJYmrnNFhWAXR_KBWX",
				sizeLimitText: "_3bUpAXL4dOTbZTUE9bJ_5s",
				sizeLimitTextWarning: "_2JlgfupPT3v8ScLuT7NYXC",
				modalFooter: "_2R2UP3vtcyZqyNdUy9Y0nX",
				modalSubmitButton: "w7T2GA8_RqtkSpD4h6YKH",
				modalCancelButton: "_2wvHObzKgyjObCvFZ0QOp0",
				rightForm: "_1eE1s4H4f1_A3ck0iF679O",
				row: "_2NQoOHp9q7uhb8h4XdVWK",
				displayWrapper: "jiCIuKa0E1BjfGfUV407r",
				emojiDisplay: "_32BxZer8uLzSVJMZqqo95_",
				emojiName: "_2hJHG1X01WKzuznOL4l6ge",
				appears: "ZVOiCMvsomJLwhS8k4VPP",
				permissions: "UxdnKubszq3iR9sJGFwiY",
				buttonWrapper: "PflXNgwgKckPGaFe9wW8V",
				editEmoji: "_3RR0-7gyjso1AHuVhVbb6u",
				editSnoomoji: "FCFv4UPC_NQjiTCEBoOCD",
				trashIcon: "_2l2KeCLkXUEz_czKdpFqSw",
				settingsButton: "_2dh14d_OrE4Etrg44_cb4t",
				toggleSwitch: "_17kocpcRdOCXJwPiOk68B-",
				topRow: "_2oevuimQpT3hztJ5Rpf_hy",
				appearsTitle: "_1Qzxm6lOFpTR3O3hzKloA9",
				imageTitle: "_1NOoO9mz09cpZjIRT9nHTh",
				nameTitle: "_1Ra9yqtrrSj9q0akrKs83v",
				permissionsTitle: "_1gNO8_Ywz6va1MbMV7-jDG",
				titleTooltip: "_279Uba_Gpg0WVLV8efIdK_"
			}
		},
		"./src/reddit/components/ModHub/Emojis/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/map.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				d = s.n(i),
				l = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/actions/emoji.ts"),
				p = s("./src/reddit/actions/modal.ts"),
				b = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				h = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				g = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				f = s("./src/reddit/components/ModHub/InfoTooltip/index.tsx"),
				x = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				E = s("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				v = s("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = s("./src/reddit/constants/colors.ts"),
				C = s("./src/reddit/controls/Button/index.tsx"),
				k = s("./src/reddit/selectors/telemetry.ts");
			const y = e => ({
					subreddit: k.subreddit(e),
					profile: k.profile(e),
					userSubreddit: k.userSubreddit(e)
				}),
				S = (e, t) => s => ({
					source: "emoji",
					action: "toggle",
					noun: e,
					actionInfo: {
						settingValue: t ? "on" : "off"
					},
					...y(s)
				}),
				O = e => t => ({
					source: "emoji",
					action: "click",
					noun: e,
					...y(t)
				}),
				j = (e, t) => s => ({
					source: "emoji",
					action: "click",
					noun: e,
					actionInfo: k.actionInfo(s, {
						count: t
					}),
					...y(s)
				});
			var w = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				I = s("./src/reddit/selectors/activeModalId.ts"),
				N = s("./src/reddit/selectors/emojis.ts"),
				T = s("./src/reddit/components/ModHub/Emojis/index.m.less"),
				M = s.n(T),
				P = s("./src/reddit/controls/ImageDisplay/index.tsx"),
				R = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				F = s("./src/reddit/layout/row/Inline/index.tsx");
			const A = m.a.span("appears", M.a),
				D = m.a.span("buttonWrapper", M.a),
				L = m.a.span("displayWrapper", M.a),
				U = m.a.wrapped(P.a, "emojiDisplay", M.a),
				B = m.a.span("emojiName", M.a),
				H = m.a.span("permissions", M.a),
				W = m.a.wrapped(F.a, "row", M.a),
				Z = m.a.wrapped(R.b, "trashIcon", M.a);
			var V = e => d.a.createElement(W, null, d.a.createElement(L, null, d.a.createElement(U, {
					backgroundImage: e.emoji.url
				})), d.a.createElement(B, null, e.emoji.name), d.a.createElement(A, null, ((e, t) => e && t ? a.fbt._("Post flair, user flair", null, {
					hk: "gLvKb"
				}) : e ? a.fbt._("Post flair", null, {
					hk: "dcIoz"
				}) : t ? a.fbt._("User flair", null, {
					hk: "4fQagx"
				}) : "")(e.emoji.postFlairAllowed, e.emoji.userFlairAllowed)), d.a.createElement(H, null, e.emoji.modFlairOnly && a.fbt._("Mod only", null, {
					hk: "NMZoE"
				})), d.a.createElement(D, null, d.a.createElement(C.o, {
					className: e.isSnoomoji ? M.a.editSnoomoji : M.a.editEmoji,
					onClick: () => e.onEdit(e.emoji, e.isSnoomoji)
				}, a.fbt._("Edit", null, {
					hk: "1nftDt"
				})), !e.isSnoomoji && d.a.createElement("button", {
					onClick: () => e.onRemove(e.emoji.name)
				}, d.a.createElement(Z, null)))),
				q = s("./node_modules/lodash/clamp.js"),
				G = s.n(q),
				z = s("./src/higherOrderComponents/asModal/index.tsx"),
				K = s("./src/lib/classNames/index.ts"),
				Q = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				J = s("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				X = s("./src/reddit/controls/TextButton/index.tsx"),
				Y = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				$ = s("./src/reddit/selectors/subreddit.ts"),
				ee = s("./src/reddit/controls/ToggleSwitch/index.tsx");
			const te = m.a.span("labelDescription", M.a),
				se = m.a.span("labelTitle", M.a),
				ne = m.a.div("leftForm", M.a),
				ae = m.a.div("rightForm", M.a),
				oe = m.a.wrapped(ee.a, "toggleSwitch", M.a);
			var re = e => d.a.createElement("div", {
				className: e.className
			}, d.a.createElement(ne, null, d.a.createElement(se, null, a.fbt._("{title}", [a.fbt._param("title", e.title)], {
				hk: "4bYhaP"
			})), d.a.createElement(te, null, a.fbt._("{description}", [a.fbt._param("description", e.description)], {
				hk: "1lFxbr"
			}))), d.a.createElement(ae, null, d.a.createElement(oe, {
				on: e.on,
				onToggle: e.onToggle
			})));
			const ie = 40,
				de = 16,
				le = {
					width: 32,
					height: 32
				},
				ce = e => {
					const t = parseInt(e, 10) || 0;
					return G()(t, 1, ie)
				},
				me = m.a.wrapped(J.c, "emojiDimensionInput", M.a),
				ue = m.a.span("emojiDimensions", M.a),
				pe = m.a.span("emojiSizeBlock", M.a),
				be = m.a.wrapped(re, "modalEnableSection", M.a),
				he = m.a.wrapped(Q.d, "modalBody", M.a),
				ge = m.a.wrapped(Q.a, "modalCancelButton", M.a),
				fe = m.a.wrapped(X.a, "modalCloseButton", M.a),
				xe = m.a.wrapped(Q.f, "modalFooter", M.a),
				Ee = m.a.wrapped(C.i, "modalSubmitButton", M.a),
				ve = Object(c.c)({
					emojisCustomSize: (e, t) => Object($.v)(e, {
						subredditName: t.subreddit.name
					}).emojisCustomSize,
					isEmojisEnabled: (e, t) => Object($.v)(e, {
						subredditName: t.subreddit.name
					}).emojisEnabled
				}),
				_e = Object(l.b)(ve, (e, {
					subreddit: t
				}) => ({
					setCustomSize: s => e(Object(u.n)(t.id, s)),
					toggleEnableEmojis: s => e(Object(u.k)(t.id, s))
				}));
			class Ce extends d.a.Component {
				constructor(e) {
					super(e), this.handleEmojiSizesToggle = () => this.setState({
						customSizeEnabled: !this.state.customSizeEnabled
					}), this.handleEnableEmojisToggle = () => this.setState({
						emojisEnabled: !this.state.emojisEnabled
					}), this.handleWidthChange = e => {
						const t = ce(e.target.value);
						this.setState({
							width: t
						})
					}, this.handleHeightChange = e => {
						const t = ce(e.target.value);
						this.setState({
							height: t
						})
					}, this.enableHasBeenToggled = () => this.props.isEmojisEnabled !== this.state.emojisEnabled, this.sizeHasBeenToggled = () => !!this.props.emojisCustomSize !== this.state.customSizeEnabled, this.sizeHasBeenEdited = () => !(!this.props.emojisCustomSize || !this.state.customSizeEnabled) && (this.props.emojisCustomSize[0] !== this.state.width || this.props.emojisCustomSize[1] !== this.state.height), this.canSave = () => this.enableHasBeenToggled() || this.sizeHasBeenToggled() || this.sizeHasBeenEdited(), this.onSave = () => {
						const {
							props: e,
							state: t
						} = this;
						if (this.enableHasBeenToggled() && (e.toggleEnableEmojis(t.emojisEnabled), e.sendEvent(S("enable", t.emojisEnabled))), this.sizeHasBeenToggled() || this.sizeHasBeenEdited()) {
							const s = t.customSizeEnabled ? {
								width: Math.max(t.width, de),
								height: Math.max(t.height, de)
							} : void 0;
							e.setCustomSize(s), e.sendEvent(S("custom_sizing", t.customSizeEnabled))
						}
						e.toggleModal(), e.sendEvent(O("save_emoji_settings"))
					}, this.state = {
						customSizeEnabled: !!e.emojisCustomSize,
						emojisEnabled: e.isEmojisEnabled,
						height: e.emojisCustomSize ? e.emojisCustomSize[1] : le.height,
						width: e.emojisCustomSize ? e.emojisCustomSize[0] : le.width
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, s = t.customSizeEnabled && (t.width < de || t.height < de), n = s ? a.fbt._("Invalid number, must be between {minSize} to {maxSize}px", [a.fbt._param("minSize", de.toString()), a.fbt._param("maxSize", ie.toString())], {
						hk: "3bkWk5"
					}) : a.fbt._("Must be between {minSize} to {maxSize}px", [a.fbt._param("minSize", de.toString()), a.fbt._param("maxSize", ie.toString())], {
						hk: "1Gp9cj"
					});
					return d.a.createElement(he, null, d.a.createElement(Q.h, null, d.a.createElement(Y.a, null, d.a.createElement(Q.p, null, a.fbt._("Emoji settings", null, {
						hk: "1GjUM3"
					})), d.a.createElement(fe, {
						onClick: e.toggleModal
					}, d.a.createElement(Q.b, null)))), d.a.createElement(Q.k, null, d.a.createElement(be, {
						description: "Allow emojis to be used in post and user flair within your community",
						on: t.emojisEnabled,
						onToggle: this.handleEnableEmojisToggle,
						title: "Enable emojis in this community"
					}), d.a.createElement(re, {
						className: t.emojisEnabled ? M.a.modalEmojiSizeSection : Object(K.a)(M.a.modalEmojiSizeSection, M.a.disabledSection),
						description: "Enables emojis to be displayed at custom sizes for user flair in comments. Emojis will be displayed 16 x 16px everywhere else.",
						on: t.customSizeEnabled,
						onToggle: this.handleEmojiSizesToggle,
						title: "Custom sized emojis"
					}), d.a.createElement("span", {
						className: t.emojisEnabled && t.customSizeEnabled ? M.a.customSizesForm : Object(K.a)(M.a.customSizesForm, M.a.disabledSection)
					}, d.a.createElement(pe, null, d.a.createElement(ue, null, a.fbt._("Width", null, {
						hk: "3jjMQm"
					})), d.a.createElement(me, {
						disabled: !t.customSizeEnabled || !t.emojisEnabled,
						name: "width",
						onChange: this.handleWidthChange,
						value: t.width
					})), d.a.createElement(pe, null, d.a.createElement(ue, null, a.fbt._("Height", null, {
						hk: "3nMJXk"
					})), d.a.createElement(me, {
						disabled: !t.customSizeEnabled || !t.emojisEnabled,
						name: "height",
						onChange: this.handleHeightChange,
						value: t.height
					})), d.a.createElement("div", {
						className: s ? M.a.sizeLimitTextWarning : M.a.sizeLimitText
					}, n))), d.a.createElement(xe, null, d.a.createElement(ge, {
						onClick: e.toggleModal
					}, a.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), d.a.createElement(Ee, {
						disabled: !this.canSave() || s,
						onClick: this.onSave
					}, a.fbt._("Save", null, {
						hk: "45QjJC"
					}))))
				}
			}
			var ke = Object(z.a)(_e(Ce)),
				ye = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/actions/toaster.ts")),
				Se = s("./src/reddit/components/StructuredStyles/ImageUpload/index.tsx"),
				Oe = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				je = s("./src/reddit/controls/CheckboxInput/index.tsx"),
				we = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				Ie = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				Ne = s("./src/reddit/models/Image/index.tsx"),
				Te = s("./src/reddit/models/Toast/index.ts"),
				Me = s("./src/reddit/components/ModHub/Emojis/EmojiUploadModal/index.m.less"),
				Pe = s.n(Me),
				Re = s("./src/higherOrderComponents/withImageUploads.tsx"),
				Fe = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				Ae = s("./src/reddit/models/Emoji/index.ts"),
				De = s("./src/reddit/components/ModHub/Emojis/EmojiUploader/index.m.less"),
				Le = s.n(De),
				Ue = s("./src/reddit/components/CharacterCountdown/index.tsx"),
				Be = s("./src/reddit/components/ProgressBar/index.tsx"),
				He = s("./src/reddit/controls/ErrorText/index.tsx");
			const We = 5,
				Ze = 95,
				Ve = 600,
				qe = 100;
			class Ge extends d.a.Component {
				constructor() {
					super(...arguments), this.intervalToken = 0, this.state = {
						timeStarted: Date.now(),
						percent: We
					}, this.tick = () => {
						const e = function(e) {
							const t = e / Ve,
								s = (Math.log(t / 10) + 3) / 2.1;
							return Math.max(Ze, Math.min(We, 100 * s))
						}(Date.now() - this.state.timeStarted);
						this.setState({
							percent: e
						}), e === Ze && this.intervalToken && window.clearInterval(this.intervalToken)
					}
				}
				componentDidMount() {
					this.intervalToken = window.setInterval(this.tick, qe)
				}
				componentWillUnmount() {
					this.intervalToken && window.clearInterval(this.intervalToken)
				}
				render() {
					return d.a.createElement(Be.a, {
						className: Le.a.progressBar,
						innerBarClassName: Le.a.innerBarClassName,
						percent: this.state.percent
					})
				}
			}
			var ze = Ge;
			const Ke = m.a.wrapped(Ue.a, "characterCountdown", Le.a),
				Qe = m.a.wrapped(Fe.a, "clearIcon", Le.a),
				Je = m.a.wrapped(He.b, "errorText", Le.a),
				Xe = m.a.wrapped(Y.a, "expandLeft", Le.a),
				Ye = m.a.div("iconSpacer", Le.a),
				$e = m.a.wrapped(P.a, "imageDisplay", Le.a),
				et = m.a.div("inputPlaceholder", Le.a),
				tt = m.a.wrapped(Y.a, "inputPlaceholder", Le.a),
				st = m.a.wrapped(X.a, "textButton", Le.a);
			class nt extends d.a.Component {
				constructor() {
					super(...arguments), this.handleChangeEmojiName = e => {
						this.props.onChangeEmojiName && this.props.onChangeEmojiName(this.props.index, e.target.value)
					}, this.handleRemove = e => {
						this.props.onCancel(this.props.index)
					}, this.renderContent = () => {
						const {
							emojiName: e,
							errorText: t,
							fileName: s,
							handleRetry: n,
							imageData: o,
							isDuplicate: r
						} = this.props;
						switch (o.kind) {
							case Ne.b.NotUploaded:
							case Ne.b.Pending:
								return d.a.createElement("div", null, d.a.createElement(tt, null, o.kind === Ne.b.NotUploaded ? d.a.createElement(ze, null) : d.a.createElement(Be.a, {
									className: Le.a.progressBar,
									innerBarClassName: Le.a.innerBarClassName,
									percent: 0
								}), d.a.createElement(st, {
									onClick: this.handleRemove
								}, a.fbt._("Cancel", null, {
									hk: "2TSLl5"
								}))), d.a.createElement(Oe.b, null, a.fbt._("Uploading {fileName}", [a.fbt._param("fileName", s)], {
									hk: "NIxvK"
								})));
							case Ne.b.FailedToUpload:
							case Ne.b.Invalid:
								return d.a.createElement("div", null, d.a.createElement(tt, null, a.fbt._("Failed to upload", null, {
									hk: "2LBRW2"
								}), n ? d.a.createElement(st, {
									onClick: n
								}, a.fbt._("Retry", null, {
									hk: "3EwbaK"
								})) : d.a.createElement(st, {
									onClick: this.handleRemove
								}, a.fbt._("Remove", null, {
									hk: "alTFO"
								}))), t && d.a.createElement(Je, null, t));
							case Ne.b.Uploaded:
								return d.a.createElement(et, null, a.fbt._("Saved", null, {
									hk: "2xDFZZ"
								}));
							default:
								return d.a.createElement("div", null, d.a.createElement(J.c, {
									className: r ? Le.a.duplicateInput : Le.a.input,
									onChange: this.handleChangeEmojiName,
									placeholder: a.fbt._("Emoji name", null, {
										hk: "UpQdA"
									}),
									value: e
								}), d.a.createElement(Xe, null, d.a.createElement(Ke, {
									maxChars: Ae.d,
									text: e
								}), d.a.createElement(st, {
									onClick: this.handleRemove
								}, a.fbt._("Remove", null, {
									hk: "4rJmk"
								}))), t && d.a.createElement(Je, null, t))
						}
					}
				}
				render() {
					const {
						emojiName: e,
						imageData: t,
						isSaving: s
					} = this.props;
					return s ? d.a.createElement(d.a.Fragment, null, d.a.createElement(et, null, d.a.createElement(ze, null)), d.a.createElement(Oe.b, null, a.fbt._("Saving {emojiName}", [a.fbt._param("emojiName", e)], {
						hk: "3lMST7"
					}))) : d.a.createElement(Ie.a, null, t.kind === Ne.b.FailedToUpload || t.kind === Ne.b.Invalid ? d.a.createElement(Ye, null, d.a.createElement(Qe, null)) : d.a.createElement($e, {
						backgroundImage: t.url
					}), this.renderContent())
				}
			}
			var at = nt,
				ot = s("./node_modules/lodash/countBy.js"),
				rt = s.n(ot),
				it = s("./node_modules/lodash/filter.js"),
				dt = s.n(it),
				lt = s("./node_modules/lodash/includes.js"),
				ct = s.n(lt),
				mt = s("./node_modules/lodash/transform.js"),
				ut = s.n(mt);
			const pt = /^[A-Za-z0-9_-]{1,24}$/,
				bt = ["reddit", "snoo", "spez"],
				ht = (e, t, s) => !pt.test(e) || !s && (e => {
					const t = e.toLowerCase();
					return bt.reduce((e, s) => e || -1 !== t.indexOf(s), !1)
				})(e) ? a.fbt._("Invalid emoji name", null, {
					hk: "2Oromm"
				}) : ct()(t, e) ? a.fbt._("This name is already taken", null, {
					hk: "4dwdJL"
				}) : "",
				gt = e => e.name ? e.name.replace(/\.[^.]*$/, "").replace(/[^A-Za-z0-9_-]/g, " ").trim().replace(/ +/g, "_").slice(0, 24) : "",
				ft = (e, t) => (t.kind !== Ne.b.TempUploaded || !e.emojiNameError && !e.isNameMissing) && (t.kind !== Ne.b.NotUploaded && t.kind !== Ne.b.Pending),
				xt = e => {
					let t = "";
					return e.file.size > Ae.a ? t = "file-size-error" : (e.height > Ae.b || e.width > Ae.c) && (t = "image-size-error"), {
						emojiNameError: "",
						imageError: t,
						name: gt(e.file),
						fileName: e.file.name,
						isNameMissing: !1
					}
				},
				Et = (e, t) => t.reduce((t, s) => s.kind === e ? t + 1 : t, 0),
				vt = (e, t) => {
					const {
						emojiNameError: s,
						imageError: n,
						isNameMissing: o
					} = t;
					let r = "";
					e.kind === Ne.b.FailedToUpload && (r = e.error.fields && e.error.fields.length ? e.error.fields[0].msg : a.fbt._("Something went wrong", null, {
						hk: "2fCWXR"
					}));
					const i = r || !1,
						d = s || !!o && a.fbt._("Emoji name is required", null, {
							hk: "4sL3l7"
						});
					let l = "";
					return "file-size-error" === n ? l = a.fbt._("File size too large", null, {
						hk: "EksGU"
					}) : "image-size-error" === n && (l = a.fbt._("Image size too large", null, {
						hk: "1xjOmq"
					})), l || i || d || ""
				},
				_t = e => {
					const t = dt()(e, e => !e.emojiNameError && !e.imageError),
						s = rt()(t, e => e.name);
					return ut()(s, (e, t, s) => {
						t > 1 && e.push(s)
					}, [])
				},
				Ct = 500,
				kt = m.a.div("UploaderContainer", Le.a),
				yt = m.a.wrapped(w.a, "alertIcon", Le.a),
				St = m.a.wrapped(Fe.a, "duplicatesIcon", Le.a),
				Ot = m.a.wrapped(Q.o, "duplicateWarning", Le.a),
				jt = m.a.wrapped(C.i, "modalAddButton", Le.a),
				wt = m.a.wrapped(Q.a, "modalCancelButton", Le.a),
				It = m.a.div("uploaderContainer", Le.a),
				Nt = m.a.wrapped(Q.o, "modProTip", Le.a),
				Tt = m.a.div("progressText", Le.a),
				Mt = m.a.wrapped(Q.o, "replacingDescription", Le.a),
				Pt = m.a.div("replacingTitle", Le.a),
				Rt = m.a.div("uploadingTitle", Le.a),
				Ft = Object(c.c)({
					emojis: N.d,
					isSnoomojiSubreddit: $.k,
					reservedEmojiNames: N.e
				}),
				At = Object(l.b)(Ft, (e, {
					subredditId: t
				}) => ({
					emojisUploadedToast: () => e(ye.f({
						kind: Te.b.SuccessCommunityGreen,
						text: a.fbt._("New emojis added!", null, {
							hk: "1Q1mEq"
						})
					})),
					saveEmoji: (s, n, a) => e(Object(u.p)({
						imageData: s,
						subredditId: t,
						emojiName: n,
						settings: a
					}))
				}));
			class Dt extends d.a.Component {
				constructor(e) {
					super(e), this.timeoutToken = 0, this.loadIndex = 0, this.tempUploadNext = async () => {
						const e = this.getNextPendingImageToLoad();
						if (!e) return this.timeoutToken = 0, void(this.loadIndex = 0);
						const {
							subredditId: t
						} = this.props, s = this.state.emojiData[e.id], n = Object(Ne.m)(e);
						await this.props.uploadImage({
							imageData: n,
							subredditId: t,
							emojiName: s.name,
							settings: this.props.emojiSettings
						}), this.loadIndex += 1, this.loadIndex < this.state.localData.length ? this.timeoutToken = window.setTimeout(this.tempUploadNext, Ct) : (this.loadIndex = 0, this.timeoutToken = 0)
					}, this.emojiIsADuplicate = (e, t) => e && t && t.some(t => t.id === e.id), this.saveNext = e => {
						const t = this.getNextTempUploadedImageToSave();
						if (!t) return this.timeoutToken = 0, void(this.loadIndex = 0);
						if (!this.emojiIsADuplicate(t, e)) {
							const e = this.state.emojiData[t.id],
								s = this.props.saveEmoji(t, e.name, this.props.emojiSettings);
							this.setState({
								emojisUploaded: this.state.emojisUploaded || s
							})
						}
						this.loadIndex += 1, this.loadIndex < this.state.localData.length ? this.timeoutToken = window.setTimeout(() => this.saveNext(e), Ct) : (this.loadIndex = 0, this.timeoutToken = 0)
					}, this.onChangeEmojiName = (e, t) => {
						const {
							isSnoomojiSubreddit: s,
							reservedEmojiNames: n
						} = this.props;
						if (t.length > Ae.d) return;
						const a = this.state.isReplacing ? this.state.replacingEmoji && this.state.replacingEmoji[e] : this.state.localData[e];
						if (!a) return;
						const o = this.state.emojiData,
							r = o[a.id],
							i = t ? ht(t, n, s) : "";
						o[a.id].emojiNameError = i, o[a.id].name = t;
						const d = _t(o);
						this.setState({
							duplicateNames: d,
							emojiData: {
								...this.state.emojiData,
								[a.id]: {
									...r,
									emojiNameError: i,
									isNameMissing: !t,
									name: t
								}
							}
						})
					}, this.canSave = () => {
						let e = !1;
						for (const t of this.state.localData) {
							if (!ft(this.state.emojiData[t.id], t)) return !1;
							t.kind === Ne.b.TempUploaded && (e = !0)
						}
						return e
					}, this.getValidatedState = () => {
						const {
							isSnoomojiSubreddit: e,
							reservedEmojiNames: t
						} = this.props, s = {};
						for (const n of this.state.localData) {
							let a = this.state.emojiData[n.id];
							const o = ht(a.name, t, e);
							a.name && !o || (a = {
								...a,
								emojiNameError: o,
								isNameMissing: !a.name
							}), s[n.id] = a
						}
						return {
							emojiData: s
						}
					}, this.onApply = () => {
						const e = this.getValidatedState();
						this.setState(e, () => {
							if (this.canSave()) {
								const e = this.props.emojis[this.props.subredditId].emojis,
									t = [];
								for (const n of this.state.localData) {
									if (n.kind !== Ne.b.TempUploaded) continue;
									this.state.emojiData[n.id].name in e && t.push(n)
								}
								t.length ? (this.setState({
									replacingEmoji: t,
									isReplacing: !0
								}), this.saveNext(t)) : (this.setState({
									isSavingImage: !0
								}), this.props.setIsSaving(!0), this.saveNext());
								const s = Et(Ne.b.TempUploaded, this.state.localData) - t.length;
								s > 0 && (this.props.sendEvent(j("add", s)), this.sendSettingsEvent())
							}
						})
					}, this.sendSettingsEvent = () => {
						const {
							modFlairOnly: e,
							userFlairAllowed: t,
							postFlairAllowed: s
						} = this.props.emojiSettings;
						this.props.sendEvent(S("mods_only", e)), this.props.sendEvent(S("appear_user_flair", t)), this.props.sendEvent(S("appear_post_flair", s))
					}, this.handleSaveAndReplace = () => {
						this.setState({
							isReplacing: !1,
							isSavingImage: !0
						}), this.props.setIsSaving(!0);
						const {
							replacingEmoji: e
						} = this.state, t = e ? e.length : 0;
						this.saveNext(), t > 0 && (this.props.sendEvent(j("replace", t)), this.sendSettingsEvent())
					}, this.handleCancelReplace = () => {
						this.setState({
							isReplacing: !1,
							replacingEmoji: null
						}), this.props.stopEditing(), this.props.sendEvent(O("dont_replace"))
					}, this.findEmojiIndexById = e => this.state.localData.findIndex(t => t.id === e), this.removeEmoji = e => {
						const {
							isReplacing: t,
							localData: s,
							replacingEmoji: n
						} = this.state;
						let a, o = e;
						t && n && n[e] && (o = this.findEmojiIndexById(n[e].id), (a = n.slice(0)).splice(e, 1), this.setState({
							replacingEmoji: a
						}));
						const r = s[o],
							i = s.slice(0);
						i.splice(o, 1);
						const d = {
							...this.state.emojiData
						};
						delete d[r.id], this.setState({
							duplicateNames: _t(d),
							emojiData: d,
							localData: i
						}), t && n ? 0 === a.length && this.props.returnToAddState() : 0 === i.length && this.props.returnToAddState()
					}, this.retryEmojiUpload = () => {
						this.props.returnToAddState()
					};
					const t = {},
						s = [];
					for (const n of e.images) {
						const e = xt(n);
						t[n.id] = e, e.imageError ? s.push(Object(Ne.l)(n, e.imageError)) : s.push(n)
					}
					this.state = {
						duplicateNames: _t(t),
						emojiData: t,
						emojisUploaded: !1,
						isReplacing: !1,
						isSavingImage: !1,
						localData: s,
						replacingEmoji: null
					}
				}
				UNSAFE_componentWillMount() {
					this.loadIndex = 0, this.tempUploadNext()
				}
				getNextPendingImageToLoad() {
					let e, t = null;
					for (e = this.loadIndex; e < this.state.localData.length; e++) {
						const s = this.state.localData[e];
						if (s.kind === Ne.b.Pending) {
							t = s;
							break
						}
					}
					return this.loadIndex = e, t
				}
				getNextTempUploadedImageToSave() {
					let e, t = null;
					for (e = this.loadIndex; e < this.state.localData.length; e++) {
						const s = this.state.localData[e];
						if (s.kind === Ne.b.TempUploaded) {
							t = s;
							break
						}
					}
					return this.loadIndex = e, t
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = e.getImageUploadsIfModified(this.state.localData);
					if (!t) return;
					let s = !1;
					const {
						isSavingImage: n
					} = this.state, a = {};
					for (const o of t) a[o.id] = this.state.emojiData[o.id], s = s || o.kind === Ne.b.TempUploaded;
					!n || s ? (this.props.setIsSaving(n), this.setState({
						emojiData: a,
						isSavingImage: n,
						localData: t
					})) : this.props.stopEditing()
				}
				componentWillUnmount() {
					for (const e of this.state.localData) this.props.cancelUpload(e);
					this.timeoutToken && window.clearTimeout(this.timeoutToken), this.state.emojisUploaded && this.props.emojisUploadedToast(), this.setState({
						emojisUploaded: !1,
						isReplacing: !1
					})
				}
				render() {
					const {
						props: e,
						state: t
					} = this, s = t.isReplacing ? t.replacingEmoji || [] : t.localData;
					return d.a.createElement(kt, null, d.a.createElement(It, null, t.duplicateNames.length > 0 ? d.a.createElement(Ot, null, d.a.createElement(St, null), a.fbt._("Duplicate names", null, {
						hk: "4kkNr1"
					})) : !t.isReplacing && d.a.createElement(Nt, null, d.a.createElement(yt, null), a.fbt._("Names cannot be edited once added", null, {
						hk: "3f45r5"
					})), d.a.createElement(Q.k, null, t.isReplacing ? d.a.createElement(d.a.Fragment, null, d.a.createElement(Pt, null, a.fbt._("Replacing emojis", null, {
						hk: "4cKike"
					})), d.a.createElement(Mt, null, a.fbt._("These emoji names already exist in your community. Replacing these emojis will not change pre-existing permissions. Do you want to replace them?", null, {
						hk: "3iPBUU"
					}))) : d.a.createElement(Rt, null, a.fbt._("Uploading emojis", null, {
						hk: "7keSV"
					})), d.a.createElement("div", {
						className: t.isReplacing ? void 0 : Le.a.emojiDisplays
					}, s.map((e, s) => {
						const n = this.state.emojiData[e.id],
							a = e.kind === Ne.b.FailedToUpload || e.kind === Ne.b.Invalid,
							o = t.replacingEmoji && !t.replacingEmoji.find(t => t.id === e.id);
						if (t.isSavingImage && (a || o)) return;
						const r = vt(e, n);
						return d.a.createElement(Oe.a, {
							key: e.id
						}, d.a.createElement(at, {
							emojiName: n.name,
							errorText: r,
							fileName: n.fileName,
							imageData: e,
							index: s,
							isDuplicate: t.duplicateNames.includes(n.name),
							isSaving: t.isSavingImage,
							onCancel: this.removeEmoji,
							onChangeEmojiName: this.onChangeEmojiName
						}))
					})), !t.isReplacing && d.a.createElement(Tt, null, t.isSavingImage ? a.fbt._("{savedCount} out of {savedTotal} saved", [a.fbt._param("savedCount", Et(Ne.b.Uploaded, t.localData).toString()), a.fbt._param("savedTotal", t.localData.length.toString())], {
						hk: "3v1E9N"
					}) : a.fbt._("{uploadedCount} out of {uploadedTotal} uploaded", [a.fbt._param("uploadedCount", Et(Ne.b.TempUploaded, t.localData).toString()), a.fbt._param("uploadedTotal", t.localData.length.toString())], {
						hk: "41qbSa"
					})))), d.a.createElement(Q.f, null, d.a.createElement(wt, {
						disabled: t.isSavingImage,
						onClick: t.isReplacing ? this.handleCancelReplace : e.stopEditing
					}, t.isReplacing ? a.fbt._("Don't replace", null, {
						hk: "4d8hwM"
					}) : a.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), d.a.createElement(jt, {
						disabled: t.isSavingImage || !this.canSave() || t.duplicateNames.length > 0,
						onClick: t.isReplacing ? this.handleSaveAndReplace : this.onApply
					}, t.isReplacing ? a.fbt._("Replace", null, {
						hk: "45noqB"
					}) : a.fbt._("Add", null, {
						hk: "2wi3d4"
					}))))
				}
			}
			var Lt = Object(Re.a)(At(Dt), u.q),
				Ut = s("./src/reddit/actions/imageUploads.ts"),
				Bt = s("./src/reddit/selectors/imageUploads.ts");
			const Ht = m.a.div("UploaderContainer", Le.a),
				Wt = m.a.wrapped(Ht, "editEmojiDisplay", Le.a),
				Zt = Object(c.c)({
					reduxImage: (e, {
						pendingImage: t
					}) => {
						const s = Object(Bt.b)(e),
							n = t && t.id;
						return n && s[n] || void 0
					}
				});
			class Vt extends d.a.Component {
				constructor(e) {
					super(e), this.onCancelAndRetry = () => {
						this.props.reduxImage && this.props.cancelUpload(this.props.reduxImage), this.props.onRetryUpload()
					}
				}
				componentDidMount() {
					const e = Object(Ne.m)(this.props.pendingImage);
					this.props.uploadImage({
						imageData: e,
						subredditId: this.props.subredditId,
						emojiName: this.props.emoji.name,
						settings: this.props.emojiSettings
					})
				}
				componentDidUpdate(e) {
					this.props.reduxImage && this.props.reduxImage !== e.reduxImage && this.props.onImageChange(this.props.reduxImage)
				}
				componentWillUnmount() {
					this.props.reduxImage && this.props.cancelUpload(this.props.reduxImage)
				}
				render() {
					const {
						pendingImage: e,
						reduxImage: t,
						emoji: s
					} = this.props, n = xt(e), a = Object(Ne.l)(e, n.imageError), o = n.imageError ? a : t || e, r = vt(o, n);
					return !r && o.kind === Ne.b.TempUploaded || o.kind === Ne.b.Uploaded ? null : d.a.createElement(Wt, null, d.a.createElement(at, {
						emojiName: s.name,
						errorText: r,
						fileName: n.fileName,
						handleRetry: this.onCancelAndRetry,
						imageData: o,
						index: 0,
						isSaving: !1,
						onCancel: this.onCancelAndRetry
					}))
				}
			}
			var qt = Object(l.b)(Zt, e => ({
				uploadImage: t => e(Object(u.q)(t)),
				cancelUpload: t => e(Object(Ut.h)(t))
			}))(Vt);

			function Gt() {
				return (Gt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const zt = 32,
				Kt = 128,
				Qt = 64,
				Jt = 100,
				Xt = m.a.div("appearsIn", Pe.a),
				Yt = m.a.wrapped(je.a, "checkbox", Pe.a),
				$t = m.a.span("checkboxText", Pe.a),
				es = m.a.wrapped(X.a, "closeButton", Pe.a),
				ts = m.a.div("imageTitle", Pe.a),
				ss = m.a.wrapped(C.i, "modalAddButton", Pe.a),
				ns = m.a.wrapped(Q.d, "modalBody", Pe.a),
				as = m.a.wrapped(Q.a, "modalCancelButton", Pe.a),
				os = m.a.wrapped(Q.k, "modalMain", Pe.a),
				rs = m.a.wrapped(re, "modFlairOnlyToggle", Pe.a),
				is = m.a.wrapped(we.a, "modIcon", Pe.a),
				ds = m.a.li("modProTip", Pe.a),
				ls = m.a.div("modProTips", Pe.a),
				cs = m.a.div("modProTipTitle", Pe.a),
				ms = m.a.div("proTip", Pe.a),
				us = m.a.ul("tipList", Pe.a),
				ps = e => !!e && (e.kind === Ne.b.Pending ? !!xt(e).imageError : e.kind === Ne.b.FailedToUpload);
			var bs;
			! function(e) {
				e[e.AddState = 0] = "AddState", e[e.SingleEmojiEditState = 1] = "SingleEmojiEditState", e[e.BulkUploadState = 2] = "BulkUploadState"
			}(bs || (bs = {}));
			const hs = m.a.wrapped(Ie.a, "emojiDisplay", Pe.a),
				gs = m.a.div("emojiNameDisplay", Pe.a),
				fs = m.a.wrapped(P.a, "imageDisplay", Pe.a),
				xs = e => d.a.createElement(hs, null, d.a.createElement(fs, {
					backgroundImage: e.url
				}), d.a.createElement(gs, null, e.emojiName)),
				Es = Object(c.c)({
					emojisCustomSize: (e, t) => Object($.v)(e, {
						subredditName: t.subreddit.name
					}).emojisCustomSize
				}),
				vs = Object(l.b)(Es, (e, {
					emoji: t,
					isSnoomoji: s,
					subreddit: n
				}) => ({
					saveEmoji: (t, s, a) => e(u.p({
						imageData: a,
						subredditId: n.id,
						emojiName: t,
						settings: s
					})),
					saveEmojiSettings: a => {
						t && e(u.o(t.name, s, a, n.id))
					},
					saveEmojiSuccessToast: () => e(ye.f({
						kind: Te.b.SuccessCommunityGreen,
						text: a.fbt._("Emoji edits saved!", null, {
							hk: "3luBMA"
						})
					}))
				}));
			class _s extends d.a.Component {
				constructor(e) {
					super(e), this.closeModal = () => {
						this.props.toggleModal()
					}, this.clearImageData = () => {
						this.setState({
							imageData: [],
							emojiDraftImage: void 0
						})
					}, this.onEditingImageChange = e => {
						this.setState({
							emojiDraftImage: e
						})
					}, this.handleMultiImageInput = async e => {
						let t;
						const s = this.state.emojiState === bs.SingleEmojiEditState;
						s && this.clearImageData(), t = Array.isArray(e) ? s ? e.slice(0, 1) : e.slice(0, Jt) : [e];
						const n = await Promise.all(t.map(Ne.f));
						s ? this.setState({
							imageData: n
						}) : this.setState({
							emojiState: bs.BulkUploadState,
							imageData: n
						})
					}, this.handleModExclusiveToggle = () => this.setState({
						settings: {
							...this.state.settings,
							modFlairOnly: !this.state.settings.modFlairOnly
						}
					}), this.handleTogglePostFlair = () => this.setState({
						settings: {
							...this.state.settings,
							postFlairAllowed: !this.state.settings.postFlairAllowed
						}
					}), this.handleToggleUserFlair = () => this.setState({
						settings: {
							...this.state.settings,
							userFlairAllowed: !this.state.settings.userFlairAllowed
						}
					}), this.returnToAdd = () => {
						this.setState({
							emojiState: bs.AddState
						}), this.clearImageData()
					}, this.sendToggleEvent = (e, t) => this.props.sendEvent(S(e, t)), this.modFlairSettingHasChanged = () => this.props.emoji && this.props.emoji.modFlairOnly !== this.state.settings.modFlairOnly, this.userFlairSettingHasChanged = () => this.props.emoji && this.props.emoji.userFlairAllowed !== this.state.settings.userFlairAllowed, this.postFlairSettingHasChanged = () => this.props.emoji && this.props.emoji.postFlairAllowed !== this.state.settings.postFlairAllowed, this.settingsHaveBeenChanged = () => this.modFlairSettingHasChanged() || this.userFlairSettingHasChanged() || this.postFlairSettingHasChanged(), this.sendTelemetryEvents = () => {
						const {
							modFlairOnly: e,
							userFlairAllowed: t,
							postFlairAllowed: s
						} = this.state.settings;
						this.modFlairSettingHasChanged() && this.sendToggleEvent("mods_only", e), this.userFlairSettingHasChanged() && this.sendToggleEvent("appear_user_flair", t), this.postFlairSettingHasChanged() && this.sendToggleEvent("appear_post_flair", s)
					}, this.saveEmoji = async () => {
						const {
							props: e,
							state: t
						} = this, s = {
							modFlairOnly: t.settings.modFlairOnly,
							postFlairAllowed: t.settings.postFlairAllowed,
							userFlairAllowed: t.settings.userFlairAllowed
						};
						if (this.setIsSaving(!0), e.emoji) {
							if (e.isSnoomoji || e.emoji && !t.emojiDraftImage) e.saveEmojiSettings(s);
							else if (e.emoji && t.emojiDraftImage && t.emojiDraftImage.kind === Ne.b.TempUploaded) {
								await e.saveEmoji(e.emoji.name, s, t.emojiDraftImage) && e.saveEmojiSuccessToast()
							}
							this.sendTelemetryEvents()
						}
						this.closeModal(), this.setIsSaving(!1)
					}, this.setIsSaving = e => this.setState({
						isSaving: e
					}), this.state = {
						emojiState: e.emoji ? bs.SingleEmojiEditState : bs.AddState,
						imageData: [],
						isSaving: !1,
						settings: {
							modFlairOnly: !!e.emoji && e.emoji.modFlairOnly,
							postFlairAllowed: !e.emoji || e.emoji.postFlairAllowed,
							userFlairAllowed: !e.emoji || e.emoji.userFlairAllowed
						}
					}
				}
				render() {
					const {
						emoji: e,
						emojisCustomSize: t,
						isSnoomoji: s,
						sendEvent: n,
						subreddit: o
					} = this.props, {
						emojiDraftImage: r,
						emojiState: i,
						imageData: l,
						isSaving: c,
						settings: m
					} = this.state, u = {
						emojiSettings: m,
						stopEditing: this.closeModal,
						subredditId: o.id
					}, p = 2 * (t ? t[0] : zt), b = 2 * (t ? t[1] : zt), h = l.length > 0 ? l[0] : void 0, g = h && h.url, f = r && r.url, x = g || f, E = r && r.kind === Ne.b.TempUploaded, v = ps(h || r), _ = i !== bs.SingleEmojiEditState || (!this.settingsHaveBeenChanged() && !E || v);
					return d.a.createElement(ns, null, d.a.createElement(Q.h, null, d.a.createElement(Y.a, null, d.a.createElement(Q.p, null, e ? a.fbt._("Edit emoji", null, {
						hk: "4awCz5"
					}) : a.fbt._("Add new emojis", null, {
						hk: "2DrJ62"
					})), d.a.createElement(es, {
						disabled: c,
						onClick: this.closeModal
					}, d.a.createElement(Q.b, null)))), (i === bs.AddState || i === bs.SingleEmojiEditState) && d.a.createElement(d.a.Fragment, null, i === bs.AddState && d.a.createElement(ls, null, d.a.createElement(cs, null, d.a.createElement(is, null), a.fbt._("Mod pro tips!", null, {
						hk: "30l9bq"
					})), d.a.createElement(us, null, d.a.createElement(ds, null, a.fbt._("Emoji names will use the image file name and will be editable once uploaded", null, {
						hk: "2fvAIQ"
					})), d.a.createElement(ds, null, a.fbt._("You can upload up to {maxUpload} emojis at once", [a.fbt._param("maxUpload", Jt.toString())], {
						hk: "4aMYoX"
					})))), d.a.createElement(os, null, i === bs.SingleEmojiEditState && e && d.a.createElement(xs, {
						emojiName: e.name,
						url: x || e.url
					}), !s && d.a.createElement(d.a.Fragment, null, d.a.createElement(Oe.i, null, d.a.createElement(ts, null, e ? a.fbt._("Image", null, {
						hk: "3fzI70"
					}) : a.fbt._("Images", null, {
						hk: "3SapUk"
					})), e && i === bs.SingleEmojiEditState && h && d.a.createElement(qt, Gt({}, u, {
						emoji: e,
						onRetryUpload: this.clearImageData,
						pendingImage: h,
						onImageChange: this.onEditingImageChange
					})), (!l.length || E) && !(e && v) && d.a.createElement(Se.b, {
						label: a.fbt._("Drag and Drop or Upload Image", null, {
							hk: "3y5WvP"
						}),
						onChange: this.handleMultiImageInput,
						multiple: !0
					}), d.a.createElement(Oe.b, null, a.fbt._("Max upload dimensions {maxEmojiWidth} x {maxEmojiHeight}px", [a.fbt._param("maxEmojiWidth", Kt.toString()), a.fbt._param("maxEmojiHeight", Kt.toString())], {
						hk: "yal28"
					})), d.a.createElement(Oe.b, null, a.fbt._("Max file size {MAX_FILE_SIZE}KB", [a.fbt._param("MAX_FILE_SIZE", Qt.toString())], {
						hk: "1t1L0f"
					}))), d.a.createElement(ms, null, a.fbt._("Recommended upload dimensions: {recommendedWidth} x {recommendedHeight}px", [a.fbt._param("recommendedWidth", p.toString()), a.fbt._param("recommendedHeight", b.toString())], {
						hk: "35CqDV"
					}))), d.a.createElement(Xt, null, a.fbt._("Appears in:", null, {
						hk: "3SZP5W"
					})), d.a.createElement(Yt, {
						name: "postFlair",
						onChange: this.handleTogglePostFlair,
						value: m.postFlairAllowed
					}, d.a.createElement($t, null, a.fbt._("Post flair", null, {
						hk: "mAzeZ"
					}))), d.a.createElement(Yt, {
						name: "userFlair",
						onChange: this.handleToggleUserFlair,
						value: m.userFlairAllowed
					}, d.a.createElement($t, null, a.fbt._("User flair", null, {
						hk: "qVf7x"
					}))), d.a.createElement(rs, {
						description: "Only appears in post and user flair that are restricted for mod use.",
						on: m.modFlairOnly,
						onToggle: this.handleModExclusiveToggle,
						title: "Mod only"
					})), d.a.createElement(Q.f, null, d.a.createElement(as, {
						disabled: c,
						onClick: this.closeModal
					}, a.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), d.a.createElement(ss, {
						disabled: _,
						onClick: this.saveEmoji
					}, e ? a.fbt._("Save", null, {
						hk: "1M9aqH"
					}) : a.fbt._("Add", null, {
						hk: "2wi3d4"
					})))), i === bs.BulkUploadState && d.a.createElement(Lt, Gt({}, u, {
						images: l,
						returnToAddState: this.returnToAdd,
						sendEvent: n,
						setIsSaving: this.setIsSaving
					})))
				}
			}
			var Cs = Object(z.a)(vs(_s));
			const ks = m.a.wrapped(w.a, "alertIcon", M.a),
				ys = m.a.span("appearsTitle", M.a),
				Ss = m.a.span("imageTitle", M.a),
				Os = m.a.span("nameTitle", M.a),
				js = m.a.span("permissionsTitle", M.a),
				ws = m.a.wrapped(C.l, "settingsButton", M.a),
				Is = m.a.wrapped(f.a, "titleTooltip", M.a),
				Ns = m.a.wrapped(E.a, "topRow", M.a),
				Ts = Object(c.c)({
					emojis: N.d,
					isConfirmModalOpen: Object(I.b)("EmojiManager--DeleteEmojiConfirmation--Modal"),
					isEmojisEnabled: (e, t) => Object(N.b)(e, t.subreddit.name),
					isEmojiSettingsModalOpen: Object(I.b)("EmojiManager--Settings--Modal"),
					isUploadEmojisModalOpen: Object(I.b)("EmojiManager--UploadEmojis--Modal")
				}),
				Ms = Object(l.b)(Ts, (e, {
					subreddit: t
				}) => ({
					deleteEmoji: s => e(u.j(s, t.id)),
					toggleDeleteConfirmationModal: () => e(Object(p.i)("EmojiManager--DeleteEmojiConfirmation--Modal")),
					toggleSettingsModal: () => e(Object(p.i)("EmojiManager--Settings--Modal")),
					toggleUploadEmojisModal: () => e(Object(p.i)("EmojiManager--UploadEmojis--Modal"))
				}));
			class Ps extends d.a.Component {
				constructor(e) {
					super(e), this.onClickEditEmoji = (e, t) => {
						this.props.toggleUploadEmojisModal(), this.setState({
							emojiToEdit: e,
							isSnoomoji: t
						})
					}, this.onConfirmDelete = () => {
						this.props.deleteEmoji(this.state.emojiNameToDelete), this.setState({
							emojiNameToDelete: ""
						}), this.props.sendEvent(O("delete"))
					}, this.handleRemoveEmoji = e => {
						this.setState({
							emojiNameToDelete: e
						}), this.props.toggleDeleteConfirmationModal()
					}, this.state = {
						emojiNameToDelete: "",
						emojiToEdit: null,
						isSnoomoji: !1
					}
				}
				static getDerivedStateFromProps(e, t) {
					return t.emojiToEdit && !e.isUploadEmojisModalOpen ? {
						emojiToEdit: null,
						isSnoomoji: !1
					} : null
				}
				render() {
					const {
						emojis: e,
						isConfirmModalOpen: t,
						isEmojisEnabled: s,
						isEmojiSettingsModalOpen: o,
						isUploadEmojisModalOpen: i,
						sendEvent: l,
						subreddit: c,
						toggleDeleteConfirmationModal: m,
						toggleSettingsModal: u,
						toggleUploadEmojisModal: p
					} = this.props;
					return d.a.createElement(d.a.Fragment, null, d.a.createElement(x.c, null, d.a.createElement(ws, {
						onClick: u
					}, a.fbt._("Emoji settings", null, {
						hk: "2k202A"
					})), d.a.createElement(C.i, {
						onClick: p
					}, a.fbt._("Add emoji", null, {
						hk: "DTe8a"
					}))), d.a.createElement(x.a, null, d.a.createElement(x.b, null, a.fbt._("Emoji management", null, {
						hk: "6xN5s"
					}), d.a.createElement(g.a, {
						linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/360010560371`
					})), !s && d.a.createElement(h.a, {
						className: M.a.emojisDisabled,
						color: _.b.quarantine,
						icon: d.a.createElement(ks, null),
						subtitle: a.fbt._("Emojis in flairs will not be displayed, and existing emojis will appear as plain text.", null, {
							hk: "2WaMtH"
						}),
						title: a.fbt._("Emojis have been disabled for this community", null, {
							hk: "7LNIO"
						})
					}), d.a.createElement(Ns, null, d.a.createElement(Ss, null, a.fbt._("Image", null, {
						hk: "1rlqjH"
					})), d.a.createElement(Os, null, a.fbt._("Name", null, {
						hk: "1ugGFI"
					})), d.a.createElement(ys, null, a.fbt._("Appears in", null, {
						hk: "3K8vjU"
					}), d.a.createElement(Is, {
						text: a.fbt._("Set emoji to appear in post flair or user flair", null, {
							hk: "4cg4Se"
						})
					})), d.a.createElement(js, null, a.fbt._("Settings", null, {
						hk: "2CRrAq"
					}), d.a.createElement(Is, {
						text: a.fbt._("Set emoji to only appear in mod-only flair", null, {
							hk: "2yS10f"
						})
					}))), e[c.id] && r()(e[c.id].emojis, e => d.a.createElement(V, {
						emoji: e,
						enabled: !0,
						isSnoomoji: !1,
						key: e.name,
						onEdit: this.onClickEditEmoji,
						onRemove: this.handleRemoveEmoji
					})), e[c.id] && r()(e[c.id].snoomojis, e => d.a.createElement(V, {
						emoji: e,
						enabled: !0,
						isSnoomoji: !0,
						key: e.name,
						onEdit: this.onClickEditEmoji,
						onRemove: this.handleRemoveEmoji
					})), t && d.a.createElement(b.a, {
						toggleModal: m,
						onConfirm: this.onConfirmDelete,
						actionText: a.fbt._("Delete", null, {
							hk: "332ZH4"
						}),
						headerText: a.fbt._("Delete emoji?", null, {
							hk: "3VBsS8"
						}),
						modalText: a.fbt._("Do you wish to delete this emoji?", null, {
							hk: "2sPCxc"
						}),
						trackClick: () => {},
						withOverlay: !0
					}), o && d.a.createElement(ke, {
						sendEvent: l,
						subreddit: c,
						toggleModal: u,
						withOverlay: !0
					}), i && d.a.createElement(Cs, {
						emoji: this.state.emojiToEdit,
						isSnoomoji: this.state.isSnoomoji,
						sendEvent: l,
						subreddit: c,
						toggleModal: p,
						withOverlay: !0
					})))
				}
			}
			t.a = Ms(Object(v.c)(Ps))
		},
		"./src/reddit/components/ModHub/InfoLink/index.m.less": function(e, t, s) {
			e.exports = {
				linkContainer: "_3-yXs2bljbMxTPT6hDZU1I",
				infoIcon: "_2Eloqzd6Vfz9eGsjyzVfsf"
			}
		},
		"./src/reddit/components/ModHub/InfoLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/higherOrderComponents/asTooltip.tsx"),
				i = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = s("./src/reddit/icons/fonts/Info/index.tsx"),
				l = s("./src/reddit/components/ModHub/InfoLink/index.m.less"),
				c = s.n(l);
			const m = Object(r.a)(i.b),
				u = ["center", "top"],
				p = ["center", "bottom"];
			class b extends o.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						showTooltip: !1
					}
				}
				render() {
					return o.a.createElement("a", {
						className: c.a.linkContainer,
						href: this.props.linkUrl,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						ref: this.setTooltipTargetRef,
						target: "_blank",
						rel: "noopener noreferrer"
					}, o.a.createElement(d.a, {
						className: c.a.infoIcon
					}), o.a.createElement(m, {
						isOpen: this.state.showTooltip,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: u,
						text: n.fbt._("Learn more", null, {
							hk: "3zoGtq"
						}),
						tooltipPosition: p
					}))
				}
			}
			t.a = b
		},
		"./src/reddit/components/ModHub/ModHubNav/NavItem.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/InternalLink/index.tsx"),
				d = s("./src/reddit/icons/fonts/index.tsx"),
				l = s("./src/reddit/components/ModHub/ModHubNav/index.m.less"),
				c = s.n(l);
			const m = () => o.a.createElement("div", {
				className: c.a.newLinkIndicator
			}, n.fbt._("New", null, {
				hk: "BnhHE"
			}));
			t.b = e => e.path ? e.isExternal ? o.a.createElement("a", {
				className: c.a.navLinkStyles,
				href: e.path,
				onClick: e.onClick,
				target: "_blank",
				rel: "noopener noreferrer"
			}, e.label, o.a.createElement(d.a, {
				name: "external_link",
				className: c.a.outboundLinkIcon
			})) : o.a.createElement(i.a, {
				className: Object(r.a)(c.a.navLinkStyles, {
					[c.a.activeLink]: !!e.isActive
				}),
				to: e.path,
				onClick: e.onClick
			}, e.label, e.isNew && o.a.createElement(m, null), e.isBeta && o.a.createElement("div", {
				className: c.a.newLinkIndicator
			}, n.fbt._("Beta", null, {
				hk: "z4XPh"
			})), e.isUpdated && o.a.createElement("div", {
				className: c.a.updatedLinkIndicator
			}, n.fbt._("Updated", null, {
				hk: "2xkGR3"
			})), e.showInboundArrow && o.a.createElement(d.a, {
				name: "right",
				className: c.a.inboundLinkIcon
			})) : o.a.createElement("button", {
				className: c.a.navLinkStyles,
				onClick: e.onClick
			}, e.label, e.isNew && o.a.createElement(m, null), e.isBeta && o.a.createElement("div", {
				className: c.a.newLinkIndicator
			}, n.fbt._("Beta", null, {
				hk: "z4XPh"
			})), e.isUpdated && o.a.createElement("div", {
				className: c.a.updatedLinkIndicator
			}, n.fbt._("Updated", null, {
				hk: "2xkGR3"
			})))
		},
		"./src/reddit/components/ModHub/ModHubNav/WikiNavPanel/index.m.less": function(e, t, s) {
			e.exports = {
				wikiNavPanel: "KAUs91LhLIPR2bTL1aZRJ",
				contentTree: "_3_qIKXEwRmWcog7k9kGSno",
				footer: "_3FqEpSEBROhNwQ6pW6xmwJ",
				primaryButton: "_3fO0HSLh0kUxdhfv06hiTX",
				pageNavItem: "gCZ0Yr9nZYa9NaCdn8-eS",
				indentLine: "_2qFuXxmElNrzv3E9Qyb5xi",
				itemText: "_8bMrzJrL3U19A5yc6HTgj",
				mActive: "_1gyKwA8_GLuoQ1hu3Apd-w",
				mExists: "_3E5JJL5f6BXoTxqDq40IbB"
			}
		},
		"./src/reddit/components/ModHub/ModHubNav/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "_1rWejsW3eX4yw72E6Wfmyh",
				titleFontH2: "_10H_HMu7R7ett8pmawqwCS",
				titleFontH3: "_22nuZii7bWeL3c1xoXOl9",
				titleFontH4: "_2UjVJakiyf4d3yQ1sBrOzz",
				titleFontH5: "_22v1odcGzDJaLHik5W5qCz",
				titleFontH6: "_3BdZeq3g8CWhfeqBhIiW7f",
				metadataFont: "BQ88O08B4nIUNd4oLud39",
				flairFont: "_24GksXJ4va-4ZEamEGSlFB",
				labelsFont: "bd2r035T3aLLBkiMZaODQ",
				actionFont: "v0ITosHo9F3Rl2_llDtrc",
				smallButtonFont: "_3Sxxei5IvhyFBFPSQeJemM",
				largeButtonFont: "_-8HW12kqXpCzSoPxOQgrN",
				strongTextFont: "jPwoQR2t4sGD2BGLwCS0o",
				tabFont: "_2TpZx4pScQqA92z2QTYbIk",
				buttonFontXS: "_3hhxR89D6EPPCn0stnyDtx",
				buttonFontXs: "_3hhxR89D6EPPCn0stnyDtx",
				buttonFontS: "_2geB6McFSdWvuGRz3nyzjb",
				buttonFontM: "_1uuuzIbDmUCEWDPkR9T_dx",
				buttonFontL: "_1AhaF3ULgALw9k8OUmf0pY",
				buttonFontXL: "_2iQE9slD0Zw-wYQx5FCL1j",
				buttonFontXl: "_2iQE9slD0Zw-wYQx5FCL1j",
				bodyFontH1: "_3hxV-zVTwf7J5X6U1gL2PA",
				bodyFontH2: "_1lSzh7ct7vogYQk35ULeJl",
				bodyFontH3: "_2C3DyZAU4ai6HhZtVTe-Bu",
				bodyFontH4: "_2tzV3r0Sow-B7LA2KMLD45",
				bodyFontH5: "_1-ivrwr3LQQJ2_7q7woFBf",
				bodyFontH6: "pJbG4WvyXqhjYGMHv_062",
				bodyFont: "gPA4LKC5gx8g56loAEuW2",
				bodyFontSmall: "_2U2PATpiHbmfDjkovIbtF9",
				bodyFontMono: "_1tyVWTRiPy8hBs1o6HBJ_a",
				navContainer: "_2xA0SygQ9V-9Vkdad_4tnh",
				wikiNavContainer: "_3wKmughJWQCbpbTpgwf2R_",
				navContainerExp: "_1HiZS01lfLdV-mZxJbB2r1",
				navSection: "_1hDKgrVgEqwg3ogyzK0xTx",
				sectionHeader: "_1C6NYhYvuXKUDoONxrMR0d",
				iconStyles: "_1lHK5OQSXGaQzgW07E3Fh4",
				inboundLinkIcon: "_1cE0_wpoZtV5YKzwxXgxQ6",
				outboundLinkIcon: "_2Fb1fof3pZ4qO7_ZowwnXG",
				navLinkStyles: "jFCRipwFbBNJ4rl18HMK5",
				activeLink: "_4Gq-jEYAhrOCtha4RZ1JZ",
				breadcrumb: "_2Pw-8XrjTaQdxaxIicJXly",
				breadcrumbButton: "_1ofO-HYNTNyx_FUAEbIMME",
				newLinkIndicator: "_26hxZhi3N_WA1WUC6pQRpa",
				updatedLinkIndicator: "_1oCiY0B1NLkEfFfIfSJIF_"
			}
		},
		"./src/reddit/components/ModHub/PaginationButtons/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2QinjfjfDTG6Df4_Tb_eRN",
				iconStyles: "_1MvzgnzkNefTZKkd4A5o1Y",
				arrowLeft: "_1Hul4w6ANujC9NsFF6_j4f"
			}
		},
		"./src/reddit/components/ModHub/PaginationButtons/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/controls/InternalLink/index.tsx"),
				i = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				d = s("./src/reddit/components/ModHub/PaginationButtons/index.m.less"),
				l = s.n(d);
			t.a = e => a.a.createElement("div", {
				className: l.a.container
			}, e.prevButtonEnabled && a.a.createElement(r.a, {
				to: e.prevTo,
				onClick: e.prevButtonOnClick
			}, a.a.createElement(i.a, {
				className: Object(o.a)(l.a.iconStyles, l.a.arrowLeft)
			})), e.nextButtonEnabled && a.a.createElement(r.a, {
				to: e.nextTo,
				onClick: e.nextButtonOnClick
			}, a.a.createElement(i.a, {
				className: l.a.iconStyles
			})))
		},
		"./src/reddit/components/ModHub/StyledComponents/index.m.less": function(e, t, s) {
			e.exports = {
				ContentContainer: "_3mbqgd00Kdlh6nVVVhZYdS",
				contentContainer: "_3mbqgd00Kdlh6nVVVhZYdS",
				PageTitle: "_3rnK1gNGg1hiVaiRd9Hidl",
				pageTitle: "_3rnK1gNGg1hiVaiRd9Hidl",
				TopBar: "_2YY5qLRbI5q6_0JQVKiGt_",
				topBar: "_2YY5qLRbI5q6_0JQVKiGt_"
			}
		},
		"./src/reddit/components/ModHub/StyledComponents/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return d
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/ModHub/StyledComponents/index.m.less"),
				o = s.n(a);
			const r = n.a.div("ContentContainer", o.a),
				i = n.a.div("PageTitle", o.a),
				d = n.a.div("TopBar", o.a)
		},
		"./src/reddit/components/ModerationLog/FilterByDropdowns/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "_3aaWXDPwVg-rhD0DvWeyIg",
				titleFontH2: "_3RrF8F_t0SfGrUYfrMwbPy",
				titleFontH3: "_36oA-I2A9k4cBPYs3kAlux",
				titleFontH4: "_1neT2k10waDvSZYxkd9bk8",
				titleFontH5: "_3oeJNjYGx_aLE6l4o6Jhcr",
				titleFontH6: "_2CsvILRAMCNlhcGlq7eAZF",
				metadataFont: "_2odnjtlqO4r8tdO5H9fwLW",
				flairFont: "k5rlVaQw1fQ4nW2C-cK8H",
				labelsFont: "_20rPk9VJ1JfA7IuzEuFf25",
				actionFont: "_1YoZx3mOGBx4yxG_aQD3dq",
				smallButtonFont: "_3eWaIQ1VVjPR_5vUm4bU74",
				largeButtonFont: "rBsu7j_nL4EsDsP9nsEx4",
				strongTextFont: "_1efJllSuh9p67WrocQmmWR",
				tabFont: "_3WOHej9q3BPonP3nmtGWrh",
				buttonFontXS: "_1MX_r3WunmJuovmTcVFbK2",
				buttonFontXs: "_1MX_r3WunmJuovmTcVFbK2",
				buttonFontS: "_2KcOk-_dCdoa6LYzk-AP_9",
				buttonFontM: "BRJSsisfnzhNDIzzkZ0iD",
				buttonFontL: "WtDuFUG7c1VkpSlmXgZux",
				buttonFontXL: "_1K99pLAcTgTp5K71-CnCYk",
				buttonFontXl: "_1K99pLAcTgTp5K71-CnCYk",
				bodyFontH1: "_1m_v2MMDlDugLUDKRkPnPP",
				bodyFontH2: "uhtqruCImDdb6YMrply29",
				bodyFontH3: "oI7G9eYumAFmPy69WN078",
				bodyFontH4: "_3NN_fRjCSJGnly_ejXsz8m",
				bodyFontH5: "_1lK4S52h6Glz4-OysTx6SF",
				bodyFontH6: "BarCcSBvd2WaM4vhBY1_R",
				bodyFont: "RIX67Ch_ZE4SYGnQlkPWs",
				bodyFontSmall: "_1_FK7Ynr3eStBK-2Nbutbg",
				bodyFontMono: "_1mpZy47SxXNRDTLTEdCUmV",
				dropdownRow: "_3p4amLmnNdNRS9NcI_TnQm",
				filter: "_1LUEYTVtU-JweRiTGrVNn6",
				container: "_1GH53do8Ql17wdDC_i_NDf",
				containerText: "KiwwtIazAS77Aa_w3AdBE",
				listContainer: "FyBjuKMom1xYgTT7w5Dg1",
				selector: "_3fe64brTItATv48WIPt-Af"
			}
		},
		"./src/reddit/components/ModerationLog/ModerationLogItem/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "_1o6EpuTR_pbdKk4biOJFOD",
				titleFontH2: "_2scGKAM0oQo5UQ0sAeTYcJ",
				titleFontH3: "nZ8gtQ7wSBH1Ei4U88QyH",
				titleFontH4: "cWWmG8ptxDy68exgcmkxK",
				titleFontH5: "_2ltEgDFK7lEC55mqYn2t1k",
				titleFontH6: "_1wRduyAnZyUXSUvy0rPJ7E",
				metadataFont: "_3iKB3xohr95CjhTE-YrXL4",
				flairFont: "_2tIFOrubLwHvQfSpZ7MBvr",
				labelsFont: "_1Qc6zGFV60DgXsfeg4iK1-",
				actionFont: "bD7YA5ocXtmwPNG0x7gqi",
				smallButtonFont: "wa3Y6CP3s2WY-9hiMRcK6",
				largeButtonFont: "_1Td1TQRNZA20xRbI-LLHsA",
				strongTextFont: "_2bBsKMYboYeah9nlKp4p8e",
				tabFont: "_3Bdl5CdTghtfz5X9Qkn7y0",
				buttonFontXS: "_2hkAgq5O_JUGmz41U0fhSZ",
				buttonFontXs: "_2hkAgq5O_JUGmz41U0fhSZ",
				buttonFontS: "zi9zhcyy9sg1XQb4uP15B",
				buttonFontM: "_2V_SS1DAOgvZNAM9mW40qn",
				buttonFontL: "_3yj5sHGC15tSX0YBraNh9S",
				buttonFontXL: "_2rPaWVGnRh6kEv7M1PJXWa",
				buttonFontXl: "_2rPaWVGnRh6kEv7M1PJXWa",
				bodyFontH1: "_2b6RUiVz7aEMUoaiEalXki",
				bodyFontH2: "_1gD38a1FX6kmxcFvUyP8bB",
				bodyFontH3: "_20D34o21pcOy-JSvp0fq42",
				bodyFontH4: "_368KGbv676rMnmb_kPY7-A",
				bodyFontH5: "_2o6Gp_6yxl-T5p9MHsV3hI",
				bodyFontH6: "_2jp4S3tPdfLXU3FVoOvCWi",
				bodyFont: "O3aukKYU-BhYFQQgCIAcN",
				bodyFontSmall: "_10AKt1uw6lDYoTkaQ2Egu-",
				bodyFontMono: "_3tQKpxkireZBsmkNyZ5-0J",
				row: "_3sZTiywtJTK5dskqy0h2G2",
				modNameCell: "_1hV1AUW4J0YvMuEK7-Ph1H",
				usernameLink: "_25VIbQ9CpcAT2Uys4A2mFb",
				actionLink: "_2yXBXFFI2XxJRqd89Zwd25",
				createdAtTooltip: "zMBbz2oHRB9_15CBkQ3P4",
				detailsContainer: "_3pusa5HaB8VO3ODi63vjLl",
				detailsContent: "piNOo-es-o0F7rcLiUu0N",
				detailsType: "_3P62Ird8EqkkVbqN0bv1tU",
				icon: "VzgXNIgPGoNVtsv9-uwYE",
				iconWrapper: "_3cDZ1nhaOv-edC1Ixznjgd",
				negativeTreatment: "XqM6DP9JAGpvwgodvCcuI",
				positiveTreatment: "Ob5o1Q3oVSaizQinm6DD",
				tooltip: "_33OjvBwqb5PPwalXFSmAoy"
			}
		},
		"./src/reddit/components/ModerationLog/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "_2OYuAlGNOY6MlJjEC6nWEY",
				titleFontH2: "_2cz1b71RqIGBP0q1sEpoc1",
				titleFontH3: "pNuW5Xi4qPFjDgkhE2utU",
				titleFontH4: "HnjsgzUiJm7Rz4yf-QTnU",
				titleFontH5: "_32jYSRMv-UqDvlwAZ9yI4P",
				titleFontH6: "WyhSydN2c9D7w_ikI_LsS",
				metadataFont: "klmtj4Euuox2ljWXOzJqz",
				flairFont: "_1XFZbbYMt1bMVk_65YaTug",
				labelsFont: "_2lbFHk9fPHfy-Pj2cQ56ef",
				actionFont: "_250q84vRQ0qeydB79AJun",
				smallButtonFont: "_3QKadDpX2GixU1usvLUiww",
				largeButtonFont: "_24SnRKi2v2z3Q8DfWx8Cfd",
				strongTextFont: "_1bRU6ybRMZMA-zL-dR_BFc",
				tabFont: "_1y1SLpqv4ViOdLE8d7R03R",
				buttonFontXS: "_3WZjqmvG0dFKc8UjITKDDM",
				buttonFontXs: "_3WZjqmvG0dFKc8UjITKDDM",
				buttonFontS: "_2wD06G9nLrctZ6G6-fnvzn",
				buttonFontM: "f89wHQzBr1xXirRhM2r3L",
				buttonFontL: "_2B8vK6cxvYeJYneLcXU7pS",
				buttonFontXL: "_2wEcZ9dZ6skPqfnohnMjY8",
				buttonFontXl: "_2wEcZ9dZ6skPqfnohnMjY8",
				bodyFontH1: "_2qrAJcHH1W18XK6K_iZjmY",
				bodyFontH2: "_2yInLfhO3hB7n5aflEa_Y5",
				bodyFontH3: "_31VlGQEcOO_KNq8afFO4lZ",
				bodyFontH4: "_13MU9oPUeX9-FTZJw6fEdd",
				bodyFontH5: "_3h1ag_p5AVxzseMoTk9Oee",
				bodyFontH6: "_2GA-IlakdRmzOgQVFN2Q_F",
				bodyFont: "_3W9ZZjex4uhC0x4j0tXUE8",
				bodyFontSmall: "_2wYhe0C_P9ON8nur1uwzBd",
				bodyFontMono: "Ygu6NDZ2VS1jqJxKuuJ67",
				contentContainer: "PLQrC-Lzmu2AHBmciLxW5",
				table: "_27_l-nXesULxjvqLhpd6Ie",
				timeColHeader: "_1qWSBc-O0drE3JbIiVNEqE",
				modNameColHeader: "_2vKvLM8vE2iV6p5T0b5J42",
				actionNameColHeader: "_3pOXEjq1uyvW71Pp3gS7yv",
				icon: "_2iiHYO0HlG5gGeXyf7S3_q",
				iconContainer: "_3leJW5B-x65UTDfhDAblD_",
				title: "_2pFg2GOWUWlkKFlSaV-iFq",
				tooltip: "jkeAqS2MNV7nCHZkp4vi9",
				actionTooltip: "p12QqrsFSXUXQXCVTreZ5",
				actionTooltipDescription: "_2SZhKngNXxQ-MnrDr17Fm-",
				allIconsContainer: "_2zekEhqxlIqb4STkFCskIT",
				detailTooltip: "_20tDXbrpUnXW12ZXmRZdKa",
				bottomBarRow: "_28pYv3DHnyqXo6lJwzAOcG"
			}
		},
		"./src/reddit/components/ModerationLog/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/reddit/endpoints/subredditModeration/moderationLog.ts"),
				m = s("./src/reddit/helpers/graphql/normalizeModerationLogFromGql/index.ts"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				p = s("./src/reddit/actions/moderationLog/constants.ts");
			const b = Object(l.a)(p.a);
			var h = s("./node_modules/react-router-redux/es/index.js"),
				g = s("./src/higherOrderComponents/asTooltip.tsx"),
				f = s("./src/reddit/actions/tooltip.ts"),
				x = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/constants/keycodes.ts"));
			const E = ["Anti-Evil Operations", "Reddit Legal"];
			var v;
			! function(e) {
				e.ACTION = "action", e.MODERATOR = "moderator"
			}(v || (v = {}));
			const _ = {
					ALL_ACTIONS: () => a.fbt._("All actions", null, {
						hk: "3sHzD4"
					}),
					ACCEPT_MODERATOR_INVITE: () => a.fbt._("Accept moderator invite", null, {
						hk: "3WJot2"
					}),
					ADD_COMMUNITY_TOPICS: () => a.fbt._("Add community topics", null, {
						hk: "4xgglk"
					}),
					ADD_CONTRIBUTOR: () => a.fbt._("Add contributor", null, {
						hk: "444ZK"
					}),
					ADD_MODERATOR: () => a.fbt._("Add moderator", null, {
						hk: "4rRghF"
					}),
					ADJUST_POST_CROWD_CONTROL_LEVEL: () => a.fbt._("Adjust post crowd control level", null, {
						hk: "Eqwnv"
					}),
					APPROVE_COMMENT: () => a.fbt._("Approve comment", null, {
						hk: "1gvHWC"
					}),
					APPROVE_LINK: () => a.fbt._("Approve link", null, {
						hk: "2LqFt4"
					}),
					BAN_USER: () => a.fbt._("Ban user", null, {
						hk: "4DmPqi"
					}),
					COLLECTIONS: () => a.fbt._("Collections", null, {
						hk: "3a39Wa"
					}),
					COMMUNITY_STYLING: () => a.fbt._("Community styling", null, {
						hk: "386ps9"
					}),
					COMMUNITY_WIDGETS: () => a.fbt._("Community widgets", null, {
						hk: "4ml45n"
					}),
					CREATE_AWARD: () => a.fbt._("Create award", null, {
						hk: "bWa9w"
					}),
					CREATE_RULE: () => a.fbt._("Create rule", null, {
						hk: "28uE69"
					}),
					CREATE_SCHEDULED_POST: () => a.fbt._("Create scheduled post", null, {
						hk: "mVbI1"
					}),
					DELETE_AWARD: () => a.fbt._("Delete award", null, {
						hk: "3xYaZ7"
					}),
					DELETE_RULE: () => a.fbt._("Delete rule", null, {
						hk: "2lWdRL"
					}),
					DELETE_SCHEDULED_POST: () => a.fbt._("Delete scheduled post", null, {
						hk: "MhwRy"
					}),
					DELETE_OVERRIDDEN_CLASSIFICATION: () => a.fbt._("Delete overridden classification", null, {
						hk: "3hPfDT"
					}),
					DISABLE_AWARD: () => a.fbt._("Disable award", null, {
						hk: "2yFBt7"
					}),
					DISTINGUISH: () => a.fbt._("Distinguish", null, {
						hk: "3cWniK"
					}),
					EDIT_FLAIR: () => a.fbt._("Edit flair", null, {
						hk: "mD0CV"
					}),
					EDIT_POST_REQUIREMENTS: () => a.fbt._("Edit post requirements", null, {
						hk: "1SLqNE"
					}),
					EDIT_RULE: () => a.fbt._("Edit rule", null, {
						hk: "2T4TJx"
					}),
					EDIT_SCHEDULED_POST: () => a.fbt._("Edit scheduled post", null, {
						hk: "1XCmsI"
					}),
					EDIT_SETTINGS: () => a.fbt._("Edit settings", null, {
						hk: "3o8q46"
					}),
					ENABLE_AWARD: () => a.fbt._("Enable award", null, {
						hk: "3zYir4"
					}),
					HIDDEN_AWARD: () => a.fbt._("Hide award", null, {
						hk: "31lRN8"
					}),
					EVENTS: () => a.fbt._("Events", null, {
						hk: "4Bq9wt"
					}),
					IGNORE_REPORTS: () => a.fbt._("Ignore reports", null, {
						hk: "1defIy"
					}),
					INVITE_MODERATOR: () => a.fbt._("Invite moderator", null, {
						hk: "1DbgL5"
					}),
					INVITE_SUBSCRIBER: () => a.fbt._("Invite subscriber", null, {
						hk: "4yEMNb"
					}),
					LOCK: () => a.fbt._("Lock", null, {
						hk: "39hTi5"
					}),
					MARK_NSFW: () => a.fbt._("Mark nsfw", null, {
						hk: "3bo45o"
					}),
					MARK_ORIGINAL_CONTENT: () => a.fbt._("Mark original content", null, {
						hk: "SadHO"
					}),
					MOD_AWARD_GIVEN: () => a.fbt._("Mod award given by moderators", null, {
						hk: "35cQgR"
					}),
					MODMAIL_ENROLLMENT: () => a.fbt._("Modmail enrollment", null, {
						hk: "4ee1XK"
					}),
					MUTE_USER: () => a.fbt._("Mute user", null, {
						hk: "3kPYe4"
					}),
					OVERRIDE_CLASSIFICATION: () => a.fbt._("Override classification", null, {
						hk: "2VPY6n"
					}),
					REMOVE_COMMENT: () => a.fbt._("Remove comment", null, {
						hk: "vEI4S"
					}),
					REMOVE_COMMUNITY_TOPICS: () => a.fbt._("Remove community topics", null, {
						hk: "1tLjxQ"
					}),
					REMOVE_CONTRIBUTOR: () => a.fbt._("Remove contributor", null, {
						hk: "4FMLz6"
					}),
					REMOVE_LINK: () => a.fbt._("Remove link", null, {
						hk: "tmjch"
					}),
					REMOVE_MODERATOR: () => a.fbt._("Remove moderator", null, {
						hk: "1FHVTB"
					}),
					REMOVE_WIKI_CONTRIBUTOR: () => a.fbt._("Remove wiki contributor", null, {
						hk: "1PcCja"
					}),
					REORDER_MODERATORS: () => a.fbt._("Reorder moderators", null, {
						hk: "3Csxj8"
					}),
					REORDER_RULES: () => a.fbt._("Reorder rules", null, {
						hk: "306Bqx"
					}),
					SET_CONTEST_MODE: () => a.fbt._("Set contest mode", null, {
						hk: "1pERnU"
					}),
					SET_PERMISSIONS: () => a.fbt._("Set permissions", null, {
						hk: "3UzkKU"
					}),
					SET_SUGGESTEDSORT: () => a.fbt._("Set suggested sort", null, {
						hk: "208T6K"
					}),
					SHOW_COMMENT: () => a.fbt._("Show comment", null, {
						hk: "n5M3i"
					}),
					SNOOZE_REPORTS: () => a.fbt._("Snooze reports", null, {
						hk: "3gOkDV"
					}),
					SPAM_COMMENT: () => a.fbt._("Spam comment", null, {
						hk: "2ROyTD"
					}),
					SPAM_LINK: () => a.fbt._("Spam link", null, {
						hk: "2G5xg3"
					}),
					SPOILER: () => a.fbt._("Spoiler", null, {
						hk: "2nfv1a"
					}),
					STICKY: () => a.fbt._("Sticky", null, {
						hk: "1W6JrJ"
					}),
					SUBMIT_CONTENT_RATING_SURVEY: () => a.fbt._("Submit content rating survey", null, {
						hk: "1F1ead"
					}),
					SUBMIT_SCHEDULED_POST: () => a.fbt._("Submit scheduled post", null, {
						hk: "1i2VUH"
					}),
					UNBAN_USER: () => a.fbt._("Unban user", null, {
						hk: "4m2iNP"
					}),
					UNIGNORE_REPORTS: () => a.fbt._("Unignore reports", null, {
						hk: "1wfp99"
					}),
					UNINVITE_MODERATOR: () => a.fbt._("Uninvite moderator", null, {
						hk: "3E6UkD"
					}),
					UNLOCK: () => a.fbt._("Unlock", null, {
						hk: "2BHnOC"
					}),
					UNMUTE_USER: () => a.fbt._("Unmute user", null, {
						hk: "25tct2"
					}),
					UNSET_CONTEST_MODE: () => a.fbt._("Unset contest mode", null, {
						hk: "AxsDk"
					}),
					UNSNOOZE_REPORTS: () => a.fbt._("Unsnooze reports", null, {
						hk: "4nlwcg"
					}),
					UNSPOILER: () => a.fbt._("Unspoiler", null, {
						hk: "2gE1K1"
					}),
					UNSTICKY: () => a.fbt._("Unsticky", null, {
						hk: "U5tvd"
					}),
					WIKI_BANNED: () => a.fbt._("Wiki banned", null, {
						hk: "1nk4H7"
					}),
					WIKI_CONTRIBUTOR: () => a.fbt._("Wiki contributor", null, {
						hk: "1W6zn3"
					}),
					WIKI_PAGE_LISTED: () => a.fbt._("Wiki page listed", null, {
						hk: "4aghdO"
					}),
					WIKI_PERM_LEVEL: () => a.fbt._("Wiki perm level", null, {
						hk: "4waHE"
					}),
					WIKI_REVISE: () => a.fbt._("Wiki revise", null, {
						hk: "3FZuIJ"
					}),
					WIKI_UNBANNED: () => a.fbt._("Wiki unbanned", null, {
						hk: "1fAtKd"
					})
				},
				C = {
					added_event_times: () => a.fbt._("added event times to post", null, {
						hk: "1TpgVq"
					}),
					added_flair_styling: () => a.fbt._("added flair styling", null, {
						hk: "zQ6Tv"
					}),
					added_styling: () => a.fbt._("modified community styling", null, {
						hk: "xSJ7B"
					}),
					added_to_collection: () => a.fbt._("added post to collection", null, {
						hk: "3V4fk0"
					}),
					added_widget: () => a.fbt._("added widget", null, {
						hk: "1eVJg6"
					}),
					allow_discovery: () => a.fbt._("toggle allow in search/onboarding/discovery", null, {
						hk: "3on6Qf"
					}),
					allow_top: () => a.fbt._("toggle allow in default/trending lists", null, {
						hk: "DikzW"
					}),
					collapse_deleted_comments: () => a.fbt._("toggle collapse deleted/removed comments", null, {
						hk: "22QPzD"
					}),
					comment_score_hide_mins: () => a.fbt._("comment score hide period", null, {
						hk: "21jsup"
					}),
					confirm_ham: () => a.fbt._("approved", null, {
						hk: "3xh84x"
					}),
					confirm_spam: () => a.fbt._("confirm spam", null, {
						hk: "2yAos0"
					}),
					created_collection: () => a.fbt._("created collection", null, {
						hk: "3vtmUM"
					}),
					css_on_cname: () => a.fbt._("toggle custom css from cname", null, {
						hk: "LTlcB"
					}),
					del_banner: () => a.fbt._("delete banner image", null, {
						hk: "2HRlu"
					}),
					del_header: () => a.fbt._("delete header image", null, {
						hk: "2k08m2"
					}),
					del_icon: () => a.fbt._("delete icon image", null, {
						hk: "43ObSQ"
					}),
					del_image: () => a.fbt._("delete image", null, {
						hk: "4ztzG0"
					}),
					deleted_collection: () => a.fbt._("deleted collection", null, {
						hk: "1T8FDF"
					}),
					description: () => a.fbt._("sidebar description", null, {
						hk: "3gBQBx"
					}),
					domain: () => a.fbt._("domain", null, {
						hk: "37Eg7w"
					}),
					edit_post_requirements: () => a.fbt._("edited post requirements", null, {
						hk: "CoMF6"
					}),
					edited_collection_description: () => a.fbt._("edited collection description", null, {
						hk: "ViGod"
					}),
					edited_collection_display_layout: () => a.fbt._("edited collection display layout", null, {
						hk: "xGExq"
					}),
					edited_collection_title: () => a.fbt._("edited collection title", null, {
						hk: "2x6aKQ"
					}),
					edited_event_body: () => a.fbt._("edited event post body", null, {
						hk: "2uwjvL"
					}),
					edited_event_times: () => a.fbt._("edited event post times", null, {
						hk: "3HNoa4"
					}),
					edited_event_title: () => a.fbt._("edited event post title", null, {
						hk: "4itZHA"
					}),
					edited_widget: () => a.fbt._("edited widget", null, {
						hk: "4eaNe6"
					}),
					enable_award: () => a.fbt._("enabled award", null, {
						hk: "3Ehki9"
					}),
					exclude_banned_modqueue: () => a.fbt._("toggle exclude banned users posts from modqueue", null, {
						hk: "j41F1"
					}),
					flair_clear_template: () => a.fbt._("clear flair template", null, {
						hk: "1IMRYi"
					}),
					flair_csv: () => a.fbt._("edit flair by csv", null, {
						hk: "480ZDT"
					}),
					flair_delete_template: () => a.fbt._("delete flair template", null, {
						hk: "bJ8f2"
					}),
					flair_add: () => a.fbt._("add flair", null, {
						hk: "281rsb"
					}),
					flair_delete: () => a.fbt._("delete flair", null, {
						hk: "2UkqAp"
					}),
					flair_edit: () => a.fbt._("edit flair", null, {
						hk: "3oxZYq"
					}),
					flair_enabled: () => a.fbt._("toggle flair enabled", null, {
						hk: "9WUzt"
					}),
					flair_position: () => a.fbt._("toggle user flair position", null, {
						hk: "4cwkk5"
					}),
					flair_self_enabled: () => a.fbt._("toggle user assigned flair enabled", null, {
						hk: "4q13ZR"
					}),
					flair_template: () => a.fbt._("add/edit flair templates", null, {
						hk: "NSSHD"
					}),
					free_form_reports: () => a.fbt._("toggle allow free form reports by users", null, {
						hk: "3MBfJn"
					}),
					header_title: () => a.fbt._("header title", null, {
						hk: "40Y0QO"
					}),
					ignore_reports: () => a.fbt._("ignore reports", null, {
						hk: "h7fov"
					}),
					lang: () => a.fbt._("language", null, {
						hk: "2xhrR8"
					}),
					link_flair_position: () => a.fbt._("toggle link flair position", null, {
						hk: "3j33wQ"
					}),
					link_flair_self_enabled: () => a.fbt._("toggle submitter assigned link flair enabled", null, {
						hk: "43EykN"
					}),
					link_type: () => a.fbt._("link type", null, {
						hk: "2FuNM"
					}),
					over_18: () => a.fbt._("toggle viewers must be over 18", null, {
						hk: "PRgas"
					}),
					permanent: () => a.fbt._("permanent ban", null, {
						hk: "3MeL5T"
					}),
					permission_moderator_invite: () => a.fbt._("set permissions on moderator invitation", null, {
						hk: "hA7I9"
					}),
					permission_moderator: () => a.fbt._("set permissions on moderator", null, {
						hk: "1yq3O2"
					}),
					public_description: () => a.fbt._("description", null, {
						hk: "JizZj"
					}),
					public_traffic: () => a.fbt._("toggle public traffic stats page", null, {
						hk: "qIXty"
					}),
					remove_self: () => a.fbt._("removed self", null, {
						hk: "I5wgr"
					}),
					remove: () => a.fbt._("remove", null, {
						hk: "mAXhe"
					}),
					removed_from_collection: () => a.fbt._("removed post from collection", null, {
						hk: "2dwuxr"
					}),
					removed_styling: () => a.fbt._("removed community styling", null, {
						hk: "1p7Io9"
					}),
					removed_widget: () => a.fbt._("removed widget", null, {
						hk: "43WUko"
					}),
					show_cname_sidebar: () => a.fbt._("toggle show sidebar from cname", null, {
						hk: "4nlv2A"
					}),
					show_media: () => a.fbt._("toggle show thumbnail images of content", null, {
						hk: "2XmVTJ"
					}),
					spam: () => a.fbt._("spam", null, {
						hk: "3usg93"
					}),
					stylesheet: () => a.fbt._("stylesheet", null, {
						hk: "1TOdUF"
					}),
					submit_link_label: () => a.fbt._("submit link button label", null, {
						hk: "4BdL19"
					}),
					submit_text_label: () => a.fbt._("submit text post button label", null, {
						hk: "4wc8qi"
					}),
					title: () => a.fbt._("title", null, {
						hk: "3tlhiX"
					}),
					type: () => a.fbt._("type", null, {
						hk: "14BQua"
					}),
					unspam: () => a.fbt._("unspam", null, {
						hk: "3SxHQ4"
					}),
					upload_image_banner: () => a.fbt._("upload image banner", null, {
						hk: "1ocFEe"
					}),
					upload_image_header: () => a.fbt._("upload image header", null, {
						hk: "3J6pke"
					}),
					upload_image_icon: () => a.fbt._("upload image icon", null, {
						hk: "4jr6Eg"
					}),
					upload_image: () => a.fbt._("upload image", null, {
						hk: "2KN9ig"
					}),
					copyright_removal: () => a.fbt._("copyright removal", null, {
						hk: "9vN6G"
					}),
					copyright_restoration: () => a.fbt._("copyright restoration", null, {
						hk: "35qFx5"
					})
				};
			var k, y;
			! function(e) {
				e.AWARD = "Award", e.COMMENT = "Comment", e.FLAIR = "Flair", e.MULTIPLE = "Multiple", e.POST = "Post", e.REDDITOR = "Redditor", e.SETTINGS = "Settings", e.WIKI = "Wiki", e.COLLECTION = "Collection", e.EVENT = "Event"
			}(k || (k = {})),
			function(e) {
				e.NONE = "none", e.POSITIVE = "positive", e.NEGATIVE = "negative"
			}(y || (y = {}));
			var S = s("./src/reddit/controls/InternalLink/index.tsx"),
				O = s("./src/lib/addQueryParams/index.ts"),
				j = s("./src/lib/stripQueryParams/index.ts");
			const w = e => {
				const t = e.action && "ALL_ACTIONS" !== e.action ? e.action : null,
					s = e.moderator || null,
					n = e.endCursor || null,
					a = e.startCursor || null;
				return Object(O.a)(Object(j.a)(e.currentPageUrl), {
					action: t,
					moderator: s,
					after: n,
					before: a
				})
			};
			var I = s("./src/reddit/selectors/telemetry.ts");
			const N = e => ({
					subreddit: I.subreddit(e),
					userSubreddit: I.userSubreddit(e)
				}),
				T = () => e => ({
					source: "mod_log",
					action: "click",
					noun: "mod_filter_dropdown",
					...N(e)
				}),
				M = () => e => ({
					source: "mod_filter_dropdown",
					action: "click",
					noun: "moderator",
					...N(e)
				}),
				P = () => e => ({
					source: "mod_log",
					action: "click",
					noun: "mod_action_dropdown",
					...N(e)
				}),
				R = e => t => ({
					source: "mod_action_dropdown",
					action: "click",
					noun: e.toLowerCase(),
					...N(t)
				});
			var F = s("./src/reddit/components/ModerationLog/FilterByDropdowns/index.m.less"),
				A = s.n(F);
			class D extends r.a.Component {
				constructor(e) {
					super(e), this.buildModLogUrlForAction = e => {
						const {
							currentPageUrl: t,
							moderator: s
						} = this.props;
						return w({
							currentPageUrl: t,
							moderator: s,
							action: e
						})
					}, this.onChangeFilterText = e => {
						const t = e.currentTarget.value,
							s = this.getFilteredActions(t);
						this.setState({
							currentInputText: t,
							filteredActions: s
						})
					}, this.onKeyDown = e => {
						if (e.which === x.a.Enter) {
							const {
								filteredActions: t
							} = this.state, s = t.length ? this.buildModLogUrlForAction(t[0]) : null;
							s && (this.props.onChangeUrl(s), e.preventDefault())
						}
					}, this.onActionClick = e => {
						this.props.sendEvent(R(e))
					}, this.state = {
						currentInputText: "",
						filteredActions: this.getFilteredActions("")
					}
				}
				getFilteredActions(e) {
					let t = Object.keys(_);
					if (e) {
						const s = e.toLowerCase();
						t = t.filter(e => _[e]().toString().toLowerCase().includes(s))
					}
					return t
				}
				render() {
					const {
						className: e
					} = this.props, {
						filteredActions: t
					} = this.state;
					return r.a.createElement("div", {
						role: "menu",
						className: e
					}, r.a.createElement("input", {
						"aria-label": a.fbt._("Filter", null, {
							hk: "UqHZD"
						}),
						className: A.a.filter,
						placeholder: a.fbt._("Filter", null, {
							hk: "3sxP3l"
						}),
						onChange: this.onChangeFilterText,
						onKeyDown: this.onKeyDown
					}), t.map(e => r.a.createElement(S.a, {
						className: A.a.dropdownRow,
						onClick: () => this.onActionClick(e),
						to: this.buildModLogUrlForAction(e)
					}, _[e]())))
				}
			}
			var L = D,
				U = s("./src/lib/objectSelector/index.ts"),
				B = s("./src/reddit/models/SubredditModeration/ModerationLog/index.ts");
			const H = Object(U.a)((e, {
					subredditId: t
				}) => {
					let s = [];
					const n = W(e),
						a = Z(e);
					if (n && a) {
						const o = Object(B.a)(t, n, a),
							r = e.pages.modHub.moderationLog.actions.itemOrder[t] && e.pages.modHub.moderationLog.actions.itemOrder[t][o];
						r && (s = r.map(s => e.pages.modHub.moderationLog.actions.models[t][s]))
					}
					return s
				}),
				W = e => e.pages.modHub.moderationLog.endCursor,
				Z = e => e.pages.modHub.moderationLog.startCursor,
				V = ({
					name: e,
					urlPath: t
				}) => r.a.createElement(S.a, {
					className: A.a.dropdownRow,
					to: t
				}, e),
				q = "a",
				G = "AutoModerator",
				z = Object(d.c)({
					allModerators: (e, {
						subredditId: t
					}) => ((e, t) => e.pages.modHub.moderationLog.moderators[t] || [])(e, t)
				});
			class K extends r.a.Component {
				constructor(e) {
					super(e), this.onChangeFilterText = e => {
						const t = e.currentTarget.value,
							s = this.getList(t);
						this.setState({
							currentInputText: t,
							filteredList: s
						})
					}, this.onKeyDown = e => {
						if (e.which === x.a.Enter) {
							const {
								filteredList: t
							} = this.state, s = t.length ? t[0].url : "";
							s && (this.props.onChangeUrl(s), e.preventDefault())
						}
					}, this.onDropdownClick = e => {
						e.target instanceof HTMLAnchorElement && this.props.sendEvent(M())
					}, this.state = {
						currentInputText: "",
						filteredList: this.getList("")
					}
				}
				getList(e) {
					const {
						action: t,
						currentPageUrl: s
					} = this.props, n = e => w({
						currentPageUrl: s,
						action: t,
						moderator: e
					}), o = [{
						url: n(""),
						displayText: `${a.fbt._("All Moderators",null,{hk:"3vmWA8"})}`
					}, {
						url: n(q),
						displayText: `${a.fbt._("Admins",null,{hk:"4mKRNI"})}`
					}, {
						url: n(G),
						displayText: `${a.fbt._("AutoModerator",null,{hk:"4wxc1W"})}`
					}, ...this.props.allModerators.map(e => ({
						url: n(e.name),
						displayText: e.name
					}))];
					if (e) {
						const t = e.toLowerCase();
						return o.filter(e => e.displayText.toLowerCase().includes(t))
					}
					return o
				}
				render() {
					const {
						className: e
					} = this.props, {
						filteredList: t
					} = this.state;
					return r.a.createElement("div", {
						role: "menu",
						className: e,
						onClick: this.onDropdownClick
					}, r.a.createElement("input", {
						"aria-label": a.fbt._("Filter", null, {
							hk: "1qnOD5"
						}),
						className: A.a.filter,
						placeholder: a.fbt._("Filter", null, {
							hk: "1sWvOA"
						}),
						onChange: this.onChangeFilterText,
						onKeyDown: this.onKeyDown
					}), t.map((e, t) => r.a.createElement(V, {
						key: t,
						name: e.displayText,
						urlPath: e.url
					})))
				}
			}
			var Q = Object(i.b)(z)(K),
				J = s("./src/reddit/components/TrackingHelper/index.tsx"),
				X = s("./src/reddit/controls/Dropdown/index.tsx"),
				Y = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				$ = s("./src/reddit/selectors/tooltip.ts");
			const ee = "mod-log-action-filter-dropdown",
				te = "mod-log-moderator-filter-dropdown",
				se = Object(g.a)(X.a),
				ne = Object(d.c)({
					isActionFilterDropdownOpen: Object($.b)(ee),
					isModeratorFilterDropdownOpen: Object($.b)(te)
				});
			class ae extends r.a.Component {
				constructor() {
					super(...arguments), this.getContainerText = e => {
						const {
							action: t,
							moderator: s
						} = this.props;
						if (e === v.MODERATOR) {
							let e = s;
							return s === q && (e = a.fbt._("Admins", null, {
								hk: "1qJDMA"
							})), e || a.fbt._("All Moderators", null, {
								hk: "18DhaK"
							})
						}
						if (e === v.ACTION) {
							return t && _[t] && _[t]() || a.fbt._("Actions", null, {
								hk: "1s4OJD"
							})
						}
					}, this.openModFilterDropdown = () => {
						this.props.onOpenDropdown(te), this.props.sendEvent(T())
					}, this.openActionFilterDropdown = () => {
						this.props.onOpenDropdown(ee), this.props.sendEvent(P())
					}
				}
				stopPropagation(e) {
					e.nativeEvent.stopImmediatePropagation()
				}
				render() {
					const {
						action: e,
						currentPageUrl: t,
						isActionFilterDropdownOpen: s,
						isModeratorFilterDropdownOpen: n,
						moderator: o,
						subredditId: i
					} = this.props;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: A.a.container,
						onClickCapture: this.stopPropagation
					}, r.a.createElement("button", {
						"aria-expanded": n,
						"aria-label": a.fbt._("Start typing to filter moderators or use up and down to select.", null, {
							hk: "4ff0MW"
						}),
						className: A.a.selector,
						id: te,
						onClick: this.openModFilterDropdown,
						role: "navigation"
					}, r.a.createElement("span", {
						className: A.a.containerText
					}, this.getContainerText(v.MODERATOR)), r.a.createElement(Y.a, null)), r.a.createElement(se, {
						tooltipId: te,
						isOpen: n
					}, r.a.createElement(Q, {
						action: e,
						className: A.a.listContainer,
						currentPageUrl: t,
						moderator: o,
						onChangeUrl: this.props.pushUrl,
						sendEvent: this.props.sendEvent,
						subredditId: i
					}))), r.a.createElement("div", {
						className: A.a.container,
						onClickCapture: this.stopPropagation
					}, r.a.createElement("button", {
						"aria-expanded": s,
						"aria-label": a.fbt._("Start typing to filter the mod actions or use up and down to select.", null, {
							hk: "32A4KB"
						}),
						className: A.a.selector,
						id: ee,
						onClick: this.openActionFilterDropdown,
						role: "navigation"
					}, r.a.createElement("span", {
						className: A.a.containerText
					}, this.getContainerText(v.ACTION)), r.a.createElement(Y.a, null)), r.a.createElement(se, {
						tooltipId: ee,
						isOpen: s
					}, r.a.createElement(L, {
						action: e,
						className: A.a.listContainer,
						currentPageUrl: t,
						moderator: o,
						onChangeUrl: this.props.pushUrl,
						sendEvent: this.props.sendEvent
					}))))
				}
			}
			var oe = Object(i.b)(ne, e => ({
					onOpenDropdown: t => e(Object(f.h)({
						tooltipId: t
					})),
					pushUrl: t => e(Object(h.b)(t))
				}))(Object(J.c)(ae)),
				re = s("./node_modules/lodash/noop.js"),
				ie = s.n(re),
				de = s("./src/lib/timeAgo/index.ts"),
				le = s("./src/reddit/components/AuthorLink/index.tsx"),
				ce = s("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				me = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				ue = s("./src/reddit/models/User/index.ts"),
				pe = (s("./src/lib/assertNever.ts"), s("./src/lib/sentry/index.ts"));
			var be = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				he = s("./src/reddit/icons/svgs/Collection/index.tsx"),
				ge = s("./src/reddit/icons/svgs/Event/index.tsx"),
				fe = s("./src/reddit/icons/svgs/Gild/index.tsx"),
				xe = s("./src/reddit/icons/svgs/ModLogPosts/index.tsx"),
				Ee = s("./src/reddit/icons/svgs/Negative/index.tsx"),
				ve = s("./src/reddit/icons/svgs/Positive/index.tsx"),
				_e = s("./src/reddit/icons/svgs/Redditor/index.tsx"),
				Ce = s("./src/reddit/icons/svgs/Settings/index.tsx"),
				ke = s("./src/reddit/icons/svgs/Tag/index.tsx"),
				ye = s("./src/reddit/icons/svgs/Wiki/index.tsx"),
				Se = s("./src/reddit/models/Comment/index.ts"),
				Oe = s("./src/reddit/models/FeedElement/index.ts"),
				je = s("./src/reddit/components/ModerationLog/ModerationLogItem/index.m.less"),
				we = s.n(je);
			const Ie = ({
					action: e,
					urlPath: t
				}) => {
					const s = (e => {
							switch (e) {
								case "ALL_ACTIONS":
									return;
								case "ADD_CONTRIBUTOR":
								case "ADD_MODERATOR":
									return {
										type: k.REDDITOR, treatment: y.POSITIVE
									};
								case "BAN_USER":
								case "MUTE_USER":
								case "REMOVE_CONTRIBUTOR":
								case "REMOVE_MODERATOR":
									return {
										type: k.REDDITOR, treatment: y.NEGATIVE
									};
								case "CREATE_AWARD":
								case "MOD_AWARD_GIVEN":
									return {
										type: k.AWARD, treatment: y.POSITIVE
									};
								case "DELETE_AWARD":
								case "DISABLE_AWARD":
								case "ENABLE_AWARD":
								case "HIDDEN_AWARD":
									return {
										type: k.AWARD, treatment: y.NEGATIVE
									};
								case "ACCEPT_MODERATOR_INVITE":
								case "INVITE_MODERATOR":
								case "INVITE_SUBSCRIBER":
								case "SET_PERMISSIONS":
								case "UNBAN_USER":
								case "UNINVITE_MODERATOR":
								case "UNMUTE_USER":
									return {
										type: k.REDDITOR, treatment: y.NONE
									};
								case "APPROVE_COMMENT":
								case "SHOW_COMMENT":
									return {
										type: k.COMMENT, treatment: y.POSITIVE
									};
								case "REMOVE_COMMENT":
								case "SPAM_COMMENT":
									return {
										type: k.COMMENT, treatment: y.NEGATIVE
									};
								case "EDIT_FLAIR":
									return {
										type: k.FLAIR, treatment: y.NONE
									};
								case "APPROVE_LINK":
									return {
										type: k.POST, treatment: y.POSITIVE
									};
								case "REMOVE_LINK":
								case "SPAM_LINK":
									return {
										type: k.POST, treatment: y.NEGATIVE
									};
								case "LOCK":
								case "MARK_NSFW":
								case "MARK_ORIGINAL_CONTENT":
								case "SET_CONTEST_MODE":
								case "SET_SUGGESTEDSORT":
								case "SPOILER":
								case "UNLOCK":
								case "UNSET_CONTEST_MODE":
								case "UNSPOILER":
									return {
										type: k.POST, treatment: y.NONE
									};
								case "DISTINGUISH":
								case "IGNORE_REPORTS":
								case "SNOOZE_REPORTS":
								case "STICKY":
								case "UNIGNORE_REPORTS":
								case "UNSNOOZE_REPORTS":
								case "UNSTICKY":
									return {
										type: k.MULTIPLE, treatment: y.NONE
									};
								case "ADD_COMMUNITY_TOPICS":
								case "ADJUST_POST_CROWD_CONTROL_LEVEL":
								case "REMOVE_COMMUNITY_TOPICS":
								case "COMMUNITY_STYLING":
								case "COMMUNITY_WIDGETS":
								case "CREATE_RULE":
								case "DELETE_RULE":
								case "EDIT_POST_REQUIREMENTS":
								case "EDIT_RULE":
								case "REORDER_RULES":
								case "REORDER_MODERATORS":
								case "EDIT_SETTINGS":
								case "MODMAIL_ENROLLMENT":
								case "SUBMIT_CONTENT_RATING_SURVEY":
								case "DELETE_OVERRIDDEN_CLASSIFICATION":
								case "OVERRIDE_CLASSIFICATION":
									return {
										type: k.SETTINGS, treatment: y.NONE
									};
								case "REMOVE_WIKI_CONTRIBUTOR":
								case "WIKI_BANNED":
									return {
										type: k.WIKI, treatment: y.NEGATIVE
									};
								case "WIKI_CONTRIBUTOR":
								case "WIKI_PAGE_LISTED":
								case "WIKI_PERM_LEVEL":
								case "WIKI_REVISE":
								case "WIKI_UNBANNED":
									return {
										type: k.WIKI, treatment: y.NONE
									};
								case "COLLECTIONS":
									return {
										type: k.COLLECTION, treatment: y.NONE
									};
								case "EVENTS":
									return {
										type: k.EVENT, treatment: y.NONE
									};
								case "CREATE_SCHEDULED_POST":
								case "EDIT_SCHEDULED_POST":
								case "DELETE_SCHEDULED_POST":
								case "SUBMIT_SCHEDULED_POST":
									return {
										type: k.POST, treatment: y.NONE
									};
								default:
									return void pe.c.captureMessage(`Unknown mod action "${e}"`)
							}
						})(e.action),
						n = e.target && e.target.__typename,
						a = n === Se.d.Comment || Se.d.DeletedComment;
					let o;
					switch (s && s.type) {
						case k.AWARD:
							o = r.a.createElement(fe.a, {
								className: we.a.icon
							});
							break;
						case k.COMMENT:
							o = r.a.createElement(be.a, null);
							break;
						case k.FLAIR:
							o = r.a.createElement(ke.a, {
								className: we.a.icon
							});
							break;
						case k.POST:
							o = r.a.createElement(xe.a, {
								className: we.a.icon
							});
							break;
						case k.REDDITOR:
							o = r.a.createElement(_e.a, {
								className: we.a.icon
							});
							break;
						case k.SETTINGS:
							o = r.a.createElement(Ce.a, {
								className: we.a.icon
							});
							break;
						case k.WIKI:
							o = r.a.createElement(ye.a, {
								className: we.a.icon
							});
							break;
						case k.COLLECTION:
							o = r.a.createElement(he.a, {
								className: we.a.icon
							});
							break;
						case k.EVENT:
							o = r.a.createElement(ge.a, {
								className: we.a.icon
							});
							break;
						case k.MULTIPLE:
							a && (o = r.a.createElement(be.a, null)), n === Oe.a.SubredditPost && (o = r.a.createElement(xe.a, {
								className: we.a.icon
							}))
					}
					const i = _[e.action];
					return r.a.createElement(S.a, {
						className: we.a.actionLink,
						to: t
					}, r.a.createElement("span", {
						className: we.a.iconWrapper
					}, o, s && s.treatment === y.POSITIVE ? r.a.createElement(ve.a, {
						className: we.a.positiveTreatment
					}) : s && s.treatment === y.NEGATIVE ? r.a.createElement(Ee.a, {
						className: we.a.negativeTreatment
					}) : null), i && i())
				},
				Ne = ({
					action: e
				}) => {
					const t = e.target && e.target.__typename;
					let s, n, a, o = e.target;
					switch (t) {
						case Oe.a.SubredditPost:
							s = (o = o).authorInfo && o.authorInfo.__typename === ue.c.AvailableRedditor && o.authorInfo.name || null, n = o.title, a = o.permalink;
							break;
						case Oe.a.DeletedSubredditPost:
							s = null, n = (o = o).title, a = o.permalink;
							break;
						case ue.c.AvailableRedditor:
							s = (o = o) && o.name || null, n = null;
							break;
						case Se.d.Comment:
							s = (o = o).authorInfo && o.authorInfo.__typename === ue.c.AvailableRedditor && o.authorInfo.name || null, n = o.content && o.content.markdown, a = o.permalink;
							break;
						case Se.d.DeletedComment:
							s = null, n = (o = o).postInfo && o.postInfo.title, a = o.postInfo && o.postInfo.permalink;
							break;
						default:
							s = null, n = null, a = void 0
					}
					let i = e.details;
					C[e.details] && (i = e.details && C[e.details]());
					let d = e.actionNotes || i;
					return e.actionNotes && i && (d = `${i}: ${e.actionNotes}`), r.a.createElement("div", {
						className: we.a.detailsContainer
					}, s && !E.includes(s) ? r.a.createElement(ce.a, {
						tooltipId: `userlink-${e.id}`,
						user: s,
						sendHoverCardEvent: ie.a
					}, r.a.createElement(le.a, {
						className: we.a.usernameLink,
						author: s
					}, `u/${s}`)) : s, n && a && r.a.createElement("a", {
						className: we.a.detailsContent,
						target: "_blank",
						rel: "noopener noreferrer",
						href: a
					}, n), d && r.a.createElement("span", {
						className: we.a.detailsType
					}, `(${d})`))
				},
				Te = "mod-log-timestamp-";
			class Me extends r.a.Component {
				constructor() {
					super(...arguments), this.createTimestamp = e => {
						return new Date(e).toString()
					}, this.getTooltipId = e => `${Te}${e}`, this.getActionModeratorName = e => e && e.__typename === ue.c.AvailableRedditor ? e.name : null
				}
				render() {
					const {
						action: e,
						currentPageUrl: t,
						moderator: s,
						onHideTooltip: n,
						onShowTooltip: a
					} = this.props, o = this.getTooltipId(e.id), i = this.getActionModeratorName(e.moderator);
					return r.a.createElement("tr", {
						className: we.a.row
					}, r.a.createElement("td", null, r.a.createElement("span", {
						id: o,
						onMouseEnter: () => a(o),
						onMouseLeave: n,
						className: we.a.tooltip
					}, Object(de.d)(e.createdAt / 1e3), r.a.createElement(me.c, {
						className: we.a.createdAtTooltip,
						tooltipId: o,
						text: this.createTimestamp(e.createdAt)
					}))), r.a.createElement("td", {
						className: we.a.modNameCell
					}, i && !E.includes(i) ? r.a.createElement(ce.a, {
						tooltipId: `modlink-${e.id}`,
						user: i,
						sendHoverCardEvent: ie.a
					}, r.a.createElement(le.a, {
						author: i,
						className: we.a.usernameLink
					}, i)) : i), r.a.createElement("td", null, r.a.createElement(Ie, {
						action: e,
						urlPath: w({
							currentPageUrl: t,
							action: e.action,
							moderator: s
						})
					})), r.a.createElement("td", null, r.a.createElement(Ne, {
						action: e
					})))
				}
			}
			var Pe = Object(i.b)(null, e => ({
					onHideTooltip: () => e(Object(f.i)()),
					onShowTooltip: t => e(Object(f.f)({
						tooltipId: t
					}))
				}))(Me),
				Re = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				Fe = s("./src/reddit/components/ModHub/InfoTooltip/index.tsx"),
				Ae = s("./src/reddit/components/ModHub/PaginationButtons/index.tsx"),
				De = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				Le = s("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				Ue = s("./src/reddit/constants/parameters.ts"),
				Be = s("./src/reddit/contexts/PageLayer/index.tsx"),
				He = s("./src/reddit/components/ModerationLog/index.m.less"),
				We = s.n(He);
			const Ze = Object(Be.t)({
					currentPageUrl: Be.e,
					queryParams: Be.T
				}),
				Ve = Object(d.c)({
					actionsList: H,
					endCursor: W,
					nextPage: (e, {
						subredditId: t
					}) => e.pages.modHub.moderationLog.hasNextPage[t],
					previousPage: (e, {
						subredditId: t
					}) => e.pages.modHub.moderationLog.hasPreviousPage[t],
					startCursor: Z
				}),
				qe = Object(i.b)(Ve, (e, {
					subreddit: t
				}) => ({
					fetchAllModerators: () => e((e => async (t, s, {
						gqlContext: n
					}) => {
						const a = s(),
							o = Object(u.D)(a, e);
						if (a.pages.modHub.moderationLog.moderators[o]) return;
						const r = await Object(c.b)(n(), e);
						if (r.body) {
							const e = r.body.data.subreddit.moderators;
							if (e) {
								const s = Object(m.a)(e);
								t(b({
									normalizedModerators: s,
									subredditId: o
								}))
							}
						}
					})(t.name))
				}));
			class Ge extends r.a.Component {
				componentDidMount() {
					"complete" === document.readyState ? this.props.fetchAllModerators() : window.addEventListener("load", this.props.fetchAllModerators)
				}
				render() {
					const {
						actionsList: e,
						currentPageUrl: t,
						endCursor: s,
						nextPage: o,
						previousPage: i,
						queryParams: d,
						startCursor: l,
						subredditId: c
					} = this.props, m = d[Ue.n] || null, u = d[Ue.m] || null, p = {
						currentPageUrl: t,
						action: m,
						moderator: u,
						startCursor: l
					}, b = {
						currentPageUrl: t,
						endCursor: s,
						action: m,
						moderator: u
					};
					return r.a.createElement(De.a, {
						className: We.a.contentContainer
					}, r.a.createElement(De.b, null, a.fbt._("Mod log", null, {
						hk: "UdwRO"
					}), r.a.createElement(Re.a, {
						linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/360022402312`
					})), r.a.createElement(Le.a, null, r.a.createElement("span", {
						className: We.a.title
					}, a.fbt._("Filter by", null, {
						hk: "3RkGvd"
					})), r.a.createElement(oe, {
						action: m,
						currentPageUrl: t,
						moderator: u,
						subredditId: c
					}), r.a.createElement(Ae.a, {
						prevButtonEnabled: i,
						prevTo: w(p),
						nextButtonEnabled: o,
						nextTo: w(b)
					})), r.a.createElement("table", {
						className: We.a.table
					}, r.a.createElement("thead", null, r.a.createElement("tr", null, r.a.createElement("th", {
						className: We.a.timeColHeader
					}, a.fbt._("time", null, {
						hk: "1EnamY"
					})), r.a.createElement("th", {
						className: We.a.modNameColHeader
					}, a.fbt._("moderator", null, {
						hk: "22lRDF"
					})), r.a.createElement("th", {
						className: We.a.actionNameColHeader
					}, r.a.createElement("span", {
						className: We.a.tooltip
					}, a.fbt._("action", null, {
						hk: "243Ltb"
					}), r.a.createElement(Fe.a, {
						className: We.a.actionTooltip
					}, r.a.createElement("div", {
						className: We.a.actionTooltipDescription
					}, a.fbt._("Actions performed within your community", null, {
						hk: "3RTNED"
					})), r.a.createElement("div", {
						className: We.a.allIconsContainer
					}, r.a.createElement("div", {
						className: We.a.iconContainer
					}, r.a.createElement(xe.a, {
						className: We.a.icon
					}), a.fbt._("Post", null, {
						hk: "9rK7i"
					})), r.a.createElement("div", {
						className: We.a.iconContainer
					}, r.a.createElement(be.a, null), a.fbt._("Comment", null, {
						hk: "1N3Vo2"
					})), r.a.createElement("div", {
						className: We.a.iconContainer
					}, r.a.createElement(ke.a, {
						className: We.a.icon
					}), a.fbt._("Flair", null, {
						hk: "roX9r"
					})), r.a.createElement("div", {
						className: We.a.iconContainer
					}, r.a.createElement(ye.a, {
						className: We.a.icon
					}), a.fbt._("Wiki", null, {
						hk: "27Czfb"
					})), r.a.createElement("div", {
						className: We.a.iconContainer
					}, r.a.createElement(_e.a, {
						className: We.a.icon
					}), a.fbt._("User management", null, {
						hk: "NIFnh"
					})), r.a.createElement("div", {
						className: We.a.iconContainer
					}, r.a.createElement(Ce.a, {
						className: We.a.icon
					}), a.fbt._("Community settings", null, {
						hk: "139FAy"
					})), r.a.createElement("div", {
						className: We.a.iconContainer
					}, r.a.createElement(he.a, {
						className: We.a.icon
					}), a.fbt._("Collection", null, {
						hk: "3a6W4E"
					})), r.a.createElement("div", {
						className: We.a.iconContainer
					}, r.a.createElement(ge.a, {
						className: We.a.icon
					}), a.fbt._("Event", null, {
						hk: "2odtv8"
					})), r.a.createElement("div", {
						className: We.a.iconContainer
					}, r.a.createElement(fe.a, {
						className: We.a.icon
					}), a.fbt._("Award", null, {
						hk: "2l9uEL"
					})))))), r.a.createElement("th", null, r.a.createElement("span", {
						className: We.a.tooltip
					}, a.fbt._("details", null, {
						hk: "1hCsar"
					}), r.a.createElement(Fe.a, {
						text: a.fbt._("Displays the author, post or comment link, and any additional information", null, {
							hk: "1EN2HF"
						})
					}))))), r.a.createElement("tbody", null, e.map(e => r.a.createElement(Pe, {
						key: e.id,
						action: e,
						currentPageUrl: t,
						moderator: u
					})))), r.a.createElement("div", {
						className: We.a.bottomBarRow
					}, r.a.createElement(Ae.a, {
						prevButtonEnabled: i,
						prevTo: w(p),
						nextButtonEnabled: o,
						nextTo: w(b)
					})))
				}
			}
			t.a = Ze(qe(Ge))
		},
		"./src/reddit/components/ModerationPagesEmptyList/index.m.less": function(e, t, s) {
			e.exports = {
				NoResultsContainer: "FIy4e_7DNe0P9cdi_1jVn",
				noResultsContainer: "FIy4e_7DNe0P9cdi_1jVn",
				NoResultsText: "_3V0T64xptTp5xLaY-1nsaz",
				noResultsText: "_3V0T64xptTp5xLaY-1nsaz"
			}
		},
		"./src/reddit/components/ModerationPagesEmptyList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "c", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/ModerationPagesEmptyList/index.m.less"),
				i = s.n(r);
			const d = o.a.div("NoResultsContainer", i.a),
				l = o.a.div("NoResultsText", i.a);

			function c(e) {
				const {
					childrenPosition: t = "top"
				} = e;
				return a.a.createElement(d, {
					className: e.className
				}, "top" === t && e.children, a.a.createElement(l, null, e.text), "bottom" === t && e.children)
			}
		},
		"./src/reddit/components/ModeratorsList/AddModeratorModal/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "TOhrvfHoucDPr36mCCzXd",
				titleFontH2: "_3brDTRw250hGX1o5_C0hbB",
				titleFontH3: "_1wry80KT9v8gZ-OR85HxZU",
				titleFontH4: "_3UyiSE-qM-508iK8v3J9VE",
				titleFontH5: "_1X7-zzcj5Xf8vTf2xtYjK5",
				titleFontH6: "_2o19XEin0G5ad6iDvABrhH",
				metadataFont: "_1IpedXmIlnKyWpICNENnHX",
				flairFont: "_17kIb-dmfAlFCaIsLz34ar",
				labelsFont: "_3IrRBgoth_MxadAqzwGE2p",
				actionFont: "_1F_YPbXlF7ItI0z0j2Kdvy",
				smallButtonFont: "Irj9r66tO2hdWqbJx-vWa",
				largeButtonFont: "_26FBjOBHlTgNO9o-fMxWOX",
				strongTextFont: "_2umiFjo_kHT370YVhqkBUV",
				tabFont: "_1DLO-Qu2r3PHt-swAklwVx",
				buttonFontXS: "_2v4AgLqNSVXbMZLYk9vcId",
				buttonFontXs: "_2v4AgLqNSVXbMZLYk9vcId",
				buttonFontS: "_2MZUL_NnTj8rQV3EzNYnUE",
				buttonFontM: "_3cvFNq2HJE_JQWxO1GFYqj",
				buttonFontL: "_3PGa9K2pADItl7cyT0ykh_",
				buttonFontXL: "_1ZxChwU_-XfEgc5UHBhcTo",
				buttonFontXl: "_1ZxChwU_-XfEgc5UHBhcTo",
				bodyFontH1: "czPuE4HoIQInpzrURaqrX",
				bodyFontH2: "_1RMqo3EKzteTfSdM5Q-OSg",
				bodyFontH3: "_1SHo5_8OixTqxTjJ466mw1",
				bodyFontH4: "_3_zdAqdo55tnx5RHhyuGVr",
				bodyFontH5: "_22jno3ihRm-Ef63KN0Wuxa",
				bodyFontH6: "_28OREyYTHZDHgLjcK4pt_d",
				bodyFont: "_38nKHi6IDujIOM7SuazWPd",
				bodyFontSmall: "_1lPuNthSPFYSROqTVgJlNG",
				bodyFontMono: "_3C9ynyJ6Z174Fb3-8O20xa",
				footer: "_1a_UtwKPW009WQq9JDInTY",
				checkbox: "hXaFasafnItuHCckiO50p",
				checkboxDescription: "_2HjmM9sJH5PNkLQde58pxS",
				checkboxContainer: "_15zz-Q8aRGCDeqROyYsa6f",
				divider: "_1QbYDWR424D6xhw9foYGiP",
				primaryButton: "h4QlBfFmd6UnAtiNaOhcR",
				SecondaryText: "jJBOgTxr1pZp_VDUmHpJ3",
				secondaryText: "jJBOgTxr1pZp_VDUmHpJ3",
				ModalBody: "_2UK71LqBvNes-Kto-uSxfU",
				modalBody: "_2UK71LqBvNes-Kto-uSxfU",
				automodMore: "_2IpMI7l5irmIV4rSq0_hXy"
			}
		},
		"./src/reddit/components/ModeratorsList/InvitePendingModal.m.less": function(e, t, s) {
			e.exports = {
				ModalText: "LuEOOX6cpsihxJHcF5aDv",
				modalText: "LuEOOX6cpsihxJHcF5aDv",
				ModalTextBold: "_3FiaV5-fR6fAX63py6Vyzz",
				modalTextBold: "_3FiaV5-fR6fAX63py6Vyzz",
				PrimaryButton: "_1s7NYS-cterYTwRKWqmaY6",
				primaryButton: "_1s7NYS-cterYTwRKWqmaY6",
				SecondaryButton: "_31o7G_2349tIzHKunBJEua",
				secondaryButton: "_31o7G_2349tIzHKunBJEua",
				Section: "K3DxSh_MxIy1lMkeHIPMc",
				section: "K3DxSh_MxIy1lMkeHIPMc",
				Image: "_2kAbqMQ0IHDV7bXgZ6Jsmf",
				image: "_2kAbqMQ0IHDV7bXgZ6Jsmf",
				ModalMain: "_3Nec6X3UqKJgLUGDaw4NCq",
				modalMain: "_3Nec6X3UqKJgLUGDaw4NCq"
			}
		},
		"./src/reddit/components/ModeratorsList/InvitedModeratorsList.m.less": function(e, t, s) {
			e.exports = {
				ListTitle: "_1LuVAChAgGbcgUPh_K7ebp",
				listTitle: "_1LuVAChAgGbcgUPh_K7ebp",
				ListContainer: "_1IFQy3zyz-Lgs7iYZtQaPI",
				listContainer: "_1IFQy3zyz-Lgs7iYZtQaPI"
			}
		},
		"./src/reddit/components/ModeratorsList/Moderator.m.less": function(e, t, s) {
			e.exports = {
				PencilIcon: "_2Pdzq06b5akGcY4hZ05n_5",
				pencilIcon: "_2Pdzq06b5akGcY4hZ05n_5",
				TrashIcon: "_2TU9GRodUTR72kz4zcFzxJ",
				trashIcon: "_2TU9GRodUTR72kz4zcFzxJ",
				InteractiveDiv: "qaNZ40bbce8HBshNk04f0",
				interactiveDiv: "qaNZ40bbce8HBshNk04f0"
			}
		},
		"./src/reddit/components/ModeratorsList/ResignAsModeratorModal/index.m.less": function(e, t, s) {
			e.exports = {
				PrimaryButton: "_3j2WCnh8ZjDRHIILJwKzkx",
				primaryButton: "_3j2WCnh8ZjDRHIILJwKzkx"
			}
		},
		"./src/reddit/components/ModeratorsList/index.m.less": function(e, t, s) {
			e.exports = {
				ListContainer: "_3s9PIWHO5f49Yj01FelAkk",
				listContainer: "_3s9PIWHO5f49Yj01FelAkk",
				SecondaryButton: "_3wQwmI4Vsj0qouIT5DTZo",
				secondaryButton: "_3wQwmI4Vsj0qouIT5DTZo",
				EditableTitle: "_1IBuDqoejky7tmj25quCUh",
				editableTitle: "_1IBuDqoejky7tmj25quCUh",
				UsersLoading: "_1oLmt3eyMItCQozx1nTk1E",
				usersLoading: "_1oLmt3eyMItCQozx1nTk1E"
			}
		},
		"./src/reddit/components/ModeratorsList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/addQueryParams/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				m = s("./src/lib/stripQueryParams/index.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/actions/subredditModeration/index.ts"),
				b = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				h = s("./src/reddit/components/ModHub/PaginationButtons/index.tsx"),
				g = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				f = s("./src/reddit/components/SubredditModerationSearch/index.tsx"),
				x = s("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				E = s("./src/reddit/components/SubredditModerationUserItem/index.tsx"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = s("./src/reddit/controls/Button/index.tsx"),
				C = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				k = s("./src/reddit/models/SubredditModeration/index.ts"),
				y = s("./src/reddit/selectors/activeModalId.ts"),
				S = s("./src/reddit/selectors/meta.ts"),
				O = s("./src/reddit/selectors/moderatorPermissions.ts"),
				j = s("./src/lib/objectSelector/index.ts");
			const w = [],
				I = Object(j.a)((e, {
					subredditId: t,
					before: s,
					after: n
				}) => {
					const a = Object(k.d)(t, n, s),
						o = e.pages.modHub.moderators.userOrder.data[t] && e.pages.modHub.moderators.userOrder.data[t][a];
					return o ? o.map(s => e.pages.modHub.moderators.models[t][s]) : []
				}),
				N = Object(j.a)((e, {
					subredditId: t
				}) => {
					const s = e.pages.modHub.moderators.invitedModerators.userOrder[t];
					return s ? s.map(s => e.pages.modHub.moderators.invitedModerators.models[t][s]) : w
				});
			var T = s("./src/reddit/selectors/user.ts"),
				M = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/higherOrderComponents/asModal/index.tsx")),
				P = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				R = s("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				F = s("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				A = s("./src/reddit/controls/TextButton/index.tsx"),
				D = s("./src/reddit/helpers/isValidUsername/index.tsx"),
				L = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				U = s("./src/reddit/models/ModeratingSubreddits/index.ts"),
				B = s("./src/reddit/components/ModeratorsList/AddModeratorModal/index.m.less"),
				H = s.n(B);
			const W = e => {
					switch (e) {
						case U.c.access:
							return a.fbt._("Manage Users", null, {
								hk: "2cVPGG"
							});
						case U.c.config:
							return a.fbt._("Manage Settings", null, {
								hk: "10NyX"
							});
						case "chat_config":
						case U.c.chatConfig:
							return a.fbt._("Manage Chats", null, {
								hk: "3U1O8t"
							});
						case "chat_operator":
						case U.c.chatOperator:
							return a.fbt._("Monitor Chats", null, {
								hk: "3x751K"
							});
						case U.c.flair:
							return a.fbt._("Manage Flair", null, {
								hk: "IgS6W"
							});
						case U.c.mail:
							return a.fbt._("Manage Mod Mail", null, {
								hk: "1H5qJm"
							});
						case U.c.posts:
							return a.fbt._("Manage Posts & Comments", null, {
								hk: "1IVGI9"
							});
						case U.c.wiki:
							return a.fbt._("Manage Wiki Pages", null, {
								hk: "4gZJ2V"
							});
						case U.c.all:
						default:
							return a.fbt._("Everything", null, {
								hk: "24E26J"
							})
					}
				},
				Z = e => {
					switch (e) {
						case U.c.access:
							return a.fbt._("Approve submitters and ban and mute users*.", null, {
								hk: "KndNL"
							});
						case U.c.config:
							return a.fbt._("Manage community settings, appearance, emojis, rules, and AutoMod*.", null, {
								hk: "4djZSI"
							});
						case "chat_config":
						case U.c.chatConfig:
							return a.fbt._("Create and manage chats, set up filters and rate limits, and block domains.", null, {
								hk: "3wcRBu"
							});
						case "chat_operator":
						case U.c.chatOperator:
							return a.fbt._("Remove messages, remove users, and lock chats.", null, {
								hk: "TFYA1"
							});
						case U.c.flair:
							return a.fbt._("Create and manage user and post flair.", null, {
								hk: "1oN7ft"
							});
						case U.c.mail:
							return a.fbt._("Read and respond to modmail and mute users*.", null, {
								hk: "2F8Yd"
							});
						case U.c.posts:
							return a.fbt._("Access queues, take action on content, and manage collections and events.", null, {
								hk: "vJ5lR"
							});
						case U.c.wiki:
							return a.fbt._("Create and manage wiki pages and AutoMod*.", null, {
								hk: "JarEL"
							});
						case U.c.all:
						default:
							return a.fbt._("Full access including the ability to manage moderator access and permissions.", null, {
								hk: "2r1vEj"
							})
					}
				},
				V = Object(i.b)(null, (e, {
					subredditId: t,
					after: s,
					before: n
				}) => ({
					addModerator: (s, n) => e(Object(p.b)(t, s, n)),
					editModerator: (s, n, a) => e(Object(p.d)(t, s, n, a)),
					removeModerator: a => e(Object(p.k)(t, a, s, n))
				})),
				q = c.a.span("SecondaryText", H.a),
				G = c.a.wrapped(P.d, "ModalBody", H.a);
			class z extends r.a.Component {
				constructor(e) {
					super(e), this.onUsernameChange = e => {
						this.setState({
							username: e.currentTarget.value
						})
					}, this.toggleSelect = (e, t) => {
						if (this.props.isEditingSelf) return;
						const s = {
							...this.state.permissions,
							[e]: !t
						};
						"all" === e ? Object.keys(s).forEach(e => s[e] = s.all) : s[e] || (s.all = !1), this.setState({
							permissions: s
						}), this.props.sendEventWithName("permission")()
					}, this.onSubmit = e => {
						e.preventDefault();
						const {
							props: t,
							state: s
						} = this;
						t.isEditingSelf ? t.toggleModal() : (t.isEditingPerms && t.user ? (t.editModerator(s.username, s.permissions, t.user.id), t.sendEventWithName("edit")()) : (t.addModerator(s.username, s.permissions), t.sendEventWithName("invite_moderator")()), t.toggleModal())
					}, this.onRemove = () => {
						this.props.user && (this.props.removeModerator(this.props.user.id), this.props.sendEventWithName("remove")()), this.props.toggleModal()
					}, this.state = {
						username: e.user ? e.user.username : "",
						permissions: e.user ? e.user.modPermissions : U.a
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, s = ["all", ...Object.keys(t.permissions).filter(e => "all" !== e)];
					return r.a.createElement(G, null, r.a.createElement(P.h, null, r.a.createElement(L.a, null, r.a.createElement(P.p, null, e.isEditingPerms ? a.fbt._("Edit", null, {
						hk: "1nftDt"
					}) : a.fbt._("Invite Moderators", null, {
						hk: "hkBh1"
					}), e.username && a.fbt._(": u/{username}", [a.fbt._param("username", e.username)], {
						hk: "2FWWEd"
					})), r.a.createElement(A.a, {
						onClick: e.toggleModal
					}, r.a.createElement(P.b, null)))), r.a.createElement("form", {
						onSubmit: this.onSubmit
					}, r.a.createElement(P.k, null, !e.isEditingPerms && r.a.createElement(P.g, null, r.a.createElement(R.d, {
						autoFocus: !0,
						placeholder: a.fbt._("Enter Username", null, {
							hk: "2fYsDe"
						}),
						onChange: this.onUsernameChange
					})), r.a.createElement(P.p, null, e.isEditingSelf ? r.a.createElement(r.a.Fragment, null, a.fbt._("Access", null, {
						hk: "2We3HN"
					}), r.a.createElement(q, null, a.fbt._("(can't edit)", null, {
						hk: "3LZvZi"
					}))) : a.fbt._("Give them access to...", null, {
						hk: "1DzYmU"
					})), t.permissions && s.map((s, n) => r.a.createElement("div", {
						className: H.a.checkboxContainer,
						key: s
					}, r.a.createElement(F.a, {
						autoFocus: !(!e.isEditingPerms || 0 !== n) || void 0,
						className: H.a.checkbox,
						disabled: e.isEditingSelf,
						isSelected: t.permissions[s],
						onClick: () => this.toggleSelect(s, t.permissions[s]),
						text: W(s)
					}), r.a.createElement("p", {
						className: H.a.checkboxDescription
					}, Z(s)), "all" === s && r.a.createElement("hr", {
						className: H.a.divider
					}))), r.a.createElement("p", {
						className: H.a.automodMore
					}, a.fbt._("*Note: To manage AutoMod, mods must have access to Wiki Pages and Manage Settings. To mute users, mods must have access to Mod Mail and Manage Users.", null, {
						hk: "1AYX38"
					}))), r.a.createElement(P.f, {
						className: H.a.footer
					}, r.a.createElement(_.i, {
						className: H.a.primaryButton,
						"data-redditstyle": !0,
						disabled: !e.username && !Object(D.a)(t.username),
						type: "submit"
					}, e.isEditingPerms ? a.fbt._("Save", null, {
						hk: "3h5uV"
					}) : a.fbt._("Invite", null, {
						hk: "2F1syY"
					})), r.a.createElement(P.a, {
						autoFocus: !!e.isEditingSelf || void 0,
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, a.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), e.isEditingPerms && !e.isEditingSelf && r.a.createElement(P.r, {
						onClick: this.onRemove,
						"data-redditstyle": !0
					}, a.fbt._("Remove", null, {
						hk: "2aiywk"
					})))))
				}
			}
			var K = Object(M.a)(V(z)),
				Q = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				J = s("./src/reddit/components/TrackingHelper/index.tsx"),
				X = s("./src/reddit/selectors/telemetry.ts");
			const Y = e => ({
					screen: X.screen(e),
					subreddit: X.subreddit(e)
				}),
				$ = e => t => ({
					source: "remove_mod_invite",
					action: "click",
					noun: e,
					...Y(t)
				});
			var ee = s("./src/lib/constants/index.ts"),
				te = s("./src/lib/timeAgo/index.ts"),
				se = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				ne = s("./src/reddit/icons/svgs/Trash/index.tsx"),
				ae = s("./src/reddit/components/ModeratorsList/Moderator.m.less"),
				oe = s.n(ae);
			const re = e => {
					const t = [],
						s = Object.keys(e);
					return e.all ? W("all") : (s.forEach((function(s) {
						e[s] && t.push(W(s))
					})), 0 === t.length ? a.fbt._("No permissions", null, {
						hk: "3eH05z"
					}) : t.join(", "))
				},
				ie = c.a.wrapped(se.a, "PencilIcon", oe.a),
				de = c.a.wrapped(ne.a, "TrashIcon", oe.a),
				le = c.a.div("InteractiveDiv", oe.a),
				ce = e => r.a.createElement(le, {
					onClick: e.onClick
				}, e.moderatorType === k.c.Editable ? r.a.createElement(ie, null) : r.a.createElement(de, null));
			var me = e => r.a.createElement(E.b, {
					additionalText: re(e.moderator.modPermissions),
					pageName: ee.Zb.Moderators,
					primaryButton: e.moderatorType && e.onClick && r.a.createElement(ce, {
						onClick: e.onClick,
						moderatorType: e.moderatorType
					}),
					timeAgo: Object(te.d)(e.moderator.moddedAtUTC),
					subredditId: e.subredditId,
					userIcon: e.moderator.accountIcon,
					username: e.moderator.username,
					moderatorType: e.moderatorType
				}),
				ue = s("./src/reddit/components/ModeratorsList/InvitedModeratorsList.m.less"),
				pe = s.n(ue);
			const be = c.a.div("ListTitle", pe.a),
				he = c.a.div("ListContainer", pe.a),
				ge = Object(d.c)({
					invitedModeratorsList: N,
					isConfirmModalOpen: Object(y.b)("ModerationPage--Modal--RemoveModeratorConfirmation")
				});
			class fe extends r.a.Component {
				constructor(e) {
					super(e), this.onToggleRemovalModal = e => {
						this.setState({
							selectedModerator: e
						}), this.props.toggleConfirmUserActionModal(), e && this.props.sendEventWithName("remove_mod_invite")()
					}, this.state = {
						selectedModerator: void 0
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					if (0 === e.invitedModeratorsList.length) return null;
					const s = () => this.props.sendEvent($("cancel"));
					return r.a.createElement("div", null, r.a.createElement(be, null, a.fbt._("Invited moderators", null, {
						hk: "2UdpbF"
					})), r.a.createElement(he, null, e.invitedModeratorsList.map(t => r.a.createElement(me, {
						key: t.id,
						moderator: t,
						moderatorType: k.c.Invited,
						onClick: () => this.onToggleRemovalModal(t),
						subredditId: e.subredditId
					}))), e.isConfirmModalOpen && t.selectedModerator && r.a.createElement(Q.a, {
						actionText: a.fbt._("Remove", null, {
							hk: "nUCi0"
						}),
						modalText: a.fbt._("Are you sure you want to rescind the moderator invite to {username}", [a.fbt._param("username", t.selectedModerator.username)], {
							hk: "4c5sRy"
						}),
						onConfirm: () => e.removeInvitedModerator(t.selectedModerator.id),
						toggleModal: this.onToggleRemovalModal,
						onCancel: s,
						onClose: s,
						trackClick: () => this.props.sendEvent($("remove"))
					}))
				}
			}
			var xe = Object(i.b)(ge, (e, {
					subredditId: t
				}) => ({
					removeInvitedModerator: s => e(Object(p.j)(t, s)),
					toggleConfirmUserActionModal: () => e(Object(u.i)("ModerationPage--Modal--RemoveModeratorConfirmation"))
				}))(Object(J.c)(fe)),
				Ee = s("./src/reddit/components/ModeratorsList/InvitePendingModal.m.less"),
				ve = s.n(Ee);
			const {
				fbt: _e
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ce = Object(i.b)(null, (e, {
				subredditId: t
			}) => ({
				acceptInvite: () => e(Object(p.a)(t)),
				declineInvite: () => e(Object(p.c)(t))
			})), ke = c.a.wrapped(P.o, "ModalText", ve.a), ye = c.a.wrapped(ke, "ModalTextBold", ve.a), Se = c.a.wrapped(_.i, "PrimaryButton", ve.a), Oe = c.a.wrapped(_.l, "SecondaryButton", ve.a), je = c.a.div("Section", ve.a), we = c.a.img("Image", ve.a), Ie = c.a.wrapped(P.k, "ModalMain", ve.a);
			var Ne = Object(M.a)(Ce(e => r.a.createElement(P.d, null, r.a.createElement(Ie, null, r.a.createElement(L.a, null, r.a.createElement("div", null), r.a.createElement(A.a, {
					onClick: e.toggleModal
				}, r.a.createElement(P.b, null))), r.a.createElement(je, null, r.a.createElement(we, {
					src: `${n.a.assetPath}/img/snoo-success@2x.png`
				})), r.a.createElement(ye, null, _e._("Congrats!", null, {
					hk: "T4Ccw"
				})), r.a.createElement(ke, null, _e._("You are invited to become a moderator!", null, {
					hk: "1jRLWz"
				}))), r.a.createElement(P.f, null, r.a.createElement(Oe, {
					onClick: t => {
						e.toggleModal(), e.declineInvite(), e.sendEventWithName("declineinvite")()
					},
					"data-redditstyle": !0
				}, _e._("Decline", null, {
					hk: "1iOsJe"
				})), r.a.createElement(Se, {
					onClick: t => {
						e.toggleModal(), e.acceptInvite(), e.sendEventWithName("acceptinvite")()
					},
					"data-redditstyle": !0
				}, _e._("Accept", null, {
					hk: "2fkYc4"
				})))))),
				Te = s("./src/reddit/components/ModeratorsList/ResignAsModeratorModal/index.m.less"),
				Me = s.n(Te);
			const {
				fbt: Pe
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Re = Object(i.b)(null, (e, {
				subredditId: t,
				userId: s,
				after: n,
				before: a
			}) => ({
				removeModerator: () => e(Object(p.k)(t, s, n, a))
			})), Fe = c.a.wrapped(_.i, "PrimaryButton", Me.a);
			class Ae extends r.a.Component {
				constructor() {
					super(...arguments), this.onRemove = () => {
						this.props.removeModerator(), this.props.sendEventWithName("resign")(), this.props.toggleModal()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return r.a.createElement(P.d, null, r.a.createElement(P.h, null, r.a.createElement(L.a, null, r.a.createElement(P.p, null, Pe._("Leave as mod", null, {
						hk: "3ajWeG"
					})), r.a.createElement(A.a, {
						onClick: e.toggleModal
					}, r.a.createElement(P.b, null)))), r.a.createElement(P.k, null, r.a.createElement(P.o, null, Pe._("Once you leave as a mod, you will lose mod permissions and will be unable to access any mod tools for this community. Are you sure you wish to leave as a mod of this community?", null, {
						hk: "4qm9md"
					}))), r.a.createElement(P.f, null, r.a.createElement(P.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, Pe._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(Fe, {
						onClick: this.onRemove,
						"data-redditstyle": !0
					}, Pe._("Leave", null, {
						hk: "2ZHZVX"
					}))))
				}
			}
			var De = Object(M.a)(Re(Ae)),
				Le = s("./src/reddit/components/ModeratorsList/index.m.less"),
				Ue = s.n(Le);
			const Be = c.a.div("ListContainer", Ue.a),
				He = c.a.wrapped(_.l, "SecondaryButton", Ue.a),
				We = Object(v.t)({
					currentPageUrl: v.e
				}),
				Ze = Object(d.c)({
					currentUser: T.j,
					nextAfterToken: (e, {
						subredditId: t
					}) => e.pages.modHub.moderators.loadMoreModerators[t] && e.pages.modHub.moderators.loadMoreModerators[t].after,
					nextAfterEditableToken: (e, {
						subredditId: t
					}) => e.pages.modHub.moderators.loadMoreEditableModerators[t] && e.pages.modHub.moderators.loadMoreEditableModerators[t].after,
					nextBeforeToken: (e, {
						subredditId: t
					}) => e.pages.modHub.moderators.loadMoreModerators[t] && e.pages.modHub.moderators.loadMoreModerators[t].before,
					nextBeforeEditableToken: (e, {
						subredditId: t
					}) => e.pages.modHub.moderators.loadMoreEditableModerators[t] && e.pages.modHub.moderators.loadMoreEditableModerators[t].before,
					editableModerators: (e, {
						subredditId: t
					}) => e.pages.modHub.moderators.editableModerators[t] || null,
					editableModeratorsList: (e, {
						subredditId: t,
						beforeEditable: s,
						afterEditable: n
					}) => {
						const a = Object(k.d)(t, n, s),
							o = e.pages.modHub.moderators.editableUserOrder.data[t] && e.pages.modHub.moderators.editableUserOrder.data[t][a];
						return o ? o.map(s => e.pages.modHub.moderators.editableModerators[t][s]) : []
					},
					isInvitePending: (e, {
						subredditId: t
					}) => !!e.pages.modHub.moderators.invitePending[t],
					moderators: (e, {
						subredditId: t
					}) => e.pages.modHub.moderators.models[t] || null,
					moderatorsList: I,
					moderatorPermissions: O.l,
					isAddUserModalOpen: Object(y.b)("ModerationPage--Modal--AddModerator"),
					isEditableListPending: (e, t) => {
						const s = Object(k.d)(t.subredditId, t.afterEditable, t.beforeEditable);
						return !!e.pages.modHub.moderators.editableUserOrder.api.pending[s]
					},
					isInvitePendingModalOpen: Object(y.b)("ModerationPage--Modal--InvitePending"),
					isModeratorListPending: (e, t) => {
						const s = Object(k.d)(t.subredditId, t.after, t.before);
						return !!e.pages.modHub.moderators.userOrder.api.pending[s]
					},
					isResignAsModeratorModalOpen: Object(y.b)("ModerationPage--Modal--Resign"),
					origin: S.j,
					searchPending: e => !!e.pages.modHub.moderators.search.api.pending,
					searchResult: e => e.pages.modHub.moderators.search.result
				}),
				Ve = Object(i.b)(Ze, (e, {
					subredditId: t
				}) => ({
					searchForModerator: s => e(Object(p.h)(t, s)),
					toggleAddModeratorModal: () => e(Object(u.i)("ModerationPage--Modal--AddModerator")),
					toggleInvitePendingModal: () => e(Object(u.i)("ModerationPage--Modal--InvitePending")),
					toggleResignAsModModal: () => e(Object(u.i)("ModerationPage--Modal--Resign"))
				})),
				qe = c.a.div("EditableTitle", Ue.a),
				Ge = c.a.wrapped(E.a, "UsersLoading", Ue.a);
			class ze extends r.a.Component {
				constructor() {
					super(...arguments), this.state = k.a, this.toggleModal = (e, t) => () => {
						this.setState({
							userId: e,
							username: t
						}), this.props.isAddUserModalOpen || t || this.props.sendEventWithName("open_invite_dialog")(), this.props.toggleAddModeratorModal()
					}, this.onSearch = e => {
						this.props.searchForModerator(e), this.props.sendEventWithName("search_done")(), this.setState({
							searchTerm: e
						})
					}, this.cancelSearch = () => this.setState({
						searchTerm: null
					}), this.isButtonEnabled = (e, t) => !!(e && e.length > 0 && t), this.isModeratorsListPaginated = () => !(!this.props.nextBeforeToken && !this.props.nextAfterToken), this.renderEditableList = e => {
						const t = !(!e.nextBeforeEditableToken && !e.nextAfterEditableToken),
							s = e.isEditableListPending || e.isModeratorListPending;
						return r.a.createElement(r.a.Fragment, null, r.a.createElement(qe, null, a.fbt._("You can edit these moderators", null, {
							hk: "1KTZtm"
						})), t && r.a.createElement(x.a, null, r.a.createElement(h.a, {
							prevButtonEnabled: this.isButtonEnabled(e.editableModeratorsList, e.nextBeforeEditableToken),
							prevTo: Object(l.a)(Object(m.a)(`${e.origin}${e.currentPageUrl}`), {
								before: e.before,
								beforeEditable: e.nextBeforeEditableToken,
								after: e.after
							}),
							nextButtonEnabled: this.isButtonEnabled(e.editableModeratorsList, e.nextAfterEditableToken),
							nextTo: Object(l.a)(Object(m.a)(`${e.origin}${e.currentPageUrl}`), {
								after: e.after,
								afterEditable: e.nextAfterEditableToken,
								before: e.before
							})
						})), r.a.createElement(Be, null, e.editableModeratorsList && e.editableModeratorsList.length > 0 ? e.editableModeratorsList.map(e => r.a.createElement(me, {
							key: e.id,
							moderator: e,
							moderatorType: k.c.Editable,
							onClick: this.toggleModal(e.id, e.username),
							subredditId: this.props.subredditId
						})) : s ? r.a.createElement(Ge, null) : null))
					}
				}
				componentDidMount() {
					this.props.isInvitePending && !this.props.isInvitePendingModalOpen && this.props.toggleInvitePendingModal()
				}
				render() {
					const {
						props: e,
						state: t
					} = this, s = !!e.moderatorPermissions, o = Object(C.a)(e.moderatorPermissions);
					return r.a.createElement(r.a.Fragment, null, s && r.a.createElement(g.c, null, r.a.createElement(He, {
						onClick: e.toggleResignAsModModal
					}, a.fbt._("Leave as mod", null, {
						hk: "3TwqTg"
					})), o && r.a.createElement(_.i, {
						onClick: this.toggleModal(null, null)
					}, a.fbt._("Invite user as mod", null, {
						hk: "3lJRJW"
					}))), r.a.createElement(g.a, null, r.a.createElement(g.b, null, a.fbt._("Moderators of {subredditName}", [a.fbt._param("subredditName", e.subreddit.displayText)], {
						hk: "3p7NwA"
					}), r.a.createElement(b.a, {
						linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/360009381491`
					})), r.a.createElement(x.b, {
						onSearch: this.onSearch,
						activeSearchQuery: t.searchTerm
					}, !t.searchTerm && this.isModeratorsListPaginated() && r.a.createElement(h.a, {
						prevButtonEnabled: this.isButtonEnabled(e.moderatorsList, e.nextBeforeToken),
						prevTo: Object(l.a)(Object(m.a)(`${e.origin}${e.currentPageUrl}`), {
							afterEditable: e.afterEditable,
							before: e.nextBeforeToken,
							beforeEditable: e.beforeEditable
						}),
						nextButtonEnabled: this.isButtonEnabled(e.moderatorsList, e.nextAfterToken),
						nextTo: Object(l.a)(Object(m.a)(`${e.origin}${e.currentPageUrl}`), {
							after: e.nextAfterToken,
							afterEditable: e.afterEditable,
							beforeEditable: e.beforeEditable
						})
					})), t.searchTerm ? r.a.createElement(f.a, {
						cancelSearch: this.cancelSearch,
						searchPending: e.searchPending,
						searchTerm: t.searchTerm,
						noResultsFound: !e.searchResult
					}, e.searchResult && r.a.createElement(me, {
						moderator: e.searchResult,
						moderatorType: e.searchResult.isEditable ? k.c.Editable : void 0,
						onClick: e.searchResult.isEditable ? this.toggleModal(e.searchResult.id, e.searchResult.username) : void 0,
						subredditId: e.subredditId
					})) : r.a.createElement(r.a.Fragment, null, r.a.createElement(Be, null, e.moderatorsList && e.moderatorsList.length > 0 ? e.moderatorsList.map(e => r.a.createElement(me, {
						key: e.id,
						moderator: e,
						subredditId: this.props.subredditId
					})) : e.isModeratorListPending ? r.a.createElement(Ge, null) : null), o && r.a.createElement(r.a.Fragment, null, this.renderEditableList(e), r.a.createElement(xe, {
						sendEventWithName: e.sendEventWithName,
						subredditId: e.subredditId
					})))), e.isAddUserModalOpen && r.a.createElement(K, {
						ignoreDefaultFocus: !0,
						after: e.afterEditable,
						before: e.beforeEditable,
						subredditId: e.subredditId,
						sendEventWithName: e.sendEventWithName,
						toggleModal: this.toggleModal(null, null),
						isEditingPerms: !!t.username,
						isEditingSelf: !(!t.userId || !e.currentUser) && t.userId === e.currentUser.id,
						username: t.username,
						user: t.userId && e.editableModerators ? e.editableModerators[t.userId] : null,
						withOverlay: !0
					}), e.currentUser && e.isResignAsModeratorModalOpen && r.a.createElement(De, {
						sendEventWithName: e.sendEventWithName,
						subredditId: e.subredditId,
						toggleModal: e.toggleResignAsModModal,
						userId: e.currentUser.id,
						withOverlay: !0
					}), e.isInvitePendingModalOpen && r.a.createElement(Ne, {
						sendEventWithName: e.sendEventWithName,
						subredditId: e.subredditId,
						toggleModal: e.toggleInvitePendingModal,
						withOverlay: !0
					}))
				}
			}
			t.a = We(Ve(ze))
		},
		"./src/reddit/components/MultiOptionSelect/OptionSearchBar/index.m.less": function(e, t, s) {
			e.exports = {
				optionSearchBarContainer: "_3eVrzdp5khbz6W2NhQv7kl",
				optionSearchBarError: "_3va8RfTnDLBo2hfMm5URpu",
				optionSearchBarReadOnly: "_2siJVLOBn72IxBt8i_A1gZ",
				loadingIcon: "_3UsfWdV2CKiIs_EOeGhVxv",
				input: "_1OEtZmrYX2ct3ycV1AaUZS",
				hiddenInput: "_3WSlf55CAQYRdOxtxENgA7",
				optionsOverflowIndication: "_2qfFc8Ix-QpBqu8UNEXeH3"
			}
		},
		"./src/reddit/components/MultiOptionSelect/OptionsListDropdown/index.m.less": function(e, t, s) {
			e.exports = {
				activeOption: "_2Kg5EXAuLcqhsBbdEr4SGZ",
				freeTextOption: "_2H29-4MOHAslt1eKYtcGaV",
				lastFixedOption: "_1ClyNNAK4vP9o_uoSwKe0Q",
				option: "_1xWVaijFIih7uj-n4FXzH2",
				availableOptionContainer: "T2jLhmuhOy8DeOHjz6WRG",
				addText: "_1OqThwyrfhl2eJ9YhWoy2I",
				optionsContainer: "_1ZmC1GBXYnksnMU9IrTAHd",
				relativeContainer: "_3SrGeaD5FxXfpWjhSAFBD-",
				dropdown: "_2dqCXnStO_Dc8Srt_lJqVj",
				dropdownHeaderText: "_2EaXrPilAtjz6VRh_xvOGU"
			}
		},
		"./src/reddit/components/MultiOptionSelect/SelectedOption/index.m.less": function(e, t, s) {
			e.exports = {
				selectedOptionComponentContainer: "_3nUaRUcJJfrvOWldA3i10S",
				closeIcon: "_1RvgsgnXdbtv2cwTTTbT7o",
				selectedOptionComponentContainerError: "_2Qpr0YORGp3CmDjJW9Txrf"
			}
		},
		"./src/reddit/components/MultiOptionSelect/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/some.js"),
				a = s.n(n),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/constants/keycodes.ts"),
				l = s("./src/reddit/components/MultiOptionSelect/OptionsListDropdown/index.m.less"),
				c = s.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class u extends r.a.Component {
				constructor() {
					super(...arguments), this.handleClick = () => {
						this.props.handleOptionSelected(this.props.index)
					}, this.handleMouseEnter = () => {
						this.props.handleOnMouseEnter(this.props.index)
					}
				}
				shouldComponentUpdate(e) {
					return e.className !== this.props.className || e.divRef !== this.props.divRef || e.displayText !== this.props.displayText
				}
				render() {
					const {
						addText: e,
						displayText: t,
						divRef: s,
						handleOnMouseEnter: n,
						handleOptionSelected: a,
						index: o,
						className: d,
						...l
					} = this.props;
					return r.a.createElement("div", m({
						className: Object(i.a)(c.a.availableOptionContainer, d)
					}, l, {
						onMouseEnter: this.handleMouseEnter,
						onClick: this.handleClick,
						ref: s
					}), e && r.a.createElement("span", {
						className: c.a.addText
					}, e, " "), t)
				}
			}
			class p extends r.a.Component {
				constructor(e) {
					super(e), this.handleOptionSelectedByIndex = e => {
						this.props.selectableOptions[e] && this.handleOptionSelected(this.props.selectableOptions[e])
					}, this.handleFreeTextOptionSelected = () => {
						this.handleOptionSelected({
							id: null,
							displayText: this.props.currentInput,
							selected: !0
						})
					}, this.clearSelectedIndex = () => {
						this.setSelectedIndex(-1)
					}, this.setOptionActiveByIndex = e => {
						"number" == typeof e && e > -1 && this.setSelectedIndex(e)
					}, this.setFreeTextOptionActive = () => {
						this.setSelectedIndex(this.getOptionsLength() - 1)
					}, this.state = {
						selectedIndex: -1
					}, this.scrollContainer = r.a.createRef(), this.optionsContainer = r.a.createRef(), this.activeOptionDOMRef = r.a.createRef()
				}
				focus() {
					this.optionsContainer.current && this.optionsContainer.current.focus()
				}
				matchesDOMElement(e) {
					return this.optionsContainer.current === e
				}
				handleOptionSelected(e) {
					this.handleOptionsSelected([e])
				}
				handleOptionsSelected(e) {
					this.props.onOptionsChanged(e.map(e => ({
						...e,
						selected: !0
					})))
				}
				setSelectedIndex(e) {
					this.setState({
						selectedIndex: e
					})
				}
				freeTextEntryActive() {
					return this.props.allowFreeTextEntry && this.props.currentInput
				}
				getOptionsLength() {
					return this.freeTextEntryActive() ? this.props.selectableOptions.length + 1 : this.props.selectableOptions.length
				}
				freeTextOptionSelected() {
					return this.freeTextEntryActive() && this.state.selectedIndex === this.getOptionsLength() - 1
				}
				validOptionSelected() {
					return this.state.selectedIndex > -1 && this.state.selectedIndex < this.getOptionsLength()
				}
				handlePaste(e) {
					if (e.clipboardData.types.includes("text/plain")) return e.preventDefault(), e.stopPropagation(), void this.handleOptionsSelected(e.clipboardData.getData("text/plain").split(d.b.Comma).filter(e => !!e).map(e => ({
						id: null,
						displayText: e.trim(),
						selected: !0
					})))
				}
				handleKeyPress(e) {
					const {
						splitOnCommaPress: t
					} = this.props;
					return e.which === d.a.ArrowUp ? (e.preventDefault(), e.stopPropagation(), this.setSelectedIndex(this.state.selectedIndex - 1 > -1 ? this.state.selectedIndex - 1 : this.getOptionsLength() - 1)) : e.which === d.a.ArrowDown ? (e.preventDefault(), e.stopPropagation(), this.setSelectedIndex(this.state.selectedIndex + 1 < this.getOptionsLength() ? this.state.selectedIndex + 1 : 0)) : e.which === d.a.Comma && t ? (e.preventDefault(), e.stopPropagation(), this.handleFreeTextOptionSelected()) : e.which === d.a.Enter ? (e.preventDefault(), e.stopPropagation(), !this.validOptionSelected() || this.freeTextOptionSelected() ? this.handleFreeTextOptionSelected() : this.handleOptionSelected(this.props.selectableOptions[this.state.selectedIndex])) : void 0
				}
				componentDidUpdate() {
					if (!this.activeOptionDOMRef.current || !this.scrollContainer.current) return;
					const e = this.activeOptionDOMRef.current.getBoundingClientRect(),
						t = this.scrollContainer.current.getBoundingClientRect();
					if (e.top < t.top || e.bottom > t.bottom) {
						if (0 === this.state.selectedIndex) return void(this.scrollContainer.current.scrollTop = 0);
						if (e.top < t.top) return void(this.scrollContainer.current.scrollTop = this.activeOptionDOMRef.current.offsetTop);
						this.scrollContainer.current.scrollTop += e.bottom - t.bottom
					}
				}
				shouldRenderDropdownHeaderText() {
					return !!this.props.dropdownHeaderText && (!this.freeTextEntryActive() || this.props.selectableOptions.length > 0)
				}
				render() {
					return r.a.createElement("div", {
						className: c.a.relativeContainer
					}, r.a.createElement("div", {
						className: Object(i.a)(c.a.dropdown, this.props.className),
						ref: this.scrollContainer
					}, r.a.createElement("div", {
						ref: this.optionsContainer,
						tabIndex: -1,
						className: c.a.optionsContainer,
						onMouseOut: this.clearSelectedIndex
					}, this.shouldRenderDropdownHeaderText() && r.a.createElement("h3", {
						className: c.a.dropdownHeaderText
					}, this.props.dropdownHeaderText), this.props.selectableOptions.map((e, t) => {
						const s = [this.state.selectedIndex === t ? c.a.activeOption : c.a.option];
						return this.freeTextEntryActive() && t === this.props.selectableOptions.length - 1 && s.push(c.a.lastFixedOption), r.a.createElement(u, {
							key: e.id,
							className: Object(i.a)(...s),
							index: t,
							handleOptionSelected: this.handleOptionSelectedByIndex,
							handleOnMouseEnter: this.setOptionActiveByIndex,
							divRef: t === this.state.selectedIndex ? this.activeOptionDOMRef : void 0,
							displayText: e.displayText
						})
					}), this.freeTextEntryActive() && r.a.createElement(u, {
						key: "options-list-dropdown-free-text-option",
						className: Object(i.a)(c.a.freeTextOption, this.state.selectedIndex === this.getOptionsLength() - 1 ? c.a.activeOption : c.a.option),
						handleOptionSelected: () => this.handleFreeTextOptionSelected(),
						handleOnMouseEnter: this.setFreeTextOptionActive,
						divRef: this.getOptionsLength() - 1 === this.state.selectedIndex ? this.activeOptionDOMRef : void 0,
						addText: this.props.addText,
						displayText: this.props.currentInput
					}))))
				}
			}
			var b = s("./src/reddit/icons/svgs/Close/index.tsx"),
				h = s("./src/reddit/components/MultiOptionSelect/SelectedOption/index.m.less"),
				g = s.n(h);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var x = e => {
					const {
						className: t,
						innerRef: s,
						onClickHandler: n,
						option: a,
						maxLength: o,
						...d
					} = e, l = [g.a.selectedOptionComponentContainer, t];
					return o && o < a.displayText.length && l.push(g.a.selectedOptionComponentContainerError), r.a.createElement("div", f({
						className: Object(i.a)(...l),
						ref: s
					}, d, {
						onClick: n
					}), a.displayText, r.a.createElement(b.a, {
						className: g.a.closeIcon
					}))
				},
				E = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				v = s("./src/reddit/helpers/readOnlyMode/index.ts"),
				_ = s("./src/reddit/components/MultiOptionSelect/OptionSearchBar/index.m.less"),
				C = s.n(_);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const y = 10,
				S = e => e.stopPropagation();
			class O extends r.a.Component {
				constructor(e) {
					super(e), this.handleKeyPress = e => {
						e.which !== d.a.Delete && e.which !== d.a.Backspace || !this.lastSelectedOptionComponentRef.current || "" !== this.props.value || (this.lastSelectedOptionComponentRef.current.focus(), e.preventDefault(), e.stopPropagation())
					}, this.handleMouseEnterSelectedOptionComponent = () => {
						this.setState({
							isHoveringOverSelectedOption: !0
						})
					}, this.handleMouseLeaveSelectedOptionComponent = () => {
						this.setState({
							isHoveringOverSelectedOption: !1
						})
					}, this.onSearchBarFocus = e => {
						Object(v.c)(this.props.readOnlyMode) || (this.inputRef.current && this.inputRef.current.focus(), this.setState({
							isFocused: !0
						}), this.props.onFocus && this.inputRef.current === e.target && this.props.onFocus())
					}, this.onSearchBarBlur = e => {
						if (this.containerRef.current && e.relatedTarget && this.containerRef.current.contains(e.relatedTarget)) return e.preventDefault(), void e.stopPropagation();
						this.props.onBlur && this.props.onBlur(e), this.setState({
							isFocused: !1
						})
					}, this.inputRef = r.a.createRef(), this.containerRef = r.a.createRef(), this.lastSelectedOptionComponentRef = r.a.createRef(), this.state = {
						isHoveringOverSelectedOption: !1,
						isFocused: !1
					}
				}
				focus() {
					Object(v.c)(this.props.readOnlyMode) || (this.inputRef.current && this.inputRef.current.focus(), this.setState({
						isFocused: !0
					}))
				}
				reset() {
					this.inputRef.current && (this.inputRef.current.value = "")
				}
				deselectOption(e) {
					this.props.onOptionsChanged([{
						...e,
						selected: !1
					}]), this.setState({
						isHoveringOverSelectedOption: !1
					})
				}
				onSelectedOptionComponentKeyDown(e, t) {
					this.state.isHoveringOverSelectedOption || e.which !== d.a.Delete && e.which !== d.a.Backspace || (e.preventDefault(), e.stopPropagation(), this.deselectOption(t), this.focus())
				}
				render() {
					const e = {};
					Object(v.c)(this.props.readOnlyMode) || (e.tabIndex = 0);
					const t = this.props.selectedOptionComponent || x,
						s = "number" == typeof this.props.maxOptionsToDisplay && this.props.options.length > this.props.maxOptionsToDisplay;
					return r.a.createElement("div", k({
						"aria-invalid": this.props.isError,
						className: Object(i.a)(this.props.className, C.a.optionSearchBarContainer, {
							[C.a.optionSearchBarError]: this.props.isError,
							[C.a.optionSearchBarReadOnly]: Object(v.c)(this.props.readOnlyMode)
						}),
						ref: this.containerRef,
						onFocus: this.onSearchBarFocus,
						onBlur: this.onSearchBarBlur
					}, e), this.props.options.map((e, n) => {
						if (!(s && n >= (this.props.maxOptionsToDisplay || 0))) return r.a.createElement(t, {
							tabIndex: 0,
							onFocus: S,
							key: e.id || e.displayText,
							option: e,
							onKeyDown: t => this.onSelectedOptionComponentKeyDown(t, e),
							onClickHandler: () => {
								this.deselectOption(e), this.focus()
							},
							onMouseEnter: this.handleMouseEnterSelectedOptionComponent,
							onMouseLeave: this.handleMouseLeaveSelectedOptionComponent,
							maxLength: this.props.maxLength,
							innerRef: n === this.props.options.length - 1 ? this.lastSelectedOptionComponentRef : void 0
						})
					}), s && r.a.createElement("span", {
						className: C.a.optionsOverflowIndication
					}, `+${this.props.options.length-(this.props.maxOptionsToDisplay||0)}`), this.props.children, !Object(v.c)(this.props.readOnlyMode) && r.a.createElement("input", {
						className: Object(i.a)(C.a.input, {
							[C.a.hiddenInput]: Object(v.b)(this.props.readOnlyMode)
						}),
						ref: this.inputRef,
						type: "text",
						onKeyDown: this.handleKeyPress,
						value: this.props.value,
						onChange: this.props.onInputChanged,
						maxLength: this.props.maxLength
					}), this.props.isLoading && r.a.createElement(E.a, {
						className: C.a.loadingIcon,
						sizePx: y
					}), this.state.isFocused && r.a.createElement(p, {
						className: this.props.dropdownClassName,
						dropdownHeaderText: this.props.dropdownHeaderText,
						addText: this.props.addText,
						selectableOptions: this.props.selectableOptions,
						onOptionsChanged: this.props.onOptionsChanged,
						ref: this.props.dropdownRef,
						currentInput: this.props.value,
						allowFreeTextEntry: this.props.allowFreeTextEntry,
						splitOnCommaPress: this.props.splitOnCommaPress
					}))
				}
			}
			var j = s("./node_modules/reselect/es/index.js");
			const w = [],
				I = {};
			class N extends r.a.Component {
				constructor(e) {
					super(e), this._selectableOptionsSelector = Object(j.a)(e => e.availableOptions || w, e => e.input, (e, t) => e.filter(e => {
						const s = e.displayText.toLowerCase(),
							n = t.toLowerCase();
						return 0 === s.indexOf(n) || a()(s.split(/[\s\/]+/), e => 0 === e.indexOf(n))
					})), this.onSearchBarFocus = () => {
						Object(v.c)(this.props.readOnlyMode) || this.state.searchBarIsFocused || (this.setState({
							searchBarIsFocused: !0
						}), this.props.onSearchBarFocus && this.props.onSearchBarFocus())
					}, this.onSearchBarBlur = e => {
						if (!Object(v.c)(this.props.readOnlyMode)) return e.relatedTarget && this.optionsListDropdownRef.current && this.optionsListDropdownRef.current.matchesDOMElement(e.relatedTarget) ? (e.stopPropagation(), e.preventDefault(), void setTimeout(() => {
							this.optionSearchBarRef.current && this.optionSearchBarRef.current.focus()
						}, 0)) : (this.setState({
							searchBarIsFocused: !1
						}), void(this.props.onSearchBarBlur && this.props.onSearchBarBlur(e)))
					}, this.setInput = e => {
						Object(v.b)(this.props.readOnlyMode) || this.props.input !== e && this.props.onInputChanged(e)
					}, this.onOptionChanged = e => {
						this.onOptionsChanged([e])
					}, this.onOptionsChanged = e => {
						this.props.onOptionsChanged(e), a()(e, e => !!e.selected) && this.setInput("")
					}, this.onInputChanged = e => {
						Object(v.b)(this.props.readOnlyMode) || this.setInput(e.currentTarget.value)
					}, this.onKeyDown = e => {
						Object(v.b)(this.props.readOnlyMode) || this.optionsListDropdownRef.current && this.optionsListDropdownRef.current.handleKeyPress(e)
					}, this.onPaste = e => {
						Object(v.b)(this.props.readOnlyMode) || this.optionsListDropdownRef.current && this.optionsListDropdownRef.current.handlePaste(e)
					}, this.state = {
						searchBarIsFocused: !1
					}, this.optionsListDropdownRef = r.a.createRef(), this.optionSearchBarRef = r.a.createRef()
				}
				getSelectableOptions() {
					return this._selectableOptionsSelector(this.props)
				}
				render() {
					const {
						childClassNames: e = I
					} = this.props;
					return r.a.createElement("div", {
						className: this.props.className,
						onKeyDown: this.onKeyDown,
						onPaste: this.onPaste
					}, r.a.createElement(O, {
						className: e.searchBarClassName,
						dropdownClassName: e.optionsListDropdownClassName,
						isError: this.props.isError,
						readOnlyMode: this.props.readOnlyMode || v.a.editable,
						isLoading: this.props.isLoading,
						ref: this.optionSearchBarRef,
						options: this.props.selectedOptions,
						onFocus: this.onSearchBarFocus,
						onBlur: this.onSearchBarBlur,
						onOptionsChanged: this.onOptionsChanged,
						onInputChanged: this.onInputChanged,
						maxLength: this.props.maxOptionLength,
						maxOptionsToDisplay: this.props.maxOptionsToDisplay,
						value: this.props.input,
						dropdownHeaderText: this.props.dropdownHeaderText,
						addText: this.props.addText,
						allowFreeTextEntry: this.props.allowFreeTextEntry,
						selectableOptions: this.getSelectableOptions(),
						dropdownRef: this.optionsListDropdownRef,
						selectedOptionComponent: this.props.selectedOptionComponent,
						splitOnCommaPress: this.props.splitOnCommaPress
					}, this.props.children))
				}
			}
			t.a = N
		},
		"./src/reddit/components/MutedUserList/ExpandedComponent.m.less": function(e, t, s) {
			e.exports = {
				BannedBy: "_2004IKQq9AjT3xoiDBg7m_",
				bannedBy: "_2004IKQq9AjT3xoiDBg7m_",
				EmptyState: "_1O-zxip2q_mFxBe_WVFPZC",
				emptyState: "_1O-zxip2q_mFxBe_WVFPZC",
				ExpandedContainer: "_1EEdKUOD4OiTBBQQkot-L9",
				expandedContainer: "_1EEdKUOD4OiTBBQQkot-L9"
			}
		},
		"./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.m.less": function(e, t, s) {
			e.exports = {
				PrimaryButton: "_16-AoomiQ2Zxycd1wA0ZL-",
				primaryButton: "_16-AoomiQ2Zxycd1wA0ZL-",
				ModalText: "_3P1niYqJc2au-fmA-xIl7i",
				modalText: "_3P1niYqJc2au-fmA-xIl7i"
			}
		},
		"./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/subredditModeration/mute.ts"),
				c = s("./src/reddit/components/CharacterCountdown/index.tsx"),
				m = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = s("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/controls/TextButton/index.tsx"),
				h = s("./src/reddit/helpers/isValidUsername/index.tsx"),
				g = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				f = s("./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.m.less"),
				x = s.n(f);
			const E = 300,
				v = Object(r.b)(null, (e, {
					subredditId: t
				}) => ({
					onMuteUser: (s, n) => e(Object(l.a)(t, s, n))
				})),
				_ = d.a.wrapped(p.i, "PrimaryButton", x.a),
				C = d.a.wrapped(m.o, "ModalText", x.a);
			class k extends o.a.Component {
				constructor(e) {
					super(e), this.onUsernameChange = e => {
						this.setState({
							username: e.currentTarget.value
						})
					}, this.onReasonChange = e => {
						this.setState({
							reason: e.currentTarget.value
						})
					}, this.onSubmit = () => {
						const e = this.state.username;
						this.props.onMuteUser(e, this.state.reason), this.props.trackAddEvent(), this.props.toggleModal()
					}, this.state = {
						username: this.props.username || "",
						reason: ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return o.a.createElement(m.d, null, o.a.createElement(m.h, null, o.a.createElement(g.a, null, o.a.createElement(m.p, null, n.fbt._("Mute user", null, {
						hk: "326ljo"
					}), e.username && `: u/${e.username}`), o.a.createElement(b.a, {
						onClick: e.toggleModal
					}, o.a.createElement(m.b, null)))), o.a.createElement(m.k, null, !e.username && o.a.createElement(m.g, null, o.a.createElement(u.d, {
						autoFocus: !0,
						placeholder: n.fbt._("Username to mute", null, {
							hk: "3GB7UW"
						}),
						onChange: this.onUsernameChange,
						value: this.state.username,
						"data-redditstyle": !0
					})), o.a.createElement(m.g, null, o.a.createElement(C, null, n.fbt._("Note about why they are muted", null, {
						hk: "12YIn5"
					})), o.a.createElement(m.e, null, n.fbt._("Only visible to other moderators. Not visible to user", null, {
						hk: "4Ahum2"
					}))), o.a.createElement(m.s, {
						maxLength: E,
						onChange: this.onReasonChange,
						placeholder: n.fbt._("Reason they were muted", null, {
							hk: "3E29Hf"
						}),
						value: this.state.reason,
						"data-redditstyle": !0
					}), o.a.createElement(c.a, {
						maxChars: E,
						text: this.state.reason
					})), o.a.createElement(m.f, null, o.a.createElement(m.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, n.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(_, {
						onClick: this.onSubmit,
						"data-redditstyle": !0,
						disabled: !e.username && !Object(h.a)(t.username)
					}, n.fbt._("Mute user", null, {
						hk: "1z1Ss8"
					}))))
				}
			}
			t.default = Object(i.a)(v(k))
		},
		"./src/reddit/components/MutedUserList/index.m.less": function(e, t, s) {
			e.exports = {
				MuteIcon: "XHViv8EEjdjsATc3T66r9",
				muteIcon: "XHViv8EEjdjsATc3T66r9"
			}
		},
		"./src/reddit/components/MutedUserList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/timeAgo/index.ts"),
				m = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/actions/subredditModeration/mute.ts"),
				p = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				b = s("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				h = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				g = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				f = s("./src/reddit/components/Scroller/Simple.tsx"),
				x = s("./src/reddit/components/SubredditModerationSearch/index.tsx"),
				E = s("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				v = s("./src/reddit/components/SubredditModerationUserItem/index.tsx"),
				_ = s("./src/reddit/controls/Button/index.tsx"),
				C = s("./src/reddit/icons/fonts/index.tsx"),
				k = s("./src/reddit/models/SubredditModeration/index.ts"),
				y = s("./src/reddit/selectors/activeModalId.ts"),
				S = s("./src/reddit/selectors/muted.ts"),
				O = s("./src/reddit/components/MutedUserList/ExpandedComponent.m.less"),
				j = s.n(O),
				w = s("./src/lib/lessComponent.tsx");
			const {
				fbt: I
			} = s("./node_modules/fbt/lib/FbtPublic.js"), N = w.a.span("BannedBy", j.a), T = w.a.span("EmptyState", j.a), M = w.a.div("ExpandedContainer", j.a);
			var P = e => r.a.createElement(M, null, e.reason ? r.a.createElement(N, null, I._("Mod note {mutedByUsername}", [I._param("mutedByUsername", e.mutedBy)], {
					hk: "15D34v"
				})) : r.a.createElement(T, null, I._("No mod note.", null, {
					hk: "3rpIuv"
				})), e.reason),
				R = s("./src/reddit/components/MutedUserList/MuteUserModal/index.tsx"),
				F = s("./src/reddit/components/MutedUserList/index.m.less"),
				A = s.n(F);
			const D = 24,
				L = Object(d.c)({
					isAddUserModalOpen: e => "ModerationPage--Modal--AddUser" === Object(y.a)(e),
					isConfirmModalOpen: e => "ModerationPage--Modal--RemoveUserConfirmation" === Object(y.a)(e),
					loadMoreToken: S.c,
					mutedUsers: S.f,
					mutedUsersListPending: S.b,
					searchPending: S.d,
					searchResult: S.e
				}),
				U = Object(i.b)(L, (e, {
					subredditId: t
				}) => ({
					loadMore: s => e(Object(u.b)(t, {
						after: s
					})),
					searchForMutedUser: s => e(Object(u.c)(t, s)),
					toggleAddUserModal: () => e(Object(m.i)("ModerationPage--Modal--AddUser")),
					toggleUnmuteUserModal: () => e(Object(m.i)("ModerationPage--Modal--RemoveUserConfirmation")),
					unmuteUser: s => () => e(Object(u.d)(t, s))
				}));
			class B extends r.a.Component {
				constructor(e) {
					super(e), this.onSearch = e => {
						this.props.searchForMutedUser(e), this.props.sendEventWithName("search_done")(), this.setState({
							searchTerm: e
						})
					}, this.cancelSearch = () => this.setState({
						searchTerm: null
					}), this.unmuteToggled = (e, t) => () => {
						this.setState({
							userId: e,
							username: t
						}), this.props.sendEventWithName("edit_user")(), this.props.toggleUnmuteUserModal()
					}, this.onLoadMore = () => {
						this.props.loadMoreToken && this.props.loadMore(this.props.loadMoreToken)
					}, this.muteUser = () => {
						this.props.toggleAddUserModal(), this.props.sendEventWithName("mute_dialog_mutepage")()
					}, this.renderMutedUser = e => r.a.createElement(v.b, {
						description: e.reason,
						expandedComponent: r.a.createElement(P, {
							mutedBy: e.mutedBy,
							reason: e.reason
						}),
						pageName: l.Zb.Muted,
						primaryButton: r.a.createElement(_.o, {
							onClick: this.unmuteToggled(e.id, e.username)
						}, a.fbt._("Unmute", null, {
							hk: "334kKM"
						})),
						subredditId: this.props.subredditId,
						timeAgo: Object(c.d)(e.mutedAtUTC),
						userIcon: e.accountIcon,
						username: e.username
					}), this.renderMuteUserModal = () => r.a.createElement(R.a, {
						ignoreDefaultFocus: !0,
						trackAddEvent: this.props.sendEventWithName("add_mutepage"),
						subredditId: this.props.subredditId,
						toggleModal: this.props.toggleAddUserModal,
						withOverlay: !0
					}), this.state = k.a
				}
				render() {
					const {
						props: e,
						state: t
					} = this, {
						mutedUsers: s
					} = e;
					let o;
					return s.length && (o = s[s.length - 1].id), e.mutedUsers.length ? r.a.createElement(r.a.Fragment, null, r.a.createElement(g.c, null, r.a.createElement(_.i, {
						onClick: this.muteUser
					}, a.fbt._("Mute user", null, {
						hk: "4AJ7nf"
					}))), r.a.createElement(g.a, null, r.a.createElement(g.b, null, a.fbt._("Muted users", null, {
						hk: "2kc6Jt"
					}), r.a.createElement(h.a, {
						linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/360009161872`
					})), r.a.createElement(E.b, {
						onSearch: this.onSearch,
						activeSearchQuery: t.searchTerm
					}), t.searchTerm ? r.a.createElement(x.a, {
						cancelSearch: this.cancelSearch,
						searchPending: e.searchPending,
						searchTerm: t.searchTerm,
						noResultsFound: !e.searchResult
					}, e.searchResult && this.renderMutedUser(e.searchResult)) : r.a.createElement(f.b, {
						loadMoreToken: o,
						onLoadMore: this.onLoadMore
					}, e.mutedUsers.map((e, t) => ({
						estHeight: D,
						id: e.id,
						render: () => this.renderMutedUser(e)
					})))), e.isAddUserModalOpen && this.renderMuteUserModal(), e.isConfirmModalOpen && t.userId && t.username && r.a.createElement(p.a, {
						actionText: a.fbt._("Remove", null, {
							hk: "2OeYUT"
						}),
						modalText: a.fbt._("Are you sure you want to unmute {username}?", [a.fbt._param("username", t.username)], {
							hk: "2Pq8hv"
						}),
						onConfirm: e.unmuteUser(t.userId),
						toggleModal: e.toggleUnmuteUserModal,
						trackClick: e.sendEventWithName("remove"),
						withOverlay: !0
					})) : r.a.createElement(r.a.Fragment, null, r.a.createElement(g.c, null, r.a.createElement(_.i, {
						onClick: this.muteUser
					}, a.fbt._("Mute user", null, {
						hk: "4AJ7nf"
					}))), r.a.createElement(g.a, null, r.a.createElement(g.b, null, a.fbt._("Muted users", null, {
						hk: "2kc6Jt"
					}), r.a.createElement(h.a, {
						linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/360009161872`
					})), e.mutedUsersListPending ? r.a.createElement(v.a, null) : r.a.createElement(b.c, {
						text: a.fbt._("No muted users in {subredditName}", [a.fbt._param("subredditName", e.subreddit.displayText)], {
							hk: "1o0lOP"
						})
					}, r.a.createElement(C.a, {
						name: "mod_mute",
						className: A.a.MuteIcon
					})), e.isAddUserModalOpen && this.renderMuteUserModal()))
				}
			}
			t.a = U(B)
		},
		"./src/reddit/components/Paginator/index.m.less": function(e, t, s) {
			e.exports = {
				controlRow: "_2ixigr45sqDsYvVlMBgbMm",
				nextButtonContainer: "CloCv22o0KvzOk8LzB4VX",
				prevButtonContainer: "_2Tfdm_mlb1NvgbaCCkMtdV",
				nextButton: "_1VFGYMJpiKtL_S9_RYS-CD",
				prevButton: "eX92mTA_HDG9gpfIzIGhs"
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
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				d = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				l = s.n(d);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(r.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: r,
					post: d,
					redditStyle: m,
					theme: u,
					...p
				} = e;
				return a.a.createElement("div", c({
					className: Object(o.a)(l.a.backgroundWrapper, s),
					style: Object(i.c)(n, e),
					onClick: r
				}, p), t)
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
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/ads/index.ts"),
				i = s("./src/reddit/components/AdViewability/index.tsx"),
				d = s("./src/reddit/helpers/trackers/gallery.ts"),
				l = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				c = s("./src/reddit/hooks/useTracking.ts");
			var m = a.a.memo(e => {
					const t = Object(n.useRef)(null),
						s = Object(c.a)(),
						o = Object(n.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: n
								} = t;
								n >= .5 && s(d.d(e.postId))
							})
						}, [s, e.postId]),
						r = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(l.a)(t, o, r), a.a.createElement("div", {
						role: "presentation"
					}, a.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/connectors/PostViewable/index.ts"),
				b = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/selectors/telemetry.ts"),
				f = s("./src/lib/classNames/index.ts"),
				x = s("./src/lib/objectSelector/index.ts"),
				E = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				v = s("./src/reddit/components/PostContainer/index.m.less"),
				_ = s.n(v);
			const C = Object(p.a)(() => Object(o.c)({
					basePixelMetadata: Object(x.a)((e, {
						post: t
					}) => Object(h.b)(e, t.id)),
					clickTrackingId: (e, {
						post: t
					}) => t.id,
					imageGalleryCurrentItem: (e, {
						post: t
					}) => Object(h.i)(e, {
						postId: t.id
					}),
					pageType: e => Object(g.actionInfo)(e).pageType
				})),
				k = e => {
					const t = Object(E.d)(e.target, e.currentTarget),
						s = Object(E.b)(e.target, e.currentTarget, E.a.buttons);
					return "subreddit" !== t && s
				};
			class y extends a.a.Component {
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
						makePostContainerId: l,
						post: c,
						onClick: u,
						onPostContentClick: p,
						pageType: h,
						sendEvent: g,
						style: x,
						ref: E,
						shouldAddGalleryViewability: v = !0
					} = this.props, C = a.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: x,
						ref: E,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && (e(() => u && u(s, c, t, o, h))(s), p && k(s) && p(s, c)), c.id && o) {
								const {
									source: e
								} = Object(r.t)(c, o);
								e && e.outboundUrl && g(Object(d.c)(c.id, e.outboundUrl))
							}
						},
						className: Object(f.a)(_.a.WrappedPost, n, `Post ${c.id}`, {
							promotedlink: c.isSponsored
						}),
						id: l ? l(c.id) : c.id,
						tabIndex: -1
					}, s), y = !!c.media && c.media.type === b.o.VIDEO;
					return c.isSponsored || y ? a.a.createElement(i.a, {
						post: c,
						trackDisplay: !0
					}, C) : c.media && Object(b.E)(c.media) && v ? a.a.createElement(m, {
						postId: c.id
					}, C) : C
				}
			}
			t.a = C(Object(E.c)(Object(u.c)(y)))
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
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
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
							sendEvent: a
						} = this.props, o = !!n;
						a(e ? Object(m.o)({
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
					} = this.props, a = this.state.isHovered, r = s.isFollowed;
					let i = r ? n.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : n.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return r && a && (i = n.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), o.a.createElement("button", {
						className: Object(d.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!s.isFollowed,
							[p.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, i)
				}
			}
			const h = Object(r.b)(() => Object(i.c)({}), (e, {
				post: t
			}) => ({
				onFollow: () => e(Object(l.A)(t.isSponsored ? t.postId : t.id))
			}))(Object(c.c)(b))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/components/CrosspostBox/index.tsx"),
				r = s("./src/reddit/components/Media/index.tsx");

			function i(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? a.a.createElement(o.a, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						crosspost: t,
						primaryContent: !1
					}
				}) : a.a.createElement(r.a, {
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
				CheckboxMenuItem: "_9csa2XobkeFZUX8Fc_FNY",
				checkboxMenuItem: "_9csa2XobkeFZUX8Fc_FNY",
				DropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				dropdownRow: "x_9o8pHUgKrlsT51QhLnG"
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "g", (function() {
				return E
			})), s.d(t, "h", (function() {
				return v
			})), s.d(t, "i", (function() {
				return _
			})), s.d(t, "j", (function() {
				return C
			})), s.d(t, "c", (function() {
				return k
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "f", (function() {
				return O
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				i = s("./src/reddit/controls/Dropdown/Row.tsx"),
				d = s("./src/reddit/icons/fonts/index.tsx"),
				l = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				c = s("./src/reddit/icons/fonts/Envelope/index.tsx"),
				m = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				u = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				p = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				b = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				h = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				g = s.n(h);
			const f = o.a.wrapped(l.a, "Icon", g.a),
				x = o.a.wrapped(c.a, "Icon", g.a),
				E = o.a.wrapped(m.a, "Icon", g.a),
				v = o.a.wrapped(u.a, "Icon", g.a),
				_ = o.a.wrapped(p.a, "Icon", g.a),
				C = o.a.wrapped(b.a, "Icon", g.a),
				k = () => a.a.createElement(d.a, {
					name: "mod_mute",
					className: g.a.Icon
				}),
				y = o.a.wrapped(r.b, "CheckboxMenuItem", g.a),
				S = o.a.wrapped(i.b, "DropdownRow", g.a),
				O = o.a.div("ListContainer", g.a)
		},
		"./src/reddit/components/ProgressBar/index.m.less": function(e, t, s) {
			e.exports = {
				innerBar: "Db3WJFTcyAR-IM0cIkpDG",
				outerBar: "i8kQtxHYBB8Sb3bPI4M_e"
			}
		},
		"./src/reddit/components/ProgressBar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/ProgressBar/index.m.less"),
				i = s.n(r);
			t.a = ({
				className: e,
				innerBarClassName: t,
				percent: s
			}) => a.a.createElement("div", {
				className: Object(o.a)(i.a.outerBar, e)
			}, a.a.createElement("div", {
				className: Object(o.a)(i.a.innerBar, t),
				style: {
					width: `${s.toFixed(2)}%`
				}
			}))
		},
		"./src/reddit/components/RecurringPostList/ChangePageButton/index.m.less": function(e, t, s) {
			e.exports = {
				button: "_1i9YssSDgp0wmEC43VdLTX",
				prevButton: "_2IBDYNRoTxtwgs13LWRpeM",
				arrowIcon: "QD6Re7us6VNRFNYSiD6to",
				disabled: "_3Lm3n-nPFfEcJoNjVwcm3r"
			}
		},
		"./src/reddit/components/RecurringPostList/EditModal/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-RecurringPostList-EditModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-RecurringPostList-EditModal").then(s.bind(null, "./src/reddit/components/RecurringPostList/EditModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/RecurringPostList/EditModal/index.tsx"
				}
			})
		},
		"./src/reddit/components/RecurringPostList/RecurringPost/ContentMeta/index.m.less": function(e, t, s) {
			e.exports = {
				contentRow: "Bt3uIal7yhwFSN9JorIng",
				contentRowMeta: "t6hD4d7F06TL2yv9vfp7h",
				title: "_3Evplg8YGmH6GDFsdQ0_nE",
				ownerName: "_215cUXwEuCE5hl0eYEIt_o",
				ownerNameContainer: "_2yAEv_Vw_ItUYbNbAjpSsL"
			}
		},
		"./src/reddit/components/RecurringPostList/RecurringPost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_29n8ITXzfA7e5YAUZXR5Tv",
				failedStateIndicator: "_3wJPsvksvDytrEsrrZd1vI",
				metaRow: "NjfRmSRZrEkWYNAACYBql",
				replayIcon: "_17pwQtUdmIHAeybqNegNzP",
				metaRowText: "qlCreM7NlHbkzV-xkEGE7",
				recurrenceRules: "rX2aiRDwgPF22x70hQxqp",
				parametricMetaData: "_3mlGpRO1Z1gZJkATQcRNHO",
				pencilIcon: "z5A_DxaYn2G2TQSSQCpi2"
			}
		},
		"./src/reddit/components/RecurringPostList/RecurringPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return R
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/telemetry/index.ts"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/actions/scheduledPosts/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/components/AuthorLink/index.tsx"),
				u = s("./src/reddit/components/Thumbnail/index.tsx"),
				p = s("./src/reddit/components/RecurringPostList/Thumbnail/index.m.less"),
				b = s.n(p);
			var h = ({
					post: e
				}) => a.a.createElement("div", {
					className: b.a.thumbnailContainer
				}, a.a.createElement(u.a, {
					post: e,
					contentTypeClassName: b.a.placeholderIcon
				})),
				g = s("./src/reddit/components/ScheduledPost/index.tsx"),
				f = s("./src/reddit/models/ScheduledPost/index.ts"),
				x = s("./node_modules/reselect/es/index.js"),
				E = s("./src/reddit/components/RecurringPostList/RecurringPost/ContentMeta/index.m.less"),
				v = s.n(E);
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js"), C = Object(x.c)({
				media: (e, {
					scheduledPost: t
				}) => ({
					...g.b,
					isNSFW: t.isNsfw,
					title: t.title
				})
			});
			var k = Object(o.b)(C)(e => {
					const {
						scheduledPost: t
					} = e, {
						isPostAsMetaMod: s,
						owner: n
					} = t, o = s ? c.k : Object(f.n)(n) ? n.name : void 0;
					return a.a.createElement("div", {
						className: Object(i.a)(v.a.contentRow, e.className)
					}, a.a.createElement(h, {
						post: e.media
					}), a.a.createElement("div", {
						className: v.a.contentRowMeta
					}, a.a.createElement("div", {
						className: v.a.title
					}, e.scheduledPost.title), a.a.createElement("div", {
						className: v.a.ownerNameContainer
					}, o && a.a.createElement("span", {
						className: v.a.ownerName
					}, _._("by {username}", [_._param("username", a.a.createElement(m.a, {
						author: o,
						isUnstyled: !0
					}, `u/${o}`))], {
						hk: "FAgpK"
					})), e.children)))
				}),
				y = s("./src/reddit/components/ScheduledPost/OverflowMenu/withOverflowMenu.tsx");
			var S = Object(y.a)(e => a.a.createElement(a.a.Fragment, null, e.renderOverflowMenu())),
				O = s("./src/reddit/components/Settings/shared/Widgets.tsx"),
				j = s("./src/reddit/helpers/scheduledPosts/index.ts"),
				w = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				I = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				N = s("./src/reddit/icons/svgs/Replay/index.tsx"),
				T = s("./src/reddit/components/RecurringPostList/RecurringPost/index.m.less"),
				M = s.n(T);
			const {
				fbt: P
			} = s("./node_modules/fbt/lib/FbtPublic.js"), R = "RECURRING_POSTS__EDIT", F = Object(o.b)(null, (e, t) => ({
				editRecurringPostRequested: () => {
					e(Object(l.c)({
						id: t.item.id,
						subredditId: t.item.subreddit.id
					})), e((e, t) => Object(r.a)(Object(w.e)()(t()))), e(Object(d.i)(R))
				},
				onOpenOverflow: () => {
					e((e, t) => Object(r.a)(Object(w.h)(!0)(t())))
				},
				onUpdateMetadata: s => e(Object(l.b)(s, t.item))
			}));
			class A extends a.a.PureComponent {
				render() {
					const {
						className: e,
						item: t,
						editRecurringPostRequested: s
					} = this.props, n = Object(j.e)(t), o = t.state === f.e.FAILED, {
						owner: r
					} = t, d = Object(f.n)(r) && r.prefixedName;
					return a.a.createElement("div", {
						className: Object(i.a)(e, M.a.container)
					}, o && a.a.createElement("div", {
						className: M.a.failedStateIndicator
					}, P._("Recurring post failed to submit. {Link: update recurring scheduled post} to reset", [P._param("Link: update recurring scheduled post", a.a.createElement(O.n, {
						onClick: s
					}, "Update schedule"))], {
						hk: "3Uitas"
					})), a.a.createElement("div", {
						className: M.a.metaRow
					}, a.a.createElement(N.a, {
						className: M.a.replayIcon
					}), a.a.createElement("div", {
						className: M.a.metaRowText
					}, a.a.createElement("div", {
						className: M.a.recurrenceRules,
						title: n
					}, n), a.a.createElement("div", null, P._("Scheduled by {=[post owner]}", [P._param("=[post owner]", a.a.createElement("span", {
						className: M.a.parametricMetaData
					}, P._("{post owner}", [P._param("post owner", d)], {
						hk: "25fi1G"
					})))], {
						hk: "36vTyl"
					}))), a.a.createElement("button", {
						onClick: s
					}, a.a.createElement(I.a, {
						className: M.a.pencilIcon
					}))), a.a.createElement(k, {
						scheduledPost: t
					}, a.a.createElement(S, {
						scheduledPost: t,
						onUpdateMetadata: this.props.onUpdateMetadata,
						onOpenOverflow: this.props.onOpenOverflow
					})))
				}
			}
			t.b = F(A)
		},
		"./src/reddit/components/RecurringPostList/Thumbnail/index.m.less": function(e, t, s) {
			e.exports = {
				placeholderIcon: "_2rWvDY38-Fa_14y347Il6W",
				thumbnailContainer: "_3cYCw7NYRAJwj6LvL8esBu"
			}
		},
		"./src/reddit/components/RecurringPostList/index.m.less": function(e, t, s) {
			e.exports = {
				titleContainer: "p9wLLlADU1pVQu4nx3HCF",
				postList: "_1qL48rnJIqcVj5nNuXkDSw",
				pageButtonPortal: "_3lBUQT-Vexm0jXk3WmIYJq",
				recurringPostsContainer: "_2UggIw0Xee7HvpOtrWrepd",
				lastRecurringPostItem: "dx2RjIkNec1E2-a1DyP07",
				emptyContainer: "_1Aurc-hBrd1zsfrQxHeZoq",
				icon: "_1BRYUIpfNcLUEr5L8DeJ8i",
				schedulePostLink: "_1mxUgytAdxfLqJuzRgGifT"
			}
		},
		"./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.m.less": function(e, t, s) {
			e.exports = {
				DisplayContainer: "_3B7pbtNVM5jh1ozdZuJTfI",
				displayContainer: "_3B7pbtNVM5jh1ozdZuJTfI",
				DropdownLabel: "_3MKcNYjenRkpopz-m6f8hM",
				dropdownLabel: "_3MKcNYjenRkpopz-m6f8hM",
				ReasonTitle: "_1Ecdul4Q_dxU9eOJXmoQuK",
				reasonTitle: "_1Ecdul4Q_dxU9eOJXmoQuK",
				Dropdown: "_3z_HE15Esmqgf6bBaj3Epi",
				dropdown: "_3z_HE15Esmqgf6bBaj3Epi",
				DropdownTriangle: "_2BZTmZOOcbQzMo7VdN3KB-",
				dropdownTriangle: "_2BZTmZOOcbQzMo7VdN3KB-",
				DropdownRow: "_3AVzUedTbFNFyaVtzLzahr",
				dropdownRow: "_3AVzUedTbFNFyaVtzLzahr",
				DropdownContainer: "_33sg6HoBYll4rCDqRzRUdu",
				dropdownContainer: "_33sg6HoBYll4rCDqRzRUdu"
			}
		},
		"./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/controls/Dropdown/index.tsx"),
				d = s("./src/reddit/controls/Dropdown/Row.tsx"),
				l = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				c = s("./src/reddit/layout/row/Inline/index.tsx"),
				m = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.m.less"),
				u = s.n(m);
			const p = r.a.wrapped(c.a, "DisplayContainer", u.a),
				b = r.a.div("DropdownLabel", u.a),
				h = r.a.div("ReasonTitle", u.a),
				g = e => o.a.createElement(p, null, o.a.createElement(b, null, e.dropdownLabel), e.selectedReason && o.a.createElement(h, null, e.selectedReason)),
				f = r.a.wrapped(i.a, "Dropdown", u.a),
				x = r.a.wrapped(l.b, "DropdownTriangle", u.a),
				E = r.a.wrapped(d.b, "DropdownRow", u.a),
				v = r.a.button("DropdownContainer", u.a);
			t.a = e => o.a.createElement(v, {
				onClick: e.onToggleDropdown
			}, o.a.createElement(g, {
				dropdownLabel: e.isLoading ? n.fbt._("Loading...", null, {
					hk: "1bT6op"
				}) : n.fbt._("Reason for removal", null, {
					hk: "3C9ecg"
				}),
				selectedReason: e.selectedReason ? e.selectedReason.title : null
			}), o.a.createElement(x, null), e.isDropdownOpen && o.a.createElement(f, {
				isOverlay: !0
			}, o.a.createElement(E, {
				displayText: n.fbt._("None", null, {
					hk: "2443EZ"
				}),
				onClick: () => e.onSelectReason(null)
			}), e.subredditRemovalReasons.map((t, s) => o.a.createElement(E, {
				displayText: `${s+1}. ${t.title}`,
				key: t.title,
				onClick: () => e.onSelectReason(t)
			}))))
		},
		"./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.m.less": function(e, t, s) {
			e.exports = {
				CharacterCountdown: "_3QAHANdA13oJnYRmkNk6sb",
				characterCountdown: "_3QAHANdA13oJnYRmkNk6sb",
				EmptyState: "_1Wu9eKXKrc5e52itaXM9ny",
				emptyState: "_1Wu9eKXKrc5e52itaXM9ny",
				ModNoteDescription: "_2yxydSiZfhd3wo7e1VeMg3",
				modNoteDescription: "_2yxydSiZfhd3wo7e1VeMg3",
				PrimaryButton: "_3ECRi_xQqKANiwqaFL6bmr",
				primaryButton: "_3ECRi_xQqKANiwqaFL6bmr",
				RadioOption: "_30JuaHooKBU-I9UQwxEwhL",
				radioOption: "_30JuaHooKBU-I9UQwxEwhL",
				BoldText: "_22_ggqyuhsjDD3F2auyNjc",
				boldText: "_22_ggqyuhsjDD3F2auyNjc",
				ModNoteInput: "_1hTAtA-9TFnHvYJWXuSFsv",
				modNoteInput: "_1hTAtA-9TFnHvYJWXuSFsv",
				MessageInput: "_1PK5NQ4vO_RKB4KvIDUONs",
				messageInput: "_1PK5NQ4vO_RKB4KvIDUONs",
				Info: "_3Bf1PCbZnJJBM391IWRv8D",
				info: "_3Bf1PCbZnJJBM391IWRv8D",
				SmallInfoText: "ozxLnphBA3LqIKZJwfCoD",
				smallInfoText: "ozxLnphBA3LqIKZJwfCoD",
				FormOptionsContainer: "_3fRFatQ34rHHRS3sO1Pacm",
				formOptionsContainer: "_3fRFatQ34rHHRS3sO1Pacm",
				ModalFooter: "_3dFILDoNznUDwdP1jfpTz-",
				modalFooter: "_3dFILDoNznUDwdP1jfpTz-",
				FooterRow: "_1vxr-V4SeBtsrkFSGJB0O8",
				footerRow: "_1vxr-V4SeBtsrkFSGJB0O8",
				ButtonRow: "_3zZmX0EjloIkzwt2-sRI2_",
				buttonRow: "_3zZmX0EjloIkzwt2-sRI2_"
			}
		},
		"./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "dispatcher", (function() {
				return I
			})), s.d(t, "selector", (function() {
				return N
			})), s.d(t, "connector", (function() {
				return T
			})), s.d(t, "CharacterCountdown", (function() {
				return M
			})), s.d(t, "EmptyState", (function() {
				return P
			})), s.d(t, "MessageInput", (function() {
				return U
			})), s.d(t, "FormOptionsContainer", (function() {
				return W
			})), s.d(t, "ModalFooter", (function() {
				return Z
			})), s.d(t, "ButtonRow", (function() {
				return q
			})), s.d(t, "AddRemovalReasonModal", (function() {
				return G
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/removalReasons/index.ts"),
				c = s("./src/reddit/components/CharacterCountdown/index.tsx"),
				m = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/controls/InternalLink/index.tsx"),
				b = s("./src/reddit/controls/RadioInput/index.tsx"),
				h = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				g = s("./src/reddit/controls/TextButton/index.tsx"),
				f = s("./src/reddit/icons/fonts/Info/index.tsx"),
				x = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				E = s("./src/reddit/models/RemovalReason/index.ts"),
				v = s("./src/reddit/selectors/removalReasons.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.tsx"),
				y = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.m.less"),
				S = s.n(y);
			const {
				fbt: O
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = e => {
				switch (e) {
					case E.f.Private:
						return "private_subreddit";
					case E.f.PrivateExposed:
						return "private_personal";
					default:
						return e
				}
			}, w = {
				isDropdownOpen: !1,
				message: "",
				modNote: "",
				removalType: E.f.Public,
				selectedReason: null
			}, I = e => ({
				submitBulkRemovalReason: (t, s, n, a, o) => e(Object(l.submitBulkRemovalReason)(t, s, n, a, o)),
				submitRemovalReason: (t, s, n, a, o) => e(Object(l.submitRemovalReason)(t, s, n, a, o))
			}), N = Object(r.c)({
				currentUserName: e => {
					const t = Object(C.j)(e);
					if (t) return t.displayText
				},
				isLoading: v.a,
				removalReasons: v.c,
				subredditName: (e, {
					subredditId: t
				}) => Object(_.S)(e, {
					subredditId: t
				}).name
			}), T = Object(o.b)(N, I), M = d.a.wrapped(c.a, "CharacterCountdown", S.a), P = d.a.div("EmptyState", S.a), R = d.a.wrapped(m.n, "ModNoteDescription", S.a), F = d.a.wrapped(u.i, "PrimaryButton", S.a), A = d.a.wrapped(h.a, "RadioOption", S.a), D = d.a.span("BoldText", S.a), L = d.a.wrapped(m.s, "ModNoteInput", S.a), U = d.a.wrapped(m.s, "MessageInput", S.a), B = d.a.wrapped(f.a, "Info", S.a), H = d.a.div("SmallInfoText", S.a), W = d.a.div("FormOptionsContainer", S.a), Z = d.a.wrapped(m.f, "ModalFooter", S.a), V = d.a.div("FooterRow", S.a), q = d.a.wrapped(V, "ButtonRow", S.a);
			class G extends a.a.Component {
				constructor(e) {
					super(e), this.onSelectRemovalType = e => {
						this.setState({
							removalType: e
						}), this.props.trackClick(`type_${j(e)}`)()
					}, this.onMessageInputChange = e => {
						this.setState({
							message: e.currentTarget.value
						})
					}, this.onUpdateModNote = e => {
						this.setState({
							modNote: e.currentTarget.value
						})
					}, this.handleToggleDropdown = () => this.setState({
						isDropdownOpen: !this.state.isDropdownOpen
					}), this.closeDropdown = () => {
						this.state.isDropdownOpen && this.setState({
							isDropdownOpen: !1
						})
					}, this.onSelectReason = e => {
						this.setState({
							selectedReason: e
						}), this.props.trackClick("reason")(), e && this.setState({
							message: e.message
						}), this.closeDropdown()
					}, this.canSave = () => !(this.state.message.length > E.a || this.state.modNote.length > E.b) && (this.state.selectedReason ? this.state.message.trim().length > 0 : this.state.modNote.trim().length > 0), this.onSubmit = () => {
						const {
							props: e,
							state: t
						} = this;
						if (this.canSave()) {
							(t.removalContextType === E.e.Bulk ? e.submitBulkRemovalReason : e.submitRemovalReason)(e.itemIds, t.selectedReason, t.message.trim(), t.removalType, t.modNote.trim()), e.trackClick("sent")(), t.selectedReason && e.trackClick(`sent_${j(t.removalType)}`)(), t.modNote && e.trackClick("sent_modnote")(), e.toggleModal()
						}
					}, this.onCancel = () => {
						this.props.toggleModal(), this.props.trackClick("cancel")()
					}, this.renderRemovalTypeOptions = () => {
						const {
							props: e,
							state: t
						} = this, s = [];
						return t.removalContextType !== E.e.Bulk && s.push(a.a.createElement(A, {
							key: E.f.Public,
							showButton: !0,
							tabIndex: 0,
							value: E.f.Public
						}, a.a.createElement("div", null, t.removalContextType === E.e.Post ? O._("Public: Write a sticky comment on the post", null, {
							hk: "1UIQkF"
						}) : O._("Public: Write a reply to the comment", null, {
							hk: "1iZ1RC"
						})))), s.push(a.a.createElement(A, {
							key: E.f.Private,
							showButton: !0,
							tabIndex: 0,
							value: E.f.Private
						}, a.a.createElement("div", null, O._("Private: send a Modmail from {subredditName} to the user", [O._param("subredditName", a.a.createElement(D, null, `r/${e.subredditName}`))], {
							hk: "1wUxMe"
						})))), e.currentUserName && s.push(a.a.createElement(A, {
							key: E.f.PrivateExposed,
							showButton: !0,
							tabIndex: 0,
							value: E.f.PrivateExposed
						}, a.a.createElement("div", null, O._("Private: send a Modmail from {currentUserName} to the user", [O._param("currentUserName", a.a.createElement(D, null, `u/${e.currentUserName}`))], {
							hk: "wFSJr"
						})))), s
					}, this.state = {
						...w,
						removalContextType: Object(E.g)(e.itemIds)
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return a.a.createElement(m.d, {
						onClick: this.closeDropdown
					}, e.isLoading || e.removalReasons.length > 0 && a.a.createElement(m.h, null, a.a.createElement(x.a, null, a.a.createElement(m.p, null, O._("Add a removal reason", null, {
						hk: "4odEgX"
					}), e.itemIds.length > 1 && O._("({number of items} posts/comments)", [O._param("number of items", e.itemIds.length)], {
						hk: "4u7ZzL"
					})), a.a.createElement(g.a, {
						onClick: this.onCancel
					}, a.a.createElement(m.b, null)))), a.a.createElement(m.k, null, e.isLoading || e.removalReasons.length > 0 ? a.a.createElement(k.a, {
						isDropdownOpen: t.isDropdownOpen,
						isLoading: e.isLoading,
						onSelectReason: this.onSelectReason,
						onToggleDropdown: this.handleToggleDropdown,
						selectedReason: t.selectedReason,
						subredditRemovalReasons: e.removalReasons
					}) : a.a.createElement(P, null, O._("You don't have any removal reasons yet", null, {
						hk: "2cPgPy"
					}), a.a.createElement(p.a, {
						to: `/r/${e.subredditName}/about/removal`,
						target: "_blank"
					}, a.a.createElement(u.o, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, O._("Add a removal reason", null, {
						hk: "3MHM7e"
					})))), t.selectedReason && a.a.createElement(W, null, a.a.createElement(m.g, null, a.a.createElement(b.a, {
						name: "REMOVAL_REASON_INPUT",
						onChange: this.onSelectRemovalType,
						value: t.removalType
					}, this.renderRemovalTypeOptions())), a.a.createElement(U, {
						value: t.message,
						onChange: this.onMessageInputChange
					}), a.a.createElement(M, {
						maxChars: E.a,
						text: t.message.trim()
					}), a.a.createElement(H, null, t.removalType !== E.f.Public && a.a.createElement(a.a.Fragment, null, a.a.createElement(B, null), O._("A link to the removed content will be appended to your message", null, {
						hk: "1DbEGF"
					}))))), a.a.createElement(Z, null, a.a.createElement(V, null, a.a.createElement(R, null, O._("Mod note (Only mods will see this note)", null, {
						hk: "3InAsy"
					}))), a.a.createElement(V, null, a.a.createElement(L, {
						placeholder: O._("This is a short note to your mod team on why the content was removed.", null, {
							hk: "4goqsC"
						}),
						value: t.modNote,
						onChange: this.onUpdateModNote
					})), a.a.createElement(V, null, a.a.createElement(M, {
						maxChars: E.b,
						text: t.modNote.trim()
					})), a.a.createElement(q, null, a.a.createElement(u.l, {
						onClick: this.onCancel,
						"data-redditstyle": !0
					}, O._("Cancel", null, {
						hk: "2TSLl5"
					})), a.a.createElement(F, {
						onClick: this.onSubmit,
						disabled: !this.canSave(),
						"data-redditstyle": !0
					}, O._("Submit", null, {
						hk: "42zLFy"
					})))))
				}
			}
			t.default = Object(i.a)(T(G))
		},
		"./src/reddit/components/RemovalReasons/RemovalReasonEditorModal.m.less": function(e, t, s) {
			e.exports = {
				GenericGreetingText: "_1RYmGXZkbjV_9GAwCiqmLp",
				genericGreetingText: "_1RYmGXZkbjV_9GAwCiqmLp",
				DeleteReasonButton: "_3LU38GqHnVONELmzr-6CjS",
				deleteReasonButton: "_3LU38GqHnVONELmzr-6CjS",
				PrimaryButton: "_1Qw31YEY4D8vZqqnidfBid",
				primaryButton: "_1Qw31YEY4D8vZqqnidfBid",
				TextArea: "_2g19cC2dTjD8Ivp0iaxvPI",
				textArea: "_2g19cC2dTjD8Ivp0iaxvPI",
				ModalFooter: "a8KANZ6wvta1y_8QSZmeS",
				modalFooter: "a8KANZ6wvta1y_8QSZmeS",
				Input: "tWupUgopHVvjD9_bZZVy0",
				input: "tWupUgopHVvjD9_bZZVy0"
			}
		},
		"./src/reddit/components/RemovalReasons/RemovalReasonItem.m.less": function(e, t, s) {
			e.exports = {
				EditButton: "_3Z3niHttcaJCxThBE2-eNN",
				editButton: "_3Z3niHttcaJCxThBE2-eNN",
				Row: "_1ERpdeakuaRdyW5OEGvV_a",
				row: "_1ERpdeakuaRdyW5OEGvV_a",
				ReasonNumber: "_37ciCG1flXTYWdLXzWUVSP",
				reasonNumber: "_37ciCG1flXTYWdLXzWUVSP",
				ReasonText: "_3Vv7n3XK-P5uslyAy7Li0w",
				reasonText: "_3Vv7n3XK-P5uslyAy7Li0w"
			}
		},
		"./src/reddit/components/RemovalReasons/index.m.less": function(e, t, s) {
			e.exports = {
				Rules: "-z_XjylM-4VxXIVlUJupm",
				rules: "-z_XjylM-4VxXIVlUJupm"
			}
		},
		"./src/reddit/components/RemovalReasons/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/actions/removalReasons/index.ts"),
				m = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				u = s("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				p = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				b = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/icons/fonts/index.tsx"),
				f = s("./src/reddit/models/RemovalReason/index.ts"),
				x = s("./src/reddit/selectors/activeModalId.ts"),
				E = s("./src/reddit/selectors/removalReasons.ts"),
				v = s("./src/higherOrderComponents/asModal/index.tsx"),
				_ = s("./src/lib/lessComponent.tsx"),
				C = s("./src/reddit/components/CharacterCountdown/index.tsx"),
				k = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				y = s("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				S = s("./src/reddit/controls/TextButton/index.tsx"),
				O = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				j = s("./src/reddit/components/RemovalReasons/RemovalReasonEditorModal.m.less"),
				w = s.n(j);
			const I = {
					message: "",
					title: ""
				},
				N = _.a.wrapped(k.e, "GenericGreetingText", w.a),
				T = _.a.wrapped(k.r, "DeleteReasonButton", w.a),
				M = _.a.wrapped(h.i, "PrimaryButton", w.a),
				P = _.a.wrapped(k.s, "TextArea", w.a),
				R = _.a.wrapped(k.f, "ModalFooter", w.a),
				F = _.a.wrapped(y.c, "Input", w.a);
			class A extends r.a.Component {
				constructor(e) {
					super(e), this.onTitleInputChange = e => {
						e.currentTarget.value.length <= f.d && this.setState({
							title: e.currentTarget.value
						})
					}, this.onMessageInputChange = e => {
						this.setState({
							message: e.currentTarget.value
						})
					}, this.onSave = () => {
						const e = {
							title: this.state.title.trim(),
							message: this.state.message.trim()
						};
						this.props.removalReason && (e.id = this.props.removalReason.id), this.props.onSubmit(e), this.props.sendEvent(), this.props.toggleModal()
					}, this.canSave = () => this.state.title.trim().length > 0 && this.state.title.trim().length <= f.d && this.state.message.trim().length > 0 && this.state.message.trim().length <= f.a, this.state = e.removalReason ? {
						title: e.removalReason.title,
						message: e.removalReason.message
					} : I
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement(k.d, null, r.a.createElement(k.h, null, r.a.createElement(O.a, null, r.a.createElement(k.p, null, e.removalReason ? a.fbt._("Edit removal reason", null, {
						hk: "1P0jAw"
					}) : a.fbt._("Add new reason", null, {
						hk: "jDYo"
					})), r.a.createElement(S.a, {
						onClick: e.toggleModal
					}, r.a.createElement(k.b, null)))), r.a.createElement(k.k, null, r.a.createElement(k.g, null, r.a.createElement(F, {
						placeholder: a.fbt._("Removal reason title", null, {
							hk: "4hFurd"
						}),
						value: t.title,
						onChange: this.onTitleInputChange
					}), r.a.createElement(C.a, {
						text: t.title.trim(),
						maxChars: f.d
					})), r.a.createElement(k.n, null, a.fbt._("Reason message:", null, {
						hk: "yMtrM"
					})), r.a.createElement(N, null, a.fbt._("Hi u/username,", null, {
						hk: "NE4XP"
					})), r.a.createElement(P, {
						placeholder: a.fbt._("Write a message that will communicate to the user why their post was removed.", null, {
							hk: "4u5AVO"
						}),
						value: t.message,
						onChange: this.onMessageInputChange,
						"data-redditstyle": !0
					}), r.a.createElement(C.a, {
						text: t.message.trim(),
						maxChars: f.a
					})), r.a.createElement(R, null, r.a.createElement(M, {
						onClick: this.onSave,
						"data-redditstyle": !0,
						disabled: !this.canSave()
					}, e.removalReason ? a.fbt._("Save", null, {
						hk: "2U0EXj"
					}) : a.fbt._("Add new reason", null, {
						hk: "34P0ii"
					})), r.a.createElement(k.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, a.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), e.removalReason && r.a.createElement(T, {
						onClick: e.onDeleteReason
					}, a.fbt._("Delete", null, {
						hk: "n7R3f"
					}))))
				}
			}
			var D = Object(v.a)(A),
				L = s("./src/reddit/layout/row/Inline/index.tsx"),
				U = s("./src/reddit/components/RemovalReasons/RemovalReasonItem.m.less"),
				B = s.n(U);
			const {
				fbt: H
			} = s("./node_modules/fbt/lib/FbtPublic.js"), W = _.a.wrapped(h.o, "EditButton", B.a), Z = _.a.wrapped(L.a, "Row", B.a), V = _.a.div("ReasonNumber", B.a), q = _.a.div("ReasonText", B.a);
			var G = e => r.a.createElement(Z, null, r.a.createElement(V, null, e.index + 1), r.a.createElement(q, null, e.removalReason.title), r.a.createElement(W, {
					onClick: e.onEdit,
					"data-redditstyle": !0
				}, H._("Edit", null, {
					hk: "1nftDt"
				}))),
				z = s("./src/reddit/components/RemovalReasons/index.m.less"),
				K = s.n(z);
			const Q = {
					reasonToEdit: null
				},
				J = Object(d.c)({
					isConfirmModalOpen: e => "RemovalReasons--Modal--DeleteConfirmation" === Object(x.a)(e),
					isRemovalReasonEditorModalOpen: e => "RemovalReasons--Editor--Modal" === Object(x.a)(e),
					removalReasons: E.c
				}),
				X = Object(i.b)(J, (e, {
					subredditId: t
				}) => ({
					addRemovalReason: s => e(Object(c.addRemovalReason)(t, s)),
					deleteRemovalReason: s => e(Object(c.deleteRemovalReason)(t, s)),
					editRemovalReason: s => e(Object(c.editRemovalReason)(t, s)),
					toggleConfirmationModal: () => e(Object(l.i)("RemovalReasons--Modal--DeleteConfirmation")),
					toggleReasonEditorModal: () => e(Object(l.i)("RemovalReasons--Editor--Modal"))
				}));
			class Y extends r.a.Component {
				constructor(e) {
					super(e), this.onAddReason = () => {
						this.setState({
							reasonToEdit: null
						}), this.props.toggleReasonEditorModal(), this.props.sendEventWithName("add_new")()
					}, this.onEditReason = e => () => {
						this.setState({
							reasonToEdit: e
						}), this.props.toggleReasonEditorModal(), e && this.props.sendEventWithName("edit")()
					}, this.renderReasonEditorModal = () => r.a.createElement(D, {
						onDeleteReason: () => {
							this.props.toggleReasonEditorModal(), this.props.toggleConfirmationModal()
						},
						onSubmit: this.state.reasonToEdit ? this.props.editRemovalReason : this.props.addRemovalReason,
						removalReason: this.state.reasonToEdit,
						sendEvent: this.state.reasonToEdit ? this.props.sendEventWithName("edit_save") : this.props.sendEventWithName("new_save"),
						subredditId: this.props.subredditId,
						toggleModal: this.onEditReason(null),
						withOverlay: !0
					}), this.state = Q
				}
				render() {
					const {
						deleteRemovalReason: e,
						isConfirmModalOpen: t,
						isRemovalReasonEditorModalOpen: s,
						removalReasons: o,
						sendEventWithName: i,
						toggleConfirmationModal: d
					} = this.props;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(b.c, null, r.a.createElement(h.i, {
						onClick: this.onAddReason,
						disabled: o.length >= f.c || s,
						"data-redditstyle": !0
					}, a.fbt._("Add removal reason", null, {
						hk: "2fHPVe"
					}))), r.a.createElement(b.a, null, r.a.createElement(b.b, null, a.fbt._("Removal reasons", null, {
						hk: "3IWxkH"
					}), r.a.createElement(p.a, {
						linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/360010094892`
					})), o.length > 0 ? o.map((e, t) => r.a.createElement(G, {
						index: t,
						key: e.title,
						onEdit: this.onEditReason(e),
						removalReason: e
					})) : r.a.createElement(u.c, {
						text: a.fbt._("No removal reasons yet", null, {
							hk: "1j70G1"
						})
					}, r.a.createElement(g.a, {
						name: "rules",
						className: K.a.Rules
					}))), s && this.renderReasonEditorModal(), t && this.state.reasonToEdit && r.a.createElement(m.a, {
						actionText: a.fbt._("Delete", null, {
							hk: "3BvUe8"
						}),
						headerText: a.fbt._("Delete reason", null, {
							hk: "q2qun"
						}),
						modalText: a.fbt._("Are you sure you want to delete this reason?", null, {
							hk: "1FTfMR"
						}),
						onConfirm: () => {
							this.state.reasonToEdit && e(this.state.reasonToEdit.id)
						},
						toggleModal: () => {
							d(), this.setState({
								reasonToEdit: null
							})
						},
						trackClick: i("delete"),
						withOverlay: !0
					}))
				}
			}
			t.a = X(Y)
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				tooltip: "ki2VbfBhU-qxg1S6VyET6",
				above: "_8fNGSBGvr1Ds8PbrsUGzN",
				below: "_38gWvHp3NJkR5r5ftUfbFG",
				HoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2",
				hoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2"
			}
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less"),
				d = s.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = r.a.wrapped(e => {
				const {
					children: t,
					className: s,
					renderBelow: n,
					text: r,
					tooltipContentClass: i,
					...c
				} = e;
				return a.a.createElement("div", l({}, c, {
					className: Object(o.a)(d.a.container, s)
				}), r ? a.a.createElement("div", {
					className: Object(o.a)(d.a.tooltip, i, n ? d.a.below : d.a.above)
				}, r) : null, t)
			}, "HoverTooltip", d.a)
		},
		"./src/reddit/components/SaveIndicator/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "_13ubiSSjUBWaeyJM-itH7X",
				titleFontH2: "_2V4_0G0gJO4R1v-_sO5D_j",
				titleFontH3: "_32Uo9qgINsZX5CSOtFM0e2",
				titleFontH4: "_2AWEwOuuK5wBnQGyiB5sSq",
				titleFontH5: "_8460KZXLwbKYkuLfDNr_-",
				titleFontH6: "_7GhKEQrcNu3JuSHqj9pJc",
				metadataFont: "qilOmvvpr4iY8iiHxuV5Y",
				flairFont: "SovT7HaLHcqz1BM9MWXPA",
				labelsFont: "_3Ngpaj84VwPqy3s6Tr3GEJ",
				actionFont: "_3RLwRjy5tGM8nl4kID8Tfg",
				smallButtonFont: "nb_OfRzzHKNkGteZC-TyY",
				largeButtonFont: "_2fhzAdDCEdDseFevwE6mBQ",
				strongTextFont: "_2vvi6WI_4yX2H2H-b2aBCF",
				tabFont: "_3E-egg7Cy7bL6JzsZuFTcn",
				buttonFontXS: "_2ubuuRpTK-U-kDLRRU6pyd",
				buttonFontXs: "_2ubuuRpTK-U-kDLRRU6pyd",
				buttonFontS: "_2fsKOual6xDsvmfB9Z_Gab",
				buttonFontM: "_3pHwBKAuUlalHSG7AJTpEP",
				buttonFontL: "fC3WZNZt7dm3kVDpkLV2",
				buttonFontXL: "_1A7d3cQhRmAUn05diOyF_D",
				buttonFontXl: "_1A7d3cQhRmAUn05diOyF_D",
				bodyFontH1: "_2_nWm6krUlDJnEF9pk7xNK",
				bodyFontH2: "_3zzd4vTmfrG1aK91i6m2j9",
				bodyFontH3: "_3tFwmsoGmyp52EFCoZ0GCV",
				bodyFontH4: "MdKdTVjxUaPPkDvG_msXr",
				bodyFontH5: "_2dNFOZceckCrwGYG8Avi-k",
				bodyFontH6: "_3sSb6LvOgvwy7eawwX4Gtq",
				bodyFont: "_2fiuzofxgtB6yu9nAHLuqW",
				bodyFontSmall: "_2IcqO4djjAVsOalbW_Zpa9",
				bodyFontMono: "_2i_EmKzaFJfCskmkHdmmgJ",
				icon: "cO908rcinWKz894i8I5jJ",
				pendingIcon: "U2dgL2i9_EJN8R_MLFTjS",
				savedIcon: "_1iGcF7LdvT-OMRgF7xKWqm",
				saveErrorIcon: "kWS-87C-v-iTlGGxQOmxu",
				caption: "_1MAESVWNqu44JbWmHGJsuI"
			}
		},
		"./src/reddit/components/ScheduledPost/ControlRow/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1xM2tjm8c7LuqnoEJG1Ws1",
				controlRow: "P7KCCrRfT4TO2wcnk_Kjv",
				controlRowItem: "_1AkGbjxtRpq3ZhKADdUTU3"
			}
		},
		"./src/reddit/components/ScheduledPost/MetaLine/index.m.less": function(e, t, s) {
			e.exports = {
				content: "_297_pyPlxmqBF0tLkUhTME",
				icon: "_1n_ojuNDT8JeH9DxmHJZt9",
				author: "_1k9D_vEsQ8odWCNERbDOxX",
				modIcon: "_3ryKOTfQ_vqgap0EZsZHAl",
				stickyIcon: "qfjbZcX6-FZK2BGrOXezD"
			}
		},
		"./src/reddit/components/ScheduledPost/MetaLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/components/AuthorLink/index.tsx"),
				i = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				d = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				l = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				c = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				m = s("./src/reddit/models/ScheduledPost/index.ts"),
				u = s("./src/reddit/components/ScheduledPost/MetaLine/index.m.less"),
				p = s.n(u);
			class b extends a.a.PureComponent {
				render() {
					if (!Object(m.o)(this.props.subreddit)) return null;
					const {
						isModDistinguished: e,
						isPostAsMetaMod: t,
						subreddit: s,
						owner: n,
						isSticky: u
					} = this.props, b = t ? o.k : Object(m.n)(n) ? n.name : void 0;
					return a.a.createElement("span", {
						className: p.a.content
					}, a.a.createElement(i.a, {
						to: s.path
					}, s.prefixedName), b && a.a.createElement(a.a.Fragment, null, a.a.createElement(d.a, null), a.a.createElement(r.a, {
						className: p.a.author,
						author: b,
						isUnstyled: !0
					}, `u/${b}`)), e && a.a.createElement(c.a, {
						className: p.a.modIcon
					}), u && a.a.createElement(l.a, {
						className: p.a.stickyIcon
					}))
				}
			}
			t.a = b
		},
		"./src/reddit/components/ScheduledPost/OverflowMenu/withOverflowMenu.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./node_modules/fbt/lib/FbtPublic.js"),
				d = s("./src/reddit/components/OverflowMenu/index.tsx"),
				l = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx");
			var c = e => a.a.createElement(d.b, {
					dropdownId: `SCHEDULED_POST_DROPDOWN${e.scheduledPostId}`,
					onClick: e.onOpenOverflow
				}, a.a.createElement(l.b, {
					isSelected: e.isSticky,
					onClick: e.onToggleIsSticky,
					text: i.fbt._("Sticky post", null, {
						hk: "UOShB"
					})
				}), a.a.createElement(l.b, {
					isSelected: e.isModDistinguished,
					onClick: e.onToggleIsModDistinguished,
					text: i.fbt._("Distinguish as Mod", null, {
						hk: "3opu7K"
					})
				}), a.a.createElement(l.b, {
					isSelected: e.isOriginalContent,
					onClick: e.onToggleIsOC,
					text: i.fbt._("Mark as OC", null, {
						hk: "32LGcQ"
					})
				}), a.a.createElement(l.b, {
					isSelected: e.isNsfw,
					onClick: e.onToggleIsNsfw,
					text: i.fbt._("Mark as NSFW", null, {
						hk: "2qBIcp"
					})
				}), a.a.createElement(l.b, {
					isSelected: e.isSpoiler,
					onClick: e.onToggleIsSpoiler,
					text: i.fbt._("Mark as Spoiler", null, {
						hk: "rOev9"
					})
				})),
				m = s("./src/reddit/selectors/scheduledPosts/index.ts");
			const u = Object(r.c)({
					isLoading: m.j
				}),
				p = Object(o.b)(u);

			function b(e) {
				class t extends a.a.Component {
					constructor(e) {
						super(e), this.isSaving = !1, this.onToggleMetadata = e => {
							this.setState({
								...this.state,
								[e]: !this.state[e]
							}), this.isSaving = !0, this.props.onUpdateMetadata(e)
						}, this.onToggleIsSticky = () => this.onToggleMetadata("isSticky"), this.onToggleIsModDistinguished = () => this.onToggleMetadata("isModDistinguished"), this.onToggleIsOriginalContent = () => this.onToggleMetadata("isOriginalContent"), this.onToggleIsNsfw = () => this.onToggleMetadata("isNsfw"), this.onToggleIsSpoiler = () => this.onToggleMetadata("isSpoiler"), this.renderOverflowMenu = () => a.a.createElement(c, {
							scheduledPostId: this.props.scheduledPost.id,
							onOpenOverflow: this.props.onOpenOverflow,
							onToggleIsSticky: this.onToggleIsSticky,
							onToggleIsModDistinguished: this.onToggleIsModDistinguished,
							onToggleIsOC: this.onToggleIsOriginalContent,
							onToggleIsNsfw: this.onToggleIsNsfw,
							onToggleIsSpoiler: this.onToggleIsSpoiler,
							isModDistinguished: this.state.isModDistinguished,
							isOriginalContent: this.state.isOriginalContent,
							isNsfw: this.state.isNsfw,
							isSticky: this.state.isSticky,
							isSpoiler: this.state.isSpoiler
						}), this.state = {
							isModDistinguished: e.scheduledPost.isModDistinguished,
							isNsfw: e.scheduledPost.isNsfw,
							isOriginalContent: e.scheduledPost.isOriginalContent,
							isSpoiler: e.scheduledPost.isSpoiler,
							isSticky: !!e.scheduledPost.sticky && "NONE" !== e.scheduledPost.sticky
						}
					}
					componentDidUpdate(e) {
						e.isLoading && !this.props.isLoading && this.isSaving && (this.isSaving = !1, this.setState({
							isModDistinguished: this.props.scheduledPost.isModDistinguished || !1,
							isNsfw: this.props.scheduledPost.isNsfw || !1,
							isOriginalContent: this.props.scheduledPost.isOriginalContent || !1,
							isSpoiler: this.props.scheduledPost.isSpoiler || !1,
							isSticky: !!this.props.scheduledPost.sticky && "NONE" !== this.props.scheduledPost.sticky
						}))
					}
					render() {
						const {
							isLoading: t,
							scheduledPost: s,
							onUpdateMetadata: n,
							onOpenOverflow: o,
							...r
						} = this.props, i = {
							...r,
							renderOverflowMenu: this.renderOverflowMenu
						};
						return a.a.createElement(e, i)
					}
				}
				return t.displayName = `WithOverflowMenu(${e.displayName||e.name})`, p(t)
			}
		},
		"./src/reddit/components/ScheduledPost/PostTitle/index.m.less": function(e, t, s) {
			e.exports = {
				title: "_3jA9JBnv4bqmmiAw3Akmug"
			}
		},
		"./src/reddit/components/ScheduledPost/PostTitle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/components/ScheduledPost/PostTitle/index.m.less"),
				r = s.n(o);
			class i extends a.a.PureComponent {
				render() {
					return a.a.createElement("span", {
						className: r.a.title
					}, this.props.title)
				}
			}
			t.a = i
		},
		"./src/reddit/components/ScheduledPost/TopMetaLine/FailureMetaLine/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1YrhJ0z1RfTXg7jHYgApSr",
				error: "_2_f_ecVpbx4yoMzazJYkDP",
				retryButton: "_1KbjdUJVdbZQOJN8d6LTsX",
				parametricMetaData: "_2x3oXUTdLAKAob3BYLRkmH"
			}
		},
		"./src/reddit/components/ScheduledPost/TopMetaLine/TemporalMetaLine/index.m.less": function(e, t, s) {
			e.exports = {
				container: "qDE3oDok1392-t8IDOBfk",
				clock: "_2sfIhl6E6vfZCwxx54EUNB",
				parametricMetaData: "_3bAfM2inJTjD3ZXNzO5nE5"
			}
		},
		"./src/reddit/components/ScheduledPost/index.m.less": function(e, t, s) {
			e.exports = {
				body: "_320l2eVngsr4Ord9dXc2er",
				container: "_26zeT5d9JKXWbWzOT4ncpg",
				thumbnailContainer: "_2UwJRJuqEbkRCV8O6REq8h",
				mainBody: "_3pHV3zwe-Q9-xNEB0iM3WT",
				backgroundWrapper: "_2KWv8ukh9RMgpOturAiV9z",
				content: "hAQclO6xLNG3WDMgkywGo",
				flairList: "_1-tY_25z_pkhbFvUz2-AqS",
				Icon: "_3XIOnqmz8vxSaPmPEY11Wh",
				icon: "_3XIOnqmz8vxSaPmPEY11Wh"
			}
		},
		"./src/reddit/components/ScheduledPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return fe
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/scheduledPosts/index.ts"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/telemetry/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/reddit/actions/scheduledPosts/index.ts"),
				u = s("./src/reddit/actions/scheduledPosts/delete.ts"),
				p = s("./src/reddit/actions/scheduledPosts/edit.ts"),
				b = s("./src/lib/makeActionCreator/index.ts"),
				h = s("./src/reddit/actions/scheduledPosts/constants.ts"),
				g = s("./src/reddit/actions/toaster.ts"),
				f = s("./src/reddit/actions/urlRequested.ts"),
				x = s("./src/lib/makeGqlRequest/index.ts"),
				E = s("./src/redditGQL/operations/SubmitScheduledPost.json");
			var v = s("./src/reddit/models/Toast/index.ts");
			const _ = Object(b.a)(h.l),
				C = (e, t) => async (s, n, {
					gqlContext: a
				}) => {
					const o = Object(i.p)(n(), {
						subredditId: e,
						scheduledPostId: t
					});
					if (!o) return void s(Object(g.f)(Object(g.e)(h.u(), v.b.Error)));
					const r = await ((e, t) => Object(x.a)(e, {
						...E,
						variables: t
					}))(a(), {
						input: {
							id: o.id
						}
					});
					if (!r.ok) return void s(Object(g.f)(Object(g.e)(h.v(), v.b.Error, h.s(), C(e, t))));
					const d = r.body.data.submitScheduledPost.post.permalink;
					s(Object(f.a)(d, !1)), s(Object(g.f)(Object(g.e)(h.x(), v.b.SuccessCommunity))), s(_({
						subredditId: e,
						scheduledPostId: t
					}))
				};
			var k = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				y = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				S = s("./src/reddit/components/FlairList/index.tsx"),
				O = s("./src/reddit/components/PostLeftRail/index.tsx"),
				j = s("./src/lib/classNames/index.ts"),
				w = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				I = s("./src/reddit/controls/Score/index.tsx"),
				N = s("./src/reddit/models/Vote/index.ts"),
				T = s("./src/reddit/components/VerticalVotes/index.m.less"),
				M = s.n(T);
			class P extends o.a.PureComponent {
				render() {
					return o.a.createElement("div", {
						className: M.a.votesContainer
					}, o.a.createElement("button", {
						className: M.a.disabledVoteIcon,
						"aria-label": n.fbt._("Upvote", null, {
							hk: "4aEt1X"
						}),
						"aria-pressed": !1,
						disabled: !0
					}, o.a.createElement(w.d, {
						compact: !1,
						voteState: N.a.notVoted,
						interactive: !1
					})), o.a.createElement(I.a, {
						disableInlineColor: !0,
						className: Object(j.a)(M.a.Score, M.a.disabledScore),
						score: 0,
						voteState: N.a.notVoted,
						isScoreHidden: !0
					}), o.a.createElement("button", {
						className: M.a.disabledVoteIcon,
						"aria-label": n.fbt._("downvote", null, {
							hk: "4xXpvV"
						}),
						"aria-pressed": !1,
						disabled: !0
					}, o.a.createElement(w.c, {
						compact: !1,
						voteState: N.a.notVoted,
						interactive: !1
					})))
				}
			}
			var R = P,
				F = s("./src/reddit/constants/thumbnails.ts"),
				A = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				D = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				L = s("./src/reddit/models/PostCreationForm/index.ts"),
				U = s("./src/reddit/models/ScheduledPost/index.ts"),
				B = s("./src/reddit/components/ScheduledPost/OverflowMenu/withOverflowMenu.tsx"),
				H = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				W = s("./src/reddit/icons/svgs/Post/index.tsx"),
				Z = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				V = s("./src/reddit/components/ScheduledPost/ControlRow/index.m.less"),
				q = s.n(V);
			const G = e => {
				const {
					icon: t,
					onClick: s
				} = e;
				return o.a.createElement("span", {
					onClick: s,
					className: Object(j.a)(q.a.controlRowItem, e.className)
				}, o.a.createElement(t, {
					className: q.a.icon
				}), " ", e.text)
			};
			class z extends o.a.Component {
				render() {
					return o.a.createElement("span", {
						className: q.a.controlRow
					}, this.props.onSubmitPostNow && o.a.createElement(G, {
						icon: W.a,
						text: n.fbt._("Submit post now", null, {
							hk: "QkS4y"
						}),
						onClick: this.props.onSubmitPostNow
					}), o.a.createElement(G, {
						icon: H.a,
						text: n.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: this.props.onEditScheduledPost
					}), o.a.createElement(G, {
						icon: Z.b,
						text: n.fbt._("Delete", null, {
							hk: "1uVY7w"
						}),
						onClick: this.props.onDeleteScheduledPost
					}), this.props.renderOverflowMenu())
				}
			}
			var K = Object(B.a)(z),
				Q = s("./src/reddit/components/ScheduledPost/MetaLine/index.tsx"),
				J = s("./src/reddit/components/ScheduledPost/PostTitle/index.tsx"),
				X = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				Y = s("./src/reddit/components/ScheduledPost/TopMetaLine/FailureMetaLine/index.m.less"),
				$ = s.n(Y);
			const {
				fbt: ee
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class te extends o.a.PureComponent {
				componentDidMount() {
					this.props.onViewFailedPost()
				}
				render() {
					const {
						scheduledPost: e
					} = this.props, {
						owner: t
					} = e, s = Object(U.n)(t) && t.prefixedName;
					return o.a.createElement("div", {
						className: $.a.container
					}, o.a.createElement("div", null, o.a.createElement(X.a, {
						className: $.a.error
					}), ee._("Post failed to submit! Please {=retry}", [ee._param("=retry", o.a.createElement("button", {
						className: $.a.retryButton,
						onClick: this.props.onSubmitPostNow
					}, ee._("retry", null, {
						hk: "hER94"
					})))], {
						hk: "4yOnl8"
					})), o.a.createElement("div", null, ee._("Scheduled by {=[post owner]}", [ee._param("=[post owner]", o.a.createElement("span", {
						className: $.a.parametricMetaData
					}, ee._("{post owner}", [ee._param("post owner", s)], {
						hk: "25fi1G"
					})))], {
						hk: "36vTyl"
					})))
				}
			}
			var se = Object(r.b)(null, (e, {
					scheduledPost: t
				}) => ({
					onSubmitPostNow: () => {
						e(C(t.subreddit.id, t.id)), e((e, t) => Object(l.a)(Object(D.n)()(t())))
					},
					onViewFailedPost: () => e((e, s) => Object(l.a)(Object(D.w)()(s(), t)))
				}))(te),
				ne = s("./src/reddit/helpers/scheduledPosts/index.ts"),
				ae = s("./src/reddit/icons/svgs/Clock/index.tsx"),
				oe = s("./src/reddit/components/ScheduledPost/TopMetaLine/TemporalMetaLine/index.m.less"),
				re = s.n(oe);
			const {
				fbt: ie
			} = s("./node_modules/fbt/lib/FbtPublic.js"), de = e => {
				return `${Object(ne.c)(e.publishAt)} ${Object(ne.d)(e.clientTimezone).displayText}`
			};
			class le extends o.a.PureComponent {
				render() {
					const {
						scheduledPost: e
					} = this.props, {
						owner: t
					} = e, s = Object(U.n)(t) && t.prefixedName;
					return o.a.createElement("div", {
						className: re.a.container
					}, o.a.createElement(ae.a, {
						className: re.a.clock
					}), o.a.createElement("div", null, o.a.createElement("div", null, ie._("This post is scheduled for {=[time]}", [ie._param("=[time]", o.a.createElement("span", {
						className: re.a.parametricMetaData
					}, ie._("{time}", [ie._param("time", de(e))], {
						hk: "JrMs3"
					})))], {
						hk: "4gFrnr"
					})), o.a.createElement("div", null, ie._("Scheduled by {=[post owner]}", [ie._param("=[post owner]", o.a.createElement("span", {
						className: re.a.parametricMetaData
					}, ie._("{post owner}", [ie._param("post owner", s)], {
						hk: "25fi1G"
					})))], {
						hk: "36vTyl"
					}))))
				}
			}
			var ce = le;
			class me extends o.a.PureComponent {
				render() {
					const {
						scheduledPost: e
					} = this.props;
					switch (e.state) {
						case U.e.FAILED:
							return o.a.createElement(se, {
								scheduledPost: e
							});
						case U.e.PROCESSING:
						case U.e.CREATED:
						default:
							return o.a.createElement(ce, {
								scheduledPost: e
							})
					}
				}
			}
			var ue = me,
				pe = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				be = s.n(pe),
				he = s("./src/reddit/components/ScheduledPost/index.m.less"),
				ge = s.n(he);
			const fe = {
					isNSFW: !1,
					media: {
						content: "",
						markdownContent: "",
						isRichtextPreview: !0,
						mediaMetadata: null,
						obfuscated: null,
						richtextContent: {
							document: []
						},
						rteMode: L.h.RICH_TEXT,
						type: "rtjson"
					},
					thumbnail: {
						url: F.a.DEFAULT,
						width: null,
						height: null
					},
					title: "",
					source: null,
					isSponsored: !1
				},
				xe = Object(d.c)({
					media: (e, {
						scheduledPostId: t,
						subredditId: s
					}) => {
						const n = Object(i.p)(e, {
							subredditId: s,
							scheduledPostId: t
						});
						return n ? {
							...fe,
							isNSFW: n.isNsfw,
							title: n.title
						} : null
					},
					flair: (e, {
						scheduledPostId: t,
						subredditId: s
					}) => {
						const n = Object(i.p)(e, {
							subredditId: s,
							scheduledPostId: t
						});
						return n ? Object(i.m)({
							scheduledPost: n
						}) : null
					},
					scheduledPost: (e, {
						scheduledPostId: t,
						subredditId: s
					}) => Object(i.p)(e, {
						subredditId: s,
						scheduledPostId: t
					})
				}),
				Ee = Object(r.b)(xe, (e, {
					scheduledPostId: t,
					subredditId: s
				}) => ({
					onSubmitPostNow: () => {
						e(C(s, t)), e((e, t) => Object(l.a)(Object(D.n)()(t())))
					},
					onEditScheduledPost: () => {
						e(Object(p.b)(s, t)), e((e, t) => Object(l.a)(Object(D.d)()(t())))
					},
					onDeleteScheduledPost: () => e(Object(u.a)(s, t)),
					onOpenOverflow: () => {
						e((e, t) => Object(l.a)(Object(D.h)(!1)(t())))
					},
					onUpdateMetadata: n => e((e, a) => {
						const o = Object(i.p)(a(), {
							subredditId: s,
							scheduledPostId: t
						});
						o && e(Object(m.b)(n, o))
					})
				}));
			class ve extends o.a.PureComponent {
				constructor(e) {
					super(e), this.onSubmitPostNow = () => this.setState({
						submitConfirmModalIsOpen: !0
					}), this.onCancelSubmitPostNow = () => this.setState({
						submitConfirmModalIsOpen: !1
					}), this.onConfirmSubmitPostNow = () => this.props.onSubmitPostNow(), this.onEditScheduledPost = () => {
						this.props.onEditScheduledPost()
					}, this.onDeleteScheduledPost = () => this.setState({
						deleteConfirmModalIsOpen: !0
					}), this.onCancelDeleteScheduledPost = () => this.setState({
						deleteConfirmModalIsOpen: !1
					}), this.onConfirmDeleteScheduledPost = () => this.props.onDeleteScheduledPost(), this.state = {
						deleteConfirmModalIsOpen: !1,
						submitConfirmModalIsOpen: !1
					}
				}
				render() {
					const {
						media: e,
						flair: t,
						scheduledPost: s
					} = this.props;
					return e && t && s ? o.a.createElement("div", {
						className: ge.a.container
					}, o.a.createElement(ue, {
						scheduledPost: s
					}), o.a.createElement("div", {
						className: be.a.classicPostStyles
					}, o.a.createElement(O.b, null, o.a.createElement(R, null)), o.a.createElement("div", {
						style: Object(A.c)(void 0, this.props),
						className: ge.a.backgroundWrapper
					}, o.a.createElement("div", {
						className: ge.a.mainBody
					}, o.a.createElement("div", {
						className: ge.a.thumbnailContainer
					}, o.a.createElement(k.a, {
						post: e
					})), o.a.createElement("div", {
						className: ge.a.content
					}, o.a.createElement("div", null, o.a.createElement(J.a, {
						title: s.title
					}), o.a.createElement(S.a, {
						className: ge.a.flairList,
						flair: t
					})), o.a.createElement(Q.a, {
						isModDistinguished: s.isModDistinguished,
						isPostAsMetaMod: s.isPostAsMetaMod,
						isSticky: !!s.sticky && "NONE" !== s.sticky,
						subreddit: s.subreddit,
						owner: s.owner
					}), o.a.createElement(K, {
						onSubmitPostNow: s.state === U.e.FAILED ? void 0 : this.onSubmitPostNow,
						onEditScheduledPost: this.onEditScheduledPost,
						onDeleteScheduledPost: this.onDeleteScheduledPost,
						onUpdateMetadata: this.props.onUpdateMetadata,
						scheduledPost: s,
						onOpenOverflow: this.props.onOpenOverflow
					}))))), this.state.deleteConfirmModalIsOpen && o.a.createElement(y.a, {
						onClose: this.onCancelDeleteScheduledPost,
						onCancel: this.onCancelDeleteScheduledPost,
						onConfirm: this.onConfirmDeleteScheduledPost,
						actionText: n.fbt._("Delete", null, {
							hk: "1WN0R6"
						}),
						modalText: n.fbt._("Are you sure you want to delete this scheduled post? This action cannot be undone.", null, {
							hk: "1EdQC7"
						}),
						withOverlay: !0
					}), this.state.submitConfirmModalIsOpen && o.a.createElement(y.a, {
						onClose: this.onCancelSubmitPostNow,
						onCancel: this.onCancelSubmitPostNow,
						onConfirm: this.onConfirmSubmitPostNow,
						actionText: n.fbt._("Submit", null, {
							hk: "3kl12J"
						}),
						modalText: n.fbt._("Are you sure you want to submit this scheduled post now? This action cannot be undone.", null, {
							hk: "18O8dB"
						}),
						withOverlay: !0
					})) : null
				}
			}
			t.a = Object(c.a)(Ee(ve))
		},
		"./src/reddit/components/Settings/shared/SectionHeading.m.less": function(e, t, s) {
			e.exports = {
				Component: "BotIImuktRA9aFAPP0O4Z",
				component: "BotIImuktRA9aFAPP0O4Z"
			}
		},
		"./src/reddit/components/Settings/shared/SectionHeading.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/Settings/shared/SectionHeading.m.less"),
				a = s.n(n),
				o = s("./src/lib/lessComponent.tsx");
			t.a = o.a.h3("Component", a.a)
		},
		"./src/reddit/components/Settings/shared/Widgets.m.less": function(e, t, s) {
			e.exports = {
				Label: "asxizthf5kZpmoY27VBKd",
				label: "asxizthf5kZpmoY27VBKd",
				HoverTooltip: "_1qQQ7O7znXpzgcC5RgQFtW",
				hoverTooltip: "_1qQQ7O7znXpzgcC5RgQFtW",
				ControlContainer: "_1kylDjSQ2hay_ez0zF7BEP",
				controlContainer: "_1kylDjSQ2hay_ez0zF7BEP",
				TextContainer: "_3dLmvT0hpACHFxhncqzCOr",
				textContainer: "_3dLmvT0hpACHFxhncqzCOr",
				inModal: "_2O2JPVgOlh8J6OW_9ur4BQ",
				ActionContainer: "_1oREjd5ToMFah-VfX5Zt1z",
				actionContainer: "_1oREjd5ToMFah-VfX5Zt1z",
				Wrapper: "_2f63as5b5FASHMqGd5P1o0",
				wrapper: "_2f63as5b5FASHMqGd5P1o0",
				isCreateCommunity: "_38bDTwLcytTCF-174R0UXB",
				mColumn: "_1HH_g-CLQB1BPcqOhZcakt",
				mLast: "_3Lu6XJyVbSLDVKDx-wue2g",
				mIndent: "_2D65jEbgD16ae_sJ8BG4AD",
				mDisabled: "LvI7FSBTGgYo2skaf18Zv",
				Subtext: "_1NdK7EwgYqUxJObBr3ym4o",
				subtext: "_1NdK7EwgYqUxJObBr3ym4o",
				isNightModeOn: "KUWYDFs7fIjkQNSOL_BR6",
				Wrapper__LineBreak: "wVinKyEoajEmwhqwINYGd",
				wrapperLineBreak: "wVinKyEoajEmwhqwINYGd",
				Link: "oFObIzV6ZJDQuG09BXh8u",
				link: "oFObIzV6ZJDQuG09BXh8u",
				SubtextLink: "_3MGA27y-8plrsOsPbyYwgs",
				subtextLink: "_3MGA27y-8plrsOsPbyYwgs",
				LinkIcon: "_3gg7WkHbAGiySOBOzb9k6F",
				linkIcon: "_3gg7WkHbAGiySOBOzb9k6F",
				LinkButton: "_3I7YVr4pIJiOGmmJdgsEXK",
				linkButton: "_3I7YVr4pIJiOGmmJdgsEXK",
				ArrowRight: "_1oH-o0mDV86imeLnyfmCiD",
				arrowRight: "_1oH-o0mDV86imeLnyfmCiD",
				StyledFlair: "_1F2irboi-xRChkhyndP6ct",
				styledFlair: "_1F2irboi-xRChkhyndP6ct",
				SpoilerFlair: "_3mkE4WZP2_bhfSQvrpeIka",
				spoilerFlair: "_3mkE4WZP2_bhfSQvrpeIka",
				NSFWFlair: "_1mPvZAvMvenP80lJ1RnQdE",
				nsfwFlair: "_1mPvZAvMvenP80lJ1RnQdE",
				DropdownWrapper: "_1D4YEzJAywC1b-Jx_on2cZ",
				dropdownWrapper: "_1D4YEzJAywC1b-Jx_on2cZ",
				DropdownRow: "_1ekKroexYAQllqx2MfTHbi",
				dropdownRow: "_1ekKroexYAQllqx2MfTHbi",
				Row: "_1QNl7IkO4tmBTG1Cp8_ZBk",
				row: "_1QNl7IkO4tmBTG1Cp8_ZBk",
				DropdownTriangle: "_2VFl8Aqe76Ulg9-x85FKpH",
				dropdownTriangle: "_2VFl8Aqe76Ulg9-x85FKpH",
				DescriptionsRow: "H3CGfLrRo4H9tQdWd5vG9",
				descriptionsRow: "H3CGfLrRo4H9tQdWd5vG9",
				Circle: "_20H2GFMG6B0Lai4Q3DhIE2",
				circle: "_20H2GFMG6B0Lai4Q3DhIE2",
				RangeSlider: "_2J8tywkkd4Gotm3jZ2Gcv0",
				rangeSlider: "_2J8tywkkd4Gotm3jZ2Gcv0",
				RangeSliderInput: "_2ieOPsoffMpHmDwvrKLRjg",
				rangeSliderInput: "_2ieOPsoffMpHmDwvrKLRjg",
				Ticks: "_3BLGt0e8kYgLHkUbAeXTWG",
				ticks: "_3BLGt0e8kYgLHkUbAeXTWG",
				TickText: "_1hEYjTFCxEu2ILobPvatAp",
				tickText: "_1hEYjTFCxEu2ILobPvatAp",
				PreSubText: "_2_hv6QgJ151j9WmCyETVfC",
				preSubText: "_2_hv6QgJ151j9WmCyETVfC",
				MultiLineInputSettingsBottomRow: "hgvQ7UQa9_0jmXSzQjqhF",
				multiLineInputSettingsBottomRow: "hgvQ7UQa9_0jmXSzQjqhF",
				ActionLinkContainer: "e4RehzaESS5nfk-O6pYoK",
				actionLinkContainer: "e4RehzaESS5nfk-O6pYoK",
				input: "_14_SnmD6g3FrozcKjTpqoH",
				tag: "_1GQzFyg5xYq94euL74ZaeJ"
			}
		},
		"./src/reddit/components/Settings/shared/Widgets.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "m", (function() {
				return V
			})), s.d(t, "j", (function() {
				return Q
			})), s.d(t, "n", (function() {
				return X
			})), s.d(t, "k", (function() {
				return te
			})), s.d(t, "l", (function() {
				return oe
			})), s.d(t, "o", (function() {
				return re
			})), s.d(t, "i", (function() {
				return pe
			})), s.d(t, "b", (function() {
				return be
			})), s.d(t, "f", (function() {
				return he
			})), s.d(t, "a", (function() {
				return ge
			})), s.d(t, "d", (function() {
				return xe
			})), s.d(t, "h", (function() {
				return Ee
			})), s.d(t, "c", (function() {
				return ve
			})), s.d(t, "e", (function() {
				return _e
			})), s.d(t, "g", (function() {
				return Ce
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/react-uid/dist/es2015/hooks.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/higherOrderComponents/asTooltip.tsx"),
				m = s("./src/reddit/components/CharacterCountdown/index.tsx"),
				u = s("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				p = s("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				b = s("./src/reddit/controls/Dropdown/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/Row.tsx"),
				g = s("./src/reddit/controls/FormFields/index.tsx"),
				f = s("./src/lib/lessComponent.tsx"),
				x = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				E = s("./src/reddit/controls/Select/index.m.less"),
				v = s.n(E);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const C = f.a.span("Wrapper", v.a),
				k = f.a.select("Inner", v.a),
				y = f.a.wrapped(x.b, "Caret", v.a);

			function S({
				className: e,
				innerClassName: t,
				...s
			}) {
				const n = s.disabled ? {
					"data-disabled": s.disabled
				} : {};
				return a.a.createElement(C, {
					className: e
				}, a.a.createElement(k, _({
					className: t
				}, s)), a.a.createElement(y, _({
					isSubreddit: !0
				}, n)))
			}
			var O = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				j = s("./src/reddit/controls/Typography/index.tsx"),
				w = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				I = s("./src/reddit/icons/svgs/Circle/index.tsx"),
				N = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				T = s("./node_modules/lodash/range.js"),
				M = s.n(T),
				P = s("./src/reddit/controls/Button/index.tsx"),
				R = s("./src/reddit/layout/row/Inline/index.tsx"),
				F = s("./src/reddit/models/Flair/index.ts"),
				A = s("./src/reddit/selectors/tooltip.ts"),
				D = s("./src/reddit/selectors/user.ts"),
				L = s("./src/reddit/components/Settings/shared/Widgets.m.less"),
				U = s.n(L);

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const H = Object(c.a)(b.a),
				W = f.a.wrapped(I.a, "Circle", U.a),
				Z = f.a.h3("Label", U.a),
				V = f.a.wrapped(j.c, "Subtext", U.a),
				q = f.a.wrapped(u.a, "HoverTooltip", U.a),
				G = f.a.div("ControlContainer", U.a),
				z = f.a.div("TextContainer", U.a),
				K = f.a.div("ActionContainer", U.a),
				Q = ({
					className: e,
					direction: t,
					isCreateCommunity: s,
					inModal: n,
					isNightModeOn: o,
					disabled: r,
					indent: i,
					last: l,
					...c
				}) => a.a.createElement("div", B({}, c, {
					className: Object(d.a)(U.a.Wrapper, e, {
						[U.a.mColumn]: "column" === t,
						[U.a.mDisabled]: !!r,
						[U.a.mIndent]: !!i,
						[U.a.mLast]: !!l,
						[U.a.isCreateCommunity]: !!s,
						[U.a.inModal]: !!n,
						[U.a.isNightModeOn]: !!o
					})
				})),
				J = f.a.a("Link", U.a),
				X = f.a.wrapped(J, "SubtextLink", U.a),
				Y = f.a.wrapped(N.a, "LinkIcon", U.a),
				$ = f.a.button("LinkButton", U.a),
				ee = f.a.wrapped(w.a, "ArrowRight", U.a),
				te = e => a.a.createElement(Q, {
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					isCreateCommunity: e.isCreateCommunity,
					last: e.last
				}, a.a.createElement(z, {
					className: e.textContainerClassName
				}, a.a.createElement(Z, null, e.label, e.isRequired && a.a.createElement(W, null)), a.a.createElement(V, null, e.subtext)), a.a.createElement(K, null, e.children)),
				se = f.a.div("StyledFlair", U.a),
				ne = f.a.wrapped(se, "SpoilerFlair", U.a),
				ae = f.a.wrapped(se, "NSFWFlair", U.a),
				oe = e => {
					switch (e.flair) {
						case F.f.Nsfw:
							return a.a.createElement(ae, null, "NSFW");
						case F.f.Spoiler:
							return a.a.createElement(ne, null, "SPOILER");
						default:
							return null
					}
				},
				re = e => {
					const t = Object(r.a)();
					return a.a.createElement(Q, {
						className: e.className,
						disabled: e.disabled,
						indent: e.indent,
						last: e.last
					}, a.a.createElement(z, null, a.a.createElement(R.a, null, a.a.createElement("label", {
						htmlFor: t
					}, a.a.createElement(Z, null, e.label))), a.a.createElement(V, null, e.subtext)), a.a.createElement(K, null, a.a.createElement(G, null, e.tooltip && a.a.createElement(q, {
						tooltipContentClass: e.tooltipContentClassName,
						text: e.tooltip
					}), a.a.createElement(O.a, {
						id: t,
						on: e.on,
						forceOn: e.forceOn,
						onToggle: e.onClick,
						disabled: e.disabled
					}))))
				},
				ie = f.a.input("RangeSliderInput", U.a),
				de = f.a.div("RangeSlider", U.a),
				le = f.a.div("Ticks", U.a),
				ce = f.a.div("TickText", U.a),
				me = f.a.div("PreSubText", U.a),
				ue = Object(i.c)({
					isNightModeOn: D.V
				}),
				pe = Object(o.b)(ue)(e => a.a.createElement(Q, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled,
					inModal: e.inModal,
					isNightModeOn: e.isNightModeOn,
					direction: e.direction
				}, a.a.createElement(z, {
					style: {
						flex: 5
					}
				}, !e.inModal && a.a.createElement(R.a, null, a.a.createElement(Z, null, e.label)), a.a.createElement(V, null, " ", a.a.createElement(me, {
					style: {
						color: e.ticks[e.value].color
					}
				}, " ", e.ticks[e.value].text + ": ", " "), " ", e.subtext)), a.a.createElement(K, {
					style: {
						flex: 3,
						margin: "20px 20px 0 0"
					}
				}, a.a.createElement(de, null, a.a.createElement(ie, {
					style: {
						background: "linear-gradient(to right, " + M()(1, e.max + 1).map((t, s) => t <= e.value ? `${e.ticks[e.value].color} ${(t-1)/e.max*100}%,\n                    ${e.ticks[e.value].color} ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : t !== e.max ? `#c5c5c5 ${(t-1)/e.max*100}%, #c5c5c5 ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : `#c5c5c5 ${(t-1)/e.max*100}%`) + ", #C5C5C5 100%)"
					},
					className: "range-slider-input",
					type: "range",
					min: e.min,
					max: e.max,
					step: e.step,
					value: e.value,
					onChange: e.onChange,
					onInput: e.onChange
				}), a.a.createElement(le, null, Object.keys(e.ticks).map((t, s) => a.a.createElement(ce, {
					key: t,
					style: {
						color: t === e.value.toString() ? e.ticks[t].color : "#878A8C"
					}
				}, e.ticks[t].text))))))),
				be = e => a.a.createElement(Q, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, a.a.createElement(z, null, a.a.createElement(R.a, null, a.a.createElement(Z, null, e.label)), a.a.createElement(V, null, e.subtext)), a.a.createElement(K, null, a.a.createElement(G, null, a.a.createElement(P.l, {
					onClick: e.onClick
				}, e.actionText)))),
				he = e => a.a.createElement(Q, {
					className: e.className,
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, a.a.createElement(z, null, a.a.createElement(J, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, e.label, a.a.createElement(Y, null)), a.a.createElement(V, null, e.subtext)), a.a.createElement(K, null, a.a.createElement(J, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, a.a.createElement(ee, null)))),
				ge = e => a.a.createElement(Q, {
					className: e.className,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, a.a.createElement(z, null, a.a.createElement($, {
					onClick: e.onClick
				}, e.label), a.a.createElement(V, null, e.subtext)), a.a.createElement(K, null, a.a.createElement($, {
					onClick: e.onClick
				}, a.a.createElement(ee, null)))),
				fe = Object(i.c)({
					isOpen: (e, t) => Object(A.b)(t.id)(e)
				}),
				xe = Object(o.b)(fe, (e, t) => ({
					openDropdown: () => {
						e(Object(l.h)({
							tooltipId: t.id
						}))
					}
				}))(e => a.a.createElement(Q, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, a.a.createElement(z, null, a.a.createElement(Z, null, e.label), a.a.createElement(V, null, e.subtext)), a.a.createElement(K, null, (e => a.a.createElement("div", {
					className: U.a.DropdownWrapper,
					onClick: e.openDropdown
				}, a.a.createElement("span", {
					className: U.a.Row,
					id: `SettingDropdown--${e.id}`
				}, e.displayTitle || e.selected), a.a.createElement(x.b, {
					className: U.a.DropdownTriangle
				}), a.a.createElement(H, {
					container: void 0,
					isOpen: e.isOpen,
					renderContentsHidden: !0,
					isOverlay: !1,
					tooltipId: `SettingDropdown--${e.id}`
				}, e.items.map((t, s) => a.a.createElement(h.b, {
					className: U.a.DropdownRow,
					displayText: e.displayItems ? e.displayItems[s] : t,
					isSelected: e.selected === t,
					onClick: () => e.onClick(t),
					key: "row--" + s,
					item: t
				}))), e.descriptions && a.a.createElement("div", {
					className: U.a.DescriptionsRow
				}, e.descriptions[e.items.indexOf(e.selected)] || e.displayItems && e.descriptions[e.displayItems.indexOf(e.selected)])))(e)))),
				Ee = ({
					disabled: e,
					last: t,
					onClick: s,
					onChange: o,
					...r
				}) => {
					const i = Object(n.useCallback)(e => o(e.target.value), [o]),
						{
							items: d
						} = r;
					return a.a.createElement(Q, {
						disabled: e
					}, a.a.createElement(z, null, a.a.createElement("label", {
						htmlFor: r.id
					}, a.a.createElement(Z, {
						className: r.labelClassname
					}, r.label)), a.a.createElement(V, null, r.subtext)), a.a.createElement("div", {
						className: U.a.Wrapper__LineBreak
					}), a.a.createElement(Q, {
						last: t,
						indent: !0,
						disabled: e
					}, a.a.createElement(S, {
						id: r.id,
						className: "redditStyle",
						disabled: e || r.inputDisabled,
						onChange: i,
						value: r.selected
					}, d.map(({
						value: e,
						displayName: t
					}) => a.a.createElement("option", {
						key: e,
						value: e
					}, t)))))
				},
				ve = e => a.a.createElement(Q, {
					className: e.className,
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, a.a.createElement(z, null, a.a.createElement(Z, null, e.label), a.a.createElement(V, null, e.subtext)), a.a.createElement(K, null, e.children)),
				_e = e => a.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, e.isCreateCommunity && a.a.createElement("span", {
					className: U.a.tag
				}, "r/"), a.a.createElement(g.a, {
					className: e.isCreateCommunity ? U.a.input : void 0,
					disabled: !1,
					onChange: e.onChange,
					placeholder: e.placeholder,
					maxLength: e.maxChars,
					type: "text",
					value: e.value,
					onBlur: e.onBlur
				}), !e.hideCountdown && a.a.createElement(m.a, {
					maxChars: e.maxChars,
					text: e.value
				})),
				Ce = e => a.a.createElement(te, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, a.a.createElement(p.i, {
					disabled: !1,
					onChange: e.onChange,
					onFocus: e.onFocus,
					placeholder: e.placeholder,
					maxLength: e.maxChars,
					rows: e.rows || 4,
					style: {
						marginBottom: e.isCreateCommunity ? "4px" : 0,
						resize: e.isCreateCommunity ? "vertical" : "both"
					},
					value: e.value,
					onBlur: e.onBlur
				}), a.a.createElement("div", {
					className: U.a.MultiLineInputSettingsBottomRow
				}, !e.hideCountdown && a.a.createElement(m.a, {
					maxChars: e.maxChars,
					text: e.value || ""
				}), e.warning && e.warning, !!e.actionLink && a.a.createElement("div", {
					className: U.a.ActionLinkContainer
				}, e.actionLink)))
		},
		"./src/reddit/components/Streaming/ModSettings/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_16pMBJPhtfeyyncMfo7aDr",
				topBar: "_1DEjdLJpmb7fufFzhwqQm0",
				contentContainer: "ZV-o_W-prpE7EI4zyZ1hr",
				formBody: "_3xfSWCFu_alfjEX12_hBAB"
			}
		},
		"./src/reddit/components/Streaming/ModSettings/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/actions/streaming/modSettings.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				m = s("./src/reddit/components/ApprovedSubmitterList/AddApprovedSubmitterModal.tsx"),
				u = s("./src/reddit/components/BlockNavigation/index.tsx"),
				p = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				b = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				h = s("./src/reddit/components/Settings/shared/Widgets.tsx"),
				g = s("./src/reddit/contexts/ApiContext.tsx"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/controls/FormFields/index.tsx"),
				E = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				v = s("./src/reddit/models/Toast/index.ts"),
				_ = s("./src/reddit/selectors/activeModalId.ts"),
				C = s("./src/reddit/selectors/platform.ts"),
				k = s("./src/reddit/selectors/streamingModSettings.ts"),
				y = s("./src/reddit/components/Streaming/ModSettings/index.m.less"),
				S = s.n(y);
			const O = "streaming-settings-discard-confirmation",
				j = e => Object(c.e)(e, v.b.Error),
				w = Object(i.c)({
					allowNavigationCallback: C.a,
					modSettings: k.e,
					isAddUserModalOpen: e => "ModerationPage--Streaming--AddUser" === Object(_.a)(e),
					isLivestreamingCurrentlyOn: k.d,
					isDiscardModalOpen: Object(_.b)(O),
					isModSettingsSaving: e => Object(k.a)(e)
				}),
				I = Object(r.b)(w, (e, t) => ({
					closeAllModals: () => e(Object(d.f)()),
					onSave: (t, s) => e(Object(l.f)(t, s)),
					onUserAdd: (t, s, n) => e(Object(l.d)(t, s, n)),
					onUserRemove: (t, s, n) => e(Object(l.e)(t, s, n)),
					showToast: t => e(Object(c.f)({
						...t,
						duration: c.a
					})),
					toggleAddUserModal: () => e(Object(d.i)("ModerationPage--Streaming--AddUser")),
					toggleDiscardChangesModal: () => e(Object(d.i)(O))
				})),
				N = e => parseInt(e, 10),
				T = {
					sunday: [{
						startTime: "00:00:00.000000",
						endTime: "23:59:59.000000"
					}],
					monday: [{
						startTime: "00:00:00.000000",
						endTime: "23:59:59.000000"
					}],
					tuesday: [{
						startTime: "00:00:00.000000",
						endTime: "23:59:59.000000"
					}],
					wednesday: [{
						startTime: "00:00:00.000000",
						endTime: "23:59:59.000000"
					}],
					thursday: [{
						startTime: "00:00:00.000000",
						endTime: "23:59:59.000000"
					}],
					friday: [{
						startTime: "00:00:00.000000",
						endTime: "23:59:59.000000"
					}],
					saturday: [{
						startTime: "00:00:00.000000",
						endTime: "23:59:59.000000"
					}]
				},
				M = {
					sunday: [],
					monday: [],
					tuesday: [],
					wednesday: [],
					thursday: [],
					friday: [],
					saturday: []
				};
			class P extends o.a.Component {
				constructor(e) {
					super(e), this.onChange = e => {
						const t = {
							...this.state.changedModSettings,
							...e
						};
						let s = !1;
						Object.keys(t).forEach(e => {
							t[e] !== this.props.modSettings[e] && (s = !0)
						}), this.setState({
							changedModSettings: t,
							hasUnsavedChanges: s
						})
					}, this.onSaveClick = async () => {
						this.props.onSave(this.state.changedModSettings, this.props.subredditId), this.setState({
							hasUnsavedChanges: !1
						})
					}, this.onUserAdd = async (e, t) => {
						this.isDuplicateUser(t) ? await this.props.showToast(j(n.fbt._("'{username}' has already been added", [n.fbt._param("username", t)], {
							hk: "25Zkkf"
						}))) : this.props.onUserAdd(this.props.subredditId, t, this.props.modSettings)
					}, this.isDuplicateUser = e => !!this.props.modSettings.whitelistedUsers.find(t => t.name === e), this.onDiscardUnsavedChangesConfirmed = () => {
						this.performPendingNavigationIfNeeded()
					}, this.onCloseModal = () => {
						this.props.closeAllModals(), this.resetPendingNavigation()
					}, this.resetPendingNavigation = () => {
						this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}, this.performPendingNavigationIfNeeded = () => {
						this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onUserRemove = async e => {
						this.props.onUserRemove(this.props.subredditId, e, this.props.modSettings)
					}, this.onUserAddButtonClick = () => {
						this.props.toggleAddUserModal()
					}, this.getUpdatedSchedule = e => e ? M : T, this.renderAddUserModal = () => o.a.createElement(m.a, {
						ignoreDefaultFocus: !0,
						onAddSubmitter: this.onUserAdd,
						sendEventWithName: this.noopEventSend,
						subredditId: this.props.subredditId,
						toggleModal: this.props.toggleAddUserModal,
						username: "",
						withOverlay: !0
					}), this.noopEventSend = () => () => {}, this.state = {
						changedModSettings: {},
						livestreamingToggleStateOn: this.props.isLivestreamingCurrentlyOn,
						hasUnsavedChanges: !1
					}
				}
				render() {
					const e = {
							...this.props.modSettings,
							...this.state.changedModSettings
						},
						{
							maxLiveStreams: t,
							minKarma: s,
							minAccountAgeDays: a,
							durationLimitSeconds: r,
							broadcasterPrompt: i,
							isDiscoveryUnitShown: d,
							inSubMinKarma: l
						} = e;
					return o.a.createElement("div", {
						className: S.a.container
					}, o.a.createElement(b.c, {
						className: S.a.topBar
					}, o.a.createElement(f.i, {
						onClick: this.onSaveClick,
						disabled: this.props.isModSettingsSaving
					}, this.props.isModSettingsSaving ? o.a.createElement(E.a, {
						className: S.a.loadingIcon,
						sizePx: 14,
						center: !0
					}) : n.fbt._("Save changes", null, {
						hk: "1IXBxj"
					}))), o.a.createElement(b.a, {
						className: S.a.contentContainer
					}, o.a.createElement(b.b, null, n.fbt._("Broadcasting", null, {
						hk: "3WAsEz"
					})), o.a.createElement("div", {
						className: S.a.formBody
					}, o.a.createElement(h.o, {
						on: this.state.livestreamingToggleStateOn,
						label: n.fbt._("Allow RPAN Broadcasts", null, {
							hk: "2Jt8fz"
						}),
						subtext: n.fbt._("Allow live broadcasts to the Reddit Public Access Network (RPAN) in this community.", null, {
							hk: "2wjtPG"
						}),
						onClick: () => {
							const e = !this.state.livestreamingToggleStateOn;
							this.onChange({
								weeklySchedule: this.getUpdatedSchedule(this.state.livestreamingToggleStateOn)
							}), this.setState({
								livestreamingToggleStateOn: e,
								hasUnsavedChanges: e !== this.props.isLivestreamingCurrentlyOn
							})
						}
					}), o.a.createElement(h.o, {
						on: d,
						label: n.fbt._("Display RPAN Discovery Unit", null, {
							hk: "3mInib"
						}),
						subtext: n.fbt._("Allow discovery unit for Reddit Public Access Network (RPAN) to be displayed in this community.", null, {
							hk: "3MsZuO"
						}),
						onClick: () => {
							this.onChange({
								isDiscoveryUnitShown: !d
							})
						}
					}), o.a.createElement(h.k, {
						label: n.fbt._("Maximum live broadcasts", null, {
							hk: "bjAcp"
						}),
						direction: "row",
						subtext: n.fbt._("Set the number of broadcasts that can be live at the same time.", null, {
							hk: "fmNzG"
						})
					}, o.a.createElement(x.b, {
						onChange: e => this.onChange({
							maxLiveStreams: N(e.currentTarget.value)
						}),
						type: "number",
						min: 0,
						max: 1e3,
						value: t
					})), o.a.createElement(h.k, {
						label: n.fbt._("Required karma", null, {
							hk: "1UzH6K"
						}),
						direction: "row",
						subtext: n.fbt._("Set the amount of global Reddit comment karma someone needs to broadcast live.", null, {
							hk: "1Xa56V"
						})
					}, o.a.createElement(x.b, {
						onChange: e => this.onChange({
							minKarma: N(e.currentTarget.value)
						}),
						type: "number",
						min: 0,
						value: s
					})), o.a.createElement(h.k, {
						label: n.fbt._("Required community karma", null, {
							hk: "nSuPZ"
						}),
						direction: "row",
						subtext: n.fbt._("Set the amount of community comment karma someone needs to broadcast live.", null, {
							hk: "24qW8L"
						})
					}, o.a.createElement(x.b, {
						onChange: e => this.onChange({
							inSubMinKarma: N(e.currentTarget.value)
						}),
						type: "number",
						min: 0,
						value: l
					})), o.a.createElement(h.k, {
						label: n.fbt._("Required Account Age", null, {
							hk: "3OXG2v"
						}),
						direction: "row",
						subtext: n.fbt._("Set how old (in days) someone’s Reddit account needs to be to broadcast live.", null, {
							hk: "24iax6"
						})
					}, o.a.createElement(x.b, {
						onChange: e => this.onChange({
							minAccountAgeDays: N(e.currentTarget.value)
						}),
						min: 0,
						type: "number",
						value: a
					})), o.a.createElement(h.k, {
						label: n.fbt._("Time Limit", null, {
							hk: "2x8YNI"
						}),
						direction: "row",
						subtext: n.fbt._("Broadcasts will end after hitting this limit (in minutes), unless viewers award them more time.", null, {
							hk: "4wwLJ4"
						})
					}, o.a.createElement(x.b, {
						onChange: e => this.onChange({
							durationLimitSeconds: 60 * N(e.currentTarget.value)
						}),
						type: "number",
						min: 0,
						max: 1440,
						value: Math.round(r || 0) / 60,
						disabled: !0
					})), o.a.createElement(h.g, {
						label: n.fbt._("RPAN Description", null, {
							hk: "1WiS6G"
						}),
						direction: "row",
						subtext: n.fbt._("Write a quick description of your community to help broadcasters know what you're about", null, {
							hk: "1fcoqh"
						}),
						onChange: e => this.onChange({
							broadcasterPrompt: e.currentTarget.value
						}),
						maxChars: 250,
						rows: 2,
						value: i || ""
					}))), this.props.isAddUserModalOpen && this.renderAddUserModal(), o.a.createElement(u.a, {
						blockOnBeforeUnload: !0,
						dialogId: O,
						enabled: this.state.hasUnsavedChanges
					}), this.props.isDiscardModalOpen && o.a.createElement(p.a, {
						actionText: n.fbt._("Discard", null, {
							hk: "1SiwLl"
						}),
						headerText: n.fbt._("Discard changes before leaving?", null, {
							hk: "354NTe"
						}),
						modalText: n.fbt._("You have made some changes to broadcasting settings, do you wish to discard the changes?", null, {
							hk: "20tlQp"
						}),
						onConfirm: this.onDiscardUnsavedChangesConfirmed,
						toggleModal: this.onCloseModal,
						withOverlay: !0
					}))
				}
			}
			t.a = Object(g.b)(I(P))
		},
		"./src/reddit/components/StructuredStyles/Breadcrumbs/index.m.less": function(e, t, s) {
			e.exports = {
				StyledChevron: "_2iNDx2lEuGuIyvMjz5ujOL",
				styledChevron: "_2iNDx2lEuGuIyvMjz5ujOL",
				BreadcrumbElement: "_32_k0a9y4N9cAnw6gApo5X",
				breadcrumbElement: "_32_k0a9y4N9cAnw6gApo5X",
				BreadcrumbContainer: "_1PgkMUbe7dhkAqRt4-VPGe",
				breadcrumbContainer: "_1PgkMUbe7dhkAqRt4-VPGe"
			}
		},
		"./src/reddit/components/StructuredStyles/Breadcrumbs/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/helpers/trackers/blade.ts"),
				d = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				l = s("./src/reddit/components/StructuredStyles/Breadcrumbs/index.m.less"),
				c = s.n(l);
			const m = o.a.wrapped(d.a, "StyledChevron", c.a),
				u = o.a.div("BreadcrumbElement", c.a),
				p = o.a.div("BreadcrumbContainer", c.a);
			t.b = Object(r.c)(e => a.a.createElement(p, null, e.breadcrumbs.map(t => a.a.createElement(u, {
				key: t.title,
				onClick: () => {
					e.sendEvent(Object(i.a)()), e.onNavigate(t)
				}
			}, a.a.createElement(m, null), t.title))))
		},
		"./src/reddit/components/StructuredStyles/ImageUpload/index.m.less": function(e, t, s) {
			e.exports = {
				ImageUploadIcon: "e9OxAKtFra_8aEeb27dTl",
				imageUploadIcon: "e9OxAKtFra_8aEeb27dTl",
				ImageIconRow: "_14ar_PmlmkOhLrVDBwohzK",
				imageIconRow: "_14ar_PmlmkOhLrVDBwohzK",
				ImageUploadText: "_3-gXMEj353M5u8pnC-tDG8",
				imageUploadText: "_3-gXMEj353M5u8pnC-tDG8",
				FileDrop: "_3n4Aj_eDE25JhXbxz3XpKf",
				fileDrop: "_3n4Aj_eDE25JhXbxz3XpKf",
				ContainerUploading: "rOyNUbZnjJvWxtyInd1T8",
				containerUploading: "rOyNUbZnjJvWxtyInd1T8",
				Label: "_2ZFG2IQMaso9iA14qjicA_",
				label: "_2ZFG2IQMaso9iA14qjicA_",
				isOver: "_1B5UKMPaEBX3HOKKEBfp7o",
				ImageInput: "_362HLUlCiz7UbtVPniNjjW",
				imageInput: "_362HLUlCiz7UbtVPniNjjW"
			}
		},
		"./src/reddit/components/StructuredStyles/ImageUpload/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return E
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/controls/FileDrop/index.tsx"),
				d = s("./src/reddit/controls/ImageInput/index.tsx"),
				l = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = s("./src/reddit/icons/svgs/ImageUpload/index.tsx"),
				m = s("./src/reddit/components/StructuredStyles/ImageUpload/index.m.less"),
				u = s.n(m);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = r.a.wrapped(c.a, "ImageUploadIcon", u.a), h = r.a.div("ImageIconRow", u.a), g = r.a.div("ImageUploadText", u.a), f = r.a.wrapped(i.a, "FileDrop", u.a), x = r.a.div("ContainerUploading", u.a), E = e => a.a.createElement(x, {
				className: e.className
			}, a.a.createElement(h, null, a.a.createElement(l.a, {
				sizePx: 40,
				center: !0
			})), a.a.createElement(g, null, p._("Uploading...", null, {
				hk: "2ICpZ2"
			}))), v = r.a.label("Label", u.a);
			t.b = e => a.a.createElement(f, {
				className: e.className,
				onDrop: e.onChange,
				render: t => a.a.createElement(v, {
					className: Object(o.a)({
						[u.a.isOver]: t
					}, e.labelClassName)
				}, a.a.createElement(h, null, e.icon || a.a.createElement(b, null)), a.a.createElement(g, null, e.label), a.a.createElement(d.a, {
					className: u.a.ImageInput,
					name: e.name,
					value: e.value,
					onChange: e.onChange,
					multiple: e.multiple,
					tabIndex: e.tabIndex
				}))
			})
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, s) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return r
			})), s.d(t, "p", (function() {
				return i
			})), s.d(t, "n", (function() {
				return d
			})), s.d(t, "o", (function() {
				return l
			})), s.d(t, "m", (function() {
				return c
			})), s.d(t, "l", (function() {
				return m
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "c", (function() {
				return E
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "j", (function() {
				return _
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				o = s.n(a);
			const r = n.a.section("FormPage", o.a),
				i = n.a.h1("HomePageTitle", o.a),
				d = n.a.button("HomePageBreadcrumb", o.a),
				l = n.a.div("HomePageGroup", o.a),
				c = n.a.h1("FormPageTitle", o.a),
				m = n.a.div("FormPageSection", o.a),
				u = n.a.div("FormGroup", o.a),
				p = n.a.h2("FormGroupTitle", o.a),
				b = n.a.div("FormElement", o.a),
				h = n.a.div("FormGroupDescription", o.a),
				g = n.a.div("FormItem", o.a),
				f = n.a.h3("FormElementTitle", o.a),
				x = n.a.div("FormElementDescription", o.a),
				E = n.a.div("FormElementError", o.a),
				v = n.a.div("FormElementSubGroup", o.a),
				_ = n.a.li("FormListItem", o.a)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less": function(e, t, s) {
			e.exports = {
				ModalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				modalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				Input: "_1BJV17HgWhhC-BxrpqGjM",
				input: "_1BJV17HgWhhC-BxrpqGjM",
				Checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				CheckboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				checkboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				iconStyles: "_349rJ1BueyeldYiZniwYOz",
				RadioOff: "_23-RdhX276B0bg5nrt0cpf",
				radioOff: "_23-RdhX276B0bg5nrt0cpf",
				RadioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				radioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				Textarea: "_2gchCc4pmLk-CHEErYmFaP",
				textarea: "_2gchCc4pmLk-CHEErYmFaP",
				StyledLabel: "_3X0DVhTjHSRuQBMvaWD4N",
				styledLabel: "_3X0DVhTjHSRuQBMvaWD4N",
				StyledFileInput: "_2kbxOlf5qlKAzRVdk0a0GN",
				styledFileInput: "_2kbxOlf5qlKAzRVdk0a0GN"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return m
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "f", (function() {
				return p
			})), s.d(t, "e", (function() {
				return b
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "i", (function() {
				return f
			})), s.d(t, "h", (function() {
				return x
			})), s.d(t, "g", (function() {
				return E
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/controls/Input/ModalInput.tsx"),
				o = s("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				r = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = s("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				d = s("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				l = s("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				c = s.n(l);
			const m = n.a.wrapped(a.a, "ModalInput", c.a),
				u = n.a.input("Input", c.a),
				p = n.a.wrapped(d.a, "RadioOn", c.a),
				b = n.a.wrapped(i.a, "RadioOff", c.a),
				h = n.a.wrapped(o.a, "Checkbox", c.a),
				g = n.a.wrapped(r.a, "CheckboxSelected", c.a),
				f = n.a.textarea("Textarea", c.a),
				x = n.a.label("StyledLabel", c.a),
				E = n.a.input("StyledFileInput", c.a)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/navs.m.less": function(e, t, s) {
			e.exports = {
				FormNavElement: "KLpkXNw-FZfqtRK9U_8HB",
				formNavElement: "KLpkXNw-FZfqtRK9U_8HB",
				disabled: "_2omjYUqCweNidaShU2H5EC",
				DragCard: "ygS6b189jD1GHwzotinJB",
				dragCard: "ygS6b189jD1GHwzotinJB",
				isOverAndCanDrop: "_3_GRCa3UIhqQ68fvB00PLZ",
				isDragging: "_2yg01oNjKP8Gcb4HPjf58k"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/navs.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/StructuredStyles/StyledComponents/navs.m.less"),
				i = s.n(r);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const l = ({
					disabled: e,
					...t
				}) => a.a.createElement("div", d({}, t, {
					className: Object(o.a)(i.a.FormNavElement, {
						[i.a.disabled]: e
					})
				}), t.children),
				c = ({
					canDrop: e,
					className: t,
					isDragging: s,
					isOver: n,
					disabled: r,
					...l
				}) => a.a.createElement("div", d({}, l, {
					className: Object(o.a)(i.a.DragCard, {
						[i.a.disabled]: r,
						[i.a.isDraffing]: s,
						[i.a.isOverAndCanDrop]: n && e
					}, t)
				}))
		},
		"./src/reddit/components/SubredditContent/EventPostContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/reddit/actions/eventPosts/index.ts"),
				c = s("./src/reddit/components/ClassicPost/index.tsx"),
				m = s("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				u = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				p = s("./src/reddit/components/Scroller/Simple.tsx"),
				b = s("./src/reddit/components/SubredditContent/index.tsx"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/constants/postLayout.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/helpers/overlay/index.ts"),
				E = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				v = s("./src/reddit/icons/fonts/index.tsx"),
				_ = s("./src/reddit/routes/postCreation/index.ts"),
				C = s("./src/reddit/selectors/eventPosts.ts"),
				k = s("./src/reddit/components/SubredditContent/index.m.less"),
				y = s.n(k);
			const S = Object(d.c)({
					eventPosts: C.f,
					isPending: C.d,
					hasData: C.b,
					endCursor: C.a
				}),
				O = Object(r.b)(S, (e, {
					subredditName: t
				}) => ({
					onClickPost: t => {
						e(Object(x.a)(t.permalink))
					},
					fetchMorePosts: () => {
						e(Object(l.eventPostsRequested)(t))
					}
				}));
			class j extends o.a.PureComponent {
				renderEmptyState() {
					const {
						subredditName: e
					} = this.props;
					return o.a.createElement(m.c, {
						className: y.a.emptyStateContainer,
						text: n.fbt._("No upcoming or live events in r/{subredditName}", [n.fbt._param("subredditName", e)], {
							hk: "3wRma7"
						}),
						childrenPosition: "bottom"
					}, o.a.createElement(v.a, {
						name: "scheduled",
						className: y.a.icon
					}), o.a.createElement(i.a, {
						className: y.a.schedulePostLink,
						to: Object(_.c)(e)
					}, n.fbt._("Create Event Post", null, {
						hk: "PXBmQ"
					})))
				}
				renderBody() {
					const {
						endCursor: e,
						eventPosts: t,
						fetchMorePosts: s,
						hasData: n,
						onClickPost: a
					} = this.props;
					return o.a.createElement("div", {
						className: y.a.contentContainer
					}, o.a.createElement("div", {
						className: y.a.standaloneContainer
					}, n ? o.a.createElement(p.b, {
						className: y.a.scroller,
						onLoadMore: s,
						loadMoreToken: e || void 0
					}, t.map((e, t) => ({
						id: e.id,
						estHeight: Object(E.c)(e, g.g.Classic),
						render: s => o.a.createElement(c.default, {
							key: `event-post-id-${e.id}`,
							postId: e.id,
							className: y.a.eventPostContainer,
							first: 0 === t,
							isOverlay: !1,
							onClickPost: () => a(e)
						})
					}))) : this.renderEmptyState()))
				}
				render() {
					const {
						isPending: e,
						hasData: t
					} = this.props;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(u.c, null, o.a.createElement(i.a, {
						to: Object(_.c)(this.props.subredditName)
					}, o.a.createElement(f.i, null, n.fbt._("Schedule an event post", null, {
						hk: "nk1bA"
					})))), o.a.createElement(u.a, null, o.a.createElement(u.b, {
						className: y.a.pageTitle
					}, n.fbt._("Upcoming and live events", null, {
						hk: "MAeQO"
					}), o.a.createElement("span", {
						className: y.a.betaIndicator
					}, n.fbt._("Beta", null, {
						hk: "z4XPh"
					}))), !t && e ? Object(b.a)() : this.renderBody(), t && e && Object(b.a)(1)))
				}
			}
			t.a = O(Object(h.c)(j))
		},
		"./src/reddit/components/SubredditContent/PredictionsContent/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-SubredditContent-PredictionsContent",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-SubredditContent-PredictionsContent").then(s.bind(null, "./src/reddit/components/SubredditContent/PredictionsContent/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/SubredditContent/PredictionsContent/index.tsx"
				}
			})
		},
		"./src/reddit/components/SubredditContent/ScheduledPostContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/reddit/actions/scheduledPosts/index.ts"),
				l = s("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				c = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				m = s("./node_modules/reselect/es/index.js"),
				u = s("./src/lib/classNames/index.ts"),
				p = s("./src/reddit/actions/modal.ts"),
				b = s("./src/lib/CSSVariableProvider/index.tsx"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/components/Paginator/index.m.less"),
				f = s.n(g);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js"), v = e => {
				const {
					isNextButton: t,
					isActive: s,
					...n
				} = e;
				return o.a.createElement(h.g, x({
					disabled: !s
				}, n))
			};
			class _ extends o.a.Component {
				constructor(e) {
					super(e), this.onHandlePrev = () => this.onHandlePageChange(!1), this.onHandleNext = () => this.onHandlePageChange(!0), this.state = {
						currentCursor: void 0
					}
				}
				getCurrentCursorIdx() {
					const {
						items: e
					} = this.props, {
						currentCursor: t
					} = this.state;
					return t ? e.findIndex(e => e.id === t) : -1
				}
				getRenderableItems() {
					const {
						items: e,
						itemsPerPage: t
					} = this.props, s = this.getCurrentCursorIdx() + 1;
					return e.slice(s, s + t)
				}
				hasPrevPage() {
					return !(this.getCurrentCursorIdx() <= 0)
				}
				hasNextPage() {
					const {
						items: e,
						itemsPerPage: t
					} = this.props;
					return !(this.getCurrentCursorIdx() + t > e.length - 2)
				}
				onHandlePageChange(e) {
					const {
						items: t,
						itemsPerPage: s
					} = this.props, n = this.getCurrentCursorIdx();
					if (e && !this.hasNextPage()) return;
					if (!e && !this.hasPrevPage()) return;
					const a = e ? Math.max(-1, Math.min(n + s, t.length - 2)) : Math.max(-1, n - s);
					this.setState({
						currentCursor: t[a] ? t[a].id : void 0
					})
				}
				renderControlRow() {
					const {
						usePortalForControlRow: e,
						controlRowPortal: t,
						pagerButton: s = v
					} = this.props, n = this.hasPrevPage(), a = this.hasNextPage();
					if (!n && !a) return null;
					const r = o.a.createElement("div", {
						className: f.a.controlRow
					}, o.a.createElement("span", {
						className: f.a.prevButtonContainer
					}, o.a.createElement(s, {
						className: f.a.prevButton,
						onClick: this.onHandlePrev,
						isNextButton: !1,
						isActive: n
					}, E._("Previous", null, {
						hk: "4hX0ue"
					}))), o.a.createElement("span", {
						className: f.a.nextButtonContainer
					}, o.a.createElement(s, {
						className: f.a.nextButton,
						onClick: this.onHandleNext,
						isNextButton: !0,
						isActive: a
					}, E._("Next", null, {
						hk: "2GFsYc"
					}))));
					return e && !t ? null : t ? Object(b.d)(r, t) : r
				}
				render() {
					const {
						className: e,
						lastItemClassName: t,
						itemComponent: s
					} = this.props, n = this.getRenderableItems();
					return o.a.createElement("div", {
						className: e
					}, n.map((e, a) => o.a.createElement(s, {
						className: t && a === n.length - 1 ? t : void 0,
						key: e.id,
						item: e
					})), this.renderControlRow())
				}
			}
			var C = _,
				k = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				y = s("./src/reddit/components/RecurringPostList/ChangePageButton/index.m.less"),
				S = s.n(y);
			var O = e => o.a.createElement("button", {
					className: Object(u.a)(S.a.button, e.className, {
						[S.a.prevButton]: !e.isNextButton,
						[S.a.disabled]: !e.isActive
					}),
					onClick: e.onClick,
					disabled: !e.isActive
				}, o.a.createElement(k.a, {
					className: S.a.arrowIcon
				})),
				j = s("./src/reddit/components/RecurringPostList/EditModal/async.tsx"),
				w = s("./src/reddit/components/RecurringPostList/RecurringPost/index.tsx"),
				I = s("./src/reddit/components/TrackingHelper/index.tsx"),
				N = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				T = s("./src/reddit/icons/fonts/index.tsx"),
				M = s("./src/reddit/routes/postCreation/index.ts"),
				P = s("./src/reddit/selectors/activeModalId.ts"),
				R = s("./src/reddit/selectors/scheduledPosts/index.ts"),
				F = s("./src/reddit/components/RecurringPostList/index.m.less"),
				A = s.n(F);
			const {
				fbt: D
			} = s("./node_modules/fbt/lib/FbtPublic.js"), L = 5, U = Object(m.c)({
				recurringPosts: (e, {
					subreddit: t
				}) => Object(R.l)(e, {
					subredditId: t.id
				}),
				editModalIsOpen: e => Object(P.a)(e) === w.a,
				editingRecurringPostId: R.d,
				editingRecurringPostSubredditId: R.e
			});
			class B extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.pageButtonPortalRef = o.a.createRef(), this.onEditModalSuccessfulSave = () => {
						this.props.editModalIsOpen && this.props.toggleModal()
					}, this.onClickLink = () => {
						this.props.sendEvent(Object(N.j)())
					}
				}
				renderEmptyState() {
					return o.a.createElement(l.c, {
						className: A.a.emptyContainer,
						text: D._("No recurring posts", null, {
							hk: "2G7szl"
						}),
						childrenPosition: "bottom"
					}, o.a.createElement(T.a, {
						name: "refresh",
						className: A.a.icon
					}), o.a.createElement(i.a, {
						className: A.a.schedulePostLink,
						onClick: this.onClickLink,
						to: Object(M.c)(this.props.subreddit.name)
					}, D._("Schedule recurring post", null, {
						hk: "1TrUPC"
					})))
				}
				render() {
					const {
						className: e,
						recurringPosts: t,
						editModalIsOpen: s,
						subreddit: n,
						editingRecurringPostSubredditId: a,
						editingRecurringPostId: r
					} = this.props;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: Object(u.a)(e, A.a.postList)
					}, o.a.createElement("div", {
						className: A.a.titleContainer
					}, D._("Recurring posts", null, {
						hk: "30aHKv"
					}), o.a.createElement("div", {
						ref: this.pageButtonPortalRef,
						className: A.a.pageButtonPortal
					})), t.length ? o.a.createElement(C, {
						className: A.a.recurringPostsContainer,
						lastItemClassName: A.a.lastRecurringPostItem,
						itemsPerPage: L,
						items: t,
						itemComponent: w.b,
						pagerButton: O,
						usePortalForControlRow: !0,
						controlRowPortal: this.pageButtonPortalRef.current
					}) : this.renderEmptyState()), s && !!r && !!a && n.id === a && o.a.createElement(j.a, {
						scheduledPostId: r,
						subredditId: a,
						onSuccessfulSave: this.onEditModalSuccessfulSave,
						withOverlay: !0
					}))
				}
			}
			var H = Object(r.b)(U, (e, t) => ({
					toggleModal: () => e(Object(p.i)(w.a))
				}))(Object(I.c)(B)),
				W = s("./src/reddit/components/ScheduledPost/index.tsx"),
				Z = s("./src/reddit/components/Scroller/Simple.tsx"),
				V = s("./src/reddit/components/SubredditContent/index.tsx"),
				q = s("./src/reddit/components/SubredditContent/index.m.less"),
				G = s.n(q),
				z = s("./src/reddit/models/ScheduledPost/index.ts");
			const K = Object(m.c)({
					isLoading: R.i,
					hasData: (e, {
						subreddit: t
					}) => Object(R.h)(e, {
						subredditId: t.id
					}),
					standalonePosts: (e, {
						subreddit: t
					}) => Object(R.q)(e, {
						subredditId: t.id
					}),
					loadMoreToken: (e, {
						subreddit: t
					}) => Object(R.c)(e, {
						subredditId: t.id,
						type: z.f.standalonePosts
					})
				}),
				Q = Object(r.b)(K, (e, {
					subreddit: t
				}) => ({
					onLoadMoreStandaloneScheduledPosts: () => e(Object(d.a)(t.id))
				}));
			class J extends o.a.PureComponent {
				render() {
					const {
						hasData: e,
						standalonePosts: t,
						onLoadMore: s,
						loadMoreToken: n,
						renderEmptyState: a,
						subreddit: r
					} = this.props;
					return o.a.createElement("div", {
						className: G.a.contentContainer
					}, o.a.createElement("div", {
						className: G.a.standaloneContainer
					}, e && t.length ? o.a.createElement(Z.b, {
						className: G.a.scroller,
						onLoadMore: s,
						loadMoreToken: n || void 0
					}, t.map(e => ({
						id: e.id,
						estHeight: 112,
						render: t => o.a.createElement(W.a, {
							key: `scheduled-post-id-${e.id}`,
							scheduledPostId: e.id,
							subredditId: e.subreddit.id
						})
					}))) : a()), o.a.createElement(H, {
						className: G.a.sidebar,
						subreddit: r
					}))
				}
			}
			class X extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.renderStandaloneEmptyState = () => {
						const {
							subreddit: e
						} = this.props;
						return o.a.createElement(l.c, {
							className: G.a.emptyStateContainer,
							text: n.fbt._("No scheduled posts in r/{subredditName}", [n.fbt._param("subredditName", e.name)], {
								hk: "mUwQ4"
							}),
							childrenPosition: "bottom"
						}, o.a.createElement(T.a, {
							name: "history",
							className: G.a.icon
						}), o.a.createElement(i.a, {
							className: G.a.schedulePostLink,
							to: Object(M.c)(e.name)
						}, n.fbt._("Schedule post", null, {
							hk: "xI07X"
						})))
					}
				}
				renderBody() {
					const {
						hasData: e,
						loadMoreToken: t,
						onLoadMoreStandaloneScheduledPosts: s,
						standalonePosts: n,
						subreddit: a
					} = this.props;
					return o.a.createElement(J, {
						renderEmptyState: this.renderStandaloneEmptyState,
						hasData: e,
						standalonePosts: n,
						onLoadMore: s,
						subreddit: a,
						loadMoreToken: t
					})
				}
				render() {
					const {
						isLoading: e,
						hasData: t,
						subreddit: s
					} = this.props;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(c.c, null, o.a.createElement(i.a, {
						to: Object(M.c)(s.name)
					}, o.a.createElement(h.i, null, n.fbt._("Schedule Post", null, {
						hk: "2Ygkzg"
					})))), o.a.createElement(c.a, null, o.a.createElement(c.b, {
						className: G.a.pageTitle
					}, n.fbt._("Scheduled posts", null, {
						hk: "28Qjmj"
					})), !t && e ? Object(V.a)() : this.renderBody(), t && e && Object(V.a)(1)))
				}
			}
			t.a = Q(X)
		},
		"./src/reddit/components/SubredditContent/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "_1N366WahaKnCqUlSezl6CQ",
				titleFontH2: "_2ySCAslCokkxUasLc4m7l0",
				titleFontH3: "_3Na_u-vwpkuPZfuuvUROk-",
				titleFontH4: "_30jImFPUovcaQMWasU-Ohq",
				titleFontH5: "_1fkIEAH9a9eCt2B8XAaUbq",
				titleFontH6: "bHSjFLbSCNEywMorkTrqn",
				metadataFont: "_2Qe8DvvY_RxPEkj-mRpX65",
				flairFont: "_1TXuHKPD3YeZiCgMqyoBBe",
				labelsFont: "_1MiMOmZyBl0g5x8oLzodW8",
				actionFont: "_3USAKL0kbrc0ZhCvZS-J4j",
				smallButtonFont: "_2JaNUow_hy9X8yw0QFNOSg",
				largeButtonFont: "_2QdyaDMXRLLL3gChJ0NOE9",
				strongTextFont: "_3qauH8UCZvDtHIr65uebN5",
				tabFont: "_1bq9fxhlMVaxA2GQdVomf4",
				buttonFontXS: "_7W4YggPAccJm6b7j_5tM_",
				buttonFontXs: "_7W4YggPAccJm6b7j_5tM_",
				buttonFontS: "_2ZBn3QtRUE4GU3UTdoCOzY",
				buttonFontM: "_1FF_0_g8KF3VAe3NMA-Lu6",
				buttonFontL: "_12R7hgqLzyY_mHo7tL6VIy",
				buttonFontXL: "_1c2eC_5e586qF7hV3NBVj_",
				buttonFontXl: "_1c2eC_5e586qF7hV3NBVj_",
				bodyFontH1: "_2qU2oh77HnIxSqTey1ZezW",
				bodyFontH2: "_2XZkZ1zrfSvpi64O-KP4IB",
				bodyFontH3: "_1icF_z4wcZT687-ao6Mzr7",
				bodyFontH4: "ZRi07Zo9aba1n7XQY_Xio",
				bodyFontH5: "_1dhvcwu2KcypL8_En9Aa7I",
				bodyFontH6: "_1FGIk1pK7xZjRbWXhruioE",
				bodyFont: "_3xTpswgMylBeM6Y-XFNTUD",
				bodyFontSmall: "_3U8U5anYwaLfjJvSrrhIKo",
				bodyFontMono: "_1VL2XaMyhrq5PiMxCa8tkv",
				icon: "_1wICBaO2ARQK5N8CBXP8kI",
				schedulePostLink: "_3hO2emEyTZ-txWczRsI6lb",
				betaIndicator: "q9zqS5nIMgIr22a55zflg",
				pageTitle: "_2HS4U5X7Rt3fT__Kpgmp9M",
				contentContainer: "_2i38uCMOvjLO0N4T-QGmV1",
				scroller: "_2toQcR3aw1_hj1A49e4wi7",
				sidebar: "_3Pz5gIKK5q2FYttguHTNa3",
				emptyStateContainer: "_3uHuaRL_-Tec711luXRhl8",
				standaloneContainer: "Q7W5RJknO1UJ-qscCW0k6",
				eventPostContainer: "_1WvFOm4w7Qt8CpM_XKK9y8"
			}
		},
		"./src/reddit/components/SubredditContent/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/components/ClassicPost/Placeholder.tsx");

			function r(e = 3) {
				const t = [];
				for (let s = 0; s < e; s++) t.push(a.a.createElement(o.b, {
					isLoading: !0
				}));
				return a.a.createElement(a.a.Fragment, null, t)
			}
		},
		"./src/reddit/components/SubredditModerationSearch/index.m.less": function(e, t, s) {
			e.exports = {
				SearchIcon: "_2LL7WLn2-4Pv8zCUsmDPv9",
				searchIcon: "_2LL7WLn2-4Pv8zCUsmDPv9",
				NoResultsContainer: "_38zxhEjlOjKTVFYaSwtDTL",
				noResultsContainer: "_38zxhEjlOjKTVFYaSwtDTL",
				Container: "_3RNapyf_4ZQOEfoJhVRMEO",
				container: "_3RNapyf_4ZQOEfoJhVRMEO",
				SearchStatusBar: "_3yWFGY3HrViWVFFUCsTUjv",
				searchStatusBar: "_3yWFGY3HrViWVFFUCsTUjv",
				SearchStatus: "uTK2QKUebu8hg0gYZWTI7",
				searchStatus: "uTK2QKUebu8hg0gYZWTI7",
				Bold: "_2u65S50DJfsU-z8bR0G2DQ",
				bold: "_2u65S50DJfsU-z8bR0G2DQ"
			}
		},
		"./src/reddit/components/SubredditModerationSearch/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return _
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/helpers/normalizeUsername/index.tsx"),
				c = s("./src/reddit/layout/row/Inline/index.tsx"),
				m = s("./src/reddit/layout/row/RightAlign/index.tsx"),
				u = s("./src/reddit/icons/svgs/Search/index.tsx"),
				p = s("./src/reddit/components/SubredditModerationSearch/index.m.less"),
				b = s.n(p);
			const h = r.a.wrapped(u.a, "SearchIcon", b.a),
				g = r.a.wrapped(i.a, "NoResultsContainer", b.a),
				f = r.a.div("Container", b.a),
				x = r.a.wrapped(c.a, "SearchStatusBar", b.a),
				E = r.a.div("SearchStatus", b.a),
				v = r.a.span("Bold", b.a);

			function _(e) {
				if (e.searchPending) return null;
				const t = Object(l.a)(e.searchTerm);
				return e.noResultsFound ? o.a.createElement(g, null, o.a.createElement(h, null), o.a.createElement(i.b, null, n.fbt._("No results for {searchTerm}", [n.fbt._param("searchTerm", `u/${t}`)], {
					hk: "1nDAlG"
				})), o.a.createElement(d.o, {
					onClick: e.cancelSearch
				}, n.fbt._("See all", null, {
					hk: "3aLS8s"
				}))) : o.a.createElement(f, null, o.a.createElement(x, null, o.a.createElement(E, null, n.fbt._("1 search result for {=[searchTerm]}", [n.fbt._param("=[searchTerm]", o.a.createElement(v, {
					"data-redditstyle": !0
				}, n.fbt._("{searchTerm}", [n.fbt._param("searchTerm", `'${t}':`)], {
					hk: "1B9ZWG"
				})))], {
					hk: "iAcV5"
				})), o.a.createElement(m.a, null, o.a.createElement(d.o, {
					onClick: e.cancelSearch
				}, n.fbt._("See all", null, {
					hk: "3aLS8s"
				})))), e.children)
			}
		},
		"./src/reddit/components/SubredditModerationTopBar/index.m.less": function(e, t, s) {
			e.exports = {
				topBarRow: "_3H6HwkSZ2zUC1pwaIMv-EY",
				searchIcon: "_1lo1uHsqx3-EkgYDL4xKEB",
				searchInput: "_1ox94KT4YX0mmZgLO51PG_",
				searchButton: "_3-3xbjG4pcuzlB7SzgBvzg"
			}
		},
		"./src/reddit/components/SubredditModerationTopBar/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return u
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/helpers/normalizeUsername/index.tsx"),
				d = s("./src/reddit/icons/svgs/Search/index.tsx"),
				l = s("./src/reddit/components/SubredditModerationTopBar/index.m.less"),
				c = s.n(l);
			const m = r.a.div("topBarRow", c.a);
			class u extends o.a.Component {
				constructor(e) {
					super(e), this.onSearchChange = e => {
						Object(i.a)(e.currentTarget.value).length < 21 && this.setState({
							searchInputText: e.currentTarget.value
						})
					}, this.onKeyPress = e => {
						"Enter" === e.key && this.onSearch()
					}, this.onSearch = () => {
						this.props.onSearch(this.state.searchInputText)
					}, this.state = {
						searchInputText: ""
					}
				}
				componentWillReceiveProps(e) {
					this.props.activeSearchQuery && null === e.activeSearchQuery && this.setState({
						searchInputText: ""
					})
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return o.a.createElement("div", {
						className: c.a.topBarRow
					}, o.a.createElement("input", {
						className: c.a.searchInput,
						onChange: this.onSearchChange,
						onKeyPress: this.onKeyPress,
						placeholder: n.fbt._("Search for a user", null, {
							hk: "1yTo6e"
						}),
						type: "text",
						value: t.searchInputText
					}), o.a.createElement("button", {
						className: c.a.searchButton,
						onClick: this.onSearch
					}, o.a.createElement(d.a, {
						className: c.a.searchIcon
					})), e.children)
				}
			}
		},
		"./src/reddit/components/SubredditModerationUserItem/index.m.less": function(e, t, s) {
			e.exports = {
				Row: "_2O5kmPXewMHlCcrRWrjEB_",
				row: "_2O5kmPXewMHlCcrRWrjEB_",
				Username: "_1sIhmckJjyRyuR_z7M5kbI",
				username: "_1sIhmckJjyRyuR_z7M5kbI",
				RightAlign: "_3f00u5KR-M4rdaonscLX8k",
				rightAlign: "_3f00u5KR-M4rdaonscLX8k",
				Description: "_3YjnH6nyw9xU3dQ5hTVmEg",
				description: "_3YjnH6nyw9xU3dQ5hTVmEg",
				AdditionalText: "_2FHMhpmaJ7uKirIBSL-nfq",
				additionalText: "_2FHMhpmaJ7uKirIBSL-nfq",
				ChevronDown: "_13LaWwDlCX3ERr0EUCo3Lx",
				chevronDown: "_13LaWwDlCX3ERr0EUCo3Lx",
				ChevronUp: "_2wUaFuEtiqP0eWtfI9dDoI",
				chevronUp: "_2wUaFuEtiqP0eWtfI9dDoI",
				ExpandoContainer: "_2AQcG05ynImXmYdd8D8PMU",
				expandoContainer: "_2AQcG05ynImXmYdd8D8PMU",
				Bullet: "_1VQtDRh-JtZQghS8jetaHR",
				bullet: "_1VQtDRh-JtZQghS8jetaHR",
				PlaceholderItem: "_3KdpSC_L0JbYqsU7OmeaGX",
				placeholderItem: "_3KdpSC_L0JbYqsU7OmeaGX",
				EmptyUserIcon: "iNRbW9Tpfe2qsnXftvupu",
				emptyUserIcon: "iNRbW9Tpfe2qsnXftvupu",
				EmptyDetails: "_16EL0HBUzdiC9vh2S9H5Ee",
				emptyDetails: "_16EL0HBUzdiC9vh2S9H5Ee",
				UsersLoadingContainer: "_1s6c6XYRhTyY6FWEkJHQg",
				usersLoadingContainer: "_1s6c6XYRhTyY6FWEkJHQg"
			}
		},
		"./src/reddit/components/SubredditModerationUserItem/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return R
			}));
			var n = s("./node_modules/lodash/times.js"),
				a = s.n(n),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/helpers/trackers/moderationPages.ts"),
				c = s("./src/reddit/components/UserNameAndIcon/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				p = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				b = s("./src/reddit/layout/row/Inline/index.tsx"),
				h = s("./src/reddit/layout/row/RightAlign/index.tsx"),
				g = s("./src/reddit/components/SubredditModerationUserItem/index.m.less"),
				f = s.n(g);
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js"), E = (e, t) => {
				const s = `UserInfoTooltip--${e}`;
				return t ? `${s}--${t}` : s
			}, v = i.a.wrapped(b.a, "Row", f.a), _ = i.a.div("Username", f.a), C = i.a.wrapped(h.a, "RightAlign", f.a), k = i.a.div("Description", f.a), y = i.a.div("AdditionalText", f.a), S = i.a.wrapped(u.a, "ChevronDown", f.a), O = i.a.wrapped(p.a, "ChevronUp", f.a), j = i.a.div("ExpandoContainer", f.a), w = i.a.span("Bullet", f.a), I = i.a.div("PlaceholderItem", f.a), N = i.a.wrapped(I, "EmptyUserIcon", f.a), T = i.a.wrapped(I, "EmptyDetails", f.a), M = i.a.div("UsersLoadingContainer", f.a), P = () => r.a.createElement(v, null, r.a.createElement(N, null), r.a.createElement(T, null), r.a.createElement(T, null)), R = e => r.a.createElement(M, {
				className: e.className
			}, a()(e.rows || 10, e => r.a.createElement(P, {
				key: e
			})));
			class F extends r.a.Component {
				constructor(e) {
					super(e), this.onToggleExpandedComponent = () => {
						this.props.pageName && !this.state.isExpanded && this.props.sendEvent(l.a("more_detail", this.props.pageName)), this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.sendHoverCardEvent = () => {
						this.props.pageName && this.props.sendEvent(l.c(this.props.pageName))
					}, this.state = {
						isExpanded: !1
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(v, null, r.a.createElement(_, null, r.a.createElement(c.a, {
						username: e.username,
						userIcon: e.userIcon,
						tooltipId: E(e.username, e.moderatorType),
						subredditId: e.subredditId,
						sendHoverCardEvent: this.sendHoverCardEvent
					})), r.a.createElement(k, null, e.timeAgo, e.description && r.a.createElement(r.a.Fragment, null, r.a.createElement(w, null, "•"), e.description)), r.a.createElement(C, null, e.additionalText && r.a.createElement(y, null, e.additionalText), e.primaryButton, e.secondaryButton, e.tertiaryButton, e.expandedComponent && r.a.createElement(m.o, {
						onClick: this.onToggleExpandedComponent
					}, x._("More Details", null, {
						hk: "KnMc6"
					}), t.isExpanded ? r.a.createElement(O, null) : r.a.createElement(S, null)))), t.isExpanded && r.a.createElement(j, null, e.expandedComponent))
				}
			}
			t.b = Object(d.c)(F)
		},
		"./src/reddit/components/SubredditRules/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "_1fQ3jmS7djNiAnk2kVsPko",
				titleFontH2: "_39dtESYDu10VI6hZlt8jT_",
				titleFontH3: "_2_Ya84laiZ_AK4zBLZeXmE",
				titleFontH4: "_2k9S2SK_mdrMw9dXzIJka3",
				titleFontH5: "_3hrj37O_iGAZk7ssKstspL",
				titleFontH6: "_2KYRCY7gyTJjBx_Vr5pjqd",
				metadataFont: "_2hHNLn3quM7R0Znfoal7Wi",
				flairFont: "KkD9-eQEXAm_GdJAbixZ5",
				labelsFont: "_1xgXWixwTrYRf6JjxPm7ft",
				actionFont: "_1HQtdMEzh4gag8do4e9j7Z",
				smallButtonFont: "zWcRyj2-0oiXHbpM-5L1A",
				largeButtonFont: "_2PIOcp6QTxVygtl2u9ji_a",
				strongTextFont: "_2adE8ldKa4w_dETRAs-vdP",
				tabFont: "UtQUA6_scmmMeiLaweTg2",
				buttonFontXS: "_10ruUMhuBmxZqA1yF_MlA9",
				buttonFontXs: "_10ruUMhuBmxZqA1yF_MlA9",
				buttonFontS: "_1TFRBw_YwgrsDelv1Pi-SM",
				buttonFontM: "_2H_oQnXKALaCioWB1K9l-O",
				buttonFontL: "_2gy3VLIz6UYY1qlR5-fcVm",
				buttonFontXL: "_1drcPUSEFqtlwYnTDdJsro",
				buttonFontXl: "_1drcPUSEFqtlwYnTDdJsro",
				bodyFontH1: "_3lbK38dxFajKo78JrAEtIe",
				bodyFontH2: "_1CH0HVqZd3qMaT2gzU5mYn",
				bodyFontH3: "xk7ESbG2cmLPdln3D1fVi",
				bodyFontH4: "_29_oVfDyKoOggix5Gj6kah",
				bodyFontH5: "_1RoE8VrwOjvkyDDc-a8RZ_",
				bodyFontH6: "_3jwZ9V_jg7YZ4T-0cmGzxY",
				bodyFont: "_2iji_FM7kTNPRlaRGrPpq8",
				bodyFontSmall: "oJpqQ5hwA0NwwwlDu-EZH",
				bodyFontMono: "_2nUMbdZlQ1fQpJ_LaDNrbn",
				duplicateName: "_31Visb7b2S-tj09Ls_2Acy",
				emptyDetails: "_8PDfWWfcYPlmlmOr2Notr",
				emptyIcon: "_2tEWDkQudqJGiBAQsXSYXE",
				emptyRightIcon: "aF9GyLBXjDrRFO_7BTOYU",
				expandDetails: "_19etb4qzR1xpaHDy7AVdRr",
				header: "_2Xb_1g-T9iGzHDDy3_XpMD",
				DragCard: "_1KNUx1QX0DDrtynCc-GRE_",
				dragCard: "_1KNUx1QX0DDrtynCc-GRE_",
				dragIcon: "RR4AdUs4L9geua2bjCoqQ",
				icon: "PbUpiwMGWTjzrcYfCTdc0",
				iconButton: "_138C3cC0PAtIwsXoIAfGvJ",
				iconWrapper: "Ep3vJhfng2q2-wfiIgstP",
				loadingContainer: "ve35wYJQyEHavtRQYDY7V",
				metadata: "_1xQ_DrqnJXDZq1ptXHxYIB",
				middleMeta: "_2OWUxJA0Dhi0onvygJk3_i",
				middleMetaBlock: "n1lY8o9sGnqcqSfVzm5Vs",
				modalCloseButton: "zKQ8lyAF3pYyDoSlTpTjA",
				modalDescriptionBlock: "_26a81Mk5bsppGjI9AXbmWS",
				modalDescriptionField: "_1brIoxFWlohWpvu34OwZQP",
				modalFooter: "R-9ebJbU9igzPDfUi4Txg",
				modalRadioButton: "_1KFGHoJGHbU05yh6-sQIr5",
				modalRadioText: "_360Lh4DKj256s8RdElARFo",
				modalReasonField: "_1hdSGf--gQDRwsU96bzao1",
				modalRemoveButton: "_2yAePObDkhgZql3P1FHRu1",
				modalReportMeta: "_21sqmEi4OnC4uXlcUGDT_T",
				modalReportTitle: "_1y0X9006mE_5nlHfol1nc2",
				modalRule: "_1AlCnggMuPLxxDUbWWhG2q",
				modalRuleField: "QP-_TXfrh6G1-IRJif4Cy",
				modalRuleTitle: "_2I1A_fyvhaC7TYrYwA047Y",
				modalSubmitButton: "hHFW3BkgX7tSn5Nev-ooY",
				placeholderRow: "hv6YY1IfCww5loDzbkuMS",
				row: "_1LfPdWXylWmVTmLinhd4xl",
				rulesHeader: "_3MOq7UPqtI4o9EnAyCWkEQ",
				rulesIcon: "_29Fl8s_IvZwHxUPNV2ARiW",
				rulesInfo: "KTZ0Ir6xknUXuN4WMI7RN",
				ruleMetaText: "iVYauV_t6_ChREoxhNGsU",
				ruleMetaTitle: "ffGjaCMPoTUkhkVp6rHw5",
				emptyWrapper: "_2-xwKK1EqJlzI2dO7SIrbF",
				ruleNumber: "_3DEhjnxmn1BzXcJ_ml7kSQ",
				ruleText: "_1ZwBW5sLL75ZAZvQreMjn-",
				PrimaryButton: "_3GOmWOjCh6hPWZg1j-zPkr",
				primaryButton: "_3GOmWOjCh6hPWZg1j-zPkr"
			}
		},
		"./src/reddit/components/SubredditRules/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/config.ts"),
				o = s("./node_modules/lodash/isEqual.js"),
				r = s.n(o),
				i = s("./node_modules/lodash/times.js"),
				d = s.n(i),
				l = s("./node_modules/react/index.js"),
				c = s.n(l),
				m = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/reselect/es/index.js"),
				p = s("./src/lib/lessComponent.tsx"),
				b = s("./src/reddit/actions/modal.ts"),
				h = s("./src/lib/makeActionCreator/index.ts"),
				g = s("./src/reddit/actions/subredditRules/constants.ts"),
				f = s("./src/reddit/actions/toaster.ts"),
				x = s("./src/reddit/endpoints/subreddit/rules.ts"),
				E = s("./src/reddit/models/Toast/index.ts"),
				v = s("./src/reddit/selectors/subreddit.ts");
			const _ = Object(h.a)(g.e),
				C = (e, t) => async (s, a, {
					apiContext: o
				}) => {
					const r = Object(v.S)(a(), {
							subredditId: e
						}).name,
						i = `success-block-${t.rule}`,
						d = `error-block-${t.rule}`,
						l = await Object(x.a)(o(), r, t);
					if (l.ok) {
						const t = l.body;
						s(_({
							rules: t,
							subredditId: e
						})), s(f.f({
							id: i,
							kind: E.b.SuccessCommunityGreen,
							text: n.fbt._("Rule added", null, {
								hk: "4D4jbP"
							})
						}))
					} else s(f.f({
						id: d,
						kind: E.b.Error,
						text: l.json.errors ? l.json.errors[0][1] : n.fbt._("An error has occured. Please try again later", null, {
							hk: "2C9b4N"
						})
					}))
				}, k = Object(h.a)(g.f), y = Object(h.a)(g.g), S = Object(h.a)(g.d), O = (e, t) => async (s, a, {
					apiContext: o
				}) => {
					const r = Object(v.S)(a(), {
							subredditId: e
						}).name,
						i = Object(v.O)(a(), {
							subredditId: e
						}),
						d = `success-block-${e}`,
						l = `error-block-${e}`,
						c = await Object(x.e)(o(), r, t);
					if (c.ok) {
						const t = c.body;
						s(S({
							rules: t,
							subredditId: e
						})), s(f.f({
							id: d,
							kind: E.b.SuccessCommunityGreen,
							text: n.fbt._("Rule order updated", null, {
								hk: "3bmmvl"
							}),
							buttonText: n.fbt._("Undo", null, {
								hk: "1RYWKC"
							}),
							buttonAction: O(e, i)
						}))
					} else s(f.f({
						id: l,
						kind: E.b.Error,
						text: "explanation" in c ? c.explanation : c.json && "errors" in c.json ? c.json.errors[0][1] : n.fbt._("An error has occured. Please try again later", null, {
							hk: "1XJ2UQ"
						})
					}))
				};
			var j = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				w = s("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				I = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				N = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				T = s("./src/reddit/components/TrackingHelper/index.tsx"),
				M = s("./src/reddit/controls/Button/index.tsx"),
				P = s("./src/reddit/controls/Sortable/index.tsx"),
				R = s("./src/reddit/selectors/telemetry.ts");
			const F = e => ({
					subreddit: R.subreddit(e),
					profile: R.profile(e),
					userSubreddit: R.userSubreddit(e)
				}),
				A = e => t => ({
					source: "rules",
					action: "click",
					noun: e,
					...F(t)
				}),
				D = (e, t) => s => ({
					source: "rules",
					action: "click",
					noun: e,
					actionInfo: R.actionInfo(s, {
						count: t
					}),
					...F(s)
				});
			var L = s("./src/reddit/icons/fonts/index.tsx"),
				U = s("./src/reddit/layout/row/Inline/index.tsx"),
				B = s("./src/reddit/models/ModeratingSubreddits/index.ts"),
				H = s("./src/reddit/models/Rule/index.ts"),
				W = s("./src/reddit/selectors/activeModalId.ts"),
				Z = s("./src/reddit/selectors/moderatorPermissions.ts"),
				V = s("./src/reddit/components/SubredditRules/index.m.less"),
				q = s.n(V),
				G = s("./src/reddit/components/StructuredStyles/StyledComponents/navs.tsx"),
				z = s("./src/reddit/icons/svgs/Grapple/index.tsx");
			const K = p.a.wrapped(G.a, "DragCard", q.a);
			var Q = e => c.a.createElement(K, {
					isDragging: e.isDragging,
					isOver: e.isOver,
					canDrop: e.canDrop
				}, c.a.createElement(U.a, {
					className: q.a.row
				}, c.a.createElement("span", {
					className: q.a.ruleNumber
				}, e.index + 1), c.a.createElement("span", {
					className: q.a.ruleText
				}, e.shortName), c.a.createElement("span", {
					className: q.a.iconWrapper
				}, c.a.createElement(z.a, {
					className: q.a.dragIcon,
					title: n.fbt._("Drag", null, {
						hk: "dBKmA"
					})
				})))),
				J = s("./src/higherOrderComponents/asModal/index.tsx"),
				X = s("./src/reddit/components/CharacterCountdown/index.tsx"),
				Y = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				$ = s("./src/reddit/controls/RadioInput/index.tsx"),
				ee = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				te = s("./src/reddit/controls/TextButton/index.tsx"),
				se = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const ne = {
					rule: "",
					kind: "all",
					reportReason: "",
					description: ""
				},
				ae = Object(m.b)(null, (e, t) => ({
					createRule: s => e(C(t.subredditId, s)),
					updateRule: (s, a) => e(((e, t, s) => async (a, o, {
						apiContext: r
					}) => {
						const i = Object(v.S)(o(), {
								subredditId: e
							}).name,
							d = `success-block-${t.rule}`,
							l = `error-block-${t.rule}`,
							c = await Object(x.f)(r(), i, t, s);
						if (c.ok) {
							const t = c.body;
							a(k({
								rules: t,
								subredditId: e,
								oldName: s
							})), a(f.f({
								id: d,
								kind: E.b.SuccessCommunityGreen,
								text: n.fbt._("Rule updated", null, {
									hk: "1ljetO"
								})
							}))
						} else a(f.f({
							id: l,
							kind: E.b.Error,
							text: c.json.errors ? c.json.errors[0][1] : n.fbt._("An error has occured. Please try again later", null, {
								hk: "2acjBM"
							})
						}))
					})(t.subredditId, s, a))
				}));
			class oe extends c.a.Component {
				constructor(e) {
					super(e), this.onRuleInputChange = e => {
						e.currentTarget.value.trim().length <= H.g && this.setState({
							rule: e.currentTarget.value
						})
					}, this.onReportReasonInputChange = e => {
						e.currentTarget.value.trim().length <= H.f && this.setState({
							reportReason: e.currentTarget.value
						})
					}, this.onDescriptionInputChange = e => {
						e.currentTarget.value.trim().length <= H.a && this.setState({
							description: e.currentTarget.value
						})
					}, this.onSave = () => {
						const {
							props: e,
							state: t
						} = this, s = {
							rule: t.rule.trim(),
							kind: t.kind,
							reason: t.reportReason.trim(),
							description: t.description.trim()
						};
						e.rule ? e.updateRule(s, e.rule.shortName) : e.createRule(s), e.toggleModal(), e.sendEvent()
					}, this.canSave = () => {
						const {
							props: e,
							state: t
						} = this, s = t.rule.trim(), n = t.reportReason.trim(), a = t.description.trim(), o = !e.ruleNames.includes(s) || e.ruleNames.includes(s) && e.rule && e.rule.shortName === s, r = !e.rule || (e.rule.shortName !== s || e.rule.violationReason !== t.reportReason || e.rule.kind !== t.kind || e.rule.description !== a);
						return o && r && s.length > 0 && s.length <= H.g && n.length <= H.f && a.length <= H.a && t.kind
					}, this.selectRuleKind = e => {
						this.setState({
							kind: e
						})
					}, this.isDuplicateRuleName = () => {
						const {
							props: e,
							state: t
						} = this, s = !e.rule || e.rule.shortName !== t.rule.trim(), n = e.ruleNames.includes(t.rule.trim());
						return 0 !== t.rule.trim().length && s && n
					}, this.state = e.rule ? {
						rule: e.rule.shortName,
						kind: e.rule.kind,
						reportReason: e.rule.violationReason || "",
						description: e.rule.description || ""
					} : ne
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return c.a.createElement(Y.d, null, c.a.createElement(Y.h, null, c.a.createElement(se.a, null, c.a.createElement(Y.p, null, e.rule ? n.fbt._("Edit rule", null, {
						hk: "2zflTO"
					}) : n.fbt._("Add rule", null, {
						hk: "1xqo5O"
					})), c.a.createElement(te.a, {
						className: q.a.modalCloseButton,
						onClick: e.toggleModal
					}, c.a.createElement(Y.b, null)))), c.a.createElement(Y.k, null, c.a.createElement(Y.g, null, c.a.createElement(Y.o, {
						className: q.a.modalRule
					}, n.fbt._("Rule", null, {
						hk: "1W7esG"
					})), c.a.createElement(Y.s, {
						className: q.a.modalRuleField,
						onChange: this.onRuleInputChange,
						placeholder: n.fbt._('Rule displayed (e.g. "No photos")', null, {
							hk: "GdEW"
						}),
						value: t.rule
					}), this.isDuplicateRuleName() && c.a.createElement("span", {
						className: q.a.duplicateName
					}, n.fbt._("You have another rule with this title. Please change.", null, {
						hk: "2EPSGv"
					})), c.a.createElement(X.a, {
						maxChars: H.g,
						text: t.rule.trim()
					})), c.a.createElement(Y.g, null, c.a.createElement(Y.o, {
						className: q.a.modalRuleTitle
					}, n.fbt._("Applies to", null, {
						hk: "Pzu3b"
					})), c.a.createElement($.a, {
						name: "RULE_KIND_PICKER",
						onChange: this.selectRuleKind,
						value: t.kind
					}, c.a.createElement(ee.a, {
						className: q.a.modalRadioButton,
						key: H.b.all,
						value: H.b.all,
						selected: t.kind === H.b.all,
						showButton: !0,
						tabIndex: t.kind === H.b.all ? 0 : -1
					}, c.a.createElement(Y.o, {
						className: q.a.modalRadioText
					}, n.fbt._("Posts & comments", null, {
						hk: "tHmQq"
					}))), c.a.createElement(ee.a, {
						className: q.a.modalRadioButton,
						key: H.b.post,
						value: H.b.post,
						selected: t.kind === H.b.post,
						showButton: !0,
						tabIndex: t.kind === H.b.post ? 0 : -1
					}, c.a.createElement(Y.o, {
						className: q.a.modalRadioText
					}, n.fbt._("Posts only", null, {
						hk: "16dDBr"
					}))), c.a.createElement(ee.a, {
						className: q.a.modalRadioButton,
						key: H.b.comment,
						value: H.b.comment,
						selected: t.kind === H.b.comment,
						showButton: !0,
						tabIndex: t.kind === H.b.comment ? 0 : -1
					}, c.a.createElement(Y.o, {
						className: q.a.modalRadioText
					}, n.fbt._("Comments only", null, {
						hk: "2V8qUA"
					}))))), c.a.createElement(Y.g, null, c.a.createElement(Y.o, {
						className: q.a.modalReportTitle
					}, n.fbt._("Report reason", null, {
						hk: "3ShjE9"
					})), c.a.createElement(Y.l, {
						className: q.a.modalReportMeta
					}, n.fbt._("Defaults to rule name if left blank", null, {
						hk: "2xObiU"
					})), c.a.createElement(Y.s, {
						className: q.a.modalReasonField,
						onChange: this.onReportReasonInputChange,
						placeholder: t.rule.trim().length > 0 && 0 === t.reportReason.trim().length ? t.rule : n.fbt._('Reason rule is broken (e.g. "This is a photo")', null, {
							hk: "2Op1SL"
						}),
						value: t.reportReason
					}), c.a.createElement(X.a, {
						maxChars: H.f,
						text: t.reportReason.trim()
					})), c.a.createElement("div", {
						className: q.a.modalDescriptionBlock
					}, c.a.createElement(Y.o, {
						className: q.a.modalRuleTitle
					}, n.fbt._("Full description", null, {
						hk: "4CTvQy"
					})), c.a.createElement(Y.s, {
						className: q.a.modalDescriptionField,
						onChange: this.onDescriptionInputChange,
						placeholder: n.fbt._("Enter the full description of the rule.", null, {
							hk: "3EyaJe"
						}),
						value: t.description
					}), c.a.createElement(X.a, {
						maxChars: H.a,
						text: t.description.trim()
					}))), c.a.createElement(Y.f, {
						className: q.a.modalFooter
					}, c.a.createElement(M.i, {
						className: q.a.modalSubmitButton,
						onClick: this.onSave,
						disabled: !this.canSave()
					}, e.rule ? n.fbt._("Save", null, {
						hk: "ufsfP"
					}) : n.fbt._("Add new rule", null, {
						hk: "2dy0gV"
					})), c.a.createElement(Y.a, {
						onClick: e.toggleModal
					}, n.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), e.rule && c.a.createElement(Y.r, {
						className: q.a.modalRemoveButton,
						onClick: e.onDelete
					}, n.fbt._("Delete", null, {
						hk: "4ysFr0"
					}))))
				}
			}
			var re = Object(J.a)(ae(oe)),
				ie = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				de = s("./src/reddit/components/RichTextJson/index.tsx"),
				le = s("./src/lib/constants/index.ts"),
				ce = s("./src/lib/humanizeUTCDate/index.tsx"),
				me = s("./src/lib/timeAgo/index.ts");
			var ue = e => {
					const t = (e => e - 8 * le.O / le.Nb)(e);
					return Object(me.c)(t) >= 1 ? Object(ce.a)(t) : Object(me.d)(t)
				},
				pe = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"),
				be = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				he = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				ge = s("./src/reddit/models/RichTextJson/index.ts");
			const fe = {};
			class xe extends c.a.Component {
				constructor(e) {
					super(e), this.toggleExpandDetails = () => {
						this.setState(e => ({
							isExpanded: !e.isExpanded
						}))
					}, this.state = {
						isExpanded: !1
					}
				}
				render() {
					const {
						hasConfigPerms: e,
						index: t,
						onEdit: s,
						subredditRule: a
					} = this.props, o = a.descriptionRichText ? JSON.parse(a.descriptionRichText).document : void 0;
					return c.a.createElement(c.a.Fragment, null, c.a.createElement(U.a, {
						className: q.a.row
					}, c.a.createElement("span", {
						className: q.a.ruleNumber
					}, t + 1), c.a.createElement("span", {
						className: q.a.ruleText
					}, a.shortName), c.a.createElement("span", {
						className: q.a.iconWrapper
					}, e && c.a.createElement("button", {
						className: q.a.iconButton,
						onClick: s
					}, c.a.createElement(he.a, {
						className: q.a.icon,
						title: n.fbt._("Edit", null, {
							hk: "1nftDt"
						})
					})), c.a.createElement("button", {
						className: q.a.iconButton,
						onClick: this.toggleExpandDetails
					}, this.state.isExpanded ? c.a.createElement(pe.a, {
						className: q.a.icon,
						title: n.fbt._("Collapse", null, {
							hk: "eGqwd"
						})
					}) : c.a.createElement(be.a, {
						className: q.a.icon,
						title: n.fbt._("Expand", null, {
							hk: "4dMVPg"
						})
					})))), this.state.isExpanded && c.a.createElement(U.a, {
						className: q.a.expandDetails
					}, c.a.createElement("span", {
						className: q.a.metadata
					}, c.a.createElement("span", {
						className: q.a.ruleMetaTitle
					}, n.fbt._("Report reason", null, {
						hk: "2RH1DJ"
					})), c.a.createElement("span", {
						className: q.a.ruleMetaText
					}, a.violationReason && 0 !== a.violationReason.length ? a.violationReason : a.shortName)), c.a.createElement("span", {
						className: q.a.middleMeta
					}, c.a.createElement("div", {
						className: q.a.middleMetaBlock
					}, c.a.createElement("div", {
						className: q.a.ruleMetaTitle
					}, n.fbt._("Applies to", null, {
						hk: "19eYpy"
					})), c.a.createElement("div", {
						className: q.a.ruleMetaText
					}, a.kind === H.b.all ? n.fbt._("Posts & comments", null, {
						hk: "34PjHx"
					}) : a.kind === H.b.post ? n.fbt._("Posts only", null, {
						hk: "3MllWy"
					}) : n.fbt._("Comments only", null, {
						hk: "StCEa"
					}))), c.a.createElement("div", {
						className: q.a.middleMetaBlock
					}, c.a.createElement("div", {
						className: q.a.ruleMetaTitle
					}, n.fbt._("Created", null, {
						hk: "gSE9w"
					})), c.a.createElement("div", {
						className: q.a.ruleMetaText
					}, ue(a.createdUtc)))), c.a.createElement("span", {
						className: q.a.metadata
					}, c.a.createElement("span", {
						className: q.a.ruleMetaTitle
					}, n.fbt._("Full description", null, {
						hk: "20Lgcg"
					})), c.a.createElement("span", {
						className: q.a.ruleMetaText
					}, o && !Object(ge.G)({
						document: o
					}) ? c.a.createElement(de.a, {
						className: q.a.ruleMetaText,
						content: {
							document: o
						},
						rtJsonElementProps: fe
					}) : a.descriptionHtml ? c.a.createElement(ie.a, {
						className: q.a.ruleMetaText,
						html: a.descriptionHtml
					}) : a.description))))
				}
			}
			var Ee = xe;
			const ve = p.a.wrapped(M.i, "PrimaryButton", q.a),
				_e = () => c.a.createElement(U.a, {
					className: q.a.placeholderRow
				}, c.a.createElement("span", {
					className: q.a.emptyWrapper
				}, c.a.createElement("span", {
					className: q.a.emptyIcon
				})), c.a.createElement("span", {
					className: q.a.emptyDetails
				}), c.a.createElement("span", {
					className: q.a.iconWrapper
				}, c.a.createElement("span", {
					className: q.a.emptyRightIcon
				}), c.a.createElement("span", {
					className: q.a.emptyRightIcon
				}))),
				Ce = () => c.a.createElement("div", {
					className: q.a.loadingContainer
				}, d()(15, e => c.a.createElement(_e, {
					key: e
				}))),
				ke = Object(u.c)({
					hasModConfigPerms: (e, t) => Object(Z.b)(B.c.config)(e, {
						subredditId: t.subreddit.id
					}),
					isConfirmModalOpen: e => "SubredditRule--Modal--DeleteConfirmation" === Object(W.a)(e),
					isRuleEditorOpen: e => "SubredditRule--Editor--Modal" === Object(W.a)(e),
					isSubredditRulesPending: e => Object(v.Q)(e),
					ruleOrder: (e, t) => Object(v.O)(e, {
						subredditId: t.subreddit.id
					}),
					subredditRules: (e, t) => Object(v.R)(e, {
						subredditId: t.subreddit.id
					})
				}),
				ye = Object(m.b)(ke, (e, t) => ({
					removeRule: (s, a) => e(((e, t, s) => async (a, o, {
						apiContext: r
					}) => {
						const i = Object(v.S)(o(), {
								subredditId: e
							}).name,
							d = Object(v.R)(o(), {
								subredditId: e
							})[s],
							l = `success-block-${t}`,
							c = `error-block-${t}`,
							m = await Object(x.d)(r(), i, t);
						if (m.ok) {
							const t = m.body;
							a(y({
								rules: t,
								subredditId: e
							})), a(f.f({
								id: l,
								kind: E.b.SuccessCommunityGreen,
								text: n.fbt._("Rule deleted", null, {
									hk: "2Kwoph"
								}),
								buttonText: n.fbt._("Undo", null, {
									hk: "1RYWKC"
								}),
								buttonAction: C(e, {
									rule: d.shortName,
									kind: d.kind,
									reason: d.violationReason,
									description: d.description
								})
							}))
						} else a(f.f({
							id: c,
							kind: E.b.Error,
							text: m.json.errors ? m.json.errors[0][1] : n.fbt._("An error has occured. Please try again later", null, {
								hk: "37ELrZ"
							})
						}))
					})(t.subreddit.id, s, a)),
					reorderRules: s => {
						e(O(t.subreddit.id, s))
					},
					toggleConfirmationModal: () => e(Object(b.i)("SubredditRule--Modal--DeleteConfirmation")),
					toggleRuleEditorModal: () => e(Object(b.i)("SubredditRule--Editor--Modal"))
				}));
			class Se extends c.a.Component {
				constructor(e) {
					super(e), this.deleteRule = () => {
						const e = this.state.ruleToEdit;
						e && this.props.removeRule(e.shortName, e.priority)
					}, this.onConfirmDeleteRule = () => {
						this.props.toggleConfirmationModal()
					}, this.onEditRule = e => {
						this.setState({
							ruleToEdit: e
						}), this.props.toggleRuleEditorModal()
					}, this.handleDrop = (e, t, s) => this.setState({
						ruleOrder: s,
						numRulesMoved: this.state.numRulesMoved + 1
					}), this.reorderRules = () => {
						this.props.reorderRules(this.state.ruleOrder), this.props.sendEvent(D("save_reorder", this.state.numRulesMoved)), this.stopReorder()
					}, this.startReorder = () => {
						this.setState({
							isReordering: !0,
							ruleOrder: this.props.ruleOrder
						})
					}, this.stopReorder = () => this.setState({
						isReordering: !1,
						numRulesMoved: 0
					}), this.toggleConfirmationModal = () => {
						this.props.toggleConfirmationModal(), this.setState({
							ruleToEdit: null
						})
					}, this.toggleEditorModal = () => {
						this.props.toggleRuleEditorModal(), this.setState({
							ruleToEdit: null
						})
					}, this.trackClick = e => this.props.sendEvent(A(e)), this.trackEdit = () => this.state.ruleToEdit ? this.trackClick("save_edit") : this.trackClick("save_new"), this.trackDelete = () => this.trackClick("delete"), this.state = {
						numRulesMoved: 0,
						ruleToEdit: null,
						ruleOrder: e.ruleOrder,
						isReordering: !1
					}
				}
				render() {
					const {
						hasModConfigPerms: e,
						isConfirmModalOpen: t,
						isRuleEditorOpen: s,
						isSubredditRulesPending: o,
						subreddit: i,
						subredditRules: d
					} = this.props;
					return c.a.createElement(c.a.Fragment, null, e && c.a.createElement(N.c, null, this.state.isReordering ? c.a.createElement(M.l, {
						onClick: this.stopReorder
					}, n.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})) : c.a.createElement(M.o, {
						onClick: this.startReorder,
						disabled: d.length <= 1
					}, n.fbt._("Reorder rules", null, {
						hk: "1qh7V6"
					})), this.state.isReordering ? c.a.createElement(ve, {
						onClick: this.reorderRules,
						disabled: r()(d.map(e => e.shortName), this.state.ruleOrder)
					}, n.fbt._("Save", null, {
						hk: "3nstB"
					})) : c.a.createElement(ve, {
						onClick: this.toggleEditorModal,
						disabled: o || d.length >= H.e
					}, n.fbt._("Add rule", null, {
						hk: "6GEk0"
					}))), d.length ? c.a.createElement(N.a, null, c.a.createElement("div", {
						className: q.a.header
					}, c.a.createElement(N.b, {
						className: q.a.rulesHeader
					}, n.fbt._("Rules", null, {
						hk: "41SmPR"
					}), c.a.createElement(I.a, {
						linkUrl: `${a.a.redditModHelpUrl}/hc/en-us/articles/360023379211`
					})), !this.state.isReordering && c.a.createElement("div", {
						className: q.a.rulesInfo
					}, n.fbt._("These are rules that visitors must follow to participate. They can be used as reasons to report or ban posts, comments, and users. Communities can have a maximum of 15 rules.", null, {
						hk: "1C2Vjc"
					}))), this.state.isReordering ? c.a.createElement(P.a, {
						values: this.state.ruleOrder,
						render: (e, t, s, n, a) => c.a.createElement(Q, {
							isDragging: s,
							isOver: n,
							canDrop: a,
							index: t,
							shortName: e
						}),
						onDrop: this.handleDrop
					}) : d.map((t, s) => c.a.createElement(Ee, {
						hasConfigPerms: e,
						index: s,
						key: `${i.name}-${t.shortName}`,
						onEdit: () => this.onEditRule(t),
						subredditRule: t
					}))) : c.a.createElement(N.a, null, c.a.createElement("div", {
						className: q.a.header
					}, c.a.createElement(N.b, {
						className: q.a.rulesHeader
					}, n.fbt._("Rules", null, {
						hk: "41SmPR"
					}), c.a.createElement(I.a, {
						linkUrl: `${a.a.redditModHelpUrl}/hc/en-us/articles/360023379211`
					}))), o ? c.a.createElement(Ce, null) : c.a.createElement(w.c, {
						text: n.fbt._("No rules yet", null, {
							hk: "pYLkV"
						})
					}, c.a.createElement(L.a, {
						name: "rules",
						className: q.a.rulesIcon
					}))), s && c.a.createElement(re, {
						onDelete: this.onConfirmDeleteRule,
						rule: this.state.ruleToEdit,
						ruleNames: d.map(e => e.shortName),
						sendEvent: this.trackEdit,
						subredditId: i.id,
						toggleModal: this.toggleEditorModal,
						withOverlay: !0
					}), t && this.state.ruleToEdit && c.a.createElement(j.a, {
						actionText: n.fbt._("Delete", null, {
							hk: "2ZdVqx"
						}),
						headerText: n.fbt._("Delete rule", null, {
							hk: "5q2Ri"
						}),
						modalText: n.fbt._("Are you sure you want to delete this rule?", null, {
							hk: "2diD6u"
						}),
						onConfirm: this.deleteRule,
						toggleModal: this.toggleConfirmationModal,
						trackClick: this.trackDelete,
						withOverlay: !0
					}))
				}
			}
			t.a = ye(Object(T.c)(Se))
		},
		"./src/reddit/components/UserNameAndIcon/index.m.less": function(e, t, s) {
			e.exports = {
				UserIconContainer: "_3gyThPd4NTS21qtNdizCxE",
				userIconContainer: "_3gyThPd4NTS21qtNdizCxE",
				UserIcon: "_1utZNH6IItbNzgdnUBW-Bp",
				userIcon: "_1utZNH6IItbNzgdnUBW-Bp",
				UserLink: "_2Q3rLIRb_ij54AEsabVm9L",
				userLink: "_2Q3rLIRb_ij54AEsabVm9L"
			}
		},
		"./src/reddit/components/UserNameAndIcon/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				d = s("./src/reddit/components/UserIcon/index.tsx"),
				l = s("./src/reddit/controls/InternalLink/index.tsx"),
				c = s("./src/reddit/components/UserNameAndIcon/index.m.less"),
				m = s.n(c);
			const u = r.a.span("UserIconContainer", m.a),
				p = r.a.wrapped(d.a, "UserIcon", m.a),
				b = r.a.wrapped(l.a, "UserLink", m.a);
			t.a = e => o.a.createElement(b, {
				className: e.className,
				to: `${n.a.redditUrl}/user/${e.username}`
			}, o.a.createElement(i.a, {
				user: e.username,
				sendHoverCardEvent: e.sendHoverCardEvent,
				subredditId: e.subredditId,
				tooltipId: e.tooltipId
			}, o.a.createElement(u, {
				style: {
					height: e.iconSize || "32px",
					width: e.iconSize || "32px"
				}
			}, o.a.createElement(p, {
				iconUrl: e.userIcon,
				isNSFW: !1,
				userName: e.username
			})), e.username))
		},
		"./src/reddit/components/Wiki/CreateNewWikiPageModal/index.m.less": function(e, t, s) {
			e.exports = {
				modalBody: "_1bgWTt9jbjzFmQBe0xzfBc",
				notice: "_19wd_7K0Gqdp6cf0Pno6jX",
				sectionTitle: "_2eB-lbdBJ7yGnpy9iCXf27",
				primaryButton: "_1Wp9oAwAZieyVMe4wA5SeL",
				dropdownContainer: "_2-waVlosIHdWwUa_OBavKm",
				dropdownTarget: "_1mcRpBQSnN5ALeKix2x4Py",
				targetText: "_3QRCCOc1SfjMkk4bZCW5lD",
				dropdown: "_1Uq_MgLQhUk4iL9iHGz3qL",
				dropdownRow: "_2UfNC6z3v6GQsT_TQn-eoZ",
				errorText: "_31tw_6Xr1vH0KRVUnoJEdv"
			}
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return x
			})), s.d(t, "b", (function() {
				return E
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/post.ts"),
				r = s("./src/reddit/actions/tooltip.ts"),
				i = s("./src/reddit/models/Vote/index.ts"),
				d = s("./src/reddit/contexts/InsideOverlay.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/contexts/Post/index.tsx"),
				m = s("./src/reddit/selectors/activeModalId.ts"),
				u = s("./src/reddit/selectors/chatPost.ts"),
				p = s("./src/reddit/selectors/moderatorPermissions.ts"),
				b = s("./src/reddit/selectors/postFlair.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/selectors/showPromotedCTA.ts"),
				f = s("./src/reddit/selectors/user.ts");
			const x = {
					autoplayPref: f.b,
					activeModalId: m.a,
					crosspost: h.d,
					isActive: h.j,
					isChatPost: u.d,
					isCurrentUserProfilePost: h.k,
					isExpanded: h.l,
					isLoggedIn: f.J,
					showPromotedCTA: g.a,
					moderatorPermissions: p.k,
					modModeEnabled: l.Q,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: b.a,
					showMedia: l.r,
					flairStyleTemplate: l.S
				},
				E = (e, {
					postId: t
				}) => ({
					handleVote: s => {
						const n = s === i.a.upvoted ? Object(o.fb)(t) : Object(o.w)(t);
						e(n)
					},
					onIgnoreReports: () => e(Object(o.bb)(t)),
					onOpenReportsDropdown: t => e(Object(r.h)({
						tooltipId: t
					}))
				}),
				v = Object(n.b)(() => Object(a.c)(x), E, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: e => e.title
				}));
			t.a = e => Object(c.b)(v(Object(d.b)(e)))
		},
		"./src/reddit/connectors/ClassicPost/searchResults.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/LRUCache/index.ts"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/connectors/ClassicPost/index.tsx");
			const c = Object(d.t)({
					searchQuery: d.W
				}),
				m = new i.a(250),
				u = e => {
					const t = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const s = `${e.id}-${t}`;
						let n = m.get(s);
						if (void 0 === n) {
							const o = new RegExp(`(\\b${t}\\b)`, "gi"),
								r = e.title.split(o);
							for (let e = 1; e < r.length; e += 2) r[e] = a.a.createElement("em", {
								style: {
									fontWeight: 700
								}
							}, r[e]);
							n = a.a.createElement("span", {
								style: {
									fontWeight: "normal"
								}
							}, a.a.Children.toArray(r)), m.set(s, n)
						}
						return n
					}
				},
				p = Object(o.b)(() => Object(r.c)(l.c), l.b, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: u(s.searchQuery || "")
				}));
			t.a = e => c(p(e))
		},
		"./src/reddit/constants/gold.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "e", (function() {
				return r
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "i", (function() {
				return l
			})), s.d(t, "h", (function() {
				return c
			})), s.d(t, "g", (function() {
				return m
			}));
			const n = "ModerationPage--Modal--AddAward",
				a = "ModerationPage--Modal--DeleteAwardConfirmation",
				o = 20,
				r = 4,
				i = 1e4,
				d = .2,
				l = .1,
				c = .1,
				m = 500
		},
		"./src/reddit/controls/CheckboxInput/index.m.less": function(e, t, s) {
			e.exports = {
				checkboxInput: "_2BPowd18EKTnfZFrj5kY3G",
				disabled: "_303iMx_S0pgrbpYhsYTV6K",
				checkboxSelected: "_2VtQ8EjxlJXdicVJhc73gQ"
			}
		},
		"./src/reddit/controls/CheckboxInput/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				d = s("./src/reddit/layout/row/Inline/index.tsx"),
				l = s("./src/reddit/controls/CheckboxInput/index.m.less"),
				c = s.n(l);
			t.a = e => a.a.createElement(d.a, {
				"aria-checked": !!e.value,
				"aria-disabled": e.disabled,
				"aria-labelledby": e.name,
				className: Object(o.a)(e.className, c.a.checkboxInput, e.disabled ? c.a.disabled : null),
				onClick: e.onChange && !e.disabled ? () => e.onChange(!e.value) : void 0,
				role: "checkbox"
			}, a.a.createElement("input", {
				value: e.value ? e.value.toString() : "",
				type: "hidden"
			}), e.value ? a.a.createElement(i.a, {
				className: c.a.checkboxSelected
			}) : a.a.createElement(r.a, null), e.children)
		},
		"./src/reddit/controls/DropdownSelector/index.m.less": function(e, t, s) {
			e.exports = {
				dropdownMenu: "_1PLoXiZH4WKzHTfmYIt34X",
				selector: "apk_M-7ks6NcaiMN8cotM",
				selectorContent: "Ot99igbaJ5id3P1tw6wow",
				compact: "_1qaMsHCBrTmejbIUPjsRVI",
				caretDown: "_2i4dyr-iTBOmkZ4fL_M70P",
				topics: "qWs3cMcSjquK-OXl-9jH5",
				loadingIcon: "_3WxhmmhQ3cYt1J7mtfcoKG",
				menuItems: "_3ssvFhIB2HAXL261eWf7G0",
				menuOption: "_1Qm1phX3yfiJHnjgi_O_9V"
			}
		},
		"./src/reddit/controls/DropdownSelector/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/controls/DropdownSelector/index.m.less"),
				r = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/controls/Dropdown/Row.tsx"),
				l = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = s("./src/reddit/icons/fonts/index.tsx");
			const m = e => {
				e.preventDefault()
			};
			class u extends a.a.Component {
				constructor() {
					super(...arguments), this.dropdownButton = a.a.createRef(), this.menuItems = a.a.createRef(), this.containerRef = a.a.createRef(), this.state = {
						isOpen: !1
					}, this.handleDocumentClick = e => {
						this.containerRef && this.containerRef.current && (this.containerRef.current.contains(e.target) || this.setState({
							isOpen: !1
						}))
					}, this.onSelectOption = (e, t, s) => {
						const {
							onSelect: n
						} = this.props;
						e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopPropagation(), n(t), s && this.dropdownButton.current && this.dropdownButton.current.focus(), this.setState({
							isOpen: !1
						})
					}, this.onOptionClick = (e, t) => {
						this.onSelectOption(e, t)
					}, this.handleDropdownClick = e => {
						e.preventDefault(), this.props.onOpen && this.props.onOpen(), this.setState({
							isOpen: !this.state.isOpen
						})
					}, this.handleDropdownBlur = e => {
						let t = !1;
						if (e.relatedTarget === this.dropdownButton.current) t = !0;
						else {
							if (!this.menuItems.current) return;
							const s = this.menuItems.current.getElementsByClassName(r.a.menuOption);
							for (let n = 0; n < s.length; n++) e.relatedTarget === s[n] && (t = !0)
						}
						this.setState({
							isOpen: t
						})
					}, this.handleDropdownKeyDown = e => {
						if (!this.state.isOpen && [40, 32, 13].includes(e.keyCode)) return e.preventDefault(), void this.setState({
							isOpen: !0
						}, this.focusOnFirstOption);
						40 === e.keyCode && (e.preventDefault(), this.focusOnFirstOption()), 27 === e.keyCode && this.state.isOpen && (e.stopPropagation(), e.nativeEvent.stopPropagation(), e.nativeEvent.stopImmediatePropagation(), this.setState({
							isOpen: !1
						}))
					}, this.handleOptionKeyDown = (e, t) => {
						if (32 === e.keyCode || 13 === e.keyCode) this.onSelectOption(e, t, !0);
						else if (38 === e.keyCode || 40 === e.keyCode) {
							if (e.preventDefault(), !this.menuItems.current) return;
							const t = this.menuItems.current.getElementsByClassName(r.a.menuOption);
							for (let s = 0; s < t.length; s++) t[s] === e.target && (38 === e.keyCode && s > 0 && t[s - 1].focus(), 40 === e.keyCode && s < t.length - 1 && t[s + 1].focus())
						}
					}
				}
				componentDidMount() {
					document.body.addEventListener("click", this.handleDocumentClick, !1)
				}
				componentWillUnmount() {
					document.body.removeEventListener("click", this.handleDocumentClick, !1)
				}
				focusOnFirstOption() {
					if (!this.menuItems.current) return;
					const e = this.menuItems.current.getElementsByClassName(r.a.menuOption);
					e.length && e[0].focus()
				}
				getDropdownMenuItems() {
					const {
						options: e,
						showSelectedCheckmark: t,
						isTopicsStyle: s
					} = this.props;
					return e.map((e, n) => a.a.createElement(d.b, {
						key: n + e.displayText,
						className: Object(i.a)(r.a.menuOption, {
							[r.a.topics]: s
						}),
						noIcon: !0,
						onKeydown: t => this.handleOptionKeyDown(t, e),
						onMouseDown: t => this.onOptionClick(t, e),
						onBlur: this.handleDropdownBlur,
						showSelectedCheckmark: t,
						isSelected: void 0 !== e.isSelected ? e.isSelected : void 0,
						isTopicsStyle: s
					}, e.displayText))
				}
				render() {
					const {
						buttonClassName: e,
						className: t,
						displayText: s,
						isCompactStyle: n,
						isTopicsStyle: o,
						menuItemsClassName: d,
						name: u,
						isSaving: p
					} = this.props, {
						isOpen: b
					} = this.state;
					return a.a.createElement("div", {
						ref: this.containerRef,
						id: this.props.id,
						className: Object(i.a)(r.a.dropdownMenu, t, {
							[r.a.topics]: o
						})
					}, a.a.createElement("button", {
						onClick: this.handleDropdownClick,
						className: Object(i.a)(e, r.a.selector, {
							[r.a.compact]: n
						}, {
							[r.a.topics]: o
						}),
						name: u,
						role: "menu",
						ref: this.dropdownButton,
						onBlur: this.handleDropdownBlur,
						onKeyDown: this.handleDropdownKeyDown
					}, a.a.createElement("span", {
						className: r.a.selectorContent,
						tabIndex: -1
					}, s), p ? a.a.createElement(l.a, {
						sizePx: 8,
						className: r.a.loadingIcon
					}) : a.a.createElement(c.a, {
						name: "caret_down"
					})), a.a.createElement("div", {
						className: Object(i.a)(r.a.menuItems, d, {
							[r.a.topics]: o
						}),
						onMouseDown: m,
						ref: this.menuItems
					}, b && this.getDropdownMenuItems()))
				}
			}
			t.b = u
		},
		"./src/reddit/controls/FileDrop/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/flow.js"),
				a = s.n(n),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-dnd/lib/index.js"),
				d = s("./node_modules/react-dnd-html5-backend/lib/index.js"),
				l = s("./src/reddit/helpers/dragDropContext/index.ts");
			const c = d.NativeTypes.FILE,
				m = a()(Object(i.DropTarget)(c, {
					drop: (e, t) => {
						if (t && t.didDrop() || !t) return;
						const s = t.getItem();
						s.files && e.onDrop(s.files)
					}
				}, (e, t) => ({
					connectDropTarget: e.dropTarget(),
					isOver: t.isOver(),
					canDrop: t.canDrop()
				})), l.a);
			class u extends r.a.Component {
				render() {
					return this.props.connectDropTarget ? this.props.connectDropTarget(r.a.createElement("div", {
						className: this.props.className
					}, this.props.render(this.props.isOver, this.props.canDrop))) : null
				}
			}
			t.a = m(u)
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, s) {
			e.exports = {
				input: "_3CWuMoFPzdbJCxYJVmEw00",
				label: "J4DegnzzIY1-C2PFzYkrA",
				mHasValue: "t09kxBqaSw0Is_F5sUdQ1",
				inputWrapper: "_3TCLGRXxb1PXK-_sziBD2q",
				mIsInvalid: "_1pMjk4nL9CObVggXCSuELu",
				inputMovingLabelWrapper: "_2-meAmTwsZSCNYrpbEy7BX",
				mIsRedditStyle: "_3ONm7CsU4BtjX9jO5WYv2X",
				trash: "_2YUtyje1Y5rUty_3zgPOGM",
				trashContainer: "_2wjFyjW1rwWs4WFcSc7xNl",
				plus: "_3o11DwChSYlSiDT6FYqOIE",
				addValueButton: "_1Dm7EZTfDne90O5xANs501",
				multiInputWrapper: "_3CjWcr8XyX0xN32ADxPngu",
				errorText: "_2JNX-DiHbrfxhFYgkcBNaK"
			}
		},
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "c", (function() {
				return g
			})), s.d(t, "d", (function() {
				return E
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/controls/ErrorText/index.tsx"),
				d = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				c = s("./src/reddit/controls/FormFields/index.m.less"),
				m = s.n(c);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const p = r.a.input("input", m.a),
				b = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				h = e => {
					const {
						label: t,
						children: s,
						inputRef: n,
						className: r,
						...i
					} = e, d = void 0 !== e.value && "" !== e.value;
					return a.a.createElement("div", {
						className: Object(o.a)(m.a.inputWrapper, r, {
							[m.a.mIsInvalid]: e.isInvalid
						}),
						onClick: b
					}, a.a.createElement(p, u({
						"aria-invalid": e.isInvalid,
						innerRef: n
					}, i)), e.label && a.a.createElement("label", {
						className: Object(o.a)(m.a.label, {
							[m.a.mHasValue]: d
						})
					}, e.label), e.children)
				},
				g = e => {
					const {
						label: t,
						children: s,
						inputRef: n,
						isInvalid: r,
						className: i,
						redditStyle: d,
						...l
					} = e, c = void 0 !== e.value && "" !== e.value;
					return a.a.createElement("div", {
						className: Object(o.a)(m.a.inputMovingLabelWrapper, i, {
							[m.a.mIsInvalid]: r,
							[m.a.mIsRedditStyle]: d
						}),
						onClick: b
					}, a.a.createElement(p, u({
						innerRef: n
					}, l)), e.label && a.a.createElement("label", {
						className: Object(o.a)(m.a.label, {
							[m.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				f = e => a.a.createElement("div", {
					className: Object(o.a)(m.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", a.a.createElement(d.a, {
					className: m.a.plus
				}));
			var x;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(x || (x = {}));
			class E extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: x.ADD
						})
					}, this.updateValue = (e, t) => {
						const s = this.props.values.slice();
						s[t] = e.target.value, this.props.onChange(s)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							s = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: x.REMOVE,
							value: s,
							index: e
						})
					}
				}
				componentWillReceiveProps(e) {
					e.values.length > this.props.values.length && this.setState({
						addingNewInputs: !0
					})
				}
				componentDidUpdate() {
					this.focusedInput && this.state.addingNewInputs && (this.focusedInput.focus(), this.setState({
						addingNewInputs: !1
					}))
				}
				setInputRef(e, t) {
					this.state.addingNewInputs && (!this.props.buttonOnTop || this.props.buttonOnTop && !t) && (this.focusedInput = e)
				}
				renderFields() {
					const {
						values: e,
						disabled: t,
						label: s,
						placeholder: n,
						errors: o = []
					} = this.props;
					return e.map((e, r) => a.a.createElement(h, {
						inputRef: e => this.setInputRef(e, r),
						isInvalid: !!o[r],
						disabled: t,
						type: "text",
						label: s,
						onChange: e => this.updateValue(e, r),
						placeholder: n,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, a.a.createElement("div", {
						className: m.a.trashContainer,
						onClick: () => this.removeValue(r)
					}, a.a.createElement(l.b, {
						className: m.a.trash
					})), !!o[r] && a.a.createElement(i.b, {
						className: m.a.errorText
					}, o[r])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: s,
						maxLength: n,
						addValueText: r,
						disabled: i
					} = this.props;
					this.focusedInput = null;
					const d = !(!!n && s.length >= n) && !i;
					return a.a.createElement("div", {
						className: Object(o.a)(m.a.multiInputWrapper, e)
					}, t && d && a.a.createElement(f, {
						onClick: this.addValue,
						text: r
					}), this.renderFields(), !t && d && a.a.createElement(f, {
						onClick: this.addValue,
						text: r
					}))
				}
			}
		},
		"./src/reddit/controls/ImageDisplay/index.m.less": function(e, t, s) {
			e.exports = {
				imageDisplay: "_1OSym2TYADlQNpSDWNxtjB"
			}
		},
		"./src/reddit/controls/ImageDisplay/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/controls/ImageDisplay/index.m.less"),
				i = s.n(r);
			t.a = ({
				backgroundImage: e,
				children: t,
				className: s
			}) => a.a.createElement("div", {
				className: Object(o.a)(i.a.imageDisplay, s),
				style: {
					backgroundImage: `url('${e}')`
				},
				children: t
			})
		},
		"./src/reddit/controls/Select/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "DuuuuIp9EubfvJyrdxytL",
				wrapper: "DuuuuIp9EubfvJyrdxytL",
				Caret: "_8fOXBcWxu_c3tlrAKMR3R",
				caret: "_8fOXBcWxu_c3tlrAKMR3R",
				Inner: "_3-_epznhOfLDNH3-plYM6l",
				inner: "_3-_epznhOfLDNH3-plYM6l",
				active: "wFEhEmBm9HI3jG6QDUnaw",
				redditStyle: "_2PDExzXmSTOdxzNjRB1Pww"
			}
		},
		"./src/reddit/controls/Sortable/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/helpers/dragDropContext/index.ts"),
				r = s("./node_modules/lodash/flow.js"),
				i = s.n(r),
				d = s("./node_modules/react-dnd/lib/index.js");
			class l extends a.a.Component {
				constructor() {
					super(...arguments), this.handleClick = () => {
						this.props.onClick && this.props.onClick(this.props.id, this.props.index)
					}
				}
				render() {
					const {
						props: e
					} = this;
					return e.connectDropTarget && e.connectDragSource ? i()(e.connectDropTarget, e.connectDragSource)(a.a.createElement("div", {
						onClick: this.handleClick
					}, e.render(e.id, e.index, e.isDragging, e.isOver, e.canDrop))) : null
				}
			}
			var c = i()(Object(d.DragSource)("card", {
				beginDrag: e => ({
					id: e.id,
					index: e.index
				}),
				endDrag: (e, t) => {
					if (t && t.didDrop()) {
						const s = t.getDropResult();
						e.onDrop(e.id, s.id)
					}
				}
			}, (e, t) => ({
				connectDragSource: e.dragSource(),
				isDragging: t.isDragging()
			})), Object(d.DropTarget)("card", {
				drop: (e, t) => {
					if (!t || !t.didDrop()) return {
						id: e.id,
						index: e.index
					}
				},
				canDrop: (e, t) => {
					if (!t) return !1;
					const s = t.getItem();
					return e.id !== s.id
				}
			}, (e, t) => ({
				connectDropTarget: e.dropTarget(),
				isOver: t.isOver(),
				canDrop: t.canDrop()
			})))(l);
			class m extends a.a.Component {
				constructor(e) {
					super(e), this.onDrop = (e, t) => {
						this.setState(s => {
							const n = s.values.slice(),
								a = n.indexOf(e),
								o = n.splice(a, 1)[0];
							let r = n.indexOf(t);
							return a <= r && (r += 1), n.splice(r, 0, o), this.props.onDrop(e, t, n), {
								values: n
							}
						})
					}, this.state = {
						values: e.values
					}
				}
				componentWillReceiveProps(e) {
					this.setState(() => ({
						values: e.values
					}))
				}
				render() {
					const {
						className: e,
						getReactKey: t,
						onClick: s,
						render: n
					} = this.props;
					return a.a.createElement("div", {
						className: e
					}, this.state.values.map((e, o) => a.a.createElement(c, {
						id: e,
						key: t && t(e, o),
						index: o,
						render: n,
						onDrop: this.onDrop,
						onClick: s
					})))
				}
			}
			t.a = Object(o.a)(m)
		},
		"./src/reddit/endpoints/economics/uploadedAssets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			}));
			var n, a, o = s("./src/config.ts"),
				r = s("./src/reddit/endpoints/governance/requester.ts");

			function i(e, t, s, n) {
				const a = `assetType=${s}&assetStatus=${n}`;
				return Object(r.a)(e, {
					method: "get",
					endpoint: `${o.a.metaUrl}/modtools/${t}/assets?${a}`
				})
			}

			function d(e, t, s) {
				const a = new FormData;
				return a.append("assetType", s.assetType), a.append("assetName", s.assetName), a.append("upfile", s.imageFile), s.assetType === n.Badge && (a.append("badgeColor", s.badgeColor || ""), a.append("badgeDescription", s.badgeDescription || "")), Object(r.a)(e, {
					endpoint: `${o.a.metaUrl}/modtools/${t}/assets`,
					method: "post",
					type: null,
					data: a
				})
			}

			function l(e, t, s, n, a) {
				return Object(r.a)(e, {
					endpoint: `${o.a.metaUrl}/modtools/${t}/assets/${s}s/${n}`,
					method: "patch",
					data: a
				})
			}! function(e) {
				e.Badge = "badge", e.Emote = "emote"
			}(n || (n = {})),
			function(e) {
				e.Uploaded = "uploaded", e.Approved = "approved", e.Rejected = "rejected"
			}(a || (a = {}))
		},
		"./src/reddit/endpoints/geotagging/setSubredditGeoPlace.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			}));
			var n = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/redditGQL/operations/SetSubredditGeoPlace.json");
			const o = e => ({
				input: {
					subredditId: e.subredditId,
					geoPlace: {
						id: e.placeId,
						source: e.source,
						sessionId: e.sessionId
					}
				}
			});
			t.a = async (e, t) => Object(n.a)(e, {
				...a,
				variables: o(t)
			})
		},
		"./src/reddit/endpoints/scheduledPosts/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return m
			})), s.d(t, "f", (function() {
				return p
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "c", (function() {
				return g
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "a", (function() {
				return C
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/reddit/helpers/flair.ts"),
				o = s("./src/reddit/helpers/richTextJson/index.ts"),
				r = s("./src/reddit/models/Post/index.ts"),
				i = s("./src/reddit/models/PostCreationForm/index.ts"),
				d = s("./src/reddit/models/ScheduledPost/index.ts"),
				l = s("./src/redditGQL/operations/CreateScheduledPost.json"),
				c = s("./src/redditGQL/operations/SubredditScheduledPosts.json");
			const m = (e, t) => Object(n.a)(e, {
					...c,
					variables: {
						...t,
						includeRecurring: !(!t.includeRecurring || !t.includeRecurring.recurringFirst),
						includeStandalone: !(!t.includeStandalone || !t.includeStandalone.standaloneFirst),
						recurringAfter: t.includeRecurring ? t.includeRecurring.recurringAfter : void 0,
						recurringFirst: t.includeRecurring ? t.includeRecurring.recurringFirst : void 0,
						standaloneAfter: t.includeStandalone ? t.includeStandalone.standaloneAfter : void 0,
						standaloneFirst: t.includeStandalone ? t.includeStandalone.standaloneFirst : void 0
					}
				}),
				u = (e, t) => {
					if (!e.ok || !e.body) return !1;
					const s = e.body;
					return !!(s.data && s.data.subredditInfoById && s.data.subredditInfoById.scheduledPosts && s.data.subredditInfoById.scheduledPosts[t] && s.data.subredditInfoById.scheduledPosts[t].edges)
				},
				p = (e, t) => !(!e.ok || !e.body) && (!(t.includeStandalone && !(e => u(e, d.f.standalonePosts))(e)) && !(t.includeRecurring && !(e => u(e, d.f.recurringPosts))(e))),
				b = ({
					poll: e,
					schedule: t,
					submission: s,
					subredditId: n
				}) => ({
					collectionId: s.collectionId || "",
					discussionType: s.isChatPost ? r.b.Chat : r.b.Comment,
					isContestMode: s.isContestMode,
					isPostAsMetaMod: s.isPostAsMetaMod,
					isSpoiler: s.isSpoiler,
					isNsfw: s.isNSFW,
					poll: e && _(e),
					title: s.title,
					isOriginalContent: s.isOC,
					flair: s.flair ? {
						id: s.flair.templateId,
						text: Object(a.g)(s.flair)
					} : {},
					sticky: s.sticky,
					subredditId: n,
					suggestedCommentSort: s.suggestedSort,
					isSendReplies: s.sendReplies,
					...h(t),
					...E(s),
					assetIds: v(s)
				}),
				h = e => ({
					scheduling: {
						publishAt: e.submitDate,
						clientTimezone: e.timezoneName,
						frequency: e.recurrenceInfo ? e.recurrenceInfo.frequency : void 0,
						interval: e.recurrenceInfo ? e.recurrenceInfo.interval : void 0,
						byMonthDays: e.recurrenceInfo ? e.recurrenceInfo.byMonthDays : void 0,
						byWeekDays: e.recurrenceInfo ? e.recurrenceInfo.byWeekDays : void 0
					}
				}),
				g = e => ({
					scheduling: Object.keys(e).length > 0 ? {
						clientTimezone: e.timezoneName || void 0,
						publishAt: e.submitDate || void 0,
						frequency: e.recurrenceInfo ? e.recurrenceInfo.frequency : void 0,
						interval: e.recurrenceInfo ? e.recurrenceInfo.interval : void 0,
						byMonthDays: e.recurrenceInfo ? e.recurrenceInfo.byMonthDays : void 0,
						byWeekDays: e.recurrenceInfo ? e.recurrenceInfo.byWeekDays : void 0
					} : void 0
				}),
				f = ({
					poll: e,
					schedule: t,
					scheduledPostId: s,
					submission: n,
					subredditId: a
				}) => {
					const o = b({
						poll: e,
						schedule: t,
						submission: n,
						subredditId: a
					});
					return {
						id: s,
						...o,
						flair: Object.keys(o.flair || {}).length ? {
							...o.flair
						} : {
							id: "",
							text: ""
						}
					}
				},
				x = e => /^https?:\/\//i.test(e) ? e : `http://${e}`,
				E = e => {
					switch (e.kind) {
						case i.o.RICH_TEXT:
							return {
								content: {
									richText: JSON.stringify({
										document: e.document
									})
								}
							};
						case i.o.MARKDOWN:
							return {
								content: {
									markdown: e.markdown
								}
							};
						case i.o.LINK:
							return {
								content: {}, link: {
									url: x(e.url)
								}
							};
						default:
							return {
								content: {}
							}
					}
				},
				v = e => {
					let t = [];
					if (e.document) {
						const s = e.document || [];
						t = Object(o.c)(s)
					}
					return t
				},
				_ = e => {
					if (e && e.options && e.duration && (e.options = e.options.map(e => ({
							text: e.text.trim()
						})).filter(e => !!e.text), e.options.length)) return e.duration = Math.floor(e.duration / 864e5), e
				},
				C = (e, t) => Object(n.a)(e, {
					...l,
					variables: {
						input: t
					}
				})
		},
		"./src/reddit/endpoints/scheduledPosts/update.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/redditGQL/operations/UpdateScheduledPost.json"),
				a = s("./src/lib/makeGqlRequest/index.ts");
			const o = (e, t) => Object(a.a)(e, {
				...n,
				variables: {
					input: t
				}
			})
		},
		"./src/reddit/endpoints/subredditModeration/moderationLog.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/redditGQL/operations/AllModerators.json"),
				o = s("./src/redditGQL/operations/FetchModerationLogActions.json");
			const r = (e, t, s) => Object(n.a)(e, {
					...o,
					variables: {
						subredditName: t,
						...s
					}
				}),
				i = (e, t) => Object(n.a)(e, {
					...a,
					variables: {
						subredditName: t
					}
				})
		},
		"./src/reddit/helpers/awards/isEligibleForCommunityAwards.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/models/Subreddit/index.ts");
			const a = new Set(["goins", "gold_testing", "inthesoulstone", "lounge", "lssgoldnormal", "maymodsguide1", "maymodsguide2", "megalounge", "pan2", "pan3", "venkman_bookclub", "whatssnoo", "translation_piglatin", "translation_pirate", "translation_initials", "translation_german", "translation_british", "translation_french_fr", "translation_es_mx", "translation_br_pt", "german_translation", "lssgoldnormal_13"]),
				o = new Set([n.f.Private, n.f.User]),
				r = e => !(!e || !e.name) && (!!a.has(e.name.toLowerCase()) || !e.isNSFW && !e.isQuarantined && !o.has(e.type));
			t.a = r
		},
		"./src/reddit/helpers/awards/isEligibleForGlobalAwards.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			const n = new Set(["t5_22cerq"]),
				a = e => n.has(e);
			t.a = a
		},
		"./src/reddit/helpers/awards/isEligibleForTemporaryAwards.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			const n = new Set(["t5_q0gj4", "t5_z5gli", "t5_22cerq", "t5_3j0kj"]),
				a = e => n.has(e)
		},
		"./src/reddit/helpers/canAccessModerationPage/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/models/Subreddit/index.ts");
			t.a = ({
				pageName: e,
				moderatorPermissions: t,
				canCreateScheduledPosts: s,
				isEmployee: o,
				isStreamingEnabled: r,
				subredditType: i,
				isContributor: d
			}) => {
				switch (e) {
					case n.Zb.Awards:
						return !!t;
					case n.Zb.SubredditRules:
					case n.Zb.Moderators:
						return !0;
					case n.Zb.Modlog:
						return !!t;
					case n.Zb.Muted:
						return !!(t && t.access && t.mail);
					case n.Zb.Banned:
						return !(!t || !t.access);
					case n.Zb.Contributors:
						return !!(t && t.access || i === a.f.Restricted || i === a.f.Private && d);
					case n.Zb.Flair:
					case n.Zb.PostFlair:
					case n.Zb.UserFlair:
						return !(!t || !t.flair);
					case n.Zb.CommunitySettings:
						return !(!t || !t.config);
					case n.Zb.Modqueue:
					case n.Zb.Reports:
					case n.Zb.Edited:
					case n.Zb.Spam:
					case n.Zb.Unmoderated:
					case n.Zb.ContentControls:
					case n.Zb.Removal:
						return !(!t || !t.posts);
					case n.Zb.ChatSettings:
						return !!t;
					case n.Zb.Badges:
					case n.Zb.Emojis:
						return !!t;
					case n.Zb.Emotes:
						return !(!t || !t.config);
					case n.Zb.Streaming:
						return !!(t && t.all && r);
					case n.Zb.Wiki:
					case n.Zb.WikiBanned:
					case n.Zb.WikiContributors:
						return !(!t || !t.wiki);
					case n.Zb.Traffic:
						return o || !!t;
					case n.Zb.EventPostContent:
					case n.Zb.ScheduledPostContent:
						return !!s;
					case n.Zb.Predictions:
						return !(!t || !t.posts);
					default:
						return !1
				}
			}
		},
		"./src/reddit/helpers/dragDropContext/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-dnd/lib/index.js"),
				a = s("./node_modules/react-dnd-html5-backend/lib/index.js"),
				o = s.n(a);
			t.a = Object(n.DragDropContext)(o.a)
		},
		"./src/reddit/helpers/graphql/normalizeModerationLogFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/helpers/graphql/helpers.ts");
			const a = e => {
					const t = [];
					for (const {
							node: s
						} of e.edges) {
						const {
							action: e,
							actionNotes: a,
							createdAt: o,
							details: r,
							id: i,
							moderator: d,
							subredditName: l,
							target: c
						} = s, m = {
							action: e,
							actionNotes: a,
							createdAt: Object(n.e)(o),
							details: r,
							id: i,
							moderator: d,
							subredditName: l,
							target: c
						};
						t.push(m)
					}
					return t
				},
				o = e => {
					const t = [];
					for (const {
							node: s
						} of e.edges) {
						const {
							id: e,
							name: n
						} = s, a = {
							id: e,
							name: n
						};
						t.push(a)
					}
					return t
				}
		},
		"./src/reddit/helpers/graphql/normalizeSubredditScheduledPostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return o
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "d", (function() {
				return h
			}));
			const n = e => e.subredditInfoById.scheduledPosts.recurringPosts ? {
					recurringPosts: {
						models: p(e.subredditInfoById.scheduledPosts.recurringPosts.edges),
						pageInfo: {
							...e.subredditInfoById.scheduledPosts.recurringPosts.pageInfo
						}
					},
					recurringPostsIds: e.subredditInfoById.scheduledPosts.recurringPosts.edges.map(e => e.node.id)
				} : {},
				a = e => e.subredditInfoById.scheduledPosts.standalonePosts ? {
					standalonePosts: {
						models: m(e.subredditInfoById.scheduledPosts.standalonePosts.edges),
						pageInfo: {
							...e.subredditInfoById.scheduledPosts.standalonePosts.pageInfo
						}
					},
					standalonePostsIds: e.subredditInfoById.scheduledPosts.standalonePosts.edges.map(e => e.node.id)
				} : {},
				o = e => ({
					...e,
					subredditInfoById: {
						id: e.subredditInfoById.id,
						scheduledPosts: {
							...n(e),
							...a(e)
						}
					}
				}),
				r = e => e.subredditInfoById.scheduledPosts && !!e.subredditInfoById.scheduledPosts.recurringPosts && !!e.subredditInfoById.scheduledPosts.recurringPostsIds,
				i = e => e.subredditInfoById.scheduledPosts && !!e.subredditInfoById.scheduledPosts.standalonePosts && !!e.subredditInfoById.scheduledPosts.standalonePostsIds,
				d = e => r(e) && i(e),
				l = e => !r(e) && i(e),
				c = e => r(e) && !i(e),
				m = e => e.map(e => u(e.node)),
				u = e => ({
					id: e.id,
					title: e.title,
					body: e.body,
					postKind: e.postKind,
					collectionId: e.collections.edges.length ? e.collections.edges[0].node.id : void 0,
					discussionType: e.discussionType,
					isContestMode: e.isContestMode,
					isPostAsMetaMod: e.isPostAsMetaMod,
					isSpoiler: e.isSpoiler,
					isNsfw: e.isNsfw,
					isOriginalContent: e.isOriginalContent,
					isSendReplies: e.isSendReplies,
					isSticky: !!e.sticky && "NONE" !== e.sticky,
					mediaAssets: e.mediaAssets,
					subreddit: {
						...e.subreddit
					},
					suggestedCommentSort: e.suggestedCommentSort,
					owner: {
						...e.owner
					},
					poll: e.poll,
					contentType: e.contentType,
					clientTimezone: e.clientTimezone,
					publishAt: e.publishAt.split(".")[0],
					state: e.state,
					flair: e.flair ? {
						...e.flair
					} : void 0,
					sticky: e.sticky,
					isModDistinguished: "MODERATOR" === e.distinguishedAs,
					url: e.url
				}),
				p = e => e.map(e => b(e.node)),
				b = e => ({
					...u(e),
					frequency: e.frequency,
					byMonthDays: e.byMonthDays || [],
					byWeekDays: e.byWeekDays || [],
					interval: e.interval || 1
				}),
				h = e => (e => !!e.frequency && !!e.interval)(e) ? b(e) : u(e)
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/isValidUsername/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/helpers/normalizeUsername/index.tsx");
			t.a = e => {
				const t = Object(n.a)(e.trim());
				return t.length > 2 && t.length <= 20
			}
		},
		"./src/reddit/helpers/readOnlyMode/index.ts": function(e, t, s) {
			"use strict";
			var n;
			s.d(t, "a", (function() {
					return n
				})), s.d(t, "b", (function() {
					return a
				})), s.d(t, "c", (function() {
					return o
				})),
				function(e) {
					e.editable = "editable", e.focusableReadOnly = "focusablereadonly", e.readOnly = "readonly"
				}(n || (n = {}));
			const a = e => o(e) || e === n.focusableReadOnly,
				o = e => e === n.readOnly
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
				return g
			})), s.d(t, "d", (function() {
				return f
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				a = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				r = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = s("./src/reddit/models/Theme/index.ts"),
				d = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				l = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				c = s.n(l);
			const m = {},
				u = e => Object(i.g)(Object(d.a)(e).post, Object(d.a)(e).backgroundImage, Object(d.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(d.a)(t).post, e.postBackgroundImage, Object(d.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: u(t)
					}
				},
				b = e => Object(n.l)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : m,
				g = e => e.isActive ? c.a.mIsActive : void 0,
				f = e => {
					const t = Object(o.a)(Object(a.a)(e), r.a.actionIcon, r.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/communitySettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "f", (function() {
				return f
			}));
			var n = s("./node_modules/lodash/snakeCase.js"),
				a = s.n(n),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const i = {
					contentOptions: "link_type",
					contentVisible: "allow_top",
					subredditType: "type",
					welcomeMessageText: "welcome_message"
				},
				d = {
					allowChatPostCreation: o.ac.Posts,
					allowDiscovery: o.ac.Safety,
					allowGalleries: o.ac.Posts,
					allowImages: o.ac.Posts,
					allowPolls: o.ac.Posts,
					allowPostCrossposts: o.ac.Posts,
					collapseDeletedComments: o.ac.Posts,
					commentScoreHideMins: o.ac.Posts,
					contentOptions: o.ac.Posts,
					contentVisible: o.ac.Safety,
					crowdControlChatLevel: o.ac.Safety,
					crowdControlLevel: o.ac.Safety,
					crowdControlMode: o.ac.Safety,
					disableContributorRequests: o.ac.Community,
					excludeBannedModqueue: o.ac.Safety,
					over18: o.ac.Community,
					publicDescription: o.ac.Community,
					restrictCommenting: o.ac.Community,
					restrictPosting: o.ac.Community,
					spamComments: o.ac.Posts,
					spamLinks: o.ac.Posts,
					spamSelfposts: o.ac.Posts,
					spoilersEnabled: o.ac.Posts,
					subredditType: o.ac.Community,
					suggestedCommentSort: o.ac.Posts,
					toxicityThresholdChatLevel: o.ac.Safety,
					welcomeMessageEnabled: o.ac.Community,
					welcomeMessageText: o.ac.Community,
					wikiEditAge: o.ac.Wikis,
					wikiEditKarma: o.ac.Wikis,
					wikimode: o.ac.Wikis
				},
				l = {
					[o.ac.Community]: "community_settings_details",
					[o.ac.Notifications]: "community_settings_notifications",
					[o.ac.Safety]: "community_settings_safety",
					[o.ac.Posts]: "community_settings_content",
					[o.ac.Wikis]: "community_settings_wiki",
					[o.ac.ContentTag]: "content_tag"
				},
				c = e => i[e] || a()(e),
				m = e => {
					const t = d[e];
					return t && l[t] || "community_settings"
				},
				u = (e, t, s) => n => ({
					source: m(e),
					action: "click",
					noun: c(e),
					setting: {
						value: String(t),
						oldValue: String(s)
					},
					subreddit: r.subreddit(n),
					...r.defaults(n)
				}),
				p = (e, t, s) => n => ({
					source: m(e),
					action: "save",
					noun: c(e),
					setting: {
						value: String(t),
						oldValue: String(s)
					},
					subreddit: r.subreddit(n),
					...r.defaults(n)
				}),
				b = e => t => ({
					source: "community_settings",
					action: "click",
					noun: l[e],
					...r.defaults(t)
				}),
				h = e => t => ({
					source: l[e],
					action: "click",
					noun: "r2_community_settings",
					...r.defaults(t)
				}),
				g = () => e => ({
					...r.defaults(e),
					source: "mod_tools",
					action: "click",
					noun: "welcome_message_preview",
					subreddit: r.subreddit(e),
					actionInfo: r.actionInfo(e, {
						reason: "welcome_message"
					})
				}),
				f = (e, t, s, n) => a => ({
					...r.defaults(a),
					source: "mod_tools",
					action: e,
					noun: t,
					...void 0 !== s && void 0 !== n && {
						setting: {
							value: String(s),
							oldValue: String(n)
						}
					},
					subreddit: r.subreddit(a),
					actionInfo: r.actionInfo(a, {
						reason: "welcome_message"
					})
				})
		},
		"./src/reddit/helpers/trackers/contentTag.ts": function(e, t, s) {
			"use strict";
			s.d(t, "h", (function() {
				return n
			})), s.d(t, "g", (function() {
				return a
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "l", (function() {
				return r
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "j", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "i", (function() {
				return c
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "n", (function() {
				return u
			})), s.d(t, "m", (function() {
				return p
			})), s.d(t, "k", (function() {
				return b
			})), s.d(t, "o", (function() {
				return h
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "d", (function() {
				return f
			}));
			const n = () => () => ({
					source: "content_tag",
					action: "view",
					noun: "verify_topics_module"
				}),
				a = () => () => ({
					source: "content_tag",
					action: "click",
					noun: "verify_topics_module"
				}),
				o = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_intro",
					actionInfo: {
						pageType: "survey_intro"
					}
				}),
				r = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "start",
					actionInfo: {
						pageType: "survey_intro"
					}
				}),
				i = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "mature_themes_prompt",
					actionInfo: {
						pageType: "survey_mature_themes"
					}
				}),
				d = e => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: e,
					actionInfo: {
						pageType: e
					}
				}),
				l = e => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "survey_answer",
					actionInfo: {
						pageType: e
					}
				}),
				c = (e, t) => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "next",
					actionInfo: {
						reason: t.join(),
						pageType: e
					}
				}),
				m = e => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "back",
					actionInfo: {
						pageType: e
					}
				}),
				u = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_rating_summary",
					actionInfo: {
						pageType: "survey_rating_summary"
					}
				}),
				p = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "submit_survey",
					actionInfo: {
						pageType: "survey_rating_summary"
					}
				}),
				b = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_rating_review",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				h = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "take_survey",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				g = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "message_modsupport",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				f = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "learn_more",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				})
		},
		"./src/reddit/helpers/trackers/emailInvite.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/reddit/helpers/correlationIdTracker.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			const o = e => t => ({
					source: e,
					action: "click",
					noun: "invite_via_email",
					...a.defaults(t),
					subreddit: a.subreddit(t),
					actionInfo: a.actionInfo(t),
					correlationId: Object(n.d)(n.a.SubredditCreation, !1)
				}),
				r = () => e => ({
					source: "email_invite_painted_door",
					action: "view",
					noun: "modal",
					...a.defaults(e),
					subreddit: a.subreddit(e),
					actionInfo: a.actionInfo(e),
					correlationId: Object(n.c)(n.a.SubredditCreation)
				}),
				i = e => t => ({
					source: "email_invite_painted_door",
					action: "click",
					noun: e,
					...a.defaults(t),
					subreddit: a.subreddit(t),
					actionInfo: a.actionInfo(t),
					correlationId: Object(n.c)(n.a.SubredditCreation)
				})
		},
		"./src/reddit/helpers/trackers/modHub.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const a = e => ({
					screen: n.screen(e),
					subreddit: n.subreddit(e),
					profile: n.profile(e),
					userSubreddit: n.userSubreddit(e)
				}),
				o = e => t => ({
					source: "mod_hub_nav",
					action: "click",
					noun: e,
					...a(t)
				}),
				r = () => e => ({
					source: "breadcrumb",
					action: "click",
					noun: "subreddit",
					...a(e)
				}),
				i = () => e => ({
					source: "id_card",
					action: "click",
					noun: "mod_hub_nav",
					...a(e)
				})
		},
		"./src/reddit/helpers/trackers/moderationPages.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "c", (function() {
				return d
			}));
			var n = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					screen: a.screen(e),
					profile: a.profile(e),
					subreddit: a.subreddit(e)
				}),
				r = e => {
					switch (e) {
						case n.Zb.Banned:
							return "banned";
						case n.Zb.Muted:
							return "muted";
						case n.Zb.Contributors:
							return "contributors";
						case n.Zb.Moderators:
							return "modmanagement";
						case n.Zb.Removal:
							return "set_removal_reasons";
						case n.Zb.CommunitySettings:
							return "edit";
						default:
							return e
					}
				},
				i = (e, t) => s => ({
					source: r(t),
					noun: e,
					action: "click",
					...o(s)
				}),
				d = e => t => ({
					source: r(e),
					noun: "hover_user_hovercard",
					action: "view",
					...o(t)
				})
		},
		"./src/reddit/helpers/validateFlairCssClass.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/reddit/constants/flair.ts");
			const o = new RegExp(`^[a-zA-Z0-9-]{1,${a.f}}$`);
			t.a = e => {
				if (!e) return;
				const t = e.split(" ").filter(Boolean);
				if (t.length > a.c) return n.fbt._("Too many class names", null, {
					hk: "musK5"
				});
				const s = t.find(e => !e.match(o));
				return s ? s.length > a.f ? n.fbt._("Class name should not be longer than 100 characters", null, {
					hk: "2nBmgP"
				}) : n.fbt._("Class name contains an invalid character", null, {
					hk: "4kdVCU"
				}) : void 0
			}
		},
		"./src/reddit/hooks/useGqlContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js"),
				a = s("./src/reddit/contexts/ApiContext.tsx");

			function o() {
				const {
					gqlContext: e
				} = Object(n.useContext)(a.a);
				return e
			}
		},
		"./src/reddit/hooks/useIsOverlay.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js"),
				a = s("./src/reddit/contexts/InsideOverlay.tsx");

			function o() {
				return Object(n.useContext)(a.a)
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less": function(e, t, s) {
			e.exports = {
				CollapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI",
				collapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				r = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				i = s.n(r);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: `${Object(o.b)("collapse",e.isFilled)} ${e.className}`,
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", i.a);
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
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				r = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				i = s.n(r);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: `${Object(o.b)("expand",e.isFilled)} ${e.className}`,
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => a.a.createElement("i", {
				className: `${Object(o.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/CheckmarkFitted/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "3 4 14 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Circle/index.m.less": function(e, t, s) {
			e.exports = {
				circle: "_17IuRdA-NY8vFk-Tt991sn"
			}
		},
		"./src/reddit/icons/svgs/Circle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/Circle/index.m.less"),
				i = s.n(r);
			t.a = e => a.a.createElement("svg", {
				className: Object(o.a)(i.a.circle, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 8 8"
			}, a.a.createElement("g", {
				fill: "inherit",
				stroke: "none"
			}, a.a.createElement("circle", {
				r: "4",
				cy: "4",
				cx: "4"
			})))
		},
		"./src/reddit/icons/svgs/Clear/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				onMouseUp: e.onMouseUp,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, a.a.createElement("path", {
				d: "M20 2.5C10.3 2.5 2.5 10.3 2.5 20c0 9.7 7.8 17.5 17.5 17.5S37.5 29.7 37.5 20C37.5 10.3 29.7 2.5 20 2.5zM24.2 27.7L20 23.5l-4.2 4.2c-1.1 1.1-2.5 1.1-3.5 0-1.1-1.1-1.1-2.4 0-3.5l4.2-4.2-4.2-4.2c-1.1-1.1-1.1-2.5 0-3.5 1.1-1.1 2.4-1.1 3.5 0l4.2 4.2 4.2-4.2c1.1-1.1 2.5-1.1 3.5 0 1.1 1.1 1.1 2.4 0 3.5L23.5 20l4.2 4.2c1.1 1.1 1.1 2.5 0 3.5C26.7 28.8 25.3 28.8 24.2 27.7z"
			}))
		},
		"./src/reddit/icons/svgs/Clock/index.m.less": function(e, t, s) {
			e.exports = {
				clock: "_3dezPhiKJXkVFXj94zLKcs"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/Clock/index.m.less"),
				i = s.n(r);
			t.a = e => a.a.createElement("svg", {
				className: Object(o.a)(i.a.clock, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), a.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Collection/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20"
			}, a.a.createElement("g", {
				fill: "inherit",
				fillRule: "evenodd"
			}, a.a.createElement("path", {
				d: "M14 0H2a2 2 0 0 0-2 2v.78A2.979 2.979 0 0 1 2 2h12c.77 0 1.468.301 2 .78V2a2 2 0 0 0-2-2zm0 3H2a2 2 0 0 0-2 2v.78A2.979 2.979 0 0 1 2 5h12c.77 0 1.468.301 2 .78V5a2 2 0 0 0-2-2zM2 6h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
			})))
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, s) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = s.n(r);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const l = ({
				className: e,
				isSubreddit: t,
				...s
			}) => a.a.createElement("svg", d({
				className: Object(o.a)(i.a.dropdown, {
					[i.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s), a.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = l
		},
		"./src/reddit/icons/svgs/Event/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20"
			}, a.a.createElement("g", {
				fill: "inherit",
				fillRule: "evenodd"
			}, a.a.createElement("path", {
				d: "M4 16h12V9H4v7zM17 4h-2V3a1 1 0 0 0-2 0v1H7V3a1 1 0 0 0-2 0v1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"
			})))
		},
		"./src/reddit/icons/svgs/Eye/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function o(e) {
				return a.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 40 40"
				}, a.a.createElement("g", null, a.a.createElement("path", {
					d: "M20,8C9.1,8,0.5,14,0.5,21.7h4c0-3.6,3.4-6.9,8.2-8.5C11,15,10,17.4,10,20c0,5.5,4.5,10,10,10s10-4.5,10-10c0-2.6-1-5-2.7-6.8c4.8,1.7,8.2,4.9,8.2,8.5h4C39.5,14,30.9,8,20,8z"
				})))
			}
		},
		"./src/reddit/icons/svgs/Gild/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && a.a.createElement("desc", null, e.desc), a.a.createElement("g", {
				stroke: "none",
				strokeWidth: "1",
				fillRule: "evenodd"
			}, a.a.createElement("g", {
				fill: "inherit"
			}, a.a.createElement("path", {
				d: "m15.1275768 8.9935-2.059 2.204.371 2.992c.022.181-.055.359-.203.466-.087.064-.19.096-.294.096-.072 0-.144-.016-.211-.047l-2.73200003-1.277-2.731 1.277c-.164.076-.359.059-.506-.049-.148-.107-.225-.285-.202-.466l.37-2.992-2.059-2.204c-.124-.133-.166-.323-.11-.496s.202-.302.381-.336l2.96-.573 1.46-2.639c.175-.318.69900003-.318.87500003 0l1.46 2.639 2.959.573c.179.034.325.163.381.336s.014.363-.11.496m2.911-2.985-6.586-4.786c-.869-.63-2.03700003-.63-2.90600003 0v.001l-6.586 4.785c-.869.631-1.23 1.742-.898 2.764l2.515 7.743c.332 1.021 1.278 1.708 2.352 1.708h8.14000003c1.075 0 2.02-.687 2.352-1.708l2.516-7.743c.332-1.022-.03-2.133-.899-2.764"
			}))))
		},
		"./src/reddit/icons/svgs/Grapple/index.m.less": function(e, t, s) {
			e.exports = {
				grapple: "_23XYJUJn_XitrV-LLkNyCQ",
				mIsDragging: "_1jCsYjqdUw4PYY-s3mGB47"
			}
		},
		"./src/reddit/icons/svgs/Grapple/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/Grapple/index.m.less"),
				i = s.n(r);
			t.a = e => a.a.createElement("svg", {
				className: Object(o.a)(e.className, i.a.grapple, {
					[i.a.mIsDragging]: e.isDragging
				}),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), a.a.createElement("g", null, a.a.createElement("path", {
				d: "M8,2 C8.553,2 9,2.447 9,3 L9,5 C9,5.553 8.553,6 8,6 L6,6 C5.447,6 5,5.553 5,5 L5,3 C5,2.447 5.447,2 6,2 L8,2 Z M14,2 C14.553,2 15,2.447 15,3 L15,5 C15,5.553 14.553,6 14,6 L12,6 C11.447,6 11,5.553 11,5 L11,3 C11,2.447 11.447,2 12,2 L14,2 Z M8,8 C8.553,8 9,8.447 9,9 L9,11 C9,11.553 8.553,12 8,12 L6,12 C5.447,12 5,11.553 5,11 L5,9 C5,8.447 5.447,8 6,8 L8,8 Z M14,8 C14.553,8 15,8.447 15,9 L15,11 C15,11.553 14.553,12 14,12 L12,12 C11.447,12 11,11.553 11,11 L11,9 C11,8.447 11.447,8 12,8 L14,8 Z M8,14 C8.553,14 9,14.447 9,15 L9,17 C9,17.553 8.553,18 8,18 L6,18 C5.447,18 5,17.553 5,17 L5,15 C5,14.447 5.447,14 6,14 L8,14 Z M14,14 C14.553,14 15,14.447 15,15 L15,17 C15,17.553 14.553,18 14,18 L12,18 C11.447,18 11,17.553 11,17 L11,15 C11,14.447 11.447,14 12,14 L14,14 Z"
			})))
		},
		"./src/reddit/icons/svgs/ImageUpload/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2irXdPA4C5flwkupsFkN9-"
			}
		},
		"./src/reddit/icons/svgs/ImageUpload/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/ImageUpload/index.m.less"),
				i = s.n(r);
			t.a = e => a.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("polygon", {
				fill: "inherit",
				opacity: "0",
				points: "0.610673352 20 20.625 20 20.625 0 0.610673352 0"
			}), a.a.createElement("path", {
				d: "M17.451,9.14823765 C17.03,5.40791696 13.8555,2.5 10,2.5 C6.1445,2.5 2.97,5.40791696 2.549,9.14823765 C1.0455,9.84024195 0,11.3551568 0,13.1173944 C0,15.531665 1.959,17.4892627 4.375,17.4892627 L7.8125,17.4892627 L7.8125,12.8051181 L5,12.8051181 C4.8735,12.8051181 4.7595,12.7291725 4.7115,12.6122563 C4.6625,12.49534 4.6895,12.3614359 4.779,12.272 L9.779,7.2755791 C9.901,7.15366643 10.099,7.15366643 10.221,7.2755791 L15.187,12.2375247 C15.2665,12.2944839 15.3185,12.3874173 15.3185,12.4928418 C15.3185,12.6652183 15.1785,12.8051181 15.006,12.8051181 L15,12.8051181 L12.1875,12.8051181 L12.1875,17.4892627 L15.625,17.4892627 C18.041,17.4892627 20,15.531665 20,13.1173944 C20,11.3551568 18.954,9.84024195 17.451,9.14823765",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Location/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 13 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "m10.4442 10.9445c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5m0-8.944c-3.554 0-6.444 2.891-6.444 6.444 0 3.32 5.143 8.658 5.73 9.256.189.192.446.3.714.3.269 0 .526-.108.714-.3.587-.598 5.73-5.936 5.73-9.256 0-3.553-2.89-6.444-6.444-6.444",
				fill: "inherit",
				fillRule: "evenodd",
				transform: "translate(-4 -2)"
			}))
		},
		"./src/reddit/icons/svgs/ModLogPosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20"
			}, a.a.createElement("g", {
				fill: "inherit",
				fillRule: "evenodd"
			}, a.a.createElement("path", {
				d: "M15.5,7.75 L12.5,7.75 C12.224,7.75 12,7.526 12,7.25 C12,6.974 12.224,6.75 12.5,6.75 L15.5,6.75 C15.776,6.75 16,6.974 16,7.25 C16,7.526 15.776,7.75 15.5,7.75 Z M15.5,10.5 L12.5,10.5 C12.224,10.5 12,10.276 12,10 C12,9.724 12.224,9.5 12.5,9.5 L15.5,9.5 C15.776,9.5 16,9.724 16,10 C16,10.276 15.776,10.5 15.5,10.5 Z M15.5,13.25 L4.5,13.25 C4.224,13.25 4,13.026 4,12.75 C4,12.474 4.224,12.25 4.5,12.25 L15.5,12.25 C15.776,12.25 16,12.474 16,12.75 C16,13.026 15.776,13.25 15.5,13.25 Z M4.5,16 C4.224,16 4,15.776 4,15.5 C4,15.224 4.224,15 4.5,15 L15.5,15 C15.776,15 16,15.224 16,15.5 C16,15.776 15.776,16 15.5,16 L4.5,16 Z M4,4.5 C4,4.224 4.224,4 4.5,4 L9.813,4 C10.089,4 10.313,4.224 10.313,4.5 L10.313,10 C10.313,10.276 10.089,10.5 9.813,10.5 L4.5,10.5 C4.224,10.5 4,10.276 4,10 L4,4.5 Z M3,2 C2.447,2 2,2.447 2,3 L2,17 C2,17.553 2.447,18 3,18 L17,18 C17.553,18 18,17.553 18,17 L18,3 C18,2.447 17.553,2 17,2 L3,2 Z"
			})))
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/constants/colors.ts");
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && a.a.createElement("desc", null, e.desc), a.a.createElement("path", {
				d: "M1.88,3.32V9a11.53,11.53,0,0,0,8,11L10,20l.08,0a11.53,11.53,0,0,0,8-11V3.32A11.57,11.57,0,0,1,10,0,11.57,11.57,0,0,1,1.88,3.32"
			}), a.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), a.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "4",
				fill: e.isUnread ? o.b.orangered : "none"
			}))
		},
		"./src/reddit/icons/svgs/Negative/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 10 10"
			}, a.a.createElement("path", {
				d: "M2,0 L8,0 C9.1045695,-2.02906125e-16 10,0.8954305 10,2 L10,8 C10,9.1045695 9.1045695,10 8,10 L2,10 C0.8954305,10 1.3527075e-16,9.1045695 0,8 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z M6.2103,5.78636 C6.3275,5.90356 6.3275,6.09356 6.2103,6.21076 C6.1519,6.26916 6.0751,6.29836 5.9983,6.29836 C5.9211,6.29836 5.8447,6.26916 5.7859,6.21076 L4.9983,5.42276 L4.2103,6.21076 C4.1519,6.26916 4.0751,6.29836 3.9983,6.29836 C3.9211,6.29836 3.8447,6.26916 3.7859,6.21076 C3.6687,6.09356 3.6687,5.90356 3.7859,5.78636 L4.5739,4.99836 L3.7859,4.21076 C3.6687,4.09356 3.6687,3.90356 3.7859,3.78636 C3.9031,3.66916 4.0931,3.66916 4.2103,3.78636 L4.9983,4.57436 L5.7859,3.78636 C5.9031,3.66916 6.0931,3.66916 6.2103,3.78636 C6.3275,3.90356 6.3275,4.09356 6.2103,4.21076 L5.4223,4.99836 L6.2103,5.78636 Z M7.4023,2.59436 C6.0767,1.26836 3.9195,1.26916 2.5939,2.59436 C1.2687,3.91996 1.2687,6.07716 2.5939,7.40276 C3.2567,8.06556 4.1275,8.39676 4.9983,8.39676 C5.8687,8.39676 6.7395,8.06556 7.4023,7.40276 C8.7279,6.07716 8.7279,3.91996 7.4023,2.59436 Z"
			}))
		},
		"./src/reddit/icons/svgs/Positive/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 10 10"
			}, a.a.createElement("path", {
				d: "M2,0 L8,0 C9.1045695,-2.02906125e-16 10,0.8954305 10,2 L10,8 C10,9.1045695 9.1045695,10 8,10 L2,10 C0.8954305,10 1.3527075e-16,9.1045695 0,8 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z M8.0828,3.27736 L7.5232,2.71736 C7.448,2.64216 7.3464,2.60016 7.2404,2.60016 C7.134,2.60016 7.0324,2.64216 6.9576,2.71736 L4.16,5.51456 L3.0428,4.39736 C2.8868,4.24096 2.6336,4.24096 2.4772,4.39736 L1.9172,4.95736 C1.7608,5.11376 1.7608,5.36696 1.9172,5.52296 L3.8772,7.48296 C3.9556,7.56096 4.0576,7.60016 4.16,7.60016 C4.2624,7.60016 4.3648,7.56096 4.4428,7.48296 L8.0828,3.84296 C8.2392,3.68656 8.2392,3.43376 8.0828,3.27736 Z"
			}))
		},
		"./src/reddit/icons/svgs/Post/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M5,15a1,1,0,0,1-1-1V11.17a1,1,0,0,1,.29-.7l8.09-8.09a1,1,0,0,1,1.41,0l2.83,2.83a1,1,0,0,1,0,1.41L8.54,14.71a1,1,0,0,1-.71.29Zm12,1a1,1,0,0,1,0,2H3a1,1,0,0,1,0-2Z"
			}))
		},
		"./src/reddit/icons/svgs/Redditor/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", o({
				viewBox: "0 0 250 250",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), a.a.createElement("g", {
				fill: "inherit"
			}, a.a.createElement("path", {
				d: "M146.8 142.6h-37.6c-31.1 0-56.5 25.3-56.5 56.5 0 5.2 4.2 9.4 9.4 9.4h131.8c5.2 0 9.4-4.2 9.4-9.4 0-31.2-25.3-56.5-56.5-56.5zM128 130.7c20.1 0 36.4-16.3 36.4-36.4v-9.4c0-20.1-16.3-36.4-36.4-36.4S91.6 64.8 91.6 84.9v9.4c0 20.1 16.3 36.4 36.4 36.4z"
			})))
		},
		"./src/reddit/icons/svgs/Replay/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", o({}, e, {
				viewBox: "13 12 23 23",
				xmlns: "http://www.w3.org/2000/svg"
			}), a.a.createElement("g", null, a.a.createElement("path", {
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Settings/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("g", {
				fill: "inherit"
			}, a.a.createElement("path", {
				d: "M7.03093403,10 C7.03093403,8.36301971 8.36301971,7.03093403 10,7.03093403 C11.6369803,7.03093403 12.9679409,8.36301971 12.9679409,10 C12.9679409,11.6369803 11.6369803,12.969066 10,12.969066 C8.36301971,12.969066 7.03093403,11.6369803 7.03093403,10 M16.4016617,8.49127796 C16.2362761,7.79148295 15.9606334,7.13669084 15.5916096,6.5437777 L16.5231696,5.06768276 C16.7526843,4.70315931 16.7684353,4.22387849 16.5231696,3.83572852 C16.1833977,3.29794393 15.4712269,3.13593351 14.9323172,3.47683044 L13.4562223,4.40839036 C12.8633092,4.03936662 12.208517,3.76259882 11.508722,3.59833825 L11.1250724,1.89947899 C11.0294412,1.47982699 10.7020452,1.12992949 10.2542664,1.02867298 C9.63322641,0.888038932 9.01556168,1.27843904 8.87492764,1.89947899 L8.49127796,3.59833825 C7.79148295,3.76259882 7.13669084,4.03936662 6.54265263,4.40726528 L5.06768276,3.47683044 C4.70315931,3.24731568 4.22387849,3.23156466 3.83572852,3.47683044 C3.29794393,3.81660229 3.13593351,4.5287731 3.47683044,5.06768276 L4.40726528,6.54265263 C4.03936662,7.13669084 3.76259882,7.79148295 3.59721318,8.49127796 L1.89947899,8.87492764 C1.47982699,8.97055879 1.12992949,9.29795485 1.02867298,9.74573365 C0.888038932,10.3667736 1.27843904,10.9844383 1.89947899,11.1250724 L3.59721318,11.508722 C3.76259882,12.208517 4.03936662,12.8633092 4.40726528,13.4573474 L3.47683044,14.9323172 C3.24731568,15.2968407 3.23156466,15.7761215 3.47683044,16.1642715 C3.81660229,16.7020561 4.5287731,16.8640665 5.06768276,16.5231696 L6.54265263,15.5927347 C7.13669084,15.9606334 7.79148295,16.2374012 8.49127796,16.4016617 L8.87492764,18.100521 C8.97055879,18.520173 9.29795485,18.8700705 9.74573365,18.971327 C10.3667736,19.1119611 10.9844383,18.721561 11.1250724,18.100521 L11.508722,16.4016617 C12.208517,16.2374012 12.8633092,15.9606334 13.4562223,15.5916096 L14.9323172,16.5231696 C15.2968407,16.7526843 15.7749964,16.7684353 16.1631464,16.5231696 C16.7020561,16.1833977 16.8629414,15.4712269 16.5231696,14.9323172 L15.5916096,13.4562223 C15.9606334,12.8633092 16.2362761,12.208517 16.4016617,11.508722 L18.100521,11.1250724 C18.520173,11.0294412 18.8700705,10.7020452 18.971327,10.2542664 C19.1119611,9.63322641 18.721561,9.01556168 18.100521,8.87492764 L16.4016617,8.49127796 Z"
			})))
		},
		"./src/reddit/icons/svgs/Tag/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				style: e.style,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "M5.14293863,3.38188919 C5.75317178,3.99212234 5.75317178,4.98136473 5.14293863,5.59159788 C4.53270548,6.20183104 3.54346309,6.20183104 2.93322994,5.59159788 C2.32299679,4.98136473 2.32299679,3.99212234 2.93322994,3.38188919 C3.54346309,2.77165604 4.53270548,2.77165604 5.14293863,3.38188919 Z M1.01449569,2.94595786 L1,9.03662212 C1.00035355,9.55457784 1.19162594,10.0654625 1.55790725,10.4317438 L9.89929239,18.7731289 C10.6622606,19.5360972 11.8989904,19.5360972 12.661605,18.7734825 L18.7381272,12.6969604 C19.5007418,11.9343457 19.5007418,10.697616 18.7377736,9.93464773 L10.3963885,1.59326259 C10.0301071,1.22698128 9.54786032,1.00707107 9.02955105,1.00707107 L2.96045355,1 C1.8814086,1 1.01414214,1.86726647 1.01449569,2.94595786 Z"
			})))
		},
		"./src/reddit/icons/svgs/Trash/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, a.a.createElement("g", null, a.a.createElement("g", {
				fill: "inherit"
			}, a.a.createElement("polygon", {
				points: "10,38.8 30,38.8 31.2,10.9 8.7,10.9"
			}), a.a.createElement("path", {
				d: "M27.5,3.8H25c0-1.4-1.1-2.5-2.5-2.5h-5c-1.4,0-2.5,1.1-2.5,2.5h-2.5c-2.8,0-5,2.2-5,5h25C32.5,6,30.3,3.8,27.5,3.8z"
			}))))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = s.n(r);
			const d = e => a.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), a.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = d
		},
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		},
		"./src/reddit/icons/svgs/Wiki/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20"
			}, a.a.createElement("g", {
				fill: "inherit",
				fillRule: "evenodd"
			}, a.a.createElement("path", {
				d: "M13.8711,6 L5.8711,6 C5.5951,6 5.3711,5.776 5.3711,5.5 C5.3711,5.224 5.5951,5 5.8711,5 L13.8711,5 C14.1471,5 14.3711,5.224 14.3711,5.5 C14.3711,5.776 14.1471,6 13.8711,6 M13.8711,9 L5.8711,9 C5.5951,9 5.3711,8.776 5.3711,8.5 C5.3711,8.224 5.5951,8 5.8711,8 L13.8711,8 C14.1471,8 14.3711,8.224 14.3711,8.5 C14.3711,8.776 14.1471,9 13.8711,9 M13.8711,12 L5.8711,12 C5.5951,12 5.3711,11.776 5.3711,11.5 C5.3711,11.224 5.5951,11 5.8711,11 L13.8711,11 C14.1471,11 14.3711,11.224 14.3711,11.5 C14.3711,11.776 14.1471,12 13.8711,12 M13.8711,15 L5.8711,15 C5.5951,15 5.3711,14.776 5.3711,14.5 C5.3711,14.224 5.5951,14 5.8711,14 L13.8711,14 C14.1471,14 14.3711,14.224 14.3711,14.5 C14.3711,14.776 14.1471,15 13.8711,15 M16.0001,2 L4.0001,2 C3.4471,2 3.0001,2.448 3.0001,3 L3.0001,17 C3.0001,17.552 3.4471,18 4.0001,18 L16.0001,18 C16.5531,18 17.0001,17.552 17.0001,17 L17.0001,3 C17.0001,2.448 16.5531,2 16.0001,2"
			})))
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, s) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/layout/row/RightAlign/index.m.less"),
				o = s.n(a);
			t.a = n.a.div("rightAligned", o.a)
		},
		"./src/reddit/models/SubredditModeration/ModerationLog/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = (e, t, s) => `${e}-${((e,t)=>t||e||"1")(s,t)}`
		},
		"./src/reddit/models/SubredditWikiPage/index.ts": function(e, t, s) {
			"use strict";
			var n, a;
			s.d(t, "b", (function() {
					return n
				})), s.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.MayNotView = "MAY_NOT_VIEW", e.PageNotCreated = "PAGE_NOT_CREATED", e.PageNotFound = "PAGE_NOT_FOUND", e.RestrictedPage = "RESTRICTED_PAGE", e.Unknown = "UNKNOWN", e.Valid = "VALID", e.WikiDisabled = "WIKI_DISABLED"
				}(n || (n = {})),
				function(e) {
					e.Inherit = "INHERIT_SUBREDDIT_PERMS", e.Contributors = "CONTRIBUTORS", e.Mods = "MODS"
				}(a || (a = {}))
		},
		"./src/reddit/models/TrafficStats/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "d", (function() {
				return r
			}));
			const n = 97,
				a = 57,
				o = 12;
			var r;
			! function(e) {
				e.TOTAL = "total", e.DESKTOP = "desktop", e.OLD_REDDIT = "oldReddit", e.IOS = "apps", e.ANDROID = "apps", e.MOBILE_WEB = "mWeb"
			}(r || (r = {}))
		},
		"./src/reddit/pages/ModHub/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "_2WsiFpk8Yr5G2mp45qaGCa",
				titleFontH2: "_3oXE2EKQ3PsqyyApE-s3aj",
				titleFontH3: "_17o-6Y7vVLdL6oVMkFWo0m",
				titleFontH4: "uPBfC6MDaNJ-ozFZg2PFk",
				titleFontH5: "si3j-_p1olO8M1E2zoXjC",
				titleFontH6: "_14LzReKyHQwLHa-Rye3bAv",
				metadataFont: "_2NmVHGIdF8GNcMPPaHtwzz",
				flairFont: "D_gevKcOJSKbb6VlvHPj_",
				labelsFont: "_27eE-dU25b8hwKWg4bTqFz",
				actionFont: "_2dfa5IRwlqKVb61Lr36T98",
				smallButtonFont: "_20OTyO3PvAmgnQP4SoJgGt",
				largeButtonFont: "_2nrHVa4dyedAaDcfRLLE5z",
				strongTextFont: "_25hN89q-zD6Y-U11Y_e4aZ",
				tabFont: "_3Bpld0JoC9VmYlZZ5Dyms1",
				buttonFontXS: "_3XRjGQkKxJfyJwAacQAlPW",
				buttonFontXs: "_3XRjGQkKxJfyJwAacQAlPW",
				buttonFontS: "_1isM0DTxp9b21BN1s-ZwZ_",
				buttonFontM: "_3Cg0zFAdAjeMdbc54Phzt9",
				buttonFontL: "_3p-XJ-g7y_gk3t5Fpp2KCj",
				buttonFontXL: "Ed-VD4bfI-1NkJ9RikYYo",
				buttonFontXl: "Ed-VD4bfI-1NkJ9RikYYo",
				bodyFontH1: "bhfIpkByfOrflj2uqeOu3",
				bodyFontH2: "_3xwPD6mwo8KG7WQa3W8njG",
				bodyFontH3: "_1o3ciR8XDGZ_1S7FR7rmrb",
				bodyFontH4: "KyspXVcxKfpH-yrxxQ4EY",
				bodyFontH5: "_20z_x36tiklZi1W-Z3uqvJ",
				bodyFontH6: "_14VGsHSpx6uKHLlJqMng5B",
				bodyFont: "_3ejsRrJq-hN84OvmuolQYo",
				bodyFontSmall: "_1c--mrP_57nHX86Jy6YDjW",
				bodyFontMono: "_2jHXa8pmE696zxLXFfT4I0",
				contentWrapper: "_2Z3MiFrgj2rofHXrH1YVKn",
				isModerator: "_1haViLcso0RRPvkDGZgDLJ",
				BackgroundContainer: "_1XAvW8OS9HO-SVS7BDAIGe",
				backgroundContainer: "_1XAvW8OS9HO-SVS7BDAIGe",
				SubredditLink: "_3u_4BK4_gVwVyX1YIZjFft",
				subredditLink: "_3u_4BK4_gVwVyX1YIZjFft",
				Header: "_12UrKOfuM441n-zHotruas",
				header: "_12UrKOfuM441n-zHotruas",
				SubredditIcon: "_2N81CG8WsdJLudQQiSy8oZ",
				subredditIcon: "_2N81CG8WsdJLudQQiSy8oZ",
				Body: "_3hAOyl8ThaUgCBqiNvN_sN",
				body: "_3hAOyl8ThaUgCBqiNvN_sN"
			}
		},
		"./src/reddit/pages/ModHub/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/lodash/fromPairs.js"),
				a = s.n(n),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/components/ContentGate/index.tsx"),
				p = s("./node_modules/fbt/lib/FbtPublic.js"),
				b = s("./src/lib/assertNever.ts"),
				h = s("./src/lib/constants/index.ts");
			const g = e => {
				switch (e) {
					case h.Zb.Awards:
						return p.fbt._("Awards", null, {
							hk: "EiSXW"
						});
					case h.Zb.Banned:
						return p.fbt._("Banned", null, {
							hk: "35R8OD"
						});
					case h.Zb.Muted:
						return p.fbt._("Muted", null, {
							hk: "f2nJu"
						});
					case h.Zb.ContentControls:
						return p.fbt._("Content controls", null, {
							hk: "H1yxv"
						});
					case h.Zb.Contributors:
						return p.fbt._("Approved", null, {
							hk: "180AS9"
						});
					case h.Zb.Moderators:
						return p.fbt._("Moderators", null, {
							hk: "4qdV8t"
						});
					case h.Zb.SubredditRules:
						return p.fbt._("Rules", null, {
							hk: "2SNdd8"
						});
					case h.Zb.Removal:
						return p.fbt._("Removal reasons", null, {
							hk: "1smDUM"
						});
					case h.Zb.Modqueue:
						return p.fbt._("Mod queue", null, {
							hk: "yEBGb"
						});
					case h.Zb.Reports:
						return p.fbt._("Reports", null, {
							hk: "4Ctcb1"
						});
					case h.Zb.Spam:
						return p.fbt._("Spam", null, {
							hk: "1D73Vp"
						});
					case h.Zb.Unmoderated:
						return p.fbt._("Unmoderated", null, {
							hk: "3TOaeD"
						});
					case h.Zb.Edited:
						return p.fbt._("Edited", null, {
							hk: "OLtvW"
						});
					case h.Zb.ChatSettings:
						return p.fbt._("Chat settings", null, {
							hk: "3gycCw"
						});
					case h.Zb.Modlog:
						return p.fbt._("Mod log", null, {
							hk: "3uy7LL"
						});
					case h.Zb.Flair:
						return p.fbt._("Grant user flair", null, {
							hk: "2B8sTJ"
						});
					case h.Zb.CommunitySettings:
						return p.fbt._("Community settings", null, {
							hk: "XbHzi"
						});
					case h.Zb.Emojis:
						return p.fbt._("Emojis", null, {
							hk: "3mPnxe"
						});
					case h.Zb.UserFlair:
						return p.fbt._("User flair", null, {
							hk: "3kleCv"
						});
					case h.Zb.PostFlair:
						return p.fbt._("Post flair", null, {
							hk: "2Y1FKb"
						});
					case h.Zb.Badges:
						return p.fbt._("Badges", null, {
							hk: "3vM0lt"
						});
					case h.Zb.Emotes:
						return p.fbt._("Emotes", null, {
							hk: "2Ivxxq"
						});
					case h.Zb.Wiki:
					case h.Zb.WikiContributors:
					case h.Zb.WikiBanned:
						return p.fbt._("Wiki pages", null, {
							hk: "WdSXv"
						});
					case h.Zb.Traffic:
						return p.fbt._("Traffic stats", null, {
							hk: "3mcw71"
						});
					case h.Zb.ScheduledPostContent:
					case h.Zb.SubredditContent:
						return p.fbt._("Scheduled posts", null, {
							hk: "19KZjq"
						});
					case h.Zb.EventPostContent:
						return p.fbt._("Event posts", null, {
							hk: "3ejc42"
						});
					case h.Zb.Streaming:
						return p.fbt._("Broadcasting", null, {
							hk: "1Cz44z"
						});
					case h.Zb.Predictions:
						return p.fbt._("Predictions", null, {
							hk: "1yASCC"
						});
					default:
						return Object(b.a)(e)
				}
			};
			var f = s("./src/reddit/components/SubredditIcon/index.tsx"),
				x = s("./src/reddit/components/TrackingHelper/index.tsx"),
				E = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/controls/InternalLink/index.tsx"),
				_ = s("./src/reddit/helpers/canAccessModerationPage/index.ts"),
				C = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				k = s("./src/reddit/helpers/trackers/moderationPages.ts"),
				y = s("./src/reddit/helpers/trackers/modHub.ts"),
				S = s("./src/reddit/models/ModQueue/index.ts"),
				O = s("./src/reddit/selectors/moderatorPermissions.ts"),
				j = s("./src/reddit/selectors/postCreations.ts"),
				w = s("./src/reddit/selectors/profile.ts"),
				I = s("./src/reddit/selectors/streamingModSettings.ts"),
				N = s("./src/reddit/selectors/subreddit.ts"),
				T = s("./src/reddit/selectors/user.ts"),
				M = s("./src/reddit/components/ModHub/Content/index.tsx"),
				P = s("./src/reddit/components/ModHub/Content/NoPermissions.tsx"),
				R = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				F = s("./src/reddit/components/ModHub/Content/WelcomeMessage.m.less"),
				A = s.n(F);
			const D = m.a.wrapped(R.a, "ModerateIcon", A.a),
				L = m.a.div("ModHubWelcomeMessage", A.a);
			var U = e => r.a.createElement(L, null, r.a.createElement(D, null), p.fbt._("Welcome to the mod tools for {subredditName}", [p.fbt._param("subredditName", e.subredditDisplayText)], {
					hk: "7Usff"
				})),
				B = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/config.ts")),
				H = s("./node_modules/react-router-redux/es/index.js"),
				W = s("./src/reddit/components/EmailInvitePaintedDoor/loader.tsx"),
				Z = s("./src/reddit/contexts/NavbarExp.ts"),
				V = s("./src/reddit/featureFlags/index.ts"),
				q = s("./src/reddit/helpers/localStorage/index.ts"),
				G = s("./src/reddit/helpers/trackers/communitySettings.ts"),
				z = s("./src/reddit/helpers/trackers/emailInvite.ts"),
				K = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				Q = s("./src/reddit/icons/fonts/index.tsx"),
				J = s("./src/reddit/routes/moderationPages/index.ts"),
				X = s("./src/reddit/selectors/experiments/emailInvite.ts"),
				Y = s("./src/reddit/components/StructuredStyles/Breadcrumbs/index.tsx"),
				$ = s("./src/reddit/components/ModHub/ModHubNav/index.m.less"),
				ee = s.n($);

			function te() {
				return (te = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var se = e => r.a.createElement("div", te({
					className: Object(l.a)(ee.a.breadcrumb, e.className)
				}, e), r.a.createElement("button", {
					className: ee.a.breadcrumbButton
				}, r.a.createElement(Y.a, null), p.fbt._("Back to mod tools", null, {
					hk: "4udiKO"
				}))),
				ne = s("./src/reddit/components/ModHub/ModHubNav/NavItem.tsx"),
				ae = s("./src/reddit/actions/modal.ts"),
				oe = s("./src/higherOrderComponents/asModal/index.tsx"),
				re = s("./src/reddit/components/CharacterCountdown/index.tsx"),
				ie = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				de = s("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				le = s("./src/reddit/constants/wiki.ts"),
				ce = s("./src/reddit/controls/Button/index.tsx"),
				me = s("./src/reddit/controls/TextButton/index.tsx"),
				ue = s("./src/reddit/helpers/wiki/buildWikiPagesTree.ts"),
				pe = s("./src/reddit/helpers/wiki/validatePageName.ts"),
				be = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				he = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				ge = s("./src/reddit/controls/Dropdown/index.tsx"),
				fe = s("./src/reddit/controls/Dropdown/Row.tsx"),
				xe = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				Ee = s("./src/reddit/components/Wiki/CreateNewWikiPageModal/index.m.less"),
				ve = s.n(Ee);
			class _e extends r.a.Component {
				constructor(e) {
					super(e), this.onToggleDropdown = () => {
						this.setState({
							isDropdownOpen: !this.state.isDropdownOpen
						})
					}, this.onSelectParentPage = e => {
						this.props.onSelectParentPage(e), this.onToggleDropdown()
					}, this.state = {
						isDropdownOpen: !1
					}
				}
				render() {
					const {
						pageTree: e,
						parentPageName: t
					} = this.props, {
						isDropdownOpen: s
					} = this.state, n = p.fbt._("None", null, {
						hk: "3FT0YQ"
					});
					return r.a.createElement("div", {
						className: ve.a.dropdownContainer
					}, r.a.createElement("button", {
						className: ve.a.dropdownTarget,
						onClick: this.onToggleDropdown
					}, r.a.createElement("div", {
						className: ve.a.targetText
					}, t || n), r.a.createElement(xe.b, null)), s && r.a.createElement(ge.a, {
						className: ve.a.dropdown
					}, r.a.createElement(fe.b, {
						className: ve.a.dropdownRow,
						displayText: n,
						onClick: () => this.onSelectParentPage(void 0)
					}), e.map(e => e.depth >= le.c ? null : le.f.has(e.path.split("/")[0]) ? null : r.a.createElement(fe.b, {
						className: ve.a.dropdownRow,
						displayText: e.path,
						key: e.path,
						onClick: () => this.onSelectParentPage(e.path)
					}))))
				}
			}
			var Ce = _e;
			const ke = e => {
				switch (e) {
					case pe.a.InvalidPageName:
						return p.fbt._("Invalid page name", null, {
							hk: "1gQvCb"
						});
					case pe.a.MaxLengthExceed:
						return p.fbt._("Name exceeds character limit", null, {
							hk: "RDoIC"
						});
					case pe.a.PageAlreadyExists:
						return p.fbt._("That page already exists", null, {
							hk: "xEyyR"
						});
					case pe.a.RestrictedPageName:
						return p.fbt._("Restricted page name", null, {
							hk: "Bjv5o"
						})
				}
			};
			class ye extends r.a.Component {
				constructor(e) {
					super(e), this.onChangePageName = e => {
						this.setState({
							partialPageName: e.currentTarget.value
						})
					}, this.onSelectParentPage = e => {
						this.setState({
							parentPageName: e
						})
					}, this.getNewPagePath = () => {
						let e = "";
						return this.state.parentPageName && (e += `${this.state.parentPageName}/`), (e += `${this.state.partialPageName}`).toLowerCase()
					}, this.state = {
						partialPageName: "",
						parentPageName: void 0
					}
				}
				hasError() {
					const {
						pageTree: e
					} = this.props, {
						partialPageName: t
					} = this.state;
					return Object(pe.c)(t) || Object(pe.b)(this.getNewPagePath(), e)
				}
				render() {
					const {
						props: e,
						state: t
					} = this, s = this.hasError();
					return r.a.createElement(ie.d, {
						className: ve.a.modalBody
					}, r.a.createElement(ie.h, null, r.a.createElement(he.a, null, r.a.createElement(ie.p, null, p.fbt._("Create a new wiki page", null, {
						hk: "V7Jnm"
					})), r.a.createElement(me.a, {
						onClick: e.toggleModal
					}, r.a.createElement(ie.b, null)))), r.a.createElement("div", {
						className: ve.a.notice
					}, r.a.createElement(be.a, null), p.fbt._("Parent page and page URL cannot be edited once created", null, {
						hk: "20D6uz"
					})), r.a.createElement(ie.k, null, r.a.createElement("div", {
						className: ve.a.sectionTitle
					}, p.fbt._("Parent page", null, {
						hk: "1FeKiT"
					})), r.a.createElement(Ce, {
						onSelectParentPage: this.onSelectParentPage,
						pageTree: Object(ue.b)(e.pageTree || []),
						parentPageName: t.parentPageName
					}), r.a.createElement("div", {
						className: ve.a.sectionTitle
					}, p.fbt._("Page URL", null, {
						hk: "WL8sn"
					})), r.a.createElement(de.d, {
						placeholder: p.fbt._("ex: rules", null, {
							hk: "J0qH1"
						}),
						onChange: this.onChangePageName,
						value: t.partialPageName
					}), r.a.createElement(re.a, {
						text: this.getNewPagePath(),
						maxChars: le.d
					}), r.a.createElement("div", {
						className: ve.a.errorText
					}, t.partialPageName && s ? ke(s) : null)), r.a.createElement(ie.f, null, r.a.createElement(ie.a, {
						onClick: e.toggleModal
					}, p.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(ce.k, {
						disabled: !t.partialPageName || !!s,
						className: ve.a.primaryButton,
						to: `${e.subredditUrl}about/wiki/create/${this.getNewPagePath()}`
					}, p.fbt._("Create", null, {
						hk: "2W0PL1"
					}))))
				}
			}
			var Se = Object(oe.a)(ye),
				Oe = s("./src/reddit/selectors/activeModalId.ts"),
				je = s("./src/reddit/selectors/subredditWiki.ts"),
				we = s("./node_modules/lodash/times.js"),
				Ie = s.n(we),
				Ne = s("./src/reddit/components/ModHub/ModHubNav/WikiNavPanel/index.m.less"),
				Te = s.n(Ne);
			class Me extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.containerRef = r.a.createRef()
				}
				componentDidMount() {
					this.scrollToActiveItemIfNeeded()
				}
				scrollToActiveItemIfNeeded() {
					const e = this.containerRef.current,
						t = e && e.getElementsByClassName(Te.a.mActive)[0];
					if (!e || !t) return;
					const s = e.getBoundingClientRect(),
						n = t.getBoundingClientRect();
					n.top >= s.top && n.bottom <= s.bottom || t.scrollIntoView()
				}
				render() {
					const {
						activePageName: e,
						baseUrl: t,
						directory: s
					} = this.props, n = Object(ue.b)(s && s.pageTree || []);
					return r.a.createElement("div", {
						ref: this.containerRef,
						className: Te.a.contentTree
					}, n.map(s => {
						const n = s.path === e;
						return r.a.createElement(v.a, {
							key: s.path,
							className: Te.a.pageNavLink,
							to: `${t}/${s.path}`
						}, r.a.createElement("div", {
							className: Object(l.a)(Te.a.pageNavItem, {
								[Te.a.mActive]: n,
								[Te.a.mExists]: s.isPagePresent
							})
						}, Ie()(s.depth, () => r.a.createElement("div", {
							className: Te.a.indentLine
						})), r.a.createElement("span", {
							className: Te.a.itemText
						}, `/${s.name}`)))
					}))
				}
			}
			const Pe = Object(d.c)({
				directory: (e, t) => Object(je.b)(e, {
					subredditName: t.subreddit.name
				}),
				isCreateWikiPageModalOpen: e => "CreateWikiPageModal" === Object(Oe.a)(e)
			});
			class Re extends r.a.Component {
				constructor() {
					super(...arguments), this.onToggleCreateWikiModal = () => {
						this.props.toggleCreateWikiModal()
					}
				}
				render() {
					const {
						directory: e,
						isCreateWikiPageModalOpen: t,
						subreddit: s,
						toggleCreateWikiModal: n,
						pageLayer: a
					} = this.props;
					if (!a) return null;
					const {
						urlParams: o
					} = a, {
						wikiPageName: i,
						wikiSubRoute: d,
						pageName: l
					} = o;
					return r.a.createElement("div", {
						className: Te.a.wikiNavPanel
					}, r.a.createElement(ce.i, {
						className: Te.a.primaryButton,
						onClick: this.onToggleCreateWikiModal
					}, p.fbt._("Create new page", null, {
						hk: "35WDuL"
					})), r.a.createElement(Me, {
						activePageName: i,
						baseUrl: `${s.url}about/wiki`,
						directory: e
					}), r.a.createElement("div", {
						className: Te.a.footer
					}, r.a.createElement(ne.b, {
						isActive: d === le.m.Revisions && !i,
						label: p.fbt._("Recent wiki revisions", null, {
							hk: "278VnD"
						}),
						path: `${s.url}about/wiki/revisions`
					}), r.a.createElement(ne.b, {
						isActive: l === h.Zb.WikiContributors,
						label: p.fbt._("Add wiki contributors", null, {
							hk: "1XHd90"
						}),
						path: `${s.url}about/wikicontributors`
					}), r.a.createElement(ne.b, {
						isActive: l === h.Zb.WikiBanned,
						label: p.fbt._("Ban wiki contributors", null, {
							hk: "3IVNKp"
						}),
						path: `${s.url}about/wikibanned`
					}), r.a.createElement(ne.b, {
						label: p.fbt._("Wiki settings", null, {
							hk: "1Jctxf"
						}),
						path: `${s.url}about/edit?page=wikis`
					})), t && r.a.createElement(Se, {
						pageTree: e && e.pageTree,
						subredditUrl: s.url,
						toggleModal: n,
						withOverlay: !0
					}))
				}
			}
			var Fe = Object(E.t)()(Object(i.b)(Pe, e => ({
				toggleCreateWikiModal: () => e(Object(ae.i)("CreateWikiPageModal"))
			}))(Re));
			const Ae = Object(d.c)({
				isBadgesAndEmotesEnabled: V.d.spCustomBadgesAndEmotes,
				isContentTagEnabled: (e, t) => !!e.subreddits.survey[t.subreddit.id],
				isEligibleForScheduledPosts: V.d.scheduledPosts,
				isEmailInviteExperimentEnabled: X.a,
				isBroadcastingEnabled: (e, {
					subreddit: t
				}) => Object(I.c)(e, t.id),
				isTournamentsEnabled: (e, {
					subreddit: t
				}) => Object(N.M)(e, {
					subredditId: t.id
				})
			});
			class De extends r.a.Component {
				constructor(e, t) {
					super(e, t), this.trackClick = e => this.props.sendEvent(y.b(e)), this.trackCommunitySettingsNavItemClick = e => this.props.sendEvent(Object(G.a)(e)), this.onClickAwards = () => this.trackClick("awards"), this.onClickStreaming = () => this.trackClick("streaming"), this.onClickModQueue = () => this.trackClick("mod_queue"), this.onClickReports = () => this.trackClick("reports"), this.onClickSpam = () => this.trackClick("spam"), this.onClickEdited = () => this.trackClick("edited"), this.onClickUnmoderated = () => this.trackClick("unmoderated"), this.onClickBannedUsers = () => this.trackClick("ban_users"), this.onClickMutedUsers = () => this.trackClick("mute_users"), this.onClickApprovedSubmitters = () => this.trackClick("approved_submitters"), this.onClickEmojis = () => this.trackClick("emoji"), this.onClickModerators = () => this.trackClick("moderators"), this.onClickChatSettings = () => this.trackClick("chat_settings"), this.onClickCommunitySettings = () => this.trackClick("community_settings"), this.onClickCommunityAppearance = () => this.trackClick("community_appearance"), this.onClickModMail = () => this.trackClick("mod_mail"), this.onClickRemovalReasons = () => this.trackClick("removal_reasons"), this.onClickRules = () => this.trackClick("rules"), this.onClickPostRequirements = () => this.trackClick("post_requirements"), this.onClickAutomodConfig = () => this.trackClick("automod_config"), this.onClickWikiPages = () => this.trackClick("wiki"), this.onClickTraffic = () => this.trackClick("traffic"), this.onClickModLog = () => this.trackClick("mod_log"), this.onClickModSupport = () => this.trackClick("r_mod_support"), this.onClickModHelp = () => this.trackClick("mod_help"), this.onClickContactReddit = () => this.trackClick("contact_reddit"), this.onClickModGuidelines = () => this.trackClick("mod_guidelines"), this.onClickModHelpCenter = () => this.trackClick("mod_help_center"), this.onClickPostFlair = () => this.trackClick("post_flair"), this.onClickUserFlair = () => this.trackClick("user_flair"), this.onClickGrantUserFlair = () => this.trackClick("grant_user_flair"), this.onClickBadges = () => this.trackClick("badges"), this.onClickEmotes = () => this.trackClick("emotes"), this.onClickScheduledPosts = () => this.props.sendEvent(Object(K.k)()), this.onClickEventPosts = () => this.props.sendEvent(Object(K.f)()), this.onClickPredictions = () => this.trackClick("predictions"), this.onGoToModHub = () => {
						const e = this.props.moderatorPermissions && this.props.moderatorPermissions.posts,
							t = `${this.props.subreddit.url}about/`,
							s = e ? `${t}modqueue` : t;
						this.props.pushUrl(s)
					}, this.onClickInviteViaEmail = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(z.a)("mod_hub_nav")), this.setState({
							showEmailInvitePaintedDoor: !0
						})
					}, this.onCloseInviteViaEmailModal = () => {
						this.setState({
							showEmailInvitePaintedDoor: !1
						})
					}, this.state = {
						locationSettingSeen: !0,
						showEmailInvitePaintedDoor: !1
					}
				}
				componentDidMount() {
					this.setState({
						locationSettingSeen: Object(q.D)("location")
					})
				}
				render() {
					const {
						props: e
					} = this, t = e.isEligibleForScheduledPosts && !e.isProfile || e.isTournamentsEnabled;
					switch (e.pageName) {
						case h.Zb.CommunitySettings: {
							const t = !e.subpageName || !Object.values(h.ac).includes(e.subpageName);
							return e.isProfile ? null : r.a.createElement(Z.a.Consumer, null, s => r.a.createElement("div", {
								className: Object(l.a)(ee.a.navContainer, {
									[ee.a.navContainerExp]: s
								})
							}, r.a.createElement(se, {
								onClick: this.onGoToModHub
							}), r.a.createElement(ne.b, {
								label: p.fbt._("Community", null, {
									hk: "1EIoJe"
								}),
								onClick: () => this.trackCommunitySettingsNavItemClick(h.ac.Community),
								isNew: !0,
								path: `${e.subreddit.url}about/edit?page=community`,
								isActive: t || e.subpageName === h.ac.Community
							}), r.a.createElement(ne.b, {
								label: p.fbt._("Safety and Privacy", null, {
									hk: "3E0TnI"
								}),
								onClick: () => this.trackCommunitySettingsNavItemClick(h.ac.Safety),
								path: `${e.subreddit.url}about/edit?page=safety`,
								isActive: e.subpageName === h.ac.Safety
							}), r.a.createElement(ne.b, {
								label: p.fbt._("Posts and Comments", null, {
									hk: "2jt4ea"
								}),
								onClick: () => this.trackCommunitySettingsNavItemClick(h.ac.Posts),
								path: `${e.subreddit.url}about/edit?page=posts`,
								isActive: e.subpageName === h.ac.Posts
							}), r.a.createElement(ne.b, {
								label: p.fbt._("Wikis", null, {
									hk: "2X1iz1"
								}),
								onClick: () => this.trackCommunitySettingsNavItemClick(h.ac.Wikis),
								path: `${e.subreddit.url}about/edit?page=wikis`,
								isActive: e.subpageName === h.ac.Wikis
							}), e.isContentTagEnabled && r.a.createElement(ne.b, {
								label: p.fbt._("Content Tag", null, {
									hk: "VuxaQ"
								}),
								isNew: !0,
								onClick: () => this.trackCommunitySettingsNavItemClick(h.ac.ContentTag),
								path: `${e.subreddit.url}about/edit?page=content_tag`,
								isActive: e.subpageName === h.ac.ContentTag
							}), r.a.createElement(ne.b, {
								label: p.fbt._("Notifications", null, {
									hk: "SRNLx"
								}),
								onClick: () => this.trackCommunitySettingsNavItemClick(h.ac.Notifications),
								path: `${e.subreddit.url}about/edit?page=notifications`,
								isActive: e.subpageName === h.ac.Notifications
							})))
						}
						case h.Zb.Wiki:
						case h.Zb.WikiContributors:
						case h.Zb.WikiBanned:
							return e.isProfile ? null : r.a.createElement(Z.a.Consumer, null, t => r.a.createElement("div", {
								className: Object(l.a)(ee.a.navContainer, ee.a.wikiNavContainer, {
									[ee.a.navContainerExp]: t
								})
							}, r.a.createElement(se, {
								onClick: this.onGoToModHub
							}), e.moderatorPermissions.wiki && r.a.createElement(Fe, {
								subreddit: e.subreddit
							})));
						default:
							return r.a.createElement(Z.a.Consumer, null, s => r.a.createElement("div", {
								className: Object(l.a)(ee.a.navContainer, {
									[ee.a.navContainerExp]: s
								})
							}, e.moderatorPermissions.posts && !e.isProfile && r.a.createElement("div", {
								className: ee.a.navSection
							}, r.a.createElement("div", {
								className: ee.a.sectionHeader
							}, r.a.createElement(Q.a, {
								name: "mod_queue",
								className: ee.a.iconStyles
							}), p.fbt._("Queues", null, {
								hk: "2BbIZV"
							})), r.a.createElement(ne.b, {
								isActive: e.pageName === h.Zb.Modqueue,
								label: g(h.Zb.Modqueue),
								onClick: this.onClickModQueue,
								path: `${e.subreddit.url}about/modqueue`
							}), r.a.createElement(ne.b, {
								isActive: e.pageName === h.Zb.Reports,
								label: g(h.Zb.Reports),
								onClick: this.onClickReports,
								path: `${e.subreddit.url}about/reports`
							}), r.a.createElement(ne.b, {
								isActive: e.pageName === h.Zb.Spam,
								label: g(h.Zb.Spam),
								onClick: this.onClickSpam,
								path: `${e.subreddit.url}about/spam`
							}), r.a.createElement(ne.b, {
								isActive: e.pageName === h.Zb.Edited,
								label: g(h.Zb.Edited),
								onClick: this.onClickEdited,
								path: `${e.subreddit.url}about/edited`
							}), r.a.createElement(ne.b, {
								isActive: e.pageName === h.Zb.Unmoderated,
								label: g(h.Zb.Unmoderated),
								onClick: this.onClickUnmoderated,
								path: `${e.subreddit.url}about/unmoderated`
							})), !e.isProfile && r.a.createElement("div", {
								className: ee.a.navSection
							}, r.a.createElement("div", {
								className: ee.a.sectionHeader
							}, r.a.createElement(Q.a, {
								name: "user",
								className: ee.a.iconStyles
							}), p.fbt._("User management", null, {
								hk: "3G4BgD"
							})), e.moderatorPermissions.access && r.a.createElement(r.a.Fragment, null, r.a.createElement(ne.b, {
								isActive: e.pageName === h.Zb.Banned,
								label: g(h.Zb.Banned),
								onClick: this.onClickBannedUsers,
								path: `${e.subreddit.url}about/banned`
							}), e.moderatorPermissions.mail && r.a.createElement(ne.b, {
								isActive: e.pageName === h.Zb.Muted,
								label: g(h.Zb.Muted),
								onClick: this.onClickMutedUsers,
								path: `${e.subreddit.url}about/muted`
							}), r.a.createElement(ne.b, {
								isActive: e.pageName === h.Zb.Contributors,
								label: g(h.Zb.Contributors),
								onClick: this.onClickApprovedSubmitters,
								path: `${e.subreddit.url}about/contributors`
							})), r.a.createElement(ne.b, {
								isActive: e.pageName === h.Zb.Moderators,
								label: g(h.Zb.Moderators),
								onClick: this.onClickModerators,
								path: `${e.subreddit.url}about/moderators`
							}), e.isEmailInviteExperimentEnabled && r.a.createElement(ne.b, {
								label: p.fbt._("Bulk Email Invite", null, {
									hk: "3GTIEm"
								}),
								isNew: !0,
								onClick: this.onClickInviteViaEmail
							}), this.state.showEmailInvitePaintedDoor && r.a.createElement(W.a, {
								onClose: this.onCloseInviteViaEmailModal,
								sendEvent: e.sendEvent
							})), (e.moderatorPermissions.flair || e.moderatorPermissions.config) && !e.isProfile && r.a.createElement("div", {
								className: ee.a.navSection
							}, r.a.createElement("div", {
								className: ee.a.sectionHeader
							}, r.a.createElement(Q.a, {
								name: "tag",
								className: ee.a.iconStyles
							}), e.isBadgesAndEmotesEnabled ? p.fbt._("Badges, flair & emojis", null, {
								hk: "1FuDnm"
							}) : p.fbt._("Flair & emojis", null, {
								hk: "42b2AJ"
							})), e.moderatorPermissions.flair && r.a.createElement(ne.b, {
								isActive: e.pageName === h.Zb.Flair,
								label: g(h.Zb.Flair),
								onClick: this.onClickGrantUserFlair,
								path: `${e.subreddit.url}about/flair`
							}), e.moderatorPermissions.config && r.a.createElement(ne.b, {
								isActive: e.pageName === h.Zb.Emojis,
								label: g(h.Zb.Emojis),
								onClick: this.onClickEmojis,
								path: `${e.subreddit.url}about/emojis`
							}), e.moderatorPermissions.flair && r.a.createElement(ne.b, {
								isActive: e.pageName === h.Zb.UserFlair,
								label: g(h.Zb.UserFlair),
								onClick: this.onClickUserFlair,
								path: `${e.subreddit.url}about/userflair`
							}), e.moderatorPermissions.flair && e.moderatorPermissions.config && r.a.createElement(ne.b, {
								isActive: e.pageName === h.Zb.PostFlair,
								label: g(h.Zb.PostFlair),
								onClick: this.onClickPostFlair,
								path: `${e.subreddit.url}about/postflair`
							}), e.isBadgesAndEmotesEnabled && r.a.createElement(r.a.Fragment, null, r.a.createElement(ne.b, {
								isActive: e.pageName === h.Zb.Badges,
								label: g(h.Zb.Badges),
								onClick: this.onClickBadges,
								path: `${e.subreddit.url}about/badges`
							}), r.a.createElement(ne.b, {
								isActive: e.pageName === h.Zb.Emotes,
								label: g(h.Zb.Emotes),
								onClick: this.onClickEmotes,
								path: `${e.subreddit.url}about/emotes`
							}))), (e.moderatorPermissions.config || e.moderatorPermissions.posts) && !e.isProfile && r.a.createElement("div", {
								className: ee.a.navSection
							}, r.a.createElement("div", {
								className: ee.a.sectionHeader
							}, r.a.createElement(Q.a, {
								name: "rules",
								className: ee.a.iconStyles
							}), p.fbt._("Rules and regulations", null, {
								hk: "QAksk"
							})), r.a.createElement(ne.b, {
								isActive: e.pageName === h.Zb.SubredditRules,
								label: g(h.Zb.SubredditRules),
								onClick: this.onClickRules,
								path: `${e.subreddit.url}about/rules`
							}), e.moderatorPermissions.posts && r.a.createElement(ne.b, {
								isActive: e.pageName === h.Zb.Removal,
								label: g(h.Zb.Removal),
								onClick: this.onClickRemovalReasons,
								path: `${e.subreddit.url}about/removal`
							}), e.moderatorPermissions.config && r.a.createElement(r.a.Fragment, null, r.a.createElement(ne.b, {
								isActive: e.pageName === h.Zb.ContentControls,
								label: g(h.Zb.ContentControls),
								onClick: this.onClickPostRequirements,
								path: `${e.subreddit.url}about/settings`
							}), r.a.createElement(ne.b, {
								label: p.fbt._("Automod", null, {
									hk: "1IngsO"
								}),
								onClick: this.onClickAutomodConfig,
								path: `${e.subreddit.url}about/wiki/config/automoderator`
							}))), t && r.a.createElement("div", {
								className: ee.a.navSection
							}, r.a.createElement("div", {
								className: ee.a.sectionHeader
							}, r.a.createElement(Q.a, {
								name: "list_bulleted",
								className: ee.a.iconStyles
							}), p.fbt._("Content", null, {
								hk: "IAh5R"
							})), e.isEligibleForScheduledPosts && !e.isProfile && r.a.createElement(r.a.Fragment, null, r.a.createElement(ne.b, {
								isActive: e.pageName === h.Zb.ScheduledPostContent,
								label: p.fbt._("Scheduled posts", null, {
									hk: "11S6dN"
								}),
								onClick: this.onClickScheduledPosts,
								path: Object(J.e)(e.subreddit.displayText),
								isNew: !0
							}), r.a.createElement(ne.b, {
								isActive: e.pageName === h.Zb.EventPostContent,
								label: p.fbt._("Event posts", null, {
									hk: "3D98hc"
								}),
								onClick: this.onClickEventPosts,
								path: Object(J.b)(e.subreddit.displayText),
								isBeta: !0
							})), e.isTournamentsEnabled && r.a.createElement(ne.b, {
								isActive: e.pageName === h.Zb.Predictions,
								label: p.fbt._("Predictions", null, {
									hk: "Serjr"
								}),
								onClick: this.onClickPredictions,
								path: Object(J.d)(e.subreddit.displayText),
								isNew: !0
							})), (e.moderatorPermissions.config || e.moderatorPermissions.wiki) && r.a.createElement("div", {
								className: ee.a.navSection
							}, r.a.createElement("div", {
								className: ee.a.sectionHeader
							}, r.a.createElement(Q.a, {
								name: "settings",
								className: ee.a.iconStyles
							}), p.fbt._("Other", null, {
								hk: "ST5RE"
							})), r.a.createElement(ne.b, {
								isActive: e.pageName === h.Zb.Awards,
								label: p.fbt._("Awards", null, {
									hk: "48U4Du"
								}),
								onClick: this.onClickAwards,
								path: `${e.subreddit.url}about/awards`
							}), e.moderatorPermissions.config && !e.isProfile && e.isBroadcastingEnabled && r.a.createElement(ne.b, {
								label: g(h.Zb.Streaming),
								onClick: this.onClickStreaming,
								path: `${e.subreddit.url}about/broadcasting`,
								isNew: !0
							}), e.moderatorPermissions.wiki && !e.isProfile && r.a.createElement(ne.b, {
								label: p.fbt._("Wiki pages", null, {
									hk: "wShFl"
								}),
								onClick: this.onClickWikiPages,
								path: `${B.a.redditUrl}${e.subreddit.url}about/wiki/index`
							}), e.moderatorPermissions.config && !e.isProfile && r.a.createElement(ne.b, {
								label: p.fbt._("Community settings", null, {
									hk: "2xOUK6"
								}),
								onClick: this.onClickCommunitySettings,
								isNew: !this.state.locationSettingSeen,
								path: `${e.subreddit.url}about/edit?page=community`,
								showInboundArrow: !0
							}), e.moderatorPermissions.config && !e.isProfile && r.a.createElement(ne.b, {
								label: p.fbt._("Community appearance", null, {
									hk: "3AHttA"
								}),
								path: `${e.subreddit.url}?styling=true`,
								onClick: this.onClickCommunityAppearance,
								showInboundArrow: !0
							})), e.moderatorPermissions.mail && !e.isProfile && r.a.createElement("div", {
								className: ee.a.navSection
							}, r.a.createElement("div", {
								className: ee.a.sectionHeader
							}, r.a.createElement(Q.a, {
								name: "mod_mail",
								className: ee.a.iconStyles
							}), p.fbt._("Modmail", null, {
								hk: "Eh4Vu"
							})), r.a.createElement(ne.b, {
								isExternal: !0,
								label: p.fbt._("Modmail", null, {
									hk: "3Xkgqo"
								}),
								onClick: this.onClickModMail,
								path: "https://mod.reddit.com"
							})), e.moderatorPermissions.config && !e.isProfile && r.a.createElement("div", {
								className: ee.a.navSection
							}, r.a.createElement("div", {
								className: ee.a.sectionHeader
							}, r.a.createElement(Q.a, {
								name: "chat",
								className: ee.a.iconStyles
							}), p.fbt._("Chat", null, {
								hk: "4mJ2vR"
							})), r.a.createElement(ne.b, {
								isActive: e.pageName === h.Zb.ChatSettings,
								label: g(h.Zb.ChatSettings),
								onClick: this.onClickChatSettings,
								path: `${e.subreddit.url}about/chat`
							})), !e.isProfile && r.a.createElement("div", {
								className: ee.a.navSection
							}, r.a.createElement("div", {
								className: ee.a.sectionHeader
							}, r.a.createElement(Q.a, {
								name: "statistics",
								className: ee.a.iconStyles
							}), p.fbt._("Community activity", null, {
								hk: "1vGSer"
							})), r.a.createElement(ne.b, {
								isActive: e.pageName === h.Zb.Traffic,
								label: p.fbt._("Traffic stats", null, {
									hk: "vw5CU"
								}),
								onClick: this.onClickTraffic,
								path: `${e.subreddit.url}about/traffic`
							}), r.a.createElement(ne.b, {
								isActive: e.pageName === h.Zb.Modlog,
								label: g(h.Zb.Modlog),
								onClick: this.onClickModLog,
								path: `${e.subreddit.url}about/log`
							})), r.a.createElement("div", {
								className: ee.a.navSection
							}, r.a.createElement("div", {
								className: ee.a.sectionHeader
							}, r.a.createElement(Q.a, {
								name: "help",
								className: ee.a.iconStyles
							}), p.fbt._("Mod help center", null, {
								hk: "256YE"
							})), r.a.createElement(ne.b, {
								isExternal: !0,
								label: p.fbt._("Mod help center", null, {
									hk: "4dCwWU"
								}),
								onClick: this.onClickModHelpCenter,
								path: B.a.redditModHelpUrl
							}), r.a.createElement(ne.b, {
								isExternal: !0,
								label: p.fbt._("Moderator guidelines", null, {
									hk: "3marKI"
								}),
								onClick: this.onClickModGuidelines,
								path: "https://www.reddit.com/help/healthycommunities/"
							}), r.a.createElement(ne.b, {
								isExternal: !0,
								label: "r/ModSupport",
								onClick: this.onClickModSupport,
								path: "/r/ModSupport/"
							}), r.a.createElement(ne.b, {
								isExternal: !0,
								label: "r/ModHelp",
								onClick: this.onClickModHelp,
								path: "/r/modhelp/"
							}), r.a.createElement(ne.b, {
								isExternal: !0,
								label: p.fbt._("Contact Reddit", null, {
									hk: "2NRBBx"
								}),
								onClick: this.onClickContactReddit,
								path: "https://www.reddithelp.com/hc/en-us/requests/new"
							}))))
					}
				}
			}
			var Le = Object(i.b)(Ae, e => ({
					pushUrl: t => e(Object(H.b)(t))
				}))(Object(x.c)(De)),
				Ue = s("./src/reddit/pages/ModHub/index.m.less"),
				Be = s.n(Ue);
			const He = m.a.div("BackgroundContainer", Be.a),
				We = m.a.wrapped(v.a, "SubredditLink", Be.a),
				Ze = m.a.div("Header", Be.a),
				Ve = m.a.wrapped(f.b, "SubredditIcon", Be.a),
				qe = m.a.div("Body", Be.a),
				Ge = Object(d.c)({
					contentGateInfo: (e, t) => Object(T.e)(e, t.match.params.subredditName)
				}),
				ze = Object(d.c)({
					queryParams: (e, {
						location: t
					}) => a()([...Object(c.a)(t.search)])
				}),
				Ke = Object(d.c)({
					moderatorPermissions: (e, t) => {
						var s;
						const {
							subredditName: n,
							profileName: a
						} = t.match.params, o = n ? Object(N.D)(e, n) : null === (s = Object(w.j)(e, {
							profileName: a
						})) || void 0 === s ? void 0 : s.id;
						if (o) return Object(O.l)(e, {
							subredditId: o
						})
					}
				}),
				Qe = Object(d.c)({
					isContributor: (e, t) => {
						const {
							subredditName: s
						} = t.match.params;
						if (s) {
							const t = Object(N.v)(e, {
								subredditName: s
							});
							if (t) return t.userIsContributor
						}
						return !1
					}
				}),
				Je = Object(d.c)({
					subreddit: (e, t) => t.match.params.subredditName ? Object(N.y)(e, {
						subredditName: t.match.params.subredditName
					}) : Object(w.j)(e, {
						profileName: t.match.params.profileName
					})
				}),
				Xe = Object(i.b)(() => Object(d.a)(Ge, T.G, E.O, Ke, T.cb, j.hb, Je, Qe, ze, (e, t) => t.match.params.pageName, e => e, ({
					contentGateInfo: e
				}, t, s, {
					moderatorPermissions: n
				}, a, o, {
					subreddit: r
				}, {
					isContributor: i
				}, {
					queryParams: d
				}, l, c) => {
					const {
						after: m,
						afterEditable: u,
						before: p,
						beforeEditable: b,
						only: h,
						page: g
					} = d;
					return {
						contentGateInfo: e,
						isBroadcastingEnabled: !!r && Object(I.c)(c, r.id),
						isContributor: i,
						isEmployee: t,
						layout: s,
						moderatorPermissions: n,
						isScheduledPostsEnabled: o,
						subreddit: r,
						renderNSFWContentGate: !!r && r.isNSFW && !a,
						page: `${g||S.b}`,
						pageName: l,
						postTypeFilter: h,
						after: m || "",
						afterEditable: u,
						before: p,
						beforeEditable: b
					}
				})),
				Ye = Object(E.t)();
			class $e extends r.a.Component {
				constructor() {
					super(...arguments), this.sendEventWithName = e => () => {
						this.props.sendEvent(t => ({
							source: Object(k.b)(this.props.pageName),
							action: "click",
							noun: e
						}))
					}, this.onClickSubredditLink = () => {
						this.props.sendEvent(y.c())
					}
				}
				componentDidUpdate(e) {
					(this.props.pageName && this.props.pageName !== e.pageName || this.props.page && this.props.page !== e.page) && (document.documentElement.scrollTop = document.body.scrollTop = 0)
				}
				render() {
					const {
						props: e
					} = this;
					if (!e.subreddit) {
						const t = Object(C.a)(e.contentGateInfo, e.renderNSFWContentGate, e.match.params.subredditName);
						return t ? r.a.createElement(u.default, t) : null
					}
					const t = !!e.moderatorPermissions;
					return r.a.createElement(He, null, r.a.createElement(Ze, null, r.a.createElement(Ve, {
						subredditOrProfile: e.subreddit
					}), r.a.createElement(We, {
						to: e.subreddit.url,
						onClick: this.onClickSubredditLink
					}, e.subreddit.displayText), e.pageName && `/ ${g(e.pageName)}`), r.a.createElement(qe, null, e.moderatorPermissions && r.a.createElement(Le, {
						moderatorPermissions: e.moderatorPermissions,
						pageName: e.pageName,
						subpageName: e.page,
						subreddit: e.subreddit,
						isProfile: !!e.match.params.profileName
					}), r.a.createElement("div", {
						className: Object(l.a)(Be.a.contentWrapper, t && Be.a.isModerator)
					}, e.pageName && Object(_.a)({
						pageName: e.pageName,
						moderatorPermissions: e.moderatorPermissions,
						canCreateScheduledPosts: e.isScheduledPostsEnabled,
						isEmployee: e.isEmployee,
						isStreamingEnabled: e.isBroadcastingEnabled,
						subredditType: e.subreddit.type,
						isContributor: e.isContributor
					}) ? r.a.createElement(M.a, {
						after: e.after,
						afterEditable: e.afterEditable,
						before: e.before,
						beforeEditable: e.beforeEditable,
						layout: e.layout,
						moderatorPermissions: e.moderatorPermissions,
						page: e.page,
						pageName: e.pageName,
						postTypeFilter: e.postTypeFilter,
						sendEventWithName: this.sendEventWithName,
						subpageName: e.page,
						subreddit: e.subreddit
					}) : e.moderatorPermissions ? r.a.createElement(U, {
						subredditDisplayText: e.subreddit.displayText
					}) : r.a.createElement(P.a, {
						isModerator: t,
						subredditDisplayText: e.subreddit.displayText
					}))))
				}
			}
			t.default = Ye(Xe(Object(x.c)($e)))
		},
		"./src/reddit/pages/SubredditCreation/Layout/index.m.less": function(e, t, s) {
			e.exports = {
				Sidebar: "_21QIcELhFLJ4T6uOUKqej7",
				sidebar: "_21QIcELhFLJ4T6uOUKqej7",
				isOverlay: "_3JejK3woZKuE7psWYzZMk-",
				Content: "_2wEvMk0HNO1vMRXR89R4YE",
				content: "_2wEvMk0HNO1vMRXR89R4YE",
				styleUpgrade: "X-1p5JKc0xu_rCnYW35Ym",
				Container: "_3rOOumzhn2kQeSbQA1BtJI",
				container: "_3rOOumzhn2kQeSbQA1BtJI",
				ContainerExp: "kRQ16EdnbA2Ep9MtOZ9-o",
				containerExp: "kRQ16EdnbA2Ep9MtOZ9-o",
				OuterContainer: "_1t_20Pp0ozZf5JHADFW277",
				outerContainer: "_1t_20Pp0ozZf5JHADFW277"
			}
		},
		"./src/reddit/pages/SubredditCreation/index.m.less": function(e, t, s) {
			e.exports = {
				sublabel: "_3iEQMbJzyCJP7q0YQLg6j4",
				subtitle: "_1NkQ5U2m0s_6vOfhCgiIgT",
				radioDescription: "_2VfO_j9K0NqNwA6JyAl8Dk",
				buttonContainer: "rktXqe6ilbY86M7UI5N0",
				isOverlay: "_2-RGOjReVDKqocc0lhfKCD",
				field: "lzEa7-AzGmC9abTt7-RJG",
				isCreatePending: "_3rxpxb7pMWAbGQ6_JA_my7",
				subredditCreation: "_3eSVsnKJOqAQo-ixxTeJcl",
				container: "_2oaybRT7snUp8XlyHlRiSP",
				title: "_19pYcIVThkZW5KMHTi8qsc",
				nsfw: "_hnZsl3c6qOjy4qOD9r0R",
				createButton: "rJOmFCS_DMZSRltlKtpyt",
				pendingText: "oXus6jwjzhkeznWdE45YL",
				metaFieldDescription: "fd5WCBCH7kTLTlNepW054",
				numCommunityTopicsSelected: "_1QES7ND3zudXR2epk08OVa",
				subtextContainer: "_1V23LtWm6tqb0xlD1Xkh-W",
				radioContainer: "_3qUROz4qvkxCG-oEJTkW3x",
				radioContent: "luCqkz2vQaP-L_NeDD98b",
				textButton: "_1HeLiu_c_KBBmvtR1puoSk",
				fullWidthTextContainer: "_2jvToia6nJCdTHqp_Tw_fp",
				Info: "cP738yi9DxlBmCQTtFLop",
				info: "cP738yi9DxlBmCQTtFLop",
				RadioOption: "_2uqw2bfrk5pQeRVMtPVRUR",
				radioOption: "_2uqw2bfrk5pQeRVMtPVRUR",
				StyledTooltip: "_3mMji3dmYN3jsQ2Ri0owBm",
				styledTooltip: "_3mMji3dmYN3jsQ2Ri0owBm",
				Public: "_3fiOvK-VXqZ9cZO0d912xA",
				public: "_3fiOvK-VXqZ9cZO0d912xA",
				RadioIcon: "_1vr9rsoGcISz-S6s7p_6s-",
				radioIcon: "_1vr9rsoGcISz-S6s7p_6s-",
				greyIcon: "_1brExAGBQKewsBZVhpuJ3u",
				Restricted: "_3RYKKCLydFkeZVJov0xebO",
				restricted: "_3RYKKCLydFkeZVJov0xebO",
				Private: "_19fLjAFVy42ZR2vocDvgUW",
				private: "_19fLjAFVy42ZR2vocDvgUW",
				Employee: "ExNY0v88NVrkWCfrt55XJ",
				employee: "ExNY0v88NVrkWCfrt55XJ",
				CloseButton: "_1I-ULJ_Pqw5ZwVbFuh5I6W",
				closeButton: "_1I-ULJ_Pqw5ZwVbFuh5I6W",
				ErrorText: "_2ay6MX8oi5mY0chgCSBVHO",
				errorText: "_2ay6MX8oi5mY0chgCSBVHO",
				styleUpgrade: "_1aBSGgbhYXh3KHWmFGY2Ui"
			}
		},
		"./src/reddit/pages/SubredditCreation/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "radioOptions", (function() {
				return je
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/formatApiError/index.ts"),
				m = s("./src/reddit/actions/subredditCreation.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/actions/tags/index.ts"),
				b = s("./src/reddit/actions/toaster.ts"),
				h = s("./src/reddit/components/CommunityTopics/PrimaryTopic/index.tsx"),
				g = s("./src/reddit/components/MultiOptionSelect/index.tsx"),
				f = s("./src/reddit/models/Tags/index.ts"),
				x = s("./src/reddit/models/Toast/index.ts"),
				E = s("./src/reddit/selectors/tags.ts"),
				v = s("./src/reddit/components/CommunityTopics/index.m.less"),
				_ = s.n(v);
			const C = Object(d.c)({
				availableGlobalOptions: E.f,
				selectedOptions: E.k,
				isLoading: E.F,
				currentInput: E.g,
				selectedPrimaryTag: E.z,
				hasSecondaryTags: E.q
			});
			class k extends o.a.Component {
				constructor() {
					super(...arguments), this.onOptionsChanged = e => {
						const t = e.filter(e => e.selected),
							s = e.filter(e => !e.selected);
						this.onOptionsSelected(t), s.forEach(e => this.onOptionDeselected(e))
					}
				}
				onOptionsSelected(e) {
					const t = f.a - this.props.selectedOptions.length,
						s = e.filter(e => !!e.displayText.trim()),
						n = s.slice(0, t);
					n.forEach(e => {
						this.props.optionSelected({
							...e,
							displayText: e.displayText.trim()
						})
					}), n.length !== s.length && this.props.onMaxTopicsHit()
				}
				onOptionDeselected(e) {
					this.props.optionDeselected({
						...e,
						displayText: e.displayText.trim()
					})
				}
				render() {
					return o.a.createElement("div", {
						className: _.a.communityTopicsContainer
					}, o.a.createElement(h.b, null), (!!this.props.selectedPrimaryTag || this.props.hasSecondaryTags) && o.a.createElement(g.a, {
						addText: n.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						allowFreeTextEntry: !0,
						availableOptions: this.props.availableGlobalOptions,
						dropdownHeaderText: n.fbt._("Suggested topics", null, {
							hk: "1qNrZC"
						}),
						input: this.props.currentInput,
						isError: this.props.selectedOptions.length > f.a,
						isLoading: this.props.isLoading,
						maxOptionLength: f.b,
						onSearchBarFocus: this.props.onSearchBarFocused,
						onInputChanged: e => {
							this.props.onInputChanged(e)
						},
						onOptionsChanged: this.onOptionsChanged,
						selectedOptions: this.props.selectedOptions,
						splitOnCommaPress: !0
					}))
				}
			}
			var y = Object(r.b)(C, e => ({
					optionSelected: t => {
						e(Object(p.c)({
							option: t
						}))
					},
					optionDeselected: t => {
						e(Object(p.b)({
							option: t
						}))
					},
					onInputChanged: t => e(Object(p.a)({
						input: t
					})),
					onSearchBarFocused: () => e((e, t) => {}),
					onMaxTopicsHit: () => e((e, t) => {
						e(Object(b.f)({
							...Object(b.e)(n.fbt._("You can only add up to {max number of topics} community topics", [n.fbt._param("max number of topics", f.a.toString())], {
								hk: "1OySAh"
							}), x.b.Error),
							duration: b.a
						}))
					})
				}))(k),
				S = s("./src/reddit/components/EmailInvitePaintedDoor/loader.tsx"),
				O = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				j = s("./src/reddit/components/Settings/shared/Widgets.tsx"),
				w = s("./src/reddit/components/TrackingHelper/index.tsx"),
				I = s("./src/reddit/constants/history.ts"),
				N = s("./src/reddit/contexts/InsideOverlay.tsx"),
				T = s("./src/reddit/controls/Button/index.tsx"),
				M = s("./src/reddit/controls/CheckboxInput/index.tsx"),
				P = s("./src/reddit/controls/ErrorText/index.tsx"),
				R = s("./src/reddit/controls/RadioInput/index.tsx"),
				F = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				A = s("./src/reddit/controls/TextButton/index.tsx"),
				D = s("./src/reddit/helpers/trackers/emailInvite.ts"),
				L = s("./src/reddit/helpers/trackers/screenview.ts"),
				U = s("./src/reddit/helpers/trackers/subredditCreation.ts"),
				B = s("./src/reddit/icons/svgs/Admin/index.tsx"),
				H = s("./src/reddit/icons/svgs/Close/index.tsx"),
				W = s("./src/reddit/icons/svgs/Eye/index.tsx"),
				Z = s("./src/reddit/icons/svgs/Info/index.tsx"),
				V = s("./src/reddit/icons/svgs/Lock/index.tsx"),
				q = s("./src/reddit/icons/svgs/User/index.tsx"),
				G = s("./src/reddit/models/Subreddit/index.ts"),
				z = s("./src/reddit/models/SubredditRestrictions/index.ts"),
				K = s("./src/config.ts"),
				Q = s("./src/reddit/contexts/NavbarExp.ts"),
				J = s("./src/reddit/pages/SubredditCreation/Layout/index.m.less"),
				X = s.n(J);
			var Y = e => {
					const t = Object(a.useContext)(Q.a);
					return o.a.createElement("div", {
						className: X.a.OuterContainer
					}, o.a.createElement("div", {
						className: Object(l.a)(e.className, X.a.Container, {
							[X.a.isOverlay]: e.isOverlay
						})
					}, (!e.isInSrCreationFlowM2Experiment || e.isInSrCreationFlowM2Experiment && !e.isOverlay) && o.a.createElement("div", {
						className: Object(l.a)(X.a.Sidebar, {
							[X.a.isOverlay]: e.isOverlay
						}),
						style: {
							backgroundImage: `url(${K.a.assetPath}/img/${e.isOverlay?"community-creation":"partner-connection"}.png)`
						}
					}), o.a.createElement("div", {
						className: Object(l.a)(X.a.Content, {
							[X.a.isOverlay]: e.isOverlay,
							[X.a.styleUpgrade]: !!e.isInSrCreationFlowM2Experiment,
							[X.a.ContainerExp]: t
						})
					}, e.children)))
				},
				$ = s("./src/reddit/constants/experiments.ts"),
				ee = s("./src/reddit/helpers/chooseVariant/index.ts"),
				te = s("./src/reddit/selectors/experiments/index.ts"),
				se = s("./src/reddit/selectors/experiments/utils.ts");
			const ne = Object(d.a)(e => Object(ee.c)(e, {
					experimentName: $.D,
					experimentEligibilitySelector: te.e
				}), se.a),
				ae = Object(d.a)(ne, e => e === $.K.Optional),
				oe = Object(d.a)(ne, e => e === $.K.Remove);
			var re = s("./src/reddit/selectors/experiments/emailInvite.ts");
			const ie = Object(d.a)(e => Object(ee.c)(e, {
				experimentName: $.ib,
				experimentEligibilitySelector: te.e
			}), se.a);
			var de = s("./src/reddit/selectors/subreddit.ts"),
				le = s("./src/reddit/selectors/user.ts"),
				ce = s("./src/reddit/pages/SubredditCreation/index.m.less"),
				me = s.n(ce),
				ue = s("./src/lib/lessComponent.tsx");
			const pe = 21,
				be = 500,
				he = "create-title-info",
				ge = ue.a.wrapped(Z.a, "Info", me.a),
				fe = ue.a.wrapped(F.a, "RadioOption", me.a),
				xe = ue.a.wrapped(O.c, "Tooltip", me.a),
				Ee = ue.a.wrapped(q.a, "Public", me.a),
				ve = ue.a.wrapped(W.a, "Restricted", me.a),
				_e = ue.a.wrapped(V.a, "Private", me.a),
				Ce = ue.a.wrapped(B.a, "Employee", me.a),
				ke = ue.a.wrapped(H.a, "CloseButton", me.a),
				ye = ue.a.wrapped(P.b, "ErrorText", me.a),
				Se = Object(d.c)({
					error: de.g,
					isCreatePending: de.j,
					isEmailInviteExperimentEnabled: re.a,
					isEmployee: le.G,
					isInSrCreationFlowM2Experiment: ie,
					isTopicOptional: ae,
					isTopicRemoved: oe,
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(le.gb)(e),
					userIsSuspended: le.O,
					allTags: E.e,
					existingTags: E.h,
					newTags: E.i,
					selectedCommunityTopicsOptions: E.k,
					selectedPrimaryTagId: E.j
				}),
				Oe = Object(r.b)(Se, e => ({
					createCommunity: t => e(Object(m.f)(t)),
					clearErrors: () => e(Object(m.e)()),
					onCloseLocation: t => e(Object(i.b)(t)),
					onShowTooltip: () => e(Object(u.f)({
						tooltipId: he
					})),
					onHideTooltip: () => e(Object(u.i)()),
					validateSubredditName: t => e(Object(m.g)(t))
				})),
				je = (e, t, s) => [o.a.createElement(fe, {
					key: "public",
					showButton: !0,
					value: "public"
				}, o.a.createElement("div", {
					className: me.a.radioContent
				}, o.a.createElement("div", null, o.a.createElement(Ee, {
					className: Object(l.a)({
						[me.a.greyIcon]: !!s
					})
				})), o.a.createElement("div", {
					className: me.a.radioContainer
				}, o.a.createElement("div", {
					className: me.a.sublabel
				}, n.fbt._("Public", null, {
					hk: "DK992"
				})), o.a.createElement("div", {
					className: Object(l.a)(me.a.metafieldDescription, me.a.radioDescription)
				}, n.fbt._("Anyone can view, post, and comment to this community", null, {
					hk: "1PfFUA"
				}))))), o.a.createElement(fe, {
					key: "restricted",
					showButton: !0,
					value: "restricted"
				}, o.a.createElement("div", {
					className: me.a.radioContent
				}, o.a.createElement("div", null, o.a.createElement(ve, {
					className: Object(l.a)({
						[me.a.greyIcon]: !!s
					})
				})), o.a.createElement("div", {
					className: me.a.radioContainer
				}, o.a.createElement("div", {
					className: me.a.sublabel
				}, n.fbt._("Restricted", null, {
					hk: "1iBTDq"
				})), o.a.createElement("div", {
					className: Object(l.a)(me.a.metafieldDescription, me.a.radioDescription)
				}, Object(z.g)(t))))), o.a.createElement(fe, {
					key: "private",
					showButton: !0,
					value: "private"
				}, o.a.createElement("div", {
					className: me.a.radioContent
				}, o.a.createElement("div", null, o.a.createElement(_e, {
					className: Object(l.a)({
						[me.a.greyIcon]: !!s
					})
				})), o.a.createElement("div", {
					className: me.a.radioContainer
				}, o.a.createElement("div", {
					className: me.a.sublabel
				}, n.fbt._("Private", null, {
					hk: "3q5SYn"
				})), o.a.createElement("div", {
					className: Object(l.a)(me.a.metafieldDescription, me.a.radioDescription)
				}, n.fbt._("Only approved users can view and submit to this community", null, {
					hk: "3z8OI6"
				}))))), o.a.createElement(fe, {
					key: "employees_only",
					showButton: !0,
					value: "employees_only",
					hidden: !e
				}, o.a.createElement("div", {
					className: me.a.radioContent
				}, o.a.createElement("div", null, o.a.createElement(Ce, {
					className: Object(l.a)({
						[me.a.greyIcon]: !!s
					})
				})), o.a.createElement("div", {
					className: me.a.radioContainer
				}, o.a.createElement("div", {
					className: me.a.sublabel
				}, n.fbt._("Employees only", null, {
					hk: "1arrQC"
				})), o.a.createElement("div", {
					className: Object(l.a)(me.a.metafieldDescription, me.a.radioDescription)
				}, n.fbt._("Only Reddit employees can view and submit to this community", null, {
					hk: "3ty23C"
				})))))];
			class we extends o.a.Component {
				constructor(e) {
					super(e), this.onNameChange = e => {
						this.setState({
							name: e.target.value
						}), this.props.isInSrCreationFlowM2Experiment && this.props.clearErrors()
					}, this.onDescriptionChange = e => {
						this.setState({
							description: e.target.value
						})
					}, this.update = (e, t) => this.setState({
						[t]: e
					}), this.onTypeChange = e => {
						this.setState({
							type: e
						})
					}, this.onInviteViaEmailClick = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(D.a)("community_creation")), this.setState({
							showEmailInviteModal: !0
						})
					}, this.onCloseInviteViaEmailModal = () => {
						this.setState({
							showEmailInviteModal: !1
						})
					}, this.onCreateCommunityClick = () => {
						this.props.isCreatePending || (clearTimeout(this.timeout), this.props.createCommunity({
							name: this.state.name,
							publicDescription: this.state.description,
							type: this.state.type,
							over18: this.state.over18,
							restrictCommenting: this.state.restrictCommenting,
							restrictPosting: this.state.restrictPosting,
							allTags: this.props.allTags,
							newTags: this.props.newTags,
							existingTags: this.props.existingTags,
							primaryTagId: this.props.selectedPrimaryTagId || void 0,
							isInSrCreationFlowM2Experiment: this.props.isInSrCreationFlowM2Experiment
						}), this.timeout = window.setTimeout(() => {
							this.props.isCreatePending && this.setState({
								waitingForSuccessfulCommunity: !0
							})
						}, 2e3))
					}, this.errorHelper = e => {
						if (!e) return {};
						const t = e.fields && e.fields.length && e.fields[0] && e.fields[0].field,
							s = e.type;
						if ("name" === t) {
							if ("NO_TEXT" === s) return {
								name: n.fbt._("A community name is required", null, {
									hk: "QIlYS"
								})
							};
							if ("BAD_SR_NAME" === s) return this.props.isInSrCreationFlowM2Experiment ? {
								name: n.fbt._("Community names must be between 3–21 characters, and can only contain letters, numbers, or underscores.", null, {
									hk: "2rmVgd"
								})
							} : {
								name: n.fbt._("Make sure your community name follows all of the formatting rules", null, {
									hk: "1yzUHm"
								})
							};
							if ("SUBREDDIT_EXISTS" === s) return this.props.isInSrCreationFlowM2Experiment ? {
								name: n.fbt._("Sorry, r/{subreddit name attempt} is taken. Try another.", [n.fbt._param("subreddit name attempt", this.state.name)], {
									hk: "CLwzs"
								})
							} : {
								name: n.fbt._("This community name is already taken", null, {
									hk: "3xeE7r"
								})
							};
							if ("SUBREDDIT_UNAVAILABLE" === s) return {
								name: n.fbt._("This community name is unavailable", null, {
									hk: "15j6BB"
								})
							}
						} else {
							if ("public_description" === t) return {
								publicDescription: n.fbt._("A community description is required", null, {
									hk: "32uyXy"
								})
							};
							if ("topics" === t && "TOPICS_MISSING" === s) return {
								topics: n.fbt._("A primary topic is required", null, {
									hk: "2W8L8A"
								})
							}
						}
						return {
							generic: Object(c.a)(e)
						}
					}, this.state = {
						name: "",
						description: "",
						type: G.f.Public,
						over18: !1,
						waitingForSuccessfulCommunity: !1,
						restrictCommenting: !1,
						restrictPosting: !0,
						showEmailInviteModal: !1
					}
				}
				componentDidMount() {
					const {
						sendEvent: e
					} = this.props;
					e(Object(L.w)()), this.props.clearErrors()
				}
				componentWillUnmount() {
					clearTimeout(this.timeout)
				}
				render() {
					const {
						error: e,
						location: t,
						isCreatePending: s,
						isEmailInviteExperimentEnabled: a,
						isEmployee: r,
						isInSrCreationFlowM2Experiment: i,
						isOverlay: d,
						isTopicOptional: c,
						isTopicRemoved: m,
						onCloseLocation: u,
						onHideTooltip: p,
						onShowTooltip: b,
						sendEvent: h,
						userDoesNotHaveEnoughExpToCreateCommunity: g,
						userIsSuspended: x,
						validateSubredditName: E
					} = this.props, v = this.errorHelper(e), {
						over18: _,
						showEmailInviteModal: C,
						waitingForSuccessfulCommunity: k
					} = this.state;
					return o.a.createElement(Y, {
						className: Object(l.a)(me.a.subredditCreation, {
							[me.a.isOverlay]: d
						}),
						isOverlay: d,
						isInSrCreationFlowM2Experiment: i
					}, o.a.createElement("div", {
						className: me.a.container
					}, o.a.createElement("h1", {
						className: me.a.title
					}, n.fbt._("Create a community", null, {
						hk: "SlFa7"
					}), d && o.a.createElement(ke, {
						onClick: () => {
							h(Object(U.b)()), u(t.state[I.a.CloseLocation])
						}
					})), g ? o.a.createElement("h2", {
						className: me.a.sublabel
					}, n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "44qhJp"
					})) : x ? o.a.createElement("h2", {
						className: me.a.sublabel
					}, n.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "3trJMZ"
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(j.e, {
						hideCountdown: !i,
						isCreateCommunity: !0,
						isRequired: !0,
						label: n.fbt._("Name", null, {
							hk: "3OIzgl"
						}),
						textContainerClassName: me.a.fullWidthTextContainer,
						onBlur: i ? () => E(this.state.name) : void 0,
						onChange: this.onNameChange,
						maxChars: pe,
						value: this.state.name,
						subtext: o.a.createElement("span", {
							className: me.a.subtextContainer
						}, n.fbt._("Community names including capitalization cannot be changed.", null, {
							hk: "VjrZg"
						}), o.a.createElement("span", {
							id: he,
							onMouseEnter: b,
							onMouseLeave: p,
							className: me.a.info
						}, o.a.createElement(ge, null), o.a.createElement(xe, {
							caretOnTop: !0,
							tooltipId: he,
							text: n.fbt._('Names cannot have spaces (e.g., "r/bookclub" not "r/book club"), must be between 3-21 characters, and underscores ("_") are the only special characters allowed. Avoid using solely trademarked names (e.g., "r/FansOfAcme" not "r/Acme").', null, {
								hk: "3RsycS"
							})
						})))
					}), v.name && o.a.createElement(ye, {
						className: Object(l.a)({
							[me.a.styleUpgrade]: !!i
						})
					}, v.name), !i && !m && o.a.createElement(o.a.Fragment, null, o.a.createElement(j.k, {
						isRequired: !c,
						label: n.fbt._("Topics", null, {
							hk: "2iixv1"
						}),
						textContainerClassName: me.a.fullWidthTextContainer,
						subtext: o.a.createElement("span", {
							className: me.a.subtextContainer
						}, n.fbt._("This will help relevant users find your community.", null, {
							hk: "3LM2Jb"
						}), o.a.createElement("span", null, `${this.props.selectedCommunityTopicsOptions.length}/${f.a}`)),
						direction: "column"
					}, o.a.createElement(y, null)), v.topics && o.a.createElement(ye, null, v.topics)), !i && o.a.createElement(o.a.Fragment, null, o.a.createElement(j.g, {
						hideCountdown: !0,
						isCreateCommunity: !0,
						isRequired: !0,
						label: n.fbt._("Description", null, {
							hk: "4gli9v"
						}),
						onChange: this.onDescriptionChange,
						maxChars: be,
						rows: 2,
						subtext: n.fbt._("This is how new members come to understand your community.", null, {
							hk: "35Gh2u"
						}),
						textContainerClassName: me.a.fullWidthTextContainer,
						value: this.state.description
					}), v.publicDescription && o.a.createElement(ye, null, v.publicDescription)), o.a.createElement(j.k, {
						label: n.fbt._("Community type", null, {
							hk: "152EhZ"
						}),
						direction: "column",
						isCreateCommunity: !0,
						textContainerClassName: me.a.fullWidthTextContainer
					}, o.a.createElement(R.a, {
						value: this.state.type,
						name: "type",
						onChange: this.onTypeChange
					}, je(r, "post", i))), o.a.createElement("div", {
						className: Object(l.a)(me.a.field, {
							[me.a.isCreatePending]: s
						})
					}, o.a.createElement("div", {
						className: me.a.subtitle
					}, n.fbt._("Adult content", null, {
						hk: "20arB"
					})), o.a.createElement(M.a, {
						name: "over18",
						value: _,
						onChange: () => this.update(!this.state.over18, "over18"),
						disabled: s
					}, o.a.createElement("div", {
						className: me.a.nsfw
					}, "NSFW"), o.a.createElement("div", {
						className: me.a.sublabel
					}, n.fbt._("18+ year old community", null, {
						hk: "1XxZMV"
					})))), a && o.a.createElement("div", {
						className: Object(l.a)(me.a.field, {
							[me.a.isCreatePending]: s
						})
					}, o.a.createElement(A.a, {
						className: me.a.textButton,
						onClick: this.onInviteViaEmailClick
					}, n.fbt._("Invite members via email", null, {
						hk: "2uViIf"
					}))), v.generic && o.a.createElement(ye, null, v.generic), k && o.a.createElement("div", {
						className: me.a.pendingText
					}, n.fbt._("Your community is being created...", null, {
						hk: "3dSTrq"
					})), o.a.createElement("div", {
						className: Object(l.a)(me.a.buttonContainer, {
							[me.a.isOverlay]: d
						})
					}, d && o.a.createElement(T.q, {
						disabled: s,
						className: me.a.createButton,
						onClick: () => {
							u(t.state[I.a.CloseLocation]), h(Object(U.b)())
						},
						priority: T.b.Secondary
					}, n.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(T.q, {
						disabled: s,
						className: me.a.createButton,
						onClick: this.onCreateCommunityClick
					}, n.fbt._("Create Community", null, {
						hk: "QE8Y3"
					}))))), C && o.a.createElement(S.a, {
						onClose: this.onCloseInviteViaEmailModal,
						sendEvent: h
					}))
				}
			}
			t.default = Object(w.c)(Oe(Object(N.b)(we)))
		},
		"./src/reddit/selectors/experiments/emailInvite.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				a = s("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				const t = Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: n.Yb
				});
				return !(!t || Object(n.Xd)(t))
			}
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/posts.ts");
			const i = Object(n.a)(e => Object(o.c)(e, {
				experimentName: a.Vc,
				experimentEligibilitySelector: o.a
			}), r.F, (e, t) => e === a.fd.Enabled && (null == t ? void 0 : t.isCreatedFromAdsUi) || (null == t ? void 0 : t.isSponsored))
		},
		"./src/reddit/selectors/streamingModSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return c
			}));
			const n = {
					startTime: "",
					endTime: ""
				},
				a = {
					isLiveStreamingEnabled: !1,
					maxLiveStreams: void 0,
					minKarma: void 0,
					minAccountAgeDays: void 0,
					durationLimitSeconds: void 0,
					schedule: {
						sunday: n,
						monday: n,
						tuesday: n,
						wednesday: n,
						thursday: n,
						friday: n,
						saturday: n
					},
					whitelistedUsers: [],
					broadcasterPrompt: "",
					isDiscoveryUnitShown: !1,
					inSubMinKarma: void 0
				},
				o = (e, t) => {
					const s = e.streaming.modSettings[t.subredditId];
					return s ? {
						isLiveStreamingEnabled: s.isLiveStreamingEnabled,
						maxLiveStreams: s.maxLiveStreams,
						minKarma: s.minKarma,
						minAccountAgeDays: s.minAccountAgeDays,
						durationLimitSeconds: s.durationLimitSeconds,
						schedule: {
							sunday: l(s.weeklySchedule.sunday),
							monday: l(s.weeklySchedule.monday),
							tuesday: l(s.weeklySchedule.tuesday),
							wednesday: l(s.weeklySchedule.wednesday),
							thursday: l(s.weeklySchedule.thursday),
							friday: l(s.weeklySchedule.friday),
							saturday: l(s.weeklySchedule.saturday)
						},
						whitelistedUsers: s.whitelistedRedditors,
						broadcasterPrompt: s.broadcasterPrompt,
						isDiscoveryUnitShown: s.isDiscoveryUnitShown,
						inSubMinKarma: s.inSubMinKarma
					} : a
				},
				r = (e, t) => !!e.streaming.modSettings[t],
				i = e => !!e.streaming.api.pending,
				d = (e, t) => !!e.streaming.modSettings[t] && e.streaming.modSettings[t].isLiveStreamingEnabled,
				l = e => ({
					...n,
					...e[0]
				}),
				c = (e, t) => {
					const s = e.streaming.modSettings[t.subredditId];
					if (!s) return !1;
					const n = new Date;
					return m(n, s.weeklySchedule)
				},
				m = (e, t) => {
					const s = u(e);
					return p(s, t).some(t => b(e, t))
				},
				u = e => {
					return ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"][e.getUTCDay()]
				},
				p = (e, t) => t[e],
				b = (e, t) => {
					const s = e.getUTCHours(),
						n = e.getUTCMinutes(),
						{
							startTime: a,
							endTime: o
						} = t,
						[r, i] = a.split(":").map(Number),
						[d, l] = o.split(":").map(Number);
					let c = 60 * r + i,
						m = 60 * d + l;
					const u = 60 * s + n;
					return 1439 === m && m++, 1439 === c && c++, u >= c && u < m
				}
		},
		"./src/redditGQL/operations/AllModerators.json": function(e) {
			e.exports = JSON.parse('{"id":"e29846f6d98c"}')
		},
		"./src/redditGQL/operations/CreateScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"1e0a4bfe5ac9"}')
		},
		"./src/redditGQL/operations/DeleteScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"dea861ad7f0d"}')
		},
		"./src/redditGQL/operations/FetchModerationLogActions.json": function(e) {
			e.exports = JSON.parse('{"id":"f20f90e251f3"}')
		},
		"./src/redditGQL/operations/FetchSubredditTrafficStats.json": function(e) {
			e.exports = JSON.parse('{"id":"d2b39ab0293a"}')
		},
		"./src/redditGQL/operations/GeoPlaceAutocomplete.json": function(e) {
			e.exports = JSON.parse('{"id":"8a89fd7c7db1"}')
		},
		"./src/redditGQL/operations/SetSubredditGeoPlace.json": function(e) {
			e.exports = JSON.parse('{"id":"ece6b91ed02d"}')
		},
		"./src/redditGQL/operations/SubmitScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"6f9e584d390a"}')
		},
		"./src/redditGQL/operations/SubredditFlairedRedditorByName.json": function(e) {
			e.exports = JSON.parse('{"id":"68ffe6747ab8"}')
		},
		"./src/redditGQL/operations/SubredditFlairedRedditors.json": function(e) {
			e.exports = JSON.parse('{"id":"2967fe5e7d03"}')
		},
		"./src/redditGQL/operations/SubredditScheduledPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"de72339b938a"}')
		},
		"./src/redditGQL/operations/UpdateScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"f5276d63e133"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModerationPages.e4ca3af4d6b29777b48b.js.map