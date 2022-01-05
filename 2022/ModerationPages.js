// https://www.redditstatic.com/desktop2x/ModerationPages.7a560ac6b302ce0281d5.js
// Retrieved at 1/5/2022, 10:10:03 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModerationPages"], {
		"./src/chat/controls/Svg/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2Qq40Mz_DMe0iARkTh8cZn",
				component: "_2Qq40Mz_DMe0iARkTh8cZn",
				disable: "_2xw21QiaL_ouF76MONf7hF",
				active: "_2dOhVJ6aPS9cbx0JfiKCW8",
				hover: "_1eWUKX11coBa2dErvWkP1q"
			}
		},
		"./src/chat/controls/Svg/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/chat/controls/Svg/index.m.less"),
				d = n.n(i);
			t.a = o.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: s,
						hover: o
					} = e;
				return a.a.createElement("svg", {
					className: Object(r.a)(e.className, {
						[d.a.disable]: n,
						[d.a.active]: s,
						[d.a.hover]: !!o
					}),
					viewBox: e.viewBox,
					style: t,
					onClick: e.onClick
				}, e.children)
			}, "Component", d.a)
		},
		"./src/higherOrderComponents/withImageUploads.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/imageUploads.ts"),
				o = n("./src/reddit/models/Image/index.tsx"),
				i = n("./src/reddit/selectors/imageUploads.ts");
			const d = Object(a.c)({
				_imageUploads: i.b
			});

			function l(e, t) {
				return Object(s.b)(d, e => ({
					uploadImage: n => e(t(n)),
					cancelUpload: t => e(Object(r.h)(t))
				}), (function(e, t, n) {
					return {
						...n,
						...t,
						getImageUploadsIfModified: function(t) {
							return function(e, t) {
								const n = [];
								let s = !1;
								for (const a of t)
									if (Object(o.i)(a) || e[a.id])
										if (e[a.id]) {
											const t = e[a.id];
											n.push(t), s = s || t !== a
										} else s = !0;
								else n.push(a);
								return s ? n : null
							}(e._imageUploads, t)
						}
					}
				}))(e)
			}
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "i", (function() {
				return k
			}));
			var s = n("./node_modules/linkify-it/index.js"),
				a = n.n(s),
				r = n("./node_modules/tlds/index.js"),
				o = n.n(r),
				i = n("./src/lib/linkMatchers/customLinks.ts"),
				d = n("./node_modules/lodash/values.js"),
				l = n.n(d);
			const c = e => l()(i.b).includes(e.substring(1)),
				m = ["//", "ftp:", "http:", "https:", "mailto:"],
				u = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, m),
				p = a()().tlds(o.a).set({
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
				f = a()().tlds(o.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config).add(i.g.mention.prefix, i.g.mention.config),
				x = a()().tlds(o.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subredditFullUrl.config).add(i.g.subredditFull.prefix, i.g.subredditFullUrl.config),
				E = p.normalize;
			p.normalize = e => {
				E.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const v = (e, t) => {
					return (f.match(e) || []).filter(e => {
						const n = c(e.text);
						return !n || n && t
					})
				},
				_ = e => {
					return [...g.match(e) || [], ...b.match(e) || []].map(e => !c(e.text) && e.text.replace(i.a, "")).filter(e => e)
				},
				C = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				k = e => {
					const t = p.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const n = t[0];
						return n.lastIndex === e.length ? n : ((e, t) => {
							const n = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(n)) return t.lastIndex += n.length, t.url += n, t
						})(e, n)
					}
				}
		},
		"./src/lib/loginHref/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				a = n("./node_modules/history/esm/history.js");
			t.a = (e, t, n) => {
				const r = Object(a.e)(e),
					o = encodeURIComponent(`${t}${r}`);
				return `${s.a.accountManagerOrigin}${n||"/login"}?dest=${o}`
			}
		},
		"./src/lib/stripQueryParams/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				a = n.n(s);
			t.a = e => {
				const t = a.a.parse(e);
				return t.search = void 0, t.query = null, a.a.format(t)
			}
		},
		"./src/reddit/actions/economics/powerups/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return x
			}));
			var s = n("./node_modules/uuid/v4.js"),
				a = n.n(s),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/sentry/index.ts"),
				i = n("./src/lib/uploadToS3/index.ts"),
				d = n("./src/reddit/endpoints/gold/powerups/index.ts"),
				l = n("./src/reddit/helpers/media/index.ts"),
				c = n("./src/reddit/actions/economics/powerups/constants.ts"),
				m = n("./src/reddit/actions/economics/powerups/helpers.ts");
			const u = Object(r.a)(c.b),
				p = Object(r.a)(c.c),
				b = ({
					subredditId: e,
					file: t
				}) => async (n, s) => {
					try {
						const s = await Object(l.g)(t);
						if (!s) throw new Error("Cannot determine file mimeType");
						const {
							file: r,
							width: o,
							height: i
						} = await Object(l.n)(t, c.a), d = await n(h({
							subredditId: e,
							mimeType: s
						})), m = await f({
							file: r,
							s3UploadLease: d
						});
						return await n(g({
							subredditId: e,
							mimeType: s,
							url: m,
							x: o,
							y: i,
							nonce: a()()
						}))
					} catch (r) {
						throw o.c.captureException(r), r
					}
				}, h = e => async (t, n, {
					gqlContext: s
				}) => {
					const a = await Object(d.d)(s(), {
						input: e
					});
					if (a.error || !a.ok) throw new Error("Failed to get emoji upload lease");
					const {
						ok: r,
						errors: o,
						s3UploadLease: i
					} = a.body.data.generateCustomEmojiUploadLease;
					if (!r || o) throw new Error(`Failed to get emoji upload lease: ${Object(m.a)(o)}`);
					return i
				}, g = e => async (t, n, {
					gqlContext: s
				}) => {
					const a = await Object(d.a)(s(), {
						input: e
					});
					if (a.error || !a.ok) throw new Error("Failed to create custom emoji");
					const {
						ok: r,
						errors: o,
						emoji: i
					} = a.body.data.createCustomEmoji;
					if (!r || o) throw new Error(`Failed to create custom emoji: ${Object(m.a)(o)}`);
					const c = i.emojiIcon.url;
					await Object(l.m)(c);
					const {
						subredditId: p
					} = e;
					return t(u({
						subredditId: p,
						emoji: i
					})), i
				}, f = async ({
					file: e,
					s3UploadLease: t
				}) => {
					const n = await Object(i.a)(e, t);
					if (!n.ok) throw new Error("Failed to upload custom emoji to S3");
					const s = n.body.PostResponse;
					return `https://${s.Bucket}.s3.amazonaws.com/${s.Key}`
				}, x = ({
					emojiId: e,
					subredditId: t
				}) => async (n, s, {
					gqlContext: a
				}) => {
					const r = await Object(d.b)(a(), {
						input: {
							id: e
						}
					});
					if (r.error || !r.ok) {
						const e = new Error("Failed to delete custom emoji");
						throw o.c.captureException(e), e
					}
					const {
						ok: i,
						errors: l
					} = r.body.data.deleteCustomEmoji;
					if (!i || l) {
						const e = new Error(`Failed to delete custom emoji: ${Object(m.a)(l)}`);
						throw o.c.captureException(e), e
					}
					return n(p({
						subredditId: t,
						emojiId: e
					})), i
				}
		},
		"./src/reddit/actions/pages/moderationPages/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "moderationPageRequested", (function() {
				return fe
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react-router-redux/es/index.js"),
				a = n("./src/lib/assertNever.ts"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				i = n("./src/lib/makeListingKey/index.ts"),
				d = n("./src/reddit/actions/scheduledPosts/index.ts"),
				l = n("./src/reddit/helpers/canAccessModerationPage/index.ts"),
				c = n("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				m = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				u = n("./src/reddit/helpers/trackers/communityTopics.ts"),
				p = n("./src/reddit/helpers/trackers/screenview.ts"),
				b = n("./src/reddit/actions/contentControls/index.ts"),
				h = n("./src/reddit/actions/emoji.ts"),
				g = n("./src/reddit/actions/eventPosts/index.ts"),
				f = n("./src/reddit/actions/gold/communityAwards/index.ts"),
				x = n("./src/reddit/actions/gold/powerups.ts"),
				E = n("./src/reddit/actions/grantUserFlair/index.ts"),
				v = n("./src/lib/makeActionCreator/index.ts"),
				_ = n("./src/reddit/endpoints/subredditModeration/moderationLog.ts"),
				C = n("./src/reddit/helpers/graphql/normalizeModerationLogFromGql/index.ts"),
				k = n("./src/reddit/models/SubredditModeration/ModerationLog/index.ts"),
				y = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/actions/moderationLog/constants.ts");
			const S = Object(v.a)(O.b),
				j = (e, t) => async (n, s, {
					gqlContext: a
				}) => {
					const r = await Object(_.a)(a(), e, t);
					if (r.body) {
						const t = r.body.data.subreddit.moderation;
						if (t && t.actions) {
							const a = s(),
								r = Object(C.b)(t.actions),
								o = Object(y.C)(a, e),
								{
									hasNextPage: i,
									hasPreviousPage: d,
									endCursor: l,
									startCursor: c
								} = t.actions.pageInfo,
								m = Object(k.a)(o, l, c),
								u = [];
							r.forEach(e => {
								u.push(e.id)
							}), n(S({
								hasNextPage: i,
								hasPreviousPage: d,
								endCursor: l,
								key: m,
								startCursor: c,
								normalizedModerationLog: r,
								actionIds: u,
								subredditId: o
							}))
						}
					}
				};
			var w = n("./src/reddit/actions/modQueue/index.ts"),
				I = n("./src/reddit/actions/pages/chatSettings.ts"),
				N = n("./src/reddit/actions/pages/subreddit.ts"),
				T = n("./src/reddit/actions/pages/subredditWiki/index.ts"),
				M = n("./src/reddit/actions/platform.ts"),
				P = n("./src/reddit/actions/profile/index.ts"),
				R = n("./src/reddit/actions/removalReasons/index.ts"),
				A = n("./src/reddit/actions/streaming/modSettings.ts"),
				L = n("./src/reddit/actions/subreddit.ts"),
				F = n("./src/reddit/actions/subreddit/questions.ts"),
				D = n("./src/reddit/actions/subredditModeration/index.ts"),
				U = n("./src/reddit/actions/subredditModeration/approvedSubmitters.ts"),
				B = n("./src/reddit/actions/subredditModeration/ban.ts"),
				H = n("./src/reddit/actions/subredditModeration/mute.ts"),
				W = n("./src/reddit/actions/subredditSettings.ts"),
				q = n("./src/reddit/actions/tags/index.ts"),
				G = n("./node_modules/fbt/lib/FbtPublic.js"),
				K = n("./src/reddit/actions/toaster.ts"),
				V = n("./src/reddit/actions/trafficStats/constants.ts"),
				z = n("./src/lib/makeGqlRequest/index.ts"),
				X = n("./src/redditGQL/operations/FetchSubredditTrafficStats.json");
			var Q = n("./node_modules/lodash/forEach.js"),
				J = n.n(Q),
				Y = n("./src/reddit/helpers/graphql/helpers.ts"),
				Z = n("./src/reddit/models/TrafficStats/index.ts");
			const $ = e => ({
					desktop: new Array(e).fill(0),
					oldReddit: new Array(e).fill(0),
					mWeb: new Array(e).fill(0),
					apps: new Array(e).fill(0),
					total: new Array(e).fill(0)
				}),
				ee = (e, t) => {
					return Object(Y.e)(e.startsAt) > Object(Y.e)(t.startsAt) ? 1 : -1
				},
				te = (e, t, n) => {
					const s = {
							pageViews: $(t),
							uniqueUsers: $(t)
						},
						a = Object(Y.e)(e[0].startsAt);
					return e.map(e => {
						const r = Object(Y.e)(e.startsAt),
							o = new Date(r),
							i = t === Z.c ? o.getMonth() : Math.round((r - a) / n) % t,
							d = Z.d[e.client];
						s.pageViews[d][i] += e.pageViews, s.uniqueUsers[d][i] += e.uniqueUsers
					}), s
				};
			var ne = n("./src/reddit/models/Toast/index.ts");
			const se = Object(v.a)(V.b),
				ae = Object(v.a)(V.c),
				re = Object(v.a)(V.a),
				oe = e => async (t, n, {
					gqlContext: s
				}) => {
					const a = Object(y.R)(n(), {
						subredditId: e
					}).name;
					t(ae({
						subredditId: e
					}));
					const o = await ((e, t) => Object(z.a)(e, {
						...X,
						variables: t
					}))(s(), {
						subredditName: a
					});
					if (o.ok) {
						const n = o.body.data.subreddit.moderation;
						if (n && n.trafficStats) {
							const s = (e => {
								const t = J()(e, (e, t) => e.sort(ee)),
									n = t.subscriptionData,
									s = n.map(e => e.subscribers),
									a = n.map(e => e.unsubscribers),
									o = te(t.hourStats, Z.b, r.Q),
									i = te(t.dayStats, Z.a, r.B),
									d = te(t.monthStats, Z.c, r.pb);
								return {
									pageViews: {
										byHour: o.pageViews,
										byDay: i.pageViews,
										byMonth: d.pageViews
									},
									uniqueUsers: {
										byHour: o.uniqueUsers,
										byDay: i.uniqueUsers,
										byMonth: d.uniqueUsers
									},
									subscribers: s,
									unsubscribers: a
								}
							})(n.trafficStats);
							t(se({
								subredditId: e,
								trafficStats: s
							}))
						}
					} else t(re({
						subredditId: e
					})), t(K.f({
						id: "error-block-trafficStats",
						kind: ne.b.Error,
						text: G.fbt._("Try again later", null, {
							hk: "41Goel"
						})
					}))
				};
			var ie = n("./src/reddit/models/ModQueue/index.ts"),
				de = n("./src/reddit/models/ScheduledPost/index.ts"),
				le = n("./src/reddit/reducers/pages/modHub/index.ts"),
				ce = n("./src/reddit/selectors/moderatorPermissions.ts"),
				me = n("./src/reddit/selectors/modQueue.ts"),
				ue = n("./src/reddit/selectors/platform.ts"),
				pe = n("./src/reddit/selectors/postCreations.ts"),
				be = n("./src/reddit/selectors/profile.ts"),
				he = n("./src/reddit/selectors/streamingModSettings.ts"),
				ge = n("./src/reddit/selectors/user.ts");
			Object(o.a)({
				pages: {
					modHub: le.a
				}
			});
			const fe = e => async (t, n, o) => {
				const {
					params: v
				} = e, {
					pageName: _,
					profileName: C,
					subredditName: k
				} = v;
				if (_ === r.ec.Wiki) {
					if (await t(Object(T.handleWikiRedirects)(e))) return
				}
				if (_ === r.ec.SubredditContent) return void t(Object(s.c)(de.r));
				const O = e.queryParams,
					S = O.page || ie.b,
					G = n();
				if (k) {
					const e = Object(i.a)(k, r.W.HOT),
						n = G.listings.postOrder.ids[e],
						s = G.listings.postOrder.api.error[e],
						a = G.listings.postOrder.api.pending[e];
					if (s) return;
					a || n && !s || await t(Object(N.subredditDataRequested)(e, k, {}))
				} else C && await t(Object(P.e)(C));
				if (!Object(ge.K)(n()) && _ !== r.ec.Moderators && _ !== r.ec.SubredditRules && _ !== r.ec.Contributors) return void Object(m.a)(t, n());
				if (Object(p.i)(n(), !0, k, C), !_) return;
				let K, V, z, X, Q, J, Y, Z, $, ee = !1;
				switch (_) {
					case r.ec.Awards:
						K = f.i;
						break;
					case r.ec.Powerups:
						K = x.m;
						break;
					case r.ec.Muted:
						K = H.b;
						break;
					case r.ec.Contributors:
						K = U.b;
						break;
					case r.ec.Banned:
						K = B.c;
						break;
					case r.ec.Moderators:
						z = !0;
						break;
					case r.ec.Removal:
						K = R.removalReasonsRequested;
						break;
					case r.ec.ContentControls:
						K = b.a, J = !0;
						break;
					case r.ec.ChatSettings:
						ee = !0;
						break;
					case r.ec.CommunitySettings:
						K = W.h, Y = !0;
						break;
					case r.ec.Flair:
						K = E.c, Q = !0;
						break;
					case r.ec.UserFlair:
					case r.ec.PostFlair:
						K = void 0;
						break;
					case r.ec.Emojis:
						K = h.l;
						break;
					case r.ec.Badges:
					case r.ec.Emotes:
					case r.ec.SubredditRules:
						K = void 0;
						break;
					case r.ec.Traffic:
						K = oe;
						break;
					case r.ec.Modlog:
						K = j, X = !0;
						break;
					case r.ec.Streaming:
						K = A.g;
						break;
					case r.ec.Modqueue:
					case r.ec.Reports:
					case r.ec.Spam:
					case r.ec.Edited:
					case r.ec.Unmoderated:
						V = _;
						break;
					case r.ec.Wiki:
					case r.ec.WikiContributors:
					case r.ec.WikiBanned:
						await t(Object(T.subredditWikDataRequested)(v, O, !0));
						break;
					case r.ec.ScheduledPostContent:
						Z = !0, K = d.i;
						break;
					case r.ec.EventPostContent:
						$ = !0;
						break;
					case r.ec.Predictions:
						break;
					default:
						return Object(a.a)(_)
				}
				const te = n(),
					ne = !!k && Object(pe.jb)(te),
					se = Object(ge.H)(te),
					ae = k ? Object(y.U)(te, {
						subredditName: k.toLowerCase()
					}) : Object(be.q)(te, {
						profileName: C.toLowerCase()
					}),
					re = k && Object(y.C)(te, k),
					le = C && Object(be.m)(te, C),
					fe = re || le;
				re && !Object(he.b)(G, re) && await t(Object(A.g)(re));
				const xe = !!re && Object(he.c)(te, re),
					Ee = Object(ce.m)(te, {
						subredditId: fe
					}),
					ve = k && Object(y.t)(te, {
						subredditName: k
					}),
					_e = !(!ve || !ve.userIsContributor),
					Ce = Object(y.W)(te, {
						subredditId: fe
					});
				if (Object(l.a)({
						canCreateScheduledPosts: ne,
						isContributor: _e,
						isEmployee: se,
						isStreamingEnabled: xe,
						moderatorPermissions: Ee,
						pageName: _,
						subredditType: Ce
					})) {
					if (V && k) {
						const e = Object(c.a)({
								onlyOfType: O.only,
								subreddit: k
							}),
							s = !!Object(me.c)(G, {
								pageName: V,
								page: `${S}`,
								subredditName: k,
								queryParams: O
							}),
							a = G.pages.modHub.modQueue[V].api.error;
						if (Object(me.b)(G, {
								pageName: V
							}) || s && !a) return;
						if (!Object(ue.p)(G)) {
							const s = Object(w.e)(e, V, {
								...O,
								subreddit: k
							});
							await s(t, n, o)
						}
					} else if (z && re) {
						if (await Object(D.g)(re, O)(t, n, o), G.moderatingSubreddits[re]) {
							await Object(D.e)(re, O)(t, n, o), G.pages.modHub.moderators.invitedModerators.userOrder[re] || await Object(D.f)(re)(t, n, o)
						}
					} else J && k ? await K(k)(t, n, o) : ee && re ? await Object(I.e)(re)(t, n, o) : Y && re ? await Promise.all([K(k, re)(t, n, o), Object(q.g)(re, u.a.communitySettings)(t, n, o), Object(F.b)(re)(t, n, o)]) : X || Q ? await K(k, O)(t, n, o) : Z && re ? await Object(d.i)({
						subredditId: re
					})(t, n, o) : $ && k ? await Object(g.eventPostsRequested)(k)(t, n, o) : K && await K(fe, O)(t, n, o);
					k && re && !G.subreddits.rules[re] && await L.o(k)(t, n, o), t(M.m({
						title: ae
					}))
				}
			}
		},
		"./src/reddit/actions/pages/shared.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				a = n("./src/reddit/helpers/routeKey/index.ts"),
				r = n("./src/reddit/helpers/trackers/screenview.ts"),
				o = n("./src/telemetry/index.ts"),
				i = n("./src/telemetry/models/Timer.ts");
			const d = () => async (e, t) => {
				const n = t(),
					{
						currentPage: d
					} = n.platform;
				if (!d) return;
				const l = d.routeMatch,
					c = Object(s.a)(n),
					m = Object(a.b)(l, n, c);
				m && o.c.has(m) && Object(r.k)(l, n, i.TimerType.InApp, o.c.end(m))
			}
		},
		"./src/reddit/actions/pages/subredditWiki/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "subredditWikiDataPending", (function() {
				return Ge
			})), n.d(t, "subredditWikiDataLoaded", (function() {
				return Ke
			})), n.d(t, "subredditWikiDataFailed", (function() {
				return Ve
			})), n.d(t, "fetchSubredditWikiData", (function() {
				return Xe
			})), n.d(t, "handleWikiRedirects", (function() {
				return Qe
			})), n.d(t, "subredditWikDataRequested", (function() {
				return Je
			})), n.d(t, "subredditWikiPageRequested", (function() {
				return Ye
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/isEmpty.js"),
				r = n.n(a),
				o = n("./node_modules/react-router-redux/es/index.js"),
				i = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/lib/makeListingKey/index.ts"),
				c = n("./src/config.ts"),
				m = n("./src/reddit/actions/platform.ts"),
				u = n("./src/reddit/helpers/path/index.ts");
			var p = n("./src/reddit/actions/ads/index.ts"),
				b = n("./src/reddit/actions/pages/subreddit.ts"),
				h = n("./src/reddit/actions/pages/subredditWiki/constants.ts"),
				g = n("./src/reddit/actions/toaster.ts"),
				f = n("./src/reddit/actions/wiki/wikiBannedContributors/index.ts"),
				x = n("./src/reddit/actions/wiki/wikiContributors/index.ts"),
				E = n("./src/lib/makeGqlRequest/index.ts"),
				v = n("./src/reddit/helpers/wiki/wikiRevision.ts"),
				_ = n("./src/redditGQL/operations/WikiComparisonDiff.json");
			var C = n("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				k = n("./src/reddit/selectors/subredditWiki.ts");
			const y = Object(d.a)("WIKI_DIFF_PENDING"),
				O = Object(d.a)("WIKI_DIFF_LOADED"),
				S = Object(d.a)("WIKI_DIFF_FAILED"),
				j = e => async (t, n, s) => {
					const a = n(),
						r = Object(C.a)(e),
						o = Object(k.i)(a, {
							key: r
						});
					if (o && (o.pending || !o.error)) return !0;
					const d = {
						key: r
					};
					t(y(d));
					const l = await ((e, t) => Object(E.a)(e, {
						..._,
						variables: {
							...t,
							comparisonRevisionId: Object(v.b)(t.comparisonRevisionId),
							revisionId: Object(v.b)(t.revisionId)
						}
					}))(s.gqlContext(), e);
					let c = null,
						m = "";
					if (l.ok) {
						const e = l.body,
							t = e.data.subreddit && e.data.subreddit.wiki,
							n = t && t.page && t.page.revisionComparisonDiffHtml;
						n ? m = n : c = {
							type: i.I.NOT_FOUND_ERROR
						}
					} else c = l.error || {
						type: i.I.UNKNOWN_ERROR
					};
					return t(c ? S({
						...d,
						error: c
					}) : O({
						...d,
						htmlDiff: m
					})), !c
				};
			var w = n("./src/reddit/actions/wiki/wikiPageSettings/index.tsx"),
				I = n("./src/reddit/actions/wiki/wikiRevisions/index.ts"),
				N = n("./src/reddit/constants/parameters.ts"),
				T = n("./src/reddit/constants/wiki.ts"),
				M = n("./src/reddit/endpoints/page/subredditWiki.ts"),
				P = n("./src/reddit/helpers/brandSafety/index.ts"),
				R = n("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				A = n("./src/reddit/models/Toast/index.ts"),
				L = n("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				F = n("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				D = n("./src/reddit/selectors/subreddit.ts"),
				U = n("./src/lib/initializeClient/installReducer.ts"),
				B = n("./node_modules/redux/es/redux.js");
			const H = {};
			var W = (e = H, t) => {
				switch (t.type) {
					case "WIKI_DIFF_LOADED": {
						const {
							key: n,
							htmlDiff: s
						} = t.payload;
						return {
							...e,
							[n]: {
								htmlDiff: s
							}
						}
					}
					case "WIKI_DIFF_PENDING": {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								pending: !0
							}
						}
					}
					case "WIKI_DIFF_FAILED": {
						const {
							key: n,
							error: s
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								pending: !1,
								error: s
							}
						}
					}
					default:
						return e
				}
			};
			const q = {};
			var G = (e = q, t) => {
					switch (t.type) {
						case h.b:
							const n = t.payload,
								{
									subredditWiki: s,
									options: a
								} = n,
								r = s && s.directory;
							if (!r) return e;
							const {
								subredditName: o
							} = a;
							return {
								...e, [o.toLowerCase()]: r
							};
						default:
							return e
					}
				},
				K = n("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const V = {};
			var z = (e = V, t) => {
					switch (t.type) {
						case h.b: {
							const {
								subredditWiki: n,
								pageKey: s
							} = t.payload, {
								page: a
							} = n;
							return s && a ? {
								...e,
								[s]: a
							} : e
						}
						case K.a: {
							const {
								pageKey: n,
								page: s
							} = t.payload;
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				X = n("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const Q = {};
			var J = (e = Q, t) => {
					switch (t.type) {
						case X.c: {
							const {
								settings: n,
								pageKey: s
							} = t.payload;
							return n ? {
								...e,
								[s]: n
							} : e
						}
						case X.d: {
							const {
								isVisible: n,
								editPermissions: s,
								pageKey: a
							} = t.payload, r = e[a];
							return r ? {
								...e,
								[a]: {
									...r,
									isVisible: n,
									editPermissions: s
								}
							} : e
						}
						case X.b: {
							const {
								editorsInfo: n,
								afterToken: s,
								pageKey: a
							} = t.payload, r = e[a];
							if (!r) return e;
							const o = [...r.editorsInfo, ...n];
							return {
								...e,
								[a]: {
									...r,
									editorsInfo: o,
									afterToken: s
								}
							}
						}
						case X.a: {
							const {
								username: n,
								pageKey: s
							} = t.payload, a = e[s];
							if (!a) return e;
							const r = a.editorsInfo.filter(e => e.username !== n);
							return {
								...e,
								[s]: {
									...a,
									editorsInfo: r
								}
							}
						}
						default:
							return e
					}
				},
				Y = n("./src/lib/omitKey/index.ts");
			const Z = {};
			var $ = (e = Z, t) => {
				switch (t.type) {
					case K.b: {
						const {
							key: n,
							error: s
						} = t.payload;
						return {
							...e,
							[n]: s
						}
					}
					case K.d:
					case K.c: {
						const {
							key: n
						} = t.payload;
						return Object(Y.a)(e, n)
					}
					default:
						return e
				}
			};
			const ee = {};
			var te = (e = ee, t) => {
					switch (t.type) {
						case K.d:
						case K.b:
						case K.c: {
							const {
								key: n
							} = t.payload, s = t.type === K.d;
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				ne = Object(B.c)({
					error: $,
					pending: te
				}),
				se = n("./src/reddit/actions/wiki/wikiEditing/constants.ts");
			const ae = {};
			var re = (e = ae, t) => {
				switch (t.type) {
					case K.c: {
						const {
							key: n,
							options: s,
							pageInfo: a,
							revisionsIds: r
						} = t.payload, o = e[n], i = s.after && o ? [...o.ids, ...r] : r;
						return {
							...e,
							[n]: {
								ids: i,
								pageInfo: a
							}
						}
					}
					case K.a: {
						const {
							page: {
								revision: n
							},
							pageRevisionsListingKey: s,
							recentRevisionsListingKey: a
						} = t.payload, r = e[s];
						return r && n ? {
							...Object(Y.a)(e, a),
							[s]: {
								...r,
								ids: [n.id, ...r.ids]
							}
						} : e
					}
					case se.a: {
						const {
							pageRevisionsListingKey: n,
							recentRevisionsListingKey: s
						} = t.payload, a = {
							...e
						};
						return delete a[n], delete a[s], a
					}
					default:
						return e
				}
			};
			const oe = {};
			var ie = (e = oe, t) => {
					switch (t.type) {
						case h.b: {
							const {
								subredditWiki: {
									page: n
								}
							} = t.payload, s = n && n.revision;
							return s && !e[s.id] ? {
								...e,
								[s.id]: s
							} : e
						}
						case K.c: {
							const {
								revisions: n
							} = t.payload;
							return {
								...e,
								...n
							}
						}
						case K.a: {
							const {
								page: n
							} = t.payload, s = n.revision;
							return s ? {
								...e,
								[s.id]: s
							} : e
						}
						case K.e: {
							const {
								revisionId: n,
								isHidden: s
							} = t.payload, a = e[n];
							return a ? {
								...e,
								[n]: {
									...a,
									isHidden: s
								}
							} : e
						}
						default:
							return e
					}
				},
				de = Object(B.c)({
					api: ne,
					listings: re,
					models: ie
				}),
				le = n("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			const ce = {};
			var me = (e = ce, t) => {
				switch (t.type) {
					case le.c:
					case le.a: {
						const {
							subredditName: n,
							afterToken: s
						} = t.payload;
						return {
							...e,
							[n]: s
						}
					}
					default:
						return e
				}
			};
			const ue = {};
			var pe = (e = ue, t) => {
				switch (t.type) {
					case le.b: {
						const {
							subredditName: n,
							error: s
						} = t.payload;
						return {
							...e,
							[n]: s
						}
					}
					case le.d:
					case le.c: {
						const {
							subredditName: n
						} = t.payload;
						return Object(Y.a)(e, n)
					}
					default:
						return e
				}
			};
			const be = {};
			var he = (e = be, t) => {
					switch (t.type) {
						case le.d:
						case le.c:
						case le.b: {
							const {
								subredditName: n
							} = t.payload, s = t.type === le.d;
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				ge = Object(B.c)({
					error: pe,
					pending: he
				});
			const fe = {};
			var xe = (e = fe, t) => {
					switch (t.type) {
						case le.c:
						case le.a: {
							const {
								subredditName: n,
								bannedContributors: s
							} = t.payload;
							return {
								...e,
								[n]: {
									...e[n],
									...s
								}
							}
						}
						case le.e: {
							const {
								subredditName: n,
								bannedContributor: s
							} = t.payload;
							return {
								...e,
								[n]: {
									...e[n],
									...s
								}
							}
						}
						case le.f: {
							const {
								subredditName: n,
								userId: s
							} = t.payload, a = Object(Y.a)(e[n], s);
							return {
								...e,
								[n]: a
							}
						}
						default:
							return e
					}
				},
				Ee = n("./node_modules/lodash/uniq.js"),
				ve = n.n(Ee);
			const _e = {};
			var Ce = (e = _e, t) => {
					switch (t.type) {
						case le.c:
						case le.a: {
							const {
								subredditName: n,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[n]: ve()([...e[n] || [], ...s])
							}
						}
						case le.e: {
							const {
								subredditName: n,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[n]: ve()([...s, ...e[n] || []])
							}
						}
						case le.f: {
							const {
								subredditName: n,
								userId: s
							} = t.payload;
							return {
								...e,
								[n]: (e[n] || []).filter(e => e !== s)
							}
						}
						default:
							return e
					}
				},
				ke = Object(B.c)({
					afterToken: me,
					api: ge,
					models: xe,
					userOrder: Ce
				});
			const ye = {};
			var Oe = (e = ye, t) => {
					switch (t.type) {
						case le.g: {
							const {
								subredditName: n,
								bannedContributor: s
							} = t.payload;
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				Se = Object(B.c)({
					listing: ke,
					search: Oe
				}),
				je = n("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const we = {};
			var Ie = (e = we, t) => {
				switch (t.type) {
					case je.c:
					case je.a: {
						const {
							subredditName: n,
							afterToken: s
						} = t.payload;
						return {
							...e,
							[n]: s
						}
					}
					default:
						return e
				}
			};
			const Ne = {};
			var Te = (e = Ne, t) => {
				switch (t.type) {
					case je.b: {
						const {
							subredditName: n,
							error: s
						} = t.payload;
						return {
							...e,
							[n]: s
						}
					}
					case je.d:
					case je.c: {
						const {
							subredditName: n
						} = t.payload;
						return Object(Y.a)(e, n)
					}
					default:
						return e
				}
			};
			const Me = {};
			var Pe = (e = Me, t) => {
					switch (t.type) {
						case je.d:
						case je.c:
						case je.b: {
							const {
								subredditName: n
							} = t.payload, s = t.type === je.d;
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				Re = Object(B.c)({
					error: Te,
					pending: Pe
				});
			const Ae = {};
			var Le = (e = Ae, t) => {
				switch (t.type) {
					case je.c:
					case je.a: {
						const {
							subredditName: n,
							contributors: s
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								...s
							}
						}
					}
					case je.e: {
						const {
							subredditName: n,
							contributor: s
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								...s
							}
						}
					}
					case je.f: {
						const {
							subredditName: n,
							userId: s
						} = t.payload, a = Object(Y.a)(e[n], s);
						return {
							...e,
							newState: a
						}
					}
					default:
						return e
				}
			};
			const Fe = {};
			var De = (e = Fe, t) => {
					switch (t.type) {
						case je.c:
						case je.a: {
							const {
								subredditName: n,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[n]: ve()([...e[n] || [], ...s])
							}
						}
						case je.e: {
							const {
								subredditName: n,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[n]: [...s, ...e[n] || []]
							}
						}
						case je.f: {
							const {
								subredditName: n,
								userId: s
							} = t.payload;
							return {
								...e,
								[n]: (e[n] || []).filter(e => e !== s)
							}
						}
						default:
							return e
					}
				},
				Ue = Object(B.c)({
					afterToken: Ie,
					api: Re,
					models: Le,
					userOrder: De
				});
			const Be = {};
			var He = (e = Be, t) => {
					switch (t.type) {
						case je.g: {
							const {
								subredditName: n,
								contributor: s
							} = t.payload;
							return {
								...e,
								[n]: s
							}
						}
						default:
							return e
					}
				},
				We = Object(B.c)({
					listing: Ue,
					search: He
				}),
				qe = Object(B.c)({
					diff: W,
					directory: G,
					pages: z,
					pageSettings: J,
					revisions: de,
					wikiBannedContributors: Se,
					wikiContributors: We
				});
			Object(U.a)({
				pages: {
					subredditWiki: qe
				}
			});
			const Ge = Object(d.a)(h.c),
				Ke = Object(d.a)(h.b),
				Ve = Object(d.a)(h.a),
				ze = (e, t) => !!Object(k.b)(e, {
					subredditName: t
				}),
				Xe = e => async (t, n, a) => {
					const {
						canShowFailToast: o,
						wikiPageName: d
					} = e, l = d === T.j, c = {
						...e,
						includePageData: e.includePageData && !l
					}, m = d ? Object(R.a)({
						...e,
						wikiPageName: d
					}) : void 0;
					t(Ge({
						options: c,
						pageKey: m
					}));
					const u = await Object(M.a)(a.gqlContext(), c),
						p = u.body,
						b = u.ok ? p.data && p.data.subreddit && p.data.subreddit.wiki : null;
					return u.ok && b ? t(Ke({
						options: c,
						pageKey: m,
						subredditWiki: b
					})) : (t(Ve({
						options: c,
						pageKey: m,
						error: u.error || {
							type: i.I.NOT_FOUND_ERROR
						}
					})), o && t(Object(g.f)({
						id: "SUBREDDIT_WIKI_DATA_ERROR_TOAST",
						kind: A.b.Error,
						text: s.fbt._("Something went wrong loading this page. Try again?", null, {
							hk: "wZxm"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "mgOpG"
						}),
						buttonAction: Xe(e)
					}))), !(!u.ok || !r()(p.data.subreddit)) || !(!u.ok || !b)
				}, Qe = e => async (t, n) => {
					const {
						params: s,
						url: a
					} = e, {
						wikiPageName: r
					} = s, i = Object(F.a)(a, s);
					let d = !1;
					return T.l.includes(r || "") ? (await (async (e, t) => {
						const n = `${c.a.oldRedditUrl}${Object(u.b)(e)}`;
						window.location.href = n
					})(e.url), d = !0) : a !== i && (await t(Object(o.c)(i)), d = !0), d
				}, Je = (e, t, n = !1) => async (a, r, o) => {
					const {
						subredditName: d = T.e,
						wikiPageName: c,
						wikiSubRoute: m
					} = e, u = t[N.E], p = t[N.F], h = u ? Object(v.a)(u) : void 0, E = p ? Object(v.a)(p) : void 0, _ = c === T.j, C = m === T.m.Revisions;
					let y = !1,
						O = !1;
					if (n) {
						const {
							pageName: t
						} = e;
						y = t === i.ec.WikiContributors, O = t === i.ec.WikiBanned
					}
					const S = r(),
						M = (_ || n) && !ze(S, d),
						P = !!c && !((e, t, n, s) => {
							return n === T.j ? ze(e, t) : !!Object(k.c)(e, {
								subredditName: t,
								wikiPageName: n,
								revisionId: s
							})
						})(S, d, c, h),
						R = [];
					R.push(a(((e, t = !1) => async (n, s) => {
						const a = s(),
							r = {
								sort: i.W.HOT
							},
							o = Object(l.a)(e, r.sort),
							d = a.listings.postOrder.api.error[o],
							c = a.listings.postOrder.api.pending[o],
							m = !!a.listings.postOrder.ids[o];
						return !!(c || m && !d) || (await n(Object(b.subredditDataRequested)(o, e, r, t)), !s().listings.postOrder.api.error[o])
					})(d))), (M || P) && R.push(a(Xe({
						includeDirectory: M,
						includePageData: P,
						revisionId: h,
						subredditName: d,
						wikiPageName: c
					}))), m === T.m.Settings && c && R.push(a(Object(w.c)(d, c))), c && h && E && R.push(a(j({
						comparisonRevisionId: E,
						revisionId: h,
						subredditName: d,
						wikiPageName: c
					}))), C && R.push(a(Object(I.c)({
						isRecent: !c,
						wikiPageName: c,
						subredditName: d
					}))), y && R.push(a(Object(x.e)(d))), O && R.push(a(Object(f.e)(d))), (await Promise.all(R)).every(Boolean) || a(Object(g.f)({
						kind: A.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "3UWos1"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "mgOpG"
						}),
						buttonAction: Je(e, t, n)
					}))
				}, Ye = e => async (t, n) => {
					if (await t(Qe(e))) return;
					const {
						params: s,
						queryParams: a
					} = e, r = s.subredditName || T.e;
					t(m.m({
						title: s.wikiPageName ? `${s.wikiPageName} - ${r}` : `wiki - ${r}`
					})), await t(Je(s, a));
					const o = Object(D.w)(n(), {
							subredditName: r
						}),
						i = n();
					o && (i.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						t(Object(p.b)(L.a.SUBREDDIT))
					}), t(Object(p.d)({
						isViewSafe: Object(P.a)([], [o])
					})))
				}
		},
		"./src/reddit/actions/scheduledPosts/delete.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/scheduledPosts/constants.ts"),
				r = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/DeleteScheduledPost.json");
			var d = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				l = n("./src/reddit/models/ScheduledPost/index.ts"),
				c = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/selectors/scheduledPosts/index.ts"),
				u = n("./src/telemetry/index.ts");
			const p = Object(s.a)(a.i),
				b = (e, t) => async (n, s, {
					gqlContext: b
				}) => {
					const h = Object(m.a)(s(), {
						subredditId: e,
						scheduledPostId: t
					});
					h && Object(l.p)(h) && Object(u.a)(Object(d.s)()(s(), h)), h ? (await ((e, t) => Object(o.a)(e, {
						...i,
						variables: t
					}))(b(), {
						input: {
							id: h.id
						}
					})).ok ? (n(Object(r.f)(Object(r.e)(a.q(), c.b.SuccessCommunity))), n(p({
						subredditId: e,
						scheduledPostId: t
					}))) : n(Object(r.f)(Object(r.e)(a.p(), c.b.Error))) : n(Object(r.f)(Object(r.e)(a.u(), c.b.Error)))
				}
		},
		"./src/reddit/actions/subredditModeration/approvedSubmitters.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "d", (function() {
				return I
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/get.js"),
				r = n.n(a),
				o = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				m = n("./src/reddit/constants/headers.ts"),
				u = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const p = (e, t, n) => Object(l.a)(Object(c.a)(e, [m.a]), {
				endpoint: Object(u.a)(`${e.apiUrl}/api/v1/${t}/contributors`),
				method: d.jb.GET,
				data: n
			});
			var b = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				h = n("./src/reddit/models/SubredditModeration/index.ts"),
				g = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/actions/subredditModeration/constants.ts");
			const x = Object(o.a)(f.g),
				E = Object(o.a)(f.f),
				v = Object(o.a)(f.e),
				_ = (e, t = {}) => async (n, s, {
					apiContext: a
				}) => {
					const r = s(),
						o = t.after || "",
						i = Object(h.d)(e, o),
						d = r.pages.modHub.approvedSubmitters.fetchedTokens[i];
					if (r.pages.modHub.approvedSubmitters.api.pending[i] || d) return;
					n(x({
						subredditId: e,
						fetchedToken: o
					}));
					const l = r.subreddits.models[e].name,
						c = await p(a(), l, t);
					c.ok ? n(E({
						...c.body,
						fetchedToken: o
					})) : n(v({
						subredditId: e,
						fetchedToken: o
					}))
				}, C = Object(o.a)(f.j), k = Object(o.a)(f.i), y = Object(o.a)(f.h), O = (e, t) => async (n, s, {
					apiContext: a
				}) => {
					const r = s().subreddits.models[e].name,
						o = {
							username: Object(b.a)(t)
						};
					n(C());
					const i = await p(a(), r, o);
					i.ok ? n(k(i.body)) : n(y(i.error))
				}, S = Object(o.a)(f.d), j = Object(o.a)(f.k), w = (e, t) => async (n, a, {
					apiContext: o
				}) => {
					const u = a(),
						h = u.subreddits.models[e].url,
						f = u.subreddits.models[e].name;
					t = Object(b.a)(t);
					const x = await ((e, t, n) => Object(l.a)(Object(c.a)(e, [m.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: d.jb.POST,
						data: {
							api_type: "json",
							name: n,
							type: "contributor"
						}
					}))(o(), h, t);
					if (x.ok) {
						const e = {
							username: t
						};
						n(Object(i.f)({
							kind: g.b.SuccessMod,
							text: s.fbt._("Successfully added an approved submitter", null, {
								hk: "4gruK7"
							})
						}));
						const a = await p(o(), f, e);
						a.ok && n(S(a.body))
					} else {
						const e = r()(x, "body.json.errors[0][1]", s.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(i.f)({
							kind: g.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, I = (e, t) => async (n, a, {
					apiContext: o
				}) => {
					const u = a().subreddits.models[e].url,
						p = await ((e, t, n) => Object(l.a)(Object(c.a)(e, [m.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: d.jb.POST,
							data: {
								api_type: "json",
								id: n,
								type: "contributor"
							}
						}))(o(), u, t);
					if (p.ok) n(j({
						subredditId: e,
						userId: t
					}));
					else {
						const e = r()(p, "body.json.errors[0][1]", s.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(i.f)({
							kind: g.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}
		},
		"./src/reddit/actions/subredditModeration/ban.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return $
			})), n.d(t, "d", (function() {
				return se
			})), n.d(t, "b", (function() {
				return oe
			})), n.d(t, "e", (function() {
				return ie
			})), n.d(t, "a", (function() {
				return de
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/get.js"),
				r = n.n(a),
				o = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/apiRequestState.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/subreddit.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				m = n("./src/reddit/constants/modals.ts"),
				u = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				b = n("./src/lib/omitHeaders/index.ts"),
				h = n("./src/reddit/constants/headers.ts"),
				g = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				f = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const x = (e, t, n) => Object(p.a)(Object(b.a)(e, [h.a]), {
				endpoint: Object(g.a)(Object(f.a)(`${e.apiUrl}/api/v1/${t}/banned`)),
				method: u.jb.GET,
				data: n
			});
			var E = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				v = n("./src/reddit/models/SubredditModeration/index.ts"),
				_ = n("./src/reddit/models/Toast/index.ts"),
				C = n("./src/reddit/selectors/activeModalId.ts"),
				k = n("./src/reddit/selectors/bannedUser.ts"),
				y = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				S = n("./src/reddit/actions/subredditModeration/constants.ts"),
				j = n("./src/lib/initializeClient/installReducer.ts"),
				w = n("./node_modules/redux/es/redux.js");
			var I = (e = null, t) => {
				switch (t.type) {
					case S.o:
					case S.n:
						return null;
					case S.m:
						return t.payload;
					default:
						return e
				}
			};
			const N = {};
			var T = (e = N, t) => {
					switch (t.type) {
						case S.o: {
							const {
								subredditId: n,
								fetchedToken: s
							} = t.payload, a = Object(v.d)(n, s);
							return {
								...e,
								[a]: !0
							}
						}
						case S.n:
						case S.m: {
							const {
								subredditId: n,
								fetchedToken: s
							} = t.payload, a = Object(v.d)(n, s);
							return {
								...e,
								[a]: !1
							}
						}
						default:
							return e
					}
				},
				M = Object(w.c)({
					error: I,
					pending: T
				});
			const P = {};
			var R = (e = P, t) => {
					switch (t.type) {
						case S.n: {
							const {
								fetchedToken: n,
								subredditId: s
							} = t.payload, a = Object(v.d)(s, n);
							return {
								...e,
								[a]: !0
							}
						}
						default:
							return e
					}
				},
				A = n("./src/reddit/actions/inContextModeration.ts");
			var L = (e = null, t) => {
				switch (t.type) {
					case A.a:
						return t.payload;
					default:
						return e
				}
			};
			const F = {};
			var D = (e = F, t) => {
					switch (t.type) {
						case S.n: {
							const {
								subredditId: e,
								after: n
							} = t.payload;
							return {
								[e]: n
							}
						}
						default:
							return e
					}
				},
				U = n("./node_modules/icepick/icepick.js");
			const B = {};
			var H = (e = B, t) => {
				switch (t.type) {
					case S.l:
					case S.n: {
						const {
							subredditId: n,
							bannedUsers: s
						} = t.payload;
						return Object(U.merge)(e, {
							[n]: s
						})
					}
					case S.s: {
						const {
							subredditId: n,
							userId: s
						} = t.payload;
						return Object(U.unsetIn)(e, [n, s])
					}
					default:
						return e
				}
			};
			var W = (e = null, t) => {
				switch (t.type) {
					case S.r:
					case S.q:
						return null;
					case S.p:
						return t.payload;
					default:
						return e
				}
			};
			var q = (e = !1, t) => {
					switch (t.type) {
						case S.r:
							return !0;
						case S.q:
						case S.p:
							return !1;
						default:
							return e
					}
				},
				G = Object(w.c)({
					error: W,
					pending: q
				});
			var K = (e = null, t) => {
					switch (t.type) {
						case S.r:
						case S.p:
							return null;
						case S.q: {
							const e = t.payload.bannedUserIds[0];
							return e ? t.payload.bannedUsers[e] : null
						}
						default:
							return e
					}
				},
				V = Object(w.c)({
					api: G,
					result: K
				});
			const z = {};
			var X = (e = z, t) => {
					switch (t.type) {
						case S.n: {
							const {
								subredditId: n,
								bannedUserIds: s
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: [...e[n], ...s]
							} : {
								...e,
								[n]: s
							}
						}
						case S.s: {
							const {
								subredditId: n,
								userId: s
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== s)
							}
						}
						case S.l: {
							const {
								subredditId: n,
								bannedUserIds: s
							} = t.payload, a = s[0];
							return a && e[n] && -1 === e[n].indexOf(a) ? {
								[n]: [a, ...e[n]]
							} : e
						}
						default:
							return e
					}
				},
				Q = Object(w.c)({
					api: M,
					fetchedTokens: R,
					inContext: L,
					loadMore: D,
					models: H,
					search: V,
					userOrder: X
				});
			Object(j.a)({
				features: {
					banned: Q
				}
			});
			const J = Object(o.a)(S.o),
				Y = Object(o.a)(S.n),
				Z = Object(o.a)(S.m),
				$ = (e, t = {}) => async (n, s, {
					apiContext: a
				}) => {
					const r = s(),
						o = t.after || "",
						i = Object(v.d)(e, o),
						d = r.features.banned.fetchedTokens[i];
					if (r.features.banned.api.pending[i] || d) return;
					n(J({
						subredditId: e,
						fetchedToken: o
					}));
					const l = r.subreddits.models[e].name,
						c = await x(a(), l, t);
					c.ok ? n(Y({
						...c.body,
						fetchedToken: o
					})) : n(Z({
						subredditId: e,
						fetchedToken: o
					}))
				}, ee = Object(o.a)(S.r), te = Object(o.a)(S.q), ne = Object(o.a)(S.p), se = (e, t) => async (n, s, {
					apiContext: a
				}) => {
					const r = s().subreddits.models[e].name,
						o = {
							username: Object(E.a)(t)
						};
					n(ee());
					const i = await x(a(), r, o);
					i.ok ? n(te(i.body)) : n(ne(i.error))
				}, ae = Object(o.a)(S.l), re = Object(o.a)(S.s), oe = (e, t, n) => async (a, o, {
					apiContext: d
				}) => {
					const l = o(),
						m = l.subreddits.models[e].url,
						g = l.subreddits.models[e].name;
					t.username = Object(E.a)(t.username), a(Object(i.h)(n));
					const f = await ((e, t, n) => Object(p.a)(Object(b.a)(e, [h.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: u.jb.POST,
						data: {
							api_type: "json",
							ban_reason: n.reason,
							ban_message: n.banMessage,
							duration: n.duration,
							name: n.username,
							note: n.modNote,
							ban_context: n.contextId,
							type: "banned"
						}
					}))(d(), m, t);
					if (f.ok) {
						a(Object(i.e)(n));
						const e = {
							username: t.username
						};
						a(Object(c.f)({
							kind: _.b.SuccessMod,
							text: s.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const r = await x(d(), g, e);
						r.ok && a(ae(r.body))
					} else {
						a(Object(i.f)(n, f.error));
						const e = r()(f, "body.json.errors[0][1]", s.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						a(Object(c.f)({
							kind: _.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ie = (e, t) => async (n, a, {
					apiContext: o
				}) => {
					const i = a().subreddits.models[e].url,
						d = await ((e, t, n) => Object(p.a)(Object(b.a)(e, [h.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: u.jb.POST,
							data: {
								api_type: "json",
								id: n,
								type: "banned"
							}
						}))(o(), i, t);
					if (d.ok) n(re({
						subredditId: e,
						userId: t
					})), n(Object(c.f)({
						kind: _.b.SuccessMod,
						text: s.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = r()(d, "body.json.errors[0][1]", s.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(c.f)({
							kind: _.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, de = (e, t) => async (n, s) => {
					const a = s();
					await Promise.all([(async () => {
						if (!Object(C.b)(m.a.BAN_USER)(a) && !Object(y.O)(a, {
								subredditId: e
							})) {
							const t = Object(y.R)(a, {
								subredditId: e
							});
							await n(Object(l.o)(t.name))
						}
					})(), (async () => {
						const s = Object(O.nb)(a, {
							userName: t
						});
						if (!s) return;
						const r = Object(k.h)(a, {
							subredditId: e
						});
						r && r[s.id] || await n($(e, {
							username: t
						}))
					})()]), n(Object(d.i)(m.a.BAN_USER))
				}
		},
		"./src/reddit/actions/subredditModeration/mute.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "a", (function() {
				return I
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./node_modules/lodash/get.js"),
				o = n.n(r),
				i = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/makeApiRequest/index.ts"),
				l = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
				m = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const u = (e, t, n) => Object(d.a)(Object(l.a)(e, [c.a]), {
				endpoint: Object(m.a)(`${e.apiUrl}/api/v1/${t}/muted`),
				method: i.jb.GET,
				data: n
			});
			var p = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				b = n("./src/reddit/models/SubredditModeration/index.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				g = n("./src/reddit/actions/toaster.ts"),
				f = n("./src/reddit/actions/subredditModeration/constants.ts");
			const x = Object(a.a)(f.N),
				E = Object(a.a)(f.L),
				v = Object(a.a)(f.K),
				_ = (e, t = {}) => async (n, s, {
					apiContext: a
				}) => {
					const r = s(),
						o = t.after || "",
						i = Object(b.d)(e, o),
						d = r.pages.modHub.muted.fetchedTokens[i];
					if (r.pages.modHub.muted.api.pending[i] || d) return;
					n(x({
						subredditId: e,
						fetchedToken: o
					}));
					const l = r.subreddits.models[e].name,
						c = await u(a(), l, t);
					c.ok ? n(E({
						...c.body,
						fetchedToken: o
					})) : n(v({
						subredditId: e,
						fetchedToken: o
					}))
				}, C = Object(a.a)(f.Q), k = Object(a.a)(f.P), y = Object(a.a)(f.O), O = (e, t) => async (n, s, {
					apiContext: a
				}) => {
					const r = s().subreddits.models[e].name,
						o = {
							username: Object(p.a)(t)
						};
					n(C());
					const i = await u(a(), r, o);
					i.ok ? n(k(i.body)) : n(y(i.error))
				}, S = Object(a.a)(f.M), j = Object(a.a)(f.R), w = (e, t) => async (n, a, {
					apiContext: r
				}) => {
					const m = a().subreddits.models[e].url,
						u = await ((e, t, n) => Object(d.a)(Object(l.a)(e, [c.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: i.jb.POST,
							data: {
								api_type: "json",
								id: n,
								type: "muted"
							}
						}))(r(), m, t);
					if (u.ok) n(j({
						subredditId: e,
						userId: t
					}));
					else {
						const e = o()(u, "body.json.errors[0][1]", s.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(g.f)({
							kind: h.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, I = (e, t, n) => async (a, r, {
					apiContext: m
				}) => {
					const b = r(),
						f = b.subreddits.models[e].url,
						x = b.subreddits.models[e].name;
					t = Object(p.a)(t);
					const E = await ((e, t, n, s) => Object(d.a)(Object(l.a)(e, [c.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: i.jb.POST,
						data: {
							api_type: "json",
							name: n,
							note: s,
							type: "muted"
						}
					}))(m(), f, t, n);
					if (E.ok) {
						const e = {
							username: t
						};
						a(Object(g.f)({
							kind: h.b.SuccessMod,
							text: s.fbt._("Successfully muted a user", null, {
								hk: "2ypyuL"
							})
						}));
						const n = await u(m(), x, e);
						n.ok && a(S(n.body))
					} else {
						const e = o()(E, "body.json.errors[0][1]", s.fbt._("Something went wrong", null, {
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
		"./src/reddit/actions/wiki/wikiBannedContributors/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			}));
			const s = "WIKI_BANNED_CONTRIBUTORS_PENDING",
				a = "WIKI_BANNED_CONTRIBUTORS_LOADED",
				r = "WIKI_BANNED_CONTRIBUTORS_FAILED",
				o = "MORE_WIKI_BANNED_CONTRIBUTORS_LOADED",
				i = "WIKI_BANNED_CONTRIBUTOR_ADDED",
				d = "WIKI_BANNED_CONTRIBUTOR_REMOVED",
				l = "WIKI_BANNED_CONTRIBUTOR_SEARCH_LOADED"
		},
		"./src/reddit/actions/wiki/wikiBannedContributors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return E
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "a", (function() {
				return k
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return j
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				l = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
				m = n("./src/redditGQL/operations/SubredditWikiBannedContributors.json");
			const u = (e, t) => Object(d.a)(e, {
				...m,
				variables: t
			});
			var p = e => {
					const {
						bannedMembersInfo: t
					} = e, {
						edges: n,
						pageInfo: s
					} = t, a = [], r = {};
					return n.forEach(e => {
						const {
							date: t,
							redditor: n,
							editWikiBanInfo: s
						} = e.node;
						n.id && n.name && n.icon && (r[n.id] = {
							id: n.id,
							username: n.name,
							iconUrl: n.icon.url,
							date: t,
							daysRemaining: s.daysRemaining,
							note: s.note
						}, a.push(n.id))
					}), {
						afterToken: s.hasNextPage ? s.endCursor : null,
						bannedContributors: r,
						userOrder: a
					}
				},
				b = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			const g = Object(r.a)(h.d),
				f = Object(r.a)(h.c),
				x = Object(r.a)(h.b),
				E = e => async (t, n, s) => {
					t(g({
						subredditName: e
					}));
					const r = {
							subredditName: e
						},
						o = await u(s.gqlContext(), r);
					if (o.ok) {
						const n = o.body,
							s = n.data.subreddit && n.data.subreddit.wiki;
						if (s) {
							const n = p(s);
							t(f({
								...n,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const n = o.error || {
							type: a.I.UNKNOWN_ERROR
						};
						t(x({
							error: n,
							subredditName: e.toLowerCase()
						}))
					}
					return o.ok
				}, v = Object(r.a)(h.a), _ = (e, t) => async (n, a, r) => {
					const i = {
							subredditName: e,
							after: t
						},
						d = await u(r.gqlContext(), i);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = p(t.data.subreddit.wiki);
							n(v({
								...s,
								subredditName: e.toLowerCase()
							}))
						}
					} else n(Object(o.f)({
						kind: b.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2EIEjY"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: _(e, t)
					}));
					return d.ok
				}, C = Object(r.a)(h.e), k = (e, t) => async (n, r, d) => {
					const m = await ((e, t, n) => Object(i.a)(Object(l.a)(e, [c.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: a.jb.POST,
						data: {
							api_type: "json",
							name: n.username,
							type: "wikibanned",
							duration: n.duration,
							ban_reason: n.banReason,
							note: n.note
						}
					}))(d.apiContext(), e, t);
					if (m.ok) {
						n(Object(o.f)({
							kind: b.b.SuccessMod,
							text: s.fbt._("Successfully banned user", null, {
								hk: "1VcdP9"
							})
						}));
						const a = {
								subredditName: e,
								username: t.username
							},
							r = (await u(d.gqlContext(), a)).body;
						if (r.data.subreddit.wiki) {
							const t = p(r.data.subreddit.wiki);
							n(C({
								bannedContributor: t.bannedContributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (m.error) {
						let e;
						m.error.type === a.I.USER_DOESNT_EXIST && (e = s.fbt._("That user doesn't exist", null, {
							hk: "1AFgzG"
						})), n(Object(o.f)({
							kind: b.b.Error,
							text: e || s.fbt._("Something went wrong", null, {
								hk: "14O55Y"
							})
						}))
					}
					return m.ok
				}, y = Object(r.a)(h.f), O = (e, t) => async (n, r, d) => {
					const m = await ((e, t, n) => Object(i.a)(Object(l.a)(e, [c.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: a.jb.POST,
						data: {
							api_type: "json",
							id: n,
							type: "wikibanned"
						}
					}))(d.apiContext(), e, t);
					return m.ok ? (n(Object(o.f)({
						kind: b.b.SuccessMod,
						text: s.fbt._("User has been successfully removed", null, {
							hk: "381leB"
						})
					})), n(y({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : n(Object(o.f)({
						kind: b.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "4lHXgg"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: O(e, t)
					})), m.ok
				}, S = Object(r.a)(h.g), j = (e, t) => async (n, a, r) => {
					const i = {
							subredditName: e,
							username: t
						},
						d = await u(r.gqlContext(), i);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = p(t.data.subreddit.wiki),
								a = Object.keys(s.bannedContributors)[0];
							n(S({
								subredditName: e.toLowerCase(),
								bannedContributor: s.bannedContributors[a]
							}))
						}
					} else n(Object(o.f)({
						kind: b.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2iRQ4u"
						})
					}));
					return d.ok
				}
		},
		"./src/reddit/actions/wiki/wikiContributors/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			}));
			const s = "WIKI_CONTRIBUTORS_PENDING",
				a = "WIKI_CONTRIBUTORS_LOADED",
				r = "WIKI_CONTRIBUTORS_FAILED",
				o = "MORE_WIKI_CONTRIBUTORS_LOADED",
				i = "WIKI_CONTRIBUTOR_ADDED",
				d = "WIKI_CONTRIBUTOR_REMOVED",
				l = "WIKI_CONTRIBUTOR_SEARCH_LOADED"
		},
		"./src/reddit/actions/wiki/wikiContributors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return E
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "a", (function() {
				return k
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return j
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				l = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
				m = n("./src/redditGQL/operations/SubredditWikiContributors.json");
			const u = (e, t) => Object(d.a)(e, {
				...m,
				variables: t
			});
			var p = e => {
					const {
						contributorsInfo: t
					} = e, {
						edges: n,
						pageInfo: s
					} = t, a = [], r = {};
					return n.forEach(e => {
						const {
							date: t,
							redditor: n
						} = e.node;
						n.id && n.name && n.icon && (r[n.id] = {
							id: n.id,
							username: n.name,
							iconUrl: n.icon.url,
							date: t
						}, a.push(n.id))
					}), {
						afterToken: s.hasNextPage ? s.endCursor : null,
						contributors: r,
						userOrder: a
					}
				},
				b = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const g = Object(r.a)(h.d),
				f = Object(r.a)(h.c),
				x = Object(r.a)(h.b),
				E = e => async (t, n, s) => {
					t(g({
						subredditName: e
					}));
					const r = {
							subredditName: e
						},
						o = await u(s.gqlContext(), r);
					if (o.ok) {
						const n = o.body,
							s = n.data.subreddit && n.data.subreddit.wiki;
						if (s) {
							const n = p(s);
							t(f({
								...n,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const n = o.error || {
							type: a.I.UNKNOWN_ERROR
						};
						t(x({
							error: n,
							subredditName: e.toLowerCase()
						}))
					}
					return o.ok
				}, v = Object(r.a)(h.a), _ = (e, t) => async (n, a, r) => {
					const i = {
							subredditName: e,
							after: t
						},
						d = await u(r.gqlContext(), i);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = p(t.data.subreddit.wiki);
							n(v({
								...s,
								subredditName: e.toLowerCase()
							}))
						}
					} else n(Object(o.f)({
						kind: b.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: _(e, t)
					}));
					return d.ok
				}, C = Object(r.a)(h.e), k = (e, t) => async (n, r, d) => {
					const m = await ((e, t, n) => Object(i.a)(Object(l.a)(e, [c.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: a.jb.POST,
						data: {
							api_type: "json",
							name: n,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					if (m.ok) {
						n(Object(o.f)({
							kind: b.b.SuccessMod,
							text: s.fbt._("User has been successfully added", null, {
								hk: "3mt5Vr"
							})
						}));
						const a = {
								subredditName: e,
								username: t
							},
							i = (await u(d.gqlContext(), a)).body;
						if (i.data.subreddit.wiki) {
							const t = p(i.data.subreddit.wiki),
								s = Object.keys(t.contributors)[0];
							!!r().pages.subredditWiki.wikiContributors.listing.models[e.toLowerCase()][s] || n(C({
								contributor: t.contributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (m.error) {
						let e;
						const t = m.error.type;
						t === a.I.USER_DOESNT_EXIST ? e = s.fbt._("That user doesn't exist", null, {
							hk: "1OHcCX"
						}) : t === a.I.BANNED_FROM_SUBREDDIT && (e = s.fbt._("That user is banned from the subreddit", null, {
							hk: "4eZcXp"
						})), n(Object(o.f)({
							kind: b.b.Error,
							text: e || s.fbt._("Something went wrong", null, {
								hk: "3VCQr6"
							})
						}))
					}
					return m.ok
				}, y = Object(r.a)(h.f), O = (e, t) => async (n, r, d) => {
					const m = await ((e, t, n) => Object(i.a)(Object(l.a)(e, [c.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: a.jb.POST,
						data: {
							api_type: "json",
							id: n,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					return m.ok ? (n(Object(o.f)({
						kind: b.b.SuccessMod,
						text: s.fbt._("User has been successfully removed", null, {
							hk: "2OevWA"
						})
					})), n(y({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : n(Object(o.f)({
						kind: b.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "1zUdz2"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: O(e, t)
					})), m.ok
				}, S = Object(r.a)(h.g), j = (e, t) => async (n, a, r) => {
					const i = {
							subredditName: e,
							username: t
						},
						d = await u(r.gqlContext(), i);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = p(t.data.subreddit.wiki),
								a = Object.keys(s.contributors)[0];
							n(S({
								subredditName: e.toLowerCase(),
								contributor: s.contributors[a]
							}))
						}
					} else n(Object(o.f)({
						kind: b.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2s4L9n"
						})
					}));
					return d.ok
				}
		},
		"./src/reddit/actions/wiki/wikiEditing/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = "WIKI_PAGE_SAVE_SUCCESS"
		},
		"./src/reddit/actions/wiki/wikiPageSettings/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			const s = "PAGE__SUBREDDIT_WIKI_PAGE_SETTINGS_LOADED",
				a = "SUBREDDIT_WIKI_PAGE_SETTINGS_UPDATED",
				r = "SUBREDDIT_WIKI_PAGE_CONTRIBUTOR_REOVED",
				o = "SUBREDDIT_WIKI_PAGE_MORE_CONTRIBUTORS_LOADED"
		},
		"./src/reddit/actions/wiki/wikiPageSettings/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return C
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "d", (function() {
				return I
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/subredditSettings.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/lib/makeApiRequest/index.ts"),
				l = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				m = n("./src/reddit/constants/headers.ts"),
				u = n("./src/reddit/models/SubredditWikiPage/index.ts"),
				p = n("./src/redditGQL/operations/SubredditWikiPageSettings.json");
			const b = (e, t) => Object(l.a)(e, {
					...p,
					variables: t
				}),
				h = {
					[u.a.Inherit]: "0",
					[u.a.Contributors]: "1",
					[u.a.Mods]: "2"
				};
			var g = e => {
					const {
						editPermissions: t,
						editorsInfo: n,
						isVisible: s
					} = e, {
						edges: a,
						pageInfo: r
					} = n, o = [];
					return a.forEach(e => {
						e.node.name && e.node.icon && o.push({
							username: e.node.name,
							iconUrl: e.node.icon.url
						})
					}), {
						editPermissions: t,
						editorsInfo: o,
						isVisible: s,
						afterToken: r.hasNextPage ? r.endCursor : null
					}
				},
				f = n("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				x = n("./src/reddit/models/Toast/index.ts"),
				E = n("./src/reddit/selectors/subreddit.ts"),
				v = n("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const _ = Object(r.a)(v.c),
				C = (e, t) => async (n, s, a) => {
					const r = {
							subredditName: e,
							wikiPageName: t
						},
						i = await b(a.gqlContext(), r),
						d = Object(E.C)(s(), e);
					if (Object(E.T)(s(), d) || await n(Object(o.h)(e, d)), i.ok) {
						const e = i.body,
							t = e.data.subreddit && e.data.subreddit.wiki;
						if (t && t.page) {
							const e = g(t.page.settings);
							n(_({
								pageKey: Object(f.a)(r),
								settings: e
							}))
						}
					}
					return i.ok
				}, k = Object(r.a)(v.b), y = (e, t, n) => async (a, r, o) => {
					const d = {
							subredditName: e,
							wikiPageName: t,
							after: n
						},
						l = await b(o.gqlContext(), d);
					if (l.ok) {
						const n = l.body,
							s = n.data.subreddit && n.data.subreddit.wiki;
						if (s && s.page) {
							const n = g(s.page.settings),
								{
									editorsInfo: r,
									afterToken: o
								} = n;
							a(k({
								editorsInfo: r,
								afterToken: o,
								pageKey: Object(f.a)({
									wikiPageName: t,
									subredditName: e
								})
							}))
						}
					} else a(Object(i.f)({
						kind: x.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: y(e, t, n)
					}));
					return l.ok
				}, O = Object(r.a)(v.d), S = ({
					editPermissions: e,
					isVisible: t,
					wikiPageName: n,
					subredditName: s
				}) => async (r, o, i) => {
					const l = await (e => Object(d.a)(Object(c.a)(e.context, [m.a]), {
						endpoint: `${e.context.apiUrl}/r/${e.subredditName}/wiki/settings/${e.wikiPageName}`,
						method: a.jb.POST,
						data: {
							permlevel: h[e.editPermissions],
							listed: e.isVisible ? "on" : void 0
						}
					}))({
						context: i.apiContext(),
						editPermissions: e,
						isVisible: t,
						wikiPageName: n,
						subredditName: s
					});
					return l.ok && r(O({
						editPermissions: e,
						isVisible: t,
						pageKey: Object(f.a)({
							wikiPageName: n,
							subredditName: s
						})
					})), l.ok
				}, j = ({
					subredditName: e,
					username: t,
					wikiPageName: n
				}) => async (r, o, l) => {
					const u = await (e => Object(d.a)(Object(c.a)(e.context, [m.a]), {
						endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/add`,
						method: a.jb.POST,
						data: {
							page: e.wikiPageName,
							username: e.username
						}
					}))({
						context: l.apiContext(),
						wikiPageName: n,
						subredditName: e,
						username: t
					});
					if (u.ok) r(Object(i.f)({
						kind: x.b.SuccessCommunity,
						text: "User successfully added"
					})), await r(C(e, n));
					else if (u.error) {
						const e = u.error.type;
						let t = s.fbt._("Something went wrong", null, {
							hk: "8AkV3"
						});
						e === a.I.NOT_FOUND_ERROR && (t = s.fbt._("That user does not exist", null, {
							hk: "XDM7X"
						})), r(Object(i.f)({
							kind: x.b.Error,
							text: t
						}))
					}
					return u.ok
				}, w = Object(r.a)(v.a), I = ({
					subredditName: e,
					username: t,
					wikiPageName: n
				}) => async (s, r, o) => {
					const l = await (e => Object(d.a)(Object(c.a)(e.context, [m.a]), {
						endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/del`,
						method: a.jb.POST,
						data: {
							page: e.wikiPageName,
							username: e.username
						}
					}))({
						context: o.apiContext(),
						wikiPageName: n,
						subredditName: e,
						username: t
					});
					return l.ok && (s(Object(i.f)({
						kind: x.b.SuccessCommunity,
						text: "User has been successfully removed"
					})), s(w({
						username: t,
						pageKey: Object(f.a)({
							wikiPageName: n,
							subredditName: e
						})
					}))), l.ok
				}
		},
		"./src/reddit/actions/wiki/wikiRevisions/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			}));
			const s = "WIKI_REVISIONS_PENDING",
				a = "WIKI_REVISIONS_LOADED",
				r = "WIKI_REVISIONS_FAILED",
				o = "WIKI_PAGE_REVERT_SUCCESS",
				i = "WIKI_REVISION_TOGGLE_VISIBILITY"
		},
		"./src/reddit/actions/wiki/wikiRevisions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return O
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "b", (function() {
				return I
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/endpoints/page/subredditWiki.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				l = n("./src/redditGQL/operations/WikiRevisions.json");
			var c = n("./src/lib/makeApiRequest/index.ts"),
				m = n("./src/lib/omitHeaders/index.ts"),
				u = n("./src/reddit/constants/headers.ts"),
				p = n("./src/reddit/helpers/wiki/wikiRevision.ts");
			var b = (e, t) => Object(c.a)(Object(m.a)(e, [u.a]), {
				endpoint: `${e.apiUrl}/r/${t.subredditName}/api/wiki/hide`,
				method: a.jb.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(p.b)(t.revisionId)
				}
			});
			var h = (e, t) => Object(c.a)(Object(m.a)(e, [u.a]), {
				endpoint: `${e.apiUrl}/r/${t.subredditName}/api/wiki/revert`,
				method: a.jb.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(p.b)(t.revisionId)
				}
			});
			var g = e => {
					const t = e.subreddit && e.subreddit.wiki || {},
						n = t.pageRevisions && t.pageRevisions.revisions || t.recentRevisions;
					if (!n) throw new Error("Invalid response");
					return (e => {
						const t = {},
							n = [];
						return e.edges.forEach(e => {
							const s = e.node;
							t[s.id] = s, n.push(s.id)
						}), {
							pageInfo: e.pageInfo,
							revisions: t,
							revisionsIds: n
						}
					})(n)
				},
				f = n("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				x = n("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				E = n("./src/reddit/models/Toast/index.ts"),
				v = n("./src/reddit/selectors/subredditWiki.ts"),
				_ = n("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const C = Object(r.a)(_.d),
				k = Object(r.a)(_.c),
				y = Object(r.a)(_.b),
				O = e => async (t, n, r) => {
					const {
						canLoadMore: i = !1,
						canShowFailToast: c = !1,
						isRecent: m,
						subredditName: u,
						wikiPageName: p
					} = e, b = n(), h = Object(f.a)(e), x = Object(v.p)(b, {
						listingKey: h
					});
					if (!i && !!x) return !0;
					const _ = x && x.pageInfo.endCursor || void 0;
					if (!(!x || x.pageInfo.hasNextPage)) return !0;
					const S = {
							after: _,
							isRecent: m,
							subredditName: u,
							wikiPageName: p
						},
						j = {
							key: h,
							options: S
						};
					t(C(j));
					const w = await ((e, t) => Object(d.a)(e, {
						...l,
						variables: t
					}))(r.gqlContext(), S);
					if (w.ok) {
						const e = w.body;
						if (e.data.subreddit) {
							const n = g(e.data);
							t(k({
								...j,
								...n
							}))
						}
					} else {
						const n = w.error || {
							type: a.I.UNKNOWN_ERROR
						};
						t(y({
							...j,
							error: n
						})), c && t(Object(o.f)({
							kind: E.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "1e4Swa"
							}),
							buttonText: s.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: O(e)
						}))
					}
					return w.ok
				}, S = Object(r.a)(_.a), j = e => async (t, n, a) => {
					const {
						subredditName: r,
						wikiPageName: d
					} = e, l = Object(x.a)({
						...e,
						revisionId: void 0
					}), c = Object(f.a)({
						...e,
						isRecent: !1
					}), m = Object(f.a)({
						...e,
						isRecent: !0
					}), u = Object(v.p)(n(), {
						listingKey: c
					}), p = u && u.ids[0];
					if ((await h(a.apiContext(), e)).ok) {
						const e = (await Object(i.a)(a.gqlContext(), {
								includePageData: !0,
								subredditName: r,
								wikiPageName: d
							})).body,
							n = e.data.subreddit && e.data.subreddit.wiki,
							u = n && n.page;
						if (!u || !u.revision) return;
						if (u.revision.id === p) return void t(Object(o.f)({
							kind: E.b.SuccessCommunityGreen,
							text: s.fbt._("Wiki page is already at selected revision!", null, {
								hk: "46i9jx"
							})
						}));
						t(S({
							page: u,
							pageKey: l,
							pageRevisionsListingKey: c,
							recentRevisionsListingKey: m,
							subredditName: r,
							wikiPageName: d
						}))
					} else t(Object(o.f)({
						kind: E.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2L5ytY"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: j(e)
					}))
				}, w = Object(r.a)(_.e), I = e => async (t, n, a) => {
					const r = await b(a.apiContext(), e);
					if (r.ok) {
						const n = r.body.status;
						t(w({
							revisionId: e.revisionId,
							isHidden: n
						}))
					} else t(Object(o.f)({
						kind: E.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2gGq8w"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: j(e)
					}))
				}
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/AdLinkWrapper/index.m.less"),
				a = n.n(s);
			const r = n("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", a.a);
			t.a = r
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, n) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/reddit/components/CallToActionButton/index.tsx"),
				i = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = n("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				l = n.n(d);
			t.a = e => {
				const {
					adLinkContent: t,
					post: n,
					isCompact: a
				} = e, {
					source: d,
					callToAction: c,
					caption: m
				} = t;
				if (!d || !d.url) return null;
				let u = d.displayText;
				return d.displayText.length >= 40 && (u = d.displayText.slice(0, 40 - "...".length) + "..."), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: l.a.leftSideContent
				}, m && !a && r.a.createElement("span", {
					className: l.a.caption,
					title: m
				}, m), r.a.createElement(i.a, {
					href: d.url.replace(s.a.redditUrl, ""),
					isSponsored: n.isSponsored,
					postId: n.id,
					source: d,
					className: l.a.displayUrl
				}, u)), c && r.a.createElement(o.a, {
					className: l.a.callToAction,
					href: d.url,
					isSponsored: n.isSponsored,
					postId: n.id,
					source: d
				}, c))
			}
		},
		"./src/reddit/components/ApprovedSubmitterList/AddApprovedSubmitterModal.m.less": function(e, t, n) {
			e.exports = {
				PrimaryButton: "_2MgVqpGJKTGicaQowt_R9h",
				primaryButton: "_2MgVqpGJKTGicaQowt_R9h"
			}
		},
		"./src/reddit/components/ApprovedSubmitterList/AddApprovedSubmitterModal.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/controls/TextButton/index.tsx"),
				u = n("./src/reddit/helpers/isValidUsername/index.tsx"),
				p = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				b = n("./src/reddit/components/ApprovedSubmitterList/AddApprovedSubmitterModal.m.less"),
				h = n.n(b);
			const g = i.a.wrapped(c.l, "PrimaryButton", h.a);
			class f extends r.a.Component {
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
					return r.a.createElement(d.e, null, r.a.createElement(d.i, null, r.a.createElement(p.a, null, r.a.createElement(d.q, null, s.fbt._("Add approved user", null, {
						hk: "rVlIL"
					})), r.a.createElement(m.a, {
						onClick: e.toggleModal
					}, r.a.createElement(d.b, null)))), r.a.createElement(d.l, null, r.a.createElement(l.d, {
						placeholder: s.fbt._("Enter username", null, {
							hk: "4DdFFr"
						}),
						onChange: this.onInputChange,
						value: this.state.username,
						autoFocus: !0
					})), r.a.createElement(d.g, null, r.a.createElement(d.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(g, {
						onClick: this.onSubmit,
						"data-redditstyle": !0,
						disabled: !Object(u.a)(t.username)
					}, s.fbt._("Add user", null, {
						hk: "23A7cj"
					}))))
				}
			}
			t.a = Object(o.a)(f)
		},
		"./src/reddit/components/ApprovedSubmitterList/index.m.less": function(e, t, n) {
			e.exports = {
				PencilIcon: "_1XoRj9AWrCZUnxJt2JB2QS",
				pencilIcon: "_1XoRj9AWrCZUnxJt2JB2QS",
				noPermissions: "_2LSmyOf3zXlFqKumLW0h7B"
			}
		},
		"./src/reddit/components/ApprovedSubmitterList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/constants/index.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/subredditModeration/approvedSubmitters.ts"),
				p = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				b = n("./src/reddit/components/HumanDate/index.tsx"),
				h = n("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				g = n("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				f = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				x = n("./src/reddit/components/Scroller/Simple.tsx"),
				E = n("./src/reddit/components/SubredditModerationSearch/index.tsx"),
				v = n("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				_ = n("./src/reddit/components/SubredditModerationUserItem/index.tsx"),
				C = n("./src/reddit/controls/Button/index.tsx"),
				k = n("./src/reddit/icons/fonts/index.tsx"),
				y = n("./src/reddit/models/SubredditModeration/index.ts"),
				O = n("./src/reddit/selectors/activeModalId.ts"),
				S = n("./src/lib/objectSelector/index.ts"),
				j = n("./src/reddit/components/InboxTooltip/Component.tsx");
			const w = Object(S.a)((e, {
				subredditId: t
			}) => {
				const n = e.pages.modHub.approvedSubmitters.userOrder[t];
				return n ? n.map(n => e.pages.modHub.approvedSubmitters.models[t][n]) : j.a
			});
			var I = n("./src/reddit/selectors/user.ts"),
				N = n("./src/reddit/contexts/PageLayer/index.tsx"),
				T = n("./src/reddit/components/ApprovedSubmitterList/AddApprovedSubmitterModal.tsx"),
				M = n("./src/reddit/components/ApprovedSubmitterList/index.m.less"),
				P = n.n(M);
			const R = 24,
				A = Object(N.u)({
					username: e => Object(N.V)(e).user
				}),
				L = Object(d.c)({
					approvedSubmitters: w,
					approvedSubmittersListPending: (e, {
						subredditId: t
					}) => {
						const n = Object(y.d)(t);
						return !!e.pages.modHub.approvedSubmitters.api.pending[n]
					},
					isAddUserModalOpen: e => "ModerationPage--Modal--AddUser" === Object(O.a)(e),
					isConfirmModalOpen: e => "ModerationPage--Modal--RemoveUserConfirmation" === Object(O.a)(e),
					loadMoreToken: (e, {
						subredditId: t
					}) => e.pages.modHub.approvedSubmitters.loadMore[t],
					searchPending: e => !!e.pages.modHub.approvedSubmitters.search.api.pending,
					searchResult: e => e.pages.modHub.approvedSubmitters.search.result,
					currentUser: I.k
				}),
				F = Object(i.b)(L, (e, {
					subredditId: t
				}) => ({
					addSubmitter: (t, n) => e(Object(u.a)(t, n)),
					loadMore: n => e(Object(u.b)(t, {
						after: n
					})),
					removeSubmitter: (t, n) => e(Object(u.d)(t, n)),
					searchForSubmitter: (t, n) => e(Object(u.c)(t, n)),
					toggleRemoveUserModal: () => e(Object(m.i)("ModerationPage--Modal--RemoveUserConfirmation")),
					toggleAddUserModal: () => e(Object(m.i)("ModerationPage--Modal--AddUser"))
				}));
			class D extends o.a.Component {
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
						var t, n;
						return o.a.createElement(_.b, {
							timeAgo: o.a.createElement(b.d, {
								seconds: e.approvedAtUTC
							}),
							pageName: c.ec.Contributors,
							primaryButton: (null === (t = this.props.currentUser) || void 0 === t ? void 0 : t.id) !== e.id ? o.a.createElement("a", {
								href: `${s.a.redditUrl}/message/compose/?to=${e.username}`,
								rel: "noopener noreferrer",
								target: "_blank"
							}, o.a.createElement(C.r, null, a.fbt._("Send message", null, {
								hk: "2bul7M"
							}))) : null,
							secondaryButton: (null === (n = this.props.moderatorPermissions) || void 0 === n ? void 0 : n.access) ? o.a.createElement(C.r, {
								onClick: () => this.handleRemoveToggled(e.id, e.username)
							}, a.fbt._("Remove", null, {
								hk: "3tYl0U"
							})) : null,
							subredditId: this.props.subredditId,
							userIcon: e.accountIcon,
							username: e.username
						})
					}, this.renderAddUserModal = () => o.a.createElement(T.a, {
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
						state: n
					} = this, r = t.approvedSubmitters.length ? t.approvedSubmitters[t.approvedSubmitters.length - 1].id : void 0, i = null === (e = t.moderatorPermissions) || void 0 === e ? void 0 : e.access;
					return t.approvedSubmitters.length ? o.a.createElement(o.a.Fragment, null, i && o.a.createElement(f.c, null, o.a.createElement(C.l, {
						onClick: this.approveSubmitter
					}, a.fbt._("Approve user", null, {
						hk: "2v6FxN"
					}))), o.a.createElement(f.a, {
						className: Object(l.a)(!i && P.a.noPermissions)
					}, o.a.createElement(f.b, null, a.fbt._("Approved users", null, {
						hk: "1alMeD"
					}), o.a.createElement(g.a, {
						linkUrl: `${s.a.redditModHelpUrl}/hc/en-us/articles/360009164452`
					})), o.a.createElement(v.b, {
						activeSearchQuery: this.state.searchTerm,
						onSearch: this.onSearch
					}), n.searchTerm ? o.a.createElement(E.a, {
						cancelSearch: this.cancelSearch,
						noResultsFound: !t.searchResult,
						searchPending: t.searchPending,
						searchTerm: n.searchTerm
					}, t.searchResult && this.renderUser(t.searchResult)) : o.a.createElement(x.b, {
						loadMoreToken: r,
						onLoadMore: this.onLoadMore
					}, t.approvedSubmitters.map((e, t) => ({
						estHeight: R,
						id: e.id,
						render: () => this.renderUser(e)
					})))), t.isAddUserModalOpen && this.renderAddUserModal(), t.isConfirmModalOpen && n.userId && n.username && o.a.createElement(p.a, {
						actionText: a.fbt._("Remove", null, {
							hk: "3tYl0U"
						}),
						modalText: a.fbt._("Are you sure you want to remove {username} as an approved user?", [a.fbt._param("username", n.username)], {
							hk: "4ELjHt"
						}),
						onConfirm: this.handleRemoveConfirmed,
						toggleModal: t.toggleRemoveUserModal,
						trackClick: t.sendEventWithName("remove"),
						withOverlay: !0
					})) : o.a.createElement(o.a.Fragment, null, i && o.a.createElement(f.c, null, o.a.createElement(C.l, {
						onClick: this.approveSubmitter
					}, a.fbt._("Approve user", null, {
						hk: "1qX1LT"
					}))), o.a.createElement(f.a, {
						className: Object(l.a)(!i && P.a.noPermissions)
					}, o.a.createElement(f.b, null, a.fbt._("Approved users", null, {
						hk: "pxkv2"
					}), o.a.createElement(g.a, {
						linkUrl: `${s.a.redditModHelpUrl}/hc/en-us/articles/360009164452`
					})), t.approvedSubmittersListPending ? o.a.createElement(_.a, null) : o.a.createElement(h.c, {
						text: a.fbt._("No approved users in {subredditName}", [a.fbt._param("subredditName", t.subreddit.displayText)], {
							hk: "1VEG1v"
						})
					}, o.a.createElement(k.a, {
						name: "edit",
						className: P.a.PencilIcon
					}))), t.isAddUserModalOpen && this.renderAddUserModal())
				}
			}
			t.a = A(F(D))
		},
		"./src/reddit/components/BannedUserList/ExpandedComponent.m.less": function(e, t, n) {
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
		"./src/reddit/components/BannedUserList/index.m.less": function(e, t, n) {
			e.exports = {
				BanIcon: "_1c2rKv1iuQylye8ejI6-1v",
				banIcon: "_1c2rKv1iuQylye8ejI6-1v"
			}
		},
		"./src/reddit/components/BannedUserList/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return z
			}));
			var s = n("./src/config.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/subredditModeration/ban.ts"),
				u = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				p = n("./src/reddit/components/HumanDate/index.tsx"),
				b = n("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				h = n("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				g = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				f = n("./src/reddit/components/Scroller/Simple.tsx"),
				x = n("./src/reddit/components/SubredditModerationSearch/index.tsx"),
				E = n("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				v = n("./src/reddit/components/SubredditModerationUserItem/index.tsx"),
				_ = n("./src/reddit/controls/Button/index.tsx"),
				C = n("./src/reddit/icons/fonts/index.tsx"),
				k = n("./src/reddit/models/SubredditModeration/index.ts"),
				y = n("./src/reddit/selectors/activeModalId.ts"),
				O = n("./src/reddit/selectors/bannedUser.ts"),
				S = n("./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx"),
				j = n("./src/lib/lessComponent.tsx"),
				w = n("./src/reddit/components/Comments/UnthreadedComment/index.tsx"),
				I = n("./src/reddit/components/CompactPost/index.tsx"),
				N = n("./src/reddit/contexts/PageLayer/index.tsx"),
				T = n("./src/reddit/components/BannedUserList/ExpandedComponent.m.less"),
				M = n.n(T);
			const {
				fbt: P
			} = n("./node_modules/fbt/lib/FbtPublic.js"), R = Object(N.u)({
				currentProfileName: N.i,
				isCommentsPage: N.x,
				isCommentPermalink: N.w,
				isProfilePostListing: N.K,
				pageLayer: e => e
			}), A = j.a.wrapped(w.c, "UnthreadedComment", M.a), L = j.a.div("BanReason", M.a), F = j.a.div("ExpandedComponentContainer", M.a), D = j.a.div("ModNote", M.a), U = j.a.div("ModNoteContainer", M.a), B = j.a.div("SectionTitle", M.a), H = j.a.div("ContextContainer", M.a), W = e => () => {};
			var q = R(e => {
					const {
						currentProfileName: t,
						isCommentPermalink: n,
						isCommentsPage: s,
						isProfilePostListing: a,
						pageLayer: r,
						user: i
					} = e;
					return o.a.createElement(F, null, i.modNote && o.a.createElement(U, null, o.a.createElement(B, null, P._("Mod note:", null, {
						hk: "2LBtSw"
					})), o.a.createElement(D, null, i.modNote)), o.a.createElement("div", null, o.a.createElement(B, null, P._("Banned For:", null, {
						hk: "3UbXsX"
					})), o.a.createElement(L, null, i.reason), (i.postId || i.commentId) && o.a.createElement(H, null, i.postId && o.a.createElement(I.default, {
						currentProfileName: t,
						isCommentsPage: s,
						isCommentPermalink: n,
						isProfilePostListing: a,
						pageLayer: r,
						last: !0,
						postId: i.postId,
						hideModTools: !0,
						inSubredditOrProfile: !0
					}), i.commentId && o.a.createElement(A, {
						commentId: i.commentId,
						highlight: !1,
						trackClick: W
					}))))
				}),
				G = n("./src/reddit/components/BannedUserList/index.m.less"),
				K = n.n(G);
			const V = 48,
				z = e => null == e ? a.fbt._("Permanent", null, {
					hk: "3pNDzS"
				}) : a.fbt._({
					"*": "{number} days left",
					_1: "1 day left"
				}, [a.fbt._plural(e, "number")], {
					hk: "3VM32a"
				}),
				X = Object(d.c)({
					bannedUsers: O.h,
					bannedUsersList: O.d,
					bannedUsersListPending: O.c,
					loadMoreToken: O.e,
					isBanUserModalOpen: e => "ModerationPage--Modal--AddUser" === Object(y.a)(e),
					isConfirmModalOpen: e => "ModerationPage--Modal--BanUserConfirmation" === Object(y.a)(e),
					searchPending: O.f,
					searchResult: O.g
				}),
				Q = Object(i.b)(X, (e, {
					subredditId: t
				}) => ({
					loadMore: n => e(Object(m.c)(t, {
						after: n
					})),
					onUnbanUser: n => () => e(Object(m.e)(t, n)),
					searchForBannedUser: n => e(Object(m.d)(t, n)),
					toggleBanUserModal: () => e(Object(c.i)("ModerationPage--Modal--AddUser"))
				}));
			class J extends o.a.Component {
				constructor(e) {
					super(e), this.handleBanUserToggled = e => {
						if (e) {
							const {
								id: t,
								username: n
							} = e;
							this.setState({
								userId: t,
								username: n
							})
						} else this.setState({
							...k.a,
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
						const t = this.props.bannedUsers[e] || this.props.searchResult,
							n = z(t.duration);
						return t ? o.a.createElement(v.b, {
							description: t.reason,
							expandedComponent: o.a.createElement(q, {
								user: t
							}),
							pageName: l.ec.Banned,
							primaryButton: o.a.createElement(_.r, {
								onClick: () => this.handleBanUserToggled(t),
								"data-redditstyle": !0
							}, a.fbt._("Edit", null, {
								hk: "1nftDt"
							})),
							subredditId: this.props.subredditId,
							timeAgo: o.a.createElement(o.a.Fragment, null, o.a.createElement(p.d, {
								seconds: t.bannedAtUTC
							}), " (", n, ")"),
							userIcon: t.accountIcon,
							username: t.username
						}) : o.a.createElement("div", null)
					}, this.renderAddBannedUserModal = () => o.a.createElement(S.a, {
						ignoreDefaultFocus: !0,
						onUnbanUser: this.state.userId ? this.props.onUnbanUser(this.state.userId) : void 0,
						subredditId: this.props.subredditId,
						toggleModal: () => this.handleBanUserToggled(null),
						trackAddEvent: this.props.sendEventWithName("add_banpage"),
						trackEventWithName: this.props.sendEventWithName,
						user: this.state.userId ? this.state.searchTerm ? this.props.searchResult || null : this.props.bannedUsers[this.state.userId] : null,
						withOverlay: !0
					}), this.state = k.a
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = e.bannedUsersList.length ? e.bannedUsersList[e.bannedUsersList.length - 1].id : void 0;
					return e.bannedUsersList.length ? o.a.createElement(o.a.Fragment, null, o.a.createElement(g.c, null, o.a.createElement(_.l, {
						onClick: this.addBannedUser,
						"data-redditstyle": !0
					}, a.fbt._("Ban user", null, {
						hk: "2q7TuL"
					}))), o.a.createElement(g.a, null, o.a.createElement(g.b, null, a.fbt._("Banned users", null, {
						hk: "3hvISm"
					}), o.a.createElement(h.a, {
						linkUrl: `${s.a.redditModHelpUrl}/hc/en-us/articles/360009161872`
					})), o.a.createElement(E.b, {
						onSearch: this.onSearch,
						activeSearchQuery: this.state.searchTerm
					}), t.searchTerm ? o.a.createElement(x.a, {
						cancelSearch: this.cancelSearch,
						searchPending: e.searchPending,
						searchTerm: t.searchTerm,
						noResultsFound: !e.searchResult
					}, e.searchResult && this.renderBannedUser(e.searchResult.id)) : o.a.createElement(f.b, {
						loadMoreToken: n,
						onLoadMore: this.onLoadMore
					}, e.bannedUsersList.map(e => ({
						estHeight: V,
						id: e.id,
						render: () => this.renderBannedUser(e.id)
					})))), e.isBanUserModalOpen && this.renderAddBannedUserModal(), e.isConfirmModalOpen && t.userId && t.username && o.a.createElement(u.a, {
						actionText: a.fbt._("Remove", null, {
							hk: "3tYl0U"
						}),
						modalText: a.fbt._("Are you sure you want to ban {username}?", [a.fbt._param("username", t.username)], {
							hk: "4f7Mkp"
						}),
						onConfirm: () => {},
						toggleModal: e.toggleBanUserModal,
						trackClick: e.sendEventWithName("remove")
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(g.c, null, o.a.createElement(_.l, {
						onClick: this.addBannedUser,
						"data-redditstyle": !0
					}, " ", a.fbt._("Ban user", null, {
						hk: "2q7TuL"
					}))), o.a.createElement(g.a, null, o.a.createElement(g.b, null, a.fbt._("Banned users", null, {
						hk: "3hvISm"
					}), o.a.createElement(h.a, {
						linkUrl: `${s.a.redditModHelpUrl}/hc/en-us/articles/360009161872`
					})), e.bannedUsersListPending ? o.a.createElement(v.a, null) : o.a.createElement(b.c, {
						text: a.fbt._("No banned users in {subredditName}", [a.fbt._param("subredditName", e.subreddit.displayText)], {
							hk: "1nOcbC"
						})
					}, o.a.createElement(C.a, {
						name: "ban",
						className: K.a.BanIcon
					}))), e.isBanUserModalOpen && this.renderAddBannedUserModal())
				}
			}
			t.a = Q(J)
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/OutboundLink/index.tsx"),
				i = n("./src/reddit/components/CallToActionButton/index.m.less"),
				d = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => a.a.createElement(o.b, l({
				className: Object(r.a)(d.a.CallToActionButton, e, {
					[d.a.mNotCardView]: t.isNotCardView
				})
			}, t))
		},
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, n) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				i = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				d = n.n(i);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => a.a.createElement(o.b, {
				className: Object(r.a)(e.className, d.a.container, e.text.length >= e.maxChars ? d.a.mOverflow : null)
			}, l._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [l._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var s, a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/chat/toggle.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(s || (s = {}));
			const m = ({
				onStartChat: e,
				text: t,
				className: n,
				sendEvent: a,
				contextId: o,
				priority: i,
				Icon: d,
				redditStyle: m,
				isFullWidth: u,
				eventSource: p,
				onClick: b,
				onAddUserToQuickReplyList: h,
				children: g
			}) => {
				return r.a.createElement(l.t, {
					onClick: t => {
						if (b && b(t), e(), p === s.awardNotification) return h();
						a(Object(c.b)(o))
					},
					className: n,
					text: t,
					priority: i,
					Icon: d,
					redditStyle: m,
					isFullWidth: u
				}, g)
			};
			m.displayName = "ChatButton";
			const u = Object(o.b)(null, (e, {
				contextId: t,
				userId: n
			}) => ({
				onStartChat: () => {
					e(Object(i.b)(n, t))
				},
				onAddUserToQuickReplyList: () => {
					e(Object(i.a)(n))
				}
			}));
			t.b = u(Object(d.c)(m))
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "SearchResultsClassicPost", (function() {
				return ae
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/ads/index.ts"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/getShortenedLink.ts"),
				l = n("./src/lib/hooks/usePrevious.ts"),
				c = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				m = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				u = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				p = n("./src/config.ts"),
				b = n("./node_modules/react-redux/es/index.js"),
				h = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/components/Econ/Audio/index.m.less"),
				f = n.n(g),
				x = n("./src/reddit/components/Econ/Audio/MuteIcon.tsx"),
				E = n("./src/reddit/components/Econ/Audio/SpeakerRings.tsx");
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var _ = ({
					post: e
				}) => {
					const {
						audioRoom: t
					} = e, n = () => Math.floor(10 * Math.random() + 1), r = Object(b.e)(h.X), [i, d] = Object(s.useState)(!1), [l, c] = Object(s.useState)(n());
					return Object(s.useEffect)(() => {
						const e = setInterval(() => {
							d(!0), setTimeout(() => d(!1), 3500), c(n())
						}, 6e3);
						return () => clearInterval(e)
					}, []), (null == t ? void 0 : t.isLive) ? a.a.createElement("a", {
						href: `https://www.reddit.com/talk/${t.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: f.a.liveClassicContainer,
						"data-testid": "audioroom-classic-live"
					}, a.a.createElement("div", {
						className: f.a.classicSpeaker
					}, i && a.a.createElement(E.a, {
						className: Object(o.a)(f.a.speakerRings, {
							[f.a.nightMode]: r
						})
					}), a.a.createElement("img", {
						key: `audioPostAvatar--${l}`,
						className: f.a.snoovatar,
						src: `${p.a.assetPath}/img/talk/avatars/${l}.png`,
						alt: v._("Reddit Talk", null, {
							hk: "XNl4V"
						})
					}), !i && a.a.createElement("div", {
						className: f.a.muteContainer
					}, a.a.createElement(x.a, {
						className: f.a.muteIcon
					})))) : a.a.createElement("div", {
						className: f.a.endedClassicContainer
					}, a.a.createElement(x.a, {
						className: f.a.muteIcon
					}))
				},
				C = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				k = n("./src/reddit/components/ExpandoButton/index.tsx"),
				y = n("./src/reddit/components/Flatlist/index.tsx"),
				O = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				S = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				j = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				w = n("./src/reddit/components/ModModeReports/index.tsx"),
				I = n("./src/reddit/components/ModModeReports/helpers.ts"),
				N = n("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				T = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				M = n("./src/reddit/components/PostContainer/index.tsx"),
				P = n("./src/reddit/components/PostMeta/index.tsx"),
				R = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				A = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				L = n("./src/reddit/components/PostTitle/index.tsx"),
				F = n("./src/reddit/components/PostTopMeta/index.tsx"),
				D = n("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				U = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				B = n("./src/reddit/models/Audio/index.ts"),
				H = n("./src/reddit/models/Media/index.ts"),
				W = n("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				q = n("./src/reddit/connectors/ClassicPost/index.tsx"),
				G = n("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
				K = n("./src/reddit/constants/postLayout.ts"),
				V = n("./src/reddit/contexts/Post/index.tsx"),
				z = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				X = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Q = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				J = n("./src/reddit/helpers/search/renderMedia.tsx"),
				Y = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				Z = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				$ = n.n(Z),
				ee = n("./src/reddit/components/ClassicPost/index.m.less"),
				te = n.n(ee);

			function ne() {
				return (ne = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const se = Object(i.a)(e => {
					const {
						className: t,
						crosspost: n,
						currentUser: i,
						handleVote: p,
						isExpanded: b,
						inSubredditOrProfile: h,
						eventFactory: g,
						first: f,
						flairStyleTemplate: x,
						formatTitle: E,
						hostPostData: v,
						isCheckboxSelected: q,
						isCurrentUserProfilePost: G,
						isFrontpage: V,
						isGalleryTileLayoutDefault: Z,
						isLoggedIn: ee,
						isOverlay: se,
						imageGalleryCurrentItem: ae,
						moderatorPermissions: re,
						modModeEnabled: oe,
						onClickPost: ie,
						onIgnoreReports: de,
						onOpenReportsDropdown: le,
						onSizeChanged: ce,
						poll: me,
						post: ue,
						postId: pe,
						redditStyle: be,
						scrollerItemRef: he,
						showBulkActionCheckbox: ge,
						showEditFlair: fe,
						showMedia: xe,
						subredditOrProfile: Ee,
						toggleCheckbox: ve,
						userIsOp: _e,
						shouldShowGalleryTileOption: Ce,
						showPromotedCTA: ke
					} = e, ye = Object(l.a)(b);
					Object(s.useEffect)(() => {
						ce && ye !== b && ce(ue.id)
					}, [b, ce, ue.id, ye]);
					const Oe = be ? void 0 : x,
						Se = n || void 0,
						je = Object(Q.a)(re),
						we = Object(z.a)(re),
						Ie = Object(X.a)(re),
						Ne = oe && Q.a,
						Te = Object(j.d)(ue),
						Me = Object(I.c)(ue),
						Pe = !!ue.media && ue.media.type === H.o.RTJSON,
						Re = _e && Pe,
						Ae = h && !xe,
						Le = !!ue.media && Object(H.H)(ue.media),
						Fe = !!ue.recommendationContext,
						De = {
							flairStyleTemplate: Oe,
							post: ue,
							inSubredditOrProfile: h,
							isCurrentUserProfilePost: G,
							isOverlay: se,
							shouldShowSubscribeButton: !(V && ee) || Fe && ee,
							subredditOrProfile: Ee
						},
						Ue = Object(r.t)(ue, ae),
						{
							source: Be
						} = Ue;
					let He = a.a.createElement(W.a, {
						className: te.a.classicThumbnail,
						crosspost: Se && ue,
						isMeta: ue.isMeta,
						post: Se || ue,
						redditStyle: be,
						templatePlaceholderImage: Oe && Oe.postPlaceholderImage,
						removeLink: Le
					});
					Object(B.b)(ue) && (He = a.a.createElement(_, {
						post: ue
					}));
					const We = a.a.createElement(M.a, {
						className: Object(o.a)($.a.classicPostStyles, te.a.postContainer, Object(Y.a)(e), f ? te.a.mFirst : void 0, t),
						isOverlay: se,
						style: {
							...Object(Y.d)(e),
							...Object(Y.b)(Oe)
						},
						post: ue,
						onClick: ie,
						eventFactory: g
					}, a.a.createElement(A.a, {
						model: ue,
						handleVote: p,
						showBulkActionCheckbox: ge,
						isCheckboxSelected: q,
						toggleCheckbox: ve,
						flairStyleTemplate: Oe,
						redditStyle: be,
						postId: pe
					}), a.a.createElement(T.a, {
						"data-click-id": "background",
						flairStyleTemplate: Oe
					}, a.a.createElement(C.a, {
						className: te.a.eventMeta,
						post: ue
					}), a.a.createElement("div", {
						className: te.a.mainBody
					}, a.a.createElement("div", {
						className: Ae ? te.a.expandoContainer : te.a.thumbnailContainer
					}, !Ae && He, a.a.createElement(k.a, {
						crosspost: Se,
						className: te.a.rightExpando,
						isExpanded: !!b,
						post: ue,
						useMediaIcons: !1
					})), a.a.createElement("div", {
						className: Object(o.a)(te.a.content, {
							[te.a.showBulkActionCheckbox]: ge
						}),
						"data-click-id": "body"
					}, !!ue.recommendationContext && a.a.createElement(N.a, {
						content: ue.recommendationContext.content,
						layout: K.g.Classic,
						post: ue
					}), a.a.createElement(L.c, {
						className: me ? te.a.titleWithPoll : void 0,
						format: E,
						poll: me,
						post: ue,
						redditStyle: be,
						size: L.b.Medium,
						titleColor: Oe && Oe.postTitleColor,
						isOverlay: se
					}, ue.source && !Se && a.a.createElement(U.a, {
						href: ue.source.url,
						isSponsored: ue.isSponsored,
						postId: ue.id,
						source: ue.source
					}, Object(d.a)(ue))), a.a.createElement(P.a, ne({
						key: "PostMeta"
					}, De)), oe && je && Te && a.a.createElement(S.a, {
						thing: ue
					}), oe && je && Me && a.a.createElement(w.a, {
						onIgnoreReports: de,
						reportable: ue
					}), ke && Be && Be.url && a.a.createElement(c.a, {
						className: te.a.adLinkWrapper
					}, a.a.createElement(m.a, {
						post: ue,
						adLinkContent: Ue
					})), a.a.createElement("div", {
						className: te.a.flatlistContainer
					}, a.a.createElement(k.a, {
						className: te.a.leftExpando,
						crosspost: Se,
						isExpanded: !!b,
						post: ue,
						useMediaIcons: !1
					}), a.a.createElement(u.a, {
						className: te.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Oe,
						model: ue,
						onVoteClick: p
					}), a.a.createElement(y.a, {
						className: te.a.flatlistSeparator
					}), a.a.createElement(y.c, {
						className: te.a.flatlist,
						currentUser: i,
						hasModFlairPerms: we,
						hasModPostPerms: je,
						hasModFullPerms: Ie,
						hostPostData: v,
						isOverlay: !!se,
						modModeEnabled: oe,
						onIgnoreReports: de,
						onOpenReportsDropdown: le,
						post: ue,
						showEditPost: Re,
						showEditFlair: fe,
						tooltipType: se ? F.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(R.b)({
							editPost: !Ne,
							hide: !Ne,
							report: !Ne
						})
					})), a.a.createElement(O.d, null))), Object(J.a)(ue, te.a, he, b, Ce, Z)));
					return a.a.createElement(D.b, null, We)
				}),
				ae = Object(V.b)(Object(G.a)(se));
			t.default = Object(q.a)(se)
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/actions/comment/moderation.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/ModModeReports/helpers.ts"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				g = n("./src/reddit/helpers/trackers/modTools.ts"),
				f = n("./src/reddit/selectors/moderatingComments.ts"),
				x = n("./src/reddit/selectors/moderatorPermissions.ts"),
				E = n("./src/reddit/selectors/tooltip.ts"),
				v = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				C = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				k = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				y = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				O = n("./src/reddit/icons/svgs/Show/index.tsx"),
				S = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				j = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				w = n.n(j);
			const I = Object(h.u)(),
				N = e => `Distinguish--Dropdown--${e}`,
				T = Object(i.c)({
					currentUser: v.k,
					collapsedBecauseCrowdControl: (e, {
						comment: t
					}) => Object(f.a)(e, {
						commentId: t.id
					}),
					isDistinguishDropdownOpen: (e, {
						comment: t
					}) => Object(E.b)(N(t.id))(e),
					moderatorPermissions: (e, t) => {
						const {
							comment: n
						} = t;
						return Object(h.h)(e, t) || Object(x.m)(e, {
							subredditId: n.subredditId
						})
					},
					modModeEnabled: h.S
				}),
				M = Object(o.b)(T, (e, {
					comment: t
				}) => ({
					onApproveComment: () => e(Object(m.a)(t.id)),
					onDistinguishComment: (n, s) => e(Object(m.b)(t.id, n, s)),
					onLockComment: () => e(Object(m.c)(t.id)),
					onRemoveComment: () => e(Object(m.e)(t.id, !1)),
					onSpamComment: () => e(Object(m.e)(t.id, !0)),
					onShowComment: () => e(Object(m.d)(t.id)),
					onToggleDistinguishDropdown: () => e(Object(u.h)({
						tooltipId: N(t.id)
					}))
				}));
			t.a = I(M(c.a.wrapped(Object(b.c)(({
				className: e,
				comment: t,
				currentUser: n,
				isCommentAuthor: a,
				collapsedBecauseCrowdControl: o,
				moderatorPermissions: i,
				modModeEnabled: c,
				onApproveComment: m,
				onDistinguishComment: u,
				onLockComment: b,
				onRemoveComment: h,
				onShowComment: f,
				onSpamComment: x,
				onToggleDistinguishDropdown: E,
				sendEvent: v,
				...j
			}) => {
				const I = Object(p.b)(t),
					N = t.isApproved && I,
					T = !t.isRemoved || t.bannedBy === l.l,
					M = o,
					P = e => v(Object(g.a)(e, t.id));
				return r.a.createElement("div", {
					className: e
				}, (t.bannedBy || I) && r.a.createElement(S.a, {
					text: N ? s.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : s.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						m(), P("approve")
					}
				}, r.a.createElement(_.a, {
					className: w.a.icon
				})), T && r.a.createElement(r.a.Fragment, null, r.a.createElement(S.a, {
					text: t.bannedBy === l.l ? s.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : s.fbt._("Remove", null, {
						hk: "3tYl0U"
					}),
					onClick: () => {
						h(), t.bannedBy === l.l ? P("confirm_remove") : P("remove")
					}
				}, r.a.createElement(k.a, {
					className: w.a.icon
				})), r.a.createElement(S.a, {
					text: s.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						x(), P("spam")
					}
				}, r.a.createElement(y.a, {
					className: w.a.icon
				}))), r.a.createElement(S.a, {
					text: t.isLocked ? s.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : s.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						b(), P(t.isLocked ? "unlock" : "lock")
					}
				}, r.a.createElement(C.a, {
					className: w.a.icon
				})), M && r.a.createElement(S.a, {
					text: s.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						f()
					}
				}, r.a.createElement(O.a, {
					className: Object(d.a)(w.a.icon, w.a.Show)
				})))
			}), "CommentModToolsFlatlist", w.a)))
		},
		"./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less": function(e, t, n) {
			e.exports = {
				author: "DjcdNGtVXPcxG0yiFXIoZ",
				authorLine: "_1a_HxF03jCyxnx706hQmJR",
				headerLine: "_2nobNdIwmDrXK7NZps5zUO",
				flair: "cFNx42ceihnMpvAsovOTi",
				baselineItem: "_3QEK34iVL1BjyHAVleVVNQ",
				container: "-Xcv3XBXmgiY2X5RqaPbO",
				cryptoPoints: "_2bfuNFXt4pN8991xPpimzy",
				role: "_3AgEmWP1qkCB8nds7LhzEB",
				achievementFlair: "_2a_XgY10KOzM0PRvywwDuY",
				cakeDay: "TNzy9Y4Ql8v80YssZ59GR",
				metaText: "_3yx4Dn0W3Yunucf5sVJeFU",
				separator: "_8b8fUdBRxCYj9MkNpFvvv",
				userBadges: "_3AXw8D3tzlqTRxjQdd5ve7",
				userFlairLine: "_3w527zTLhXkd08MyacMV9H"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/Role.m.less": function(e, t, n) {
			e.exports = {
				role: "LWgI-A6rN9Wajn1VLxu2A",
				modAchievement: "_2am63Mu1vtyM2MwmCJoxJp"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/author.m.less": function(e, t, n) {
			e.exports = {
				authorHoverCard: "sMaSljeAO1a-nAhrURxdj",
				container: "NL6v1uLnaxK0IHIJdUdel"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less": function(e, t, n) {
			e.exports = {
				cakedayIcon: "_12wHSVQW6wUCbn56VnIfI-"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less": function(e, t, n) {
			e.exports = {
				commentAuthorLink: "wM6scouPXXsFDSZmZPHRo"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less": function(e, t, n) {
			e.exports = {
				crowdControlText: "_3UBJEBi_CJ8y1i9Up_67Hb"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/edited.m.less": function(e, t, n) {
			e.exports = {
				editedText: "_18WUrfxbke5CjwIjhXu6C-"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.m.less": function(e, t, n) {
			e.exports = {
				iconStyles: "S8WH2aCfP030wVxp0iR_o",
				AdminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				adminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				AdminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				adminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				ContractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				contractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				ModeratorIcon: "rZkjnStRKzlmtr__ixhKy",
				moderatorIcon: "rZkjnStRKzlmtr__ixhKy",
				OpIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				opIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				RightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				rightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				MetaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				metaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				publicPoints: "_2LXcsgibmlCEsBPk8MLy7e",
				NftAuthor: "kDnKKJWz2PJGoalLInCW1",
				nftAuthor: "kDnKKJWz2PJGoalLInCW1",
				MetaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				metaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				DeletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				deletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				container: "_3ezOJqKdLbgkHsXcfvS5SA",
				collapsed: "_2k27lgIDltx9kOzVGXt48i",
				hasBadges: "_1KMFaeLEhRikeFEOlWE9Ti",
				liveStreaming: "_1iUed95f0HTc84gBtoOxdc",
				authorRole: "_3uDFtRr_CTErFPJQBtzECl",
				metaText: "_3_GZIIN1xcMEC5AVuv4kfa",
				separator: "_1PuBpmbH2FA5sozYR7EuCs",
				userBadges: "_3Ofd-Ek86mwX500i92F84q",
				cakeDay: "UG2sa-VYMzrn7D1iNXtfR"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/AwardBadges/index.tsx"),
				m = n("./src/reddit/components/AuthorLink/index.tsx"),
				u = n("./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less"),
				p = n.n(u);
			const b = e => {
				const {
					className: t,
					comment: n,
					isCommentAuthorBlocked: a,
					isAuthorDeleted: o,
					isLivestreaming: i,
					isStrong: l,
					style: c,
					collapsed: u
				} = e;
				return u && a ? r.a.createElement("p", {
					className: Object(d.a)(p.a.commentAuthorLink, t)
				}, s.fbt._("Blocked account", null, {
					hk: "2KVMxM"
				})) : r.a.createElement(m.a, {
					className: Object(d.a)(p.a.commentAuthorLink, t),
					author: n.author,
					isCommentAuthorBlocked: a,
					isAuthorDeleted: o,
					isLivestreaming: i,
					isStrong: l,
					style: c
				}, n.author)
			};
			var h = n("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts"),
				g = n("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				f = n("./src/reddit/components/Flair/index.tsx"),
				x = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				E = n("./src/reddit/components/PostTopMeta/index.tsx"),
				v = n("./src/reddit/controls/MetaData/index.tsx"),
				_ = n("./src/reddit/helpers/flair.ts"),
				C = n("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				k = n("./src/reddit/hooks/useTracking.ts"),
				y = n("./src/reddit/models/Comment/index.ts"),
				O = n("./src/reddit/selectors/gold/powerups/index.ts"),
				S = n("./src/lib/constants/index.ts"),
				j = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				w = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				I = n("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				N = n.n(I);
			const T = ({
				authorClassName: e,
				className: t,
				comment: n,
				isLivestreaming: s,
				isStrong: a,
				renderedInOverlay: o,
				collapsed: i
			}) => r.a.createElement(w.b, {
				className: Object(d.a)(N.a.authorHoverCard, t),
				postOrComment: n,
				tooltipType: o ? E.c.Lightbox : void 0,
				isCommentAuthorBlocked: Object(y.g)(n),
				collapsed: i
			}, r.a.createElement(j.b, {
				ignore: Object(y.f)(n) || !!n.distinguishType && n.distinguishType !== S.G.NONE,
				subredditId: n.subredditId,
				userId: n.authorId
			}, r.a.createElement(b, {
				className: e,
				comment: n,
				isLivestreaming: s,
				isStrong: a,
				isCommentAuthorBlocked: Object(y.g)(n),
				isAuthorDeleted: Object(y.f)(n),
				collapsed: i
			})));
			var M = n("./src/config.ts"),
				P = n("./src/reddit/actions/tooltip.ts"),
				R = n("./src/reddit/components/InfoTextTooltip/index.tsx");
			const A = (e, t, n = !1) => `${e}${t}${n?"inOverlay":""}`;
			var L = n("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				F = n.n(L);
			const D = ({
				className: e,
				commentId: t,
				renderedInOverlay: n
			}) => {
				const a = Object(o.d)(),
					i = () => a(Object(P.h)({
						tooltipId: l
					})),
					l = A("CommentTopMeta--cakeday--", t, n),
					c = s.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("img", {
					className: Object(d.a)(F.a.cakedayIcon, e),
					src: `${M.a.assetPath}/img/powerups/flair_cakeday.png`,
					alt: c,
					id: l,
					onMouseEnter: i,
					onMouseLeave: i,
					"data-testid": "cakeday-icon"
				}), r.a.createElement(R.c, {
					tooltipId: l,
					text: c
				}))
			};
			var U = n("./src/lib/addQueryParams/index.ts"),
				B = n("./src/reddit/actions/comment/index.ts"),
				H = n("./src/reddit/actions/post.ts"),
				W = n("./src/reddit/components/HumanDate/index.tsx"),
				q = n("./src/reddit/helpers/path/index.ts");
			const G = e => {
					const {
						className: t,
						comment: n,
						compact: s,
						permalink: a,
						renderedInOverlay: i,
						isBlockingInterstitialEnabled: d
					} = e, l = Object(o.d)(), c = A("CommentTopMeta--Created--", n.id, i), m = () => l(Object(P.h)({
						tooltipId: c
					}));
					return r.a.createElement("a", {
						className: t,
						href: Object(U.a)(a, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: c,
						onClick: e => {
							K(l, n.id), d && (e.preventDefault(), l(Object(H.Y)(Object(q.b)(a), n.postId)))
						},
						onMouseEnter: m,
						onMouseLeave: m,
						target: "_blank",
						rel: "nofollow noopener noreferrer"
					}, r.a.createElement(W.d, {
						seconds: n.created,
						shortenedUnit: s
					}), r.a.createElement(R.c, {
						tooltipId: c
					}, r.a.createElement(W.b, {
						seconds: n.created
					})))
				},
				K = (e, t) => {
					window.addEventListener("focus", (function n() {
						V(e, t, n)
					}))
				},
				V = (e, t, n) => {
					window.removeEventListener("focus", n), e(Object(B.g)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(B.g)({
						commentListNodeId: t
					})), 5e3)
				};
			var z = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				X = n.n(z);
			const {
				fbt: Q
			} = n("./node_modules/fbt/lib/FbtPublic.js"), J = () => r.a.createElement(v.a, {
				className: X.a.crowdControlText
			}, Q._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var Y = n("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				Z = n.n(Y);
			const {
				fbt: $
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ee = ({
				compact: e,
				editedAt: t
			}) => r.a.createElement(v.a, {
				className: Z.a.editedText
			}, $._("edited {time}", [$._param("time", r.a.createElement(W.d, {
				seconds: t,
				shortenedUnit: e
			}))], {
				hk: "1tiB0u"
			}));
			var te = n("./src/reddit/helpers/isRemoved.ts"),
				ne = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				se = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				ae = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				re = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				oe = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				ie = n("./src/reddit/icons/fonts/Report/index.tsx"),
				de = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				le = n("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				ce = n.n(le);
			const me = ({
				comment: e,
				ignoreLock: t,
				renderedInOverlay: a
			}) => {
				const i = Object(o.d)(),
					d = e => () => i(Object(P.f)({
						tooltipId: e
					})),
					l = () => i(Object(P.i)()),
					c = t => A(t, e.id, a),
					m = c("CommentTopMeta--Approve--"),
					u = c("CommentTopMeta--Remove--"),
					p = c("CommentTopMeta--Report--"),
					b = c("CommentTopMeta--Spam--"),
					h = d(u);
				return r.a.createElement(r.a.Fragment, null, (e.approvedBy || e.isApproved) && r.a.createElement(r.a.Fragment, null, r.a.createElement(ae.a, {
					className: ce.a.approveIcon,
					desc: Object(ne.a)(e),
					id: m,
					onMouseEnter: d(m),
					onMouseLeave: l,
					isFilled: !0
				}), r.a.createElement(R.c, {
					tooltipId: m,
					text: Object(ne.a)(e)
				})), Object(te.a)(e) && r.a.createElement(r.a.Fragment, null, r.a.createElement(oe.a, {
					className: ce.a.removeIcon,
					desc: Object(ne.b)(e),
					id: u,
					onMouseEnter: h,
					onMouseLeave: l,
					isFilled: !0
				}), r.a.createElement(R.c, {
					tooltipId: u,
					text: Object(ne.b)(e)
				})), Object(te.a)(e) && e.isRemoved && !e.modNote && !e.modRemovalReason && r.a.createElement("a", {
					className: ce.a.removalReason,
					onClick: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(t => i(t.fetchReasonsAndOpenModal(e.subredditId, [e.id])))
					}
				}, s.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(te.a)(e) && !(e.isRemoved && !e.modNote && !e.modRemovalReason) && r.a.createElement("a", {
					className: ce.a.removalReason,
					onMouseEnter: h,
					onMouseLeave: l
				}, s.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), e.isLocked && !t && r.a.createElement(re.a, {
					className: ce.a.lockIcon,
					desc: s.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), e.bannedBy && e.isSpam && r.a.createElement(r.a.Fragment, null, r.a.createElement(de.a, {
					className: ce.a.spamIcon,
					desc: Object(ne.d)(e),
					id: b,
					onMouseEnter: d(b),
					onMouseLeave: l,
					isFilled: !0
				}), r.a.createElement(R.c, {
					tooltipId: b,
					text: Object(ne.d)(e)
				})), Object(se.a)(e) && r.a.createElement(r.a.Fragment, null, r.a.createElement(ie.a, {
					className: ce.a.reportIcon,
					desc: Object(ne.c)(e.numReports),
					id: p,
					onMouseEnter: d(p),
					onMouseLeave: l,
					isFilled: !0
				}), r.a.createElement(R.c, {
					tooltipId: p,
					text: Object(ne.c)(e.numReports)
				})))
			};
			var ue, pe = n("./src/lib/colors/constants.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(ue || (ue = {}));
			var be = n("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				he = n.n(be);
			const ge = {
					[ue.Admin]: {
						color: pe.c,
						label: s.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: () => s.fbt._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						})
					},
					[ue.Mod]: {
						color: pe.d,
						label: s.fbt._("Mod", null, {
							hk: "3l7DyF"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => (e => s.fbt._("Moderator of {subredditDisplayText}, speaking officially", [s.fbt._param("subredditDisplayText", e)], {
							hk: "3pHm3n"
						}))(e.subredditDisplayText)
					},
					[ue.Op]: {
						color: pe.a,
						label: s.fbt._("Op", null, {
							hk: "1A74qs"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: () => s.fbt._("Original Poster", null, {
							hk: "3DqK8z"
						})
					},
					[ue.AlumniAdmin]: {
						color: pe.c,
						label: s.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: () => s.fbt._("Reddit admin emeritus", null, {
							hk: "1Md5AV"
						})
					},
					[ue.Contractor]: {
						color: pe.a,
						label: s.fbt._("Contractor", null, {
							hk: "2nhaY6"
						}),
						tooltipPrefix: "CommentTopMeta--Contractor--",
						tooltipTemplate: () => s.fbt._("Reddit contractor", null, {
							hk: "3APwEh"
						})
					}
				},
				fe = e => {
					const t = Object(o.d)(),
						n = function(e) {
							return e.isAdmin ? ue.Admin : e.isMod ? ue.Mod : e.isOp ? ue.Op : e.distinguishType === S.G.ALUMNI_ADMIN ? ue.AlumniAdmin : e.authorIsContractor ? ue.Contractor : null
						}(e.comment);
					if (!n) return null;
					if (n === ue.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: s,
						color: a,
						label: i,
						tooltipTemplate: l
					} = ge[n], c = A(s, e.comment.id, e.renderedInOverlay), m = l(e), u = () => t(Object(P.h)({
						tooltipId: c
					}));
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
						className: Object(d.a)(he.a.role, e.className),
						style: {
							color: a
						},
						id: c,
						onMouseEnter: u,
						onMouseLeave: u
					}, r.a.createElement("span", null, i), n === ue.Mod && r.a.createElement(xe, null)), r.a.createElement(R.c, {
						tooltipId: c,
						text: m
					}))
				},
				xe = () => r.a.createElement("img", {
					alt: "Moderator Achievement",
					className: he.a.modAchievement,
					src: `${M.a.assetPath}/img/powerups/moderator-achievement.svg`
				});
			var Ee = n("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				ve = n.n(Ee);
			const {
				fbt: _e
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ce = () => r.a.createElement(v.a, {
				className: ve.a.stickiedText
			}, _e._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var ke = n("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				ye = n.n(ke);
			const Oe = e => {
				const {
					className: t,
					collapsed: n,
					collapsedBecauseCrowdControl: a,
					comment: i,
					flair: l,
					ignoreLock: m,
					isLivestreaming: u,
					permalink: p,
					renderedInOverlay: b,
					subredditDisplayText: S,
					renderContractorBadge: j
				} = e, w = Object(k.a)(), I = i.subredditId, N = Object(o.e)(e => Object(O.h)(e, {
					subredditId: I
				}));
				if (i.isDeleted) return r.a.createElement("div", {
					className: Object(d.a)(ye.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, r.a.createElement("span", {
					className: ye.a.authorLine
				}, r.a.createElement("span", {
					className: ye.a.metaText
				}, i.deletedBy === y.c.User ? s.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : s.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), r.a.createElement(v.c, {
					className: ye.a.separator
				}), r.a.createElement(G, {
					key: "Created",
					className: ye.a.metaText,
					comment: i,
					compact: !0,
					permalink: p,
					renderedInOverlay: b
				})));
				return r.a.createElement("div", {
					className: Object(d.a)(ye.a.container, t),
					"data-testid": "post-comment-header"
				}, r.a.createElement("span", {
					className: ye.a.authorLine
				}, !Object(y.f)(i) && r.a.createElement(g.b, {
					className: ye.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: i.subredditId,
					userId: i.authorId,
					uniqueIdentifier: i.id
				}), r.a.createElement("div", {
					className: ye.a.baselineItem
				}, r.a.createElement(T, {
					authorClassName: ye.a.author,
					comment: i,
					isLivestreaming: u,
					renderedInOverlay: b,
					collapsed: n
				})), a && r.a.createElement(J, null), r.a.createElement(fe, {
					className: ye.a.role,
					comment: i,
					subredditDisplayText: S,
					renderContractorBadge: j,
					renderedInOverlay: b
				}), i.isAuthorCakeday ? r.a.createElement(D, {
					className: ye.a.cakeDay,
					commentId: i.id,
					renderedInOverlay: b
				}) : !Object(y.f)(i) && N && r.a.createElement(h.a, {
					className: ye.a.achievementFlair,
					subredditId: i.subredditId,
					userId: i.authorId,
					onHover: () => {
						w(Object(C.b)(i.id, i.subredditId, i.authorId))
					},
					showPopupOnHover: !0
				}), r.a.createElement(x.a, {
					className: ye.a.cryptoPoints,
					contentId: i.id,
					subredditId: i.subredditId,
					userId: i.authorId,
					username: i.author
				}), r.a.createElement(v.c, {
					className: ye.a.separator
				}), r.a.createElement(G, {
					key: "Created",
					className: ye.a.metaText,
					comment: i,
					compact: !0,
					permalink: p,
					renderedInOverlay: b
				}), i.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(v.c, {
					className: ye.a.separator
				}), r.a.createElement(Ce, null)), i.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(v.c, {
					className: ye.a.separator
				}), r.a.createElement(ee, {
					compact: !0,
					editedAt: i.editedAt
				})), r.a.createElement(me, {
					comment: i,
					ignoreLock: m,
					renderedInOverlay: b
				}), r.a.createElement(c.a, {
					thing: i,
					tooltipType: b ? E.c.Lightbox : void 0
				})), l && !Object(_.o)(l) && r.a.createElement("span", {
					className: ye.a.userFlairLine
				}, r.a.createElement(f.b, {
					className: ye.a.flair,
					flair: l,
					forceSmallEmojis: !0
				})))
			};
			var Se = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				je = n("./src/reddit/selectors/economics.ts"),
				we = n("./src/reddit/models/Flair/index.ts"),
				Ie = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Ne = n("./src/reddit/selectors/subreddit.ts"),
				Te = n("./src/reddit/selectors/userFlair.ts"),
				Me = n("./src/reddit/selectors/comments.ts"),
				Pe = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Re = n.n(Pe);

			function Ae() {
				return (Ae = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Le = l.a.wrapped(f.b, "RightPositionedAuthorFlair", Re.a),
				Fe = l.a.span("DeletedText", Re.a),
				De = l.a.wrapped(v.a, "MetaSeparator", Re.a),
				Ue = Object(o.b)(() => Object(i.c)({
					hasBadges: (e, {
						comment: t
					}) => !!Object(je.q)(e, t.subredditId, t.authorId).length,
					subredditDisplayText: (e, t) => {
						const n = Object(Ne.G)(e, {
							commentId: t.comment.id
						});
						return n ? n.displayText : ""
					},
					flairPosition: (e, {
						comment: t
					}) => Object(Te.e)(e, {
						subredditId: t.subredditId
					}),
					commentPermalink: (e, t) => Object(Me.m)(e, {
						commentId: t.comment.id
					}),
					isBlockingInterstitialEnabled: Ie.b
				}));
			t.a = Ue(e => {
				const {
					children: t,
					className: n,
					collapsed: s,
					collapsedBecauseCrowdControl: a,
					comment: o,
					commentPermalink: i,
					commentsPageKey: l,
					compact: m,
					flair: u,
					flairPosition: p,
					hasBadges: b,
					isBlockingInterstitialEnabled: h,
					isLivestreaming: _,
					isPostComment: C,
					ignoreFlairPosition: k,
					ignoreLock: O,
					renderContractorBadge: S,
					renderedInOverlay: j,
					subredditDisplayText: w,
					userHasNft: I
				} = e, N = r.a.createElement(r.a.Fragment, null, r.a.createElement(Se.b, {
					commentId: o.id
				}), r.a.createElement(Se.a, {
					commentId: o.id,
					commentsPageKey: l
				}));
				if (C) return r.a.createElement(r.a.Fragment, null, r.a.createElement(Oe, {
					className: Object(d.a)(n, {
						[Re.a.collapsed]: s
					}),
					collapsedBecauseCrowdControl: a,
					comment: o,
					flair: u || null,
					ignoreLock: O,
					isLivestreaming: _,
					permalink: i,
					renderedInOverlay: j,
					subredditDisplayText: w,
					renderContractorBadge: !!S,
					collapsed: s
				}), N);
				if (o.isDeleted) return r.a.createElement(Be, Ae({}, e, {
					className: Object(d.a)(n, Re.a.container, {
						[Re.a.collapsed]: s
					})
				}));
				if (s) return r.a.createElement(He, Ae({}, e, {
					className: Object(d.a)(n, Re.a.container, {
						[Re.a.collapsed]: s
					})
				}));
				const M = !k && p === we.b.Left;
				return r.a.createElement("div", {
					className: Object(d.a)(n, Re.a.container, {
						[Re.a.collapsed]: s,
						[Re.a.hasBadges]: b,
						[Re.a.liveStreaming]: _
					}),
					"data-testid": "comment-top-meta"
				}, u && M && r.a.createElement(f.b, {
					flair: u,
					forceSmallEmojis: m
				}), !Object(y.f)(o) && r.a.createElement(g.b, {
					className: Re.a.userBadges,
					showAddCustom: !0,
					subredditId: o.subredditId,
					userId: o.authorId,
					uniqueIdentifier: o.id
				}), t && t, r.a.createElement(T, {
					authorClassName: I ? Re.a.NftAuthor : void 0,
					comment: o,
					isLivestreaming: _,
					isStrong: !!m,
					renderedInOverlay: j,
					collapsed: s
				}), a && r.a.createElement(J, null), a && r.a.createElement(v.c, {
					className: Re.a.metaText,
					key: "crowdControlSeparator"
				}), u && !M && r.a.createElement(Le, {
					flair: u,
					forceSmallEmojis: m
				}), !m && r.a.createElement(x.a, {
					className: Re.a.publicPoints,
					contentId: o.id,
					metaSeparator: r.a.createElement(v.c, {
						className: Re.a.metaText
					}),
					subredditId: o.subredditId,
					userId: o.authorId,
					username: o.author
				}), N, r.a.createElement(fe, {
					className: Re.a.authorRole,
					comment: o,
					subredditDisplayText: w,
					renderContractorBadge: !!S,
					renderedInOverlay: j
				}), !m && r.a.createElement(r.a.Fragment, null, !o.isDeleted && !C && r.a.createElement(r.a.Fragment, null, r.a.createElement(v.b, {
					className: Re.a.metaText,
					isScoreHidden: o.isScoreHidden,
					score: o.score
				}), r.a.createElement(v.c, {
					className: Re.a.metaText,
					key: "scoreCreatedSeparator"
				})), r.a.createElement(G, {
					key: "Created",
					className: Re.a.MetaLink,
					comment: o,
					permalink: i,
					renderedInOverlay: j,
					isBlockingInterstitialEnabled: h
				}), o.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(v.c, {
					className: Re.a.separator
				}), r.a.createElement(Ce, null)), o.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(v.c, {
					className: Re.a.separator
				}), r.a.createElement(ee, {
					editedAt: o.editedAt
				}))), r.a.createElement(me, {
					comment: o,
					ignoreLock: O,
					renderedInOverlay: j
				}), r.a.createElement(c.a, {
					thing: o,
					tooltipType: j ? E.c.Lightbox : void 0
				}))
			});
			const Be = e => {
					const {
						childrenInfo: t,
						collapsed: n,
						className: a,
						comment: o,
						commentPermalink: i,
						isBlockingInterstitialEnabled: d,
						renderedInOverlay: l
					} = e;
					return r.a.createElement("div", {
						className: a
					}, r.a.createElement(Fe, null, o.deletedBy === y.c.User ? s.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : s.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(G, {
						key: "Created",
						className: Re.a.MetaLink,
						comment: o,
						permalink: i,
						renderedInOverlay: l,
						isBlockingInterstitialEnabled: d
					}), n && We({
						childrenInfo: t
					}))
				},
				He = e => {
					const {
						comment: t,
						className: n,
						childrenInfo: s,
						renderedInOverlay: a,
						collapsed: o,
						commentPermalink: i,
						isBlockingInterstitialEnabled: d
					} = e;
					return r.a.createElement("div", {
						className: n
					}, r.a.createElement("div", null, r.a.createElement(b, {
						comment: t,
						isAuthorDeleted: Object(y.f)(t),
						collapsed: o
					})), r.a.createElement(v.b, {
						className: Re.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), r.a.createElement(v.c, {
						className: Re.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(G, {
						key: "Created",
						className: Re.a.MetaLink,
						comment: t,
						permalink: i,
						renderedInOverlay: a,
						isBlockingInterstitialEnabled: d
					}), We({
						childrenInfo: s
					}))
				},
				We = e => {
					const {
						hasContinueThread: t,
						numChildren: n
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return r.a.createElement(De, {
						className: Re.a.metaText
					}, t ? s.fbt._({
						"*": "More than {number} children",
						_1: "More than 1 child"
					}, [s.fbt._plural(n, "number")], {
						hk: "13XC7a"
					}) : s.fbt._({
						"*": "{number} children",
						_1: "1 child"
					}, [s.fbt._plural(n, "number")], {
						hk: "dhX9w"
					}))
				}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less": function(e, t, n) {
			e.exports = {
				approveIcon: "_3Jlybj1GmQS_PfZVxE6yR1",
				automoderatorIcon: "_2EBjdWEqs2dwPePq0_1vJn",
				lockIcon: "YjyVr4SnBmO7WorLVMXq5",
				removeIcon: "_3M_jIwyB1POxBFR2jnGIp_",
				reportIcon: "_3hI84iVaolaHi85h6liPyp",
				spamIcon: "MufLXlXcv1oes9OlakuXr",
				removed: "_2LQnjoTNHDUWKBOoq2gTlm",
				removalReason: "EM8fL_jC3oe9bruIOZt2U"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less": function(e, t, n) {
			e.exports = {
				stickiedText: "_2wd-K5Djdc9TGPRGDgmkpX"
			}
		},
		"./src/reddit/components/Comments/UnthreadedComment/index.m.less": function(e, t, n) {
			e.exports = {
				VoteSpacer: "oq5mUzSj_vNl2qp3WN_JJ",
				voteSpacer: "oq5mUzSj_vNl2qp3WN_JJ",
				ContentWrapper: "Z-SSPhDFBXkUleK1Uoo5n",
				contentWrapper: "Z-SSPhDFBXkUleK1Uoo5n",
				CommentContentWrapper: "_2OgGzVSF6RB04Jb2cXSiPj",
				commentContentWrapper: "_2OgGzVSF6RB04Jb2cXSiPj",
				CommentParentWrapper: "OPElT6Do1pTNOWhGkL1eT",
				commentParentWrapper: "OPElT6Do1pTNOWhGkL1eT",
				CommentBody: "_3PTQsA2VkqzBrZxhvpwI8Z",
				commentBody: "_3PTQsA2VkqzBrZxhvpwI8Z",
				ParentPostTitle: "_144TYY84bzwNfGN3DGzUvi",
				parentPostTitle: "_144TYY84bzwNfGN3DGzUvi",
				Component: "_29-oldqrqqPwwjRRH0aLqU",
				component: "_29-oldqrqqPwwjRRH0aLqU"
			}
		},
		"./src/reddit/components/Comments/UnthreadedComment/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return M
			})), n.d(t, "b", (function() {
				return A
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/objectSelector/index.ts"),
				d = n("./src/reddit/actions/comment/index.ts"),
				l = n("./src/reddit/actions/comment/moderation.ts"),
				c = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				m = n("./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx"),
				u = n("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx"),
				p = n("./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx"),
				b = n("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx"),
				h = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				g = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				f = n("./src/reddit/components/ModModeReports/index.tsx"),
				x = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				E = n("./src/reddit/components/RichTextJson/index.tsx"),
				v = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				_ = n("./src/reddit/models/Vote/index.ts"),
				C = n("./src/reddit/selectors/comments.ts"),
				k = n("./src/reddit/selectors/commentSelector.ts"),
				y = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/components/Comments/UnthreadedComment/index.m.less"),
				S = n.n(O),
				j = n("./src/lib/lessComponent.tsx");
			const w = j.a.div("VoteSpacer", S.a),
				I = j.a.div("ContentWrapper", S.a),
				N = j.a.div("CommentContentWrapper", S.a),
				T = j.a.div("CommentBody", S.a),
				M = j.a.div("ParentPostTitle", S.a),
				P = j.a.div("CommentParentWrapper", S.a),
				R = Object(o.c)({
					comment: (e, t) => Object(k.b)(e, t),
					commentPermalink: C.m,
					flair: C.e,
					subreddit: y.G
				}),
				A = Object(r.b)(R, (e, {
					commentId: t,
					trackClick: n
				}) => ({
					onIgnoreReports: () => e(Object(l.g)(t)),
					onVoteClick: s => {
						const [a, r] = s === _.a.upvoted ? [Object(d.q)(t), "upvote_comment"] : [Object(d.j)(t), "downvote_comment"];
						n(r)(), e(a)
					}
				})),
				L = Object(i.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.c = A(j.a.wrapped(e => {
				const {
					className: t,
					comment: n,
					commentPermalink: s,
					flair: r,
					hasReports: o,
					isCheckboxSelected: i = !1,
					onIgnoreReports: d,
					onVoteClick: l,
					showModTools: _,
					subreddit: C,
					showBulkActionCheckbox: k,
					toggleCheckbox: y
				} = e, O = Object(g.d)(n);
				return a.a.createElement(m.a, {
					className: t,
					clickTrackingId: n.id,
					permalink: s
				}, a.a.createElement(x.a, {
					model: n,
					handleVote: l,
					showBulkActionCheckbox: k,
					isCheckboxSelected: i,
					toggleCheckbox: y
				}), a.a.createElement(w, null, a.a.createElement(I, null, a.a.createElement(P, null, n.postTitle && a.a.createElement(M, null, n.postTitle), n.postAuthor && a.a.createElement(b.a, {
					comment: n
				})), a.a.createElement(N, null, a.a.createElement(u.a, {
					comment: n
				}, a.a.createElement(T, null, a.a.createElement(E.a, {
					content: Object(v.a)(n),
					mediaMetadata: n.media && n.media.mediaMetadata,
					rtJsonElementProps: L(e)
				})), a.a.createElement(p.a, {
					comment: n,
					flair: r,
					subredditName: C ? C.displayText : null
				}), O && a.a.createElement(h.a, {
					thing: n
				}), o && a.a.createElement(f.a, {
					onIgnoreReports: d,
					reportable: n
				}), _ && !n.isDeleted && a.a.createElement(c.a, {
					comment: n
				}))))))
			}, "Component", S.a))
		},
		"./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/addQueryParams/index.ts"),
				i = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				d = n("./src/reddit/helpers/overlay/index.ts");
			const l = Object(r.b)(null, e => ({
				openLightbox: t => e(Object(d.a)(t))
			}));
			class c extends a.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						permalink: t,
						openLightbox: n,
						...s
					} = this.props, r = s => e(() => s.metaKey || s.ctrlKey || 1 === s.button ? window.open(Object(o.a)(t, {
						context: 3
					})) : n(Object(o.a)(t, {
						context: 3
					})))(s);
					return a.a.createElement("div", {
						className: s.className,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3)), 1 === e.button && r(e)
						},
						onClick: e => {
							!this.cancelClick && 0 === e.button && r(e)
						}
					}, s.children)
				}
			}
			t.a = l(Object(i.a)(c))
		},
		"./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				DashWrapper: "_3Ed3UKndPjQ4kkX0QvOz3u",
				dashWrapper: "_3Ed3UKndPjQ4kkX0QvOz3u"
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.m.less"),
				i = n.n(o);
			const d = r.a.div("DashWrapper", i.a);
			t.a = e => null === e.comment.parentId ? a.a.createElement(d, null, e.children) : a.a.createElement(d, null, a.a.createElement(d, null, e.children))
		},
		"./src/reddit/components/Comments/UnthreadedCommentMeta/index.m.less": function(e, t, n) {
			e.exports = {
				SubredditWrapper: "_1ZSTlGe7wnX1GJX3F-AEwD",
				subredditWrapper: "_1ZSTlGe7wnX1GJX3F-AEwD",
				TopMeta: "_2Rm4FD32bOsXwX7lx3GeYW",
				topMeta: "_2Rm4FD32bOsXwX7lx3GeYW",
				Inline: "meK3ndVOmnvQt6wVaAg5W",
				inline: "meK3ndVOmnvQt6wVaAg5W",
				PostedInfo: "_6b3ccJ38E6dy9dby4PlDN",
				postedInfo: "_6b3ccJ38E6dy9dby4PlDN",
				TextContainer: "iV3Hb5JWIQSpA3WhioY-N",
				textContainer: "iV3Hb5JWIQSpA3WhioY-N"
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				i = n("./src/reddit/layout/row/Inline/index.tsx"),
				d = n("./src/reddit/components/Comments/UnthreadedCommentMeta/index.m.less"),
				l = n.n(d),
				c = n("./src/lib/lessComponent.tsx");
			const m = c.a.wrapped(i.a, "Inline", l.a),
				u = c.a.wrapped(i.a, "PostedInfo", l.a),
				p = c.a.wrapped(i.a, "SubredditWrapper", l.a),
				b = c.a.div("TextContainer", l.a),
				h = c.a.wrapped(o.a, "TopMeta", l.a);
			t.a = e => r.a.createElement(m, {
				className: e.className
			}, e.subredditName && r.a.createElement(p, null, e.subredditName && r.a.createElement(b, null, e.subredditName)), r.a.createElement(u, null, r.a.createElement(b, null, `${s.fbt._("Commented by",null,{hk:"4Dveap"})}`), r.a.createElement(h, {
				collapsedBecauseCrowdControl: e.comment.collapsedBecauseCrowdControl,
				collapsed: !1,
				comment: e.comment,
				flair: e.flair,
				renderedInOverlay: !1
			})))
		},
		"./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.m.less": function(e, t, n) {
			e.exports = {
				AuthorLink: "_2jljMb6FK7HnIb15zmm1of",
				authorLink: "_2jljMb6FK7HnIb15zmm1of",
				SubredditWrapper: "SZcM6DS3LArR6FZxlQXOv",
				subredditWrapper: "SZcM6DS3LArR6FZxlQXOv",
				TextContainer: "_2in6k_0-sFgKVz16hifq03",
				textContainer: "_2in6k_0-sFgKVz16hifq03",
				SubredditIcon: "uCjYZbKNai0INWGwHjoUh",
				subredditIcon: "uCjYZbKNai0INWGwHjoUh",
				Inline: "_2VWXAfRlnHG_4nydI7J4l3",
				inline: "_2VWXAfRlnHG_4nydI7J4l3"
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/reddit/components/AuthorLink/index.tsx"),
				o = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				i = n("./src/reddit/components/SubredditIcon/index.tsx"),
				d = n("./src/reddit/layout/row/Inline/index.tsx"),
				l = n("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.m.less"),
				c = n.n(l),
				m = n("./src/lib/lessComponent.tsx");
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = m.a.wrapped(r.a, "AuthorLink", c.a), b = m.a.wrapped(d.a, "Inline", c.a), h = m.a.wrapped(d.a, "SubredditWrapper", c.a), g = m.a.div("TextContainer", c.a), f = m.a.wrapped(i.b, "SubredditIcon", c.a);
			t.a = e => a.a.createElement(b, null, e.subredditOrProfile && a.a.createElement(h, null, e.subredditOrProfile && a.a.createElement(f, {
				subredditOrProfile: e.subredditOrProfile
			}), e.subredditOrProfile && a.a.createElement(g, null, e.subredditOrProfile.displayText)), u._("posted by", null, {
				hk: "1EuRc2"
			}), e.comment.postAuthor && a.a.createElement(o.b, {
				postOrComment: e.comment,
				author: e.comment.postAuthor
			}, a.a.createElement(p, {
				author: e.comment.postAuthor,
				isUnstyled: !0
			}, `u/${e.comment.postAuthor}`)))
		},
		"./src/reddit/components/CommunityAwardList/AwardRow/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CommunityAwardList/AwardSettings/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CommunityAwardList/index.m.less": function(e, t, n) {
			e.exports = {
				contentContainer: "_27C02100EX-RnLoDyL_PYT",
				gildIcon: "_3f4YbBVVbX4YXols-8AmgC",
				infoIcon: "_1HPeb_FxEOzicQ4BuIVonK",
				pageInfo: "_2bEhfADeSjJE-8zKoxjbGy",
				awardToDelete: "dzAx082Iu3F9M7xS-PL80",
				awardToDeleteIcon: "_11ikfBu3qqa0paYAJLQINO"
			}
		},
		"./src/reddit/components/CommunityAwardList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/gold/communityAwards/index.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/tooltip.ts"),
				m = n("./src/reddit/constants/gold.ts"),
				u = n("./src/reddit/helpers/awards/isEligibleForCommunityAwards.ts"),
				p = n("./src/reddit/helpers/awards/isEligibleForGlobalAwards.ts"),
				b = n("./src/reddit/helpers/correlationIdTracker.ts"),
				h = n("./src/reddit/helpers/trackers/communityAwards.ts"),
				g = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/higherOrderComponents/makeAsync.tsx")),
				f = n("./src/lib/loadWithRetries/index.ts");
			var x = Object(g.a)({
					getComponent: () => Object(f.a)(() => Promise.all([n.e("AwardCreationModal").then(n.bind(null, "./src/reddit/components/AwardCreationModal/index.tsx"))])).then(e => e[0].default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				E = n("./src/reddit/models/Gold/Award.ts"),
				v = n("./src/reddit/components/ConfirmModal/index.tsx"),
				_ = n("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				C = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				k = n("./src/reddit/components/TrackingHelper/index.tsx"),
				y = n("./src/reddit/icons/fonts/index.tsx"),
				O = n("./src/reddit/selectors/activeModalId.ts"),
				S = n("./node_modules/lodash/times.js"),
				j = n.n(S),
				w = n("./src/lib/classNames/index.ts"),
				I = n("./src/reddit/controls/Button/index.tsx"),
				N = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				T = n("./src/reddit/helpers/awards/isEligibleForTemporaryAwards.ts"),
				M = n("./src/reddit/layout/row/RightAlign/index.tsx"),
				P = n("./src/reddit/components/CommunityAwardList/AwardRow/index.m.less"),
				R = n.n(P);
			const {
				fbt: A
			} = n("./node_modules/fbt/lib/FbtPublic.js"), L = () => r.a.createElement("div", {
				className: R.a.row
			}, r.a.createElement("div", {
				className: R.a.awardName
			}, r.a.createElement("div", {
				className: R.a.emptyDetails
			})), r.a.createElement("div", {
				className: R.a.awardDetail
			}, r.a.createElement("div", {
				className: R.a.emptyIcon
			})), r.a.createElement("div", {
				className: R.a.awardDetail
			}, r.a.createElement("div", {
				className: R.a.emptyDetails
			})), r.a.createElement("div", {
				className: R.a.awardDetail
			}, r.a.createElement("div", {
				className: R.a.emptyDetails
			}))), F = e => r.a.createElement("div", {
				className: Object(w.a)(e.className, R.a.awardLoadingContainer)
			}, j()(10, e => r.a.createElement(L, {
				key: e
			}))), D = ({
				subredditId: e
			}) => r.a.createElement("div", {
				className: R.a.headerRow
			}, r.a.createElement("div", {
				className: R.a.awardName
			}, A._("Name", null, {
				hk: "2rgEdc"
			})), r.a.createElement("div", {
				className: R.a.awardDetail
			}, A._("Icon", null, {
				hk: "zWzOj"
			})), r.a.createElement("div", {
				className: R.a.awardDetail
			}, A._("Coins", null, {
				hk: "2uhz31"
			})), r.a.createElement("div", {
				className: R.a.awardDetail
			}, A._("Type", null, {
				hk: "1rYgKO"
			})), Object(T.a)(e) && r.a.createElement("div", {
				className: R.a.awardDetail
			}, A._("Starts", null, {
				hk: "HW61W"
			})), Object(T.a)(e) && r.a.createElement("div", {
				className: R.a.awardDetail
			}, A._("Expires", null, {
				hk: "3hS2VX"
			}))), U = ({
				date: e
			}) => r.a.createElement("div", {
				className: R.a.awardExpiresDetail
			}, e && e.toLocaleString()), B = e => r.a.createElement("div", {
				className: R.a.row
			}, r.a.createElement("div", {
				className: Object(w.a)(R.a.awardName, R.a.unfilledAward)
			}, A._({
				"*": "Create up to {quantity} more {coin-price} Coin Awards",
				_1: "Create up to {quantity} more {coin-price} Coin Award"
			}, [A._param("quantity", e.quantity), A._param("coin-price", e.coinPrice), A._plural(e.quantity)], {
				hk: "4nSQI7"
			})), r.a.createElement(M.a, {
				className: R.a.rightAlign
			}, r.a.createElement(I.l, {
				className: R.a.createButton,
				onClick: e.onCreate
			}, A._("Create", null, {
				hk: "3aEi77"
			})))), H = e => r.a.createElement("div", {
				className: R.a.row
			}, r.a.createElement("div", {
				className: Object(w.a)(R.a.awardName, R.a.unfilledAward)
			}, A._("Create a Moderator-Only Award", null, {
				hk: "3aMmTo"
			})), r.a.createElement(M.a, {
				className: R.a.rightAlign
			}, r.a.createElement(I.l, {
				className: R.a.createButton,
				onClick: e.onCreate
			}, A._("Create", null, {
				hk: "3aEi77"
			})))), W = e => r.a.createElement("div", {
				className: R.a.row
			}, r.a.createElement("div", {
				className: Object(w.a)(R.a.awardName, R.a.unfilledAward)
			}, A._("Create an Award", null, {
				hk: "1zGxjw"
			})), r.a.createElement(M.a, {
				className: R.a.rightAlign
			}, r.a.createElement(I.l, {
				className: R.a.createButton,
				onClick: e.onCreate
			}, A._("Create", null, {
				hk: "3aEi77"
			}))));
			class q extends r.a.Component {
				constructor() {
					super(...arguments), this.onDelete = e => {
						e.preventDefault(), this.props.onDelete(this.props.award.id)
					}
				}
				render() {
					const {
						award: e,
						canDelete: t,
						iconUrl: n,
						subredditId: s
					} = this.props, a = Object(T.a)(s), o = e.startsAt ? new Date(e.startsAt) : void 0, i = e.endsAt ? new Date(e.endsAt) : void 0;
					return r.a.createElement("div", {
						className: R.a.row
					}, r.a.createElement("div", {
						className: R.a.awardName
					}, e.name), r.a.createElement("div", {
						className: R.a.awardDetail
					}, r.a.createElement("img", {
						className: R.a.awardIconImage,
						src: n,
						title: e.name
					})), r.a.createElement("div", {
						className: R.a.awardDetail
					}, e.coinPrice || 0), r.a.createElement("div", {
						className: R.a.awardDetail
					}, e.awardType === E.f.Moderator ? A._("Mod only", null, {
						hk: "UxkP0"
					}) : A._("All", null, {
						hk: "2J55F0"
					})), a && [r.a.createElement(U, {
						key: "startDate",
						date: o
					}), r.a.createElement(U, {
						key: "endDate",
						date: i
					})], r.a.createElement(M.a, {
						className: R.a.rightAlign
					}, t && r.a.createElement("a", {
						href: ".",
						onClick: this.onDelete
					}, r.a.createElement(N.b, {
						className: R.a.deleteIcon
					}))))
				}
			}
			var G = q,
				K = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				V = n("./src/reddit/hooks/useTracking.ts"),
				z = n("./src/reddit/selectors/communityAwards.ts"),
				X = n("./src/reddit/selectors/gold/awardIcon.ts"),
				Q = n("./src/reddit/components/CommunityAwardList/AwardSettings/index.m.less"),
				J = n.n(Q);
			const {
				fbt: Y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Z = ({
				award: e,
				iconUrl: t
			}) => r.a.createElement("div", {
				className: J.a.awardToggleLabelItem
			}, r.a.createElement("div", {
				className: J.a.awardIconWrapper
			}, r.a.createElement("img", {
				className: J.a.awardIcon,
				src: t
			})), r.a.createElement("div", {
				className: J.a.awardInfoWrapper
			}, r.a.createElement("div", {
				className: J.a.awardTitle
			}, e.name), r.a.createElement("div", {
				className: J.a.awardDescription
			}, e.description)));
			var $ = ({
					subredditOrProfile: e,
					subredditOrProfileId: t,
					moderatorPermissions: n
				}) => {
					const s = Object(o.d)(),
						a = Object(V.a)(),
						i = Object(o.e)(e => Object(z.f)(e, {
							subredditOrProfileId: t
						})),
						l = Object(o.e)(e => Object(z.d)(e, {
							subredditOrProfileId: t
						})),
						c = Object(o.e)(e => Object(X.b)(e, {
							awards: i,
							minSize: 64
						}));
					if (!i.length) return r.a.createElement("div", {
						className: J.a.emptyToggleContainer
					}, r.a.createElement("div", {
						className: J.a.emptyToggleContainerLabel
					}, l ? Y._("Pending", null, {
						hk: "1heuFt"
					}) : Y._("No Awards currently available for configuration. Please try again later.", null, {
						hk: "3BsFsT"
					})));
					const m = n && n.all;
					return r.a.createElement("div", {
						className: J.a.awardToggleContainer
					}, r.a.createElement("div", {
						className: J.a.optionalAwardInfo
					}, Y._("Toggle whether these awards are available in your community. If disabled, they cannot be given on any posts or comments.", null, {
						hk: "4e1OPL"
					})), r.a.createElement("div", null, i.map(n => r.a.createElement(K.p, {
						key: n.id,
						on: n.isEnabled,
						forceOn: n.isEnabled,
						className: Object(w.a)(J.a.awardToggleItem, {
							[J.a.awardToggleItemDisabled]: !n.isEnabled
						}),
						label: r.a.createElement(Z, {
							award: n,
							iconUrl: c[n.id]
						}),
						onClick: () => (n => {
							const r = n.isEnabled ? d.g : d.h,
								o = n.isEnabled ? h.h : h.i;
							a(o(n, t)), m && s(r(e, n))
						})(n),
						disabled: !m
					}))))
				},
				ee = n("./src/reddit/components/CommunityAwardList/index.m.less"),
				te = n.n(ee);
			const ne = Object(i.c)({
					awardIcons: (e, {
						subredditOrProfileId: t
					}) => {
						const n = Object(z.e)(e, {
							subredditOrProfileId: t
						});
						return Object(X.b)(e, {
							awards: n,
							minSize: 32
						})
					},
					awards: z.e,
					awardsPending: z.d,
					communityAwardsDisabled: z.b,
					isAddAwardModalOpen: e => Object(O.a)(e) === m.a,
					isConfirmModalOpen: e => Object(O.a)(e) === m.b
				}),
				se = Object(o.b)(ne, (e, {
					subredditOrProfileId: t
				}) => ({
					deleteAward: n => e(Object(d.j)(t, n)),
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
			class re extends r.a.Component {
				constructor(e) {
					super(e), this.openAddAwardModal = (e, t) => {
						Object(b.e)(b.a.AwardCreationFlow), this.props.sendEvent(Object(h.e)()), this.setState({
							selectedCoinPrice: e,
							selectedModOnly: t
						}, this.props.toggleAddAwardModal)
					}, this.openDeleteAwardModal = e => {
						Object(b.e)(b.a.AwardDeletionFlow), this.props.toggleConfirmModal(), this.setState({
							awardId: e
						})
					}, this.confirmDeleteAward = () => {
						const {
							awardId: e
						} = this.state, {
							awards: t
						} = this.props;
						if (this.props.toggleConfirmModal(), e) {
							const n = t.filter(t => t.id === e)[0];
							n && this.props.sendEvent(Object(h.g)(n)), this.props.deleteAward(e), Object(b.b)(b.a.AwardDeletionFlow)
						}
					}, this.renderAwardSlotRow = e => {
						const {
							awardIcons: t,
							awards: n,
							moderatorPermissions: s,
							subredditOrProfileId: a
						} = this.props, o = !(!s || !s.all);
						if (!e.filled && n.length < m.d) return r.a.createElement(B, {
							coinPrice: e.price,
							key: e.price,
							onCreate: () => this.openAddAwardModal(e.price),
							quantity: e.quantity
						});
						if (!e.filled) return null;
						const {
							award: i
						} = e, d = t[i.id];
						return r.a.createElement(G, {
							key: i.id,
							award: i,
							canDelete: o,
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
						const n = e.filter(e => e.id === t)[0];
						return n ? r.a.createElement("div", {
							className: te.a.awardToDelete
						}, r.a.createElement("span", null, s.fbt._("Remove:", null, {
							hk: "1Y4r4o"
						})), r.a.createElement("img", {
							src: n.icon.url,
							className: te.a.awardToDeleteIcon
						}), r.a.createElement("span", null, n.name)) : null
					}, this.renderInfo = () => r.a.createElement("div", {
						className: te.a.pageInfo
					}, r.a.createElement(y.a, {
						name: "info",
						className: te.a.infoIcon
					}), r.a.createElement("p", null, s.fbt._("Community Awards are unique to each community, and members can give them to each other. Moderators can design and name the Awards however they want.", null, {
						hk: "1mzX5Y"
					})), r.a.createElement("p", null, s.fbt._("A portion of Coins from Community Award purchases will be deposited to the community’s Coin balance. Moderators can use Coins from that balance to reward members with Mod Awards. The Coin balance is shown only to moderators in the community’s sidebar", null, {
						hk: "2TVMDb"
					}))), this.state = ae
				}
				renderAwardsList() {
					const {
						awards: e,
						awardsPending: t,
						moderatorPermissions: n,
						subredditOrProfileId: s
					} = this.props;
					if (t) return r.a.createElement(F, null);
					const a = Object(p.a)(s),
						o = n && n.all,
						i = this.getAwardSlots().filter(e => o && !a || e.filled),
						d = e.filter(e => e.awardType === E.f.Moderator),
						l = e.length < m.d && d.length < m.e && o && !a;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(D, {
						subredditId: s
					}), a && r.a.createElement(W, {
						onCreate: () => this.openAddAwardModal()
					}), i.map(this.renderAwardSlotRow), l && r.a.createElement(H, {
						onCreate: () => this.openAddAwardModal(void 0, !0)
					}), this.renderInfo())
				}
				getAwardSlots() {
					const {
						awards: e
					} = this.props, t = Object(E.j)(e), n = e => e.filled && e.award.awardType === E.f.Moderator;
					return t.sort((e, t) => n(e) && !n(t) ? 1 : n(t) && !n(e) ? -1 : e.price !== t.price ? e.price - t.price : e.filled && !t.filled ? -1 : (t.filled && e.filled, 1))
				}
				render() {
					const {
						communityAwardsDisabled: e,
						isAddAwardModalOpen: t,
						isConfirmModalOpen: n,
						moderatorPermissions: a,
						subredditOrProfile: o,
						subredditOrProfileId: i,
						toggleAddAwardModal: d,
						toggleConfirmModal: l
					} = this.props, {
						awardId: c,
						selectedCoinPrice: m,
						selectedModOnly: p
					} = this.state, h = o.isNSFW || e;
					return r.a.createElement(r.a.Fragment, null, Object(u.a)(o) && r.a.createElement(C.a, {
						className: te.a.contentContainer
					}, r.a.createElement(C.b, null, s.fbt._("Community Awards", null, {
						hk: "lraSi"
					})), h ? this.renderBlacklistedView() : this.renderAwardsList()), r.a.createElement(C.a, {
						className: te.a.contentContainer
					}, r.a.createElement(C.b, null, s.fbt._("Enable/Disable Awards", null, {
						hk: "1IRmfG"
					})), r.a.createElement($, {
						subredditOrProfile: o,
						subredditOrProfileId: i,
						moderatorPermissions: a
					})), t && r.a.createElement(x, {
						defaultCoinPrice: m,
						defaultModOnly: p,
						subredditId: i,
						toggleModal: () => {
							d(), Object(b.b)(b.a.AwardCreationFlow)
						}
					}), n && c && r.a.createElement(v.a, {
						acceptText: s.fbt._("Delete", null, {
							hk: "4lt26q"
						}),
						cancelText: s.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}),
						headerText: s.fbt._("Delete Award", null, {
							hk: "7q2D7"
						}),
						message: s.fbt._("Deleting an Award will remove the option for members of your community to give the Award. Existing Awards will remain on the posts and comments that have received them.", null, {
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
					return r.a.createElement(_.c, {
						text: s.fbt._("Community Awards have been disabled for this community.", null, {
							hk: "2g21s6"
						})
					}, r.a.createElement(y.a, {
						name: "award",
						className: te.a.gildIcon
					}))
				}
			}
			t.a = se(Object(k.c)(re))
		},
		"./src/reddit/components/CommunitySettings/ModPnSettings/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-CommunitySettings-ModPnSettings",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-CommunitySettings-ModPnSettings").then(n.bind(null, "./src/reddit/components/CommunitySettings/ModPnSettings/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/CommunitySettings/ModPnSettings/index.tsx"
				}
			});
			t.a = a
		},
		"./src/reddit/components/CommunitySettings/components.m.less": function(e, t, n) {
			e.exports = {
				InputField: "_3V4RO9mtZyZCWAu4P0ST4A",
				inputField: "_3V4RO9mtZyZCWAu4P0ST4A",
				FormContainer: "_37sNfY6fNJVPqyQXOHlg3K",
				formContainer: "_37sNfY6fNJVPqyQXOHlg3K"
			}
		},
		"./src/reddit/components/CommunitySettings/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "k", (function() {
				return l
			})), n.d(t, "l", (function() {
				return c
			})), n.d(t, "n", (function() {
				return m
			})), n.d(t, "m", (function() {
				return u
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "i", (function() {
				return f
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const a = 500,
				r = 100,
				o = 5e3,
				i = 0,
				d = 1440,
				l = 36600,
				c = 1e9,
				m = {
					disabled: s.fbt._("Disabled", null, {
						hk: "1KaunG"
					}).toString(),
					modonly: s.fbt._("Mods only", null, {
						hk: "2yA6R8"
					}).toString(),
					anyone: s.fbt._("Anyone", null, {
						hk: "4gPsEy"
					}).toString()
				},
				u = [s.fbt._("Wiki is disabled for all users except mods", null, {
					hk: "2loUiE"
				}).toString(), s.fbt._("Only mods, approved wiki contributors, or those on a page's edit list may edit", null, {
					hk: "1WUeVN"
				}).toString(), s.fbt._("Anyone who can submit to the community may edit", null, {
					hk: "3hxotT"
				}).toString()],
				p = {
					any: s.fbt._("Any", null, {
						hk: "hVUT8"
					}),
					link: s.fbt._("Links only", null, {
						hk: "3upkyk"
					}),
					self: s.fbt._("Text posts only", null, {
						hk: "1VZn8Y"
					})
				},
				b = [s.fbt._("Any post type is allowed", null, {
					hk: "1rOxtJ"
				}), s.fbt._("Only links to external sites are allowed", null, {
					hk: "OJQdj"
				}), s.fbt._("Only text posts are allowed", null, {
					hk: "3q3v14"
				})],
				h = {
					low: s.fbt._("Low", null, {
						hk: "4k3iTe"
					}),
					high: s.fbt._("High (default)", null, {
						hk: "2GOHsH"
					}),
					all: s.fbt._("All", null, {
						hk: "gl6gc"
					})
				},
				g = {
					low: s.fbt._("Low (default)", null, {
						hk: "2tqJd7"
					}),
					high: s.fbt._("High", null, {
						hk: "ABfkc"
					}),
					all: s.fbt._("All", null, {
						hk: "3bPDOM"
					})
				},
				f = {
					nullValue: s.fbt._("none (recommended)", null, {
						hk: "2FMwQH"
					}),
					confidence: s.fbt._("best", null, {
						hk: "13cLYH"
					}),
					old: s.fbt._("old", null, {
						hk: "3V0QN8"
					}),
					top: s.fbt._("top", null, {
						hk: "40R5FY"
					}),
					qa: s.fbt._("q&a", null, {
						hk: "3cm6YL"
					}),
					live: s.fbt._("live (beta)", null, {
						hk: "2EVYAd"
					}),
					controversial: s.fbt._("controversial", null, {
						hk: "1uFV5F"
					}),
					new: s.fbt._("new", null, {
						hk: "39TZi6"
					})
				}
		},
		"./src/reddit/components/CommunitySettings/index.m.less": function(e, t, n) {
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
				crowdControlLevelSetting: "_3Y9FV8OvxbRG6Hgsb2exNG"
			}
		},
		"./src/reddit/components/CommunitySettings/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/isEqual.js"),
				a = n.n(s),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/actions/pages/shared.ts"),
				m = n("./src/reddit/actions/subredditSettings.ts"),
				u = n("./src/lib/makeActionCreator/index.ts"),
				p = n("./src/lib/makeGqlRequest/index.ts"),
				b = (n("./src/redditGQL/operations/GetSubredditWelcomeMessage.json"), n("./src/redditGQL/operations/UpdateSubredditWelcomeMessage.json"));
			const h = e => {
				if (e) return {
					...e
				}
			};
			const g = (e, t, n) => async (s, a, {
				gqlContext: r
			}) => {
				const o = {
						subredditId: e,
						isWelcomeMessageEnabled: t,
						welcomeMessage: {
							markdown: n
						}
					},
					i = await ((e, t) => Object(p.a)(e, {
						...b,
						variables: t
					}))(r(), {
						input: o
					});
				if (i.ok) {
					const t = (e => {
						var t, n;
						const s = null === (n = null === (t = null == e ? void 0 : e.data.updateSubredditSettings) || void 0 === t ? void 0 : t.subreddit) || void 0 === n ? void 0 : n.welcomeMessage;
						return h(s)
					})(i.body);
					t && s(f({
						subredditId: e,
						welcomeMessage: t
					}))
				}
			}, f = Object(u.a)("SUBREDDIT_WELCOME_MESSAGE__LOADED");
			var x = n("./src/reddit/actions/tags/index.ts"),
				E = n("./src/lib/lessComponent.tsx"),
				v = n("./src/reddit/controls/FormFields/index.tsx"),
				_ = n("./src/reddit/components/CommunitySettings/components.m.less"),
				C = n.n(_);
			const k = E.a.wrapped(v.b, "InputField", C.a),
				y = E.a.div("FormContainer", C.a);
			var O = n("./src/reddit/components/CommunitySettings/ModPnSettings/Loader.tsx"),
				S = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				j = n("./src/reddit/components/TrackingHelper/index.tsx"),
				w = n("./src/reddit/controls/Button/index.tsx"),
				I = n("./src/reddit/helpers/trackers/communitySettings.ts"),
				N = n("./src/reddit/helpers/trackers/communityTopics.ts"),
				T = n("./src/reddit/models/Tags/index.ts"),
				M = n("./src/reddit/selectors/chatPost.ts"),
				P = n("./src/reddit/selectors/streamingModSettings.ts"),
				R = n("./src/reddit/selectors/subreddit.ts"),
				A = n("./src/reddit/selectors/subredditSettings.ts"),
				L = n("./src/reddit/selectors/tags.ts"),
				F = n("./src/reddit/selectors/user.ts"),
				D = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/config.ts")),
				U = n("./node_modules/fbt/lib/FbtPublic.js"),
				B = n("./src/reddit/components/CommunityTopics/index.tsx"),
				H = n("./src/reddit/components/CommunityTopics/NumTopicsSelected.tsx"),
				W = n("./src/reddit/components/CommunityTopics/PrimaryTopic/index.tsx"),
				q = n("./src/reddit/components/CommunityTopics/SuggestedTopics/index.tsx"),
				G = n("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				K = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				V = n("./src/reddit/components/SubredditCreationModal/index.tsx"),
				z = n("./src/reddit/controls/Link/index.tsx"),
				X = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				Q = n("./src/reddit/controls/RadioInput/index.tsx"),
				J = n("./src/reddit/models/Flair/index.ts"),
				Y = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				Z = n("./src/reddit/components/CommunitySettings/helpers.ts"),
				$ = n("./src/lib/classNames/index.ts"),
				ee = n("./src/reddit/actions/toaster.ts"),
				te = n("./src/reddit/components/GeoForm/GeoForm.tsx"),
				ne = n("./src/reddit/components/ModHub/ModHubNav/NavItem.tsx"),
				se = n("./src/reddit/endpoints/geotagging/setSubredditGeoPlace.ts"),
				ae = n("./src/reddit/helpers/localStorage/index.ts"),
				re = n("./src/reddit/hooks/useGqlContext.ts"),
				oe = n("./src/reddit/models/Toast/index.ts"),
				ie = n("./src/reddit/components/CommunitySettings/index.m.less"),
				de = n.n(ie);

			function le(e) {
				var t;
				const {
					initialPlace: n,
					subredditId: s,
					update: a
				} = e, d = Object(re.a)(), l = Object(i.d)(), [c, m] = Object(r.useState)(n), [u, p] = Object(r.useState)(!1), [b, h] = Object(r.useState)(!0);
				return Object(r.useEffect)(() => {
					h(Object(ae.F)("location")), Object(ae.Gb)("location")
				}, []), o.a.createElement(o.a.Fragment, null, o.a.createElement(G.a, null, U.fbt._("Community Location", null, {
					hk: "3aowzb"
				})), o.a.createElement(K.l, {
					label: o.a.createElement(o.a.Fragment, null, U.fbt._("Get discovered by local redditors", null, {
						hk: "1qjcaD"
					}), !b && o.a.createElement(ne.a, null)),
					textContainerClassName: Object($.a)(de.a.fullWidthTextContainer, de.a.geoText),
					subtext: U.fbt._("Add a location to your community and get discovered by redditors near you.", null, {
						hk: "SZnsE"
					})
				}, o.a.createElement(te.a, {
					initialValue: null !== (t = null == n ? void 0 : n.name) && void 0 !== t ? t : "",
					initialPlace: c,
					onPlace: e => a(e, "place"),
					onSubmit: async function({
						place: e,
						sessionId: t
					}) {
						if ((null == e ? void 0 : e.id) === (null == c ? void 0 : c.id)) return;
						p(!0);
						const n = await Object(se.a)(d(), {
							subredditId: s,
							placeId: e.id,
							source: e.source,
							sessionId: t
						});
						if (p(!1), !n.ok) return l(Object(ee.f)({
							kind: oe.b.Error,
							text: U.fbt._("Something went wrong", null, {
								hk: "2PnKbu"
							}),
							duration: 5e3
						}));
						m(e), l(Object(ee.f)({
							kind: oe.b.SuccessCommunity,
							text: U.fbt._("Successfully updated community location", null, {
								hk: "3aGk2e"
							}),
							duration: 5e3
						}))
					},
					disabled: u,
					className: de.a.geoForm,
					inputClassName: de.a.geoInput
				})))
			}
			const ce = {
				[Y.e.Post]: {
					short: () => U.fbt._("Post only (default)", null, {
						hk: "2XJHW4"
					}),
					long: () => U.fbt._("Only approved users can post. Anyone can comment.", null, {
						hk: "3frgit"
					})
				},
				[Y.e.Comment]: {
					short: () => U.fbt._("Comment only", null, {
						hk: "2OhQB5"
					}),
					long: () => U.fbt._("Only approved users can comment. Anyone can post.", null, {
						hk: "2F24kr"
					})
				},
				[Y.e.PostAndComment]: {
					short: () => U.fbt._("Post & Comment", null, {
						hk: "1lWCl2"
					}),
					long: () => U.fbt._("Only approved users can post and comment.", null, {
						hk: "4GkEs6"
					})
				}
			};

			function me(e) {
				const {
					isEmployee: t,
					restrictions: n,
					settings: s,
					subredditId: a,
					subredditName: r,
					testWelcomeMessage: i,
					update: d,
					geoPlace: c,
					onFocusWelcomeMessageInput: m
				} = e, {
					disableContributorRequests: u,
					over18: p,
					publicDescription: b,
					restrictCommenting: h,
					restrictPosting: g,
					subredditType: f,
					title: x,
					welcomeMessageEnabled: E,
					welcomeMessageText: v
				} = s, _ = [], C = [];
				for (const o of Object.keys(ce)) C.push(ce[o].short()), _.push(ce[o].long());
				return o.a.createElement(S.a, null, o.a.createElement(y, null, o.a.createElement(S.b, null, U.fbt._("Community settings", null, {
					hk: "3mvH70"
				})), o.a.createElement(G.a, null, U.fbt._("Community Profile", null, {
					hk: "91aEK"
				})), o.a.createElement(K.e, {
					label: U.fbt._("Community name", null, {
						hk: "260EEx"
					}),
					maxChars: Z.d,
					onChange: e => d(e.currentTarget.value, "title"),
					textContainerClassName: de.a.fullWidthTextContainer,
					value: x || ""
				}), o.a.createElement(K.l, {
					label: U.fbt._("Community topics", null, {
						hk: "49aoGo"
					}),
					textContainerClassName: de.a.fullWidthTextContainer,
					subtext: o.a.createElement("span", {
						className: de.a.subtextContainer
					}, U.fbt._("This will help Reddit recommend your community to relevant users and other discovery experiences.", null, {
						hk: "3WYTu5"
					}), " ", o.a.createElement(X.a, {
						className: de.a.communityTopicsHelpLink,
						href: "https://mods.reddithelp.com/hc/en-us/articles/360024518712",
						rel: "noopener noreferrer",
						target: "_blank"
					}, U.fbt._("Learn more.", null, {
						hk: "1y3kXY"
					})), " ", " ", o.a.createElement("span", {
						className: de.a.numCommunityTopicsSelected
					}, o.a.createElement(H.a, {
						subredditId: a
					}))),
					direction: "column"
				}, o.a.createElement(W.b, {
					subredditId: a,
					onPrimarySelect: e.onPrimarySelect
				}), (!!e.selectedPrimaryTag || e.hasSecondaryTags) && o.a.createElement(B.b, {
					context: N.a.communitySettings,
					subredditId: a
				}), o.a.createElement(q.a, {
					context: N.a.communitySettings,
					subredditId: a
				})), o.a.createElement(K.h, {
					label: U.fbt._("Community description", null, {
						hk: "1XBKXj"
					}),
					onChange: e => d(e.currentTarget.value, "publicDescription", !1),
					maxChars: Z.c,
					rows: 2,
					subtext: U.fbt._("This is how new members come to understand your community.", null, {
						hk: "llaA4"
					}),
					value: b || ""
				}), o.a.createElement(K.p, {
					className: E ? de.a.welcomeMessageEnabled : void 0,
					on: E,
					onClick: () => d(!E, "welcomeMessageEnabled"),
					label: U.fbt._("Send welcome message to new members", null, {
						hk: "4euZSE"
					}),
					subtext: o.a.createElement("span", null, U.fbt._("Create a custom welcome message to greet people the instant they join your community. New community members will see this in a direct message 1 hour after joining.", null, {
						hk: "1D5tM8"
					}), " ", o.a.createElement(X.a, {
						className: de.a.welcomeMessageHelpLink,
						href: "https://mods.reddithelp.com/hc/en-us/articles/360002551551-Welcoming-new-members",
						rel: "noopener noreferrer",
						target: "_blank"
					}, U.fbt._("Learn more.", null, {
						hk: "NkFhF"
					})))
				}), E && o.a.createElement(o.a.Fragment, null, o.a.createElement(K.h, {
					actionLink: o.a.createElement(o.a.Fragment, null, o.a.createElement(z.a, {
						className: de.a.previewButton,
						onClick: () => i(r, v)
					}, U.fbt._("Send me a test message", null, {
						hk: "4iE1go"
					}))),
					label: null,
					onChange: e => {
						d(e.currentTarget.value, "welcomeMessageText")
					},
					onFocus: m,
					placeholder: U.fbt._("Welcome to our community! We’re here to discuss our passion for all things related to grated cheese. (Heads up—we’re a text-only community, so sorry no image posts.) Get started by introducing yourself in our post for newbies, then check out our rules to learn more and dive in.", null, {
						hk: "AnOYs"
					}),
					maxChars: Z.e,
					rows: 5,
					value: v || ""
				})), o.a.createElement(le, {
					subredditId: a,
					update: d,
					initialPlace: c
				}), o.a.createElement(G.a, null, U.fbt._("community type", null, {
					hk: "3T2OkK"
				})), o.a.createElement(K.l, {
					label: U.fbt._("Type of Community", null, {
						hk: "2PReGw"
					}),
					direction: "column"
				}, o.a.createElement(Q.a, {
					value: f,
					name: "type",
					onChange: e => d(e, "subredditType")
				}, Object(V.radioOptions)(t, n))), o.a.createElement(K.p, {
					on: p,
					onClick: () => d(!p, "over18"),
					label: o.a.createElement("span", null, U.fbt._("18+ year old community", null, {
						hk: "3VzYZp"
					}), o.a.createElement(K.m, {
						flair: J.f.Nsfw
					})),
					subtext: U.fbt._("When your community is marked as an 18+ community, users must be flagged as 18+ in their user settings", null, {
						hk: "2h28m0"
					})
				}), "restricted" === f && o.a.createElement(o.a.Fragment, null, o.a.createElement(G.a, null, U.fbt._("Restricted Community Settings", null, {
					hk: "1HiDiC"
				})), o.a.createElement(K.d, {
					label: U.fbt._("Approved users have the ability to", null, {
						hk: "2pduhW"
					}),
					items: C,
					selected: (() => {
						let e = Y.e.Post;
						return h && g ? e = Y.e.PostAndComment : h && (e = Y.e.Comment), ce[e].short()
					})(),
					onClick: e => {
						e === ce[Y.e.PostAndComment].short() ? (d(!0, Y.f.Comment), d(!0, Y.f.Post)) : e === ce[Y.e.Comment].short() ? (d(!1, Y.f.Post), d(!0, Y.f.Comment)) : e === ce[Y.e.Post].short() && (d(!0, Y.f.Post), d(!1, Y.f.Comment))
					},
					id: "restrictionOptions",
					descriptions: _
				}), o.a.createElement(K.p, {
					on: !u,
					onClick: () => d(!u, "disableContributorRequests"),
					label: U.fbt._("Accepting new requests to post", null, {
						hk: "bTpYB"
					})
				})), "private" === f && o.a.createElement(o.a.Fragment, null, o.a.createElement(G.a, null, U.fbt._("Private Community Settings", null, {
					hk: "2JjNXE"
				})), o.a.createElement(K.p, {
					on: !u,
					onClick: () => d(!u, "disableContributorRequests"),
					label: U.fbt._("Accepting requests to join", null, {
						hk: "1l1acS"
					}),
					subtext: U.fbt._("Display a button on your private subreddit that allows users to request to join. Users may still send your subreddit modmail whether this is on or off.", null, {
						hk: "1bkLxN"
					})
				})), o.a.createElement(G.a, null, U.fbt._("Advanced Settings", null, {
					hk: "1e5Esr"
				})), o.a.createElement(K.g, {
					label: U.fbt._("Settings for old site", null, {
						hk: "4wmYj3"
					}),
					subtext: U.fbt._("To change settings that influence the old site, you must go to the old settings page", null, {
						hk: "gYPuP"
					}),
					link: `${D.a.oldRedditUrl}/r/${r}/about/edit`,
					onClick: () => e.sendEvent(Object(I.b)(l.fc.Posts)),
					openInNewTab: !0,
					last: !0
				})))
			}
			var ue = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				pe = n("./src/reddit/components/ModHub/StyledComponents/index.m.less"),
				be = n.n(pe),
				he = n("./src/reddit/components/ContentSurvey/RatingCard.tsx"),
				ge = n("./src/reddit/components/ContentSurvey/SurveyModal.tsx"),
				fe = n("./src/reddit/helpers/trackers/contentTag.ts"),
				xe = n("./src/reddit/hooks/useTracking.ts");
			const {
				fbt: Ee
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function ve(e) {
				const {
					subreddit: t
				} = e, n = Object(i.e)(e => e.subreddits.survey[t.id]), s = Object(xe.a)();
				Object(r.useEffect)(() => s(Object(fe.k)()), [s]);
				const [a, d] = Object(r.useState)(!1);

				function l() {
					s(Object(fe.o)()), d(!0)
				}
				const c = !(null == n ? void 0 : n.response) && (null == n ? void 0 : n.isEligible),
					m = (null == n ? void 0 : n.response) && (null == n ? void 0 : n.isEligible);
				return o.a.createElement("div", {
					className: Object($.a)(be.a.ContentContainer, de.a.contentTag)
				}, o.a.createElement("h2", null, Ee._("Content Tag", null, {
					hk: "1AhgrD"
				})), o.a.createElement("p", null, Ee._("Your content tag is based on a moderator survey about community posts and discussions. {=Learn More}", [Ee._param("=Learn More", o.a.createElement("a", {
					href: "https://www.reddithelp.com/hc/en-us/articles/360048185132",
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: () => s(Object(fe.d)())
				}, Ee._("Learn More", null, {
					hk: "2gJ4PL"
				})))], {
					hk: "2xoqeD"
				})), o.a.createElement("div", {
					className: de.a.contentTagColumn
				}, o.a.createElement(he.a, {
					subredditId: t.id,
					ratingResponse: null == n ? void 0 : n.response
				}, (null == n ? void 0 : n.response) ? o.a.createElement(o.a.Fragment, null, o.a.createElement("p", {
					className: de.a.ratingAudience
				}, Ee._("Tagged as {ratingName} due to:", [Ee._param("ratingName", n.response.rating.name)], {
					hk: "3VVnt5"
				})), o.a.createElement("ul", null, n.response.ratingReasons.map(e => o.a.createElement("li", {
					key: e.id,
					className: de.a.ratingReason
				}, e.contentRatingReasonText)))) : o.a.createElement(o.a.Fragment, null, o.a.createElement("p", {
					className: de.a.ratingAudience
				}, Ee._("Set up your tag", null, {
					hk: "2Fb5bg"
				})), o.a.createElement("p", {
					className: de.a.ratingDescription
				}, Ee._("Take a quick survey to help people know what to expect when they visit this community", null, {
					hk: "VvmPr"
				})))), c && o.a.createElement(w.t, {
					redditStyle: !0,
					className: de.a.surveyButton,
					onClick: l
				}, Ee._("Start Survey", null, {
					hk: "myDPK"
				})), m && o.a.createElement(o.a.Fragment, null, o.a.createElement("p", {
					className: de.a.promptText
				}, Ee._("Does this content tag look wrong to you?", null, {
					hk: "72VuM"
				})), o.a.createElement(w.t, {
					priority: w.c.Secondary,
					redditStyle: !0,
					className: de.a.surveyButton,
					onClick: l
				}, Ee._("Take the Survey", null, {
					hk: "W30wE"
				})), o.a.createElement(ue.a, {
					to: "/r/modsupport/submit"
				}, o.a.createElement(w.t, {
					priority: w.c.Tertiary,
					redditStyle: !0,
					className: de.a.surveyButton,
					onClick: () => s(Object(fe.f)())
				}, "Message r/modsupport")))), a && n && o.a.createElement(ge.a, {
					withOverlay: !0,
					subredditId: t.id,
					survey: n,
					onClose: () => d(!1)
				}))
			}
			var _e = e => {
				const {
					settings: t,
					subredditName: n,
					update: s,
					isChatPostsCreationEnabled: a
				} = e, {
					archivePostsEnabled: i,
					allowChatPostCreation: d,
					allowGalleries: c,
					allowImages: m,
					allowPolls: u,
					allowPostCrossposts: p,
					collapseDeletedComments: b,
					commentScoreHideMins: h,
					contentOptions: g,
					spamComments: f,
					spamLinks: x,
					spamSelfposts: E,
					spoilersEnabled: v,
					suggestedCommentSort: _
				} = t, C = null === _ ? "nullValue" : _, O = Object(r.useCallback)(() => s(!i, "archivePostsEnabled"), [i, s]);
				return o.a.createElement(S.a, null, o.a.createElement(y, null, o.a.createElement(S.b, null, U.fbt._("Post and Comment settings", null, {
					hk: "14OI7p"
				})), o.a.createElement(G.a, null, U.fbt._("Posts", null, {
					hk: "2i2G4r"
				})), o.a.createElement(K.d, {
					label: U.fbt._("Post type options", null, {
						hk: "M9AdT"
					}),
					items: Object.keys(Z.h),
					displayItems: Object.values(Z.h),
					displayTitle: Z.h[g],
					selected: g,
					onClick: e => s(e, "contentOptions"),
					id: "contentOptions",
					descriptions: Z.g
				}), o.a.createElement(K.p, {
					on: p,
					onClick: () => s(!p, "allowPostCrossposts"),
					label: U.fbt._("Allow crossposting of posts.", null, {
						hk: "19EiBT"
					})
				}), o.a.createElement(K.p, {
					on: i,
					onClick: O,
					label: U.fbt._("Archive posts", null, {
						hk: "3FdbDg"
					}),
					subtext: U.fbt._("Don’t allow commenting or voting on posts older than 6 months", null, {
						hk: "4tIS0"
					})
				}), a && o.a.createElement(K.p, {
					on: d,
					onClick: () => s(!d, "allowChatPostCreation"),
					label: U.fbt._("Allow chat posts creation by users.", null, {
						hk: "4zwoUf"
					})
				}), o.a.createElement(K.p, {
					on: v,
					onClick: () => s(!v, "spoilersEnabled"),
					label: o.a.createElement("span", null, U.fbt._("Enable spoiler tag", null, {
						hk: "2CtBpB"
					}), o.a.createElement(K.m, {
						flair: J.f.Spoiler
					})),
					subtext: U.fbt._("Media on posts with the spoiler tag are blurred", null, {
						hk: "4rVOs6"
					})
				}), o.a.createElement(K.p, {
					on: m,
					onClick: () => {
						s(!m, "allowImages"), s(!m, "allowGalleries")
					},
					label: U.fbt._("Allow image uploads and links to image hosting sites", null, {
						hk: "20ETVO"
					})
				}), m && o.a.createElement(K.p, {
					"data-testid": "allow-images-community-setting",
					on: c,
					onClick: () => s(!c, "allowGalleries"),
					label: U.fbt._("Allow multiple images per post", null, {
						hk: "Pcjq5"
					})
				}), o.a.createElement(K.p, {
					on: u,
					onClick: () => s(!u, "allowPolls"),
					label: U.fbt._("Allow polls", null, {
						hk: "15LXRO"
					})
				}), o.a.createElement(K.l, {
					label: U.fbt._("Spam filter strength", null, {
						hk: "4C4qar"
					}),
					subtext: U.fbt._("'HIGH' is the standard filter, 'LOW' disables most filtering, 'ALL' will filter every post initially and they will need to be approved manually to be visible", null, {
						hk: "mdxeP"
					})
				}), o.a.createElement(K.d, {
					label: U.fbt._("Posts", null, {
						hk: "1SdpTj"
					}),
					items: Object.keys(Z.j),
					displayItems: Object.values(Z.j),
					displayTitle: Z.j[E],
					id: "spamSelfposts",
					selected: E,
					onClick: e => s(e, "spamSelfposts"),
					indent: !0
				}), o.a.createElement(K.d, {
					label: U.fbt._("Links", null, {
						hk: "Ia7TU"
					}),
					items: Object.keys(Z.j),
					displayItems: Object.values(Z.j),
					displayTitle: Z.j[x],
					id: "spamLinks",
					selected: x,
					onClick: e => s(e, "spamLinks"),
					indent: !0
				}), o.a.createElement(K.d, {
					label: U.fbt._("Comments", null, {
						hk: "1X5Fv2"
					}),
					items: Object.keys(Z.b),
					displayItems: Object.values(Z.b),
					displayTitle: Z.b[f],
					selected: f,
					onClick: e => s(e, "spamComments"),
					indent: !0,
					id: "spamComments"
				}), o.a.createElement(G.a, null, U.fbt._("Comments", null, {
					hk: "4sAqsA"
				})), o.a.createElement(K.d, {
					label: U.fbt._("Suggested sort", null, {
						hk: "4Af3Lr"
					}),
					subtext: U.fbt._("All comment feeds in community will default to this sort setting", null, {
						hk: "4grj1W"
					}),
					items: Object.keys(Z.i),
					displayItems: Object.values(Z.i),
					displayTitle: Z.i[C],
					selected: C,
					onClick: e => s("nullValue" === e ? null : e, "suggestedCommentSort"),
					id: "suggestedCommentSort"
				}), o.a.createElement(K.p, {
					on: b,
					onClick: () => s(!b, "collapseDeletedComments"),
					label: U.fbt._("Collapse deleted and removed comments", null, {
						hk: "Iw8kU"
					})
				}), o.a.createElement(K.l, {
					label: U.fbt._("Minutes to hide comment scores", null, {
						hk: "1DJhj0"
					}),
					direction: "column"
				}, o.a.createElement(k, {
					onChange: e => s(e.currentTarget.value, "commentScoreHideMins"),
					isInvalid: !(h >= Z.f && h <= Z.a),
					min: Z.f,
					max: Z.a,
					type: "number",
					value: h
				})), o.a.createElement(G.a, null, U.fbt._("Advanced Settings", null, {
					hk: "53xlS"
				})), o.a.createElement(K.g, {
					label: U.fbt._("Settings for old site", null, {
						hk: "2jzUi8"
					}),
					subtext: U.fbt._("To change settings that influence the old site, you must go to the old settings page", null, {
						hk: "4DHBV2"
					}),
					link: `${D.a.oldRedditUrl}/r/${n}/about/edit`,
					onClick: () => e.sendEvent(Object(I.b)(l.fc.Posts)),
					openInNewTab: !0,
					last: !0
				})))
			};

			function Ce(e) {
				const {
					isChatPostsCreationEnabled: t,
					isBroadcastingEnabled: n,
					settings: s,
					subredditName: a,
					update: r
				} = e, {
					allowDiscovery: i,
					contentVisible: d,
					crowdControlMode: c,
					crowdControlFilter: m,
					crowdControlLevel: u,
					crowdControlChatLevel: p,
					excludeBannedModqueue: b,
					toxicityThresholdChatLevel: h
				} = s, g = {
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
				return o.a.createElement(S.a, null, o.a.createElement(y, null, o.a.createElement(S.b, null, U.fbt._("Safety & privacy settings", null, {
					hk: "34ghQV"
				})), o.a.createElement(G.a, null, U.fbt._("Safety", null, {
					hk: "2QSter"
				})), o.a.createElement(K.p, {
					on: b,
					onClick: () => r(!b, "excludeBannedModqueue"),
					label: U.fbt._("Exclude posts by site-wide banned users", null, {
						hk: "Kmfy0"
					}),
					subtext: U.fbt._("Posts are excluded from modqueue/unmoderated", null, {
						hk: "2P2pfc"
					})
				}), o.a.createElement(K.p, {
					on: c,
					onClick: () => r(!c, "crowdControlMode"),
					label: U.fbt._("Turn on crowd control mode", null, {
						hk: "2qY8D5"
					}),
					subtext: U.fbt._("When crowd control is enabled, comments from users who aren't yet fully trusted in your community (including new users) will display as collapsed by default", null, {
						hk: "13Z3pC"
					})
				}), o.a.createElement(K.j, {
					className: de.a.crowdControlLevelSetting,
					ticks: g,
					min: 0,
					max: Object.keys(g).length - 1,
					step: 1,
					value: u,
					onChange: e => r(e.target.value, "crowdControlLevel"),
					label: U.fbt._("Adjust Crowd Control", null, {
						hk: "4oJUSP"
					}),
					subtext: U.fbt._("{subText}", [U.fbt._param("subText", g[u].subText)], {
						hk: "3ZFhAV"
					})
				}), o.a.createElement(K.p, {
					indent: !0,
					on: m,
					onClick: () => r(!m, "crowdControlFilter"),
					label: U.fbt._("Hold crowd controlled comments for review", null, {
						hk: "1c0Z06"
					}),
					subtext: U.fbt._("Instead of collapsing crowd controlled comments will be held for review in mod queue.", null, {
						hk: "1QBJUP"
					})
				}), (t || n) && o.a.createElement(o.a.Fragment, null, o.a.createElement(K.j, {
					ticks: g,
					min: 0,
					max: Object.keys(g).length - 1,
					step: 1,
					value: p,
					onChange: e => r(e.target.value, "crowdControlChatLevel"),
					label: U.fbt._("Adjust Crowd Control for Chat Posts", null, {
						hk: "vTy7k"
					}),
					subtext: U.fbt._("{subText}", [U.fbt._param("subText", g[p].subText)], {
						hk: "12hf9Y"
					})
				}), o.a.createElement(K.p, {
					on: !!Number(h),
					onClick: () => {
						r(Number(h) ? "0" : "1", "toxicityThresholdChatLevel")
					},
					label: U.fbt._("Collapse Toxic Messages in Chat Post", null, {
						hk: "1Pk3G5"
					}),
					subtext: U.fbt._("Comments that our model scores as toxic will be automatically collapsed.", null, {
						hk: "Rohtu"
					})
				})), o.a.createElement(G.a, null, U.fbt._("Discover", null, {
					hk: "1I53SY"
				})), o.a.createElement(K.n, {
					className: de.a.sectionSubtext
				}, U.fbt._("Show your community to the general Reddit population or just to people who have similar interests, by adjusting how people can find it. Not sure what’s best for you? {=Learn More.}", [U.fbt._param("=Learn More.", o.a.createElement("a", {
					className: de.a.subtextLink,
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://mods.reddithelp.com/hc/en-us/sections/360000685771-General-Common-Questions"
				}, U.fbt._("Learn More.", null, {
					hk: "3oTITT"
				})))], {
					hk: "4nomNH"
				})), o.a.createElement(K.p, {
					on: d,
					onClick: () => r(!d, "contentVisible"),
					label: U.fbt._("Show up in high-traffic feeds", null, {
						hk: "3l7KBc"
					}),
					subtext: U.fbt._("Allow your community to be in r/all, r/popular, and trending lists where it can be seen by the general Reddit population.", null, {
						hk: "iH0lY"
					})
				}), o.a.createElement(K.p, {
					on: i,
					onClick: () => r(!i, "allowDiscovery"),
					label: U.fbt._("Get recommended to individual redditors", null, {
						hk: "4wmaiH"
					}),
					subtext: U.fbt._("Let Reddit recommend your community to people who have similar interests.", null, {
						hk: "487MMM"
					})
				}), o.a.createElement(G.a, null, U.fbt._("Advanced Settings", null, {
					hk: "3TL9Or"
				})), o.a.createElement(K.g, {
					link: `${D.a.oldRedditUrl}/r/${a}/about/edit`,
					onClick: () => e.sendEvent(Object(I.b)(l.fc.Safety)),
					openInNewTab: !0,
					last: !0,
					label: U.fbt._("Settings for old site", null, {
						hk: "1WHvCJ"
					}),
					subtext: U.fbt._("To change settings that influence the old site, you must go to the old settings page", null, {
						hk: "2wPmwa"
					})
				})))
			}

			function ke(e) {
				const {
					settings: t,
					subredditName: n,
					update: s
				} = e, {
					wikiEditAge: a,
					wikiEditKarma: r,
					wikimode: i
				} = t;
				return o.a.createElement(S.a, null, o.a.createElement(y, null, o.a.createElement(S.b, null, U.fbt._("Wiki settings", null, {
					hk: "1gmluS"
				})), o.a.createElement(G.a, null, U.fbt._("Community wiki pages", null, {
					hk: "1LwxaS"
				})), o.a.createElement(K.d, {
					label: U.fbt._("Wikis can be edited by", null, {
						hk: "3brAqG"
					}),
					displayItems: Object.values(Z.n),
					displayTitle: Z.n[i],
					items: Object.keys(Z.n),
					selected: i,
					onClick: e => s(e, "wikimode"),
					id: "wikimode",
					descriptions: Z.m
				}), o.a.createElement(K.l, {
					label: U.fbt._("Karma required to edit and create wiki pages", null, {
						hk: "3OgR7v"
					}),
					direction: "column"
				}, o.a.createElement(k, {
					onChange: e => s(e.currentTarget.value, "wikiEditKarma"),
					isInvalid: !(r >= Z.f && r <= Z.l),
					min: Z.f,
					max: Z.l,
					type: "number",
					value: r
				})), o.a.createElement(K.l, {
					label: U.fbt._("Age of Reddit account required to edit and create wiki pages", null, {
						hk: "3UE6cD"
					}),
					direction: "column"
				}, o.a.createElement(k, {
					onChange: e => s(e.currentTarget.value, "wikiEditAge"),
					isInvalid: !(a >= Z.f && a <= Z.k),
					min: Z.f,
					max: Z.k,
					type: "number",
					value: a
				})), o.a.createElement(G.a, null, U.fbt._("Advanced Settings", null, {
					hk: "4drMhK"
				})), o.a.createElement(K.g, {
					label: U.fbt._("Settings for old site", null, {
						hk: "2YU3sQ"
					}),
					subtext: U.fbt._("To change settings that influence the old site, you must go to the old settings page", null, {
						hk: "1ihkVe"
					}),
					link: `${D.a.oldRedditUrl}/r/${n}/about/edit`,
					onClick: () => e.sendEvent(Object(I.b)(l.fc.Wikis)),
					openInNewTab: !0,
					last: !0
				})))
			}
			const {
				fbt: ye
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Oe = Object(d.c)({
				allowChatPostCreation: (e, t) => Object(M.b)(e, t.subredditId),
				isBroadcastingEnabled: (e, t) => Object(P.c)(e, t.subredditId),
				isChatPostsCreationEnabled: (e, t) => Object(M.c)(e, t.subredditId),
				isEmployee: F.H,
				notificationSettings: A.b,
				restrictions: R.m,
				settings: (e, t) => Object(R.T)(e, t.subredditId),
				subreddit: R.R,
				selectedPrimaryTag: L.s,
				hasSecondaryTags: L.m,
				geoPlace: (e, t) => e.tags.models.geoPlaces[t.subredditId]
			}), Se = Object(i.b)(Oe, (e, {
				subredditId: t
			}) => ({
				onViewPageEvent: () => e(Object(c.a)()),
				testWelcomeMessage: (t, n) => e(Object(m.i)(t, n)),
				save: (t, n) => e(Object(m.j)(n, t, void 0)),
				saveCommunityTopics: t => e(Object(x.e)(t, N.a.communitySettings)),
				onPrimarySelect: n => e(Object(x.f)({
					primaryTagId: n,
					subredditId: t
				})),
				savePrimaryTopic: n => {
					n && e(Object(x.o)(t, {
						tagId: n.id,
						state: T.d.TAGGED
					}, !1))
				},
				updateSubredditWelcomeMessage: (t, n, s) => e(g(t, n, s))
			}));
			class je extends o.a.Component {
				constructor(e) {
					super(e), this.saveSettings = () => {
						this.props.save(this.state.changed, this.props.subredditId), this.props.saveCommunityTopics(this.props.subredditId), this.props.savePrimaryTopic(this.props.selectedPrimaryTag);
						for (const e in this.state.changed) this.props.sendEvent(Object(I.c)(e, this.state.changed[e], this.props.settings[e]));
						this.setState({
							settings: this.state.settings,
							changed: {}
						})
					}, this.update = (e, t, n = !0) => {
						n && this.props.sendEvent(Object(I.d)(t, e, this.state.settings[t])), this.setState(n => ({
							changed: {
								...n.changed,
								[t]: e
							},
							settings: {
								...n.settings,
								[t]: e
							}
						}))
					}, this.onFocusWelcomeMessageInput = () => this.props.sendEvent(Object(I.e)("click", "welcome_message_edit")), this.renderSubpage = () => {
						const e = {
							...this.props,
							settings: this.state.settings,
							update: this.update,
							onFocusWelcomeMessageInput: this.onFocusWelcomeMessageInput
						};
						if (!this.state.settings) return null;
						switch (this.props.subpageName) {
							case l.fc.Safety:
								return o.a.createElement(Ce, e);
							case l.fc.Notifications:
								return o.a.createElement(S.a, null, o.a.createElement(y, null, o.a.createElement(O.a, {
									subredditId: e.subredditId,
									subredditName: e.subredditName
								})));
							case l.fc.Posts:
								return o.a.createElement(_e, e);
							case l.fc.Wikis:
								return o.a.createElement(ke, e);
							case l.fc.ContentTag:
								return o.a.createElement(ve, {
									subreddit: e.subreddit
								});
							default:
								return o.a.createElement(me, e)
						}
					}, this.state = {
						settings: e.settings,
						changed: {}
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
					return o.a.createElement(o.a.Fragment, null, this.props.subpageName !== l.fc.ContentTag && o.a.createElement(S.c, null, o.a.createElement(w.l, {
						onClick: this.saveSettings,
						"data-redditstyle": !0
					}, ye._("Save changes", null, {
						hk: "8mSp0"
					}))), this.renderSubpage())
				}
			}
			t.a = Se(Object(j.c)(je))
		},
		"./src/reddit/components/CommunityTopics/NumTopicsSelected.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/models/Tags/index.ts"),
				d = n("./src/reddit/selectors/tags.ts");
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js"), c = Object(o.c)({
				selectedOptions: (e, {
					subredditId: t
				}) => Object(d.r)(e, {
					subredditId: t
				})
			});
			t.a = Object(r.b)(c)(e => a.a.createElement(a.a.Fragment, null, e.selectedOptions.length, "/", i.a))
		},
		"./src/reddit/components/CommunityTopics/PrimaryTopic/index.m.less": function(e, t, n) {
			e.exports = {
				menuItemsWrapper: "_1OISxDncG3tn4CibwqeC4e",
				tooltip: "UNHdPZIwwyCehEV-NfEY7"
			}
		},
		"./src/reddit/components/CommunityTopics/PrimaryTopic/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return P
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/tags/index.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/components/ContentTooltip/index.tsx"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/localStorage/index.ts"),
				b = n("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				h = n("./src/reddit/components/InlineSubredditEditing/index.m.less"),
				g = n.n(h);
			const {
				fbt: f
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class x extends r.a.Component {
				componentDidMount() {
					this.props.sendEvent(b.e), this.props.onViewTooltip()
				}
				render() {
					const {
						translatedTitle: e,
						translatedDesc: t,
						translatedButtonText: n
					} = this.props;
					return r.a.createElement("div", {
						className: g.a.tooltipContent,
						onClick: e => {
							e.preventDefault(), e.stopPropagation()
						}
					}, r.a.createElement("span", {
						className: g.a.topRow
					}, r.a.createElement("h3", {
						className: g.a.title
					}, e)), r.a.createElement("p", {
						className: g.a.tooltipBody
					}, t), r.a.createElement(u.l, {
						className: g.a.gotIt,
						onClick: this.props.onDismissTooltip
					}, n || f._("Got it", null, {
						hk: "4CoCjQ"
					})))
				}
			}
			var E = Object(o.b)(void 0, e => ({
				onDismissTooltip: () => {
					e(Object(l.i)()), Object(p.xb)()
				},
				onViewTooltip: () => {
					Object(p.Qb)()
				}
			}))(Object(m.c)(x));
			const v = "editable-primary-topic-idcard";
			var _ = n("./src/reddit/controls/DropdownSelector/index.tsx"),
				C = n("./src/reddit/models/Tags/index.ts"),
				k = n("./src/reddit/selectors/tags.ts"),
				y = n("./src/reddit/components/CommunityTopics/PrimaryTopic/index.m.less"),
				O = n.n(y);
			const S = ({
					hasPrimaryTag: e,
					hasSecondaryTags: t
				}) => {
					if (e) return null;
					let n = s.fbt._("Add Community Topics", null, {
							hk: "2wd4kg"
						}),
						a = s.fbt._("Tell us what topics are relevant to your community so we can surface it to the right users", null, {
							hk: "24NCiQ"
						});
					return t && (n = s.fbt._("Add a Primary Topic", null, {
						hk: "41x5Gv"
					}), a = s.fbt._("Oops we don’t have a primary topic yet. Add one so we can surface your community to the right users", null, {
						hk: "XayPA"
					})), r.a.createElement(c.a, {
						className: O.a.tooltip,
						tooltipId: v,
						defaultTooltipPosition: "left",
						tooltipSizeEstimate: {
							height: 150,
							width: 320
						}
					}, r.a.createElement(E, {
						translatedTitle: n,
						translatedDesc: a
					}))
				},
				j = {
					availablePrimaryTags: k.p
				},
				w = Object(i.c)({
					...j,
					selectedPrimaryTag: (e, {
						subredditId: t
					}) => t && Object(k.s)(e, {
						subredditId: t
					}) || null,
					hasSecondaryTags: (e, {
						subredditId: t
					}) => Object.keys(Object(k.o)(e, {
						itemId: t
					})).length > 0,
					isSaving: k.D
				}),
				I = Object(i.c)({
					...j,
					selectedPrimaryTag: (e, {
						subredditId: t
					}) => t && Object(k.x)(e, {
						subredditId: t
					}) || null,
					hasSecondaryTags: (e, {
						subredditId: t
					}) => Object.keys(Object(k.o)(e, {
						itemId: t
					})).length > 0,
					isSaving: k.D
				}),
				N = Object(i.c)({
					...j,
					selectedPrimaryTag: k.v,
					hasSecondaryTags: () => !1,
					isSaving: e => Object(k.D)(e)
				}),
				T = (e, {
					subredditId: t,
					onPrimarySelect: n
				}) => ({
					onPrimaryTopicSelected: s => {
						s.isSelected || !n ? s.isSelected || (e(Object(d.f)({
							primaryTagId: s.value,
							subredditId: t
						})), e(Object(d.o)(t, {
							tagId: s.value,
							state: C.d.TAGGED
						}))) : n(s.value)
					},
					onShowTooltip: () => {
						e(Object(l.f)({
							tooltipId: v
						}))
					}
				});
			class M extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						tooltipDismissed: !0
					}
				}
				componentDidMount() {
					const e = this.props.onShowTooltip;
					this.setState({
						tooltipDismissed: Object(p.r)()
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
						hasSecondaryTags: n,
						isSaving: a,
						onPrimaryTopicSelected: o,
						selectedPrimaryTag: i
					} = this.props, d = i && i.text;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(_.b, {
						id: this.isTooltipEnabled() ? v : void 0,
						className: t,
						isTopicsStyle: !0,
						displayText: d || s.fbt._("Add a Primary Topic", null, {
							hk: "1HgVte"
						}),
						options: e.map(e => ({
							displayText: e.text,
							value: e.id,
							isSelected: !!i && i.id === e.id
						})),
						onSelect: o,
						menuItemsClassName: O.a.menuItemsWrapper,
						showSelectedCheckmark: !0,
						isSaving: a
					}), this.isTooltipEnabled() && r.a.createElement(S, {
						hasPrimaryTag: !!i,
						hasSecondaryTags: n
					}))
				}
			}
			Object(o.b)(N, e => ({
				onPrimaryTopicSelected: t => {
					e(Object(d.a)({
						primaryTagId: t.value
					}))
				}
			}))(M);
			const P = Object(o.b)(I, T)(M),
				R = Object(o.b)(w, T);
			t.b = R(M)
		},
		"./src/reddit/components/CommunityTopics/SuggestedTopics/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CommunityTopics/SuggestedTopics/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/tags/index.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				m = n("./src/reddit/icons/svgs/Close/index.tsx"),
				u = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				p = n("./src/reddit/components/CommunityTopics/SuggestedTopics/index.m.less"),
				b = n.n(p);
			var h = e => r.a.createElement("span", {
					className: b.a.suggestedTopic,
					onClick: () => e.onSuggestedTopicSelected(e.suggestedTopic)
				}, r.a.createElement(u.a, {
					className: b.a.plusIcon
				}), r.a.createElement("span", {
					className: b.a.suggestedTopicText
				}, e.suggestedTopic.displayText), r.a.createElement("span", {
					className: b.a.closeIconContainer,
					onClick: t => {
						t.preventDefault(), t.stopPropagation(), e.onSuggestedTopicDismissed(e.suggestedTopic)
					}
				}, r.a.createElement(m.a, {
					className: b.a.closeIcon
				}))),
				g = n("./src/reddit/helpers/trackers/communityTopics.ts"),
				f = n("./src/reddit/models/Tags/index.ts"),
				x = n("./src/reddit/models/Toast/index.ts"),
				E = n("./src/reddit/selectors/tags.ts");
			const v = Object(i.c)({
					suggestedOptions: (e, {
						subredditId: t
					}) => {
						const n = Object(E.y)(e, {
								itemId: t
							}),
							s = Object(E.r)(e, {
								subredditId: t
							}),
							a = Object(E.w)(e, {
								subredditId: t
							});
						return n.filter(e => !!e.id && a !== e.id && !s.find(t => !!t.id && t.id === e.id))
					}
				}),
				_ = Object(o.b)(v, (e, {
					subredditId: t,
					onOptionSelected: n,
					context: a
				}) => ({
					onSuggestedOptionDismissed: n => {
						e(Object(l.n)(t, [], [{
							subredditId: t,
							tagId: n.id,
							isRelevant: !1
						}], a, !0))
					},
					onSuggestedOptionSelected: r => {
						e((e, o) => {
							const i = o();
							Object(E.r)(i, {
								subredditId: t
							}).length >= f.a ? e(Object(c.f)({
								...Object(c.e)(s.fbt._("You can only add up to {max number of topics} community topics", [s.fbt._param("max number of topics", f.a.toString())], {
									hk: "1OySAh"
								}), x.b.Error),
								duration: c.a
							})) : (e(Object(l.j)({
								subredditId: t,
								option: r
							})), Object(g.c)(o(), t, r, {
								context: a
							}), n && n(r))
						})
					}
				}));
			t.a = _(e => e.suggestedOptions.length ? r.a.createElement("div", {
				className: Object(d.a)(b.a.suggestedTopicsContainer, e.className)
			}, e.children || r.a.createElement("span", {
				className: b.a.relatedText
			}, s.fbt._("Related:", null, {
				hk: "1qt7CO"
			})), e.suggestedOptions.map(t => r.a.createElement(h, {
				key: t.id,
				suggestedTopic: t,
				onSuggestedTopicSelected: e.onSuggestedOptionSelected,
				onSuggestedTopicDismissed: e.onSuggestedOptionDismissed
			}))) : null)
		},
		"./src/reddit/components/CommunityTopics/index.m.less": function(e, t, n) {
			e.exports = {
				communityTopicsContainer: "wsNyCIZw7veQPURlfXwXb"
			}
		},
		"./src/reddit/components/CommunityTopics/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/tags/index.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/components/MultiOptionSelect/index.tsx"),
				m = n("./src/reddit/helpers/trackers/communityTopics.ts"),
				u = n("./src/reddit/models/Tags/index.ts"),
				p = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/selectors/tags.ts"),
				h = n("./src/reddit/components/CommunityTopics/index.m.less"),
				g = n.n(h);
			const f = Object(i.c)({
				availableSubredditTags: (e, {
					subredditId: t
				}) => Object(b.d)(e, {
					subredditId: t
				}),
				subredditTags: (e, {
					subredditId: t
				}) => Object(b.o)(e, {
					itemId: t
				}),
				availableGlobalOptions: (e, {
					subredditId: t
				}) => Object(b.a)(e, {
					thingId: t
				}),
				selectedOptions: (e, {
					subredditId: t
				}) => Object(b.r)(e, {
					subredditId: t
				}),
				isLoading: e => Object(b.B)(e),
				currentInput: (e, {
					subredditId: t
				}) => Object(b.i)(e, {
					subredditId: t
				})
			});
			class x extends r.a.Component {
				constructor() {
					super(...arguments), this.onOptionsChanged = e => {
						const t = e.filter(e => e.selected),
							n = e.filter(e => !e.selected);
						this.onOptionsSelected(t), n.forEach(e => this.onOptionDeselected(e))
					}, this.onFocus = () => {
						this.props.onSearchBarFocused(), this.props.onFocus && this.props.onFocus()
					}
				}
				onOptionsSelected(e) {
					const t = u.a - this.props.selectedOptions.length,
						n = e.filter(e => !!e.displayText.trim()),
						s = n.slice(0, t);
					s.forEach(e => {
						if (!e.id) {
							const t = Object(b.c)(e.displayText, this.props.availableSubredditTags);
							t && (e = Object(u.f)(t, !0))
						}
						this.props.optionSelected({
							...e,
							displayText: e.displayText.trim()
						})
					}), s.length !== n.length && this.props.onMaxTopicsHit()
				}
				onOptionDeselected(e) {
					this.props.optionDeselected(e)
				}
				render() {
					return r.a.createElement("div", {
						className: g.a.communityTopicsContainer
					}, r.a.createElement(c.a, {
						readOnlyMode: this.props.readOnlyMode,
						addText: s.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						allowFreeTextEntry: !0,
						availableOptions: this.props.availableGlobalOptions,
						childClassNames: this.props.childClassNames,
						dropdownHeaderText: s.fbt._("Suggested topics", null, {
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
			t.b = Object(o.b)(f, (e, {
				subredditId: t,
				context: n
			}) => ({
				optionSelected: s => {
					e(Object(d.j)({
						subredditId: t,
						option: s
					})), e((e, a) => {
						m.e(a(), t, s, {
							context: n
						})
					})
				},
				optionDeselected: s => {
					e(Object(d.i)({
						subredditId: t,
						option: s
					})), e((e, a) => {
						m.d(a(), t, s, {
							context: n
						})
					})
				},
				onInputChanged: n => e(Object(d.h)({
					subredditId: t,
					input: n
				})),
				onSearchBarFocused: () => e((e, s) => {
					m.b(s(), t, {
						context: n
					})
				}),
				onMaxTopicsHit: () => e((e, t) => {
					e(Object(l.f)({
						...Object(l.e)(s.fbt._({
							"*": "You can only add up to max {number} community topics",
							_1: "You can only add up to max 1 community topic"
						}, [s.fbt._plural(u.a, "number")], {
							hk: "s07I1"
						}), p.b.Error),
						duration: l.a
					}))
				})
			}))(x)
		},
		"./src/reddit/components/CompactPost/index.m.less": function(e, t, n) {
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
				modToolsFlatlist: "_20p7Nh6bZU7MOqYuB2uJcy",
				postContainer: "_2bHVWuR_l_wVivC3FKfLFf",
				leftBorderWrapper: "_3ZmFVbkR23TIZ-3nboLYXe",
				modModeBannerWrapper: "_1_voPxd0-GKljAjvO7ZcgJ"
			}
		},
		"./src/reddit/components/CompactPost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "renderSubredditIcon", (function() {
				return Ne
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/ads/index.ts"),
				l = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/postLayout.ts"),
				u = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				p = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				b = n("./src/reddit/helpers/trackers/post.ts"),
				h = n("./src/reddit/models/Media/index.ts"),
				g = n("./src/reddit/models/User/index.ts"),
				f = n("./src/reddit/models/Vote/index.ts"),
				x = n("./src/reddit/actions/post.ts"),
				E = n("./src/reddit/actions/postFlair.ts"),
				v = n("./src/reddit/actions/tooltip.ts"),
				_ = n("./src/reddit/selectors/activeModalId.ts"),
				C = n("./src/reddit/selectors/moderatorPermissions.ts"),
				k = n("./src/reddit/selectors/postFlair.ts"),
				y = n("./src/reddit/selectors/posts.ts"),
				O = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				S = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				j = n("./src/reddit/components/AwardBadges/index.tsx"),
				w = n("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				I = n("./src/reddit/components/CommentsLink/index.tsx"),
				N = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				T = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				M = n("./src/reddit/components/ExpandoButton/index.tsx"),
				P = n("./src/reddit/components/Flatlist/index.tsx"),
				R = n("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				A = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				L = n("./src/reddit/components/ModActionsMenu/index.tsx"),
				F = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				D = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				U = n("./src/reddit/components/ModModeReports/index.tsx"),
				B = n("./src/reddit/components/ModModeReports/helpers.ts"),
				H = n("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				W = n("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				q = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				G = n("./src/reddit/components/PostBadges/index.tsx"),
				K = n("./src/reddit/components/PostContainer/index.tsx"),
				V = n("./src/reddit/components/PostFlairPicker/index.tsx"),
				z = n("./src/reddit/components/PostLeftRail/index.tsx"),
				X = n("./src/reddit/components/PostMedia/index.tsx"),
				Q = n("./src/reddit/components/PostModModeDropdown/index.tsx"),
				J = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Y = n("./src/reddit/components/PostTitle/index.tsx"),
				Z = n("./src/reddit/components/PostTopMeta/index.tsx"),
				$ = n("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				ee = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				te = n("./src/reddit/components/SponsoredLabel/index.tsx"),
				ne = n("./src/reddit/components/SubredditIcon/index.tsx"),
				se = n("./src/reddit/components/VerticalVotes/index.tsx"),
				ae = n("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				re = n("./src/reddit/contexts/PageLayer/index.tsx"),
				oe = n("./src/reddit/contexts/Post/index.tsx"),
				ie = n("./src/reddit/controls/Checkbox/index.tsx"),
				de = n("./src/reddit/controls/MetaData/index.tsx"),
				le = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				ce = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				me = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				ue = n("./src/reddit/helpers/postEvent.ts"),
				pe = n("./src/reddit/hooks/useIsOverlay.ts"),
				be = n("./src/reddit/hooks/useTheme.ts"),
				he = n("./src/reddit/hooks/useUserContext.ts"),
				ge = n("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				fe = n("./src/reddit/icons/fonts/Report/index.tsx"),
				xe = n("./src/reddit/selectors/showPromotedCTA.ts"),
				Ee = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				ve = n.n(Ee),
				_e = n("./src/reddit/components/CompactPost/index.m.less"),
				Ce = n.n(_e);

			function ke() {
				return (ke = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
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
				Oe = () => Object(i.c)({
					activeModalId: _.a,
					crosspost: y.d,
					flairStyleTemplate: re.U,
					isActive: y.j,
					isExpanded: y.m,
					showPromotedCTA: xe.a,
					layout: re.Q,
					moderatorPermissions: C.l,
					poll: (e, t) => {
						const n = e.posts.metaMap[t.postId];
						if (n) return e.polls.models[n]
					},
					showEditFlair: k.a
				}),
				Se = (e, {
					postId: t
				}) => ({
					dispatchFlairChanged: ({
						post: t,
						previewFlair: n,
						selectedTemplateId: s
					}) => e(Object(E.h)({
						post: t,
						previewFlair: n,
						selectedTemplateId: s
					})),
					handleVote: n => {
						const s = n === f.a.upvoted ? Object(x.jb)(t) : Object(x.w)(t);
						e(s)
					},
					onIgnoreReports: () => e(Object(x.fb)(t)),
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
						currentProfileName: n,
						crosspost: s,
						currentUser: r,
						eventFactory: o,
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
						layout: X,
						moderatorPermissions: te,
						modModeEnabled: ne,
						onClickPost: re,
						onFlairChanged: oe,
						onIgnoreReports: de,
						poll: pe,
						post: be,
						subredditOrProfile: he,
						userIsOp: xe,
						hideModTools: Ee,
						scrollerItemRef: _e,
						showBulkActionCheckbox: ke,
						showEditFlair: Oe,
						toggleCheckbox: Se,
						tooltipType: je,
						sendEvent: Ie,
						shouldShowGalleryTileOption: Ne,
						showPromotedCTA: Me
					} = this.props, Pe = !!be.media && be.media.type === h.o.RTJSON, Re = xe && Pe, Ae = Object(V.b)(be.id, k), Le = Object(me.a)(te), Fe = Object(le.a)(te), De = Object(ce.a)(te), Ue = `-mod-actions-menu-${be.id}`, Be = `voting-arrows-${be.id}`, He = !!r && Object(g.e)(r) === be.author, We = Object(D.d)(be), qe = Object(B.c)(be), Ge = Object(R.a)("View--Reports", be.id, je), Ke = Object(B.a)(be), Ve = !(k || E || v), ze = be.media && be.media.type === h.o.LIVEVIDEO, Xe = e => Ie(Object(b.h)(be.id, e)), Qe = Object(d.t)(be, f), {
						source: Je
					} = Qe, Ye = a.a.createElement(K.a, {
						className: Object(l.a)(ve.a.compactPostStyles, Ce.a.postContainer, Object(p.a)(this.props), t),
						isOverlay: k,
						style: {
							...Object(p.d)(this.props),
							...Object(p.b)(this.props.flairStyleTemplate)
						},
						post: be,
						onClick: re,
						eventFactory: o
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
						toggleCheckbox: Se
					}), a.a.createElement(se.a, {
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
					}))), a.a.createElement(q.a, {
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
						crosspost: s,
						isCommentsPage: E,
						isCompact: !1,
						isExpanded: _,
						post: be,
						useMediaIcons: !0
					}), !M && !be.isSponsored && a.a.createElement(A.h, {
						type: be.belongsTo.type,
						id: be.belongsTo.id
					}), a.a.createElement("div", {
						className: Ce.a.topLine,
						"data-click-id": "body"
					}, !!be.recommendationContext && a.a.createElement(W.a, {
						content: be.recommendationContext.content,
						layout: m.g.Compact,
						post: be
					}), a.a.createElement(Y.c, {
						post: be,
						poll: pe,
						size: Y.b.Small,
						titleColor: i && i.postTitleColor,
						isOverlay: !1
					}), Te(be, he), a.a.createElement(Z.d, {
						className: Ce.a.postTopMeta,
						flairStyleTemplate: i,
						post: be,
						showSub: !!he && !M && !be.isSponsored,
						subredditOrProfile: he
					}), a.a.createElement(G.a, {
						className: Ce.a.postBadges,
						displayText: he ? he.displayText : null,
						inSubredditOrProfile: M,
						post: be
					}), a.a.createElement(j.a, {
						thing: be,
						tooltipType: k ? Z.c.Lightbox : void 0
					})), Ve && !ze && a.a.createElement("div", null, a.a.createElement(w.a, {
						className: Ce.a.liveDiscussionIcon,
						isMod: Le,
						postId: be.postId
					})), a.a.createElement("div", {
						className: Ce.a.flatList
					}, a.a.createElement(I.a, {
						className: Ce.a.commentsLink,
						hasModPostPerms: Le,
						isCommentsPage: E,
						isCommentPermalink: v,
						isOverlay: k,
						postId: be.id,
						modModeEnabled: ne,
						numComments: be.numComments,
						type: m.g.Compact
					}), a.a.createElement(H.a, {
						className: Ce.a.modToolsFlatlist,
						isOverlay: !1,
						layout: X,
						modModeEnabled: ne,
						post: be,
						sendEvent: Ie,
						showIconsOnly: !0
					}), Le && a.a.createElement(L.a, {
						dropdownId: Ue,
						onClick: () => Xe("post_mod_action_menu")
					}, a.a.createElement(P.b, null), a.a.createElement(Q.a, {
						canEditFlair: Fe && Oe,
						hasModPostPerms: Le,
						hasModFullPerms: De,
						isOverlay: !1,
						isPostAuthor: He,
						modModeEnabled: ne,
						post: be,
						tooltipId: Ue
					})), Le && qe && !ne && a.a.createElement(ee.c, {
						text: `${Ke}`,
						onClick: () => {
							this.props.onOpenReportsDropdown(Ge), Xe("post_report_menu")
						},
						id: Ge
					}, a.a.createElement(ae.a, {
						model: be,
						onIgnoreReports: () => {
							de(), Xe(be.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Ge
					}), be.ignoreReports ? a.a.createElement(ge.a, null) : a.a.createElement(fe.a, null)), a.a.createElement(J.a, {
						currentProfileName: n,
						isCommentsPage: E,
						isOverlay: !1,
						isProfilePostListing: y,
						isRecommendationPost: !!be.recommendationContext,
						layout: X,
						permalink: be.permalink,
						sendEvent: Ie,
						showEditPost: Re,
						showEditFlair: Oe,
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
						crosspost: s,
						isCommentsPage: E,
						isCompact: !0,
						isExpanded: _,
						post: be,
						useMediaIcons: !0
					}))), Me && Je && Je.url && a.a.createElement(O.a, {
						className: Ce.a.adLinkWrapper
					}, a.a.createElement(S.a, {
						post: be,
						adLinkContent: Qe,
						isCompact: !0
					})), ne && Le && We && a.a.createElement("div", {
						className: Ce.a.modModeBannerWrapper
					}, a.a.createElement(F.a, {
						thing: be
					})), ne && Le && qe && a.a.createElement("div", {
						className: Ce.a.modModeBannerWrapper
					}, a.a.createElement(U.a, {
						onIgnoreReports: de,
						reportable: be
					})), a.a.createElement(A.d, null))), _ && a.a.createElement(we, {
						post: be,
						scrollerItemRef: _e,
						flairStyleTemplate: i,
						shouldShowGalleryTileOption: Ne,
						isGalleryTileLayoutDefault: C
					}), e === Ae && a.a.createElement(V.a, {
						flairs: be.flair,
						subredditId: be.belongsTo.id,
						modalId: Ae,
						onFlairChanged: oe
					}));
					return a.a.createElement($.b, null, Ye)
				}
			}
			const we = e => a.a.createElement(q.a, {
					className: Object(l.a)(e.className, Ce.a.expandedContentWrapper),
					flairStyleTemplate: e.flairStyleTemplate
				}, e.post.crosspostRootId ? a.a.createElement("div", {
					className: Ce.a.crosspostMediaWrapper
				}, Ie(e.post, e.scrollerItemRef, e.shouldShowGalleryTileOption, e.isGalleryTileLayoutDefault)) : Ie(e.post, e.scrollerItemRef, e.shouldShowGalleryTileOption, e.isGalleryTileLayoutDefault)),
				Ie = (e, t, n, s) => a.a.createElement(X.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: s,
					isListing: !0,
					isNotCardView: !0,
					post: e,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					shouldShowGalleryTileOption: n,
					showCentered: !0,
					showFull: !0,
					showPromotedCTA: !0
				}),
				Ne = e => a.a.createElement(o.a, {
					"data-click-id": "subreddit",
					to: e.url
				}, a.a.createElement(ne.b, {
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
				})], !e.isSponsored && a.a.createElement(de.a, null, " Posted by "), a.a.createElement(Z.b, {
					post: e
				}));
			t.default = Object(oe.b)(a.a.memo((function(e) {
				const t = Object(he.a)(),
					n = Object(s.useMemo)(() => Oe(), []),
					o = Object(r.e)(s => n(s, {
						...e,
						...t
					})),
					i = Object(r.d)(),
					d = Se(i, {
						...e,
						...t
					});
				return a.a.createElement(je, ke({}, e, t, o, d, {
					onFlairChanged: ({
						previewFlair: t,
						selectedTemplateId: n
					}) => d.dispatchFlairChanged({
						post: e.post,
						previewFlair: t,
						selectedTemplateId: n
					}),
					sendEvent: Object(c.b)(),
					isOverlay: Object(pe.a)(),
					theme: Object(be.a)()
				}))
			})))
		},
		"./src/reddit/components/ConfirmModal/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ConfirmModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/higherOrderComponents/asModal/index.tsx"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/components/ConfirmModal/index.m.less"),
				d = n.n(i),
				l = n("./src/reddit/components/ModalStyledComponents/index.tsx");
			t.a = Object(r.a)(e => a.a.createElement("div", {
				className: d.a.container
			}, a.a.createElement("button", {
				onClick: () => e.onClose ? e.onClose() : e.onCancel(),
				className: d.a.close
			}, a.a.createElement(l.b, null)), a.a.createElement(l.i, null, a.a.createElement("h2", {
				className: d.a.headerText
			}, e.headerText)), a.a.createElement(l.l, null, e.message && a.a.createElement("p", {
				className: d.a.text
			}, e.message), e.children && a.a.createElement("div", {
				className: d.a.text
			}, e.children), a.a.createElement("div", {
				className: d.a.buttonWrapper
			}, e.cancelText && a.a.createElement(o.o, {
				className: d.a.secondaryButton,
				onClick: e.onCancel
			}, e.cancelText), a.a.createElement(o.l, {
				className: d.a.primaryButton,
				onClick: e.onAccept
			}, e.acceptText)))))
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, n) {
			e.exports = {
				ButtonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				buttonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				Container: "_32zGs4bO3IunZfS9bSJY0_",
				container: "_32zGs4bO3IunZfS9bSJY0_",
				ContainerExp: "_2l6FU0DxoyHFIOEFPg-vV6",
				containerExp: "_2l6FU0DxoyHFIOEFPg-vV6",
				Description: "_3VTI5BOpJO70xoBKSqz3O9",
				description: "_3VTI5BOpJO70xoBKSqz3O9",
				PrivateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				privateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				PrivateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				privateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				PrivateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				privateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				Link: "o4oSRcSrppMzf__hxJKxn",
				link: "o4oSRcSrppMzf__hxJKxn",
				LinkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				linkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				LinkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				linkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				SecondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				secondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				SecondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				secondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				CreateCommunityButton: "_209KUA_ej4pZVjoQbSOIf9",
				createCommunityButton: "_209KUA_ej4pZVjoQbSOIf9",
				GoHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				goHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				PrivateKey: "kwHMAzQCDA69TaL3eHZLa",
				privateKey: "kwHMAzQCDA69TaL3eHZLa",
				Image: "_1jefpljVGT-eHObg40F8Dm",
				image: "_1jefpljVGT-eHObg40F8Dm",
				ImagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				imagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				LeftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				leftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				LeftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				leftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				SecondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				secondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				SecondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				secondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				Title: "_2XKLlvmuqdor3RvVbYZfgz",
				title: "_2XKLlvmuqdor3RvVbYZfgz",
				PageBody: "bDDEX4BSkswHAG_45VkFB",
				pageBody: "bDDEX4BSkswHAG_45VkFB",
				QuarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				quarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				ContributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz",
				contributorRequestButton: "_3WUsc0xUSWlcvJ0BD4jiUz"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./src/config.ts"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router/esm/react-router.js"),
				d = n("./src/reddit/contexts/NavbarExp.ts"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				m = n("./src/lib/loginHref/index.ts"),
				u = n("./src/reddit/actions/contentGate.ts"),
				p = n("./src/reddit/actions/preferences.ts"),
				b = n("./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx"),
				h = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				g = n("./src/reddit/components/Footer/index.tsx"),
				f = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				x = n("./src/reddit/components/RichTextJson/index.tsx"),
				E = n("./src/reddit/components/SubredditSearchCarousel/async.tsx"),
				v = n("./node_modules/lodash/flatMap.js"),
				_ = n.n(v),
				C = n("./src/lib/linkMatchers/index.ts"),
				k = n("./src/lib/linkMatchers/customLinks.ts"),
				y = n("./src/reddit/controls/OutboundLink/index.tsx");
			const O = /\[(.+?)\]\((.+?)\)/g,
				S = e => {
					const t = e.split(O);
					if (1 === t.length) return [e];
					const n = [];
					for (let s = 0; s < t.length; s += 3) {
						const [e, a, r] = t.slice(s, s + 3);
						n.push(e), n.push([r, a])
					}
					return n
				};
			var j = r.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = _()(t, S)), e.parseRegularLinks && (t = _()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = C.f.add(k.g.subreddit.prefix, k.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let s = null;
						for (const a of t) n.push(e.slice(s ? s.lastIndex : 0, a.index)), s = a, n.push([a.url, a.text]);
						return s && n.push(e.slice(s.lastIndex)), n
					})(e))), r.a.createElement(r.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [s, a] = t;
							return r.a.createElement(y.b, {
								className: e.linkClassName,
								href: s,
								key: n
							}, a)
						}
						return r.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				w = n("./src/reddit/constants/parameters.ts"),
				I = n("./src/reddit/contexts/PageLayer/index.tsx"),
				N = n("./src/reddit/controls/Button/index.tsx"),
				T = n("./src/chat/controls/Svg/index.tsx");

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var P = e => r.a.createElement(T.a, M({}, e, {
					viewBox: "-1 -1 21 21"
				}), r.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				R = n("./src/reddit/models/ContentGate.ts"),
				A = n("./src/lib/constants/index.ts"),
				L = n("./src/reddit/selectors/platform.ts"),
				F = n("./src/reddit/selectors/user.ts");
			var D = n("./src/reddit/selectors/meta.ts"),
				U = n("./src/reddit/components/ContentGate/index.m.less"),
				B = n.n(U);
			const {
				fbt: H
			} = n("./node_modules/fbt/lib/FbtPublic.js"), W = c.a.wrapped(P, "PrivateKey", B.a), q = c.a.div("ButtonsContainer", B.a), G = c.a.div("Container", B.a), K = c.a.div("ContainerExp", B.a), V = c.a.div("Description", B.a), z = c.a.div("PrivateSubredditDetails", B.a), X = c.a.div("PrivateSubredditDescription", B.a), Q = c.a.h3("PrivateSubredditName", B.a), J = c.a.a("Link", B.a), Y = c.a.wrapped(N.n, "LinkRouterButton", B.a), Z = c.a.wrapped(N.m, "LinkButton", B.a), $ = c.a.wrapped(N.q, "SecondaryLinkRouterButton", B.a), ee = c.a.wrapped(N.p, "SecondaryLinkButton", B.a), te = c.a.wrapped(Y, "GoHomeLinkButton", B.a), ne = c.a.wrapped(h.a, "CreateCommunityButton", B.a), se = c.a.img("Image", B.a), ae = c.a.img("ImagePlaceholder", B.a), re = c.a.wrapped(Y, "LeftLinkRouterButton", B.a), oe = c.a.wrapped(Z, "LeftLinkButton", B.a), ie = c.a.wrapped(ee, "SecondaryLeftLinkButton", B.a), de = c.a.wrapped($, "SecondaryLeftLinkRouterButton", B.a), le = c.a.h3("Title", B.a), ce = c.a.div("PageBody", B.a), me = c.a.div("QuarantineMessageWrapper", B.a), ue = Object(l.c)({
				isLoggedIn: F.J,
				origin: D.j,
				user: F.k,
				isPrivateSubredditContributorRequestPending: e => (e => {
					if (!Object(F.K)(e)) return !1;
					const t = Object(L.d)(e);
					if (!t) return !1;
					const n = Object(F.f)(e, t);
					if (!n) return !1;
					if (!n.privateSubreddit) return !1;
					const {
						isContributorRequestTimestamp: s
					} = n;
					if (!s) return !1;
					const a = 30 * A.B;
					return s > Date.now() - a
				})(e),
				isSeo: D.g
			}), pe = Object(I.u)(), be = Object(o.b)(ue, (e, {
				subredditName: t
			}) => ({
				continueToQuarantinedSubreddit: async () => {
					await e(p.C(t)), window.location.reload()
				},
				setNSFWPreference: async () => {
					await e(Object(u.l)())
				}
			})), he = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: a,
					isLoggedIn: o,
					isContributorRequestsDisabled: i,
					isPrivateSubredditContributorRequestPending: d,
					isSeo: l,
					location: c,
					origin: p,
					pageLayer: h,
					quarantineRequiresEmail: g,
					quarantineMessage: v,
					quarantineMessageHtml: _,
					quarantineMessageRTJson: C,
					setNSFWPreference: k,
					subredditDescription: y,
					subredditName: O,
					user: S
				} = e, I = async () => {
					if (o ? await k() : await Object(u.k)(), l) {
						const e = new URL(window.location.href);
						e.searchParams.set(w.h, "1"), window.location.href = e.href
					} else window.location.reload()
				};
				switch (n) {
					case R.a.GoldSubreddit:
						return r.a.createElement("div", null, r.a.createElement(se, {
							src: `${s.a.assetPath}/img/gold/premium-crest.png`
						}), r.a.createElement(le, null, H._("r/{community name} is a Reddit Premium community", [H._param("community name", O)], {
							hk: "2lyDwB"
						})), r.a.createElement(V, null, H._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), r.a.createElement(q, null, S ? r.a.createElement(ie, {
							href: `${s.a.redditUrl}/premium`,
							redditStyle: !0
						}, H._("Get Premium", null, {
							hk: "3ChWi4"
						})) : r.a.createElement(oe, {
							href: Object(m.a)(c, p),
							redditStyle: !0
						}, H._("Sign Up", null, {
							hk: "rvpjy"
						})), S ? r.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, H._("Go Home", null, {
							hk: "49p4or"
						})) : r.a.createElement(ee, {
							href: Object(m.a)(c, p),
							redditStyle: !0
						}, H._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case R.a.Nsfw:
					case R.a.NsfwCustomFeed:
						return r.a.createElement("div", null, r.a.createElement(se, {
							src: `${s.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), r.a.createElement(le, null, n === R.a.Nsfw ? H._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : H._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), r.a.createElement(V, null, H._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), r.a.createElement(q, null, r.a.createElement(re, {
							to: "/",
							redditStyle: !0
						}, H._("No", null, {
							hk: "3fMglW"
						})), r.a.createElement(ee, {
							onClick: I,
							redditStyle: !0
						}, H._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case R.a.PrivateSubreddit:
						return r.a.createElement("div", null, r.a.createElement(W, null), r.a.createElement(le, null, "r/", O, " ", H._("is a private community", null, {
							hk: "7zZmq"
						})), y && y.length && r.a.createElement(z, null, r.a.createElement(Q, null, "r/", O), r.a.createElement(X, null, r.a.createElement("div", null, y))), r.a.createElement(V, null, H._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", O, " ", H._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), r.a.createElement("br", null), H._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), r.a.createElement(q, null, S ? r.a.createElement(r.a.Fragment, null, !i && r.a.createElement(b.a, {
							eventSource: "content_gate",
							smallButton: !0,
							className: B.a.ContributorRequestButton,
							isContributorRequestPending: d
						}), r.a.createElement(ie, {
							href: `${s.a.redditUrl}/message/compose?to=/r/${O}`,
							redditStyle: !0
						}, H._("Message Mods", null, {
							hk: "vVe1i"
						}))) : r.a.createElement(ie, {
							href: Object(m.a)(c, p),
							redditStyle: !0
						}, H._("Sign Up", null, {
							hk: "rvpjy"
						})), r.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, H._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))), O && r.a.createElement(E.a, {
							subredditName: O
						}));
					case R.a.QuarantinedSubreddit:
						return r.a.createElement("div", null, r.a.createElement(se, {
							src: `${s.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), r.a.createElement(le, null, H._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), r.a.createElement(V, null, H._("This community is {=quarantined}", [H._param("=quarantined", r.a.createElement(J, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, H._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), r.a.createElement(me, null, C ? r.a.createElement(x.a, {
							content: C,
							rtJsonElementProps: {
								pageLayer: h
							}
						}) : _ ? r.a.createElement(f.a, {
							html: _
						}) : v || H._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), H._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), r.a.createElement(q, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? r.a.createElement(q, null, r.a.createElement(de, {
								to: "/",
								redditStyle: !0
							}, H._("No Thank You", null, {
								hk: "4B26AR"
							})), r.a.createElement(Z, {
								href: `${s.a.redditUrl}/prefs/update`,
								redditStyle: !0
							}, H._("Verify Email", null, {
								hk: "1893cq"
							}))) : r.a.createElement(q, null, r.a.createElement(re, {
								to: "/",
								redditStyle: !0
							}, H._("No Thank You", null, {
								hk: "4B26AR"
							})), r.a.createElement(ee, {
								onClick: t,
								redditStyle: !0
							}, H._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(S, a, g)));
					case R.a.SubredditBanned:
						return r.a.createElement("div", null, r.a.createElement(se, {
							src: `${s.a.assetPath}/img/content-gate-icons/banned.png`
						}), r.a.createElement(le, null, H._("r/{community name} has been banned from Reddit", [H._param("community name", O)], {
							hk: "2at9Se"
						})), (e => r.a.createElement(V, null, e ? r.a.createElement(j, {
							linkClassName: B.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : H._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), r.a.createElement(q, null, r.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, H._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case R.a.SubredditBlockedForLegalReason:
						return r.a.createElement("div", null, r.a.createElement(se, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), r.a.createElement(le, null, H._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), r.a.createElement(q, null, r.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, H._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case R.a.SubredditDoesNotExist:
						return r.a.createElement("div", null, r.a.createElement(ae, null), r.a.createElement(le, null, H._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), r.a.createElement(V, null, H._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), r.a.createElement(q, null, S && r.a.createElement(ne, {
							eventSource: "content_gate"
						}), r.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, H._("Go Home", null, {
							hk: "49p4or"
						}))));
					case R.a.ProfileDoesNotExist:
					case R.a.ProfileDeleted:
					case R.a.ProfileSuspended:
					case R.a.ProfileBlockedForLegalReason:
						return r.a.createElement("div", null, r.a.createElement(se, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), r.a.createElement(le, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case R.a.ProfileBlockedForLegalReason:
									return H._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case R.a.ProfileDeleted:
									return H._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case R.a.ProfileSuspended:
									return r.a.createElement(r.a.Fragment, null, H._("This account has been {=suspended} .", [H._param("=suspended", r.a.createElement(J, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, H._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case R.a.ProfileDoesNotExist:
									return r.a.createElement(r.a.Fragment, null, r.a.createElement(le, null, H._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), r.a.createElement(V, null, H._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), r.a.createElement(q, null, r.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, H._("Go Home", null, {
							hk: "49p4or"
						}))));
					case R.a.CustomFeedDoesNotExist:
						return r.a.createElement("div", null, r.a.createElement(se, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), r.a.createElement(le, null, H._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), r.a.createElement(q, null, r.a.createElement(te, {
							to: "/",
							redditStyle: !0
						}, H._("Go Home", null, {
							hk: "49p4or"
						}))));
					case R.a.PostBlockedForLegalReason:
						return r.a.createElement("div", null, r.a.createElement(se, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), r.a.createElement(le, null, H._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), r.a.createElement(q, null, r.a.createElement(Y, {
							to: "/",
							redditStyle: !0
						}, H._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = pe(be(Object(i.i)(e => {
				const t = Object(a.useContext)(d.a) ? K : G;
				return r.a.createElement(t, null, r.a.createElement("div", {
					"data-testid": "content-gate"
				}, r.a.createElement(ce, null, he(e))), r.a.createElement(g.a, null))
			})))
		},
		"./src/reddit/components/ContentSurvey/RatingCard.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/components/ContentSurvey/index.m.less"),
				i = n.n(o),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				c = n("./src/reddit/hooks/useTheme.ts"),
				m = n("./src/reddit/icons/svgs/Info/index.tsx"),
				u = n("./src/reddit/models/Theme/index.ts"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = n("./src/reddit/selectors/subreddit.ts");
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function g(e) {
				var t, n;
				const {
					ratingResponse: s,
					subredditId: o,
					children: g
				} = e, f = null !== (t = Object(r.e)(e => Object(b.R)(e, {
					subredditId: o
				}))) && void 0 !== t ? t : {}, x = Object(c.a)();
				return a.a.createElement("div", {
					className: i.a.ratingCard
				}, "PENDING" === (null == s ? void 0 : s.status) && a.a.createElement("div", {
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
					iconUrl: null === (n = f.icon) || void 0 === n ? void 0 : n.url
				})), a.a.createElement("h3", {
					className: i.a.communityName
				}, s ? a.a.createElement("span", null, f.displayText, a.a.createElement("img", {
					className: i.a.ratingImg,
					src: s.rating.icon.png
				})) : f.displayText), g))
			}
		},
		"./src/reddit/components/ContentSurvey/SurveyModal.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/higherOrderComponents/asModal/index.tsx");
			const r = Object(s.a)({
					resolved: {},
					chunkName: () => "",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e(0), n.e(1)]).then(n.bind(null, "./src/reddit/components/ContentSurvey/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ContentSurvey/index.tsx"
					}
				}),
				o = Object(a.a)(r);
			t.a = o
		},
		"./src/reddit/components/ContentSurvey/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(s.a)({
				resolved: {},
				chunkName: () => "ContributorRequestButton",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ContributorRequestButton").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ContributorRequestFlow/ContributorRequestButton/index.tsx"
				}
			});
			t.a = a
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				f = n.n(g),
				x = n("./src/lib/lessComponent.tsx");
			const E = "create-community-button",
				v = x.a.wrapped(c.c, "StyledTooltip", f.a),
				_ = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.ib)(e),
					userIsSuspended: h.R
				});
			t.a = Object(o.b)(_, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: n => {
					n(Object(b.c)(t)), e(Object(d.h)(u.a.SUBREDDIT_CREATION_MODAL_ID))
				},
				onShowTooltip: () => e(Object(l.f)({
					tooltipId: E
				})),
				onHideTooltip: () => e(Object(l.i)())
			}))(Object(m.c)(({
				className: e,
				eventSource: t,
				onShowTooltip: n,
				onHideTooltip: a,
				openCommunityCreation: o,
				sendEvent: i,
				userDoesNotHaveEnoughExpToCreateCommunity: d,
				userIsSuspended: l,
				onClick: c
			}) => {
				return r.a.createElement(p.t, {
					className: e,
					disabled: l || d,
					onClick: e => {
						c && c(e), o(i)
					},
					onMouseEnter: n,
					onMouseLeave: a,
					priority: p.c.Secondary,
					id: E,
					isFullWidth: !0
				}, s.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), d ? r.a.createElement(v, {
					caretOnTop: !0,
					tooltipId: E,
					text: s.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? r.a.createElement(v, {
					caretOnTop: !0,
					tooltipId: E,
					text: s.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/Econ/Audio/MuteIcon.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = ({
				className: e
			}) => a.a.createElement("svg", {
				className: e,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("g", {
				id: "icons_flat",
				"data-name": "icons flat"
			}, a.a.createElement("path", {
				d: "M13.5,9.5v-5A3.493,3.493,0,0,0,6.723,3.3l6.724,6.723A3.524,3.524,0,0,0,13.5,9.5Z"
			}), a.a.createElement("path", {
				d: "M15.5,9.5a5.472,5.472,0,0,1-.436,2.144l1.487,1.486A7.428,7.428,0,0,0,17.5,9.5Z"
			}), a.a.createElement("path", {
				d: "M2.341,4.1,6.5,8.258V9.5A3.5,3.5,0,0,0,10,13a3.441,3.441,0,0,0,1.059-.183l1.529,1.529A5.449,5.449,0,0,1,10,15,5.506,5.506,0,0,1,4.5,9.5h-2A7.5,7.5,0,0,0,9,16.925V18H7.581v2h4.838V18H11V16.925a7.388,7.388,0,0,0,3.026-1.141l1.044,1.044,1.414-1.414L3.755,2.686Z"
			})))
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = ({
				className: e
			}) => a.a.createElement("svg", {
				className: e,
				width: "226",
				height: "226",
				viewBox: "0 0 226 226",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", {
				opacity: "0.8"
			}, a.a.createElement("rect", {
				opacity: "0.8",
				x: "36.7704",
				y: "36.7703",
				width: "152.462",
				height: "152.462",
				rx: "76.2308",
				stroke: "url(#paint0_linear)",
				strokeWidth: "4"
			}), a.a.createElement("rect", {
				opacity: "0.5",
				x: "18.8851",
				y: "18.8822",
				width: "188.231",
				height: "188.231",
				rx: "94.1153",
				stroke: "url(#paint1_linear)",
				strokeWidth: "3"
			}), a.a.createElement("rect", {
				opacity: "0.3",
				x: "1.25",
				y: "1.25",
				width: "223.5",
				height: "223.5",
				rx: "111.75",
				stroke: "url(#paint2_linear)",
				strokeWidth: "2.5"
			})), a.a.createElement("defs", null, a.a.createElement("linearGradient", {
				id: "paint0_linear",
				x1: "17.886",
				y1: "34.7703",
				x2: "213.283",
				y2: "40.3684",
				gradientUnits: "userSpaceOnUse"
			}, a.a.createElement("stop", {
				stopColor: "#FF538C"
			}), a.a.createElement("stop", {
				offset: "0.989583",
				stopColor: "#FFAB39"
			})), a.a.createElement("linearGradient", {
				id: "paint1_linear",
				x1: "-3.25127",
				y1: "17.3822",
				x2: "235.567",
				y2: "24.2243",
				gradientUnits: "userSpaceOnUse"
			}, a.a.createElement("stop", {
				stopColor: "#FF538C"
			}), a.a.createElement("stop", {
				offset: "0.989583",
				stopColor: "#FFAB39"
			})), a.a.createElement("linearGradient", {
				id: "paint2_linear",
				x1: "-24.3885",
				y1: "2.87774e-05",
				x2: "257.851",
				y2: "8.08615",
				gradientUnits: "userSpaceOnUse"
			}, a.a.createElement("stop", {
				stopColor: "#FF538C"
			}), a.a.createElement("stop", {
				offset: "0.989583",
				stopColor: "#FFAB39"
			}))))
		},
		"./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "UserAchievementFlair",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("UserAchievementFlair").then(n.bind(null, "./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx"
				}
			})
		},
		"./src/reddit/components/EditableImage/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_27zThB3Syksyv8gLdDJqep",
				container: "_27zThB3Syksyv8gLdDJqep",
				HitBox: "_1RlGOQJAoxE66cPOVTH0s",
				hitBox: "_1RlGOQJAoxE66cPOVTH0s",
				Image: "_1te2cn6lvn-YtGSv-hrM7g",
				image: "_1te2cn6lvn-YtGSv-hrM7g",
				ImageContainer: "_1z4A5-p2XgzMTJUEq3GaXu",
				imageContainer: "_1z4A5-p2XgzMTJUEq3GaXu",
				ImageUploader: "_3oOZrOdvGjAOYvzKCu-Kjf",
				imageUploader: "_3oOZrOdvGjAOYvzKCu-Kjf",
				LoadingIcon: "_3syvcMeczod-NOIewWIb8n",
				loadingIcon: "_3syvcMeczod-NOIewWIb8n",
				EditButton: "_3A5WTC_rfbijxxWBmIP4Yx",
				editButton: "_3A5WTC_rfbijxxWBmIP4Yx",
				profileCard: "eHsnwmpOgtfnBAgrWXQKq",
				EditIcon: "_3X4DuB4IpAlTY0XMdSI5q6",
				editIcon: "_3X4DuB4IpAlTY0XMdSI5q6"
			}
		},
		"./src/reddit/components/EditableImage/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/ImageInput/index.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/models/ApiRequestState/index.ts"),
				m = n("./src/reddit/selectors/experiments/profileAvatarChangeFix.ts"),
				u = n("./src/reddit/components/EditableImage/index.m.less"),
				p = n.n(u);
			const {
				fbt: b
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = ({
				altText: e,
				children: t,
				className: n,
				isProfileCard: s,
				isLoading: u,
				imageUrl: b,
				onFileSelected: h
			}) => {
				const g = Object(r.e)(m.a);
				return a.a.createElement("div", {
					className: Object(o.a)(p.a.Container, n)
				}, a.a.createElement("label", {
					className: p.a.HitBox
				}, a.a.createElement("span", {
					className: p.a.ImageContainer,
					role: "presentation"
				}, b ? a.a.createElement("img", {
					alt: e,
					className: p.a.Image,
					src: b
				}) : t), a.a.createElement(i.a, {
					className: p.a.ImageUploader,
					multiple: !1,
					onChange: e => {
						const t = Object(c.b)();
						h(e, t)
					},
					isPending: g ? u : void 0
				}), !u && a.a.createElement("div", {
					className: Object(o.a)(p.a.EditButton, {
						[p.a.profileCard]: s
					})
				}, a.a.createElement(l.a, {
					name: "add_media",
					className: p.a.EditIcon
				}))), u && a.a.createElement(d.a, {
					className: p.a.LoadingIcon,
					sizePx: 80
				}))
			}
		},
		"./src/reddit/components/EmailInvitePaintedDoor/loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(s.a)({
				resolved: {},
				chunkName: () => "EmailInvitePaintedDoor",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("EmailInvitePaintedDoor").then(n.bind(null, "./src/reddit/components/EmailInvitePaintedDoor/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/EmailInvitePaintedDoor/index.tsx"
				}
			});
			t.a = a
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/eventTools/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				l = n("./src/reddit/components/PostFollow/index.tsx"),
				c = n("./src/reddit/helpers/postCollection.ts"),
				m = n("./src/reddit/helpers/postEvent.ts"),
				u = n("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = n.n(u);
			const b = i.a.div("EventMetaWrapper", p.a);
			t.a = ({
				className: e,
				isCompactMode: t,
				post: n
			}) => {
				if (!Object(m.a)(n)) return null;
				const s = n && n.eventInfo,
					i = Object(c.a)(n),
					u = s && Object(o.c)(s.eventStart, s.eventEnd);
				return a.a.createElement("div", {
					className: Object(r.a)(p.a.container, e, {
						[p.a.isCompact]: !!t
					})
				}, a.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, a.a.createElement(d.a, {
					post: n
				}), !i && u && a.a.createElement(l.a, {
					className: p.a.eventFollowButton,
					post: n,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/eventTools/index.ts"),
				o = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/icons/fonts/helpers.tsx"),
				l = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(l);
			var m = e => a.a.createElement("i", {
				className: Object(i.a)(Object(d.b)("scheduled", e.isFilled), c.a.calendarIcon, e.className)
			});
			var u = e => a.a.createElement("i", {
					className: Object(i.a)(Object(d.b)("live", e.isFilled), c.a.liveIcon, e.className)
				}),
				p = n("./src/reddit/components/HumanDate/index.tsx"),
				b = n("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				h = n.n(b),
				g = n("./src/lib/lessComponent.tsx");
			const f = g.a.span("PostEventFutureText", h.a),
				x = g.a.span("PostEventPastText", h.a),
				E = g.a.span("PostEventNowText", h.a),
				v = g.a.span("Container", h.a),
				_ = g.a.wrapped(m, "CalendarIcon", h.a),
				C = g.a.wrapped(u, "LiveIcon", h.a),
				k = g.a.div("LoadingState", h.a);
			class y extends s.Component {
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
						eventInfo: n
					} = t;
					if (!n) return null;
					const {
						eventEnd: s,
						eventIsLive: i,
						eventStart: d
					} = n, l = Object(r.e)(d, s);
					let c, m;
					if (this.state.mounted || l === r.a.Live) c = a.a.createElement(p.c, {
						startTime: d,
						endTime: s,
						isLive: i
					});
					else {
						const e = Object(o.a)({
							isLoading: !0
						});
						c = a.a.createElement(k, {
							className: e
						})
					}
					if (i) m = a.a.createElement(E, null, a.a.createElement(C, null), c);
					else if (l === r.a.Future) m = a.a.createElement(f, null, a.a.createElement(_, null), c);
					else {
						if (l !== r.a.Past) return null;
						m = a.a.createElement(x, null, a.a.createElement(_, null), c)
					}
					return a.a.createElement(v, {
						className: e
					}, m)
				}
			}
			t.a = y
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, n) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				c = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/controls/OutboundLink/index.tsx"),
				u = n("./src/reddit/helpers/path/index.ts"),
				p = n("./src/reddit/helpers/postHasSelfText/index.ts"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				h = n("./src/reddit/models/Media/index.ts"),
				g = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				f = n("./src/telemetry/models/Outbound.ts"),
				x = n("./src/reddit/components/ExpandoButton/index.m.less"),
				E = n.n(x);
			const v = Object(o.b)(null, (e, t) => ({
					toggle: () => e(Object(c.x)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(c.ab)(Object(u.b)(t.permalink), t.id))
				})),
				_ = (e, t = !1, n) => {
					const s = Object(d.a)(E.a.icon, E.a.hideOnHover);
					if (t) return r.a.createElement(b.a, {
						name: "crosspost",
						className: s
					});
					if (n.pollData) return r.a.createElement(b.a, {
						name: "poll_post",
						className: s
					});
					if (n.audioRoom) return r.a.createElement(b.a, {
						name: "audio",
						className: s
					});
					switch (e) {
						case h.o.GIFVIDEO:
							return r.a.createElement(b.a, {
								name: "gif_post",
								className: s
							});
						case h.o.IMAGE:
							return r.a.createElement(b.a, {
								name: "image_post",
								className: s
							});
						case h.o.TEXT:
						case h.o.RTJSON:
							return r.a.createElement(b.a, {
								name: "text_post",
								className: s
							});
						case h.o.VIDEO:
							return r.a.createElement(b.a, {
								name: "video_post",
								className: s
							});
						case h.o.GALLERY:
							return r.a.createElement(b.a, {
								name: "media_gallery",
								className: s
							});
						case h.o.EMBED:
						default:
							return r.a.createElement(b.a, {
								name: "embed",
								className: s
							})
					}
				};
			t.a = v(e => {
				const {
					className: t,
					crosspost: n,
					enableCrosspostIcon: a,
					isCommentsPage: c,
					isExpanded: u,
					post: h,
					toggle: x,
					useMediaIcons: v
				} = e, C = n || h, k = Object(o.e)(g.b), y = t => {
					k && (t.preventDefault(), e.showModalOnPostLinkClick(C))
				}, O = a && !!n;
				return C.media && !(("rtjson" === C.media.type || "text" === C.media.type || "liveaudio" === C.media.type) && !Object(p.a)(C)) || !!h.pollData ? r.a.createElement("button", {
					"aria-expanded": !!u,
					"aria-haspopup": !0,
					"aria-label": s.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(d.a)(t, E.a.outer),
					"data-click-id": u ? "expando_close" : "expando_open",
					onClick: x
				}, u ? r.a.createElement(b.a, {
					name: "collapse",
					className: E.a.icon
				}) : v ? r.a.createElement(r.a.Fragment, null, _(C.media && C.media.type, O, h), r.a.createElement(b.a, {
					name: "expand",
					className: Object(d.a)(E.a.icon, E.a.showOnHover)
				})) : r.a.createElement(b.a, {
					name: "expand",
					className: E.a.icon
				})) : C.source && C.source.url ? r.a.createElement(m.b, {
					"aria-label": s.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(d.a)(t, E.a.outer),
					"data-click-id": "expando_open",
					href: C.source.url,
					isSponsored: h.isSponsored,
					postId: h.id,
					source: h.source,
					sourceElement: c ? f.SourceElement.PostImage : f.SourceElement.ListingPostImage,
					target: "_blank"
				}, r.a.createElement(b.a, {
					name: "external_link",
					className: Object(d.a)(E.a.icon, E.a.outboundLinkIcon)
				})) : r.a.createElement(i.a, {
					"aria-label": s.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(d.a)(t, E.a.outer),
					"data-click-id": "expando_open",
					to: Object(l.a)(C.permalink),
					rel: "nofollow",
					onClick: y
				}, r.a.createElement(b.a, {
					name: "text_post",
					className: E.a.icon
				}))
			})
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, n) {
			e.exports = {
				FooterContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				footerContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh"
			}
		},
		"./src/reddit/components/Footer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/config.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Footer/index.m.less"),
				d = n.n(i);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js"), c = o.a.div("FooterContainer", d.a), m = o.a.div("UserAgreement", d.a), u = o.a.a("UserAgreementLink", d.a), p = o.a.a("PrivacyLink", d.a);
			t.a = () => a.a.createElement(c, null, a.a.createElement(m, null, l._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [l._param("=User Agreement", a.a.createElement(u, {
				href: `${r.a.redditUrl}/help/useragreement`
			}, l._("User Agreement", null, {
				hk: "2srkM2"
			}))), l._param("=Privacy Policy", a.a.createElement(p, {
				href: `${r.a.redditUrl}/help/privacypolicy`
			}, l._("Privacy Policy", null, {
				hk: "2nBcYA"
			}))), l._param("year", (new Date).getFullYear())], {
				hk: "335pdO"
			})))
		},
		"./src/reddit/components/GeoForm/GeoForm.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/uuid/v4.js"),
				i = n.n(o),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/controls/Button/index.tsx");
			var c, m = n("./node_modules/p-debounce/index.js"),
				u = n.n(m),
				p = n("./src/lib/hooks/useOnClickOutside.ts"),
				b = n("./src/reddit/constants/keycodes.ts"),
				h = n("./src/lib/makeGqlRequest/index.ts"),
				g = n("./src/lib/sentry/index.ts"),
				f = n("./src/redditGQL/operations/GeoPlaceAutocomplete.json");
			! function(e) {
				e.GoogleMaps = "GOOGLE_MAPS", e.Geonames = "GEONAMES"
			}(c || (c = {}));
			const x = (e, t) => async n => {
				let s;
				try {
					s = await async function(e, t) {
						return Object(h.a)(e, {
							...f,
							variables: t
						})
					}(e(), {
						query: n,
						sessionId: t
					})
				} catch (a) {
					return g.c.captureException(a), []
				}
				return s.body.data.geoPlaceAutocomplete || []
			};
			var E = n("./src/reddit/hooks/useGqlContext.ts"),
				v = n("./src/reddit/icons/svgs/Location/index.tsx"),
				_ = n("./src/reddit/components/GeoForm/index.m.less"),
				C = n.n(_);

			function k(e) {
				const {
					value: t,
					setValue: n,
					setPlace: o,
					disabled: i,
					onFocus: l,
					sessionId: c,
					className: m
				} = e, p = Object(E.a)(), [h, g] = Object(a.useState)(!1), f = function(e, t, n) {
					const [s, r] = Object(a.useState)([]), o = Object(a.useMemo)(() => u()(n, 300), [n]);
					return Object(a.useEffect)(() => {
						e && t && o(e).then(e => {
							r(e)
						}).catch(() => r([]))
					}, [e]), s
				}(t, h, x(p, c)), {
					highlightValue: _,
					selectedIndex: k,
					onKeyDown: O,
					isClosed: S,
					setClosed: j
				} = function(e, t, n) {
					const [s, r] = Object(a.useState)(-1), [o, i] = Object(a.useState)(!!e.length), [d, l] = Object(a.useState)(void 0);
					return {
						highlightValue: d,
						selectedIndex: s,
						onKeyDown: a => {
							if (a.key === b.b.ArrowDown) {
								const t = Math.min(s + 1, e.length - 1);
								r(t), l(e[t])
							} else if (a.key === b.b.ArrowUp) {
								const t = Math.max(s - 1, -1);
								r(t), l(e[t])
							} else a.key === b.b.Enter && s > -1 ? (r(-1), t(e[s].name), n(e[s]), i(!0), a.preventDefault()) : a.key === b.b.Escape ? (r(-1), i(!0)) : l(void 0)
						},
						isClosed: o,
						setClosed: i
					}
				}(f, n, o), w = `location-input-${c}`;
				return r.a.createElement("div", {
					className: C.a.autocompleteInput
				}, r.a.createElement("label", {
					className: C.a.geoLabel,
					htmlFor: w
				}, r.a.createElement(v.a, {
					className: C.a.locationIcon
				})), r.a.createElement("input", {
					className: Object(d.a)(C.a.geoInput, m),
					name: w,
					disabled: i,
					onKeyDown: O,
					value: _ && _.name || t,
					placeholder: s.fbt._("Add location", null, {
						hk: "1BaqFd"
					}),
					onChange: e => {
						n(e.currentTarget.value), o(void 0), j(!1)
					},
					onFocus: () => {
						g(!0), l()
					},
					onBlur: () => g(!1)
				}), f.length && !S ? r.a.createElement(y, {
					id: c,
					items: f.map(e => e.name),
					selectedIndex: k,
					selectValue: e => {
						n(f[e].name), o(f[e]), j(!0)
					},
					onClickOutside: () => j(!0)
				}) : null)
			}

			function y(e) {
				const {
					id: t,
					items: n,
					selectedIndex: s,
					selectValue: a,
					onClickOutside: o
				} = e;
				return Object(p.a)(`autocomplete-dropdown-${t}`, o), r.a.createElement("ul", {
					className: C.a.autocompleteDropdown,
					id: `autocomplete-dropdown-${t}`
				}, n.map((e, t) => r.a.createElement("li", {
					key: `${e}${t}`,
					onClick: () => a(t),
					className: Object(d.a)({
						[C.a.highlight]: t === s
					})
				}, e)))
			}
			const O = () => {};

			function S(e) {
				const {
					className: t,
					initialValue: n,
					initialPlace: o,
					disabled: c = !1,
					onFocus: m = O,
					onPlace: u = O,
					onValue: p = O,
					inputClassName: b
				} = e, h = function() {
					const [e, t] = Object(a.useState)(!1);
					return Object(a.useEffect)(() => t(!0), []), e
				}(), [g] = Object(a.useState)(() => i()()), [f, x] = Object(a.useState)(n || ""), [E, v] = Object(a.useState)(o);
				return h ? r.a.createElement("form", {
					className: Object(d.a)(C.a.geoForm, t),
					onSubmit: t => {
						t.preventDefault(), (null == o ? void 0 : o.id) !== (null == E ? void 0 : E.id) && e.onSubmit({
							name: f,
							place: E,
							sessionId: g
						})
					}
				}, r.a.createElement(k, {
					className: b,
					value: f,
					sessionId: g,
					setValue: e => {
						x(e), p(e)
					},
					setPlace: e => {
						v(e), u(e)
					},
					disabled: c,
					onFocus: m
				}), E && E.id !== (null == o ? void 0 : o.id) && r.a.createElement(l.o, {
					className: C.a.submitButton,
					type: "submit",
					disabled: c
				}, s.fbt._("Submit", null, {
					hk: "4aU3dh"
				}))) : null
			}
		},
		"./src/reddit/components/GeoForm/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/GrantUserFlair/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/GrantUserFlair/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/config.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/find.js"),
				o = n.n(r),
				i = n("./node_modules/react/index.js"),
				d = n.n(i),
				l = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				m = n("./src/lib/addQueryParams/index.ts"),
				u = n("./src/lib/omitKey/index.ts"),
				p = n("./src/lib/stripQueryParams/index.ts"),
				b = n("./src/reddit/actions/grantUserFlair/index.ts"),
				h = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				g = n("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				f = n("./src/reddit/components/ModHub/InfoTooltip/index.tsx"),
				x = n("./src/reddit/components/ModHub/PaginationButtons/index.tsx"),
				E = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				v = n("./src/lib/classNames/index.ts"),
				_ = n("./src/reddit/components/SaveIndicator/index.m.less"),
				C = n.n(_),
				k = n("./src/reddit/icons/svgs/CheckmarkFitted/index.tsx"),
				y = n("./src/reddit/icons/svgs/Clear/index.tsx"),
				O = n("./src/reddit/icons/svgs/Replay/index.tsx"),
				S = n("./src/reddit/models/ApiRequestState/index.ts");
			const j = {
				[S.a.Pending]: () => a.fbt._("Saving", null, {
					hk: "3r9uZO"
				}),
				[S.a.Complete]: () => a.fbt._("Saved", null, {
					hk: "e9tAk"
				}),
				[S.a.Failed]: () => a.fbt._("Save error", null, {
					hk: "3NFi3S"
				})
			};
			var w = e => d.a.createElement(d.a.Fragment, null, e.status === S.a.Pending && d.a.createElement(O.a, {
					className: Object(v.a)(C.a.icon, C.a.pendingIcon)
				}), e.status === S.a.Complete && d.a.createElement(k.a, {
					className: Object(v.a)(C.a.icon, C.a.savedIcon)
				}), e.status === S.a.Failed && d.a.createElement(y.a, {
					className: Object(v.a)(C.a.icon, C.a.saveErrorIcon)
				}), d.a.createElement("span", {
					className: C.a.caption
				}, j[e.status]())),
				I = n("./src/reddit/components/SubredditModerationSearch/index.tsx"),
				N = n("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				T = n("./src/reddit/components/SubredditModerationUserItem/index.tsx"),
				M = n("./src/reddit/components/TrackingHelper/index.tsx"),
				P = n("./src/reddit/constants/colors.ts"),
				R = n("./src/reddit/contexts/PageLayer/index.tsx"),
				A = n("./src/reddit/helpers/flair.ts"),
				L = n("./src/reddit/selectors/telemetry.ts");
			const F = e => ({
					subreddit: L.ib(e),
					profile: L.R(e),
					userSubreddit: L.rb(e)
				}),
				D = e => t => ({
					source: "grant_user_flair",
					action: "click",
					noun: e,
					...F(t)
				}),
				U = () => D("search_username"),
				B = () => D("page_forward"),
				H = () => D("page_back"),
				W = () => D("remove_granted_user_flair"),
				q = (e, t) => n => ({
					source: "grant_user_flair",
					action: "autosave",
					noun: e,
					actionInfo: {
						...L.d(n),
						settingValue: t
					},
					...F(n)
				}),
				G = () => q("flair_text"),
				K = e => q("flair_template", e || "none"),
				V = e => q("css_class", e);
			var z = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				X = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				Q = n("./src/reddit/icons/svgs/User/index.tsx"),
				J = n("./src/reddit/models/SubredditModeration/index.ts");
			const Y = [];
			var Z = n("./src/reddit/selectors/meta.ts"),
				$ = n("./src/reddit/selectors/userFlair.ts"),
				ee = n("./src/reddit/icons/fonts/Tag/index.tsx"),
				te = n("./src/reddit/components/GrantUserFlair/index.m.less"),
				ne = n.n(te);
			var se = () => d.a.createElement("div", {
					className: ne.a.emptyList
				}, d.a.createElement(ee.a, {
					className: ne.a.flairIcon
				}), d.a.createElement("div", {
					className: ne.a.mainText
				}, a.fbt._("You do not have any users with user flair", null, {
					hk: "4D1S5Z"
				})), d.a.createElement("div", null, a.fbt._("Search for a user to assign a user flair", null, {
					hk: "2YaDOy"
				}))),
				ae = n("./node_modules/lodash/filter.js"),
				re = n.n(ae),
				oe = n("./node_modules/lodash/isEqual.js"),
				ie = n.n(oe),
				de = n("./node_modules/lodash/omit.js"),
				le = n.n(de),
				ce = n("./src/reddit/constants/flair.ts"),
				me = n("./src/reddit/helpers/validateFlairCssClass.ts");
			const ue = 200;
			var pe;
			! function(e) {
				e[e.Save = 0] = "Save", e[e.Delete = 1] = "Delete"
			}(pe || (pe = {}));
			const be = e => null === e.flair,
				he = e => !(!e.apiError && !e.clientValidationError),
				ge = (e, t = !1) => {
					const n = Date.now();
					return re()(e, e => {
						if (!e || e.clientValidationError) return !1;
						if (e.apiError && !t) return !1;
						if (be(e)) return !0;
						return n - e.changedAt > 2e3 || t
					})
				},
				fe = (e, t, n) => {
					const s = Object.keys(e).filter(s => {
						const a = e[s],
							r = t[s] || null;
						return !(!!r || s === n || !he(a)) || !!ie()(r, a.flair)
					});
					return s.length ? le()(e, s) : e
				},
				xe = (e, t) => {
					const n = t || ce.a;
					return (e ? Object(A.m)(e, n) || Object(me.a)(e.cssClass || "") : "") || void 0
				};
			var Ee = n("./node_modules/lodash/noop.js"),
				ve = n.n(Ee),
				_e = n("./src/reddit/components/Flair/index.tsx"),
				Ce = n("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				ke = n("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				ye = n("./src/reddit/controls/InternalLink/index.tsx"),
				Oe = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				Se = n("./src/reddit/models/Flair/index.ts"),
				je = n("./src/higherOrderComponents/asTooltip.tsx"),
				we = n("./src/reddit/actions/tooltip.ts"),
				Ie = n("./src/reddit/constants/keycodes.ts"),
				Ne = n("./src/reddit/controls/Dropdown/index.tsx"),
				Te = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				Me = n("./src/reddit/selectors/tooltip.ts");
			const Pe = e => `UserFlairPicker--${e}`,
				Re = Object(je.a)(Ne.a),
				Ae = ({
					flair: e
				}) => d.a.createElement(d.a.Fragment, null, d.a.createElement(_e.b, {
					flair: Object(A.c)(e),
					forceSmallEmojis: !0
				}), e.textEditable && d.a.createElement(Q.a, {
					className: ne.a.userIcon
				}), e.modOnly && d.a.createElement(z.a, {
					className: ne.a.modIcon
				})),
				Le = Object(c.c)({
					isDropdownOpen: (e, t) => Object(Me.b)(Pe(t.userName))(e)
				});
			class Fe extends d.a.Component {
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
						className: ne.a.dropdownTarget,
						id: Pe(e.userName),
						onClick: e.onToggleDropdown,
						onKeyDown: this.onKeyDown
					}, e.selectedTemplateId && e.userFlairTemplates[e.selectedTemplateId] ? d.a.createElement(Ae, {
						flair: e.userFlairTemplates[e.selectedTemplateId]
					}) : a.fbt._("none", null, {
						hk: "ng6B"
					}), d.a.createElement(Te.a, {
						className: ne.a.dropdownTriangle
					}), d.a.createElement(Re, {
						className: ne.a.dropdownContainer,
						isOpen: e.isDropdownOpen,
						tooltipId: Pe(e.userName)
					}, d.a.createElement("button", {
						className: ne.a.dropdownRow,
						id: "focus--1",
						onClick: () => e.onSelectFlairTemplate(void 0),
						onMouseEnter: () => this.onMouseEnter(-1),
						tabIndex: -1
					}, a.fbt._("none", null, {
						hk: "ng6B"
					})), e.templateIds.map((t, n) => {
						const s = e.userFlairTemplates[t];
						return d.a.createElement("button", {
							className: ne.a.dropdownRow,
							id: `focus-${n}`,
							key: t,
							onClick: () => e.onSelectFlairTemplate(t),
							onMouseEnter: () => this.onMouseEnter(n),
							tabIndex: -1
						}, d.a.createElement(Ae, {
							flair: s
						}))
					})))
				}
			}
			var De = Object(l.b)(Le, (e, t) => ({
				onToggleDropdown: () => e(Object(we.h)({
					tooltipId: Pe(t.userName)
				}))
			}))(Fe);
			const Ue = e => `emoji-picker-${e}`,
				Be = Object(A.b)();
			class He extends d.a.PureComponent {
				constructor() {
					super(...arguments), this.onSelectFlairTemplate = e => {
						const t = e && this.props.userFlairTemplates[e],
							n = t ? Object(A.c)(t) : Be;
						this.props.onChange(this.props.username, n)
					}, this.onFlairContentChanged = e => {
						this.props.onChange(this.props.username, e)
					}, this.onChangeCssClass = e => {
						const t = e.target.value,
							n = this.props.flair || Be;
						this.props.onChange(this.props.username, {
							...n,
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
					} = e, n = e.flair || Be, s = Object(Ce.a)(), a = n.templateId, r = a && e.userFlairTemplates[a] || ce.a, o = !!r && r.modOnly, i = !Object(me.a)(n.cssClass || "");
					return d.a.createElement("div", {
						className: Object(v.a)(ne.a.row, t ? ne.a.hasError : null)
					}, d.a.createElement("div", {
						className: ne.a.errorIndicator
					}, d.a.createElement(y.a, null)), d.a.createElement(ye.a, {
						className: ne.a.userLink,
						to: `/user/${e.username}`
					}, d.a.createElement(ke.a, {
						user: e.username,
						tooltipId: `grantuserflair--userhovercard--${e.username}`,
						subredditId: e.subredditId,
						sendHoverCardEvent: ve.a
					}, e.username, d.a.createElement("div", {
						className: ne.a.flairContainer
					}, d.a.createElement(_e.b, {
						flair: n
					})))), d.a.createElement("div", {
						className: ne.a.flairDetails
					}, d.a.createElement("div", {
						className: ne.a.column
					}, d.a.createElement(De, {
						onSelectFlairTemplate: this.onSelectFlairTemplate,
						selectedTemplateId: a,
						templateIds: e.templateIds,
						userFlairTemplates: e.userFlairTemplates,
						userName: this.props.username
					})), d.a.createElement("div", {
						className: ne.a.flairEditColumn
					}, d.a.createElement(s, {
						allowBlank: !e.isChanged,
						emojiPickerId: Ue(e.username),
						flair: n,
						flairTemplateType: Se.d.UserFlair,
						flairTemplate: r,
						helperTextClass: ne.a.flairEditHelperText,
						isCompact: !0,
						isFlairModOnly: o,
						onChange: this.onFlairContentChanged,
						subredditId: e.subredditId
					})), d.a.createElement("div", {
						className: ne.a.column
					}, d.a.createElement("input", {
						className: Object(v.a)(ne.a.textInput, {
							[ne.a.cssInputError]: !i
						}),
						value: n.cssClass || "",
						onChange: this.onChangeCssClass,
						disabled: !!r.id
					})), d.a.createElement("button", {
						className: ne.a.removeButton,
						onClick: this.removeFlair
					}, d.a.createElement(Oe.a, {
						className: ne.a.removeIcon
					}))))
				}
			}
			var We = He;
			const qe = {},
				Ge = Object(R.u)({
					currentPageUrl: R.f
				}),
				Ke = Object(c.c)({
					flairedUserOrder: (e, t) => {
						const n = Object(J.d)(t.subredditId, t.after, t.before);
						return e.pages.modHub.flairedUsers.userOrder[n] || Y
					},
					flairedUsers: (e, t) => e.pages.modHub.flairedUsers.models[t.subredditId],
					isFlairedUsersListPending: e => e.pages.modHub.flairedUsers.api.pending,
					isSearchPending: e => e.pages.modHub.flairedUsers.search.api.pending,
					isUserFlairEnabled: $.a,
					origin: Z.j,
					pageInfo: (e, t) => {
						const n = Object(J.d)(t.subredditId, t.after, t.before);
						return e.pages.modHub.flairedUsers.pageInfo[n]
					},
					searchResult: (e, t) => e.pages.modHub.flairedUsers.search.result,
					userFlairData: $.d
				}),
				Ve = Object(l.b)(Ke, (e, {
					subredditId: t
				}) => ({
					deleteUserFlair: (t, n) => e(Object(b.a)(t, n)),
					saveFlairedUser: (n, s) => e(Object(b.d)(n, t, s)),
					searchFlairedUser: n => e(Object(b.e)(t, n))
				}));
			class ze extends d.a.Component {
				constructor(e) {
					super(e), this.isUnmounted = !1, this.pendingRequestsMap = new Map, this.autoSaveIntervalId = 0, this.processChanges = (e = !1) => {
						this.autoSaveIntervalId || (this.autoSaveIntervalId = window.setInterval(this.processChanges, ue));
						const {
							flairedUsers: t
						} = this.props, {
							unsavedChanges: n,
							searchTerm: s
						} = this.state, a = fe(n, t, s);
						ge(a, e).forEach(this.sendChangeToServer), a !== n && this.setState({
							unsavedChanges: a
						})
					}, this.sendChangeToServer = async e => {
						const t = e.username;
						if (this.pendingRequestsMap.get(t)) return;
						const n = this.props.flairedUsers[t] || null;
						this.sendTelemetryEvents(n, e.flair);
						const s = e.flair ? {
							type: pe.Save,
							promise: this.props.saveFlairedUser(t, e.flair)
						} : {
							type: pe.Delete,
							promise: this.props.deleteUserFlair(t, this.props.subredditId)
						};
						this.pendingRequestsMap.set(t, s);
						const a = await s.promise;
						this.pendingRequestsMap.delete(t), this.isUnmounted || this.setState(n => {
							const s = n.unsavedChanges[t];
							return e !== s ? null : {
								unsavedChanges: !0 === a ? Object(u.a)(n.unsavedChanges, t) : {
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
							templates: n
						} = this.props.userFlairData, s = t && t.templateId ? n[t.templateId] : void 0;
						this.setState(n => {
							return {
								unsavedChanges: {
									...n.unsavedChanges,
									[e]: {
										flair: t,
										username: e,
										changedAt: Date.now(),
										clientValidationError: xe(t, s)
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
							props: n
						} = this, s = n.flairedUsers[e] || null, a = t.unsavedChanges[e], r = a && !be(a) ? a.flair : s;
						return d.a.createElement(We, {
							flair: r,
							hasError: !!a && he(a),
							isChanged: !!a,
							key: e,
							onChange: this.onFlairChanged,
							subredditId: n.subredditId,
							templateIds: n.userFlairData.templateIds,
							userFlairTemplates: n.userFlairData.templates,
							username: e
						})
					}, this.state = {
						searchTerm: null,
						unsavedChanges: qe
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
					let n = e || Object(A.b)();
					const s = n.templateId || void 0,
						a = t.templateId || void 0;
					if (a !== s) {
						this.props.sendEvent(K(a));
						const e = t.templateId && this.props.userFlairData.templates[t.templateId];
						n = e ? Object(A.c)(e) : n
					}
					Object(A.p)(t, n) || this.props.sendEvent(G()), t.cssClass !== n.cssClass && this.props.sendEvent(V(t.cssClass || ""))
				}
				getIndicatorStatus() {
					const {
						unsavedChanges: e
					} = this.state;
					if (e === qe) return null;
					const t = !!o()(e, e => he(e));
					return !!o()(e, e => !he(e)) ? S.a.Pending : t ? S.a.Failed : S.a.Complete
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = this.getIndicatorStatus(), r = e.pageInfo && (e.pageInfo.hasNextPage || e.pageInfo.hasPreviousPage), o = !e.flairedUserOrder.length && !r;
					return d.a.createElement(d.a.Fragment, null, d.a.createElement(E.c, {
						className: ne.a.topBar
					}, null !== n && d.a.createElement(w, {
						status: n
					})), d.a.createElement(E.a, null, d.a.createElement(E.b, null, a.fbt._("Grant user flair", null, {
						hk: "N1r42"
					}), d.a.createElement(g.a, {
						linkUrl: `${s.a.redditModHelpUrl}/hc/en-us/articles/360028091332`
					})), !e.isUserFlairEnabled && d.a.createElement(h.a, {
						className: ne.a.disabledBanner,
						color: P.a.quarantine,
						icon: d.a.createElement(X.a, {
							className: ne.a.warningIcon
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
						className: ne.a.titleRow
					}, a.fbt._("Username with preview", null, {
						hk: "1RFjbI"
					}), d.a.createElement("div", {
						className: ne.a.flairDetails
					}, d.a.createElement("div", {
						className: ne.a.column
					}, a.fbt._("Flair template", null, {
						hk: "18cQfH"
					}), d.a.createElement(f.a, {
						className: ne.a.infoTooltip
					}, d.a.createElement("div", {
						className: ne.a.tooltipText
					}, a.fbt._("Flair templates determine the flair's background colors, text colors, and permissions", null, {
						hk: "4y58Eg"
					})), d.a.createElement("div", {
						className: ne.a.tooltipIconContainer
					}, d.a.createElement("div", {
						className: ne.a.tooltipIconRow
					}, d.a.createElement(z.a, {
						className: ne.a.modIcon
					}), d.a.createElement("span", {
						className: ne.a.tooltipIconText
					}, a.fbt._("Available only to mods", null, {
						hk: "2s7Gci"
					}))), d.a.createElement("div", {
						className: ne.a.tooltipIconRow
					}, d.a.createElement(Q.a, {
						className: ne.a.userIcon
					}), d.a.createElement("span", {
						className: ne.a.tooltipIconText
					}, a.fbt._("User editable", null, {
						hk: "3tIGRy"
					})))))), d.a.createElement("div", {
						className: ne.a.flairEditColumn
					}, a.fbt._("Flair text", null, {
						hk: "2ab8Up"
					}), d.a.createElement(f.a, {
						text: a.fbt._("Changes the text and emojis within the user flair", null, {
							hk: "4dBW4C"
						})
					})), d.a.createElement("div", {
						className: ne.a.column
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
					}, e.searchResult && this.renderUserRow(e.searchResult)) : e.isFlairedUsersListPending ? d.a.createElement(T.a, null) : o ? d.a.createElement(se, null) : e.flairedUserOrder.map(this.renderUserRow), e.pageInfo && !t.searchTerm && d.a.createElement("div", {
						className: ne.a.bottomBarRow
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
			t.a = Ge(Ve(Object(M.c)(ze)))
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/snoovatarModal.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/selectors/gold/awardIcon.ts"),
				c = n("./src/reddit/selectors/meta.ts"),
				m = n("./src/reddit/selectors/moderatorPermissions.ts"),
				u = n("./src/reddit/selectors/profile.ts"),
				p = n("./src/reddit/selectors/structuredStyles.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/selectors/tooltip.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/selectors/userFlair.ts"),
				x = n("./src/reddit/selectors/userPrefs.ts"),
				E = n("./node_modules/fbt/lib/FbtPublic.js"),
				v = n("./src/config.ts"),
				_ = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				C = n("./src/lib/lessComponent.tsx"),
				k = n("./src/lib/prettyPrintNumber/index.ts"),
				y = n("./src/reddit/components/ChatButton/index.tsx"),
				O = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				S = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				j = n("./src/reddit/components/SubscribeButton/index.tsx"),
				w = n("./src/reddit/components/UserIcon/index.tsx"),
				I = n("./src/reddit/endpoints/profile/info.ts"),
				N = n("./src/reddit/helpers/trackers/authorHovercard.ts"),
				T = n("./src/reddit/icons/fonts/Info/index.tsx"),
				M = n("./src/reddit/icons/svgs/Admin/index.tsx");
			var P = e => a.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", null, a.a.createElement("path", {
					d: "M6.42528593,9.54562407 C4.41043013,8.02026355 3.10790651,5.60355545 3.10790651,2.88165092 L3.10790651,2.79711586 L3.19244157,2.79711586 C5.9143461,2.79711586 8.33136499,4.09963948 9.85641472,6.11449528 C8.02399304,6.25279712 6.56358777,7.7128916 6.42528593,9.54562407 Z M6.42528593,10.2560915 C6.56358777,12.088824 8.02399304,13.5489184 9.85641472,13.6872203 C8.33136499,15.7020761 5.9143461,17.0045997 3.19244157,17.0045997 L3.10790651,17.0045997 L3.10790651,16.9200646 C3.10790651,14.1981601 4.41043013,11.781452 6.42528593,10.2560915 Z M13.6872203,10.2560915 C15.7020761,11.781452 17.0045997,14.1981601 17.0045997,16.9200646 L17.0045997,17.0045997 L16.9200646,17.0045997 C14.1981601,17.0045997 11.7811412,15.7020761 10.2560915,13.6872203 C12.0885132,13.5489184 13.5486077,12.088824 13.6872203,10.2560915 Z M16.9200646,2.79711586 L17.0045997,2.79711586 L17.0045997,2.88165092 C17.0045997,5.60324465 15.7020761,8.02026355 13.6872203,9.54562407 C13.5489184,7.7128916 12.0885132,6.25279712 10.2560915,6.11449528 C11.7811412,4.09963948 14.1981601,2.79711586 16.9200646,2.79711586 Z M19.9403282,9.84895574 L20,9.90862755 L19.9403282,9.96829935 C18.9346096,10.9740179 17.7346469,11.6624192 16.46227,12.0474888 C15.9659373,11.2534187 15.3446668,10.5308304 14.6071606,9.90862755 C15.3446668,9.28642466 15.9659373,8.5638364 16.46227,7.76976629 C17.7346469,8.1548359 18.9346096,8.8432372 19.9403282,9.84895574 Z M9.90862755,5.39283938 C9.28642466,4.65533317 8.5638364,4.03406266 7.76976629,3.53772999 C8.1548359,2.26535306 8.8432372,1.06539035 9.84895574,0.0596718051 L9.90862755,0 L9.96829935,0.0596718051 C10.9740179,1.06539035 11.6624192,2.26535306 12.0474888,3.53772999 C11.2534187,4.03406266 10.5308304,4.65533317 9.90862755,5.39283938 Z M5.39283938,9.90862755 C4.65533317,10.5308304 4.03406266,11.2534187 3.53772999,12.0474888 C2.26535306,11.6624192 1.06539035,10.9740179 0.0596718051,9.96829935 L0,9.90862755 L0.0596718051,9.84895574 C1.06539035,8.8432372 2.26535306,8.1548359 3.53772999,7.76976629 C4.03406266,8.5638364 4.65533317,9.28642466 5.39283938,9.90862755 Z M9.90862755,14.6071606 C10.5308304,15.3446668 11.2534187,15.9659373 12.0474888,16.46227 C11.6624192,17.7346469 10.9740179,18.9346096 9.96829935,19.9403282 L9.90862755,20 L9.84895574,19.9403282 C8.8432372,18.9346096 8.1548359,17.7346469 7.76976629,16.46227 C8.5638364,15.9659373 9.28642466,15.3446668 9.90862755,14.6071606 Z"
				}))),
				R = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				A = n("./src/reddit/models/Gold/Award.ts"),
				L = n("./src/reddit/models/User/index.ts"),
				F = n("./src/reddit/components/HumanDate/index.tsx"),
				D = n("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				U = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				B = n("./src/reddit/actions/inContextModeration.ts"),
				H = n("./src/reddit/actions/modal.ts"),
				W = n("./src/reddit/actions/subredditModeration/ban.ts"),
				q = n("./src/reddit/constants/modals.ts"),
				G = n("./src/reddit/components/Hovercards/helpers.ts"),
				K = n("./src/reddit/icons/fonts/index.tsx"),
				V = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				z = n("./src/reddit/selectors/bannedUser.ts"),
				X = n("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				Q = n.n(X);
			const {
				fbt: J
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Y = Object(o.c)({
				hasModMailPermissions: Object(m.b)(V.c.mail),
				isUserBanned: (e, t) => !!Object(z.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(g.nb)(e, {
					userName: t.username
				})
			});
			class Z extends a.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: n,
						isUserBanned: s,
						onUnbanUser: r,
						sendEvent: o,
						toggleBanModal: i,
						toggleMuteModal: d
					} = this.props;
					return a.a.createElement("div", {
						className: e
					}, s ? a.a.createElement(G.a, {
						role: "button",
						onClick: () => {
							r(this.props.user.id), o(N.e(t))
						}
					}, a.a.createElement(K.a, {
						name: "ban",
						isFilled: !0,
						className: Q.a.icon
					}), J._("Unban User", null, {
						hk: "1aASyW"
					})) : a.a.createElement(G.a, {
						role: "button",
						onClick: () => {
							i(), o(N.a(t))
						}
					}, a.a.createElement(K.a, {
						name: "ban",
						className: Q.a.icon
					}), J._("Ban User", null, {
						hk: "3OhuLx"
					})), n && a.a.createElement(G.a, {
						role: "button",
						onClick: () => {
							d(), o(N.d(t))
						}
					}, a.a.createElement(K.a, {
						name: "mod_mute",
						className: Q.a.icon
					}), J._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var $ = Object(r.b)(Y, (e, {
					username: t,
					subredditId: n,
					contextId: s
				}) => ({
					onUnbanUser: t => e(Object(W.e)(n, t)),
					requestUserBanInfo: () => e(Object(W.c)(n, {
						username: t
					})),
					toggleBanModal: () => {
						e(Object(B.c)({
							username: t,
							subredditId: n,
							contextId: s
						})), e(Object(W.a)(n, t))
					},
					toggleMuteModal: () => {
						e(Object(B.d)({
							username: t,
							subredditId: n,
							contextId: s
						})), e(Object(H.i)(q.a.MUTE_USER))
					}
				}))(Z),
				ee = n("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: te
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var ne = Object(r.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(ee.g)(t.subredditId, t.username))
				}))(e => a.a.createElement(G.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(N.c(e.contextId))
					}
				}, a.a.createElement(K.a, {
					name: "tag",
					className: Q.a.icon
				}), te._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				se = n("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				ae = n.n(se);

			function re() {
				return (re = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const oe = C.a.wrapped(w.a, "UserIcon", ae.a),
				ie = C.a.wrapped(j.a, "SubscribeButton", ae.a),
				de = C.a.wrapped(y.b, "ChatButton", ae.a),
				le = C.a.wrapped(P, "KarmaIcon", ae.a),
				ce = C.a.wrapped(R.a, "PremiumIcon", ae.a),
				me = C.a.wrapped(_.a, "UserNameLink", ae.a),
				ue = C.a.div("UserNameMetaData", ae.a),
				pe = C.a.div("MetaDataItem", ae.a),
				be = C.a.div("Bullet", ae.a),
				he = C.a.div("UserNameContainer", ae.a),
				ge = C.a.div("UserInfoContainer", ae.a),
				fe = C.a.div("PostKarma", ae.a),
				xe = C.a.div("CommentKarma", ae.a),
				Ee = C.a.div("KarmaGrid", ae.a),
				ve = C.a.div("GenericKarma", ae.a),
				_e = C.a.a("InfoLink", ae.a),
				Ce = C.a.div("KarmaCount", ae.a),
				ke = C.a.div("KarmaLabel", ae.a),
				ye = C.a.div("GenericKarmaLabel", ae.a),
				Oe = C.a.div("BannerImage", ae.a),
				Se = C.a.div("UserContainer", ae.a),
				je = C.a.div("BottomSpacer", ae.a),
				we = C.a.div("Container", ae.a),
				Ie = e => a.a.createElement("div", null, a.a.createElement("div", null, a.a.createElement(me, {
					to: `/user/${e.userName}/`
				}, `u/${e.userName}`), e.user.isEmployee && a.a.createElement(M.a, {
					className: ae.a.adminIcon,
					title: E.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && a.a.createElement(_.a, {
					to: "/premium"
				}, a.a.createElement(ce, null))), a.a.createElement(ue, null, e.user.username && a.a.createElement(pe, null, e.user.username, a.a.createElement(be, null, "•")), a.a.createElement(pe, null, (e.user.createdUtc || e.user.created) && a.a.createElement(F.d, {
					seconds: e.user.createdUtc || e.user.created
				})))),
				Ne = e => {
					const {
						showAwardKarma: t,
						user: {
							karma: n
						}
					} = e, s = {
						...I.a,
						...n
					};
					return t ? a.a.createElement(Ee, null, a.a.createElement(ve, null, a.a.createElement(Ce, null, Object(k.b)(s.fromPosts)), a.a.createElement(ye, null, E.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [E.fbt._plural(s.fromPosts)], {
						hk: "3K4oaH"
					}))), a.a.createElement(ve, null, a.a.createElement(Ce, null, Object(k.b)(s.fromComments)), a.a.createElement(ye, null, E.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [E.fbt._plural(s.fromComments)], {
						hk: "3gKRx9"
					}))), a.a.createElement(ve, null, a.a.createElement(Ce, null, Object(k.b)(s.fromAwardsReceived)), a.a.createElement(ye, null, E.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [E.fbt._plural(s.fromAwardsReceived)], {
						hk: "3nzm9q"
					}), a.a.createElement(_e, {
						href: A.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, a.a.createElement(T.a, {
						className: ae.a.infoIcon
					})))), a.a.createElement(ve, null, a.a.createElement(Ce, null, Object(k.b)(s.fromAwardsGiven)), a.a.createElement(ye, null, E.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [E.fbt._plural(s.fromAwardsGiven)], {
						hk: "4zXN3B"
					}), a.a.createElement(_e, {
						href: A.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, a.a.createElement(T.a, {
						className: ae.a.infoIcon
					}))))) : a.a.createElement(ge, null, a.a.createElement(le, null), a.a.createElement(fe, null, a.a.createElement(Ce, null, Object(k.b)(s.fromPosts)), a.a.createElement(ke, null, E.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [E.fbt._plural(s.fromPosts)], {
						hk: "3K4oaH"
					}))), a.a.createElement(xe, null, a.a.createElement(Ce, null, Object(k.b)(s.fromComments)), a.a.createElement(ke, null, E.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [E.fbt._plural(s.fromComments)], {
						hk: "3gKRx9"
					}))))
				},
				Te = e => {
					const {
						className: t,
						contextId: n,
						currentUser: s,
						hideNSFWPref: r,
						hoverId: o,
						isLoggedIn: i,
						onClickSnoovatar: d,
						origin: l,
						moderatorPermissions: c,
						prefersReducedAnimations: m,
						sendEvent: u,
						showAwardKarma: p,
						style: b,
						subredditId: h,
						topAwardIcon: g,
						userName: f,
						user: x,
						userFlair: _,
						userIsBanned: C,
						userProfileStyles: k,
						acceptChats: y,
						isCommentAuthorBlocked: S
					} = e;
					if (!x) return a.a.createElement(we, {
						style: b
					});
					const j = !!s && Object(L.e)(s) === f,
						w = !!(null == s ? void 0 : s.snoovatarFullBodyAsset),
						I = x.accountIcon || `${v.a.assetPath}/img/snoo_user_placeholder.png`,
						T = c && c.flair,
						M = c && c.access,
						P = _ && _.templateIds && _.templateIds.length > 0,
						R = _ && _.displaySettings && _.displaySettings.isEnabled,
						{
							awardedLastMonth: A
						} = x,
						F = !!x.snoovatarFullBodyAsset,
						B = x.isNSFW && r;
					let H;
					return H = F ? !B && k && k.bannerBackgroundImage || void 0 : B ? `${v.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, a.a.createElement(we, {
						className: t,
						id: o,
						style: b
					}, !F && H && a.a.createElement(Oe, {
						style: {
							backgroundImage: `url('${H}')`
						}
					}), a.a.createElement(Se, null, F ? a.a.createElement(U.a, {
						isHovercard: !0,
						bannerBackgroundImage: H,
						compact: !0,
						currentUserHasSnoovatar: w,
						isEmployee: x.isEmployee,
						isGold: x.isGold,
						isNSFW: x.isNSFW,
						isOwnProfile: j,
						onClickSnoovatar: d,
						prefersReducedAnimations: !!m,
						snoovatarUrl: x.snoovatarFullBodyAsset,
						title: null,
						userCreated: x.created,
						username: f,
						url: `/user/${e.userName}/`
					}) : a.a.createElement(he, null, a.a.createElement(oe, {
						iconUrl: I,
						isNSFW: x.isNSFW,
						userName: f
					}), a.a.createElement(Ie, {
						origin: l,
						user: x,
						userName: f
					})), a.a.createElement(Ne, {
						showAwardKarma: p,
						user: x
					}), A && a.a.createElement(D.a, {
						recentAwardings: A,
						topAwardIcon: g,
						username: f
					}), i && !j && !C && y && !S && a.a.createElement(de, {
						contextId: n,
						userId: x.id,
						text: E.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), x.hasUserProfile && !C && !S && !j && x.enableFollowers && a.a.createElement(ie, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(N.g)(e ? "unfollow" : "follow", n),
						isFullWidth: !0,
						small: !0
					})), M && n && !j && h && a.a.createElement($, {
						contextId: n,
						subredditId: h,
						sendEvent: u,
						username: f
					}), T && n && P && R && h && a.a.createElement(ne, {
						contextId: n,
						subredditId: h,
						sendEvent: u,
						username: f
					}), a.a.createElement(O.i, {
						contextId: n,
						subredditId: h,
						user: x
					}), !(M || i) && a.a.createElement(je, null))
				},
				Me = Object(S.a)(Te),
				Pe = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return a.a.createElement(Me, re({
						isOpen: t
					}, e))
				};
			Pe.WrappedComponent = Te;
			var Re = Pe;
			const Ae = Object(o.c)({
					activeTooltipId: h.a,
					currentUser: g.k,
					isLoggedIn: g.K,
					hideNSFWPref: g.C,
					moderatorPermissions: (e, {
						subredditId: t
					}) => t ? Object(m.m)(e, {
						subredditId: t
					}) : void 0,
					origin: c.j,
					prefersReducedAnimations: x.c,
					showAwardKarma: (e, t) => {
						return Object(h.a)(e) === t.tooltipId
					},
					topAwardIcon: (e, {
						userName: t
					}) => Object(l.e)(e, {
						userName: t,
						minSize: 32
					}),
					user: g.nb,
					userFlair: (e, {
						subredditId: t
					}) => t ? Object(f.d)(e, {
						subredditId: t
					}) : void 0,
					userIsBanned: (e, t) => !!Object(b.l)(t) && Object(b.cb)(e, t),
					userProfileStyles: (e, t) => Object(p.m)(e, Object(u.m)(e, t.userName)),
					acceptChats: (e, t) => {
						const n = Object(u.h)(e, {
							profileName: t.userName
						});
						return !n || n.acceptChats
					}
				}),
				Le = Object(r.b)(Ae, (e, t) => ({
					onClickSnoovatar: () => e(Object(i.b)({
						clickSource: "user_hovercard"
					})),
					onHideTooltip: () => e(Object(d.i)())
				}));
			t.a = Le(e => a.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: e.onHideTooltip
			}, a.a.createElement(Re, {
				activeTooltipId: e.activeTooltipId,
				contextId: e.contextId,
				currentUser: e.currentUser,
				isLoggedIn: e.isLoggedIn,
				hideNSFWPref: e.hideNSFWPref,
				hoverId: e.hoverId,
				moderatorPermissions: e.moderatorPermissions,
				onClickSnoovatar: e.onClickSnoovatar,
				onHideTooltip: e.onHideTooltip,
				origin: e.origin,
				prefersReducedAnimations: e.prefersReducedAnimations,
				sendEvent: e.sendEvent,
				showAwardKarma: e.showAwardKarma,
				subredditId: e.subredditId,
				topAwardIcon: e.topAwardIcon,
				tooltipId: e.tooltipId,
				tooltipType: e.tooltipType,
				user: e.user,
				userFlair: e.userFlair,
				userIsBanned: e.userIsBanned,
				userName: e.userName,
				userProfileStyles: e.userProfileStyles,
				acceptChats: e.acceptChats,
				isCommentAuthorBlocked: e.isCommentAuthorBlocked,
				collapsed: e.collapsed
			})))
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less": function(e, t, n) {
			e.exports = {
				icon: "xd9vrdS8_V6IVus6-mHAM"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				o = n("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = Object(i.c)(e => {
				const t = `${e.tooltipId}-hover-id`;
				return a.a.createElement(r.a, {
					className: e.wrapperClassName,
					hoverId: t,
					sendHoverEvent: e.sendHoverCardEvent,
					tooltipId: e.tooltipId,
					authorOrSubredditName: e.user
				}, e.children, a.a.createElement(o.a, {
					className: e.className,
					hoverId: t,
					sendEvent: e.sendEvent,
					subredditId: e.subredditId,
					tooltipId: e.tooltipId,
					tooltipType: e.tooltipType,
					userName: e.user
				}))
			})
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less": function(e, t, n) {
			e.exports = {
				ChatButton: "_3OdnAY8EYU3x_Nni3KnKwI",
				chatButton: "_3OdnAY8EYU3x_Nni3KnKwI",
				UserIcon: "_3_NawY8A3QCHkZUHnxDxUP",
				userIcon: "_3_NawY8A3QCHkZUHnxDxUP",
				SubscribeButton: "yFByQg8RzENoqoOt0ysAk",
				subscribeButton: "yFByQg8RzENoqoOt0ysAk",
				KarmaIcon: "_2XmHHGriP3EYLhv_9BG6OT",
				karmaIcon: "_2XmHHGriP3EYLhv_9BG6OT",
				PremiumIcon: "_3YJqiyvx8zFvv30tmg36S-",
				premiumIcon: "_3YJqiyvx8zFvv30tmg36S-",
				Token: "_2U0P3n4v75sHsDvQmSKNz3",
				token: "_2U0P3n4v75sHsDvQmSKNz3",
				UserNameLink: "_1oT4pd8QlZQZ1wGOk9VAaQ",
				userNameLink: "_1oT4pd8QlZQZ1wGOk9VAaQ",
				UserNameMetaData: "_1wu7a98opA-mU9WUQpJIuF",
				userNameMetaData: "_1wu7a98opA-mU9WUQpJIuF",
				GildedLastMonthDisplay: "_19NlUDUSw7ra6wC0luJwKV",
				gildedLastMonthDisplay: "_19NlUDUSw7ra6wC0luJwKV",
				Bullet: "_2dfF2p_dwLpL5C-8pAvdbL",
				bullet: "_2dfF2p_dwLpL5C-8pAvdbL",
				MetaDataItem: "RcL4UXH2ABHT3YpYzu3ms",
				metaDataItem: "RcL4UXH2ABHT3YpYzu3ms",
				UserNameContainer: "J9OjkO5NR8gsgJUQrk2Ft",
				userNameContainer: "J9OjkO5NR8gsgJUQrk2Ft",
				UserInfoContainer: "_3l7ptRjFJYo-fcXXajRpqn",
				userInfoContainer: "_3l7ptRjFJYo-fcXXajRpqn",
				PostKarma: "_2T3kavHwxOaL76xfa9id7",
				postKarma: "_2T3kavHwxOaL76xfa9id7",
				CommentKarma: "_1rFYsN1yoSDrDTRfqagI5r",
				commentKarma: "_1rFYsN1yoSDrDTRfqagI5r",
				KarmaGrid: "_1T5Mo-6GI-SCbGJJ9xZ2N7",
				karmaGrid: "_1T5Mo-6GI-SCbGJJ9xZ2N7",
				GenericKarma: "_1Tg84WxamVCCD1zg-nbbP8",
				genericKarma: "_1Tg84WxamVCCD1zg-nbbP8",
				KarmaCount: "_18aX_pAQub_mu1suz4-i8j",
				karmaCount: "_18aX_pAQub_mu1suz4-i8j",
				KarmaLabel: "_1b2tgHrvjFKgTLyFIQ9B6T",
				karmaLabel: "_1b2tgHrvjFKgTLyFIQ9B6T",
				GenericKarmaLabel: "EtlFWXCmzvjyd92eABb-5",
				genericKarmaLabel: "EtlFWXCmzvjyd92eABb-5",
				InfoLink: "_2qjqkYRKCjuqB4VRr2duCK",
				infoLink: "_2qjqkYRKCjuqB4VRr2duCK",
				BannerImage: "_1l9DXI5VaWcxjbz23v5b6X",
				bannerImage: "_1l9DXI5VaWcxjbz23v5b6X",
				UserContainer: "_m7PpFuKATP9fZF4xKf9R",
				userContainer: "_m7PpFuKATP9fZF4xKf9R",
				BottomSpacer: "_2D-HmwsbsNkTnIiPO4zcqb",
				bottomSpacer: "_2D-HmwsbsNkTnIiPO4zcqb",
				UserActionLink: "_1Sy8bDpK6p4JRHy1yB1Xyk",
				userActionLink: "_1Sy8bDpK6p4JRHy1yB1Xyk",
				Container: "_1sbZnfdaxhCOFVUCJ3Z75m",
				container: "_1sbZnfdaxhCOFVUCJ3Z75m",
				adminIcon: "_2aJuBKF3mo4YJS4YFkeU9a"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.m.less": function(e, t, n) {
			e.exports = {
				HoverDiv: "_2mHuuvyV9doV3zwbZPtIPG",
				hoverDiv: "_2mHuuvyV9doV3zwbZPtIPG"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			})), n.d(t, "b", (function() {
				return _
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/profile/index.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/reddit/selectors/tooltip.ts");
			const m = Object(i.c)({
				dropdownIsOpen: (e, t) => Object(c.b)(t.tooltipId)(e)
			});
			var u = Object(o.b)(m, (e, t) => ({
					onCloseUserDropdown: () => e(Object(l.i)()),
					onOpenUserDropdown: async () => {
						e(Object(l.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && (await e(Object(d.d)(t.authorOrSubredditName)), t.sendHoverEvent())
					}
				})),
				p = n("./src/reddit/actions/subreddit.ts");
			const b = Object(i.c)({
				dropdownIsOpen: (e, t) => Object(c.b)(t.tooltipId)(e)
			});
			var h = Object(o.b)(b, (e, t) => ({
					onCloseUserDropdown: () => e(Object(l.i)()),
					onOpenUserDropdown: async () => {
						var n;
						e(Object(l.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(p.u)(t.authorOrSubredditName)), null === (n = t.onShow) || void 0 === n || n.call(t)
					}
				})),
				g = n("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				f = n.n(g);
			class x extends a.a.Component {
				constructor() {
					super(...arguments), this.closeHovercardTimeoutId = 0, this.openHovercardTimeoutId = 0, this.isHovering = !1, this.hoverEl = void 0, this.onHoverElMouseEnter = () => {
						this.isHovering = !0
					}, this.onHoverElMouseLeave = () => {
						this.isHovering = !1
					}, this.onMouseEnter = e => {
						this.closeHovercardTimeoutId && clearTimeout(this.closeHovercardTimeoutId), this.openHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.dropdownIsOpen || this.props.onOpenUserDropdown()
						}, 500)
					}, this.onMouseLeave = () => {
						this.openHovercardTimeoutId && clearTimeout(this.openHovercardTimeoutId), this.closeHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.onCloseUserDropdown()
						}, 300)
					}
				}
				componentDidMount() {
					const e = document.getElementById(this.props.hoverId);
					e && (this.hoverEl = e, this.addHoverListeners(this.hoverEl))
				}
				componentWillUnmount() {
					this.hoverEl && this.removeHoverListeners(this.hoverEl), this.hoverEl = void 0, this.openHovercardTimeoutId && window.clearTimeout(this.openHovercardTimeoutId)
				}
				addHoverListeners(e) {
					e.addEventListener("mouseenter", this.onHoverElMouseEnter), e.addEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				removeHoverListeners(e) {
					e.removeEventListener("mouseenter", this.onHoverElMouseEnter), e.removeEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				render() {
					const {
						children: e,
						className: t
					} = this.props;
					return a.a.createElement("div", {
						className: t,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, e)
				}
			}
			const E = r.a.wrapped(x, "HoverDiv", f.a),
				v = u(E),
				_ = h(E)
		},
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, n) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/layout/row/Inline/index.tsx"),
				r = n("./src/reddit/components/Hovercards/helpers.m.less"),
				o = n.n(r);
			const i = s.a.wrapped(a.a, "UserActionItem", o.a),
				d = e => {
					const {
						author: t,
						itemId: n,
						subredditName: s,
						tooltipIdPrefix: a,
						tooltipType: r
					} = e;
					let o = a;
					return n && (o = `${o}--${n}`), r && (o = `${o}--${r}`), t && (o = `${o}--${t}`), s && (o = `${o}--${s}`), o
				}
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/InfoBanners/BannerBase/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				i = n.n(o),
				d = n("./src/lib/lessComponent.tsx");
			const l = d.a.div("IconWrapper", i.a),
				c = d.a.div("TextWrapper", i.a);

			function m(e) {
				const {
					className: t,
					color: n,
					icon: s,
					subtitle: o,
					title: d,
					textWrapperClassName: m
				} = e;
				return a.a.createElement("div", {
					className: Object(r.a)(t, i.a.wrapper),
					style: n && {
						borderColor: n
					} || {}
				}, a.a.createElement("div", {
					className: i.a.leftSideRectangle,
					style: n && {
						backgroundColor: n
					} || {}
				}), s ? a.a.createElement(l, null, s) : a.a.createElement(l, null), a.a.createElement(c, {
					className: m
				}, a.a.createElement("div", {
					className: i.a.title
				}, d), o && a.a.createElement("div", {
					className: i.a.subtitle
				}, o)))
			}
		},
		"./src/reddit/components/InlineSubredditEditing/index.m.less": function(e, t, n) {
			e.exports = {
				tooltipContent: "RrvkJ7ntzKYyaCOxMJ1RM",
				title: "BE2vGjFTJ80XkdBpRRr0p",
				tooltipBody: "_2yezzi8dgIemh3F2q_kvcp",
				topRow: "_1JfvdiRxYTSKf1IIe7DUvM",
				gotIt: "_1MHKCZd72tAgyoZWvIYM-G"
			}
		},
		"./src/reddit/components/ModHub/BadgesAndEmotes/EmptyState/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_12gWQ2C_gotA8s5-CJIlq9",
				icon: "_3-Fcrds7R5ihAWPAttv3AL",
				title: "_1vL1j4mpTYI5NOR335bInG",
				subtitle: "_3FOOtAw2Q-T7szrSBAbo9i"
			}
		},
		"./src/reddit/components/ModHub/BadgesAndEmotes/TabBar/index.m.less": function(e, t, n) {
			e.exports = {
				tabBar: "_1ItRVjBpP4aLG0vg-nXbwO",
				tab: "_3A18ggmDWAI5_Fz0nDOs-z",
				selected: "_3U85C8qDDoOUoOINg-E_3S"
			}
		},
		"./src/reddit/components/ModHub/BadgesAndEmotes/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModHub/BadgesAndEmotes/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return W
			})), n.d(t, "b", (function() {
				return q
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/governance/errorToast.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				c = n("./src/reddit/contexts/ApiContext.tsx"),
				m = n("./src/reddit/endpoints/economics/uploadedAssets.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				p = n("./src/lib/lessComponent.tsx"),
				b = n("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				h = n("./src/reddit/components/ModHub/BadgesAndEmotes/EmptyState/index.m.less"),
				g = n.n(h);
			const f = {
				[m.a.Uploaded]: {
					title: () => s.fbt._("No more to review!", null, {
						hk: "2rF58X"
					}),
					subtitle: () => s.fbt._("There are no new submissions", null, {
						hk: "3h54Ot"
					})
				},
				[m.a.Approved]: {
					title: () => s.fbt._("Nothing approved yet", null, {
						hk: "157fUO"
					}),
					subtitle: () => s.fbt._("Submissions will be here once you approve them", null, {
						hk: "pLc2c"
					})
				},
				[m.a.Rejected]: {
					title: () => s.fbt._("Nothing rejected yet", null, {
						hk: "1XN9kw"
					}),
					subtitle: () => s.fbt._("Submissions will be here once you reject them", null, {
						hk: "2IYFHB"
					})
				}
			};

			function x(e) {
				const t = f[e.selectedStatus];
				return r.a.createElement("div", {
					className: g.a.container
				}, r.a.createElement(b.a, {
					className: g.a.icon
				}), r.a.createElement("h3", {
					className: g.a.title
				}, t.title()), r.a.createElement("p", {
					className: g.a.subtitle
				}, t.subtitle()))
			}
			var E = n("./src/reddit/components/AuthorLink/index.tsx"),
				v = n("./src/reddit/controls/DropdownSelector/index.tsx"),
				_ = n("./src/reddit/components/ModHub/BadgesAndEmotes/index.m.less"),
				C = n.n(_);
			const k = p.a.div("cell", C.a),
				y = () => [{
					displayText: s.fbt._("New", null, {
						hk: "2xTBYx"
					}),
					value: m.a.Uploaded
				}, {
					displayText: s.fbt._("Approved", null, {
						hk: "1xx5DL"
					}),
					value: m.a.Approved
				}, {
					displayText: s.fbt._("Rejected", null, {
						hk: "25TTJE"
					}),
					value: m.a.Rejected
				}],
				O = () => y().slice(1, 3),
				S = new Intl.DateTimeFormat(void 0, {
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
					onItemAction: n
				} = e, a = y().find(e => e.value === t.status);
				let o = t.type === m.b.Badge ? t.extra.description : void 0;
				return o && o.endsWith(" u/" + t.uploader) && (o = o.slice(0, o.length - t.uploader.length - 3)), r.a.createElement(r.a.Fragment, null, r.a.createElement(k, {
					className: C.a.imageCell
				}, r.a.createElement("div", {
					className: C.a.image,
					style: {
						backgroundImage: `url(${t.url})`
					}
				})), r.a.createElement(k, {
					className: C.a.nameCell
				}, r.a.createElement("div", {
					className: C.a.title
				}, t.type === m.b.Emote ? `:${t.name}:` : t.name), r.a.createElement("div", {
					className: C.a.caption
				}, o, " ", r.a.createElement(E.a, {
					author: t.uploader,
					style: {
						color: t.type === m.b.Badge ? t.extra.color : void 0
					}
				}, "u/", t.uploader))), r.a.createElement(k, {
					className: C.a.timeCell
				}, S(t.createdAt)), r.a.createElement(k, {
					className: C.a.actionCell
				}, r.a.createElement(v.a, {
					className: C.a.dropdownSelector,
					displayText: a ? a.displayText : "",
					options: O(),
					onSelect: e => n(t, e.value),
					isCompactStyle: !0
				}), t.status !== m.a.Uploaded && !!t.moderator && !!t.modifiedAt && r.a.createElement("div", {
					className: C.a.byModerator
				}, s.fbt._("by u/ {moderator}, {time-modified}", [s.fbt._param("moderator", t.moderator), s.fbt._param("time-modified", S(t.modifiedAt))], {
					hk: "25I5ES"
				}))), r.a.createElement("div", {
					className: C.a.line
				}))
			}
			var w = n("./src/lib/classNames/index.ts");
			const I = p.a.div("cell", C.a),
				N = () => r.a.createElement(r.a.Fragment, null, r.a.createElement(I, {
					className: C.a.imageCell
				}, r.a.createElement("div", {
					className: Object(w.a)(C.a.image, C.a.imagePlaceholder)
				})), r.a.createElement(I, {
					className: C.a.nameCell
				}, r.a.createElement("div", {
					className: C.a.loadingTextLong
				})), r.a.createElement(I, null, r.a.createElement("div", {
					className: C.a.loadingTextShort
				})), r.a.createElement(I, {
					className: C.a.actionCell
				}, r.a.createElement("div", {
					className: C.a.loadingTextShort
				})), r.a.createElement("div", {
					className: C.a.line
				}));
			var T = () => r.a.createElement(r.a.Fragment, null, r.a.createElement(N, null), r.a.createElement(N, null), r.a.createElement(N, null), r.a.createElement(N, null));
			const {
				fbt: M
			} = n("./node_modules/fbt/lib/FbtPublic.js"), P = p.a.div("header", C.a);

			function R(e) {
				const {
					onAssetAction: t,
					assets: n,
					selectedStatus: s
				} = e;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: C.a.grid
				}, r.a.createElement(P, null, M._("Image", null, {
					hk: "3ImlXy"
				})), r.a.createElement(P, null, M._("Name and Description", null, {
					hk: "ZMWPH"
				})), r.a.createElement(P, null, M._("Submission Time", null, {
					hk: "3qPqQa"
				})), r.a.createElement(P, {
					className: C.a.actionHeader
				}, M._("Action", null, {
					hk: "27SYzP"
				})), !n && r.a.createElement(T, null), n && !!n.length && n.map(e => r.a.createElement(j, {
					item: e,
					key: e.name,
					onItemAction: t
				}))), n && !n.length && r.a.createElement(x, {
					selectedStatus: s
				}))
			}
			var A = n("./src/reddit/components/ModHub/BadgesAndEmotes/TabBar/index.m.less"),
				L = n.n(A);
			const F = e => r.a.createElement("button", {
					className: Object(w.a)(L.a.tab, {
						[L.a.selected]: e.selected
					}),
					onClick: e.onClick
				}, e.children),
				D = e => r.a.createElement("div", {
					className: L.a.tabBar
				}, [m.a.Uploaded, m.a.Approved, m.a.Rejected].map(t => r.a.createElement(F, {
					onClick: () => e.onTabSelected(t),
					selected: t === e.value,
					value: t,
					key: t
				}, (e => {
					switch (e) {
						case m.a.Uploaded:
							return s.fbt._("Uploaded", null, {
								hk: "1AgqhR"
							});
						case m.a.Approved:
							return s.fbt._("Approved", null, {
								hk: "37lIL9"
							});
						case m.a.Rejected:
							return s.fbt._("Rejected", null, {
								hk: "W16pI"
							});
						default:
							return s.fbt._("Uploaded", null, {
								hk: "1AgqhR"
							})
					}
				})(t))));

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class B extends r.a.Component {
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
						const n = this.props.assetType,
							s = await Object(m.d)(this.props.apiContext(), this.props.subredditId, n, e.id, {
								status: t
							});
						if (s.ok) {
							const s = this.state.assets;
							this.setState({
								assets: s && s.filter(t => t !== e)
							}), t === m.a.Approved ? this.props.onApproved(n) : t === m.a.Rejected && this.props.onRejected(n)
						} else this.props.onGovernanceError(s.error)
					}
				}
				componentDidMount() {
					this.onTabChange(this.state.selectedStatus)
				}
				render() {
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(l.a, {
						className: C.a.contentContainer
					}, r.a.createElement(l.b, null, this.props.assetType === m.b.Badge ? s.fbt._("User uploaded badges", null, {
						hk: "3qGdzT"
					}) : s.fbt._("User uploaded emotes", null, {
						hk: "1GJiVz"
					})), r.a.createElement("div", {
						className: C.a.content
					}, r.a.createElement(D, {
						onTabSelected: this.onTabChange,
						value: this.state.selectedStatus
					}), r.a.createElement(R, {
						selectedStatus: this.state.selectedStatus,
						assets: this.state.assets,
						onAssetAction: this.onAssetAction
					}))))
				}
			}
			const H = Object(c.b)(Object(o.b)(void 0, (e, t) => ({
					onGovernanceError: t => Object(i.a)(e, t),
					onApproved: t => e(Object(d.f)({
						kind: u.b.SuccessCommunity,
						text: t === m.b.Badge ? s.fbt._("Approved badge!", null, {
							hk: "3B3r07"
						}) : s.fbt._("Approved emote!", null, {
							hk: "tWzSE"
						})
					})),
					onRejected: t => e(Object(d.f)({
						kind: u.b.SuccessCommunity,
						text: t === m.b.Badge ? s.fbt._("Rejected badge", null, {
							hk: "1X6cSg"
						}) : s.fbt._("Rejected emote", null, {
							hk: "3RS2kT"
						})
					}))
				}))(B)),
				W = e => r.a.createElement(H, U({
					assetType: m.b.Badge
				}, e)),
				q = e => r.a.createElement(H, U({
					assetType: m.b.Emote
				}, e))
		},
		"./src/reddit/components/ModHub/Content/NoPermissions.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/reddit/contexts/NavbarExp.ts"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/ModHub/Content/index.m.less"),
				c = n.n(l);
			t.a = e => {
				const t = Object(r.useContext)(i.a);
				return o.a.createElement("div", {
					className: Object(d.a)(c.a.noPermissions, {
						[c.a.noPermissionsExp]: t
					})
				}, o.a.createElement("img", {
					className: c.a.rememberTheHuman,
					src: `${s.a.assetPath}/img/content-gate-icons/remember-the-human.png`
				}), e.isModerator ? a.fbt._("Sorry, you do not have the moderator permissions needed to view this page", null, {
					hk: "4wUDIF"
				}) : a.fbt._("Sorry, this is a moderator-only page", null, {
					hk: "2BZEIA"
				}), o.a.createElement("div", {
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
		"./src/reddit/components/ModHub/Content/WelcomeMessage.m.less": function(e, t, n) {
			e.exports = {
				ModerateIcon: "khXWcHNm7cUFKCGgNfNPy",
				moderateIcon: "khXWcHNm7cUFKCGgNfNPy",
				ModHubWelcomeMessage: "_1WUhYUiKwTt20VZZiLFRXQ",
				modHubWelcomeMessage: "_1WUhYUiKwTt20VZZiLFRXQ"
			}
		},
		"./src/reddit/components/ModHub/Content/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModHub/Content/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/lib/assertNever.ts"),
				i = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/components/ApprovedSubmitterList/index.tsx"),
				l = n("./src/reddit/components/BannedUserList/index.tsx"),
				c = n("./src/reddit/components/CommunityAwardList/index.tsx"),
				m = n("./src/reddit/components/CommunitySettings/index.tsx"),
				u = n("./src/reddit/components/GrantUserFlair/index.tsx"),
				p = n("./src/reddit/components/ModerationLog/index.tsx"),
				b = n("./src/reddit/components/ModeratorsList/index.tsx"),
				h = n("./src/reddit/components/ModHub/BadgesAndEmotes/index.tsx"),
				g = n("./src/reddit/components/ModHub/Emojis/index.tsx"),
				f = n("./src/reddit/components/MutedUserList/index.tsx"),
				x = n("./src/reddit/components/PowerupsSettings/index.tsx"),
				E = n("./src/reddit/components/RemovalReasons/index.tsx"),
				v = n("./src/reddit/components/Streaming/ModSettings/index.tsx"),
				_ = n("./src/reddit/components/SubredditContent/EventPostContent/index.tsx"),
				C = n("./src/reddit/components/SubredditContent/PredictionsContent/async.ts"),
				k = n("./src/reddit/components/SubredditContent/ScheduledPostContent/index.tsx"),
				y = n("./src/reddit/components/SubredditRules/index.tsx");
			const O = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-ModHub-ContentControls",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-ModHub-ContentControls").then(n.bind(null, "./src/reddit/components/ModHub/ContentControls/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ModHub/ContentControls/index.tsx"
					}
				}),
				S = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-ModHub-ChatSettings",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-ModHub-ChatSettings").then(n.bind(null, "./src/reddit/components/ModHub/ChatSettings/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ModHub/ChatSettings/index.tsx"
					}
				}),
				j = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-ModHub-TrafficStats",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-ModHub-TrafficStats").then(n.bind(null, "./src/reddit/components/ModHub/TrafficStats/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ModHub/TrafficStats/index.tsx"
					}
				}),
				w = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-ModHub-flairs-PostFlairManagement",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("reddit-components-ModHub-flairs-PostFlairManagement~reddit-components-ModHub-flairs-UserFlairManagement"), n.e("reddit-components-ModHub-flairs-PostFlairManagement")]).then(n.bind(null, "./src/reddit/components/ModHub/flairs/PostFlairManagement/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ModHub/flairs/PostFlairManagement/index.tsx"
					}
				}),
				I = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-ModHub-flairs-UserFlairManagement",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("reddit-components-ModHub-flairs-PostFlairManagement~reddit-components-ModHub-flairs-UserFlairManagement"), n.e("reddit-components-ModHub-flairs-UserFlairManagement")]).then(n.bind(null, "./src/reddit/components/ModHub/flairs/UserFlairManagement/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ModHub/flairs/UserFlairManagement/index.tsx"
					}
				}),
				N = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-Wiki-ModHubWikiManagement",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), n.e("reddit-components-Wiki-ModHubWikiManagement")]).then(n.bind(null, "./src/reddit/components/Wiki/ModHubWikiManagement/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Wiki/ModHubWikiManagement/index.tsx"
					}
				}),
				T = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-ModHub-Content-ModQueue",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-ModHub-Content-ModQueue").then(n.bind(null, "./src/reddit/components/ModHub/Content/ModQueue.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ModHub/Content/ModQueue.tsx"
					}
				}),
				M = e => {
					const {
						layout: t,
						pageName: n,
						postTypeFilter: s,
						subpageName: a,
						...M
					} = e, P = {
						...M,
						subredditId: e.subreddit.id
					};
					switch (n) {
						case i.ec.Removal:
							return r.a.createElement(E.a, {
								subredditId: e.subreddit.id,
								sendEventWithName: e.sendEventWithName
							});
						case i.ec.Contributors:
							return r.a.createElement(d.a, P);
						case i.ec.Banned:
							return r.a.createElement(l.a, P);
						case i.ec.Streaming:
							return r.a.createElement(v.a, {
								subredditName: e.subreddit.name,
								subredditId: e.subreddit.id
							});
						case i.ec.Muted:
							return r.a.createElement(f.a, P);
						case i.ec.Moderators:
							return r.a.createElement(b.a, P);
						case i.ec.Modlog:
							return r.a.createElement(p.a, P);
						case i.ec.ContentControls:
							return r.a.createElement(O, {
								subredditName: e.subreddit.name
							});
						case i.ec.ChatSettings:
							return r.a.createElement(S, {
								subredditName: e.subreddit.name,
								subredditId: e.subreddit.id
							});
						case i.ec.Flair:
							return r.a.createElement(u.a, {
								after: e.after,
								before: e.before,
								subredditId: e.subreddit.id
							});
						case i.ec.PostFlair:
							return r.a.createElement(w, {
								subredditId: e.subreddit.id
							});
						case i.ec.UserFlair:
							return r.a.createElement(I, {
								subredditId: e.subreddit.id
							});
						case i.ec.Badges:
							return r.a.createElement(h.a, {
								subredditId: e.subreddit.id
							});
						case i.ec.Emotes:
							return r.a.createElement(h.b, {
								subredditId: e.subreddit.id
							});
						case i.ec.SubredditRules:
							return r.a.createElement(y.a, {
								subreddit: e.subreddit
							});
						case i.ec.CommunitySettings:
							return r.a.createElement(m.a, {
								subredditId: e.subreddit.id,
								subpageName: e.subpageName,
								subredditName: e.subreddit.name
							});
						case i.ec.Modqueue:
						case i.ec.Reports:
						case i.ec.Spam:
						case i.ec.Edited:
						case i.ec.Unmoderated:
							return r.a.createElement(T, {
								after: e.after,
								layout: t,
								page: e.page,
								pageName: n,
								postTypeFilter: s,
								sendEventWithName: e.sendEventWithName,
								subredditName: e.subreddit.name
							});
						case i.ec.Awards:
							return r.a.createElement(c.a, {
								subredditOrProfile: e.subreddit,
								subredditOrProfileId: e.subreddit.id,
								moderatorPermissions: e.moderatorPermissions
							});
						case i.ec.Powerups:
							return r.a.createElement(x.a, {
								subredditId: e.subreddit.id
							});
						case i.ec.Emojis:
							return r.a.createElement(g.a, {
								subreddit: e.subreddit
							});
						case i.ec.Wiki:
						case i.ec.WikiContributors:
						case i.ec.WikiBanned:
							return r.a.createElement(N, {
								subreddit: e.subreddit
							});
						case i.ec.Traffic:
							return r.a.createElement(j, {
								subreddit: e.subreddit
							});
						case i.ec.SubredditContent:
							return null;
						case i.ec.ScheduledPostContent:
							return r.a.createElement(k.a, {
								subreddit: e.subreddit
							});
						case i.ec.EventPostContent:
							return r.a.createElement(_.a, {
								subredditName: e.subreddit.name
							});
						case i.ec.Predictions:
							return r.a.createElement(C.a, {
								subreddit: e.subreddit
							});
						default:
							return Object(o.a)(n)
					}
				};
			t.a = M
		},
		"./src/reddit/components/ModHub/Emojis/EmojiUploadModal/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModHub/Emojis/EmojiUploader/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModHub/Emojis/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModHub/Emojis/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/map.js"),
				o = n.n(r),
				i = n("./node_modules/react/index.js"),
				d = n.n(i),
				l = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				m = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/actions/emoji.ts"),
				p = n("./src/reddit/actions/modal.ts"),
				b = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				h = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				g = n("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				f = n("./src/reddit/components/ModHub/InfoTooltip/index.tsx"),
				x = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				E = n("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				v = n("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = n("./src/reddit/constants/colors.ts"),
				C = n("./src/reddit/controls/Button/index.tsx"),
				k = n("./src/reddit/selectors/telemetry.ts");
			const y = e => ({
					subreddit: k.ib(e),
					profile: k.R(e),
					userSubreddit: k.rb(e)
				}),
				O = (e, t) => n => ({
					source: "emoji",
					action: "toggle",
					noun: e,
					actionInfo: {
						settingValue: t ? "on" : "off"
					},
					...y(n)
				}),
				S = e => t => ({
					source: "emoji",
					action: "click",
					noun: e,
					...y(t)
				}),
				j = (e, t) => n => ({
					source: "emoji",
					action: "click",
					noun: e,
					actionInfo: k.d(n, {
						count: t
					}),
					...y(n)
				});
			var w = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				I = n("./src/reddit/selectors/activeModalId.ts"),
				N = n("./src/reddit/selectors/emojis.ts"),
				T = n("./src/reddit/components/ModHub/Emojis/index.m.less"),
				M = n.n(T),
				P = n("./src/reddit/controls/ImageDisplay/index.tsx"),
				R = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				A = n("./src/reddit/layout/row/Inline/index.tsx");
			const L = m.a.span("appears", M.a),
				F = m.a.span("buttonWrapper", M.a),
				D = m.a.span("displayWrapper", M.a),
				U = m.a.wrapped(P.a, "emojiDisplay", M.a),
				B = m.a.span("emojiName", M.a),
				H = m.a.span("permissions", M.a),
				W = m.a.wrapped(A.a, "row", M.a),
				q = m.a.wrapped(R.b, "trashIcon", M.a);
			var G = e => d.a.createElement(W, null, d.a.createElement(D, null, d.a.createElement(U, {
					backgroundImage: e.emoji.url
				})), d.a.createElement(B, null, e.emoji.name), d.a.createElement(L, null, ((e, t) => e && t ? a.fbt._("Post flair, user flair", null, {
					hk: "gLvKb"
				}) : e ? a.fbt._("Post flair", null, {
					hk: "dcIoz"
				}) : t ? a.fbt._("User flair", null, {
					hk: "4fQagx"
				}) : "")(e.emoji.postFlairAllowed, e.emoji.userFlairAllowed)), d.a.createElement(H, null, e.emoji.modFlairOnly && a.fbt._("Mod only", null, {
					hk: "NMZoE"
				})), d.a.createElement(F, null, d.a.createElement(C.r, {
					className: e.isSnoomoji ? M.a.editSnoomoji : M.a.editEmoji,
					onClick: () => e.onEdit(e.emoji, e.isSnoomoji)
				}, a.fbt._("Edit", null, {
					hk: "1nftDt"
				})), !e.isSnoomoji && d.a.createElement("button", {
					onClick: () => e.onRemove(e.emoji.name)
				}, d.a.createElement(q, null)))),
				K = n("./node_modules/lodash/clamp.js"),
				V = n.n(K),
				z = n("./src/higherOrderComponents/asModal/index.tsx"),
				X = n("./src/lib/classNames/index.ts"),
				Q = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				J = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				Y = n("./src/reddit/controls/TextButton/index.tsx"),
				Z = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				$ = n("./src/reddit/selectors/subreddit.ts"),
				ee = n("./src/reddit/controls/ToggleSwitch/index.tsx");
			const te = m.a.span("labelDescription", M.a),
				ne = m.a.span("labelTitle", M.a),
				se = m.a.div("leftForm", M.a),
				ae = m.a.div("rightForm", M.a),
				re = m.a.wrapped(ee.a, "toggleSwitch", M.a);
			var oe = e => d.a.createElement("div", {
				className: e.className
			}, d.a.createElement(se, null, d.a.createElement(ne, null, a.fbt._("{title}", [a.fbt._param("title", e.title)], {
				hk: "4bYhaP"
			})), d.a.createElement(te, null, a.fbt._("{description}", [a.fbt._param("description", e.description)], {
				hk: "1lFxbr"
			}))), d.a.createElement(ae, null, d.a.createElement(re, {
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
					return V()(t, 1, ie)
				},
				me = m.a.wrapped(J.c, "emojiDimensionInput", M.a),
				ue = m.a.span("emojiDimensions", M.a),
				pe = m.a.span("emojiSizeBlock", M.a),
				be = m.a.wrapped(oe, "modalEnableSection", M.a),
				he = m.a.wrapped(Q.e, "modalBody", M.a),
				ge = m.a.wrapped(Q.a, "modalCancelButton", M.a),
				fe = m.a.wrapped(Y.a, "modalCloseButton", M.a),
				xe = m.a.wrapped(Q.g, "modalFooter", M.a),
				Ee = m.a.wrapped(C.l, "modalSubmitButton", M.a),
				ve = Object(c.c)({
					emojisCustomSize: (e, t) => Object($.t)(e, {
						subredditName: t.subreddit.name
					}).emojisCustomSize,
					isEmojisEnabled: (e, t) => Object($.t)(e, {
						subredditName: t.subreddit.name
					}).emojisEnabled
				}),
				_e = Object(l.b)(ve, (e, {
					subreddit: t
				}) => ({
					setCustomSize: n => e(Object(u.n)(t.id, n)),
					toggleEnableEmojis: n => e(Object(u.k)(t.id, n))
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
						if (this.enableHasBeenToggled() && (e.toggleEnableEmojis(t.emojisEnabled), e.sendEvent(O("enable", t.emojisEnabled))), this.sizeHasBeenToggled() || this.sizeHasBeenEdited()) {
							const n = t.customSizeEnabled ? {
								width: Math.max(t.width, de),
								height: Math.max(t.height, de)
							} : void 0;
							e.setCustomSize(n), e.sendEvent(O("custom_sizing", t.customSizeEnabled))
						}
						e.toggleModal(), e.sendEvent(S("save_emoji_settings"))
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
					} = this, n = t.customSizeEnabled && (t.width < de || t.height < de), s = n ? a.fbt._("Invalid number, must be between {minSize} to {maxSize}px", [a.fbt._param("minSize", de.toString()), a.fbt._param("maxSize", ie.toString())], {
						hk: "3bkWk5"
					}) : a.fbt._("Must be between {minSize} to {maxSize}px", [a.fbt._param("minSize", de.toString()), a.fbt._param("maxSize", ie.toString())], {
						hk: "1Gp9cj"
					});
					return d.a.createElement(he, null, d.a.createElement(Q.i, null, d.a.createElement(Z.a, null, d.a.createElement(Q.q, null, a.fbt._("Emoji settings", null, {
						hk: "1GjUM3"
					})), d.a.createElement(fe, {
						onClick: e.toggleModal
					}, d.a.createElement(Q.b, null)))), d.a.createElement(Q.l, null, d.a.createElement(be, {
						description: "Allow emojis to be used in post and user flair within your community",
						on: t.emojisEnabled,
						onToggle: this.handleEnableEmojisToggle,
						title: "Enable emojis in this community"
					}), d.a.createElement(oe, {
						className: t.emojisEnabled ? M.a.modalEmojiSizeSection : Object(X.a)(M.a.modalEmojiSizeSection, M.a.disabledSection),
						description: "Enables emojis to be displayed at custom sizes for user flair in comments. Emojis will be displayed 16 x 16px everywhere else.",
						on: t.customSizeEnabled,
						onToggle: this.handleEmojiSizesToggle,
						title: "Custom sized emojis"
					}), d.a.createElement("span", {
						className: t.emojisEnabled && t.customSizeEnabled ? M.a.customSizesForm : Object(X.a)(M.a.customSizesForm, M.a.disabledSection)
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
						className: n ? M.a.sizeLimitTextWarning : M.a.sizeLimitText
					}, s))), d.a.createElement(xe, null, d.a.createElement(ge, {
						onClick: e.toggleModal
					}, a.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), d.a.createElement(Ee, {
						disabled: !this.canSave() || n,
						onClick: this.onSave
					}, a.fbt._("Save", null, {
						hk: "4yMsMq"
					}))))
				}
			}
			var ke = Object(z.a)(_e(Ce)),
				ye = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/actions/toaster.ts")),
				Oe = n("./src/reddit/components/StructuredStyles/ImageUpload/index.tsx"),
				Se = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				je = n("./src/reddit/controls/CheckboxInput/index.tsx"),
				we = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				Ie = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				Ne = n("./src/reddit/models/Image/index.tsx"),
				Te = n("./src/reddit/models/Toast/index.ts"),
				Me = n("./src/reddit/components/ModHub/Emojis/EmojiUploadModal/index.m.less"),
				Pe = n.n(Me),
				Re = n("./src/higherOrderComponents/withImageUploads.tsx"),
				Ae = n("./src/reddit/icons/svgs/Clear/index.tsx"),
				Le = n("./src/reddit/models/Emoji/index.ts"),
				Fe = n("./src/reddit/components/ModHub/Emojis/EmojiUploader/index.m.less"),
				De = n.n(Fe),
				Ue = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				Be = n("./src/reddit/components/ProgressBar/index.tsx"),
				He = n("./src/reddit/controls/ErrorText/index.tsx");
			const We = 5,
				qe = 95,
				Ge = 600,
				Ke = 100;
			class Ve extends d.a.Component {
				constructor() {
					super(...arguments), this.intervalToken = 0, this.state = {
						timeStarted: Date.now(),
						percent: We
					}, this.tick = () => {
						const e = function(e) {
							const t = e / Ge,
								n = (Math.log(t / 10) + 3) / 2.1;
							return Math.max(qe, Math.min(We, 100 * n))
						}(Date.now() - this.state.timeStarted);
						this.setState({
							percent: e
						}), e === qe && this.intervalToken && window.clearInterval(this.intervalToken)
					}
				}
				componentDidMount() {
					this.intervalToken = window.setInterval(this.tick, Ke)
				}
				componentWillUnmount() {
					this.intervalToken && window.clearInterval(this.intervalToken)
				}
				render() {
					return d.a.createElement(Be.a, {
						className: De.a.progressBar,
						innerBarClassName: De.a.innerBarClassName,
						percent: this.state.percent
					})
				}
			}
			var ze = Ve;
			const Xe = m.a.wrapped(Ue.a, "characterCountdown", De.a),
				Qe = m.a.wrapped(Ae.a, "clearIcon", De.a),
				Je = m.a.wrapped(He.b, "errorText", De.a),
				Ye = m.a.wrapped(Z.a, "expandLeft", De.a),
				Ze = m.a.div("iconSpacer", De.a),
				$e = m.a.wrapped(P.a, "imageDisplay", De.a),
				et = m.a.div("inputPlaceholder", De.a),
				tt = m.a.wrapped(Z.a, "inputPlaceholder", De.a),
				nt = m.a.wrapped(Y.a, "textButton", De.a);
			class st extends d.a.Component {
				constructor() {
					super(...arguments), this.handleChangeEmojiName = e => {
						this.props.onChangeEmojiName && this.props.onChangeEmojiName(this.props.index, e.target.value)
					}, this.handleRemove = e => {
						this.props.onCancel(this.props.index)
					}, this.renderContent = () => {
						const {
							emojiName: e,
							errorText: t,
							fileName: n,
							handleRetry: s,
							imageData: r,
							isDuplicate: o
						} = this.props;
						switch (r.kind) {
							case Ne.b.NotUploaded:
							case Ne.b.Pending:
								return d.a.createElement("div", null, d.a.createElement(tt, null, r.kind === Ne.b.NotUploaded ? d.a.createElement(ze, null) : d.a.createElement(Be.a, {
									className: De.a.progressBar,
									innerBarClassName: De.a.innerBarClassName,
									percent: 0
								}), d.a.createElement(nt, {
									onClick: this.handleRemove
								}, a.fbt._("Cancel", null, {
									hk: "2TSLl5"
								}))), d.a.createElement(Se.b, null, a.fbt._("Uploading {fileName}", [a.fbt._param("fileName", n)], {
									hk: "NIxvK"
								})));
							case Ne.b.FailedToUpload:
							case Ne.b.Invalid:
								return d.a.createElement("div", null, d.a.createElement(tt, null, a.fbt._("Failed to upload", null, {
									hk: "2LBRW2"
								}), s ? d.a.createElement(nt, {
									onClick: s
								}, a.fbt._("Retry", null, {
									hk: "3EwbaK"
								})) : d.a.createElement(nt, {
									onClick: this.handleRemove
								}, a.fbt._("Remove", null, {
									hk: "3tYl0U"
								}))), t && d.a.createElement(Je, null, t));
							case Ne.b.Uploaded:
								return d.a.createElement(et, null, a.fbt._("Saved", null, {
									hk: "2xDFZZ"
								}));
							default:
								return d.a.createElement("div", null, d.a.createElement(J.c, {
									className: o ? De.a.duplicateInput : De.a.input,
									onChange: this.handleChangeEmojiName,
									placeholder: a.fbt._("Emoji name", null, {
										hk: "UpQdA"
									}),
									value: e
								}), d.a.createElement(Ye, null, d.a.createElement(Xe, {
									maxChars: Le.d,
									text: e
								}), d.a.createElement(nt, {
									onClick: this.handleRemove
								}, a.fbt._("Remove", null, {
									hk: "3tYl0U"
								}))), t && d.a.createElement(Je, null, t))
						}
					}
				}
				render() {
					const {
						emojiName: e,
						imageData: t,
						isSaving: n
					} = this.props;
					return n ? d.a.createElement(d.a.Fragment, null, d.a.createElement(et, null, d.a.createElement(ze, null)), d.a.createElement(Se.b, null, a.fbt._("Saving {emojiName}", [a.fbt._param("emojiName", e)], {
						hk: "3lMST7"
					}))) : d.a.createElement(Ie.a, null, t.kind === Ne.b.FailedToUpload || t.kind === Ne.b.Invalid ? d.a.createElement(Ze, null, d.a.createElement(Qe, null)) : d.a.createElement($e, {
						backgroundImage: t.url
					}), this.renderContent())
				}
			}
			var at = st,
				rt = n("./node_modules/lodash/countBy.js"),
				ot = n.n(rt),
				it = n("./node_modules/lodash/filter.js"),
				dt = n.n(it),
				lt = n("./node_modules/lodash/includes.js"),
				ct = n.n(lt),
				mt = n("./node_modules/lodash/transform.js"),
				ut = n.n(mt);
			const pt = /^[A-Za-z0-9_-]{1,24}$/,
				bt = ["reddit", "snoo", "spez"],
				ht = (e, t, n) => !pt.test(e) || !n && (e => {
					const t = e.toLowerCase();
					return bt.reduce((e, n) => e || -1 !== t.indexOf(n), !1)
				})(e) ? a.fbt._("Invalid emoji name", null, {
					hk: "2Oromm"
				}) : ct()(t, e) ? a.fbt._("This name is already taken", null, {
					hk: "4dwdJL"
				}) : "",
				gt = e => e.name ? e.name.replace(/\.[^.]*$/, "").replace(/[^A-Za-z0-9_-]/g, " ").trim().replace(/ +/g, "_").slice(0, 24) : "",
				ft = (e, t) => (t.kind !== Ne.b.TempUploaded || !e.emojiNameError && !e.isNameMissing) && (t.kind !== Ne.b.NotUploaded && t.kind !== Ne.b.Pending),
				xt = e => {
					let t = "";
					return e.file.size > Le.a ? t = "file-size-error" : (e.height > Le.b || e.width > Le.c) && (t = "image-size-error"), {
						emojiNameError: "",
						imageError: t,
						name: gt(e.file),
						fileName: e.file.name,
						isNameMissing: !1
					}
				},
				Et = (e, t) => t.reduce((t, n) => n.kind === e ? t + 1 : t, 0),
				vt = (e, t) => {
					const {
						emojiNameError: n,
						imageError: s,
						isNameMissing: r
					} = t;
					let o = "";
					e.kind === Ne.b.FailedToUpload && (o = e.error.fields && e.error.fields.length ? e.error.fields[0].msg : a.fbt._("Something went wrong", null, {
						hk: "2fCWXR"
					}));
					const i = o || !1,
						d = n || !!r && a.fbt._("Emoji name is required", null, {
							hk: "4sL3l7"
						});
					let l = "";
					return "file-size-error" === s ? l = a.fbt._("File size too large", null, {
						hk: "EksGU"
					}) : "image-size-error" === s && (l = a.fbt._("Image size too large", null, {
						hk: "1xjOmq"
					})), l || i || d || ""
				},
				_t = e => {
					const t = dt()(e, e => !e.emojiNameError && !e.imageError),
						n = ot()(t, e => e.name);
					return ut()(n, (e, t, n) => {
						t > 1 && e.push(n)
					}, [])
				},
				Ct = 500,
				kt = m.a.div("UploaderContainer", De.a),
				yt = m.a.wrapped(w.a, "alertIcon", De.a),
				Ot = m.a.wrapped(Ae.a, "duplicatesIcon", De.a),
				St = m.a.wrapped(Q.p, "duplicateWarning", De.a),
				jt = m.a.wrapped(C.l, "modalAddButton", De.a),
				wt = m.a.wrapped(Q.a, "modalCancelButton", De.a),
				It = m.a.div("uploaderContainer", De.a),
				Nt = m.a.wrapped(Q.p, "modProTip", De.a),
				Tt = m.a.div("progressText", De.a),
				Mt = m.a.wrapped(Q.p, "replacingDescription", De.a),
				Pt = m.a.div("replacingTitle", De.a),
				Rt = m.a.div("uploadingTitle", De.a),
				At = Object(c.c)({
					emojis: N.d,
					isSnoomojiSubreddit: $.k,
					reservedEmojiNames: N.e
				}),
				Lt = Object(l.b)(At, (e, {
					subredditId: t
				}) => ({
					emojisUploadedToast: () => e(ye.f({
						kind: Te.b.SuccessCommunityGreen,
						text: a.fbt._("New emojis added!", null, {
							hk: "1Q1mEq"
						})
					})),
					saveEmoji: (n, s, a) => e(Object(u.p)({
						imageData: n,
						subredditId: t,
						emojiName: s,
						settings: a
					}))
				}));
			class Ft extends d.a.Component {
				constructor(e) {
					super(e), this.timeoutToken = 0, this.loadIndex = 0, this.tempUploadNext = async () => {
						const e = this.getNextPendingImageToLoad();
						if (!e) return this.timeoutToken = 0, void(this.loadIndex = 0);
						const {
							subredditId: t
						} = this.props, n = this.state.emojiData[e.id], s = Object(Ne.m)(e);
						await this.props.uploadImage({
							imageData: s,
							subredditId: t,
							emojiName: n.name,
							settings: this.props.emojiSettings
						}), this.loadIndex += 1, this.loadIndex < this.state.localData.length ? this.timeoutToken = window.setTimeout(this.tempUploadNext, Ct) : (this.loadIndex = 0, this.timeoutToken = 0)
					}, this.emojiIsADuplicate = (e, t) => e && t && t.some(t => t.id === e.id), this.saveNext = e => {
						const t = this.getNextTempUploadedImageToSave();
						if (!t) return this.timeoutToken = 0, void(this.loadIndex = 0);
						if (!this.emojiIsADuplicate(t, e)) {
							const e = this.state.emojiData[t.id],
								n = this.props.saveEmoji(t, e.name, this.props.emojiSettings);
							this.setState({
								emojisUploaded: this.state.emojisUploaded || n
							})
						}
						this.loadIndex += 1, this.loadIndex < this.state.localData.length ? this.timeoutToken = window.setTimeout(() => this.saveNext(e), Ct) : (this.loadIndex = 0, this.timeoutToken = 0)
					}, this.onChangeEmojiName = (e, t) => {
						const {
							isSnoomojiSubreddit: n,
							reservedEmojiNames: s
						} = this.props;
						if (t.length > Le.d) return;
						const a = this.state.isReplacing ? this.state.replacingEmoji && this.state.replacingEmoji[e] : this.state.localData[e];
						if (!a) return;
						const r = this.state.emojiData,
							o = r[a.id],
							i = t ? ht(t, s, n) : "";
						r[a.id].emojiNameError = i, r[a.id].name = t;
						const d = _t(r);
						this.setState({
							duplicateNames: d,
							emojiData: {
								...this.state.emojiData,
								[a.id]: {
									...o,
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
						} = this.props, n = {};
						for (const s of this.state.localData) {
							let a = this.state.emojiData[s.id];
							const r = ht(a.name, t, e);
							a.name && !r || (a = {
								...a,
								emojiNameError: r,
								isNameMissing: !a.name
							}), n[s.id] = a
						}
						return {
							emojiData: n
						}
					}, this.onApply = () => {
						const e = this.getValidatedState();
						this.setState(e, () => {
							if (this.canSave()) {
								const e = this.props.emojis[this.props.subredditId].emojis,
									t = [];
								for (const s of this.state.localData) {
									if (s.kind !== Ne.b.TempUploaded) continue;
									this.state.emojiData[s.id].name in e && t.push(s)
								}
								t.length ? (this.setState({
									replacingEmoji: t,
									isReplacing: !0
								}), this.saveNext(t)) : (this.setState({
									isSavingImage: !0
								}), this.props.setIsSaving(!0), this.saveNext());
								const n = Et(Ne.b.TempUploaded, this.state.localData) - t.length;
								n > 0 && (this.props.sendEvent(j("add", n)), this.sendSettingsEvent())
							}
						})
					}, this.sendSettingsEvent = () => {
						const {
							modFlairOnly: e,
							userFlairAllowed: t,
							postFlairAllowed: n
						} = this.props.emojiSettings;
						this.props.sendEvent(O("mods_only", e)), this.props.sendEvent(O("appear_user_flair", t)), this.props.sendEvent(O("appear_post_flair", n))
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
						}), this.props.stopEditing(), this.props.sendEvent(S("dont_replace"))
					}, this.findEmojiIndexById = e => this.state.localData.findIndex(t => t.id === e), this.removeEmoji = e => {
						const {
							isReplacing: t,
							localData: n,
							replacingEmoji: s
						} = this.state;
						let a, r = e;
						t && s && s[e] && (r = this.findEmojiIndexById(s[e].id), (a = s.slice(0)).splice(e, 1), this.setState({
							replacingEmoji: a
						}));
						const o = n[r],
							i = n.slice(0);
						i.splice(r, 1);
						const d = {
							...this.state.emojiData
						};
						delete d[o.id], this.setState({
							duplicateNames: _t(d),
							emojiData: d,
							localData: i
						}), t && s ? 0 === a.length && this.props.returnToAddState() : 0 === i.length && this.props.returnToAddState()
					}, this.retryEmojiUpload = () => {
						this.props.returnToAddState()
					};
					const t = {},
						n = [];
					for (const s of e.images) {
						const e = xt(s);
						t[s.id] = e, e.imageError ? n.push(Object(Ne.l)(s, e.imageError)) : n.push(s)
					}
					this.state = {
						duplicateNames: _t(t),
						emojiData: t,
						emojisUploaded: !1,
						isReplacing: !1,
						isSavingImage: !1,
						localData: n,
						replacingEmoji: null
					}
				}
				UNSAFE_componentWillMount() {
					this.loadIndex = 0, this.tempUploadNext()
				}
				getNextPendingImageToLoad() {
					let e, t = null;
					for (e = this.loadIndex; e < this.state.localData.length; e++) {
						const n = this.state.localData[e];
						if (n.kind === Ne.b.Pending) {
							t = n;
							break
						}
					}
					return this.loadIndex = e, t
				}
				getNextTempUploadedImageToSave() {
					let e, t = null;
					for (e = this.loadIndex; e < this.state.localData.length; e++) {
						const n = this.state.localData[e];
						if (n.kind === Ne.b.TempUploaded) {
							t = n;
							break
						}
					}
					return this.loadIndex = e, t
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = e.getImageUploadsIfModified(this.state.localData);
					if (!t) return;
					let n = !1;
					const {
						isSavingImage: s
					} = this.state, a = {};
					for (const r of t) a[r.id] = this.state.emojiData[r.id], n = n || r.kind === Ne.b.TempUploaded;
					!s || n ? (this.props.setIsSaving(s), this.setState({
						emojiData: a,
						isSavingImage: s,
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
					} = this, n = t.isReplacing ? t.replacingEmoji || [] : t.localData;
					return d.a.createElement(kt, null, d.a.createElement(It, null, t.duplicateNames.length > 0 ? d.a.createElement(St, null, d.a.createElement(Ot, null), a.fbt._("Duplicate names", null, {
						hk: "4kkNr1"
					})) : !t.isReplacing && d.a.createElement(Nt, null, d.a.createElement(yt, null), a.fbt._("Names cannot be edited once added", null, {
						hk: "3f45r5"
					})), d.a.createElement(Q.l, null, t.isReplacing ? d.a.createElement(d.a.Fragment, null, d.a.createElement(Pt, null, a.fbt._("Replacing emojis", null, {
						hk: "4cKike"
					})), d.a.createElement(Mt, null, a.fbt._("These emoji names already exist in your community. Replacing these emojis will not change pre-existing permissions. Do you want to replace them?", null, {
						hk: "3iPBUU"
					}))) : d.a.createElement(Rt, null, a.fbt._("Uploading emojis", null, {
						hk: "7keSV"
					})), d.a.createElement("div", {
						className: t.isReplacing ? void 0 : De.a.emojiDisplays
					}, n.map((e, n) => {
						const s = this.state.emojiData[e.id],
							a = e.kind === Ne.b.FailedToUpload || e.kind === Ne.b.Invalid,
							r = t.replacingEmoji && !t.replacingEmoji.find(t => t.id === e.id);
						if (t.isSavingImage && (a || r)) return;
						const o = vt(e, s);
						return d.a.createElement(Se.a, {
							key: e.id
						}, d.a.createElement(at, {
							emojiName: s.name,
							errorText: o,
							fileName: s.fileName,
							imageData: e,
							index: n,
							isDuplicate: t.duplicateNames.includes(s.name),
							isSaving: t.isSavingImage,
							onCancel: this.removeEmoji,
							onChangeEmojiName: this.onChangeEmojiName
						}))
					})), !t.isReplacing && d.a.createElement(Tt, null, t.isSavingImage ? a.fbt._("{savedCount} out of {savedTotal} saved", [a.fbt._param("savedCount", Et(Ne.b.Uploaded, t.localData).toString()), a.fbt._param("savedTotal", t.localData.length.toString())], {
						hk: "3v1E9N"
					}) : a.fbt._("{uploadedCount} out of {uploadedTotal} uploaded", [a.fbt._param("uploadedCount", Et(Ne.b.TempUploaded, t.localData).toString()), a.fbt._param("uploadedTotal", t.localData.length.toString())], {
						hk: "41qbSa"
					})))), d.a.createElement(Q.g, null, d.a.createElement(wt, {
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
			var Dt = Object(Re.a)(Lt(Ft), u.q),
				Ut = n("./src/reddit/actions/imageUploads.ts"),
				Bt = n("./src/reddit/selectors/imageUploads.ts");
			const Ht = m.a.div("UploaderContainer", De.a),
				Wt = m.a.wrapped(Ht, "editEmojiDisplay", De.a),
				qt = Object(c.c)({
					reduxImage: (e, {
						pendingImage: t
					}) => {
						const n = Object(Bt.b)(e),
							s = t && t.id;
						return s && n[s] || void 0
					}
				});
			class Gt extends d.a.Component {
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
						emoji: n
					} = this.props, s = xt(e), a = Object(Ne.l)(e, s.imageError), r = s.imageError ? a : t || e, o = vt(r, s);
					return !o && r.kind === Ne.b.TempUploaded || r.kind === Ne.b.Uploaded ? null : d.a.createElement(Wt, null, d.a.createElement(at, {
						emojiName: n.name,
						errorText: o,
						fileName: s.fileName,
						handleRetry: this.onCancelAndRetry,
						imageData: r,
						index: 0,
						isSaving: !1,
						onCancel: this.onCancelAndRetry
					}))
				}
			}
			var Kt = Object(l.b)(qt, e => ({
				uploadImage: t => e(Object(u.q)(t)),
				cancelUpload: t => e(Object(Ut.h)(t))
			}))(Gt);

			function Vt() {
				return (Vt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const zt = 32,
				Xt = 128,
				Qt = 64,
				Jt = 100,
				Yt = m.a.div("appearsIn", Pe.a),
				Zt = m.a.wrapped(je.a, "checkbox", Pe.a),
				$t = m.a.span("checkboxText", Pe.a),
				en = m.a.wrapped(Y.a, "closeButton", Pe.a),
				tn = m.a.div("imageTitle", Pe.a),
				nn = m.a.wrapped(C.l, "modalAddButton", Pe.a),
				sn = m.a.wrapped(Q.e, "modalBody", Pe.a),
				an = m.a.wrapped(Q.a, "modalCancelButton", Pe.a),
				rn = m.a.wrapped(Q.l, "modalMain", Pe.a),
				on = m.a.wrapped(oe, "modFlairOnlyToggle", Pe.a),
				dn = m.a.wrapped(we.a, "modIcon", Pe.a),
				ln = m.a.li("modProTip", Pe.a),
				cn = m.a.div("modProTips", Pe.a),
				mn = m.a.div("modProTipTitle", Pe.a),
				un = m.a.div("proTip", Pe.a),
				pn = m.a.ul("tipList", Pe.a),
				bn = e => !!e && (e.kind === Ne.b.Pending ? !!xt(e).imageError : e.kind === Ne.b.FailedToUpload);
			var hn;
			! function(e) {
				e[e.AddState = 0] = "AddState", e[e.SingleEmojiEditState = 1] = "SingleEmojiEditState", e[e.BulkUploadState = 2] = "BulkUploadState"
			}(hn || (hn = {}));
			const gn = m.a.wrapped(Ie.a, "emojiDisplay", Pe.a),
				fn = m.a.div("emojiNameDisplay", Pe.a),
				xn = m.a.wrapped(P.a, "imageDisplay", Pe.a),
				En = e => d.a.createElement(gn, null, d.a.createElement(xn, {
					backgroundImage: e.url
				}), d.a.createElement(fn, null, e.emojiName)),
				vn = Object(c.c)({
					emojisCustomSize: (e, t) => Object($.t)(e, {
						subredditName: t.subreddit.name
					}).emojisCustomSize
				}),
				_n = Object(l.b)(vn, (e, {
					emoji: t,
					isSnoomoji: n,
					subreddit: s
				}) => ({
					saveEmoji: (t, n, a) => e(u.p({
						imageData: a,
						subredditId: s.id,
						emojiName: t,
						settings: n
					})),
					saveEmojiSettings: a => {
						t && e(u.o(t.name, n, a, s.id))
					},
					saveEmojiSuccessToast: () => e(ye.f({
						kind: Te.b.SuccessCommunityGreen,
						text: a.fbt._("Emoji edits saved!", null, {
							hk: "3luBMA"
						})
					}))
				}));
			class Cn extends d.a.Component {
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
						const n = this.state.emojiState === hn.SingleEmojiEditState;
						n && this.clearImageData(), t = Array.isArray(e) ? n ? e.slice(0, 1) : e.slice(0, Jt) : [e];
						const s = await Promise.all(t.map(Ne.f));
						n ? this.setState({
							imageData: s
						}) : this.setState({
							emojiState: hn.BulkUploadState,
							imageData: s
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
							emojiState: hn.AddState
						}), this.clearImageData()
					}, this.sendToggleEvent = (e, t) => this.props.sendEvent(O(e, t)), this.modFlairSettingHasChanged = () => this.props.emoji && this.props.emoji.modFlairOnly !== this.state.settings.modFlairOnly, this.userFlairSettingHasChanged = () => this.props.emoji && this.props.emoji.userFlairAllowed !== this.state.settings.userFlairAllowed, this.postFlairSettingHasChanged = () => this.props.emoji && this.props.emoji.postFlairAllowed !== this.state.settings.postFlairAllowed, this.settingsHaveBeenChanged = () => this.modFlairSettingHasChanged() || this.userFlairSettingHasChanged() || this.postFlairSettingHasChanged(), this.sendTelemetryEvents = () => {
						const {
							modFlairOnly: e,
							userFlairAllowed: t,
							postFlairAllowed: n
						} = this.state.settings;
						this.modFlairSettingHasChanged() && this.sendToggleEvent("mods_only", e), this.userFlairSettingHasChanged() && this.sendToggleEvent("appear_user_flair", t), this.postFlairSettingHasChanged() && this.sendToggleEvent("appear_post_flair", n)
					}, this.saveEmoji = async () => {
						const {
							props: e,
							state: t
						} = this, n = {
							modFlairOnly: t.settings.modFlairOnly,
							postFlairAllowed: t.settings.postFlairAllowed,
							userFlairAllowed: t.settings.userFlairAllowed
						};
						if (this.setIsSaving(!0), e.emoji) {
							if (e.isSnoomoji || e.emoji && !t.emojiDraftImage) e.saveEmojiSettings(n);
							else if (e.emoji && t.emojiDraftImage && t.emojiDraftImage.kind === Ne.b.TempUploaded) {
								await e.saveEmoji(e.emoji.name, n, t.emojiDraftImage) && e.saveEmojiSuccessToast()
							}
							this.sendTelemetryEvents()
						}
						this.closeModal(), this.setIsSaving(!1)
					}, this.setIsSaving = e => this.setState({
						isSaving: e
					}), this.state = {
						emojiState: e.emoji ? hn.SingleEmojiEditState : hn.AddState,
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
						isSnoomoji: n,
						sendEvent: s,
						subreddit: r
					} = this.props, {
						emojiDraftImage: o,
						emojiState: i,
						imageData: l,
						isSaving: c,
						settings: m
					} = this.state, u = {
						emojiSettings: m,
						stopEditing: this.closeModal,
						subredditId: r.id
					}, p = 2 * (t ? t[0] : zt), b = 2 * (t ? t[1] : zt), h = l.length > 0 ? l[0] : void 0, g = h && h.url, f = o && o.url, x = g || f, E = o && o.kind === Ne.b.TempUploaded, v = bn(h || o), _ = i !== hn.SingleEmojiEditState || (!this.settingsHaveBeenChanged() && !E || v);
					return d.a.createElement(sn, null, d.a.createElement(Q.i, null, d.a.createElement(Z.a, null, d.a.createElement(Q.q, null, e ? a.fbt._("Edit emoji", null, {
						hk: "4awCz5"
					}) : a.fbt._("Add new emojis", null, {
						hk: "2DrJ62"
					})), d.a.createElement(en, {
						disabled: c,
						onClick: this.closeModal
					}, d.a.createElement(Q.b, null)))), (i === hn.AddState || i === hn.SingleEmojiEditState) && d.a.createElement(d.a.Fragment, null, i === hn.AddState && d.a.createElement(cn, null, d.a.createElement(mn, null, d.a.createElement(dn, null), a.fbt._("Mod pro tips!", null, {
						hk: "30l9bq"
					})), d.a.createElement(pn, null, d.a.createElement(ln, null, a.fbt._("Emoji names will use the image file name and will be editable once uploaded", null, {
						hk: "2fvAIQ"
					})), d.a.createElement(ln, null, a.fbt._("You can upload up to {maxUpload} emojis at once", [a.fbt._param("maxUpload", Jt.toString())], {
						hk: "4aMYoX"
					})))), d.a.createElement(rn, null, i === hn.SingleEmojiEditState && e && d.a.createElement(En, {
						emojiName: e.name,
						url: x || e.url
					}), !n && d.a.createElement(d.a.Fragment, null, d.a.createElement(Se.i, null, d.a.createElement(tn, null, e ? a.fbt._("Image", null, {
						hk: "3fzI70"
					}) : a.fbt._("Images", null, {
						hk: "3SapUk"
					})), e && i === hn.SingleEmojiEditState && h && d.a.createElement(Kt, Vt({}, u, {
						emoji: e,
						onRetryUpload: this.clearImageData,
						pendingImage: h,
						onImageChange: this.onEditingImageChange
					})), (!l.length || E) && !(e && v) && d.a.createElement(Oe.b, {
						label: a.fbt._("Drag and Drop or Upload Image", null, {
							hk: "3y5WvP"
						}),
						onChange: this.handleMultiImageInput,
						multiple: !0
					}), d.a.createElement(Se.b, null, a.fbt._("Max upload dimensions {maxEmojiWidth} x {maxEmojiHeight}px", [a.fbt._param("maxEmojiWidth", Xt.toString()), a.fbt._param("maxEmojiHeight", Xt.toString())], {
						hk: "yal28"
					})), d.a.createElement(Se.b, null, a.fbt._("Max file size {MAX_FILE_SIZE}KB", [a.fbt._param("MAX_FILE_SIZE", Qt.toString())], {
						hk: "1t1L0f"
					}))), d.a.createElement(un, null, a.fbt._("Recommended upload dimensions: {recommendedWidth} x {recommendedHeight}px", [a.fbt._param("recommendedWidth", p.toString()), a.fbt._param("recommendedHeight", b.toString())], {
						hk: "35CqDV"
					}))), d.a.createElement(Yt, null, a.fbt._("Appears in:", null, {
						hk: "3SZP5W"
					})), d.a.createElement(Zt, {
						name: "postFlair",
						onChange: this.handleTogglePostFlair,
						value: m.postFlairAllowed
					}, d.a.createElement($t, null, a.fbt._("Post flair", null, {
						hk: "mAzeZ"
					}))), d.a.createElement(Zt, {
						name: "userFlair",
						onChange: this.handleToggleUserFlair,
						value: m.userFlairAllowed
					}, d.a.createElement($t, null, a.fbt._("User flair", null, {
						hk: "qVf7x"
					}))), d.a.createElement(on, {
						description: "Only appears in post and user flair that are restricted for mod use.",
						on: m.modFlairOnly,
						onToggle: this.handleModExclusiveToggle,
						title: "Mod only"
					})), d.a.createElement(Q.g, null, d.a.createElement(an, {
						disabled: c,
						onClick: this.closeModal
					}, a.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), d.a.createElement(nn, {
						disabled: _,
						onClick: this.saveEmoji
					}, e ? a.fbt._("Save", null, {
						hk: "4yMsMq"
					}) : a.fbt._("Add", null, {
						hk: "2wi3d4"
					})))), i === hn.BulkUploadState && d.a.createElement(Dt, Vt({}, u, {
						images: l,
						returnToAddState: this.returnToAdd,
						sendEvent: s,
						setIsSaving: this.setIsSaving
					})))
				}
			}
			var kn = Object(z.a)(_n(Cn));
			const yn = m.a.wrapped(w.a, "alertIcon", M.a),
				On = m.a.span("appearsTitle", M.a),
				Sn = m.a.span("imageTitle", M.a),
				jn = m.a.span("nameTitle", M.a),
				wn = m.a.span("permissionsTitle", M.a),
				In = m.a.wrapped(C.o, "settingsButton", M.a),
				Nn = m.a.wrapped(f.a, "titleTooltip", M.a),
				Tn = m.a.wrapped(E.a, "topRow", M.a),
				Mn = Object(c.c)({
					emojis: N.d,
					isConfirmModalOpen: Object(I.b)("EmojiManager--DeleteEmojiConfirmation--Modal"),
					isEmojisEnabled: (e, t) => Object(N.b)(e, t.subreddit.name),
					isEmojiSettingsModalOpen: Object(I.b)("EmojiManager--Settings--Modal"),
					isUploadEmojisModalOpen: Object(I.b)("EmojiManager--UploadEmojis--Modal")
				}),
				Pn = Object(l.b)(Mn, (e, {
					subreddit: t
				}) => ({
					deleteEmoji: n => e(u.j(n, t.id)),
					toggleDeleteConfirmationModal: () => e(Object(p.i)("EmojiManager--DeleteEmojiConfirmation--Modal")),
					toggleSettingsModal: () => e(Object(p.i)("EmojiManager--Settings--Modal")),
					toggleUploadEmojisModal: () => e(Object(p.i)("EmojiManager--UploadEmojis--Modal"))
				}));
			class Rn extends d.a.Component {
				constructor(e) {
					super(e), this.onClickEditEmoji = (e, t) => {
						this.props.toggleUploadEmojisModal(), this.setState({
							emojiToEdit: e,
							isSnoomoji: t
						})
					}, this.onConfirmDelete = () => {
						this.props.deleteEmoji(this.state.emojiNameToDelete), this.setState({
							emojiNameToDelete: ""
						}), this.props.sendEvent(S("delete"))
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
						isEmojisEnabled: n,
						isEmojiSettingsModalOpen: r,
						isUploadEmojisModalOpen: i,
						sendEvent: l,
						subreddit: c,
						toggleDeleteConfirmationModal: m,
						toggleSettingsModal: u,
						toggleUploadEmojisModal: p
					} = this.props;
					return d.a.createElement(d.a.Fragment, null, d.a.createElement(x.c, null, d.a.createElement(In, {
						onClick: u
					}, a.fbt._("Emoji settings", null, {
						hk: "2k202A"
					})), d.a.createElement(C.l, {
						onClick: p
					}, a.fbt._("Add emoji", null, {
						hk: "DTe8a"
					}))), d.a.createElement(x.a, null, d.a.createElement(x.b, null, a.fbt._("Emoji management", null, {
						hk: "6xN5s"
					}), d.a.createElement(g.a, {
						linkUrl: `${s.a.redditModHelpUrl}/hc/en-us/articles/360010560371`
					})), !n && d.a.createElement(h.a, {
						className: M.a.emojisDisabled,
						color: _.a.quarantine,
						icon: d.a.createElement(yn, null),
						subtitle: a.fbt._("Emojis in flairs will not be displayed, and existing emojis will appear as plain text.", null, {
							hk: "2WaMtH"
						}),
						title: a.fbt._("Emojis have been disabled for this community", null, {
							hk: "7LNIO"
						})
					}), d.a.createElement(Tn, null, d.a.createElement(Sn, null, a.fbt._("Image", null, {
						hk: "1rlqjH"
					})), d.a.createElement(jn, null, a.fbt._("Name", null, {
						hk: "1ugGFI"
					})), d.a.createElement(On, null, a.fbt._("Appears in", null, {
						hk: "3K8vjU"
					}), d.a.createElement(Nn, {
						text: a.fbt._("Set emoji to appear in post flair or user flair", null, {
							hk: "4cg4Se"
						})
					})), d.a.createElement(wn, null, a.fbt._("Settings", null, {
						hk: "2CRrAq"
					}), d.a.createElement(Nn, {
						text: a.fbt._("Set emoji to only appear in mod-only flair", null, {
							hk: "2yS10f"
						})
					}))), e[c.id] && o()(e[c.id].emojis, e => d.a.createElement(G, {
						emoji: e,
						enabled: !0,
						isSnoomoji: !1,
						key: e.name,
						onEdit: this.onClickEditEmoji,
						onRemove: this.handleRemoveEmoji
					})), e[c.id] && o()(e[c.id].snoomojis, e => d.a.createElement(G, {
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
							hk: "4lt26q"
						}),
						headerText: a.fbt._("Delete emoji?", null, {
							hk: "3VBsS8"
						}),
						modalText: a.fbt._("Do you wish to delete this emoji?", null, {
							hk: "2sPCxc"
						}),
						trackClick: () => {},
						withOverlay: !0
					}), r && d.a.createElement(ke, {
						sendEvent: l,
						subreddit: c,
						toggleModal: u,
						withOverlay: !0
					}), i && d.a.createElement(kn, {
						emoji: this.state.emojiToEdit,
						isSnoomoji: this.state.isSnoomoji,
						sendEvent: l,
						subreddit: c,
						toggleModal: p,
						withOverlay: !0
					})))
				}
			}
			t.a = Pn(Object(v.c)(Rn))
		},
		"./src/reddit/components/ModHub/InfoLink/index.m.less": function(e, t, n) {
			e.exports = {
				linkContainer: "_3-yXs2bljbMxTPT6hDZU1I",
				infoIcon: "_2Eloqzd6Vfz9eGsjyzVfsf"
			}
		},
		"./src/reddit/components/ModHub/InfoLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/higherOrderComponents/asTooltip.tsx"),
				i = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/icons/fonts/Info/index.tsx"),
				l = n("./src/reddit/components/ModHub/InfoLink/index.m.less"),
				c = n.n(l);
			const m = Object(o.a)(i.b),
				u = ["center", "top"],
				p = ["center", "bottom"];
			class b extends r.a.Component {
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
					return r.a.createElement("a", {
						className: c.a.linkContainer,
						href: this.props.linkUrl,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						ref: this.setTooltipTargetRef,
						target: "_blank",
						rel: "noopener noreferrer"
					}, r.a.createElement(d.a, {
						className: c.a.infoIcon
					}), r.a.createElement(m, {
						isOpen: this.state.showTooltip,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: u,
						text: s.fbt._("Learn more", null, {
							hk: "3zoGtq"
						}),
						tooltipPosition: p
					}))
				}
			}
			t.a = b
		},
		"./src/reddit/components/ModHub/InfoTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				iconContainer: "_39qwCVfS_zadCI7gaPX3MI",
				textTooltip: "_1yEjLpHWBPakuE9kTnIp_w"
			}
		},
		"./src/reddit/components/ModHub/InfoTooltip/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/higherOrderComponents/asTooltip.tsx"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/icons/fonts/Info/index.tsx"),
				l = n("./src/reddit/components/ModHub/InfoTooltip/index.m.less"),
				c = n.n(l);
			const m = Object(r.a)(i.a),
				u = ["center", "bottom"],
				p = ["center", "top"];
			class b extends a.a.Component {
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
					const {
						props: e
					} = this;
					return a.a.createElement("span", {
						className: c.a.iconContainer,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						ref: this.setTooltipTargetRef
					}, a.a.createElement(d.a, null), a.a.createElement(m, {
						className: Object(o.a)(e.className, c.a.textTooltip),
						children: e.children,
						isOpen: this.state.showTooltip,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: u,
						text: e.text,
						tooltipPosition: p
					}))
				}
			}
			t.a = b
		},
		"./src/reddit/components/ModHub/ModHubNav/NavItem.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/InternalLink/index.tsx"),
				d = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/components/ModHub/ModHubNav/index.m.less"),
				c = n.n(l);
			const m = () => r.a.createElement("div", {
				className: c.a.newLinkIndicator
			}, s.fbt._("New", null, {
				hk: "BnhHE"
			}));
			t.b = e => e.path ? e.isExternal ? r.a.createElement("a", {
				className: c.a.navLinkStyles,
				href: e.path,
				onClick: e.onClick,
				target: "_blank",
				rel: "noopener noreferrer"
			}, e.label, r.a.createElement(d.a, {
				name: "external_link",
				className: c.a.outboundLinkIcon
			})) : r.a.createElement(i.a, {
				className: Object(o.a)(c.a.navLinkStyles, {
					[c.a.activeLink]: !!e.isActive
				}),
				to: e.path,
				onClick: e.onClick
			}, e.label, e.isNew && r.a.createElement(m, null), e.isBeta && r.a.createElement("div", {
				className: c.a.newLinkIndicator
			}, s.fbt._("Beta", null, {
				hk: "z4XPh"
			})), e.isUpdated && r.a.createElement("div", {
				className: c.a.updatedLinkIndicator
			}, s.fbt._("Updated", null, {
				hk: "2xkGR3"
			})), e.showInboundArrow && r.a.createElement(d.a, {
				name: "right",
				className: c.a.inboundLinkIcon
			})) : r.a.createElement("button", {
				className: c.a.navLinkStyles,
				onClick: e.onClick
			}, e.label, e.isNew && r.a.createElement(m, null), e.isBeta && r.a.createElement("div", {
				className: c.a.newLinkIndicator
			}, s.fbt._("Beta", null, {
				hk: "z4XPh"
			})), e.isUpdated && r.a.createElement("div", {
				className: c.a.updatedLinkIndicator
			}, s.fbt._("Updated", null, {
				hk: "2xkGR3"
			})))
		},
		"./src/reddit/components/ModHub/ModHubNav/WikiNavPanel/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModHub/ModHubNav/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModHub/PaginationButtons/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2QinjfjfDTG6Df4_Tb_eRN",
				iconStyles: "_1MvzgnzkNefTZKkd4A5o1Y",
				arrowLeft: "_1Hul4w6ANujC9NsFF6_j4f"
			}
		},
		"./src/reddit/components/ModHub/PaginationButtons/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/InternalLink/index.tsx"),
				i = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				d = n("./src/reddit/components/ModHub/PaginationButtons/index.m.less"),
				l = n.n(d);
			t.a = e => a.a.createElement("div", {
				className: l.a.container
			}, e.prevButtonEnabled && a.a.createElement(o.a, {
				to: e.prevTo,
				onClick: e.prevButtonOnClick
			}, a.a.createElement(i.a, {
				className: Object(r.a)(l.a.iconStyles, l.a.arrowLeft)
			})), e.nextButtonEnabled && a.a.createElement(o.a, {
				to: e.nextTo,
				onClick: e.nextButtonOnClick
			}, a.a.createElement(i.a, {
				className: l.a.iconStyles
			})))
		},
		"./src/reddit/components/ModHub/StyledComponents/index.m.less": function(e, t, n) {
			e.exports = {
				ContentContainer: "_3mbqgd00Kdlh6nVVVhZYdS",
				contentContainer: "_3mbqgd00Kdlh6nVVVhZYdS",
				PageTitle: "_3rnK1gNGg1hiVaiRd9Hidl",
				pageTitle: "_3rnK1gNGg1hiVaiRd9Hidl",
				TopBar: "_2YY5qLRbI5q6_0JQVKiGt_",
				topBar: "_2YY5qLRbI5q6_0JQVKiGt_"
			}
		},
		"./src/reddit/components/ModHub/StyledComponents/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/ModHub/StyledComponents/index.m.less"),
				r = n.n(a);
			const o = s.a.div("ContentContainer", r.a),
				i = s.a.div("PageTitle", r.a),
				d = s.a.div("TopBar", r.a)
		},
		"./src/reddit/components/ModModeBanners/index.m.less": function(e, t, n) {
			e.exports = {
				banner: "_3FJq-cq7boH_EAWZsUPWY0",
				icon: "_1QOFlf2Sv2RU3pPqUKD6UD",
				staticBanner: "_14wV0QXuPq6IJL_pdl8sQs"
			}
		},
		"./src/reddit/components/ModModeFilteredReason/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return d
			}));
			var s = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/models/ModQueueTrigger/index.ts");
			const r = e => "string" == typeof e.bannedBy && e.bannedBy === s.l || !!Object(a.b)(e, a.a.AUTOMOD),
				o = e => !!e.bannedBy && !!e.collapsedBecauseCrowdControl,
				i = e => !!e.bannedBy && !!Object(a.b)(e, a.a.HATEFUL_CONTENT),
				d = e => r(e) || o(e) || i(e)
		},
		"./src/reddit/components/ModModeFilteredReason/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/reddit/components/ModModeBanners/index.m.less"),
				d = n.n(i);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js"), c = () => o.a.createElement("div", {
				className: Object(a.a)(d.a.banner, d.a.staticBanner)
			}, l._("Loading filter reason…", null, {
				hk: "K3Ipd"
			})), m = Object(s.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ModModeBanners").then(n.bind(null, "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx"
				}
			}, {
				fallback: o.a.createElement(c, null),
				ssr: !1
			});
			t.a = m
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/reddit/components/ModModeBanners/index.m.less"),
				d = n.n(i);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js"), c = () => o.a.createElement("div", {
				className: Object(a.a)(d.a.banner, d.a.staticBanner)
			}, l._("Loading reports…", null, {
				hk: "4gwdQw"
			})), m = Object(s.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ModModeBanners").then(n.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeReports/_ModModeReports.tsx"
				}
			}, {
				fallback: o.a.createElement(c, null),
				ssr: !1
			});
			t.a = m
		},
		"./src/reddit/components/ModerationLog/FilterByDropdowns/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModerationLog/ModerationLogItem/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModerationLog/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModerationLog/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/endpoints/subredditModeration/moderationLog.ts"),
				m = n("./src/reddit/helpers/graphql/normalizeModerationLogFromGql/index.ts"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				p = n("./src/reddit/actions/moderationLog/constants.ts");
			const b = Object(l.a)(p.a);
			var h = n("./node_modules/react-router-redux/es/index.js"),
				g = n("./src/higherOrderComponents/asTooltip.tsx"),
				f = n("./src/reddit/actions/tooltip.ts"),
				x = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/constants/keycodes.ts"));
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
					ENABLE_POST_CROWD_CONTROL_FILTER: () => a.fbt._("Enable post crowd control filter", null, {
						hk: "1uzJGq"
					}),
					DISABLE_POST_CROWD_CONTROL_FILTER: () => a.fbt._("Disable post crowd control filter", null, {
						hk: "UrQCB"
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
			var O = n("./src/reddit/controls/InternalLink/index.tsx"),
				S = n("./src/lib/addQueryParams/index.ts"),
				j = n("./src/lib/stripQueryParams/index.ts");
			const w = e => {
				const t = e.action && "ALL_ACTIONS" !== e.action ? e.action : null,
					n = e.moderator || null,
					s = e.endCursor || null,
					a = e.startCursor || null;
				return Object(S.a)(Object(j.a)(e.currentPageUrl), {
					action: t,
					moderator: n,
					after: s,
					before: a
				})
			};
			var I = n("./src/reddit/selectors/telemetry.ts");
			const N = e => ({
					subreddit: I.ib(e),
					userSubreddit: I.rb(e)
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
			var A = n("./src/reddit/components/ModerationLog/FilterByDropdowns/index.m.less"),
				L = n.n(A);
			class F extends o.a.Component {
				constructor(e) {
					super(e), this.buildModLogUrlForAction = e => {
						const {
							currentPageUrl: t,
							moderator: n
						} = this.props;
						return w({
							currentPageUrl: t,
							moderator: n,
							action: e
						})
					}, this.onChangeFilterText = e => {
						const t = e.currentTarget.value,
							n = this.getFilteredActions(t);
						this.setState({
							currentInputText: t,
							filteredActions: n
						})
					}, this.onKeyDown = e => {
						if (e.which === x.a.Enter) {
							const {
								filteredActions: t
							} = this.state, n = t.length ? this.buildModLogUrlForAction(t[0]) : null;
							n && (this.props.onChangeUrl(n), e.preventDefault())
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
						const n = e.toLowerCase();
						t = t.filter(e => _[e]().toString().toLowerCase().includes(n))
					}
					return t
				}
				render() {
					const {
						className: e
					} = this.props, {
						filteredActions: t
					} = this.state;
					return o.a.createElement("div", {
						role: "menu",
						className: e
					}, o.a.createElement("input", {
						"aria-label": a.fbt._("Filter", null, {
							hk: "UqHZD"
						}),
						className: L.a.filter,
						placeholder: a.fbt._("Filter", null, {
							hk: "3sxP3l"
						}),
						onChange: this.onChangeFilterText,
						onKeyDown: this.onKeyDown
					}), t.map(e => o.a.createElement(O.a, {
						className: L.a.dropdownRow,
						onClick: () => this.onActionClick(e),
						to: this.buildModLogUrlForAction(e)
					}, _[e]())))
				}
			}
			var D = F,
				U = n("./src/lib/constants/index.ts"),
				B = n("./src/lib/objectSelector/index.ts"),
				H = n("./src/reddit/models/SubredditModeration/ModerationLog/index.ts");
			const W = Object(B.a)((e, {
					subredditId: t
				}) => {
					let n = [];
					const s = q(e),
						a = G(e);
					if (s && a) {
						const r = Object(H.a)(t, s, a),
							o = e.pages.modHub.moderationLog.actions.itemOrder[t] && e.pages.modHub.moderationLog.actions.itemOrder[t][r];
						o && (n = o.map(n => e.pages.modHub.moderationLog.actions.models[t][n]))
					}
					return n
				}),
				q = e => e.pages.modHub.moderationLog.endCursor,
				G = e => e.pages.modHub.moderationLog.startCursor,
				K = ({
					name: e,
					urlPath: t
				}) => o.a.createElement(O.a, {
					className: L.a.dropdownRow,
					to: t
				}, e),
				V = "a",
				z = Object(d.c)({
					allModerators: (e, {
						subredditId: t
					}) => ((e, t) => e.pages.modHub.moderationLog.moderators[t] || [])(e, t)
				});
			class X extends o.a.Component {
				constructor(e) {
					super(e), this.onChangeFilterText = e => {
						const t = e.currentTarget.value,
							n = this.getList(t);
						this.setState({
							currentInputText: t,
							filteredList: n
						})
					}, this.onKeyDown = e => {
						if (e.which === x.a.Enter) {
							const {
								filteredList: t
							} = this.state, n = t.length ? t[0].url : "";
							n && (this.props.onChangeUrl(n), e.preventDefault())
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
						currentPageUrl: n
					} = this.props, s = e => w({
						currentPageUrl: n,
						action: t,
						moderator: e
					}), r = [{
						url: s(""),
						displayText: `${a.fbt._("All Moderators",null,{hk:"3vmWA8"})}`
					}, {
						url: s(V),
						displayText: `${a.fbt._("Admins",null,{hk:"4mKRNI"})}`
					}, {
						url: s(U.l),
						displayText: `${a.fbt._("AutoModerator",null,{hk:"4wxc1W"})}`
					}, ...this.props.allModerators.map(e => ({
						url: s(e.name),
						displayText: e.name
					}))];
					if (e) {
						const t = e.toLowerCase();
						return r.filter(e => e.displayText.toLowerCase().includes(t))
					}
					return r
				}
				render() {
					const {
						className: e
					} = this.props, {
						filteredList: t
					} = this.state;
					return o.a.createElement("div", {
						role: "menu",
						className: e,
						onClick: this.onDropdownClick
					}, o.a.createElement("input", {
						"aria-label": a.fbt._("Filter", null, {
							hk: "1qnOD5"
						}),
						className: L.a.filter,
						placeholder: a.fbt._("Filter", null, {
							hk: "1sWvOA"
						}),
						onChange: this.onChangeFilterText,
						onKeyDown: this.onKeyDown
					}), t.map((e, t) => o.a.createElement(K, {
						key: t,
						name: e.displayText,
						urlPath: e.url
					})))
				}
			}
			var Q = Object(i.b)(z)(X),
				J = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Y = n("./src/reddit/controls/Dropdown/index.tsx"),
				Z = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				$ = n("./src/reddit/selectors/tooltip.ts");
			const ee = "mod-log-action-filter-dropdown",
				te = "mod-log-moderator-filter-dropdown",
				ne = Object(g.a)(Y.a),
				se = Object(d.c)({
					isActionFilterDropdownOpen: Object($.b)(ee),
					isModeratorFilterDropdownOpen: Object($.b)(te)
				});
			class ae extends o.a.Component {
				constructor() {
					super(...arguments), this.getContainerText = e => {
						const {
							action: t,
							moderator: n
						} = this.props;
						if (e === v.MODERATOR) {
							let e = n;
							return n === V && (e = a.fbt._("Admins", null, {
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
						isActionFilterDropdownOpen: n,
						isModeratorFilterDropdownOpen: s,
						moderator: r,
						subredditId: i
					} = this.props;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: L.a.container,
						onClickCapture: this.stopPropagation
					}, o.a.createElement("button", {
						"aria-expanded": s,
						"aria-label": a.fbt._("Start typing to filter moderators or use up and down to select.", null, {
							hk: "4ff0MW"
						}),
						className: L.a.selector,
						id: te,
						onClick: this.openModFilterDropdown,
						role: "navigation"
					}, o.a.createElement("span", {
						className: L.a.containerText
					}, this.getContainerText(v.MODERATOR)), o.a.createElement(Z.a, null)), o.a.createElement(ne, {
						tooltipId: te,
						isOpen: s
					}, o.a.createElement(Q, {
						action: e,
						className: L.a.listContainer,
						currentPageUrl: t,
						moderator: r,
						onChangeUrl: this.props.pushUrl,
						sendEvent: this.props.sendEvent,
						subredditId: i
					}))), o.a.createElement("div", {
						className: L.a.container,
						onClickCapture: this.stopPropagation
					}, o.a.createElement("button", {
						"aria-expanded": n,
						"aria-label": a.fbt._("Start typing to filter the mod actions or use up and down to select.", null, {
							hk: "32A4KB"
						}),
						className: L.a.selector,
						id: ee,
						onClick: this.openActionFilterDropdown,
						role: "navigation"
					}, o.a.createElement("span", {
						className: L.a.containerText
					}, this.getContainerText(v.ACTION)), o.a.createElement(Z.a, null)), o.a.createElement(ne, {
						tooltipId: ee,
						isOpen: n
					}, o.a.createElement(D, {
						action: e,
						className: L.a.listContainer,
						currentPageUrl: t,
						moderator: r,
						onChangeUrl: this.props.pushUrl,
						sendEvent: this.props.sendEvent
					}))))
				}
			}
			var re = Object(i.b)(se, e => ({
					onOpenDropdown: t => e(Object(f.h)({
						tooltipId: t
					})),
					pushUrl: t => e(Object(h.b)(t))
				}))(Object(J.c)(ae)),
				oe = n("./node_modules/lodash/noop.js"),
				ie = n.n(oe),
				de = n("./src/reddit/components/AuthorLink/index.tsx"),
				le = n("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				ce = n("./src/reddit/components/HumanDate/index.tsx"),
				me = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				ue = n("./src/reddit/models/User/index.ts"),
				pe = (n("./src/lib/assertNever.ts"), n("./src/lib/sentry/index.ts"));
			var be = n("./src/reddit/icons/fonts/Comment/index.tsx"),
				he = n("./src/reddit/icons/svgs/Collection/index.tsx"),
				ge = n("./src/reddit/icons/svgs/Event/index.tsx"),
				fe = n("./src/reddit/icons/svgs/Gild/index.tsx"),
				xe = n("./src/reddit/icons/svgs/ModLogPosts/index.tsx"),
				Ee = n("./src/reddit/icons/svgs/Negative/index.tsx"),
				ve = n("./src/reddit/icons/svgs/Positive/index.tsx"),
				_e = n("./src/reddit/icons/svgs/Redditor/index.tsx"),
				Ce = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				ke = n("./src/reddit/icons/svgs/Tag/index.tsx"),
				ye = n("./src/reddit/icons/svgs/Wiki/index.tsx"),
				Oe = n("./src/reddit/models/Comment/index.ts"),
				Se = n("./src/reddit/models/FeedElement/index.ts"),
				je = n("./src/reddit/components/ModerationLog/ModerationLogItem/index.m.less"),
				we = n.n(je);
			const Ie = ({
					action: e,
					urlPath: t
				}) => {
					const n = (e => {
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
								case "ENABLE_POST_CROWD_CONTROL_FILTER":
								case "DISABLE_POST_CROWD_CONTROL_FILTER":
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
						s = e.target && e.target.__typename,
						a = s === Oe.d.Comment || Oe.d.DeletedComment;
					let r;
					switch (n && n.type) {
						case k.AWARD:
							r = o.a.createElement(fe.a, {
								className: we.a.icon
							});
							break;
						case k.COMMENT:
							r = o.a.createElement(be.a, null);
							break;
						case k.FLAIR:
							r = o.a.createElement(ke.a, {
								className: we.a.icon
							});
							break;
						case k.POST:
							r = o.a.createElement(xe.a, {
								className: we.a.icon
							});
							break;
						case k.REDDITOR:
							r = o.a.createElement(_e.a, {
								className: we.a.icon
							});
							break;
						case k.SETTINGS:
							r = o.a.createElement(Ce.a, {
								className: we.a.icon
							});
							break;
						case k.WIKI:
							r = o.a.createElement(ye.a, {
								className: we.a.icon
							});
							break;
						case k.COLLECTION:
							r = o.a.createElement(he.a, {
								className: we.a.icon
							});
							break;
						case k.EVENT:
							r = o.a.createElement(ge.a, {
								className: we.a.icon
							});
							break;
						case k.MULTIPLE:
							a && (r = o.a.createElement(be.a, null)), s === Se.a.SubredditPost && (r = o.a.createElement(xe.a, {
								className: we.a.icon
							}))
					}
					const i = _[e.action];
					return o.a.createElement(O.a, {
						className: we.a.actionLink,
						to: t
					}, o.a.createElement("span", {
						className: we.a.iconWrapper
					}, r, n && n.treatment === y.POSITIVE ? o.a.createElement(ve.a, {
						className: we.a.positiveTreatment
					}) : n && n.treatment === y.NEGATIVE ? o.a.createElement(Ee.a, {
						className: we.a.negativeTreatment
					}) : null), i && i())
				},
				Ne = ({
					action: e
				}) => {
					const t = e.target && e.target.__typename;
					let n, s, a, r = e.target;
					switch (t) {
						case Se.a.SubredditPost:
							n = (r = r).authorInfo && r.authorInfo.__typename === ue.c.AvailableRedditor && r.authorInfo.name || null, s = r.title, a = r.permalink;
							break;
						case Se.a.DeletedSubredditPost:
							n = null, s = (r = r).title, a = r.permalink;
							break;
						case ue.c.AvailableRedditor:
							n = (r = r) && r.name || null, s = null;
							break;
						case Oe.d.Comment:
							n = (r = r).authorInfo && r.authorInfo.__typename === ue.c.AvailableRedditor && r.authorInfo.name || null, s = r.content && r.content.markdown, a = r.permalink;
							break;
						case Oe.d.DeletedComment:
							n = null, s = (r = r).postInfo && r.postInfo.title, a = r.postInfo && r.postInfo.permalink;
							break;
						default:
							n = null, s = null, a = void 0
					}
					let i = e.details;
					C[e.details] && (i = e.details && C[e.details]());
					let d = e.actionNotes || i;
					return e.actionNotes && i && (d = `${i}: ${e.actionNotes}`), o.a.createElement("div", {
						className: we.a.detailsContainer
					}, n && !E.includes(n) ? o.a.createElement(le.a, {
						tooltipId: `userlink-${e.id}`,
						user: n,
						sendHoverCardEvent: ie.a
					}, o.a.createElement(de.a, {
						className: we.a.usernameLink,
						author: n
					}, `u/${n}`)) : n, s && a && o.a.createElement("a", {
						className: we.a.detailsContent,
						target: "_blank",
						rel: "noopener noreferrer",
						href: a
					}, s), d && o.a.createElement("span", {
						className: we.a.detailsType
					}, `(${d})`))
				},
				Te = "mod-log-timestamp-";
			class Me extends o.a.Component {
				constructor() {
					super(...arguments), this.createTimestamp = e => {
						return new Date(e).toString()
					}, this.getTooltipId = e => `${Te}${e}`, this.getActionModeratorName = e => e && e.__typename === ue.c.AvailableRedditor ? e.name : null
				}
				render() {
					const {
						action: e,
						currentPageUrl: t,
						moderator: n,
						onHideTooltip: s,
						onShowTooltip: a
					} = this.props, r = this.getTooltipId(e.id), i = this.getActionModeratorName(e.moderator);
					return o.a.createElement("tr", {
						className: we.a.row
					}, o.a.createElement("td", null, o.a.createElement("span", {
						id: r,
						onMouseEnter: () => a(r),
						onMouseLeave: s,
						className: we.a.tooltip
					}, o.a.createElement(ce.d, {
						seconds: e.createdAt / U.Rb
					}), o.a.createElement(me.c, {
						className: we.a.createdAtTooltip,
						tooltipId: r,
						text: this.createTimestamp(e.createdAt)
					}))), o.a.createElement("td", {
						className: we.a.modNameCell
					}, i && !E.includes(i) ? o.a.createElement(le.a, {
						tooltipId: `modlink-${e.id}`,
						user: i,
						sendHoverCardEvent: ie.a
					}, o.a.createElement(de.a, {
						author: i,
						className: we.a.usernameLink
					}, i)) : i), o.a.createElement("td", null, o.a.createElement(Ie, {
						action: e,
						urlPath: w({
							currentPageUrl: t,
							action: e.action,
							moderator: n
						})
					})), o.a.createElement("td", null, o.a.createElement(Ne, {
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
				Re = n("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				Ae = n("./src/reddit/components/ModHub/InfoTooltip/index.tsx"),
				Le = n("./src/reddit/components/ModHub/PaginationButtons/index.tsx"),
				Fe = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				De = n("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				Ue = n("./src/reddit/constants/parameters.ts"),
				Be = n("./src/reddit/contexts/PageLayer/index.tsx"),
				He = n("./src/reddit/components/ModerationLog/index.m.less"),
				We = n.n(He);
			const qe = Object(Be.u)({
					currentPageUrl: Be.f,
					queryParams: Be.V
				}),
				Ge = Object(d.c)({
					actionsList: W,
					endCursor: q,
					nextPage: (e, {
						subredditId: t
					}) => e.pages.modHub.moderationLog.hasNextPage[t],
					previousPage: (e, {
						subredditId: t
					}) => e.pages.modHub.moderationLog.hasPreviousPage[t],
					startCursor: G
				}),
				Ke = Object(i.b)(Ge, (e, {
					subreddit: t
				}) => ({
					fetchAllModerators: () => e((e => async (t, n, {
						gqlContext: s
					}) => {
						const a = n(),
							r = Object(u.C)(a, e);
						if (a.pages.modHub.moderationLog.moderators[r]) return;
						const o = await Object(c.b)(s(), e);
						if (o.body) {
							const e = o.body.data.subreddit.moderators;
							if (e) {
								const n = Object(m.a)(e);
								t(b({
									normalizedModerators: n,
									subredditId: r
								}))
							}
						}
					})(t.name))
				}));
			class Ve extends o.a.Component {
				componentDidMount() {
					"complete" === document.readyState ? this.props.fetchAllModerators() : window.addEventListener("load", this.props.fetchAllModerators)
				}
				render() {
					const {
						actionsList: e,
						currentPageUrl: t,
						endCursor: n,
						nextPage: r,
						previousPage: i,
						queryParams: d,
						startCursor: l,
						subredditId: c
					} = this.props, m = d[Ue.o] || null, u = d[Ue.n] || null, p = {
						currentPageUrl: t,
						action: m,
						moderator: u,
						startCursor: l
					}, b = {
						currentPageUrl: t,
						endCursor: n,
						action: m,
						moderator: u
					};
					return o.a.createElement(Fe.a, {
						className: We.a.contentContainer
					}, o.a.createElement(Fe.b, null, a.fbt._("Mod log", null, {
						hk: "UdwRO"
					}), o.a.createElement(Re.a, {
						linkUrl: `${s.a.redditModHelpUrl}/hc/en-us/articles/360022402312`
					})), o.a.createElement(De.a, null, o.a.createElement("span", {
						className: We.a.title
					}, a.fbt._("Filter by", null, {
						hk: "3RkGvd"
					})), o.a.createElement(re, {
						action: m,
						currentPageUrl: t,
						moderator: u,
						subredditId: c
					}), o.a.createElement(Le.a, {
						prevButtonEnabled: i,
						prevTo: w(p),
						nextButtonEnabled: r,
						nextTo: w(b)
					})), o.a.createElement("table", {
						className: We.a.table
					}, o.a.createElement("thead", null, o.a.createElement("tr", null, o.a.createElement("th", {
						className: We.a.timeColHeader
					}, a.fbt._("time", null, {
						hk: "1EnamY"
					})), o.a.createElement("th", {
						className: We.a.modNameColHeader
					}, a.fbt._("moderator", null, {
						hk: "22lRDF"
					})), o.a.createElement("th", {
						className: We.a.actionNameColHeader
					}, o.a.createElement("span", {
						className: We.a.tooltip
					}, a.fbt._("action", null, {
						hk: "243Ltb"
					}), o.a.createElement(Ae.a, {
						className: We.a.actionTooltip
					}, o.a.createElement("div", {
						className: We.a.actionTooltipDescription
					}, a.fbt._("Actions performed within your community", null, {
						hk: "3RTNED"
					})), o.a.createElement("div", {
						className: We.a.allIconsContainer
					}, o.a.createElement("div", {
						className: We.a.iconContainer
					}, o.a.createElement(xe.a, {
						className: We.a.icon
					}), a.fbt._("Post", null, {
						hk: "9rK7i"
					})), o.a.createElement("div", {
						className: We.a.iconContainer
					}, o.a.createElement(be.a, null), a.fbt._("Comment", null, {
						hk: "1N3Vo2"
					})), o.a.createElement("div", {
						className: We.a.iconContainer
					}, o.a.createElement(ke.a, {
						className: We.a.icon
					}), a.fbt._("Flair", null, {
						hk: "roX9r"
					})), o.a.createElement("div", {
						className: We.a.iconContainer
					}, o.a.createElement(ye.a, {
						className: We.a.icon
					}), a.fbt._("Wiki", null, {
						hk: "27Czfb"
					})), o.a.createElement("div", {
						className: We.a.iconContainer
					}, o.a.createElement(_e.a, {
						className: We.a.icon
					}), a.fbt._("User management", null, {
						hk: "NIFnh"
					})), o.a.createElement("div", {
						className: We.a.iconContainer
					}, o.a.createElement(Ce.a, {
						className: We.a.icon
					}), a.fbt._("Community settings", null, {
						hk: "139FAy"
					})), o.a.createElement("div", {
						className: We.a.iconContainer
					}, o.a.createElement(he.a, {
						className: We.a.icon
					}), a.fbt._("Collection", null, {
						hk: "3a6W4E"
					})), o.a.createElement("div", {
						className: We.a.iconContainer
					}, o.a.createElement(ge.a, {
						className: We.a.icon
					}), a.fbt._("Event", null, {
						hk: "2odtv8"
					})), o.a.createElement("div", {
						className: We.a.iconContainer
					}, o.a.createElement(fe.a, {
						className: We.a.icon
					}), a.fbt._("Award", null, {
						hk: "2l9uEL"
					})))))), o.a.createElement("th", null, o.a.createElement("span", {
						className: We.a.tooltip
					}, a.fbt._("details", null, {
						hk: "1hCsar"
					}), o.a.createElement(Ae.a, {
						text: a.fbt._("Displays the author, post or comment link, and any additional information", null, {
							hk: "1EN2HF"
						})
					}))))), o.a.createElement("tbody", null, e.map(e => o.a.createElement(Pe, {
						key: e.id,
						action: e,
						currentPageUrl: t,
						moderator: u
					})))), o.a.createElement("div", {
						className: We.a.bottomBarRow
					}, o.a.createElement(Le.a, {
						prevButtonEnabled: i,
						prevTo: w(p),
						nextButtonEnabled: r,
						nextTo: w(b)
					})))
				}
			}
			t.a = qe(Ke(Ve))
		},
		"./src/reddit/components/ModerationPagesEmptyList/index.m.less": function(e, t, n) {
			e.exports = {
				NoResultsContainer: "FIy4e_7DNe0P9cdi_1jVn",
				noResultsContainer: "FIy4e_7DNe0P9cdi_1jVn",
				NoResultsText: "_3V0T64xptTp5xLaY-1nsaz",
				noResultsText: "_3V0T64xptTp5xLaY-1nsaz"
			}
		},
		"./src/reddit/components/ModerationPagesEmptyList/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/ModerationPagesEmptyList/index.m.less"),
				i = n.n(o);
			const d = r.a.div("NoResultsContainer", i.a),
				l = r.a.div("NoResultsText", i.a);

			function c(e) {
				const {
					childrenPosition: t = "top"
				} = e;
				return a.a.createElement(d, {
					className: e.className
				}, "top" === t && e.children, a.a.createElement(l, null, e.text), "bottom" === t && e.children)
			}
		},
		"./src/reddit/components/ModeratorsList/AddModeratorModal/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModeratorsList/InvitePendingModal.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModeratorsList/InvitedModeratorsList.m.less": function(e, t, n) {
			e.exports = {
				ListTitle: "_1LuVAChAgGbcgUPh_K7ebp",
				listTitle: "_1LuVAChAgGbcgUPh_K7ebp",
				ListContainer: "_1IFQy3zyz-Lgs7iYZtQaPI",
				listContainer: "_1IFQy3zyz-Lgs7iYZtQaPI"
			}
		},
		"./src/reddit/components/ModeratorsList/Moderator.m.less": function(e, t, n) {
			e.exports = {
				PencilIcon: "_2Pdzq06b5akGcY4hZ05n_5",
				pencilIcon: "_2Pdzq06b5akGcY4hZ05n_5",
				TrashIcon: "_2TU9GRodUTR72kz4zcFzxJ",
				trashIcon: "_2TU9GRodUTR72kz4zcFzxJ",
				InteractiveDiv: "qaNZ40bbce8HBshNk04f0",
				interactiveDiv: "qaNZ40bbce8HBshNk04f0"
			}
		},
		"./src/reddit/components/ModeratorsList/ResignAsModeratorModal/index.m.less": function(e, t, n) {
			e.exports = {
				PrimaryButton: "_3j2WCnh8ZjDRHIILJwKzkx",
				primaryButton: "_3j2WCnh8ZjDRHIILJwKzkx"
			}
		},
		"./src/reddit/components/ModeratorsList/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModeratorsList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/addQueryParams/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				m = n("./src/lib/stripQueryParams/index.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/actions/subredditModeration/index.ts"),
				b = n("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				h = n("./src/reddit/components/ModHub/PaginationButtons/index.tsx"),
				g = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				f = n("./src/reddit/components/SubredditModerationSearch/index.tsx"),
				x = n("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				E = n("./src/reddit/components/SubredditModerationUserItem/index.tsx"),
				v = n("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = n("./src/reddit/controls/Button/index.tsx"),
				C = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				k = n("./src/reddit/models/SubredditModeration/index.ts"),
				y = n("./src/reddit/selectors/activeModalId.ts"),
				O = n("./src/reddit/selectors/meta.ts"),
				S = n("./src/reddit/selectors/moderatorPermissions.ts"),
				j = n("./src/lib/objectSelector/index.ts");
			const w = [],
				I = Object(j.a)((e, {
					subredditId: t,
					before: n,
					after: s
				}) => {
					const a = Object(k.d)(t, s, n),
						r = e.pages.modHub.moderators.userOrder.data[t] && e.pages.modHub.moderators.userOrder.data[t][a];
					return r ? r.map(n => e.pages.modHub.moderators.models[t][n]) : []
				}),
				N = Object(j.a)((e, {
					subredditId: t
				}) => {
					const n = e.pages.modHub.moderators.invitedModerators.userOrder[t];
					return n ? n.map(n => e.pages.modHub.moderators.invitedModerators.models[t][n]) : w
				});
			var T = n("./src/reddit/selectors/user.ts"),
				M = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/higherOrderComponents/asModal/index.tsx")),
				P = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				R = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				A = n("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				L = n("./src/reddit/controls/TextButton/index.tsx"),
				F = n("./src/reddit/helpers/isValidUsername/index.tsx"),
				D = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				U = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				B = n("./src/reddit/components/ModeratorsList/AddModeratorModal/index.m.less"),
				H = n.n(B);
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
				q = e => {
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
				G = Object(i.b)(null, (e, {
					subredditId: t,
					after: n,
					before: s
				}) => ({
					addModerator: (n, s) => e(Object(p.b)(t, n, s)),
					editModerator: (n, s, a) => e(Object(p.d)(t, n, s, a)),
					removeModerator: a => e(Object(p.k)(t, a, n, s))
				})),
				K = c.a.span("SecondaryText", H.a),
				V = c.a.wrapped(P.e, "ModalBody", H.a);
			class z extends o.a.Component {
				constructor(e) {
					super(e), this.onUsernameChange = e => {
						this.setState({
							username: e.currentTarget.value
						})
					}, this.toggleSelect = (e, t) => {
						if (this.props.isEditingSelf) return;
						const n = {
							...this.state.permissions,
							[e]: !t
						};
						"all" === e ? Object.keys(n).forEach(e => n[e] = n.all) : n[e] || (n.all = !1), this.setState({
							permissions: n
						}), this.props.sendEventWithName("permission")()
					}, this.onSubmit = e => {
						e.preventDefault();
						const {
							props: t,
							state: n
						} = this;
						t.isEditingSelf ? t.toggleModal() : (t.isEditingPerms && t.user ? (t.editModerator(n.username, n.permissions, t.user.id), t.sendEventWithName("edit")()) : (t.addModerator(n.username, n.permissions), t.sendEventWithName("invite_moderator")()), t.toggleModal())
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
					} = this, n = ["all", ...Object.keys(t.permissions).filter(e => "all" !== e)];
					return o.a.createElement(V, null, o.a.createElement(P.i, null, o.a.createElement(D.a, null, o.a.createElement(P.q, null, e.isEditingPerms ? a.fbt._("Edit", null, {
						hk: "1nftDt"
					}) : a.fbt._("Invite Moderators", null, {
						hk: "hkBh1"
					}), e.username && a.fbt._(": u/{username}", [a.fbt._param("username", e.username)], {
						hk: "2FWWEd"
					})), o.a.createElement(L.a, {
						onClick: e.toggleModal
					}, o.a.createElement(P.b, null)))), o.a.createElement("form", {
						onSubmit: this.onSubmit
					}, o.a.createElement(P.l, null, !e.isEditingPerms && o.a.createElement(P.h, null, o.a.createElement(R.d, {
						autoFocus: !0,
						placeholder: a.fbt._("Enter Username", null, {
							hk: "2fYsDe"
						}),
						onChange: this.onUsernameChange
					})), o.a.createElement(P.q, null, e.isEditingSelf ? o.a.createElement(o.a.Fragment, null, a.fbt._("Access", null, {
						hk: "2We3HN"
					}), o.a.createElement(K, null, a.fbt._("(can't edit)", null, {
						hk: "3LZvZi"
					}))) : a.fbt._("Give them access to...", null, {
						hk: "1DzYmU"
					})), t.permissions && n.map((n, s) => o.a.createElement("div", {
						className: H.a.checkboxContainer,
						key: n
					}, o.a.createElement(A.a, {
						autoFocus: !(!e.isEditingPerms || 0 !== s) || void 0,
						className: H.a.checkbox,
						disabled: e.isEditingSelf,
						isSelected: t.permissions[n],
						onClick: () => this.toggleSelect(n, t.permissions[n]),
						text: W(n)
					}), o.a.createElement("p", {
						className: H.a.checkboxDescription
					}, q(n)), "all" === n && o.a.createElement("hr", {
						className: H.a.divider
					}))), o.a.createElement("p", {
						className: H.a.automodMore
					}, a.fbt._("*Note: To manage AutoMod, mods must have access to Wiki Pages and Manage Settings. To mute users, mods must have access to Mod Mail and Manage Users.", null, {
						hk: "1AYX38"
					}))), o.a.createElement(P.g, {
						className: H.a.footer
					}, o.a.createElement(_.l, {
						className: H.a.primaryButton,
						"data-redditstyle": !0,
						disabled: !e.username && !Object(F.a)(t.username),
						type: "submit"
					}, e.isEditingPerms ? a.fbt._("Save", null, {
						hk: "4yMsMq"
					}) : a.fbt._("Invite", null, {
						hk: "2F1syY"
					})), o.a.createElement(P.a, {
						autoFocus: !!e.isEditingSelf || void 0,
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, a.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), e.isEditingPerms && !e.isEditingSelf && o.a.createElement(P.s, {
						onClick: this.onRemove,
						"data-redditstyle": !0
					}, a.fbt._("Remove", null, {
						hk: "3tYl0U"
					})))))
				}
			}
			var X = Object(M.a)(G(z)),
				Q = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				J = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Y = n("./src/reddit/selectors/telemetry.ts");
			const Z = e => ({
					screen: Y.ab(e),
					subreddit: Y.ib(e)
				}),
				$ = e => t => ({
					source: "remove_mod_invite",
					action: "click",
					noun: e,
					...Z(t)
				});
			var ee = n("./src/lib/constants/index.ts"),
				te = n("./src/reddit/components/HumanDate/index.tsx"),
				ne = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				se = n("./src/reddit/icons/svgs/Trash/index.tsx"),
				ae = n("./src/reddit/components/ModeratorsList/Moderator.m.less"),
				re = n.n(ae);
			const oe = e => {
					const t = [],
						n = Object.keys(e);
					return e.all ? W("all") : (n.forEach((function(n) {
						e[n] && t.push(W(n))
					})), 0 === t.length ? a.fbt._("No permissions", null, {
						hk: "3eH05z"
					}) : t.join(", "))
				},
				ie = c.a.wrapped(ne.a, "PencilIcon", re.a),
				de = c.a.wrapped(se.a, "TrashIcon", re.a),
				le = c.a.div("InteractiveDiv", re.a),
				ce = e => o.a.createElement(le, {
					onClick: e.onClick
				}, e.moderatorType === k.c.Editable ? o.a.createElement(ie, null) : o.a.createElement(de, null));
			var me = e => o.a.createElement(E.b, {
					additionalText: oe(e.moderator.modPermissions),
					pageName: ee.ec.Moderators,
					primaryButton: e.moderatorType && e.onClick && o.a.createElement(ce, {
						onClick: e.onClick,
						moderatorType: e.moderatorType
					}),
					timeAgo: o.a.createElement(te.d, {
						seconds: e.moderator.moddedAtUTC
					}),
					subredditId: e.subredditId,
					userIcon: e.moderator.accountIcon,
					username: e.moderator.username,
					moderatorType: e.moderatorType
				}),
				ue = n("./src/reddit/components/ModeratorsList/InvitedModeratorsList.m.less"),
				pe = n.n(ue);
			const be = c.a.div("ListTitle", pe.a),
				he = c.a.div("ListContainer", pe.a),
				ge = Object(d.c)({
					invitedModeratorsList: N,
					isConfirmModalOpen: Object(y.b)("ModerationPage--Modal--RemoveModeratorConfirmation")
				});
			class fe extends o.a.Component {
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
					const n = () => this.props.sendEvent($("cancel"));
					return o.a.createElement("div", null, o.a.createElement(be, null, a.fbt._("Invited moderators", null, {
						hk: "2UdpbF"
					})), o.a.createElement(he, null, e.invitedModeratorsList.map(t => o.a.createElement(me, {
						key: t.id,
						moderator: t,
						moderatorType: k.c.Invited,
						onClick: () => this.onToggleRemovalModal(t),
						subredditId: e.subredditId
					}))), e.isConfirmModalOpen && t.selectedModerator && o.a.createElement(Q.a, {
						actionText: a.fbt._("Remove", null, {
							hk: "3tYl0U"
						}),
						modalText: a.fbt._("Are you sure you want to rescind the moderator invite to {username}", [a.fbt._param("username", t.selectedModerator.username)], {
							hk: "4c5sRy"
						}),
						onConfirm: () => e.removeInvitedModerator(t.selectedModerator.id),
						toggleModal: this.onToggleRemovalModal,
						onCancel: n,
						onClose: n,
						trackClick: () => this.props.sendEvent($("remove"))
					}))
				}
			}
			var xe = Object(i.b)(ge, (e, {
					subredditId: t
				}) => ({
					removeInvitedModerator: n => e(Object(p.j)(t, n)),
					toggleConfirmUserActionModal: () => e(Object(u.i)("ModerationPage--Modal--RemoveModeratorConfirmation"))
				}))(Object(J.c)(fe)),
				Ee = n("./src/reddit/components/ModeratorsList/InvitePendingModal.m.less"),
				ve = n.n(Ee);
			const {
				fbt: _e
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ce = Object(i.b)(null, (e, {
				subredditId: t
			}) => ({
				acceptInvite: () => e(Object(p.a)(t)),
				declineInvite: () => e(Object(p.c)(t))
			})), ke = c.a.wrapped(P.p, "ModalText", ve.a), ye = c.a.wrapped(ke, "ModalTextBold", ve.a), Oe = c.a.wrapped(_.l, "PrimaryButton", ve.a), Se = c.a.wrapped(_.o, "SecondaryButton", ve.a), je = c.a.div("Section", ve.a), we = c.a.img("Image", ve.a), Ie = c.a.wrapped(P.l, "ModalMain", ve.a);
			var Ne = Object(M.a)(Ce(e => o.a.createElement(P.e, null, o.a.createElement(Ie, null, o.a.createElement(D.a, null, o.a.createElement("div", null), o.a.createElement(L.a, {
					onClick: e.toggleModal
				}, o.a.createElement(P.b, null))), o.a.createElement(je, null, o.a.createElement(we, {
					src: `${s.a.assetPath}/img/snoo-success@2x.png`
				})), o.a.createElement(ye, null, _e._("Congrats!", null, {
					hk: "T4Ccw"
				})), o.a.createElement(ke, null, _e._("You are invited to become a moderator!", null, {
					hk: "1jRLWz"
				}))), o.a.createElement(P.g, null, o.a.createElement(Se, {
					onClick: t => {
						e.toggleModal(), e.declineInvite(), e.sendEventWithName("declineinvite")()
					},
					"data-redditstyle": !0
				}, _e._("Decline", null, {
					hk: "1iOsJe"
				})), o.a.createElement(Oe, {
					onClick: t => {
						e.toggleModal(), e.acceptInvite(), e.sendEventWithName("acceptinvite")()
					},
					"data-redditstyle": !0
				}, _e._("Accept", null, {
					hk: "2fkYc4"
				})))))),
				Te = n("./src/reddit/components/ModeratorsList/ResignAsModeratorModal/index.m.less"),
				Me = n.n(Te);
			const {
				fbt: Pe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Re = Object(i.b)(null, (e, {
				subredditId: t,
				userId: n,
				after: s,
				before: a
			}) => ({
				removeModerator: () => e(Object(p.k)(t, n, s, a))
			})), Ae = c.a.wrapped(_.l, "PrimaryButton", Me.a);
			class Le extends o.a.Component {
				constructor() {
					super(...arguments), this.onRemove = () => {
						this.props.removeModerator(), this.props.sendEventWithName("resign")(), this.props.toggleModal()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement(P.e, null, o.a.createElement(P.i, null, o.a.createElement(D.a, null, o.a.createElement(P.q, null, Pe._("Leave as mod", null, {
						hk: "3ajWeG"
					})), o.a.createElement(L.a, {
						onClick: e.toggleModal
					}, o.a.createElement(P.b, null)))), o.a.createElement(P.l, null, o.a.createElement(P.p, null, Pe._("Once you leave as a mod, you will lose mod permissions and will be unable to access any mod tools for this community. Are you sure you wish to leave as a mod of this community?", null, {
						hk: "4qm9md"
					}))), o.a.createElement(P.g, null, o.a.createElement(P.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, Pe._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(Ae, {
						onClick: this.onRemove,
						"data-redditstyle": !0
					}, Pe._("Leave", null, {
						hk: "2ZHZVX"
					}))))
				}
			}
			var Fe = Object(M.a)(Re(Le)),
				De = n("./src/reddit/components/ModeratorsList/index.m.less"),
				Ue = n.n(De);
			const Be = c.a.div("ListContainer", Ue.a),
				He = c.a.wrapped(_.o, "SecondaryButton", Ue.a),
				We = Object(v.u)({
					currentPageUrl: v.f
				}),
				qe = Object(d.c)({
					currentUser: T.k,
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
						beforeEditable: n,
						afterEditable: s
					}) => {
						const a = Object(k.d)(t, s, n),
							r = e.pages.modHub.moderators.editableUserOrder.data[t] && e.pages.modHub.moderators.editableUserOrder.data[t][a];
						return r ? r.map(n => e.pages.modHub.moderators.editableModerators[t][n]) : []
					},
					isInvitePending: (e, {
						subredditId: t
					}) => !!e.pages.modHub.moderators.invitePending[t],
					moderators: (e, {
						subredditId: t
					}) => e.pages.modHub.moderators.models[t] || null,
					moderatorsList: I,
					moderatorPermissions: S.m,
					isAddUserModalOpen: Object(y.b)("ModerationPage--Modal--AddModerator"),
					isEditableListPending: (e, t) => {
						const n = Object(k.d)(t.subredditId, t.afterEditable, t.beforeEditable);
						return !!e.pages.modHub.moderators.editableUserOrder.api.pending[n]
					},
					isInvitePendingModalOpen: Object(y.b)("ModerationPage--Modal--InvitePending"),
					isModeratorListPending: (e, t) => {
						const n = Object(k.d)(t.subredditId, t.after, t.before);
						return !!e.pages.modHub.moderators.userOrder.api.pending[n]
					},
					isResignAsModeratorModalOpen: Object(y.b)("ModerationPage--Modal--Resign"),
					origin: O.j,
					searchPending: e => !!e.pages.modHub.moderators.search.api.pending,
					searchResult: e => e.pages.modHub.moderators.search.result
				}),
				Ge = Object(i.b)(qe, (e, {
					subredditId: t
				}) => ({
					searchForModerator: n => e(Object(p.h)(t, n)),
					toggleAddModeratorModal: () => e(Object(u.i)("ModerationPage--Modal--AddModerator")),
					toggleInvitePendingModal: () => e(Object(u.i)("ModerationPage--Modal--InvitePending")),
					toggleResignAsModModal: () => e(Object(u.i)("ModerationPage--Modal--Resign"))
				})),
				Ke = c.a.div("EditableTitle", Ue.a),
				Ve = c.a.wrapped(E.a, "UsersLoading", Ue.a);
			class ze extends o.a.Component {
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
							n = e.isEditableListPending || e.isModeratorListPending;
						return o.a.createElement(o.a.Fragment, null, o.a.createElement(Ke, null, a.fbt._("You can edit these moderators", null, {
							hk: "1KTZtm"
						})), t && o.a.createElement(x.a, null, o.a.createElement(h.a, {
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
						})), o.a.createElement(Be, null, e.editableModeratorsList && e.editableModeratorsList.length > 0 ? e.editableModeratorsList.map(e => o.a.createElement(me, {
							key: e.id,
							moderator: e,
							moderatorType: k.c.Editable,
							onClick: this.toggleModal(e.id, e.username),
							subredditId: this.props.subredditId
						})) : n ? o.a.createElement(Ve, null) : null))
					}
				}
				componentDidMount() {
					this.props.isInvitePending && !this.props.isInvitePendingModalOpen && this.props.toggleInvitePendingModal()
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = !!e.moderatorPermissions, r = Object(C.a)(e.moderatorPermissions);
					return o.a.createElement(o.a.Fragment, null, n && o.a.createElement(g.c, null, o.a.createElement(He, {
						onClick: e.toggleResignAsModModal
					}, a.fbt._("Leave as mod", null, {
						hk: "3TwqTg"
					})), r && o.a.createElement(_.l, {
						onClick: this.toggleModal(null, null)
					}, a.fbt._("Invite user as mod", null, {
						hk: "3lJRJW"
					}))), o.a.createElement(g.a, null, o.a.createElement(g.b, null, a.fbt._("Moderators of {subredditName}", [a.fbt._param("subredditName", e.subreddit.displayText)], {
						hk: "3p7NwA"
					}), o.a.createElement(b.a, {
						linkUrl: `${s.a.redditModHelpUrl}/hc/en-us/articles/360009381491`
					})), o.a.createElement(x.b, {
						onSearch: this.onSearch,
						activeSearchQuery: t.searchTerm
					}, !t.searchTerm && this.isModeratorsListPaginated() && o.a.createElement(h.a, {
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
					})), t.searchTerm ? o.a.createElement(f.a, {
						cancelSearch: this.cancelSearch,
						searchPending: e.searchPending,
						searchTerm: t.searchTerm,
						noResultsFound: !e.searchResult
					}, e.searchResult && o.a.createElement(me, {
						moderator: e.searchResult,
						moderatorType: e.searchResult.isEditable ? k.c.Editable : void 0,
						onClick: e.searchResult.isEditable ? this.toggleModal(e.searchResult.id, e.searchResult.username) : void 0,
						subredditId: e.subredditId
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(Be, null, e.moderatorsList && e.moderatorsList.length > 0 ? e.moderatorsList.map(e => o.a.createElement(me, {
						key: e.id,
						moderator: e,
						subredditId: this.props.subredditId
					})) : e.isModeratorListPending ? o.a.createElement(Ve, null) : null), r && o.a.createElement(o.a.Fragment, null, this.renderEditableList(e), o.a.createElement(xe, {
						sendEventWithName: e.sendEventWithName,
						subredditId: e.subredditId
					})))), e.isAddUserModalOpen && o.a.createElement(X, {
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
					}), e.currentUser && e.isResignAsModeratorModalOpen && o.a.createElement(Fe, {
						sendEventWithName: e.sendEventWithName,
						subredditId: e.subredditId,
						toggleModal: e.toggleResignAsModModal,
						userId: e.currentUser.id,
						withOverlay: !0
					}), e.isInvitePendingModalOpen && o.a.createElement(Ne, {
						sendEventWithName: e.sendEventWithName,
						subredditId: e.subredditId,
						toggleModal: e.toggleInvitePendingModal,
						withOverlay: !0
					}))
				}
			}
			t.a = We(Ge(ze))
		},
		"./src/reddit/components/MultiOptionSelect/OptionSearchBar/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/MultiOptionSelect/OptionsListDropdown/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/MultiOptionSelect/SelectedOption/index.m.less": function(e, t, n) {
			e.exports = {
				selectedOptionComponentContainer: "_3nUaRUcJJfrvOWldA3i10S",
				closeIcon: "_1RvgsgnXdbtv2cwTTTbT7o",
				selectedOptionComponentContainerError: "_2Qpr0YORGp3CmDjJW9Txrf"
			}
		},
		"./src/reddit/components/MultiOptionSelect/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/some.js"),
				a = n.n(s),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/constants/keycodes.ts"),
				l = n("./src/reddit/components/MultiOptionSelect/OptionsListDropdown/index.m.less"),
				c = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class u extends o.a.Component {
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
						divRef: n,
						handleOnMouseEnter: s,
						handleOptionSelected: a,
						index: r,
						className: d,
						...l
					} = this.props;
					return o.a.createElement("div", m({
						className: Object(i.a)(c.a.availableOptionContainer, d)
					}, l, {
						onMouseEnter: this.handleMouseEnter,
						onClick: this.handleClick,
						ref: n
					}), e && o.a.createElement("span", {
						className: c.a.addText
					}, e, " "), t)
				}
			}
			class p extends o.a.Component {
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
					}, this.scrollContainer = o.a.createRef(), this.optionsContainer = o.a.createRef(), this.activeOptionDOMRef = o.a.createRef()
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
					return o.a.createElement("div", {
						className: c.a.relativeContainer
					}, o.a.createElement("div", {
						className: Object(i.a)(c.a.dropdown, this.props.className),
						ref: this.scrollContainer
					}, o.a.createElement("div", {
						ref: this.optionsContainer,
						tabIndex: -1,
						className: c.a.optionsContainer,
						onMouseOut: this.clearSelectedIndex
					}, this.shouldRenderDropdownHeaderText() && o.a.createElement("h3", {
						className: c.a.dropdownHeaderText
					}, this.props.dropdownHeaderText), this.props.selectableOptions.map((e, t) => {
						const n = [this.state.selectedIndex === t ? c.a.activeOption : c.a.option];
						return this.freeTextEntryActive() && t === this.props.selectableOptions.length - 1 && n.push(c.a.lastFixedOption), o.a.createElement(u, {
							key: e.id,
							className: Object(i.a)(...n),
							index: t,
							handleOptionSelected: this.handleOptionSelectedByIndex,
							handleOnMouseEnter: this.setOptionActiveByIndex,
							divRef: t === this.state.selectedIndex ? this.activeOptionDOMRef : void 0,
							displayText: e.displayText
						})
					}), this.freeTextEntryActive() && o.a.createElement(u, {
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
			var b = n("./src/reddit/icons/svgs/Close/index.tsx"),
				h = n("./src/reddit/components/MultiOptionSelect/SelectedOption/index.m.less"),
				g = n.n(h);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var x = e => {
					const {
						className: t,
						innerRef: n,
						onClickHandler: s,
						option: a,
						maxLength: r,
						...d
					} = e, l = [g.a.selectedOptionComponentContainer, t];
					return r && r < a.displayText.length && l.push(g.a.selectedOptionComponentContainerError), o.a.createElement("div", f({
						className: Object(i.a)(...l),
						ref: n
					}, d, {
						onClick: s
					}), a.displayText, o.a.createElement(b.a, {
						className: g.a.closeIcon
					}))
				},
				E = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				v = n("./src/reddit/helpers/readOnlyMode/index.ts"),
				_ = n("./src/reddit/components/MultiOptionSelect/OptionSearchBar/index.m.less"),
				C = n.n(_);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const y = 10,
				O = e => e.stopPropagation();
			class S extends o.a.Component {
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
					}, this.inputRef = o.a.createRef(), this.containerRef = o.a.createRef(), this.lastSelectedOptionComponentRef = o.a.createRef(), this.state = {
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
						n = "number" == typeof this.props.maxOptionsToDisplay && this.props.options.length > this.props.maxOptionsToDisplay;
					return o.a.createElement("div", k({
						"aria-invalid": this.props.isError,
						className: Object(i.a)(this.props.className, C.a.optionSearchBarContainer, {
							[C.a.optionSearchBarError]: this.props.isError,
							[C.a.optionSearchBarReadOnly]: Object(v.c)(this.props.readOnlyMode)
						}),
						ref: this.containerRef,
						onFocus: this.onSearchBarFocus,
						onBlur: this.onSearchBarBlur
					}, e), this.props.options.map((e, s) => {
						if (!(n && s >= (this.props.maxOptionsToDisplay || 0))) return o.a.createElement(t, {
							tabIndex: 0,
							onFocus: O,
							key: e.id || e.displayText,
							option: e,
							onKeyDown: t => this.onSelectedOptionComponentKeyDown(t, e),
							onClickHandler: () => {
								this.deselectOption(e), this.focus()
							},
							onMouseEnter: this.handleMouseEnterSelectedOptionComponent,
							onMouseLeave: this.handleMouseLeaveSelectedOptionComponent,
							maxLength: this.props.maxLength,
							innerRef: s === this.props.options.length - 1 ? this.lastSelectedOptionComponentRef : void 0
						})
					}), n && o.a.createElement("span", {
						className: C.a.optionsOverflowIndication
					}, `+${this.props.options.length-(this.props.maxOptionsToDisplay||0)}`), this.props.children, !Object(v.c)(this.props.readOnlyMode) && o.a.createElement("input", {
						className: Object(i.a)(C.a.input, {
							[C.a.hiddenInput]: Object(v.b)(this.props.readOnlyMode)
						}),
						ref: this.inputRef,
						type: "text",
						onKeyDown: this.handleKeyPress,
						value: this.props.value,
						onChange: this.props.onInputChanged,
						maxLength: this.props.maxLength
					}), this.props.isLoading && o.a.createElement(E.a, {
						className: C.a.loadingIcon,
						sizePx: y
					}), this.state.isFocused && o.a.createElement(p, {
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
			var j = n("./node_modules/reselect/es/index.js");
			const w = [],
				I = {};
			class N extends o.a.Component {
				constructor(e) {
					super(e), this._selectableOptionsSelector = Object(j.a)(e => e.availableOptions || w, e => e.input, (e, t) => e.filter(e => {
						const n = e.displayText.toLowerCase(),
							s = t.toLowerCase();
						return 0 === n.indexOf(s) || a()(n.split(/[\s\/]+/), e => 0 === e.indexOf(s))
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
					}, this.optionsListDropdownRef = o.a.createRef(), this.optionSearchBarRef = o.a.createRef()
				}
				getSelectableOptions() {
					return this._selectableOptionsSelector(this.props)
				}
				render() {
					const {
						childClassNames: e = I
					} = this.props;
					return o.a.createElement("div", {
						className: this.props.className,
						onKeyDown: this.onKeyDown,
						onPaste: this.onPaste
					}, o.a.createElement(S, {
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
		"./src/reddit/components/MutedUserList/ExpandedComponent.m.less": function(e, t, n) {
			e.exports = {
				BannedBy: "_2004IKQq9AjT3xoiDBg7m_",
				bannedBy: "_2004IKQq9AjT3xoiDBg7m_",
				EmptyState: "_1O-zxip2q_mFxBe_WVFPZC",
				emptyState: "_1O-zxip2q_mFxBe_WVFPZC",
				ExpandedContainer: "_1EEdKUOD4OiTBBQQkot-L9",
				expandedContainer: "_1EEdKUOD4OiTBBQQkot-L9"
			}
		},
		"./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.m.less": function(e, t, n) {
			e.exports = {
				PrimaryButton: "_16-AoomiQ2Zxycd1wA0ZL-",
				primaryButton: "_16-AoomiQ2Zxycd1wA0ZL-",
				ModalText: "_3P1niYqJc2au-fmA-xIl7i",
				modalText: "_3P1niYqJc2au-fmA-xIl7i"
			}
		},
		"./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/subredditModeration/mute.ts"),
				c = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				m = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/controls/TextButton/index.tsx"),
				h = n("./src/reddit/helpers/isValidUsername/index.tsx"),
				g = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				f = n("./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.m.less"),
				x = n.n(f);
			const E = 300,
				v = Object(o.b)(null, (e, {
					subredditId: t
				}) => ({
					onMuteUser: (n, s) => e(Object(l.a)(t, n, s))
				})),
				_ = d.a.wrapped(p.l, "PrimaryButton", x.a),
				C = d.a.wrapped(m.p, "ModalText", x.a);
			class k extends r.a.Component {
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
					return r.a.createElement(m.e, null, r.a.createElement(m.i, null, r.a.createElement(g.a, null, r.a.createElement(m.q, null, s.fbt._("Mute user", null, {
						hk: "326ljo"
					}), e.username && `: u/${e.username}`), r.a.createElement(b.a, {
						onClick: e.toggleModal
					}, r.a.createElement(m.b, null)))), r.a.createElement(m.l, null, !e.username && r.a.createElement(m.h, null, r.a.createElement(u.d, {
						autoFocus: !0,
						placeholder: s.fbt._("Username to mute", null, {
							hk: "3GB7UW"
						}),
						onChange: this.onUsernameChange,
						value: this.state.username,
						"data-redditstyle": !0
					})), r.a.createElement(m.h, null, r.a.createElement(C, null, s.fbt._("Note about why they are muted", null, {
						hk: "12YIn5"
					})), r.a.createElement(m.f, null, s.fbt._("Only visible to other moderators. Not visible to user", null, {
						hk: "4Ahum2"
					}))), r.a.createElement(m.t, {
						maxLength: E,
						onChange: this.onReasonChange,
						placeholder: s.fbt._("Reason they were muted", null, {
							hk: "3E29Hf"
						}),
						value: this.state.reason,
						"data-redditstyle": !0
					}), r.a.createElement(c.a, {
						maxChars: E,
						text: this.state.reason
					})), r.a.createElement(m.g, null, r.a.createElement(m.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(_, {
						onClick: this.onSubmit,
						"data-redditstyle": !0,
						disabled: !e.username && !Object(h.a)(t.username)
					}, s.fbt._("Mute user", null, {
						hk: "1z1Ss8"
					}))))
				}
			}
			t.default = Object(i.a)(v(k))
		},
		"./src/reddit/components/MutedUserList/index.m.less": function(e, t, n) {
			e.exports = {
				MuteIcon: "XHViv8EEjdjsATc3T66r9",
				muteIcon: "XHViv8EEjdjsATc3T66r9"
			}
		},
		"./src/reddit/components/MutedUserList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/subredditModeration/mute.ts"),
				u = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				p = n("./src/reddit/components/HumanDate/index.tsx"),
				b = n("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				h = n("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				g = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				f = n("./src/reddit/components/Scroller/Simple.tsx"),
				x = n("./src/reddit/components/SubredditModerationSearch/index.tsx"),
				E = n("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				v = n("./src/reddit/components/SubredditModerationUserItem/index.tsx"),
				_ = n("./src/reddit/controls/Button/index.tsx"),
				C = n("./src/reddit/icons/fonts/index.tsx"),
				k = n("./src/reddit/models/SubredditModeration/index.ts"),
				y = n("./src/reddit/selectors/activeModalId.ts"),
				O = n("./src/reddit/selectors/muted.ts"),
				S = n("./src/reddit/components/MutedUserList/ExpandedComponent.m.less"),
				j = n.n(S),
				w = n("./src/lib/lessComponent.tsx");
			const {
				fbt: I
			} = n("./node_modules/fbt/lib/FbtPublic.js"), N = w.a.span("BannedBy", j.a), T = w.a.span("EmptyState", j.a), M = w.a.div("ExpandedContainer", j.a);
			var P = e => o.a.createElement(M, null, e.reason ? o.a.createElement(N, null, I._("Mod note {mutedByUsername}", [I._param("mutedByUsername", e.mutedBy)], {
					hk: "15D34v"
				})) : o.a.createElement(T, null, I._("No mod note.", null, {
					hk: "3rpIuv"
				})), e.reason),
				R = n("./src/reddit/components/MutedUserList/MuteUserModal/index.tsx"),
				A = n("./src/reddit/components/MutedUserList/index.m.less"),
				L = n.n(A);
			const F = 24,
				D = Object(d.c)({
					isAddUserModalOpen: e => "ModerationPage--Modal--AddUser" === Object(y.a)(e),
					isConfirmModalOpen: e => "ModerationPage--Modal--RemoveUserConfirmation" === Object(y.a)(e),
					loadMoreToken: O.c,
					mutedUsers: O.f,
					mutedUsersListPending: O.b,
					searchPending: O.d,
					searchResult: O.e
				}),
				U = Object(i.b)(D, (e, {
					subredditId: t
				}) => ({
					loadMore: n => e(Object(m.b)(t, {
						after: n
					})),
					searchForMutedUser: n => e(Object(m.c)(t, n)),
					toggleAddUserModal: () => e(Object(c.i)("ModerationPage--Modal--AddUser")),
					toggleUnmuteUserModal: () => e(Object(c.i)("ModerationPage--Modal--RemoveUserConfirmation")),
					unmuteUser: n => () => e(Object(m.d)(t, n))
				}));
			class B extends o.a.Component {
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
					}, this.renderMutedUser = e => o.a.createElement(v.b, {
						description: e.reason,
						expandedComponent: o.a.createElement(P, {
							mutedBy: e.mutedBy,
							reason: e.reason
						}),
						pageName: l.ec.Muted,
						primaryButton: o.a.createElement(_.r, {
							onClick: this.unmuteToggled(e.id, e.username)
						}, a.fbt._("Unmute", null, {
							hk: "334kKM"
						})),
						subredditId: this.props.subredditId,
						timeAgo: o.a.createElement(p.d, {
							seconds: e.mutedAtUTC
						}),
						userIcon: e.accountIcon,
						username: e.username
					}), this.renderMuteUserModal = () => o.a.createElement(R.a, {
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
						mutedUsers: n
					} = e;
					let r;
					return n.length && (r = n[n.length - 1].id), e.mutedUsers.length ? o.a.createElement(o.a.Fragment, null, o.a.createElement(g.c, null, o.a.createElement(_.l, {
						onClick: this.muteUser
					}, a.fbt._("Mute user", null, {
						hk: "4AJ7nf"
					}))), o.a.createElement(g.a, null, o.a.createElement(g.b, null, a.fbt._("Muted users", null, {
						hk: "2kc6Jt"
					}), o.a.createElement(h.a, {
						linkUrl: `${s.a.redditModHelpUrl}/hc/en-us/articles/360009161872`
					})), o.a.createElement(E.b, {
						onSearch: this.onSearch,
						activeSearchQuery: t.searchTerm
					}), t.searchTerm ? o.a.createElement(x.a, {
						cancelSearch: this.cancelSearch,
						searchPending: e.searchPending,
						searchTerm: t.searchTerm,
						noResultsFound: !e.searchResult
					}, e.searchResult && this.renderMutedUser(e.searchResult)) : o.a.createElement(f.b, {
						loadMoreToken: r,
						onLoadMore: this.onLoadMore
					}, e.mutedUsers.map((e, t) => ({
						estHeight: F,
						id: e.id,
						render: () => this.renderMutedUser(e)
					})))), e.isAddUserModalOpen && this.renderMuteUserModal(), e.isConfirmModalOpen && t.userId && t.username && o.a.createElement(u.a, {
						actionText: a.fbt._("Unmute", null, {
							hk: "334kKM"
						}),
						modalText: a.fbt._("Are you sure you want to unmute {username}?", [a.fbt._param("username", t.username)], {
							hk: "2Pq8hv"
						}),
						onConfirm: e.unmuteUser(t.userId),
						toggleModal: e.toggleUnmuteUserModal,
						trackClick: e.sendEventWithName("remove"),
						withOverlay: !0
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(g.c, null, o.a.createElement(_.l, {
						onClick: this.muteUser
					}, a.fbt._("Mute user", null, {
						hk: "4AJ7nf"
					}))), o.a.createElement(g.a, null, o.a.createElement(g.b, null, a.fbt._("Muted users", null, {
						hk: "2kc6Jt"
					}), o.a.createElement(h.a, {
						linkUrl: `${s.a.redditModHelpUrl}/hc/en-us/articles/360009161872`
					})), e.mutedUsersListPending ? o.a.createElement(v.a, null) : o.a.createElement(b.c, {
						text: a.fbt._("No muted users in {subredditName}", [a.fbt._param("subredditName", e.subreddit.displayText)], {
							hk: "1o0lOP"
						})
					}, o.a.createElement(C.a, {
						name: "mod_mute",
						className: L.a.MuteIcon
					})), e.isAddUserModalOpen && this.renderMuteUserModal()))
				}
			}
			t.a = U(B)
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.m.less": function(e, t, n) {
			e.exports = {
				RecommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				recommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				classicLayout: "_3gsfwiq-rM6zSz9YoMlnJ0",
				compactLayout: "_9huHAs0mdMzeF-pUhJbwX",
				largeLayout: "_3hWVRt6y8PqOoC2VuZETZI"
			}
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/objectSelector/index.ts"),
				i = n("./src/reddit/components/RichTextJson/index.tsx"),
				d = n("./src/reddit/constants/postLayout.ts"),
				l = n("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				c = n.n(l);
			const m = Object(o.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = ({
				content: e,
				layout: t,
				post: n
			}) => a.a.createElement(i.a, {
				className: Object(r.a)(c.a.RecommendationContextStyles, {
					[c.a.classicLayout]: t === d.g.Classic,
					[c.a.compactLayout]: t === d.g.Compact,
					[c.a.largeLayout]: t === d.g.Large
				}),
				content: e,
				rtJsonElementProps: m(n),
				useExplicitTextColor: !0
			})
		},
		"./src/reddit/components/Paginator/index.m.less": function(e, t, n) {
			e.exports = {
				controlRow: "_2ixigr45sqDsYvVlMBgbMm",
				nextButtonContainer: "CloCv22o0KvzOk8LzB4VX",
				prevButtonContainer: "_2Tfdm_mlb1NvgbaCCkMtdV",
				nextButton: "_1VFGYMJpiKtL_S9_RYS-CD",
				prevButton: "eX92mTA_HDG9gpfIzIGhs"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				d = n("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				l = n.n(d);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(o.a)(e => {
				const {
					children: t,
					className: n,
					flairStyleTemplate: s,
					onClick: o,
					post: d,
					redditStyle: m,
					theme: u,
					...p
				} = e;
				return a.a.createElement("div", c({
					className: Object(r.a)(l.a.backgroundWrapper, n),
					style: Object(i.c)(s, e),
					onClick: o
				}, p), t)
			})
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, n) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/ads/index.ts"),
				i = n("./src/reddit/components/AdViewability/index.tsx"),
				d = n("./src/reddit/helpers/trackers/gallery.ts"),
				l = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				c = n("./src/reddit/hooks/useTracking.ts");
			var m = a.a.memo(e => {
					const t = Object(s.useRef)(null),
						n = Object(c.a)(),
						r = Object(s.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: s
								} = t;
								s >= .5 && n(d.d(e.postId))
							})
						}, [n, e.postId]),
						o = Object(s.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(l.a)(t, r, o), a.a.createElement("div", {
						role: "presentation"
					}, a.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/connectors/PostViewable/index.ts"),
				b = n("./src/reddit/models/Media/index.ts"),
				h = n("./src/reddit/selectors/posts.ts"),
				g = n("./src/reddit/selectors/telemetry.ts"),
				f = n("./src/lib/classNames/index.ts"),
				x = n("./src/lib/objectSelector/index.ts"),
				E = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				v = n("./src/reddit/components/PostContainer/index.m.less"),
				_ = n.n(v);
			const C = Object(p.a)(() => Object(r.c)({
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
				pageType: e => Object(g.d)(e).pageType
			}));
			class k extends a.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: n,
						className: s,
						imageGalleryCurrentItem: r,
						makePostContainerId: l,
						post: c,
						onClick: u,
						pageType: p,
						sendEvent: h,
						style: g,
						ref: x,
						shouldAddGalleryViewability: E = !0
					} = this.props, v = a.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: g,
						ref: x,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: n => {
							if (!this.cancelClick && n.button < 2 && e(() => u && u(n, c, t, r, p))(n), c.id && r) {
								const {
									source: e
								} = Object(o.t)(c, r);
								e && e.outboundUrl && h(Object(d.c)(c.id, e.outboundUrl))
							}
						},
						className: Object(f.a)(_.a.WrappedPost, s, `Post ${c.id}`, {
							promotedlink: c.isSponsored
						}),
						"data-testid": "post-container",
						id: l ? l(c.id) : c.id,
						tabIndex: -1
					}, n), C = !!c.media && c.media.type === b.o.VIDEO;
					return c.isSponsored || C ? a.a.createElement(i.a, {
						post: c,
						trackDisplay: !0
					}, v) : c.media && Object(b.E)(c.media) && E ? a.a.createElement(m, {
						postId: c.id
					}, v) : v
				}
			}
			t.a = C(Object(E.a)(Object(u.c)(k)))
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, n) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/helpers/trackers/postCollection.ts"),
				u = n("./src/reddit/components/PostFollow/index.m.less"),
				p = n.n(u);
			class b extends r.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: n,
								isFollowed: s
							},
							sendEvent: a
						} = this.props, r = !!s;
						a(e ? Object(m.o)({
							postId: n,
							isFollowed: r
						}) : Object(m.g)({
							postId: n,
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
						post: n
					} = this.props, a = this.state.isHovered, o = n.isFollowed;
					let i = o ? s.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : s.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return o && a && (i = s.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
						className: Object(d.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!n.isFollowed,
							[p.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, i)
				}
			}
			const h = Object(o.b)(() => Object(i.c)({}), (e, {
				post: t
			}) => ({
				onFollow: () => e(Object(l.A)(t.isSponsored ? t.postId : t.id))
			}))(Object(c.c)(b))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/reddit/components/CrosspostBox/index.tsx"),
				o = n("./src/reddit/components/Media/index.tsx");

			function i(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? a.a.createElement(r.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * r.b - 2 * r.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : a.a.createElement(o.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, n) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				allowPointerEvents: "_2iiIcja5xIjg-5sI4ECvcV",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/PostLeftRail/index.tsx"),
				i = n("./src/reddit/components/VerticalVotes/index.tsx"),
				d = n("./src/reddit/controls/Checkbox/index.tsx"),
				l = n("./src/reddit/helpers/isPost.ts"),
				c = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				m = n("./src/reddit/components/PostRailAndVotes/index.m.less"),
				u = n.n(m);
			t.a = e => {
				const {
					model: t,
					handleVote: n,
					showBulkActionCheckbox: s = !1,
					isCheckboxSelected: m = !1,
					isCountAnimShadowTestEnabled: p,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: h,
					redditStyle: g,
					isOverlay: f,
					isVoteCountAnimation: x,
					postId: E,
					isReadingIndicatorsExperimentEnabled: v
				} = e, _ = `upvote-button-${t.id}${f?"-overlay":""}`;
				return a.a.createElement(o.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(c.a)(t),
					isSponsored: !!Object(l.b)(t) && t.isSponsored,
					redditStyle: g
				}, s && a.a.createElement(d.a, {
					className: u.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), a.a.createElement(i.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: n,
					redditStyle: g,
					upvoteTooltipId: _,
					isVoteCountAnimation: x,
					isCountAnimShadowTestEnabled: p,
					postId: E,
					scoreClassName: Object(r.a)(u.a.score, {
						[u.a.allowPointerEvents]: v
					}),
					isReadingIndicatorsExperimentEnabled: v
				}))
			}
		},
		"./src/reddit/components/PowerupsSettings/index.m.less": function(e, t, n) {
			e.exports = {
				contentContainer: "_2UnJkyErREO4UdPRO2_Nu_",
				formContainer: "_24DNbvpFOApkjl_aDxLQIe",
				emojiContainer: "KGb-9Fn_9opTkp9y4F7pK",
				emoteButtonContainer: "_3M018emNKEEexK1HjMZQTj",
				emoteButton: "_2f3AHI0QU_oQcjl8U5ZdRz",
				placeholderEmoteButton: "_2YQF3WYehiGNW2iR67S75X",
				uploadInput: "KmfMmSLuXzGdzc_3tPHy2",
				loadingContainer: "_2Z0VpSy4swcUtFNyxmSsg8",
				addButton: "_36wmuGVu3czQNqKncBoxBO",
				addButtonDisabled: "_3mYS-GLsakSC0Gu9a3ux8H",
				addIcon: "_3yRqzxOhoT1PNGoWZLh4bl"
			}
		},
		"./src/reddit/components/PowerupsSettings/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return T
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/config.ts"),
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				d = n("./src/reddit/hooks/useTracking.ts"),
				l = n("./src/reddit/actions/gold/powerups.ts"),
				c = n("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				m = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				u = n("./src/lib/classNames/index.ts"),
				p = n("./src/reddit/actions/economics/powerups/index.ts"),
				b = n("./src/reddit/actions/toaster.ts"),
				h = n("./src/reddit/components/RichTextEditor/emotes/EmoteButton.tsx"),
				g = n("./src/reddit/components/RichTextEditor/emotes/Powerups/DeleteEmojiModal.tsx"),
				f = n("./src/reddit/components/RichTextEditor/emotes/Powerups/useEmojiUpload.ts"),
				x = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				E = n("./src/reddit/helpers/trackers/powerups.ts"),
				v = n("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				_ = n("./src/reddit/models/Toast/index.ts"),
				C = n("./src/reddit/selectors/gold/powerups/index.ts"),
				k = n("./src/reddit/components/PowerupsSettings/index.m.less"),
				y = n.n(k);
			const O = ({
				subredditId: e
			}) => {
				const t = Object(r.d)(),
					n = Object(d.a)(),
					[o, l] = Object(s.useState)(null),
					c = () => l(null),
					[m, k] = Object(s.useState)(!1),
					O = Object(r.e)(t => Object(C.i)(t, {
						subredditId: e
					})),
					{
						uploadInput: S,
						maxEmojisUploading: j,
						numUploading: w,
						onFileChange: I,
						onClickUpload: N
					} = Object(f.a)(e, O, e => {
						t(Object(b.f)({
							duration: b.a,
							kind: _.b.Error,
							text: i.fbt._({
								"*": "You can only add {number} more emojis.",
								_1: "You can only add 1 more emoji."
							}, [i.fbt._plural(e, "number")], {
								hk: "117Ker"
							})
						}))
					}, e => {
						n(Object(E.a)(e, "mod_tools"))
					}, e => {
						n(Object(E.A)(e, "mod_tools")), t(Object(b.f)({
							duration: b.a,
							kind: _.b.SuccessCommunity,
							text: i.fbt._({
								"*": "Looking good! Emojis added.",
								_1: "Looking good! Emoji added."
							}, [i.fbt._plural(e)], {
								hk: "43WkeN"
							})
						}))
					}, e => {
						t(Object(b.f)({
							duration: b.a,
							kind: _.b.Error,
							text: i.fbt._({
								"*": "Failed to upload {number} emojis",
								_1: "Failed to upload 1 emoji"
							}, [i.fbt._plural(e, "number")], {
								hk: "2s093I"
							})
						}))
					}),
					T = j;
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("input", {
					ref: S,
					className: y.a.uploadInput,
					onChange: I,
					type: "file",
					accept: "image/png,image/jpeg",
					multiple: !0
				}), w ? a.a.createElement("div", {
					className: y.a.loadingContainer
				}, a.a.createElement(v.a, {
					className: y.a.addIcon
				})) : a.a.createElement("button", {
					className: Object(u.a)(y.a.emoteButton, y.a.addButton, {
						[y.a.addButtonDisabled]: T
					}),
					disabled: T,
					onClick: N,
					title: i.fbt._("Add Custom Emoji", null, {
						hk: "M580t"
					})
				}, a.a.createElement(v.a, {
					className: y.a.addIcon
				})), O.map(e => a.a.createElement(h.a, {
					key: e.id,
					className: y.a.emoteButton,
					containerClassName: y.a.emoteButtonContainer,
					imageClassName: y.a.customEmoteImage,
					imagePath: e.emoji.path,
					onClickDelete: () => l(e),
					mouseEnterBufferTime: 0
				})), [...Array(w)].map((e, t) => a.a.createElement("div", {
					key: t,
					className: Object(u.a)(y.a.emoteButton, y.a.placeholderEmoteButton)
				}, a.a.createElement(x.a, {
					sizePx: 12,
					center: !0
				}))), o && a.a.createElement(g.a, {
					emojiUrl: o.emoji.path,
					onCancel: c,
					onClose: c,
					onConfirm: async () => {
						if (o && !m) try {
							k(!0), await t(Object(p.a)({
								subredditId: e,
								emojiId: o.id
							})), c(), n(Object(E.d)(1, "mod_tools")), t(Object(b.f)({
								duration: b.a,
								kind: _.b.SuccessCommunity,
								text: i.fbt._("Emoji removed.", null, {
									hk: "3Ox8xb"
								})
							}))
						} catch (s) {
							t(Object(b.f)({
								duration: b.a,
								kind: _.b.Error,
								text: i.fbt._("Failed to delete emoji", null, {
									hk: "2GukOR"
								})
							}))
						} finally {
							k(!1)
						}
					}
				}))
			};
			var S = n("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				j = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				w = n("./src/reddit/models/Gold/Powerups/index.ts"),
				I = n("./src/reddit/selectors/gold/powerups/benefitSettings.ts"),
				N = n("./src/reddit/selectors/subreddit.ts");
			const T = ({
				subredditId: e
			}) => {
				const t = Object(r.d)(),
					n = Object(d.a)(),
					s = Object(r.e)(t => Object(C.h)(t, {
						subredditId: e
					})),
					u = Object(r.e)(t => Object(N.R)(t, {
						subredditId: e
					})),
					p = Object(r.e)(t => Object(I.a)(t, {
						subredditId: e
					})),
					b = (null == p ? void 0 : p[w.a.CommentsWithGifs]) || !1;
				return a.a.createElement(m.a, {
					className: y.a.contentContainer
				}, a.a.createElement(m.b, null, i.fbt._("Powerups settings", null, {
					hk: "1OxM4K"
				}), a.a.createElement(c.a, {
					linkUrl: `${o.a.redditModHelpUrl}/hc/en-us/articles/4403699823629`
				})), a.a.createElement("div", {
					className: y.a.formContainer
				}, s && a.a.createElement(a.a.Fragment, null, a.a.createElement(S.a, null, i.fbt._("Comments", null, {
					hk: "1TCs6F"
				})), a.a.createElement(j.p, {
					on: b,
					onClick: () => (s => {
						n(Object(E.I)("comments_with_gifs", s, !s)), t(Object(l.n)(e, {
							[w.a.CommentsWithGifs]: s
						}))
					})(!b),
					label: i.fbt._("Allow GIFs in comments", null, {
						hk: "2nJiHt"
					}),
					subtext: i.fbt._("It may take a few minutes to update", null, {
						hk: "aU7tk"
					})
				}), a.a.createElement(j.l, {
					label: i.fbt._("{subreddit name} emojis", [i.fbt._param("subreddit name", u.displayText)], {
						hk: "4tuD3i"
					}),
					subtext: i.fbt._("Add up to 20 custom emojis. Images under 128kb with a transparent background work the best.", null, {
						hk: "EAXAA"
					})
				}), a.a.createElement("div", {
					className: y.a.emojiContainer
				}, a.a.createElement(O, {
					subredditId: e
				})))))
			}
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/config.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/components/ProfileIdCard/index.m.less"),
				d = n.n(i);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class c extends a.a.PureComponent {
				render() {
					const {
						topAwardIcon: e,
						recentAwardings: t,
						username: n
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: s,
						totalCount: i
					} = t, c = s.description ? s.description : s.name;
					return a.a.createElement("a", {
						className: d.a.AwardedLastMonth,
						href: `${r.a.oldRedditUrl}/user/${n}/gilded`
					}, a.a.createElement("div", {
						className: d.a.iconColumn
					}, a.a.createElement("img", {
						alt: c,
						className: d.a.icon,
						src: e
					}), i > 1 && a.a.createElement("span", {
						className: d.a.count
					}, `+${Object(o.b)(i-1)}`)), a.a.createElement("div", {
						className: d.a.textColumn
					}, l._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [l._param("award-name", s.name), l._plural(i)], {
						hk: "16MJHe"
					})))
				}
			}
			t.a = c
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less": function(e, t, n) {
			e.exports = {
				Banner: "_2ZyL7luKQghNeMnczY3gqW",
				banner: "_2ZyL7luKQghNeMnczY3gqW"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/reddit/models/Image/index.tsx"),
				i = n("./src/reddit/components/EditableImage/index.tsx"),
				d = n("./src/reddit/models/User/index.ts"),
				l = n("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				c = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				m = n.n(c);
			class u extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const n = await Object(o.e)(e);
						this.setState({
							isUpdating: !0
						}, async () => {
							await this.props.imageUpdateRequested(n, "profileBanner"), this.setState({
								isUpdating: !1
							})
						})
					}
				}
				render() {
					const {
						bannerUrl: e,
						className: t,
						currentUser: n,
						hideNSFWPref: a,
						isNSFW: o,
						userName: l
					} = this.props, {
						isUpdating: c
					} = this.state, u = e ? r.a.createElement("div", {
						className: m.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return n && Object(d.e)(n) === l ? r.a.createElement(i.a, {
						altText: s.fbt._("{userName} banner image", [s.fbt._param("userName", l)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: c,
						onFileSelected: this.updateProfileIcon
					}, u) : o && a ? null : u
				}
			}
			t.a = Object(l.a)(u)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/preferences.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const i = Object(a.c)({
					currentUser: o.k,
					hideNSFWPref: o.C
				}),
				d = Object(s.b)(i, e => ({
					imageUpdateRequested: (t, n) => e(Object(r.B)(t, n))
				}));
			t.a = d
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/icons/svgs/Shirt/index.tsx"),
				l = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				c = n.n(l);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				compact: e,
				currentUserHasSnoovatar: t,
				className: n,
				isOwnProfile: s,
				onClick: l
			}) {
				return a.a.createElement(o.t, {
					onClick: l,
					isFullWidth: !0,
					className: Object(r.a)(c.a.snoovatarButton, {
						[c.a.snoovatarExtraPadding]: !t && s,
						[c.a.compactButtonLayout]: e
					}, n)
				}, t ? a.a.createElement(d.a, {
					className: c.a.shirtIcon
				}) : a.a.createElement("div", {
					className: c.a.shirtIcon
				}), t ? m._("Style Avatar", null, {
					hk: "UEtBO"
				}) : s ? m._("Create Avatar", null, {
					hk: "2pJgje"
				}) : m._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), t ? a.a.createElement("div", {
					className: c.a.chevronIcon
				}) : a.a.createElement(i.a, {
					name: "caret_right",
					className: c.a.chevronIcon
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less": function(e, t, n) {
			e.exports = {
				BannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				bannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				BannerImage: "_1IvROQ79nAJZ87_JkTFsLO",
				bannerImage: "_1IvROQ79nAJZ87_JkTFsLO"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				o = n("./src/reddit/icons/svgs/Close/index.tsx"),
				i = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				d = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				l = n.n(d),
				c = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				m = n.n(c);
			t.a = function({
				bannerBackgroundImage: e,
				isNSFW: t,
				username: n,
				editMode: s,
				isDeletingBanner: d,
				onDeleteBanner: c
			}) {
				return a.a.createElement("div", {
					className: l.a.bannerWrapper
				}, a.a.createElement(i.a, {
					bannerUrl: e,
					isNSFW: t,
					userName: n
				}), s && e && (d ? a.a.createElement(r.a, {
					sizePx: 20,
					className: m.a.loadingIcon
				}) : a.a.createElement(o.a, {
					className: m.a.closeIcon,
					onClick: c
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/reddit/controls/InternalLink/index.tsx"),
				o = n("./src/reddit/components/HumanDate/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				className: e,
				shouldDisplaySnoovatar: t,
				url: n,
				userCreated: s,
				username: d,
				...l
			}) {
				const c = t ? a.a.createElement(a.a.Fragment, null, "u/", d, " · ", a.a.createElement(o.d, {
					seconds: s,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${d}`;
				return n ? a.a.createElement(r.a, i({}, l, {
					className: e,
					to: n
				}), c) : a.a.createElement("span", i({}, l, {
					className: e
				}), c)
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_2DTxp6tzlJMeNlZ-cjXWTs",
				closeIcon: "_2ioQgcdZvYlf34S0OEqBuQ",
				settingsIcon: "A4Iifg_NCOrfabq0ON3mW"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				d = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				l = n("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				c = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				m = n.n(c);
			t.a = ({
				title: e,
				username: t,
				isEmployee: n,
				isGold: r,
				isNSFW: c
			}) => o.a.createElement("h1", {
				className: m.a.snoovatarUserTitle
			}, e || t, n && o.a.createElement(i.a, {
				className: m.a.snoovatarAdminIcon,
				title: a.fbt._("Reddit admin", null, {
					hk: "goUUb"
				})
			}), r && o.a.createElement("a", {
				title: a.fbt._("{username} has Reddit Premium", [a.fbt._param("username", t)], {
					hk: "3Fylv"
				}),
				href: `${s.a.redditUrl}/premium`
			}, o.a.createElement(l.a, {
				className: m.a.snoovatarPremiumIcon
			})), c && o.a.createElement(d.a, {
				className: m.a.snoovatarNsfwIcon,
				title: a.fbt._("NSFW - Adult Content", null, {
					hk: "2Iw7mN"
				})
			}))
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less": function(e, t, n) {
			e.exports = {
				snoovatarContainer: "_34XIqvI8-YT1wukR_W8vj6",
				bottomGlow: "_18b8M-cZftX_frkYRy3DN1",
				topGlow: "_1-PwjX8ETMrfCu2hAkAHFd",
				snoovatar: "_2bLCGrtCCJIMNCZgmAMZFM",
				premiumGlow: "_18BjSGkpIVVfS1xJXL1eoW",
				snoovatarUserName: "_28nEhn86_R1ENZ59eAru8S",
				snoovatarUserTitle: "_3LM4tRaExed4x1wBfK1pmg",
				snoovatarSettingsLink: "PNl4tAYE2TRxhOc34iqcY",
				snoovatarAdminIcon: "kOKnXvA8jebkfk2wVIb9R",
				snoovatarNsfwIcon: "Wb4wBt474lETdwG0YpWID",
				snoovatarPremiumIcon: "_3NZUKOdsA_2X9TrZGSNQyP",
				particleWrapper: "_3sckwXGpSWEBLgH7dBHDSI",
				particle: "R8JC02qFTBSKsWVEamnnh",
				particleX0: "_2FHPkirHUUZZ53WuQRt_ku",
				particleX20: "DeM4CXWl9dmFhzxbChV3v",
				particleX40: "_2jQr36LfrhyZudo0c4r5qb",
				particleX60: "_2ThlCGLfserHkMW64od-w_",
				particleX80: "_2PoCUl_D7HnNn8GhlmyNMn",
				particleX100: "_3xLPb9tG5DMGKH5Qmq0lMn",
				particleFloat1: "_2Tlu1OsBOwuxXIF1MLT2k",
				floatUp1: "_1-74-z_0KhbvP-MLUh63RF",
				particleFloat2: "BW4L6Zj7IYZtY4carTDWz",
				floatUp2: "BhXouEsciSb0lIayg329d",
				particleFloat3: "UjQ0lRcZlylUigyKGCSrO",
				floatUp3: "_2cAI3EiKyyG1hMFOLbG7ka",
				particleFloat4: "_2_ke4gf08pfYrY6lP-aPZ_",
				floatUp1Left: "_2D7to5Dk7q0ZyKN3MMQfuJ",
				particleFloat5: "_2wM6_vp4fY0ziLkOrGaobV",
				floatUp2Left: "_3BR2d3YbOQLeA3LmAmwBJL",
				particleFloat6: "_23n0biPU5CQf96pEUSFupJ",
				floatUp3Left: "_3FnzyfIl1wHuAYA54rlkJH",
				particleDelay1: "_3meTYeYw1F3UdYO0v-gAYr",
				particleDelay2: "_3d8_fd8LwWsj0tyZWIeQdt",
				particleDelay3: "_2PLSBdnBk3jcotYknlKud1",
				particleDelay4: "_2pnTv5ZAxpIbkx38PkPJPg",
				particleDelay5: "_3j1NzwW_t2Ufnx4ed9QabN",
				particleDelay6: "_1hddWHnQ8DFnwilLlN9GEO",
				particleDelay7: "_3eRR1I_MwXC19q9sr8mKaR",
				particleDelay8: "_1sCUpg4sdajNDXrcNTP0qW",
				particleDelay9: "_3J5h1MCyY_xUf2QP7PDSHY",
				particleDelay10: "_2RqcLn9onSZQmKQgvKmSF7"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/InternalLink/index.tsx"),
				d = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/selectors/experiments/econ/index.ts"),
				c = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				m = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				u = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				p = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				b = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				h = n.n(b);
			const g = 25;

			function f(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function x(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const E = f("particleDelay", h.a),
				v = f("particleX", h.a),
				_ = f("particleFloat", h.a),
				C = () => {
					const e = x(v),
						t = x(_),
						n = x(E);
					return Object(o.a)(h.a.particle, e, t, n)
				};
			class k extends a.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < g; t++) e.push(this.createParticle(t));
					return a.a.createElement("div", {
						role: "presentation",
						className: h.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return a.a.createElement("div", {
						key: e,
						className: `${C()}`
					})
				}
			}
			var y = k,
				O = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				S = n.n(O),
				j = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = ({
				bannerBackgroundImage: e,
				compact: t,
				currentUserHasSnoovatar: n,
				editMode: s,
				isDeletingBanner: b,
				isEmployee: g,
				isGold: f,
				isNSFW: x,
				isOwnProfile: E,
				onClickSnoovatar: v,
				onDeleteBanner: _,
				prefersReducedAnimations: C,
				snoovatarUrl: k,
				title: O,
				userCreated: w,
				username: I,
				url: N,
				isHovercard: T
			}) => {
				const M = Object(r.e)(e => !E && !!k && Object(l.h)(e));
				return a.a.createElement(a.a.Fragment, null, a.a.createElement(u.a, {
					bannerBackgroundImage: e,
					editMode: !!s,
					isNSFW: x,
					username: I,
					isDeletingBanner: !!b,
					onDeleteBanner: _
				}), a.a.createElement("div", {
					className: h.a.snoovatarContainer
				}, f && a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: h.a.topGlow
				}), a.a.createElement("div", {
					className: h.a.bottomGlow
				}), !C && a.a.createElement(y, null)), a.a.createElement("img", {
					className: Object(o.a)(h.a.snoovatar, {
						[h.a.premiumGlow]: f
					}),
					src: k || void 0
				})), !s && E && a.a.createElement(i.a, {
					to: "/settings/profile",
					className: h.a.snoovatarSettingsLink
				}, a.a.createElement(d.a, {
					name: "settings",
					className: S.a.settingsIcon
				})), a.a.createElement(j.a, {
					isEmployee: g,
					isGold: f,
					isNSFW: x,
					title: O,
					username: I
				}), a.a.createElement(p.a, {
					className: h.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: I,
					userCreated: w,
					url: N
				}), (E || !n && !!k) && a.a.createElement(c.a, {
					compact: t,
					currentUserHasSnoovatar: n,
					isOwnProfile: E,
					onClick: v
				}), M && a.a.createElement(m.a, {
					username: I,
					isHovercard: !!T,
					share: {
						username: I
					}
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/index.m.less": function(e, t, n) {
			e.exports = {
				actionItem: "_1l7CTV4NjDjmzX8DiiSgTL",
				AwardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				awardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				textColumn: "_wi1DtT7oN7k_x5oIV8zm",
				iconColumn: "_32tzMaZn7x3dfQC5MXndJn",
				icon: "_12jN4wdttUosp76WHzuieI",
				count: "_6xPPP5HdELF-SZJL8layH",
				awardIcon: "_2Eq8z6UD7I0ul3wnZ-YT80",
				adminIcon: "_1sNQxemH_0rq1jtZAMyAZd",
				snoovatarAdminIcon: "_1rf3zLc4sH59mO7_BEXyze",
				snoovatarPremiumIcon: "_3QQFENUs15G6BHI5pjsswJ",
				button: "_2q1wcTx60QKM_bQ1Maev7b"
			}
		},
		"./src/reddit/components/ProgressBar/index.m.less": function(e, t, n) {
			e.exports = {
				innerBar: "Db3WJFTcyAR-IM0cIkpDG",
				outerBar: "i8kQtxHYBB8Sb3bPI4M_e"
			}
		},
		"./src/reddit/components/ProgressBar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/ProgressBar/index.m.less"),
				i = n.n(o);
			t.a = ({
				className: e,
				innerBarClassName: t,
				percent: n
			}) => a.a.createElement("div", {
				className: Object(r.a)(i.a.outerBar, e)
			}, a.a.createElement("div", {
				className: Object(r.a)(i.a.innerBar, t),
				style: {
					width: `${n.toFixed(2)}%`
				}
			}))
		},
		"./src/reddit/components/RecurringPostList/ChangePageButton/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_1i9YssSDgp0wmEC43VdLTX",
				prevButton: "_2IBDYNRoTxtwgs13LWRpeM",
				arrowIcon: "QD6Re7us6VNRFNYSiD6to",
				disabled: "_3Lm3n-nPFfEcJoNjVwcm3r"
			}
		},
		"./src/reddit/components/RecurringPostList/EditModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-RecurringPostList-EditModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-RecurringPostList-EditModal").then(n.bind(null, "./src/reddit/components/RecurringPostList/EditModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/RecurringPostList/EditModal/index.tsx"
				}
			})
		},
		"./src/reddit/components/RecurringPostList/RecurringPost/ContentMeta/index.m.less": function(e, t, n) {
			e.exports = {
				contentRow: "Bt3uIal7yhwFSN9JorIng",
				contentRowMeta: "t6hD4d7F06TL2yv9vfp7h",
				title: "_3Evplg8YGmH6GDFsdQ0_nE",
				ownerName: "_215cUXwEuCE5hl0eYEIt_o",
				ownerNameContainer: "_2yAEv_Vw_ItUYbNbAjpSsL"
			}
		},
		"./src/reddit/components/RecurringPostList/RecurringPost/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/RecurringPostList/RecurringPost/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return R
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/telemetry/index.ts"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/scheduledPosts/index.ts"),
				c = n("./src/lib/constants/index.ts"),
				m = n("./src/reddit/components/AuthorLink/index.tsx"),
				u = n("./src/reddit/components/Thumbnail/index.tsx"),
				p = n("./src/reddit/components/RecurringPostList/Thumbnail/index.m.less"),
				b = n.n(p);
			var h = ({
					post: e
				}) => a.a.createElement("div", {
					className: b.a.thumbnailContainer
				}, a.a.createElement(u.a, {
					post: e,
					contentTypeClassName: b.a.placeholderIcon
				})),
				g = n("./src/reddit/components/ScheduledPost/index.tsx"),
				f = n("./src/reddit/models/ScheduledPost/index.ts"),
				x = n("./node_modules/reselect/es/index.js"),
				E = n("./src/reddit/components/RecurringPostList/RecurringPost/ContentMeta/index.m.less"),
				v = n.n(E);
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js"), C = Object(x.c)({
				media: (e, {
					scheduledPost: t
				}) => ({
					...g.b,
					isNSFW: t.isNsfw,
					title: t.title
				})
			});
			var k = Object(r.b)(C)(e => {
					const {
						scheduledPost: t
					} = e, {
						isPostAsMetaMod: n,
						owner: s
					} = t, r = n ? c.l : Object(f.n)(s) ? s.name : void 0;
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
					}, r && a.a.createElement("span", {
						className: v.a.ownerName
					}, _._("by {username}", [_._param("username", a.a.createElement(m.a, {
						author: r,
						isUnstyled: !0
					}, `u/${r}`))], {
						hk: "FAgpK"
					})), e.children)))
				}),
				y = n("./src/reddit/components/ScheduledPost/OverflowMenu/withOverflowMenu.tsx");
			var O = Object(y.a)(e => a.a.createElement(a.a.Fragment, null, e.renderOverflowMenu())),
				S = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				j = n("./src/reddit/helpers/scheduledPosts/index.ts"),
				w = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				I = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				N = n("./src/reddit/icons/svgs/Replay/index.tsx"),
				T = n("./src/reddit/components/RecurringPostList/RecurringPost/index.m.less"),
				M = n.n(T);
			const {
				fbt: P
			} = n("./node_modules/fbt/lib/FbtPublic.js"), R = "RECURRING_POSTS__EDIT", A = Object(r.b)(null, (e, t) => ({
				editRecurringPostRequested: () => {
					e(Object(l.c)({
						id: t.item.id,
						subredditId: t.item.subreddit.id
					})), e((e, t) => Object(o.a)(Object(w.e)()(t()))), e(Object(d.i)(R))
				},
				onOpenOverflow: () => {
					e((e, t) => Object(o.a)(Object(w.h)(!0)(t())))
				},
				onUpdateMetadata: n => e(Object(l.b)(n, t.item))
			}));
			class L extends a.a.PureComponent {
				render() {
					const {
						className: e,
						item: t,
						editRecurringPostRequested: n
					} = this.props, s = Object(j.e)(t), r = t.state === f.e.FAILED, {
						owner: o
					} = t, d = Object(f.n)(o) && o.prefixedName;
					return a.a.createElement("div", {
						className: Object(i.a)(e, M.a.container)
					}, r && a.a.createElement("div", {
						className: M.a.failedStateIndicator
					}, P._("Recurring post failed to submit. {Link: update recurring scheduled post} to reset", [P._param("Link: update recurring scheduled post", a.a.createElement(S.o, {
						onClick: n
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
						title: s
					}, s), a.a.createElement("div", null, P._("Scheduled by {=[post owner]}", [P._param("=[post owner]", a.a.createElement("span", {
						className: M.a.parametricMetaData
					}, P._("{post owner}", [P._param("post owner", d)], {
						hk: "25fi1G"
					})))], {
						hk: "36vTyl"
					}))), a.a.createElement("button", {
						onClick: n
					}, a.a.createElement(I.a, {
						className: M.a.pencilIcon
					}))), a.a.createElement(k, {
						scheduledPost: t
					}, a.a.createElement(O, {
						scheduledPost: t,
						onUpdateMetadata: this.props.onUpdateMetadata,
						onOpenOverflow: this.props.onOpenOverflow
					})))
				}
			}
			t.b = A(L)
		},
		"./src/reddit/components/RecurringPostList/Thumbnail/index.m.less": function(e, t, n) {
			e.exports = {
				placeholderIcon: "_2rWvDY38-Fa_14y347Il6W",
				thumbnailContainer: "_3cYCw7NYRAJwj6LvL8esBu"
			}
		},
		"./src/reddit/components/RecurringPostList/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.m.less": function(e, t, n) {
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
		"./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/Dropdown/index.tsx"),
				d = n("./src/reddit/controls/Dropdown/Row.tsx"),
				l = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				c = n("./src/reddit/layout/row/Inline/index.tsx"),
				m = n("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.m.less"),
				u = n.n(m);
			const p = o.a.wrapped(c.a, "DisplayContainer", u.a),
				b = o.a.div("DropdownLabel", u.a),
				h = o.a.div("ReasonTitle", u.a),
				g = e => r.a.createElement(p, null, r.a.createElement(b, null, e.dropdownLabel), e.selectedReason && r.a.createElement(h, null, e.selectedReason)),
				f = o.a.wrapped(i.a, "Dropdown", u.a),
				x = o.a.wrapped(l.b, "DropdownTriangle", u.a),
				E = o.a.wrapped(d.b, "DropdownRow", u.a),
				v = o.a.button("DropdownContainer", u.a);
			t.a = e => r.a.createElement(v, {
				onClick: e.onToggleDropdown
			}, r.a.createElement(g, {
				dropdownLabel: e.isLoading ? s.fbt._("Loading...", null, {
					hk: "1bT6op"
				}) : s.fbt._("Reason for removal", null, {
					hk: "3C9ecg"
				}),
				selectedReason: e.selectedReason ? e.selectedReason.title : null
			}), r.a.createElement(x, null), e.isDropdownOpen && r.a.createElement(f, {
				isOverlay: !0
			}, r.a.createElement(E, {
				displayText: s.fbt._("None", null, {
					hk: "2443EZ"
				}),
				onClick: () => e.onSelectReason(null)
			}), e.subredditRemovalReasons.map((t, n) => r.a.createElement(E, {
				displayText: `${n+1}. ${t.title}`,
				key: t.title,
				onClick: () => e.onSelectReason(t)
			}))))
		},
		"./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.m.less": function(e, t, n) {
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
		"./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "dispatcher", (function() {
				return I
			})), n.d(t, "selector", (function() {
				return N
			})), n.d(t, "connector", (function() {
				return T
			})), n.d(t, "CharacterCountdown", (function() {
				return M
			})), n.d(t, "EmptyState", (function() {
				return P
			})), n.d(t, "MessageInput", (function() {
				return U
			})), n.d(t, "FormOptionsContainer", (function() {
				return W
			})), n.d(t, "ModalFooter", (function() {
				return q
			})), n.d(t, "ButtonRow", (function() {
				return K
			})), n.d(t, "AddRemovalReasonModal", (function() {
				return V
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/removalReasons/index.ts"),
				c = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				m = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/controls/InternalLink/index.tsx"),
				b = n("./src/reddit/controls/RadioInput/index.tsx"),
				h = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				g = n("./src/reddit/controls/TextButton/index.tsx"),
				f = n("./src/reddit/icons/fonts/Info/index.tsx"),
				x = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				E = n("./src/reddit/models/RemovalReason/index.ts"),
				v = n("./src/reddit/selectors/removalReasons.ts"),
				_ = n("./src/reddit/selectors/subreddit.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.tsx"),
				y = n("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.m.less"),
				O = n.n(y);
			const {
				fbt: S
			} = n("./node_modules/fbt/lib/FbtPublic.js"), j = e => {
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
				submitBulkRemovalReason: (t, n, s, a, r) => e(Object(l.submitBulkRemovalReason)(t, n, s, a, r)),
				submitRemovalReason: (t, n, s, a, r) => e(Object(l.submitRemovalReason)(t, n, s, a, r))
			}), N = Object(o.c)({
				currentUserName: e => {
					const t = Object(C.k)(e);
					if (t) return t.displayText
				},
				isLoading: v.a,
				removalReasons: v.c,
				subredditName: (e, {
					subredditId: t
				}) => Object(_.R)(e, {
					subredditId: t
				}).name
			}), T = Object(r.b)(N, I), M = d.a.wrapped(c.a, "CharacterCountdown", O.a), P = d.a.div("EmptyState", O.a), R = d.a.wrapped(m.o, "ModNoteDescription", O.a), A = d.a.wrapped(u.l, "PrimaryButton", O.a), L = d.a.wrapped(h.a, "RadioOption", O.a), F = d.a.span("BoldText", O.a), D = d.a.wrapped(m.t, "ModNoteInput", O.a), U = d.a.wrapped(m.t, "MessageInput", O.a), B = d.a.wrapped(f.a, "Info", O.a), H = d.a.div("SmallInfoText", O.a), W = d.a.div("FormOptionsContainer", O.a), q = d.a.wrapped(m.g, "ModalFooter", O.a), G = d.a.div("FooterRow", O.a), K = d.a.wrapped(G, "ButtonRow", O.a);
			class V extends a.a.Component {
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
						} = this, n = [];
						return t.removalContextType !== E.e.Bulk && n.push(a.a.createElement(L, {
							key: E.f.Public,
							showButton: !0,
							tabIndex: 0,
							value: E.f.Public
						}, a.a.createElement("div", null, t.removalContextType === E.e.Post ? S._("Public: Write a sticky comment on the post", null, {
							hk: "1UIQkF"
						}) : S._("Public: Write a reply to the comment", null, {
							hk: "1iZ1RC"
						})))), n.push(a.a.createElement(L, {
							key: E.f.Private,
							showButton: !0,
							tabIndex: 0,
							value: E.f.Private
						}, a.a.createElement("div", null, S._("Private: send a Modmail from {subredditName} to the user", [S._param("subredditName", a.a.createElement(F, null, `r/${e.subredditName}`))], {
							hk: "1wUxMe"
						})))), e.currentUserName && n.push(a.a.createElement(L, {
							key: E.f.PrivateExposed,
							showButton: !0,
							tabIndex: 0,
							value: E.f.PrivateExposed
						}, a.a.createElement("div", null, S._("Private: send a Modmail from {currentUserName} to the user", [S._param("currentUserName", a.a.createElement(F, null, `u/${e.currentUserName}`))], {
							hk: "wFSJr"
						})))), n
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
					return a.a.createElement(m.e, {
						onClick: this.closeDropdown
					}, e.isLoading || e.removalReasons.length > 0 && a.a.createElement(m.i, null, a.a.createElement(x.a, null, a.a.createElement(m.q, null, S._("Add a removal reason", null, {
						hk: "4odEgX"
					}), e.itemIds.length > 1 && S._("({number of items} posts/comments)", [S._param("number of items", e.itemIds.length)], {
						hk: "4u7ZzL"
					})), a.a.createElement(g.a, {
						onClick: this.onCancel
					}, a.a.createElement(m.b, null)))), a.a.createElement(m.l, null, e.isLoading || e.removalReasons.length > 0 ? a.a.createElement(k.a, {
						isDropdownOpen: t.isDropdownOpen,
						isLoading: e.isLoading,
						onSelectReason: this.onSelectReason,
						onToggleDropdown: this.handleToggleDropdown,
						selectedReason: t.selectedReason,
						subredditRemovalReasons: e.removalReasons
					}) : a.a.createElement(P, null, S._("You don't have any removal reasons yet", null, {
						hk: "2cPgPy"
					}), a.a.createElement(p.a, {
						to: `/r/${e.subredditName}/about/removal`,
						target: "_blank"
					}, a.a.createElement(u.r, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, S._("Add a removal reason", null, {
						hk: "3MHM7e"
					})))), t.selectedReason && a.a.createElement(W, null, a.a.createElement(m.h, null, a.a.createElement(b.a, {
						name: "REMOVAL_REASON_INPUT",
						onChange: this.onSelectRemovalType,
						value: t.removalType
					}, this.renderRemovalTypeOptions())), a.a.createElement(U, {
						value: t.message,
						onChange: this.onMessageInputChange
					}), a.a.createElement(M, {
						maxChars: E.a,
						text: t.message.trim()
					}), a.a.createElement(H, null, t.removalType !== E.f.Public && a.a.createElement(a.a.Fragment, null, a.a.createElement(B, null), S._("A link to the removed content will be appended to your message", null, {
						hk: "1DbEGF"
					}))))), a.a.createElement(q, null, a.a.createElement(G, null, a.a.createElement(R, null, S._("Mod note (Only mods will see this note)", null, {
						hk: "3InAsy"
					}))), a.a.createElement(G, null, a.a.createElement(D, {
						placeholder: S._("This is a short note to your mod team on why the content was removed.", null, {
							hk: "4goqsC"
						}),
						value: t.modNote,
						onChange: this.onUpdateModNote
					})), a.a.createElement(G, null, a.a.createElement(M, {
						maxChars: E.b,
						text: t.modNote.trim()
					})), a.a.createElement(K, null, a.a.createElement(u.o, {
						onClick: this.onCancel,
						"data-redditstyle": !0
					}, S._("Cancel", null, {
						hk: "2TSLl5"
					})), a.a.createElement(A, {
						onClick: this.onSubmit,
						disabled: !this.canSave(),
						"data-redditstyle": !0
					}, S._("Submit", null, {
						hk: "4aU3dh"
					})))))
				}
			}
			t.default = Object(i.a)(T(V))
		},
		"./src/reddit/components/RemovalReasons/RemovalReasonEditorModal.m.less": function(e, t, n) {
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
		"./src/reddit/components/RemovalReasons/RemovalReasonItem.m.less": function(e, t, n) {
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
		"./src/reddit/components/RemovalReasons/index.m.less": function(e, t, n) {
			e.exports = {
				Rules: "-z_XjylM-4VxXIVlUJupm",
				rules: "-z_XjylM-4VxXIVlUJupm"
			}
		},
		"./src/reddit/components/RemovalReasons/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/removalReasons/index.ts"),
				m = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				u = n("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				p = n("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				b = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/models/RemovalReason/index.ts"),
				x = n("./src/reddit/selectors/activeModalId.ts"),
				E = n("./src/reddit/selectors/removalReasons.ts"),
				v = n("./src/higherOrderComponents/asModal/index.tsx"),
				_ = n("./src/lib/lessComponent.tsx"),
				C = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				k = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				y = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				O = n("./src/reddit/controls/TextButton/index.tsx"),
				S = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				j = n("./src/reddit/components/RemovalReasons/RemovalReasonEditorModal.m.less"),
				w = n.n(j);
			const I = {
					message: "",
					title: ""
				},
				N = _.a.wrapped(k.f, "GenericGreetingText", w.a),
				T = _.a.wrapped(k.s, "DeleteReasonButton", w.a),
				M = _.a.wrapped(h.l, "PrimaryButton", w.a),
				P = _.a.wrapped(k.t, "TextArea", w.a),
				R = _.a.wrapped(k.g, "ModalFooter", w.a),
				A = _.a.wrapped(y.c, "Input", w.a);
			class L extends o.a.Component {
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
					return o.a.createElement(k.e, null, o.a.createElement(k.i, null, o.a.createElement(S.a, null, o.a.createElement(k.q, null, e.removalReason ? a.fbt._("Edit removal reason", null, {
						hk: "1P0jAw"
					}) : a.fbt._("Add new reason", null, {
						hk: "jDYo"
					})), o.a.createElement(O.a, {
						onClick: e.toggleModal
					}, o.a.createElement(k.b, null)))), o.a.createElement(k.l, null, o.a.createElement(k.h, null, o.a.createElement(A, {
						placeholder: a.fbt._("Removal reason title", null, {
							hk: "4hFurd"
						}),
						value: t.title,
						onChange: this.onTitleInputChange
					}), o.a.createElement(C.a, {
						text: t.title.trim(),
						maxChars: f.d
					})), o.a.createElement(k.o, null, a.fbt._("Reason message:", null, {
						hk: "yMtrM"
					})), o.a.createElement(N, null, a.fbt._("Hi u/username,", null, {
						hk: "NE4XP"
					})), o.a.createElement(P, {
						placeholder: a.fbt._("Write a message that will communicate to the user why their post was removed.", null, {
							hk: "4u5AVO"
						}),
						value: t.message,
						onChange: this.onMessageInputChange,
						"data-redditstyle": !0
					}), o.a.createElement(C.a, {
						text: t.message.trim(),
						maxChars: f.a
					})), o.a.createElement(R, null, o.a.createElement(M, {
						onClick: this.onSave,
						"data-redditstyle": !0,
						disabled: !this.canSave()
					}, e.removalReason ? a.fbt._("Save", null, {
						hk: "4yMsMq"
					}) : a.fbt._("Add new reason", null, {
						hk: "34P0ii"
					})), o.a.createElement(k.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, a.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), e.removalReason && o.a.createElement(T, {
						onClick: e.onDeleteReason
					}, a.fbt._("Delete", null, {
						hk: "4lt26q"
					}))))
				}
			}
			var F = Object(v.a)(L),
				D = n("./src/reddit/layout/row/Inline/index.tsx"),
				U = n("./src/reddit/components/RemovalReasons/RemovalReasonItem.m.less"),
				B = n.n(U);
			const {
				fbt: H
			} = n("./node_modules/fbt/lib/FbtPublic.js"), W = _.a.wrapped(h.r, "EditButton", B.a), q = _.a.wrapped(D.a, "Row", B.a), G = _.a.div("ReasonNumber", B.a), K = _.a.div("ReasonText", B.a);
			var V = e => o.a.createElement(q, null, o.a.createElement(G, null, e.index + 1), o.a.createElement(K, null, e.removalReason.title), o.a.createElement(W, {
					onClick: e.onEdit,
					"data-redditstyle": !0
				}, H._("Edit", null, {
					hk: "1nftDt"
				}))),
				z = n("./src/reddit/components/RemovalReasons/index.m.less"),
				X = n.n(z);
			const Q = {
					reasonToEdit: null
				},
				J = Object(d.c)({
					isConfirmModalOpen: e => "RemovalReasons--Modal--DeleteConfirmation" === Object(x.a)(e),
					isRemovalReasonEditorModalOpen: e => "RemovalReasons--Editor--Modal" === Object(x.a)(e),
					removalReasons: E.c
				}),
				Y = Object(i.b)(J, (e, {
					subredditId: t
				}) => ({
					addRemovalReason: n => e(Object(c.addRemovalReason)(t, n)),
					deleteRemovalReason: n => e(Object(c.deleteRemovalReason)(t, n)),
					editRemovalReason: n => e(Object(c.editRemovalReason)(t, n)),
					toggleConfirmationModal: () => e(Object(l.i)("RemovalReasons--Modal--DeleteConfirmation")),
					toggleReasonEditorModal: () => e(Object(l.i)("RemovalReasons--Editor--Modal"))
				}));
			class Z extends o.a.Component {
				constructor(e) {
					super(e), this.onAddReason = () => {
						this.setState({
							reasonToEdit: null
						}), this.props.toggleReasonEditorModal(), this.props.sendEventWithName("add_new")()
					}, this.onEditReason = e => () => {
						this.setState({
							reasonToEdit: e
						}), this.props.toggleReasonEditorModal(), e && this.props.sendEventWithName("edit")()
					}, this.renderReasonEditorModal = () => o.a.createElement(F, {
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
						isRemovalReasonEditorModalOpen: n,
						removalReasons: r,
						sendEventWithName: i,
						toggleConfirmationModal: d
					} = this.props;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(b.c, null, o.a.createElement(h.l, {
						onClick: this.onAddReason,
						disabled: r.length >= f.c || n,
						"data-redditstyle": !0
					}, a.fbt._("Add removal reason", null, {
						hk: "2fHPVe"
					}))), o.a.createElement(b.a, null, o.a.createElement(b.b, null, a.fbt._("Removal reasons", null, {
						hk: "3IWxkH"
					}), o.a.createElement(p.a, {
						linkUrl: `${s.a.redditModHelpUrl}/hc/en-us/articles/360010094892`
					})), r.length > 0 ? r.map((e, t) => o.a.createElement(V, {
						index: t,
						key: e.title,
						onEdit: this.onEditReason(e),
						removalReason: e
					})) : o.a.createElement(u.c, {
						text: a.fbt._("No removal reasons yet", null, {
							hk: "1j70G1"
						})
					}, o.a.createElement(g.a, {
						name: "rules",
						className: X.a.Rules
					}))), n && this.renderReasonEditorModal(), t && this.state.reasonToEdit && o.a.createElement(m.a, {
						actionText: a.fbt._("Delete", null, {
							hk: "4lt26q"
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
			t.a = Y(Z)
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "ki2VbfBhU-qxg1S6VyET6",
				above: "_8fNGSBGvr1Ds8PbrsUGzN",
				below: "_38gWvHp3NJkR5r5ftUfbFG",
				HoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2",
				hoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2"
			}
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less"),
				d = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = o.a.wrapped(e => {
				const {
					children: t,
					className: n,
					renderBelow: s,
					text: o,
					tooltipContentClass: i,
					...c
				} = e;
				return a.a.createElement("div", l({}, c, {
					className: Object(r.a)(d.a.container, n)
				}), o ? a.a.createElement("div", {
					className: Object(r.a)(d.a.tooltip, i, s ? d.a.below : d.a.above)
				}, o) : null, t)
			}, "HoverTooltip", d.a)
		},
		"./src/reddit/components/RichTextEditor/emotes/EmoteButton.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s, a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = n("./src/reddit/components/RichTextEditor/emotes/emoteButton.m.less"),
				l = n.n(d);
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(s || (s = {}));
			const c = ({
				className: e,
				containerClassName: t,
				imageClassName: n,
				disabled: d,
				id: c,
				imagePath: m,
				onClick: u,
				onKeyDown: p,
				title: b,
				onClickDelete: h,
				mouseEnterBufferTime: g = 750
			}) => {
				const f = Object(a.useRef)(s.Outside),
					[x, E] = Object(a.useState)(!1);
				return r.a.createElement("div", {
					className: Object(o.a)(l.a.container, t),
					onMouseEnter: h ? () => {
						f.current = s.Inside, setTimeout(() => {
							f.current === s.Inside && E(!0)
						}, g)
					} : void 0,
					onMouseLeave: h ? () => {
						f.current = s.Outside, E(!1)
					} : void 0
				}, x && r.a.createElement("button", {
					className: l.a.deleteButton,
					onClick: h
				}, r.a.createElement(i.b, {
					className: l.a.deleteIcon
				})), r.a.createElement("button", {
					className: Object(o.a)(l.a.emoteButton, e),
					disabled: d,
					id: c,
					title: b,
					onClick: u,
					onKeyDown: p,
					tabIndex: 1
				}, r.a.createElement("div", {
					className: Object(o.a)(l.a.emoteImage, n),
					style: {
						backgroundImage: `url(${m})`
					}
				})))
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/Powerups/DeleteEmojiModal.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				o = n("./src/reddit/components/RichTextEditor/emotes/Powerups/emotesSection.m.less"),
				i = n.n(o);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = ({
				emojiUrl: e,
				onConfirm: t,
				onCancel: n,
				onClose: s
			}) => a.a.createElement(r.a, {
				onConfirm: t,
				onCancel: n,
				onClose: s,
				headerText: d._("Delete emoji", null, {
					hk: "27GEDb"
				}),
				modalText: a.a.createElement("p", {
					className: i.a.deleteModalContainer
				}, a.a.createElement("img", {
					className: i.a.deleteModalImage,
					src: e
				}), d._("Are you sure you want to delete this emoji?", null, {
					hk: "1bmNdu"
				})),
				actionText: d._("Delete", null, {
					hk: "4lt26q"
				}),
				cancelActionText: d._("Go back", null, {
					hk: "3zzMov"
				}),
				withOverlay: !0
			})
		},
		"./src/reddit/components/RichTextEditor/emotes/Powerups/emotesSection.m.less": function(e, t, n) {
			e.exports = {
				addButton: "_131SsHx6UfUQsBbPHh8m1D",
				addButtonDisabled: "eRYyo8WYr0Hti7IAGe_gO",
				addIcon: "R3xFUrQvsMx3gn2gqGv0w",
				uploadInput: "_183AY4WVSatH9Qe_MAXDE-",
				loadingContainer: "_2xoHnDYYs7peY_5Im4vQDn",
				emoteButton: "_2s68zj-4Pb6nTX2IUDzLkz",
				placeholderEmoteButton: "_1xLXujnXEDJIfZl94qCnb6",
				customEmoteImage: "_3yyGg_Mez5tP41OCc9Nne8",
				emotePackTitle: "_2ukOHQG9KkBde1ztDLudOP",
				newIcon: "_3_QvdlHkxRkqBb9ZNRQZXx",
				emotePackSubtitle: "_1-OnXZrmw20X79pBvJWaEy",
				emotes: "DNWbRyf3z71g0nqfrzQ4T",
				freeEmotePack: "_13ylKQWUAkdhTJRIuHyJfq",
				disabled: "Ejq92_2ovDkhH3FjoerXW",
				unlockButton: "_3EI1On_HJixL24yeuq2w62",
				deleteModalContainer: "_2JcZhkY3vXBVFEAMyuM8D5",
				deleteModalImage: "_1V2bCmzxzskT1fA3fY70lK"
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/Powerups/useEmojiUpload.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				a = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/reddit/actions/economics/powerups/index.ts");
			const o = (e, t, n, o, i, d) => {
				const l = Object(a.d)(),
					c = Object(s.useRef)(null),
					[m, u] = Object(s.useState)(0),
					p = async (t, n = !1, s) => {
						try {
							return await l(Object(r.b)({
								subredditId: e,
								file: t
							})), s(), {
								success: !0
							}
						} catch (a) {
							return n ? p(t, !1, s) : (s(), {
								success: !1,
								error: a.message
							})
						}
					}, b = () => u(e => e - 1);
				return {
					maxEmojisUploaded: t.length >= 20,
					maxEmojisUploading: t.length + m >= 20,
					onFileChange: async e => {
						const s = e.currentTarget.files;
						if (!(null == s ? void 0 : s.length)) return;
						if (s.length + t.length > 20) {
							const e = 20 - t.length;
							return null == n || n(e), void(c.current && (c.current.value = ""))
						}
						u(s.length), null == o || o(s.length);
						const a = await Promise.all([...s].map(e => p(e, !0, b))),
							r = a.reduce((e, t) => e + (t.success ? 1 : 0), 0);
						r > 0 && (null == i || i(r));
						const l = a.length - r;
						l > 0 && (null == d || d(l)), c.current && (c.current.value = ""), u(0)
					},
					numUploading: m,
					onClickUpload: () => {
						var e;
						null === (e = c.current) || void 0 === e || e.click()
					},
					uploadInput: c
				}
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/emoteButton.m.less": function(e, t, n) {
			e.exports = {
				container: "_1xDkiINVQUjf0tjZcbF3a7",
				emoteButton: "_2-SqXmcI6RcjKEbTfkrLVe",
				emoteImage: "_1WpEszyqkHofX36kiLrJ8x",
				deleteButton: "_2mgKNuqCKnjSfh2dBW7iqI",
				deleteIcon: "_1BJNzscR61JS-t7pR4p3Ik"
			}
		},
		"./src/reddit/components/SaveIndicator/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ScheduledPost/ControlRow/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1xM2tjm8c7LuqnoEJG1Ws1",
				controlRow: "P7KCCrRfT4TO2wcnk_Kjv",
				controlRowItem: "_1AkGbjxtRpq3ZhKADdUTU3"
			}
		},
		"./src/reddit/components/ScheduledPost/MetaLine/index.m.less": function(e, t, n) {
			e.exports = {
				content: "_297_pyPlxmqBF0tLkUhTME",
				icon: "_1n_ojuNDT8JeH9DxmHJZt9",
				author: "_1k9D_vEsQ8odWCNERbDOxX",
				modIcon: "_3ryKOTfQ_vqgap0EZsZHAl",
				stickyIcon: "qfjbZcX6-FZK2BGrOXezD"
			}
		},
		"./src/reddit/components/ScheduledPost/MetaLine/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/components/AuthorLink/index.tsx"),
				i = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				d = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				l = n("./src/reddit/icons/fonts/Sticky/index.tsx"),
				c = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				m = n("./src/reddit/models/ScheduledPost/index.ts"),
				u = n("./src/reddit/components/ScheduledPost/MetaLine/index.m.less"),
				p = n.n(u);
			class b extends a.a.PureComponent {
				render() {
					if (!Object(m.o)(this.props.subreddit)) return null;
					const {
						isModDistinguished: e,
						isPostAsMetaMod: t,
						subreddit: n,
						owner: s,
						isSticky: u
					} = this.props, b = t ? r.l : Object(m.n)(s) ? s.name : void 0;
					return a.a.createElement("span", {
						className: p.a.content
					}, a.a.createElement(i.a, {
						to: n.path
					}, n.prefixedName), b && a.a.createElement(a.a.Fragment, null, a.a.createElement(d.a, null), a.a.createElement(o.a, {
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
		"./src/reddit/components/ScheduledPost/OverflowMenu/withOverflowMenu.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				d = n("./src/reddit/components/OverflowMenu/index.tsx"),
				l = n("./src/reddit/controls/CheckboxMenuItem/index.tsx");
			var c = e => a.a.createElement(d.b, {
					dropdownId: `SCHEDULED_POST_DROPDOWN${e.scheduledPostId}`,
					onClick: e.onOpenOverflow
				}, a.a.createElement(l.a, {
					isSelected: e.isSticky,
					onClick: e.onToggleIsSticky,
					text: i.fbt._("Sticky post", null, {
						hk: "UOShB"
					})
				}), a.a.createElement(l.a, {
					isSelected: e.isModDistinguished,
					onClick: e.onToggleIsModDistinguished,
					text: i.fbt._("Distinguish as Mod", null, {
						hk: "3opu7K"
					})
				}), a.a.createElement(l.a, {
					isSelected: e.isOriginalContent,
					onClick: e.onToggleIsOC,
					text: i.fbt._("Mark as OC", null, {
						hk: "32LGcQ"
					})
				}), a.a.createElement(l.a, {
					isSelected: e.isNsfw,
					onClick: e.onToggleIsNsfw,
					text: i.fbt._("Mark as NSFW", null, {
						hk: "2qBIcp"
					})
				}), a.a.createElement(l.a, {
					isSelected: e.isSpoiler,
					onClick: e.onToggleIsSpoiler,
					text: i.fbt._("Mark as Spoiler", null, {
						hk: "rOev9"
					})
				})),
				m = n("./src/reddit/selectors/scheduledPosts/index.ts");
			const u = Object(o.c)({
					isLoading: m.j
				}),
				p = Object(r.b)(u);

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
							scheduledPost: n,
							onUpdateMetadata: s,
							onOpenOverflow: r,
							...o
						} = this.props, i = {
							...o,
							renderOverflowMenu: this.renderOverflowMenu
						};
						return a.a.createElement(e, i)
					}
				}
				return t.displayName = `WithOverflowMenu(${e.displayName||e.name})`, p(t)
			}
		},
		"./src/reddit/components/ScheduledPost/PostTitle/index.m.less": function(e, t, n) {
			e.exports = {
				title: "_3jA9JBnv4bqmmiAw3Akmug"
			}
		},
		"./src/reddit/components/ScheduledPost/PostTitle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/reddit/components/ScheduledPost/PostTitle/index.m.less"),
				o = n.n(r);
			class i extends a.a.PureComponent {
				render() {
					return a.a.createElement("span", {
						className: o.a.title
					}, this.props.title)
				}
			}
			t.a = i
		},
		"./src/reddit/components/ScheduledPost/TopMetaLine/FailureMetaLine/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1YrhJ0z1RfTXg7jHYgApSr",
				error: "_2_f_ecVpbx4yoMzazJYkDP",
				retryButton: "_1KbjdUJVdbZQOJN8d6LTsX",
				parametricMetaData: "_2x3oXUTdLAKAob3BYLRkmH"
			}
		},
		"./src/reddit/components/ScheduledPost/TopMetaLine/TemporalMetaLine/index.m.less": function(e, t, n) {
			e.exports = {
				container: "qDE3oDok1392-t8IDOBfk",
				clock: "_2sfIhl6E6vfZCwxx54EUNB",
				parametricMetaData: "_3bAfM2inJTjD3ZXNzO5nE5"
			}
		},
		"./src/reddit/components/ScheduledPost/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ScheduledPost/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return fe
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/scheduledPosts/index.ts"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/telemetry/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = n("./src/reddit/actions/scheduledPosts/index.ts"),
				u = n("./src/reddit/actions/scheduledPosts/delete.ts"),
				p = n("./src/reddit/actions/scheduledPosts/edit.ts"),
				b = n("./src/lib/makeActionCreator/index.ts"),
				h = n("./src/reddit/actions/scheduledPosts/constants.ts"),
				g = n("./src/reddit/actions/toaster.ts"),
				f = n("./src/reddit/actions/urlRequested.ts"),
				x = n("./src/lib/makeGqlRequest/index.ts"),
				E = n("./src/redditGQL/operations/SubmitScheduledPost.json");
			var v = n("./src/reddit/models/Toast/index.ts");
			const _ = Object(b.a)(h.l),
				C = (e, t) => async (n, s, {
					gqlContext: a
				}) => {
					const r = Object(i.p)(s(), {
						subredditId: e,
						scheduledPostId: t
					});
					if (!r) return void n(Object(g.f)(Object(g.e)(h.u(), v.b.Error)));
					const o = await ((e, t) => Object(x.a)(e, {
						...E,
						variables: t
					}))(a(), {
						input: {
							id: r.id
						}
					});
					if (!o.ok) return void n(Object(g.f)(Object(g.e)(h.v(), v.b.Error, h.s(), C(e, t))));
					const d = o.body.data.submitScheduledPost.post.permalink;
					n(Object(f.a)(d, !1)), n(Object(g.f)(Object(g.e)(h.x(), v.b.SuccessCommunity))), n(_({
						subredditId: e,
						scheduledPostId: t
					}))
				};
			var k = n("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				y = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				O = n("./src/reddit/components/FlairList/index.tsx"),
				S = n("./src/reddit/components/PostLeftRail/index.tsx"),
				j = n("./src/lib/classNames/index.ts"),
				w = n("./src/reddit/components/VerticalVotes/votes.tsx"),
				I = n("./src/reddit/controls/Score/index.tsx"),
				N = n("./src/reddit/models/Vote/index.ts"),
				T = n("./src/reddit/components/VerticalVotes/index.m.less"),
				M = n.n(T);
			class P extends r.a.PureComponent {
				render() {
					return r.a.createElement("div", {
						className: M.a.votesContainer
					}, r.a.createElement("button", {
						className: M.a.disabledVoteIcon,
						"aria-label": s.fbt._("Upvote", null, {
							hk: "4aEt1X"
						}),
						"aria-pressed": !1,
						disabled: !0
					}, r.a.createElement(w.d, {
						compact: !1,
						voteState: N.a.notVoted,
						interactive: !1
					})), r.a.createElement(I.a, {
						disableInlineColor: !0,
						className: Object(j.a)(M.a.Score, M.a.disabledScore),
						score: 0,
						voteState: N.a.notVoted,
						isScoreHidden: !0
					}), r.a.createElement("button", {
						className: M.a.disabledVoteIcon,
						"aria-label": s.fbt._("downvote", null, {
							hk: "4xXpvV"
						}),
						"aria-pressed": !1,
						disabled: !0
					}, r.a.createElement(w.c, {
						compact: !1,
						voteState: N.a.notVoted,
						interactive: !1
					})))
				}
			}
			var R = P,
				A = n("./src/reddit/constants/thumbnails.ts"),
				L = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				F = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				D = n("./src/reddit/models/PostCreationForm/index.ts"),
				U = n("./src/reddit/models/ScheduledPost/index.ts"),
				B = n("./src/reddit/components/ScheduledPost/OverflowMenu/withOverflowMenu.tsx"),
				H = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				W = n("./src/reddit/icons/svgs/Post/index.tsx"),
				q = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				G = n("./src/reddit/components/ScheduledPost/ControlRow/index.m.less"),
				K = n.n(G);
			const V = e => {
				const {
					icon: t,
					onClick: n
				} = e;
				return r.a.createElement("span", {
					onClick: n,
					className: Object(j.a)(K.a.controlRowItem, e.className)
				}, r.a.createElement(t, {
					className: K.a.icon
				}), " ", e.text)
			};
			class z extends r.a.Component {
				render() {
					return r.a.createElement("span", {
						className: K.a.controlRow
					}, this.props.onSubmitPostNow && r.a.createElement(V, {
						icon: W.a,
						text: s.fbt._("Submit post now", null, {
							hk: "QkS4y"
						}),
						onClick: this.props.onSubmitPostNow
					}), r.a.createElement(V, {
						icon: H.a,
						text: s.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: this.props.onEditScheduledPost
					}), r.a.createElement(V, {
						icon: q.b,
						text: s.fbt._("Delete", null, {
							hk: "1uVY7w"
						}),
						onClick: this.props.onDeleteScheduledPost
					}), this.props.renderOverflowMenu())
				}
			}
			var X = Object(B.a)(z),
				Q = n("./src/reddit/components/ScheduledPost/MetaLine/index.tsx"),
				J = n("./src/reddit/components/ScheduledPost/PostTitle/index.tsx"),
				Y = n("./src/reddit/icons/svgs/Clear/index.tsx"),
				Z = n("./src/reddit/components/ScheduledPost/TopMetaLine/FailureMetaLine/index.m.less"),
				$ = n.n(Z);
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class te extends r.a.PureComponent {
				componentDidMount() {
					this.props.onViewFailedPost()
				}
				render() {
					const {
						scheduledPost: e
					} = this.props, {
						owner: t
					} = e, n = Object(U.n)(t) && t.prefixedName;
					return r.a.createElement("div", {
						className: $.a.container
					}, r.a.createElement("div", null, r.a.createElement(Y.a, {
						className: $.a.error
					}), ee._("Post failed to submit! Please {=retry}", [ee._param("=retry", r.a.createElement("button", {
						className: $.a.retryButton,
						onClick: this.props.onSubmitPostNow
					}, ee._("retry", null, {
						hk: "hER94"
					})))], {
						hk: "4yOnl8"
					})), r.a.createElement("div", null, ee._("Scheduled by {=[post owner]}", [ee._param("=[post owner]", r.a.createElement("span", {
						className: $.a.parametricMetaData
					}, ee._("{post owner}", [ee._param("post owner", n)], {
						hk: "25fi1G"
					})))], {
						hk: "36vTyl"
					})))
				}
			}
			var ne = Object(o.b)(null, (e, {
					scheduledPost: t
				}) => ({
					onSubmitPostNow: () => {
						e(C(t.subreddit.id, t.id)), e((e, t) => Object(l.a)(Object(F.n)()(t())))
					},
					onViewFailedPost: () => e((e, n) => Object(l.a)(Object(F.w)()(n(), t)))
				}))(te),
				se = n("./src/reddit/helpers/scheduledPosts/index.ts"),
				ae = n("./src/reddit/icons/svgs/Clock/index.tsx"),
				re = n("./src/reddit/components/ScheduledPost/TopMetaLine/TemporalMetaLine/index.m.less"),
				oe = n.n(re);
			const {
				fbt: ie
			} = n("./node_modules/fbt/lib/FbtPublic.js"), de = e => {
				return `${Object(se.c)(e.publishAt)} ${Object(se.d)(e.clientTimezone).displayText}`
			};
			class le extends r.a.PureComponent {
				render() {
					const {
						scheduledPost: e
					} = this.props, {
						owner: t
					} = e, n = Object(U.n)(t) && t.prefixedName;
					return r.a.createElement("div", {
						className: oe.a.container
					}, r.a.createElement(ae.a, {
						className: oe.a.clock
					}), r.a.createElement("div", null, r.a.createElement("div", null, ie._("This post is scheduled for {=[time]}", [ie._param("=[time]", r.a.createElement("span", {
						className: oe.a.parametricMetaData
					}, ie._("{time}", [ie._param("time", de(e))], {
						hk: "JrMs3"
					})))], {
						hk: "4gFrnr"
					})), r.a.createElement("div", null, ie._("Scheduled by {=[post owner]}", [ie._param("=[post owner]", r.a.createElement("span", {
						className: oe.a.parametricMetaData
					}, ie._("{post owner}", [ie._param("post owner", n)], {
						hk: "25fi1G"
					})))], {
						hk: "36vTyl"
					}))))
				}
			}
			var ce = le;
			class me extends r.a.PureComponent {
				render() {
					const {
						scheduledPost: e
					} = this.props;
					switch (e.state) {
						case U.e.FAILED:
							return r.a.createElement(ne, {
								scheduledPost: e
							});
						case U.e.PROCESSING:
						case U.e.CREATED:
						default:
							return r.a.createElement(ce, {
								scheduledPost: e
							})
					}
				}
			}
			var ue = me,
				pe = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				be = n.n(pe),
				he = n("./src/reddit/components/ScheduledPost/index.m.less"),
				ge = n.n(he);
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
						rteMode: D.i.RICH_TEXT,
						type: "rtjson"
					},
					thumbnail: {
						url: A.a.DEFAULT,
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
						subredditId: n
					}) => {
						const s = Object(i.p)(e, {
							subredditId: n,
							scheduledPostId: t
						});
						return s ? {
							...fe,
							isNSFW: s.isNsfw,
							title: s.title
						} : null
					},
					flair: (e, {
						scheduledPostId: t,
						subredditId: n
					}) => {
						const s = Object(i.p)(e, {
							subredditId: n,
							scheduledPostId: t
						});
						return s ? Object(i.m)({
							scheduledPost: s
						}) : null
					},
					scheduledPost: (e, {
						scheduledPostId: t,
						subredditId: n
					}) => Object(i.p)(e, {
						subredditId: n,
						scheduledPostId: t
					})
				}),
				Ee = Object(o.b)(xe, (e, {
					scheduledPostId: t,
					subredditId: n
				}) => ({
					onSubmitPostNow: () => {
						e(C(n, t)), e((e, t) => Object(l.a)(Object(F.n)()(t())))
					},
					onEditScheduledPost: () => {
						e(Object(p.b)(n, t)), e((e, t) => Object(l.a)(Object(F.d)()(t())))
					},
					onDeleteScheduledPost: () => e(Object(u.a)(n, t)),
					onOpenOverflow: () => {
						e((e, t) => Object(l.a)(Object(F.h)(!1)(t())))
					},
					onUpdateMetadata: s => e((e, a) => {
						const r = Object(i.p)(a(), {
							subredditId: n,
							scheduledPostId: t
						});
						r && e(Object(m.b)(s, r))
					})
				}));
			class ve extends r.a.PureComponent {
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
						scheduledPost: n
					} = this.props;
					return e && t && n ? r.a.createElement("div", {
						className: ge.a.container
					}, r.a.createElement(ue, {
						scheduledPost: n
					}), r.a.createElement("div", {
						className: be.a.classicPostStyles
					}, r.a.createElement(S.b, null, r.a.createElement(R, null)), r.a.createElement("div", {
						style: Object(L.c)(void 0, this.props),
						className: ge.a.backgroundWrapper
					}, r.a.createElement("div", {
						className: ge.a.mainBody
					}, r.a.createElement("div", {
						className: ge.a.thumbnailContainer
					}, r.a.createElement(k.a, {
						post: e
					})), r.a.createElement("div", {
						className: ge.a.content
					}, r.a.createElement("div", null, r.a.createElement(J.a, {
						title: n.title
					}), r.a.createElement(O.a, {
						className: ge.a.flairList,
						flair: t
					})), r.a.createElement(Q.a, {
						isModDistinguished: n.isModDistinguished,
						isPostAsMetaMod: n.isPostAsMetaMod,
						isSticky: !!n.sticky && "NONE" !== n.sticky,
						subreddit: n.subreddit,
						owner: n.owner
					}), r.a.createElement(X, {
						onSubmitPostNow: n.state === U.e.FAILED ? void 0 : this.onSubmitPostNow,
						onEditScheduledPost: this.onEditScheduledPost,
						onDeleteScheduledPost: this.onDeleteScheduledPost,
						onUpdateMetadata: this.props.onUpdateMetadata,
						scheduledPost: n,
						onOpenOverflow: this.props.onOpenOverflow
					}))))), this.state.deleteConfirmModalIsOpen && r.a.createElement(y.a, {
						onClose: this.onCancelDeleteScheduledPost,
						onCancel: this.onCancelDeleteScheduledPost,
						onConfirm: this.onConfirmDeleteScheduledPost,
						actionText: s.fbt._("Delete", null, {
							hk: "1WN0R6"
						}),
						modalText: s.fbt._("Are you sure you want to delete this scheduled post? This action cannot be undone.", null, {
							hk: "1EdQC7"
						}),
						withOverlay: !0
					}), this.state.submitConfirmModalIsOpen && r.a.createElement(y.a, {
						onClose: this.onCancelSubmitPostNow,
						onCancel: this.onCancelSubmitPostNow,
						onConfirm: this.onConfirmSubmitPostNow,
						actionText: s.fbt._("Submit", null, {
							hk: "3kl12J"
						}),
						modalText: s.fbt._("Are you sure you want to submit this scheduled post now? This action cannot be undone.", null, {
							hk: "18O8dB"
						}),
						withOverlay: !0
					})) : null
				}
			}
			t.a = Object(c.a)(Ee(ve))
		},
		"./src/reddit/components/Settings/shared/SectionHeading.m.less": function(e, t, n) {
			e.exports = {
				Component: "BotIImuktRA9aFAPP0O4Z",
				component: "BotIImuktRA9aFAPP0O4Z"
			}
		},
		"./src/reddit/components/Settings/shared/SectionHeading.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/Settings/shared/SectionHeading.m.less"),
				a = n.n(s),
				r = n("./src/lib/lessComponent.tsx");
			t.a = r.a.h3("Component", a.a)
		},
		"./src/reddit/components/Settings/shared/Widgets.m.less": function(e, t, n) {
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
				RangeSlider: "_2J8tywkkd4Gotm3jZ2Gcv0",
				rangeSlider: "_2J8tywkkd4Gotm3jZ2Gcv0",
				isNightModeOn: "KUWYDFs7fIjkQNSOL_BR6",
				Wrapper__LineBreak: "wVinKyEoajEmwhqwINYGd",
				wrapperLineBreak: "wVinKyEoajEmwhqwINYGd",
				ActionHintText: "_2sMk-Gi9c8T3BKYlxSopql",
				actionHintText: "_2sMk-Gi9c8T3BKYlxSopql",
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
				NoColor: "mI7WmWMma8pZnlYRHtE56",
				noColor: "mI7WmWMma8pZnlYRHtE56",
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
		"./src/reddit/components/Settings/shared/Widgets.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "n", (function() {
				return G
			})), n.d(t, "k", (function() {
				return Q
			})), n.d(t, "o", (function() {
				return Y
			})), n.d(t, "f", (function() {
				return $
			})), n.d(t, "l", (function() {
				return te
			})), n.d(t, "m", (function() {
				return re
			})), n.d(t, "p", (function() {
				return oe
			})), n.d(t, "j", (function() {
				return pe
			})), n.d(t, "b", (function() {
				return be
			})), n.d(t, "g", (function() {
				return he
			})), n.d(t, "a", (function() {
				return ge
			})), n.d(t, "d", (function() {
				return xe
			})), n.d(t, "i", (function() {
				return Ee
			})), n.d(t, "c", (function() {
				return ve
			})), n.d(t, "e", (function() {
				return _e
			})), n.d(t, "h", (function() {
				return Ce
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-uid/dist/es2015/hooks.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/higherOrderComponents/asTooltip.tsx"),
				m = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				u = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				p = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				b = n("./src/reddit/controls/Dropdown/index.tsx"),
				h = n("./src/reddit/controls/Dropdown/Row.tsx"),
				g = n("./src/reddit/controls/FormFields/index.tsx"),
				f = n("./src/lib/lessComponent.tsx"),
				x = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				E = n("./src/reddit/controls/Select/index.m.less"),
				v = n.n(E);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const C = f.a.span("Wrapper", v.a),
				k = f.a.select("Inner", v.a),
				y = f.a.wrapped(x.b, "Caret", v.a);

			function O({
				className: e,
				innerClassName: t,
				...n
			}) {
				const s = n.disabled ? {
					"data-disabled": n.disabled
				} : {};
				return a.a.createElement(C, {
					className: e
				}, a.a.createElement(k, _({
					className: t
				}, n)), a.a.createElement(y, _({
					isSubreddit: !0
				}, s)))
			}
			var S = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				j = n("./src/reddit/controls/Typography/index.tsx"),
				w = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				I = n("./src/reddit/icons/svgs/Circle/index.tsx"),
				N = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				T = n("./node_modules/lodash/range.js"),
				M = n.n(T),
				P = n("./src/reddit/controls/Button/index.tsx"),
				R = n("./src/reddit/layout/row/Inline/index.tsx"),
				A = n("./src/reddit/models/Flair/index.ts"),
				L = n("./src/reddit/selectors/tooltip.ts"),
				F = n("./src/reddit/selectors/user.ts"),
				D = n("./src/reddit/components/Settings/shared/Widgets.m.less"),
				U = n.n(D);

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const H = Object(c.a)(b.a),
				W = f.a.wrapped(I.a, "Circle", U.a),
				q = f.a.h3("Label", U.a),
				G = f.a.wrapped(j.c, "Subtext", U.a),
				K = f.a.wrapped(u.a, "HoverTooltip", U.a),
				V = f.a.div("ControlContainer", U.a),
				z = f.a.div("TextContainer", U.a),
				X = f.a.div("ActionContainer", U.a),
				Q = ({
					className: e,
					direction: t,
					isCreateCommunity: n,
					inModal: s,
					isNightModeOn: r,
					disabled: o,
					indent: i,
					last: l,
					...c
				}) => a.a.createElement("div", B({}, c, {
					className: Object(d.a)(U.a.Wrapper, e, {
						[U.a.mColumn]: "column" === t,
						[U.a.mDisabled]: !!o,
						[U.a.mIndent]: !!i,
						[U.a.mLast]: !!l,
						[U.a.isCreateCommunity]: !!n,
						[U.a.inModal]: !!s,
						[U.a.isNightModeOn]: !!r
					})
				})),
				J = f.a.a("Link", U.a),
				Y = f.a.wrapped(J, "SubtextLink", U.a),
				Z = f.a.wrapped(N.a, "LinkIcon", U.a),
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
				}, a.a.createElement(q, null, e.label, e.isRequired && a.a.createElement(W, null)), a.a.createElement(G, null, e.subtext)), a.a.createElement(X, null, e.children)),
				ne = f.a.div("StyledFlair", U.a),
				se = f.a.wrapped(ne, "SpoilerFlair", U.a),
				ae = f.a.wrapped(ne, "NSFWFlair", U.a),
				re = e => {
					switch (e.flair) {
						case A.f.Nsfw:
							return a.a.createElement(ae, null, "NSFW");
						case A.f.Spoiler:
							return a.a.createElement(se, null, "SPOILER");
						default:
							return null
					}
				},
				oe = e => {
					const t = Object(o.a)();
					return a.a.createElement(Q, {
						className: e.className,
						disabled: e.disabled,
						indent: e.indent,
						last: e.last
					}, a.a.createElement(z, null, a.a.createElement(R.a, null, a.a.createElement("label", {
						htmlFor: t
					}, a.a.createElement(q, null, e.label))), a.a.createElement(G, null, e.subtext)), a.a.createElement(X, null, a.a.createElement(V, null, e.tooltip && a.a.createElement(K, {
						tooltipContentClass: e.tooltipContentClassName,
						text: e.tooltip
					}), a.a.createElement(S.a, {
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
					isNightModeOn: F.X
				}),
				pe = Object(r.b)(ue)(e => a.a.createElement(Q, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled,
					inModal: e.inModal,
					isNightModeOn: e.isNightModeOn,
					direction: e.direction,
					className: e.className
				}, a.a.createElement(z, {
					style: {
						flex: 5
					}
				}, !e.inModal && a.a.createElement(R.a, null, a.a.createElement(q, null, e.label)), !e.hideSubtext && a.a.createElement(G, null, " ", a.a.createElement(me, {
					style: {
						color: e.ticks[e.value].color
					}
				}, " ", e.ticks[e.value].text + ": ", " "), " ", e.subtext)), a.a.createElement(X, {
					style: {
						flex: 3,
						margin: "20px 20px 0 0"
					}
				}, a.a.createElement(de, null, a.a.createElement(ie, {
					style: {
						background: "linear-gradient(to right, " + M()(1, e.max + 1).map((t, n) => t <= e.value ? `${e.ticks[e.value].color} ${(t-1)/e.max*100}%,\n                    ${e.ticks[e.value].color} ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : t !== e.max ? `#c5c5c5 ${(t-1)/e.max*100}%, #c5c5c5 ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100-1}%,\n                    #fff ${t/e.max*100}%` : `#c5c5c5 ${(t-1)/e.max*100}%`) + ", #C5C5C5 100%)"
					},
					className: "range-slider-input",
					type: "range",
					min: e.min,
					max: e.max,
					step: e.step,
					value: e.value,
					onChange: e.onChange,
					onInput: e.onChange,
					disabled: e.disabled
				}), a.a.createElement(le, null, Object.keys(e.ticks).map((t, n) => a.a.createElement(ce, {
					key: t,
					style: {
						color: t === e.value.toString() ? e.ticks[t].color : "#878A8C"
					}
				}, e.ticks[t].text))))))),
				be = e => a.a.createElement(Q, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, a.a.createElement(z, null, a.a.createElement(R.a, null, a.a.createElement(q, null, e.label)), a.a.createElement(G, null, e.subtext)), a.a.createElement(X, null, a.a.createElement(V, null, a.a.createElement(P.o, {
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
				}, e.label, a.a.createElement(Z, null)), a.a.createElement(G, null, e.subtext)), a.a.createElement(X, null, a.a.createElement(J, {
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
					onClick: e.onClick,
					className: Object(d.a)({
						[U.a.NoColor]: e.color && "none" === e.color
					})
				}, e.label), a.a.createElement(G, null, e.subtext)), a.a.createElement(X, null, !!e.hintText && a.a.createElement("div", {
					className: U.a.ActionHintText
				}, e.hintText), a.a.createElement($, {
					onClick: e.onClick,
					className: Object(d.a)({
						[U.a.NoColor]: e.color && "none" === e.color
					})
				}, a.a.createElement(ee, {
					className: Object(d.a)({
						[U.a.NoColor]: e.color && "none" === e.color
					})
				})))),
				fe = Object(i.c)({
					isOpen: (e, t) => Object(L.b)(t.id)(e)
				}),
				xe = Object(r.b)(fe, (e, t) => ({
					openDropdown: () => {
						e(Object(l.h)({
							tooltipId: t.id
						}))
					}
				}))(e => a.a.createElement(Q, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, a.a.createElement(z, null, a.a.createElement(q, null, e.label), a.a.createElement(G, null, e.subtext)), a.a.createElement(X, null, (e => a.a.createElement("div", {
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
				}, e.items.map((t, n) => a.a.createElement(h.b, {
					className: U.a.DropdownRow,
					displayText: e.displayItems ? e.displayItems[n] : t,
					isSelected: e.selected === t,
					onClick: () => e.onClick(t),
					key: "row--" + n,
					item: t
				}))), e.descriptions && a.a.createElement("div", {
					className: U.a.DescriptionsRow
				}, e.descriptions[e.items.indexOf(e.selected)] || e.displayItems && e.descriptions[e.displayItems.indexOf(e.selected)])))(e)))),
				Ee = ({
					disabled: e,
					last: t,
					onClick: n,
					onChange: r,
					...o
				}) => {
					const i = Object(s.useCallback)(e => r(e.target.value), [r]),
						{
							items: d
						} = o;
					return a.a.createElement(Q, {
						disabled: e
					}, a.a.createElement(z, null, a.a.createElement("label", {
						htmlFor: o.id
					}, a.a.createElement(q, {
						className: o.labelClassname
					}, o.label)), a.a.createElement(G, null, o.subtext)), a.a.createElement("div", {
						className: U.a.Wrapper__LineBreak
					}), a.a.createElement(Q, {
						last: t,
						indent: !0,
						disabled: e
					}, a.a.createElement(O, {
						id: o.id,
						className: "redditStyle",
						disabled: e || o.inputDisabled,
						onChange: i,
						value: o.selected
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
				}, a.a.createElement(z, null, a.a.createElement(q, null, e.label), a.a.createElement(G, null, e.subtext)), a.a.createElement(X, null, e.children)),
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
				}), !!e.actionLink && a.a.createElement("div", {
					className: U.a.ActionLinkContainer
				}, e.actionLink)))
		},
		"./src/reddit/components/Streaming/ModSettings/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_16pMBJPhtfeyyncMfo7aDr",
				topBar: "_1DEjdLJpmb7fufFzhwqQm0",
				contentContainer: "ZV-o_W-prpE7EI4zyZ1hr",
				formBody: "_3xfSWCFu_alfjEX12_hBAB"
			}
		},
		"./src/reddit/components/Streaming/ModSettings/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/streaming/modSettings.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				m = n("./src/reddit/components/ApprovedSubmitterList/AddApprovedSubmitterModal.tsx"),
				u = n("./src/reddit/components/BlockNavigation/index.tsx"),
				p = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				b = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				h = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				g = n("./src/reddit/contexts/ApiContext.tsx"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/controls/FormFields/index.tsx"),
				E = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				v = n("./src/reddit/models/Toast/index.ts"),
				_ = n("./src/reddit/selectors/activeModalId.ts"),
				C = n("./src/reddit/selectors/platform.ts"),
				k = n("./src/reddit/selectors/streamingModSettings.ts"),
				y = n("./src/reddit/components/Streaming/ModSettings/index.m.less"),
				O = n.n(y);
			const S = "streaming-settings-discard-confirmation",
				j = e => Object(c.e)(e, v.b.Error),
				w = Object(i.c)({
					allowNavigationCallback: C.a,
					modSettings: k.e,
					isAddUserModalOpen: e => "ModerationPage--Streaming--AddUser" === Object(_.a)(e),
					isLivestreamingCurrentlyOn: k.d,
					isDiscardModalOpen: Object(_.b)(S),
					isModSettingsSaving: e => Object(k.a)(e)
				}),
				I = Object(o.b)(w, (e, t) => ({
					closeAllModals: () => e(Object(d.f)()),
					onSave: (t, n) => e(Object(l.f)(t, n)),
					onUserAdd: (t, n, s) => e(Object(l.d)(t, n, s)),
					onUserRemove: (t, n, s) => e(Object(l.e)(t, n, s)),
					showToast: t => e(Object(c.f)({
						...t,
						duration: c.a
					})),
					toggleAddUserModal: () => e(Object(d.i)("ModerationPage--Streaming--AddUser")),
					toggleDiscardChangesModal: () => e(Object(d.i)(S))
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
			class P extends r.a.Component {
				constructor(e) {
					super(e), this.onChange = e => {
						const t = {
							...this.state.changedModSettings,
							...e
						};
						let n = !1;
						Object.keys(t).forEach(e => {
							t[e] !== this.props.modSettings[e] && (n = !0)
						}), this.setState({
							changedModSettings: t,
							hasUnsavedChanges: n
						})
					}, this.onSaveClick = async () => {
						this.props.onSave(this.state.changedModSettings, this.props.subredditId), this.setState({
							hasUnsavedChanges: !1
						})
					}, this.onUserAdd = async (e, t) => {
						this.isDuplicateUser(t) ? await this.props.showToast(j(s.fbt._("'{username}' has already been added", [s.fbt._param("username", t)], {
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
					}, this.getUpdatedSchedule = e => e ? M : T, this.renderAddUserModal = () => r.a.createElement(m.a, {
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
							minKarma: n,
							minAccountAgeDays: a,
							durationLimitSeconds: o,
							broadcasterPrompt: i,
							isDiscoveryUnitShown: d,
							inSubMinKarma: l
						} = e;
					return r.a.createElement("div", {
						className: O.a.container
					}, r.a.createElement(b.c, {
						className: O.a.topBar
					}, r.a.createElement(f.l, {
						onClick: this.onSaveClick,
						disabled: this.props.isModSettingsSaving
					}, this.props.isModSettingsSaving ? r.a.createElement(E.a, {
						className: O.a.loadingIcon,
						sizePx: 14,
						center: !0
					}) : s.fbt._("Save changes", null, {
						hk: "1IXBxj"
					}))), r.a.createElement(b.a, {
						className: O.a.contentContainer
					}, r.a.createElement(b.b, null, s.fbt._("Broadcasting", null, {
						hk: "3WAsEz"
					})), r.a.createElement("div", {
						className: O.a.formBody
					}, r.a.createElement(h.p, {
						on: this.state.livestreamingToggleStateOn,
						label: s.fbt._("Allow RPAN Broadcasts", null, {
							hk: "2Jt8fz"
						}),
						subtext: s.fbt._("Allow live broadcasts to the Reddit Public Access Network (RPAN) in this community.", null, {
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
					}), r.a.createElement(h.p, {
						on: d,
						label: s.fbt._("Display RPAN Discovery Unit", null, {
							hk: "3mInib"
						}),
						subtext: s.fbt._("Allow discovery unit for Reddit Public Access Network (RPAN) to be displayed in this community.", null, {
							hk: "3MsZuO"
						}),
						onClick: () => {
							this.onChange({
								isDiscoveryUnitShown: !d
							})
						}
					}), r.a.createElement(h.l, {
						label: s.fbt._("Maximum live broadcasts", null, {
							hk: "bjAcp"
						}),
						direction: "row",
						subtext: s.fbt._("Set the number of broadcasts that can be live at the same time.", null, {
							hk: "fmNzG"
						})
					}, r.a.createElement(x.b, {
						onChange: e => this.onChange({
							maxLiveStreams: N(e.currentTarget.value)
						}),
						type: "number",
						min: 0,
						max: 1e3,
						value: t
					})), r.a.createElement(h.l, {
						label: s.fbt._("Required karma", null, {
							hk: "1UzH6K"
						}),
						direction: "row",
						subtext: s.fbt._("Set the amount of global Reddit comment karma someone needs to broadcast live.", null, {
							hk: "1Xa56V"
						})
					}, r.a.createElement(x.b, {
						onChange: e => this.onChange({
							minKarma: N(e.currentTarget.value)
						}),
						type: "number",
						min: 0,
						value: n
					})), r.a.createElement(h.l, {
						label: s.fbt._("Required community karma", null, {
							hk: "nSuPZ"
						}),
						direction: "row",
						subtext: s.fbt._("Set the amount of community comment karma someone needs to broadcast live.", null, {
							hk: "24qW8L"
						})
					}, r.a.createElement(x.b, {
						onChange: e => this.onChange({
							inSubMinKarma: N(e.currentTarget.value)
						}),
						type: "number",
						min: 0,
						value: l
					})), r.a.createElement(h.l, {
						label: s.fbt._("Required Account Age", null, {
							hk: "3OXG2v"
						}),
						direction: "row",
						subtext: s.fbt._("Set how old (in days) someone’s Reddit account needs to be to broadcast live.", null, {
							hk: "24iax6"
						})
					}, r.a.createElement(x.b, {
						onChange: e => this.onChange({
							minAccountAgeDays: N(e.currentTarget.value)
						}),
						min: 0,
						type: "number",
						value: a
					})), r.a.createElement(h.l, {
						label: s.fbt._("Time Limit", null, {
							hk: "2x8YNI"
						}),
						direction: "row",
						subtext: s.fbt._("Broadcasts will end after hitting this limit (in minutes), unless viewers award them more time.", null, {
							hk: "4wwLJ4"
						})
					}, r.a.createElement(x.b, {
						onChange: e => this.onChange({
							durationLimitSeconds: 60 * N(e.currentTarget.value)
						}),
						type: "number",
						min: 0,
						max: 1440,
						value: Math.round(o || 0) / 60,
						disabled: !0
					})), r.a.createElement(h.h, {
						label: s.fbt._("RPAN Description", null, {
							hk: "1WiS6G"
						}),
						direction: "row",
						subtext: s.fbt._("Write a quick description of your community to help broadcasters know what you're about", null, {
							hk: "1fcoqh"
						}),
						onChange: e => this.onChange({
							broadcasterPrompt: e.currentTarget.value
						}),
						maxChars: 250,
						rows: 2,
						value: i || ""
					}))), this.props.isAddUserModalOpen && this.renderAddUserModal(), r.a.createElement(u.a, {
						blockOnBeforeUnload: !0,
						dialogId: S,
						enabled: this.state.hasUnsavedChanges
					}), this.props.isDiscardModalOpen && r.a.createElement(p.a, {
						actionText: s.fbt._("Discard", null, {
							hk: "1SiwLl"
						}),
						headerText: s.fbt._("Discard changes before leaving?", null, {
							hk: "354NTe"
						}),
						modalText: s.fbt._("You have made some changes to broadcasting settings, do you wish to discard the changes?", null, {
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
		"./src/reddit/components/StructuredStyles/Breadcrumbs/index.m.less": function(e, t, n) {
			e.exports = {
				StyledChevron: "_2iNDx2lEuGuIyvMjz5ujOL",
				styledChevron: "_2iNDx2lEuGuIyvMjz5ujOL",
				BreadcrumbElement: "_32_k0a9y4N9cAnw6gApo5X",
				breadcrumbElement: "_32_k0a9y4N9cAnw6gApo5X",
				BreadcrumbContainer: "_1PgkMUbe7dhkAqRt4-VPGe",
				breadcrumbContainer: "_1PgkMUbe7dhkAqRt4-VPGe",
				breadcrumbTitle: "_2N7RnlFNJblZD8KUBuiBEQ"
			}
		},
		"./src/reddit/components/StructuredStyles/Breadcrumbs/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/TrackingHelper/index.tsx"),
				i = n("./src/reddit/helpers/trackers/blade.ts"),
				d = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				l = n("./src/reddit/components/StructuredStyles/Breadcrumbs/index.m.less"),
				c = n.n(l);
			const m = r.a.wrapped(d.a, "StyledChevron", c.a),
				u = r.a.div("BreadcrumbElement", c.a),
				p = r.a.div("BreadcrumbContainer", c.a);
			t.b = Object(o.c)(e => a.a.createElement(p, null, e.breadcrumbs.map(t => a.a.createElement(u, {
				key: t.title,
				onClick: () => {
					e.sendEvent(Object(i.a)()), e.onNavigate(t)
				}
			}, a.a.createElement(m, null), a.a.createElement("span", {
				className: c.a.breadcrumbTitle
			}, t.title)))))
		},
		"./src/reddit/components/StructuredStyles/ImageUpload/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/StructuredStyles/ImageUpload/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/FileDrop/index.tsx"),
				d = n("./src/reddit/controls/ImageInput/index.tsx"),
				l = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = n("./src/reddit/icons/svgs/ImageUpload/index.tsx"),
				m = n("./src/reddit/components/StructuredStyles/ImageUpload/index.m.less"),
				u = n.n(m);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), b = o.a.wrapped(c.a, "ImageUploadIcon", u.a), h = o.a.div("ImageIconRow", u.a), g = o.a.div("ImageUploadText", u.a), f = o.a.wrapped(i.a, "FileDrop", u.a), x = o.a.div("ContainerUploading", u.a), E = e => a.a.createElement(x, {
				className: e.className
			}, a.a.createElement(h, null, a.a.createElement(l.a, {
				sizePx: 40,
				center: !0
			})), a.a.createElement(g, null, p._("Uploading...", null, {
				hk: "2ICpZ2"
			}))), v = o.a.label("Label", u.a);
			t.b = e => a.a.createElement(f, {
				className: e.className,
				onDrop: e.onChange,
				render: t => a.a.createElement(v, {
					className: Object(r.a)({
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
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, n) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				breadcrumbTitle: "_24r4TaTKqNLBGA3VgswFrN",
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
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return o
			})), n.d(t, "p", (function() {
				return i
			})), n.d(t, "n", (function() {
				return d
			})), n.d(t, "o", (function() {
				return l
			})), n.d(t, "m", (function() {
				return c
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "j", (function() {
				return _
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				r = n.n(a);
			const o = s.a.section("FormPage", r.a),
				i = s.a.h1("HomePageTitle", r.a),
				d = s.a.button("HomePageBreadcrumb", r.a),
				l = s.a.div("HomePageGroup", r.a),
				c = s.a.h1("FormPageTitle", r.a),
				m = s.a.div("FormPageSection", r.a),
				u = s.a.div("FormGroup", r.a),
				p = s.a.h2("FormGroupTitle", r.a),
				b = s.a.div("FormElement", r.a),
				h = s.a.div("FormGroupDescription", r.a),
				g = s.a.div("FormItem", r.a),
				f = s.a.h3("FormElementTitle", r.a),
				x = s.a.div("FormElementDescription", r.a),
				E = s.a.div("FormElementError", r.a),
				v = s.a.div("FormElementSubGroup", r.a),
				_ = s.a.li("FormListItem", r.a)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less": function(e, t, n) {
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
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return m
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "g", (function() {
				return E
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/Input/ModalInput.tsx"),
				r = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				o = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				d = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				l = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				c = n.n(l);
			const m = s.a.wrapped(a.a, "ModalInput", c.a),
				u = s.a.input("Input", c.a),
				p = s.a.wrapped(d.a, "RadioOn", c.a),
				b = s.a.wrapped(i.a, "RadioOff", c.a),
				h = s.a.wrapped(r.a, "Checkbox", c.a),
				g = s.a.wrapped(o.a, "CheckboxSelected", c.a),
				f = s.a.textarea("Textarea", c.a),
				x = s.a.label("StyledLabel", c.a),
				E = s.a.input("StyledFileInput", c.a)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/navs.m.less": function(e, t, n) {
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
		"./src/reddit/components/StructuredStyles/StyledComponents/navs.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/StructuredStyles/StyledComponents/navs.m.less"),
				i = n.n(o);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const l = ({
					disabled: e,
					...t
				}) => a.a.createElement("div", d({}, t, {
					className: Object(r.a)(i.a.FormNavElement, {
						[i.a.disabled]: e
					})
				}), t.children),
				c = ({
					canDrop: e,
					className: t,
					isDragging: n,
					isOver: s,
					disabled: o,
					...l
				}) => a.a.createElement("div", d({}, l, {
					className: Object(r.a)(i.a.DragCard, {
						[i.a.disabled]: o,
						[i.a.isDraffing]: n,
						[i.a.isOverAndCanDrop]: s && e
					}, t)
				}))
		},
		"./src/reddit/components/SubredditContent/EventPostContent/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/actions/eventPosts/index.ts"),
				c = n("./src/reddit/components/ClassicPost/index.tsx"),
				m = n("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				u = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				p = n("./src/reddit/components/Scroller/Simple.tsx"),
				b = n("./src/reddit/components/SubredditContent/index.tsx"),
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				g = n("./src/reddit/constants/postLayout.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/helpers/overlay/index.ts"),
				E = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				v = n("./src/reddit/icons/fonts/index.tsx"),
				_ = n("./src/reddit/routes/postCreation/index.ts"),
				C = n("./src/reddit/selectors/eventPosts.ts"),
				k = n("./src/reddit/components/SubredditContent/index.m.less"),
				y = n.n(k);
			const O = Object(d.c)({
					eventPosts: C.f,
					isPending: C.d,
					hasData: C.b,
					endCursor: C.a
				}),
				S = Object(o.b)(O, (e, {
					subredditName: t
				}) => ({
					onClickPost: t => {
						e(Object(x.a)(t.permalink))
					},
					fetchMorePosts: () => {
						e(Object(l.eventPostsRequested)(t))
					}
				}));
			class j extends r.a.PureComponent {
				renderEmptyState() {
					const {
						subredditName: e
					} = this.props;
					return r.a.createElement(m.c, {
						className: y.a.emptyStateContainer,
						text: s.fbt._("No upcoming or live events in r/{subredditName}", [s.fbt._param("subredditName", e)], {
							hk: "3wRma7"
						}),
						childrenPosition: "bottom"
					}, r.a.createElement(v.a, {
						name: "scheduled",
						className: y.a.icon
					}), r.a.createElement(i.a, {
						className: y.a.schedulePostLink,
						to: Object(_.c)(e)
					}, s.fbt._("Create Event Post", null, {
						hk: "PXBmQ"
					})))
				}
				renderBody() {
					const {
						endCursor: e,
						eventPosts: t,
						fetchMorePosts: n,
						hasData: s,
						onClickPost: a
					} = this.props;
					return r.a.createElement("div", {
						className: y.a.contentContainer
					}, r.a.createElement("div", {
						className: y.a.standaloneContainer
					}, s ? r.a.createElement(p.b, {
						className: y.a.scroller,
						onLoadMore: n,
						loadMoreToken: e || void 0
					}, t.map((e, t) => ({
						id: e.id,
						estHeight: Object(E.c)(e, g.g.Classic),
						render: n => r.a.createElement(c.default, {
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
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(u.c, null, r.a.createElement(i.a, {
						to: Object(_.c)(this.props.subredditName)
					}, r.a.createElement(f.l, null, s.fbt._("Schedule an event post", null, {
						hk: "nk1bA"
					})))), r.a.createElement(u.a, null, r.a.createElement(u.b, {
						className: y.a.pageTitle
					}, s.fbt._("Upcoming and live events", null, {
						hk: "MAeQO"
					}), r.a.createElement("span", {
						className: y.a.betaIndicator
					}, s.fbt._("Beta", null, {
						hk: "z4XPh"
					}))), !t && e ? Object(b.a)() : this.renderBody(), t && e && Object(b.a)(1)))
				}
			}
			t.a = S(Object(h.c)(j))
		},
		"./src/reddit/components/SubredditContent/PredictionsContent/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-SubredditContent-PredictionsContent",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-SubredditContent-PredictionsContent").then(n.bind(null, "./src/reddit/components/SubredditContent/PredictionsContent/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/SubredditContent/PredictionsContent/index.tsx"
				}
			})
		},
		"./src/reddit/components/SubredditContent/ScheduledPostContent/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./src/reddit/actions/scheduledPosts/index.ts"),
				l = n("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				c = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				m = n("./node_modules/reselect/es/index.js"),
				u = n("./src/lib/classNames/index.ts"),
				p = n("./src/reddit/actions/modal.ts"),
				b = n("./src/lib/CSSVariableProvider/index.tsx"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/components/Paginator/index.m.less"),
				f = n.n(g);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const E = e => {
				const {
					isNextButton: t,
					isActive: n,
					...s
				} = e;
				return r.a.createElement(h.i, x({
					disabled: !n
				}, s))
			};
			class v extends r.a.Component {
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
					} = this.props, n = this.getCurrentCursorIdx() + 1;
					return e.slice(n, n + t)
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
						itemsPerPage: n
					} = this.props, s = this.getCurrentCursorIdx();
					if (e && !this.hasNextPage()) return;
					if (!e && !this.hasPrevPage()) return;
					const a = e ? Math.max(-1, Math.min(s + n, t.length - 2)) : Math.max(-1, s - n);
					this.setState({
						currentCursor: t[a] ? t[a].id : void 0
					})
				}
				renderControlRow() {
					const {
						usePortalForControlRow: e,
						controlRowPortal: t,
						pagerButton: n = E
					} = this.props, a = this.hasPrevPage(), o = this.hasNextPage();
					if (!a && !o) return null;
					const i = r.a.createElement("div", {
						className: f.a.controlRow
					}, r.a.createElement("span", {
						className: f.a.prevButtonContainer
					}, r.a.createElement(n, {
						className: f.a.prevButton,
						onClick: this.onHandlePrev,
						isNextButton: !1,
						isActive: a
					}, s.fbt._("Previous", null, {
						hk: "4hX0ue"
					}))), r.a.createElement("span", {
						className: f.a.nextButtonContainer
					}, r.a.createElement(n, {
						className: f.a.nextButton,
						onClick: this.onHandleNext,
						isNextButton: !0,
						isActive: o
					}, s.fbt._("Next", null, {
						hk: "2mEXAi"
					}))));
					return e && !t ? null : t ? Object(b.d)(i, t) : i
				}
				render() {
					const {
						className: e,
						lastItemClassName: t,
						itemComponent: n
					} = this.props, s = this.getRenderableItems();
					return r.a.createElement("div", {
						className: e
					}, s.map((e, a) => r.a.createElement(n, {
						className: t && a === s.length - 1 ? t : void 0,
						key: e.id,
						item: e
					})), this.renderControlRow())
				}
			}
			var _ = v,
				C = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				k = n("./src/reddit/components/RecurringPostList/ChangePageButton/index.m.less"),
				y = n.n(k);
			var O = e => r.a.createElement("button", {
					className: Object(u.a)(y.a.button, e.className, {
						[y.a.prevButton]: !e.isNextButton,
						[y.a.disabled]: !e.isActive
					}),
					onClick: e.onClick,
					disabled: !e.isActive
				}, r.a.createElement(C.a, {
					className: y.a.arrowIcon
				})),
				S = n("./src/reddit/components/RecurringPostList/EditModal/async.tsx"),
				j = n("./src/reddit/components/RecurringPostList/RecurringPost/index.tsx"),
				w = n("./src/reddit/components/TrackingHelper/index.tsx"),
				I = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				N = n("./src/reddit/icons/fonts/index.tsx"),
				T = n("./src/reddit/routes/postCreation/index.ts"),
				M = n("./src/reddit/selectors/activeModalId.ts"),
				P = n("./src/reddit/selectors/scheduledPosts/index.ts"),
				R = n("./src/reddit/components/RecurringPostList/index.m.less"),
				A = n.n(R);
			const {
				fbt: L
			} = n("./node_modules/fbt/lib/FbtPublic.js"), F = 5, D = Object(m.c)({
				recurringPosts: (e, {
					subreddit: t
				}) => Object(P.l)(e, {
					subredditId: t.id
				}),
				editModalIsOpen: e => Object(M.a)(e) === j.a,
				editingRecurringPostId: P.d,
				editingRecurringPostSubredditId: P.e
			});
			class U extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.pageButtonPortalRef = r.a.createRef(), this.onEditModalSuccessfulSave = () => {
						this.props.editModalIsOpen && this.props.toggleModal()
					}, this.onClickLink = () => {
						this.props.sendEvent(Object(I.j)())
					}
				}
				renderEmptyState() {
					return r.a.createElement(l.c, {
						className: A.a.emptyContainer,
						text: L._("No recurring posts", null, {
							hk: "2G7szl"
						}),
						childrenPosition: "bottom"
					}, r.a.createElement(N.a, {
						name: "refresh",
						className: A.a.icon
					}), r.a.createElement(i.a, {
						className: A.a.schedulePostLink,
						onClick: this.onClickLink,
						to: Object(T.c)(this.props.subreddit.name)
					}, L._("Schedule recurring post", null, {
						hk: "1TrUPC"
					})))
				}
				render() {
					const {
						className: e,
						recurringPosts: t,
						editModalIsOpen: n,
						subreddit: s,
						editingRecurringPostSubredditId: a,
						editingRecurringPostId: o
					} = this.props;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(u.a)(e, A.a.postList)
					}, r.a.createElement("div", {
						className: A.a.titleContainer
					}, L._("Recurring posts", null, {
						hk: "30aHKv"
					}), r.a.createElement("div", {
						ref: this.pageButtonPortalRef,
						className: A.a.pageButtonPortal
					})), t.length ? r.a.createElement(_, {
						className: A.a.recurringPostsContainer,
						lastItemClassName: A.a.lastRecurringPostItem,
						itemsPerPage: F,
						items: t,
						itemComponent: j.b,
						pagerButton: O,
						usePortalForControlRow: !0,
						controlRowPortal: this.pageButtonPortalRef.current
					}) : this.renderEmptyState()), n && !!o && !!a && s.id === a && r.a.createElement(S.a, {
						scheduledPostId: o,
						subredditId: a,
						onSuccessfulSave: this.onEditModalSuccessfulSave,
						withOverlay: !0
					}))
				}
			}
			var B = Object(o.b)(D, (e, t) => ({
					toggleModal: () => e(Object(p.i)(j.a))
				}))(Object(w.c)(U)),
				H = n("./src/reddit/components/ScheduledPost/index.tsx"),
				W = n("./src/reddit/components/Scroller/Simple.tsx"),
				q = n("./src/reddit/components/SubredditContent/index.tsx"),
				G = n("./src/reddit/components/SubredditContent/index.m.less"),
				K = n.n(G),
				V = n("./src/reddit/models/ScheduledPost/index.ts");
			const z = Object(m.c)({
					isLoading: P.i,
					hasData: (e, {
						subreddit: t
					}) => Object(P.h)(e, {
						subredditId: t.id
					}),
					standalonePosts: (e, {
						subreddit: t
					}) => Object(P.q)(e, {
						subredditId: t.id
					}),
					loadMoreToken: (e, {
						subreddit: t
					}) => Object(P.c)(e, {
						subredditId: t.id,
						type: V.f.standalonePosts
					})
				}),
				X = Object(o.b)(z, (e, {
					subreddit: t
				}) => ({
					onLoadMoreStandaloneScheduledPosts: () => e(Object(d.a)(t.id))
				}));
			class Q extends r.a.PureComponent {
				render() {
					const {
						hasData: e,
						standalonePosts: t,
						onLoadMore: n,
						loadMoreToken: s,
						renderEmptyState: a,
						subreddit: o
					} = this.props;
					return r.a.createElement("div", {
						className: K.a.contentContainer
					}, r.a.createElement("div", {
						className: K.a.standaloneContainer
					}, e && t.length ? r.a.createElement(W.b, {
						className: K.a.scroller,
						onLoadMore: n,
						loadMoreToken: s || void 0
					}, t.map(e => ({
						id: e.id,
						estHeight: 112,
						render: t => r.a.createElement(H.a, {
							key: `scheduled-post-id-${e.id}`,
							scheduledPostId: e.id,
							subredditId: e.subreddit.id
						})
					}))) : a()), r.a.createElement(B, {
						className: K.a.sidebar,
						subreddit: o
					}))
				}
			}
			class J extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.renderStandaloneEmptyState = () => {
						const {
							subreddit: e
						} = this.props;
						return r.a.createElement(l.c, {
							className: K.a.emptyStateContainer,
							text: s.fbt._("No scheduled posts in r/{subredditName}", [s.fbt._param("subredditName", e.name)], {
								hk: "mUwQ4"
							}),
							childrenPosition: "bottom"
						}, r.a.createElement(N.a, {
							name: "history",
							className: K.a.icon
						}), r.a.createElement(i.a, {
							className: K.a.schedulePostLink,
							to: Object(T.c)(e.name)
						}, s.fbt._("Schedule post", null, {
							hk: "xI07X"
						})))
					}
				}
				renderBody() {
					const {
						hasData: e,
						loadMoreToken: t,
						onLoadMoreStandaloneScheduledPosts: n,
						standalonePosts: s,
						subreddit: a
					} = this.props;
					return r.a.createElement(Q, {
						renderEmptyState: this.renderStandaloneEmptyState,
						hasData: e,
						standalonePosts: s,
						onLoadMore: n,
						subreddit: a,
						loadMoreToken: t
					})
				}
				render() {
					const {
						isLoading: e,
						hasData: t,
						subreddit: n
					} = this.props;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(c.c, null, r.a.createElement(i.a, {
						to: Object(T.c)(n.name)
					}, r.a.createElement(h.l, null, s.fbt._("Schedule Post", null, {
						hk: "2Ygkzg"
					})))), r.a.createElement(c.a, null, r.a.createElement(c.b, {
						className: K.a.pageTitle
					}, s.fbt._("Scheduled posts", null, {
						hk: "28Qjmj"
					})), !t && e ? Object(q.a)() : this.renderBody(), t && e && Object(q.a)(1)))
				}
			}
			t.a = X(J)
		},
		"./src/reddit/components/SubredditContent/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SubredditContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/reddit/components/ClassicPost/Placeholder.tsx");

			function o(e = 3) {
				const t = [];
				for (let n = 0; n < e; n++) t.push(a.a.createElement(r.b, {
					isLoading: !0
				}));
				return a.a.createElement(a.a.Fragment, null, t)
			}
		},
		"./src/reddit/components/SubredditCreationModal/Layout/index.m.less": function(e, t, n) {
			e.exports = {
				Content: "gGAX8JwsFcDSDsT5KcKrL",
				content: "gGAX8JwsFcDSDsT5KcKrL",
				Container: "_1J0hJj-EXr49KppYTmtS9S",
				container: "_1J0hJj-EXr49KppYTmtS9S",
				ContainerExp: "_3Cb_x0VK1tr3QTaBDGU_-K",
				containerExp: "_3Cb_x0VK1tr3QTaBDGU_-K",
				OuterContainer: "_1wLNhgzYyv0-JBg0BfYf3Y",
				outerContainer: "_1wLNhgzYyv0-JBg0BfYf3Y"
			}
		},
		"./src/reddit/components/SubredditCreationModal/index.m.less": function(e, t, n) {
			e.exports = {
				sublabel: "_1l4AkEjhz6oh1lmsJv-6Oo",
				subtitle: "SJ8r-Lx8GZVAGXaT954wj",
				radioDescription: "_1FBE2BnOrrXe8bCr6ZLfGq",
				buttonContainer: "pllx1jz7x_s-pSUC5f15v",
				field: "_2m493sVo9iDo-3EBxQrAJc",
				isCreatePending: "_39K9U8eGRvjiN3lSUWfoXF",
				subredditCreation: "_3O95baBiXBhn2SNtTQXPun",
				container: "o5ISTIh6L_lvDC1gObc76",
				title: "_2d-OkUXQj6P8CRIrcoi1i9",
				nsfw: "_3bx-zSg4-Vgfi3x1IUw6QP",
				createButton: "_2shIfL3K7ivaojvZFjvI-Z",
				pendingText: "A8PHuGr_4pbV_7t_GaokO",
				metaFieldDescription: "HsJgPFCmZ8OKgFe3tYiOB",
				numCommunityTopicsSelected: "_3-RTBwxKbhnYzfNZydOubp",
				subtextContainer: "_1V3LfcGf8bnGW9vw7JkOOs",
				radioContainer: "_247NCf2PSxl4rhmx2dDhDC",
				radioContent: "_2QiRZZs4K5lTjMTuSaMgDC",
				textButton: "c6YtB-MsWwD2pwSxCRQWE",
				fullWidthTextContainer: "_39cm2YKltxh0YW0O1f54y3",
				Info: "_16_IgJ4BqtadthCKIpnW1g",
				info: "_16_IgJ4BqtadthCKIpnW1g",
				RadioOption: "_12umGu0WfWJw9rxGq4ykrZ",
				radioOption: "_12umGu0WfWJw9rxGq4ykrZ",
				StyledTooltip: "j2Jvuy8Yu-jexJED1Ap51",
				styledTooltip: "j2Jvuy8Yu-jexJED1Ap51",
				RadioIcon: "_1g89RGQdzecmnfVeXck6JL",
				radioIcon: "_1g89RGQdzecmnfVeXck6JL",
				Employee: "_2gDVAtwwxskByrxI2Zr9BL",
				employee: "_2gDVAtwwxskByrxI2Zr9BL",
				Private: "_1Ma7YYe0ShiEmNSS16r18H",
				private: "_1Ma7YYe0ShiEmNSS16r18H",
				Public: "_3WyydSidemq34inFmhA1SE",
				public: "_3WyydSidemq34inFmhA1SE",
				Restricted: "CodbGPlWjCpPE6jWVhkOn",
				restricted: "CodbGPlWjCpPE6jWVhkOn",
				CloseButton: "_1P7Eow5rs9Xxm1uqMMEr2h",
				closeButton: "_1P7Eow5rs9Xxm1uqMMEr2h",
				ErrorText: "_2dXAoHGf_uRg0D6ofrpJbr",
				errorText: "_2dXAoHGf_uRg0D6ofrpJbr"
			}
		},
		"./src/reddit/components/SubredditCreationModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "radioOptions", (function() {
				return ie
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/subredditCreation.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/EmailInvitePaintedDoor/loader.tsx"),
				b = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				h = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				g = n("./src/reddit/contexts/NavbarExp.ts"),
				f = n("./src/reddit/components/SubredditCreationModal/Layout/index.m.less"),
				x = n.n(f);
			var E = e => {
					const t = Object(a.useContext)(g.a);
					return r.a.createElement("div", {
						className: x.a.OuterContainer
					}, r.a.createElement("div", {
						className: Object(l.a)(e.className, x.a.Container)
					}, r.a.createElement("div", {
						className: Object(l.a)(x.a.Content, {
							[x.a.ContainerExp]: t
						})
					}, e.children)))
				},
				v = n("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = n("./src/reddit/constants/modals.ts"),
				C = n("./src/reddit/controls/Button/index.tsx"),
				k = n("./src/reddit/controls/CheckboxInput/index.tsx"),
				y = n("./src/reddit/controls/ErrorText/index.tsx"),
				O = n("./src/reddit/controls/RadioInput/index.tsx"),
				S = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				j = n("./src/reddit/controls/TextButton/index.tsx"),
				w = n("./src/reddit/helpers/trackers/emailInvite.ts"),
				I = n("./src/reddit/helpers/trackers/screenview.ts"),
				N = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				T = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				M = n("./src/reddit/icons/svgs/Close/index.tsx"),
				P = n("./src/reddit/icons/svgs/Eye/index.tsx"),
				R = n("./src/reddit/icons/svgs/Info/index.tsx"),
				A = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				L = n("./src/reddit/icons/svgs/User/index.tsx"),
				F = n("./src/reddit/models/Subreddit/index.ts"),
				D = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				U = n("./src/reddit/selectors/experiments/emailInvite.ts"),
				B = n("./src/reddit/selectors/subreddit.ts"),
				H = n("./src/reddit/selectors/tags.ts"),
				W = n("./src/reddit/selectors/user.ts"),
				q = n("./src/lib/formatApiError/index.ts");
			const G = (e, t) => {
				if (!e) return {};
				const n = e.fields && e.fields.length && e.fields[0] && e.fields[0].field,
					a = e.type;
				if ("name" === n) {
					if ("NO_TEXT" === a) return {
						name: s.fbt._("A community name is required", null, {
							hk: "QIlYS"
						})
					};
					if ("BAD_SR_NAME" === a) return {
						name: s.fbt._("Community names must be between 3–21 characters, and can only contain letters, numbers, or underscores.", null, {
							hk: "2rmVgd"
						})
					};
					if ("SUBREDDIT_EXISTS" === a) return {
						name: s.fbt._("Sorry, r/{subreddit name attempt} is taken. Try another.", [s.fbt._param("subreddit name attempt", t)], {
							hk: "CLwzs"
						})
					};
					if ("SUBREDDIT_UNAVAILABLE" === a) return {
						name: s.fbt._("This community name is unavailable", null, {
							hk: "15j6BB"
						})
					}
				}
				return {
					generic: Object(q.a)(e)
				}
			};
			var K = n("./src/reddit/components/SubredditCreationModal/index.m.less"),
				V = n.n(K),
				z = n("./src/lib/lessComponent.tsx");
			const X = 21,
				Q = "create-title-info",
				J = z.a.wrapped(R.a, "Info", V.a),
				Y = z.a.wrapped(S.a, "RadioOption", V.a),
				Z = z.a.wrapped(b.c, "Tooltip", V.a),
				$ = z.a.wrapped(L.a, "Public", V.a),
				ee = z.a.wrapped(P.a, "Restricted", V.a),
				te = z.a.wrapped(A.a, "Private", V.a),
				ne = z.a.wrapped(T.a, "Employee", V.a),
				se = z.a.wrapped(M.a, "CloseButton", V.a),
				ae = z.a.wrapped(y.b, "ErrorText", V.a),
				re = Object(i.c)({
					error: B.f,
					isCreatePending: B.j,
					isEmailInviteExperimentEnabled: U.a,
					isEmployee: W.H,
					crosspostId: B.i,
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(W.ib)(e),
					userIsSuspended: W.R,
					allTags: H.e,
					existingTags: H.f,
					newTags: H.g,
					selectedPrimaryTagId: H.h
				}),
				oe = Object(o.b)(re, e => ({
					createCommunity: t => e(Object(m.h)(t)),
					clearErrors: () => e(Object(m.f)()),
					onCloseModal: () => e(Object(c.g)(_.a.SUBREDDIT_CREATION_MODAL_ID)),
					onShowTooltip: () => e(Object(u.f)({
						tooltipId: Q
					})),
					onHideTooltip: () => e(Object(u.i)()),
					validateSubredditName: t => e(Object(m.i)(t))
				})),
				ie = (e, t) => [r.a.createElement(Y, {
					key: "public",
					showButton: !0,
					value: "public"
				}, r.a.createElement("div", {
					className: V.a.radioContent
				}, r.a.createElement("div", null, r.a.createElement($, null)), r.a.createElement("div", {
					className: V.a.radioContainer
				}, r.a.createElement("div", {
					className: V.a.sublabel
				}, s.fbt._("Public", null, {
					hk: "DK992"
				})), r.a.createElement("div", {
					className: Object(l.a)(V.a.metafieldDescription, V.a.radioDescription)
				}, s.fbt._("Anyone can view, post, and comment to this community", null, {
					hk: "1PfFUA"
				}))))), r.a.createElement(Y, {
					key: "restricted",
					showButton: !0,
					value: "restricted"
				}, r.a.createElement("div", {
					className: V.a.radioContent
				}, r.a.createElement("div", null, r.a.createElement(ee, null)), r.a.createElement("div", {
					className: V.a.radioContainer
				}, r.a.createElement("div", {
					className: V.a.sublabel
				}, s.fbt._("Restricted", null, {
					hk: "1iBTDq"
				})), r.a.createElement("div", {
					className: Object(l.a)(V.a.metafieldDescription, V.a.radioDescription)
				}, Object(D.g)(t))))), r.a.createElement(Y, {
					key: "private",
					showButton: !0,
					value: "private"
				}, r.a.createElement("div", {
					className: V.a.radioContent
				}, r.a.createElement("div", null, r.a.createElement(te, null)), r.a.createElement("div", {
					className: V.a.radioContainer
				}, r.a.createElement("div", {
					className: V.a.sublabel
				}, s.fbt._("Private", null, {
					hk: "3q5SYn"
				})), r.a.createElement("div", {
					className: Object(l.a)(V.a.metafieldDescription, V.a.radioDescription)
				}, s.fbt._("Only approved users can view and submit to this community", null, {
					hk: "3z8OI6"
				}))))), r.a.createElement(Y, {
					key: "employees_only",
					showButton: !0,
					value: "employees_only",
					hidden: !e
				}, r.a.createElement("div", {
					className: V.a.radioContent
				}, r.a.createElement("div", null, r.a.createElement(ne, null)), r.a.createElement("div", {
					className: V.a.radioContainer
				}, r.a.createElement("div", {
					className: V.a.sublabel
				}, s.fbt._("Employees only", null, {
					hk: "1arrQC"
				})), r.a.createElement("div", {
					className: Object(l.a)(V.a.metafieldDescription, V.a.radioDescription)
				}, s.fbt._("Only Reddit employees can view and submit to this community", null, {
					hk: "3ty23C"
				})))))];
			class de extends r.a.Component {
				constructor(e) {
					super(e), this.onNameChange = e => {
						this.setState({
							name: e.target.value
						}), this.props.clearErrors()
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
						e(Object(w.a)("community_creation")), this.setState({
							showEmailInviteModal: !0
						})
					}, this.onCloseInviteViaEmailModal = () => {
						this.setState({
							showEmailInviteModal: !1
						})
					}, this.onCreateCommunityClick = () => {
						this.props.isCreatePending || (clearTimeout(this.timeout), this.props.createCommunity({
							name: this.state.name,
							publicDescription: "",
							type: this.state.type,
							over18: this.state.over18,
							restrictCommenting: this.state.restrictCommenting,
							restrictPosting: this.state.restrictPosting,
							allTags: this.props.allTags,
							newTags: this.props.newTags,
							crosspostId: this.state.crosspostId,
							existingTags: this.props.existingTags,
							primaryTagId: this.props.selectedPrimaryTagId || void 0
						}), this.timeout = window.setTimeout(() => {
							this.props.isCreatePending && this.setState({
								waitingForSuccessfulCommunity: !0
							})
						}, 2e3))
					}, this.onValidateSubredditName = () => this.props.validateSubredditName(this.state.name), this.onCloseModal = () => {
						this.props.sendEvent(Object(N.b)()), this.props.onCloseModal()
					}, this.onCancelCreation = () => {
						this.props.onCloseModal(), this.props.sendEvent(Object(N.b)())
					}, this.onUpdateOver18 = () => this.update(!this.state.over18, "over18"), this.state = {
						name: "",
						type: F.f.Public,
						crosspostId: e.crosspostId,
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
					e(Object(I.w)())
				}
				componentWillUnmount() {
					clearTimeout(this.timeout), this.props.clearErrors()
				}
				render() {
					const {
						error: e,
						isCreatePending: t,
						isEmailInviteExperimentEnabled: n,
						isEmployee: a,
						onHideTooltip: o,
						onShowTooltip: i,
						sendEvent: d,
						userDoesNotHaveEnoughExpToCreateCommunity: c,
						userIsSuspended: m
					} = this.props, u = G(e, this.state.name), {
						over18: b,
						showEmailInviteModal: g,
						waitingForSuccessfulCommunity: f
					} = this.state;
					return r.a.createElement(E, {
						className: V.a.subredditCreation
					}, r.a.createElement("div", {
						className: V.a.container
					}, r.a.createElement("h1", {
						className: V.a.title
					}, s.fbt._("Create a community", null, {
						hk: "SlFa7"
					}), r.a.createElement(se, {
						onClick: this.onCloseModal
					})), c ? r.a.createElement("h2", {
						className: V.a.sublabel
					}, s.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "44qhJp"
					})) : m ? r.a.createElement("h2", {
						className: V.a.sublabel
					}, s.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "3trJMZ"
					})) : r.a.createElement(r.a.Fragment, null, r.a.createElement(h.e, {
						isCreateCommunity: !0,
						label: s.fbt._("Name", null, {
							hk: "3OIzgl"
						}),
						textContainerClassName: V.a.fullWidthTextContainer,
						onBlur: this.onValidateSubredditName,
						onChange: this.onNameChange,
						maxChars: X,
						value: this.state.name,
						subtext: r.a.createElement("span", {
							className: V.a.subtextContainer
						}, s.fbt._("Community names including capitalization cannot be changed.", null, {
							hk: "VjrZg"
						}), r.a.createElement("span", {
							id: Q,
							onMouseEnter: i,
							onMouseLeave: o,
							className: V.a.info
						}, r.a.createElement(J, null), r.a.createElement(Z, {
							className: V.a.StyledTooltip,
							caretOnTop: !0,
							tooltipId: Q,
							text: s.fbt._('Names cannot have spaces (e.g., "r/bookclub" not "r/book club"), must be between 3-21 characters, and underscores ("_") are the only special characters allowed. Avoid using solely trademarked names (e.g., "r/FansOfAcme" not "r/Acme").', null, {
								hk: "3RsycS"
							})
						})))
					}), u.name && r.a.createElement(ae, null, u.name), r.a.createElement(h.l, {
						label: s.fbt._("Community type", null, {
							hk: "152EhZ"
						}),
						direction: "column",
						isCreateCommunity: !0,
						textContainerClassName: V.a.fullWidthTextContainer
					}, r.a.createElement(O.a, {
						value: this.state.type,
						name: "type",
						onChange: this.onTypeChange
					}, ie(a, "post"))), r.a.createElement("div", {
						className: Object(l.a)(V.a.field, {
							[V.a.isCreatePending]: t
						})
					}, r.a.createElement("div", {
						className: V.a.subtitle
					}, s.fbt._("Adult content", null, {
						hk: "20arB"
					})), r.a.createElement(k.a, {
						name: "over18",
						value: b,
						onChange: this.onUpdateOver18,
						disabled: t
					}, r.a.createElement("div", {
						className: V.a.nsfw
					}, "NSFW"), r.a.createElement("div", {
						className: V.a.sublabel
					}, s.fbt._("18+ year old community", null, {
						hk: "1XxZMV"
					})))), n && r.a.createElement("div", {
						className: Object(l.a)(V.a.field, {
							[V.a.isCreatePending]: t
						})
					}, r.a.createElement(j.a, {
						className: V.a.textButton,
						onClick: this.onInviteViaEmailClick
					}, s.fbt._("Invite members via email", null, {
						hk: "2uViIf"
					}))), u.generic && r.a.createElement(ae, null, u.generic), f && r.a.createElement("div", {
						className: V.a.pendingText
					}, s.fbt._("Your community is being created...", null, {
						hk: "3dSTrq"
					})), r.a.createElement("div", {
						className: V.a.buttonContainer
					}, r.a.createElement(C.t, {
						disabled: t,
						className: V.a.createButton,
						onClick: this.onCancelCreation,
						priority: C.c.Secondary
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(C.t, {
						disabled: t,
						className: V.a.createButton,
						onClick: this.onCreateCommunityClick
					}, s.fbt._("Create Community", null, {
						hk: "QE8Y3"
					}))))), g && r.a.createElement(p.a, {
						onClose: this.onCloseInviteViaEmailModal,
						sendEvent: d
					}))
				}
			}
			t.default = Object(d.a)(Object(v.c)(oe(de)))
		},
		"./src/reddit/components/SubredditModerationSearch/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SubredditModerationSearch/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				c = n("./src/reddit/layout/row/Inline/index.tsx"),
				m = n("./src/reddit/layout/row/RightAlign/index.tsx"),
				u = n("./src/reddit/icons/svgs/Search/index.tsx"),
				p = n("./src/reddit/components/SubredditModerationSearch/index.m.less"),
				b = n.n(p);
			const h = o.a.wrapped(u.a, "SearchIcon", b.a),
				g = o.a.wrapped(i.a, "NoResultsContainer", b.a),
				f = o.a.div("Container", b.a),
				x = o.a.wrapped(c.a, "SearchStatusBar", b.a),
				E = o.a.div("SearchStatus", b.a),
				v = o.a.span("Bold", b.a);

			function _(e) {
				if (e.searchPending) return null;
				const t = Object(l.a)(e.searchTerm);
				return e.noResultsFound ? r.a.createElement(g, null, r.a.createElement(h, null), r.a.createElement(i.b, null, s.fbt._("No results for {searchTerm}", [s.fbt._param("searchTerm", `u/${t}`)], {
					hk: "1nDAlG"
				})), r.a.createElement(d.r, {
					onClick: e.cancelSearch
				}, s.fbt._("See all", null, {
					hk: "3aLS8s"
				}))) : r.a.createElement(f, null, r.a.createElement(x, null, r.a.createElement(E, null, s.fbt._("1 search result for {=[searchTerm]}", [s.fbt._param("=[searchTerm]", r.a.createElement(v, {
					"data-redditstyle": !0
				}, s.fbt._("{searchTerm}", [s.fbt._param("searchTerm", `'${t}':`)], {
					hk: "1B9ZWG"
				})))], {
					hk: "iAcV5"
				})), r.a.createElement(m.a, null, r.a.createElement(d.r, {
					onClick: e.cancelSearch
				}, s.fbt._("See all", null, {
					hk: "3aLS8s"
				})))), e.children)
			}
		},
		"./src/reddit/components/SubredditModerationTopBar/index.m.less": function(e, t, n) {
			e.exports = {
				topBarRow: "_3H6HwkSZ2zUC1pwaIMv-EY",
				searchBar: "_2LvB93iPopVPdhNBxBnfAH",
				searchIcon: "_1lo1uHsqx3-EkgYDL4xKEB",
				searchInput: "_1ox94KT4YX0mmZgLO51PG_",
				searchButton: "_3-3xbjG4pcuzlB7SzgBvzg"
			}
		},
		"./src/reddit/components/SubredditModerationTopBar/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return u
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				d = n("./src/reddit/icons/svgs/Search/index.tsx"),
				l = n("./src/reddit/components/SubredditModerationTopBar/index.m.less"),
				c = n.n(l);
			const m = o.a.div("topBarRow", c.a);
			class u extends r.a.Component {
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
				UNSAFE_componentWillReceiveProps(e) {
					this.props.activeSearchQuery && null === e.activeSearchQuery && this.setState({
						searchInputText: ""
					})
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement("div", {
						className: c.a.topBarRow
					}, e.positionSearchRight && e.children, r.a.createElement("div", {
						className: c.a.searchBar
					}, r.a.createElement("input", {
						className: c.a.searchInput,
						onChange: this.onSearchChange,
						onKeyPress: this.onKeyPress,
						placeholder: s.fbt._("Search for a user", null, {
							hk: "1yTo6e"
						}),
						type: "text",
						value: t.searchInputText
					}), r.a.createElement("button", {
						className: c.a.searchButton,
						onClick: this.onSearch
					}, r.a.createElement(d.a, {
						className: c.a.searchIcon
					}))), !e.positionSearchRight && e.children)
				}
			}
		},
		"./src/reddit/components/SubredditModerationUserItem/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SubredditModerationUserItem/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return R
			}));
			var s = n("./node_modules/lodash/times.js"),
				a = n.n(s),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/helpers/trackers/moderationPages.ts"),
				c = n("./src/reddit/components/UserNameAndIcon/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				p = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				b = n("./src/reddit/layout/row/Inline/index.tsx"),
				h = n("./src/reddit/layout/row/RightAlign/index.tsx"),
				g = n("./src/reddit/components/SubredditModerationUserItem/index.m.less"),
				f = n.n(g);
			const {
				fbt: x
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = (e, t) => {
				const n = `UserInfoTooltip--${e}`;
				return t ? `${n}--${t}` : n
			}, v = i.a.wrapped(b.a, "Row", f.a), _ = i.a.div("Username", f.a), C = i.a.wrapped(h.a, "RightAlign", f.a), k = i.a.div("Description", f.a), y = i.a.div("AdditionalText", f.a), O = i.a.wrapped(u.a, "ChevronDown", f.a), S = i.a.wrapped(p.a, "ChevronUp", f.a), j = i.a.div("ExpandoContainer", f.a), w = i.a.span("Bullet", f.a), I = i.a.div("PlaceholderItem", f.a), N = i.a.wrapped(I, "EmptyUserIcon", f.a), T = i.a.wrapped(I, "EmptyDetails", f.a), M = i.a.div("UsersLoadingContainer", f.a), P = () => o.a.createElement(v, null, o.a.createElement(N, null), o.a.createElement(T, null), o.a.createElement(T, null)), R = e => o.a.createElement(M, {
				className: e.className
			}, a()(e.rows || 10, e => o.a.createElement(P, {
				key: e
			})));
			class A extends o.a.Component {
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
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(v, null, o.a.createElement(_, null, o.a.createElement(c.a, {
						username: e.username,
						userIcon: e.userIcon,
						tooltipId: E(e.username, e.moderatorType),
						subredditId: e.subredditId,
						sendHoverCardEvent: this.sendHoverCardEvent
					})), o.a.createElement(k, null, e.timeAgo, e.description && o.a.createElement(o.a.Fragment, null, o.a.createElement(w, null, "•"), e.description)), o.a.createElement(C, null, e.additionalText && o.a.createElement(y, null, e.additionalText), e.primaryButton, e.secondaryButton, e.tertiaryButton, e.expandedComponent && o.a.createElement(m.r, {
						onClick: this.onToggleExpandedComponent
					}, x._("More Details", null, {
						hk: "KnMc6"
					}), t.isExpanded ? o.a.createElement(S, null) : o.a.createElement(O, null)))), t.isExpanded && o.a.createElement(j, null, e.expandedComponent))
				}
			}
			t.b = Object(d.c)(A)
		},
		"./src/reddit/components/SubredditRules/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SubredditRules/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/config.ts"),
				r = n("./node_modules/lodash/isEqual.js"),
				o = n.n(r),
				i = n("./node_modules/lodash/times.js"),
				d = n.n(i),
				l = n("./node_modules/react/index.js"),
				c = n.n(l),
				m = n("./node_modules/react-redux/es/index.js"),
				u = n("./node_modules/reselect/es/index.js"),
				p = n("./src/lib/lessComponent.tsx"),
				b = n("./src/reddit/actions/modal.ts"),
				h = n("./src/lib/makeActionCreator/index.ts"),
				g = n("./src/reddit/actions/subredditRules/constants.ts"),
				f = n("./src/reddit/actions/toaster.ts"),
				x = n("./src/reddit/endpoints/subreddit/rules.ts"),
				E = n("./src/reddit/models/Toast/index.ts"),
				v = n("./src/reddit/selectors/subreddit.ts");
			const _ = Object(h.a)(g.e),
				C = (e, t) => async (n, a, {
					apiContext: r
				}) => {
					const o = Object(v.R)(a(), {
							subredditId: e
						}).name,
						i = `success-block-${t.rule}`,
						d = `error-block-${t.rule}`,
						l = await Object(x.a)(r(), o, t);
					if (l.ok) {
						const t = l.body;
						n(_({
							rules: t,
							subredditId: e
						})), n(f.f({
							id: i,
							kind: E.b.SuccessCommunityGreen,
							text: s.fbt._("Rule added", null, {
								hk: "4D4jbP"
							})
						}))
					} else n(f.f({
						id: d,
						kind: E.b.Error,
						text: l.json.errors ? l.json.errors[0][1] : s.fbt._("An error has occured. Please try again later", null, {
							hk: "2C9b4N"
						})
					}))
				}, k = Object(h.a)(g.f), y = Object(h.a)(g.g), O = Object(h.a)(g.d), S = (e, t) => async (n, a, {
					apiContext: r
				}) => {
					const o = Object(v.R)(a(), {
							subredditId: e
						}).name,
						i = Object(v.N)(a(), {
							subredditId: e
						}),
						d = `success-block-${e}`,
						l = `error-block-${e}`,
						c = await Object(x.e)(r(), o, t);
					if (c.ok) {
						const t = c.body;
						n(O({
							rules: t,
							subredditId: e
						})), n(f.f({
							id: d,
							kind: E.b.SuccessCommunityGreen,
							text: s.fbt._("Rule order updated", null, {
								hk: "3bmmvl"
							}),
							buttonText: s.fbt._("Undo", null, {
								hk: "1RYWKC"
							}),
							buttonAction: S(e, i)
						}))
					} else n(f.f({
						id: l,
						kind: E.b.Error,
						text: "explanation" in c ? c.explanation : c.json && "errors" in c.json ? c.json.errors[0][1] : s.fbt._("An error has occured. Please try again later", null, {
							hk: "1XJ2UQ"
						})
					}))
				};
			var j = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				w = n("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				I = n("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				N = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				T = n("./src/reddit/components/TrackingHelper/index.tsx"),
				M = n("./src/reddit/controls/Button/index.tsx"),
				P = n("./src/reddit/controls/Sortable/index.tsx"),
				R = n("./src/reddit/selectors/telemetry.ts");
			const A = e => ({
					subreddit: R.ib(e),
					profile: R.R(e),
					userSubreddit: R.rb(e)
				}),
				L = e => t => ({
					source: "rules",
					action: "click",
					noun: e,
					...A(t)
				}),
				F = (e, t) => n => ({
					source: "rules",
					action: "click",
					noun: e,
					actionInfo: R.d(n, {
						count: t
					}),
					...A(n)
				});
			var D = n("./src/reddit/icons/fonts/index.tsx"),
				U = n("./src/reddit/layout/row/Inline/index.tsx"),
				B = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				H = n("./src/reddit/models/Rule/index.ts"),
				W = n("./src/reddit/selectors/activeModalId.ts"),
				q = n("./src/reddit/selectors/moderatorPermissions.ts"),
				G = n("./src/reddit/components/SubredditRules/index.m.less"),
				K = n.n(G),
				V = n("./src/reddit/components/StructuredStyles/StyledComponents/navs.tsx"),
				z = n("./src/reddit/icons/svgs/Grapple/index.tsx");
			const X = p.a.wrapped(V.a, "DragCard", K.a);
			var Q = e => c.a.createElement(X, {
					isDragging: e.isDragging,
					isOver: e.isOver,
					canDrop: e.canDrop
				}, c.a.createElement(U.a, {
					className: K.a.row
				}, c.a.createElement("span", {
					className: K.a.ruleNumber
				}, e.index + 1), c.a.createElement("span", {
					className: K.a.ruleText
				}, e.shortName), c.a.createElement("span", {
					className: K.a.iconWrapper
				}, c.a.createElement(z.a, {
					className: K.a.dragIcon,
					title: s.fbt._("Drag", null, {
						hk: "dBKmA"
					})
				})))),
				J = n("./src/higherOrderComponents/asModal/index.tsx"),
				Y = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				Z = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				$ = n("./src/reddit/controls/RadioInput/index.tsx"),
				ee = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				te = n("./src/reddit/controls/TextButton/index.tsx"),
				ne = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const se = {
					rule: "",
					kind: "all",
					reportReason: "",
					description: ""
				},
				ae = Object(m.b)(null, (e, t) => ({
					createRule: n => e(C(t.subredditId, n)),
					updateRule: (n, a) => e(((e, t, n) => async (a, r, {
						apiContext: o
					}) => {
						const i = Object(v.R)(r(), {
								subredditId: e
							}).name,
							d = `success-block-${t.rule}`,
							l = `error-block-${t.rule}`,
							c = await Object(x.f)(o(), i, t, n);
						if (c.ok) {
							const t = c.body;
							a(k({
								rules: t,
								subredditId: e,
								oldName: n
							})), a(f.f({
								id: d,
								kind: E.b.SuccessCommunityGreen,
								text: s.fbt._("Rule updated", null, {
									hk: "1ljetO"
								})
							}))
						} else a(f.f({
							id: l,
							kind: E.b.Error,
							text: c.json.errors ? c.json.errors[0][1] : s.fbt._("An error has occured. Please try again later", null, {
								hk: "2acjBM"
							})
						}))
					})(t.subredditId, n, a))
				}));
			class re extends c.a.Component {
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
						} = this, n = {
							rule: t.rule.trim(),
							kind: t.kind,
							reason: t.reportReason.trim(),
							description: t.description.trim()
						};
						e.rule ? e.updateRule(n, e.rule.shortName) : e.createRule(n), e.toggleModal(), e.sendEvent()
					}, this.canSave = () => {
						const {
							props: e,
							state: t
						} = this, n = t.rule.trim(), s = t.reportReason.trim(), a = t.description.trim(), r = !e.ruleNames.includes(n) || e.ruleNames.includes(n) && e.rule && e.rule.shortName === n, o = !e.rule || (e.rule.shortName !== n || e.rule.violationReason !== t.reportReason || e.rule.kind !== t.kind || e.rule.description !== a);
						return r && o && n.length > 0 && n.length <= H.g && s.length <= H.f && a.length <= H.a && t.kind
					}, this.selectRuleKind = e => {
						this.setState({
							kind: e
						})
					}, this.isDuplicateRuleName = () => {
						const {
							props: e,
							state: t
						} = this, n = !e.rule || e.rule.shortName !== t.rule.trim(), s = e.ruleNames.includes(t.rule.trim());
						return 0 !== t.rule.trim().length && n && s
					}, this.state = e.rule ? {
						rule: e.rule.shortName,
						kind: e.rule.kind,
						reportReason: e.rule.violationReason || "",
						description: e.rule.description || ""
					} : se
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return c.a.createElement(Z.e, null, c.a.createElement(Z.i, null, c.a.createElement(ne.a, null, c.a.createElement(Z.q, null, e.rule ? s.fbt._("Edit rule", null, {
						hk: "2zflTO"
					}) : s.fbt._("Add rule", null, {
						hk: "1xqo5O"
					})), c.a.createElement(te.a, {
						className: K.a.modalCloseButton,
						onClick: e.toggleModal
					}, c.a.createElement(Z.b, null)))), c.a.createElement(Z.l, null, c.a.createElement(Z.h, null, c.a.createElement(Z.p, {
						className: K.a.modalRule
					}, s.fbt._("Rule", null, {
						hk: "1W7esG"
					})), c.a.createElement(Z.t, {
						className: K.a.modalRuleField,
						onChange: this.onRuleInputChange,
						placeholder: s.fbt._('Rule displayed (e.g. "No photos")', null, {
							hk: "GdEW"
						}),
						value: t.rule
					}), this.isDuplicateRuleName() && c.a.createElement("span", {
						className: K.a.duplicateName
					}, s.fbt._("You have another rule with this title. Please change.", null, {
						hk: "2EPSGv"
					})), c.a.createElement(Y.a, {
						maxChars: H.g,
						text: t.rule.trim()
					})), c.a.createElement(Z.h, null, c.a.createElement(Z.p, {
						className: K.a.modalRuleTitle
					}, s.fbt._("Applies to", null, {
						hk: "Pzu3b"
					})), c.a.createElement($.a, {
						name: "RULE_KIND_PICKER",
						onChange: this.selectRuleKind,
						value: t.kind
					}, c.a.createElement(ee.a, {
						className: K.a.modalRadioButton,
						key: H.b.all,
						value: H.b.all,
						selected: t.kind === H.b.all,
						showButton: !0,
						tabIndex: t.kind === H.b.all ? 0 : -1
					}, c.a.createElement(Z.p, {
						className: K.a.modalRadioText
					}, s.fbt._("Posts & comments", null, {
						hk: "tHmQq"
					}))), c.a.createElement(ee.a, {
						className: K.a.modalRadioButton,
						key: H.b.post,
						value: H.b.post,
						selected: t.kind === H.b.post,
						showButton: !0,
						tabIndex: t.kind === H.b.post ? 0 : -1
					}, c.a.createElement(Z.p, {
						className: K.a.modalRadioText
					}, s.fbt._("Posts only", null, {
						hk: "16dDBr"
					}))), c.a.createElement(ee.a, {
						className: K.a.modalRadioButton,
						key: H.b.comment,
						value: H.b.comment,
						selected: t.kind === H.b.comment,
						showButton: !0,
						tabIndex: t.kind === H.b.comment ? 0 : -1
					}, c.a.createElement(Z.p, {
						className: K.a.modalRadioText
					}, s.fbt._("Comments only", null, {
						hk: "2V8qUA"
					}))))), c.a.createElement(Z.h, null, c.a.createElement(Z.p, {
						className: K.a.modalReportTitle
					}, s.fbt._("Report reason", null, {
						hk: "3ShjE9"
					})), c.a.createElement(Z.m, {
						className: K.a.modalReportMeta
					}, s.fbt._("Defaults to rule name if left blank", null, {
						hk: "2xObiU"
					})), c.a.createElement(Z.t, {
						className: K.a.modalReasonField,
						onChange: this.onReportReasonInputChange,
						placeholder: t.rule.trim().length > 0 && 0 === t.reportReason.trim().length ? t.rule : s.fbt._('Reason rule is broken (e.g. "This is a photo")', null, {
							hk: "2Op1SL"
						}),
						value: t.reportReason
					}), c.a.createElement(Y.a, {
						maxChars: H.f,
						text: t.reportReason.trim()
					})), c.a.createElement("div", {
						className: K.a.modalDescriptionBlock
					}, c.a.createElement(Z.p, {
						className: K.a.modalRuleTitle
					}, s.fbt._("Full description", null, {
						hk: "4CTvQy"
					})), c.a.createElement(Z.t, {
						className: K.a.modalDescriptionField,
						onChange: this.onDescriptionInputChange,
						placeholder: s.fbt._("Enter the full description of the rule.", null, {
							hk: "3EyaJe"
						}),
						value: t.description
					}), c.a.createElement(Y.a, {
						maxChars: H.a,
						text: t.description.trim()
					}))), c.a.createElement(Z.g, {
						className: K.a.modalFooter
					}, c.a.createElement(M.l, {
						className: K.a.modalSubmitButton,
						onClick: this.onSave,
						disabled: !this.canSave()
					}, e.rule ? s.fbt._("Save", null, {
						hk: "4yMsMq"
					}) : s.fbt._("Add new rule", null, {
						hk: "2dy0gV"
					})), c.a.createElement(Z.a, {
						onClick: e.toggleModal
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), e.rule && c.a.createElement(Z.s, {
						className: K.a.modalRemoveButton,
						onClick: e.onDelete
					}, s.fbt._("Delete", null, {
						hk: "4lt26q"
					}))))
				}
			}
			var oe = Object(J.a)(ae(re)),
				ie = n("./src/lib/timeAgo/index.ts"),
				de = n("./src/reddit/components/HumanDate/index.tsx"),
				le = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				ce = n("./src/reddit/components/RichTextJson/index.tsx"),
				me = n("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"),
				ue = n("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				pe = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				be = n("./src/reddit/models/RichTextJson/index.ts");
			const he = {};
			class ge extends c.a.Component {
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
						onEdit: n,
						subredditRule: a
					} = this.props, r = a.descriptionRichText ? JSON.parse(a.descriptionRichText).document : void 0, o = Object(ie.c)(a.createdUtc) >= 1;
					return c.a.createElement(c.a.Fragment, null, c.a.createElement(U.a, {
						className: K.a.row
					}, c.a.createElement("span", {
						className: K.a.ruleNumber
					}, t + 1), c.a.createElement("span", {
						className: K.a.ruleText
					}, a.shortName), c.a.createElement("span", {
						className: K.a.iconWrapper
					}, e && c.a.createElement("button", {
						className: K.a.iconButton,
						onClick: n
					}, c.a.createElement(pe.a, {
						className: K.a.icon,
						title: s.fbt._("Edit", null, {
							hk: "1nftDt"
						})
					})), c.a.createElement("button", {
						className: K.a.iconButton,
						onClick: this.toggleExpandDetails
					}, this.state.isExpanded ? c.a.createElement(me.a, {
						className: K.a.icon,
						title: s.fbt._("Collapse", null, {
							hk: "eGqwd"
						})
					}) : c.a.createElement(ue.a, {
						className: K.a.icon,
						title: s.fbt._("Expand", null, {
							hk: "4dMVPg"
						})
					})))), this.state.isExpanded && c.a.createElement(U.a, {
						className: K.a.expandDetails
					}, c.a.createElement("span", {
						className: K.a.metadata
					}, c.a.createElement("span", {
						className: K.a.ruleMetaTitle
					}, s.fbt._("Report reason", null, {
						hk: "2RH1DJ"
					})), c.a.createElement("span", {
						className: K.a.ruleMetaText
					}, a.violationReason && 0 !== a.violationReason.length ? a.violationReason : a.shortName)), c.a.createElement("span", {
						className: K.a.middleMeta
					}, c.a.createElement("div", {
						className: K.a.middleMetaBlock
					}, c.a.createElement("div", {
						className: K.a.ruleMetaTitle
					}, s.fbt._("Applies to", null, {
						hk: "19eYpy"
					})), c.a.createElement("div", {
						className: K.a.ruleMetaText
					}, a.kind === H.b.all ? s.fbt._("Posts & comments", null, {
						hk: "34PjHx"
					}) : a.kind === H.b.post ? s.fbt._("Posts only", null, {
						hk: "3MllWy"
					}) : s.fbt._("Comments only", null, {
						hk: "StCEa"
					}))), c.a.createElement("div", {
						className: K.a.middleMetaBlock
					}, c.a.createElement("div", {
						className: K.a.ruleMetaTitle
					}, s.fbt._("Created", null, {
						hk: "gSE9w"
					})), c.a.createElement("div", {
						className: K.a.ruleMetaText
					}, o ? c.a.createElement(de.b, {
						seconds: a.createdUtc
					}) : c.a.createElement(de.d, {
						seconds: a.createdUtc
					})))), c.a.createElement("span", {
						className: K.a.metadata
					}, c.a.createElement("span", {
						className: K.a.ruleMetaTitle
					}, s.fbt._("Full description", null, {
						hk: "20Lgcg"
					})), c.a.createElement("span", {
						className: K.a.ruleMetaText
					}, r && !Object(be.G)({
						document: r
					}) ? c.a.createElement(ce.a, {
						className: K.a.ruleMetaText,
						content: {
							document: r
						},
						rtJsonElementProps: he
					}) : a.descriptionHtml ? c.a.createElement(le.a, {
						className: K.a.ruleMetaText,
						html: a.descriptionHtml
					}) : a.description))))
				}
			}
			var fe = ge;
			const xe = p.a.wrapped(M.l, "PrimaryButton", K.a),
				Ee = () => c.a.createElement(U.a, {
					className: K.a.placeholderRow
				}, c.a.createElement("span", {
					className: K.a.emptyWrapper
				}, c.a.createElement("span", {
					className: K.a.emptyIcon
				})), c.a.createElement("span", {
					className: K.a.emptyDetails
				}), c.a.createElement("span", {
					className: K.a.iconWrapper
				}, c.a.createElement("span", {
					className: K.a.emptyRightIcon
				}), c.a.createElement("span", {
					className: K.a.emptyRightIcon
				}))),
				ve = () => c.a.createElement("div", {
					className: K.a.loadingContainer
				}, d()(15, e => c.a.createElement(Ee, {
					key: e
				}))),
				_e = Object(u.c)({
					hasModConfigPerms: (e, t) => Object(q.b)(B.c.config)(e, {
						subredditId: t.subreddit.id
					}),
					isConfirmModalOpen: e => "SubredditRule--Modal--DeleteConfirmation" === Object(W.a)(e),
					isRuleEditorOpen: e => "SubredditRule--Editor--Modal" === Object(W.a)(e),
					isSubredditRulesPending: e => Object(v.P)(e),
					ruleOrder: (e, t) => Object(v.N)(e, {
						subredditId: t.subreddit.id
					}),
					subredditRules: (e, t) => Object(v.Q)(e, {
						subredditId: t.subreddit.id
					})
				}),
				Ce = Object(m.b)(_e, (e, t) => ({
					removeRule: (n, a) => e(((e, t, n) => async (a, r, {
						apiContext: o
					}) => {
						const i = Object(v.R)(r(), {
								subredditId: e
							}).name,
							d = Object(v.Q)(r(), {
								subredditId: e
							})[n],
							l = `success-block-${t}`,
							c = `error-block-${t}`,
							m = await Object(x.d)(o(), i, t);
						if (m.ok) {
							const t = m.body;
							a(y({
								rules: t,
								subredditId: e
							})), a(f.f({
								id: l,
								kind: E.b.SuccessCommunityGreen,
								text: s.fbt._("Rule deleted", null, {
									hk: "2Kwoph"
								}),
								buttonText: s.fbt._("Undo", null, {
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
							text: m.json.errors ? m.json.errors[0][1] : s.fbt._("An error has occured. Please try again later", null, {
								hk: "37ELrZ"
							})
						}))
					})(t.subreddit.id, n, a)),
					reorderRules: n => {
						e(S(t.subreddit.id, n))
					},
					toggleConfirmationModal: () => e(Object(b.i)("SubredditRule--Modal--DeleteConfirmation")),
					toggleRuleEditorModal: () => e(Object(b.i)("SubredditRule--Editor--Modal"))
				}));
			class ke extends c.a.Component {
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
					}, this.handleDrop = (e, t, n) => this.setState({
						ruleOrder: n,
						numRulesMoved: this.state.numRulesMoved + 1
					}), this.reorderRules = () => {
						this.props.reorderRules(this.state.ruleOrder), this.props.sendEvent(F("save_reorder", this.state.numRulesMoved)), this.stopReorder()
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
					}, this.trackClick = e => this.props.sendEvent(L(e)), this.trackEdit = () => this.state.ruleToEdit ? this.trackClick("save_edit") : this.trackClick("save_new"), this.trackDelete = () => this.trackClick("delete"), this.state = {
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
						isRuleEditorOpen: n,
						isSubredditRulesPending: r,
						subreddit: i,
						subredditRules: d
					} = this.props;
					return c.a.createElement(c.a.Fragment, null, e && c.a.createElement(N.c, null, this.state.isReordering ? c.a.createElement(M.o, {
						onClick: this.stopReorder
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})) : c.a.createElement(M.r, {
						onClick: this.startReorder,
						disabled: d.length <= 1
					}, s.fbt._("Reorder rules", null, {
						hk: "1qh7V6"
					})), this.state.isReordering ? c.a.createElement(xe, {
						onClick: this.reorderRules,
						disabled: o()(d.map(e => e.shortName), this.state.ruleOrder)
					}, s.fbt._("Save", null, {
						hk: "4yMsMq"
					})) : c.a.createElement(xe, {
						onClick: this.toggleEditorModal,
						disabled: r || d.length >= H.e
					}, s.fbt._("Add rule", null, {
						hk: "6GEk0"
					}))), d.length ? c.a.createElement(N.a, null, c.a.createElement("div", {
						className: K.a.header
					}, c.a.createElement(N.b, {
						className: K.a.rulesHeader
					}, s.fbt._("Rules", null, {
						hk: "41SmPR"
					}), c.a.createElement(I.a, {
						linkUrl: `${a.a.redditModHelpUrl}/hc/en-us/articles/360023379211`
					})), !this.state.isReordering && c.a.createElement("div", {
						className: K.a.rulesInfo
					}, s.fbt._("These are rules that visitors must follow to participate. They can be used as reasons to report or ban posts, comments, and users. Communities can have a maximum of 15 rules.", null, {
						hk: "1C2Vjc"
					}))), this.state.isReordering ? c.a.createElement(P.a, {
						values: this.state.ruleOrder,
						render: (e, t, n, s, a) => c.a.createElement(Q, {
							isDragging: n,
							isOver: s,
							canDrop: a,
							index: t,
							shortName: e
						}),
						onDrop: this.handleDrop
					}) : d.map((t, n) => c.a.createElement(fe, {
						hasConfigPerms: e,
						index: n,
						key: `${i.name}-${t.shortName}`,
						onEdit: () => this.onEditRule(t),
						subredditRule: t
					}))) : c.a.createElement(N.a, null, c.a.createElement("div", {
						className: K.a.header
					}, c.a.createElement(N.b, {
						className: K.a.rulesHeader
					}, s.fbt._("Rules", null, {
						hk: "41SmPR"
					}), c.a.createElement(I.a, {
						linkUrl: `${a.a.redditModHelpUrl}/hc/en-us/articles/360023379211`
					}))), r ? c.a.createElement(ve, null) : c.a.createElement(w.c, {
						text: s.fbt._("No rules yet", null, {
							hk: "pYLkV"
						})
					}, c.a.createElement(D.a, {
						name: "rules",
						className: K.a.rulesIcon
					}))), n && c.a.createElement(oe, {
						onDelete: this.onConfirmDeleteRule,
						rule: this.state.ruleToEdit,
						ruleNames: d.map(e => e.shortName),
						sendEvent: this.trackEdit,
						subredditId: i.id,
						toggleModal: this.toggleEditorModal,
						withOverlay: !0
					}), t && this.state.ruleToEdit && c.a.createElement(j.a, {
						actionText: s.fbt._("Delete", null, {
							hk: "4lt26q"
						}),
						headerText: s.fbt._("Delete rule", null, {
							hk: "5q2Ri"
						}),
						modalText: s.fbt._("Are you sure you want to delete this rule?", null, {
							hk: "2diD6u"
						}),
						onConfirm: this.deleteRule,
						toggleModal: this.toggleConfirmationModal,
						trackClick: this.trackDelete,
						withOverlay: !0
					}))
				}
			}
			t.a = Ce(Object(T.c)(ke))
		},
		"./src/reddit/components/SubredditSearchCarousel/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const d = Object(s.a)({
					resolved: {},
					chunkName: () => "SubredditSearchCarousel",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("SubredditSearchCarousel").then(n.bind(null, "./src/reddit/components/SubredditSearchCarousel/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/SubredditSearchCarousel/index.tsx"
					}
				}),
				l = e => {
					const t = Object(o.e)(i.e),
						n = Object(o.e)(i.a);
					return t || n ? r.a.createElement(d, e) : null
				}
		},
		"./src/reddit/components/UserNameAndIcon/index.m.less": function(e, t, n) {
			e.exports = {
				UserIconContainer: "_3gyThPd4NTS21qtNdizCxE",
				userIconContainer: "_3gyThPd4NTS21qtNdizCxE",
				UserIcon: "_1utZNH6IItbNzgdnUBW-Bp",
				userIcon: "_1utZNH6IItbNzgdnUBW-Bp",
				UserLink: "_2Q3rLIRb_ij54AEsabVm9L",
				userLink: "_2Q3rLIRb_ij54AEsabVm9L"
			}
		},
		"./src/reddit/components/UserNameAndIcon/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				d = n("./src/reddit/components/UserIcon/index.tsx"),
				l = n("./src/reddit/controls/InternalLink/index.tsx"),
				c = n("./src/reddit/components/UserNameAndIcon/index.m.less"),
				m = n.n(c);
			const u = o.a.span("UserIconContainer", m.a),
				p = o.a.wrapped(d.a, "UserIcon", m.a),
				b = o.a.wrapped(l.a, "UserLink", m.a);
			t.a = e => r.a.createElement(b, {
				className: e.className,
				to: `${s.a.redditUrl}/user/${e.username}`
			}, r.a.createElement(i.a, {
				user: e.username,
				sendHoverCardEvent: e.sendHoverCardEvent,
				subredditId: e.subredditId,
				tooltipId: e.tooltipId
			}, r.a.createElement(u, {
				style: {
					height: e.iconSize || "32px",
					width: e.iconSize || "32px"
				}
			}, r.a.createElement(p, {
				iconUrl: e.userIcon,
				isNSFW: !1,
				userName: e.username
			})), e.username))
		},
		"./src/reddit/components/Wiki/CreateNewWikiPageModal/index.m.less": function(e, t, n) {
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
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return x
			})), n.d(t, "b", (function() {
				return E
			}));
			var s = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/post.ts"),
				o = n("./src/reddit/actions/tooltip.ts"),
				i = n("./src/reddit/models/Vote/index.ts"),
				d = n("./src/reddit/contexts/InsideOverlay.tsx"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/contexts/Post/index.tsx"),
				m = n("./src/reddit/selectors/activeModalId.ts"),
				u = n("./src/reddit/selectors/chatPost.ts"),
				p = n("./src/reddit/selectors/moderatorPermissions.ts"),
				b = n("./src/reddit/selectors/postFlair.ts"),
				h = n("./src/reddit/selectors/posts.ts"),
				g = n("./src/reddit/selectors/showPromotedCTA.ts"),
				f = n("./src/reddit/selectors/user.ts");
			const x = {
					autoplayPref: f.b,
					activeModalId: m.a,
					crosspost: h.d,
					isActive: h.j,
					isChatPost: u.d,
					isCurrentUserProfilePost: h.l,
					isExpanded: h.m,
					isLoggedIn: f.K,
					showPromotedCTA: g.a,
					moderatorPermissions: p.l,
					modModeEnabled: l.S,
					poll: (e, t) => {
						const n = e.posts.metaMap[t.postId];
						return n ? e.polls.models[n] : null
					},
					showEditFlair: b.a,
					showMedia: l.s,
					flairStyleTemplate: l.U
				},
				E = (e, {
					postId: t
				}) => ({
					handleVote: n => {
						const s = n === i.a.upvoted ? Object(r.jb)(t) : Object(r.w)(t);
						e(s)
					},
					onIgnoreReports: () => e(Object(r.fb)(t)),
					onOpenReportsDropdown: t => e(Object(o.h)({
						tooltipId: t
					}))
				}),
				v = Object(s.b)(() => Object(a.c)(x), E, (e, t, n) => ({
					...e,
					...t,
					...n,
					formatTitle: e => e.title
				}));
			t.a = e => Object(c.b)(v(Object(d.b)(e)))
		},
		"./src/reddit/connectors/ClassicPost/searchResults.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx"),
				l = n("./src/reddit/connectors/ClassicPost/index.tsx");
			const c = Object(i.u)({
					searchQuery: i.Y
				}),
				m = Object(r.b)(() => Object(o.c)(l.c), l.b, (e, t, n) => ({
					...e,
					...t,
					...n,
					formatTitle: Object(d.a)(n.searchQuery || "", e => a.a.createElement("em", {
						style: {
							fontWeight: 700
						}
					}, e), e => a.a.createElement("span", {
						style: {
							fontWeight: "normal"
						}
					}, e))
				}));
			t.a = e => c(m(e))
		},
		"./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/lib/LRUCache/index.ts"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a);
			const o = new s.a(250),
				i = (e, t, n) => {
					const s = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const a = `${e.id}-${s}`;
						let i = o.get(a);
						if (void 0 === i) {
							const d = new RegExp(`(\\b${s}\\b)`, "gi"),
								l = e.title.split(d);
							i = n(r.a.createElement(r.a.Fragment, null, r.a.Children.toArray(l.map((e, n) => n % 2 != 0 ? t(e) : e)))), o.set(a, i)
						}
						return i
					}
				}
		},
		"./src/reddit/constants/gold.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "g", (function() {
				return m
			}));
			const s = "ModerationPage--Modal--AddAward",
				a = "ModerationPage--Modal--DeleteAwardConfirmation",
				r = 20,
				o = 4,
				i = 1e4,
				d = .2,
				l = .1,
				c = .1,
				m = 500
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/fonts/index.tsx"),
				i = n("./src/reddit/controls/Checkbox/index.m.less"),
				d = n.n(i);
			t.a = e => a.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, a.a.createElement(o.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(r.a)({
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/controls/CheckboxInput/index.m.less": function(e, t, n) {
			e.exports = {
				checkboxInput: "_2BPowd18EKTnfZFrj5kY3G",
				disabled: "_303iMx_S0pgrbpYhsYTV6K",
				checkboxSelected: "_2VtQ8EjxlJXdicVJhc73gQ"
			}
		},
		"./src/reddit/controls/CheckboxInput/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				d = n("./src/reddit/layout/row/Inline/index.tsx"),
				l = n("./src/reddit/controls/CheckboxInput/index.m.less"),
				c = n.n(l);
			t.a = e => a.a.createElement(d.a, {
				"aria-checked": !!e.value,
				"aria-disabled": e.disabled,
				"aria-labelledby": e.name,
				className: Object(r.a)(e.className, c.a.checkboxInput, e.disabled ? c.a.disabled : null),
				onClick: e.onChange && !e.disabled ? () => e.onChange(!e.value) : void 0,
				role: "checkbox"
			}, a.a.createElement("input", {
				value: e.value ? e.value.toString() : "",
				type: "hidden"
			}), e.value ? a.a.createElement(i.a, {
				className: c.a.checkboxSelected
			}) : a.a.createElement(o.a, null), e.children)
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				a = n.n(s),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				l = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				c = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				u = n("./src/reddit/controls/Dropdown/index.m.less"),
				p = n.n(u),
				b = n("./src/reddit/controls/Dropdown/row.m.less"),
				h = n.n(b);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class f extends o.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = a()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, n = Object(i.a)(h.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? o.a.createElement(d.a, g({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href,
						disabled: e.disabled
					}), e.children && o.a.createElement("span", {
						className: n
					}, e.children), o.a.createElement("span", {
						className: Object(i.a)(h.a.text, e.textClassName)
					}, e.displayText)) : o.a.createElement(m.a, g({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: a()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? o.a.createElement("div", null, e.children) : o.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && o.a.createElement("span", {
						className: Object(i.a)(h.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && o.a.createElement(c.a, {
						className: h.a.checkmark
					}), e.showDropdownTriangle && o.a.createElement(l.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const n = Object(i.a)(h.a.row, e, {
					[h.a.mIsInteractive]: !t.noHover,
					[h.a.mIsSelected]: t.isSelected,
					[h.a.topics]: t.isTopicsStyle
				});
				return o.a.createElement(f, g({
					className: n
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/DropdownSelector/index.m.less": function(e, t, n) {
			e.exports = {
				dropdownMenu: "_1PLoXiZH4WKzHTfmYIt34X",
				selector: "apk_M-7ks6NcaiMN8cotM",
				selectorContent: "Ot99igbaJ5id3P1tw6wow",
				compact: "_1qaMsHCBrTmejbIUPjsRVI",
				caretDown: "_2i4dyr-iTBOmkZ4fL_M70P",
				topics: "qWs3cMcSjquK-OXl-9jH5",
				loadingIcon: "_3WxhmmhQ3cYt1J7mtfcoKG",
				menuItems: "_3ssvFhIB2HAXL261eWf7G0",
				menuOption: "_1Qm1phX3yfiJHnjgi_O_9V",
				buttonIcon: "_1J0h3Uv7HEaVZiJLcCUlQw"
			}
		},
		"./src/reddit/controls/DropdownSelector/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/reddit/controls/DropdownSelector/index.m.less"),
				o = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/controls/Dropdown/Row.tsx"),
				l = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = n("./src/reddit/icons/fonts/index.tsx");
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
					}, this.onSelectOption = (e, t, n) => {
						const {
							onSelect: s
						} = this.props;
						e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopPropagation(), s(t), n && this.dropdownButton.current && this.dropdownButton.current.focus(), this.setState({
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
							const n = this.menuItems.current.getElementsByClassName(o.a.menuOption);
							for (let s = 0; s < n.length; s++) e.relatedTarget === n[s] && (t = !0)
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
							const t = this.menuItems.current.getElementsByClassName(o.a.menuOption);
							for (let n = 0; n < t.length; n++) t[n] === e.target && (38 === e.keyCode && n > 0 && t[n - 1].focus(), 40 === e.keyCode && n < t.length - 1 && t[n + 1].focus())
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
					const e = this.menuItems.current.getElementsByClassName(o.a.menuOption);
					e.length && e[0].focus()
				}
				getDropdownMenuItems() {
					const {
						options: e,
						showSelectedCheckmark: t,
						isTopicsStyle: n
					} = this.props;
					return e.map((e, s) => a.a.createElement(d.b, {
						key: s + e.displayText,
						className: Object(i.a)(o.a.menuOption, {
							[o.a.topics]: n
						}),
						noIcon: Boolean(e.icon),
						onKeydown: t => this.handleOptionKeyDown(t, e),
						onMouseDown: t => this.onOptionClick(t, e),
						onBlur: this.handleDropdownBlur,
						showSelectedCheckmark: t,
						isSelected: void 0 !== e.isSelected ? e.isSelected : void 0,
						isTopicsStyle: n
					}, e.icon && e.icon, e.displayText))
				}
				render() {
					const {
						buttonClassName: e,
						className: t,
						displayText: n,
						isCompactStyle: s,
						isTopicsStyle: r,
						menuItemsClassName: d,
						name: u,
						isSaving: p,
						buttonIcon: b
					} = this.props, {
						isOpen: h
					} = this.state;
					return a.a.createElement("div", {
						ref: this.containerRef,
						id: this.props.id,
						className: Object(i.a)(o.a.dropdownMenu, t, {
							[o.a.topics]: r
						})
					}, a.a.createElement("button", {
						onClick: this.handleDropdownClick,
						className: Object(i.a)(e, o.a.selector, {
							[o.a.compact]: s
						}, {
							[o.a.topics]: r
						}),
						name: u,
						role: "menu",
						ref: this.dropdownButton,
						onBlur: this.handleDropdownBlur,
						onKeyDown: this.handleDropdownKeyDown
					}, a.a.createElement("span", {
						className: o.a.selectorContent,
						tabIndex: -1
					}, b && a.a.createElement("span", {
						className: o.a.buttonIcon
					}, b), n), p ? a.a.createElement(l.a, {
						sizePx: 8,
						className: o.a.loadingIcon
					}) : a.a.createElement(c.a, {
						name: "caret_down"
					})), a.a.createElement("div", {
						className: Object(i.a)(o.a.menuItems, d, {
							[o.a.topics]: r
						}),
						onMouseDown: m,
						ref: this.menuItems
					}, h && this.getDropdownMenuItems()))
				}
			}
			t.b = u
		},
		"./src/reddit/controls/FileDrop/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/flow.js"),
				a = n.n(s),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-dnd/lib/index.js"),
				d = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				l = n("./src/reddit/helpers/dragDropContext/index.ts");
			const c = d.NativeTypes.FILE,
				m = a()(Object(i.DropTarget)(c, {
					drop: (e, t) => {
						if (t && t.didDrop() || !t) return;
						const n = t.getItem();
						n.files && e.onDrop(n.files)
					}
				}, (e, t) => ({
					connectDropTarget: e.dropTarget(),
					isOver: t.isOver(),
					canDrop: t.canDrop()
				})), l.a);
			class u extends o.a.Component {
				render() {
					return this.props.connectDropTarget ? this.props.connectDropTarget(o.a.createElement("div", {
						className: this.props.className
					}, this.props.render(this.props.isOver, this.props.canDrop))) : null
				}
			}
			t.a = m(u)
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, n) {
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
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "d", (function() {
				return E
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/ErrorText/index.tsx"),
				d = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				c = n("./src/reddit/controls/FormFields/index.m.less"),
				m = n.n(c);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const p = o.a.input("input", m.a),
				b = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				h = e => {
					const {
						label: t,
						children: n,
						inputRef: s,
						className: o,
						...i
					} = e, d = void 0 !== e.value && "" !== e.value;
					return a.a.createElement("div", {
						className: Object(r.a)(m.a.inputWrapper, o, {
							[m.a.mIsInvalid]: e.isInvalid
						}),
						onClick: b
					}, a.a.createElement(p, u({
						"aria-invalid": e.isInvalid,
						innerRef: s
					}, i)), e.label && a.a.createElement("label", {
						className: Object(r.a)(m.a.label, {
							[m.a.mHasValue]: d
						})
					}, e.label), e.children)
				},
				g = e => {
					const {
						label: t,
						children: n,
						inputRef: s,
						isInvalid: o,
						className: i,
						redditStyle: d,
						...l
					} = e, c = void 0 !== e.value && "" !== e.value;
					return a.a.createElement("div", {
						className: Object(r.a)(m.a.inputMovingLabelWrapper, i, {
							[m.a.mIsInvalid]: o,
							[m.a.mIsRedditStyle]: d
						}),
						onClick: b
					}, a.a.createElement(p, u({
						innerRef: s
					}, l)), e.label && a.a.createElement("label", {
						className: Object(r.a)(m.a.label, {
							[m.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				f = e => a.a.createElement("div", {
					className: Object(r.a)(m.a.addValueButton, e.className),
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
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: x.REMOVE,
							value: n,
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
						label: n,
						placeholder: s,
						errors: r = []
					} = this.props;
					return e.map((e, o) => a.a.createElement(h, {
						inputRef: e => this.setInputRef(e, o),
						isInvalid: !!r[o],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, o),
						placeholder: s,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, a.a.createElement("div", {
						className: m.a.trashContainer,
						onClick: () => this.removeValue(o)
					}, a.a.createElement(l.b, {
						className: m.a.trash
					})), !!r[o] && a.a.createElement(i.b, {
						className: m.a.errorText
					}, r[o])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: s,
						addValueText: o,
						disabled: i
					} = this.props;
					this.focusedInput = null;
					const d = !(!!s && n.length >= s) && !i;
					return a.a.createElement("div", {
						className: Object(r.a)(m.a.multiInputWrapper, e)
					}, t && d && a.a.createElement(f, {
						onClick: this.addValue,
						text: o
					}), this.renderFields(), !t && d && a.a.createElement(f, {
						onClick: this.addValue,
						text: o
					}))
				}
			}
		},
		"./src/reddit/controls/ImageDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				imageDisplay: "_1OSym2TYADlQNpSDWNxtjB"
			}
		},
		"./src/reddit/controls/ImageDisplay/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/ImageDisplay/index.m.less"),
				i = n.n(o);
			t.a = ({
				backgroundImage: e,
				children: t,
				className: n
			}) => a.a.createElement("div", {
				className: Object(r.a)(i.a.imageDisplay, n),
				style: {
					backgroundImage: `url('${e}')`
				},
				children: t
			})
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			class r extends a.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							n = this.props.multiple ? [...t] : t[0];
						this.props.onChange(n), this.setState(() => ({
							value: n
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				static getDerivedStateFromProps(e, t) {
					return {
						value: t.value || e.value || ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = "string" == typeof t.value ? t.value : "", s = "object" == typeof t.value ? t.value : null, r = n || s;
					return a.a.createElement("div", {
						className: e.className
					}, n && a.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: n,
						tabIndex: e.tabIndex
					}), (!r || e.multiple || void 0 !== e.isPending && !e.isPending) && a.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
					}))
				}
			}
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, n) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "d", (function() {
				return p
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				d = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				l = n.n(d);
			const c = o.a.span("metaText", l.a),
				m = e => r.a.createElement(c, e, " · "),
				u = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: n,
					...a
				}) => {
					const o = Object(i.b)(t),
						d = s.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [s.fbt._plural(t, "number", o)], {
							hk: "2L3T21"
						}),
						l = e ? s.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : n ? d : s.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [s.fbt._plural(t, "number", o)], {
							hk: "gf67v"
						});
					return r.a.createElement(c, a, l)
				},
				p = e => r.a.createElement(c, null, s.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [s.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/controls/Select/index.m.less": function(e, t, n) {
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
		"./src/reddit/controls/Sortable/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/reddit/helpers/dragDropContext/index.ts"),
				o = n("./node_modules/lodash/flow.js"),
				i = n.n(o),
				d = n("./node_modules/react-dnd/lib/index.js");
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
						const n = t.getDropResult();
						e.onDrop(e.id, n.id)
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
					const n = t.getItem();
					return e.id !== n.id
				}
			}, (e, t) => ({
				connectDropTarget: e.dropTarget(),
				isOver: t.isOver(),
				canDrop: t.canDrop()
			})))(l);
			class m extends a.a.Component {
				constructor(e) {
					super(e), this.onDrop = (e, t) => {
						this.setState(n => {
							const s = n.values.slice(),
								a = s.indexOf(e),
								r = s.splice(a, 1)[0];
							let o = s.indexOf(t);
							return a <= o && (o += 1), s.splice(o, 0, r), this.props.onDrop(e, t, s), {
								values: s
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
						onClick: n,
						render: s
					} = this.props;
					return a.a.createElement("div", {
						className: e
					}, this.state.values.map((e, r) => a.a.createElement(c, {
						id: e,
						key: t && t(e, r),
						index: r,
						render: s,
						onDrop: this.onDrop,
						onClick: n
					})))
				}
			}
			t.a = Object(r.a)(m)
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/InternalLink/index.tsx"),
				r = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				o = n.n(r);
			t.a = s.a.wrapped(a.a, "unstyledInternalLink", o.a)
		},
		"./src/reddit/endpoints/economics/uploadedAssets.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			}));
			var s, a, r = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function i(e, t, n, s) {
				const a = `assetType=${n}&assetStatus=${s}`;
				return Object(o.a)(e, {
					method: "get",
					endpoint: `${r.a.metaUrl}/modtools/${t}/assets?${a}`
				})
			}

			function d(e, t, n) {
				const a = new FormData;
				return a.append("assetType", n.assetType), a.append("assetName", n.assetName), a.append("upfile", n.imageFile), n.assetType === s.Badge && (a.append("badgeColor", n.badgeColor || ""), a.append("badgeDescription", n.badgeDescription || "")), Object(o.a)(e, {
					endpoint: `${r.a.metaUrl}/modtools/${t}/assets`,
					method: "post",
					type: null,
					data: a
				})
			}

			function l(e, t, n, s, a) {
				return Object(o.a)(e, {
					endpoint: `${r.a.metaUrl}/modtools/${t}/assets/${n}s/${s}`,
					method: "patch",
					data: a
				})
			}! function(e) {
				e.Badge = "badge", e.Emote = "emote"
			}(s || (s = {})),
			function(e) {
				e.Uploaded = "uploaded", e.Approved = "approved", e.Rejected = "rejected"
			}(a || (a = {}))
		},
		"./src/reddit/endpoints/geotagging/setSubredditGeoPlace.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			}));
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/SetSubredditGeoPlace.json");
			const r = e => ({
				input: {
					subredditId: e.subredditId,
					geoPlace: {
						id: e.placeId,
						source: e.source,
						sessionId: e.sessionId
					}
				}
			});
			t.a = async (e, t) => Object(s.a)(e, {
				...a,
				variables: r(t)
			})
		},
		"./src/reddit/endpoints/page/subredditWiki.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/SubredditWiki.json");
			const r = (e, t) => Object(s.a)(e, {
				...a,
				variables: t
			})
		},
		"./src/reddit/endpoints/subredditModeration/moderationLog.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/AllModerators.json"),
				r = n("./src/redditGQL/operations/FetchModerationLogActions.json");
			const o = (e, t, n) => Object(s.a)(e, {
					...r,
					variables: {
						subredditName: t,
						...n
					}
				}),
				i = (e, t) => Object(s.a)(e, {
					...a,
					variables: {
						subredditName: t
					}
				})
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/featureFlags/index.ts");

			function d(e, t, n) {
				const s = Object(o.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(r.b)(s)(e => {
					const {
						featureEnabled: s,
						...r
					} = e, o = r;
					return s ? a.a.createElement(t, o) : void 0 !== n ? a.a.createElement(n, o) : null
				})
			}
		},
		"./src/reddit/helpers/awards/isEligibleForCommunityAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/models/Subreddit/index.ts");
			const a = new Set(["goins", "gold_testing", "inthesoulstone", "lounge", "lssgoldnormal", "maymodsguide1", "maymodsguide2", "megalounge", "pan2", "pan3", "venkman_bookclub", "whatssnoo", "translation_piglatin", "translation_pirate", "translation_initials", "translation_german", "translation_british", "translation_french_fr", "translation_es_mx", "translation_br_pt", "german_translation", "lssgoldnormal_13", "test_automation_001"]),
				r = new Set([s.f.Private, s.f.User]),
				o = e => !(!e || !e.name) && (!!a.has(e.name.toLowerCase()) || !e.isNSFW && !e.isQuarantined && !r.has(e.type));
			t.a = o
		},
		"./src/reddit/helpers/awards/isEligibleForGlobalAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const s = new Set(["t5_22cerq"]),
				a = e => s.has(e);
			t.a = a
		},
		"./src/reddit/helpers/awards/isEligibleForTemporaryAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const s = new Set(["t5_q0gj4", "t5_z5gli", "t5_22cerq", "t5_3j0kj"]),
				a = e => s.has(e)
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/models/WhitelistStatus/index.ts");
			const a = (e, t) => {
				const n = e.some(e => e.isNSFW),
					a = t.some(e => e.wls === s.b.NO_ADS);
				return !n && !a
			}
		},
		"./src/reddit/helpers/canAccessModerationPage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/models/Subreddit/index.ts");
			t.a = ({
				pageName: e,
				moderatorPermissions: t,
				canCreateScheduledPosts: n,
				isEmployee: r,
				isStreamingEnabled: o,
				subredditType: i,
				isContributor: d
			}) => {
				switch (e) {
					case s.ec.Awards:
						return !!t;
					case s.ec.Powerups:
						return !!(null == t ? void 0 : t.config);
					case s.ec.SubredditRules:
					case s.ec.Moderators:
						return !0;
					case s.ec.Modlog:
						return !!t;
					case s.ec.Muted:
						return !!(t && t.access && t.mail);
					case s.ec.Banned:
						return !(!t || !t.access);
					case s.ec.Contributors:
						return !!(t && t.access || i === a.f.Restricted || i === a.f.Private && d);
					case s.ec.Flair:
					case s.ec.PostFlair:
					case s.ec.UserFlair:
						return !(!t || !t.flair);
					case s.ec.CommunitySettings:
						return !(!t || !t.config);
					case s.ec.Modqueue:
					case s.ec.Reports:
					case s.ec.Edited:
					case s.ec.Spam:
					case s.ec.Unmoderated:
					case s.ec.ContentControls:
					case s.ec.Removal:
						return !(!t || !t.posts);
					case s.ec.ChatSettings:
						return !!t;
					case s.ec.Badges:
					case s.ec.Emojis:
						return !!t;
					case s.ec.Emotes:
						return !(!t || !t.config);
					case s.ec.Streaming:
						return !!(t && t.all && o);
					case s.ec.Wiki:
					case s.ec.WikiBanned:
					case s.ec.WikiContributors:
						return !(!t || !t.wiki);
					case s.ec.Traffic:
						return r || !!t;
					case s.ec.EventPostContent:
					case s.ec.ScheduledPostContent:
						return !!n;
					case s.ec.Predictions:
						return !(!t || !t.posts);
					default:
						return !1
				}
			}
		},
		"./src/reddit/helpers/dragDropContext/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-dnd/lib/index.js"),
				a = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				r = n.n(a);
			t.a = Object(s.DragDropContext)(r.a)
		},
		"./src/reddit/helpers/graphql/normalizeModerationLogFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/helpers/graphql/helpers.ts");
			const a = e => {
					const t = [];
					for (const {
							node: n
						} of e.edges) {
						const {
							action: e,
							actionNotes: a,
							createdAt: r,
							details: o,
							id: i,
							moderator: d,
							subredditName: l,
							target: c
						} = n, m = {
							action: e,
							actionNotes: a,
							createdAt: Object(s.e)(r),
							details: o,
							id: i,
							moderator: d,
							subredditName: l,
							target: c
						};
						t.push(m)
					}
					return t
				},
				r = e => {
					const t = [];
					for (const {
							node: n
						} of e.edges) {
						const {
							id: e,
							name: s
						} = n, a = {
							id: e,
							name: s
						};
						t.push(a)
					}
					return t
				}
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const a = ({
				edges: e
			}) => {
				const t = [];
				for (const {
						node: n
					} of e) t.push(Object(s.f)(n));
				return t
			}
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/isValidUsername/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/helpers/normalizeUsername/index.tsx");
			t.a = e => {
				const t = Object(s.a)(e.trim());
				return t.length > 2 && t.length <= 20
			}
		},
		"./src/reddit/helpers/readOnlyMode/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return a
				})), n.d(t, "c", (function() {
					return r
				})),
				function(e) {
					e.editable = "editable", e.focusableReadOnly = "focusablereadonly", e.readOnly = "readonly"
				}(s || (s = {}));
			const a = e => r(e) || e === s.focusableReadOnly,
				r = e => e === s.readOnly
		},
		"./src/reddit/helpers/search/renderMedia.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/reddit/components/PostMedia/index.tsx");
			const o = (e, t, n, s, r, o) => s ? e.crosspostRootId ? a.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, i(e, n, r, o)) : i(e, n, r, o) : null,
				i = (e, t, n, s) => a.a.createElement(r.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: s,
					isListing: !0,
					isNotCardView: !0,
					post: e,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					shouldShowGalleryTileOption: n,
					showCentered: !0,
					showFull: !0
				})
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return u
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "d", (function() {
				return f
			}));
			var s = n("./node_modules/polished/dist/polished.es.js"),
				a = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				o = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = n("./src/reddit/models/Theme/index.ts"),
				d = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				l = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				c = n.n(l);
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
				b = e => Object(s.k)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : m,
				g = e => e.isActive ? c.a.mIsActive : void 0,
				f = e => {
					const t = Object(r.a)(Object(a.a)(e), o.a.actionIcon, o.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, n) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = n.n(a);
			const o = ({
					isLoading: e
				}) => Object(s.a)(r.a.loadingBackground, {
					[r.a["m-loading"]]: e
				}),
				i = e => Object(s.a)(r.a.loadingBar, o(e))
		},
		"./src/reddit/helpers/trackers/communitySettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return u
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "e", (function() {
				return g
			}));
			var s = n("./node_modules/lodash/snakeCase.js"),
				a = n.n(s),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const i = {
					contentOptions: "link_type",
					contentVisible: "allow_top",
					subredditType: "type",
					welcomeMessageText: "welcome_message"
				},
				d = {
					allowChatPostCreation: r.fc.Posts,
					allowDiscovery: r.fc.Safety,
					allowGalleries: r.fc.Posts,
					allowImages: r.fc.Posts,
					allowPolls: r.fc.Posts,
					allowPostCrossposts: r.fc.Posts,
					collapseDeletedComments: r.fc.Posts,
					commentScoreHideMins: r.fc.Posts,
					contentOptions: r.fc.Posts,
					contentVisible: r.fc.Safety,
					crowdControlChatLevel: r.fc.Safety,
					crowdControlLevel: r.fc.Safety,
					crowdControlFilter: r.fc.Safety,
					crowdControlMode: r.fc.Safety,
					disableContributorRequests: r.fc.Community,
					excludeBannedModqueue: r.fc.Safety,
					over18: r.fc.Community,
					publicDescription: r.fc.Community,
					restrictCommenting: r.fc.Community,
					restrictPosting: r.fc.Community,
					spamComments: r.fc.Posts,
					spamLinks: r.fc.Posts,
					spamSelfposts: r.fc.Posts,
					spoilersEnabled: r.fc.Posts,
					subredditType: r.fc.Community,
					suggestedCommentSort: r.fc.Posts,
					toxicityThresholdChatLevel: r.fc.Safety,
					welcomeMessageEnabled: r.fc.Community,
					welcomeMessageText: r.fc.Community,
					wikiEditAge: r.fc.Wikis,
					wikiEditKarma: r.fc.Wikis,
					wikimode: r.fc.Wikis
				},
				l = {
					[r.fc.Community]: "community_settings_details",
					[r.fc.Notifications]: "community_settings_notifications",
					[r.fc.Safety]: "community_settings_safety",
					[r.fc.Posts]: "community_settings_content",
					[r.fc.Wikis]: "community_settings_wiki",
					[r.fc.ContentTag]: "content_tag"
				},
				c = e => i[e] || a()(e),
				m = e => {
					const t = d[e];
					return t && l[t] || "community_settings"
				},
				u = (e, t, n) => s => ({
					source: m(e),
					action: "click",
					noun: c(e),
					setting: {
						value: String(t),
						oldValue: String(n)
					},
					subreddit: o.ib(s),
					...o.o(s)
				}),
				p = (e, t, n) => s => ({
					source: m(e),
					action: "save",
					noun: c(e),
					setting: {
						value: String(t),
						oldValue: String(n)
					},
					subreddit: o.ib(s),
					...o.o(s)
				}),
				b = e => t => ({
					source: "community_settings",
					action: "click",
					noun: l[e],
					...o.o(t)
				}),
				h = e => t => ({
					source: l[e],
					action: "click",
					noun: "r2_community_settings",
					...o.o(t)
				}),
				g = (e, t, n, s) => a => ({
					...o.o(a),
					source: "mod_tools",
					action: e,
					noun: t,
					...void 0 !== n && void 0 !== s && {
						setting: {
							value: String(n),
							oldValue: String(s)
						}
					},
					subreddit: o.ib(a),
					actionInfo: o.d(a, {
						reason: "welcome_message"
					})
				})
		},
		"./src/reddit/helpers/trackers/contentTag.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return s
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "l", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "j", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "i", (function() {
				return c
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "n", (function() {
				return u
			})), n.d(t, "m", (function() {
				return p
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "o", (function() {
				return h
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "d", (function() {
				return f
			}));
			const s = () => () => ({
					source: "content_tag",
					action: "view",
					noun: "verify_topics_module"
				}),
				a = () => () => ({
					source: "content_tag",
					action: "click",
					noun: "verify_topics_module"
				}),
				r = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_intro",
					actionInfo: {
						pageType: "survey_intro"
					}
				}),
				o = () => () => ({
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
		"./src/reddit/helpers/trackers/emailInvite.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const r = e => t => ({
					source: e,
					action: "click",
					noun: "invite_via_email",
					...a.o(t),
					subreddit: a.ib(t),
					actionInfo: a.d(t),
					correlationId: Object(s.e)(s.a.SubredditCreation, !1)
				}),
				o = () => e => ({
					source: "email_invite_painted_door",
					action: "view",
					noun: "modal",
					...a.o(e),
					subreddit: a.ib(e),
					actionInfo: a.d(e),
					correlationId: Object(s.c)(s.a.SubredditCreation)
				}),
				i = e => t => ({
					source: "email_invite_painted_door",
					action: "click",
					noun: e,
					...a.o(t),
					subreddit: a.ib(t),
					actionInfo: a.d(t),
					correlationId: Object(s.c)(s.a.SubredditCreation)
				})
		},
		"./src/reddit/helpers/trackers/features/powerupsFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./src/reddit/helpers/flair.ts"),
				a = n("./src/reddit/selectors/comments.ts"),
				r = n("./src/reddit/selectors/gold/powerups/flairs.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, n) => i => {
					const d = Object(a.e)(i, {
							commentId: e
						}),
						l = Object(r.g)(i, {
							subredditId: t,
							userId: n
						});
					return {
						source: "meta",
						action: "hover",
						noun: "achieve_flair",
						...o.o(i),
						subreddit: {
							id: t
						},
						userFlair: {
							id: null == d ? void 0 : d.templateId,
							title: d ? Object(s.g)(d) : void 0,
							achievementFlairId: null == l ? void 0 : l.type,
							achievementFlairTitle: null == l ? void 0 : l.name
						}
					}
				},
				d = () => e => ({
					source: "powerups",
					action: "click",
					noun: "view_your_achievements",
					...o.o(e)
				})
		},
		"./src/reddit/helpers/trackers/modHub.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const a = e => ({
					screen: s.ab(e),
					subreddit: s.ib(e),
					profile: s.R(e),
					userSubreddit: s.rb(e)
				}),
				r = e => t => ({
					source: "mod_hub_nav",
					action: "click",
					noun: e,
					...a(t)
				}),
				o = () => e => ({
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
		"./src/reddit/helpers/trackers/moderationPages.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			}));
			var s = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					screen: a.ab(e),
					profile: a.R(e),
					subreddit: a.ib(e)
				}),
				o = e => {
					switch (e) {
						case s.ec.Banned:
							return "banned";
						case s.ec.Muted:
							return "muted";
						case s.ec.Contributors:
							return "contributors";
						case s.ec.Moderators:
							return "modmanagement";
						case s.ec.Removal:
							return "set_removal_reasons";
						case s.ec.CommunitySettings:
							return "edit";
						default:
							return e
					}
				},
				i = (e, t) => n => ({
					source: o(t),
					noun: e,
					action: "click",
					...r(n)
				}),
				d = e => t => ({
					source: o(e),
					noun: "hover_user_hovercard",
					action: "view",
					...r(t)
				})
		},
		"./src/reddit/helpers/validateFlairCssClass.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/reddit/constants/flair.ts");
			const r = new RegExp(`^[a-zA-Z0-9-]{1,${a.f}}$`);
			t.a = e => {
				if (!e) return;
				const t = e.split(" ").filter(Boolean);
				if (t.length > a.c) return s.fbt._("Too many class names", null, {
					hk: "musK5"
				});
				const n = t.find(e => !e.match(r));
				return n ? n.length > a.f ? s.fbt._("Class name should not be longer than 100 characters", null, {
					hk: "2nBmgP"
				}) : s.fbt._("Class name contains an invalid character", null, {
					hk: "4kdVCU"
				}) : void 0
			}
		},
		"./src/reddit/helpers/wiki/buildWikiPagesTree.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/sortBy.js"),
				a = n.n(s),
				r = n("./src/reddit/constants/wiki.ts");
			const o = e => {
				return a()(e, e => `${e.path}/`.startsWith(`${r.i}/`) ? `\0${e.path}` : e.path).filter(e => !r.l.includes(e.path))
			};
			t.a = e => {
				const t = new Map,
					n = [];
				return o(e).forEach(e => {
					const s = {
							...e,
							children: []
						},
						a = s.parent ? t.get(s.parent) : null;
					a ? a.children.push(s) : n.push(s), t.set(s.path, s)
				}), n
			}
		},
		"./src/reddit/helpers/wiki/makeComparisonDiffKey.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				const {
					comparisonRevisionId: t,
					revisionId: n,
					subredditName: s,
					wikiPageName: a
				} = e;
				return `[${s}]--[${a}]--[rev1:${n}]--[rev2:${t}]`.toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/makeRevisionsListingKey.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				const t = e.isRecent ? "(recent)" : e.wikiPageName;
				return `[${e.subredditName}]--[${t}]`.toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/makeWikiPageKey.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				let t = `[${e.subredditName}]--[${e.wikiPageName}]`;
				return e.revisionId && (t += `--[rev:${e.revisionId}]`), t.toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/validatePageName.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./src/reddit/constants/wiki.ts");
			const a = new RegExp(`^[-\\w]+(?:\\/[-\\w]+){0,${s.c}}$`),
				r = /^[-\w]+$/;
			var o;
			! function(e) {
				e[e.InvalidPageName = 1] = "InvalidPageName", e[e.RestrictedPageName = 2] = "RestrictedPageName", e[e.MaxLengthExceed = 3] = "MaxLengthExceed", e[e.PageAlreadyExists = 4] = "PageAlreadyExists"
			}(o || (o = {}));
			const i = e => {
					if (!r.test(e.toLowerCase())) return o.InvalidPageName
				},
				d = (e, t) => {
					const n = e.toLowerCase(),
						r = n.split("/")[0],
						i = s.b.has(r),
						d = s.f.has(r) && n !== s.h && n !== s.k;
					if (i || d) return o.RestrictedPageName;
					if (!a.test(n)) return o.InvalidPageName;
					if (t) {
						if (t.some(e => e.path.toLowerCase() === n)) return o.PageAlreadyExists
					}
					return n.length > s.d ? o.MaxLengthExceed : void 0
				}
		},
		"./src/reddit/helpers/wiki/wikiRevision.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			}));
			const s = e => e.startsWith("WikiRevision_") ? e : "WikiRevision_" + e,
				a = e => e.startsWith("WikiRevision_") ? e.slice("WikiRevision_".length) : e
		},
		"./src/reddit/hooks/useGqlContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				a = n("./src/reddit/contexts/ApiContext.tsx");

			function r() {
				const {
					gqlContext: e
				} = Object(s.useContext)(a.a);
				return e
			}
		},
		"./src/reddit/hooks/useIsOverlay.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				a = n("./src/reddit/contexts/InsideOverlay.tsx");

			function r() {
				return Object(s.useContext)(a.a)
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => a.a.createElement("i", {
				className: `${Object(r.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less": function(e, t, n) {
			e.exports = {
				CollapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI",
				collapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				o = n("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				i = n.n(o);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: `${Object(r.b)("collapse",e.isFilled)} ${e.className}`,
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, n) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				o = n("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				i = n.n(o);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: `${Object(r.b)("expand",e.isFilled)} ${e.className}`,
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => a.a.createElement("i", {
				className: `${Object(r.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => a.a.createElement("i", {
				className: `${Object(r.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, n) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Admin/index.m.less"),
				i = n.n(o);
			t.a = e => a.a.createElement("svg", {
				className: Object(r.a)(e.className, i.a.admin, {
					[i.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && a.a.createElement("title", null, e.title), e.desc && a.a.createElement("desc", null, e.desc), a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), a.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, a.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), a.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", r({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/CheckmarkFitted/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "3 4 14 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
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
		"./src/reddit/icons/svgs/Circle/index.m.less": function(e, t, n) {
			e.exports = {
				circle: "_17IuRdA-NY8vFk-Tt991sn"
			}
		},
		"./src/reddit/icons/svgs/Circle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Circle/index.m.less"),
				i = n.n(o);
			t.a = e => a.a.createElement("svg", {
				className: Object(r.a)(i.a.circle, e.className),
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
		"./src/reddit/icons/svgs/Clear/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
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
		"./src/reddit/icons/svgs/Clock/index.m.less": function(e, t, n) {
			e.exports = {
				clock: "_3dezPhiKJXkVFXj94zLKcs"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Clock/index.m.less"),
				i = n.n(o);
			t.a = e => a.a.createElement("svg", {
				className: Object(r.a)(i.a.clock, e.className),
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
		"./src/reddit/icons/svgs/Collection/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
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
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = n.n(o);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const l = ({
				className: e,
				isSubreddit: t,
				...n
			}) => a.a.createElement("svg", d({
				className: Object(r.a)(i.a.dropdown, {
					[i.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n), a.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = l
		},
		"./src/reddit/icons/svgs/Event/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
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
		"./src/reddit/icons/svgs/Eye/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);

			function r(e) {
				return a.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 40 40"
				}, a.a.createElement("g", null, a.a.createElement("path", {
					d: "M20,8C9.1,8,0.5,14,0.5,21.7h4c0-3.6,3.4-6.9,8.2-8.5C11,15,10,17.4,10,20c0,5.5,4.5,10,10,10s10-4.5,10-10c0-2.6-1-5-2.7-6.8c4.8,1.7,8.2,4.9,8.2,8.5h4C39.5,14,30.9,8,20,8z"
				})))
			}
		},
		"./src/reddit/icons/svgs/Gild/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
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
		"./src/reddit/icons/svgs/Grapple/index.m.less": function(e, t, n) {
			e.exports = {
				grapple: "_23XYJUJn_XitrV-LLkNyCQ",
				mIsDragging: "_1jCsYjqdUw4PYY-s3mGB47"
			}
		},
		"./src/reddit/icons/svgs/Grapple/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Grapple/index.m.less"),
				i = n.n(o);
			t.a = e => a.a.createElement("svg", {
				className: Object(r.a)(e.className, i.a.grapple, {
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
		"./src/reddit/icons/svgs/ImageUpload/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_2irXdPA4C5flwkupsFkN9-"
			}
		},
		"./src/reddit/icons/svgs/ImageUpload/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/ImageUpload/index.m.less"),
				i = n.n(o);
			t.a = e => a.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
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
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
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
		"./src/reddit/icons/svgs/Location/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
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
		"./src/reddit/icons/svgs/ModLogPosts/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
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
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/reddit/constants/colors.ts");
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
				fill: e.isUnread ? r.a.orangered : "none"
			}))
		},
		"./src/reddit/icons/svgs/Negative/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 10 10"
			}, a.a.createElement("path", {
				d: "M2,0 L8,0 C9.1045695,-2.02906125e-16 10,0.8954305 10,2 L10,8 C10,9.1045695 9.1045695,10 8,10 L2,10 C0.8954305,10 1.3527075e-16,9.1045695 0,8 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z M6.2103,5.78636 C6.3275,5.90356 6.3275,6.09356 6.2103,6.21076 C6.1519,6.26916 6.0751,6.29836 5.9983,6.29836 C5.9211,6.29836 5.8447,6.26916 5.7859,6.21076 L4.9983,5.42276 L4.2103,6.21076 C4.1519,6.26916 4.0751,6.29836 3.9983,6.29836 C3.9211,6.29836 3.8447,6.26916 3.7859,6.21076 C3.6687,6.09356 3.6687,5.90356 3.7859,5.78636 L4.5739,4.99836 L3.7859,4.21076 C3.6687,4.09356 3.6687,3.90356 3.7859,3.78636 C3.9031,3.66916 4.0931,3.66916 4.2103,3.78636 L4.9983,4.57436 L5.7859,3.78636 C5.9031,3.66916 6.0931,3.66916 6.2103,3.78636 C6.3275,3.90356 6.3275,4.09356 6.2103,4.21076 L5.4223,4.99836 L6.2103,5.78636 Z M7.4023,2.59436 C6.0767,1.26836 3.9195,1.26916 2.5939,2.59436 C1.2687,3.91996 1.2687,6.07716 2.5939,7.40276 C3.2567,8.06556 4.1275,8.39676 4.9983,8.39676 C5.8687,8.39676 6.7395,8.06556 7.4023,7.40276 C8.7279,6.07716 8.7279,3.91996 7.4023,2.59436 Z"
			}))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && a.a.createElement("title", null, e.title), a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/Positive/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 10 10"
			}, a.a.createElement("path", {
				d: "M2,0 L8,0 C9.1045695,-2.02906125e-16 10,0.8954305 10,2 L10,8 C10,9.1045695 9.1045695,10 8,10 L2,10 C0.8954305,10 1.3527075e-16,9.1045695 0,8 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z M8.0828,3.27736 L7.5232,2.71736 C7.448,2.64216 7.3464,2.60016 7.2404,2.60016 C7.134,2.60016 7.0324,2.64216 6.9576,2.71736 L4.16,5.51456 L3.0428,4.39736 C2.8868,4.24096 2.6336,4.24096 2.4772,4.39736 L1.9172,4.95736 C1.7608,5.11376 1.7608,5.36696 1.9172,5.52296 L3.8772,7.48296 C3.9556,7.56096 4.0576,7.60016 4.16,7.60016 C4.2624,7.60016 4.3648,7.56096 4.4428,7.48296 L8.0828,3.84296 C8.2392,3.68656 8.2392,3.43376 8.0828,3.27736 Z"
			}))
		},
		"./src/reddit/icons/svgs/Post/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M5,15a1,1,0,0,1-1-1V11.17a1,1,0,0,1,.29-.7l8.09-8.09a1,1,0,0,1,1.41,0l2.83,2.83a1,1,0,0,1,0,1.41L8.54,14.71a1,1,0,0,1-.71.29Zm12,1a1,1,0,0,1,0,2H3a1,1,0,0,1,0-2Z"
			}))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/PremiumCircle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("rect", {
				width: "20",
				height: "20",
				rx: "10",
				fill: "url(#gradient)"
			}), a.a.createElement("path", {
				d: "M12.121 13.471c-1.007.146-1.73.445-2.121.643v-3.068a1.2 1.2 0 00-1.2-1.2H6.53c.027-.292.046-.61.046-.978 0-1.015-.294-1.78-.53-2.233l.834-.834H10v2.845a1.2 1.2 0 001.2 1.2h2.27c.036.402.086.749.132 1.045.058.38.109.706.109 1.047 0 .627-.497 1.375-1.59 1.533zm3.017-7.35l-1.345-1.345a.6.6 0 00-.425-.175H6.632a.6.6 0 00-.425.175L4.862 6.122a.6.6 0 00-.042.802c.006.006.556.72.556 1.944 0 .783-.087 1.344-.164 1.84-.064.41-.124.797-.124 1.23 0 1.163.9 2.471 2.619 2.72 1.251.183 1.952.638 1.956.64a.61.61 0 00.67.002c.007-.004.709-.46 1.96-.642 1.719-.249 2.618-1.557 2.618-2.72 0-.433-.06-.82-.124-1.23a11.026 11.026 0 01-.163-1.84c0-1.22.536-1.919.556-1.944a.6.6 0 00-.042-.802z",
				fill: "#fff"
			}), a.a.createElement("defs", null, a.a.createElement("linearGradient", {
				id: "gradient",
				x1: "0",
				y1: "20",
				x2: "20.021",
				y2: "19.979",
				gradientUnits: "userSpaceOnUse"
			}, a.a.createElement("stop", {
				stopColor: "#EC0623"
			}), a.a.createElement("stop", {
				offset: "1",
				stopColor: "#FF8717"
			}))))
		},
		"./src/reddit/icons/svgs/Redditor/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", r({
				viewBox: "0 0 250 250",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), a.a.createElement("g", {
				fill: "inherit"
			}, a.a.createElement("path", {
				d: "M146.8 142.6h-37.6c-31.1 0-56.5 25.3-56.5 56.5 0 5.2 4.2 9.4 9.4 9.4h131.8c5.2 0 9.4-4.2 9.4-9.4 0-31.2-25.3-56.5-56.5-56.5zM128 130.7c20.1 0 36.4-16.3 36.4-36.4v-9.4c0-20.1-16.3-36.4-36.4-36.4S91.6 64.8 91.6 84.9v9.4c0 20.1 16.3 36.4 36.4 36.4z"
			})))
		},
		"./src/reddit/icons/svgs/Replay/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", r({}, e, {
				viewBox: "13 12 23 23",
				xmlns: "http://www.w3.org/2000/svg"
			}), a.a.createElement("g", null, a.a.createElement("path", {
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Settings/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
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
		"./src/reddit/icons/svgs/Show/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M17.71,10.29,14.95,7.54a7,7,0,0,0-9.9,0L2.29,10.29a1,1,0,0,0,1.41,1.41L6.46,8.95c.07-.07.14-.11.21-.17a4,4,0,1,0,6.65,0c.07.06.15.11.21.17l2.76,2.76a1,1,0,0,0,1.41-1.41Z"
			}))
		},
		"./src/reddit/icons/svgs/Tag/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
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
		"./src/reddit/icons/svgs/Trash/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
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
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = n.n(o);
			const d = e => a.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
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
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		},
		"./src/reddit/icons/svgs/Wiki/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
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
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, n) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/layout/row/RightAlign/index.m.less"),
				r = n.n(a);
			t.a = s.a.div("rightAligned", r.a)
		},
		"./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "b", (function() {
					return a
				})), n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.Supporter = "SUPPORTER", e.Achievement = "ACHIEVEMENT"
				}(s || (s = {}));
			const a = e => e.category === s.Supporter,
				r = e => e.category === s.Achievement
		},
		"./src/reddit/models/ModQueueTrigger/index.ts": function(e, t, n) {
			"use strict";
			var s;

			function a(e, t) {
				var n;
				return null === (n = e.modQueueTriggers) || void 0 === n ? void 0 : n.find(e => e.type === t)
			}
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return a
				})),
				function(e) {
					e.USER_REPORTS = "USER_REPORTS", e.AUTOMOD = "AUTOMOD", e.MOD = "MOD", e.ADMIN = "ADMIN", e.SHADOWBANNED_SUBMITTER = "SHADOWBANNED_SUBMITTER", e.HATEFUL_CONTENT = "HATEFUL_CONTENT"
				}(s || (s = {}))
		},
		"./src/reddit/models/SubredditModeration/ModerationLog/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = (e, t, n) => `${e}-${((e,t)=>t||e||"1")(n,t)}`
		},
		"./src/reddit/models/SubredditWikiPage/index.ts": function(e, t, n) {
			"use strict";
			var s, a;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.MayNotView = "MAY_NOT_VIEW", e.PageNotCreated = "PAGE_NOT_CREATED", e.PageNotFound = "PAGE_NOT_FOUND", e.RestrictedPage = "RESTRICTED_PAGE", e.Unknown = "UNKNOWN", e.Valid = "VALID", e.WikiDisabled = "WIKI_DISABLED"
				}(s || (s = {})),
				function(e) {
					e.Inherit = "INHERIT_SUBREDDIT_PERMS", e.Contributors = "CONTRIBUTORS", e.Mods = "MODS"
				}(a || (a = {}))
		},
		"./src/reddit/models/TrafficStats/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return o
			}));
			const s = 97,
				a = 57,
				r = 12;
			var o;
			! function(e) {
				e.TOTAL = "total", e.DESKTOP = "desktop", e.OLD_REDDIT = "oldReddit", e.IOS = "apps", e.ANDROID = "apps", e.MOBILE_WEB = "mWeb"
			}(o || (o = {}))
		},
		"./src/reddit/pages/ModHub/Header.m.less": function(e, t, n) {
			e.exports = {
				titleFontH1: "_3moWGMnbR8K4S0yEul07nr",
				titleFontH2: "_2oI68wVKNMPkDrFs5iv-mT",
				titleFontH3: "_2SjfolwDVVvPkTR19n53-N",
				titleFontH4: "_2PCswqdAkej43QrI3i2XD6",
				titleFontH5: "_2ClzPN9iMLeouYjBczMuak",
				titleFontH6: "-Ys2BgGuQrEY2uMl3yymz",
				metadataFont: "_13D6uHC3HmU2n303ICkc2Z",
				flairFont: "jd22g-ATlzm80vQJWeapy",
				labelsFont: "_1UxIO379jfzGXKK-UTji0l",
				actionFont: "_33izYXQ9DA6aVnhOiSApGv",
				smallButtonFont: "_3gTmhpwBqqacn2Fbh1nFPi",
				largeButtonFont: "_18NraFj-4C_LqHvfoVPar1",
				strongTextFont: "_3tRumE3gvvS_0BYlnDtcIA",
				tabFont: "_1DLPo8qhiBT00GYX1ng3ad",
				buttonFontXS: "_1jy5yDpKOT5-Cv2QAMnE8Z",
				buttonFontXs: "_1jy5yDpKOT5-Cv2QAMnE8Z",
				buttonFontS: "_3DmXGTGm5YD5IApa9MyBNq",
				buttonFontM: "_32Yvll-0lWSj_SZKU0TKRR",
				buttonFontL: "_1wDiG7XcGSvunA559KlfGG",
				buttonFontXL: "xpxpmGAZ5HYQvDSsMNvp8",
				buttonFontXl: "xpxpmGAZ5HYQvDSsMNvp8",
				bodyFontH1: "_1ygLn4-Vtd31oQv6zylo5z",
				bodyFontH2: "_1btDxE6K9AP_wtfakdg11l",
				bodyFontH3: "cMjXJNdI0iac3nSCHtBrq",
				bodyFontH4: "_3ZsC5lxE3Dnw9-duolQiN3",
				bodyFontH5: "_3gWD0dGAav6VxMQZ2iY4qc",
				bodyFontH6: "_2yKCC1d-C1qheMkCr5CedW",
				bodyFont: "_1RI3wkzuynRc_Bqno__Uom",
				bodyFontSmall: "_2MlCobLFb0alel2wzuIFVK",
				bodyFontMono: "_3RdMKJzgzPT9lgXHEf0XZB",
				header: "_3u9on6H92JkZNRumczPd67",
				subredditLink: "_3EIUrhztcaaHcqMILEsnBq",
				subredditIcon: "_3uA1he5X3WeG6mpoUWdcXy"
			}
		},
		"./src/reddit/pages/ModHub/Header.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/reddit/pages/ModHub/Header.m.less"),
				o = n.n(r),
				i = n("./src/reddit/components/SubredditIcon/index.tsx"),
				d = n("./src/reddit/controls/InternalLink/index.tsx");
			t.a = e => {
				var t, n;
				return a.a.createElement("div", {
					className: o.a.header
				}, a.a.createElement(i.b, {
					className: o.a.subredditIcon,
					subredditOrProfile: e.subredditOrProfile
				}), a.a.createElement(d.a, {
					className: o.a.subredditLink,
					to: (null === (t = e.subredditOrProfile) || void 0 === t ? void 0 : t.url) || "",
					onClick: e.onClick
				}, null === (n = e.subredditOrProfile) || void 0 === n ? void 0 : n.displayText), e.pageName && `/ ${e.pageName}`)
			}
		},
		"./src/reddit/pages/ModHub/index.m.less": function(e, t, n) {
			e.exports = {
				contentWrapper: "_2Z3MiFrgj2rofHXrH1YVKn",
				isModerator: "_1haViLcso0RRPvkDGZgDLJ",
				BackgroundContainer: "_1XAvW8OS9HO-SVS7BDAIGe",
				backgroundContainer: "_1XAvW8OS9HO-SVS7BDAIGe",
				Body: "_3hAOyl8ThaUgCBqiNvN_sN",
				body: "_3hAOyl8ThaUgCBqiNvN_sN"
			}
		},
		"./src/reddit/pages/ModHub/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/lodash/fromPairs.js"),
				a = n.n(s),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/extractQueryParams/index.ts"),
				m = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/components/ContentGate/index.tsx"),
				p = n("./node_modules/fbt/lib/FbtPublic.js"),
				b = n("./src/lib/assertNever.ts"),
				h = n("./src/lib/constants/index.ts");
			const g = e => {
				switch (e) {
					case h.ec.Awards:
						return p.fbt._("Awards", null, {
							hk: "EiSXW"
						});
					case h.ec.Powerups:
						return p.fbt._("Powerups", null, {
							hk: "3SZBhK"
						});
					case h.ec.Banned:
						return p.fbt._("Banned", null, {
							hk: "35R8OD"
						});
					case h.ec.Muted:
						return p.fbt._("Muted", null, {
							hk: "f2nJu"
						});
					case h.ec.ContentControls:
						return p.fbt._("Content controls", null, {
							hk: "H1yxv"
						});
					case h.ec.Contributors:
						return p.fbt._("Approved", null, {
							hk: "180AS9"
						});
					case h.ec.Moderators:
						return p.fbt._("Moderators", null, {
							hk: "4qdV8t"
						});
					case h.ec.SubredditRules:
						return p.fbt._("Rules", null, {
							hk: "2SNdd8"
						});
					case h.ec.Removal:
						return p.fbt._("Removal reasons", null, {
							hk: "1smDUM"
						});
					case h.ec.Modqueue:
						return p.fbt._("Mod queue", null, {
							hk: "yEBGb"
						});
					case h.ec.Reports:
						return p.fbt._("Reports", null, {
							hk: "4Ctcb1"
						});
					case h.ec.Spam:
						return p.fbt._("Spam", null, {
							hk: "1D73Vp"
						});
					case h.ec.Unmoderated:
						return p.fbt._("Unmoderated", null, {
							hk: "3TOaeD"
						});
					case h.ec.Edited:
						return p.fbt._("Edited", null, {
							hk: "OLtvW"
						});
					case h.ec.ChatSettings:
						return p.fbt._("Chat settings", null, {
							hk: "3gycCw"
						});
					case h.ec.Modlog:
						return p.fbt._("Mod log", null, {
							hk: "3uy7LL"
						});
					case h.ec.Flair:
						return p.fbt._("Grant user flair", null, {
							hk: "2B8sTJ"
						});
					case h.ec.CommunitySettings:
						return p.fbt._("Community settings", null, {
							hk: "XbHzi"
						});
					case h.ec.Emojis:
						return p.fbt._("Emojis", null, {
							hk: "3mPnxe"
						});
					case h.ec.UserFlair:
						return p.fbt._("User flair", null, {
							hk: "3kleCv"
						});
					case h.ec.PostFlair:
						return p.fbt._("Post flair", null, {
							hk: "2Y1FKb"
						});
					case h.ec.Badges:
						return p.fbt._("Badges", null, {
							hk: "3vM0lt"
						});
					case h.ec.Emotes:
						return p.fbt._("Emotes", null, {
							hk: "2Ivxxq"
						});
					case h.ec.Wiki:
					case h.ec.WikiContributors:
					case h.ec.WikiBanned:
						return p.fbt._("Wiki pages", null, {
							hk: "WdSXv"
						});
					case h.ec.Traffic:
						return p.fbt._("Traffic stats", null, {
							hk: "3mcw71"
						});
					case h.ec.ScheduledPostContent:
					case h.ec.SubredditContent:
						return p.fbt._("Scheduled posts", null, {
							hk: "19KZjq"
						});
					case h.ec.EventPostContent:
						return p.fbt._("Event posts", null, {
							hk: "3ejc42"
						});
					case h.ec.Streaming:
						return p.fbt._("Broadcasting", null, {
							hk: "1Cz44z"
						});
					case h.ec.Predictions:
						return p.fbt._("Predictions", null, {
							hk: "1yASCC"
						});
					default:
						return Object(b.a)(e)
				}
			};
			var f = n("./src/reddit/components/TrackingHelper/index.tsx"),
				x = n("./src/reddit/contexts/PageLayer/index.tsx"),
				E = n("./src/reddit/helpers/canAccessModerationPage/index.ts"),
				v = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				_ = n("./src/reddit/helpers/trackers/moderationPages.ts"),
				C = n("./src/reddit/helpers/trackers/modHub.ts"),
				k = n("./src/reddit/models/ModQueue/index.ts"),
				y = n("./src/reddit/selectors/moderatorPermissions.ts"),
				O = n("./src/reddit/selectors/postCreations.ts"),
				S = n("./src/reddit/selectors/profile.ts"),
				j = n("./src/reddit/selectors/streamingModSettings.ts"),
				w = n("./src/reddit/selectors/subreddit.ts"),
				I = n("./src/reddit/selectors/user.ts"),
				N = n("./src/reddit/components/ModHub/Content/index.tsx"),
				T = n("./src/reddit/components/ModHub/Content/NoPermissions.tsx"),
				M = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				P = n("./src/reddit/components/ModHub/Content/WelcomeMessage.m.less"),
				R = n.n(P);
			const A = m.a.wrapped(M.a, "ModerateIcon", R.a),
				L = m.a.div("ModHubWelcomeMessage", R.a);
			var F = e => o.a.createElement(L, null, o.a.createElement(A, null), p.fbt._("Welcome to the mod tools for {subredditName}", [p.fbt._param("subredditName", e.subredditDisplayText)], {
					hk: "7Usff"
				})),
				D = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/config.ts")),
				U = n("./node_modules/react-router-redux/es/index.js"),
				B = n("./src/reddit/components/EmailInvitePaintedDoor/loader.tsx"),
				H = n("./src/reddit/contexts/NavbarExp.ts"),
				W = n("./src/reddit/featureFlags/index.ts"),
				q = n("./src/reddit/helpers/localStorage/index.ts"),
				G = n("./src/reddit/helpers/trackers/communitySettings.ts"),
				K = n("./src/reddit/helpers/trackers/emailInvite.ts"),
				V = n("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				z = n("./src/reddit/icons/fonts/index.tsx"),
				X = n("./src/reddit/routes/moderationPages/index.ts"),
				Q = n("./src/reddit/selectors/experiments/emailInvite.ts"),
				J = n("./src/reddit/selectors/gold/powerups/index.ts"),
				Y = n("./src/reddit/components/StructuredStyles/Breadcrumbs/index.tsx"),
				Z = n("./src/reddit/components/ModHub/ModHubNav/index.m.less"),
				$ = n.n(Z);

			function ee() {
				return (ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var te = e => o.a.createElement("div", ee({
					className: Object(l.a)($.a.breadcrumb, e.className)
				}, e), o.a.createElement("button", {
					className: $.a.breadcrumbButton
				}, o.a.createElement(Y.a, null), p.fbt._("Back to mod tools", null, {
					hk: "4udiKO"
				}))),
				ne = n("./src/reddit/components/ModHub/ModHubNav/NavItem.tsx"),
				se = n("./src/reddit/actions/modal.ts"),
				ae = n("./src/higherOrderComponents/asModal/index.tsx"),
				re = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				oe = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				ie = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				de = n("./src/reddit/constants/wiki.ts"),
				le = n("./src/reddit/controls/Button/index.tsx"),
				ce = n("./src/reddit/controls/TextButton/index.tsx"),
				me = n("./src/reddit/helpers/wiki/buildWikiPagesTree.ts"),
				ue = n("./src/reddit/helpers/wiki/validatePageName.ts"),
				pe = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				be = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				he = n("./src/reddit/controls/Dropdown/index.tsx"),
				ge = n("./src/reddit/controls/Dropdown/Row.tsx"),
				fe = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				xe = n("./src/reddit/components/Wiki/CreateNewWikiPageModal/index.m.less"),
				Ee = n.n(xe);
			class ve extends o.a.Component {
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
						isDropdownOpen: n
					} = this.state, s = p.fbt._("None", null, {
						hk: "3FT0YQ"
					});
					return o.a.createElement("div", {
						className: Ee.a.dropdownContainer
					}, o.a.createElement("button", {
						className: Ee.a.dropdownTarget,
						onClick: this.onToggleDropdown
					}, o.a.createElement("div", {
						className: Ee.a.targetText
					}, t || s), o.a.createElement(fe.b, null)), n && o.a.createElement(he.a, {
						className: Ee.a.dropdown
					}, o.a.createElement(ge.b, {
						className: Ee.a.dropdownRow,
						displayText: s,
						onClick: () => this.onSelectParentPage(void 0)
					}), e.map(e => e.depth >= de.c ? null : de.f.has(e.path.split("/")[0]) ? null : o.a.createElement(ge.b, {
						className: Ee.a.dropdownRow,
						displayText: e.path,
						key: e.path,
						onClick: () => this.onSelectParentPage(e.path)
					}))))
				}
			}
			var _e = ve;
			const Ce = e => {
				switch (e) {
					case ue.a.InvalidPageName:
						return p.fbt._("Invalid page name", null, {
							hk: "1gQvCb"
						});
					case ue.a.MaxLengthExceed:
						return p.fbt._("Name exceeds character limit", null, {
							hk: "RDoIC"
						});
					case ue.a.PageAlreadyExists:
						return p.fbt._("That page already exists", null, {
							hk: "xEyyR"
						});
					case ue.a.RestrictedPageName:
						return p.fbt._("Restricted page name", null, {
							hk: "Bjv5o"
						})
				}
			};
			class ke extends o.a.Component {
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
					return Object(ue.c)(t) || Object(ue.b)(this.getNewPagePath(), e)
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = this.hasError();
					return o.a.createElement(oe.e, {
						className: Ee.a.modalBody
					}, o.a.createElement(oe.i, null, o.a.createElement(be.a, null, o.a.createElement(oe.q, null, p.fbt._("Create a new wiki page", null, {
						hk: "V7Jnm"
					})), o.a.createElement(ce.a, {
						onClick: e.toggleModal
					}, o.a.createElement(oe.b, null)))), o.a.createElement("div", {
						className: Ee.a.notice
					}, o.a.createElement(pe.a, null), p.fbt._("Parent page and page URL cannot be edited once created", null, {
						hk: "20D6uz"
					})), o.a.createElement(oe.l, null, o.a.createElement("div", {
						className: Ee.a.sectionTitle
					}, p.fbt._("Parent page", null, {
						hk: "1FeKiT"
					})), o.a.createElement(_e, {
						onSelectParentPage: this.onSelectParentPage,
						pageTree: Object(me.b)(e.pageTree || []),
						parentPageName: t.parentPageName
					}), o.a.createElement("div", {
						className: Ee.a.sectionTitle
					}, p.fbt._("Page URL", null, {
						hk: "WL8sn"
					})), o.a.createElement(ie.d, {
						placeholder: p.fbt._("ex: rules", null, {
							hk: "J0qH1"
						}),
						onChange: this.onChangePageName,
						value: t.partialPageName
					}), o.a.createElement(re.a, {
						text: this.getNewPagePath(),
						maxChars: de.d
					}), o.a.createElement("div", {
						className: Ee.a.errorText
					}, t.partialPageName && n ? Ce(n) : null)), o.a.createElement(oe.g, null, o.a.createElement(oe.a, {
						onClick: e.toggleModal
					}, p.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(le.n, {
						disabled: !t.partialPageName || !!n,
						className: Ee.a.primaryButton,
						to: `${e.subredditUrl}about/wiki/create/${this.getNewPagePath()}`
					}, p.fbt._("Create", null, {
						hk: "2W0PL1"
					}))))
				}
			}
			var ye = Object(ae.a)(ke),
				Oe = n("./src/reddit/selectors/activeModalId.ts"),
				Se = n("./src/reddit/selectors/subredditWiki.ts"),
				je = n("./node_modules/lodash/times.js"),
				we = n.n(je),
				Ie = n("./src/reddit/controls/InternalLink/index.tsx"),
				Ne = n("./src/reddit/components/ModHub/ModHubNav/WikiNavPanel/index.m.less"),
				Te = n.n(Ne);
			class Me extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.containerRef = o.a.createRef()
				}
				componentDidMount() {
					this.scrollToActiveItemIfNeeded()
				}
				scrollToActiveItemIfNeeded() {
					const e = this.containerRef.current,
						t = e && e.getElementsByClassName(Te.a.mActive)[0];
					if (!e || !t) return;
					const n = e.getBoundingClientRect(),
						s = t.getBoundingClientRect();
					s.top >= n.top && s.bottom <= n.bottom || t.scrollIntoView()
				}
				render() {
					const {
						activePageName: e,
						baseUrl: t,
						directory: n
					} = this.props, s = Object(me.b)(n && n.pageTree || []);
					return o.a.createElement("div", {
						ref: this.containerRef,
						className: Te.a.contentTree
					}, s.map(n => {
						const s = n.path === e;
						return o.a.createElement(Ie.a, {
							key: n.path,
							className: Te.a.pageNavLink,
							to: `${t}/${n.path}`
						}, o.a.createElement("div", {
							className: Object(l.a)(Te.a.pageNavItem, {
								[Te.a.mActive]: s,
								[Te.a.mExists]: n.isPagePresent
							})
						}, we()(n.depth, () => o.a.createElement("div", {
							className: Te.a.indentLine
						})), o.a.createElement("span", {
							className: Te.a.itemText
						}, `/${n.name}`)))
					}))
				}
			}
			const Pe = Object(d.c)({
				directory: (e, t) => Object(Se.b)(e, {
					subredditName: t.subreddit.name
				}),
				isCreateWikiPageModalOpen: e => "CreateWikiPageModal" === Object(Oe.a)(e)
			});
			class Re extends o.a.Component {
				constructor() {
					super(...arguments), this.onToggleCreateWikiModal = () => {
						this.props.toggleCreateWikiModal()
					}
				}
				render() {
					const {
						directory: e,
						isCreateWikiPageModalOpen: t,
						subreddit: n,
						toggleCreateWikiModal: s,
						pageLayer: a
					} = this.props;
					if (!a) return null;
					const {
						urlParams: r
					} = a, {
						wikiPageName: i,
						wikiSubRoute: d,
						pageName: l
					} = r;
					return o.a.createElement("div", {
						className: Te.a.wikiNavPanel
					}, o.a.createElement(le.l, {
						className: Te.a.primaryButton,
						onClick: this.onToggleCreateWikiModal
					}, p.fbt._("Create new page", null, {
						hk: "35WDuL"
					})), o.a.createElement(Me, {
						activePageName: i,
						baseUrl: `${n.url}about/wiki`,
						directory: e
					}), o.a.createElement("div", {
						className: Te.a.footer
					}, o.a.createElement(ne.b, {
						isActive: d === de.m.Revisions && !i,
						label: p.fbt._("Recent wiki revisions", null, {
							hk: "278VnD"
						}),
						path: `${n.url}about/wiki/revisions`
					}), o.a.createElement(ne.b, {
						isActive: l === h.ec.WikiContributors,
						label: p.fbt._("Add wiki contributors", null, {
							hk: "1XHd90"
						}),
						path: `${n.url}about/wikicontributors`
					}), o.a.createElement(ne.b, {
						isActive: l === h.ec.WikiBanned,
						label: p.fbt._("Ban wiki contributors", null, {
							hk: "3IVNKp"
						}),
						path: `${n.url}about/wikibanned`
					}), o.a.createElement(ne.b, {
						label: p.fbt._("Wiki settings", null, {
							hk: "1Jctxf"
						}),
						path: `${n.url}about/edit?page=wikis`
					})), t && o.a.createElement(ye, {
						pageTree: e && e.pageTree,
						subredditUrl: n.url,
						toggleModal: s,
						withOverlay: !0
					}))
				}
			}
			var Ae = Object(x.u)()(Object(i.b)(Pe, e => ({
				toggleCreateWikiModal: () => e(Object(se.i)("CreateWikiPageModal"))
			}))(Re));
			const Le = Object(d.c)({
				isBadgesAndEmotesEnabled: W.d.spCustomBadgesAndEmotes,
				isContentTagEnabled: (e, t) => !!e.subreddits.survey[t.subreddit.id],
				isEligibleForScheduledPosts: W.d.scheduledPosts,
				isEmailInviteExperimentEnabled: Q.a,
				isBroadcastingEnabled: (e, {
					subreddit: t
				}) => Object(j.c)(e, t.id),
				isTournamentsEnabled: (e, {
					subreddit: t
				}) => Object(w.L)(e, {
					subredditId: t.id
				}),
				isPowerupsTabVisible: (e, {
					subreddit: t
				}) => Object(J.h)(e, {
					subredditId: t.id
				})
			});
			class Fe extends o.a.Component {
				constructor(e, t) {
					super(e, t), this.trackClick = e => this.props.sendEvent(C.b(e)), this.trackCommunitySettingsNavItemClick = e => this.props.sendEvent(Object(G.a)(e)), this.onClickAwards = () => this.trackClick("awards"), this.onClickPowerups = () => this.trackClick("powerups"), this.onClickStreaming = () => this.trackClick("streaming"), this.onClickModQueue = () => this.trackClick("mod_queue"), this.onClickReports = () => this.trackClick("reports"), this.onClickSpam = () => this.trackClick("spam"), this.onClickEdited = () => this.trackClick("edited"), this.onClickUnmoderated = () => this.trackClick("unmoderated"), this.onClickBannedUsers = () => this.trackClick("ban_users"), this.onClickMutedUsers = () => this.trackClick("mute_users"), this.onClickApprovedSubmitters = () => this.trackClick("approved_submitters"), this.onClickEmojis = () => this.trackClick("emoji"), this.onClickModerators = () => this.trackClick("moderators"), this.onClickChatSettings = () => this.trackClick("chat_settings"), this.onClickCommunitySettings = () => this.trackClick("community_settings"), this.onClickCommunityAppearance = () => this.trackClick("community_appearance"), this.onClickModMail = () => this.trackClick("mod_mail"), this.onClickRemovalReasons = () => this.trackClick("removal_reasons"), this.onClickRules = () => this.trackClick("rules"), this.onClickPostRequirements = () => this.trackClick("post_requirements"), this.onClickAutomodConfig = () => this.trackClick("automod_config"), this.onClickWikiPages = () => this.trackClick("wiki"), this.onClickTraffic = () => this.trackClick("traffic"), this.onClickModLog = () => this.trackClick("mod_log"), this.onClickModSupport = () => this.trackClick("r_mod_support"), this.onClickModHelp = () => this.trackClick("mod_help"), this.onClickContactReddit = () => this.trackClick("contact_reddit"), this.onClickModGuidelines = () => this.trackClick("mod_guidelines"), this.onClickModHelpCenter = () => this.trackClick("mod_help_center"), this.onClickPostFlair = () => this.trackClick("post_flair"), this.onClickUserFlair = () => this.trackClick("user_flair"), this.onClickGrantUserFlair = () => this.trackClick("grant_user_flair"), this.onClickBadges = () => this.trackClick("badges"), this.onClickEmotes = () => this.trackClick("emotes"), this.onClickScheduledPosts = () => this.props.sendEvent(Object(V.k)()), this.onClickEventPosts = () => this.props.sendEvent(Object(V.f)()), this.onClickPredictions = () => this.trackClick("predictions"), this.onGoToModHub = () => {
						const e = this.props.moderatorPermissions && this.props.moderatorPermissions.posts,
							t = `${this.props.subreddit.url}about/`,
							n = e ? `${t}modqueue` : t;
						this.props.pushUrl(n)
					}, this.onClickInviteViaEmail = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(K.a)("mod_hub_nav")), this.setState({
							showEmailInvitePaintedDoor: !0
						})
					}, this.onCloseInviteViaEmailModal = () => {
						this.setState({
							showEmailInvitePaintedDoor: !1
						})
					}, this.getFlairSectionName = () => this.props.isBadgesAndEmotesEnabled ? p.fbt._("Badges, flair & emojis", null, {
						hk: "1FuDnm"
					}) : this.props.isPowerupsTabVisible ? p.fbt._("Flair", null, {
						hk: "1fYKUf"
					}) : p.fbt._("Flair & emojis", null, {
						hk: "42b2AJ"
					}), this.state = {
						locationSettingSeen: !0,
						showEmailInvitePaintedDoor: !1
					}
				}
				componentDidMount() {
					this.setState({
						locationSettingSeen: Object(q.F)("location")
					})
				}
				render() {
					const {
						props: e
					} = this, t = e.isEligibleForScheduledPosts && !e.isProfile || e.isTournamentsEnabled;
					switch (e.pageName) {
						case h.ec.CommunitySettings: {
							const t = !e.subpageName || !Object.values(h.fc).includes(e.subpageName);
							return e.isProfile ? null : o.a.createElement(H.a.Consumer, null, n => o.a.createElement("div", {
								className: Object(l.a)($.a.navContainer, {
									[$.a.navContainerExp]: n
								})
							}, o.a.createElement(te, {
								onClick: this.onGoToModHub
							}), o.a.createElement(ne.b, {
								label: p.fbt._("Community", null, {
									hk: "1EIoJe"
								}),
								onClick: () => this.trackCommunitySettingsNavItemClick(h.fc.Community),
								isNew: !0,
								path: `${e.subreddit.url}about/edit?page=community`,
								isActive: t || e.subpageName === h.fc.Community
							}), o.a.createElement(ne.b, {
								label: p.fbt._("Safety and Privacy", null, {
									hk: "3E0TnI"
								}),
								onClick: () => this.trackCommunitySettingsNavItemClick(h.fc.Safety),
								path: `${e.subreddit.url}about/edit?page=safety`,
								isActive: e.subpageName === h.fc.Safety
							}), o.a.createElement(ne.b, {
								label: p.fbt._("Posts and Comments", null, {
									hk: "2jt4ea"
								}),
								onClick: () => this.trackCommunitySettingsNavItemClick(h.fc.Posts),
								path: `${e.subreddit.url}about/edit?page=posts`,
								isActive: e.subpageName === h.fc.Posts
							}), o.a.createElement(ne.b, {
								label: p.fbt._("Wikis", null, {
									hk: "2X1iz1"
								}),
								onClick: () => this.trackCommunitySettingsNavItemClick(h.fc.Wikis),
								path: `${e.subreddit.url}about/edit?page=wikis`,
								isActive: e.subpageName === h.fc.Wikis
							}), e.isContentTagEnabled && o.a.createElement(ne.b, {
								label: p.fbt._("Content Tag", null, {
									hk: "VuxaQ"
								}),
								isNew: !0,
								onClick: () => this.trackCommunitySettingsNavItemClick(h.fc.ContentTag),
								path: `${e.subreddit.url}about/edit?page=content_tag`,
								isActive: e.subpageName === h.fc.ContentTag
							}), o.a.createElement(ne.b, {
								label: p.fbt._("Notifications", null, {
									hk: "SRNLx"
								}),
								onClick: () => this.trackCommunitySettingsNavItemClick(h.fc.Notifications),
								path: `${e.subreddit.url}about/edit?page=notifications`,
								isActive: e.subpageName === h.fc.Notifications
							})))
						}
						case h.ec.Wiki:
						case h.ec.WikiContributors:
						case h.ec.WikiBanned:
							return e.isProfile ? null : o.a.createElement(H.a.Consumer, null, t => o.a.createElement("div", {
								className: Object(l.a)($.a.navContainer, $.a.wikiNavContainer, {
									[$.a.navContainerExp]: t
								})
							}, o.a.createElement(te, {
								onClick: this.onGoToModHub
							}), e.moderatorPermissions.wiki && o.a.createElement(Ae, {
								subreddit: e.subreddit
							})));
						default:
							return o.a.createElement(H.a.Consumer, null, n => o.a.createElement("div", {
								className: Object(l.a)($.a.navContainer, {
									[$.a.navContainerExp]: n
								})
							}, e.moderatorPermissions.posts && !e.isProfile && o.a.createElement("div", {
								className: $.a.navSection
							}, o.a.createElement("div", {
								className: $.a.sectionHeader
							}, o.a.createElement(z.a, {
								name: "mod_queue",
								className: $.a.iconStyles
							}), p.fbt._("Queues", null, {
								hk: "2BbIZV"
							})), o.a.createElement(ne.b, {
								isActive: e.pageName === h.ec.Modqueue,
								label: g(h.ec.Modqueue),
								onClick: this.onClickModQueue,
								path: `${e.subreddit.url}about/modqueue`
							}), o.a.createElement(ne.b, {
								isActive: e.pageName === h.ec.Reports,
								label: g(h.ec.Reports),
								onClick: this.onClickReports,
								path: `${e.subreddit.url}about/reports`
							}), o.a.createElement(ne.b, {
								isActive: e.pageName === h.ec.Spam,
								label: g(h.ec.Spam),
								onClick: this.onClickSpam,
								path: `${e.subreddit.url}about/spam`
							}), o.a.createElement(ne.b, {
								isActive: e.pageName === h.ec.Edited,
								label: g(h.ec.Edited),
								onClick: this.onClickEdited,
								path: `${e.subreddit.url}about/edited`
							}), o.a.createElement(ne.b, {
								isActive: e.pageName === h.ec.Unmoderated,
								label: g(h.ec.Unmoderated),
								onClick: this.onClickUnmoderated,
								path: `${e.subreddit.url}about/unmoderated`
							})), !e.isProfile && o.a.createElement("div", {
								className: $.a.navSection
							}, o.a.createElement("div", {
								className: $.a.sectionHeader
							}, o.a.createElement(z.a, {
								name: "user",
								className: $.a.iconStyles
							}), p.fbt._("User management", null, {
								hk: "3G4BgD"
							})), e.moderatorPermissions.access && o.a.createElement(o.a.Fragment, null, o.a.createElement(ne.b, {
								isActive: e.pageName === h.ec.Banned,
								label: g(h.ec.Banned),
								onClick: this.onClickBannedUsers,
								path: `${e.subreddit.url}about/banned`
							}), e.moderatorPermissions.mail && o.a.createElement(ne.b, {
								isActive: e.pageName === h.ec.Muted,
								label: g(h.ec.Muted),
								onClick: this.onClickMutedUsers,
								path: `${e.subreddit.url}about/muted`
							}), o.a.createElement(ne.b, {
								isActive: e.pageName === h.ec.Contributors,
								label: g(h.ec.Contributors),
								onClick: this.onClickApprovedSubmitters,
								path: `${e.subreddit.url}about/contributors`
							})), o.a.createElement(ne.b, {
								isActive: e.pageName === h.ec.Moderators,
								label: g(h.ec.Moderators),
								onClick: this.onClickModerators,
								path: `${e.subreddit.url}about/moderators`
							}), e.isEmailInviteExperimentEnabled && o.a.createElement(ne.b, {
								label: p.fbt._("Bulk Email Invite", null, {
									hk: "3GTIEm"
								}),
								isNew: !0,
								onClick: this.onClickInviteViaEmail
							}), this.state.showEmailInvitePaintedDoor && o.a.createElement(B.a, {
								onClose: this.onCloseInviteViaEmailModal,
								sendEvent: e.sendEvent
							})), (e.moderatorPermissions.flair || e.moderatorPermissions.config) && !e.isProfile && o.a.createElement("div", {
								className: $.a.navSection
							}, o.a.createElement("div", {
								className: $.a.sectionHeader
							}, o.a.createElement(z.a, {
								name: "tag",
								className: $.a.iconStyles
							}), this.getFlairSectionName()), e.moderatorPermissions.flair && o.a.createElement(ne.b, {
								isActive: e.pageName === h.ec.Flair,
								label: g(h.ec.Flair),
								onClick: this.onClickGrantUserFlair,
								path: `${e.subreddit.url}about/flair`
							}), e.moderatorPermissions.config && o.a.createElement(ne.b, {
								isActive: e.pageName === h.ec.Emojis,
								label: g(h.ec.Emojis),
								onClick: this.onClickEmojis,
								path: `${e.subreddit.url}about/emojis`
							}), e.moderatorPermissions.flair && o.a.createElement(ne.b, {
								isActive: e.pageName === h.ec.UserFlair,
								label: g(h.ec.UserFlair),
								onClick: this.onClickUserFlair,
								path: `${e.subreddit.url}about/userflair`
							}), e.moderatorPermissions.flair && e.moderatorPermissions.config && o.a.createElement(ne.b, {
								isActive: e.pageName === h.ec.PostFlair,
								label: g(h.ec.PostFlair),
								onClick: this.onClickPostFlair,
								path: `${e.subreddit.url}about/postflair`
							}), e.isBadgesAndEmotesEnabled && o.a.createElement(o.a.Fragment, null, o.a.createElement(ne.b, {
								isActive: e.pageName === h.ec.Badges,
								label: g(h.ec.Badges),
								onClick: this.onClickBadges,
								path: `${e.subreddit.url}about/badges`
							}), o.a.createElement(ne.b, {
								isActive: e.pageName === h.ec.Emotes,
								label: g(h.ec.Emotes),
								onClick: this.onClickEmotes,
								path: `${e.subreddit.url}about/emotes`
							}))), (e.moderatorPermissions.config || e.moderatorPermissions.posts) && !e.isProfile && o.a.createElement("div", {
								className: $.a.navSection
							}, o.a.createElement("div", {
								className: $.a.sectionHeader
							}, o.a.createElement(z.a, {
								name: "rules",
								className: $.a.iconStyles
							}), p.fbt._("Rules and regulations", null, {
								hk: "QAksk"
							})), o.a.createElement(ne.b, {
								isActive: e.pageName === h.ec.SubredditRules,
								label: g(h.ec.SubredditRules),
								onClick: this.onClickRules,
								path: `${e.subreddit.url}about/rules`
							}), e.moderatorPermissions.posts && o.a.createElement(ne.b, {
								isActive: e.pageName === h.ec.Removal,
								label: g(h.ec.Removal),
								onClick: this.onClickRemovalReasons,
								path: `${e.subreddit.url}about/removal`
							}), e.moderatorPermissions.config && o.a.createElement(o.a.Fragment, null, o.a.createElement(ne.b, {
								isActive: e.pageName === h.ec.ContentControls,
								label: g(h.ec.ContentControls),
								onClick: this.onClickPostRequirements,
								path: `${e.subreddit.url}about/settings`
							}), o.a.createElement(ne.b, {
								label: p.fbt._("Automod", null, {
									hk: "1IngsO"
								}),
								onClick: this.onClickAutomodConfig,
								path: `${e.subreddit.url}about/wiki/config/automoderator`
							}))), t && o.a.createElement("div", {
								className: $.a.navSection
							}, o.a.createElement("div", {
								className: $.a.sectionHeader
							}, o.a.createElement(z.a, {
								name: "list_bulleted",
								className: $.a.iconStyles
							}), p.fbt._("Content", null, {
								hk: "IAh5R"
							})), e.isEligibleForScheduledPosts && !e.isProfile && o.a.createElement(o.a.Fragment, null, o.a.createElement(ne.b, {
								isActive: e.pageName === h.ec.ScheduledPostContent,
								label: p.fbt._("Scheduled posts", null, {
									hk: "11S6dN"
								}),
								onClick: this.onClickScheduledPosts,
								path: Object(X.e)(e.subreddit.url),
								isNew: !0
							}), o.a.createElement(ne.b, {
								isActive: e.pageName === h.ec.EventPostContent,
								label: p.fbt._("Event posts", null, {
									hk: "3D98hc"
								}),
								onClick: this.onClickEventPosts,
								path: Object(X.b)(e.subreddit.url),
								isBeta: !0
							})), e.isTournamentsEnabled && o.a.createElement(ne.b, {
								isActive: e.pageName === h.ec.Predictions,
								label: p.fbt._("Predictions", null, {
									hk: "Serjr"
								}),
								onClick: this.onClickPredictions,
								path: Object(X.d)(e.subreddit.url),
								isNew: !0
							})), (e.moderatorPermissions.config || e.moderatorPermissions.wiki) && o.a.createElement("div", {
								className: $.a.navSection
							}, o.a.createElement("div", {
								className: $.a.sectionHeader
							}, o.a.createElement(z.a, {
								name: "settings",
								className: $.a.iconStyles
							}), p.fbt._("Other", null, {
								hk: "ST5RE"
							})), o.a.createElement(ne.b, {
								isActive: e.pageName === h.ec.Awards,
								label: p.fbt._("Awards", null, {
									hk: "48U4Du"
								}),
								onClick: this.onClickAwards,
								path: `${e.subreddit.url}about/awards`
							}), e.moderatorPermissions.config && e.isPowerupsTabVisible && o.a.createElement(ne.b, {
								isActive: e.pageName === h.ec.Powerups,
								label: p.fbt._("Powerups", null, {
									hk: "1fgdwA"
								}),
								onClick: this.onClickPowerups,
								path: `${e.subreddit.url}about/powerups`,
								isNew: !0
							}), e.moderatorPermissions.config && !e.isProfile && e.isBroadcastingEnabled && o.a.createElement(ne.b, {
								label: g(h.ec.Streaming),
								onClick: this.onClickStreaming,
								path: `${e.subreddit.url}about/broadcasting`,
								isNew: !0
							}), e.moderatorPermissions.wiki && !e.isProfile && o.a.createElement(ne.b, {
								label: p.fbt._("Wiki pages", null, {
									hk: "wShFl"
								}),
								onClick: this.onClickWikiPages,
								path: `${D.a.redditUrl}${e.subreddit.url}about/wiki/index`
							}), e.moderatorPermissions.config && !e.isProfile && o.a.createElement(ne.b, {
								label: p.fbt._("Community settings", null, {
									hk: "2xOUK6"
								}),
								onClick: this.onClickCommunitySettings,
								isNew: !this.state.locationSettingSeen,
								path: `${e.subreddit.url}about/edit?page=community`,
								showInboundArrow: !0
							}), e.moderatorPermissions.config && !e.isProfile && o.a.createElement(ne.b, {
								label: p.fbt._("Community appearance", null, {
									hk: "3AHttA"
								}),
								path: `${e.subreddit.url}?styling=true`,
								onClick: this.onClickCommunityAppearance,
								showInboundArrow: !0
							})), e.moderatorPermissions.mail && !e.isProfile && o.a.createElement("div", {
								className: $.a.navSection
							}, o.a.createElement("div", {
								className: $.a.sectionHeader
							}, o.a.createElement(z.a, {
								name: "mod_mail",
								className: $.a.iconStyles
							}), p.fbt._("Modmail", null, {
								hk: "Eh4Vu"
							})), o.a.createElement(ne.b, {
								isExternal: !0,
								label: p.fbt._("Modmail", null, {
									hk: "3Xkgqo"
								}),
								onClick: this.onClickModMail,
								path: "https://mod.reddit.com"
							})), e.moderatorPermissions.config && !e.isProfile && o.a.createElement("div", {
								className: $.a.navSection
							}, o.a.createElement("div", {
								className: $.a.sectionHeader
							}, o.a.createElement(z.a, {
								name: "chat",
								className: $.a.iconStyles
							}), p.fbt._("Chat", null, {
								hk: "4mJ2vR"
							})), o.a.createElement(ne.b, {
								isActive: e.pageName === h.ec.ChatSettings,
								label: g(h.ec.ChatSettings),
								onClick: this.onClickChatSettings,
								path: `${e.subreddit.url}about/chat`
							})), !e.isProfile && o.a.createElement("div", {
								className: $.a.navSection
							}, o.a.createElement("div", {
								className: $.a.sectionHeader
							}, o.a.createElement(z.a, {
								name: "statistics",
								className: $.a.iconStyles
							}), p.fbt._("Community activity", null, {
								hk: "1vGSer"
							})), o.a.createElement(ne.b, {
								isActive: e.pageName === h.ec.Traffic,
								label: p.fbt._("Traffic stats", null, {
									hk: "vw5CU"
								}),
								onClick: this.onClickTraffic,
								path: `${e.subreddit.url}about/traffic`
							}), o.a.createElement(ne.b, {
								isActive: e.pageName === h.ec.Modlog,
								label: g(h.ec.Modlog),
								onClick: this.onClickModLog,
								path: `${e.subreddit.url}about/log`
							})), o.a.createElement("div", {
								className: $.a.navSection
							}, o.a.createElement("div", {
								className: $.a.sectionHeader
							}, o.a.createElement(z.a, {
								name: "help",
								className: $.a.iconStyles
							}), p.fbt._("Mod help center", null, {
								hk: "256YE"
							})), o.a.createElement(ne.b, {
								isExternal: !0,
								label: p.fbt._("Mod help center", null, {
									hk: "4dCwWU"
								}),
								onClick: this.onClickModHelpCenter,
								path: D.a.redditModHelpUrl
							}), o.a.createElement(ne.b, {
								isExternal: !0,
								label: p.fbt._("Moderator guidelines", null, {
									hk: "3marKI"
								}),
								onClick: this.onClickModGuidelines,
								path: "https://www.reddit.com/help/healthycommunities/"
							}), o.a.createElement(ne.b, {
								isExternal: !0,
								label: "r/ModSupport",
								onClick: this.onClickModSupport,
								path: "/r/ModSupport/"
							}), o.a.createElement(ne.b, {
								isExternal: !0,
								label: "r/ModHelp",
								onClick: this.onClickModHelp,
								path: "/r/modhelp/"
							}), o.a.createElement(ne.b, {
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
			var De = Object(i.b)(Le, e => ({
					pushUrl: t => e(Object(U.b)(t))
				}))(Object(f.c)(Fe)),
				Ue = n("./src/reddit/pages/ModHub/Header.tsx"),
				Be = n("./src/reddit/pages/ModHub/index.m.less"),
				He = n.n(Be);
			const We = m.a.div("BackgroundContainer", He.a),
				qe = m.a.div("Body", He.a),
				Ge = Object(d.c)({
					contentGateInfo: (e, t) => Object(I.f)(e, t.match.params.subredditName)
				}),
				Ke = Object(d.c)({
					queryParams: (e, {
						location: t
					}) => a()([...Object(c.a)(t.search)])
				}),
				Ve = Object(d.c)({
					moderatorPermissions: (e, t) => {
						var n;
						const {
							subredditName: s,
							profileName: a
						} = t.match.params, r = s ? Object(w.C)(e, s) : null === (n = Object(S.j)(e, {
							profileName: a
						})) || void 0 === n ? void 0 : n.id;
						if (r) return Object(y.m)(e, {
							subredditId: r
						})
					}
				}),
				ze = Object(d.c)({
					isContributor: (e, t) => {
						const {
							subredditName: n
						} = t.match.params;
						if (n) {
							const t = Object(w.t)(e, {
								subredditName: n
							});
							if (t) return t.userIsContributor
						}
						return !1
					}
				}),
				Xe = Object(d.c)({
					subreddit: (e, t) => t.match.params.subredditName ? Object(w.w)(e, {
						subredditName: t.match.params.subredditName
					}) : Object(S.j)(e, {
						profileName: t.match.params.profileName
					})
				}),
				Qe = Object(i.b)(() => Object(d.a)(Ge, I.H, x.Q, Ve, I.eb, O.jb, Xe, ze, Ke, (e, t) => t.match.params.pageName, e => e, ({
					contentGateInfo: e
				}, t, n, {
					moderatorPermissions: s
				}, a, r, {
					subreddit: o
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
						isBroadcastingEnabled: !!o && Object(j.c)(c, o.id),
						isContributor: i,
						isEmployee: t,
						layout: n,
						moderatorPermissions: s,
						isScheduledPostsEnabled: r,
						subreddit: o,
						renderNSFWContentGate: !!o && o.isNSFW && !a,
						page: `${g||k.b}`,
						pageName: l,
						postTypeFilter: h,
						after: m || "",
						afterEditable: u,
						before: p,
						beforeEditable: b
					}
				})),
				Je = Object(x.u)();
			class Ye extends o.a.Component {
				constructor() {
					super(...arguments), this.sendEventWithName = e => () => {
						this.props.sendEvent(t => ({
							source: Object(_.b)(this.props.pageName),
							action: "click",
							noun: e
						}))
					}, this.onClickSubredditLink = () => {
						this.props.sendEvent(C.c())
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
						const t = Object(v.a)(e.contentGateInfo, e.renderNSFWContentGate, e.match.params.subredditName);
						return t ? o.a.createElement(u.default, t) : null
					}
					const t = !!e.moderatorPermissions;
					return o.a.createElement(We, null, o.a.createElement(Ue.a, {
						onClick: this.onClickSubredditLink,
						subredditOrProfile: e.subreddit,
						pageName: e.pageName ? g(e.pageName) : void 0
					}), o.a.createElement(qe, null, e.moderatorPermissions && o.a.createElement(De, {
						moderatorPermissions: e.moderatorPermissions,
						pageName: e.pageName,
						subpageName: e.page,
						subreddit: e.subreddit,
						isProfile: !!e.match.params.profileName
					}), o.a.createElement("div", {
						className: Object(l.a)(He.a.contentWrapper, t && He.a.isModerator)
					}, e.pageName && Object(E.a)({
						pageName: e.pageName,
						moderatorPermissions: e.moderatorPermissions,
						canCreateScheduledPosts: e.isScheduledPostsEnabled,
						isEmployee: e.isEmployee,
						isStreamingEnabled: e.isBroadcastingEnabled,
						subredditType: e.subreddit.type,
						isContributor: e.isContributor
					}) ? o.a.createElement(N.a, {
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
					}) : e.moderatorPermissions ? o.a.createElement(F, {
						subredditDisplayText: e.subreddit.displayText
					}) : o.a.createElement(T.a, {
						isModerator: t,
						subredditDisplayText: e.subreddit.displayText
					}))))
				}
			}
			t.default = Je(Qe(Object(f.c)(Ye)))
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				a = n("./src/reddit/actions/gold/constants.ts"),
				r = n("./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts");
			const o = {};
			var i = n("./node_modules/icepick/icepick.js"),
				d = n("./src/reddit/actions/economics/powerups/constants.ts");
			const l = {},
				c = e => {
					var t, n;
					return (null === (t = e.find(({
						isPreferred: e
					}) => e)) || void 0 === t ? void 0 : t.type) || (null === (n = e[0]) || void 0 === n ? void 0 : n.type)
				},
				m = {};
			t.a = Object(s.c)({
				subredditPowerupsFlairs: (e = o, t) => {
					switch (t.type) {
						case a.pb:
							const {
								subredditId: n, subredditAchievementFlairs: s
							} = t.payload;
							if (!(null == s ? void 0 : s.length)) return e;
							const o = s.reduce((e, t) => ({
									...e,
									[t.type]: t
								}), {}),
								i = s.filter(r.a).map(e => e.type),
								d = s.filter(r.b).map(e => e.type);
							return {
								...e, [n]: {
									flairsByType: o,
									achievementTypes: i,
									supporterTypes: d
								}
							};
						default:
							return e
					}
				},
				subredditUserPowerupsFlairs: (e = l, t) => {
					switch (t.type) {
						case d.d: {
							const {
								id: n,
								userAchievementFlairsByRedditorIds: s
							} = t.payload;
							let a = e[n] || {};
							for (const {
									redditorId: e,
									isHidden: t,
									userAchievementFlairs: o
								} of s) {
								const n = o.filter(r.a),
									s = n.map(({
										type: e
									}) => e),
									i = o.filter(r.b),
									d = i.map(({
										type: e
									}) => e),
									l = c(n),
									m = c(i);
								a = {
									...a,
									[e]: {
										achievementTypes: s,
										supporterTypes: d,
										preferredAchievementType: l,
										preferredSupporterType: m,
										isHidden: t
									}
								}
							}
							return {
								...e,
								[n]: a
							}
						}
						case d.f: {
							const {
								subredditId: n,
								userId: s,
								achievementFlairType: a,
								supporterFlairType: r
							} = t.payload;
							return Object(i.updateIn)(e, [n, s], e => ({
								...e,
								pendingAchievementType: a,
								pendingSupporterType: r
							}))
						}
						case d.g: {
							const {
								subredditId: n,
								userId: s,
								achievementFlairType: a,
								supporterFlairType: r
							} = t.payload;
							return Object(i.updateIn)(e, [n, s], e => ({
								...e,
								preferredAchievementType: a,
								preferredSupporterType: r,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case d.e: {
							const {
								subredditId: n,
								userId: s
							} = t.payload;
							return Object(i.updateIn)(e, [n, s], e => ({
								...e,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case d.h: {
							const {
								subredditId: n,
								userId: s,
								isHidden: a
							} = t.payload;
							return Object(i.updateIn)(e, [n, s], e => ({
								...e,
								isHidden: a
							}))
						}
						default:
							return e
					}
				},
				usersSupportedSubreddits: (e = m, t) => {
					switch (t.type) {
						case d.i: {
							let n = {};
							return t.payload.forEach(e => {
								const t = e.id,
									s = e.powerups;
								if (!t || !s) return;
								const a = s.supportedSubreddits.filter(({
									subredditInfo: e
								}) => null == e ? void 0 : e.id).map(({
									subredditInfo: e
								}) => e.id);
								n = {
									...n,
									[t]: a.reduce((e, t) => (e[t] = !0, e), {})
								}
							}), {
								...e,
								...n
							}
						}
						default:
							return e
					}
				}
			})
		},
		"./src/reddit/selectors/experiments/emailInvite.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(a.c)(e, {
					experimentEligibilitySelector: a.a,
					experimentName: s.Sc
				});
				return !(!t || Object(s.hf)(t))
			}
		},
		"./src/reddit/selectors/gold/powerups/flairs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return l
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "a", (function() {
				return E
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/selectors/commentSelector.ts"),
				r = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/powerups/index.ts");
			Object(r.a)({
				features: {
					powerups: o.a
				}
			});
			const i = (e, {
					subredditId: t
				}) => {
					var n;
					return t ? null === (n = e.features.powerups.subredditPowerupsFlairs) || void 0 === n ? void 0 : n[t] : null
				},
				d = (e, {
					subredditId: t
				}) => {
					var n, s;
					return t ? null === (s = null === (n = e.features.powerups.subredditPowerupsFlairs) || void 0 === n ? void 0 : n[t]) || void 0 === s ? void 0 : s.flairsByType : null
				},
				l = (e, {
					subredditId: t,
					userId: n
				}) => {
					var s, a;
					return t && n ? null === (a = null === (s = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === s ? void 0 : s[t]) || void 0 === a ? void 0 : a[n] : null
				},
				c = Object(s.a)(l, e => (null == e ? void 0 : e.pendingAchievementType) || (null == e ? void 0 : e.preferredAchievementType)),
				m = Object(s.a)([d, c], (e, t) => e && t ? e[t] : null),
				u = Object(s.a)(l, e => null == e ? void 0 : e.preferredSupporterType),
				p = Object(s.a)([d, u], (e, t) => e && t ? e[t] : null),
				b = Object(s.a)([d, l], (e, t) => {
					if (!e) return [];
					const n = t ? [...t.supporterTypes, ...t.achievementTypes] : [],
						s = (null == t ? void 0 : t.pendingAchievementType) || (null == t ? void 0 : t.preferredAchievementType),
						a = (null == t ? void 0 : t.pendingSupporterType) || (null == t ? void 0 : t.preferredSupporterType);
					return Object.values(e).map(e => ({
						...e,
						isLocked: !n.includes(e.type),
						isPreferred: e.type === s || e.type === a
					})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1)
				}),
				h = Object(s.a)([i, l], (e, t) => {
					if (!e || !t) return null;
					const {
						supporterTypes: n,
						achievementTypes: s,
						flairsByType: a
					} = e, {
						supporterTypes: r,
						achievementTypes: o,
						preferredSupporterType: i,
						preferredAchievementType: d,
						pendingSupporterType: l,
						pendingAchievementType: c
					} = t;
					return {
						supporterFlairs: x(n, r, a, l || i),
						achievementFlairs: x(s, o, a, c || d)
					}
				}),
				g = Object(s.a)([l], e => !!e && e.isHidden),
				f = Object(s.a)([i, l, p], (e, t, n) => {
					if (!e || !t) return [];
					const s = t.achievementTypes.map(t => e.flairsByType[t]);
					return n ? [n, ...s] : s
				}),
				x = (e, t, n, s) => e.map(e => ({
					...n[e],
					isLocked: !t.includes(e),
					isPreferred: e === s
				})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1),
				E = (e, {
					commentId: t
				}) => {
					const n = Object(a.b)(e, {
							commentId: t
						}),
						s = null == n ? void 0 : n.subredditId,
						r = null == n ? void 0 : n.authorId;
					return !(!s || !r) && !!((e, {
						subredditId: t,
						userId: n
					}) => {
						var s, a, r;
						return t && n ? null === (r = null === (a = null === (s = e.features.powerups) || void 0 === s ? void 0 : s.usersSupportedSubreddits) || void 0 === a ? void 0 : a[n]) || void 0 === r ? void 0 : r[t] : null
					})(e, {
						subredditId: s,
						userId: r
					})
				}
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/posts.ts");
			const i = e => Object(r.c)(e, {
					experimentName: a.ie,
					experimentEligibilitySelector: r.a
				}),
				d = (e, t) => t === a.qe.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored),
				l = Object(s.a)(o.H, i, (e, t) => d(e, t));
			Object(s.a)((e, t) => t, i, (e, t) => d(e, t))
		},
		"./src/reddit/selectors/streamingModSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return c
			}));
			const s = {
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
						sunday: s,
						monday: s,
						tuesday: s,
						wednesday: s,
						thursday: s,
						friday: s,
						saturday: s
					},
					whitelistedUsers: [],
					broadcasterPrompt: "",
					isDiscoveryUnitShown: !1,
					inSubMinKarma: void 0
				},
				r = (e, t) => {
					const n = e.streaming.modSettings[t.subredditId];
					return n ? {
						isLiveStreamingEnabled: n.isLiveStreamingEnabled,
						maxLiveStreams: n.maxLiveStreams,
						minKarma: n.minKarma,
						minAccountAgeDays: n.minAccountAgeDays,
						durationLimitSeconds: n.durationLimitSeconds,
						schedule: {
							sunday: l(n.weeklySchedule.sunday),
							monday: l(n.weeklySchedule.monday),
							tuesday: l(n.weeklySchedule.tuesday),
							wednesday: l(n.weeklySchedule.wednesday),
							thursday: l(n.weeklySchedule.thursday),
							friday: l(n.weeklySchedule.friday),
							saturday: l(n.weeklySchedule.saturday)
						},
						whitelistedUsers: n.whitelistedRedditors,
						broadcasterPrompt: n.broadcasterPrompt,
						isDiscoveryUnitShown: n.isDiscoveryUnitShown,
						inSubMinKarma: n.inSubMinKarma
					} : a
				},
				o = (e, t) => !!e.streaming.modSettings[t],
				i = e => !!e.streaming.api.pending,
				d = (e, t) => !!e.streaming.modSettings[t] && e.streaming.modSettings[t].isLiveStreamingEnabled,
				l = e => ({
					...s,
					...e[0]
				}),
				c = (e, t) => {
					const n = e.streaming.modSettings[t.subredditId];
					if (!n) return !1;
					const s = new Date;
					return m(s, n.weeklySchedule)
				},
				m = (e, t) => {
					const n = u(e);
					return p(n, t).some(t => b(e, t))
				},
				u = e => {
					return ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"][e.getUTCDay()]
				},
				p = (e, t) => t[e],
				b = (e, t) => {
					const n = e.getUTCHours(),
						s = e.getUTCMinutes(),
						{
							startTime: a,
							endTime: r
						} = t,
						[o, i] = a.split(":").map(Number),
						[d, l] = r.split(":").map(Number);
					let c = 60 * o + i,
						m = 60 * d + l;
					const u = 60 * n + s;
					return 1439 === m && m++, 1439 === c && c++, u >= c && u < m
				}
		},
		"./src/reddit/selectors/subredditWiki.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "p", (function() {
				return l
			})), n.d(t, "q", (function() {
				return c
			})), n.d(t, "o", (function() {
				return m
			})), n.d(t, "n", (function() {
				return u
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "m", (function() {
				return g
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "l", (function() {
				return x
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "g", (function() {
				return C
			}));
			var s = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/reddit/helpers/wiki/makeWikiPageKey.ts");
			const r = [],
				o = (e, t) => {
					var n;
					const {
						subredditName: s
					} = t;
					if (null === (n = e.pages) || void 0 === n ? void 0 : n.subredditWiki) return e.pages.subredditWiki.directory[s.toLowerCase()]
				},
				i = (e, t) => {
					const {
						subredditName: n
					} = t;
					return !!e.subreddits.api.wiki.pending[n.toLowerCase()]
				},
				d = (e, t) => {
					var n;
					const s = Object(a.a)(t);
					if (null === (n = e.pages) || void 0 === n ? void 0 : n.subredditWiki) return e.pages.subredditWiki.pages[s]
				},
				l = (e, {
					listingKey: t
				}) => e.pages.subredditWiki.revisions.listings[t],
				c = (e, {
					listingKey: t
				}) => !!e.pages.subredditWiki.revisions.api.pending[t],
				m = (e, {
					listingKey: t
				}) => !!e.pages.subredditWiki.revisions.api.error[t],
				u = (e, t) => {
					return (e => e.pages.subredditWiki.revisions.models)(e)[t.revisionId]
				},
				p = (e, {
					key: t
				}) => e.pages.subredditWiki.diff[t],
				b = (e, t) => {
					const n = Object(a.a)(t);
					return e.pages.subredditWiki.pageSettings[n]
				},
				h = (e, t) => {
					const {
						subredditName: n
					} = t;
					return !!e.pages.subredditWiki.wikiContributors.listing.api.pending[n.toLowerCase()]
				},
				g = Object(s.a)((e, {
					subredditName: t
				}) => {
					const n = t.toLowerCase(),
						s = e.pages.subredditWiki.wikiContributors.listing,
						a = s.userOrder[n],
						o = s.models[n];
					return a ? a.map(e => o[e]) : r
				}),
				f = (e, t) => {
					const {
						subredditName: n
					} = t;
					return e.pages.subredditWiki.wikiContributors.listing.afterToken[n.toLowerCase()]
				},
				x = (e, t) => {
					const {
						subredditName: n
					} = t;
					return e.pages.subredditWiki.wikiContributors.search[n.toLowerCase()]
				},
				E = (e, t) => {
					const {
						subredditName: n
					} = t;
					return !!e.pages.subredditWiki.wikiBannedContributors.listing.api.pending[n.toLowerCase()]
				},
				v = Object(s.a)((e, {
					subredditName: t
				}) => {
					const n = t.toLowerCase(),
						s = e.pages.subredditWiki.wikiBannedContributors.listing,
						a = s.userOrder[n],
						o = s.models[n];
					return a ? a.map(e => o[e]) : r
				}),
				_ = (e, t) => {
					const {
						subredditName: n
					} = t;
					return e.pages.subredditWiki.wikiBannedContributors.listing.afterToken[n.toLowerCase()]
				},
				C = (e, t) => {
					const {
						subredditName: n
					} = t;
					return e.pages.subredditWiki.wikiBannedContributors.search[n.toLowerCase()]
				}
		},
		"./src/redditGQL/operations/AllModerators.json": function(e) {
			e.exports = JSON.parse('{"id":"e29846f6d98c"}')
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
		"./src/redditGQL/operations/GetSubredditWelcomeMessage.json": function(e) {
			e.exports = JSON.parse('{"id":"ba4eb4e2972f"}')
		},
		"./src/redditGQL/operations/SetSubredditGeoPlace.json": function(e) {
			e.exports = JSON.parse('{"id":"ece6b91ed02d"}')
		},
		"./src/redditGQL/operations/SubmitScheduledPost.json": function(e) {
			e.exports = JSON.parse('{"id":"6f9e584d390a"}')
		},
		"./src/redditGQL/operations/SubredditWiki.json": function(e) {
			e.exports = JSON.parse('{"id":"5834be60ee7a"}')
		},
		"./src/redditGQL/operations/SubredditWikiBannedContributors.json": function(e) {
			e.exports = JSON.parse('{"id":"9b728f1ed735"}')
		},
		"./src/redditGQL/operations/SubredditWikiContributors.json": function(e) {
			e.exports = JSON.parse('{"id":"6ff60c2af7f1"}')
		},
		"./src/redditGQL/operations/SubredditWikiPageSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"03acb455993d"}')
		},
		"./src/redditGQL/operations/UpdateSubredditWelcomeMessage.json": function(e) {
			e.exports = JSON.parse('{"id":"5f408850ebd9"}')
		},
		"./src/redditGQL/operations/WikiComparisonDiff.json": function(e) {
			e.exports = JSON.parse('{"id":"37afdc03bbf6"}')
		},
		"./src/redditGQL/operations/WikiRevisions.json": function(e) {
			e.exports = JSON.parse('{"id":"83e11ebf7cbf"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModerationPages.7a560ac6b302ce0281d5.js.map