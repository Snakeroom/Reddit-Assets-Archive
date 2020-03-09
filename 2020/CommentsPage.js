// https://www.redditstatic.com/desktop2x/CommentsPage.546feb4be38bda371fce.js
// Retrieved at 3/9/2020, 12:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommentsPage", "Poll~ProfilePrivate~RpanListingUnit~SearchResults~reddit-components-ClassicPost~reddit-components-Co~d2dc8995", "Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit~Topic", "Multireddit~ProfilePosts~ProfileSnoobuilder~Subreddit~SubredditWiki", "ChatPost~ModQueuePages"], {
		"./node_modules/lodash/_baseDelay.js": function(e, t) {
			var s = "Expected a function";
			e.exports = function(e, t, n) {
				if ("function" != typeof e) throw new TypeError(s);
				return setTimeout((function() {
					e.apply(void 0, n)
				}), t)
			}
		},
		"./node_modules/lodash/_baseFindKey.js": function(e, t) {
			e.exports = function(e, t, s) {
				var n;
				return s(e, (function(e, s, o) {
					if (t(e, s, o)) return n = s, !1
				})), n
			}
		},
		"./node_modules/lodash/defer.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseDelay.js"),
				o = s("./node_modules/lodash/_baseRest.js")((function(e, t) {
					return n(e, 1, t)
				}));
			e.exports = o
		},
		"./node_modules/lodash/findKey.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseFindKey.js"),
				o = s("./node_modules/lodash/_baseForOwn.js"),
				r = s("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return n(e, r(t, 3), o)
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseFlatten.js"),
				o = s("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return n(o(e, t), 1)
			}
		},
		"./node_modules/lodash/random.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseRandom.js"),
				o = s("./node_modules/lodash/_isIterateeCall.js"),
				r = s("./node_modules/lodash/toFinite.js"),
				a = parseFloat,
				i = Math.min,
				c = Math.random;
			e.exports = function(e, t, s) {
				if (s && "boolean" != typeof s && o(e, t, s) && (t = s = void 0), void 0 === s && ("boolean" == typeof t ? (s = t, t = void 0) : "boolean" == typeof e && (s = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = r(e), void 0 === t ? (t = e, e = 0) : t = r(t)), e > t) {
					var d = e;
					e = t, t = d
				}
				if (s || e % 1 || t % 1) {
					var l = c();
					return i(e + l * (t - e + a("1e-" + ((l + "").length - 1))), t)
				}
				return n(e, t)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseTimes.js"),
				o = s("./node_modules/lodash/_castFunction.js"),
				r = s("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				i = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = r(e)) < 1 || e > a) return [];
				var s = i,
					d = c(e, i);
				t = o(t), e -= i;
				for (var l = n(d, t); ++s < e;) t(s);
				return l
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var n = s("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var t = ++o;
				return n(e) + t
			}
		},
		"./src/graphql/operations/EventPostsBySubredditName.json": function(e) {
			e.exports = JSON.parse('{"id":"c47ac7eb71fa"}')
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
				return h
			}));
			var n = s("./node_modules/lodash/omit.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/selectors/telemetry.ts");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const l = (e, t, s) => (function() {
				let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return o => {
					const r = h(o.target, o.currentTarget);
					u(o.target, o.currentTarget, p.anchors) ? r && t && e(t(s, r)) : r && t && e(e => Object.assign({}, t(s, r)(e), {
						actionInfo: Object(c.previousPageActionInfo)(e)
					})), u(o.target, o.currentTarget, p.anchorsAndButtons) && n(o)
				}
			});

			function m(e) {
				class t extends a.a.Component {
					constructor() {
						super(...arguments), this.cancelClick = !1
					}
					render() {
						const {
							sendEvent: t,
							eventFactory: s,
							clickTrackingId: n
						} = this.props;
						return a.a.createElement(e, d({}, o()(this.props, "sendEvent", "eventFactory", "clickTrackingId"), {
							afterClickTracking: l(t, s, n)
						}))
					}
				}
				return Object(i.b)(t)
			}
			const p = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				u = (e, t, s) => !s.includes(e.tagName) && (e === t || !!e.parentElement && u(e.parentElement, t, s)),
				h = (e, t) => {
					const s = e.dataset.clickId;
					return s || (e === t ? null : !!e.parentElement && h(e.parentElement, t))
				}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/reddit/i18n/utils.ts");
			const o = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				r = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				a = (e, t) => t ? e.getUTCDate() : e.getDate(),
				i = (e, t, s) => {
					const a = t ? e.getUTCMonth() : e.getMonth(),
						i = s ? r : o;
					return Object(n.c)(i[a])
				},
				c = (e, t) => t ? e.getUTCFullYear() : e.getFullYear();

			function d(e, t, s, n) {
				const o = new Date(1e3 * e),
					r = i(o, s, n),
					d = t ? a(o, s) + ", " : "";
				return "".concat(r, " ").concat(d).concat(c(o, s))
			}
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/es6.regexp.match.js");
			var n = s("./node_modules/linkify-it/index.js"),
				o = s.n(n),
				r = s("./node_modules/tlds/index.js"),
				a = s.n(r),
				i = s("./src/lib/linkMatchers/customLinks.ts"),
				c = s("./node_modules/lodash/values.js"),
				d = s.n(c);
			const l = e => d()(i.b).includes(e.substring(1)),
				m = ["//", "ftp:", "http:", "https:", "mailto:"],
				p = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, m);
			s.d(t, "e", (function() {
				return u
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "f", (function() {
				return b
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "g", (function() {
				return O
			})), s.d(t, "h", (function() {
				return E
			}));
			const u = o()().tlds(a.a).set({
					fuzzyIP: !0
				}),
				h = o()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.mention.prefix, i.g.mention.config),
				b = p(o()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config),
				g = p(o()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config),
				x = o()().tlds(a.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config).add(i.g.mention.prefix, i.g.mention.config),
				v = u.normalize;
			u.normalize = e => {
				v.call(u, e), !e.schema && e.url.startsWith("http:") && (e.url = "https:".concat(e.url.slice(5)))
			};
			const f = (e, t) => {
					return (x.match(e) || []).filter(e => {
						const s = l(e.text);
						return !s || s && t
					})
				},
				C = e => {
					return [...g.match(e) || [], ...h.match(e) || []].map(e => !l(e.text) && e.text.replace(i.a, "")).filter(e => e)
				},
				O = (e, t) => {
					const s = e.match(t);
					if (s && 1 === s.length && 0 === s[0].index && s[0].lastIndex === t.length) return s[0]
				},
				E = e => {
					const t = u.match(e);
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
				o = s("./node_modules/history/esm/history.js");
			t.a = (e, t, s) => {
				const r = Object(o.e)(e),
					a = encodeURIComponent("".concat(t).concat(r));
				return "".concat(n.a.accountManagerOrigin).concat(s || "/login", "?dest=").concat(a)
			}
		},
		"./src/reddit/actions/commentsListTruncated/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/commentsListTruncated/constants.ts");
			const r = Object(n.a)(o.a),
				a = Object(n.a)(o.b)
		},
		"./src/reddit/actions/dismissedTruncationList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/dismissedTruncationList/constants.ts");
			const r = Object(n.a)(o.a)
		},
		"./src/reddit/actions/eventPosts/index.ts": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/eventPosts/constants.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/graphql/operations/EventPostsBySubredditName.json"),
				d = s("./src/lib/makeGqlRequest/index.ts");
			var l = s("./src/lib/makeApiRequest/index.ts"),
				m = s("./src/lib/omitHeaders/index.ts"),
				p = s("./src/reddit/constants/headers.ts");
			var u = (e, t, s, n, r) => Object(l.b)(Object(m.a)(e, [p.a]), {
				endpoint: "".concat(e.apiUrl, "/api/event_post_time.json"),
				method: o.cb.POST,
				data: {
					id: t,
					event_start: s,
					event_end: n,
					event_tz: r
				}
			});
			var h = (e, t) => Object(l.b)(Object(m.a)(e, [p.a]), {
					endpoint: "".concat(e.apiUrl, "/api/start_event_post.json"),
					method: o.cb.POST,
					data: {
						id: t
					}
				}),
				b = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts"),
				g = s("./src/reddit/models/Toast/index.ts"),
				x = s("./src/reddit/selectors/eventPosts.ts"),
				v = s("./src/reddit/selectors/posts.ts");
			s.d(t, "fetchEventPostsPending", (function() {
				return C
			})), s.d(t, "fetchEventPostsSuccess", (function() {
				return O
			})), s.d(t, "fetchEventPostsFailure", (function() {
				return E
			})), s.d(t, "fetchMoreEventPostsSuccess", (function() {
				return y
			})), s.d(t, "eventPostsRequested", (function() {
				return j
			})), s.d(t, "startEventNowSuccess", (function() {
				return _
			})), s.d(t, "startEventNowRequested", (function() {
				return w
			})), s.d(t, "editEventTimeSuccess", (function() {
				return P
			})), s.d(t, "editEventTimeRequested", (function() {
				return k
			}));
			const f = () => n.fbt._("Something went wrong. Just don't panic.", null, {
					hk: "4onxm1"
				}),
				C = Object(r.a)(a.e),
				O = Object(r.a)(a.c),
				E = Object(r.a)(a.b),
				y = Object(r.a)(a.d),
				j = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n, r = s();
					const a = Object(x.d)(r, {
							subredditName: e
						}),
						l = Object(x.b)(r, {
							subredditName: e
						}),
						m = Object(x.c)(r, {
							subredditName: e
						}),
						p = Object(x.a)(r, {
							subredditName: e
						}),
						u = l && m;
					if (a) return;
					const h = {
						name: e,
						pageSize: 25,
						nonInclusiveCursor: null
					};
					if (u) h.nonInclusiveCursor = p;
					else if (l && !m) return;
					const v = Object(x.e)(r, {
						subredditName: e
					});
					t(C({
						key: v
					}));
					const j = await ((e, t) => Object(d.a)(e, Object.assign({}, c, {
						variables: t
					})))(o(), h);
					if (j.ok) {
						const {
							subredditInfoByName: e
						} = j.body.data, {
							eventPosts: n
						} = e, o = Object(b.a)(n);
						let a = [],
							i = {};
						const c = n.pageInfo || {
							hasNextPage: !1,
							endCursor: null,
							hasPreviousPage: !1,
							startCursor: null
						};
						o.length > 0 && (a = o.map(e => e.id), i = o.reduce((e, t) => (e[t.id] = t, e), {})), r = s(), t((u ? y : O)({
							key: v,
							postIds: a,
							meta: r.meta,
							posts: i,
							pageInfo: c
						}))
					} else t(E({
						error: j.error,
						key: v
					})), t(Object(i.e)({
						kind: g.b.Error,
						text: f()
					}))
				}, _ = Object(r.a)(a.f), w = e => async (t, s, o) => {
					let {
						apiContext: r
					} = o;
					if ((await h(r(), e)).ok) {
						const o = () => n.fbt._("Following event has started successfully: {title}", [n.fbt._param("title", c)], {
							hk: "e9iz9"
						});
						t(_({
							postId: e
						}));
						const r = s(),
							a = Object(v.M)(r, {
								postId: e
							}),
							c = a && a.title || "";
						t(Object(i.e)({
							kind: g.b.SuccessMod,
							text: o()
						}))
					} else t(Object(i.e)({
						kind: g.b.Error,
						text: f()
					}))
				}, P = Object(r.a)(a.a), k = (e, t) => async (s, r, a) => {
					let {
						apiContext: c
					} = a;
					const d = await u(c(), e, t.startDate, t.endDate, t.timezoneName);
					if (d.ok) {
						const t = d.body,
							a = 14400,
							c = Math.round(t.event_start / o.Db);
						let l = t.event_end;
						const m = {
							eventStart: c,
							eventEnd: l = l && Math.round(l / o.Db) || c + a,
							eventIsLive: t.event_is_live
						};
						s(P({
							postId: e,
							eventInfo: m
						}));
						const p = r(),
							u = Object(v.M)(p, {
								postId: e
							}),
							h = u && u.title || "",
							b = () => n.fbt._("Following event time is updated successfully: {title}", [n.fbt._param("title", h)], {
								hk: "1m1w1c"
							});
						s(Object(i.e)({
							kind: g.b.SuccessMod,
							text: b()
						}))
					} else s(Object(i.e)({
						kind: g.b.Error,
						text: f()
					}))
				}
		},
		"./src/reddit/actions/postCreation/editing.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/app/strings/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				i = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts"),
				m = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				p = s("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				u = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const h = e => Object.assign({
				api_type: "json",
				show_error_list: !0,
				thing_id: e.post.id,
				validate_on_submit: !0
			}, (e => !(!e.document || !e.document.length))(e) ? (e => ({
				text: null,
				richtext_json: JSON.stringify({
					document: e.document
				})
			}))(e) : (e => ({
				text: e.markdown,
				return_rtjson: !0
			}))(e));
			var b = (e, t) => Object(c.b)(Object(d.a)(e, [l.a]), {
					endpoint: Object(u.a)(Object(m.a)("".concat(e.apiUrl, "/api/editusertext"))),
					method: i.cb.POST,
					data: h(t)
				}).then(p.b),
				g = s("./src/reddit/helpers/overlay/index.ts"),
				x = s("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				v = s("./src/reddit/helpers/trackers/lightbox.ts"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				C = s("./src/reddit/helpers/trackers/postComposer.ts"),
				O = s("./src/reddit/models/Media/index.ts"),
				E = s("./src/reddit/models/PostCreationForm/index.ts"),
				y = s("./src/reddit/models/Toast/index.ts"),
				j = s("./src/reddit/selectors/posts.ts"),
				_ = s("./src/reddit/actions/postCreation/constants.ts"),
				w = s("./src/reddit/actions/postCreation/general.ts");
			s.d(t, "b", (function() {
				return T
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "c", (function() {
				return L
			}));
			const P = Object(o.a)(_.m),
				k = Object(o.a)(_.n),
				I = Object(o.a)(_.z),
				S = Object(o.a)(_.F),
				T = Object(o.a)(_.G),
				N = (e, t) => async (s, n, o) => {
					let {
						apiContext: r
					} = o;
					const a = n(),
						i = Object(j.M)(a, {
							postId: e
						});
					t ? (s(Object(g.a)(i.permalink)), Object(v.d)(e, "edit")(a)) : Object(f.b)(e, "edit")(a);
					const {
						media: c
					} = i;
					if (!c) return;
					let d, l = E.h.RICH_TEXT,
						m = "";
					c.type === O.n.TEXT ? (l = E.h.MARKDOWN, m = c.content) : c.type === O.n.RTJSON && (m = (l = c.rteMode || E.h.RICH_TEXT) === E.h.MARKDOWN ? c.markdownContent : c.richtextContent, d = c.mediaMetadata || void 0), s(S({
						editorMode: l,
						mediaMetadata: d,
						postContent: m,
						postId: e
					}))
				}, L = e => async (t, s, o) => {
					let {
						apiContext: i
					} = o;
					const c = s(),
						{
							post: d
						} = e,
						l = !d.media || "rtjson" !== d.media.type && "text" !== d.media.type ? "" : d.media.rteMode;
					C.r(s(), Object(w.o)(l)), t(I(d.id));
					const m = await b(i(), e),
						p = !1 === m.body.success;
					if (t(P(d.id)), m.ok && !p) {
						t(Object(a.e)({
							kind: y.b.SuccessCommunity,
							text: Object(n.a)(c.user.language, "postCreation.editing.success")
						})), t(T(d.id));
						const e = Object(x.a)(m.body);
						t(Object(r.O)({
							[d.id]: e
						}))
					} else t(k(m.error))
				}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/BannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1rmObrmUCfC5t42SbwkzYC",
				container: "_1rmObrmUCfC5t42SbwkzYC",
				LoadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2",
				loadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2"
			}
		},
		"./src/reddit/components/BannerAd/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/addQueryParams/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/doubleclickForPublishers/index.ts"),
				l = s("./src/lib/intersectionObserver/index.ts"),
				m = s("./src/lib/objectSelector/index.ts"),
				p = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/helpers/trackers/ads.ts"),
				g = s("./src/reddit/components/BannerAd/index.m.less"),
				x = s.n(g),
				v = s("./src/lib/lessComponent.tsx");
			const f = v.a.div("Container", x.a),
				C = v.a.div("LoadingHitbox", x.a),
				O = e => setTimeout(() => {
					throw e
				}, 0);
			class E extends o.a.Component {
				constructor() {
					super(...arguments), this.frame = null, this.loader = null, this.refreshedAt = 1 / 0, this.isWithinLoadingDistance = !1
				}
				componentDidCatch(e) {
					O(e)
				}
				defineSlot() {
					const {
						id: e,
						slot: t,
						properties: s,
						sizes: n = []
					} = this.props;
					try {
						return this.frame && d.a(this.frame, {
							id: e,
							slot: t,
							properties: s,
							sizes: n
						})
					} catch (o) {
						O(o)
					}
				}
				destroySlot() {
					try {
						this.frame && d.b(this.frame)
					} catch (e) {
						O(e)
					}
				}
				async componentDidMount() {
					this.props.sendEvent(Object(b.a)());
					try {
						await this.defineSlot()
					} catch (e) {
						O(e)
					}
					this.loader && l.a(this.loader, e => {
						this.frame && d.e(this.frame, {
							viewable: e.intersectionRatio > .5
						}), this.isWithinLoadingDistance = !0, this.refresh(this.props), this.loader && l.b(this.loader)
					})
				}
				componentWillUnmount() {
					this.loader && l.b(this.loader), this.destroySlot()
				}
				refresh(e) {
					this.isWithinLoadingDistance && (this.refreshedAt = Date.now(), this.frame && d.d(this.frame, {
						id: e.id,
						slot: e.slot,
						properties: e.properties,
						sizes: e.sizes
					}))
				}
				componentWillReceiveProps(e) {
					this.props.refreshKey !== e.refreshKey && Date.now() - this.refreshedAt > 6e3 && this.refresh(e)
				}
				render() {
					const {
						id: e,
						slot: t,
						className: s
					} = this.props;
					return t ? o.a.createElement(f, {
						"data-slot": t
					}, o.a.createElement(C, {
						key: "".concat(e, "-loadinghitbox"),
						innerRef: e => {
							this.loader = e
						}
					}), o.a.createElement("div", {
						"data-before-content": this.props.dataBeforeContent,
						key: "".concat(e, "-div"),
						className: s,
						ref: e => {
							this.frame = e
						},
						id: e
					})) : o.a.createElement("div", {
						className: s
					})
				}
			}
			E.defaultProps = {
				sizes: [c.e]
			};
			t.a = Object(r.b)(() => Object(a.c)({
				properties: Object(m.a)((e, t) => {
					const s = e.platform.currentPage;
					if (!s) return {};
					const n = "".concat(e.meta.protocol, "://").concat(e.meta.domain);
					return Object(p.b)(t.placement, e.user, Object(i.a)("".concat(n).concat(s.url), s.queryParams), Object(u.y)(e, {
						subredditName: t.listingName
					}), t.position)
				}),
				slot: (e, t) => {
					const s = e.platform.currentPage;
					return s && s.meta ? d.c(t.listingName, s.meta.name) : ""
				}
			}))(Object(h.b)(E))
		},
		"./src/reddit/components/Collection/PostAndPostEventMeta/index.m.less": function(e, t, s) {
			e.exports = {
				postEventMeta: "UORiCb6Mik-agLw97Owil",
				Metadata: "YxCA1Mpgi_ThsEnFr_EFv",
				metadata: "YxCA1Mpgi_ThsEnFr_EFv"
			}
		},
		"./src/reddit/components/Collection/PostAndPostEventMeta/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "b", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/prettyPrintNumber/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				c = s("./src/reddit/helpers/postEvent.ts"),
				d = s("./src/reddit/components/Collection/PostAndPostEventMeta/index.m.less"),
				l = s.n(d);
			const {
				fbt: m
			} = s("./node_modules/fbt/lib/FbtPublic.js"), p = a.a.wrapped(e => o.a.createElement("span", {
				className: e.className
			}, e.children), "Metadata", l.a), u = e => {
				let {
					post: t,
					language: s
				} = e;
				return Object(c.a)(t) ? o.a.createElement(i.a, {
					className: l.a.postEventMeta,
					language: s,
					post: t
				}) : o.a.createElement(o.a.Fragment, null, !t.isScoreHidden && o.a.createElement(o.a.Fragment, null, o.a.createElement(p, {
					"data-click-id": "score"
				}, m._({
					"*": "{Post score} points",
					_1: "1 point"
				}, [m._plural(t.score, "Post score", Object(r.b)(t.score))], {
					hk: "1gwCFh"
				})), o.a.createElement(p, null, "·")), o.a.createElement(p, {
					"data-click-id": "comments"
				}, m._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [m._plural(t.numComments, "number", Object(r.b)(t.numComments))], {
					hk: "3eG58Q"
				})))
			}
		},
		"./src/reddit/components/Collection/PostItem/index.m.less": function(e, t, s) {
			e.exports = {
				postTitle: "_1bvyZ0jB0C8Lx6TlraZXE3",
				postContent: "_3giZKNlG6qJzee7UY1xsIJ",
				active: "_12zSt_pMIevRkRY1y7z0ZD",
				isProfilePage: "_3yF2XCFhSO-O3pN8ebYN1G",
				postBody: "_2L4qX-0aH7jj8yNe2FGxg-",
				bottomline: "NlMXOVW9HTmozMDSBJduL",
				postContainer: "rF1mJN5TPvOeX-Rs9PA04",
				postBodyWrapper: "_3LxyuVXMtCzPGToR6G4aUP",
				galleryPostContainer: "LbSOjrpQSZxNlzkqgp8IK",
				galleryPostOverlay: "_32s7Ik6Mvi_xJ6Q7PXN7cS",
				galleryPostImage: "_71EQniEmTXC8cbuXDlo2y",
				gallerySelectedBorder: "_3TY5O5VX0o1EJLeXO2CBIz",
				isNightmodeOn: "_3ToKa6hKRy0knGHXUZW0tI",
				isSelectedPost: "dKiTp-99N-ixy1MUgoxzt",
				galleryBottomLine: "_3juAZ5nip3xhlLYoa0eJHl",
				isScoreHidden: "_1gE7DLti39Ow23AU39DRyi",
				gallerySeparator: "_1REIFRRcgS4gb1OzCUiDdF",
				scrollToContainer: "R4W5__5pno6HuOR6cXIcW",
				blurBackground: "_1EmOtGLOIj5jVny00MsYDq",
				timelineThumbnail: "N7ZDF05PM85cnjxy8A9Kj",
				timelineThumbnailOverride: "_2qHZln2Y6YL5GXxpgP4Qf4",
				galleryThumbnailPlaceholder: "_3HsMbUHP3qlXSnSNv10i__",
				thumbnailContainerClassName: "_22Rd8vdnxySvffllxDpbGs",
				galleryPostPlaceholderThumbnailOverride: "_2XLoayiHEZSUCfwO0UAbso",
				commonThumbnailOverride: "_2tS9NgDPCzFiHnYMa3o1SV",
				defaultPostOverflowMenu: "Q8lxJgZLCmNGj_Ep4EMmD"
			}
		},
		"./src/reddit/components/Collection/index.m.less": function(e, t, s) {
			e.exports = {
				collectionTitleWrapper: "_10IcBRrmressbhblq2bqiU",
				isProfilePage: "_40cmCHyGWf1SgOpyoChQS",
				collectionTitle: "tFfYP5FF1o5CEXQ15uH7d",
				collectionMetaData: "_1-c9t8ecl06D08Su9pk4ni",
				collectionBy: "_17sTscKExP8XIU91kNOF2U",
				collectionTitleOptions: "_1IA_VhTzcdVBgjp_pZllHj",
				postListWrapper: "_2T_gfh-4AolUQ4rcgj8LV3",
				collectionDescription: "_1qekGnwXQb9ZXUYpC2vI3o",
				collectionList: "_3DA4B_0rR_osY0zjBQbJ8d",
				author: "_3fYAYBseZm3AMr8S-Q5ZoJ",
				overflowMenu: "_3LbMCmvXBCx5DLWUsYvKdV",
				postCount: "_1LY03RHQAwDBI6w3IOLqwg",
				galleryContainer: "_3sH08_Dk83Y6-vyvIc9ttc"
			}
		},
		"./src/reddit/components/Collection/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/domUtils/index.ts"),
				d = s("./src/lib/fastdom/index.ts"),
				l = s("./src/reddit/actions/postCollection/index.ts"),
				m = s("./src/reddit/components/AuthorLink/index.tsx"),
				p = s("./src/reddit/components/PostFollow/index.tsx"),
				u = s("./src/reddit/components/SEOTitle/index.tsx"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/components/Translated/index.tsx"),
				g = s("./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.tsx"),
				x = s("./src/reddit/constants/componentSizes.ts"),
				v = s("./src/reddit/constants/elementIds.ts"),
				f = s("./src/reddit/contexts/PageLayer/index.tsx"),
				C = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				O = s("./src/reddit/helpers/postCollection.ts"),
				E = s("./src/reddit/models/Post/index.ts"),
				y = s("./src/reddit/models/PostCollection/index.ts"),
				j = s("./src/reddit/selectors/postCollection.ts"),
				_ = s("./src/reddit/selectors/posts.ts"),
				w = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-router-dom/esm/react-router-dom.js")),
				P = s("./src/lib/prettyPrintNumber/index.ts"),
				k = s("./src/lib/timezone/index.ts"),
				I = s("./src/reddit/actions/modal.ts"),
				S = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				T = s("./src/reddit/components/Collection/PostAndPostEventMeta/index.tsx"),
				N = s("./src/reddit/components/PostContainer/index.tsx"),
				L = s("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.tsx"),
				M = s("./src/reddit/helpers/path/index.ts"),
				R = s("./src/reddit/helpers/postEvent.ts"),
				F = s("./src/reddit/helpers/trackers/postCollection.ts"),
				A = s("./src/reddit/models/PostCreationForm/index.ts"),
				B = s("./src/reddit/selectors/activeModalId.ts"),
				D = s("./src/reddit/selectors/user.ts"),
				W = s("./src/reddit/components/Collection/PostItem/index.m.less"),
				H = s.n(W);

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: U
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			let G, K;
			const z = e => "".concat(e, "--collectionItem"),
				J = e => {
					const {
						activeModalId: t,
						addEventStartTime: s,
						eventFactory: n,
						isFutureEvent: r,
						isNightmodeOn: a,
						isOverlay: c,
						isSelectedPost: d,
						language: l,
						onPostSelection: m,
						onRemovePost: p,
						onStartEventNow: u,
						onPostTitleClick: h,
						post: b,
						shouldShowCollectionPostEdits: g,
						shouldShowThumbnail: x,
						style: v,
						toggleEditStartTimeModal: f,
						updateSelectedPostRef: C,
						isProfilePage: O
					} = e;
					return o.a.createElement(N.a, {
						className: Object(i.a)(H.a.postContainer, {
							[H.a.isNightmodeOn]: a,
							[H.a.isSelectedPost]: d,
							[H.a.isProfilePage]: O
						}),
						isOverlay: c,
						makePostContainerId: z,
						post: b,
						onClick: m,
						eventFactory: n,
						style: v
					}, o.a.createElement("div", {
						ref: d && C || void 0
					}, o.a.createElement("div", {
						className: Object(i.a)(H.a.postContent, {
							[H.a.active]: d
						})
					}, x && o.a.createElement(S.a, {
						className: H.a.timelineThumbnail,
						classNameInnerThumbnail: Object(i.a)(H.a.timelineThumbnailOverride, H.a.commonThumbnailOverride),
						post: b
					}), o.a.createElement("div", {
						className: H.a.postBodyWrapper
					}, o.a.createElement("div", {
						className: H.a.postBody,
						"data-click-id": "body"
					}, o.a.createElement(w.a, {
						to: Object(M.b)(b.permalink),
						className: H.a.postTitle,
						style: {
							WebkitBoxOrient: "vertical"
						},
						title: b.title,
						onClick: h
					}, b.title)), o.a.createElement("div", {
						className: H.a.bottomline
					}, o.a.createElement(T.b, {
						post: b,
						language: l
					}), g && o.a.createElement(L.a, {
						className: H.a.defaultPostOverflowMenu,
						onRemoveClick: p,
						dropdownId: "collection-post-item-".concat(b.id),
						isFutureEvent: r,
						onStartEventNow: u,
						onEditStartTime: f,
						onAddEventStartTime: f,
						shouldShowAddEventStartTime: !Object(R.a)(b)
					}))))), t === Object(A.s)(b.id, c, A.j.COLLECTION_INFO_POST) && G && o.a.createElement(G, {
						onChange: s,
						onClose: f,
						schedule: Object(k.c)(b),
						shouldShowDeleteButton: !1
					}))
				},
				q = S.a,
				Y = e => {
					const {
						activeModalId: t,
						addEventStartTime: s,
						eventFactory: n,
						galleryThumbnail: r,
						isFutureEvent: a,
						isNightmodeOn: c,
						isOverlay: d,
						isSelectedPost: l,
						onPostSelection: m,
						onRemovePost: p,
						onStartEventNow: u,
						post: h,
						shouldShowCollectionPostEdits: b,
						style: g,
						toggleEditStartTimeModal: x,
						updateSelectedPostRef: v,
						isProfilePage: f
					} = e, C = r && r.url || "", O = h.isSpoiler || h.isNSFW, E = h.isScoreHidden;
					return o.a.createElement(N.a, {
						className: Object(i.a)(H.a.galleryPostContainer, {
							[H.a.isSelectedPost]: l,
							[H.a.isNightmodeOn]: c,
							[H.a.isProfilePage]: f
						}),
						isOverlay: d,
						makePostContainerId: z,
						post: h,
						onClick: m,
						eventFactory: n,
						style: g
					}, o.a.createElement("div", {
						className: H.a.scrollToContainer,
						ref: l && v || void 0
					}, C ? o.a.createElement("div", {
						className: Object(i.a)(H.a.galleryPostImage, {
							[H.a.blurBackground]: O
						}),
						style: {
							backgroundImage: "url('".concat(C, "')")
						}
					}) : o.a.createElement(q, {
						className: H.a.galleryThumbnailPlaceholder,
						thumbnailContainerClassName: H.a.thumbnailContainerClassName,
						classNameInnerThumbnail: Object(i.a)(H.a.galleryPostPlaceholderThumbnailOverride, H.a.commonThumbnailOverride),
						post: h
					}), c && o.a.createElement("div", {
						className: H.a.gallerySeparator
					}), l && o.a.createElement("div", {
						className: H.a.gallerySelectedBorder
					}), o.a.createElement("div", {
						className: H.a.galleryPostOverlay
					}, o.a.createElement("div", {
						className: Object(i.a)(H.a.galleryBottomLine, {
							[H.a.isScoreHidden]: E
						})
					}, !E && o.a.createElement(T.a, {
						"data-click-id": "score"
					}, U._({
						"*": "{Post score} points",
						_1: "1 point"
					}, [U._plural(h.score, "Post score", Object(P.b)(h.score))], {
						hk: "17XXwj"
					})), b && o.a.createElement(L.a, {
						onRemoveClick: p,
						dropdownId: "collection-post-item-".concat(h.id),
						isFutureEvent: a,
						onStartEventNow: u,
						onEditStartTime: x,
						onAddEventStartTime: x,
						shouldShowAddEventStartTime: !Object(R.a)(h)
					})))), t === Object(A.s)(h.id, d, A.j.COLLECTION_INFO_POST) && G && o.a.createElement(G, {
						onChange: s,
						onClose: x,
						schedule: Object(k.c)(h),
						shouldShowDeleteButton: !1
					}))
				};
			class X extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onPostSelection = (e, t) => {
						const {
							onClickPost: s,
							postId: n,
							sendEvent: o
						} = this.props;
						o(Object(F.h)(n)), s && s(e, t)
					}, this.onRemovePost = () => {
						const {
							post: e,
							sendEvent: t
						} = this.props;
						this.props.onRemovePostFromCollection(), t(Object(F.p)(e.id))
					}, this.onStartEventNow = () => {
						const {
							post: e,
							sendEvent: t
						} = this.props;
						this.props.onStartEventNow(), t(Object(F.i)(e.id))
					}, this.onPostTitleClick = e => {
						const {
							post: t
						} = this.props;
						e.preventDefault(), this.onPostSelection(e, t)
					}
				}
				render() {
					const {
						displayLayout: e,
						post: t
					} = this.props;
					return t ? e === y.a.TIMELINE ? o.a.createElement(J, V({}, this.props, {
						onPostSelection: this.onPostSelection,
						onRemovePost: this.onRemovePost,
						onStartEventNow: this.onStartEventNow,
						onPostTitleClick: this.onPostTitleClick
					})) : o.a.createElement(Y, V({}, this.props, {
						onPostSelection: this.onPostSelection,
						onRemovePost: this.onRemovePost,
						onStartEventNow: this.onStartEventNow
					})) : o.a.createElement("div", {
						className: H.a.postContainer
					})
				}
			}
			var Q = Object(f.t)({
					currentProfileName: f.h,
					isCommentsPage: f.w,
					isProfilePostListing: f.H,
					isProfilePage: f.G,
					pageLayer: e => e
				})(Object(r.b)(() => Object(a.c)({
					activeModalId: B.a,
					galleryThumbnail: j.e,
					isFutureEvent: j.i,
					language: D.O,
					layout: f.L,
					post: _.M,
					shouldShowCollectionPostEdits: j.s,
					subredditOrProfile: _.Y
				}), (e, t) => {
					let {
						collectionId: n,
						postId: o,
						isSelectedPost: r,
						isOverlay: a
					} = t;
					return {
						onRemovePostFromCollection: () => e(Object(l.g)(n, o, r)),
						onStartEventNow: async () => {
							K || (K = await Promise.resolve().then(s.bind(null, "./src/reddit/actions/eventPosts/index.ts"))), e(K.startEventNowRequested(o))
						},
						toggleEditStartTimeModal: async () => {
							G && K || ([G, K] = await Promise.all([s.e("schedulePickerModal").then(s.bind(null, "./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx")).then(e => e.default), Promise.resolve().then(s.bind(null, "./src/reddit/actions/eventPosts/index.ts"))])), e(I.i(Object(A.s)(o, a, A.j.COLLECTION_INFO_POST)))
						},
						addEventStartTime: t => {
							K && e(K.editEventTimeRequested(o, t))
						}
					}
				})(Object(h.b)(X))),
				Z = s("./src/reddit/components/Collection/index.m.less"),
				$ = s.n(Z);
			const {
				fbt: ee
			} = s("./node_modules/fbt/lib/FbtPublic.js"), te = e => o.a.createElement(m.a, {
				author: e.author,
				className: $.a.author,
				"data-click-id": "user",
				isAuthorDeleted: e.isDeleted,
				isUnstyled: !0
			}, "u/".concat(e.author)), se = 100, ne = e => {
				return e.isOverlay ? x.n + x.b : x.f + x.b
			}, oe = e => ({
				top: ne(e),
				maxHeight: "calc(100vh - ".concat(x.f + (e.isOverlay ? x.n : 0) + x.b + 5, "px)")
			}), re = Object(f.t)({
				isProfilePage: f.G,
				pageLayer: e => e
			}), ae = Object(r.b)(() => Object(a.c)({
				collection: j.n,
				displayLayout: j.a,
				followPost: (e, t) => {
					let {
						postId: s
					} = t;
					const n = Object(j.n)(e, {
							postId: s
						}),
						o = n && (n.primaryPostId || n.postIds[0]);
					return o && Object(_.M)(e, {
						postId: o
					}) || null
				},
				post: _.M,
				shouldShowThumbnail: (e, t) => {
					let {
						postId: s
					} = t;
					const n = Object(j.n)(e, {
						postId: s
					});
					return !(!n || !n.id) && Object(j.t)(e, {
						collectionId: n.id
					})
				}
			}), (e, t) => ({
				onOpenPost: t => e(Object(l.f)(t))
			}));
			class ie extends o.a.Component {
				constructor() {
					super(...arguments), this.selectedPostRef = null, this.onClickPost = (e, t) => {
						this.props.onOpenPost(t)
					}, this.updateSelectedPostRef = e => {
						this.selectedPostRef = e
					}
				}
				componentDidMount() {
					const e = document.getElementById(v.b);
					if (e) {
						const t = this.selectedPostRef;
						let s;
						s = t ? t.offsetTop - se : 0, d.a.write(() => {
							Object(c.c)(e, s)
						})
					}
				}
				render() {
					const {
						collection: e,
						displayLayout: t,
						followPost: s,
						isNightmodeOn: n,
						isOverlay: r,
						post: a,
						postId: c,
						shouldShowThumbnail: d,
						isProfilePage: l
					} = this.props;
					if (!a || !e) return null;
					const {
						author: m = "",
						description: h = "",
						postIds: x = [],
						id: f
					} = e;
					return Object(O.a)(a) && o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: Object(i.a)($.a.collectionTitleWrapper, {
							[$.a.isProfilePage]: l
						})
					}, o.a.createElement("div", {
						className: $.a.collectionMetaData
					}, o.a.createElement("span", {
						className: $.a.collectionBy
					}, o.a.createElement(b.a, {
						msgId: "collection.collectionBy"
					})), o.a.createElement(te, {
						author: m,
						isDeleted: Object(E.h)(m)
					}), o.a.createElement(C.a, {
						isSmall: !0
					}), o.a.createElement("span", {
						className: $.a.postCount
					}, ee._({
						"*": "{number} posts",
						_1: "1 post"
					}, [ee._plural(x.length, "number")], {
						hk: "2gFsfn"
					}))), o.a.createElement("div", {
						className: $.a.collectionTitleOptions
					}, o.a.createElement("span", {
						className: $.a.collectionTitle
					}, o.a.createElement(u.b, {
						type: u.a.Collection
					}, e.title)), s && o.a.createElement(p.a, {
						post: s,
						isEventFollow: l
					}), o.a.createElement(g.a, {
						className: $.a.overflowMenu,
						collectionId: f,
						isSubmitPage: !1,
						permalink: e.permalink,
						shouldShowCreatePost: !0
					}))), o.a.createElement("div", {
						className: $.a.postListWrapper
					}, o.a.createElement("div", {
						id: v.b,
						style: oe(this.props),
						className: $.a.collectionList
					}, h && h.trim() && o.a.createElement("div", {
						className: $.a.collectionDescription
					}, h), o.a.createElement("div", {
						className: Object(i.a)({
							[$.a.galleryContainer]: t === y.a.GALLERY
						})
					}, x.map(e => o.a.createElement(Q, {
						collectionId: f,
						postId: e,
						key: e,
						isSelectedPost: c === e,
						updateSelectedPostRef: this.updateSelectedPostRef,
						isOverlay: r,
						isNightmodeOn: n,
						onClickPost: this.onClickPost,
						shouldShowThumbnail: d,
						displayLayout: t
					}))))))
				}
			}
			t.a = re(ae(Object(h.b)(ie)))
		},
		"./src/reddit/components/CommentCreation/Loader.m.less": function(e, t, s) {
			e.exports = {
				spacer: "_25blA2uobENRg70NGewwpP",
				isTopLevelComment: "_1chAIcRfDnelKBQkWMIXfl",
				byline: "_1KZHWcRRAqnSYcyX8FzWOK"
			}
		},
		"./src/reddit/components/CommentCreation/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts"),
				i = s("./src/reddit/components/RichTextEditor/Placeholder.tsx"),
				c = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/CommentCreation/Loader.m.less"),
				m = s.n(l);
			const p = e => {
					let {
						isTopLevelComment: t,
						children: s
					} = e;
					return o.a.createElement("div", {
						children: s,
						className: Object(d.a)(m.a.spacer, {
							[m.a.isTopLevelComment]: t
						})
					})
				},
				u = () => o.a.createElement("div", {
					className: Object(d.a)(m.a.byline, Object(c.a)({
						isLoading: !0
					}))
				}),
				h = Object(r.a)({
					ErrorComponent: e => {
						let {
							isTopLevelComment: t
						} = e;
						return o.a.createElement(p, {
							isTopLevelComment: t
						}, o.a.createElement(u, null), o.a.createElement(i.a, {
							isLoading: !1,
							toolbarPosition: "bottom"
						}))
					},
					getComponent: () => Object(a.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("vendors~PostCreation~RichTextEditor"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/CommentCreation/index.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							isTopLevelComment: t
						} = e;
						return o.a.createElement(p, {
							isTopLevelComment: t
						}, o.a.createElement(u, null), o.a.createElement(i.a, {
							isLoading: !0,
							toolbarPosition: "bottom"
						}))
					}
				});
			t.a = e => o.a.createElement(h, e)
		},
		"./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_2GTMVdV2t3ka_zfkVHHo95",
				wrapper: "_2GTMVdV2t3ka_zfkVHHo95",
				LiveStreamingWrapper: "_2PreAn-l2nVweCX4t-mfuy",
				liveStreamingWrapper: "_2PreAn-l2nVweCX4t-mfuy",
				Copy: "_3xhJYY30L68x0pxk-8uTYD",
				copy: "_3xhJYY30L68x0pxk-8uTYD",
				LiveStreamingCopy: "_11HjWCkxXrGJ_6388VQT0L",
				liveStreamingCopy: "_11HjWCkxXrGJ_6388VQT0L",
				SignupLink: "_1k97Y32qzGNtuVGyt73TpR",
				signupLink: "_1k97Y32qzGNtuVGyt73TpR",
				LiveStreamingSignupLink: "_2aWoCIxf0NRE4nRAy6aFDQ",
				liveStreamingSignupLink: "_2aWoCIxf0NRE4nRAy6aFDQ",
				LoginLink: "_3fM1M9rFBqKwfG-KJLnxPY",
				loginLink: "_3fM1M9rFBqKwfG-KJLnxPY"
			}
		},
		"./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/isSimpleClick/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/lib/loginHref/index.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/trackers/authControls.ts"),
				p = s("./src/reddit/i18n/components.tsx"),
				u = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less"),
				h = s.n(u);
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), g = i.a.div("Wrapper", h.a), x = i.a.span("Copy", h.a), v = i.a.wrapped(l.g, "SignupLink", h.a), f = i.a.wrapped(l.j, "LoginLink", h.a);
			t.a = Object(d.b)(e => {
				let {
					className: t,
					isLiveStreaming: s,
					location: n,
					openLoginModal: i,
					openRegisterModal: d,
					origin: l,
					sendEvent: u
				} = e;
				return o.a.createElement(g, {
					className: Object(r.a)(t, {
						[h.a.LiveStreamingWrapper]: s
					})
				}, o.a.createElement(x, {
					className: Object(r.a)({
						[h.a.LiveStreamingCopy]: s
					})
				}, b._("Log in or sign up to leave a comment", null, {
					hk: "1KD7Eh"
				})), o.a.createElement(f, {
					href: Object(c.a)(n, l, "/login"),
					onClick: e => {
						Object(a.a)(e) && (e.preventDefault(), e.stopPropagation(), i(), u(Object(m.a)("user_convert")))
					},
					"data-redditstyle": !0
				}, o.a.createElement(p.c, null, "log in")), o.a.createElement(v, {
					className: Object(r.a)({
						[h.a.LiveStreamingSignupLink]: s
					}),
					href: Object(c.a)(n, l, "/register"),
					onClick: e => {
						Object(a.a)(e) && (e.preventDefault(), e.stopPropagation(), d(), u(Object(m.c)("user_convert")))
					},
					"data-redditstyle": !0
				}, o.a.createElement(p.c, null, "sign up")))
			})
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/comment/index.ts"),
				c = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Dropdown/index.tsx"),
				m = s("./src/reddit/helpers/trackers/modTools.ts"),
				p = s("./src/reddit/selectors/tooltip.ts"),
				u = s("./src/app/strings/index.ts"),
				h = s("./src/lib/lessComponent.tsx"),
				b = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				g = s("./src/reddit/icons/svgs/Show/index.tsx"),
				x = s("./src/reddit/components/CommentModModeDropdown/index.m.less"),
				v = s.n(x);
			const f = h.a.wrapped(g.a, "Show", v.a);
			var C = e => o.a.createElement(b.e, null, !e.comment.isApproved && o.a.createElement(b.c, {
				displayText: e.comment.approvedBy ? Object(u.a)(e.language, "modTools.approved") : Object(u.a)(e.language, "modTools.approve"),
				onClick: e.onApproveComment
			}, o.a.createElement(b.a, null)), !e.comment.bannedBy && o.a.createElement(o.a.Fragment, null, o.a.createElement(b.c, {
				displayText: e.comment.isRemoved ? Object(u.a)(e.language, "modTools.removed") : Object(u.a)(e.language, "modTools.remove"),
				onClick: e.onRemoveComment
			}, o.a.createElement(b.g, null)), o.a.createElement(b.c, {
				displayText: e.comment.isSpam ? Object(u.a)(e.language, "modTools.removedAsSpam") : Object(u.a)(e.language, "modTools.removeAsSpam"),
				onClick: e.onSpamComment
			}, o.a.createElement(b.h, null)), o.a.createElement(b.c, {
				displayText: e.comment.isLocked ? Object(u.a)(e.language, "modTools.unlockComment") : Object(u.a)(e.language, "modTools.lockComment"),
				onClick: e.onLockComment
			}, o.a.createElement(b.f, null))), e.comment.collapsedBecauseCrowdControl && o.a.createElement(b.c, {
				displayText: Object(u.a)(e.language, "modTools.showComment"),
				onClick: e.onShowComment
			}, o.a.createElement(f, null)));
			const O = h.a.wrapped(l.a, "StyledDropdown", v.a),
				E = Object(a.c)({
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(p.b)(s)(e)
					}
				}),
				y = Object(r.b)(E, (e, t) => {
					let {
						comment: s
					} = t;
					return {
						onApproveComment: () => e(Object(i.H)(s.id)),
						onLockComment: () => e(Object(i.X)(s.id)),
						onRemoveComment: () => e(Object(i.cb)(s.id, !1)),
						onSpamComment: () => e(Object(i.cb)(s.id, !0)),
						onShowComment: () => e(Object(i.Y)(s.id))
					}
				}),
				j = Object(c.a)(O),
				_ = y(Object(d.b)(e => {
					const {
						comment: t,
						isDropdownOpen: s,
						language: n,
						onApproveComment: r,
						onLockComment: a,
						onRemoveComment: i,
						onSpamComment: c,
						onShowComment: d,
						sendEvent: l,
						tooltipId: p
					} = e;
					return o.a.createElement(j, {
						isOpen: s,
						tooltipId: p
					}, o.a.createElement(C, {
						language: n,
						onApproveComment: () => {
							r(), l(Object(m.c)("approve", t.id))
						},
						onRemoveComment: () => {
							i(), l(Object(m.c)("remove", t.id))
						},
						onSpamComment: () => {
							c(), l(Object(m.c)("spam", t.id))
						},
						onLockComment: () => {
							a(), l(Object(m.c)(t.isLocked ? "unlock" : "lock", t.id))
						},
						onShowComment: () => {
							d(), l(Object(m.c)("showComment", t.id))
						},
						comment: t
					}))
				}));
			t.a = _
		},
		"./src/reddit/components/CommentSort/CommentSort.m.less": function(e, t, s) {
			e.exports = {
				container: "_2ulKn_zs7Y3LWsOqoFLHPo",
				mHasOtherDiscussions: "_3iO3U_i4YUx-2qahK_BTu1",
				SortPicker: "_1nMYOibX9neGRqvcaCrPDz",
				sortPicker: "_1nMYOibX9neGRqvcaCrPDz",
				Row: "zW82EsY6Pakxpq4WWvsUG",
				row: "zW82EsY6Pakxpq4WWvsUG",
				HighlightPicker: "_1n6gZPmNQU56UBglU718cx",
				highlightPicker: "_1n6gZPmNQU56UBglU718cx",
				ContestMode: "_3dAMO_XZMVp2K1JSO53ohA",
				contestMode: "_3dAMO_XZMVp2K1JSO53ohA",
				ToggleSwitch: "JVPG0c9TNru5TLSq9sdUG",
				toggleSwitch: "JVPG0c9TNru5TLSq9sdUG",
				DropdownTriangle: "_2MGxQvIhmM2I5CzPdSJTtM",
				dropdownTriangle: "_2MGxQvIhmM2I5CzPdSJTtM",
				hideCommentSort: "uAIheeoxWlq57lu5ghv43",
				HighlightWrapper: "_201SpO3todaXvcWUHaLymN",
				highlightWrapper: "_201SpO3todaXvcWUHaLymN",
				Info: "_1urK6AxAk9Sl76RgLUHOqh",
				info: "_1urK6AxAk9Sl76RgLUHOqh",
				SetSort: "_1Pn7_008tGFVitpaAxNI9b",
				setSort: "_1Pn7_008tGFVitpaAxNI9b",
				SingleCommentText: "_2iOrDLLjWlyPdmGh4fQMuE",
				singleCommentText: "_2iOrDLLjWlyPdmGh4fQMuE",
				SortLink: "_2C0TYCrsi0B3m8sQW0hmFv",
				sortLink: "_2C0TYCrsi0B3m8sQW0hmFv",
				Title: "_1MfL8RlT7Bsr76qYvR-nqM",
				title: "_1MfL8RlT7Bsr76qYvR-nqM",
				Tooltip: "_2PA6P-upB6MB4B4I4WgZGA",
				tooltip: "_2PA6P-upB6MB4B4I4WgZGA",
				ViewFullLinkContainer: "_2Cjk95J3a3LyPUHsLEhO37",
				viewFullLinkContainer: "_2Cjk95J3a3LyPUHsLEhO37",
				ViewFullLinkOrOverlayLink: "_3P3T6fdpdL6GGPyCM7zs9q",
				viewFullLinkOrOverlayLink: "_3P3T6fdpdL6GGPyCM7zs9q"
			}
		},
		"./src/reddit/components/CommentSort/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.search.js"), s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/actions/comment/index.ts"),
				p = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/actions/toaster.ts"),
				b = s("./src/lib/makeApiRequest/index.ts"),
				g = s("./src/lib/omitHeaders/index.ts"),
				x = s("./src/reddit/constants/headers.ts"),
				v = s("./src/reddit/i18n/utils.ts"),
				f = s("./src/reddit/models/Toast/index.ts");
			const C = (e, t) => async (s, n, o) => {
				let {
					apiContext: r
				} = o;
				const a = await (async (e, t, s) => Object(b.b)(Object(g.a)(e, [x.a]), {
						endpoint: "".concat(e.apiUrl, "/api/set_suggested_sort/"),
						method: c.cb.POST,
						data: {
							api_type: "json",
							id: t,
							sort: s
						}
					}))(r(), e, t),
					i = "error-block-".concat(t),
					d = "success-block-".concat(t);
				if (a.ok) {
					s(Object(u.O)({
						[e]: {
							suggestedSort: t
						}
					}));
					const n = t ? Object(v.c)("Suggested sort is on.") : Object(v.c)("Suggested sort is off.");
					s(h.e({
						id: d,
						kind: f.b.SuccessCommunityGreen,
						text: n
					}))
				} else s(h.e({
					id: i,
					kind: f.b.Error,
					text: Object(v.c)("Try again later"),
					buttonText: Object(v.c)("Retry"),
					buttonAction: C(e, t)
				}))
			};
			var O = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				E = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				y = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				j = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				_ = s("./src/reddit/components/TrackingHelper/index.tsx"),
				w = s("./src/reddit/controls/Dropdown/index.tsx"),
				P = s("./src/reddit/controls/Dropdown/Row.tsx"),
				k = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				I = s("./src/reddit/helpers/path/index.ts"),
				S = s("./src/reddit/selectors/telemetry.ts");
			s("./src/telemetry/models/Event.ts");
			const T = (e, t, s, n, o) => r => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(S.listing)(r, void 0, {
						oldSort: s,
						sort: n,
						source: o
					}),
					userSubreddit: Object(S.userSubreddit)(r)
				}),
				N = (e, t) => s => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				L = e => ({
					subreddit: Object(S.subreddit)(e),
					userSubreddit: Object(S.userSubreddit)(e)
				}),
				M = e => t => Object.assign({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable"
				}, L);
			var R = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				F = s("./src/reddit/icons/svgs/Info/index.tsx"),
				A = s("./src/reddit/selectors/activeModalId.ts"),
				B = s("./src/reddit/selectors/comments.ts"),
				D = s("./src/reddit/selectors/moderatorPermissions.ts"),
				W = s("./src/reddit/selectors/posts.ts"),
				H = s("./src/reddit/selectors/tooltip.ts"),
				V = s("./src/reddit/selectors/user.ts"),
				U = s("./src/reddit/components/CommentSort/CommentSort.m.less"),
				G = s.n(U),
				K = s("./src/reddit/reducers/comments/visitHighlightingFilter/index.ts");
			const z = Object(j.a)(w.a),
				J = d.a.wrapped(R.b, "DropdownTriangle", G.a),
				q = d.a.div("HighlightWrapper", G.a),
				Y = d.a.div("Title", G.a),
				X = e => e === K.a.First ? Object(v.c)("First Visit") : e === K.a.Last ? Object(v.c)("Last Visit") : "None";
			class Q extends o.a.Component {
				constructor() {
					super(...arguments), this.track = () => {
						const {
							trackHighlight: e,
							selectedSort: t
						} = this.props;
						if (t !== K.a.None) {
							e(t === K.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (e, t) => {
						this.props.trackHighlight(e, "click"), this.props.changeHighlightSort(t)
					}, this.onDropdownClickFirst = () => {
						this.onDropdownClick("since_first_visit", K.a.First)
					}, this.onDropdownClickLast = () => {
						this.onDropdownClick("since_last_visit", K.a.Last)
					}, this.onDropdownClickNone = () => {
						this.onDropdownClick("do_not_highlight", K.a.None)
					}
				}
				componentDidMount() {
					this.track()
				}
				componentWillUpdate(e) {
					e.selectedSort !== this.props.selectedSort && this.track()
				}
				render() {
					const {
						highlightIsOpen: e,
						id: t,
						onOpen: s,
						selectedSort: n
					} = this.props;
					return o.a.createElement(q, null, o.a.createElement(Y, {
						onClick: s
					}, Object(v.c)("highlight comments since")), o.a.createElement(P.b, {
						className: Object(i.a)(G.a.HighlightPicker, G.a.Row),
						displayText: X(n),
						id: t,
						onClick: s
					}), o.a.createElement(J, {
						onClick: s
					}), o.a.createElement(z, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, o.a.createElement(P.b, {
						displayText: X(K.a.First),
						isSelected: n === K.a.First,
						onClick: this.onDropdownClickFirst
					}), o.a.createElement(P.b, {
						displayText: X(K.a.Last),
						isSelected: n === K.a.Last,
						onClick: this.onDropdownClickLast
					}), o.a.createElement(P.b, {
						displayText: X(K.a.None),
						isSelected: n === K.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var Z = Q;
			const $ = "CommentSort--SortPicker",
				ee = "CommentSort--HighlightPicker",
				te = "CommentSort--Tooltip",
				se = Object(j.a)(w.a),
				ne = d.a.button("ContestMode", G.a),
				oe = d.a.wrapped(R.b, "DropdownTriangle", G.a),
				re = d.a.wrapped(F.a, "Info", G.a),
				ae = d.a.wrapped(P.b, "Row", G.a),
				ie = d.a.button("SetSort", G.a),
				ce = d.a.button("SortLink", G.a),
				de = d.a.div("Title", G.a),
				le = d.a.wrapped(k.a, "ToggleSwitch", G.a),
				me = d.a.wrapped(y.a, "ViewFullLinkOrOverlayLink", G.a),
				pe = d.a.wrapped(E.c, "Tooltip", G.a),
				ue = Object(a.c)({
					commentPermalink: (e, t) => {
						let {
							commentId: s
						} = t;
						return s && Object(B.m)(e, {
							commentId: s
						})
					},
					contestModeIsEnabled: W.D,
					contestModeModalIsOpen: Object(A.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(H.b)($),
					highlightIsOpen: Object(H.b)(ee),
					hasModeratorPostPermissions: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(D.i)(e, {
							postId: s
						});
						return !!n && n.posts
					},
					postPermalink: W.K,
					showCommentHighlighter: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(V.p)(e),
							o = !!Object(D.i)(e, {
								postId: s
							}),
							r = Object(W.M)(e, {
								postId: s
							});
						return (o || n) && !!r && !!r.previousVisits && r.previousVisits.length > 0
					},
					selectedHighlightSort: B.q
				}),
				he = Object(r.b)(ue, (e, t) => {
					let {
						postId: s
					} = t;
					return {
						changeHighlightSort: t => e(Object(m.J)({
							sort: t
						})),
						onOpenDropdown: () => e(Object(l.h)({
							tooltipId: $
						})),
						onOpenHighlightDropdown: t => {
							e(Object(l.h)({
								tooltipId: ee
							})), t()
						},
						onSetSuggestedSort: t => e(C(s, t)),
						hideTooltip: () => e(Object(l.i)()),
						setContestMode: t => e(Object(u.S)(t, s)),
						showTooltip: () => e(Object(l.h)({
							tooltipId: te
						})),
						toggleContestModeModal: () => e(Object(p.i)("CommentSort--ContestMode--Modal"))
					}
				});
			class be extends o.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, s, n) => this.props.sendEvent(T(e, this.props.isOverlay, t, s, n)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(N("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(M(!this.props.contestModeIsEnabled)), this.props.setContestMode(!this.props.contestModeIsEnabled)
					}
				}
				render() {
					const {
						changeHighlightSort: e,
						className: t,
						commentPermalink: s,
						contestModeModalIsOpen: n,
						contestModeIsEnabled: r,
						dropdownIsOpen: a,
						elementRef: d,
						hideTooltip: l,
						highlightIsOpen: m,
						hasModeratorPostPermissions: p,
						isOverlay: u,
						location: h,
						postPermalink: b,
						selectedHighlightSort: g,
						showCommentHighlighter: x,
						sort: f,
						suggestedSort: C,
						showTooltip: E,
						toggleContestModeModal: y
					} = this.props, j = !h.search.includes(c.r.CONFIDENCE), _ = f === c.r.CONFIDENCE && j, w = p && !_, k = Object(v.c)(" (suggested)"), S = C && f === C && !_ ? c.t[f] + k : c.t[f], T = r ? Object(v.c)("End contest mode?") : Object(v.c)("Start contest?"), L = r ? Object(v.c)("End") : Object(v.c)("Start"), M = r ? Object(v.c)("Ending contest mode will make comment vote scores visible and disable random comment ordering.") : Object(v.c)("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods."), R = r && !p;
					return o.a.createElement("div", {
						className: Object(i.a)(t, G.a.container, {
							[G.a.hideCommentSort]: !x && R
						}),
						ref: d
					}, !R && o.a.createElement(de, {
						onClick: this.onOpenDropdownClick
					}, Object(v.c)("Sort by")), !R && o.a.createElement(o.a.Fragment, null, o.a.createElement(ae, {
						className: Object(i.a)(G.a.SortPicker, G.a.Row),
						onClick: this.onOpenDropdownClick,
						displayText: S,
						id: $,
						noHover: !0,
						skipRoleAttr: !0
					}), o.a.createElement(oe, {
						onClick: this.onOpenDropdownClick
					}), o.a.createElement(se, {
						isOpen: a,
						tooltipId: $
					}, [c.r.CONFIDENCE, c.r.TOP, c.r.NEW, c.r.CONTROVERSIAL, c.r.OLD, c.r.QA].map(e => {
						const t = s || b,
							n = Object(I.b)(t);
						return o.a.createElement(me, {
							isOverlay: u,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: "".concat(n, "?sort=").concat(e)
						}, o.a.createElement(P.b, {
							displayText: C && e === C ? c.t[e] + k : c.t[e],
							isSelected: f === e,
							skipRoleAttr: !0
						}))
					}))), w && !R && (C ? o.a.createElement(ce, {
						onClick: f !== C ? this.setSortOnClick : this.clearSortOnClick
					}, f !== C ? Object(v.c)("Set new suggested sort") : Object(v.c)("Clear suggested sort")) : o.a.createElement(ie, null, o.a.createElement(ce, {
						onClick: this.setSortOnClick
					}, Object(v.c)("Set as suggested sort")), o.a.createElement("span", {
						id: te,
						onMouseEnter: E,
						onMouseLeave: l
					}, o.a.createElement(pe, {
						text: Object(v.c)("Suggested sort defaults Redditors to a specific way of sorting comments within this post"),
						tooltipId: te
					}), o.a.createElement(re, null)))), p && o.a.createElement(ne, {
						onClick: this.props.toggleContestModeModal
					}, Object(v.c)("Contest"), o.a.createElement(le, {
						on: r
					})), x && o.a.createElement(Z, {
						changeHighlightSort: e,
						highlightIsOpen: m,
						id: ee,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: g,
						trackHighlight: N
					}), n && o.a.createElement(O.a, {
						actionText: L,
						headerText: T,
						modalText: M,
						onConfirm: this.setContestMode,
						toggleModal: y,
						withOverlay: !0
					}))
				}
			}
			t.a = he(Object(_.b)(be))
		},
		"./src/reddit/components/Comments/Comment/ExpandButton/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_3XgXkbSTt-EadyaLszfRVf",
				component: "_3XgXkbSTt-EadyaLszfRVf"
			}
		},
		"./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less": function(e, t, s) {
			e.exports = {
				depth10: "_2sxg06qfN6lCskrSU7pyoj",
				HideIfVWSmaller: "_2hr3tRWszeMRQ0u_Whs7t8",
				hideIfVwSmaller: "_2hr3tRWszeMRQ0u_Whs7t8",
				depth0: "_2t8wLytikHzPCUnvXdS_wu",
				isInOverlay: "FOPddbU-vkQ5LYmQP6Fgc",
				isModModeEnabled: "_2hXOR2fIcfnUg0p-Env7KQ",
				LoggedInUserGroup: "_14hLFU5cIJCyxH9DSgsCov",
				loggedInUserGroup: "_14hLFU5cIJCyxH9DSgsCov",
				HideIfVWLarger: "_1YnPvd-E5MbmcM3PvRRcX",
				hideIfVwLarger: "_1YnPvd-E5MbmcM3PvRRcX",
				depth3: "_2Ik7QEXtA-lbZKj0ssL89G",
				depth6: "SwOx7KbRrXYrqQCWMYPf0",
				depth9: "_2EcU45Nj3OvIEdu169RlLK",
				ModeratorGroup: "_1CUkbmFVuU6wklfYeYwPFk",
				moderatorGroup: "_1CUkbmFVuU6wklfYeYwPFk"
			}
		},
		"./src/reddit/components/Comments/Comment/Flatlist/index.m.less": function(e, t, s) {
			e.exports = {
				ModActionsMenu: "_3IuprPPEDVWAHB_tWQFgad",
				modActionsMenu: "_3IuprPPEDVWAHB_tWQFgad",
				ViewReportsDropdown: "_1JwG70oEVxaFNeRI-8q_bd",
				viewReportsDropdown: "_1JwG70oEVxaFNeRI-8q_bd",
				supportButton: "_2YUu8EV4OahSxJwgb9xLbr",
				Report: "tfULaYlP83dV84XOxX3YE",
				report: "tfULaYlP83dV84XOxX3YE",
				IgnoreReport: "_1QhRdH9FgEwuJIYiBlnog8",
				ignoreReport: "_1QhRdH9FgEwuJIYiBlnog8",
				OverflowMenuSpacer: "hrV8gUgmt0V7wM2wgZ81l",
				overflowMenuSpacer: "hrV8gUgmt0V7wM2wgZ81l",
				DropdownRow: "uoWjzSc1sqcAD_cLV6MWa",
				dropdownRow: "uoWjzSc1sqcAD_cLV6MWa",
				iconWrapper: "jap7xdwXZKV3I9Oj8GdgQ",
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
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				DistinguishShield: "_3cuXnOdiXHbT8t5tAaGgKr",
				distinguishShield: "_3cuXnOdiXHbT8t5tAaGgKr",
				RestrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				restrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				Approve: "_19WnAmcAChJM1wTzSOV1p2",
				approve: "_19WnAmcAChJM1wTzSOV1p2",
				Lock: "_1-s5lNmDynkeEE7Z0x-t6q",
				lock: "_1-s5lNmDynkeEE7Z0x-t6q",
				Remove: "_1TzXdATrX8P6QZjY89r6Ln",
				remove: "_1TzXdATrX8P6QZjY89r6Ln",
				Show: "YoaDbMbI8PpFFWQbD_Uwq",
				show: "YoaDbMbI8PpFFWQbD_Uwq",
				Spam: "_2rc9zwviU90yoF6FCv5jvs",
				spam: "_2rc9zwviU90yoF6FCv5jvs",
				CommentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk",
				commentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk"
			}
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/comment/index.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				h = s("./src/reddit/components/ModModeReports/helpers.ts"),
				b = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				f = s("./src/reddit/helpers/trackers/modTools.ts"),
				C = s("./src/reddit/selectors/moderatingComments.ts"),
				O = s("./src/reddit/selectors/moderatorPermissions.ts"),
				E = s("./src/reddit/selectors/tooltip.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				_ = s("./src/reddit/icons/fonts/helpers.tsx"),
				w = s("./src/reddit/icons/fonts/DistinguishShield/index.m.less"),
				P = s.n(w);
			var k = l.a.wrapped(e => r.a.createElement("i", {
					className: "".concat(Object(_.b)("distinguishShield"), " ").concat(e.className)
				}), "DistinguishShield", P.a),
				I = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				S = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				T = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				N = s("./src/reddit/icons/svgs/Show/index.tsx"),
				L = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				M = s.n(L);
			s.d(t, "b", (function() {
				return F
			})), s.d(t, "a", (function() {
				return V
			}));
			var R = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const F = l.a.wrapped(b.c, "RestrictedButton", M.a),
				A = l.a.wrapped(j.a, "Approve", M.a),
				B = l.a.wrapped(I.a, "Lock", M.a),
				D = l.a.wrapped(S.a, "Remove", M.a),
				W = l.a.wrapped(T.a, "Spam", M.a),
				H = l.a.wrapped(N.a, "Show", M.a),
				V = l.a.wrapped(k, "DistinguishShield", M.a),
				U = Object(x.t)(),
				G = e => "Distinguish--Dropdown--".concat(e),
				K = Object(i.c)({
					currentUser: y.i,
					collapsedBecauseCrowdControl: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(C.a)(e, {
							commentId: s.id
						})
					},
					isDistinguishDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(E.b)(G(s.id))(e)
					},
					moderatorPermissions: (e, t) => {
						const {
							comment: s
						} = t;
						return Object(x.g)(e, t) || Object(O.j)(e, {
							subredditId: s.subredditId
						})
					},
					modModeEnabled: x.N
				}),
				z = Object(a.b)(K, (e, t) => {
					let {
						comment: s
					} = t;
					return {
						onApproveComment: () => e(Object(m.H)(s.id)),
						onDistinguishComment: (t, n) => e(Object(m.S)(s.id, t, n)),
						onLockComment: () => e(Object(m.X)(s.id)),
						onRemoveComment: () => e(Object(m.cb)(s.id, !1)),
						onSpamComment: () => e(Object(m.cb)(s.id, !0)),
						onShowComment: () => e(Object(m.Y)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(p.h)({
							tooltipId: G(s.id)
						}))
					}
				});
			t.c = U(z(l.a.wrapped(Object(g.b)(e => {
				var {
					className: t,
					comment: s,
					currentUser: o,
					isCommentAuthor: a,
					collapsedBecauseCrowdControl: i,
					language: l,
					moderatorPermissions: m,
					modModeEnabled: p,
					onApproveComment: b,
					onDistinguishComment: g,
					onLockComment: x,
					onRemoveComment: C,
					onShowComment: O,
					onSpamComment: E,
					onToggleDistinguishDropdown: y,
					sendEvent: j
				} = e, _ = R(e, ["className", "comment", "currentUser", "isCommentAuthor", "collapsedBecauseCrowdControl", "language", "moderatorPermissions", "modModeEnabled", "onApproveComment", "onDistinguishComment", "onLockComment", "onRemoveComment", "onShowComment", "onSpamComment", "onToggleDistinguishDropdown", "sendEvent"]);
				const w = Object(v.a)(m),
					P = Object(h.b)(s),
					k = s.isApproved && P,
					I = !!o && o.isEmployee,
					S = !s.isRemoved,
					T = i,
					N = e => j(Object(f.a)(e, s.id));
				return r.a.createElement("div", {
					className: t
				}, (s.bannedBy || P) && r.a.createElement(F, {
					text: k ? n.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : n.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						b(), N("approve")
					}
				}, r.a.createElement(A, null)), S && r.a.createElement(r.a.Fragment, null, r.a.createElement(F, {
					text: s.bannedBy === d.k ? n.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : n.fbt._("Remove", null, {
						hk: "VP5J0"
					}),
					onClick: () => {
						C(), s.bannedBy === d.k ? N("confirm_remove") : N("remove")
					}
				}, r.a.createElement(D, null)), r.a.createElement(F, {
					text: n.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						E(), N("spam")
					}
				}, r.a.createElement(W, null))), r.a.createElement(F, {
					text: s.isLocked ? n.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : n.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						x(), N(s.isLocked ? "unlock" : "lock")
					}
				}, r.a.createElement(B, null)), a && !I && !s.bannedBy && r.a.createElement(F, {
					className: Object(c.a)({
						[M.a.selected]: _.isDistinguishDropdownOpen
					}),
					onClick: () => {
						N("mod_distinguish_menu"), y()
					}
				}, r.a.createElement(V, null), r.a.createElement(u.a, {
					isAdminDistinguished: s.isAdmin,
					isDropdownOpen: _.isDistinguishDropdownOpen,
					isModDistinguished: s.isMod,
					isStickied: s.isStickied,
					isTopLevelComment: !s.parentId,
					isUserEmployee: I,
					isUserMod: w,
					onDistinguishComment: g,
					sendEventWithName: N,
					tooltipId: G(s.id)
				})), T && r.a.createElement(F, {
					text: n.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						O()
					}
				}, r.a.createElement(H, null)))
			}), "CommentModToolsFlatlist", M.a)))
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/humanizeDateTime/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				u = s("./src/lib/timeAgo/index.ts"),
				h = s("./src/reddit/components/AuthorLink/index.tsx"),
				b = s("./src/reddit/components/AwardBadges/index.tsx"),
				g = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				x = s("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				v = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				f = s("./src/reddit/featureFlags/index.ts"),
				C = s("./src/reddit/selectors/economics.ts"),
				O = s("./src/reddit/components/Economics/TopTippers/Icon/index.tsx"),
				E = s("./src/reddit/components/Economics/TopTippers/CommentUsername/index.m.less"),
				y = s.n(E);
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
			var _ = Object(r.b)(() => Object(a.c)({
					post: (e, t) => {
						let {
							contentId: s
						} = t;
						return e.posts.models[s]
					},
					tippers: (e, t) => {
						if (f.d.spTopTippers(e)) return Object(C.v)(e, t)
					}
				}))((function(e) {
					if (e.tippers && e.tippers.allTippers.has(e.userId)) {
						const t = e.tippers.topTippers.ranking[e.userId] || 5,
							s = o.a.cloneElement(o.a.Children.only(e.children), {
								style: j(t)
							});
						return o.a.createElement("div", {
							className: y.a.container
						}, o.a.createElement(O.a, {
							className: y.a.badge,
							creatorId: e.creatorId || e.post && e.post.authorId,
							rank: t,
							subredditId: e.subredditId
						}), s)
					}
					return e.children
				})),
				w = s("./src/reddit/components/Flair/index.tsx"),
				P = s("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				k = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				I = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				S = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				T = s("./src/reddit/components/PostTopMeta/index.tsx"),
				N = s("./src/reddit/helpers/isRemoved.ts"),
				L = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				M = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				R = s("./src/reddit/i18n/utils.ts"),
				F = s("./src/reddit/actions/comment/index.ts"),
				A = s("./src/reddit/models/Comment/index.ts"),
				B = s("./src/reddit/models/Flair/index.ts"),
				D = s("./src/reddit/icons/fonts/Admin/index.tsx"),
				W = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				H = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				V = s("./src/reddit/icons/fonts/helpers.tsx"),
				U = s("./src/reddit/icons/fonts/Op/index.m.less"),
				G = s.n(U);
			var K = p.a.wrapped(e => o.a.createElement("i", {
					className: "".concat(Object(V.b)("op"), " ").concat(e.className),
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, o.a.createElement(V.a, null, e.desc)), "OpIcon", G.a),
				z = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				J = s("./src/reddit/icons/fonts/Report/index.tsx"),
				q = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				Y = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				X = s("./src/reddit/icons/svgs/Cake/index.tsx"),
				Q = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				Z = s("./src/reddit/controls/MetaData/index.tsx"),
				$ = s("./src/reddit/selectors/experiments/publicAwarding.ts"),
				ee = s("./src/reddit/selectors/subreddit.ts"),
				te = s("./src/reddit/selectors/userFlair.ts"),
				se = s("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				ne = s.n(se);

			function oe() {
				return (oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var re = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const ae = p.a.wrapped(w.b, "RightPositionedAuthorFlair", ne.a),
				ie = p.a.wrapped(D.a, "AdminIcon", ne.a),
				ce = p.a.wrapped(W.a, "Approve", ne.a),
				de = p.a.wrapped(H.a, "Lock", ne.a),
				le = p.a.div("AdminEmeritus", ne.a),
				me = p.a.wrapped(Y.a, "Automoderator", ne.a),
				pe = p.a.wrapped(X.a, "CakeIcon", ne.a),
				ue = p.a.wrapped(Q.a, "Moderator", ne.a),
				he = p.a.wrapped(z.a, "Remove", ne.a),
				be = p.a.wrapped(J.a, "Report", ne.a),
				ge = p.a.wrapped(q.a, "Spam", ne.a),
				xe = p.a.wrapped(K, "Op", ne.a),
				ve = p.a.wrapped(D.a, "Contractor", ne.a),
				fe = p.a.a("MetaLink", ne.a),
				Ce = p.a.wrapped(Z.a, "EditedText", ne.a),
				Oe = p.a.wrapped(Z.a, "StickiedText", ne.a),
				Ee = p.a.span("DeletedText", ne.a),
				ye = p.a.wrapped(Z.a, "MetaSeparator", ne.a),
				je = p.a.wrapped(Z.a, "CrowdControlText", ne.a),
				_e = p.a.wrapped(k.b, "AuthorHoverCard", ne.a),
				we = p.a.a("RemovalReason", ne.a),
				Pe = p.a.wrapped(g.b, "Component", ne.a),
				ke = Object(i.c)("comment.children"),
				Ie = Object(i.c)("comment.moreThanChildren"),
				Se = e => (t, s) => {
					let {
						comment: n,
						renderedInOverlay: o
					} = s;
					return "".concat(e).concat(n.id).concat(o ? "inOverlay" : "")
				},
				Te = Object(i.d)("comment.tooltips.admin"),
				Ne = Object(i.d)("comment.tooltips.cakeday"),
				Le = Object(i.d)("comment.tooltips.adminEmeritus"),
				Me = Object(i.d)("comment.tooltips.moderator"),
				Re = Object(i.d)("comment.tooltips.op"),
				Fe = Object(i.d)("comment.tooltips.contractor"),
				Ae = Object(r.b)(() => Object(a.c)({
					adminTooltipId: Se("CommentTopMeta--Admin--"),
					cakedayTooltipId: Se("CommentTopMeta--cakeday--"),
					adminEmeritusTooltipId: Se("CommentTopMeta--AdEm--"),
					automodTooltipId: Se("CommentTopMeta--Automod--"),
					approveTooltipId: Se("CommentTopMeta--Approve--"),
					createdTooltipId: Se("CommentTopMeta--Created--"),
					contractorTooltipId: Se("CommentTopMeta--Contractor--"),
					gildedTooltipId: Se("CommentTopMeta--Gold--"),
					lockedTooltipId: Se("CommentTopMeta--Locked--"),
					modTooltipId: Se("CommentTopMeta--Mod--"),
					opTooltipId: Se("CommentTopMeta--OP--"),
					publicAwardersEnabled: e => !!Object($.a)(e),
					removeTooltipId: Se("CommentTopMeta--Remove--"),
					reportTooltipId: Se("CommentTopMeta--Report--"),
					spamTooltipId: Se("CommentTopMeta--Spam--"),
					hasBadges: (e, t) => {
						let {
							comment: s
						} = t;
						return !!Object(C.t)(e, s.subredditId, s.authorId).length
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
								window.removeEventListener("focus", s), e(Object(F.N)({
									commentListNodeId: t
								})), window.setTimeout(() => e(Object(F.N)({
									commentListNodeId: t
								})), 5e3)
							})(e, t.comment.id, s)
						}))
					},
					onHideTooltip: () => e(Object(c.i)()),
					onShowTooltip: t => e(Object(c.f)({
						tooltipId: t
					})),
					openRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.comment.subredditId, [t.comment.id])))
					}
				}));
			t.a = Ae(e => {
				const {
					adminEmeritusTooltipId: t,
					adminTooltipId: s,
					approveTooltipId: n,
					automodTooltipId: r,
					cakedayTooltipId: a,
					children: i,
					className: c,
					collapsed: m,
					collapsedBecauseCrowdControl: p,
					comment: u,
					commentsPageKey: h,
					contractorTooltipId: g,
					compact: f,
					flair: C,
					flairPosition: O,
					hasBadges: E,
					isLivestreaming: y,
					ignoreFlairPosition: j,
					ignoreLock: _,
					language: k,
					lockedTooltipId: I,
					modTooltipId: N,
					onHideTooltip: L,
					onShowTooltip: M,
					opTooltipId: R,
					openRemovalReasonModal: F,
					publicAwardersEnabled: D,
					removeTooltipId: W,
					renderContractorBadge: H,
					renderedInOverlay: V,
					reportTooltipId: U,
					spamTooltipId: G,
					subredditDisplayText: K,
					topTippersEnabled: z
				} = e;
				if (u.isDeleted) return o.a.createElement(Be, oe({}, e, {
					className: Object(d.a)(c, ne.a.container, {
						[ne.a.collapsed]: m
					})
				}));
				if (m) return o.a.createElement(De, oe({}, e, {
					className: Object(d.a)(c, ne.a.container, {
						[ne.a.collapsed]: m
					})
				}));
				const J = !j && O === B.b.Left;
				return o.a.createElement("div", {
					className: Object(d.a)(c, ne.a.container, {
						[ne.a.collapsed]: m,
						[ne.a.hasBadges]: E,
						[ne.a.liveStreaming]: y
					})
				}, C && J && o.a.createElement(w.b, {
					flair: C,
					forceSmallEmojis: f
				}), !Object(A.d)(u) && o.a.createElement(Pe, {
					showAddCustom: !0,
					subredditId: u.subredditId,
					userId: u.authorId,
					uniqueIdentifier: u.id
				}), o.a.createElement(_e, {
					postOrComment: u,
					tooltipType: V ? T.c.Lightbox : void 0
				}, o.a.createElement(x.b, {
					ignore: Object(A.d)(u) || !!u.distinguishType && u.distinguishType !== l.C.NONE,
					subredditId: u.subredditId,
					userId: u.authorId
				}, o.a.createElement(He, {
					comment: u,
					isLivestreaming: y,
					isStrong: !!f,
					isAuthorDeleted: Object(A.d)(u),
					topTippersEnabled: z
				}, i && i))), p && o.a.createElement(je, null, "Crowd Control"), p && o.a.createElement(Z.c, {
					className: ne.a.metaText,
					key: "crowdControlSeparator"
				}), C && !J && o.a.createElement(ae, {
					flair: C,
					forceSmallEmojis: f
				}), !f && o.a.createElement(P.a, {
					className: ne.a.publicPoints,
					contentId: u.id,
					subredditId: u.subredditId,
					userId: u.authorId,
					username: u.author
				}), o.a.createElement(o.a.Fragment, null, o.a.createElement(S.b, {
					commentId: u.id
				}), o.a.createElement(S.a, {
					commentId: u.id,
					commentsPageKey: h
				}), o.a.createElement(Ge, {
					comment: u,
					compact: f,
					adminTooltipId: s,
					adminEmeritusTooltipId: t,
					cakedayTooltipId: a,
					contractorTooltipId: g,
					language: k,
					modTooltipId: N,
					onHideTooltip: L,
					onShowTooltip: M,
					opTooltipId: R,
					renderContractorBadge: H,
					subredditDisplayText: K
				})), !f && o.a.createElement(o.a.Fragment, null, !u.isDeleted && o.a.createElement(Z.b, {
					className: ne.a.metaText,
					isScoreHidden: u.isScoreHidden,
					language: k,
					score: u.score
				}), o.a.createElement(Z.c, {
					className: ne.a.metaText,
					key: "scoreCreatedSeparator"
				}), o.a.createElement(Ve, oe({
					key: "Created"
				}, e)), u.isStickied && ze(k), u.editedAt && We(k, u.editedAt)), o.a.createElement(o.a.Fragment, null, o.a.createElement(Ke, {
					comment: u,
					approveTooltipId: n,
					automodTooltipId: r,
					ignoreLock: _,
					language: k,
					lockedTooltipId: I,
					onHideTooltip: L,
					onShowTooltip: M,
					openRemovalReasonModal: F,
					removeTooltipId: W,
					reportTooltipId: U,
					spamTooltipId: G
				}), o.a.createElement(v.a, {
					className: ne.a.DonationAmount,
					contentId: u.id,
					subredditId: u.subredditId
				})), o.a.createElement(b.a, {
					showAwarders: D,
					tooltipType: V ? T.c.Lightbox : void 0,
					thing: u
				}))
			});
			const Be = e => {
					const {
						language: t,
						childrenInfo: s,
						collapsed: n,
						className: r,
						comment: a
					} = e;
					return o.a.createElement("div", {
						className: r
					}, o.a.createElement(Ee, null, a.deletedBy === A.a.User ? Object(i.a)(t, "comment.commentDeletedByAuthor") : Object(i.a)(t, "comment.commentDeletedByMod")), o.a.createElement(Ve, oe({
						key: "Created"
					}, e)), n && Ue({
						childrenInfo: s,
						language: t
					}))
				},
				De = e => {
					const {
						comment: t,
						language: s,
						className: n,
						childrenInfo: r
					} = e;
					return o.a.createElement("div", {
						className: n
					}, o.a.createElement("div", null, o.a.createElement(He, {
						comment: t,
						isAuthorDeleted: Object(A.d)(t),
						topTippersEnabled: !1
					})), o.a.createElement(Z.b, {
						className: ne.a.metaText,
						isScoreHidden: t.isScoreHidden,
						language: s,
						score: t.score
					}), o.a.createElement(Z.c, {
						className: ne.a.metaText,
						key: "scoreCreatedSeparator"
					}), o.a.createElement(Ve, oe({
						key: "Created"
					}, e)), Ue({
						childrenInfo: r,
						language: s
					}))
				},
				We = (e, t) => o.a.createElement(n.Fragment, null, o.a.createElement(Z.c, {
					className: ne.a.metaText
				}), o.a.createElement(Ce, null, Object(i.a)(e, "comment.edited", {
					time: Object(u.d)(e, t)
				}))),
				He = e => {
					const t = o.a.createElement(h.a, {
						className: ne.a.CommentAuthorLink,
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
					return e.topTippersEnabled ? o.a.createElement(_, {
						contentId: e.comment.postId,
						subredditId: e.comment.subredditId,
						userId: e.comment.authorId
					}, t) : t
				};
			class Ve extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCreatedTooltip = () => this.props.onShowTooltip(this.props.createdTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t,
							language: s,
							onCreatedClick: n
						} = e,
						r = re(e, ["comment", "language", "onCreatedClick"]);
					return o.a.createElement(fe, {
						href: t.permalink,
						id: r.createdTooltipId,
						onClick: n,
						onMouseEnter: this.onShowCreatedTooltip,
						onMouseLeave: r.onHideTooltip,
						rel: "nofollow",
						target: "_blank"
					}, o.a.createElement("span", null, Object(u.d)(s, t.created)), Je(r.createdTooltipId, Object(m.a)(t.created)))
				}
			}
			const Ue = e => {
				const {
					hasContinueThread: t,
					numChildren: s
				} = e.childrenInfo || {
					hasContinueThread: !1,
					numChildren: 0
				};
				return o.a.createElement(ye, {
					className: ne.a.metaText
				}, "(", t ? Ie(e.language, s, {
					numChildren: s
				}) : ke(e.language, s, {
					numChildren: s
				}), ")")
			};
			class Ge extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCakedayTooltip = () => this.props.onShowTooltip(this.props.cakedayTooltipId), this.onShowAdminTooltip = () => this.props.onShowTooltip(this.props.adminTooltipId), this.onShowAdminEmeritusTooltip = () => this.props.onShowTooltip(this.props.adminEmeritusTooltipId), this.onShowModTooltip = () => this.props.onShowTooltip(this.props.modTooltipId), this.onShowOpTooltip = () => this.props.onShowTooltip(this.props.opTooltipId), this.onShowContractorTooltip = () => this.props.onShowTooltip(this.props.contractorTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						s = re(e, ["comment"]);
					return o.a.createElement(n.Fragment, null, t.isAuthorCakeday && o.a.createElement(pe, {
						"aria-label": Ne(s.language),
						id: s.cakedayTooltipId,
						onMouseEnter: this.onShowCakedayTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isAuthorCakeday && Je(s.cakedayTooltipId, Ne(s.language)), t.isAdmin && o.a.createElement(ie, {
						desc: Te(s.language),
						id: s.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isAdmin && Je(s.adminTooltipId, Te(s.language)), t.distinguishType === l.C.ALUMNI_ADMIN && o.a.createElement(le, {
						"aria-label": Le(s.language),
						children: "Δ",
						id: s.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.distinguishType === l.C.ALUMNI_ADMIN && Je(s.adminEmeritusTooltipId, Le(s.language)), t.isMod && o.a.createElement(ue, {
						desc: Me(s.language, {
							displayText: s.subredditDisplayText
						}),
						id: s.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isMod && Je(s.modTooltipId, Me(s.language, {
						displayText: s.subredditDisplayText
					})), t.isOp && o.a.createElement(xe, {
						desc: Re(s.language),
						id: s.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isOp && Je(s.opTooltipId, Re(s.language)), s.renderContractorBadge && o.a.createElement(ve, {
						desc: Fe(s.language),
						id: s.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: s.onHideTooltip
					}), s.renderContractorBadge && Je(s.contractorTooltipId, Fe(s.language)))
				}
			}
			class Ke extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowApproveTooltip = () => this.props.onShowTooltip(this.props.approveTooltipId), this.onShowRemoveTooltip = () => this.props.onShowTooltip(this.props.removeTooltipId), this.onShowSpamTooltip = () => this.props.onShowTooltip(this.props.spamTooltipId), this.onShowAutomodTooltip = () => this.props.onShowTooltip(this.props.automodTooltipId), this.onShowReportTooltip = () => this.props.onShowTooltip(this.props.reportTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						s = re(e, ["comment"]);
					return o.a.createElement(n.Fragment, null, (t.approvedBy || t.isApproved) && o.a.createElement(ce, {
						desc: Object(L.a)(s.language, t),
						id: s.approveTooltipId,
						onMouseEnter: this.onShowApproveTooltip,
						onMouseLeave: s.onHideTooltip
					}), (t.approvedBy || t.isApproved) && Je(s.approveTooltipId, Object(L.a)(s.language, t)), Object(N.a)(t) && o.a.createElement(he, {
						desc: Object(L.c)(s.language, t),
						id: s.removeTooltipId,
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: s.onHideTooltip
					}), Object(N.a)(t) && Je(s.removeTooltipId, Object(L.c)(s.language, t)), Object(N.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && o.a.createElement(we, {
						onClick: s.openRemovalReasonModal
					}, Object(i.a)(s.language, "modTools.addARemovalReason")), Object(N.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && o.a.createElement(we, {
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: s.onHideTooltip
					}, Object(i.a)(s.language, "modTools.removalReason")), t.isLocked && !s.ignoreLock && o.a.createElement(de, {
						desc: Object(R.c)("Locked"),
						id: s.lockedTooltipId,
						onMouseEnter: () => {
							s.onShowTooltip(s.lockedTooltipId)
						},
						onMouseLeave: s.onHideTooltip
					}), t.bannedBy && t.isSpam && o.a.createElement(ge, {
						desc: Object(L.e)(s.language, t),
						id: s.spamTooltipId,
						onMouseEnter: this.onShowSpamTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.bannedBy && t.isSpam && Je(s.spamTooltipId, Object(L.e)(s.language, t)), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && o.a.createElement(me, {
						className: Object(d.a)({
							[ne.a.removed]: !!t.bannedBy
						}),
						desc: Object(L.b)(s.language),
						id: s.automodTooltipId,
						key: s.automodTooltipId,
						onMouseEnter: this.onShowAutomodTooltip,
						onMouseLeave: s.onHideTooltip
					}), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && Je(s.automodTooltipId, Object(L.b)(s.language)), Object(M.a)(t) && o.a.createElement(be, {
						desc: Object(L.d)(s.language, t.numReports),
						id: s.reportTooltipId,
						onMouseEnter: this.onShowReportTooltip,
						onMouseLeave: s.onHideTooltip
					}), Object(M.a)(t) && Je(s.reportTooltipId, Object(L.d)(s.language, t.numReports)))
				}
			}
			const ze = e => o.a.createElement(n.Fragment, null, o.a.createElement(Z.c, {
					className: ne.a.metaText
				}), o.a.createElement(Oe, null, Object(i.a)(e, "comment.stickied"))),
				Je = (e, t) => o.a.createElement(I.c, {
					tooltipId: e,
					text: t
				})
		},
		"./src/reddit/components/Comments/Comment/index.m.less": function(e, t, s) {
			e.exports = {
				ExpandButton: "_1nGapmdexvR0BuOkfAi6wa",
				expandButton: "_1nGapmdexvR0BuOkfAi6wa",
				ErrorText: "_3XArRVBsKuWegVHX9CQjH-",
				errorText: "_3XArRVBsKuWegVHX9CQjH-",
				CommentBody: "_3cjCphgls6DH-irkVaA0GM",
				commentBody: "_3cjCphgls6DH-irkVaA0GM",
				EditCommentForm: "JchsqHyN3thfSnN8dUM3",
				editCommentForm: "JchsqHyN3thfSnN8dUM3",
				VerticalVotes: "kB7GZ7EzNg1Msq-nEnY0z",
				verticalVotes: "kB7GZ7EzNg1Msq-nEnY0z",
				voteButton: "_2m5vzALl8kQdr9kwIFUo5t",
				upDownVote: "_22nWXKAY6OzAfK5GcUqWV2",
				CommentContentWrapper: "_3tw__eCCe7j-epNCKGXUKk",
				commentContentWrapper: "_3tw__eCCe7j-epNCKGXUKk",
				isPendingDeletion: "_2R8NbVFaqNnBbuA7o2osje",
				isRemoved: "_2zA6eSGIr_oQU7np0uNqoB",
				isLocked: "t8jgOblBrQTKWHnVy0zGD",
				isActive: "_1vvFtxiq5874iIdCUYlL-d",
				isCollapsed: "BjX6VVsz_8JJDN1Ap9_IL",
				highlightComment: "_2ym9uYDdCxu8P4UFCLNCgE",
				CommentWrapper: "P8SGAKMtRxNwlmLz1zdJu",
				commentWrapper: "P8SGAKMtRxNwlmLz1zdJu",
				focused: "_1Sy9NCNbLA9uJZj-qgUrMG",
				topLevel: "_1z5rdmX8TDr6mqwNv7A70U",
				TopMeta: "_1S45SPAIb30fsXtEcKPSdt",
				topMeta: "_1S45SPAIb30fsXtEcKPSdt",
				collapsed: "_3c9Go6433BnvYx8_7MkPnt",
				CommentCreation: "_2jhbZV6mVCM5Ma7Z376DW2",
				commentCreation: "_2jhbZV6mVCM5Ma7Z376DW2"
			}
		},
		"./src/reddit/components/Comments/CommentListNode/index.m.less": function(e, t, s) {
			e.exports = {
				CommentListNodeWrapper: "_3sf33-9rVAO_v4y0pIW_CH",
				commentListNodeWrapper: "_3sf33-9rVAO_v4y0pIW_CH",
				isHidden: "_2csJ1c6CZ_3VQ75SVdUAwt",
				isAwarded: "_3x1wnLNRJ5UQU9fODNc2V4",
				isNightmodeOn: "_1XNv4WhzL_uEQ36cwbjMOe"
			}
		},
		"./src/reddit/components/Comments/ContinueThreadLink/index.m.less": function(e, t, s) {
			e.exports = {
				ArrowRight: "egHA5MD_goQfvgLP3zgST",
				arrowRight: "egHA5MD_goQfvgLP3zgST",
				HoverSpan: "_2bsN7AuzEexqxXD-vhOkM7",
				hoverSpan: "_2bsN7AuzEexqxXD-vhOkM7",
				Wrapper: "_3ndawrYzcvjHPJFYUHijfP",
				wrapper: "_3ndawrYzcvjHPJFYUHijfP",
				isActive: "btJMgy_2EOVvOVP-DikGZ",
				LinkOrOverlayLink: "b57A3J7QBa7TvY8XeupVn",
				linkOrOverlayLink: "b57A3J7QBa7TvY8XeupVn"
			}
		},
		"./src/reddit/components/Comments/MoreCommentsItem/index.m.less": function(e, t, s) {
			e.exports = {
				MoreCommentsItemWrapper: "_3_mqV5-KnILOxl1TvgYtCk",
				moreCommentsItemWrapper: "_3_mqV5-KnILOxl1TvgYtCk",
				MoreComments: "_2HYsucNpMdUpYlGBMviq8M",
				moreComments: "_2HYsucNpMdUpYlGBMviq8M",
				MoreCommentsInteractive: "_23013peWUhznY89KuYPZKv",
				moreCommentsInteractive: "_23013peWUhznY89KuYPZKv",
				isActive: "l7--vTMsoEqrU8pjG52TF"
			}
		},
		"./src/reddit/components/Comments/States/index.m.less": function(e, t, s) {
			e.exports = {
				CommentsPlaceholderContainer: "_2o0N1VHuLszWHqY5A8iayv",
				commentsPlaceholderContainer: "_2o0N1VHuLszWHqY5A8iayv",
				CommentPlaceholder: "_2114DnVtHe_0MtbEW85tnL",
				commentPlaceholder: "_2114DnVtHe_0MtbEW85tnL",
				VoteColumn: "_3j7WNOCzFwCp1SXZGJP1-V",
				voteColumn: "_3j7WNOCzFwCp1SXZGJP1-V",
				TextColumn: "_3tQxKBNuEJsKH_mPQEy34W",
				textColumn: "_3tQxKBNuEJsKH_mPQEy34W",
				StateContainer: "TbMmDiSaSaBQFF9F3FGe8",
				stateContainer: "TbMmDiSaSaBQFF9F3FGe8",
				CommentsIcon: "_1-f8S_KoiOmIpA8kGxOgfh",
				commentsIcon: "_1-f8S_KoiOmIpA8kGxOgfh",
				SnooFacepalm: "_2AxaYiv6EkZse5msRZqowQ",
				snooFacepalm: "_2AxaYiv6EkZse5msRZqowQ",
				EmptyTitle: "_39dVqXnozb8JxasPyFPu6C",
				emptyTitle: "_39dVqXnozb8JxasPyFPu6C",
				ErrorTitle: "_2Nj40mHW74FkFefq6oqWkb",
				errorTitle: "_2Nj40mHW74FkFefq6oqWkb",
				EmptyText: "_2x3Avx0lbWMcic-5bE_guO",
				emptyText: "_2x3Avx0lbWMcic-5bE_guO",
				LoadingFullPage: "_3kZ_esGcijvfnM9KjA27vj",
				loadingFullPage: "_3kZ_esGcijvfnM9KjA27vj",
				Upvote: "_1lwmFW6D9PmeT_QA-R5F_0",
				upvote: "_1lwmFW6D9PmeT_QA-R5F_0",
				Downvote: "_32W1DnzyRkYXP82ZO96H0V",
				downvote: "_32W1DnzyRkYXP82ZO96H0V",
				TopMetaPlaceholder: "_24vSs1yG3YhINbU6QRiFR9",
				topMetaPlaceholder: "_24vSs1yG3YhINbU6QRiFR9",
				CommentBodyPlaceholder: "_3S0qviXPTlIEUjYjSKT_Lb",
				commentBodyPlaceholder: "_3S0qviXPTlIEUjYjSKT_Lb"
			}
		},
		"./src/reddit/components/Comments/States/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return I
			})), s.d(t, "b", (function() {
				return S
			})), s.d(t, "g", (function() {
				return T
			})), s.d(t, "e", (function() {
				return N
			})), s.d(t, "d", (function() {
				return L
			})), s.d(t, "f", (function() {
				return M
			})), s.d(t, "a", (function() {
				return U
			}));
			var n = s("./node_modules/lodash/times.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/app/strings/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/page.ts"),
				p = s("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/helpers/describeApiError/index.ts"),
				b = s("./src/reddit/helpers/path/index.ts"),
				g = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				x = s("./src/reddit/i18n/components.tsx"),
				v = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				f = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				C = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				O = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				E = s("./src/reddit/components/Comments/States/index.m.less"),
				y = s.n(E);
			const j = l.a.wrapped(C.a, "CommentsIcon", y.a),
				_ = l.a.wrapped(O.a, "SnooFacepalm", y.a),
				w = l.a.p("EmptyTitle", y.a),
				P = l.a.p("ErrorTitle", y.a),
				k = l.a.p("EmptyText", y.a),
				I = e => {
					let {
						className: t,
						isChat: s
					} = e;
					return a.a.createElement("div", {
						className: Object(d.a)(y.a.StateContainer, t)
					}, a.a.createElement(j, null), a.a.createElement(w, null, a.a.createElement(x.c, null, "no ", s ? "messages" : "comments", " yet")), a.a.createElement(k, null, a.a.createElement(x.c, null, "Be the first to share what you think!")))
				},
				S = () => a.a.createElement("div", {
					className: y.a.StateContainer
				}, a.a.createElement(j, null), a.a.createElement(w, null, a.a.createElement(x.c, null, "no other discussions yet")), a.a.createElement(k, null, a.a.createElement(x.c, null, "Be the first to post the same link or crosspost in another community!"))),
				T = e => {
					let {
						link: t
					} = e;
					return a.a.createElement("div", {
						className: y.a.StateContainer
					}, a.a.createElement(j, null), a.a.createElement(w, null, a.a.createElement(x.c, null, "That comment is missing")), a.a.createElement(u.h, {
						to: Object(b.b)(t)
					}, a.a.createElement(x.c, null, "View all comments")))
				},
				N = Object(i.b)(null, (e, t) => {
					let {
						postId: s,
						commentId: n,
						sort: o
					} = t;
					return {
						onClick: () => e(Object(m.q)(s, n, {
							sort: o
						}, o))
					}
				})(e => {
					let {
						apiError: t,
						language: s,
						onClick: n
					} = e;
					return a.a.createElement("div", {
						className: y.a.StateContainer
					}, a.a.createElement(_, null), a.a.createElement(P, null, t ? Object(h.a)({
						apiError: t,
						language: s,
						isLoggedOut: !1
					}) : Object(c.a)(s, "comment.error")), a.a.createElement(u.f, {
						onClick: n
					}, a.a.createElement(x.c, null, "retry")))
				}),
				L = () => a.a.createElement("div", null, "500"),
				M = l.a.wrapped(e => {
					let {
						className: t
					} = e;
					return a.a.createElement("div", {
						className: t
					}, a.a.createElement(p.a, null))
				}, "LoadingFullPage", y.a),
				R = l.a.div("CommentsPlaceholderContainer", y.a),
				F = l.a.div("CommentPlaceholder", y.a),
				A = l.a.div("VoteColumn", y.a),
				B = l.a.div("TextColumn", y.a),
				D = l.a.wrapped(f.a, "Upvote", y.a),
				W = l.a.wrapped(v.a, "Downvote", y.a),
				H = () => a.a.createElement("div", {
					className: Object(d.a)(y.a.TopMetaPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				V = () => a.a.createElement("div", {
					className: Object(d.a)(y.a.CommentBodyPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				U = () => a.a.createElement(R, null, o()(10, e => a.a.createElement(F, {
					key: e
				}, a.a.createElement(A, null, a.a.createElement(D, null), a.a.createElement(W, null)), a.a.createElement(B, null, a.a.createElement(H, null), a.a.createElement(V, null)))))
		},
		"./src/reddit/components/Comments/ThreadLines/index.m.less": function(e, t, s) {
			e.exports = {
				Line: "_36AIN2ppxy_z-XSDxTvYj5",
				line: "_36AIN2ppxy_z-XSDxTvYj5",
				LineContainer: "_1DooEIX-1Nj5rweIc5cw_E",
				lineContainer: "_1DooEIX-1Nj5rweIc5cw_E",
				ShortLineContainer: "_3Wv3am0TXfTcugZJ6niui",
				shortLineContainer: "_3Wv3am0TXfTcugZJ6niui"
			}
		},
		"./src/reddit/components/Comments/index.m.less": function(e, t, s) {
			e.exports = {
				Scroller: "_1YCqQVO-9r-Up6QPB9H6_4",
				scroller: "_1YCqQVO-9r-Up6QPB9H6_4"
			}
		},
		"./src/reddit/components/Comments/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/isEqual.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				p = s("./src/reddit/actions/comment/index.ts"),
				u = s("./src/reddit/constants/comments.ts"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				b = s("./src/reddit/constants/elementClassNames.ts"),
				g = s("./src/reddit/constants/gold.ts"),
				x = s("./src/reddit/selectors/comments.ts"),
				v = s("./src/reddit/selectors/communityAwards.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				C = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/app/strings/index.ts")),
				O = s("./src/reddit/i18n/utils.ts"),
				E = s("./src/reddit/models/PostDraft/index.ts"),
				y = s("./src/lib/makeDraftKey/index.ts"),
				j = s("./src/lib/objectSelector/index.ts"),
				_ = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				w = s("./src/reddit/icons/fonts/helpers.tsx"),
				P = s("./src/reddit/icons/fonts/Expand/index.m.less"),
				k = s.n(P);
			var I, S, T = m.a.wrapped(e => a.a.createElement("i", {
					className: "".concat(Object(w.b)("expand"), " ").concat(e.className)
				}), "Expand", k.a),
				N = s("./src/reddit/components/Comments/Comment/ExpandButton/index.m.less"),
				L = s.n(N),
				M = m.a.wrapped(e => a.a.createElement("button", e, a.a.createElement(T, null)), "Component", L.a),
				R = s("./node_modules/lodash/defer.js"),
				F = s.n(R),
				A = s("./src/reddit/actions/tooltip.ts"),
				B = s("./src/reddit/selectors/tooltip.ts"),
				D = s("./src/lib/makeCommentPermalink/index.ts"),
				W = s("./src/reddit/actions/gold/modals.ts"),
				H = s("./src/reddit/actions/modal.ts"),
				V = s("./src/reddit/actions/reportFlow.ts"),
				U = s("./src/reddit/helpers/correlationIdTracker.ts"),
				G = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				K = s("./src/reddit/helpers/trackers/lightbox.ts"),
				z = s("./src/reddit/i18n/components.tsx"),
				J = s("./src/reddit/selectors/activeModalId.ts"),
				q = s("./src/reddit/selectors/posts.ts"),
				Y = s("./src/reddit/selectors/subreddit.ts"),
				X = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				Q = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				Z = s.n(Q);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(I || (I = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(S || (S = {}));
			const $ = (e, t) => {
					const s = Z.a[t],
						n = Z.a[e];
					return Object(d.a)(s, n)
				},
				ee = e => Object(d.a)(Z.a["depth".concat(Math.min(3 * Math.ceil(e.depth / 3), 10))], {
					[Z.a.isInOverlay]: e.isInOverlay,
					[Z.a.isModModeEnabled]: e.isModModeEnabled
				});
			var te = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				se = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				ne = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				oe = s("./src/higherOrderComponents/makeAsync.tsx"),
				re = s("./src/reddit/featureFlags/index.ts"),
				ae = s("./src/reddit/selectors/economics.ts");
			const ie = Object(oe.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~61cbc843"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad08f508"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~c734f0e1"), s.e("EconomicsEntryPointsCommentFlatlistSupportCTA")]).then(s.bind(null, "./src/reddit/components/Economics/EntryPoints/CommentFlatlistSupportCTA/index.tsx")).then(e => e.default)
			});
			var ce = Object(i.b)(() => Object(c.c)({
					featureEnabled: re.d.spSupport,
					userAcceptsSupport: (e, t) => {
						const s = e.comments.models[t.contentId];
						return !!s && Object(ae.k)(e, {
							contentId: s.id,
							subredditId: s.subredditId
						})
					}
				}))((function(e) {
					return e.featureEnabled && e.userAcceptsSupport ? a.a.createElement(ie, e) : null
				})),
				de = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				le = s("./src/reddit/components/ModModeReports/helpers.ts"),
				me = s("./src/reddit/components/OverflowMenu/index.tsx"),
				pe = s("./src/reddit/components/ReportFlow/index.tsx"),
				ue = s("./src/reddit/components/ShareMenu/index.tsx"),
				he = s("./src/reddit/components/TrackingHelper/index.tsx"),
				be = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				ge = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				xe = s("./src/reddit/helpers/trackers/modTools.ts"),
				ve = s("./src/reddit/layout/row/Inline/index.tsx"),
				fe = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Ce = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				Oe = s("./src/reddit/icons/fonts/Gild/index.tsx"),
				Ee = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				ye = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				je = s("./src/reddit/icons/fonts/Report/index.tsx"),
				_e = s("./src/reddit/icons/fonts/Save/index.tsx"),
				we = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				Pe = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				ke = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				Ie = s.n(ke);
			const Se = m.a.wrapped(Ce.a, "CommentIcon", Ie.a),
				Te = m.a.wrapped(je.a, "Report", Ie.a),
				Ne = m.a.wrapped(Ee.a, "IgnoreReport", Ie.a),
				Le = m.a.wrapped(de.a, "ModActionsMenu", Ie.a),
				Me = m.a.div("OverflowMenuSpacer", Ie.a),
				Re = m.a.wrapped(me.a, "DropdownRow", Ie.a),
				Fe = m.a.wrapped(ve.a, "Flatlist", Ie.a),
				Ae = m.a.button("Button", Ie.a),
				Be = m.a.wrapped(te.c, "ModToolsFlatlist", Ie.a),
				De = m.a.wrapped(be.a, "ViewReportsDropdown", Ie.a),
				We = e => "Comment-".concat(e, "--Modal--DeleteComment"),
				He = e => "Distinguish--Dropdown--".concat(e),
				Ve = e => "".concat(e, "-overflow-menu"),
				Ue = e => "View--Reports--".concat(e),
				Ge = Object(c.c)({
					currentUser: f.i,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(J.a)(e) === We(s.id)
					},
					isDistinguishDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(B.b)(He(s.id))(e)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(x.A)(e, {
							commentId: s.id
						})
					},
					isReportsDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(B.b)(Ue(s.id))(e)
					},
					isLoggedIn: f.G,
					postIsArchived: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(q.G)(e, {
							postId: s.postId
						})
					},
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(q.H)(e, {
							postId: s.postId
						})
					},
					postPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(q.K)(e, {
							postId: s.postId
						})
					},
					reportFlowIsOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return e.reportFlow.postOrCommentId === s.id
					},
					sendRepliesToggled: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(x.G)(e, {
							commentId: s.id
						})
					},
					subredditAboutInfo: (e, t) => {
						let {
							subreddit: s
						} = t;
						return s ? Object(Y.v)(e, {
							subredditName: s.name
						}) : void 0
					},
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(q.Y)(e, {
							postId: s.postId
						})
					}
				});
			class Ke extends a.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(K.b)(this.props.comment.postId, "comment_".concat(e))), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(xe.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(xe.e)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						this.props.sendEvent(Object(xe.d)("edit", this.props.comment.id)), this.props.handleEdit()
					}, this.handleGild = async () => {
						Object(U.d)(U.a.GildingFlow), this.props.onGildClick();
						const {
							clickGildEvent: e
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(e(this.props.comment.id))
					}, this.handleDelete = () => {
						this.props.sendEvent(Object(xe.d)("delete", this.props.comment.id)), this.props.toggleDeleteCommentModal()
					}, this.handleReportClick = () => {
						this.props.sendEvent(Object(xe.a)("report", this.props.comment.id)), this.props.onReportClick()
					}, this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(xe.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(xe.b)(e, this.props.comment.id))
				}
				render() {
					const {
						comment: e,
						className: t,
						currentUser: s,
						deleteComment: n,
						depth: o,
						handleReply: i,
						isLoggedIn: c,
						isPendingDeletion: l,
						language: m,
						onDistinguishComment: p,
						onIgnoreReports: u,
						onToggleReportsDropdown: h,
						moderatorPermissions: b,
						modModeEnabled: g,
						postIsArchived: x,
						postIsLocked: v,
						postPermalink: f,
						renderedInOverlay: C,
						sendEvent: E,
						subreddit: y,
						subredditAboutInfo: j,
						toggleDeleteCommentModal: _,
						toggleSendReplies: w,
						trackClick: P
					} = this.props, k = Object(G.a)(b), T = !!s && s.displayText === e.author, N = !!s && s.isEmployee, L = !(j && j.userIsBanned) && (v || x || k && c || e.isLocked ? k && c : c), M = Object(le.a)(e), R = k && !g && T && !e.bannedBy, A = T && N && !e.bannedBy, B = R || A, W = s && e.isGildable, H = [];
					L && H.push({
						breakpointGroup: S.LoggedInUser,
						icon: a.a.createElement(Se, null),
						key: "reply",
						onClick: () => {
							i(), F()(() => P("reply")())
						},
						text: Object(O.c)("Reply")
					}), s && !T && H.push(a.a.createElement(ce, {
						className: Ie.a.supportButton,
						contentId: e.id,
						key: "support-cta",
						subredditId: e.subredditId,
						targetName: e.author
					})), W && H.push({
						breakpointGroup: S.LoggedInUser,
						icon: a.a.createElement(Oe.a, null),
						isIconOverflowOnly: !0,
						key: "award",
						onClick: this.handleGild,
						text: Object(O.c)("Give Award")
					}), H.push(a.a.createElement(ue.a, {
						dropdownId: "".concat(e.id, "-comment-share-menu"),
						key: "share",
						permalink: Object(D.a)(f, e.id),
						sendEventWithName: this.sendCommentEventWithName,
						subreddit: y
					}, a.a.createElement(Ae, {
						onClick: () => this.sendCommentEventWithName("share")
					}, a.a.createElement(z.c, null, "share")))), T || H.push({
						breakpointGroup: S.LoggedInUser,
						icon: a.a.createElement(je.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: Object(O.c)("Report")
					}), H.push({
						breakpointGroup: S.LoggedInUser,
						icon: e.isSaved ? a.a.createElement(fe.e, null) : a.a.createElement(_e.a, null),
						isIconOverflowOnly: !0,
						key: "save",
						onClick: this.handleSave,
						text: e.isSaved ? Object(O.c)("Unsave") : Object(O.c)("Save")
					}), T && H.push({
						breakpointGroup: S.LoggedInUser,
						icon: a.a.createElement(we.a, null),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: Object(O.c)("Edit")
					});
					const V = H.map(e => a.a.isValidElement(e) ? e : a.a.createElement(Ae, {
							className: $(e.breakpointGroup, I.HideIfVWSmaller),
							disabled: l,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text)),
						U = H.map(e => a.a.isValidElement(e) ? null : a.a.createElement(Re, {
							className: $(e.breakpointGroup, I.HideIfVWLarger),
							displayText: e.text,
							iconWrapperClassName: Ie.a.iconWrapper,
							key: e.key,
							onClick: e.onClick,
							textClassName: Ie.a.dropdownRowText
						}, e.icon));
					return a.a.createElement(r.Fragment, null, a.a.createElement(Fe, {
						className: Object(d.a)(ee({
							depth: o,
							isInOverlay: C,
							isModModeEnabled: k && g
						}), t)
					}, V, a.a.createElement(Me, {
						className: T ? void 0 : $(S.LoggedInUser, I.HideIfVWLarger)
					}, a.a.createElement(me.b, {
						className: Ie.a.overflowMenu,
						disabled: l,
						dropdownId: Ve(e.id),
						onClick: () => E(Object(xe.a)("comment_overflow_menu", e.id))
					}, U, T && a.a.createElement(a.a.Fragment, null, a.a.createElement(Re, {
						displayText: Object(O.c)("Delete comment"),
						iconWrapperClassName: Ie.a.iconWrapper,
						onClick: this.handleDelete,
						textClassName: Ie.a.dropdownRowText
					}, a.a.createElement(Pe.b, null)), a.a.createElement(ge.a, {
						text: Object(O.c)("Send me reply notifications"),
						onClick: w,
						isSelected: this.props.sendRepliesToggled
					})))), this.props.isConfirmModalOpen && a.a.createElement(se.a, {
						actionText: Object(O.c)("delete"),
						cancelActionText: Object(O.c)("keep"),
						headerText: Object(O.c)("Delete comment"),
						modalText: Object(O.c)("Are you sure you want to delete your comment?"),
						onConfirm: n,
						toggleModal: _,
						trackClick: () => {},
						withOverlay: !0
					}), k && a.a.createElement(a.a.Fragment, null, g && a.a.createElement(Be, {
						className: $(S.Moderator, I.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: T,
						language: m
					}), a.a.createElement(Le, {
						className: g ? $(S.Moderator, I.HideIfVWLarger) : void 0,
						dropdownId: "".concat(e.id, "-mod-actions-menu"),
						inCommentFlatlist: !0,
						onClick: () => E(Object(xe.a)("comment_mod_action_menu", e.id))
					}, a.a.createElement(ye.a, null), a.a.createElement(X.a, {
						comment: e,
						language: m,
						tooltipId: "".concat(e.id, "-mod-actions-menu")
					}))), Object(le.c)(e) && !g && a.a.createElement(te.b, {
						text: "".concat(M),
						onClick: () => {
							h(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: Ue(e.id)
					}, a.a.createElement(De, {
						model: e,
						onIgnoreReports: () => {
							u(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Ue(e.id)
					}), e.ignoreReports ? a.a.createElement(Ne, null) : a.a.createElement(Te, null)), B && a.a.createElement(te.b, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, a.a.createElement(te.a, null), a.a.createElement(ne.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: N,
						isUserMod: k,
						onDistinguishComment: p,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: He(e.id)
					}))), this.props.reportFlowIsOpen && a.a.createElement(pe.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: pe.b,
						postId: this.props.comment.postId
					}))
				}
			}
			var ze = Object(i.b)(Ge, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n
					} = t;
					return {
						deleteComment: () => n && e(Object(p.db)(s.id, s.postId)),
						handleDelete: () => {
							e(Object(H.i)(We(s.id))), e(Object(A.h)({
								tooltipId: Ve(s.id)
							}))
						},
						handleEdit: () => {
							const t = s.media && s.media.rteMode;
							n && e(Object(p.V)({
								commentId: s.id,
								draftKey: Object(y.a)(E.c.edit, s.id),
								text: s.bodyMD || "",
								commentMode: t,
								commentsPageKey: n
							}))
						},
						handleReply: () => n && e(Object(p.ob)({
							parentCommentId: s.id,
							commentsPageKey: n
						})),
						onDistinguishComment: (t, n) => e(Object(p.S)(s.id, t, n)),
						onGildClick: () => e(Object(W.d)(s.id)),
						onIgnoreReports: () => e(Object(p.pb)(s.id)),
						onReportClick: () => e(Object(V.j)(s.id)),
						onToggleSave: () => e(Object(p.gb)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(A.h)({
							tooltipId: He(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(A.h)({
							tooltipId: Ue(s.id)
						})),
						toggleDeleteCommentModal: () => e(Object(H.i)(We(s.id))),
						toggleSendReplies: () => e(Object(p.hb)(s.id))
					}
				})(Object(he.b)(Ke)),
				Je = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				qe = s("./src/reddit/components/GildModal/getGildModalId.ts"),
				Ye = s("./src/reddit/components/GildModal/Loader.tsx"),
				Xe = s("./src/reddit/components/ModModeReports/index.tsx"),
				Qe = s("./src/reddit/components/RichTextJson/index.tsx"),
				Ze = s("./src/reddit/components/VerticalVotes/index.tsx"),
				$e = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				et = s("./src/reddit/constants/componentTestIds.ts"),
				tt = s("./src/reddit/contexts/PageLayer/index.tsx"),
				st = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				nt = s("./src/reddit/controls/ErrorText/index.tsx"),
				ot = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				rt = s("./src/reddit/models/Subreddit/index.ts"),
				at = s("./src/reddit/models/Vote/index.ts"),
				it = s("./src/reddit/selectors/gild.ts"),
				ct = s("./src/reddit/selectors/moderatorPermissions.ts"),
				dt = s("./src/reddit/reducers/comments/visitHighlightingFilter/index.ts"),
				lt = s("./src/reddit/selectors/moderatingComments.ts"),
				mt = s("./src/reddit/components/Comments/Comment/index.m.less"),
				pt = s.n(mt);

			function ut() {
				return (ut = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var ht = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const bt = m.a.wrapped(M, "ExpandButton", pt.a),
				gt = m.a.wrapped(nt.b, "ErrorText", pt.a),
				xt = m.a.wrapped(Ze.a, "VerticalVotes", pt.a),
				vt = m.a.wrapped(Je.a, "TopMeta", pt.a),
				ft = m.a.div("CommentContentWrapper", pt.a),
				Ct = m.a.div("CommentWrapper", pt.a),
				Ot = m.a.div("CommentBody", pt.a),
				Et = m.a.wrapped(_.a, "CommentCreation", pt.a),
				yt = m.a.wrapped(Et, "EditCommentForm", pt.a),
				jt = Object(tt.t)(),
				_t = Object(i.b)(() => Object(c.c)({
					comment: (e, t) => Object(x.n)(e, t),
					currentProfileModPermissions: tt.g,
					depth: (e, t) => Object(x.j)(e, t),
					collapsed: lt.b,
					collapsedBecauseCrowdControl: lt.a,
					flair: x.e,
					focused: x.u,
					gildModalIsOpen: (e, t) => {
						let {
							commentId: s
						} = t;
						const n = Object(qe.b)(s);
						return Object(it.c)(e, n)
					},
					isEditing: x.z,
					isLoggedIn: f.G,
					isPendingDeletion: x.A,
					language: f.O,
					moderatorPermissions: (e, t) => {
						const s = Object(x.n)(e, t);
						return s ? Object(ct.j)(e, {
							subredditId: s.subredditId
						}) : null
					},
					modModeEnabled: tt.N,
					errorMsgs: x.E,
					replyFormOpen: x.H,
					subreddit: tt.q,
					subredditType: x.J,
					highlightComment: (e, t) => {
						let {
							commentId: s
						} = t;
						const n = Object(x.q)(e);
						if (n === dt.a.None) return !1;
						const o = Object(x.n)(e, {
							commentId: s
						});
						if (!o) return !1;
						const r = Object(f.p)(e),
							a = !!Object(ct.i)(e, {
								postId: o.postId
							}),
							i = Object(q.M)(e, {
								postId: o.postId
							});
						if (!i || !i.previousVisits || i.previousVisits.length < 1) return !1;
						const c = n === dt.a.Last ? i.previousVisits[i.previousVisits.length - 1] : i.previousVisits[0];
						return (a || r) && o.created > c
					}
				}), (e, t) => {
					let {
						commentId: s,
						commentsPageKey: n,
						scrollToAndRemeasure: o,
						trackClick: r
					} = t;
					return {
						onCollapseClick: () => e(Object(p.nb)({
							commentId: s,
							commentsPageKey: n,
							scrollToAndRemeasure: o
						})),
						onIgnoreReports: () => e(Object(p.pb)(s)),
						onVoteClick: t => {
							const [n, o] = t === at.a.upvoted ? [Object(p.rb)(s), "upvote_comment"] : [Object(p.T)(s), "downvote_comment"];
							r(o)(), e(n)
						}
					}
				}),
				wt = Object(j.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				Pt = jt(_t(e => {
					const {
						childrenInfo: t,
						clearHovered: s,
						comment: n,
						commentsPageKey: o,
						collapsed: i,
						collapsedBecauseCrowdControl: c,
						currentProfileModPermissions: l,
						depth: m,
						errorMsgs: u,
						flair: h,
						focused: b,
						gildModalIsOpen: g,
						highlightComment: x,
						isActive: v,
						isEditing: f,
						isLoggedIn: j,
						isPendingDeletion: _,
						language: w,
						moderatorPermissions: P,
						modModeEnabled: k,
						onCollapseClick: I,
						onIgnoreReports: S,
						onLineMouseOver: T,
						onVoteClick: N,
						replyFormOpen: L,
						subreddit: M,
						trackClick: R,
						renderedInOverlay: F,
						subredditType: A
					} = e, B = !f && !n.isDeleted && !!u && u.length > 0, D = Object(y.a)(E.c.edit, n.id), W = Object(y.a)(E.c.replyToComment, n.id), H = Object(G.a)(P), V = n.authorIsContractor && A === rt.c.EmployeesOnly, U = n.isLocked;
					return a.a.createElement(Ct, {
						className: Object(d.a)("Comment ".concat(n.id), {
							[pt.a.focused]: b,
							[pt.a.topLevel]: !m
						})
					}, i && a.a.createElement(bt, {
						className: n.id,
						onClick: () => {
							s(), I(), R("collapse")()
						},
						onMouseOver: () => T(n.id),
						onMouseOut: s
					}), !i && !n.isDeleted && a.a.createElement(xt, {
						compact: !0,
						downvoteButtonClassName: pt.a.voteButton,
						downvoteClassName: pt.a.upDownVote,
						model: n,
						onVoteClick: N,
						upvoteButtonClassName: pt.a.voteButton,
						upvoteClassName: pt.a.upDownVote
					}), a.a.createElement(ft, {
						className: Object(d.a)({
							[pt.a.highlightComment]: x,
							[pt.a.isActive]: v,
							[pt.a.isCollapsed]: i,
							[pt.a.isLocked]: U,
							[pt.a.isPendingDeletion]: _,
							[pt.a.isRemoved]: !!n.bannedBy
						})
					}, a.a.createElement(ot.a, null, Object(C.a)(w, "comment.level", {
						level: m + 1
					})), a.a.createElement(vt, {
						childrenInfo: t,
						className: Object(d.a)({
							[pt.a.collapsed]: i
						}),
						collapsed: i,
						collapsedBecauseCrowdControl: c,
						comment: n,
						commentsPageKey: o,
						flair: h,
						language: w,
						renderedInOverlay: F,
						renderContractorBadge: V
					}), !i && a.a.createElement(r.Fragment, null, f && a.a.createElement(yt, {
						autofocus: !0,
						commentsPageKey: o,
						depth: m,
						draftType: E.c.edit,
						draftKey: D,
						rtJson: Object($e.a)(n),
						mediaMetadata: n.media && n.media.mediaMetadata || void 0,
						isTopLevelComment: !1,
						parentCommentId: n.id,
						submitAction: e => Object(p.eb)({
							id: n.id,
							commentsPageKey: o,
							depth: m,
							draftKey: D,
							formData: e
						}),
						submitButtonText: Object(O.c)("save edits")
					}), !f && !n.isDeleted && a.a.createElement(Ot, {
						"data-test-id": et.d
					}, a.a.createElement(Qe.a, {
						content: Object($e.a)(n),
						mediaMetadata: n.media && n.media.mediaMetadata,
						rtJsonElementProps: wt(e)
					})), k && H && Object(le.c)(n) && a.a.createElement(Xe.a, {
						language: w,
						onIgnoreReports: S,
						reportable: n
					}), !f && !n.isDeleted && j && a.a.createElement(ze, {
						comment: n,
						commentsPageKey: o,
						depth: m,
						language: w,
						collapsedBecauseCrowdControl: c,
						modModeEnabled: k,
						moderatorPermissions: l || P,
						renderedInOverlay: F,
						subreddit: M,
						trackClick: R
					}), B && u.map(e => a.a.createElement(gt, {
						language: w
					}, e)), L && a.a.createElement(Et, {
						autofocus: !0,
						commentsPageKey: o,
						depth: m,
						draftType: E.c.replyToComment,
						draftKey: W,
						isTopLevelComment: !1,
						parentCommentId: n.id,
						submitAction: (e, t) => {
							var {
								validate: s
							} = e, r = ht(e, ["validate"]);
							return s ? Object(p.sb)({
								commentsPageKey: o,
								draftKey: W,
								parentCommentDepth: m,
								parentCommentId: n.id,
								formData: r,
								editorMode: t
							}) : Object(p.jb)({
								commentsPageKey: o,
								draftKey: W,
								parentCommentDepth: m,
								parentCommentId: n.id,
								formData: r,
								editorMode: t
							})
						},
						submitButtonText: Object(O.c)("Reply")
					}))), g && a.a.createElement(Ye.a, null))
				}));
			var kt = e => a.a.createElement(st.a.Consumer, null, t => a.a.createElement(Pt, ut({}, e, {
					trackClick: t
				}))),
				It = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				St = s("./src/reddit/contexts/InsideOverlay.tsx"),
				Tt = s("./src/reddit/helpers/path/index.ts"),
				Nt = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				Lt = s("./src/reddit/components/Comments/ContinueThreadLink/index.m.less"),
				Mt = s.n(Lt);
			const Rt = m.a.div("Wrapper", Mt.a),
				Ft = m.a.wrapped(Nt.a, "ArrowRight", Mt.a),
				At = m.a.wrapped(It.a, "LinkOrOverlayLink", Mt.a),
				Bt = m.a.span("HoverSpan", Mt.a),
				Dt = Object(c.c)({
					language: f.O,
					permalink: (e, t) => Object(x.m)(e, {
						commentId: Object(x.s)(e, t).parentId
					})
				});
			var Wt = Object(i.b)(Dt)(Object(St.b)(e => {
					let {
						isActive: t,
						isOverlay: s,
						permalink: n
					} = e;
					return a.a.createElement(Rt, {
						className: Object(d.a)({
							[Mt.a.isActive]: t
						})
					}, a.a.createElement(At, {
						isOverlay: !!s,
						to: Object(Tt.b)(n)
					}, a.a.createElement(Bt, null, a.a.createElement(z.c, null, "Continue this thread")), " ", a.a.createElement(Ft, null)))
				})),
				Ht = s("./src/reddit/components/Comments/MoreCommentsItem/index.m.less"),
				Vt = s.n(Ht);
			const Ut = m.a.div("MoreCommentsItemWrapper", Vt.a),
				Gt = m.a.p("MoreComments", Vt.a),
				Kt = m.a.wrapped(Gt, "MoreCommentsInteractive", Vt.a),
				zt = Object(c.c)({
					moreCommentsItem: x.B,
					moreCommentsPending: x.C,
					language: f.O
				});
			var Jt = Object(i.b)(zt, (e, t) => ({
					moreCommentsClicked: () => e(Object(p.Z)(t.commentsPageKey, t.moreCommentsId))
				}))(e => {
					let {
						language: t,
						isActive: s,
						moreCommentsClicked: n,
						moreCommentsItem: o,
						moreCommentsPending: r
					} = e;
					return a.a.createElement(Ut, null, r ? a.a.createElement(Gt, null, a.a.createElement(z.c, null, "loading...")) : a.a.createElement(st.a.Consumer, null, e => a.a.createElement(Kt, {
						className: Object(d.a)({
							[Vt.a.isActive]: s
						}),
						onClick: () => {
							n(), e("load_more_comment")()
						}
					}, Object(C.b)(t, "comment.moreReply", o.numComments, {
						numComments: o.numComments
					}))))
				}),
				qt = s("./node_modules/lodash/times.js"),
				Yt = s.n(qt),
				Xt = s("./src/reddit/components/Comments/ThreadLines/index.m.less"),
				Qt = s.n(Xt);
			const Zt = m.a.wrapped(e => a.a.createElement("div", e, a.a.createElement("i", {
					className: b.m
				})), "Line", Qt.a),
				$t = m.a.div("LineContainer", Qt.a),
				es = m.a.div("ShortLineContainer", Qt.a);
			var ts = e => {
					const {
						collapsed: t,
						depth: s,
						onLineClick: n,
						onLineMouseOver: o,
						onLineMouseOut: r,
						onShortLineClick: i,
						parentNodeIds: c,
						type: d
					} = e;
					return a.a.createElement($t, null, Yt()(s + 1, e => e === s ? d !== u.a.Comment || t ? null : a.a.createElement(es, {
						key: c[e]
					}, a.a.createElement(Zt, {
						className: c[e],
						onClick: i,
						onMouseOver: () => o(c[e]),
						onMouseOut: () => r(c[e])
					})) : a.a.createElement(Zt, {
						className: c[e],
						key: c[e],
						onClick: n(e),
						onMouseOver: () => o(c[e]),
						onMouseOut: () => r(c[e])
					})))
				},
				ss = s("./src/reddit/components/Comments/CommentListNode/index.m.less"),
				ns = s.n(ss);
			const os = m.a.div("CommentListNodeWrapper", ns.a),
				rs = e => {
					const t = document.querySelectorAll(".".concat(e));
					if (t && t.length)
						for (let s = 0; s < t.length; s++) t[s].classList.add(b.f)
				},
				as = () => {
					const e = document.querySelectorAll(".".concat(b.f));
					if (e && e.length)
						for (let t = 0; t < e.length; t++) e[t].classList.remove(b.f)
				};
			var is = Object(i.b)(() => Object(c.c)({
				collapsed: (e, t) => {
					let {
						commentLink: s,
						commentsPageKey: n
					} = t;
					return Object(lt.b)(e, {
						commentId: s.id,
						commentsPageKey: n
					})
				},
				commentListNode: (e, t) => Object(x.l)(e, t),
				depth: (e, t) => Object(x.j)(e, t),
				isActive: (e, t) => {
					let {
						commentLink: s
					} = t;
					return !!e.shortcuts.activeCommentId && s.id === e.shortcuts.activeCommentId
				},
				isHighlighted: (e, t) => {
					let {
						commentLink: s
					} = t;
					const n = Object(x.l)(e, {
						commentLink: s
					});
					return !(s.type !== u.a.Comment || !n || !n.awardCountsById) && Object.keys(n.awardCountsById).some(t => {
						const s = Object(v.a)(e, t);
						return s && s.coinPrice >= g.g
					})
				},
				isNightmodeOn: f.Q
			}), (e, t) => {
				let {
					commentLink: s,
					commentsPageKey: n,
					scrollToAndRemeasure: o
				} = t;
				return {
					onLineClick: t => () => {
						e(Object(p.K)({
							commentLink: s,
							commentsPageKey: n,
							lineDepth: t,
							scrollToAndRemeasure: o
						}))
					},
					onShortLineClick: () => e(Object(p.nb)({
						commentId: s.id,
						commentsPageKey: n,
						scrollToAndRemeasure: o
					}))
				}
			})(e => {
				const {
					childrenInfo: t,
					className: s,
					collapsed: n,
					commentLink: o,
					commentsPageKey: r,
					depth: i,
					isActive: c,
					isHighlighted: l,
					isHidden: m,
					isNightmodeOn: p,
					onLineClick: b,
					onShortLineClick: g,
					parentNodeIds: x,
					renderedInOverlay: v,
					scrollToAndRemeasure: f
				} = e;
				return a.a.createElement(os, {
					className: Object(d.a)(s, {
						[ns.a.isHidden]: m,
						[ns.a.isAwarded]: l,
						[ns.a.isNightmodeOn]: p
					}),
					id: o.id,
					style: {
						paddingLeft: i * (h.w + h.v) + (o.type === u.a.Comment ? h.w : 0)
					},
					tabIndex: -1
				}, a.a.createElement(ts, {
					collapsed: n,
					depth: i,
					onLineClick: b,
					onLineMouseOver: rs,
					onLineMouseOut: as,
					onShortLineClick: g,
					type: o.type,
					parentNodeIds: x
				}), cs({
					childrenInfo: t,
					clearHovered: as,
					commentLink: o,
					commentsPageKey: r,
					onLineMouseOver: rs,
					isActive: c,
					renderedInOverlay: v,
					scrollToAndRemeasure: f
				}))
			});
			const cs = e => {
				let {
					childrenInfo: t,
					clearHovered: s,
					commentLink: n,
					commentsPageKey: o,
					isActive: r,
					onLineMouseOver: i,
					renderedInOverlay: c,
					scrollToAndRemeasure: d
				} = e;
				switch (n.type) {
					case u.a.Comment:
						return a.a.createElement(kt, {
							childrenInfo: t,
							clearHovered: s,
							commentId: n.id,
							commentsPageKey: o,
							isActive: r,
							onLineMouseOver: i,
							renderedInOverlay: c,
							scrollToAndRemeasure: d
						});
					case u.a.MoreComments:
						return a.a.createElement(Jt, {
							commentsPageKey: o,
							isActive: r,
							moreCommentsId: n.id
						});
					case u.a.ContinueThread:
						return a.a.createElement(Wt, {
							id: n.id,
							isActive: r
						})
				}
			};
			var ds = s("./src/reddit/components/Comments/helpers/hiddenComments.ts"),
				ls = s("./src/reddit/components/Comments/States/index.tsx"),
				ms = s("./src/reddit/components/Scroller/Simple.tsx"),
				ps = s("./src/reddit/constants/elementIds.ts"),
				us = s("./src/reddit/helpers/commentList/index.ts"),
				hs = s("./src/telemetry/index.ts"),
				bs = s("./src/lib/LRUCache/index.ts"),
				gs = s("./src/reddit/components/Comments/index.m.less"),
				xs = s.n(gs);
			const vs = h.f + 10,
				fs = 65,
				Cs = m.a.wrapped(ms.b, "Scroller", xs.a),
				Os = Object(c.c)({
					allCollapsed: x.a,
					commentLinks: x.k,
					commentThreadLinkSet: x.p,
					language: f.O,
					measureScrollFPS: re.d.measureScrollFPS,
					moreComments: x.b,
					postPermalink: q.K
				}),
				Es = Object(i.b)(Os, (e, t) => ({
					onCommentEnteredViewport: t => e(Object(p.L)(t)),
					onCommentLeftViewport: (t, s) => e(Object(p.Q)(t, s))
				})),
				ys = new bs.a(500),
				js = new bs.a(500),
				_s = (e, t) => {
					const s = "entered-".concat(e);
					let n = ys.get(s);
					return void 0 === n && (n = () => {
						t.onCommentEnteredViewport(e)
					}, ys.set(s, n)), n
				},
				ws = (e, t) => {
					const s = "left-".concat(e);
					let n = js.get(s);
					return void 0 === n && (n = s => {
						t.onCommentLeftViewport(e, s)
					}, js.set(s, n)), n
				};
			class Ps extends a.a.Component {
				constructor(e) {
					super(e), this.getParentNodeIds = e => {
						const {
							commentLinks: t,
							commentThreadLinkSet: s
						} = this.props;
						if (this.parentNodeIdsMap[e.id]) return this.parentNodeIdsMap[e.id];
						const n = s[e.id].depth,
							o = t.findIndex(t => t.id === e.id);
						if (0 === n || 0 === o) return this.parentNodeIdsMap[e.id] = [e.id], this.parentNodeIdsMap[e.id];
						const r = t[o - 1],
							a = this.parentNodeIdsMap[r.id].slice();
						return this.parentNodeIdsMap[e.id] = a.filter(e => !!s[e] && s[e].depth < n), this.parentNodeIdsMap[e.id].push(e.id), this.parentNodeIdsMap[e.id]
					}, this.getChildrenInfo = e => this.childrenInfoMap[e] || void 0, this.parentNodeIdsMap = {}, ds.c(), this.childrenInfoMap = {}
				}
				componentWillMount() {
					const {
						commentLinks: e,
						allCollapsed: t,
						commentThreadLinkSet: s,
						moreComments: n
					} = this.props;
					this.timerId && hs.c.cancel(this.timerId), e.length && (this.timerId = hs.c.start()), this.findHiddenNodes(e, t, s, n)
				}
				componentDidMount() {
					this.timerId && Object(hs.b)(l.l.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: hs.c.end(this.timerId)
					})
				}
				componentWillReceiveProps(e) {
					const {
						allCollapsed: t,
						commentsPageKey: s,
						commentLinks: n,
						commentThreadLinkSet: r,
						moreComments: a
					} = e;
					(s !== this.props.commentsPageKey || n.length > this.props.commentLinks.length || !o()(t, this.props.allCollapsed)) && this.findHiddenNodes(n, t, r, a)
				}
				shouldComponentUpdate(e) {
					const {
						commentsPageKey: t,
						commentLinks: s,
						allCollapsed: n
					} = this.props;
					return e.commentsPageKey !== t || e.commentLinks.length > s.length || !o()(e.allCollapsed, n) || e.commentLinks.some((e, t) => e.id !== s[t].id)
				}
				componentWillUpdate(e) {
					this.timerId && hs.c.cancel(this.timerId), e.commentLinks.length && (this.timerId = hs.c.start())
				}
				componentDidUpdate(e) {
					this.timerId && Object(hs.b)(l.l.Redesign, {
						type: "mount",
						component: "commentsList",
						duration: hs.c.end(this.timerId)
					})
				}
				componentWillUnmount() {
					this.timerId && hs.c.cancel(this.timerId)
				}
				findHiddenNodes(e, t, s, n) {
					if (!t || !Object.keys(t).length) return;
					let o = null,
						r = 1 / 0,
						a = 0,
						i = !1;
					ds.c();
					for (let c = 0; c < e.length; c++) {
						const d = e[c];
						o && (s[d.id].depth > r ? (ds.a(d.id), a += Object(us.d)(d, n), d.type === u.a.ContinueThread && (i = !0)) : (this.childrenInfoMap[o] = {
							numChildren: a,
							hasContinueThread: i
						}, o = null, r = 1 / 0, a = 0, i = !1)), !o && t[d.id] && (o = d.id, r = s[d.id].depth)
					}
				}
				render() {
					return this.props.commentLinks.length ? this.renderList() : this.renderEmptyState()
				}
				getScrollChild(e, t) {
					const {
						commentsPageKey: s,
						onCommentEnteredViewport: n,
						onCommentLeftViewport: o,
						renderedInOverlay: r
					} = this.props, i = _s(e.id, {
						onCommentEnteredViewport: n,
						onCommentLeftViewport: o
					}), c = ws(e.id, {
						onCommentEnteredViewport: n,
						onCommentLeftViewport: o
					});
					return {
						estHeight: ds.b(e.id) ? 0 : fs,
						id: e.id,
						trackOnEnteredViewport: i,
						trackOnExitedViewport: c,
						render: t => {
							let {
								placeholderRecommended: n,
								height: o,
								width: i,
								scrollToAndRemeasure: c
							} = t;
							return n ? a.a.createElement("div", {
								style: {
									height: o,
									backgroundColor: "#fff"
								}
							}) : a.a.createElement(is, {
								childrenInfo: this.getChildrenInfo(e.id),
								commentLink: e,
								commentsPageKey: s,
								id: e.id,
								isHidden: ds.b(e.id),
								scrollToAndRemeasure: c,
								renderedInOverlay: !!r,
								parentNodeIds: this.getParentNodeIds(e)
							})
						}
					}
				}
				renderList() {
					const {
						className: e,
						commentLinks: t,
						commentsPageKey: s,
						measureScrollFPS: n,
						renderedInOverlay: o
					} = this.props;
					let r;
					if (n) {
						r = "comments-".concat(o ? "lightbox" : "page")
					}
					const i = t.map((e, t) => this.getScrollChild(e, t));
					return a.a.createElement(Cs, {
						className: Object(d.a)(xs.a.Scroller, e),
						disableScrollCache: o,
						key: s,
						getContainer: () => o ? document.getElementById(ps.d) : null,
						preventScrollOnMount: !0,
						scrollToChildPadding: vs,
						trackingName: r
					}, i)
				}
				renderEmptyState() {
					return this.props.commentId ? a.a.createElement(ls.g, {
						link: this.props.postPermalink
					}) : a.a.createElement(ls.c, null)
				}
			}
			t.a = Es(Ps)
		},
		"./src/reddit/components/CommentsChat/LiveIcon/index.m.less": function(e, t, s) {
			e.exports = {
				Icon: "_1BLJJHA9oAzG1Rqmf4pcYW",
				icon: "_1BLJJHA9oAzG1Rqmf4pcYW",
				IconText: "_6cNM5NdF82ASM5hiBVNN5",
				iconText: "_6cNM5NdF82ASM5hiBVNN5",
				Animate: "_3j98tX1WZapEArV-4rmJe5",
				animate: "_3j98tX1WZapEArV-4rmJe5",
				top: "_3Dr1MoYY5Yv4YhbQFFcks0",
				bottom: "_1GRYNQhMsR-00cWDJcE3UJ",
				bigCircle: "_85rqvRijdIsn3s0j-gUaw",
				midCircle: "RS1g6Gd_W67wwWKSteEB1",
				smallCircle: "lRlGcfTzZ7njZnIUyvhGH",
				play: "_3Kxa8oHGuT_QpP4zIN5jrV",
				blinker: "_20WvB_9deo7bJVi4af1dSS"
			}
		},
		"./src/reddit/components/CommentsChat/LiveIcon/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/i18n/utils.ts"),
				l = s("./src/reddit/selectors/experiments/chatPost.ts"),
				m = s("./src/reddit/components/CommentsChat/LiveIcon/index.m.less"),
				p = s.n(m);
			const u = .1,
				h = Object(i.c)({
					isChatPost: l.e,
					isChatPostExperiment: l.d
				}),
				b = Object(a.b)(h, e => ({
					sendChatPostExposureEvent: (t, s) => e((e, n) => Object(l.g)(n(), t, s))
				}));
			class g extends r.a.Component {
				constructor(e) {
					super(e), this.onVisibilityChange = e => {
						e.isIntersecting && e.intersectionRatio >= u ? this.state.visible || (this.setState({
							visible: !0
						}), this.sendChatPostExposureEvent()) : this.state.visible && this.setState({
							visible: !1
						})
					}, this.state = {
						visible: null
					}
				}
				sendChatPostExposureEvent() {
					const {
						isChatPost: e,
						isMod: t,
						sendChatPostExposureEvent: s
					} = this.props;
					s(e, t)
				}
				render() {
					const {
						visible: e
					} = this.state, {
						isChatPost: t,
						isChatPostExperiment: s
					} = this.props, o = s && (null === e || e);
					return t ? r.a.createElement(n.a, {
						rootMargin: "20px 0px 20px 0px",
						threshold: u,
						onChange: this.onVisibilityChange
					}, s ? r.a.createElement("div", {
						className: Object(c.a)(p.a.Icon, this.props.className)
					}, r.a.createElement("span", {
						className: Object(c.a)(p.a.Animate, p.a.top, {
							[p.a.play]: o
						})
					}, r.a.createElement("span", {
						className: p.a.bigCircle
					}), r.a.createElement("span", {
						className: p.a.midCircle
					}), r.a.createElement("span", {
						className: p.a.smallCircle
					})), r.a.createElement("p", {
						className: p.a.IconText
					}, Object(d.c)("Live Discussion")), r.a.createElement("span", {
						className: Object(c.a)(p.a.Animate, p.a.bottom, {
							[p.a.play]: o
						})
					}, r.a.createElement("span", {
						className: p.a.bigCircle
					}), r.a.createElement("span", {
						className: p.a.midCircle
					}), r.a.createElement("span", {
						className: p.a.smallCircle
					}))) : r.a.createElement("span", null)) : null
				}
			}
			t.a = b(g)
		},
		"./src/reddit/components/CommentsChat/Loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(n.a)({
				resolved: {},
				chunkName: () => "ChatPost",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("ChatPost~ModQueuePages"), s.e("ChatPost")]).then(s.bind(null, "./src/reddit/components/CommentsChat/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CommentsChat/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = o
		},
		"./src/reddit/components/CommentsChat/MessageInput/Loader.m.less": function(e, t, s) {
			e.exports = {
				LoaderWrapper: "_3k8JPc9w-DJrYLoer3GicH",
				loaderWrapper: "_3k8JPc9w-DJrYLoer3GicH",
				Icon: "_1nrdmuhkCLXh8N_46gKAyn",
				icon: "_1nrdmuhkCLXh8N_46gKAyn",
				gradientAnimation: "_3kGJh7EpOUlhrvN051jlhD",
				Byline: "eI85Q_-1x9VERN15oDr3X",
				byline: "eI85Q_-1x9VERN15oDr3X"
			}
		},
		"./src/reddit/components/CommentsChat/MessageInput/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/loadWithRetries/index.ts"),
				c = s("./src/reddit/components/CommentsChat/MessageInput/Loader.m.less"),
				d = s.n(c);
			const l = a.a.div("LoaderWrapper", d.a),
				m = a.a.div("Icon", d.a),
				p = a.a.div("Byline", d.a),
				u = Object(r.a)({
					ErrorComponent: () => o.a.createElement(l, null, o.a.createElement(m, null), o.a.createElement(p, null)),
					getComponent: () => Object(i.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("ChatMessageInput")]).then(s.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							isLivestreaming: t
						} = e;
						return t ? null : o.a.createElement(l, null, o.a.createElement(m, null), o.a.createElement(p, null))
					}
				});
			t.a = e => o.a.createElement(u, e)
		},
		"./src/reddit/components/CommentsLink/index.m.less": function(e, t, s) {
			e.exports = {
				commentsLink: "_1UoeAeSRhOKSNdY_h3iS1O",
				commentIcon: "_3DVrpDrMM9NLT6TlsTUMxC",
				defaultCursorWrapper: "_3m17ICJgx45k_z-t82iVuO",
				link: "_1Hw7tY9pMr-T1F4P1C-xNU",
				text: "FHCV02u6Cp2zYL0fhQPsO"
			}
		},
		"./src/reddit/components/CommentsLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/app/strings/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				m = s("./src/lib/prettyPrintNumber/index.ts"),
				p = s("./src/reddit/constants/componentTestIds.ts"),
				u = s("./src/reddit/constants/postLayout.ts"),
				h = s("./src/reddit/helpers/path/index.ts"),
				b = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				g = s("./src/reddit/selectors/experiments/chatPost.ts"),
				x = s("./src/reddit/selectors/experiments/postSeo.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/CommentsLink/index.m.less"),
				O = s.n(C);
			const E = Object(r.b)(() => Object(i.c)({
					isChatPostExperiment: g.d,
					isPostSEOEligible: x.d,
					language: f.O,
					postPermalink: v.K,
					shouldOpenPostInNewTab: f.S
				})),
				y = e => {
					let t, {
						type: s,
						numComments: r,
						isChatPostExperiment: a,
						language: i,
						modModeEnabled: d,
						hasModPostPerms: l,
						shouldShowIcon: p,
						shouldShowText: h,
						text: g
					} = e;
					return t = g || (s === u.g.Compact || d && l || a ? Object(m.b)(r) : 0 === r ? Object(c.a)(i, "posts.comment.verb") : Object(c.b)(i, "posts.comments.noun", r, {
						count: Object(m.b)(r)
					})), o.a.createElement(n.Fragment, null, p && o.a.createElement(b.a, {
						className: O.a.commentIcon,
						role: "presentation"
					}), h && o.a.createElement("span", {
						className: O.a.text
					}, t))
				};
			t.a = E(e => {
				const {
					className: t,
					hasModPostPerms: s,
					isChatPostExperiment: n,
					isCommentPermalink: r,
					isCommentsPage: i,
					isOverlay: c,
					isPostSEOEligible: m,
					language: u,
					modModeEnabled: b,
					numComments: g,
					onClick: x,
					postPermalink: v,
					shouldOpenPostInNewTab: f,
					shouldShowIcon: C = !0,
					shouldShowText: E = !0,
					text: j,
					type: _
				} = e, w = i && !r && !m, P = r && !c, k = o.a.createElement(y, {
					type: _,
					numComments: g,
					isChatPostExperiment: n,
					language: u,
					modModeEnabled: b,
					hasModPostPerms: s,
					shouldShowIcon: C,
					shouldShowText: E,
					text: j
				});
				return w ? o.a.createElement("div", {
					className: Object(d.a)(O.a.commentsLink, O.a.defaultCursorWrapper, t),
					onClick: x
				}, k) : o.a.createElement(a.a, {
					rel: "nofollow",
					"data-click-id": "comments",
					"data-test-id": p.a,
					className: Object(d.a)(O.a.commentsLink, O.a.link, t),
					target: f ? "_blank" : void 0,
					to: P ? Object(h.b)(v) : Object(l.a)(v, !0),
					onClick: x
				}, k)
			})
		},
		"./src/reddit/components/CommentsPageAd/index.m.less": function(e, t, s) {
			e.exports = {
				CommentsPageAdContainer: "_1kZq41JJsyWtpgT1oGyVko",
				commentsPageAdContainer: "_1kZq41JJsyWtpgT1oGyVko",
				BannerAd: "_3-iuIC1F_FWNnxkCPyySXD",
				bannerAd: "_3-iuIC1F_FWNnxkCPyySXD"
			}
		},
		"./src/reddit/components/CommentsPageAd/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/app/strings/index.ts"),
				o = s("./node_modules/lodash/throttle.js"),
				r = s.n(o),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				c = s("./src/reddit/components/BannerAd/index.tsx"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/reddit/components/BlankPost/index.tsx"),
				m = s("./src/reddit/connectors/PostViewable/index.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/featureFlags/index.ts"),
				h = s("./src/reddit/selectors/brandSafety.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				g = s("./src/lib/constants/index.ts"),
				x = s("./src/lib/fastdom/index.ts"),
				v = s("./src/reddit/components/CommentsPageAd/index.m.less"),
				f = s.n(v),
				C = s("./src/lib/lessComponent.tsx");
			const O = Object(d.c)({
					canShowAds: (e, t) => {
						const s = Object(h.a)(e, t),
							n = !u.d.rabbitHole(e) && !Object(p.G)(t.pageLayer) && !Object(b.x)(e),
							o = e.meta.isSessionSeo && !Object(b.G)(e);
						return s && n && (o || Object(b.D)(e))
					},
					ads: e => e.commentsPage.ads
				}),
				E = Object(m.a)(O),
				y = Object(p.t)(),
				j = C.a.wrapped(c.a, "BannerAd", f.a),
				_ = (e, t) => {
					let s = "";
					return t && (s += "overlay-"), s += "comment-".concat(e)
				},
				w = C.a.div("CommentsPageAdContainer", f.a);
			class P extends i.a.Component {
				constructor() {
					super(...arguments), this.container = null, this.state = {
						enoughSpace: !1,
						hasBeenAssessed: !1
					}, this.checkAvailableSpace = r()(() => {
						x.a.read(() => {
							if (this.container) {
								const e = g.f[0],
									t = this.container.clientWidth;
								!this.state.enoughSpace && this.state.hasBeenAssessed || x.a.write(() => {
									this.setState({
										enoughSpace: t > e,
										hasBeenAssessed: !0
									})
								})
							}
						})
					}, g.G)
				}
				componentDidMount() {
					this.props.canShowAds && (this.checkAvailableSpace(), window.addEventListener("resize", this.checkAvailableSpace))
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.checkAvailableSpace)
				}
				render() {
					if (!this.props.canShowAds) return null;
					const {
						pixelPostHasEnteredView: e,
						pixelPostHasExitedView: t,
						isOverlay: s,
						refreshKey: o,
						listingName: r,
						placement: a,
						onPostViewable: c
					} = this.props;
					return i.a.createElement(w, {
						innerRef: e => {
							this.container = e
						}
					}, this.props.ads.length > 0 && i.a.createElement(l.BlankPost, {
						post: this.props.ads[0],
						onPostViewable: c,
						pixelPostHasEnteredView: e,
						pixelPostHasExitedView: t
					}), this.state.enoughSpace && i.a.createElement(j, {
						id: _(a, s),
						sizes: [g.f],
						placement: a,
						listingName: r,
						refreshKey: o,
						dataBeforeContent: Object(n.a)("en", "posts.sponsored")
					}))
				}
			}
			t.a = y(E(P))
		},
		"./src/reddit/components/CommentsPageSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				communityTipJar: "_3Rb_UoC2j8wE4ckG7Yqy2K",
				communityTokens: "LRXVBnaKV0QUa_v8PZe5Q",
				leaderboard: "_2Bw_-Pd7_PSh46KT8HivGh",
				inFeedAd: "_2vWBnEHUdKqzj9DabP66L1",
				outerWrapper: "_31AVRNJbVMh2DUFRrpCQcD"
			}
		},
		"./src/reddit/components/CommentsPageSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/lodash/isEqual.js"),
				r = s.n(o),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/objectSelector/index.ts"),
				u = s("./src/reddit/components/Economics/CommunityTipJar/async.tsx"),
				h = s("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				b = s("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				g = s("./src/reddit/components/IdCard/async.tsx"),
				x = s("./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx"),
				v = s("./src/reddit/components/SidebarFooter/index.tsx"),
				f = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				C = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				O = s("./src/reddit/components/Widgets/AdRules/index.tsx"),
				E = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				y = s("./src/reddit/featureFlags/component.tsx"),
				j = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				_ = s("./src/reddit/models/Post/index.ts"),
				w = s("./src/reddit/selectors/experiments/postSeo.ts"),
				P = s("./src/reddit/selectors/subreddit.ts"),
				k = s("./src/reddit/selectors/user.ts"),
				I = s("./src/reddit/components/CommentsPageSidebar/index.m.less"),
				S = s.n(I);
			const T = Object(y.a)("spPoints", h.a),
				N = Object(y.a)("spLeaderboard", b.a),
				L = Object(n.a)({
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
				M = Object(d.c)({
					isLoggedIn: k.G,
					postSEOV2IdCardVariant: w.i,
					widgets: Object(p.a)(P.r)
				}),
				R = Object(c.b)(M);
			class F extends i.a.Component {
				constructor(e) {
					super(e), this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						isMounted: !0
					})
				}
				shouldComponentUpdate(e, t) {
					return this.props.subredditName !== e.subredditName || !r()(this.props.widgets, e.widgets)
				}
				renderFooter(e) {
					const {
						commentsPageKey: t,
						isOverlay: s,
						subredditName: n,
						post: o,
						postSEOV2IdCardVariant: r
					} = this.props, a = !Object(w.a)(r) && !Object(w.e)(r);
					return s ? i.a.createElement(i.a.Fragment, null, i.a.createElement(x.a, {
						postId: o.id,
						isOverlay: s,
						listingName: n,
						placement: m.c.BELOW_THE_FOLD,
						placementIndex: e,
						position: j.a.BOTTOM,
						refreshKey: o.id,
						sizes: m.n,
						commentsPageKey: t
					}), i.a.createElement(v.a, null)) : i.a.createElement(C.a, {
						adComponent: a ? i.a.createElement(x.a, {
							postId: o.id,
							isOverlay: s,
							listingName: n,
							placement: m.c.BELOW_THE_FOLD,
							placementIndex: e,
							position: j.a.BOTTOM,
							refreshKey: o.id,
							sizes: m.n,
							commentsPageKey: t
						}) : null
					})
				}
				render() {
					const {
						className: e,
						commentsPageKey: t,
						isLoggedIn: s,
						isOverlay: n,
						post: o,
						postSEOV2IdCardVariant: r,
						subredditId: a,
						subredditName: c,
						widgets: d
					} = this.props;
					let p = 0;
					const h = Object(w.a)(r) || Object(w.e)(r),
						b = i.a.createElement(x.a, {
							postId: o.id,
							isOverlay: n,
							listingName: c,
							placement: m.c.ABOVE_THE_FOLD,
							placementIndex: p++,
							position: j.a.FIRST,
							refreshKey: o.id,
							sizes: m.h,
							commentsPageKey: t
						});
					return i.a.createElement("div", {
						className: Object(l.a)(S.a.outerWrapper, e)
					}, Object(_.j)(o) ? i.a.createElement(L, {
						profileName: c,
						isOverlay: n || !1
					}) : i.a.createElement(g.a, {
						commentsPageKey: t,
						isCommentsPage: !0,
						isOverlay: n,
						listingName: c,
						postId: o.id,
						rememberPosition: o.numComments > 0,
						isMinimal: h
					}), i.a.createElement(u.a, {
						className: S.a.communityTipJar,
						subredditId: a
					}), i.a.createElement(T, {
						className: S.a.communityTokens,
						subredditId: a,
						uniqueId: o.id
					}), i.a.createElement(N, {
						className: S.a.leaderboard,
						subredditId: a,
						uniqueId: o.id
					}), b, s && d.map((e, t) => i.a.createElement(f.a, {
						key: "widgetSpacer".concat(t)
					}, i.a.createElement(E.a, {
						subredditName: c,
						widget: e
					}))), o.isSponsored && i.a.createElement(f.a, null, i.a.createElement(O.a, null)), this.renderFooter(p++))
				}
			}
			t.a = R(F)
		},
		"./src/reddit/components/CommentsWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				ContentWrapper: "_1ump7uMrSA43cqok14tPrG",
				contentWrapper: "_1ump7uMrSA43cqok14tPrG",
				TruncatedComments: "_1oTUrVtKJk1ue0r3fe31kJ",
				truncatedComments: "_1oTUrVtKJk1ue0r3fe31kJ",
				MoreCommentsButton: "j9NixHqtN2j8SKHcdJ0om",
				moreCommentsButton: "j9NixHqtN2j8SKHcdJ0om"
			}
		},
		"./src/reddit/components/CommentsWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/prettyPrintNumber/index.ts"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/models/Subreddit/index.ts"),
				p = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				h = s("./src/reddit/selectors/experiments/listingBelowAll.ts"),
				b = s("./src/reddit/selectors/experiments/postSeo.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/CommentsWrapper/index.m.less"),
				v = s.n(x);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js"), C = "500px", O = 3, E = Object(a.c)({
				hasDismissedTruncation: u.b,
				isLoggedIn: g.F,
				isPostSEOEligible: b.d,
				listingBelowAllVariant: h.b,
				postSEOV2TruncatedVariant: b.j
			}), y = Object(r.b)(E);
			class j extends o.a.Component {
				render() {
					const {
						apiPending: e,
						children: t,
						className: s,
						handleViewAllCommentsClick: n,
						hasDismissedTruncation: r,
						innerRef: a,
						isCommentsListTruncated: c,
						isLoggedIn: u,
						isOverlay: b,
						listingBelowAllVariant: g,
						numberOfComments: x,
						onClick: E,
						subredditOrProfile: y
					} = this.props, j = !u, _ = Object(h.a)(g), w = !(!y || Object(m.e)(y)), P = c && w && (x >= O && !b || _ && !r) && (_ || j), k = P && !e, I = P ? v.a.TruncatedComments : "";
					return o.a.createElement("div", {
						onClick: E,
						ref: a
					}, o.a.createElement("div", {
						className: Object(i.a)(v.a.ContentWrapper, s, I),
						style: {
							"--commentswrapper-gradient-color": Object(p.a)(this.props).body,
							maxHeight: P ? C : "unset"
						}
					}, t), k && o.a.createElement(l.f, {
						className: v.a.MoreCommentsButton,
						onClick: n,
						"data-redditstyle": !0
					}, f._("View entire discussion ({number of comments} comments)", [f._param("number of comments", Object(d.b)(x))], {
						hk: "2OrRQp"
					})))
				}
			}
			t.a = Object(c.a)(y(j))
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, s) {
			e.exports = {
				ButtonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				buttonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				Container: "_32zGs4bO3IunZfS9bSJY0_",
				container: "_32zGs4bO3IunZfS9bSJY0_",
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
				LinkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				linkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				LinkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				linkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				SecondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				secondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				SecondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				secondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				GoHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				goHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				Image: "_1jefpljVGT-eHObg40F8Dm",
				image: "_1jefpljVGT-eHObg40F8Dm",
				ImagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				imagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				LeftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				leftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				LeftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				leftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				SecondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				secondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				SecondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				secondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				Title: "_2XKLlvmuqdor3RvVbYZfgz",
				title: "_2XKLlvmuqdor3RvVbYZfgz",
				PageBody: "bDDEX4BSkswHAG_45VkFB",
				pageBody: "bDDEX4BSkswHAG_45VkFB",
				QuarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				quarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router/esm/react-router.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				l = s("./src/lib/loginHref/index.ts"),
				m = s("./src/reddit/actions/contentGate.ts"),
				p = s("./src/reddit/actions/preferences.ts"),
				u = s("./src/reddit/components/CreateCommunityButton/index.tsx"),
				h = s("./src/lib/lessComponent.tsx"),
				b = s("./src/reddit/i18n/components.tsx"),
				g = s("./src/reddit/components/Footer/index.m.less"),
				x = s.n(g);
			const v = h.a.div("FooterContainer", x.a),
				f = h.a.div("UserAgreement", x.a),
				C = h.a.a("UserAgreementLink", x.a),
				O = h.a.a("PrivacyLink", x.a),
				E = Object(c.c)({
					language: e => e.user.language
				});
			var y = Object(a.b)(E)(e => {
					const {
						language: t
					} = e;
					return r.a.createElement(v, null, r.a.createElement(f, null, r.a.createElement(b.c, null, "Use of this site constitutes acceptance of our "), r.a.createElement(C, {
						href: "".concat(n.a.redditUrl, "/help/useragreement")
					}, r.a.createElement(b.c, null, "User Agreement")), r.a.createElement(b.c, null, " and  "), r.a.createElement(O, {
						href: "".concat(n.a.redditUrl, "/help/privacypolicy")
					}, r.a.createElement(b.c, null, "Privacy Policy")), Object(d.a)(t, "footer.legalbottom.part3", {
						year: (new Date).getFullYear()
					})))
				}),
				j = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				_ = s("./src/reddit/components/RichTextJson/index.tsx"),
				w = (s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/lodash/flatMap.js")),
				P = s.n(w),
				k = s("./src/lib/linkMatchers/index.ts"),
				I = s("./src/reddit/controls/OutboundLink/index.tsx");
			const S = /\[(.+?)\]\((.+?)\)/g,
				T = e => {
					const t = e.split(S);
					if (1 === t.length) return [e];
					const s = [];
					for (let n = 0; n < t.length; n += 3) {
						const [e, o, r] = t.slice(n, n + 3);
						s.push(e), s.push([r, o])
					}
					return s
				};
			var N = r.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = P()(t, T)), e.parseRegularLinks && (t = P()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = k.e.match(e);
						if (!t) return [e];
						const s = [];
						let n = null;
						for (const o of t) s.push(e.slice(n ? n.lastIndex : 0, o.index)), n = o, s.push([o.url, o.text]);
						return n && s.push(e.slice(n.lastIndex)), s
					})(e))), r.a.createElement(r.a.Fragment, null, " ", t.map((t, s) => {
						if (Array.isArray(t)) {
							const [n, o] = t;
							return r.a.createElement(I.a, {
								className: e.linkClassName,
								href: n,
								isSponsored: !1,
								key: s,
								source: null
							}, o)
						}
						return r.a.createElement("span", {
							key: s
						}, t)
					}), " ")
				}),
				L = s("./src/reddit/contexts/PageLayer/index.tsx"),
				M = s("./src/reddit/controls/Button/index.tsx"),
				R = s("./src/reddit/models/ContentGate.ts"),
				F = s("./src/reddit/selectors/meta.ts"),
				A = s("./src/reddit/selectors/user.ts"),
				B = s("./src/reddit/components/ContentGate/index.m.less"),
				D = s.n(B);
			const {
				fbt: W
			} = s("./node_modules/fbt/lib/FbtPublic.js"), H = h.a.div("ButtonsContainer", D.a), V = h.a.div("Container", D.a), U = h.a.div("Description", D.a), G = h.a.div("PrivateSubredditDetails", D.a), K = h.a.div("PrivateSubredditDescription", D.a), z = h.a.h3("PrivateSubredditName", D.a), J = h.a.a("Link", D.a), q = h.a.wrapped(M.h, "LinkRouterButton", D.a), Y = h.a.wrapped(M.g, "LinkButton", D.a), X = h.a.wrapped(M.k, "SecondaryLinkRouterButton", D.a), Q = h.a.wrapped(M.j, "SecondaryLinkButton", D.a), Z = h.a.wrapped(q, "GoHomeLinkButton", D.a), $ = h.a.img("Image", D.a), ee = h.a.img("ImagePlaceholder", D.a), te = h.a.wrapped(q, "LeftLinkRouterButton", D.a), se = h.a.wrapped(Y, "LeftLinkButton", D.a), ne = h.a.wrapped(Q, "SecondaryLeftLinkButton", D.a), oe = h.a.wrapped(X, "SecondaryLeftLinkRouterButton", D.a), re = h.a.h3("Title", D.a), ae = h.a.div("PageBody", D.a), ie = h.a.div("QuarantineMessageWrapper", D.a), ce = Object(c.c)({
				isLoggedIn: A.F,
				language: A.O,
				origin: F.h,
				user: A.i
			}), de = Object(L.t)(), le = Object(a.b)(ce, (e, t) => {
				let {
					subredditName: s
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(p.A(s)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(m.l)())
					}
				}
			}), me = e => {
				const {
					banMessage: t,
					contentGateType: s,
					continueToQuarantinedSubreddit: o,
					isLoggedIn: a,
					language: i,
					location: c,
					origin: p,
					pageLayer: h,
					quarantineRequiresEmail: g,
					quarantineMessage: x,
					quarantineMessageHtml: v,
					quarantineMessageRTJson: f,
					setNSFWPreference: C,
					subredditDescription: O,
					subredditName: E,
					user: y
				} = e, w = () => {
					a ? C() : Object(m.k)(), window.location.reload()
				};
				switch (s) {
					case R.a.GoldSubreddit:
						return r.a.createElement("div", null, r.a.createElement($, {
							src: "".concat(n.a.assetPath, "/img/gold/premium-crest.png")
						}), r.a.createElement(re, null, Object(d.a)(i, "contentGate.goldSubreddit.titlePremium", {
							subredditName: E
						})), r.a.createElement(U, null, r.a.createElement(b.c, null, "The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.")), r.a.createElement(H, null, y ? r.a.createElement(ne, {
							href: "".concat(n.a.redditUrl, "/premium")
						}, r.a.createElement(b.c, null, "Get Premium")) : r.a.createElement(se, {
							href: Object(l.a)(c, p)
						}, r.a.createElement(b.c, null, "Sign Up")), y ? r.a.createElement(q, {
							to: "/"
						}, r.a.createElement(b.c, null, "Go Home")) : r.a.createElement(Q, {
							href: Object(l.a)(c, p)
						}, r.a.createElement(b.c, null, "Log In"))));
					case R.a.Nsfw:
					case R.a.NsfwCustomFeed:
						return r.a.createElement("div", null, r.a.createElement($, {
							src: "".concat(n.a.assetPath, "/img/content-gate-icons/nsfw.png")
						}), r.a.createElement(re, null, s === R.a.Nsfw ? Object(d.a)(i, "contentGate.over18.title") : r.a.createElement(b.c, null, "You must be 18+ to view this Custom Feed")), r.a.createElement(U, null, r.a.createElement(b.c, null, "You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?")), r.a.createElement(H, null, r.a.createElement(te, {
							to: "/"
						}, r.a.createElement(b.c, null, "No")), r.a.createElement(Q, {
							onClick: w
						}, r.a.createElement(b.c, null, "Yes"))));
					case R.a.PrivateSubreddit:
						return r.a.createElement("div", null, r.a.createElement($, {
							src: "".concat(n.a.assetPath, "/img/content-gate-icons/private.png")
						}), r.a.createElement(re, null, Object(d.a)(i, "contentGate.privateSubreddit.title", {
							subredditName: E
						})), O && O.length && r.a.createElement(G, null, r.a.createElement(z, null, "r/", E), r.a.createElement(K, null, r.a.createElement("div", null, O))), r.a.createElement(U, null, r.a.createElement(b.c, null, "The moderators in this community have set it to private. You must be a moderator or approved user to visit.")), r.a.createElement(H, null, y ? r.a.createElement(ne, {
							href: "".concat(n.a.redditUrl, "/message/compose?to=/r/").concat(E)
						}, r.a.createElement(b.c, null, "Message Mods")) : r.a.createElement(ne, {
							href: Object(l.a)(c, p)
						}, r.a.createElement(b.c, null, "Sign Up")), r.a.createElement(q, {
							to: "/"
						}, y ? Object(d.a)(i, "contentGate.privateSubreddit.goHome") : Object(d.a)(i, "contentGate.privateSubreddit.exploreReddit"))));
					case R.a.QuarantinedSubreddit:
						return r.a.createElement("div", null, r.a.createElement($, {
							src: "".concat(n.a.assetPath, "/img/content-gate-icons/quarantined.png")
						}), r.a.createElement(re, null, r.a.createElement(b.c, null, "Are you sure you want to view this community?")), r.a.createElement(U, null, r.a.createElement(b.c, null, "This community is"), " ", r.a.createElement(J, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, r.a.createElement(b.c, null, "quarantined")), r.a.createElement(ie, null, f ? r.a.createElement(_.a, {
							content: f,
							rtJsonElementProps: {
								pageLayer: h
							}
						}) : v ? r.a.createElement(j.a, {
							html: v
						}) : x || W._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), r.a.createElement(b.c, null, "Are you certain you want to continue?")), r.a.createElement(H, null, ((e, t, s, o) => {
							return !(e && e.hasVerifiedEmail) && o ? r.a.createElement(H, null, r.a.createElement(oe, {
								to: "/"
							}, r.a.createElement(b.c, null, "No Thank You")), r.a.createElement(Y, {
								href: "".concat(n.a.redditUrl, "/prefs/update")
							}, r.a.createElement(b.c, null, "Verify Email"))) : r.a.createElement(H, null, r.a.createElement(te, {
								to: "/"
							}, r.a.createElement(b.c, null, "No Thank You")), r.a.createElement(Q, {
								onClick: s
							}, r.a.createElement(b.c, null, "Continue")))
						})(y, 0, o, g)));
					case R.a.SubredditBanned:
						return r.a.createElement("div", null, r.a.createElement($, {
							src: "".concat(n.a.assetPath, "/img/content-gate-icons/banned.png")
						}), r.a.createElement(re, null, Object(d.a)(i, "contentGate.subredditBanned.title", {
							subredditName: E
						})), (e => r.a.createElement(U, null, e ? r.a.createElement(N, {
							linkClassName: D.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : r.a.createElement(b.c, null, "This community has been banned for violating the Reddit rules.")))(t), r.a.createElement(H, null, r.a.createElement(q, {
							to: "/"
						}, r.a.createElement(b.c, null, "Explore Reddit"))));
					case R.a.SubredditBlockedForLegalReason:
						return r.a.createElement("div", null, r.a.createElement($, {
							src: "".concat(n.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), r.a.createElement(re, null, W._("Sorry, this subreddit is not available.", null, {
							hk: "1qeg1J"
						})), r.a.createElement(H, null, r.a.createElement(q, {
							to: "/"
						}, W._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case R.a.SubredditDoesNotExist:
						return r.a.createElement("div", null, r.a.createElement(ee, null), r.a.createElement(re, null, W._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), r.a.createElement(U, null, W._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), r.a.createElement(H, null, y && r.a.createElement(u.a, {
							eventSource: "content_gate"
						}), r.a.createElement(Z, {
							to: "/"
						}, r.a.createElement(b.c, null, "Go Home"))));
					case R.a.ProfileDoesNotExist:
					case R.a.ProfileDeleted:
					case R.a.ProfileSuspended:
					case R.a.ProfileBlockedForLegalReason:
						return r.a.createElement("div", null, r.a.createElement($, {
							src: "".concat(n.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), r.a.createElement(re, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case R.a.ProfileBlockedForLegalReason:
									return W._("Sorry, this account is not available.", null, {
										hk: "3sltUC"
									});
								case R.a.ProfileDeleted:
									return r.a.createElement(b.c, null, "This user has deleted their account.");
								case R.a.ProfileSuspended:
									return r.a.createElement(r.a.Fragment, null, r.a.createElement(b.c, null, "This account has been"), " ", r.a.createElement(J, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, r.a.createElement(b.c, null, "suspended")), ".");
								case R.a.ProfileDoesNotExist:
									return r.a.createElement(r.a.Fragment, null, r.a.createElement(re, null, W._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), r.a.createElement(U, null, W._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), r.a.createElement(H, null, r.a.createElement(Z, {
							to: "/"
						}, r.a.createElement(b.c, null, "Go Home"))));
					case R.a.CustomFeedDoesNotExist:
						return r.a.createElement("div", null, r.a.createElement($, {
							src: "".concat(n.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), r.a.createElement(re, null, r.a.createElement(b.c, null, "Sorry, this custom feed is private or does not exist.")), r.a.createElement(H, null, r.a.createElement(Z, {
							to: "/"
						}, r.a.createElement(b.c, null, "Go Home"))));
					case R.a.PostBlockedForLegalReason:
						return r.a.createElement("div", null, r.a.createElement($, {
							src: "".concat(n.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), r.a.createElement(re, null, W._("Sorry, this content is unavailable", null, {
							hk: "1SDGzE"
						})), r.a.createElement(H, null, r.a.createElement(q, {
							to: "/"
						}, W._("Explore Reddit", null, {
							hk: "FrUWU"
						}))))
				}
			};
			t.a = de(le(Object(i.i)(e => r.a.createElement(V, null, r.a.createElement("div", null, r.a.createElement(ae, null, me(e))), r.a.createElement(y, null)))))
		},
		"./src/reddit/components/ContentTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				StyledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				styledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				fadeIn: "_2bkYZH_kJx5pIHW0Ts5P6e",
				caretOnBottom: "_1rF-A55THyDL-rQ9ZUDQ4_",
				caretOnTop: "_1MHCyMQAMeqRqf5DPWWeq3",
				caretOnLeft: "nVD-oexLbZI_4QjhrkLFz",
				caretOnRight: "KRVDnoE1RIC5qyqQLXxGG"
			}
		},
		"./src/reddit/components/ContentTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/lib/fastdom/index.ts"),
				p = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = s("./src/reddit/selectors/tooltip.ts"),
				h = s("./src/reddit/components/ContentTooltip/index.m.less"),
				b = s.n(h);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var x = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const v = {
					height: 200,
					width: 200
				},
				f = e => {
					switch (e) {
						case "top":
							return "bottom";
						case "right":
							return "left";
						case "left":
							return "right";
						case "bottom":
						default:
							return "top"
					}
				},
				C = Object(l.a)(e => {
					const {
						children: t,
						className: s,
						style: n,
						caretPosition: o,
						caretColor: a
					} = e, i = x(e, ["children", "className", "style", "caretPosition", "caretColor"]);
					return r.a.createElement("div", g({
						className: Object(d.a)(s, b.a.StyledTooltipContainer, {
							[b.a.caretOnTop]: "top" === o,
							[b.a.caretOnLeft]: "left" === o,
							[b.a.caretOnRight]: "right" === o,
							[b.a.caretOnBottom]: "bottom" === o
						}),
						style: Object.assign({}, n, {
							"--contentTooltip-caretColor": a && a[o] ? a[o] : Object(p.a)(e).body
						})
					}, i), t)
				}),
				O = Object(i.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(u.b)(s)(e)
					}
				}),
				E = Object(c.a)(C, [n.a.Click, n.a.Keydown]),
				y = Object(a.b)(O);
			class j extends r.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = v
						} = this.props;
						m.a.read(() => {
							const s = document.getElementById(e);
							if (!s) return;
							const n = s.getBoundingClientRect();
							if (!("undefined" != typeof window)) return void this.setState({
								position: this.props.defaultTooltipPosition
							});
							let o = !0;
							switch (this.props.defaultTooltipPosition) {
								case "bottom":
									o = window.innerHeight - n.bottom > t.height;
									break;
								case "left":
									o = n.left > t.width;
									break;
								case "right":
									o = n.right <= window.innerWidth - t.width;
									break;
								case "top":
								default:
									o = n.top > t.height
							}
							this.setState({
								position: o ? this.props.defaultTooltipPosition : f(this.props.defaultTooltipPosition)
							})
						})
					}, this.state = {
						position: null
					}
				}
				componentDidUpdate(e) {
					!e.isOpen && this.props.isOpen && this.checkAndSetPosition(), e.isOpen && !this.props.isOpen && this.setState({
						position: null
					})
				}
				getPositions(e) {
					switch (e || this.props.defaultTooltipPosition) {
						case "bottom":
							return {
								tooltipPosition: ["center", "top"], targetPosition: ["center", "bottom"], caretPosition: "top"
							};
						case "left":
							return {
								tooltipPosition: ["right", "center"], targetPosition: ["left", "center"], caretPosition: "right"
							};
						case "right":
							return {
								tooltipPosition: ["left", "center"], targetPosition: ["right", "center"], caretPosition: "left"
							};
						case "top":
						default:
							return {
								tooltipPosition: ["center", "bottom"], targetPosition: ["center", "top"], caretPosition: "bottom"
							}
					}
				}
				render() {
					const {
						position: e
					} = this.state, {
						targetPosition: t,
						tooltipPosition: s,
						caretPosition: n
					} = this.getPositions(e);
					return r.a.createElement(E, g({}, this.props, {
						caretPosition: n,
						targetPosition: t,
						tooltipPosition: s
					}))
				}
			}
			t.a = y(j)
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, s) {
			e.exports = {
				SecondaryButton: "_3U-J6NPoBHbyibarrb7T3F",
				secondaryButton: "_3U-J6NPoBHbyibarrb7T3F",
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/overlay/index.ts"),
				p = s("./src/reddit/helpers/trackers/subredditCreation.ts"),
				u = s("./src/reddit/i18n/components.tsx"),
				h = s("./src/reddit/i18n/utils.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/CreateCommunityButton/index.m.less"),
				x = s.n(g),
				v = s("./src/lib/lessComponent.tsx");
			const f = "create-community-button",
				C = v.a.wrapped(l.i, "SecondaryButton", x.a),
				O = v.a.wrapped(c.c, "StyledTooltip", x.a),
				E = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(b.Y)(e),
					userIsSuspended: b.K
				});
			t.a = Object(r.b)(E, (e, t) => {
				let {
					eventSource: s
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(p.b)(s)), e(Object(m.a)("/subreddits/create"))
					},
					onShowTooltip: () => e(Object(i.f)({
						tooltipId: f
					})),
					onHideTooltip: () => e(Object(i.i)())
				}
			})(Object(d.b)(e => {
				let {
					className: t,
					eventSource: s,
					onShowTooltip: n,
					onHideTooltip: r,
					openCommunityCreation: a,
					sendEvent: i,
					userDoesNotHaveEnoughExpToCreateCommunity: c,
					userIsSuspended: d
				} = e;
				return o.a.createElement(C, {
					className: t,
					disabled: d || c,
					onClick: () => a(i),
					onMouseEnter: n,
					onMouseLeave: r,
					id: f
				}, o.a.createElement(u.c, null, "Create Community"), c ? o.a.createElement(O, {
					caretOnTop: !0,
					tooltipId: f,
					text: Object(h.c)("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.")
				}) : d ? o.a.createElement(O, {
					caretOnTop: !0,
					tooltipId: f,
					text: Object(h.c)("Accounts banned from the site can not create communities until the ban is lifted.")
				}) : null)
			}))
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/app/strings/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				p = s("./src/reddit/components/PostMeta/index.tsx"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				h = s("./src/reddit/components/SourceLink/index.tsx"),
				b = s("./src/reddit/components/Thumbnail/index.tsx"),
				g = s("./src/lib/constants/index.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/CrosspostBox/index.m.less"),
				C = s.n(f),
				O = s("./src/lib/lessComponent.tsx");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const y = O.a.div("Container", C.a),
				j = O.a.div("PostMetaWrapper", C.a),
				_ = O.a.wrapped(u.c, "PostTitle", C.a),
				w = O.a.div("FlatList", C.a),
				P = O.a.div("FlatItem", C.a),
				k = O.a.span("FlatListDotSpacer", C.a),
				I = O.a.wrapped(y, "LinkContainer", C.a),
				S = O.a.div("Content", C.a),
				T = O.a.div("ThumbnailContainer", C.a),
				N = Object(i.c)({
					isCurrentUserProfilePost: x.i,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== g.zb.TOPIC),
					language: v.O,
					post: x.M,
					shouldOpenPostInNewTab: v.S,
					subreddit: x.Y
				}),
				L = Object(r.b)(N);
			t.a = L(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: n,
					mediaProps: r,
					post: a,
					subreddit: i,
					language: c
				} = e;
				if (!a) return null;
				const d = {
						post: a,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: n,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i,
						language: c,
						tooltipType: "".concat("CrosspostBox", "--").concat(r.isListing)
					},
					l = t;
				return a && !a.media ? o.a.createElement(I, {
					className: l
				}, o.a.createElement(S, null, o.a.createElement(j, null, o.a.createElement(p.a, d)), M(a), a.source && o.a.createElement(h.a, {
					post: a
				}), F(e)), B(e)) : o.a.createElement(y, {
					className: l
				}, o.a.createElement(j, null, o.a.createElement(p.a, d)), M(a), R(e), F(e))
			});
			const M = e => o.a.createElement(_, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: u.b.Small
				}),
				R = e => {
					const {
						mediaProps: t,
						post: s
					} = e, n = Object.assign({}, t, {
						post: s,
						crosspost: t.post
					});
					return o.a.createElement("div", null, o.a.createElement(m.a, E({}, n, {
						className: C.a.mediaContainer
					})))
				},
				F = e => {
					const {
						language: t,
						post: s
					} = e, {
						score: n
					} = s;
					return o.a.createElement(w, null, o.a.createElement(P, null, Object(c.b)(t, "posts.points.noun", n, {
						count: Object(l.b)(n)
					})), o.a.createElement(k, null), o.a.createElement(P, null, A(e)))
				},
				A = e => {
					const {
						language: t,
						post: s,
						shouldOpenPostInNewTab: n
					} = e, {
						numComments: r
					} = s;
					return o.a.createElement(a.a, {
						"data-click-id": "comments",
						to: Object(d.a)(s.permalink, !0),
						target: n ? "_blank" : void 0
					}, Object(c.b)(t, "posts.comments.noun", r, {
						count: Object(l.b)(r)
					}))
				},
				B = e => o.a.createElement(T, null, o.a.createElement(b.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less": function(e, t, s) {
			e.exports = {
				DistinguishWrapper: "_3aVdI6Y8gye7mgZBvUx5X-",
				distinguishWrapper: "_3aVdI6Y8gye7mgZBvUx5X-",
				Inline: "_2fiLaXOPdMYold0b-FKdVN",
				inline: "_2fiLaXOPdMYold0b-FKdVN",
				RadioOff: "_1kl3eXeS_cuuM03T3_G8G1",
				radioOff: "_1kl3eXeS_cuuM03T3_G8G1",
				RadioOn: "_1EcSEYj-g98-QR-5idlQZr",
				radioOn: "_1EcSEYj-g98-QR-5idlQZr",
				DistinguishOptions: "_1uVj4QJ6tIy-PC9lK3eOYO",
				distinguishOptions: "_1uVj4QJ6tIy-PC9lK3eOYO"
			}
		},
		"./src/reddit/components/DistinguishCommentDropdown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = s("./src/reddit/i18n/utils.ts"),
				d = s("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = s("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				m = s("./src/reddit/layout/row/Inline/index.tsx"),
				p = s("./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less"),
				u = s.n(p);
			const h = a.a.div("DistinguishWrapper", u.a),
				b = a.a.wrapped(m.a, "Inline", u.a),
				g = a.a.wrapped(d.a, "RadioOff", u.a),
				x = a.a.wrapped(l.a, "RadioOn", u.a),
				v = e => o.a.createElement(b, {
					onClick: e.selected ? void 0 : e.onClick
				}, e.selected ? o.a.createElement(x, null) : o.a.createElement(g, null), e.text),
				f = a.a.wrapped(e => {
					const {
						className: t,
						style: s,
						isAdminDistinguished: n,
						isUserEmployee: a,
						isUserMod: i,
						isModDistinguished: d,
						isStickied: l,
						isTopLevelComment: m,
						onDistinguishComment: p
					} = e;
					return o.a.createElement(h, {
						className: t,
						style: s
					}, o.a.createElement(v, {
						onClick: () => p(r.C.NONE, null),
						selected: !d && !n,
						text: Object(c.c)("Undistinguish")
					}), i && o.a.createElement(v, {
						onClick: () => p(r.C.MODERATOR, null),
						selected: d && !l,
						text: Object(c.c)("Distinguish as Mod")
					}), m && i && o.a.createElement(v, {
						onClick: () => p(r.C.MODERATOR, !0),
						selected: l,
						text: Object(c.c)("Distinguish as Mod and Sticky")
					}), a && o.a.createElement(v, {
						onClick: () => p(r.C.ADMIN, null),
						selected: n,
						text: Object(c.c)("Distinguish as Admin")
					}))
				}, "DistinguishOptions", u.a);
			var C = Object(i.a)(f);
			t.a = e => {
				const {
					className: t,
					isAdminDistinguished: s,
					isUserEmployee: n,
					isUserMod: a,
					isModDistinguished: i,
					isStickied: c,
					isTopLevelComment: d,
					onDistinguishComment: l,
					sendEventWithName: m,
					tooltipId: p
				} = e;
				return o.a.createElement("div", {
					className: t,
					id: p
				}, o.a.createElement(C, {
					isAdminDistinguished: s,
					isUserEmployee: n,
					isUserMod: a,
					isModDistinguished: i,
					isOpen: e.isDropdownOpen,
					tooltipId: p,
					isStickied: c,
					isTopLevelComment: d,
					onDistinguishComment: (e, t) => {
						l(e, t), e === r.C.MODERATOR ? m(!c && t ? "distinguish_sticky" : "distinguish") : e === r.C.ADMIN ? m("admin_distinguish") : i && e !== r.C.MODERATOR ? m("undistinguish") : s && e !== r.C.ADMIN && m("admin_undistinguish"), c && !t && m("unsticky")
					}
				}))
			}
		},
		"./src/reddit/components/Economics/CommunityTipJar/async.m.less": function(e, t, s) {
			e.exports = {
				loading: "_3gWqsGamiiRTC2h_yOIcgS"
			}
		},
		"./src/reddit/components/Economics/CommunityTipJar/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/featureFlags/component.tsx"),
				c = s("./src/reddit/components/Economics/CommunityTipJar/async.m.less"),
				d = s.n(c);
			const l = Object(r.a)({
				ErrorComponent: () => null,
				LoadingComponent: e => {
					let {
						className: t
					} = e;
					return o.a.createElement("div", {
						className: Object(a.a)(t, d.a.loading)
					})
				},
				getComponent: () => Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~61cbc843"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad08f508"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~c734f0e1"), s.e("EconomicsCommunityTipJar")]).then(s.bind(null, "./src/reddit/components/Economics/CommunityTipJar/index.tsx")).then(e => e.default)
			});
			t.a = Object(i.a)("spCommunityTipJar", l)
		},
		"./src/reddit/components/Economics/FTUE/TopTippersBenefits/async.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/makeAsync.tsx"),
				c = s("./src/reddit/featureFlags/index.ts"),
				d = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const l = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("EconomicsTopTippersPostLeaderboard").then(s.bind(null, "./src/reddit/components/Economics/FTUE/TopTippersBenefits/index.tsx")).then(e => e.default)
			});
			const m = Object(a.c)({
				featureEnabled: c.d.spTopTippers
			});
			t.a = Object(r.b)(m)((function(e) {
				const {
					featureEnabled: t
				} = e, s = d(e, ["featureEnabled"]);
				return e.featureEnabled ? o.a.createElement(l, s) : null
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/config.ts");
			const a = new Set(["t2_ktrtg"]),
				i = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
						t = arguments.length > 1 ? arguments[1] : void 0;
					return "".concat(r.a.assetPath, "/img/badges/topTippers/").concat(t, "/rank-").concat(e, ".png")
				};
			t.a = e => o.a.createElement("img", {
				className: e.className,
				src: i(e.rank, e.creatorId && a.has(e.creatorId) ? e.creatorId : e.subredditId)
			})
		},
		"./src/reddit/components/Economics/TopTippers/PostLeaderboard/async.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/makeAsync.tsx"),
				c = s("./src/reddit/featureFlags/index.ts"),
				d = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const l = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("EconomicsTopTippersPostLeaderboard").then(s.bind(null, "./src/reddit/components/Economics/TopTippers/PostLeaderboard/index.tsx")).then(e => e.default)
			});
			const m = Object(a.c)({
				featureEnabled: c.d.spTopTippers
			});
			t.a = Object(r.b)(m)((function(e) {
				const {
					featureEnabled: t
				} = e, s = d(e, ["featureEnabled"]);
				return e.featureEnabled ? o.a.createElement(l, s) : null
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/eventTools/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				m = s("./src/reddit/helpers/postEvent.ts"),
				p = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				u = s.n(p);
			const h = i.a.div("EventMetaWrapper", u.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: s,
					language: n,
					post: i
				} = e;
				if (!Object(m.a)(i)) return null;
				const p = i && i.eventInfo,
					b = Object(l.a)(i),
					g = p && Object(a.c)(p.eventStart, p.eventEnd);
				return o.a.createElement("div", {
					className: Object(r.a)(u.a.container, t, {
						[u.a.isCompact]: !!s
					})
				}, o.a.createElement(h, {
					className: u.a.eventMetaWrapper
				}, o.a.createElement(c.a, {
					language: n,
					post: i
				}), !b && g && o.a.createElement(d.a, {
					className: u.a.eventFollowButton,
					post: i,
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
				o = s.n(n),
				r = s("./src/lib/eventTools/index.ts"),
				a = (s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./src/app/strings/index.ts")),
				i = s("./src/lib/constants/index.ts");

			function c(e, t) {
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}
			var d = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				m = s("./src/reddit/icons/fonts/Live/index.tsx"),
				p = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				u = s.n(p),
				h = s("./src/lib/lessComponent.tsx");
			const b = h.a.span("PostEventFutureText", u.a),
				g = h.a.span("PostEventPastText", u.a),
				x = h.a.span("PostEventNowText", u.a),
				v = h.a.span("Container", u.a),
				f = h.a.wrapped(l.a, "CalendarIcon", u.a),
				C = h.a.wrapped(m.a, "LiveIcon", u.a),
				O = h.a.div("LoadingState", u.a);
			class E extends n.Component {
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
						eventInfo: n
					} = s;
					if (!n) return null;
					const {
						eventEnd: l,
						eventIsLive: m,
						eventStart: p
					} = n, u = Object(r.e)(p, l);
					let h, E;
					if (this.state.mounted || u === r.a.Live) h = function(e, t, s, n) {
						const o = Object(r.e)(e, t),
							d = new Date(e * i.Db);
						let l;
						if (o === r.a.Live || n) return Object(a.a)(s, "posts.event.inProgress");
						o === r.a.Future ? l = Object(r.d)(e) ? Object(a.a)(s, "posts.event.today") : Object(r.b)(e) >= 5 ? c(d, s) : function(e, t) {
							return e.toLocaleDateString(t, {
								weekday: "long"
							})
						}(d, s) : o === r.a.Past && (l = Object(r.d)(e) ? Object(a.a)(s, "posts.event.today") : c(d, s));
						const m = function(e, t) {
							return e.toLocaleTimeString(t, {
								hour12: !0,
								hour: "numeric",
								minute: "2-digit"
							}).replace(/ /g, "").toUpperCase()
						}(d, s);
						return "".concat(l, " @ ").concat(m)
					}(p, l, t, m);
					else {
						const e = Object(d.a)({
							isLoading: !0
						});
						h = o.a.createElement(O, {
							className: e
						})
					}
					if (m) E = o.a.createElement(x, null, o.a.createElement(C, null), h);
					else if (u === r.a.Future) E = o.a.createElement(b, null, o.a.createElement(f, null), h);
					else {
						if (u !== r.a.Past) return null;
						E = o.a.createElement(g, null, o.a.createElement(f, null), h)
					}
					return o.a.createElement(v, {
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				d = s("./src/reddit/i18n/utils.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				p = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				u = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				h = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"),
				b = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				g = s("./src/reddit/icons/fonts/helpers.tsx"),
				x = s("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less"),
				v = s.n(x);
			var f = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
					className: "".concat(Object(g.b)("expandoMediaLightbox"), " ").concat(e.className),
					onClick: e.onClick
				}), "LightboxIcon", v.a),
				C = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				O = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				E = s("./src/reddit/icons/fonts/Link/index.tsx"),
				y = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				j = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Text/index.tsx"),
				w = s("./src/reddit/models/Media/index.ts"),
				P = s("./src/reddit/components/ExpandoButton/index.m.less"),
				k = s.n(P);
			const I = Object(r.b)(null, (e, t) => ({
					toggle: () => e(Object(l.v)({
						postId: t.post.id
					}))
				})),
				S = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					const s = Object(i.a)(k.a.icon, k.a.hideOnHover);
					if (t) return o.a.createElement(u.a, {
						className: s
					});
					switch (e) {
						case w.n.GIFVIDEO:
							return o.a.createElement(O.a, {
								className: s
							});
						case w.n.IMAGE:
							return o.a.createElement(j.a, {
								className: s
							});
						case w.n.TEXT:
						case w.n.RTJSON:
							return o.a.createElement(_.a, {
								className: s
							});
						case w.n.VIDEO:
							return o.a.createElement(C.a, {
								className: s
							});
						case w.n.EMBED:
						default:
							return o.a.createElement(E.a, {
								className: s
							})
					}
				};
			t.a = I(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: n,
					isExpanded: r,
					post: l,
					toggle: u,
					useMediaIcons: g
				} = e, x = s || l, v = n && !!s;
				return x.media && !(("rtjson" === x.media.type || "text" === x.media.type) && !Object(p.a)(x)) ? o.a.createElement("button", {
					"aria-expanded": r,
					"aria-haspopup": !0,
					"aria-label": Object(d.c)("Expand content"),
					className: Object(i.a)(t, k.a.outer),
					"data-click-id": r ? "expando_close" : "expando_open",
					onClick: u
				}, r ? o.a.createElement(h.a, {
					className: k.a.icon
				}) : g ? o.a.createElement(o.a.Fragment, null, S(x.media && x.media.type, v), o.a.createElement(b.a, {
					className: Object(i.a)(k.a.icon, k.a.showOnHover)
				})) : o.a.createElement(b.a, {
					className: k.a.icon
				})) : x.source && x.source.url ? o.a.createElement(m.a, {
					"aria-label": Object(d.c)("Open external content"),
					className: Object(i.a)(t, k.a.outer),
					"data-click-id": "expando_open",
					href: x.source.url,
					isSponsored: l.isSponsored,
					source: l.source,
					target: "_blank"
				}, o.a.createElement(y.a, {
					className: Object(i.a)(k.a.icon, k.a.outboundLinkIcon)
				})) : o.a.createElement(a.a, {
					"aria-label": Object(d.c)("View content"),
					className: Object(i.a)(t, k.a.outer),
					"data-click-id": "expando_open",
					to: Object(c.a)(x.permalink),
					rel: "nofollow"
				}, o.a.createElement(f, {
					className: k.a.icon
				}))
			})
		},
		"./src/reddit/components/FakeBannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				BannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				bannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				FakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_",
				fakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_"
			}
		},
		"./src/reddit/components/FakeBannerAd/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./src/app/strings/index.ts"),
				o = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/reddit/components/FakeBannerAd/index.m.less"),
				c = s.n(i),
				d = s("./src/lib/lessComponent.tsx");
			const l = d.a.div("BannerContainer", c.a),
				m = d.a.wrapped(e => a.a.createElement("img", {
					className: e.className,
					src: e.src
				}), "FakeBannerAdImage", c.a),
				p = "GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250 ad-banner adbar adbox1 ads-area adsense-ad box_ad googad";
			class u extends a.a.PureComponent {
				render() {
					const {
						href: e,
						img: t
					} = this.props;
					return a.a.createElement(l, {
						className: p,
						"data-before-content": Object(n.a)("en", "sidebar.sponsored")
					}, a.a.createElement("a", {
						href: o.a.redditUrl + e,
						target: "_blank"
					}, a.a.createElement(m, {
						src: o.a.assetPath + t
					})))
				}
			}
		},
		"./src/reddit/components/Flatlist/ResponsiveRow.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				i = s("./src/reddit/controls/Dropdown/Row.tsx"),
				c = s("./src/reddit/components/Flatlist/index.m.less"),
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
			var m = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			t.a = e => {
				var {
					flatlistItem: t,
					isLoggedIn: s,
					isUserOp: n,
					noBreakpoints: c
				} = e, p = m(e, ["flatlistItem", "isLoggedIn", "isUserOp", "noBreakpoints"]);
				return o.a.createElement(i.a, l({}, p, {
					className: c ? d.a.responsiveRow : Object(r.a)(d.a.responsiveRow, Object(a.b)({
						flatlistItem: t,
						isLoggedIn: s,
						isUserOp: n
					}))
				}))
			}
		},
		"./src/reddit/components/Flatlist/breakpoints.m.less": function(e, t, s) {
			e.exports = {
				HideIfVWSmaller: "_3yh2bniLq7bYr4BaiXowdO",
				hideIfVwSmaller: "_3yh2bniLq7bYr4BaiXowdO",
				FirstGroup: "_2sAFaB0tx4Hd5KxVkdUcAx",
				firstGroup: "_2sAFaB0tx4Hd5KxVkdUcAx",
				LoggedOutVariant: "_3sUJGnemgtNczijwoT8PGg",
				loggedOutVariant: "_3sUJGnemgtNczijwoT8PGg",
				LoggedInVariant: "_28vEaVlLWeas1CDiLuTCap",
				loggedInVariant: "_28vEaVlLWeas1CDiLuTCap",
				OpVariant: "Z-VR19FVnE3nOS0_BU4Wy",
				opVariant: "Z-VR19FVnE3nOS0_BU4Wy",
				EditingGroup: "_1EKOhBHXAW9y8Bgn93c9f3",
				editingGroup: "_1EKOhBHXAW9y8Bgn93c9f3",
				SecondGroup: "_1pShbCnOaF7EGWTq6IvZux",
				secondGroup: "_1pShbCnOaF7EGWTq6IvZux",
				AwardingGroup: "_1EWxiIupuIjiExPQeK4Kud",
				awardingGroup: "_1EWxiIupuIjiExPQeK4Kud",
				HideIfVWLarger: "_1k3nXWGGz2NdPr8dg49Tbs",
				hideIfVwLarger: "_1k3nXWGGz2NdPr8dg49Tbs"
			}
		},
		"./src/reddit/components/Flatlist/constants.ts": function(e, t, s) {
			"use strict";
			var n;
			s.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.EditPost = "EDITPOST", e.EditFlair = "EDITFLAIR", e.Save = "SAVE", e.Gild = "GILD", e.Hide = "HIDE", e.PostOverflowMenu = "POST_OVERFLOW_MENU", e.Report = "REPORT", e.Share = "SHARE"
				}(n || (n = {}))
		},
		"./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return m
			}));
			var n, o, r, a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Flatlist/breakpoints.m.less"),
				c = s.n(i),
				d = s("./src/reddit/components/Flatlist/constants.ts");
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(n || (n = {})),
			function(e) {
				e.First = "FirstGroup", e.Editing = "EditingGroup", e.Second = "SecondGroup", e.Awarding = "AwardingGroup"
			}(o || (o = {})),
			function(e) {
				e.LoggedIn = "LoggedInVariant", e.LoggedOut = "LoggedOutVariant", e.Op = "OpVariant"
			}(r || (r = {}));
			const l = {
					[d.a.EditFlair]: o.Editing,
					[d.a.EditPost]: o.Editing,
					[d.a.Gild]: o.Awarding,
					[d.a.Hide]: o.First,
					[d.a.PostOverflowMenu]: o.First,
					[d.a.Report]: o.First,
					[d.a.Save]: o.First,
					[d.a.Share]: o.Second
				},
				m = e => {
					return (e => {
						const t = c.a[e.type],
							s = c.a[e.group],
							n = c.a[e.groupVariant];
						return Object(a.a)(t, s, n)
					})({
						type: e.breakpointType || n.HideIfVWSmaller,
						group: l[e.flatlistItem],
						groupVariant: ((e, t) => e && t ? r.Op : e ? r.LoggedIn : r.LoggedOut)(e.isLoggedIn, e.isUserOp)
					})
				}
		},
		"./src/reddit/components/Flatlist/index.m.less": function(e, t, s) {
			e.exports = {
				flatlistContainer: "_3-miAEojrCvx_4FQ8x3P-s",
				responsiveRow: "YszYBnnIoNY8pZ6UwCivd",
				flatlistSeparator: "x7sinePdvDKj7bf-cdm4Z",
				flexSpacer: "_21pmAV9gWG6F_UKVe7YIE0",
				modActionsIcon: "_15c1hqseW25EvRu0WP2Dq5",
				shareText: "_6_44iTtZoeY6_XChKt5b0",
				supportButton: "_3NIVQWStkLT7RXnwKpKNuT",
				commentsLink: "_2qww3J5KKzsD7e5DO0BvvU",
				ShareButton: "kU8ebCMnbXfjCWfqn0WPb",
				shareButton: "kU8ebCMnbXfjCWfqn0WPb",
				shareIcon: "_1GQDWqbF-wkYWbrpmOvjqJ",
				ShareMenu: "_JRBNstMcGxbZUxrrIKXe",
				shareMenu: "_JRBNstMcGxbZUxrrIKXe",
				liveDiscussionWrapper: "_3rnnBQZL1OOttG3tFn629n",
				large: "_26YkhAfncIjLM3iT6Gbcvt"
			}
		},
		"./src/reddit/components/Flatlist/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/lib/timezone/index.ts"),
				p = s("./src/reddit/actions/gold/modals.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				h = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/actions/postCreation/editing.ts"),
				g = s("./src/reddit/actions/postFlair.ts"),
				x = s("./src/reddit/actions/reportFlow.ts"),
				v = s("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				f = s("./src/reddit/components/CommentsLink/index.tsx"),
				C = s("./src/higherOrderComponents/makeAsync.tsx"),
				O = s("./src/reddit/featureFlags/index.ts"),
				E = s("./src/reddit/selectors/economics.ts");
			const y = Object(C.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~61cbc843"), s.e("vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad08f508"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~c734f0e1"), s.e("EconomicsEntryPointsPostFlatlistSupportCTA")]).then(s.bind(null, "./src/reddit/components/Economics/EntryPoints/PostFlatlistSupportCTA/index.tsx")).then(e => e.default)
			});
			var j = Object(r.b)(() => Object(a.c)({
					featureEnabled: O.d.spSupport,
					userAcceptsSupport: (e, t) => {
						const s = e.posts.models[t.contentId];
						return !!s && Object(E.k)(e, {
							contentId: s.id,
							subredditId: t.subredditId
						})
					}
				}))((function(e) {
					return e.featureEnabled && e.userAcceptsSupport ? o.a.createElement(y, e) : null
				})),
				_ = s("./src/reddit/i18n/components.tsx"),
				w = s("./src/reddit/constants/colors.ts"),
				P = s("./src/reddit/components/ContentTooltip/index.tsx"),
				k = s("./src/reddit/components/GiveAwardTooltip/index.m.less"),
				I = s.n(k);
			class S extends o.a.Component {
				render() {
					const {
						tooltipId: e
					} = this.props;
					return o.a.createElement(P.a, {
						caretColor: {
							top: w.a.op
						},
						tooltipSizeEstimate: {
							height: 39,
							width: 314
						},
						tooltipId: e,
						defaultTooltipPosition: "bottom"
					}, o.a.createElement("div", {
						className: I.a.container
					}, o.a.createElement("div", {
						className: I.a.newBadge
					}, o.a.createElement(_.c, null, "New")), o.a.createElement("div", {
						className: I.a.text
					}, o.a.createElement(_.c, null, "Try giving a new Appreciation Award"))))
				}
			}
			var T = S,
				N = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				L = s("./src/reddit/components/ModModeReports/helpers.ts"),
				M = s("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				R = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				F = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				A = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				B = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				D = s("./src/reddit/components/ShareMenu/index.tsx"),
				W = s("./src/reddit/components/TrackingHelper/index.tsx"),
				H = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				V = s("./src/reddit/constants/postLayout.ts"),
				U = s("./src/reddit/contexts/PageLayer/index.tsx"),
				G = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				K = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				z = s("./src/reddit/i18n/utils.ts"),
				J = s("./src/reddit/selectors/user.ts"),
				q = s("./src/reddit/components/Flatlist/ResponsiveRow.tsx"),
				Y = s("./src/reddit/helpers/correlationIdTracker.ts"),
				X = s("./src/reddit/helpers/trackers/modTools.ts"),
				Q = s("./src/reddit/helpers/trackers/post.ts"),
				Z = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				$ = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				ee = s("./src/reddit/icons/fonts/Report/index.tsx"),
				te = s("./src/reddit/icons/fonts/Share/index.tsx"),
				se = s("./src/reddit/models/Media/index.ts"),
				ne = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				oe = s("./src/reddit/models/PostCreationForm/index.ts"),
				re = s("./src/reddit/models/User/index.ts"),
				ae = s("./src/reddit/components/Flatlist/constants.ts"),
				ie = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				ce = s("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				de = s("./src/reddit/actions/postCollection/index.ts"),
				le = s("./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx"),
				me = s("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx"),
				pe = s("./src/reddit/selectors/activeModalId.ts"),
				ue = s("./src/reddit/components/Flatlist/index.m.less"),
				he = s.n(ue);

			function be() {
				return (be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "b", (function() {
				return Oe
			})), s.d(t, "a", (function() {
				return Ee
			})), s.d(t, "d", (function() {
				return Pe
			}));
			var ge = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			let xe, ve;
			const fe = l.a.button("ShareButton", he.a),
				Ce = l.a.wrapped(D.a, "ShareMenu", he.a),
				Oe = Object(d.a)(e => {
					var {
						className: t
					} = e, s = ge(e, ["className"]);
					return o.a.createElement($.a, be({}, s, {
						className: Object(c.a)(he.a.modActionsIcon, t),
						style: {
							color: Object(K.a)(Object(G.a)(s), ne.a.actionIcon, ne.b.actionIcon)
						}
					}))
				}),
				Ee = e => o.a.createElement("div", be({}, e, {
					className: Object(c.a)(he.a.flatlistSeparator, e.className)
				})),
				ye = Object(U.t)({
					currentProfileName: U.h,
					isCommentPermalink: U.v,
					isCommentsPage: U.w,
					isProfilePostListing: U.H,
					pageLayer: e => e
				}),
				je = Object(a.c)({
					activeModalId: pe.a,
					layout: U.L,
					userIsOp: J.eb,
					subreddit: U.q
				}),
				_e = Object(r.b)(je, (e, t) => {
					let {
						post: n,
						isOverlay: o,
						isCommentsPage: r
					} = t;
					return {
						addPostToCollection: (t, s) => e(Object(de.a)(t, s)),
						onToggleModal: t => e(Object(u.i)(t)),
						onToggleSave: () => e(Object(h.Q)(n.postId)),
						onHide: t => e(Object(h.U)(n.postId, !n.hidden, o, !0)),
						onReportClick: () => e(Object(x.j)(n.postId, o)),
						onEdit: () => {
							const t = !o && !r;
							e(Object(b.a)(n.postId, t))
						},
						onFlairPost: () => e(Object(u.i)(Object(R.b)(n.postId, o))),
						onGildClick: () => e(Object(p.d)(n.postId, o)),
						onFlairChanged: t => {
							let {
								selectedTemplateId: s,
								previewFlair: o
							} = t;
							return e(Object(g.h)({
								post: n,
								selectedTemplateId: s,
								previewFlair: o
							}))
						},
						toggleEditStartTimeModal: async () => {
							xe && ve || ([xe, ve] = await Promise.all([s.e("schedulePickerModal").then(s.bind(null, "./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx")).then(e => e.default), Promise.resolve().then(s.bind(null, "./src/reddit/actions/eventPosts/index.ts")).then(e => e.editEventTimeRequested)])), e(Object(u.i)(Object(oe.s)(n.postId, o, oe.j.POST_OVERFLOW_MENU)))
						},
						addEventStartTime: t => {
							ve && e(ve(n.id, t))
						}
					}
				});
			class we extends o.a.Component {
				constructor() {
					super(...arguments), this.handleGild = async () => {
						const {
							onGildClick: e,
							post: t,
							sendEvent: n
						} = this.props;
						Object(Y.d)(Y.a.GildingFlow), e();
						const {
							clickGildEvent: o
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						n(o(t.id))
					}, this.onToggleCurrentModal = () => {
						this.props.activeModalId && this.props.onToggleModal(this.props.activeModalId)
					}, this.onToggleCollectionListModal = () => {
						const {
							isOverlay: e,
							post: t
						} = this.props, s = Object(oe.t)(t.id, e);
						this.props.onToggleModal(s)
					}, this.addPostToCollection = e => {
						this.props.addPostToCollection(e.id, this.props.post.id).then(() => this.onToggleCurrentModal())
					}, this.sendEventWithName = e => {
						const {
							isOverlay: t,
							post: s,
							sendEvent: n
						} = this.props;
						n(Object(Q.f)(s.id, e, t ? "post_detail" : "post"))
					}, this.onSaveClick = () => {
						this.props.onToggleSave(), this.sendEventWithName(this.props.post.saved ? "unsave" : "save")
					}, this.onHideClick = () => {
						this.props.onHide(!!this.props.post.hidden), this.sendEventWithName(this.props.post.hidden ? "unhide" : "hide")
					}, this.onReportClick = () => {
						this.props.onReportClick(), this.sendEventWithName("report")
					}
				}
				render() {
					const {
						activeModalId: e,
						addEventStartTime: t,
						className: s,
						currentProfileName: n,
						currentUser: r,
						hasModFlairPerms: a,
						hasModFullPerms: d,
						hasModPostPerms: l,
						isCommentPermalink: p,
						isCommentsPage: u,
						isLargePost: h,
						isOverlay: b,
						isProfilePostListing: g,
						isSticky: x,
						language: C,
						layout: O,
						modModeEnabled: E,
						onFlairChanged: y,
						onIgnoreReports: w,
						onOpenReportsDropdown: P,
						pageLayer: k,
						post: I,
						sendEvent: S,
						showEditFlair: D,
						showEditPost: W,
						subreddit: U,
						toggleEditStartTimeModal: G,
						tooltipType: K,
						userIsOp: J
					} = this.props, Y = !!r && Object(re.f)(r) === I.author, $ = Object(ce.a)("View--Reports", I.id, K), ne = Object(ce.a)("View--GiveAward", I.id, K), de = Object(L.c)(I), pe = Pe("-mod-actions-menu", I.id, b, x), ue = Object(L.a)(I), be = I.postId, ge = O === V.g.Large, ve = !u && ge || l && E, Ee = !(b || u || p), ye = r && I.isGildable, je = I.media && I.media.type === se.n.LIVEVIDEO;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: Object(c.a)(he.a.flatlistContainer, s)
					}, o.a.createElement(f.a, {
						className: he.a.commentsLink,
						hasModPostPerms: l,
						isCommentsPage: u,
						isCommentPermalink: p,
						isOverlay: b,
						postId: I.id,
						modModeEnabled: E,
						numComments: I.numComments
					}), U && r && !J && !I.isNSFW && o.a.createElement(j, {
						className: he.a.supportButton,
						contentId: I.id,
						inPostFeed: Ee,
						modModeEnabled: l && E,
						renderInPortal: Ee,
						subredditId: U.id,
						targetName: I.author
					}), ye && o.a.createElement(o.a.Fragment, null, o.a.createElement(q.a, {
						displayText: Object(z.c)("Give Award"),
						flatlistItem: ae.a.Gild,
						isLoggedIn: !!r,
						isUserOp: J,
						onClick: this.handleGild,
						skipRoleAttr: !0
					}, o.a.createElement(A.f, {
						id: ne
					})), o.a.createElement(T, {
						postOrComment: I,
						tooltipId: ne
					})), o.a.createElement(Ce, {
						className: Object(ie.b)({
							flatlistItem: ae.a.Share,
							isLoggedIn: !!r,
							isUserOp: J
						}),
						dropdownId: Pe("-share-menu", I.id, b, x),
						permalink: I.permalink,
						post: I,
						sendEventWithName: this.sendEventWithName,
						subreddit: U
					}, o.a.createElement(fe, {
						"data-click-id": "share"
					}, o.a.createElement(te.a, {
						className: he.a.shareIcon
					}), o.a.createElement("span", {
						className: he.a.shareText
					}, o.a.createElement(_.c, null, "share")))), W && !ve && o.a.createElement(q.a, {
						displayText: Object(z.c)("Edit post"),
						flatlistItem: ae.a.EditPost,
						isLoggedIn: !!r,
						isUserOp: J,
						onClick: this.props.onEdit,
						skipRoleAttr: !0
					}, o.a.createElement(A.b, null)), (!l || !E) && o.a.createElement(q.a, {
						displayText: Object(i.a)(C, "posts.".concat(I.saved ? "unsave" : "save")),
						flatlistItem: ae.a.Save,
						isLoggedIn: !!r,
						isUserOp: J,
						onClick: this.onSaveClick,
						skipRoleAttr: !0
					}, I.saved ? o.a.createElement(A.e, null) : o.a.createElement(A.d, null)), !I.isSponsored && !ve && o.a.createElement(q.a, {
						displayText: Object(i.a)(C, "posts.".concat(I.hidden ? "unhide" : "hide")),
						flatlistItem: ae.a.Hide,
						isLoggedIn: !!r,
						isUserOp: J,
						onClick: this.onHideClick,
						skipRoleAttr: !0
					}, o.a.createElement(A.a, null)), !Y && !I.isSponsored && !ve && o.a.createElement(q.a, {
						displayText: Object(z.c)("report"),
						flatlistItem: ae.a.Report,
						isLoggedIn: !!r,
						isUserOp: J,
						onClick: this.onReportClick,
						skipRoleAttr: !0
					}, o.a.createElement(A.c, null)), o.a.createElement(M.a, {
						isOverlay: b,
						layout: O,
						modModeEnabled: E,
						post: I,
						sendEvent: S
					}), l && o.a.createElement(N.a, {
						dropdownId: pe,
						onClick: () => S(Object(Q.f)(I.id, "post_mod_action_menu"))
					}, o.a.createElement(Oe, null), o.a.createElement(F.a, {
						canEditFlair: a && !!D,
						hasModFullPerms: d,
						hasModPostPerms: l,
						isOverlay: !!b,
						isPostAuthor: Y,
						language: C,
						modModeEnabled: E,
						post: I,
						tooltipId: pe
					})), l && de && !E && o.a.createElement(B.c, {
						text: "".concat(ue),
						onClick: () => {
							P($), S(Object(Q.f)(I.id, "post_report_menu"))
						},
						id: $
					}, o.a.createElement(H.a, {
						model: I,
						onIgnoreReports: () => {
							w(), S(Object(X.j)(I.ignoreReports ? "restore_reports" : "ignore_reports", I.id))
						},
						tooltipId: $
					}), I.ignoreReports ? o.a.createElement(Z.a, null) : o.a.createElement(ee.a, null)), (r || !I.isSponsored) && o.a.createElement(A.g, {
						currentProfileName: n,
						dropdownId: Pe("-overflow-menu", I.id, b, x),
						isCommentsPage: u,
						isFixed: x,
						isOverlay: !!b,
						isProfilePostListing: g,
						layout: O,
						modModeWithPost: E && l,
						pageLayer: k,
						permalink: I.permalink,
						postId: be,
						sendEvent: S,
						showEditPost: !!W,
						showEditFlair: !!D,
						useFlatlistBreakpoints: this.props.useFlatlistBreakpoints,
						toggleAddEventStartTimeModal: G,
						toggleEditStartTimeModal: G
					}), e === Object(oe.t)(I.id, b) && o.a.createElement(le.a, {
						subredditId: I.belongsTo.id,
						onClose: this.onToggleCurrentModal,
						postId: I.id,
						onSelectCollection: this.addPostToCollection,
						titleText: Object(z.c)("Add post to a collection"),
						onItemHoverActionText: Object(z.c)("add"),
						isOverlay: b
					}), e === Object(oe.s)(I.id, b, oe.j.POST_OVERFLOW_MENU) && xe && o.a.createElement(xe, {
						onChange: t,
						onClose: G,
						schedule: Object(m.c)(I),
						shouldShowDeleteButton: !1
					}), e === Object(oe.u)(I.id, b) && o.a.createElement(me.a, {
						onCancel: this.onToggleCollectionListModal,
						onCollectionCreated: this.addPostToCollection,
						subredditId: I.belongsTo.id
					}), e === Object(R.b)(I.id, b) && o.a.createElement(R.a, {
						flairs: I.flair,
						subredditId: I.belongsTo.id,
						modalId: Object(R.b)(I.id, b),
						onFlairChanged: y
					}), o.a.createElement("div", {
						className: he.a.flexSpacer
					})), Ee && !je && o.a.createElement(v.a, {
						className: Object(c.a)(he.a.liveDiscussionWrapper, {
							[he.a.large]: h
						}),
						isMod: l,
						postId: I.postId
					}))
				}
			}
			const Pe = (e, t, s, n) => {
				let o = t;
				return s && (o += "-overlay"), n && (o += "-sticky"), o += e
			};
			t.c = ye(_e(Object(W.b)(we)))
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/FocusableContent/index.m.less"),
				c = s.n(i);
			t.a = a.a.wrapped(e => o.a.createElement("div", {
				className: Object(r.a)(e.className, {
					[c.a.isFocused]: e.isFocused,
					[c.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", c.a)
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, s) {
			e.exports = {
				FooterContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				footerContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79"
			}
		},
		"./src/reddit/components/GildModal/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				o = s("./src/lib/loadWithRetries/index.ts");
			const r = Object(n.a)({
				getComponent: () => Object(o.a)(() => Promise.all([s.e("FramedGild~GildModal"), s.e("GildModal")]).then(s.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = r
		},
		"./src/reddit/components/GiveAwardTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_17AlFvm1kWw8NYe0FZKlMB",
				newBadge: "_18TPfQgPhTmXJ8270Nc5nM",
				text: "_26N1OuVJykHlztxQkPEfqb"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-CommunityCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Governance-CommunityCard").then(s.bind(null, "./src/reddit/components/Governance/CommunityCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/CommunityCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/Governance/Leaderboard/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-Leaderboard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Governance-Leaderboard").then(s.bind(null, "./src/reddit/components/Governance/Leaderboard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/Leaderboard/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = o
		},
		"./src/reddit/components/Governance/Proposal/NoProposalError/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2y2WPgX5vi2SAfi_nz_Q7B"
			}
		},
		"./src/reddit/components/Governance/Proposal/NoProposalError/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/i18n/components.tsx"),
				i = s("./src/reddit/components/Governance/Proposal/NoProposalError/index.m.less"),
				c = s.n(i);
			t.a = function(e) {
				return o.a.createElement("div", {
					className: Object(r.a)(c.a.container, e.className)
				}, o.a.createElement(a.c, null, "Error: Could not load poll"))
			}
		},
		"./src/reddit/components/Governance/Proposal/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-Proposal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Governance-Proposal").then(s.bind(null, "./src/reddit/components/Governance/Proposal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/Proposal/index.tsx"
				}
			})
		},
		"./src/reddit/components/HeaderImage/index.m.less": function(e, t, s) {
			e.exports = {
				Planet: "xAmHTHwvPxxv5jpbb68XN",
				planet: "xAmHTHwvPxxv5jpbb68XN",
				SubredditIcon: "_3rnV85Ep3gNSeNzlSEJ0eC",
				subredditIcon: "_3rnV85Ep3gNSeNzlSEJ0eC",
				HeaderText: "_2wzi-W7JiZ7A6U6aFvfvSR",
				headerText: "_2wzi-W7JiZ7A6U6aFvfvSR",
				HeaderUrl: "_36MHhLdcmnzdWt0OMdNlwd",
				headerUrl: "_36MHhLdcmnzdWt0OMdNlwd",
				Container: "_2L5G9B5yaoqW3IegiYN-FL",
				container: "_2L5G9B5yaoqW3IegiYN-FL",
				HeaderContainer: "_2RkQc9Gtsq3cPQNZLYv4zc",
				headerContainer: "_2RkQc9Gtsq3cPQNZLYv4zc",
				fullScreenDisabled: "_1yF58T8cn1Lb1f5no79sl8",
				useOverlay: "_1lDljcXh3IMpCeypDtnDAr",
				HeaderContent: "_2ejRlONMr5WoDRgyd4GRyM",
				headerContent: "_2ejRlONMr5WoDRgyd4GRyM",
				hoverHeaderContent: "wyBqMGsbezX5QI0xVtegK",
				PositionedImage: "_26j3FxU4jTfjqi8m96HMmI",
				positionedImage: "_114maV-96nVPek5oReA0kO",
				hoverPositionedImage: "_2L0wcm3McgWbJBT9_UHWyU"
			}
		},
		"./src/reddit/components/HeaderImage/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/constants/screenWidths.ts"),
				l = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				m = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				p = s("./src/reddit/models/Theme/index.ts"),
				u = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				h = s("./src/reddit/components/HeaderImage/index.m.less"),
				b = s.n(h);
			const g = c.a.wrapped(m.a, "Planet", b.a),
				x = c.a.div("SubredditIcon", b.a),
				v = c.a.div("PositionedImage", b.a),
				f = c.a.div("HeaderContent", b.a),
				C = c.a.div("HeaderContainer", b.a),
				O = c.a.span("HeaderText", b.a),
				E = c.a.wrapped(r.a, "HeaderUrl", b.a),
				y = c.a.span("Container", b.a),
				j = Object(i.a)(e => {
					const t = Object(p.e)(e.headerText, e.prefixedHeaderText, Object(u.a)(e).banner.communityNameFormat || ""),
						s = Object(l.a)(e),
						n = Object(u.a)(e).banner.positionedImageAlignment,
						r = Object(u.a)(e).banner.positionedImage,
						i = Object(u.a)(e).banner.secondaryBannerPositionedImage;
					let c;
					switch (n) {
						case "right":
							c = {
								right: "-8px"
							};
							break;
						case "centered":
							c = {
								left: "50%",
								transform: "translate(-50%, -50%)"
							};
							break;
						default:
							c = {
								left: "-8px"
							}
					}
					const m = !!r && !!i && "left" === n,
						h = Object(p.g)(Object(u.a)(e).banner.backgroundColor, Object(u.a)(e).banner.backgroundImage, Object(u.a)(e).banner.backgroundImagePosition),
						j = parseInt(Object(u.a)(e).banner.iconDimensions.customSize, 10),
						_ = "".concat(4 + j, "px");
					return o.a.createElement(y, {
						style: {
							background: h,
							backgroundPosition: "center top",
							height: "".concat(Object(u.a)(e).banner.height, "px")
						}
					}, o.a.createElement(E, {
						className: e.className,
						to: e.url
					}, o.a.createElement(C, {
						className: Object(a.a)({
							[b.a.fullScreenDisabled]: !e.disableFullscreen,
							[b.a.useOverlay]: !!Object(u.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? "".concat(e.maxWidth || d.a, "px") : "100%"
						}
					}, !e.isTopBannerVariant && o.a.createElement(f, {
						className: Object(a.a)({
							[b.a.hoverHeaderContent]: m
						})
					}, e.theme && Object(u.a)(e).banner.showCommunityIcon && (s ? o.a.createElement(x, {
						style: {
							backgroundImage: "url(".concat(s, ")"),
							borderRadius: "".concat(Object(u.a)(e).banner.iconDimensions.borderRadius, "px"),
							height: _,
							width: _
						}
					}) : o.a.createElement(g, {
						style: {
							padding: "".concat(Object(u.a)(e).banner.iconDimensions.padding, "px"),
							borderRadius: "".concat(Object(u.a)(e).banner.iconDimensions.borderRadius, "px"),
							height: _,
							width: _
						}
					})), o.a.createElement(O, {
						style: {
							paddingTop: 32 === j ? "4px" : "14px"
						}
					}, t)), o.a.createElement(v, {
						className: Object(a.a)(b.a.PositionedImage, {
							[b.a.positionedImage]: !!r,
							[b.a.hoverPositionedImage]: !!r && !!i
						}),
						style: Object.assign({}, c, {
							height: "".concat(Object(u.a)(e).banner.positionedImageHeight, "px")
						})
					}))))
				});
			t.a = j
		},
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, s) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/layout/row/Inline/index.tsx"),
				r = s("./src/reddit/components/Hovercards/helpers.m.less"),
				a = s.n(r);
			const i = n.a.wrapped(o.a, "UserActionItem", a.a),
				c = e => {
					const {
						author: t,
						itemId: s,
						subredditName: n,
						tooltipIdPrefix: o,
						tooltipType: r
					} = e;
					let a = o;
					return s && (a = "".concat(a, "--").concat(s)), r && (a = "".concat(a, "--").concat(r)), t && (a = "".concat(a, "--").concat(t)), n && (a = "".concat(a, "--").concat(n)), a
				}
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
				importAsync: () => Promise.all([s.e("IdCard~SubredditWiki"), s.e("IdCard")]).then(s.bind(null, "./src/reddit/components/IdCard/index.tsx")),
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				i = s.n(a),
				c = s("./src/lib/lessComponent.tsx");
			const d = c.a.div("IconWrapper", i.a),
				l = c.a.div("TextWrapper", i.a);
			t.a = e => {
				const {
					className: t,
					color: s,
					icon: n,
					subtitle: a,
					title: c
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(t, i.a.wrapper),
					style: s && {
						borderColor: s
					} || {}
				}, o.a.createElement("div", {
					className: i.a.leftSideRectangle,
					style: s && {
						backgroundColor: s
					} || {}
				}), n ? o.a.createElement(d, null, n) : o.a.createElement(d, null), o.a.createElement(l, null, o.a.createElement("div", {
					className: i.a.title
				}, c), a && o.a.createElement("div", {
					className: i.a.subtitle
				}, a)))
			}
		},
		"./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.m.less": function(e, t, s) {
			e.exports = {
				BannerBase: "_1EjIqPTCvhReSe3IjZptiB",
				bannerBase: "_1EjIqPTCvhReSe3IjZptiB",
				ArchivedIcon: "_3Apkcb3itLCGec85v2ZzFz",
				archivedIcon: "_3Apkcb3itLCGec85v2ZzFz"
			}
		},
		"./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/constants/colors.ts"),
				a = s("./src/reddit/i18n/utils.ts"),
				i = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				c = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				d = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.m.less"),
				l = s.n(d);
			t.a = () => o.a.createElement(c.a, {
				className: l.a.BannerBase,
				color: r.a.locked,
				icon: o.a.createElement(i.a, {
					className: l.a.ArchivedIcon
				}),
				subtitle: Object(a.c)("New comments cannot be posted and votes cannot be cast"),
				title: Object(a.c)("This thread is archived")
			})
		},
		"./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.m.less": function(e, t, s) {
			e.exports = {
				lockIcon: "_26YMkU38Pb6t5wXIJSne-H",
				bannerBase: "jf95ZrrjIs2i--Ud8Kvb7"
			}
		},
		"./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/linkMatchers/customLinks.ts"),
				a = s("./src/reddit/constants/colors.ts"),
				i = s("./src/reddit/i18n/utils.ts"),
				c = s("./src/reddit/models/Subreddit/index.ts"),
				d = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				l = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.m.less"),
				m = s.n(l);
			const p = o.a.createElement(e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M16,9H15V7A5,5,0,0,0,5,7V9H4a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1H16a1,1,0,0,0,1-1V10A1,1,0,0,0,16,9ZM7,7a3,3,0,0,1,6,0V9H7Z"
			})), {
				className: m.a.lockIcon
			});
			t.a = e => {
				let {
					subredditOrProfile: t
				} = e;
				const s = t ? Object(i.c)("This thread has been locked by the moderators of ".concat(Object(i.b)("communityname", (e => Object(c.e)(e) ? r.d.profile : r.d.subreddit)(t) + t.name))) : Object(i.c)("This thread has been locked");
				return o.a.createElement(d.a, {
					className: m.a.bannerBase,
					color: a.a.locked,
					icon: p,
					subtitle: Object(i.c)("New comments cannot be posted"),
					title: s
				})
			}
		},
		"./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.m.less": function(e, t, s) {
			e.exports = {
				contestModeEnabled: "_3Jf9vrUhPCp1M6DPL_bjy9",
				TrophyIcon: "_3v30vS-N87epKUIqWSlBm1",
				trophyIcon: "_3v30vS-N87epKUIqWSlBm1"
			}
		},
		"./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				c = s("./src/reddit/i18n/utils.ts"),
				d = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.m.less"),
				l = s.n(d);
			const m = a.a.wrapped(e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M32,7.8l0.5-5.3h-25L8,7.8c-3.2,0.8-5.5,3.7-5.5,7.2v0.1c0,4,3.1,7.2,7,7.4l0,0c0.3,2.8,2.7,5,5.5,5h0.1 c1.3,0,2.4,1.1,2.4,2.4v0.1c0,1.3-1.1,2.4-2.4,2.4H15c-2.7,0-4.9,2.2-4.9,4.9v0.1h20v-0.1c0-2.7-2.2-4.9-4.9-4.9h-0.1 c-1.3,0-2.4-1.1-2.4-2.4v-0.1c0-1.3,1.1-2.4,2.4-2.4H25c2.8,0,5.2-2.2,5.5-5l0,0c3.9-0.2,7-3.4,7-7.4v-0.1 C37.5,11.5,35.2,8.6,32,7.8z M4.5,15.1v-0.1c0-2.4,1.6-4.4,3.7-5.1l1.1,10.7C6.6,20.1,4.5,17.9,4.5,15.1z M35.5,15.1 c0,2.8-2.1,5.1-4.8,5.4l1.1-10.7c2.2,0.7,3.7,2.8,3.7,5.1V15.1z"
			}))), "TrophyIcon", l.a);
			t.a = Object(r.a)(e => {
				const {
					hasModeratorPostPermissions: t,
					theme: s
				} = e, n = t ? Object(c.c)("Comments are in random ordering and vote scores are hidden to non-mods") : Object(c.c)("Comments are in random ordering and vote scores are hidden");
				return o.a.createElement(i.a, {
					className: l.a.contestModeEnabled,
					color: s && s.newCommunityTheme.linkText,
					icon: o.a.createElement(m, null),
					subtitle: n,
					title: Object(c.c)("This post has contest mode enabled")
				})
			})
		},
		"./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less": function(e, t, s) {
			e.exports = {
				BannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				bannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				icon: "S7CavmS-v3qdubhT9asIc",
				link: "FmwbWt4ZwkxbQbR-0vj1G"
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3UJGTKmHd4TVKyOdhiMAJ1",
				rawHtmlDisplay: "s2P-f2c3l2Irco5Ru0S5J",
				link: "_1eRb8-B7kEgkwxWFSWuVUk",
				icon: "WCZvfrkaO-Zq7vsDKOAdS"
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = s("./src/reddit/constants/colors.ts"),
				l = s("./src/reddit/controls/InternalLink/index.tsx"),
				m = s("./src/reddit/i18n/components.tsx"),
				p = s("./src/reddit/i18n/utils.ts"),
				u = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				h = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				x = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less"),
				v = s.n(x);
			const f = o.a.createElement(u.a, {
					className: v.a.icon
				}),
				C = Object(a.c)({
					language: b.O,
					subreddit: h.y,
					subredditAboutInfo: h.v
				}),
				O = Object(r.b)(C);
			t.a = O(e => {
				const {
					subreddit: t,
					subredditAboutInfo: s,
					language: n
				} = e;
				if (!(t && t.isQuarantined)) return null;
				const r = s && s.quarantineMessageHtml,
					a = s && s.quarantineMessage || Object(i.a)(n, "contentGate.quarantinedSubreddit.quarantineMsg");
				return o.a.createElement(g.a, {
					className: v.a.container,
					color: d.a.quarantine,
					icon: f,
					subtitle: o.a.createElement("span", null, o.a.createElement(m.c, null, "This community is"), " ", o.a.createElement("a", {
						className: v.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank"
					}, o.a.createElement(m.c, null, "quarantined")), ": ", r ? o.a.createElement(c.a, {
						className: v.a.rawHtmlDisplay,
						html: r
					}) : a, " ", o.a.createElement(l.a, {
						className: v.a.link,
						to: "/"
					}, o.a.createElement(m.c, null, "Click to return home."))),
					title: Object(p.c)("Community Quarantined")
				})
			})
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				i = s("./src/reddit/helpers/overlay/index.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				},
				l = e => {
					const {
						children: t,
						className: s,
						to: n
					} = e, r = d(e, ["children", "className", "to"]), l = Object(i.b)(n);
					return o.a.createElement(a.a, c({
						className: s,
						to: l
					}, r), t)
				};

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			t.a = e => {
				const {
					isOverlay: t
				} = e, s = p(e, ["isOverlay"]), n = t ? l : r.a;
				return o.a.createElement(n, m({}, s, {
					children: s.children,
					className: s.className,
					onClick: s.onClick,
					to: s.to
				}))
			}
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/PostList/index.tsx"),
				o = s("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(o.a)(n.a)
		},
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				i = s("./src/reddit/components/Thumbnail/index.tsx"),
				c = s("./src/reddit/constants/posts.ts"),
				d = s("./src/reddit/helpers/trackers/post.ts"),
				l = s("./src/reddit/models/Subreddit/index.ts"),
				m = s("./src/reddit/components/MediumPost/index.m.less"),
				p = s.n(m);
			t.a = e => {
				let {
					crosspost: t,
					post: s,
					forceShowNSFW: n,
					redditStyle: m,
					shouldShowSubscribeButton: u,
					subredditOrProfile: h,
					templatePlaceholderImage: b
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(p.a.thumbnailContainer, {
						[p.a.mShowingButtonOrOverflow]: u
					})
				}, o.a.createElement("div", {
					className: p.a.thumbnailContainerRow
				}, u && h && o.a.createElement(a.a, {
					className: p.a.subscribeButton,
					getEventFactory: e => Object(d.f)(s.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: h.name,
						type: Object(l.e)(h) ? c.a.PROFILE : c.a.SUBREDDIT
					},
					postId: s.id
				})), o.a.createElement(i.a, {
					crosspost: t,
					post: s,
					redditStyle: m,
					forceShowNSFW: n,
					templatePlaceholderImage: b
				}))
			}
		},
		"./src/reddit/components/MediumPost/index.m.less": function(e, t, s) {
			e.exports = {
				mainBody: "yn9v_hQEhjlRNZI0xspbA",
				modModeReports: "_3RpVs_MuohyWxfQ8DMI1hz",
				postTitle: "_2wImphGg_1LcEF5MiErvRx",
				subscribeButton: "_2as7ZiIO6VQmOoNUm62veu",
				thumbnailContainer: "_17nmfaMf1Rq20sVfEmle0O",
				mShowingButtonOrOverflow: "yIt5UPS176eVebNGNRQtf",
				content: "_32pB7ODBwG3OSx1u_17g58",
				horizontalVotes: "_1Lt8O-wG_BSSv9bpz5gmwV",
				flatlistContainer: "XrvmOG7SxKlAJj71Fwi2y",
				backgroundWrapper: "_2uazWzYzM0Qndpz5tFu3EX",
				container: "_3xuFbFM3vrCqdGuKGhhhn0",
				leftPadding: "i7Fs9tR9IvW9lWlOG_yrY",
				chain: "vLpzNkGe1yVXuRgtBVQWk",
				thumbnailContainerRow: "ly1p6kYBCM7ZqoRjGeAhw",
				postOverflow: "x4YOGJe9jA6wgzmbyKZK0",
				postSource: "_2BgmOVmNwratQ_mDI9DaHR"
			}
		},
		"./src/reddit/components/ModActionsMenu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				d = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				l = s("./src/reddit/selectors/tooltip.ts");
			const m = Object(a.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(l.b)(s)(e)
					}
				}),
				p = Object(r.b)(m, (e, t) => {
					let {
						dropdownId: s
					} = t;
					return {
						toggleDropdown: () => e(Object(i.h)({
							tooltipId: s
						}))
					}
				}),
				u = () => null;
			t.a = p(e => o.a.createElement("div", {
				id: e.dropdownId,
				onClick: e.dropdownIsOpen ? u : e.onClick
			}, e.inCommentFlatlist ? o.a.createElement(c.b, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children) : o.a.createElement(d.c, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children)))
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			}));
			const n = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				o = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				r = e => (e.numReports || 0) > 0
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/loadWithRetries/index.ts"),
				c = s("./src/reddit/i18n/components.tsx"),
				d = s("./src/reddit/components/ModModeReports/index.m.less"),
				l = s.n(d);
			const m = a.a.div("Text", l.a),
				p = a.a.div("Placeholder", l.a),
				u = Object(r.a)({
					ErrorComponent: e => {
						let {
							className: t
						} = e;
						return o.a.createElement(p, {
							className: t
						})
					},
					getComponent: () => Object(i.a)(() => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							className: t
						} = e;
						return o.a.createElement(p, {
							className: t
						}, o.a.createElement(m, null, o.a.createElement(c.c, null, "Loading reports…")))
					}
				});
			t.a = e => o.a.createElement(u, e)
		},
		"./src/reddit/components/ModToolsFlatlist/breakpoints.m.less": function(e, t, s) {
			e.exports = {
				HideIfVWSmaller: "_3_rOJpfw54EqNa6daNkKzY",
				hideIfVwSmaller: "_3_rOJpfw54EqNa6daNkKzY",
				ApproveGroup: "LoIAKSBD5_isA5qtrC3Kt",
				approveGroup: "LoIAKSBD5_isA5qtrC3Kt",
				DefaultVariant: "_1LDTBaBSnv4jL7lV98ayQL",
				defaultVariant: "_1LDTBaBSnv4jL7lV98ayQL",
				CompactVariant: "_2SLG9GIeu2AqBhz2XpW8ow",
				compactVariant: "_2SLG9GIeu2AqBhz2XpW8ow",
				RemoveGroup: "_3LzZxt89CjBbx__WYlCPCh",
				removeGroup: "_3LzZxt89CjBbx__WYlCPCh",
				SpamGroup: "_2WaHNFliLea9SKyF3nlBx8",
				spamGroup: "_2WaHNFliLea9SKyF3nlBx8",
				FlairGroup: "_129dedXMiIcel_grUelwoG",
				flairGroup: "_129dedXMiIcel_grUelwoG",
				HideIfVWLarger: "_1RO0TIeDG89QPdOWgZwUvR",
				hideIfVwLarger: "_1RO0TIeDG89QPdOWgZwUvR"
			}
		},
		"./src/reddit/components/ModToolsFlatlist/constants.ts": function(e, t, s) {
			"use strict";
			var n;
			s.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.Flair = "FLAIR", e.Spam = "SPAM", e.Remove = "REMOVE", e.Approve = "APPROVE"
				}(n || (n = {}))
		},
		"./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return m
			}));
			var n, o, r, a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				c = s("./src/reddit/components/ModToolsFlatlist/breakpoints.m.less"),
				d = s.n(c);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(n || (n = {})),
			function(e) {
				e.Approve = "ApproveGroup", e.Remove = "RemoveGroup", e.Spam = "SpamGroup", e.Flair = "FlairGroup"
			}(o || (o = {})),
			function(e) {
				e.Compact = "CompactVariant", e.Default = "DefaultVariant"
			}(r || (r = {}));
			const l = {
					[i.a.Approve]: o.Approve,
					[i.a.Remove]: o.Remove,
					[i.a.Spam]: o.Spam,
					[i.a.Flair]: o.Flair
				},
				m = e => {
					const t = l[e.flatlistItem],
						s = d.a[e.breakpointType],
						n = d.a[t],
						o = e.isCompact ? d.a[r.Compact] : d.a[r.Default];
					return Object(a.a)(s, n, o)
				}
		},
		"./src/reddit/components/ModToolsFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				container: "OccjSdFd6HkHhShRg6DOl"
			}
		},
		"./src/reddit/components/ModToolsFlatlist/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				h = s("./src/reddit/components/ModModeReports/helpers.ts"),
				b = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				g = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				x = s("./src/reddit/constants/postLayout.ts"),
				v = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				C = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				O = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				E = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				y = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				j = s("./src/reddit/selectors/activeModalId.ts"),
				_ = s("./src/reddit/selectors/moderatorPermissions.ts"),
				w = s("./src/reddit/selectors/postFlair.ts"),
				P = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				k = s("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				I = s("./src/reddit/components/ModToolsFlatlist/index.m.less"),
				S = s.n(I);
			const T = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return Object(k.b)({
						breakpointType: k.a.HideIfVWSmaller,
						flatlistItem: e,
						isCompact: t
					})
				},
				N = Object(a.b)(() => Object(i.c)({
					activeModalId: j.a,
					canEditFlair: (e, t) => {
						let {
							post: s
						} = t;
						return Object(w.a)(e, {
							postId: s.id
						})
					},
					moderatorPermissions: (e, t) => Object(_.i)(e, {
						postId: t.post.id
					})
				}), (e, t) => {
					let {
						post: s
					} = t;
					return {
						onApprovePost: () => e(Object(m.r)(s.id)),
						onOpenPostModModeDropdown: t => e(Object(p.h)({
							tooltipId: t
						})),
						onRemovePost: () => e(Object(m.P)(s.id, !1)),
						onSpamPost: () => e(Object(m.P)(s.id, !0)),
						onFlairPost: t => () => e(Object(l.i)(t))
					}
				});
			t.a = N(e => {
				const {
					canEditFlair: t,
					className: s,
					isOverlay: a,
					layout: i,
					moderatorPermissions: l,
					modModeEnabled: m,
					onApprovePost: p,
					onFlairPost: j,
					onRemovePost: _,
					onSpamPost: w,
					post: k,
					sendEvent: I,
					showIconsOnly: N
				} = e, L = Object(v.a)(l), M = Object(h.b)(k), R = !(!k.approvedBy || !M), F = Object(b.b)(k.id, a), A = L && m && !k.isSponsored, B = t && m;
				let D, W, H;
				N || (D = ((e, t) => e ? n.fbt._("reapprove", null, {
					hk: "OJvB1"
				}) : t ? n.fbt._("approved", null, {
					hk: "2bWAFI"
				}) : n.fbt._("approve", null, {
					hk: "2DIHcM"
				}))(R, k.approvedBy), W = ((e, t) => e ? t === d.k ? n.fbt._("Confirm removal", null, {
					hk: "1t5tKM"
				}) : n.fbt._("removed", null, {
					hk: "35ZTch"
				}) : n.fbt._("remove", null, {
					hk: "3LWMcS"
				}))(k.isRemoved, k.bannedBy), H = (e => e ? n.fbt._("spammed", null, {
					hk: "3GPrkZ"
				}) : n.fbt._("spam", null, {
					hk: "3ebJLg"
				}))(k.isSpam));
				const V = !a && i === x.g.Compact;
				return r.a.createElement("div", {
					className: Object(c.a)(S.a.container, s)
				}, A && r.a.createElement(o.Fragment, null, r.a.createElement(g.b, {
					className: T(P.a.Approve, V),
					key: "approveButton",
					text: D,
					disabled: !!k.approvedBy && !M,
					onClick: () => {
						p(), I(Object(f.f)(k.id, "approve"))
					}
				}, r.a.createElement(C.a, null)), r.a.createElement(g.d, {
					className: T(P.a.Remove, V),
					key: "removeButton",
					text: W,
					disabled: k.isRemoved && k.bannedBy !== d.k,
					onClick: () => {
						_(), k.isRemoved && k.bannedBy === d.k ? I(Object(f.f)(k.id, "confirm_remove")) : I(Object(f.f)(k.id, "remove"))
					}
				}, r.a.createElement(O.a, null)), r.a.createElement(g.d, {
					className: T(P.a.Spam, V),
					key: "removeSpamButton",
					text: H,
					disabled: k.isSpam,
					onClick: () => {
						w(), I(Object(f.f)(k.id, "spam"))
					}
				}, r.a.createElement(E.a, null))), B && r.a.createElement(g.c, {
					className: T(P.a.Flair, V),
					key: "tagButton",
					onClick: () => {
						j(F)(), I(Object(f.f)(k.id, "post_flair_picker"))
					}
				}, r.a.createElement(y.a, null)), r.a.createElement(u.f, {
					postId: k.id
				}))
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/i18n/components.tsx"),
				i = s("./src/reddit/i18n/utils.ts"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				h = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/helpers/isRemoved.ts"),
				v = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				f = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				C = s("./src/reddit/models/Post/index.ts"),
				O = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				y = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				j = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				w = s("./src/reddit/icons/fonts/Report/index.tsx"),
				P = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				k = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				I = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				S = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				T = s("./src/reddit/components/PostBadges/index.m.less"),
				N = s.n(T);

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const M = e => o.a.createElement("span", L({
					className: N.a.removalReason
				}, e), e.children),
				R = Object(d.d)("posts.archived"),
				F = Object(d.d)("modTools.commentsLocked"),
				A = Object(d.d)("modTools.moderatorOf"),
				B = Object(d.d)("modTools.stickiedPost"),
				D = Object(d.d)("modTools.pinnedPost"),
				W = (e, t, s) => {
					const n = "PostBadges--".concat(e, "--").concat(t);
					return s ? "".concat(n, "--").concat(s) : n
				},
				H = Object(g.t)({
					isProfilePostListing: g.H,
					isSubreddit: g.I,
					pageLayer: e => e
				}),
				V = Object(c.c)({
					isPinned: (e, t) => {
						let {
							post: s
						} = t;
						return Object(O.s)(e, {
							postId: s.id
						})
					},
					modModeEnabled: g.N
				}),
				U = Object(r.b)(V, (e, t) => ({
					onHideTooltip: () => e(Object(p.i)()),
					onOpenRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(p.f)({
						tooltipId: t
					}))
				}));
			t.a = H(U(e => {
				let {
					className: t,
					displayText: s,
					isSubreddit: r,
					inSubredditOrProfile: c,
					isCompactPinnedPost: d,
					isPinned: p,
					isProfilePostListing: g,
					language: O,
					modModeEnabled: T,
					onHideTooltip: H,
					onOpenRemovalReasonModal: V,
					onShowTooltip: U,
					post: G,
					tooltipType: K
				} = e;
				const z = {
						caretOnTop: !1
					},
					J = G.isRemoved && !G.modRemovalReason && !G.modNote && G.belongsTo.type === b.a.SUBREDDIT,
					q = W("Approve", G.id, K),
					Y = W("Archived", G.id, K),
					X = W("Automod", G.id, K),
					Q = W("Lock", G.id, K),
					Z = W("Mod", G.id, K),
					$ = W("Remove", G.id, K),
					ee = W("Report", G.id, K),
					te = W("Spam", G.id, K),
					se = W("Sticky", G.id, K),
					ne = W("Pinned", G.id, K);
				return o.a.createElement("div", {
					className: t
				}, c && s && G.distinguishType === m.C.MODERATOR && o.a.createElement(n.Fragment, null, o.a.createElement(S.a, {
					className: N.a.modIcon,
					desc: A(O, {
						displayText: s
					}),
					id: Z,
					onMouseEnter: U(Z),
					onMouseLeave: H
				}), o.a.createElement(u.c, L({
					tooltipId: Z,
					text: A(O, {
						displayText: s
					})
				}, z))), G.isArchived && o.a.createElement(n.Fragment, null, o.a.createElement(y.a, {
					className: N.a.archivedIcon,
					desc: R(O),
					id: Y,
					onMouseEnter: U(Y),
					onMouseLeave: H
				}), o.a.createElement(u.c, L({
					tooltipId: Y,
					text: R(O)
				}, z))), G.isLocked && o.a.createElement(n.Fragment, null, o.a.createElement(j.a, {
					className: N.a.lockIcon,
					desc: F(O),
					id: Q,
					onMouseEnter: U(Q),
					onMouseLeave: H
				}), o.a.createElement(u.c, L({
					tooltipId: Q,
					text: F(O)
				}, z))), r && Object(C.k)(G) && !d && o.a.createElement(n.Fragment, null, o.a.createElement(k.a, {
					className: N.a.stickyIcon,
					desc: B(O),
					id: se,
					onMouseEnter: U(se),
					onMouseLeave: H
				}), o.a.createElement(u.c, L({
					tooltipId: se,
					text: B(O)
				}, z))), g && p && o.a.createElement(n.Fragment, null, o.a.createElement(k.a, {
					className: N.a.stickyIcon,
					desc: D(O),
					id: ne,
					onMouseEnter: U(ne),
					onMouseLeave: H
				}), o.a.createElement(u.c, L({
					tooltipId: ne,
					text: D(O)
				}, z))), (G.isApproved || G.approvedBy) && o.a.createElement(n.Fragment, null, o.a.createElement(E.a, {
					className: N.a.approveIcon,
					desc: Object(v.a)(O, G),
					id: q,
					onMouseEnter: U(q),
					onMouseLeave: H
				}), o.a.createElement(u.c, L({
					tooltipId: q,
					text: Object(v.a)(O, G)
				}, z))), Object(x.a)(G) && o.a.createElement(n.Fragment, null, o.a.createElement(_.a, {
					className: N.a.removeIcon,
					desc: Object(v.c)(O, G),
					id: $,
					onMouseEnter: U($),
					onMouseLeave: H
				}), J && o.a.createElement(h.a, {
					className: N.a.addRemovalReason,
					onClick: V,
					text: Object(i.c)("Add a removal reason")
				}), (G.modRemovalReason || G.modNote) && o.a.createElement(M, {
					onMouseEnter: U($),
					onMouseLeave: H
				}, o.a.createElement(a.c, null, "Removal reason")), o.a.createElement(u.c, L({
					tooltipId: $,
					text: Object(v.c)(O, G)
				}, z))), G.bannedBy && G.isSpam && o.a.createElement(n.Fragment, null, o.a.createElement(P.a, {
					className: N.a.spamIcon,
					desc: Object(v.e)(O, G),
					id: te,
					onMouseEnter: U(te),
					onMouseLeave: H
				}), o.a.createElement(u.c, L({
					tooltipId: te,
					text: Object(v.e)(O, G)
				}, z))), ("AutoModerator" === G.approvedBy || "AutoModerator" === G.bannedBy) && o.a.createElement(n.Fragment, null, o.a.createElement(I.a, {
					className: Object(l.a)(N.a.automoderator, !!G.bannedBy && N.a.isRemoved),
					desc: Object(v.b)(O),
					id: X,
					onMouseEnter: U(X),
					onMouseLeave: H
				}), o.a.createElement(u.c, L({
					tooltipId: X,
					text: Object(v.b)(O)
				}, z))), Object(f.a)(G) && !T && o.a.createElement(n.Fragment, null, o.a.createElement(w.a, {
					className: N.a.reportIcon,
					desc: Object(v.d)(O, G.numReports),
					id: ee,
					onMouseEnter: U(ee),
					onMouseLeave: H
				}), o.a.createElement(u.c, L({
					tooltipId: ee,
					text: Object(v.d)(O, G.numReports)
				}, z))))
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/AdViewability/index.tsx"),
				i = s("./src/reddit/components/GildModal/getGildModalId.ts"),
				c = s("./src/reddit/components/GildModal/Loader.tsx"),
				d = s("./src/reddit/connectors/PostViewable/index.ts"),
				l = s("./src/reddit/models/Media/index.ts"),
				m = s("./src/reddit/selectors/gild.ts"),
				p = s("./src/reddit/selectors/video.ts"),
				u = s("./src/lib/classNames/index.ts"),
				h = s("./src/higherOrderComponents/withClickTracking.tsx"),
				b = s("./src/reddit/components/PostContainer/index.m.less"),
				g = s.n(b),
				x = s("./src/lib/lessComponent.tsx");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var f = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const C = x.a.div("WrappedPost", g.a),
				O = Object(r.c)({
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
							post: n
						} = t;
						const o = Object(i.b)(n.postId, s);
						return Object(m.c)(e, o)
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
				E = Object(d.a)(O),
				y = e => {
					const t = Object(h.d)(e.target, e.currentTarget),
						s = Object(h.b)(e.target, e.currentTarget, h.a.buttons);
					return "subreddit" !== t && s
				};
			class j extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const e = this.props,
						{
							pixelPostHasEnteredView: t,
							pixelPostHasExitedView: s,
							afterClickTracking: n,
							buffering: r,
							children: i,
							className: d,
							continuousViewingStartedAt: m,
							gildModalIsOpen: p,
							makePostContainerId: h,
							playing: b,
							post: g,
							onClick: x,
							onPostContentClick: O,
							onPostViewable: E,
							isOverlay: j
						} = e,
						_ = f(e, ["pixelPostHasEnteredView", "pixelPostHasExitedView", "afterClickTracking", "buffering", "children", "className", "continuousViewingStartedAt", "gildModalIsOpen", "makePostContainerId", "playing", "post", "onClick", "onPostContentClick", "onPostViewable", "isOverlay"]),
						w = o.a.createElement(C, v({}, _, {
							onMouseUp: e => {
								0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
									this.cancelClick = !1
								}, 1e3))
							},
							onClick: e => {
								!this.cancelClick && e.button < 2 && (n(() => x && x(e, g))(e), O && y(e) && O(e, g))
							},
							className: Object(u.a)(d, "Post ".concat(g.id), {
								promotedlink: g.isSponsored
							}),
							id: h ? h(g.id) : g.id,
							tabIndex: -1
						}), i, p && o.a.createElement(c.a, null)),
						P = !!g.media && g.media.type === l.n.VIDEO;
					return g.isSponsored || P ? o.a.createElement(a.a, {
						onViewable: e => E(g, e),
						pixelPostHasEnteredView: e => t(g, e),
						pixelPostHasExitedView: e => s(g, e),
						children: w,
						trackVideoMetrics: P && !r && b,
						continuousViewingStartedAt: m
					}) : w
				}
			}
			t.a = E(Object(h.c)(j))
		},
		"./src/reddit/components/PostContent/index.m.less": function(e, t, s) {
			e.exports = {
				content: "_3UMN4RCVY5288m_fOZlkcg",
				controlsContainer: "_1hwEKkB_38tIoal6fcdrt9",
				postNumbers: "_1svxG6WJ6vr-T9iN3rf5M6",
				flatlistContainer: "UPYG6UwB7XqTeGj4a4vBr",
				mainBody: "_3MC4c3Q_Y41YKtl1TcvyMt",
				leftPadding: "_1mK-LVHGTTlcFpMsjItjYJ",
				noProposal: "_13LHQz0igp-olmn_mDhJ7B",
				postContainer: "_2rszc84L136gWQrkwH6IaM",
				hasEventMeta: "qpc-hx5EvongRjYhe0TOO",
				PostTitle: "_2v9pwVh0VUYrmhoMv1tHPm",
				postTitle: "_2v9pwVh0VUYrmhoMv1tHPm",
				ExpandoButton: "_1sq8G2ap3_yMYvXINVLxFm",
				expandoButton: "_1sq8G2ap3_yMYvXINVLxFm",
				ClassicExpandoMotion: "_2w7fkGYeZk22ZtKCTcGj_T",
				classicExpandoMotion: "_2w7fkGYeZk22ZtKCTcGj_T",
				ClassicPostMedia: "_3l9ryDzeuWyQEv-5287xPH",
				classicPostMedia: "_3l9ryDzeuWyQEv-5287xPH",
				FullWidthFlatlist: "_3P3ghhoNky7Bzspbfw7--R",
				fullWidthFlatlist: "_3P3ghhoNky7Bzspbfw7--R",
				ProposalContainer: "_1a2Qb0YJU4-QdYRoANb0J-",
				proposalContainer: "_1a2Qb0YJU4-QdYRoANb0J-",
				isEditing: "_1_-TcT_H2BAsf4uFtfvDf9",
				LargePostMedia: "_1Ap4F5maDtT1E1YuCiaO0r",
				largePostMedia: "_1Ap4F5maDtT1E1YuCiaO0r",
				isCommentsPage: "D3IL3FD0RFy_mkKLPwL4",
				ClassicThumbnail: "_2yiWJ30hPmljAALgG9InUz",
				classicThumbnail: "_2yiWJ30hPmljAALgG9InUz",
				ThumbLink: "_3SCgQPuxXigmV7fEOhNHCN",
				thumbLink: "_3SCgQPuxXigmV7fEOhNHCN"
			}
		},
		"./src/reddit/components/PostContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/lib/timeAgo/index.ts"),
				m = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				p = s("./src/reddit/models/User/index.ts"),
				u = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				h = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				b = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				g = s("./src/reddit/helpers/path/index.ts"),
				x = s("./src/reddit/helpers/trackers/lightbox.ts"),
				v = s("./src/reddit/helpers/trackers/post.ts"),
				f = s("./src/reddit/actions/post.ts"),
				C = s("./src/reddit/actions/tooltip.ts"),
				O = s("./node_modules/lodash/find.js"),
				E = s.n(O),
				y = s("./node_modules/react-motion/lib/react-motion.js");
			const j = {
					stiffness: 300,
					damping: 5,
					precision: .005
				},
				_ = "expando_content",
				w = {},
				P = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
						t = arguments.length > 1 ? arguments[1] : void 0;
					const s = E()(e, {
							key: _
						}),
						n = s && s.style ? s.style.opacity : 0;
					return t ? n >= 1 ? [{
						key: _,
						style: {
							opacity: 1
						}
					}] : n > 0 ? [{
						key: _,
						style: {
							opacity: Object(y.spring)(1, j)
						}
					}] : [{
						key: _,
						style: {
							opacity: .1
						}
					}] : n < .1 ? [] : [{
						key: _,
						style: {
							opacity: Object(y.spring)(0, j)
						}
					}]
				};
			class k extends o.a.Component {
				constructor(e) {
					super(e), this.onSizeChanged = () => (this.props.onSizeChanged && this.props.onSizeChanged(), w), this.state = {
						expanded: e.shouldExpand,
						renderTransitionMotion: e.shouldExpand
					}
				}
				componentWillReceiveProps(e) {
					e.shouldExpand && !this.state.renderTransitionMotion ? this.setState(() => ({
						renderTransitionMotion: !0
					}), () => {
						setTimeout(() => {
							this.setState({
								expanded: !0
							})
						})
					}) : e.shouldExpand !== this.state.expanded && this.setState({
						expanded: e.shouldExpand
					})
				}
				render() {
					const {
						renderTransitionMotion: e,
						expanded: t
					} = this.state;
					if (!e) return !1;
					const {
						className: s,
						content: n
					} = this.props;
					return o.a.createElement(y.TransitionMotion, {
						styles: e => P(e, t),
						didLeave: this.onSizeChanged,
						willEnter: this.onSizeChanged
					}, e => o.a.createElement("div", {
						className: s
					}, e.map(e => o.a.createElement("div", {
						key: e.key,
						style: e.style
					}, n))))
				}
			}
			var I = s("./src/reddit/models/Media/index.ts"),
				S = s("./src/reddit/models/Post/index.ts"),
				T = s("./src/reddit/models/Vote/index.ts"),
				N = s("./src/reddit/selectors/activeModalId.ts"),
				L = s("./src/reddit/selectors/experiments/categories.ts"),
				M = s("./src/reddit/selectors/moderatorPermissions.ts"),
				R = s("./src/reddit/selectors/postCreations.ts"),
				F = s("./src/reddit/selectors/posts.ts"),
				A = s("./src/reddit/selectors/user.ts"),
				B = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				D = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				W = s("./src/reddit/components/ExpandoButton/index.tsx"),
				H = s("./src/reddit/components/FlairWrapper/index.tsx"),
				V = s("./src/reddit/components/Flatlist/index.tsx"),
				U = s("./src/reddit/components/Governance/Proposal/async.ts"),
				G = s("./src/reddit/components/Governance/Proposal/NoProposalError/index.tsx"),
				K = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				z = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				J = s("./src/reddit/components/ModModeReports/index.tsx"),
				q = s("./src/reddit/components/ModModeReports/helpers.ts"),
				Y = s("./src/reddit/components/PostContainer/index.tsx"),
				X = s("./src/higherOrderComponents/makeAsync.tsx"),
				Q = s("./src/lib/loadWithRetries/index.ts"),
				Z = s("./src/reddit/components/RichTextEditor/Placeholder.tsx");
			const $ = Object(X.a)({
				ErrorComponent: () => o.a.createElement(Z.a, {
					isLoading: !1,
					toolbarPosition: "top"
				}),
				getComponent: () => Object(Q.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("vendors~PostCreation~RichTextEditor"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/PostEditForm/index.tsx")).then(e => e.default)),
				LoadingComponent: () => o.a.createElement(Z.a, {
					isLoading: !0,
					toolbarPosition: "top"
				})
			});
			var ee = e => o.a.createElement($, e),
				te = s("./src/reddit/components/PostMedia/index.tsx"),
				se = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				ne = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				oe = s("./src/reddit/components/PostTitle/index.tsx"),
				re = s("./src/reddit/components/PostTopLine/index.tsx"),
				ae = s("./src/reddit/components/PostTopMeta/index.tsx"),
				ie = s("./src/reddit/components/SourceLink/index.tsx"),
				ce = s("./src/reddit/constants/componentTestIds.ts"),
				de = s("./src/reddit/constants/postLayout.ts"),
				le = s("./src/reddit/contexts/PageLayer/index.tsx"),
				me = s("./src/reddit/helpers/postEvent.ts"),
				pe = s("./src/reddit/selectors/experiments/publicAwarding.ts"),
				ue = s("./src/reddit/selectors/postFlair.ts"),
				he = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				be = s("./src/reddit/constants/colors.ts"),
				ge = s("./src/config.ts"),
				xe = s("./src/reddit/icons/svgs/Clear/index.tsx"),
				ve = e => o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("g", null, o.a.createElement("path", {
					d: "M13.0303,11.4697 C13.3233,11.7627 13.3233,12.2377 13.0303,12.5307 C12.8843,12.6767 12.6923,12.7497 12.5003,12.7497 C12.3083,12.7497 12.1163,12.6767 11.9693,12.5307 L10.0003,10.5607 L8.0303,12.5307 C7.8843,12.6767 7.6923,12.7497 7.5003,12.7497 C7.3083,12.7497 7.1163,12.6767 6.9693,12.5307 C6.6763,12.2377 6.6763,11.7627 6.9693,11.4697 L8.9393,9.4997 L6.9693,7.5307 C6.6763,7.2377 6.6763,6.7627 6.9693,6.4697 C7.2623,6.1767 7.7373,6.1767 8.0303,6.4697 L10.0003,8.4397 L11.9693,6.4697 C12.2623,6.1767 12.7373,6.1767 13.0303,6.4697 C13.3233,6.7627 13.3233,7.2377 13.0303,7.5307 L11.0603,9.4997 L13.0303,11.4697 Z M17.2753,3.0377 L10.2753,1.0377 C10.0953,0.9877 9.9053,0.9877 9.7253,1.0377 L2.7253,3.0377 C2.2963,3.1607 2.0003,3.5537 2.0003,3.9997 L2.0003,10.9997 C2.0003,16.6887 9.4093,18.8707 9.7253,18.9617 C9.8153,18.9877 9.9073,18.9997 10.0003,18.9997 C10.0923,18.9997 10.1853,18.9877 10.2753,18.9617 C10.5903,18.8707 18.0003,16.6887 18.0003,10.9997 L18.0003,3.9997 C18.0003,3.5537 17.7043,3.1607 17.2753,3.0377 L17.2753,3.0377 Z",
					id: "path-1"
				}))),
				fe = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				Ce = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				Oe = s.n(Ce);
			const {
				fbt: Ee
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ye = () => Ee._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy}.", [Ee._param("=User Agreement", o.a.createElement("a", {
				className: Oe.a.link,
				href: "https://www.redditinc.com/policies/user-agreement\\"
			}, Ee._("User Agreement", null, {
				hk: "2cojEr"
			}))), Ee._param("=Content Policy", o.a.createElement("a", {
				className: Oe.a.link,
				href: "https://www.redditinc.com/policies/content-policy\\"
			}, Ee._("Content Policy", null, {
				hk: "1owvRc"
			})))], {
				hk: "3LJ7At"
			}), je = () => Ee._("This content was removed for a violation of Reddit's {=Content Policy}.", [Ee._param("=Content Policy", o.a.createElement("a", {
				className: Oe.a.link,
				href: "https://www.redditinc.com/policies/content-policy\\"
			}, Ee._("Content Policy", null, {
				hk: "1fd4W1"
			})))], {
				hk: "3KOOQU"
			});
			var _e = e => {
					const {
						hasPerms: t,
						removedBy: s,
						removedByCategory: n,
						subredditName: r
					} = e, a = t ? ((e, t, s) => {
						switch (e) {
							case S.g.AntiEvilOps:
								return Ee._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
									hk: "3a8CyR"
								});
							case S.g.Author:
								return Ee._("This post was removed by the person who originally posted it.", null, {
									hk: "2lyUgL"
								});
							case S.g.AuthorDeleted:
								return Ee._("This post was deleted by the person who originally posted it.", null, {
									hk: "16LeiH"
								});
							case S.g.AutomodFiltered:
								return Ee._("This post was reported by automod, and is waiting for your review.", null, {
									hk: "2E46dR"
								});
							case S.g.CommunityOps:
								return Ee._("This post was removed by Reddit admin, u/{username}.", [Ee._param("username", t)], {
									hk: "34nHWu"
								});
							case S.g.ContentTakedown:
								return Ee._("This post was removed by Reddit's Legal Operations team.", null, {
									hk: "1wmhiC"
								});
							case S.g.CopyrightTakedown:
								return Ee._("This post was removed by Reddit's Legal Operations team.", null, {
									hk: "Ukfj"
								});
							case S.g.Moderator:
								return Ee._("This post was removed by r/{subredditName} moderator, u/{username}.", [Ee._param("subredditName", s), Ee._param("username", t)], {
									hk: "270bcn"
								});
							case S.g.Reddit:
								return Ee._("This post was removed by Reddit's spam filters.", null, {
									hk: "1k3lsh"
								});
							default:
								return Ee._("This post was removed by Reddit's spam filters.", null, {
									hk: "3oxS8r"
								})
						}
					})(n, s, r) : ((e, t) => {
						switch (e) {
							case S.g.AntiEvilOps:
								return Ee._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
									hk: "2ZqyRT"
								});
							case S.g.Author:
								return Ee._("Sorry, this post was removed by the person who originally posted it.", null, {
									hk: "4IRCN"
								});
							case S.g.AuthorDeleted:
								return Ee._("Sorry, this post was deleted by the person who originally posted it.", null, {
									hk: "4emmIp"
								});
							case S.g.AutomodFiltered:
								return Ee._("Post is awaiting moderator approval.", null, {
									hk: "wdGOr"
								});
							case S.g.CommunityOps:
								return Ee._("Sorry, this post was removed by Reddit's Community team.", null, {
									hk: "3fs5lF"
								});
							case S.g.ContentTakedown:
								return Ee._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
									hk: "jiKO8"
								});
							case S.g.CopyrightTakedown:
								return Ee._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
									hk: "1TbEDT"
								});
							case S.g.Moderator:
								return Ee._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [Ee._param("subredditName", t)], {
									hk: "12NWKq"
								});
							case S.g.Reddit:
								return Ee._("Sorry, this post was removed by Reddit's spam filters.", null, {
									hk: "10ItEu"
								});
							default:
								return Ee._("Sorry, this post has been removed", null, {
									hk: "11sG9V"
								})
						}
					})(n, r), i = t ? (e => {
						switch (e) {
							case S.g.AntiEvilOps:
								return o.a.createElement(ye, null);
							case S.g.AuthorDeleted:
							case S.g.Author:
								return Ee._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
									hk: "2KZLgT"
								});
							case S.g.AutomodFiltered:
								return Ee._("It won’t show up in your community feed until you or another moderator approve it.", null, {
									hk: "2X5ECb"
								});
							case S.g.CommunityOps:
								return Ee._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask}.", [Ee._param("=just ask", o.a.createElement("a", {
									className: Oe.a.link,
									href: "".concat(ge.a.redditUrl, "/message/compose/?to=r/reddit.com"),
									target: "_blank"
								}, Ee._("just ask", null, {
									hk: "2tChW8"
								})))], {
									hk: "1gNycd"
								});
							case S.g.ContentTakedown:
								return o.a.createElement(je, null);
							case S.g.CopyrightTakedown:
								return Ee._("This content was removed in response to a copyright claim by a third party.", null, {
									hk: "7jiV"
								});
							case S.g.Moderator:
								return Ee._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
									hk: "22qJOB"
								});
							case S.g.Reddit:
								return Ee._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
									hk: "3S3oDL"
								});
							default:
								return Ee._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
									hk: "uKfHK"
								})
						}
					})(n) : ((e, t) => {
						switch (e) {
							case S.g.AntiEvilOps:
								return o.a.createElement(ye, null);
							case S.g.AuthorDeleted:
							case S.g.Author:
								return Ee._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
									hk: "2OBDBc"
								});
							case S.g.AutomodFiltered:
								return Ee._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [Ee._param("=[subreddit name]", o.a.createElement("a", {
									className: Oe.a.link,
									href: "".concat(ge.a.redditUrl, "/r/").concat(t),
									target: "_blank"
								}, Ee._("{subreddit name}", [Ee._param("subreddit name", "r/".concat(t))], {
									hk: "2o22vl"
								})))], {
									hk: "3dxuEW"
								});
							case S.g.CommunityOps:
								return Ee._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
									hk: "uPiHS"
								});
							case S.g.ContentTakedown:
								return o.a.createElement(je, null);
							case S.g.CopyrightTakedown:
								return Ee._("This content was removed in response to a copyright claim by a third party.", null, {
									hk: "2e8fhi"
								});
							case S.g.Moderator:
								return Ee._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
									hk: "QXZPk"
								});
							case S.g.Reddit:
							default:
								return Ee._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
									hk: "3vUmEz"
								})
						}
					})(n, r), c = t ? be.a.warning : be.a.dayModeActionIcon, d = (e => {
						let t;
						switch (e) {
							case S.g.AntiEvilOps:
							case S.g.AutomodFiltered:
							case S.g.CommunityOps:
							case S.g.ContentTakedown:
							case S.g.CopyrightTakedown:
							case S.g.Reddit:
								t = xe.a;
								break;
							case S.g.AuthorDeleted:
							case S.g.Author:
								t = fe.b;
								break;
							case S.g.Moderator:
								t = ve;
								break;
							default:
								t = xe.a
						}
						return o.a.createElement(t, {
							className: Oe.a.icon
						})
					})(n);
					return o.a.createElement(he.a, {
						className: Oe.a.BannerBase,
						color: c,
						icon: d,
						subtitle: i,
						title: a
					})
				},
				we = e => {
					const {
						isAdminOrMod: t,
						post: s,
						subredditOrProfile: n
					} = e;
					return o.a.createElement(o.a.Fragment, null, n && s.removedByCategory && o.a.createElement(_e, {
						hasPerms: t,
						removedBy: s.removedBy,
						removedByCategory: s.removedByCategory,
						subredditName: n.name
					}))
				},
				Pe = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/fbt/lib/FbtPublic.js")),
				ke = s("./src/lib/prettyPrintNumber/index.ts"),
				Ie = s("./src/reddit/components/PostContent/viewCount.m.less"),
				Se = s.n(Ie);
			var Te = e => {
					let {
						post: t,
						showViewCount: s
					} = e;
					const {
						upvotePercentString: n,
						viewCountString: r
					} = (e => {
						const t = e.upvoteRatio ? Math.round(100 * e.upvoteRatio).toString() : "",
							s = Object(ke.b)(e.viewCount);
						return {
							upvotePercentString: Pe.fbt._("{percent upvoted}% Upvoted", [Pe.fbt._param("percent upvoted", t)], {
								hk: "432tjJ"
							}),
							viewCountString: Pe.fbt._({
								"*": "{number of views} Views",
								_1: "1 View"
							}, [Pe.fbt._plural(e.viewCount, "number of views", s)], {
								hk: "rP01m"
							})
						}
					})(t), a = s && !!t.viewCount;
					return o.a.createElement("div", {
						className: Se.a.viewCounts
					}, a && o.a.createElement("span", null, r), a && !!t.upvoteRatio && o.a.createElement("span", {
						className: Se.a.dotSpacer
					}), !!t.upvoteRatio && o.a.createElement("span", null, n))
				},
				Ne = s("./src/reddit/components/PostContent/index.m.less"),
				Le = s.n(Ne);
			const Me = d.a.wrapped(oe.c, "PostTitle", Le.a),
				Re = d.a.wrapped(W.a, "ExpandoButton", Le.a),
				Fe = d.a.wrapped(k, "ClassicExpandoMotion", Le.a),
				Ae = d.a.wrapped(V.c, "FullWidthFlatlist", Le.a),
				Be = d.a.wrapped(B.a, "ClassicThumbnail", Le.a),
				De = Object(le.t)({
					isCommentsPage: le.w,
					pageLayer: e => e
				}),
				We = Object(r.b)(() => Object(i.c)({
					activeModalId: N.a,
					flairStyleTemplate: le.P,
					currentUser: A.i,
					crosspost: F.c,
					hideNSFWPref: A.y,
					isAdminOrMod: (e, t) => {
						const s = Object(F.Y)(e, {
							postId: t.postId
						});
						return !!s && Object(M.g)(e, {
							subredditId: s.id
						})
					},
					isCurrentUserProfilePost: F.i,
					isExpanded: F.k,
					post: F.M,
					language: A.O,
					metaId: (e, t) => e.posts.metaMap[t.postId],
					moderatorPermissions: M.i,
					publicAwardersEnabled: e => !!Object(pe.a)(e),
					modModeEnabled: le.N,
					isInCategoriesExperiment: L.a,
					showEditFlair: ue.a,
					subredditOrProfile: F.Y,
					isEditing: R.C,
					userIsOp: A.eb
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						onIgnoreReports: () => e(Object(f.V)(s)),
						onOpenReportsDropdown: t => e(Object(C.h)({
							tooltipId: t
						})),
						onVoteClick: t => {
							const n = t === T.a.upvoted ? Object(f.X)(s) : Object(f.u)(s);
							e(n)
						}
					}
				}),
				He = d.a.wrapped(a.a, "ThumbLink", Le.a),
				Ve = e => {
					let {
						post: t,
						templatePlaceholderImage: s
					} = e;
					return t.source ? o.a.createElement(Be, {
						post: t,
						forceShowNSFW: !0,
						templatePlaceholderImage: s
					}) : o.a.createElement(He, {
						to: Object(g.b)(t.permalink)
					}, o.a.createElement(Be, {
						post: t,
						forceShowNSFW: !0
					}))
				},
				Ue = (e, t, s) => o.a.createElement(Fe, {
					content: o.a.createElement(te.a, {
						className: Le.a.ClassicPostMedia,
						isListing: !1,
						isNotCardView: !0,
						post: e,
						shouldLoad: !0,
						showFull: !0,
						showCentered: !0,
						scrollerItemRef: s
					}),
					shouldExpand: !!t
				});
			t.a = De(We(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: n,
					flairStyleTemplate: r,
					hideNSFWPref: a,
					isAdminOrMod: i,
					isCommentsPage: d,
					isCurrentUserProfilePost: g,
					isEditing: f,
					isExpanded: C,
					isOverlay: O,
					language: E,
					metaId: y,
					moderatorPermissions: j,
					modModeEnabled: _,
					onIgnoreReports: w,
					onOpenReportsDropdown: P,
					onVoteClick: k,
					post: T,
					publicAwardersEnabled: N,
					scrollerItemRef: L,
					sendEvent: M,
					showEditFlair: R,
					subredditOrProfile: F,
					userIsOp: A
				} = e, B = Object(b.a)(j), W = Object(u.a)(j), X = Object(h.a)(j), Q = B || W, Z = ((e, t, s) => {
					const [n, o] = e ? [Object(p.f)(e) === s.author, e.isEmployee] : [!1, !1];
					return n || t || o
				})(n, Q, T), $ = !!T.media && (T.media.type === I.n.RTJSON || T.media.type === I.n.TEXT), le = A && $, pe = Object(q.c)(T);
				let ue;
				const he = !(_ && b.a),
					be = Object(se.h)({
						hide: he,
						editPost: he,
						save: he,
						report: he
					}),
					ge = T.removedByCategory === S.g.AuthorDeleted,
					xe = n && (n.displayText === T.author || n.username === T.author),
					ve = !ge && (xe || i || !(T.removedByCategory && T.media && (Object(I.E)(T.media) || Object(I.D)(T.media)))),
					fe = T.removedByCategory === S.g.Reddit && Object(l.e)(T.created) > 24,
					Ce = T.removedByCategory && T.removedByCategory !== S.g.Reddit || fe,
					Oe = o.a.createElement(Me, {
						post: T,
						size: oe.b.ExtraLarge,
						showCategoryTag: O,
						isOverlay: O,
						disableVisited: !0,
						isCommentsPage: !0
					}),
					Ee = o.a.createElement(Te, {
						post: T,
						showViewCount: Z
					}),
					ye = (e => {
						const {
							crosspost: t,
							isCommentPermalink: s,
							post: n
						} = e;
						return s ? de.g.Classic : t ? de.g.Large : n.media ? de.g.Large : de.g.Medium
					})(e);
				if (ye === de.g.Classic) ue = o.a.createElement("div", {
					"data-test-id": ce.e
				}, o.a.createElement(ne.a, {
					model: T,
					handleVote: k
				}), o.a.createElement("div", {
					className: Le.a.mainBody
				}, o.a.createElement("div", {
					className: Le.a.content
				}, o.a.createElement(re.a, {
					hideNSFWPref: a,
					inSubredditOrProfile: !0,
					isCommentsPage: d,
					isCurrentUserProfilePost: g,
					isOverlay: !!O,
					isTopicPage: !1,
					language: E,
					post: T,
					publicAwardersEnabled: N,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!O && !T.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: F
				}), Oe, o.a.createElement(H.a, {
					className: d ? Le.a.leftPadding : null,
					post: T,
					showCategoryTag: e.isInCategoriesExperiment && d,
					sendEvent: M
				}), _ && B && pe && o.a.createElement(J.a, {
					language: E,
					onIgnoreReports: w,
					reportable: T
				}), o.a.createElement(K.d, {
					postId: T.id
				}), o.a.createElement("div", {
					className: Le.a.FlatlistContainer
				}, o.a.createElement(Re, {
					crosspost: s || void 0,
					isExpanded: !!C,
					post: T,
					useMediaIcons: !1
				}), Ue(T, C, L), o.a.createElement(Ae, {
					currentUser: n,
					hasModFlairPerms: W,
					hasModFullPerms: X,
					hasModPostPerms: B,
					isOverlay: O,
					language: E,
					onIgnoreReports: w,
					onOpenReportsDropdown: P,
					modModeEnabled: _,
					post: T,
					showUpvotePercent: !0,
					showViewCount: Z,
					useFlatlistBreakpoints: be
				}))), Object(m.a)(T) && o.a.createElement(Ve, {
					post: T,
					templatePlaceholderImage: r && r.postPlaceholderImage
				})));
				else if (ye === de.g.Medium) {
					const t = Object(m.a)(T);
					ue = o.a.createElement("div", {
						"data-test-id": ce.e
					}, o.a.createElement(ne.a, {
						model: T,
						handleVote: k
					}), o.a.createElement("div", {
						className: Le.a.mainBody
					}, o.a.createElement("div", {
						className: Le.a.content
					}, o.a.createElement(re.a, {
						hideNSFWPref: a,
						inSubredditOrProfile: !0,
						isCommentsPage: d,
						isCurrentUserProfilePost: g,
						isOverlay: !!O,
						isTopicPage: !1,
						language: E,
						post: T,
						publicAwardersEnabled: N,
						shouldShowSubscribeButton: !1,
						showSubreddit: !!O && !T.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: F
					}), Oe, T.source && o.a.createElement(ie.a, {
						post: T,
						isCommentsPage: d
					}), o.a.createElement(H.a, {
						className: d ? Le.a.leftPadding : null,
						post: T,
						showCategoryTag: e.isInCategoriesExperiment && d,
						sendEvent: M
					}), F && Ce && o.a.createElement(we, {
						isAdminOrMod: i,
						post: T,
						subredditOrProfile: F
					}), _ && B && pe && o.a.createElement(J.a, {
						language: E,
						onIgnoreReports: w,
						reportable: T
					})), t && o.a.createElement(z.a, {
						post: T,
						forceShowNSFW: !0,
						hasModPostPerms: Q,
						isCommentsPage: d,
						isOverlay: !0,
						modModeEnabled: _,
						templatePlaceholderImage: r && r.postPlaceholderImage
					})), o.a.createElement(K.d, {
						postId: T.id
					}), o.a.createElement("div", {
						className: Le.a.controlsContainer
					}, o.a.createElement(V.c, {
						currentUser: n,
						hasModFlairPerms: W,
						hasModFullPerms: X,
						hasModPostPerms: B,
						isOverlay: O,
						language: E,
						modModeEnabled: _,
						onIgnoreReports: w,
						onOpenReportsDropdown: P,
						post: T,
						showEditPost: le,
						showEditFlair: R,
						tooltipType: O ? ae.c.Lightbox : void 0,
						useFlatlistBreakpoints: be
					}), Ee))
				} else ye === de.g.Large && (ue = o.a.createElement("div", {
					"data-test-id": ce.e
				}, o.a.createElement(ne.a, {
					model: T,
					handleVote: k
				}), o.a.createElement(re.a, {
					hideNSFWPref: a,
					inSubredditOrProfile: !0,
					isCommentsPage: d,
					isCurrentUserProfilePost: g,
					isOverlay: !!O,
					isTopicPage: !1,
					language: E,
					post: T,
					publicAwardersEnabled: N,
					shouldShowSubscribeButton: !1,
					showSubreddit: !!O && !T.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: F
				}), Oe, ((e, t, s, n) => e.source && !t && (s || n))(T, s, O, d) && o.a.createElement(ie.a, {
					post: T,
					isCommentsPage: d
				}), o.a.createElement(H.a, {
					className: d ? Le.a.leftPadding : null,
					post: T,
					showCategoryTag: e.isInCategoriesExperiment && d,
					sendEvent: M
				}), F && Ce && o.a.createElement(we, {
					isAdminOrMod: i,
					post: T,
					subredditOrProfile: F
				}), f ? o.a.createElement(ee, {
					post: T
				}) : ve && o.a.createElement(te.a, {
					className: Object(c.a)(Le.a.LargePostMedia, {
						[Le.a.isCommentsPage]: d
					}),
					isCommentsPage: !0,
					isListing: !1,
					isNotCardView: O,
					isOverlay: O,
					post: T,
					shouldLoad: !0,
					showFull: !0,
					shouldPause: !O,
					showCentered: !0,
					scrollerItemRef: L
				}), y && F ? o.a.createElement("div", {
					className: Object(c.a)(Le.a.ProposalContainer, {
						[Le.a.isEditing]: f
					})
				}, o.a.createElement(U.a, {
					pollId: y,
					subredditId: F.id
				})) : null, T.isMeta && !y && o.a.createElement(G.a, {
					className: Le.a.noProposal
				}), _ && B && pe && o.a.createElement(J.a, {
					language: E,
					onIgnoreReports: w,
					reportable: T
				}), o.a.createElement(K.d, {
					postId: T.id
				}), o.a.createElement("div", {
					className: Le.a.controlsContainer
				}, o.a.createElement(V.c, {
					currentUser: n,
					hasModFlairPerms: W,
					hasModFullPerms: X,
					hasModPostPerms: B,
					isOverlay: O,
					language: E,
					modModeEnabled: _,
					onIgnoreReports: w,
					onOpenReportsDropdown: P,
					post: T,
					showEditPost: le,
					showEditFlair: R,
					tooltipType: O ? ae.c.Lightbox : void 0,
					useFlatlistBreakpoints: be
				}), Ee)));
				return o.a.createElement(Y.a, {
					className: Object(c.a)(t, Le.a.postContainer, {
						[Le.a.hasEventMeta]: Object(me.a)(T)
					}),
					isOverlay: O,
					post: T,
					eventFactory: O ? x.b : v.f
				}, o.a.createElement(D.a, {
					post: T,
					language: E
				}), ue)
			}))
		},
		"./src/reddit/components/PostContent/viewCount.m.less": function(e, t, s) {
			e.exports = {
				dotSpacer: "_3g_cwSqBe5o5mAuhfMeGu5",
				viewCounts: "t4Hq30BDzTeJ85vREX7_M"
			}
		},
		"./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1IZotn_IQQ1fgtUjaFYbkd",
				onHoverActionText: "_1Zlk1VrZ8puYZy5lJOfz--",
				Container: "_1IZotn_IQQ1fgtUjaFYbkd",
				PostTitle: "_1hzDym_NpIlizkTDXc_rQj",
				postTitle: "_1hzDym_NpIlizkTDXc_rQj",
				MetaLine: "_67JuJTdFwIJPLPDkyPX-f",
				metaLine: "_67JuJTdFwIJPLPDkyPX-f",
				SubredditName: "_88OYON0K3w_tpnmCSWlUX",
				subredditName: "_88OYON0K3w_tpnmCSWlUX",
				InfoSpan: "_3DFfW-OG-MvCLiiEN18mpq",
				infoSpan: "_3DFfW-OG-MvCLiiEN18mpq"
			}
		},
		"./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_1QvpnsvD_e--dvDTEcz7_w",
				wrapper: "_1QvpnsvD_e--dvDTEcz7_w",
				TopRow: "vuQEtla32r0kemmh11Hov",
				topRow: "vuQEtla32r0kemmh11Hov",
				TitleRow: "_1eSyFPTFSsfyp8BVxs83PB",
				titleRow: "_1eSyFPTFSsfyp8BVxs83PB",
				DetailsContainer: "_87UrrqUro4oVpXFAElZUX",
				detailsContainer: "_87UrrqUro4oVpXFAElZUX",
				ButtonRow: "_1CUOht5hsM0AF9T3Ox1yos",
				buttonRow: "_1CUOht5hsM0AF9T3Ox1yos",
				CloseWrapper: "_3OsXrjEdHgK1wJBfPX6IhR",
				closeWrapper: "_3OsXrjEdHgK1wJBfPX6IhR",
				Close: "_1TaKYhB80ExuTPoLaQZMRE",
				close: "_1TaKYhB80ExuTPoLaQZMRE",
				Empty: "_20K7F6rAgXGH5z83v7Ifiv",
				empty: "_20K7F6rAgXGH5z83v7Ifiv",
				EmptyImage: "_2eLeResic3Gc77W_edgNGt",
				emptyImage: "_2eLeResic3Gc77W_edgNGt",
				EmptyText: "_3t6VBoBsR8CGQvaPLHPjmW",
				emptyText: "_3t6VBoBsR8CGQvaPLHPjmW",
				FilterWrapper: "pKfhphFBuya82DYP2Q90X",
				filterWrapper: "pKfhphFBuya82DYP2Q90X",
				FilterInput: "_3W5cary86KmYWrVgEpGKPb",
				filterInput: "_3W5cary86KmYWrVgEpGKPb",
				SearchIcon: "_9T_dguVcd795c_vOyl9s4",
				searchIcon: "_9T_dguVcd795c_vOyl9s4",
				PlusIcon: "hfmgzmXCLe3hvSyZad9WP",
				plusIcon: "hfmgzmXCLe3hvSyZad9WP",
				CreateCollectionButton: "_34_h0zRV3AgFr_0sh99pKz",
				createCollectionButton: "_34_h0zRV3AgFr_0sh99pKz"
			}
		},
		"./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/app/strings/index.ts"),
				o = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/asModal/index.tsx"),
				l = s("./src/lib/memoizeByReference/index.ts"),
				m = s("./src/reddit/actions/postCreation/general.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/keycodes.ts"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/controls/Input/index.tsx"),
				g = s("./src/reddit/icons/svgs/Close/index.tsx"),
				x = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				v = s("./src/reddit/icons/svgs/Search/index.tsx"),
				f = s("./src/reddit/layout/row/Inline/index.tsx"),
				C = s("./src/reddit/models/PostCreationForm/index.ts"),
				O = s("./src/reddit/selectors/postCollection.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				y = s("./src/lib/timeAgo/index.ts"),
				j = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				_ = s("./src/reddit/helpers/name/index.ts"),
				w = s("./src/reddit/models/Subreddit/index.ts"),
				P = s("./src/reddit/models/User/index.ts"),
				k = s("./src/reddit/selectors/subreddit.ts"),
				I = s("./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less"),
				S = s.n(I),
				T = s("./src/lib/lessComponent.tsx");
			const N = T.a.div("Container", S.a),
				L = T.a.h2("PostTitle", S.a),
				M = T.a.div("MetaLine", S.a),
				R = T.a.span("SubredditName", S.a),
				F = T.a.time("InfoSpan", S.a),
				A = Object(c.c)({
					subreddit: (e, t) => {
						let {
							collection: {
								subredditId: s
							}
						} = t;
						return s ? Object(k.P)(e, {
							subredditId: s
						}) : void 0
					},
					user: E.i
				});
			class B extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onClick = () => {
						this.props.onClick(this.props.collection.id)
					}
				}
				render() {
					const {
						collection: e,
						language: t,
						subreddit: s,
						user: o,
						onHoverActionText: r
					} = this.props, i = s && Object(w.e)(s) && o ? Object(_.c)(Object(P.f)(o)) : s ? s.displayText : "", c = e.postIds.length;
					return a.a.createElement(N, {
						onClick: this.onClick,
						className: S.a.container
					}, a.a.createElement(L, {
						"data-redditstyle": !0
					}, e.title), a.a.createElement(M, {
						"data-redditstyle": !0
					}, i && a.a.createElement(R, {
						"data-redditstyle": !0
					}, i), i && a.a.createElement(j.b, null), a.a.createElement(F, null, Object(n.b)(t, "postCreation.postsCount", c)), a.a.createElement(j.b, null), a.a.createElement(F, null, Object(n.a)(t, "postCreation.collections.creationTime", {
						time: Object(y.d)(t, e.createdAtUTC)
					}))), r && a.a.createElement("div", {
						className: S.a.onHoverActionText
					}, a.a.createElement("span", null, r)))
				}
			}
			var D = Object(i.b)(A)(B),
				W = s("./src/reddit/helpers/trackers/postCollection.ts"),
				H = s("./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less"),
				V = s.n(H);
			const U = Object(n.d)("postCreation.collections.collectionsListEmptyText"),
				G = Object(n.d)("postCreation.collections.noCollectionMatchingFilter"),
				K = Object(n.d)("postCreation.collections.filterPlaceholder"),
				z = Object(n.d)("postCreation.collections.collectionsListTitle"),
				J = Object(n.d)("postCreation.collections.createCollection"),
				q = "".concat(o.a.assetPath, "/img/snoo-drafts.png"),
				Y = T.a.div("TopRow", V.a),
				X = T.a.div("TitleRow", V.a),
				Q = T.a.div("DetailsContainer", V.a),
				Z = T.a.wrapped(f.a, "ButtonRow", V.a),
				$ = T.a.div("CloseWrapper", V.a),
				ee = T.a.wrapped(g.a, "Close", V.a),
				te = T.a.div("Empty", V.a),
				se = T.a.img("EmptyImage", V.a),
				ne = T.a.p("EmptyText", V.a),
				oe = T.a.div("FilterWrapper", V.a),
				re = T.a.wrapped(b.a, "FilterInput", V.a),
				ae = T.a.wrapped(v.a, "SearchIcon", V.a),
				ie = T.a.wrapped(x.a, "PlusIcon", V.a),
				ce = T.a.wrapped(h.j, "CreateCollectionButton", V.a),
				de = Object(l.a)((e, t) => {
					const s = t.toLowerCase();
					return e.filter(e => e.title.toLowerCase().includes(s))
				}),
				le = Object(c.c)({
					collections: O.v,
					language: E.O
				}),
				me = Object(i.b)(le, (e, t) => {
					let {
						postId: s,
						isOverlay: n
					} = t;
					return {
						onOpenCreateCollectionModal: () => {
							let t = C.b;
							s && (t = Object(C.u)(s, !!n)), e(Object(m.y)(t))
						}
					}
				});
			class pe extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						filterStr: ""
					}, this.close = () => {
						this.props.sendEvent(Object(W.c)()), this.props.onClose()
					}, this.handleEscapeKey = e => {
						e.keyCode === u.a.Escape && this.close()
					}, this.handleCreateCollectionClicked = () => {
						this.props.onOpenCreateCollectionModal(), this.props.sendEvent(Object(W.j)())
					}, this.handleCollectionSelected = e => {
						this.props.onSelectCollection(e), this.props.sendEvent(Object(W.q)())
					}, this.onFilterStringChange = e => {
						this.setState({
							filterStr: e.target.value
						})
					}, this.renderItem = e => a.a.createElement(D, {
						key: e.id,
						collection: e,
						language: this.props.language,
						onClick: () => this.handleCollectionSelected(e),
						onHoverActionText: this.props.onItemHoverActionText
					})
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey), this.props.sendEvent(Object(W.d)())
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				renderNoCollections() {
					return a.a.createElement(te, null, a.a.createElement(se, {
						src: q
					}), a.a.createElement(ne, null, U(this.props.language)))
				}
				renderNoFilterMatches() {
					return a.a.createElement(te, null, a.a.createElement(ne, null, G(this.props.language)))
				}
				render() {
					const {
						collections: e,
						language: t,
						titleText: s
					} = this.props;
					let n;
					if (0 === e.length) n = this.renderNoCollections();
					else {
						const t = de(e, this.state.filterStr);
						n = 0 === t.length ? this.renderNoFilterMatches() : t.map(this.renderItem)
					}
					return a.a.createElement("div", {
						className: V.a.wrapper,
						"data-redditstyle": !0
					}, a.a.createElement(Y, null, a.a.createElement(X, {
						"data-redditstyle": !0
					}, s || z(t), a.a.createElement($, {
						onClick: this.close
					}, a.a.createElement(ee, {
						"data-redditstyle": !0
					}))), a.a.createElement(oe, null, a.a.createElement(ae, null), a.a.createElement(re, {
						placeholder: K(t),
						value: this.state.filterStr,
						onChange: this.onFilterStringChange
					}))), a.a.createElement(Q, null, n), a.a.createElement(Z, null, a.a.createElement(ce, {
						onClick: this.handleCreateCollectionClicked
					}, a.a.createElement(ie, null), J(t))))
				}
			}
			const ue = Object(d.a)(me(Object(p.b)(pe)));
			t.a = ue
		},
		"./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_3vV_tKesULQ5WMGh38lX4b",
				container: "_3vV_tKesULQ5WMGh38lX4b",
				Content: "_11JSvybbRhcX_cfoagpne_",
				content: "_11JSvybbRhcX_cfoagpne_",
				TitleRow: "_3Ev4JRxdS9-3GTBR5M1yCP",
				titleRow: "_3Ev4JRxdS9-3GTBR5M1yCP",
				Details: "_3Uw02TWwSQhLfCJkPsihqr",
				details: "_3Uw02TWwSQhLfCJkPsihqr",
				Footer: "_25MDqXgOCWDBjtAEBi2cmy",
				footer: "_25MDqXgOCWDBjtAEBi2cmy",
				CancelButton: "_2tLOIj2nClBaVRuMBIJE8X",
				cancelButton: "_2tLOIj2nClBaVRuMBIJE8X",
				CloseWrapper: "_GVnqGyX40oKfgIS56Q-k",
				closeWrapper: "_GVnqGyX40oKfgIS56Q-k",
				CloseIcon: "_1GgoANMMbLQJ-gSefDJZuZ",
				closeIcon: "_1GgoANMMbLQJ-gSefDJZuZ",
				Label: "_3QPFKpxsmu6j_gbiAuVgfW",
				label: "_3QPFKpxsmu6j_gbiAuVgfW",
				TitleInput: "ZEfw7a99aHsmkl4fx38l5",
				titleInput: "ZEfw7a99aHsmkl4fx38l5",
				AddCollectionIcon: "_30BNMMyQPTPvHEoL3-LXrM",
				addCollectionIcon: "_30BNMMyQPTPvHEoL3-LXrM",
				PrimaryActionButton: "_22f_S1XUre_FujBgOgEHJe",
				primaryActionButton: "_22f_S1XUre_FujBgOgEHJe",
				LoadingIcon: "_3cD2qECfUUTwega16qDhBc",
				loadingIcon: "_3cD2qECfUUTwega16qDhBc",
				ErrorText: "GIQ2YnBHQtY1QM1yPEhCR",
				errorText: "GIQ2YnBHQtY1QM1yPEhCR"
			}
		},
		"./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				c = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/lib/formatApiError/index.ts"),
				l = s("./src/reddit/actions/postCollection/index.ts"),
				m = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				p = s("./src/reddit/constants/postCreation.ts"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/controls/ErrorText/index.tsx"),
				b = s("./src/reddit/controls/Input/index.tsx"),
				g = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				x = s("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				v = s("./src/reddit/icons/svgs/Close/index.tsx"),
				f = s("./src/reddit/layout/row/Inline/index.tsx"),
				C = s("./src/reddit/selectors/postCollection.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less"),
				y = s.n(E),
				j = s("./src/lib/lessComponent.tsx");
			const _ = Object(i.d)("postCreation.cancel"),
				w = Object(i.d)("postCreation.create"),
				P = Object(i.d)("postCreation.save"),
				k = Object(i.d)("postCreation.collections.createCollection"),
				I = Object(i.d)("postCreation.collections.createModal.details"),
				S = Object(i.d)("postCreation.collections.createModal.giveATitle"),
				T = Object(i.d)("postCreation.collections.createModal.editTitle"),
				N = Object(i.d)("postCreation.collections.createModal.titlePlaceholderText"),
				L = j.a.div("Container", y.a),
				M = j.a.div("Content", y.a),
				R = j.a.div("TitleRow", y.a),
				F = j.a.div("Details", y.a),
				A = j.a.wrapped(m.e, "Footer", y.a),
				B = j.a.wrapped(u.i, "CancelButton", y.a),
				D = j.a.div("CloseWrapper", y.a),
				W = j.a.wrapped(v.a, "CloseIcon", y.a),
				H = j.a.label("Label", y.a),
				V = j.a.wrapped(b.a, "TitleInput", y.a),
				U = j.a.wrapped(x.a, "AddCollectionIcon", y.a),
				G = j.a.wrapped(u.f, "PrimaryActionButton", y.a),
				K = j.a.wrapped(g.a, "LoadingIcon", y.a),
				z = j.a.wrapped(h.b, "ErrorText", y.a),
				J = Object(a.c)({
					collection: C.q,
					error: C.c,
					isPending: C.g,
					language: O.O
				}),
				q = Object(r.b)(J, (e, t) => ({
					onCreate: (t, s) => e(Object(l.b)(t, s)),
					onUpdate: s => e(Object(l.h)(t.collectionId, s))
				}));
			class Y extends o.a.PureComponent {
				constructor(e) {
					super(e), this.onTitleChange = e => {
						this.setState({
							collectionTitle: e.target.value
						})
					}, this.onPrimaryButtonClick = async () => {
						const {
							collectionId: e,
							subredditId: t
						} = this.props, {
							collectionTitle: s
						} = this.state;
						if (e) {
							await this.props.onUpdate(s) && this.props.onCollectionUpdated && this.props.onCollectionUpdated()
						} else {
							const e = await this.props.onCreate(s, t);
							e && this.props.onCollectionCreated && this.props.onCollectionCreated(e)
						}
					}, this.onClose = () => {
						this.props.onCancel()
					};
					const {
						collection: t
					} = e;
					this.state = {
						collectionTitle: t ? t.title : ""
					}
				}
				render() {
					const {
						collectionId: e,
						error: t,
						isPending: s,
						language: n
					} = this.props, r = !e, a = !!this.state.collectionTitle.trim(), i = r ? w : P, c = r ? S : T;
					return o.a.createElement(L, null, o.a.createElement(D, {
						onClick: this.props.onCancel
					}, o.a.createElement(W, null)), o.a.createElement(M, null, r && o.a.createElement(o.a.Fragment, null, o.a.createElement(R, null, o.a.createElement(U, null), k(n)), o.a.createElement(F, null, I(n))), o.a.createElement(H, null, c(n), o.a.createElement(V, {
						maxLength: p.e,
						onChange: this.onTitleChange,
						placeholder: N(n),
						value: this.state.collectionTitle
					}))), o.a.createElement(A, null, o.a.createElement(f.a, null, o.a.createElement(B, {
						onClick: this.props.onCancel
					}, _(n)), o.a.createElement(G, {
						onClick: this.onPrimaryButtonClick,
						disabled: s || !a
					}, s ? o.a.createElement(K, {
						sizePx: 10
					}) : i(n))), t && o.a.createElement(z, {
						language: n
					}, Object(d.a)(n, t))))
				}
			}
			t.a = Object(c.a)(q(Y))
		},
		"./src/reddit/components/PostFlairPicker/index.m.less": function(e, t, s) {
			e.exports = {
				buttonsRow: "cF9DU_4WDAKS4gs43ct2_",
				clearButton: "_3vB6Y9PiwJ0YV6c9MGbDwT"
			}
		},
		"./src/reddit/components/PostFlairPicker/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return _
			}));
			var n, o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/higherOrderComponents/asModal/index.tsx"),
				l = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/components/FlairPickerTitle/index.tsx"),
				p = s("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				u = s("./src/reddit/components/FlairPreview/index.tsx"),
				h = s("./src/reddit/components/FlairSearch/index.tsx"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/i18n/utils.ts"),
				x = s("./src/reddit/models/Flair/index.ts"),
				v = s("./src/reddit/selectors/moderatorPermissions.ts"),
				f = s("./src/reddit/selectors/postFlair.ts"),
				C = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/selectors/telemetry.ts"),
				E = s("./src/reddit/components/PostFlairPicker/helpers.ts"),
				y = s("./src/reddit/components/PostFlairPicker/index.m.less"),
				j = s.n(y);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(n || (n = {}));
			const _ = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.UNSET;
					return "PostFlair__Modal-[postId: ".concat(e, "]-isOverlay[").concat(t, "]-position[").concat(s, "]")
				},
				w = Object(i.c)({
					flairData: f.d,
					subreddit: C.P,
					isMod: (e, t) => !!Object(v.j)(e, t)
				});
			class P extends r.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.onApply = () => {
						const {
							previewFlair: e
						} = this.state, t = e && e.templateId;
						this.props.onFlairChanged({
							previewFlair: e,
							selectedTemplateId: t
						}), this.props.closeModal && this.props.closeModal(), this.track(this.getTrackingNoun("flairadd_mod", "flairadd_user"))
					}, this.onClear = () => this.setSelectedFlair(null), this.setSelectedFlair = e => {
						this.setState({
							previewFlair: e
						})
					}, this.track = e => this.props.sendEvent(t => ({
						source: "post_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(O.subredditById)(t, this.props.subredditId)
					}));
					const t = Object(E.c)(e.flairs);
					this.state = {
						previewFlair: t || null
					}
				}
				canSave() {
					const {
						templates: e
					} = this.props.flairData, {
						previewFlair: t
					} = this.state, s = Object(E.c)(this.props.flairs) || null;
					return Object(E.b)(e, t, s)
				}
				render() {
					const {
						props: e
					} = this, {
						previewFlair: t
					} = this.state, {
						className: s,
						flairData: n,
						subreddit: o
					} = e, a = o.displayText, {
						templates: i,
						templateIds: c
					} = n, {
						canSave: d
					} = this.canSave();
					return r.a.createElement(p.a, {
						className: s
					}, r.a.createElement(m.a, {
						onClosePressed: e.closeModal,
						title: Object(g.c)("Select ".concat(Object(g.b)("subredditName", a), " flair"))
					}), r.a.createElement(u.a, {
						flair: t,
						flairTemplateType: x.d.LinkFlair,
						placeholderText: Object(g.c)("Post Title")
					}), r.a.createElement(h.a, {
						flair: t,
						flairTemplateType: x.d.LinkFlair,
						subredditId: o.id,
						templates: i,
						templateIds: c,
						onChange: this.setSelectedFlair
					}), r.a.createElement("div", {
						className: j.a.buttonsRow
					}, r.a.createElement(b.f, {
						disabled: !d,
						onClick: this.onApply
					}, Object(g.c)("Apply")), r.a.createElement(b.i, {
						className: j.a.clearButton,
						onClick: this.onClear
					}, Object(g.c)("Clear Flair"))))
				}
			}
			const k = Object(a.b)(w, (e, t) => ({
				closeModal: () => e(Object(l.i)(t.modalId))
			}))(P);
			t.a = Object(d.a)(Object(c.b)(k))
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
				return b
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Translated/index.tsx"),
				m = s("./src/reddit/helpers/trackers/postCollection.ts"),
				p = s("./src/reddit/components/PostFollow/index.m.less"),
				u = s.n(p);
			class h extends o.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: n
							},
							sendEvent: o
						} = this.props, r = !!n;
						o(e ? Object(m.o)({
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
					} = this.props, n = this.state.isHovered, r = s.isFollowed;
					let a = r ? "collection.follow.followed" : "collection.follow.follow";
					return r && n && (a = "collection.follow.unfollow"), o.a.createElement("button", {
						className: Object(i.a)(u.a.collectionFollow, {
							[u.a.isFollowed]: !!s.isFollowed,
							[u.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, o.a.createElement(l.a, {
						msgId: a
					}))
				}
			}
			const b = Object(r.b)(() => Object(a.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(c.B)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(d.b)(h))
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return z
			})), s.d(t, "a", (function() {
				return q
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/history/esm/history.js"),
				o = s("./node_modules/lodash/debounce.js"),
				r = s.n(o),
				a = s("./node_modules/lodash/last.js"),
				i = s.n(a),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./node_modules/react-dom/index.js"),
				m = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/fastdom/index.ts"),
				b = s("./src/lib/lessComponent.tsx"),
				g = s("./src/lib/opener/index.ts"),
				x = s("./src/lib/sentry/index.ts"),
				v = s("./src/reddit/components/PostList/LoadMore.tsx"),
				f = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				C = s("./src/reddit/components/Scroller/Simple.tsx"),
				O = s("./src/reddit/components/Translated/index.tsx"),
				E = s("./src/reddit/constants/adEvents.ts"),
				y = s("./src/reddit/constants/componentSizes.ts"),
				j = s("./src/reddit/constants/postLayout.ts"),
				_ = s("./src/reddit/controls/InternalLink/index.tsx"),
				w = s("./src/reddit/helpers/getClickInfo.ts"),
				P = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				k = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				I = s("./src/reddit/models/Media/index.ts"),
				S = s("./src/reddit/helpers/brandSafety/index.ts"),
				T = s("./src/lib/LRUCache/index.ts"),
				N = s("./src/telemetry/index.ts"),
				L = s("./src/telemetry/models/Timer.ts"),
				M = s("./src/reddit/components/PostList/index.m.less"),
				R = s.n(M),
				F = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const A = 500,
				B = new T.a(A),
				D = new T.a(A),
				W = new T.a(A),
				H = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				V = b.a.div("SeeMore", R.a),
				U = b.a.wrapped(k.a, "ArrowRight", R.a),
				G = (e, t, s, n, o, r, a, i) => {
					const c = s ? "last-".concat(n, "-").concat(o) : "",
						d = "entered-".concat(e, "-").concat(t, "-").concat(c, "-").concat(r);
					let l = B.get(d);
					return void 0 === l && (l = () => {
						s && a.onBottomViewed(n, o), a.trackOnPostEnteredViewport(e, t, i)
					}, B.set(d, l)), l
				},
				K = (e, t, s, n) => {
					const o = "left-".concat(e, "-").concat(t);
					let r = D.get(o);
					return void 0 === r && (r = o => {
						s.trackOnPostExitedViewport(e, t, o, n)
					}, D.set(o, r)), r
				},
				z = (e, t) => {
					const s = "click-".concat(e);
					let n = W.get(s);
					return void 0 === n && (n = (e, s) => {
						s.isSponsored && t.fireAdPixelsOfType(s, E.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(g.d)(s.source.outboundUrl, g.c.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(w.a)(e)
						})
					}, W.set(s, n)), n
				},
				J = (e, t) => {
					const s = [...e];
					return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
						s.splice(e, 0, t[e])
					}), s
				};
			class q extends d.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new T.a(A), this.updateScrollerRef = e => {
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
							subredditsById: n
						} = this.props, o = t(), r = [];
						o.forEach(e => r.push(e.id));
						const a = r.map(e => s[e]).filter(Boolean),
							i = a.map(e => n[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(S.a)(a, i))
					}, u.d, {
						leading: !0
					})
				}
				componentWillMount() {
					this.timerId && N.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = N.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = N.c.end(this.timerId);
						setTimeout(() => Object(N.b)(u.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				componentWillUpdate(e) {
					this.timerId && N.c.cancel(this.timerId), e.postIds.length && (this.timerId = N.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (h.a.read(() => this.checkAndSendScreenview()), this.timerId && N.c.has(this.timerId)) {
						const e = N.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(N.b)(u.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && N.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && i()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return N.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const n = N.c.end(e);
					setTimeout(() => {
						s(t(n, L.TimerType.InApp))
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
						n = F(t, ["postsById"]),
						{
							postsById: o
						} = e,
						r = F(e, ["postsById"]),
						a = Object.keys(n),
						i = Object.keys(r);
					if (i.length !== a.length) return !0;
					if (i.some(e => n[e] !== r[e])) return !0;
					if (s === o) return !1;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: t
						} = this.props;
						return this.props.postIds.some((n, r) => {
							const a = 0 === r;
							return t({
								isFirstPost: a,
								layout: e,
								post: s[n]
							}) !== t({
								isFirstPost: a,
								layout: e,
								post: o[n]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, n) {
					const {
						currentProfileName: o,
						isCommentPermalink: r,
						isCommentsPage: a,
						isFrontpage: i,
						isProfilePostListing: c,
						isTopicPage: l,
						listingKey: m,
						listingName: p,
						pageLayer: h,
						pageReferrer: b,
						postClickEvent: g,
						redditStyle: v
					} = this.props, f = 0 === t, C = s ? "last-index" : "", O = "post-".concat(n, "-").concat(e, "-").concat(t, "-").concat(C, "-").concat(p, "-").concat(m, "-").concat(b);
					let E;
					if (void 0 === (E = this.scrollChildCache.get(O))) {
						const {
							inSubredditOrProfile: C,
							postsById: y
						} = this.props, _ = y[e], w = _.crosspostRootId && y[_.crosspostRootId] ? y[_.crosspostRootId] : _;
						_.crosspostRootId && !y[_.crosspostRootId] && x.c.withScope(e => {
							e.setExtra("errorType", u.q.API), e.setExtra("description", "Post ".concat(_.id, " is crosspost of ").concat(_.crosspostRootId, ", but ") + "".concat(_.crosspostRootId, " details are missing in the state")), x.c.captureMessage("Crosspost parent details are missing")
						});
						const k = this.props.postComponentForLayout({
								isCrosspost: !!_.crosspostRootId,
								isFirstPost: f,
								layout: n,
								post: w
							}),
							S = "post-list-item-[layout: ".concat(n, "]-[postId: ").concat(e, "]"),
							T = G(e, n, s, m, p, b, this.props, t),
							N = K(e, n, this.props, t),
							L = z(e, this.props),
							M = w.media && w.media.type === I.n.EMBED ? w.media.provider : null;
						E = {
							estHeight: Object(P.c)(_, n),
							id: e,
							isFocusable: !(!w.media || n !== j.g.Large) && (I.d.has(w.media.type) && (!M || !I.q.has(M)) && !w.isSpoiler && !w.isNSFW),
							trackOnEnteredViewport: T,
							trackOnExitedViewport: N,
							render: t => {
								let {
									className: n,
									height: u,
									width: b,
									remeasure: x,
									setScrollerChildRef: O,
									shouldLoadInitially: E
								} = t;
								return d.a.createElement(k, {
									className: n,
									currentProfileName: o,
									key: S,
									availableWidth: b,
									eventFactory: g,
									first: f,
									forceLoadMedia: E,
									inSubredditOrProfile: C,
									isCommentPermalink: r,
									isCommentsPage: a,
									isFrontpage: i,
									isProfilePostListing: c,
									isTopicPage: l,
									listingKey: m,
									listingName: p,
									pageLayer: h,
									last: s,
									onClickPost: L,
									onSizeChanged: x,
									postId: e,
									redditStyle: v,
									sendEvent: this.props.sendEvent,
									scrollerItemRef: O
								})
							}
						}, this.scrollChildCache.set(O, E)
					}
					return E
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return d.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: s,
						layout: n,
						onTryAgain: o,
						postListPlaceholderComponent: r
					} = this.props;
					if (s) return;
					const a = r;
					return d.a.createElement("div", {
						className: R.a.placeholder
					}, d.a.createElement(a, {
						className: t,
						isLoading: !e,
						layout: n
					}), !!e && d.a.createElement(f.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: n,
						loadMoreClassName: o,
						onLoadMore: r
					} = this.props;
					if (!s) return d.a.createElement("div", {
						className: R.a.placeholder
					}, d.a.createElement(v.a, {
						className: o,
						isLoading: !!t,
						layout: n,
						countOverride: H[n]
					}), !!e && d.a.createElement(f.a, {
						apiError: e,
						onTryAgain: r
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: o,
						isTruncated: r,
						layout: a,
						location: i,
						loadMore: l,
						postIds: h,
						onLoadMore: b
					} = this.props;
					let g = h.map((e, t, s) => {
						const n = t === h.length - 1;
						return this.scrollChildForPost(e, t, n, a)
					});
					o && (g = J(g, o));
					const x = this.props.measureScrollFPS ? "post-listings-".concat(a) : void 0,
						v = i ? Object(n.e)(i) : null,
						f = v || r;
					return d.a.createElement(c.Fragment, null, d.a.createElement(C.b, {
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
						onLoadMore: b,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: x,
						viewportTopPadding: y.f
					}, g), v && d.a.createElement(V, {
						className: R.a.seeMoreButton
					}, d.a.createElement(_.a, {
						className: R.a.seeMorePostsText,
						to: Object(m.a)(v, {
							type: u.Lb.Posts
						})
					}, d.a.createElement(O.a, {
						msgId: "search.seeMorePosts"
					}), d.a.createElement(U, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			q.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: d.a.Fragment
			}
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				a = s("./src/reddit/components/Media/index.tsx");
			t.a = e => {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? o.a.createElement(r.a, {
					postId: t.crosspostRootId,
					mediaProps: Object.assign({}, e, {
						crosspost: t,
						primaryContent: !1
					})
				}) : o.a.createElement(a.a, Object.assign({}, e, {
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/AwardBadges/index.tsx"),
				a = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				i = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/PostBadges/index.tsx"),
				l = s("./src/reddit/components/PostTopMeta/index.tsx"),
				m = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				p = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				g = s("./src/reddit/helpers/trackers/post.ts"),
				x = s("./src/reddit/models/Subreddit/index.ts"),
				v = s("./src/reddit/components/PostMeta/index.m.less"),
				f = s.n(v);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: v,
					isOverlay: C,
					isTopicPage: O,
					language: E,
					post: y,
					shouldShowSubscribeButton: j,
					subredditOrProfile: _,
					tooltipType: w
				} = e, P = !!O;
				return o.a.createElement("div", {
					className: f.a.metaContainer
				}, !n && !y.isSponsored && _ && o.a.createElement(i.a, {
					postId: y.id,
					subredditName: _.name
				}, o.a.createElement(p.a, {
					className: f.a.subredditName,
					"data-click-id": "subreddit",
					to: _.url
				}, _.displayText)), _ && _.isQuarantined && o.a.createElement(m.a, null), !n && !y.isSponsored && _ && j && !v && o.a.createElement(u.a, {
					getEventFactory: e => Object(g.f)(y.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: _.name,
						type: Object(x.e)(_) ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: y.id,
					small: !0
				}), !n && !y.isSponsored && o.a.createElement(b.b, null), !n && !y.isSponsored && o.a.createElement(c.h, {
					type: y.belongsTo.type,
					id: y.belongsTo.id
				}), o.a.createElement(l.d, {
					className: f.a.postTopMeta,
					flairStyleTemplate: t,
					language: E,
					post: y,
					tooltipType: w
				}), o.a.createElement(d.a, {
					displayText: _ ? _.displayText : null,
					inSubredditOrProfile: !!n,
					language: E,
					post: y,
					tooltipType: w
				}), _ && o.a.createElement(a.a, {
					className: f.a.donationAmount,
					contentId: y.id,
					subredditId: _.id
				}), !P && o.a.createElement(r.a, {
					hideCta: s,
					isOverlay: C,
					thing: y,
					tooltipType: w
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
				return h
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "g", (function() {
				return x
			})), s.d(t, "h", (function() {
				return v
			})), s.d(t, "i", (function() {
				return f
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "e", (function() {
				return E
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				r = s("./src/reddit/controls/Dropdown/Row.tsx"),
				a = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				i = s("./src/reddit/icons/fonts/Envelope/index.tsx"),
				c = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				d = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				l = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				m = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				p = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				u = s.n(p);
			const h = n.a.wrapped(a.a, "Icon", u.a),
				b = n.a.wrapped(i.a, "Icon", u.a),
				g = n.a.wrapped(c.a, "Icon", u.a),
				x = n.a.wrapped(d.a, "Icon", u.a),
				v = n.a.wrapped(l.a, "Icon", u.a),
				f = n.a.wrapped(m.a, "Icon", u.a),
				C = n.a.wrapped(o.b, "CheckboxMenuItem", u.a),
				O = n.a.wrapped(r.b, "DropdownRow", u.a),
				E = n.a.div("ListContainer", u.a)
		},
		"./src/reddit/components/PostModModeDropdown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				o = s("./src/lib/loadWithRetries/index.ts");
			const r = () => null;
			t.a = Object(n.a)({
				ErrorComponent: r,
				getComponent: () => Object(o.a)(() => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
		},
		"./src/reddit/components/PostOverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				overflowMenu: "_1EbinKu2t3KjaT2gR156Qp",
				DropdownRow: "_1muOrgIRB6t41qDocDiXul",
				dropdownRow: "_1muOrgIRB6t41qDocDiXul",
				disabledRow: "_2Odc33_zXVGMHX8Um_2eO7",
				Icon: "_2V4nGS1AmzWhA62lzdCu4r",
				icon: "_2V4nGS1AmzWhA62lzdCu4r",
				AddCollectionIcon: "_3McOViCQeBaGf3kRQLi-YJ",
				addCollectionIcon: "_3McOViCQeBaGf3kRQLi-YJ",
				LiveIcon: "otoj2GWn145x5kC1YJdJV",
				liveIcon: "otoj2GWn145x5kC1YJdJV",
				CalendarIcon: "_1zSdStUj7GoJJcKjQ7zhG8",
				calendarIcon: "_1zSdStUj7GoJJcKjQ7zhG8",
				LinkIcon: "_1lgI_HBlGeEd4PRa5CuxRF",
				linkIcon: "_1lgI_HBlGeEd4PRa5CuxRF",
				PostCheckboxMenuItem: "_3fGEO8uLSvUJEOP4lDX35p",
				postCheckboxMenuItem: "_3fGEO8uLSvUJEOP4lDX35p"
			}
		},
		"./src/reddit/components/PostOverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router/esm/react-router.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/telemetry/index.ts"),
				m = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/actions/eventPosts/index.ts"),
				h = s("./src/reddit/actions/gold/modals.ts"),
				b = s("./src/reddit/actions/modal.ts"),
				g = s("./src/reddit/actions/pinnedPost.ts"),
				x = s("./src/reddit/actions/post.ts"),
				v = s("./src/reddit/actions/postCreation/editing.ts"),
				f = s("./src/reddit/actions/reportFlow.ts"),
				C = s("./src/reddit/constants/posts.ts"),
				O = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				E = s("./src/reddit/icons/fonts/Admin/index.tsx"),
				y = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				j = s("./src/reddit/icons/fonts/Embed/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Gild/index.tsx"),
				w = s("./src/reddit/icons/fonts/helpers.tsx"),
				P = s("./src/reddit/icons/fonts/Hide/index.m.less"),
				k = s.n(P);
			var I = p.a.wrapped(e => a.a.createElement("i", {
					className: "".concat(Object(w.b)("hide"), " ").concat(e.className)
				}), "HideIcon", k.a),
				S = s("./src/reddit/icons/fonts/Link/index.tsx"),
				T = s("./src/reddit/icons/fonts/Live/index.tsx"),
				N = s("./src/reddit/icons/fonts/Pencil/index.tsx"),
				L = s("./src/reddit/icons/fonts/Report/index.tsx"),
				M = s("./src/reddit/icons/fonts/Save/index.tsx"),
				R = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				F = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				A = s("./src/reddit/icons/fonts/Unpin/index.m.less"),
				B = s.n(A);
			var D = p.a.wrapped(e => a.a.createElement("i", {
					className: Object(m.a)(Object(w.b)("unpin"), e.className)
				}), "UnpinIcon", B.a),
				W = s("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				H = s("./src/reddit/icons/svgs/Saved/index.tsx"),
				V = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				U = s("./src/reddit/components/OverflowMenu/index.tsx"),
				G = s("./src/reddit/components/ReportFlow/index.tsx"),
				K = s("./src/reddit/contexts/PageLayer/index.tsx"),
				z = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				J = s("./src/reddit/controls/Dropdown/Row.tsx"),
				q = s("./src/reddit/components/Flatlist/constants.ts"),
				Y = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				X = s("./src/reddit/constants/postLayout.ts"),
				Q = s("./src/reddit/helpers/correlationIdTracker.ts"),
				Z = s("./src/reddit/helpers/isCrosspost.ts"),
				$ = s("./src/reddit/helpers/postEvent.ts"),
				ee = s("./src/reddit/helpers/trackers/post.ts"),
				te = s("./src/reddit/models/Subreddit/index.ts"),
				se = s("./src/reddit/selectors/activeModalId.ts"),
				ne = s("./src/reddit/selectors/posts.ts"),
				oe = s("./src/reddit/selectors/subreddit.ts"),
				re = s("./src/reddit/selectors/user.ts"),
				ae = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				ie = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				ce = s("./src/reddit/actions/postCollection/index.ts"),
				de = s("./src/reddit/helpers/trackers/postCollection.ts"),
				le = s("./src/reddit/models/PostCreationForm/index.ts"),
				me = s("./src/reddit/selectors/postCollection.ts"),
				pe = s("./src/reddit/components/PostOverflowMenu/index.m.less"),
				ue = s.n(pe);
			s.d(t, "a", (function() {
				return be
			})), s.d(t, "b", (function() {
				return ge
			})), s.d(t, "c", (function() {
				return xe
			})), s.d(t, "e", (function() {
				return ve
			})), s.d(t, "d", (function() {
				return fe
			})), s.d(t, "f", (function() {
				return Oe
			})), s.d(t, "h", (function() {
				return Le
			}));
			var he = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const be = p.a.wrapped(I, "Icon", ue.a),
				ge = p.a.wrapped(N.a, "Icon", ue.a),
				xe = p.a.wrapped(L.a, "Icon", ue.a),
				ve = p.a.wrapped(H.a, "Icon", ue.a),
				fe = p.a.wrapped(M.a, "Icon", ue.a),
				Ce = p.a.wrapped(E.a, "Icon", ue.a),
				Oe = p.a.wrapped(_.a, "Icon", ue.a),
				Ee = p.a.wrapped(W.a, "AddCollectionIcon", ue.a),
				ye = p.a.wrapped(j.a, "Icon", ue.a),
				je = p.a.wrapped(R.a, "Icon", ue.a),
				_e = p.a.wrapped(F.a, "Icon", ue.a),
				we = p.a.wrapped(V.b, "Icon", ue.a),
				Pe = p.a.wrapped(D, "Icon", ue.a),
				ke = p.a.wrapped(T.a, "LiveIcon", ue.a),
				Ie = p.a.wrapped(y.a, "CalendarIcon", ue.a),
				Se = p.a.wrapped(S.a, "LinkIcon", ue.a),
				Te = p.a.wrapped(J.b, "DropdownRow", ue.a),
				Ne = p.a.wrapped(z.a, "PostCheckboxMenuItem", ue.a),
				Le = e => {
					let {
						gild: t = !0,
						save: s = !0,
						share: n = !0,
						report: o = !0,
						editPost: r = !0,
						hide: a = !0
					} = e;
					return {
						[q.a.Gild]: t,
						[q.a.Save]: s,
						[q.a.Share]: n,
						[q.a.Report]: o,
						[q.a.EditPost]: r,
						[q.a.Hide]: a
					}
				},
				Me = Object(i.b)(() => Object(d.c)({
					currentUser: re.i,
					isConfirmDeleteOpen: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(se.a)(e) === "".concat("POST_OVERFLOW_DELETE_CONFIRMATION", "_").concat(s)
					},
					isFutureEvent: me.i,
					isSaved: ne.v,
					isHidden: ne.n,
					isSponsored: ne.x,
					isNSFW: ne.q,
					isOC: ne.r,
					isPinned: ne.s,
					isSpoiler: ne.w,
					post: ne.M,
					postSubredditAboutInfo: ne.N,
					reportFlowIsOpen: (e, t) => {
						let {
							isOverlay: s,
							postId: n
						} = t;
						return e.reportFlow.openedFromModalPage === s && e.reportFlow.postOrCommentId === n
					},
					sendRepliesToggled: ne.W,
					showPinAction: (e, t) => {
						var {
							isProfilePostListing: s
						} = t, n = he(t, ["isProfilePostListing"]);
						return Object(K.B)(e, n) && s && Object(re.eb)(e, n) && Object(re.db)(e, {
							userName: Object(ne.M)(e, {
								postId: n.postId
							}).author
						})
					},
					subredditOrProfile: ne.Y,
					hasSubredditRules: oe.k,
					userIsOp: re.eb,
					isPostPartOfACollection: me.k,
					shouldRenderCollectionEditButtons: (e, t) => {
						let {
							postId: s
						} = t;
						if (Object(ne.M)(e, {
								postId: s
							}).isSponsored) return !1;
						const n = Object(ne.Y)(e, {
							postId: s
						});
						if (!n) return !1;
						const o = n.type === te.c.User;
						return Object(me.r)(e, n.name, o)
					}
				}), (e, t) => {
					let {
						permalink: s,
						postId: n,
						isOverlay: o,
						isCommentsPage: r
					} = t;
					return {
						onCopyLink: () => e(Object(x.C)(s)),
						onDelete: t => e(Object(x.J)(n, t, o)),
						onDistinguishPost: t => e(Object(x.t)(n, t)),
						onGildClick: () => e(Object(h.d)(n, o)),
						onToggleSave: () => e(Object(x.Q)(n)),
						onToggleNSFW: () => e(Object(x.F)(n)),
						onToggleOC: () => e(Object(x.G)(n)),
						onTogglePinned: () => e(Object(g.i)(n)),
						onToggleSpoiler: () => e(Object(x.T)(n)),
						onHide: t => e(Object(x.U)(n, !t, o, !0)),
						onReportClick: () => e(Object(f.j)(n, o)),
						onStartEventNow: () => {
							e((e, t) => Object(l.a)(Object(O.p)()(t()))), e(Object(u.startEventNowRequested)(n))
						},
						onEdit: () => {
							const t = !o && !r;
							e(Object(v.a)(n, t))
						},
						onFlairPost: () => e(Object(b.i)(Object(ie.b)(n, o))),
						onToggleSendReplies: () => e(Object(x.R)(n)),
						showCollectionsList: (t, s) => {
							e(Object(ce.e)(t)).then(() => {
								const t = Object(le.t)(s, o);
								e(b.i(t))
							})
						},
						toggleConfirmDelete: () => e(Object(b.i)("".concat("POST_OVERFLOW_DELETE_CONFIRMATION", "_").concat(n)))
					}
				});
			class Re extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.handlePostEvent = e => {
						const {
							isOverlay: t,
							post: s,
							sendEvent: n
						} = this.props;
						n(Object(ee.f)(s.id, e, t ? "post_detail" : "post"))
					}, this.handleClickMenuButton = () => {
						this.handlePostEvent("post_overflow_menu")
					}, this.handleDeletePost = e => {
						e && (this.props.onDelete(e), this.handlePostEvent("delete"))
					}, this.handleEdit = () => {
						this.handlePostEvent("edit"), this.props.onEdit()
					}, this.handleGild = async () => {
						Object(Q.d)(Q.a.GildingFlow), this.props.onGildClick();
						const {
							clickGildEvent: e
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(e(this.props.postId))
					}, this.toggleHide = () => {
						const e = this.props.isHidden ? "unhide" : "hide";
						this.handlePostEvent(e), this.props.onHide(this.props.isHidden)
					}, this.toggleSave = () => {
						const e = this.props.isSaved ? "unsave" : "save";
						this.handlePostEvent(e), this.props.onToggleSave()
					}, this.handleReport = () => {
						this.handlePostEvent("report"), this.props.onReportClick()
					}, this.toggleOC = () => {
						this.handlePostEvent(this.props.isOC ? "unmark_original_content" : "mark_original_content"), this.props.onToggleOC()
					}, this.togglePinned = () => {
						this.handlePostEvent(this.props.isPinned ? "unpin" : "pin"), this.props.isPinned ? this.props.sendEvent(Object(ee.g)(this.props.post.id)) : this.props.sendEvent(Object(ee.c)(this.props.post.id)), this.props.onTogglePinned()
					}, this.toggleSpoiler = () => {
						this.handlePostEvent(this.props.isSpoiler ? "unmark_spoiler" : "mark_spoiler"), this.props.onToggleSpoiler()
					}, this.toggleNSFW = () => {
						this.handlePostEvent(this.props.isNSFW ? "unmark_nsfw" : "mark_nsfw"), this.props.onToggleNSFW()
					}, this.getBreakpointClass = e => {
						const {
							props: t
						} = this;
						if (!t.ignoreBreakpoints && t.useFlatlistBreakpoints[e]) return Object(Y.b)({
							breakpointType: Y.a.HideIfVWLarger,
							flatlistItem: e,
							isLoggedIn: !!t.currentUser,
							isUserOp: t.userIsOp
						})
					}, this.handleAddToCollection = () => {
						const {
							isPostPartOfACollection: e,
							showCollectionsList: t,
							post: s,
							sendEvent: n
						} = this.props;
						e || (n(Object(de.b)(s.id)), t(s.belongsTo.id, s.id))
					}
				}
				getOverflowMenuBreakpointClass() {
					const {
						props: e
					} = this, t = e.layout === X.g.Classic;
					if (!(e.ignoreBreakpoints || e.modModeWithPost || e.userIsOp || !e.isCommentsPage && !t)) return Object(Y.b)({
						breakpointType: Y.a.HideIfVWLarger,
						flatlistItem: q.a.PostOverflowMenu,
						isLoggedIn: !!e.currentUser,
						isUserOp: e.userIsOp
					})
				}
				renderDropdownIcons() {
					const {
						props: e
					} = this, {
						currentUser: t,
						isFutureEvent: s,
						isPinned: r,
						onStartEventNow: i,
						post: c,
						shouldRenderCollectionEditButtons: d,
						showEditFlair: l,
						showPinAction: m,
						toggleAddEventStartTimeModal: p,
						toggleEditStartTimeModal: u,
						userIsOp: h
					} = e, b = e.currentUser && e.currentUser.isEmployee, g = Object(Z.a)(e.post), x = e.post.belongsTo.type === C.a.PROFILE || Object(te.d)(e.postSubredditAboutInfo), v = t && c.isGildable, f = Object($.a)(e.post);
					return a.a.createElement("div", null, v && a.a.createElement(Te, {
						className: this.getBreakpointClass(q.a.Gild),
						displayText: n.fbt._("Give Award", null, {
							hk: "3mYeGJ"
						}),
						onClick: this.handleGild
					}, a.a.createElement(Oe, null)), a.a.createElement(Te, {
						className: this.getBreakpointClass(q.a.Share),
						displayText: n.fbt._("Copy link", null, {
							hk: "ETZxA"
						}),
						onClick: () => {
							this.handlePostEvent("share_copy"), e.onCopyLink()
						}
					}, a.a.createElement(Se, null)), a.a.createElement(Te, {
						className: this.getBreakpointClass(q.a.Share),
						displayText: n.fbt._("Embed", null, {
							hk: "3u0v6r"
						}),
						onClick: () => {
							this.handlePostEvent("share_embed"), window.open("https://embed.redditmedia.com/widgets/embed?url=".concat(e.post.permalink), "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, a.a.createElement(ye, null)), e.showEditPost && a.a.createElement(Te, {
						className: this.getBreakpointClass(q.a.EditPost),
						displayText: n.fbt._("Edit post", null, {
							hk: "3gVzz0"
						}),
						onClick: this.handleEdit,
						isSelected: e.isHidden
					}, a.a.createElement(ge, null)), l && a.a.createElement(Te, {
						displayText: n.fbt._("Edit flair", null, {
							hk: "qt3W7"
						}),
						onClick: e.onFlairPost,
						isSelected: e.isHidden
					}, a.a.createElement(_e, null)), a.a.createElement(Te, {
						className: this.getBreakpointClass(q.a.Save),
						displayText: e.isSaved ? n.fbt._("unsave", null, {
							hk: "HDDPm"
						}) : n.fbt._("save", null, {
							hk: "3bg2gs"
						}),
						onClick: this.toggleSave,
						isSelected: e.isSaved
					}, e.isSaved ? a.a.createElement(ve, null) : a.a.createElement(fe, null)), m && a.a.createElement(Te, {
						displayText: r ? n.fbt._("Unpin Post from Profile", null, {
							hk: "6DYfk"
						}) : n.fbt._("Pin Post to Profile", null, {
							hk: "2RWbNF"
						}),
						onClick: this.togglePinned
					}, this.props.isPinned ? a.a.createElement(Pe, null) : a.a.createElement(je, null)), !e.isSponsored && a.a.createElement(Te, {
						className: this.getBreakpointClass(q.a.Hide),
						displayText: e.isHidden ? n.fbt._("unhide", null, {
							hk: "1P4IxC"
						}) : n.fbt._("hide", null, {
							hk: "48yKzW"
						}),
						onClick: this.toggleHide,
						isSelected: e.isHidden
					}, a.a.createElement(be, null)), !e.isSponsored && !h && a.a.createElement(Te, {
						className: this.getBreakpointClass(q.a.Report),
						displayText: n.fbt._("report", null, {
							hk: "128RPn"
						}),
						onClick: this.handleReport
					}, a.a.createElement(xe, null)), d && s && i && a.a.createElement(Te, {
						onClick: i,
						displayText: n.fbt._("Start event now", null, {
							hk: "3VomTN"
						})
					}, a.a.createElement(ke, null)), d && s && u && a.a.createElement(Te, {
						onClick: u,
						displayText: n.fbt._("Edit start time", null, {
							hk: "2typ17"
						})
					}, a.a.createElement(Ie, null)), d && !f && p && a.a.createElement(Te, {
						displayText: n.fbt._("Add event start time", null, {
							hk: "1XXqzu"
						}),
						onClick: p
					}, a.a.createElement(Ie, null)), d && a.a.createElement(Te, {
						className: this.props.isPostPartOfACollection ? ue.a.disabledRow : void 0,
						displayText: n.fbt._("Add to collection", null, {
							hk: "3UNHgN"
						}),
						onClick: this.handleAddToCollection,
						noHover: this.props.isPostPartOfACollection
					}, a.a.createElement(Ee, null)), h && a.a.createElement(Te, {
						displayText: n.fbt._("delete", null, {
							hk: "4kSfzC"
						}),
						onClick: this.props.toggleConfirmDelete
					}, a.a.createElement(we, null)), b && e.userIsOp && a.a.createElement(Te, {
						displayText: e.post.distinguishType === o.C.ADMIN ? n.fbt._("undistinguish", null, {
							hk: "2chGON"
						}) : n.fbt._("Distinguish as admin", null, {
							hk: "2xltiM"
						}),
						onClick: () => e.post.distinguishType === o.C.ADMIN ? e.onDistinguishPost(o.C.NONE) : e.onDistinguishPost(o.C.ADMIN)
					}, a.a.createElement(Ce, null)), h && x && !g && a.a.createElement(Ne, {
						text: n.fbt._("Mark as OC", null, {
							hk: "2vGyoC"
						}),
						onClick: this.toggleOC,
						isSelected: this.props.isOC
					}), h && a.a.createElement(Ne, {
						text: n.fbt._("Mark as Spoiler", null, {
							hk: "3PJk7A"
						}),
						onClick: this.toggleSpoiler,
						isSelected: this.props.isSpoiler
					}), h && a.a.createElement(Ne, {
						text: n.fbt._("Mark as NSFW", null, {
							hk: "4qK6JN"
						}),
						onClick: this.toggleNSFW,
						isSelected: this.props.isNSFW
					}), e.userIsOp && a.a.createElement(Ne, {
						text: n.fbt._("Send me reply notifications", null, {
							hk: "6AmTA"
						}),
						onClick: e.onToggleSendReplies,
						isSelected: this.props.sendRepliesToggled
					}))
				}
				render() {
					const {
						props: e
					} = this;
					return a.a.createElement("div", null, a.a.createElement(U.b, {
						className: Object(m.a)(ue.a.overflowMenu, this.getOverflowMenuBreakpointClass(), e.className),
						dropdownId: e.dropdownId,
						isFixed: e.isFixed,
						layout: e.layout,
						onClick: this.handleClickMenuButton
					}, this.renderDropdownIcons()), e.reportFlowIsOpen && e.subredditOrProfile && e.hasSubredditRules && a.a.createElement(G.a, {
						withOverlay: !0,
						overlayCustomStyles: G.b,
						postId: e.postId
					}), this.props.isConfirmDeleteOpen && a.a.createElement(Fe, {
						toggleConfirmDelete: this.props.toggleConfirmDelete,
						handleDeletePost: this.handleDeletePost
					}))
				}
			}
			const Fe = Object(c.i)(e => a.a.createElement(ae.a, {
				toggleModal: e.toggleConfirmDelete,
				onConfirm: () => e.handleDeletePost(e.location),
				actionText: n.fbt._("delete post", null, {
					hk: "49hVoG"
				}),
				headerText: n.fbt._("Delete post?", null, {
					hk: "3g7QoX"
				}),
				modalText: n.fbt._("Are you sure you want to delete your post? You can't undo this.", null, {
					hk: "2eDKWP"
				}),
				withOverlay: !0
			}));
			t.g = Me(Re)
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/PostLeftRail/index.tsx"),
				a = s("./src/reddit/components/VerticalVotes/index.tsx"),
				i = s("./src/reddit/controls/Checkbox/index.tsx"),
				c = s("./src/reddit/helpers/isPost.ts"),
				d = s("./src/reddit/helpers/showReportIndicator/index.ts");
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: n = !1,
					isCheckboxSelected: l = !1,
					toggleCheckbox: m = (() => {}),
					flairStyleTemplate: p,
					redditStyle: u
				} = e, h = "upvote-button-".concat(t.id);
				return o.a.createElement(r.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(d.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: u
				}, n && o.a.createElement(i.a, {
					isCheckboxSelected: l,
					toggleCheckbox: m
				}), o.a.createElement(a.a, {
					flairStyleTemplate: p,
					model: t,
					onVoteClick: s,
					redditStyle: u,
					upvoteTooltipId: h
				}))
			}
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, s) {
			e.exports = {
				donationAmount: "_1SRZN02bVXzHIIMqGwlZD7",
				everythingElseWrapper: "cZPZhMe-UCZ8htPodMyJ5",
				eventMeta: "_28_NUs_O8Nh1DCErsNLCHk",
				outboundLinkIcon: "_3z6z1xnp828wcarJXfzzjr",
				postBadges: "_2wFk1qX4e1cxk8Pkw1rAHk",
				postTopMeta: "nU4Je7n-eSXStTBAPMYt8",
				subredditIcon: "_1WX5Y5qFVBTdr6hCPpARDB",
				subredditIconWrapper: "_2dr_3pZUCk8KfJ-x0txT_l",
				Container: "BiNC74axuTz66dlnEgicY",
				container: "BiNC74axuTz66dlnEgicY",
				PostOverflow: "_2tLA78PLrLx5lz5Jj6cR",
				postOverflow: "_2tLA78PLrLx5lz5Jj6cR",
				bulkActionCheckbox: "_3X709ZHnDjH0Rwz3pMTv40"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				i = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/PostBadges/index.tsx"),
				l = s("./src/reddit/components/PostTopMeta/index.tsx"),
				m = s("./src/reddit/components/SubredditIcon/index.tsx"),
				p = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				g = s("./src/reddit/helpers/trackers/post.ts"),
				x = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				v = s("./src/reddit/models/Media/index.ts"),
				f = s("./src/reddit/models/Subreddit/index.ts"),
				C = s("./src/reddit/components/PostTopLine/index.m.less"),
				O = s.n(C);
			const E = s("./src/lib/lessComponent.tsx").a.div("Container", O.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					hideNSFWPref: n,
					iconClassName: C,
					inSubredditOrProfile: y,
					isCommentsPage: j,
					isCompactPinnedPost: _,
					isCurrentUserProfilePost: w,
					isOverlay: P,
					isTopicPage: k,
					language: I,
					post: S,
					publicAwardersEnabled: T,
					shouldShowSubscribeButton: N,
					showCornerOutboundLink: L,
					showSubreddit: M,
					showSubredditIcon: R,
					subredditOrProfile: F
				} = e, A = j && T, B = k;
				return o.a.createElement(E, {
					className: t
				}, M && F && o.a.createElement("div", {
					className: O.a.subredditIconWrapper
				}, o.a.createElement(p.a, {
					"data-click-id": "subreddit",
					to: F.url
				}, R && o.a.createElement(m.b, {
					className: Object(r.a)(O.a.subredditIcon, C),
					shouldHideNsfwIcon: n,
					subredditOrProfile: F
				}))), o.a.createElement("div", {
					className: O.a.everythingElseWrapper
				}, M && o.a.createElement(c.h, {
					type: S.belongsTo.type,
					id: S.belongsTo.id
				}), o.a.createElement(l.d, {
					className: O.a.postTopMeta,
					flairStyleTemplate: s,
					tooltipType: P ? l.c.Lightbox : void 0,
					language: I,
					post: S,
					showSub: M,
					subredditOrProfile: F
				}), o.a.createElement(d.a, {
					className: O.a.postBadges,
					displayText: F ? F.displayText : null,
					inSubredditOrProfile: y,
					language: I,
					isCompactPinnedPost: _,
					post: S,
					tooltipType: P ? l.c.Lightbox : void 0
				}), F && o.a.createElement(i.a, {
					className: O.a.donationAmount,
					contentId: S.id,
					subredditId: F.id
				}), !B && o.a.createElement(a.a, {
					forceShowAllAwards: j,
					isOverlay: P,
					showAwarders: A,
					tooltipType: P ? l.c.Lightbox : void 0,
					thing: S
				})), F && M && N && !w && o.a.createElement(u.a, {
					getEventFactory: e => Object(g.f)(S.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: F.name,
						type: Object(f.e)(F) ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: S.id
				}, "Subscribe"), L && o.a.createElement(b.a, {
					className: O.a.OutboundLink,
					isSponsored: S.isSponsored,
					href: Object(v.A)(e.post),
					source: S.source
				}, o.a.createElement(x.a, {
					className: O.a.outboundLinkIcon
				})))
			}
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/actions/page.ts"),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = s.n(m);
			const u = Object(a.b)(null, e => ({
					onNavigate: t => e(Object(d.G)(t))
				})),
				h = c.a.wrapped(e => r.a.createElement("div", {
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
						"--RawHTMLDisplay-tr-even": Object(n.j)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(n.j)(Object(l.a)(e).line, .8)
					})
				}), "StyledRawHTMLDisplay", p.a);
			t.a = u(Object(i.a)(h))
		},
		"./src/reddit/components/RecommendedPostList/Footer/index.m.less": function(e, t, s) {
			e.exports = {
				footer: "_1khvWSB4GNuM2XwSjluHzO",
				background: "_3P_3k_jLv_J8ieIol9GqFL",
				layout: "_3CzLjB_82xAxB3iyad5yLM",
				arrow: "_3P6Ag4hY0u5ujhvLSAAVUH"
			}
		},
		"./src/reddit/components/RecommendedPostList/index.m.less": function(e, t, s) {
			e.exports = {
				topPostsHeader: "_1UbFWXvPTlrPngGxKndM-h",
				smallBanner: "_3O03kg0NTHcVFAyOQNoptz",
				footer: "Cvt0D6iVwU5TI0SY2nIGC",
				textBanner: "_1_-Wwc76dn19ch_lxyp8hf",
				container: "_2l7c_Oz0UVsamALvPrlznq",
				redditStyle: "_3f1Tk2rNUQGOPokixOdO6a",
				homeUpsellBanner: "HxVtNYGfeayfU1THFnAzK",
				homeUpsellBannerBorder: "_3afoK8x8kiKzCgwyofmvxu",
				postList: "_13FxmZ1xHIcRd_CuOaiyfo",
				loadMore: "_2gnvYSohivzo1V12YQI8DY"
			}
		},
		"./src/reddit/components/RecommendedPostList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/noop.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/makeListingKey/index.ts"),
				m = s("./src/reddit/actions/subreddit.ts"),
				p = s("./src/reddit/components/ListingPostList/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/elementIds.ts"),
				b = s("./src/reddit/constants/page.ts"),
				g = s("./src/reddit/constants/postLayout.ts"),
				x = s("./src/reddit/helpers/postCollection.ts"),
				v = s("./src/reddit/helpers/trackers/lightbox.ts"),
				f = s("./src/reddit/helpers/trackers/screenview.ts"),
				C = s("./src/reddit/i18n/components.tsx"),
				O = s("./src/reddit/selectors/commentsListTruncated.ts"),
				E = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				y = s("./src/reddit/selectors/experiments/chatPost.ts"),
				j = s("./src/reddit/selectors/experiments/listingBelowAll.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				w = s("./src/lib/classNames/index.ts"),
				P = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				k = s("./src/reddit/constants/listings.ts"),
				I = s("./src/reddit/controls/InternalLink/index.tsx"),
				S = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				T = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				N = s("./src/reddit/components/RecommendedPostList/Footer/index.m.less"),
				L = s.n(N);
			var M = Object(P.a)(e => {
					const {
						className: t,
						onClick: s,
						shouldDisplaySeeMore: n,
						shouldNavigateToHome: o,
						subredditOrProfile: r
					} = e, {
						primaryColor: i
					} = r, c = !o && i || Object(T.a)(Object.assign({}, e, {
						redditStyle: !0
					})).button, d = n ? "See more" : "Continue browsing";
					return a.a.createElement(I.a, {
						className: Object(w.a)(L.a.footer, t),
						onMouseDown: s,
						to: o ? k.c[k.b.Home] : r.url,
						style: {
							backgroundColor: c
						}
					}, a.a.createElement("div", {
						className: L.a.background
					}), a.a.createElement("div", {
						className: L.a.layout
					}, o ? a.a.createElement(C.c, null, "See more recommended") : a.a.createElement(C.c, null, d, " in ", a.a.createElement(C.b, {
						name: "subredditName"
					}, r.displayText)), a.a.createElement(S.a, {
						className: L.a.arrow
					})))
				}),
				R = s("./src/reddit/components/RecommendedPostList/index.m.less"),
				F = s.n(R);
			const A = Object(c.a)((e, t) => {
					let {
						isOverlay: s
					} = t;
					return s
				}, O.a, E.b, j.b, (e, t, s, n) => {
					const o = Object(j.a)(n);
					return !((!t || !o || s) && e)
				}),
				B = Object(c.c)({
					isChatPost: y.d,
					isLoggedIn: _.F,
					shouldShowSubredditUpsell: A
				}),
				D = Object(i.b)(B, e => ({
					loadMorePosts: t => e(Object(m.r)({
						sort: d.O.HOT,
						subredditName: t
					}))
				}));
			class W extends a.a.Component {
				constructor() {
					super(...arguments), this.scrollContainer = () => this.props.isOverlay ? document.getElementById(h.d) : null, this.onViewed = (e, t) => Object(f.d)(this.listingKey(), d.O.TOP, t, e, d.Qb.WEEK), this.onFooterClick = e => {
						this.props.sendEvent(Object(v.c)("recommended_footer"))
					}
				}
				listingKey() {
					const {
						subredditOrProfile: e
					} = this.props;
					return Object(l.a)(e.name, d.O.TOP, {
						t: d.Qb.WEEK
					})
				}
				renderSmallBanner() {
					const {
						subredditOrProfile: e
					} = this.props, {
						name: t
					} = e;
					return a.a.createElement("div", {
						className: F.a.smallBanner
					}, a.a.createElement(C.c, null, "More posts from the ", a.a.createElement(C.b, {
						name: "name"
					}, t), " community"))
				}
				renderTextBanner() {
					const {
						subredditOrProfile: e
					} = this.props, {
						name: t
					} = e;
					return a.a.createElement("span", {
						className: F.a.textBanner
					}, a.a.createElement(C.c, null, "More from ", a.a.createElement(C.b, {
						name: "name"
					}, t)))
				}
				render() {
					const {
						contentContainerRef: e,
						isChatPost: t,
						isLoggedIn: s,
						post: n,
						shouldShowSubredditUpsell: r,
						subredditOrProfile: i
					} = this.props, c = n && Object(x.a)(n);
					return s || t || c || !r ? null : a.a.createElement("div", {
						className: F.a.container
					}, this.renderSmallBanner(), a.a.createElement(p.a, {
						className: F.a.postList,
						disablePlaceholder: !0,
						forcedLayout: g.g.Large,
						getScrollContainer: this.scrollContainer,
						isTruncated: !0,
						listingKey: this.listingKey(),
						listingName: b.c.PostDetail,
						listingViewed: this.onViewed,
						loadMoreClassName: F.a.loadMore,
						noPostsComponent: () => null,
						onLoadMore: o.a,
						preventScrollOnMount: !0,
						inSubredditOrProfile: !0,
						scrollContentContainerRef: e
					}), a.a.createElement(M, {
						className: F.a.footer,
						onClick: this.onFooterClick,
						shouldNavigateToHome: !1,
						subredditOrProfile: i
					}))
				}
			}
			t.a = D(Object(u.b)(W))
		},
		"./src/reddit/components/ReportFlow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			}));
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				o = s("./src/lib/loadWithRetries/index.ts");
			const r = {
					backgroundColor: s("./src/reddit/constants/colors.ts").a.overlayReportFlow
				},
				a = () => null;
			t.a = Object(n.a)({
				ErrorComponent: a,
				getComponent: () => Object(o.a)(() => Promise.all([s.e("ReportFlow~ReportPage"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx"))).then(e => e.default),
				LoadingComponent: a
			})
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
				return l
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "d", (function() {
				return p
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				c = s.n(i);
			const d = a.a.span("TextWrapper", c.a),
				l = a.a.wrapped(e => o.a.createElement("button", {
					className: e.className,
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick
				}, e.children, e.text && o.a.createElement(d, null, e.text, " ")), "Button", c.a),
				m = a.a.wrapped(l, "ApproveButton", c.a),
				p = a.a.wrapped(l, "RemoveButton", c.a),
				u = e => o.a.createElement("button", {
					className: Object(r.a)(c.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/components/RichTextEditor/Placeholder.m.less": function(e, t, s) {
			e.exports = {
				content: "_3Yo9aCwUoJBBuPKwf3r5cP",
				prompt: "_3CuuiBuYvA4VXTClabDCUK",
				toolbar: "_31gqZmjkDlF5-81EKQ7w_Y",
				topToolbar: "_6rO7u4xvTeWjMNR68asbw",
				bottomToolbar: "_2Qh8N3s0Z7NWIPCVBDCcxH"
			}
		},
		"./src/reddit/components/RichTextEditor/Placeholder.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/FocusableContent/index.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				c = s("./src/reddit/components/RichTextEditor/Placeholder.m.less"),
				d = s.n(c);
			t.a = e => {
				let {
					className: t,
					isLoading: s,
					toolbarPosition: n
				} = e;
				return o.a.createElement("div", {
					className: t
				}, o.a.createElement(a.a, {
					isFocused: !1
				}, "top" === n && o.a.createElement("div", {
					className: Object(r.a)(d.a.toolbar, d.a.topToolbar, Object(i.a)({
						isLoading: s
					}))
				}), o.a.createElement("div", {
					className: d.a.content
				}, o.a.createElement("div", {
					className: Object(r.a)(d.a.prompt, Object(i.a)({
						isLoading: !0
					}))
				})), "bottom" === n && o.a.createElement("div", {
					className: Object(r.a)(d.a.toolbar, d.a.bottomToolbar, Object(i.a)({
						isLoading: s
					}))
				})))
			}
		},
		"./src/reddit/components/ShareMenu/index.m.less": function(e, t, s) {
			e.exports = {
				dropdown: "PWY92ySDjTYrTAiutq4ty",
				dropdownRow: "_2snJGyyGyyH38duHobOUKE",
				linkIcon: "_1GObrri0j7y_9IWiGUfPjp",
				crosspostIcon: "_1m76BHzDzRsM1te7HBxUqd",
				embedIcon: "_3MSdPVJwGxrpakz-e1MQhO"
			}
		},
		"./src/reddit/components/ShareMenu/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router/esm/react-router.js"),
				i = s("./node_modules/react-router-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/i18n/utils.ts"),
				m = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/Row.tsx"),
				g = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				x = s("./src/reddit/icons/fonts/Embed/index.tsx"),
				v = s("./src/reddit/icons/fonts/Link/index.tsx"),
				f = s("./src/reddit/models/Subreddit/index.ts"),
				C = s("./src/reddit/routes/postCreation/constants.ts"),
				O = s("./src/reddit/selectors/tooltip.ts"),
				E = s("./src/reddit/components/ShareMenu/index.m.less"),
				y = s.n(E),
				j = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const _ = Object(u.a)(h.a),
				w = Object(c.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(O.b)(s)(e)
					}
				}),
				P = Object(r.b)(w, (e, t) => {
					var {
						dropdownId: s,
						permalink: n
					} = t, o = j(t, ["dropdownId", "permalink"]);
					return {
						onCrosspost: () => {
							o.post && e(Object(i.b)("".concat(C.b, "?source_id=").concat(o.post.id)))
						},
						toggleDropdown: () => {
							e(Object(d.h)({
								tooltipId: s
							}))
						},
						copyLink: () => e(Object(p.C)(Object(m.a)(n, {
							utm_source: "share",
							utm_medium: "web2x"
						})))
					}
				});
			t.a = P(Object(a.i)(e => {
				const t = !e.subreddit || e.subreddit && e.subreddit.type === f.c.Public,
					s = !!e.post && e.post.isCrosspostable && !e.post.isSponsored;
				return o.a.createElement("div", {
					className: e.className,
					onClick: e.toggleDropdown,
					id: e.dropdownId
				}, e.children, o.a.createElement(_, {
					className: y.a.dropdown,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId
				}, o.a.createElement(b.b, {
					className: y.a.dropdownRow,
					displayText: Object(l.c)("Copy link"),
					onClick: () => {
						e.sendEventWithName("share_copy"), e.copyLink()
					}
				}, o.a.createElement(v.a, {
					className: y.a.linkIcon
				})), s && o.a.createElement(b.b, {
					className: y.a.dropdownRow,
					displayText: Object(l.c)("crosspost"),
					onClick: () => {
						e.sendEventWithName("share_crosspost"), e.onCrosspost()
					}
				}, o.a.createElement(g.a, {
					className: y.a.crosspostIcon
				})), t && o.a.createElement(b.b, {
					className: y.a.dropdownRow,
					displayText: Object(l.c)("Embed"),
					onClick: () => {
						e.sendEventWithName("share_embed"), window.open("https://embed.redditmedia.com/widgets/embed?url=".concat(e.permalink), "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
					}
				}, o.a.createElement(x.a, {
					className: y.a.embedIcon
				}))))
			}))
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less": function(e, t, s) {
			e.exports = {
				sideBarStyle: "wYQbYt3FNY5w9oBiYrHzv",
				BannerAd: "_2UMQXLQOtNVy_JO9ghou6",
				bannerAd: "_2UMQXLQOtNVy_JO9ghou6",
				ThemedWidget: "avKlJzxZU3brq4nAX0_i1",
				themedWidget: "avKlJzxZU3brq4nAX0_i1",
				SidebarAdPlaceholder: "NqMdak8MgbuSVZAABdAw9",
				sidebarAdPlaceholder: "NqMdak8MgbuSVZAABdAw9"
			}
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/lodash/random.js"),
				r = s.n(o),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/app/strings/index.ts"),
				m = s("./src/reddit/components/BannerAd/index.tsx"),
				p = s("./src/reddit/components/FakeBannerAd/index.tsx"),
				u = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				h = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = s("./src/reddit/helpers/adCount/index.ts"),
				g = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				v = s.n(x),
				f = s("./src/lib/lessComponent.tsx");
			const C = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-SidebarNativeAd",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("reddit-components-SidebarNativeAd")]).then(s.bind(null, "./src/reddit/components/SidebarNativeAd/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/SidebarNativeAd/index.tsx"
					}
				}),
				O = Object(d.c)({
					post: (e, t) => {
						const {
							placement: s,
							placementIndex: n
						} = t, o = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(b.a)(s, o, n)]
					},
					pending: e => !e.sidebarPromotedPosts.firstFetch
				}),
				E = Object(c.b)(O),
				y = f.a.wrapped(m.a, "BannerAd", v.a),
				j = f.a.wrapped(h.a, "ThemedWidget", v.a),
				_ = f.a.div("SidebarAdPlaceholder", v.a),
				w = (e, t, s) => {
					let n = "";
					return t && (n += "overlay-"), n += "sidebar-".concat(e), null != s && (n += "-".concat(s)), n
				},
				P = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(g.B)(e.media) && e.media.content)),
				k = e => !!e && e.isBlank,
				I = [{
					img: "/img/house-ads/old_recipes.png",
					href: "/r/old_recipes"
				}, {
					img: "/img/house-ads/eatcheapandhealthy.png",
					href: "/r/eatcheapandhealthy"
				}, {
					img: "/img/house-ads/streetwear.png",
					href: "/r/streetwear"
				}, {
					img: "/img/house-ads/castiron.png",
					href: "/r/castiron"
				}];
			class S extends i.a.Component {
				shouldComponentUpdate(e, t) {
					const {
						className: s,
						redditStyle: n
					} = this.props;
					return s !== e.className || n !== e.redditStyle
				}
				render() {
					const e = r()(0, I.length - 1),
						{
							img: t,
							href: s
						} = I[e],
						{
							className: n,
							redditStyle: o
						} = this.props;
					return i.a.createElement(u.a, null, i.a.createElement(j, {
						className: n,
						contentOnly: !0,
						redditStyle: o
					}, i.a.createElement(p.a, {
						img: t,
						href: s
					})))
				}
			}
			class T extends i.a.Component {
				render() {
					const {
						className: e,
						pending: t,
						post: s,
						isOverlay: n,
						placementIndex: o,
						refreshKey: r,
						listingName: a,
						placement: c,
						sizes: d,
						position: m,
						redditStyle: p,
						forcePlaceholder: h,
						forceHouseAd: b,
						waitForProgrammatic: g
					} = this.props;
					return h || t || !P(s) && g ? i.a.createElement(u.a, null, i.a.createElement(j, {
						className: e,
						contentOnly: !0,
						redditStyle: p
					}, i.a.createElement(_, {
						"data-before-content": Object(l.a)("en", "sidebar.sponsored")
					}))) : b ? i.a.createElement(S, {
						className: e,
						redditStyle: p
					}) : P(s) ? i.a.createElement(u.a, null, i.a.createElement(C, {
						post: s,
						refreshKey: r,
						listingName: a,
						placement: c,
						placementIndex: o
					})) : i.a.createElement(u.a, null, i.a.createElement(j, {
						className: this.props.className,
						contentOnly: !0,
						redditStyle: p
					}, k(s) && i.a.createElement(C, {
						post: s,
						refreshKey: r,
						listingName: a,
						placement: c,
						placementIndex: o
					}), i.a.createElement(y, {
						id: w(c, n, o),
						sizes: d,
						placement: c,
						listingName: a,
						refreshKey: r,
						position: m,
						dataBeforeContent: Object(l.a)("en", "sidebar.sponsored")
					})))
				}
			}
			t.a = E(T)
		},
		"./src/reddit/components/SidebarAd/CommentsPageSidebarAd.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/selectors/brandSafety.ts"),
				i = s("./src/reddit/selectors/comments.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				d = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx"),
				l = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			t.a = Object(r.b)((e, t) => {
				let {
					postId: s,
					commentsPageKey: n
				} = t;
				return {
					canShowAd: Object(a.a)(e, {
						postId: s
					}) && !Object(c.x)(e),
					waitForProgrammatic: Object(i.d)(e, {
						commentsPageKey: n
					})
				}
			})(e => {
				var {
					canShowAd: t,
					postId: s,
					commentsPageKey: n
				} = e, r = l(e, ["canShowAd", "postId", "commentsPageKey"]);
				return t ? o.a.createElement(d.a, r) : null
			})
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				i = s("./src/reddit/components/SidebarFooter/index.m.less"),
				c = s.n(i);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = r.a.a("Link", c.a);
			t.a = e => o.a.createElement(a.a, {
				className: c.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, o.a.createElement("div", {
				className: c.a.LinkContainer
			}, o.a.createElement("div", {
				className: c.a.Column
			}, o.a.createElement(l, {
				href: "https://www.reddithelp.com"
			}, d._("help", null, {
				hk: "4lyYaD"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/mobile/download"
			}, d._("Reddit App", null, {
				hk: "1ehrjP"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/coins"
			}, d._("Reddit coins", null, {
				hk: "32iMaN"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/premium"
			}, d._("Reddit premium", null, {
				hk: "RuO3A"
			})), o.a.createElement(l, {
				href: "http://redditgifts.com/"
			}, d._("Reddit gifts", null, {
				hk: "2XziRN"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, d._("Communities", null, {
				hk: "3CJu37"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/posts/a-1/"
			}, d._("Top Posts", null, {
				hk: "2NOEW2"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/topics/a-1/"
			}, d._("Topics", null, {
				hk: "349RFt"
			}))), o.a.createElement("div", {
				className: c.a.Column
			}, o.a.createElement(l, {
				href: "https://about.reddit.com"
			}, d._("about", null, {
				hk: "1sqJKs"
			})), o.a.createElement(l, {
				href: "https://about.reddit.com/careers/"
			}, d._("careers", null, {
				hk: "26ABvc"
			})), o.a.createElement(l, {
				href: "https://about.reddit.com/press/"
			}, d._("press", null, {
				hk: "2Qmgdz"
			})), o.a.createElement(l, {
				href: "https://www.redditinc.com/advertising"
			}, d._("advertise", null, {
				hk: "Mt40U"
			})), o.a.createElement(l, {
				href: "http://www.redditblog.com/"
			}, d._("blog", null, {
				hk: "46IQJw"
			})), o.a.createElement(l, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, d._("Terms", null, {
				hk: "4qRzfE"
			})), o.a.createElement(l, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, d._("Content policy", null, {
				hk: "1DyxZS"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/help/privacypolicy"
			}, d._("Privacy policy", null, {
				hk: "10K04G"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, d._("Mod policy", null, {
				hk: "2gYc2T"
			})))), o.a.createElement("div", {
				className: c.a.Copyright
			}, d._("Reddit Inc © {year}. All rights reserved", [d._param("year", (new Date).getFullYear().toString())], {
				hk: "4BrCkA"
			})))
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", o.a)
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
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/lodash/throttle.js"),
				r = s.n(o),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/i18n/components.tsx"),
				m = s("./src/reddit/components/BackToTop/index.m.less"),
				p = s.n(m),
				u = e => i.a.createElement("div", {
					className: Object(n.a)(e.className, p.a.container),
					style: e.style
				}, i.a.createElement(d.f, {
					className: p.a.button,
					onClick: () => window.scroll(0, 0)
				}, i.a.createElement(l.c, null, "Back to top"))),
				h = s("./src/reddit/components/SidebarFooter/index.tsx"),
				b = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				v = s.n(x),
				f = s("./src/lib/lessComponent.tsx");

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var O = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const E = c.e[1] + 24,
				y = b.f + 8 + 152 + 32 + 16,
				j = y + E + 8,
				_ = f.a.div("Container", v.a),
				w = f.a.wrapped(e => {
					var {
						className: t
					} = e, s = O(e, ["className"]);
					return i.a.createElement(u, C({
						className: t,
						style: {
							top: "calc(100vh - ".concat(40, "px)")
						}
					}, s))
				}, "BackToTop", v.a),
				P = e => {
					let {
						children: t,
						className: s,
						isSticky: o
					} = e;
					return i.a.createElement("div", {
						className: Object(n.a)(s, {
							[v.a.StickyStyles]: o
						})
					}, t)
				};
			class k extends a.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > j,
						shouldFooterSticky: this.windowHeight > y
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
					}, c.G), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
							hideFooter: n
						}
					} = this, o = this.state.isAdSticky && !(!e && !t);
					return i.a.createElement(_, {
						className: s,
						innerRef: this.setWrapperRef
					}, i.a.createElement(P, {
						isSticky: o
					}, e, t, !n && i.a.createElement(h.a, null)), !this.props.hideBackToTop && i.a.createElement(w, null))
				}
			}
			const I = Object(g.t)();
			t.a = I(k)
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/getShortenedLink.ts"),
				i = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				d = s("./src/reddit/components/SourceLink/index.m.less"),
				l = s.n(d),
				m = s("./src/lib/lessComponent.tsx");
			const p = m.a.wrapped(c.a, "OutboundLinkIcon", l.a),
				u = m.a.div("SourceLinkWrapper", l.a);
			t.a = e => {
				const {
					className: t,
					post: s,
					isCommentsPage: n
				} = e, {
					source: c,
					isSponsored: d
				} = s;
				return c ? o.a.createElement(u, {
					className: Object(r.a)({
						[l.a["m-comment"]]: n
					}, t)
				}, o.a.createElement(i.a, {
					href: c.url,
					isSponsored: d,
					source: c
				}, Object(a.a)(s), o.a.createElement(p, null))) : null
			}
		},
		"./src/reddit/components/SubredditNav/index.m.less": function(e, t, s) {
			e.exports = {
				metaNavLink: "_3K8jBMDp0QPnKaJK8FVP6a",
				navLinkStyles: "_2NJL-agPg8YnfLMLdMbED5",
				subNavTitle: "_2wtKbmW1aPrT3MyHoaupQh",
				navLink: "_1O30sSXmfkKMRZqSaESf0S",
				topBannerVariant: "uGdFXCHH-nwVp4gU3UaTw",
				mActive: "_1YpJV_aDQqujwuofx9-eAX",
				navDropdownIcon: "_3u_CcXw7slod9vNJKIlYvx",
				subNavLink: "_1p4TpHzWWRAkGYYw9_jU-B",
				subNavContainer: "hcJJEc0gVBKH5pWCFgdET",
				subNavList: "_1T423RClx-mTPxfuiCw4UN",
				mIsOpen: "_2azsE3I8rle1m5FBqLLHpN",
				outerContainer: "_1gVVmSnHZpkUgVShsn7-ua",
				innerContainer: "_1_TJAX-8zAT3vVN1Iz7cys"
			}
		},
		"./src/reddit/components/SubredditNav/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/featureFlags/component.tsx"),
				l = s("./src/reddit/selectors/user.ts"),
				m = s("./src/reddit/selectors/widgets.ts"),
				p = s("./src/reddit/actions/subreddit.ts"),
				u = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/react-router-dom/esm/react-router-dom.js")),
				h = s("./src/lib/classNames/index.ts"),
				b = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				g = s("./src/reddit/components/SubredditNav/index.m.less"),
				x = s.n(g);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var f = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const C = (e, t, s) => Object(h.a)(e, {
					[x.a.mActive]: t
				}, {
					[x.a.topBannerVariant]: s
				}),
				O = e => {
					var {
						children: t,
						isActive: s,
						isTopBannerVariant: n
					} = e, r = f(e, ["children", "isActive", "isTopBannerVariant"]);
					return o.a.createElement("div", v({
						className: C(x.a.subNavTitle, s, n)
					}, r), o.a.createElement("span", null, t), o.a.createElement(b.b, {
						className: x.a.navDropdownIcon
					}))
				},
				E = e => {
					var {
						className: t,
						isActive: s,
						to: n,
						isTopBannerVariant: r
					} = e, a = f(e, ["className", "isActive", "to", "isTopBannerVariant"]);
					const i = C(x.a.navLink, s, r);
					return n ? o.a.createElement(u.a, v({
						className: i,
						to: n
					}, a)) : o.a.createElement("a", v({
						className: i
					}, a))
				},
				y = e => {
					var {
						className: t,
						isActive: s
					} = e, n = f(e, ["className", "isActive"]);
					return o.a.createElement(u.a, v({
						className: C(x.a.navLink, s)
					}, n))
				},
				j = e => {
					var {
						className: t,
						isActive: s
					} = e, n = f(e, ["className", "isActive"]);
					return o.a.createElement("a", v({
						className: C(x.a.subNavLink, s)
					}, n))
				},
				_ = e => {
					var {
						className: t
					} = e, s = f(e, ["className"]);
					return o.a.createElement("div", v({
						className: Object(h.a)(x.a.subNavContainer, t)
					}, s))
				},
				w = e => {
					var {
						className: t,
						isOpen: s
					} = e, n = f(e, ["className", "isOpen"]);
					return o.a.createElement("div", v({
						className: Object(h.a)(x.a.subNavList, t, {
							[x.a.mIsOpen]: s
						})
					}, n))
				},
				{
					fbt: P
				} = s("./node_modules/fbt/lib/FbtPublic.js");
			const k = Object(a.c)({
				isActive: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
				subreddit: (e, t) => e.subreddits.models[t.subredditId]
			});
			var I = Object(c.t)()(Object(r.b)(k, (e, t) => ({
					onTurnOnMetaFilter: () => e(Object(p.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))((function(e) {
					const {
						pageLayer: t,
						subreddit: s
					} = e;
					return s ? o.a.createElement(y, {
						className: x.a.metaNavLink,
						to: s.url,
						isActive: e.isActive,
						onClick: s => {
							Object(c.E)(t) && s.preventDefault(), e.onTurnOnMetaFilter()
						}
					}, P._("Polls", null, {
						hk: "1vWsZx"
					})) : null
				}))),
				S = s("./src/lib/linkMatchers/index.ts");
			class T extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isOpen: !1
					}, this.handleOpen = e => this.setState(() => ({
						isOpen: !0
					})), this.handleClose = e => this.setState(() => ({
						isOpen: !1
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return o.a.createElement(_, {
						onClick: this.handleOpen,
						onMouseLeave: this.handleClose
					}, o.a.createElement(O, {
						isActive: e.isActive,
						isTopBannerVariant: e.isTopBannerVariant
					}, e.label), o.a.createElement(w, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var N = T;
			const L = e => {
				const t = e.url && Object(S.g)(S.e, e.url);
				return t ? t.url : e.url
			};
			var M = e => e.menuItem.url ? o.a.createElement(E, {
					href: L(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : o.a.createElement(N, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => o.a.createElement(j, {
					key: "".concat(e.text, "-").concat(L(e)),
					role: "listitem",
					href: L(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				R = s("./src/lib/constants/index.ts"),
				F = s("./src/reddit/i18n/components.tsx");
			const A = Object(c.t)(),
				B = [R.zb.SUBREDDIT, R.zb.COMMENTS, R.zb.COLLECTION_COMMENTS],
				D = Object(a.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && B.indexOf(t.pageLayer.meta.name) > -1
				});
			var W = A(Object(r.b)(D, (e, t) => ({
					onTurnOffMetaFilter: () => e(Object(p.p)({
						subredditId: t.subredditId,
						forceState: !1
					}))
				}))((function(e) {
					const {
						homeUrl: t,
						isMetaFilterEnabled: s,
						isPostsRoute: n,
						isTopBannerVariant: r,
						onTurnOffMetaFilter: a
					} = e, i = n && !s;
					return o.a.createElement(E, {
						to: t,
						isActive: i,
						isTopBannerVariant: r,
						onClick: e => {
							s && (e.preventDefault(), a())
						}
					}, o.a.createElement(F.c, null, "Posts"))
				}))),
				H = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				V = s("./src/higherOrderComponents/makeAsync.tsx");
			var U = Object(V.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("HarbergerTaxBannerPurchaseCTA").then(s.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx")).then(e => e.default)
				}),
				G = s("./src/reddit/constants/postLayout.ts"),
				K = s("./src/reddit/constants/screenWidths.ts"),
				z = s("./src/reddit/models/Theme/index.ts"),
				J = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				q = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const Y = Object(H.a)(e => {
				var {
					className: t,
					children: s,
					isTopBannerVariant: n
				} = e, r = q(e, ["className", "children", "isTopBannerVariant"]);
				const a = Object(J.a)(r);
				return o.a.createElement("div", {
					className: Object(h.a)(x.a.outerContainer, t),
					style: {
						position: a.navBar.useOverlay && !n ? "absolute" : "static",
						background: n ? "inherit" : Object(z.g)(a.navBar.backgroundColor, a.navBar.backgroundImage, "tiled")
					}
				}, s)
			});
			var X = e => o.a.createElement(Y, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, o.a.createElement("div", {
					className: x.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === G.g.Large ? "".concat(e.maxWidth || K.a, "px") : "100%"
					}
				}, o.a.createElement("div", null, e.children), o.a.createElement(U, null))),
				Q = s("./src/reddit/components/Translated/index.tsx"),
				Z = s("./src/reddit/constants/wiki.ts"),
				$ = s("./src/reddit/helpers/trackers/subredditWiki.ts");
			var ee = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: s,
					pageLayer: n
				} = e, r = !!n && !!n.meta && n.meta.name === R.zb.SUBREDDIT_WIKI, a = "wiki/".concat(Z.i), i = t.endsWith("/") ? t + a : "".concat(t, "/").concat(a);
				return o.a.createElement(E, {
					isActive: r,
					isTopBannerVariant: s,
					to: i,
					onClick: () => e.sendEvent(Object($.g)())
				}, o.a.createElement(Q.a, {
					msgId: "structuredStyles.forms.menuLinks.wikiHomeLinkLabel"
				}))
			};
			const te = Object(d.a)("spPolls", I),
				se = Object(c.t)(),
				ne = Object(a.c)({
					language: l.O,
					layout: c.L,
					widget: m.f
				}),
				oe = Object(r.b)(ne);
			t.a = se(oe(Object(i.b)(e => o.a.createElement(X, {
				className: e.subredditNavContainerClassName,
				isTopBannerVariant: e.isTopBannerVariant,
				layout: e.layout,
				disableFullscreen: e.disableFullscreen,
				maxWidth: e.maxWidth
			}, e.subredditId && o.a.createElement(o.a.Fragment, null, o.a.createElement(W, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				subredditId: e.subredditId
			}), o.a.createElement(te, {
				subredditId: e.subredditId
			})), e.widget && o.a.createElement(o.a.Fragment, null, e.widget.showWiki && o.a.createElement(ee, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				pageLayer: e.pageLayer,
				sendEvent: e.sendEvent
			}), !!e.widget.data.length && e.widget.data.map((t, s) => o.a.createElement(M, {
				isActive: !1,
				isTopBannerVariant: e.isTopBannerVariant,
				key: s,
				menuItem: t
			})))))))
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
				return w
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/reddit/constants/elementClassNames.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				m = s("./src/reddit/components/SubscribeButton/Base.m.less"),
				p = s.n(m),
				u = s("./src/lib/classNames/index.ts"),
				h = s("./src/lib/lessComponent.tsx");

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const x = h.a.button("IconButton", p.a),
				v = h.a.wrapped(d.a, "SubscribeIcon", p.a),
				f = h.a.wrapped(c.a, "UnsubscribeIcon", p.a),
				C = h.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, n = g(e, ["border", "small"]);
					return r.a.createElement(x, n, r.a.createElement(v, {
						className: Object(u.a)(n.className, {
							[p.a.isSmall]: s
						})
					}))
				}, "SubscribeIconButton", p.a),
				O = h.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, n = g(e, ["border", "small"]);
					return t ? r.a.createElement(i.f, b({}, n, {
						className: Object(u.a)(n.className, {
							[p.a.isSmall]: s
						})
					})) : r.a.createElement(i.n, b({}, n, {
						className: Object(u.a)(n.className, {
							[p.a.isSmall]: s
						})
					}))
				}, "SubscribeInternalButton", p.a),
				E = e => {
					var {
						icon: t
					} = e, s = g(e, ["icon"]);
					return t ? r.a.createElement(C, b({}, s, {
						className: Object(u.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					})) : r.a.createElement(O, b({}, s, {
						className: Object(u.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					}))
				},
				y = h.a.wrapped(e => {
					var {
						border: t,
						language: s,
						small: n,
						type: o
					} = e, i = g(e, ["border", "language", "small", "type"]);
					return r.a.createElement(x, i, r.a.createElement(f, {
						className: Object(u.a)(a.n, i.className, {
							[p.a.isSmall]: n
						})
					}))
				}, "UnsubscribeIconButton", p.a),
				j = h.a.wrapped(e => {
					var {
						border: t,
						language: s,
						small: o,
						type: a
					} = e, c = g(e, ["border", "language", "small", "type"]);
					const d = r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
							className: p.a.UnsubscribeButtonDefault
						}, "subreddit" === a ? n.fbt._("Joined", null, {
							hk: "1MTmIz"
						}) : n.fbt._("Following", null, {
							hk: "1wQlVR"
						})), r.a.createElement("span", {
							className: p.a.UnsubscribeButtonHover
						}, "subreddit" === a ? n.fbt._("Leave", null, {
							hk: "2lLnnn"
						}) : n.fbt._("Unfollow", null, {
							hk: "2b5ERD"
						}))),
						l = Object(u.a)(c.className, {
							[p.a.isSmall]: o
						});
					return t ? r.a.createElement(i.i, b({}, c, {
						className: l,
						children: d
					})) : r.a.createElement(i.n, b({}, c, {
						className: l,
						children: d
					}))
				}, "UnsubscribeButton", p.a),
				_ = e => {
					var {
						icon: t
					} = e, s = g(e, ["icon"]);
					return t ? r.a.createElement(y, b({}, s, {
						className: Object(u.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					})) : r.a.createElement(j, b({}, s, {
						className: Object(u.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					}))
				};
			class w extends r.a.Component {
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
						id: n,
						language: o,
						small: a = !1
					} = this.props, i = {
						border: e,
						className: t,
						icon: s,
						onClick: this.onClick,
						small: a
					};
					return this.props.userIsSubscriber ? r.a.createElement(_, b({}, i, {
						language: o,
						type: this.props.identifier.type
					})) : r.a.createElement(E, b({}, i, {
						id: n
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				a = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				m = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				p = s.n(m),
				u = s("./src/lib/classNames/index.ts"),
				h = s("./src/lib/lessComponent.tsx");

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const x = h.a.wrapped(e => {
					var {
						small: t,
						shouldReverseColor: s
					} = e, n = g(e, ["small", "shouldReverseColor"]);
					const r = s ? i.i : i.f;
					return o.a.createElement(r, b({}, n, {
						className: Object(u.a)(n.className, {
							[p.a.isLarge]: !t
						})
					}))
				}, "SubscribeInternalButton", p.a),
				v = h.a.wrapped(e => {
					var {
						small: t,
						belongsToType: s,
						shouldReverseColor: n
					} = e, r = g(e, ["small", "belongsToType", "shouldReverseColor"]);
					const a = n ? i.f : i.i;
					return o.a.createElement(a, b({}, r, {
						className: Object(u.a)(r.className, {
							[p.a.isLarge]: !t
						})
					}))
				}, "UnsubscribeButton", p.a),
				f = h.a.wrapped(c.a, "Checkmark", p.a),
				C = h.a.wrapped(d.a, "Plus", p.a),
				O = h.a.div("ButtonSpacer", p.a);
			class E extends o.a.Component {
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
							language: n,
							onSubscribe: r,
							onUnsubscribe: a,
							postId: i,
							sendEvent: c,
							small: d = !1,
							userIsSubscriber: m,
							doNotHideOtherSubscribeButtons: h,
							getEventFactory: E,
							onSubscriptionsRequested: y
						} = e,
						j = g(e, ["className", "identifier", "language", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
						_ = this.state.isHovered;
					let w = m ? "subscribed" : "subscribe";
					m && _ && (w = "unsubscribe");
					const P = Object(l.a)({
						type: s.type,
						key: w
					});
					return m ? this.state.hasJustSubscribed || h ? o.a.createElement(v, b({
						className: Object(u.a)(t, {
							[p.a.isLarge]: !d,
							[p.a.unsubscribeButtonHoverStyles]: !d
						}),
						onClick: this.onClick,
						small: d,
						belongsToType: s.type,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, j), d && o.a.createElement(f, null), !d && !_ && o.a.createElement(f, null), !d && P) : d ? null : o.a.createElement(O, null) : o.a.createElement(o.a.Fragment, null, o.a.createElement(x, b({
						className: Object(u.a)(t, {
							[p.a.isLarge]: !d
						}),
						onClick: this.onClick,
						small: d
					}, j, {
						id: "subscribe-button-".concat(i),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}), o.a.createElement(C, null), !d && P))
				}
			}
			t.a = Object(a.a)(Object(r.b)(E))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			const o = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				r = {
					subredditActions: {
						subscribe: () => n.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => n.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => n.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => n.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => n.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => n.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				a = e => {
					let {
						type: t,
						key: s
					} = e;
					return r[o({
						type: t
					})][s]()
				}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/TrackingHelper/index.tsx"),
				o = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				r = s("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(o.a)(Object(n.b)(r.a))
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
		"./src/reddit/components/Widgets/AdRules/index.m.less": function(e, t, s) {
			e.exports = {
				Rule: "_3NwusXLUvLTrYmCFOYpDIA",
				rule: "_3NwusXLUvLTrYmCFOYpDIA",
				RuleIndex: "McQvObPSnfCkWc6C-ti6P",
				ruleIndex: "McQvObPSnfCkWc6C-ti6P",
				RuleTitle: "_2-jOphPs-FiWN_Da514451",
				ruleTitle: "_2-jOphPs-FiWN_Da514451"
			}
		},
		"./src/reddit/components/Widgets/AdRules/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				i = s("./src/reddit/i18n/utils.ts"),
				c = s("./src/reddit/components/Widgets/AdRules/index.m.less"),
				d = s.n(c);
			const l = r.a.div("Rule", d.a),
				m = r.a.div("RuleIndex", d.a),
				p = r.a.div("RuleTitle", d.a),
				u = ["Keep language civil", "Comments must be relevant to the Promoted Post and contribute to discussion", "Comments can offer feedback or criticism, but personal or other attacks on the advertiser or its products may be removed", "No impersonating or masquerading as celebrities, brands, or other users. To verify yourself in a Promoted Post's thread, message the user promoting the post"];
			t.a = e => o.a.createElement(a.a, {
				className: e.className,
				title: Object(i.c)("Rules for Reddit Ads"),
				redditStyle: !0
			}, u.map((e, t) => o.a.createElement(l, {
				key: t
			}, o.a.createElement(m, null, t + 1, "."), o.a.createElement(p, null, Object(i.c)(e)))))
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/SEOTitle/index.tsx"),
				i = s("./src/reddit/components/Widgets/Base/index.m.less"),
				c = s.n(i),
				d = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const l = r.a.div("WidgetBackground", c.a),
				m = r.a.wrapped(e => {
					var {
						children: t
					} = e, s = d(e, ["children"]);
					return o.a.createElement("div", s, o.a.createElement(a.b, {
						type: a.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => o.a.createElement("div", {
				className: e.className
			}, o.a.createElement(l, null, e.children))
		},
		"./src/reddit/components/Widgets/Button/index.m.less": function(e, t, s) {
			e.exports = {
				RawHTMLDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				rawHtmlDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				imageButton: "_1dcH2atgEZb6EIz1hPypif",
				textButton: "_3VvVLJHakguGRWc5JxUX40",
				textButtonHoverText: "_1csPJVJm94zTUzhy65Kbxo",
				vanishingTextButtonText: "_2rUZkzEG2dvopABpvgI8Zx"
			}
		},
		"./src/reddit/components/Widgets/Calendar/index.m.less": function(e, t, s) {
			e.exports = {
				RawHTMLDisplay: "_7Td52eDF6kOI7wbyoOGJV",
				rawHtmlDisplay: "_7Td52eDF6kOI7wbyoOGJV",
				EventContainer: "_1HzK-HxwbuIwNX-GXaBGDW",
				eventContainer: "_1HzK-HxwbuIwNX-GXaBGDW",
				EventTitle: "cCvnKc1bpNZv2J-DkHYuZ",
				eventTitle: "cCvnKc1bpNZv2J-DkHYuZ",
				EventDate: "_2VXwUwmJin6h1Pov4foGGE",
				eventDate: "_2VXwUwmJin6h1Pov4foGGE",
				EventLocation: "_3GYOq7iFgxtdLjpjVzjwko",
				eventLocation: "_3GYOq7iFgxtdLjpjVzjwko",
				EventDescription: "_2ZLwdDhx3dBm-ZVn7MXBYA",
				eventDescription: "_2ZLwdDhx3dBm-ZVn7MXBYA",
				ToggleDescription: "J6pcR7wS5Fc3tWloQuCxS",
				toggleDescription: "J6pcR7wS5Fc3tWloQuCxS"
			}
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/app/strings/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Flair/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/index.tsx"),
				u = s("./src/reddit/actions/subscription/index.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const b = Object(i.c)({
				language: h.O
			});
			var g = Object(r.b)(b, (e, t) => {
					const s = t.widget.id || void 0;
					return {
						onSubscribe: () => e(u.d([t.identifier], !0, s)),
						onSubscriptionsRequested: () => e(u.e()),
						onUnsubscribe: () => e(u.d([t.identifier], !1, s))
					}
				})(s("./src/reddit/components/SubscribeButton/Base.tsx").a),
				x = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				v = s("./src/reddit/constants/componentSizes.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				C = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				O = s("./src/reddit/i18n/utils.ts"),
				E = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				y = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				j = s("./src/reddit/models/Flair/index.ts"),
				_ = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				w = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				P = s.n(w);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "b", (function() {
				return I
			})), s.d(t, "a", (function() {
				return T
			}));
			const I = e => o.a.createElement(x.a, {
					className: Object(d.a)(P.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, o.a.createElement("div", {
					className: P.a.container
				}, e.isLoading ? o.a.createElement(C.a, {
					className: P.a.loadingIcon,
					sizePx: 32
				}) : o.a.createElement(o.a.Fragment, null, e.isError ? o.a.createElement("p", {
					className: P.a.errorMsg
				}, e.errorMsg || Object(O.c)("Something went wrong.")) : o.a.createElement(o.a.Fragment, null, e.communities.map(t => o.a.createElement(T, k({
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
				})))), e.bottomButtonText && e.onBottomButtonClick && o.a.createElement(f.n, {
					className: P.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				S = Object(i.c)({
					hideNSFWPref: h.y,
					language: h.O
				}),
				T = Object(r.b)(S)(e => o.a.createElement("div", {
					className: P.a.communityItemContainer
				}, o.a.createElement(y.a, {
					widthRight: v.t
				}, o.a.createElement("div", {
					className: P.a.iconContainer
				}, e.communityIcon || e.iconUrl ? o.a.createElement("img", {
					className: P.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : o.a.createElement(E.a, {
					className: P.a.planetIcon,
					"data-redditstyle": !0
				})), o.a.createElement("div", {
					className: P.a.communityDescriptionContainer
				}, o.a.createElement(a.a, {
					className: P.a.communityName,
					to: Object(_.a)(e.name, e.type),
					onClick: e.onCommunityNameClick
				}, Object(_.b)(e.name, e.type)), o.a.createElement("div", {
					className: P.a.communityInfoContainer
				}, !!e.subscribers && o.a.createElement("p", {
					className: P.a.subscriberCount
				}, Object(c.b)(e.language, "listings.subscribers", e.subscribers, {
					count: Object(l.b)(e.subscribers)
				})), e.isNSFW && o.a.createElement(m.b, {
					flair: {
						type: j.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? o.a.createElement(C.a, {
					className: Object(d.a)(P.a.communityCta, P.a.smallLoadingIcon),
					sizePx: 12
				}) : o.a.createElement(f.n, {
					className: Object(d.a)(P.a.communityCta, {
						[P.a.showOnHover]: e.showTertiaryButtonOnHover
					}),
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? o.a.createElement(g, {
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
				}) : o.a.createElement(p.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && o.a.createElement("p", {
					title: e.description,
					className: P.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/posts.ts"),
				o = s("./src/reddit/helpers/name/index.ts");

			function r(e, t) {
				return (t === n.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function a(e, t) {
				return t === n.a.PROFILE ? Object(o.c)(e) : Object(o.b)(e)
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
		"./src/reddit/components/Widgets/Image/ImageFrame.m.less": function(e, t, s) {
			e.exports = {
				ImageFrame: "_3NeWg805wFgqPuE_-LZKN4",
				imageFrame: "_3NeWg805wFgqPuE_-LZKN4"
			}
		},
		"./src/reddit/components/Widgets/Image/StyledImage.m.less": function(e, t, s) {
			e.exports = {
				StyledImage: "_3WqRAmto46uhALFWnn8-Pa",
				styledImage: "_3WqRAmto46uhALFWnn8-Pa"
			}
		},
		"./src/reddit/components/Widgets/Moderator/index.m.less": function(e, t, s) {
			e.exports = {
				ModeratorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				moderatorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				Username: "ULWj94BYSOqoJDetxgcnU",
				username: "ULWj94BYSOqoJDetxgcnU",
				MessageModsLink: "_3qzNYRLcf8lEELXhDHff5z",
				messageModsLink: "_3qzNYRLcf8lEELXhDHff5z",
				FlairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				flairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				InternalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				internalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				LinkContainer: "_2pf-KRzaHwj_TjBcOIDrWG",
				linkContainer: "_2pf-KRzaHwj_TjBcOIDrWG"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				DropdownRow: "JoWBeMWu_l8J_Hn6Udz_j",
				dropdownRow: "JoWBeMWu_l8J_Hn6Udz_j"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/noop.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-redux/es/index.js"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/postCollection/index.ts"),
				u = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				h = s("./src/reddit/components/OverflowMenu/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/controls/Dropdown/Row.tsx"),
				x = s("./src/reddit/selectors/activeModalId.ts"),
				v = s("./src/reddit/selectors/postCollection.ts"),
				f = s("./node_modules/reselect/es/index.js"),
				C = s("./src/reddit/helpers/trackers/postCollection.ts"),
				O = s("./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.m.less"),
				E = s.n(O),
				y = s("./node_modules/fbt/lib/FbtPublic.js");
			const j = d.a.wrapped(g.b, "DropdownRow", E.a);
			let _;
			const w = Object(x.b)("DELETE_COLLECTION_CONFM_MODAL_ID"),
				P = Object(x.b)("EDIT_POST_COLLECTION_MODAL_ID"),
				k = Object(f.c)({
					createPostUrl: v.d,
					isDeleteConfirmModalOpen: w,
					isEditCollectionModalOpen: P,
					shouldShowCollectionEditOptions: v.s
				}),
				I = Object(i.b)(k, (e, t) => ({
					copyLink: () => e(Object(m.C)(t.permalink)),
					onCreatePost: s => {
						t.shouldShowCreatePost && e(Object(c.b)(s))
					},
					onRemoveCollection: () => e(Object(p.c)(t.collectionId, t.isSubmitPage)),
					onToggleDeleteConfirmModal: () => e(l.i("DELETE_COLLECTION_CONFM_MODAL_ID")),
					onToggleEditModal: async () => {
						_ || (_ = await Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("editCollectionModal")]).then(s.bind(null, "./src/reddit/components/EditCollectionModal/index.tsx")).then(e => e.EditCollectionModal)), e(l.i("EDIT_POST_COLLECTION_MODAL_ID"))
					}
				}));
			t.a = I(Object(b.b)(e => {
				const {
					className: t,
					collectionId: s,
					copyLink: n,
					createPostUrl: r,
					isDeleteConfirmModalOpen: i,
					isEditCollectionModalOpen: c,
					onCreatePost: d,
					onRemoveCollection: l,
					onToggleDeleteConfirmModal: m,
					onToggleEditModal: p,
					shouldShowCollectionEditOptions: b,
					shouldShowCreatePost: g,
					targetPosition: x,
					tooltipPosition: v,
					sendEvent: f
				} = e;
				return a.a.createElement(a.a.Fragment, null, a.a.createElement(h.b, {
					className: t,
					dropdownId: "collection-menu-".concat(s, "-").concat(g ? 1 : 2),
					onClick: o.a,
					targetPosition: x,
					tooltipPosition: v
				}, a.a.createElement(j, {
					onClick: n,
					displayText: y.fbt._("Copy collection link", null, {
						hk: "3Rfodz"
					})
				}), b && a.a.createElement(a.a.Fragment, null, a.a.createElement(j, {
					onClick: () => {
						f(Object(C.l)(s)), p()
					},
					displayText: y.fbt._("Edit", null, {
						hk: "2ehqo8"
					})
				}), a.a.createElement(j, {
					onClick: () => {
						f(Object(C.k)(s)), m()
					},
					displayText: y.fbt._("Delete collection", null, {
						hk: "2FyIJB"
					})
				}), g && a.a.createElement(j, {
					onClick: () => {
						d(r)
					},
					displayText: y.fbt._("Create post", null, {
						hk: "1v2jHl"
					})
				}))), c && _ && a.a.createElement(_, {
					collectionId: s,
					onClose: p,
					onEditSuccess: p
				}), i && a.a.createElement(u.a, {
					actionText: y.fbt._("Yes, Delete", null, {
						hk: "15Espn"
					}),
					headerText: y.fbt._("Delete Collection", null, {
						hk: "1QJ3as"
					}),
					modalText: y.fbt._("Are you sure you want to delete this collection? The posts within the collection won't be deleted.", null, {
						hk: "36jKp5"
					}),
					onConfirm: l,
					toggleModal: m,
					trackClick: o.a
				}))
			}))
		},
		"./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				DropdownRow: "_3V8ByF4idIiROiWQ9i468R",
				dropdownRow: "_3V8ByF4idIiROiWQ9i468R"
			}
		},
		"./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/noop.js"),
				r = s.n(o),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/lib/opener/index.ts"),
				l = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				m = s("./src/reddit/components/OverflowMenu/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/Row.tsx"),
				u = s("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.m.less"),
				h = s.n(u);
			const b = c.a.wrapped(p.b, "DropdownRow", h.a);
			t.a = e => {
				const {
					isFutureEvent: t,
					onAddEventStartTime: s,
					onEditStartTime: o,
					onStartEventNow: a,
					postPermalink: c,
					shouldShowAddEventStartTime: p,
					targetPosition: u,
					tooltipPosition: h
				} = e;
				return i.a.createElement(m.b, {
					className: e.className,
					dropdownId: e.dropdownId,
					onClick: r.a,
					targetPosition: u,
					tooltipPosition: h
				}, p && s && i.a.createElement(b, {
					onClick: s,
					displayText: n.fbt._("Add event start time", null, {
						hk: "4xWttR"
					})
				}), t && a && i.a.createElement(b, {
					onClick: a,
					displayText: n.fbt._("Start event now", null, {
						hk: "2TTNfJ"
					})
				}), t && o && i.a.createElement(b, {
					onClick: o,
					displayText: n.fbt._("Edit start time", null, {
						hk: "44XUxC"
					})
				}), i.a.createElement(b, {
					onClick: e.onRemoveClick,
					displayText: n.fbt._("Remove from collection", null, {
						hk: "qsiiu"
					})
				}), c && i.a.createElement(l.a, {
					target: d.c.BLANK,
					rel: d.b,
					isOverlay: !1,
					to: c
				}, i.a.createElement(b, {
					displayText: n.fbt._("View post", null, {
						hk: "1PtvnG"
					})
				})))
			}
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
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/fastdom/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/Flair/index.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = s("./src/reddit/constants/parameters.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/helpers/correlationIdTracker.ts"),
				v = s("./src/reddit/helpers/flair.ts"),
				f = s("./src/reddit/helpers/trackers/postFlair.ts"),
				C = s("./src/reddit/models/Widgets/index.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				y = s.n(E);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var _ = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const w = 129,
				P = Object(b.t)({
					filterName: e => Object(b.Q)(e)[h.f],
					url: e => Object(b.U)(e)
				}),
				k = Object(i.c)({
					subredditId: (e, t) => Object(O.D)(e, t.subredditName)
				}),
				I = Object(a.b)(k),
				S = l.a.div("WidgetContent", y.a),
				T = e => {
					var {
						display: t,
						isFlairFilter: s,
						onMouseDown: n
					} = e, o = _(e, ["display", "isFlairFilter", "onMouseDown"]);
					return r.a.createElement("li", {
						className: Object(c.a)(y.a.StyledFlair, t === C.d.Cloud && y.a.cloudDisplay, {
							[y.a.flairFilter]: s,
							[y.a["m-selected"]]: o.isSelected
						}),
						onMouseDown: n
					}, r.a.createElement(m.b, j({}, o, {
						className: y.a.Flair,
						isFlairFilter: s,
						forceSmallEmojis: !0
					})))
				};
			class N extends r.a.Component {
				constructor(e) {
					super(e), this.flairListRef = r.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(f.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(f.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(f.d)())
					}, this.onClick = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(x.d)(x.a.SearchResults), this.props.sendEvent(Object(f.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(v.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(v.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					d.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > w && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return r.a.createElement(g.n, {
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
					return r.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => r.a.createElement(T, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(v.e)(this.props.url, Object(v.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, s = t ? w : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return r.a.createElement("div", {
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
					return r.a.createElement("ul", null, r.a.createElement(T, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(v.e)(this.props.url, Object(v.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: s
					} = this.state, n = t.order, o = this.getFlairsFromIds(n), a = e && this.getSelectedFlair(o) || void 0, i = t.order.length > n.length || s && !a;
					return r.a.createElement(u.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, r.a.createElement(S, null, a && this.renderSelectedFlairFilter(a), !a && this.renderFlairFilters(o), i && this.renderButton()))
				}
			}
			t.a = P(I(Object(p.b)(N)))
		},
		"./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less": function(e, t, s) {
			e.exports = {
				RawHTMLDisplay: "_2vztYwRKSDZV2ISjSixByA",
				rawHtmlDisplay: "_2vztYwRKSDZV2ISjSixByA",
				Chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				RuleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				ruleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				pointerCursor: "_3osxlOKfiylmgqNqsW7erB",
				RuleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				ruleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				RuleTitle: "tbIApBd2DM_drfZQJjIum",
				ruleTitle: "tbIApBd2DM_drfZQJjIum",
				RuleDescription: "_2QhEclR_DjIrTv_oNU5MMN",
				ruleDescription: "_2QhEclR_DjIrTv_oNU5MMN"
			}
		},
		"./src/reddit/components/Widgets/SubredditRules/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/app/strings/index.ts"),
				a = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				i = s("./src/reddit/connectors/connectToLanguage.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				m = s("./src/reddit/components/RichTextJson/index.tsx"),
				p = s("./src/reddit/helpers/dom/index.ts"),
				u = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				h = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				b = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				g = s("./src/reddit/models/Widgets/index.ts"),
				x = s("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				v = s.n(x);
			const f = d.a.div("RuleShortName", v.a),
				C = d.a.div("RuleIndex", v.a),
				O = d.a.div("RuleTitle", v.a),
				E = d.a.div("RuleDescription", v.a),
				y = d.a.wrapped(l.a, "RawHTMLDisplay", v.a),
				j = {};
			class _ extends o.a.Component {
				constructor(e) {
					super(e), this.onClick = () => {
						Object(p.f)() || this.setState({
							isVisible: !this.state.isVisible
						})
					}, this.state = {
						isVisible: this.shouldShowFullDisplay(e)
					}
				}
				shouldShowFullDisplay(e) {
					return e.display === g.e.FULL
				}
				render() {
					const {
						props: e,
						state: t,
						onClick: s,
						shouldShowFullDisplay: n
					} = this, r = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), a = !n(e) && !!r;
					return o.a.createElement(f, {
						className: Object(c.a)({
							[v.a.pointerCursor]: a
						}),
						onClick: n(e) || !r ? void 0 : s
					}, o.a.createElement(b.a, null, o.a.createElement(C, null, "".concat(e.humanIndex, ".")), o.a.createElement(O, null, "".concat(e.rule.shortName)), o.a.createElement("div", null, !n(e) && r && (t.isVisible ? o.a.createElement(h.a, {
						className: v.a.Chevron
					}) : o.a.createElement(u.a, {
						className: v.a.Chevron
					})))), t.isVisible && o.a.createElement(E, null, e.rule.descriptionRichText ? o.a.createElement(m.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: j
					}) : e.rule.descriptionHtml ? o.a.createElement(y, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			s.d(t, "a", (function() {
				return w
			}));
			const w = Object(i.a)(e => e.rules.length > 0 ? o.a.createElement(a.a, {
				className: e.className,
				styles: e.styles,
				title: Object(r.a)(e.language, "structuredStyles.widgets.subreddit-rules.subredditRules", {
					subreddit: e.subredditName
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, s) {
				return o.a.createElement(_, {
					key: "rule".concat(t.shortName).concat(t.createdUtc),
					rule: t,
					display: e.display,
					humanIndex: s + 1
				})
			}))) : null);
			t.b = e => o.a.createElement(w, {
				rules: e.widget.data || [],
				subredditName: e.subredditName,
				display: e.widget.display,
				redditStyle: e.redditStyle,
				styles: e.widget.styles
			})
		},
		"./src/reddit/components/Widgets/TextArea/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				widgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				RawHTMLDisplay: "_1-yyC7m50efEvz4Q5I7jn5",
				rawHtmlDisplay: "_1-yyC7m50efEvz4Q5I7jn5"
			}
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/selectors/telemetry.ts");
			const h = (e, t) => s => Object.assign({
				source: "community_widgets",
				action: "click",
				noun: "see_more",
				widget: Object(u.widget)(s, {
					subredditId: e,
					widgetKind: t
				})
			}, u.defaults);
			var b = s("./src/reddit/i18n/components.tsx"),
				g = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				x = s("./src/reddit/selectors/experiments/topPosts.ts"),
				v = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/models/Theme/index.ts"),
				O = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const E = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(O.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				y = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(O.a)(e).widgetColors.sidebarWidgetHeaderColor,
				j = e => {
					const t = E(e);
					return Object(C.f)(t)
				},
				_ = e => {
					const t = y(e);
					return Object(C.f)(t)
				};
			var w = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				P = s.n(w);
			const k = Object(m.t)(),
				I = Object(r.b)(() => Object(a.c)({
					forceRedditStyle: (e, t) => {
						const s = Object(m.m)(e, t) || void 0,
							n = t.redditStyle || Object(v.m)(e, {
								subredditId: s
							}),
							o = Object(f.Q)(e);
						return n || o
					},
					nigtmode: f.Q,
					subredditId: m.m,
					topPostVariant: x.d
				}));
			class S extends o.a.Component {
				constructor() {
					super(...arguments), this.contentRef = o.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(h(e, t)), this.setState({
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
					return e.backgroundColor = E(this.props), e.borderColor = Object(g.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = j(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = y(this.props), e.color = e.fill = _(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: r,
						onClick: a,
						title: c,
						titleClassName: l,
						truncateThreshold: m
					} = this.props, u = s ? P.a.widgetContentOnly : P.a.widgetContent, h = !n && this.props.styles, g = h ? this.getWidgetBackgroundStyles() : {}, x = h ? this.getWidgetHeaderStyles() : {};
					return o.a.createElement("div", {
						className: Object(i.a)(t, P.a.widgetBackground, {
							[P.a.redditStyle]: n,
							[P.a.clickable]: !!a,
							[P.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: a,
						style: g
					}, c && o.a.createElement("div", {
						className: P.a.widgetHeader,
						style: x
					}, o.a.createElement("div", {
						className: Object(i.a)(P.a.widgetTitle, l)
					}, o.a.createElement(d.b, {
						type: d.a.Widget
					}, c)), r), o.a.createElement("div", {
						className: Object(i.a)(u, {
							[P.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? m : "none"
						}
					}, e), this.state.isTruncated && o.a.createElement(p.n, {
						className: P.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, o.a.createElement(b.c, null, "See More")))
				}
			}
			t.a = k(I(Object(c.a)(Object(l.b)(S))))
		},
		"./src/reddit/components/Widgets/Widget/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				c = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/controls/OutboundLink/index.tsx"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/lib/lessComponent.tsx"),
				u = s("./src/lib/linkMatchers/index.ts"),
				h = s("./src/reddit/models/Image/index.tsx"),
				b = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = s("./src/reddit/models/Widgets/index.ts"),
				x = s("./src/reddit/selectors/structuredStyles.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/Widgets/Button/index.m.less"),
				C = s.n(f);
			const O = (e, t, s) => {
					let n = {},
						o = {};
					n = e.kind === g.f.Image ? {
						"--widget-button-background-image": "url('".concat(e.url, "')")
					} : ((e, t, s) => {
						let {
							color: n,
							fillColor: o,
							textColor: r
						} = e;
						return t && (n = r = s, o = "transparent"), {
							"--widget-button-background-color": "".concat(o || "transparent"),
							"--widget-button-border": "1px solid ".concat(n),
							"--widget-button-color": "".concat(r || n)
						}
					})(e, t, s);
					const r = e.hoverState || e;
					if (r.kind === g.f.Image) o = {
						"--widget-button-hover-background-image": "url('".concat(r.url, "')"),
						"--widget-button-hover-border": "none"
					};
					else {
						let {
							color: e,
							fillColor: n,
							textColor: a
						} = r;
						t && (e = a = s, n = "transparent"), o = {
							"--widget-button-hover-background-color": "".concat(n || "transparent"),
							"--widget-button-hover-background-image": "none",
							"--widget-button-hover-border": "1px solid ".concat(e),
							"--widget-button-hover-color": "".concat(a || e)
						}
					}
					return Object.assign({}, n, o)
				},
				E = e => e.kind === g.f.Image ? C.a.imageButton : C.a.textButton,
				y = e => {
					const t = Object(g.n)(e),
						s = Object(u.g)(u.e, t);
					return s ? s.url : e.url
				},
				j = Object(m.a)(e => {
					const {
						button: t,
						overrideColors: s
					} = e, n = Object(b.a)(e).button;
					return o.a.createElement(d.i, {
						className: E(t),
						style: O(t, s, n)
					}, t.kind === g.f.Text && o.a.createElement("span", {
						className: t.hoverState ? C.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === g.f.Text && o.a.createElement("span", {
						className: C.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				_ = e => o.a.createElement(l.a, {
					href: y(e.button),
					isSponsored: !1,
					source: null
				}, o.a.createElement(j, e)),
				w = p.a.wrapped(i.a, "RawHTMLDisplay", C.a);
			var P = Object(r.b)(() => Object(a.c)({
					forceRedditStyle: x.m,
					isNightmodeOn: v.Q
				}))(e => o.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && o.a.createElement(w, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== g.f.Image || e.url !== h.c) && (!e.hoverState || e.hoverState.kind !== g.f.Image || e.hoverState.url !== h.c)).map(t => o.a.createElement(_, {
					key: "".concat(t.text, "-").concat(t.url),
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				k = s("./src/lib/humanizeDate/index.ts"),
				I = s("./src/reddit/controls/TextButton/index.tsx"),
				S = s("./src/reddit/i18n/utils.ts"),
				T = s("./src/reddit/components/Widgets/Calendar/index.m.less"),
				N = s.n(T);
			const L = 100,
				M = {
					isExpanded: !1
				},
				R = p.a.wrapped(i.a, "RawHTMLDisplay", N.a),
				F = p.a.div("EventContainer", N.a),
				A = p.a.div("EventTitle", N.a),
				B = p.a.div("EventDate", N.a),
				D = p.a.div("EventLocation", N.a),
				W = p.a.div("EventDescription", N.a),
				H = p.a.wrapped(I.a, "ToggleDescription", N.a);
			class V extends o.a.Component {
				constructor(e) {
					super(e), this.toggleDescriptionView = () => {
						this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.state = M
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return e.text.length > L ? o.a.createElement(W, null, t.isExpanded ? e.text : e.text.slice(0, L), o.a.createElement(H, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? Object(S.c)("read less") : Object(S.c)("...read more"))) : o.a.createElement(W, null, e.text)
				}
			}
			const U = Object(a.c)({
				language: v.O
			});
			var G = Object(r.b)(U)(e => o.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, s) => o.a.createElement(F, {
					key: "".concat(s, "-").concat(t.title)
				}, o.a.createElement(A, null, t.titleHtml ? o.a.createElement(R, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && o.a.createElement(B, null, Object(k.a)(t.startTime, !0), !t.allDay && e.widget.configuration.showTime && o.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						s = t.getHours(),
						n = t.getMinutes();
					return n < 10 ? "".concat(s, ":0").concat(n) : "".concat(s, ":").concat(n)
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && o.a.createElement(D, null, t.locationHtml ? o.a.createElement(R, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && o.a.createElement(V, {
					language: e.language,
					text: t.description
				}))))),
				K = s("./src/reddit/components/TrackingHelper/index.tsx"),
				z = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var J = Object(K.b)(e => o.a.createElement(z.b, {
				className: e.className,
				communities: e.widget.data,
				sendEvent: e.sendEvent,
				title: e.widget.shortName,
				truncateThreshold: e.truncateThreshold,
				widget: e.widget
			}));
			const q = Object(a.c)({
					stylesheet: e => e.stylesheets
				}),
				Y = Object(r.b)(q),
				X = (e, t, s) => '<head>\n  <link rel="stylesheet" href="'.concat(e, '">\n  <link rel="stylesheet" href="').concat(t, '">\n  <base target="_blank">\n</head>\n<body>').concat(s, "</body>");
			class Q extends o.a.Component {
				constructor() {
					super(...arguments), this.storeRef = e => {
						this.iframe = e
					}
				}
				shouldComponentUpdate(e) {
					return (e.widget.stylesheetUrl !== this.props.widget.stylesheetUrl || e.widget.textHtml && e.widget.textHtml !== this.props.widget.textHtml) && (this.renderIframeContent(e), this.writeIFrameDocument()), e.widget.height !== this.props.widget.height
				}
				writeIFrameDocument() {
					this.iframe && this.iframe.contentWindow && void 0 !== this.iframeContent && (this.iframe.contentWindow.document.open(), this.iframe.contentWindow.document.write(this.iframeContent), this.iframe.contentWindow.document.close())
				}
				componentWillMount() {
					this.renderIframeContent(this.props)
				}
				componentDidMount() {
					this.iframe && this.iframe.contentWindow && this.iframeContent && (this.iframe.contentWindow.document.body && this.iframe.contentWindow.document.body.childNodes.length || this.writeIFrameDocument())
				}
				renderIframeContent(e) {
					e.widget.stylesheetUrl && e.widget.textHtml && (this.iframeContent = X(e.stylesheet, e.widget.stylesheetUrl, e.widget.textHtml))
				}
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement(c.a, {
						contentOnly: !0,
						truncateThreshold: e.truncateThreshold,
						widgetKind: e.widget.kind
					}, o.a.createElement("iframe", {
						ref: this.storeRef,
						width: "100%",
						height: e.widget.height || 300,
						srcDoc: this.iframeContent
					}))
				}
			}
			var Z = Y(Q),
				$ = s("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				ee = s.n($);
			var te = p.a.div("ImageFrame", ee.a),
				se = s("./src/reddit/components/Widgets/Image/StyledImage.m.less"),
				ne = s.n(se);
			var oe = p.a.img("StyledImage", ne.a);
			class re extends o.a.Component {
				constructor(e) {
					super(e), this.state = {
						imageIndex: this.getRandomIndex(e)
					}
				}
				getRandomIndex(e) {
					if (!e.widget.data.length) return -1;
					let t = Math.floor(Math.random() * e.widget.data.length);
					if (e.widget.data[t].url === h.c) {
						t = -1;
						for (let t = 0; t < e.widget.data.length; t++)
							if (e.widget.data[t].url !== h.c) return t
					}
					return t
				}
				componentWillReceiveProps(e) {
					const {
						props: t,
						state: s
					} = this;
					e.subredditName === t.subredditName && e.widget.data[s.imageIndex] && e.widget.data[s.imageIndex] === t.widget.data[s.imageIndex] || this.setState(t => ({
						imageIndex: this.getRandomIndex(e)
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					if (t.imageIndex < 0) return null;
					const s = e.widget.data[t.imageIndex],
						n = o.a.createElement(te, null, o.a.createElement(oe, {
							alt: Object(S.c)("Widget image"),
							src: s.url
						}));
					return s.linkUrl ? o.a.createElement(l.a, {
						href: s.linkUrl,
						isSponsored: !1,
						source: null
					}, n) : n
				}
			}
			var ae = re,
				ie = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				ce = s("./src/reddit/components/Flair/index.tsx"),
				de = s("./src/reddit/controls/InternalLink/index.tsx"),
				le = s("./src/reddit/icons/fonts/Envelope/index.tsx"),
				me = s("./src/reddit/models/Flair/index.ts"),
				pe = s("./src/reddit/components/Widgets/Moderator/index.m.less"),
				ue = s.n(pe);
			const he = p.a.div("ModeratorListItem", ue.a),
				be = p.a.div("Username", ue.a),
				ge = p.a.a("MessageModsLink", ue.a),
				xe = p.a.wrapped(ce.b, "FlairComponent", ue.a),
				ve = e => e.authorFlairType === me.f.Richtext ? {
					backgroundColor: e.authorFlairBackgroundColor,
					richtext: e.authorFlairRichText,
					textColor: e.authorFlairTextColor,
					type: e.authorFlairType
				} : {
					backgroundColor: e.authorFlairBackgroundColor,
					text: e.authorFlairText || "",
					textColor: e.authorFlairTextColor,
					type: e.authorFlairType
				},
				fe = e => o.a.createElement(be, null, "u/".concat(e)),
				Ce = p.a.wrapped(de.a, "InternalLink", ue.a),
				Oe = p.a.div("LinkContainer", ue.a);
			var Ee = e => {
					const {
						subredditName: t,
						widget: s
					} = e;
					return o.a.createElement(c.a, {
						styles: s.styles,
						title: Object(S.c)("Moderators"),
						headerButton: o.a.createElement(ge, {
							href: "https://reddit.com/message/compose?to=/r/".concat(t),
							target: "_blank"
						}, o.a.createElement(le.a, null))
					}, s.mods.map(e => o.a.createElement(he, {
						key: e.name
					}, (e => o.a.createElement(ie.a, {
						to: "/user/".concat(e.name, "/")
					}, fe(e.name)))(e), o.a.createElement(xe, {
						flair: ve(e),
						forceSmallEmojis: !0
					}))), o.a.createElement(Oe, null, o.a.createElement(Ce, {
						to: "/r/".concat(t, "/about/moderators/")
					}, Object(S.c)("View All Moderators"))))
				},
				ye = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				je = s("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				_e = s("./src/reddit/components/Widgets/TextArea/index.m.less"),
				we = s.n(_e);
			const Pe = p.a.div("WidgetContent", we.a),
				ke = p.a.wrapped(i.a, "RawHTMLDisplay", we.a);
			var Ie = e => o.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, o.a.createElement(Pe, null, o.a.createElement(ke, {
					html: e.widget.textHtml || ""
				}))),
				Se = s("./src/reddit/components/Widgets/Base/index.tsx"),
				Te = e => o.a.createElement(Se.b, null, "This widget hasn't been implemented yet!");
			t.a = e => {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return Ee;
						case "textarea":
							return Ie;
						case "button":
							return P;
						case "subreddit-rules":
							return je.b;
						case "community-list":
							return J;
						case "calendar":
							return G;
						case "image":
							return ae;
						case "custom":
							return Z;
						case "post-flair":
							return ye.a;
						default:
							return Te
					}
				}(e.widget);
				return o.a.createElement(t, {
					widget: e.widget,
					subredditName: e.subredditName,
					truncateThreshold: e.truncateThreshold
				})
			}
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return f
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "b", (function() {
				return y
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/actions/ads/index.ts"),
				i = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/actions/postList.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				p = s("./src/reddit/helpers/trackers/post.ts"),
				u = s("./src/reddit/components/PostList/Placeholder.tsx"),
				h = s("./src/reddit/featureFlags/index.ts"),
				b = s("./src/reddit/selectors/listings.ts"),
				g = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/subreddit.ts"),
				v = s("./src/reddit/selectors/tracking.ts");

			function f() {
				return Object(l.t)({
					currentProfileName: l.h,
					isCommentPermalink: l.v,
					isCommentsPage: l.w,
					isFrontpage: l.y,
					isProfilePostListing: l.H,
					isTopicPage: l.K,
					pageLayer: e => e
				})
			}
			const C = f(),
				O = {
					apiError: b.c,
					apiPending: b.d,
					measureScrollFPS: h.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(l.L)(e, t),
					loadMore: b.g,
					postsById: g.X,
					postIds: Object(r.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: o
						} = t;
						return Object(g.I)(e, s, n, o)
					}),
					subredditsById: x.V,
					viewportDataLoaded: v.a,
					pageReferrer: l.O,
					postListPlaceholderComponent: () => u.a
				},
				E = Object(o.c)(O),
				y = (e, t) => ({
					onBottomViewed: (t, s) => e(c.c(t, s)),
					adBrandSafetyStatusReceived: t => {
						e(a.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						e(i.H(t))
					},
					fireAdPixelsOfType: (t, s) => {
						e(i.y(t, s))
					},
					trackOnPostEnteredViewport: (t, s, n) => {
						e(i.K(t, n))
					},
					trackOnPostExitedViewport: (t, s, n, o) => {
						e(i.L(t, n, o))
					}
				}),
				j = Object(n.b)(E, y, (e, t, s) => Object.assign({}, e, t, s, {
					postClickEvent: p.f,
					postComponentForLayout: e => Object(m.b)(Object.assign({}, e))
				}));
			t.a = e => Object(d.b)(C(j(e)))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/subscription/index.ts"),
				a = s("./src/reddit/selectors/subreddit.ts"),
				i = s("./src/reddit/selectors/user.ts");
			t.a = Object(n.b)(() => Object(o.c)({
				language: i.O,
				userIsSubscriber: a.Z
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
		"./src/reddit/constants/componentTestIds.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "e", (function() {
				return i
			}));
			const n = "comment",
				o = "comment-submission-form-markdown",
				r = "comment-submission-form-richtext",
				a = "comments-page-link-num-comments",
				i = "post-content"
		},
		"./src/reddit/constants/postCreation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "g", (function() {
				return d
			}));
			const n = "PostCreation-AddEventButton",
				o = 500,
				r = "PostCreation-CollectionEducationTooltip",
				a = "PostCreation-EventEducationTooltip",
				i = 300,
				c = i,
				d = "PostCreation-AddToCollectionButton"
		},
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = o.a.createContext(() => () => {})
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Checkbox/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var c = e => o.a.createElement("svg", i({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), o.a.createElement("g", {
					transform: "translate(-32.000000, -173.000000)"
				}, o.a.createElement("g", {
					transform: "translate(32.000000, 173.000000)"
				}, o.a.createElement("path", {
					d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
				})))),
				d = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = s("./src/reddit/controls/Checkbox/index.m.less"),
				m = s.n(l);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const h = e => t => {
					const {
						className: s,
						disabled: n,
						redditStyle: a,
						"data-redditstyle": i
					} = t, c = u(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), d = ((e, t, s) => {
						const n = !(!t && !s);
						let o = "";
						return o = e ? n ? m.a.mDisabledRedditStyle : m.a.mDisabled : n ? m.a.mActiveRedditStyle : m.a.mActive
					})(n, a, i);
					return o.a.createElement(e, p({
						className: Object(r.a)(m.a.Checkbox, d, s)
					}, c))
				},
				b = h(d.a),
				g = h(c);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? g : e.isCheckboxSelected ? b : a.a;
				return o.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: e.className,
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, o.a.createElement(t, {
					className: Object(r.a)(m.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/controls/CheckboxMenuItem/index.m.less": function(e, t, s) {
			e.exports = {
				sharedIconStyles: "_19iKCOTFpWIyFwZ0bqQhg",
				checkbox: "_2zOuGd5s9dLeXmKJ8TJF9T",
				checkboxSelected: "LevaZhN5EO7Pei7YvAi1W",
				checkboxMenuItem: "_2eawLPCtwzvTZhWKtaUgZQ",
				expandRight: "_34Odk7t6y-rCPxPcYJa4Nw",
				postCheckboxMenuItem: "_3LyKu57c-QkPvlFvAgWop5"
			}
		},
		"./src/reddit/controls/CheckboxMenuItem/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				d = s("./src/reddit/controls/CheckboxMenuItem/index.m.less"),
				l = s.n(d);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const u = e => o.a.createElement("div", {
					className: Object(r.a)(l.a.checkboxMenuItem, e.className),
					onClick: e.onClick
				}, o.a.createElement(c.a, {
					className: l.a.expandRight
				}, e.isSelected ? o.a.createElement(i.a, {
					className: l.a.checkboxSelected
				}) : o.a.createElement(a.a, {
					className: l.a.checkbox
				}), e.text)),
				h = e => {
					var {
						className: t
					} = e, s = p(e, ["className"]);
					return o.a.createElement(u, m({
						className: Object(r.a)(l.a.postCheckboxMenuItem, t)
					}, s))
				};
			t.b = u
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
			var n = s("./node_modules/lodash/uniqueId.js"),
				o = s.n(n),
				r = s("./node_modules/raf/index.js"),
				a = s.n(r),
				i = s("./node_modules/react/index.js"),
				c = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/classNames/index.ts"),
				p = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/i18n/utils.ts"),
				h = s("./src/reddit/selectors/activeModalId.ts"),
				b = s("./node_modules/fbt/lib/FbtPublic.js"),
				g = s("./src/higherOrderComponents/asModal/index.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/layout/row/Inline/index.tsx"),
				f = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				C = s.n(f);
			var O = Object(g.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return c.a.createElement("div", {
						className: C.a.wrapper
					}, c.a.createElement(v.a, {
						className: C.a.titleRow
					}, s), c.a.createElement("div", {
						className: C.a.detailsContainer
					}, t), c.a.createElement(v.a, {
						className: C.a.buttonRow
					}, c.a.createElement(x.f, {
						className: C.a.confirmButton,
						onClick: e.onConfirmed
					}, b.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				E = s("./src/reddit/controls/ErrorText/index.m.less"),
				y = s.n(E);
			s.d(t, "a", (function() {
				return P
			})), s.d(t, "c", (function() {
				return k
			}));
			const j = Object(l.c)({
				activeModalId: h.a
			});
			class _ extends c.a.Component {
				constructor(e) {
					super(e), this.spanRef = c.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: "ErrorTextModal--".concat(o()())
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
						activeModalId: t,
						className: s,
						errorModalBody: n,
						errorModalTitle: o = Object(u.c)("Error"),
						moreText: r = Object(u.c)("More")
					} = this.props, {
						modalId: a,
						textHasOverflowed: i
					} = this.state;
					return c.a.createElement("div", {
						className: Object(m.a)(y.a.wrapper, s)
					}, c.a.createElement("span", {
						className: y.a.description,
						ref: this.spanRef
					}, e), i && c.a.createElement("span", {
						className: y.a.moreText,
						onClick: this.toggleModal
					}, r), t === a && c.a.createElement(O, {
						onConfirmed: this.toggleModal,
						title: o
					}, n || e))
				}
			}
			const w = Object(d.b)(j, e => ({
					toggleErrorTextModal: t => e(Object(p.i)(t))
				}))(_),
				P = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: n,
						fallbackMessage: o,
						messages: r = []
					} = e, a = r.length ? r : o ? [o] : [];
					return a.length ? c.a.createElement("div", {
						className: t
					}, a.map((e, t) => c.a.createElement(w, {
						className: s,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				k = e => c.a.createElement(P, {
					fallbackMessage: Object(u.c)("Something went wrong"),
					messages: e
				});
			t.b = w
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/controls/Input/index.m.less"),
				r = s.n(o);
			t.a = n.a.input("input", r.a)
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
				return b
			})), s.d(t, "d", (function() {
				return g
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/app/strings/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				c = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/i18n/utils.ts")),
				d = s("./src/reddit/controls/MetaData/index.m.less"),
				l = s.n(d),
				m = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const p = a.a.span("metaText", l.a),
				u = e => o.a.createElement(p, e, " · "),
				h = Object(r.c)("comment.point"),
				b = e => {
					var {
						isScoreHidden: t,
						language: s,
						score: n,
						useUpvotes: r
					} = e, a = m(e, ["isScoreHidden", "language", "score", "useUpvotes"]);
					const d = Object(i.b)(n),
						l = Object(c.c)("\n    ".concat(Object(c.b)("score", d), " ").concat(Object(c.a)("upvotes", ["upvote", "upvotes"], n), "\n  ")),
						u = t ? Object(c.c)("Score hidden") : r ? l : h(s, n, {
							count: d
						});
					return o.a.createElement(p, a, u)
				},
				g = (e, t) => {
					const s = Object(r.b)(t, "posts.comments.noun", e, {
						count: Object(i.b)(e)
					});
					return o.a.createElement(p, null, s)
				}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/featureFlags/index.ts"),
				c = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};

			function d(e, t, s) {
				const n = Object(a.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(r.b)(n)(e => {
					const {
						featureEnabled: n,
						dispatch: r
					} = e, a = c(e, ["featureEnabled", "dispatch"]);
					return n ? o.a.createElement(t, a) : void 0 !== s ? o.a.createElement(s, a) : null
				})
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/models/WhitelistStatus/index.ts");
			const o = (e, t) => {
				const s = e.some(e => e.isNSFW),
					o = t.some(e => e.wls === n.a.NO_ADS);
				return !s && !o
			}
		},
		"./src/reddit/helpers/createBannerProperties/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/isFakeSubreddit/index.ts"),
				o = s("./src/reddit/constants/postLayout.ts");
			const r = Math.floor(100 * Math.random());
			var a;
			! function(e) {
				e.FIRST = "first", e.MIDDLE = "middle", e.BOTTOM = "bottom"
			}(a || (a = {}));
			t.b = (e, t, s, a, i) => {
				const c = {
					subreddit_screen: !1,
					logged_in: !!t.account,
					placement: e,
					platform: "redesign",
					full_url: s,
					layout: o.b[t.prefs.layout]
				};
				return a && !Object(n.a)(a.name) && (c.subreddit = a.name, c.subreddit_screen = !0), c.wls = 6, c.whitelist_status = "all_ads", c.percentage = c.random_number = r, i && (c.position = i), c
			}
		},
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(n.a)(e).banner.iconImage ? String(Object(n.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/hasModPostPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.posts
		},
		"./src/reddit/helpers/trackers/otherDiscussions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const o = (e, t) => Object.assign({}, Object(n.defaults)(e), {
					media: Object(n.media)(e, t),
					profile: Object(n.profile)(e),
					subreddit: Object(n.subreddit)(e) || Object(n.subredditByPostOrCommentId)(e, t)
				}),
				r = e => t => Object.assign({
					source: "post",
					action: "click",
					noun: "other_discussions",
					post: Object(n.post)(t, e)
				}, o(t, e)),
				a = e => t => Object.assign({
					source: "other_discussions",
					action: "click",
					noun: "dismiss",
					post: Object(n.post)(t, e)
				}, o(t, e))
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "m", (function() {
				return i
			})), s.d(t, "E", (function() {
				return c
			})), s.d(t, "q", (function() {
				return d
			})), s.d(t, "t", (function() {
				return l
			})), s.d(t, "u", (function() {
				return m
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "s", (function() {
				return h
			})), s.d(t, "v", (function() {
				return b
			})), s.d(t, "o", (function() {
				return g
			})), s.d(t, "h", (function() {
				return x
			})), s.d(t, "F", (function() {
				return v
			})), s.d(t, "C", (function() {
				return f
			})), s.d(t, "f", (function() {
				return C
			})), s.d(t, "r", (function() {
				return O
			})), s.d(t, "l", (function() {
				return E
			})), s.d(t, "k", (function() {
				return y
			})), s.d(t, "i", (function() {
				return j
			})), s.d(t, "e", (function() {
				return _
			})), s.d(t, "w", (function() {
				return w
			})), s.d(t, "j", (function() {
				return P
			})), s.d(t, "d", (function() {
				return k
			})), s.d(t, "p", (function() {
				return I
			})), s.d(t, "y", (function() {
				return S
			})), s.d(t, "n", (function() {
				return T
			})), s.d(t, "g", (function() {
				return N
			})), s.d(t, "D", (function() {
				return L
			})), s.d(t, "z", (function() {
				return M
			})), s.d(t, "a", (function() {
				return R
			})), s.d(t, "x", (function() {
				return F
			})), s.d(t, "A", (function() {
				return A
			})), s.d(t, "B", (function() {
				return B
			}));
			var n = s("./src/reddit/models/ScheduledPost/index.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const r = e => Object.assign({}, o.defaults(e), {
					screen: o.screen(e),
					subreddit: o.subreddit(e),
					userSubreddit: o.userSubreddit(e)
				}),
				a = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(n.n)(e)
				}),
				i = () => e => Object.assign({
					source: "post_composer",
					action: "click",
					noun: "schedule_post"
				}, r(e)),
				c = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer"
				}, r(e)),
				d = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_date"
				}, r(e)),
				l = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_time"
				}, r(e)),
				m = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_timezone"
				}, r(e)),
				p = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "apply"
				}, r(e)),
				u = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "cancel"
				}, r(e)),
				h = e => t => Object.assign({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit"
				}, r(t), {
					scheduledPost: a(e)
				}),
				b = e => t => Object.assign({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit"
				}, r(t), {
					scheduledPost: a(e)
				}),
				g = () => e => Object.assign({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts"
				}, r(e)),
				x = () => e => Object.assign({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts"
				}, r(e)),
				v = () => e => Object.assign({
					source: "global",
					action: "view",
					noun: "screen"
				}, r(e)),
				f = () => e => Object.assign({
					source: "global",
					action: "view",
					noun: "screen"
				}, r(e)),
				C = () => e => Object.assign({
					source: "post",
					action: "click",
					noun: "edit_post"
				}, r(e)),
				O = () => e => Object.assign({
					source: "post",
					action: "click",
					noun: "submit_post_now"
				}, r(e)),
				E = e => t => Object.assign({
					source: "post",
					action: "click",
					noun: "overflow_menu"
				}, r(t), {
					actionInfo: o.actionInfo(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				y = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "one_time_frequency"
				}, r(e)),
				j = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "hourly_frequency"
				}, r(e)),
				_ = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "daily_frequency"
				}, r(e)),
				w = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "weekly_frequency"
				}, r(e)),
				P = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "monthly_frequency"
				}, r(e)),
				k = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "custom_frequency"
				}, r(e)),
				I = () => e => Object.assign({
					source: "post",
					action: "click",
					noun: "start_event_now"
				}, r(e)),
				S = (e, t, s) => a => Object.assign({
					source: "post",
					action: "click",
					noun: Object(n.k)(e)
				}, r(a), {
					actionInfo: o.actionInfo(a, {
						settingValue: t ? "true" : "false",
						pageType: s ? "recurring_posts" : "scheduled_posts"
					})
				}),
				T = () => e => Object.assign({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta"
				}, r(e)),
				N = () => e => Object.assign({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post"
				}, r(e)),
				L = () => e => Object.assign({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer"
				}, r(e)),
				M = () => (e, t) => Object.assign({
					source: "recurring_post_composer",
					action: "click",
					noun: "update"
				}, r(e), {
					scheduledPost: a(t)
				}),
				R = () => e => Object.assign({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel"
				}, r(e)),
				F = () => (e, t) => Object.assign({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete"
				}, r(e), {
					scheduledPost: a(t)
				}),
				A = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer"
				}, r(e)),
				B = () => (e, t) => {
					const s = r(e);
					return Object.assign({
						source: "post",
						action: "view",
						noun: "error"
					}, s, {
						actionInfo: Object.assign({}, s.actionInfo, {
							reason: "failed_post"
						}),
						scheduledPost: a(t)
					})
				}
		},
		"./src/reddit/helpers/trackers/subredditWiki.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return a
			})), s.d(t, "g", (function() {
				return i
			})), s.d(t, "m", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "k", (function() {
				return m
			})), s.d(t, "q", (function() {
				return p
			})), s.d(t, "r", (function() {
				return u
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "j", (function() {
				return b
			})), s.d(t, "p", (function() {
				return g
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "i", (function() {
				return f
			})), s.d(t, "a", (function() {
				return C
			})), s.d(t, "h", (function() {
				return O
			})), s.d(t, "l", (function() {
				return E
			})), s.d(t, "n", (function() {
				return j
			})), s.d(t, "o", (function() {
				return _
			}));
			var n = s("./src/reddit/models/SubredditWikiPage/index.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const r = e => Object.assign({}, o.defaults(e), {
					subreddit: o.subreddit(e),
					userSubreddit: o.userSubreddit(e)
				}),
				a = () => e => Object.assign({
					source: "wiki",
					action: "click",
					noun: "edit"
				}, r(e)),
				i = () => e => Object.assign({
					source: "menu_links_bar",
					action: "click",
					noun: "wiki"
				}, r(e)),
				c = e => t => Object.assign({
					source: "wiki",
					action: "click",
					noun: e
				}, r(t)),
				d = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					return c(e ? "create_wiki_page" : "save_wiki_page")
				},
				l = c("compare_wiki_pages"),
				m = c("revert_wiki_page"),
				p = c("view_wiki_page"),
				u = c("view_source"),
				h = c("add_wiki_page_contributor"),
				b = c("remove_wiki_page_contributor"),
				g = c("save_wiki_page_settings"),
				x = c("copy_url"),
				v = c("add_wiki_subreddit_contributor"),
				f = c("remove_wiki_subreddit_contributor"),
				C = c("ban_wiki_contributor"),
				O = c("unban_wiki_contributor"),
				E = e => c(e ? "show_wiki_revision" : "hide_wiki_revision"),
				y = {
					[n.a.Inherit]: "subreddit_wiki_perms",
					[n.a.Contributors]: "only_wiki_contributors",
					[n.a.Mods]: "only_mods"
				},
				j = e => t => Object.assign({}, r(t), {
					source: "wiki",
					action: "click",
					noun: "hide_show_page",
					actionInfo: o.actionInfo(t, {
						settingValue: e ? "show" : "hide"
					})
				}),
				_ = e => t => Object.assign({}, r(t), {
					source: "wiki",
					action: "click",
					noun: "editing_permissions",
					actionInfo: o.actionInfo(t, {
						settingValue: y[e]
					})
				})
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("archived"), c.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Calendar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("calendar"), c.a.calendarIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Comment/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			t.a = e => {
				var {
					className: t
				} = e, s = l(e, ["className"]);
				return o.a.createElement("i", d({
					className: Object(r.a)(Object(a.b)("comment"), c.a.commentIcon, t)
				}, s))
			}
		},
		"./src/reddit/icons/fonts/Crosspost/index.m.less": function(e, t, s) {
			e.exports = {
				CrosspostIcon: "_1lgwGF1j_DukLN7vdKUyHn",
				crosspostIcon: "_1lgwGF1j_DukLN7vdKUyHn"
			}
		},
		"./src/reddit/icons/fonts/Crosspost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Crosspost/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("crosspost"), " ").concat(e.className)
			}), "CrosspostIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.m.less": function(e, t, s) {
			e.exports = {
				DistinguishShield: "_3qx_qM22xH7s5oSucqWca",
				distinguishShield: "_3qx_qM22xH7s5oSucqWca"
			}
		},
		"./src/reddit/icons/fonts/Embed/index.m.less": function(e, t, s) {
			e.exports = {
				EmbedIcon: "_1J2DOAiKZ5l1xq516M9W_Q",
				embedIcon: "_1J2DOAiKZ5l1xq516M9W_Q"
			}
		},
		"./src/reddit/icons/fonts/Embed/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Embed/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("embed"), " ").concat(e.className)
			}), "EmbedIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Envelope/index.m.less": function(e, t, s) {
			e.exports = {
				Envelope: "gsQG-L1wCCIUe8dJEOA6C",
				envelope: "gsQG-L1wCCIUe8dJEOA6C"
			}
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Envelope/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("envelope"), " ").concat(e.className)
			}), "Envelope", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Expand/index.m.less": function(e, t, s) {
			e.exports = {
				Expand: "_3wtzqtIQz3ef53grMdBKpl",
				expand: "_3wtzqtIQz3ef53grMdBKpl"
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
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoArrowCollapse"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", i.a);
			t.a = c
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
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoArrowExpand"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less": function(e, t, s) {
			e.exports = {
				LightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3",
				lightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3"
			}
		},
		"./src/reddit/icons/fonts/Gild/index.m.less": function(e, t, s) {
			e.exports = {
				GildIcon: "_31hC6liK9ba3nW1h_0cKS3",
				gildIcon: "_31hC6liK9ba3nW1h_0cKS3"
			}
		},
		"./src/reddit/icons/fonts/Gild/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Gild/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("gild"), " ").concat(e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(r.a, null, e.desc)), "GildIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Hide/index.m.less": function(e, t, s) {
			e.exports = {
				HideIcon: "_1ps3GcyMra2ZVakeRQFnGj",
				hideIcon: "_1ps3GcyMra2ZVakeRQFnGj"
			}
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.m.less": function(e, t, s) {
			e.exports = {
				IgnoreReportIcon: "_3iBgiSReJX5KcPORjE1Yuf",
				ignoreReportIcon: "_3iBgiSReJX5KcPORjE1Yuf"
			}
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/IgnoreReport/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("ignoreReport"), " ").concat(e.className)
			}), "IgnoreReportIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("live"), c.a.liveIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, s) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Menu/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/ModActions/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("i", d({}, e, {
				className: Object(r.a)(Object(a.b)("modActions"), c.a.modActions, e.className)
			}))
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, s) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/fonts/Pencil/index.m.less": function(e, t, s) {
			e.exports = {
				PencilIcon: "fKeLCuOy1oZ3UGfRARX6w",
				pencilIcon: "fKeLCuOy1oZ3UGfRARX6w"
			}
		},
		"./src/reddit/icons/fonts/Pencil/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Pencil/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("pencil"), " ").concat(e.className)
			}), "PencilIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Save/index.m.less": function(e, t, s) {
			e.exports = {
				SaveIcon: "_3n1jtdyipCtmS0HkOM1Tfd",
				saveIcon: "_3n1jtdyipCtmS0HkOM1Tfd"
			}
		},
		"./src/reddit/icons/fonts/Save/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Save/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("save"), " ").concat(e.className)
			}), "SaveIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("share"), c.a.shareIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("sticky"), c.a.stickyIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Tag/index.m.less": function(e, t, s) {
			e.exports = {
				TagIcon: "_2e-QjEsH3vADXyIpSzLW6_",
				tagIcon: "_2e-QjEsH3vADXyIpSzLW6_"
			}
		},
		"./src/reddit/icons/fonts/Tag/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Tag/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("tag"), " ").concat(e.className)
			}), "TagIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Unpin/index.m.less": function(e, t, s) {
			e.exports = {
				UnpinIcon: "_1X-tE86a0YWmVh310hgKTZ",
				unpinIcon: "_1X-tE86a0YWmVh310hgKTZ"
			}
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, s) {
			e.exports = {
				iconFont: "WxKparxaBCy4-EWML7xc3",
				approveIcon: "MAe2tslj1FAD6GliiZ3it",
				commentIcon: "_3ch9jJ0painNf41PmU4F9i",
				lockIcon: "XHMWG1CPWX8RXeNg-o5-R",
				modActions: "_3phKxmomoio9ulzAoL4XhZ",
				moderateIcon: "_2Xt7ltq8LezAkf8ZF8x9dv",
				removeIcon: "_2IVG3b9-lczna8tonL9FWB",
				reportIcon: "_1MDjRAzxk1RSTB12748O1v",
				shareIcon: "xwmljjCrovDE5C9MasZja",
				spamIcon: "_1Gn6JH0U8GJtJXSIc54IMU",
				stickyIcon: "hMF1wBi2Z6Lh9zHskfhX1",
				calendarIcon: "_2YXLfgRGcJoCJROcTAGqir",
				adminIcon: "_3ACtZ0jvC5KDN8RNxR0lXX",
				archivedIcon: "_2trXhUAJMhIhxp8a2zvOVP",
				liveIcon: "_3cdJ6BHH65ws78AzuO0KLw"
			}
		},
		"./src/reddit/icons/svgs/AddCollection/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24"
			}, o.a.createElement("defs", null, o.a.createElement("path", {
				id: "svg-add-collection",
				d: "M19.2 2.4a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V4.8a2.4 2.4 0 0 1 2.4-2.4h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V8.4A2.4 2.4 0 0 1 4.8 6h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v7.2a2.4 2.4 0 0 1-2.4 2.4H4.8a2.4 2.4 0 0 1-2.4-2.4V12a2.4 2.4 0 0 1 2.4-2.4h14.4zm-3.806 5.1H12.9v-2.494a.9.9 0 1 0-1.8 0V14.7H8.607a.9.9 0 1 0 0 1.8H11.1v2.494a.9.9 0 1 0 1.8 0V16.5h2.494a.9.9 0 0 0 0-1.8z"
			})), o.a.createElement("use", {
				fill: "inherit",
				xlinkHref: "#".concat("svg-add-collection"),
				fillRule: "evenodd"
			}))
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				className: e.className,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M37.5,22.5V20h-35v15c0,1.4,1.1,2.5,2.5,2.5h30c1.4,0,2.5-1.1,2.5-2.5v0H6.2C5.6,35,5,34.5,5,33.8l0,0c0-0.7,0.6-1.2,1.2-1.2h31.3V30H6.2C5.6,30,5,29.5,5,28.8v0c0-0.7,0.6-1.2,1.2-1.2h31.3V25H6.2C5.6,25,5,24.5,5,23.8v0c0-0.7,0.6-1.2,1.2-1.2H37.5z"
			}), o.a.createElement("path", {
				d: "M22.5,6c0,1.4-1.1,2.5-2.5,2.5S17.5,7.4,17.5,6S20,0,20,0S22.5,4.6,22.5,6z"
			}), o.a.createElement("path", {
				d: "M20,15L20,15c-0.7,0-1.3-0.6-1.3-1.2v-2.5c0-0.7,0.6-1.2,1.2-1.2h0c0.7,0,1.2,0.6,1.2,1.2v2.5C21.2,14.5,20.7,15,20,15z"
			}), o.a.createElement("path", {
				d: "M22.8,11.3v2.3c0,1.4-1,2.7-2.5,2.9c-1.6,0.2-3-1.1-3-2.7v-5c0,0,0-0.1,0-0.1l-0.8-0.4c-0.9-0.4-2-0.3-2.7,0.4L2.5,18.5h35L22.8,11.3z"
			}))))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => {
				let {
					className: t
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, o.a.createElement("path", {
					d: "M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z"
				}), o.a.createElement("path", {
					d: "M17 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.36l1.76 1.83a.5.5 0 0 0 .75 0L13.64 16H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
				}))
			}
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Saved/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2OUcXcp-8gkoFyUSKdNTxF"
			}
		},
		"./src/reddit/icons/svgs/Saved/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Saved/index.m.less"),
				i = s.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M12.5 2h-11a.5.5 0 0 0 0 1A2.5 2.5 0 0 1 4 5.5v12.24a1 1 0 0 0 1.4.92l4.6-2 4.6 2a1 1 0 0 0 1.4-.92V5.5A3.5 3.5 0 0 0 12.5 2zm1 6.53l-4.26 4.29a.75.75 0 0 1-1.06 0L6.47 11.1A.75.75 0 0 1 7.53 10l1.18 1.18 3.76-3.76a.75.75 0 0 1 1.06 1.06z"
			}))
		},
		"./src/reddit/icons/svgs/Show/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M17.71,10.29,14.95,7.54a7,7,0,0,0-9.9,0L2.29,10.29a1,1,0,0,0,1.41,1.41L6.46,8.95c.07-.07.14-.11.21-.17a4,4,0,1,0,6.65,0c.07.06.15.11.21.17l2.76,2.76a1,1,0,0,0,1.41-1.41Z"
			}))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = s.n(a);
			const c = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), o.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		},
		"./src/reddit/layout/page/Lightbox/FakeLightbox.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				l = s("./src/reddit/components/AlertBanner/heights.ts"),
				m = s("./src/reddit/components/AppRouter/index.tsx"),
				p = s("./src/reddit/components/LightboxHeader/index.tsx"),
				u = s("./src/reddit/constants/componentSizes.ts"),
				h = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				b = s("./src/reddit/models/Theme/index.ts"),
				g = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/layout/page/Lightbox/index.m.less"),
				f = s.n(v);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var O = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const E = Object(r.b)(() => Object(a.c)({
					showFPR: x.E,
					showSuspended: x.K
				})),
				y = Object(c.a)(e => {
					var {
						className: t,
						isCollectionLayout: s,
						theme: n
					} = e, r = O(e, ["className", "isCollectionLayout", "theme"]);
					const a = Object(g.a)(Object.assign({
						theme: n
					}, r));
					return o.a.createElement("div", C({
						className: Object(i.a)(f.a.fakeOverlay, t),
						style: {
							"--fakelightbox-overlay-background": Object(b.g)(a.canvas, a.canvasImgUrl, a.canvasImgPosition),
							"--fakelightbox-overlay-max-width": "".concat(s ? u.h : u.i, "px")
						}
					}, r))
				});
			class j extends o.a.Component {
				constructor() {
					super(...arguments), this.renderWrapper = e => {
						const t = {
							browserInfo: e,
							showSuspended: this.props.showSuspended,
							showFPR: this.props.showFPR
						};
						return o.a.createElement(m.a, {
							className: Object(i.a)(f.a.fakeOverlayLightboxHeaderWrapper, {
								[f.a.wide]: this.props.isCollectionLayout
							}, Object(l.b)(f.a, t))
						}, o.a.createElement(p.a, {
							post: this.props.post,
							onCloseClick: this.props.handleFakeLightboxClick
						}))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(y, {
						isCollectionLayout: !e.isCollectionLayout,
						onClick: e.handleFakeLightboxOverlayClick
					}), o.a.createElement(d.a.Consumer, null, this.renderWrapper), o.a.createElement(h.a, e))
				}
			}
			t.a = E(j)
		},
		"./src/reddit/layout/page/Lightbox/index.m.less": function(e, t, s) {
			e.exports = {
				lightboxContainer: "_1npCwF50X2J7Wt82SZi6J0",
				mIsCollectionLayout: "_2mmpCGz_MbQyZXoaIL_u6I",
				lightboxContent: "u35lf2ynn4jHsVUwPmNU",
				mIsFakeOverlay: "_2gEUIJsfk7ZZ0euRwRyv08",
				mNotCollectionLayout: "Dx3UxiK86VcfkFQVHNXNi",
				lightboxSidebar: "_2Xq-4oyrEvHjL5U_EeMnK8",
				defaultLightboxSidebar: "_20b4i5iUhjZQqDZ1BM_Q-9",
				fakeOverlay: "_1QwQLdEXq0cZZb7vcte4KK",
				fakeOverlayContainer: "_3OGqXkiUb_0ZMlksb26boO",
				fakeOverlayContent: "_3KaECfUAGLfWQPO5eNjMNl",
				fakeOverlayLightboxHeaderWrapper: "_9BEqyBVXtRCQxyeYwqJMB",
				wide: "_3lVCgGR2stdSvrxCS2yWD7",
				showDeprecated: "_2NxbeazXeXu0bSJRcwSxd8",
				showFPR: "Hpitc80wLQqDqDh9A37wr",
				showFpr: "Hpitc80wLQqDqDh9A37wr",
				showSuspended: "_39xFv40KohPmMxYVnMJmp"
			}
		},
		"./src/reddit/layout/page/Lightbox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/layout/page/Lightbox/index.m.less"),
				i = s.n(a);
			const c = e => o.a.createElement("div", {
					tabIndex: e.tabIndex,
					ref: e.innerRef,
					className: Object(r.a)(i.a.lightboxContainer, {
						[i.a.mIsCollectionLayout]: e.isCollectionLayout,
						[i.a.fakeOverlayContainer]: e.isFakeOverlay && !e.isCollectionLayout
					})
				}, e.children),
				d = e => o.a.createElement("div", {
					className: Object(r.a)(i.a.lightboxContent, {
						[i.a.mNotCollectionLayout]: !e.isCollectionLayout,
						[i.a.mIsFakeOverlay]: e.isFakeOverlay,
						[i.a.fakeOverlayContent]: e.isFakeOverlay && !e.isCollectionLayout
					})
				}, e.children),
				l = e => o.a.createElement("div", {
					className: Object(r.a)(i.a.lightboxSidebar, {
						[i.a.mIsFakeOverlay]: e.isFakeOverlay,
						[i.a.defaultLightboxSidebar]: !e.isCollectionLayout,
						[i.a.mIsCollectionLayout]: e.isCollectionLayout
					})
				}, e.children);
			class m extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.container = null, this.setContainerRef = e => {
						this.container = e, this.props.containerRef && this.props.containerRef(e)
					}
				}
				render() {
					const {
						content: e,
						contentBanner: t,
						isCollectionLayout: s,
						isFakeOverlay: n,
						sidebar: r
					} = this.props;
					return o.a.createElement(c, {
						innerRef: this.setContainerRef,
						isCollectionLayout: s,
						isFakeOverlay: n,
						tabIndex: -1
					}, o.a.createElement(d, {
						isCollectionLayout: s,
						isFakeOverlay: n,
						redditStyle: !0
					}, t, e), r && o.a.createElement(l, {
						isCollectionLayout: s,
						isFakeOverlay: n
					}, r))
				}
			}
			t.a = m
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = s.n(i);
			t.a = Object(r.a)(e => o.a.createElement("div", {
				className: Object(a.a)(c.a.expandedCenterContainer, e.className)
			}, o.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), o.a.createElement("div", {
				className: c.a.center
			}, Array.isArray(e.children) && e.children[1]), o.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
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
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				c = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			t.a = Object(r.a)(e => {
				const {
					className: t,
					children: s,
					heightLeft: n,
					widthLeft: r,
					gutter: i
				} = e, m = l(e, ["className", "children", "heightLeft", "widthLeft", "gutter"]);
				return o.a.createElement("div", d({
					className: Object(a.a)(c.a.expandRightContainer, t)
				}, m), o.a.createElement("div", {
					className: c.a.left,
					style: {
						flexBasis: r,
						height: n,
						marginRight: i
					}
				}, Array.isArray(s) && s[0]), o.a.createElement("div", {
					className: c.a.right
				}, Array.isArray(s) && s[1]))
			}, 2)
		},
		"./src/reddit/models/SubredditWikiPage/index.ts": function(e, t, s) {
			"use strict";
			var n, o;
			s.d(t, "b", (function() {
					return n
				})), s.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.MayNotView = "MAY_NOT_VIEW", e.PageNotCreated = "PAGE_NOT_CREATED", e.PageNotFound = "PAGE_NOT_FOUND", e.RestrictedPage = "RESTRICTED_PAGE", e.Unknown = "UNKNOWN", e.Valid = "VALID", e.WikiDisabled = "WIKI_DISABLED"
				}(n || (n = {})),
				function(e) {
					e.Inherit = "INHERIT_SUBREDDIT_PERMS", e.Contributors = "CONTRIBUTORS", e.Mods = "MODS"
				}(o || (o = {}))
		},
		"./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less": function(e, t, s) {
			e.exports = {
				CommentsNavigationPane: "_1k2YW82YLtn1xvksm7RHIO",
				commentsNavigationPane: "_1k2YW82YLtn1xvksm7RHIO",
				linkOrOverlay: "_1eQ54MneFHfYv8GJO9o-jg",
				OtherDiscussionsLink: "_1WUTKdOO96akYfbq4CK6z6",
				otherDiscussionsLink: "_1WUTKdOO96akYfbq4CK6z6"
			}
		},
		"./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				c = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/helpers/path/index.ts"),
				m = s("./src/reddit/helpers/trackers/otherDiscussions.ts"),
				p = s("./src/reddit/selectors/comments.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less"),
				b = s.n(h);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = Object(r.b)(() => Object(a.c)({
				headComment: p.y,
				otherDiscussionsCount: u.B,
				post: p.F
			}));
			t.a = Object(d.b)(x(e => {
				let {
					commentId: t,
					headComment: s,
					isOverlay: n,
					otherDiscussionsCount: r,
					post: a,
					postId: d,
					sendEvent: p
				} = e;
				if (!a) return null;
				const u = void 0 !== t,
					h = a.permalink,
					x = r > 0,
					v = Object(l.b)(Object(i.e)(h));
				return u || x ? o.a.createElement("div", {
					className: b.a.CommentsNavigationPane
				}, u && o.a.createElement("div", null, o.a.createElement(c.a, {
					className: b.a.linkOrOverlay,
					isOverlay: n,
					to: Object(l.b)(h)
				}, g._("View all comments", null, {
					hk: "3I5IX9"
				})), s && null !== s.parentId && o.a.createElement(c.a, {
					className: b.a.linkOrOverlay,
					isOverlay: n,
					to: Object(l.b)(s.permalink + "?context=8&depth=9")
				}, g._("Show parent comments", null, {
					hk: "AVRCa"
				}))), x && o.a.createElement(c.a, {
					className: b.a.OtherDiscussionsLink,
					isOverlay: n,
					onClick: () => p(Object(m.a)(d)),
					to: v
				}, g._({
					"*": "View discussions in {other discussion communities count} other communities",
					_1: "View discussions in 1 other community"
				}, [g._plural(r, "other discussion communities count")], {
					hk: "3oofZ8"
				}))) : null
			}))
		},
		"./src/reddit/pages/CommentsPage/index.m.less": function(e, t, s) {
			e.exports = {
				promoBanner: "_25nFZKgLc-Z-1ua1YEzuCL",
				DetailsPageSidebar: "RffBqG1xCvuy1r49wYhLr",
				detailsPageSidebar: "RffBqG1xCvuy1r49wYhLr",
				MoreCommentsButton: "_1ibjfCIu5PPqcaOiPleMRD",
				moreCommentsButton: "_1ibjfCIu5PPqcaOiPleMRD",
				PageContentWrapper: "uI_hDmU5GSiudtABRz_37",
				pageContentWrapper: "uI_hDmU5GSiudtABRz_37",
				LargePageContent: "_3vh3MfGCp46QUOtwrgRgUk",
				largePageContent: "_3vh3MfGCp46QUOtwrgRgUk",
				CommentsPaneWrapper: "_2M2wOqmeoPVvcSsJ6Po9-V",
				commentsPaneWrapper: "_2M2wOqmeoPVvcSsJ6Po9-V",
				mIsInOverlay: "_3287nL7j7epK9JmDC3N1VR",
				CollectionBodyWrapper: "_3cBG1RcjxrEO-gLlwkn87S",
				collectionBodyWrapper: "_3cBG1RcjxrEO-gLlwkn87S",
				TopTippers: "BBdV-resbdJaej9EwC62l",
				topTippers: "BBdV-resbdJaej9EwC62l",
				TopTippersBenefits: "_3gq4Yi5Naapk0e9-GpLyo8",
				topTippersBenefits: "_3gq4Yi5Naapk0e9-GpLyo8",
				ChatLoggedOutForm: "_20TbWqEmJ0wq_AV7La7GWd",
				chatLoggedOutForm: "_20TbWqEmJ0wq_AV7La7GWd"
			}
		},
		"./src/reddit/pages/CommentsPage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "CommentsPage", (function() {
				return lt
			}));
			var n = s("./node_modules/core-js/modules/es6.array.sort.js"),
				o = s.n(n),
				r = s("./node_modules/core-js/modules/es6.regexp.match.js"),
				a = s.n(r),
				i = s("./node_modules/core-js/modules/es6.symbol.js"),
				c = s.n(i),
				d = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				l = s("./node_modules/lodash/get.js"),
				m = s.n(l),
				p = s("./node_modules/lodash/throttle.js"),
				u = s.n(p),
				h = s("./node_modules/react/index.js"),
				b = s.n(h),
				g = s("./node_modules/react-redux/es/index.js"),
				x = s("./node_modules/react-router-redux/es/index.js"),
				v = s("./node_modules/reselect/es/index.js"),
				f = s("./src/reddit/i18n/utils.ts"),
				C = s("./src/reddit/models/PostDraft/index.ts"),
				O = s("./src/telemetry/index.ts"),
				E = s("./src/telemetry/models/Timer.ts"),
				y = s("./src/lib/classNames/index.ts"),
				j = s("./src/lib/constants/index.ts"),
				_ = s("./src/lib/domUtils/index.ts"),
				w = s("./src/lib/fastdom/index.ts"),
				P = s("./src/lib/lessComponent.tsx"),
				k = s("./src/lib/makeCommentsPageKey/index.ts"),
				I = s("./src/lib/makeDraftKey/index.ts"),
				S = s("./src/lib/performanceTimings/index.tsx"),
				T = s("./src/reddit/actions/comment/index.ts"),
				N = s("./src/reddit/actions/commentsListTruncated/index.ts"),
				L = s("./src/reddit/actions/login.ts"),
				M = s("./src/reddit/actions/page.ts"),
				R = s("./src/reddit/actions/tooltip.ts"),
				F = s("./src/reddit/components/Collection/index.tsx"),
				A = s("./src/reddit/components/CommentsPageAd/index.tsx"),
				B = s("./src/reddit/components/ContentGate/index.tsx"),
				D = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				W = s("./src/reddit/components/RecommendedPostList/index.tsx"),
				H = s("./src/reddit/constants/componentSizes.ts"),
				V = s("./src/reddit/constants/elementIds.ts"),
				U = s("./src/reddit/constants/history.ts"),
				G = s("./src/reddit/constants/keycodes.ts"),
				K = s("./src/reddit/constants/posts.ts"),
				z = s("./src/reddit/constants/screenWidths.ts"),
				J = s("./src/reddit/contexts/PageLayer/index.tsx"),
				q = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				Y = s("./src/reddit/featureFlags/profileCollections.ts"),
				X = s("./src/reddit/models/Comment/index.ts"),
				Q = s("./src/reddit/models/Media/index.ts"),
				Z = s("./src/reddit/models/Post/index.ts"),
				$ = s("./src/reddit/models/Subreddit/index.ts"),
				ee = s("./src/reddit/selectors/comments.ts"),
				te = s("./src/reddit/selectors/commentsListTruncated.ts"),
				se = s("./src/reddit/selectors/discoveryUnit.ts"),
				ne = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				oe = s("./src/reddit/selectors/experiments/chatPost.ts"),
				re = s("./src/reddit/selectors/experiments/postSeo.ts"),
				ae = s("./src/reddit/selectors/meta.ts"),
				ie = s("./src/reddit/selectors/moderatorPermissions.ts"),
				ce = s("./src/reddit/selectors/posts.ts"),
				de = s("./src/reddit/selectors/subreddit.ts"),
				le = s("./src/reddit/selectors/tooltip.ts"),
				me = s("./src/reddit/selectors/user.ts"),
				pe = s("./src/reddit/actions/dismissedTruncationList/index.ts"),
				ue = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				he = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				be = s("./src/reddit/components/Comments/index.tsx"),
				ge = s("./src/reddit/components/Comments/States/index.tsx"),
				xe = s("./src/reddit/components/CommentsChat/Loader.ts"),
				ve = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				fe = s("./src/reddit/components/CommentSort/index.tsx"),
				Ce = s("./src/reddit/components/CommentsPageSidebar/index.tsx"),
				Oe = s("./src/reddit/components/CommentsWrapper/index.tsx"),
				Ee = s("./src/reddit/components/Economics/FTUE/TopTippersBenefits/async.tsx"),
				ye = s("./src/reddit/components/Economics/TopTippers/PostLeaderboard/async.tsx"),
				je = s("./src/reddit/components/HeaderImage/index.tsx"),
				_e = s("./src/reddit/components/Hovercards/helpers.ts"),
				we = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx"),
				Pe = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx"),
				ke = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx"),
				Ie = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				Se = s("./src/reddit/components/JumpToContent/index.tsx"),
				Te = s("./src/reddit/components/PostContent/index.tsx"),
				Ne = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Le = s("./src/reddit/components/SubredditNav/index.tsx"),
				Me = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Re = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				Fe = s("./src/reddit/helpers/getSubredditUrl/index.ts"),
				Ae = s("./src/reddit/helpers/history/index.ts"),
				Be = s("./src/reddit/helpers/postCollection.ts"),
				De = s("./src/reddit/helpers/trackers/lightbox.ts"),
				We = s("./src/reddit/helpers/trackers/screenview.ts"),
				He = s("./src/reddit/layout/page/Lightbox/index.tsx"),
				Ve = s("./src/reddit/layout/page/Lightbox/FakeLightbox.tsx"),
				Ue = s("./src/reddit/layout/page/Listing/index.tsx"),
				Ge = s("./src/reddit/models/ContentGate.ts"),
				Ke = s("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.tsx"),
				ze = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				Je = s("./src/reddit/selectors/experiments/listingBelowAll.ts"),
				qe = s("./src/reddit/pages/CommentsPage/index.m.less"),
				Ye = s.n(qe);

			function Xe() {
				return (Xe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var Qe = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const Ze = e => {
					let {
						condition: t,
						wrap: s,
						children: n
					} = e;
					return t ? s(n) : n
				},
				$e = 80,
				et = 200,
				tt = 80,
				st = 32,
				nt = Object(d.a)({
					resolved: {},
					chunkName: () => "reddit-pages-CommentsPage-OtherDiscussions",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-pages-CommentsPage-OtherDiscussions").then(s.bind(null, "./src/reddit/pages/CommentsPage/OtherDiscussions/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/CommentsPage/OtherDiscussions/index.tsx"
					}
				}),
				ot = e => {
					const {
						state: t
					} = e.location, s = m()(t, U.a.IsOverlay, !1), n = m()(t, U.a.CloseLocation, null), o = m()(t, U.a.ScrollOnLoad, !1);
					o && Object(Ae.c)(U.a.ScrollOnLoad);
					const {
						partialCommentId: r,
						partialPostId: a,
						subredditName: i
					} = e.match.params, c = Object(Z.m)(a), d = r && Object(X.e)(r);
					return b.a.createElement(lt, {
						closeLocation: n,
						commentId: d,
						commentsPageKey: e.commentsPageKey,
						isOverlay: s,
						location: e.location,
						onOtherDiscussions: e.onOtherDiscussions,
						postId: c,
						shouldScrollToComments: o,
						sort: e.sort,
						subredditName: i
					})
				},
				rt = Object(J.t)(),
				at = () => Object(v.c)({
					apiError: ee.c,
					apiPending: ee.d,
					canCommentAsModerator: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(ce.Y)(e, {
							postId: s
						});
						return !!(n && n.id && e.moderatingSubreddits[n.id])
					},
					comment: ee.n,
					communityBannerDiscoveryUnit: se.b,
					contentGateInfo: (e, t) => {
						let {
							subredditName: s
						} = t;
						return Object(me.f)(e, s)
					},
					contestModeIsEnabled: ce.D,
					currentUserShowNSFW: me.T,
					dismissedSubreddits: ne.a,
					fullyLoaded: ee.v,
					hasModeratorPostPermissions: ie.b,
					headComment: ee.y,
					isChatPost: oe.e,
					isChatPostExperiment: oe.d,
					isCommentsListTruncated: te.a,
					isLoggedIn: me.G,
					isNightmodeOn: me.Q,
					isTooltipOpen: (e, t) => !!Object(le.a)(e),
					language: me.O,
					listingBelowAllVariant: Je.b,
					origin: ae.h,
					post: ee.F,
					postSEOV2IdCardVariant: re.i,
					profileCollectionsEnabled: Y.a,
					replyComment: ee.t,
					subredditAboutInfo: (e, t) => {
						let {
							subredditName: s
						} = t;
						return s ? Object(de.v)(e, {
							subredditName: s
						}) : void 0
					},
					subredditOrProfile: ce.Y,
					userHovercardIsOpen: (e, t) => Object(le.b)(Object(_e.b)({
						itemId: t.postId,
						tooltipIdPrefix: D.a,
						tooltipType: Ne.c.StickyPost
					}))(e),
					userPrefs: me.gb
				}),
				it = (e, t) => ({
					dismissTruncation: t => e(Object(pe.a)({
						subredditId: t
					})),
					expandCommentsList: () => e(Object(N.a)()),
					setCommentFocus: t => e(T.M({
						commentListNodeId: t
					})),
					fullyLoadComments: () => e(Object(M.z)(t.postId, void 0, {
						subredditName: t.subredditName
					})),
					onHideTooltip: () => e(Object(R.i)()),
					onToggleTooltip: t => e(Object(R.h)({
						tooltipId: t
					})),
					openLoginModal: () => e(Object(L.e)()),
					openRegisterModal: () => e(Object(L.f)()),
					goToSubredditPage: t => e(Object(x.b)(t)),
					sendChatPostExposureEvent: (t, s) => e((e, n) => Object(oe.g)(n(), t, s)),
					truncateCommentsList: () => e(Object(N.b)())
				}),
				ct = Object(g.b)(at, it);
			class dt extends b.a.Component {
				constructor(e) {
					super(e), this.collectionPostWrapperRef = null, this.didRenderLoading = !1, this.needsUpdatedMeasurements = !0, this.scrollY = null, this.recheckScrollTimer = -1, this.postPaused = !0, this.setPostScrollItemRef = e => {
						this.postScrollItemRef = e, setTimeout(this.handleScroll)
					}, this.handleScroll = u()(() => {
						if (!this.scrollContainerEl) return;
						this.needsUpdatedMeasurements && this.updateMeasurements();
						const {
							didScrollPastPost: e,
							scrollContainerEl: t,
							scrollPostThreshold: s,
							props: {
								userHovercardIsOpen: n,
								onToggleTooltip: o,
								post: r,
								postId: a
							}
						} = this;
						clearTimeout(this.recheckScrollTimer), this.recheckScrollTimer = -1;
						const i = t === window ? t.scrollY : t ? t.scrollTop : 0,
							c = null !== this.scrollY && Math.abs(i - this.scrollY) > $e,
							d = r && r.media && r.media.type === Q.n.EMBED ? r.media.provider : null,
							l = r && r.media && Q.d.has(r.media.type) && (!d || !Q.q.has(d));
						this.scrollY = i, !e && void 0 !== s && i >= s && (this.didScrollPastPost = !0), e && void 0 !== s && i < s && (this.didScrollPastPost = !1, n && w.a.write(() => {
							o(Object(_e.b)({
								itemId: a,
								tooltipIdPrefix: D.a,
								tooltipType: Ne.c.StickyPost
							}))
						})), l && this.postScrollItemRef && (this.postPaused || !c && !this.didScrollPastPost ? this.postPaused && !this.didScrollPastPost && (c ? this.recheckScrollTimer = setTimeout(this.handleScroll, 4 * j.G) : (this.postPaused = !1, w.a.write(this.postScrollItemRef.focusContent))) : (this.postPaused = !0, w.a.write(this.postScrollItemRef.pauseContent)))
					}, j.G), this.sendEventWithName = e => () => this.props.sendEvent(Object(De.b)(this.props.postId, e)), this.updateWindowHeight = () => {
						this.needsUpdatedMeasurements = !0, this.handleScroll()
					}, this.updateCommentSortRef = e => {
						this.commentSortRef = e, this.needsUpdatedMeasurements = !0
					}, this.updateCommentFormRef = e => {
						this.commentFormRef = e, this.needsUpdatedMeasurements = !0
					}, this.updateCollPostWrapperRef = e => {
						this.collectionPostWrapperRef = e
					}, this.handleViewAllCommentsClick = () => {
						const {
							dismissTruncation: e,
							expandCommentsList: t,
							listingBelowAllVariant: s,
							post: n
						} = this.props;
						if (t(), Object(Je.a)(s)) {
							const t = n && Object(Z.l)(n) && n && n.belongsTo.id;
							t && e(t)
						}
						this.sendEventWithName("view_all_comments")()
					}, this.handleFakeLightboxClick = () => {
						const e = Object(Fe.a)(this.props.subredditOrProfile);
						this.props.goToSubredditPage(e)
					}, this.handleFakeLightboxOverlayClick = () => {
						this.handleFakeLightboxClick(), this.sendEventWithName("post__click__overlay")()
					}, this.handleContentClick = () => {
						this.props.isCommentsListTruncated && this.props.expandCommentsList()
					}, this.handleFindKeyPress = e => {
						const t = e.key === G.b.F || e.keyCode === G.a.F,
							s = e.ctrlKey || e.metaKey;
						t && s && this.props.expandCommentsList()
					}, this.setLayoutRef = e => {
						this.setState({
							layoutRef: e
						})
					}, this.didScrollPastPost = e.shouldScrollToComments && !!e.post && !!e.post.numComments, this.state = {
						layoutRef: null
					}
				}
				componentWillMount() {
					const {
						commentId: e,
						setCommentFocus: t
					} = this.props;
					e && t(e)
				}
				componentDidMount() {
					const {
						commentFormRef: e,
						commentSortRef: t,
						props: {
							isLoggedIn: s,
							isOverlay: n,
							post: o,
							shouldScrollToComments: r
						}
					} = this;
					n ? (this.scrollContainerEl = document.getElementById(V.d), r && (e || t) && o && o.numComments ? this.scrollToComments() : w.a.write(() => {
						setTimeout(() => {
							Object(_.c)(this.scrollContainerEl, 0)
						})
					})) : this.scrollContainerEl = window, this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), w.a.read(() => {
						this.props.isOverlay || Object(S.d)(S.c.CommentsPage, s)
					}), this.sendChatPostExposureEvent()
				}
				componentWillReceiveProps(e) {
					e.postId !== this.props.postId && (this.didRenderLoading = !1), e.commentId && e.commentId !== this.props.commentId && this.props.setCommentFocus(e.commentId)
				}
				componentWillUpdate(e) {
					this.removeListeners(e)
				}
				componentDidUpdate(e) {
					if (this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), e.postId !== this.props.postId) {
						const e = this.props.post && Object(Be.a)(this.props.post);
						this.props.post && this.props.post.numComments ? w.a.read(this.handleScroll) : w.a.write(() => {
							e || Object(_.c)(this.scrollContainerEl, 0), w.a.read(this.handleScroll)
						}), this.props.isOverlay && !e && w.a.write(() => {
							setTimeout(() => {
								Object(_.c)(this.scrollContainerEl, 0)
							})
						});
						const t = this.collectionPostWrapperRef;
						if (e && t) {
							const e = H.b + (this.props.isOverlay ? H.n : 0),
								s = t.getBoundingClientRect().top;
							let n;
							const o = (n = this.props.isOverlay ? document.getElementById(V.d) : document.getElementsByTagName("body")[0]) && n.getBoundingClientRect().top,
								r = Math.abs(o - s),
								a = this.props.isOverlay ? st : r - e;
							(this.props.isOverlay ? n && n.scrollTop || 0 : window.pageYOffset) >= a && w.a.write(() => {
								setTimeout(() => {
									this.props.isOverlay ? Object(_.c)(n, a) : Object(_.c)(document, a)
								})
							})
						}
					}
					this.truncateCommentList()
				}
				componentWillUnmount() {
					this.removeListeners(), this.needsUpdatedMeasurements = !1, this.scrollContainerEl = void 0
				}
				truncateCommentList() {
					const {
						dismissedSubreddits: e,
						listingBelowAllVariant: t,
						subredditOrProfile: s,
						truncateCommentsList: n
					} = this.props;
					if (Object(Je.a)(t)) {
						const t = s && s.id;
						t && !e.includes(t) && n()
					}
				}
				updateMeasurements() {
					this.needsUpdatedMeasurements = !1, this.windowHeight = window.innerHeight, this.commentFormRef ? this.scrollPostThreshold = this.commentFormRef.offsetTop : this.commentSortRef ? this.scrollPostThreshold = this.commentSortRef.offsetTop : this.scrollPostThreshold = et
				}
				addListeners() {
					const {
						isOverlay: e
					} = this.props;
					e && window.addEventListener("resize", this.updateWindowHeight), this.props.isCommentsListTruncated && window.addEventListener("keydown", this.handleFindKeyPress), this.scrollContainerEl && this.scrollContainerEl.addEventListener("scroll", this.handleScroll)
				}
				removeListeners(e) {
					const {
						isOverlay: t
					} = this.props;
					t && window.removeEventListener("resize", this.updateWindowHeight), e && this.props.isCommentsListTruncated !== e.isCommentsListTruncated && window.removeEventListener("keydown", this.handleFindKeyPress), this.scrollContainerEl && this.scrollContainerEl.removeEventListener("scroll", this.handleScroll)
				}
				scrollToComments() {
					w.a.read(() => {
						const e = document.getElementById(V.d);
						if (e) {
							let t, s;
							this.commentFormRef ? (t = this.commentFormRef.offsetTop - tt, s = this.commentFormRef.offsetParent) : this.commentSortRef ? (t = this.commentSortRef.offsetTop - tt, s = this.commentSortRef.offsetParent) : t = 0, s && (t += s.offsetTop), w.a.write(() => {
								Object(_.c)(e, t), this.needsUpdatedMeasurements = !0, setTimeout(() => w.a.read(this.handleScroll))
							})
						}
					})
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						apiPending: t,
						commentsPageKey: s
					} = this.props;
					return O.c.has(s) && (e || !t || this.listLongEnoughForScreenView())
				}
				listLongEnoughForScreenView() {
					return !!this.commentSortRef && this.commentSortRef.getBoundingClientRect().bottom > window.innerHeight
				}
				checkAndSendScreenview() {
					w.a.read(() => {
						const {
							commentId: e,
							commentsPageKey: t,
							postId: s,
							sendEvent: n,
							sort: o
						} = this.props;
						if (!this.shouldSendScreenview()) return;
						const r = O.c.end(t);
						n(Object(We.b)(t, s, e, E.TimerType.InApp, r, o))
					})
				}
				sendChatPostExposureEvent() {
					const {
						sendChatPostExposureEvent: e,
						hasModeratorPostPermissions: t,
						isChatPost: s
					} = this.props;
					e(s, t)
				}
				isCommentPermalink() {
					return void 0 !== this.props.commentId
				}
				renderPageError() {
					const {
						contentGateInfo: e,
						currentUserShowNSFW: t,
						isOverlay: s,
						post: n,
						subredditName: o
					} = this.props, r = !(!n || !n.isNSFW || t), a = Object(Re.a)(e, r, o);
					if (!a) return null;
					let i = b.a.createElement(B.a, a);
					return s && (i = b.a.createElement(He.a, {
						content: i
					})), i
				}
				render() {
					const {
						apiError: e,
						apiPending: t,
						closeLocation: s,
						commentsPageKey: n,
						isNightmodeOn: o,
						isLoggedIn: r,
						isOverlay: a,
						post: i,
						postId: c,
						postSEOV2IdCardVariant: d,
						sendEvent: l,
						subredditName: m,
						subredditOrProfile: p,
						profileCollectionsEnabled: u
					} = this.props, h = Object(re.e)(d);
					if (!i) {
						if (t) return b.a.createElement(ge.f, null);
						const s = this.renderPageError();
						return s || (e ? e.type === j.m ? b.a.createElement(B.a, {
							contentGateType: Ge.a.PostBlockedForLegalReason
						}) : b.a.createElement(ge.d, null) : b.a.createElement(ge.f, null))
					} {
						const e = this.renderPageError();
						if (e) return e
					}
					const g = this.isCommentPermalink(),
						x = i.belongsTo.type === K.a.PROFILE,
						v = Object(Be.a)(i) && (!x || u),
						f = !r;
					return b.a.createElement(pt, {
						closeLocation: s,
						commentsPageKey: n,
						containerRef: this.setLayoutRef,
						handleFakeLightboxClick: this.handleFakeLightboxClick,
						handleFakeLightboxOverlayClick: this.handleFakeLightboxOverlayClick,
						isLoggedIn: r,
						isOverlay: a,
						isSwapVariant: h,
						post: i,
						subredditOrProfile: p,
						shouldFitPageToContent: f,
						isCollectionLayout: v
					}, p && p.isQuarantined && b.a.createElement(Ie.a, {
						subredditName: p.name
					}), b.a.createElement(Se.a, null), b.a.createElement("div", {
						className: Object(y.a)(Ye.a.PageContentWrapper, {
							[Ye.a.LargePageContent]: v,
							[Ye.a.ChatPage]: this.props.isChatPostExperiment
						}),
						key: "PostContentWrapper"
					}, v && b.a.createElement(F.a, {
						isOverlay: a,
						isNightmodeOn: o,
						postId: c
					}), b.a.createElement(Ze, {
						condition: v,
						wrap: e => b.a.createElement("div", {
							ref: this.updateCollPostWrapperRef,
							className: Ye.a.CollectionBodyWrapper
						}, e)
					}, b.a.createElement(Te.a, {
						isCommentPermalink: g,
						isExclusivePost: !0,
						isOverlay: a,
						postId: c,
						redditStyle: a,
						scrollerItemRef: this.setPostScrollItemRef,
						sendEvent: l
					}), p && b.a.createElement(ye.a, {
						className: Ye.a.TopTippers,
						contentId: c,
						creatorId: i.authorId,
						subredditId: p.id
					}), p && b.a.createElement(Ee.a, {
						className: Ye.a.TopTippersBenefits,
						contentId: c,
						creatorId: i.authorId,
						subredditId: p.id
					}), b.a.createElement(A.a, {
						listingName: m || "",
						isOverlay: a,
						placement: j.c.ABOVE_THE_FOLD,
						postId: c
					}), this.renderCommentPanes())), p && !Object($.e)(p) && b.a.createElement(W.a, {
						contentContainerRef: this.state.layoutRef,
						isOverlay: a,
						post: i,
						subredditOrProfile: p
					}))
				}
				renderCommentPanes() {
					const {
						apiError: e,
						apiPending: t,
						canCommentAsModerator: s,
						commentId: n,
						commentsPageKey: o,
						contestModeIsEnabled: r,
						fullyLoaded: a,
						hasModeratorPostPermissions: i,
						headComment: c,
						isChatPostExperiment: d,
						isLoggedIn: l,
						isOverlay: m,
						language: p,
						location: u,
						onOtherDiscussions: h,
						openLoginModal: g,
						openRegisterModal: x,
						origin: v,
						post: O,
						postId: E,
						replyComment: j,
						sendEvent: _,
						sort: w,
						subredditAboutInfo: P,
						subredditOrProfile: S
					} = this.props;
					if (!O) return null;
					const N = this.isCommentPermalink(),
						L = [],
						M = O.isLocked && !s,
						R = !(N || O.isArchived || P && P.userIsBanned);
					if (M) L.push(b.a.createElement(Pe.a, {
						key: "commentThreadBanner",
						subredditOrProfile: S
					}));
					else if (O.isArchived) L.push(b.a.createElement(we.a, {
						key: "commentThreadBanner"
					}));
					else if (R && !d && !h)
						if (l) {
							const e = Object(I.a)(C.c.replyToPost, E);
							L.push(b.a.createElement(ue.a, {
								autofocus: !1,
								isTopLevelComment: !0,
								depth: 0,
								draftKey: e,
								draftType: C.c.replyToPost,
								editorElementRef: this.updateCommentFormRef,
								key: "form" + e,
								parentCommentId: "replyToPost",
								submitAction: (t, s) => {
									var {
										validate: n
									} = t, r = Qe(t, ["validate"]);
									return n ? T.tb(E, o, e, r, s) : T.lb(E, o, e, r, s)
								},
								submitButtonText: Object(f.c)("comment")
							}))
						} else L.push(b.a.createElement(he.a, {
							key: "loggedOutCommentForm",
							language: p,
							location: u,
							openLoginModal: g,
							openRegisterModal: x,
							origin: v
						}));
					if (r && L.push(b.a.createElement(ke.a, {
							hasModeratorPostPermissions: i,
							key: "contestModeBanner"
						})), !d && !h && L.push(b.a.createElement(fe.a, {
							commentId: n,
							elementRef: this.updateCommentSortRef,
							isOverlay: m,
							key: "commentSort",
							location: u,
							postId: E,
							sort: w,
							suggestedSort: O.suggestedSort
						}), b.a.createElement(Ke.a, {
							commentId: n,
							commentsPageKey: o,
							isOverlay: m,
							key: "commentNavigation",
							postId: E
						})), !t || c || d || h)
						if (!e || c || h)
							if (h) L.push(b.a.createElement(nt, {
								commentSort: w,
								key: "otherDiscussions",
								language: p,
								postId: E,
								isOverlay: m,
								postPermalink: O.permalink
							}));
							else if (d) {
						if (S && S.id) {
							const e = j ? Object(I.a)(C.c.replyToComment, j.id) : Object(I.a)(C.c.replyToPost, E),
								s = n ? Object(k.a)(E) : o;
							L.push(b.a.createElement(xe.a, {
								commentId: n,
								commentsPageKey: s,
								draftKey: e,
								isLoading: t && !c || !a && t,
								key: "commentsChat",
								postId: E,
								renderedInOverlay: m,
								subredditId: S.id
							}, t => {
								let {
									scrollToBottom: n
								} = t;
								return l ? b.a.createElement(ve.a, {
									key: "chatCommentsForm",
									language: p,
									postId: E,
									replyComment: j,
									draftKey: e,
									commentsPageKey: s,
									isEditing: !1,
									scrollToBottom: n,
									sendEvent: _
								}) : b.a.createElement(he.a, {
									key: "loggedOutCommentForm",
									className: Ye.a.ChatLoggedOutForm,
									language: p,
									location: u,
									openLoginModal: g,
									openRegisterModal: x,
									origin: v
								})
							}))
						}
					} else L.push(b.a.createElement("div", {
						className: Object(y.a)(Ye.a.CommentsPaneWrapper, {
							[Ye.a.mIsInOverlay]: m
						}),
						key: "commentsPaneWrapper"
					}, b.a.createElement(Oe.a, Xe({}, this.props, {
						isCommentsListTruncated: this.props.isCommentsListTruncated,
						handleViewAllCommentsClick: this.handleViewAllCommentsClick,
						numberOfComments: O.numComments,
						onClick: this.handleContentClick
					}), b.a.createElement(be.a, {
						commentId: n,
						commentsPageKey: o,
						postId: E,
						renderedInOverlay: m
					})))), e && c ? L.push(b.a.createElement(ge.e, {
						key: "commentsErrorState",
						language: p,
						postId: E,
						commentId: n,
						sort: w,
						apiError: e
					})) : !a && t && L.push(b.a.createElement(ge.a, {
						key: "commentsPlaceholder"
					}));
					else L.push(b.a.createElement(ge.e, {
						language: p,
						postId: E,
						commentId: n,
						sort: w,
						apiError: e
					}));
					else this.didRenderLoading = !0, L.push(b.a.createElement(ge.a, {
						key: "commentsPlaceholder"
					}));
					return b.a.createElement(q.a.Provider, {
						value: this.sendEventWithName
					}, L)
				}
			}
			const lt = rt(ct(Object(Me.b)(dt))),
				mt = P.a.wrapped(Ce.a, "DetailsPageSidebar", Ye.a),
				pt = e => {
					const {
						children: t,
						commentsPageKey: s,
						containerRef: n,
						handleFakeLightboxClick: o,
						handleFakeLightboxOverlayClick: r,
						isCollectionLayout: a,
						isLoggedIn: i,
						isOverlay: c,
						isSwapVariant: d,
						post: l,
						shouldFitPageToContent: m,
						subredditOrProfile: p
					} = e;
					if (!i && !c) return b.a.createElement(Ve.a, {
						containerRef: n,
						content: t,
						isCollectionLayout: a,
						handleFakeLightboxClick: o,
						handleFakeLightboxOverlayClick: r,
						isFakeOverlay: !0,
						post: l,
						sidebar: p && b.a.createElement(Ce.a, {
							commentsPageKey: s,
							isOverlay: !0,
							post: l,
							subredditName: p.name,
							subredditId: p.id
						})
					});
					if (c) return b.a.createElement(He.a, {
						containerRef: n,
						content: t,
						isCollectionLayout: a,
						sidebar: p && b.a.createElement(Ce.a, {
							commentsPageKey: s,
							isOverlay: !0,
							post: l,
							subredditName: p.name,
							subredditId: p.id
						})
					});
					const u = a ? H.i : z.a;
					return b.a.createElement(Ue.a, {
						containerRef: n,
						maxWidth: H.i,
						fitPageToContent: m,
						content: t,
						disableFullscreen: !0,
						isPageSwapped: d,
						isCollectionLayout: a,
						navBar: p && b.a.Children.toArray([b.a.createElement(je.a, {
							disableFullscreen: !0,
							headerText: p.name,
							maxWidth: u,
							prefixedHeaderText: p.displayText,
							subredditOrProfile: p,
							url: p.url
						}), !Object($.e)(p) && b.a.createElement(Le.a, {
							disableFullscreen: !0,
							homeUrl: p.url,
							maxWidth: u,
							subredditId: p.id
						})]),
						sidebar: p && b.a.createElement(mt, {
							commentsPageKey: s,
							post: l,
							subredditName: p.name,
							subredditId: p.id
						})
					})
				};
			t.default = Object(ze.a)(ot)
		},
		"./src/reddit/pages/CommentsPage/withPageSorting.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			}));
			s("./node_modules/core-js/modules/es6.regexp.match.js");
			var n = s("./node_modules/lodash/fromPairs.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/makeCommentsPageKey/index.ts"),
				m = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				p = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				u = s("./src/reddit/models/Comment/index.ts"),
				h = s("./src/reddit/models/Post/index.ts");
			const b = e => {
					const {
						partialPostId: t
					} = e.match.params;
					return t && Object(h.m)(t)
				},
				g = (e, t, s) => {
					const n = b(e),
						r = (e => {
							const {
								partialCommentId: t
							} = e.match.params;
							return t && Object(u.e)(t)
						})(e),
						a = (e => {
							const {
								location: {
									search: t
								}
							} = e;
							return o()([...Object(d.a)(t)])
						})(e),
						i = {
							depth: a.depth && parseInt(a.depth, 10) || void 0,
							context: a.context && parseInt(a.context, 10) || void 0,
							hasSortParam: t,
							sort: s
						};
					return Object(l.a)(n, r, i)
				},
				x = Object(c.c)({
					commentsPageSort: (e, t) => {
						const s = b(t);
						return Object(p.a)(e, s)
					}
				}),
				v = Object(i.b)(x);

			function f(e) {
				return v(t => {
					const {
						hasSortParam: s,
						sortToUse: n
					} = t.commentsPageSort, o = g(t, s, n), r = Object(m.d)(t.match.path), i = Object.assign({}, t, {
						commentsPageKey: o,
						hasSortParam: s,
						onOtherDiscussions: r,
						sort: n
					});
					return a.a.createElement(e, i)
				})
			}
		},
		"./src/reddit/selectors/commentsListTruncated.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = e => e.commentsListTruncated
		},
		"./src/reddit/selectors/eventPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return r
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			}));
			var n = s("./src/lib/makeListingKey/index.ts"),
				o = s("./src/reddit/selectors/posts.ts");
			const r = (e, t) => {
					let {
						subredditName: s
					} = t;
					return Object(n.a)("ModhubPage-EventPosts", "timeline", {
						subredditName: s
					})
				},
				a = (e, t) => {
					const s = r(e, t);
					return Object(o.S)(e, {
						listingKey: s
					}) || []
				},
				i = (e, t) => {
					const s = r(e, t);
					return !!e.listings.postOrder.api.pending[s]
				},
				c = (e, t) => {
					const s = r(e, t);
					return !!(e.listings.postOrder.ids[s] || []).length
				},
				d = (e, t) => {
					const s = r(e, t),
						n = e.listings.postOrder.pageInfo[s];
					return !(!n || !n.hasNextPage)
				},
				l = (e, t) => {
					const s = r(e, t),
						n = e.listings.postOrder.pageInfo[s];
					return n && n.endCursor || null
				}
		},
		"./src/reddit/selectors/experiments/publicAwarding.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: n.gb
				});
				return Object(n.Nb)(t) ? void 0 : t
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
		}
	}
]);
//# sourceMappingURL=CommentsPage.546feb4be38bda371fce.js.map