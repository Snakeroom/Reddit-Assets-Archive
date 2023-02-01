// https://www.redditstatic.com/desktop2x/Settings~SubredditWiki.9cb4c425c7ca9fdbb73e.js
// Retrieved at 2/1/2023, 1:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Settings~SubredditWiki"], {
		"./src/lib/linkMatchers/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return b
			})), r.d(t, "e", (function() {
				return p
			})), r.d(t, "g", (function() {
				return f
			})), r.d(t, "j", (function() {
				return v
			})), r.d(t, "a", (function() {
				return x
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "c", (function() {
				return I
			})), r.d(t, "d", (function() {
				return _
			})), r.d(t, "h", (function() {
				return O
			})), r.d(t, "i", (function() {
				return C
			}));
			var n = r("./node_modules/linkify-it/index.js"),
				s = r.n(n),
				a = r("./node_modules/tlds/index.js"),
				o = r.n(a),
				d = r("./src/lib/linkMatchers/customLinks.ts"),
				i = r("./node_modules/lodash/values.js"),
				c = r.n(i);
			const l = e => c()(d.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				b = s()().tlds(o.a).set({
					fuzzyIP: !0
				}),
				p = s()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(d.g.mention.prefix, d.g.mention.config),
				f = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(d.g.subreddit.prefix, d.g.subreddit.config).add(d.g.subredditFull.prefix, d.g.subreddit.config),
				v = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(d.g.profile.prefix, d.g.profile.config).add(d.g.profileFull.prefix, d.g.profile.config),
				x = s()().tlds(o.a).set({
					fuzzyIP: !0
				}).add(d.g.subreddit.prefix, d.g.subreddit.config).add(d.g.subredditFull.prefix, d.g.subreddit.config).add(d.g.profile.prefix, d.g.profile.config).add(d.g.profileFull.prefix, d.g.profile.config).add(d.g.mention.prefix, d.g.mention.config),
				h = s()().tlds(o.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(d.g.subreddit.prefix, d.g.subredditFullUrl.config).add(d.g.subredditFull.prefix, d.g.subredditFullUrl.config),
				g = b.normalize;
			b.normalize = e => {
				g.call(b, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const I = (e, t) => {
					return (x.match(e) || []).filter(e => {
						const r = l(e.text);
						return !r || r && t
					})
				},
				_ = e => {
					return [...v.match(e) || [], ...p.match(e) || []].map(e => !l(e.text) && e.text.replace(d.a, "")).filter(e => e)
				},
				O = (e, t) => {
					const r = e.match(t);
					if (r && 1 === r.length && 0 === r[0].index && r[0].lastIndex === t.length) return r[0]
				},
				C = e => {
					const t = b.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const r = t[0];
						return r.lastIndex === e.length ? r : ((e, t) => {
							const r = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(r)) return t.lastIndex += r.length, t.url += r, t
						})(e, r)
					}
				}
		},
		"./src/reddit/actions/pages/shared.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				s = r("./src/reddit/helpers/routeKey/index.ts"),
				a = r("./src/reddit/helpers/trackers/screenview.ts"),
				o = r("./src/telemetry/index.ts"),
				d = r("./src/telemetry/models/Timer.ts");
			const i = () => async (e, t) => {
				const r = t(),
					{
						currentPage: i
					} = r.platform;
				if (!i) return;
				const c = i.routeMatch,
					l = Object(n.a)(r),
					u = Object(s.b)(c, r, l);
				u && o.c.has(u) && Object(a.j)(c, r, d.TimerType.InApp, o.c.end(u))
			}
		},
		"./src/reddit/actions/subreddit/muting.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return N
			})), r.d(t, "d", (function() {
				return k
			})), r.d(t, "e", (function() {
				return P
			})), r.d(t, "g", (function() {
				return S
			})), r.d(t, "a", (function() {
				return U
			})), r.d(t, "f", (function() {
				return w
			})), r.d(t, "b", (function() {
				return F
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				o = r("./src/lib/makeGqlRequest/index.ts"),
				d = r("./src/redditGQL/operations/DeleteSubredditMuteSettings.json"),
				i = r("./src/redditGQL/operations/MutedSubreddits.json"),
				c = r("./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json"),
				l = r("./src/redditGQL/operations/UpdateSubredditMuteSettings.json");
			const u = (e, t) => Object(o.a)(e, {
					...l,
					variables: {
						input: {
							subredditId: t
						}
					}
				}),
				m = (e, t) => Object(o.a)(e, {
					...d,
					variables: {
						input: {
							subredditId: t
						}
					}
				});
			var b = r("./src/reddit/models/Toast/index.ts"),
				p = r("./src/reddit/actions/subreddit/constants.ts"),
				f = r("./src/reddit/actions/subreddit/notifications.ts"),
				v = r("./src/reddit/selectors/subreddit.ts");
			const x = e => Object(a.f)({
					id: e,
					kind: b.b.Error,
					duration: a.a,
					text: n.fbt._("An error has occured. Please try again later", null, {
						hk: "2FpsLy"
					})
				}),
				h = (e, t) => Object(a.f)({
					kind: b.b.SuccessCommunityGreen,
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
				g = (e, t) => Object(a.f)({
					kind: b.b.SuccessCommunityGreen,
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
			var I = r("./src/reddit/endpoints/subreddit/about.ts");
			const _ = Object(s.a)(p.i),
				O = Object(s.a)(p.h),
				C = Object(s.a)(p.G),
				j = (Object(s.a)(p.j), Object(s.a)(p.F), Object(s.a)(p.g)),
				y = Object(s.a)(p.f),
				N = e => {
					let {
						subredditId: t,
						subredditName: r,
						successCallback: n
					} = e;
					return async (e, s, a) => {
						let {
							gqlContext: o
						} = a;
						var d, i;
						const c = await u(o(), t);
						if (c.ok && c.body && (null === (i = null === (d = c.body) || void 0 === d ? void 0 : d.data.updateSubredditMuteSettings) || void 0 === i ? void 0 : i.ok)) n && n(), e(h(r, E({
							subredditId: t,
							subredditName: r
						})));
						else {
							e(x(`error-muting-${t}`))
						}
					}
				},
				E = e => {
					let {
						subredditId: t,
						subredditName: r,
						successCallback: n
					} = e;
					return async (e, s, a) => {
						let {
							gqlContext: o
						} = a;
						var d, i;
						const c = await m(o(), t);
						if (c.ok && c.body && (null === (i = null === (d = c.body) || void 0 === d ? void 0 : d.data.deleteSubredditMuteSettings) || void 0 === i ? void 0 : i.ok)) n && n(), e(g(r, N({
							subredditId: t,
							subredditName: r
						})));
						else {
							e(x(`error-muting-${t}`))
						}
					}
				},
				k = e => {
					let {
						subredditId: t,
						subredditName: r,
						successCallback: n
					} = e;
					return async (e, s, a) => {
						let {
							gqlContext: o
						} = a;
						var d, i;
						const c = await u(o(), t);
						if (c.ok && c.body && (null === (i = null === (d = c.body) || void 0 === d ? void 0 : d.data.updateSubredditMuteSettings) || void 0 === i ? void 0 : i.ok)) n && n(), e(Object(f.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !0
								}
							}
						})), e(h(r, P({
							subredditId: t,
							subredditName: r
						})));
						else {
							e(x(`error-muting-${t}`))
						}
					}
				},
				P = e => {
					let {
						subredditId: t,
						subredditName: r,
						successCallback: n
					} = e;
					return async (e, s, a) => {
						let {
							gqlContext: o
						} = a;
						var d, i;
						const c = await m(o(), t);
						if (c.ok && c.body && (null === (i = null === (d = c.body) || void 0 === d ? void 0 : d.data.deleteSubredditMuteSettings) || void 0 === i ? void 0 : i.ok)) n && n(), e(Object(f.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !1
								}
							}
						})), e(g(r, k({
							subredditId: t,
							subredditName: r
						})));
						else {
							e(x(`error-muting-${t}`))
						}
					}
				},
				S = e => {
					let {
						subredditId: t,
						notificationLevel: r
					} = e;
					return async (e, s, d) => {
						let {
							gqlContext: i
						} = d;
						var l, u;
						const m = Object(f.a)(r),
							p = await ((e, t, r) => Object(o.a)(e, {
								...c,
								variables: {
									input: {
										...r,
										subredditId: t
									}
								}
							}))(i(), t, m);
						p.ok && p.body && (null === (u = null === (l = p.body) || void 0 === l ? void 0 : l.data.updateSubredditMuteAndNotificationLevelSettings) || void 0 === u ? void 0 : u.ok) ? (e(C({
							subredditId: t,
							notificationLevel: r
						})), e(Object(a.f)({
							kind: b.b.SuccessCommunityGreen,
							text: Object(f.b)(r)
						}))) : e(Object(a.f)({
							kind: b.b.Error,
							text: n.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
								hk: "4avFFV"
							})
						}))
					}
				},
				U = () => async (e, t, r) => {
					let {
						gqlContext: s
					} = r;
					const d = await (e => Object(o.a)(e, i))(s());
					if (d.ok && d.body && d.body.data) {
						const {
							data: t
						} = d.body, r = (t && t.identity.mutedSubreddits).edges.map(e => e.node);
						e(_({
							nodes: r
						}))
					} else e(O()), e(Object(a.f)({
						duration: a.a,
						kind: b.b.Error,
						text: n.fbt._("Failed to get muted subreddits, please try again.", null, {
							hk: "2dCj3Q"
						})
					}))
				}, w = e => {
					let {
						subredditId: t,
						subredditName: r
					} = e;
					return async (e, n, s) => {
						let {
							gqlContext: a
						} = s;
						var o, d;
						const i = await m(a(), t);
						if (i.ok && i.body && (null === (d = null === (o = i.body) || void 0 === o ? void 0 : o.data.deleteSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) e(j(t)), e(g(r));
						else {
							e(x(`error-unmuting-${t}`))
						}
					}
				}, F = e => {
					let {
						subredditName: t
					} = e;
					return async (e, r, s) => {
						let {
							gqlContext: o
						} = s;
						var d, i;
						const c = r(),
							l = Object(v.t)(c).find(e => e.name.toLowerCase() === t.toLowerCase());
						if (l) {
							const t = l.name,
								r = `error-muting-duplicate-${t}`;
							return e(Object(a.f)({
								id: r,
								kind: b.b.Error,
								duration: a.a,
								text: n.fbt._("Sorry, r/{subreddit name} is already muted.", [n.fbt._param("subreddit name", t)], {
									hk: "4n64wl"
								})
							}))
						}
						const m = await Object(I.a)(o(), t, !0),
							{
								data: p
							} = m.body,
							f = p && p.subreddit;
						if (!m.ok || null === f) {
							return e(((e, t) => Object(a.f)({
								id: e,
								kind: b.b.Error,
								duration: a.a,
								text: n.fbt._("Sorry, r/{subreddit name} isn't a community.", [n.fbt._param("subreddit name", t)], {
									hk: "3UtglL"
								})
							}))(`error-muting-${t}`, t))
						}
						const g = f.id,
							_ = await u(o(), g);
						if (_.ok && _.body && (null === (i = null === (d = _.body) || void 0 === d ? void 0 : d.data.updateSubredditMuteSettings) || void 0 === i ? void 0 : i.ok)) e(y([f])), e(h(f.name));
						else {
							e(x(`error-muting-${g}`))
						}
					}
				}
		},
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return m
			})), r.d(t, "a", (function() {
				return f
			})), r.d(t, "b", (function() {
				return v
			})), r.d(t, "d", (function() {
				return x
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				o = r("./src/reddit/actions/notificationsInbox/index.ts"),
				d = r("./src/reddit/actions/subreddit/constants.ts"),
				i = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = r("./src/reddit/models/Subreddit/index.ts"),
				u = r("./src/reddit/models/Toast/index.ts");
			const m = Object(s.a)(d.z),
				b = Object(s.a)(d.y),
				p = Object(s.a)(d.x),
				f = e => {
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
				v = e => {
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
			const x = e => {
				let {
					subredditId: t,
					notificationLevel: r,
					successCallback: s,
					undoCallback: d
				} = e;
				return async (e, l, x) => {
					let {
						gqlContext: h
					} = x;
					var g, I, _;
					e(b());
					const O = f(r),
						C = await Object(c.b)(h(), t, O);
					if ((null === (I = null === (g = C.error) || void 0 === g ? void 0 : g.fields) || void 0 === I ? void 0 : I.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(C.body) && (null === (_ = C.body.data.updateSubredditNotificationSettings.errors) || void 0 === _ ? void 0 : _.length)) return e(p()), e(Object(i.f)({
						kind: u.b.Error,
						text: n.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					C.ok && (e(Object(a.c)({
						subredditId: t,
						notificationLevel: r
					})), e(m({
						subredditAboutInfo: {
							[t]: {
								notificationLevel: r
							}
						}
					})), s && s(), e(d ? Object(i.f)(Object(i.e)(v(r), u.b.Undo, n.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(o.i)(t, d))) : Object(i.f)(Object(i.e)(v(r), u.b.SuccessCommunityGreen))))
				}
			}
		},
		"./src/reddit/actions/subredditModeration/ban.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return $
			})), r.d(t, "d", (function() {
				return ne
			})), r.d(t, "b", (function() {
				return oe
			})), r.d(t, "e", (function() {
				return de
			})), r.d(t, "a", (function() {
				return ie
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/get.js"),
				a = r.n(s),
				o = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/reddit/actions/apiRequestState.ts"),
				i = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/actions/subreddit.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/constants/modals.ts"),
				m = r("./src/lib/constants/index.ts"),
				b = r("./src/lib/makeApiRequest/index.ts"),
				p = r("./src/lib/omitHeaders/index.ts"),
				f = r("./src/reddit/constants/headers.ts"),
				v = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				x = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const h = (e, t, r) => Object(b.a)(Object(p.a)(e, [f.a]), {
				endpoint: Object(v.a)(Object(x.a)(`${e.apiUrl}/api/v1/${t}/banned`)),
				method: m.ob.GET,
				data: r
			});
			var g = r("./src/reddit/helpers/normalizeUsername/index.tsx"),
				I = r("./src/reddit/models/SubredditModeration/index.ts"),
				_ = r("./src/reddit/models/Toast/index.ts"),
				O = r("./src/reddit/selectors/activeModalId.ts"),
				C = r("./src/reddit/selectors/bannedUser.ts"),
				j = r("./src/reddit/selectors/subreddit.ts"),
				y = r("./src/reddit/selectors/user.ts"),
				N = r("./src/reddit/actions/subredditModeration/constants.ts"),
				E = r("./src/lib/initializeClient/installReducer.ts"),
				k = r("./node_modules/redux/es/redux.js");
			var P = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case N.s:
					case N.r:
						return null;
					case N.q:
						return t.payload;
					default:
						return e
				}
			};
			const S = {};
			var U = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case N.s: {
							const {
								subredditId: r,
								fetchedToken: n
							} = t.payload, s = Object(I.e)(r, n);
							return {
								...e,
								[s]: !0
							}
						}
						case N.r:
						case N.q: {
							const {
								subredditId: r,
								fetchedToken: n
							} = t.payload, s = Object(I.e)(r, n);
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				w = Object(k.c)({
					error: P,
					pending: U
				});
			const F = {};
			var A = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : F,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case N.r: {
							const {
								fetchedToken: r,
								subredditId: n
							} = t.payload, s = Object(I.e)(n, r);
							return {
								...e,
								[s]: !0
							}
						}
						default:
							return e
					}
				},
				M = r("./src/reddit/actions/inContextModeration.ts");
			var B = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case M.a:
						return t.payload;
					default:
						return e
				}
			};
			const L = {};
			var T = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case N.r: {
							const {
								subredditId: e,
								after: r
							} = t.payload;
							return {
								[e]: r
							}
						}
						default:
							return e
					}
				},
				H = r("./node_modules/icepick/icepick.js");
			const R = {};
			var W = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case N.p:
					case N.r: {
						const {
							subredditId: r,
							bannedUsers: n
						} = t.payload;
						return Object(H.merge)(e, {
							[r]: n
						})
					}
					case N.w: {
						const {
							subredditId: r,
							userId: n
						} = t.payload;
						return Object(H.unsetIn)(e, [r, n])
					}
					default:
						return e
				}
			};
			var G = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case N.v:
					case N.u:
						return null;
					case N.t:
						return t.payload;
					default:
						return e
				}
			};
			var z = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case N.v:
							return !0;
						case N.u:
						case N.t:
							return !1;
						default:
							return e
					}
				},
				D = Object(k.c)({
					error: G,
					pending: z
				});
			var K = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case N.v:
						case N.t:
							return null;
						case N.u: {
							const e = t.payload.bannedUserIds[0];
							return e ? t.payload.bannedUsers[e] : null
						}
						default:
							return e
					}
				},
				Q = Object(k.c)({
					api: D,
					result: K
				});
			const J = {};
			var q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case N.r: {
							const {
								subredditId: r,
								bannedUserIds: n
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: [...e[r], ...n]
							} : {
								...e,
								[r]: n
							}
						}
						case N.w: {
							const {
								subredditId: r,
								userId: n
							} = t.payload;
							return {
								[r]: e[r].filter(e => e !== n)
							}
						}
						case N.p: {
							const {
								subredditId: r,
								bannedUserIds: n
							} = t.payload, s = n[0];
							return s && e[r] && -1 === e[r].indexOf(s) ? {
								[r]: [s, ...e[r]]
							} : e
						}
						default:
							return e
					}
				},
				X = Object(k.c)({
					api: w,
					fetchedTokens: A,
					inContext: B,
					loadMore: T,
					models: W,
					search: Q,
					userOrder: q
				});
			Object(E.a)({
				features: {
					banned: X
				}
			});
			const Y = Object(o.a)(N.s),
				Z = Object(o.a)(N.r),
				V = Object(o.a)(N.q),
				$ = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (r, n, s) => {
						let {
							apiContext: a
						} = s;
						const o = n(),
							d = t.after || "",
							i = Object(I.e)(e, d),
							c = o.features.banned.fetchedTokens[i];
						if (o.features.banned.api.pending[i] || c) return;
						r(Y({
							subredditId: e,
							fetchedToken: d
						}));
						const l = o.subreddits.models[e].name,
							u = await h(a(), l, t);
						u.ok ? r(Z({
							...u.body,
							fetchedToken: d
						})) : r(V({
							subredditId: e,
							fetchedToken: d
						}))
					}
				},
				ee = Object(o.a)(N.v),
				te = Object(o.a)(N.u),
				re = Object(o.a)(N.t),
				ne = (e, t) => async (r, n, s) => {
					let {
						apiContext: a
					} = s;
					const o = n().subreddits.models[e].name,
						d = {
							username: Object(g.a)(t)
						};
					r(ee());
					const i = await h(a(), o, d);
					i.ok ? r(te(i.body)) : r(re(i.error))
				}, se = Object(o.a)(N.p), ae = Object(o.a)(N.w), oe = (e, t, r) => async (s, o, i) => {
					let {
						apiContext: c
					} = i;
					const u = o(),
						x = u.subreddits.models[e].url,
						I = u.subreddits.models[e].name;
					t.username = Object(g.a)(t.username), s(Object(d.h)(r));
					const O = await ((e, t, r) => Object(b.a)(Object(p.a)(e, [f.a]), {
						endpoint: Object(v.a)(`${e.apiUrl}${t}api/friend`),
						method: m.ob.POST,
						data: {
							api_type: "json",
							ban_reason: r.reason,
							ban_message: r.banMessage,
							duration: r.duration,
							name: r.username,
							note: r.modNote,
							ban_context: r.contextId,
							type: "banned"
						}
					}))(c(), x, t);
					if (O.ok) {
						s(Object(d.e)(r));
						const e = {
							username: t.username
						};
						s(Object(l.f)({
							kind: _.b.SuccessMod,
							text: n.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const a = await h(c(), I, e);
						a.ok && s(se(a.body))
					} else {
						s(Object(d.f)(r, O.error));
						const e = a()(O, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						s(Object(l.f)({
							kind: _.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, de = (e, t) => async (r, s, o) => {
					let {
						apiContext: d
					} = o;
					const i = s().subreddits.models[e].url,
						c = await ((e, t, r) => Object(b.a)(Object(p.a)(e, [f.a]), {
							endpoint: Object(v.a)(`${e.apiUrl}${t}api/unfriend`),
							method: m.ob.POST,
							data: {
								api_type: "json",
								id: r,
								type: "banned"
							}
						}))(d(), i, t);
					if (c.ok) r(ae({
						subredditId: e,
						userId: t
					})), r(Object(l.f)({
						kind: _.b.SuccessMod,
						text: n.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = a()(c, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						r(Object(l.f)({
							kind: _.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ie = (e, t) => async (r, n) => {
					const s = n();
					await Promise.all([(async () => {
						if (!Object(O.b)(u.a.BAN_USER)(s) && !Object(j.U)(s, {
								subredditId: e
							})) {
							const t = Object(j.X)(s, {
								subredditId: e
							});
							await r(Object(c.o)(t.name))
						}
					})(), (async () => {
						const n = Object(y.Cb)(s, {
							userName: t
						});
						if (!n) return;
						const a = Object(C.h)(s, {
							subredditId: e
						});
						a && a[n.id] || await r($(e, {
							username: t
						}))
					})()]), r(Object(i.i)(u.a.BAN_USER))
				}
		},
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, r) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				d = r("./src/reddit/components/CharacterCountdown/index.m.less"),
				i = r.n(d);
			const {
				fbt: c
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => s.a.createElement(o.b, {
				className: Object(a.a)(e.className, i.a.container, e.text.length >= e.maxChars ? i.a.mOverflow : null)
			}, c._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [c._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var n, s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/reddit/actions/chat/toggle.ts"),
				i = r("./src/reddit/components/TrackingHelper/index.tsx"),
				c = r("./src/reddit/controls/Button/index.tsx"),
				l = r("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(n || (n = {}));
			const u = e => {
				let {
					onStartChat: t,
					text: r,
					className: s,
					sendEvent: o,
					contextId: d,
					priority: i,
					Icon: u,
					redditStyle: m,
					isFullWidth: b,
					eventSource: p,
					onClick: f,
					onAddUserToQuickReplyList: v,
					children: x,
					style: h
				} = e;
				return a.a.createElement(c.t, {
					onClick: e => {
						if (f && f(e), t(), p === n.awardNotification) return v();
						o(Object(l.b)(d))
					},
					className: s,
					text: r,
					priority: i,
					Icon: u,
					redditStyle: m,
					isFullWidth: b,
					style: h
				}, x)
			};
			u.displayName = "ChatButton";
			const m = Object(o.b)(null, (e, t) => {
				let {
					contextId: r,
					userId: n
				} = t;
				return {
					onStartChat: () => {
						e(Object(d.b)(n, r))
					},
					onAddUserToQuickReplyList: () => {
						e(Object(d.a)(n))
					}
				}
			});
			t.b = m(Object(i.c)(u))
		},
		"./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(n.a)({
				resolved: {},
				chunkName: () => "NftProfileUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => Promise.all([r.e("vendors~Avatar~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceClaimModal~MarketplaceInFeed~1ea7787c"), r.e("vendors~Avatar~ChatPost~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~RealtimeGQLSubscr~bfab320d"), r.e("vendors~Avatar~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~SnoovatarModal"), r.e("NftProfileUnit")]).then(r.bind(null, "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = s
		},
		"./src/reddit/components/EditableImage/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/EditableImage/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/ImageInput/index.tsx"),
				d = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				i = r("./src/reddit/icons/fonts/index.tsx"),
				c = r("./src/reddit/models/ApiRequestState/index.ts"),
				l = r("./src/reddit/components/EditableImage/index.m.less"),
				u = r.n(l);
			const {
				fbt: m
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					altText: t,
					children: r,
					className: n,
					isProfileCard: l,
					isLoading: m,
					imageUrl: b,
					onFileSelected: p
				} = e;
				return s.a.createElement("div", {
					className: Object(a.a)(u.a.Container, n)
				}, s.a.createElement("label", {
					className: u.a.HitBox
				}, s.a.createElement("span", {
					className: u.a.ImageContainer,
					role: "presentation"
				}, b ? s.a.createElement("img", {
					alt: t,
					className: u.a.Image,
					src: b
				}) : r), s.a.createElement(o.a, {
					className: u.a.ImageUploader,
					multiple: !1,
					onChange: e => {
						const t = Object(c.b)();
						p(e, t)
					},
					isPending: m
				}), !m && s.a.createElement("div", {
					className: Object(a.a)(u.a.EditButton, {
						[u.a.profileCard]: l
					})
				}, s.a.createElement(i.a, {
					name: "add_media",
					className: u.a.EditIcon
				}))), m && s.a.createElement(d.a, {
					className: u.a.LoadingIcon,
					sizePx: 80
				}))
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/actions/snoovatarModal.ts"),
				i = r("./src/reddit/actions/tooltip.ts"),
				c = r("./src/reddit/helpers/author.ts"),
				l = r("./src/reddit/helpers/isPost.ts"),
				u = r("./src/reddit/selectors/commentSelector.ts"),
				m = r("./src/reddit/selectors/gold/awardIcon.ts"),
				b = r("./src/reddit/selectors/moderatorPermissions.ts"),
				p = r("./src/reddit/selectors/modUserNotes.ts"),
				f = r("./src/reddit/selectors/posts.ts"),
				v = r("./src/reddit/selectors/profile.ts"),
				x = r("./src/reddit/selectors/structuredStyles.ts"),
				h = r("./src/reddit/selectors/subreddit.ts"),
				g = r("./src/reddit/selectors/tooltip.ts"),
				I = r("./src/reddit/selectors/user.ts"),
				_ = r("./src/reddit/selectors/userFlair.ts"),
				O = r("./src/reddit/selectors/userPrefs.ts"),
				C = r("./src/reddit/selectors/platform.ts"),
				j = r("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				y = r("./node_modules/fbt/lib/FbtPublic.js"),
				N = r("./src/config.ts"),
				E = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				k = r("./src/lib/lessComponent.tsx"),
				P = r("./src/lib/prettyPrintNumber/index.ts"),
				S = r("./src/reddit/components/ChatButton/index.tsx"),
				U = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				w = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				F = r("./src/reddit/components/SubscribeButton/index.tsx"),
				A = r("./src/reddit/components/UserIcon/index.tsx"),
				M = r("./src/reddit/controls/Button/index.tsx"),
				B = r("./src/reddit/endpoints/profile/info.ts"),
				L = r("./src/reddit/helpers/trackers/authorHovercard.ts"),
				T = r("./src/reddit/icons/fonts/Info/index.tsx"),
				H = r("./src/reddit/icons/svgs/Admin/index.tsx"),
				R = r("./src/reddit/icons/svgs/Premium/index.tsx"),
				W = r("./src/reddit/models/Gold/Award.ts"),
				G = r("./src/reddit/models/User/index.ts"),
				z = r("./src/reddit/components/HumanDate/index.tsx"),
				D = r("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				K = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				Q = r("./src/reddit/actions/inContextModeration.ts"),
				J = r("./src/reddit/actions/modal.ts"),
				q = r("./src/reddit/actions/subredditModeration/ban.ts"),
				X = r("./src/reddit/constants/modals.ts"),
				Y = r("./src/reddit/components/Hovercards/helpers.ts"),
				Z = r("./src/reddit/icons/fonts/index.tsx"),
				V = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				$ = r("./src/reddit/selectors/bannedUser.ts"),
				ee = r("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),
				te = r.n(ee);
			const {
				fbt: re
			} = r("./node_modules/fbt/lib/FbtPublic.js"), ne = Object(o.c)({
				hasModMailPermissions: Object(b.b)(V.c.mail),
				isUserBanned: (e, t) => !!Object($.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(I.Cb)(e, {
					userName: t.username
				})
			});
			class se extends s.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: r,
						isUserBanned: n,
						onUnbanUser: a,
						sendEvent: o,
						toggleBanModal: d,
						toggleMuteModal: i
					} = this.props;
					return s.a.createElement("div", {
						className: e
					}, n ? s.a.createElement(Y.a, {
						role: "button",
						onClick: () => {
							a(this.props.user.id), o(L.e(t))
						}
					}, s.a.createElement(Z.a, {
						name: "ban",
						isFilled: !0,
						className: te.a.icon
					}), re._("Unban User", null, {
						hk: "1aASyW"
					})) : s.a.createElement(Y.a, {
						role: "button",
						onClick: () => {
							d(), o(L.a(t))
						}
					}, s.a.createElement(Z.a, {
						name: "ban",
						className: te.a.icon
					}), re._("Ban User", null, {
						hk: "3OhuLx"
					})), r && s.a.createElement(Y.a, {
						role: "button",
						onClick: () => {
							i(), o(L.d(t))
						}
					}, s.a.createElement(Z.a, {
						name: "mod_mute",
						className: te.a.icon
					}), re._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var ae = Object(a.b)(ne, (e, t) => {
					let {
						username: r,
						subredditId: n,
						contextId: s
					} = t;
					return {
						onUnbanUser: t => e(Object(q.e)(n, t)),
						requestUserBanInfo: () => e(Object(q.c)(n, {
							username: r
						})),
						toggleBanModal: () => {
							e(Object(Q.c)({
								username: r,
								subredditId: n,
								contextId: s
							})), e(Object(q.a)(n, r))
						},
						toggleMuteModal: () => {
							e(Object(Q.d)({
								username: r,
								subredditId: n,
								contextId: s
							})), e(Object(J.i)(X.a.MUTE_USER))
						}
					}
				})(se),
				oe = r("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: de
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var ie = Object(a.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(oe.g)(t.subredditId, t.username))
				}))(e => s.a.createElement(Y.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(L.c(e.contextId))
					}
				}, s.a.createElement(Z.a, {
					name: "tag",
					className: te.a.icon
				}), de._("Edit user flair", null, {
					hk: "4mTxM"
				}))),
				ce = r("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),
				le = r.n(ce);

			function ue() {
				return (ue = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const me = k.a.wrapped(A.a, "UserIcon", le.a),
				be = k.a.wrapped(F.a, "SubscribeButton", le.a),
				pe = k.a.wrapped(S.b, "ChatButton", le.a),
				fe = k.a.wrapped(R.a, "PremiumIcon", le.a),
				ve = k.a.wrapped(E.a, "UserNameLink", le.a),
				xe = k.a.div("UserNameMetaData", le.a),
				he = k.a.div("MetaDataItem", le.a),
				ge = k.a.div("Bullet", le.a),
				Ie = k.a.div("UserNameContainer", le.a),
				_e = k.a.div("KarmaGrid", le.a),
				Oe = k.a.div("GenericKarma", le.a),
				Ce = k.a.a("InfoLink", le.a),
				je = k.a.div("KarmaCount", le.a),
				ye = k.a.div("GenericKarmaLabel", le.a),
				Ne = k.a.div("BannerImage", le.a),
				Ee = k.a.div("UserContainer", le.a),
				ke = k.a.div("BottomSpacer", le.a),
				Pe = k.a.div("Container", le.a),
				Se = e => s.a.createElement("div", null, s.a.createElement("div", null, s.a.createElement(ve, {
					to: `/user/${e.userName}/`
				}, e.title || e.userName), e.user.isEmployee && s.a.createElement(H.a, {
					className: le.a.adminIcon,
					title: y.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && s.a.createElement(E.a, {
					to: "/premium"
				}, s.a.createElement(fe, null))), s.a.createElement(xe, null, s.a.createElement(he, null, `u/${e.userName}`, s.a.createElement(ge, null, "•")), s.a.createElement(he, null, (e.user.createdUtc || e.user.created) && s.a.createElement(z.d, {
					seconds: e.user.createdUtc || e.user.created
				})))),
				Ue = e => {
					const {
						user: {
							karma: t
						}
					} = e, r = {
						...B.a,
						...t
					};
					return s.a.createElement(_e, null, s.a.createElement(Oe, null, s.a.createElement(je, null, Object(P.b)(r.fromPosts)), s.a.createElement(ye, null, y.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [y.fbt._plural(r.fromPosts)], {
						hk: "3K4oaH"
					}))), s.a.createElement(Oe, null, s.a.createElement(je, null, Object(P.b)(r.fromComments)), s.a.createElement(ye, null, y.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [y.fbt._plural(r.fromComments)], {
						hk: "3gKRx9"
					}))), s.a.createElement(Oe, null, s.a.createElement(je, null, Object(P.b)(r.fromAwardsReceived)), s.a.createElement(ye, null, y.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [y.fbt._plural(r.fromAwardsReceived)], {
						hk: "3nzm9q"
					}), s.a.createElement(Ce, {
						href: W.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(T.a, {
						className: le.a.infoIcon
					})))), s.a.createElement(Oe, null, s.a.createElement(je, null, Object(P.b)(r.fromAwardsGiven)), s.a.createElement(ye, null, y.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [y.fbt._plural(r.fromAwardsGiven)], {
						hk: "4zXN3B"
					}), s.a.createElement(Ce, {
						href: W.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(T.a, {
						className: le.a.infoIcon
					})))))
				},
				we = e => {
					var t, r;
					const {
						className: n,
						contextId: a,
						currentUser: o,
						hideNSFWPref: d,
						hoverId: i,
						isLoggedIn: c,
						onClickSnoovatar: l,
						moderatorPermissions: u,
						prefersReducedAnimations: m,
						profile: b,
						sendEvent: p,
						style: f,
						subredditId: v,
						topAwardIcon: x,
						userName: h,
						user: g,
						userFlair: I,
						isCurrentUserBanned: _,
						userProfileStyles: O,
						acceptChats: C,
						isCommentAuthorBlocked: j
					} = e;
					if (!g) return s.a.createElement(Pe, {
						style: f
					});
					const E = !!o && Object(G.e)(o) === h,
						k = !!(null == o ? void 0 : o.snoovatarFullBodyAsset),
						P = g.accountIcon || `${N.a.assetPath}/img/snoo_user_placeholder.png`,
						S = null == u ? void 0 : u.flair,
						w = null == u ? void 0 : u.access,
						F = (null == I ? void 0 : I.templateIds) && (null === (t = null == I ? void 0 : I.templateIds) || void 0 === t ? void 0 : t.length) > 0,
						A = null === (r = null == I ? void 0 : I.displaySettings) || void 0 === r ? void 0 : r.isEnabled,
						{
							awardedLastMonth: B
						} = g,
						T = !!g.snoovatarFullBodyAsset,
						H = g.isNSFW && d;
					let R;
					return R = T ? !H && O && O.bannerBackgroundImage || void 0 : H ? `${N.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, s.a.createElement(Pe, {
						className: n,
						id: i,
						style: f
					}, !T && R && s.a.createElement(Ne, {
						style: {
							backgroundImage: `url('${R}')`
						}
					}), s.a.createElement(Ee, null, T ? s.a.createElement(K.a, {
						isHovercard: !0,
						bannerBackgroundImage: R,
						compact: !0,
						currentUserHasSnoovatar: k,
						isEmployee: g.isEmployee,
						isGold: g.isGold,
						isNSFW: g.isNSFW,
						isOwnProfile: E,
						onClickSnoovatar: () => l && l(),
						prefersReducedAnimations: !!m,
						snoovatarUrl: g.snoovatarFullBodyAsset,
						title: null == b ? void 0 : b.title,
						userCreated: g.created,
						username: h,
						url: `/user/${e.userName}/`
					}) : s.a.createElement(Ie, null, s.a.createElement(me, {
						iconUrl: P,
						isNSFW: g.isNSFW,
						userName: h
					}), s.a.createElement(Se, {
						title: null == b ? void 0 : b.title,
						user: g,
						userName: h
					})), s.a.createElement(Ue, {
						user: g
					}), B && s.a.createElement(D.a, {
						recentAwardings: B,
						topAwardIcon: x,
						username: h
					}), c && !E && !_ && C && !j && s.a.createElement(pe, {
						contextId: a,
						priority: M.c.Secondary,
						userId: g.id,
						text: y.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), g.hasUserProfile && !_ && !j && !E && g.enableFollowers && s.a.createElement(be, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(L.h)(e ? "unfollow" : "follow", a),
						isFullWidth: !0,
						small: !0
					})), w && a && !E && v && s.a.createElement(ae, {
						contextId: a,
						subredditId: v,
						sendEvent: p,
						username: h
					}), S && a && F && A && v && s.a.createElement(ie, {
						contextId: a,
						subredditId: v,
						sendEvent: p,
						username: h
					}), s.a.createElement(U.i, {
						contextId: a,
						subredditId: v,
						user: g
					}), !(w || c) && s.a.createElement(ke, null))
				},
				Fe = Object(w.a)(we),
				Ae = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return s.a.createElement(Fe, ue({
						isOpen: t
					}, e))
				};
			Ae.WrappedComponent = we;
			var Me = Ae;
			const Be = Object(o.c)({
					activeTooltipId: g.a,
					currentUser: I.m,
					isLoggedIn: I.S,
					hideNSFWPref: I.H,
					moderatorPermissions: (e, t) => {
						let {
							subredditId: r
						} = t;
						return r ? Object(b.n)(e, {
							subredditId: r
						}) : void 0
					},
					prefersReducedAnimations: O.d,
					profile: (e, t) => {
						let {
							userName: r
						} = t;
						return Object(v.k)(e, {
							profileName: r
						})
					},
					topAwardIcon: (e, t) => {
						let {
							userName: r
						} = t;
						return Object(m.e)(e, {
							userName: r,
							minSize: 32
						})
					},
					user: I.Cb,
					userFlair: (e, t) => {
						let {
							subredditId: r
						} = t;
						return r ? Object(_.d)(e, {
							subredditId: r
						}) : void 0
					},
					isCurrentUserBanned: (e, t) => !!Object(h.p)(t) && Object(h.ib)(e, t),
					userProfileStyles: (e, t) => Object(x.m)(e, Object(v.o)(e, t.userName)),
					acceptChats: (e, t) => {
						const r = Object(v.i)(e, {
							profileName: t.userName
						});
						return !r || r.acceptChats
					},
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subredditId: r
						} = t;
						const n = Object(C.e)(e),
							s = r || n && Object(h.I)(e, n.name);
						return !!s && Object(b.i)(e, s)
					},
					trophyCase: (e, t) => Object(v.t)(e, Object(v.o)(e, t.userName)),
					isNightMode: I.fb,
					lastAuthorModNote: (e, t) => {
						if (!t.contextId) return;
						const r = Object(l.a)(t.contextId) ? Object(f.G)(e, {
							postId: t.contextId
						}) : Object(u.c)(e, {
							commentId: t.contextId
						});
						return Object(p.b)(e, null == r ? void 0 : r.authorId, t.subredditId)
					},
					userIsSubscriber: (e, t) => {
						let {
							userName: r
						} = t;
						return Object(h.jb)(e, {
							identifier: {
								name: r,
								type: "profile"
							}
						})
					}
				}),
				Le = Object(a.b)(Be, (e, t) => ({
					onClickSnoovatar: () => e(Object(d.b)({
						clickSource: "user_hovercard"
					})),
					onHideTooltip: () => e(Object(i.i)())
				}));
			t.a = Le(e => e.isModWithUserNotesPermissions ? s.a.createElement(j.b, {
				activeTooltipId: e.activeTooltipId,
				contextId: e.contextId,
				currentUser: e.currentUser,
				isLoggedIn: e.isLoggedIn,
				hideNSFWPref: e.hideNSFWPref,
				hoverId: e.hoverId,
				moderatorPermissions: e.moderatorPermissions,
				prefersReducedAnimations: e.prefersReducedAnimations,
				profile: e.profile,
				subredditId: e.subredditId,
				tooltipId: e.tooltipId,
				user: e.user,
				isCurrentUserBanned: e.isCurrentUserBanned,
				userName: e.userName,
				userProfileStyles: e.userProfileStyles,
				acceptChats: e.acceptChats,
				isCommentAuthorBlocked: e.isCommentAuthorBlocked,
				collapsed: e.collapsed,
				trophyCase: e.trophyCase,
				isNightMode: e.isNightMode,
				lastAuthorModNote: e.lastAuthorModNote,
				userIsSubscriber: e.userIsSubscriber
			}) : Object(c.a)(e.userName) ? null : s.a.createElement(Me, {
				activeTooltipId: e.activeTooltipId,
				contextId: e.contextId,
				currentUser: e.currentUser,
				isLoggedIn: e.isLoggedIn,
				hideNSFWPref: e.hideNSFWPref,
				hoverId: e.hoverId,
				moderatorPermissions: e.moderatorPermissions,
				onClickSnoovatar: e.onClickSnoovatar,
				prefersReducedAnimations: e.prefersReducedAnimations,
				profile: e.profile,
				sendEvent: e.sendEvent,
				subredditId: e.subredditId,
				topAwardIcon: e.topAwardIcon,
				tooltipId: e.tooltipId,
				tooltipType: e.tooltipType,
				user: e.user,
				userFlair: e.userFlair,
				isCurrentUserBanned: e.isCurrentUserBanned,
				userName: e.userName,
				userProfileStyles: e.userProfileStyles,
				acceptChats: e.acceptChats,
				isCommentAuthorBlocked: e.isCommentAuthorBlocked,
				collapsed: e.collapsed
			}))
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less": function(e, t, r) {
			e.exports = {
				icon: "xd9vrdS8_V6IVus6-mHAM"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				o = r("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				d = r("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = Object(d.c)(e => {
				const t = `${e.tooltipId}-hover-id`;
				return s.a.createElement(a.a, {
					className: e.wrapperClassName,
					hoverId: t,
					sendHoverEvent: e.sendHoverCardEvent,
					tooltipId: e.tooltipId,
					authorOrSubredditName: e.user
				}, e.children, s.a.createElement(o.a, {
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
		"./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less": function(e, t, r) {
			e.exports = {
				ChatButton: "_3OdnAY8EYU3x_Nni3KnKwI",
				chatButton: "_3OdnAY8EYU3x_Nni3KnKwI",
				UserIcon: "_3_NawY8A3QCHkZUHnxDxUP",
				userIcon: "_3_NawY8A3QCHkZUHnxDxUP",
				SubscribeButton: "yFByQg8RzENoqoOt0ysAk",
				subscribeButton: "yFByQg8RzENoqoOt0ysAk",
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
				KarmaGrid: "_1T5Mo-6GI-SCbGJJ9xZ2N7",
				karmaGrid: "_1T5Mo-6GI-SCbGJJ9xZ2N7",
				GenericKarma: "_1Tg84WxamVCCD1zg-nbbP8",
				genericKarma: "_1Tg84WxamVCCD1zg-nbbP8",
				KarmaCount: "_18aX_pAQub_mu1suz4-i8j",
				karmaCount: "_18aX_pAQub_mu1suz4-i8j",
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
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/config.ts"),
				o = r("./src/lib/prettyPrintNumber/index.ts"),
				d = r("./src/reddit/components/ProfileIdCard/index.m.less"),
				i = r.n(d);
			const {
				fbt: c
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			class l extends s.a.PureComponent {
				render() {
					const {
						topAwardIcon: e,
						recentAwardings: t,
						username: r
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: n,
						totalCount: d
					} = t, l = n.description ? n.description : n.name;
					return s.a.createElement("a", {
						className: i.a.AwardedLastMonth,
						href: `${a.a.oldRedditUrl}/user/${r}/gilded`
					}, s.a.createElement("div", {
						className: i.a.iconColumn
					}, s.a.createElement("img", {
						alt: l,
						className: i.a.icon,
						src: e
					}), d > 1 && s.a.createElement("span", {
						className: i.a.count
					}, `+${Object(o.b)(d-1)}`)), s.a.createElement("div", {
						className: i.a.textColumn
					}, c._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [c._param("award-name", n.name), c._plural(d)], {
						hk: "16MJHe"
					})))
				}
			}
			t.a = l
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less": function(e, t, r) {
			e.exports = {
				Banner: "_2ZyL7luKQghNeMnczY3gqW",
				banner: "_2ZyL7luKQghNeMnczY3gqW"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./src/reddit/models/Image/index.tsx"),
				d = r("./src/reddit/components/EditableImage/index.tsx"),
				i = r("./src/reddit/models/User/index.ts"),
				c = r("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				l = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				u = r.n(l);
			class m extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const r = await Object(o.e)(e);
						this.setState({
							isUpdating: !0
						}, async () => {
							await this.props.imageUpdateRequested(r, "profileBanner"), this.setState({
								isUpdating: !1
							})
						})
					}
				}
				render() {
					const {
						bannerUrl: e,
						className: t,
						currentUser: r,
						hideNSFWPref: s,
						isNSFW: o,
						userName: c
					} = this.props, {
						isUpdating: l
					} = this.state, m = e ? a.a.createElement("div", {
						className: u.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return r && Object(i.e)(r) === c ? a.a.createElement(d.a, {
						altText: n.fbt._("{userName} banner image", [n.fbt._param("userName", c)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: l,
						onFileSelected: this.updateProfileIcon
					}, m) : o && s ? null : m
				}
			}
			t.a = Object(c.a)(m)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/actions/preferences.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const d = Object(s.c)({
					currentUser: o.m,
					hideNSFWPref: o.H
				}),
				i = Object(n.b)(d, e => ({
					imageUpdateRequested: (t, r) => e(Object(a.B)(t, r))
				}));
			t.a = i
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/react-router/esm/react-router.js"),
				i = r("./src/reddit/actions/post.ts"),
				c = r("./src/reddit/actions/snoovatarModal.ts"),
				l = r("./src/reddit/components/TrackingHelper/index.tsx"),
				u = r("./src/reddit/controls/Button/index.tsx"),
				m = r("./src/reddit/helpers/trackers/snoovatar.ts"),
				b = r("./src/reddit/icons/svgs/Shirt/index.tsx"),
				p = r("./src/reddit/models/Vote/index.ts"),
				f = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				v = r.n(f);
			const {
				fbt: x
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(d.i)(e => {
				let {
					isHovercard: t,
					username: r,
					isAvatarPost: d,
					post: f,
					share: h
				} = e;
				const g = Object(l.b)(),
					I = Object(o.d)(),
					_ = f && f.id,
					O = f && f.voteState;
				let C = null;
				_ || (C = t ? "user_hovercard" : "profile_overview");
				const j = Object(s.useCallback)(() => g(Object(m.h)(t ? "user_hovercard" : "profile_overview", r)), [t, g, r]);
				return a.a.createElement(u.t, {
					onClick: () => {
						d ? (g(m.i), _ && O === p.a.notVoted && I(Object(i.ib)(_))) : j();
						const e = d ? "postify" : "copy";
						I(Object(c.b)({
							clickSource: C,
							share: h,
							source: e
						}))
					},
					className: Object(n.a)(v.a.snoovatarButton, v.a.snoovatarExtraPadding, v.a.compactButtonLayout, {
						[v.a.avatarPostifyButton]: d
					}),
					isFullWidth: !0
				}, a.a.createElement(b.a, {
					className: Object(n.a)({
						[v.a.shirtIcon]: !d,
						[v.a.avatarPostButtonShirtIcon]: d
					})
				}), x._("Try this Look", null, {
					hk: "dOuPb"
				}), a.a.createElement("div", {
					className: v.a.chevronIcon
				}))
			})
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/Button/index.tsx"),
				d = r("./src/reddit/icons/fonts/index.tsx"),
				i = r("./src/reddit/icons/svgs/Shirt/index.tsx"),
				c = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				l = r.n(c);
			const {
				fbt: u
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function(e) {
				let {
					compact: t,
					currentUserHasSnoovatar: r,
					className: n,
					isOwnProfile: c,
					onClick: m
				} = e;
				return s.a.createElement(o.t, {
					onClick: m,
					isFullWidth: !0,
					className: Object(a.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !r && c,
						[l.a.compactButtonLayout]: t
					}, n)
				}, r ? s.a.createElement(i.a, {
					className: l.a.shirtIcon
				}) : s.a.createElement("div", {
					className: l.a.shirtIcon
				}), r ? u._("Style Avatar", null, {
					hk: "UEtBO"
				}) : c ? u._("Create Avatar", null, {
					hk: "2pJgje"
				}) : u._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), r ? s.a.createElement("div", {
					className: l.a.chevronIcon
				}) : s.a.createElement(d.a, {
					name: "caret_right",
					className: l.a.chevronIcon
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less": function(e, t, r) {
			e.exports = {
				BannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				bannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				BannerImage: "_1IvROQ79nAJZ87_JkTFsLO",
				bannerImage: "_1IvROQ79nAJZ87_JkTFsLO"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				o = r("./src/reddit/icons/svgs/Close/index.tsx"),
				d = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				i = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				c = r.n(i),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				u = r.n(l);
			t.a = function(e) {
				let {
					bannerBackgroundImage: t,
					isNSFW: r,
					username: n,
					editMode: i,
					isDeletingBanner: l,
					onDeleteBanner: m
				} = e;
				return s.a.createElement("div", {
					className: c.a.bannerWrapper
				}, s.a.createElement(d.a, {
					bannerUrl: t,
					isNSFW: r,
					userName: n
				}), i && t && (l ? s.a.createElement(a.a, {
					sizePx: 20,
					className: u.a.loadingIcon
				}) : s.a.createElement(o.a, {
					className: u.a.closeIcon,
					onClick: m
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/reddit/controls/InternalLink/index.tsx"),
				o = r("./src/reddit/components/HumanDate/index.tsx");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: i
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function(e) {
				let {
					className: t,
					shouldDisplaySnoovatar: r,
					url: n,
					userCreated: i,
					username: c,
					...l
				} = e;
				const u = r ? s.a.createElement(s.a.Fragment, null, "u/", c, " · ", s.a.createElement(o.d, {
					seconds: i,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${c}`;
				return n ? s.a.createElement(a.default, d({}, l, {
					className: t,
					to: n
				}), u) : s.a.createElement("span", d({}, l, {
					className: t
				}), u)
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less": function(e, t, r) {
			e.exports = {
				loadingIcon: "_2DTxp6tzlJMeNlZ-cjXWTs",
				closeIcon: "_2ioQgcdZvYlf34S0OEqBuQ",
				settingsIcon: "A4Iifg_NCOrfabq0ON3mW"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/AvatarImage.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return _
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/classNames/index.ts"),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				d = r("./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts"),
				i = r("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				c = r("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				u = r.n(l);
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			const m = 25;

			function b(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function p(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const f = b("particleDelay", u.a),
				v = b("particleX", u.a),
				x = b("particleFloat", u.a),
				h = () => {
					const e = p(v),
						t = p(x),
						r = p(f);
					return Object(s.a)(u.a.particle, e, t, r)
				};
			class g extends o.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < m; t++) e.push(this.createParticle(t));
					return o.a.createElement("div", {
						role: "presentation",
						className: u.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return o.a.createElement("div", {
						key: e,
						className: `${h()}`
					})
				}
			}
			var I = g;
			const _ = e => {
				let {
					className: t,
					isGold: r,
					snoovatarUrl: a,
					prefersReducedAnimations: l,
					origin: m
				} = e;
				const b = a && Object(c.d)(a),
					p = m === i.a.Profile,
					f = m === i.a.Hovercard;
				return b ? o.a.createElement("div", {
					className: Object(s.a)({
						[u.a.profileTreatment]: p,
						[u.a.hovercardTreatment]: f
					})
				}, o.a.createElement("div", {
					className: u.a.nftProfileUnitContainer
				}, o.a.createElement(d.a, {
					className: u.a.nftProfileUnit,
					imageUrl: a,
					origin: m
				}))) : o.a.createElement("div", {
					className: Object(s.a)(u.a.snoovatarContainer, t)
				}, r && o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: u.a.topGlow
				}), o.a.createElement("div", {
					className: u.a.bottomGlow
				}), !l && o.a.createElement(I, null)), o.a.createElement("img", {
					className: Object(s.a)(u.a.snoovatar, {
						[u.a.premiumGlow]: r
					}),
					src: a,
					alt: n.fbt._("User Avatar", null, {
						hk: "3aQoRV"
					})
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				d = r("./src/reddit/icons/svgs/Admin/index.tsx"),
				i = r("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				c = r("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				u = r.n(l);
			t.a = e => {
				let {
					title: t,
					username: r,
					isEmployee: a,
					isGold: l,
					isNSFW: m
				} = e;
				return o.a.createElement("h1", {
					className: u.a.snoovatarUserTitle
				}, t || r, a && o.a.createElement(d.a, {
					className: u.a.snoovatarAdminIcon,
					title: s.fbt._("Reddit admin", null, {
						hk: "goUUb"
					})
				}), l && o.a.createElement("a", {
					title: s.fbt._("{username} has Reddit Premium", [s.fbt._param("username", r)], {
						hk: "3Fylv"
					}),
					href: `${n.a.redditUrl}/premium`
				}, o.a.createElement(c.a, {
					className: u.a.snoovatarPremiumIcon
				})), m && o.a.createElement(i.a, {
					className: u.a.snoovatarNsfwIcon,
					title: s.fbt._("NSFW - Adult Content", null, {
						hk: "2Iw7mN"
					})
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less": function(e, t, r) {
			e.exports = {
				snoovatarContainer: "_34XIqvI8-YT1wukR_W8vj6",
				profileTreatment: "_2xpFvOlDs0HF8bwR0pDmqt",
				hovercardTreatment: "_34eH8NsQ_ay5kowUWt9-6E",
				nftProfileUnitContainer: "OfvB_Czxn5wwXiBN6RVlG",
				nftProfileUnit: "n5OW4wkmX5R3yYizuJXw1",
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
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/controls/InternalLink/index.tsx"),
				d = r("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				i = r("./src/reddit/icons/fonts/index.tsx"),
				c = r("./src/reddit/selectors/experiments/econ/index.ts"),
				l = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				u = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				m = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				b = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				p = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				f = r.n(p),
				v = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				x = r.n(v),
				h = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/AvatarImage.tsx"),
				g = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = e => {
				let {
					bannerBackgroundImage: t,
					compact: r,
					currentUserHasSnoovatar: n,
					editMode: p,
					isDeletingBanner: v,
					isEmployee: I,
					isGold: _,
					isNSFW: O,
					isOwnProfile: C,
					onClickSnoovatar: j,
					onDeleteBanner: y,
					prefersReducedAnimations: N,
					snoovatarUrl: E,
					title: k,
					userCreated: P,
					username: S,
					url: U,
					isHovercard: w
				} = e;
				const F = Object(a.e)(e => !C && !!E && Object(c.d)(e));
				return s.a.createElement(s.a.Fragment, null, s.a.createElement(m.a, {
					bannerBackgroundImage: t,
					editMode: !!p,
					isNSFW: O,
					username: S,
					isDeletingBanner: !!v,
					onDeleteBanner: y
				}), !p && C && s.a.createElement(o.default, {
					to: "/settings/profile",
					className: f.a.snoovatarSettingsLink
				}, s.a.createElement(i.a, {
					name: "settings",
					className: x.a.settingsIcon
				})), s.a.createElement(h.a, {
					isGold: _,
					snoovatarUrl: E,
					prefersReducedAnimations: N,
					origin: w ? d.a.Hovercard : d.a.Profile
				}), s.a.createElement(g.a, {
					isEmployee: I,
					isGold: _,
					isNSFW: O,
					title: k,
					username: S
				}), s.a.createElement(b.a, {
					className: f.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: S,
					userCreated: P,
					url: U
				}), (C || !n && !!E) && s.a.createElement(l.a, {
					compact: r,
					currentUserHasSnoovatar: n,
					isOwnProfile: C,
					onClick: j
				}), F && s.a.createElement(u.a, {
					username: S,
					isHovercard: !!w,
					share: {
						username: S
					}
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, r) {
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
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, r) {
			"use strict";
			r.d(t, "k", (function() {
				return o
			})), r.d(t, "p", (function() {
				return d
			})), r.d(t, "n", (function() {
				return i
			})), r.d(t, "o", (function() {
				return c
			})), r.d(t, "m", (function() {
				return l
			})), r.d(t, "l", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "h", (function() {
				return b
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "g", (function() {
				return f
			})), r.d(t, "i", (function() {
				return v
			})), r.d(t, "e", (function() {
				return x
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "d", (function() {
				return I
			})), r.d(t, "j", (function() {
				return _
			}));
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				a = r.n(s);
			const o = n.a.section("FormPage", a.a),
				d = n.a.h1("HomePageTitle", a.a),
				i = n.a.button("HomePageBreadcrumb", a.a),
				c = n.a.div("HomePageGroup", a.a),
				l = n.a.h1("FormPageTitle", a.a),
				u = n.a.div("FormPageSection", a.a),
				m = n.a.div("FormGroup", a.a),
				b = n.a.h2("FormGroupTitle", a.a),
				p = n.a.div("FormElement", a.a),
				f = n.a.div("FormGroupDescription", a.a),
				v = n.a.div("FormItem", a.a),
				x = n.a.h3("FormElementTitle", a.a),
				h = n.a.div("FormElementDescription", a.a),
				g = n.a.div("FormElementError", a.a),
				I = n.a.div("FormElementSubGroup", a.a),
				_ = n.a.li("FormListItem", a.a)
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, r) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/fonts/index.tsx"),
				d = r("./src/reddit/controls/Checkbox/index.m.less"),
				i = r.n(d);
			t.a = e => s.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, s.a.createElement(o.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(a.a)({
					[i.a.redditStyle]: e.redditStyle,
					[i.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			class a extends s.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							r = this.props.multiple ? [...t] : t[0];
						this.props.onChange(r), this.setState(() => ({
							value: r
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
					} = this, r = "string" == typeof t.value ? t.value : "", n = "object" == typeof t.value ? t.value : null, a = r || n;
					return s.a.createElement("div", {
						className: e.className
					}, r && s.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: r,
						tabIndex: e.tabIndex
					}), (!a || e.multiple || void 0 !== e.isPending && !e.isPending) && s.a.createElement("input", {
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
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, r) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				d = r.n(o);
			t.a = e => {
				let {
					center: t,
					className: r,
					sizePx: n = 10
				} = e;
				return s.a.createElement("div", {
					className: Object(a.a)(d.a.loadingIcon, r, {
						[d.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${n}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/helpers/author.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = e => !!e && e.endsWith("-ModTeam")
		},
		"./src/reddit/helpers/trackers/subredditMuting.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return o
			}));
			var n = r("./src/reddit/selectors/telemetry.ts"),
				s = r("./src/telemetry/models/Event.ts");
			const a = e => {
					let {
						subredditId: t,
						postId: r
					} = e;
					return e => ({
						source: s.f.SubredditMuting,
						action: s.d.Mute,
						noun: s.e.Subreddit,
						subreddit: {
							id: t
						},
						...n.o(e),
						...r && {
							post: {
								id: r
							}
						}
					})
				},
				o = e => {
					let {
						subredditId: t,
						postId: r
					} = e;
					return e => ({
						source: s.f.SubredditMuting,
						action: s.d.Unmute,
						noun: s.e.Subreddit,
						subreddit: {
							id: t
						},
						...n.o(e),
						...r && {
							post: {
								id: r
							}
						}
					})
				}
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(a.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, r) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/svgs/Admin/index.m.less"),
				d = r.n(o);
			t.a = e => s.a.createElement("svg", {
				className: Object(a.a)(e.className, d.a.admin, {
					[d.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && s.a.createElement("title", null, e.title), e.desc && s.a.createElement("desc", null, e.desc), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), s.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, s.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/PremiumCircle/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("rect", {
				width: "20",
				height: "20",
				rx: "10",
				fill: "url(#gradient)"
			}), s.a.createElement("path", {
				d: "M12.121 13.471c-1.007.146-1.73.445-2.121.643v-3.068a1.2 1.2 0 00-1.2-1.2H6.53c.027-.292.046-.61.046-.978 0-1.015-.294-1.78-.53-2.233l.834-.834H10v2.845a1.2 1.2 0 001.2 1.2h2.27c.036.402.086.749.132 1.045.058.38.109.706.109 1.047 0 .627-.497 1.375-1.59 1.533zm3.017-7.35l-1.345-1.345a.6.6 0 00-.425-.175H6.632a.6.6 0 00-.425.175L4.862 6.122a.6.6 0 00-.042.802c.006.006.556.72.556 1.944 0 .783-.087 1.344-.164 1.84-.064.41-.124.797-.124 1.23 0 1.163.9 2.471 2.619 2.72 1.251.183 1.952.638 1.956.64a.61.61 0 00.67.002c.007-.004.709-.46 1.96-.642 1.719-.249 2.618-1.557 2.618-2.72 0-.433-.06-.82-.124-1.23a11.026 11.026 0 01-.163-1.84c0-1.22.536-1.919.556-1.944a.6.6 0 00-.042-.802z",
				fill: "#fff"
			}), s.a.createElement("defs", null, s.a.createElement("linearGradient", {
				id: "gradient",
				x1: "0",
				y1: "20",
				x2: "20.021",
				y2: "19.979",
				gradientUnits: "userSpaceOnUse"
			}, s.a.createElement("stop", {
				stopColor: "#EC0623"
			}), s.a.createElement("stop", {
				offset: "1",
				stopColor: "#FF8717"
			}))))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = function(e) {
				let {
					className: t
				} = e;
				return s.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, s.a.createElement("g", {
					fill: "inherit"
				}, s.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/selectors/experiments/antievil/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => {
				return Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.D
				}) === n.Id
			}
		},
		"./src/redditGQL/operations/DeleteSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"c518a45f60a5"}')
		},
		"./src/redditGQL/operations/MutedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"c09ff0d041c1"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"2620d72fd633"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"432f6b475ece"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Settings~SubredditWiki.9cb4c425c7ca9fdbb73e.js.map