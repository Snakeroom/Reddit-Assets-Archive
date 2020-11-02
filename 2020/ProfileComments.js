// https://www.redditstatic.com/desktop2x/ProfileComments.925ae9ff807dec1dc10e.js
// Retrieved at 11/1/2020, 10:40:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileComments", "Frontpage~ModListing~Multireddit~ProfilePosts~Subreddit", "ChatPost~ModQueuePages", "ProfilePosts~ProfileSnoobuilder", "RpanListingUnit~reddit-components-MediumPost", "reddit-components-ContentGate"], {
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
						a = x(o.target, o.currentTarget);
					r && s && t && (b(o.target, o.currentTarget, u.anchors) ? s(t(e, r, a)) : s(s => {
						const n = t(e, r, a)(s);
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
							afterClickTracking: m(n, s, t)
						}))
					}
				}
				return Object(i.c)(t)
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
				return E
			})), s.d(t, "h", (function() {
				return _
			}));
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
				p = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, m),
				u = o()().tlds(a.a).set({
					fuzzyIP: !0
				}),
				b = o()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(i.g.mention.prefix, i.g.mention.config),
				h = p(o()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config),
				x = p(o()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config),
				f = o()().tlds(a.a).set({
					fuzzyIP: !0
				}).add(i.g.subreddit.prefix, i.g.subreddit.config).add(i.g.subredditFull.prefix, i.g.subreddit.config).add(i.g.profile.prefix, i.g.profile.config).add(i.g.profileFull.prefix, i.g.profile.config).add(i.g.mention.prefix, i.g.mention.config),
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
					return [...x.match(e) || [], ...b.match(e) || []].map(e => !l(e.text) && e.text.replace(i.a, "")).filter(e => e)
				},
				E = (e, t) => {
					const s = e.match(t);
					if (s && 1 === s.length && 0 === s[0].index && s[0].lastIndex === t.length) return s[0]
				},
				_ = e => {
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
		"./src/reddit/actions/eventPosts/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "fetchEventPostsPending", (function() {
				return O
			})), s.d(t, "fetchEventPostsSuccess", (function() {
				return E
			})), s.d(t, "fetchEventPostsFailure", (function() {
				return _
			})), s.d(t, "fetchMoreEventPostsSuccess", (function() {
				return C
			})), s.d(t, "eventPostsRequested", (function() {
				return y
			})), s.d(t, "startEventNowSuccess", (function() {
				return k
			})), s.d(t, "startEventNowRequested", (function() {
				return w
			})), s.d(t, "editEventTimeSuccess", (function() {
				return j
			})), s.d(t, "editEventTimeRequested", (function() {
				return I
			}));
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
				O = Object(r.a)(a.e),
				E = Object(r.a)(a.c),
				_ = Object(r.a)(a.b),
				C = Object(r.a)(a.d),
				y = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n, r = s();
					const a = Object(f.d)(r, {
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
					if (a) return;
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
					const y = await ((e, t) => Object(d.a)(e, Object.assign(Object.assign({}, c), {
						variables: t
					})))(o(), b);
					if (y.ok) {
						const {
							subredditInfoByName: e
						} = y.body.data, {
							eventPosts: n
						} = e, o = Object(h.a)(n);
						let a = [],
							i = {};
						const c = n.pageInfo || {
							hasNextPage: !1,
							endCursor: null,
							hasPreviousPage: !1,
							startCursor: null
						};
						o.length > 0 && (a = o.map(e => e.id), i = o.reduce((e, t) => (e[t.id] = t, e), {})), r = s(), t((u ? C : E)({
							key: g,
							postIds: a,
							meta: r.meta,
							posts: i,
							pageInfo: c
						}))
					} else t(_({
						error: y.error,
						key: g
					})), t(Object(i.e)({
						kind: x.b.Error,
						text: v()
					}))
				}, k = Object(r.a)(a.f), w = e => async (t, s, o) => {
					let {
						apiContext: r
					} = o;
					if ((await b(r(), e)).ok) {
						const o = () => n.fbt._("Following event has started successfully: {title}", [n.fbt._param("title", c)], {
							hk: "e9iz9"
						});
						t(k({
							postId: e
						}));
						const r = s(),
							a = Object(g.O)(r, {
								postId: e
							}),
							c = a && a.title || "";
						t(Object(i.e)({
							kind: x.b.SuccessMod,
							text: o()
						}))
					} else t(Object(i.e)({
						kind: x.b.Error,
						text: v()
					}))
				}, j = Object(r.a)(a.a), I = (e, t) => async (s, r, a) => {
					let {
						apiContext: c
					} = a;
					const d = await u(c(), e, t.startDate, t.endDate, t.timezoneName);
					if (d.ok) {
						const t = d.body,
							a = 14400,
							c = Math.round(t.event_start / o.Fb);
						let l = t.event_end;
						const m = {
							eventStart: c,
							eventEnd: l = l && Math.round(l / o.Fb) || c + a,
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
						s(Object(i.e)({
							kind: x.b.SuccessMod,
							text: h()
						}))
					} else s(Object(i.e)({
						kind: x.b.Error,
						text: v()
					}))
				}
		},
		"./src/reddit/actions/postCreation/editing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return T
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "c", (function() {
				return L
			}));
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
					method: i.db.POST,
					data: b(t)
				}).then(p.b),
				x = s("./src/reddit/helpers/overlay/index.ts"),
				f = s("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				g = s("./src/reddit/helpers/trackers/lightbox.ts"),
				v = s("./src/reddit/helpers/trackers/post.ts"),
				O = s("./src/reddit/helpers/trackers/postComposer.ts"),
				E = s("./src/reddit/models/Media/index.ts"),
				_ = s("./src/reddit/models/PostCreationForm/index.ts"),
				C = s("./src/reddit/models/Toast/index.ts"),
				y = s("./src/reddit/selectors/posts.ts"),
				k = s("./src/reddit/actions/postCreation/constants.ts"),
				w = s("./src/reddit/actions/postCreation/general.ts");
			const j = Object(o.a)(k.l),
				I = Object(o.a)(k.m),
				S = Object(o.a)(k.y),
				P = Object(o.a)(k.E),
				T = Object(o.a)(k.F),
				N = (e, t) => async (s, n, o) => {
					let {
						apiContext: r
					} = o;
					const a = n(),
						i = Object(y.O)(a, {
							postId: e
						});
					t ? (s(Object(x.a)(i.permalink)), Object(g.e)(e, "edit")(a)) : Object(v.b)(e, "edit")(a);
					const {
						media: c
					} = i;
					if (!c) return;
					let d, l = _.h.RICH_TEXT,
						m = "";
					c.type === E.o.TEXT ? (l = _.h.MARKDOWN, m = c.content) : c.type === E.o.RTJSON && (m = (l = c.rteMode || _.h.RICH_TEXT) === _.h.MARKDOWN ? c.markdownContent : c.richtextContent, d = c.mediaMetadata || void 0), s(P({
						editorMode: l,
						mediaMetadata: d,
						postContent: m,
						postId: e
					}))
				}, L = e => async (t, s, o) => {
					let {
						apiContext: i
					} = o;
					const {
						post: c
					} = e, d = !c.media || "rtjson" !== c.media.type && "text" !== c.media.type ? "" : c.media.rteMode;
					O.u(s(), Object(w.n)(d)), t(S(c.id));
					const l = await h(i(), e),
						m = !1 === l.body.success;
					if (t(j(c.id)), l.ok && !m) {
						t(Object(a.e)({
							kind: C.b.SuccessCommunity,
							text: n.fbt._("Post successfully edited", null, {
								hk: "xej5K"
							})
						})), t(T(c.id));
						const e = Object(f.a)(l.body);
						t(Object(r.J)({
							[c.id]: e
						}))
					} else t(I(l.error))
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
				a = s("./src/reddit/components/CallToActionButton/index.tsx"),
				i = s("./src/reddit/controls/OutboundLink/styled.tsx"),
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
				}, m), r.a.createElement(i.a, {
					href: c.url.replace(n.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: c,
					className: d.a.displayUrl
				}, p)), l && r.a.createElement(a.a, {
					className: d.a.callToAction,
					href: c.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: c
				}, l))
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
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				i = s("./src/reddit/hooks/useButtons2020.ts"),
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
				const n = Object(i.a)();
				return o.a.createElement(a.a, l({
					className: Object(r.a)(t, d.a.CallToActionButton, {
						[d.a.mNotCardView]: s.isNotCardView,
						[d.a.is2020]: n
					})
				}, s))
			}
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
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
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
				E = s("./src/reddit/components/PostMeta/index.tsx"),
				_ = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				C = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				y = s("./src/reddit/components/PostTitle/index.tsx"),
				k = s("./src/reddit/components/PostTopMeta/index.tsx"),
				w = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				j = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				I = s("./src/reddit/models/Media/index.ts"),
				S = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				P = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				T = s("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
				N = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				L = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				M = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				R = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				A = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				F = s.n(A),
				B = s("./src/reddit/components/ClassicPost/index.m.less"),
				D = s.n(B);

			function H() {
				return (H = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const W = 16;
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
						isMeta: i,
						inSubredditOrProfile: O,
						eventFactory: P,
						first: T,
						flairStyleTemplate: A,
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
						redditStyle: ae,
						scrollerItemRef: ie,
						showBulkActionCheckbox: ce,
						showEditFlair: de,
						showMedia: le,
						subredditOrProfile: me,
						toggleCheckbox: pe,
						userIsOp: ue,
						shouldShowGalleryTileOption: be
					} = this.props, he = ae ? void 0 : A, xe = this.props.crosspost || void 0, fe = Object(M.a)(Y), ge = Object(N.a)(Y), ve = Object(L.a)(Y), Oe = $ && M.a, Ee = !!oe.media && oe.media.type === I.o.RTJSON, _e = ue && Ee, Ce = O && !le, ye = !!oe.media && Object(I.H)(oe.media), ke = {
						flairStyleTemplate: he,
						post: oe,
						inSubredditOrProfile: O,
						isCurrentUserProfilePost: K,
						isOverlay: Z,
						shouldShowSubscribeButton: !(q && X),
						subredditOrProfile: me
					}, we = Object(r.s)(oe, Q), {
						source: je
					} = we, Ie = o.a.createElement(v.a, {
						className: Object(a.a)(F.a.classicPostStyles, D.a.postContainer, Object(R.a)(this.props), T ? D.a.mFirst : void 0, e),
						isOverlay: Z,
						style: Object.assign(Object.assign({}, Object(R.d)(this.props)), Object(R.b)(this.props.flairStyleTemplate)),
						post: oe,
						onClick: ee,
						eventFactory: P
					}, o.a.createElement(C.a, {
						model: oe,
						handleVote: s,
						showBulkActionCheckbox: ce,
						isCheckboxSelected: z,
						toggleCheckbox: pe,
						flairStyleTemplate: he,
						redditStyle: ae,
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
						className: Ce ? D.a.expandoContainer : D.a.thumbnailContainer
					}, !Ce && o.a.createElement(S.a, {
						className: D.a.classicThumbnail,
						crosspost: xe && oe,
						isMeta: i,
						post: xe || oe,
						redditStyle: ae,
						templatePlaceholderImage: he && he.postPlaceholderImage,
						removeLink: ye
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
							paddingBottom: "".concat(W, "px")
						}
					}, o.a.createElement(y.c, {
						className: ne ? D.a.titleWithPoll : void 0,
						format: B,
						poll: ne,
						post: oe,
						redditStyle: ae,
						size: y.b.Medium,
						titleColor: he && he.postTitleColor,
						isOverlay: Z
					}, oe.source && !xe && o.a.createElement(j.a, {
						href: oe.source.url,
						isSponsored: oe.isSponsored,
						postId: oe.id,
						source: oe.source
					}, Object(c.a)(oe))), o.a.createElement(E.a, H({
						key: "PostMeta"
					}, ke)), $ && fe && Object(f.c)(oe) && o.a.createElement(x.a, {
						onIgnoreReports: te,
						reportable: oe
					}), o.a.createElement("div", {
						className: D.a.spacer
					}), oe.isSponsored && je && je.url && o.a.createElement(d.a, {
						className: D.a.adLinkWrapper
					}, o.a.createElement(l.a, {
						post: oe,
						adLinkContent: we
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
						showEditPost: _e,
						showEditFlair: de,
						tooltipType: Z ? k.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(_.h)({
							editPost: !Oe,
							save: !Oe,
							hide: !Oe,
							report: !Oe
						})
					})), o.a.createElement(h.d, {
						postId: oe.id
					}))), V(oe, ie, n, be, J)));
					return o.a.createElement(w.b, null, Ie)
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
				z = Object(i.a)(U),
				K = Object(T.a)(z);
			t.default = Object(P.a)(z)
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
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/higherOrderComponents/withClickTracking/index.tsx");
			const d = Object(a.c)({
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
						style: a
					} = this.props;
					return o.a.createElement("div", {
						className: Object(i.a)(s, "Comment ".concat(n.id)),
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: t => {
							!this.cancelClick && t.button < 2 && e(() => r && r(t, n))(t)
						},
						style: a
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
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/comment/index.ts"),
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
			const E = b.a.wrapped(l.a, "StyledDropdown", g.a),
				_ = Object(a.c)({
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(p.b)(s)(e)
					}
				}),
				C = Object(r.b)(_, (e, t) => {
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
				y = Object(c.a)(E),
				k = C(Object(d.c)(e => {
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
					return o.a.createElement(y, {
						isOpen: s,
						tooltipId: l
					}, o.a.createElement(O, {
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
			t.a = k
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
				return L
			})), s.d(t, "a", (function() {
				return D
			}));
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
				b = s("./src/reddit/components/ModModeReports/helpers.ts"),
				h = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				x = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				v = s("./src/reddit/helpers/trackers/modTools.ts"),
				O = s("./src/reddit/selectors/moderatingComments.ts"),
				E = s("./src/reddit/selectors/moderatorPermissions.ts"),
				_ = s("./src/reddit/selectors/tooltip.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				k = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				w = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				j = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				I = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				S = s("./src/reddit/icons/svgs/Show/index.tsx"),
				P = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				T = s.n(P),
				N = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const L = l.a.wrapped(h.c, "RestrictedButton", T.a),
				M = l.a.wrapped(y.a, "Approve", T.a),
				R = l.a.wrapped(w.a, "Lock", T.a),
				A = l.a.wrapped(j.a, "Remove", T.a),
				F = l.a.wrapped(I.a, "Spam", T.a),
				B = l.a.wrapped(S.a, "Show", T.a),
				D = l.a.wrapped(k.a, "DistinguishShield", T.a),
				H = Object(f.t)(),
				W = e => "Distinguish--Dropdown--".concat(e),
				U = Object(i.c)({
					currentUser: C.i,
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
						return Object(_.b)(W(s.id))(e)
					},
					moderatorPermissions: (e, t) => {
						const {
							comment: s
						} = t;
						return Object(f.g)(e, t) || Object(E.j)(e, {
							subredditId: s.subredditId
						})
					},
					modModeEnabled: f.P
				}),
				V = Object(a.b)(U, (e, t) => {
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
							tooltipId: W(s.id)
						}))
					}
				});
			t.c = H(V(l.a.wrapped(Object(x.c)(e => {
				var {
					className: t,
					comment: s,
					currentUser: o,
					isCommentAuthor: a,
					collapsedBecauseCrowdControl: i,
					moderatorPermissions: l,
					modModeEnabled: m,
					onApproveComment: p,
					onDistinguishComment: h,
					onLockComment: x,
					onRemoveComment: f,
					onShowComment: O,
					onSpamComment: E,
					onToggleDistinguishDropdown: _,
					sendEvent: C
				} = e, y = N(e, ["className", "comment", "currentUser", "isCommentAuthor", "collapsedBecauseCrowdControl", "moderatorPermissions", "modModeEnabled", "onApproveComment", "onDistinguishComment", "onLockComment", "onRemoveComment", "onShowComment", "onSpamComment", "onToggleDistinguishDropdown", "sendEvent"]);
				const k = Object(g.a)(l),
					w = Object(b.b)(s),
					j = s.isApproved && w,
					I = !!o && o.isEmployee,
					S = !s.isRemoved,
					P = i,
					H = e => C(Object(v.a)(e, s.id));
				return r.a.createElement("div", {
					className: t
				}, (s.bannedBy || w) && r.a.createElement(L, {
					text: j ? n.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : n.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						p(), H("approve")
					}
				}, r.a.createElement(M, null)), S && r.a.createElement(r.a.Fragment, null, r.a.createElement(L, {
					text: s.bannedBy === d.k ? n.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : n.fbt._("Remove", null, {
						hk: "VP5J0"
					}),
					onClick: () => {
						f(), s.bannedBy === d.k ? H("confirm_remove") : H("remove")
					}
				}, r.a.createElement(A, null)), r.a.createElement(L, {
					text: n.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						E(), H("spam")
					}
				}, r.a.createElement(F, null))), r.a.createElement(L, {
					text: s.isLocked ? n.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : n.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						x(), H(s.isLocked ? "unlock" : "lock")
					}
				}, r.a.createElement(R, null)), a && !I && !s.bannedBy && r.a.createElement(L, {
					className: Object(c.a)({
						[T.a.selected]: y.isDistinguishDropdownOpen
					}),
					onClick: () => {
						H("mod_distinguish_menu"), _()
					}
				}, r.a.createElement(D, null), r.a.createElement(u.a, {
					isAdminDistinguished: s.isAdmin,
					isDropdownOpen: y.isDistinguishDropdownOpen,
					isModDistinguished: s.isMod,
					isStickied: s.isStickied,
					isTopLevelComment: !s.parentId,
					isUserEmployee: I,
					isUserMod: k,
					onDistinguishComment: h,
					sendEventWithName: H,
					tooltipId: W(s.id)
				})), P && r.a.createElement(L, {
					text: n.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						O()
					}
				}, r.a.createElement(B, null)))
			}), "CommentModToolsFlatlist", T.a)))
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
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
				E = s("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				_ = s("./src/reddit/components/Flair/index.tsx"),
				C = s("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				y = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				k = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				w = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				j = s("./src/reddit/components/PostTopMeta/index.tsx"),
				I = s("./src/reddit/selectors/economics.ts"),
				S = s("./src/reddit/helpers/isRemoved.ts"),
				P = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				T = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				N = s("./src/reddit/actions/comment/index.ts"),
				L = s("./src/reddit/models/Comment/index.ts"),
				M = s("./src/reddit/models/Flair/index.ts"),
				R = s("./src/reddit/icons/fonts/Admin/index.tsx"),
				A = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				F = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				B = s("./src/reddit/icons/fonts/Op/index.tsx"),
				D = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				H = s("./src/reddit/icons/fonts/Report/index.tsx"),
				W = s("./src/reddit/icons/fonts/Spam/index.tsx"),
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
			const $ = h.a.wrapped(_.b, "RightPositionedAuthorFlair", Z.a),
				ee = h.a.wrapped(R.a, "AdminIcon", Z.a),
				te = h.a.wrapped(A.a, "ApproveIcon", Z.a),
				se = h.a.wrapped(F.a, "LockIcon", Z.a),
				ne = h.a.div("AdminEmeritus", Z.a),
				oe = h.a.wrapped(U.a, "AutomoderatorIcon", Z.a),
				re = h.a.wrapped(z.a, "TopSupporterIcon", Z.a),
				ae = h.a.wrapped(V.a, "CakeIcon", Z.a),
				ie = h.a.wrapped(G.a, "ModeratorIcon", Z.a),
				ce = h.a.wrapped(D.a, "RemoveIcon", Z.a),
				de = h.a.wrapped(H.a, "ReportIcon", Z.a),
				le = h.a.wrapped(W.a, "SpamIcon", Z.a),
				me = h.a.wrapped(B.a, "OpIcon", Z.a),
				pe = h.a.wrapped(R.a, "ContractorIcon", Z.a),
				ue = h.a.a("MetaLink", Z.a),
				be = h.a.wrapped(K.a, "EditedText", Z.a),
				he = h.a.wrapped(K.a, "StickiedText", Z.a),
				xe = h.a.span("DeletedText", Z.a),
				fe = h.a.wrapped(K.a, "MetaSeparator", Z.a),
				ge = h.a.wrapped(K.a, "CrowdControlText", Z.a),
				ve = h.a.wrapped(y.b, "AuthorHoverCard", Z.a),
				Oe = h.a.a("RemovalReason", Z.a),
				Ee = h.a.wrapped(O.b, "Component", Z.a),
				_e = e => (t, s) => {
					let {
						comment: n,
						renderedInOverlay: o
					} = s;
					return "".concat(e).concat(n.id).concat(o ? "inOverlay" : "")
				},
				Ce = () => n.fbt._("Reddit admin, speaking officially", null, {
					hk: "3vg8wE"
				}),
				ye = () => n.fbt._("Cake day", null, {
					hk: "1xptSi"
				}),
				ke = () => n.fbt._("Reddit admin emeritus", null, {
					hk: "1Md5AV"
				}),
				we = e => n.fbt._("Moderator of {subredditDisplayText}, speaking officially", [n.fbt._param("subredditDisplayText", e)], {
					hk: "3pHm3n"
				}),
				je = () => n.fbt._("Original Poster", null, {
					hk: "3DqK8z"
				}),
				Ie = () => n.fbt._("Reddit contractor", null, {
					hk: "3APwEh"
				}),
				Se = () => n.fbt._("Powerups Top Supporter", null, {
					hk: "1GLWsz"
				}),
				Pe = Object(a.b)(() => Object(i.c)({
					adminTooltipId: _e("CommentTopMeta--Admin--"),
					cakedayTooltipId: _e("CommentTopMeta--cakeday--"),
					adminEmeritusTooltipId: _e("CommentTopMeta--AdEm--"),
					automodTooltipId: _e("CommentTopMeta--Automod--"),
					approveTooltipId: _e("CommentTopMeta--Approve--"),
					createdTooltipId: _e("CommentTopMeta--Created--"),
					contractorTooltipId: _e("CommentTopMeta--Contractor--"),
					gildedTooltipId: _e("CommentTopMeta--Gold--"),
					lockedTooltipId: _e("CommentTopMeta--Locked--"),
					modTooltipId: _e("CommentTopMeta--Mod--"),
					opTooltipId: _e("CommentTopMeta--OP--"),
					removeTooltipId: _e("CommentTopMeta--Remove--"),
					reportTooltipId: _e("CommentTopMeta--Report--"),
					spamTooltipId: _e("CommentTopMeta--Spam--"),
					topSupporterTooltipId: _e("CommentTopMeta--TopSupporter--"),
					hasBadges: (e, t) => {
						let {
							comment: s
						} = t;
						return !!Object(I.r)(e, s.subredditId, s.authorId).length
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
								window.removeEventListener("focus", s), e(Object(N.N)({
									commentListNodeId: t
								})), window.setTimeout(() => e(Object(N.N)({
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
			t.a = Pe(e => {
				const {
					adminEmeritusTooltipId: t,
					adminTooltipId: s,
					approveTooltipId: n,
					automodTooltipId: o,
					cakedayTooltipId: a,
					children: i,
					className: d,
					collapsed: l,
					collapsedBecauseCrowdControl: m,
					comment: b,
					commentsPageKey: h,
					contractorTooltipId: x,
					compact: g,
					flair: O,
					flairPosition: y,
					hasBadges: k,
					isAvatarsInCommentsEnabled: I,
					isLivestreaming: S,
					ignoreFlairPosition: P,
					ignoreLock: T,
					lockedTooltipId: N,
					modTooltipId: R,
					onHideTooltip: A,
					onShowTooltip: F,
					opTooltipId: B,
					openPowerupsModal: D,
					openRemovalReasonModal: H,
					removeTooltipId: W,
					renderContractorBadge: U,
					renderTopSupporterBadge: V,
					renderedInOverlay: G,
					reportTooltipId: z,
					spamTooltipId: q,
					subredditDisplayText: J,
					topSupporterTooltipId: X
				} = e, Y = Object(c.a)();
				if (b.isDeleted) return r.a.createElement(Te, Q({}, e, {
					className: Object(p.a)(d, Z.a.container, {
						[Z.a.collapsed]: l
					})
				}));
				if (l) return r.a.createElement(Ne, Q({}, e, {
					className: Object(p.a)(d, Z.a.container, {
						[Z.a.collapsed]: l
					})
				}));
				const ee = !P && y === M.b.Left;
				return r.a.createElement("div", {
					className: Object(p.a)(d, Z.a.container, {
						[Z.a.collapsed]: l,
						[Z.a.hasBadges]: k,
						[Z.a.liveStreaming]: S
					})
				}, O && ee && r.a.createElement(_.b, {
					flair: O,
					forceSmallEmojis: g
				}), !Object(L.e)(b) && r.a.createElement(Ee, {
					showAddCustom: !0,
					subredditId: b.subredditId,
					userId: b.authorId,
					uniqueIdentifier: b.id
				}), r.a.createElement(ve, {
					postOrComment: b,
					tooltipType: G ? j.c.Lightbox : void 0
				}, r.a.createElement(E.b, {
					ignore: Object(L.e)(b) || !!b.distinguishType && b.distinguishType !== u.C.NONE,
					subredditId: b.subredditId,
					userId: b.authorId
				}, r.a.createElement(Me, {
					comment: b,
					isLivestreaming: S,
					isStrong: !!g,
					isAuthorDeleted: Object(L.e)(b)
				}, i && i))), m && r.a.createElement(ge, null, "Crowd Control"), m && r.a.createElement(K.c, {
					className: Z.a.metaText,
					key: "crowdControlSeparator"
				}), O && !ee && r.a.createElement($, {
					flair: O,
					forceSmallEmojis: g
				}), !g && r.a.createElement(C.a, {
					className: Z.a.publicPoints,
					contentId: b.id,
					metaSeparator: r.a.createElement(K.c, {
						className: Z.a.metaText
					}),
					subredditId: b.subredditId,
					userId: b.authorId,
					username: b.author
				}), r.a.createElement(r.a.Fragment, null, r.a.createElement(w.b, {
					commentId: b.id
				}), r.a.createElement(w.a, {
					commentId: b.id,
					commentsPageKey: h
				}), r.a.createElement(Fe, {
					comment: b,
					compact: g,
					adminTooltipId: s,
					adminEmeritusTooltipId: t,
					cakedayTooltipId: a,
					contractorTooltipId: x,
					modTooltipId: R,
					onHideTooltip: A,
					onShowTooltip: F,
					openPowerupsModal: () => {
						Y(Object(f.e)("comment")), D()
					},
					opTooltipId: B,
					renderContractorBadge: U,
					renderTopSupporterBadge: V,
					subredditDisplayText: J,
					topSupporterTooltipId: X
				})), !g && r.a.createElement(r.a.Fragment, null, !b.isDeleted && !I && r.a.createElement(K.b, {
					className: Z.a.metaText,
					isScoreHidden: b.isScoreHidden,
					score: b.score
				}), !I && r.a.createElement(K.c, {
					className: Z.a.metaText,
					key: "scoreCreatedSeparator"
				}), r.a.createElement(Re, Q({
					key: "Created"
				}, e)), b.isStickied && De(), b.editedAt && Le(b.editedAt)), r.a.createElement(r.a.Fragment, null, r.a.createElement(Be, {
					comment: b,
					approveTooltipId: n,
					automodTooltipId: o,
					ignoreLock: T,
					lockedTooltipId: N,
					onHideTooltip: A,
					onShowTooltip: F,
					openRemovalReasonModal: H,
					removeTooltipId: W,
					reportTooltipId: z,
					spamTooltipId: q
				})), r.a.createElement(v.a, {
					thing: b,
					tooltipType: G ? j.c.Lightbox : void 0
				}))
			});
			const Te = e => {
					const {
						childrenInfo: t,
						collapsed: s,
						className: o,
						comment: a
					} = e;
					return r.a.createElement("div", {
						className: o
					}, r.a.createElement(xe, null, a.deletedBy === L.b.User ? n.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : n.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(Re, Q({
						key: "Created"
					}, e)), s && Ae({
						childrenInfo: t
					}))
				},
				Ne = e => {
					const {
						comment: t,
						className: s,
						childrenInfo: n
					} = e;
					return r.a.createElement("div", {
						className: s
					}, r.a.createElement("div", null, r.a.createElement(Me, {
						comment: t,
						isAuthorDeleted: Object(L.e)(t)
					})), r.a.createElement(K.b, {
						className: Z.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), r.a.createElement(K.c, {
						className: Z.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(Re, Q({
						key: "Created"
					}, e)), Ae({
						childrenInfo: n
					}))
				},
				Le = e => r.a.createElement(o.Fragment, null, r.a.createElement(K.c, {
					className: Z.a.metaText
				}), r.a.createElement(be, null, n.fbt._("edited {time}", [n.fbt._param("time", Object(x.d)(e))], {
					hk: "1tiB0u"
				}))),
				Me = e => r.a.createElement(g.a, {
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
					}, Object(x.d)(t.created), He(n.createdTooltipId, Object(b.a)(t.created)))
				}
			}
			const Ae = e => {
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
			class Fe extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCakedayTooltip = () => this.props.onShowTooltip(this.props.cakedayTooltipId), this.onShowAdminTooltip = () => this.props.onShowTooltip(this.props.adminTooltipId), this.onShowAdminEmeritusTooltip = () => this.props.onShowTooltip(this.props.adminEmeritusTooltipId), this.onShowModTooltip = () => this.props.onShowTooltip(this.props.modTooltipId), this.onShowOpTooltip = () => this.props.onShowTooltip(this.props.opTooltipId), this.onShowContractorTooltip = () => this.props.onShowTooltip(this.props.contractorTooltipId), this.onShowTopSupporterTooltip = () => this.props.onShowTooltip(this.props.topSupporterTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						s = Y(e, ["comment"]);
					return r.a.createElement(o.Fragment, null, t.isAuthorCakeday && r.a.createElement(ae, {
						"aria-label": ye(),
						id: s.cakedayTooltipId,
						onMouseEnter: this.onShowCakedayTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isAuthorCakeday && He(s.cakedayTooltipId, ye()), t.isAdmin && r.a.createElement(ee, {
						desc: Ce(),
						id: s.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isAdmin && He(s.adminTooltipId, Ce()), t.distinguishType === u.C.ALUMNI_ADMIN && r.a.createElement(ne, {
						"aria-label": ke(),
						id: s.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: s.onHideTooltip
					}, "Δ"), t.distinguishType === u.C.ALUMNI_ADMIN && He(s.adminEmeritusTooltipId, ke()), t.isMod && r.a.createElement(ie, {
						desc: we(s.subredditDisplayText),
						id: s.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isMod && He(s.modTooltipId, we(s.subredditDisplayText)), t.isOp && r.a.createElement(me, {
						desc: je(),
						id: s.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isOp && He(s.opTooltipId, je()), s.renderContractorBadge && r.a.createElement(pe, {
						desc: Ie(),
						id: s.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: s.onHideTooltip
					}), s.renderContractorBadge && He(s.contractorTooltipId, Ie()), s.renderTopSupporterBadge && r.a.createElement(re, {
						desc: Se(),
						id: s.topSupporterTooltipId,
						onMouseEnter: this.onShowTopSupporterTooltip,
						onMouseLeave: s.onHideTooltip,
						onClick: s.openPowerupsModal
					}), s.renderTopSupporterBadge && He(s.topSupporterTooltipId, Se()))
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
						desc: Object(P.a)(t),
						id: s.approveTooltipId,
						onMouseEnter: this.onShowApproveTooltip,
						onMouseLeave: s.onHideTooltip
					}), (t.approvedBy || t.isApproved) && He(s.approveTooltipId, Object(P.a)(t)), Object(S.a)(t) && r.a.createElement(ce, {
						desc: Object(P.c)(t),
						id: s.removeTooltipId,
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: s.onHideTooltip
					}), Object(S.a)(t) && He(s.removeTooltipId, Object(P.c)(t)), Object(S.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && r.a.createElement(Oe, {
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
						desc: Object(P.e)(t),
						id: s.spamTooltipId,
						onMouseEnter: this.onShowSpamTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.bannedBy && t.isSpam && He(s.spamTooltipId, Object(P.e)(t)), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && r.a.createElement(oe, {
						className: Object(p.a)({
							[Z.a.removed]: !!t.bannedBy
						}),
						desc: P.b,
						id: s.automodTooltipId,
						key: s.automodTooltipId,
						onMouseEnter: this.onShowAutomodTooltip,
						onMouseLeave: s.onHideTooltip
					}), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && He(s.automodTooltipId, P.b), Object(T.a)(t) && r.a.createElement(de, {
						desc: Object(P.d)(t.numReports),
						id: s.reportTooltipId,
						onMouseEnter: this.onShowReportTooltip,
						onMouseLeave: s.onHideTooltip
					}), Object(T.a)(t) && He(s.reportTooltipId, Object(P.d)(t.numReports)))
				}
			}
			const De = () => r.a.createElement(o.Fragment, null, r.a.createElement(K.c, {
					className: Z.a.metaText
				}), r.a.createElement(he, null, n.fbt._("Stickied comment", null, {
					hk: "XUSav"
				}))),
				He = (e, t) => r.a.createElement(k.c, {
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
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
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
				E = s("./node_modules/lodash/noop.js"),
				_ = s.n(E),
				C = s("./src/lib/makeCommentPermalink/index.ts"),
				y = s("./src/lib/makeCommentsPageKey/index.ts"),
				k = s("./src/lib/makeDraftKey/index.ts"),
				w = s("./src/reddit/actions/comment/index.ts"),
				j = s("./src/reddit/actions/gold/modals.ts"),
				I = s("./src/reddit/actions/modal.ts"),
				S = s("./src/reddit/actions/reportFlow.ts"),
				P = s("./src/reddit/actions/tooltip.ts"),
				T = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				N = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				L = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				M = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				R = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				A = s("./src/reddit/components/ModModeReports/helpers.ts"),
				F = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				B = s("./src/reddit/contexts/InsideOverlay.tsx"),
				D = s("./src/reddit/contexts/PageLayer/index.tsx"),
				H = s("./src/reddit/helpers/correlationIdTracker.ts"),
				W = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
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
				ae = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ie = s("./src/reddit/icons/svgs/Flag/index.tsx"),
				ce = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				de = s("./src/reddit/icons/svgs/Save/index.tsx"),
				le = s("./src/reddit/icons/svgs/Saved/index.tsx"),
				me = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				pe = s("./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less"),
				ue = s.n(pe),
				be = s("./src/lib/lessComponent.tsx");
			const he = be.a.wrapped(me.b, "DeleteIcon", ue.a),
				xe = be.a.wrapped(ie.a, "ReportIcon", ue.a),
				fe = be.a.wrapped(ce.a, "PencilIcon", ue.a),
				ge = be.a.wrapped(de.a, "SaveIcon", ue.a),
				ve = be.a.wrapped(le.a, "SavedIcon", ue.a),
				Oe = be.a.wrapped(Q.b, "OverflowMenu", ue.a),
				Ee = be.a.wrapped(N.c, "ModToolsFlatlist", ue.a),
				_e = be.a.wrapped(R.a, "ModActionsMenu", ue.a),
				Ce = be.a.wrapped(te.b, "DropdownRow", ue.a),
				ye = be.a.wrapped(ne.a, "Flatlist", ue.a),
				ke = be.a.button("Button", ue.a),
				we = Object(D.t)(),
				je = e => "Comment-".concat(e, "--Modal--DeleteComment"),
				Ie = e => "Distinguish--Dropdown--".concat(e),
				Se = (e, t) => "".concat(e, "--").concat(t, "-overflow-menu"),
				Pe = e => "View--Reports--".concat(e),
				Te = Object(a.c)({
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
			class Ne extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(se.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleEdit = () => this.props.handleEdit(this.props.comment.permalink), this.handleIgnoreReports = () => {
						this.props.onIgnoreReports(), this.sendCommentReportEvent(this.props.comment.ignoreReports ? "restore_reports" : "ignore_reports")
					}, this.handleGild = async () => {
						const e = Object(H.d)(H.a.GildingFlow, !0);
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
					} = this.props, a = Object(W.a)(s), i = !!t && t.displayText === e.author;
					if (r && a) return n ? o.a.createElement(Ee, {
						comment: e,
						isCommentAuthor: i
					}) : o.a.createElement(_e, {
						dropdownId: "".concat(e.id, "-profile-mod-actions-menu"),
						inCommentFlatlist: !0,
						onClick: this.handleModActionsMenu
					}, o.a.createElement(re.a, null), o.a.createElement(T.a, {
						comment: e,
						tooltipId: "".concat(e.id, "-profile-mod-actions-menu")
					}))
				}
				renderReportsDropdown() {
					const {
						comment: e,
						modModeEnabled: t,
						showModTools: s
					} = this.props, n = Object(A.a)(e);
					if (s && Object(A.c)(e) && !t) return o.a.createElement(N.b, {
						text: "".concat(n),
						onClick: this.handleRestrictedButtonClick,
						selected: this.props.activeTooltipId === Pe(e.id),
						id: Pe(e.id)
					}, o.a.createElement(F.a, {
						model: e,
						onIgnoreReports: this.handleIgnoreReports,
						tooltipId: Pe(e.id)
					}), e.ignoreReports ? o.a.createElement(oe.a, null) : o.a.createElement(ae.a, null))
				}
				renderDistinguishDropdown() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: n,
						onDistinguishComment: r,
						showModTools: a
					} = this.props, i = Object(W.a)(s), c = !!t && t.displayText === e.author, d = !!t && t.isEmployee;
					if (a && c && !e.bannedBy && (d || i && !n)) return o.a.createElement(N.b, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.activeTooltipId === Ie(e.id)
					}, o.a.createElement(N.a, null), o.a.createElement(M.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.activeTooltipId === Ie(e.id),
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: d,
						isUserMod: i,
						onDistinguishComment: r,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Ie(e.id)
					}))
				}
				render() {
					const {
						comment: e,
						className: t,
						commentsPageKey: s,
						currentUser: n,
						deleteComment: r,
						isLoggedIn: a,
						isPendingDeletion: i,
						moderatorPermissions: c,
						postIsLocked: d,
						postPermalink: l,
						subreddit: m,
						toggleDeleteCommentModal: p
					} = this.props, u = Object(W.a)(c), b = !!n && n.displayText === e.author, h = !d && !e.isLocked || u && a, x = n && e.isGildable;
					return o.a.createElement("div", {
						className: t
					}, o.a.createElement(ye, null, h && o.a.createElement(ke, {
						onClick: this.handleReply,
						disabled: i
					}, O.fbt._("Reply", null, {
						hk: "1xBqIs"
					})), x && o.a.createElement(ke, {
						onClick: this.handleGild
					}, O.fbt._("Give Award", null, {
						hk: "pQJYk"
					})), o.a.createElement($.a, {
						dropdownId: "".concat(s, "--").concat(e.id, "-comment-share-menu"),
						permalink: Object(C.a)(l, e.id),
						sendEventWithName: this.sendCommentEventWithName,
						subreddit: m
					}, o.a.createElement(ke, {
						onClick: this.sendCommentEventWithNameShare
					}, O.fbt._("share", null, {
						hk: "3YIXpa"
					}))), this.renderReportsDropdown(), o.a.createElement(Oe, {
						dropdownId: Se(s, e.id),
						onClick: this.handleOverflowMenuClick
					}, !b && !i && o.a.createElement(Ce, {
						displayText: O.fbt._("report", null, {
							hk: "ad7CE"
						}),
						onClick: this.props.onReportClick
					}, o.a.createElement(xe, null)), o.a.createElement(Ce, {
						displayText: e.isSaved ? O.fbt._("Unsave", null, {
							hk: "4kQcAP"
						}) : O.fbt._("Save", null, {
							hk: "2rjVP3"
						}),
						isSelected: e.isSaved,
						onClick: this.handleSave
					}, e.isSaved ? o.a.createElement(ve, null) : o.a.createElement(ge, null)), b && o.a.createElement(Ce, {
						displayText: O.fbt._("Edit", null, {
							hk: "1nftDt"
						}),
						onClick: this.handleEdit
					}, o.a.createElement(fe, null)), b && o.a.createElement(Ce, {
						displayText: O.fbt._("delete", null, {
							hk: "e8kvB"
						}),
						onClick: this.handleDelete
					}, o.a.createElement(he, null))), this.props.isConfirmModalOpen && o.a.createElement(L.a, {
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
						trackClick: _.a,
						withOverlay: !0
					}), this.renderModTools(), this.renderDistinguishDropdown()), this.props.reportFlowIsOpen && o.a.createElement(Y.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: Y.b,
						postId: this.props.comment.postId
					}))
				}
			}
			var Le = we(Object(r.b)(Te, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n
					} = t;
					return {
						deleteComment: () => n && e(Object(w.db)(s.id, s.postId)),
						onDistinguishComment: (t, n) => e(Object(w.S)(s.id, t, n)),
						onIgnoreReports: () => e(Object(w.pb)(s.id)),
						onGildClick: t => e(Object(j.d)({
							correlationId: t,
							thingId: s.id
						})),
						onReportClick: () => e(Object(S.j)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(P.h)({
							tooltipId: Ie(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(P.h)({
							tooltipId: Pe(s.id)
						})),
						onToggleSave: () => e(Object(w.gb)(s.id)),
						handleDelete: () => {
							e(Object(I.i)(je(s.id))), e(Object(P.h)({
								tooltipId: Se(n, s.id)
							}))
						},
						handleEdit: t => {
							const n = Object(y.a)(s.postId, s.id, {}),
								o = {
									commentId: s.id,
									draftKey: Object(k.a)(G.c.edit, s.id),
									text: s.bodyMD || "",
									commentMode: s.media && s.media.rteMode,
									commentsPageKey: n
								};
							e(Object(U.a)(t)), e(Object(w.ab)(o))
						},
						handleReply: t => {
							const n = Object(y.a)(s.postId, s.id, {}),
								o = {
									parentCommentId: s.id,
									commentsPageKey: n
								};
							e(Object(U.a)(t)), e(Object(w.bb)(o))
						},
						toggleDeleteCommentModal: () => e(Object(I.i)(je(s.id)))
					}
				})(Object(ee.c)(Object(B.b)(Ne)))),
				Me = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Re = s("./src/reddit/components/RichTextJson/index.tsx"),
				Ae = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Fe = s("./src/reddit/components/Comments/ProfileComment/index.m.less"),
				Be = s.n(Fe);
			const De = be.a.wrapped(Me.a, "TopMeta", Be.a),
				He = be.a.div("ProfileCommentWrapper", Be.a),
				We = be.a.div("CommentBody", Be.a),
				Ue = Object(r.b)(() => Object(a.c)({
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
					showFlatlist: a,
					showModTools: d
				} = e, l = s => o.a.createElement(Re.a, {
					className: s,
					content: Object(Ae.a)(t),
					rtJsonElementProps: Ve(e)
				});
				return o.a.createElement(He, {
					className: Object(i.a)({
						[Be.a.isRemoved]: !!t.bannedBy
					})
				}, o.a.createElement(De, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: t,
					commentsPageKey: s,
					flair: n,
					renderedInOverlay: !1
				}), o.a.createElement("div", null, !t.isDeleted && o.a.createElement(We, null, r ? l() : o.a.createElement(v, {
					height: c.Hb,
					isExpanded: r
				}, l)), !t.isDeleted && a && o.a.createElement(Le, {
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
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/selectors/chatPost.ts"),
				m = s("./src/reddit/components/CommentsChat/LiveIcon/index.m.less"),
				p = s.n(m);
			const u = .1,
				b = Object(c.c)({
					isChatPost: l.d
				}),
				h = Object(i.b)(b);
			class x extends a.a.Component {
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
					return t ? a.a.createElement(n.a, {
						rootMargin: "20px 0px 20px 0px",
						threshold: u,
						onChange: this.onVisibilityChange
					}, a.a.createElement("div", {
						className: Object(d.a)(p.a.Icon, this.props.className)
					}, a.a.createElement("span", {
						className: Object(d.a)(p.a.Animate, p.a.top, {
							[p.a.play]: s
						})
					}, a.a.createElement("span", {
						className: p.a.bigCircle
					}), a.a.createElement("span", {
						className: p.a.midCircle
					}), a.a.createElement("span", {
						className: p.a.smallCircle
					})), a.a.createElement("p", {
						className: p.a.IconText
					}, o.fbt._("Live Discussion", null, {
						hk: "2akFwx"
					})), a.a.createElement("span", {
						className: Object(d.a)(p.a.Animate, p.a.bottom, {
							[p.a.play]: s
						})
					}, a.a.createElement("span", {
						className: p.a.bigCircle
					}), a.a.createElement("span", {
						className: p.a.midCircle
					}), a.a.createElement("span", {
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
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
				E = s("./src/reddit/selectors/experiments/postSeo.ts"),
				_ = s("./src/reddit/selectors/posts.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/components/CommentsLink/index.m.less"),
				k = s.n(y);
			const w = Object(a.b)(() => Object(c.c)({
					isChatPost: v.d,
					isPostSEOEligible: E.d,
					postPermalink: _.N,
					shouldOpenPostInNewTab: C.X,
					totalDiscount: O.a
				})),
				{
					commentCount: {
						inititalDelayRange: {
							lower: j,
							upper: I
						},
						subsequentRecurringDelayRange: {
							lower: S,
							upper: P
						},
						incrementRangeRelativeToTotalDiscount: {
							lower: T,
							upper: N
						}
					}
				} = u.a,
				L = () => Object(b.h)(j, I),
				M = () => Object(b.h)(S, P),
				R = e => {
					let t, {
						type: s,
						numComments: a,
						isChatPost: i,
						modModeEnabled: c,
						hasModPostPerms: l,
						shouldShowIcon: u,
						shouldShowText: h,
						text: f,
						totalDiscount: v = 0
					} = e;
					t = f || (s === x.g.Compact || i || c && l ? Object(m.b)(a) : n.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [n.fbt._plural(a, "number", Object(m.b)(a))], {
						hk: "1QeOde"
					}));
					const O = Object(o.useCallback)(() => Object(b.h)(Math.ceil(v * T), Math.ceil(v * N)), [v]);
					return r.a.createElement(o.Fragment, null, u && r.a.createElement(g.a, {
						className: k.a.commentIcon,
						role: "presentation"
					}), h && r.a.createElement("span", {
						className: k.a.text
					}, v > 0 ? r.a.createElement(p.a, {
						initialDisplayCount: a - v,
						countToUpperBound: a,
						initialDelay: L,
						subsequentRecurringDelay: M,
						incrementDelta: O
					}) : t), h && v > 0 && r.a.createElement("span", {
						className: Object(d.a)(k.a.text, k.a.commentsText)
					}, n.fbt._("comments", null, {
						hk: "ZQ8MY"
					})))
				};
			t.a = w(e => {
				const {
					className: t,
					hasModPostPerms: s,
					isChatPost: n,
					isCommentPermalink: o,
					isCommentsPage: a,
					isOverlay: c,
					isPostSEOEligible: m,
					modModeEnabled: p,
					numComments: u,
					onClick: b,
					postPermalink: x,
					shouldOpenPostInNewTab: g,
					shouldShowIcon: v = !0,
					shouldShowText: O = !0,
					text: E,
					type: _,
					totalDiscount: C
				} = e, y = a && !o && !m, w = o && !c, j = r.a.createElement(R, {
					type: _,
					numComments: u,
					isChatPost: n,
					totalDiscount: C,
					modModeEnabled: p,
					hasModPostPerms: s,
					shouldShowIcon: v,
					shouldShowText: O,
					text: E
				});
				return y ? r.a.createElement("div", {
					className: Object(d.a)(k.a.commentsLink, k.a.defaultCursorWrapper, t),
					onClick: b
				}, j) : r.a.createElement(i.a, {
					rel: "nofollow",
					"data-click-id": "comments",
					"data-test-id": h.a,
					className: Object(d.a)(k.a.commentsLink, k.a.link, t),
					target: g ? "_blank" : void 0,
					to: w ? Object(f.b)(x) : Object(l.a)(x, !0),
					onClick: b
				}, j)
			})
		},
		"./src/reddit/components/CompactPost/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				emptyScore: "_3RRgbzXvoZ4MUYm45lAqp7",
				emptyVotes: "_2rSb53hAOWG9j6R_ToxoSJ",
				wrapper: "_2wuOxz4--LcoxCYSrpCBlx",
				expandoContainer: "_3CIl2qTD30RwYsMAGO2Y2S",
				expando: "_2UCpUVZ4aSncQhvkrQW_0i",
				subredditIconContainer: "_2IJnSguizdehDk_JnTKrdK",
				topLine: "_1OQE_XsSHzM7AtjVQahjoI",
				title: "_28eZmJsl2bogBZ2KPmeoFO",
				meta: "_24dJJDh8muEbehYysONmV1",
				comments: "_2-iJVRFJK-xC7a7xgBF-T5",
				ellipsis: "_1IFRAIwzfwChKq85FhLG69",
				flatList: "_3HxvQvODjYEHa-X5AuQinY"
			}
		},
		"./src/reddit/components/CompactPost/Placeholder/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				p = s("./src/reddit/models/Vote/index.ts"),
				u = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				b = s.n(u),
				h = s("./src/reddit/components/CompactPost/Placeholder/index.m.less"),
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
				v = Object(a.c)({
					isFakeSubreddit: l.x
				}),
				O = Object(r.b)(v),
				E = e => {
					const t = {
						interactive: !1,
						voteState: p.a.notVoted
					};
					return o.a.createElement("div", {
						className: x.a.emptyVotes
					}, o.a.createElement(d.d, f({
						key: "u"
					}, t)), o.a.createElement("div", {
						key: "s",
						className: x.a.emptyScore
					}), o.a.createElement(d.c, f({
						key: "d"
					}, t)))
				},
				_ = e => o.a.createElement(c.a, {
					className: Object(m.a)(e)
				}),
				C = e => o.a.createElement("div", {
					className: x.a.flatList
				}, o.a.createElement("div", {
					className: Object(i.a)(x.a.comments, Object(m.b)(e))
				}), o.a.createElement("div", {
					className: Object(i.a)(x.a.ellipsis, Object(m.b)(e))
				}));
			t.a = g(O(e => o.a.createElement("div", {
				className: Object(i.a)(e.className, b.a.compactPostStyles, b.a.classicAndCompactPlaceholderStyles)
			}, o.a.createElement("div", {
				className: x.a.wrapper
			}, o.a.createElement(E, f({
				key: "c"
			}, e)), o.a.createElement("div", {
				key: "a",
				className: x.a.expandoContainer
			}, o.a.createElement("div", {
				className: Object(i.a)(x.a.expando, Object(m.a)(e))
			})), o.a.createElement("div", {
				key: "d",
				className: x.a.subredditIconContainer
			}, o.a.createElement(_, {
				isLoading: !1
			})), o.a.createElement("div", {
				key: "e",
				className: x.a.topLine
			}, o.a.createElement("div", {
				key: "ea",
				className: Object(i.a)(x.a.title, Object(m.b)(e))
			}), o.a.createElement("div", {
				key: "eb",
				className: Object(i.a)(x.a.meta, Object(m.b)(e))
			})), o.a.createElement(C, f({
				key: "f"
			}, e))))))
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router/esm/react-router.js"),
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
			var E = () => r.a.createElement(f, null, r.a.createElement(g, null, x._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [x._param("=User Agreement", r.a.createElement(v, {
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
				_ = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				C = s("./src/reddit/components/RichTextJson/index.tsx"),
				y = (s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/lodash/flatMap.js")),
				k = s.n(y),
				w = s("./src/lib/linkMatchers/index.ts"),
				j = s("./src/lib/linkMatchers/customLinks.ts"),
				I = s("./src/reddit/controls/OutboundLink/index.tsx");
			const S = /\[(.+?)\]\((.+?)\)/g,
				P = e => {
					const t = e.split(S);
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
					return e.parseMdLinks && (t = k()(t, P)), e.parseRegularLinks && (t = k()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = w.e.add(j.g.subreddit.prefix, j.g.subreddit.config).match(e);
						if (!t) return [e];
						const s = [];
						let n = null;
						for (const o of t) s.push(e.slice(n ? n.lastIndex : 0, o.index)), n = o, s.push([o.url, o.text]);
						return n && s.push(e.slice(n.lastIndex)), s
					})(e))), r.a.createElement(r.a.Fragment, null, " ", t.map((t, s) => {
						if (Array.isArray(t)) {
							const [n, o] = t;
							return r.a.createElement(I.b, {
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
				L = s("./src/reddit/controls/Button/index.tsx"),
				M = s("./src/reddit/models/ContentGate.ts"),
				R = s("./src/reddit/selectors/meta.ts"),
				A = s("./src/reddit/selectors/user.ts"),
				F = s("./src/reddit/components/ContentGate/index.m.less"),
				B = s.n(F);
			const {
				fbt: D
			} = s("./node_modules/fbt/lib/FbtPublic.js"), H = u.a.div("ButtonsContainer", B.a), W = u.a.div("Container", B.a), U = u.a.div("Description", B.a), V = u.a.div("PrivateSubredditDetails", B.a), G = u.a.div("PrivateSubredditDescription", B.a), z = u.a.h3("PrivateSubredditName", B.a), K = u.a.a("Link", B.a), q = u.a.wrapped(L.k, "LinkRouterButton", B.a), J = u.a.wrapped(L.j, "LinkButton", B.a), X = u.a.wrapped(L.n, "SecondaryLinkRouterButton", B.a), Z = u.a.wrapped(L.m, "SecondaryLinkButton", B.a), Q = u.a.wrapped(q, "GoHomeLinkButton", B.a), Y = u.a.img("Image", B.a), $ = u.a.img("ImagePlaceholder", B.a), ee = u.a.wrapped(q, "LeftLinkRouterButton", B.a), te = u.a.wrapped(J, "LeftLinkButton", B.a), se = u.a.wrapped(Z, "SecondaryLeftLinkButton", B.a), ne = u.a.wrapped(X, "SecondaryLeftLinkRouterButton", B.a), oe = u.a.h3("Title", B.a), re = u.a.div("PageBody", B.a), ae = u.a.div("QuarantineMessageWrapper", B.a), ie = Object(c.c)({
				isLoggedIn: A.H,
				origin: R.l,
				user: A.i
			}), ce = Object(N.t)(), de = Object(a.b)(ie, (e, t) => {
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
					isLoggedIn: a,
					location: i,
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
				} = e, E = () => {
					a ? f() : Object(l.k)(), window.location.reload()
				};
				switch (s) {
					case M.a.GoldSubreddit:
						return r.a.createElement("div", null, r.a.createElement(Y, {
							src: "".concat(n.a.assetPath, "/img/gold/premium-crest.png")
						}), r.a.createElement(oe, null, D._("r/{community name} is a Reddit Premium community", [D._param("community name", v)], {
							hk: "2lyDwB"
						})), r.a.createElement(U, null, D._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), r.a.createElement(H, null, O ? r.a.createElement(se, {
							href: "".concat(n.a.redditUrl, "/premium")
						}, D._("Get Premium", null, {
							hk: "3ChWi4"
						})) : r.a.createElement(te, {
							href: Object(d.a)(i, c)
						}, D._("Sign Up", null, {
							hk: "rvpjy"
						})), O ? r.a.createElement(q, {
							to: "/"
						}, D._("Go Home", null, {
							hk: "49p4or"
						})) : r.a.createElement(Z, {
							href: Object(d.a)(i, c)
						}, D._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case M.a.Nsfw:
					case M.a.NsfwCustomFeed:
						return r.a.createElement("div", null, r.a.createElement(Y, {
							src: "".concat(n.a.assetPath, "/img/content-gate-icons/nsfw.png")
						}), r.a.createElement(oe, null, s === M.a.Nsfw ? D._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : D._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), r.a.createElement(U, null, D._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), r.a.createElement(H, null, r.a.createElement(ee, {
							to: "/"
						}, D._("No", null, {
							hk: "3fMglW"
						})), r.a.createElement(Z, {
							onClick: E
						}, D._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case M.a.PrivateSubreddit:
						return r.a.createElement("div", null, r.a.createElement(Y, {
							src: "".concat(n.a.assetPath, "/img/content-gate-icons/private.png")
						}), r.a.createElement(oe, null, D._("You must be invited to visit this community", null, {
							hk: "dHP8K"
						})), g && g.length && r.a.createElement(V, null, r.a.createElement(z, null, "r/", v), r.a.createElement(G, null, r.a.createElement("div", null, g))), r.a.createElement(U, null, D._("The moderators in this community have set it to private. You must be a moderator or approved user to visit.", null, {
							hk: "nwL0k"
						})), r.a.createElement(H, null, O ? r.a.createElement(se, {
							href: "".concat(n.a.redditUrl, "/message/compose?to=/r/").concat(v)
						}, D._("Message Mods", null, {
							hk: "vVe1i"
						})) : r.a.createElement(se, {
							href: Object(d.a)(i, c)
						}, D._("Sign Up", null, {
							hk: "rvpjy"
						})), r.a.createElement(q, {
							to: "/"
						}, O ? D._("Go Home", null, {
							hk: "49p4or"
						}) : D._("Explore Reddit", null, {
							hk: "3IwwVU"
						}))));
					case M.a.QuarantinedSubreddit:
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
						}), r.a.createElement(ae, null, x ? r.a.createElement(C.a, {
							content: x,
							rtJsonElementProps: {
								pageLayer: m
							}
						}) : h ? r.a.createElement(_.a, {
							html: h
						}) : b || D._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), D._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), r.a.createElement(H, null, ((e, t, s) => {
							return !(e && e.hasVerifiedEmail) && s ? r.a.createElement(H, null, r.a.createElement(ne, {
								to: "/"
							}, D._("No Thank You", null, {
								hk: "4B26AR"
							})), r.a.createElement(J, {
								href: "".concat(n.a.redditUrl, "/prefs/update")
							}, D._("Verify Email", null, {
								hk: "1893cq"
							}))) : r.a.createElement(H, null, r.a.createElement(ee, {
								to: "/"
							}, D._("No Thank You", null, {
								hk: "4B26AR"
							})), r.a.createElement(Z, {
								onClick: t
							}, D._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(O, o, u)));
					case M.a.SubredditBanned:
						return r.a.createElement("div", null, r.a.createElement(Y, {
							src: "".concat(n.a.assetPath, "/img/content-gate-icons/banned.png")
						}), r.a.createElement(oe, null, D._("r/{community name} has been banned from Reddit", [D._param("community name", v)], {
							hk: "2at9Se"
						})), (e => r.a.createElement(U, null, e ? r.a.createElement(T, {
							linkClassName: B.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : D._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), r.a.createElement(H, null, r.a.createElement(q, {
							to: "/"
						}, D._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case M.a.SubredditBlockedForLegalReason:
						return r.a.createElement("div", null, r.a.createElement(Y, {
							src: "".concat(n.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), r.a.createElement(oe, null, D._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), r.a.createElement(H, null, r.a.createElement(q, {
							to: "/"
						}, D._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case M.a.SubredditDoesNotExist:
						return r.a.createElement("div", null, r.a.createElement($, null), r.a.createElement(oe, null, D._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), r.a.createElement(U, null, D._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), r.a.createElement(H, null, O && r.a.createElement(p.a, {
							eventSource: "content_gate"
						}), r.a.createElement(Q, {
							to: "/"
						}, D._("Go Home", null, {
							hk: "49p4or"
						}))));
					case M.a.ProfileDoesNotExist:
					case M.a.ProfileDeleted:
					case M.a.ProfileSuspended:
					case M.a.ProfileBlockedForLegalReason:
						return r.a.createElement("div", null, r.a.createElement(Y, {
							src: "".concat(n.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), r.a.createElement(oe, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case M.a.ProfileBlockedForLegalReason:
									return D._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case M.a.ProfileDeleted:
									return D._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case M.a.ProfileSuspended:
									return r.a.createElement(r.a.Fragment, null, D._("This account has been {=suspended} .", [D._param("=suspended", r.a.createElement(K, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, D._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case M.a.ProfileDoesNotExist:
									return r.a.createElement(r.a.Fragment, null, r.a.createElement(oe, null, D._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), r.a.createElement(U, null, D._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), r.a.createElement(H, null, r.a.createElement(Q, {
							to: "/"
						}, D._("Go Home", null, {
							hk: "49p4or"
						}))));
					case M.a.CustomFeedDoesNotExist:
						return r.a.createElement("div", null, r.a.createElement(Y, {
							src: "".concat(n.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), r.a.createElement(oe, null, D._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), r.a.createElement(H, null, r.a.createElement(Q, {
							to: "/"
						}, D._("Go Home", null, {
							hk: "49p4or"
						}))));
					case M.a.PostBlockedForLegalReason:
						return r.a.createElement("div", null, r.a.createElement(Y, {
							src: "".concat(n.a.assetPath, "/img/snoomoji/snoo_thoughtful.png")
						}), r.a.createElement(oe, null, D._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), r.a.createElement(H, null, r.a.createElement(q, {
							to: "/"
						}, D._("Explore Reddit", null, {
							hk: "FrUWU"
						}))))
				}
			};
			t.default = ce(de(Object(i.i)(e => r.a.createElement(W, null, r.a.createElement("div", null, r.a.createElement(re, null, le(e))), r.a.createElement(E, null)))))
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
						caretColor: a
					} = e, i = f(e, ["children", "className", "style", "caretPosition", "caretColor"]);
					return r.a.createElement("div", x({
						className: Object(d.a)(s, h.a.StyledTooltipContainer, {
							[h.a.caretOnTop]: "top" === o,
							[h.a.caretOnLeft]: "left" === o,
							[h.a.caretOnRight]: "right" === o,
							[h.a.caretOnBottom]: "bottom" === o
						}),
						style: Object.assign(Object.assign({}, n), {
							"--contentTooltip-caretColor": a && a[o] ? a[o] : Object(p.a)(e).body
						})
					}, i), t)
				}),
				E = Object(i.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(u.b)(s)(e)
					}
				}),
				_ = Object(c.a)(O, [n.a.Click, n.a.Keydown]),
				C = Object(a.b)(E);
			class y extends r.a.Component {
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
					return r.a.createElement(_, x({}, this.props, {
						caretPosition: n,
						targetPosition: t,
						tooltipPosition: s
					}))
				}
			}
			t.a = C(y)
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
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
				O = Object(i.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(b.db)(e),
					userIsSuspended: b.N
				});
			t.a = Object(a.b)(O, (e, t) => {
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
					onHideTooltip: a,
					openCommunityCreation: i,
					sendEvent: c,
					userDoesNotHaveEnoughExpToCreateCommunity: d,
					userIsSuspended: l
				} = e;
				return r.a.createElement(m.l, {
					className: t,
					disabled: l || d,
					onClick: () => i(c),
					onMouseEnter: o,
					onMouseLeave: a,
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
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
				E = s("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const C = E.a.div("Container", O.a),
				y = E.a.div("PostMetaWrapper", O.a),
				k = E.a.wrapped(u.c, "PostTitle", O.a),
				w = E.a.div("FlatList", O.a),
				j = E.a.div("FlatItem", O.a),
				I = E.a.span("FlatListDotSpacer", O.a),
				S = E.a.wrapped(C, "LinkContainer", O.a),
				P = E.a.div("Content", O.a),
				T = E.a.div("ThumbnailContainer", O.a),
				N = Object(c.c)({
					isCurrentUserProfilePost: f.k,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== x.Bb.TOPIC),
					post: f.O,
					shouldOpenPostInNewTab: g.X,
					subreddit: f.bb
				}),
				L = Object(a.b)(N);
			t.a = L(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: n,
					mediaProps: o,
					post: a,
					subreddit: i
				} = e;
				if (!a) return null;
				const c = {
						post: a,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: n,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i,
						tooltipType: "".concat("CrosspostBox", "--").concat(o.isListing)
					},
					d = t;
				return a && !a.media ? r.a.createElement(S, {
					className: d
				}, r.a.createElement(P, null, r.a.createElement(y, null, r.a.createElement(p.a, c)), M(a), a.source && r.a.createElement(b.a, {
					post: a
				}), A(e)), B(e)) : r.a.createElement(C, {
					className: d
				}, r.a.createElement(y, null, r.a.createElement(p.a, c)), M(a), R(e), A(e))
			});
			const M = e => r.a.createElement(k, {
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
					return r.a.createElement("div", null, r.a.createElement(m.a, _({}, n, {
						className: O.a.mediaContainer
					})))
				},
				A = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(w, null, r.a.createElement(j, null, n.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [n.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(I, null), r.a.createElement(j, null, F(e)))
				},
				F = e => {
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
				B = e => r.a.createElement(T, null, r.a.createElement(h.a, {
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
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = s("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = s("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				m = s("./src/reddit/layout/row/Inline/index.tsx"),
				p = s("./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less"),
				u = s.n(p);
			const b = i.a.div("DistinguishWrapper", u.a),
				h = i.a.wrapped(m.a, "Inline", u.a),
				x = i.a.wrapped(d.a, "RadioOff", u.a),
				f = i.a.wrapped(l.a, "RadioOn", u.a),
				g = e => o.a.createElement(h, {
					onClick: e.selected ? void 0 : e.onClick
				}, e.selected ? o.a.createElement(f, null) : o.a.createElement(x, null), e.text),
				v = i.a.wrapped(e => {
					const {
						className: t,
						style: s,
						isAdminDistinguished: n,
						isUserEmployee: i,
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
						text: a.fbt._("Undistinguish", null, {
							hk: "1P0FyT"
						})
					}), c && o.a.createElement(g, {
						onClick: () => p(r.C.MODERATOR, null),
						selected: d && !l,
						text: a.fbt._("Distinguish as Mod", null, {
							hk: "KDx42"
						})
					}), m && c && o.a.createElement(g, {
						onClick: () => p(r.C.MODERATOR, !0),
						selected: d && l,
						text: a.fbt._("Distinguish as Mod and Sticky", null, {
							hk: "1J1DBd"
						})
					}), i && o.a.createElement(g, {
						onClick: () => p(r.C.ADMIN, null),
						selected: n && !l,
						text: a.fbt._("Distinguish as Admin", null, {
							hk: "1JsJOX"
						})
					}), i && c && m && o.a.createElement(g, {
						onClick: () => p(r.C.ADMIN, !0),
						selected: n && l,
						text: a.fbt._("Distinguish as Admin and Sticky", null, {
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
				}, o.a.createElement(O, {
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
				return y
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/PostList/Placeholder.tsx"),
				d = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/components/EmptyProfile/EmptyListing.m.less"),
				m = s.n(l);
			const p = i.a.div("PrimaryText", m.a),
				u = i.a.wrapped(c.a, "BackgroundPlaceholder", m.a),
				b = i.a.div("Wrapper", m.a);
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
					timeSort: o = a.Sb.ALL
				} = e;
				return r.a.createElement(h, {
					className: t
				}, o === a.Sb.ALL ? n.fbt._("hmm... {profileName} hasn't commented on anything", [n.fbt._param("profileName", "u/".concat(s))], {
					hk: "1MHn3t"
				}) : n.fbt._("hmm... {profileName} hasn't commented recently", [n.fbt._param("profileName", "u/".concat(s))], {
					hk: "qN3uL"
				}))
			};
			var f = e => {
				let {
					className: t,
					profileName: s,
					timeSort: o = a.Sb.ALL
				} = e;
				return r.a.createElement(h, {
					className: t
				}, o === a.Sb.ALL ? n.fbt._("hmm... {profileName} hasn't posted anything", [n.fbt._param("profileName", "u/".concat(s))], {
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
				E = s("./src/reddit/components/EmptyProfile/forbidden.m.less"),
				_ = s.n(E);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var y = () => r.a.createElement("div", {
				className: _.a.container
			}, r.a.createElement(O.a, {
				className: _.a.hideIcon
			}), r.a.createElement("h3", {
				className: _.a.title
			}, C._("You do not have permission to access this resource", null, {
				hk: "10cPyp"
			})), r.a.createElement("p", {
				className: _.a.subtitle
			}, C._("You can only look at your own saved posts and comments", null, {
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
				a = s("./src/lib/eventTools/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				m = s("./src/reddit/helpers/postEvent.ts"),
				p = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				u = s.n(p);
			const b = i.a.div("EventMetaWrapper", u.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: s,
					post: n
				} = e;
				if (!Object(m.a)(n)) return null;
				const i = n && n.eventInfo,
					p = Object(l.a)(n),
					h = i && Object(a.c)(i.eventStart, i.eventEnd);
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
				a = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/fbt/lib/FbtPublic.js")),
				i = s("./src/lib/constants/index.ts");

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
				E = b.a.div("LoadingState", u.a);
			class _ extends n.Component {
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
							o = new Date(e * i.Fb);
						let d;
						if (n === r.a.Live || s) return a.fbt._("Now", null, {
							hk: "Prpcg"
						});
						n === r.a.Future ? d = Object(r.d)(e) ? a.fbt._("Today", null, {
							hk: "1sZpnp"
						}).toString() : Object(r.b)(e) >= 5 ? c(o) : o.toLocaleDateString(void 0, {
							weekday: "long"
						}) : n === r.a.Past && (d = Object(r.d)(e) ? a.fbt._("Today", null, {
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
						u = o.a.createElement(E, {
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
			t.a = _
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
				b = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"),
				h = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				x = s("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.tsx"),
				f = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				g = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				v = s("./src/reddit/icons/fonts/Link/index.tsx"),
				O = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				E = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Text/index.tsx"),
				C = s("./src/reddit/icons/svgs/Gallery/index.tsx"),
				y = s("./src/reddit/icons/svgs/Poll/index.tsx"),
				k = s("./src/reddit/models/Media/index.ts"),
				w = s("./src/reddit/components/ExpandoButton/index.m.less"),
				j = s.n(w);
			const I = Object(a.b)(null, (e, t) => ({
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
					if (s.pollData) return r.a.createElement(y.a, {
						className: n
					});
					switch (e) {
						case k.o.GIFVIDEO:
							return r.a.createElement(g.a, {
								className: n
							});
						case k.o.IMAGE:
							return r.a.createElement(E.a, {
								className: n
							});
						case k.o.TEXT:
						case k.o.RTJSON:
							return r.a.createElement(_.a, {
								className: n
							});
						case k.o.VIDEO:
							return r.a.createElement(f.a, {
								className: n
							});
						case k.o.GALLERY:
							return r.a.createElement(C.a, {
								className: n
							});
						case k.o.EMBED:
						default:
							return r.a.createElement(v.a, {
								className: n
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
					useMediaIcons: f
				} = e, g = s || l, v = o && !!s;
				return g.media && !(("rtjson" === g.media.type || "text" === g.media.type) && !Object(p.a)(g)) || !!l.pollData ? r.a.createElement("button", {
					"aria-expanded": a,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, j.a.outer),
					"data-click-id": a ? "expando_close" : "expando_open",
					onClick: u
				}, a ? r.a.createElement(b.a, {
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
				})) : r.a.createElement(i.a, {
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
				return o.a.createElement("div", {
					"data-ignore-click": !!p.searchIgnoreClick
				}, o.a.createElement(i.a, l({}, p, {
					className: c ? d.a.responsiveRow : Object(r.a)(d.a.responsiveRow, Object(a.b)({
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
				return _e
			}));
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
				b = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/actions/postCreation/editing.ts"),
				x = s("./src/reddit/actions/postFlair.ts"),
				f = s("./src/reddit/actions/reportFlow.ts"),
				g = s("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				v = s("./src/reddit/components/CommentsLink/index.tsx"),
				O = s("./src/reddit/constants/colors.ts"),
				E = s("./src/reddit/components/ContentTooltip/index.tsx"),
				_ = s("./src/reddit/components/GiveAwardTooltip/index.m.less"),
				C = s.n(_);
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class k extends r.a.Component {
				render() {
					const {
						tooltipId: e
					} = this.props;
					return r.a.createElement(E.a, {
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
						className: C.a.container
					}, r.a.createElement("div", {
						className: C.a.newBadge
					}, y._("New", null, {
						hk: "1XUPF"
					})), r.a.createElement("div", {
						className: C.a.text
					}, y._("Try giving a new Appreciation Award", null, {
						hk: "1V7ZWF"
					}))))
				}
			}
			var w = k,
				j = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				I = s("./src/reddit/components/ModModeReports/helpers.ts"),
				S = s("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				P = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				T = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				N = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				L = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				M = s("./src/reddit/components/ShareMenu/index.tsx"),
				R = s("./src/reddit/components/TrackingHelper/index.tsx"),
				A = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				F = s("./src/reddit/constants/postLayout.ts"),
				B = s("./src/reddit/contexts/PageLayer/index.tsx"),
				D = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				H = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				W = s("./src/reddit/selectors/user.ts"),
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
				ae = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				ie = s("./src/reddit/selectors/activeModalId.ts"),
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
				he = l.a.wrapped(M.a, "ShareMenu", de.a),
				xe = Object(d.a)(e => {
					var {
						className: t
					} = e, s = me(e, ["className"]);
					return r.a.createElement(q.a, le({}, s, {
						className: Object(c.a)(de.a.modActionsIcon, t),
						style: {
							color: Object(H.a)(Object(D.a)(s), Q.a.actionIcon, Q.b.actionIcon)
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
				ve = Object(i.c)({
					activeModalId: ie.a,
					layout: B.N,
					userIsOp: W.kb,
					subreddit: B.q
				}),
				Oe = Object(a.b)(ve, (e, t) => {
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
						onFlairPost: () => e(Object(u.i)(Object(P.b)(n.postId, o))),
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
			class Ee extends r.a.Component {
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
							sendEvent: a
						} = this.props;
						a(Object(z.f)(r.id, e, n ? "post_detail" : "post", o, s, void 0, null == t ? void 0 : t.referralId))
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
						isLargePost: b,
						isOverlay: h,
						isProfilePostListing: x,
						isSticky: f,
						layout: O,
						modModeEnabled: E,
						onFlairChanged: _,
						onIgnoreReports: C,
						onOpenReportsDropdown: y,
						pageLayer: k,
						post: M,
						sendEvent: R,
						showEditFlair: B,
						showEditPost: D,
						subreddit: H,
						toggleEditStartTimeModal: W,
						tooltipType: V,
						userIsOp: q,
						searchIgnoreClick: Q,
						isActionBarAnimationEnabled: ne,
						isForceSelected: ae
					} = this.props, ie = !!a && Object($.e)(a) === M.author, ce = Object(se.a)("View--Reports", M.id, V), le = Object(se.a)("View--GiveAward", M.id, V), me = Object(I.c)(M), ue = _e("-mod-actions-menu", M.id, h, f), fe = Object(I.a)(M), ge = M.postId, ve = O === F.g.Large, Oe = !u && ve || l && E, Ee = !(h || u || p), Ce = a && M.isGildable, ye = M.media && M.media.type === Z.o.LIVEVIDEO;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(c.a)(de.a.flatlistContainer, s)
					}, r.a.createElement(v.a, {
						className: de.a.commentsLink,
						hasModPostPerms: l,
						isCommentsPage: u,
						isCommentPermalink: p,
						isOverlay: h,
						postId: M.id,
						modModeEnabled: E,
						numComments: M.numComments,
						isActionBarAnimationEnabled: ne,
						isForceSelected: ae
					}), Ce && r.a.createElement(r.a.Fragment, null, r.a.createElement(U.a, {
						displayText: n.fbt._("Give Award", null, {
							hk: "NIFUn"
						}),
						flatlistItem: ee.a.Gild,
						isLoggedIn: !!a,
						isUserOp: q,
						onClick: this.handleGild,
						searchIgnoreClick: Q,
						skipRoleAttr: !0
					}, r.a.createElement(N.a, {
						id: le
					})), r.a.createElement(w, {
						postOrComment: M,
						tooltipId: le
					})), r.a.createElement(he, {
						className: Object(te.b)({
							flatlistItem: ee.a.Share,
							isLoggedIn: !!a,
							isUserOp: q
						}),
						dropdownId: _e("-share-menu", M.id, h, f),
						permalink: M.permalink,
						post: M,
						sendEventWithName: this.sendEventWithName,
						subreddit: H
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
						isLoggedIn: !!a,
						isUserOp: q,
						onClick: this.props.onEdit,
						skipRoleAttr: !0
					}, r.a.createElement(N.c, null)), (!l || !E) && r.a.createElement(U.a, {
						displayText: M.saved ? n.fbt._("unsave", null, {
							hk: "4Dn4IT"
						}) : n.fbt._("save", null, {
							hk: "3NOMst"
						}),
						flatlistItem: ee.a.Save,
						isLoggedIn: !!a,
						isUserOp: q,
						onClick: this.onSaveClick,
						searchIgnoreClick: Q,
						skipRoleAttr: !0
					}, M.saved ? r.a.createElement(N.f, null) : r.a.createElement(N.e, null)), !M.isSponsored && !Oe && r.a.createElement(U.a, {
						displayText: M.hidden ? n.fbt._("unhide", null, {
							hk: "151XLs"
						}) : n.fbt._("hide", null, {
							hk: "4AnA6R"
						}),
						flatlistItem: ee.a.Hide,
						isLoggedIn: !!a,
						isUserOp: q,
						onClick: this.onHideClick,
						searchIgnoreClick: Q,
						skipRoleAttr: !0
					}, r.a.createElement(N.b, null)), !ie && !M.isSponsored && !Oe && r.a.createElement(U.a, {
						displayText: n.fbt._("report", null, {
							hk: "1phfns"
						}),
						flatlistItem: ee.a.Report,
						isLoggedIn: !!a,
						isUserOp: q,
						onClick: this.onReportClick,
						searchIgnoreClick: Q,
						skipRoleAttr: !0
					}, r.a.createElement(N.d, null)), r.a.createElement(S.a, {
						isOverlay: h,
						layout: O,
						modModeEnabled: E,
						post: M,
						sendEvent: R
					}), l && r.a.createElement(j.a, {
						dropdownId: ue,
						onClick: () => R(Object(z.f)(M.id, "post_mod_action_menu"))
					}, r.a.createElement(xe, null), r.a.createElement(T.a, {
						canEditFlair: i && !!B,
						hasModFullPerms: d,
						hasModPostPerms: l,
						isOverlay: !!h,
						isPostAuthor: ie,
						modModeEnabled: E,
						post: M,
						tooltipId: ue
					})), l && me && !E && r.a.createElement(L.c, {
						text: "".concat(fe),
						onClick: () => {
							y(ce), R(Object(z.f)(M.id, "post_report_menu"))
						},
						id: ce
					}, r.a.createElement(A.a, {
						model: M,
						onIgnoreReports: () => {
							C(), R(Object(G.j)(M.ignoreReports ? "restore_reports" : "ignore_reports", M.id))
						},
						tooltipId: ce
					}), M.ignoreReports ? r.a.createElement(K.a, null) : r.a.createElement(J.a, null)), (a || !M.isSponsored) && r.a.createElement(N.g, {
						currentProfileName: o,
						dropdownId: _e("-overflow-menu", M.id, h, f),
						isCommentsPage: u,
						isFixed: f,
						isOverlay: !!h,
						isProfilePostListing: x,
						layout: O,
						modModeWithPost: E && l,
						pageLayer: k,
						permalink: M.permalink,
						postId: ge,
						sendEvent: R,
						showEditPost: !!D,
						showEditFlair: !!B,
						useFlatlistBreakpoints: this.props.useFlatlistBreakpoints,
						toggleAddEventStartTimeModal: W,
						toggleEditStartTimeModal: W
					}), e === Object(Y.s)(M.id, h) && r.a.createElement(oe.a, {
						subredditId: M.belongsTo.id,
						onClose: this.onToggleCurrentModal,
						postId: M.id,
						onSelectCollection: this.addPostToCollection,
						titleText: n.fbt._("Add post to a collection", null, {
							hk: "38vSyF"
						}),
						onItemHoverActionText: n.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						isOverlay: h
					}), e === Object(Y.r)(M.id, h, Y.j.POST_OVERFLOW_MENU) && pe && r.a.createElement(pe, {
						onChange: t,
						onClose: W,
						schedule: Object(m.c)(M),
						shouldShowDeleteButton: !1
					}), e === Object(Y.t)(M.id, h) && r.a.createElement(re.a, {
						onCancel: this.onToggleCollectionListModal,
						onCollectionCreated: this.addPostToCollection,
						subredditId: M.belongsTo.id
					}), e === Object(P.b)(M.id, h) && r.a.createElement(P.a, {
						flairs: M.flair,
						subredditId: M.belongsTo.id,
						modalId: Object(P.b)(M.id, h),
						onFlairChanged: _
					}), r.a.createElement("div", {
						className: de.a.flexSpacer
					})), Ee && !ye && r.a.createElement(g.a, {
						className: Object(c.a)(de.a.liveDiscussionWrapper, {
							[de.a.large]: b
						}),
						isMod: l,
						postId: M.postId
					}))
				}
			}
			const _e = (e, t, s, n) => {
					let o = t;
					return s && (o += "-overlay"), n && (o += "-sticky"), o += e
				},
				Ce = ge(Oe(Object(R.c)(Ee)));
			t.c = r.a.memo((function(e) {
				const t = Object(ae.b)();
				return r.a.createElement(Ce, le({}, e, {
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
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
				E = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				_ = s("./src/reddit/selectors/telemetry.ts"),
				C = s("./src/reddit/selectors/tooltip.ts"),
				y = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				k = s.n(y);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const j = "view--layout--FUE",
				I = "LayoutSwitch--picker",
				S = Object(c.a)(f.a),
				P = {
					[b.d.Card]: E.a,
					[b.d.Classic]: v.a,
					[b.d.Compact]: O.a
				},
				T = {
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
				N = Object(h.t)(),
				L = Object(i.c)({
					dropdownIsOpen: Object(C.b)(I),
					postLayout: h.N,
					redditStyle: h.A
				}),
				M = Object(a.b)(L, e => ({
					onListingLayoutChange: (t, s) => e(Object(m.x)(t, s)),
					openDropdown: () => e(Object(p.h)({
						tooltipId: I
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
							screen: Object(_.screen)(t),
							subreddit: Object(_.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: s,
							onLayoutClick: n,
							postLayout: o
						} = this.props, a = s || b.e[o], i = e === a, c = P[e], l = T[e];
						return r.a.createElement(g.b, w({}, t, {
							className: Object(d.a)(k.a.LayoutItem, {
								[k.a.selected]: i
							}),
							"data-layout": e,
							displayText: l(),
							iconWrapperClassName: k.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: k.a.LayoutItemTextClassName
						}), r.a.createElement(c, {
							className: k.a.LayoutIcon,
							onClick: i ? void 0 : n
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return r.a.createElement(S, w({}, e, {
							className: k.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: k.a.DropdownRow,
							rowIconClassName: k.a.DropdownRowIcon,
							rowSelectedClassName: k.a.DropdownRowSelected,
							tooltipId: I
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
						className: Object(d.a)(k.a.Container, e),
						id: j
					}, r.a.createElement("div", {
						className: k.a.DropdownContainer,
						onClick: s
					}, this.renderItem(o, {
						id: I,
						showDropdownTriangle: !0
					}), r.a.createElement(x.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = N(M(Object(u.c)(Object(l.a)(R))))
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
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/listingSort/index.ts"),
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
				E = s("./src/reddit/contexts/Tooltip.ts"),
				_ = s("./src/reddit/controls/Dropdown/index.tsx"),
				C = s("./src/reddit/controls/Dropdown/Row.tsx"),
				y = s("./src/reddit/helpers/path/index.ts"),
				k = s("./src/reddit/helpers/trackers/navigation.ts"),
				w = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				j = s("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				I = s("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				S = s("./src/reddit/selectors/tooltip.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				T = s("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				N = s("./src/reddit/components/ListingSort/index.m.less"),
				L = s.n(N),
				M = s("./src/lib/lessComponent.tsx");

			function R() {
				return (R = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var A = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const F = "ListingSort--SortPicker",
				B = Object(v.a)(M.a.wrapped(_.a, "Dropdown", L.a)),
				D = M.a.wrapped(T.b, "ListingSortIcon", L.a),
				H = (M.a.wrapped(w.b, "DropdownTriangle", L.a), M.a.div("Title", L.a)),
				W = M.a.wrapped(e => o.a.createElement(C.b, R({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", L.a),
				U = e => {
					var {
						disabled: t
					} = e, s = A(e, ["disabled"]);
					return o.a.createElement("div", R({}, s, {
						className: Object(a.a)(L.a.SortWrapper, s.className, {
							[L.a.isDisabled]: t
						})
					}))
				},
				V = M.a.div("DropdownRowDisabled", L.a),
				G = Object(l.t)({
					isFrontpage: l.y,
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				z = Object(u.c)({
					isAwardListingExperimentEnabled: I.a,
					isBestSortPopularEnabled: j.a,
					user: P.i,
					dropdownIsOpen: (e, t) => Object(S.b)(t.dropdownId || F)(e),
					isPopularPage: l.C
				}),
				K = Object(r.b)(z, (e, t) => {
					let {
						dropdownId: s,
						pageLayer: n
					} = t;
					return {
						onOpenDropdown: () => e(Object(f.h)({
							tooltipId: s || F
						}))
					}
				});
			var q = M.a.wrapped(G(K(Object(d.c)(e => o.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && o.a.createElement(H, null, g.fbt._("Sort", null, {
					hk: "2BfINq"
				})), o.a.createElement(U, {
					disabled: e.disabled
				}, e.children || o.a.createElement(W, {
					className: e.buttonClassName,
					displayText: Object(O.a)(e.sort),
					id: e.dropdownId || F,
					showDropdownTriangle: !0
				}, o.a.createElement(D, {
					sort: e.sort
				}))), o.a.createElement(E.a.Consumer, null, t => o.a.createElement(B, R({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || F
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? o.a.createElement(V, null, g.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, s, n, o) => {
					const r = [h.O.HOT, h.O.NEW, h.O.TOP, h.O.RISING];
					return (e && (s || n) || t && n) && r.unshift(h.O.BEST), t && o && r.splice(3, 0, h.O.AWARDED), r
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => o.a.createElement(C.b, {
					className: Object(a.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
					displayText: Object(O.a)(t),
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(k.a)(t))
					},
					href: e.isProfilePage ? Object(b.a)(e.baseUrl, {
						sort: t
					}) : Object(y.a)(e.baseUrl, "".concat(t, "/")),
					isSelected: e.sort === t,
					key: t
				}, o.a.createElement(D, {
					className: e.rowIconClassName,
					sort: t
				}))))))))), "ListingSort", L.a),
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
			const ee = M.a.wrapped(_.a, "_Dropdown", Y.a),
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
				ae = Object(l.t)(),
				ie = Object(u.c)({
					dropdownIsOpen: Object(S.b)("StateSort--StateSortPicker")
				}),
				ce = Object(r.b)(ie, e => ({
					onOpenDropdown: () => e(Object(f.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, s) => {
						e(Object(x.b)(t)), e(Object(c.u)(h.w.UnitedStates + "_" + s))
					}
				}));
			var de = M.a.wrapped(ae(ce(e => {
				const t = "".concat(e.baseUrl, "?").concat(J.h, "=").concat(h.w.UnitedStates);
				return o.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, o.a.createElement(U, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, o.a.createElement(W, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : X(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), o.a.createElement(E.a.Consumer, null, s => o.a.createElement(te, $({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, s, {
					renderContentsHidden: !0
				}), Object.keys(h.Pb).map(s => {
					const n = h.Pb[s];
					return o.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === h.Pb.AllStates ? t : "".concat(t, "_").concat(e))(n), re(n))
					}, o.a.createElement(C.b, {
						className: Object(a.a)(e.rowClassName, e.sort === n ? e.rowSelectedClassName : void 0),
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
						className: Object(a.a)(pe.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(be) : e.onOpenDropdown(be)
					}, o.a.createElement(U, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, o.a.createElement(W, {
						className: e.buttonClassName,
						displayText: (() => t in le ? le[t]() : le[h.w.Everywhere]())(),
						id: be,
						showDropdownTriangle: !0
					})), o.a.createElement(E.a.Consumer, null, s => o.a.createElement(te, ue({
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
						}, o.a.createElement(C.b, {
							className: Object(a.a)(e.rowClassName, t === r ? e.rowSelectedClassName : void 0),
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
				Ee = s.n(Oe);

			function _e() {
				return (_e = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ce = Object(v.a)(_.a),
				ye = (e, t, s) => {
					let n = e.url;
					return e.urlParams.sort || Object(l.G)(e) || (n = ve.a.join(n, t)), Object(b.a)(n, {
						[J.x]: s
					})
				},
				ke = M.a.div("ListingSortContainer", Ee.a),
				we = Object(l.t)(),
				je = Object(u.c)({
					dropdownIsOpen: Object(S.b)("TimeSort--SortPicker")
				});
			var Ie = we(Object(r.b)(je, e => ({
					onOpenDropdown: () => e(Object(f.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(d.c)(e => o.a.createElement(ke, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, o.a.createElement(U, {
					className: e.wrapperClassName,
					disabled: !1
				}, o.a.createElement(W, {
					className: e.buttonClassName,
					displayText: Object(O.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), o.a.createElement(E.a.Consumer, null, t => o.a.createElement(Ce, _e({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [h.Sb.HOUR, h.Sb.DAY, h.Sb.WEEK, h.Sb.MONTH, h.Sb.YEAR, h.Sb.ALL].map(t => o.a.createElement(C.b, {
					className: Object(a.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
					displayText: Object(O.b)(t),
					href: ye(e.pageLayer, e.listingSort, t),
					isSelected: e.timeSort === t,
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(k.c)(t))
					}
				})))))))),
				Se = s("./src/reddit/constants/listings.ts"),
				Pe = s("./src/reddit/contexts/Buttons2020.ts"),
				Te = s("./src/reddit/controls/Button/index.tsx"),
				Ne = s("./src/reddit/controls/InternalLink/index.tsx"),
				Le = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				Me = s("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				Re = s.n(Me);

			function Ae() {
				return (Ae = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Fe = new Set([h.O.CONTROVERSIAL, h.O.TOP]),
				Be = new Set([h.O.CONTROVERSIAL, h.O.RISING]),
				De = "ListingSort--Overflow",
				He = Object(l.t)({
					isFrontpage: l.y,
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				We = Object(u.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, j.a, P.i, l.C, I.a, (e, t, s, n, o, r) => {
					if (e) return {
						isPopularPage: o,
						sortOptions: e
					};
					const a = [h.O.HOT, h.O.NEW, h.O.TOP, h.O.RISING];
					return (t && (n || s) || o && s) && a.unshift(h.O.BEST), o && r && a.splice(3, 0, h.O.AWARDED), {
						isPopularPage: o,
						sortOptions: a
					}
				});
			class Ue extends o.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(k.a)(e))
					}, this.getSortUrl = e => {
						const {
							baseUrl: t,
							isProfilePage: s
						} = this.props;
						return s ? Object(b.a)(t, {
							sort: e
						}) : Object(y.a)(t, "".concat(e, "/"))
					}, this.renderSortButton = e => t => {
						const {
							sort: s
						} = this.props;
						return t ? o.a.createElement(Te.q, {
							className: Object(a.a)(Re.a.SortLink2020, e === s && Re.a.selected),
							kind: Te.a.InternalLink,
							priority: Te.b.Plain,
							Icon: T.a[e],
							text: Object(O.a)(e),
							onClick: () => this.changeSort(e),
							to: this.getSortUrl(e),
							key: e
						}) : o.a.createElement(Ne.a, {
							className: Object(a.a)(Re.a.SortLink, e === s && Re.a.selected),
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
						} = this.props, a = n && !!s && e === h.O.HOT && r === h.O.HOT;
						return o.a.createElement(o.a.Fragment, {
							key: e
						}, o.a.createElement(Pe.a.Consumer, null, this.renderSortButton(e)), a && o.a.createElement(fe, {
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
						timeSort: i
					} = this.props, c = !t && Fe.has(n), d = Be.has(n), l = r.filter(e => !Be.has(e)), m = r.filter(e => Be.has(e) && e !== n);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(q, Ae({}, this.props, {
						buttonClassName: Re.a.DropdownButton,
						className: Object(a.a)(Re.a.SortDropdown, e),
						rowClassName: Re.a.DropdownRow,
						rowIconClassName: Re.a.DropdownRowIcon,
						rowSelectedClassName: Re.a.DropdownRowSelected,
						showTitle: !1
					})), o.a.createElement("div", {
						className: Object(a.a)(Re.a.SortButtons, e)
					}, l.map(this.renderSort)), d && this.renderSort(n), c && o.a.createElement(Ie, {
						baseUrl: this.getSortUrl(n),
						buttonClassName: Re.a.DropdownButton,
						className: Re.a.TimeSort,
						dropdownClassName: Re.a.Dropdown,
						listingSort: n,
						onChange: s,
						rowClassName: Re.a.DropdownRow,
						rowSelectedClassName: Re.a.DropdownRowSelected,
						timeSort: i || h.Tb,
						wrapperClassName: Re.a.DropdownSortWrapper
					}), m.length > 0 && o.a.createElement(q, Ae({}, this.props, {
						className: Object(a.a)(Re.a.SortOverflow, e),
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
					}, o.a.createElement(Le.a, null))))
				}
			}
			var Ve = He(Object(r.b)(We)(Object(d.c)(Ue))),
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
								const o = Object(i.c)({
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
						sort: i,
						sortOptions: c,
						subredditId: d,
						timeSort: l,
						updateSortPreference: m
					} = this.props;
					return o.a.createElement("div", {
						className: Object(a.a)(ze.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, o.a.createElement(Ve, {
						baseUrl: e,
						disabled: n,
						geopopularSort: s,
						onChange: m,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
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
		"./src/reddit/components/LargePost/placeholder.m.less": function(e, t, s) {
			e.exports = {
				content: "_1yYeg-XN7v7i06TrK8Lh13",
				emptyVerticalVotes: "_3Qm3gV6v4Y9YWuQgCqMvJr",
				emptyScore: "y9vamInQ4LrXndusvhkBl",
				topLine: "_3QuUl4wSXyqVEAkIgGaLXl",
				topMetaOne: "_3vDeGQp8VifbnDC95HagCL",
				topMetaTwo: "Nci_4K-inwrSvpM-HSgWy",
				title: "_1QxTngAAL4xURgv5RVNOq1",
				media: "_2cFr_UVzM0pQGvZVL2Pmx5",
				flatlist: "_33_7mRxP4egdr8CL9OMSdb",
				flatlistItemOne: "_EVV9UvUf3cYf-HtTUL33",
				flatListItemTwo: "_2Ovk4TwuzZDamFhAj_X5Nl",
				bottomMeta: "_3Yno3UEEUpbfXOklgaEf27",
				postActionBar: "_3-iHWkhaRqC0JmCwckFVg1",
				postActionButton: "_314KvlynGyTcpUjSXckrbY",
				long: "_3EpUFkJ6GGzK-aVzndYmTT"
			}
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
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/constants/componentSizes.ts"),
				d = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/constants/screenWidths.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				u = s.n(p),
				b = s("./src/lib/lessComponent.tsx");
			const h = Object(m.t)(),
				x = Object(a.c)({
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
					const e = Object(i.a)(this.props.className, u.a.Component, {
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
				a = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				c = s("./src/reddit/icons/svgs/Best/index.tsx"),
				d = s("./src/reddit/icons/svgs/Controversial/index.tsx"),
				l = s("./src/reddit/icons/svgs/Hot/index.tsx"),
				m = s("./src/reddit/icons/svgs/New/index.tsx"),
				p = s("./src/reddit/icons/svgs/Rising/index.tsx"),
				u = s("./src/reddit/icons/svgs/Top/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/index.m.less"),
				h = s.n(b);
			const x = {
				[a.O.BEST]: c.a,
				[a.O.HOT]: l.a,
				[a.O.NEW]: m.a,
				[a.O.CONTROVERSIAL]: d.a,
				[a.O.TOP]: u.a,
				[a.O.RISING]: p.a,
				[a.O.AWARDED]: i.a
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
				b = s("./src/reddit/components/ModModeReports/helpers.ts"),
				h = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				x = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				f = s("./src/reddit/constants/postLayout.ts"),
				g = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				v = s("./src/reddit/helpers/trackers/post.ts"),
				O = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				E = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				C = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				y = s("./src/reddit/selectors/activeModalId.ts"),
				k = s("./src/reddit/selectors/moderatorPermissions.ts"),
				w = s("./src/reddit/selectors/postFlair.ts"),
				j = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				I = s("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				S = s("./src/reddit/components/ModToolsFlatlist/index.m.less"),
				P = s.n(S);
			const T = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return Object(I.b)({
						breakpointType: I.a.HideIfVWSmaller,
						flatlistItem: e,
						isCompact: t
					})
				},
				N = Object(a.b)(() => Object(i.c)({
					activeModalId: y.a,
					canEditFlair: (e, t) => {
						let {
							post: s
						} = t;
						return Object(w.a)(e, {
							postId: s.id
						})
					},
					moderatorPermissions: (e, t) => Object(k.i)(e, {
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
			t.a = N(e => {
				const {
					canEditFlair: t,
					className: s,
					isOverlay: a,
					layout: i,
					moderatorPermissions: l,
					modModeEnabled: m,
					onApprovePost: p,
					onFlairPost: y,
					onRemovePost: k,
					onSpamPost: w,
					post: I,
					sendEvent: S,
					showIconsOnly: N
				} = e, L = Object(g.a)(l), M = Object(b.b)(I), R = !(!I.approvedBy || !M), A = Object(h.b)(I.id, a), F = L && m && !I.isSponsored, B = t && m;
				let D, H, W;
				N || (D = ((e, t) => e ? n.fbt._("reapprove", null, {
					hk: "OJvB1"
				}) : t ? n.fbt._("approved", null, {
					hk: "2bWAFI"
				}) : n.fbt._("approve", null, {
					hk: "2DIHcM"
				}))(R, I.approvedBy), H = ((e, t) => e ? t === d.k ? n.fbt._("Confirm removal", null, {
					hk: "1t5tKM"
				}) : n.fbt._("removed", null, {
					hk: "35ZTch"
				}) : n.fbt._("remove", null, {
					hk: "3LWMcS"
				}))(I.isRemoved, I.bannedBy), W = (e => e ? n.fbt._("spammed", null, {
					hk: "3GPrkZ"
				}) : n.fbt._("spam", null, {
					hk: "3ebJLg"
				}))(I.isSpam));
				const U = !a && i === f.g.Compact;
				return r.a.createElement("div", {
					className: Object(c.a)(P.a.container, s)
				}, F && r.a.createElement(o.Fragment, null, r.a.createElement(x.b, {
					className: T(j.a.Approve, U),
					key: "approveButton",
					text: D,
					disabled: !!I.approvedBy && !M,
					onClick: () => {
						p(), S(Object(v.f)(I.id, "approve"))
					}
				}, r.a.createElement(O.a, null)), r.a.createElement(x.d, {
					className: T(j.a.Remove, U),
					key: "removeButton",
					text: H,
					disabled: I.isRemoved && I.bannedBy !== d.k,
					onClick: () => {
						k(), I.isRemoved && I.bannedBy === d.k ? S(Object(v.f)(I.id, "confirm_remove")) : S(Object(v.f)(I.id, "remove"))
					}
				}, r.a.createElement(E.a, null)), r.a.createElement(x.d, {
					className: T(j.a.Spam, U),
					key: "removeSpamButton",
					text: W,
					disabled: I.isSpam,
					onClick: () => {
						w(), S(Object(v.f)(I.id, "spam"))
					}
				}, r.a.createElement(_.a, null))), B && r.a.createElement(x.c, {
					className: T(j.a.Flair, U),
					key: "tagButton",
					onClick: () => {
						y(A)(), S(Object(v.f)(I.id, "post_flair_picker"))
					}
				}, r.a.createElement(C.a, null)), r.a.createElement(u.f, {
					postId: I.id
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
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
				} = e, [x, f] = Object(o.useState)(!0), g = Object(b.b)(s.id, h), v = Object(a.c)(), O = Object(u.a)(), E = Object(b.a)(s, h), _ = (e, n) => O(Object(p.a)(t, s.id, e, n));
				Object(o.useEffect)(() => {
					E && _("modal", "show")
				}, [E]);
				if (!E || !x) return null;
				const C = n.fbt._("Help r/{subredditName} mods", [n.fbt._param("subredditName", t)], {
					hk: "1rusN4"
				});
				return r.a.createElement(l.a, {
					id: g,
					title: C,
					onClose: () => {
						f(!1), _("close", "click"), v(Object(c.y)()), v(Object(c.J)({
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
				}))), n.fbt._param("=community", r.a.createElement(i.a, {
					to: "/r/".concat(t, "/about/rules"),
					target: "_blank"
				}, n.fbt._("community", null, {
					hk: "1cy8jU"
				})))], {
					hk: "sfngx"
				})), r.a.createElement(m.a, {
					onClick: () => (f(!1), _("report", "click"), void v(Object(d.j)(s.id)))
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
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
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
				} = e, [f, g] = Object(r.useState)(n.Survey), v = Object(h.b)(s.id, x), O = Object(i.c)(), E = Object(b.a)(), _ = Object(h.a)(s, x), C = (e, n) => E(Object(u.b)(t, s.id, e, n));
				Object(r.useEffect)(() => {
					_ && C("modal", "show")
				}, [_]);
				const y = e => {
					g(n.Closed), C("site" === e ? "breaks_reddit_rules" : "breaks_community_rules", "click"), O(Object(l.j)(s.id, void 0, e))
				};
				if (!_) return null;
				let k = null;
				const w = {
					id: v,
					title: o.fbt._("Why did you downvote this post?", null, {
						hk: "2tTiIx"
					}),
					onClose: () => {
						g(n.Closed), C("close", "click"), O(Object(d.y)())
					},
					onClickOutside: () => {
						O(Object(d.y)())
					}
				};
				switch (f) {
					case n.Survey:
						k = a.a.createElement(m.a, w, a.a.createElement("p", null, o.fbt._("Your answer helps r/ {subredditName} mods improve this community.", [o.fbt._param("subredditName", t)], {
							hk: "DNEel"
						})), a.a.createElement(p.a, {
							onClick: () => {
								g(n.OffTopic), C("off_topic", "click")
							}
						}, o.fbt._("It's off topic", null, {
							hk: "4iG26l"
						})), a.a.createElement(p.a, {
							onClick: () => {
								g(n.DontLike), C("dont_like", "click")
							}
						}, o.fbt._("I don't like it", null, {
							hk: "1jB1Mh"
						})), a.a.createElement(p.a, {
							onClick: () => {
								g(n.BreaksRules), C("breaks_rules", "click")
							}
						}, o.fbt._("It breaks the rules", null, {
							hk: "1yQBhi"
						})));
						break;
					case n.OffTopic:
						k = a.a.createElement(m.a, w, a.a.createElement("p", null, o.fbt._("Got it. Thanks for helping out this community.", null, {
							hk: "22pTV3"
						})));
						break;
					case n.DontLike:
						k = a.a.createElement(m.a, w, a.a.createElement("p", null, o.fbt._("Just a reminder, it’s not an official rule but it is considered improper Reddiquette to downvote an otherwise acceptable post because you don’t personally like it.", null, {
							hk: "3mRvPM"
						})));
						break;
					case n.BreaksRules:
						k = a.a.createElement(m.a, w, a.a.createElement("p", null, o.fbt._("Let us know if it breaks {=Reddit} or {=community} rules.", [o.fbt._param("=Reddit", a.a.createElement("a", {
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
							onClick: () => y("site")
						}, o.fbt._("It breaks Reddit rules", null, {
							hk: "3MxBm9"
						})), a.a.createElement(p.a, {
							onClick: () => y("community")
						}, o.fbt._("It breaks community rules", null, {
							hk: "3XbHan"
						})));
						break;
					case n.Closed:
				}
				return k
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
				a = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-redux/es/index.js")),
				i = s("./node_modules/reselect/es/index.js"),
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
			const E = Object(a.b)(() => Object(i.c)({
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
			var _ = Object(l.a)(E(e => {
					const {
						comment: t,
						commentId: s,
						first: n,
						isAwarded: r,
						isNightmodeOn: a,
						last: i,
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
							[O.a.isLast]: i,
							[O.a.isAwarded]: r,
							[O.a.isNightmodeOn]: a
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
				C = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				y = s("./src/reddit/contexts/PageLayer/index.tsx"),
				k = s("./src/reddit/helpers/isComment.ts"),
				w = s("./src/reddit/components/OverviewChronoList/ListItem.m.less"),
				j = s.n(w),
				I = s("./src/lib/lessComponent.tsx");

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var P = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const T = Object(y.t)({
					currentProfileName: y.h,
					isCommentsPage: y.w,
					isCommentPermalink: y.v,
					isProfilePostListing: y.I,
					pageLayer: e => e
				}),
				N = I.a.wrapped(C.a, "OverviewCommentPost", j.a),
				L = I.a.wrapped(r.default, "ClassicPost", j.a);
			t.a = T(e => {
				const {
					itemId: t,
					isFirstInCommentList: s,
					isLastInCommentList: n,
					allowModToolsUnderComments: r,
					height: a,
					width: i
				} = e, c = P(e, ["itemId", "isFirstInCommentList", "isLastInCommentList", "allowModToolsUnderComments", "height", "width"]);
				return Object(k.a)(t) ? s ? o.a.createElement(o.a.Fragment, null, o.a.createElement(N, S({}, c, {
					availableWidth: i,
					commentId: t
				})), o.a.createElement(_, {
					commentId: t,
					first: s,
					last: n,
					showModTools: r
				})) : o.a.createElement(_, {
					commentId: t,
					first: s,
					last: n,
					showModTools: r
				}) : o.a.createElement(L, S({}, c, {
					inSubredditOrProfile: !1
				}))
			})
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
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
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
				E = s("./src/reddit/components/OverviewCommentPost/index.m.less"),
				_ = s.n(E);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), y = d.a.wrapped(m.a, "InternalLink", _.a), k = d.a.div("Wrapper", _.a), w = d.a.div("Row", _.a), j = d.a.wrapped(g.a, "CommentIcon", _.a), I = d.a.div("TitleContainer", _.a), S = d.a.div("PostTitleContainer", _.a), P = d.a.wrapped(x.c, "PostTitle", _.a), T = d.a.wrapped(f.d, "PostTopMeta", _.a), N = d.a.wrapped(f.a, "MetaSeparator", _.a), L = Object(r.b)(() => Object(a.c)({
				comment: u.n,
				post: b.O,
				subredditOrProfile: b.bb
			})), M = e => {
				const {
					post: t,
					subredditOrProfile: s
				} = e;
				if (s) return o.a.createElement(n.Fragment, null, o.a.createElement(N, null), o.a.createElement(T, {
					metaSeparatorClassName: _.a.postTopMetaMetaSeparator,
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
				return o.a.createElement(y, {
					"data-click-id": "user",
					to: "/user/".concat(n, "/")
				}, n)
			};
			t.a = Object(c.a)(L(Object(l.c)(e => {
				const {
					className: t,
					eventFactory: s,
					onClickPost: n,
					post: r
				} = e;
				return o.a.createElement(h.a, {
					className: Object(i.a)(O.a.compactPostStyles, _.a.overviewCommentPost, {
						[_.a.banned]: !!e.post.bannedBy,
						[_.a.reported]: !e.post.bannedBy && !!e.post.numReports && e.post.numReports > 0
					}, t),
					post: r,
					onClick: n,
					eventFactory: s
				}, o.a.createElement(k, {
					style: {
						background: Object(p.e)(e)
					}
				}, o.a.createElement(w, null, o.a.createElement(j, null), o.a.createElement(I, null, C._("{postAuthor} commented on {postTitle} {postMeta}", [C._param("postAuthor", R(e)), C._param("postTitle", o.a.createElement(S, null, o.a.createElement(P, {
					outboundLinkClassName: _.a.postTitleOutboundLink,
					post: r,
					size: x.b.Small,
					titleClassName: _.a.postTitleTitle
				}))), C._param("postMeta", M(e))], {
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
				a = s("./src/reddit/components/OverviewConversationsPost/Border/index.m.less"),
				i = s.n(a);

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
					className: Object(r.a)(i.a.border, {
						[i.a.isFirst]: t,
						[i.a.isLast]: s
					})
				}, n))
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
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
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
			const E = m.a.div("ProfileOwnerCommentWrapper", O.a),
				_ = m.a.div("CommentContentWrapper", O.a),
				C = m.a.div("Wrapper", O.a),
				y = m.a.div("CommentSeparator", O.a),
				k = Object(i.b)(() => Object(c.c)({
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
			class w extends a.a.Component {
				render() {
					const {
						comment: e,
						commentId: t,
						depth: s,
						openPost: n,
						isAwarded: r,
						isFirst: i,
						isLast: c,
						isNightmodeOn: d,
						profileName: m,
						showModTools: u
					} = this.props, b = m === e.author ? j : I;
					return a.a.createElement(p.a, {
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
					}, a.a.createElement(C, {
						className: Object(l.a)({
							[O.a.isFirst]: i,
							[O.a.isLast]: c,
							[O.a.isAwarded]: r,
							[O.a.isNightmodeOn]: d
						})
					}, o()(s + 1, e => a.a.createElement(y, {
						key: e
					})), a.a.createElement(_, null, b(t, m, u))))
				}
			}
			const j = (e, t, s) => a.a.createElement(E, null, I(e, t, s, !0, !0)),
				I = function(e, t, s) {
					let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
						o = arguments.length > 4 ? arguments[4] : void 0;
					return a.a.createElement(u.a, {
						commentId: e,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: n,
						showModTools: s,
						isExpanded: !!o
					})
				};
			t.a = k(w)
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
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/uuid/v4.js"),
				a = s.n(r),
				i = s("./src/reddit/hooks/useOnClickOutside.ts"),
				c = s("./src/reddit/components/Popup/index.m.less"),
				d = s.n(c);

			function l(e) {
				const {
					id: t = a()(),
					onClose: s,
					onClickOutside: n,
					title: r,
					children: c
				} = e;
				return Object(i.a)(t, n), o.a.createElement("div", {
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
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/index.tsx"),
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
			t.a = Object(a.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: a,
					post: c,
					redditStyle: p,
					theme: u
				} = e, b = m(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return o.a.createElement("div", l({
					className: Object(r.a)(d.a.backgroundWrapper, s),
					style: Object(i.c)(n, e),
					onClick: a
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
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
				E = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				C = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				y = s("./src/reddit/icons/fonts/Report/index.tsx"),
				k = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				w = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				j = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				I = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				S = s("./src/reddit/components/PostBadges/index.m.less"),
				P = s.n(S);

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const N = e => r.a.createElement("span", T({
					className: P.a.removalReason
				}, e), e.children),
				L = () => n.fbt._("Archived", null, {
					hk: "zv3q3"
				}),
				M = () => n.fbt._("Comments are locked", null, {
					hk: "8HjJ9"
				}),
				R = e => n.fbt._("Moderator of {community name}", [n.fbt._param("community name", e)], {
					hk: "nJqIB"
				}),
				A = () => n.fbt._("Stickied post", null, {
					hk: "3qSaBs"
				}),
				F = () => n.fbt._("Pinned post", null, {
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
				H = Object(i.c)({
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
				W = Object(a.b)(H, (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onOpenRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(l.f)({
						tooltipId: t
					}))
				}));
			t.a = D(W(e => {
				let {
					className: t,
					displayText: s,
					isSubreddit: a,
					inSubredditOrProfile: i,
					isCompactPinnedPost: l,
					isPinned: b,
					isProfilePostListing: v,
					modModeEnabled: S,
					onHideTooltip: D,
					onOpenRemovalReasonModal: H,
					onShowTooltip: W,
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
				}, i && s && U.distinguishType === d.C.MODERATOR && r.a.createElement(o.Fragment, null, r.a.createElement(I.a, {
					className: P.a.modIcon,
					desc: R(s),
					id: Z,
					onMouseEnter: W(Z),
					onMouseLeave: D
				}), r.a.createElement(m.c, T({
					tooltipId: Z,
					text: R(s)
				}, G))), U.isArchived && r.a.createElement(o.Fragment, null, r.a.createElement(E.a, {
					className: P.a.archivedIcon,
					desc: L(),
					id: q,
					onMouseEnter: W(q),
					onMouseLeave: D
				}), r.a.createElement(m.c, T({
					tooltipId: q,
					text: L()
				}, G))), U.isLocked && r.a.createElement(o.Fragment, null, r.a.createElement(_.a, {
					className: P.a.lockIcon,
					desc: M(),
					id: X,
					onMouseEnter: W(X),
					onMouseLeave: D
				}), r.a.createElement(m.c, T({
					tooltipId: X,
					text: M()
				}, G))), a && Object(g.k)(U) && !l && r.a.createElement(o.Fragment, null, r.a.createElement(w.a, {
					className: P.a.stickyIcon,
					desc: A(),
					id: ee,
					onMouseEnter: W(ee),
					onMouseLeave: D
				}), r.a.createElement(m.c, T({
					tooltipId: ee,
					text: A()
				}, G))), v && b && r.a.createElement(o.Fragment, null, r.a.createElement(w.a, {
					className: P.a.stickyIcon,
					desc: F(),
					id: te,
					onMouseEnter: W(te),
					onMouseLeave: D
				}), r.a.createElement(m.c, T({
					tooltipId: te,
					text: F()
				}, G))), (U.isApproved || U.approvedBy) && r.a.createElement(o.Fragment, null, r.a.createElement(O.a, {
					className: P.a.approveIcon,
					desc: Object(x.a)(U),
					id: K,
					onMouseEnter: W(K),
					onMouseLeave: D
				}), r.a.createElement(m.c, T({
					tooltipId: K,
					text: Object(x.a)(U)
				}, G))), Object(h.a)(U) && r.a.createElement(o.Fragment, null, r.a.createElement(C.a, {
					className: P.a.removeIcon,
					desc: Object(x.c)(U),
					id: Q,
					onMouseEnter: W(Q),
					onMouseLeave: D
				}), z && r.a.createElement(p.a, {
					className: P.a.addRemovalReason,
					onClick: H,
					text: n.fbt._("Add a removal reason", null, {
						hk: "1YDo3"
					})
				}), (U.modRemovalReason || U.modNote) && r.a.createElement(N, {
					onMouseEnter: W(Q),
					onMouseLeave: D
				}, n.fbt._("Removal reason", null, {
					hk: "2DhKVZ"
				})), r.a.createElement(m.c, T({
					tooltipId: Q,
					text: Object(x.c)(U)
				}, G))), U.bannedBy && U.isSpam && r.a.createElement(o.Fragment, null, r.a.createElement(k.a, {
					className: P.a.spamIcon,
					desc: Object(x.e)(U),
					id: $,
					onMouseEnter: W($),
					onMouseLeave: D
				}), r.a.createElement(m.c, T({
					tooltipId: $,
					text: Object(x.e)(U)
				}, G))), ("AutoModerator" === U.approvedBy || "AutoModerator" === U.bannedBy) && r.a.createElement(o.Fragment, null, r.a.createElement(j.a, {
					className: Object(c.a)(P.a.automoderator, !!U.bannedBy && P.a.isRemoved),
					desc: x.b,
					id: J,
					onMouseEnter: W(J),
					onMouseLeave: D
				}), r.a.createElement(m.c, T({
					tooltipId: J,
					text: x.b
				}, G))), Object(f.a)(U) && !S && r.a.createElement(o.Fragment, null, r.a.createElement(y.a, {
					className: P.a.reportIcon,
					desc: Object(x.d)(U.numReports),
					id: Y,
					onMouseEnter: W(Y),
					onMouseLeave: D
				}), r.a.createElement(m.c, T({
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
				a = s("./src/lib/ads/index.ts"),
				i = s("./src/reddit/components/AdViewability/index.tsx"),
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
						a = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, r, a), o.a.createElement("div", {
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
				E = s.n(O);
			const _ = Object(r.c)({
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
				C = Object(u.a)(_),
				y = e => {
					const t = Object(v.d)(e.target, e.currentTarget),
						s = Object(v.b)(e.target, e.currentTarget, v.a.buttons);
					return "subreddit" !== t && s
				};
			class k extends o.a.Component {
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
							if (!this.cancelClick && s.button < 2 && (e(() => u && u(s, p, t, d))(s), h && y(s) && h(s, p)), p.id && d) {
								const {
									source: e
								} = Object(a.s)(p, d);
								if (e && e.outboundUrl) {
									const t = r + 1;
									x(Object(c.c)(p.id, e.outboundUrl, t))
								}
							}
						},
						className: Object(g.a)(E.a.WrappedPost, n, "Post ".concat(p.id), {
							promotedlink: p.isSponsored
						}),
						id: l ? l(p.id) : p.id,
						tabIndex: -1,
						"data-testid": p.id
					}, s), _ = !!p.media && p.media.type === b.o.VIDEO;
					return p.isSponsored || _ ? o.a.createElement(i.a, {
						post: p,
						trackDisplay: !0
					}, O) : p.media && Object(b.F)(p.media) ? o.a.createElement(m, {
						postId: p.id
					}, O) : O
				}
			}
			t.a = C(Object(v.c)(Object(p.c)(k)))
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
				b = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/controls/Input/index.tsx"),
				x = s("./src/reddit/icons/svgs/Close/index.tsx"),
				f = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				g = s("./src/reddit/icons/svgs/Search/index.tsx"),
				v = s("./src/reddit/layout/row/Inline/index.tsx"),
				O = s("./src/reddit/models/PostCreationForm/index.ts"),
				E = s("./src/reddit/selectors/postCollection.ts"),
				_ = s("./src/lib/timeAgo/index.ts"),
				C = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				y = s("./src/reddit/helpers/name/index.ts"),
				k = s("./src/reddit/models/Subreddit/index.ts"),
				w = s("./src/reddit/models/User/index.ts"),
				j = s("./src/reddit/selectors/subreddit.ts"),
				I = s("./src/reddit/selectors/user.ts"),
				S = s("./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less"),
				P = s.n(S),
				T = s("./src/lib/lessComponent.tsx");
			const {
				fbt: N
			} = s("./node_modules/fbt/lib/FbtPublic.js"), L = T.a.div("Container", P.a), M = T.a.h2("PostTitle", P.a), R = T.a.div("MetaLine", P.a), A = T.a.span("SubredditName", P.a), F = T.a.time("InfoSpan", P.a), B = Object(c.c)({
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
				user: I.i
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
					} = this.props, o = t && Object(k.g)(t) && s ? Object(y.d)(Object(w.e)(s)) : t ? t.displayText : "", r = e.postIds.length;
					return a.a.createElement(L, {
						onClick: this.onClick,
						className: P.a.container
					}, a.a.createElement(M, {
						"data-redditstyle": !0
					}, e.title), a.a.createElement(R, {
						"data-redditstyle": !0
					}, o && a.a.createElement(A, {
						"data-redditstyle": !0
					}, o), o && a.a.createElement(C.b, null), a.a.createElement(F, null, N._({
						"*": "{number of posts} posts",
						_1: "1 post"
					}, [N._plural(r, "number of posts")], {
						hk: "1Uy96U"
					})), a.a.createElement(C.b, null), a.a.createElement(F, null, N._("created {time}", [N._param("time", Object(_.d)(e.createdAtUTC))], {
						hk: "2cUc5m"
					}))), n && a.a.createElement("div", {
						className: P.a.onHoverActionText
					}, a.a.createElement("span", null, n)))
				}
			}
			var H = Object(i.b)(B)(D),
				W = s("./src/reddit/helpers/trackers/postCollection.ts"),
				U = s("./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less"),
				V = s.n(U);
			const G = "".concat(n.a.assetPath, "/img/snoo-drafts.png"),
				z = T.a.div("TopRow", V.a),
				K = T.a.div("TitleRow", V.a),
				q = T.a.div("DetailsContainer", V.a),
				J = T.a.wrapped(v.a, "ButtonRow", V.a),
				X = T.a.div("CloseWrapper", V.a),
				Z = T.a.wrapped(x.a, "Close", V.a),
				Q = T.a.div("Empty", V.a),
				Y = T.a.img("EmptyImage", V.a),
				$ = T.a.p("EmptyText", V.a),
				ee = T.a.div("FilterWrapper", V.a),
				te = T.a.wrapped(h.a, "FilterInput", V.a),
				se = T.a.wrapped(g.a, "SearchIcon", V.a),
				ne = T.a.wrapped(f.a, "PlusIcon", V.a),
				oe = T.a.wrapped(b.m, "CreateCollectionButton", V.a),
				re = Object(l.a)((e, t) => {
					const s = t.toLowerCase();
					return e.filter(e => e.title.toLowerCase().includes(s))
				}),
				ae = Object(c.c)({
					collections: E.w
				}),
				ie = Object(i.b)(ae, (e, t) => {
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
			class ce extends a.a.PureComponent {
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
					}, this.renderItem = e => a.a.createElement(H, {
						key: e.id,
						collection: e,
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
					return a.a.createElement(Q, null, a.a.createElement(Y, {
						src: G
					}), a.a.createElement($, null, o.fbt._("Your collections will live here", null, {
						hk: "FCxWg"
					})))
				}
				renderNoFilterMatches() {
					return a.a.createElement(Q, null, a.a.createElement($, null, o.fbt._("No collection matching filter", null, {
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
						className: V.a.wrapper,
						"data-redditstyle": !0
					}, a.a.createElement(z, null, a.a.createElement(K, {
						"data-redditstyle": !0
					}, t || o.fbt._("My collections", null, {
						hk: "3yKovS"
					}), a.a.createElement(X, {
						onClick: this.close
					}, a.a.createElement(Z, {
						"data-redditstyle": !0
					}))), a.a.createElement(ee, null, a.a.createElement(se, null), a.a.createElement(te, {
						placeholder: o.fbt._("Find a collection", null, {
							hk: "3DbFBU"
						}),
						value: this.state.filterStr,
						onChange: this.onFilterStringChange
					}))), a.a.createElement(q, null, s), a.a.createElement(J, null, a.a.createElement(oe, {
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
				b = s("./src/reddit/controls/ErrorText/index.tsx"),
				h = s("./src/reddit/controls/Input/index.tsx"),
				x = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				f = s("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				g = s("./src/reddit/icons/svgs/Close/index.tsx"),
				v = s("./src/reddit/layout/row/Inline/index.tsx"),
				O = s("./src/reddit/selectors/postCollection.ts"),
				E = s("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less"),
				_ = s.n(E),
				C = s("./src/lib/lessComponent.tsx");
			const y = C.a.div("Container", _.a),
				k = C.a.div("Content", _.a),
				w = C.a.div("TitleRow", _.a),
				j = C.a.div("Details", _.a),
				I = C.a.wrapped(m.f, "Footer", _.a),
				S = C.a.wrapped(u.l, "CancelButton", _.a),
				P = C.a.div("CloseWrapper", _.a),
				T = C.a.wrapped(g.a, "CloseIcon", _.a),
				N = C.a.label("Label", _.a),
				L = C.a.wrapped(h.a, "TitleInput", _.a),
				M = C.a.wrapped(f.a, "AddCollectionIcon", _.a),
				R = C.a.wrapped(u.i, "PrimaryActionButton", _.a),
				A = C.a.wrapped(x.a, "LoadingIcon", _.a),
				F = C.a.wrapped(b.b, "ErrorText", _.a),
				B = Object(i.c)({
					collection: O.r,
					error: O.c,
					isPending: O.h
				}),
				D = Object(a.b)(B, (e, t) => ({
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
						isPending: s
					} = this.props, o = !e, a = !!this.state.collectionTitle.trim(), i = o ? n.fbt._("Create", null, {
						hk: "Ijp7n"
					}) : n.fbt._("Save", null, {
						hk: "2Onrrv"
					});
					return r.a.createElement(y, null, r.a.createElement(P, {
						onClick: this.props.onCancel
					}, r.a.createElement(T, null)), r.a.createElement(k, null, o && r.a.createElement(r.a.Fragment, null, r.a.createElement(w, null, r.a.createElement(M, null), n.fbt._("Create a collection", null, {
						hk: "3ndxk5"
					})), r.a.createElement(j, null, n.fbt._("Group posts into one feed. Create a series of events or just a group of random things. Make something awesome!", null, {
						hk: "2eCAQw"
					}))), r.a.createElement(N, null, o ? n.fbt._("Give a title for your collection", null, {
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
						hk: "2TSLl5"
					})), r.a.createElement(R, {
						onClick: this.onPrimaryButtonClick,
						disabled: s || !a
					}, s ? r.a.createElement(A, {
						sizePx: 10
					}) : i)), t && r.a.createElement(F, null, Object(d.a)(t))))
				}
			}
			t.a = Object(c.a)(D(H))
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
				return k
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
				b = s("./src/reddit/components/FlairPreview/index.tsx"),
				h = s("./src/reddit/components/FlairSearch/index.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/models/Flair/index.ts"),
				g = s("./src/reddit/selectors/moderatorPermissions.ts"),
				v = s("./src/reddit/selectors/postFlair.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/selectors/telemetry.ts"),
				_ = s("./src/reddit/components/PostFlairPicker/helpers.ts"),
				C = s("./src/reddit/components/PostFlairPicker/index.m.less"),
				y = s.n(C);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(n || (n = {}));
			const k = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.UNSET;
					return "PostFlair__Modal-[postId: ".concat(e, "]-isOverlay[").concat(t, "]-position[").concat(s, "]")
				},
				w = Object(c.c)({
					flairData: v.d,
					subreddit: O.T,
					isMod: (e, t) => !!Object(g.j)(e, t)
				});
			class j extends a.a.Component {
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
						subreddit: Object(E.subredditById)(t, this.props.subredditId)
					}));
					const t = Object(_.c)(e.flairs);
					this.state = {
						previewFlair: t || null
					}
				}
				canSave() {
					const {
						templates: e
					} = this.props.flairData, {
						previewFlair: t
					} = this.state, s = Object(_.c)(this.props.flairs) || null;
					return Object(_.b)(e, t, s)
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
					}), a.a.createElement(b.a, {
						flair: t,
						flairTemplateType: f.d.LinkFlair,
						placeholderText: o.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), a.a.createElement(h.a, {
						flair: t,
						flairTemplateType: f.d.LinkFlair,
						subredditId: r.id,
						templates: c,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), a.a.createElement("div", {
						className: y.a.buttonsRow
					}, a.a.createElement(x.i, {
						disabled: !l,
						onClick: this.onApply
					}, o.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), a.a.createElement(x.l, {
						className: y.a.clearButton,
						onClick: this.onClear
					}, o.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const I = Object(i.b)(w, (e, t) => ({
				closeModal: () => e(Object(m.i)(t.modalId))
			}))(j);
			t.a = Object(l.a)(Object(d.c)(I))
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
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
					} = this.props, o = this.state.isHovered, a = s.isFollowed;
					let i = a ? n.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : n.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return a && o && (i = n.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
						className: Object(c.a)(u.a.collectionFollow, {
							[u.a.isFollowed]: !!s.isFollowed,
							[u.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, i)
				}
			}
			const h = Object(a.b)(() => Object(i.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(d.u)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(l.c)(b))
		},
		"./src/reddit/components/PostList/LoadMore.m.less": function(e, t, s) {
			e.exports = {
				Component: "_3tBFh6Ty3gSaxW4gcm6hZ_",
				component: "_3tBFh6Ty3gSaxW4gcm6hZ_"
			}
		},
		"./src/reddit/components/PostList/LoadMore.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/PostList/Placeholder.tsx"),
				r = s("./src/reddit/components/PostList/LoadMore.m.less"),
				a = s.n(r);
			t.a = n.a.wrapped(o.a, "Component", a.a)
		},
		"./src/reddit/components/PostList/Placeholder.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/constant.js"),
				o = s.n(n),
				r = s("./node_modules/lodash/times.js"),
				a = s.n(r),
				i = s("./node_modules/react/index.js"),
				c = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/fastdom/index.ts"),
				p = s("./src/lib/intersectionObserver/index.ts"),
				u = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				h = s("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				x = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/lib/classNames/index.ts")),
				f = s("./src/reddit/components/PostLeftRail/index.tsx"),
				g = s("./src/reddit/components/SubredditIcon/index.tsx"),
				v = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				_ = s("./src/reddit/models/Vote/index.ts"),
				C = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				y = s.n(C),
				k = s("./src/reddit/components/LargePost/placeholder.m.less"),
				w = s.n(k);

			function j() {
				return (j = Object.assign || function(e) {
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
			const S = Object(O.t)(),
				P = Object(l.c)({
					isFakeSubreddit: O.x
				}),
				T = Object(d.b)(P),
				N = e => {
					const t = {
						interactive: !1,
						voteState: _.a.notVoted
					};
					return c.a.createElement("div", {
						className: w.a.emptyVerticalVotes
					}, c.a.createElement(v.d, j({
						key: "u"
					}, t)), c.a.createElement("div", {
						className: w.a.emptyScore,
						key: "s"
					}), c.a.createElement(v.c, j({
						key: "d"
					}, t)))
				},
				L = e => {
					var {
						isLoading: t
					} = e, s = I(e, ["isLoading"]);
					return c.a.createElement(g.b, j({
						className: Object(E.a)({
							isLoading: t
						})
					}, s))
				};
			var M = S(T(e => {
				var {
					className: t,
					dispatch: s,
					pageLayer: n
				} = e, o = I(e, ["className", "dispatch", "pageLayer"]);
				return c.a.createElement("div", {
					className: Object(x.a)(y.a.baseLargeAndMediumPostStyles, t)
				}, c.a.createElement(f.b, {
					key: "a"
				}, c.a.createElement(N, o)), c.a.createElement("div", {
					className: w.a.content,
					key: "b"
				}, c.a.createElement("div", {
					className: w.a.topLine,
					key: "ba"
				}, o.isFakeSubreddit && c.a.createElement(L, {
					key: "baa",
					isLoading: !1
				}), c.a.createElement("div", {
					key: "bab",
					className: Object(x.a)(w.a.topMetaOne, Object(E.b)(o))
				}), c.a.createElement("div", {
					key: "bac",
					className: Object(x.a)(w.a.topMetaTwo, Object(E.b)(o))
				})), c.a.createElement("div", {
					key: "bb",
					className: Object(x.a)(w.a.title, Object(E.b)(o))
				})), c.a.createElement("div", {
					key: "c",
					className: Object(x.a)(w.a.media, Object(E.a)(o))
				}), c.a.createElement("div", {
					className: w.a.content,
					key: "d"
				}, c.a.createElement("div", {
					className: w.a.flatlist
				}, c.a.createElement("div", {
					className: Object(x.a)(w.a.flatlistItemOne, Object(E.b)(o))
				}), c.a.createElement("div", {
					className: Object(x.a)(w.a.flatListItemTwo, Object(E.b)(o))
				}))))
			}));
			const R = {
				[u.g.Large]: [M, 2],
				[u.g.Classic]: [b.b, 10],
				[u.g.Compact]: [h.a, 30]
			};

			function A(e) {
				return R[e]
			}
			const F = .1,
				B = Object(l.c)({
					loadingPostComponentForLayout: () => A
				}),
				D = Object(d.b)(B);
			class H extends c.a.Component {
				constructor() {
					super(...arguments), this.mounted = !1, this.state = {
						visible: !1
					}, this.setWrapperRef = e => {
						e !== this.wrapperRef && (this.wrapperRef && p.b(this.wrapperRef), e && p.a(e, this.updateVisibleState)), this.wrapperRef = e
					}, this.updateVisibleState = e => {
						const t = e.intersectionRatio >= F;
						m.a.write(() => {
							this.mounted && this.setState(e => e.visible !== t ? {
								visible: t
							} : null)
						})
					}
				}
				componentDidMount() {
					document.documentElement.scrollTop = document.body.scrollTop = 0, this.mounted = !0
				}
				componentWillUnmount() {
					this.mounted = !1, this.wrapperRef && p.b(this.wrapperRef)
				}
				render() {
					const {
						className: e,
						countOverride: t,
						isLoading: s,
						layout: n,
						loadingPostComponentForLayout: r
					} = this.props, {
						visible: i
					} = this.state, [d, l] = r(n), m = t || l, p = o()(c.a.createElement(d, {
						isLoading: s && i
					})), u = a()(m, p);
					return c.a.createElement("div", {
						className: e,
						ref: this.setWrapperRef
					}, c.a.Children.toArray(u))
				}
			}
			t.a = D(H)
		},
		"./src/reddit/components/PostList/SomethingWrong.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/reddit/controls/Button/index.tsx"),
				i = s("./src/reddit/helpers/describeApiError/index.ts"),
				c = s("./src/reddit/components/PostList/index.m.less"),
				d = s.n(c);
			t.a = e => {
				const {
					onTryAgain: t,
					apiError: s
				} = e;
				let o = n.fbt._("Something went wrong while loading.", null, {
					hk: "1ijaef"
				});
				return s && (o = Object(i.a)({
					apiError: s,
					isLoggedOut: !1
				})), r.a.createElement("div", {
					className: d.a.somethingWrong
				}, r.a.createElement("div", {
					className: d.a.somethingWrongText
				}, o), t && r.a.createElement(a.i, {
					onClick: t
				}, n.fbt._("Try again", null, {
					hk: "3JPIhw"
				})))
			}
		},
		"./src/reddit/components/PostList/index.m.less": function(e, t, s) {
			e.exports = {
				placeholder: "FohHGMokxXLkon1aacMoi",
				seeMoreButton: "_1Uj2L1UhJuirkaXINcf9S8",
				seeMorePostsText: "_2DB_2VI3a-y6nk57R2aWVo",
				somethingWrong: "zfoxmi0VvZvMZu1rHVbMX",
				somethingWrongText: "Ii7DEkcMDxQHElTHeeaci",
				postList: "rpBJOHq2PR60pnwJlUyP0",
				truncatedPostList: "QBfRw7Rj8UkxybFpX-USO",
				SeeMore: "_1yJOfuD_qgqaaG8ZIFbQVc",
				seeMore: "_1yJOfuD_qgqaaG8ZIFbQVc",
				ArrowRight: "wakXAw7uCIqmSRV84RKMW",
				arrowRight: "wakXAw7uCIqmSRV84RKMW"
			}
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				a = s("./src/reddit/components/Media/index.tsx");

			function i(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? o.a.createElement(r.a, {
					postId: t.crosspostRootId,
					mediaProps: Object.assign(Object.assign({}, e), {
						crosspost: t,
						primaryContent: !1
					})
				}) : o.a.createElement(a.a, Object.assign(Object.assign({}, e), {
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
				a = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				i = s("./src/reddit/components/JSAPIContainers/index.tsx"),
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
					isTopicPage: E,
					post: _,
					shouldShowSubscribeButton: C,
					subredditOrProfile: y,
					tooltipType: k
				} = e, w = !!E;
				return o.a.createElement("div", {
					className: v.a.metaContainer
				}, !n && !_.isSponsored && y && o.a.createElement(a.a, {
					postId: _.id,
					subredditName: y.name
				}, o.a.createElement(m.a, {
					className: v.a.subredditName,
					"data-click-id": "subreddit",
					to: y.url
				}, y.displayText)), y && y.isQuarantined && o.a.createElement(l.a, null), !n && !_.isSponsored && y && C && !g && o.a.createElement(p.a, {
					className: v.a.SubscribeButton2020,
					getEventFactory: e => Object(x.f)(_.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: y.name,
						type: Object(f.g)(y) ? u.a.PROFILE : u.a.SUBREDDIT
					},
					postId: _.id,
					size: b.c.XXS,
					small: !0
				}), !n && !_.isSponsored && o.a.createElement(h.b, null), !n && !_.isSponsored && o.a.createElement(i.h, {
					type: _.belongsTo.type,
					id: _.belongsTo.id
				}), o.a.createElement(d.d, {
					className: v.a.postTopMeta,
					flairStyleTemplate: t,
					post: _,
					tooltipType: k
				}), o.a.createElement(c.a, {
					displayText: y ? y.displayText : null,
					inSubredditOrProfile: !!n,
					post: _,
					tooltipType: k
				}), !w && o.a.createElement(r.a, {
					hideCta: s,
					thing: _,
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
				return E
			})), s.d(t, "e", (function() {
				return _
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
			const b = n.a.wrapped(a.a, "Icon", u.a),
				h = n.a.wrapped(i.a, "Icon", u.a),
				x = n.a.wrapped(c.a, "Icon", u.a),
				f = n.a.wrapped(d.a, "Icon", u.a),
				g = n.a.wrapped(l.a, "Icon", u.a),
				v = n.a.wrapped(m.a, "Icon", u.a),
				O = n.a.wrapped(o.b, "CheckboxMenuItem", u.a),
				E = n.a.wrapped(r.b, "DropdownRow", u.a),
				_ = n.a.div("ListContainer", u.a)
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
				return ve
			})), s.d(t, "b", (function() {
				return Oe
			})), s.d(t, "c", (function() {
				return Ee
			})), s.d(t, "d", (function() {
				return _e
			})), s.d(t, "f", (function() {
				return Ce
			})), s.d(t, "e", (function() {
				return ye
			})), s.d(t, "h", (function() {
				return Fe
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
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
				E = s("./src/reddit/actions/postCreation/editing.ts"),
				_ = s("./src/reddit/actions/reportFlow.ts"),
				C = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				y = s("./src/reddit/constants/parameters.ts"),
				k = s("./src/reddit/constants/posts.ts"),
				w = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				j = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				I = s("./src/reddit/icons/fonts/Admin/index.tsx"),
				S = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				P = s("./src/reddit/icons/fonts/Embed/index.tsx"),
				T = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				N = s("./src/reddit/icons/fonts/Hide/index.tsx"),
				L = s("./src/reddit/icons/fonts/Link/index.tsx"),
				M = s("./src/reddit/icons/fonts/Live/index.tsx"),
				R = s("./src/reddit/icons/fonts/Pencil/index.tsx"),
				A = s("./src/reddit/icons/fonts/Report/index.tsx"),
				F = s("./src/reddit/icons/fonts/Save/index.tsx"),
				B = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				D = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				H = s("./src/reddit/icons/fonts/Unpin/index.tsx"),
				W = s("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				U = s("./src/reddit/icons/svgs/Saved/index.tsx"),
				V = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				G = s("./src/reddit/components/OverflowMenu/index.tsx"),
				z = s("./src/reddit/components/ReportFlow/index.tsx"),
				K = s("./src/reddit/contexts/PageLayer/index.tsx"),
				q = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				J = s("./src/reddit/controls/Dropdown/Row.tsx"),
				X = s("./src/reddit/components/Flatlist/constants.ts"),
				Z = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				Q = s("./src/reddit/constants/postLayout.ts"),
				Y = s("./src/reddit/helpers/correlationIdTracker.ts"),
				$ = s("./src/reddit/helpers/isCrosspost.ts"),
				ee = s("./src/reddit/helpers/postEvent.ts"),
				te = s("./src/reddit/helpers/trackers/post.ts"),
				se = s("./src/reddit/models/Post/index.ts"),
				ne = s("./src/reddit/models/Subreddit/index.ts"),
				oe = s("./src/reddit/selectors/activeModalId.ts"),
				re = s("./src/reddit/selectors/posts.ts"),
				ae = s("./src/reddit/selectors/subreddit.ts"),
				ie = s("./src/reddit/selectors/user.ts"),
				ce = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				de = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				le = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				me = s("./src/reddit/components/ReportFlow/new.tsx"),
				pe = s("./src/reddit/actions/postCollection/index.ts"),
				ue = s("./src/reddit/helpers/trackers/postCollection.ts"),
				be = s("./src/reddit/models/PostCreationForm/index.ts"),
				he = s("./src/reddit/selectors/postCollection.ts"),
				xe = s("./src/reddit/components/PostOverflowMenu/index.m.less"),
				fe = s.n(xe),
				ge = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const ve = h.a.wrapped(T.a, "Icon", fe.a),
				Oe = h.a.wrapped(N.a, "Icon", fe.a),
				Ee = h.a.wrapped(R.a, "Icon", fe.a),
				_e = h.a.wrapped(A.a, "Icon", fe.a),
				Ce = h.a.wrapped(U.a, "Icon", fe.a),
				ye = h.a.wrapped(F.a, "Icon", fe.a),
				ke = h.a.wrapped(I.a, "Icon", fe.a),
				we = h.a.wrapped(W.a, "AddCollectionIcon", fe.a),
				je = h.a.wrapped(P.a, "Icon", fe.a),
				Ie = h.a.wrapped(B.a, "Icon", fe.a),
				Se = h.a.wrapped(D.a, "Icon", fe.a),
				Pe = h.a.wrapped(V.b, "Icon", fe.a),
				Te = h.a.wrapped(H.a, "Icon", fe.a),
				Ne = h.a.wrapped(M.a, "LiveIcon", fe.a),
				Le = h.a.wrapped(S.a, "CalendarIcon", fe.a),
				Me = h.a.wrapped(L.a, "LinkIcon", fe.a),
				Re = h.a.wrapped(J.b, "DropdownRow", fe.a),
				Ae = h.a.wrapped(q.a, "PostCheckboxMenuItem", fe.a),
				Fe = e => {
					let {
						gild: t = !0,
						save: s = !0,
						share: n = !0,
						report: o = !0,
						editPost: r = !0,
						hide: a = !0
					} = e;
					return {
						[X.a.Gild]: t,
						[X.a.Save]: s,
						[X.a.Share]: n,
						[X.a.Report]: o,
						[X.a.EditPost]: r,
						[X.a.Hide]: a
					}
				},
				Be = Object(i.b)(() => Object(d.c)({
					currentUser: ie.i,
					isConfirmDeleteOpen: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(oe.a)(e) === "".concat("POST_OVERFLOW_DELETE_CONFIRMATION", "_").concat(s)
					},
					isFutureEvent: he.j,
					isSaved: re.x,
					isHidden: re.p,
					isSponsored: re.z,
					isNSFW: re.s,
					isOC: re.t,
					isPinned: re.u,
					isSpoiler: re.y,
					post: re.O,
					postSubredditAboutInfo: re.P,
					reportFlowIsOpen: (e, t) => {
						let {
							isOverlay: s,
							postId: n
						} = t;
						return e.reportFlow.openedFromModalPage === s && e.reportFlow.postOrCommentId === n
					},
					sendRepliesToggled: re.Y,
					showPinAction: (e, t) => {
						var {
							isProfilePostListing: s
						} = t, n = ge(t, ["isProfilePostListing"]);
						return Object(K.B)(e, n) && s && Object(ie.kb)(e, n) && Object(ie.ib)(e, {
							userName: Object(re.O)(e, {
								postId: n.postId
							}).author
						})
					},
					subredditOrProfile: re.bb,
					hasSubredditRules: ae.k,
					userIsOp: ie.kb,
					isPostPartOfACollection: he.l,
					shouldRenderCollectionEditButtons: (e, t) => {
						let {
							postId: s
						} = t;
						if (Object(re.O)(e, {
								postId: s
							}).isSponsored) return !1;
						const n = Object(re.bb)(e, {
							postId: s
						});
						if (!n) return !1;
						const o = n.type === ne.e.User;
						return Object(he.s)(e, n.name, o)
					},
					reportingRevampEnabled: ce.a
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
						onReportClick: () => e(Object(_.j)(n, o)),
						onStartEventNow: () => {
							e((e, t) => Object(l.a)(Object(j.p)()(t()))), e(Object(x.startEventNowRequested)(n))
						},
						onEdit: () => {
							const t = !o && !r;
							e(Object(E.a)(n, t))
						},
						onFlairPost: () => e(Object(g.i)(Object(le.b)(n, o))),
						onToggleSendReplies: () => e(Object(O.M)(n)),
						showCollectionsList: (t, s) => {
							e(Object(pe.e)(t)).then(() => {
								const t = Object(be.s)(s, o);
								e(g.i(t))
							})
						},
						toggleConfirmDelete: () => e(Object(g.i)("".concat("POST_OVERFLOW_DELETE_CONFIRMATION", "_").concat(n)))
					}
				});
			class De extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.handlePostEvent = (e, t) => {
						const {
							isOverlay: s,
							post: n,
							sendEvent: o
						} = this.props;
						o(Object(te.f)(n.id, e, s ? "post_detail" : "post", void 0, void 0, void 0, null == t ? void 0 : t.referralId))
					}, this.handleClickMenuButton = () => {
						this.handlePostEvent("post_overflow_menu")
					}, this.handleDeletePost = e => {
						e && (this.props.onDelete(e), this.handlePostEvent("delete"))
					}, this.handleEdit = () => {
						this.handlePostEvent("edit"), this.props.onEdit()
					}, this.handleGild = async () => {
						const e = Object(Y.d)(Y.a.GildingFlow, !0);
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
						this.handlePostEvent(this.props.isPinned ? "unpin" : "pin"), this.props.isPinned ? this.props.sendEvent(Object(te.g)(this.props.post.id)) : this.props.sendEvent(Object(te.c)(this.props.post.id)), this.props.onTogglePinned()
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
						e || (n(Object(ue.b)(s.id)), t(s.belongsTo.id, s.id))
					}, this.renderReportFlow = () => this.props.reportingRevampEnabled ? a.a.createElement(me.a, {
						withOverlay: !0,
						overlayCustomStyles: z.b,
						postId: this.props.postId,
						timestamp: this.context.currentTime
					}) : a.a.createElement(z.a, {
						withOverlay: !0,
						overlayCustomStyles: z.b,
						postId: this.props.postId,
						timestamp: this.context.currentTime
					})
				}
				getOverflowMenuBreakpointClass() {
					const {
						props: e
					} = this, t = e.layout === Q.g.Classic;
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
						onStartEventNow: i,
						post: c,
						shouldRenderCollectionEditButtons: d,
						showEditFlair: l,
						showPinAction: m,
						toggleAddEventStartTimeModal: b,
						toggleEditStartTimeModal: h,
						userIsOp: x
					} = e, f = e.currentUser && e.currentUser.isEmployee, g = Object($.a)(e.post), v = e.post.belongsTo.type === k.a.PROFILE || Object(ne.f)(e.postSubredditAboutInfo), O = t && c.isGildable, E = Object(ee.a)(e.post);
					return a.a.createElement("div", null, O && a.a.createElement(Re, {
						className: this.getBreakpointClass(X.a.Gild),
						displayText: n.fbt._("Give Award", null, {
							hk: "3mYeGJ"
						}),
						onClick: this.handleGild
					}, a.a.createElement(ve, null)), a.a.createElement(Re, {
						className: this.getBreakpointClass(X.a.Share),
						displayText: n.fbt._("Copy link", null, {
							hk: "ETZxA"
						}),
						onClick: () => {
							const {
								permalink: t,
								post: s
							} = e;
							if (s && Object(se.i)(s)) {
								const t = Object(w.a)(s.id),
									n = p()(),
									o = Object(u.a)(t, {
										[y.q]: n,
										utm_source: "share",
										utm_medium: "web2x",
										utm_content: "rpan_stream"
									});
								this.handlePostEvent("share_copy", {
									referralId: n
								}), e.onCopyLink(o)
							} else this.handlePostEvent("share_copy"), e.onCopyLink(t)
						}
					}, a.a.createElement(Me, null)), a.a.createElement(Re, {
						className: this.getBreakpointClass(X.a.Share),
						displayText: n.fbt._("Embed", null, {
							hk: "3u0v6r"
						}),
						onClick: () => {
							this.handlePostEvent("share_embed"), window.open("https://embed.redditmedia.com/widgets/embed?url=".concat(e.post.permalink), "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, a.a.createElement(je, null)), e.showEditPost && a.a.createElement(Re, {
						className: this.getBreakpointClass(X.a.EditPost),
						displayText: n.fbt._("Edit post", null, {
							hk: "3gVzz0"
						}),
						onClick: this.handleEdit,
						isSelected: e.isHidden
					}, a.a.createElement(Ee, null)), l && a.a.createElement(Re, {
						displayText: n.fbt._("Edit flair", null, {
							hk: "qt3W7"
						}),
						onClick: e.onFlairPost,
						isSelected: e.isHidden
					}, a.a.createElement(Se, null)), a.a.createElement(Re, {
						className: this.getBreakpointClass(X.a.Save),
						displayText: e.isSaved ? n.fbt._("unsave", null, {
							hk: "HDDPm"
						}) : n.fbt._("save", null, {
							hk: "3bg2gs"
						}),
						onClick: this.toggleSave,
						isSelected: e.isSaved
					}, e.isSaved ? a.a.createElement(Ce, null) : a.a.createElement(ye, null)), m && a.a.createElement(Re, {
						displayText: r ? n.fbt._("Unpin Post from Profile", null, {
							hk: "6DYfk"
						}) : n.fbt._("Pin Post to Profile", null, {
							hk: "2RWbNF"
						}),
						onClick: this.togglePinned
					}, this.props.isPinned ? a.a.createElement(Te, null) : a.a.createElement(Ie, null)), !e.isSponsored && a.a.createElement(Re, {
						className: this.getBreakpointClass(X.a.Hide),
						displayText: e.isHidden ? n.fbt._("unhide", null, {
							hk: "1P4IxC"
						}) : n.fbt._("hide", null, {
							hk: "48yKzW"
						}),
						onClick: this.toggleHide,
						isSelected: e.isHidden
					}, a.a.createElement(Oe, null)), !e.isSponsored && !x && a.a.createElement(Re, {
						className: this.getBreakpointClass(X.a.Report),
						displayText: n.fbt._("report", null, {
							hk: "128RPn"
						}),
						onClick: this.handleReport
					}, a.a.createElement(_e, null)), d && s && i && a.a.createElement(Re, {
						onClick: i,
						displayText: n.fbt._("Start event now", null, {
							hk: "3VomTN"
						})
					}, a.a.createElement(Ne, null)), d && s && h && a.a.createElement(Re, {
						onClick: h,
						displayText: n.fbt._("Edit start time", null, {
							hk: "2typ17"
						})
					}, a.a.createElement(Le, null)), d && !E && b && a.a.createElement(Re, {
						displayText: n.fbt._("Add event start time", null, {
							hk: "1XXqzu"
						}),
						onClick: b
					}, a.a.createElement(Le, null)), d && a.a.createElement(Re, {
						className: this.props.isPostPartOfACollection ? fe.a.disabledRow : void 0,
						displayText: n.fbt._("Add to collection", null, {
							hk: "3UNHgN"
						}),
						onClick: this.handleAddToCollection,
						noHover: this.props.isPostPartOfACollection
					}, a.a.createElement(we, null)), x && a.a.createElement(Re, {
						displayText: n.fbt._("delete", null, {
							hk: "4kSfzC"
						}),
						onClick: this.props.toggleConfirmDelete
					}, a.a.createElement(Pe, null)), f && e.userIsOp && a.a.createElement(Re, {
						displayText: e.post.distinguishType === o.C.ADMIN ? n.fbt._("undistinguish", null, {
							hk: "2chGON"
						}) : n.fbt._("Distinguish as admin", null, {
							hk: "2xltiM"
						}),
						onClick: () => e.post.distinguishType === o.C.ADMIN ? e.onDistinguishPost(o.C.NONE) : e.onDistinguishPost(o.C.ADMIN)
					}, a.a.createElement(ke, null)), x && v && !g && a.a.createElement(Ae, {
						text: n.fbt._("Mark as OC", null, {
							hk: "2vGyoC"
						}),
						onClick: this.toggleOC,
						isSelected: this.props.isOC
					}), x && a.a.createElement(Ae, {
						text: n.fbt._("Mark as Spoiler", null, {
							hk: "3PJk7A"
						}),
						onClick: this.toggleSpoiler,
						isSelected: this.props.isSpoiler
					}), x && a.a.createElement(Ae, {
						text: n.fbt._("Mark as NSFW", null, {
							hk: "4qK6JN"
						}),
						onClick: this.toggleNSFW,
						isSelected: this.props.isNSFW
					}), e.userIsOp && a.a.createElement(Ae, {
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
					return a.a.createElement("div", null, a.a.createElement(G.b, {
						className: Object(b.a)(fe.a.overflowMenu, this.getOverflowMenuBreakpointClass(), e.className),
						dropdownId: e.dropdownId,
						isFixed: e.isFixed,
						layout: e.layout,
						onClick: this.handleClickMenuButton
					}, this.renderDropdownIcons()), e.reportFlowIsOpen && e.subredditOrProfile && e.hasSubredditRules && this.renderReportFlow(), this.props.isConfirmDeleteOpen && a.a.createElement(He, {
						toggleConfirmDelete: this.props.toggleConfirmDelete,
						handleDeletePost: this.handleDeletePost
					}))
				}
			}
			const He = Object(c.i)(e => a.a.createElement(de.a, {
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
			De.contextType = C.a, t.g = Be(De)
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
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: h,
					redditStyle: x,
					subreddit: f,
					isOverlay: g,
					isActionBarAnimationEnabled: v,
					postId: O,
					isForceSelected: E
				} = e, _ = "upvote-button-".concat(t.id).concat(g ? "-overlay" : ""), {
					moderationPrompt: C
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
					upvoteTooltipId: _,
					isActionBarAnimationEnabled: v,
					postId: O,
					isForceSelected: E
				}), C && o.a.createElement(i.b, {
					rightOf: _
				}, "survey" === C ? o.a.createElement(a.a, {
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
		"./src/reddit/components/ProfileCommentList/ListItem.m.less": function(e, t, s) {
			e.exports = {
				ClassicPost: "_3HddQjb-wsXsww_pAIh20y",
				classicPost: "_3HddQjb-wsXsww_pAIh20y",
				OverviewCommentPost: "_1e72wv5XA_Ww9f_Jld1feN",
				overviewCommentPost: "_1e72wv5XA_Ww9f_Jld1feN",
				backgroundMargin: "_2QIF_lwHCJCj3Dltr80ZqZ",
				isFirstInCommentList: "_2qBXIj3HBiFJkTkjCTD627",
				isLastInCommentList: "pd606OJnAc8wAE-N-Zm84"
			}
		},
		"./src/reddit/components/ProfileItemList/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/lodash/last.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/lib/constants/index.ts"),
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
				E = s.n(O);

			function _() {
				return (_ = Object.assign || function(e) {
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
			const y = 500,
				k = new f.a(y),
				w = new f.a(y),
				j = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				I = (e, t, s, n, o, r) => {
					const a = s ? "last-".concat(n, "-").concat(o) : "",
						i = "entered-".concat(e, "-").concat(t, "-").concat(a);
					let c = k.get(i);
					return void 0 === c && (c = () => {
						s && r.onBottomViewed(n, o), r.trackOnPostEnteredViewport(e, t)
					}, k.set(i, c)), c
				},
				S = (e, t) => {
					const s = "click-".concat(e);
					let n = w.get(s);
					return void 0 === n && (n = (e, s) => {
						s.isSponsored && t.fireAdPixelsOfType(s, d.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(c.d)(s.source.outboundUrl, c.c.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(h.a)(e)
						})
					}, w.set(s, n)), n
				};
			class P extends a.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new f.a(y), this.updateScrollerRef = e => {
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
						setTimeout(() => Object(g.b)(i.l.Redesign, {
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
						setTimeout(() => Object(g.b)(i.l.Redesign, {
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
						n = C(t, ["itemIds"]),
						{
							itemIds: o
						} = e,
						r = C(e, ["itemIds"]),
						a = Object.keys(n),
						i = Object.keys(r);
					return i.length !== a.length || !!i.some(e => n[e] !== r[e])
				}
				scrollChildForItem(e, t, s, n, o, r) {
					const {
						listingKey: i,
						listingName: c,
						postClickEventFactory: d
					} = this.props, l = s ? "last-index" : "", m = "post-".concat(r, "-").concat(e, "-").concat(t, "-").concat(l, "-").concat(c, "-").concat(i);
					let p;
					if (void 0 === (p = this.scrollChildCache.get(m))) {
						const {
							inSubredditOrProfile: t,
							itemIdToPostId: l
						} = this.props, u = l[e], b = "overview-chrono-list-item-[layout: ".concat(r, "]-[itemId: ").concat(e, "]"), h = I(u, r, s, i, c, this.props), x = {
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
							render: e => a.a.createElement(f, _({}, x, e))
						}, this.scrollChildCache.set(m, p)
					}
					return p
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return a.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						layout: s,
						onTryAgain: n
					} = this.props;
					return a.a.createElement("div", {
						className: E.a.placeholder
					}, a.a.createElement(m.a, {
						className: t,
						isLoading: !e,
						layout: s
					}), !!e && a.a.createElement(p.a, {
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
					return a.a.createElement("div", {
						className: E.a.placeholder
					}, a.a.createElement(l.a, {
						isLoading: !!t,
						layout: s,
						countOverride: j[s]
					}), !!e && a.a.createElement(p.a, {
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
						const a = o === n.length - 1,
							i = o && n[o - 1],
							c = !a && n[o + 1],
							d = !!Object(x.a)(s) && (!i || !Object(x.a)(i) || e[i].postId !== e[s].postId),
							l = !!Object(x.a)(s) && (!c || !Object(x.a)(c) || e[c].postId !== e[s].postId);
						return this.scrollChildForItem(s, o, a, d, l, t)
					});
					return a.a.createElement("div", null, a.a.createElement(u.b, {
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
			t.a = P
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
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
				E = s("./src/reddit/featureFlags/index.ts"),
				_ = s("./src/reddit/selectors/tooltip.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/selectors/userPrefs.ts"),
				k = s("./src/reddit/components/ProfileNavMenu/index.m.less"),
				w = s.n(k);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const I = Object(x.t)({
					routeName: x.U,
					privateListingType: x.i
				}),
				S = Object(c.c)({
					isDropdownMenuOpen: e => Object(_.a)(e) === T,
					isOwnProfile: (e, t) => Object(C.M)(e, t.profileName),
					isSnoovatar30Enabled: E.d.snoovatar30,
					isSubscriptionsPinned: y.b
				}),
				P = Object(l.a)(f.a),
				T = "profile-nav-menu-tooltip";
			t.a = I(Object(a.b)(S, e => ({
				toggleTooltip: t => e(Object(u.h)({
					tooltipId: t
				}))
			}))(e => {
				let {
					isDropdownMenuOpen: t,
					isOwnProfile: s,
					privateListingType: n,
					profileName: o,
					routeName: a,
					toggleTooltip: i,
					isSnoovatar30Enabled: c,
					isSubscriptionsPinned: d
				} = e;
				return r.a.createElement("div", {
					className: w.a.container
				}, r.a.createElement(b.a, {
					bladeOpen: !1,
					offsetLeft: d ? h.u : 0,
					render: () => r.a.createElement(r.a.Fragment, null, M({
						profileName: o,
						isOwnProfile: s,
						routeName: a,
						privateListingType: n,
						isSnoovatar30Enabled: c
					}).map(e => r.a.createElement(N, j({}, e, {
						key: e.key
					}))), r.a.createElement("button", {
						className: Object(m.a)(w.a.mainLink, w.a.overflowMenuButton),
						id: T,
						onClick: () => i(T)
					}, r.a.createElement(v.a, null)), r.a.createElement(P, {
						className: w.a.dropdown,
						isOpen: t,
						tooltipId: T
					}, R({
						profileName: o,
						isOwnProfile: s,
						routeName: a,
						privateListingType: n
					}).map(e => r.a.createElement(L, j({}, e, {
						key: e.key
					})))))
				}))
			}));
			const N = e => {
					let {
						hideOnNarrow: t,
						isActive: s,
						text: n,
						url: o,
						internal: a
					} = e;
					return a ? r.a.createElement(g.a, {
						className: Object(m.a)(w.a.mainLink, {
							[w.a.hideOnNarrow]: !!t,
							[w.a.isActive]: s
						}),
						to: o
					}, n) : r.a.createElement("a", {
						className: Object(m.a)(w.a.mainLink, {
							[w.a.hideOnNarrow]: !!t,
							[w.a.isActive]: s
						}),
						href: o
					}, n)
				},
				L = e => {
					let {
						isActive: t,
						internal: s,
						key: n,
						url: o,
						showOnNarrow: a,
						text: c
					} = e;
					return s ? r.a.createElement(i.a, {
						className: Object(m.a)(w.a.dropdownLink, {
							[w.a.isActive]: t,
							[w.a.showOnNarrow]: !!a
						}),
						to: o,
						key: n,
						rel: "nofollow noopener noreferrer",
						role: "listitem"
					}, c) : r.a.createElement("a", {
						className: Object(m.a)(w.a.dropdownLink, {
							[w.a.showOnNarrow]: !!a
						}),
						href: o,
						key: n,
						rel: "nofollow noopener noreferrer",
						role: "listitem",
						target: "_blank"
					}, c)
				},
				M = e => {
					let {
						profileName: t,
						isOwnProfile: s,
						routeName: o,
						privateListingType: r,
						isSnoovatar30Enabled: a
					} = e;
					const i = s ? [{
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
					s ? (i.push({
						hideOnNarrow: !0,
						internal: !0,
						isActive: o === p.Bb.PROFILE_PRIVATE && r === O.a.ReceivedGildings,
						key: "profile.mainmenu.receiverGildings",
						text: n.fbt._("Awards received", null, {
							hk: "iwLBV"
						}),
						url: "/user/".concat(t, "/gilded/")
					}), i.push({
						hideOnNarrow: !0,
						internal: !0,
						isActive: o === p.Bb.PROFILE_PRIVATE && r === O.a.GivenGildings,
						key: "profile.mainmenu.givenGildings",
						text: n.fbt._("Awards given", null, {
							hk: "2UPYZc"
						}),
						url: "/user/".concat(t, "/gilded/given/")
					})) : i.push({
						hideOnNarrow: !0,
						internal: !1,
						isActive: !1,
						key: "profile.mainmenu.gildedLegacy",
						text: n.fbt._("Awards received (legacy)", null, {
							hk: "1YgfYU"
						}),
						url: "".concat(d.a.oldRedditUrl, "/user/").concat(t, "/gilded/")
					});
					const c = a ? [{
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
					}, ...c, ...i]
				},
				R = e => {
					let {
						profileName: t,
						isOwnProfile: s,
						routeName: o,
						privateListingType: r
					} = e;
					const a = s ? [{
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
					return s ? (a.push({
						showOnNarrow: !0,
						internal: !0,
						isActive: o === p.Bb.PROFILE_PRIVATE && r === O.a.ReceivedGildings,
						key: "profile.dropdownmenu.receiverGildings",
						text: n.fbt._("Awards received", null, {
							hk: "31obau"
						}),
						url: "/user/".concat(t, "/gilded/")
					}), a.push({
						showOnNarrow: !0,
						internal: !0,
						isActive: o === p.Bb.PROFILE_PRIVATE && r === O.a.GivenGildings,
						key: "profile.dropdownmenu.givenGildings",
						text: n.fbt._("Awards given", null, {
							hk: "2UPYZc"
						}),
						url: "/user/".concat(t, "/gilded/given/")
					}), a) : [...a, {
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
		"./src/reddit/components/ProfileSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
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
				v = Object(i.c)({
					inGoldPowerupsExperiment: f.a
				}),
				O = Object(a.b)(v),
				E = e => r.a.createElement(c.a, {
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
			E.defaultProps = {
				isOverlay: !1
			}, t.a = O(E)
		},
		"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			const r = Object(n.createContext)({
					currentTime: 0,
					setCurrentTime: () => {}
				}),
				a = e => {
					let {
						children: t
					} = e;
					const [s, a] = Object(n.useState)(0), i = {
						currentTime: s,
						setCurrentTime: a
					};
					return o.a.createElement(r.Provider, {
						value: i
					}, t)
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
			t.a = u(Object(i.a)(b))
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
				l = s("./node_modules/uuid/v4.js"),
				m = s.n(l),
				p = s("./src/lib/addQueryParams/index.ts"),
				u = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/actions/tooltip.ts"),
				h = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				x = s("./src/reddit/constants/parameters.ts"),
				f = s("./src/reddit/controls/Dropdown/index.tsx"),
				g = s("./src/reddit/controls/Dropdown/Row.tsx"),
				v = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				O = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				E = s("./src/reddit/icons/fonts/Embed/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Link/index.tsx"),
				C = s("./src/reddit/models/Post/index.ts"),
				y = s("./src/reddit/models/Subreddit/index.ts"),
				k = s("./src/reddit/routes/postCreation/constants.ts"),
				w = s("./src/reddit/selectors/tooltip.ts"),
				j = s("./src/reddit/components/ShareMenu/index.m.less"),
				I = s.n(j),
				S = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const P = Object(h.a)(f.a),
				T = Object(d.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(w.b)(s)(e)
					}
				}),
				N = Object(a.b)(T, (e, t) => {
					var {
						dropdownId: s,
						permalink: n
					} = t, o = S(t, ["dropdownId", "permalink"]);
					return {
						onCrosspost: () => {
							o.post && e(Object(c.b)("".concat(k.b, "?source_id=").concat(o.post.id)))
						},
						toggleDropdown: () => {
							e(Object(b.h)({
								tooltipId: s
							}))
						},
						copyLink: t => e(Object(u.v)(t))
					}
				});
			t.a = N(Object(i.i)(e => {
				const t = !e.subreddit || e.subreddit && e.subreddit.type === y.e.Public,
					s = !!e.post && e.post.isCrosspostable && !e.post.isSponsored;
				return r.a.createElement("div", {
					className: e.className,
					onClick: e.toggleDropdown,
					id: e.dropdownId
				}, e.children, r.a.createElement(P, {
					className: I.a.dropdown,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId
				}, r.a.createElement(g.b, {
					className: I.a.dropdownRow,
					displayText: n.fbt._("Copy link", null, {
						hk: "1tCqox"
					}),
					onClick: () => {
						const {
							permalink: t,
							post: s
						} = e;
						if (s && Object(C.i)(s)) {
							const t = Object(v.a)(s.id),
								n = m()(),
								o = Object(p.a)(t, {
									[x.q]: n,
									utm_source: "share",
									utm_medium: "web2x",
									utm_content: "rpan_stream",
									context: 3
								});
							e.sendEventWithName("share_copy", {
								referralId: n
							}), e.copyLink(o)
						} else {
							const s = Object(p.a)(t, {
								utm_source: "share",
								utm_medium: "web2x",
								context: 3
							});
							e.sendEventWithName("share_copy"), e.copyLink(s)
						}
					}
				}, r.a.createElement(_.a, {
					className: I.a.linkIcon
				})), s && r.a.createElement(g.b, {
					className: I.a.dropdownRow,
					displayText: n.fbt._("crosspost", null, {
						hk: "23zSN6"
					}),
					onClick: () => {
						e.sendEventWithName("share_crosspost"), e.onCrosspost()
					}
				}, r.a.createElement(O.a, {
					className: I.a.crosspostIcon
				})), t && r.a.createElement(g.b, {
					className: I.a.dropdownRow,
					displayText: n.fbt._("Embed", null, {
						hk: "2CcsuC"
					}),
					onClick: () => {
						e.sendEventWithName("share_embed"), window.open("https://embed.redditmedia.com/widgets/embed?url=".concat(e.permalink), "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
					}
				}, r.a.createElement(E.a, {
					className: I.a.embedIcon
				}))))
			}))
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
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
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
			class v extends i.a.Component {
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
						return i.a.createElement(g, {
							onClick: this.onButtonClick
						}, o ? i.a.createElement(m.a, {
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
						renderItem: a,
						title: c
					} = this.props, {
						expanded: l
					} = this.state, m = n.length > o || t, b = (!m || l ? n : r()(n, o)).map(e => a({
						item: e
					}));
					return i.a.createElement(d.a, {
						className: e,
						headerButton: s,
						title: c
					}, b, i.a.createElement(p.a, null, i.a.createElement(u.a, null, m && this.renderToggleButton())))
				}
			}
			v.defaultProps = {
				minimizedLength: c.Gb
			}, t.a = v
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/profile/index.ts"),
				d = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				m = s("./src/reddit/models/User/index.ts"),
				p = s("./src/reddit/selectors/profile.ts"),
				u = s("./src/reddit/selectors/subscriptions.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				x = s.n(h);
			const f = Object(i.c)({
					currentUser: b.i,
					moderated: p.n,
					subscriptions: u.f,
					hasMoreModerated: p.d,
					loadMorePending: p.a
				}),
				g = Object(a.b)(f, (e, t) => ({
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
					subscriptions: a,
					hasMoreModerated: i,
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
					}(s, new Set(a));
				return r.a.createElement(d.a, {
					className: x.a.container,
					title: p,
					items: u,
					renderItem: v,
					hasMoreItems: i,
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
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
				x = Object(a.b)(h, (e, t) => ({
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
					}, r.a.createElement(i.a, {
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
					onLoadMore: a,
					profileName: i
				} = e;
				return o && o.length ? r.a.createElement(m.a, null, r.a.createElement(l.a, {
					hasMoreItems: t,
					items: o,
					onLoadMore: a,
					pending: s,
					renderItem: f,
					title: n.fbt._("Public custom feeds by u/{profileName}", [n.fbt._param("profileName", i)], {
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
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
				}, r.a.createElement(i.a, {
					to: s.path
				}, o)), r.a.createElement("div", {
					className: h.a.communityDescription
				}, r.a.createElement("div", {
					className: h.a.communityName
				}, r.a.createElement(i.a, {
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
			t.a = Object(a.b)(x)(e => {
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				d = s("./src/reddit/controls/OutboundLink/index.tsx"),
				l = s("./src/reddit/controls/Typography/index.tsx"),
				m = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				p = s("./node_modules/lodash/isEqual.js"),
				u = s.n(p);
			const b = Object(i.b)(i.d, u.a);
			var h = s("./src/reddit/selectors/profile.ts"),
				x = s("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				f = s.n(x),
				g = s("./src/lib/lessComponent.tsx");
			const v = Object(i.c)({
				trophyCase: (e, t) => {
					let {
						profileName: s
					} = t;
					return Object(h.r)(e, Object(h.m)(e, s))
				}
			}, b);
			t.a = Object(a.b)(v)(e => {
				let {
					trophyCase: t
				} = e;
				return 0 === t.length ? null : r.a.createElement(c.a, {
					title: n.fbt._("Trophy Case ({trophyCount})", [n.fbt._param("trophyCount", "".concat(t.length))], {
						hk: "mzh3V"
					}),
					items: t,
					renderItem: k
				})
			});
			const O = g.a.wrapped(m.a, "TrophyItem", f.a),
				E = g.a.div("TrophyIcon", f.a),
				_ = g.a.h5("TrophyName", f.a),
				C = g.a.div("TrophyContent", f.a),
				y = g.a.wrapped(l.c, "Description", f.a);

			function k(e) {
				let {
					item: t
				} = e;
				const s = r.a.createElement("img", {
					src: t.icon,
					title: t.name
				});
				return r.a.createElement(O, {
					key: t.id
				}, r.a.createElement(E, null, t.url ? r.a.createElement(d.b, {
					href: t.url,
					source: void 0,
					isSponsored: !1
				}, s) : s), r.a.createElement(C, null, r.a.createElement(_, null, t.name), r.a.createElement(y, null, t.description)))
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
				a = s("./src/lib/getShortenedLink.ts"),
				i = s("./src/reddit/controls/OutboundLink/styled.tsx"),
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
				}, o.a.createElement(i.a, {
					href: c.url,
					isSponsored: d,
					postId: s.id,
					source: c
				}, Object(a.a)(s), o.a.createElement(p, null))) : null
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
				a = s("./src/reddit/controls/Button/index.tsx"),
				i = s("./src/reddit/hooks/useButtons2020.ts"),
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
					return t ? r.a.createElement(a.i, u({}, n, {
						className: Object(m.a)(n.className, {
							[l.a.isSmall]: s
						})
					})) : r.a.createElement(a.o, u({}, n, {
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
					return Object(i.a)() ? r.a.createElement(a.q, u({}, n, {
						priority: t ? a.b.Primary : a.b.Plain,
						className: Object(m.a)(n.className, l.a.is2020),
						size: s ? a.c.S : a.c.M
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
					const i = f(n),
						c = Object(m.a)(o.className, {
							[l.a.isSmall]: s
						});
					return t ? r.a.createElement(a.l, u({}, o, {
						className: c
					}), i) : r.a.createElement(a.o, u({}, o, {
						className: c
					}), i)
				}, "UnsubscribeButton", l.a),
				v = e => {
					var {
						buttonType: t,
						border: s,
						small: n
					} = e, o = b(e, ["buttonType", "border", "small"]);
					return Object(i.a)() ? r.a.createElement(a.q, u({}, o, {
						priority: s ? a.b.Secondary : a.b.Plain,
						className: Object(m.a)(o.className, l.a.is2020),
						size: n ? a.c.S : a.c.M,
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
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/connectors/SubscribeButton/index.ts"),
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
					const a = Object(r.b)(),
						i = s ? d.l : d.i;
					return o.a.createElement(i, f({}, n, {
						className: Object(h.a)(n.className, {
							[b.a.isLarge]: !t
						}),
						"data-ignore-click": !!a
					}))
				}, "SubscribeInternalButton", b.a),
				O = x.a.wrapped(e => {
					var {
						small: t,
						belongsToType: s,
						shouldReverseColor: n
					} = e, a = g(e, ["small", "belongsToType", "shouldReverseColor"]);
					const i = Object(r.b)(),
						c = n ? d.i : d.l;
					return o.a.createElement(c, f({}, a, {
						className: Object(h.a)(a.className, {
							[b.a.isLarge]: !t
						}),
						"data-ignore-click": !!i
					}))
				}, "UnsubscribeButton", b.a),
				E = x.a.wrapped(l.a, "Checkmark", b.a),
				_ = x.a.wrapped(m.a, "Plus", b.a),
				C = x.a.div("ButtonSpacer", b.a);
			class y extends o.a.Component {
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
								onUnsubscribe: a,
								postId: i,
								sendEvent: c,
								small: l = !1,
								size: m,
								userIsSubscriber: u,
								doNotHideOtherSubscribeButtons: x,
								getEventFactory: v,
								onSubscriptionsRequested: _
							} = t,
							C = g(t, ["className", "identifier", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "size", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
							y = this.state.isHovered,
							k = Object(p.a)({
								type: n.type,
								key: y ? "unsubscribe" : "subscribed"
							});
						return e ? o.a.createElement(d.q, f({
							className: Object(h.a)(s, b.a.Button2020),
							priority: C.shouldReverseColor ? d.b.Primary : d.b.Secondary,
							Icon: l || !l && !y ? E : void 0,
							text: !l && k,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: m || (l ? d.c.XS : d.c.S)
						}, C)) : o.a.createElement(O, f({
							className: Object(h.a)(s, {
								[b.a.isLarge]: !l,
								[b.a.unsubscribeButtonHoverStyles]: !l
							}),
							onClick: this.onClick,
							small: l,
							belongsToType: n.type,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}, C), l && o.a.createElement(E, null), !l && !y && o.a.createElement(E, null), !l && k)
					}, this.renderSubscribeButton = e => {
						const t = this.props,
							{
								className: s,
								identifier: n,
								onSubscribe: r,
								onUnsubscribe: a,
								postId: i,
								sendEvent: c,
								small: l = !1,
								size: m,
								userIsSubscriber: u,
								doNotHideOtherSubscribeButtons: x,
								getEventFactory: O,
								onSubscriptionsRequested: E
							} = t,
							C = g(t, ["className", "identifier", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "size", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
							y = Object(p.a)({
								type: n.type,
								key: "subscribe"
							});
						return e ? o.a.createElement(d.q, f({
							className: s,
							priority: C.shouldReverseColor ? d.b.Secondary : d.b.Primary,
							Icon: _,
							size: m || (l ? d.c.XS : d.c.S),
							text: !l && y,
							onClick: this.onClick
						}, C, {
							id: "subscribe-button-".concat(i),
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						})) : o.a.createElement(v, f({
							className: Object(h.a)(s, {
								[b.a.isLarge]: !l
							}),
							onClick: this.onClick,
							small: l
						}, C, {
							id: "subscribe-button-".concat(i),
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}), o.a.createElement(_, null), !l && y)
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
					return t ? this.state.hasJustSubscribed || s ? o.a.createElement(c.a.Consumer, null, this.renderUnsubscribeButton) : e ? null : o.a.createElement(C, null) : o.a.createElement(c.a.Consumer, null, this.renderSubscribeButton)
				}
			}
			t.a = Object(i.a)(Object(a.c)(y))
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
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return w
			})), s.d(t, "a", (function() {
				return I
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/Flair/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/index.tsx"),
				p = s("./src/reddit/actions/subscription/index.ts");
			var u = Object(a.b)(null, (e, t) => {
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
				E = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				C = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				y = s.n(C);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const w = e => r.a.createElement(b.a, {
					className: Object(d.a)(y.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, r.a.createElement("div", {
					className: y.a.container
				}, e.isLoading ? r.a.createElement(f.a, {
					className: y.a.loadingIcon,
					sizePx: 32
				}) : r.a.createElement(r.a.Fragment, null, e.isError ? r.a.createElement("p", {
					className: y.a.errorMsg
				}, e.errorMsg || n.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : r.a.createElement(r.a.Fragment, null, e.communities.map(t => r.a.createElement(I, k({
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
					className: y.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				j = Object(c.c)({
					hideNSFWPref: E.A
				}),
				I = Object(a.b)(j)(e => r.a.createElement("div", {
					className: y.a.communityItemContainer
				}, r.a.createElement(v.a, {
					widthRight: h.t
				}, r.a.createElement("div", {
					className: y.a.iconContainer
				}, e.communityIcon || e.iconUrl ? r.a.createElement("img", {
					className: y.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : r.a.createElement(g.a, {
					className: y.a.planetIcon,
					"data-redditstyle": !0
				})), r.a.createElement("div", {
					className: y.a.communityDescriptionContainer
				}, r.a.createElement(i.a, {
					className: y.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(_.b)(e.name, e.type),
					to: Object(_.a)(e.name, e.type)
				}, Object(_.b)(e.name, e.type)), r.a.createElement("div", {
					className: y.a.communityInfoContainer
				}, !!e.subscribers && r.a.createElement("p", {
					className: y.a.subscriberCount
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
					className: Object(d.a)(y.a.communityCta, y.a.smallLoadingIcon),
					sizePx: 12
				}) : r.a.createElement(x.o, {
					className: Object(d.a)(y.a.communityCta, {
						[y.a.showOnHover]: e.showTertiaryButtonOnHover
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
					className: y.a.communityDescription
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
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/SidebarSpacer/index.tsx"),
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
				E = s.n(O);
			var _ = e => {
					const {
						account: t,
						clickEvent: s,
						provider: n
					} = e;
					let r, a = t.username,
						i = "";
					return n !== p.a.Twitter ? null : (r = o.a.createElement(g.a, {
						className: E.a.twitterLogo
					}), i = h.fbt._("View on Twitter", null, {
						hk: "39S5oy"
					}), a = "@".concat(t.username), o.a.createElement(v.a, null, o.a.createElement("span", {
						className: E.a.icon
					}, r), o.a.createElement(x.b, {
						className: E.a.link,
						href: t.link,
						isSponsored: !1,
						source: void 0,
						onClick: s
					}, o.a.createElement("div", {
						className: E.a.linkTitle
					}, o.a.createElement("span", {
						className: E.a.name
					}, a), o.a.createElement(f.a, {
						className: E.a.linkIcon
					})), o.a.createElement("div", {
						className: E.a.linkDescription
					}, i))))
				},
				C = s("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				y = s.n(C);
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), w = Object(a.c)({
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
			}), j = Object(r.b)(w, e => ({
				trackTwitterAccountClicked: t => e((e, s) => m.k(s(), t))
			}), (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, s), e), t), {
				onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
			}));
			t.a = Object(c.c)(j(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: s
				} = e;
				return s ? o.a.createElement(i.a, null, o.a.createElement(d.b, null, o.a.createElement(d.a, null, k._("Connected accounts", null, {
					hk: "1ce9Jz"
				})), s && o.a.createElement("div", {
					className: y.a.account
				}, o.a.createElement(_, {
					provider: p.a.Twitter,
					account: s,
					clickEvent: t
				})))) : null
			}))
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
				a = s("./src/reddit/actions/tooltip.ts"),
				i = s("./src/reddit/models/Vote/index.ts"),
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
							const s = t === i.a.upvoted ? Object(r.S)(o) : Object(r.q)(o);
							e(s)
						},
						onIgnoreReports: () => e(Object(r.Q)(o)),
						onOpenReportsDropdown: t => e(Object(a.h)({
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
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/LRUCache/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/connectors/ClassicPost/index.tsx");
			const l = Object(c.t)({
					searchQuery: c.V
				}),
				m = new i.a(250),
				p = e => {
					const t = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const s = "".concat(e.id, "-").concat(t);
						let n = m.get(s);
						if (void 0 === n) {
							const r = new RegExp("(\\b".concat(t, "\\b)"), "gi"),
								a = e.title.split(r);
							for (let e = 1; e < a.length; e += 2) a[e] = o.a.createElement("em", {
								style: {
									fontWeight: 700
								}
							}, a[e]);
							n = o.a.createElement("span", {
								style: {
									fontWeight: "normal"
								}
							}, o.a.Children.toArray(a)), m.set(s, n)
						}
						return n
					}
				},
				u = Object(r.b)(() => Object(a.c)(d.c), d.b, (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), s), {
					formatTitle: p(s.searchQuery || "")
				}));
			t.a = e => l(u(e))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/subscription/index.ts"),
				a = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(n.b)(() => Object(o.c)({
				userIsSubscriber: a.gb
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
		"./src/reddit/constants/listingSorts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
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
				a = e => {
					const t = r[e];
					return t && t() || ""
				},
				i = {
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
					const t = i[e];
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
		"./src/reddit/contexts/Tooltip.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = o.a.createContext({})
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
				a = s("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = s("./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx"),
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
						redditStyle: a,
						"data-redditstyle": i
					} = t, c = p(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), d = ((e, t, s) => {
						const n = !(!t && !s);
						let o = "";
						return o = e ? n ? l.a.mDisabledRedditStyle : l.a.mDisabled : n ? l.a.mActiveRedditStyle : l.a.mActive
					})(n, a, i);
					return o.a.createElement(e, m({
						className: Object(r.a)(l.a.Checkbox, d, s)
					}, c))
				},
				b = u(c.a),
				h = u(i.a);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? h : e.isCheckboxSelected ? b : a.a;
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
				return w
			})), s.d(t, "c", (function() {
				return j
			}));
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
				E = s("./src/reddit/controls/ErrorText/index.m.less"),
				_ = s.n(E);
			const C = Object(m.c)({
				activeModalId: b.a
			});
			class y extends d.a.Component {
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
						className: Object(p.a)(_.a.wrapper, s)
					}, d.a.createElement("span", {
						className: _.a.description,
						ref: this.spanRef
					}, e), c && d.a.createElement("span", {
						className: _.a.moreText,
						onClick: this.toggleModal
					}, a), t === i && d.a.createElement(O, {
						onConfirmed: this.toggleModal,
						title: r
					}, o || e))
				}
			}
			const k = Object(l.b)(C, e => ({
					toggleErrorTextModal: t => e(Object(u.i)(t))
				}))(y),
				w = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: n,
						fallbackMessage: o,
						messages: r = []
					} = e, a = r.length ? r : o ? [o] : [];
					return a.length ? d.a.createElement("div", {
						className: t
					}, a.map((e, t) => d.a.createElement(k, {
						className: s,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				j = e => d.a.createElement(w, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = k
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
						score: s,
						useUpvotes: o
					} = e, a = l(e, ["isScoreHidden", "score", "useUpvotes"]);
					const c = Object(i.b)(s),
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
					return r.a.createElement(m, a, p)
				},
				b = e => r.a.createElement(m, null, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/helpers/describeApiError/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts");

			function r(e) {
				let {
					apiError: t,
					isLoggedOut: s
				} = e;
				switch (t.type) {
					case o.E.AUTHORIZATION_ERROR:
						return s ? n.fbt._("You might need to be logged in to do that.", null, {
							hk: "1313fG"
						}) : n.fbt._("It looks like you aren't allowed to do that.", null, {
							hk: "5tQod"
						});
					case o.E.VALIDATION_ERROR:
						return n.fbt._("We weren't able to handle your request.", null, {
							hk: "4umMwv"
						});
					case o.E.NOT_FOUND_ERROR:
						return n.fbt._("Sorry, there doesn't seem to be anything here.", null, {
							hk: "2UmS4e"
						});
					case o.E.SERVER_ERROR:
						return n.fbt._("Sorry, for some reason reddit can't be reached.", null, {
							hk: "1Sxl7y"
						});
					case o.E.LIKELY_UBLOCK_ERROR:
						return n.fbt._("It looks like one or more software blocking extensions you are using may be interfering with Reddit's ability to serve you content. Please try disabling them or changing the rules you use.", null, {
							hk: "6Gh68"
						});
					default:
						return n.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "FsWrq"
						})
				}
			}
		},
		"./src/reddit/helpers/getClickInfo.ts": function(e, t, s) {
			"use strict";
			t.a = e => ({
				hasNewTabModifier: !(!e.metaKey && !e.ctrlKey && 1 !== e.button)
			})
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
				return a
			})), s.d(t, "c", (function() {
				return i
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
				a = n.fbt._("Action taken by Automoderator", null, {
					hk: "1zud7K"
				}),
				i = e => {
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
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !e.ignoreReports && (e.numReports || 0) > 0
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
				a = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = s("./src/reddit/models/Theme/index.ts"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const m = {},
				p = e => Object(i.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				u = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.g)(e.postBackgroundColor, null, null)
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
					const t = Object(r.a)(Object(o.a)(e), a.a.actionIcon, a.b.actionIcon);
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
				return i
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
			const a = (e, t, s) => Object.assign({
					gallery: r.gallery(e, t, s),
					post: r.post(e, t)
				}, r.defaults(e)),
				i = (e, t) => s => Object.assign(Object.assign({}, a(s, e, t)), {
					action: n.c.VIEW,
					noun: "media",
					source: "gallery",
					media: r.media(s, e)
				}),
				c = (e, t, s) => i => {
					const c = Object(o.a)(t);
					return Object.assign(Object.assign({}, a(i, e, s)), {
						action: n.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: Object.assign(Object.assign({}, r.media(i, e)), {
							outboundUrl: t,
							outboundDomain: c ? c.hostname : void 0
						})
					})
				},
				d = (e, t) => m(e, !0, t),
				l = (e, t) => m(e, !1, t),
				m = (e, t, s) => o => Object.assign(Object.assign({}, a(o, e, s)), {
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
			s.d(t, "m", (function() {
				return i
			})), s.d(t, "D", (function() {
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
				return b
			})), s.d(t, "v", (function() {
				return h
			})), s.d(t, "o", (function() {
				return x
			})), s.d(t, "h", (function() {
				return f
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "r", (function() {
				return v
			})), s.d(t, "l", (function() {
				return O
			})), s.d(t, "k", (function() {
				return E
			})), s.d(t, "i", (function() {
				return _
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "w", (function() {
				return y
			})), s.d(t, "j", (function() {
				return k
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "p", (function() {
				return j
			})), s.d(t, "y", (function() {
				return I
			})), s.d(t, "n", (function() {
				return S
			})), s.d(t, "g", (function() {
				return P
			})), s.d(t, "C", (function() {
				return T
			})), s.d(t, "z", (function() {
				return N
			})), s.d(t, "a", (function() {
				return L
			})), s.d(t, "x", (function() {
				return M
			})), s.d(t, "A", (function() {
				return R
			})), s.d(t, "B", (function() {
				return A
			}));
			var n = s("./src/reddit/models/ScheduledPost/index.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const r = e => Object.assign(Object.assign({}, o.defaults(e)), {
					screen: o.screen(e),
					subreddit: o.subreddit(e),
					userSubreddit: o.userSubreddit(e)
				}),
				a = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(n.o)(e)
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
				b = e => t => Object.assign(Object.assign({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit"
				}, r(t)), {
					scheduledPost: a(e)
				}),
				h = e => t => Object.assign(Object.assign({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit"
				}, r(t)), {
					scheduledPost: a(e)
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
				E = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "one_time_frequency"
				}, r(e)),
				_ = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "hourly_frequency"
				}, r(e)),
				C = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "daily_frequency"
				}, r(e)),
				y = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "weekly_frequency"
				}, r(e)),
				k = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "monthly_frequency"
				}, r(e)),
				w = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "custom_frequency"
				}, r(e)),
				j = () => e => Object.assign({
					source: "post",
					action: "click",
					noun: "start_event_now"
				}, r(e)),
				I = (e, t, s) => a => Object.assign(Object.assign({
					source: "post",
					action: "click",
					noun: Object(n.l)(e)
				}, r(a)), {
					actionInfo: o.actionInfo(a, {
						settingValue: t ? "true" : "false",
						pageType: s ? "recurring_posts" : "scheduled_posts"
					})
				}),
				S = () => e => Object.assign({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta"
				}, r(e)),
				P = () => e => Object.assign({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post"
				}, r(e)),
				T = () => e => Object.assign({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer"
				}, r(e)),
				N = () => (e, t) => Object.assign(Object.assign({
					source: "recurring_post_composer",
					action: "click",
					noun: "update"
				}, r(e)), {
					scheduledPost: a(t)
				}),
				L = () => e => Object.assign({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel"
				}, r(e)),
				M = () => (e, t) => Object.assign(Object.assign({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete"
				}, r(e)), {
					scheduledPost: a(t)
				}),
				R = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer"
				}, r(e)),
				A = () => (e, t) => {
					const s = r(e);
					return Object.assign(Object.assign({
						source: "post",
						action: "view",
						noun: "error"
					}, s), {
						actionInfo: Object.assign(Object.assign({}, s.actionInfo), {
							reason: "failed_post"
						}),
						scheduledPost: a(t)
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
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("approve"), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
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
			t.a = e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("crosspost"), " ").concat(i.a.CrosspostIcon, " ").concat(e.className)
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
				a = s("./src/reddit/icons/fonts/DistinguishShield/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("distinguishShield"), " ").concat(e.className)
			}), "DistinguishShield", i.a);
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
			t.a = e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("envelope"), " ").concat(i.a.Envelope, " ").concat(e.className)
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
		"./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoMediaLightbox"), " ").concat(e.className),
				onClick: e.onClick
			}), "LightboxIcon", i.a);
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
				a = s("./src/reddit/icons/fonts/Hide/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("hide"), " ").concat(e.className)
			}), "HideIcon", i.a);
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
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("lock"), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
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
		"./src/reddit/icons/fonts/Op/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Op/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("op"), " ").concat(e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(r.a, null, e.desc)), "OpIcon", i.a);
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
				a = s("./src/reddit/icons/fonts/Pencil/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("pencil"), " ").concat(e.className)
			}), "PencilIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("remove"), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("report"), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
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
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("spam"), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
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
		"./src/reddit/icons/fonts/Unpin/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Unpin/index.m.less"),
				c = s.n(i);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("unpin"), e.className)
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
				a = s("./src/reddit/icons/svgs/Chevron/index.m.less"),
				i = s.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.chevron, e.className),
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
				a = s("./src/reddit/icons/svgs/Save/index.m.less"),
				i = s.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
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
				a = s("./src/reddit/controls/Button/index.tsx"),
				i = s("./src/reddit/pages/ErrorPages/index.m.less"),
				c = s.n(i);
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
					})), r.a.createElement(a.k, {
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
					})), r.a.createElement(a.k, {
						className: c.a.primaryRouterLink,
						to: "/"
					}, n.fbt._("Go Home", null, {
						hk: "3E9E1g"
					})))
				}
		},
		"./src/reddit/pages/ProfileComments/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.regexp.search.js");
			var n = s("./node_modules/lodash/fromPairs.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/extractQueryParams/index.ts"),
				m = s("./src/lib/makeListingKey/index.ts"),
				p = s("./src/reddit/actions/pages/profileComments.ts"),
				u = s("./src/reddit/actions/pages/profileShared.ts"),
				b = s("./src/reddit/components/ContentGate/index.tsx"),
				h = s("./src/reddit/components/EmptyProfile/index.ts"),
				x = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				f = s("./src/reddit/components/JumpToContent/index.tsx"),
				g = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/lib/classNames/index.ts")),
				v = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				O = s("./src/lib/lessComponent.tsx"),
				E = s("./src/reddit/components/ClassicPost/index.tsx"),
				_ = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				C = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				y = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				k = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				w = s("./src/reddit/constants/postLayout.ts"),
				j = s("./src/reddit/contexts/PageLayer/index.tsx"),
				I = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				S = s("./src/reddit/selectors/comments.ts"),
				P = s("./src/reddit/components/ProfileCommentList/ListItem.m.less"),
				T = s.n(P);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var L = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const M = O.a.wrapped(E.default, "ClassicPost", T.a),
				R = O.a.wrapped(C.a, "OverviewCommentPost", T.a),
				A = Object(j.t)({
					currentProfileName: j.h,
					pageLayer: e => e
				}),
				F = Object(c.c)({
					comment: (e, t) => {
						let {
							itemId: s
						} = t;
						return Object(S.n)(e, {
							commentId: s
						})
					},
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
					}
				});
			var B = A(Object(i.b)(F)(e => {
				const {
					comment: t,
					itemId: s,
					isFirstInCommentList: n,
					isLastInCommentList: o,
					layout: r,
					profileName: i,
					allowModToolsUnderComments: c
				} = e;
				if (r === w.g.Compact) return a.a.createElement(_.a, e);
				const {
					height: d,
					width: l
				} = e, m = L(e, ["height", "width"]);
				return a.a.createElement(D, m, n && a.a.createElement(y.a, {
					isFirst: !0
				}, r === w.g.Large ? a.a.createElement(M, N({}, e, {
					availableWidth: l,
					inSubredditOrProfile: !1,
					isOverlay: !1
				})) : a.a.createElement(R, N({}, e, {
					commentId: s,
					profileName: i
				}))), a.a.createElement(y.a, {
					isLast: o
				}, a.a.createElement(k.a, {
					commentId: s,
					depth: t.parentId ? 1 : 0,
					isFirst: !0,
					isLast: !0,
					key: s,
					profileName: i,
					showModTools: c
				})))
			}));
			const D = Object(v.a)(e => a.a.createElement("div", {
				children: e.children,
				className: Object(g.a)(T.a.backgroundMargin, {
					[T.a.isFirstInCommentList]: e.isFirstInCommentList,
					[T.a.isLastInCommentList]: e.isLastInCommentList
				}),
				style: {
					background: Object(I.e)(e)
				}
			}));
			var H = s("./src/reddit/components/ProfileItemList/index.tsx"),
				W = s("./node_modules/lodash/noop.js"),
				U = s.n(W),
				V = s("./src/reddit/actions/ads/index.ts"),
				G = s("./src/reddit/actions/comment/list.ts"),
				z = s("./src/reddit/actions/post.ts"),
				K = s("./src/reddit/components/TrackingHelper/index.tsx"),
				q = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				J = s("./src/reddit/helpers/trackers/post.ts"),
				X = s("./src/reddit/featureFlags/index.ts"),
				Z = s("./src/reddit/selectors/posts.ts"),
				Q = s("./src/reddit/selectors/profileComments.ts"),
				Y = s("./src/reddit/selectors/subreddit.ts"),
				$ = s("./src/reddit/selectors/tracking.ts"),
				ee = s("./src/reddit/selectors/user.ts");
			const te = Object(j.t)(),
				se = {
					apiError: Q.a,
					apiPending: Q.b,
					currentUser: ee.i,
					measureScrollFPS: X.d.measureScrollFPS,
					layout: j.N,
					loadMore: Q.d,
					subredditsById: Y.ab,
					viewportDataLoaded: $.a,
					commentsById: S.r,
					itemIds: Q.f,
					itemIdToPostId: Q.e,
					postsById: Z.R,
					estimateItemHeight: e => (e, t, s) => {
						if (s) switch (t) {
							case w.g.Medium:
								return 174;
							case w.g.Classic:
								return 129;
							case w.g.Compact:
								return 120;
							default:
								return 140
						}
						switch (t) {
							case w.g.Medium:
							case w.g.Classic:
								return 90;
							case w.g.Compact:
								return 80;
							default:
								return 90
						}
					}
				},
				ne = Object(c.c)(se),
				oe = Object(i.b)(ne, e => ({
					onBottomViewed: (t, s) => e(Object(G.c)(t, s)),
					adBrandSafetyStatusReceived: t => {
						e(V.d({
							isViewSafe: t
						}))
					},
					openPost: t => e(Object(z.C)(t)),
					fireAdPixelsOfType: U.a,
					trackOnPostEnteredViewport: U.a
				}), (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), s), {
					postClickEventFactory: (e, t) => Object(J.f)(e, t),
					postComponentForLayout: q.b
				}));

			function re() {
				return (re = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ae = e => a.a.createElement(B, re({}, e, {
					allowModToolsUnderComments: !0
				})),
				ie = (e => Object(K.c)(te(oe(e))))(H.a);
			var ce = e => a.a.createElement(ie, re({}, e, {
					itemComponent: ae
				})),
				de = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				le = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				me = s("./src/reddit/helpers/trackers/screenview.ts"),
				pe = s("./src/reddit/layout/page/Listing/index.tsx"),
				ue = s("./src/reddit/models/ContentGate.ts"),
				be = s("./src/reddit/pages/ErrorPages/index.tsx"),
				he = s("./src/reddit/selectors/profile.ts");

			function xe() {
				return (xe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const fe = Object(j.t)(),
				ge = Object(c.a)(j.B, ee.Y, (e, t) => {
					let {
						location: s
					} = t;
					return o()([...Object(l.a)(s.search)])
				}, j.N, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.profileName
				}, (e, t) => {
					let {
						match: s
					} = t;
					return Object(he.j)(e, {
						profileName: s.params.profileName
					})
				}, ee.I, (e, t) => {
					let {
						match: s
					} = t;
					return Object(ee.e)(e, d.Ub + s.params.profileName)
				}, (e, t, s, n, o, r, a, i) => {
					const {
						sort: c,
						t: d
					} = Object(u.b)(s), l = Object(m.a)("u_".concat(o), c, s);
					return {
						contentGateInfo: i,
						over18Prefs: t,
						isLoggedIn: a,
						isOwnProfile: e,
						isProfileNSFW: !!r && r.isNSFW,
						layout: n,
						listingKey: l,
						profileName: o,
						sort: c,
						timeSort: d
					}
				}),
				ve = Object(i.b)(ge, (e, t) => ({
					onLoadMore: () => e(Object(p.g)()),
					onLayoutChange: () => e(Object(p.h)(Object.assign(Object.assign({}, t.match), {
						queryParams: o()([...Object(l.a)(t.location.search)])
					})))
				}));
			t.default = fe(ve(e => {
				const {
					contentGateInfo: t,
					over18Prefs: s,
					isOwnProfile: n,
					isProfileNSFW: o,
					listingKey: r,
					onLoadMore: i,
					onLayoutChange: c,
					pageLayer: l,
					profileName: m,
					sort: p,
					timeSort: u
				} = e;
				if (!m || !l) return null;
				if (t && t.profileDeleted) return a.a.createElement(b.default, {
					contentGateType: ue.a.ProfileDeleted,
					profileName: m
				});
				if (t && t.profileSuspended) return a.a.createElement(b.default, {
					contentGateType: ue.a.ProfileSuspended,
					profileName: m
				});
				if (451 === l.status || t && t.profileBlockedForLegalReason) return a.a.createElement(b.default, {
					contentGateType: ue.a.ProfileBlockedForLegalReason,
					profileName: m
				});
				if (403 === l.status) return a.a.createElement(be.a, null);
				if (404 === l.status) return a.a.createElement(b.default, {
					contentGateType: ue.a.ProfileDoesNotExist,
					profileName: m
				});
				const g = m.toLowerCase(),
					v = "/user/".concat(m, "/comments/"),
					O = {
						listingKey: r,
						listingName: g
					};
				if (!s && o && !n) return a.a.createElement(b.default, {
					contentGateType: ue.a.Nsfw,
					subredditName: m
				});
				const E = {
					sort: p,
					baseUrl: v,
					sortOptions: d.tb,
					timeSort: u
				};
				return a.a.createElement(pe.a, {
					className: e.className,
					fitPageToContent: !0,
					contentNavBar: a.a.createElement(a.a.Fragment, null, a.a.createElement(de.a, {
						profileName: m
					})),
					content: a.a.createElement(a.a.Fragment, null, a.a.createElement(x.a, E), a.a.createElement(f.a, null), a.a.createElement(ce, {
						listingKey: r,
						listingName: g,
						listingViewed: (e, t) => Object(me.m)(r, p, t, e, u),
						noPostsComponent: () => a.a.createElement(h.b, {
							profileName: m,
							timeSort: u
						}),
						onLoadMore: i,
						onTryAgain: c,
						inSubredditOrProfile: !1
					})),
					sidebar: a.a.createElement(le.a, xe({}, O, {
						profileName: m
					}))
				})
			}))
		},
		"./src/reddit/selectors/eventPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return a
			})), s.d(t, "f", (function() {
				return i
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
			const a = (e, t) => {
					let {
						subredditName: s
					} = t;
					return Object(n.a)("ModhubPage-EventPosts", "timeline", {
						subredditName: s
					})
				},
				i = (e, t) => {
					const s = a(e, t);
					return Object(o.U)(e, {
						listingKey: s,
						predictionsEnabled: Object(r.a)(e)
					}) || []
				},
				c = (e, t) => {
					const s = a(e, t);
					return !!e.listings.postOrder.api.pending[s]
				},
				d = (e, t) => {
					const s = a(e, t);
					return !!(e.listings.postOrder.ids[s] || []).length
				},
				l = (e, t) => {
					const s = a(e, t),
						n = e.listings.postOrder.pageInfo[s];
					return !(!n || !n.hasNextPage)
				},
				m = (e, t) => {
					const s = a(e, t),
						n = e.listings.postOrder.pageInfo[s];
					return n && n.endCursor || null
				}
		},
		"./src/reddit/selectors/experiments/reportingRevampDesktop.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const a = e => n.c.Enabled === Object(o.c)(e, {
				experimentEligibilitySelector: r.I,
				experimentName: n.e
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments.925ae9ff807dec1dc10e.js.map