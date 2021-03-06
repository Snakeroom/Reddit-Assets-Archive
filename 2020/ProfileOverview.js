// https://www.redditstatic.com/desktop2x/ProfileOverview.ef36d290681197c8989b.js
// Retrieved at 11/12/2020, 12:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileOverview", "Frontpage~ModListing~Multireddit~ProfileComments~ProfilePosts~ProfilePrivate~SearchResults~Subreddit~Topic", "Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit", "ChatPost~ModQueuePages", "ProfilePosts~ProfileSnoobuilder", "RpanListingUnit~reddit-components-MediumPost", "reddit-components-ContentGate"], {
		"./node_modules/lodash/flatMap.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseFlatten.js"),
				o = s("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return n(o(e, t), 1)
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
			e.exports = JSON.parse('{"id":"a04c25fcce11"}')
		},
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return p
			})), s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "d", (function() {
				return h
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/lodash/omit.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
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
			var l = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const m = (e, t, s) => (function() {
				let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return o => {
					const r = h(o.target, o.currentTarget),
						i = x(o.target, o.currentTarget);
					r && s && t && (b(o.target, o.currentTarget, u.anchors) ? s(t(e, r, i)) : s(s => {
						const n = t(e, r, i)(s);
						let o;
						if (n && n.actionInfo) {
							const e = n.actionInfo,
								{
									pageType: t
								} = e;
							o = l(e, ["pageType"])
						}
						return Object.assign(Object.assign({}, n), {
							actionInfo: Object(c.previousPageActionInfo)(s, o)
						})
					})), b(o.target, o.currentTarget, u.anchorsAndButtons) && n(o)
				}
			});

			function p(e) {
				class t extends i.a.Component {
					constructor() {
						super(...arguments), this.cancelClick = !1
					}
					render() {
						const {
							sendEvent: t,
							eventFactory: s,
							clickTrackingId: n
						} = this.props;
						return i.a.createElement(e, d({}, o()(this.props, "sendEvent", "eventFactory", "clickTrackingId"), {
							afterClickTracking: m(n, s, t)
						}))
					}
				}
				return Object(a.c)(t)
			}
			const u = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				b = (e, t, s) => !s.includes(e.tagName) && (e === t || !!e.parentElement && b(e.parentElement, t, s)),
				h = (e, t) => {
					const s = e.dataset.clickId;
					return s || (e === t ? null : !!e.parentElement && h(e.parentElement, t))
				},
				x = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && x(e.parentElement, t))
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			t.a = e => {
				return new Date(1e3 * e).toUTCString().replace("GMT", "UTC")
			}
		},
		"./src/lib/intersectionObserver/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return a
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
			const i = (e, t) => {
					try {
						o.set(e, t), n && n.observe(e)
					} catch (s) {
						0
					}
				},
				a = e => {
					try {
						o.delete(e), n && n.unobserve(e)
					} catch (t) {
						0
					}
				}
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return u
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "f", (function() {
				return h
			})), s.d(t, "i", (function() {
				return x
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "g", (function() {
				return C
			})), s.d(t, "h", (function() {
				return E
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/es6.regexp.match.js");
			var n = s("./node_modules/linkify-it/index.js"),
				o = s.n(n),
				r = s("./node_modules/tlds/index.js"),
				i = s.n(r),
				a = s("./src/lib/linkMatchers/customLinks.ts"),
				c = s("./node_modules/lodash/values.js"),
				d = s.n(c);
			const l = e => d()(a.b).includes(e.substring(1)),
				m = ["//", "ftp:", "http:", "https:", "mailto:"],
				p = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, m),
				u = o()().tlds(i.a).set({
					fuzzyIP: !0
				}),
				b = o()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(a.g.mention.prefix, a.g.mention.config),
				h = p(o()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config),
				x = p(o()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config),
				f = o()().tlds(i.a).set({
					fuzzyIP: !0
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config).add(a.g.mention.prefix, a.g.mention.config),
				g = u.normalize;
			u.normalize = e => {
				g.call(u, e), !e.schema && e.url.startsWith("http:") && (e.url = "https:".concat(e.url.slice(5)))
			};
			const v = (e, t) => {
					return (f.match(e) || []).filter(e => {
						const s = l(e.text);
						return !s || s && t
					})
				},
				O = e => {
					return [...x.match(e) || [], ...b.match(e) || []].map(e => !l(e.text) && e.text.replace(a.a, "")).filter(e => e)
				},
				C = (e, t) => {
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
					i = encodeURIComponent("".concat(t).concat(r));
				return "".concat(n.a.accountManagerOrigin).concat(s || "/login", "?dest=").concat(i)
			}
		},
		"./src/reddit/actions/eventPosts/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "fetchEventPostsPending", (function() {
				return O
			})), s.d(t, "fetchEventPostsSuccess", (function() {
				return C
			})), s.d(t, "fetchEventPostsFailure", (function() {
				return E
			})), s.d(t, "fetchMoreEventPostsSuccess", (function() {
				return y
			})), s.d(t, "eventPostsRequested", (function() {
				return _
			})), s.d(t, "startEventNowSuccess", (function() {
				return w
			})), s.d(t, "startEventNowRequested", (function() {
				return k
			})), s.d(t, "editEventTimeSuccess", (function() {
				return j
			})), s.d(t, "editEventTimeRequested", (function() {
				return P
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/eventPosts/constants.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/graphql/operations/EventPostsBySubredditName.json"),
				d = s("./src/lib/makeGqlRequest/index.ts");
			var l = s("./src/lib/makeApiRequest/index.ts"),
				m = s("./src/lib/omitHeaders/index.ts"),
				p = s("./src/reddit/constants/headers.ts");
			var u = (e, t, s, n, r) => Object(l.a)(Object(m.a)(e, [p.a]), {
				endpoint: "".concat(e.apiUrl, "/api/event_post_time.json"),
				method: o.db.POST,
				data: {
					id: t,
					event_start: s,
					event_end: n,
					event_tz: r
				}
			});
			var b = (e, t) => Object(l.a)(Object(m.a)(e, [p.a]), {
					endpoint: "".concat(e.apiUrl, "/api/start_event_post.json"),
					method: o.db.POST,
					data: {
						id: t
					}
				}),
				h = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts"),
				x = s("./src/reddit/models/Toast/index.ts"),
				f = s("./src/reddit/selectors/eventPosts.ts"),
				g = s("./src/reddit/selectors/posts.ts");
			const v = () => n.fbt._("Something went wrong. Just don't panic.", null, {
					hk: "4onxm1"
				}),
				O = Object(r.a)(i.e),
				C = Object(r.a)(i.c),
				E = Object(r.a)(i.b),
				y = Object(r.a)(i.d),
				_ = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n, r = s();
					const i = Object(f.d)(r, {
							subredditName: e
						}),
						l = Object(f.b)(r, {
							subredditName: e
						}),
						m = Object(f.c)(r, {
							subredditName: e
						}),
						p = Object(f.a)(r, {
							subredditName: e
						}),
						u = l && m;
					if (i) return;
					const b = {
						name: e,
						pageSize: 25,
						nonInclusiveCursor: null
					};
					if (u) b.nonInclusiveCursor = p;
					else if (l && !m) return;
					const g = Object(f.e)(r, {
						subredditName: e
					});
					t(O({
						key: g
					}));
					const _ = await ((e, t) => Object(d.a)(e, Object.assign(Object.assign({}, c), {
						variables: t
					})))(o(), b);
					if (_.ok) {
						const {
							subredditInfoByName: e
						} = _.body.data, {
							eventPosts: n
						} = e, o = Object(h.a)(n);
						let i = [],
							a = {};
						const c = n.pageInfo || {
							hasNextPage: !1,
							endCursor: null,
							hasPreviousPage: !1,
							startCursor: null
						};
						o.length > 0 && (i = o.map(e => e.id), a = o.reduce((e, t) => (e[t.id] = t, e), {})), r = s(), t((u ? y : C)({
							key: g,
							postIds: i,
							meta: r.meta,
							posts: a,
							pageInfo: c
						}))
					} else t(E({
						error: _.error,
						key: g
					})), t(Object(a.e)({
						kind: x.b.Error,
						text: v()
					}))
				}, w = Object(r.a)(i.f), k = e => async (t, s, o) => {
					let {
						apiContext: r
					} = o;
					if ((await b(r(), e)).ok) {
						const o = () => n.fbt._("Following event has started successfully: {title}", [n.fbt._param("title", c)], {
							hk: "e9iz9"
						});
						t(w({
							postId: e
						}));
						const r = s(),
							i = Object(g.O)(r, {
								postId: e
							}),
							c = i && i.title || "";
						t(Object(a.e)({
							kind: x.b.SuccessMod,
							text: o()
						}))
					} else t(Object(a.e)({
						kind: x.b.Error,
						text: v()
					}))
				}, j = Object(r.a)(i.a), P = (e, t) => async (s, r, i) => {
					let {
						apiContext: c
					} = i;
					const d = await u(c(), e, t.startDate, t.endDate, t.timezoneName);
					if (d.ok) {
						const t = d.body,
							i = 14400,
							c = Math.round(t.event_start / o.Fb);
						let l = t.event_end;
						const m = {
							eventStart: c,
							eventEnd: l = l && Math.round(l / o.Fb) || c + i,
							eventIsLive: t.event_is_live
						};
						s(j({
							postId: e,
							eventInfo: m
						}));
						const p = r(),
							u = Object(g.O)(p, {
								postId: e
							}),
							b = u && u.title || "",
							h = () => n.fbt._("Following event time is updated successfully: {title}", [n.fbt._param("title", b)], {
								hk: "1m1w1c"
							});
						s(Object(a.e)({
							kind: x.b.SuccessMod,
							text: h()
						}))
					} else s(Object(a.e)({
						kind: x.b.Error,
						text: v()
					}))
				}
		},
		"./src/reddit/actions/postCreation/editing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return N
			})), s.d(t, "a", (function() {
				return T
			})), s.d(t, "c", (function() {
				return M
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts"),
				m = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				p = s("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				u = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const b = e => Object.assign({
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
			var h = (e, t) => Object(c.a)(Object(d.a)(e, [l.a]), {
					endpoint: Object(u.a)(Object(m.a)("".concat(e.apiUrl, "/api/editusertext"))),
					method: a.db.POST,
					data: b(t)
				}).then(p.b),
				x = s("./src/reddit/helpers/overlay/index.ts"),
				f = s("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				g = s("./src/reddit/helpers/trackers/lightbox.ts"),
				v = s("./src/reddit/helpers/trackers/post.ts"),
				O = s("./src/reddit/helpers/trackers/postComposer.ts"),
				C = s("./src/reddit/models/Media/index.ts"),
				E = s("./src/reddit/models/PostCreationForm/index.ts"),
				y = s("./src/reddit/models/Toast/index.ts"),
				_ = s("./src/reddit/selectors/posts.ts"),
				w = s("./src/reddit/actions/postCreation/constants.ts"),
				k = s("./src/reddit/actions/postCreation/general.ts");
			const j = Object(o.a)(w.l),
				P = Object(o.a)(w.m),
				S = Object(o.a)(w.y),
				I = Object(o.a)(w.E),
				N = Object(o.a)(w.F),
				T = (e, t) => async (s, n, o) => {
					let {
						apiContext: r
					} = o;
					const i = n(),
						a = Object(_.O)(i, {
							postId: e
						});
					t ? (s(Object(x.a)(a.permalink)), Object(g.e)(e, "edit")(i)) : Object(v.b)(e, "edit")(i);
					const {
						media: c
					} = a;
					if (!c) return;
					let d, l = E.h.RICH_TEXT,
						m = "";
					c.type === C.o.TEXT ? (l = E.h.MARKDOWN, m = c.content) : c.type === C.o.RTJSON && (m = (l = c.rteMode || E.h.RICH_TEXT) === E.h.MARKDOWN ? c.markdownContent : c.richtextContent, d = c.mediaMetadata || void 0), s(I({
						editorMode: l,
						mediaMetadata: d,
						postContent: m,
						postId: e
					}))
				}, M = e => async (t, s, o) => {
					let {
						apiContext: a
					} = o;
					const {
						post: c
					} = e, d = !c.media || "rtjson" !== c.media.type && "text" !== c.media.type ? "" : c.media.rteMode;
					O.u(s(), Object(k.n)(d)), t(S(c.id));
					const l = await h(a(), e),
						m = !1 === l.body.success;
					if (t(j(c.id)), l.ok && !m) {
						t(Object(i.e)({
							kind: y.b.SuccessCommunity,
							text: n.fbt._("Post successfully edited", null, {
								hk: "xej5K"
							})
						})), t(N(c.id));
						const e = Object(f.a)(l.body);
						t(Object(r.J)({
							[c.id]: e
						}))
					} else t(P(l.error))
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
				o = s.n(n);
			const r = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", o.a);
			t.a = r
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
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = s("./src/config.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/reddit/components/CallToActionButton/index.tsx"),
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				d = s.n(c);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: o
				} = e, {
					source: c,
					callToAction: l,
					caption: m
				} = t;
				if (!c || !c.url) return null;
				let p = c.displayText;
				return c.displayText.length >= 40 && (p = c.displayText.slice(0, 40 - "...".length) + "..."), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: d.a.leftSideContent
				}, m && !o && r.a.createElement("span", {
					className: d.a.caption,
					title: m
				}, m), r.a.createElement(a.a, {
					href: c.url.replace(n.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: c,
					className: d.a.displayUrl
				}, p)), l && r.a.createElement(i.a, {
					className: d.a.callToAction,
					href: c.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: c
				}, l))
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE",
				Icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				isLeft: "p8bIdnQ5pQUQRETAyCoa5",
				isRight: "_36ucS75syCWwJ_ee7IieXZ",
				active: "NPw0Z_HL-yJPXnZ3mpWEA",
				redditStyle: "OGOshepc50ul-kJHrocIO"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				a = s("./src/reddit/hooks/useButtons2020.ts"),
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
					className: t
				} = e, s = m(e, ["className"]);
				const n = Object(a.a)();
				return o.a.createElement(i.a, l({
					className: Object(r.a)(t, d.a.CallToActionButton, {
						[d.a.mNotCardView]: s.isNotCardView,
						[d.a.is2020]: n
					})
				}, s))
			}
		},
		"./src/reddit/components/ClassicPost/Placeholder.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/PostLeftRail/index.tsx"),
				d = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				p = s("./src/reddit/models/Vote/index.ts"),
				u = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				b = s.n(u),
				h = s("./src/reddit/components/ClassicPost/placeholder.m.less"),
				x = s.n(h);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const g = Object(l.t)(),
				v = Object(i.c)({
					isFakeSubreddit: l.x
				}),
				O = Object(r.b)(v),
				C = e => {
					const t = {
						interactive: !1,
						voteState: p.a.notVoted
					};
					return o.a.createElement("div", {
						className: Object(a.a)(e.className, x.a.emptyVerticalVotes)
					}, o.a.createElement(d.d, f({
						key: "u"
					}, t)), e.children, o.a.createElement(d.c, f({
						key: "d"
					}, t)))
				},
				E = () => o.a.createElement(C, null, o.a.createElement("div", {
					className: x.a.emptyScore,
					key: "s"
				}));
			t.b = g(O(e => o.a.createElement("div", {
				className: Object(a.a)(e.className, b.a.classicPostStyles, b.a.classicAndCompactPlaceholderStyles)
			}, o.a.createElement(c.b, null, o.a.createElement(E, null)), o.a.createElement("div", {
				className: x.a.mainBody
			}, o.a.createElement("div", {
				className: x.a.thumbnailContainer
			}, o.a.createElement("div", {
				className: Object(a.a)(x.a.thumbnail, Object(m.b)(e))
			})), o.a.createElement("div", {
				className: x.a.content
			}, o.a.createElement("div", {
				key: "a"
			}, o.a.createElement("div", {
				key: "aa",
				className: Object(a.a)(x.a.title, Object(m.b)(e))
			}), o.a.createElement("div", {
				key: "ab",
				className: Object(a.a)(x.a.meta, Object(m.b)(e))
			})), o.a.createElement("div", {
				key: "f",
				className: x.a.flatlist
			}, o.a.createElement("div", {
				key: "fa",
				className: Object(a.a)(x.a.flatlistExpando, Object(m.b)(e))
			}), o.a.createElement("div", {
				key: "fb",
				className: x.a.flatlistSeparator
			}), o.a.createElement("div", {
				key: "fc",
				className: Object(a.a)(x.a.flatListItemOne, Object(m.b)(e))
			}), o.a.createElement("div", {
				key: "fd",
				className: Object(a.a)(x.a.flatListItemTwo, Object(m.b)(e))
			})))))))
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "renderMedia", (function() {
				return V
			})), s.d(t, "SearchResultsClassicPost", (function() {
				return K
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/ads/index.ts"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/getShortenedLink.ts"),
				d = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				l = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				m = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				p = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				u = s("./src/reddit/components/ExpandoButton/index.tsx"),
				b = s("./src/reddit/components/Flatlist/index.tsx"),
				h = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				x = s("./src/reddit/components/ModModeReports/index.tsx"),
				f = s("./src/reddit/components/ModModeReports/helpers.ts"),
				g = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				v = s("./src/reddit/components/PostContainer/index.tsx"),
				O = s("./src/reddit/components/PostMedia/index.tsx"),
				C = s("./src/reddit/components/PostMeta/index.tsx"),
				E = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				y = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				_ = s("./src/reddit/components/PostTitle/index.tsx"),
				w = s("./src/reddit/components/PostTopMeta/index.tsx"),
				k = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				j = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				P = s("./src/reddit/models/Media/index.ts"),
				S = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				I = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				N = s("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
				T = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				M = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				L = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				R = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				F = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				A = s.n(F),
				B = s("./src/reddit/components/ClassicPost/index.m.less"),
				D = s.n(B);

			function W() {
				return (W = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const H = 16;
			class U extends o.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						className: e,
						currentUser: t,
						handleVote: s,
						isExpanded: n,
						isMeta: a,
						inSubredditOrProfile: O,
						eventFactory: I,
						first: N,
						flairStyleTemplate: F,
						formatTitle: B,
						hostPostId: U,
						isActionBarAnimationEnabled: G,
						isCheckboxSelected: z,
						isCurrentUserProfilePost: K,
						isFrontpage: q,
						isGalleryTileLayoutDefault: J,
						isLoggedIn: X,
						isOverlay: Z,
						imageGalleryCurrentItem: Q,
						moderatorPermissions: Y,
						modModeEnabled: $,
						onClickPost: ee,
						onIgnoreReports: te,
						onOpenReportsDropdown: se,
						poll: ne,
						post: oe,
						postId: re,
						redditStyle: ie,
						scrollerItemRef: ae,
						showBulkActionCheckbox: ce,
						showEditFlair: de,
						showMedia: le,
						subredditOrProfile: me,
						toggleCheckbox: pe,
						userIsOp: ue,
						shouldShowGalleryTileOption: be
					} = this.props, he = ie ? void 0 : F, xe = this.props.crosspost || void 0, fe = Object(L.a)(Y), ge = Object(T.a)(Y), ve = Object(M.a)(Y), Oe = $ && L.a, Ce = !!oe.media && oe.media.type === P.o.RTJSON, Ee = ue && Ce, ye = O && !le, _e = !!oe.media && Object(P.H)(oe.media), we = {
						flairStyleTemplate: he,
						post: oe,
						inSubredditOrProfile: O,
						isCurrentUserProfilePost: K,
						isOverlay: Z,
						shouldShowSubscribeButton: !(q && X),
						subredditOrProfile: me
					}, ke = Object(r.s)(oe, Q), {
						source: je
					} = ke, Pe = o.a.createElement(v.a, {
						className: Object(i.a)(A.a.classicPostStyles, D.a.postContainer, Object(R.a)(this.props), N ? D.a.mFirst : void 0, e),
						isOverlay: Z,
						style: Object.assign(Object.assign({}, Object(R.d)(this.props)), Object(R.b)(this.props.flairStyleTemplate)),
						post: oe,
						onClick: ee,
						eventFactory: I
					}, o.a.createElement(y.a, {
						model: oe,
						handleVote: s,
						showBulkActionCheckbox: ce,
						isCheckboxSelected: z,
						toggleCheckbox: pe,
						flairStyleTemplate: he,
						redditStyle: ie,
						subreddit: me,
						isActionBarAnimationEnabled: G,
						postId: re
					}), o.a.createElement(g.a, {
						"data-click-id": "background",
						flairStyleTemplate: he
					}, o.a.createElement(p.a, {
						className: D.a.eventMeta,
						post: oe
					}), o.a.createElement("div", {
						className: D.a.mainBody
					}, o.a.createElement("div", {
						className: ye ? D.a.expandoContainer : D.a.thumbnailContainer
					}, !ye && o.a.createElement(S.a, {
						className: D.a.classicThumbnail,
						crosspost: xe && oe,
						isMeta: a,
						post: xe || oe,
						redditStyle: ie,
						templatePlaceholderImage: he && he.postPlaceholderImage,
						removeLink: _e
					}), o.a.createElement(u.a, {
						crosspost: xe,
						className: D.a.rightExpando,
						isExpanded: !!n,
						post: oe,
						useMediaIcons: !1
					})), o.a.createElement("div", {
						className: D.a.content,
						"data-click-id": "body",
						style: {
							paddingBottom: "".concat(H, "px")
						}
					}, o.a.createElement(_.c, {
						className: ne ? D.a.titleWithPoll : void 0,
						format: B,
						poll: ne,
						post: oe,
						redditStyle: ie,
						size: _.b.Medium,
						titleColor: he && he.postTitleColor,
						isOverlay: Z
					}, oe.source && !xe && o.a.createElement(j.a, {
						href: oe.source.url,
						isSponsored: oe.isSponsored,
						postId: oe.id,
						source: oe.source
					}, Object(c.a)(oe))), o.a.createElement(C.a, W({
						key: "PostMeta"
					}, we)), $ && fe && Object(f.c)(oe) && o.a.createElement(x.a, {
						onIgnoreReports: te,
						reportable: oe
					}), o.a.createElement("div", {
						className: D.a.spacer
					}), oe.isSponsored && je && je.url && o.a.createElement(d.a, {
						className: D.a.adLinkWrapper
					}, o.a.createElement(l.a, {
						post: oe,
						adLinkContent: ke
					})), o.a.createElement("div", {
						className: D.a.flatlistContainer
					}, o.a.createElement(u.a, {
						className: D.a.leftExpando,
						crosspost: xe,
						isExpanded: !!n,
						post: oe,
						useMediaIcons: !1
					}), o.a.createElement(m.a, {
						className: D.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: he,
						model: oe,
						onVoteClick: s
					}), o.a.createElement(b.a, {
						className: D.a.flatlistSeparator
					}), o.a.createElement(b.c, {
						className: D.a.flatlist,
						currentUser: t,
						hasModFlairPerms: ge,
						hasModPostPerms: fe,
						hasModFullPerms: ve,
						hostPostId: U,
						isActionBarAnimationEnabled: G,
						isOverlay: !!Z,
						modModeEnabled: $,
						onIgnoreReports: te,
						onOpenReportsDropdown: se,
						post: oe,
						showEditPost: Ee,
						showEditFlair: de,
						tooltipType: Z ? w.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(E.h)({
							editPost: !Oe,
							save: !Oe,
							hide: !Oe,
							report: !Oe
						})
					})), o.a.createElement(h.d, {
						postId: oe.id
					}))), V(oe, ae, n, be, J)));
					return o.a.createElement(k.b, null, Pe)
				}
			}
			const V = (e, t, s, n, r) => s ? e.crosspostRootId ? o.a.createElement("div", {
					className: D.a.crosspostMediaWrapper
				}, G(e, t, n, r)) : G(e, t, n, r) : null,
				G = (e, t, s, n) => o.a.createElement(O.a, {
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
				z = Object(a.a)(U),
				K = Object(N.a)(z);
			t.default = Object(I.a)(z)
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
		"./src/reddit/components/CommentBodyExpander/index.m.less": function(e, t, s) {
			e.exports = {
				collapsedCommentWrapper: "_3eqiPvSIRa-NZBdZNmskLn",
				collapsedCommentLine: "_3w5mzp5LqE702onvC_Wok3",
				rtjCollapsed: "_1J7xT7G-fgDlzIqRgaBrrB",
				seeMore: "_3NPaMDmW2g_XhEdxfn6inI"
			}
		},
		"./src/reddit/components/CommentContainer/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/higherOrderComponents/withClickTracking/index.tsx");
			const d = Object(i.c)({
					clickTrackingId: (e, t) => {
						let {
							comment: s
						} = t;
						return s.id
					}
				}),
				l = Object(r.b)(d);
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						children: t,
						className: s,
						comment: n,
						onClick: r,
						style: i
					} = this.props;
					return o.a.createElement("div", {
						className: Object(a.a)(s, "Comment ".concat(n.id)),
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: t => {
							!this.cancelClick && t.button < 2 && e(() => r && r(t, n))(t)
						},
						style: i
					}, t)
				}
			}
			t.a = l(Object(c.c)(m))
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
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/comment/index.ts"),
				c = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Dropdown/index.tsx"),
				m = s("./src/reddit/helpers/trackers/modTools.ts"),
				p = s("./src/reddit/selectors/tooltip.ts"),
				u = s("./node_modules/fbt/lib/FbtPublic.js"),
				b = s("./src/lib/lessComponent.tsx"),
				h = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				x = s("./src/reddit/icons/svgs/Show/index.tsx"),
				f = s("./src/reddit/components/CommentModModeDropdown/index.m.less"),
				g = s.n(f);
			const v = b.a.wrapped(x.a, "Show", g.a);
			var O = e => o.a.createElement(h.e, null, !e.comment.isApproved && o.a.createElement(h.c, {
				displayText: e.comment.approvedBy ? u.fbt._("Approved", null, {
					hk: "3BGaEK"
				}) : u.fbt._("Approve", null, {
					hk: "7CwFx"
				}),
				onClick: e.onApproveComment
			}, o.a.createElement(h.a, null)), !e.comment.bannedBy && o.a.createElement(o.a.Fragment, null, o.a.createElement(h.c, {
				displayText: e.comment.isRemoved ? u.fbt._("Removed", null, {
					hk: "17pv2n"
				}) : u.fbt._("Remove", null, {
					hk: "VP5J0"
				}),
				onClick: e.onRemoveComment
			}, o.a.createElement(h.g, null)), o.a.createElement(h.c, {
				displayText: e.comment.isSpam ? u.fbt._("Removed as spam", null, {
					hk: "2Kv9DF"
				}) : u.fbt._("Remove as spam", null, {
					hk: "OOps6"
				}),
				onClick: e.onSpamComment
			}, o.a.createElement(h.h, null)), o.a.createElement(h.c, {
				displayText: e.comment.isLocked ? u.fbt._("Unlock comment", null, {
					hk: "1canPl"
				}) : u.fbt._("Lock comment", null, {
					hk: "Qp5a0"
				}),
				onClick: e.onLockComment
			}, o.a.createElement(h.f, null))), e.comment.collapsedBecauseCrowdControl && o.a.createElement(h.c, {
				displayText: u.fbt._("Show comment", null, {
					hk: "9SB86"
				}),
				onClick: e.onShowComment
			}, o.a.createElement(v, null)));
			const C = b.a.wrapped(l.a, "StyledDropdown", g.a),
				E = Object(i.c)({
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
						onApproveComment: () => e(Object(a.H)(s.id)),
						onLockComment: () => e(Object(a.X)(s.id)),
						onRemoveComment: () => e(Object(a.cb)(s.id, !1)),
						onSpamComment: () => e(Object(a.cb)(s.id, !0)),
						onShowComment: () => e(Object(a.Y)(s.id))
					}
				}),
				_ = Object(c.a)(C),
				w = y(Object(d.c)(e => {
					const {
						comment: t,
						isDropdownOpen: s,
						onApproveComment: n,
						onLockComment: r,
						onRemoveComment: i,
						onSpamComment: a,
						onShowComment: c,
						sendEvent: d,
						tooltipId: l
					} = e;
					return o.a.createElement(_, {
						isOpen: s,
						tooltipId: l
					}, o.a.createElement(O, {
						onApproveComment: () => {
							n(), d(Object(m.c)("approve", t.id))
						},
						onRemoveComment: () => {
							i(), d(Object(m.c)("remove", t.id))
						},
						onSpamComment: () => {
							a(), d(Object(m.c)("spam", t.id))
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
			t.a = w
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
			s.d(t, "b", (function() {
				return M
			})), s.d(t, "a", (function() {
				return D
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/comment/index.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				b = s("./src/reddit/components/ModModeReports/helpers.ts"),
				h = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				x = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				v = s("./src/reddit/helpers/trackers/modTools.ts"),
				O = s("./src/reddit/selectors/moderatingComments.ts"),
				C = s("./src/reddit/selectors/moderatorPermissions.ts"),
				E = s("./src/reddit/selectors/tooltip.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				w = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				k = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				j = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				P = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				S = s("./src/reddit/icons/svgs/Show/index.tsx"),
				I = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				N = s.n(I),
				T = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const M = l.a.wrapped(h.c, "RestrictedButton", N.a),
				L = l.a.wrapped(_.a, "Approve", N.a),
				R = l.a.wrapped(k.a, "Lock", N.a),
				F = l.a.wrapped(j.a, "Remove", N.a),
				A = l.a.wrapped(P.a, "Spam", N.a),
				B = l.a.wrapped(S.a, "Show", N.a),
				D = l.a.wrapped(w.a, "DistinguishShield", N.a),
				W = Object(f.t)(),
				H = e => "Distinguish--Dropdown--".concat(e),
				U = Object(a.c)({
					currentUser: y.i,
					collapsedBecauseCrowdControl: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(O.a)(e, {
							commentId: s.id
						})
					},
					isDistinguishDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(E.b)(H(s.id))(e)
					},
					moderatorPermissions: (e, t) => {
						const {
							comment: s
						} = t;
						return Object(f.g)(e, t) || Object(C.j)(e, {
							subredditId: s.subredditId
						})
					},
					modModeEnabled: f.P
				}),
				V = Object(i.b)(U, (e, t) => {
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
							tooltipId: H(s.id)
						}))
					}
				});
			t.c = W(V(l.a.wrapped(Object(x.c)(e => {
				var {
					className: t,
					comment: s,
					currentUser: o,
					isCommentAuthor: i,
					collapsedBecauseCrowdControl: a,
					moderatorPermissions: l,
					modModeEnabled: m,
					onApproveComment: p,
					onDistinguishComment: h,
					onLockComment: x,
					onRemoveComment: f,
					onShowComment: O,
					onSpamComment: C,
					onToggleDistinguishDropdown: E,
					sendEvent: y
				} = e, _ = T(e, ["className", "comment", "currentUser", "isCommentAuthor", "collapsedBecauseCrowdControl", "moderatorPermissions", "modModeEnabled", "onApproveComment", "onDistinguishComment", "onLockComment", "onRemoveComment", "onShowComment", "onSpamComment", "onToggleDistinguishDropdown", "sendEvent"]);
				const w = Object(g.a)(l),
					k = Object(b.b)(s),
					j = s.isApproved && k,
					P = !!o && o.isEmployee,
					S = !s.isRemoved,
					I = a,
					W = e => y(Object(v.a)(e, s.id));
				return r.a.createElement("div", {
					className: t
				}, (s.bannedBy || k) && r.a.createElement(M, {
					text: j ? n.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : n.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						p(), W("approve")
					}
				}, r.a.createElement(L, null)), S && r.a.createElement(r.a.Fragment, null, r.a.createElement(M, {
					text: s.bannedBy === d.k ? n.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : n.fbt._("Remove", null, {
						hk: "VP5J0"
					}),
					onClick: () => {
						f(), s.bannedBy === d.k ? W("confirm_remove") : W("remove")
					}
				}, r.a.createElement(F, null)), r.a.createElement(M, {
					text: n.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						C(), W("spam")
					}
				}, r.a.createElement(A, null))), r.a.createElement(M, {
					text: s.isLocked ? n.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : n.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						x(), W(s.isLocked ? "unlock" : "lock")
					}
				}, r.a.createElement(R, null)), i && !P && !s.bannedBy && r.a.createElement(M, {
					className: Object(c.a)({
						[N.a.selected]: _.isDistinguishDropdownOpen
					}),
					onClick: () => {
						W("mod_distinguish_menu"), E()
					}
				}, r.a.createElement(D, null), r.a.createElement(u.a, {
					isAdminDistinguished: s.isAdmin,
					isDropdownOpen: _.isDistinguishDropdownOpen,
					isModDistinguished: s.isMod,
					isStickied: s.isStickied,
					isTopLevelComment: !s.parentId,
					isUserEmployee: P,
					isUserMod: w,
					onDistinguishComment: h,
					sendEventWithName: W,
					tooltipId: H(s.id)
				})), I && r.a.createElement(M, {
					text: n.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						O()
					}
				}, r.a.createElement(B, null)))
			}), "CommentModToolsFlatlist", N.a)))
		},
		"./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				DropdownRow: "_2LNy1r5iuFMrf0PLh4UdV-",
				dropdownRow: "_2LNy1r5iuFMrf0PLh4UdV-",
				DeleteIcon: "_1iKLz-XMCxtewhk3nusoiP",
				deleteIcon: "_1iKLz-XMCxtewhk3nusoiP",
				PencilIcon: "_1bLoeor2W-QStNmx_KRhZL",
				pencilIcon: "_1bLoeor2W-QStNmx_KRhZL",
				ReportIcon: "_2cI15gf51WKaEHlpw-HjhG",
				reportIcon: "_2cI15gf51WKaEHlpw-HjhG",
				SavedIcon: "_4rjQO_f0JDhjAgz1a8hLR",
				savedIcon: "_4rjQO_f0JDhjAgz1a8hLR",
				SaveIcon: "XOeF-g_i5E2Oaxwt9wDdS",
				saveIcon: "XOeF-g_i5E2Oaxwt9wDdS",
				OverflowMenu: "_11rZyhzMB3OOh_i10q1kGT",
				overflowMenu: "_11rZyhzMB3OOh_i10q1kGT",
				ModToolsFlatlist: "_3y5_xjgWBNlHiMIlznzmOH",
				modToolsFlatlist: "_3y5_xjgWBNlHiMIlznzmOH",
				ModActionsMenu: "_2Ff8ezLTpKg92h7e8lIWkW",
				modActionsMenu: "_2Ff8ezLTpKg92h7e8lIWkW",
				Flatlist: "_1PB2jayxHhG493U6RP5qLr",
				flatlist: "_1PB2jayxHhG493U6RP5qLr",
				Button: "VFryWeVNuBPgqyjc5h68S",
				button: "VFryWeVNuBPgqyjc5h68S"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.m.less": function(e, t, s) {
			e.exports = {
				CommentAuthorLink: "f3THgbzMYccGW8vbqZBUH",
				commentAuthorLink: "f3THgbzMYccGW8vbqZBUH",
				badgeIconStyle: "_2MlVoXUc3Eo3KGWDukM9xn",
				modBadgeIconStyle: "_1kqPGnOAdnd9gPUXDU2_AS",
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
				ApproveIcon: "_1Eh0n96uBEmPUSfcMxUGhG",
				approveIcon: "_1Eh0n96uBEmPUSfcMxUGhG",
				LockIcon: "_1jeG-DROQh1SLQ5G8u6Nk_",
				lockIcon: "_1jeG-DROQh1SLQ5G8u6Nk_",
				AdminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				adminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				AutomoderatorIcon: "_2PtIIiQkETUOP8Lk3Di9nj",
				automoderatorIcon: "_2PtIIiQkETUOP8Lk3Di9nj",
				removed: "_2jIbl66ymb_twdJlZslQ-e",
				CakeIcon: "_1HLCDx7CkNvQgmNroGXenu",
				cakeIcon: "_1HLCDx7CkNvQgmNroGXenu",
				ModeratorIcon: "rZkjnStRKzlmtr__ixhKy",
				moderatorIcon: "rZkjnStRKzlmtr__ixhKy",
				RemoveIcon: "_1OSCZHrfg3APy19ezg_Z7V",
				removeIcon: "_1OSCZHrfg3APy19ezg_Z7V",
				ReportIcon: "_3EVxdJ5MkUz5ddcInDzq5K",
				reportIcon: "_3EVxdJ5MkUz5ddcInDzq5K",
				SpamIcon: "_29rfUWOxsqpcNo-WwSh_XJ",
				spamIcon: "_29rfUWOxsqpcNo-WwSh_XJ",
				OpIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				opIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				ContractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				contractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				TopSupporterIcon: "_2Cj3vP3_ckCL5Fy6ZU7YGR",
				topSupporterIcon: "_2Cj3vP3_ckCL5Fy6ZU7YGR",
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
				CrowdControlText: "Eoj3NCGwtl7hQcr7Rnc0N",
				crowdControlText: "Eoj3NCGwtl7hQcr7Rnc0N",
				metaText: "_3_GZIIN1xcMEC5AVuv4kfa"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/hooks/useTracking.ts"),
				d = s("./src/reddit/actions/gold/powerups.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				b = s("./src/lib/humanizeDateTime/index.ts"),
				h = s("./src/lib/lessComponent.tsx"),
				x = s("./src/lib/timeAgo/index.ts"),
				f = s("./src/reddit/helpers/trackers/powerups.ts"),
				g = s("./src/reddit/components/AuthorLink/index.tsx"),
				v = s("./src/reddit/components/AwardBadges/index.tsx"),
				O = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				C = s("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				E = s("./src/reddit/components/Flair/index.tsx"),
				y = s("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				_ = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				w = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				k = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				j = s("./src/reddit/components/PostTopMeta/index.tsx"),
				P = s("./src/reddit/selectors/economics.ts"),
				S = s("./src/reddit/helpers/isRemoved.ts"),
				I = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				N = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				T = s("./src/reddit/actions/comment/index.ts"),
				M = s("./src/reddit/models/Comment/index.ts"),
				L = s("./src/reddit/models/Flair/index.ts"),
				R = s("./src/reddit/icons/fonts/Admin/index.tsx"),
				F = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				A = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				B = s("./src/reddit/icons/fonts/Op/index.tsx"),
				D = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				W = s("./src/reddit/icons/fonts/Report/index.tsx"),
				H = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				U = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				V = s("./src/reddit/icons/svgs/Cake/index.tsx"),
				G = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				z = s("./src/reddit/icons/svgs/Powerup/index.tsx"),
				K = s("./src/reddit/controls/MetaData/index.tsx"),
				q = s("./src/reddit/selectors/subreddit.ts"),
				J = s("./src/reddit/selectors/userFlair.ts"),
				X = s("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Z = s.n(X);

			function Q() {
				return (Q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var Y = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const $ = h.a.wrapped(E.b, "RightPositionedAuthorFlair", Z.a),
				ee = h.a.wrapped(R.a, "AdminIcon", Z.a),
				te = h.a.wrapped(F.a, "ApproveIcon", Z.a),
				se = h.a.wrapped(A.a, "LockIcon", Z.a),
				ne = h.a.div("AdminEmeritus", Z.a),
				oe = h.a.wrapped(U.a, "AutomoderatorIcon", Z.a),
				re = h.a.wrapped(z.a, "TopSupporterIcon", Z.a),
				ie = h.a.wrapped(V.a, "CakeIcon", Z.a),
				ae = h.a.wrapped(G.a, "ModeratorIcon", Z.a),
				ce = h.a.wrapped(D.a, "RemoveIcon", Z.a),
				de = h.a.wrapped(W.a, "ReportIcon", Z.a),
				le = h.a.wrapped(H.a, "SpamIcon", Z.a),
				me = h.a.wrapped(B.a, "OpIcon", Z.a),
				pe = h.a.wrapped(R.a, "ContractorIcon", Z.a),
				ue = h.a.a("MetaLink", Z.a),
				be = h.a.wrapped(K.a, "EditedText", Z.a),
				he = h.a.wrapped(K.a, "StickiedText", Z.a),
				xe = h.a.span("DeletedText", Z.a),
				fe = h.a.wrapped(K.a, "MetaSeparator", Z.a),
				ge = h.a.wrapped(K.a, "CrowdControlText", Z.a),
				ve = h.a.wrapped(_.b, "AuthorHoverCard", Z.a),
				Oe = h.a.a("RemovalReason", Z.a),
				Ce = h.a.wrapped(O.b, "Component", Z.a),
				Ee = e => (t, s) => {
					let {
						comment: n,
						renderedInOverlay: o
					} = s;
					return "".concat(e).concat(n.id).concat(o ? "inOverlay" : "")
				},
				ye = () => n.fbt._("Reddit admin, speaking officially", null, {
					hk: "3vg8wE"
				}),
				_e = () => n.fbt._("Cake day", null, {
					hk: "1xptSi"
				}),
				we = () => n.fbt._("Reddit admin emeritus", null, {
					hk: "1Md5AV"
				}),
				ke = e => n.fbt._("Moderator of {subredditDisplayText}, speaking officially", [n.fbt._param("subredditDisplayText", e)], {
					hk: "3pHm3n"
				}),
				je = () => n.fbt._("Original Poster", null, {
					hk: "3DqK8z"
				}),
				Pe = () => n.fbt._("Reddit contractor", null, {
					hk: "3APwEh"
				}),
				Se = () => n.fbt._("Powerups Top Supporter", null, {
					hk: "1GLWsz"
				}),
				Ie = Object(i.b)(() => Object(a.c)({
					adminTooltipId: Ee("CommentTopMeta--Admin--"),
					cakedayTooltipId: Ee("CommentTopMeta--cakeday--"),
					adminEmeritusTooltipId: Ee("CommentTopMeta--AdEm--"),
					automodTooltipId: Ee("CommentTopMeta--Automod--"),
					approveTooltipId: Ee("CommentTopMeta--Approve--"),
					createdTooltipId: Ee("CommentTopMeta--Created--"),
					contractorTooltipId: Ee("CommentTopMeta--Contractor--"),
					gildedTooltipId: Ee("CommentTopMeta--Gold--"),
					lockedTooltipId: Ee("CommentTopMeta--Locked--"),
					modTooltipId: Ee("CommentTopMeta--Mod--"),
					opTooltipId: Ee("CommentTopMeta--OP--"),
					removeTooltipId: Ee("CommentTopMeta--Remove--"),
					reportTooltipId: Ee("CommentTopMeta--Report--"),
					spamTooltipId: Ee("CommentTopMeta--Spam--"),
					topSupporterTooltipId: Ee("CommentTopMeta--TopSupporter--"),
					hasBadges: (e, t) => {
						let {
							comment: s
						} = t;
						return !!Object(P.r)(e, s.subredditId, s.authorId).length
					},
					subredditDisplayText: (e, t) => {
						const s = Object(q.J)(e, {
							commentId: t.comment.id
						});
						return s ? s.displayText : ""
					},
					flairPosition: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(J.d)(e, {
							subredditId: s.subredditId
						})
					}
				}), (e, t) => ({
					onCreatedClick: () => {
						window.addEventListener("focus", (function s() {
							((e, t, s) => {
								window.removeEventListener("focus", s), e(Object(T.N)({
									commentListNodeId: t
								})), window.setTimeout(() => e(Object(T.N)({
									commentListNodeId: t
								})), 5e3)
							})(e, t.comment.id, s)
						}))
					},
					onHideTooltip: () => e(Object(l.i)()),
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					openPowerupsModal: () => e(Object(d.b)()),
					openRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.comment.subredditId, [t.comment.id])))
					}
				}));
			t.a = Ie(e => {
				const {
					adminEmeritusTooltipId: t,
					adminTooltipId: s,
					approveTooltipId: n,
					automodTooltipId: o,
					cakedayTooltipId: i,
					children: a,
					className: d,
					collapsed: l,
					collapsedBecauseCrowdControl: m,
					comment: b,
					commentsPageKey: h,
					contractorTooltipId: x,
					compact: g,
					flair: O,
					flairPosition: _,
					hasBadges: w,
					isAvatarsInCommentsEnabled: P,
					isLivestreaming: S,
					ignoreFlairPosition: I,
					ignoreLock: N,
					lockedTooltipId: T,
					modTooltipId: R,
					onHideTooltip: F,
					onShowTooltip: A,
					opTooltipId: B,
					openPowerupsModal: D,
					openRemovalReasonModal: W,
					removeTooltipId: H,
					renderContractorBadge: U,
					renderTopSupporterBadge: V,
					renderedInOverlay: G,
					reportTooltipId: z,
					spamTooltipId: q,
					subredditDisplayText: J,
					topSupporterTooltipId: X
				} = e, Y = Object(c.a)();
				if (b.isDeleted) return r.a.createElement(Ne, Q({}, e, {
					className: Object(p.a)(d, Z.a.container, {
						[Z.a.collapsed]: l
					})
				}));
				if (l) return r.a.createElement(Te, Q({}, e, {
					className: Object(p.a)(d, Z.a.container, {
						[Z.a.collapsed]: l
					})
				}));
				const ee = !I && _ === L.b.Left;
				return r.a.createElement("div", {
					className: Object(p.a)(d, Z.a.container, {
						[Z.a.collapsed]: l,
						[Z.a.hasBadges]: w,
						[Z.a.liveStreaming]: S
					})
				}, O && ee && r.a.createElement(E.b, {
					flair: O,
					forceSmallEmojis: g
				}), !Object(M.e)(b) && r.a.createElement(Ce, {
					showAddCustom: !0,
					subredditId: b.subredditId,
					userId: b.authorId,
					uniqueIdentifier: b.id
				}), r.a.createElement(ve, {
					postOrComment: b,
					tooltipType: G ? j.c.Lightbox : void 0
				}, r.a.createElement(C.b, {
					ignore: Object(M.e)(b) || !!b.distinguishType && b.distinguishType !== u.C.NONE,
					subredditId: b.subredditId,
					userId: b.authorId
				}, r.a.createElement(Le, {
					comment: b,
					isLivestreaming: S,
					isStrong: !!g,
					isAuthorDeleted: Object(M.e)(b)
				}, a && a))), m && r.a.createElement(ge, null, "Crowd Control"), m && r.a.createElement(K.c, {
					className: Z.a.metaText,
					key: "crowdControlSeparator"
				}), O && !ee && r.a.createElement($, {
					flair: O,
					forceSmallEmojis: g
				}), !g && r.a.createElement(y.a, {
					className: Z.a.publicPoints,
					contentId: b.id,
					metaSeparator: r.a.createElement(K.c, {
						className: Z.a.metaText
					}),
					subredditId: b.subredditId,
					userId: b.authorId,
					username: b.author
				}), r.a.createElement(r.a.Fragment, null, r.a.createElement(k.b, {
					commentId: b.id
				}), r.a.createElement(k.a, {
					commentId: b.id,
					commentsPageKey: h
				}), r.a.createElement(Ae, {
					comment: b,
					compact: g,
					adminTooltipId: s,
					adminEmeritusTooltipId: t,
					cakedayTooltipId: i,
					contractorTooltipId: x,
					modTooltipId: R,
					onHideTooltip: F,
					onShowTooltip: A,
					openPowerupsModal: () => {
						Y(Object(f.e)("comment")), D()
					},
					opTooltipId: B,
					renderContractorBadge: U,
					renderTopSupporterBadge: V,
					subredditDisplayText: J,
					topSupporterTooltipId: X
				})), !g && r.a.createElement(r.a.Fragment, null, !b.isDeleted && !P && r.a.createElement(K.b, {
					className: Z.a.metaText,
					isScoreHidden: b.isScoreHidden,
					score: b.score
				}), !P && r.a.createElement(K.c, {
					className: Z.a.metaText,
					key: "scoreCreatedSeparator"
				}), r.a.createElement(Re, Q({
					key: "Created"
				}, e)), b.isStickied && De(), b.editedAt && Me(b.editedAt)), r.a.createElement(r.a.Fragment, null, r.a.createElement(Be, {
					comment: b,
					approveTooltipId: n,
					automodTooltipId: o,
					ignoreLock: N,
					lockedTooltipId: T,
					onHideTooltip: F,
					onShowTooltip: A,
					openRemovalReasonModal: W,
					removeTooltipId: H,
					reportTooltipId: z,
					spamTooltipId: q
				})), r.a.createElement(v.a, {
					thing: b,
					tooltipType: G ? j.c.Lightbox : void 0
				}))
			});
			const Ne = e => {
					const {
						childrenInfo: t,
						collapsed: s,
						className: o,
						comment: i
					} = e;
					return r.a.createElement("div", {
						className: o
					}, r.a.createElement(xe, null, i.deletedBy === M.b.User ? n.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : n.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(Re, Q({
						key: "Created"
					}, e)), s && Fe({
						childrenInfo: t
					}))
				},
				Te = e => {
					const {
						comment: t,
						className: s,
						childrenInfo: n
					} = e;
					return r.a.createElement("div", {
						className: s
					}, r.a.createElement("div", null, r.a.createElement(Le, {
						comment: t,
						isAuthorDeleted: Object(M.e)(t)
					})), r.a.createElement(K.b, {
						className: Z.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), r.a.createElement(K.c, {
						className: Z.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(Re, Q({
						key: "Created"
					}, e)), Fe({
						childrenInfo: n
					}))
				},
				Me = e => r.a.createElement(o.Fragment, null, r.a.createElement(K.c, {
					className: Z.a.metaText
				}), r.a.createElement(be, null, n.fbt._("edited {time}", [n.fbt._param("time", Object(x.d)(e))], {
					hk: "1tiB0u"
				}))),
				Le = e => r.a.createElement(g.a, {
					className: Z.a.CommentAuthorLink,
					author: e.comment.author,
					isAdmin: e.comment.isAdmin,
					isAdminEmeritus: e.comment.distinguishType === u.C.ALUMNI_ADMIN,
					isAuthorDeleted: e.isAuthorDeleted,
					isLivestreaming: e.isLivestreaming,
					isMod: e.comment.isMod,
					isOp: e.comment.isOp,
					isStrong: e.isStrong,
					style: e.style
				}, e.children && e.children, e.comment.author);
			class Re extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCreatedTooltip = () => this.props.onShowTooltip(this.props.createdTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t,
							onCreatedClick: s
						} = e,
						n = Y(e, ["comment", "onCreatedClick"]);
					return r.a.createElement(ue, {
						href: Object(m.a)(t.permalink, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: n.createdTooltipId,
						onClick: s,
						onMouseEnter: this.onShowCreatedTooltip,
						onMouseLeave: n.onHideTooltip,
						rel: "nofollow",
						target: "_blank"
					}, Object(x.d)(t.created), We(n.createdTooltipId, Object(b.a)(t.created)))
				}
			}
			const Fe = e => {
				const {
					hasContinueThread: t,
					numChildren: s
				} = e.childrenInfo || {
					hasContinueThread: !1,
					numChildren: 0
				};
				return r.a.createElement(fe, {
					className: Z.a.metaText
				}, t ? n.fbt._({
					"*": "More than {number} children",
					_1: "More than 1 child"
				}, [n.fbt._plural(s, "number")], {
					hk: "13XC7a"
				}) : n.fbt._({
					"*": "{number} children",
					_1: "1 child"
				}, [n.fbt._plural(s, "number")], {
					hk: "dhX9w"
				}))
			};
			class Ae extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCakedayTooltip = () => this.props.onShowTooltip(this.props.cakedayTooltipId), this.onShowAdminTooltip = () => this.props.onShowTooltip(this.props.adminTooltipId), this.onShowAdminEmeritusTooltip = () => this.props.onShowTooltip(this.props.adminEmeritusTooltipId), this.onShowModTooltip = () => this.props.onShowTooltip(this.props.modTooltipId), this.onShowOpTooltip = () => this.props.onShowTooltip(this.props.opTooltipId), this.onShowContractorTooltip = () => this.props.onShowTooltip(this.props.contractorTooltipId), this.onShowTopSupporterTooltip = () => this.props.onShowTooltip(this.props.topSupporterTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						s = Y(e, ["comment"]);
					return r.a.createElement(o.Fragment, null, t.isAuthorCakeday && r.a.createElement(ie, {
						"aria-label": _e(),
						id: s.cakedayTooltipId,
						onMouseEnter: this.onShowCakedayTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isAuthorCakeday && We(s.cakedayTooltipId, _e()), t.isAdmin && r.a.createElement(ee, {
						desc: ye(),
						id: s.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isAdmin && We(s.adminTooltipId, ye()), t.distinguishType === u.C.ALUMNI_ADMIN && r.a.createElement(ne, {
						"aria-label": we(),
						id: s.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: s.onHideTooltip
					}, "Δ"), t.distinguishType === u.C.ALUMNI_ADMIN && We(s.adminEmeritusTooltipId, we()), t.isMod && r.a.createElement(ae, {
						desc: ke(s.subredditDisplayText),
						id: s.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isMod && We(s.modTooltipId, ke(s.subredditDisplayText)), t.isOp && r.a.createElement(me, {
						desc: je(),
						id: s.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isOp && We(s.opTooltipId, je()), s.renderContractorBadge && r.a.createElement(pe, {
						desc: Pe(),
						id: s.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: s.onHideTooltip
					}), s.renderContractorBadge && We(s.contractorTooltipId, Pe()), s.renderTopSupporterBadge && r.a.createElement(re, {
						desc: Se(),
						id: s.topSupporterTooltipId,
						onMouseEnter: this.onShowTopSupporterTooltip,
						onMouseLeave: s.onHideTooltip,
						onClick: s.openPowerupsModal
					}), s.renderTopSupporterBadge && We(s.topSupporterTooltipId, Se()))
				}
			}
			class Be extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowApproveTooltip = () => this.props.onShowTooltip(this.props.approveTooltipId), this.onShowRemoveTooltip = () => this.props.onShowTooltip(this.props.removeTooltipId), this.onShowSpamTooltip = () => this.props.onShowTooltip(this.props.spamTooltipId), this.onShowAutomodTooltip = () => this.props.onShowTooltip(this.props.automodTooltipId), this.onShowReportTooltip = () => this.props.onShowTooltip(this.props.reportTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						s = Y(e, ["comment"]);
					return r.a.createElement(o.Fragment, null, (t.approvedBy || t.isApproved) && r.a.createElement(te, {
						desc: Object(I.a)(t),
						id: s.approveTooltipId,
						onMouseEnter: this.onShowApproveTooltip,
						onMouseLeave: s.onHideTooltip
					}), (t.approvedBy || t.isApproved) && We(s.approveTooltipId, Object(I.a)(t)), Object(S.a)(t) && r.a.createElement(ce, {
						desc: Object(I.c)(t),
						id: s.removeTooltipId,
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: s.onHideTooltip
					}), Object(S.a)(t) && We(s.removeTooltipId, Object(I.c)(t)), Object(S.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && r.a.createElement(Oe, {
						onClick: s.openRemovalReasonModal
					}, n.fbt._("Add a removal reason", null, {
						hk: "L6yrL"
					})), Object(S.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && r.a.createElement(Oe, {
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: s.onHideTooltip
					}, n.fbt._("Removal reason", null, {
						hk: "20NRw8"
					})), t.isLocked && !s.ignoreLock && r.a.createElement(se, {
						desc: n.fbt._("Locked", null, {
							hk: "40Ju3g"
						}),
						id: s.lockedTooltipId,
						onMouseEnter: () => {
							s.onShowTooltip(s.lockedTooltipId)
						},
						onMouseLeave: s.onHideTooltip
					}), t.bannedBy && t.isSpam && r.a.createElement(le, {
						desc: Object(I.e)(t),
						id: s.spamTooltipId,
						onMouseEnter: this.onShowSpamTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.bannedBy && t.isSpam && We(s.spamTooltipId, Object(I.e)(t)), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && r.a.createElement(oe, {
						className: Object(p.a)({
							[Z.a.removed]: !!t.bannedBy
						}),
						desc: I.b,
						id: s.automodTooltipId,
						key: s.automodTooltipId,
						onMouseEnter: this.onShowAutomodTooltip,
						onMouseLeave: s.onHideTooltip
					}), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && We(s.automodTooltipId, I.b), Object(N.a)(t) && r.a.createElement(de, {
						desc: Object(I.d)(t.numReports),
						id: s.reportTooltipId,
						onMouseEnter: this.onShowReportTooltip,
						onMouseLeave: s.onHideTooltip
					}), Object(N.a)(t) && We(s.reportTooltipId, Object(I.d)(t.numReports)))
				}
			}
			const De = () => r.a.createElement(o.Fragment, null, r.a.createElement(K.c, {
					className: Z.a.metaText
				}), r.a.createElement(he, null, n.fbt._("Stickied comment", null, {
					hk: "XUSav"
				}))),
				We = (e, t) => r.a.createElement(w.c, {
					tooltipId: e,
					text: t
				})
		},
		"./src/reddit/components/Comments/ProfileComment/index.m.less": function(e, t, s) {
			e.exports = {
				TopMeta: "Ov9DvczDidxNqJMR_axF2",
				topMeta: "Ov9DvczDidxNqJMR_axF2",
				CommentBody: "_a5_x7qimk18YbGSwE8Fy",
				commentBody: "_a5_x7qimk18YbGSwE8Fy",
				ProfileCommentWrapper: "_2QR1H6z3qpmyHNdkMUnzVu",
				profileCommentWrapper: "_2QR1H6z3qpmyHNdkMUnzVu",
				isRemoved: "_7kIPhlgZcmDxoV_xaWnX9"
			}
		},
		"./src/reddit/components/Comments/ProfileComment/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/objectSelector/index.ts"),
				l = s("./node_modules/lodash/throttle.js"),
				m = s.n(l),
				p = s("./src/lib/fastdom/index.ts"),
				u = s("./src/reddit/components/CommentBodyExpander/index.m.less"),
				b = s.n(u);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = .75, f = 10 * c.G;
			class g extends o.a.Component {
				constructor(e) {
					super(e), this.commentElement = null, this.handleResize = m()(() => {
						if (this.state.expandToggled) return null;
						p.a.read(() => {
							(this.commentElement ? this.commentElement.offsetHeight : 0) <= this.props.height * (x + 1) && p.a.write(() => {
								this.setState({
									expandToggled: !0
								})
							})
						})
					}, f), this.onShowMore = e => {
						e.preventDefault(), this.setState({
							expandToggled: !0
						})
					}, this.state = {
						expandToggled: e.isExpanded
					}
				}
				render() {
					const {
						children: e,
						height: t
					} = this.props, {
						expandToggled: s
					} = this.state;
					return s ? o.a.createElement("div", null, e()) : o.a.createElement("div", {
						className: b.a.collapsedCommentWrapper
					}, o.a.createElement("div", {
						className: b.a.collapsedCommentLine,
						style: {
							height: t
						}
					}, o.a.createElement("div", {
						ref: e => this.commentElement = e
					}, e(b.a.rtjCollapsed))), o.a.createElement("a", {
						className: b.a.seeMore,
						onClick: this.onShowMore
					}, h._("see more", null, {
						hk: "1Cx4qU"
					})))
				}
				componentDidUpdate() {
					const {
						expandToggled: e
					} = this.state;
					e && window && window.removeEventListener("resize", this.handleResize)
				}
				componentDidMount() {
					var e, t;
					if (this.state.expandToggled) return null;
					!(null === (t = null === (e = this.commentElement) || void 0 === e ? void 0 : e.textContent) || void 0 === t ? void 0 : t.trim().includes("\n")) && (window.addEventListener("resize", this.handleResize), this.handleResize())
				}
				componentWillUnmount() {
					window && window.removeEventListener("resize", this.handleResize)
				}
			}
			var v = g,
				O = s("./node_modules/fbt/lib/FbtPublic.js"),
				C = s("./node_modules/lodash/noop.js"),
				E = s.n(C),
				y = s("./src/lib/makeCommentPermalink/index.ts"),
				_ = s("./src/lib/makeCommentsPageKey/index.ts"),
				w = s("./src/lib/makeDraftKey/index.ts"),
				k = s("./src/reddit/actions/comment/index.ts"),
				j = s("./src/reddit/actions/gold/modals.ts"),
				P = s("./src/reddit/actions/modal.ts"),
				S = s("./src/reddit/actions/reportFlow.ts"),
				I = s("./src/reddit/actions/tooltip.ts"),
				N = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				T = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				M = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				L = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				R = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				F = s("./src/reddit/components/ModModeReports/helpers.ts"),
				A = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				B = s("./src/reddit/contexts/InsideOverlay.tsx"),
				D = s("./src/reddit/contexts/PageLayer/index.tsx"),
				W = s("./src/reddit/helpers/correlationIdTracker.ts"),
				H = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				U = s("./src/reddit/helpers/overlay/index.ts"),
				V = s("./src/reddit/helpers/trackers/lightbox.ts"),
				G = s("./src/reddit/models/PostDraft/index.ts"),
				z = s("./src/reddit/selectors/activeModalId.ts"),
				K = s("./src/reddit/selectors/comments.ts"),
				q = s("./src/reddit/selectors/moderatorPermissions.ts"),
				J = s("./src/reddit/selectors/posts.ts"),
				X = s("./src/reddit/selectors/tooltip.ts"),
				Z = s("./src/reddit/selectors/user.ts"),
				Q = s("./src/reddit/components/OverflowMenu/index.tsx"),
				Y = s("./src/reddit/components/ReportFlow/index.tsx"),
				$ = s("./src/reddit/components/ShareMenu/index.tsx"),
				ee = s("./src/reddit/components/TrackingHelper/index.tsx"),
				te = s("./src/reddit/controls/Dropdown/Row.tsx"),
				se = s("./src/reddit/helpers/trackers/modTools.ts"),
				ne = s("./src/reddit/layout/row/Inline/index.tsx"),
				oe = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				re = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				ie = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ae = s("./src/reddit/icons/svgs/Flag/index.tsx"),
				ce = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				de = s("./src/reddit/icons/svgs/Save/index.tsx"),
				le = s("./src/reddit/icons/svgs/Saved/index.tsx"),
				me = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				pe = s("./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less"),
				ue = s.n(pe),
				be = s("./src/lib/lessComponent.tsx");
			const he = be.a.wrapped(me.b, "DeleteIcon", ue.a),
				xe = be.a.wrapped(ae.a, "ReportIcon", ue.a),
				fe = be.a.wrapped(ce.a, "PencilIcon", ue.a),
				ge = be.a.wrapped(de.a, "SaveIcon", ue.a),
				ve = be.a.wrapped(le.a, "SavedIcon", ue.a),
				Oe = be.a.wrapped(Q.b, "OverflowMenu", ue.a),
				Ce = be.a.wrapped(T.c, "ModToolsFlatlist", ue.a),
				Ee = be.a.wrapped(R.a, "ModActionsMenu", ue.a),
				ye = be.a.wrapped(te.b, "DropdownRow", ue.a),
				_e = be.a.wrapped(ne.a, "Flatlist", ue.a),
				we = be.a.button("Button", ue.a),
				ke = Object(D.t)(),
				je = e => "Comment-".concat(e, "--Modal--DeleteComment"),
				Pe = e => "Distinguish--Dropdown--".concat(e),
				Se = (e, t) => "".concat(e, "--").concat(t, "-overflow-menu"),
				Ie = e => "View--Reports--".concat(e),
				Ne = Object(i.c)({
					activeTooltipId: X.a,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(z.a)(e) === je(s.id)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(K.A)(e, {
							commentId: s.postId
						})
					},
					isLoggedIn: Z.I,
					moderatorPermissions: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(q.j)(e, {
							subredditId: s.subredditId
						})
					},
					currentUser: Z.i,
					modModeEnabled: D.P,
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(J.J)(e, {
							postId: s.postId
						})
					},
					postPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(J.N)(e, {
							postId: s.postId
						})
					},
					reportFlowIsOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return e.reportFlow.postOrCommentId === s.id
					},
					subreddit: D.q,
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(J.bb)(e, {
							postId: s.postId
						})
					}
				});
			class Te extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(se.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleEdit = () => this.props.handleEdit(this.props.comment.permalink), this.handleIgnoreReports = () => {
						this.props.onIgnoreReports(), this.sendCommentReportEvent(this.props.comment.ignoreReports ? "restore_reports" : "ignore_reports")
					}, this.handleGild = async () => {
						const e = Object(W.d)(W.a.GildingFlow, !0);
						this.props.onGildClick(e);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(t(this.props.comment.id))
					}, this.handleModActionsMenu = () => this.props.sendEvent(Object(se.a)("comment_mod_action_menu", this.props.comment.id)), this.handleOverflowMenuClick = () => this.props.sendEvent(Object(se.a)("comment_overflow_menu", this.props.comment.id)), this.handleDelete = () => this.props.handleDelete(), this.handleReply = () => this.props.handleReply(this.props.comment.permalink), this.handleRestrictedButtonClick = () => {
						this.props.onToggleReportsDropdown(), this.sendCommentModEventWithName("comment_report_menu")
					}, this.handleSave = () => {
						this.props.comment.isSaved ? this.props.sendEvent(Object(se.a)("unsave", this.props.comment.id)) : this.props.sendEvent(Object(se.a)("save", this.props.comment.id)), this.props.onToggleSave()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(se.b)(e, this.props.comment.id)), this.sendCommentEventWithName = e => this.props.sendEvent(Object(V.b)(this.props.comment.postId, "comment_".concat(e))), this.sendCommentEventWithNameShare = () => this.sendCommentEventWithName("share"), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(se.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(se.e)(e, this.props.comment.id))
				}
				renderModTools() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: n,
						showModTools: r
					} = this.props, i = Object(H.a)(s), a = !!t && t.displayText === e.author;
					if (r && i) return n ? o.a.createElement(Ce, {
						comment: e,
						isCommentAuthor: a
					}) : o.a.createElement(Ee, {
						dropdownId: "".concat(e.id, "-profile-mod-actions-menu"),
						inCommentFlatlist: !0,
						onClick: this.handleModActionsMenu
					}, o.a.createElement(re.a, null), o.a.createElement(N.a, {
						comment: e,
						tooltipId: "".concat(e.id, "-profile-mod-actions-menu")
					}))
				}
				renderReportsDropdown() {
					const {
						comment: e,
						modModeEnabled: t,
						showModTools: s
					} = this.props, n = Object(F.a)(e);
					if (s && Object(F.c)(e) && !t) return o.a.createElement(T.b, {
						text: "".concat(n),
						onClick: this.handleRestrictedButtonClick,
						selected: this.props.activeTooltipId === Ie(e.id),
						id: Ie(e.id)
					}, o.a.createElement(A.a, {
						model: e,
						onIgnoreReports: this.handleIgnoreReports,
						tooltipId: Ie(e.id)
					}), e.ignoreReports ? o.a.createElement(oe.a, null) : o.a.createElement(ie.a, null))
				}
				renderDistinguishDropdown() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: n,
						onDistinguishComment: r,
						showModTools: i
					} = this.props, a = Object(H.a)(s), c = !!t && t.displayText === e.author, d = !!t && t.isEmployee;
					if (i && c && !e.bannedBy && (d || a && !n)) return o.a.createElement(T.b, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.activeTooltipId === Pe(e.id)
					}, o.a.createElement(T.a, null), o.a.createElement(L.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.activeTooltipId === Pe(e.id),
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: d,
						isUserMod: a,
						onDistinguishComment: r,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Pe(e.id)
					}))
				}
				render() {
					const {
						comment: e,
						className: t,
						commentsPageKey: s,
						currentUser: n,
						deleteComment: r,
						isLoggedIn: i,
						isPendingDeletion: a,
						moderatorPermissions: c,
						postIsLocked: d,
						postPermalink: l,
						subreddit: m,
						toggleDeleteCommentModal: p
					} = this.props, u = Object(H.a)(c), b = !!n && n.displayText === e.author, h = !d && !e.isLocked || u && i, x = n && e.isGildable;
					return o.a.createElement("div", {
						className: t
					}, o.a.createElement(_e, null, h && o.a.createElement(we, {
						onClick: this.handleReply,
						disabled: a
					}, O.fbt._("Reply", null, {
						hk: "1xBqIs"
					})), x && o.a.createElement(we, {
						onClick: this.handleGild
					}, O.fbt._("Give Award", null, {
						hk: "pQJYk"
					})), o.a.createElement($.a, {
						dropdownId: "".concat(s, "--").concat(e.id, "-comment-share-menu"),
						permalink: Object(y.a)(l, e.id),
						sendEventWithName: this.sendCommentEventWithName,
						subreddit: m
					}, o.a.createElement(we, {
						onClick: this.sendCommentEventWithNameShare
					}, O.fbt._("share", null, {
						hk: "3YIXpa"
					}))), this.renderReportsDropdown(), o.a.createElement(Oe, {
						dropdownId: Se(s, e.id),
						onClick: this.handleOverflowMenuClick
					}, !b && !a && o.a.createElement(ye, {
						displayText: O.fbt._("report", null, {
							hk: "ad7CE"
						}),
						onClick: this.props.onReportClick
					}, o.a.createElement(xe, null)), o.a.createElement(ye, {
						displayText: e.isSaved ? O.fbt._("Unsave", null, {
							hk: "4kQcAP"
						}) : O.fbt._("Save", null, {
							hk: "2rjVP3"
						}),
						isSelected: e.isSaved,
						onClick: this.handleSave
					}, e.isSaved ? o.a.createElement(ve, null) : o.a.createElement(ge, null)), b && o.a.createElement(ye, {
						displayText: O.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: this.handleEdit
					}, o.a.createElement(fe, null)), b && o.a.createElement(ye, {
						displayText: O.fbt._("delete", null, {
							hk: "e8kvB"
						}),
						onClick: this.handleDelete
					}, o.a.createElement(he, null))), this.props.isConfirmModalOpen && o.a.createElement(M.a, {
						actionText: O.fbt._("delete", null, {
							hk: "3Ene8H"
						}),
						cancelActionText: O.fbt._("keep", null, {
							hk: "vzNJh"
						}),
						headerText: O.fbt._("Delete comment", null, {
							hk: "2ErmbC"
						}),
						modalText: O.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "21h9zY"
						}),
						onConfirm: r,
						toggleModal: p,
						trackClick: E.a,
						withOverlay: !0
					}), this.renderModTools(), this.renderDistinguishDropdown()), this.props.reportFlowIsOpen && o.a.createElement(Y.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: Y.b,
						postId: this.props.comment.postId
					}))
				}
			}
			var Me = ke(Object(r.b)(Ne, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n
					} = t;
					return {
						deleteComment: () => n && e(Object(k.db)(s.id, s.postId)),
						onDistinguishComment: (t, n) => e(Object(k.S)(s.id, t, n)),
						onIgnoreReports: () => e(Object(k.pb)(s.id)),
						onGildClick: t => e(Object(j.d)({
							correlationId: t,
							thingId: s.id
						})),
						onReportClick: () => e(Object(S.j)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(I.h)({
							tooltipId: Pe(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(I.h)({
							tooltipId: Ie(s.id)
						})),
						onToggleSave: () => e(Object(k.gb)(s.id)),
						handleDelete: () => {
							e(Object(P.i)(je(s.id))), e(Object(I.h)({
								tooltipId: Se(n, s.id)
							}))
						},
						handleEdit: t => {
							const n = Object(_.a)(s.postId, s.id, {}),
								o = {
									commentId: s.id,
									draftKey: Object(w.a)(G.c.edit, s.id),
									text: s.bodyMD || "",
									commentMode: s.media && s.media.rteMode,
									commentsPageKey: n
								};
							e(Object(U.a)(t)), e(Object(k.ab)(o))
						},
						handleReply: t => {
							const n = Object(_.a)(s.postId, s.id, {}),
								o = {
									parentCommentId: s.id,
									commentsPageKey: n
								};
							e(Object(U.a)(t)), e(Object(k.bb)(o))
						},
						toggleDeleteCommentModal: () => e(Object(P.i)(je(s.id)))
					}
				})(Object(ee.c)(Object(B.b)(Te)))),
				Le = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Re = s("./src/reddit/components/RichTextJson/index.tsx"),
				Fe = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Ae = s("./src/reddit/components/Comments/ProfileComment/index.m.less"),
				Be = s.n(Ae);
			const De = be.a.wrapped(Le.a, "TopMeta", Be.a),
				We = be.a.div("ProfileCommentWrapper", Be.a),
				He = be.a.div("CommentBody", Be.a),
				Ue = Object(r.b)(() => Object(i.c)({
					comment: (e, t) => Object(K.n)(e, t),
					flair: K.e
				})),
				Ve = Object(d.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.a = Ue(e => {
				const {
					comment: t,
					commentsPageKey: s,
					flair: n,
					isExpanded: r,
					showFlatlist: i,
					showModTools: d
				} = e, l = s => o.a.createElement(Re.a, {
					className: s,
					content: Object(Fe.a)(t),
					rtJsonElementProps: Ve(e)
				});
				return o.a.createElement(We, {
					className: Object(a.a)({
						[Be.a.isRemoved]: !!t.bannedBy
					})
				}, o.a.createElement(De, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: t,
					commentsPageKey: s,
					flair: n,
					renderedInOverlay: !1
				}), o.a.createElement("div", null, !t.isDeleted && o.a.createElement(He, null, r ? l() : o.a.createElement(v, {
					height: c.Hb,
					isExpanded: r
				}, l)), !t.isDeleted && i && o.a.createElement(Me, {
					comment: t,
					commentsPageKey: s,
					showModTools: d
				})))
			})
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
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/selectors/chatPost.ts"),
				m = s("./src/reddit/components/CommentsChat/LiveIcon/index.m.less"),
				p = s.n(m);
			const u = .1,
				b = Object(c.c)({
					isChatPost: l.d
				}),
				h = Object(a.b)(b);
			class x extends i.a.Component {
				constructor(e) {
					super(e), this.onVisibilityChange = e => {
						e.isIntersecting && e.intersectionRatio >= u ? this.state.visible || this.setState({
							visible: !0
						}) : this.state.visible && this.setState({
							visible: !1
						})
					}, this.state = {
						visible: !1
					}
				}
				render() {
					const {
						visible: e
					} = this.state, {
						isChatPost: t
					} = this.props, s = t && e;
					return t ? i.a.createElement(n.a, {
						rootMargin: "20px 0px 20px 0px",
						threshold: u,
						onChange: this.onVisibilityChange
					}, i.a.createElement("div", {
						className: Object(d.a)(p.a.Icon, this.props.className)
					}, i.a.createElement("span", {
						className: Object(d.a)(p.a.Animate, p.a.top, {
							[p.a.play]: s
						})
					}, i.a.createElement("span", {
						className: p.a.bigCircle
					}), i.a.createElement("span", {
						className: p.a.midCircle
					}), i.a.createElement("span", {
						className: p.a.smallCircle
					})), i.a.createElement("p", {
						className: p.a.IconText
					}, o.fbt._("Live Discussion", null, {
						hk: "2akFwx"
					})), i.a.createElement("span", {
						className: Object(d.a)(p.a.Animate, p.a.bottom, {
							[p.a.play]: s
						})
					}, i.a.createElement("span", {
						className: p.a.bigCircle
					}), i.a.createElement("span", {
						className: p.a.midCircle
					}), i.a.createElement("span", {
						className: p.a.smallCircle
					})))) : null
				}
			}
			t.a = h(x)
		},
		"./src/reddit/components/CommentsLink/index.m.less": function(e, t, s) {
			e.exports = {
				commentsLink: "_1UoeAeSRhOKSNdY_h3iS1O",
				commentIcon: "_3DVrpDrMM9NLT6TlsTUMxC",
				defaultCursorWrapper: "_3m17ICJgx45k_z-t82iVuO",
				link: "_1Hw7tY9pMr-T1F4P1C-xNU",
				text: "FHCV02u6Cp2zYL0fhQPsO",
				commentsText: "_25BV1fTi10_HqCnD195T85"
			}
		},
		"./src/reddit/components/CommentsLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				m = s("./src/lib/prettyPrintNumber/index.ts"),
				p = s("./src/reddit/components/CountAnimation/index.tsx"),
				u = s("./src/reddit/components/CountAnimation/config.ts"),
				b = s("./src/reddit/components/CountAnimation/helpers.ts"),
				h = s("./src/reddit/constants/componentTestIds.ts"),
				x = s("./src/reddit/constants/postLayout.ts"),
				f = s("./src/reddit/helpers/path/index.ts"),
				g = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				v = s("./src/reddit/selectors/chatPost.ts"),
				O = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				C = s("./src/reddit/selectors/experiments/postSeo.ts"),
				E = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/components/CommentsLink/index.m.less"),
				w = s.n(_);
			const k = Object(i.b)(() => Object(c.c)({
					isChatPost: v.d,
					isPostSEOEligible: C.d,
					postPermalink: E.N,
					shouldOpenPostInNewTab: y.X,
					totalDiscount: O.a
				})),
				{
					commentCount: {
						inititalDelayRange: {
							lower: j,
							upper: P
						},
						subsequentRecurringDelayRange: {
							lower: S,
							upper: I
						},
						incrementRangeRelativeToTotalDiscount: {
							lower: N,
							upper: T
						}
					}
				} = u.a,
				M = () => Object(b.h)(j, P),
				L = () => Object(b.h)(S, I),
				R = e => {
					let t, {
						type: s,
						numComments: i,
						isChatPost: a,
						modModeEnabled: c,
						hasModPostPerms: l,
						shouldShowIcon: u,
						shouldShowText: h,
						text: f,
						totalDiscount: v = 0
					} = e;
					t = f || (s === x.g.Compact || a || c && l ? Object(m.b)(i) : n.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [n.fbt._plural(i, "number", Object(m.b)(i))], {
						hk: "1QeOde"
					}));
					const O = Object(o.useCallback)(() => Object(b.h)(Math.ceil(v * N), Math.ceil(v * T)), [v]);
					return r.a.createElement(o.Fragment, null, u && r.a.createElement(g.a, {
						className: w.a.commentIcon,
						role: "presentation"
					}), h && r.a.createElement("span", {
						className: w.a.text
					}, v > 0 ? r.a.createElement(p.a, {
						initialDisplayCount: i - v,
						countToUpperBound: i,
						initialDelay: M,
						subsequentRecurringDelay: L,
						incrementDelta: O
					}) : t), h && v > 0 && r.a.createElement("span", {
						className: Object(d.a)(w.a.text, w.a.commentsText)
					}, n.fbt._("comments", null, {
						hk: "ZQ8MY"
					})))
				};
			t.a = k(e => {
				const {
					className: t,
					hasModPostPerms: s,
					isChatPost: n,
					isCommentPermalink: o,
					isCommentsPage: i,
					isOverlay: c,
					isPostSEOEligible: m,
					modModeEnabled: p,
					numComments: u,
					onClick: b,
					postPermalink: x,
					shouldOpenPostInNewTab: g,
					shouldShowIcon: v = !0,
					shouldShowText: O = !0,
					text: C,
					type: E,
					totalDiscount: y
				} = e, _ = i && !o && !m, k = o && !c, j = r.a.createElement(R, {
					type: E,
					numComments: u,
					isChatPost: n,
					totalDiscount: y,
					modModeEnabled: p,
					hasModPostPerms: s,
					shouldShowIcon: v,
					shouldShowText: O,
					text: C
				});
				return _ ? r.a.createElement("div", {
					className: Object(d.a)(w.a.commentsLink, w.a.defaultCursorWrapper, t),
					onClick: b
				}, j) : r.a.createElement(a.a, {
					rel: "nofollow",
					"data-click-id": "comments",
					"data-test-id": h.a,
					className: Object(d.a)(w.a.commentsLink, w.a.link, t),
					target: g ? "_blank" : void 0,
					to: k ? Object(f.b)(x) : Object(l.a)(x, !0),
					onClick: b
				}, j)
			})
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
				LinkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				linkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				LinkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				linkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
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
				quarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./src/config.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router/esm/react-router.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/loginHref/index.ts"),
				l = s("./src/reddit/actions/contentGate.ts"),
				m = s("./src/reddit/actions/preferences.ts"),
				p = s("./src/reddit/components/CreateCommunityButton/index.tsx"),
				u = s("./src/lib/lessComponent.tsx"),
				b = s("./src/reddit/components/Footer/index.m.less"),
				h = s.n(b);
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js"), f = u.a.div("FooterContainer", h.a), g = u.a.div("UserAgreement", h.a), v = u.a.a("UserAgreementLink", h.a), O = u.a.a("PrivacyLink", h.a);
			var C = () => r.a.createElement(f, null, r.a.createElement(g, null, x._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [x._param("=User Agreement", r.a.createElement(v, {
					href: "".concat(n.a.redditUrl, "/help/useragreement")
				}, x._("User Agreement", null, {
					hk: "2srkM2"
				}))), x._param("=Privacy Policy", r.a.createElement(O, {
					href: "".concat(n.a.redditUrl, "/help/privacypolicy")
				}, x._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), x._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				E = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				y = s("./src/reddit/components/RichTextJson/index.tsx"),
				_ = (s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/lodash/flatMap.js")),
				w = s.n(_),
				k = s("./src/lib/linkMatchers/index.ts"),
				j = s("./src/lib/linkMatchers/customLinks.ts"),
				P = s("./src/reddit/controls/OutboundLink/index.tsx");
			const S = /\[(.+?)\]\((.+?)\)/g,
				I = e => {
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
					return e.parseMdLinks && (t = w()(t, I)), e.parseRegularLinks && (t = w()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = k.e.add(j.g.subreddit.prefix, j.g.subreddit.config).match(e);
						if (!t) return [e];
						const s = [];
						let n = null;
						for (const o of t) s.push(e.slice(n ? n.lastIndex : 0, o.index)), n = o, s.push([o.url, o.text]);
						return n && s.push(e.slice(n.lastIndex)), s
					})(e))), r.a.createElement(r.a.Fragment, null, " ", t.map((t, s) => {
						if (Array.isArray(t)) {
							const [n, o] = t;
							return r.a.createElement(P.b, {
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
				T = s("./src/reddit/contexts/PageLayer/index.tsx"),
				M = s("./src/reddit/controls/Button/index.tsx"),
				L = s("./src/reddit/models/ContentGate.ts"),
				R = s("./src/reddit/selectors/meta.ts"),
				F = s("./src/reddit/selectors/user.ts"),
				A = s("./src/reddit/components/ContentGate/index.m.less"),
				B = s.n(A);
			const {
				fbt: D
			} = s("./node_modules/fbt/lib/FbtPublic.js"), W = u.a.div("ButtonsContainer", B.a), H = u.a.div("Container", B.a), U = u.a.div("Description", B.a), V = u.a.div("PrivateSubredditDetails", B.a), G = u.a.div("PrivateSubredditDescription", B.a), z = u.a.h3("PrivateSubredditName", B.a), K = u.a.a("Link", B.a), q = u.a.wrapped(M.k, "LinkRouterButton", B.a), J = u.a.wrapped(M.j, "LinkButton", B.a), X = u.a.wrapped(M.n, "SecondaryLinkRouterButton", B.a), Z = u.a.wrapped(M.m, "SecondaryLinkButton", B.a), Q = u.a.wrapped(q, "GoHomeLinkButton", B.a), Y = u.a.img("Image", B.a), $ = u.a.img("ImagePlaceholder", B.a), ee = u.a.wrapped(q, "LeftLinkRouterButton", B.a), te = u.a.wrapped(J, "LeftLinkButton", B.a), se = u.a.wrapped(Z, "SecondaryLeftLinkButton", B.a), ne = u.a.wrapped(X, "SecondaryLeftLinkRouterButton", B.a), oe = u.a.h3("Title", B.a), re = u.a.div("PageBody", B.a), ie = u.a.div("QuarantineMessageWrapper", B.a), ae = Object(c.c)({
				isLoggedIn: F.H,
				origin: R.l,
				user: F.i
			}), ce = Object(T.t)(), de = Object(i.b)(ae, (e, t) => {
				let {
					subredditName: s
				} = t;
				return {
					continueToQuarantinedSubreddit: async () => {
						await e(m.C(s)), window.location.reload()
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
					isLoggedIn: i,
					location: a,
					origin: c,
					pageLayer: m,
					quarantineRequiresEmail: u,
					quarantineMessage: b,
					quarantineMessageHtml: h,
					quarantineMessageRTJson: x,
					setNSFWPreference: f,
					subredditDescription: g,
					subredditName: v,
					user: O
				} = e, C = () => {
					i ? f() : Object(l.k)(), window.location.reload()
				};
				switch (s) {
					case L.a.GoldSubreddit:
						return r.a.createElement("div", null, r.a.createElement(Y, {
							src: "".concat(n.a.assetPath, "/img/gold/premium-crest.png")
						}), r.a.createElement(oe, null, D._("r/{community name} is a Reddit Premium community", [D._param("community name", v)], {
							hk: "2lyDwB"
						})), r.a.createElement(U, null, D._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), r.a.createElement(W, null, O ? r.a.createElement(se, {
							href: "".concat(n.a.redditUrl, "/premium")
						}, D._("Get Premium", null, {
							hk: "3ChWi4"
						})) : r.a.createElement(te, {
							href: Object(d.a)(a, c)
						}, D._("Sign Up", null, {
							hk: "rvpjy"
						})), O ? r.a.createElement(q, {
							to: "/"
						}, D._("Go Home", null, {
							hk: "49p4or"
						})) : r.a.createElement(Z, {
							href: Object(d.a)(a, c)
						}, D._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case L.a.Nsfw:
					case L.a.NsfwCustomFeed:
						return r.a.createElement("div", null, r.a.createElement(Y, {
							src: "".concat(n.a.assetPath, "/img/content-gate-icons/nsfw.png")
						}), r.a.createElement(oe, null, s === L.a.Nsfw ? D._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : D._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), r.a.createElement(U, null, D._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), r.a.createElement(W, null, r.a.createElement(ee, {
							to: "/"
						}, D._("No", null, {
							hk: "3fMglW"
						})), r.a.createElement(Z, {
							onClick: C
						}, D._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case L.a.PrivateSubreddit:
						return r.a.createElement("div", null, r.a.createElement(Y, {
							src: "".concat(n.a.assetPath, "/img/content-gate-icons/private.png")
						}), r.a.createElement(oe, null, D._("You must be invited to visit this community", null, {
							hk: "dHP8K"
						})), g && g.length && r.a.createElement(V, null, r.a.createElement(z, null, "r/", v), r.a.createElement(G, null, r.a.createElement("div", null, g))), r.a.createElement(U, null, D._("The moderators in this community have set it to private. You must be a moderator or approved user to visit.", null, {
							hk: "nwL0k"
						})), r.a.createElement(W, null, O ? r.a.createElement(se, {
							href: "".concat(n.a.redditUrl, "/message/compose?to=/r/").concat(v)
						}, D._("Message Mods", null, {
							hk: "vVe1i"
						})) : r.a.createElement(se, {
							href: Object(d.a)(a, c)
						}, D._("Sign Up", null, {
							hk: "rvpjy"
						})), r.a.createElement(q, {
							to: "/"
						}, O ? D._("Go Home", null, {
							hk: "49p4or"
						}) : D._("Explore Reddit", null, {
							hk: "3IwwVU"
						}))));
					case L.a.QuarantinedSubreddit:
						return r.a.createElement("div", null, r.a.createElement(Y, {
							src: "".concat(n.a.assetPath, "/img/content-gate-icons/quarantined.png")
						}), r.a.createElement(oe, null, D._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), r.a.createElement(U, null, D._("This community is {=quarantined}", [D._param("=quarantined", r.a.createElement(K, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, D._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), r.a.createElement(ie, null, x ? r.a.createElement(y.a, {
							content: x,
							rtJsonElementProps: {
								pageLayer: m
							}
						}) : h ? r.a.createElement(E.a, {
							html: h
						}) : b || D._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), D._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), r.a.createElement(W, null, ((e, t, s) => {
							return !(e && e.hasVerifiedEmail) && s ? r.a.createElement(W, null, r.a.createElement(ne, {
								to: "/"
							}, D._("No Thank You", null, {
								hk: "4B26AR"
							})), r.a.createElement(J, {
								href: "".concat(n.a.redditUrl, "/prefs/update")
							}, D._("Verify Email", null, {
								hk: "1893cq"
							}))) : r.a.createElement(W, null, r.a.createElement(ee, {
								to: "/"
							}, D._("No Thank You", null, {
								hk: "4B26AR"
							})), r.a.createElement(Z, {
								onClick: t
							}, D._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(O, o, u)));
					case L.a.SubredditBanned:
						return r.a.createElement("div", null, r.a.createElement(Y, {
							src: "".concat(n.a.assetPath, "/img/content-gate-icons/banned.png")
						}), r.a.createElement(oe, null, D._("r/{community name} has been banned from Reddit", [D._param("community name", v)], {
							hk: "2at9Se"
						})), (e => r.a.createElement(U, null, e ? r.a.createElement(N, {
							linkClassName: B.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : D._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), r.a.createElement(W, null, r.a.createElement(q, {
							to: "/"
						}, D._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case L.a.SubredditBlockedForLegalReason:
						return r.a.createElement("div", null, r.a.createElement(Y, {
							src: "".concat(n.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), r.a.createElement(oe, null, D._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), r.a.createElement(W, null, r.a.createElement(q, {
							to: "/"
						}, D._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case L.a.SubredditDoesNotExist:
						return r.a.createElement("div", null, r.a.createElement($, null), r.a.createElement(oe, null, D._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), r.a.createElement(U, null, D._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), r.a.createElement(W, null, O && r.a.createElement(p.a, {
							eventSource: "content_gate"
						}), r.a.createElement(Q, {
							to: "/"
						}, D._("Go Home", null, {
							hk: "49p4or"
						}))));
					case L.a.ProfileDoesNotExist:
					case L.a.ProfileDeleted:
					case L.a.ProfileSuspended:
					case L.a.ProfileBlockedForLegalReason:
						return r.a.createElement("div", null, r.a.createElement(Y, {
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
									return r.a.createElement(r.a.Fragment, null, D._("This account has been {=suspended} .", [D._param("=suspended", r.a.createElement(K, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, D._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case L.a.ProfileDoesNotExist:
									return r.a.createElement(r.a.Fragment, null, r.a.createElement(oe, null, D._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), r.a.createElement(U, null, D._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), r.a.createElement(W, null, r.a.createElement(Q, {
							to: "/"
						}, D._("Go Home", null, {
							hk: "49p4or"
						}))));
					case L.a.CustomFeedDoesNotExist:
						return r.a.createElement("div", null, r.a.createElement(Y, {
							src: "".concat(n.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), r.a.createElement(oe, null, D._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), r.a.createElement(W, null, r.a.createElement(Q, {
							to: "/"
						}, D._("Go Home", null, {
							hk: "49p4or"
						}))));
					case L.a.PostBlockedForLegalReason:
						return r.a.createElement("div", null, r.a.createElement(Y, {
							src: "".concat(n.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), r.a.createElement(oe, null, D._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), r.a.createElement(W, null, r.a.createElement(q, {
							to: "/"
						}, D._("Explore Reddit", null, {
							hk: "FrUWU"
						}))))
				}
			};
			t.default = ce(de(Object(a.i)(e => r.a.createElement(H, null, r.a.createElement("div", null, r.a.createElement(re, null, le(e))), r.a.createElement(C, null)))))
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
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/lib/fastdom/index.ts"),
				p = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = s("./src/reddit/selectors/tooltip.ts"),
				b = s("./src/reddit/components/ContentTooltip/index.m.less"),
				h = s.n(b);

			function x() {
				return (x = Object.assign || function(e) {
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
			const g = {
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
				O = Object(l.a)(e => {
					const {
						children: t,
						className: s,
						style: n,
						caretPosition: o,
						caretColor: i
					} = e, a = f(e, ["children", "className", "style", "caretPosition", "caretColor"]);
					return r.a.createElement("div", x({
						className: Object(d.a)(s, h.a.StyledTooltipContainer, {
							[h.a.caretOnTop]: "top" === o,
							[h.a.caretOnLeft]: "left" === o,
							[h.a.caretOnRight]: "right" === o,
							[h.a.caretOnBottom]: "bottom" === o
						}),
						style: Object.assign(Object.assign({}, n), {
							"--contentTooltip-caretColor": i && i[o] ? i[o] : Object(p.a)(e).body
						})
					}, a), t)
				}),
				C = Object(a.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(u.b)(s)(e)
					}
				}),
				E = Object(c.a)(O, [n.a.Click, n.a.Keydown]),
				y = Object(i.b)(C);
			class _ extends r.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = g
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
					return r.a.createElement(E, x({}, this.props, {
						caretPosition: n,
						targetPosition: t,
						tooltipPosition: s
					}))
				}
			}
			t.a = y(_)
		},
		"./src/reddit/components/CountrySort/index.m.less": function(e, t, s) {
			e.exports = {
				countrySort: "_1JaK9h42mq2UXvugO7VriI"
			}
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/overlay/index.ts"),
				u = s("./src/reddit/helpers/trackers/subredditCreation.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/components/CreateCommunityButton/index.m.less"),
				x = s.n(h),
				f = s("./src/lib/lessComponent.tsx");
			const g = "create-community-button",
				v = f.a.wrapped(d.c, "StyledTooltip", x.a),
				O = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(b.db)(e),
					userIsSuspended: b.N
				});
			t.a = Object(i.b)(O, (e, t) => {
				let {
					eventSource: s
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(u.b)(s)), e(Object(p.a)("/subreddits/create"))
					},
					onShowTooltip: () => e(Object(c.f)({
						tooltipId: g
					})),
					onHideTooltip: () => e(Object(c.i)())
				}
			})(Object(l.c)(e => {
				let {
					className: t,
					eventSource: s,
					onShowTooltip: o,
					onHideTooltip: i,
					openCommunityCreation: a,
					sendEvent: c,
					userDoesNotHaveEnoughExpToCreateCommunity: d,
					userIsSuspended: l
				} = e;
				return r.a.createElement(m.l, {
					className: t,
					disabled: l || d,
					onClick: () => a(c),
					onMouseEnter: o,
					onMouseLeave: i,
					id: g,
					isFullWidth: !0
				}, n.fbt._("Create Community", null, {
					hk: "RLA8A"
				}), d ? r.a.createElement(v, {
					caretOnTop: !0,
					tooltipId: g,
					text: n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? r.a.createElement(v, {
					caretOnTop: !0,
					tooltipId: g,
					text: n.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
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
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				p = s("./src/reddit/components/PostMeta/index.tsx"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				h = s("./src/reddit/components/Thumbnail/index.tsx"),
				x = s("./src/lib/constants/index.ts"),
				f = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/CrosspostBox/index.m.less"),
				O = s.n(v),
				C = s("./src/lib/lessComponent.tsx");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const y = C.a.div("Container", O.a),
				_ = C.a.div("PostMetaWrapper", O.a),
				w = C.a.wrapped(u.c, "PostTitle", O.a),
				k = C.a.div("FlatList", O.a),
				j = C.a.div("FlatItem", O.a),
				P = C.a.span("FlatListDotSpacer", O.a),
				S = C.a.wrapped(y, "LinkContainer", O.a),
				I = C.a.div("Content", O.a),
				N = C.a.div("ThumbnailContainer", O.a),
				T = Object(c.c)({
					isCurrentUserProfilePost: f.k,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== x.Bb.TOPIC),
					post: f.O,
					shouldOpenPostInNewTab: g.X,
					subreddit: f.bb
				}),
				M = Object(i.b)(T);
			t.a = M(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: n,
					mediaProps: o,
					post: i,
					subreddit: a
				} = e;
				if (!i) return null;
				const c = {
						post: i,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: n,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: a,
						tooltipType: "".concat("CrosspostBox", "--").concat(o.isListing)
					},
					d = t;
				return i && !i.media ? r.a.createElement(S, {
					className: d
				}, r.a.createElement(I, null, r.a.createElement(_, null, r.a.createElement(p.a, c)), L(i), i.source && r.a.createElement(b.a, {
					post: i
				}), F(e)), B(e)) : r.a.createElement(y, {
					className: d
				}, r.a.createElement(_, null, r.a.createElement(p.a, c)), L(i), R(e), F(e))
			});
			const L = e => r.a.createElement(w, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: u.b.Small
				}),
				R = e => {
					const {
						mediaProps: t,
						post: s
					} = e, n = Object.assign(Object.assign({}, t), {
						post: s,
						crosspost: t.post
					});
					return r.a.createElement("div", null, r.a.createElement(m.a, E({}, n, {
						className: O.a.mediaContainer
					})))
				},
				F = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(k, null, r.a.createElement(j, null, n.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [n.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(P, null), r.a.createElement(j, null, A(e)))
				},
				A = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: o
					} = t;
					return r.a.createElement(a.a, {
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
				B = e => r.a.createElement(N, null, r.a.createElement(h.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o);
			const i = Object(n.a)({
				resolved: {},
				chunkName: () => "InFeedChaining",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("vendors~InFeedChaining~PostCreation~Reddit~StandalonePostPage~SubredditPremiumBadgeHovercardTooltip"), s.e("vendors~InFeedChaining"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("AuthorHovercard~Governance~InFeedChaining~Reddit~SubredditHovercard~reddit-components-ClassicPost~re~2f1a95cc"), s.e("Governance~InFeedChaining~Reddit"), s.e("InFeedChaining~SubredditTopContent~TopWeekPostsDiscoveryUnit"), s.e("InFeedChaining")]).then(s.bind(null, "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx"
				}
			}, {
				fallback: r.a.createElement("div", null),
				ssr: !1
			});
			t.a = i
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
				i = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = s("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = s("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				m = s("./src/reddit/layout/row/Inline/index.tsx"),
				p = s("./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less"),
				u = s.n(p);
			const b = a.a.div("DistinguishWrapper", u.a),
				h = a.a.wrapped(m.a, "Inline", u.a),
				x = a.a.wrapped(d.a, "RadioOff", u.a),
				f = a.a.wrapped(l.a, "RadioOn", u.a),
				g = e => o.a.createElement(h, {
					onClick: e.selected ? void 0 : e.onClick
				}, e.selected ? o.a.createElement(f, null) : o.a.createElement(x, null), e.text),
				v = a.a.wrapped(e => {
					const {
						className: t,
						style: s,
						isAdminDistinguished: n,
						isUserEmployee: a,
						isUserMod: c,
						isModDistinguished: d,
						isStickied: l,
						isTopLevelComment: m,
						onDistinguishComment: p
					} = e;
					return o.a.createElement(b, {
						className: t,
						style: s
					}, o.a.createElement(g, {
						onClick: () => p(r.C.NONE, null),
						selected: !d && !n,
						text: i.fbt._("Undistinguish", null, {
							hk: "1P0FyT"
						})
					}), c && o.a.createElement(g, {
						onClick: () => p(r.C.MODERATOR, null),
						selected: d && !l,
						text: i.fbt._("Distinguish as Mod", null, {
							hk: "KDx42"
						})
					}), m && c && o.a.createElement(g, {
						onClick: () => p(r.C.MODERATOR, !0),
						selected: d && l,
						text: i.fbt._("Distinguish as Mod and Sticky", null, {
							hk: "1J1DBd"
						})
					}), a && o.a.createElement(g, {
						onClick: () => p(r.C.ADMIN, null),
						selected: n && !l,
						text: i.fbt._("Distinguish as Admin", null, {
							hk: "1JsJOX"
						})
					}), a && c && m && o.a.createElement(g, {
						onClick: () => p(r.C.ADMIN, !0),
						selected: n && l,
						text: i.fbt._("Distinguish as Admin and Sticky", null, {
							hk: "3x8QWN"
						})
					}))
				}, "DistinguishOptions", u.a);
			var O = Object(c.a)(v);
			t.a = e => {
				const {
					className: t,
					isAdminDistinguished: s,
					isUserEmployee: n,
					isUserMod: i,
					isModDistinguished: a,
					isStickied: c,
					isTopLevelComment: d,
					onDistinguishComment: l,
					sendEventWithName: m,
					tooltipId: p
				} = e;
				return o.a.createElement("div", {
					className: t,
					id: p
				}, o.a.createElement(O, {
					isAdminDistinguished: s,
					isUserEmployee: n,
					isUserMod: i,
					isModDistinguished: a,
					isOpen: e.isDropdownOpen,
					tooltipId: p,
					isStickied: c,
					isTopLevelComment: d,
					onDistinguishComment: (e, t) => {
						l(e, t), e === r.C.MODERATOR ? m(!c && t ? "distinguish_sticky" : "distinguish") : e === r.C.ADMIN ? m("admin_distinguish") : a && e !== r.C.MODERATOR ? m("undistinguish") : s && e !== r.C.ADMIN && m("admin_undistinguish"), c && !t && m("unsticky")
					}
				}))
			}
		},
		"./src/reddit/components/EmptyProfile/EmptyListing.m.less": function(e, t, s) {
			e.exports = {
				PrimaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				primaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				BackgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				backgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				Wrapper: "_1aYPXfy_h5ZUIu0k_69eX1",
				wrapper: "_1aYPXfy_h5ZUIu0k_69eX1"
			}
		},
		"./src/reddit/components/EmptyProfile/forbidden.m.less": function(e, t, s) {
			e.exports = {
				container: "_1RecBWgyCRDIwbumVv_1eu",
				hideIcon: "_2ahl77ziD4jsIXBLc18_Hc",
				title: "_1MRoVpNql4popp175MVxl6",
				subtitle: "_3HccUrmIe42WfjCGgNekWK",
				buttons: "_1BrhZvjQw9AWs6w5xlkj2F"
			}
		},
		"./src/reddit/components/EmptyProfile/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return x
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "a", (function() {
				return _
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/PostList/Placeholder.tsx"),
				d = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/components/EmptyProfile/EmptyListing.m.less"),
				m = s.n(l);
			const p = a.a.div("PrimaryText", m.a),
				u = a.a.wrapped(c.a, "BackgroundPlaceholder", m.a),
				b = a.a.div("Wrapper", m.a);
			var h = e => {
				let {
					children: t,
					className: s
				} = e;
				return r.a.createElement(b, {
					className: s
				}, r.a.createElement(u, {
					isLoading: !1,
					layout: d.g.Classic
				}), r.a.createElement(p, null, t))
			};
			var x = e => {
				let {
					className: t,
					profileName: s,
					timeSort: o = i.Sb.ALL
				} = e;
				return r.a.createElement(h, {
					className: t
				}, o === i.Sb.ALL ? n.fbt._("hmm... {profileName} hasn't commented on anything", [n.fbt._param("profileName", "u/".concat(s))], {
					hk: "1MHn3t"
				}) : n.fbt._("hmm... {profileName} hasn't commented recently", [n.fbt._param("profileName", "u/".concat(s))], {
					hk: "qN3uL"
				}))
			};
			var f = e => {
				let {
					className: t,
					profileName: s,
					timeSort: o = i.Sb.ALL
				} = e;
				return r.a.createElement(h, {
					className: t
				}, o === i.Sb.ALL ? n.fbt._("hmm... {profileName} hasn't posted anything", [n.fbt._param("profileName", "u/".concat(s))], {
					hk: "28vBEd"
				}) : n.fbt._("hmm... {profileName} hasn't posted recently", [n.fbt._param("profileName", "u/".concat(s))], {
					hk: "38GhqN"
				}))
			};
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var v = e => {
					let {
						className: t,
						verb: s
					} = e;
					return r.a.createElement(h, {
						className: t
					}, g._("hmm... looks like you haven't {verb} yet", [g._param("verb", s)], {
						hk: "142tKN"
					}))
				},
				O = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				C = s("./src/reddit/components/EmptyProfile/forbidden.m.less"),
				E = s.n(C);
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var _ = () => r.a.createElement("div", {
				className: E.a.container
			}, r.a.createElement(O.a, {
				className: E.a.hideIcon
			}), r.a.createElement("h3", {
				className: E.a.title
			}, y._("You do not have permission to access this resource", null, {
				hk: "10cPyp"
			})), r.a.createElement("p", {
				className: E.a.subtitle
			}, y._("You can only look at your own saved posts and comments", null, {
				hk: "3pWGtF"
			})))
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
				i = s("./src/lib/eventTools/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				m = s("./src/reddit/helpers/postEvent.ts"),
				p = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				u = s.n(p);
			const b = a.a.div("EventMetaWrapper", u.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: s,
					post: n
				} = e;
				if (!Object(m.a)(n)) return null;
				const a = n && n.eventInfo,
					p = Object(l.a)(n),
					h = a && Object(i.c)(a.eventStart, a.eventEnd);
				return o.a.createElement("div", {
					className: Object(r.a)(u.a.container, t, {
						[u.a.isCompact]: !!s
					})
				}, o.a.createElement(b, {
					className: u.a.eventMetaWrapper
				}, o.a.createElement(c.a, {
					post: n
				}), !p && h && o.a.createElement(d.a, {
					className: u.a.eventFollowButton,
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
				o = s.n(n),
				r = s("./src/lib/eventTools/index.ts"),
				i = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/fbt/lib/FbtPublic.js")),
				a = s("./src/lib/constants/index.ts");

			function c(e) {
				return e.toLocaleDateString(void 0, {
					month: "numeric",
					day: "numeric"
				})
			}
			var d = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				m = s("./src/reddit/icons/fonts/Live/index.tsx"),
				p = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				u = s.n(p),
				b = s("./src/lib/lessComponent.tsx");
			const h = b.a.span("PostEventFutureText", u.a),
				x = b.a.span("PostEventPastText", u.a),
				f = b.a.span("PostEventNowText", u.a),
				g = b.a.span("Container", u.a),
				v = b.a.wrapped(l.a, "CalendarIcon", u.a),
				O = b.a.wrapped(m.a, "LiveIcon", u.a),
				C = b.a.div("LoadingState", u.a);
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
						post: t
					} = this.props, {
						eventInfo: s
					} = t;
					if (!s) return null;
					const {
						eventEnd: n,
						eventIsLive: l,
						eventStart: m
					} = s, p = Object(r.e)(m, n);
					let u, b;
					if (this.state.mounted || p === r.a.Live) u = function(e, t, s) {
						const n = Object(r.e)(e, t),
							o = new Date(e * a.Fb);
						let d;
						if (n === r.a.Live || s) return i.fbt._("Now", null, {
							hk: "Prpcg"
						});
						n === r.a.Future ? d = Object(r.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : Object(r.b)(e) >= 5 ? c(o) : o.toLocaleDateString(void 0, {
							weekday: "long"
						}) : n === r.a.Past && (d = Object(r.d)(e) ? i.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : c(o));
						const l = function(e) {
							return e.toLocaleTimeString(void 0, {
								hour12: !0,
								hour: "numeric",
								minute: "2-digit"
							}).replace(/ /g, "").toUpperCase()
						}(o);
						return "".concat(d, " @ ").concat(l)
					}(m, n, l);
					else {
						const e = Object(d.a)({
							isLoading: !0
						});
						u = o.a.createElement(C, {
							className: e
						})
					}
					if (l) b = o.a.createElement(f, null, o.a.createElement(O, null), u);
					else if (p === r.a.Future) b = o.a.createElement(h, null, o.a.createElement(v, null), u);
					else {
						if (p !== r.a.Past) return null;
						b = o.a.createElement(x, null, o.a.createElement(v, null), u)
					}
					return o.a.createElement(g, {
						className: e
					}, b)
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
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				p = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				u = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				b = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"),
				h = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				x = s("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.tsx"),
				f = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				g = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				v = s("./src/reddit/icons/fonts/Link/index.tsx"),
				O = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				C = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				E = s("./src/reddit/icons/fonts/Text/index.tsx"),
				y = s("./src/reddit/icons/svgs/Gallery/index.tsx"),
				_ = s("./src/reddit/icons/svgs/Poll/index.tsx"),
				w = s("./src/reddit/models/Media/index.ts"),
				k = s("./src/reddit/components/ExpandoButton/index.m.less"),
				j = s.n(k);
			const P = Object(i.b)(null, (e, t) => ({
					toggle: () => e(Object(l.r)({
						postId: t.post.id
					}))
				})),
				S = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const n = Object(c.a)(j.a.icon, j.a.hideOnHover);
					if (t) return r.a.createElement(u.a, {
						className: n
					});
					if (s.pollData) return r.a.createElement(_.a, {
						className: n
					});
					switch (e) {
						case w.o.GIFVIDEO:
							return r.a.createElement(g.a, {
								className: n
							});
						case w.o.IMAGE:
							return r.a.createElement(C.a, {
								className: n
							});
						case w.o.TEXT:
						case w.o.RTJSON:
							return r.a.createElement(E.a, {
								className: n
							});
						case w.o.VIDEO:
							return r.a.createElement(f.a, {
								className: n
							});
						case w.o.GALLERY:
							return r.a.createElement(y.a, {
								className: n
							});
						case w.o.EMBED:
						default:
							return r.a.createElement(v.a, {
								className: n
							})
					}
				};
			t.a = P(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: o,
					isExpanded: i,
					post: l,
					toggle: u,
					useMediaIcons: f
				} = e, g = s || l, v = o && !!s;
				return g.media && !(("rtjson" === g.media.type || "text" === g.media.type) && !Object(p.a)(g)) || !!l.pollData ? r.a.createElement("button", {
					"aria-expanded": i,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, j.a.outer),
					"data-click-id": i ? "expando_close" : "expando_open",
					onClick: u
				}, i ? r.a.createElement(b.a, {
					className: j.a.icon
				}) : f ? r.a.createElement(r.a.Fragment, null, S(g.media && g.media.type, v, l), r.a.createElement(h.a, {
					className: Object(c.a)(j.a.icon, j.a.showOnHover)
				})) : r.a.createElement(h.a, {
					className: j.a.icon
				})) : g.source && g.source.url ? r.a.createElement(m.b, {
					"aria-label": n.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, j.a.outer),
					"data-click-id": "expando_open",
					href: g.source.url,
					isSponsored: l.isSponsored,
					postId: l.id,
					source: l.source,
					target: "_blank"
				}, r.a.createElement(O.a, {
					className: Object(c.a)(j.a.icon, j.a.outboundLinkIcon)
				})) : r.a.createElement(a.a, {
					"aria-label": n.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, j.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(g.permalink),
					rel: "nofollow"
				}, r.a.createElement(x.a, {
					className: j.a.icon
				}))
			})
		},
		"./src/reddit/components/Flatlist/ResponsiveRow.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				a = s("./src/reddit/controls/Dropdown/Row.tsx"),
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
				return o.a.createElement("div", {
					"data-ignore-click": !!p.searchIgnoreClick
				}, o.a.createElement(a.a, l({}, p, {
					className: c ? d.a.responsiveRow : Object(r.a)(d.a.responsiveRow, Object(i.b)({
						flatlistItem: t,
						isLoggedIn: s,
						isUserOp: n
					}))
				})))
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
			var n, o, r, i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Flatlist/breakpoints.m.less"),
				c = s.n(a),
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
						return Object(i.a)(t, s, n)
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
				commentsLink: "_2qww3J5KKzsD7e5DO0BvvU",
				supportButton: "_3NIVQWStkLT7RXnwKpKNuT",
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
			s.d(t, "b", (function() {
				return xe
			})), s.d(t, "a", (function() {
				return fe
			})), s.d(t, "d", (function() {
				return Ee
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/lib/timezone/index.ts"),
				p = s("./src/reddit/actions/gold/modals.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				b = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/actions/postCreation/editing.ts"),
				x = s("./src/reddit/actions/postFlair.ts"),
				f = s("./src/reddit/actions/reportFlow.ts"),
				g = s("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				v = s("./src/reddit/components/CommentsLink/index.tsx"),
				O = s("./src/reddit/constants/colors.ts"),
				C = s("./src/reddit/components/ContentTooltip/index.tsx"),
				E = s("./src/reddit/components/GiveAwardTooltip/index.m.less"),
				y = s.n(E);
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class w extends r.a.Component {
				render() {
					const {
						tooltipId: e
					} = this.props;
					return r.a.createElement(C.a, {
						caretColor: {
							top: O.a.op
						},
						tooltipSizeEstimate: {
							height: 39,
							width: 314
						},
						tooltipId: e,
						defaultTooltipPosition: "bottom"
					}, r.a.createElement("div", {
						className: y.a.container
					}, r.a.createElement("div", {
						className: y.a.newBadge
					}, _._("New", null, {
						hk: "1XUPF"
					})), r.a.createElement("div", {
						className: y.a.text
					}, _._("Try giving a new Appreciation Award", null, {
						hk: "1V7ZWF"
					}))))
				}
			}
			var k = w,
				j = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				P = s("./src/reddit/components/ModModeReports/helpers.ts"),
				S = s("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				I = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				N = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				T = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				M = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				L = s("./src/reddit/components/ShareMenu/index.tsx"),
				R = s("./src/reddit/components/TrackingHelper/index.tsx"),
				F = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				A = s("./src/reddit/constants/postLayout.ts"),
				B = s("./src/reddit/contexts/PageLayer/index.tsx"),
				D = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				W = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				H = s("./src/reddit/selectors/user.ts"),
				U = s("./src/reddit/components/Flatlist/ResponsiveRow.tsx"),
				V = s("./src/reddit/helpers/correlationIdTracker.ts"),
				G = s("./src/reddit/helpers/trackers/modTools.ts"),
				z = s("./src/reddit/helpers/trackers/post.ts"),
				K = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				q = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				J = s("./src/reddit/icons/fonts/Report/index.tsx"),
				X = s("./src/reddit/icons/fonts/Share/index.tsx"),
				Z = s("./src/reddit/models/Media/index.ts"),
				Q = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				Y = s("./src/reddit/models/PostCreationForm/index.ts"),
				$ = s("./src/reddit/models/User/index.ts"),
				ee = s("./src/reddit/components/Flatlist/constants.ts"),
				te = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				se = s("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				ne = s("./src/reddit/actions/postCollection/index.ts"),
				oe = s("./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx"),
				re = s("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx"),
				ie = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				ae = s("./src/reddit/selectors/activeModalId.ts"),
				ce = s("./src/reddit/components/Flatlist/index.m.less"),
				de = s.n(ce);

			function le() {
				return (le = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var me = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			let pe, ue;
			const be = l.a.button("ShareButton", de.a),
				he = l.a.wrapped(L.a, "ShareMenu", de.a),
				xe = Object(d.a)(e => {
					var {
						className: t
					} = e, s = me(e, ["className"]);
					return r.a.createElement(q.a, le({}, s, {
						className: Object(c.a)(de.a.modActionsIcon, t),
						style: {
							color: Object(W.a)(Object(D.a)(s), Q.a.actionIcon, Q.b.actionIcon)
						}
					}))
				}),
				fe = e => r.a.createElement("div", le({}, e, {
					className: Object(c.a)(de.a.flatlistSeparator, e.className)
				})),
				ge = Object(B.t)({
					currentProfileName: B.h,
					isCommentPermalink: B.v,
					isCommentsPage: B.w,
					isProfilePostListing: B.I,
					pageLayer: e => e
				}),
				ve = Object(a.c)({
					activeModalId: ae.a,
					layout: B.N,
					userIsOp: H.kb,
					subreddit: B.q
				}),
				Oe = Object(i.b)(ve, (e, t) => {
					let {
						post: n,
						isOverlay: o,
						isCommentsPage: r
					} = t;
					return {
						addPostToCollection: (t, s) => e(Object(ne.a)(t, s)),
						onToggleModal: t => e(Object(u.i)(t)),
						onToggleSave: () => e(Object(b.L)(n.postId)),
						onHide: t => e(Object(b.P)(n.postId, !n.hidden, o, !0)),
						onReportClick: () => e(Object(f.j)(n.postId, o)),
						onEdit: () => {
							const t = !o && !r;
							e(Object(h.a)(n.postId, t))
						},
						onFlairPost: () => e(Object(u.i)(Object(I.b)(n.postId, o))),
						onGildClick: t => e(Object(p.d)({
							correlationId: t,
							thingId: n.postId
						})),
						onFlairChanged: t => {
							let {
								selectedTemplateId: s,
								previewFlair: o
							} = t;
							return e(Object(x.h)({
								post: n,
								selectedTemplateId: s,
								previewFlair: o
							}))
						},
						toggleEditStartTimeModal: async () => {
							pe && ue || ([pe, ue] = await Promise.all([s.e("schedulePickerModal").then(s.bind(null, "./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx")).then(e => e.default), Promise.resolve().then(s.bind(null, "./src/reddit/actions/eventPosts/index.ts")).then(e => e.editEventTimeRequested)])), e(Object(u.i)(Object(Y.r)(n.postId, o, Y.j.POST_OVERFLOW_MENU)))
						},
						addEventStartTime: t => {
							ue && e(ue(n.id, t))
						}
					}
				});
			class Ce extends r.a.Component {
				constructor() {
					super(...arguments), this.handleGild = async () => {
						const {
							onGildClick: e,
							post: t,
							sendEvent: n
						} = this.props;
						e(Object(V.d)(V.a.GildingFlow, !0));
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
						} = this.props, s = Object(Y.s)(t.id, e);
						this.props.onToggleModal(s)
					}, this.addPostToCollection = e => {
						this.props.addPostToCollection(e.id, this.props.post.id).then(() => this.onToggleCurrentModal())
					}, this.sendEventWithName = (e, t) => {
						const {
							hostPostId: s,
							isOverlay: n,
							listingKey: o,
							post: r,
							sendEvent: i
						} = this.props;
						i(Object(z.f)(r.id, e, n ? "post_detail" : "post", o, s, void 0, null == t ? void 0 : t.referralId))
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
						currentUser: i,
						hasModFlairPerms: a,
						hasModFullPerms: d,
						hasModPostPerms: l,
						isCommentPermalink: p,
						isCommentsPage: u,
						isLargePost: b,
						isOverlay: h,
						isProfilePostListing: x,
						isSticky: f,
						layout: O,
						modModeEnabled: C,
						onFlairChanged: E,
						onIgnoreReports: y,
						onOpenReportsDropdown: _,
						pageLayer: w,
						post: L,
						sendEvent: R,
						showEditFlair: B,
						showEditPost: D,
						subreddit: W,
						toggleEditStartTimeModal: H,
						tooltipType: V,
						userIsOp: q,
						searchIgnoreClick: Q,
						isActionBarAnimationEnabled: ne,
						isForceSelected: ie
					} = this.props, ae = !!i && Object($.e)(i) === L.author, ce = Object(se.a)("View--Reports", L.id, V), le = Object(se.a)("View--GiveAward", L.id, V), me = Object(P.c)(L), ue = Ee("-mod-actions-menu", L.id, h, f), fe = Object(P.a)(L), ge = L.postId, ve = O === A.g.Large, Oe = !u && ve || l && C, Ce = !(h || u || p), ye = i && L.isGildable, _e = L.media && L.media.type === Z.o.LIVEVIDEO;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(c.a)(de.a.flatlistContainer, s)
					}, r.a.createElement(v.a, {
						className: de.a.commentsLink,
						hasModPostPerms: l,
						isCommentsPage: u,
						isCommentPermalink: p,
						isOverlay: h,
						postId: L.id,
						modModeEnabled: C,
						numComments: L.numComments,
						isActionBarAnimationEnabled: ne,
						isForceSelected: ie
					}), ye && r.a.createElement(r.a.Fragment, null, r.a.createElement(U.a, {
						displayText: n.fbt._("Give Award", null, {
							hk: "NIFUn"
						}),
						flatlistItem: ee.a.Gild,
						isLoggedIn: !!i,
						isUserOp: q,
						onClick: this.handleGild,
						searchIgnoreClick: Q,
						skipRoleAttr: !0
					}, r.a.createElement(T.a, {
						id: le
					})), r.a.createElement(k, {
						postOrComment: L,
						tooltipId: le
					})), r.a.createElement(he, {
						className: Object(te.b)({
							flatlistItem: ee.a.Share,
							isLoggedIn: !!i,
							isUserOp: q
						}),
						dropdownId: Ee("-share-menu", L.id, h, f),
						permalink: L.permalink,
						post: L,
						sendEventWithName: this.sendEventWithName,
						subreddit: W
					}, r.a.createElement(be, {
						"data-click-id": "share"
					}, r.a.createElement(X.a, {
						className: de.a.shareIcon
					}), r.a.createElement("span", {
						className: de.a.shareText
					}, n.fbt._("share", null, {
						hk: "1eAfZg"
					})))), D && !Oe && r.a.createElement(U.a, {
						displayText: n.fbt._("Edit post", null, {
							hk: "Jq2Cr"
						}),
						flatlistItem: ee.a.EditPost,
						isLoggedIn: !!i,
						isUserOp: q,
						onClick: this.props.onEdit,
						skipRoleAttr: !0
					}, r.a.createElement(T.c, null)), (!l || !C) && r.a.createElement(U.a, {
						displayText: L.saved ? n.fbt._("unsave", null, {
							hk: "4Dn4IT"
						}) : n.fbt._("save", null, {
							hk: "3NOMst"
						}),
						flatlistItem: ee.a.Save,
						isLoggedIn: !!i,
						isUserOp: q,
						onClick: this.onSaveClick,
						searchIgnoreClick: Q,
						skipRoleAttr: !0
					}, L.saved ? r.a.createElement(T.f, null) : r.a.createElement(T.e, null)), !L.isSponsored && !Oe && r.a.createElement(U.a, {
						displayText: L.hidden ? n.fbt._("unhide", null, {
							hk: "151XLs"
						}) : n.fbt._("hide", null, {
							hk: "4AnA6R"
						}),
						flatlistItem: ee.a.Hide,
						isLoggedIn: !!i,
						isUserOp: q,
						onClick: this.onHideClick,
						searchIgnoreClick: Q,
						skipRoleAttr: !0
					}, r.a.createElement(T.b, null)), !ae && !L.isSponsored && !Oe && r.a.createElement(U.a, {
						displayText: n.fbt._("report", null, {
							hk: "1phfns"
						}),
						flatlistItem: ee.a.Report,
						isLoggedIn: !!i,
						isUserOp: q,
						onClick: this.onReportClick,
						searchIgnoreClick: Q,
						skipRoleAttr: !0
					}, r.a.createElement(T.d, null)), r.a.createElement(S.a, {
						isOverlay: h,
						layout: O,
						modModeEnabled: C,
						post: L,
						sendEvent: R
					}), l && r.a.createElement(j.a, {
						dropdownId: ue,
						onClick: () => R(Object(z.f)(L.id, "post_mod_action_menu"))
					}, r.a.createElement(xe, null), r.a.createElement(N.a, {
						canEditFlair: a && !!B,
						hasModFullPerms: d,
						hasModPostPerms: l,
						isOverlay: !!h,
						isPostAuthor: ae,
						modModeEnabled: C,
						post: L,
						tooltipId: ue
					})), l && me && !C && r.a.createElement(M.c, {
						text: "".concat(fe),
						onClick: () => {
							_(ce), R(Object(z.f)(L.id, "post_report_menu"))
						},
						id: ce
					}, r.a.createElement(F.a, {
						model: L,
						onIgnoreReports: () => {
							y(), R(Object(G.j)(L.ignoreReports ? "restore_reports" : "ignore_reports", L.id))
						},
						tooltipId: ce
					}), L.ignoreReports ? r.a.createElement(K.a, null) : r.a.createElement(J.a, null)), (i || !L.isSponsored) && r.a.createElement(T.g, {
						currentProfileName: o,
						dropdownId: Ee("-overflow-menu", L.id, h, f),
						isCommentsPage: u,
						isFixed: f,
						isOverlay: !!h,
						isProfilePostListing: x,
						layout: O,
						modModeWithPost: C && l,
						pageLayer: w,
						permalink: L.permalink,
						postId: ge,
						sendEvent: R,
						showEditPost: !!D,
						showEditFlair: !!B,
						useFlatlistBreakpoints: this.props.useFlatlistBreakpoints,
						toggleAddEventStartTimeModal: H,
						toggleEditStartTimeModal: H
					}), e === Object(Y.s)(L.id, h) && r.a.createElement(oe.a, {
						subredditId: L.belongsTo.id,
						onClose: this.onToggleCurrentModal,
						postId: L.id,
						onSelectCollection: this.addPostToCollection,
						titleText: n.fbt._("Add post to a collection", null, {
							hk: "38vSyF"
						}),
						onItemHoverActionText: n.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						isOverlay: h
					}), e === Object(Y.r)(L.id, h, Y.j.POST_OVERFLOW_MENU) && pe && r.a.createElement(pe, {
						onChange: t,
						onClose: H,
						schedule: Object(m.c)(L),
						shouldShowDeleteButton: !1
					}), e === Object(Y.t)(L.id, h) && r.a.createElement(re.a, {
						onCancel: this.onToggleCollectionListModal,
						onCollectionCreated: this.addPostToCollection,
						subredditId: L.belongsTo.id
					}), e === Object(I.b)(L.id, h) && r.a.createElement(I.a, {
						flairs: L.flair,
						subredditId: L.belongsTo.id,
						modalId: Object(I.b)(L.id, h),
						onFlairChanged: E
					}), r.a.createElement("div", {
						className: de.a.flexSpacer
					})), Ce && !_e && r.a.createElement(g.a, {
						className: Object(c.a)(de.a.liveDiscussionWrapper, {
							[de.a.large]: b
						}),
						isMod: l,
						postId: L.postId
					}))
				}
			}
			const Ee = (e, t, s, n) => {
					let o = t;
					return s && (o += "-overlay"), n && (o += "-sticky"), o += e
				},
				ye = ge(Oe(Object(R.c)(Ce)));
			t.c = r.a.memo((function(e) {
				const t = Object(ie.b)();
				return r.a.createElement(ye, le({}, e, {
					searchIgnoreClick: t
				}))
			}))
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				Title: "_6Sb8zEFmf-xF6UJ5SowYB",
				title: "_6Sb8zEFmf-xF6UJ5SowYB",
				DropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				dropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				LayoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				layoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				LayoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				layoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				LayoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				layoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				Dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				selected: "_1fiOgAxLiYfEU41C1NOX9B",
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/reddit/actions/preferences.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/constants/postLayout.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/contexts/Tooltip.ts"),
				f = s("./src/reddit/controls/Dropdown/index.tsx"),
				g = s("./src/reddit/controls/Dropdown/Row.tsx"),
				v = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				O = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				C = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				E = s("./src/reddit/selectors/telemetry.ts"),
				y = s("./src/reddit/selectors/tooltip.ts"),
				_ = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				w = s.n(_);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const j = "view--layout--FUE",
				P = "LayoutSwitch--picker",
				S = Object(c.a)(f.a),
				I = {
					[b.d.Card]: C.a,
					[b.d.Classic]: v.a,
					[b.d.Compact]: O.a
				},
				N = {
					[b.d.Card]: () => n.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[b.d.Classic]: () => n.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[b.d.Compact]: () => n.fbt._("compact", null, {
						hk: "1N7pcz"
					})
				},
				T = Object(h.t)(),
				M = Object(a.c)({
					dropdownIsOpen: Object(y.b)(P),
					postLayout: h.N,
					redditStyle: h.A
				}),
				L = Object(i.b)(M, e => ({
					onListingLayoutChange: (t, s) => e(Object(m.x)(t, s)),
					openDropdown: () => e(Object(p.h)({
						tooltipId: P
					}))
				}));
			class R extends r.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: s,
							sendEvent: n,
							subredditId: o
						} = this.props;
						t ? t(e) : (s(e, o), n(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(E.screen)(t),
							subreddit: Object(E.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: s,
							onLayoutClick: n,
							postLayout: o
						} = this.props, i = s || b.e[o], a = e === i, c = I[e], l = N[e];
						return r.a.createElement(g.b, k({}, t, {
							className: Object(d.a)(w.a.LayoutItem, {
								[w.a.selected]: a
							}),
							"data-layout": e,
							displayText: l(),
							iconWrapperClassName: w.a.LayoutItemIconWrapper,
							isSelected: a,
							noHover: a,
							onClick: a ? void 0 : () => this.changeLayout(e),
							textClassName: w.a.LayoutItemTextClassName
						}), r.a.createElement(c, {
							className: w.a.LayoutIcon,
							onClick: a ? void 0 : n
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return r.a.createElement(S, k({}, e, {
							className: w.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: w.a.DropdownRow,
							rowIconClassName: w.a.DropdownRowIcon,
							rowSelectedClassName: w.a.DropdownRowSelected,
							tooltipId: P
						}), this.renderItem(b.d.Card), this.renderItem(b.d.Classic), this.renderItem(b.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: s,
						postLayout: n
					} = this.props, o = t || b.e[n];
					return r.a.createElement("div", {
						className: Object(d.a)(w.a.Container, e),
						id: j
					}, r.a.createElement("div", {
						className: w.a.DropdownContainer,
						onClick: s
					}, this.renderItem(o, {
						id: P,
						showDropdownTriangle: !0
					}), r.a.createElement(x.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = T(L(Object(u.c)(Object(l.a)(R))))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less": function(e, t, s) {
			e.exports = {
				SortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				sortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				SortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				sortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				SortLink: "M2Hk_S2yvXpsNPfZMBMur",
				sortLink: "M2Hk_S2yvXpsNPfZMBMur",
				selected: "_1s79QnBguPbckxiiPvFXGP",
				SortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				sortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				SortLink2020: "_2PAz5_NMDCV5XtywB9mVpg",
				sortLink2020: "_2PAz5_NMDCV5XtywB9mVpg",
				active: "_2VxDgoEy96XoqXUPsQooJk",
				SortLabel: "_1lwNBHmCQJObvqs1fXKSYR",
				sortLabel: "_1lwNBHmCQJObvqs1fXKSYR",
				SortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				sortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				CountrySort: "VatfkH4hd3AcIOCT15Zai",
				countrySort: "VatfkH4hd3AcIOCT15Zai",
				StateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				stateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				TimeSort: "GzkzdrqG-NjAYH7eKJan4",
				timeSort: "GzkzdrqG-NjAYH7eKJan4",
				DropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				dropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				Dropdown: "Sgi9lgQUrox4tW9Q75iif",
				dropdown: "Sgi9lgQUrox4tW9Q75iif",
				DropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				dropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				DropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				dropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				DropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				dropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				DropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT",
				dropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "wBtTDilkW_rtT2k5x3eie",
				container: "wBtTDilkW_rtT2k5x3eie",
				LayoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5",
				layoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/listingSort/index.ts"),
				c = s("./src/reddit/actions/preferences.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				p = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				u = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/reselect/es/index.js")),
				b = s("./src/lib/addQueryParams/index.ts"),
				h = s("./src/lib/constants/index.ts"),
				x = s("./node_modules/react-router-redux/es/index.js"),
				f = s("./src/reddit/actions/tooltip.ts"),
				g = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/fbt/lib/FbtPublic.js")),
				v = s("./src/higherOrderComponents/asTooltip.tsx"),
				O = s("./src/reddit/constants/listingSorts.ts"),
				C = s("./src/reddit/contexts/Tooltip.ts"),
				E = s("./src/reddit/controls/Dropdown/index.tsx"),
				y = s("./src/reddit/controls/Dropdown/Row.tsx"),
				_ = s("./src/reddit/helpers/path/index.ts"),
				w = s("./src/reddit/helpers/trackers/navigation.ts"),
				k = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				j = s("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				P = s("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				S = s("./src/reddit/selectors/tooltip.ts"),
				I = s("./src/reddit/selectors/user.ts"),
				N = s("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				T = s("./src/reddit/components/ListingSort/index.m.less"),
				M = s.n(T),
				L = s("./src/lib/lessComponent.tsx");

			function R() {
				return (R = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var F = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const A = "ListingSort--SortPicker",
				B = Object(v.a)(L.a.wrapped(E.a, "Dropdown", M.a)),
				D = L.a.wrapped(N.b, "ListingSortIcon", M.a),
				W = (L.a.wrapped(k.b, "DropdownTriangle", M.a), L.a.div("Title", M.a)),
				H = L.a.wrapped(e => o.a.createElement(y.b, R({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", M.a),
				U = e => {
					var {
						disabled: t
					} = e, s = F(e, ["disabled"]);
					return o.a.createElement("div", R({}, s, {
						className: Object(i.a)(M.a.SortWrapper, s.className, {
							[M.a.isDisabled]: t
						})
					}))
				},
				V = L.a.div("DropdownRowDisabled", M.a),
				G = Object(l.t)({
					isFrontpage: l.y,
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				z = Object(u.c)({
					isAwardListingExperimentEnabled: P.a,
					isBestSortPopularEnabled: j.a,
					user: I.i,
					dropdownIsOpen: (e, t) => Object(S.b)(t.dropdownId || A)(e),
					isPopularPage: l.C
				}),
				K = Object(r.b)(z, (e, t) => {
					let {
						dropdownId: s,
						pageLayer: n
					} = t;
					return {
						onOpenDropdown: () => e(Object(f.h)({
							tooltipId: s || A
						}))
					}
				});
			var q = L.a.wrapped(G(K(Object(d.c)(e => o.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && o.a.createElement(W, null, g.fbt._("Sort", null, {
					hk: "2BfINq"
				})), o.a.createElement(U, {
					disabled: e.disabled
				}, e.children || o.a.createElement(H, {
					className: e.buttonClassName,
					displayText: Object(O.a)(e.sort),
					id: e.dropdownId || A,
					showDropdownTriangle: !0
				}, o.a.createElement(D, {
					sort: e.sort
				}))), o.a.createElement(C.a.Consumer, null, t => o.a.createElement(B, R({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || A
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? o.a.createElement(V, null, g.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, s, n, o) => {
					const r = [h.O.HOT, h.O.NEW, h.O.TOP, h.O.RISING];
					return (e && (s || n) || t && n) && r.unshift(h.O.BEST), t && o && r.splice(3, 0, h.O.AWARDED), r
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => o.a.createElement(y.b, {
					className: Object(i.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
					displayText: Object(O.a)(t),
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(w.a)(t))
					},
					href: e.isProfilePage ? Object(b.a)(e.baseUrl, {
						sort: t
					}) : Object(_.a)(e.baseUrl, "".concat(t, "/")),
					isSelected: e.sort === t,
					key: t
				}, o.a.createElement(D, {
					className: e.rowIconClassName,
					sort: t
				}))))))))), "ListingSort", M.a),
				J = (s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./src/reddit/constants/parameters.ts"));
			const X = e => {
					const t = Z[e];
					return t && t() || ""
				},
				Z = {
					[h.Pb.AllStates]: () => g.fbt._("all states", null, {
						hk: "1s9O3L"
					}),
					[h.Pb.Alaska]: () => g.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[h.Pb.Alabama]: () => g.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[h.Pb.Arkansas]: () => g.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[h.Pb.Arizona]: () => g.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[h.Pb.California]: () => g.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[h.Pb.Colorado]: () => g.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[h.Pb.Connecticut]: () => g.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[h.Pb.DistrictOfColumbia]: () => g.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[h.Pb.Delaware]: () => g.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[h.Pb.Florida]: () => g.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[h.Pb.Georgia]: () => g.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[h.Pb.Hawaii]: () => g.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[h.Pb.Iowa]: () => g.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[h.Pb.Idaho]: () => g.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[h.Pb.Illinois]: () => g.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[h.Pb.Indiana]: () => g.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[h.Pb.Kansas]: () => g.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[h.Pb.Kentucky]: () => g.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[h.Pb.Louisiana]: () => g.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[h.Pb.Massachusetts]: () => g.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[h.Pb.Maryland]: () => g.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[h.Pb.Maine]: () => g.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[h.Pb.Michigan]: () => g.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[h.Pb.Minnesota]: () => g.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[h.Pb.Missouri]: () => g.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[h.Pb.Mississippi]: () => g.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[h.Pb.Montana]: () => g.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[h.Pb.NorthCarolina]: () => g.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[h.Pb.NorthDakota]: () => g.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[h.Pb.Nebraska]: () => g.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[h.Pb.NewHampshire]: () => g.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[h.Pb.NewJersey]: () => g.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[h.Pb.NewMexico]: () => g.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[h.Pb.Nevada]: () => g.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[h.Pb.NewYork]: () => g.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[h.Pb.Ohio]: () => g.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[h.Pb.Oklahoma]: () => g.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[h.Pb.Oregon]: () => g.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[h.Pb.Pennsylvania]: () => g.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[h.Pb.RhodeIsland]: () => g.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[h.Pb.SouthCarolina]: () => g.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[h.Pb.SouthDakota]: () => g.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[h.Pb.Tennessee]: () => g.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[h.Pb.Texas]: () => g.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[h.Pb.Utah]: () => g.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[h.Pb.Virginia]: () => g.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[h.Pb.Vermont]: () => g.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[h.Pb.Washington]: () => g.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[h.Pb.Wisconsin]: () => g.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[h.Pb.WestVirginia]: () => g.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[h.Pb.Wyoming]: () => g.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var Q = s("./src/reddit/components/StateSort/index.m.less"),
				Y = s.n(Q);

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = L.a.wrapped(E.a, "_Dropdown", Y.a),
				te = Object(v.a)(ee),
				se = e => {
					return e.indexOf("_") > 0 && oe(e) === h.w.UnitedStates
				},
				ne = e => {
					if (se(e)) {
						return e.split("_")[1]
					}
					return h.Pb.AllStates
				},
				oe = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				re = e => {
					const t = oe(e),
						s = ne(e);
					return se(e) ? "".concat(t, "_").concat(s) : t
				},
				ie = Object(l.t)(),
				ae = Object(u.c)({
					dropdownIsOpen: Object(S.b)("StateSort--StateSortPicker")
				}),
				ce = Object(r.b)(ae, e => ({
					onOpenDropdown: () => e(Object(f.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, s) => {
						e(Object(x.b)(t)), e(Object(c.u)(h.w.UnitedStates + "_" + s))
					}
				}));
			var de = L.a.wrapped(ie(ce(e => {
				const t = "".concat(e.baseUrl, "?").concat(J.h, "=").concat(h.w.UnitedStates);
				return o.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, o.a.createElement(U, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, o.a.createElement(H, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : X(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), o.a.createElement(C.a.Consumer, null, s => o.a.createElement(te, $({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, s, {
					renderContentsHidden: !0
				}), Object.keys(h.Pb).map(s => {
					const n = h.Pb[s];
					return o.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === h.Pb.AllStates ? t : "".concat(t, "_").concat(e))(n), re(n))
					}, o.a.createElement(y.b, {
						className: Object(i.a)(e.rowClassName, e.sort === n ? e.rowSelectedClassName : void 0),
						displayText: X(n),
						isSelected: e.sort === n
					}))
				}))))
			})), "Component", Y.a);
			const le = {
				[h.w.Everywhere]: () => g.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[h.w.UnitedStates]: () => g.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[h.w.Argentina]: () => g.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[h.w.Australia]: () => g.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[h.w.Bulgaria]: () => g.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[h.w.Canada]: () => g.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[h.w.Chile]: () => g.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[h.w.Colombia]: () => g.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[h.w.Croatia]: () => g.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[h.w.CzechRepublic]: () => g.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[h.w.Finland]: () => g.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[h.w.France]: () => g.fbt._("France", null, {
					hk: "1fX2Y8"
				}),
				[h.w.Germany]: () => g.fbt._("Germany", null, {
					hk: "2mADuB"
				}),
				[h.w.Greece]: () => g.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[h.w.Hungary]: () => g.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[h.w.Iceland]: () => g.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[h.w.India]: () => g.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[h.w.Ireland]: () => g.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[h.w.Italy]: () => g.fbt._("Italy", null, {
					hk: "3EvGjk"
				}),
				[h.w.Japan]: () => g.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[h.w.Malaysia]: () => g.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[h.w.Mexico]: () => g.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[h.w.NewZealand]: () => g.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[h.w.Philippines]: () => g.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[h.w.Poland]: () => g.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[h.w.Portugal]: () => g.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[h.w.PuertoRico]: () => g.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[h.w.Romania]: () => g.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[h.w.Serbia]: () => g.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[h.w.Singapore]: () => g.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[h.w.Spain]: () => g.fbt._("Spain", null, {
					hk: "44RpFE"
				}),
				[h.w.Sweden]: () => g.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[h.w.Taiwan]: () => g.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[h.w.Thailand]: () => g.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[h.w.Turkey]: () => g.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[h.w.UnitedKingdom]: () => g.fbt._("United Kingdom", null, {
					hk: "rs1fl"
				})
			};
			var me = s("./src/reddit/components/CountrySort/index.m.less"),
				pe = s.n(me);

			function ue() {
				return (ue = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const be = "CountrySort--CountrySortPicker",
				he = Object(l.t)(),
				xe = Object(u.c)({
					dropdownIsOpen: Object(S.b)(be)
				});
			var fe = he(Object(r.b)(xe, e => ({
					onCloseDropdown: t => e(Object(f.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(f.g)({
						tooltipId: t
					})),
					onClickLink: (t, s) => {
						e(Object(x.b)(t)), e(Object(c.u)(s))
					}
				}))(e => {
					const t = oe(e.sort),
						s = ne(e.sort),
						n = "".concat(e.baseUrl, "?").concat(J.h, "=");
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: Object(i.a)(pe.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(be) : e.onOpenDropdown(be)
					}, o.a.createElement(U, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, o.a.createElement(H, {
						className: e.buttonClassName,
						displayText: (() => t in le ? le[t]() : le[h.w.Everywhere]())(),
						id: be,
						showDropdownTriangle: !0
					})), o.a.createElement(C.a.Consumer, null, s => o.a.createElement(te, ue({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: be
					}, s, {
						renderContentsHidden: !0
					}), Object.keys(h.w).map(s => {
						const r = h.w[s];
						return o.a.createElement("div", {
							key: r,
							onClick: () => e.onClickLink("".concat(n).concat(re(r)), r)
						}, o.a.createElement(y.b, {
							className: Object(i.a)(e.rowClassName, t === r ? e.rowSelectedClassName : void 0),
							displayText: le[r](),
							isSelected: t === r
						}))
					})))), t === h.w.UnitedStates && o.a.createElement(de, {
						baseUrl: e.baseUrl,
						buttonClassName: e.buttonClassName,
						className: e.stateSortClassName,
						disabled: e.disabled,
						dropdownClassName: e.dropdownClassName,
						rowClassName: e.rowClassName,
						rowSelectedClassName: e.rowSelectedClassName,
						showStateAbbreviations: e.showStateAbbreviations,
						sort: s,
						wrapperClassName: e.wrapperClassName
					}))
				})),
				ge = s("./node_modules/path-browserify/index.js"),
				ve = s.n(ge),
				Oe = s("./src/reddit/components/TimeSort/index.m.less"),
				Ce = s.n(Oe);

			function Ee() {
				return (Ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ye = Object(v.a)(E.a),
				_e = (e, t, s) => {
					let n = e.url;
					return e.urlParams.sort || Object(l.G)(e) || (n = ve.a.join(n, t)), Object(b.a)(n, {
						[J.x]: s
					})
				},
				we = L.a.div("ListingSortContainer", Ce.a),
				ke = Object(l.t)(),
				je = Object(u.c)({
					dropdownIsOpen: Object(S.b)("TimeSort--SortPicker")
				});
			var Pe = ke(Object(r.b)(je, e => ({
					onOpenDropdown: () => e(Object(f.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(d.c)(e => o.a.createElement(we, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, o.a.createElement(U, {
					className: e.wrapperClassName,
					disabled: !1
				}, o.a.createElement(H, {
					className: e.buttonClassName,
					displayText: Object(O.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), o.a.createElement(C.a.Consumer, null, t => o.a.createElement(ye, Ee({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [h.Sb.HOUR, h.Sb.DAY, h.Sb.WEEK, h.Sb.MONTH, h.Sb.YEAR, h.Sb.ALL].map(t => o.a.createElement(y.b, {
					className: Object(i.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
					displayText: Object(O.b)(t),
					href: _e(e.pageLayer, e.listingSort, t),
					isSelected: e.timeSort === t,
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(w.c)(t))
					}
				})))))))),
				Se = s("./src/reddit/constants/listings.ts"),
				Ie = s("./src/reddit/contexts/Buttons2020.ts"),
				Ne = s("./src/reddit/controls/Button/index.tsx"),
				Te = s("./src/reddit/controls/InternalLink/index.tsx"),
				Me = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				Le = s("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				Re = s.n(Le);

			function Fe() {
				return (Fe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ae = new Set([h.O.CONTROVERSIAL, h.O.TOP]),
				Be = new Set([h.O.CONTROVERSIAL, h.O.RISING]),
				De = "ListingSort--Overflow",
				We = Object(l.t)({
					isFrontpage: l.y,
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				He = Object(u.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, j.a, I.i, l.C, P.a, (e, t, s, n, o, r) => {
					if (e) return {
						isPopularPage: o,
						sortOptions: e
					};
					const i = [h.O.HOT, h.O.NEW, h.O.TOP, h.O.RISING];
					return (t && (n || s) || o && s) && i.unshift(h.O.BEST), o && r && i.splice(3, 0, h.O.AWARDED), {
						isPopularPage: o,
						sortOptions: i
					}
				});
			class Ue extends o.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(w.a)(e))
					}, this.getSortUrl = e => {
						const {
							baseUrl: t,
							isProfilePage: s
						} = this.props;
						return s ? Object(b.a)(t, {
							sort: e
						}) : Object(_.a)(t, "".concat(e, "/"))
					}, this.renderSortButton = e => t => {
						const {
							sort: s
						} = this.props;
						return t ? o.a.createElement(Ne.q, {
							className: Object(i.a)(Re.a.SortLink2020, e === s && Re.a.selected),
							kind: Ne.a.InternalLink,
							priority: Ne.b.Plain,
							Icon: N.a[e],
							text: Object(O.a)(e),
							onClick: () => this.changeSort(e),
							to: this.getSortUrl(e),
							key: e
						}) : o.a.createElement(Te.a, {
							className: Object(i.a)(Re.a.SortLink, e === s && Re.a.selected),
							onClick: () => this.changeSort(e),
							to: this.getSortUrl(e),
							key: e
						}, o.a.createElement(D, {
							className: Re.a.SortIcon,
							sort: e
						}), o.a.createElement("div", {
							className: Re.a.SortLabel
						}, Object(O.a)(e)))
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: s,
							isPopularPage: n,
							sort: r
						} = this.props, i = n && !!s && e === h.O.HOT && r === h.O.HOT;
						return o.a.createElement(o.a.Fragment, {
							key: e
						}, o.a.createElement(Ie.a.Consumer, null, this.renderSortButton(e)), i && o.a.createElement(fe, {
							baseUrl: Se.c[Se.b.Popular],
							buttonClassName: Re.a.DropdownButton,
							className: Re.a.CountrySort,
							disabled: t,
							dropdownClassName: Re.a.Dropdown,
							rowClassName: Re.a.DropdownRow,
							rowSelectedClassName: Re.a.DropdownRowSelected,
							wrapperClassName: Re.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: s,
							stateSortClassName: Re.a.StateSort
						}))
					}
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: s,
						sort: n,
						sortOptions: r,
						timeSort: a
					} = this.props, c = !t && Ae.has(n), d = Be.has(n), l = r.filter(e => !Be.has(e)), m = r.filter(e => Be.has(e) && e !== n);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(q, Fe({}, this.props, {
						buttonClassName: Re.a.DropdownButton,
						className: Object(i.a)(Re.a.SortDropdown, e),
						rowClassName: Re.a.DropdownRow,
						rowIconClassName: Re.a.DropdownRowIcon,
						rowSelectedClassName: Re.a.DropdownRowSelected,
						showTitle: !1
					})), o.a.createElement("div", {
						className: Object(i.a)(Re.a.SortButtons, e)
					}, l.map(this.renderSort)), d && this.renderSort(n), c && o.a.createElement(Pe, {
						baseUrl: this.getSortUrl(n),
						buttonClassName: Re.a.DropdownButton,
						className: Re.a.TimeSort,
						dropdownClassName: Re.a.Dropdown,
						listingSort: n,
						onChange: s,
						rowClassName: Re.a.DropdownRow,
						rowSelectedClassName: Re.a.DropdownRowSelected,
						timeSort: a || h.Tb,
						wrapperClassName: Re.a.DropdownSortWrapper
					}), m.length > 0 && o.a.createElement(q, Fe({}, this.props, {
						className: Object(i.a)(Re.a.SortOverflow, e),
						dropdownClassName: Re.a.Dropdown,
						dropdownId: De,
						rowClassName: Re.a.DropdownRow,
						rowIconClassName: Re.a.DropdownRowIcon,
						rowSelectedClassName: Re.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: m
					}), o.a.createElement("button", {
						className: Re.a.SortOverflowButton,
						id: De
					}, o.a.createElement(Me.a, null))))
				}
			}
			var Ve = We(Object(r.b)(He)(Object(d.c)(Ue))),
				Ge = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				ze = s.n(Ge);
			const Ke = Object(l.t)({
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				qe = Object(r.b)(null, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						updateSortPreference: (t, n) => {
							if (s) {
								const o = Object(a.c)({
									sort: t,
									timeSort: n
								});
								e(Object(c.I)(s, o))
							}
						}
					}
				});
			class Je extends o.a.Component {
				constructor() {
					super(...arguments), this.blurListingBroadcast = () => {
						m.a.setState({
							isListingFocused: !1
						})
					}, this.focusListingBroadcast = () => {
						m.a.setState({
							isListingFocused: !0
						})
					}, this.updateTimeSort = e => {
						this.props.updateSortPreference(this.props.sort, e)
					}
				}
				render() {
					const {
						baseUrl: e,
						className: t,
						countrySort: s,
						disabled: n = !1,
						isProfilePage: r,
						sort: a,
						sortOptions: c,
						subredditId: d,
						timeSort: l,
						updateSortPreference: m
					} = this.props;
					return o.a.createElement("div", {
						className: Object(i.a)(ze.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, o.a.createElement(Ve, {
						baseUrl: e,
						disabled: n,
						geopopularSort: s,
						onChange: m,
						onTimeSortChange: this.updateTimeSort,
						sort: a,
						sortOptions: c,
						timeSort: l
					}), !r && o.a.createElement(p.a, {
						className: ze.a.LayoutSwitch,
						subredditId: d
					}))
				}
			}
			t.a = Ke(qe(Object(d.c)(Je)))
		},
		"./src/reddit/components/GiveAwardTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_17AlFvm1kWw8NYe0FZKlMB",
				newBadge: "_18TPfQgPhTmXJ8270Nc5nM",
				text: "_26N1OuVJykHlztxQkPEfqb"
			}
		},
		"./src/reddit/components/LargePost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1RYN-7H8gYctjOQeL8p2Q7",
				topCompactPost: "_34QdMmLlbOcjhKm_jp-r3s",
				bottomCompactPost: "_2IWrSJK7OQ27rTgV_N2Zu4",
				backgroundWrapper: "_11R7M_VOgKO1RJyRSRErT3",
				isEvent: "_3js7RHbLSHKV13qUFCVIhb",
				flatListContainer: "_1ixsU4oQRnNfZ91jhBU74y",
				noProposal: "_3KYCJ3N4w1YmvpFMo_3zcn",
				postMediaWrapper: "STit0dLageRsa2yR4te_b",
				postTitle: "_3wiKjmhpIpoTE2r5KCm2o6",
				proposal: "_2dkCPUHQTdBWU2B0dYnkRb",
				mHasNotVoted: "_5iUKicC_Y0zWFXvBBtVQJ",
				mGAPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mGaPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mPollIsClosed: "_3sj79JhIvASSGVklMeKgTl",
				chain: "_39yVNiqPz4VPgNZTlpA5fx",
				adLinkWrapper: "_115kZaIAhrTbhLHOXtz01X",
				adsGalleryDisplayLink: "_3g19_IiwClMjxmNOrShwZw",
				horizontalVotes: "uFwpR-OdmueYZxdY_rEDX"
			}
		},
		"./src/reddit/components/LargePost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				c = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				d = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				l = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				m = s("./src/reddit/actions/inFeedChaining.ts"),
				p = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				h = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/models/Post/index.ts"),
				f = s("./src/reddit/models/Vote/index.ts"),
				g = s("./src/reddit/selectors/activeModalId.ts"),
				v = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				O = s("./src/reddit/selectors/inFeedChaining.ts"),
				C = s("./src/reddit/selectors/moderatorPermissions.ts"),
				E = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/lib/ads/index.ts"),
				w = s("./src/lib/classNames/index.ts"),
				k = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				j = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				P = s("./src/reddit/components/AwardBadges/index.tsx"),
				S = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				I = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				N = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				T = s("./src/reddit/components/Flatlist/index.tsx"),
				M = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				L = s("./src/reddit/components/ModModeReports/index.tsx"),
				R = s("./src/reddit/components/ModModeReports/helpers.ts"),
				F = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				A = s("./src/reddit/components/PostContainer/index.tsx"),
				B = s("./src/reddit/components/PostLeftRail/index.tsx"),
				D = s("./src/reddit/components/PostMedia/index.tsx"),
				W = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				H = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				U = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				V = s.n(U);
			const {
				fbt: G
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var z = () => o.a.createElement("div", {
					className: V.a.container
				}, o.a.createElement(H.a, {
					className: V.a.pinnedIcon
				}), o.a.createElement("span", {
					className: V.a.metaText
				}, G._("pinned by moderators", null, {
					hk: "1qU8t4"
				}))),
				K = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				q = s("./src/reddit/components/PostTitle/index.tsx"),
				J = s("./src/reddit/components/PostTopLine/index.tsx"),
				X = s("./src/reddit/components/SourceLink/index.tsx"),
				Z = s("./src/reddit/constants/experiments.ts"),
				Q = s("./src/reddit/contexts/InsideOverlay.tsx"),
				Y = s("./src/reddit/contexts/PageLayer/index.tsx"),
				$ = s("./src/reddit/helpers/isCrosspost.ts"),
				ee = s("./src/reddit/helpers/postEvent.ts"),
				te = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				se = s("./src/reddit/helpers/chooseVariant/index.ts"),
				ne = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				oe = s("./src/reddit/selectors/experiments/econ/predictions.ts");
			const re = Object(i.a)(E.U, e => e.some(ne.d)),
				ie = Object(i.a)(re, e => e),
				ae = (e, t) => Object(se.c)(e, {
					experimentName: Z.Y,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && ie(e, {
							listingKey: s,
							predictionsEnabled: Object(oe.a)(e)
						})
					}
				});
			var ce = s("./src/reddit/selectors/postFlair.ts"),
				de = s("./src/reddit/components/PostTopMeta/index.tsx"),
				le = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				me = s.n(le),
				pe = s("./src/reddit/components/LargePost/index.m.less"),
				ue = s.n(pe);
			const be = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(E.U)(e, {
						listingKey: s,
						predictionsEnabled: Object(oe.a)(e)
					}) : void 0
				},
				he = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(E.H)(e, {
						listingKey: s,
						predictionsEnabled: Object(oe.a)(e)
					}) : void 0
				},
				xe = Object(r.b)(() => Object(i.c)({
					autoplayPref: y.b,
					activeModalId: g.a,
					currentUser: y.i,
					hideNSFWPref: y.A,
					flairStyleTemplate: Y.R,
					isCurrentUserProfilePost: E.k,
					isLoggedIn: y.I,
					isActive: E.j,
					isPostChainDismissed: O.c,
					isPostChained: O.d,
					listingBelowVariant: te.b,
					imageGalleryCurrentItem: E.i,
					moderatorPermissions: C.i,
					modModeEnabled: Y.P,
					post: E.O,
					posts: be,
					postHeightVariant: ae,
					postIds: he,
					showEditFlair: ce.a,
					showAwardsPlaque: v.a,
					subredditOrProfile: E.bb,
					userIsOp: y.kb
				}), (e, t) => {
					let {
						listingKey: s,
						listingName: n,
						postId: o
					} = t;
					return {
						chainPost: () => {
							n && s && e(Object(m.d)({
								listingKey: s,
								listingName: n,
								postId: o
							}))
						},
						handleVote: t => {
							const s = t === f.a.upvoted ? Object(p.S)(o) : Object(p.q)(o);
							e(s)
						},
						onIgnoreReports: () => e(Object(p.Q)(o)),
						onOpenReportsDropdown: t => e(Object(u.h)({
							tooltipId: t
						}))
					}
				}),
				fe = o.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						chainPost: n,
						className: r,
						currentUser: i,
						eventFactory: m,
						flairStyleTemplate: p,
						forceLoadMedia: u,
						hideNSFWPref: f,
						hostPostId: g,
						imageGalleryCurrentItem: v,
						inSubredditOrProfile: O = !1,
						isCommentsPage: C,
						isCurrentUserProfilePost: E,
						isFrontpage: y,
						isGalleryTileLayoutDefault: H,
						isLoggedIn: U,
						isOverlay: V,
						isPostChainDismissed: G,
						isPostChained: Q,
						isTopicPage: Y,
						listingBelowVariant: te,
						listingKey: se,
						listingName: ne,
						moderatorPermissions: oe,
						modModeEnabled: re,
						onClickPost: ie,
						onIgnoreReports: ae,
						onOpenReportsDropdown: ce,
						post: le,
						postHeightVariant: pe,
						scrollerItemRef: be,
						shouldShowGalleryTileOption: he,
						showAwardsPlaque: xe,
						showEditFlair: fe,
						subredditOrProfile: ge,
						userIsOp: ve,
						isActionBarAnimationEnabled: Oe,
						postId: Ce
					} = e, Ee = !!e.redditStyle || !!e["data-redditstyle"], ye = Ee ? void 0 : p, _e = Object(d.a)(oe), we = re && _e, ke = Object(a.a)(oe), je = Object(c.a)(oe), Pe = Object(R.c)(le), Se = !!le.media && le.media.type === h.o.RTJSON, Ie = ve && Se, Ne = s ? s - B.a : void 0, Te = !(y && U || Y), Me = (e => e === Z.lc.OnlyTitles)(pe) && !Object($.a)(le), Le = (e => e === Z.lc.MediumHeight)(pe) && !Object($.a)(le), Re = (e => {
						const {
							post: t,
							postIds: s,
							posts: n
						} = e;
						if (!Object(x.k)(t)) return;
						const o = s && 0 === s.indexOf(t.id),
							r = s && 1 === s.indexOf(t.id),
							i = n && n[1] && Object(x.k)(n[1]);
						return {
							hasTopCompactPostStyles: o && i,
							hasBottomCompactPostStyles: r,
							showPinnnedHeader: o
						}
					})(e), Fe = !!te && !Object(Z.ed)(te), Ae = (!O || Fe) && !le.isSponsored, Be = Object(_.s)(le, v), {
						source: De
					} = Be, We = o.a.createElement(A.a, {
						className: Object(w.a)(ue.a.container, r, me.a.largeAndMediumPostStyles, me.a.largeAndMediumActiveStyles, Object(l.a)(e), {
							[me.a.mUseRedditTheme]: Ee,
							promotedvideolink: le.isSponsored && !(le.media && h.a.has(le.media.type)),
							[ue.a.topCompactPost]: Re && Re.hasTopCompactPostStyles,
							[ue.a.bottomCompactPost]: Re && Re.hasBottomCompactPostStyles
						}),
						isOverlay: V,
						style: Object(l.b)(e.flairStyleTemplate),
						post: le,
						onClick: ie,
						onPostContentClick: n,
						eventFactory: m
					}, o.a.createElement(K.a, {
						model: le,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: ye,
						redditStyle: Ee,
						subreddit: ge,
						isActionBarAnimationEnabled: Oe,
						postId: Ce
					}), o.a.createElement(F.a, {
						className: Object(w.a)(ue.a.backgroundWrapper, {
							[ue.a.isEvent]: Object(ee.a)(le)
						}),
						"data-click-id": "background",
						flairStyleTemplate: ye,
						post: le,
						redditStyle: Ee
					}, o.a.createElement(N.a, {
						post: le
					}), Re && Re.showPinnnedHeader && o.a.createElement(z, null), o.a.createElement(J.a, {
						className: ue.a.postTopLine,
						hideAwards: xe,
						hideNSFWPref: f,
						hostPostId: g,
						iconClassName: ue.a.postTopLineIcon,
						inSubredditOrProfile: O,
						isCommentsPage: !!C,
						isCompactPinnedPost: !!Re,
						isCurrentUserProfilePost: E,
						isOverlay: !!V,
						isTopicPage: !!Y,
						listingKey: se,
						post: le,
						shouldShowSubscribeButton: Te,
						showSubreddit: Ae,
						showSubredditIcon: !0,
						subredditOrProfile: ge
					}), o.a.createElement(q.c, {
						className: ue.a.postTitle,
						post: le,
						redditStyle: Ee,
						size: q.b.Large,
						titleColor: ye && ye.postTitleColor,
						isOverlay: V
					}), le.source && !le.isSponsored && !(le.media && Object(h.H)(le.media)) && o.a.createElement(X.a, {
						className: ue.a.sourceLink,
						post: le
					}), o.a.createElement("div", {
						className: ue.a.postMediaWrapper
					}, !Re && o.a.createElement(D.a, {
						isGalleryTileLayoutDefault: H,
						isListing: !0,
						isMediumHeight: Le,
						isNotCardView: !!V,
						isTitleOnly: Me,
						showCentered: !0,
						flairStyleTemplate: ye,
						post: le,
						availableWidth: Ne,
						shouldLoad: u,
						scrollerItemRef: be,
						autoplayPref: t,
						shouldShowGalleryTileOption: he
					})), le.isSponsored && De && De.url && o.a.createElement(k.a, {
						className: ue.a.adLinkWrapper
					}, o.a.createElement(j.a, {
						post: le,
						adLinkContent: Be
					})), re && _e && Pe && o.a.createElement(L.a, {
						onIgnoreReports: ae,
						reportable: le
					}), o.a.createElement(M.d, {
						postId: le.id
					}), xe && o.a.createElement(P.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: !1,
						thing: le,
						tooltipType: V ? de.c.Lightbox : void 0
					}), o.a.createElement("div", {
						className: ue.a.flatListContainer
					}, o.a.createElement(S.a, {
						className: ue.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: ye,
						model: le,
						onVoteClick: e.handleVote
					}), o.a.createElement(T.c, {
						currentUser: i,
						hasModFlairPerms: ke,
						hasModFullPerms: je,
						hasModPostPerms: _e,
						hostPostId: g,
						isActionBarAnimationEnabled: Oe,
						isLargePost: !0,
						isOverlay: !!V,
						listingKey: se,
						modModeEnabled: re,
						onIgnoreReports: ae,
						onOpenReportsDropdown: ce,
						post: le,
						showEditPost: Ie,
						showEditFlair: fe,
						useFlatlistBreakpoints: Object(W.h)({
							editPost: !1,
							save: !we,
							hide: !1,
							report: !1
						})
					}))));
					return o.a.createElement(b.b, null, We, Q && !G && o.a.createElement(I.a, {
						className: ue.a.chain,
						listingKey: se,
						listingName: ne,
						postId: le.id
					}))
				});
			t.default = xe(Object(Q.b)(fe))
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2cB6ysPhgaYtknebHcCXGH",
				container: "_2cB6ysPhgaYtknebHcCXGH",
				Component: "qQD1kUtHq2K4gyBqJrEnF",
				component: "qQD1kUtHq2K4gyBqJrEnF",
				"m-consider-sidebar": "gd0BrpRBoY73xB5YwvDWU",
				mConsiderSidebar: "gd0BrpRBoY73xB5YwvDWU"
			}
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/constants/componentSizes.ts"),
				d = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/constants/screenWidths.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				u = s.n(p),
				b = s("./src/lib/lessComponent.tsx");
			const h = Object(m.t)(),
				x = Object(i.c)({
					layout: m.N
				}),
				f = Object(r.b)(x);
			class g extends o.a.Component {
				constructor(e) {
					super(e), this.onClickIcon = e => {
						if (void 0 === this.state.left) {
							const e = this.ref.offsetLeft;
							this.setState({
								left: e
							})
						}
					}, this.onMouseEnter = () => {
						this.state.mouseInside || this.setState({
							mouseInside: !0
						})
					}, this.onMouseLeave = () => {
						this.state.mouseInside && this.setState({
							left: void 0,
							mouseInside: !1
						})
					}, this.ref = null, this.state = {
						left: void 0,
						mouseInside: !1
					}
				}
				componentWillReceiveProps(e) {
					0 !== e.offsetLeft - this.props.offsetLeft && (this.noTransition = !0)
				}
				componentDidUpdate() {
					this.noTransition && (this.noTransition = !1)
				}
				getDynamicStyleTags() {
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n          .".concat(u.a.Component, " {\n            --layoutNavigation-considerateNav-offsetLeft: ").concat(this.props.offsetLeft, "px;\n          }\n        ")
						}
					}), this.getLargeLayoutStyle())
				}
				getLargeLayoutStyle() {
					const e = this.props.offsetLeft + 2 * c.m + c.q + c.r,
						t = l.a - e,
						s = c.g - t,
						n = l.a + s + (this.props.bladeOpen ? c.a : 0);
					return this.props.layout !== d.g.Large ? null : o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n            @media (min-width: ".concat(n, "px) {\n              .").concat(u.a.Component, " {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ").concat(c.g + c.q + c.r, "px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(c.r, "px) / 2);\n              }\n\n              .").concat(u.a.Component, ".").concat(u.a["m-consider-sidebar"], " {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(c.g + c.q + c.r, "px) / 2);\n              }\n            }\n          ")
						}
					})
				}
				render() {
					const e = Object(a.a)(this.props.className, u.a.Component, {
						[u.a["m-consider-sidebar"]]: this.props.considerSidebar
					});
					return o.a.createElement("div", {
						className: u.a.Container
					}, o.a.createElement("div", {
						className: e,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseEnter,
						ref: e => this.ref = e,
						style: {
							left: this.state.left || void 0,
							transition: this.noTransition ? "initial" : void 0
						}
					}, this.getDynamicStyleTags(), this.props.render(this.onClickIcon)))
				}
			}
			t.a = h(f(b.a.wrapped(g, "Component", u.a)))
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "b", (function() {
				return f
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				c = s("./src/reddit/icons/svgs/Best/index.tsx"),
				d = s("./src/reddit/icons/svgs/Controversial/index.tsx"),
				l = s("./src/reddit/icons/svgs/Hot/index.tsx"),
				m = s("./src/reddit/icons/svgs/New/index.tsx"),
				p = s("./src/reddit/icons/svgs/Rising/index.tsx"),
				u = s("./src/reddit/icons/svgs/Top/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/index.m.less"),
				h = s.n(b);
			const x = {
				[i.O.BEST]: c.a,
				[i.O.HOT]: l.a,
				[i.O.NEW]: m.a,
				[i.O.CONTROVERSIAL]: d.a,
				[i.O.TOP]: u.a,
				[i.O.RISING]: p.a,
				[i.O.AWARDED]: a.a
			};

			function f(e) {
				let {
					className: t,
					sort: s
				} = e;
				const n = x[s];
				return n ? o.a.createElement(n, {
					className: Object(r.a)(t, h.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/ListingSort/index.m.less": function(e, t, s) {
			e.exports = {
				Dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				DropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				dropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				Title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				Row: "_1gYorLdXyKMUS-i9loCkHd",
				row: "_1gYorLdXyKMUS-i9loCkHd",
				SortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				sortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				isDisabled: "_1BlN3qzijbBTtkKxs6CX-N",
				DropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				dropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				ListingSort: "_1oAH8WzvQU6SeYEsM1msMu",
				listingSort: "_1oAH8WzvQU6SeYEsM1msMu"
			}
		},
		"./src/reddit/components/MiniCardPost/Flatlist/index.m.less": function(e, t, s) {
			e.exports = {
				flatlistContainer: "_3TV1zxvLEbF8phHfZ17hyU",
				shareIcon: "_2-No1ECt3Twm8oRh3GhL5T",
				shareMenu: "_1Y9kO8WxKheHpQbgAgYk9P",
				shareText: "_3ZNfZZMmSFZUWWm-nHK327",
				HorizontalVotes: "c9IwhuiqPbgYHi-fLlAUH",
				horizontalVotes: "c9IwhuiqPbgYHi-fLlAUH",
				score: "_3O9hIPB_M3zadlrD7rXaEG",
				ShareButton: "_3VIaRwebVBflQjPct1Wz6l",
				shareButton: "_3VIaRwebVBflQjPct1Wz6l"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_35Bx3s8VlFspHwPlg1MaHt",
				subredditNameLink: "_20yDd2SHTuiJkQnTV4zehJ",
				subredditIcon: "_32Ni_aGBoPzRxNSy5eC_ck",
				CrosspostIcon: "y4hzYjyQqdKpwuDyNnLeW",
				crosspostIcon: "y4hzYjyQqdKpwuDyNnLeW"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				l = s("./src/reddit/helpers/name/index.ts"),
				m = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				p = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				u = s.n(p);
			const b = s("./src/lib/lessComponent.tsx").a.wrapped(m.a, "CrosspostIcon", u.a);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: o,
					post: m,
					subredditOrProfile: p
				} = e;
				return r.a.createElement("div", {
					className: Object(i.a)(u.a.container, t)
				}, r.a.createElement(d.a, {
					className: u.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: p.url
				}, r.a.createElement(c.b, {
					className: u.a.subredditIcon,
					shouldHideNsfwIcon: o,
					subredditOrProfile: p
				}), r.a.createElement("span", null, p.displayText)), ((e, t) => {
					if (t) return r.a.createElement("div", {
						role: "img",
						"aria-label": n.fbt._("Crossposted by{author}from{community}", [n.fbt._param("author", Object(l.d)(e)), n.fbt._param("community", t.displayText)], {
							hk: "2OZoR0"
						})
					}, r.a.createElement(b, null))
				})(m.author, s), p && p.isQuarantined && r.a.createElement(a.a, null))
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1HoOlmppFDBC4s5XWY-Qcd",
				thumbnail: "_1XZerRCUnHmbtEN1gqPwnw",
				thumbnailContainer: "_3fS9xUAmm4zWkzfM1ce7Jk",
				thumbnailLinkIcon: "_2JCMpuchwaEmL9S0QsJ9Ok",
				thumbnailLinkText: "_2vJWD7kgxbAQRGL328NxHg",
				thumbnailOutboundLinkIcon: "_4GTpE-l9TNXVeix3ZOE-_"
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Thumbnail/index.tsx"),
				a = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				c = s.n(a);

			function d(e) {
				const {
					source: t
				} = e.post;
				return o.a.createElement("div", {
					className: Object(r.a)(c.a.container, e.className)
				}, o.a.createElement(i.a, {
					className: Object(r.a)(c.a.thumbnail, e.thumbnailClassName),
					containerClassName: Object(r.a)(c.a.thumbnailContainer, e.thumbnailContainerClassName),
					linkIconClassName: Object(r.a)(c.a.thumbnailLinkIcon, e.thumbnailLinkIconClassName),
					linkTextClassName: c.a.thumbnailLinkText,
					outboundLinkIconClassName: c.a.thumbnailOutboundLinkIcon,
					post: e.post,
					showContentType: e.showPlaceholderContentType,
					templatePlaceholderImage: e.templatePlaceholderImage,
					text: t ? t.url : "",
					usePreview: e.usePreview
				}))
			}
		},
		"./src/reddit/components/MiniCardPost/index.m.less": function(e, t, s) {
			e.exports = {
				flexSpacer: "_3FMwep96W9D-wkC9u2Pc0L",
				backgroundWrapper: "_2yVioz8mzc0YBV2JyNXzRj",
				innerContainer: "_3mrITcnODXcvMf9oonBXeD",
				metaLine: "_20xUo-97VDWkydk8rn74dR",
				media: "_1qlC_L_v_Aher9NBsvBIMR",
				mediaWrapper: "_1UmG626eNsebZt_eyKdDL4",
				postTitleCompact: "_3wSK3_gZiuaUZtqPKu9z3M",
				mediaImageBox: "Xqhz61TRPUo_ek11O2hcV",
				mediaImageBoxContentImage: "_2t6Z9GgOnrWn2b5Ndv_T5K",
				postContainer: "_3Ud8ZDEFc0kXFg6R9KhDPS"
			}
		},
		"./src/reddit/components/ModActionsMenu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				d = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				l = s("./src/reddit/selectors/tooltip.ts");
			const m = Object(i.c)({
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
						toggleDropdown: () => e(Object(a.h)({
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
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/ModModeReports/index.m.less"),
				c = s.n(a);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = i.a.div("Text", c.a), m = i.a.div("Placeholder", c.a), p = () => r.a.createElement(m, null, r.a.createElement(l, null, d._("Loading reports…", null, {
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
			var n, o, r, i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
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
					[a.a.Approve]: o.Approve,
					[a.a.Remove]: o.Remove,
					[a.a.Spam]: o.Spam,
					[a.a.Flair]: o.Flair
				},
				m = e => {
					const t = l[e.flatlistItem],
						s = d.a[e.breakpointType],
						n = d.a[t],
						o = e.isCompact ? d.a[r.Compact] : d.a[r.Default];
					return Object(i.a)(s, n, o)
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
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				b = s("./src/reddit/components/ModModeReports/helpers.ts"),
				h = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				x = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				f = s("./src/reddit/constants/postLayout.ts"),
				g = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				v = s("./src/reddit/helpers/trackers/post.ts"),
				O = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				C = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				E = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				y = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				_ = s("./src/reddit/selectors/activeModalId.ts"),
				w = s("./src/reddit/selectors/moderatorPermissions.ts"),
				k = s("./src/reddit/selectors/postFlair.ts"),
				j = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				P = s("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				S = s("./src/reddit/components/ModToolsFlatlist/index.m.less"),
				I = s.n(S);
			const N = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return Object(P.b)({
						breakpointType: P.a.HideIfVWSmaller,
						flatlistItem: e,
						isCompact: t
					})
				},
				T = Object(i.b)(() => Object(a.c)({
					activeModalId: _.a,
					canEditFlair: (e, t) => {
						let {
							post: s
						} = t;
						return Object(k.a)(e, {
							postId: s.id
						})
					},
					moderatorPermissions: (e, t) => Object(w.i)(e, {
						postId: t.post.id
					})
				}), (e, t) => {
					let {
						post: s
					} = t;
					return {
						onApprovePost: () => e(Object(m.m)(s.id)),
						onOpenPostModModeDropdown: t => e(Object(p.h)({
							tooltipId: t
						})),
						onRemovePost: () => e(Object(m.K)(s.id, !1)),
						onSpamPost: () => e(Object(m.K)(s.id, !0)),
						onFlairPost: t => () => e(Object(l.i)(t))
					}
				});
			t.a = T(e => {
				const {
					canEditFlair: t,
					className: s,
					isOverlay: i,
					layout: a,
					moderatorPermissions: l,
					modModeEnabled: m,
					onApprovePost: p,
					onFlairPost: _,
					onRemovePost: w,
					onSpamPost: k,
					post: P,
					sendEvent: S,
					showIconsOnly: T
				} = e, M = Object(g.a)(l), L = Object(b.b)(P), R = !(!P.approvedBy || !L), F = Object(h.b)(P.id, i), A = M && m && !P.isSponsored, B = t && m;
				let D, W, H;
				T || (D = ((e, t) => e ? n.fbt._("reapprove", null, {
					hk: "OJvB1"
				}) : t ? n.fbt._("approved", null, {
					hk: "2bWAFI"
				}) : n.fbt._("approve", null, {
					hk: "2DIHcM"
				}))(R, P.approvedBy), W = ((e, t) => e ? t === d.k ? n.fbt._("Confirm removal", null, {
					hk: "1t5tKM"
				}) : n.fbt._("removed", null, {
					hk: "35ZTch"
				}) : n.fbt._("remove", null, {
					hk: "3LWMcS"
				}))(P.isRemoved, P.bannedBy), H = (e => e ? n.fbt._("spammed", null, {
					hk: "3GPrkZ"
				}) : n.fbt._("spam", null, {
					hk: "3ebJLg"
				}))(P.isSpam));
				const U = !i && a === f.g.Compact;
				return r.a.createElement("div", {
					className: Object(c.a)(I.a.container, s)
				}, A && r.a.createElement(o.Fragment, null, r.a.createElement(x.b, {
					className: N(j.a.Approve, U),
					key: "approveButton",
					text: D,
					disabled: !!P.approvedBy && !L,
					onClick: () => {
						p(), S(Object(v.f)(P.id, "approve"))
					}
				}, r.a.createElement(O.a, null)), r.a.createElement(x.d, {
					className: N(j.a.Remove, U),
					key: "removeButton",
					text: W,
					disabled: P.isRemoved && P.bannedBy !== d.k,
					onClick: () => {
						w(), P.isRemoved && P.bannedBy === d.k ? S(Object(v.f)(P.id, "confirm_remove")) : S(Object(v.f)(P.id, "remove"))
					}
				}, r.a.createElement(C.a, null)), r.a.createElement(x.d, {
					className: N(j.a.Spam, U),
					key: "removeSpamButton",
					text: H,
					disabled: P.isSpam,
					onClick: () => {
						k(), S(Object(v.f)(P.id, "spam"))
					}
				}, r.a.createElement(E.a, null))), B && r.a.createElement(x.c, {
					className: N(j.a.Flair, U),
					key: "tagButton",
					onClick: () => {
						_(F)(), S(Object(v.f)(P.id, "post_flair_picker"))
					}
				}, r.a.createElement(y.a, null)), r.a.createElement(u.f, {
					postId: P.id
				}))
			})
		},
		"./src/reddit/components/ModerationPrompts/Prompt.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/actions/reportFlow.ts"),
				l = s("./src/reddit/components/Popup/index.tsx"),
				m = s("./src/reddit/components/Popup/Button.tsx"),
				p = s("./src/reddit/helpers/trackers/reportPrompt.ts"),
				u = s("./src/reddit/hooks/useTracking.ts"),
				b = s("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function h(e) {
				const {
					subredditName: t,
					post: s,
					isOverlay: h
				} = e, [x, f] = Object(o.useState)(!0), g = Object(b.b)(s.id, h), v = Object(i.c)(), O = Object(u.a)(), C = Object(b.a)(s, h), E = (e, n) => O(Object(p.a)(t, s.id, e, n));
				Object(o.useEffect)(() => {
					C && E("modal", "show")
				}, [C]);
				if (!C || !x) return null;
				const y = n.fbt._("Help r/{subredditName} mods", [n.fbt._param("subredditName", t)], {
					hk: "1rusN4"
				});
				return r.a.createElement(l.a, {
					id: g,
					title: y,
					onClose: () => {
						f(!1), E("close", "click"), v(Object(c.y)()), v(Object(c.J)({
							[s.id]: {
								moderationPrompt: void 0
							}
						}))
					},
					onClickOutside: () => {
						v(Object(c.y)())
					}
				}, r.a.createElement("p", null, n.fbt._("Report this post if it's breaking {=Reddit} or {=community} rules.", [n.fbt._param("=Reddit", r.a.createElement("a", {
					href: "https://www.redditinc.com/policies/content-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, n.fbt._("Reddit", null, {
					hk: "4g8g4O"
				}))), n.fbt._param("=community", r.a.createElement(a.a, {
					to: "/r/".concat(t, "/about/rules"),
					target: "_blank"
				}, n.fbt._("community", null, {
					hk: "1cy8jU"
				})))], {
					hk: "sfngx"
				})), r.a.createElement(m.a, {
					onClick: () => (f(!1), E("report", "click"), void v(Object(d.j)(s.id)))
				}, n.fbt._("Report", null, {
					hk: "4oVcnd"
				})))
			}
		},
		"./src/reddit/components/ModerationPrompts/Survey.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			var n, o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/reportFlow.ts"),
				m = s("./src/reddit/components/Popup/index.tsx"),
				p = s("./src/reddit/components/Popup/Button.tsx"),
				u = s("./src/reddit/helpers/trackers/reportPrompt.ts"),
				b = s("./src/reddit/hooks/useTracking.ts"),
				h = s("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function x(e) {
				const {
					subredditName: t,
					post: s,
					isOverlay: x
				} = e, [f, g] = Object(r.useState)(n.Survey), v = Object(h.b)(s.id, x), O = Object(a.c)(), C = Object(b.a)(), E = Object(h.a)(s, x), y = (e, n) => C(Object(u.b)(t, s.id, e, n));
				Object(r.useEffect)(() => {
					E && y("modal", "show")
				}, [E]);
				const _ = e => {
					g(n.Closed), y("site" === e ? "breaks_reddit_rules" : "breaks_community_rules", "click"), O(Object(l.j)(s.id, void 0, e))
				};
				if (!E) return null;
				let w = null;
				const k = {
					id: v,
					title: o.fbt._("Why did you downvote this post?", null, {
						hk: "2tTiIx"
					}),
					onClose: () => {
						g(n.Closed), y("close", "click"), O(Object(d.y)())
					},
					onClickOutside: () => {
						O(Object(d.y)())
					}
				};
				switch (f) {
					case n.Survey:
						w = i.a.createElement(m.a, k, i.a.createElement("p", null, o.fbt._("Your answer helps r/ {subredditName} mods improve this community.", [o.fbt._param("subredditName", t)], {
							hk: "DNEel"
						})), i.a.createElement(p.a, {
							onClick: () => {
								g(n.OffTopic), y("off_topic", "click")
							}
						}, o.fbt._("It's off topic", null, {
							hk: "4iG26l"
						})), i.a.createElement(p.a, {
							onClick: () => {
								g(n.DontLike), y("dont_like", "click")
							}
						}, o.fbt._("I don't like it", null, {
							hk: "1jB1Mh"
						})), i.a.createElement(p.a, {
							onClick: () => {
								g(n.BreaksRules), y("breaks_rules", "click")
							}
						}, o.fbt._("It breaks the rules", null, {
							hk: "1yQBhi"
						})));
						break;
					case n.OffTopic:
						w = i.a.createElement(m.a, k, i.a.createElement("p", null, o.fbt._("Got it. Thanks for helping out this community.", null, {
							hk: "22pTV3"
						})));
						break;
					case n.DontLike:
						w = i.a.createElement(m.a, k, i.a.createElement("p", null, o.fbt._("Just a reminder, it’s not an official rule but it is considered improper Reddiquette to downvote an otherwise acceptable post because you don’t personally like it.", null, {
							hk: "3mRvPM"
						})));
						break;
					case n.BreaksRules:
						w = i.a.createElement(m.a, k, i.a.createElement("p", null, o.fbt._("Let us know if it breaks {=Reddit} or {=community} rules.", [o.fbt._param("=Reddit", i.a.createElement("a", {
							href: "https://www.redditinc.com/policies/content-policy",
							target: "_blank",
							rel: "noopener noreferrer"
						}, o.fbt._("Reddit", null, {
							hk: "1amvzD"
						}))), o.fbt._param("=community", i.a.createElement(c.a, {
							to: "/r/".concat(t, "/about/rules"),
							target: "_blank"
						}, o.fbt._("community", null, {
							hk: "2TnSrt"
						})))], {
							hk: "1mXxTX"
						})), i.a.createElement(p.a, {
							onClick: () => _("site")
						}, o.fbt._("It breaks Reddit rules", null, {
							hk: "3MxBm9"
						})), i.a.createElement(p.a, {
							onClick: () => _("community")
						}, o.fbt._("It breaks community rules", null, {
							hk: "3XbHan"
						})));
						break;
					case n.Closed:
				}
				return w
			}! function(e) {
				e[e.Survey = 0] = "Survey", e[e.OffTopic = 1] = "OffTopic", e[e.DontLike = 2] = "DontLike", e[e.BreaksRules = 3] = "BreaksRules", e[e.Closed = 4] = "Closed"
			}(n || (n = {}))
		},
		"./src/reddit/components/OverviewChronoComment/index.m.less": function(e, t, s) {
			e.exports = {
				commentOuterWrapper: "_1g70Ndz7edo5LA6hie1Gkt",
				commentWrapper: "_324SLny5spJ682AiI73uBO",
				isLast: "_2nq8DZns5TUNKoe0aDsW4K",
				isAwarded: "_3L-s9jSlG2xSayzJ_b7J1t",
				isNightmodeOn: "Cd5iGkxl9fzuGE1cWMHC4",
				isFirst: "q4WgOJAmvFRFKX_yrlG-1",
				commentSeparator: "_3H85Xyyv141qju7KQFQ_d5",
				commentContentWrapper: "_27uDfyCMhkucg8xWyoTLYp"
			}
		},
		"./src/reddit/components/OverviewChronoList/ListItem.m.less": function(e, t, s) {
			e.exports = {
				OverviewCommentPost: "_2mg6JuVCrcHWJkUQvZXFcZ",
				overviewCommentPost: "_2mg6JuVCrcHWJkUQvZXFcZ",
				ClassicPost: "OZOlqlxhdnIVuS5MQ5yMi",
				classicPost: "OZOlqlxhdnIVuS5MQ5yMi"
			}
		},
		"./src/reddit/components/OverviewChronoList/ListItem.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/ClassicPost/index.tsx"),
				i = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-redux/es/index.js")),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/constants/gold.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/components/CommentContainer/index.tsx"),
				u = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				b = s("./src/reddit/helpers/getClickInfo.ts"),
				h = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				x = s("./src/reddit/selectors/comments.ts"),
				f = s("./src/reddit/selectors/communityAwards.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/OverviewChronoComment/index.m.less"),
				O = s.n(v);
			const C = Object(i.b)(() => Object(a.c)({
				comment: x.n,
				isAwarded: (e, t) => {
					const s = Object(x.n)(e, t);
					return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(f.a)(e, t);
						return s && s.coinPrice >= c.g
					})
				},
				isNightmodeOn: g.T
			}), e => ({
				openPost: t => e(Object(m.C)(t))
			}));
			var E = Object(l.a)(C(e => {
					const {
						comment: t,
						commentId: s,
						first: n,
						isAwarded: r,
						isNightmodeOn: i,
						last: a,
						openPost: c,
						showModTools: l
					} = e;
					if (!t) return null;
					return o.a.createElement(p.a, {
						comment: t,
						onClick: (e, t) => {
							c({
								postOrComment: t,
								clickInfo: Object(b.a)(e),
								queryParams: {
									context: 3
								}
							})
						},
						style: {
							background: Object(h.e)(e)
						}
					}, o.a.createElement("div", {
						className: Object(d.a)(O.a.commentOuterWrapper, {
							[O.a.isLast]: a,
							[O.a.isAwarded]: r,
							[O.a.isNightmodeOn]: i
						})
					}, o.a.createElement("div", {
						className: Object(d.a)(O.a.commentWrapper, {
							[O.a.isFirst]: n
						})
					}, o.a.createElement("div", {
						className: O.a.commentSeparator
					}), t.parentId && o.a.createElement("div", {
						className: O.a.commentSeparator
					}), o.a.createElement("div", {
						className: O.a.commentContentWrapper
					}, o.a.createElement(u.a, {
						commentId: s,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: !0,
						showModTools: l,
						isExpanded: !0
					})))))
				})),
				y = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				_ = s("./src/reddit/contexts/PageLayer/index.tsx"),
				w = s("./src/reddit/helpers/isComment.ts"),
				k = s("./src/reddit/components/OverviewChronoList/ListItem.m.less"),
				j = s.n(k),
				P = s("./src/lib/lessComponent.tsx");

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var I = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const N = Object(_.t)({
					currentProfileName: _.h,
					isCommentsPage: _.w,
					isCommentPermalink: _.v,
					isProfilePostListing: _.I,
					pageLayer: e => e
				}),
				T = P.a.wrapped(y.a, "OverviewCommentPost", j.a),
				M = P.a.wrapped(r.default, "ClassicPost", j.a);
			t.a = N(e => {
				const {
					itemId: t,
					isFirstInCommentList: s,
					isLastInCommentList: n,
					allowModToolsUnderComments: r,
					height: i,
					width: a
				} = e, c = I(e, ["itemId", "isFirstInCommentList", "isLastInCommentList", "allowModToolsUnderComments", "height", "width"]);
				return Object(w.a)(t) ? s ? o.a.createElement(o.a.Fragment, null, o.a.createElement(T, S({}, c, {
					availableWidth: a,
					commentId: t
				})), o.a.createElement(E, {
					commentId: t,
					first: s,
					last: n,
					showModTools: r
				})) : o.a.createElement(E, {
					commentId: t,
					first: s,
					last: n,
					showModTools: r
				}) : o.a.createElement(M, S({}, c, {
					inSubredditOrProfile: !1
				}))
			})
		},
		"./src/reddit/components/OverviewChronoList/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_31Psg18W6Dm5EvcCqvaQm2",
				component: "_31Psg18W6Dm5EvcCqvaQm2",
				ComponentHasItems: "_1cKfMnE4GcGLgj5Xiz5PPb",
				componentHasItems: "_1cKfMnE4GcGLgj5Xiz5PPb"
			}
		},
		"./src/reddit/components/OverviewCommentPost/index.m.less": function(e, t, s) {
			e.exports = {
				overviewCommentPost: "_32w108aFIBi3H0DKCU4OI7",
				banned: "_3P8_MTWuehQOXRUhWBpwB0",
				reported: "_1Z7-lWgZwHw4sBG3rO44v7",
				InternalLink: "_31VWB3vSkv19o3I7RVE710",
				internalLink: "_31VWB3vSkv19o3I7RVE710",
				Wrapper: "_2otRz3OtuWajw1RleFDJ5P",
				wrapper: "_2otRz3OtuWajw1RleFDJ5P",
				Row: "_1InmLYfaOm6m9MZ8wKxM-0",
				row: "_1InmLYfaOm6m9MZ8wKxM-0",
				CommentIcon: "y05plmPkDK7RiRh8b3b8-",
				commentIcon: "y05plmPkDK7RiRh8b3b8-",
				TitleContainer: "_2ng_YqEhC3QLYqZyRIQ9qB",
				titleContainer: "_2ng_YqEhC3QLYqZyRIQ9qB",
				PostTitleContainer: "_13Ww4V9LL9wHYik5hp8VM4",
				postTitleContainer: "_13Ww4V9LL9wHYik5hp8VM4",
				PostTitle: "_2b_IHdM91weRNGmXfrTYvn",
				postTitle: "_2b_IHdM91weRNGmXfrTYvn",
				postTitleOutboundLink: "_3heiUGSIAJO43_Ertq1e2F",
				postTitleTitle: "_3gWN_jC4sfo4uQ61ZRgOO",
				PostTopMeta: "_3yzuVD_JNtr4EBJ_OesIvh",
				postTopMeta: "_3yzuVD_JNtr4EBJ_OesIvh",
				MetaSeparator: "_3RjYJMG6TaMnSwb88daQ7W",
				metaSeparator: "_3RjYJMG6TaMnSwb88daQ7W",
				postTopMetaMetaSeparator: "_2IhK-xvBLjMsX4HZ-T6j-W"
			}
		},
		"./src/reddit/components/OverviewCommentPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/controls/InternalLink/index.tsx"),
				p = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				u = s("./src/reddit/selectors/comments.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/components/PostContainer/index.tsx"),
				x = s("./src/reddit/components/PostTitle/index.tsx"),
				f = s("./src/reddit/components/PostTopMeta/index.tsx"),
				g = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				v = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				O = s.n(v),
				C = s("./src/reddit/components/OverviewCommentPost/index.m.less"),
				E = s.n(C);
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _ = d.a.wrapped(m.a, "InternalLink", E.a), w = d.a.div("Wrapper", E.a), k = d.a.div("Row", E.a), j = d.a.wrapped(g.a, "CommentIcon", E.a), P = d.a.div("TitleContainer", E.a), S = d.a.div("PostTitleContainer", E.a), I = d.a.wrapped(x.c, "PostTitle", E.a), N = d.a.wrapped(f.d, "PostTopMeta", E.a), T = d.a.wrapped(f.a, "MetaSeparator", E.a), M = Object(r.b)(() => Object(i.c)({
				comment: u.n,
				post: b.O,
				subredditOrProfile: b.bb
			})), L = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = e;
				if (s) return o.a.createElement(n.Fragment, null, o.a.createElement(T, null), o.a.createElement(N, {
					metaSeparatorClassName: E.a.postTopMetaMetaSeparator,
					post: t,
					showSub: !0,
					showTimestamp: !1,
					subredditOrProfile: s
				}))
			}, R = e => {
				const {
					comment: t,
					profileName: s
				} = e;
				if (!t) return null;
				const n = s || t.author;
				return o.a.createElement(_, {
					"data-click-id": "user",
					to: "/user/".concat(n, "/")
				}, n)
			};
			t.a = Object(c.a)(M(Object(l.c)(e => {
				const {
					className: t,
					eventFactory: s,
					onClickPost: n,
					post: r
				} = e;
				return o.a.createElement(h.a, {
					className: Object(a.a)(O.a.compactPostStyles, E.a.overviewCommentPost, {
						[E.a.banned]: !!e.post.bannedBy,
						[E.a.reported]: !e.post.bannedBy && !!e.post.numReports && e.post.numReports > 0
					}, t),
					post: r,
					onClick: n,
					eventFactory: s
				}, o.a.createElement(w, {
					style: {
						background: Object(p.e)(e)
					}
				}, o.a.createElement(k, null, o.a.createElement(j, null), o.a.createElement(P, null, y._("{postAuthor} commented on {postTitle} {postMeta}", [y._param("postAuthor", R(e)), y._param("postTitle", o.a.createElement(S, null, o.a.createElement(I, {
					outboundLinkClassName: E.a.postTitleOutboundLink,
					post: r,
					size: x.b.Small,
					titleClassName: E.a.postTitleTitle
				}))), y._param("postMeta", L(e))], {
					hk: "d6l8e"
				})))))
			})))
		},
		"./src/reddit/components/OverviewConversationsPost/Border/index.m.less": function(e, t, s) {
			e.exports = {
				border: "_1lhlKOukuHHzZKIlnXcHmQ",
				isFirst: "_2o6nV_ET0Jis6_EzEHx9K3",
				isLast: "_1C2mkyHj-MAuIndy8vJIU5"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/Border/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/OverviewConversationsPost/Border/index.m.less"),
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
			var d = function(e, t) {
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
					isFirst: t,
					isLast: s
				} = e, n = d(e, ["isFirst", "isLast"]);
				return o.a.createElement("div", c({
					className: Object(r.a)(a.a.border, {
						[a.a.isFirst]: t,
						[a.a.isLast]: s
					})
				}, n))
			}
		},
		"./src/reddit/components/OverviewConversationsPost/ExtraCommentsItem/index.m.less": function(e, t, s) {
			e.exports = {
				ExtraCommentsItemWrapper: "_3S95u6JHFnb4s3dszwei2-",
				extraCommentsItemWrapper: "_3S95u6JHFnb4s3dszwei2-",
				ExtraComments: "_35d97uauE52jtrUNWw8B4i",
				extraComments: "_35d97uauE52jtrUNWw8B4i",
				ExtraCommentsInteractive: "lQv8U3Ne_-BQ6fbAfxKIS",
				extraCommentsInteractive: "lQv8U3Ne_-BQ6fbAfxKIS"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less": function(e, t, s) {
			e.exports = {
				ProfileOwnerCommentWrapper: "_3CecFEZvC8MFSvLsfuVYUs",
				profileOwnerCommentWrapper: "_3CecFEZvC8MFSvLsfuVYUs",
				CommentContentWrapper: "hpOP1hjcTLrw1L2rfRtMP",
				commentContentWrapper: "hpOP1hjcTLrw1L2rfRtMP",
				Wrapper: "_2OpuabFjFVU3UZ4jcP58gJ",
				wrapper: "_2OpuabFjFVU3UZ4jcP58gJ",
				isFirst: "_3bYCCkSa6xxUYDEPgIa7w5",
				isLast: "_3TNQpNlZH2M4X50sedpaIG",
				isAwarded: "_2UgLKr67bDuCg6zs7UOCoN",
				isNightmodeOn: "_3ZqQTMfjWU3NV-dAfa8O9E",
				CommentSeparator: "_1mvcEtI04YyIVKsT-vUkiN",
				commentSeparator: "_1mvcEtI04YyIVKsT-vUkiN"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/times.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/constants/gold.ts"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				p = s("./src/reddit/components/CommentContainer/index.tsx"),
				u = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				b = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/helpers/getClickInfo.ts"),
				x = s("./src/reddit/selectors/comments.ts"),
				f = s("./src/reddit/selectors/communityAwards.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				O = s.n(v);
			const C = m.a.div("ProfileOwnerCommentWrapper", O.a),
				E = m.a.div("CommentContentWrapper", O.a),
				y = m.a.div("Wrapper", O.a),
				_ = m.a.div("CommentSeparator", O.a),
				w = Object(a.b)(() => Object(c.c)({
					comment: (e, t) => Object(x.n)(e, t),
					isAwarded: (e, t) => {
						const s = Object(x.n)(e, t);
						return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
							const s = Object(f.a)(e, t);
							return s && s.coinPrice >= d.g
						})
					},
					isNightmodeOn: g.T
				}), e => ({
					openPost: t => e(Object(b.C)(t))
				}));
			class k extends i.a.Component {
				render() {
					const {
						comment: e,
						commentId: t,
						depth: s,
						openPost: n,
						isAwarded: r,
						isFirst: a,
						isLast: c,
						isNightmodeOn: d,
						profileName: m,
						showModTools: u
					} = this.props, b = m === e.author ? j : P;
					return i.a.createElement(p.a, {
						comment: e,
						onClick: (e, t) => {
							n({
								postOrComment: t,
								clickInfo: Object(h.a)(e),
								queryParams: {
									context: 3
								}
							}), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, i.a.createElement(y, {
						className: Object(l.a)({
							[O.a.isFirst]: a,
							[O.a.isLast]: c,
							[O.a.isAwarded]: r,
							[O.a.isNightmodeOn]: d
						})
					}, o()(s + 1, e => i.a.createElement(_, {
						key: e
					})), i.a.createElement(E, null, b(t, m, u))))
				}
			}
			const j = (e, t, s) => i.a.createElement(C, null, P(e, t, s, !0, !0)),
				P = function(e, t, s) {
					let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
						o = arguments.length > 4 ? arguments[4] : void 0;
					return i.a.createElement(u.a, {
						commentId: e,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: n,
						showModTools: s,
						isExpanded: !!o
					})
				};
			t.a = w(k)
		},
		"./src/reddit/components/OverviewConversationsPost/index.m.less": function(e, t, s) {
			e.exports = {
				BackgroundWrapper: "_3aoyec8unb9DkDxSv2XOMX",
				backgroundWrapper: "_3aoyec8unb9DkDxSv2XOMX",
				ClassicPost: "tAHXx8uORoJlmgLFgqJEP",
				classicPost: "tAHXx8uORoJlmgLFgqJEP",
				OverviewCommentPost: "_1jbHcnuv4MQLOov7BuufdI",
				overviewCommentPost: "_1jbHcnuv4MQLOov7BuufdI",
				OverviewLargePost: "_3DVTWNXPKtpQAozvDhjI89",
				overviewLargePost: "_3DVTWNXPKtpQAozvDhjI89",
				OverviewConversationsPost: "_3KGXodqw9Ht3MoBpe8_gzB",
				overviewConversationsPost: "_3KGXodqw9Ht3MoBpe8_gzB"
			}
		},
		"./src/reddit/components/Popup/Button.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/Popup/index.m.less"),
				i = s.n(r);

			function a(e) {
				return o.a.createElement("button", {
					className: i.a.popupButton,
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
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/uuid/v4.js"),
				i = s.n(r),
				a = s("./src/reddit/hooks/useOnClickOutside.ts"),
				c = s("./src/reddit/components/Popup/index.m.less"),
				d = s.n(c);

			function l(e) {
				const {
					id: t = i()(),
					onClose: s,
					onClickOutside: n,
					title: r,
					children: c
				} = e;
				return Object(a.a)(t, n), o.a.createElement("div", {
					id: t,
					"aria-modal": !0,
					className: d.a.popup,
					role: "dialog",
					tabIndex: -1
				}, o.a.createElement("h3", {
					className: d.a.header
				}, o.a.createElement("span", {
					className: d.a.title
				}, r), o.a.createElement("button", {
					className: d.a.closeButton,
					onClick: s
				}, "✕")), c)
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
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
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
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: i,
					post: c,
					redditStyle: p,
					theme: u
				} = e, b = m(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return o.a.createElement("div", l({
					className: Object(r.a)(d.a.backgroundWrapper, s),
					style: Object(a.c)(n, e),
					onClick: i
				}, b), t)
			})
		},
		"./src/reddit/components/PostBadges/index.m.less": function(e, t, s) {
			e.exports = {
				adminIcon: "_1cje4rrmwL0yZgCOlGyBJ-",
				approveIcon: "_1knR9NIIXdSFC9IeFN11JL",
				automoderator: "_2etEb_0bRB9axAqF3uX28S",
				icon: "_3vju76MdF2FaGmELBeiJ_r",
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				p = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				u = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/isRemoved.ts"),
				x = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				f = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				g = s("./src/reddit/models/Post/index.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				O = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				C = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				E = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				y = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Report/index.tsx"),
				w = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				k = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				j = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				P = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				S = s("./src/reddit/components/PostBadges/index.m.less"),
				I = s.n(S);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const T = e => r.a.createElement("span", N({
					className: I.a.removalReason
				}, e), e.children),
				M = () => n.fbt._("Archived", null, {
					hk: "zv3q3"
				}),
				L = () => n.fbt._("Comments are locked", null, {
					hk: "8HjJ9"
				}),
				R = e => n.fbt._("Moderator of {community name}", [n.fbt._param("community name", e)], {
					hk: "nJqIB"
				}),
				F = () => n.fbt._("Stickied post", null, {
					hk: "3qSaBs"
				}),
				A = () => n.fbt._("Pinned post", null, {
					hk: "2oxErI"
				}),
				B = (e, t, s) => {
					const n = "PostBadges--".concat(e, "--").concat(t);
					return s ? "".concat(n, "--").concat(s) : n
				},
				D = Object(b.t)({
					isProfilePostListing: b.I,
					isSubreddit: b.K,
					pageLayer: e => e
				}),
				W = Object(a.c)({
					isPinned: (e, t) => {
						let {
							post: s
						} = t;
						return Object(v.u)(e, {
							postId: s.id
						})
					},
					modModeEnabled: b.P
				}),
				H = Object(i.b)(W, (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onOpenRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(l.f)({
						tooltipId: t
					}))
				}));
			t.a = D(H(e => {
				let {
					className: t,
					displayText: s,
					isSubreddit: i,
					inSubredditOrProfile: a,
					isCompactPinnedPost: l,
					isPinned: b,
					isProfilePostListing: v,
					modModeEnabled: S,
					onHideTooltip: D,
					onOpenRemovalReasonModal: W,
					onShowTooltip: H,
					post: U,
					tooltipType: V
				} = e;
				const G = {
						caretOnTop: !1
					},
					z = U.isRemoved && !U.modRemovalReason && !U.modNote && U.belongsTo.type === u.a.SUBREDDIT,
					K = B("Approve", U.id, V),
					q = B("Archived", U.id, V),
					J = B("Automod", U.id, V),
					X = B("Lock", U.id, V),
					Z = B("Mod", U.id, V),
					Q = B("Remove", U.id, V),
					Y = B("Report", U.id, V),
					$ = B("Spam", U.id, V),
					ee = B("Sticky", U.id, V),
					te = B("Pinned", U.id, V);
				return r.a.createElement("div", {
					className: t
				}, a && s && U.distinguishType === d.C.MODERATOR && r.a.createElement(o.Fragment, null, r.a.createElement(P.a, {
					className: I.a.modIcon,
					desc: R(s),
					id: Z,
					onMouseEnter: H(Z),
					onMouseLeave: D
				}), r.a.createElement(m.c, N({
					tooltipId: Z,
					text: R(s)
				}, G))), U.isArchived && r.a.createElement(o.Fragment, null, r.a.createElement(C.a, {
					className: I.a.archivedIcon,
					desc: M(),
					id: q,
					onMouseEnter: H(q),
					onMouseLeave: D
				}), r.a.createElement(m.c, N({
					tooltipId: q,
					text: M()
				}, G))), U.isLocked && r.a.createElement(o.Fragment, null, r.a.createElement(E.a, {
					className: I.a.lockIcon,
					desc: L(),
					id: X,
					onMouseEnter: H(X),
					onMouseLeave: D
				}), r.a.createElement(m.c, N({
					tooltipId: X,
					text: L()
				}, G))), i && Object(g.k)(U) && !l && r.a.createElement(o.Fragment, null, r.a.createElement(k.a, {
					className: I.a.stickyIcon,
					desc: F(),
					id: ee,
					onMouseEnter: H(ee),
					onMouseLeave: D
				}), r.a.createElement(m.c, N({
					tooltipId: ee,
					text: F()
				}, G))), v && b && r.a.createElement(o.Fragment, null, r.a.createElement(k.a, {
					className: I.a.stickyIcon,
					desc: A(),
					id: te,
					onMouseEnter: H(te),
					onMouseLeave: D
				}), r.a.createElement(m.c, N({
					tooltipId: te,
					text: A()
				}, G))), (U.isApproved || U.approvedBy) && r.a.createElement(o.Fragment, null, r.a.createElement(O.a, {
					className: I.a.approveIcon,
					desc: Object(x.a)(U),
					id: K,
					onMouseEnter: H(K),
					onMouseLeave: D
				}), r.a.createElement(m.c, N({
					tooltipId: K,
					text: Object(x.a)(U)
				}, G))), Object(h.a)(U) && r.a.createElement(o.Fragment, null, r.a.createElement(y.a, {
					className: I.a.removeIcon,
					desc: Object(x.c)(U),
					id: Q,
					onMouseEnter: H(Q),
					onMouseLeave: D
				}), z && r.a.createElement(p.a, {
					className: I.a.addRemovalReason,
					onClick: W,
					text: n.fbt._("Add a removal reason", null, {
						hk: "1YDo3"
					})
				}), (U.modRemovalReason || U.modNote) && r.a.createElement(T, {
					onMouseEnter: H(Q),
					onMouseLeave: D
				}, n.fbt._("Removal reason", null, {
					hk: "2DhKVZ"
				})), r.a.createElement(m.c, N({
					tooltipId: Q,
					text: Object(x.c)(U)
				}, G))), U.bannedBy && U.isSpam && r.a.createElement(o.Fragment, null, r.a.createElement(w.a, {
					className: I.a.spamIcon,
					desc: Object(x.e)(U),
					id: $,
					onMouseEnter: H($),
					onMouseLeave: D
				}), r.a.createElement(m.c, N({
					tooltipId: $,
					text: Object(x.e)(U)
				}, G))), ("AutoModerator" === U.approvedBy || "AutoModerator" === U.bannedBy) && r.a.createElement(o.Fragment, null, r.a.createElement(j.a, {
					className: Object(c.a)(I.a.automoderator, !!U.bannedBy && I.a.isRemoved),
					desc: x.b,
					id: J,
					onMouseEnter: H(J),
					onMouseLeave: D
				}), r.a.createElement(m.c, N({
					tooltipId: J,
					text: x.b
				}, G))), Object(f.a)(U) && !S && r.a.createElement(o.Fragment, null, r.a.createElement(_.a, {
					className: I.a.reportIcon,
					desc: Object(x.d)(U.numReports),
					id: Y,
					onMouseEnter: H(Y),
					onMouseLeave: D
				}), r.a.createElement(m.c, N({
					tooltipId: Y,
					text: Object(x.d)(U.numReports)
				}, G))))
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
				i = s("./src/lib/ads/index.ts"),
				a = s("./src/reddit/components/AdViewability/index.tsx"),
				c = s("./src/reddit/helpers/trackers/gallery.ts"),
				d = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = s("./src/reddit/hooks/useTracking.ts");
			var m = o.a.memo(e => {
					const t = Object(n.useRef)(null),
						s = Object(l.a)(),
						r = Object(n.useCallback)(t => {
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
					return Object(d.a)(t, r, i), o.a.createElement("div", {
						role: "presentation"
					}, o.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/connectors/PostViewable/index.ts"),
				b = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/selectors/media.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				f = s("./src/reddit/selectors/video.ts"),
				g = s("./src/lib/classNames/index.ts"),
				v = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				O = s("./src/reddit/components/PostContainer/index.m.less"),
				C = s.n(O);
			const E = Object(r.c)({
					basePixelMetadata: (e, t) => {
						let {
							post: s
						} = t;
						return Object(x.b)(e, s.id)
					},
					clickTrackingId: (e, t) => {
						let {
							post: s
						} = t;
						return s.id
					},
					currentIndex: (e, t) => {
						let {
							post: s
						} = t;
						return Object(h.a)(e, s.id)
					},
					buffering: (e, t) => {
						let {
							post: s
						} = t;
						return Object(f.a)(e, {
							postId: s.id
						})
					},
					playing: (e, t) => {
						let {
							post: s
						} = t;
						return Object(f.f)(e, {
							postId: s.id
						})
					},
					continuousViewingStartedAt: (e, t) => {
						let {
							post: s
						} = t;
						return Object(f.c)(e, {
							postId: s.id
						})
					},
					imageGalleryCurrentItem: (e, t) => {
						let {
							post: s
						} = t;
						return Object(x.i)(e, {
							postId: s.id
						})
					}
				}),
				y = Object(u.a)(E),
				_ = e => {
					const t = Object(v.d)(e.target, e.currentTarget),
						s = Object(v.b)(e.target, e.currentTarget, v.a.buttons);
					return "subreddit" !== t && s
				};
			class w extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: n,
						currentIndex: r,
						imageGalleryCurrentItem: d,
						makePostContainerId: l,
						post: p,
						onClick: u,
						onPostContentClick: h,
						sendEvent: x,
						style: f,
						ref: v
					} = this.props, O = o.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: f,
						ref: v,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && (e(() => u && u(s, p, t, d))(s), h && _(s) && h(s, p)), p.id && d) {
								const {
									source: e
								} = Object(i.s)(p, d);
								if (e && e.outboundUrl) {
									const t = r + 1;
									x(Object(c.c)(p.id, e.outboundUrl, t))
								}
							}
						},
						className: Object(g.a)(C.a.WrappedPost, n, "Post ".concat(p.id), {
							promotedlink: p.isSponsored
						}),
						id: l ? l(p.id) : p.id,
						tabIndex: -1,
						"data-testid": p.id
					}, s), E = !!p.media && p.media.type === b.o.VIDEO;
					return p.isSponsored || E ? o.a.createElement(a.a, {
						post: p,
						trackDisplay: !0
					}, O) : p.media && Object(b.F)(p.media) ? o.a.createElement(m, {
						postId: p.id
					}, O) : O
				}
			}
			t.a = y(Object(v.c)(Object(p.c)(w)))
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
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/asModal/index.tsx"),
				l = s("./src/lib/memoizeByReference/index.ts"),
				m = s("./src/reddit/actions/postCreation/general.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/keycodes.ts"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/controls/Input/index.tsx"),
				x = s("./src/reddit/icons/svgs/Close/index.tsx"),
				f = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				g = s("./src/reddit/icons/svgs/Search/index.tsx"),
				v = s("./src/reddit/layout/row/Inline/index.tsx"),
				O = s("./src/reddit/models/PostCreationForm/index.ts"),
				C = s("./src/reddit/selectors/postCollection.ts"),
				E = s("./src/lib/timeAgo/index.ts"),
				y = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				_ = s("./src/reddit/helpers/name/index.ts"),
				w = s("./src/reddit/models/Subreddit/index.ts"),
				k = s("./src/reddit/models/User/index.ts"),
				j = s("./src/reddit/selectors/subreddit.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				S = s("./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less"),
				I = s.n(S),
				N = s("./src/lib/lessComponent.tsx");
			const {
				fbt: T
			} = s("./node_modules/fbt/lib/FbtPublic.js"), M = N.a.div("Container", I.a), L = N.a.h2("PostTitle", I.a), R = N.a.div("MetaLine", I.a), F = N.a.span("SubredditName", I.a), A = N.a.time("InfoSpan", I.a), B = Object(c.c)({
				subreddit: (e, t) => {
					let {
						collection: {
							subredditId: s
						}
					} = t;
					return s ? Object(j.T)(e, {
						subredditId: s
					}) : void 0
				},
				user: P.i
			});
			class D extends i.a.PureComponent {
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
					} = this.props, o = t && Object(w.g)(t) && s ? Object(_.d)(Object(k.e)(s)) : t ? t.displayText : "", r = e.postIds.length;
					return i.a.createElement(M, {
						onClick: this.onClick,
						className: I.a.container
					}, i.a.createElement(L, {
						"data-redditstyle": !0
					}, e.title), i.a.createElement(R, {
						"data-redditstyle": !0
					}, o && i.a.createElement(F, {
						"data-redditstyle": !0
					}, o), o && i.a.createElement(y.b, null), i.a.createElement(A, null, T._({
						"*": "{number of posts} posts",
						_1: "1 post"
					}, [T._plural(r, "number of posts")], {
						hk: "1Uy96U"
					})), i.a.createElement(y.b, null), i.a.createElement(A, null, T._("created {time}", [T._param("time", Object(E.d)(e.createdAtUTC))], {
						hk: "2cUc5m"
					}))), n && i.a.createElement("div", {
						className: I.a.onHoverActionText
					}, i.a.createElement("span", null, n)))
				}
			}
			var W = Object(a.b)(B)(D),
				H = s("./src/reddit/helpers/trackers/postCollection.ts"),
				U = s("./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less"),
				V = s.n(U);
			const G = "".concat(n.a.assetPath, "/img/snoo-drafts.png"),
				z = N.a.div("TopRow", V.a),
				K = N.a.div("TitleRow", V.a),
				q = N.a.div("DetailsContainer", V.a),
				J = N.a.wrapped(v.a, "ButtonRow", V.a),
				X = N.a.div("CloseWrapper", V.a),
				Z = N.a.wrapped(x.a, "Close", V.a),
				Q = N.a.div("Empty", V.a),
				Y = N.a.img("EmptyImage", V.a),
				$ = N.a.p("EmptyText", V.a),
				ee = N.a.div("FilterWrapper", V.a),
				te = N.a.wrapped(h.a, "FilterInput", V.a),
				se = N.a.wrapped(g.a, "SearchIcon", V.a),
				ne = N.a.wrapped(f.a, "PlusIcon", V.a),
				oe = N.a.wrapped(b.m, "CreateCollectionButton", V.a),
				re = Object(l.a)((e, t) => {
					const s = t.toLowerCase();
					return e.filter(e => e.title.toLowerCase().includes(s))
				}),
				ie = Object(c.c)({
					collections: C.w
				}),
				ae = Object(a.b)(ie, (e, t) => {
					let {
						postId: s,
						isOverlay: n
					} = t;
					return {
						onOpenCreateCollectionModal: () => {
							let t = O.b;
							s && (t = Object(O.t)(s, !!n)), e(Object(m.x)(t))
						}
					}
				});
			class ce extends i.a.PureComponent {
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
					}, this.renderItem = e => i.a.createElement(W, {
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
					return i.a.createElement(Q, null, i.a.createElement(Y, {
						src: G
					}), i.a.createElement($, null, o.fbt._("Your collections will live here", null, {
						hk: "FCxWg"
					})))
				}
				renderNoFilterMatches() {
					return i.a.createElement(Q, null, i.a.createElement($, null, o.fbt._("No collection matching filter", null, {
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
					return i.a.createElement("div", {
						className: V.a.wrapper,
						"data-redditstyle": !0
					}, i.a.createElement(z, null, i.a.createElement(K, {
						"data-redditstyle": !0
					}, t || o.fbt._("My collections", null, {
						hk: "3yKovS"
					}), i.a.createElement(X, {
						onClick: this.close
					}, i.a.createElement(Z, {
						"data-redditstyle": !0
					}))), i.a.createElement(ee, null, i.a.createElement(se, null), i.a.createElement(te, {
						placeholder: o.fbt._("Find a collection", null, {
							hk: "3DbFBU"
						}),
						value: this.state.filterStr,
						onChange: this.onFilterStringChange
					}))), i.a.createElement(q, null, s), i.a.createElement(J, null, i.a.createElement(oe, {
						onClick: this.handleCreateCollectionClicked
					}, i.a.createElement(ne, null), o.fbt._("Create a collection", null, {
						hk: "37xJVm"
					}))))
				}
			}
			const de = Object(d.a)(ae(Object(p.c)(ce)));
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
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/lib/formatApiError/index.ts"),
				l = s("./src/reddit/actions/postCollection/index.ts"),
				m = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				p = s("./src/reddit/constants/postCreation.ts"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/controls/ErrorText/index.tsx"),
				h = s("./src/reddit/controls/Input/index.tsx"),
				x = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				f = s("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				g = s("./src/reddit/icons/svgs/Close/index.tsx"),
				v = s("./src/reddit/layout/row/Inline/index.tsx"),
				O = s("./src/reddit/selectors/postCollection.ts"),
				C = s("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less"),
				E = s.n(C),
				y = s("./src/lib/lessComponent.tsx");
			const _ = y.a.div("Container", E.a),
				w = y.a.div("Content", E.a),
				k = y.a.div("TitleRow", E.a),
				j = y.a.div("Details", E.a),
				P = y.a.wrapped(m.f, "Footer", E.a),
				S = y.a.wrapped(u.l, "CancelButton", E.a),
				I = y.a.div("CloseWrapper", E.a),
				N = y.a.wrapped(g.a, "CloseIcon", E.a),
				T = y.a.label("Label", E.a),
				M = y.a.wrapped(h.a, "TitleInput", E.a),
				L = y.a.wrapped(f.a, "AddCollectionIcon", E.a),
				R = y.a.wrapped(u.i, "PrimaryActionButton", E.a),
				F = y.a.wrapped(x.a, "LoadingIcon", E.a),
				A = y.a.wrapped(b.b, "ErrorText", E.a),
				B = Object(a.c)({
					collection: O.r,
					error: O.c,
					isPending: O.h
				}),
				D = Object(i.b)(B, (e, t) => ({
					onCreate: (t, s) => e(Object(l.b)(t, s)),
					onUpdate: s => e(Object(l.h)(t.collectionId, s))
				}));
			class W extends r.a.PureComponent {
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
						isPending: s
					} = this.props, o = !e, i = !!this.state.collectionTitle.trim(), a = o ? n.fbt._("Create", null, {
						hk: "Ijp7n"
					}) : n.fbt._("Save", null, {
						hk: "2Onrrv"
					});
					return r.a.createElement(_, null, r.a.createElement(I, {
						onClick: this.props.onCancel
					}, r.a.createElement(N, null)), r.a.createElement(w, null, o && r.a.createElement(r.a.Fragment, null, r.a.createElement(k, null, r.a.createElement(L, null), n.fbt._("Create a collection", null, {
						hk: "3ndxk5"
					})), r.a.createElement(j, null, n.fbt._("Group posts into one feed. Create a series of events or just a group of random things. Make something awesome!", null, {
						hk: "2eCAQw"
					}))), r.a.createElement(T, null, o ? n.fbt._("Give a title for your collection", null, {
						hk: "Uaqbe"
					}) : n.fbt._("Edit title", null, {
						hk: "1jzweg"
					}), r.a.createElement(M, {
						maxLength: p.e,
						onChange: this.onTitleChange,
						placeholder: n.fbt._("Enter title", null, {
							hk: "3B0iRI"
						}),
						value: this.state.collectionTitle
					}))), r.a.createElement(P, null, r.a.createElement(v.a, null, r.a.createElement(S, {
						onClick: this.props.onCancel
					}, n.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(R, {
						onClick: this.onPrimaryButtonClick,
						disabled: s || !i
					}, s ? r.a.createElement(F, {
						sizePx: 10
					}) : a)), t && r.a.createElement(A, null, Object(d.a)(t))))
				}
			}
			t.a = Object(c.a)(D(W))
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
				return w
			}));
			var n, o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/higherOrderComponents/asModal/index.tsx"),
				m = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/components/FlairPickerTitle/index.tsx"),
				u = s("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				b = s("./src/reddit/components/FlairPreview/index.tsx"),
				h = s("./src/reddit/components/FlairSearch/index.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/models/Flair/index.ts"),
				g = s("./src/reddit/selectors/moderatorPermissions.ts"),
				v = s("./src/reddit/selectors/postFlair.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/selectors/telemetry.ts"),
				E = s("./src/reddit/components/PostFlairPicker/helpers.ts"),
				y = s("./src/reddit/components/PostFlairPicker/index.m.less"),
				_ = s.n(y);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(n || (n = {}));
			const w = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.UNSET;
					return "PostFlair__Modal-[postId: ".concat(e, "]-isOverlay[").concat(t, "]-position[").concat(s, "]")
				},
				k = Object(c.c)({
					flairData: v.d,
					subreddit: O.T,
					isMod: (e, t) => !!Object(g.j)(e, t)
				});
			class j extends i.a.Component {
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
						subreddit: Object(C.subredditById)(t, this.props.subredditId)
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
					} = e, a = r.displayText, {
						templates: c,
						templateIds: d
					} = n, {
						canSave: l
					} = this.canSave();
					return i.a.createElement(u.a, {
						className: s
					}, i.a.createElement(p.a, {
						onClosePressed: e.closeModal,
						title: o.fbt._("Select {subredditName} flair", [o.fbt._param("subredditName", a)], {
							hk: "1lDMWS"
						})
					}), i.a.createElement(b.a, {
						flair: t,
						flairTemplateType: f.d.LinkFlair,
						placeholderText: o.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), i.a.createElement(h.a, {
						flair: t,
						flairTemplateType: f.d.LinkFlair,
						subredditId: r.id,
						templates: c,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), i.a.createElement("div", {
						className: _.a.buttonsRow
					}, i.a.createElement(x.i, {
						disabled: !l,
						onClick: this.onApply
					}, o.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), i.a.createElement(x.l, {
						className: _.a.clearButton,
						onClick: this.onClear
					}, o.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const P = Object(a.b)(k, (e, t) => ({
				closeModal: () => e(Object(m.i)(t.modalId))
			}))(j);
			t.a = Object(l.a)(Object(d.c)(P))
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/helpers/trackers/postCollection.ts"),
				p = s("./src/reddit/components/PostFollow/index.m.less"),
				u = s.n(p);
			class b extends r.a.Component {
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
					} = this.props, o = this.state.isHovered, i = s.isFollowed;
					let a = i ? n.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : n.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && o && (a = n.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
						className: Object(c.a)(u.a.collectionFollow, {
							[u.a.isFollowed]: !!s.isFollowed,
							[u.a.isEventFollow]: t
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
					onFollow: () => e(Object(d.u)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(l.c)(b))
		},
		"./src/reddit/components/PostLeftRail/index.m.less": function(e, t, s) {
			e.exports = {
				postLeftRail: "_23h0-EcaBUorIHC-JZyh6J"
			}
		},
		"./src/reddit/components/PostLeftRail/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "c", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/constants/colors.ts"),
				c = s("./src/reddit/components/PostLeftRail/index.m.less"),
				d = s.n(c);
			const l = 40,
				m = e => e.isRemoved ? a.a.removed : e.isReported ? a.a.reported : "transparent",
				p = Object(i.a)(e => {
					const t = m(e),
						s = {
							width: "".concat(l, "px"),
							borderLeft: "4px solid ".concat(t)
						};
					return o.a.createElement("div", {
						className: Object(r.a)(d.a.postLeftRail, e.className),
						style: e.withoutComputedStyles ? {} : s
					}, e.children)
				});
			t.b = p
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				i = s("./src/reddit/components/Media/index.tsx");

			function a(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? o.a.createElement(r.a, {
					postId: t.crosspostRootId,
					mediaProps: Object.assign(Object.assign({}, e), {
						crosspost: t,
						primaryContent: !1
					})
				}) : o.a.createElement(i.a, Object.assign(Object.assign({}, e), {
					primaryContent: !!e.showFull
				}))
			}
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR",
				SubscribeButton2020: "_18h85FqXFcYDKgZEKQcNj0",
				subscribeButton2020: "_18h85FqXFcYDKgZEKQcNj0"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/AwardBadges/index.tsx"),
				i = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				a = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = s("./src/reddit/components/PostBadges/index.tsx"),
				d = s("./src/reddit/components/PostTopMeta/index.tsx"),
				l = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				u = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				x = s("./src/reddit/helpers/trackers/post.ts"),
				f = s("./src/reddit/models/Subreddit/index.ts"),
				g = s("./src/reddit/components/PostMeta/index.m.less"),
				v = s.n(g);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: g,
					isOverlay: O,
					isTopicPage: C,
					post: E,
					shouldShowSubscribeButton: y,
					subredditOrProfile: _,
					tooltipType: w
				} = e, k = !!C;
				return o.a.createElement("div", {
					className: v.a.metaContainer
				}, !n && !E.isSponsored && _ && o.a.createElement(i.a, {
					postId: E.id,
					subredditName: _.name
				}, o.a.createElement(m.a, {
					className: v.a.subredditName,
					"data-click-id": "subreddit",
					to: _.url
				}, _.displayText)), _ && _.isQuarantined && o.a.createElement(l.a, null), !n && !E.isSponsored && _ && y && !g && o.a.createElement(p.a, {
					className: v.a.SubscribeButton2020,
					getEventFactory: e => Object(x.f)(E.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: _.name,
						type: Object(f.g)(_) ? u.a.PROFILE : u.a.SUBREDDIT
					},
					postId: E.id,
					size: b.c.XXS,
					small: !0
				}), !n && !E.isSponsored && o.a.createElement(h.b, null), !n && !E.isSponsored && o.a.createElement(a.h, {
					type: E.belongsTo.type,
					id: E.belongsTo.id
				}), o.a.createElement(d.d, {
					className: v.a.postTopMeta,
					flairStyleTemplate: t,
					post: E,
					tooltipType: w
				}), o.a.createElement(c.a, {
					displayText: _ ? _.displayText : null,
					inSubredditOrProfile: !!n,
					post: E,
					tooltipType: w
				}), !k && o.a.createElement(r.a, {
					hideCta: s,
					thing: E,
					tooltipType: O ? d.c.Lightbox : void 0
				}))
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
				return b
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "g", (function() {
				return f
			})), s.d(t, "h", (function() {
				return g
			})), s.d(t, "i", (function() {
				return v
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "e", (function() {
				return E
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				r = s("./src/reddit/controls/Dropdown/Row.tsx"),
				i = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				a = s("./src/reddit/icons/fonts/Envelope/index.tsx"),
				c = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				d = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				l = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				m = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				p = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				u = s.n(p);
			const b = n.a.wrapped(i.a, "Icon", u.a),
				h = n.a.wrapped(a.a, "Icon", u.a),
				x = n.a.wrapped(c.a, "Icon", u.a),
				f = n.a.wrapped(d.a, "Icon", u.a),
				g = n.a.wrapped(l.a, "Icon", u.a),
				v = n.a.wrapped(m.a, "Icon", u.a),
				O = n.a.wrapped(o.b, "CheckboxMenuItem", u.a),
				C = n.a.wrapped(r.b, "DropdownRow", u.a),
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
				AddCollectionIcon: "_3McOViCQeBaGf3kRQLi-YJ",
				addCollectionIcon: "_3McOViCQeBaGf3kRQLi-YJ",
				CalendarIcon: "_1zSdStUj7GoJJcKjQ7zhG8",
				calendarIcon: "_1zSdStUj7GoJJcKjQ7zhG8",
				Icon: "_2V4nGS1AmzWhA62lzdCu4r",
				icon: "_2V4nGS1AmzWhA62lzdCu4r",
				LinkIcon: "_1lgI_HBlGeEd4PRa5CuxRF",
				linkIcon: "_1lgI_HBlGeEd4PRa5CuxRF",
				LiveIcon: "otoj2GWn145x5kC1YJdJV",
				liveIcon: "otoj2GWn145x5kC1YJdJV",
				PostCheckboxMenuItem: "_3fGEO8uLSvUJEOP4lDX35p",
				postCheckboxMenuItem: "_3fGEO8uLSvUJEOP4lDX35p"
			}
		},
		"./src/reddit/components/PostOverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Ce
			})), s.d(t, "b", (function() {
				return Ee
			})), s.d(t, "c", (function() {
				return ye
			})), s.d(t, "d", (function() {
				return _e
			})), s.d(t, "f", (function() {
				return we
			})), s.d(t, "e", (function() {
				return ke
			})), s.d(t, "h", (function() {
				return We
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router/esm/react-router.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/telemetry/index.ts"),
				m = s("./node_modules/uuid/v4.js"),
				p = s.n(m),
				u = s("./src/lib/addQueryParams/index.ts"),
				b = s("./src/lib/classNames/index.ts"),
				h = s("./src/lib/lessComponent.tsx"),
				x = s("./src/reddit/actions/eventPosts/index.ts"),
				f = s("./src/reddit/actions/gold/modals.ts"),
				g = s("./src/reddit/actions/modal.ts"),
				v = s("./src/reddit/actions/pinnedPost.ts"),
				O = s("./src/reddit/actions/post.ts"),
				C = s("./src/reddit/actions/postCreation/editing.ts"),
				E = s("./src/reddit/actions/reportFlow.ts"),
				y = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				_ = s("./src/reddit/constants/parameters.ts"),
				w = s("./src/reddit/constants/posts.ts"),
				k = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				j = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				P = s("./src/reddit/icons/fonts/Admin/index.tsx"),
				S = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				I = s("./src/reddit/icons/fonts/Embed/index.tsx"),
				N = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				T = s("./src/reddit/icons/fonts/Hide/index.tsx"),
				M = s("./src/reddit/icons/fonts/Link/index.tsx"),
				L = s("./src/reddit/icons/fonts/Live/index.tsx"),
				R = s("./src/reddit/icons/fonts/Pencil/index.tsx"),
				F = s("./src/reddit/icons/fonts/Report/index.tsx"),
				A = s("./src/reddit/icons/fonts/Save/index.tsx"),
				B = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				D = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				W = s("./src/reddit/icons/fonts/Unpin/index.tsx"),
				H = s("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				U = s("./src/reddit/icons/svgs/Saved/index.tsx"),
				V = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				G = s("./src/reddit/components/OverflowMenu/index.tsx"),
				z = s("./src/reddit/components/ReportFlow/index.tsx"),
				K = s("./src/reddit/contexts/PageLayer/index.tsx"),
				q = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				J = s("./src/reddit/controls/Dropdown/Row.tsx"),
				X = s("./src/reddit/components/Flatlist/constants.ts"),
				Z = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				Q = s("./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx"),
				Y = s("./src/reddit/constants/postLayout.ts"),
				$ = s("./src/reddit/helpers/correlationIdTracker.ts"),
				ee = s("./src/reddit/helpers/isCrosspost.ts"),
				te = s("./src/reddit/helpers/postEvent.ts"),
				se = s("./src/reddit/helpers/trackers/post.ts"),
				ne = s("./src/reddit/models/Post/index.ts"),
				oe = s("./src/reddit/models/Subreddit/index.ts"),
				re = s("./src/reddit/selectors/activeModalId.ts"),
				ie = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				ae = s("./src/reddit/selectors/posts.ts"),
				ce = s("./src/reddit/selectors/subreddit.ts"),
				de = s("./src/reddit/selectors/user.ts"),
				le = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				me = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				pe = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				ue = s("./src/reddit/components/ReportFlow/new.tsx"),
				be = s("./src/reddit/actions/postCollection/index.ts"),
				he = s("./src/reddit/helpers/trackers/postCollection.ts"),
				xe = s("./src/reddit/models/PostCreationForm/index.ts"),
				fe = s("./src/reddit/selectors/postCollection.ts"),
				ge = s("./src/reddit/components/PostOverflowMenu/index.m.less"),
				ve = s.n(ge),
				Oe = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const Ce = h.a.wrapped(N.a, "Icon", ve.a),
				Ee = h.a.wrapped(T.a, "Icon", ve.a),
				ye = h.a.wrapped(R.a, "Icon", ve.a),
				_e = h.a.wrapped(F.a, "Icon", ve.a),
				we = h.a.wrapped(U.a, "Icon", ve.a),
				ke = h.a.wrapped(A.a, "Icon", ve.a),
				je = h.a.wrapped(P.a, "Icon", ve.a),
				Pe = h.a.wrapped(H.a, "AddCollectionIcon", ve.a),
				Se = h.a.wrapped(I.a, "Icon", ve.a),
				Ie = h.a.wrapped(B.a, "Icon", ve.a),
				Ne = h.a.wrapped(D.a, "Icon", ve.a),
				Te = h.a.wrapped(V.b, "Icon", ve.a),
				Me = h.a.wrapped(W.a, "Icon", ve.a),
				Le = h.a.wrapped(L.a, "LiveIcon", ve.a),
				Re = h.a.wrapped(S.a, "CalendarIcon", ve.a),
				Fe = h.a.wrapped(M.a, "LinkIcon", ve.a),
				Ae = h.a.wrapped(J.b, "DropdownRow", ve.a),
				Be = h.a.wrapped(q.a, "PostCheckboxMenuItem", ve.a),
				De = p()(),
				We = e => {
					let {
						gild: t = !0,
						save: s = !0,
						share: n = !0,
						report: o = !0,
						editPost: r = !0,
						hide: i = !0
					} = e;
					return {
						[X.a.Gild]: t,
						[X.a.Save]: s,
						[X.a.Share]: n,
						[X.a.Report]: o,
						[X.a.EditPost]: r,
						[X.a.Hide]: i
					}
				},
				He = Object(a.b)(() => Object(d.c)({
					currentUser: de.i,
					isConfirmDeleteOpen: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(re.a)(e) === "".concat("POST_OVERFLOW_DELETE_CONFIRMATION", "_").concat(s)
					},
					isFutureEvent: fe.j,
					isSaved: ae.x,
					isHidden: ae.p,
					isSponsored: ae.z,
					isNSFW: ae.s,
					isOC: ae.t,
					isPinned: ae.u,
					isSpoiler: ae.y,
					post: ae.O,
					postSubredditAboutInfo: ae.P,
					reportFlowIsOpen: (e, t) => {
						let {
							isOverlay: s,
							postId: n
						} = t;
						return e.reportFlow.openedFromModalPage === s && e.reportFlow.postOrCommentId === n
					},
					sendRepliesToggled: ae.Y,
					showPinAction: (e, t) => {
						var {
							isProfilePostListing: s
						} = t, n = Oe(t, ["isProfilePostListing"]);
						return Object(K.B)(e, n) && s && Object(de.kb)(e, n) && Object(de.ib)(e, {
							userName: Object(ae.O)(e, {
								postId: n.postId
							}).author
						})
					},
					subredditOrProfile: ae.bb,
					hasSubredditRules: ce.k,
					userIsOp: de.kb,
					isPostPartOfACollection: fe.l,
					shouldRenderCollectionEditButtons: (e, t) => {
						let {
							postId: s
						} = t;
						if (Object(ae.O)(e, {
								postId: s
							}).isSponsored) return !1;
						const n = Object(ae.bb)(e, {
							postId: s
						});
						if (!n) return !1;
						const o = n.type === oe.e.User;
						return Object(fe.s)(e, n.name, o)
					},
					reportingRevampEnabled: le.a,
					videoShareModalOpen: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(re.a)(e) === Object(Q.a)(s)
					},
					inRpanSharingTimestampExperiment: ie.e
				}), (e, t) => {
					let {
						permalink: s,
						postId: n,
						isOverlay: o,
						isCommentsPage: r
					} = t;
					return {
						onCopyLink: t => e(Object(O.v)(t)),
						onDelete: t => e(Object(O.E)(n, t, o)),
						onDistinguishPost: t => e(Object(O.p)(n, t)),
						onGildClick: t => e(Object(f.d)({
							correlationId: t,
							thingId: n
						})),
						onToggleSave: () => e(Object(O.L)(n)),
						onToggleNSFW: () => e(Object(O.A)(n)),
						onToggleOC: () => e(Object(O.B)(n)),
						onTogglePinned: () => e(Object(v.i)(n)),
						onToggleSpoiler: () => e(Object(O.O)(n)),
						onHide: t => e(Object(O.P)(n, !t, o, !0)),
						onReportClick: () => e(Object(E.j)(n, o)),
						onStartEventNow: () => {
							e((e, t) => Object(l.a)(Object(j.l)()(t()))), e(Object(x.startEventNowRequested)(n))
						},
						onEdit: () => {
							const t = !o && !r;
							e(Object(C.a)(n, t))
						},
						onFlairPost: () => e(Object(g.i)(Object(pe.b)(n, o))),
						onToggleSendReplies: () => e(Object(O.M)(n)),
						showCollectionsList: (t, s) => {
							e(Object(be.e)(t)).then(() => {
								const t = Object(xe.s)(s, o);
								e(g.i(t))
							})
						},
						toggleConfirmDelete: () => e(Object(g.i)("".concat("POST_OVERFLOW_DELETE_CONFIRMATION", "_").concat(n))),
						onToggleVideoShareModal: () => e(Object(g.i)(Object(Q.a)(n)))
					}
				});
			class Ue extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.handlePostEvent = (e, t) => {
						const {
							isOverlay: s,
							post: n,
							sendEvent: o
						} = this.props;
						o(Object(se.f)(n.id, e, s ? "post_detail" : "post", void 0, void 0, void 0, null == t ? void 0 : t.referralId))
					}, this.handleClickMenuButton = () => {
						this.handlePostEvent("post_overflow_menu")
					}, this.handleDeletePost = e => {
						e && (this.props.onDelete(e), this.handlePostEvent("delete"))
					}, this.handleEdit = () => {
						this.handlePostEvent("edit"), this.props.onEdit()
					}, this.handleGild = async () => {
						const e = Object($.d)($.a.GildingFlow, !0);
						this.props.onGildClick(e);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(t(this.props.postId))
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
						this.handlePostEvent(this.props.isPinned ? "unpin" : "pin"), this.props.isPinned ? this.props.sendEvent(Object(se.g)(this.props.post.id)) : this.props.sendEvent(Object(se.c)(this.props.post.id)), this.props.onTogglePinned()
					}, this.toggleSpoiler = () => {
						this.handlePostEvent(this.props.isSpoiler ? "unmark_spoiler" : "mark_spoiler"), this.props.onToggleSpoiler()
					}, this.toggleNSFW = () => {
						this.handlePostEvent(this.props.isNSFW ? "unmark_nsfw" : "mark_nsfw"), this.props.onToggleNSFW()
					}, this.getBreakpointClass = e => {
						const {
							props: t
						} = this;
						if (!t.ignoreBreakpoints && t.useFlatlistBreakpoints[e]) return Object(Z.b)({
							breakpointType: Z.a.HideIfVWLarger,
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
						e || (n(Object(he.b)(s.id)), t(s.belongsTo.id, s.id))
					}, this.onCloseShareModal = e => {
						e && (this.handlePostEvent("copy_link", {
							referralId: De
						}), this.props.onCopyLink(e)), this.props.onToggleVideoShareModal()
					}, this.renderReportFlow = () => this.props.reportingRevampEnabled ? i.a.createElement(ue.a, {
						withOverlay: !0,
						overlayCustomStyles: z.b,
						postId: this.props.postId,
						timestamp: this.context.currentTime
					}) : i.a.createElement(z.a, {
						withOverlay: !0,
						overlayCustomStyles: z.b,
						postId: this.props.postId,
						timestamp: this.context.currentTime
					})
				}
				getOverflowMenuBreakpointClass() {
					const {
						props: e
					} = this, t = e.layout === Y.g.Classic;
					if (!(e.ignoreBreakpoints || e.modModeWithPost || e.userIsOp || !e.isCommentsPage && !t)) return Object(Z.b)({
						breakpointType: Z.a.HideIfVWLarger,
						flatlistItem: X.a.PostOverflowMenu,
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
						onStartEventNow: a,
						post: c,
						shouldRenderCollectionEditButtons: d,
						showEditFlair: l,
						showPinAction: m,
						toggleAddEventStartTimeModal: b,
						toggleEditStartTimeModal: h,
						userIsOp: x
					} = e, f = e.currentUser && e.currentUser.isEmployee, g = Object(ee.a)(e.post), v = e.post.belongsTo.type === w.a.PROFILE || Object(oe.f)(e.postSubredditAboutInfo), O = t && c.isGildable, C = Object(te.a)(e.post);
					return i.a.createElement("div", null, O && i.a.createElement(Ae, {
						className: this.getBreakpointClass(X.a.Gild),
						displayText: n.fbt._("Give Award", null, {
							hk: "3mYeGJ"
						}),
						onClick: this.handleGild
					}, i.a.createElement(Ce, null)), i.a.createElement(Ae, {
						className: this.getBreakpointClass(X.a.Share),
						displayText: n.fbt._("Copy link", null, {
							hk: "ETZxA"
						}),
						onClick: () => {
							const {
								permalink: t,
								post: s
							} = e;
							if (s && Object(ne.i)(s))
								if (e.inRpanSharingTimestampExperiment) e.onToggleVideoShareModal(), this.handlePostEvent("share");
								else {
									const t = Object(k.a)(s.id),
										n = p()(),
										o = Object(u.a)(t, {
											[_.q]: n,
											utm_source: "share",
											utm_medium: "web2x",
											utm_content: "rpan_stream"
										});
									this.handlePostEvent("share_copy", {
										referralId: n
									}), e.onCopyLink(o)
								}
							else this.handlePostEvent("share_copy"), e.onCopyLink(t)
						}
					}, i.a.createElement(Fe, null)), i.a.createElement(Ae, {
						className: this.getBreakpointClass(X.a.Share),
						displayText: n.fbt._("Embed", null, {
							hk: "3u0v6r"
						}),
						onClick: () => {
							this.handlePostEvent("share_embed"), window.open("https://embed.redditmedia.com/widgets/embed?url=".concat(e.post.permalink), "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, i.a.createElement(Se, null)), e.showEditPost && i.a.createElement(Ae, {
						className: this.getBreakpointClass(X.a.EditPost),
						displayText: n.fbt._("Edit post", null, {
							hk: "3gVzz0"
						}),
						onClick: this.handleEdit,
						isSelected: e.isHidden
					}, i.a.createElement(ye, null)), l && i.a.createElement(Ae, {
						displayText: n.fbt._("Edit flair", null, {
							hk: "qt3W7"
						}),
						onClick: e.onFlairPost,
						isSelected: e.isHidden
					}, i.a.createElement(Ne, null)), i.a.createElement(Ae, {
						className: this.getBreakpointClass(X.a.Save),
						displayText: e.isSaved ? n.fbt._("unsave", null, {
							hk: "HDDPm"
						}) : n.fbt._("save", null, {
							hk: "3bg2gs"
						}),
						onClick: this.toggleSave,
						isSelected: e.isSaved
					}, e.isSaved ? i.a.createElement(we, null) : i.a.createElement(ke, null)), m && i.a.createElement(Ae, {
						displayText: r ? n.fbt._("Unpin Post from Profile", null, {
							hk: "6DYfk"
						}) : n.fbt._("Pin Post to Profile", null, {
							hk: "2RWbNF"
						}),
						onClick: this.togglePinned
					}, this.props.isPinned ? i.a.createElement(Me, null) : i.a.createElement(Ie, null)), !e.isSponsored && i.a.createElement(Ae, {
						className: this.getBreakpointClass(X.a.Hide),
						displayText: e.isHidden ? n.fbt._("unhide", null, {
							hk: "1P4IxC"
						}) : n.fbt._("hide", null, {
							hk: "48yKzW"
						}),
						onClick: this.toggleHide,
						isSelected: e.isHidden
					}, i.a.createElement(Ee, null)), !e.isSponsored && !x && i.a.createElement(Ae, {
						className: this.getBreakpointClass(X.a.Report),
						displayText: n.fbt._("report", null, {
							hk: "128RPn"
						}),
						onClick: this.handleReport
					}, i.a.createElement(_e, null)), d && s && a && i.a.createElement(Ae, {
						onClick: a,
						displayText: n.fbt._("Start event now", null, {
							hk: "3VomTN"
						})
					}, i.a.createElement(Le, null)), d && s && h && i.a.createElement(Ae, {
						onClick: h,
						displayText: n.fbt._("Edit start time", null, {
							hk: "2typ17"
						})
					}, i.a.createElement(Re, null)), d && !C && b && i.a.createElement(Ae, {
						displayText: n.fbt._("Add event start time", null, {
							hk: "1XXqzu"
						}),
						onClick: b
					}, i.a.createElement(Re, null)), d && i.a.createElement(Ae, {
						className: this.props.isPostPartOfACollection ? ve.a.disabledRow : void 0,
						displayText: n.fbt._("Add to collection", null, {
							hk: "3UNHgN"
						}),
						onClick: this.handleAddToCollection,
						noHover: this.props.isPostPartOfACollection
					}, i.a.createElement(Pe, null)), x && i.a.createElement(Ae, {
						displayText: n.fbt._("delete", null, {
							hk: "4kSfzC"
						}),
						onClick: this.props.toggleConfirmDelete
					}, i.a.createElement(Te, null)), f && e.userIsOp && i.a.createElement(Ae, {
						displayText: e.post.distinguishType === o.C.ADMIN ? n.fbt._("undistinguish", null, {
							hk: "2chGON"
						}) : n.fbt._("Distinguish as admin", null, {
							hk: "2xltiM"
						}),
						onClick: () => e.post.distinguishType === o.C.ADMIN ? e.onDistinguishPost(o.C.NONE) : e.onDistinguishPost(o.C.ADMIN)
					}, i.a.createElement(je, null)), x && v && !g && i.a.createElement(Be, {
						text: n.fbt._("Mark as OC", null, {
							hk: "2vGyoC"
						}),
						onClick: this.toggleOC,
						isSelected: this.props.isOC
					}), x && i.a.createElement(Be, {
						text: n.fbt._("Mark as Spoiler", null, {
							hk: "3PJk7A"
						}),
						onClick: this.toggleSpoiler,
						isSelected: this.props.isSpoiler
					}), x && i.a.createElement(Be, {
						text: n.fbt._("Mark as NSFW", null, {
							hk: "4qK6JN"
						}),
						onClick: this.toggleNSFW,
						isSelected: this.props.isNSFW
					}), e.userIsOp && i.a.createElement(Be, {
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
					return i.a.createElement("div", null, i.a.createElement(G.b, {
						className: Object(b.a)(ve.a.overflowMenu, this.getOverflowMenuBreakpointClass(), e.className),
						dropdownId: e.dropdownId,
						isFixed: e.isFixed,
						layout: e.layout,
						onClick: this.handleClickMenuButton
					}, this.renderDropdownIcons()), e.reportFlowIsOpen && e.subredditOrProfile && e.hasSubredditRules && this.renderReportFlow(), this.props.isConfirmDeleteOpen && i.a.createElement(Ve, {
						toggleConfirmDelete: this.props.toggleConfirmDelete,
						handleDeletePost: this.handleDeletePost
					}), e.videoShareModalOpen && i.a.createElement(Q.b, {
						className: ve.a.modalBody,
						onClose: this.onCloseShareModal,
						withOverlay: !1,
						url: Object(u.a)(Object(k.a)(e.postId), {
							[_.q]: De,
							utm_source: "share",
							utm_medium: "web2x",
							utm_content: "rpan_stream"
						})
					}))
				}
			}
			const Ve = Object(c.i)(e => i.a.createElement(me.a, {
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
			Ue.contextType = y.a, t.g = He(Ue)
		},
		"./src/reddit/components/PostPinnedHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_203iZ8LUuIrz_IJbiOAJDH",
				pinnedIcon: "_2xKvAjjyhpXElWBVqyWyml",
				metaText: "rewiG9XNj_xqkQDcyR88j"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
				i = s("./src/reddit/components/ModerationPrompts/Survey.tsx"),
				a = s("./src/reddit/components/PopupPortal/index.tsx"),
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
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: h,
					redditStyle: x,
					subreddit: f,
					isOverlay: g,
					isActionBarAnimationEnabled: v,
					postId: O,
					isForceSelected: C
				} = e, E = "upvote-button-".concat(t.id).concat(g ? "-overlay" : ""), {
					moderationPrompt: y
				} = t;
				return o.a.createElement(c.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(p.a)(t),
					isSponsored: !!Object(m.b)(t) && t.isSponsored,
					redditStyle: x
				}, n && o.a.createElement(l.a, {
					isCheckboxSelected: u,
					toggleCheckbox: b
				}), o.a.createElement(d.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: s,
					redditStyle: x,
					upvoteTooltipId: E,
					isActionBarAnimationEnabled: v,
					postId: O,
					isForceSelected: C
				}), y && o.a.createElement(a.b, {
					rightOf: E
				}, "survey" === y ? o.a.createElement(i.a, {
					post: t,
					subredditName: f.name,
					isOverlay: !!g
				}) : o.a.createElement(r.a, {
					post: t,
					subredditName: f.name,
					isOverlay: !!g
				})))
			}
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, s) {
			e.exports = {
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
				bulkActionCheckbox: "_3X709ZHnDjH0Rwz3pMTv40",
				SubscribeButton: "_35dG7dsi4xKTT-_2MB74qq",
				subscribeButton: "_35dG7dsi4xKTT-_2MB74qq"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/AwardBadges/index.tsx"),
				a = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = s("./src/reddit/components/PostBadges/index.tsx"),
				d = s("./src/reddit/components/PostTopMeta/index.tsx"),
				l = s("./src/reddit/components/SubredditIcon/index.tsx"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				u = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/controls/OutboundLink/index.tsx"),
				x = s("./src/reddit/helpers/trackers/post.ts"),
				f = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				g = s("./src/reddit/models/Media/index.ts"),
				v = s("./src/reddit/models/Subreddit/index.ts"),
				O = s("./src/reddit/components/PostTopLine/index.m.less"),
				C = s.n(O);
			const E = s("./src/lib/lessComponent.tsx").a.div("Container", C.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					hideAwards: n,
					hideNSFWPref: O,
					hostPostId: y,
					iconClassName: _,
					inSubredditOrProfile: w,
					isCommentsPage: k,
					isCompactPinnedPost: j,
					isCurrentUserProfilePost: P,
					isOverlay: S,
					isTopicPage: I,
					listingKey: N,
					post: T,
					shouldShowSubscribeButton: M,
					showCornerOutboundLink: L,
					showSubreddit: R,
					showSubredditIcon: F,
					subredditOrProfile: A
				} = e, B = n || I;
				return o.a.createElement(E, {
					className: t
				}, R && A && o.a.createElement("div", {
					className: C.a.subredditIconWrapper
				}, o.a.createElement(m.a, {
					"data-click-id": "subreddit",
					to: A.url
				}, F && o.a.createElement(l.b, {
					className: Object(r.a)(C.a.subredditIcon, _),
					shouldHideNsfwIcon: O,
					subredditOrProfile: A
				}))), o.a.createElement("div", {
					className: C.a.everythingElseWrapper
				}, R && o.a.createElement(a.h, {
					type: T.belongsTo.type,
					id: T.belongsTo.id
				}), o.a.createElement(d.d, {
					className: C.a.postTopMeta,
					flairStyleTemplate: s,
					tooltipType: S ? d.c.Lightbox : void 0,
					post: T,
					showSub: R,
					subredditOrProfile: A
				}), o.a.createElement(c.a, {
					className: C.a.postBadges,
					displayText: A ? A.displayText : null,
					inSubredditOrProfile: w,
					isCompactPinnedPost: j,
					post: T,
					tooltipType: S ? d.c.Lightbox : void 0
				}), !B && o.a.createElement(i.a, {
					isPostDetail: k,
					thing: T,
					tooltipType: S ? d.c.Lightbox : void 0
				})), A && R && M && !P && o.a.createElement(p.a, {
					className: C.a.SubscribeButton,
					getEventFactory: e => Object(x.f)(T.id, e ? "unsubscribe" : "subscribe", "post", N, y),
					identifier: {
						name: A.name,
						type: Object(v.g)(A) ? u.a.PROFILE : u.a.SUBREDDIT
					},
					postId: T.id,
					size: b.c.XS
				}), L && o.a.createElement(h.b, {
					className: C.a.OutboundLink,
					isSponsored: T.isSponsored,
					postId: T.id,
					href: Object(g.E)(e.post),
					source: T.source
				}, o.a.createElement(f.a, {
					className: C.a.outboundLinkIcon
				})))
			}
		},
		"./src/reddit/components/ProfileItemList/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/lodash/last.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/opener/index.ts"),
				d = s("./src/reddit/constants/adEvents.ts"),
				l = s("./src/reddit/components/PostList/LoadMore.tsx"),
				m = s("./src/reddit/components/PostList/Placeholder.tsx"),
				p = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				u = s("./src/reddit/components/Scroller/Simple.tsx"),
				b = s("./src/reddit/constants/componentSizes.ts"),
				h = s("./src/reddit/helpers/getClickInfo.ts"),
				x = s("./src/reddit/helpers/isComment.ts"),
				f = s("./src/lib/LRUCache/index.ts"),
				g = s("./src/telemetry/index.ts"),
				v = s("./src/telemetry/models/Timer.ts"),
				O = s("./src/reddit/components/PostList/index.m.less"),
				C = s.n(O);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var y = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const _ = 500,
				w = new f.a(_),
				k = new f.a(_),
				j = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				P = (e, t, s, n, o, r) => {
					const i = s ? "last-".concat(n, "-").concat(o) : "",
						a = "entered-".concat(e, "-").concat(t, "-").concat(i);
					let c = w.get(a);
					return void 0 === c && (c = () => {
						s && r.onBottomViewed(n, o), r.trackOnPostEnteredViewport(e, t)
					}, w.set(a, c)), c
				},
				S = (e, t) => {
					const s = "click-".concat(e);
					let n = k.get(s);
					return void 0 === n && (n = (e, s) => {
						s.isSponsored && t.fireAdPixelsOfType(s, d.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(c.d)(s.source.outboundUrl, c.c.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(h.a)(e)
						})
					}, k.set(s, n)), n
				};
			class I extends i.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new f.a(_), this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}
				}
				UNSAFE_componentWillMount() {
					this.timerId && g.c.cancel(this.timerId), this.props.itemIds.length && (this.timerId = g.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = g.c.end(this.timerId);
						setTimeout(() => Object(g.b)(a.l.Redesign, {
							type: "mount",
							component: "overviewChronoList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && g.c.cancel(this.timerId), e.itemIds.length && (this.timerId = g.c.start()), (e.listingKey !== this.props.listingKey || e.itemIds.length !== this.props.itemIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (this.checkAndSendScreenview(), this.timerId && g.c.has(this.timerId)) {
						const e = g.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(g.b)(a.l.Redesign, {
							duration: e,
							type: "mount",
							component: "overviewChronoList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && g.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && o()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return g.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const n = g.c.end(e);
					setTimeout(() => s(t(n, v.TimerType.InApp)), 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t
					} = this.props;
					return Boolean(e) || !1 !== t
				}
				hasPosts() {
					return this.props.itemIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						itemIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const t = this.props,
						{
							itemIds: s
						} = t,
						n = y(t, ["itemIds"]),
						{
							itemIds: o
						} = e,
						r = y(e, ["itemIds"]),
						i = Object.keys(n),
						a = Object.keys(r);
					return a.length !== i.length || !!a.some(e => n[e] !== r[e])
				}
				scrollChildForItem(e, t, s, n, o, r) {
					const {
						listingKey: a,
						listingName: c,
						postClickEventFactory: d
					} = this.props, l = s ? "last-index" : "", m = "post-".concat(r, "-").concat(e, "-").concat(t, "-").concat(l, "-").concat(c, "-").concat(a);
					let p;
					if (void 0 === (p = this.scrollChildCache.get(m))) {
						const {
							inSubredditOrProfile: t,
							itemIdToPostId: l
						} = this.props, u = l[e], b = "overview-chrono-list-item-[layout: ".concat(r, "]-[itemId: ").concat(e, "]"), h = P(u, r, s, a, c, this.props), x = {
							key: b,
							eventFactory: d,
							inSubredditOrProfile: t,
							isFirstInCommentList: n,
							isLastInCommentList: o,
							isOverlay: !1,
							itemId: e,
							last: s,
							layout: r,
							onClickPost: S(e, this.props),
							postId: u
						}, f = this.props.itemComponent;
						p = {
							estHeight: this.props.estimateItemHeight(e, r, n),
							id: e,
							isFocusable: !1,
							trackOnEnteredViewport: h,
							render: e => i.a.createElement(f, E({}, x, e))
						}, this.scrollChildCache.set(m, p)
					}
					return p
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return i.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						layout: s,
						onTryAgain: n
					} = this.props;
					return i.a.createElement("div", {
						className: C.a.placeholder
					}, i.a.createElement(m.a, {
						className: t,
						isLoading: !e,
						layout: s
					}), !!e && i.a.createElement(p.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						layout: s,
						onLoadMore: n
					} = this.props;
					return i.a.createElement("div", {
						className: C.a.placeholder
					}, i.a.createElement(l.a, {
						isLoading: !!t,
						layout: s,
						countOverride: j[s]
					}), !!e && i.a.createElement(p.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderList() {
					const {
						commentsById: e,
						layout: t,
						loadMore: s,
						itemIds: n,
						onLoadMore: o
					} = this.props, r = n.map((s, o, r) => {
						const i = o === n.length - 1,
							a = o && n[o - 1],
							c = !i && n[o + 1],
							d = !!Object(x.a)(s) && (!a || !Object(x.a)(a) || e[a].postId !== e[s].postId),
							l = !!Object(x.a)(s) && (!c || !Object(x.a)(c) || e[c].postId !== e[s].postId);
						return this.scrollChildForItem(s, o, i, d, l, t)
					});
					return i.a.createElement("div", null, i.a.createElement(u.b, {
						innerRef: this.updateScrollerRef,
						className: this.props.className,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						enableElementHiding: !0,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: s && s.token ? s.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: o,
						viewportTopPadding: b.f + b.s
					}, r), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			t.a = I
		},
		"./src/reddit/components/ProfileNavMenu/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2vH__bwuub4wzWRqcvhh3m",
				dropdown: "_3ulncTe6l8jRF_TM6HZZFk",
				mainLink: "_1JNzvBgvzSnX27gUBKqqmJ",
				isActive: "Zvl1svdkcyUlRhf5RHGKc",
				hideOnNarrow: "kp9WWKDE0A0U0u7XOOEQP",
				dropdownLink: "_3FXf9zUWKXtpapv4rBHh1L",
				showOnNarrow: "_2cJiWyA-Vif_pfBPZVATnV",
				overflowMenuButton: "_2glPIthm-tV6ZxKaznhb72"
			}
		},
		"./src/reddit/components/ProfileNavMenu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/config.ts"),
				l = s("./src/higherOrderComponents/asTooltip.tsx"),
				m = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/constants/index.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/controls/Dropdown/index.tsx"),
				g = s("./src/reddit/controls/InternalLink/index.tsx"),
				v = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				O = s("./src/reddit/models/Profile/index.ts"),
				C = s("./src/reddit/featureFlags/index.ts"),
				E = s("./src/reddit/selectors/tooltip.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/selectors/userPrefs.ts"),
				w = s("./src/reddit/components/ProfileNavMenu/index.m.less"),
				k = s.n(w);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const P = Object(x.t)({
					routeName: x.U,
					privateListingType: x.i
				}),
				S = Object(c.c)({
					isDropdownMenuOpen: e => Object(E.a)(e) === N,
					isOwnProfile: (e, t) => Object(y.M)(e, t.profileName),
					isSnoovatar30Enabled: C.d.snoovatar30,
					isSubscriptionsPinned: _.b
				}),
				I = Object(l.a)(f.a),
				N = "profile-nav-menu-tooltip";
			t.a = P(Object(i.b)(S, e => ({
				toggleTooltip: t => e(Object(u.h)({
					tooltipId: t
				}))
			}))(e => {
				let {
					isDropdownMenuOpen: t,
					isOwnProfile: s,
					privateListingType: n,
					profileName: o,
					routeName: i,
					toggleTooltip: a,
					isSnoovatar30Enabled: c,
					isSubscriptionsPinned: d
				} = e;
				return r.a.createElement("div", {
					className: k.a.container
				}, r.a.createElement(b.a, {
					bladeOpen: !1,
					offsetLeft: d ? h.u : 0,
					render: () => r.a.createElement(r.a.Fragment, null, L({
						profileName: o,
						isOwnProfile: s,
						routeName: i,
						privateListingType: n,
						isSnoovatar30Enabled: c
					}).map(e => r.a.createElement(T, j({}, e, {
						key: e.key
					}))), r.a.createElement("button", {
						className: Object(m.a)(k.a.mainLink, k.a.overflowMenuButton),
						id: N,
						onClick: () => a(N)
					}, r.a.createElement(v.a, null)), r.a.createElement(I, {
						className: k.a.dropdown,
						isOpen: t,
						tooltipId: N
					}, R({
						profileName: o,
						isOwnProfile: s,
						routeName: i,
						privateListingType: n
					}).map(e => r.a.createElement(M, j({}, e, {
						key: e.key
					})))))
				}))
			}));
			const T = e => {
					let {
						hideOnNarrow: t,
						isActive: s,
						text: n,
						url: o,
						internal: i
					} = e;
					return i ? r.a.createElement(g.a, {
						className: Object(m.a)(k.a.mainLink, {
							[k.a.hideOnNarrow]: !!t,
							[k.a.isActive]: s
						}),
						to: o
					}, n) : r.a.createElement("a", {
						className: Object(m.a)(k.a.mainLink, {
							[k.a.hideOnNarrow]: !!t,
							[k.a.isActive]: s
						}),
						href: o
					}, n)
				},
				M = e => {
					let {
						isActive: t,
						internal: s,
						key: n,
						url: o,
						showOnNarrow: i,
						text: c
					} = e;
					return s ? r.a.createElement(a.a, {
						className: Object(m.a)(k.a.dropdownLink, {
							[k.a.isActive]: t,
							[k.a.showOnNarrow]: !!i
						}),
						to: o,
						key: n,
						rel: "nofollow noopener noreferrer",
						role: "listitem"
					}, c) : r.a.createElement("a", {
						className: Object(m.a)(k.a.dropdownLink, {
							[k.a.showOnNarrow]: !!i
						}),
						href: o,
						key: n,
						rel: "nofollow noopener noreferrer",
						role: "listitem",
						target: "_blank"
					}, c)
				},
				L = e => {
					let {
						profileName: t,
						isOwnProfile: s,
						routeName: o,
						privateListingType: r,
						isSnoovatar30Enabled: i
					} = e;
					const a = s ? [{
						internal: !0,
						isActive: o === p.Bb.PROFILE_PRIVATE && r === O.a.Saved,
						key: "profile.mainmenu.saved",
						text: n.fbt._("Saved", null, {
							hk: "2w1YRh"
						}),
						url: "/user/".concat(t, "/saved/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: o === p.Bb.PROFILE_PRIVATE && r === O.a.Hidden,
						key: "profile.mainmenu.hidden",
						text: n.fbt._("Hidden", null, {
							hk: "225tka"
						}),
						url: "/user/".concat(t, "/hidden/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: o === p.Bb.PROFILE_PRIVATE && r === O.a.Upvoted,
						key: "profile.mainmenu.upvoted",
						text: n.fbt._("Upvoted", null, {
							hk: "RKwFZ"
						}),
						url: "/user/".concat(t, "/upvoted/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: o === p.Bb.PROFILE_PRIVATE && r === O.a.Downvoted,
						key: "profile.mainmenu.downvoted",
						text: n.fbt._("Downvoted", null, {
							hk: "2F9IL4"
						}),
						url: "/user/".concat(t, "/downvoted/")
					}] : [];
					s ? (a.push({
						hideOnNarrow: !0,
						internal: !0,
						isActive: o === p.Bb.PROFILE_PRIVATE && r === O.a.ReceivedGildings,
						key: "profile.mainmenu.receiverGildings",
						text: n.fbt._("Awards received", null, {
							hk: "iwLBV"
						}),
						url: "/user/".concat(t, "/gilded/")
					}), a.push({
						hideOnNarrow: !0,
						internal: !0,
						isActive: o === p.Bb.PROFILE_PRIVATE && r === O.a.GivenGildings,
						key: "profile.mainmenu.givenGildings",
						text: n.fbt._("Awards given", null, {
							hk: "2UPYZc"
						}),
						url: "/user/".concat(t, "/gilded/given/")
					})) : a.push({
						hideOnNarrow: !0,
						internal: !1,
						isActive: !1,
						key: "profile.mainmenu.gildedLegacy",
						text: n.fbt._("Awards received (legacy)", null, {
							hk: "1YgfYU"
						}),
						url: "".concat(d.a.oldRedditUrl, "/user/").concat(t, "/gilded/")
					});
					const c = i ? [{
						internal: !0,
						isActive: o === p.Bb.PROFILE_SNOOBUILDER,
						key: "profile.mainmenu.snoobuilder",
						text: n.fbt._("Snoobuilder", null, {
							hk: "3SSKff"
						}),
						url: "/user/".concat(t, "/snoo/")
					}] : [];
					return [{
						internal: !0,
						isActive: o === p.Bb.PROFILE_OVERVIEW,
						key: "profile.mainmenu.overview",
						text: n.fbt._("Overview", null, {
							hk: "2IBbqy"
						}),
						url: "/user/".concat(t, "/")
					}, {
						internal: !0,
						isActive: o === p.Bb.PROFILE_POSTS,
						key: "profile.mainmenu.posts",
						text: n.fbt._("Posts", null, {
							hk: "a1BoF"
						}),
						url: "/user/".concat(t, "/posts/")
					}, {
						internal: !0,
						isActive: o === p.Bb.PROFILE_COMMENTS,
						key: "profile.mainmenu.comments",
						text: n.fbt._("Comments", null, {
							hk: "2VwjOc"
						}),
						url: "/user/".concat(t, "/comments/")
					}, ...c, ...a]
				},
				R = e => {
					let {
						profileName: t,
						isOwnProfile: s,
						routeName: o,
						privateListingType: r
					} = e;
					const i = s ? [{
						showOnNarrow: !0,
						internal: !0,
						isActive: o === p.Bb.PROFILE_PRIVATE && r === O.a.Hidden,
						key: "profile.dropdownmenu.hidden",
						text: n.fbt._("Hidden", null, {
							hk: "225tka"
						}),
						url: "/user/".concat(t, "/hidden/")
					}, {
						showOnNarrow: !0,
						internal: !0,
						isActive: o === p.Bb.PROFILE_PRIVATE && r === O.a.Upvoted,
						key: "profile.dropdownmenu.upvoted",
						text: n.fbt._("Upvoted", null, {
							hk: "J0TzC"
						}),
						url: "/user/".concat(t, "/upvoted/")
					}, {
						showOnNarrow: !0,
						internal: !0,
						isActive: o === p.Bb.PROFILE_PRIVATE && r === O.a.Downvoted,
						key: "profile.dropdownmenu.downvoted",
						text: n.fbt._("Downvoted", null, {
							hk: "2sxum6"
						}),
						url: "/user/".concat(t, "/downvoted/")
					}] : [];
					return s ? (i.push({
						showOnNarrow: !0,
						internal: !0,
						isActive: o === p.Bb.PROFILE_PRIVATE && r === O.a.ReceivedGildings,
						key: "profile.dropdownmenu.receiverGildings",
						text: n.fbt._("Awards received", null, {
							hk: "31obau"
						}),
						url: "/user/".concat(t, "/gilded/")
					}), i.push({
						showOnNarrow: !0,
						internal: !0,
						isActive: o === p.Bb.PROFILE_PRIVATE && r === O.a.GivenGildings,
						key: "profile.dropdownmenu.givenGildings",
						text: n.fbt._("Awards given", null, {
							hk: "2UPYZc"
						}),
						url: "/user/".concat(t, "/gilded/given/")
					}), i) : [...i, {
						showOnNarrow: !0,
						internal: !1,
						isActive: !1,
						key: "profile.dropdownmenu.gildedLegacy",
						text: n.fbt._("Awards received (legacy)", null, {
							hk: "2KdewZ"
						}),
						url: "".concat(d.a.oldRedditUrl, "/user/").concat(t, "/gilded/")
					}]
				}
		},
		"./src/reddit/components/ProfilePinnedPosts/Placeholder/Education.m.less": function(e, t, s) {
			e.exports = {
				container: "_1j2O3iNM1HoiXK7B2dmp7b",
				description: "_1izt0pKGHoMq6qSvK4cAIn",
				gotIt: "_3uIlo4RbXf8gjMYw0yP_Jj"
			}
		},
		"./src/reddit/components/ProfilePinnedPosts/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3aof1UDvKACEvKW4EMZ299",
				pin: "_2KRDWSbw-bvKgY9GSzhGAx",
				title: "_3mWek_rCoNZ3KHXxqDuM88"
			}
		},
		"./src/reddit/components/ProfilePinnedPosts/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_274hVfCVJjK6-eGJKLQjgQ",
				miniCardPost: "ieyMhI0VqyYOPt1Za-FW5",
				item: "fuCmx3adjKY3tXA4Zfx2p",
				education: "_1h3IXJoJFpHbyec1FkB4MV",
				title: "jY9rAXGpPzcDUv1AnLGAD"
			}
		},
		"./src/reddit/components/ProfileSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/SidebarContainer/index.tsx"),
				d = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx"),
				l = s("./src/reddit/components/SidebarProfileMultireddits/index.tsx"),
				m = s("./src/reddit/components/SidebarProfilePowerupContributions/index.tsx"),
				p = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				u = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				b = s("./src/reddit/components/SidebarTrophyCase/index.tsx"),
				h = s("./src/reddit/components/Widgets/ConnectedAccounts/index.tsx"),
				x = s("./src/reddit/constants/posts.ts"),
				f = s("./src/reddit/selectors/experiments/goldSubredditPowerups.ts");
			const g = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("AuthorHovercard~EconTopAwardersModal~Settings~SubredditWiki~reddit-components-ProfileIdCard"), s.e("reddit-components-ProfileIdCard")]).then(s.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
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
				v = Object(a.c)({
					inGoldPowerupsExperiment: f.a
				}),
				O = Object(i.b)(v),
				C = e => r.a.createElement(c.a, {
					className: e.className
				}, r.a.createElement(g, {
					profileName: e.profileName,
					isOverlay: e.isOverlay
				}), r.a.createElement(h.a, {
					subredditOrProfile: {
						name: e.profileName,
						type: x.a.PROFILE
					}
				}), r.a.createElement(d.a, {
					profileName: e.profileName
				}), r.a.createElement(l.a, {
					profileName: e.profileName
				}), e.inGoldPowerupsExperiment && r.a.createElement(p.a, null, r.a.createElement(m.a, {
					profileName: e.profileName
				})), r.a.createElement(p.a, null, r.a.createElement(b.a, {
					profileName: e.profileName
				})), r.a.createElement(u.a, {
					hideBackToTop: e.hideBackToTop
				}), r.a.createElement(d.a, {
					profileName: e.profileName
				}));
			C.defaultProps = {
				isOverlay: !1
			}, t.a = O(C)
		},
		"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			const r = Object(n.createContext)({
					currentTime: 0,
					setCurrentTime: () => {},
					isLive: !1,
					setIsLive: () => {}
				}),
				i = e => {
					let {
						children: t
					} = e;
					const [s, i] = Object(n.useState)(0), [a, c] = Object(n.useState)(!1), d = {
						currentTime: s,
						setCurrentTime: i,
						isLive: a,
						setIsLive: c
					};
					return o.a.createElement(r.Provider, {
						value: d
					}, t)
				}
		},
		"./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = e => "PublicAccessNetwork--VideoShare--Modal-".concat(e),
				r = Object(n.a)({
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
			t.b = r
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
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/actions/page.ts"),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = s.n(m);
			const u = Object(i.b)(null, e => ({
					onNavigate: t => e(Object(d.G)(t))
				})),
				b = c.a.wrapped(e => r.a.createElement("div", {
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
					style: Object.assign(Object.assign({}, e.style), {
						"--RawHTMLDisplay-tr-even": Object(n.g)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(n.g)(Object(l.a)(e).line, .8)
					})
				}), "StyledRawHTMLDisplay", p.a);
			t.a = u(Object(a.a)(b))
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
				i = () => null;
			t.a = Object(n.a)({
				ErrorComponent: i,
				getComponent: () => Object(o.a)(() => Promise.all([s.e("ReportFlow~ReportPage"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx"))).then(e => e.default),
				LoadingComponent: i
			})
		},
		"./src/reddit/components/ReportFlow/new.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				o = s("./src/lib/loadWithRetries/index.ts");
			s("./src/reddit/constants/colors.ts").a.overlayReportFlow;
			const r = () => null;
			t.a = Object(n.a)({
				ErrorComponent: r,
				getComponent: () => Object(o.a)(() => Promise.all([s.e("ReportFlow~ReportPage"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNew.tsx"))).then(e => e.default),
				LoadingComponent: r
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
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				c = s.n(a);
			const d = i.a.span("TextWrapper", c.a),
				l = i.a.wrapped(e => o.a.createElement("button", {
					className: e.className,
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick
				}, e.children, e.text && o.a.createElement(d, null, e.text, " ")), "Button", c.a),
				m = i.a.wrapped(l, "ApproveButton", c.a),
				p = i.a.wrapped(l, "RemoveButton", c.a),
				u = e => o.a.createElement("button", {
					className: Object(r.a)(c.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/components/ShareMenu/index.m.less": function(e, t, s) {
			e.exports = {
				dropdown: "PWY92ySDjTYrTAiutq4ty",
				dropdownRow: "_2snJGyyGyyH38duHobOUKE",
				linkIcon: "_1GObrri0j7y_9IWiGUfPjp",
				crosspostIcon: "_1m76BHzDzRsM1te7HBxUqd",
				embedIcon: "_3MSdPVJwGxrpakz-e1MQhO",
				modalBody: "T4VmKX-IOkP4UG-B4jUR-"
			}
		},
		"./src/reddit/components/ShareMenu/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router/esm/react-router.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./node_modules/uuid/v4.js"),
				l = s.n(d),
				m = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				h = s("./src/reddit/actions/tooltip.ts"),
				x = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				f = s("./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx"),
				g = s("./src/reddit/constants/parameters.ts"),
				v = s("./src/reddit/controls/Dropdown/index.tsx"),
				O = s("./src/reddit/controls/Dropdown/Row.tsx"),
				C = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				E = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				y = s("./src/reddit/icons/fonts/Embed/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Link/index.tsx"),
				w = s("./src/reddit/models/Post/index.ts"),
				k = s("./src/reddit/models/Subreddit/index.ts"),
				j = s("./src/reddit/routes/postCreation/constants.ts"),
				P = s("./src/reddit/selectors/activeModalId.ts"),
				S = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				I = s("./src/reddit/selectors/tooltip.ts"),
				N = s("./src/reddit/components/ShareMenu/index.m.less"),
				T = s.n(N),
				M = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const L = Object(x.a)(v.a),
				R = l()(),
				F = Object(c.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(I.b)(s)(e)
					},
					videoShareModalOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(P.b)(Object(f.a)(s))(e)
					},
					inRpanSharingTimestampExperiment: S.e
				}),
				A = Object(i.b)(F, (e, t) => {
					var {
						dropdownId: s,
						permalink: n
					} = t, o = M(t, ["dropdownId", "permalink"]);
					return {
						toggleDropdown: () => {
							e(Object(h.h)({
								tooltipId: s
							}))
						},
						copyLink: t => e(Object(u.v)(t)),
						onToggleVideoShareModal: () => {
							o.post && e(Object(b.d)(o.post.id)), e(Object(p.i)(Object(f.a)(o.post.id)))
						}
					}
				}),
				B = r.a.memo(e => {
					const t = !e.subreddit || e.subreddit && e.subreddit.type === k.e.Public,
						s = !!e.post && e.post.isCrosspostable && !e.post.isSponsored;
					return r.a.createElement("div", {
						className: e.className,
						onClick: e.toggleDropdown,
						id: e.dropdownId
					}, e.children, r.a.createElement(L, {
						className: T.a.dropdown,
						isOpen: e.dropdownIsOpen,
						tooltipId: e.dropdownId
					}, r.a.createElement(O.b, {
						className: T.a.dropdownRow,
						displayText: n.fbt._("Copy link", null, {
							hk: "1tCqox"
						}),
						onClick: () => {
							const {
								permalink: t,
								post: s,
								inRpanSharingTimestampExperiment: n
							} = e;
							if (s && Object(w.i)(s))
								if (n) e.sendEventWithName("share_copy", {
									referralId: R
								}), e.onToggleVideoShareModal();
								else {
									const t = Object(C.a)(s.id),
										n = l()(),
										o = Object(m.a)(t, {
											[g.q]: n,
											utm_source: "share",
											utm_medium: "web2x",
											utm_content: "rpan_stream",
											context: 3
										});
									e.sendEventWithName("share_copy", {
										referralId: n
									}), e.copyLink(o)
								}
							else {
								const s = Object(m.a)(t, {
									utm_source: "share",
									utm_medium: "web2x",
									context: 3
								});
								e.sendEventWithName("share_copy"), e.copyLink(s)
							}
						}
					}, r.a.createElement(_.a, {
						className: T.a.linkIcon
					})), s && r.a.createElement(O.b, {
						className: T.a.dropdownRow,
						displayText: n.fbt._("crosspost", null, {
							hk: "23zSN6"
						}),
						onClick: () => {
							e.sendEventWithName("share_crosspost"), e.post && window.open("".concat(j.b, "?source_id=").concat(e.post.id), "_blank")
						}
					}, r.a.createElement(E.a, {
						className: T.a.crosspostIcon
					})), t && r.a.createElement(O.b, {
						className: T.a.dropdownRow,
						displayText: n.fbt._("Embed", null, {
							hk: "2CcsuC"
						}),
						onClick: () => {
							e.sendEventWithName("share_embed"), window.open("https://embed.redditmedia.com/widgets/embed?url=".concat(e.permalink), "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, r.a.createElement(y.a, {
						className: T.a.embedIcon
					}))), e.videoShareModalOpen && e.post && r.a.createElement(f.b, {
						className: T.a.modalBody,
						onClose: t => {
							t && (e.sendEventWithName("copy_link", {
								referralId: R
							}), e.copyLink(t)), e.onToggleVideoShareModal()
						},
						url: Object(m.a)(Object(C.a)(e.post.id), {
							[g.q]: R,
							utm_source: "share",
							utm_medium: "web2x",
							utm_content: "rpan_stream"
						})
					}))
				});
			t.a = A(Object(a.i)(B))
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/SidebarContainer/index.m.less"),
				r = s.n(o);
			t.a = n.a.div("container", r.a)
		},
		"./src/reddit/components/SidebarExpandableList/index.m.less": function(e, t, s) {
			e.exports = {
				TertiaryButton: "_1rpFWd0ROODHctwG096Da",
				tertiaryButton: "_1rpFWd0ROODHctwG096Da"
			}
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/take.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = s("./src/reddit/layout/row/Inline/index.tsx"),
				u = s("./src/reddit/layout/row/RightAlign/index.tsx"),
				b = s("./src/reddit/components/SidebarExpandableList/index.m.less"),
				h = s.n(b),
				x = s("./src/lib/lessComponent.tsx");
			const f = 10,
				g = x.a.wrapped(l.o, "TertiaryButton", h.a);
			class v extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1
					}, this.onButtonClick = () => {
						const {
							expanded: e
						} = this.state, {
							hasMoreItems: t,
							onLoadMore: s
						} = this.props;
						e || this.setState({
							expanded: !0
						}), e && !t && this.setState({
							expanded: !1
						}), t && s && s()
					}, this.renderToggleButton = () => {
						const {
							expanded: e
						} = this.state, {
							hasMoreItems: t,
							onLoadMore: s,
							pending: o
						} = this.props, r = !e || t && s ? n.fbt._("View More", null, {
							hk: "1RK8uA"
						}) : n.fbt._("View Less", null, {
							hk: "1M72mK"
						});
						return a.a.createElement(g, {
							onClick: this.onButtonClick
						}, o ? a.a.createElement(m.a, {
							sizePx: f
						}) : r)
					}
				}
				render() {
					const {
						className: e,
						hasMoreItems: t,
						headerButton: s,
						items: n,
						minimizedLength: o,
						renderItem: i,
						title: c
					} = this.props, {
						expanded: l
					} = this.state, m = n.length > o || t, b = (!m || l ? n : r()(n, o)).map(e => i({
						item: e
					}));
					return a.a.createElement(d.a, {
						className: e,
						headerButton: s,
						title: c
					}, b, a.a.createElement(p.a, null, a.a.createElement(u.a, null, m && this.renderToggleButton())))
				}
			}
			v.defaultProps = {
				minimizedLength: c.Gb
			}, t.a = v
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
				i = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				a = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/components/SidebarFooter/index.m.less"),
				d = s.n(c);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), m = r.a.a("Link", d.a), p = Object(a.t)({
				isFrontpage: a.y
			});
			t.a = p(e => o.a.createElement(i.a, {
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
				href: "https://redditgifts.com/"
			}, l._("Reddit gifts", null, {
				hk: "2XziRN"
			})), e.isFrontpage && o.a.createElement(o.a.Fragment, null, o.a.createElement(m, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, l._("Communities", null, {
				hk: "3CJu37"
			})), o.a.createElement(m, {
				href: "https://www.reddit.com/posts/2020/"
			}, l._("Rereddit", null, {
				hk: "1z3k7C"
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
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3thndRe559UZy14xE1gZ_"
			}
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/profile/index.ts"),
				d = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				m = s("./src/reddit/models/User/index.ts"),
				p = s("./src/reddit/selectors/profile.ts"),
				u = s("./src/reddit/selectors/subscriptions.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				x = s.n(h);
			const f = Object(a.c)({
					currentUser: b.i,
					moderated: p.n,
					subscriptions: u.f,
					hasMoreModerated: p.d,
					loadMorePending: p.a
				}),
				g = Object(i.b)(f, (e, t) => ({
					onLoadMoreGqlModeratedSubreddits: () => e(Object(c.c)(t.profileName))
				}), (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, s), e), t), {
					onLoadMore: () => {
						e.hasMoreModerated && t.onLoadMoreGqlModeratedSubreddits()
					}
				})),
				v = e => {
					let {
						item: t
					} = e;
					return r.a.createElement(l.a, {
						id: t.id,
						iconUrl: t.iconUrl,
						isNSFW: t.isNSFW,
						key: "".concat(t.type, "-").concat(t.name),
						name: t.name,
						subscribers: t.subscribers,
						isSubscribed: t.isSubscribed,
						widget: void 0,
						sendEvent: () => void 0,
						type: t.type
					})
				};
			t.a = g(e => {
				const {
					currentUser: t,
					moderated: s,
					profileName: o,
					subscriptions: i,
					hasMoreModerated: a,
					onLoadMore: c,
					loadMorePending: l
				} = e;
				if (0 === s.length) return null;
				const p = t && Object(m.e)(t).toLowerCase() === o.toLowerCase() ? n.fbt._("You're a moderator of these communities", null, {
						hk: "2YoCxy"
					}) : n.fbt._("Moderator of these communities", null, {
						hk: "msvzk"
					}),
					u = function(e, t) {
						return e.map(e => ({
							name: e.name,
							subscribers: e.subscribers,
							iconUrl: e.icon.url,
							isNSFW: e.isNSFW,
							isSubscribed: t.has(e.id),
							type: "user" === e.type ? "profile" : "subreddit",
							sendEvent: () => void 0
						}))
					}(s, new Set(i));
				return r.a.createElement(d.a, {
					className: x.a.container,
					title: p,
					items: u,
					renderItem: v,
					hasMoreItems: a,
					onLoadMore: c,
					pending: l
				})
			})
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.m.less": function(e, t, s) {
			e.exports = {
				listItem: "_3lbnTBPV5H4wHdRz5ATVc9",
				icon: "Vm0_pCIi1Z6JWa0EVf6jK",
				description: "_2xcc4c-4TOL7KOsJidXtl",
				name: "_3nt8_GidTIn88UciXx27E7",
				meta: "_3iC0Hyv57ON8dAtU94HFE_"
			}
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/profile/index.ts"),
				l = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				m = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				p = s("./src/reddit/selectors/profile.ts"),
				u = s("./src/reddit/components/SidebarProfileMultireddits/index.m.less"),
				b = s.n(u);
			const h = Object(c.c)({
					hasMoreMultireddits: p.e,
					loadMorePending: p.b,
					multireddits: p.o
				}),
				x = Object(i.b)(h, (e, t) => ({
					onLoadMoreMultireddits: () => e(Object(d.g)(t.profileName, !0))
				}), (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, s), e), t), {
					onLoadMore: () => {
						e.hasMoreMultireddits && t.onLoadMoreMultireddits()
					}
				})),
				f = e => {
					let {
						item: t
					} = e;
					return r.a.createElement("div", {
						className: b.a.listItem,
						key: t.url
					}, r.a.createElement("img", {
						className: b.a.icon,
						src: t.icon
					}), r.a.createElement("div", {
						className: b.a.description
					}, r.a.createElement(a.a, {
						className: b.a.name,
						to: t.url
					}, t.displayText), r.a.createElement("div", {
						className: b.a.meta
					}, n.fbt._({
						"*": "{communities} communities",
						_1: "1 community"
					}, [n.fbt._plural(t.subredditCount, "communities")], {
						hk: "1eyxrS"
					}))))
				};
			t.a = x(e => {
				const {
					hasMoreMultireddits: t,
					loadMorePending: s,
					multireddits: o,
					onLoadMore: i,
					profileName: a
				} = e;
				return o && o.length ? r.a.createElement(m.a, null, r.a.createElement(l.a, {
					hasMoreItems: t,
					items: o,
					onLoadMore: i,
					pending: s,
					renderItem: f,
					title: n.fbt._("Public custom feeds by u/{profileName}", [n.fbt._param("profileName", a)], {
						hk: "16Oicc"
					})
				})) : null
			})
		},
		"./src/reddit/components/SidebarProfilePowerupContributions/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				d = s("./src/reddit/components/SubredditIcon/index.tsx"),
				l = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				m = s("./src/reddit/selectors/gold/powerups.ts"),
				p = s("./src/reddit/selectors/user.ts"),
				u = s("./node_modules/reselect/es/index.js"),
				b = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				h = s.n(b);
			const x = Object(u.c)({
				subreddits: function(e, t) {
					let {
						profileName: s
					} = t;
					const n = Object(p.hb)(e, {
							userName: s
						}),
						o = Object(m.e)(e);
					return (n && o ? o[n.id] : null) || []
				}
			});

			function f(e) {
				let {
					item: t
				} = e;
				const s = t.subredditInfo,
					o = r.a.createElement(d.b, {
						iconUrl: s.styles.icon,
						className: h.a.subredditIcon
					});
				return r.a.createElement(l.a, {
					className: h.a.communityItemContainer,
					key: s.id
				}, r.a.createElement("div", {
					className: h.a.iconContainer
				}, r.a.createElement(a.a, {
					to: s.path
				}, o)), r.a.createElement("div", {
					className: h.a.communityDescription
				}, r.a.createElement("div", {
					className: h.a.communityName
				}, r.a.createElement(a.a, {
					to: s.path
				}, s.prefixedName)), r.a.createElement("div", {
					className: h.a.subscriberCount
				}, n.fbt._({
					"*": "{number} Powerups",
					_1: "1 Powerup"
				}, [n.fbt._plural(t.powerups, "number")], {
					hk: "3fbcDy"
				}))))
			}
			t.a = Object(i.b)(x)(e => {
				let {
					subreddits: t
				} = e;
				return function(e) {
					return e.length > 0 && e.every(e => e.subredditInfo)
				}(t) ? r.a.createElement(c.a, {
					title: n.fbt._("Supports Communities", null, {
						hk: "1vCNdZ"
					}),
					items: t,
					renderItem: f
				}) : null
			})
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
				StickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				stickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
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
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/components/BackToTop/index.m.less"),
				m = s.n(l);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var u = e => a.a.createElement("div", {
					className: Object(n.a)(e.className, m.a.container),
					style: e.style
				}, a.a.createElement(d.i, {
					className: m.a.button,
					onClick: () => window.scroll(0, 0)
				}, p._("Back to Top", null, {
					hk: "YjBtV"
				}))),
				b = s("./src/reddit/components/SidebarFooter/index.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				g = s.n(f),
				v = s("./src/lib/lessComponent.tsx");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var C = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const E = c.e[1] + 24,
				y = h.f + 8 + 152 + 32 + 16,
				_ = y + E + 8,
				w = v.a.div("Container", g.a),
				k = v.a.wrapped(e => {
					var {
						className: t
					} = e, s = C(e, ["className"]);
					return a.a.createElement(u, O({
						className: t,
						style: {
							top: "calc(100vh - ".concat(40, "px)")
						}
					}, s))
				}, "BackToTop", g.a),
				j = e => {
					let {
						children: t,
						className: s,
						isFakeOverlay: o,
						isSticky: r
					} = e;
					return a.a.createElement("div", {
						className: Object(n.a)(s, {
							[g.a.StickyStyles]: r && !o,
							[g.a.StickyStylesFakeOverlay]: !!o
						})
					}, t)
				};
			class P extends i.Component {
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
							adComponentOnFakeOverlay: t,
							children: s,
							className: n,
							hideFooter: o
						}
					} = this, r = this.state.isAdSticky && !(!e && !s);
					return a.a.createElement(w, {
						className: n,
						innerRef: this.setWrapperRef
					}, a.a.createElement(j, {
						isFakeOverlay: t,
						isSticky: r
					}, e, s, !o && a.a.createElement(b.a, null)), !this.props.hideBackToTop && a.a.createElement(k, null))
				}
			}
			const S = Object(x.t)();
			t.a = S(P)
		},
		"./src/reddit/components/SidebarTrophyCase/index.m.less": function(e, t, s) {
			e.exports = {
				TrophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				trophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				TrophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				trophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				TrophyItem: "QY_PhyoOHbRd-_92ivr-m",
				trophyItem: "QY_PhyoOHbRd-_92ivr-m",
				TrophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				trophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				Description: "_3n5-aYyk15dtyt-boqlDrq",
				description: "_3n5-aYyk15dtyt-boqlDrq"
			}
		},
		"./src/reddit/components/SidebarTrophyCase/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				d = s("./src/reddit/controls/OutboundLink/index.tsx"),
				l = s("./src/reddit/controls/Typography/index.tsx"),
				m = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				p = s("./node_modules/lodash/isEqual.js"),
				u = s.n(p);
			const b = Object(a.b)(a.d, u.a);
			var h = s("./src/reddit/selectors/profile.ts"),
				x = s("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				f = s.n(x),
				g = s("./src/lib/lessComponent.tsx");
			const v = Object(a.c)({
				trophyCase: (e, t) => {
					let {
						profileName: s
					} = t;
					return Object(h.r)(e, Object(h.m)(e, s))
				}
			}, b);
			t.a = Object(i.b)(v)(e => {
				let {
					trophyCase: t
				} = e;
				return 0 === t.length ? null : r.a.createElement(c.a, {
					title: n.fbt._("Trophy Case ({trophyCount})", [n.fbt._param("trophyCount", "".concat(t.length))], {
						hk: "mzh3V"
					}),
					items: t,
					renderItem: w
				})
			});
			const O = g.a.wrapped(m.a, "TrophyItem", f.a),
				C = g.a.div("TrophyIcon", f.a),
				E = g.a.h5("TrophyName", f.a),
				y = g.a.div("TrophyContent", f.a),
				_ = g.a.wrapped(l.c, "Description", f.a);

			function w(e) {
				let {
					item: t
				} = e;
				const s = r.a.createElement("img", {
					src: t.icon,
					title: t.name
				});
				return r.a.createElement(O, {
					key: t.id
				}, r.a.createElement(C, null, t.url ? r.a.createElement(d.b, {
					href: t.url,
					source: void 0,
					isSponsored: !1
				}, s) : s), r.a.createElement(y, null, r.a.createElement(E, null, t.name), r.a.createElement(_, null, t.description)))
			}
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
			s.d(t, "a", (function() {
				return b
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/getShortenedLink.ts"),
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				d = s("./src/reddit/components/SourceLink/index.m.less"),
				l = s.n(d),
				m = s("./src/lib/lessComponent.tsx");
			const p = m.a.wrapped(c.a, "OutboundLinkIcon", l.a),
				u = m.a.div("SourceLinkWrapper", l.a);

			function b(e) {
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
				}, o.a.createElement(a.a, {
					href: c.url,
					isSponsored: d,
					postId: s.id,
					source: c
				}, Object(i.a)(s), o.a.createElement(p, null))) : null
			}
		},
		"./src/reddit/components/StateSort/index.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "KZGTzwiGn_74p_B8yZaKw",
				dropdown: "KZGTzwiGn_74p_B8yZaKw",
				Component: "_3-D0oENu00AlV9AmpZqxfm",
				component: "_3-D0oENu00AlV9AmpZqxfm"
			}
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
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				is2020: "_2CLbCoThTVSANDpeJGlI6a"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return O
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/hooks/useButtons2020.ts"),
				c = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = s("./src/reddit/components/SubscribeButton/Base.m.less"),
				l = s.n(d),
				m = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/lessComponent.tsx");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var b = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const h = p.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, n = b(e, ["border", "small"]);
					return t ? r.a.createElement(i.i, u({}, n, {
						className: Object(m.a)(n.className, {
							[l.a.isSmall]: s
						})
					})) : r.a.createElement(i.o, u({}, n, {
						className: Object(m.a)(n.className, {
							[l.a.isSmall]: s
						})
					}))
				}, "SubscribeInternalButton", l.a),
				x = e => {
					var {
						border: t,
						small: s
					} = e, n = b(e, ["border", "small"]);
					return Object(a.a)() ? r.a.createElement(i.q, u({}, n, {
						priority: t ? i.b.Primary : i.b.Plain,
						className: Object(m.a)(n.className, l.a.is2020),
						size: s ? i.c.S : i.c.M
					})) : r.a.createElement(h, u({}, n, {
						border: t,
						small: s,
						className: Object(m.a)(n.className, {
							[l.a.isSmall]: s
						})
					}))
				},
				f = e => r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
					className: l.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? n.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : n.fbt._("Following", null, {
					hk: "1wQlVR"
				})), r.a.createElement("span", {
					className: l.a.UnsubscribeButtonHover
				}, "subreddit" === e ? n.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : n.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				g = p.a.wrapped(e => {
					var {
						border: t,
						small: s,
						buttonType: n
					} = e, o = b(e, ["border", "small", "buttonType"]);
					const a = f(n),
						c = Object(m.a)(o.className, {
							[l.a.isSmall]: s
						});
					return t ? r.a.createElement(i.l, u({}, o, {
						className: c
					}), a) : r.a.createElement(i.o, u({}, o, {
						className: c
					}), a)
				}, "UnsubscribeButton", l.a),
				v = e => {
					var {
						buttonType: t,
						border: s,
						small: n
					} = e, o = b(e, ["buttonType", "border", "small"]);
					return Object(a.a)() ? r.a.createElement(i.q, u({}, o, {
						priority: s ? i.b.Secondary : i.b.Plain,
						className: Object(m.a)(o.className, l.a.is2020),
						size: n ? i.c.S : i.c.M,
						text: f(t)
					})) : r.a.createElement(g, u({}, o, {
						border: s,
						small: n,
						buttonType: t,
						className: Object(m.a)(o.className, {
							[l.a.isSmall]: n
						})
					}))
				};
			class O extends r.a.Component {
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
						id: s,
						small: n = !1
					} = this.props, o = {
						border: e,
						className: t,
						onClick: this.onClick,
						small: n
					};
					return this.props.userIsSubscriber ? r.a.createElement(v, u({}, o, {
						buttonType: this.props.identifier.type
					})) : r.a.createElement(x, u({}, o, {
						id: s
					}), this.props.children, Object(c.a)({
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
				r = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				i = s("./src/reddit/components/TrackingHelper/index.tsx"),
				a = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				c = s("./src/reddit/contexts/Buttons2020.ts"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				u = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				b = s.n(u),
				h = s("./src/lib/classNames/index.ts"),
				x = s("./src/lib/lessComponent.tsx");

			function f() {
				return (f = Object.assign || function(e) {
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
			const v = x.a.wrapped(e => {
					var {
						small: t,
						shouldReverseColor: s
					} = e, n = g(e, ["small", "shouldReverseColor"]);
					const i = Object(r.b)(),
						a = s ? d.l : d.i;
					return o.a.createElement(a, f({}, n, {
						className: Object(h.a)(n.className, {
							[b.a.isLarge]: !t
						}),
						"data-ignore-click": !!i
					}))
				}, "SubscribeInternalButton", b.a),
				O = x.a.wrapped(e => {
					var {
						small: t,
						belongsToType: s,
						shouldReverseColor: n
					} = e, i = g(e, ["small", "belongsToType", "shouldReverseColor"]);
					const a = Object(r.b)(),
						c = n ? d.i : d.l;
					return o.a.createElement(c, f({}, i, {
						className: Object(h.a)(i.className, {
							[b.a.isLarge]: !t
						}),
						"data-ignore-click": !!a
					}))
				}, "UnsubscribeButton", b.a),
				C = x.a.wrapped(l.a, "Checkmark", b.a),
				E = x.a.wrapped(m.a, "Plus", b.a),
				y = x.a.div("ButtonSpacer", b.a);
			class _ extends o.a.Component {
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
					}, this.renderUnsubscribeButton = e => {
						const t = this.props,
							{
								className: s,
								identifier: n,
								onSubscribe: r,
								onUnsubscribe: i,
								postId: a,
								sendEvent: c,
								small: l = !1,
								size: m,
								userIsSubscriber: u,
								doNotHideOtherSubscribeButtons: x,
								getEventFactory: v,
								onSubscriptionsRequested: E
							} = t,
							y = g(t, ["className", "identifier", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "size", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
							_ = this.state.isHovered,
							w = Object(p.a)({
								type: n.type,
								key: _ ? "unsubscribe" : "subscribed"
							});
						return e ? o.a.createElement(d.q, f({
							className: Object(h.a)(s, b.a.Button2020),
							priority: y.shouldReverseColor ? d.b.Primary : d.b.Secondary,
							Icon: l || !l && !_ ? C : void 0,
							text: !l && w,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: m || (l ? d.c.XS : d.c.S)
						}, y)) : o.a.createElement(O, f({
							className: Object(h.a)(s, {
								[b.a.isLarge]: !l,
								[b.a.unsubscribeButtonHoverStyles]: !l
							}),
							onClick: this.onClick,
							small: l,
							belongsToType: n.type,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}, y), l && o.a.createElement(C, null), !l && !_ && o.a.createElement(C, null), !l && w)
					}, this.renderSubscribeButton = e => {
						const t = this.props,
							{
								className: s,
								identifier: n,
								onSubscribe: r,
								onUnsubscribe: i,
								postId: a,
								sendEvent: c,
								small: l = !1,
								size: m,
								userIsSubscriber: u,
								doNotHideOtherSubscribeButtons: x,
								getEventFactory: O,
								onSubscriptionsRequested: C
							} = t,
							y = g(t, ["className", "identifier", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "size", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
							_ = Object(p.a)({
								type: n.type,
								key: "subscribe"
							});
						return e ? o.a.createElement(d.q, f({
							className: s,
							priority: y.shouldReverseColor ? d.b.Secondary : d.b.Primary,
							Icon: E,
							size: m || (l ? d.c.XS : d.c.S),
							text: !l && _,
							onClick: this.onClick
						}, y, {
							id: "subscribe-button-".concat(a),
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						})) : o.a.createElement(v, f({
							className: Object(h.a)(s, {
								[b.a.isLarge]: !l
							}),
							onClick: this.onClick,
							small: l
						}, y, {
							id: "subscribe-button-".concat(a),
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}), o.a.createElement(E, null), !l && _)
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						small: e = !1,
						userIsSubscriber: t,
						doNotHideOtherSubscribeButtons: s
					} = this.props;
					return t ? this.state.hasJustSubscribed || s ? o.a.createElement(c.a.Consumer, null, this.renderUnsubscribeButton) : e ? null : o.a.createElement(y, null) : o.a.createElement(c.a.Consumer, null, this.renderSubscribeButton)
				}
			}
			t.a = Object(a.a)(Object(i.c)(_))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
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
				i = e => {
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
		"./src/reddit/components/TimeSort/index.m.less": function(e, t, s) {
			e.exports = {
				ListingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey",
				listingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey"
			}
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
				i = s("./src/reddit/components/SEOTitle/index.tsx"),
				a = s("./src/reddit/components/Widgets/Base/index.m.less"),
				c = s.n(a),
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
					return o.a.createElement("div", s, o.a.createElement(i.b, {
						type: i.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => o.a.createElement("div", {
				className: e.className
			}, o.a.createElement(l, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return k
			})), s.d(t, "a", (function() {
				return P
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/Flair/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/index.tsx"),
				p = s("./src/reddit/actions/subscription/index.ts");
			var u = Object(i.b)(null, (e, t) => {
					const s = t.widget.id || void 0;
					return {
						onSubscribe: () => e(p.d([t.identifier], !0, s)),
						onSubscriptionsRequested: () => e(p.e()),
						onUnsubscribe: () => e(p.d([t.identifier], !1, s))
					}
				})(s("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				v = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				O = s("./src/reddit/models/Flair/index.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				y = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				_ = s.n(y);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const k = e => r.a.createElement(b.a, {
					className: Object(d.a)(_.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, r.a.createElement("div", {
					className: _.a.container
				}, e.isLoading ? r.a.createElement(f.a, {
					className: _.a.loadingIcon,
					sizePx: 32
				}) : r.a.createElement(r.a.Fragment, null, e.isError ? r.a.createElement("p", {
					className: _.a.errorMsg
				}, e.errorMsg || n.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : r.a.createElement(r.a.Fragment, null, e.communities.map(t => r.a.createElement(P, w({
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
				})))), e.bottomButtonText && e.onBottomButtonClick && r.a.createElement(x.o, {
					className: _.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				j = Object(c.c)({
					hideNSFWPref: C.A
				}),
				P = Object(i.b)(j)(e => r.a.createElement("div", {
					className: _.a.communityItemContainer
				}, r.a.createElement(v.a, {
					widthRight: h.t
				}, r.a.createElement("div", {
					className: _.a.iconContainer
				}, e.communityIcon || e.iconUrl ? r.a.createElement("img", {
					className: _.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : r.a.createElement(g.a, {
					className: _.a.planetIcon,
					"data-redditstyle": !0
				})), r.a.createElement("div", {
					className: _.a.communityDescriptionContainer
				}, r.a.createElement(a.a, {
					className: _.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(E.b)(e.name, e.type),
					to: Object(E.a)(e.name, e.type)
				}, Object(E.b)(e.name, e.type)), r.a.createElement("div", {
					className: _.a.communityInfoContainer
				}, !!e.subscribers && r.a.createElement("p", {
					className: _.a.subscriberCount
				}, n.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [n.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && r.a.createElement(l.b, {
					flair: {
						type: O.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? r.a.createElement(f.a, {
					className: Object(d.a)(_.a.communityCta, _.a.smallLoadingIcon),
					sizePx: 12
				}) : r.a.createElement(x.o, {
					className: Object(d.a)(_.a.communityCta, {
						[_.a.showOnHover]: e.showTertiaryButtonOnHover
					}),
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? r.a.createElement(u, {
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
				}) : r.a.createElement(m.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && r.a.createElement("p", {
					title: e.description,
					className: _.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/posts.ts"),
				o = s("./src/reddit/helpers/name/index.ts");

			function r(e, t) {
				return (t === n.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function i(e, t) {
				return t === n.a.PROFILE ? Object(o.d)(e) : Object(o.c)(e)
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
		"./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1zLylbOLqdzG2C4JhdkEVQ",
				twitterLogo: "_1N1dJvzR-m3nNoVl8cxHul",
				link: "JqNsQRTEcAPCq8_G0O5mO",
				linkDescription: "_2Y1Xv08xrWbsDZuEvIuRKo",
				name: "_28fbIV1TS_oSVjfzjWnM0f",
				linkTitle: "elMVR2YfkbHdFTihhlUK4",
				linkIcon: "oi2L0mBSRAULcOPEtjXSh",
				description: "KKNu_jB7N6A-PuBrW0WoR",
				visitButton: "NBL39n3gjYvG4c9qlXJIk"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.m.less": function(e, t, s) {
			e.exports = {
				account: "_25M-5tlJjQOChCI8sg84QU"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/components/Widgets/Base/index.tsx"),
				l = s("./src/reddit/constants/posts.ts"),
				m = s("./src/reddit/helpers/trackers/profileSettings.ts"),
				p = s("./src/reddit/models/ExternalAccount/index.ts"),
				u = s("./src/reddit/selectors/externalAccount.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				h = s("./node_modules/fbt/lib/FbtPublic.js"),
				x = s("./src/reddit/controls/OutboundLink/index.tsx"),
				f = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				g = s("./src/reddit/icons/svgs/Twitter/index.tsx"),
				v = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				O = s("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				C = s.n(O);
			var E = e => {
					const {
						account: t,
						clickEvent: s,
						provider: n
					} = e;
					let r, i = t.username,
						a = "";
					return n !== p.a.Twitter ? null : (r = o.a.createElement(g.a, {
						className: C.a.twitterLogo
					}), a = h.fbt._("View on Twitter", null, {
						hk: "39S5oy"
					}), i = "@".concat(t.username), o.a.createElement(v.a, null, o.a.createElement("span", {
						className: C.a.icon
					}, r), o.a.createElement(x.b, {
						className: C.a.link,
						href: t.link,
						isSponsored: !1,
						source: void 0,
						onClick: s
					}, o.a.createElement("div", {
						className: C.a.linkTitle
					}, o.a.createElement("span", {
						className: C.a.name
					}, i), o.a.createElement(f.a, {
						className: C.a.linkIcon
					})), o.a.createElement("div", {
						className: C.a.linkDescription
					}, a))))
				},
				y = s("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				_ = s.n(y);
			const {
				fbt: w
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = Object(i.c)({
				twitterAccount: (e, t) => {
					let {
						subredditOrProfile: s
					} = t;
					return s.type === l.a.PROFILE ? Object(u.c)(e, {
						profileName: s.name
					}) : null
				},
				user: (e, t) => {
					let {
						subredditOrProfile: s
					} = t;
					return s.type === l.a.PROFILE ? Object(b.hb)(e, {
						userName: s.name
					}) : null
				}
			}), j = Object(r.b)(k, e => ({
				trackTwitterAccountClicked: t => e((e, s) => m.k(s(), t))
			}), (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, s), e), t), {
				onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
			}));
			t.a = Object(c.c)(j(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: s
				} = e;
				return s ? o.a.createElement(a.a, null, o.a.createElement(d.b, null, o.a.createElement(d.a, null, w._("Connected accounts", null, {
					hk: "1ce9Jz"
				})), s && o.a.createElement("div", {
					className: _.a.account
				}, o.a.createElement(E, {
					provider: p.a.Twitter,
					account: s,
					clickEvent: t
				})))) : null
			}))
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
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/selectors/telemetry.ts");
			const b = (e, t) => s => Object.assign({
				source: "community_widgets",
				action: "click",
				noun: "see_more",
				widget: Object(u.widget)(s, {
					subredditId: e,
					widgetKind: t
				})
			}, u.defaults);
			var h = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				x = s("./src/reddit/selectors/experiments/topPosts.ts"),
				f = s("./src/reddit/selectors/structuredStyles.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/models/Theme/index.ts"),
				O = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const C = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(O.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				E = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(O.a)(e).widgetColors.sidebarWidgetHeaderColor,
				y = e => {
					const t = C(e);
					return Object(v.f)(t)
				},
				_ = e => {
					const t = E(e);
					return Object(v.f)(t)
				};
			var w = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				k = s.n(w);
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js"), P = Object(m.t)(), S = Object(r.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(m.m)(e, t) || void 0,
						n = t.redditStyle || Object(f.m)(e, {
							subredditId: s
						}),
						o = Object(g.T)(e);
					return n || o
				},
				nigtmode: g.T,
				subredditId: m.m,
				topPostVariant: x.d
			}));
			class I extends o.a.Component {
				constructor() {
					super(...arguments), this.contentRef = o.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(b(e, t)), this.setState({
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
					return e.backgroundColor = C(this.props), e.borderColor = Object(h.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = y(this.props), e
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
						onClick: i,
						title: c,
						titleClassName: l,
						truncateThreshold: m
					} = this.props, u = s ? k.a.widgetContentOnly : k.a.widgetContent, b = !n && this.props.styles, h = b ? this.getWidgetBackgroundStyles() : {}, x = b ? this.getWidgetHeaderStyles() : {};
					return o.a.createElement("div", {
						className: Object(a.a)(t, k.a.widgetBackground, {
							[k.a.redditStyle]: n,
							[k.a.clickable]: !!i,
							[k.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: i,
						style: h
					}, c && o.a.createElement("div", {
						className: k.a.widgetHeader,
						style: x
					}, o.a.createElement("div", {
						className: Object(a.a)(k.a.widgetTitle, l)
					}, o.a.createElement(d.b, {
						type: d.a.Widget
					}, c)), r), o.a.createElement("div", {
						className: Object(a.a)(u, {
							[k.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? m : "none"
						}
					}, e), this.state.isTruncated && o.a.createElement(p.o, {
						className: k.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, j._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = P(S(Object(c.a)(Object(l.c)(I))))
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return x
			})), s.d(t, "b", (function() {
				return f
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/tooltip.ts"),
				a = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/InsideOverlay.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				m = s("./src/reddit/selectors/chatPost.ts"),
				p = s("./src/reddit/selectors/moderatorPermissions.ts"),
				u = s("./src/reddit/selectors/postFlair.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/user.ts");
			const x = {
					autoplayPref: h.b,
					activeModalId: l.a,
					crosspost: b.d,
					currentUser: h.i,
					isActive: b.j,
					isChatPost: m.d,
					isCurrentUserProfilePost: b.k,
					isExpanded: b.m,
					isLoggedIn: h.I,
					isMeta: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(b.r)(e, s)
					},
					imageGalleryCurrentItem: b.i,
					moderatorPermissions: p.i,
					modModeEnabled: d.P,
					post: b.O,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: u.a,
					showMedia: d.r,
					subredditOrProfile: b.bb,
					userIsOp: h.kb,
					flairStyleTemplate: d.R
				},
				f = (e, t) => {
					let {
						listingKey: s,
						listingName: n,
						postId: o
					} = t;
					return {
						handleVote: t => {
							const s = t === a.a.upvoted ? Object(r.S)(o) : Object(r.q)(o);
							e(s)
						},
						onIgnoreReports: () => e(Object(r.Q)(o)),
						onOpenReportsDropdown: t => e(Object(i.h)({
							tooltipId: t
						}))
					}
				},
				g = Object(n.b)(() => Object(o.c)(x), f, (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), s), {
					formatTitle: e => e.title
				}));
			t.a = e => g(Object(c.b)(e))
		},
		"./src/reddit/connectors/ClassicPost/searchResults.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/es6.regexp.constructor.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/LRUCache/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/connectors/ClassicPost/index.tsx");
			const l = Object(c.t)({
					searchQuery: c.V
				}),
				m = new a.a(250),
				p = e => {
					const t = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const s = "".concat(e.id, "-").concat(t);
						let n = m.get(s);
						if (void 0 === n) {
							const r = new RegExp("(\\b".concat(t, "\\b)"), "gi"),
								i = e.title.split(r);
							for (let e = 1; e < i.length; e += 2) i[e] = o.a.createElement("em", {
								style: {
									fontWeight: 700
								}
							}, i[e]);
							n = o.a.createElement("span", {
								style: {
									fontWeight: "normal"
								}
							}, o.a.Children.toArray(i)), m.set(s, n)
						}
						return n
					}
				},
				u = Object(r.b)(() => Object(i.c)(d.c), d.b, (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), s), {
					formatTitle: p(s.searchQuery || "")
				}));
			t.a = e => l(u(e))
		},
		"./src/reddit/connectors/OverviewChronoList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return g
			}));
			var n = s("./node_modules/lodash/noop.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/actions/postList.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/isComment.ts"),
				p = s("./src/reddit/helpers/isPost.ts"),
				u = s("./src/reddit/helpers/trackers/post.ts"),
				b = s("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				h = s("./src/reddit/selectors/subreddit.ts"),
				x = s("./src/reddit/selectors/tracking.ts"),
				f = s("./src/reddit/selectors/user.ts");
			const g = (e, t) => (e, t, s) => Object(m.a)(e) ? 120 : 47,
				v = Object(l.t)(),
				O = {
					apiError: b.a,
					apiPending: b.b,
					currentUser: f.i,
					layout: l.N,
					loadMore: b.d,
					subredditsById: h.ab,
					viewportDataLoaded: x.a,
					commentsById: b.g,
					itemIds: b.f,
					itemIdToPostId: b.e,
					postsById: b.h,
					estimateItemHeight: g
				},
				C = Object(i.c)(O),
				E = Object(r.b)(C, (e, t) => ({
					onBottomViewed: (t, s) => e(c.c(t, s)),
					openPost: t => {
						e(a.C(t))
					},
					trackOnPostEnteredViewport: (t, s) => {
						Object(p.a)(t) && e(a.F(t))
					},
					trackOnPostExitedViewport: (t, s, n) => {
						Object(p.a)(t) && e(a.G(t, n))
					},
					fireAdPixelsOfType: o.a
				}), (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), s), {
					postClickEventFactory: (e, t) => Object(u.f)(e, t)
				}));
			t.a = e => Object(d.c)(v(E(e)))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "b", (function() {
				return j
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/index.ts"),
				c = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/actions/postList.ts"),
				l = s("./src/reddit/actions/survey/index.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				b = s("./src/reddit/helpers/trackers/post.ts"),
				h = s("./src/reddit/components/PostList/Placeholder.tsx"),
				x = s("./src/reddit/featureFlags/index.ts"),
				f = s("./src/reddit/selectors/experiments/econ/predictions.ts"),
				g = s("./src/reddit/selectors/experiments/survey.ts"),
				v = s("./src/reddit/selectors/listings.ts"),
				O = s("./src/reddit/selectors/posts.ts"),
				C = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/selectors/tracking.ts");

			function y() {
				return Object(p.t)({
					currentProfileName: p.h,
					isCommentPermalink: p.v,
					isCommentsPage: p.w,
					isFrontpage: p.y,
					isProfilePostListing: p.I,
					isTopicPage: p.M,
					pageLayer: e => e
				})
			}
			const _ = y(),
				w = {
					apiError: v.c,
					apiPending: v.d,
					measureScrollFPS: x.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.N)(e, t),
					loadMore: v.g,
					postsById: (e, t) => Object(O.Z)(e, Object.assign(Object.assign({}, t), {
						predictionsEnabled: Object(f.a)(e)
					})),
					postIds: Object(r.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: o
						} = t;
						return Object(O.L)(e, s, n, o, Object(f.a)(e))
					}),
					subredditsById: C.ab,
					viewportDataLoaded: E.a,
					pageReferrer: p.Q,
					postListPlaceholderComponent: () => h.a,
					isNpsScrollSurveyEnabled: g.c
				},
				k = Object(o.c)(w),
				j = (e, t) => {
					let {
						isFrontpage: s
					} = t;
					return {
						onBottomViewed: (t, s) => e(d.c(t, s)),
						adBrandSafetyStatusReceived: t => {
							e(i.d({
								isViewSafe: t
							}))
						},
						openPost: t => {
							s && e(Object(a.a)({
								lastLoadedEnv: "server"
							})), e(c.C(t))
						},
						fireAdPixelsOfType: (t, s) => {
							e(c.t(t, s))
						},
						trackOnPostEnteredViewport: (t, s, n) => {
							e(c.F(t, n))
						},
						trackOnPostExitedViewport: (t, s, n, o) => {
							e(c.G(t, n, o))
						},
						surveyTriggerScrollCounted: () => e(Object(l.b)())
					}
				},
				P = Object(n.b)(k, j, (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), s), {
					postClickEventFactory: (e, t) => Object(b.f)(e, t, "post", s.listingKey, s.hostPostId, s.listingBelowVariant),
					postComponentForLayout: e => Object(u.b)(Object.assign({}, e))
				}));
			t.a = e => Object(m.c)(_(P(e)))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/subscription/index.ts"),
				i = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(n.b)(() => Object(o.c)({
				userIsSubscriber: i.gb
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
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/postFlair.ts"),
				a = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/models/Vote/index.ts"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				m = s("./src/reddit/selectors/moderatorPermissions.ts"),
				p = s("./src/reddit/selectors/postFlair.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(n.b)(() => Object(o.c)({
				activeModalId: l.a,
				autoplayPref: b.b,
				crosspostRoot: u.d,
				crosspostSubredditOrProfile: u.e,
				currentUser: b.i,
				flairStyleTemplate: d.R,
				hideNSFWPref: b.A,
				isActive: u.j,
				moderatorPermissions: m.i,
				modModeEnabled: d.P,
				post: u.O,
				showEditFlair: p.a,
				subredditOrProfile: u.bb,
				userIsOp: b.kb
			}), (e, t) => {
				let {
					postId: s
				} = t;
				return {
					dispatchFlairChanged: t => {
						let {
							post: s,
							previewFlair: n,
							selectedTemplateId: o
						} = t;
						return e(Object(i.h)({
							post: s,
							previewFlair: n,
							selectedTemplateId: o
						}))
					},
					handleVote: t => {
						const n = t === c.a.upvoted ? Object(r.S)(s) : Object(r.q)(s);
						e(n)
					},
					onIgnoreReports: () => e(Object(r.Q)(s)),
					onOpenReportsDropdown: t => e(Object(a.h)({
						tooltipId: t
					}))
				}
			}, (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, s), e), t), {
				onFlairChanged: s => {
					let {
						previewFlair: n,
						selectedTemplateId: o
					} = s;
					return t.dispatchFlairChanged({
						post: e.post,
						previewFlair: n,
						selectedTemplateId: o
					})
				}
			}), {
				forwardRef: !0
			});
			t.a = h
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
				return i
			})), s.d(t, "e", (function() {
				return a
			}));
			const n = "comment",
				o = "comment-submission-form-markdown",
				r = "comment-submission-form-richtext",
				i = "comments-page-link-num-comments",
				a = "post-content"
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts");
			const r = {
					[o.O.BEST]: () => n.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[o.O.HOT]: () => n.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[o.O.NEW]: () => n.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[o.O.CONTROVERSIAL]: () => n.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[o.O.RISING]: () => n.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[o.O.TOP]: () => n.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[o.O.AWARDED]: () => n.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				i = e => {
					const t = r[e];
					return t && t() || ""
				},
				a = {
					[o.Sb.HOUR]: () => n.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[o.Sb.DAY]: () => n.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[o.Sb.WEEK]: () => n.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[o.Sb.MONTH]: () => n.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[o.Sb.YEAR]: () => n.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[o.Sb.ALL]: () => n.fbt._("All Time", null, {
						hk: "3qt6Ct"
					})
				},
				c = e => {
					const t = a[e];
					return t && t() || ""
				}
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
				return i
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "g", (function() {
				return d
			}));
			const n = "PostCreation-AddEventButton",
				o = 500,
				r = "PostCreation-CollectionEducationTooltip",
				i = "PostCreation-EventEducationTooltip",
				a = 300,
				c = a,
				d = "PostCreation-AddToCollectionButton"
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = o.a.createContext({})
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
				i = s("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = s("./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx"),
				c = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				d = s("./src/reddit/controls/Checkbox/index.m.less"),
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
			const u = e => t => {
					const {
						className: s,
						disabled: n,
						redditStyle: i,
						"data-redditstyle": a
					} = t, c = p(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), d = ((e, t, s) => {
						const n = !(!t && !s);
						let o = "";
						return o = e ? n ? l.a.mDisabledRedditStyle : l.a.mDisabled : n ? l.a.mActiveRedditStyle : l.a.mActive
					})(n, i, a);
					return o.a.createElement(e, m({
						className: Object(r.a)(l.a.Checkbox, d, s)
					}, c))
				},
				b = u(c.a),
				h = u(a.a);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? h : e.isCheckboxSelected ? b : i.a;
				return o.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: e.className,
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, o.a.createElement(t, {
					className: Object(r.a)(l.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/controls/CheckboxMenuItem/index.m.less": function(e, t, s) {
			e.exports = {
				checkbox: "_2zOuGd5s9dLeXmKJ8TJF9T",
				checkboxSelected: "LevaZhN5EO7Pei7YvAi1W",
				sharedIconStyles: "_19iKCOTFpWIyFwZ0bqQhg",
				checkboxMenuItem: "_2eawLPCtwzvTZhWKtaUgZQ",
				expandRight: "_34Odk7t6y-rCPxPcYJa4Nw",
				postCheckboxMenuItem: "_3LyKu57c-QkPvlFvAgWop5"
			}
		},
		"./src/reddit/controls/CheckboxMenuItem/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
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
				}, e.isSelected ? o.a.createElement(a.a, {
					className: l.a.checkboxSelected
				}) : o.a.createElement(i.a, {
					className: l.a.checkbox
				}), e.text)),
				b = e => {
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
				return g
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/lodash/throttle.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/index.m.less"),
				u = s.n(p),
				b = s("./src/reddit/controls/Dropdown/row.m.less"),
				h = s.n(b);

			function x() {
				return (x = Object.assign || function(e) {
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
			class g extends i.a.Component {
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
					}, s = Object(a.a)(h.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? i.a.createElement(c.a, x({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && i.a.createElement("span", {
						className: s
					}, e.children), i.a.createElement("span", {
						className: Object(a.a)(h.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(m.a, x({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: o()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: s
					}, e.children)), e.displayText && i.a.createElement("span", {
						className: Object(a.a)(h.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(l.a, {
						className: h.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(d.a, {
						className: u.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				var {
					className: t
				} = e, s = f(e, ["className"]);
				const n = Object(a.a)(h.a.row, t, {
					[h.a.mIsInteractive]: !s.noHover,
					[h.a.mIsSelected]: s.isSelected,
					[h.a.topics]: s.isTopicsStyle
				});
				return i.a.createElement(g, x({
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
			s.d(t, "a", (function() {
				return k
			})), s.d(t, "c", (function() {
				return j
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/uniqueId.js"),
				r = s.n(o),
				i = s("./node_modules/raf/index.js"),
				a = s.n(i),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./node_modules/react-redux/es/index.js"),
				m = s("./node_modules/reselect/es/index.js"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				b = s("./src/reddit/selectors/activeModalId.ts"),
				h = s("./src/higherOrderComponents/asModal/index.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/layout/row/Inline/index.tsx"),
				g = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				v = s.n(g);
			var O = Object(h.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return d.a.createElement("div", {
						className: v.a.wrapper
					}, d.a.createElement(f.a, {
						className: v.a.titleRow
					}, s), d.a.createElement("div", {
						className: v.a.detailsContainer
					}, t), d.a.createElement(f.a, {
						className: v.a.buttonRow
					}, d.a.createElement(x.i, {
						className: v.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				C = s("./src/reddit/controls/ErrorText/index.m.less"),
				E = s.n(C);
			const y = Object(m.c)({
				activeModalId: b.a
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
						errorModalBody: o,
						errorModalTitle: r = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: i = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: a,
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
					}, i), t === a && d.a.createElement(O, {
						onConfirmed: this.toggleModal,
						title: r
					}, o || e))
				}
			}
			const w = Object(l.b)(y, e => ({
					toggleErrorTextModal: t => e(Object(u.i)(t))
				}))(_),
				k = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: n,
						fallbackMessage: o,
						messages: r = []
					} = e, i = r.length ? r : o ? [o] : [];
					return i.length ? d.a.createElement("div", {
						className: t
					}, i.map((e, t) => d.a.createElement(w, {
						className: s,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				j = e => d.a.createElement(k, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
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
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "d", (function() {
				return b
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/lib/prettyPrintNumber/index.ts"),
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
			const m = i.a.span("metaText", d.a),
				p = e => r.a.createElement(m, e, " · "),
				u = e => {
					var {
						isScoreHidden: t,
						score: s,
						useUpvotes: o
					} = e, i = l(e, ["isScoreHidden", "score", "useUpvotes"]);
					const c = Object(a.b)(s),
						d = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(s, "number", c)], {
							hk: "2L3T21"
						}),
						p = t ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : o ? d : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(s, "number", c)], {
							hk: "gf67v"
						});
					return r.a.createElement(m, i, p)
				},
				b = e => r.a.createElement(m, null, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(e, "number", Object(a.b)(e))], {
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
				i = s.n(r);
			t.a = n.a.wrapped(o.a, "unstyledInternalLink", i.a)
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/models/WhitelistStatus/index.ts");
			const o = (e, t) => {
				const s = e.some(e => e.isNSFW),
					o = t.some(e => e.wls === n.b.NO_ADS);
				return !s && !o
			}
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
		"./src/reddit/helpers/isRemoved.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/humanizeUTCDate/index.tsx");
			const r = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? n.fbt._("Approved by {username} at {time}", [n.fbt._param("username", e.approvedBy), n.fbt._param("time", Object(o.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : n.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				i = n.fbt._("Action taken by Automoderator", null, {
					hk: "1zud7K"
				}),
				a = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : n.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (t = t + "\n" + n.fbt._("Reason by {username}:", [n.fbt._param("username", "u/".concat(e.bannedBy))], {
						hk: "3qLdNZ"
					}) + e.modRemovalReason), e.modNote && (t = t + "\n" + n.fbt._("Note:", null, {
						hk: "2LD4vO"
					}) + e.modNote), t
				},
				c = e => n.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [n.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				d = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed as spam by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : n.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
		},
		"./src/reddit/helpers/postComponentForLayout/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "b", (function() {
				return C
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/isUrl/index.ts"),
				a = s("./src/lib/logs/console.ts"),
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
					importAsync: () => Promise.all([s.e("vendors~PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-Compa~16c34322"), s.e("vendors~Governance~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~c822ce19"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49"), s.e("AuthorHovercard~Governance~InFeedChaining~Reddit~SubredditHovercard~reddit-components-ClassicPost~re~2f1a95cc"), s.e("Governance~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-Larg~9453fc9d"), s.e("reddit-components-ClassicPost")]).then(s.bind(null, "./src/reddit/components/ClassicPost/index.tsx")),
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
					importAsync: () => Promise.all([s.e("vendors~PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-Compa~16c34322"), s.e("vendors~Governance~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~c822ce19"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49"), s.e("AuthorHovercard~Governance~InFeedChaining~Reddit~SubredditHovercard~reddit-components-ClassicPost~re~2f1a95cc"), s.e("Governance~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-Larg~9453fc9d"), s.e("reddit-components-CompactPost")]).then(s.bind(null, "./src/reddit/components/CompactPost/index.tsx")),
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
					importAsync: () => Promise.all([s.e("vendors~PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-Compa~16c34322"), s.e("vendors~Governance~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~c822ce19"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~a66c4d66"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Profi~dfd687ea"), s.e("ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49"), s.e("AuthorHovercard~Governance~InFeedChaining~Reddit~SubredditHovercard~reddit-components-ClassicPost~re~2f1a95cc"), s.e("Governance~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-Larg~9453fc9d"), s.e("reddit-components-LargePost")]).then(s.bind(null, "./src/reddit/components/LargePost/index.tsx")),
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
				b = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-MediumPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-Compa~16c34322"), s.e("vendors~Governance~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~c822ce19"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), s.e("ModerationPages~PostDraft~ProfileComments~ProfileOverview~ProfilePrivate~RpanListingUnit~SearchResul~972c7c49"), s.e("Governance~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-Larg~9453fc9d"), s.e("Governance~Reddit~reddit-components-MediumPost"), s.e("RpanListingUnit~reddit-components-MediumPost"), s.e("Reddit~reddit-components-MediumPost"), s.e("reddit-components-MediumPost")]).then(s.bind(null, "./src/reddit/components/MediumPost/index.tsx")),
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
				h = {
					[c.g.Large]: u,
					[c.g.Medium]: b,
					[c.g.Classic]: m,
					[c.g.Compact]: p
				},
				x = e => r.a.createElement(l, e),
				f = ["https://www.mcdonalds.com", "https://d2n94wep25xhn0.cloudfront.net", "https://www.dyson.com", "https://dyson.com", "https://www.bestbuy.com", "https://www.goarmy.com", "https://www.samsung.com"],
				g = e => e.source && e.source.url && e.isSponsored && f.some(t => e.source.url.startsWith(t)),
				v = e => !e.media || e.media.type === d.o.EMBED && !(d.b.has(e.media.provider) || g(e)),
				O = (e, t) => {
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

			function C(e) {
				let {
					isCrosspost: t,
					isFirstPost: s,
					layout: n,
					post: o
				} = e;
				if (o.isBlank) return x;
				const r = !o.media && !!o.source && Object(i.a)(o.source.url),
					d = t && r;
				n === c.g.Large && v(o) && !d && (n = c.g.Medium);
				const l = h[n];
				return void 0 === l ? (Object(a.a)(void 0, "Could not find component for layout ".concat(n, ".")), x) : s && o.isSponsored && n === c.g.Large ? b : l
			}
		},
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !e.ignoreReports && (e.numReports || 0) > 0
		},
		"./src/reddit/helpers/styles/mixins/index.m.less": function(e, t, s) {
			e.exports = {
				baseLargeAndMediumPostStyles: "_2lHXa-mLMsRfm1Q5JxgU4r",
				basePostStyles: "REwsaLIz5u3DhM7zbbzIU",
				classicPostStyles: "bE7JgM2ex7W3aF3zci5bm",
				compactPostStyles: "FeLWdhOO-cVXowAo3Rndk",
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
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "d", (function() {
				return f
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = s("./src/reddit/models/Theme/index.ts"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const m = {},
				p = e => Object(a.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				u = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(a.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(a.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: p(t)
					}
				},
				b = e => Object(n.l)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : m,
				x = e => e.isActive ? l.a.mIsActive : void 0,
				f = e => {
					const t = Object(r.a)(Object(o.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/gallery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return a
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/helpers/parseUrl.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, s) => Object.assign({
					gallery: r.gallery(e, t, s),
					post: r.post(e, t)
				}, r.defaults(e)),
				a = (e, t) => s => Object.assign(Object.assign({}, i(s, e, t)), {
					action: n.c.VIEW,
					noun: "media",
					source: "gallery",
					media: r.media(s, e)
				}),
				c = (e, t, s) => a => {
					const c = Object(o.a)(t);
					return Object.assign(Object.assign({}, i(a, e, s)), {
						action: n.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: Object.assign(Object.assign({}, r.media(a, e)), {
							outboundUrl: t,
							outboundDomain: c ? c.hostname : void 0
						})
					})
				},
				d = (e, t) => m(e, !0, t),
				l = (e, t) => m(e, !1, t),
				m = (e, t, s) => o => Object.assign(Object.assign({}, i(o, e, s)), {
					action: n.c.CLICK,
					noun: t ? "forward" : "backward",
					source: "gallery"
				})
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
			s.d(t, "i", (function() {
				return a
			})), s.d(t, "y", (function() {
				return c
			})), s.d(t, "m", (function() {
				return d
			})), s.d(t, "p", (function() {
				return l
			})), s.d(t, "q", (function() {
				return m
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "o", (function() {
				return b
			})), s.d(t, "r", (function() {
				return h
			})), s.d(t, "k", (function() {
				return x
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "n", (function() {
				return v
			})), s.d(t, "h", (function() {
				return O
			})), s.d(t, "g", (function() {
				return E
			})), s.d(t, "l", (function() {
				return y
			})), s.d(t, "t", (function() {
				return _
			})), s.d(t, "j", (function() {
				return w
			})), s.d(t, "e", (function() {
				return k
			})), s.d(t, "x", (function() {
				return j
			})), s.d(t, "u", (function() {
				return P
			})), s.d(t, "a", (function() {
				return S
			})), s.d(t, "s", (function() {
				return I
			})), s.d(t, "v", (function() {
				return N
			})), s.d(t, "w", (function() {
				return T
			}));
			var n = s("./src/reddit/models/ScheduledPost/index.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const r = e => Object.assign(Object.assign({}, o.defaults(e)), {
					screen: o.screen(e),
					subreddit: o.subreddit(e),
					userSubreddit: o.userSubreddit(e)
				}),
				i = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(n.p)(e)
				}),
				a = () => e => Object.assign({
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
				b = e => t => Object.assign(Object.assign({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit"
				}, r(t)), {
					scheduledPost: i(e)
				}),
				h = e => t => Object.assign(Object.assign({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit"
				}, r(t)), {
					scheduledPost: i(e)
				}),
				x = () => e => Object.assign({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts"
				}, r(e)),
				f = () => e => Object.assign({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts"
				}, r(e)),
				g = () => e => Object.assign({
					source: "post",
					action: "click",
					noun: "edit_post"
				}, r(e)),
				v = () => e => Object.assign({
					source: "post",
					action: "click",
					noun: "submit_post_now"
				}, r(e)),
				O = e => t => Object.assign(Object.assign({
					source: "post",
					action: "click",
					noun: "overflow_menu"
				}, r(t)), {
					actionInfo: o.actionInfo(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				C = {
					[n.d.Hourly]: "hourly_frequency",
					[n.d.Daily]: "daily_frequency",
					[n.d.Weekly]: "weekly_frequency",
					[n.d.Monthly]: "monthly_frequency",
					[n.b]: "custom_frequency"
				},
				E = e => t => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : C[e]
				}, r(t)),
				y = () => e => Object.assign({
					source: "post",
					action: "click",
					noun: "start_event_now"
				}, r(e)),
				_ = (e, t, s) => i => Object.assign(Object.assign({
					source: "post",
					action: "click",
					noun: Object(n.l)(e)
				}, r(i)), {
					actionInfo: o.actionInfo(i, {
						settingValue: t ? "true" : "false",
						pageType: s ? "recurring_posts" : "scheduled_posts"
					})
				}),
				w = () => e => Object.assign({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta"
				}, r(e)),
				k = () => e => Object.assign({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post"
				}, r(e)),
				j = () => e => Object.assign({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer"
				}, r(e)),
				P = () => (e, t) => Object.assign(Object.assign({
					source: "recurring_post_composer",
					action: "click",
					noun: "update"
				}, r(e)), {
					scheduledPost: i(t)
				}),
				S = () => e => Object.assign({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel"
				}, r(e)),
				I = () => (e, t) => Object.assign(Object.assign({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete"
				}, r(e)), {
					scheduledPost: i(t)
				}),
				N = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer"
				}, r(e)),
				T = () => (e, t) => {
					const s = r(e);
					return Object.assign(Object.assign({
						source: "post",
						action: "view",
						noun: "error"
					}, s), {
						actionInfo: Object.assign(Object.assign({}, s.actionInfo), {
							reason: "failed_post"
						}),
						scheduledPost: i(t)
					})
				}
		},
		"./src/reddit/hooks/useOnClickOutside.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js");

			function o(e, t) {
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
			}
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("approve"), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("archived"), c.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Calendar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("calendar"), c.a.calendarIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Comment/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
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
					className: Object(r.a)(Object(i.b)("comment"), c.a.commentIcon, t)
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
				i = s("./src/reddit/icons/fonts/Crosspost/index.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("crosspost"), " ").concat(a.a.CrosspostIcon, " ").concat(e.className)
			})
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.m.less": function(e, t, s) {
			e.exports = {
				DistinguishShield: "_3qx_qM22xH7s5oSucqWca",
				distinguishShield: "_3qx_qM22xH7s5oSucqWca"
			}
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/DistinguishShield/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("distinguishShield"), " ").concat(e.className)
			}), "DistinguishShield", a.a);
			t.a = c
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
				i = s("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("dropdownTriangle"), " ").concat(e.className)
			}), "DropdownTriangle", a.a);
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
				i = s("./src/reddit/icons/fonts/Embed/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("embed"), " ").concat(e.className)
			}), "EmbedIcon", a.a);
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
				i = s("./src/reddit/icons/fonts/Envelope/index.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("envelope"), " ").concat(a.a.Envelope, " ").concat(e.className)
			})
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
				i = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoArrowCollapse"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", a.a);
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
				i = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoArrowExpand"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less": function(e, t, s) {
			e.exports = {
				LightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3",
				lightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoMediaLightbox"), " ").concat(e.className),
				onClick: e.onClick
			}), "LightboxIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Hide/index.m.less": function(e, t, s) {
			e.exports = {
				HideIcon: "_1ps3GcyMra2ZVakeRQFnGj",
				hideIcon: "_1ps3GcyMra2ZVakeRQFnGj"
			}
		},
		"./src/reddit/icons/fonts/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Hide/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("hide"), " ").concat(e.className)
			}), "HideIcon", a.a);
			t.a = c
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
				i = s("./src/reddit/icons/fonts/IgnoreReport/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("ignoreReport"), " ").concat(e.className)
			}), "IgnoreReportIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("live"), c.a.liveIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("lock"), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
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
				i = s("./src/reddit/icons/fonts/Menu/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/ModActions/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
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
			t.a = e => o.a.createElement("i", d({}, e, {
				className: Object(r.a)(Object(i.b)("modActions"), c.a.modActions, e.className)
			}))
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, s) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/fonts/Op/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Op/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("op"), " ").concat(e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(r.a, null, e.desc)), "OpIcon", a.a);
			t.a = c
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
				i = s("./src/reddit/icons/fonts/Pencil/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("pencil"), " ").concat(e.className)
			}), "PencilIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("remove"), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("report"), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
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
				i = s("./src/reddit/icons/fonts/Save/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("save"), " ").concat(e.className)
			}), "SaveIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("share"), c.a.shareIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("spam"), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("sticky"), c.a.stickyIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
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
				i = s("./src/reddit/icons/fonts/Tag/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("tag"), " ").concat(e.className)
			}), "TagIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Unpin/index.m.less": function(e, t, s) {
			e.exports = {
				UnpinIcon: "_1X-tE86a0YWmVh310hgKTZ",
				unpinIcon: "_1X-tE86a0YWmVh310hgKTZ"
			}
		},
		"./src/reddit/icons/fonts/Unpin/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Unpin/index.m.less"),
				c = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("unpin"), e.className)
			}), "UnpinIcon", c.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, s) {
			e.exports = {
				iconFont: "WxKparxaBCy4-EWML7xc3",
				approveIcon: "MAe2tslj1FAD6GliiZ3it",
				calendarIcon: "_2YXLfgRGcJoCJROcTAGqir",
				commentIcon: "_3ch9jJ0painNf41PmU4F9i",
				lockIcon: "XHMWG1CPWX8RXeNg-o5-R",
				modActions: "_3phKxmomoio9ulzAoL4XhZ",
				moderateIcon: "_2Xt7ltq8LezAkf8ZF8x9dv",
				removeIcon: "_2IVG3b9-lczna8tonL9FWB",
				reportIcon: "_1MDjRAzxk1RSTB12748O1v",
				shareIcon: "xwmljjCrovDE5C9MasZja",
				spamIcon: "_1Gn6JH0U8GJtJXSIc54IMU",
				stickyIcon: "hMF1wBi2Z6Lh9zHskfhX1",
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

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Automoderator/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M16,2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2ZM5.5,15.5h-1v-3h1Zm2,0h-1v-3h1ZM6,9A2,2,0,1,1,8,7,2,2,0,0,1,6,9Zm3.5,6.5h-1v-3h1Zm2,0h-1v-3h1Zm2,0h-1v-3h1Zm2,0h-1v-3h1ZM14,9a2,2,0,1,1,2-2A2,2,0,0,1,14,9Z"
			}))
		},
		"./src/reddit/icons/svgs/Best/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M18.06,3a1,1,0,0,0-1-1A11.16,11.16,0,0,0,9.11,5.29L6.72,7.68A4.45,4.45,0,0,0,4.33,7,4.5,4.5,0,0,0,1.15,8.3a.5.5,0,0,0,0,.71L4,11.84l4.25,4.24,2.83,2.83h0a.48.48,0,0,0,.7,0,4.49,4.49,0,0,0,.62-5.57L14.76,11A11.15,11.15,0,0,0,18.06,3ZM13.47,9.41a2,2,0,0,1-2.88-2.77l.05,0a2,2,0,0,1,2.83,2.82Z"
			}), o.a.createElement("path", {
				d: "M3.21,14.73h0A3.89,3.89,0,0,0,2.06,17.5a.5.5,0,0,0,.5.5,4,4,0,0,0,2.83-1.21,1.5,1.5,0,1,0-2.18-2.06Z"
			}))
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
		"./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("g", {
				transform: "translate(-32.000000, -173.000000)"
			}, o.a.createElement("g", {
				transform: "translate(32.000000, 173.000000)"
			}, o.a.createElement("path", {
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, s) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, o.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), o.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("path", {
				d: "M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"
			}))
		},
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("path", {
				d: "M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Controversial/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("polygon", {
				fill: "inherit",
				points: "16 0 7.25 0 3.5 10.108 8.5 10.108 4.475 20 16 8 11 8"
			})))
		},
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("path", {
				d: "M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"
			}), o.a.createElement("path", {
				d: "M15.18,11.76a1,1,0,0,0-1.68.74V14c-2.23-.16-3.29-1.32-4.39-2.56-.21-.24-.43-.48-.66-.72a5.63,5.63,0,0,1-1.77,1.06,13.34,13.34,0,0,1,.94,1A7.85,7.85,0,0,0,13.5,16v1.59a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74Z"
			}))
		},
		"./src/reddit/icons/svgs/Flag/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("polygon", {
				fill: "inherit",
				points: "0 20 20 20 20 0 0 0",
				opacity: "0"
			}), o.a.createElement("path", {
				fill: "inherit",
				d: "M11.71875,3.14525 C14.60125,1.54375 18.75025,3.48025 18.75025,3.48025 L18.75025,13.55475 C18.75025,13.55475 14.86875,11.81975 11.71875,13.21975 C8.70525,14.55925 4.68725,12.88475 4.68725,12.88475 L4.68725,2.81025 C4.68725,2.81025 8.70525,4.81925 11.71875,3.14525 Z M2.75,18.75 C2.232,18.75 2,18.3305 2,17.8125 L2,2.8125 C2,2.2945 2.232,1.875 2.75,1.875 C3.268,1.875 3.5,2.2945 3.5,2.8125 L3.5,17.8125 C3.5,18.3305 3.268,18.75 2.75,18.75 Z"
			}))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Hot/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("title", null, "Hot"), o.a.createElement("path", {
				d: "M10.31.61a.5.5,0,0,0-.61,0C9.41.83,2.75,6.07,2.75,11.47a8.77,8.77,0,0,0,3.14,6.91.5.5,0,0,0,.75-.64,3.84,3.84,0,0,1-.55-2A7.2,7.2,0,0,1,10,9.56a7.2,7.2,0,0,1,3.91,6.23,3.84,3.84,0,0,1-.55,2,.5.5,0,0,0,.75.64,8.77,8.77,0,0,0,3.14-6.91C17.25,6.07,10.59.83,10.31.61Z"
			}))
		},
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("path", {
				d: "M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"
			}))
		},
		"./src/reddit/icons/svgs/New/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("polygon", {
				fill: "inherit",
				points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
			})))
		},
		"./src/reddit/icons/svgs/Pin/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M18.71,7.75,17.24,6.29,13.71,2.76,12.25,1.29a1,1,0,0,0-1.41,0L10,2.15a1,1,0,0,0-.26,1l.46,1.78L6.89,8.17,5.11,7.71a1,1,0,0,0-1,.26l-.86.86a1,1,0,0,0,0,1.41l1.47,1.47.62.62L.6,18.7a.5.5,0,0,0,.7.7l6.37-4.78.62.62,1.47,1.47a1,1,0,0,0,1.41,0l.86-.86a1,1,0,0,0,.26-1l-.46-1.78,3.28-3.28,1.78.46a1,1,0,0,0,.25,0,1,1,0,0,0,.71-.29l.86-.86A1,1,0,0,0,18.71,7.75Z"
			})))
		},
		"./src/reddit/icons/svgs/Rising/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
			})))
		},
		"./src/reddit/icons/svgs/Save/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2qT9eltTv4vv9GxxEZqvc0"
			}
		},
		"./src/reddit/icons/svgs/Save/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Save/index.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("defs", null, o.a.createElement("path", {
				id: "".concat("save-svg", "a"),
				d: "M14 16.209l-3.403-1.486a1.52 1.52 0 0 0-1.198.002L6 16.21V5.5c0-.52-.087-1.024-.255-1.5H12.5c.827 0 1.5.673 1.5 1.5V16.21zM12.5 2h-11a.5.5 0 1 0 0 1C2.879 3 4 4.12 4 5.5v12.236a.999.999 0 0 0 1.4.916l4.6-2.008 4.6 2.008a1 1 0 0 0 1.4-.917V5.5C16 3.57 14.43 2 12.5 2z"
			})), o.a.createElement("g", {
				fill: "inherit",
				fillRule: "evenodd"
			}, o.a.createElement("path", {
				d: "M0 20h20V0H0z",
				fill: "none"
			}), o.a.createElement("mask", {
				id: "".concat("save-svg", "b"),
				fill: "none"
			}, o.a.createElement("use", {
				xlinkHref: "#".concat("save-svg", "a")
			})), o.a.createElement("use", {
				fill: "inherit",
				xlinkHref: "#".concat("save-svg", "a")
			}), o.a.createElement("g", {
				mask: "url(#".concat("save-svg", "b)"),
				fill: "none"
			}, o.a.createElement("path", {
				d: "M0 0h20v20H0z"
			}))))
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
				i = s("./src/reddit/icons/svgs/Saved/index.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
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
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
			})))
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
				i = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				a = s.n(i);
			const c = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
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
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function r(e) {
				return o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 400 400",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					fill: "inherit",
					d: "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
				}))
			}
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, s) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/layout/row/RightAlign/index.m.less"),
				r = s.n(o);
			t.a = n.a.div("rightAligned", r.a)
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
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = s.n(a);
			t.a = Object(r.a)(e => o.a.createElement("div", {
				className: Object(i.a)(c.a.expandedCenterContainer, e.className)
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
					gutter: a
				} = e, m = l(e, ["className", "children", "heightLeft", "widthLeft", "gutter"]);
				return o.a.createElement("div", d({
					className: Object(i.a)(c.a.expandRightContainer, t)
				}, m), o.a.createElement("div", {
					className: c.a.left,
					style: {
						flexBasis: r,
						height: n,
						marginRight: a
					}
				}, Array.isArray(s) && s[0]), o.a.createElement("div", {
					className: c.a.right
				}, Array.isArray(s) && s[1]))
			}, 2)
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, s) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/pages/ErrorPages/index.m.less"),
				c = s.n(a);
			const d = e => {
					let {
						message: t
					} = e;
					return r.a.createElement("div", {
						className: c.a.container
					}, r.a.createElement("h3", {
						className: c.a.title
					}, t || n.fbt._("Sorry, there doesn't seem to be anything here.", null, {
						hk: "3VvHek"
					})), r.a.createElement(i.k, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, n.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				},
				l = e => {
					let {
						message: t
					} = e;
					return r.a.createElement("div", {
						className: c.a.container
					}, r.a.createElement("h3", {
						className: c.a.title
					}, t || n.fbt._("Sorry, You do not have permission to view this page.", null, {
						hk: "4lRbHD"
					})), r.a.createElement(i.k, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, n.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				}
		},
		"./src/reddit/pages/ProfileOverview/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.regexp.search.js");
			var n = s("./node_modules/lodash/fromPairs.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/isFakeSubreddit/index.ts"),
				m = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/lib/constants/index.ts"),
				b = s("./src/reddit/actions/pages/profileOverview.ts"),
				h = s("./src/reddit/actions/pages/profileShared.ts"),
				x = s("./src/reddit/actions/profileConversations.ts"),
				f = s("./src/reddit/actions/profileOverviewChrono.ts"),
				g = s("./src/reddit/components/ContentGate/index.tsx"),
				v = s("./src/reddit/components/EmptyProfile/index.ts"),
				O = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				C = s("./src/reddit/components/JumpToContent/index.tsx"),
				E = s("./src/lib/classNames/index.ts"),
				y = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				_ = s("./src/reddit/components/ProfileItemList/index.tsx"),
				w = s("./src/reddit/connectors/OverviewChronoList/index.ts"),
				k = s("./src/reddit/components/OverviewChronoList/index.m.less"),
				j = s.n(k),
				P = s("./src/lib/lessComponent.tsx");

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const I = Object(w.a)(P.a.wrapped(e => {
				const {
					className: t,
					itemIds: s
				} = e, n = s.length > 0;
				return i.a.createElement(_.a, S({
					className: Object(E.a)(t, {
						[j.a.ComponentHasItems]: n
					})
				}, e))
			}, "Component", j.a));
			var N = e => i.a.createElement(I, S({}, e, {
					itemComponent: y.a
				})),
				T = s("./src/reddit/components/PostList/index.tsx"),
				M = s("./src/reddit/components/TrackingHelper/index.tsx"),
				L = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				R = s("./src/lib/isPinnedAdminPost/index.ts"),
				F = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				A = s("./node_modules/lodash/last.js"),
				B = s.n(A);
			var D = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				W = s("./src/reddit/selectors/posts.ts"),
				H = s("./src/reddit/components/ClassicPost/index.tsx"),
				U = s("./src/reddit/components/LargePost/index.tsx"),
				V = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				G = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				z = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				K = s("./src/reddit/selectors/profile.ts"),
				q = s("./src/reddit/components/OverviewConversationsPost/ExtraCommentsItem/index.m.less"),
				J = s.n(q);
			const {
				fbt: X
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Z = P.a.div("ExtraCommentsItemWrapper", J.a), Q = P.a.p("ExtraComments", J.a), Y = P.a.wrapped(Q, "ExtraCommentsInteractive", J.a);
			var $ = Object(a.b)(() => Object(c.c)({
					extraCommentsItem: K.c,
					extraCommentsPending: (e, t) => {
						const {
							extraCommentsId: s
						} = t, {
							extraComments: n
						} = e.profileOverviewPage.conversations;
						return !!n.api.pending[s]
					}
				}), (e, t) => {
					let {
						profileName: s
					} = t;
					return {
						extraCommentsClicked: t => e(Object(x.g)(s, t.postId, t.id))
					}
				})(e => {
					let {
						extraCommentsClicked: t,
						extraCommentsItem: s,
						extraCommentsPending: n
					} = e;
					return i.a.createElement(Z, null, n ? i.a.createElement(Q, null, X._("Loading...", null, {
						hk: "47z90C"
					})) : i.a.createElement(z.a.Consumer, null, e => i.a.createElement(Y, {
						onClick: e => {
							t(s), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, X._("Load more comments", null, {
						hk: "1jXJxb"
					}))))
				}),
				ee = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				te = s("./src/reddit/constants/postLayout.ts"),
				se = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ne = s.n(se),
				oe = s("./src/reddit/components/OverviewConversationsPost/index.m.less"),
				re = s.n(oe);

			function ie() {
				return (ie = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ae = P.a.div("BackgroundWrapper", re.a),
				ce = P.a.wrapped(H.default, "ClassicPost", re.a),
				de = P.a.wrapped(V.a, "OverviewCommentPost", re.a),
				le = Object(p.t)({
					currentProfileName: p.h,
					isFrontpage: p.y,
					pageLayer: e => e
				}),
				me = Object(a.b)(() => Object(c.c)({
					commentThreadLinkSets: (e, t) => {
						let {
							postId: s,
							currentProfileName: n
						} = t;
						const o = n ? n.toLowerCase() : "",
							r = Object(F.a)(s, o);
						return e.profileOverviewPage.conversations.keyToCommentThreadLinkSets[r]
					},
					headComment: (e, t) => {
						let {
							postId: s,
							currentProfileName: n
						} = t;
						const o = n ? n.toLowerCase() : "",
							r = Object(F.a)(s, o);
						return e.profileOverviewPage.conversations.keyToHeadCommentId[r]
					},
					isInitiallyPinned: (e, t) => {
						let {
							postId: s,
							currentProfileName: n
						} = t;
						return !!n && Object(W.q)(e, s, n)
					},
					isPinned: (e, t) => {
						let {
							postId: s,
							currentProfileName: n
						} = t;
						return !!n && Object(W.v)(e, s, n)
					},
					post: W.O,
					profileName: (e, t) => {
						let {
							currentProfileName: s
						} = t;
						if (s) return ((e, t) => {
							const {
								users: s
							} = e, n = t.toLowerCase(), o = s.models[n];
							return o ? o.username : void 0
						})(e, s)
					},
					layout: p.N
				})),
				pe = P.a.wrapped(U.default, "OverviewLargePost", re.a);
			var ue = Object(L.a)(le(me(e => {
					const {
						availableWidth: t,
						className: s,
						commentThreadLinkSets: n,
						eventFactory: o,
						forceLoadMedia: r,
						headComment: a,
						isFrontpage: c,
						isInitiallyPinned: d,
						isPinned: l,
						isScrolling: m,
						last: p,
						layout: u,
						onClickPost: b,
						onSizeChanged: h,
						pageLayer: x,
						post: f,
						postId: g,
						profileName: v,
						scrollerItemRef: O
					} = e, C = {
						last: p,
						onClickPost: b,
						postId: g
					};
					if (!v) return null;
					const y = v === f.author,
						_ = Object(R.a)(l, f.distinguishType);
					if (!y && !a && !_) return null;
					const w = a ? function(e) {
							const t = [],
								s = e.length;
							for (let n = 0; n < s; n++) {
								(0 === n || e[n - 1].depth !== e[n].depth - 1) && t.push([]), B()(t).push(e[n])
							}
							return t
						}(function(e, t) {
							const s = [];
							let n = t,
								o = "comment";
							for (; n;) {
								const t = e[n];
								s.push({
									id: n,
									depth: t.depth,
									type: o
								}), t.next ? (n = t.next.id, o = t.next.type) : n = void 0
							}
							return s
						}(n, a)) : [],
						k = w.length - 1;
					return i.a.createElement("div", {
						className: Object(E.a)(ne.a.largeAndMediumActiveStyles, ne.a.largeAndMediumPostStyles, re.a.OverviewConversationsPost, s),
						style: Object.assign(Object.assign({}, Object(D.b)()), Object(D.d)(e))
					}, i.a.createElement(G.a, {
						isFirst: !0,
						isLast: k < 0,
						key: f.id
					}, !y && !!a && i.a.createElement(de, ie({}, C, {
						commentId: a,
						key: f.id,
						profileName: v
					})), (y || _) && (u === te.g.Classic ? i.a.createElement(ce, {
						availableWidth: t,
						eventFactory: o,
						inSubredditOrProfile: !1,
						isOverlay: !1,
						isScrolling: m,
						forceLoadMedia: r,
						last: p,
						onClickPost: b,
						onSizeChanged: h,
						pageLayer: x,
						postId: g,
						scrollerItemRef: O
					}) : i.a.createElement(pe, {
						availableWidth: t,
						eventFactory: o,
						isScrolling: m,
						isFrontpage: c,
						forceLoadMedia: r,
						last: p,
						onClickPost: b,
						onSizeChanged: h,
						pageLayer: x,
						postId: g,
						scrollerItemRef: O
					}))), i.a.createElement(ae, {
						style: {
							background: Object(D.e)(e)
						}
					}, !d && w.map((e, t) => i.a.createElement(G.a, {
						isLast: t === k,
						key: "".concat(t, "-isLast[").concat(t === k, "]")
					}, e.map((t, s) => {
						const n = 0 === s,
							o = s === e.length - 1;
						return "comment" === t.type ? i.a.createElement(ee.a, {
							commentId: t.id,
							depth: t.depth,
							isFirst: n,
							isLast: o,
							key: t.id,
							profileName: v,
							showModTools: !0
						}) : i.a.createElement($, {
							extraCommentsId: t.id,
							key: t.id,
							profileName: v
						})
					})))))
				}))),
				be = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				he = s("./src/reddit/helpers/trackers/post.ts"),
				xe = s("./src/reddit/selectors/tracking.ts"),
				fe = s("./src/reddit/connectors/PostList/index.ts");
			const ge = Object(c.c)(Object.assign(Object.assign({}, fe.d), {
					postIds: W.V,
					viewportDataLoaded: xe.a
				})),
				ve = Object(fe.c)(),
				Oe = Object(a.b)(ge, fe.b, (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), s), {
					postClickEventFactory: (e, t) => Object(he.f)(e, t),
					postComponentForLayout: e => {
						let {
							post: t
						} = e;
						return t.isBlank ? be.a : ue
					}
				}));
			var Ce = (e => Object(M.c)(ve(Oe(e))))(T.a),
				Ee = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				ye = s("./node_modules/lodash/debounce.js"),
				_e = s.n(ye),
				we = s("./src/reddit/actions/post.ts"),
				ke = s("./src/lib/isUrl/index.ts"),
				je = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				Pe = s("./src/reddit/components/Media/index.tsx"),
				Se = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				Ie = s("./src/reddit/components/PostContainer/index.tsx"),
				Ne = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				Te = s("./src/reddit/components/PostTitle/index.tsx"),
				Me = s("./src/reddit/connectors/miniCardPost.ts"),
				Le = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				Re = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				Fe = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				Ae = s("./src/reddit/models/Media/index.ts"),
				Be = s("./node_modules/fbt/lib/FbtPublic.js"),
				De = s("./src/reddit/components/CommentsLink/index.tsx"),
				We = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				He = s("./src/reddit/components/Flatlist/index.tsx"),
				Ue = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				Ve = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				Ge = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				ze = s("./src/reddit/components/ShareMenu/index.tsx"),
				Ke = s("./src/reddit/icons/fonts/Share/index.tsx"),
				qe = s("./src/reddit/models/User/index.ts"),
				Je = s("./src/reddit/components/MiniCardPost/Flatlist/index.m.less"),
				Xe = s.n(Je);
			const Ze = "-MiniCardModMenu",
				Qe = "-MiniCardOverflowMenu",
				Ye = "-MiniCardShareMenu",
				$e = P.a.wrapped(We.a, "HorizontalVotes", Xe.a),
				et = P.a.button("ShareButton", Xe.a),
				tt = Object(p.t)({
					currentProfileName: p.h,
					isCommentPermalink: p.v,
					isCommentsPage: p.w,
					isProfilePostListing: p.I,
					pageLayer: e => e
				}),
				st = Object(c.c)({
					layout: p.N,
					subreddit: p.q
				});
			var nt = tt(Object(a.b)(st, {})(Object(M.c)(e => {
					const {
						currentProfileName: t,
						className: s,
						currentUser: n,
						handleVote: o,
						hasModFlairPerms: r,
						hasModFullPerms: a,
						hasModPostPerms: c,
						isCommentsPage: d,
						isCommentPermalink: l,
						isOverlay: m,
						isProfilePostListing: p,
						isSticky: u,
						layout: b,
						modModeEnabled: h,
						onCommentsClick: x,
						post: f,
						sendEvent: g,
						showEditFlair: v,
						showEditPost: O,
						subreddit: C
					} = e, y = e => g(Object(he.f)(f.id, e)), _ = f.postId, w = Object(He.d)(Ze, f.id, m, u), k = !!n && Object(qe.e)(n) === f.author;
					return i.a.createElement("div", {
						className: Object(E.a)(Xe.a.flatlistContainer, s)
					}, i.a.createElement($e, {
						compact: !1,
						model: f,
						onVoteClick: o,
						scoreClassName: Xe.a.score
					}), i.a.createElement(De.a, {
						hasModPostPerms: c,
						isCommentsPage: d,
						isCommentPermalink: l,
						isOverlay: m,
						postId: f.id,
						modModeEnabled: h,
						numComments: f.numComments,
						type: te.g.Compact,
						onClick: x
					}), i.a.createElement(ze.a, {
						className: Xe.a.shareMenu,
						dropdownId: Object(He.d)(Ye, f.id, m, u),
						permalink: f.permalink,
						post: f,
						sendEventWithName: y,
						subreddit: C
					}, i.a.createElement(et, null, i.a.createElement(Ke.a, {
						className: Xe.a.shareIcon
					}), i.a.createElement("span", {
						className: Xe.a.shareText
					}, Be.fbt._("share", null, {
						hk: "mmJV5"
					})))), c && i.a.createElement(Ue.a, {
						dropdownId: w,
						onClick: () => y("post_mod_action_menu")
					}, i.a.createElement(He.b, {
						className: Xe.a.modActionsIcon
					}), i.a.createElement(Ve.a, {
						canEditFlair: r && !!v,
						hasModPostPerms: c,
						hasModFullPerms: a,
						isOverlay: !!m,
						isPostAuthor: k,
						modModeEnabled: h,
						post: f,
						tooltipId: w
					})), i.a.createElement(Ge.g, {
						currentProfileName: t,
						isCommentsPage: d,
						isOverlay: !!m,
						isProfilePostListing: p,
						layout: b,
						pageLayer: e.pageLayer,
						permalink: f.permalink,
						postId: _,
						dropdownId: Object(He.d)(Qe, f.id, m, u),
						isFixed: u,
						sendEvent: g,
						showEditPost: !!O,
						showEditFlair: !!v,
						useFlatlistBreakpoints: Object(Ge.h)({
							editPost: !1,
							save: !1,
							hide: !1,
							report: !1
						})
					}))
				}))),
				ot = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				rt = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				it = s("./src/reddit/components/MiniCardPost/index.m.less"),
				at = s.n(it);
			var ct = Object(p.t)()(Object(Me.a)(Object(L.a)(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: n,
						crosspostRoot: o,
						crosspostSubredditOrProfile: r,
						currentUser: a,
						eventFactory: c,
						flairStyleTemplate: d,
						forceLoadMedia: l,
						hideNSFWPref: m,
						moderatorPermissions: p,
						modModeEnabled: u,
						onClickPost: b,
						post: h,
						scrollerItemRef: x,
						shouldPause: f,
						showMetaLine: g = !0,
						showEditFlair: v,
						subredditOrProfile: O,
						userIsOp: C
					} = e, {
						media: y
					} = o || h, _ = y && y.type, w = Object(Ne.b)(h.id), k = _ === Ae.o.RTJSON, j = C && k, P = Object(Fe.a)(p), S = Object(Le.a)(p), I = Object(Re.a)(p), N = y && _ !== Ae.o.RTJSON && _ !== Ae.o.TEXT, T = !y && !!h.source && Object(ke.a)(h.source.url), M = y && i.a.createElement(Pe.a, {
						autoplayPref: t,
						availableWidth: s,
						className: at.a.media,
						imageBoxClassName: at.a.mediaImageBox,
						imageBoxContentImageClassName: at.a.mediaImageBoxContentImage,
						forceAspectRatio: Ae.c,
						isListing: !0,
						isMiniCard: !0,
						isNotCardView: !0,
						post: o || h,
						scrollerItemRef: x,
						shouldPause: f,
						shouldLoad: l,
						showCentered: !0,
						showFull: !1
					});
					return i.a.createElement(Ie.a, {
						className: Object(E.a)(at.a.postContainer, ne.a.largeAndMediumActiveStyles, ne.a.largeAndMediumPostStyles, Object(D.a)(e), n),
						style: Object.assign(Object.assign({}, Object(D.b)(e.flairStyleTemplate)), Object(D.d)(e)),
						post: h,
						onClick: b,
						eventFactory: c
					}, i.a.createElement(Se.a, {
						className: at.a.backgroundWrapper,
						flairStyleTemplate: d
					}, N && M, i.a.createElement("div", {
						className: at.a.innerContainer
					}, T && i.a.createElement(rt.a, {
						post: h,
						templatePlaceholderImage: d ? d.postPlaceholderImage : void 0
					}), i.a.createElement(Te.c, {
						className: at.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: h,
						size: Te.b.Large,
						titleColor: d && d.postTitleColor
					}), g && O && i.a.createElement(ot.a, {
						className: at.a.metaLine,
						crosspostSubredditOrProfile: r,
						hideNSFWPref: m,
						post: h,
						subredditOrProfile: O
					}), !N && i.a.createElement("div", {
						className: at.a.mediaWrapper
					}, M), i.a.createElement("div", {
						className: at.a.flexSpacer
					}), i.a.createElement(nt, {
						currentUser: a,
						handleVote: e.handleVote,
						hasModFlairPerms: S,
						hasModFullPerms: I,
						hasModPostPerms: P,
						modModeEnabled: u,
						post: h,
						showEditFlair: v,
						showEditPost: j
					}))), e.activeModalId === w && i.a.createElement(Ne.a, {
						flairs: h.flair,
						subredditId: h.belongsTo.id,
						modalId: w,
						onFlairChanged: e.onFlairChanged
					}), i.a.createElement(je.d, {
						postId: h.id
					}))
				}))),
				dt = s("./src/reddit/helpers/getClickInfo.ts"),
				lt = s("./src/reddit/helpers/localStorage/index.ts"),
				mt = s("./src/reddit/selectors/user.ts"),
				pt = s("./src/reddit/icons/svgs/Pin/index.tsx"),
				ut = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/index.m.less"),
				bt = s.n(ut);
			const {
				fbt: ht
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var xt = e => i.a.createElement("div", {
					className: Object(E.a)(bt.a.container, e.className)
				}, i.a.createElement(pt.a, {
					className: bt.a.pin
				}), i.a.createElement("div", {
					className: bt.a.title
				}, ht._("Show off that karma!", null, {
					hk: "2yqUT7"
				})), e.children),
				ft = s("./src/reddit/controls/TextButton/index.tsx"),
				gt = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/Education.m.less"),
				vt = s.n(gt);
			const {
				fbt: Ot
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var Ct = e => i.a.createElement(xt, {
					className: Object(E.a)(vt.a.container, e.className)
				}, i.a.createElement("div", {
					className: vt.a.description
				}, Ot._('Pin a post from your feed using the "..." at the bottom of each post', null, {
					hk: "4lkJRB"
				})), i.a.createElement(ft.a, {
					className: vt.a.gotIt,
					onClick: e.onGotItClick
				}, Ot._("OK, I got it", null, {
					hk: "1JMx7x"
				}))),
				Et = s("./src/reddit/components/ProfilePinnedPosts/index.m.less"),
				yt = s.n(Et);
			const {
				fbt: _t
			} = s("./node_modules/fbt/lib/FbtPublic.js"), wt = 320, kt = 300, jt = Object(c.c)({
				arePinnedPostsLoaded: W.a,
				currentUser: mt.i,
				pinnedPostIds: W.W
			}), Pt = Object(a.b)(jt, e => ({
				openPost: t => e(Object(we.C)(t))
			}));
			class St extends i.a.Component {
				constructor() {
					super(...arguments), this.containerRef = null, this.state = {
						showEducation: !1,
						pauseMedia: !1
					}, this.setContainerRef = e => this.containerRef = e, this.handleScroll = _e()(() => {
						if (!this.containerRef) return;
						const e = this.containerRef.getBoundingClientRect();
						e.bottom < kt ? this.pauseMedia() : e.top > 0 && this.playMedia()
					}, 250, {
						leading: !0
					}), this.playMedia = () => {
						this.setState(e => e.pauseMedia ? {
							pauseMedia: !1
						} : null)
					}, this.pauseMedia = () => {
						this.setState(e => e.pauseMedia ? null : {
							pauseMedia: !0
						})
					}, this.onGotItClick = () => {
						Object(lt.kb)(), this.setState({
							showEducation: !1
						})
					}, this.onClickPost = (e, t) => {
						this.props.openPost({
							postOrComment: t,
							clickInfo: Object(dt.a)(e)
						})
					}, this.renderPost = e => i.a.createElement(ct, {
						availableWidth: wt,
						className: Object(E.a)(yt.a.item, yt.a.miniCardPost),
						forceLoadMedia: !this.state.pauseMedia,
						key: e,
						onClickPost: this.onClickPost,
						postId: e,
						shouldPause: this.state.pauseMedia
					})
				}
				componentDidMount() {
					this.setState({
						showEducation: !Object(lt.y)()
					}), document.addEventListener("scroll", this.handleScroll), this.handleScroll()
				}
				componentWillUnmount() {
					document.removeEventListener("scroll", this.handleScroll)
				}
				render() {
					const {
						arePinnedPostsLoaded: e,
						pinnedPostIds: t,
						children: s
					} = this.props;
					if (!e) return null;
					const n = !!this.props.currentUser && this.props.profileName === Object(qe.e)(this.props.currentUser),
						o = t.length > 0,
						r = !o && this.state.showEducation && n;
					if (!o && !r) return null;
					const a = n && this.props.pinnedPostIds.length % 2 != 0;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: yt.a.title
					}, _t._("Pinned posts", null, {
						hk: "3prRc3"
					})), r ? i.a.createElement(Ct, {
						className: Object(E.a)(yt.a.item, yt.a.education),
						onGotItClick: this.onGotItClick
					}) : i.a.createElement("div", {
						ref: this.setContainerRef,
						className: yt.a.container
					}, t.map(this.renderPost), a && i.a.createElement(xt, {
						className: yt.a.item
					})), s)
				}
			}
			var It = Object(p.t)()(Pt(St)),
				Nt = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				Tt = s("./src/reddit/helpers/trackers/screenview.ts"),
				Mt = s("./src/reddit/layout/page/Listing/index.tsx"),
				Lt = s("./src/reddit/models/ContentGate.ts"),
				Rt = s("./src/reddit/pages/ErrorPages/index.tsx");

			function Ft() {
				return (Ft = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const At = (e, t) => {
					let {
						location: s
					} = t;
					return o()([...Object(d.a)(s.search)])
				},
				Bt = Object(p.t)(),
				Dt = Object(c.a)(p.B, mt.Y, At, p.N, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.profileName
				}, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.sort
				}, (e, t) => {
					let {
						match: s
					} = t;
					return Object(K.j)(e, {
						profileName: s.params.profileName
					})
				}, (e, t) => Object(h.a)(e, At(0, t)), (e, t) => {
					let {
						match: s
					} = t;
					return !Object(W.n)(e, {
						profileName: s.params.profileName
					})
				}, mt.I, (e, t) => {
					let {
						match: s
					} = t;
					return Object(mt.e)(e, u.Ub + s.params.profileName)
				}, (e, t, s, n, o, r, i, a, c, d, l) => {
					let {
						sort: p,
						t: b
					} = a;
					const h = n === te.g.Compact ? u.kb : u.lb,
						x = Object(m.a)(o, h, p, s),
						{
							sort: f
						} = s;
					return {
						contentGateInfo: l,
						over18Prefs: t,
						isLoggedIn: d,
						isOwnProfile: e,
						isProfileNSFW: !!i && i.isNSFW,
						layout: n,
						listingKey: x,
						profileName: o,
						shouldShowPinnedPostsSection: c && !f,
						sort: p,
						timeSort: b
					}
				}),
				Wt = Object(a.b)(Dt, (e, t) => ({
					onLoadMoreChronoItems: () => e(f.d({
						profileName: t.match.params.profileName,
						sort: t.match.params.sort
					})),
					onLoadMoreConversationsItems: () => e(x.h({
						profileName: t.match.params.profileName,
						sort: t.match.params.sort
					})),
					onLayoutChange: () => e(Object(b.g)(Object.assign(Object.assign({}, t.match), {
						queryParams: o()([...Object(d.a)(t.location.search)])
					})))
				}));
			class Ht extends i.a.Component {
				constructor() {
					super(...arguments), this.renderNoPosts = () => i.a.createElement(v.c, {
						profileName: this.props.profileName,
						timeSort: this.props.timeSort
					})
				}
				UNSAFE_componentWillUpdate(e) {
					this.props.layout !== e.layout && e.onLayoutChange()
				}
				render() {
					const {
						contentGateInfo: e,
						layout: t,
						over18Prefs: s,
						isOwnProfile: n,
						isProfileNSFW: o,
						listingKey: r,
						onLayoutChange: a,
						pageLayer: c,
						profileName: d,
						sort: m,
						shouldShowPinnedPostsSection: p,
						timeSort: b
					} = this.props;
					if (!c) return null;
					if (e && e.profileDeleted) return i.a.createElement(g.default, {
						contentGateType: Lt.a.ProfileDeleted,
						profileName: d
					});
					if (e && e.profileSuspended) return i.a.createElement(g.default, {
						contentGateType: Lt.a.ProfileSuspended,
						profileName: d
					});
					if (451 === c.status || e && e.profileBlockedForLegalReason) return i.a.createElement(g.default, {
						contentGateType: Lt.a.ProfileBlockedForLegalReason,
						profileName: d
					});
					if (403 === c.status) return i.a.createElement(Rt.a, null);
					if (404 === c.status) return i.a.createElement(g.default, {
						contentGateType: Lt.a.ProfileDoesNotExist,
						profileName: d
					});
					if (!d) return null;
					const h = d.toLowerCase(),
						x = "/user/".concat(d, "/"),
						f = {
							listingKey: r,
							listingName: h
						};
					if (!s && o && !n) return i.a.createElement(g.default, {
						subredditName: d,
						contentGateType: Lt.a.Nsfw
					});
					const v = {
							inSubredditOrProfile: !Object(l.a)(d),
							listingKey: r,
							listingName: h,
							listingViewed: (e, t) => Object(Tt.p)(r, m, t, e, b),
							noPostsComponent: this.renderNoPosts,
							onTryAgain: a
						},
						E = {
							sort: m,
							baseUrl: x,
							sortOptions: u.qb,
							timeSort: b
						};
					let y;
					return y = t === te.g.Compact ? i.a.createElement(N, Ft({}, v, {
						onLoadMore: this.props.onLoadMoreChronoItems,
						onTryAgain: a
					})) : i.a.createElement(i.a.Fragment, null, p && i.a.createElement(It, {
						profileName: d
					}), i.a.createElement(O.a, E), i.a.createElement(Ce, Ft({}, v, {
						excludePinnedPosts: p,
						onLoadMore: this.props.onLoadMoreConversationsItems
					}))), i.a.createElement(Mt.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(Ee.a, {
							profileName: d
						})),
						content: i.a.createElement(i.a.Fragment, null, i.a.createElement(C.a, null), y),
						sidebar: i.a.createElement(Nt.a, Ft({}, f, {
							profileName: d
						}))
					})
				}
			}
			t.default = Bt(Wt(Ht))
		},
		"./src/reddit/selectors/eventPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return i
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "a", (function() {
				return m
			}));
			var n = s("./src/lib/makeListingKey/index.ts"),
				o = s("./src/reddit/selectors/posts.ts"),
				r = s("./src/reddit/selectors/experiments/econ/predictions.ts");
			const i = (e, t) => {
					let {
						subredditName: s
					} = t;
					return Object(n.a)("ModhubPage-EventPosts", "timeline", {
						subredditName: s
					})
				},
				a = (e, t) => {
					const s = i(e, t);
					return Object(o.U)(e, {
						listingKey: s,
						predictionsEnabled: Object(r.a)(e)
					}) || []
				},
				c = (e, t) => {
					const s = i(e, t);
					return !!e.listings.postOrder.api.pending[s]
				},
				d = (e, t) => {
					const s = i(e, t);
					return !!(e.listings.postOrder.ids[s] || []).length
				},
				l = (e, t) => {
					const s = i(e, t),
						n = e.listings.postOrder.pageInfo[s];
					return !(!n || !n.hasNextPage)
				},
				m = (e, t) => {
					const s = i(e, t),
						n = e.listings.postOrder.pageInfo[s];
					return n && n.endCursor || null
				}
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, s) {
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
				return !(!t || Object(n.ed)(t))
			}
		},
		"./src/reddit/selectors/experiments/reportingRevampDesktop.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const i = e => n.c.Enabled === Object(o.c)(e, {
				experimentEligibilitySelector: r.I,
				experimentName: n.e
			})
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileOverview.ef36d290681197c8989b.js.map