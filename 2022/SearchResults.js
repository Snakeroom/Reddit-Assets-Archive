// https://www.redditstatic.com/desktop2x/SearchResults.fe510ebe5c52c6c68122.js
// Retrieved at 5/2/2022, 11:00:06 AM by Reddit Dataminer v1.0.0
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
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var n = s("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return n(e) + t
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
				return O
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "b", (function() {
				return k
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
			var u = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				p = s("./src/reddit/selectors/platform.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const C = Object(r.a)(i.g),
				h = Object(r.a)(i.e),
				x = Object(r.a)(i.h),
				f = Object(r.a)(i.c),
				O = Object(r.a)(i.f),
				g = Object(r.a)(i.j),
				v = Object(r.a)(i.i),
				E = () => async (e, t, s) => {
					let {
						gqlContext: r
					} = s;
					const o = t(),
						i = Object(u.e)(o),
						d = Object(u.d)(o),
						p = Object(b.Q)(o);
					if (i || !d) return;
					e(x());
					let O = !1;
					try {
						const t = p ? n.LoggedInGeo : n.LoggedOutGeo,
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
							if (j(t)) {
								if (y(t)) {
									e(f({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), O = !0
								} else if (_(t)) {
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
									e(C(u)), O = !0
								}
							} else O = !1
						}
					} catch (g) {
						O = !1
					}
					O || e(h({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, j = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, y = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, _ = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						n = t && t.type;
					return !!(s && !y(e) && n === d.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, k = () => async (e, t, s) => {
					var n, r;
					const i = t(),
						a = Object(u.g)(i);
					if (Object(u.f)(i) || null === a || "client" === a) {
						const s = null === (r = null === (n = Object(p.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							a = Object(b.R)(i);
						return Object(o.i)(() => e(E()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(O({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/pages/search/searchResultsRequested.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "searchResultsRequested", (function() {
				return v
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/pick.js"),
				o = s.n(r),
				i = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/makeSearchKey/index.ts"),
				c = s("./src/lib/pageTitle/index.ts"),
				d = s("./node_modules/lodash/isEqual.js"),
				l = s.n(d),
				m = s("./src/reddit/actions/pages/search/index.ts"),
				u = s("./src/reddit/actions/platform.ts"),
				p = s("./src/reddit/constants/parameters.ts"),
				b = s("./src/reddit/models/Multireddit/index.ts"),
				C = s("./src/reddit/constants/experiments.ts"),
				h = s("./src/reddit/helpers/chooseVariant/index.ts"),
				x = s("./node_modules/reselect/es/index.js");
			const f = Object(x.a)(e => Object(h.c)(e, {
				experimentEligibilitySelector: h.a,
				experimentName: C.ub
			}), e => e === C.ud);
			var O = s("./src/reddit/selectors/experiments/serpRedesignLayout.ts");
			const g = e => n.fbt._("reddit.com: search results - {query}", [n.fbt._param("query", e || "None")], {
					hk: "1XOKAg"
				}),
				v = e => async (t, s) => {
					const n = s(),
						r = Object(O.a)(n),
						d = Object(i.uc)(r),
						C = Object(a.e)(o()(e.queryParams, p.v), d),
						{
							multiredditName: h,
							subredditName: x,
							username: v
						} = e.params;
					let E;
					v && h && (E = Object(b.h)(v, h));
					const j = Object(a.b)(x || h, v, C);
					!f(n) || C.type.length && !l()(C.type, [i.dc.Posts, i.dc.Subreddits, i.dc.Users]) || t(Object(m.d)(j, {
						...C,
						type: [i.dc.Comments]
					}, x, v, E, !0)), await t(Object(m.d)(j, C, x, v, E));
					let y = !1;
					const {
						type: _ = []
					} = C, k = _.indexOf(i.dc.Posts) > -1, w = _.indexOf(i.dc.Users) > -1, S = _.indexOf(i.dc.Subreddits) > -1;
					k && n.listings.postOrder.api.error[j] && (y = !0), w && n.listings.authorOrder.api.error[j] && (y = !0), S && n.listings.communityOrder.api.error[j] && (y = !0), t(y ? u.m({
						title: Object(c.e)()
					}) : u.m({
						title: g(C.q)
					}))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return u
			})), s.d(t, "a", (function() {
				return O
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "e", (function() {
				return E
			})), s.d(t, "f", (function() {
				return y
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
				C = Object(o.a)(i.O),
				h = Object(o.a)(i.z),
				x = Object(o.a)(i.M),
				f = Object(o.a)(i.L),
				O = Object(o.a)(i.t),
				g = Object(o.a)(i.u),
				v = e => async (t, s, n) => {
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
				}, E = (e, t) => async (s, n) => s(j(e, t)), j = (e, t) => async (s, n, r) => {
					let {
						gqlContext: o
					} = r;
					const i = n();
					if (Object(d.f)(i)) return;
					s(C());
					const c = await Object(a.f)(o(), e, t),
						l = Date.now();
					if (c.ok && c.body && c.body.data) {
						const t = c.body.data;
						s(h({
							listingName: e,
							models: t,
							utcTimeStamp: l
						}))
					} else s(w({
						error: c.error,
						utcTimeStamp: l
					}))
				}, y = (e, t) => async (s, n) => s(_(e, t)), _ = (e, t) => async (s, n, r) => {
					let {
						gqlContext: o
					} = r;
					const i = n();
					if (Object(d.f)(i)) return;
					s(C());
					const c = Date.now(),
						m = e.replace("r/", ""),
						u = Object(l.F)(i, m),
						p = await Object(a.b)(o(), {
							subredditId: u,
							options: t
						}),
						b = p.body;
					p.ok && b && b.data || s(w({
						error: p.error,
						utcTimeStamp: c
					}));
					const x = b.data.liveVideoFeed.posts.edges.map(e => (async (e, t) => {
							const s = await Object(a.e)(e, t),
								n = Date.now(),
								r = s.body;
							return r && r.data ? r.data : void k({
								streamId: t,
								error: s.error,
								utcTimeStamp: n
							})
						})(o(), e.node.id)),
						f = (await Promise.all(x)).filter(e => void 0 !== typeof e);
					s(h({
						listingName: e,
						models: f,
						utcTimeStamp: c
					}))
				}, k = e => async t => {
					t(x(e))
				}, w = e => async t => {
					t(f(e))
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
			const r = Object(n.a)(() => Promise.all([s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				o = Object(n.a)(() => Promise.all([s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				i = Object(n.a)(() => Promise.all([s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
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
				r = s.n(n);
			const o = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", r.a);
			t.a = o
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
				a = s("./src/reddit/components/CallToActionButton/index.m.less"),
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
				return r.a.createElement(i.b, d({
					className: Object(o.a)(c.a.CallToActionButton, t, {
						[c.a.mNotCardView]: s.isNotCardView
					})
				}, s))
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
			const C = "bottom",
				h = Object(a.c)({
					isCommentBoxDesignEnabled: l.a
				}),
				x = Object(i.b)(h),
				f = e => {
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
				O = () => o.a.createElement("div", {
					className: Object(m.a)(p.a.byline, Object(d.a)({
						isLoading: !0
					}))
				}),
				g = () => o.a.createElement("div", {
					className: Object(m.a)(p.a.avatar, Object(d.a)({
						isLoading: !0
					}))
				}),
				v = e => o.a.createElement(f, e, e.isCommentBoxDesignEnabled ? o.a.createElement(g, null) : o.a.createElement(O, null), o.a.createElement(c.a, {
					className: p.a.editor,
					isCommentBoxDesignEnabled: e.isCommentBoxDesignEnabled,
					isLoading: !0,
					toolbarPosition: C
				})),
				E = x(v),
				j = Object(n.a)({
					resolved: {},
					chunkName: () => "RichTextEditor",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/CommentCreation/index.tsx")),
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
				y = e => o.a.createElement(j, b({}, e, {
					fallback: o.a.createElement(E, {
						isTopLevelComment: e.isTopLevelComment
					})
				}));
			t.a = y
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
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/comment/moderation.ts"),
				c = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Dropdown/index.tsx"),
				m = s("./src/reddit/helpers/trackers/modTools.ts"),
				u = s("./src/reddit/selectors/tooltip.ts"),
				p = s("./node_modules/fbt/lib/FbtPublic.js"),
				b = s("./src/lib/lessComponent.tsx"),
				C = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				h = s("./src/reddit/icons/svgs/Show/index.tsx"),
				x = s("./src/reddit/components/CommentModModeDropdown/index.m.less"),
				f = s.n(x);
			const O = b.a.wrapped(h.a, "Show", f.a);
			var g = e => r.a.createElement(C.g, null, !e.comment.isApproved && r.a.createElement(C.e, {
				displayText: e.comment.approvedBy ? p.fbt._("Approved", null, {
					hk: "3BGaEK"
				}) : p.fbt._("Approve", null, {
					hk: "7CwFx"
				}),
				onClick: e.onApproveComment
			}, r.a.createElement(C.a, null)), !e.comment.bannedBy && r.a.createElement(r.a.Fragment, null, r.a.createElement(C.e, {
				displayText: e.comment.isRemoved ? p.fbt._("Removed", null, {
					hk: "17pv2n"
				}) : p.fbt._("Remove", null, {
					hk: "3tYl0U"
				}),
				onClick: e.onRemoveComment
			}, r.a.createElement(C.i, null)), r.a.createElement(C.e, {
				displayText: e.comment.isSpam ? p.fbt._("Removed as spam", null, {
					hk: "2Kv9DF"
				}) : p.fbt._("Remove as spam", null, {
					hk: "OOps6"
				}),
				onClick: e.onSpamComment
			}, r.a.createElement(C.j, null)), r.a.createElement(C.e, {
				displayText: e.comment.isLocked ? p.fbt._("Unlock comment", null, {
					hk: "1canPl"
				}) : p.fbt._("Lock comment", null, {
					hk: "Qp5a0"
				}),
				onClick: e.onLockComment
			}, r.a.createElement(C.h, null))), e.comment.collapsedBecauseCrowdControl && r.a.createElement(C.e, {
				displayText: p.fbt._("Show comment", null, {
					hk: "9SB86"
				}),
				onClick: e.onShowComment
			}, r.a.createElement(O, null)));
			const v = b.a.wrapped(l.a, "StyledDropdown", f.a),
				E = Object(i.c)({
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(u.b)(s)(e)
					}
				}),
				j = Object(o.b)(E, (e, t) => {
					let {
						comment: s
					} = t;
					return {
						onApproveComment: () => e(Object(a.a)(s.id)),
						onLockComment: () => e(Object(a.c)(s.id)),
						onRemoveComment: () => e(Object(a.e)(s.id, !1)),
						onSpamComment: () => e(Object(a.e)(s.id, !0)),
						onShowComment: () => e(Object(a.d)(s.id))
					}
				}),
				y = Object(c.a)(v),
				_ = j(Object(d.c)(e => {
					const {
						comment: t,
						isDropdownOpen: s,
						onApproveComment: n,
						onLockComment: o,
						onRemoveComment: i,
						onSpamComment: a,
						onShowComment: c,
						sendEvent: d,
						tooltipId: l
					} = e;
					return r.a.createElement(y, {
						isOpen: s,
						tooltipId: l
					}, r.a.createElement(g, {
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
							o(), d(Object(m.c)(t.isLocked ? "unlock" : "lock", t.id))
						},
						onShowComment: () => {
							c(), d(Object(m.c)("showComment", t.id))
						},
						comment: t
					}))
				}));
			t.a = _
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
				SupporterRing: "_2I86011VPvZ-uDOUp1zvd-",
				supporterRing: "_2I86011VPvZ-uDOUp1zvd-",
				UserIcon: "_13ScjOmi6dGdJw0JAonQEr",
				userIcon: "_13ScjOmi6dGdJw0JAonQEr",
				UserIconNft: "_20ZyBb8T475h1qmXRBEL6-",
				userIconNft: "_20ZyBb8T475h1qmXRBEL6-",
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
				C = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				h = s("./src/reddit/icons/fonts/helpers.tsx");
			var x = e => o.a.createElement("i", {
					className: Object(d.a)(Object(h.b)("expand", e.isFilled), e.className)
				}),
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
			var v, E, j = s("./node_modules/lodash/defer.js"),
				y = s.n(j),
				_ = s("./src/lib/lessComponent.tsx"),
				k = s("./src/reddit/actions/tooltip.ts"),
				w = s("./src/reddit/selectors/tooltip.ts"),
				S = s("./src/reddit/actions/gold/modals.ts"),
				I = s("./src/reddit/actions/modal.ts"),
				T = s("./src/reddit/actions/reportFlow/index.ts"),
				N = s("./src/reddit/helpers/correlationIdTracker.ts"),
				R = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				P = s("./src/reddit/helpers/trackers/lightbox.ts"),
				L = s("./src/reddit/models/Comment/index.ts"),
				M = s("./src/reddit/selectors/activeModalId.ts"),
				F = s("./src/reddit/selectors/comments.ts"),
				D = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				B = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				A = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				H = s("./src/reddit/selectors/posts.ts"),
				U = s("./src/reddit/selectors/subreddit.ts"),
				V = s("./src/reddit/selectors/user.ts"),
				W = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				G = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				K = s.n(G);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(v || (v = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(E || (E = {}));
			const q = (e, t) => {
					const s = K.a[t],
						n = K.a[e];
					return Object(d.a)(s, n)
				},
				Y = e => Object(d.a)(K.a[`depth${Math.min(3*Math.ceil(e.depth/3),10)}`], {
					[K.a.isInOverlay]: e.isInOverlay,
					[K.a.isModModeEnabled]: e.isModModeEnabled,
					[K.a.isFollowCommentEnabled]: e.isFollowCommentEnabled
				});
			var z = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				J = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				Z = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				X = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				Q = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				$ = s("./src/reddit/components/ModModeReports/helpers.ts"),
				ee = s("./src/reddit/components/OverflowMenu/index.tsx"),
				te = s("./src/reddit/components/ReportFlow/index.tsx"),
				se = s("./src/reddit/components/ReportFlow/new.tsx"),
				ne = s("./src/reddit/components/ShareMenu/index.tsx"),
				re = s("./src/reddit/components/TrackingHelper/index.tsx"),
				oe = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				ie = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				ae = s("./src/reddit/helpers/trackers/modTools.ts"),
				ce = s("./src/reddit/layout/row/Inline/index.tsx"),
				de = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less"),
				le = s.n(de),
				me = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				ue = s("./src/reddit/selectors/gold/awardIcon.ts");
			var pe = e => {
					const t = Object(i.e)(A.b),
						s = Object(i.e)(e => t && Object(ue.a)(e, {
							award: t,
							minSize: 32
						}));
					return s ? o.a.createElement("img", {
						className: Object(d.a)(le.a.img, e.className),
						id: e.id,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						src: s
					}) : o.a.createElement(me.a, e)
				},
				be = s("./src/reddit/icons/fonts/index.tsx"),
				Ce = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				he = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				xe = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				fe = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				Oe = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ge = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				ve = s.n(ge);
			const Ee = _.a.wrapped(Ce.a, "CommentIcon", ve.a),
				je = _.a.wrapped(Oe.a, "Report", ve.a),
				ye = _.a.wrapped(xe.a, "IgnoreReport", ve.a),
				_e = _.a.wrapped(Q.a, "ModActionsMenu", ve.a),
				ke = _.a.div("OverflowMenuSpacer", ve.a),
				we = _.a.wrapped(ee.a, "DropdownRow", ve.a),
				Se = _.a.wrapped(ce.a, "Flatlist", ve.a),
				Ie = _.a.button("Button", ve.a),
				Te = _.a.wrapped(z.a, "ModToolsFlatlist", ve.a),
				Ne = _.a.wrapped(oe.a, "ViewReportsDropdown", ve.a),
				Re = e => `Comment-${e}--Modal--DeleteComment`,
				Pe = e => `Distinguish--Dropdown--${e}`,
				Le = e => `${e}-overflow-menu`,
				Me = e => `View--Reports--${e}`,
				Fe = Object(a.c)({
					claimedFreeAward: A.b,
					currentUser: V.l,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(M.a)(e) === Re(s.id)
					},
					isDistinguishDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(w.b)(Pe(s.id))(e)
					},
					isFollowed: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(F.y)(e, {
							commentId: s.id
						})
					},
					isFollowedCommentExpired: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(F.A)(e, {
							commentId: s.id
						})
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(F.C)(e, {
							commentId: s.id
						})
					},
					isReportsDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(w.b)(Me(s.id))(e)
					},
					isLoggedIn: V.R,
					postIsArchived: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(H.A)(e, {
							postId: s.postId
						})
					},
					isBlockedUserBannerEnabled: (e, t) => {
						let {
							comment: s
						} = t;
						return !!Object(H.w)(e, {
							postId: s.postId
						}) && Object(D.a)(e)
					},
					postAuthorIsBlocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(H.w)(e, {
							postId: s.postId
						})
					},
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(H.B)(e, {
							postId: s.postId
						})
					},
					commentPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(F.m)(e, {
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
						return Object(F.I)(e, {
							commentId: s.id
						})
					},
					subredditAboutInfo: (e, t) => {
						let {
							subreddit: s
						} = t;
						return s ? Object(U.w)(e, {
							subredditName: s.name
						}) : void 0
					},
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(H.U)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: B.a,
					isPostUnrepliable: (e, t) => {
						let {
							comment: s
						} = t;
						var n;
						return null === (n = Object(H.G)(e, {
							postId: s.postId
						})) || void 0 === n ? void 0 : n.unrepliableReason
					},
					isTrueblockPCBlockeeEnabled: D.d,
					isParentCommentsAuthorBlocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(F.B)(e, {
							commentId: s.id
						})
					}
				});
			class De extends o.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(P.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(ae.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(ae.e)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						this.props.sendEvent(Object(ae.d)("edit", this.props.comment.id)), this.props.handleEdit()
					}, this.handleGild = async () => {
						var e;
						const t = Object(N.e)(N.a.GildingFlow, !0);
						this.props.onGildClick(t, null === (e = this.props.claimedFreeAward) || void 0 === e ? void 0 : e.id);
						const {
							clickGildEvent: n
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(n(this.props.comment.id))
					}, this.handleDelete = () => {
						this.props.sendEvent(Object(ae.d)("delete", this.props.comment.id)), this.props.toggleDeleteCommentModal()
					}, this.handleReportClick = () => {
						this.props.sendEvent(Object(ae.a)("report", this.props.comment.id)), this.props.onReportClick()
					}, this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(ae.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleFollow = () => {
						const {
							onCommentFollow: e,
							sendEvent: t,
							comment: s,
							isFollowed: n
						} = this.props;
						e(n ? L.a.UNFOLLOWED : L.a.FOLLOWED), t(n ? Object(ae.f)("follow", s.id) : Object(ae.a)("follow", s.id))
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(ae.b)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? o.a.createElement(se.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: te.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : o.a.createElement(te.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: te.b,
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
						onDistinguishComment: C,
						onIgnoreReports: h,
						onToggleReportsDropdown: x,
						moderatorPermissions: f,
						modModeEnabled: O,
						postIsArchived: g,
						postAuthorIsBlocked: j,
						isBlockedUserBannerEnabled: _,
						postIsLocked: k,
						renderedInOverlay: w,
						sendEvent: S,
						subreddit: I,
						subredditAboutInfo: T,
						toggleDeleteCommentModal: N,
						toggleSendReplies: P,
						trackCommentClick: M,
						isPostUnrepliable: F,
						isTrueblockPCBlockeeEnabled: D,
						isParentCommentsAuthorBlocked: B
					} = this.props, A = Object(R.a)(f), H = !!s && s.displayText === e.author, U = !!s && s.isEmployee, V = D && e.unrepliableReason, G = D && F, K = !(B && D) && !(j && D) && !(Object(L.g)(e) && D) && !(F && D) && !V && !G && !(T && T.userIsBanned) && (k || g || j && _ || A && p || e.isLocked ? A && p : p || m), z = Object($.a)(e), Q = A && H && !e.bannedBy, te = H && U && !e.bannedBy, se = Q || te, re = !(Object(L.g)(e) && D) && s && e.isGildable && !G && !(V && "[deleted]" === e.author), oe = !g && !V, ce = [];
					K && ce.push(o.a.createElement(Ie, {
						disabled: b,
						key: "reply",
						onClick: () => {
							l(), y()(() => M("reply", e.id)())
						}
					}, o.a.createElement(Ee, null), n.fbt._("Reply", null, {
						hk: "dq9W0"
					}))), re && ce.push({
						breakpointGroup: E.LoggedInUser,
						icon: o.a.createElement(pe, null),
						isIconOverflowOnly: !0,
						key: "award",
						onClick: this.handleGild,
						text: () => n.fbt._("Give Award", null, {
							hk: "1GmM1v"
						})
					}), ce.push(o.a.createElement(ne.a, {
						dropdownId: `${e.id}-comment-share-menu`,
						key: "share",
						permalink: i,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == I ? void 0 : I.type
					}, o.a.createElement(Ie, {
						onClick: () => this.sendCommentEventWithName("share")
					}, n.fbt._("Share", null, {
						hk: "3Ak3Tw"
					})))), H || ce.push({
						breakpointGroup: E.LoggedInUser,
						icon: o.a.createElement(Oe.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: () => n.fbt._("Report", null, {
							hk: "4oVcnd"
						})
					}), ce.push({
						breakpointGroup: E.LoggedInUser,
						icon: o.a.createElement(be.a, {
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
					}), H && ce.push({
						breakpointGroup: E.LoggedInUser,
						icon: o.a.createElement(be.a, {
							name: "edit"
						}),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: () => n.fbt._("Edit", null, {
							hk: "1nftDt"
						})
					}), oe && ce.push({
						breakpointGroup: E.LoggedInUser,
						icon: o.a.createElement(be.a, {
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
					const de = ce.map(e => o.a.isValidElement(e) ? e : o.a.createElement(Ie, {
							className: q(e.breakpointGroup, v.HideIfVWSmaller),
							disabled: b,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text())),
						le = ce.map(e => o.a.isValidElement(e) ? null : o.a.createElement(we, {
							className: q(e.breakpointGroup, v.HideIfVWLarger),
							displayText: e.text(),
							key: e.key,
							onClick: e.onClick,
							textClassName: ve.a.dropdownRowText
						}, e.icon));
					return o.a.createElement(r.Fragment, null, o.a.createElement(Se, {
						className: Object(d.a)(Y({
							depth: c,
							isInOverlay: w,
							isModModeEnabled: A && O,
							isFollowCommentEnabled: oe
						}), t)
					}, de, o.a.createElement(ke, {
						className: H ? void 0 : q(E.LoggedInUser, v.HideIfVWLarger)
					}, o.a.createElement(ee.b, {
						className: ve.a.overflowMenu,
						disabled: b,
						dropdownId: Le(e.id),
						onClick: () => S(Object(ae.a)("comment_overflow_menu", e.id))
					}, le, H && o.a.createElement(o.a.Fragment, null, o.a.createElement(we, {
						displayText: n.fbt._("Delete comment", null, {
							hk: "4lMUDO"
						}),
						onClick: this.handleDelete,
						textClassName: ve.a.dropdownRowText
					}, o.a.createElement(be.a, {
						name: "delete"
					})), o.a.createElement(ie.a, {
						text: n.fbt._("Send me reply notifications", null, {
							hk: "4ebRRu"
						}),
						onClick: P,
						isSelected: this.props.sendRepliesToggled
					})))), this.props.isConfirmModalOpen && o.a.createElement(Z.a, {
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
						toggleModal: N,
						trackClick: () => {},
						withOverlay: !0
					}), A && o.a.createElement(o.a.Fragment, null, O && o.a.createElement(Te, {
						className: q(E.Moderator, v.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: H
					}), o.a.createElement(_e, {
						className: O ? q(E.Moderator, v.HideIfVWLarger) : void 0,
						dropdownId: `${e.id}-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: () => S(Object(ae.a)("comment_mod_action_menu", e.id))
					}, o.a.createElement(fe.a, null), o.a.createElement(W.a, {
						comment: e,
						tooltipId: `${e.id}-mod-actions-menu`
					}))), Object($.c)(e) && !O && o.a.createElement(J.a, {
						text: `${z}`,
						onClick: () => {
							x(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: Me(e.id)
					}, o.a.createElement(Ne, {
						model: e,
						onIgnoreReports: () => {
							h(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Me(e.id)
					}), e.ignoreReports ? o.a.createElement(ye, null) : o.a.createElement(je, null)), se && o.a.createElement(J.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, o.a.createElement(he.a, null), o.a.createElement(X.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: U,
						isUserMod: A,
						onDistinguishComment: C,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Pe(e.id)
					}))), (!this.props.renderedInOverlay || !this.props.isCommentFocused) && this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Be = Object(i.b)(Fe, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n
					} = t;
					return {
						deleteComment: () => n && e(Object(p.i)(s.id, s.postId)),
						handleDelete: () => {
							e(Object(I.i)(Re(s.id))), e(Object(k.h)({
								tooltipId: Le(s.id)
							}))
						},
						handleEdit: () => {
							const t = s.media && s.media.rteMode;
							n && e(Object(p.d)({
								commentId: s.id,
								draftKey: Object(l.a)(c.c.edit, s.id),
								text: s.bodyMD || "",
								commentMode: t,
								commentsPageKey: n
							}))
						},
						handleReply: () => n && e(Object(p.r)({
							parentCommentId: s.id,
							commentsPageKey: n
						})),
						onCommentFollow: t => e(Object(p.t)(s.id, t)),
						onDistinguishComment: (t, n) => e(Object(b.b)(s.id, t, n)),
						onFollowedCommentExpire: () => e(Object(u.n)({
							id: s.id,
							expiresAt: 0
						})),
						onGildClick: (t, n) => e(Object(S.d)({
							awardId: n,
							correlationId: t,
							thingId: s.id
						})),
						onIgnoreReports: () => e(Object(b.g)(s.id)),
						onReportClick: () => e(Object(T.c)(s.id)),
						onToggleSave: () => e(Object(u.m)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(k.h)({
							tooltipId: Pe(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(k.h)({
							tooltipId: Me(s.id)
						})),
						toggleDeleteCommentModal: () => e(Object(I.i)(Re(s.id))),
						toggleSendReplies: () => e(Object(p.l)(s.id))
					}
				})(Object(re.c)(De)),
				Ae = s("./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less"),
				He = s.n(Ae);
			var Ue = o.a.memo(e => {
					const {
						hexColor: t
					} = e;
					return o.a.createElement("div", {
						className: He.a.glowHighlightContainer,
						role: "presentation",
						style: {
							boxShadow: `#${t} 0px 0px 14px`
						}
					})
				}),
				Ve = s("./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less"),
				We = s.n(Ve);
			var Ge = o.a.memo(e => o.a.createElement("div", {
					className: We.a.gradientHighlightContainer,
					role: "presentation"
				})),
				Ke = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.tsx"),
				qe = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Ye = s("./src/reddit/components/Comments/PredictionComment/async.ts"),
				ze = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				Je = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				Ze = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				Xe = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				Qe = s("./src/reddit/components/ModModeReports/index.tsx"),
				$e = s("./src/reddit/components/PostTopMeta/index.tsx"),
				et = s("./src/reddit/components/RichTextJson/index.tsx"),
				tt = s("./src/reddit/components/UserIcon/index.tsx"),
				st = s("./src/reddit/components/UserIcon/constants.ts"),
				nt = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				rt = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				ot = s("./src/reddit/constants/componentTestIds.ts"),
				it = s("./src/reddit/contexts/PageLayer/index.tsx"),
				at = s("./src/reddit/contexts/Visibility.tsx"),
				ct = s("./src/reddit/controls/ErrorText/index.tsx"),
				dt = s("./src/reddit/controls/InternalLink/index.tsx"),
				lt = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				mt = s("./src/reddit/helpers/flair.ts"),
				ut = s("./src/reddit/models/Subreddit/index.ts"),
				pt = s("./src/reddit/models/User/index.ts"),
				bt = s("./src/reddit/models/Vote/index.ts"),
				Ct = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				ht = s("./src/reddit/selectors/commentSelector.ts"),
				xt = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				ft = s("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				Ot = s("./src/reddit/selectors/gold/powerups/flairs.ts"),
				gt = s("./src/reddit/selectors/moderatorPermissions.ts"),
				vt = s("./src/reddit/selectors/poll/index.ts"),
				Et = s("./src/reddit/selectors/userPrefs.ts"),
				jt = s("./src/reddit/selectors/moderatingComments.ts"),
				yt = s("./src/reddit/components/Comments/Comment/index.m.less"),
				_t = s.n(yt),
				kt = s("./src/config.ts"),
				wt = s("./src/reddit/selectors/experiments/econ/avatarNfts.ts"),
				St = s("./src/reddit/helpers/userSnoovatar/index.ts");

			function It() {
				return (It = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Tt = 300,
				Nt = _.a.wrapped((function(e) {
					const {
						className: t,
						...s
					} = e;
					return o.a.createElement("button", g({}, s, {
						className: Object(d.a)(t, O.a.expandButton)
					}), o.a.createElement(x, {
						className: O.a.expandIcon
					}))
				}), "ExpandButton", _t.a),
				Rt = _.a.wrapped(Be, "FlatList", _t.a),
				Pt = _.a.wrapped(ct.b, "ErrorText", _t.a),
				Lt = _.a.wrapped(ze.a, "HorizontalVotes", _t.a),
				Mt = _.a.div("ActionBar", _t.a),
				Ft = _.a.wrapped(qe.a, "TopMeta", _t.a),
				Dt = _.a.div("CommentContentWrapper", _t.a),
				Bt = _.a.wrapped(Je.b, "AuthorHovercard", _t.a),
				At = Object(it.u)(),
				Ht = Object(i.b)(() => Object(a.c)({
					comment: (e, t) => Object(ht.b)(e, t),
					currentProfileModPermissions: it.h,
					depth: (e, t) => Object(F.j)(e, t),
					collapsed: jt.b,
					collapsedBecauseCrowdControl: jt.a,
					currentUser: V.l,
					flair: F.e,
					focused: (e, t) => !t.noFocus && Object(F.t)(e, t),
					highlightAnimationDisabled: Et.c,
					isEditing: F.z,
					isLoggedIn: V.R,
					isPendingDeletion: F.C,
					isPresenceConsumptionExpEnabled: ft.c,
					moderatorPermissions: (e, t) => {
						const s = Object(ht.b)(e, t);
						return s ? Object(gt.n)(e, {
							subredditId: s.subredditId
						}) : null
					},
					prediction: vt.f,
					modModeEnabled: it.T,
					errorMsgs: F.G,
					replyFormOpen: F.J,
					subreddit: it.r,
					subredditType: F.L,
					showNftSpecialtyTreatment: wt.b,
					hasSupporterRing: Ot.a,
					isOnlineConsumptionLoadTest: ft.a,
					isOnlineUserPref: V.W,
					userIsBanned: (e, t) => {
						const s = Object(ht.b)(e, t);
						return !!s && Object(U.fb)(e, {
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
						onCollapseClick: () => e(Object(u.o)({
							commentId: s,
							commentsPageKey: n,
							scrollToAndRemeasure: r
						})),
						onIgnoreReports: () => e(Object(b.g)(s)),
						onVoteClick: t => {
							const [n, r] = t === bt.a.upvoted ? [Object(u.q)(s), "upvote_comment"] : [Object(u.j)(s), "downvote_comment"];
							o(r, s)(), e(n)
						}
					}
				}),
				Ut = Object(m.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				Vt = e => o.a.createElement("div", e, e.children),
				Wt = e => o.a.createElement(o.a.Fragment, null, e.children),
				Gt = At(Ht(e => {
					const {
						childrenInfo: t,
						clearHovered: s,
						collapsed: i,
						collapsedBecauseCrowdControl: a,
						comment: m,
						commentsPageKey: u,
						currentProfileModPermissions: b,
						currentUser: h,
						depth: x,
						errorMsgs: f,
						flair: O,
						flatlist: g,
						focused: v,
						hasAwardGradient: E,
						hasSupporterRing: j,
						highlightAnimationDisabled: y,
						highlightTreatment: _,
						index: k,
						isActive: w,
						isAvatarsInCommentsEnabled: S,
						isBlockingInterstitialEnabled: I,
						isBlockingInterstitialV2Enabled: T,
						isEditing: N,
						isFirstInList: P,
						isHighlighted: M,
						isLoggedIn: F,
						isOnlineConsumptionLoadTest: D,
						isOnlineUserPref: B,
						isPendingDeletion: A,
						isPresenceConsumptionExpEnabled: H,
						moderatorPermissions: U,
						modModeEnabled: V,
						noSpacing: W = !1,
						onCommentAuthorClick: G,
						onCommentTimestampClick: K,
						onCollapseClick: q,
						onIgnoreReports: Y,
						onLineMouseOver: z,
						onPresenceIndicatorInViewport: J,
						onVoteClick: Z,
						postId: X,
						prediction: Q,
						renderedInOverlay: ee,
						replyFormOpen: te,
						restrictHeight: se,
						showBlockingInterstitial: ne,
						showNftSpecialtyTreatment: re,
						subreddit: oe,
						subredditType: ie,
						trackCommentClick: ae,
						userIconSmall: ce,
						userIsBanned: de
					} = e, le = m.isDeleted, me = !N && !le && !!f && f.length > 0, ue = Object(l.a)(c.c.edit, m.id), pe = Object(l.a)(c.c.replyToComment, m.id), be = Object(R.a)(U), Ce = Object(Xe.d)(m), he = Object($.c)(m), xe = m.authorIsContractor && ie === ut.f.EmployeesOnly, fe = m.isLocked, Oe = be && V, ge = !N && !le && (F || S), ve = S && !m.unrepliableReason, Ee = !!h && Object(pt.e)(h) === m.author, [je, ye] = Object(r.useState)(null), [_e, ke] = Object(r.useState)(null), we = Object(r.useRef)(null), Se = Object(L.f)(m) || Object(L.g)(m), Ie = Se ? Vt : dt.a, Te = Object(L.f)(m) ? Wt : Bt;
					Object(r.useEffect)(() => {
						if (!N && !le && (E && ye(o.a.createElement(Ge, null)), null !== _)) {
							if (_.glowHexColor) {
								const e = _.glowHexColor;
								ye(o.a.createElement(Ue, {
									hexColor: e
								}))
							}
							if (_.effectHighlight) {
								const {
									type: e,
									assetUrl: t
								} = _.effectHighlight;
								ke(o.a.createElement(Ke.b, {
									prefersReducedAnimation: y,
									type: e,
									assetUrl: t
								}))
							}
						}
					}, [N, le, E, y, _]);
					const Ne = Object(at.b)();
					(I || T) && Ne && k >= xt.a - 1 && ne();
					const Re = !le && !Object(L.f)(m) && (!de || de && Ee) && !Object(L.g)(m) && F,
						Pe = Object(r.useCallback)(() => {
							Re && H && !Ee && J && J(m.id)
						}, [m.id, J, Re, H, Ee]),
						Le = Object(rt.a)(m),
						Me = !!h && Object(pt.e)(h) === m.author ? null == h ? void 0 : h.accountIcon : m.profileImage,
						Fe = !(!Object(St.d)(Me) && !re) && Object(St.c)(Me);
					return o.a.createElement("div", {
						key: `comment-${m.id}`,
						className: Object(d.a)(`Comment ${m.id}`, _t.a.CommentWrapper, {
							[_t.a.highlightComment]: M,
							[_t.a.deleted]: le,
							[_t.a.focused]: v,
							[_t.a.redesign]: S,
							[_t.a.topLevel]: !x,
							[_t.a.noSpacing]: W
						})
					}, je, _e, !N && !le && P && o.a.createElement("div", {
						className: _t.a.commentPerfMarkVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n                <img alt='' src='${kt.a.assetPath}/img/renderTimingPixel.png' style='width: 1px; height: 1px;' onLoad='(__markFirstCommentVisible || function(){})();' />\n              `
						}
					}), o.a.createElement(Nt, {
						className: Object(d.a)(m.id, {
							[_t.a.hidden]: !i,
							[_t.a.visible]: i
						}),
						onClick: () => {
							s(), q(), ae("collapse", m.id)()
						},
						onMouseOver: () => z(m.id),
						onMouseOut: s
					}), o.a.createElement(Te, {
						alwaysShowChildren: !0,
						collapsed: i,
						hoverDivClassName: _t.a.AuthorHoverDiv,
						isCommentAuthorBlocked: Object(L.g)(m),
						postOrComment: m,
						tooltipIdPrefix: "AvatarUserInfoTooltip",
						tooltipType: ee ? $e.c.Lightbox : void 0
					}, o.a.createElement(Ie, {
						className: Object(d.a)(_t.a.UserIconContainer, ce && _t.a.UserIconContainerSmall),
						"data-testid": Se ? void 0 : "comment_author_icon",
						onClick: Se ? void 0 : G,
						to: `/user/${m.author}/`
					}, Ne ? o.a.createElement(o.a.Fragment, null, j && !Fe && o.a.createElement("div", {
						className: _t.a.supporterRing
					}), o.a.createElement(tt.a, {
						isNft: Fe,
						className: Object(d.a)(_t.a.UserIcon, {
							[_t.a.UserIconNft]: Fe && !Object(St.f)(Me)
						}),
						iconUrl: Me,
						isNSFW: m.profileOver18 || !1,
						nsfwIconUrl: st.a,
						userName: m.author,
						isHighlighted: M,
						shouldShowPresenceIndicator: Re && H,
						onPresenceIndicatorInViewport: Pe,
						isCommentAuthorBlocked: Object(L.g)(m),
						collapsed: i,
						shouldUseOnlineOverride: Ee,
						isOnlineOverrideValue: B,
						isOnlineStatusLoadTest: Re && D,
						authorId: m.authorId
					})) : o.a.createElement("div", {
						className: _t.a.UserIcon
					}))), o.a.createElement(Dt, {
						className: Object(d.a)({
							[_t.a.isActive]: w,
							[_t.a.isCollapsed]: i,
							[_t.a.isLocked]: fe && Oe,
							[_t.a.isPendingDeletion]: A,
							[_t.a.isRemoved]: !!m.bannedBy && Oe
						})
					}, o.a.createElement(lt.a, null, n.fbt._("level {depth}", [n.fbt._param("depth", x + 1)], {
						hk: "2XnyAV"
					})), o.a.createElement(Ft, {
						userHasNft: Fe,
						childrenInfo: t,
						className: Object(d.a)({
							[_t.a.collapsed]: i,
							[_t.a.noFlair]: Object(mt.o)(O || null)
						}),
						collapsed: i,
						collapsedBecauseCrowdControl: a,
						comment: m,
						commentsPageKey: u,
						flair: O,
						isPostComment: !0,
						onCommentAuthorClick: G,
						onCommentTimestampClick: K,
						renderedInOverlay: ee,
						renderContractorBadge: xe
					}), !i && o.a.createElement(r.Fragment, null, N && o.a.createElement(C.a, {
						className: Object(d.a)(_t.a.EditCommentForm, _t.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: u,
						depth: x,
						draftType: c.c.edit,
						draftKey: ue,
						postId: X,
						rtJson: Object(rt.a)(m),
						mediaMetadata: m.media && m.media.mediaMetadata || void 0,
						isTopLevelComment: !1,
						parentCommentId: m.id,
						submitAction: e => Object(p.j)({
							id: m.id,
							commentsPageKey: u,
							depth: x,
							draftKey: ue,
							formData: e
						}),
						submitButtonText: n.fbt._("Save Edits", null, {
							hk: "2NKEFr"
						})
					}), !N && !le && o.a.createElement("div", {
						"data-testid": ot.d,
						ref: we,
						className: Object(d.a)(_t.a.CommentBody, {
							[_t.a.restrictHeight]: !(!se || !we.current) && we.current.clientHeight > Tt
						})
					}, Q ? o.a.createElement(Ye.a, {
						comment: m,
						prediction: Q
					}) : o.a.createElement(et.a, {
						content: Le,
						mediaMetadata: m.media && m.media.mediaMetadata,
						rtJsonElementProps: Ut(e)
					}), o.a.createElement(Ct.b, {
						content: Le
					})), V && be && Ce && o.a.createElement(Ze.a, {
						thing: m
					}), V && be && he && o.a.createElement(Qe.a, {
						onIgnoreReports: Y,
						reportable: m
					}), null != g ? g : ge && o.a.createElement(Mt, null, ve && o.a.createElement(Lt, {
						downvoteButtonClassName: _t.a.voteButton,
						downvoteClassName: _t.a.upDownVote,
						model: m,
						onVoteClick: Z,
						scoreClassName: _t.a.score,
						upvoteButtonClassName: _t.a.voteButton,
						upvoteClassName: _t.a.upDownVote
					}), o.a.createElement(Rt, {
						comment: m,
						commentsPageKey: u,
						depth: x,
						isAvatarsInCommentsEnabled: S,
						collapsedBecauseCrowdControl: a,
						modModeEnabled: V,
						moderatorPermissions: b || U,
						renderedInOverlay: ee,
						isCommentFocused: v,
						subreddit: oe,
						trackCommentClick: ae
					})), me && f.map(e => o.a.createElement(Pt, {
						key: e
					}, e)), te && o.a.createElement(C.a, {
						className: Object(d.a)(_t.a.EditCommentForm, _t.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: u,
						depth: x,
						draftType: c.c.replyToComment,
						draftKey: pe,
						isTopLevelComment: !1,
						parentCommentId: m.id,
						postId: X,
						submitAction: (e, t) => {
							let {
								validate: s,
								...n
							} = e;
							return s ? Object(p.u)({
								commentsPageKey: u,
								draftKey: pe,
								parentCommentDepth: x,
								parentCommentId: m.id,
								formData: n,
								editorMode: t
							}) : Object(p.n)({
								commentsPageKey: u,
								draftKey: pe,
								parentCommentDepth: x,
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
			t.a = e => o.a.createElement(nt.a.Consumer, null, t => o.a.createElement(Gt, It({}, e, {
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
				C = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/components/CreateCommunityButton/index.m.less"),
				x = s.n(h),
				f = s("./src/lib/lessComponent.tsx");
			const O = "create-community-button",
				g = f.a.wrapped(l.c, "StyledTooltip", x.a),
				v = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(C.qb)(e),
					userIsSuspended: C.Y
				});
			t.a = Object(i.b)(v, (e, t) => {
				let {
					eventSource: s
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(b.c)(s)), e(Object(c.h)(u.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(d.f)({
						tooltipId: O
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
					id: O,
					isFullWidth: !0
				}, n.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), d ? o.a.createElement(g, {
					caretOnTop: !0,
					tooltipId: O,
					text: n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? o.a.createElement(g, {
					caretOnTop: !0,
					tooltipId: O,
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
				r = s.n(n),
				o = s("./src/lib/constants/index.ts"),
				i = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = s("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = s("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				m = s("./src/reddit/layout/row/Inline/index.tsx"),
				u = s("./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less"),
				p = s.n(u);
			const b = a.a.div("DistinguishWrapper", p.a),
				C = a.a.wrapped(m.a, "Inline", p.a),
				h = a.a.wrapped(d.a, "RadioOff", p.a),
				x = a.a.wrapped(l.a, "RadioOn", p.a),
				f = e => r.a.createElement(C, {
					onClick: e.selected ? void 0 : e.onClick
				}, e.selected ? r.a.createElement(x, null) : r.a.createElement(h, null), e.text),
				O = a.a.wrapped(e => {
					const {
						className: t,
						style: s,
						isAdminDistinguished: n,
						isUserEmployee: a,
						isUserMod: c,
						isModDistinguished: d,
						isStickied: l,
						isTopLevelComment: m,
						onDistinguishComment: u
					} = e;
					return r.a.createElement(b, {
						className: t,
						style: s
					}, r.a.createElement(f, {
						onClick: () => u(o.H.NONE, null),
						selected: !d && !n,
						text: i.fbt._("Undistinguish", null, {
							hk: "1P0FyT"
						})
					}), c && r.a.createElement(f, {
						onClick: () => u(o.H.MODERATOR, null),
						selected: d && !l,
						text: i.fbt._("Distinguish as Mod", null, {
							hk: "KDx42"
						})
					}), m && c && r.a.createElement(f, {
						onClick: () => u(o.H.MODERATOR, !0),
						selected: d && l,
						text: i.fbt._("Distinguish as Mod and Sticky", null, {
							hk: "1J1DBd"
						})
					}), a && r.a.createElement(f, {
						onClick: () => u(o.H.ADMIN, null),
						selected: n && !l,
						text: i.fbt._("Distinguish as Admin", null, {
							hk: "1JsJOX"
						})
					}), a && c && m && r.a.createElement(f, {
						onClick: () => u(o.H.ADMIN, !0),
						selected: n && l,
						text: i.fbt._("Distinguish as Admin and Sticky", null, {
							hk: "3x8QWN"
						})
					}))
				}, "DistinguishOptions", p.a);
			var g = Object(c.a)(O);
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
					tooltipId: u
				} = e;
				return r.a.createElement("div", {
					className: t,
					id: u
				}, r.a.createElement(g, {
					isAdminDistinguished: s,
					isUserEmployee: n,
					isUserMod: i,
					isModDistinguished: a,
					isOpen: e.isDropdownOpen,
					tooltipId: u,
					isStickied: c,
					isTopLevelComment: d,
					onDistinguishComment: (e, t) => {
						l(e, t), e === o.H.MODERATOR ? m(!c && t ? "distinguish_sticky" : "distinguish") : e === o.H.ADMIN ? m("admin_distinguish") : a && e !== o.H.MODERATOR ? m("undistinguish") : s && e !== o.H.ADMIN && m("admin_undistinguish"), c && !t && m("unsticky")
					}
				}))
			}
		},
		"./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less": function(e, t, s) {
			e.exports = {
				img: "_2j4blQAaYrPKIhe5jBJ9c8"
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
					C = a && Object(i.c)(a.eventStart, a.eventEnd);
				return r.a.createElement("div", {
					className: Object(o.a)(p.a.container, t, {
						[p.a.isCompact]: !!s
					})
				}, r.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, r.a.createElement(c.a, {
					post: n
				}), !u && C && r.a.createElement(d.a, {
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
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/icons/fonts/helpers.tsx"),
				d = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = s.n(d);
			var m = e => r.a.createElement("i", {
				className: Object(a.a)(Object(c.b)("scheduled", e.isFilled), l.a.calendarIcon, e.className)
			});
			var u = e => r.a.createElement("i", {
					className: Object(a.a)(Object(c.b)("live", e.isFilled), l.a.liveIcon, e.className)
				}),
				p = s("./src/reddit/components/HumanDate/index.tsx"),
				b = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				C = s.n(b),
				h = s("./src/lib/lessComponent.tsx");
			const x = h.a.span("PostEventFutureText", C.a),
				f = h.a.span("PostEventPastText", C.a),
				O = h.a.span("PostEventNowText", C.a),
				g = h.a.span("Container", C.a),
				v = h.a.wrapped(m, "CalendarIcon", C.a),
				E = h.a.wrapped(u, "LiveIcon", C.a),
				j = h.a.div("LoadingState", C.a);
			class y extends n.Component {
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
					} = s, d = Object(o.e)(c, n);
					let l, m;
					if (this.state.mounted || d === o.a.Live) l = r.a.createElement(p.c, {
						startTime: c,
						endTime: n,
						isLive: a
					});
					else {
						const e = Object(i.a)({
							isLoading: !0
						});
						l = r.a.createElement(j, {
							className: e
						})
					}
					if (a) m = r.a.createElement(O, null, r.a.createElement(E, null), l);
					else if (d === o.a.Future) m = r.a.createElement(x, null, r.a.createElement(v, null), l);
					else {
						if (d !== o.a.Past) return null;
						m = r.a.createElement(f, null, r.a.createElement(v, null), l)
					}
					return r.a.createElement(g, {
						className: e
					}, m)
				}
			}
			t.a = y
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
			const C = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				h = Object(o.b)(() => Object(i.c)({
					isNightmodeOn: u.eb
				}));
			t.a = h(e => {
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
					sandbox: C,
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
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				imageLink: "_3m20hIKOhTTeMgPnfMbVNN"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return w
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
				C = s("./src/reddit/constants/elementClassNames.ts"),
				h = s("./src/reddit/controls/OutboundLink/index.tsx"),
				x = s("./src/reddit/helpers/trackers/ads.ts"),
				f = s("./src/reddit/hooks/useClickSourceData.ts"),
				O = s("./src/reddit/models/Media/index.ts"),
				g = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/telemetry.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/constants/tracking.ts"),
				y = s("./src/reddit/components/Media/ImageBox/index.m.less"),
				_ = s.n(y);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const w = e => e > 2 * O.e,
				S = e => {
					const t = Object(d.a)(_.a.image, C.g, e.className, {
							[_.a.mShowCentered]: e.showCentered,
							[_.a.mShowBlurred]: e.shouldBlur
						}),
						s = {};
					return e.showFull || e.isTall || (s.maxHeight = `${O.j}px`), e.isListing || e.isTall && w(e.height) || (s.maxHeight = `${O.e}px`), e.isExpando && e.maxHeight && (s.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (s.maxWidth = `${e.maxWidth}px`), o.a.createElement("img", {
						alt: e.altText || n.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: s
					})
				},
				I = e => {
					const t = {};
					return (!e.showFull && Object(O.L)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${O.j}px`, e.shouldBlur && (t.maxWidth = Object(O.L)(e.height, e.width) ? `${O.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), o.a.createElement("div", {
						className: Object(d.a)(_.a.container, e.className),
						style: t
					}, e.children)
				},
				T = Object(i.b)(() => Object(c.a)(g.F, E.kb, (e, t) => {
					let {
						isSponsored: s,
						postId: n
					} = t;
					return s && n ? Object(g.b)(e, n) : null
				}, v.d, g.G, (e, t, s, n, r) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: s,
					pageType: n.pageType,
					post: r
				})));
			t.a = T(e => {
				const t = Object(f.a)();
				return e.outboundUrl && !e.shouldBlur ? o.a.createElement("a", {
					href: e.outboundUrl,
					target: "_blank",
					rel: m.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(h.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && Object(x.a)(e.post, e.pageType)
					}
				}, R(e)) : e.isListing && e.postPermalink ? o.a.createElement(a.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: Object(u.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, R(e)) : R(e)
			});
			const N = (e, t) => o.a.createElement(S, {
					altText: t.altText,
					className: Object(d.a)(t.imageClassName, {
						[j.a]: !e
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
					width: t.width
				}),
				R = e => {
					let {
						onClick: t,
						...s
					} = e;
					const r = Object(O.L)(s.height, s.width),
						i = w(s.height) && r;
					return o.a.createElement(I, k({}, s, {
						className: `${r?`${j.a} `:""}${s.className||""}`
					}), s.isListing ? o.a.createElement("div", {
						className: s.contentImageClassName
					}, N(r, s)) : o.a.createElement("a", {
						href: s.originalSource,
						onClick: t,
						style: i ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: m.c,
						className: _.a.imageLink
					}, N(r, s), s.shouldBlur && !s.isVideoThumbnail && !s.isNsfwBlockingModalEligible && o.a.createElement(p.a, {
						isNSFW: !!s.isNSFW,
						isSpoiler: !!s.isSpoiler
					})), s.isListing && !s.showFull && s.height > O.j && Object(O.L)(s.height, s.width) && o.a.createElement("div", {
						className: _.a.seeMore
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
				C = s("./src/reddit/selectors/video.ts");
			const h = 100,
				x = h / 2 / 1e3;
			var f = s("./src/lib/forceHttps/index.ts"),
				O = s("./src/lib/hooks/usePrevious.ts");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function v(e) {
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
					...u
				} = e;
				const p = Object(o.useRef)(),
					b = Object(o.useRef)(),
					C = Object(O.a)(c);

				function v(e) {
					if (e) {
						const e = null === (t = null == b ? void 0 : b.current) || void 0 === t ? void 0 : t.play();
						e && e.catch && e.catch(() => {})
					} else ! function() {
						var e;
						null === (e = null == b ? void 0 : b.current) || void 0 === e || e.pause()
					}();
					var t
				}
				return Object(o.useEffect)(() => {
					if (v(!c && (t || n)), b.current && r) return p.current = function(e, t) {
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
							4 === e.readyState ? i = !1 : !i && c >= a && c < a + x ? i = !0 : i && c >= a && c > a + x && (i = !1), a = c, r !== i && t(i)
						}, h);
						return () => {
							clearInterval(d), e.removeEventListener("playing", o), e.removeEventListener("play", o), e.removeEventListener("loadeddata", r)
						}
					}(b.current, r), () => {
						p.current && p.current()
					}
				}, []), Object(o.useEffect)(() => {
					C !== c && v(!c && (t || n))
				}, [C, c, t, n]), i.a.createElement("video", g({}, u, {
					ref: e => b.current = e,
					muted: !0
				}), i.a.createElement("source", {
					src: Object(f.a)(m || "")
				}))
			}
			var E = s("./src/reddit/components/Media/VideoBox/index.m.less"),
				j = s.n(E);
			const y = Object(c.c)({
				autoplayPref: b.b,
				consumed: C.a,
				loadTimes: C.f,
				metadata: C.h,
				started: C.k
			});

			function _(e) {
				const {
					autoplayPref: t,
					consumed: s,
					loadTimes: n,
					metadata: o,
					started: c
				} = Object(a.e)(t => y(t, e)), {
					postId: b,
					shouldLoad: C,
					source: h,
					height: x,
					isNotCardView: f,
					showFull: O,
					shouldPause: g,
					width: E,
					isListing: _,
					className: k,
					showCentered: w,
					originalSource: S,
					isPromoted: I
				} = e, T = t && !(I && Object(d.hasAcceptableAds)()), N = Object(a.d)();

				function R(e) {
					N(e ? Object(m.r)(b) : Object(m.E)(b))
				}

				function P() {
					return N(Object(m.z)({
						postId: b
					}))
				}
				const L = r()(e => {
					if (s) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && N(Object(m.s)(b))
				}, 200);

				function M(e) {
					e.persist(), L(e)
				}

				function F(e) {
					var t;
					(o || B(e), c) || (t = e.timeStamp, N(Object(m.A)(b, t)))
				}

				function D(e) {
					N(Object(m.q)(b, e.timeStamp))
				}

				function B(e) {
					! function(e) {
						N(Object(m.D)({
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

				function A(e) {
					n || F(e), o || B(e), N(Object(m.C)(b))
				}

				function H() {
					const e = {};
					return w && (e.margin = "0 auto"), _ || (e.maxHeight = `${p.e}px`), i.a.createElement(v, {
						autoplay: T,
						className: Object(l.a)(u.a, j.a.styledVideo),
						height: x,
						isListing: _,
						isNotCardView: f,
						key: b,
						loop: !0,
						onBufferingChange: R,
						onLoadStart: D,
						onLoadedData: F,
						onLoadedMetadata: B,
						onPause: P,
						onPlaying: A,
						onTimeUpdate: M,
						shouldLoad: C,
						shouldPause: g,
						showCentered: w,
						showFull: O,
						source: h,
						style: e,
						width: E
					})
				}
				return _ ? H() : i.a.createElement("div", {
					className: Object(l.a)(j.a.container, k, {
						[j.a.centered]: w
					})
				}, i.a.createElement("a", {
					href: S,
					target: "_blank",
					rel: "noopener noreferrer"
				}, H()))
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
				C = () => null;
			t.a = b(e => r.a.createElement("div", {
				className: u.a.ModActionsMenu,
				id: e.dropdownId,
				onClick: e.dropdownIsOpen ? C : e.onClick
			}, e.inCommentFlatlist ? r.a.createElement(c.a, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children) : r.a.createElement(d.c, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children)))
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
				return v
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
				C = s("./src/reddit/selectors/tooltip.ts"),
				h = s("./src/reddit/components/OverflowMenu/index.m.less"),
				x = s.n(h);
			const f = d.a.wrapped(u.a, "_Dropdown", x.a),
				O = Object(m.a)(f),
				g = d.a.button("MenuButton", x.a),
				v = d.a.wrapped(p.b, "DropdownRow", x.a),
				E = Object(a.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(C.b)(s)(e)
					}
				}),
				j = Object(i.b)(E, (e, t) => {
					let {
						dropdownId: s
					} = t;
					return {
						toggleDropdown: () => e(Object(l.h)({
							tooltipId: s
						}))
					}
				}),
				y = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = j(e => o.a.createElement(g, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": n.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(c.a)(e.className, {
					[x.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: y(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : o.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: x.a.MenuIcon
			}), o.a.createElement(O, {
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
						onClick: a,
						variant: u,
						...p
					} = e;
					return o.a.createElement("button", d({}, p, {
						className: Object(i.a)(c.a.primaryButton, l[u], m(t, u), n),
						disabled: r,
						onClick: a
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
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: i,
					post: c,
					redditStyle: m,
					theme: u,
					...p
				} = e;
				return r.a.createElement("div", l({
					className: Object(o.a)(d.a.backgroundWrapper, s),
					style: Object(a.c)(n, e),
					onClick: i
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
				C = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/telemetry.ts"),
				x = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/objectSelector/index.ts"),
				O = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				g = s("./src/reddit/components/PostContainer/index.m.less"),
				v = s.n(g);
			const E = Object(p.a)(() => Object(o.c)({
				basePixelMetadata: Object(f.a)((e, t) => {
					let {
						post: s
					} = t;
					return Object(C.b)(e, s.id)
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
					return Object(C.i)(e, {
						postId: s.id
					})
				},
				pageType: e => Object(h.d)(e).pageType
			}));
			class j extends r.a.Component {
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
						sendEvent: C,
						style: h,
						ref: f,
						shouldAddGalleryViewability: O = !0
					} = this.props, g = r.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: h,
						ref: f,
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
								e && e.outboundUrl && C(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(x.a)(v.a.WrappedPost, n, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": "post-container",
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, s), E = !!l.media && l.media.type === b.o.VIDEO;
					return l.isSponsored || E ? r.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, g) : l.media && Object(b.E)(l.media) && O ? r.a.createElement(m, {
						postId: l.id
					}, g) : g
				}
			}
			t.a = E(Object(O.a)(Object(u.c)(j)))
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
				return C
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
			const C = Object(i.b)(() => Object(a.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(d.A)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(l.c)(b))
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less": function(e, t, s) {
			e.exports = {
				ListContainer: "VHCAEHBEuD8bln8MDFl35",
				listContainer: "VHCAEHBEuD8bln8MDFl35",
				Icon: "_3WbGqnEpw_ds1P508Qawma",
				icon: "_3WbGqnEpw_ds1P508Qawma",
				DropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				dropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				text: "_1llB9GXV3OPp_55xrtgYNh",
				svgIcon: "_2mkCGM7pDFARBtuKmKCBf0"
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "h", (function() {
				return O
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "j", (function() {
				return v
			})), s.d(t, "k", (function() {
				return E
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "e", (function() {
				return k
			})), s.d(t, "g", (function() {
				return w
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/controls/Dropdown/Row.tsx"),
				a = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				d = s("./src/reddit/icons/fonts/Envelope/index.tsx"),
				l = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				m = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				u = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				p = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				b = s("./src/reddit/icons/svgs/CircleCheckLight/index.tsx"),
				C = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				h = s.n(C);
			const x = o.a.wrapped(c.a, "Icon", h.a),
				f = o.a.wrapped(d.a, "Icon", h.a),
				O = o.a.wrapped(l.a, "Icon", h.a),
				g = o.a.wrapped(m.a, "Icon", h.a),
				v = o.a.wrapped(u.a, "Icon", h.a),
				E = o.a.wrapped(p.a, "Icon", h.a),
				j = () => r.a.createElement(a.a, {
					name: "mod_mute",
					className: h.a.Icon
				}),
				y = () => r.a.createElement(a.a, {
					name: "calendar",
					className: h.a.Icon
				}),
				_ = () => r.a.createElement(b.a, {
					className: h.a.svgIcon
				}),
				k = o.a.wrapped(i.b, "DropdownRow", h.a),
				w = o.a.div("ListContainer", h.a)
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
				C = c.a.wrapped(e => {
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
			t.a = b(Object(a.a)(C))
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
				importAsync: () => Promise.all([s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx")),
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
					importAsync: () => Promise.all([s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx")),
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
				C = ["left", "bottom"],
				h = u.a.span("InnerSpan", m.a),
				x = u.a.span("TooltipTarget", m.a),
				f = u.a.span("SpoilerWrapper", m.a),
				O = u.a.wrapped(e => {
					let {
						className: t,
						isOpen: s,
						...n
					} = e;
					return o.a.createElement(f, p({}, n, {
						className: Object(i.a)(t, {
							[m.a.isOpen]: s
						})
					}))
				}, "SpoilerWrapper", m.a),
				g = Object(d.a)(u.a.wrapped(c.b, "Component", m.a), [a.a.Click, a.a.Keydown]);
			class v extends o.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.onClick = e => {
						const {
							isOpen: t
						} = this.state;
						t || (e.preventDefault(), e.stopPropagation(), this.setState({
							isOpen: !0
						}))
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
					return o.a.createElement(O, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, o.a.createElement(h, null, o.a.createElement(x, {
						innerRef: this.setTooltipTargetRef
					}), o.a.createElement(g, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: n.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: b,
						tooltipPosition: C
					}), this.props.children))
				}
			}
			t.a = v
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
				return C
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "v", (function() {
				return x
			})), s.d(t, "i", (function() {
				return f
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "u", (function() {
				return v
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "l", (function() {
				return j
			})), s.d(t, "m", (function() {
				return y
			})), s.d(t, "n", (function() {
				return _
			})), s.d(t, "t", (function() {
				return k
			})), s.d(t, "p", (function() {
				return w
			})), s.d(t, "o", (function() {
				return S
			})), s.d(t, "q", (function() {
				return I
			})), s.d(t, "s", (function() {
				return T
			})), s.d(t, "r", (function() {
				return N
			})), s.d(t, "a", (function() {
				return R
			})), s.d(t, "w", (function() {
				return P
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
				C = c.a.p("P", a.a),
				h = c.a.li("Li", a.a),
				x = c.a.ul("Ul", a.a),
				f = c.a.ol("Ol", a.a),
				O = c.a.strong("B", a.a),
				g = c.a.em("I", a.a),
				v = c.a.span("U", a.a),
				E = e => r.a.createElement("del", e),
				j = c.a.sub("Sub", a.a),
				y = c.a.sup("Sup", a.a),
				_ = c.a.table("Table", a.a),
				k = c.a.tr("Tr", a.a),
				w = c.a.td("Tdl", a.a),
				S = c.a.td("Tdc", a.a),
				I = c.a.td("Tdr", a.a),
				T = c.a.th("Thl", a.a),
				N = c.a.th("Thc", a.a),
				R = (c.a.th("Thr", a.a), c.a.wrapped(e => r.a.createElement(o.b, e), "A", a.a)),
				P = c.a.wrapped(d.a, "A", a.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return y
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "a", (function() {
				return w
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
				p = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				b = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				C = s("./src/reddit/models/RichTextJson/index.ts"),
				h = s("./src/reddit/components/RichTextJson/media.tsx"),
				x = s("./src/reddit/components/RichTextJson/renderers.tsx"),
				f = s("./src/reddit/components/RichTextJson/index.m.less"),
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
			const v = s("./src/lib/lessComponent.tsx").a.div("Container", O.a),
				E = Object(d.a)(e => {
					let {
						flairStyleTemplate: t,
						theme: s,
						...n
					} = e;
					return a.a.createElement(v, g({}, n, {
						style: {
							color: Object(b.a)(Object(p.a)({
								flairStyleTemplate: t,
								theme: s,
								...n
							}))
						}
					}))
				}),
				j = e => e.e === C.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== C.u || !!e.c && !e.c.every(e => e.e === C.A && !e.t),
				y = e => o()(e, j),
				_ = e => e.findIndex(j),
				k = e => {
					const {
						altText: t,
						className: s,
						content: n,
						isListing: r,
						isNSFW: o,
						isNsfwBlockingModalEligible: i,
						isSpoiler: d,
						onClickRevealBlurred: l,
						postId: p,
						renderMediaAsLinks: b,
						rtJsonElementProps: f,
						useExplicitTextColor: g,
						shouldBlur: j
					} = e, k = n.document, w = [], S = e.mediaMetadata || null, I = _(k), T = y(k);
					if (j && !r && !i) return a.a.createElement(v, {
						className: Object(c.a)(u.j, s)
					}, a.a.createElement("div", {
						className: O.a.unblurButtonContainer
					}, a.a.createElement("button", {
						className: O.a.unblurButton,
						onClick: l
					}, Object(m.b)(!!o, !!d))));
					if (-1 !== I)
						for (let a = I; a <= T; a++) {
							const e = k[a];
							switch (e.e) {
								case C.k:
									w.push(x.c(e, f, a));
									break;
								case C.l:
									w.push(x.d(a));
									break;
								case C.b:
									w.push(x.a(e, S, f, a));
									break;
								case C.c:
									w.push(x.b(e, a));
									break;
								case C.p:
									w.push(x.f(e, S, f, a));
									break;
								case C.z:
									w.push(x.h(e, S, f, a));
									break;
								case C.u:
									w.push(x.g(e, S, f, a));
									break;
								case C.h:
									w.push(Object(h.a)(e, a));
									break;
								case C.m:
								case C.a:
								case C.D:
									w.push(...Object(h.b)(e, a, S, b, p, t))
							}
						}
					return g ? a.a.createElement(v, {
						className: Object(c.a)(u.j, s)
					}, w) : a.a.createElement(E, {
						className: Object(c.a)(u.j, s),
						flairStyleTemplate: e.flairStyleTemplate
					}, w)
				};
			class w extends a.a.Component {
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
						return k(t)
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
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				giphy: "_3J81Ds3WITP7zlq_PlUmGf"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return k
			})), s.d(t, "b", (function() {
				return S
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
				p = s("./src/reddit/helpers/richTextJson/index.ts"),
				b = s("./src/reddit/models/RichTextJson/index.ts"),
				C = s("./src/reddit/components/RichTextJson/elements.tsx"),
				h = s("./src/reddit/components/RichTextJson/media.m.less"),
				x = s.n(h),
				f = s("./src/lib/lessComponent.tsx");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const g = /\/(\w+)\/asset\/(\w+)\//,
				v = f.a.wrapped(C.a, "A", x.a),
				E = f.a.wrapped(l.a, "ImageBox", x.a),
				j = f.a.wrapped(e => o.a.createElement("p", e), "Caption", x.a),
				y = f.a.div("Placeholder", x.a),
				_ = f.a.wrapped(e => {
					let {
						className: t,
						e: s,
						...r
					} = e;
					const i = s === b.D ? n.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : n.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return o.a.createElement(y, O({
						className: t,
						style: {
							"--placeholder-content-text": `'${i}'`
						}
					}, r))
				}, "Placeholder", x.a),
				k = (e, t) => {
					let {
						c: s,
						x: n,
						y: r
					} = e;
					return o.a.createElement("div", {
						className: x.a.MediaWrapper
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
				w = (e, t, s) => {
					const n = e.c;
					let r = "";
					return s && (s.e === b.s ? r = s.s.u : s.e === b.r ? r = s.s.gif : s.e === b.t && (r = (e => {
						const t = g.exec(e);
						return t ? `${a.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(s.dashUrl))), r ? o.a.createElement(v, {
						href: r,
						key: t,
						title: n
					}, n || r) : null
				},
				S = (e, t, s, n, r, a) => {
					const d = b.E(s, e.id);
					if (n) return [w(e, t, d)];
					const l = [];
					return d ? d.e === b.s ? l.push(((e, t, s, n) => {
						let {
							id: r,
							s: a
						} = e;
						return o.a.createElement("div", {
							className: Object(i.a)(x.a.MediaWrapper, {
								[x.a.mHasCaption]: s
							})
						}, o.a.createElement(m.a, {
							height: a.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: a.x
						}, o.a.createElement(E, {
							altText: n,
							originalSource: a.u,
							postId: r,
							source: a.u,
							height: a.y,
							width: a.x,
							shouldBlur: !1,
							showCentered: !0,
							showFull: !0,
							isListing: !1
						})))
					})(d, t, !!e.c, a)) : d.e === b.r ? l.push(((e, t, s) => {
						let {
							id: n,
							ext: r,
							s: a
						} = e;
						if (Object(p.g)(n)) {
							const e = r || Object(p.f)(n);
							return o.a.createElement("div", {
								className: Object(i.a)(x.a.MediaWrapper, {
									[x.a.mHasCaption]: s
								})
							}, o.a.createElement(v, {
								href: e,
								key: t,
								target: "_blank"
							}, a.mp4 ? o.a.createElement("video", {
								className: x.a.giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, o.a.createElement("source", {
								src: a.mp4
							})) : {
								originalSource: e
							}))
						}
						return o.a.createElement("div", {
							className: Object(i.a)(x.a.MediaWrapper, {
								[x.a.mHasCaption]: s
							})
						}, o.a.createElement(m.a, {
							height: a.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: a.x
						}, o.a.createElement(u.a, {
							height: a.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: a.mp4,
							width: a.x,
							postId: n,
							source: a.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(d, t, !!e.c)) : d.e === b.t && l.push(((e, t, s, n) => {
						let {
							hlsUrl: r,
							dashUrl: a,
							x: d,
							y: l,
							isGif: u
						} = e;
						return o.a.createElement("div", {
							className: Object(i.a)(x.a.MediaWrapper, {
								[x.a.mHasCaption]: s
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
							autoPlay: u,
							hlsSource: r,
							mpegDashSource: a,
							postId: n,
							isGif: u
						})))
					})(d, t, !!e.c, r)) : l.push(((e, t) => o.a.createElement(_, {
						e,
						key: t
					}))(e.e, t)), e.c && l.push(((e, t) => o.a.createElement(j, {
						key: t
					}, e))(e.c, `caption${t}`)), l
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return R
			})), s.d(t, "d", (function() {
				return P
			})), s.d(t, "a", (function() {
				return L
			})), s.d(t, "b", (function() {
				return M
			})), s.d(t, "f", (function() {
				return F
			})), s.d(t, "h", (function() {
				return B
			})), s.d(t, "g", (function() {
				return A
			})), s.d(t, "i", (function() {
				return H
			})), s.d(t, "e", (function() {
				return U
			}));
			var n = s("./src/lib/unicodeUtils/index.ts"),
				r = s("./node_modules/lodash/reduce.js"),
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./src/reddit/components/RichTextJson/elements.tsx"),
				d = s("./node_modules/uuid/v4.js"),
				l = s.n(d),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/models/Product/index.ts"),
				p = s("./src/reddit/models/RichTextJson/index.ts"),
				b = s("./src/reddit/selectors/telemetry.ts"),
				C = s("./src/higherOrderComponents/makeAsync.tsx");
			var h = Object(C.a)({
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
			class E extends a.a.Component {
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
							const s = b.n(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...s,
								actionInfo: {
									...s.actionInfo,
									reason: this.props.node.id
								},
								subreddit: b.gb(t)
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
					t.e === p.s ? (s = t.s.x, n = t.s.y, r = t.s.u) : t.e === p.r && (s = t.s.x, n = t.s.y, r = t.s.gif);
					const o = this.state.tooltipOpen ? l()() : void 0;
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
						title: `:${Object(u.b)(e.id)}:`
					}), this.state.tooltipOpen && a.a.createElement(h, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: o,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var j = Object(m.c)(E),
				y = s("./src/reddit/components/RichTextJson/media.tsx"),
				_ = s("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				k = s("./src/reddit/components/SubredditMention/index.tsx"),
				w = s("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				S = s("./src/reddit/helpers/isComment.ts"),
				I = s("./src/reddit/helpers/isPost.ts"),
				T = s("./src/reddit/helpers/richTextJson/index.ts"),
				N = s("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const R = (e, t, s) => {
					const n = e.c || [],
						r = e.l,
						o = [],
						i = n.length;
					for (let a = 0; a < i; a++) {
						const e = n[a];
						o.push(e.e === p.w ? e.t : U(e, t, a))
					}
					const d = c.x[r - 1];
					return a.a.createElement(d, {
						key: s
					}, o)
				},
				P = e => a.a.createElement(c.e, {
					key: e
				}),
				L = (e, t, s, n) => {
					const r = e.c;
					if (!r) return;
					const o = r.length,
						i = [];
					for (let a = 0; a < o; a++) i.push(D(r[a], t, s, a));
					return a.a.createElement(c.c, {
						key: n
					}, i)
				},
				M = (e, t) => {
					const s = e.c;
					return a.a.createElement(c.k, {
						key: t
					}, a.a.createElement(c.h, null, s.reduce((e, t, s, n) => e += t.t + (s < n.length ? "\n" : ""), "")))
				},
				F = (e, t, s, n) => {
					const r = e.c,
						o = [],
						i = r.length;
					for (let l = 0; l < i; l++) {
						const e = r[l].c;
						e && e.length && o.push(a.a.createElement(c.g, {
							key: l
						}, e.map((e, n) => D(e, t, s, n))))
					}
					const d = e.o ? c.i : c.v;
					return a.a.createElement(d, {
						key: n
					}, o)
				},
				D = (e, t, s, n) => {
					switch (e.e) {
						case p.b:
							return L(e, t, s, n);
						case p.c:
							return M(e, n);
						case p.k:
							return R(e, s, n);
						case p.l:
							return P(n);
						case p.p:
							return F(e, t, s, n);
						case p.u:
							return A(e, t, s, n);
						case p.z:
							return B(e, t, s, n)
					}
				},
				B = (e, t, s, n) => {
					const r = e.c,
						o = e.h,
						i = r.length,
						d = o.length,
						l = [],
						m = [],
						u = [];
					for (let c = 0; c < d; c++) {
						const e = o[c],
							{
								H: n,
								D: r
							} = K(e.a),
							{
								c: i = []
							} = e;
						l.push(a.a.createElement(n, {
							key: c
						}, H(i, t, s))), u[c] = r
					}
					for (let p = 0; p < i; p++) {
						const e = r[p],
							n = e.length,
							o = [];
						for (let r = 0; r < n; r++) {
							const n = u[r],
								{
									c: i = []
								} = e[r];
							o.push(a.a.createElement(n, {
								key: r
							}, H(i, t, s)))
						}
						m.push(a.a.createElement(c.t, {
							key: p
						}, o))
					}
					return a.a.createElement(c.n, {
						key: n
					}, a.a.createElement("thead", null, a.a.createElement(c.t, null, l)), a.a.createElement("tbody", null, m))
				},
				A = (e, t, s, n) => {
					if (!e.c || !e.c.length) return (e => a.a.createElement(c.j, {
						key: e
					}, a.a.createElement("br", null)))(n);
					const r = e.c[0];
					return r.e !== p.m && r.e !== p.a || !Object(T.g)(r.id) ? a.a.createElement(c.j, {
						key: n
					}, H(e.c, t, s)) : Object(y.b)(r, n, t)
				},
				H = (e, t, s) => {
					const n = [],
						r = e.length;
					for (let o = 0; o < r; o++) {
						const r = e[o];
						if (r.e === p.A) n.push(V(r, o));
						else if (r.e === p.x) n.push(a.a.createElement(_.a, {
							key: o
						}, H(r.c, t, s)));
						else if (r.e === p.n) n.push(a.a.createElement("br", {
							key: o
						}));
						else if (r.e === p.m || r.e === p.a) {
							if (r.id.startsWith("emote|")) {
								const e = p.E(t, r.id);
								e && n.push(a.a.createElement(j, {
									key: o,
									node: r,
									media: e
								}))
							}
						} else n.push(U(r, s, o))
					}
					return n
				},
				U = (e, t, s) => {
					switch (e.e) {
						case p.o:
							const n = V({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(w.b)(e.u)) return a.a.createElement(c.w, {
								to: e.u,
								key: s,
								title: e.a
							}, n);
							let r, o;
							const i = Object(N.a)(t),
								d = t.renderingObjectInfo;
							return d && Object(I.b)(d) && (r = d.postId), d && Object(S.b)(d) && (o = d.id, r = d.postId), a.a.createElement(c.a, {
								href: e.u,
								key: s,
								title: e.a,
								sourceElement: i,
								postId: r,
								commentId: o
							}, n);
						case p.y:
							return a.a.createElement(k.b, {
								key: s,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case p.B:
						case p.C:
							return a.a.createElement(c.a, {
								href: `/u/${e.t}/`,
								key: s
							}, `${e.l?"/":""}u/${e.t}`);
						case p.g:
						case p.v:
							return a.a.createElement(c.a, {
								href: e.t,
								key: s
							}, e.t)
					}
				},
				V = (e, t) => {
					const {
						f: s,
						t: r
					} = e, o = [];
					if (!s) return G(0, r, t);
					const i = Object(n.a)(r);
					let a = 0,
						c = 0;
					const d = s.length;
					for (; a < d; a++) {
						const [e, t, n] = s[a], d = t + n, l = i[t], m = i[d] - l;
						l > c && o.push(G(0, r.substr(c, l - c), `between${a}`)), o.push(G(e, r.substr(l, m), a)), c = l + m
					}
					return c < r.length && o.push(G(0, r.substr(c), `remaining${a}`)), o
				},
				W = {
					[p.j.monospace]: c.h,
					[p.j.bold]: c.b,
					[p.j.italic]: c.f,
					[p.j.underline]: c.u,
					[p.j.strikethrough]: c.d,
					[p.j.subscript]: c.l,
					[p.j.superscript]: c.m
				},
				G = (e, t, s) => {
					let n = t;
					return n = o()(W, (t, n, r) => e & parseInt(r, 10) ? a.a.createElement(n, {
						key: s
					}, t) : t, n)
				},
				K = e => {
					switch (e) {
						case p.f:
							return {
								H: c.r, D: c.q
							};
						case p.d:
							return {
								H: c.r, D: c.o
							};
						case p.e:
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
				postItemTitleContainer: "_19FzInkloQSdrf0rh3Omen",
				postItemFlatlistContainer: "HNL__wz5plDpzJe5Lnn",
				outboundLink: "a6Bzb7gqvN3mqBOAEyFIv",
				thumbnail: "_2r9BZFotuBbLYnijAaskeZ",
				thumbnailContainer: "Gk-MlLujgqsaX1n-sGa_O",
				syntaxHighlight: "_1Nh8xLEUG3orjY1k1aijj"
			}
		},
		"./src/reddit/components/SearchPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return W
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
				C = s("./src/reddit/components/PostContainer/index.tsx"),
				h = s("./src/reddit/components/PostTitle/index.tsx"),
				x = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				f = s("./src/reddit/components/SearchPostFlatlist/index.tsx"),
				O = s("./src/reddit/components/SearchPostMeta/index.tsx"),
				g = s("./src/reddit/components/Thumbnail/index.tsx"),
				v = s("./node_modules/react-redux/es/index.js"),
				E = s("./node_modules/reselect/es/index.js"),
				j = s("./src/reddit/actions/post.ts"),
				y = s("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = s("./src/reddit/selectors/moderatorPermissions.ts"),
				k = s("./src/reddit/selectors/poll/index.ts"),
				w = s("./src/reddit/selectors/postFlair.ts"),
				S = s("./src/reddit/selectors/posts.ts"),
				I = s("./src/reddit/selectors/user.ts");
			const T = {
					crosspost: S.d,
					isActive: S.j,
					isLoggedIn: I.R,
					moderatorPermissions: _.m,
					modModeEnabled: y.T,
					poll: k.e,
					showEditFlair: w.a,
					flairStyleTemplate: y.V
				},
				N = () => Object(E.c)(T);
			var R = s("./src/reddit/contexts/Post/index.tsx"),
				P = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				L = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				M = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				F = s("./src/reddit/models/Media/index.ts"),
				D = s("./src/lib/isUrl/index.ts");
			const B = new(s("./src/lib/LRUCache/index.ts").a)(250);
			var A = s("./src/reddit/components/SearchPost/index.m.less"),
				H = s.n(A);

			function U() {
				return (U = Object.assign || function(e) {
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
						first: v,
						flairStyleTemplate: E,
						isLoggedIn: j,
						isOverlay: y,
						moderatorPermissions: _,
						modModeEnabled: k,
						onClickPost: w,
						onClickPostAuthor: S,
						onClickPostCommunity: I,
						onClickPostTimestamp: T,
						onIgnoreReports: N,
						poll: R,
						post: A,
						redditStyle: V,
						searchQuery: W,
						showBulkActionCheckbox: G,
						subredditOrProfile: K,
						title: q
					} = e, Y = V ? void 0 : E, z = s || void 0, J = Object(L.a)(_), Z = Object(m.d)(A), X = Object(p.c)(A), Q = Object(g.b)({
						crosspost: s,
						post: A,
						url: void 0,
						usePreview: !1
					}), $ = Q && Object(D.a)(Q), ee = !!A.media && Object(F.H)(A.media), te = !j, se = Object(n.useMemo)(() => q ? void 0 : ((e, t, s) => {
						const n = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
						return e => {
							const o = `${e.id}-${n}`;
							let i = B.get(o);
							if (void 0 === i) {
								const a = new RegExp(`(\\b${n}\\b)`, "gi"),
									c = e.title.split(a);
								i = s(r.a.createElement(r.a.Fragment, null, r.a.Children.toArray(c.map((e, s) => s % 2 != 0 ? t(e) : e)))), B.set(o, i)
							}
							return i
						}
					})(W, e => r.a.createElement("span", {
						className: Object(o.a)(H.a.syntaxHighlight)
					}, e), e => e), [q, W]), ne = {
						flairStyleTemplate: Y,
						isOverlay: y,
						onClickPostAuthor: S,
						onClickPostCommunity: I,
						onClickPostTimestamp: T,
						post: A,
						shouldShowSubscribeButton: te,
						subredditOrProfile: K
					}, re = null != q ? q : r.a.createElement("div", {
						className: H.a.postItemTitleContainer
					}, r.a.createElement("div", null, r.a.createElement(h.c, {
						format: se,
						hideSourceLink: !0,
						poll: R,
						post: A,
						redditStyle: V,
						size: h.b.Medium,
						titleColor: Y && Y.postTitleColor,
						isOverlay: y
					}), A.source && !z && r.a.createElement(P.a, {
						className: H.a.outboundLink,
						href: A.source.url,
						isSponsored: A.isSponsored,
						postId: A.id,
						source: A.source
					}, Object(a.a)(A))), $ && r.a.createElement("div", {
						className: H.a.thumbnailContainer
					}, r.a.createElement(g.a, {
						className: H.a.thumbnail,
						crosspost: z && A,
						isMeta: A.isMeta,
						post: z || A,
						redditStyle: V,
						templatePlaceholderImage: Y && Y.postPlaceholderImage,
						removeLink: ee
					}))), oe = r.a.createElement(C.a, {
						className: Object(o.a)(H.a.postContainer, Object(M.a)(e), v ? H.a.mFirst : void 0, t),
						eventFactory: i,
						isOverlay: y,
						onClick: w,
						post: A,
						style: {
							...Object(M.d)(e),
							...Object(M.b)(Y)
						}
					}, r.a.createElement(b.a, {
						"data-click-id": "background",
						flairStyleTemplate: Y,
						redditStyle: !0
					}, r.a.createElement(c.a, {
						className: H.a.eventMeta,
						post: A
					}), r.a.createElement("div", {
						className: Object(o.a)(H.a.postContent, {
							[H.a.showBulkActionCheckbox]: G
						}),
						"data-click-id": "body"
					}, r.a.createElement(O.a, U({
						className: H.a.postItemMetaContainer,
						key: "PostMeta"
					}, ne)), re, k && J && Z && r.a.createElement(l.a, {
						thing: A
					}), k && J && X && r.a.createElement(u.a, {
						onIgnoreReports: N,
						reportable: A
					}), r.a.createElement(f.c, {
						className: Object(o.a)(H.a.postItemFlatlistContainer),
						post: A
					}), r.a.createElement(d.d, null))));
					return r.a.createElement(x.b, null, oe)
				}),
				W = Object(R.b)((e => t => {
					const s = Object(y.eb)(),
						n = ((e, t) => {
							let {
								postId: s
							} = t;
							return {
								onIgnoreReports: () => e(Object(j.gb)(s))
							}
						})(Object(v.d)(), {
							...t
						}),
						o = Object(y.Z)(s),
						i = Object(v.e)(N),
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
						awardCountsById: t
					} = e;
					const s = Object.values(t || {}).reduce((e, t) => e += t, 0);
					return o.a.createElement("span", {
						className: Object(i.a)(d.a.flatlistItem)
					}, n.fbt._({
						"*": "{awardsCount} awards",
						_1: "{awardsCount} award"
					}, [n.fbt._param("awardsCount", Object(a.b)(s)), n.fbt._plural(s)], {
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
					awardCountsById: t.awardCountsById
				}))
			}
		},
		"./src/reddit/components/SearchPostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				hovercardContainer: "_3Wz607wX-KXslTUjYvTZWi",
				metaContainer: "_3xeOZ4NlqvpwzbB5E8QC6r",
				postTopMeta: "_1wxi9M8fCejzbsH0YGSer2",
				subredditName: "_305seOZmrgus3clHOXCmfs",
				subredditIcon: "id5ExZR7GqiUypGICnSYs",
				SubscribeButton: "_2vYQV4h1KDa5M62EoOG3t-",
				subscribeButton: "_2vYQV4h1KDa5M62EoOG3t-"
			}
		},
		"./src/reddit/components/SearchPostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				a = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = s("./src/reddit/components/PostTopMeta/index.tsx"),
				d = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				l = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				m = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				u = s("./src/reddit/hooks/useClickSourceData.ts"),
				p = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				b = s("./src/reddit/components/SearchPostMeta/index.m.less"),
				C = s.n(b);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					onClickPostAuthor: r,
					onClickPostCommunity: b,
					onClickPostTimestamp: h,
					post: x,
					subredditOrProfile: f,
					tooltipType: O
				} = e, g = Object(u.a)();
				return o.a.createElement("div", {
					className: Object(n.a)(t, C.a.metaContainer)
				}, !x.isSponsored && f && o.a.createElement(i.a, {
					className: Object(n.a)(C.a.hovercardContainer, C.a.hovercardContainer),
					postId: x.id,
					subredditName: f.name
				}, o.a.createElement(p.b, {
					className: C.a.subredditIcon,
					linkTo: f.url,
					linkProps: b ? {
						"data-testid": "subreddit_icon_link",
						onClick: b
					} : void 0,
					subredditOrProfile: f
				}), o.a.createElement(l.a, {
					className: C.a.subredditName,
					"data-testid": "subreddit-name",
					"data-click-id": "subreddit",
					onClick: b,
					to: {
						pathname: f.url,
						state: g
					}
				}, f.displayText)), f && f.isQuarantined && o.a.createElement(d.a, null), !x.isSponsored && o.a.createElement(o.a.Fragment, null, o.a.createElement(m.b, null), o.a.createElement(a.h, {
					type: x.belongsTo.type,
					id: x.belongsTo.id
				})), o.a.createElement(c.d, {
					className: C.a.postTopMeta,
					flairStyleTemplate: s,
					onClickPostAuthor: r,
					onClickPostTimestamp: h,
					post: x,
					tooltipType: O
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
				container: "ei8_Bq_te0jjwNIqmk8Tw",
				sidebar: "iwmtpuJa21jtA4y_LuOVI",
				mFirst: "YLZe4_XS9hOtObp1VjEF-",
				subredditIcon: "_2YBzxh6YUsSdcmbcJ-kE5L",
				contentContainer: "_1Nla8vW02K39sy0E826Iug",
				subredditInfo: "_1nTSkRaTteYjCY91DwVEF3",
				title: "_2torGbn_fNOMbGw3UAasPl",
				subtitle: "_3CUjJH8t2eFynKUAv1ER7C",
				flair: "_3sOM1thDS-RiUzmUb8yzxN",
				description: "_3JYXhJlwZCvjZTBplEncbq",
				buttonContainer: "_3llSmEBMCJTcO537oPxHIH"
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
				text: "_1tEoY-vmgG3yWH6hCdgy3p"
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
				return ge
			})), s.d(t, "b", (function() {
				return _e
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
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				C = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/trackers/screenview.ts"),
				x = s("./src/reddit/selectors/searchResults.ts"),
				f = s("./src/reddit/selectors/tracking.ts"),
				O = s("./src/telemetry/index.ts"),
				g = s("./src/telemetry/models/Timer.ts"),
				v = s("./node_modules/fbt/lib/FbtPublic.js"),
				E = s("./node_modules/lodash/noop.js"),
				j = s.n(E),
				y = s("./node_modules/react-router-redux/es/index.js"),
				_ = s("./src/lib/classNames/index.ts"),
				k = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				w = s("./src/reddit/components/Comments/Comment/index.tsx"),
				S = s("./src/reddit/components/PostList/index.tsx"),
				I = s("./src/reddit/components/PostTitle/index.tsx"),
				T = s("./src/reddit/components/SearchPost/index.tsx"),
				N = s("./src/reddit/connectors/PostList/index.ts"),
				R = s("./src/reddit/contexts/Visibility.tsx"),
				P = s("./src/reddit/controls/Button/index.tsx"),
				L = s("./src/reddit/controls/Button/index.m.less"),
				M = s.n(L),
				F = s("./src/reddit/helpers/trackers/searchResults.ts"),
				D = s("./src/reddit/hooks/useClickSourceData.ts"),
				B = s("./src/reddit/hooks/useTracking.ts"),
				A = s("./src/reddit/selectors/comments.ts"),
				H = s("./src/reddit/selectors/commentSelector.ts"),
				U = s("./src/reddit/selectors/posts.ts"),
				V = s("./src/reddit/components/SearchPostFlatlist/index.tsx");

			function W(e) {
				let {
					className: t,
					comment: s
				} = e;
				return i.a.createElement(V.b, {
					className: t
				}, i.a.createElement(V.d, {
					score: s.score
				}), i.a.createElement(V.a, {
					awardCountsById: s.awardCountsById
				}))
			}
			var G = s("./src/reddit/components/SearchResultsContent/Comment/index.m.less"),
				K = s.n(G);
			var q;
			! function(e) {
				e.COMMENT = "comment", e.COMMENT_AUTHOR = "comment_author", e.COMMENT_TIMESTAMP = "comment_timestamp", e.GO_TO_THREAD_LINK = "go_to_thread_link", e.POST = "post", e.POST_AUTHOR = "post_author", e.POST_COMMUNITY = "post_community", e.POST_TIMESTAMP = "post_timestamp"
			}(q || (q = {}));
			var Y = s("./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.tsx"),
				z = s("./src/lib/truncateText/index.ts"),
				J = s("./src/reddit/actions/post.ts"),
				Z = s("./src/reddit/components/Flair/index.tsx"),
				X = s("./src/lib/prettyPrintNumber/index.ts"),
				Q = s("./src/reddit/components/SubscribeButton/index.tsx"),
				$ = s("./src/reddit/helpers/karma.ts");
			var ee = s("./src/reddit/constants/tracking.ts"),
				te = s("./src/reddit/helpers/correlationIdTracker.ts"),
				se = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				ne = s("./src/reddit/selectors/telemetry.ts");
			var re = s("./src/reddit/components/SubredditIcon/index.tsx"),
				oe = s("./src/reddit/constants/posts.ts"),
				ie = s("./src/reddit/controls/InternalLink/index.tsx"),
				ae = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				ce = s("./src/reddit/models/Flair/index.ts"),
				de = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				le = s("./src/reddit/selectors/subreddit.ts"),
				me = s("./src/reddit/selectors/user.ts"),
				ue = s("./src/reddit/components/SearchResultsContent/Community/index.m.less"),
				pe = s.n(ue);
			const be = Object(c.c)({
					isBlockingInterstitialEnabled: de.b,
					isBlockingInterstitialV2Enabled: de.c,
					hideNSFWPref: me.G,
					subredditOrProfile: le.M,
					subredditOrProfileAboutInfo: le.I,
					userIsSubscriber: le.gb
				}),
				Ce = e => {
					const {
						className: t,
						first: s,
						identifier: n,
						listingKey: r,
						searchOptions: c,
						sidebar: d
					} = e, l = Object(C.eb)(), m = Object(B.a)(), u = Object(D.a)(), {
						isBlockingInterstitialEnabled: p,
						isBlockingInterstitialV2Enabled: b,
						hideNSFWPref: h,
						subredditOrProfile: x,
						subredditOrProfileAboutInfo: f
					} = Object(a.e)(t => be(t, e)), O = Object(a.d)(), g = Object(o.useCallback)(e => {
						x && n.type === oe.a.PROFILE && (p || b) && (e.preventDefault(), O(Object(J.db)(x.url))), m(Object(F.q)(c, l, n, r))
					}, [m, c, l, r, n, p, b, O, x]);
					if (!x) return null;
					const E = x.displayText,
						j = f.publicDescription,
						y = ((e, t) => {
							if ("subreddit" !== e) {
								const e = t,
									s = Object($.a)(e),
									n = Object(X.b)(s);
								return v.fbt._({
									"*": "{karma count} Karma",
									_1: "1 Karma"
								}, [v.fbt._plural(s, "karma count", n)], {
									hk: "4r0tyT"
								})
							}
							const s = t;
							return "number" == typeof s.subscribers ? v.fbt._({
								"*": "{number of subscribers} Members",
								_1: "1 Member"
							}, [v.fbt._plural(s.subscribers, "number of subscribers", Object(X.b)(s.subscribers))], {
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
							if ("subreddit" !== t) return s.acceptFollowers ? i.a.createElement(Q.a, {
								getEventFactory: o,
								identifier: {
									name: s.name,
									type: "profile"
								},
								onClick: r,
								priority: a,
								small: !0
							}) : null;
							return "number" == typeof n.subscribers ? i.a.createElement(Q.a, {
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
									const r = ne.F(n, void 0);
									return {
										source: F.c.SEARCH,
										action: ee.c.CLICK,
										noun: `${s}_${F.d[e.type]}`,
										actionInfo: Object(F.k)(n, void 0, r, void 0),
										correlationId: Object(te.c)(te.a.SearchResults),
										profile: "profile" === e.type ? ne.U(n, e.id) : void 0,
										search: ne.Z(n, t, se.a.SERP),
										subreddit: "subreddit" === e.type ? ne.kb(n, e.id) : void 0
									}
								})(n, c, e ? "unsubscribe" : "subscribe")
							},
							priority: P.c.Tertiary
						});
					return i.a.createElement(ie.a, {
						"data-testid": `${n.type}-link`,
						className: Object(_.a)(pe.a.container, d && pe.a.sidebar, s ? pe.a.mFirst : void 0, t),
						onClick: g,
						to: {
							pathname: x.url,
							state: u
						}
					}, i.a.createElement(re.b, {
						className: pe.a.subredditIcon,
						shouldHideNsfwIcon: h,
						subredditOrProfile: x
					}), i.a.createElement("div", {
						className: pe.a.contentContainer
					}, i.a.createElement("div", {
						className: Object(_.a)(pe.a.subredditInfo, d && pe.a.sidebar)
					}, i.a.createElement("h6", {
						className: pe.a.title
					}, E), x.isNSFW && i.a.createElement(Z.b, {
						className: pe.a.flair,
						flair: {
							type: ce.f.Nsfw,
							text: v.fbt._("nsfw", null, {
								hk: "2nrY5X"
							})
						}
					}), y && i.a.createElement(i.a.Fragment, null, i.a.createElement("p", {
						className: pe.a.subtitle
					}, !d && i.a.createElement(ae.b, null), y))), !d && i.a.createElement("p", {
						className: pe.a.description
					}, Object(z.a)(j, 150, "..."))), i.a.createElement("div", {
						className: pe.a.buttonContainer
					}, k))
				};
			var he = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx"),
				xe = s("./src/reddit/components/SearchResultsContent/helpers/viewSearchThingTracker.ts"),
				fe = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.m.less"),
				Oe = s.n(fe);
			const ge = 5,
				ve = Object(c.c)({
					apiError: x.b,
					apiPending: x.c,
					loadMore: x.s,
					viewportDataLoaded: f.a
				}),
				Ee = Object(c.c)({
					apiError: x.e,
					apiPending: x.f,
					loadMore: x.t,
					viewportDataLoaded: f.a
				}),
				je = Object(c.c)({
					apiError: x.h,
					apiPending: x.i,
					loadMore: x.u,
					viewportDataLoaded: f.a
				}),
				ye = {
					[d.cc.Comments]: {
						cacheName: "comment",
						Component: e => {
							let {
								identifier: t,
								listingKey: s,
								searchOptions: n
							} = e;
							const r = Object(C.eb)(),
								o = Object(B.a)(),
								c = Object(a.d)(),
								d = Object(a.e)(e => Object(H.b)(e, {
									commentId: t
								})),
								l = Object(a.e)(e => Object(A.m)(e, {
									commentId: t
								})),
								m = Object(a.e)(e => (null == d ? void 0 : d.postId) ? Object(U.G)(e, {
									postId: null == d ? void 0 : d.postId
								}) : void 0),
								u = Object(a.e)(e => (null == d ? void 0 : d.postId) && Object(U.F)(e, {
									postId: null == d ? void 0 : d.postId
								})),
								p = Object(a.e)(e => e.search.searchQuery),
								b = Object(D.a)();
							if (!(null == d ? void 0 : d.postId) || !u) return null;
							const h = Object(N.b)(c),
								x = function(e) {
									let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : j.a;
									return function() {
										o(Object(F.p)({
											comment: d,
											key: s,
											originElement: e,
											pageLayer: r,
											searchOptions: n
										})), t(...arguments)
									}
								},
								f = Object(S.b)(d.postId, h),
								O = e => x(e);
							return i.a.createElement(T.a, {
								crosspost: void 0,
								isActive: !1,
								isLoggedIn: !1,
								modModeEnabled: !1,
								moderatorPermissions: void 0,
								onClickPost: x(q.POST, null != f ? f : j.a),
								onClickPostAuthor: O(q.POST_AUTHOR),
								onClickPostCommunity: O(q.POST_COMMUNITY),
								onClickPostTimestamp: O(q.POST_TIMESTAMP),
								onIgnoreReports: j.a,
								postId: d.postId,
								searchQuery: p,
								showEditFlair: !1,
								title: i.a.createElement(R.a, null, i.a.createElement("div", {
									className: K.a.commentContainer,
									"data-testid": "search_comment_container"
								}, i.a.createElement("div", {
									className: K.a.postTitleContainer
								}, m && i.a.createElement(I.c, {
									className: K.a.postTitle,
									hideSourceLink: !0,
									post: m,
									size: I.b.Metadata,
									showNSFWFlairsOnly: !0
								})), i.a.createElement("div", {
									className: K.a.commentContent,
									"data-testid": "search_comment",
									onClick: x(q.COMMENT, e => {
										e.stopPropagation(), c(Object(y.b)(Object(k.a)(l, !0, b)))
									})
								}, i.a.createElement(w.a, {
									clearHovered: j.a,
									commentId: t,
									commentsPageKey: "",
									flatlist: i.a.createElement(W, {
										className: K.a.commentFlatlist,
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
									onLineMouseOver: j.a,
									onCommentAuthorClick: e => (e.stopPropagation(), O(q.COMMENT_AUTHOR)(e)),
									onCommentTimestampClick: e => (e.stopPropagation(), O(q.COMMENT_TIMESTAMP)(e)),
									postId: d.postId,
									renderedInOverlay: !1,
									scrollToAndRemeasure: j.a,
									showBlockingInterstitial: j.a,
									userIconSmall: !0,
									restrictHeight: !0
								})), i.a.createElement(P.t, {
									kind: P.b.InternalLink,
									priority: P.c.PlainLink,
									className: Object(_.a)(K.a.goToThreadLinkButton, M.a.PlainLinkButton),
									"data-testid": "go_to_thread_link",
									onClick: x(q.GO_TO_THREAD_LINK, e => {
										e.stopPropagation()
									}),
									to: Object(k.a)(u, !0, b)
								}, v.fbt._("Go to thread", null, {
									hk: "npBX6"
								}))))
							})
						},
						moreResultsTypes: [d.dc.Comments],
						Placeholder: Y.a,
						selector: Ee,
						telemetryComponentName: "commentSearchResults",
						telemetryViewEvent: xe.c
					},
					[d.cc.Subreddits]: {
						cacheName: "community",
						Component: Ce,
						moreResultsTypes: [d.dc.Subreddits],
						Placeholder: he.a,
						selector: je,
						telemetryComponentName: "communitySearchResults",
						telemetryViewEvent: xe.d
					},
					[d.cc.Users]: {
						cacheName: "author",
						Component: Ce,
						moreResultsTypes: [d.dc.Users],
						Placeholder: he.a,
						selector: ve,
						telemetryComponentName: "authorSearchResults",
						telemetryViewEvent: xe.d
					}
				};
			const _e = e => {
				const t = Object(o.useRef)(!1);
				let s = !1,
					n = !1;
				const c = new m.a(250),
					x = Object(o.useRef)(),
					f = Object(o.useRef)(null),
					v = Object(C.eb)(),
					E = Object(b.b)(),
					j = Object(a.d)(),
					{
						identifiers: y,
						listingKey: _,
						searchOptions: k,
						componentType: w,
						sidebar: S
					} = e,
					{
						cacheName: I,
						Component: T,
						moreResultsTypes: N,
						Placeholder: R,
						selector: P,
						telemetryComponentName: L,
						telemetryViewEvent: M
					} = ye[w],
					{
						apiError: F,
						apiPending: D,
						loadMore: B,
						viewportDataLoaded: A
					} = Object(a.e)(t => P(t, e)),
					H = S ? ge : y.length,
					U = S ? ge : 10,
					V = () => {
						if (!Y()) return;
						const e = O.c.end(_);
						E(Object(h.v)(_, k, g.TimerType.InApp, e, v))
					},
					W = () => {
						const e = x.current && Array.from(x.current.children),
							t = e && e.pop();
						return t && t.getBoundingClientRect().bottom > window.innerHeight
					};
				Object(o.useEffect)(() => {
					V(), f.current && Object(O.b)(d.n.Redesign, {
						type: "mount",
						component: L,
						duration: O.c.end(f.current)
					})
				}, []), Object(o.useEffect)(() => {
					if (V(), f.current && O.c.has(f.current)) {
						const e = O.c.end(f.current);
						if (e < 10) return;
						Object(O.b)(d.n.Redesign, {
							duration: e,
							type: "mount",
							component: L
						})
					}
				});
				const G = Object(l.a)(_),
					K = Object(l.a)(y.length);
				Object(o.useEffect)(() => {
					f.current && O.c.cancel(f.current), y.length && (f.current = O.c.start()), (_ !== G || !W() && y.length !== K) && (t.current = !1)
				}, [f, _, y.length, G, K, t]), Object(o.useEffect)(() => () => {
					f.current && O.c.cancel(f.current), x.current = void 0, t.current = !1
				});
				const q = () => {
						t.current = !0, V()
					},
					Y = () => {
						const e = W();
						return O.c.has(_) && (F || !n && (s || t && (e || A)))
					},
					z = e => {
						x.current = e instanceof Element ? e : void 0
					},
					J = () => {
						const e = y.slice(0, H).map((e, t) => ((e, t) => {
							let s, n = k;
							! function(e) {
								return void 0 !== e.type
							}(e) ? s = e: (s = e.id, n = {
								...k,
								id: e.id,
								eventType: e.type
							});
							const r = `${I}-search-${t}-${_}`,
								o = Object(xe.b)(s, _, () => M(E, n, e, _, v));
							let a;
							if (void 0 === (a = c.get(r))) {
								const n = `${I}-search-item-[id:${s}]`;
								a = {
									estHeight: 32,
									trackOnEnteredViewport: o,
									id: s,
									render: () => i.a.createElement(T, {
										className: Oe.a.separatedCommunity,
										first: 0 === t,
										identifier: e,
										key: n,
										listingKey: _,
										searchOptions: k,
										sidebar: S
									})
								}
							}
							return c.set(r, a), a
						})(e, t));
						return i.a.createElement(p.b, {
							key: _,
							innerRef: z,
							loadMoreToken: B && B.token ? B.token : void 0,
							onLastVisibleChildRendered: q,
							onLoadMore: () => {
								j(Object(u.n)(N))
							}
						}, e)
					};
				return (() => y.length > 0)() ? (s = !1, n = !1, J()) : (() => Boolean(F) || !1 === D)() ? (s = !0, n = !1, J()) : (s = !1, n = !0, (() => {
					const e = !F;
					return i.a.createElement("div", {
						"data-testid": `${w}-list-placeholder`
					}, r()(U, t => i.a.createElement(R, {
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
			}));
			var n = s("./src/lib/LRUCache/index.ts"),
				r = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/helpers/trackers/searchResults.ts"),
				i = s("./src/reddit/selectors/commentSelector.ts");
			const a = new n.a(250),
				c = (e, t, s) => {
					const n = `entered-${e}-${`last-${t}`}`;
					let r = a.get(n);
					return void 0 === r && (r = s, a.set(n, r)), r
				},
				d = (e, t, s, n, i) => e(e => Object(o.j)({
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
					return Object(o.i)({
						action: r.c.VIEW,
						state: e,
						searchOptions: t,
						pageLayer: a,
						comment: c,
						key: n
					})
				})
		},
		"./src/reddit/components/SearchResultsContent/index.m.less": function(e, t, s) {
			e.exports = {
				resultsContainer: "_1MTbwSHIISfMYM16YhZ8kN"
			}
		},
		"./src/reddit/components/SearchResultsContent/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return dt
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
				C = s("./src/lib/isUrl/index.ts"),
				h = s("./src/lib/opener/index.ts"),
				x = s("./src/reddit/actions/post.ts"),
				f = s("./src/reddit/components/BlankPost/index.tsx"),
				O = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				g = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				v = s("./src/reddit/components/Media/index.tsx"),
				E = s("./src/reddit/components/PostContainer/index.tsx"),
				j = s("./src/reddit/components/Thumbnail/index.tsx"),
				y = s("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = s("./src/reddit/constants/adEvents.ts"),
				k = s("./src/reddit/contexts/PageLayer/index.tsx"),
				w = s("./src/reddit/contexts/Post/index.tsx"),
				S = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				I = s("./src/reddit/helpers/clickSourceData/index.ts"),
				T = s("./src/reddit/helpers/overlay/index.ts"),
				N = s("./src/reddit/helpers/path/index.ts"),
				R = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				P = s("./src/reddit/helpers/trackers/searchResults.ts"),
				L = s("./src/reddit/models/Media/index.ts"),
				M = s("./src/reddit/selectors/posts.ts"),
				F = s("./src/reddit/selectors/showPromotedCTA.ts"),
				D = s("./src/reddit/selectors/user.ts"),
				B = s("./node_modules/reselect/es/index.js"),
				A = s("./src/lib/getShortenedLink.ts"),
				H = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				U = s("./src/reddit/components/PostTitle/index.tsx"),
				V = s("./src/reddit/components/SearchPostFlatlist/index.tsx"),
				W = s("./src/reddit/components/SearchPostMeta/index.tsx"),
				G = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				K = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				q = s("./src/reddit/components/CallToActionButton/index.tsx"),
				Y = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				z = s("./src/reddit/hooks/useTheme.ts"),
				J = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Z = s("./src/reddit/components/SearchDiscoveryUnits/HeroUnit/index.m.less"),
				X = s.n(Z);
			const {
				fbt: Q
			} = s("./node_modules/fbt/lib/FbtPublic.js"), $ = `${p.a.assetPath}/img/link-placeholder.png`, ee = Object(B.c)({
				autoplayPref: D.b,
				showPromotedCTA: F.a,
				flairStyleTemplate: k.V
			});

			function te(e) {
				var t;
				const {
					postId: s,
					listingKey: a,
					searchOptions: c,
					discoveryUnit: d
				} = e, l = Object(r.useRef)(), m = Object(r.useRef)(), {
					autoplayPref: u,
					flairStyleTemplate: F,
					showPromotedCTA: D
				} = Object(i.e)(t => ee(t, e)), B = Object(i.e)(e => Object(M.d)(e, {
					postId: s
				})), Z = Object(i.e)(J.b), te = Object(i.e)(J.c), se = Object(k.eb)(), ne = Object(y.b)(), re = Object(i.d)(), oe = Object(z.a)(), {
					post: ie,
					subredditOrProfile: ae
				} = Object(w.d)(s), ce = Object(r.useCallback)((e, t) => {
					re(Object(x.Q)(e, t))
				}, [re]), de = !!ie.source && !B;
				if (Object(r.useEffect)(() => (l.current && Object(b.a)(l.current, (e, t) => {
						m.current && (t ? m.current.focusContent() : m.current.pauseContent())
					}), Object(P.t)(a, ie.id, c, se, d), () => {
						l.current && Object(b.b)(l.current), m.current && m.current.stopContent(), l.current = null, m.current = null
					}), []), !ie) return null;
				const {
					media: le
				} = B || ie || {}, me = (null == le ? void 0 : le.type) === L.o.EMBED && (null == le ? void 0 : le.provider) === L.v.Twitter, ue = (null == le ? void 0 : le.type) === L.o.VIDEO || (null == le ? void 0 : le.type) === L.o.GIFVIDEO;

				function pe(e) {
					e.stopPropagation(), e.preventDefault(), ie.isSponsored ? (re(Object(x.z)(ie, _.a.Click)), ie.source ? ie.source.outboundUrl ? Object(h.e)(ie.source.outboundUrl, h.d.BLANK) : Object(h.e)(ie.source.url, h.d.BLANK) : Object(h.e)(ie.permalink, h.d.BLANK)) : re(Z || te ? Object(x.bb)(Object(N.b)(ie.permalink), ie.id) : Object(T.a)({
						pathname: Object(N.b)(ie.permalink),
						state: Object(I.b)(se)
					}))
				}

				function be(e) {
					ie.isSponsored && ue || pe(e), ie.isSponsored && function(e) {
						ue || (e.stopPropagation(), e.preventDefault()), ne(Object(P.u)(ie.id, c, d, a, se))
					}(e)
				}
				return ie.isBlank ? o.a.createElement(f.BlankPost, {
					onPostViewable: ce,
					post: ie,
					postId: ie.id
				}) : o.a.createElement(w.a, {
					postId: s
				}, o.a.createElement(E.a, {
					className: X.a.postContainer,
					eventFactory: function(e, t) {
						let s;
						return (s = "subreddit" === t ? R.y(c, se, a, d) : ie && ie.isSponsored ? R.x(c, se, a, d) : R.z(c, se, a, d))(e)
					},
					onClick: pe,
					post: ie,
					"data-click-id": "hero_unit",
					style: {
						...Object(Y.d)({
							theme: oe,
							flairStyleTemplate: F,
							redditStyle: !1
						}),
						...Object(Y.b)(F)
					}
				}, o.a.createElement(H.a, {
					"data-click-id": "background"
				}, o.a.createElement(O.a, {
					className: X.a.eventMeta,
					post: ie
				}), o.a.createElement("div", {
					className: Object(n.a)(X.a.postContent, {}),
					"data-click-id": "body"
				}, o.a.createElement(W.a, {
					className: X.a.postItemMetaContainer,
					key: "PostMeta",
					shouldShowSubscribeButton: !1,
					post: ie,
					subredditOrProfile: ae
				}), o.a.createElement("div", {
					className: X.a.postItemTitleContainer
				}, o.a.createElement(U.c, {
					hideSourceLink: !0,
					post: ie,
					size: U.b.Medium,
					isOverlay: !1
				}), !D && de && o.a.createElement(G.a, {
					className: X.a.outboundLink,
					href: (null === (t = null == ie ? void 0 : ie.source) || void 0 === t ? void 0 : t.url) || "",
					isSponsored: ie.isSponsored,
					postId: ie.id,
					source: ie.source
				}, Object(A.a)(ie))), function() {
					let e = o.a.createElement(o.a.Fragment, null);
					const t = !!ie.source && Object(C.a)(ie.source.url) || !!ie.thumbnail && Object(C.a)(ie.thumbnail.url),
						s = !le && t,
						r = Object(n.a)(X.a.mediaWrapper, {
							[X.a.marginCancel]: D && !!ie.source,
							[X.a.promotedTrend]: ie.isSponsored
						});
					if (s) e = o.a.createElement("div", {
						className: r
					}, o.a.createElement(j.a, {
						className: X.a.thumbnail,
						post: ie,
						templatePlaceholderImage: $,
						usePreview: !0
					}));
					else if (le)
						if (le.type !== L.o.RTJSON && le.type !== L.o.TEXT) e = o.a.createElement("div", {
							className: Object(n.a)(r, me && X.a.twitterEmbed),
							onClickCapture: be,
							ref: e => l.current = e
						}, o.a.createElement(v.a, {
							className: X.a.mediaContent,
							autoplayPref: u,
							isListing: !1,
							isMiniCard: !1,
							isNotCardView: !0,
							isPromotedTrend: ie.isSponsored,
							post: B || ie,
							primaryContent: !0,
							scrollerItemRef: e => m.current = e,
							shouldLoad: !0,
							shouldPause: !0,
							showCentered: !0,
							showFull: !0
						}));
						else {
							e = o.a.createElement("div", {
								className: X.a.mediaPlaceholder
							}), (le.type === L.o.RTJSON && le.richtextContent || le.type === L.o.TEXT && le.content) && Object(S.a)(ie) && (e = o.a.createElement("div", {
								className: r,
								onClickCapture: pe,
								ref: e => l.current = e
							}, o.a.createElement(v.a, {
								autoplayPref: u,
								className: X.a.textMedia,
								isListing: !1,
								isMiniCard: !1,
								isNotCardView: !1,
								post: B || ie,
								shouldPause: !0,
								shouldLoad: !0,
								showCentered: !0,
								showFull: !0
							}), o.a.createElement("div", {
								className: X.a.seeMore
							}, Q._("More", null, {
								hk: "362mDE"
							}))))
						} return e
				}(), D && ie.source && o.a.createElement(K.a, {
					className: X.a.adLinkWrapper
				}, o.a.createElement(G.a, {
					className: Object(n.a)(X.a.outboundLink),
					href: ie.source.url.replace(p.a.redditUrl, ""),
					isSponsored: ie.isSponsored,
					postId: ie.id,
					source: ie.source
				}, ie.source.displayText), ie.callToAction && o.a.createElement(q.a, {
					className: X.a.adCallToAction,
					href: ie.source.url.replace(p.a.redditUrl, ""),
					isSponsored: ie.isSponsored,
					postId: ie.id,
					source: ie.source
				}, ie.callToAction)), !ie.isSponsored && o.a.createElement(V.c, {
					className: Object(n.a)(X.a.postItemFlatlistContainer),
					post: ie
				}), o.a.createElement(g.d, null)))))
			}
			var se = s("./src/lib/LRUCache/index.ts"),
				ne = s("./src/reddit/components/Scroller/Simple.tsx"),
				re = s("./src/reddit/components/SearchResultsContent/helpers/viewSearchThingTracker.ts"),
				oe = s("./src/reddit/hooks/usePageLayer.ts"),
				ie = s("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const ae = 376,
				ce = new se.a(1);

			function de(e) {
				let {
					discoveryUnit: t,
					listingKey: s,
					searchOptions: n,
					postId: r,
					children: a
				} = e;
				const c = Object(i.d)(),
					d = Object(oe.a)();
				if (!t || !r) return null;
				const l = () => {
					const e = `entered-hero-unit-${r}`;
					let o = re.a.get(e);
					if (void 0 === o) {
						const i = t.layout.viewTypeWeb === ie.b.PromotedTrendHero;
						o = () => {
							c((e, o) => Object(R.A)(o(), t, r, n, d, s, i))
						}, re.a.set(e, o)
					}
					return o
				};
				return o.a.createElement(ne.b, null, (() => {
					const e = `hero-unit-search-${s}`;
					let n;
					return void 0 === (n = ce.get(e)) && (n = {
						estHeight: ae,
						trackOnEnteredViewport: l(),
						id: t.id,
						render: () => a
					}), ce.set(e, n), [n]
				})())
			}
			var le = s("./src/reddit/constants/page.ts"),
				me = s("./src/reddit/helpers/trackers/screenview.ts"),
				ue = s("./src/reddit/hooks/useTracking.ts"),
				pe = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				be = s("./src/reddit/selectors/listings.ts"),
				Ce = s("./src/reddit/selectors/platform.ts");
			const he = e => {
				const t = e.listings.activeKey,
					s = e.searchDiscoveryUnits.models[t];
				return s || {}
			};
			var xe = s("./src/reddit/selectors/searchFix.ts"),
				fe = s("./src/reddit/selectors/searchResults.ts"),
				Oe = s("./src/telemetry/index.ts"),
				ge = s("./src/telemetry/models/Timer.ts");
			const {
				Hero: ve,
				PromotedTrendHero: Ee
			} = ie.b;

			function je(e) {
				const t = Object.values(e).find(e => e.layout.viewTypeWeb === ve || e.layout.viewTypeWeb === Ee);
				if (null == t ? void 0 : t.postOrder) return t.postOrder[0]
			}
			const ye = e => o.a.createElement("svg", {
				width: "68",
				height: "68",
				viewBox: "0 0 68 68",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				opacity: "0.5"
			}, o.a.createElement("path", {
				opacity: "0.5",
				d: "M24.0765 62.221H23.88C18.8437 61.8013 13.8553 61.1585 9.8284 60.4201L1.83309 59.926C1.39607 59.8973 0.988164 59.6968 0.698496 59.3683C0.408829 59.0398 0.260945 58.6101 0.287153 58.1729C0.287153 58.1198 0.287153 58.0773 0.287153 58.0294C0.866215 54.3319 1.22747 50.4698 1.59403 46.3366C1.74278 44.7429 1.89153 43.1491 2.0509 41.5554C2.36434 38.3679 2.68309 35.4566 3.0284 32.6357L3.63403 27.5676C3.78809 26.2129 3.94746 24.8104 4.16528 23.3973C4.57965 20.6719 5.16403 17.7926 6.64621 15.2107C7.02845 14.5512 7.4713 13.9287 7.96903 13.3513C8.4702 12.7333 9.05486 12.188 9.70621 11.731C10.8469 10.9717 12.0672 10.3393 13.3453 9.84507L13.4356 9.80788C14.5122 9.38724 15.5518 8.87723 16.5434 8.2832C17.4179 7.68273 18.1985 6.95586 18.8596 6.12632L19.3218 5.59507C19.9725 4.78196 20.6828 4.0184 21.4468 3.3107C22.4656 2.39364 23.6358 1.66027 24.9053 1.1432C25.1841 1.02221 25.4696 0.917551 25.7606 0.829758H25.835C26.1427 0.713538 26.4567 0.614223 26.7753 0.532258C27.4035 0.375443 28.0429 0.267104 28.6878 0.208195C29.909 0.108959 31.1372 0.133878 32.3534 0.28257C33.5406 0.415061 34.7127 0.658735 35.8543 1.01038C36.4183 1.1836 36.9717 1.38937 37.5118 1.62663C38.0431 1.85507 38.5106 2.08351 38.9834 2.31726L39.3393 2.49257C40.8642 3.31976 42.4816 3.96352 44.1578 4.41038C44.3118 4.44226 44.45 4.46882 44.5934 4.49007H44.7475C45.7208 4.39665 46.6842 4.2189 47.6268 3.95882C48.1262 3.83132 48.6415 3.68788 49.1781 3.53913C49.8156 3.35851 50.4796 3.17257 51.1809 3.00788C52.6324 2.61618 54.1293 2.4179 55.6328 2.4182C56.4944 2.42917 57.3511 2.54875 58.1828 2.77413C59.0231 3.0092 59.834 3.33892 60.6 3.75695C62.1234 4.58147 63.4262 5.76036 64.3984 7.19413C65.2572 8.42103 65.9553 9.75292 66.4756 11.1573C66.5978 11.4866 66.7146 11.8054 66.8209 12.1241C66.9388 12.4728 67.0381 12.8275 67.1184 13.1866C67.2667 13.8442 67.3661 14.5119 67.4159 15.1841C67.478 15.872 67.4494 16.565 67.3309 17.2454C67.208 17.8817 66.9989 18.4984 66.7093 19.0782C66.6721 19.1473 66.6403 19.2057 66.6031 19.2641V19.3066C66.302 20.0633 65.9037 20.7777 65.4184 21.4316C64.9598 22.0295 64.4515 22.5875 63.899 23.0998L63.7184 23.2644C63.9321 23.5088 64.1207 23.774 64.2815 24.056C64.9398 25.1788 65.2348 26.4777 65.1262 27.7748C65.0637 29.0497 64.6318 30.279 63.8831 31.3129C63.1645 32.2477 62.2461 33.01 61.195 33.5441C60.2717 34.0316 59.2946 34.4095 58.2837 34.6704C57.3238 34.9128 56.3442 35.0692 55.3565 35.1379C54.7562 35.191 54.1559 35.2335 53.5715 35.2707C52.503 35.314 51.4383 35.4258 50.384 35.6054C48.8748 35.9097 47.4033 36.3783 45.9959 37.0026C45.6028 37.1726 45.215 37.3479 44.8325 37.5338C44.094 38.166 43.2387 38.8354 42.2559 39.5154C40.4692 40.7482 38.5981 41.8542 36.6565 42.8251C36.1253 43.1013 35.525 43.3829 34.9193 43.6644L34.0003 44.0948L33.0175 44.5091C32.0665 44.8704 31.0625 45.2104 29.7875 45.5716V45.6141C29.6546 45.8957 29.5165 46.1826 29.3943 46.4801C29.1393 47.0698 28.895 47.6913 28.6718 48.3341C28.208 49.6498 27.8125 50.9885 27.4872 52.3451C26.885 54.9125 26.4888 57.5239 26.3025 60.1544C26.2684 60.7191 26.018 61.2488 25.6035 61.6337C25.189 62.0185 24.6421 62.2289 24.0765 62.221ZM24.0287 60.7123C24.2062 60.7211 24.3802 60.6607 24.514 60.5438C24.6478 60.4268 24.731 60.2625 24.7459 60.0854C24.936 57.3565 25.3446 54.6473 25.9678 51.9838C26.3078 50.5732 26.721 49.1812 27.2056 47.8135C27.4393 47.1441 27.6996 46.4907 27.9653 45.8691C28.0981 45.5557 28.2415 45.2476 28.385 44.9501L28.5656 44.5888L28.7143 44.2966L29.0278 44.2063C30.4196 43.7973 31.4715 43.4519 32.449 43.0748L33.3787 42.6816L34.2659 42.2832C34.8556 42.0123 35.424 41.7519 35.9553 41.4704C37.8565 40.5281 39.6886 39.4522 41.4378 38.251C42.3127 37.6437 43.1567 36.993 43.9665 36.3013L44.0462 36.2323L44.1365 36.1898C44.5668 35.9826 45.0025 35.786 45.4487 35.5948C46.9536 34.9297 48.5265 34.4309 50.1396 34.1073C51.2605 33.9149 52.3927 33.796 53.529 33.7513C54.1028 33.7141 54.6871 33.6769 55.2768 33.6238C56.1728 33.5619 57.0616 33.4215 57.9331 33.2041C58.8295 32.9725 59.696 32.6373 60.515 32.2054C61.3636 31.771 62.1057 31.1542 62.6878 30.3991C63.2626 29.6003 63.593 28.6516 63.6387 27.6685C63.7229 26.6822 63.5022 25.6938 63.0065 24.8369C62.7721 24.449 62.4612 24.1128 62.0928 23.8488L61.2959 23.2751L62.0503 22.6535C62.3106 22.441 62.5815 22.2126 62.8259 21.9788C63.3145 21.5251 63.7641 21.031 64.17 20.5019C64.5849 19.9434 64.9243 19.3325 65.1793 18.6851L65.2909 18.4726L65.3387 18.3823C65.5693 17.9257 65.7356 17.4394 65.8328 16.9373C65.9268 16.3846 65.9483 15.822 65.8965 15.2638C65.852 14.6649 65.7632 14.07 65.6309 13.4841C65.5618 13.1788 65.4767 12.8774 65.3759 12.581C65.275 12.2729 65.1634 11.9701 65.0518 11.6619C64.575 10.3781 63.9358 9.16049 63.15 8.03882C62.3116 6.79679 61.1852 5.77607 59.8668 5.06382C59.2018 4.70203 58.4978 4.41687 57.7684 4.21382C57.058 4.02163 56.3262 3.91989 55.5903 3.91101C54.2165 3.91084 52.8486 4.08942 51.5209 4.44226C50.8356 4.61226 50.1875 4.7982 49.5659 4.97351C48.9443 5.14882 48.5034 5.27632 47.9721 5.40382C46.9457 5.68206 45.8969 5.87048 44.8378 5.96695H44.6518H44.4925H44.4181C44.2162 5.94038 44.0143 5.9032 43.8125 5.8607C42.017 5.39122 40.2849 4.70624 38.654 3.8207L38.2981 3.64538C37.8359 3.42226 37.3684 3.19913 36.8797 2.98132C36.3943 2.77611 35.8977 2.59873 35.3922 2.45007C34.3526 2.12887 33.2856 1.90479 32.2046 1.7807C31.0854 1.64317 29.9551 1.62003 28.8312 1.71163C28.2461 1.75436 27.6652 1.84317 27.094 1.97726C26.8152 2.04322 26.5403 2.12481 26.2706 2.22163L26.1856 2.2482C25.9381 2.32283 25.6951 2.41152 25.4578 2.51382C24.3365 2.96721 23.3028 3.6126 22.4031 4.42101C21.6915 5.07992 21.0292 5.79016 20.4215 6.54601L19.954 7.07726C19.1956 8.01988 18.3002 8.84359 17.2978 9.52101C16.2342 10.1616 15.1181 10.7108 13.9615 11.1626L13.8765 11.1998C12.6977 11.6532 11.5719 12.2339 10.519 12.9316C9.97908 13.3107 9.49454 13.763 9.07934 14.2757C8.65896 14.7947 8.28728 15.3513 7.96903 15.9385C6.60903 18.3079 6.06184 21.0173 5.67403 23.5991C5.47215 24.9804 5.31278 26.3723 5.14278 27.7163L4.53715 32.8057C4.19715 35.5948 3.8784 38.5219 3.56496 41.6935C3.40028 43.2873 3.25153 44.881 3.10809 46.4748C2.72028 50.6132 2.35903 54.5179 1.79059 58.2366C1.78599 58.2577 1.78586 58.2794 1.79019 58.3005C1.79452 58.3216 1.80322 58.3416 1.81573 58.3591C1.82825 58.3766 1.84429 58.3913 1.86284 58.4022C1.88138 58.4132 1.90202 58.4201 1.9234 58.4226L9.96121 58.9166H10.0515C14.0465 59.6551 19.0084 60.2873 24.0181 60.7069L24.0287 60.7123Z",
				fill: "white"
			}), o.a.createElement("path", {
				opacity: "0.5",
				d: "M60.6689 67.7829C59.3729 67.8082 58.1043 67.409 57.0564 66.646C56.5109 66.2282 56.0433 65.7174 55.6752 65.1372C55.4308 64.76 55.2183 64.3882 55.0377 64.0747L54.8836 63.7985C54.6987 63.4549 54.4874 63.1263 54.2514 62.8157C54.0498 62.5698 53.8115 62.3566 53.5448 62.1835L53.3908 62.0772C53.0295 61.8344 52.69 61.5607 52.3761 61.2591C52.2281 61.1105 52.0896 60.9525 51.9617 60.7863L51.8873 60.6907C51.7864 60.5685 51.6855 60.4304 51.5898 60.2975L51.4995 60.1754L51.4464 60.1063C51.3422 60.2021 51.2429 60.3032 51.1489 60.4091C49.9918 61.7902 49.373 63.543 49.4064 65.3444C49.3999 65.7444 49.2572 66.1302 49.0018 66.4382C48.7465 66.7461 48.3938 66.9578 48.0019 67.0383C47.6101 67.1187 47.2025 67.0632 46.8465 66.8808C46.4904 66.6984 46.2072 66.4001 46.0436 66.035C45.6842 65.2167 45.4083 64.3641 45.2202 63.4904C45.0382 62.6605 44.9315 61.8159 44.9014 60.9669C43.7456 62.332 42.7985 63.8609 42.0911 65.5038C41.9437 65.8462 41.6889 66.1312 41.3652 66.3159C41.0414 66.5006 40.6663 66.5749 40.2966 66.5275C39.9269 66.48 39.5827 66.3135 39.3161 66.0531C39.0494 65.7927 38.8748 65.4526 38.8186 65.0841C38.4296 62.5593 38.5927 59.9801 39.2967 57.5244C39.5395 56.6631 39.8559 55.8241 40.2423 55.0169C40.7135 53.3184 41.5493 51.743 42.6914 50.4004C43.0842 49.9409 43.5123 49.5129 43.9717 49.12C44.434 48.7153 44.922 48.3409 45.4326 47.9991C46.5736 47.2327 47.8287 46.6517 49.1514 46.2779C50.1547 46.0035 51.1875 45.8518 52.2273 45.8263C51.9033 45.2738 51.4884 44.7799 51.0002 44.3654C50.0261 43.5553 48.9164 42.924 47.7223 42.5007C46.1911 42.006 44.5757 41.8253 42.973 41.9694C42.598 42.0281 42.2144 41.9511 41.8911 41.7522C41.5679 41.5533 41.3262 41.2455 41.2097 40.8843C41.0931 40.5231 41.1093 40.1321 41.2553 39.7818C41.4013 39.4315 41.6675 39.1447 42.0061 38.9732C43.707 37.9656 45.59 37.3034 47.5472 37.0244C49.5043 36.7455 51.4973 36.8553 53.412 37.3475C54.4476 37.6135 55.4507 37.993 56.403 38.4791C57.3613 38.9656 58.2735 39.5382 59.1283 40.1897C60.9056 41.5404 62.4032 43.2238 63.5377 45.1463C64.3333 46.5228 64.9679 47.9863 65.4289 49.5079C65.6255 50.1772 65.8061 50.8572 66.0027 51.6329C66.1762 52.3412 66.3409 53.0336 66.4967 53.71C66.842 55.2507 67.0811 56.616 67.2405 57.8857L67.4689 59.8672C67.5598 60.5721 67.6094 61.2816 67.6177 61.9922C67.6355 62.8397 67.4876 63.6825 67.182 64.4732C66.8056 65.4086 66.1037 66.1765 65.2058 66.6354C64.8863 66.8037 64.5563 66.951 64.2177 67.0763C63.9042 67.1985 63.5748 67.31 63.2455 67.4004C62.5838 67.5937 61.9036 67.7166 61.2161 67.7669C61.0319 67.7775 60.8495 67.7829 60.6689 67.7829ZM51.8395 57.9547L52.2752 58.5816C52.4292 58.8419 52.5727 59.0597 52.7161 59.2616L52.8064 59.3891C52.8861 59.4954 52.9605 59.6069 53.0508 59.7132L53.1411 59.83C53.2312 59.9494 53.3288 60.063 53.4333 60.17C53.687 60.4106 53.9607 60.6292 54.2514 60.8235L54.4108 60.935C54.7941 61.1897 55.1363 61.5014 55.4255 61.8594C55.7111 62.23 55.9669 62.6225 56.1905 63.0335L56.3498 63.315C56.5305 63.6391 56.7164 63.9685 56.9342 64.3032C57.2083 64.7397 57.5572 65.1246 57.9648 65.44C58.8758 66.0837 59.9903 66.3727 61.0992 66.2529C61.6824 66.2094 62.2594 66.1043 62.8205 65.9394C63.1073 65.8597 63.3889 65.7641 63.6652 65.6579C63.9528 65.5524 64.2332 65.4282 64.5045 65.286C65.0732 64.9909 65.5206 64.5059 65.7689 63.9154C66.0032 63.2946 66.1151 62.6343 66.0983 61.971C66.0896 61.3207 66.0435 60.6715 65.9602 60.0266L65.7317 58.0557C65.583 56.8444 65.3492 55.5269 65.0145 54.0288C64.8622 53.3523 64.7011 52.6706 64.5311 51.9835C64.3398 51.2025 64.1645 50.5438 63.9998 49.9063C63.5735 48.4998 62.9871 47.1468 62.252 45.8741C61.2177 44.1204 59.8518 42.5848 58.2305 41.3532C57.4473 40.7563 56.6116 40.2317 55.7336 39.786C54.888 39.3516 53.9972 39.0113 53.0773 38.7713C49.6066 37.8975 45.9316 38.4181 42.8401 40.2216C42.8174 40.2313 42.7981 40.2476 42.7848 40.2685C42.7715 40.2894 42.7649 40.3138 42.7658 40.3385C42.7664 40.3529 42.77 40.3671 42.7763 40.3801C42.7826 40.3931 42.7915 40.4047 42.8025 40.4141C42.8134 40.4236 42.8262 40.4307 42.84 40.435C42.8537 40.4394 42.8683 40.4409 42.8826 40.4394C44.6987 40.2831 46.5275 40.4964 48.2589 41.0663C49.6136 41.5508 50.8725 42.2701 51.9776 43.1913C52.7127 43.7938 53.3166 44.5405 53.752 45.3854C53.906 45.7015 54.0271 46.0326 54.1133 46.3735L54.3842 47.3882L53.3217 47.3191C50.8347 47.1427 48.3607 47.8089 46.2986 49.2104C45.838 49.5178 45.3979 49.855 44.9811 50.2197C44.5786 50.5634 44.2038 50.9382 43.8601 51.3407C42.8463 52.5319 42.108 53.9323 41.698 55.4419L41.6501 55.5694C41.2842 56.3207 40.9856 57.1029 40.7576 57.9069C40.1132 60.1501 39.9628 62.5063 40.3167 64.8132C40.3208 64.851 40.3347 64.8871 40.3571 64.9178C40.3795 64.9486 40.4095 64.9729 40.4442 64.9885C40.4957 65.0098 40.5535 65.0101 40.6052 64.9892C40.6568 64.9684 40.6982 64.928 40.7205 64.8769C41.5554 62.9541 42.6944 61.1783 44.0939 59.6175C44.4605 59.2085 44.843 58.8207 45.268 58.4222L46.8139 56.9719L46.527 59.0969C46.527 59.1394 46.527 59.1819 46.527 59.2244V59.2829C46.3044 61.3763 46.6265 63.4918 47.462 65.4241C47.4807 65.4714 47.5127 65.5122 47.5543 65.5414C47.5958 65.5707 47.645 65.5872 47.6958 65.5888C47.762 65.5888 47.8255 65.5625 47.8723 65.5157C47.9192 65.4688 47.9455 65.4053 47.9455 65.3391C47.9103 63.1656 48.6654 61.0532 50.0705 59.3944C50.3928 59.0467 50.7487 58.7318 51.133 58.4541L51.8395 57.9547Z",
				fill: "white"
			})), o.a.createElement("path", {
				d: "M66.0614 15.9394C65.1674 13.0745 63.7239 10.4111 61.8114 8.09819C60.0264 5.936 57.0301 4.30506 54.3739 4.33694C51.7176 4.36881 48.3389 5.93069 45.7676 6.05288C42.7342 6.18569 39.637 4.26256 36.8214 3.046C33.8995 1.81881 29.6283 1.40444 26.7861 2.2385C21.4417 3.83225 20.8945 7.551 17.4254 9.761C14.7161 11.5035 11.5233 11.9551 9.4992 14.2288C6.0142 18.1388 5.91326 24.041 4.97295 31.3988C3.48014 43.0279 3.0392 51.5863 1.94482 58.2694L24.0608 59.7994C24.2201 50.9701 25.7236 44.6748 31.6311 41.7369",
				fill: "#6FC437"
			}), o.a.createElement("path", {
				d: "M31.6255 41.7569C31.6574 41.826 31.243 42.0969 30.494 42.6282C29.4203 43.4202 28.4865 44.3863 27.7315 45.4863C26.5832 47.2611 25.8028 49.2482 25.4365 51.33C25.1826 52.6396 25.0052 53.9629 24.9052 55.2932C24.799 56.7116 24.7511 58.2203 24.7352 59.8141C24.7345 59.9034 24.7162 59.9917 24.6814 60.0739C24.6466 60.1562 24.5959 60.2307 24.5323 60.2934C24.4686 60.356 24.3933 60.4055 24.3105 60.4391C24.2278 60.4726 24.1392 60.4895 24.0499 60.4888H24.0021C17.7174 60.1435 10.2268 59.6972 1.8702 59.1713C1.75222 59.1638 1.63686 59.1332 1.53075 59.0811C1.42464 59.0289 1.32987 58.9564 1.25188 58.8675C1.17389 58.7787 1.11421 58.6753 1.07628 58.5633C1.03835 58.4513 1.0229 58.333 1.03083 58.215C1.03083 58.215 1.03083 58.1619 1.03083 58.1353C1.8277 53.0035 2.23145 47.436 2.81583 41.6188C3.09916 38.7111 3.42323 35.7432 3.78802 32.715L4.31927 28.1622C4.49458 26.6269 4.66458 25.0757 4.89833 23.4978C5.30739 20.8416 5.87052 18.0525 7.28895 15.5769C7.63715 14.9527 8.04265 14.3623 8.5002 13.8132C8.95968 13.2441 9.49607 12.7417 10.094 12.3203C11.2182 11.5751 12.4207 10.9551 13.6799 10.4716C14.7961 10.0322 15.873 9.49901 16.8993 8.87784C17.8359 8.23664 18.6736 7.46164 19.3855 6.57753C20.1599 5.60279 21.0013 4.68327 21.9036 3.82566C22.8578 2.96483 23.9543 2.27636 25.1443 1.79097C25.4344 1.68029 25.7306 1.58628 26.0315 1.50941C26.3256 1.40444 26.6253 1.31576 26.9293 1.24378C27.5283 1.10098 28.1375 1.00507 28.7515 0.956905C29.925 0.862861 31.1051 0.88778 32.2736 1.03128C33.405 1.15862 34.522 1.39161 35.6099 1.72722C36.1521 1.89272 36.6843 2.08962 37.2036 2.31691C37.6977 2.54003 38.1758 2.76316 38.6433 2.99159C40.508 3.89472 42.2558 4.7819 43.993 5.14847C44.828 5.33715 45.6904 5.37136 46.5377 5.2494C47.3988 5.12057 48.2519 4.9432 49.093 4.71816C50.7824 4.29847 52.424 3.79378 54.1505 3.73534C55.7567 3.73943 57.3338 4.16438 58.7246 4.96784C59.9212 5.62127 60.9916 6.48301 61.8855 7.51253C62.5955 8.37218 63.2384 9.28507 63.8086 10.2432C64.6045 11.5532 65.2462 12.9508 65.7211 14.4082C66.0346 15.4069 66.1143 15.9541 66.0558 15.97C65.9974 15.986 65.7743 15.4866 65.3439 14.5569C64.7229 13.2004 63.9871 11.8994 63.1446 10.6682C62.5431 9.78564 61.881 8.94601 61.163 8.15534C60.3072 7.25948 59.3024 6.51891 58.1933 5.96659C56.962 5.31067 55.5824 4.98315 54.1877 5.01566C52.5783 5.21055 50.9925 5.5665 49.4543 6.07815C48.5643 6.34301 47.6596 6.55587 46.7449 6.71566C45.7303 6.88416 44.6937 6.86796 43.6849 6.66784C41.6449 6.28003 39.7802 5.35566 37.9155 4.49503C37.448 4.27722 36.9858 4.06472 36.513 3.86816C36.0553 3.67683 35.5871 3.51187 35.1105 3.37409C34.1197 3.08571 33.1041 2.89008 32.0771 2.78972C31.0173 2.6823 29.9494 2.6823 28.8896 2.78972C28.3683 2.83628 27.8514 2.92331 27.3436 3.05003C27.0879 3.11341 26.836 3.19146 26.5893 3.28378C26.3341 3.36238 26.084 3.45641 25.8402 3.56534C24.851 3.97859 23.9413 4.56105 23.1521 5.28659C22.3201 6.09878 21.5445 6.96673 20.8305 7.88441C20.0036 8.92168 19.028 9.83108 17.9352 10.5832C16.819 11.2687 15.646 11.8571 14.429 12.3416C13.3109 12.7756 12.2423 13.3277 11.2415 13.9885C10.781 14.3122 10.3696 14.7005 10.0196 15.1413C9.64672 15.5917 9.31596 16.0754 9.03145 16.5863C7.83614 18.6688 7.28895 21.1975 6.90645 23.7953C6.68333 25.32 6.51333 26.8553 6.3327 28.3907C6.15208 29.926 5.96614 31.4666 5.80145 32.9594C5.41541 35.9663 5.07541 38.92 4.78145 41.8207C4.15458 47.6166 3.71895 53.1841 2.83177 58.4382L2.00302 57.3757C10.349 58.0078 17.8343 58.6028 24.103 59.1235L23.3752 59.7875C23.4336 58.1938 23.5293 56.6319 23.6886 55.1763C23.8397 53.803 24.0757 52.4404 24.3952 51.0963C24.8704 48.908 25.8048 46.8456 27.1365 45.0453C27.9933 43.9327 29.0623 43.001 30.2815 42.3041C30.6872 42.0315 31.1447 41.8452 31.6255 41.7569Z",
				fill: "black"
			}), o.a.createElement("path", {
				d: "M40.6621 30.193C46.1817 29.6617 52.7267 28.4664 57.2955 25.7145C59.6277 24.3067 62.3211 22.7449 64.0689 20.402C65.2324 18.8083 66.1408 15.913 64.6002 15.2542C63.3252 14.723 60.4458 15.2224 58.8521 16.0299C54.6021 18.1867 48.8274 22.5802 42.3833 23.5099C39.573 23.9189 36.7255 23.4302 33.9205 22.9786C31.1155 22.527 27.9297 22.9095 25.1513 23.5099C21.4001 24.9733 17.0586 24.9389 17.0002 28.0414C16.9683 30.6605 21.2502 30.0708 24.1667 28.9127",
				fill: "black"
			}), o.a.createElement("path", {
				d: "M24.1882 28.9123C24.1882 28.9708 23.9439 29.1673 23.3754 29.4436C22.5375 29.8133 21.6582 30.0808 20.7564 30.2405C20.0767 30.3537 19.3842 30.368 18.7004 30.283H18.4029L18.0948 30.198C17.8741 30.1329 17.6619 30.0419 17.4626 29.927C17.0017 29.6385 16.666 29.1871 16.5223 28.6626C16.4253 28.1332 16.4546 27.5883 16.6079 27.0723C16.7611 26.5563 17.2571 26.2749 17.6273 25.8842C18.362 25.0958 19.0701 24.9885 20.0476 24.5348C21.0606 24.0391 21.9192 23.7013 22.9994 23.3767C24.1644 23.0009 25.692 22.5998 26.9029 22.4205C29.4848 22.0805 32.0242 21.783 34.6804 22.1814C37.3367 22.5798 40.1735 22.9942 42.9201 22.4205C45.847 21.7755 48.6568 20.6824 51.2501 19.1798C52.6207 18.4361 53.9595 17.6445 55.2929 16.8689C55.9623 16.4811 56.6317 16.0933 57.3117 15.7214C57.6464 15.5301 58.0023 15.3548 58.3423 15.1901C58.7183 15.0004 59.107 14.8371 59.5057 14.7014C60.2695 14.4491 61.0559 14.2712 61.8539 14.1701C62.6821 14.0309 63.5278 14.0309 64.356 14.1701C64.6082 14.2224 64.8527 14.3063 65.0839 14.4198C65.2251 14.4938 65.3601 14.5791 65.4876 14.6748C65.6082 14.7825 65.7218 14.8979 65.8276 15.0201C66.1607 15.4639 66.3465 16.0008 66.3589 16.5555C66.3717 17.3865 66.2125 18.2113 65.8914 18.978C65.6119 19.6876 65.2404 20.3574 64.7864 20.9701C64.3555 21.5405 63.8775 22.0736 63.3573 22.5639C62.3866 23.4534 61.3335 24.2485 60.2123 24.9386C59.681 25.2733 59.1498 25.5867 58.6504 25.8842C58.1511 26.1817 57.6464 26.4739 57.1151 26.7555C56.1241 27.2826 55.096 27.7371 54.0392 28.1155C52.2463 28.7504 50.4059 29.2424 48.5354 29.587C46.8939 29.8951 45.4701 30.0705 44.2854 30.182C41.9532 30.3998 40.6623 30.3573 40.6464 30.2298C40.6304 30.1023 41.9001 29.8526 44.1685 29.4011C47.3558 28.823 50.4811 27.9443 53.5026 26.7767C54.4771 26.3799 55.4232 25.9167 56.3342 25.3901C56.7964 25.1245 57.2904 24.8111 57.7898 24.4976C58.2892 24.1842 58.7832 23.8655 59.2773 23.5308C60.293 22.8605 61.2445 22.0975 62.1195 21.2517C62.5568 20.8249 62.9584 20.363 63.3201 19.8705C63.664 19.3772 63.9425 18.8415 64.1489 18.2767C64.3599 17.7553 64.4664 17.1976 64.4623 16.6351C64.467 16.4759 64.4245 16.3187 64.3401 16.1836C64.3401 16.1836 64.3082 16.1836 64.3029 16.1517C64.2976 16.1198 64.2657 16.1517 64.2498 16.1251C64.158 16.0852 64.0617 16.0566 63.9629 16.0401C63.3558 15.9437 62.7372 15.9437 62.1301 16.0401C61.4612 16.137 60.8031 16.297 60.1645 16.5183C59.853 16.6263 59.5495 16.7559 59.2561 16.9061C58.932 17.0814 58.6079 17.2408 58.2839 17.4373C57.6357 17.7986 56.9823 18.1811 56.3182 18.5689C54.9954 19.3498 53.662 20.1626 52.217 20.9276C49.4471 22.5214 46.4418 23.6654 43.3132 24.317C41.7877 24.5977 40.2312 24.671 38.686 24.5348C37.1985 24.4233 35.7801 24.1948 34.436 23.9717C31.7214 23.5467 29.2192 23.1536 26.9029 23.3767C25.7786 23.5126 24.6666 23.7364 23.5773 24.0461C22.5643 24.309 21.5732 24.6501 20.6129 25.0661C19.7762 25.4064 19.0105 25.9001 18.3551 26.5217C18.2187 26.6567 18.0975 26.8064 17.9939 26.968L17.8451 27.1964L17.7495 27.4355C17.6329 27.7324 17.5909 28.0535 17.6273 28.3705C17.6819 28.6241 17.8274 28.8489 18.0364 29.0026C18.2902 29.1658 18.5736 29.2777 18.8704 29.332C19.4625 29.4402 20.0661 29.4706 20.6661 29.4223C21.5367 29.3475 22.4012 29.2125 23.2532 29.0186C23.8429 28.907 24.1617 28.8433 24.1882 28.9123Z",
				fill: "black"
			}), o.a.createElement("path", {
				d: "M30.1169 6.61499C33.6922 6.80093 34.2766 9.57405 34.0535 11.2581C33.9279 12.1042 33.6207 12.9131 33.1531 13.6293C32.6854 14.3455 32.0683 14.952 31.3441 15.4072C30.6646 15.86 29.8815 16.1335 29.0678 16.2022C28.2541 16.271 27.4363 16.1327 26.6904 15.8003C24.7407 14.8016 24.1138 12.1612 25.0276 10.2222C25.9413 8.28312 28.0557 7.03468 30.2285 6.67874",
				fill: "#FFE100"
			}), o.a.createElement("path", {
				d: "M30.2234 6.70437C30.2234 6.84781 29.8568 7.02844 29.2034 7.35781C28.3079 7.78652 27.4922 8.36505 26.7915 9.06844C26.3496 9.52813 26.0013 10.0694 25.7662 10.6622C25.5259 11.303 25.4635 11.9969 25.5856 12.6703C25.6967 13.3812 26.0405 14.0351 26.5631 14.5297C27.1303 15.0238 27.8679 15.2773 28.619 15.2363C29.4212 15.1929 30.2 14.9507 30.8853 14.5315C31.5706 14.1123 32.1409 13.5294 32.5449 12.835C32.9181 12.2251 33.1554 11.542 33.2409 10.8322C33.3093 10.2247 33.2422 9.60964 33.0443 9.03125C32.8745 8.611 32.6213 8.22954 32.2998 7.90996C31.9784 7.59037 31.5955 7.33928 31.1743 7.17188L30.7334 6.98594C30.6006 6.93281 30.489 6.89562 30.3934 6.85312C30.2074 6.76812 30.1065 6.68844 30.1118 6.61938C30.1171 6.55031 30.2234 6.49188 30.4359 6.44938C30.5597 6.41572 30.6857 6.39086 30.8131 6.375C30.9689 6.375 31.146 6.375 31.3443 6.375C31.862 6.43362 32.3626 6.59625 32.8159 6.85312C33.4476 7.21722 33.9647 7.75091 34.3087 8.39375C34.707 9.1685 34.906 10.0303 34.8878 10.9013C34.8642 11.8885 34.6094 12.8565 34.144 13.7275C33.6405 14.691 32.9115 15.5185 32.019 16.1394C31.0401 16.8273 29.8836 17.2183 28.6881 17.2656C28.0543 17.2918 27.4217 17.1916 26.827 16.9709C26.2323 16.7502 25.6875 16.4133 25.2243 15.98C24.3918 15.1629 23.8712 14.0804 23.7528 12.92C23.6314 11.9062 23.8048 10.8788 24.2521 9.96094C24.6371 9.20405 25.1807 8.53905 25.8459 8.01125C26.7532 7.2829 27.8325 6.79995 28.9803 6.60875C29.7506 6.49187 30.2021 6.57156 30.2234 6.70437Z",
				fill: "black"
			}), o.a.createElement("path", {
				d: "M30.8976 6.72683C31.1579 6.66308 31.5298 7.04558 31.7423 7.78933C31.9784 8.79378 31.8949 9.84689 31.5032 10.8015C31.2935 11.3272 31.0051 11.818 30.6479 12.2571C30.3463 12.6165 29.9873 12.9235 29.5854 13.1656C28.8948 13.5746 28.3636 13.58 28.2201 13.3515C28.0767 13.1231 28.2839 12.6928 28.5814 12.1456C28.9746 11.4865 29.3225 10.8013 29.6226 10.095C29.8963 9.36535 30.1269 8.62032 30.3132 7.86371C30.4726 7.23683 30.6161 6.79058 30.8976 6.72683Z",
				fill: "black"
			}), o.a.createElement("path", {
				d: "M41.5334 9.92461C41.4803 10.1849 40.4178 10.254 38.8028 9.79711C37.8882 9.51813 36.9937 9.17735 36.1253 8.77711C35.1627 8.31315 34.1598 7.93795 33.1291 7.65617C32.1244 7.42754 31.0907 7.35409 30.0638 7.43836C29.2286 7.52398 28.4086 7.7205 27.6253 8.02273C26.2494 8.55398 25.4578 9.14898 25.2347 8.93648C25.1391 8.84617 25.2028 8.56461 25.4738 8.16086C25.8736 7.59955 26.3788 7.12139 26.9613 6.75305C27.8287 6.18636 28.8003 5.79808 29.8194 5.61086C31.0702 5.37841 32.3551 5.4019 33.5966 5.67992C34.7826 5.99304 35.9183 6.47237 36.97 7.10367L39.3713 8.46367C40.6941 9.21804 41.5972 9.63773 41.5334 9.92461Z",
				fill: "black"
			}), o.a.createElement("path", {
				d: "M16.3469 27.1684C15.1834 31.5194 19.8691 30.6906 21.0909 30.3559C23.1767 29.6804 25.2069 28.8438 27.1631 27.8538C31.8594 25.6491 37.1719 27.8909 42.2559 28.2097C46.1712 28.4541 51.2234 27.5031 54.7031 25.4791C55.7226 24.8009 56.8041 24.221 57.9331 23.7472C59.0753 23.3488 60.9241 23.3169 61.9387 24.0235C63.575 25.1656 63.8087 27.9388 62.7941 29.7716C61.7794 31.6044 59.3409 32.6138 57.4497 33.0547C55.5584 33.4956 52.5303 33.4691 50.6178 33.7825C46.4581 34.4625 42.6491 36.7044 38.8825 38.7763C35.1159 40.8481 31.1369 42.8191 26.9294 42.8988C22.7219 42.9784 18.2116 40.6994 16.5966 36.3644",
				fill: "#6FC437"
			}), o.a.createElement("path", {
				d: "M16.5962 36.3647C16.6706 36.3382 16.8566 36.6729 17.2284 37.2732C17.7658 38.1426 18.4322 38.9254 19.2047 39.5947C19.7596 40.068 20.3591 40.4861 20.995 40.8432C21.7502 41.2551 22.5483 41.5829 23.375 41.8207C24.3242 42.0909 25.3048 42.2355 26.2916 42.251C27.4037 42.2551 28.5125 42.1303 29.5959 41.8791C32.1194 41.2339 34.543 40.2473 36.7997 38.9466C39.3072 37.6079 41.9263 35.9504 44.965 34.5797C46.5396 33.8536 48.1893 33.3031 49.8844 32.9382C51.6272 32.6706 53.3827 32.4933 55.1438 32.4069C55.9739 32.3443 56.7969 32.2092 57.6034 32.0032C58.4019 31.7924 59.1737 31.4912 59.9038 31.1054C60.5918 30.7561 61.1954 30.2612 61.6728 29.655C62.1005 29.05 62.344 28.3341 62.3741 27.5938C62.4391 26.8671 62.2836 26.1376 61.9278 25.5007C61.7735 25.2369 61.5631 25.0102 61.3116 24.8366C61.035 24.6788 60.7298 24.5776 60.4138 24.5391C59.6799 24.4319 58.9313 24.4937 58.225 24.7197C57.4612 25.0208 56.7297 25.3982 56.0416 25.846C55.2653 26.3294 54.4578 26.7607 53.6244 27.1369C52.8035 27.4992 51.9607 27.8097 51.1009 28.0666C49.4514 28.5604 47.7575 28.8913 46.0434 29.0547C44.4089 29.2203 42.7612 29.2079 41.1294 29.0175C39.5356 28.8263 38.08 28.5288 36.6722 28.2738C35.3402 28.0081 33.9938 27.8201 32.64 27.7107C31.4336 27.6159 30.2199 27.7001 29.0381 27.9604C28.7672 28.04 28.5069 28.1038 28.2253 28.1888L27.4603 28.481L25.8984 29.1663C24.8784 29.6125 23.9009 30.0057 22.9606 30.335C22.0782 30.665 21.1627 30.8983 20.23 31.031C19.4208 31.1435 18.5977 31.1056 17.8022 30.9194C17.4568 30.8459 17.1313 30.6986 16.848 30.4877C16.5647 30.2769 16.3302 30.0073 16.1606 29.6975C16.0412 29.4467 15.9657 29.1771 15.9375 28.9007C15.9375 28.7785 15.9375 28.6616 15.9375 28.5554L15.9747 28.2525C16.0038 27.969 16.0755 27.6914 16.1872 27.4291C16.258 27.252 16.3094 27.167 16.3413 27.1741C16.3731 27.1741 16.3891 27.2857 16.3891 27.4716C16.3709 27.7369 16.3709 28.0032 16.3891 28.2685V28.5394C16.3891 28.6297 16.4316 28.7254 16.4528 28.821C16.4983 29.0281 16.5753 29.227 16.6812 29.4107C16.8327 29.6195 17.0263 29.7941 17.2497 29.9232C17.473 30.0522 17.721 30.1328 17.9775 30.1597C18.6848 30.2584 19.4038 30.2332 20.1025 30.0854C20.9525 29.9041 21.782 29.6371 22.5781 29.2885C23.46 28.9219 24.395 28.4916 25.3725 28.0082L26.8919 27.2485L27.7631 26.8713C28.0659 26.7597 28.3741 26.6694 28.6875 26.5685C30.0025 26.2244 31.3619 26.0811 32.7197 26.1435C34.1446 26.2123 35.5639 26.3684 36.9697 26.611C38.4041 26.8341 39.8544 27.0944 41.3366 27.2379C42.8462 27.3836 44.3672 27.3676 45.8734 27.19C47.4612 27.0144 49.0284 26.687 50.5538 26.2125C51.334 25.9712 52.0987 25.682 52.8434 25.3466C53.5987 24.9951 54.3299 24.5941 55.0322 24.146C55.8266 23.6269 56.6721 23.1908 57.5556 22.8444C58.5801 22.4962 59.6729 22.3978 60.7431 22.5575C61.3352 22.6353 61.9048 22.8342 62.4166 23.1419C62.922 23.4764 63.3466 23.9192 63.6597 24.4382C64.2328 25.4266 64.4904 26.5665 64.3981 27.7054C64.344 28.834 63.9639 29.9227 63.3038 30.8397C62.6476 31.6843 61.8132 32.3736 60.86 32.8585C59.9903 33.3172 59.0704 33.6737 58.1188 33.921C57.2003 34.1502 56.2635 34.2977 55.3191 34.3619C53.5234 34.5266 51.7916 34.5319 50.2563 34.8347C48.6967 35.1505 47.1756 35.6331 45.7194 36.2744C42.8241 37.5229 40.1891 39.106 37.5806 40.4235C35.165 41.7338 32.5747 42.6926 29.8881 43.271C28.6882 43.5036 27.4646 43.591 26.2438 43.5313C24.1971 43.4083 22.2153 42.7666 20.485 41.6666C19.8217 41.2309 19.2072 40.7251 18.6522 40.1579C17.8852 39.3815 17.2771 38.463 16.8619 37.4538C16.5962 36.7738 16.5378 36.386 16.5962 36.3647Z",
				fill: "black"
			}), o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M15.9056 56.1432C15.9322 56.0423 16.66 56.2016 18.0306 56.2973C19.9614 56.4358 21.9006 56.1994 23.7416 55.6013V56.6054C21.675 56.106 19.2419 55.5004 16.5006 54.8098C16.3366 54.7683 16.1933 54.6685 16.0975 54.5291C16.0018 54.3896 15.9601 54.22 15.9802 54.052C16.0004 53.8841 16.0811 53.7292 16.2072 53.6164C16.3333 53.5036 16.4962 53.4406 16.6653 53.4391L24.3844 53.3807L24.2038 54.9745L16.15 53.3435C15.9098 53.3203 15.6886 53.2025 15.5352 53.0162C15.3818 52.8299 15.3086 52.5903 15.3319 52.3501C15.3551 52.1099 15.4729 51.8887 15.6592 51.7353C15.8455 51.5818 16.0851 51.5087 16.3253 51.532H24.5703L24.2516 53.4126L15.7091 50.496C15.474 50.4083 15.2803 50.2357 15.1661 50.0122C15.0519 49.7887 15.0256 49.5306 15.0922 49.2887C15.1589 49.0468 15.3137 48.8386 15.5262 48.7051C15.7387 48.5716 15.9935 48.5226 16.2403 48.5676C18.6243 49.1407 21.1091 49.1498 23.4972 48.5941C23.8691 48.5091 24.2356 48.4082 24.5969 48.2966L24.7085 50.257C21.5321 49.6143 18.5436 48.2573 15.9694 46.2885C15.7461 46.1476 15.5879 45.9238 15.5296 45.6662C15.4713 45.4087 15.5177 45.1386 15.6586 44.9152C15.7995 44.6919 16.0233 44.5337 16.2809 44.4754C16.5384 44.4172 16.8086 44.4636 17.0319 44.6045C19.6027 45.9258 22.5624 46.2802 25.3725 45.6032L25.4681 47.4626C21.9273 46.9125 18.653 45.2512 16.1181 42.7185C15.9739 42.5722 15.8867 42.3791 15.8724 42.1741C15.8581 41.9691 15.9176 41.7658 16.0402 41.6009C16.1627 41.4359 16.3403 41.3203 16.5407 41.2749C16.7411 41.2295 16.9511 41.2573 17.1328 41.3532C20.4843 43.127 24.3187 43.7716 28.066 43.1913L28.2147 44.5513C26.3054 44.5726 24.4142 44.1794 22.6716 43.3989C20.9289 42.6183 19.3764 41.4691 18.121 40.0304C16.3997 37.9904 16.081 36.5029 16.1606 36.487C16.2403 36.471 16.8725 37.7513 18.6628 39.5151C19.7495 40.5677 21.0069 41.4281 22.3816 42.0598C24.1869 42.8963 26.1693 43.2793 28.1563 43.1754C28.3281 43.1674 28.4966 43.2244 28.6284 43.3349C28.7602 43.4454 28.8456 43.6014 28.8677 43.772C28.8898 43.9426 28.8469 44.1152 28.7476 44.2557C28.6483 44.3961 28.4998 44.4941 28.3316 44.5301C24.2582 45.3238 20.0364 44.7407 16.3306 42.8726L17.3347 41.4966C19.6443 43.7046 22.5867 45.1349 25.7497 45.5873C25.9635 45.6218 26.1591 45.7283 26.3042 45.8891C26.4492 46.0499 26.535 46.2554 26.5474 46.4716C26.5598 46.6878 26.498 46.9018 26.3723 47.0781C26.2466 47.2545 26.0644 47.3826 25.856 47.4413C22.5937 48.2777 19.1387 47.9001 16.1341 46.3788L17.1966 44.6895C19.5492 46.4691 22.2731 47.6949 25.1653 48.2754C25.3887 48.3155 25.592 48.4297 25.7425 48.5995C25.8929 48.7694 25.9818 48.985 25.9947 49.2115C26.0076 49.4381 25.9437 49.6624 25.8135 49.8482C25.6833 50.034 25.4942 50.1705 25.2769 50.2357C24.8678 50.3579 24.4588 50.4695 24.0444 50.5704C21.353 51.1955 18.5524 51.1791 15.8685 50.5226L16.3997 48.5995L24.9369 51.5745C25.1503 51.6522 25.3295 51.8026 25.4431 51.9993C25.5567 52.196 25.5975 52.4264 25.5582 52.6502C25.5189 52.8739 25.4021 53.0766 25.2282 53.2228C25.0544 53.369 24.8347 53.4494 24.6075 53.4498L16.3625 53.3595L16.5591 51.5638L24.5863 53.3966C24.7668 53.4559 24.9211 53.5761 25.0227 53.7367C25.1243 53.8973 25.1667 54.0883 25.1429 54.2768C25.119 54.4653 25.0302 54.6397 24.8918 54.7699C24.7534 54.9001 24.574 54.978 24.3844 54.9904L16.6706 54.8045L16.8619 53.4338C19.5766 54.2307 21.9778 54.9479 24.0125 55.5588H24.0444C24.1452 55.5971 24.232 55.6651 24.2932 55.7538C24.3544 55.8425 24.3872 55.9478 24.3872 56.0556C24.3872 56.1634 24.3544 56.2686 24.2932 56.3573C24.232 56.446 24.1452 56.514 24.0444 56.5523C22.0621 57.0867 19.985 57.1684 17.9669 56.7913C16.5538 56.5629 15.8791 56.2229 15.9056 56.1432Z",
				fill: "#46A508"
			}))), o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M49.2576 33.4109C49.2895 33.5065 48.3438 33.9421 46.4526 34.16C45.2942 34.2589 44.1279 34.2053 42.9835 34.0006C41.4356 33.7344 39.9444 33.2062 38.5741 32.4387L39.5145 31.6684C39.8429 32.4763 40.396 33.1732 41.1082 33.6765C41.8809 34.2352 42.8109 34.5347 43.7645 34.5318C43.952 34.5325 44.133 34.6007 44.2744 34.7239C44.4158 34.8471 44.5082 35.017 44.5346 35.2027C44.561 35.3884 44.5198 35.5773 44.4184 35.7351C44.3169 35.8928 44.1621 36.0088 43.9823 36.0618C41.9311 36.6168 39.7691 36.615 37.7188 36.0565C35.4533 35.4519 33.4122 34.2025 31.8432 32.46L33.4688 31.7481C33.6742 33.1589 34.3636 34.4544 35.419 35.4129C36.4744 36.3714 37.8301 36.9332 39.2541 37.0021C39.5029 37.004 39.7421 37.0987 39.9247 37.2676C40.1074 37.4366 40.2204 37.6676 40.2417 37.9155C40.263 38.1634 40.1909 38.4103 40.0397 38.6079C39.8885 38.8054 39.669 38.9395 39.4241 38.9837C36.6893 39.444 33.8798 38.9167 31.4979 37.4962C29.5513 36.3645 27.9766 34.6901 26.9663 32.6778L28.8682 32.3059C28.8229 33.9808 29.3879 35.615 30.4581 36.9042C31.5284 38.1933 33.0308 39.0495 34.6854 39.3131C34.9012 39.3677 35.0907 39.4972 35.22 39.6784C35.3494 39.8596 35.4102 40.0809 35.3917 40.3027C35.3732 40.5246 35.2766 40.7327 35.1191 40.89C34.9615 41.0474 34.7532 41.1437 34.5313 41.1618C29.6802 40.9632 25.0459 39.0982 21.4095 35.8812L22.6154 35.0631C23.1301 36.7477 24.165 38.2262 25.5717 39.2865C26.9784 40.3467 28.6847 40.9344 30.446 40.9653C31.4366 40.9885 32.4251 40.8631 33.3785 40.5934C34.0426 40.4075 34.3932 40.2746 34.441 40.349C34.4888 40.4234 34.1913 40.6678 33.5432 40.9971C32.5824 41.4638 31.5389 41.7364 30.4726 41.7993C28.7433 41.9263 27.0146 41.544 25.5001 40.6996C23.473 39.5681 21.9307 37.7329 21.1651 35.5412C21.1104 35.3879 21.1075 35.2208 21.1569 35.0656C21.2063 34.9105 21.3052 34.7758 21.4385 34.6823C21.5718 34.5889 21.7321 34.5417 21.8948 34.5481C22.0575 34.5545 22.2136 34.6141 22.3391 34.7178H22.3657C25.8186 37.5513 30.1191 39.15 34.5845 39.2599L34.457 41.1299C32.3117 40.8323 30.3519 39.7529 28.9538 38.0989C27.5556 36.4448 26.8176 34.3326 26.8813 32.1678C26.8961 31.9485 26.9825 31.7402 27.1271 31.5747C27.2717 31.4092 27.4667 31.2958 27.682 31.2518C27.8973 31.2077 28.1211 31.2356 28.319 31.331C28.517 31.4264 28.6782 31.5841 28.7779 31.78C29.6236 33.4296 30.9254 34.8015 32.5285 35.7325C34.4951 36.9066 36.8105 37.3558 39.0735 37.0021L39.2382 38.9837C37.3357 38.9005 35.5245 38.1446 34.1274 36.8506C32.7303 35.5566 31.838 33.8086 31.6095 31.9181C31.5927 31.7204 31.6389 31.5225 31.7415 31.3527C31.844 31.1829 31.9977 31.0498 32.1804 30.9726C32.3631 30.8954 32.5656 30.8779 32.7589 30.9228C32.9521 30.9676 33.1262 31.0724 33.2563 31.2221C34.5188 32.6497 36.1403 33.7135 37.9526 34.3029C39.7649 34.8924 41.7019 34.9861 43.5626 34.5743L43.7538 36.115C42.481 36.0776 41.2538 35.6325 40.2529 34.8453C39.347 34.1481 38.6654 33.2006 38.2926 32.12V32.0934C38.2495 31.9688 38.2461 31.8339 38.2828 31.7072C38.3196 31.5806 38.3947 31.4685 38.4978 31.3863C38.601 31.3041 38.727 31.256 38.8587 31.2485C38.9903 31.241 39.1211 31.2744 39.2329 31.3443C40.4533 32.1095 41.7874 32.6762 43.1854 33.0231C44.2447 33.2852 45.3297 33.4295 46.4207 33.4534C48.227 33.4693 49.2257 33.2728 49.2576 33.4109Z",
				fill: "#46A508"
			}))), o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M60.5631 23.7427C60.5631 23.6524 60.9456 23.6046 61.429 23.9711C61.7639 24.2552 62.0232 24.6179 62.1836 25.0268C62.344 25.4356 62.4005 25.8779 62.3481 26.3139C62.2524 27.5146 61.2856 28.7152 59.9202 29.3155C58.5549 29.9158 56.8974 29.9211 55.3887 29.8467L55.9731 28.0724C57.1635 28.7524 58.5499 29.0072 59.9043 28.7949C60.7699 28.6681 61.5959 28.3485 62.3215 27.8599H62.3534C62.5116 27.7504 62.6985 27.6897 62.8909 27.6855C63.0832 27.6812 63.2726 27.7336 63.4356 27.8359C63.5985 27.9383 63.7278 28.0863 63.8074 28.2615C63.887 28.4367 63.9134 28.6314 63.8834 28.8214C63.7869 29.3568 63.5845 29.8676 63.2881 30.3237C62.9916 30.7799 62.607 31.1722 62.1568 31.4777C61.7608 31.7608 61.3236 31.9812 60.8606 32.1311C60.4399 32.2674 60.005 32.3548 59.5643 32.3914C58.8034 32.4487 58.0382 32.4005 57.2906 32.248C56.6732 32.1277 56.0658 31.9607 55.4737 31.7486C53.3487 30.9517 52.3234 29.9742 52.4456 29.7936C52.5677 29.613 53.7737 30.1124 55.819 30.5108C56.9795 30.76 58.1732 30.8157 59.3518 30.6755C59.9645 30.5886 60.5445 30.3452 61.0359 29.9689C61.5085 29.6212 61.8268 29.1028 61.9231 28.5239L63.4849 29.4642C62.5166 30.1633 61.3941 30.6188 60.2124 30.7924C58.3863 31.078 56.5186 30.6889 54.9584 29.698H54.9212C54.7438 29.5799 54.6109 29.4059 54.5437 29.2036C54.4765 29.0014 54.4788 28.7824 54.5502 28.5816C54.6216 28.3808 54.758 28.2096 54.9379 28.0952C55.1177 27.9808 55.3306 27.9298 55.5427 27.9502C57.0462 28.1149 58.3265 28.1786 59.3146 27.8333C59.7356 27.7196 60.1237 27.5077 60.4469 27.215C60.7702 26.9222 61.0193 26.557 61.174 26.1492C61.2537 25.8645 61.2764 25.5668 61.2409 25.2733C61.2053 24.9797 61.1122 24.6961 60.9668 24.4386C60.7649 24.0242 60.5312 23.8596 60.5631 23.7427Z",
				fill: "#46A508"
			}))), o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M40.0247 15.3553C39.844 15.3606 39.844 14.3459 39.2065 12.7999C38.8191 11.8681 38.2807 11.0065 37.6128 10.2499C36.7769 9.2701 35.721 8.50189 34.5315 8.00807L35.4028 6.83932C36.6817 8.3338 37.5026 10.1654 37.7668 12.1146C38.0973 14.3746 37.6794 16.6806 36.5768 18.6809L34.9406 17.6503C35.6649 16.5473 36.0896 15.2749 36.1731 13.9581C36.2556 12.5818 35.954 11.2097 35.3018 9.99494C34.9259 9.2886 34.4399 8.64661 33.8622 8.09307L35.4187 6.83932C36.1252 8.00669 36.5313 9.33095 36.6007 10.6937C36.6701 12.0564 36.4007 13.4151 35.8165 14.6482C35.2323 15.8813 34.3516 16.9504 33.2531 17.7598C32.1546 18.5692 30.8726 19.0938 29.5218 19.2865H29.49C29.2939 19.304 29.098 19.252 28.9363 19.1396C28.7747 19.0272 28.6578 18.8616 28.6059 18.6717C28.554 18.4819 28.5705 18.2798 28.6524 18.1009C28.7344 17.9219 28.8767 17.7775 29.0543 17.6928C30.6463 17.0222 31.9917 15.8754 32.9059 14.4096C33.6102 13.264 34.0326 11.9677 34.1384 10.6271C34.2044 9.73943 34.158 8.84695 34.0003 7.97088C33.8993 7.35463 33.8303 7.01463 33.9153 6.97745C34.0003 6.94026 34.2181 7.22182 34.489 7.82745C34.8665 8.71431 35.0755 9.66374 35.1053 10.6271C35.1566 12.1756 34.8013 13.7106 34.0747 15.079C33.1075 16.8959 31.5771 18.3499 29.7131 19.2228L29.2456 17.629C30.2238 17.438 31.1474 17.032 31.9495 16.4403C32.7516 15.8486 33.4122 15.086 33.8834 14.2078C34.3808 13.2216 34.622 12.1262 34.5849 11.0223C34.5477 9.91845 34.2334 8.84169 33.6709 7.8912C33.5465 7.6823 33.5017 7.43553 33.5448 7.19626C33.5878 6.95698 33.7157 6.74126 33.905 6.58876C34.0944 6.43626 34.3324 6.35722 34.5753 6.36616C34.8183 6.37511 35.0499 6.47144 35.2275 6.63745C35.9671 7.33144 36.5897 8.14054 37.0709 9.03338C37.8952 10.5833 38.2636 12.335 38.1334 14.0856C38.0122 15.7483 37.4512 17.3489 36.5078 18.7234C36.3669 18.9397 36.1458 19.0911 35.8933 19.1444C35.6407 19.1977 35.3773 19.1485 35.1611 19.0076C34.9448 18.8667 34.7933 18.6457 34.74 18.3931C34.6867 18.1405 34.7359 17.8772 34.8768 17.6609C35.7409 16.1231 36.1392 14.3673 36.0232 12.6072C35.9072 10.8471 35.2819 9.15878 34.2234 7.74776L34.1915 7.70526C34.0908 7.57321 34.0372 7.41125 34.0393 7.24521C34.0413 7.07916 34.0988 6.91857 34.2027 6.78901C34.3066 6.65946 34.4509 6.5684 34.6125 6.53034C34.7741 6.49228 34.9439 6.50942 35.0947 6.57901C36.4742 7.22799 37.6661 8.21697 38.5584 9.45307C39.2257 10.3634 39.7126 11.3931 39.9928 12.4865C40.4337 14.3459 40.1362 15.3712 40.0247 15.3553Z",
				fill: "#46A508"
			}))), o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M53.1677 6.63077C53.1252 6.5139 53.8318 6.09952 55.2927 5.89234C56.1786 5.79214 57.0746 5.82978 57.9489 6.0039C59.1332 6.2359 60.2598 6.69992 61.2639 7.36921C61.4041 7.46442 61.5067 7.60555 61.5539 7.76827C61.6012 7.93099 61.5902 8.1051 61.5228 8.26059C61.4555 8.41607 61.336 8.54318 61.185 8.62C61.0339 8.69682 60.8608 8.71853 60.6955 8.6814H60.6317C59.5297 8.427 58.3818 8.4489 57.2902 8.74515C56.0696 9.0716 54.9651 9.73426 54.1027 10.6576L52.9127 9.20202C54.2865 8.31694 55.8747 7.8212 57.508 7.76765C59.2396 7.7375 60.9488 8.16251 62.4646 9.00015C62.6576 9.10657 62.8108 9.27296 62.9009 9.47417C62.9909 9.67538 63.013 9.90045 62.9638 10.1153C62.9146 10.3302 62.7967 10.5232 62.6281 10.6652C62.4594 10.8071 62.2491 10.8903 62.0289 10.902H61.9971L61.2533 10.9339C59.3054 11.069 57.4233 11.694 55.7814 12.7508C54.3007 13.7231 53.035 14.9888 52.0627 16.4695L50.6336 15.407C52.0227 13.9334 53.7388 12.807 55.6433 12.1186C57.0915 11.5828 58.6255 11.3163 60.1696 11.3323C62.7408 11.3855 64.0742 12.1239 64.0158 12.2673C63.9627 12.4958 62.5655 12.1398 60.2227 12.3948C58.8329 12.549 57.4759 12.92 56.2011 13.4945C54.5737 14.2088 53.1229 15.2715 51.9511 16.6076C51.8028 16.7769 51.5962 16.8843 51.3724 16.9085C51.1487 16.9326 50.924 16.8719 50.7429 16.7382C50.5618 16.6046 50.4375 16.4078 50.3946 16.1868C50.3517 15.9658 50.3934 15.7368 50.5114 15.5451C51.5705 13.7663 53.0068 12.2412 54.7189 11.0773C56.6201 9.81518 58.8172 9.06999 61.0939 8.91515L61.9652 8.87796L61.4924 10.7798C60.2871 10.0943 58.9264 9.72857 57.5399 9.71734C56.2508 9.74296 54.9916 10.1096 53.8902 10.7798H53.8583C53.6629 10.8955 53.432 10.9361 53.2088 10.894C52.9856 10.8519 52.7854 10.73 52.6455 10.5511C52.5056 10.3722 52.4356 10.1484 52.4486 9.92169C52.4616 9.69493 52.5567 9.48066 52.7161 9.3189C53.857 8.16683 55.3106 7.37447 56.8971 7.03984C58.2706 6.73971 59.6986 6.80195 61.0408 7.22046L60.4086 8.52202C58.934 7.40477 57.1565 6.75858 55.3086 6.66796C53.9805 6.63609 53.2102 6.79015 53.1677 6.63077Z",
				fill: "#46A508"
			}))), o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M12.0118 17.4526C11.8683 17.4101 11.9746 16.353 12.7927 14.6848C13.9874 12.3457 15.8321 10.4014 18.1052 9.08545C18.2714 8.9849 18.4679 8.94637 18.6598 8.97668C18.8517 9.00698 19.0267 9.10417 19.1539 9.25105C19.2811 9.39793 19.3522 9.58505 19.3547 9.77932C19.3573 9.97359 19.291 10.1625 19.1677 10.3126L19.1305 10.3551C17.6679 12.1595 16.8624 14.4075 16.8461 16.7301L14.8752 16.5389C15.4115 13.1328 16.9269 9.95615 19.2368 7.39608C19.3903 7.17839 19.6241 7.03063 19.8866 6.9853C20.1491 6.93997 20.4189 7.00078 20.6366 7.15436C20.8543 7.30793 21.0021 7.5417 21.0474 7.80422C21.0927 8.06674 21.0319 8.33652 20.8783 8.5542C19.6049 10.865 19.1446 13.5367 19.5715 16.1405L17.813 16.3264C17.8123 13.1603 18.6717 10.0534 20.2993 7.33764C21.4946 5.40389 22.5199 4.57514 22.6474 4.68139C22.7749 4.78764 22.0896 5.84483 21.2502 7.82108C20.0689 10.4829 19.5094 13.3789 19.614 16.2892C19.6172 16.5069 19.5404 16.7181 19.398 16.8828C19.2556 17.0475 19.0577 17.1541 18.8418 17.1823C18.626 17.2105 18.4073 17.1584 18.2274 17.0358C18.0475 16.9133 17.9189 16.7288 17.8661 16.5176V16.4805C17.2198 13.4588 17.6659 10.3058 19.1252 7.58201L20.7508 8.73483C18.7241 11.0332 17.3646 13.8421 16.8196 16.8576V16.8842C16.7871 17.1368 16.6574 17.3668 16.4579 17.5251C16.2585 17.6835 16.0051 17.7578 15.7517 17.7322C15.4984 17.7066 15.265 17.5831 15.1013 17.388C14.9376 17.1929 14.8564 16.9416 14.8752 16.6876C14.948 13.93 16.0095 11.2904 17.8661 9.25014L18.8861 10.5198C16.7786 11.6163 14.9671 13.2055 13.6055 15.1523C12.6068 16.5814 12.219 17.5323 12.0118 17.4526Z",
				fill: "#46A508"
			}))), o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M48.6468 10.7373C48.5512 10.8436 48.2537 10.7373 47.8181 10.5089C47.5835 10.3898 47.3356 10.2989 47.0796 10.2379C46.8292 10.1815 46.5671 10.2115 46.3359 10.3229C46.2563 10.366 46.1943 10.4355 46.1606 10.5195C46.1021 10.6258 46.0225 10.8329 45.8737 11.1304C45.7765 11.3261 45.6492 11.5054 45.4965 11.6617C45.2541 11.903 44.9364 12.0541 44.5962 12.0899C44.256 12.1256 43.9138 12.0439 43.6265 11.8583C43.405 11.7189 43.2121 11.5386 43.0581 11.327C42.9376 11.1599 42.8327 10.982 42.7446 10.7958C42.7021 10.7054 42.665 10.6151 42.6331 10.5301C42.6128 10.4758 42.5898 10.4226 42.564 10.3708C42.5218 10.2741 42.4624 10.1859 42.3887 10.1104C42.4404 10.1381 42.4971 10.1552 42.5555 10.1606C42.6139 10.1661 42.6728 10.1599 42.7287 10.1423C42.8202 10.1125 42.8988 10.0526 42.9518 9.97232C42.9492 10.0219 42.9492 10.0715 42.9518 10.1211C42.9445 10.252 42.9445 10.3833 42.9518 10.5142C42.9518 11.0454 42.9518 11.5767 42.9518 12.0654C42.954 12.2782 42.8878 12.4861 42.763 12.6585C42.6382 12.8308 42.4613 12.9585 42.2584 13.0228C42.0555 13.087 41.8374 13.0845 41.6361 13.0154C41.4348 12.9463 41.261 12.8145 41.1403 12.6392C40.0435 11.1035 38.7321 9.73307 37.2462 8.56982C36.1146 7.66138 35.3496 7.14607 35.4506 6.90169C35.5515 6.65732 36.5131 6.77419 37.9421 7.43294C39.8465 8.36926 41.4988 9.74829 42.7606 11.4545L40.9065 12.0389V10.4876C40.8931 10.2771 40.8931 10.066 40.9065 9.85544C40.9372 9.56904 41.0181 9.29029 41.1456 9.032C41.3353 8.64295 41.6716 8.34495 42.0806 8.20325C42.2923 8.13438 42.516 8.11061 42.7375 8.13349C42.9589 8.15636 43.1731 8.22537 43.3662 8.33607C43.626 8.49178 43.849 8.70204 44.0196 8.95232C44.1488 9.14319 44.2557 9.34816 44.3384 9.56325C44.3756 9.65357 44.4234 9.79169 44.4393 9.8395L44.4925 9.99888C44.5236 10.0847 44.5609 10.1681 44.604 10.2486L44.6412 10.3176C44.6076 10.3538 44.5774 10.3929 44.5509 10.4345C44.4393 10.5992 44.4765 10.6576 44.4659 10.5461C44.4553 10.4345 44.4659 10.5461 44.4659 10.5461C44.4559 10.5252 44.4434 10.5056 44.4287 10.4876C44.4014 10.4452 44.3693 10.4059 44.3331 10.3708C44.2959 10.3389 44.3756 10.3229 44.4234 10.2379C44.5788 10.0051 44.7454 9.77989 44.9228 9.56325C45.1749 9.26755 45.5128 9.05773 45.8896 8.96294C46.4432 8.82939 47.0268 8.91304 47.5206 9.19669C47.8395 9.37488 48.1195 9.61512 48.344 9.90325C48.6575 10.3442 48.7425 10.6258 48.6468 10.7373Z",
				fill: "#46A508"
			}))), o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M13.4247 56.2881C13.4619 56.3678 12.3622 56.9468 10.1204 56.8884C8.52214 56.8154 6.96021 56.3876 5.54789 55.6359C4.13556 54.8843 2.90827 53.8277 1.95505 52.5428C1.88048 52.4326 1.84101 52.3025 1.84181 52.1695C1.84261 52.0365 1.88366 51.9068 1.95954 51.7976C2.03543 51.6884 2.14261 51.6047 2.26697 51.5575C2.39134 51.5104 2.52706 51.5019 2.6563 51.5334H2.69349C5.22456 52.2627 7.86652 52.5291 10.4922 52.3196L10.3435 53.9134C8.66603 53.4903 7.10475 52.6965 5.77444 51.5905C4.44414 50.4845 3.37864 49.0944 2.6563 47.5225C2.57928 47.3506 2.5566 47.1593 2.59131 46.9741C2.62601 46.789 2.71644 46.6189 2.85049 46.4866C2.98454 46.3543 3.15581 46.2661 3.34137 46.2338C3.52693 46.2015 3.71793 46.2267 3.8888 46.3059L8.2238 48.3778L7.1188 49.8971C6.19471 48.8709 5.39578 47.7385 4.7388 46.5237C4.08116 45.2873 3.5302 43.997 3.09192 42.6668C3.02161 42.4768 3.01078 42.2698 3.06087 42.0735C3.11096 41.8771 3.2196 41.7006 3.37236 41.5674C3.52512 41.4343 3.71478 41.3507 3.91614 41.3279C4.1175 41.3051 4.32105 41.3441 4.49974 41.4397L9.24911 43.9312L8.05911 45.525C7.52613 44.9916 7.03088 44.4217 6.57692 43.8197C5.01261 41.7008 3.95654 39.2506 3.49036 36.6584C3.45006 36.4414 3.48278 36.2171 3.58343 36.0206C3.68408 35.8242 3.84697 35.6666 4.04666 35.5725C4.24635 35.4785 4.47158 35.4532 4.68715 35.5007C4.90272 35.5481 5.09649 35.6657 5.23817 35.835C6.49203 37.3474 8.12306 38.502 9.9663 39.1818L8.96755 40.8181C7.61693 39.5707 6.53887 38.0574 5.80109 36.3734C5.0633 34.6894 4.68174 32.871 4.68036 31.0325C4.6779 30.8215 4.75068 30.6166 4.88565 30.4545C5.02062 30.2924 5.20895 30.1836 5.41684 30.1478C5.62473 30.112 5.83859 30.1514 6.02003 30.259C6.20148 30.3666 6.33865 30.5354 6.40693 30.735C6.7417 31.6355 7.27967 32.4467 7.97901 33.1055C8.67834 33.7643 9.52019 34.2529 10.4391 34.5334L9.56255 35.7447C8.0215 33.37 6.98869 30.702 6.52911 27.9087C6.17105 25.8004 6.14954 23.6487 6.46536 21.5337C6.99661 18.0434 8.11224 16.3275 8.20786 16.3806C8.40974 16.4497 7.6288 18.2665 7.36849 21.6347C7.22319 23.6548 7.3681 25.6853 7.7988 27.6643C8.34628 30.2355 9.39708 32.6729 10.8907 34.8362C10.9836 34.9708 11.0332 35.1306 11.0327 35.2941C11.0323 35.4577 10.9819 35.6172 10.8883 35.7512C10.7946 35.8853 10.6622 35.9876 10.5089 36.0443C10.3555 36.1011 10.1884 36.1096 10.03 36.0687C8.83993 35.7507 7.74111 35.1576 6.82207 34.3373C5.90304 33.517 5.18946 32.4924 4.7388 31.3459L6.46536 31.0325C6.50371 32.6056 6.86108 34.1546 7.51583 35.5856C8.17059 37.0166 9.10908 38.2997 10.2744 39.3572C10.4439 39.5081 10.5553 39.7135 10.5892 39.9379C10.6231 40.1623 10.5774 40.3915 10.4601 40.5858C10.3428 40.78 10.1612 40.9271 9.94683 41.0016C9.73244 41.076 9.49877 41.0731 9.2863 40.9934C8.226 40.6058 7.2178 40.0883 6.28474 39.4528C5.33029 38.7879 4.46756 38.0002 3.7188 37.11L5.46661 36.2706C5.88363 38.5773 6.82314 40.758 8.21317 42.6456C8.61082 43.1704 9.04392 43.6674 9.50942 44.1331C9.67281 44.3058 9.76996 44.5307 9.78377 44.7681C9.79757 45.0054 9.72714 45.2401 9.58489 45.4306C9.44263 45.6211 9.23769 45.7553 9.00618 45.8095C8.77468 45.8637 8.53147 45.8344 8.31942 45.7268L3.57005 43.23L4.98849 42.024C5.71117 44.4427 6.92667 46.6856 8.55849 48.6115C8.70634 48.7764 8.79276 48.9872 8.80313 49.2085C8.81351 49.4297 8.74721 49.6477 8.61544 49.8257C8.48367 50.0037 8.2945 50.1307 8.0799 50.1853C7.86529 50.24 7.6384 50.2189 7.43755 50.1256L3.13442 48.0006L4.37224 46.7521C4.9624 48.0897 5.83933 49.2813 6.94096 50.2424C8.04259 51.2036 9.342 51.9109 10.7472 52.3143C10.9321 52.3663 11.0926 52.4821 11.2003 52.6411C11.3079 52.8001 11.3558 52.9921 11.3355 53.183C11.3151 53.374 11.2278 53.5515 11.089 53.6843C10.9502 53.817 10.7689 53.8963 10.5772 53.9081C7.77483 54.0597 4.96889 53.6831 2.30567 52.7978L3.05474 51.7884C3.96665 53.1458 5.20285 54.2541 6.6513 55.0131C7.7542 55.5968 8.94918 55.9868 10.1841 56.1659C12.2188 56.4421 13.3929 56.1234 13.4247 56.2881Z",
				fill: "#46A508"
			}))), o.a.createElement("path", {
				d: "M3.83093 57.9069C3.93186 57.211 12.4584 57.9494 24.1512 58.5444L22.6053 59.915C22.7157 57.0513 23.1018 54.2048 23.7581 51.4151C24.1151 49.9196 24.5622 48.4472 25.0969 47.0057C25.3589 46.2973 25.6458 45.6067 25.9575 44.9338C26.1116 44.5938 26.2762 44.2644 26.4462 43.9351C26.6162 43.6057 26.7809 43.2976 27.0147 42.9204C27.2088 42.6072 27.5177 42.3823 27.8753 42.2935C29.2406 41.9535 30.5953 41.5976 31.7853 41.231L32.2156 41.0822L32.6672 40.9122L33.5544 40.5776C34.1387 40.3544 34.7054 40.1295 35.2544 39.9029C37.4484 39.0051 39.345 38.1019 40.9069 37.3157C44.0253 35.7219 45.8475 34.6594 46.0653 34.9569C46.2831 35.2544 44.8009 36.7951 41.8153 38.8722C40.0442 40.094 38.189 41.1894 36.2637 42.1501C35.7148 42.4298 35.1428 42.7043 34.5478 42.9735L33.6447 43.3772L33.1825 43.5791L32.6778 43.781C31.3497 44.3122 30.0216 44.7001 28.5766 45.1144L29.4425 44.4769C29.3256 44.6841 29.1662 45.0082 29.0281 45.2791C28.89 45.5501 28.7519 45.8688 28.6191 46.1716C28.3534 46.7826 28.0878 47.4147 27.8753 48.0682C27.4027 49.4081 27.0002 50.7717 26.6694 52.1535C26.069 54.7638 25.6781 57.4178 25.5006 60.0904V60.1382C25.4878 60.326 25.438 60.5095 25.3541 60.678C25.2702 60.8465 25.1538 60.9968 25.0116 61.1202C24.8695 61.2436 24.7043 61.3377 24.5257 61.3971C24.347 61.4565 24.1584 61.48 23.9706 61.4663C12.1556 60.4835 3.71936 58.5869 3.83093 57.9069Z",
				fill: "black"
			}), o.a.createElement("path", {
				d: "M61.0938 23.0134C61.0035 22.9019 61.4179 22.4344 62.1563 21.6534C63.2259 20.6567 64.0872 19.4578 64.6904 18.1259C64.8536 17.7096 64.9625 17.2739 65.0144 16.8297C65.0554 16.3424 65.0376 15.8518 64.9613 15.3688C64.8863 14.82 64.7745 14.2769 64.6266 13.7431C64.5519 13.4714 64.4632 13.2036 64.361 12.9409C64.2547 12.6541 64.1379 12.3725 64.0157 12.0856C63.5273 10.9102 62.9033 9.7959 62.1563 8.76532C61.405 7.69276 60.4135 6.81047 59.261 6.18876C58.6792 5.87159 58.0647 5.61864 57.4282 5.43438C56.817 5.26316 56.1873 5.16683 55.5529 5.14751C54.2787 5.13018 53.007 5.26573 51.7651 5.55126C50.5326 5.80626 49.3319 6.11438 48.1685 6.3322C47.0724 6.55643 45.9563 6.66857 44.8376 6.66688C43.1679 6.69204 41.532 6.19624 40.1572 5.24845C39.2169 4.53126 38.9566 3.9097 39.0522 3.83532C39.1479 3.76095 39.626 4.14345 40.5663 4.57376C41.9042 5.15017 43.3663 5.37862 44.8163 5.23782C45.832 5.1476 46.838 4.96986 47.8232 4.70657C48.8857 4.43032 50.081 4.06907 51.3719 3.74501C52.758 3.37292 54.1868 3.18361 55.6219 3.18188C56.4224 3.19139 57.2185 3.30206 57.9913 3.51126C58.7736 3.72447 59.5293 4.02566 60.2438 4.40907C61.6616 5.17264 62.8751 6.26585 63.7819 7.59657C64.6041 8.77137 65.2736 10.046 65.7741 11.3897C65.891 11.7031 66.0079 12.0166 66.1088 12.33C66.2182 12.6525 66.3104 12.9806 66.3851 13.3128C66.5253 13.9354 66.6194 14.5676 66.6666 15.2041C66.7219 15.8263 66.6969 16.453 66.5922 17.0688C66.4819 17.6388 66.2943 18.1911 66.0344 18.7103C65.5981 19.5601 65.0175 20.3277 64.3185 20.9788C63.8132 21.4539 63.2675 21.884 62.6876 22.2644C61.7526 22.8753 61.1841 23.1197 61.0938 23.0134Z",
				fill: "black"
			}), o.a.createElement("path", {
				d: "M56.2864 52.0966C56.7114 49.2544 56.1217 46.7841 53.2636 44.1278C51.881 42.8163 50.2426 41.8044 48.4509 41.1554C46.6592 40.5063 44.7528 40.2342 42.8511 40.3559C44.8569 39.2047 47.1259 38.5906 49.4386 38.5729C51.7513 38.5552 54.0294 39.1346 56.0526 40.255C60.1061 42.5341 62.7092 45.9978 64.0214 50.9119C64.8555 53.8096 65.435 56.7746 65.7533 59.7731C65.9604 61.4519 66.2526 63.5609 65.1104 64.7137C64.7433 65.0506 64.3138 65.3123 63.8461 65.4841C61.7795 66.3606 59.2348 66.6953 57.5879 65.0962C56.6051 64.1347 56.1323 62.6525 55.1654 61.6697C54.5651 61.0641 53.7417 60.7453 53.1786 60.1078C51.2342 57.9191 50.3204 55.4381 50.7136 52.5641",
				fill: "#6FC437"
			}), o.a.createElement("path", {
				d: "M50.687 52.5476C50.7667 52.5476 50.772 52.861 50.8145 53.4189C50.8575 54.2185 50.9948 55.0102 51.2235 55.7776C51.595 56.9672 52.2001 58.0707 53.0032 59.0235C53.1201 59.1617 53.237 59.3051 53.3645 59.4432C53.4809 59.5795 53.6051 59.709 53.7363 59.831C54.0379 60.0731 54.3576 60.2915 54.6926 60.4845C54.8838 60.6067 55.0804 60.7342 55.2876 60.8935C55.4961 61.053 55.6899 61.2308 55.8667 61.4248C56.2001 61.8096 56.5005 62.2219 56.7645 62.6573C57.2957 63.4914 57.7526 64.3201 58.4379 64.7823C59.2065 65.2646 60.1233 65.4532 61.0198 65.3135C61.5326 65.2584 62.0383 65.1497 62.5285 64.9895C62.7835 64.9098 63.0598 64.8142 63.2882 64.7079C63.5326 64.6121 63.7704 64.5003 64.0001 64.3732C64.3659 64.1836 64.6466 63.863 64.7863 63.4754C64.9476 62.9914 65.0161 62.4814 64.9882 61.972C64.9672 61.3638 64.9122 60.7572 64.8235 60.1551L64.5685 58.2054C64.3932 56.9145 64.1329 55.6182 63.8248 54.2901C63.6689 53.6243 63.5043 52.9531 63.3307 52.2767C63.1607 51.5967 62.9748 50.9167 62.7995 50.2685C62.397 48.9556 61.8481 47.6922 61.1632 46.502C60.2127 44.8871 58.9611 43.4696 57.4763 42.3264C56.7477 41.786 55.9726 41.3113 55.1601 40.9079C54.3864 40.5013 53.5705 40.1807 52.727 39.9517C49.5467 39.0995 46.16 39.5107 43.276 41.0992L42.782 39.5054C45.7395 39.3434 48.6739 40.1086 51.1757 41.6942C52.2028 42.3392 53.1451 43.1102 53.9807 43.9892C54.7069 44.7257 55.3257 45.5609 55.8188 46.4701C56.5149 47.7548 56.8126 49.2177 56.6742 50.6723C56.5679 51.6498 56.3713 52.1385 56.2917 52.1279C56.212 52.1173 56.212 51.5967 56.1482 50.667C56.0747 49.3455 55.6631 48.065 54.9529 46.9482C54.4411 46.1632 53.8285 45.4488 53.1307 44.8232C52.3249 44.0714 51.4333 43.417 50.4745 42.8735C48.1872 41.5701 45.56 40.9869 42.936 41.2001C42.7414 41.2201 42.5457 41.1731 42.3813 41.067C42.2169 40.9608 42.0936 40.8018 42.0317 40.6161C41.9698 40.4305 41.9731 40.2293 42.0409 40.0457C42.1087 39.8621 42.2371 39.7072 42.4048 39.6064C45.6644 37.6925 49.5476 37.1427 53.2104 38.0764C54.1941 38.3244 55.1474 38.6808 56.0526 39.1389C56.9698 39.6042 57.8428 40.1519 58.661 40.7751C60.362 42.0652 61.7948 43.6749 62.8792 45.5139C63.6443 46.8401 64.2539 48.2502 64.696 49.716C64.9085 50.4439 65.0892 51.1345 65.2538 51.841C65.4185 52.5476 65.5885 53.217 65.7426 53.9023C66.0454 55.2729 66.3057 56.6489 66.4704 58.0035L66.6988 59.9798C66.7859 60.6547 66.8338 61.3341 66.8423 62.0145C66.8607 62.7652 66.7326 63.5122 66.4651 64.2139C66.1584 64.9726 65.5941 65.599 64.8713 65.9829C64.5727 66.1398 64.2639 66.2764 63.947 66.392C63.6495 66.5089 63.3467 66.6116 63.0385 66.7001C62.4273 66.8797 61.7986 66.9937 61.1632 67.0401C59.8717 67.1758 58.5753 66.8337 57.5188 66.0785C57.043 65.7111 56.6349 65.2634 56.3129 64.7557C56.0101 64.2935 55.7817 63.8473 55.5426 63.4382C55.3375 63.066 55.103 62.7107 54.8413 62.3757C54.597 62.077 54.3086 61.8172 53.986 61.6054C53.609 61.3539 53.2536 61.0714 52.9235 60.7607C52.7676 60.5927 52.6221 60.4153 52.4879 60.2295C52.3551 60.0701 52.2382 59.9001 52.1213 59.7407C51.3049 58.6279 50.7427 57.3493 50.4745 55.9954C50.3088 55.1514 50.2909 54.285 50.4214 53.4348C50.501 52.8239 50.6285 52.537 50.687 52.5476Z",
				fill: "black"
			}), o.a.createElement("path", {
				d: "M58.6821 51.5324C55.1759 48.042 50.6496 48.1536 46.2562 50.693C41.8628 53.2323 39.7271 59.4002 40.524 64.8136C42.7659 59.7455 47.2071 55.9417 52.1584 54.8633",
				fill: "#6FC437"
			}), o.a.createElement("path", {
				d: "M52.1586 54.8578C52.2223 55.1181 50.5648 55.5218 48.2911 56.9828C46.9336 57.8598 45.7006 58.9158 44.6255 60.1225C43.2791 61.629 42.1865 63.3443 41.3901 65.2012C41.3088 65.395 41.1662 65.5568 40.9842 65.6618C40.8021 65.7668 40.5907 65.8094 40.3823 65.7829C40.1738 65.7563 39.9797 65.6623 39.8298 65.515C39.6799 65.3678 39.5823 65.1754 39.552 64.9675C39.1812 62.5558 39.3389 60.0924 40.0142 57.7478C40.9067 54.5603 42.8405 51.6968 45.4223 50.1296C47.898 48.6421 50.5383 47.9621 52.7695 48.1534C54.5167 48.2849 56.1791 48.9591 57.5242 50.0818C57.8752 50.3812 58.1907 50.7199 58.4645 51.0912C58.6505 51.3462 58.7195 51.5056 58.6664 51.5534C58.6133 51.6012 58.4539 51.5534 58.1883 51.394C57.9226 51.2346 57.5508 51.0115 57.0726 50.73C55.7414 49.9849 54.242 49.5917 52.7164 49.5878C50.4602 49.6915 48.2786 50.4279 46.4211 51.7128C44.3758 53.0568 42.7501 55.4846 41.9586 58.3162C41.3649 60.386 41.1969 62.5547 41.4645 64.6912L39.6264 64.4415C40.5616 62.4009 41.8594 60.5468 43.4567 58.9697C44.7007 57.7362 46.1359 56.7118 47.7067 55.9362C48.7229 55.4226 49.8068 55.056 50.9261 54.8471C51.7017 54.7196 52.1373 54.7515 52.1586 54.8578Z",
				fill: "black"
			}), o.a.createElement("path", {
				d: "M58.9691 59.0916C57.0778 56.855 54.0178 56.6744 51.5316 58.0291C49.0453 59.3837 47.7278 62.21 47.6587 65.2859C46.3997 62.4119 46.0331 57.9228 48.3706 55.0328C50.7081 52.1428 54.7881 52.1162 58.1562 53.6091",
				fill: "#6FC437"
			}), o.a.createElement("path", {
				d: "M58.1564 53.6259C58.098 53.764 57.5614 53.6259 56.637 53.4825C55.3703 53.2382 54.0708 53.2148 52.7961 53.4134C51.9185 53.5518 51.0844 53.8896 50.3578 54.4007C49.6311 54.9118 49.0314 55.5827 48.6045 56.3618C47.6164 58.0884 47.4358 60.5215 47.9458 62.8909C48.0924 63.5805 48.3041 64.2547 48.578 64.9043L46.6495 65.2868C46.649 62.8127 47.6 60.4331 49.3058 58.6409C49.7037 58.2536 50.1418 57.9099 50.6126 57.6156C51.0539 57.3494 51.52 57.127 52.0045 56.9515C52.865 56.631 53.7802 56.483 54.698 56.5159C56.0163 56.5361 57.2819 57.0367 58.2573 57.9237C58.9055 58.5559 59.0701 59.0287 58.9851 59.0978C58.9001 59.1668 58.5123 58.8906 57.8217 58.5134C56.8747 57.9938 55.7956 57.7647 54.7192 57.8547C53.9814 57.9197 53.2615 58.1177 52.5942 58.439C52.2227 58.6088 51.8671 58.8115 51.5317 59.0447C51.1877 59.2962 50.8692 59.5809 50.5808 59.8947C49.3045 61.4205 48.6233 63.3565 48.6629 65.3453C48.6579 65.5727 48.5757 65.7916 48.43 65.9662C48.2843 66.1408 48.0836 66.2607 47.8608 66.3064C47.638 66.3521 47.4063 66.3207 47.2036 66.2176C47.0009 66.1144 46.8393 65.9454 46.7451 65.7384C46.4086 64.9713 46.1505 64.1721 45.9748 63.3531C45.6706 61.9921 45.5952 60.5899 45.7517 59.204C45.8859 57.8729 46.3141 56.5882 47.0055 55.4428C47.6407 54.3813 48.544 53.5056 49.6245 52.9034C50.5382 52.3922 51.5508 52.0824 52.5942 51.995C54.0492 51.8938 55.5072 52.1453 56.8442 52.7281C57.7845 53.1265 58.2095 53.509 58.1564 53.6259Z",
				fill: "black"
			}), o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M57.4124 63.2938C57.4124 63.2142 57.6461 63.1557 58.0605 63.0442C58.6544 62.8919 59.2285 62.6708 59.7711 62.3854C60.5979 61.9511 61.3112 61.3288 61.8536 60.5685C62.5478 59.5868 62.9191 58.4134 62.9161 57.211L64.3133 57.5935C63.5012 59.1117 62.2544 60.3529 60.7327 61.1582C58.9871 62.1107 56.9716 62.4475 55.0111 62.1145C54.79 62.0734 54.5906 61.9554 54.4483 61.7812C54.306 61.6071 54.23 61.3882 54.2338 61.1633C54.2376 60.9385 54.321 60.7223 54.4692 60.5531C54.6173 60.3839 54.8206 60.2726 55.043 60.2392H55.0749C56.4247 60.0242 57.6891 59.4414 58.7294 58.5549C59.7697 57.6683 60.5455 56.5122 60.9717 55.2135L62.7461 56.122C62.5442 56.3717 62.3477 56.6532 62.1246 56.871C61.0218 58.1308 59.6313 59.1058 58.0711 59.7132C56.5689 60.2714 54.953 60.4538 53.3642 60.2445C53.1268 60.2142 52.909 60.0969 52.753 59.9153C52.597 59.7337 52.5139 59.5007 52.5199 59.2613C52.5258 59.022 52.6204 58.7934 52.7852 58.6197C52.95 58.4461 53.1734 58.3398 53.4121 58.3213C55.029 58.1782 56.5284 57.4171 57.5983 56.1963C58.572 55.0859 59.2128 53.7233 59.4471 52.2651L60.9239 52.6635C60.2754 54.0839 59.334 55.3512 58.1614 56.3823C57.291 57.1526 56.3004 57.7753 55.2289 58.2257C53.4546 58.9482 52.3655 58.8898 52.3496 58.757C52.3336 58.6242 53.3217 58.3373 54.8411 57.4448C55.7485 56.9049 56.5778 56.2436 57.3061 55.4792C58.2529 54.4942 58.9982 53.3339 59.5002 52.0632C59.5689 51.8907 59.6976 51.7488 59.8626 51.6637C60.0276 51.5785 60.2178 51.5558 60.3982 51.5998C60.5787 51.6438 60.7371 51.7514 60.8444 51.903C60.9518 52.0545 61.0008 52.2397 60.9824 52.4245V52.4617C60.7967 54.2547 60.0893 55.954 58.9477 57.3492C57.613 58.9819 55.6894 60.0239 53.5927 60.2498L53.6192 58.3267C54.8923 58.4648 56.1799 58.2973 57.3752 57.8379C58.6301 57.3318 59.7478 56.5363 60.6371 55.5163C60.823 55.3198 60.9824 55.0967 61.1683 54.8948L61.2055 54.8523C61.3553 54.6729 61.5628 54.5511 61.7925 54.5077C62.0221 54.4642 62.2597 54.5018 62.4648 54.614C62.6698 54.7263 62.8295 54.9062 62.9167 55.1231C63.0038 55.3399 63.013 55.5803 62.9427 55.8032C62.4029 57.4655 61.4034 58.9409 60.0599 60.0588C58.7164 61.1766 57.0838 61.8912 55.3511 62.1198L55.4149 60.2392C56.9637 60.5329 58.5661 60.3128 59.9783 59.6123C61.2426 59.0076 62.3065 58.0524 63.0436 56.8604L63.0702 56.8126C63.1552 56.6706 63.2854 56.5613 63.4399 56.5022C63.5945 56.443 63.7644 56.4375 63.9225 56.4865C64.0805 56.5356 64.2176 56.6362 64.3115 56.7724C64.4055 56.9086 64.4511 57.0724 64.4408 57.2376C64.3563 58.7284 63.7852 60.1505 62.8152 61.2857C62.0978 62.1246 61.1727 62.7603 60.1324 63.1292C59.4932 63.3634 58.8153 63.4734 58.1349 63.4532C57.6408 63.4479 57.4071 63.3629 57.4124 63.2938Z",
				fill: "#46A508"
			}))), o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M59.9148 50.4699C59.6651 50.5018 59.442 49.1896 58.5017 47.2824C57.9476 46.1514 57.2455 45.0991 56.4139 44.1533C55.3829 42.9699 54.1442 41.985 52.7588 41.2474L53.7895 39.6536C55.3353 40.7807 56.5677 42.2837 57.37 44.0204C58.1724 45.757 58.518 47.6698 58.3742 49.5774C58.355 49.8118 58.2524 50.0317 58.085 50.1969C57.9176 50.3622 57.6965 50.4619 57.4618 50.4779C57.2271 50.494 56.9944 50.4254 56.806 50.2845C56.6176 50.1436 56.486 49.9399 56.4351 49.7102C56.0638 48.0099 55.3398 46.4064 54.3101 45.0033C53.4824 43.864 52.4844 42.8589 51.351 42.023C49.4173 40.5939 47.951 40.1636 48.0254 39.898C48.0254 39.7864 48.4451 39.7652 49.157 39.898C50.1644 40.1006 51.1341 40.4591 52.031 40.9605C53.4142 41.7235 54.6429 42.7379 55.6542 43.9514C56.9555 45.4893 57.8828 47.3076 58.3635 49.2639L56.4245 49.4074C56.4828 48.0684 56.264 46.7319 55.7817 45.4814C55.1481 43.7841 54.0601 42.2937 52.6367 41.173L52.5942 41.1464C52.4895 41.0767 52.3996 40.987 52.3297 40.8825C52.2597 40.778 52.211 40.6607 52.1863 40.5374C52.1616 40.4141 52.1615 40.2871 52.1859 40.1637C52.2103 40.0403 52.2588 39.923 52.3285 39.8183C52.3983 39.7137 52.488 39.6238 52.5925 39.5538C52.697 39.4838 52.8143 39.4351 52.9376 39.4104C53.1867 39.3606 53.4453 39.4118 53.6567 39.5527C55.2217 40.4544 56.585 41.6677 57.6623 43.1174C58.506 44.2412 59.156 45.4981 59.5854 46.8361C60.3079 49.0727 60.1007 50.4699 59.9148 50.4699Z",
				fill: "#46A508"
			}))), o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M55.4415 53.5724C55.4415 53.8806 53.7308 53.854 51.218 54.6031C49.7586 55.0389 48.3661 55.6735 47.0796 56.489C45.5142 57.4726 44.1407 58.7327 43.0262 60.2077C42.882 60.3983 42.6749 60.5315 42.4417 60.5836C42.2085 60.6358 41.9644 60.6036 41.7527 60.4927C41.5411 60.3817 41.3757 60.1993 41.2859 59.9779C41.1961 59.7565 41.1878 59.5104 41.2624 59.2834C41.358 59.0018 41.4483 58.7149 41.5652 58.4334C42.4095 56.3207 43.8607 54.5054 45.7355 53.2165C47.2488 52.1768 49.0024 51.5405 50.8302 51.3678C52.0338 51.2431 53.2502 51.355 54.4108 51.6971C55.2183 51.9521 55.6115 52.2284 55.5743 52.3559C55.5371 52.4834 55.0749 52.4834 54.2887 52.4781C53.2019 52.4556 52.1163 52.559 51.0533 52.7862C49.5222 53.1186 48.0825 53.7823 46.8352 54.7306C45.3306 55.8851 44.1637 57.4226 43.4565 59.1824C43.3608 59.4109 43.2865 59.6499 43.2068 59.8837L41.4271 58.9806C42.7039 57.2985 44.318 55.9016 46.1658 54.8793C47.6505 54.0496 49.2685 53.4851 50.9471 53.2112C52.054 53.0157 53.1839 52.987 54.2993 53.1262C55.0377 53.2749 55.4521 53.4449 55.4415 53.5724Z",
				fill: "#46A508"
			}))), o.a.createElement("path", {
				d: "M40.9863 58.9697C40.7844 58.9697 40.6091 58.4385 40.625 57.4291C40.6872 56.0193 41.0399 54.6375 41.661 53.3704C42.0825 52.4713 42.6182 51.6303 43.2547 50.8682C43.6215 50.4393 44.0211 50.0396 44.45 49.6729C44.8923 49.2888 45.359 48.9339 45.8472 48.6104C48.0885 47.0896 50.7816 46.3793 53.4813 46.5969C54.0986 46.6422 54.7124 46.7256 55.3194 46.8466L53.5185 48.2704C53.573 47.4013 53.4047 46.5328 53.0297 45.7469C52.6367 44.9938 52.0944 44.3287 51.436 43.7919C50.2132 42.7771 48.8011 42.015 47.2816 41.55C45.9482 41.1144 44.7953 40.8966 43.9932 40.7C43.191 40.5035 42.7288 40.3388 42.7235 40.1369C42.7182 39.935 43.1697 39.7332 44.025 39.5791C45.2557 39.3795 46.5094 39.367 47.7438 39.5419C49.6828 39.7888 51.5311 40.5095 53.1253 41.6404C54.1525 42.3565 55.0087 43.2907 55.6328 44.3763C56.303 45.6055 56.6262 46.9938 56.5678 48.3925C56.561 48.59 56.5153 48.7842 56.4333 48.964C56.3514 49.1438 56.2348 49.3057 56.0902 49.4404C55.9456 49.5751 55.7759 49.6799 55.5908 49.749C55.4057 49.8181 55.2088 49.85 55.0113 49.8429H54.82H54.7616C54.2747 49.7547 53.7835 49.6926 53.29 49.6569C51.2176 49.4862 49.1427 49.9553 47.3453 51.001C46.9274 51.2387 46.5231 51.4994 46.1341 51.7819C45.7746 52.0297 45.432 52.3012 45.1088 52.5947C44.5158 53.153 43.9818 53.7707 43.515 54.4382C42.8249 55.4541 42.241 56.5382 41.7725 57.6735C41.4378 58.5129 41.1988 59.0016 40.9863 58.9697Z",
				fill: "black"
			}));
			var _e = s("./src/reddit/pages/SearchResults/index.tsx"),
				ke = s("./src/reddit/components/SearchResultsContent/NoResults/index.m.less"),
				we = s.n(ke);
			const {
				fbt: Se
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var Ie;

			function Te(e) {
				let {
					query: t,
					type: s,
					searchOptions: i,
					tab: a
				} = e;
				const c = Object(ue.a)();
				Object(r.useEffect)(() => {
					c(Object(P.n)(s, i))
				}, []);
				const d = i.restrict_sr || _e.pageConfig[a].sidebar;
				return o.a.createElement("div", {
					className: Object(n.a)(we.a.noResults, d && we.a.withSidebar),
					"data-testid": "no-results"
				}, o.a.createElement(ye, null), o.a.createElement("h2", {
					className: we.a.header
				}, Se._("If there aren’t any search results for “", null, {
					hk: "jdZLH"
				}), Se._("{search query}", [Se._param("search query", t)], {
					hk: "4vP3YT"
				}), Se._("”, does it even exist?", null, {
					hk: "3Pa0q2"
				})), o.a.createElement("p", {
					className: we.a.text
				}, Se._("Looks like there aren’t any results for “", null, {
					hk: "4zRIzA"
				}), Se._("{search query}", [Se._param("search query", t)], {
					hk: "4vP3YT"
				}), Se._("”. Try double-checking your spelling or searching for a related topic.", null, {
					hk: "2wIbnh"
				})))
			}! function(e) {
				e.Comments = "comments", e.Communities = "communities", e.People = "people", e.Posts = "posts"
			}(Ie || (Ie = {}));
			var Ne = s("./src/reddit/components/PostList/index.tsx"),
				Re = s("./src/reddit/components/SearchPost/index.tsx"),
				Pe = s("./src/reddit/constants/postLayout.ts"),
				Le = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				Me = s("./src/reddit/helpers/trackers/post.ts"),
				Fe = s("./src/reddit/selectors/tracking.ts"),
				De = s("./src/reddit/connectors/PostList/index.ts");
			const Be = Object(De.c)(),
				Ae = Object(B.c)({
					...De.d,
					layout: () => Pe.g.Search,
					viewportDataLoaded: Fe.a,
					postIds: (e, t) => {
						let {
							heroPostId: s,
							listingKey: n,
							listingName: r,
							inSubredditOrProfile: o,
							searchDiscoveryUnit: i
						} = t;
						const a = i && i.postOrder,
							c = je(he(e));
						if (a && a.length > 0) {
							if (s) {
								const t = a.indexOf(s);
								if (t > -1) return a.splice(t, 1), Object(M.W)(e, a)
							}
							return Object(M.W)(e, a)
						}
						const {
							models: d
						} = e.posts;
						return Object(M.D)(e, n, r, !!o).filter(e => d && d[e] && !d[e].isSponsored && c !== e)
					}
				}),
				He = (e, t, s, n) => {
					var r;
					if (s) return Object(Me.h)(e, t);
					const {
						listingKey: o,
						searchOptions: i,
						pageLayer: a,
						searchDiscoveryUnit: c,
						sendEvent: d
					} = n, l = {
						body: P.e.POST,
						background: P.e.POST,
						expando_open: P.e.POST,
						image: P.e.POST,
						timestamp: P.e.POST_TIMESTAMP,
						comments: P.e.POST,
						subreddit: P.e.POST_COMMUNITY,
						user: P.e.POST_AUTHOR
					};
					return d(Object(P.r)(e, {
						...i,
						id: e,
						eventType: "post"
					}, a, null !== (r = l[t]) && void 0 !== r ? r : P.e.POST, o, c)), Object(Me.h)(e, t)
				},
				Ue = Object(i.b)(Ae, (e, t) => ({
					...Object(De.b)(e),
					trackOnPostEnteredViewport: e => {
						t.sendEvent(Object(P.t)(t.listingKey, e, {
							...t.searchOptions,
							id: e,
							eventType: "post"
						}, t.pageLayer, t.searchDiscoveryUnit))
					}
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					openPost: e => t.openPost(e),
					postClickEventFactory: He,
					postComponentForLayout: e => {
						let {
							post: t
						} = e;
						return t.isBlank ? Le.a : Re.a
					}
				}));
			const Ve = (e => Object(y.c)(Be(Ue(e))))(Ne.a),
				We = () => null,
				Ge = Object(B.c)({
					viewTreatment: fe.w,
					searchDiscoveryUnitsModels: he,
					hasPostResults: fe.n,
					apiPending: be.d,
					postIds: M.z,
					posts: M.y,
					loadMore: be.g,
					isOverlayOpen: Ce.i
				});

			function Ke(e) {
				const {
					listingKey: t,
					listingName: s,
					location: n,
					searchOptions: a
				} = e, p = Object(oe.a)(), b = Object(ue.a)(), C = Object(i.d)(), {
					viewTreatment: h,
					searchDiscoveryUnitsModels: x,
					hasPostResults: f,
					postIds: O,
					isOverlayOpen: g,
					apiPending: v
				} = Object(i.e)(t => Ge(t, e)), E = Object(l.a)(g), j = Object(r.useRef)(!1), y = void 0 === v || v, _ = (e, s) => b(Object(me.v)(t, a, s, e, p, Object(xe.b)({
					pageLayer: p
				})));
				let k;
				Object(r.useEffect)(() => {
					f && !c()(O) && T()
				}, [f, O]), Object(r.useEffect)(() => {
					E && !g && T()
				}, [g, E]), h === ie.c.Trending && (k = je(x));
				const w = Object(m.a)(a.q || ""),
					S = Object(r.useMemo)(() => Object.values(x).find(e => e.name === pe.l || e.name === pe.f), [x]),
					I = k && S;

				function T() {
					if (Oe.c.has(t) || !j.current) {
						j.current = !0;
						const e = Oe.c.end(t);
						_(e, ge.TimerType.InApp)
					}
				}
				return f || I || y ? o.a.createElement(o.a.Fragment, null, I && o.a.createElement(de, {
					key: k,
					postId: k,
					discoveryUnit: S,
					searchOptions: a,
					listingKey: t
				}, o.a.createElement(te, {
					key: k,
					discoveryUnit: S,
					postId: k,
					listingKey: t,
					searchOptions: a
				})), (f || y) && o.a.createElement(Ve, {
					key: "posts",
					listingKey: t,
					listingName: s,
					location: n,
					inSubredditOrProfile: !1,
					noPostsComponent: We,
					onLoadMore: function() {
						C(Object(u.n)([d.dc.Posts]))
					},
					searchOptions: a
				})) : o.a.createElement(Te, {
					query: w,
					type: Ie.Posts,
					searchOptions: a,
					tab: le.h.Posts
				})
			}
			var qe = s("./src/reddit/selectors/experiments/serpRedesignLayout.ts"),
				Ye = s("./node_modules/lodash/constant.js"),
				ze = s.n(Ye),
				Je = s("./node_modules/lodash/times.js"),
				Ze = s.n(Je),
				Xe = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.tsx"),
				Qe = s("./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.tsx"),
				$e = s("./src/reddit/components/SearchResultsContent/Communities/index.m.less"),
				et = s.n($e);
			const tt = e => {
				const {
					listingKey: t,
					searchOptions: s
				} = e, n = Object(i.e)(e => Object(fe.d)(e, {
					listingKey: t
				})), r = Object(i.e)(e => Object(fe.t)(e, {
					listingKey: t
				})), a = Boolean(r && r.token) && n.length > 0;
				return o.a.createElement("div", {
					className: et.a.container,
					"data-testid": "comments-list"
				}, o.a.createElement(Xe.b, {
					identifiers: n,
					listingKey: t,
					searchOptions: s,
					componentType: d.cc.Comments
				}), a && o.a.Children.toArray(Ze()(3, ze()(o.a.createElement(Qe.a, {
					className: et.a.loadMoreItem,
					isLoading: !0
				})))))
			};
			var st = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx");
			const nt = (e, t) => Boolean(t && t.token) && e.length > 0,
				rt = e => {
					const {
						listingKey: t,
						searchOptions: s
					} = e, n = Object(i.e)(e => Object(fe.g)(e, {
						listingKey: t
					})), r = Object(i.e)(e => Object(fe.u)(e, {
						listingKey: t
					}));
					return o.a.createElement("div", {
						className: et.a.container,
						"data-testid": "communities-list"
					}, !s.is_multi && o.a.createElement(Xe.b, {
						identifiers: n,
						listingKey: t,
						searchOptions: s,
						componentType: d.cc.Subreddits
					}), nt(n, r) && o.a.Children.toArray(Ze()(3, ze()(o.a.createElement(st.a, {
						className: et.a.loadMoreItem,
						isLoading: !0
					})))))
				};
			var ot = s("./src/reddit/components/SearchResultsContent/index.m.less"),
				it = s.n(ot);
			const at = e => {
				const {
					listingKey: t,
					searchOptions: s
				} = e, n = Object(i.e)(e => Object(fe.a)(e, {
					listingKey: t
				})), r = Object(i.e)(e => Object(fe.s)(e, {
					listingKey: t
				}));
				return o.a.createElement("div", {
					className: et.a.container,
					"data-testid": "people-list"
				}, !s.is_multi && o.a.createElement(Xe.b, {
					identifiers: n,
					listingKey: t,
					searchOptions: s,
					componentType: d.cc.Users
				}), nt(n, r) && o.a.Children.toArray(Ze()(3, ze()(o.a.createElement(st.a, {
					className: et.a.loadMoreItem,
					isLoading: !0
				})))))
			};

			function ct(e) {
				const {
					hasResults: t,
					searchOptions: s,
					noResultsType: n,
					searchResultsTab: r,
					pendingSelector: a
				} = e, c = Object(m.a)(s.q || ""), d = Object(i.e)(t => a(t, e)), l = void 0 === d || d;
				return o.a.createElement(o.a.Fragment, null, t || l ? e.children : o.a.createElement(Te, {
					searchOptions: s,
					query: c,
					type: n,
					tab: r
				}))
			}

			function dt(e) {
				const {
					listingKey: t,
					listingName: s,
					location: r,
					searchOptions: a,
					tab: c
				} = e, d = Object(i.e)(qe.a), l = Object(i.e)(e => Object(fe.m)(e, {
					listingKey: t
				})), m = Object(i.e)(e => Object(fe.k)(e, {
					listingKey: t
				})), u = Object(i.e)(e => Object(fe.l)(e, {
					listingKey: t
				}));
				return o.a.createElement("div", {
					className: Object(n.a)(it.a.resultsContainer)
				}, c === le.h.Listings ? o.a.createElement(ct, {
					hasResults: l,
					searchOptions: a,
					noResultsType: Ie.Communities,
					searchResultsTab: le.h.Listings,
					listingKey: t,
					pendingSelector: fe.i
				}, o.a.createElement(rt, {
					listingKey: t,
					searchOptions: a,
					key: le.h.Listings
				})) : c === le.h.People ? o.a.createElement(ct, {
					hasResults: m,
					searchOptions: a,
					noResultsType: Ie.People,
					searchResultsTab: le.h.People,
					listingKey: t,
					pendingSelector: fe.c
				}, o.a.createElement(at, {
					listingKey: t,
					searchOptions: a,
					key: le.h.People
				})) : d && c === le.h.Comments ? o.a.createElement(ct, {
					hasResults: u,
					searchOptions: a,
					noResultsType: Ie.Comments,
					searchResultsTab: le.h.Comments,
					listingKey: t,
					pendingSelector: fe.f
				}, o.a.createElement(tt, {
					listingKey: t,
					searchOptions: a,
					key: le.h.Comments
				})) : o.a.createElement(Ke, {
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
				return s ? Object(r.z)(e, {
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
				return V
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/noop.js"),
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/makeSearchKey/index.ts"),
				m = s("./src/reddit/constants/page.ts"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/controls/InternalLink/index.tsx"),
				b = s("./src/reddit/helpers/search/searchResultsTabTo.ts"),
				C = s("./src/reddit/helpers/trackers/searchResults.ts"),
				h = s("./src/reddit/hooks/useTracking.ts"),
				x = s("./src/reddit/models/SearchDiscoveryUnit/index.ts"),
				f = s("./src/reddit/selectors/experiments/serpRedesignLayout.ts"),
				O = s("./src/reddit/selectors/searchResults.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/Pill/PillButton/index.tsx"),
				E = s("./node_modules/history/esm/history.js"),
				j = s("./node_modules/react-router-redux/es/index.js"),
				y = s("./src/lib/addQueryParams/index.ts"),
				_ = s("./src/lib/classNames/index.ts"),
				k = s("./src/lib/colors/constants.ts"),
				w = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				S = s("./src/reddit/constants/parameters.ts"),
				I = s("./src/reddit/constants/tracking.ts"),
				T = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				N = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				R = s("./src/reddit/hooks/usePageLayer.ts"),
				P = s("./src/reddit/selectors/telemetry.ts"),
				L = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				M = s("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				F = s("./src/reddit/components/SearchNSFWToggle/SearchNSFWToggle.m.less"),
				D = s.n(F);
			const B = "safe-search-toggle";

			function A(e) {
				let {
					searchOptions: t
				} = e;
				const s = Object(h.a)(),
					[r, o] = a.a.useState(!0);
				a.a.useEffect(() => o(null), []);
				const i = Object(N.a)({}),
					{
						nsfwSessionSetting: d,
						setNsfwSessionSetting: l
					} = Object(M.b)(),
					m = Object(R.a)(),
					u = Object(c.d)();
				i.arrowProps.style = {
					...i.arrowProps.style,
					borderBottom: `3px solid ${k.e}`
				}, i.popperProps.style = {
					...i.popperProps.style,
					backgroundColor: k.e
				};
				const p = null != r ? r : !d;
				return a.a.createElement("div", {
					className: Object(_.a)(D.a.searchNSFWToggle),
					"data-testid": B,
					onMouseEnter: i.show,
					onMouseLeave: i.hide
				}, a.a.createElement("label", {
					htmlFor: B,
					className: Object(_.a)(D.a.searchNSFWToggleLabel)
				}, n.fbt._("Safe Search", null, {
					hk: "x1C2Y"
				})), a.a.createElement(T.a, {
					activeColorOverride: k.a,
					id: B,
					onToggle: function() {
						var e;
						s(e => (function(e, s) {
							const n = P.F(e, m);
							return {
								action: s ? I.c.DISABLE : I.c.ENABLE,
								source: C.c.SEARCH,
								noun: C.a.NSFW,
								actionInfo: Object(C.k)(e, m, n, null),
								search: P.Z(e, t, L.a.SERP)
							}
						})(e, !p));
						const n = !d;
						l(n);
						const {
							include_over_18: r,
							...o
						} = (null == m ? void 0 : m.queryParams) || {}, i = (null === (e = null == m ? void 0 : m.routeMatch) || void 0 === e ? void 0 : e.match.url) || b.a, a = {
							...o,
							...n && {
								[S.k]: "1"
							}
						}, c = {
							pathname: i,
							search: Object(y.a)("", {
								...a
							})
						};
						u(Object(j.b)(Object(E.c)(c)))
					},
					on: p,
					redditStyle: !0,
					ref: i.target.ref
				}), a.a.createElement(w.a, {
					visible: i.visible,
					arrowProps: i.arrowProps,
					popperProps: i.popperProps
				}, p && n.fbt._("Turn off safe search to show adult and NSFW (Not Safe for Work) search results", null, {
					hk: "E5puY"
				}), !p && n.fbt._("Turn on safe search to hide adult and NSFW (Not Safe for Work) search results", null, {
					hk: "1G2k8"
				})))
			}
			var H = s("./src/reddit/components/SearchResultsNav/index.m.less"),
				U = s.n(H);

			function V(e) {
				let {
					activeTab: t,
					searchOptions: s,
					searchSwitcher: r
				} = e;
				const i = Object(h.a)(),
					E = Object(c.e)(g.lb),
					j = Object(c.e)(O.w),
					y = Object(c.e)(f.a),
					_ = Object(u.eb)(),
					k = j === x.c.Trending,
					w = {
						condition: !0,
						active: t === m.h.Posts,
						target: C.b.Posts,
						contentType: d.dc.Posts,
						text: n.fbt._("Posts", null, {
							hk: "vNVpl"
						})
					},
					S = {
						condition: !s.is_multi && !s.restrict_sr,
						active: t === m.h.Listings,
						target: C.b.Communities,
						contentType: d.dc.Subreddits,
						text: n.fbt._("Communities", null, {
							hk: "45NgGC"
						})
					},
					I = {
						condition: !s.is_multi && !s.restrict_sr,
						active: t === m.h.People,
						target: C.b.People,
						contentType: d.dc.Users,
						text: n.fbt._("People", null, {
							hk: "Ttxbf"
						})
					},
					T = {
						condition: !(s.source === l.a.Trending || s.source === l.a.PromotedTrend),
						active: t === m.h.Comments,
						target: C.b.Comments,
						contentType: d.dc.Comments,
						text: n.fbt._("Comments", null, {
							hk: "z0DGA"
						})
					},
					N = [w, ...y ? [T] : [], S, I],
					R = E && !k && "1" !== s.sr_nsfw;
				return a.a.createElement("div", {
					"data-testid": "search-results-nav",
					className: U.a.searchResultsNav
				}, a.a.createElement("div", {
					className: U.a.pillRow,
					role: "tablist"
				}, N.filter(e => e.condition).map(e => {
					const {
						active: t,
						target: n,
						text: r,
						contentType: c
					} = e;
					return a.a.createElement(p.a, {
						key: n,
						"data-testid": n,
						to: Object(b.b)({
							searchType: c,
							pageLayer: _
						}),
						"aria-selected": t,
						role: "tab",
						className: U.a.pillElement,
						onClick: () => (e => {
							e.active || i(Object(C.m)(e.target, s))
						})(e)
					}, a.a.createElement(v.a, {
						active: t,
						onClick: o.a,
						variant: v.b.TAB_GROUP
					}, r))
				})), r && a.a.createElement("div", {
					className: U.a.searchSwitcherContainer
				}, r), R && a.a.createElement("div", {
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
				return A
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), C = p.a.div("ButtonContainer", u.a), h = p.a.div("Container", u.a), x = p.a.img("BannerImg", u.a), f = p.a.img("SnooImg", u.a), O = p.a.div("CommunityText", u.a);
			var g = () => o.a.createElement(h, null, o.a.createElement(x, {
					src: `${d.a.assetPath}/img/search-results-community-banner.png`
				}), o.a.createElement(f, {
					src: `${d.a.assetPath}/img/snoo-thinking.png`
				}), o.a.createElement(O, null, b._("Have an idea for a new community?", null, {
					hk: "LfgUP"
				})), o.a.createElement(C, null, o.a.createElement(l.a, {
					className: u.a.Button,
					eventSource: "sidebar"
				}))),
				v = s("./src/reddit/components/IdCard/async.tsx"),
				E = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.tsx"),
				j = s("./src/reddit/components/SidebarContainer/index.tsx"),
				y = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				_ = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				k = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				w = s("./src/reddit/controls/InternalLink/index.tsx"),
				S = s("./src/reddit/helpers/search/searchResultsTabTo.ts"),
				I = s("./src/reddit/hooks/usePageLayer.ts"),
				T = s("./src/reddit/selectors/platform.ts"),
				N = s("./src/reddit/selectors/searchResults.ts"),
				R = s("./src/reddit/selectors/subreddit.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				L = s("./src/reddit/selectors/widgets.ts"),
				M = s("./src/reddit/components/SearchResultsSidebar/index.m.less"),
				F = s.n(M);
			const D = Object(a.c)({
					authorIdentifiers: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(N.a)(e, {
							listingKey: s
						})
					},
					authorLoadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(N.s)(e, {
							listingKey: s
						})
					},
					communityIdentifiers: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(N.g)(e, {
							listingKey: s
						})
					},
					communitiesLoadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(N.u)(e, {
							listingKey: s
						})
					},
					currentSubreddit: T.e,
					isLoggedIn: P.R,
					hasCommunityResults: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(N.m)(e, {
							listingKey: s
						})
					},
					hasAuthorResults: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(N.k)(e, {
							listingKey: s
						})
					},
					subredditId: (e, t) => {
						let {
							listingName: s
						} = t;
						return Object(R.F)(e, s)
					},
					postFlairWidgets: (e, t) => {
						let {
							listingName: s
						} = t;
						const n = Object(R.F)(e, s);
						return Object(L.g)(e, {
							subredditId: n
						})
					},
					idCardWidget: (e, t) => {
						let {
							listingName: s
						} = t;
						return Object(L.d)(e, {
							subredditName: s
						})
					}
				}),
				B = e => {
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
						postFlairWidgets: C,
						searchOptions: h,
						currentSubreddit: x
					} = e;
					const f = Boolean(x && u === x.name && h.restrict_sr),
						O = !!h.is_multi,
						T = i.length > E.a || !!a,
						N = t.length > E.a || !!s;
					let R;
					const P = Object(I.a)();
					return f ? R = o.a.createElement(o.a.Fragment, null, p && o.a.createElement(v.a, {
						listingName: u
					}), C && C.map((e, t) => o.a.createElement(y.a, {
						key: `widgetSpacer-${t}`
					}, o.a.createElement(k.a, {
						subredditName: u,
						widget: e
					})))) : O || (R = o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: F.a.container,
						"data-testid": "communities-list"
					}, o.a.createElement("h4", {
						className: F.a.header
					}, n.fbt._("Communities", null, {
						hk: "3cMR66"
					})), l ? o.a.createElement(o.a.Fragment, null, !h.is_multi && o.a.createElement(E.b, {
						componentType: c.cc.Subreddits,
						identifiers: i,
						listingKey: m,
						searchOptions: h,
						sidebar: !0
					}), T && o.a.createElement(w.a, {
						to: Object(S.b)({
							searchType: c.dc.Subreddits,
							pageLayer: P
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
					})), d ? o.a.createElement(o.a.Fragment, null, !h.is_multi && o.a.createElement(E.b, {
						componentType: c.cc.Users,
						identifiers: t,
						listingKey: m,
						searchOptions: h,
						sidebar: !0
					}), N && o.a.createElement(w.a, {
						to: Object(S.b)({
							searchType: c.dc.Users,
							pageLayer: P
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
					}, o.a.createElement(g, null)))), o.a.createElement(j.a, {
						"data-testid": "search-results-sidebar",
						className: r
					}, R, o.a.createElement(_.a, null))
				},
				A = e => {
					const t = Object(i.e)(t => D(t, e)),
						s = {
							...e,
							...t
						};
					return o.a.createElement(B, s)
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
				return pe
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
				b = s("./src/lib/addQueryParams/index.ts");
			const C = (e, t, s, n, r, o) => {
				const i = e && e[s],
					a = {};
				let c = Object(b.a)(t, {
					[s]: r
				});
				const d = [];
				for (const l of n) {
					const e = Object(b.a)(t, {
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
			var h = s("./src/higherOrderComponents/asTooltip.tsx"),
				x = s("./src/reddit/components/Pill/PillButton/index.tsx"),
				f = s("./src/reddit/controls/Dropdown/index.tsx"),
				O = s("./src/reddit/icons/fonts/index.tsx"),
				g = s("./src/reddit/actions/tooltip.ts"),
				v = s("./src/reddit/selectors/tooltip.ts");
			const E = Object(i.c)({
				isOpen: (e, t) => {
					let {
						tooltipId: s
					} = t;
					return Object(v.b)(s)(e)
				}
			});
			var j = s("./src/reddit/components/SearchResultsSubNav/Select/index.m.less"),
				y = s.n(j),
				_ = s("./node_modules/query-string/index.js"),
				k = s.n(_),
				w = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				S = s("./src/reddit/components/TrackingHelper/index.tsx"),
				I = s("./src/reddit/constants/history.ts"),
				T = s("./src/reddit/controls/Dropdown/Row.tsx"),
				N = s("./src/reddit/helpers/history/index.ts"),
				R = s("./node_modules/lodash/fromPairs.js"),
				P = s.n(R),
				L = s("./src/lib/extractQueryParams/index.ts"),
				M = s("./src/reddit/helpers/correlationIdTracker.ts"),
				F = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				D = s("./src/reddit/helpers/trackers/searchResults.ts"),
				B = s("./src/reddit/selectors/telemetry.ts");
			const A = (e, t) => {
					const s = P()([...Object(L.a)(e)]);
					return Object(m.vc)(s.sort) && (t.sort = s.sort), Object(m.wc)(s.t) && (t.t = s.t), t
				},
				H = (e, t, s, n) => () => e(e => ({
					...Object(D.g)(e),
					source: "search",
					action: "click",
					noun: t,
					correlationId: Object(M.c)(M.a.SearchResults),
					actionInfo: B.d(e),
					search: B.Z(e, A(s, n), F.a.SERP)
				})),
				U = e => {
					let {
						isSelected: t,
						option: s,
						searchOptions: n,
						type: o,
						styles: i,
						displayText: c
					} = e;
					const d = Object(S.b)();
					return r.a.createElement(w.a, {
						key: s,
						to: {
							pathname: k.a.parseUrl(s).url,
							state: {
								[I.b.SearchOriginPage]: Object(N.b)(I.b.SearchOriginPage)
							},
							search: s.replace(k.a.parseUrl(s).url + "?", "")
						},
						onClick: H(d, o, s, n)
					}, r.a.createElement(T.b, {
						className: Object(a.a)(i.SelectOption, t && i.mIsSelected),
						displayText: c,
						isSelected: t
					}))
				};
			var V = s("./src/reddit/components/SearchResultsSubNav/Select/SelectOption/index.m.less"),
				W = s.n(V);

			function G() {
				return (G = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const K = Object(h.a)(e => r.a.createElement(f.a, G({
					className: y.a.Component
				}, e))),
				q = e => {
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
						} = Object(o.e)(t => E(t, {
							tooltipId: e
						})), s = Object(o.d)();
						return {
							isOpen: t,
							onClick: t ? () => s(Object(g.i)()) : () => s(Object(g.f)({
								tooltipId: e
							}))
						}
					})(d);
					return r.a.createElement("div", {
						className: y.a.Wrapper
					}, r.a.createElement(x.a, G({}, u, {
						active: p,
						className: Object(a.a)(y.a.filterButton, t && y.a.hasValue),
						onClick: b,
						variant: x.b.TAB_GROUP
					}), s, r.a.createElement(O.a, {
						name: "caret_down",
						className: Object(a.a)(y.a.caret, p && y.a.caretOpen)
					})), r.a.createElement("div", {
						id: d
					}, r.a.createElement(K, {
						className: y.a.Dropdown,
						isOpen: p,
						tooltipId: d
					}, n.map((e, t) => r.a.createElement(U, {
						displayText: i[e],
						key: t,
						isSelected: e === m,
						option: e,
						searchOptions: c,
						styles: {
							mIsSelected: W.a.mIsSelected,
							SelectOption: W.a.SelectOption
						},
						type: l
					})))))
				},
				Y = [m.ac.Relevance, m.ac.Hot, m.ac.Top, m.ac.New, m.ac.Comments],
				z = {
					[m.ac.Hot]: () => u.fbt._("Hot", null, {
						hk: "3c99Ga"
					}),
					[m.ac.Relevance]: () => u.fbt._("Relevance", null, {
						hk: "LvJkD"
					}),
					[m.ac.Top]: () => u.fbt._("Top", null, {
						hk: "bijGV"
					}),
					[m.ac.New]: () => u.fbt._("New", null, {
						hk: "23egpt"
					}),
					[m.ac.Comments]: () => u.fbt._("Most Comments", null, {
						hk: "4k1FoM"
					})
				};

			function J() {
				return (J = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Z = [m.jc.HOUR, m.jc.DAY, m.jc.WEEK, m.jc.MONTH, m.jc.YEAR, m.jc.ALL],
				X = {
					[m.jc.HOUR]: () => u.fbt._("Past Hour", null, {
						hk: "4qCarL"
					}),
					[m.jc.DAY]: () => u.fbt._("Past 24 Hours", null, {
						hk: "GI5qN"
					}),
					[m.jc.WEEK]: () => u.fbt._("Past Week", null, {
						hk: "3jQHYQ"
					}),
					[m.jc.MONTH]: () => u.fbt._("Past Month", null, {
						hk: "11eVJy"
					}),
					[m.jc.YEAR]: () => u.fbt._("Past Year", null, {
						hk: "38MavC"
					}),
					[m.jc.ALL]: () => u.fbt._("All Time", null, {
						hk: "2buTB7"
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
			const $ = [m.Zb.Sort, m.Zb.Time],
				ee = {
					[m.Zb.Sort]: e => {
						const {
							options: t,
							optionLabels: s,
							value: n
						} = C(e.queryParams, e.url, p.z, Y, m.Rb, z), o = {
							"data-testid": "search-results-filter-sort",
							options: t,
							optionLabels: s,
							searchOptions: e.searchOptions,
							tooltipId: "search-results-sort",
							value: n
						};
						return r.a.createElement(q, J({}, o, {
							active: Boolean(e.queryParams[p.z]),
							label: e.queryParams[p.z] ? s[n] : u.fbt._("Sort", null, {
								hk: "2COMme"
							}),
							type: m.Zb.Sort
						}))
					},
					[m.Zb.Time]: e => {
						const {
							options: t,
							optionLabels: s,
							value: n
						} = C(e.queryParams, e.url, p.E, Z.slice().reverse(), m.Sb, X);
						if (!e.searchOptions || e.searchOptions.sort === m.X.NEW || e.searchOptions.sort === m.X.HOT) return null;
						const o = {
							"data-testid": "search-results-filter-time",
							options: t,
							optionLabels: s,
							searchOptions: e.searchOptions,
							tooltipId: "search-results-time",
							value: n
						};
						return r.a.createElement(q, Q({}, o, {
							active: Boolean(e.queryParams[p.E]),
							label: e.queryParams[p.E] ? s[n] : u.fbt._("Time", null, {
								hk: "3hL0P3"
							}),
							type: m.Zb.Filter
						}))
					}
				};
			var te = s("./src/lib/lessComponent.tsx"),
				se = s("./src/reddit/controls/Button/index.tsx"),
				ne = s("./src/reddit/helpers/search/switchSearchScope.ts"),
				re = s("./src/reddit/components/SearchResultsSubNav/GlobalSearchResultsLink/index.m.less"),
				oe = s.n(re);
			const {
				fbt: ie
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ae = te.a.wrapped(se.r, "TertiaryButton", oe.a), ce = te.a.wrapped(ae, "AllRedditResultsButton", oe.a), de = e => {
				const t = Object(S.b)();
				return r.a.createElement(w.a, {
					to: Object(ne.a)(e.queryParams)
				}, r.a.createElement(ce, {
					onClick: () => {
						t(t => ({
							...Object(D.g)(t, e.searchOptions),
							action: "click",
							noun: "unrestrict_to_subreddit",
							source: "search_results"
						}))
					},
					"data-redditstyle": !0
				}, ie._("All reddit results", null, {
					hk: "2IBCsX"
				}), r.a.createElement(O.a, {
					name: "forward"
				})))
			};
			var le = s("./src/reddit/components/SearchResultsSubNav/index.m.less"),
				me = s.n(le);
			const ue = Object(i.c)({
					subreddit: l.z
				}),
				pe = e => {
					const {
						subreddit: t
					} = Object(o.e)(t => ue(t, e)), s = Object(c.eb)(), n = Object(c.W)(s), i = Object(c.db)(s), l = t && !!e.searchOptions.restrict_sr && !e.shouldHideGlobalSearchLink;
					return r.a.createElement(d.a, {
						className: Object(a.a)(me.a.ComponentRedesign),
						"data-testid": "search-results-subnav"
					}, $.map((t, s) => {
						const o = ee[t];
						return r.a.createElement(o, {
							key: s,
							queryParams: n,
							searchOptions: e.searchOptions,
							tab: e.tab,
							url: i
						})
					}), l && r.a.createElement(de, {
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
				C = s("./src/reddit/helpers/trackers/searchResults.ts"),
				h = s("./src/reddit/icons/fonts/index.tsx"),
				x = s("./src/reddit/components/SearchSwitcher/index.m.less"),
				f = s.n(x);
			const {
				fbt: O
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class g extends r.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							searchOptions: e,
							sendEvent: t,
							subreddit: s
						} = this.props;
						t(Object(C.y)(!!s, e))
					}
				}
				render() {
					const {
						redesign: e,
						subreddit: t,
						url: s
					} = this.props, n = {
						[f.a.mSr]: !!t
					}, {
						pathname: o,
						search: l
					} = i.a.parse(s), m = t ? c.bc.ToSubreddit : c.bc.ToGlobal, C = t ? r.a.createElement(r.a.Fragment, null, r.a.createElement("span", null, O._("Show results from", null, {
						hk: "3aVDvz"
					})), r.a.createElement(d.b, {
						className: f.a.subredditIcon,
						subredditOrProfile: t
					}), r.a.createElement("p", {
						className: Object(a.a)(f.a.searchSwitcherText, n)
					}, t.displayText)) : r.a.createElement(r.a.Fragment, null, O._("{=Show results from}{=all of Reddit}", [O._param("=Show results from", r.a.createElement("span", null, O._("Show results from", null, {
						hk: "4l8fSw"
					}))), O._param("=all of Reddit", r.a.createElement("p", {
						className: Object(a.a)(f.a.searchSwitcherText, n)
					}, O._("all of Reddit", null, {
						hk: "rc9dH"
					})))], {
						hk: "2NDUqb"
					}));
					return r.a.createElement(p.a, {
						className: Object(a.a)(f.a.searchSwitcher, e && f.a.redesign, n),
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
					}, C, r.a.createElement(h.a, {
						name: "forward",
						className: Object(a.a)(f.a.arrowIcon, n)
					}))
				}
			}
			t.a = Object(m.c)(e => e.subreddit ? r.a.createElement(l.b, {
				subredditName: e.subreddit.name
			}, r.a.createElement(g, e)) : r.a.createElement(g, e))
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
				a = s("./node_modules/uuid/v4.js"),
				c = s.n(a),
				d = s("./src/config.ts"),
				l = s("./src/lib/addQueryParams/index.ts"),
				m = s("./src/reddit/actions/chat/toggle.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				C = s("./src/reddit/actions/tooltip.ts"),
				h = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				x = s("./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx"),
				f = s("./src/reddit/constants/parameters.ts"),
				O = s("./src/reddit/controls/Dropdown/index.tsx"),
				g = s("./src/reddit/controls/Dropdown/Row.tsx"),
				v = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				E = s("./src/reddit/helpers/trackers/shareToChat.ts"),
				j = s("./src/reddit/hooks/useTracking.ts"),
				y = s("./src/reddit/icons/fonts/index.tsx"),
				_ = s("./src/reddit/models/Post/index.ts"),
				k = s("./src/reddit/models/Subreddit/index.ts"),
				w = s("./src/reddit/routes/postCreation/constants.ts"),
				S = s("./src/reddit/selectors/activeModalId.ts"),
				I = s("./src/reddit/selectors/experiments/shareToChatButton.ts"),
				T = s("./src/reddit/selectors/tooltip.ts"),
				N = s("./src/reddit/components/ShareMenu/index.m.less"),
				R = s.n(N);
			const P = Object(h.a)(O.a),
				L = c()(),
				M = o.a.memo(e => {
					const t = Object(i.d)(),
						s = Object(j.a)(),
						a = Object(i.e)(I.a),
						c = Object(i.e)(t => Object(T.b)(e.dropdownId)(t)),
						h = Object(i.e)(t => Object(S.b)(Object(x.a)(e.dropdownId))(t)),
						O = Object(r.useCallback)(() => {
							t(Object(C.h)({
								tooltipId: e.dropdownId
							}))
						}, [t, e.dropdownId]),
						N = e => t(Object(p.D)(e)),
						M = Object(r.useCallback)(() => {
							e.post && (t(Object(b.d)(e.post.id)), t(Object(u.i)(Object(x.a)(e.post.id))))
						}, [t, e.post]),
						F = !e.subredditType || e.subredditType === k.f.Public,
						D = !!e.post && e.post.isCrosspostable && !e.post.isSponsored,
						B = Object(r.useCallback)(e => {
							t(Object(m.e)(e)), s(Object(E.a)())
						}, [t, s]);
					return o.a.createElement("div", {
						className: e.className,
						onClick: O,
						id: e.dropdownId
					}, e.children, o.a.createElement(P, {
						className: R.a.dropdown,
						isOpen: c,
						tooltipId: e.dropdownId
					}, o.a.createElement(g.b, {
						className: R.a.dropdownRow,
						displayText: n.fbt._("Copy link", null, {
							hk: "1tCqox"
						}),
						onClick: () => {
							const {
								permalink: t,
								post: s
							} = e;
							if (s && Object(_.p)(s)) e.sendEventWithName("share_copy", {
								referralId: L
							}), M();
							else {
								const s = Object(l.a)(t, {
									utm_source: "share",
									utm_medium: "web2x",
									context: 3
								});
								e.sendEventWithName("share_copy"), N(s)
							}
						}
					}, o.a.createElement(y.a, {
						name: "link_post",
						className: R.a.linkIcon
					})), D && o.a.createElement(g.b, {
						className: R.a.dropdownRow,
						displayText: n.fbt._("crosspost", null, {
							hk: "23zSN6"
						}),
						onClick: () => {
							e.sendEventWithName("share_crosspost"), e.post && window.open(`${w.b}?source_id=${e.post.id}`, "_blank")
						}
					}, o.a.createElement(y.a, {
						name: "crosspost",
						className: R.a.crosspostIcon
					})), F && o.a.createElement(g.b, {
						className: R.a.dropdownRow,
						displayText: n.fbt._("Embed", null, {
							hk: "2CcsuC"
						}),
						onClick: () => {
							e.sendEventWithName("share_embed"), window.open(`${d.a.rebedMediaUrl}/embed?url=${e.permalink}`, "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, o.a.createElement(y.a, {
						name: "embed",
						className: R.a.embedIcon
					})), a && o.a.createElement(g.b, {
						className: R.a.dropdownRow,
						displayText: n.fbt._("share to chat", null, {
							hk: "3EuIWT"
						}),
						onClick: () => {
							const {
								permalink: t
							} = e, s = Object(l.a)(t, {
								utm_source: "share",
								utm_medium: "web2x",
								context: 3
							});
							B(s)
						}
					}, o.a.createElement(y.a, {
						name: "chat",
						className: R.a.chatIcon
					}))), h && e.post && o.a.createElement(x.b, {
						className: R.a.modalBody,
						onClose: t => {
							t && (e.sendEventWithName("copy_link", {
								referralId: L
							}), N(t)), M()
						},
						url: Object(l.a)(Object(v.a)(e.post.id), {
							[f.s]: L,
							utm_source: "share",
							utm_medium: "web2x",
							utm_content: "rpan_stream"
						})
					}))
				});
			t.a = M
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
				copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				CountryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR",
				countryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR"
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
				b = s("./src/reddit/helpers/getReredditLinkWithYear/index.ts"),
				C = s("./src/reddit/helpers/trackers/navigation.ts"),
				h = s("./src/reddit/selectors/experiments/countrySites.ts"),
				x = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				f = s("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				O = s("./src/reddit/selectors/meta.ts"),
				g = s("./src/reddit/components/SidebarFooter/index.m.less"),
				v = s.n(g);
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = c.a.a("Link", v.a), y = Object(i.c)({
				countryCode: O.b,
				d2xPdpSideRailRecsVariant: x.a,
				isCountrySitesEnabled: h.b,
				isD2xPdpSideRailRecsEnabled: x.b,
				isNavbarLikeMwebEnabled: f.a
			}), _ = Object(o.b)(y), k = Object(p.u)({
				isFrontpage: p.A,
				isCountrySitePage: p.y
			}), w = e => {
				let {
					countryCode: t,
					reredditContent: s
				} = e;
				return r.a.createElement("div", {
					className: v.a.GreyRereddit
				}, s, r.a.createElement(j, {
					href: "https://www.reddithelp.com"
				}, E._("help", null, {
					hk: "4lyYaD"
				})), r.a.createElement(j, {
					href: "https://www.reddit.com/coins"
				}, E._("Reddit coins", null, {
					hk: "32iMaN"
				})), r.a.createElement(j, {
					href: "https://www.reddit.com/premium"
				}, E._("Reddit premium", null, {
					hk: "RuO3A"
				})), !!u.c[t] && r.a.createElement(r.a.Fragment, null, r.a.createElement(j, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, E._("Impressum", null, {
					hk: "4cKXSI"
				})), r.a.createElement(j, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, E._("Transparency report", null, {
					hk: "3CgBdG"
				})), r.a.createElement(j, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: v.a.NoneCapitalizeLink
				}, E._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement(j, {
					href: "https://www.redditinc.com/"
				}, E._("about", null, {
					hk: "1sqJKs"
				})), r.a.createElement(j, {
					href: "https://www.redditinc.com/careers"
				}, E._("careers", null, {
					hk: "26ABvc"
				})), r.a.createElement(j, {
					href: "https://www.redditinc.com/press"
				}, E._("press", null, {
					hk: "2Qmgdz"
				})), r.a.createElement(j, {
					href: "https://www.redditinc.com/advertising"
				}, E._("advertise", null, {
					hk: "Mt40U"
				})), r.a.createElement(j, {
					href: "http://www.redditblog.com/"
				}, E._("blog", null, {
					hk: "46IQJw"
				})), r.a.createElement(j, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, E._("Terms", null, {
					hk: "4qRzfE"
				})), r.a.createElement(j, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, E._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(j, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, E._("Privacy policy", null, {
					hk: "10K04G"
				})), r.a.createElement(j, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, E._("Mod policy", null, {
					hk: "2gYc2T"
				})), r.a.createElement("div", {
					className: v.a.Copyright
				}, E._("Reddit Inc © {year}. All rights reserved", [E._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = k(_(Object(d.c)(e => {
				const t = Object(o.f)().getState(),
					s = Object(h.a)(t, Object(a.c)());
				if (e.isNavbarLikeMwebEnabled) return e.isFrontpage ? r.a.createElement(l.a, {
					className: v.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, r.a.createElement("div", {
					className: v.a.LinkContainer
				}, r.a.createElement("div", {
					className: v.a.Column
				}, r.a.createElement(j, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, E._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(j, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, E._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: v.a.Column
				}, r.a.createElement(j, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, E._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(j, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, E._("Moderator Guidelines", null, {
					hk: "2O9otm"
				})))), r.a.createElement("div", {
					className: v.a.Copyright
				}, E._("© {year} Reddit, Inc. All rights reserved.", [E._param("year", (new Date).getFullYear().toString())], {
					hk: "sR7zP"
				}))) : null;
				const n = t => {
					const n = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "USA/Global",
						it: "Italiano"
					};
					return s.includes(t) || "en" === t ? r.a.createElement(j, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(C.a)(t))
					}, n[t]) : null
				};
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === m.xc.GreyRereddit ? e.reredditButtons : [];
					return r.a.createElement(w, {
						reredditContent: t,
						countryCode: e.countryCode
					})
				}
				return r.a.createElement(l.a, {
					className: v.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, r.a.createElement("div", {
					className: v.a.LinkContainer
				}, r.a.createElement("div", {
					className: v.a.Column
				}, r.a.createElement(j, {
					href: "https://www.reddithelp.com"
				}, E._("help", null, {
					hk: "4lyYaD"
				})), r.a.createElement(j, {
					href: "https://www.reddit.com/coins"
				}, E._("Reddit coins", null, {
					hk: "32iMaN"
				})), r.a.createElement(j, {
					href: "https://www.reddit.com/premium"
				}, E._("Reddit premium", null, {
					hk: "RuO3A"
				})), e.isFrontpage && r.a.createElement(r.a.Fragment, null, r.a.createElement(j, {
					href: "https://www.reddit.com/subreddits/a-1/"
				}, E._("Communities", null, {
					hk: "3CJu37"
				})), r.a.createElement(j, {
					href: `https://www.reddit.com${Object(b.a)()}`
				}, E._("Rereddit", null, {
					hk: "1z3k7C"
				})), r.a.createElement(j, {
					href: "https://www.reddit.com/topics/a-1/"
				}, E._("Topics", null, {
					hk: "349RFt"
				}))), !!u.c[e.countryCode] && r.a.createElement(r.a.Fragment, null, r.a.createElement(j, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, E._("Impressum", null, {
					hk: "4cKXSI"
				})), r.a.createElement(j, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, E._("Transparency report", null, {
					hk: "3CgBdG"
				})), r.a.createElement(j, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: v.a.NoneCapitalizeLink
				}, E._("Report NetzDG Content", null, {
					hk: "1nszCF"
				})))), r.a.createElement("div", {
					className: v.a.Column
				}, r.a.createElement(j, {
					href: "https://www.redditinc.com/"
				}, E._("about", null, {
					hk: "1sqJKs"
				})), r.a.createElement(j, {
					href: "https://www.redditinc.com/careers"
				}, E._("careers", null, {
					hk: "26ABvc"
				})), r.a.createElement(j, {
					href: "https://www.redditinc.com/press"
				}, E._("press", null, {
					hk: "2Qmgdz"
				})), r.a.createElement(j, {
					href: "https://www.redditinc.com/advertising"
				}, E._("advertise", null, {
					hk: "Mt40U"
				})), r.a.createElement(j, {
					href: "http://www.redditblog.com/"
				}, E._("blog", null, {
					hk: "46IQJw"
				})), r.a.createElement(j, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, E._("Terms", null, {
					hk: "4qRzfE"
				})), r.a.createElement(j, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, E._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(j, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, E._("Privacy policy", null, {
					hk: "10K04G"
				})), r.a.createElement(j, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, E._("Mod policy", null, {
					hk: "2gYc2T"
				})))), (e.isCountrySitePage || e.isFrontpage && e.isCountrySitesEnabled) && r.a.createElement("div", {
					className: v.a.CountryLinkContainer
				}, r.a.createElement("div", {
					className: v.a.Column
				}, n("en"), n("fr"), n("it")), r.a.createElement("div", {
					className: v.a.Column
				}, n("de"), n("es"))), r.a.createElement("div", {
					className: v.a.Copyright
				}, E._("Reddit Inc © {year}. All rights reserved", [E._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
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
				r = s.n(n),
				o = s("./src/lib/lessComponent.tsx");
			t.a = o.a.div("Component", r.a)
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
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/lodash/throttle.js"),
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/constants/elementIds.ts"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/components/BackToTop/index.m.less"),
				u = s.n(m);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = e => {
				if (e) {
					const e = document.getElementById(d.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			var C = e => {
					let {
						className: t,
						isOverlay: s,
						style: r
					} = e;
					return a.a.createElement("div", {
						className: Object(n.a)(t, u.a.container),
						style: r
					}, a.a.createElement(l.l, {
						className: u.a.button,
						onClick: () => b(s)
					}, p._("Back to Top", null, {
						hk: "YjBtV"
					})))
				},
				h = s("./src/reddit/components/SidebarFooter/index.tsx"),
				x = s("./src/reddit/constants/componentSizes.ts"),
				f = s("./src/reddit/contexts/PageLayer/index.tsx"),
				O = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				g = s.n(O),
				v = s("./src/lib/lessComponent.tsx");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const j = c.e[1] + 24,
				y = x.f + 8,
				_ = y + 152 + 16,
				k = _ + j + 8,
				w = v.a.div("Container", g.a),
				S = v.a.wrapped(e => {
					let {
						className: t,
						isOverlay: s,
						...n
					} = e;
					return a.a.createElement(C, E({
						className: t,
						isOverlay: s,
						style: {
							top: `calc(100vh - ${s?y:8}px)`
						}
					}, n))
				}, "BackToTop", g.a),
				I = e => {
					let {
						children: t,
						className: s,
						isFakeOverlay: r,
						isSticky: o
					} = e;
					return a.a.createElement("div", {
						className: Object(n.a)(s, {
							[g.a.StickyStyles]: o && !r,
							[g.a.StickyStylesFakeOverlay]: !!r
						})
					}, t)
				};
			class T extends i.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > k,
						shouldFooterSticky: this.windowHeight > _
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
					}, c.L), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
					var e;
					const {
						props: {
							adComponent: t,
							adComponentOnFakeOverlay: s,
							children: n,
							className: r,
							hideFooter: o,
							pageLayer: i,
							reredditButtons: c
						}
					} = this, d = this.state.isAdSticky && !(!t && !n);
					return a.a.createElement(w, {
						className: r,
						innerRef: this.setWrapperRef
					}, a.a.createElement(I, {
						isFakeOverlay: s,
						isSticky: d
					}, t, n, !o && a.a.createElement(h.a, {
						reredditButtons: c
					})), !this.props.hideBackToTop && a.a.createElement(S, {
						isOverlay: !!(null === (e = null == i ? void 0 : i.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const N = Object(f.u)();
			t.a = N(T)
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
				return E
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
				C = s("./src/reddit/constants/experiments.ts"),
				h = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				x = s("./src/reddit/selectors/subredditMention.ts");
			class f extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: s
						} = this.props;
						t(Object(h.a)({
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
			const O = Object(b.c)(f),
				g = Object(i.c)({
					isFeatureFlagEnabled: x.b,
					isUserInTreatment: x.e,
					userVariant: x.a
				}),
				v = Object(o.b)(g),
				E = e => {
					let {
						isFeatureFlagEnabled: t,
						isUserInTreatment: s,
						subredditName: n,
						userVariant: o,
						rtJsonElementProps: i
					} = e;
					if (!s || !t) return r.a.createElement(O, {
						subredditName: n,
						rtJsonElementProps: i
					});
					switch (o) {
						case C.qf.SmIcon:
							return r.a.createElement(p, {
								subredditName: n,
								rtJsonElementProps: i
							});
						case C.qf.SmIconHc:
							return r.a.createElement(p, {
								subredditName: n,
								isHoverable: !0,
								rtJsonElementProps: i
							});
						default:
							return r.a.createElement(O, {
								subredditName: n,
								rtJsonElementProps: i
							})
					}
				};
			t.b = v(E)
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
				C = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/helpers/correlationIdTracker.ts"),
				f = s("./src/reddit/helpers/flair.ts"),
				O = s("./src/reddit/helpers/trackers/postFlair.ts"),
				g = s("./src/reddit/models/Widgets/index.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				j = s.n(E);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = 129,
				k = Object(C.u)({
					filterName: e => Object(C.W)(e)[b.h],
					url: e => Object(C.db)(e)
				}),
				w = Object(a.c)({
					subredditId: (e, t) => Object(v.F)(e, t.subredditName)
				}),
				S = Object(i.b)(w),
				I = l.a.div("WidgetContent", j.a),
				T = e => {
					let {
						display: t,
						isFlairFilter: s,
						onMouseDown: n,
						onClick: r,
						...i
					} = e;
					return o.a.createElement("li", {
						className: Object(c.a)(j.a.StyledFlair, t === g.g.Cloud && j.a.cloudDisplay, {
							[j.a.flairFilter]: s,
							[j.a["m-selected"]]: i.isSelected
						}),
						onClick: () => null == r ? void 0 : r(Object(f.g)(i.flair)),
						onMouseDown: n
					}, o.a.createElement(m.b, y({}, i, {
						className: j.a.Flair,
						isFlairFilter: s,
						forceSmallEmojis: !0
					})))
				};
			class N extends o.a.Component {
				constructor(e) {
					super(e), this.flairListRef = o.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(O.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(O.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(O.d)())
					}, this.onClickFlair = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(x.e)(x.a.SearchResults), this.props.sendEvent(Object(O.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(f.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(f.c)(this.props.widget.templates[e])), this.state = {
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
					return o.a.createElement(h.r, {
						className: j.a.flairFilterButton,
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
						to: Object(f.e)(this.props.url, Object(f.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, s = t ? _ : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return o.a.createElement("div", {
						className: j.a.flairFilterContainer,
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
						to: Object(f.e)(this.props.url, Object(f.j)(e))
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
					}, o.a.createElement(I, null, i && this.renderSelectedFlairFilter(i), !i && this.renderFlairFilters(r), a && this.renderButton()))
				}
			}
			t.a = k(S(Object(u.c)(N)))
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
				C = s("./src/reddit/selectors/experiments/topPosts.ts"),
				h = s("./src/reddit/selectors/structuredStyles.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/models/Theme/index.ts"),
				O = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const g = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(O.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				v = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(O.a)(e).widgetColors.sidebarWidgetHeaderColor,
				E = e => {
					const t = g(e);
					return Object(f.f)(t)
				},
				j = e => {
					const t = v(e);
					return Object(f.f)(t)
				};
			var y = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				_ = s.n(y);
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), w = Object(m.u)(), S = Object(o.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(m.n)(e, t) || void 0,
						n = t.redditStyle || Object(h.l)(e, {
							subredditId: s
						}),
						r = Object(x.eb)(e);
					return n || r
				},
				nigtmode: x.eb,
				subredditId: m.n,
				topPostVariant: C.d
			}));
			class I extends r.a.Component {
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
					return e.backgroundColor = g(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = E(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = v(this.props), e.color = e.fill = j(this.props), e
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
					} = this.props, C = s ? _.a.widgetContentOnly : _.a.widgetContent, h = !n && this.props.styles, x = h ? this.getWidgetBackgroundStyles() : {}, f = h ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(a.a)(t, _.a.widgetBackground, {
							[_.a.redditStyle]: n,
							[_.a.clickable]: !!c,
							[_.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: c,
						style: x
					}, m && r.a.createElement("div", {
						className: Object(a.a)(_.a.widgetHeader, {
							[_.a.clickable]: !!l
						}),
						id: i,
						style: f,
						onClick: l
					}, r.a.createElement("div", {
						className: Object(a.a)(_.a.widgetTitle, p)
					}, r.a.createElement(d.b, {
						type: d.a.Widget
					}, m)), o), r.a.createElement("div", {
						className: Object(a.a)(C, {
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
			t.a = w(S(Object(c.a)(Object(l.c)(I))))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return j
			})), s.d(t, "d", (function() {
				return _
			})), s.d(t, "b", (function() {
				return w
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
				C = s("./src/reddit/helpers/trackers/post.ts"),
				h = s("./src/reddit/components/PostList/Placeholder.tsx"),
				x = s("./src/reddit/featureFlags/index.ts"),
				f = s("./src/reddit/selectors/experiments/survey.ts"),
				O = s("./src/reddit/selectors/listings.ts"),
				g = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/selectors/tracking.ts");

			function j() {
				return Object(p.u)({
					currentProfileName: p.i,
					isCommentPermalink: p.w,
					isCommentsPage: p.x,
					isFrontpage: p.A,
					isProfilePostListing: p.L,
					isTopicPage: p.Q,
					pageLayer: e => e
				})
			}
			const y = j(),
				_ = {
					apiError: O.c,
					apiPending: O.d,
					measureScrollFPS: x.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.R)(e, t),
					loadMore: O.g,
					postsById: g.S,
					postIds: Object(o.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: r
						} = t;
						return Object(g.D)(e, s, n, r)
					}),
					subredditsById: v.bb,
					viewportDataLoaded: E.a,
					pageReferrer: p.U,
					postListPlaceholderComponent: () => h.a,
					isNpsScrollSurveyEnabled: f.e
				},
				k = Object(r.c)(_),
				w = e => ({
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
						})), e(d.L(t))
					},
					fireAdPixelsOfType: (t, s) => {
						e(d.z(t, s))
					},
					trackOnPostEnteredViewport: (t, s, n, r) => {
						e(d.O(t, n, r))
					},
					trackOnPostExitedViewport: (t, s, n, r, o) => {
						e(d.P(t, n, r, o))
					},
					showModalOnScroll: () => e(d.cb()),
					surveyTriggerScrollCounted: () => e(Object(m.l)())
				}),
				S = e => Object(b.b)({
					...e
				}),
				I = (e, t, s, n) => {
					const {
						listingKey: r,
						hostPostData: o,
						listingBelowVariant: i
					} = n;
					return Object(C.h)(e, t, "post", r, o, i, void 0)
				},
				T = Object(n.b)(k, w, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: S,
					postClickEventFactory: I
				}));
			t.a = e => Object(u.c)(y(T(e)))
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
				return g
			})), s.d(t, "c", (function() {
				return v
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
				C = s.n(b);
			var h = Object(m.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return d.a.createElement("div", {
						className: C.a.wrapper
					}, d.a.createElement(p.a, {
						className: C.a.titleRow
					}, s), d.a.createElement("div", {
						className: C.a.detailsContainer
					}, t), d.a.createElement(p.a, {
						className: C.a.buttonRow
					}, d.a.createElement(u.l, {
						className: C.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				x = s("./src/reddit/controls/ErrorText/index.m.less"),
				f = s.n(x);
			class O extends d.a.Component {
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
						className: Object(l.a)(f.a.wrapper, t)
					}, d.a.createElement("span", {
						className: f.a.description,
						ref: this.spanRef
					}, e), i && d.a.createElement("span", {
						className: f.a.moreText,
						onClick: this.toggleModal
					}, o), a && d.a.createElement(h, {
						onConfirmed: this.toggleModal,
						title: r
					}, s || e))
				}
			}
			const g = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: n,
						fallbackMessage: r,
						messages: o = []
					} = e, i = o.length ? o : r ? [r] : [];
					return i.length ? d.a.createElement("div", {
						className: t
					}, i.map((e, t) => d.a.createElement(O, {
						className: s,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				v = e => d.a.createElement(g, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = O
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
			const o = (e, t, s) => t.includes(n.dc.Comments) ? e ? r.h.Comments : r.h.Posts : s || t.includes(n.dc.Posts) ? r.h.Posts : t.includes(n.dc.Users) && !t.includes(n.dc.Subreddits) ? r.h.People : r.h.Listings
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
					i = e && e[r.r] || "";
				return t ? (i = i.replace("flair:", "flair_name:"), s = `/r/${t}/search`, o = "1", Object(n.a)(s, {
					[r.r]: i,
					[r.u]: o
				})) : (i = i.replace("flair_name:", "flair:"), Object(n.a)(s, {
					[r.r]: i
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
				return C
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "d", (function() {
				return x
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
				C = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : m,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				x = e => {
					const t = Object(o.a)(Object(r.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
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
				return C
			})), s.d(t, "m", (function() {
				return h
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "p", (function() {
				return O
			})), s.d(t, "c", (function() {
				return g
			})), s.d(t, "j", (function() {
				return v
			})), s.d(t, "q", (function() {
				return E
			})), s.d(t, "k", (function() {
				return j
			})), s.d(t, "l", (function() {
				return y
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
						...c.n(e),
						action: o.c.CLICK,
						subreddit: c.gb(e)
					};
					return void 0 === t ? s : {
						...s,
						post: c.H(e, t),
						postCollection: c.J(e, {
							postId: t
						}),
						postEvent: c.K(e, {
							postId: t
						})
					}
				},
				p = e => ({
					...x(e),
					action: o.c.VIEW,
					noun: r.collectionEducation
				}),
				b = e => ({
					...x(e),
					action: o.c.CLICK,
					noun: r.collectionEducationGotIt
				}),
				C = e => ({
					...x(e),
					action: o.c.VIEW,
					noun: r.eventEducation
				}),
				h = e => ({
					...x(e),
					action: o.c.CLICK,
					noun: r.eventEducationGotIt
				}),
				x = e => ({
					...c.n(e),
					subreddit: c.gb(e),
					source: n.postComposer
				}),
				f = (e, t) => s => ({
					...u(s, e),
					source: t || n.postOverflowMenu,
					noun: r.collectionAddPost
				}),
				O = e => t => ({
					...u(t, e),
					source: n.collectionComposer,
					noun: r.collectionRemovePost
				}),
				g = () => e => ({
					...u(e),
					source: n.collectionComposer,
					noun: r.collectionCancel
				}),
				v = () => e => {
					const t = Object(a.o)(e) || void 0;
					return {
						...u(e, t),
						source: n.collectionComposer,
						noun: r.collectionCreate
					}
				},
				E = () => e => ({
					...u(e),
					source: n.collectionComposer,
					noun: r.collectionSelect
				}),
				j = e => t => ({
					...c.n(t),
					subreddit: c.gb(t),
					source: n.collectionComposer,
					action: o.c.CLICK,
					noun: r.collectionDelete,
					postCollection: c.I(t, {
						collectionId: e
					})
				}),
				y = e => t => ({
					...u(t),
					source: n.collectionComposer,
					noun: r.collectionEdit,
					postCollection: c.I(t, {
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
				return C
			})), s.d(t, "e", (function() {
				return h
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "d", (function() {
				return O
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
						...m.n(e),
						source: n.postComposer,
						action: a.c.CLICK,
						noun: "event_create",
						subreddit: m.gb(e)
					})
				},
				C = e => {
					Object(u.a)({
						...m.n(e),
						source: n.postComposer,
						action: a.c.CLICK,
						noun: "event_edit",
						subreddit: m.gb(e),
						postEvent: g(e),
						postComposer: v(e)
					})
				},
				h = () => e => ({
					source: n.eventComposer,
					action: a.c.VIEW,
					noun: a.b.SCREEN,
					actionInfo: p(e),
					postEvent: g(e)
				}),
				x = e => t => ({
					...y(t, Object(d.o)(t)),
					source: n.postComposer,
					noun: "apply",
					postComposer: E(e)
				}),
				f = () => e => ({
					...y(e, Object(d.o)(e)),
					noun: "cancel",
					actionInfo: p(e)
				}),
				O = e => t => ({
					...y(t, Object(d.o)(t)),
					noun: "delete",
					actionInfo: p(t),
					postComposer: v(t),
					postEvent: j(e)
				}),
				g = e => {
					const t = Object(l.p)(e);
					return t && j(t)
				},
				v = e => E(Object(l.p)(e)),
				E = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === c.j.AtEventTime ? Object(i.f)(e.startDate).getTime() / r.Tb : void 0
					}
				},
				j = e => {
					const t = Object(i.f)(e.startDate).getTime() / r.Tb,
						s = Object(i.f)(e.endDate).getTime() / r.Tb;
					return {
						eventStartTimestamp: t,
						eventEndTimestamp: s,
						eventState: Object(o.e)(t, s)
					}
				},
				y = (e, t) => {
					const s = {
						source: n.eventComposer,
						action: a.c.CLICK,
						subreddit: m.gb(e)
					};
					return t ? {
						...s,
						post: m.H(e, t),
						postEvent: m.K(e, {
							postId: t
						}),
						postCollection: m.J(e, {
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
				...Object(r.n)(e),
				source: "post",
				action: n.c.CLICK,
				noun: "share_chat",
				subreddit: Object(r.gb)(e)
			})
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "g", (function() {
				return f
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "c", (function() {
				return g
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "e", (function() {
				return E
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
					...m.n(e),
					source: r.LINK,
					action: o.c.CLICK,
					noun: n.INTERNAL_LINK
				}),
				p = e => ({
					...m.n(e),
					source: r,
					screen: m.Y(e),
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
						d = Object(l.z)(e, {
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
				C = (e, t) => {
					const {
						renderingObjectInfo: s
					} = t;
					if (!s || !Object(a.b)(s) && !Object(i.b)(s)) return {};
					const n = Object(a.b)(s) ? s.belongsTo.id : s.subredditId;
					return {
						post: m.H(e, s.id),
						subreddit: m.hb(e, n),
						...b(e, t)
					}
				},
				h = e => t => ({
					...u(t),
					...C(t, e)
				}),
				x = e => t => ({
					...p(t),
					source: "global",
					action: o.c.VIEW,
					noun: n.SUBREDDIT_HOVERCARD,
					subreddit: m.ib(t, e),
					screen: m.Y(t)
				}),
				f = (e, t) => s => ({
					...p(s),
					source: r.DISCOVERY_UNIT,
					action: o.c.VIEW,
					noun: n.ITEM_POST,
					post: m.H(s, t),
					subreddit: m.ib(s, e),
					screen: m.Y(s)
				}),
				O = (e, t) => s => ({
					...p(s),
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.ITEM_POST,
					post: m.H(s, t),
					subreddit: m.ib(s, e),
					screen: m.Y(s)
				}),
				g = e => t => ({
					...p(t),
					subreddit: m.hb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT
				}),
				v = e => t => ({
					...p(t),
					subreddit: m.hb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				E = e => t => ({
					...p(t),
					subreddit: m.hb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT_UNSUBSCRIBE
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
					widget: Object(i.ub)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...i.n
				}),
				c = (e, t) => s => ({
					source: r.POST,
					action: o.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: i.H(s, e),
					subreddit: i.gb(s),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...i.n(s)
				}),
				d = () => e => ({
					source: r.SIDEBAR,
					action: o.c.VIEW,
					noun: n.TOPICS_WIDGET,
					...i.n(e)
				}),
				l = e => t => ({
					source: r.TOPICS_WIDGET,
					action: o.c.CLICK,
					noun: n.TOPIC,
					...i.n(t),
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
		"./src/reddit/icons/fonts/DistinguishShield/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("distinguish", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("message",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("award",e.isFilled)} ${e.className}`,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(o.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("ignore_reports",e.isFilled)} ${e.className}`
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
		"./src/reddit/icons/svgs/CircleCheckLight/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			const o = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M18.04 7.67457C18.5905 9.55741 18.4654 11.5734 17.6865 13.3738C16.9076 15.1742 15.5238 16.6457 13.7746 17.5336C12.0254 18.4215 10.0209 18.67 8.1078 18.2362C6.19473 17.8023 4.49351 16.7133 3.29851 15.1576C2.10351 13.602 1.48992 11.6775 1.5639 9.71728C1.63788 7.75702 2.39478 5.88429 3.70364 4.42313C5.01249 2.96197 6.79095 2.00431 8.73128 1.71586C10.6716 1.42742 12.6517 1.82633 14.329 2.84357L15.189 1.90557C13.2556 0.658893 10.9412 0.141738 8.661 0.446834C6.38077 0.75193 4.2838 1.85932 2.74608 3.57044C1.20837 5.28156 0.330485 7.4845 0.269845 9.78425C0.209205 12.084 0.969774 14.3301 2.41518 16.1199C3.86058 17.9097 5.89628 19.1261 8.15726 19.5509C10.4182 19.9757 12.7566 19.5813 14.7531 18.4382C16.7496 17.2952 18.2736 15.4783 19.0519 13.3134C19.8301 11.1485 19.8118 8.77715 19 6.62457L18.04 7.67457Z",
				fill: "inherit"
			}), r.a.createElement("path", {
				d: "M9.99503 12.6426C9.91293 12.6427 9.83162 12.6266 9.75577 12.5952C9.67991 12.5638 9.61101 12.5177 9.55303 12.4596L5.54703 8.45257L6.43203 7.56957L9.97603 11.1146L19.013 1.24657L19.935 2.08957L10.456 12.4396C10.3989 12.5013 10.3298 12.5509 10.253 12.5852C10.1762 12.6196 10.0932 12.6381 10.009 12.6396L9.99503 12.6426Z",
				fill: "inherit"
			}))
		},
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
					redditStyle: C,
					sidebar: h,
					subredditId: x
				} = e;
				const f = Object(n.useContext)(c.a),
					O = Boolean(h);
				return r.a.createElement(i.a, {
					subredditId: x
				}, r.a.createElement("div", {
					className: Object(o.a)(m.a.outerContainer, a.i, s, {
						[m.a.outerContainerExp]: f
					}),
					ref: l
				}, r.a.createElement(d.a, {
					className: a.h,
					redditStyle: C,
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
					className: Object(o.a)(p.a.content, O && p.a.withSidebar)
				}, r.a.createElement("div", {
					className: Object(o.a)(p.a.mainContent, O && p.a.withSidebar)
				}, u), O && r.a.createElement("div", {
					className: p.a.sidebarContent
				}, h)))))))
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
				return X
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
				C = s("./src/reddit/actions/survey/index.ts"),
				h = s("./src/reddit/components/JumpToContent/index.tsx"),
				x = s("./src/reddit/components/SearchResultsContent/index.tsx"),
				f = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/selectors.ts"),
				O = s("./src/reddit/components/SearchResultsNav/index.tsx"),
				g = s("./src/reddit/components/SearchResultsSidebar/index.tsx"),
				v = s("./src/reddit/components/SearchResultsSubNav/index.tsx"),
				E = s("./src/reddit/components/SearchSwitcher/index.tsx"),
				j = s("./src/reddit/components/TrackingHelper/index.tsx"),
				y = s("./src/reddit/constants/covid.ts"),
				_ = s("./src/reddit/constants/page.ts"),
				k = s("./src/reddit/constants/parameters.ts"),
				w = s("./src/reddit/contexts/PageLayer/index.tsx"),
				S = s("./src/reddit/helpers/correlationIdTracker.ts"),
				I = s("./src/reddit/helpers/search/searchImpressionId.ts"),
				T = s("./src/reddit/helpers/search/searchQueryId.ts"),
				N = s("./src/reddit/helpers/search/searchTabType.ts"),
				R = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				P = s("./src/reddit/helpers/search/switchSearchScope.ts"),
				L = s("./src/reddit/helpers/trackers/searchResults.ts"),
				M = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				F = s("./src/reddit/hooks/useTheme.ts"),
				D = s("./src/reddit/layout/page/SearchResults/index.tsx"),
				B = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				A = s("./src/reddit/selectors/experiments/searchQueryAligment.ts"),
				H = s("./src/reddit/selectors/experiments/serpRedesignLayout.ts"),
				U = s("./src/reddit/selectors/searchFix.ts"),
				V = s("./src/reddit/selectors/searchQueryId.ts"),
				W = s("./src/reddit/selectors/subreddit.ts"),
				G = s("./node_modules/lodash/isEmpty.js"),
				K = s.n(G),
				q = s("./src/reddit/pages/SearchResults/index.m.less"),
				Y = s.n(q);

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const J = 3e3,
				Z = Object(n.a)({
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
				X = {
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
					r = Object(w.eb)(),
					u = Object(j.b)(),
					G = Object(F.a)(),
					q = Object(i.useRef)(!1),
					Q = Object(i.useRef)(!1),
					$ = Object(c.e)(e => Object(W.z)(e, {
						subredditName: s.params.subredditName
					})),
					ee = Object(c.e)(e => Object(f.a)(e, {
						pageLayer: r
					})),
					te = Object(c.e)(e => Object(U.c)(e, {
						pageLayer: r
					})),
					{
						searchQueryId: se
					} = Object(c.e)(e => Object(V.a)(e)),
					ne = Object(c.e)(e => Object(A.a)(e)),
					re = Object(c.e)(H.a),
					oe = Object(w.W)(r),
					ie = Object(w.bb)(r),
					[ae, ce] = Object(i.useState)(!1),
					de = Object(l.a)(oe) || null;
				Object(M.c)(), Object(i.useEffect)((function() {
					return () => {
						I.a.clear(R.a.SERP)
					}
				}), []), Object(i.useEffect)(() => {
					let e = 0;
					return e = window.setTimeout(() => n(Object(C.j)()), J), () => {
						Object(S.b)(S.a.SearchResults), window.clearTimeout(e)
					}
				}, []), Object(i.useEffect)(() => {
					oe !== de && (q.current = !1, ce(!1)), oe && de && oe[k.r] !== de[k.r] && (Object(S.b)(S.a.SearchResults), Object(S.e)(S.a.SearchResults))
				}, [oe, de]), Object(i.useEffect)(() => {
					const e = {
							...oe,
							type: void 0
						},
						t = {
							...de,
							type: void 0
						};
					!p()(e, t) && !K()(de) && I.a.update(R.a.SERP)
				}, [oe, de]);
				const le = s.params.multiredditName,
					me = s.params.subredditName || le || "",
					ue = s.params.username,
					pe = Object(m.e)(o()(oe || {}, k.v), Object(d.uc)(re)),
					be = Object(m.b)(me, ue, pe);
				se && (ne ? T.a.set(R.a.SERP, be, se) : Object(S.d)(S.a.SearchResults, se), n(Object(b.c)()));
				const Ce = $ && pe.restrict_sr,
					he = Object(N.a)(re, pe.type, Ce),
					xe = {
						...pe,
						type: [d.dc.Posts, d.dc.Subreddits, d.dc.Users]
					},
					fe = Object(m.b)(me, ue, xe),
					Oe = {
						redesign: !0,
						searchOptions: pe
					};
				let ge;
				Object(w.P)(r) || Object(w.C)(r) ? ge = a.a.createElement(E.a, z({}, Oe, {
					url: Object(P.a)(oe)
				})) : ee && te && (ge = a.a.createElement(E.a, z({}, Oe, {
					subreddit: ee,
					url: Object(P.a)(oe, ee.name)
				})));
				const ve = X[he].tab,
					Ee = Boolean(Ce) || X[he].sidebar && !le,
					je = X[he].filterNav,
					ye = Object(B.a)({
						redditStyle: !0,
						theme: G
					});
				return Object(i.useEffect)(() => {
					if (ve === _.h.Comments && !Q.current) {
						let e = 0;
						return e = window.setTimeout(() => {
							Q.current = !0, n(Object(C.i)())
						}, J), () => {
							window.clearTimeout(e)
						}
					}
				}, [ve]), a.a.createElement(D.a, {
					backgroundColor: ye.canvas,
					content: a.a.createElement(a.a.Fragment, null, a.a.createElement(h.a, null), ie && !ae && (() => {
						const e = e => u(Object(L.f)(e, Object(m.e)(o()(oe || {}, k.v))));
						return q.current || (e("view"), q.current = !0), a.a.createElement(Z, {
							announcement: y.a,
							className: Y.a.announcement,
							onBtnClick: () => e("click"),
							onClose: () => {
								e("dismiss"), ce(!0)
							}
						})
					})(), a.a.createElement(x.a, {
						listingKey: be,
						listingName: me,
						location: t,
						searchOptions: pe,
						tab: ve
					})),
					navBar: a.a.createElement(a.a.Fragment, null, a.a.createElement(O.a, {
						activeTab: ve,
						searchOptions: pe,
						searchSwitcher: ge
					}), je && a.a.createElement(v.a, {
						key: "subNav",
						searchOptions: pe,
						shouldHideGlobalSearchLink: !0,
						subredditName: me,
						tab: ve
					}), ge && a.a.createElement("div", {
						className: Y.a.searchSwitcherContainer
					}, ge)),
					sidebar: Ee && a.a.createElement(g.a, {
						className: Y.a.sidebar,
						listingKey: fe,
						listingName: me || _.c,
						searchOptions: xe,
						tab: ve
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
					experimentName: r.J
				}), e => e === r.R.Enabled)
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
					experimentEligibilitySelector: e => Object(a.g)(e) && Object(o.f)(e),
					experimentName: n.bc
				}), i.a),
				l = Object(c.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => !Object(a.g)(e) && Object(o.f)(e),
					experimentName: n.ac
				}), i.a),
				m = Object(c.a)(d, l, (e, t) => e || t),
				u = Object(c.a)(d, l, (e, t) => !(!e && !t))
		},
		"./src/reddit/selectors/experiments/econ/avatarNfts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: n.v
				}) === n.y.Enabled,
				i = e => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: n.Sc
				}) === n.ud
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
			}) === n.f.Enabled
		},
		"./src/reddit/selectors/experiments/shareToChatButton.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = Object(n.a)(e => Object(o.c)(e, {
				experimentEligibilitySelector: i.R,
				experimentName: r.nc
			}), e => e === r.ud)
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return c
			})), s.d(t, "h", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "k", (function() {
				return u
			})), s.d(t, "j", (function() {
				return p
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "d", (function() {
				return v
			}));
			var n = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/reddit/featureFlags/index.ts"),
				o = s("./src/reddit/selectors/posts.ts"),
				i = s("./src/reddit/selectors/subreddit.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const c = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(i.U)(e, {
							subredditId: s
						});
						return t && t.displayText || ""
					}
					return ""
				},
				d = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				l = e => e.focusedVerticals.components.dismissed,
				m = [],
				u = Object(n.a)((e, t) => {
					const s = p(e, t);
					if (!s) return m;
					const n = Object(i.Y)(e, {
						subredditName: s.name
					});
					return n && n.postIds && n.postIds.length ? n.postIds : m
				}),
				p = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(i.U)(e, {
						subredditId: s
					}) : null
				},
				b = (e, t, s, n, r) => {
					const i = r.find(e => e <= t) || -1,
						a = r.find(e => e > t) || 1 / 0;
					return t !== a && t !== i && (!(i + s > t) && (!(t + s > a) && !((e, t, s) => {
						const n = s[t - 1],
							r = s[t],
							i = r && Object(o.G)(e, {
								postId: n
							}) || null,
							a = r && Object(o.G)(e, {
								postId: r
							}) || null;
						return i && i.isSponsored || a && a.isSponsored
					})(e, t, n)))
				},
				C = [3],
				h = Object(n.a)((e, t) => {
					let {
						existingDUPositions: s,
						listingProps: n
					} = t;
					const r = s.slice().sort();
					let i = -1;
					const a = Object(o.z)(e, {
							listingKey: n.listingKey
						}),
						c = [];
					return C.forEach(t => {
						let s = i + t;
						if (!(s >= a.length)) {
							for (; s < a.length && !b(e, s, t, a, r);) s += 1;
							s < a.length && (c.push(s), i = s)
						}
					}), c
				}),
				x = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				f = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				O = e => e.focusedVerticals.category,
				g = e => e.focusedVerticals.lastLoadedEnv,
				v = e => {
					const t = Object(a.Q)(e),
						s = r.d.geoSubredditRecommendationDULoggedIn(e),
						n = r.d.geoSubredditRecommendationDULoggedOut(e);
					return t && s || !t && n
				}
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
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/posts.ts");
			const a = e => Object(o.c)(e, {
					experimentName: r.He,
					experimentEligibilitySelector: o.a
				}),
				c = (e, t) => t === r.Pe.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored),
				d = Object(n.a)(i.G, a, (e, t) => c(e, t));
			Object(n.a)((e, t) => t, a, (e, t) => c(e, t))
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
						experimentName: n.kf
					}) || ""
				},
				d = e => {
					const t = c(e);
					return t === n.qf.SmIcon || t === n.qf.SmIconHc
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
					const n = Object(i.Y)(e, {
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
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"c10a566d5f55"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SearchResults.fe510ebe5c52c6c68122.js.map