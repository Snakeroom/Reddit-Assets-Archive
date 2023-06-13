// https://www.redditstatic.com/desktop2x/Settings~SubredditWiki.a48e136b118af57ab9c4.js
// Retrieved at 6/13/2023, 3:50:04 PM by Reddit Dataminer v1.0.0
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
				return C
			})), r.d(t, "i", (function() {
				return O
			}));
			var n = r("./node_modules/linkify-it/index.js"),
				s = r.n(n),
				a = r("./node_modules/tlds/index.js"),
				o = r.n(a),
				i = r("./src/lib/linkMatchers/customLinks.ts"),
				d = r("./node_modules/lodash/values.js"),
				c = r.n(d);
			const l = e => c()(i.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				b = s()().tlds(o.a).set({
					fuzzyIP: !0
				}),
				p = s()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.mention.prefix, i.g.mention.config),
				f = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config),
				v = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config),
				x = s()().tlds(o.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config).add(i.g.mention.prefix, i.g.mention.config),
				h = s()().tlds(o.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subredditFullUrl.config).add(i.g.subredditFull.prefix, i.g.subredditFullUrl.config),
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
					return [...v.match(e) || [], ...p.match(e) || []].map(e => !l(e.text) && e.text.replace(i.a, "")).filter(e => e)
				},
				C = (e, t) => {
					const r = e.match(t);
					if (r && 1 === r.length && 0 === r[0].index && r[0].lastIndex === t.length) return r[0]
				},
				O = e => {
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
				return d
			}));
			var n = r("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				s = r("./src/reddit/helpers/routeKey/index.ts"),
				a = r("./src/reddit/helpers/trackers/screenview.ts"),
				o = r("./src/telemetry/index.ts"),
				i = r("./src/telemetry/models/Timer.ts");
			const d = () => async (e, t) => {
				const r = t(),
					{
						currentPage: d
					} = r.platform;
				if (!d) return;
				const c = d.routeMatch,
					l = Object(n.a)(r),
					u = Object(s.b)(c, r, l);
				u && o.c.has(u) && Object(a.j)(c, r, i.TimerType.InApp, o.c.end(u))
			}
		},
		"./src/reddit/actions/subreddit/muting.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return N
			})), r.d(t, "d", (function() {
				return k
			})), r.d(t, "e", (function() {
				return S
			})), r.d(t, "g", (function() {
				return P
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
				i = r("./src/redditGQL/operations/DeleteSubredditMuteSettings.json"),
				d = r("./src/redditGQL/operations/MutedSubreddits.json"),
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
					...i,
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
				C = Object(s.a)(p.h),
				O = Object(s.a)(p.G),
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
						var i, d;
						const c = await u(o(), t);
						if (c.ok && c.body && (null === (d = null === (i = c.body) || void 0 === i ? void 0 : i.data.updateSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) n && n(), e(h(r, E({
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
						var i, d;
						const c = await m(o(), t);
						if (c.ok && c.body && (null === (d = null === (i = c.body) || void 0 === i ? void 0 : i.data.deleteSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) n && n(), e(g(r, N({
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
						var i, d;
						const c = await u(o(), t);
						if (c.ok && c.body && (null === (d = null === (i = c.body) || void 0 === i ? void 0 : i.data.updateSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) n && n(), e(Object(f.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !0
								}
							}
						})), e(h(r, S({
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
						subredditName: r,
						successCallback: n
					} = e;
					return async (e, s, a) => {
						let {
							gqlContext: o
						} = a;
						var i, d;
						const c = await m(o(), t);
						if (c.ok && c.body && (null === (d = null === (i = c.body) || void 0 === i ? void 0 : i.data.deleteSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) n && n(), e(Object(f.c)({
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
				P = e => {
					let {
						subredditId: t,
						notificationLevel: r
					} = e;
					return async (e, s, i) => {
						let {
							gqlContext: d
						} = i;
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
							}))(d(), t, m);
						p.ok && p.body && (null === (u = null === (l = p.body) || void 0 === l ? void 0 : l.data.updateSubredditMuteAndNotificationLevelSettings) || void 0 === u ? void 0 : u.ok) ? (e(O({
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
					const i = await (e => Object(o.a)(e, d))(s());
					if (i.ok && i.body && i.body.data) {
						const {
							data: t
						} = i.body, r = (t && t.identity.mutedSubreddits).edges.map(e => e.node);
						e(_({
							nodes: r
						}))
					} else e(C()), e(Object(a.f)({
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
						var o, i;
						const d = await m(a(), t);
						if (d.ok && d.body && (null === (i = null === (o = d.body) || void 0 === o ? void 0 : o.data.deleteSubredditMuteSettings) || void 0 === i ? void 0 : i.ok)) e(j(t)), e(g(r));
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
						var i, d;
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
						if (_.ok && _.body && (null === (d = null === (i = _.body) || void 0 === i ? void 0 : i.data.updateSubredditMuteSettings) || void 0 === d ? void 0 : d.ok)) e(y([f])), e(h(f.name));
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
				i = r("./src/reddit/actions/subreddit/constants.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = r("./src/reddit/models/Subreddit/index.ts"),
				u = r("./src/reddit/models/Toast/index.ts");
			const m = Object(s.a)(i.z),
				b = Object(s.a)(i.y),
				p = Object(s.a)(i.x),
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
					undoCallback: i
				} = e;
				return async (e, l, x) => {
					let {
						gqlContext: h
					} = x;
					var g, I, _;
					e(b());
					const C = f(r),
						O = await Object(c.b)(h(), t, C);
					if ((null === (I = null === (g = O.error) || void 0 === g ? void 0 : g.fields) || void 0 === I ? void 0 : I.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(O.body) && (null === (_ = O.body.data.updateSubredditNotificationSettings.errors) || void 0 === _ ? void 0 : _.length)) return e(p()), e(Object(d.f)({
						kind: u.b.Error,
						text: n.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					O.ok && (e(Object(a.c)({
						subredditId: t,
						notificationLevel: r
					})), e(m({
						subredditAboutInfo: {
							[t]: {
								notificationLevel: r
							}
						}
					})), s && s(), e(i ? Object(d.f)(Object(d.e)(v(r), u.b.Undo, n.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(o.i)(t, i))) : Object(d.f)(Object(d.e)(v(r), u.b.SuccessCommunityGreen))))
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
				return ie
			})), r.d(t, "a", (function() {
				return de
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/get.js"),
				a = r.n(s),
				o = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/apiRequestState.ts"),
				d = r("./src/reddit/actions/modal.ts"),
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
				C = r("./src/reddit/selectors/activeModalId.ts"),
				O = r("./src/reddit/selectors/bannedUser.ts"),
				j = r("./src/reddit/selectors/subreddit.ts"),
				y = r("./src/reddit/selectors/user.ts"),
				N = r("./src/reddit/actions/subredditModeration/constants.ts"),
				E = r("./src/lib/initializeClient/installReducer.ts"),
				k = r("./node_modules/redux/es/redux.js");
			var S = function() {
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
			const P = {};
			var U = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P,
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
					error: S,
					pending: U
				});
			const F = {};
			var M = function() {
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
				A = r("./src/reddit/actions/inContextModeration.ts");
			var B = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case A.a:
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
			const W = {};
			var R = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : W,
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
			var D = function() {
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
			var G = function() {
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
				z = Object(k.c)({
					error: D,
					pending: G
				});
			var Q = function() {
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
				J = Object(k.c)({
					api: z,
					result: Q
				});
			const K = {};
			var q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K,
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
					fetchedTokens: M,
					inContext: B,
					loadMore: T,
					models: R,
					search: J,
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
							i = t.after || "",
							d = Object(I.e)(e, i),
							c = o.features.banned.fetchedTokens[d];
						if (o.features.banned.api.pending[d] || c) return;
						r(Y({
							subredditId: e,
							fetchedToken: i
						}));
						const l = o.subreddits.models[e].name,
							u = await h(a(), l, t);
						u.ok ? r(Z({
							...u.body,
							fetchedToken: i
						})) : r(V({
							subredditId: e,
							fetchedToken: i
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
						i = {
							username: Object(g.a)(t)
						};
					r(ee());
					const d = await h(a(), o, i);
					d.ok ? r(te(d.body)) : r(re(d.error))
				}, se = Object(o.a)(N.p), ae = Object(o.a)(N.w), oe = (e, t, r) => async (s, o, d) => {
					let {
						apiContext: c
					} = d;
					const u = o(),
						x = u.subreddits.models[e].url,
						I = u.subreddits.models[e].name;
					t.username = Object(g.a)(t.username), s(Object(i.h)(r));
					const C = await ((e, t, r) => Object(b.a)(Object(p.a)(e, [f.a]), {
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
					if (C.ok) {
						s(Object(i.e)(r));
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
						s(Object(i.f)(r, C.error));
						const e = a()(C, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						s(Object(l.f)({
							kind: _.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ie = (e, t) => async (r, s, o) => {
					let {
						apiContext: i
					} = o;
					const d = s().subreddits.models[e].url,
						c = await ((e, t, r) => Object(b.a)(Object(p.a)(e, [f.a]), {
							endpoint: Object(v.a)(`${e.apiUrl}${t}api/unfriend`),
							method: m.ob.POST,
							data: {
								api_type: "json",
								id: r,
								type: "banned"
							}
						}))(i(), d, t);
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
				}, de = (e, t) => async (r, n) => {
					const s = n();
					await Promise.all([(async () => {
						if (!Object(C.b)(u.a.BAN_USER)(s) && !Object(j.U)(s, {
								subredditId: e
							})) {
							const t = Object(j.X)(s, {
								subredditId: e
							});
							await r(Object(c.o)(t.name))
						}
					})(), (async () => {
						const n = Object(y.Db)(s, {
							userName: t
						});
						if (!n) return;
						const a = Object(O.h)(s, {
							subredditId: e
						});
						a && a[n.id] || await r($(e, {
							username: t
						}))
					})()]), r(Object(d.i)(u.a.BAN_USER))
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
				i = r("./src/reddit/components/CharacterCountdown/index.m.less"),
				d = r.n(i);
			const {
				fbt: c
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => s.a.createElement(o.b, {
				className: Object(a.a)(e.className, d.a.container, e.text.length >= e.maxChars ? d.a.mOverflow : null)
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
				i = r("./src/reddit/actions/chat/toggle.ts"),
				d = r("./src/reddit/components/TrackingHelper/index.tsx"),
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
					contextId: i,
					priority: d,
					Icon: u,
					redditStyle: m,
					isFullWidth: b,
					eventSource: p,
					onClick: f,
					onAddUserToQuickReplyList: v,
					children: x,
					style: h,
					pageType: g,
					userId: I
				} = e;
				return a.a.createElement(c.t, {
					onClick: e => {
						if (f && f(e), t(g), p === n.awardNotification) return v();
						o(Object(l.b)(i))
					},
					className: s,
					text: r,
					priority: d,
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
					onStartChat: t => {
						e(Object(i.b)(n, r, t))
					},
					onAddUserToQuickReplyList: () => {
						e(Object(i.a)(n))
					}
				}
			});
			t.b = m(Object(d.c)(u))
		},
		"./src/reddit/components/Econ/Marketplace/CollectiblesShowcaseUnit/async.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(n.a)({
				resolved: {},
				chunkName: () => "CollectiblesShowcaseUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => Promise.all([r.e("vendors~Avatar~CollectiblesShowcaseUnit~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceCla~cd1771e1"), r.e("vendors~Avatar~ChatPost~CollectiblesShowcaseUnit~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProf~7d152600"), r.e("vendors~Avatar~CollectiblesShowcaseUnit~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~S~bb3e1fe2"), r.e("CollectiblesShowcaseUnit")]).then(r.bind(null, "./src/reddit/components/Econ/Marketplace/CollectiblesShowcaseUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Marketplace/CollectiblesShowcaseUnit/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = s
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
				importAsync: () => Promise.all([r.e("vendors~Avatar~CollectiblesShowcaseUnit~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceCla~cd1771e1"), r.e("vendors~Avatar~ChatPost~CollectiblesShowcaseUnit~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProf~7d152600"), r.e("vendors~Avatar~CollectiblesShowcaseUnit~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~S~bb3e1fe2"), r.e("NftProfileUnit")]).then(r.bind(null, "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx")),
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
				i = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				d = r("./src/reddit/icons/fonts/index.tsx"),
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
				}, s.a.createElement(d.a, {
					name: "add_media",
					className: u.a.EditIcon
				}))), m && s.a.createElement(i.a, {
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
				i = r("./src/reddit/actions/snoovatarModal.ts"),
				d = r("./src/reddit/actions/tooltip.ts"),
				c = r("./src/reddit/helpers/author.ts"),
				l = r("./src/reddit/helpers/isPost.ts"),
				u = r("./src/reddit/helpers/trackers/marketplace/display-collectibles.ts"),
				m = r("./src/reddit/selectors/commentSelector.ts"),
				b = r("./src/reddit/selectors/experiments/econ/index.ts"),
				p = r("./src/reddit/selectors/gold/awardIcon.ts"),
				f = r("./src/reddit/selectors/moderatorPermissions.ts"),
				v = r("./src/reddit/selectors/modUserNotes.ts"),
				x = r("./src/reddit/selectors/posts.ts"),
				h = r("./src/reddit/selectors/profile.ts"),
				g = r("./src/reddit/selectors/structuredStyles.ts"),
				I = r("./src/reddit/selectors/subreddit.ts"),
				_ = r("./src/reddit/selectors/tooltip.ts"),
				C = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/selectors/userFlair.ts"),
				j = r("./src/reddit/selectors/userPrefs.ts"),
				y = r("./src/reddit/selectors/platform.ts"),
				N = r("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				E = r("./node_modules/fbt/lib/FbtPublic.js"),
				k = r("./src/config.ts"),
				S = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				P = r("./src/lib/lessComponent.tsx"),
				U = r("./src/lib/prettyPrintNumber/index.ts"),
				w = r("./src/reddit/components/ChatButton/index.tsx"),
				F = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				M = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				A = r("./src/reddit/components/SubscribeButton/index.tsx"),
				B = r("./src/reddit/components/UserIcon/index.tsx"),
				L = r("./src/reddit/controls/Button/index.tsx"),
				T = r("./src/reddit/endpoints/profile/info.ts"),
				H = r("./src/reddit/helpers/trackers/authorHovercard.ts"),
				W = r("./src/reddit/icons/svgs/Admin/index.tsx"),
				R = r("./src/reddit/icons/svgs/Premium/index.tsx"),
				D = r("./src/reddit/models/User/index.ts"),
				G = r("./src/reddit/components/HumanDate/index.tsx"),
				z = r("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				Q = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx"),
				J = r("./src/reddit/actions/inContextModeration.ts"),
				K = r("./src/reddit/actions/modal.ts"),
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
				hasModMailPermissions: Object(f.b)(V.c.mail),
				isUserBanned: (e, t) => !!Object($.b)(e, {
					subredditId: t.subredditId,
					username: t.username
				}),
				user: (e, t) => Object(C.Db)(e, {
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
						toggleBanModal: i,
						toggleMuteModal: d
					} = this.props;
					return s.a.createElement("div", {
						className: e
					}, n ? s.a.createElement(Y.a, {
						role: "button",
						onClick: () => {
							a(this.props.user.id), o(H.e(t))
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
							i(), o(H.a(t))
						}
					}, s.a.createElement(Z.a, {
						name: "ban",
						className: te.a.icon
					}), re._("Ban User", null, {
						hk: "3OhuLx"
					})), r && s.a.createElement(Y.a, {
						role: "button",
						onClick: () => {
							d(), o(H.d(t))
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
							e(Object(J.c)({
								username: r,
								subredditId: n,
								contextId: s
							})), e(Object(q.a)(n, r))
						},
						toggleMuteModal: () => {
							e(Object(J.d)({
								username: r,
								subredditId: n,
								contextId: s
							})), e(Object(K.i)(X.a.MUTE_USER))
						}
					}
				})(se),
				oe = r("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: ie
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var de = Object(a.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(oe.g)(t.subredditId, t.username))
				}))(e => s.a.createElement(Y.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(H.c(e.contextId))
					}
				}, s.a.createElement(Z.a, {
					name: "tag",
					className: te.a.icon
				}), ie._("Edit user flair", null, {
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
			const me = P.a.wrapped(B.a, "UserIcon", le.a),
				be = P.a.wrapped(A.a, "SubscribeButton", le.a),
				pe = P.a.wrapped(w.b, "ChatButton", le.a),
				fe = P.a.wrapped(R.a, "PremiumIcon", le.a),
				ve = P.a.wrapped(S.a, "UserNameLink", le.a),
				xe = P.a.div("UserNameMetaData", le.a),
				he = P.a.div("MetaDataItem", le.a),
				ge = P.a.div("Bullet", le.a),
				Ie = P.a.div("UserNameContainer", le.a),
				_e = P.a.div("KarmaGrid", le.a),
				Ce = P.a.div("GenericKarma", le.a),
				Oe = P.a.div("KarmaCount", le.a),
				je = P.a.div("GenericKarmaLabel", le.a),
				ye = P.a.div("BannerImage", le.a),
				Ne = P.a.div("UserContainer", le.a),
				Ee = P.a.div("BottomSpacer", le.a),
				ke = P.a.div("Container", le.a),
				Se = e => s.a.createElement("div", null, s.a.createElement("div", null, s.a.createElement(ve, {
					to: `/user/${e.userName}/`
				}, e.title || e.userName), e.user.isEmployee && s.a.createElement(W.a, {
					className: le.a.adminIcon,
					title: E.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && s.a.createElement(S.a, {
					to: "/premium"
				}, s.a.createElement(fe, null))), s.a.createElement(xe, null, s.a.createElement(he, null, `u/${e.userName}`, s.a.createElement(ge, null, "•")), s.a.createElement(he, null, (e.user.createdUtc || e.user.created) && s.a.createElement(G.d, {
					seconds: e.user.createdUtc || e.user.created
				})))),
				Pe = e => {
					const {
						user: {
							karma: t
						}
					} = e, r = {
						...T.a,
						...t
					};
					return s.a.createElement(_e, null, s.a.createElement(Ce, null, s.a.createElement(Oe, null, Object(U.b)(r.fromPosts)), s.a.createElement(je, null, E.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [E.fbt._plural(r.fromPosts)], {
						hk: "3K4oaH"
					}))), s.a.createElement(Ce, null, s.a.createElement(Oe, null, Object(U.b)(r.fromComments)), s.a.createElement(je, null, E.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [E.fbt._plural(r.fromComments)], {
						hk: "3gKRx9"
					}))))
				},
				Ue = e => {
					var t, r;
					const {
						className: n,
						contextId: a,
						currentUser: o,
						hideNSFWPref: i,
						hoverId: d,
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
						userProfileStyles: C,
						acceptChats: O,
						isCommentAuthorBlocked: j
					} = e;
					if (!g) return s.a.createElement(ke, {
						style: f
					});
					const y = !!o && Object(D.e)(o) === h,
						N = !!(null == o ? void 0 : o.snoovatarFullBodyAsset),
						S = g.accountIcon || `${k.a.assetPath}/img/snoo_user_placeholder.png`,
						P = null == u ? void 0 : u.flair,
						U = null == u ? void 0 : u.access,
						w = (null == I ? void 0 : I.templateIds) && (null === (t = null == I ? void 0 : I.templateIds) || void 0 === t ? void 0 : t.length) > 0,
						M = null === (r = null == I ? void 0 : I.displaySettings) || void 0 === r ? void 0 : r.isEnabled,
						{
							awardedLastMonth: A
						} = g,
						B = !!g.snoovatarFullBodyAsset,
						T = g.isNSFW && i;
					let W;
					return W = B ? !T && C && C.bannerBackgroundImage || void 0 : T ? `${k.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, s.a.createElement(ke, {
						className: n,
						id: d,
						style: f
					}, !B && W && s.a.createElement(ye, {
						style: {
							backgroundImage: `url('${W}')`
						}
					}), s.a.createElement(Ne, null, B ? s.a.createElement(Q.a, {
						isHovercard: !0,
						bannerBackgroundImage: W,
						compact: !0,
						currentUserHasSnoovatar: N,
						isEmployee: g.isEmployee,
						isGold: g.isGold,
						isNSFW: g.isNSFW,
						isOwnProfile: y,
						onClickSnoovatar: () => l && l(),
						prefersReducedAnimations: !!m,
						snoovatarUrl: g.snoovatarFullBodyAsset,
						title: null == b ? void 0 : b.title,
						userCreated: g.created,
						username: h,
						url: `/user/${e.userName}/`
					}) : s.a.createElement(Ie, null, s.a.createElement(me, {
						iconUrl: S,
						isNSFW: g.isNSFW,
						userName: h
					}), s.a.createElement(Se, {
						title: null == b ? void 0 : b.title,
						user: g,
						userName: h
					})), s.a.createElement(Pe, {
						user: g
					}), A && s.a.createElement(z.a, {
						recentAwardings: A,
						topAwardIcon: x,
						username: h
					}), c && !y && !_ && O && !j && s.a.createElement(pe, {
						contextId: a,
						priority: L.c.Secondary,
						userId: g.id,
						text: E.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0,
						pageType: "user_hovercard"
					}), g.hasUserProfile && !_ && !j && !y && g.enableFollowers && s.a.createElement(be, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(H.h)(e ? "unfollow" : "follow", a),
						isFullWidth: !0,
						small: !0
					})), U && a && !y && v && s.a.createElement(ae, {
						contextId: a,
						subredditId: v,
						sendEvent: p,
						username: h
					}), P && a && w && M && v && s.a.createElement(de, {
						contextId: a,
						subredditId: v,
						sendEvent: p,
						username: h
					}), s.a.createElement(F.i, {
						contextId: a,
						subredditId: v,
						user: g
					}), !(U || c) && s.a.createElement(Ee, null))
				},
				we = Object(M.a)(Ue),
				Fe = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return s.a.createElement(we, ue({
						isOpen: t
					}, e))
				};
			Fe.WrappedComponent = Ue;
			var Me = Fe;
			const Ae = Object(o.c)({
					activeTooltipId: _.a,
					currentUser: C.m,
					isLoggedIn: C.S,
					hideNSFWPref: C.H,
					moderatorPermissions: (e, t) => {
						let {
							subredditId: r
						} = t;
						return r ? Object(f.n)(e, {
							subredditId: r
						}) : void 0
					},
					prefersReducedAnimations: j.d,
					profile: (e, t) => {
						let {
							userName: r
						} = t;
						return Object(h.k)(e, {
							profileName: r
						})
					},
					topAwardIcon: (e, t) => {
						let {
							userName: r
						} = t;
						return Object(p.e)(e, {
							userName: r,
							minSize: 32
						})
					},
					user: C.Db,
					userFlair: (e, t) => {
						let {
							subredditId: r
						} = t;
						return r ? Object(O.d)(e, {
							subredditId: r
						}) : void 0
					},
					isCurrentUserBanned: (e, t) => !!Object(I.p)(t) && Object(I.ib)(e, t),
					userProfileStyles: (e, t) => Object(g.m)(e, Object(h.o)(e, t.userName)),
					acceptChats: (e, t) => {
						const r = Object(h.i)(e, {
							profileName: t.userName
						});
						return !r || r.acceptChats
					},
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subredditId: r
						} = t;
						const n = Object(y.e)(e),
							s = r || n && Object(I.I)(e, n.name);
						return !!s && Object(f.i)(e, s)
					},
					trophyCase: (e, t) => Object(h.t)(e, Object(h.o)(e, t.userName)),
					isNightMode: C.fb,
					lastAuthorModNote: (e, t) => {
						if (!t.contextId) return;
						const r = Object(l.a)(t.contextId) ? Object(x.F)(e, {
							postId: t.contextId
						}) : Object(m.c)(e, {
							commentId: t.contextId
						});
						return Object(v.b)(e, null == r ? void 0 : r.authorId, t.subredditId)
					},
					userIsSubscriber: (e, t) => {
						let {
							userName: r
						} = t;
						return Object(I.jb)(e, {
							identifier: {
								name: r,
								type: "profile"
							}
						})
					}
				}),
				Be = Object(a.b)(Ae, (e, t) => ({
					onClickSnoovatar: () => e(Object(i.b)({
						clickSource: "user_hovercard"
					})),
					onHideTooltip: () => e(Object(d.i)())
				})),
				Le = e => e.isModWithUserNotesPermissions ? s.a.createElement(N.b, {
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
				});
			t.a = Be(e => {
				const t = Object(a.e)(b.o);
				return Object(n.useEffect)(() => {
					e.user && Object(u.a)({
						sendEvent: e.sendEvent,
						user: e.user,
						pageType: "user_hovercard",
						isDisplayCollectiblesEnabled: t
					})
				}, [e.user]), s.a.createElement(Le, e)
			})
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
				i = r("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = Object(i.c)(e => {
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
				i = r("./src/reddit/components/ProfileIdCard/index.m.less"),
				d = r.n(i);
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
						totalCount: i
					} = t, l = n.description ? n.description : n.name;
					return s.a.createElement("a", {
						className: d.a.AwardedLastMonth,
						href: `${a.a.oldRedditUrl}/user/${r}/gilded`
					}, s.a.createElement("div", {
						className: d.a.iconColumn
					}, s.a.createElement("img", {
						alt: l,
						className: d.a.icon,
						src: e
					}), i > 1 && s.a.createElement("span", {
						className: d.a.count
					}, `+${Object(o.b)(i-1)}`)), s.a.createElement("div", {
						className: d.a.textColumn
					}, c._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [c._param("award-name", n.name), c._plural(i)], {
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
				i = r("./src/reddit/components/EditableImage/index.tsx"),
				d = r("./src/reddit/models/User/index.ts"),
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
					return r && Object(d.e)(r) === c ? a.a.createElement(i.a, {
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
			const i = Object(s.c)({
					currentUser: o.m,
					hideNSFWPref: o.H
				}),
				d = Object(n.b)(i, e => ({
					imageUpdateRequested: (t, r) => e(Object(a.B)(t, r))
				}));
			t.a = d
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/react-router/esm/react-router.js"),
				d = r("./src/reddit/actions/post.ts"),
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
			t.a = Object(i.i)(e => {
				let {
					isHovercard: t,
					username: r,
					isAvatarPost: i,
					post: f,
					share: h
				} = e;
				const g = Object(l.b)(),
					I = Object(o.d)(),
					_ = f && f.id,
					C = f && f.voteState;
				let O = null;
				_ || (O = t ? "user_hovercard" : "profile_overview");
				const j = Object(s.useCallback)(() => g(Object(m.h)(t ? "user_hovercard" : "profile_overview", r)), [t, g, r]);
				return a.a.createElement(u.t, {
					onClick: () => {
						i ? (g(m.i), _ && C === p.a.notVoted && I(Object(d.ib)(_))) : j();
						const e = i ? "postify" : "copy";
						I(Object(c.b)({
							clickSource: O,
							share: h,
							source: e
						}))
					},
					className: Object(n.a)(v.a.snoovatarButton, v.a.snoovatarExtraPadding, v.a.compactButtonLayout, {
						[v.a.avatarPostifyButton]: i
					}),
					isFullWidth: !0
				}, a.a.createElement(b.a, {
					className: Object(n.a)({
						[v.a.shirtIcon]: !i,
						[v.a.avatarPostButtonShirtIcon]: i
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
				i = r("./src/reddit/icons/fonts/index.tsx"),
				d = r("./src/reddit/icons/svgs/Shirt/index.tsx"),
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
				}, r ? s.a.createElement(d.a, {
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
				}) : s.a.createElement(i.a, {
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
				i = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				d = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				c = r.n(d),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				u = r.n(l);
			t.a = function(e) {
				let {
					bannerBackgroundImage: t,
					isNSFW: r,
					username: n,
					editMode: d,
					isDeletingBanner: l,
					onDeleteBanner: m
				} = e;
				return s.a.createElement("div", {
					className: c.a.bannerWrapper
				}, s.a.createElement(i.a, {
					bannerUrl: t,
					isNSFW: r,
					userName: n
				}), d && t && (l ? s.a.createElement(a.a, {
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

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function(e) {
				let {
					className: t,
					shouldDisplaySnoovatar: r,
					url: n,
					userCreated: d,
					username: c,
					...l
				} = e;
				const u = r ? s.a.createElement(s.a.Fragment, null, "u/", c, " · ", s.a.createElement(o.d, {
					seconds: d,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${c}`;
				return n ? s.a.createElement(a.default, i({}, l, {
					className: t,
					to: n
				}), u) : s.a.createElement("span", i({}, l, {
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
				return j
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/classNames/index.ts"),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				i = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/reddit/components/Econ/Marketplace/CollectiblesShowcaseUnit/async.ts"),
				c = r("./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts"),
				l = r("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				u = r("./src/reddit/helpers/userSnoovatar/index.ts"),
				m = r("./src/reddit/selectors/experiments/econ/index.ts"),
				b = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				p = r.n(b);
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			const f = 25;

			function v(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function x(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const h = v("particleDelay", p.a),
				g = v("particleX", p.a),
				I = v("particleFloat", p.a),
				_ = () => {
					const e = x(g),
						t = x(I),
						r = x(h);
					return Object(s.a)(p.a.particle, e, t, r)
				};
			class C extends o.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < f; t++) e.push(this.createParticle(t));
					return o.a.createElement("div", {
						role: "presentation",
						className: p.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return o.a.createElement("div", {
						key: e,
						className: `${_()}`
					})
				}
			}
			var O = C;
			const j = e => {
				let {
					className: t,
					isGold: r,
					snoovatarUrl: a,
					prefersReducedAnimations: b,
					origin: f,
					userName: v
				} = e;
				const x = a && Object(u.d)(a),
					h = f === l.a.Profile,
					g = f === l.a.Hovercard,
					I = Object(i.e)(m.o);
				return x ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: Object(s.a)({
						[p.a.profileTreatment]: h,
						[p.a.hovercardTreatment]: g
					})
				}, o.a.createElement("div", {
					className: Object(s.a)(p.a.nftProfileUnitContainer, {
						[p.a.nftProfileUnitContainerWithoutCta]: I
					})
				}, o.a.createElement(c.a, {
					className: p.a.nftProfileUnit,
					imageUrl: a,
					origin: f,
					showDetailsCta: !I
				}))), I && o.a.createElement("div", {
					className: p.a.showcase
				}, o.a.createElement(d.a, {
					origin: f,
					userName: v
				}))) : o.a.createElement("div", {
					className: Object(s.a)(p.a.snoovatarContainer, t)
				}, r && o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: p.a.topGlow
				}), o.a.createElement("div", {
					className: p.a.bottomGlow
				}), !b && o.a.createElement(O, null)), o.a.createElement("img", {
					className: Object(s.a)(p.a.snoovatar, {
						[p.a.premiumGlow]: r
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
				i = r("./src/reddit/icons/svgs/Admin/index.tsx"),
				d = r("./src/reddit/icons/svgs/Nsfw/index.tsx"),
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
				}, t || r, a && o.a.createElement(i.a, {
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
				})), m && o.a.createElement(d.a, {
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
				nftProfileUnitContainerWithoutCta: "_3BzIc6FzgAGGhbAOD7PPEr",
				nftProfileUnit: "n5OW4wkmX5R3yYizuJXw1",
				showcase: "_rvftTJBQnr_blLyFQjK1",
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
				i = r("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				d = r("./src/reddit/icons/fonts/index.tsx"),
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
					isNSFW: C,
					isOwnProfile: O,
					onClickSnoovatar: j,
					onDeleteBanner: y,
					prefersReducedAnimations: N,
					snoovatarUrl: E,
					title: k,
					userCreated: S,
					username: P,
					url: U,
					isHovercard: w
				} = e;
				const F = Object(a.e)(e => !O && !!E && Object(c.f)(e));
				return s.a.createElement(s.a.Fragment, null, s.a.createElement(m.a, {
					bannerBackgroundImage: t,
					editMode: !!p,
					isNSFW: C,
					username: P,
					isDeletingBanner: !!v,
					onDeleteBanner: y
				}), !p && O && s.a.createElement(o.default, {
					to: "/settings/profile",
					className: f.a.snoovatarSettingsLink
				}, s.a.createElement(d.a, {
					name: "settings",
					className: x.a.settingsIcon
				})), s.a.createElement(h.a, {
					isGold: _,
					snoovatarUrl: E,
					prefersReducedAnimations: N,
					origin: w ? i.a.Hovercard : i.a.Profile,
					userName: P
				}), s.a.createElement(g.a, {
					isEmployee: I,
					isGold: _,
					isNSFW: C,
					title: k,
					username: P
				}), s.a.createElement(b.a, {
					className: f.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: P,
					userCreated: S,
					url: U
				}), (O || !n && !!E) && s.a.createElement(l.a, {
					compact: r,
					currentUserHasSnoovatar: n,
					isOwnProfile: O,
					onClick: j
				}), F && s.a.createElement(u.a, {
					username: P,
					isHovercard: !!w,
					share: {
						username: P
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
				return i
			})), r.d(t, "n", (function() {
				return d
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
				i = n.a.h1("HomePageTitle", a.a),
				d = n.a.button("HomePageBreadcrumb", a.a),
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
				i = r("./src/reddit/controls/Checkbox/index.m.less"),
				d = r.n(i);
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
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
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
				i = r.n(o);
			t.a = e => {
				let {
					center: t,
					className: r,
					sizePx: n = 10
				} = e;
				return s.a.createElement("div", {
					className: Object(a.a)(i.a.loadingIcon, r, {
						[i.a.mCentered]: t
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
		"./src/reddit/helpers/trackers/marketplace/display-collectibles.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./src/reddit/helpers/userSnoovatar/index.ts"),
				s = r("./src/reddit/helpers/trackers/snoovatar.ts");
			const a = e => {
				let {
					sendEvent: t,
					user: r,
					pageType: a,
					isDisplayCollectiblesEnabled: o
				} = e;
				const i = Object(n.b)(r.accountIcon);
				o && i || t(Object(s.m)({
					user: r,
					pageType: a,
					userHasNft: i
				}))
			}
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
				i = r.n(o);
			t.a = e => s.a.createElement("svg", {
				className: Object(a.a)(e.className, i.a.admin, {
					[i.a.mEnabled]: e.enabled
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
					experimentName: n.M
				}) === n.Wd
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Settings~SubredditWiki.a48e136b118af57ab9c4.js.map