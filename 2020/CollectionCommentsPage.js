// https://www.redditstatic.com/desktop2x/CollectionCommentsPage.1b7aa2b0d159a5f5894a.js
// Retrieved at 3/31/2020, 11:00:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage", "Poll~ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~reddit-components-ClassicPost~redd~f8abff80", "Multireddit~ProfilePosts~ProfileSnoobuilder~Subreddit~SubredditWiki", "ChatPost~ModQueuePages", "CommentsPage"], {
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
			e.exports = JSON.parse('{"id":"1ac14584ef2c"}')
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
				return Object(i.c)(t)
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
		"./src/lib/intersectionObserver/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return i
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			let n;
			const o = new Map,
				r = new Map;
			"undefined" != typeof window && (s("./node_modules/intersection-observer/intersection-observer.js"), n = new IntersectionObserver(e => {
				e.forEach(e => {
					const t = e.target,
						s = e.intersectionRatio > 0;
					if (s !== !!r.get(t)) {
						r.set(t, s);
						const n = o.get(t);
						if (n) {
							n(e, s && !!r.get(t))
						}
					}
				})
			}, {
				threshold: [.001]
			}));
			const a = (e, t) => {
					try {
						o.set(e, t), n && n.observe(e)
					} catch (s) {
						0
					}
				},
				i = e => {
					try {
						o.delete(e), n && n.unobserve(e)
					} catch (t) {
						0
					}
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
				return v
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
				f = u.normalize;
			u.normalize = e => {
				f.call(u, e), !e.schema && e.url.startsWith("http:") && (e.url = "https:".concat(e.url.slice(5)))
			};
			const v = (e, t) => {
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
				f = s("./src/reddit/selectors/posts.ts");
			s.d(t, "fetchEventPostsPending", (function() {
				return C
			})), s.d(t, "fetchEventPostsSuccess", (function() {
				return O
			})), s.d(t, "fetchEventPostsFailure", (function() {
				return E
			})), s.d(t, "fetchMoreEventPostsSuccess", (function() {
				return y
			})), s.d(t, "eventPostsRequested", (function() {
				return _
			})), s.d(t, "startEventNowSuccess", (function() {
				return j
			})), s.d(t, "startEventNowRequested", (function() {
				return k
			})), s.d(t, "editEventTimeSuccess", (function() {
				return P
			})), s.d(t, "editEventTimeRequested", (function() {
				return w
			}));
			const v = () => n.fbt._("Something went wrong. Just don't panic.", null, {
					hk: "4onxm1"
				}),
				C = Object(r.a)(a.e),
				O = Object(r.a)(a.c),
				E = Object(r.a)(a.b),
				y = Object(r.a)(a.d),
				_ = e => async (t, s, n) => {
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
					const f = Object(x.e)(r, {
						subredditName: e
					});
					t(C({
						key: f
					}));
					const _ = await ((e, t) => Object(d.a)(e, Object.assign({}, c, {
						variables: t
					})))(o(), h);
					if (_.ok) {
						const {
							subredditInfoByName: e
						} = _.body.data, {
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
							key: f,
							postIds: a,
							meta: r.meta,
							posts: i,
							pageInfo: c
						}))
					} else t(E({
						error: _.error,
						key: f
					})), t(Object(i.e)({
						kind: g.b.Error,
						text: v()
					}))
				}, j = Object(r.a)(a.f), k = e => async (t, s, o) => {
					let {
						apiContext: r
					} = o;
					if ((await h(r(), e)).ok) {
						const o = () => n.fbt._("Following event has started successfully: {title}", [n.fbt._param("title", c)], {
							hk: "e9iz9"
						});
						t(j({
							postId: e
						}));
						const r = s(),
							a = Object(f.N)(r, {
								postId: e
							}),
							c = a && a.title || "";
						t(Object(i.e)({
							kind: g.b.SuccessMod,
							text: o()
						}))
					} else t(Object(i.e)({
						kind: g.b.Error,
						text: v()
					}))
				}, P = Object(r.a)(a.a), w = (e, t) => async (s, r, a) => {
					let {
						apiContext: c
					} = a;
					const d = await u(c(), e, t.startDate, t.endDate, t.timezoneName);
					if (d.ok) {
						const t = d.body,
							a = 14400,
							c = Math.round(t.event_start / o.Eb);
						let l = t.event_end;
						const m = {
							eventStart: c,
							eventEnd: l = l && Math.round(l / o.Eb) || c + a,
							eventIsLive: t.event_is_live
						};
						s(P({
							postId: e,
							eventInfo: m
						}));
						const p = r(),
							u = Object(f.N)(p, {
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
						text: v()
					}))
				}
		},
		"./src/reddit/actions/postCreation/editing.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
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
				f = s("./src/reddit/helpers/trackers/lightbox.ts"),
				v = s("./src/reddit/helpers/trackers/post.ts"),
				C = s("./src/reddit/helpers/trackers/postComposer.ts"),
				O = s("./src/reddit/models/Media/index.ts"),
				E = s("./src/reddit/models/PostCreationForm/index.ts"),
				y = s("./src/reddit/models/Toast/index.ts"),
				_ = s("./src/reddit/selectors/posts.ts"),
				j = s("./src/reddit/actions/postCreation/constants.ts"),
				k = s("./src/reddit/actions/postCreation/general.ts");
			s.d(t, "b", (function() {
				return T
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "c", (function() {
				return M
			}));
			const P = Object(o.a)(j.m),
				w = Object(o.a)(j.n),
				I = Object(o.a)(j.z),
				S = Object(o.a)(j.F),
				T = Object(o.a)(j.G),
				N = (e, t) => async (s, n, o) => {
					let {
						apiContext: r
					} = o;
					const a = n(),
						i = Object(_.N)(a, {
							postId: e
						});
					t ? (s(Object(g.a)(i.permalink)), Object(f.d)(e, "edit")(a)) : Object(v.b)(e, "edit")(a);
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
				}, M = e => async (t, s, o) => {
					let {
						apiContext: i
					} = o;
					const {
						post: c
					} = e, d = !c.media || "rtjson" !== c.media.type && "text" !== c.media.type ? "" : c.media.rteMode;
					C.r(s(), Object(k.o)(d)), t(I(c.id));
					const l = await b(i(), e),
						m = !1 === l.body.success;
					if (t(P(c.id)), l.ok && !m) {
						t(Object(a.e)({
							kind: y.b.SuccessCommunity,
							text: n.fbt._("Post successfully edited", null, {
								hk: "xej5K"
							})
						})), t(T(c.id));
						const e = Object(x.a)(l.body);
						t(Object(r.R)({
							[c.id]: e
						}))
					} else t(w(l.error))
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
				f = s("./src/lib/lessComponent.tsx");
			const v = f.a.div("Container", x.a),
				C = f.a.div("LoadingHitbox", x.a),
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
					return t ? o.a.createElement(v, {
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
			}))(Object(h.c)(E))
		},
		"./src/reddit/components/ClassicPost/Placeholder.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return O
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/PostLeftRail/index.tsx"),
				d = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				p = s("./src/reddit/models/Vote/index.ts"),
				u = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				h = s.n(u),
				b = s("./src/reddit/components/ClassicPost/placeholder.m.less"),
				g = s.n(b);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const f = Object(l.t)(),
				v = Object(a.c)({
					isFakeSubreddit: l.x
				}),
				C = Object(r.b)(v),
				O = e => {
					const t = {
						interactive: !1,
						voteState: p.a.notVoted
					};
					return o.a.createElement("div", {
						className: Object(i.a)(e.className, g.a.emptyVerticalVotes)
					}, o.a.createElement(d.d, x({
						key: "u"
					}, t)), e.children, o.a.createElement(d.c, x({
						key: "d"
					}, t)))
				},
				E = () => o.a.createElement(O, null, o.a.createElement("div", {
					className: g.a.emptyScore,
					key: "s"
				}));
			t.b = f(C(e => o.a.createElement("div", {
				className: Object(i.a)(e.className, h.a.classicPostStyles, h.a.classicAndCompactPlaceholderStyles)
			}, o.a.createElement(c.b, null, o.a.createElement(E, null)), o.a.createElement("div", {
				className: g.a.mainBody
			}, o.a.createElement("div", {
				className: g.a.thumbnailContainer
			}, o.a.createElement("div", {
				className: Object(i.a)(g.a.thumbnail, Object(m.b)(e))
			})), o.a.createElement("div", {
				className: g.a.content
			}, o.a.createElement("div", {
				key: "a"
			}, o.a.createElement("div", {
				key: "aa",
				className: Object(i.a)(g.a.title, Object(m.b)(e))
			}), o.a.createElement("div", {
				key: "ab",
				className: Object(i.a)(g.a.meta, Object(m.b)(e))
			})), o.a.createElement("div", {
				key: "f",
				className: g.a.flatlist
			}, o.a.createElement("div", {
				key: "fa",
				className: Object(i.a)(g.a.flatlistExpando, Object(m.b)(e))
			}), o.a.createElement("div", {
				key: "fb",
				className: g.a.flatlistSeparator
			}), o.a.createElement("div", {
				key: "fc",
				className: Object(i.a)(g.a.flatListItemOne, Object(m.b)(e))
			}), o.a.createElement("div", {
				key: "fd",
				className: Object(i.a)(g.a.flatListItemTwo, Object(m.b)(e))
			})))))))
		},
		"./src/reddit/components/ClassicPost/placeholder.m.less": function(e, t, s) {
			e.exports = {
				thumbnailContainer: "_3cwq18vPueuAxRSrd1foNB",
				mainBody: "_1jxw1P65tWXN5u8kVHlX-n",
				content: "_2KR7fLQx_7rIv8QaoeXKZw",
				emptyScore: "_6w7aNMh3t6UMe07Q6oWFE",
				emptyVerticalVotes: "_1Xs9oeessHWcuF0VTVxRnl",
				thumbnail: "_2XOZ5bYpLdswvBAYUNa-ly",
				title: "n3AVRrP7HOfc0gAtGFpfv",
				meta: "_1BoNlCqTsaeLXkuZbADxyl",
				flatlist: "_1IgQuZI8L6A0NcShWmf08y",
				flatlistExpando: "_2AMaFX8Gwojg29X4_nOnaL",
				flatlistSeparator: "oljBm1Q059l3l84VHO9VM",
				flatListItemOne: "_2xeK0Acj_38O5kqiHgp7VC",
				flatListItemTwo: "_3WphuhFsMSKk2tQyD3fZeI"
			}
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
				f = s("./src/reddit/constants/elementIds.ts"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				C = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				O = s("./src/reddit/helpers/postCollection.ts"),
				E = s("./src/reddit/models/Post/index.ts"),
				y = s("./src/reddit/models/PostCollection/index.ts"),
				_ = s("./src/reddit/selectors/postCollection.ts"),
				j = s("./src/reddit/selectors/posts.ts"),
				k = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-router-dom/esm/react-router-dom.js")),
				P = s("./src/lib/prettyPrintNumber/index.ts"),
				w = s("./src/lib/timezone/index.ts"),
				I = s("./src/reddit/actions/modal.ts"),
				S = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				T = s("./src/reddit/components/Collection/PostAndPostEventMeta/index.tsx"),
				N = s("./src/reddit/components/PostContainer/index.tsx"),
				M = s("./src/reddit/components/Widgets/PostCollection/PostItem/OverflowMenu/index.tsx"),
				L = s("./src/reddit/helpers/path/index.ts"),
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
						style: f,
						toggleEditStartTimeModal: v,
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
						style: f
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
					}, o.a.createElement(k.a, {
						to: Object(L.b)(b.permalink),
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
					}), g && o.a.createElement(M.a, {
						className: H.a.defaultPostOverflowMenu,
						onRemoveClick: p,
						dropdownId: "collection-post-item-".concat(b.id),
						isFutureEvent: r,
						onStartEventNow: u,
						onEditStartTime: v,
						onAddEventStartTime: v,
						shouldShowAddEventStartTime: !Object(R.a)(b)
					}))))), t === Object(A.s)(b.id, c, A.j.COLLECTION_INFO_POST) && G && o.a.createElement(G, {
						onChange: s,
						onClose: v,
						schedule: Object(w.c)(b),
						shouldShowDeleteButton: !1
					}))
				},
				q = S.a,
				X = e => {
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
						updateSelectedPostRef: f,
						isProfilePage: v
					} = e, C = r && r.url || "", O = h.isSpoiler || h.isNSFW, E = h.isScoreHidden;
					return o.a.createElement(N.a, {
						className: Object(i.a)(H.a.galleryPostContainer, {
							[H.a.isSelectedPost]: l,
							[H.a.isNightmodeOn]: c,
							[H.a.isProfilePage]: v
						}),
						isOverlay: d,
						makePostContainerId: z,
						post: h,
						onClick: m,
						eventFactory: n,
						style: g
					}, o.a.createElement("div", {
						className: H.a.scrollToContainer,
						ref: l && f || void 0
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
					})), b && o.a.createElement(M.a, {
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
						schedule: Object(w.c)(h),
						shouldShowDeleteButton: !1
					}))
				};
			class Q extends o.a.PureComponent {
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
					})) : o.a.createElement(X, V({}, this.props, {
						onPostSelection: this.onPostSelection,
						onRemovePost: this.onRemovePost,
						onStartEventNow: this.onStartEventNow
					})) : o.a.createElement("div", {
						className: H.a.postContainer
					})
				}
			}
			var Y = Object(v.t)({
					currentProfileName: v.h,
					isCommentsPage: v.w,
					isProfilePostListing: v.H,
					isProfilePage: v.G,
					pageLayer: e => e
				})(Object(r.b)(() => Object(a.c)({
					activeModalId: B.a,
					galleryThumbnail: _.e,
					isFutureEvent: _.j,
					language: D.O,
					layout: v.M,
					post: j.N,
					shouldShowCollectionPostEdits: _.t,
					subredditOrProfile: j.Z
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
				})(Object(h.c)(Q))),
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
			}), re = Object(v.t)({
				isProfilePage: v.G,
				pageLayer: e => e
			}), ae = Object(r.b)(() => Object(a.c)({
				collection: _.o,
				displayLayout: _.a,
				followPost: (e, t) => {
					let {
						postId: s
					} = t;
					const n = Object(_.o)(e, {
							postId: s
						}),
						o = n && (n.primaryPostId || n.postIds[0]);
					return o && Object(j.N)(e, {
						postId: o
					}) || null
				},
				post: j.N,
				shouldShowThumbnail: (e, t) => {
					let {
						postId: s
					} = t;
					const n = Object(_.o)(e, {
						postId: s
					});
					return !(!n || !n.id) && Object(_.u)(e, {
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
					const e = document.getElementById(f.b);
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
						id: v
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
						collectionId: v,
						isSubmitPage: !1,
						permalink: e.permalink,
						shouldShowCreatePost: !0
					}))), o.a.createElement("div", {
						className: $.a.postListWrapper
					}, o.a.createElement("div", {
						id: f.b,
						style: oe(this.props),
						className: $.a.collectionList
					}, h && h.trim() && o.a.createElement("div", {
						className: $.a.collectionDescription
					}, h), o.a.createElement("div", {
						className: Object(i.a)({
							[$.a.galleryContainer]: t === y.a.GALLERY
						})
					}, x.map(e => o.a.createElement(Y, {
						collectionId: v,
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
			t.a = re(ae(Object(h.c)(ie)))
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
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/reddit/components/RichTextEditor/Placeholder.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/CommentCreation/Loader.m.less"),
				l = s.n(d);
			const m = "bottom",
				p = e => {
					let {
						isTopLevelComment: t,
						children: s
					} = e;
					return r.a.createElement("div", {
						className: Object(c.a)(l.a.spacer, {
							[l.a.isTopLevelComment]: t
						})
					}, s)
				},
				u = () => r.a.createElement("div", {
					className: Object(c.a)(l.a.byline, Object(i.a)({
						isLoading: !0
					}))
				}),
				h = e => {
					let {
						isTopLevelComment: t
					} = e;
					return r.a.createElement(p, {
						isTopLevelComment: t
					}, r.a.createElement(u, null), r.a.createElement(a.a, {
						isLoading: !0,
						toolbarPosition: m
					}))
				},
				b = Object(n.a)({
					resolved: {},
					chunkName: () => "RichTextEditor",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("vendors~PostCreation~RichTextEditor"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/CommentCreation/index.tsx")),
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
					fallback: r.a.createElement(h, null),
					ssr: !1
				});
			t.a = b
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
				p = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less"),
				u = s.n(p);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = i.a.div("Wrapper", u.a), g = i.a.span("Copy", u.a), x = i.a.wrapped(l.g, "SignupLink", u.a), f = i.a.wrapped(l.j, "LoginLink", u.a);
			t.a = Object(d.c)(e => {
				let {
					className: t,
					isLiveStreaming: s,
					location: n,
					openLoginModal: i,
					openRegisterModal: d,
					origin: l,
					sendEvent: p
				} = e;
				return o.a.createElement(b, {
					className: Object(r.a)(t, {
						[u.a.LiveStreamingWrapper]: s
					})
				}, o.a.createElement(g, {
					className: Object(r.a)({
						[u.a.LiveStreamingCopy]: s
					})
				}, h._("Log in or sign up to leave a comment", null, {
					hk: "1KD7Eh"
				})), o.a.createElement(f, {
					href: Object(c.a)(n, l, "/login"),
					onClick: e => {
						Object(a.a)(e) && (e.preventDefault(), e.stopPropagation(), i(), p(Object(m.a)("user_convert")))
					},
					"data-redditstyle": !0
				}, h._("log in", null, {
					hk: "37jFXB"
				})), o.a.createElement(x, {
					className: Object(r.a)({
						[u.a.LiveStreamingSignupLink]: s
					}),
					href: Object(c.a)(n, l, "/register"),
					onClick: e => {
						Object(a.a)(e) && (e.preventDefault(), e.stopPropagation(), d(), p(Object(m.c)("user_convert")))
					},
					"data-redditstyle": !0
				}, h._("sign up", null, {
					hk: "2GqETx"
				})))
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
				u = s("./node_modules/fbt/lib/FbtPublic.js"),
				h = s("./src/lib/lessComponent.tsx"),
				b = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				g = s("./src/reddit/icons/svgs/Show/index.tsx"),
				x = s("./src/reddit/components/CommentModModeDropdown/index.m.less"),
				f = s.n(x);
			const v = h.a.wrapped(g.a, "Show", f.a);
			var C = e => o.a.createElement(b.e, null, !e.comment.isApproved && o.a.createElement(b.c, {
				displayText: e.comment.approvedBy ? u.fbt._("Approved", null, {
					hk: "3BGaEK"
				}) : u.fbt._("Approve", null, {
					hk: "7CwFx"
				}),
				onClick: e.onApproveComment
			}, o.a.createElement(b.a, null)), !e.comment.bannedBy && o.a.createElement(o.a.Fragment, null, o.a.createElement(b.c, {
				displayText: e.comment.isRemoved ? u.fbt._("Removed", null, {
					hk: "17pv2n"
				}) : u.fbt._("Remove", null, {
					hk: "VP5J0"
				}),
				onClick: e.onRemoveComment
			}, o.a.createElement(b.g, null)), o.a.createElement(b.c, {
				displayText: e.comment.isSpam ? u.fbt._("Removed as spam", null, {
					hk: "2Kv9DF"
				}) : u.fbt._("Remove as spam", null, {
					hk: "OOps6"
				}),
				onClick: e.onSpamComment
			}, o.a.createElement(b.h, null)), o.a.createElement(b.c, {
				displayText: e.comment.isLocked ? u.fbt._("Unlock comment", null, {
					hk: "1canPl"
				}) : u.fbt._("Lock comment", null, {
					hk: "Qp5a0"
				}),
				onClick: e.onLockComment
			}, o.a.createElement(b.f, null))), e.comment.collapsedBecauseCrowdControl && o.a.createElement(b.c, {
				displayText: u.fbt._("Show comment", null, {
					hk: "9SB86"
				}),
				onClick: e.onShowComment
			}, o.a.createElement(v, null)));
			const O = h.a.wrapped(l.a, "StyledDropdown", f.a),
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
				_ = Object(c.a)(O),
				j = y(Object(d.c)(e => {
					const {
						comment: t,
						isDropdownOpen: s,
						onApproveComment: n,
						onLockComment: r,
						onRemoveComment: a,
						onSpamComment: i,
						onShowComment: c,
						sendEvent: d,
						tooltipId: l
					} = e;
					return o.a.createElement(_, {
						isOpen: s,
						tooltipId: l
					}, o.a.createElement(C, {
						onApproveComment: () => {
							n(), d(Object(m.c)("approve", t.id))
						},
						onRemoveComment: () => {
							a(), d(Object(m.c)("remove", t.id))
						},
						onSpamComment: () => {
							i(), d(Object(m.c)("spam", t.id))
						},
						onLockComment: () => {
							r(), d(Object(m.c)(t.isLocked ? "unlock" : "lock", t.id))
						},
						onShowComment: () => {
							c(), d(Object(m.c)("showComment", t.id))
						},
						comment: t
					}))
				}));
			t.a = j
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/actions/comment/index.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				h = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/actions/toaster.ts"),
				g = s("./src/lib/makeApiRequest/index.ts"),
				x = s("./src/lib/omitHeaders/index.ts"),
				f = s("./src/reddit/constants/headers.ts"),
				v = s("./src/reddit/i18n/utils.ts"),
				C = s("./src/reddit/models/Toast/index.ts");
			const O = (e, t) => async (s, n, o) => {
				let {
					apiContext: r
				} = o;
				const a = await (async (e, t, s) => Object(g.b)(Object(x.a)(e, [f.a]), {
						endpoint: "".concat(e.apiUrl, "/api/set_suggested_sort/"),
						method: d.cb.POST,
						data: {
							api_type: "json",
							id: t,
							sort: s
						}
					}))(r(), e, t),
					i = "error-block-".concat(t),
					c = "success-block-".concat(t);
				if (a.ok) {
					s(Object(h.R)({
						[e]: {
							suggestedSort: t
						}
					}));
					const n = t ? Object(v.c)("Suggested sort is on.") : Object(v.c)("Suggested sort is off.");
					s(b.e({
						id: c,
						kind: C.b.SuccessCommunityGreen,
						text: n
					}))
				} else s(b.e({
					id: i,
					kind: C.b.Error,
					text: Object(v.c)("Try again later"),
					buttonText: Object(v.c)("Retry"),
					buttonAction: O(e, t)
				}))
			};
			var E = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				y = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				_ = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				j = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				k = s("./src/reddit/components/TrackingHelper/index.tsx"),
				P = s("./src/reddit/controls/Dropdown/index.tsx"),
				w = s("./src/reddit/controls/Dropdown/Row.tsx"),
				I = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				S = s("./src/reddit/helpers/path/index.ts"),
				T = s("./src/reddit/selectors/telemetry.ts");
			s("./src/telemetry/models/Event.ts");
			const N = (e, t, s, n, o) => r => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(T.listing)(r, void 0, {
						oldSort: s,
						sort: n,
						source: o
					}),
					userSubreddit: Object(T.userSubreddit)(r)
				}),
				M = (e, t) => s => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				L = e => ({
					subreddit: Object(T.subreddit)(e),
					userSubreddit: Object(T.userSubreddit)(e)
				}),
				R = e => t => Object.assign({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable"
				}, L);
			var F = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				A = s("./src/reddit/icons/svgs/Info/index.tsx"),
				B = s("./src/reddit/selectors/activeModalId.ts"),
				D = s("./src/reddit/selectors/comments.ts"),
				W = s("./src/reddit/selectors/moderatorPermissions.ts"),
				H = s("./src/reddit/selectors/posts.ts"),
				V = s("./src/reddit/selectors/tooltip.ts"),
				U = s("./src/reddit/selectors/user.ts"),
				G = s("./src/reddit/components/CommentSort/CommentSort.m.less"),
				K = s.n(G),
				z = s("./src/reddit/reducers/comments/visitHighlightingFilter/index.ts");
			const J = Object(j.a)(P.a),
				q = l.a.wrapped(F.b, "DropdownTriangle", K.a),
				X = l.a.div("HighlightWrapper", K.a),
				Q = l.a.div("Title", K.a),
				Y = e => e === z.a.First ? n.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === z.a.Last ? n.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : n.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class Z extends r.a.Component {
				constructor() {
					super(...arguments), this.track = () => {
						const {
							trackHighlight: e,
							selectedSort: t
						} = this.props;
						if (t !== z.a.None) {
							e(t === z.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (e, t) => {
						this.props.trackHighlight(e, "click"), this.props.changeHighlightSort(t)
					}, this.onDropdownClickFirst = () => {
						this.onDropdownClick("since_first_visit", z.a.First)
					}, this.onDropdownClickLast = () => {
						this.onDropdownClick("since_last_visit", z.a.Last)
					}, this.onDropdownClickNone = () => {
						this.onDropdownClick("do_not_highlight", z.a.None)
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
						selectedSort: o
					} = this.props;
					return r.a.createElement(X, null, r.a.createElement(Q, {
						onClick: s
					}, n.fbt._("highlight comments since", null, {
						hk: "3AxAbU"
					})), r.a.createElement(w.b, {
						className: Object(c.a)(K.a.HighlightPicker, K.a.Row),
						displayText: Y(o),
						id: t,
						onClick: s
					}), r.a.createElement(q, {
						onClick: s
					}), r.a.createElement(J, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, r.a.createElement(w.b, {
						displayText: Y(z.a.First),
						isSelected: o === z.a.First,
						onClick: this.onDropdownClickFirst
					}), r.a.createElement(w.b, {
						displayText: Y(z.a.Last),
						isSelected: o === z.a.Last,
						onClick: this.onDropdownClickLast
					}), r.a.createElement(w.b, {
						displayText: Y(z.a.None),
						isSelected: o === z.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var $ = Z;
			const ee = "CommentSort--SortPicker",
				te = "CommentSort--HighlightPicker",
				se = "CommentSort--Tooltip",
				ne = Object(j.a)(P.a),
				oe = l.a.button("ContestMode", K.a),
				re = l.a.wrapped(F.b, "DropdownTriangle", K.a),
				ae = l.a.wrapped(A.a, "Info", K.a),
				ie = l.a.wrapped(w.b, "Row", K.a),
				ce = l.a.button("SetSort", K.a),
				de = l.a.button("SortLink", K.a),
				le = l.a.div("Title", K.a),
				me = l.a.wrapped(I.a, "ToggleSwitch", K.a),
				pe = l.a.wrapped(_.a, "ViewFullLinkOrOverlayLink", K.a),
				ue = l.a.wrapped(y.c, "Tooltip", K.a),
				he = Object(i.c)({
					commentPermalink: (e, t) => {
						let {
							commentId: s
						} = t;
						return s && Object(D.m)(e, {
							commentId: s
						})
					},
					contestModeIsEnabled: H.E,
					contestModeModalIsOpen: Object(B.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(V.b)(ee),
					highlightIsOpen: Object(V.b)(te),
					hasModeratorPostPermissions: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(W.i)(e, {
							postId: s
						});
						return !!n && n.posts
					},
					postPermalink: H.L,
					showCommentHighlighter: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(U.p)(e),
							o = !!Object(W.i)(e, {
								postId: s
							}),
							r = Object(H.N)(e, {
								postId: s
							});
						return (o || n) && !!r && !!r.previousVisits && r.previousVisits.length > 0
					},
					selectedHighlightSort: D.q
				}),
				be = Object(a.b)(he, (e, t) => {
					let {
						postId: s
					} = t;
					return {
						changeHighlightSort: t => e(Object(p.J)({
							sort: t
						})),
						onOpenDropdown: () => e(Object(m.h)({
							tooltipId: ee
						})),
						onOpenHighlightDropdown: t => {
							e(Object(m.h)({
								tooltipId: te
							})), t()
						},
						onSetSuggestedSort: t => e(O(s, t)),
						hideTooltip: () => e(Object(m.i)()),
						setContestMode: t => e(Object(h.V)(t, s)),
						showTooltip: () => e(Object(m.h)({
							tooltipId: se
						})),
						toggleContestModeModal: () => e(Object(u.i)("CommentSort--ContestMode--Modal"))
					}
				});
			class ge extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, s, n) => this.props.sendEvent(N(e, this.props.isOverlay, t, s, n)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(M("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(R(!this.props.contestModeIsEnabled)), this.props.setContestMode(!this.props.contestModeIsEnabled)
					}
				}
				addSuggestedLabel(e) {
					return n.fbt._("{sort name} (suggested)", [n.fbt._param("sort name", e)], {
						hk: "3pDfQ9"
					})
				}
				render() {
					const {
						changeHighlightSort: e,
						className: t,
						commentPermalink: s,
						contestModeModalIsOpen: o,
						contestModeIsEnabled: a,
						dropdownIsOpen: i,
						elementRef: l,
						hideTooltip: m,
						highlightIsOpen: p,
						hasModeratorPostPermissions: u,
						isOverlay: h,
						location: b,
						postPermalink: g,
						selectedHighlightSort: x,
						showCommentHighlighter: f,
						sort: v,
						suggestedSort: C,
						showTooltip: O,
						toggleContestModeModal: y
					} = this.props, _ = !b.search.includes(d.r.CONFIDENCE), j = v === d.r.CONFIDENCE && _, k = u && !j, P = d.t[v], I = P ? P() : "", T = C && v === C && !j ? this.addSuggestedLabel(I) : I, N = a ? n.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : n.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), L = a ? n.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : n.fbt._("Start", null, {
						hk: "Mjvpj"
					}), R = a ? n.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : n.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), F = a && !u;
					return r.a.createElement("div", {
						className: Object(c.a)(t, K.a.container, {
							[K.a.hideCommentSort]: !f && F
						}),
						ref: l
					}, !F && r.a.createElement(le, {
						onClick: this.onOpenDropdownClick
					}, n.fbt._("Sort by", null, {
						hk: "E6T9r"
					})), !F && r.a.createElement(r.a.Fragment, null, r.a.createElement(ie, {
						className: Object(c.a)(K.a.SortPicker, K.a.Row),
						onClick: this.onOpenDropdownClick,
						displayText: T,
						id: ee,
						noHover: !0,
						skipRoleAttr: !0
					}), r.a.createElement(re, {
						onClick: this.onOpenDropdownClick
					}), r.a.createElement(ne, {
						isOpen: i,
						tooltipId: ee
					}, [d.r.CONFIDENCE, d.r.TOP, d.r.NEW, d.r.CONTROVERSIAL, d.r.OLD, d.r.QA].map(e => {
						const t = s || g,
							n = Object(S.b)(t),
							o = d.t[e],
							a = o ? o() : "";
						return r.a.createElement(pe, {
							isOverlay: h,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: "".concat(n, "?sort=").concat(e)
						}, r.a.createElement(w.b, {
							displayText: C && e === C ? this.addSuggestedLabel(a) : a,
							isSelected: v === e,
							skipRoleAttr: !0
						}))
					}))), k && !F && (C ? r.a.createElement(de, {
						onClick: v !== C ? this.setSortOnClick : this.clearSortOnClick
					}, v !== C ? n.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : n.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : r.a.createElement(ce, null, r.a.createElement(de, {
						onClick: this.setSortOnClick
					}, n.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), r.a.createElement("span", {
						id: se,
						onMouseEnter: O,
						onMouseLeave: m
					}, r.a.createElement(ue, {
						text: n.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: se
					}), r.a.createElement(ae, null)))), u && r.a.createElement(oe, {
						onClick: this.props.toggleContestModeModal
					}, n.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), r.a.createElement(me, {
						on: a
					})), f && r.a.createElement($, {
						changeHighlightSort: e,
						highlightIsOpen: p,
						id: te,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: x,
						trackHighlight: M
					}), o && r.a.createElement(E.a, {
						actionText: L,
						headerText: N,
						modalText: R,
						onConfirm: this.setContestMode,
						toggleModal: y,
						withOverlay: !0
					}))
				}
			}
			t.a = be(Object(k.c)(ge))
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
				f = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				v = s("./src/reddit/helpers/trackers/modTools.ts"),
				C = s("./src/reddit/selectors/moderatingComments.ts"),
				O = s("./src/reddit/selectors/moderatorPermissions.ts"),
				E = s("./src/reddit/selectors/tooltip.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				j = s("./src/reddit/icons/fonts/helpers.tsx"),
				k = s("./src/reddit/icons/fonts/DistinguishShield/index.m.less"),
				P = s.n(k);
			var w = l.a.wrapped(e => r.a.createElement("i", {
					className: "".concat(Object(j.b)("distinguishShield"), " ").concat(e.className)
				}), "DistinguishShield", P.a),
				I = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				S = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				T = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				N = s("./src/reddit/icons/svgs/Show/index.tsx"),
				M = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				L = s.n(M);
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
			const F = l.a.wrapped(b.c, "RestrictedButton", L.a),
				A = l.a.wrapped(_.a, "Approve", L.a),
				B = l.a.wrapped(I.a, "Lock", L.a),
				D = l.a.wrapped(S.a, "Remove", L.a),
				W = l.a.wrapped(T.a, "Spam", L.a),
				H = l.a.wrapped(N.a, "Show", L.a),
				V = l.a.wrapped(w, "DistinguishShield", L.a),
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
					modModeEnabled: x.O
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
			t.c = U(z(l.a.wrapped(Object(g.c)(e => {
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
					sendEvent: _
				} = e, j = R(e, ["className", "comment", "currentUser", "isCommentAuthor", "collapsedBecauseCrowdControl", "language", "moderatorPermissions", "modModeEnabled", "onApproveComment", "onDistinguishComment", "onLockComment", "onRemoveComment", "onShowComment", "onSpamComment", "onToggleDistinguishDropdown", "sendEvent"]);
				const k = Object(f.a)(m),
					P = Object(h.b)(s),
					w = s.isApproved && P,
					I = !!o && o.isEmployee,
					S = !s.isRemoved,
					T = i,
					N = e => _(Object(v.a)(e, s.id));
				return r.a.createElement("div", {
					className: t
				}, (s.bannedBy || P) && r.a.createElement(F, {
					text: w ? n.fbt._("Reapprove", null, {
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
						[L.a.selected]: j.isDistinguishDropdownOpen
					}),
					onClick: () => {
						N("mod_distinguish_menu"), y()
					}
				}, r.a.createElement(V, null), r.a.createElement(u.a, {
					isAdminDistinguished: s.isAdmin,
					isDropdownOpen: j.isDistinguishDropdownOpen,
					isModDistinguished: s.isMod,
					isStickied: s.isStickied,
					isTopLevelComment: !s.parentId,
					isUserEmployee: I,
					isUserMod: k,
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
			}), "CommentModToolsFlatlist", L.a)))
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
				f = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				v = s("./src/reddit/featureFlags/index.ts"),
				C = s("./src/reddit/selectors/economics.ts"),
				O = s("./src/reddit/components/Economics/TopTippers/Icon/index.tsx"),
				E = s("./src/reddit/components/Economics/TopTippers/CommentUsername/index.m.less"),
				y = s.n(E);
			const _ = e => {
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
			var j = Object(r.b)(() => Object(a.c)({
					post: (e, t) => {
						let {
							contentId: s
						} = t;
						return e.posts.models[s]
					},
					tippers: (e, t) => {
						if (v.d.spTopTippers(e)) return Object(C.x)(e, t)
					}
				}))((function(e) {
					if (e.tippers && e.tippers.allTippers.has(e.userId)) {
						const t = e.tippers.topTippers.ranking[e.userId] || 5,
							s = o.a.cloneElement(o.a.Children.only(e.children), {
								style: _(t)
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
				k = s("./src/reddit/components/Flair/index.tsx"),
				P = s("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				w = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				I = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				S = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				T = s("./src/reddit/components/PostTopMeta/index.tsx"),
				N = s("./src/reddit/helpers/isRemoved.ts"),
				M = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				L = s("./src/reddit/helpers/showReportIndicator/index.ts"),
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
				X = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				Q = s("./src/reddit/icons/svgs/Cake/index.tsx"),
				Y = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
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
			const ae = p.a.wrapped(k.b, "RightPositionedAuthorFlair", ne.a),
				ie = p.a.wrapped(D.a, "AdminIcon", ne.a),
				ce = p.a.wrapped(W.a, "Approve", ne.a),
				de = p.a.wrapped(H.a, "Lock", ne.a),
				le = p.a.div("AdminEmeritus", ne.a),
				me = p.a.wrapped(X.a, "Automoderator", ne.a),
				pe = p.a.wrapped(Q.a, "CakeIcon", ne.a),
				ue = p.a.wrapped(Y.a, "Moderator", ne.a),
				he = p.a.wrapped(z.a, "Remove", ne.a),
				be = p.a.wrapped(J.a, "Report", ne.a),
				ge = p.a.wrapped(q.a, "Spam", ne.a),
				xe = p.a.wrapped(K, "Op", ne.a),
				fe = p.a.wrapped(D.a, "Contractor", ne.a),
				ve = p.a.a("MetaLink", ne.a),
				Ce = p.a.wrapped(Z.a, "EditedText", ne.a),
				Oe = p.a.wrapped(Z.a, "StickiedText", ne.a),
				Ee = p.a.span("DeletedText", ne.a),
				ye = p.a.wrapped(Z.a, "MetaSeparator", ne.a),
				_e = p.a.wrapped(Z.a, "CrowdControlText", ne.a),
				je = p.a.wrapped(w.b, "AuthorHoverCard", ne.a),
				ke = p.a.a("RemovalReason", ne.a),
				Pe = p.a.wrapped(g.b, "Component", ne.a),
				we = Object(i.c)("comment.children"),
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
				Me = Object(i.d)("comment.tooltips.adminEmeritus"),
				Le = Object(i.d)("comment.tooltips.moderator"),
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
						return !!Object(C.v)(e, s.subredditId, s.authorId).length
					},
					subredditDisplayText: (e, t) => {
						const s = Object(ee.G)(e, {
							commentId: t.comment.id
						});
						return s ? s.displayText : ""
					},
					topTippersEnabled: v.d.spTopTippers,
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
					compact: v,
					flair: C,
					flairPosition: O,
					hasBadges: E,
					isLivestreaming: y,
					ignoreFlairPosition: _,
					ignoreLock: j,
					language: w,
					lockedTooltipId: I,
					modTooltipId: N,
					onHideTooltip: M,
					onShowTooltip: L,
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
				const J = !_ && O === B.b.Left;
				return o.a.createElement("div", {
					className: Object(d.a)(c, ne.a.container, {
						[ne.a.collapsed]: m,
						[ne.a.hasBadges]: E,
						[ne.a.liveStreaming]: y
					})
				}, C && J && o.a.createElement(k.b, {
					flair: C,
					forceSmallEmojis: v
				}), !Object(A.d)(u) && o.a.createElement(Pe, {
					showAddCustom: !0,
					subredditId: u.subredditId,
					userId: u.authorId,
					uniqueIdentifier: u.id
				}), o.a.createElement(je, {
					postOrComment: u,
					tooltipType: V ? T.c.Lightbox : void 0
				}, o.a.createElement(x.b, {
					ignore: Object(A.d)(u) || !!u.distinguishType && u.distinguishType !== l.C.NONE,
					subredditId: u.subredditId,
					userId: u.authorId
				}, o.a.createElement(He, {
					comment: u,
					isLivestreaming: y,
					isStrong: !!v,
					isAuthorDeleted: Object(A.d)(u),
					topTippersEnabled: z
				}, i && i))), p && o.a.createElement(_e, null, "Crowd Control"), p && o.a.createElement(Z.c, {
					className: ne.a.metaText,
					key: "crowdControlSeparator"
				}), C && !J && o.a.createElement(ae, {
					flair: C,
					forceSmallEmojis: v
				}), !v && o.a.createElement(P.a, {
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
					compact: v,
					adminTooltipId: s,
					adminEmeritusTooltipId: t,
					cakedayTooltipId: a,
					contractorTooltipId: g,
					language: w,
					modTooltipId: N,
					onHideTooltip: M,
					onShowTooltip: L,
					opTooltipId: R,
					renderContractorBadge: H,
					subredditDisplayText: K
				})), !v && o.a.createElement(o.a.Fragment, null, !u.isDeleted && o.a.createElement(Z.b, {
					className: ne.a.metaText,
					isScoreHidden: u.isScoreHidden,
					language: w,
					score: u.score
				}), o.a.createElement(Z.c, {
					className: ne.a.metaText,
					key: "scoreCreatedSeparator"
				}), o.a.createElement(Ve, oe({
					key: "Created"
				}, e)), u.isStickied && ze(w), u.editedAt && We(w, u.editedAt)), o.a.createElement(o.a.Fragment, null, o.a.createElement(Ke, {
					comment: u,
					approveTooltipId: n,
					automodTooltipId: r,
					ignoreLock: j,
					language: w,
					lockedTooltipId: I,
					onHideTooltip: M,
					onShowTooltip: L,
					openRemovalReasonModal: F,
					removeTooltipId: W,
					reportTooltipId: U,
					spamTooltipId: G
				}), o.a.createElement(f.a, {
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
					return e.topTippersEnabled ? o.a.createElement(j, {
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
					return o.a.createElement(ve, {
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
				}) : we(e.language, s, {
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
						"aria-label": Me(s.language),
						children: "Δ",
						id: s.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.distinguishType === l.C.ALUMNI_ADMIN && Je(s.adminEmeritusTooltipId, Me(s.language)), t.isMod && o.a.createElement(ue, {
						desc: Le(s.language, {
							displayText: s.subredditDisplayText
						}),
						id: s.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isMod && Je(s.modTooltipId, Le(s.language, {
						displayText: s.subredditDisplayText
					})), t.isOp && o.a.createElement(xe, {
						desc: Re(s.language),
						id: s.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isOp && Je(s.opTooltipId, Re(s.language)), s.renderContractorBadge && o.a.createElement(fe, {
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
						desc: Object(M.a)(s.language, t),
						id: s.approveTooltipId,
						onMouseEnter: this.onShowApproveTooltip,
						onMouseLeave: s.onHideTooltip
					}), (t.approvedBy || t.isApproved) && Je(s.approveTooltipId, Object(M.a)(s.language, t)), Object(N.a)(t) && o.a.createElement(he, {
						desc: Object(M.c)(s.language, t),
						id: s.removeTooltipId,
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: s.onHideTooltip
					}), Object(N.a)(t) && Je(s.removeTooltipId, Object(M.c)(s.language, t)), Object(N.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && o.a.createElement(ke, {
						onClick: s.openRemovalReasonModal
					}, Object(i.a)(s.language, "modTools.addARemovalReason")), Object(N.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && o.a.createElement(ke, {
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
						desc: Object(M.e)(s.language, t),
						id: s.spamTooltipId,
						onMouseEnter: this.onShowSpamTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.bannedBy && t.isSpam && Je(s.spamTooltipId, Object(M.e)(s.language, t)), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && o.a.createElement(me, {
						className: Object(d.a)({
							[ne.a.removed]: !!t.bannedBy
						}),
						desc: Object(M.b)(s.language),
						id: s.automodTooltipId,
						key: s.automodTooltipId,
						onMouseEnter: this.onShowAutomodTooltip,
						onMouseLeave: s.onHideTooltip
					}), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && Je(s.automodTooltipId, Object(M.b)(s.language)), Object(L.a)(t) && o.a.createElement(be, {
						desc: Object(M.d)(s.language, t.numReports),
						id: s.reportTooltipId,
						onMouseEnter: this.onShowReportTooltip,
						onMouseLeave: s.onHideTooltip
					}), Object(L.a)(t) && Je(s.reportTooltipId, Object(M.d)(s.language, t.numReports)))
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
				return w
			})), s.d(t, "b", (function() {
				return I
			})), s.d(t, "g", (function() {
				return S
			})), s.d(t, "e", (function() {
				return T
			})), s.d(t, "d", (function() {
				return N
			})), s.d(t, "f", (function() {
				return M
			})), s.d(t, "a", (function() {
				return V
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/times.js"),
				r = s.n(o),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/page.ts"),
				p = s("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/helpers/describeApiError/index.ts"),
				b = s("./src/reddit/helpers/path/index.ts"),
				g = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				x = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				f = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				v = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				C = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				O = s("./src/reddit/components/Comments/States/index.m.less"),
				E = s.n(O);
			const y = l.a.wrapped(v.a, "CommentsIcon", E.a),
				_ = l.a.wrapped(C.a, "SnooFacepalm", E.a),
				j = l.a.p("EmptyTitle", E.a),
				k = l.a.p("ErrorTitle", E.a),
				P = l.a.p("EmptyText", E.a),
				w = e => {
					let {
						className: t,
						isChat: s
					} = e;
					return i.a.createElement("div", {
						className: Object(d.a)(E.a.StateContainer, t)
					}, i.a.createElement(y, null), i.a.createElement(j, null, s ? n.fbt._("no messages yet", null, {
						hk: "QOUnY"
					}) : n.fbt._("no comments yet", null, {
						hk: "1yqeoX"
					})), i.a.createElement(P, null, n.fbt._("Be the first to share what you think!", null, {
						hk: "479v5B"
					})))
				},
				I = () => i.a.createElement("div", {
					className: E.a.StateContainer
				}, i.a.createElement(y, null), i.a.createElement(j, null, n.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), i.a.createElement(P, null, n.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				S = e => {
					let {
						link: t
					} = e;
					return i.a.createElement("div", {
						className: E.a.StateContainer
					}, i.a.createElement(y, null), i.a.createElement(j, null, n.fbt._("That comment is missing", null, {
						hk: "1i1U0i"
					})), i.a.createElement(u.h, {
						to: Object(b.b)(t)
					}, n.fbt._("View all comments", null, {
						hk: "2CgaIx"
					})))
				},
				T = Object(c.b)(null, (e, t) => {
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
						onClick: o
					} = e;
					return i.a.createElement("div", {
						className: E.a.StateContainer
					}, i.a.createElement(_, null), i.a.createElement(k, null, t ? Object(h.a)({
						apiError: t,
						language: s,
						isLoggedOut: !1
					}) : n.fbt._("Sorry, comments couldn't load!", null, {
						hk: "2h6LDi"
					})), i.a.createElement(u.f, {
						onClick: o
					}, n.fbt._("retry", null, {
						hk: "BoP8d"
					})))
				}),
				N = () => i.a.createElement("div", null, "500"),
				M = l.a.wrapped(e => {
					let {
						className: t
					} = e;
					return i.a.createElement("div", {
						className: t
					}, i.a.createElement(p.a, null))
				}, "LoadingFullPage", E.a),
				L = l.a.div("CommentsPlaceholderContainer", E.a),
				R = l.a.div("CommentPlaceholder", E.a),
				F = l.a.div("VoteColumn", E.a),
				A = l.a.div("TextColumn", E.a),
				B = l.a.wrapped(f.a, "Upvote", E.a),
				D = l.a.wrapped(x.a, "Downvote", E.a),
				W = () => i.a.createElement("div", {
					className: Object(d.a)(E.a.TopMetaPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				H = () => i.a.createElement("div", {
					className: Object(d.a)(E.a.CommentBodyPlaceholder, Object(g.a)({
						isLoading: !0
					}))
				}),
				V = () => i.a.createElement(L, null, r()(10, e => i.a.createElement(R, {
					key: e
				}, i.a.createElement(F, null, i.a.createElement(B, null), i.a.createElement(D, null)), i.a.createElement(A, null, i.a.createElement(W, null), i.a.createElement(H, null)))))
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
				x = s("./src/reddit/reducers/comments/visitHighlightingFilter/index.ts"),
				f = s("./src/reddit/selectors/comments.ts"),
				v = s("./src/reddit/selectors/communityAwards.ts"),
				C = s("./src/reddit/selectors/moderatorPermissions.ts"),
				O = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				y = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/fbt/lib/FbtPublic.js")),
				_ = s("./src/reddit/models/PostDraft/index.ts"),
				j = s("./src/lib/makeDraftKey/index.ts"),
				k = s("./src/lib/objectSelector/index.ts"),
				P = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				w = s("./src/reddit/icons/fonts/helpers.tsx"),
				I = s("./src/reddit/icons/fonts/Expand/index.m.less"),
				S = s.n(I);
			var T, N, M = m.a.wrapped(e => a.a.createElement("i", {
					className: "".concat(Object(w.b)("expand"), " ").concat(e.className)
				}), "Expand", S.a),
				L = s("./src/reddit/components/Comments/Comment/ExpandButton/index.m.less"),
				R = s.n(L),
				F = m.a.wrapped(e => a.a.createElement("button", e, a.a.createElement(M, null)), "Component", R.a),
				A = s("./node_modules/lodash/defer.js"),
				B = s.n(A),
				D = s("./src/reddit/actions/tooltip.ts"),
				W = s("./src/reddit/selectors/tooltip.ts"),
				H = s("./src/lib/makeCommentPermalink/index.ts"),
				V = s("./src/reddit/actions/gold/modals.ts"),
				U = s("./src/reddit/actions/modal.ts"),
				G = s("./src/reddit/actions/reportFlow.ts"),
				K = s("./src/reddit/helpers/correlationIdTracker.ts"),
				z = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				J = s("./src/reddit/helpers/trackers/lightbox.ts"),
				q = s("./src/reddit/i18n/components.tsx"),
				X = s("./src/reddit/i18n/utils.ts"),
				Q = s("./src/reddit/selectors/activeModalId.ts"),
				Y = s("./src/reddit/selectors/subreddit.ts"),
				Z = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				$ = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				ee = s.n($);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(T || (T = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(N || (N = {}));
			const te = (e, t) => {
					const s = ee.a[t],
						n = ee.a[e];
					return Object(d.a)(s, n)
				},
				se = e => Object(d.a)(ee.a["depth".concat(Math.min(3 * Math.ceil(e.depth / 3), 10))], {
					[ee.a.isInOverlay]: e.isInOverlay,
					[ee.a.isModModeEnabled]: e.isModModeEnabled
				});
			var ne = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				oe = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				re = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				ae = s("./src/higherOrderComponents/makeAsync.tsx"),
				ie = s("./src/reddit/featureFlags/index.ts"),
				ce = s("./src/reddit/selectors/economics.ts");
			const de = Object(ae.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~e8822216"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad08f508"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~c734f0e1"), s.e("EconomicsEntryPointsCommentFlatlistSupportCTA")]).then(s.bind(null, "./src/reddit/components/Economics/EntryPoints/CommentFlatlistSupportCTA/index.tsx")).then(e => e.default)
			});
			var le = Object(i.b)(() => Object(c.c)({
					featureEnabled: ie.d.spSupport,
					userAcceptsSupport: (e, t) => {
						const s = e.comments.models[t.contentId];
						return !!s && Object(ce.l)(e, {
							contentId: s.id,
							subredditId: s.subredditId
						})
					}
				}))((function(e) {
					return e.featureEnabled && e.userAcceptsSupport ? a.a.createElement(de, e) : null
				})),
				me = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				pe = s("./src/reddit/components/ModModeReports/helpers.ts"),
				ue = s("./src/reddit/components/OverflowMenu/index.tsx"),
				he = s("./src/reddit/components/ReportFlow/index.tsx"),
				be = s("./src/reddit/components/ShareMenu/index.tsx"),
				ge = s("./src/reddit/components/TrackingHelper/index.tsx"),
				xe = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				fe = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				ve = s("./src/reddit/helpers/trackers/modTools.ts"),
				Ce = s("./src/reddit/layout/row/Inline/index.tsx"),
				Oe = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Ee = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				ye = s("./src/reddit/icons/fonts/Gild/index.tsx"),
				_e = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				je = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				ke = s("./src/reddit/icons/fonts/Report/index.tsx"),
				Pe = s("./src/reddit/icons/fonts/Save/index.tsx"),
				we = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				Ie = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				Se = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				Te = s.n(Se);
			const Ne = m.a.wrapped(Ee.a, "CommentIcon", Te.a),
				Me = m.a.wrapped(ke.a, "Report", Te.a),
				Le = m.a.wrapped(_e.a, "IgnoreReport", Te.a),
				Re = m.a.wrapped(me.a, "ModActionsMenu", Te.a),
				Fe = m.a.div("OverflowMenuSpacer", Te.a),
				Ae = m.a.wrapped(ue.a, "DropdownRow", Te.a),
				Be = m.a.wrapped(Ce.a, "Flatlist", Te.a),
				De = m.a.button("Button", Te.a),
				We = m.a.wrapped(ne.c, "ModToolsFlatlist", Te.a),
				He = m.a.wrapped(xe.a, "ViewReportsDropdown", Te.a),
				Ve = e => "Comment-".concat(e, "--Modal--DeleteComment"),
				Ue = e => "Distinguish--Dropdown--".concat(e),
				Ge = e => "".concat(e, "-overflow-menu"),
				Ke = e => "View--Reports--".concat(e),
				ze = Object(c.c)({
					currentUser: E.i,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Q.a)(e) === Ve(s.id)
					},
					isDistinguishDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(W.b)(Ue(s.id))(e)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(f.A)(e, {
							commentId: s.id
						})
					},
					isReportsDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(W.b)(Ke(s.id))(e)
					},
					isLoggedIn: E.G,
					postIsArchived: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(O.H)(e, {
							postId: s.postId
						})
					},
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(O.I)(e, {
							postId: s.postId
						})
					},
					postPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(O.L)(e, {
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
						return Object(f.G)(e, {
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
						return Object(O.Z)(e, {
							postId: s.postId
						})
					}
				});
			class Je extends a.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(J.b)(this.props.comment.postId, "comment_".concat(e))), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(ve.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(ve.e)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						this.props.sendEvent(Object(ve.d)("edit", this.props.comment.id)), this.props.handleEdit()
					}, this.handleGild = async () => {
						Object(K.d)(K.a.GildingFlow), this.props.onGildClick();
						const {
							clickGildEvent: e
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(e(this.props.comment.id))
					}, this.handleDelete = () => {
						this.props.sendEvent(Object(ve.d)("delete", this.props.comment.id)), this.props.toggleDeleteCommentModal()
					}, this.handleReportClick = () => {
						this.props.sendEvent(Object(ve.a)("report", this.props.comment.id)), this.props.onReportClick()
					}, this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(ve.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(ve.b)(e, this.props.comment.id))
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
						postIsLocked: f,
						postPermalink: v,
						renderedInOverlay: C,
						sendEvent: O,
						subreddit: E,
						subredditAboutInfo: y,
						toggleDeleteCommentModal: _,
						toggleSendReplies: j,
						trackClick: k
					} = this.props, P = Object(z.a)(b), w = !!s && s.displayText === e.author, I = !!s && s.isEmployee, S = !(y && y.userIsBanned) && (f || x || P && c || e.isLocked ? P && c : c), M = Object(pe.a)(e), L = P && !g && w && !e.bannedBy, R = w && I && !e.bannedBy, F = L || R, A = s && e.isGildable, D = [];
					S && D.push({
						breakpointGroup: N.LoggedInUser,
						icon: a.a.createElement(Ne, null),
						key: "reply",
						onClick: () => {
							i(), B()(() => k("reply")())
						},
						text: Object(X.c)("Reply")
					}), s && !w && D.push(a.a.createElement(le, {
						className: Te.a.supportButton,
						contentId: e.id,
						key: "support-cta",
						subredditId: e.subredditId,
						targetName: e.author
					})), A && D.push({
						breakpointGroup: N.LoggedInUser,
						icon: a.a.createElement(ye.a, null),
						isIconOverflowOnly: !0,
						key: "award",
						onClick: this.handleGild,
						text: Object(X.c)("Give Award")
					}), D.push(a.a.createElement(be.a, {
						dropdownId: "".concat(e.id, "-comment-share-menu"),
						key: "share",
						permalink: Object(H.a)(v, e.id),
						sendEventWithName: this.sendCommentEventWithName,
						subreddit: E
					}, a.a.createElement(De, {
						onClick: () => this.sendCommentEventWithName("share")
					}, a.a.createElement(q.c, null, "share")))), w || D.push({
						breakpointGroup: N.LoggedInUser,
						icon: a.a.createElement(ke.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: Object(X.c)("Report")
					}), D.push({
						breakpointGroup: N.LoggedInUser,
						icon: e.isSaved ? a.a.createElement(Oe.e, null) : a.a.createElement(Pe.a, null),
						isIconOverflowOnly: !0,
						key: "save",
						onClick: this.handleSave,
						text: e.isSaved ? Object(X.c)("Unsave") : Object(X.c)("Save")
					}), w && D.push({
						breakpointGroup: N.LoggedInUser,
						icon: a.a.createElement(we.a, null),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: Object(X.c)("Edit")
					});
					const W = D.map(e => a.a.isValidElement(e) ? e : a.a.createElement(De, {
							className: te(e.breakpointGroup, T.HideIfVWSmaller),
							disabled: l,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text)),
						V = D.map(e => a.a.isValidElement(e) ? null : a.a.createElement(Ae, {
							className: te(e.breakpointGroup, T.HideIfVWLarger),
							displayText: e.text,
							iconWrapperClassName: Te.a.iconWrapper,
							key: e.key,
							onClick: e.onClick,
							textClassName: Te.a.dropdownRowText
						}, e.icon));
					return a.a.createElement(r.Fragment, null, a.a.createElement(Be, {
						className: Object(d.a)(se({
							depth: o,
							isInOverlay: C,
							isModModeEnabled: P && g
						}), t)
					}, W, a.a.createElement(Fe, {
						className: w ? void 0 : te(N.LoggedInUser, T.HideIfVWLarger)
					}, a.a.createElement(ue.b, {
						className: Te.a.overflowMenu,
						disabled: l,
						dropdownId: Ge(e.id),
						onClick: () => O(Object(ve.a)("comment_overflow_menu", e.id))
					}, V, w && a.a.createElement(a.a.Fragment, null, a.a.createElement(Ae, {
						displayText: Object(X.c)("Delete comment"),
						iconWrapperClassName: Te.a.iconWrapper,
						onClick: this.handleDelete,
						textClassName: Te.a.dropdownRowText
					}, a.a.createElement(Ie.b, null)), a.a.createElement(fe.a, {
						text: Object(X.c)("Send me reply notifications"),
						onClick: j,
						isSelected: this.props.sendRepliesToggled
					})))), this.props.isConfirmModalOpen && a.a.createElement(oe.a, {
						actionText: Object(X.c)("delete"),
						cancelActionText: Object(X.c)("keep"),
						headerText: Object(X.c)("Delete comment"),
						modalText: Object(X.c)("Are you sure you want to delete your comment?"),
						onConfirm: n,
						toggleModal: _,
						trackClick: () => {},
						withOverlay: !0
					}), P && a.a.createElement(a.a.Fragment, null, g && a.a.createElement(We, {
						className: te(N.Moderator, T.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: w,
						language: m
					}), a.a.createElement(Re, {
						className: g ? te(N.Moderator, T.HideIfVWLarger) : void 0,
						dropdownId: "".concat(e.id, "-mod-actions-menu"),
						inCommentFlatlist: !0,
						onClick: () => O(Object(ve.a)("comment_mod_action_menu", e.id))
					}, a.a.createElement(je.a, null), a.a.createElement(Z.a, {
						comment: e,
						tooltipId: "".concat(e.id, "-mod-actions-menu")
					}))), Object(pe.c)(e) && !g && a.a.createElement(ne.b, {
						text: "".concat(M),
						onClick: () => {
							h(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: Ke(e.id)
					}, a.a.createElement(He, {
						model: e,
						onIgnoreReports: () => {
							u(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Ke(e.id)
					}), e.ignoreReports ? a.a.createElement(Le, null) : a.a.createElement(Me, null)), F && a.a.createElement(ne.b, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, a.a.createElement(ne.a, null), a.a.createElement(re.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: I,
						isUserMod: P,
						onDistinguishComment: p,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Ue(e.id)
					}))), this.props.reportFlowIsOpen && a.a.createElement(he.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: he.b,
						postId: this.props.comment.postId
					}))
				}
			}
			var qe = Object(i.b)(ze, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n
					} = t;
					return {
						deleteComment: () => n && e(Object(p.db)(s.id, s.postId)),
						handleDelete: () => {
							e(Object(U.i)(Ve(s.id))), e(Object(D.h)({
								tooltipId: Ge(s.id)
							}))
						},
						handleEdit: () => {
							const t = s.media && s.media.rteMode;
							n && e(Object(p.V)({
								commentId: s.id,
								draftKey: Object(j.a)(_.c.edit, s.id),
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
						onGildClick: () => e(Object(V.d)(s.id)),
						onIgnoreReports: () => e(Object(p.pb)(s.id)),
						onReportClick: () => e(Object(G.j)(s.id)),
						onToggleSave: () => e(Object(p.gb)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(D.h)({
							tooltipId: Ue(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(D.h)({
							tooltipId: Ke(s.id)
						})),
						toggleDeleteCommentModal: () => e(Object(U.i)(Ve(s.id))),
						toggleSendReplies: () => e(Object(p.hb)(s.id))
					}
				})(Object(ge.c)(Je)),
				Xe = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Qe = s("./src/reddit/components/GildModal/getGildModalId.ts"),
				Ye = s("./src/reddit/components/GildModal/Loader.tsx"),
				Ze = s("./src/reddit/components/ModModeReports/index.tsx"),
				$e = s("./src/reddit/components/RichTextJson/index.tsx"),
				et = s("./src/reddit/components/VerticalVotes/index.tsx"),
				tt = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				st = s("./src/reddit/constants/componentTestIds.ts"),
				nt = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ot = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				rt = s("./src/reddit/controls/ErrorText/index.tsx"),
				at = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				it = s("./src/reddit/models/Subreddit/index.ts"),
				ct = s("./src/reddit/models/Vote/index.ts"),
				dt = s("./src/reddit/selectors/gild.ts"),
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
			const bt = m.a.wrapped(F, "ExpandButton", pt.a),
				gt = m.a.wrapped(rt.b, "ErrorText", pt.a),
				xt = m.a.wrapped(et.a, "VerticalVotes", pt.a),
				ft = m.a.wrapped(Xe.a, "TopMeta", pt.a),
				vt = m.a.div("CommentContentWrapper", pt.a),
				Ct = m.a.div("CommentWrapper", pt.a),
				Ot = m.a.div("CommentBody", pt.a),
				Et = Object(nt.t)(),
				yt = Object(i.b)(() => Object(c.c)({
					comment: (e, t) => Object(f.n)(e, t),
					currentProfileModPermissions: nt.g,
					depth: (e, t) => Object(f.j)(e, t),
					collapsed: lt.b,
					collapsedBecauseCrowdControl: lt.a,
					flair: f.e,
					focused: f.u,
					gildModalIsOpen: (e, t) => {
						let {
							commentId: s
						} = t;
						const n = Object(Qe.b)(s);
						return Object(dt.c)(e, n)
					},
					isEditing: f.z,
					isLoggedIn: E.G,
					isPendingDeletion: f.A,
					language: E.O,
					moderatorPermissions: (e, t) => {
						const s = Object(f.n)(e, t);
						return s ? Object(C.j)(e, {
							subredditId: s.subredditId
						}) : null
					},
					modModeEnabled: nt.O,
					errorMsgs: f.E,
					replyFormOpen: f.H,
					subreddit: nt.q,
					subredditType: f.J
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
							const [n, o] = t === ct.a.upvoted ? [Object(p.rb)(s), "upvote_comment"] : [Object(p.T)(s), "downvote_comment"];
							r(o)(), e(n)
						}
					}
				}),
				_t = Object(k.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				jt = Et(yt(e => {
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
						isActive: x,
						isEditing: f,
						isHighlighted: v,
						isLoggedIn: C,
						isPendingDeletion: O,
						language: E,
						moderatorPermissions: k,
						modModeEnabled: w,
						onCollapseClick: I,
						onIgnoreReports: S,
						onLineMouseOver: T,
						onVoteClick: N,
						replyFormOpen: M,
						subreddit: L,
						trackClick: R,
						renderedInOverlay: F,
						subredditType: A
					} = e, B = !f && !n.isDeleted && !!u && u.length > 0, D = Object(j.a)(_.c.edit, n.id), W = Object(j.a)(_.c.replyToComment, n.id), H = Object(z.a)(k), V = n.authorIsContractor && A === it.c.EmployeesOnly, U = n.isLocked;
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
					}), a.a.createElement(vt, {
						className: Object(d.a)({
							[pt.a.highlightComment]: v,
							[pt.a.isActive]: x,
							[pt.a.isCollapsed]: i,
							[pt.a.isLocked]: U,
							[pt.a.isPendingDeletion]: O,
							[pt.a.isRemoved]: !!n.bannedBy
						})
					}, a.a.createElement(at.a, null, y.fbt._("level {depth}", [y.fbt._param("depth", m + 1)], {
						hk: "2XnyAV"
					})), a.a.createElement(ft, {
						childrenInfo: t,
						className: Object(d.a)({
							[pt.a.collapsed]: i
						}),
						collapsed: i,
						collapsedBecauseCrowdControl: c,
						comment: n,
						commentsPageKey: o,
						flair: h,
						language: E,
						renderedInOverlay: F,
						renderContractorBadge: V
					}), !i && a.a.createElement(r.Fragment, null, f && a.a.createElement(P.a, {
						className: Object(d.a)(pt.a.EditCommentForm, pt.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: o,
						depth: m,
						draftType: _.c.edit,
						draftKey: D,
						rtJson: Object(tt.a)(n),
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
						submitButtonText: y.fbt._("save edits", null, {
							hk: "3xLSWW"
						})
					}), !f && !n.isDeleted && a.a.createElement(Ot, {
						"data-test-id": st.d
					}, a.a.createElement($e.a, {
						content: Object(tt.a)(n),
						mediaMetadata: n.media && n.media.mediaMetadata,
						rtJsonElementProps: _t(e)
					})), w && H && Object(pe.c)(n) && a.a.createElement(Ze.a, {
						language: E,
						onIgnoreReports: S,
						reportable: n
					}), !f && !n.isDeleted && C && a.a.createElement(qe, {
						comment: n,
						commentsPageKey: o,
						depth: m,
						language: E,
						collapsedBecauseCrowdControl: c,
						modModeEnabled: w,
						moderatorPermissions: l || k,
						renderedInOverlay: F,
						subreddit: L,
						trackClick: R
					}), B && u.map(e => a.a.createElement(gt, {
						key: e,
						language: E
					}, e)), M && a.a.createElement(P.a, {
						className: Object(d.a)(pt.a.EditCommentForm, pt.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: o,
						depth: m,
						draftType: _.c.replyToComment,
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
						submitButtonText: y.fbt._("Reply", null, {
							hk: "2ymsie"
						})
					}))), g && a.a.createElement(Ye.a, null))
				}));
			var kt = e => a.a.createElement(ot.a.Consumer, null, t => a.a.createElement(jt, ut({}, e, {
					trackClick: t
				}))),
				Pt = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				wt = s("./src/reddit/contexts/InsideOverlay.tsx"),
				It = s("./src/reddit/helpers/path/index.ts"),
				St = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				Tt = s("./src/reddit/components/Comments/ContinueThreadLink/index.m.less"),
				Nt = s.n(Tt);
			const {
				fbt: Mt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Lt = m.a.div("Wrapper", Nt.a), Rt = m.a.wrapped(St.a, "ArrowRight", Nt.a), Ft = m.a.wrapped(Pt.a, "LinkOrOverlayLink", Nt.a), At = m.a.span("HoverSpan", Nt.a), Bt = Object(c.c)({
				permalink: (e, t) => Object(f.m)(e, {
					commentId: Object(f.s)(e, t).parentId
				})
			});
			var Dt = Object(i.b)(Bt)(Object(wt.b)(e => {
					let {
						isActive: t,
						isOverlay: s,
						permalink: n
					} = e;
					return a.a.createElement(Lt, {
						className: Object(d.a)({
							[Nt.a.isActive]: t
						})
					}, a.a.createElement(Ft, {
						isOverlay: !!s,
						to: Object(It.b)(n)
					}, a.a.createElement(At, null, Mt._("Continue this thread", null, {
						hk: "3eplK8"
					})), " ", a.a.createElement(Rt, null)))
				})),
				Wt = s("./src/reddit/components/Comments/MoreCommentsItem/index.m.less"),
				Ht = s.n(Wt);
			const {
				fbt: Vt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ut = m.a.div("MoreCommentsItemWrapper", Ht.a), Gt = m.a.p("MoreComments", Ht.a), Kt = m.a.wrapped(Gt, "MoreCommentsInteractive", Ht.a), zt = Object(c.c)({
				moreCommentsItem: f.B,
				moreCommentsPending: f.C
			});
			var Jt = Object(i.b)(zt, (e, t) => ({
					moreCommentsClicked: () => e(Object(p.Z)(t.commentsPageKey, t.moreCommentsId))
				}))(e => {
					let {
						isActive: t,
						moreCommentsClicked: s,
						moreCommentsItem: n,
						moreCommentsPending: o
					} = e;
					return a.a.createElement(Ut, null, o ? a.a.createElement(Gt, null, Vt._("loading...", null, {
						hk: "47z89"
					})) : a.a.createElement(ot.a.Consumer, null, e => a.a.createElement(Kt, {
						className: Object(d.a)({
							[Ht.a.isActive]: t
						}),
						onClick: () => {
							s(), e("load_more_comment")()
						}
					}, Vt._({
						"*": "{number of more replies hidden} more replies",
						_1: "1 more reply"
					}, [Vt._plural(n.numComments, "number of more replies hidden")], {
						hk: "J0jQW"
					}))))
				}),
				qt = s("./node_modules/lodash/times.js"),
				Xt = s.n(qt),
				Qt = s("./src/reddit/components/Comments/ThreadLines/index.m.less"),
				Yt = s.n(Qt);
			const Zt = m.a.wrapped(e => a.a.createElement("div", e, a.a.createElement("i", {
					className: b.m
				})), "Line", Yt.a),
				$t = m.a.div("LineContainer", Yt.a),
				es = m.a.div("ShortLineContainer", Yt.a);
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
					return a.a.createElement($t, null, Xt()(s + 1, e => e === s ? d !== u.a.Comment || t ? null : a.a.createElement(es, {
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
				commentListNode: (e, t) => Object(f.l)(e, t),
				depth: (e, t) => Object(f.j)(e, t),
				isActive: (e, t) => {
					let {
						commentLink: s
					} = t;
					return !!e.shortcuts.activeCommentId && s.id === e.shortcuts.activeCommentId
				},
				isAwarded: (e, t) => {
					let {
						commentLink: s
					} = t;
					const n = Object(f.l)(e, {
						commentLink: s
					});
					return !(s.type !== u.a.Comment || !n || !n.awardCountsById) && Object.keys(n.awardCountsById).some(t => {
						const s = Object(v.a)(e, t);
						return s && s.coinPrice >= g.g
					})
				},
				isHighlighted: (e, t) => {
					let {
						commentLink: s
					} = t;
					const n = Object(f.q)(e);
					if (n === x.a.None) return !1;
					if (s.type !== u.a.Comment) return !1;
					const o = s.id,
						r = Object(f.n)(e, {
							commentId: o
						});
					if (!r) return !1;
					const a = Object(E.p)(e),
						i = !!Object(C.i)(e, {
							postId: r.postId
						}),
						c = Object(O.N)(e, {
							postId: r.postId
						});
					if (!c || !c.previousVisits || c.previousVisits.length < 1) return !1;
					const d = n === x.a.Last ? c.previousVisits[c.previousVisits.length - 1] : c.previousVisits[0];
					return (i || a) && r.created > d
				},
				isNightmodeOn: E.Q
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
					isAwarded: l,
					isHidden: m,
					isHighlighted: p,
					isNightmodeOn: b,
					onLineClick: g,
					onShortLineClick: x,
					parentNodeIds: f,
					renderedInOverlay: v,
					scrollToAndRemeasure: C
				} = e, O = l && !p;
				return a.a.createElement(os, {
					className: Object(d.a)(s, {
						[ns.a.isHidden]: m,
						[ns.a.isAwarded]: O,
						[ns.a.isNightmodeOn]: b
					}),
					id: o.id,
					style: {
						paddingLeft: i * (h.w + h.v) + (o.type === u.a.Comment ? h.w : 0)
					},
					tabIndex: -1
				}, a.a.createElement(ts, {
					collapsed: n,
					depth: i,
					onLineClick: g,
					onLineMouseOver: rs,
					onLineMouseOut: as,
					onShortLineClick: x,
					type: o.type,
					parentNodeIds: f
				}), cs({
					childrenInfo: t,
					clearHovered: as,
					commentLink: o,
					commentsPageKey: r,
					onLineMouseOver: rs,
					isActive: c,
					isHighlighted: p,
					renderedInOverlay: v,
					scrollToAndRemeasure: C
				}))
			});
			const cs = e => {
				let {
					childrenInfo: t,
					clearHovered: s,
					commentLink: n,
					commentsPageKey: o,
					isActive: r,
					isHighlighted: i,
					onLineMouseOver: c,
					renderedInOverlay: d,
					scrollToAndRemeasure: l
				} = e;
				switch (n.type) {
					case u.a.Comment:
						return a.a.createElement(kt, {
							childrenInfo: t,
							clearHovered: s,
							commentId: n.id,
							commentsPageKey: o,
							isActive: r,
							isHighlighted: i,
							onLineMouseOver: c,
							renderedInOverlay: d,
							scrollToAndRemeasure: l
						});
					case u.a.MoreComments:
						return a.a.createElement(Jt, {
							commentsPageKey: o,
							isActive: r,
							moreCommentsId: n.id
						});
					case u.a.ContinueThread:
						return a.a.createElement(Dt, {
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
			const fs = h.f + 10,
				vs = 65,
				Cs = m.a.wrapped(ms.b, "Scroller", xs.a),
				Os = Object(c.c)({
					allCollapsed: f.a,
					commentLinks: f.k,
					commentThreadLinkSet: f.p,
					language: E.O,
					measureScrollFPS: ie.d.measureScrollFPS,
					moreComments: f.b,
					postPermalink: O.L
				}),
				Es = Object(i.b)(Os, (e, t) => ({
					onCommentEnteredViewport: t => e(Object(p.L)(t)),
					onCommentLeftViewport: (t, s) => e(Object(p.Q)(t, s))
				})),
				ys = new bs.a(500),
				_s = new bs.a(500),
				js = (e, t) => {
					const s = "entered-".concat(e);
					let n = ys.get(s);
					return void 0 === n && (n = () => {
						t.onCommentEnteredViewport(e)
					}, ys.set(s, n)), n
				},
				ks = (e, t) => {
					const s = "left-".concat(e);
					let n = _s.get(s);
					return void 0 === n && (n = s => {
						t.onCommentLeftViewport(e, s)
					}, _s.set(s, n)), n
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
					} = this.props, i = js(e.id, {
						onCommentEnteredViewport: n,
						onCommentLeftViewport: o
					}), c = ks(e.id, {
						onCommentEnteredViewport: n,
						onCommentLeftViewport: o
					});
					return {
						estHeight: ds.b(e.id) ? 0 : vs,
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
						scrollToChildPadding: fs,
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
				f = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/CommentsLink/index.m.less"),
				O = s.n(C);
			const E = Object(r.b)(() => Object(i.c)({
					isChatPostExperiment: g.d,
					isPostSEOEligible: x.f,
					language: v.O,
					postPermalink: f.L,
					shouldOpenPostInNewTab: v.S
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
					postPermalink: f,
					shouldOpenPostInNewTab: v,
					shouldShowIcon: C = !0,
					shouldShowText: E = !0,
					text: _,
					type: j
				} = e, k = i && !r && !m, P = r && !c, w = o.a.createElement(y, {
					type: j,
					numComments: g,
					isChatPostExperiment: n,
					language: u,
					modModeEnabled: b,
					hasModPostPerms: s,
					shouldShowIcon: C,
					shouldShowText: E,
					text: _
				});
				return k ? o.a.createElement("div", {
					className: Object(d.a)(O.a.commentsLink, O.a.defaultCursorWrapper, t),
					onClick: x
				}, w) : o.a.createElement(a.a, {
					rel: "nofollow",
					"data-click-id": "comments",
					"data-test-id": p.a,
					className: Object(d.a)(O.a.commentsLink, O.a.link, t),
					target: v ? "_blank" : void 0,
					to: P ? Object(h.b)(f) : Object(l.a)(f, !0),
					onClick: x
				}, w)
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
				f = s("./src/reddit/components/CommentsPageAd/index.m.less"),
				v = s.n(f),
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
				_ = C.a.wrapped(c.a, "BannerAd", v.a),
				j = (e, t) => {
					let s = "";
					return t && (s += "overlay-"), s += "comment-".concat(e)
				},
				k = C.a.div("CommentsPageAdContainer", v.a);
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
					return i.a.createElement(k, {
						innerRef: e => {
							this.container = e
						}
					}, this.props.ads.length > 0 && i.a.createElement(l.BlankPost, {
						post: this.props.ads[0],
						onPostViewable: c,
						pixelPostHasEnteredView: e,
						pixelPostHasExitedView: t
					}), this.state.enoughSpace && i.a.createElement(_, {
						id: j(a, s),
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
				f = s("./src/reddit/components/SidebarFooter/index.tsx"),
				v = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				C = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				O = s("./src/reddit/components/Widgets/AdRules/index.tsx"),
				E = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				y = s("./src/reddit/featureFlags/component.tsx"),
				_ = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				j = s("./src/reddit/models/Post/index.ts"),
				k = s("./src/reddit/selectors/experiments/postSeo.ts"),
				P = s("./src/reddit/selectors/subreddit.ts"),
				w = s("./src/reddit/selectors/user.ts"),
				I = s("./src/reddit/components/CommentsPageSidebar/index.m.less"),
				S = s.n(I);
			const T = Object(y.a)("spPoints", h.a),
				N = Object(y.a)("spLeaderboard", b.a),
				M = Object(n.a)({
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
				L = Object(d.c)({
					isLoggedIn: w.G,
					postSEOV2IdCardVariant: k.k,
					widgets: Object(p.a)(P.r)
				}),
				R = Object(c.b)(L);
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
					} = this.props, a = !Object(k.a)(r) && !Object(k.g)(r);
					return s ? i.a.createElement(i.a.Fragment, null, i.a.createElement(x.a, {
						postId: o.id,
						isOverlay: s,
						listingName: n,
						placement: m.c.BELOW_THE_FOLD,
						placementIndex: e,
						position: _.a.BOTTOM,
						refreshKey: o.id,
						sizes: m.n,
						commentsPageKey: t
					}), i.a.createElement(f.a, null)) : i.a.createElement(C.a, {
						adComponent: a ? i.a.createElement(x.a, {
							postId: o.id,
							isOverlay: s,
							listingName: n,
							placement: m.c.BELOW_THE_FOLD,
							placementIndex: e,
							position: _.a.BOTTOM,
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
					const h = Object(k.a)(r) || Object(k.g)(r),
						b = i.a.createElement(x.a, {
							postId: o.id,
							isOverlay: n,
							listingName: c,
							placement: m.c.ABOVE_THE_FOLD,
							placementIndex: p++,
							position: _.a.FIRST,
							refreshKey: o.id,
							sizes: m.i,
							commentsPageKey: t
						});
					return i.a.createElement("div", {
						className: Object(l.a)(S.a.outerWrapper, e)
					}, Object(j.j)(o) ? i.a.createElement(M, {
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
					}), b, s && d.map((e, t) => i.a.createElement(v.a, {
						key: "widgetSpacer".concat(t)
					}, i.a.createElement(E.a, {
						subredditName: c,
						widget: e
					}))), o.isSponsored && i.a.createElement(v.a, null, i.a.createElement(O.a, null)), this.renderFooter(p++))
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
				f = s.n(x);
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js"), C = "500px", O = 3, E = Object(a.c)({
				hasDismissedTruncation: u.b,
				isLoggedIn: g.F,
				isPostSEOEligible: b.f,
				listingBelowAllVariant: h.b,
				postSEOV2TruncatedVariant: b.l
			}), y = Object(r.b)(E);
			class _ extends o.a.Component {
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
					} = this.props, _ = !u, j = Object(h.a)(g), k = !(!y || Object(m.e)(y)), P = c && k && (x >= O && !b || j && !r) && (j || _), w = P && !e, I = P ? f.a.TruncatedComments : "";
					return o.a.createElement("div", {
						onClick: E,
						ref: a
					}, o.a.createElement("div", {
						className: Object(i.a)(f.a.ContentWrapper, s, I),
						style: {
							"--commentswrapper-gradient-color": Object(p.a)(this.props).body,
							maxHeight: P ? C : "unset"
						}
					}, t), w && o.a.createElement(l.f, {
						className: f.a.MoreCommentsButton,
						onClick: n,
						"data-redditstyle": !0
					}, v._("View entire discussion ( {number of comments} comments)", [v._param("number of comments", Object(d.b)(x))], {
						hk: "OzcHJ"
					})))
				}
			}
			t.a = Object(c.a)(y(_))
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
				d = s("./src/lib/loginHref/index.ts"),
				l = s("./src/reddit/actions/contentGate.ts"),
				m = s("./src/reddit/actions/preferences.ts"),
				p = s("./src/reddit/components/CreateCommunityButton/index.tsx"),
				u = s("./src/lib/lessComponent.tsx"),
				h = s("./src/reddit/components/Footer/index.m.less"),
				b = s.n(h);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = u.a.div("FooterContainer", b.a), f = u.a.div("UserAgreement", b.a), v = u.a.a("UserAgreementLink", b.a), C = u.a.a("PrivacyLink", b.a);
			var O = () => r.a.createElement(x, null, r.a.createElement(f, null, g._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [g._param("=User Agreement", r.a.createElement(v, {
					href: "".concat(n.a.redditUrl, "/help/useragreement")
				}, g._("User Agreement", null, {
					hk: "2srkM2"
				}))), g._param("=Privacy Policy", r.a.createElement(C, {
					href: "".concat(n.a.redditUrl, "/help/privacypolicy")
				}, g._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), g._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				E = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				y = s("./src/reddit/components/RichTextJson/index.tsx"),
				_ = (s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/lodash/flatMap.js")),
				j = s.n(_),
				k = s("./src/lib/linkMatchers/index.ts"),
				P = s("./src/lib/linkMatchers/customLinks.ts"),
				w = s("./src/reddit/controls/OutboundLink/index.tsx");
			const I = /\[(.+?)\]\((.+?)\)/g,
				S = e => {
					const t = e.split(I);
					if (1 === t.length) return [e];
					const s = [];
					for (let n = 0; n < t.length; n += 3) {
						const [e, o, r] = t.slice(n, n + 3);
						s.push(e), s.push([r, o])
					}
					return s
				};
			var T = r.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = j()(t, S)), e.parseRegularLinks && (t = j()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = k.e.add(P.g.subreddit.prefix, P.g.subreddit.config).match(e);
						if (!t) return [e];
						const s = [];
						let n = null;
						for (const o of t) s.push(e.slice(n ? n.lastIndex : 0, o.index)), n = o, s.push([o.url, o.text]);
						return n && s.push(e.slice(n.lastIndex)), s
					})(e))), r.a.createElement(r.a.Fragment, null, " ", t.map((t, s) => {
						if (Array.isArray(t)) {
							const [n, o] = t;
							return r.a.createElement(w.a, {
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
				N = s("./src/reddit/contexts/PageLayer/index.tsx"),
				M = s("./src/reddit/controls/Button/index.tsx"),
				L = s("./src/reddit/models/ContentGate.ts"),
				R = s("./src/reddit/selectors/meta.ts"),
				F = s("./src/reddit/selectors/user.ts"),
				A = s("./src/reddit/components/ContentGate/index.m.less"),
				B = s.n(A);
			const {
				fbt: D
			} = s("./node_modules/fbt/lib/FbtPublic.js"), W = u.a.div("ButtonsContainer", B.a), H = u.a.div("Container", B.a), V = u.a.div("Description", B.a), U = u.a.div("PrivateSubredditDetails", B.a), G = u.a.div("PrivateSubredditDescription", B.a), K = u.a.h3("PrivateSubredditName", B.a), z = u.a.a("Link", B.a), J = u.a.wrapped(M.h, "LinkRouterButton", B.a), q = u.a.wrapped(M.g, "LinkButton", B.a), X = u.a.wrapped(M.k, "SecondaryLinkRouterButton", B.a), Q = u.a.wrapped(M.j, "SecondaryLinkButton", B.a), Y = u.a.wrapped(J, "GoHomeLinkButton", B.a), Z = u.a.img("Image", B.a), $ = u.a.img("ImagePlaceholder", B.a), ee = u.a.wrapped(J, "LeftLinkRouterButton", B.a), te = u.a.wrapped(q, "LeftLinkButton", B.a), se = u.a.wrapped(Q, "SecondaryLeftLinkButton", B.a), ne = u.a.wrapped(X, "SecondaryLeftLinkRouterButton", B.a), oe = u.a.h3("Title", B.a), re = u.a.div("PageBody", B.a), ae = u.a.div("QuarantineMessageWrapper", B.a), ie = Object(c.c)({
				isLoggedIn: F.F,
				language: F.O,
				origin: R.h,
				user: F.i
			}), ce = Object(N.t)(), de = Object(a.b)(ie, (e, t) => {
				let {
					subredditName: s
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(m.A(s)), window.location.reload()
					},
					setNSFWPreference: async () => {
						await e(Object(l.l)())
					}
				}
			}), le = e => {
				const {
					banMessage: t,
					contentGateType: s,
					continueToQuarantinedSubreddit: o,
					isLoggedIn: a,
					language: i,
					location: c,
					origin: m,
					pageLayer: u,
					quarantineRequiresEmail: h,
					quarantineMessage: b,
					quarantineMessageHtml: g,
					quarantineMessageRTJson: x,
					setNSFWPreference: f,
					subredditDescription: v,
					subredditName: C,
					user: O
				} = e, _ = () => {
					a ? f() : Object(l.k)(), window.location.reload()
				};
				switch (s) {
					case L.a.GoldSubreddit:
						return r.a.createElement("div", null, r.a.createElement(Z, {
							src: "".concat(n.a.assetPath, "/img/gold/premium-crest.png")
						}), r.a.createElement(oe, null, D._("r/{community name} is a Reddit Premium community", [D._param("community name", C)], {
							hk: "2lyDwB"
						})), r.a.createElement(V, null, D._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), r.a.createElement(W, null, O ? r.a.createElement(se, {
							href: "".concat(n.a.redditUrl, "/premium")
						}, D._("Get Premium", null, {
							hk: "3ChWi4"
						})) : r.a.createElement(te, {
							href: Object(d.a)(c, m)
						}, D._("Sign Up", null, {
							hk: "rvpjy"
						})), O ? r.a.createElement(J, {
							to: "/"
						}, D._("Go Home", null, {
							hk: "49p4or"
						})) : r.a.createElement(Q, {
							href: Object(d.a)(c, m)
						}, D._("Log In", null, {
							hk: "35J1JT"
						}))));
					case L.a.Nsfw:
					case L.a.NsfwCustomFeed:
						return r.a.createElement("div", null, r.a.createElement(Z, {
							src: "".concat(n.a.assetPath, "/img/content-gate-icons/nsfw.png")
						}), r.a.createElement(oe, null, s === L.a.Nsfw ? D._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : D._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), r.a.createElement(V, null, D._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), r.a.createElement(W, null, r.a.createElement(ee, {
							to: "/"
						}, D._("No", null, {
							hk: "3fMglW"
						})), r.a.createElement(Q, {
							onClick: _
						}, D._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case L.a.PrivateSubreddit:
						return r.a.createElement("div", null, r.a.createElement(Z, {
							src: "".concat(n.a.assetPath, "/img/content-gate-icons/private.png")
						}), r.a.createElement(oe, null, D._("You must be invited to visit this community", null, {
							hk: "dHP8K"
						})), v && v.length && r.a.createElement(U, null, r.a.createElement(K, null, "r/", C), r.a.createElement(G, null, r.a.createElement("div", null, v))), r.a.createElement(V, null, D._("The moderators in this community have set it to private. You must be a moderator or approved user to visit.", null, {
							hk: "nwL0k"
						})), r.a.createElement(W, null, O ? r.a.createElement(se, {
							href: "".concat(n.a.redditUrl, "/message/compose?to=/r/").concat(C)
						}, D._("Message Mods", null, {
							hk: "vVe1i"
						})) : r.a.createElement(se, {
							href: Object(d.a)(c, m)
						}, D._("Sign Up", null, {
							hk: "rvpjy"
						})), r.a.createElement(J, {
							to: "/"
						}, O ? D._("Go Home", null, {
							hk: "49p4or"
						}) : D._("Explore Reddit", null, {
							hk: "3IwwVU"
						}))));
					case L.a.QuarantinedSubreddit:
						return r.a.createElement("div", null, r.a.createElement(Z, {
							src: "".concat(n.a.assetPath, "/img/content-gate-icons/quarantined.png")
						}), r.a.createElement(oe, null, D._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), r.a.createElement(V, null, D._("This community is {=quarantined}", [D._param("=quarantined", r.a.createElement(z, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, D._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), r.a.createElement(ae, null, x ? r.a.createElement(y.a, {
							content: x,
							rtJsonElementProps: {
								pageLayer: u
							}
						}) : g ? r.a.createElement(E.a, {
							html: g
						}) : b || D._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), D._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), r.a.createElement(W, null, ((e, t, s, o) => {
							return !(e && e.hasVerifiedEmail) && o ? r.a.createElement(W, null, r.a.createElement(ne, {
								to: "/"
							}, D._("No Thank You", null, {
								hk: "4B26AR"
							})), r.a.createElement(q, {
								href: "".concat(n.a.redditUrl, "/prefs/update")
							}, D._("Verify Email", null, {
								hk: "1893cq"
							}))) : r.a.createElement(W, null, r.a.createElement(ee, {
								to: "/"
							}, D._("No Thank You", null, {
								hk: "4B26AR"
							})), r.a.createElement(Q, {
								onClick: s
							}, D._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(O, 0, o, h)));
					case L.a.SubredditBanned:
						return r.a.createElement("div", null, r.a.createElement(Z, {
							src: "".concat(n.a.assetPath, "/img/content-gate-icons/banned.png")
						}), r.a.createElement(oe, null, D._("r/{community name} has been banned from Reddit", [D._param("community name", C)], {
							hk: "2at9Se"
						})), (e => r.a.createElement(V, null, e ? r.a.createElement(T, {
							linkClassName: B.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : D._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), r.a.createElement(W, null, r.a.createElement(J, {
							to: "/"
						}, D._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case L.a.SubredditBlockedForLegalReason:
						return r.a.createElement("div", null, r.a.createElement(Z, {
							src: "".concat(n.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), r.a.createElement(oe, null, D._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), r.a.createElement(W, null, r.a.createElement(J, {
							to: "/"
						}, D._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case L.a.SubredditDoesNotExist:
						return r.a.createElement("div", null, r.a.createElement($, null), r.a.createElement(oe, null, D._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), r.a.createElement(V, null, D._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), r.a.createElement(W, null, O && r.a.createElement(p.a, {
							eventSource: "content_gate"
						}), r.a.createElement(Y, {
							to: "/"
						}, D._("Go Home", null, {
							hk: "49p4or"
						}))));
					case L.a.ProfileDoesNotExist:
					case L.a.ProfileDeleted:
					case L.a.ProfileSuspended:
					case L.a.ProfileBlockedForLegalReason:
						return r.a.createElement("div", null, r.a.createElement(Z, {
							src: "".concat(n.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), r.a.createElement(oe, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case L.a.ProfileBlockedForLegalReason:
									return D._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case L.a.ProfileDeleted:
									return D._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case L.a.ProfileSuspended:
									return r.a.createElement(r.a.Fragment, null, D._("This account has been {=suspended} .", [D._param("=suspended", r.a.createElement(z, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, D._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case L.a.ProfileDoesNotExist:
									return r.a.createElement(r.a.Fragment, null, r.a.createElement(oe, null, D._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), r.a.createElement(V, null, D._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), r.a.createElement(W, null, r.a.createElement(Y, {
							to: "/"
						}, D._("Go Home", null, {
							hk: "49p4or"
						}))));
					case L.a.CustomFeedDoesNotExist:
						return r.a.createElement("div", null, r.a.createElement(Z, {
							src: "".concat(n.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), r.a.createElement(oe, null, D._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), r.a.createElement(W, null, r.a.createElement(Y, {
							to: "/"
						}, D._("Go Home", null, {
							hk: "49p4or"
						}))));
					case L.a.PostBlockedForLegalReason:
						return r.a.createElement("div", null, r.a.createElement(Z, {
							src: "".concat(n.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), r.a.createElement(oe, null, D._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), r.a.createElement(W, null, r.a.createElement(J, {
							to: "/"
						}, D._("Explore Reddit", null, {
							hk: "FrUWU"
						}))))
				}
			};
			t.a = ce(de(Object(i.i)(e => r.a.createElement(H, null, r.a.createElement("div", null, r.a.createElement(re, null, le(e))), r.a.createElement(O, null)))))
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
			const f = {
					height: 200,
					width: 200
				},
				v = e => {
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
			class _ extends r.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = f
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
								position: o ? this.props.defaultTooltipPosition : v(this.props.defaultTooltipPosition)
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
			t.a = y(_)
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
				f = s("./src/lib/lessComponent.tsx");
			const v = "create-community-button",
				C = f.a.wrapped(l.i, "SecondaryButton", x.a),
				O = f.a.wrapped(c.c, "StyledTooltip", x.a),
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
						tooltipId: v
					})),
					onHideTooltip: () => e(Object(i.i)())
				}
			})(Object(d.c)(e => {
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
					id: v
				}, o.a.createElement(u.c, null, "Create Community"), c ? o.a.createElement(O, {
					caretOnTop: !0,
					tooltipId: v,
					text: Object(h.c)("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.")
				}) : d ? o.a.createElement(O, {
					caretOnTop: !0,
					tooltipId: v,
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				p = s("./src/reddit/components/PostMeta/index.tsx"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				h = s("./src/reddit/components/SourceLink/index.tsx"),
				b = s("./src/reddit/components/Thumbnail/index.tsx"),
				g = s("./src/lib/constants/index.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/CrosspostBox/index.m.less"),
				C = s.n(v),
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
				_ = O.a.div("PostMetaWrapper", C.a),
				j = O.a.wrapped(u.c, "PostTitle", C.a),
				k = O.a.div("FlatList", C.a),
				P = O.a.div("FlatItem", C.a),
				w = O.a.span("FlatListDotSpacer", C.a),
				I = O.a.wrapped(y, "LinkContainer", C.a),
				S = O.a.div("Content", C.a),
				T = O.a.div("ThumbnailContainer", C.a),
				N = Object(c.c)({
					isCurrentUserProfilePost: x.j,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== g.Ab.TOPIC),
					language: f.O,
					post: x.N,
					shouldOpenPostInNewTab: f.S,
					subreddit: x.Z
				}),
				M = Object(a.b)(N);
			t.a = M(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: n,
					mediaProps: o,
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
						tooltipType: "".concat("CrosspostBox", "--").concat(o.isListing)
					},
					l = t;
				return a && !a.media ? r.a.createElement(I, {
					className: l
				}, r.a.createElement(S, null, r.a.createElement(_, null, r.a.createElement(p.a, d)), L(a), a.source && r.a.createElement(h.a, {
					post: a
				}), F(e)), B(e)) : r.a.createElement(y, {
					className: l
				}, r.a.createElement(_, null, r.a.createElement(p.a, d)), L(a), R(e), F(e))
			});
			const L = e => r.a.createElement(j, {
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
					return r.a.createElement("div", null, r.a.createElement(m.a, E({}, n, {
						className: C.a.mediaContainer
					})))
				},
				F = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(k, null, r.a.createElement(P, null, n.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [n.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(w, null), r.a.createElement(P, null, A(e)))
				},
				A = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: o
					} = t;
					return r.a.createElement(i.a, {
						"data-click-id": "comments",
						to: Object(d.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, n.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [n.fbt._plural(o, "comment count", Object(l.b)(o))], {
						hk: "xPYWL"
					}))
				},
				B = e => r.a.createElement(T, null, r.a.createElement(b.a, {
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
				f = e => o.a.createElement(b, {
					onClick: e.selected ? void 0 : e.onClick
				}, e.selected ? o.a.createElement(x, null) : o.a.createElement(g, null), e.text),
				v = a.a.wrapped(e => {
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
					}, o.a.createElement(f, {
						onClick: () => p(r.C.NONE, null),
						selected: !d && !n,
						text: Object(c.c)("Undistinguish")
					}), i && o.a.createElement(f, {
						onClick: () => p(r.C.MODERATOR, null),
						selected: d && !l,
						text: Object(c.c)("Distinguish as Mod")
					}), m && i && o.a.createElement(f, {
						onClick: () => p(r.C.MODERATOR, !0),
						selected: l,
						text: Object(c.c)("Distinguish as Mod and Sticky")
					}), a && o.a.createElement(f, {
						onClick: () => p(r.C.ADMIN, null),
						selected: n,
						text: Object(c.c)("Distinguish as Admin")
					}))
				}, "DistinguishOptions", u.a);
			var C = Object(i.a)(v);
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
				getComponent: () => Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~e8822216"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad08f508"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~c734f0e1"), s.e("EconomicsCommunityTipJar")]).then(s.bind(null, "./src/reddit/components/Economics/CommunityTipJar/index.tsx")).then(e => e.default)
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
				f = h.a.span("Container", u.a),
				v = h.a.wrapped(l.a, "CalendarIcon", u.a),
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
							d = new Date(e * i.Eb);
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
					else if (u === r.a.Future) E = o.a.createElement(b, null, o.a.createElement(v, null), h);
					else {
						if (u !== r.a.Past) return null;
						E = o.a.createElement(g, null, o.a.createElement(v, null), h)
					}
					return o.a.createElement(f, {
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				p = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				u = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				h = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"),
				b = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				g = s("./src/reddit/icons/fonts/helpers.tsx"),
				x = s("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less"),
				f = s.n(x);
			var v = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
					className: "".concat(Object(g.b)("expandoMediaLightbox"), " ").concat(e.className),
					onClick: e.onClick
				}), "LightboxIcon", f.a),
				C = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				O = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				E = s("./src/reddit/icons/fonts/Link/index.tsx"),
				y = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				j = s("./src/reddit/icons/fonts/Text/index.tsx"),
				k = s("./src/reddit/models/Media/index.ts"),
				P = s("./src/reddit/components/ExpandoButton/index.m.less"),
				w = s.n(P);
			const I = Object(a.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					}))
				})),
				S = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					const s = Object(c.a)(w.a.icon, w.a.hideOnHover);
					if (t) return r.a.createElement(u.a, {
						className: s
					});
					switch (e) {
						case k.n.GIFVIDEO:
							return r.a.createElement(O.a, {
								className: s
							});
						case k.n.IMAGE:
							return r.a.createElement(_.a, {
								className: s
							});
						case k.n.TEXT:
						case k.n.RTJSON:
							return r.a.createElement(j.a, {
								className: s
							});
						case k.n.VIDEO:
							return r.a.createElement(C.a, {
								className: s
							});
						case k.n.EMBED:
						default:
							return r.a.createElement(E.a, {
								className: s
							})
					}
				};
			t.a = I(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: o,
					isExpanded: a,
					post: l,
					toggle: u,
					useMediaIcons: g
				} = e, x = s || l, f = o && !!s;
				return x.media && !(("rtjson" === x.media.type || "text" === x.media.type) && !Object(p.a)(x)) ? r.a.createElement("button", {
					"aria-expanded": a,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, w.a.outer),
					"data-click-id": a ? "expando_close" : "expando_open",
					onClick: u
				}, a ? r.a.createElement(h.a, {
					className: w.a.icon
				}) : g ? r.a.createElement(r.a.Fragment, null, S(x.media && x.media.type, f), r.a.createElement(b.a, {
					className: Object(c.a)(w.a.icon, w.a.showOnHover)
				})) : r.a.createElement(b.a, {
					className: w.a.icon
				})) : x.source && x.source.url ? r.a.createElement(m.a, {
					"aria-label": n.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, w.a.outer),
					"data-click-id": "expando_open",
					href: x.source.url,
					isSponsored: l.isSponsored,
					postId: l.id,
					source: l.source,
					target: "_blank"
				}, r.a.createElement(y.a, {
					className: Object(c.a)(w.a.icon, w.a.outboundLinkIcon)
				})) : r.a.createElement(i.a, {
					"aria-label": n.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, w.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(x.permalink),
					rel: "nofollow"
				}, r.a.createElement(v, {
					className: w.a.icon
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
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
				f = s("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				v = s("./src/reddit/components/CommentsLink/index.tsx"),
				C = s("./src/higherOrderComponents/makeAsync.tsx"),
				O = s("./src/reddit/featureFlags/index.ts"),
				E = s("./src/reddit/selectors/economics.ts");
			const y = Object(C.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~e8822216"), s.e("vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad08f508"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~c734f0e1"), s.e("EconomicsEntryPointsPostFlatlistSupportCTA")]).then(s.bind(null, "./src/reddit/components/Economics/EntryPoints/PostFlatlistSupportCTA/index.tsx")).then(e => e.default)
			});
			var _ = Object(a.b)(() => Object(i.c)({
					featureEnabled: O.d.spSupport,
					userAcceptsSupport: (e, t) => {
						const s = e.posts.models[t.contentId];
						return !!s && Object(E.l)(e, {
							contentId: s.id,
							subredditId: t.subredditId
						})
					}
				}))((function(e) {
					return e.featureEnabled && e.userAcceptsSupport ? r.a.createElement(y, e) : null
				})),
				j = s("./src/reddit/i18n/components.tsx"),
				k = s("./src/reddit/constants/colors.ts"),
				P = s("./src/reddit/components/ContentTooltip/index.tsx"),
				w = s("./src/reddit/components/GiveAwardTooltip/index.m.less"),
				I = s.n(w);
			class S extends r.a.Component {
				render() {
					const {
						tooltipId: e
					} = this.props;
					return r.a.createElement(P.a, {
						caretColor: {
							top: k.a.op
						},
						tooltipSizeEstimate: {
							height: 39,
							width: 314
						},
						tooltipId: e,
						defaultTooltipPosition: "bottom"
					}, r.a.createElement("div", {
						className: I.a.container
					}, r.a.createElement("div", {
						className: I.a.newBadge
					}, r.a.createElement(j.c, null, "New")), r.a.createElement("div", {
						className: I.a.text
					}, r.a.createElement(j.c, null, "Try giving a new Appreciation Award"))))
				}
			}
			var T = S,
				N = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				M = s("./src/reddit/components/ModModeReports/helpers.ts"),
				L = s("./src/reddit/components/ModToolsFlatlist/index.tsx"),
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
				z = s("./src/reddit/selectors/user.ts"),
				J = s("./src/reddit/components/Flatlist/ResponsiveRow.tsx"),
				q = s("./src/reddit/helpers/correlationIdTracker.ts"),
				X = s("./src/reddit/helpers/trackers/modTools.ts"),
				Q = s("./src/reddit/helpers/trackers/post.ts"),
				Y = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				Z = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				$ = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ee = s("./src/reddit/icons/fonts/Share/index.tsx"),
				te = s("./src/reddit/models/Media/index.ts"),
				se = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				ne = s("./src/reddit/models/PostCreationForm/index.ts"),
				oe = s("./src/reddit/models/User/index.ts"),
				re = s("./src/reddit/components/Flatlist/constants.ts"),
				ae = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				ie = s("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				ce = s("./src/reddit/actions/postCollection/index.ts"),
				de = s("./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx"),
				le = s("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx"),
				me = s("./src/reddit/selectors/activeModalId.ts"),
				pe = s("./src/reddit/components/Flatlist/index.m.less"),
				ue = s.n(pe);

			function he() {
				return (he = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "b", (function() {
				return Ce
			})), s.d(t, "a", (function() {
				return Oe
			})), s.d(t, "d", (function() {
				return ke
			}));
			var be = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			let ge, xe;
			const fe = l.a.button("ShareButton", ue.a),
				ve = l.a.wrapped(D.a, "ShareMenu", ue.a),
				Ce = Object(d.a)(e => {
					var {
						className: t
					} = e, s = be(e, ["className"]);
					return r.a.createElement(Z.a, he({}, s, {
						className: Object(c.a)(ue.a.modActionsIcon, t),
						style: {
							color: Object(K.a)(Object(G.a)(s), se.a.actionIcon, se.b.actionIcon)
						}
					}))
				}),
				Oe = e => r.a.createElement("div", he({}, e, {
					className: Object(c.a)(ue.a.flatlistSeparator, e.className)
				})),
				Ee = Object(U.t)({
					currentProfileName: U.h,
					isCommentPermalink: U.v,
					isCommentsPage: U.w,
					isProfilePostListing: U.H,
					pageLayer: e => e
				}),
				ye = Object(i.c)({
					activeModalId: me.a,
					layout: U.M,
					userIsOp: z.eb,
					subreddit: U.q
				}),
				_e = Object(a.b)(ye, (e, t) => {
					let {
						post: n,
						isOverlay: o,
						isCommentsPage: r
					} = t;
					return {
						addPostToCollection: (t, s) => e(Object(ce.a)(t, s)),
						onToggleModal: t => e(Object(u.i)(t)),
						onToggleSave: () => e(Object(h.T)(n.postId)),
						onHide: t => e(Object(h.X)(n.postId, !n.hidden, o, !0)),
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
							ge && xe || ([ge, xe] = await Promise.all([s.e("schedulePickerModal").then(s.bind(null, "./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx")).then(e => e.default), Promise.resolve().then(s.bind(null, "./src/reddit/actions/eventPosts/index.ts")).then(e => e.editEventTimeRequested)])), e(Object(u.i)(Object(ne.s)(n.postId, o, ne.j.POST_OVERFLOW_MENU)))
						},
						addEventStartTime: t => {
							xe && e(xe(n.id, t))
						}
					}
				});
			class je extends r.a.Component {
				constructor() {
					super(...arguments), this.handleGild = async () => {
						const {
							onGildClick: e,
							post: t,
							sendEvent: n
						} = this.props;
						Object(q.d)(q.a.GildingFlow), e();
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
						} = this.props, s = Object(ne.t)(t.id, e);
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
						currentProfileName: o,
						currentUser: a,
						hasModFlairPerms: i,
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
						onIgnoreReports: j,
						onOpenReportsDropdown: k,
						pageLayer: P,
						post: w,
						sendEvent: I,
						showEditFlair: S,
						showEditPost: D,
						subreddit: W,
						toggleEditStartTimeModal: U,
						tooltipType: G,
						userIsOp: K
					} = this.props, z = !!a && Object(oe.f)(a) === w.author, q = Object(ie.a)("View--Reports", w.id, G), Z = Object(ie.a)("View--GiveAward", w.id, G), se = Object(M.c)(w), ce = ke("-mod-actions-menu", w.id, b, x), me = Object(M.a)(w), pe = w.postId, he = O === V.g.Large, be = !u && he || l && E, xe = !(b || u || p), Oe = a && w.isGildable, Ee = w.media && w.media.type === te.n.LIVEVIDEO;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(c.a)(ue.a.flatlistContainer, s)
					}, r.a.createElement(v.a, {
						className: ue.a.commentsLink,
						hasModPostPerms: l,
						isCommentsPage: u,
						isCommentPermalink: p,
						isOverlay: b,
						postId: w.id,
						modModeEnabled: E,
						numComments: w.numComments
					}), W && a && !K && !w.isNSFW && r.a.createElement(_, {
						className: ue.a.supportButton,
						contentId: w.id,
						inPostFeed: xe,
						modModeEnabled: l && E,
						renderInPortal: xe,
						subredditId: W.id,
						targetName: w.author
					}), Oe && r.a.createElement(r.a.Fragment, null, r.a.createElement(J.a, {
						displayText: n.fbt._("Give Award", null, {
							hk: "NIFUn"
						}),
						flatlistItem: re.a.Gild,
						isLoggedIn: !!a,
						isUserOp: K,
						onClick: this.handleGild,
						skipRoleAttr: !0
					}, r.a.createElement(A.f, {
						id: Z
					})), r.a.createElement(T, {
						postOrComment: w,
						tooltipId: Z
					})), r.a.createElement(ve, {
						className: Object(ae.b)({
							flatlistItem: re.a.Share,
							isLoggedIn: !!a,
							isUserOp: K
						}),
						dropdownId: ke("-share-menu", w.id, b, x),
						permalink: w.permalink,
						post: w,
						sendEventWithName: this.sendEventWithName,
						subreddit: W
					}, r.a.createElement(fe, {
						"data-click-id": "share"
					}, r.a.createElement(ee.a, {
						className: ue.a.shareIcon
					}), r.a.createElement("span", {
						className: ue.a.shareText
					}, n.fbt._("share", null, {
						hk: "1eAfZg"
					})))), D && !be && r.a.createElement(J.a, {
						displayText: n.fbt._("Edit post", null, {
							hk: "Jq2Cr"
						}),
						flatlistItem: re.a.EditPost,
						isLoggedIn: !!a,
						isUserOp: K,
						onClick: this.props.onEdit,
						skipRoleAttr: !0
					}, r.a.createElement(A.b, null)), (!l || !E) && r.a.createElement(J.a, {
						displayText: w.saved ? n.fbt._("unsave", null, {
							hk: "4Dn4IT"
						}) : n.fbt._("save", null, {
							hk: "3NOMst"
						}),
						flatlistItem: re.a.Save,
						isLoggedIn: !!a,
						isUserOp: K,
						onClick: this.onSaveClick,
						skipRoleAttr: !0
					}, w.saved ? r.a.createElement(A.e, null) : r.a.createElement(A.d, null)), !w.isSponsored && !be && r.a.createElement(J.a, {
						displayText: w.hidden ? n.fbt._("unhide", null, {
							hk: "151XLs"
						}) : n.fbt._("hide", null, {
							hk: "4AnA6R"
						}),
						flatlistItem: re.a.Hide,
						isLoggedIn: !!a,
						isUserOp: K,
						onClick: this.onHideClick,
						skipRoleAttr: !0
					}, r.a.createElement(A.a, null)), !z && !w.isSponsored && !be && r.a.createElement(J.a, {
						displayText: n.fbt._("report", null, {
							hk: "1phfns"
						}),
						flatlistItem: re.a.Report,
						isLoggedIn: !!a,
						isUserOp: K,
						onClick: this.onReportClick,
						skipRoleAttr: !0
					}, r.a.createElement(A.c, null)), r.a.createElement(L.a, {
						isOverlay: b,
						layout: O,
						modModeEnabled: E,
						post: w,
						sendEvent: I
					}), l && r.a.createElement(N.a, {
						dropdownId: ce,
						onClick: () => I(Object(Q.f)(w.id, "post_mod_action_menu"))
					}, r.a.createElement(Ce, null), r.a.createElement(F.a, {
						canEditFlair: i && !!S,
						hasModFullPerms: d,
						hasModPostPerms: l,
						isOverlay: !!b,
						isPostAuthor: z,
						language: C,
						modModeEnabled: E,
						post: w,
						tooltipId: ce
					})), l && se && !E && r.a.createElement(B.c, {
						text: "".concat(me),
						onClick: () => {
							k(q), I(Object(Q.f)(w.id, "post_report_menu"))
						},
						id: q
					}, r.a.createElement(H.a, {
						model: w,
						onIgnoreReports: () => {
							j(), I(Object(X.j)(w.ignoreReports ? "restore_reports" : "ignore_reports", w.id))
						},
						tooltipId: q
					}), w.ignoreReports ? r.a.createElement(Y.a, null) : r.a.createElement($.a, null)), (a || !w.isSponsored) && r.a.createElement(A.g, {
						currentProfileName: o,
						dropdownId: ke("-overflow-menu", w.id, b, x),
						isCommentsPage: u,
						isFixed: x,
						isOverlay: !!b,
						isProfilePostListing: g,
						layout: O,
						modModeWithPost: E && l,
						pageLayer: P,
						permalink: w.permalink,
						postId: pe,
						sendEvent: I,
						showEditPost: !!D,
						showEditFlair: !!S,
						useFlatlistBreakpoints: this.props.useFlatlistBreakpoints,
						toggleAddEventStartTimeModal: U,
						toggleEditStartTimeModal: U
					}), e === Object(ne.t)(w.id, b) && r.a.createElement(de.a, {
						subredditId: w.belongsTo.id,
						onClose: this.onToggleCurrentModal,
						postId: w.id,
						onSelectCollection: this.addPostToCollection,
						titleText: n.fbt._("Add post to a collection", null, {
							hk: "38vSyF"
						}),
						onItemHoverActionText: n.fbt._("add", null, {
							hk: "1BZ1pE"
						}),
						isOverlay: b
					}), e === Object(ne.s)(w.id, b, ne.j.POST_OVERFLOW_MENU) && ge && r.a.createElement(ge, {
						onChange: t,
						onClose: U,
						schedule: Object(m.c)(w),
						shouldShowDeleteButton: !1
					}), e === Object(ne.u)(w.id, b) && r.a.createElement(le.a, {
						onCancel: this.onToggleCollectionListModal,
						onCollectionCreated: this.addPostToCollection,
						subredditId: w.belongsTo.id
					}), e === Object(R.b)(w.id, b) && r.a.createElement(R.a, {
						flairs: w.flair,
						subredditId: w.belongsTo.id,
						modalId: Object(R.b)(w.id, b),
						onFlairChanged: y
					}), r.a.createElement("div", {
						className: ue.a.flexSpacer
					})), xe && !Ee && r.a.createElement(f.a, {
						className: Object(c.a)(ue.a.liveDiscussionWrapper, {
							[ue.a.large]: h
						}),
						isMod: l,
						postId: w.postId
					}))
				}
			}
			const ke = (e, t, s, n) => {
				let o = t;
				return s && (o += "-overlay"), n && (o += "-sticky"), o += e
			};
			t.c = Ee(_e(Object(W.c)(je)))
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
				f = c.a.div("PositionedImage", b.a),
				v = c.a.div("HeaderContent", b.a),
				C = c.a.div("HeaderContainer", b.a),
				O = c.a.span("HeaderText", b.a),
				E = c.a.wrapped(r.a, "HeaderUrl", b.a),
				y = c.a.span("Container", b.a),
				_ = Object(i.a)(e => {
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
						_ = parseInt(Object(u.a)(e).banner.iconDimensions.customSize, 10),
						j = "".concat(4 + _, "px");
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
					}, !e.isTopBannerVariant && o.a.createElement(v, {
						className: Object(a.a)({
							[b.a.hoverHeaderContent]: m
						})
					}, e.theme && Object(u.a)(e).banner.showCommunityIcon && (s ? o.a.createElement(x, {
						style: {
							backgroundImage: "url(".concat(s, ")"),
							borderRadius: "".concat(Object(u.a)(e).banner.iconDimensions.borderRadius, "px"),
							height: j,
							width: j
						}
					}) : o.a.createElement(g, {
						style: {
							padding: "".concat(Object(u.a)(e).banner.iconDimensions.padding, "px"),
							borderRadius: "".concat(Object(u.a)(e).banner.iconDimensions.borderRadius, "px"),
							height: j,
							width: j
						}
					})), o.a.createElement(O, {
						style: {
							paddingTop: 32 === _ ? "4px" : "14px"
						}
					}, t)), o.a.createElement(f, {
						className: Object(a.a)(b.a.PositionedImage, {
							[b.a.positionedImage]: !!r,
							[b.a.hoverPositionedImage]: !!r && !!i
						}),
						style: Object.assign({}, c, {
							height: "".concat(Object(u.a)(e).banner.positionedImageHeight, "px")
						})
					}))))
				});
			t.a = _
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/reddit/constants/colors.ts"),
				i = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				c = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				d = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.m.less"),
				l = s.n(d);
			t.a = () => r.a.createElement(c.a, {
				className: l.a.BannerBase,
				color: a.a.locked,
				icon: r.a.createElement(i.a, {
					className: l.a.ArchivedIcon
				}),
				subtitle: n.fbt._("New comments cannot be posted and votes cannot be cast", null, {
					hk: "3jwi5b"
				}),
				title: n.fbt._("This thread is archived", null, {
					hk: "kEcat"
				})
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/lib/linkMatchers/customLinks.ts"),
				i = s("./src/reddit/constants/colors.ts"),
				c = s("./src/reddit/models/Subreddit/index.ts"),
				d = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				l = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.m.less"),
				m = s.n(l);
			const p = r.a.createElement(e => r.a.createElement("svg", {
					className: e.className,
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					d: "M16,9H15V7A5,5,0,0,0,5,7V9H4a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1H16a1,1,0,0,0,1-1V10A1,1,0,0,0,16,9ZM7,7a3,3,0,0,1,6,0V9H7Z"
				})), {
					className: m.a.lockIcon
				}),
				u = e => Object(c.e)(e) ? a.d.profile : a.d.subreddit;
			t.a = e => {
				let {
					subredditOrProfile: t
				} = e;
				const s = t ? n.fbt._("This thread has been locked by the moderators of {communityname}", [n.fbt._param("communityname", u(t) + t.name)], {
					hk: "2HSQXz"
				}) : n.fbt._("This thread has been locked", null, {
					hk: "4fn3dn"
				});
				return r.a.createElement(d.a, {
					className: m.a.bannerBase,
					color: i.a.locked,
					icon: p,
					subtitle: n.fbt._("New comments cannot be posted", null, {
						hk: "2A32Yr"
					}),
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				d = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.m.less"),
				l = s.n(d);
			const m = i.a.wrapped(e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M32,7.8l0.5-5.3h-25L8,7.8c-3.2,0.8-5.5,3.7-5.5,7.2v0.1c0,4,3.1,7.2,7,7.4l0,0c0.3,2.8,2.7,5,5.5,5h0.1 c1.3,0,2.4,1.1,2.4,2.4v0.1c0,1.3-1.1,2.4-2.4,2.4H15c-2.7,0-4.9,2.2-4.9,4.9v0.1h20v-0.1c0-2.7-2.2-4.9-4.9-4.9h-0.1 c-1.3,0-2.4-1.1-2.4-2.4v-0.1c0-1.3,1.1-2.4,2.4-2.4H25c2.8,0,5.2-2.2,5.5-5l0,0c3.9-0.2,7-3.4,7-7.4v-0.1 C37.5,11.5,35.2,8.6,32,7.8z M4.5,15.1v-0.1c0-2.4,1.6-4.4,3.7-5.1l1.1,10.7C6.6,20.1,4.5,17.9,4.5,15.1z M35.5,15.1 c0,2.8-2.1,5.1-4.8,5.4l1.1-10.7c2.2,0.7,3.7,2.8,3.7,5.1V15.1z"
			}))), "TrophyIcon", l.a);
			t.a = Object(a.a)(e => {
				const {
					hasModeratorPostPermissions: t,
					theme: s
				} = e, o = t ? n.fbt._("Comments are in random ordering and vote scores are hidden to non-mods", null, {
					hk: "2gpz9d"
				}) : n.fbt._("Comments are in random ordering and vote scores are hidden", null, {
					hk: "3qrgsh"
				});
				return r.a.createElement(c.a, {
					className: l.a.contestModeEnabled,
					color: s && s.newCommunityTheme.linkText,
					icon: r.a.createElement(m, null),
					subtitle: o,
					title: n.fbt._("This post has contest mode enabled", null, {
						hk: "42oz5Q"
					})
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = s("./src/reddit/constants/colors.ts"),
				l = s("./src/reddit/controls/InternalLink/index.tsx"),
				m = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				h = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less"),
				b = s.n(h);
			const g = r.a.createElement(m.a, {
					className: b.a.icon
				}),
				x = Object(i.c)({
					subreddit: p.y,
					subredditAboutInfo: p.v
				}),
				f = Object(a.b)(x);
			t.a = f(e => {
				const {
					subreddit: t,
					subredditAboutInfo: s
				} = e;
				if (!(t && t.isQuarantined)) return null;
				const o = s && s.quarantineMessageHtml,
					a = s && s.quarantineMessage || n.fbt._("It is dedicated to shocking or highly offensive content.", null, {
						hk: "2QoofC"
					});
				return r.a.createElement(u.a, {
					className: b.a.container,
					color: d.a.quarantine,
					icon: g,
					subtitle: r.a.createElement("span", null, n.fbt._("This community is {=quarantined}", [n.fbt._param("=quarantined", r.a.createElement("a", {
						className: b.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank"
					}, n.fbt._("quarantined", null, {
						hk: "2XqfJa"
					})))], {
						hk: "AG2cS"
					}), ": ", o ? r.a.createElement(c.a, {
						className: b.a.rawHtmlDisplay,
						html: o
					}) : a, " ", r.a.createElement(l.a, {
						className: b.a.link,
						to: "/"
					}, n.fbt._("Click to return home.", null, {
						hk: "3FgSpg"
					}))),
					title: n.fbt._("Community Quarantined", null, {
						hk: "3RKbEl"
					})
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
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/ModModeReports/index.m.less"),
				c = s.n(i);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = a.a.div("Text", c.a), m = a.a.div("Placeholder", c.a), p = () => r.a.createElement(m, null, r.a.createElement(l, null, d._("Loading reports…", null, {
				hk: "4gwdQw"
			}))), u = Object(n.a)({
				resolved: {},
				chunkName: () => "ModerationDropdowns",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
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
				fallback: r.a.createElement(p, null),
				ssr: !1
			});
			t.a = u
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
				f = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				v = s("./src/reddit/helpers/trackers/post.ts"),
				C = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				O = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				E = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				y = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				_ = s("./src/reddit/selectors/activeModalId.ts"),
				j = s("./src/reddit/selectors/moderatorPermissions.ts"),
				k = s("./src/reddit/selectors/postFlair.ts"),
				P = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				w = s("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				I = s("./src/reddit/components/ModToolsFlatlist/index.m.less"),
				S = s.n(I);
			const T = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return Object(w.b)({
						breakpointType: w.a.HideIfVWSmaller,
						flatlistItem: e,
						isCompact: t
					})
				},
				N = Object(a.b)(() => Object(i.c)({
					activeModalId: _.a,
					canEditFlair: (e, t) => {
						let {
							post: s
						} = t;
						return Object(k.a)(e, {
							postId: s.id
						})
					},
					moderatorPermissions: (e, t) => Object(j.i)(e, {
						postId: t.post.id
					})
				}), (e, t) => {
					let {
						post: s
					} = t;
					return {
						onApprovePost: () => e(Object(m.t)(s.id)),
						onOpenPostModModeDropdown: t => e(Object(p.h)({
							tooltipId: t
						})),
						onRemovePost: () => e(Object(m.S)(s.id, !1)),
						onSpamPost: () => e(Object(m.S)(s.id, !0)),
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
					onFlairPost: _,
					onRemovePost: j,
					onSpamPost: k,
					post: w,
					sendEvent: I,
					showIconsOnly: N
				} = e, M = Object(f.a)(l), L = Object(h.b)(w), R = !(!w.approvedBy || !L), F = Object(b.b)(w.id, a), A = M && m && !w.isSponsored, B = t && m;
				let D, W, H;
				N || (D = ((e, t) => e ? n.fbt._("reapprove", null, {
					hk: "OJvB1"
				}) : t ? n.fbt._("approved", null, {
					hk: "2bWAFI"
				}) : n.fbt._("approve", null, {
					hk: "2DIHcM"
				}))(R, w.approvedBy), W = ((e, t) => e ? t === d.k ? n.fbt._("Confirm removal", null, {
					hk: "1t5tKM"
				}) : n.fbt._("removed", null, {
					hk: "35ZTch"
				}) : n.fbt._("remove", null, {
					hk: "3LWMcS"
				}))(w.isRemoved, w.bannedBy), H = (e => e ? n.fbt._("spammed", null, {
					hk: "3GPrkZ"
				}) : n.fbt._("spam", null, {
					hk: "3ebJLg"
				}))(w.isSpam));
				const V = !a && i === x.g.Compact;
				return r.a.createElement("div", {
					className: Object(c.a)(S.a.container, s)
				}, A && r.a.createElement(o.Fragment, null, r.a.createElement(g.b, {
					className: T(P.a.Approve, V),
					key: "approveButton",
					text: D,
					disabled: !!w.approvedBy && !L,
					onClick: () => {
						p(), I(Object(v.f)(w.id, "approve"))
					}
				}, r.a.createElement(C.a, null)), r.a.createElement(g.d, {
					className: T(P.a.Remove, V),
					key: "removeButton",
					text: W,
					disabled: w.isRemoved && w.bannedBy !== d.k,
					onClick: () => {
						j(), w.isRemoved && w.bannedBy === d.k ? I(Object(v.f)(w.id, "confirm_remove")) : I(Object(v.f)(w.id, "remove"))
					}
				}, r.a.createElement(O.a, null)), r.a.createElement(g.d, {
					className: T(P.a.Spam, V),
					key: "removeSpamButton",
					text: H,
					disabled: w.isSpam,
					onClick: () => {
						k(), I(Object(v.f)(w.id, "spam"))
					}
				}, r.a.createElement(E.a, null))), B && r.a.createElement(g.c, {
					className: T(P.a.Flair, V),
					key: "tagButton",
					onClick: () => {
						_(F)(), I(Object(v.f)(w.id, "post_flair_picker"))
					}
				}, r.a.createElement(y.a, null)), r.a.createElement(u.f, {
					postId: w.id
				}))
			})
		},
		"./src/reddit/components/ModerationPrompts/Prompt.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/actions/reportFlow.ts"),
				l = s("./src/reddit/components/Popup/index.tsx"),
				m = s("./src/reddit/components/Popup/Button.tsx"),
				p = s("./src/reddit/helpers/trackers/reportPrompt.ts"),
				u = s("./src/reddit/hooks/useTracking.ts"),
				h = s("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function b(e) {
				const {
					subredditName: t,
					post: s,
					isOverlay: b
				} = e, [g, x] = Object(o.useState)(!0), f = Object(h.b)(s.id, b), v = Object(a.c)(), C = Object(u.a)(), O = Object(h.a)(s, b), E = (e, n) => C(Object(p.a)(t, s.id, e, n));
				Object(o.useEffect)(() => {
					O && E("modal", "show")
				}, [O]);
				if (!O || !g) return null;
				const y = n.fbt._("Help r/{subredditName} mods", [n.fbt._param("subredditName", t)], {
					hk: "1rusN4"
				});
				return r.a.createElement(l.a, {
					id: f,
					title: y,
					onClose: () => {
						x(!1), E("close", "click"), v(Object(c.G)()), v(Object(c.R)({
							[s.id]: {
								moderationPrompt: void 0
							}
						}))
					},
					onClickOutside: () => {
						v(Object(c.G)())
					}
				}, r.a.createElement("p", null, n.fbt._("Report this post if it's breaking {=Reddit} or {=community} rules.", [n.fbt._param("=Reddit", r.a.createElement("a", {
					href: "https://www.redditinc.com/policies/content-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, n.fbt._("Reddit", null, {
					hk: "4g8g4O"
				}))), n.fbt._param("=community", r.a.createElement(i.a, {
					to: "/r/".concat(t, "/about/rules"),
					target: "_blank"
				}, n.fbt._("community", null, {
					hk: "1cy8jU"
				})))], {
					hk: "sfngx"
				})), r.a.createElement(m.a, {
					onClick: () => (x(!1), E("report", "click"), void v(Object(d.j)(s.id)))
				}, n.fbt._("Report", null, {
					hk: "3M0Eii"
				})))
			}
		},
		"./src/reddit/components/ModerationPrompts/Survey.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			}));
			var n, o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/reportFlow.ts"),
				m = s("./src/reddit/components/Popup/index.tsx"),
				p = s("./src/reddit/components/Popup/Button.tsx"),
				u = s("./src/reddit/helpers/trackers/reportPrompt.ts"),
				h = s("./src/reddit/hooks/useTracking.ts"),
				b = s("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function g(e) {
				const {
					subredditName: t,
					post: s,
					isOverlay: g
				} = e, [x, f] = Object(r.useState)(n.Survey), v = Object(b.b)(s.id, g), C = Object(i.c)(), O = Object(h.a)(), E = Object(b.a)(s, g), y = (e, n) => O(Object(u.b)(t, s.id, e, n));
				Object(r.useEffect)(() => {
					E && y("modal", "show")
				}, [E]);
				const _ = e => {
					f(n.Closed), y("site" === e ? "breaks_reddit_rules" : "breaks_community_rules", "click"), C(Object(l.j)(s.id, void 0, void 0, e))
				};
				if (!E) return null;
				let j = null;
				const k = {
					id: v,
					title: o.fbt._("Why did you downvote this post?", null, {
						hk: "2tTiIx"
					}),
					onClose: () => {
						f(n.Closed), y("close", "click"), C(Object(d.G)())
					},
					onClickOutside: () => {
						C(Object(d.G)())
					}
				};
				switch (x) {
					case n.Survey:
						j = a.a.createElement(m.a, k, a.a.createElement("p", null, o.fbt._("Your answer helps r/ {subredditName} mods improve this community.", [o.fbt._param("subredditName", t)], {
							hk: "DNEel"
						})), a.a.createElement(p.a, {
							onClick: () => {
								f(n.OffTopic), y("off_topic", "click")
							}
						}, o.fbt._("It's off topic", null, {
							hk: "4iG26l"
						})), a.a.createElement(p.a, {
							onClick: () => {
								f(n.DontLike), y("dont_like", "click")
							}
						}, o.fbt._("I don't like it", null, {
							hk: "1jB1Mh"
						})), a.a.createElement(p.a, {
							onClick: () => {
								f(n.BreaksRules), y("breaks_rules", "click")
							}
						}, o.fbt._("It breaks the rules", null, {
							hk: "1yQBhi"
						})));
						break;
					case n.OffTopic:
						j = a.a.createElement(m.a, k, a.a.createElement("p", null, o.fbt._("Got it. Thanks for helping out this community.", null, {
							hk: "22pTV3"
						})));
						break;
					case n.DontLike:
						j = a.a.createElement(m.a, k, a.a.createElement("p", null, o.fbt._("Just a reminder, it’s not an official rule but it is considered improper Reddiquette to downvote an otherwise acceptable post because you don’t personally like it.", null, {
							hk: "3mRvPM"
						})));
						break;
					case n.BreaksRules:
						j = a.a.createElement(m.a, k, a.a.createElement("p", null, o.fbt._("Let us know if it breaks {=Reddit} or {=community} rules.", [o.fbt._param("=Reddit", a.a.createElement("a", {
							href: "https://www.redditinc.com/policies/content-policy",
							target: "_blank",
							rel: "noopener noreferrer"
						}, o.fbt._("Reddit", null, {
							hk: "1amvzD"
						}))), o.fbt._param("=community", a.a.createElement(c.a, {
							to: "/r/".concat(t, "/about/rules"),
							target: "_blank"
						}, o.fbt._("community", null, {
							hk: "2TnSrt"
						})))], {
							hk: "1mXxTX"
						})), a.a.createElement(p.a, {
							onClick: () => _("site")
						}, o.fbt._("It breaks Reddit rules", null, {
							hk: "3MxBm9"
						})), a.a.createElement(p.a, {
							onClick: () => _("community")
						}, o.fbt._("It breaks community rules", null, {
							hk: "3XbHan"
						})));
						break;
					case n.Closed:
				}
				return j
			}! function(e) {
				e[e.Survey = 0] = "Survey", e[e.OffTopic = 1] = "OffTopic", e[e.DontLike = 2] = "DontLike", e[e.BreaksRules = 3] = "BreaksRules", e[e.Closed = 4] = "Closed"
			}(n || (n = {}))
		},
		"./src/reddit/components/Popup/Button.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/Popup/index.m.less"),
				a = s.n(r);

			function i(e) {
				return o.a.createElement("button", {
					className: a.a.popupButton,
					onClick: e.onClick
				}, e.children)
			}
		},
		"./src/reddit/components/Popup/index.m.less": function(e, t, s) {
			e.exports = {
				popup: "t5ViKDVyrrlzRbCpXvJu7",
				header: "preWelIDv3a0Fgtd5_QjN",
				title: "_3Xw5NRiOh-SAcOXIUMIm-l",
				closeButton: "_3oee1_5V2jOvP4BaO2LCQu",
				popupButton: "_3nddrgCBXpzDP5XYzrH3ZY"
			}
		},
		"./src/reddit/components/Popup/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/uuid/v4.js"),
				a = s.n(r);
			var i = s("./src/reddit/components/Popup/index.m.less"),
				c = s.n(i);

			function d(e) {
				const {
					id: t = a()(),
					onClose: s,
					onClickOutside: r,
					title: i,
					children: d
				} = e;
				return function(e, t) {
					const s = Object(n.useCallback)(s => {
						if (!t) return;
						const n = document.getElementById(e);
						n && (n.contains(s.target) || t(s))
					}, [e, t]);
					Object(n.useEffect)(() => {
						if (t) return document.body.addEventListener("click", s), () => {
							document.body.removeEventListener("click", s)
						}
					}, [t, s])
				}(t, r), o.a.createElement("div", {
					id: t,
					"aria-modal": !0,
					className: c.a.popup,
					role: "dialog",
					tabIndex: -1
				}, o.a.createElement("h3", {
					className: c.a.header
				}, o.a.createElement("span", {
					className: c.a.title
				}, i), o.a.createElement("button", {
					className: c.a.closeButton,
					onClick: s
				}, "✕")), d)
			}
			s.d(t, "a", (function() {
				return d
			}))
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
				f = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				v = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				C = s("./src/reddit/models/Post/index.ts"),
				O = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				y = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				j = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				k = s("./src/reddit/icons/fonts/Report/index.tsx"),
				P = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				w = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				I = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				S = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				T = s("./src/reddit/components/PostBadges/index.m.less"),
				N = s.n(T);

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const L = e => o.a.createElement("span", M({
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
					isSubreddit: g.J,
					pageLayer: e => e
				}),
				V = Object(c.c)({
					isPinned: (e, t) => {
						let {
							post: s
						} = t;
						return Object(O.t)(e, {
							postId: s.id
						})
					},
					modModeEnabled: g.O
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
					X = W("Archived", G.id, K),
					Q = W("Automod", G.id, K),
					Y = W("Lock", G.id, K),
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
				}), o.a.createElement(u.c, M({
					tooltipId: Z,
					text: A(O, {
						displayText: s
					})
				}, z))), G.isArchived && o.a.createElement(n.Fragment, null, o.a.createElement(y.a, {
					className: N.a.archivedIcon,
					desc: R(O),
					id: X,
					onMouseEnter: U(X),
					onMouseLeave: H
				}), o.a.createElement(u.c, M({
					tooltipId: X,
					text: R(O)
				}, z))), G.isLocked && o.a.createElement(n.Fragment, null, o.a.createElement(_.a, {
					className: N.a.lockIcon,
					desc: F(O),
					id: Y,
					onMouseEnter: U(Y),
					onMouseLeave: H
				}), o.a.createElement(u.c, M({
					tooltipId: Y,
					text: F(O)
				}, z))), r && Object(C.k)(G) && !d && o.a.createElement(n.Fragment, null, o.a.createElement(w.a, {
					className: N.a.stickyIcon,
					desc: B(O),
					id: se,
					onMouseEnter: U(se),
					onMouseLeave: H
				}), o.a.createElement(u.c, M({
					tooltipId: se,
					text: B(O)
				}, z))), g && p && o.a.createElement(n.Fragment, null, o.a.createElement(w.a, {
					className: N.a.stickyIcon,
					desc: D(O),
					id: ne,
					onMouseEnter: U(ne),
					onMouseLeave: H
				}), o.a.createElement(u.c, M({
					tooltipId: ne,
					text: D(O)
				}, z))), (G.isApproved || G.approvedBy) && o.a.createElement(n.Fragment, null, o.a.createElement(E.a, {
					className: N.a.approveIcon,
					desc: Object(f.a)(O, G),
					id: q,
					onMouseEnter: U(q),
					onMouseLeave: H
				}), o.a.createElement(u.c, M({
					tooltipId: q,
					text: Object(f.a)(O, G)
				}, z))), Object(x.a)(G) && o.a.createElement(n.Fragment, null, o.a.createElement(j.a, {
					className: N.a.removeIcon,
					desc: Object(f.c)(O, G),
					id: $,
					onMouseEnter: U($),
					onMouseLeave: H
				}), J && o.a.createElement(h.a, {
					className: N.a.addRemovalReason,
					onClick: V,
					text: Object(i.c)("Add a removal reason")
				}), (G.modRemovalReason || G.modNote) && o.a.createElement(L, {
					onMouseEnter: U($),
					onMouseLeave: H
				}, o.a.createElement(a.c, null, "Removal reason")), o.a.createElement(u.c, M({
					tooltipId: $,
					text: Object(f.c)(O, G)
				}, z))), G.bannedBy && G.isSpam && o.a.createElement(n.Fragment, null, o.a.createElement(P.a, {
					className: N.a.spamIcon,
					desc: Object(f.e)(O, G),
					id: te,
					onMouseEnter: U(te),
					onMouseLeave: H
				}), o.a.createElement(u.c, M({
					tooltipId: te,
					text: Object(f.e)(O, G)
				}, z))), ("AutoModerator" === G.approvedBy || "AutoModerator" === G.bannedBy) && o.a.createElement(n.Fragment, null, o.a.createElement(I.a, {
					className: Object(l.a)(N.a.automoderator, !!G.bannedBy && N.a.isRemoved),
					desc: Object(f.b)(O),
					id: Q,
					onMouseEnter: U(Q),
					onMouseLeave: H
				}), o.a.createElement(u.c, M({
					tooltipId: Q,
					text: Object(f.b)(O)
				}, z))), Object(v.a)(G) && !T && o.a.createElement(n.Fragment, null, o.a.createElement(k.a, {
					className: N.a.reportIcon,
					desc: Object(f.d)(O, G.numReports),
					id: ee,
					onMouseEnter: U(ee),
					onMouseLeave: H
				}), o.a.createElement(u.c, M({
					tooltipId: ee,
					text: Object(f.d)(O, G.numReports)
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
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
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
				g = s.n(b);
			const x = Object(r.c)({
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
				f = Object(d.a)(x),
				v = e => {
					const t = Object(h.d)(e.target, e.currentTarget),
						s = Object(h.b)(e.target, e.currentTarget, h.a.buttons);
					return "subreddit" !== t && s
				};
			class C extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						pixelPostHasEnteredView: e,
						pixelPostHasExitedView: t,
						afterClickTracking: s,
						buffering: n,
						children: r,
						className: i,
						continuousViewingStartedAt: d,
						gildModalIsOpen: m,
						makePostContainerId: p,
						playing: h,
						post: b,
						onClick: x,
						onPostContentClick: f,
						onPostViewable: C,
						style: O,
						ref: E
					} = this.props, y = o.a.createElement("div", {
						style: O,
						ref: E,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: e => {
							!this.cancelClick && e.button < 2 && (s(() => x && x(e, b))(e), f && v(e) && f(e, b))
						},
						className: Object(u.a)(g.a.WrappedPost, i, "Post ".concat(b.id), {
							promotedlink: b.isSponsored
						}),
						id: p ? p(b.id) : b.id,
						tabIndex: -1
					}, r, m && o.a.createElement(c.a, null)), _ = !!b.media && b.media.type === l.n.VIDEO;
					return b.isSponsored || _ ? o.a.createElement(a.a, {
						onViewable: e => C(b, e),
						pixelPostHasEnteredView: t => e(b, t),
						pixelPostHasExitedView: e => t(b, e),
						trackVideoMetrics: _ && !n && h,
						continuousViewingStartedAt: d
					}, y) : y
				}
			}
			t.a = f(Object(h.c)(C))
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
				f = s("./src/reddit/helpers/trackers/post.ts"),
				v = s("./src/reddit/actions/post.ts"),
				C = s("./src/reddit/actions/tooltip.ts"),
				O = s("./node_modules/lodash/find.js"),
				E = s.n(O),
				y = s("./node_modules/react-motion/lib/react-motion.js");
			const _ = {
					stiffness: 300,
					damping: 5,
					precision: .005
				},
				j = "expando_content",
				k = {},
				P = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
						t = arguments.length > 1 ? arguments[1] : void 0;
					const s = E()(e, {
							key: j
						}),
						n = s && s.style ? s.style.opacity : 0;
					return t ? n >= 1 ? [{
						key: j,
						style: {
							opacity: 1
						}
					}] : n > 0 ? [{
						key: j,
						style: {
							opacity: Object(y.spring)(1, _)
						}
					}] : [{
						key: j,
						style: {
							opacity: .1
						}
					}] : n < .1 ? [] : [{
						key: j,
						style: {
							opacity: Object(y.spring)(0, _)
						}
					}]
				};
			class w extends o.a.Component {
				constructor(e) {
					super(e), this.onSizeChanged = () => (this.props.onSizeChanged && this.props.onSizeChanged(), k), this.state = {
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
				M = s("./src/reddit/selectors/experiments/categories.ts"),
				L = s("./src/reddit/selectors/moderatorPermissions.ts"),
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
				X = s("./src/reddit/components/PostContainer/index.tsx"),
				Q = s("./src/higherOrderComponents/makeAsync.tsx"),
				Y = s("./src/lib/loadWithRetries/index.ts"),
				Z = s("./src/reddit/components/RichTextEditor/Placeholder.tsx");
			const $ = Object(Q.a)({
				ErrorComponent: () => o.a.createElement(Z.a, {
					isLoading: !1,
					toolbarPosition: "top"
				}),
				getComponent: () => Object(Y.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("vendors~PostCreation~RichTextEditor"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/PostEditForm/index.tsx")).then(e => e.default)),
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
				fe = e => o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("g", null, o.a.createElement("path", {
					d: "M13.0303,11.4697 C13.3233,11.7627 13.3233,12.2377 13.0303,12.5307 C12.8843,12.6767 12.6923,12.7497 12.5003,12.7497 C12.3083,12.7497 12.1163,12.6767 11.9693,12.5307 L10.0003,10.5607 L8.0303,12.5307 C7.8843,12.6767 7.6923,12.7497 7.5003,12.7497 C7.3083,12.7497 7.1163,12.6767 6.9693,12.5307 C6.6763,12.2377 6.6763,11.7627 6.9693,11.4697 L8.9393,9.4997 L6.9693,7.5307 C6.6763,7.2377 6.6763,6.7627 6.9693,6.4697 C7.2623,6.1767 7.7373,6.1767 8.0303,6.4697 L10.0003,8.4397 L11.9693,6.4697 C12.2623,6.1767 12.7373,6.1767 13.0303,6.4697 C13.3233,6.7627 13.3233,7.2377 13.0303,7.5307 L11.0603,9.4997 L13.0303,11.4697 Z M17.2753,3.0377 L10.2753,1.0377 C10.0953,0.9877 9.9053,0.9877 9.7253,1.0377 L2.7253,3.0377 C2.2963,3.1607 2.0003,3.5537 2.0003,3.9997 L2.0003,10.9997 C2.0003,16.6887 9.4093,18.8707 9.7253,18.9617 C9.8153,18.9877 9.9073,18.9997 10.0003,18.9997 C10.0923,18.9997 10.1853,18.9877 10.2753,18.9617 C10.5903,18.8707 18.0003,16.6887 18.0003,10.9997 L18.0003,3.9997 C18.0003,3.5537 17.7043,3.1607 17.2753,3.0377 L17.2753,3.0377 Z",
					id: "path-1"
				}))),
				ve = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				Ce = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				Oe = s.n(Ce);
			const {
				fbt: Ee
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ye = () => Ee._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [Ee._param("=User Agreement", o.a.createElement("a", {
				className: Oe.a.link,
				href: "https://www.redditinc.com/policies/user-agreement\\"
			}, Ee._("User Agreement", null, {
				hk: "3MHgRl"
			}))), Ee._param("=Content Policy", o.a.createElement("a", {
				className: Oe.a.link,
				href: "https://www.redditinc.com/policies/content-policy\\"
			}, Ee._("Content Policy", null, {
				hk: "3UZthQ"
			})))], {
				hk: "4g3zuW"
			}), _e = () => Ee._("This content was removed for a violation of Reddit's {=Content Policy} .", [Ee._param("=Content Policy", o.a.createElement("a", {
				className: Oe.a.link,
				href: "https://www.redditinc.com/policies/content-policy\\"
			}, Ee._("Content Policy", null, {
				hk: "2X6v1w"
			})))], {
				hk: "4DbEQC"
			});
			var je = e => {
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
								return Ee._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask} .", [Ee._param("=just ask", o.a.createElement("a", {
									className: Oe.a.link,
									href: "".concat(ge.a.redditUrl, "/message/compose/?to=r/reddit.com"),
									target: "_blank"
								}, Ee._("just ask", null, {
									hk: "jn9ip"
								})))], {
									hk: "3hMocZ"
								});
							case S.g.ContentTakedown:
								return o.a.createElement(_e, null);
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
								return o.a.createElement(_e, null);
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
								t = ve.b;
								break;
							case S.g.Moderator:
								t = fe;
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
				ke = e => {
					const {
						isAdminOrMod: t,
						post: s,
						subredditOrProfile: n
					} = e;
					return o.a.createElement(o.a.Fragment, null, n && s.removedByCategory && o.a.createElement(je, {
						hasPerms: t,
						removedBy: s.removedBy,
						removedByCategory: s.removedByCategory,
						subredditName: n.name
					}))
				},
				Pe = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/fbt/lib/FbtPublic.js")),
				we = s("./src/lib/prettyPrintNumber/index.ts"),
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
							s = Object(we.b)(e.viewCount);
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
				Me = s.n(Ne);
			const Le = d.a.wrapped(oe.c, "PostTitle", Me.a),
				Re = d.a.wrapped(W.a, "ExpandoButton", Me.a),
				Fe = d.a.wrapped(w, "ClassicExpandoMotion", Me.a),
				Ae = d.a.wrapped(V.c, "FullWidthFlatlist", Me.a),
				Be = d.a.wrapped(B.a, "ClassicThumbnail", Me.a),
				De = Object(le.t)({
					isCommentsPage: le.w,
					pageLayer: e => e
				}),
				We = Object(r.b)(() => Object(i.c)({
					activeModalId: N.a,
					flairStyleTemplate: le.Q,
					currentUser: A.i,
					crosspost: F.d,
					hideNSFWPref: A.y,
					isAdminOrMod: (e, t) => {
						const s = Object(F.Z)(e, {
							postId: t.postId
						});
						return !!s && Object(L.g)(e, {
							subredditId: s.id
						})
					},
					isCurrentUserProfilePost: F.j,
					isExpanded: F.l,
					post: F.N,
					language: A.O,
					metaId: (e, t) => e.posts.metaMap[t.postId],
					moderatorPermissions: L.i,
					publicAwardersEnabled: e => !!Object(pe.a)(e),
					modModeEnabled: le.O,
					isInCategoriesExperiment: M.a,
					showEditFlair: ue.a,
					subredditOrProfile: F.Z,
					isEditing: R.C,
					userIsOp: A.eb
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						onIgnoreReports: () => e(Object(v.Y)(s)),
						onOpenReportsDropdown: t => e(Object(C.h)({
							tooltipId: t
						})),
						onVoteClick: t => {
							const n = t === T.a.upvoted ? Object(v.ab)(s) : Object(v.w)(s);
							e(n)
						}
					}
				}),
				He = d.a.wrapped(a.a, "ThumbLink", Me.a),
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
						className: Me.a.ClassicPostMedia,
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
					isEditing: v,
					isExpanded: C,
					isOverlay: O,
					language: E,
					metaId: y,
					moderatorPermissions: _,
					modModeEnabled: j,
					onIgnoreReports: k,
					onOpenReportsDropdown: P,
					onVoteClick: w,
					post: T,
					publicAwardersEnabled: N,
					scrollerItemRef: M,
					sendEvent: L,
					showEditFlair: R,
					subredditOrProfile: F,
					userIsOp: A
				} = e, B = Object(b.a)(_), W = Object(u.a)(_), Q = Object(h.a)(_), Y = B || W, Z = ((e, t, s) => {
					const [n, o] = e ? [Object(p.f)(e) === s.author, e.isEmployee] : [!1, !1];
					return n || t || o
				})(n, Y, T), $ = !!T.media && (T.media.type === I.n.RTJSON || T.media.type === I.n.TEXT), le = A && $, pe = Object(q.c)(T);
				let ue;
				const he = !(j && b.a),
					be = Object(se.h)({
						hide: he,
						editPost: he,
						save: he,
						report: he
					}),
					ge = T.removedByCategory === S.g.AuthorDeleted,
					xe = n && (n.displayText === T.author || n.username === T.author),
					fe = !ge && (xe || i || !(T.removedByCategory && T.media && (Object(I.E)(T.media) || Object(I.D)(T.media)))),
					ve = T.removedByCategory === S.g.Reddit && Object(l.e)(T.created) > 24,
					Ce = T.removedByCategory && T.removedByCategory !== S.g.Reddit || ve,
					Oe = o.a.createElement(Le, {
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
					handleVote: w,
					subreddit: F,
					isOverlay: O
				}), o.a.createElement("div", {
					className: Me.a.mainBody
				}, o.a.createElement("div", {
					className: Me.a.content
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
					className: d ? Me.a.leftPadding : null,
					post: T,
					showCategoryTag: e.isInCategoriesExperiment && d,
					sendEvent: L
				}), j && B && pe && o.a.createElement(J.a, {
					language: E,
					onIgnoreReports: k,
					reportable: T
				}), o.a.createElement(K.d, {
					postId: T.id
				}), o.a.createElement("div", {
					className: Me.a.FlatlistContainer
				}, o.a.createElement(Re, {
					crosspost: s || void 0,
					isExpanded: !!C,
					post: T,
					useMediaIcons: !1
				}), Ue(T, C, M), o.a.createElement(Ae, {
					currentUser: n,
					hasModFlairPerms: W,
					hasModFullPerms: Q,
					hasModPostPerms: B,
					isOverlay: O,
					language: E,
					onIgnoreReports: k,
					onOpenReportsDropdown: P,
					modModeEnabled: j,
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
						handleVote: w,
						subreddit: F,
						isOverlay: O
					}), o.a.createElement("div", {
						className: Me.a.mainBody
					}, o.a.createElement("div", {
						className: Me.a.content
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
						className: d ? Me.a.leftPadding : null,
						post: T,
						showCategoryTag: e.isInCategoriesExperiment && d,
						sendEvent: L
					}), F && Ce && o.a.createElement(ke, {
						isAdminOrMod: i,
						post: T,
						subredditOrProfile: F
					}), j && B && pe && o.a.createElement(J.a, {
						language: E,
						onIgnoreReports: k,
						reportable: T
					})), t && o.a.createElement(z.a, {
						post: T,
						forceShowNSFW: !0,
						hasModPostPerms: Y,
						isCommentsPage: d,
						isOverlay: !0,
						modModeEnabled: j,
						templatePlaceholderImage: r && r.postPlaceholderImage
					})), o.a.createElement(K.d, {
						postId: T.id
					}), o.a.createElement("div", {
						className: Me.a.controlsContainer
					}, o.a.createElement(V.c, {
						currentUser: n,
						hasModFlairPerms: W,
						hasModFullPerms: Q,
						hasModPostPerms: B,
						isOverlay: O,
						language: E,
						modModeEnabled: j,
						onIgnoreReports: k,
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
					handleVote: w,
					subreddit: F,
					isOverlay: O
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
					className: d ? Me.a.leftPadding : null,
					post: T,
					showCategoryTag: e.isInCategoriesExperiment && d,
					sendEvent: L
				}), F && Ce && o.a.createElement(ke, {
					isAdminOrMod: i,
					post: T,
					subredditOrProfile: F
				}), v ? o.a.createElement(ee, {
					post: T
				}) : fe && o.a.createElement(te.a, {
					className: Object(c.a)(Me.a.LargePostMedia, {
						[Me.a.isCommentsPage]: d
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
					scrollerItemRef: M
				}), y && F ? o.a.createElement("div", {
					className: Object(c.a)(Me.a.ProposalContainer, {
						[Me.a.isEditing]: v
					})
				}, o.a.createElement(U.a, {
					pollId: y,
					subredditId: F.id
				})) : null, T.isMeta && !y && o.a.createElement(G.a, {
					className: Me.a.noProposal
				}), j && B && pe && o.a.createElement(J.a, {
					language: E,
					onIgnoreReports: k,
					reportable: T
				}), o.a.createElement(K.d, {
					postId: T.id
				}), o.a.createElement("div", {
					className: Me.a.controlsContainer
				}, o.a.createElement(V.c, {
					currentUser: n,
					hasModFlairPerms: W,
					hasModFullPerms: Q,
					hasModPostPerms: B,
					isOverlay: O,
					language: E,
					modModeEnabled: j,
					onIgnoreReports: k,
					onOpenReportsDropdown: P,
					post: T,
					showEditPost: le,
					showEditFlair: R,
					tooltipType: O ? ae.c.Lightbox : void 0,
					useFlatlistBreakpoints: be
				}), Ee)));
				return o.a.createElement(X.a, {
					className: Object(c.a)(t, Me.a.postContainer, {
						[Me.a.hasEventMeta]: Object(me.a)(T)
					}),
					isOverlay: O,
					post: T,
					eventFactory: O ? x.b : f.f
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
			var n = s("./src/config.ts"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
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
				f = s("./src/reddit/icons/svgs/Search/index.tsx"),
				v = s("./src/reddit/layout/row/Inline/index.tsx"),
				C = s("./src/reddit/models/PostCreationForm/index.ts"),
				O = s("./src/reddit/selectors/postCollection.ts"),
				E = s("./src/lib/timeAgo/index.ts"),
				y = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				_ = s("./src/reddit/helpers/name/index.ts"),
				j = s("./src/reddit/models/Subreddit/index.ts"),
				k = s("./src/reddit/models/User/index.ts"),
				P = s("./src/reddit/selectors/subreddit.ts"),
				w = s("./src/reddit/selectors/user.ts"),
				I = s("./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less"),
				S = s.n(I),
				T = s("./src/lib/lessComponent.tsx");
			const {
				fbt: N
			} = s("./node_modules/fbt/lib/FbtPublic.js"), M = T.a.div("Container", S.a), L = T.a.h2("PostTitle", S.a), R = T.a.div("MetaLine", S.a), F = T.a.span("SubredditName", S.a), A = T.a.time("InfoSpan", S.a), B = Object(c.c)({
				subreddit: (e, t) => {
					let {
						collection: {
							subredditId: s
						}
					} = t;
					return s ? Object(P.P)(e, {
						subredditId: s
					}) : void 0
				},
				user: w.i
			});
			class D extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onClick = () => {
						this.props.onClick(this.props.collection.id)
					}
				}
				render() {
					const {
						collection: e,
						subreddit: t,
						user: s,
						onHoverActionText: n
					} = this.props, o = t && Object(j.e)(t) && s ? Object(_.c)(Object(k.f)(s)) : t ? t.displayText : "", r = e.postIds.length;
					return a.a.createElement(M, {
						onClick: this.onClick,
						className: S.a.container
					}, a.a.createElement(L, {
						"data-redditstyle": !0
					}, e.title), a.a.createElement(R, {
						"data-redditstyle": !0
					}, o && a.a.createElement(F, {
						"data-redditstyle": !0
					}, o), o && a.a.createElement(y.b, null), a.a.createElement(A, null, N._({
						"*": "{number of posts} posts",
						_1: "1 post"
					}, [N._plural(r, "number of posts")], {
						hk: "1Uy96U"
					})), a.a.createElement(y.b, null), a.a.createElement(A, null, N._("created {time}", [N._param("time", Object(E.f)(e.createdAtUTC))], {
						hk: "2cUc5m"
					}))), n && a.a.createElement("div", {
						className: S.a.onHoverActionText
					}, a.a.createElement("span", null, n)))
				}
			}
			var W = Object(i.b)(B)(D),
				H = s("./src/reddit/helpers/trackers/postCollection.ts"),
				V = s("./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less"),
				U = s.n(V);
			const G = "".concat(n.a.assetPath, "/img/snoo-drafts.png"),
				K = T.a.div("TopRow", U.a),
				z = T.a.div("TitleRow", U.a),
				J = T.a.div("DetailsContainer", U.a),
				q = T.a.wrapped(v.a, "ButtonRow", U.a),
				X = T.a.div("CloseWrapper", U.a),
				Q = T.a.wrapped(g.a, "Close", U.a),
				Y = T.a.div("Empty", U.a),
				Z = T.a.img("EmptyImage", U.a),
				$ = T.a.p("EmptyText", U.a),
				ee = T.a.div("FilterWrapper", U.a),
				te = T.a.wrapped(b.a, "FilterInput", U.a),
				se = T.a.wrapped(f.a, "SearchIcon", U.a),
				ne = T.a.wrapped(x.a, "PlusIcon", U.a),
				oe = T.a.wrapped(h.j, "CreateCollectionButton", U.a),
				re = Object(l.a)((e, t) => {
					const s = t.toLowerCase();
					return e.filter(e => e.title.toLowerCase().includes(s))
				}),
				ae = Object(c.c)({
					collections: O.w
				}),
				ie = Object(i.b)(ae, (e, t) => {
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
			class ce extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						filterStr: ""
					}, this.close = () => {
						this.props.sendEvent(Object(H.c)()), this.props.onClose()
					}, this.handleEscapeKey = e => {
						e.keyCode === u.a.Escape && this.close()
					}, this.handleCreateCollectionClicked = () => {
						this.props.onOpenCreateCollectionModal(), this.props.sendEvent(Object(H.j)())
					}, this.handleCollectionSelected = e => {
						this.props.onSelectCollection(e), this.props.sendEvent(Object(H.q)())
					}, this.onFilterStringChange = e => {
						this.setState({
							filterStr: e.target.value
						})
					}, this.renderItem = e => a.a.createElement(W, {
						key: e.id,
						collection: e,
						onClick: () => this.handleCollectionSelected(e),
						onHoverActionText: this.props.onItemHoverActionText
					})
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey), this.props.sendEvent(Object(H.d)())
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				renderNoCollections() {
					return a.a.createElement(Y, null, a.a.createElement(Z, {
						src: G
					}), a.a.createElement($, null, o.fbt._("Your collections will live here", null, {
						hk: "FCxWg"
					})))
				}
				renderNoFilterMatches() {
					return a.a.createElement(Y, null, a.a.createElement($, null, o.fbt._("No collection matching filter", null, {
						hk: "2vawdK"
					}), ";"))
				}
				render() {
					const {
						collections: e,
						titleText: t
					} = this.props;
					let s;
					if (0 === e.length) s = this.renderNoCollections();
					else {
						const t = re(e, this.state.filterStr);
						s = 0 === t.length ? this.renderNoFilterMatches() : t.map(this.renderItem)
					}
					return a.a.createElement("div", {
						className: U.a.wrapper,
						"data-redditstyle": !0
					}, a.a.createElement(K, null, a.a.createElement(z, {
						"data-redditstyle": !0
					}, t || o.fbt._("My collections", null, {
						hk: "3yKovS"
					}), a.a.createElement(X, {
						onClick: this.close
					}, a.a.createElement(Q, {
						"data-redditstyle": !0
					}))), a.a.createElement(ee, null, a.a.createElement(se, null), a.a.createElement(te, {
						placeholder: o.fbt._("Find a collection", null, {
							hk: "3DbFBU"
						}),
						value: this.state.filterStr,
						onChange: this.onFilterStringChange
					}))), a.a.createElement(J, null, s), a.a.createElement(q, null, a.a.createElement(oe, {
						onClick: this.handleCreateCollectionClicked
					}, a.a.createElement(ne, null), o.fbt._("Create a collection", null, {
						hk: "37xJVm"
					}))))
				}
			}
			const de = Object(d.a)(ie(Object(p.c)(ce)));
			t.a = de
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
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
				f = s("./src/reddit/icons/svgs/Close/index.tsx"),
				v = s("./src/reddit/layout/row/Inline/index.tsx"),
				C = s("./src/reddit/selectors/postCollection.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less"),
				y = s.n(E),
				_ = s("./src/lib/lessComponent.tsx");
			const j = _.a.div("Container", y.a),
				k = _.a.div("Content", y.a),
				P = _.a.div("TitleRow", y.a),
				w = _.a.div("Details", y.a),
				I = _.a.wrapped(m.e, "Footer", y.a),
				S = _.a.wrapped(u.i, "CancelButton", y.a),
				T = _.a.div("CloseWrapper", y.a),
				N = _.a.wrapped(f.a, "CloseIcon", y.a),
				M = _.a.label("Label", y.a),
				L = _.a.wrapped(b.a, "TitleInput", y.a),
				R = _.a.wrapped(x.a, "AddCollectionIcon", y.a),
				F = _.a.wrapped(u.f, "PrimaryActionButton", y.a),
				A = _.a.wrapped(g.a, "LoadingIcon", y.a),
				B = _.a.wrapped(h.b, "ErrorText", y.a),
				D = Object(i.c)({
					collection: C.r,
					error: C.c,
					isPending: C.h,
					language: O.O
				}),
				W = Object(a.b)(D, (e, t) => ({
					onCreate: (t, s) => e(Object(l.b)(t, s)),
					onUpdate: s => e(Object(l.h)(t.collectionId, s))
				}));
			class H extends r.a.PureComponent {
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
						language: o
					} = this.props, a = !e, i = !!this.state.collectionTitle.trim(), c = a ? n.fbt._("Create", null, {
						hk: "Ijp7n"
					}) : n.fbt._("Save", null, {
						hk: "2Onrrv"
					});
					return r.a.createElement(j, null, r.a.createElement(T, {
						onClick: this.props.onCancel
					}, r.a.createElement(N, null)), r.a.createElement(k, null, a && r.a.createElement(r.a.Fragment, null, r.a.createElement(P, null, r.a.createElement(R, null), n.fbt._("Create a collection", null, {
						hk: "3ndxk5"
					})), r.a.createElement(w, null, n.fbt._("Group posts into one feed. Create a series of events or just a group of random things. Make something awesome!", null, {
						hk: "2eCAQw"
					}))), r.a.createElement(M, null, a ? n.fbt._("Give a title for your collection", null, {
						hk: "Uaqbe"
					}) : n.fbt._("Edit title", null, {
						hk: "1jzweg"
					}), r.a.createElement(L, {
						maxLength: p.e,
						onChange: this.onTitleChange,
						placeholder: n.fbt._("Enter title", null, {
							hk: "3B0iRI"
						}),
						value: this.state.collectionTitle
					}))), r.a.createElement(I, null, r.a.createElement(v.a, null, r.a.createElement(S, {
						onClick: this.props.onCancel
					}, n.fbt._("Cancel", null, {
						hk: "1XxNnB"
					})), r.a.createElement(F, {
						onClick: this.onPrimaryButtonClick,
						disabled: s || !i
					}, s ? r.a.createElement(A, {
						sizePx: 10
					}) : c)), t && r.a.createElement(B, {
						language: o
					}, Object(d.a)(o, t))))
				}
			}
			t.a = Object(c.a)(W(H))
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
				return j
			}));
			var n, o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/higherOrderComponents/asModal/index.tsx"),
				m = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/components/FlairPickerTitle/index.tsx"),
				u = s("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				h = s("./src/reddit/components/FlairPreview/index.tsx"),
				b = s("./src/reddit/components/FlairSearch/index.tsx"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/models/Flair/index.ts"),
				f = s("./src/reddit/selectors/moderatorPermissions.ts"),
				v = s("./src/reddit/selectors/postFlair.ts"),
				C = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/selectors/telemetry.ts"),
				E = s("./src/reddit/components/PostFlairPicker/helpers.ts"),
				y = s("./src/reddit/components/PostFlairPicker/index.m.less"),
				_ = s.n(y);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(n || (n = {}));
			const j = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.UNSET;
					return "PostFlair__Modal-[postId: ".concat(e, "]-isOverlay[").concat(t, "]-position[").concat(s, "]")
				},
				k = Object(c.c)({
					flairData: v.d,
					subreddit: C.P,
					isMod: (e, t) => !!Object(f.j)(e, t)
				});
			class P extends a.a.Component {
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
						subreddit: r
					} = e, i = r.displayText, {
						templates: c,
						templateIds: d
					} = n, {
						canSave: l
					} = this.canSave();
					return a.a.createElement(u.a, {
						className: s
					}, a.a.createElement(p.a, {
						onClosePressed: e.closeModal,
						title: o.fbt._("Select {subredditName} flair", [o.fbt._param("subredditName", i)], {
							hk: "1lDMWS"
						})
					}), a.a.createElement(h.a, {
						flair: t,
						flairTemplateType: x.d.LinkFlair,
						placeholderText: o.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), a.a.createElement(b.a, {
						flair: t,
						flairTemplateType: x.d.LinkFlair,
						subredditId: r.id,
						templates: c,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), a.a.createElement("div", {
						className: _.a.buttonsRow
					}, a.a.createElement(g.f, {
						disabled: !l,
						onClick: this.onApply
					}, o.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), a.a.createElement(g.i, {
						className: _.a.clearButton,
						onClick: this.onClear
					}, o.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const w = Object(i.b)(k, (e, t) => ({
				closeModal: () => e(Object(m.i)(t.modalId))
			}))(P);
			t.a = Object(l.a)(Object(d.c)(w))
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
					onFollow: () => e(Object(c.C)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(d.c)(h))
		},
		"./src/reddit/components/PostLeftRail/index.m.less": function(e, t, s) {
			e.exports = {
				postLeftRail: "_23h0-EcaBUorIHC-JZyh6J"
			}
		},
		"./src/reddit/components/PostLeftRail/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			})), s.d(t, "c", (function() {
				return g
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/reddit/constants/colors.ts"),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/selectors/experiments/adSidebar.ts"),
				p = s("./src/reddit/components/PostLeftRail/index.m.less"),
				u = s.n(p);
			const h = 40,
				b = Object(r.b)(() => Object(a.c)({
					isInAdLeftSidebarExperiment: m.a
				})),
				g = e => e.isSponsored && !e.isInAdLeftSidebarExperiment ? Object(l.a)(e).button : e.isRemoved ? d.a.removed : e.isReported ? d.a.reported : "transparent",
				x = Object(c.a)(e => {
					const t = g(e),
						s = {
							width: "".concat(h, "px"),
							borderLeft: "4px solid ".concat(t)
						};
					return o.a.createElement("div", {
						className: Object(i.a)(u.a.postLeftRail, e.className),
						style: e.withoutComputedStyles ? {} : s
					}, e.children)
				});
			t.b = b(x)
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
				f = s("./src/reddit/components/PostMeta/index.m.less"),
				v = s.n(f);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: f,
					isOverlay: C,
					isTopicPage: O,
					language: E,
					post: y,
					shouldShowSubscribeButton: _,
					subredditOrProfile: j,
					tooltipType: k
				} = e, P = !!O;
				return o.a.createElement("div", {
					className: v.a.metaContainer
				}, !n && !y.isSponsored && j && o.a.createElement(i.a, {
					postId: y.id,
					subredditName: j.name
				}, o.a.createElement(p.a, {
					className: v.a.subredditName,
					"data-click-id": "subreddit",
					to: j.url
				}, j.displayText)), j && j.isQuarantined && o.a.createElement(m.a, null), !n && !y.isSponsored && j && _ && !f && o.a.createElement(u.a, {
					getEventFactory: e => Object(g.f)(y.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: j.name,
						type: Object(x.e)(j) ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: y.id,
					small: !0
				}), !n && !y.isSponsored && o.a.createElement(b.b, null), !n && !y.isSponsored && o.a.createElement(c.h, {
					type: y.belongsTo.type,
					id: y.belongsTo.id
				}), o.a.createElement(l.d, {
					className: v.a.postTopMeta,
					flairStyleTemplate: t,
					language: E,
					post: y,
					tooltipType: k
				}), o.a.createElement(d.a, {
					displayText: j ? j.displayText : null,
					inSubredditOrProfile: !!n,
					language: E,
					post: y,
					tooltipType: k
				}), j && o.a.createElement(a.a, {
					className: v.a.donationAmount,
					contentId: y.id,
					subredditId: j.id
				}), !P && o.a.createElement(r.a, {
					hideCta: s,
					isOverlay: C,
					thing: y,
					tooltipType: k
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
				return f
			})), s.d(t, "i", (function() {
				return v
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
				f = n.a.wrapped(l.a, "Icon", u.a),
				v = n.a.wrapped(m.a, "Icon", u.a),
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
				f = s("./src/reddit/actions/postCreation/editing.ts"),
				v = s("./src/reddit/actions/reportFlow.ts"),
				C = s("./src/reddit/constants/posts.ts"),
				O = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				E = s("./src/reddit/icons/fonts/Admin/index.tsx"),
				y = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Embed/index.tsx"),
				j = s("./src/reddit/icons/fonts/Gild/index.tsx"),
				k = s("./src/reddit/icons/fonts/helpers.tsx"),
				P = s("./src/reddit/icons/fonts/Hide/index.m.less"),
				w = s.n(P);
			var I = p.a.wrapped(e => a.a.createElement("i", {
					className: "".concat(Object(k.b)("hide"), " ").concat(e.className)
				}), "HideIcon", w.a),
				S = s("./src/reddit/icons/fonts/Link/index.tsx"),
				T = s("./src/reddit/icons/fonts/Live/index.tsx"),
				N = s("./src/reddit/icons/fonts/Pencil/index.tsx"),
				M = s("./src/reddit/icons/fonts/Report/index.tsx"),
				L = s("./src/reddit/icons/fonts/Save/index.tsx"),
				R = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				F = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				A = s("./src/reddit/icons/fonts/Unpin/index.m.less"),
				B = s.n(A);
			var D = p.a.wrapped(e => a.a.createElement("i", {
					className: Object(m.a)(Object(k.b)("unpin"), e.className)
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
				X = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				Q = s("./src/reddit/constants/postLayout.ts"),
				Y = s("./src/reddit/helpers/correlationIdTracker.ts"),
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
				return fe
			})), s.d(t, "d", (function() {
				return ve
			})), s.d(t, "f", (function() {
				return Oe
			})), s.d(t, "h", (function() {
				return Me
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
				xe = p.a.wrapped(M.a, "Icon", ue.a),
				fe = p.a.wrapped(H.a, "Icon", ue.a),
				ve = p.a.wrapped(L.a, "Icon", ue.a),
				Ce = p.a.wrapped(E.a, "Icon", ue.a),
				Oe = p.a.wrapped(j.a, "Icon", ue.a),
				Ee = p.a.wrapped(W.a, "AddCollectionIcon", ue.a),
				ye = p.a.wrapped(_.a, "Icon", ue.a),
				_e = p.a.wrapped(R.a, "Icon", ue.a),
				je = p.a.wrapped(F.a, "Icon", ue.a),
				ke = p.a.wrapped(V.b, "Icon", ue.a),
				Pe = p.a.wrapped(D, "Icon", ue.a),
				we = p.a.wrapped(T.a, "LiveIcon", ue.a),
				Ie = p.a.wrapped(y.a, "CalendarIcon", ue.a),
				Se = p.a.wrapped(S.a, "LinkIcon", ue.a),
				Te = p.a.wrapped(J.b, "DropdownRow", ue.a),
				Ne = p.a.wrapped(z.a, "PostCheckboxMenuItem", ue.a),
				Me = e => {
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
				Le = Object(i.b)(() => Object(d.c)({
					currentUser: re.i,
					isConfirmDeleteOpen: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(se.a)(e) === "".concat("POST_OVERFLOW_DELETE_CONFIRMATION", "_").concat(s)
					},
					isFutureEvent: me.j,
					isSaved: ne.w,
					isHidden: ne.o,
					isSponsored: ne.y,
					isNSFW: ne.r,
					isOC: ne.s,
					isPinned: ne.t,
					isSpoiler: ne.x,
					post: ne.N,
					postSubredditAboutInfo: ne.O,
					reportFlowIsOpen: (e, t) => {
						let {
							isOverlay: s,
							postId: n
						} = t;
						return e.reportFlow.openedFromModalPage === s && e.reportFlow.postOrCommentId === n
					},
					sendRepliesToggled: ne.X,
					showPinAction: (e, t) => {
						var {
							isProfilePostListing: s
						} = t, n = he(t, ["isProfilePostListing"]);
						return Object(K.B)(e, n) && s && Object(re.eb)(e, n) && Object(re.db)(e, {
							userName: Object(ne.N)(e, {
								postId: n.postId
							}).author
						})
					},
					subredditOrProfile: ne.Z,
					hasSubredditRules: oe.k,
					userIsOp: re.eb,
					isPostPartOfACollection: me.l,
					shouldRenderCollectionEditButtons: (e, t) => {
						let {
							postId: s
						} = t;
						if (Object(ne.N)(e, {
								postId: s
							}).isSponsored) return !1;
						const n = Object(ne.Z)(e, {
							postId: s
						});
						if (!n) return !1;
						const o = n.type === te.c.User;
						return Object(me.s)(e, n.name, o)
					}
				}), (e, t) => {
					let {
						permalink: s,
						postId: n,
						isOverlay: o,
						isCommentsPage: r
					} = t;
					return {
						onCopyLink: () => e(Object(x.D)(s)),
						onDelete: t => e(Object(x.M)(n, t, o)),
						onDistinguishPost: t => e(Object(x.v)(n, t)),
						onGildClick: () => e(Object(h.d)(n, o)),
						onToggleSave: () => e(Object(x.T)(n)),
						onToggleNSFW: () => e(Object(x.I)(n)),
						onToggleOC: () => e(Object(x.J)(n)),
						onTogglePinned: () => e(Object(g.i)(n)),
						onToggleSpoiler: () => e(Object(x.W)(n)),
						onHide: t => e(Object(x.X)(n, !t, o, !0)),
						onReportClick: () => e(Object(v.j)(n, o)),
						onStartEventNow: () => {
							e((e, t) => Object(l.a)(Object(O.p)()(t()))), e(Object(u.startEventNowRequested)(n))
						},
						onEdit: () => {
							const t = !o && !r;
							e(Object(f.a)(n, t))
						},
						onFlairPost: () => e(Object(b.i)(Object(ie.b)(n, o))),
						onToggleSendReplies: () => e(Object(x.U)(n)),
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
						Object(Y.d)(Y.a.GildingFlow), this.props.onGildClick();
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
						if (!t.ignoreBreakpoints && t.useFlatlistBreakpoints[e]) return Object(X.b)({
							breakpointType: X.a.HideIfVWLarger,
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
					} = this, t = e.layout === Q.g.Classic;
					if (!(e.ignoreBreakpoints || e.modModeWithPost || e.userIsOp || !e.isCommentsPage && !t)) return Object(X.b)({
						breakpointType: X.a.HideIfVWLarger,
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
					} = e, b = e.currentUser && e.currentUser.isEmployee, g = Object(Z.a)(e.post), x = e.post.belongsTo.type === C.a.PROFILE || Object(te.d)(e.postSubredditAboutInfo), f = t && c.isGildable, v = Object($.a)(e.post);
					return a.a.createElement("div", null, f && a.a.createElement(Te, {
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
					}, a.a.createElement(je, null)), a.a.createElement(Te, {
						className: this.getBreakpointClass(q.a.Save),
						displayText: e.isSaved ? n.fbt._("unsave", null, {
							hk: "HDDPm"
						}) : n.fbt._("save", null, {
							hk: "3bg2gs"
						}),
						onClick: this.toggleSave,
						isSelected: e.isSaved
					}, e.isSaved ? a.a.createElement(fe, null) : a.a.createElement(ve, null)), m && a.a.createElement(Te, {
						displayText: r ? n.fbt._("Unpin Post from Profile", null, {
							hk: "6DYfk"
						}) : n.fbt._("Pin Post to Profile", null, {
							hk: "2RWbNF"
						}),
						onClick: this.togglePinned
					}, this.props.isPinned ? a.a.createElement(Pe, null) : a.a.createElement(_e, null)), !e.isSponsored && a.a.createElement(Te, {
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
					}, a.a.createElement(we, null)), d && s && u && a.a.createElement(Te, {
						onClick: u,
						displayText: n.fbt._("Edit start time", null, {
							hk: "2typ17"
						})
					}, a.a.createElement(Ie, null)), d && !v && p && a.a.createElement(Te, {
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
					}, a.a.createElement(ke, null)), b && e.userIsOp && a.a.createElement(Te, {
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
			t.g = Le(Re)
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
				a = s("./src/reddit/components/ModerationPrompts/Survey.tsx"),
				i = s("./src/reddit/components/PopupPortal/index.tsx"),
				c = s("./src/reddit/components/PostLeftRail/index.tsx"),
				d = s("./src/reddit/components/VerticalVotes/index.tsx"),
				l = s("./src/reddit/controls/Checkbox/index.tsx"),
				m = s("./src/reddit/helpers/isPost.ts"),
				p = s("./src/reddit/helpers/showReportIndicator/index.ts");
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: n = !1,
					isCheckboxSelected: u = !1,
					toggleCheckbox: h = (() => {}),
					flairStyleTemplate: b,
					redditStyle: g,
					subreddit: x,
					isOverlay: f
				} = e, v = "upvote-button-".concat(t.id).concat(f ? "-overlay" : ""), {
					moderationPrompt: C
				} = t;
				return o.a.createElement(c.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(p.a)(t),
					isSponsored: !!Object(m.b)(t) && t.isSponsored,
					redditStyle: g
				}, n && o.a.createElement(l.a, {
					isCheckboxSelected: u,
					toggleCheckbox: h
				}), o.a.createElement(d.a, {
					flairStyleTemplate: b,
					model: t,
					onVoteClick: s,
					redditStyle: g,
					upvoteTooltipId: v
				}), C && o.a.createElement(i.b, {
					rightOf: v
				}, "survey" === C ? o.a.createElement(a.a, {
					post: t,
					subredditName: x.name,
					isOverlay: !!f
				}) : o.a.createElement(r.a, {
					post: t,
					subredditName: x.name,
					isOverlay: !!f
				})))
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
				f = s("./src/reddit/models/Media/index.ts"),
				v = s("./src/reddit/models/Subreddit/index.ts"),
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
					isCommentsPage: _,
					isCompactPinnedPost: j,
					isCurrentUserProfilePost: k,
					isOverlay: P,
					isTopicPage: w,
					language: I,
					post: S,
					publicAwardersEnabled: T,
					shouldShowSubscribeButton: N,
					showCornerOutboundLink: M,
					showSubreddit: L,
					showSubredditIcon: R,
					subredditOrProfile: F
				} = e, A = _ && T, B = w;
				return o.a.createElement(E, {
					className: t
				}, L && F && o.a.createElement("div", {
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
				}, L && o.a.createElement(c.h, {
					type: S.belongsTo.type,
					id: S.belongsTo.id
				}), o.a.createElement(l.d, {
					className: O.a.postTopMeta,
					flairStyleTemplate: s,
					tooltipType: P ? l.c.Lightbox : void 0,
					language: I,
					post: S,
					showSub: L,
					subredditOrProfile: F
				}), o.a.createElement(d.a, {
					className: O.a.postBadges,
					displayText: F ? F.displayText : null,
					inSubredditOrProfile: y,
					language: I,
					isCompactPinnedPost: j,
					post: S,
					tooltipType: P ? l.c.Lightbox : void 0
				}), F && o.a.createElement(i.a, {
					className: O.a.donationAmount,
					contentId: S.id,
					subredditId: F.id
				}), !B && o.a.createElement(a.a, {
					forceShowAllAwards: _,
					isOverlay: P,
					showAwarders: A,
					tooltipType: P ? l.c.Lightbox : void 0,
					thing: S
				})), F && L && N && !k && o.a.createElement(u.a, {
					getEventFactory: e => Object(g.f)(S.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: F.name,
						type: Object(v.e)(F) ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: S.id
				}, "Subscribe"), M && o.a.createElement(b.a, {
					className: O.a.OutboundLink,
					isSponsored: S.isSponsored,
					postId: S.id,
					href: Object(f.A)(e.post),
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
						"--RawHTMLDisplay-tr-even": Object(n.g)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(n.g)(Object(l.a)(e).line, .8)
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/noop.js"),
				r = s.n(o),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/makeListingKey/index.ts"),
				p = s("./src/reddit/actions/subreddit.ts"),
				u = s("./src/reddit/components/ListingPostList/index.tsx"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/constants/elementIds.ts"),
				g = s("./src/reddit/constants/page.ts"),
				x = s("./src/reddit/constants/postLayout.ts"),
				f = s("./src/reddit/helpers/postCollection.ts"),
				v = s("./src/reddit/helpers/trackers/lightbox.ts"),
				C = s("./src/reddit/helpers/trackers/screenview.ts"),
				O = s("./src/reddit/selectors/commentsListTruncated.ts"),
				E = s("./src/reddit/selectors/dismissedTruncationList.ts"),
				y = s("./src/reddit/selectors/experiments/chatPost.ts"),
				_ = s("./src/reddit/selectors/experiments/listingBelowAll.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				k = s("./src/lib/classNames/index.ts"),
				P = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				w = s("./src/reddit/constants/listings.ts"),
				I = s("./src/reddit/controls/InternalLink/index.tsx"),
				S = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				T = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				N = s("./src/reddit/components/RecommendedPostList/Footer/index.m.less"),
				M = s.n(N);
			const {
				fbt: L
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var R = Object(P.a)(e => {
					const {
						className: t,
						onClick: s,
						shouldDisplaySeeMore: n,
						shouldNavigateToHome: o,
						subredditOrProfile: r
					} = e, {
						primaryColor: a
					} = r, c = !o && a || Object(T.a)(Object.assign({}, e, {
						redditStyle: !0
					})).button;
					return i.a.createElement(I.a, {
						className: Object(k.a)(M.a.footer, t),
						onMouseDown: s,
						to: o ? w.c[w.b.Home] : r.url,
						style: {
							backgroundColor: c
						}
					}, i.a.createElement("div", {
						className: M.a.background
					}), i.a.createElement("div", {
						className: M.a.layout
					}, o ? L._("See more recommended", null, {
						hk: "4flaFF"
					}) : n ? L._("See More in {subredditName}", [L._param("subredditName", r.displayText)], {
						hk: "2APB4y"
					}) : L._("Continue browsing in {subredditName}", [L._param("subredditName", r.displayText)], {
						hk: "2gUyTU"
					}), i.a.createElement(S.a, {
						className: M.a.arrow
					})))
				}),
				F = s("./src/reddit/components/RecommendedPostList/index.m.less"),
				A = s.n(F);
			const B = Object(d.a)((e, t) => {
					let {
						isOverlay: s
					} = t;
					return s
				}, O.a, E.b, _.b, (e, t, s, n) => {
					const o = Object(_.a)(n);
					return !((!t || !o || s) && e)
				}),
				D = Object(d.c)({
					isChatPost: y.d,
					isLoggedIn: j.F,
					shouldShowSubredditUpsell: B
				}),
				W = Object(c.b)(D, e => ({
					loadMorePosts: t => e(Object(p.r)({
						sort: l.O.HOT,
						subredditName: t
					}))
				}));
			class H extends i.a.Component {
				constructor() {
					super(...arguments), this.scrollContainer = () => this.props.isOverlay ? document.getElementById(b.d) : null, this.onViewed = (e, t) => Object(C.d)(this.listingKey(), l.O.TOP, t, e, l.Rb.WEEK), this.onFooterClick = e => {
						this.props.sendEvent(Object(v.c)("recommended_footer"))
					}
				}
				listingKey() {
					const {
						subredditOrProfile: e
					} = this.props;
					return Object(m.a)(e.name, l.O.TOP, {
						t: l.Rb.WEEK
					})
				}
				renderSmallBanner() {
					const {
						subredditOrProfile: e
					} = this.props, {
						name: t
					} = e;
					return i.a.createElement("div", {
						className: A.a.smallBanner
					}, n.fbt._("More posts from the {name} community", [n.fbt._param("name", t)], {
						hk: "2g363L"
					}))
				}
				renderTextBanner() {
					const {
						subredditOrProfile: e
					} = this.props, {
						name: t
					} = e;
					return i.a.createElement("span", {
						className: A.a.textBanner
					}, n.fbt._("More from {name}", [n.fbt._param("name", t)], {
						hk: "Hv1mS"
					}))
				}
				render() {
					const {
						contentContainerRef: e,
						isChatPost: t,
						isLoggedIn: s,
						post: n,
						shouldShowSubredditUpsell: o,
						subredditOrProfile: a
					} = this.props, c = n && Object(f.a)(n);
					return s || t || c || !o ? null : i.a.createElement("div", {
						className: A.a.container
					}, this.renderSmallBanner(), i.a.createElement(u.a, {
						className: A.a.postList,
						disablePlaceholder: !0,
						forcedLayout: x.g.Large,
						getScrollContainer: this.scrollContainer,
						isTruncated: !0,
						listingKey: this.listingKey(),
						listingName: g.c.PostDetail,
						listingViewed: this.onViewed,
						loadMoreClassName: A.a.loadMore,
						noPostsComponent: () => null,
						onLoadMore: r.a,
						preventScrollOnMount: !0,
						inSubredditOrProfile: !0,
						scrollContentContainerRef: e
					}), i.a.createElement(R, {
						className: A.a.footer,
						onClick: this.onFooterClick,
						shouldNavigateToHome: !1,
						subredditOrProfile: a
					}))
				}
			}
			t.a = W(Object(h.c)(H))
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router/esm/react-router.js"),
				c = s("./node_modules/react-router-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/Row.tsx"),
				g = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				x = s("./src/reddit/icons/fonts/Embed/index.tsx"),
				f = s("./src/reddit/icons/fonts/Link/index.tsx"),
				v = s("./src/reddit/models/Subreddit/index.ts"),
				C = s("./src/reddit/routes/postCreation/constants.ts"),
				O = s("./src/reddit/selectors/tooltip.ts"),
				E = s("./src/reddit/components/ShareMenu/index.m.less"),
				y = s.n(E),
				_ = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const j = Object(u.a)(h.a),
				k = Object(d.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(O.b)(s)(e)
					}
				}),
				P = Object(a.b)(k, (e, t) => {
					var {
						dropdownId: s,
						permalink: n
					} = t, o = _(t, ["dropdownId", "permalink"]);
					return {
						onCrosspost: () => {
							o.post && e(Object(c.b)("".concat(C.b, "?source_id=").concat(o.post.id)))
						},
						toggleDropdown: () => {
							e(Object(l.h)({
								tooltipId: s
							}))
						},
						copyLink: () => e(Object(p.D)(Object(m.a)(n, {
							utm_source: "share",
							utm_medium: "web2x"
						})))
					}
				});
			t.a = P(Object(i.i)(e => {
				const t = !e.subreddit || e.subreddit && e.subreddit.type === v.c.Public,
					s = !!e.post && e.post.isCrosspostable && !e.post.isSponsored;
				return r.a.createElement("div", {
					className: e.className,
					onClick: e.toggleDropdown,
					id: e.dropdownId
				}, e.children, r.a.createElement(j, {
					className: y.a.dropdown,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId
				}, r.a.createElement(b.b, {
					className: y.a.dropdownRow,
					displayText: n.fbt._("Copy link", null, {
						hk: "1tCqox"
					}),
					onClick: () => {
						e.sendEventWithName("share_copy"), e.copyLink()
					}
				}, r.a.createElement(f.a, {
					className: y.a.linkIcon
				})), s && r.a.createElement(b.b, {
					className: y.a.dropdownRow,
					displayText: n.fbt._("crosspost", null, {
						hk: "23zSN6"
					}),
					onClick: () => {
						e.sendEventWithName("share_crosspost"), e.onCrosspost()
					}
				}, r.a.createElement(g.a, {
					className: y.a.crosspostIcon
				})), t && r.a.createElement(b.b, {
					className: y.a.dropdownRow,
					displayText: n.fbt._("Embed", null, {
						hk: "2CcsuC"
					}),
					onClick: () => {
						e.sendEventWithName("share_embed"), window.open("https://embed.redditmedia.com/widgets/embed?url=".concat(e.permalink), "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
					}
				}, r.a.createElement(x.a, {
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
				f = s.n(x),
				v = s("./src/lib/lessComponent.tsx");
			const C = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-SidebarNativeAd",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("reddit-components-SidebarNativeAd")]).then(s.bind(null, "./src/reddit/components/SidebarNativeAd/index.tsx")),
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
				y = v.a.wrapped(m.a, "BannerAd", f.a),
				_ = v.a.wrapped(h.a, "ThemedWidget", f.a),
				j = v.a.div("SidebarAdPlaceholder", f.a),
				k = (e, t, s) => {
					let n = "";
					return t && (n += "overlay-"), n += "sidebar-".concat(e), null != s && (n += "-".concat(s)), n
				},
				P = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(g.B)(e.media) && e.media.content)),
				w = e => !!e && e.isBlank,
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
					return i.a.createElement(u.a, null, i.a.createElement(_, {
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
					return h || t || !P(s) && g ? i.a.createElement(u.a, null, i.a.createElement(_, {
						className: e,
						contentOnly: !0,
						redditStyle: p
					}, i.a.createElement(j, {
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
					})) : i.a.createElement(u.a, null, i.a.createElement(_, {
						className: this.props.className,
						contentOnly: !0,
						redditStyle: p
					}, w(s) && i.a.createElement(C, {
						post: s,
						refreshKey: r,
						listingName: a,
						placement: c,
						placementIndex: o
					}), i.a.createElement(y, {
						id: k(c, n, o),
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
				i = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/components/SidebarFooter/index.m.less"),
				d = s.n(c);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), m = r.a.a("Link", d.a), p = Object(i.t)({
				isFrontpage: i.y
			});
			t.a = p(e => o.a.createElement(a.a, {
				className: d.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, o.a.createElement("div", {
				className: d.a.LinkContainer
			}, o.a.createElement("div", {
				className: d.a.Column
			}, o.a.createElement(m, {
				href: "https://www.reddithelp.com"
			}, l._("help", null, {
				hk: "4lyYaD"
			})), o.a.createElement(m, {
				href: "https://www.reddit.com/mobile/download"
			}, l._("Reddit App", null, {
				hk: "1ehrjP"
			})), o.a.createElement(m, {
				href: "https://www.reddit.com/coins"
			}, l._("Reddit coins", null, {
				hk: "32iMaN"
			})), o.a.createElement(m, {
				href: "https://www.reddit.com/premium"
			}, l._("Reddit premium", null, {
				hk: "RuO3A"
			})), o.a.createElement(m, {
				href: "http://redditgifts.com/"
			}, l._("Reddit gifts", null, {
				hk: "2XziRN"
			})), e.isFrontpage && o.a.createElement(o.a.Fragment, null, o.a.createElement(m, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, l._("Communities", null, {
				hk: "3CJu37"
			})), o.a.createElement(m, {
				href: "https://www.reddit.com/posts/a-1/"
			}, l._("Top Posts", null, {
				hk: "2NOEW2"
			})), o.a.createElement(m, {
				href: "https://www.reddit.com/topics/a-1/"
			}, l._("Topics", null, {
				hk: "349RFt"
			})))), o.a.createElement("div", {
				className: d.a.Column
			}, o.a.createElement(m, {
				href: "https://about.reddit.com"
			}, l._("about", null, {
				hk: "1sqJKs"
			})), o.a.createElement(m, {
				href: "https://about.reddit.com/careers/"
			}, l._("careers", null, {
				hk: "26ABvc"
			})), o.a.createElement(m, {
				href: "https://about.reddit.com/press/"
			}, l._("press", null, {
				hk: "2Qmgdz"
			})), o.a.createElement(m, {
				href: "https://www.redditinc.com/advertising"
			}, l._("advertise", null, {
				hk: "Mt40U"
			})), o.a.createElement(m, {
				href: "http://www.redditblog.com/"
			}, l._("blog", null, {
				hk: "46IQJw"
			})), o.a.createElement(m, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, l._("Terms", null, {
				hk: "4qRzfE"
			})), o.a.createElement(m, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, l._("Content policy", null, {
				hk: "1DyxZS"
			})), o.a.createElement(m, {
				href: "https://www.reddit.com/help/privacypolicy"
			}, l._("Privacy policy", null, {
				hk: "10K04G"
			})), o.a.createElement(m, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, l._("Mod policy", null, {
				hk: "2gYc2T"
			})))), o.a.createElement("div", {
				className: d.a.Copyright
			}, l._("Reddit Inc © {year}. All rights reserved", [l._param("year", (new Date).getFullYear().toString())], {
				hk: "4BrCkA"
			}))))
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
				l = s("./src/reddit/components/BackToTop/index.m.less"),
				m = s.n(l);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var u = e => i.a.createElement("div", {
					className: Object(n.a)(e.className, m.a.container),
					style: e.style
				}, i.a.createElement(d.f, {
					className: m.a.button,
					onClick: () => window.scroll(0, 0)
				}, p._("Back to top", null, {
					hk: "4nq6TO"
				}))),
				h = s("./src/reddit/components/SidebarFooter/index.tsx"),
				b = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				f = s.n(x),
				v = s("./src/lib/lessComponent.tsx");

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
				_ = y + E + 8,
				j = v.a.div("Container", f.a),
				k = v.a.wrapped(e => {
					var {
						className: t
					} = e, s = O(e, ["className"]);
					return i.a.createElement(u, C({
						className: t,
						style: {
							top: "calc(100vh - ".concat(40, "px)")
						}
					}, s))
				}, "BackToTop", f.a),
				P = e => {
					let {
						children: t,
						className: s,
						isSticky: o
					} = e;
					return i.a.createElement("div", {
						className: Object(n.a)(s, {
							[f.a.StickyStyles]: o
						})
					}, t)
				};
			class w extends a.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > _,
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
					return i.a.createElement(j, {
						className: s,
						innerRef: this.setWrapperRef
					}, i.a.createElement(P, {
						isSticky: o
					}, e, t, !n && i.a.createElement(h.a, null)), !this.props.hideBackToTop && i.a.createElement(k, null))
				}
			}
			const I = Object(g.t)();
			t.a = I(w)
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
					postId: s.id,
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

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var v = function(e, t) {
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
					} = e, r = v(e, ["children", "isActive", "isTopBannerVariant"]);
					return o.a.createElement("div", f({
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
					} = e, a = v(e, ["className", "isActive", "to", "isTopBannerVariant"]);
					const i = C(x.a.navLink, s, r);
					return n ? o.a.createElement(u.a, f({
						className: i,
						to: n
					}, a)) : o.a.createElement("a", f({
						className: i
					}, a))
				},
				y = e => {
					var {
						className: t,
						isActive: s
					} = e, n = v(e, ["className", "isActive"]);
					return o.a.createElement(u.a, f({
						className: C(x.a.navLink, s)
					}, n))
				},
				_ = e => {
					var {
						className: t,
						isActive: s
					} = e, n = v(e, ["className", "isActive"]);
					return o.a.createElement("a", f({
						className: C(x.a.subNavLink, s)
					}, n))
				},
				j = e => {
					var {
						className: t
					} = e, s = v(e, ["className"]);
					return o.a.createElement("div", f({
						className: Object(h.a)(x.a.subNavContainer, t)
					}, s))
				},
				k = e => {
					var {
						className: t,
						isOpen: s
					} = e, n = v(e, ["className", "isOpen"]);
					return o.a.createElement("div", f({
						className: Object(h.a)(x.a.subNavList, t, {
							[x.a.mIsOpen]: s
						})
					}, n))
				},
				{
					fbt: P
				} = s("./node_modules/fbt/lib/FbtPublic.js");
			const w = Object(a.c)({
				isActive: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
				subreddit: (e, t) => e.subreddits.models[t.subredditId]
			});
			var I = Object(c.t)()(Object(r.b)(w, (e, t) => ({
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
					return o.a.createElement(j, {
						onClick: this.handleOpen,
						onMouseLeave: this.handleClose
					}, o.a.createElement(O, {
						isActive: e.isActive,
						isTopBannerVariant: e.isTopBannerVariant
					}, e.label), o.a.createElement(k, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var N = T;
			const M = e => {
				const t = e.url && Object(S.g)(S.e, e.url);
				return t ? t.url : e.url
			};
			var L = e => e.menuItem.url ? o.a.createElement(E, {
					href: M(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : o.a.createElement(N, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => o.a.createElement(_, {
					key: "".concat(e.text, "-").concat(M(e)),
					role: "listitem",
					href: M(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				R = s("./src/lib/constants/index.ts"),
				F = s("./src/reddit/i18n/components.tsx");
			const A = Object(c.t)(),
				B = [R.Ab.SUBREDDIT, R.Ab.COMMENTS, R.Ab.COLLECTION_COMMENTS],
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
			const X = Object(H.a)(e => {
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
			var Q = e => o.a.createElement(X, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, o.a.createElement("div", {
					className: x.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === G.g.Large ? "".concat(e.maxWidth || K.a, "px") : "100%"
					}
				}, o.a.createElement("div", null, e.children), o.a.createElement(U, null))),
				Y = s("./src/reddit/components/Translated/index.tsx"),
				Z = s("./src/reddit/constants/wiki.ts"),
				$ = s("./src/reddit/helpers/trackers/subredditWiki.ts");
			var ee = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: s,
					pageLayer: n
				} = e, r = !!n && !!n.meta && n.meta.name === R.Ab.SUBREDDIT_WIKI, a = "wiki/".concat(Z.i), i = t.endsWith("/") ? t + a : "".concat(t, "/").concat(a);
				return o.a.createElement(E, {
					isActive: r,
					isTopBannerVariant: s,
					to: i,
					onClick: () => e.sendEvent(Object($.g)())
				}, o.a.createElement(Y.a, {
					msgId: "structuredStyles.forms.menuLinks.wikiHomeLinkLabel"
				}))
			};
			const te = Object(d.a)("spPolls", I),
				se = Object(c.t)(),
				ne = Object(a.c)({
					language: l.O,
					layout: c.M,
					widget: m.f
				}),
				oe = Object(r.b)(ne);
			t.a = se(oe(Object(i.c)(e => o.a.createElement(Q, {
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
			}), !!e.widget.data.length && e.widget.data.map((t, s) => o.a.createElement(L, {
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
				return k
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
				f = h.a.wrapped(d.a, "SubscribeIcon", p.a),
				v = h.a.wrapped(c.a, "UnsubscribeIcon", p.a),
				C = h.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, n = g(e, ["border", "small"]);
					return r.a.createElement(x, n, r.a.createElement(f, {
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
					return r.a.createElement(x, i, r.a.createElement(v, {
						className: Object(u.a)(a.n, i.className, {
							[p.a.isSmall]: n
						})
					}))
				}, "UnsubscribeIconButton", p.a),
				_ = h.a.wrapped(e => {
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
				j = e => {
					var {
						icon: t
					} = e, s = g(e, ["icon"]);
					return t ? r.a.createElement(y, b({}, s, {
						className: Object(u.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					})) : r.a.createElement(_, b({}, s, {
						className: Object(u.a)(s.className, {
							[p.a.isSmall]: s.small
						})
					}))
				};
			class k extends r.a.Component {
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
					return this.props.userIsSubscriber ? r.a.createElement(j, b({}, i, {
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
				f = h.a.wrapped(e => {
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
				v = h.a.wrapped(c.a, "Checkmark", p.a),
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
						_ = g(e, ["className", "identifier", "language", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
						j = this.state.isHovered;
					let k = m ? "subscribed" : "subscribe";
					m && j && (k = "unsubscribe");
					const P = Object(l.a)({
						type: s.type,
						key: k
					});
					return m ? this.state.hasJustSubscribed || h ? o.a.createElement(f, b({
						className: Object(u.a)(t, {
							[p.a.isLarge]: !d,
							[p.a.unsubscribeButtonHoverStyles]: !d
						}),
						onClick: this.onClick,
						small: d,
						belongsToType: s.type,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, _), d && o.a.createElement(v, null), !d && !j && o.a.createElement(v, null), !d && P) : d ? null : o.a.createElement(O, null) : o.a.createElement(o.a.Fragment, null, o.a.createElement(x, b({
						className: Object(u.a)(t, {
							[p.a.isLarge]: !d
						}),
						onClick: this.onClick,
						small: d
					}, _, {
						id: "subscribe-button-".concat(i),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}), o.a.createElement(C, null), !d && P))
				}
			}
			t.a = Object(a.a)(Object(r.c)(E))
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
			t.a = Object(o.a)(Object(n.c)(r.a))
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
				f = s("./src/reddit/constants/componentSizes.ts"),
				v = s("./src/reddit/controls/Button/index.tsx"),
				C = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				O = s("./src/reddit/i18n/utils.ts"),
				E = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				y = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				_ = s("./src/reddit/models/Flair/index.ts"),
				j = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				k = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				P = s.n(k);

			function w() {
				return (w = Object.assign || function(e) {
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
				}, e.errorMsg || Object(O.c)("Something went wrong.")) : o.a.createElement(o.a.Fragment, null, e.communities.map(t => o.a.createElement(T, w({
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
				})))), e.bottomButtonText && e.onBottomButtonClick && o.a.createElement(v.n, {
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
					widthRight: f.t
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
					to: Object(j.a)(e.name, e.type),
					onClick: e.onCommunityNameClick
				}, Object(j.b)(e.name, e.type)), o.a.createElement("div", {
					className: P.a.communityInfoContainer
				}, !!e.subscribers && o.a.createElement("p", {
					className: P.a.subscriberCount
				}, Object(c.b)(e.language, "listings.subscribers", e.subscribers, {
					count: Object(l.b)(e.subscribers)
				})), e.isNSFW && o.a.createElement(m.b, {
					flair: {
						type: _.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? o.a.createElement(C.a, {
					className: Object(d.a)(P.a.communityCta, P.a.smallLoadingIcon),
					sizePx: 12
				}) : o.a.createElement(v.n, {
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
				f = s("./src/reddit/selectors/postCollection.ts"),
				v = s("./node_modules/reselect/es/index.js"),
				C = s("./src/reddit/helpers/trackers/postCollection.ts"),
				O = s("./src/reddit/components/Widgets/PostCollection/CollectionOverflowMenu/index.m.less"),
				E = s.n(O),
				y = s("./node_modules/fbt/lib/FbtPublic.js");
			const _ = d.a.wrapped(g.b, "DropdownRow", E.a);
			let j;
			const k = Object(x.b)("DELETE_COLLECTION_CONFM_MODAL_ID"),
				P = Object(x.b)("EDIT_POST_COLLECTION_MODAL_ID"),
				w = Object(v.c)({
					createPostUrl: f.d,
					isDeleteConfirmModalOpen: k,
					isEditCollectionModalOpen: P,
					shouldShowCollectionEditOptions: f.t
				}),
				I = Object(i.b)(w, (e, t) => ({
					copyLink: () => e(Object(m.D)(t.permalink)),
					onCreatePost: s => {
						t.shouldShowCreatePost && e(Object(c.b)(s))
					},
					onRemoveCollection: () => e(Object(p.c)(t.collectionId, t.isSubmitPage)),
					onToggleDeleteConfirmModal: () => e(l.i("DELETE_COLLECTION_CONFM_MODAL_ID")),
					onToggleEditModal: async () => {
						j || (j = await Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("editCollectionModal")]).then(s.bind(null, "./src/reddit/components/EditCollectionModal/index.tsx")).then(e => e.EditCollectionModal)), e(l.i("EDIT_POST_COLLECTION_MODAL_ID"))
					}
				}));
			t.a = I(Object(b.c)(e => {
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
					tooltipPosition: f,
					sendEvent: v
				} = e;
				return a.a.createElement(a.a.Fragment, null, a.a.createElement(h.b, {
					className: t,
					dropdownId: "collection-menu-".concat(s, "-").concat(g ? 1 : 2),
					onClick: o.a,
					targetPosition: x,
					tooltipPosition: f
				}, a.a.createElement(_, {
					onClick: n,
					displayText: y.fbt._("Copy collection link", null, {
						hk: "3Rfodz"
					})
				}), b && a.a.createElement(a.a.Fragment, null, a.a.createElement(_, {
					onClick: () => {
						v(Object(C.l)(s)), p()
					},
					displayText: y.fbt._("Edit", null, {
						hk: "2ehqo8"
					})
				}), a.a.createElement(_, {
					onClick: () => {
						v(Object(C.k)(s)), m()
					},
					displayText: y.fbt._("Delete collection", null, {
						hk: "2FyIJB"
					})
				}), g && a.a.createElement(_, {
					onClick: () => {
						d(r)
					},
					displayText: y.fbt._("Create post", null, {
						hk: "1v2jHl"
					})
				}))), c && j && a.a.createElement(j, {
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
				f = s("./src/reddit/helpers/flair.ts"),
				v = s("./src/reddit/helpers/trackers/postFlair.ts"),
				C = s("./src/reddit/models/Widgets/index.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				y = s.n(E);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var j = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const k = 129,
				P = Object(b.t)({
					filterName: e => Object(b.R)(e)[h.f],
					url: e => Object(b.W)(e)
				}),
				w = Object(i.c)({
					subredditId: (e, t) => Object(O.D)(e, t.subredditName)
				}),
				I = Object(a.b)(w),
				S = l.a.div("WidgetContent", y.a),
				T = e => {
					var {
						display: t,
						isFlairFilter: s,
						onMouseDown: n
					} = e, o = j(e, ["display", "isFlairFilter", "onMouseDown"]);
					return r.a.createElement("li", {
						className: Object(c.a)(y.a.StyledFlair, t === C.d.Cloud && y.a.cloudDisplay, {
							[y.a.flairFilter]: s,
							[y.a["m-selected"]]: o.isSelected
						}),
						onMouseDown: n
					}, r.a.createElement(m.b, _({}, o, {
						className: y.a.Flair,
						isFlairFilter: s,
						forceSmallEmojis: !0
					})))
				};
			class N extends r.a.Component {
				constructor(e) {
					super(e), this.flairListRef = r.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(v.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(v.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(v.d)())
					}, this.onClick = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(x.d)(x.a.SearchResults), this.props.sendEvent(Object(v.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(f.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(f.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					d.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > k && this.setState({
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
						to: Object(f.e)(this.props.url, Object(f.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, s = t ? k : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
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
						to: Object(f.e)(this.props.url, Object(f.j)(e))
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
			t.a = P(I(Object(p.c)(N)))
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
				f = s.n(x);
			const v = d.a.div("RuleShortName", f.a),
				C = d.a.div("RuleIndex", f.a),
				O = d.a.div("RuleTitle", f.a),
				E = d.a.div("RuleDescription", f.a),
				y = d.a.wrapped(l.a, "RawHTMLDisplay", f.a),
				_ = {};
			class j extends o.a.Component {
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
					return o.a.createElement(v, {
						className: Object(c.a)({
							[f.a.pointerCursor]: a
						}),
						onClick: n(e) || !r ? void 0 : s
					}, o.a.createElement(b.a, null, o.a.createElement(C, null, "".concat(e.humanIndex, ".")), o.a.createElement(O, null, "".concat(e.rule.shortName)), o.a.createElement("div", null, !n(e) && r && (t.isVisible ? o.a.createElement(h.a, {
						className: f.a.Chevron
					}) : o.a.createElement(u.a, {
						className: f.a.Chevron
					})))), t.isVisible && o.a.createElement(E, null, e.rule.descriptionRichText ? o.a.createElement(m.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: _
					}) : e.rule.descriptionHtml ? o.a.createElement(y, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			s.d(t, "a", (function() {
				return k
			}));
			const k = Object(i.a)(e => e.rules.length > 0 ? o.a.createElement(a.a, {
				className: e.className,
				styles: e.styles,
				title: Object(r.a)(e.language, "structuredStyles.widgets.subreddit-rules.subredditRules", {
					subreddit: e.subredditName
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, s) {
				return o.a.createElement(j, {
					key: "rule".concat(t.shortName).concat(t.createdUtc),
					rule: t,
					display: e.display,
					humanIndex: s + 1
				})
			}))) : null);
			t.b = e => o.a.createElement(k, {
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
			var b = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				g = s("./src/reddit/selectors/experiments/topPosts.ts"),
				x = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/models/Theme/index.ts"),
				C = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const O = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(C.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				E = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(C.a)(e).widgetColors.sidebarWidgetHeaderColor,
				y = e => {
					const t = O(e);
					return Object(v.f)(t)
				},
				_ = e => {
					const t = E(e);
					return Object(v.f)(t)
				};
			var j = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				k = s.n(j);
			const {
				fbt: P
			} = s("./node_modules/fbt/lib/FbtPublic.js"), w = Object(m.t)(), I = Object(r.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(m.m)(e, t) || void 0,
						n = t.redditStyle || Object(x.m)(e, {
							subredditId: s
						}),
						o = Object(f.Q)(e);
					return n || o
				},
				nigtmode: f.Q,
				subredditId: m.m,
				topPostVariant: g.d
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
					return e.backgroundColor = O(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = y(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = E(this.props), e.color = e.fill = _(this.props), e
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
					} = this.props, u = s ? k.a.widgetContentOnly : k.a.widgetContent, h = !n && this.props.styles, b = h ? this.getWidgetBackgroundStyles() : {}, g = h ? this.getWidgetHeaderStyles() : {};
					return o.a.createElement("div", {
						className: Object(i.a)(t, k.a.widgetBackground, {
							[k.a.redditStyle]: n,
							[k.a.clickable]: !!a,
							[k.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: a,
						style: b
					}, c && o.a.createElement("div", {
						className: k.a.widgetHeader,
						style: g
					}, o.a.createElement("div", {
						className: Object(i.a)(k.a.widgetTitle, l)
					}, o.a.createElement(d.b, {
						type: d.a.Widget
					}, c)), r), o.a.createElement("div", {
						className: Object(i.a)(u, {
							[k.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? m : "none"
						}
					}, e), this.state.isTruncated && o.a.createElement(p.n, {
						className: k.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, P._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = w(I(Object(c.a)(Object(l.c)(S))))
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
				f = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/Widgets/Button/index.m.less"),
				C = s.n(v);
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
				_ = Object(m.a)(e => {
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
				j = e => o.a.createElement(l.a, {
					href: y(e.button),
					isSponsored: !1,
					source: null
				}, o.a.createElement(_, e)),
				k = p.a.wrapped(i.a, "RawHTMLDisplay", C.a);
			var P = Object(r.b)(() => Object(a.c)({
					forceRedditStyle: x.m,
					isNightmodeOn: f.Q
				}))(e => o.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && o.a.createElement(k, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== g.f.Image || e.url !== h.c) && (!e.hoverState || e.hoverState.kind !== g.f.Image || e.hoverState.url !== h.c)).map(t => o.a.createElement(j, {
					key: "".concat(t.text, "-").concat(t.url),
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				w = s("./src/lib/humanizeDate/index.ts"),
				I = s("./src/reddit/controls/TextButton/index.tsx"),
				S = s("./src/reddit/i18n/utils.ts"),
				T = s("./src/reddit/components/Widgets/Calendar/index.m.less"),
				N = s.n(T);
			const M = 100,
				L = {
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
					}, this.state = L
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return e.text.length > M ? o.a.createElement(W, null, t.isExpanded ? e.text : e.text.slice(0, M), o.a.createElement(H, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? Object(S.c)("read less") : Object(S.c)("...read more"))) : o.a.createElement(W, null, e.text)
				}
			}
			const U = Object(a.c)({
				language: f.O
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
				}) : t.title), e.widget.configuration.showDate && t.startTime && o.a.createElement(B, null, Object(w.a)(t.startTime, !0), !t.allDay && e.widget.configuration.showTime && o.a.createElement("span", null, " • ", (e => {
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
			var J = Object(K.c)(e => o.a.createElement(z.b, {
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
				X = Object(r.b)(q),
				Q = (e, t, s) => '<head>\n  <link rel="stylesheet" href="'.concat(e, '">\n  <link rel="stylesheet" href="').concat(t, '">\n  <base target="_blank">\n</head>\n<body>').concat(s, "</body>");
			class Y extends o.a.Component {
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
					e.widget.stylesheetUrl && e.widget.textHtml && (this.iframeContent = Q(e.stylesheet, e.widget.stylesheetUrl, e.widget.textHtml))
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
			var Z = X(Y),
				$ = s("./node_modules/fbt/lib/FbtPublic.js"),
				ee = s("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				te = s.n(ee);
			var se = p.a.div("ImageFrame", te.a),
				ne = s("./src/reddit/components/Widgets/Image/StyledImage.m.less"),
				oe = s.n(ne);
			var re = p.a.img("StyledImage", oe.a);
			class ae extends o.a.Component {
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
				UNSAFE_componentWillReceiveProps(e) {
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
						n = o.a.createElement(se, null, o.a.createElement(re, {
							alt: $.fbt._("Widget image", null, {
								hk: "2H4O05"
							}),
							src: s.url
						}));
					return s.linkUrl ? o.a.createElement(l.a, {
						href: s.linkUrl,
						isSponsored: !1,
						source: null
					}, n) : n
				}
			}
			var ie = ae,
				ce = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				de = s("./src/reddit/components/Flair/index.tsx"),
				le = s("./src/reddit/controls/InternalLink/index.tsx"),
				me = s("./src/reddit/icons/fonts/Envelope/index.tsx"),
				pe = s("./src/reddit/models/Flair/index.ts"),
				ue = s("./src/reddit/components/Widgets/Moderator/index.m.less"),
				he = s.n(ue);
			const be = p.a.div("ModeratorListItem", he.a),
				ge = p.a.div("Username", he.a),
				xe = p.a.a("MessageModsLink", he.a),
				fe = p.a.wrapped(de.b, "FlairComponent", he.a),
				ve = e => e.authorFlairType === pe.f.Richtext ? {
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
				Ce = e => o.a.createElement(ge, null, "u/".concat(e)),
				Oe = p.a.wrapped(le.a, "InternalLink", he.a),
				Ee = p.a.div("LinkContainer", he.a);
			var ye = e => {
					const {
						subredditName: t,
						widget: s
					} = e;
					return o.a.createElement(c.a, {
						styles: s.styles,
						title: $.fbt._("Moderators", null, {
							hk: "3AMICc"
						}),
						headerButton: o.a.createElement(xe, {
							href: "https://reddit.com/message/compose?to=/r/".concat(t),
							target: "_blank"
						}, o.a.createElement(me.a, null))
					}, s.mods.map(e => o.a.createElement(be, {
						key: e.name
					}, (e => o.a.createElement(ce.a, {
						to: "/user/".concat(e.name, "/")
					}, Ce(e.name)))(e), o.a.createElement(fe, {
						flair: ve(e),
						forceSmallEmojis: !0
					}))), o.a.createElement(Ee, null, o.a.createElement(Oe, {
						to: "/r/".concat(t, "/about/moderators/")
					}, $.fbt._("View All Moderators", null, {
						hk: "2DIeXE"
					}))))
				},
				_e = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				je = s("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				ke = s("./src/reddit/components/Widgets/TextArea/index.m.less"),
				Pe = s.n(ke);
			const we = p.a.div("WidgetContent", Pe.a),
				Ie = p.a.wrapped(i.a, "RawHTMLDisplay", Pe.a);
			var Se = e => o.a.createElement(c.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, o.a.createElement(we, null, o.a.createElement(Ie, {
					html: e.widget.textHtml || ""
				}))),
				Te = s("./src/reddit/components/Widgets/Base/index.tsx"),
				Ne = e => o.a.createElement(Te.b, null, "This widget hasn't been implemented yet!");
			t.a = e => {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return ye;
						case "textarea":
							return Se;
						case "button":
							return P;
						case "subreddit-rules":
							return je.b;
						case "community-list":
							return J;
						case "calendar":
							return G;
						case "image":
							return ie;
						case "custom":
							return Z;
						case "post-flair":
							return _e.a;
						default:
							return Ne
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
				return v
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
				f = s("./src/reddit/selectors/tracking.ts");

			function v() {
				return Object(l.t)({
					currentProfileName: l.h,
					isCommentPermalink: l.v,
					isCommentsPage: l.w,
					isFrontpage: l.y,
					isProfilePostListing: l.H,
					isTopicPage: l.L,
					pageLayer: e => e
				})
			}
			const C = v(),
				O = {
					apiError: b.c,
					apiPending: b.d,
					measureScrollFPS: h.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(l.M)(e, t),
					loadMore: b.g,
					postsById: g.Y,
					postIds: Object(r.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: o
						} = t;
						return Object(g.J)(e, s, n, o)
					}),
					subredditsById: x.V,
					viewportDataLoaded: f.a,
					pageReferrer: l.P,
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
						e(i.K(t))
					},
					fireAdPixelsOfType: (t, s) => {
						e(i.z(t, s))
					},
					trackOnPostEnteredViewport: (t, s, n) => {
						e(i.N(t, n))
					},
					trackOnPostExitedViewport: (t, s, n, o) => {
						e(i.O(t, n, o))
					}
				}),
				_ = Object(n.b)(E, y, (e, t, s) => Object.assign({}, e, t, s, {
					postClickEvent: p.f,
					postComponentForLayout: e => Object(m.b)(Object.assign({}, e))
				}));
			t.a = e => Object(d.c)(C(_(e)))
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
		"./src/reddit/connectors/connectToLanguage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/selectors/user.ts");
			const a = Object(o.c)({
				language: r.O
			});

			function i(e) {
				return Object(n.b)(a)(e)
			}
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
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/lodash/throttle.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/index.m.less"),
				u = s.n(p),
				h = s("./src/reddit/controls/Dropdown/row.m.less"),
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
			class f extends a.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = o()(() => {
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
					}, s = Object(i.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? a.a.createElement(c.a, g({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && a.a.createElement("span", {
						className: s
					}, e.children), a.a.createElement("span", {
						className: Object(i.a)(b.a.text, e.textClassName)
					}, e.displayText)) : a.a.createElement(m.a, g({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: o()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? a.a.createElement("div", null, e.children) : a.a.createElement("span", {
						className: s
					}, e.children)), e.displayText && a.a.createElement("span", {
						className: Object(i.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && a.a.createElement(l.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && a.a.createElement(d.a, {
						className: u.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				var {
					className: t
				} = e, s = x(e, ["className"]);
				const n = Object(i.a)(b.a.row, t, {
					[b.a.mIsInteractive]: !s.noHover,
					[b.a.mIsSelected]: s.isSelected,
					[b.a.topics]: s.isTopicsStyle
				});
				return a.a.createElement(f, g({
					className: n
				}, s))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, s) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				iconStyles: "_2XOVBjNLHjJIznEsn35vs2",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/uniqueId.js"),
				r = s.n(o),
				a = s("./node_modules/raf/index.js"),
				i = s.n(a),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./node_modules/react-redux/es/index.js"),
				m = s("./node_modules/reselect/es/index.js"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				h = s("./src/reddit/selectors/activeModalId.ts"),
				b = s("./src/higherOrderComponents/asModal/index.tsx"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/layout/row/Inline/index.tsx"),
				f = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				v = s.n(f);
			var C = Object(b.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return d.a.createElement("div", {
						className: v.a.wrapper
					}, d.a.createElement(x.a, {
						className: v.a.titleRow
					}, s), d.a.createElement("div", {
						className: v.a.detailsContainer
					}, t), d.a.createElement(x.a, {
						className: v.a.buttonRow
					}, d.a.createElement(g.f, {
						className: v.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				O = s("./src/reddit/controls/ErrorText/index.m.less"),
				E = s.n(O);
			s.d(t, "a", (function() {
				return k
			})), s.d(t, "c", (function() {
				return P
			}));
			const y = Object(m.c)({
				activeModalId: h.a
			});
			class _ extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: "ErrorTextModal--".concat(r()())
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					i()(() => {
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
						errorModalBody: o,
						errorModalTitle: r = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: a = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: i,
						textHasOverflowed: c
					} = this.state;
					return d.a.createElement("div", {
						className: Object(p.a)(E.a.wrapper, s)
					}, d.a.createElement("span", {
						className: E.a.description,
						ref: this.spanRef
					}, e), c && d.a.createElement("span", {
						className: E.a.moreText,
						onClick: this.toggleModal
					}, a), t === i && d.a.createElement(C, {
						onConfirmed: this.toggleModal,
						title: r
					}, o || e))
				}
			}
			const j = Object(l.b)(y, e => ({
					toggleErrorTextModal: t => e(Object(u.i)(t))
				}))(_),
				k = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: n,
						fallbackMessage: o,
						messages: r = []
					} = e, a = r.length ? r : o ? [o] : [];
					return a.length ? d.a.createElement("div", {
						className: t
					}, a.map((e, t) => d.a.createElement(j, {
						className: s,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				P = e => d.a.createElement(k, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = j
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
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "d", (function() {
				return h
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				c = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/controls/MetaData/index.m.less")),
				d = s.n(c),
				l = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const m = a.a.span("metaText", d.a),
				p = e => r.a.createElement(m, e, " · "),
				u = e => {
					var {
						isScoreHidden: t,
						language: s,
						score: o,
						useUpvotes: a
					} = e, c = l(e, ["isScoreHidden", "language", "score", "useUpvotes"]);
					const d = Object(i.b)(o),
						p = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(o, "number", d)], {
							hk: "2L3T21"
						}),
						u = t ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : a ? p : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(o, "number", d)], {
							hk: "gf67v"
						});
					return r.a.createElement(m, c, u)
				},
				h = (e, t) => r.a.createElement(m, null, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, s) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/controls/InternalLink/index.tsx"),
				r = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				a = s.n(r);
			t.a = n.a.wrapped(o.a, "unstyledInternalLink", a.a)
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
						featureEnabled: n
					} = e, r = c(e, ["featureEnabled"]);
					return n ? o.a.createElement(t, r) : void 0 !== s ? o.a.createElement(s, r) : null
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
		"./src/reddit/helpers/postComponentForLayout/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "b", (function() {
				return O
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/lib/isUrl/index.ts"),
				i = s("./src/lib/logs/console.ts"),
				c = s("./src/reddit/constants/postLayout.ts"),
				d = s("./src/reddit/models/Media/index.ts");
			const l = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-BlankPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-BlankPost").then(s.bind(null, "./src/reddit/components/BlankPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/BlankPost/index.tsx"
					}
				}),
				m = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ClassicPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("Poll~ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~reddit-components-ClassicPost~redd~f8abff80"), s.e("Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3"), s.e("reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796"), s.e("reddit-components-ClassicPost")]).then(s.bind(null, "./src/reddit/components/ClassicPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ClassicPost/index.tsx"
					}
				}),
				p = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-CompactPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("Poll~ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~reddit-components-ClassicPost~redd~f8abff80"), s.e("Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3"), s.e("reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796"), s.e("reddit-components-CompactPost")]).then(s.bind(null, "./src/reddit/components/CompactPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/CompactPost/index.tsx"
					}
				}),
				u = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-LargePost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("Poll~ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~reddit-components-ClassicPost~redd~f8abff80"), s.e("Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3"), s.e("reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796"), s.e("reddit-components-LargePost")]).then(s.bind(null, "./src/reddit/components/LargePost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/LargePost/index.tsx"
					}
				}),
				h = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-MediumPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("Poll~ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~reddit-components-ClassicPost~redd~f8abff80"), s.e("Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3"), s.e("reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796"), s.e("reddit-components-MediumPost")]).then(s.bind(null, "./src/reddit/components/MediumPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/MediumPost/index.tsx"
					}
				}),
				b = {
					[c.g.Large]: u,
					[c.g.Medium]: h,
					[c.g.Classic]: m,
					[c.g.Compact]: p
				},
				g = e => r.a.createElement(l, e),
				x = ["https://www.mcdonalds.com", "https://d2n94wep25xhn0.cloudfront.net", "https://www.dyson.com", "https://dyson.com"],
				f = e => e.source && e.source.url && e.isSponsored && x.some(t => e.source.url.startsWith(t)),
				v = e => !e.media || e.media.type === d.n.EMBED && !(d.b.has(e.media.provider) || f(e)),
				C = (e, t) => {
					if (e.isBlank) return 0;
					switch (t) {
						case c.g.Medium:
							return 188;
						case c.g.Classic:
							return 96;
						case c.g.Compact:
							return 32;
						default:
							return 200
					}
				};

			function O(e) {
				let {
					isCrosspost: t,
					isFirstPost: s,
					layout: n,
					post: o
				} = e;
				if (o.isBlank) return g;
				const r = !o.media && !!o.source && Object(a.a)(o.source.url),
					d = t && r;
				n === c.g.Large && v(o) && !d && (n = c.g.Medium);
				const l = b[n];
				return void 0 === l ? (Object(i.a)(void 0, "Could not find component for layout ".concat(n, ".")), g) : s && o.isSponsored && n === c.g.Large ? h : l
			}
		},
		"./src/reddit/helpers/styles/mixins/index.m.less": function(e, t, s) {
			e.exports = {
				basePostStyles: "REwsaLIz5u3DhM7zbbzIU",
				classicPostStyles: "bE7JgM2ex7W3aF3zci5bm",
				compactPostStyles: "FeLWdhOO-cVXowAo3Rndk",
				baseLargeAndMediumPostStyles: "_2lHXa-mLMsRfm1Q5JxgU4r",
				largeAndMediumPostStyles: "_3Qkp11fjcAw9I9wtLo8frE",
				baseClassicAndCompactPostStyles: "_2yN8L-c8UBoKxHn0-vg_dS",
				baseSubredditStyles: "_2zRMh6o0BucltCL6o64pa4",
				classicAndCompactActiveStyles: "_1Accc3h2AW0sB8E4CcEz2n",
				mIsActive: "_1LmKpEAguLZV4jQMgQSFVL",
				classicAndCompactPlaceholderStyles: "_3joKifdh6j3tG_vsgFS85R",
				mUseRedditTheme: "_1nQXomgzQ2rnBsRU2iZ00l",
				largeAndMediumActiveStyles: "_1qftyZQ2bhqP62lbPjoGAh"
			}
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
		"./src/reddit/helpers/trackers/reportPrompt.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const o = (e, t, s, o) => r => ({
					source: "report_prompt",
					noun: s,
					action: o,
					subreddit: n.subredditByName(r, e),
					post: n.post(r, t)
				}),
				r = (e, t, s, o) => r => ({
					source: "report_survey",
					noun: s,
					action: o,
					subreddit: n.subredditByName(r, e),
					post: n.post(r, t)
				})
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
				return f
			})), s.d(t, "C", (function() {
				return v
			})), s.d(t, "f", (function() {
				return C
			})), s.d(t, "r", (function() {
				return O
			})), s.d(t, "l", (function() {
				return E
			})), s.d(t, "k", (function() {
				return y
			})), s.d(t, "i", (function() {
				return _
			})), s.d(t, "e", (function() {
				return j
			})), s.d(t, "w", (function() {
				return k
			})), s.d(t, "j", (function() {
				return P
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "p", (function() {
				return I
			})), s.d(t, "y", (function() {
				return S
			})), s.d(t, "n", (function() {
				return T
			})), s.d(t, "g", (function() {
				return N
			})), s.d(t, "D", (function() {
				return M
			})), s.d(t, "z", (function() {
				return L
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
				f = () => e => Object.assign({
					source: "global",
					action: "view",
					noun: "screen"
				}, r(e)),
				v = () => e => Object.assign({
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
				_ = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "hourly_frequency"
				}, r(e)),
				j = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "daily_frequency"
				}, r(e)),
				k = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "weekly_frequency"
				}, r(e)),
				P = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "monthly_frequency"
				}, r(e)),
				w = () => e => Object.assign({
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
				M = () => e => Object.assign({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer"
				}, r(e)),
				L = () => (e, t) => Object.assign({
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
				return f
			})), s.d(t, "i", (function() {
				return v
			})), s.d(t, "a", (function() {
				return C
			})), s.d(t, "h", (function() {
				return O
			})), s.d(t, "l", (function() {
				return E
			})), s.d(t, "n", (function() {
				return _
			})), s.d(t, "o", (function() {
				return j
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
				f = c("add_wiki_subreddit_contributor"),
				v = c("remove_wiki_subreddit_contributor"),
				C = c("ban_wiki_contributor"),
				O = c("unban_wiki_contributor"),
				E = e => c(e ? "show_wiki_revision" : "hide_wiki_revision"),
				y = {
					[n.a.Inherit]: "subreddit_wiki_perms",
					[n.a.Contributors]: "only_wiki_contributors",
					[n.a.Mods]: "only_mods"
				},
				_ = e => t => Object.assign({}, r(t), {
					source: "wiki",
					action: "click",
					noun: "hide_show_page",
					actionInfo: o.actionInfo(t, {
						settingValue: e ? "show" : "hide"
					})
				}),
				j = e => t => Object.assign({}, r(t), {
					source: "wiki",
					action: "click",
					noun: "editing_permissions",
					actionInfo: o.actionInfo(t, {
						settingValue: y[e]
					})
				})
		},
		"./src/reddit/hooks/useTracking.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = n.b
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
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, s) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("dropdownTriangle"), " ").concat(e.className)
			}), "DropdownTriangle", i.a);
			t.a = c
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
				f = s("./src/reddit/layout/page/Lightbox/index.m.less"),
				v = s.n(f);

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
						className: Object(i.a)(v.a.fakeOverlay, t),
						style: {
							"--fakelightbox-overlay-background": Object(b.g)(a.canvas, a.canvasImgUrl, a.canvasImgPosition),
							"--fakelightbox-overlay-max-width": "".concat(s ? u.h : u.i, "px")
						}
					}, r))
				});
			class _ extends o.a.Component {
				constructor() {
					super(...arguments), this.renderWrapper = e => {
						const t = {
							browserInfo: e,
							showSuspended: this.props.showSuspended,
							showFPR: this.props.showFPR
						};
						return o.a.createElement(m.a, {
							className: Object(i.a)(v.a.fakeOverlayLightboxHeaderWrapper, {
								[v.a.wide]: this.props.isCollectionLayout
							}, Object(l.b)(v.a, t))
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
			t.a = E(_)
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
		"./src/reddit/pages/CollectionCommentsPage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.regexp.search.js"), s("./node_modules/core-js/modules/es6.regexp.match.js");
			var n = s("./node_modules/lodash/fromPairs.js"),
				o = s.n(n),
				r = s("./node_modules/lodash/get.js"),
				a = s.n(r),
				i = s("./node_modules/react/index.js"),
				c = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/lib/extractQueryParams/index.ts"),
				m = s("./src/lib/makeCollectionCommentsPageKey/index.ts"),
				p = s("./src/reddit/constants/history.ts"),
				u = s("./src/reddit/helpers/history/index.ts"),
				h = s("./src/reddit/models/Comment/index.ts"),
				b = s("./src/reddit/models/Post/index.ts"),
				g = s("./src/reddit/pages/CommentsPage/index.tsx"),
				x = s("./src/reddit/pages/CommentsPage/withPageSorting.tsx"),
				f = s("./src/reddit/selectors/postCollection.ts"),
				v = s("./node_modules/reselect/es/index.js");

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const O = Object(d.b)(() => Object(v.c)({
				primaryPostId: f.q
			}))(e => {
				const t = e.postId || e.primaryPostId;
				return t ? c.a.createElement(g.CommentsPage, C({}, e, {
					postId: t
				})) : null
			});
			t.default = Object(x.a)(e => {
				const {
					state: t
				} = e.location, s = a()(t, p.a.IsOverlay, !1), n = a()(t, p.a.CloseLocation, null), r = a()(t, p.a.ScrollOnLoad, !1);
				r && Object(u.c)(p.a.ScrollOnLoad);
				const i = e.match.params,
					{
						partialCommentId: d,
						partialPostId: g,
						subredditName: x,
						collectionId: f
					} = i,
					v = g ? Object(b.m)(g) : void 0,
					C = d && Object(h.e)(d),
					E = o()([...Object(l.a)(e.location.search)]),
					y = {};
				e.hasSortParam && (y.sort = e.sort, y.hasSortParam = !0);
				const _ = Object(m.a)(f, v, C, y);
				return c.a.createElement(O, {
					closeLocation: n,
					collectionId: f,
					commentId: C,
					commentsPageKey: _,
					isOverlay: s,
					location: e.location,
					postId: v,
					instanceId: E.instanceId,
					shouldScrollToComments: r,
					sort: e.sort,
					subredditName: x,
					onOtherDiscussions: !!E.onOtherDiscussions
				})
			})
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
				otherDiscussionsCount: u.C,
				post: p.F
			}));
			t.a = Object(d.c)(x(e => {
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
					f = Object(l.b)(Object(i.e)(h));
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
					to: f
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
				f = s("./node_modules/reselect/es/index.js"),
				v = s("./src/reddit/i18n/utils.ts"),
				C = s("./src/reddit/models/PostDraft/index.ts"),
				O = s("./src/telemetry/index.ts"),
				E = s("./src/telemetry/models/Timer.ts"),
				y = s("./src/lib/classNames/index.ts"),
				_ = s("./src/lib/constants/index.ts"),
				j = s("./src/lib/domUtils/index.ts"),
				k = s("./src/lib/fastdom/index.ts"),
				P = s("./src/lib/lessComponent.tsx"),
				w = s("./src/lib/makeCommentsPageKey/index.ts"),
				I = s("./src/lib/makeDraftKey/index.ts"),
				S = s("./src/lib/performanceTimings/index.tsx"),
				T = s("./src/reddit/actions/comment/index.ts"),
				N = s("./src/reddit/actions/commentsListTruncated/index.ts"),
				M = s("./src/reddit/actions/login.ts"),
				L = s("./src/reddit/actions/page.ts"),
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
				X = s("./src/reddit/featureFlags/profileCollections.ts"),
				Q = s("./src/reddit/models/Comment/index.ts"),
				Y = s("./src/reddit/models/Media/index.ts"),
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
				fe = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				ve = s("./src/reddit/components/CommentSort/index.tsx"),
				Ce = s("./src/reddit/components/CommentsPageSidebar/index.tsx"),
				Oe = s("./src/reddit/components/CommentsWrapper/index.tsx"),
				Ee = s("./src/reddit/components/Economics/FTUE/TopTippersBenefits/async.tsx"),
				ye = s("./src/reddit/components/Economics/TopTippers/PostLeaderboard/async.tsx"),
				_e = s("./src/reddit/components/HeaderImage/index.tsx"),
				je = s("./src/reddit/components/Hovercards/helpers.ts"),
				ke = s("./src/reddit/components/InfoBanners/CommentThreadArchivedBanner/index.tsx"),
				Pe = s("./src/reddit/components/InfoBanners/CommentThreadLockedBanner/index.tsx"),
				we = s("./src/reddit/components/InfoBanners/ContestModeEnabledBanner/index.tsx"),
				Ie = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				Se = s("./src/reddit/components/JumpToContent/index.tsx"),
				Te = s("./src/reddit/components/PostContent/index.tsx"),
				Ne = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Me = s("./src/reddit/components/SubredditNav/index.tsx"),
				Le = s("./src/reddit/components/TrackingHelper/index.tsx"),
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
				Xe = s.n(qe);

			function Qe() {
				return (Qe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var Ye = function(e, t) {
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
					} = e.match.params, c = Object(Z.m)(a), d = r && Object(Q.e)(r);
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
				at = () => Object(f.c)({
					apiError: ee.c,
					apiPending: ee.d,
					canCommentAsModerator: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(ce.Z)(e, {
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
					contestModeIsEnabled: ce.E,
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
					postSEOV2IdCardVariant: re.k,
					profileCollectionsEnabled: X.a,
					replyComment: ee.t,
					subredditAboutInfo: (e, t) => {
						let {
							subredditName: s
						} = t;
						return s ? Object(de.v)(e, {
							subredditName: s
						}) : void 0
					},
					subredditOrProfile: ce.Z,
					userHovercardIsOpen: (e, t) => Object(le.b)(Object(je.b)({
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
					fullyLoadComments: () => e(Object(L.z)(t.postId, void 0, {
						subredditName: t.subredditName
					})),
					onHideTooltip: () => e(Object(R.i)()),
					onToggleTooltip: t => e(Object(R.h)({
						tooltipId: t
					})),
					openLoginModal: () => e(Object(M.e)()),
					openRegisterModal: () => e(Object(M.f)()),
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
							d = r && r.media && r.media.type === Y.n.EMBED ? r.media.provider : null,
							l = r && r.media && Y.d.has(r.media.type) && (!d || !Y.q.has(d));
						this.scrollY = i, !e && void 0 !== s && i >= s && (this.didScrollPastPost = !0), e && void 0 !== s && i < s && (this.didScrollPastPost = !1, n && k.a.write(() => {
							o(Object(je.b)({
								itemId: a,
								tooltipIdPrefix: D.a,
								tooltipType: Ne.c.StickyPost
							}))
						})), l && this.postScrollItemRef && (this.postPaused || !c && !this.didScrollPastPost ? this.postPaused && !this.didScrollPastPost && (c ? this.recheckScrollTimer = setTimeout(this.handleScroll, 4 * _.G) : (this.postPaused = !1, k.a.write(this.postScrollItemRef.focusContent))) : (this.postPaused = !0, k.a.write(this.postScrollItemRef.pauseContent)))
					}, _.G), this.sendEventWithName = e => () => this.props.sendEvent(Object(De.b)(this.props.postId, e)), this.updateWindowHeight = () => {
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
					n ? (this.scrollContainerEl = document.getElementById(V.d), r && (e || t) && o && o.numComments ? this.scrollToComments() : k.a.write(() => {
						setTimeout(() => {
							Object(j.c)(this.scrollContainerEl, 0)
						})
					})) : this.scrollContainerEl = window, this.needsUpdatedMeasurements = !0, this.addListeners(), this.checkAndSendScreenview(), k.a.read(() => {
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
						this.props.post && this.props.post.numComments ? k.a.read(this.handleScroll) : k.a.write(() => {
							e || Object(j.c)(this.scrollContainerEl, 0), k.a.read(this.handleScroll)
						}), this.props.isOverlay && !e && k.a.write(() => {
							setTimeout(() => {
								Object(j.c)(this.scrollContainerEl, 0)
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
							(this.props.isOverlay ? n && n.scrollTop || 0 : window.pageYOffset) >= a && k.a.write(() => {
								setTimeout(() => {
									this.props.isOverlay ? Object(j.c)(n, a) : Object(j.c)(document, a)
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
					k.a.read(() => {
						const e = document.getElementById(V.d);
						if (e) {
							let t, s;
							this.commentFormRef ? (t = this.commentFormRef.offsetTop - tt, s = this.commentFormRef.offsetParent) : this.commentSortRef ? (t = this.commentSortRef.offsetTop - tt, s = this.commentSortRef.offsetParent) : t = 0, s && (t += s.offsetTop), k.a.write(() => {
								Object(j.c)(e, t), this.needsUpdatedMeasurements = !0, setTimeout(() => k.a.read(this.handleScroll))
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
					k.a.read(() => {
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
					} = this.props, h = Object(re.g)(d);
					if (!i) {
						if (t) return b.a.createElement(ge.f, null);
						const s = this.renderPageError();
						return s || (e ? e.type === _.m ? b.a.createElement(B.a, {
							contentGateType: Ge.a.PostBlockedForLegalReason
						}) : b.a.createElement(ge.d, null) : b.a.createElement(ge.f, null))
					} {
						const e = this.renderPageError();
						if (e) return e
					}
					const g = this.isCommentPermalink(),
						x = i.belongsTo.type === K.a.PROFILE,
						f = Object(Be.a)(i) && (!x || u),
						v = !r;
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
						shouldFitPageToContent: v,
						isCollectionLayout: f
					}, p && p.isQuarantined && b.a.createElement(Ie.a, {
						subredditName: p.name
					}), b.a.createElement(Se.a, null), b.a.createElement("div", {
						className: Object(y.a)(Xe.a.PageContentWrapper, {
							[Xe.a.LargePageContent]: f,
							[Xe.a.ChatPage]: this.props.isChatPostExperiment
						}),
						key: "PostContentWrapper"
					}, f && b.a.createElement(F.a, {
						isOverlay: a,
						isNightmodeOn: o,
						postId: c
					}), b.a.createElement(Ze, {
						condition: f,
						wrap: e => b.a.createElement("div", {
							ref: this.updateCollPostWrapperRef,
							className: Xe.a.CollectionBodyWrapper
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
						className: Xe.a.TopTippers,
						contentId: c,
						creatorId: i.authorId,
						subredditId: p.id
					}), p && b.a.createElement(Ee.a, {
						className: Xe.a.TopTippersBenefits,
						contentId: c,
						creatorId: i.authorId,
						subredditId: p.id
					}), b.a.createElement(A.a, {
						listingName: m || "",
						isOverlay: a,
						placement: _.c.ABOVE_THE_FOLD,
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
						origin: f,
						post: O,
						postId: E,
						replyComment: _,
						sendEvent: j,
						sort: k,
						subredditAboutInfo: P,
						subredditOrProfile: S
					} = this.props;
					if (!O) return null;
					const N = this.isCommentPermalink(),
						M = [],
						L = O.isLocked && !s,
						R = !(N || O.isArchived || P && P.userIsBanned);
					if (L) M.push(b.a.createElement(Pe.a, {
						key: "commentThreadBanner",
						subredditOrProfile: S
					}));
					else if (O.isArchived) M.push(b.a.createElement(ke.a, {
						key: "commentThreadBanner"
					}));
					else if (R && !d && !h)
						if (l) {
							const e = Object(I.a)(C.c.replyToPost, E);
							M.push(b.a.createElement(ue.a, {
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
									} = t, r = Ye(t, ["validate"]);
									return n ? T.tb(E, o, e, r, s) : T.lb(E, o, e, r, s)
								},
								submitButtonText: Object(v.c)("comment")
							}))
						} else M.push(b.a.createElement(he.a, {
							key: "loggedOutCommentForm",
							language: p,
							location: u,
							openLoginModal: g,
							openRegisterModal: x,
							origin: f
						}));
					if (r && M.push(b.a.createElement(we.a, {
							hasModeratorPostPermissions: i,
							key: "contestModeBanner"
						})), !d && !h && M.push(b.a.createElement(ve.a, {
							commentId: n,
							elementRef: this.updateCommentSortRef,
							isOverlay: m,
							key: "commentSort",
							location: u,
							postId: E,
							sort: k,
							suggestedSort: O.suggestedSort
						}), b.a.createElement(Ke.a, {
							commentId: n,
							commentsPageKey: o,
							isOverlay: m,
							key: "commentNavigation",
							postId: E
						})), !t || c || d || h)
						if (!e || c || h)
							if (h) M.push(b.a.createElement(nt, {
								commentSort: k,
								key: "otherDiscussions",
								language: p,
								postId: E,
								isOverlay: m,
								postPermalink: O.permalink
							}));
							else if (d) {
						if (S && S.id) {
							const e = _ ? Object(I.a)(C.c.replyToComment, _.id) : Object(I.a)(C.c.replyToPost, E),
								s = n ? Object(w.a)(E) : o;
							M.push(b.a.createElement(xe.a, {
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
								return l ? b.a.createElement(fe.a, {
									key: "chatCommentsForm",
									language: p,
									postId: E,
									replyComment: _,
									draftKey: e,
									commentsPageKey: s,
									isEditing: !1,
									scrollToBottom: n,
									sendEvent: j
								}) : b.a.createElement(he.a, {
									key: "loggedOutCommentForm",
									className: Xe.a.ChatLoggedOutForm,
									language: p,
									location: u,
									openLoginModal: g,
									openRegisterModal: x,
									origin: f
								})
							}))
						}
					} else M.push(b.a.createElement("div", {
						className: Object(y.a)(Xe.a.CommentsPaneWrapper, {
							[Xe.a.mIsInOverlay]: m
						}),
						key: "commentsPaneWrapper"
					}, b.a.createElement(Oe.a, Qe({}, this.props, {
						isCommentsListTruncated: this.props.isCommentsListTruncated,
						handleViewAllCommentsClick: this.handleViewAllCommentsClick,
						numberOfComments: O.numComments,
						onClick: this.handleContentClick
					}), b.a.createElement(be.a, {
						commentId: n,
						commentsPageKey: o,
						postId: E,
						renderedInOverlay: m
					})))), e && c ? M.push(b.a.createElement(ge.e, {
						key: "commentsErrorState",
						language: p,
						postId: E,
						commentId: n,
						sort: k,
						apiError: e
					})) : !a && t && M.push(b.a.createElement(ge.a, {
						key: "commentsPlaceholder"
					}));
					else M.push(b.a.createElement(ge.e, {
						language: p,
						postId: E,
						commentId: n,
						sort: k,
						apiError: e
					}));
					else this.didRenderLoading = !0, M.push(b.a.createElement(ge.a, {
						key: "commentsPlaceholder"
					}));
					return b.a.createElement(q.a.Provider, {
						value: this.sendEventWithName
					}, M)
				}
			}
			const lt = rt(ct(Object(Le.c)(dt))),
				mt = P.a.wrapped(Ce.a, "DetailsPageSidebar", Xe.a),
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
						navBar: p && b.a.Children.toArray([b.a.createElement(_e.a, {
							disableFullscreen: !0,
							headerText: p.name,
							maxWidth: u,
							prefixedHeaderText: p.displayText,
							subredditOrProfile: p,
							url: p.url
						}), !Object($.e)(p) && b.a.createElement(Me.a, {
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
				return v
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
				f = Object(i.b)(x);

			function v(e) {
				return f(t => {
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
					return Object(o.T)(e, {
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
		"./src/reddit/selectors/experiments/adSidebar.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: n.a
				});
				return !!t && !Object(n.Xb)(t)
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
					experimentName: n.rb
				});
				return Object(n.Xb)(t) ? void 0 : t
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
//# sourceMappingURL=CollectionCommentsPage.1b7aa2b0d159a5f5894a.js.map