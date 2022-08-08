// https://www.redditstatic.com/desktop2x/SearchResults.450b745fc80d50dfd05c.js
// Retrieved at 8/8/2022, 6:00:05 PM by Reddit Dataminer v1.0.0
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
				return g
			})), s.d(t, "d", (function() {
				return j
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
			const h = Object(r.a)(i.g),
				x = Object(r.a)(i.e),
				f = Object(r.a)(i.h),
				O = Object(r.a)(i.c),
				g = Object(r.a)(i.f),
				j = Object(r.a)(i.j),
				v = Object(r.a)(i.i),
				C = () => async (e, t, s) => {
					let {
						gqlContext: r
					} = s;
					const o = t(),
						i = Object(u.e)(o),
						d = Object(u.d)(o),
						p = Object(b.P)(o);
					if (i || !d) return;
					e(f());
					let g = !1;
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
							if (y(t)) {
								if (E(t)) {
									e(O({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), g = !0
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
									e(h(u)), g = !0
								}
							} else g = !1
						}
					} catch (j) {
						g = !1
					}
					g || e(x({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, y = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, E = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, _ = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						n = t && t.type;
					return !!(s && !E(e) && n === d.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, k = () => async (e, t, s) => {
					var n, r;
					const i = t(),
						a = Object(u.g)(i);
					if (Object(u.f)(i) || null === a || "client" === a) {
						const s = null === (r = null === (n = Object(p.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							a = Object(b.Q)(i);
						return Object(o.i)(() => e(C()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(g({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/pages/search/searchResultsRequested.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "searchResultsRequested", (function() {
				return j
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
				h = s("./src/reddit/constants/experiments.ts"),
				x = s("./src/reddit/helpers/chooseVariant/index.ts"),
				f = s("./node_modules/reselect/es/index.js");
			const O = Object(f.a)(e => Object(x.c)(e, {
					experimentEligibilitySelector: x.a,
					experimentName: h.Cb
				}), e => e === h.Ed),
				g = e => n.fbt._("reddit.com: search results - {query}", [n.fbt._param("query", e || "None")], {
					hk: "1XOKAg"
				}),
				j = e => async (t, s) => {
					const n = s(),
						r = Object(a.e)(o()(e.queryParams, p.t)),
						{
							multiredditName: d,
							subredditName: h,
							username: x
						} = e.params;
					let f;
					x && d && (f = Object(b.h)(x, d));
					const j = Object(a.b)(h || d, x, r);
					!O(n) || r.type.length && !l()(r.type, [i.cc.Posts, i.cc.Subreddits, i.cc.Users]) || t(Object(m.d)(j, {
						...r,
						type: [i.cc.Comments]
					}, h, x, f, !0)), await t(Object(m.d)(j, r, h, x, f));
					let v = !1;
					const {
						type: C = []
					} = r, y = C.indexOf(i.cc.Posts) > -1, E = C.indexOf(i.cc.Users) > -1, _ = C.indexOf(i.cc.Subreddits) > -1;
					y && n.listings.postOrder.api.error[j] && (v = !0), E && n.listings.authorOrder.api.error[j] && (v = !0), _ && n.listings.communityOrder.api.error[j] && (v = !0), t(v ? u.m({
						title: Object(c.e)()
					}) : u.m({
						title: g(r.q)
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
				return j
			})), s.d(t, "d", (function() {
				return v
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
				j = Object(o.a)(i.u),
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
						u = Object(l.G)(i, m),
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
				j = () => o.a.createElement("div", {
					className: Object(m.a)(p.a.avatar, Object(d.a)({
						isLoading: !0
					}))
				}),
				v = e => o.a.createElement(O, e, e.isCommentBoxDesignEnabled ? o.a.createElement(j, null) : o.a.createElement(g, null), o.a.createElement(c.a, {
					className: p.a.editor,
					isCommentBoxDesignEnabled: e.isCommentBoxDesignEnabled,
					isLoading: !0,
					toolbarPosition: h
				})),
				C = f(v),
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
				SupporterRing: "_2I86011VPvZ-uDOUp1zvd-",
				supporterRing: "_2I86011VPvZ-uDOUp1zvd-",
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
				x = s("./src/reddit/icons/fonts/helpers.tsx");
			var f = e => o.a.createElement("i", {
					className: Object(d.a)(Object(x.b)("expand", e.isFilled), e.className)
				}),
				O = s("./src/reddit/components/Comments/Comment/ExpandButton/index.m.less"),
				g = s.n(O);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var v, C, y = s("./node_modules/lodash/defer.js"),
				E = s.n(y),
				_ = s("./src/lib/lessComponent.tsx"),
				k = s("./src/reddit/actions/tooltip.ts"),
				S = s("./src/reddit/selectors/tooltip.ts"),
				w = s("./src/reddit/actions/gold/modals.ts"),
				I = s("./src/reddit/actions/modal.ts"),
				N = s("./src/reddit/actions/reportFlow/index.ts"),
				T = s("./src/reddit/helpers/correlationIdTracker.ts"),
				R = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				P = s("./src/reddit/helpers/trackers/lightbox.ts"),
				M = s("./src/reddit/models/Comment/index.ts"),
				L = s("./src/reddit/selectors/activeModalId.ts"),
				F = s("./src/reddit/selectors/comments.ts"),
				B = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				D = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				A = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				U = s("./src/reddit/selectors/posts.ts"),
				V = s("./src/reddit/selectors/subreddit.ts"),
				H = s("./src/reddit/selectors/user.ts"),
				W = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				G = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				K = s.n(G);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(v || (v = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(C || (C = {}));
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
			var J = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				z = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				X = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				Q = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				Z = s("./src/reddit/components/ModActionsMenu/index.tsx"),
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
				de = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.tsx"),
				le = s("./src/reddit/icons/fonts/index.tsx"),
				me = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				ue = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				pe = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				be = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				he = s("./src/reddit/icons/fonts/Report/index.tsx"),
				xe = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				fe = s.n(xe);
			const Oe = _.a.wrapped(me.a, "CommentIcon", fe.a),
				ge = _.a.wrapped(he.a, "Report", fe.a),
				je = _.a.wrapped(pe.a, "IgnoreReport", fe.a),
				ve = _.a.wrapped(Z.a, "ModActionsMenu", fe.a),
				Ce = _.a.div("OverflowMenuSpacer", fe.a),
				ye = _.a.wrapped(ee.a, "DropdownRow", fe.a),
				Ee = _.a.wrapped(ce.a, "Flatlist", fe.a),
				_e = _.a.button("Button", fe.a),
				ke = _.a.wrapped(J.a, "ModToolsFlatlist", fe.a),
				Se = _.a.wrapped(oe.a, "ViewReportsDropdown", fe.a),
				we = e => `Comment-${e}--Modal--DeleteComment`,
				Ie = e => `Distinguish--Dropdown--${e}`,
				Ne = e => `${e}-overflow-menu`,
				Te = e => `View--Reports--${e}`,
				Re = Object(a.c)({
					claimedFreeAward: A.b,
					currentUser: H.k,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(L.a)(e) === we(s.id)
					},
					isDistinguishDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(S.b)(Ie(s.id))(e)
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
						return Object(F.D)(e, {
							commentId: s.id
						})
					},
					isReportsDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(S.b)(Te(s.id))(e)
					},
					isLoggedIn: H.Q,
					postIsArchived: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(U.A)(e, {
							postId: s.postId
						})
					},
					isBlockedUserBannerEnabled: (e, t) => {
						let {
							comment: s
						} = t;
						return !!Object(U.w)(e, {
							postId: s.postId
						}) && Object(B.a)(e)
					},
					postAuthorIsBlocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(U.w)(e, {
							postId: s.postId
						})
					},
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(U.B)(e, {
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
						return Object(F.J)(e, {
							commentId: s.id
						})
					},
					subredditAboutInfo: (e, t) => {
						let {
							subreddit: s
						} = t;
						return s ? Object(V.x)(e, {
							subredditName: s.name
						}) : void 0
					},
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(U.V)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: D.a,
					isPostUnrepliable: (e, t) => {
						let {
							comment: s
						} = t;
						var n;
						return null === (n = Object(U.G)(e, {
							postId: s.postId
						})) || void 0 === n ? void 0 : n.unrepliableReason
					},
					isTrueblockPCBlockeeEnabled: B.e,
					isParentCommentsAuthorBlocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(F.C)(e, {
							commentId: s.id
						})
					}
				});
			class Pe extends o.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(P.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(ae.b)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(ae.f)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						this.props.sendEvent(Object(ae.e)("edit", this.props.comment.id)), this.props.handleEdit()
					}, this.handleGild = async () => {
						var e;
						const t = Object(T.d)(T.a.GildingFlow, !0);
						this.props.onGildClick(t, null === (e = this.props.claimedFreeAward) || void 0 === e ? void 0 : e.id);
						const {
							clickGildEvent: n
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(n(this.props.comment.id))
					}, this.handleDelete = () => {
						this.props.sendEvent(Object(ae.e)("delete", this.props.comment.id)), this.props.toggleDeleteCommentModal()
					}, this.handleReportClick = () => {
						this.props.sendEvent(Object(ae.b)("report", this.props.comment.id)), this.props.onReportClick()
					}, this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(ae.b)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleFollow = () => {
						const {
							onCommentFollow: e,
							sendEvent: t,
							comment: s,
							isFollowed: n
						} = this.props;
						e(n ? M.a.UNFOLLOWED : M.a.FOLLOWED), t(n ? Object(ae.g)("follow", s.id) : Object(ae.b)("follow", s.id))
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(ae.c)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? o.a.createElement(se.a, {
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
						onDistinguishComment: h,
						onIgnoreReports: x,
						onToggleReportsDropdown: f,
						moderatorPermissions: O,
						modModeEnabled: g,
						postIsArchived: j,
						postAuthorIsBlocked: y,
						isBlockedUserBannerEnabled: _,
						postIsLocked: k,
						renderedInOverlay: S,
						sendEvent: w,
						subreddit: I,
						subredditAboutInfo: N,
						toggleDeleteCommentModal: T,
						toggleSendReplies: P,
						trackCommentClick: L,
						isPostUnrepliable: F,
						isTrueblockPCBlockeeEnabled: B,
						isParentCommentsAuthorBlocked: D
					} = this.props, A = Object(R.a)(O), U = !!s && s.displayText === e.author, V = !!s && s.isEmployee, H = B && e.unrepliableReason, G = B && F, K = !(D && B) && !(y && B) && !(Object(M.g)(e) && B) && !(F && B) && !H && !G && !(N && N.userIsBanned) && (k || j || y && _ || A && p || e.isLocked ? A && p : p || m), J = Object($.a)(e), Z = A && U && !e.bannedBy, te = U && V && !e.bannedBy, se = Z || te, re = !(Object(M.g)(e) && B) && s && e.isGildable && !G && !(H && "[deleted]" === e.author), oe = !j && !H, ce = [];
					K && ce.push(o.a.createElement(_e, {
						disabled: b,
						key: "reply",
						onClick: () => {
							l(), E()(() => L("reply", e.id)())
						}
					}, o.a.createElement(Oe, null), n.fbt._("Reply", null, {
						hk: "dq9W0"
					}))), re && ce.push({
						breakpointGroup: C.LoggedInUser,
						icon: o.a.createElement(de.a, null),
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
					}, o.a.createElement(_e, {
						onClick: () => this.sendCommentEventWithName("share")
					}, n.fbt._("Share", null, {
						hk: "3Ak3Tw"
					})))), U || ce.push({
						breakpointGroup: C.LoggedInUser,
						icon: o.a.createElement(he.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: () => n.fbt._("Report", null, {
							hk: "4oVcnd"
						})
					}), ce.push({
						breakpointGroup: C.LoggedInUser,
						icon: o.a.createElement(le.a, {
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
					}), U && ce.push({
						breakpointGroup: C.LoggedInUser,
						icon: o.a.createElement(le.a, {
							name: "edit"
						}),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: () => n.fbt._("Edit", null, {
							hk: "1nftDt"
						})
					}), oe && ce.push({
						breakpointGroup: C.LoggedInUser,
						icon: o.a.createElement(le.a, {
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
					const me = ce.map(e => o.a.isValidElement(e) ? e : o.a.createElement(_e, {
							className: q(e.breakpointGroup, v.HideIfVWSmaller),
							disabled: b,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text())),
						pe = ce.map(e => o.a.isValidElement(e) ? null : o.a.createElement(ye, {
							className: q(e.breakpointGroup, v.HideIfVWLarger),
							displayText: e.text(),
							key: e.key,
							onClick: e.onClick,
							textClassName: fe.a.dropdownRowText
						}, e.icon));
					return o.a.createElement(r.Fragment, null, o.a.createElement(Ee, {
						className: Object(d.a)(Y({
							depth: c,
							isInOverlay: S,
							isModModeEnabled: A && g,
							isFollowCommentEnabled: oe
						}), t)
					}, me, o.a.createElement(Ce, {
						className: U ? void 0 : q(C.LoggedInUser, v.HideIfVWLarger)
					}, o.a.createElement(ee.b, {
						className: fe.a.overflowMenu,
						disabled: b,
						dropdownId: Ne(e.id),
						onClick: () => w(Object(ae.b)("comment_overflow_menu", e.id))
					}, pe, U && o.a.createElement(o.a.Fragment, null, o.a.createElement(ye, {
						displayText: n.fbt._("Delete comment", null, {
							hk: "4lMUDO"
						}),
						onClick: this.handleDelete,
						textClassName: fe.a.dropdownRowText
					}, o.a.createElement(le.a, {
						name: "delete"
					})), o.a.createElement(ie.a, {
						text: n.fbt._("Send me reply notifications", null, {
							hk: "4ebRRu"
						}),
						onClick: P,
						isSelected: this.props.sendRepliesToggled
					})))), this.props.isConfirmModalOpen && o.a.createElement(X.a, {
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
						toggleModal: T,
						trackClick: () => {},
						withOverlay: !0
					}), A && o.a.createElement(o.a.Fragment, null, g && o.a.createElement(ke, {
						className: q(C.Moderator, v.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: U
					}), o.a.createElement(ve, {
						className: g ? q(C.Moderator, v.HideIfVWLarger) : void 0,
						dropdownId: `${e.id}-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: () => w(Object(ae.b)("comment_mod_action_menu", e.id))
					}, o.a.createElement(be.a, null), o.a.createElement(W.a, {
						comment: e,
						tooltipId: `${e.id}-mod-actions-menu`
					}))), Object($.c)(e) && !g && o.a.createElement(z.a, {
						text: `${J}`,
						onClick: () => {
							f(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: Te(e.id)
					}, o.a.createElement(Se, {
						model: e,
						onIgnoreReports: () => {
							x(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Te(e.id)
					}), e.ignoreReports ? o.a.createElement(je, null) : o.a.createElement(ge, null)), se && o.a.createElement(z.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, o.a.createElement(ue.a, null), o.a.createElement(Q.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: V,
						isUserMod: A,
						onDistinguishComment: h,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Ie(e.id)
					}))), (!this.props.renderedInOverlay || !this.props.isCommentFocused) && this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Me = Object(i.b)(Re, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n
					} = t;
					return {
						deleteComment: () => n && e(Object(p.i)(s.id, s.postId)),
						handleDelete: () => {
							e(Object(I.i)(we(s.id))), e(Object(k.h)({
								tooltipId: Ne(s.id)
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
						onFollowedCommentExpire: () => e(Object(u.o)({
							id: s.id,
							expiresAt: 0
						})),
						onGildClick: (t, n) => e(Object(w.d)({
							awardId: n,
							correlationId: t,
							thingId: s.id
						})),
						onIgnoreReports: () => e(Object(b.g)(s.id)),
						onReportClick: () => e(Object(N.c)(s.id)),
						onToggleSave: () => e(Object(u.n)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(k.h)({
							tooltipId: Ie(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(k.h)({
							tooltipId: Te(s.id)
						})),
						toggleDeleteCommentModal: () => e(Object(I.i)(we(s.id))),
						toggleSendReplies: () => e(Object(p.l)(s.id))
					}
				})(Object(re.c)(Pe)),
				Le = s("./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less"),
				Fe = s.n(Le);
			var Be = o.a.memo(e => {
					const {
						hexColor: t
					} = e;
					return o.a.createElement("div", {
						className: Fe.a.glowHighlightContainer,
						role: "presentation",
						style: {
							boxShadow: `#${t} 0px 0px 14px`
						}
					})
				}),
				De = s("./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less"),
				Ae = s.n(De);
			var Ue = o.a.memo(e => o.a.createElement("div", {
					className: Ae.a.gradientHighlightContainer,
					role: "presentation"
				})),
				Ve = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.tsx"),
				He = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				We = s("./src/reddit/components/Comments/PredictionComment/async.ts"),
				Ge = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				Ke = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				qe = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				Ye = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				Je = s("./src/reddit/components/ModModeReports/index.tsx"),
				ze = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Xe = s("./src/reddit/components/RichTextJson/index.tsx"),
				Qe = s("./src/reddit/components/UserIcon/index.tsx"),
				Ze = s("./src/reddit/components/UserIcon/constants.ts"),
				$e = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				et = s("./src/reddit/helpers/author.ts"),
				tt = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				st = s("./src/reddit/constants/componentTestIds.ts"),
				nt = s("./src/reddit/contexts/PageLayer/index.tsx"),
				rt = s("./src/reddit/contexts/Visibility.tsx"),
				ot = s("./src/reddit/controls/ErrorText/index.tsx"),
				it = s("./src/reddit/controls/InternalLink/index.tsx"),
				at = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				ct = s("./src/reddit/helpers/flair.ts"),
				dt = s("./src/reddit/models/Subreddit/index.ts"),
				lt = s("./src/reddit/models/User/index.ts"),
				mt = s("./src/reddit/models/Vote/index.ts"),
				ut = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				pt = s("./src/reddit/selectors/commentSelector.ts"),
				bt = s("./src/reddit/selectors/experiments/econ/marketplace.ts"),
				ht = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				xt = s("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				ft = s("./src/reddit/selectors/gold/powerups/flairs.ts"),
				Ot = s("./src/reddit/selectors/moderatorPermissions.ts"),
				gt = s("./src/reddit/selectors/poll/index.ts"),
				jt = s("./src/reddit/selectors/userPrefs.ts"),
				vt = s("./src/reddit/selectors/moderatingComments.ts"),
				Ct = s("./src/reddit/components/Comments/Comment/index.m.less"),
				yt = s.n(Ct),
				Et = s("./src/config.ts"),
				_t = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				kt = s("./src/reddit/components/SubredditIcon/index.tsx");

			function St() {
				return (St = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const wt = 300,
				It = _.a.wrapped((function(e) {
					const {
						className: t,
						...s
					} = e;
					return o.a.createElement("button", j({}, s, {
						className: Object(d.a)(t, g.a.expandButton)
					}), o.a.createElement(f, {
						className: g.a.expandIcon
					}))
				}), "ExpandButton", yt.a),
				Nt = _.a.wrapped(Me, "FlatList", yt.a),
				Tt = _.a.wrapped(ot.b, "ErrorText", yt.a),
				Rt = _.a.wrapped(Ge.a, "HorizontalVotes", yt.a),
				Pt = _.a.div("ActionBar", yt.a),
				Mt = _.a.wrapped(He.a, "TopMeta", yt.a),
				Lt = _.a.div("CommentContentWrapper", yt.a),
				Ft = _.a.wrapped(Ke.b, "AuthorHovercard", yt.a),
				Bt = Object(nt.u)(),
				Dt = Object(i.b)(() => Object(a.c)({
					comment: (e, t) => Object(pt.b)(e, t),
					currentProfileModPermissions: nt.h,
					depth: (e, t) => Object(F.j)(e, t),
					collapsed: vt.b,
					collapsedBecauseCrowdControl: vt.a,
					currentUser: H.k,
					flair: F.e,
					focused: (e, t) => !t.noFocus && Object(F.t)(e, t),
					highlightAnimationDisabled: jt.c,
					isAdmin: H.K,
					isEditing: F.z,
					isLoggedIn: H.Q,
					isPendingDeletion: F.D,
					isPresenceConsumptionExpEnabled: xt.c,
					moderatorPermissions: (e, t) => {
						const s = Object(pt.b)(e, t);
						return s ? Object(Ot.n)(e, {
							subredditId: s.subredditId
						}) : null
					},
					prediction: gt.f,
					modModeEnabled: nt.U,
					errorMsgs: F.H,
					replyFormOpen: F.K,
					subreddit: nt.r,
					subredditType: F.N,
					showNftSpecialtyTreatment: bt.b,
					hasSupporterRing: ft.a,
					isOnlineConsumptionLoadTest: xt.a,
					isOnlineUserPref: H.V,
					userIsBanned: (e, t) => {
						const s = Object(pt.b)(e, t);
						return !!s && Object(V.gb)(e, {
							subredditId: s.subredditId
						})
					},
					isBlockingInterstitialEnabled: ht.b,
					isBlockingInterstitialV2Enabled: ht.c
				}), (e, t) => {
					let {
						commentId: s,
						commentsPageKey: n,
						scrollToAndRemeasure: r,
						trackCommentClick: o
					} = t;
					return {
						onCollapseClick: () => e(Object(u.p)({
							commentId: s,
							commentsPageKey: n,
							scrollToAndRemeasure: r
						})),
						onIgnoreReports: () => e(Object(b.g)(s)),
						onVoteClick: t => {
							const [n, r] = t === mt.a.upvoted ? [Object(u.r)(s), "upvote_comment"] : [Object(u.k)(s), "downvote_comment"];
							o(r, s)(), e(n)
						}
					}
				}),
				At = Object(m.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				Ut = e => o.a.createElement("div", e, e.children),
				Vt = e => o.a.createElement(o.a.Fragment, null, e.children),
				Ht = Bt(Dt(e => {
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
						flatlist: j,
						focused: v,
						hasAwardGradient: C,
						hasSupporterRing: y,
						highlightAnimationDisabled: E,
						highlightTreatment: _,
						index: k,
						isActive: S,
						isAdmin: w,
						isAvatarsInCommentsEnabled: I,
						isBlockingInterstitialEnabled: N,
						isBlockingInterstitialV2Enabled: T,
						isEditing: P,
						isFirstInList: L,
						isHighlighted: F,
						isLoggedIn: B,
						isOnlineConsumptionLoadTest: D,
						isOnlineUserPref: A,
						isPendingDeletion: U,
						isPresenceConsumptionExpEnabled: V,
						moderatorPermissions: H,
						modModeEnabled: W,
						noSpacing: G = !1,
						onCommentAuthorClick: K,
						onCommentTimestampClick: q,
						onCollapseClick: Y,
						onIgnoreReports: J,
						onLineMouseOver: z,
						onPresenceIndicatorInViewport: X,
						onVoteClick: Q,
						postId: Z,
						prediction: ee,
						renderedInOverlay: te,
						replyFormOpen: se,
						restrictHeight: ne,
						rtJSONRedditStyle: re,
						showBlockingInterstitial: oe,
						showNftSpecialtyTreatment: ie,
						subreddit: ae,
						subredditType: ce,
						trackCommentClick: de,
						userIconSmall: le,
						userIsBanned: me,
						onClickRevealSpoilerText: ue
					} = e, pe = m.isDeleted, be = !P && !pe && !!O && O.length > 0, he = Object(l.a)(c.c.edit, m.id), xe = Object(l.a)(c.c.replyToComment, m.id), fe = Object(R.a)(H), Oe = Object(Ye.a)(m), ge = Object($.c)(m), je = m.authorIsContractor && ce === dt.f.EmployeesOnly, ve = m.isLocked, Ce = fe && W, ye = !P && !pe && (B || I), Ee = I && !m.unrepliableReason, _e = !!x && Object(lt.e)(x) === m.author, [ke, Se] = Object(r.useState)(null), [we, Ie] = Object(r.useState)(null), Ne = Object(r.useRef)(null), Te = Object(M.f)(m) || Object(M.g)(m), Re = Te ? Ut : it.default, Pe = Object(M.f)(m) ? Vt : Ft;
					Object(r.useEffect)(() => {
						if (!P && !pe && (C && Se(o.a.createElement(Ue, null)), null !== _)) {
							if (_.glowHexColor) {
								const e = _.glowHexColor;
								Se(o.a.createElement(Be, {
									hexColor: e
								}))
							}
							if (_.effectHighlight) {
								const {
									type: e,
									assetUrl: t
								} = _.effectHighlight;
								Ie(o.a.createElement(Ve.b, {
									prefersReducedAnimation: E,
									type: e,
									assetUrl: t
								}))
							}
						}
					}, [P, pe, C, E, _]);
					const Me = Object(rt.b)();
					(N || T) && Me && k >= ht.a - 1 && oe();
					const Le = !pe && !Object(M.f)(m) && (!me || me && _e) && !Object(M.g)(m) && B,
						Fe = Object(r.useCallback)(() => {
							Le && V && !_e && X && X(m.id)
						}, [m.id, X, Le, V, _e]),
						De = Object(tt.a)(m),
						Ae = !!x && Object(lt.e)(x) === m.author ? null == x ? void 0 : x.accountIcon : m.profileImage,
						He = Object(_t.c)(Ae),
						Ge = !(!He && !ie) && Object(_t.b)(Ae);
					return o.a.createElement("div", {
						key: `comment-${m.id}`,
						className: Object(d.a)(`Comment ${m.id}`, yt.a.CommentWrapper, {
							[yt.a.highlightComment]: F,
							[yt.a.deleted]: pe,
							[yt.a.focused]: v,
							[yt.a.redesign]: I,
							[yt.a.topLevel]: !f,
							[yt.a.noSpacing]: G
						})
					}, ke, we, !P && !pe && L && o.a.createElement("div", {
						className: yt.a.commentPerfMarkVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n                <img alt='' src='${Et.a.assetPath}/img/renderTimingPixel.png' style='width: 1px; height: 1px;' onLoad='(__markFirstCommentVisible || function(){})();' />\n              `
						}
					}), o.a.createElement(It, {
						className: Object(d.a)(m.id, {
							[yt.a.hidden]: !i,
							[yt.a.visible]: i
						}),
						onClick: () => {
							s(), Y(), de("collapse", m.id)()
						},
						onMouseOver: () => z(m.id),
						onMouseOut: s
					}), Object(et.a)(m.author) ? ae ? o.a.createElement(kt.b, {
						className: yt.a.UserIconContainer,
						subredditOrProfile: ae,
						linkTo: `/user/${m.author}/`
					}) : null : o.a.createElement(Pe, {
						alwaysShowChildren: !0,
						collapsed: i,
						hoverDivClassName: yt.a.AuthorHoverDiv,
						isCommentAuthorBlocked: Object(M.g)(m),
						postOrComment: m,
						tooltipIdPrefix: "AvatarUserInfoTooltip",
						tooltipType: te ? ze.c.Lightbox : void 0
					}, o.a.createElement(Re, {
						className: Object(d.a)(yt.a.UserIconContainer, le && yt.a.UserIconContainerSmall),
						"data-testid": Te ? void 0 : "comment_author_icon",
						onClick: Te ? void 0 : K,
						to: `/user/${m.author}/`
					}, Me ? o.a.createElement(o.a.Fragment, null, y && !Ge && o.a.createElement("div", {
						className: yt.a.supporterRing
					}), o.a.createElement(Qe.a, {
						isNft: Ge,
						className: Object(d.a)(yt.a.UserIcon, {
							[yt.a.v1NftTreatment]: He
						}),
						iconUrl: Ae,
						isNSFW: m.profileOver18 || !1,
						nsfwIconUrl: Ze.a,
						userName: m.author,
						isHighlighted: F,
						shouldShowPresenceIndicator: Le && V,
						onPresenceIndicatorInViewport: Fe,
						isCommentAuthorBlocked: Object(M.g)(m),
						collapsed: i,
						shouldUseOnlineOverride: _e,
						isOnlineOverrideValue: A,
						isOnlineStatusLoadTest: Le && D,
						authorId: m.authorId
					})) : o.a.createElement("div", {
						className: yt.a.UserIcon
					}))), o.a.createElement(Lt, {
						className: Object(d.a)({
							[yt.a.isActive]: S,
							[yt.a.isCollapsed]: i,
							[yt.a.isLocked]: ve && Ce,
							[yt.a.isPendingDeletion]: U,
							[yt.a.isRemoved]: !!m.bannedBy && Ce || m.isDeleted && w
						})
					}, o.a.createElement(at.a, null, n.fbt._("level {depth}", [n.fbt._param("depth", f + 1)], {
						hk: "2XnyAV"
					})), o.a.createElement(Mt, {
						userHasNft: Ge,
						childrenInfo: t,
						className: Object(d.a)({
							[yt.a.collapsed]: i,
							[yt.a.noFlair]: Object(ct.o)(g || null)
						}),
						collapsed: i,
						collapsedBecauseCrowdControl: a,
						comment: m,
						commentsPageKey: u,
						flair: g,
						isAdmin: w,
						isPostComment: !0,
						onCommentAuthorClick: K,
						onCommentTimestampClick: q,
						renderedInOverlay: te,
						renderContractorBadge: je
					}), !i && o.a.createElement(r.Fragment, null, P && o.a.createElement(h.a, {
						className: Object(d.a)(yt.a.EditCommentForm, yt.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: u,
						depth: f,
						draftType: c.c.edit,
						draftKey: he,
						postId: Z,
						rtJson: Object(tt.a)(m),
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
					}), !P && (!pe || w) && o.a.createElement("div", {
						"data-testid": st.d,
						ref: Ne,
						className: Object(d.a)(yt.a.CommentBody, {
							[yt.a.restrictHeight]: !(!ne || !Ne.current) && Ne.current.clientHeight > wt
						})
					}, ee ? o.a.createElement(We.a, {
						comment: m,
						prediction: ee
					}) : o.a.createElement(Xe.b, {
						content: De,
						mediaMetadata: m.media && m.media.mediaMetadata,
						redditStyle: re,
						rtJsonElementProps: At(e),
						onClickRevealSpoilerText: ue
					}), o.a.createElement(ut.b, {
						content: De
					})), W && fe && Oe && o.a.createElement(qe.a, {
						thing: m
					}), W && fe && ge && o.a.createElement(Je.a, {
						onIgnoreReports: J,
						reportable: m
					}), null != j ? j : ye && o.a.createElement(Pt, null, Ee && o.a.createElement(Rt, {
						downvoteButtonClassName: yt.a.voteButton,
						downvoteClassName: yt.a.upDownVote,
						model: m,
						onVoteClick: Q,
						scoreClassName: yt.a.score,
						upvoteButtonClassName: yt.a.voteButton,
						upvoteClassName: yt.a.upDownVote
					}), o.a.createElement(Nt, {
						comment: m,
						commentsPageKey: u,
						depth: f,
						isAvatarsInCommentsEnabled: I,
						collapsedBecauseCrowdControl: a,
						modModeEnabled: W,
						moderatorPermissions: b || H,
						renderedInOverlay: te,
						isCommentFocused: v,
						subreddit: ae,
						trackCommentClick: de
					})), be && O.map(e => o.a.createElement(Tt, {
						key: e
					}, e)), se && o.a.createElement(h.a, {
						className: Object(d.a)(yt.a.EditCommentForm, yt.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: u,
						depth: f,
						draftType: c.c.replyToComment,
						draftKey: xe,
						isTopLevelComment: !1,
						parentCommentId: m.id,
						postId: Z,
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
			t.a = e => o.a.createElement($e.a.Consumer, null, t => o.a.createElement(Ht, St({}, e, {
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
				j = O.a.wrapped(l.c, "StyledTooltip", f.a),
				v = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.pb)(e),
					userIsSuspended: h.X
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
				}), d ? o.a.createElement(j, {
					caretOnTop: !0,
					tooltipId: g,
					text: n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? o.a.createElement(j, {
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
					isNightmodeOn: u.db
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
				h = s("./src/reddit/constants/elementClassNames.ts"),
				x = s("./src/reddit/controls/OutboundLink/index.tsx"),
				f = s("./src/reddit/helpers/trackers/ads.ts"),
				O = s("./src/reddit/hooks/useClickSourceData.ts"),
				g = s("./src/reddit/models/Media/index.ts"),
				j = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/telemetry.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/constants/tracking.ts"),
				E = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				_ = s("./src/reddit/components/Media/ImageBox/index.m.less"),
				k = s.n(_);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const w = e => e > 2 * g.e,
				I = e => {
					const t = Object(d.a)(k.a.image, h.g, e.className, {
							[k.a.mShowCentered]: e.showCentered,
							[k.a.mShowBlurred]: e.shouldBlur
						}),
						s = {};
					return e.showFull || e.isTall || (s.maxHeight = `${g.j}px`), e.isListing || e.isTall && w(e.height) || (s.maxHeight = `${g.e}px`), e.isExpando && e.maxHeight && (s.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (s.maxWidth = `${e.maxWidth}px`), o.a.createElement("img", {
						alt: e.altText || n.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: s
					})
				},
				N = e => {
					const t = {};
					return (!e.showFull && Object(g.L)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${g.j}px`, e.shouldBlur && (t.maxWidth = Object(g.L)(e.height, e.width) ? `${g.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), o.a.createElement("div", {
						className: Object(d.a)(k.a.container, e.className),
						style: t
					}, e.children)
				},
				T = Object(i.b)(() => Object(c.a)(j.F, C.jb, (e, t) => {
					let {
						isSponsored: s,
						postId: n
					} = t;
					return s && n ? Object(j.b)(e, n) : null
				}, v.d, j.G, (e, t, s, n, r) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: s,
					pageType: n.pageType,
					post: r
				})));
			t.a = T(e => {
				const t = Object(O.a)();
				return e.outboundUrl && !e.shouldBlur ? o.a.createElement("a", {
					"data-adclicklocation": E.a.MEDIA,
					href: e.outboundUrl,
					target: "_blank",
					rel: m.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(x.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && Object(f.a)(e.post, e.pageType)
					}
				}, P(e)) : e.isListing && e.postPermalink ? o.a.createElement(a.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: Object(u.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, P(e)) : P(e)
			});
			const R = (e, t) => o.a.createElement(I, {
					altText: t.altText,
					className: Object(d.a)(t.imageClassName, {
						[y.a]: !e
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
				P = e => {
					let {
						onClick: t,
						...s
					} = e;
					const r = Object(g.L)(s.height, s.width),
						i = w(s.height) && r;
					return o.a.createElement(N, S({}, s, {
						className: `${r?`${y.a} `:""}${s.className||""}`
					}), s.isListing ? o.a.createElement("div", {
						className: s.contentImageClassName
					}, R(r, s)) : o.a.createElement("a", {
						href: s.originalSource,
						onClick: t,
						style: i ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: m.c,
						className: k.a.imageLink
					}, R(r, s), s.shouldBlur && !s.isVideoThumbnail && !s.isNsfwBlockingModalEligible && o.a.createElement(p.a, {
						isNSFW: !!s.isNSFW,
						isSpoiler: !!s.isSpoiler
					})), s.isListing && !s.showFull && s.height > g.j && Object(g.L)(s.height, s.width) && o.a.createElement("div", {
						className: k.a.seeMore
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
				h = s("./src/reddit/selectors/video.ts");
			const x = 100,
				f = x / 2 / 1e3;
			var O = s("./src/lib/forceHttps/index.ts"),
				g = s("./src/lib/hooks/usePrevious.ts");

			function j() {
				return (j = Object.assign || function(e) {
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
					h = Object(g.a)(c);

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
							4 === e.readyState ? i = !1 : !i && c >= a && c < a + f ? i = !0 : i && c >= a && c > a + f && (i = !1), a = c, r !== i && t(i)
						}, x);
						return () => {
							clearInterval(d), e.removeEventListener("playing", o), e.removeEventListener("play", o), e.removeEventListener("loadeddata", r)
						}
					}(b.current, r), () => {
						p.current && p.current()
					}
				}, []), Object(o.useEffect)(() => {
					h !== c && v(!c && (t || n))
				}, [h, c, t, n]), i.a.createElement("video", j({}, u, {
					ref: e => b.current = e,
					muted: !0
				}), i.a.createElement("source", {
					src: Object(O.a)(m || "")
				}))
			}
			var C = s("./src/reddit/components/Media/VideoBox/index.m.less"),
				y = s.n(C);
			const E = Object(c.c)({
				autoplayPref: b.b,
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
					shouldPause: j,
					width: C,
					isListing: _,
					className: k,
					showCentered: S,
					originalSource: w,
					isPromoted: I
				} = e, N = t && !(I && Object(d.hasAcceptableAds)()), T = Object(a.d)();

				function R(e) {
					T(e ? Object(m.r)(b) : Object(m.E)(b))
				}

				function P() {
					return T(Object(m.z)({
						postId: b
					}))
				}
				const M = r()(e => {
					if (s) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && T(Object(m.s)(b))
				}, 200);

				function L(e) {
					e.persist(), M(e)
				}

				function F(e) {
					var t;
					(o || D(e), c) || (t = e.timeStamp, T(Object(m.A)(b, t)))
				}

				function B(e) {
					T(Object(m.q)(b, e.timeStamp))
				}

				function D(e) {
					! function(e) {
						T(Object(m.D)({
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
					n || F(e), o || D(e), T(Object(m.C)(b))
				}

				function U() {
					const e = {};
					return S && (e.margin = "0 auto"), _ || (e.maxHeight = `${p.e}px`), i.a.createElement(v, {
						autoplay: N,
						className: Object(l.a)(u.a, y.a.styledVideo),
						height: f,
						isListing: _,
						isNotCardView: O,
						key: b,
						loop: !0,
						onBufferingChange: R,
						onLoadStart: B,
						onLoadedData: F,
						onLoadedMetadata: D,
						onPause: P,
						onPlaying: A,
						onTimeUpdate: L,
						shouldLoad: h,
						shouldPause: j,
						showCentered: S,
						showFull: g,
						source: x,
						style: e,
						width: C
					})
				}
				return _ ? U() : i.a.createElement("div", {
					className: Object(l.a)(y.a.container, k, {
						[y.a.centered]: S
					})
				}, i.a.createElement("a", {
					href: w,
					target: "_blank",
					rel: "noopener noreferrer"
				}, U()))
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
				h = s("./src/reddit/selectors/tooltip.ts"),
				x = s("./src/reddit/components/OverflowMenu/index.m.less"),
				f = s.n(x);
			const O = d.a.wrapped(u.a, "_Dropdown", f.a),
				g = Object(m.a)(O),
				j = d.a.button("MenuButton", f.a),
				v = d.a.wrapped(p.b, "DropdownRow", f.a),
				C = Object(a.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(h.b)(s)(e)
					}
				}),
				y = Object(i.b)(C, (e, t) => {
					let {
						dropdownId: s
					} = t;
					return {
						toggleDropdown: () => e(Object(l.h)({
							tooltipId: s
						}))
					}
				}),
				E = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = y(e => o.a.createElement(j, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": n.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(c.a)(e.className, {
					[f.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: E(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : o.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: f.a.MenuIcon
			}), o.a.createElement(g, {
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
				j = Object(d.a)(u.a.wrapped(c.b, "Component", m.a), [a.a.Click, a.a.Keydown]);
			class v extends o.a.Component {
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
					}), o.a.createElement(j, {
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
				return j
			})), s.d(t, "u", (function() {
				return v
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
				return I
			})), s.d(t, "s", (function() {
				return N
			})), s.d(t, "r", (function() {
				return T
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
				h = c.a.p("P", a.a),
				x = c.a.li("Li", a.a),
				f = c.a.ul("Ul", a.a),
				O = c.a.ol("Ol", a.a),
				g = c.a.strong("B", a.a),
				j = c.a.em("I", a.a),
				v = c.a.span("U", a.a),
				C = e => r.a.createElement("del", e),
				y = c.a.sub("Sub", a.a),
				E = c.a.sup("Sup", a.a),
				_ = c.a.table("Table", a.a),
				k = c.a.tr("Tr", a.a),
				S = c.a.td("Tdl", a.a),
				w = c.a.td("Tdc", a.a),
				I = c.a.td("Tdr", a.a),
				N = c.a.th("Thl", a.a),
				T = c.a.th("Thc", a.a),
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
			s.d(t, "d", (function() {
				return E
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "a", (function() {
				return k
			})), s.d(t, "b", (function() {
				return S
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
				h = s("./src/reddit/models/RichTextJson/index.ts"),
				x = s("./src/reddit/components/RichTextJson/media.tsx"),
				f = s("./src/reddit/components/RichTextJson/renderers.tsx"),
				O = s("./src/reddit/components/RichTextJson/index.m.less"),
				g = s.n(O);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const v = s("./src/lib/lessComponent.tsx").a.div("Container", g.a),
				C = Object(d.a)(e => {
					let {
						flairStyleTemplate: t,
						theme: s,
						...n
					} = e;
					return a.a.createElement(v, j({}, n, {
						style: {
							color: Object(b.a)(Object(p.a)({
								flairStyleTemplate: t,
								theme: s,
								...n
							}))
						}
					}))
				}),
				y = e => e.e === h.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== h.u || !!e.c && !e.c.every(e => e.e === h.A && !e.t),
				E = e => o()(e, y),
				_ = e => e.findIndex(y),
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
						rtJsonElementProps: O,
						useExplicitTextColor: j,
						shouldBlur: y,
						onClickRevealSpoilerText: k
					} = e, S = n.document, w = [], I = e.mediaMetadata || null, N = _(S), T = E(S);
					if (y && !r && !i) return a.a.createElement(v, {
						className: Object(c.a)(u.j, s)
					}, a.a.createElement("div", {
						className: g.a.unblurButtonContainer
					}, a.a.createElement("button", {
						className: g.a.unblurButton,
						onClick: l
					}, Object(m.b)(!!o, !!d))));
					if (-1 !== N)
						for (let a = N; a <= T; a++) {
							const e = S[a];
							switch (e.e) {
								case h.k:
									w.push(f.c(e, O, a));
									break;
								case h.l:
									w.push(f.d(a));
									break;
								case h.b:
									w.push(f.a(e, I, O, a));
									break;
								case h.c:
									w.push(f.b(e, a));
									break;
								case h.p:
									w.push(f.f(e, I, O, a, k));
									break;
								case h.z:
									w.push(f.h(e, I, O, a, k));
									break;
								case h.u:
									w.push(f.g(e, I, O, a, k));
									break;
								case h.h:
									w.push(Object(x.a)(e, a));
									break;
								case h.m:
								case h.a:
								case h.D:
									w.push(...Object(x.b)(e, a, O, I, b, p, t))
							}
						}
					return j ? a.a.createElement(v, {
						className: Object(c.a)(u.j, s)
					}, w) : a.a.createElement(C, {
						className: Object(c.a)(u.j, s),
						flairStyleTemplate: e.flairStyleTemplate,
						redditStyle: e.redditStyle
					}, w)
				};
			class S extends a.a.Component {
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
				CommentGifWrapper: "FyBv9YqsilS7j6RNlD9id",
				commentGifWrapper: "FyBv9YqsilS7j6RNlD9id",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				Giphy: "_3YoP8vEuPSoGYyKJc1eUli",
				giphy: "_3YoP8vEuPSoGYyKJc1eUli",
				GiphyLogo: "_3R8qf79yqt1VjL8vHhrdMt",
				giphyLogo: "_3R8qf79yqt1VjL8vHhrdMt"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return w
			})), s.d(t, "b", (function() {
				return N
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
				p = s("./src/reddit/helpers/isComment.ts"),
				b = s("./src/reddit/helpers/richTextJson/index.ts"),
				h = s("./src/reddit/models/RichTextJson/index.ts");
			var x = e => o.a.createElement("svg", {
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
				f = s("./src/reddit/components/RichTextJson/elements.tsx"),
				O = s("./src/reddit/components/RichTextJson/media.m.less"),
				g = s.n(O),
				j = s("./src/lib/lessComponent.tsx");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const C = /\/(\w+)\/asset\/(\w+)\//,
				y = j.a.wrapped(f.a, "A", g.a),
				E = j.a.wrapped(l.a, "ImageBox", g.a),
				_ = j.a.wrapped(e => o.a.createElement("p", e), "Caption", g.a),
				k = j.a.div("Placeholder", g.a),
				S = j.a.wrapped(e => {
					let {
						className: t,
						e: s,
						...r
					} = e;
					const i = s === h.D ? n.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : n.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return o.a.createElement(k, v({
						className: t,
						style: {
							"--placeholder-content-text": `'${i}'`
						}
					}, r))
				}, "Placeholder", g.a),
				w = (e, t) => {
					let {
						c: s,
						x: n,
						y: r
					} = e;
					return o.a.createElement("div", {
						className: g.a.MediaWrapper
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
				I = (e, t, s) => {
					const n = e.c;
					let r = "";
					return s && (s.e === h.s ? r = s.s.u : s.e === h.r ? r = s.s.gif : s.e === h.t && (r = (e => {
						const t = C.exec(e);
						return t ? `${a.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(s.dashUrl))), r ? o.a.createElement(y, {
						href: r,
						key: t,
						title: n
					}, n || r) : null
				},
				N = (e, t, s, n, r, a, d) => {
					const l = h.E(n, e.id);
					if (r) return [I(e, t, l)];
					const f = [];
					return l ? l.e === h.s ? f.push(((e, t, s, n) => {
						let {
							id: r,
							s: a
						} = e;
						return o.a.createElement("div", {
							className: Object(i.a)(g.a.MediaWrapper, {
								[g.a.mHasCaption]: s
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
					})(l, t, !!e.c, d)) : l.e === h.r ? f.push(((e, t, s, n) => {
						let {
							id: r,
							ext: a,
							s: c
						} = e;
						if (Object(b.g)(r)) {
							const e = n.renderingObjectInfo,
								d = !!e && Object(p.b)(e),
								l = a || Object(b.f)(r);
							return o.a.createElement("div", {
								className: Object(i.a)({
									[g.a.MediaWrapper]: !d,
									[g.a.CommentGifWrapper]: d,
									[g.a.mHasCaption]: s
								})
							}, o.a.createElement(y, {
								href: l,
								key: t,
								target: "_blank"
							}, c.mp4 ? o.a.createElement("video", {
								className: g.a.Giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, o.a.createElement("source", {
								src: c.mp4
							})) : {
								originalSource: l
							}), o.a.createElement(x, {
								className: g.a.GiphyLogo
							}))
						}
						return o.a.createElement("div", {
							className: Object(i.a)(g.a.MediaWrapper, {
								[g.a.mHasCaption]: s
							})
						}, o.a.createElement(m.a, {
							height: c.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: c.x
						}, o.a.createElement(u.a, {
							height: c.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: c.mp4,
							width: c.x,
							postId: r,
							source: c.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(l, t, !!e.c, s)) : l.e === h.t && f.push(((e, t, s, n) => {
						let {
							hlsUrl: r,
							dashUrl: a,
							x: d,
							y: l,
							isGif: u
						} = e;
						return o.a.createElement("div", {
							className: Object(i.a)(g.a.MediaWrapper, {
								[g.a.mHasCaption]: s
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
					})(l, t, !!e.c, a)) : f.push(((e, t) => o.a.createElement(S, {
						e,
						key: t
					}))(e.e, t)), e.c && f.push(((e, t) => o.a.createElement(_, {
						key: t
					}, e))(e.c, `caption${t}`)), f
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return R
			})), s.d(t, "d", (function() {
				return P
			})), s.d(t, "a", (function() {
				return M
			})), s.d(t, "b", (function() {
				return L
			})), s.d(t, "f", (function() {
				return F
			})), s.d(t, "h", (function() {
				return D
			})), s.d(t, "g", (function() {
				return A
			})), s.d(t, "i", (function() {
				return U
			})), s.d(t, "e", (function() {
				return V
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
				h = s("./src/higherOrderComponents/makeAsync.tsx");
			var x = Object(h.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("RichTextJsonEmoteTooltip").then(s.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				f = s("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				O = s.n(f);
			const g = 1e3,
				j = 1e3;
			var v;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(v || (v = {}));
			class C extends a.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = v.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = v.Inside, setTimeout(() => {
							this.mouseLocation === v.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, g)
					}, this.onMouseOut = () => {
						this.mouseLocation = v.Outside, setTimeout(() => {
							this.mouseLocation !== v.Inside && this.setState({
								tooltipOpen: !1
							})
						}, j)
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
								subreddit: b.ib(t)
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
						className: O.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, a.a.createElement("img", {
						id: o,
						src: r,
						width: s,
						height: n,
						title: `:${Object(u.b)(e.id)}:`
					}), this.state.tooltipOpen && a.a.createElement(x, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: o,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var y = Object(m.c)(C),
				E = s("./src/reddit/components/RichTextJson/media.tsx"),
				_ = s("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				k = s("./src/reddit/components/SubredditMention/index.tsx"),
				S = s("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				w = s("./src/reddit/helpers/isComment.ts"),
				I = s("./src/reddit/helpers/isPost.ts"),
				N = s("./src/reddit/helpers/richTextJson/index.ts"),
				T = s("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const R = (e, t, s) => {
					const n = e.c || [],
						r = e.l,
						o = [],
						i = n.length;
					for (let a = 0; a < i; a++) {
						const e = n[a];
						o.push(e.e === p.w ? e.t : V(e, t, a))
					}
					const d = c.x[r - 1];
					return a.a.createElement(d, {
						key: s
					}, o)
				},
				P = e => a.a.createElement(c.e, {
					key: e
				}),
				M = (e, t, s, n, r) => {
					const o = e.c;
					if (!o) return;
					const i = o.length,
						d = [];
					for (let a = 0; a < i; a++) d.push(B(o[a], t, s, a, r));
					return a.a.createElement(c.c, {
						key: n
					}, d)
				},
				L = (e, t) => {
					const s = e.c;
					return a.a.createElement(c.k, {
						key: t
					}, a.a.createElement(c.h, null, s.reduce((e, t, s, n) => e += t.t + (s < n.length ? "\n" : ""), "")))
				},
				F = (e, t, s, n, r) => {
					const o = e.c,
						i = [],
						d = o.length;
					for (let m = 0; m < d; m++) {
						const e = o[m].c;
						e && e.length && i.push(a.a.createElement(c.g, {
							key: m
						}, e.map((e, n) => B(e, t, s, n, r))))
					}
					const l = e.o ? c.i : c.v;
					return a.a.createElement(l, {
						key: n
					}, i)
				},
				B = (e, t, s, n, r) => {
					switch (e.e) {
						case p.b:
							return M(e, t, s, n, r);
						case p.c:
							return L(e, n);
						case p.k:
							return R(e, s, n);
						case p.l:
							return P(n);
						case p.p:
							return F(e, t, s, n, r);
						case p.u:
							return A(e, t, s, n, r);
						case p.z:
							return D(e, t, s, n, r)
					}
				},
				D = (e, t, s, n, r) => {
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
							} = K(e.a),
							{
								c: d = []
							} = e;
						m.push(a.a.createElement(n, {
							key: c
						}, U(d, t, s, r))), p[c] = o
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
							}, U(c, t, s, r)))
						}
						u.push(a.a.createElement(c.t, {
							key: b
						}, i))
					}
					return a.a.createElement(c.n, {
						key: n
					}, a.a.createElement("thead", null, a.a.createElement(c.t, null, m)), a.a.createElement("tbody", null, u))
				},
				A = (e, t, s, n, r) => {
					if (!e.c || !e.c.length) return (e => a.a.createElement(c.j, {
						key: e
					}, a.a.createElement("br", null)))(n);
					const o = e.c[0];
					return o.e !== p.m && o.e !== p.a || !Object(N.g)(o.id) ? a.a.createElement(c.j, {
						key: n
					}, U(e.c, t, s, r)) : Object(E.b)(o, n, s, t)
				},
				U = (e, t, s, n) => {
					const r = [],
						o = e.length;
					for (let i = 0; i < o; i++) {
						const o = e[i];
						if (o.e === p.A) r.push(H(o, i));
						else if (o.e === p.x) r.push(a.a.createElement(_.a, {
							key: i,
							onClickReveal: n
						}, U(o.c, t, s, n)));
						else if (o.e === p.n) r.push(a.a.createElement("br", {
							key: i
						}));
						else if (o.e === p.m || o.e === p.a) {
							if (o.id.startsWith("emote|")) {
								const e = p.E(t, o.id);
								e && r.push(a.a.createElement(y, {
									key: i,
									node: o,
									media: e
								}))
							}
						} else r.push(V(o, s, i))
					}
					return r
				},
				V = (e, t, s) => {
					switch (e.e) {
						case p.o:
							const n = H({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(S.b)(e.u)) return a.a.createElement(c.w, {
								to: e.u,
								key: s,
								title: e.a
							}, n);
							let r, o;
							const i = Object(T.a)(t),
								d = t.renderingObjectInfo;
							return d && Object(I.b)(d) && (r = d.postId), d && Object(w.b)(d) && (o = d.id, r = d.postId), a.a.createElement(c.a, {
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
				H = (e, t) => {
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
				thumbnail: "_2r9BZFotuBbLYnijAaskeZ",
				thumbnailContainer: "Gk-MlLujgqsaX1n-sGa_O",
				syntaxHighlight: "_1Nh8xLEUG3orjY1k1aijj",
				paddingSide: "_2n04GrCyhhQf-Kshn7akmH"
			}
		},
		"./src/reddit/components/SearchPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return J
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
				j = s("./src/reddit/icons/fonts/index.tsx"),
				v = s("./src/reddit/components/SearchPostWarnings/index.m.less"),
				C = s.n(v);
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function E(e) {
				let {
					className: t,
					post: s,
					subredditOrProfile: n
				} = e;
				return r.a.createElement("div", {
					className: t
				}, (null == n ? void 0 : n.isQuarantined) ? r.a.createElement("span", {
					className: Object(o.a)(C.a.warningText, C.a.quarantineWarning)
				}, r.a.createElement(j.a, {
					name: "quarantined_fill",
					className: Object(o.a)(C.a.warningIcon)
				}), y._("quarantined", null, {
					hk: "1j7soK"
				})) : null, s.isNSFW ? r.a.createElement("span", {
					className: Object(o.a)(C.a.warningText, C.a.nsfwWarning)
				}, r.a.createElement(j.a, {
					name: "nsfw_fill",
					className: Object(o.a)(C.a.warningIcon)
				}), y._("nsfw", null, {
					hk: "2IetSA"
				})) : null, s.isSpoiler ? r.a.createElement("span", {
					className: Object(o.a)(C.a.warningText, C.a.spoilerWarning)
				}, r.a.createElement(j.a, {
					name: "spoiler_fill",
					className: Object(o.a)(C.a.warningIcon)
				}), y._("spoiler", null, {
					hk: "3SHbs3"
				})) : null)
			}
			var _ = s("./src/reddit/components/Thumbnail/index.tsx"),
				k = s("./node_modules/react-redux/es/index.js"),
				S = s("./node_modules/reselect/es/index.js"),
				w = s("./src/reddit/actions/post.ts"),
				I = s("./src/reddit/contexts/PageLayer/index.tsx"),
				N = s("./src/reddit/selectors/moderatorPermissions.ts"),
				T = s("./src/reddit/selectors/poll/index.ts"),
				R = s("./src/reddit/selectors/postFlair.ts"),
				P = s("./src/reddit/selectors/posts.ts"),
				M = s("./src/reddit/selectors/user.ts");
			const L = {
					crosspost: P.d,
					isActive: P.j,
					isLoggedIn: M.Q,
					moderatorPermissions: N.m,
					modModeEnabled: I.U,
					poll: T.e,
					showEditFlair: R.a,
					flairStyleTemplate: I.W
				},
				F = () => Object(S.c)(L);
			var B = s("./src/reddit/contexts/Post/index.tsx"),
				D = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				A = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				U = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				V = s("./src/reddit/models/Media/index.ts"),
				H = s("./src/lib/isUrl/index.ts");
			const W = new(s("./src/lib/LRUCache/index.ts").a)(250);
			var G = s("./src/reddit/components/SearchPost/index.m.less"),
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
			const Y = Object(i.a)(e => {
					const {
						className: t,
						crosspost: s,
						eventFactory: i,
						first: j,
						flairStyleTemplate: v,
						isLoggedIn: C,
						isOverlay: y,
						moderatorPermissions: k,
						modModeEnabled: S,
						onClickPost: w,
						onClickPostAuthor: I,
						onClickPostCommunity: N,
						onIgnoreReports: T,
						poll: R,
						post: P,
						redditStyle: M,
						searchQuery: L,
						showBulkActionCheckbox: F,
						subredditOrProfile: B,
						title: G
					} = e, Y = M ? void 0 : v, J = s || void 0, z = Object(A.a)(k), X = Object(m.a)(P), Q = Object(p.c)(P), Z = Object(_.b)({
						crosspost: s,
						post: P,
						url: void 0,
						usePreview: !1
					}), $ = Z && Object(H.a)(Z), ee = !!P.media && Object(V.H)(P.media), te = !C, se = Object(n.useMemo)(() => G ? void 0 : ((e, t, s) => {
						const n = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
						return e => {
							const o = `${e.id}-${n}`;
							let i = W.get(o);
							if (void 0 === i) {
								const a = new RegExp(`(\\b${n}\\b)`, "gi"),
									c = e.title.split(a);
								i = s(r.a.createElement(r.a.Fragment, null, r.a.Children.toArray(c.map((e, s) => s % 2 != 0 ? t(e) : e)))), W.set(o, i)
							}
							return i
						}
					})(L, e => r.a.createElement("span", {
						className: Object(o.a)(K.a.syntaxHighlight)
					}, e), e => e), [G, L]), ne = {
						flairStyleTemplate: Y,
						isOverlay: y,
						onClickPostAuthor: I,
						onClickPostCommunity: N,
						post: P,
						shouldShowSubscribeButton: te,
						subredditOrProfile: B
					}, re = null != G ? G : r.a.createElement("div", {
						className: Object(o.a)(K.a.paddingSide, K.a.postItemTitleContainer)
					}, r.a.createElement("div", null, r.a.createElement(x.c, {
						format: se,
						hideSourceLink: !0,
						poll: R,
						post: P,
						redditStyle: !0,
						size: x.b.Medium,
						isOverlay: y,
						hideNSFWSpoilerFlair: !0
					}), P.source && !J && r.a.createElement(D.a, {
						className: K.a.outboundLink,
						href: P.source.url,
						isSponsored: P.isSponsored,
						postId: P.id,
						source: P.source
					}, Object(a.a)(P))), $ && r.a.createElement("div", {
						className: K.a.thumbnailContainer
					}, r.a.createElement(_.a, {
						className: K.a.thumbnail,
						crosspost: J && P,
						isMeta: P.isMeta,
						post: J || P,
						redditStyle: M,
						templatePlaceholderImage: Y && Y.postPlaceholderImage,
						removeLink: ee
					}))), oe = r.a.createElement(h.a, {
						className: Object(o.a)(K.a.postContainer, Object(U.a)(e), j ? K.a.mFirst : void 0, t),
						eventFactory: i,
						isOverlay: y,
						onClick: w,
						post: P,
						style: {
							...Object(U.d)(e),
							...Object(U.b)(Y)
						}
					}, r.a.createElement(b.a, {
						"data-click-id": "background",
						flairStyleTemplate: Y,
						redditStyle: !0
					}, r.a.createElement(c.a, {
						className: K.a.eventMeta,
						post: P
					}), r.a.createElement("div", {
						className: Object(o.a)(K.a.postContent, {
							[K.a.showBulkActionCheckbox]: F
						}),
						"data-click-id": "body"
					}, r.a.createElement(g.a, q({
						className: Object(o.a)(K.a.paddingSide, K.a.postItemMetaContainer),
						key: "PostMeta"
					}, ne)), r.a.createElement(E, {
						className: Object(o.a)(K.a.paddingSide, K.a.postItemWarningContainer),
						post: P,
						subredditOrProfile: B
					}), re, S && z && X && r.a.createElement(l.a, {
						thing: P
					}), S && z && Q && r.a.createElement(u.a, {
						onIgnoreReports: T,
						reportable: P
					}), r.a.createElement(O.c, {
						className: Object(o.a)(K.a.paddingSide, K.a.postItemFlatlistContainer),
						post: P
					}), r.a.createElement(d.d, null))));
					return r.a.createElement(f.b, null, oe)
				}),
				J = Object(B.b)((e => t => {
					const s = Object(I.gb)(),
						n = ((e, t) => {
							let {
								postId: s
							} = t;
							return {
								onIgnoreReports: () => e(Object(w.gb)(s))
							}
						})(Object(k.d)(), {
							...t
						}),
						o = Object(I.ab)(s),
						i = Object(k.e)(F),
						a = {
							...t,
							...i,
							...n,
							searchQuery: o
						};
					return r.a.createElement(e, a)
				})(Y))
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
				d = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				l = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				m = s("./src/reddit/hooks/useClickSourceData.ts"),
				u = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				p = s("./src/reddit/components/SearchPostMeta/index.m.less"),
				b = s.n(p);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					onClickPostAuthor: r,
					onClickPostCommunity: p,
					post: h,
					subredditOrProfile: x,
					tooltipType: f
				} = e, O = Object(m.a)();
				return o.a.createElement("div", {
					className: Object(n.a)(t, b.a.metaContainer)
				}, !h.isSponsored && x && o.a.createElement(i.a, {
					className: Object(n.a)(b.a.hovercardContainer, b.a.hovercardContainer),
					postId: h.id,
					subredditName: x.name
				}, o.a.createElement(u.b, {
					className: b.a.subredditIcon,
					linkTo: x.url,
					linkProps: p ? {
						"data-testid": "subreddit_icon_link",
						onClick: p
					} : void 0,
					subredditOrProfile: x
				}), o.a.createElement(d.a, {
					className: b.a.subredditName,
					"data-testid": "subreddit-name",
					"data-click-id": "subreddit",
					onClick: p,
					to: {
						pathname: x.url,
						state: O
					}
				}, x.displayText)), !h.isSponsored && o.a.createElement(o.a.Fragment, null, o.a.createElement(l.b, null), o.a.createElement(a.h, {
					type: h.belongsTo.type,
					id: h.belongsTo.id
				})), o.a.createElement(c.d, {
					className: b.a.postTopMeta,
					flairStyleTemplate: s,
					onClickPostAuthor: r,
					post: h,
					tooltipType: f
				}))
			}
		},
		"./src/reddit/components/SearchPostWarnings/index.m.less": function(e, t, s) {
			e.exports = {
				warningText: "_3C_h7N-1FV_Tj4YnJCgzH8",
				warningIcon: "_3aetAYa8qp50wqScD1enz5",
				quarantineWarning: "_3sd00luQLrO6xvEnYk25bF",
				nsfwWarning: "HRl6KlvsitYdcGQiiZoLn",
				spoilerWarning: "_2l5VK2M8iq-3ux5SwW1fAt"
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
				return je
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
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/helpers/trackers/screenview.ts"),
				f = s("./src/reddit/selectors/searchResults.ts"),
				O = s("./src/reddit/selectors/tracking.ts"),
				g = s("./src/telemetry/index.ts"),
				j = s("./src/telemetry/models/Timer.ts"),
				v = s("./node_modules/fbt/lib/FbtPublic.js"),
				C = s("./node_modules/lodash/noop.js"),
				y = s.n(C),
				E = s("./node_modules/react-router-redux/es/index.js"),
				_ = s("./src/lib/classNames/index.ts"),
				k = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				S = s("./src/reddit/components/Comments/Comment/index.tsx"),
				w = s("./src/reddit/components/PostList/index.tsx"),
				I = s("./src/reddit/components/PostTitle/index.tsx"),
				N = s("./src/reddit/components/SearchPost/index.tsx"),
				T = s("./src/reddit/connectors/PostList/index.ts"),
				R = s("./src/reddit/contexts/Visibility.tsx"),
				P = s("./src/reddit/controls/Button/index.tsx"),
				M = s("./src/reddit/controls/Button/index.m.less"),
				L = s.n(M),
				F = s("./src/reddit/helpers/trackers/searchResults.ts"),
				B = s("./src/reddit/hooks/useClickSourceData.ts"),
				D = s("./src/reddit/hooks/useTracking.ts"),
				A = s("./src/reddit/selectors/comments.ts"),
				U = s("./src/reddit/selectors/commentSelector.ts"),
				V = s("./src/reddit/selectors/posts.ts"),
				H = s("./src/reddit/components/SearchPostFlatlist/index.tsx");

			function W(e) {
				let {
					className: t,
					comment: s
				} = e;
				return i.a.createElement(H.b, {
					className: t
				}, i.a.createElement(H.d, {
					score: s.score
				}), i.a.createElement(H.a, {
					awardCountsById: s.awardCountsById
				}))
			}
			var G = s("./src/reddit/components/SearchResultsContent/Comment/index.m.less"),
				K = s.n(G);
			var q;
			! function(e) {
				e.COMMENT = "comment", e.COMMENT_AUTHOR = "comment_author", e.COMMENT_TIMESTAMP = "comment_timestamp", e.GO_TO_COMMENT_LINK = "go_to_comment_link", e.POST = "post", e.POST_AUTHOR = "post_author", e.POST_COMMUNITY = "post_community"
			}(q || (q = {}));
			var Y = s("./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.tsx"),
				J = s("./src/lib/truncateText/index.ts"),
				z = s("./src/reddit/actions/post.ts"),
				X = s("./src/reddit/components/Flair/index.tsx"),
				Q = s("./src/lib/prettyPrintNumber/index.ts"),
				Z = s("./src/reddit/components/SubscribeButton/index.tsx"),
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
					hideNSFWPref: me.F,
					subredditOrProfile: le.N,
					subredditOrProfileAboutInfo: le.J,
					userIsSubscriber: le.hb
				}),
				he = e => {
					const {
						className: t,
						first: s,
						identifier: n,
						listingKey: r,
						searchOptions: c,
						sidebar: d
					} = e, l = Object(h.gb)(), m = Object(D.a)(), u = Object(B.a)(), {
						isBlockingInterstitialEnabled: p,
						isBlockingInterstitialV2Enabled: b,
						hideNSFWPref: x,
						subredditOrProfile: f,
						subredditOrProfileAboutInfo: O
					} = Object(a.e)(t => be(t, e)), g = Object(a.d)(), j = Object(o.useCallback)(e => {
						f && n.type === oe.a.PROFILE && (p || b) && (e.preventDefault(), g(Object(z.db)(f.url))), m(Object(F.q)(c, l, n, r))
					}, [m, c, l, r, n, p, b, g, f]);
					if (!f) return null;
					const C = f.displayText,
						y = O.publicDescription,
						E = ((e, t) => {
							if ("subreddit" !== e) {
								const e = t,
									s = Object($.a)(e),
									n = Object(Q.b)(s);
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
							}, [v.fbt._plural(s.subscribers, "number of subscribers", Object(Q.b)(s.subscribers))], {
								hk: "vb11y"
							}) : null
						})(n.type, O),
						k = (e => {
							let {
								identifierType: t,
								subredditOrProfile: s,
								subredditOrProfileAboutInfo: n,
								onSubscribeButtonClick: r,
								subscribeEventFactory: o,
								priority: a
							} = e;
							if ("subreddit" !== t) return s.acceptFollowers ? i.a.createElement(Z.a, {
								getEventFactory: o,
								identifier: {
									name: s.name,
									type: "profile"
								},
								onClick: r,
								priority: a,
								small: !0
							}) : null;
							return "number" == typeof n.subscribers ? i.a.createElement(Z.a, {
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
							subredditOrProfile: f,
							subredditOrProfileAboutInfo: O,
							onSubscribeButtonClick: e => {
								e.preventDefault(), e.stopPropagation()
							},
							subscribeEventFactory: e => {
								return ((e, t, s) => n => {
									const r = ne.G(n, void 0);
									return {
										source: F.c.SEARCH,
										action: ee.c.CLICK,
										noun: `${s}_${F.d[e.type]}`,
										actionInfo: Object(F.k)(n, void 0, r, void 0),
										correlationId: Object(te.c)(te.a.SearchResults),
										profile: "profile" === e.type ? ne.W(n, e.id) : void 0,
										search: ne.bb(n, t, se.a.SERP),
										subreddit: "subreddit" === e.type ? ne.mb(n, e.id) : void 0
									}
								})(n, c, e ? "unsubscribe" : "subscribe")
							},
							priority: P.c.Tertiary
						});
					return i.a.createElement(ie.default, {
						"data-testid": `${n.type}-link`,
						className: Object(_.a)(pe.a.container, d && pe.a.sidebar, s ? pe.a.mFirst : void 0, t),
						onClick: j,
						to: {
							pathname: f.url,
							state: u
						}
					}, i.a.createElement(re.b, {
						className: pe.a.subredditIcon,
						shouldHideNsfwIcon: x,
						subredditOrProfile: f
					}), i.a.createElement("div", {
						className: pe.a.contentContainer
					}, i.a.createElement("div", {
						className: Object(_.a)(pe.a.subredditInfo, d && pe.a.sidebar)
					}, i.a.createElement("h6", {
						className: pe.a.title
					}, C), f.isNSFW && i.a.createElement(X.b, {
						className: pe.a.flair,
						flair: {
							type: ce.f.Nsfw,
							text: v.fbt._("nsfw", null, {
								hk: "2nrY5X"
							})
						}
					}), E && i.a.createElement(i.a.Fragment, null, i.a.createElement("p", {
						className: pe.a.subtitle
					}, !d && i.a.createElement(ae.b, null), E))), !d && i.a.createElement("p", {
						className: pe.a.description
					}, Object(J.a)(y, 150, "..."))), i.a.createElement("div", {
						className: pe.a.buttonContainer
					}, k))
				};
			var xe = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx"),
				fe = s("./src/reddit/components/SearchResultsContent/helpers/viewSearchThingTracker.ts"),
				Oe = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.m.less"),
				ge = s.n(Oe);
			const je = 5,
				ve = Object(c.c)({
					apiError: f.b,
					apiPending: f.c,
					loadMore: f.s,
					viewportDataLoaded: O.a
				}),
				Ce = Object(c.c)({
					apiError: f.e,
					apiPending: f.f,
					loadMore: f.t,
					viewportDataLoaded: O.a
				}),
				ye = Object(c.c)({
					apiError: f.h,
					apiPending: f.i,
					loadMore: f.u,
					viewportDataLoaded: O.a
				}),
				Ee = {
					[d.bc.Comments]: {
						cacheName: "comment",
						Component: e => {
							let {
								identifier: t,
								listingKey: s,
								searchOptions: n
							} = e;
							const r = Object(h.gb)(),
								o = Object(D.a)(),
								c = Object(a.d)(),
								d = Object(a.e)(e => Object(U.b)(e, {
									commentId: t
								})),
								l = Object(a.e)(e => Object(A.m)(e, {
									commentId: t
								})),
								m = Object(a.e)(e => (null == d ? void 0 : d.postId) ? Object(V.G)(e, {
									postId: null == d ? void 0 : d.postId
								}) : void 0),
								u = Object(a.e)(e => (null == d ? void 0 : d.postId) && Object(V.F)(e, {
									postId: null == d ? void 0 : d.postId
								})),
								p = Object(a.e)(e => e.search.searchQuery),
								b = Object(B.a)();
							if (!(null == d ? void 0 : d.postId) || !u) return null;
							const x = Object(T.b)(c),
								f = function(e) {
									let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y.a;
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
								O = Object(w.b)(d.postId, x),
								g = e => f(e);
							return i.a.createElement(N.a, {
								crosspost: void 0,
								isActive: !1,
								isLoggedIn: !1,
								modModeEnabled: !1,
								moderatorPermissions: void 0,
								onClickPost: f(q.POST, null != O ? O : y.a),
								onClickPostAuthor: g(q.POST_AUTHOR),
								onClickPostCommunity: g(q.POST_COMMUNITY),
								onIgnoreReports: y.a,
								postId: d.postId,
								searchQuery: p,
								showEditFlair: !1,
								title: i.a.createElement(R.a, null, i.a.createElement("div", {
									className: K.a.commentContainer,
									"data-testid": "search_comment_container"
								}, i.a.createElement("div", {
									className: K.a.postTitleContainer,
									"data-testid": "search_comment_post_title_container",
									onClick: g(q.POST)
								}, m && i.a.createElement(I.c, {
									className: K.a.postTitle,
									hideSourceLink: !0,
									post: m,
									redditStyle: !0,
									disableFlair: !0,
									size: I.b.Metadata
								})), i.a.createElement("div", {
									className: K.a.commentContent,
									"data-testid": "search_comment",
									onClick: f(q.COMMENT, e => {
										e.stopPropagation(), c(Object(E.b)(Object(k.a)(l, !0, b)))
									})
								}, i.a.createElement(S.a, {
									clearHovered: y.a,
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
									onLineMouseOver: y.a,
									onCommentAuthorClick: e => (e.stopPropagation(), g(q.COMMENT_AUTHOR)(e)),
									onCommentTimestampClick: e => (e.stopPropagation(), g(q.COMMENT_TIMESTAMP)(e)),
									postId: d.postId,
									renderedInOverlay: !1,
									restrictHeight: !0,
									rtJSONRedditStyle: !0,
									scrollToAndRemeasure: y.a,
									showBlockingInterstitial: y.a,
									userIconSmall: !0,
									onClickRevealSpoilerText: () => {
										o(Object(F.s)(n, d, s, r))
									}
								})), i.a.createElement(P.t, {
									kind: P.b.InternalLink,
									priority: P.c.PlainLink,
									className: Object(_.a)(K.a.goToThreadLinkButton, L.a.PlainLinkButton),
									"data-testid": "go_to_thread_link",
									onClick: f(q.GO_TO_COMMENT_LINK, e => {
										e.stopPropagation()
									}),
									to: Object(k.a)(u, !0, b)
								}, v.fbt._("Go to thread", null, {
									hk: "npBX6"
								}))))
							})
						},
						moreResultsTypes: [d.cc.Comments],
						Placeholder: Y.a,
						selector: Ce,
						telemetryComponentName: "commentSearchResults",
						telemetryViewEvent: fe.c
					},
					[d.bc.Subreddits]: {
						cacheName: "community",
						Component: he,
						moreResultsTypes: [d.cc.Subreddits],
						Placeholder: xe.a,
						selector: ye,
						telemetryComponentName: "communitySearchResults",
						telemetryViewEvent: fe.d
					},
					[d.bc.Users]: {
						cacheName: "author",
						Component: he,
						moreResultsTypes: [d.cc.Users],
						Placeholder: xe.a,
						selector: ve,
						telemetryComponentName: "authorSearchResults",
						telemetryViewEvent: fe.d
					}
				};
			const _e = e => {
				const t = Object(o.useRef)(!1);
				let s = !1,
					n = !1;
				const c = new m.a(250),
					f = Object(o.useRef)(),
					O = Object(o.useRef)(null),
					v = Object(o.useRef)(!1),
					C = Object(h.gb)(),
					y = Object(b.b)(),
					E = Object(a.d)(),
					{
						identifiers: _,
						listingKey: k,
						searchOptions: S,
						componentType: w,
						sidebar: I
					} = e,
					{
						cacheName: N,
						Component: T,
						moreResultsTypes: R,
						Placeholder: P,
						selector: M,
						telemetryComponentName: L,
						telemetryViewEvent: F
					} = Ee[w],
					{
						apiError: B,
						apiPending: D,
						loadMore: A,
						viewportDataLoaded: U
					} = Object(a.e)(t => M(t, e)),
					V = I ? je : _.length,
					H = I ? je : 10,
					W = () => {
						if (!J()) return;
						const e = g.c.end(k);
						y(Object(x.v)(k, S, j.TimerType.InApp, e, C)), v.current = !0
					},
					G = () => {
						const e = f.current && Array.from(f.current.children),
							t = e && e.pop();
						return t && t.getBoundingClientRect().bottom > window.innerHeight
					};
				Object(o.useEffect)(() => {
					W(), O.current && Object(g.b)(d.m.Redesign, {
						type: "mount",
						component: L,
						duration: g.c.end(O.current)
					})
				}, []), Object(o.useEffect)(() => {
					if (W(), O.current && g.c.has(O.current)) {
						const e = g.c.end(O.current);
						if (e < 10) return;
						Object(g.b)(d.m.Redesign, {
							duration: e,
							type: "mount",
							component: L
						})
					}
				});
				const K = Object(l.a)(k),
					q = Object(l.a)(_.length);
				Object(o.useEffect)(() => {
					O.current && g.c.cancel(O.current), _.length && (O.current = g.c.start()), (k !== K || !G() && _.length !== q) && (t.current = !1)
				}, [O, k, _.length, K, q, t]), Object(o.useEffect)(() => () => {
					O.current && g.c.cancel(O.current), f.current = void 0, t.current = !1
				});
				const Y = () => {
						t.current = !0, W()
					},
					J = () => {
						const e = G();
						return (g.c.has(k) || !v.current) && (B || !n && (s || t && (e || U)))
					},
					z = e => {
						f.current = e instanceof Element ? e : void 0
					},
					X = () => {
						const e = _.slice(0, V).map((e, t) => ((e, t) => {
							let s, n = S;
							! function(e) {
								return void 0 !== e.type
							}(e) ? s = e: (s = e.id, n = {
								...S,
								id: e.id,
								eventType: e.type
							});
							const r = `${N}-search-${t}-${k}`,
								o = Object(fe.b)(s, k, () => F(y, n, e, k, C));
							let a;
							if (void 0 === (a = c.get(r))) {
								const n = `${N}-search-item-[id:${s}]`;
								a = {
									estHeight: 32,
									trackOnEnteredViewport: o,
									id: s,
									render: () => i.a.createElement(T, {
										className: ge.a.separatedCommunity,
										first: 0 === t,
										identifier: e,
										key: n,
										listingKey: k,
										searchOptions: S,
										sidebar: I
									})
								}
							}
							return c.set(r, a), a
						})(e, t));
						return i.a.createElement(p.b, {
							key: k,
							innerRef: z,
							loadMoreToken: A && A.token ? A.token : void 0,
							onLastVisibleChildRendered: Y,
							onLoadMore: () => {
								E(Object(u.o)(R))
							}
						}, e)
					};
				return (() => _.length > 0)() ? (s = !1, n = !1, X()) : (() => Boolean(B) || !1 === D)() ? (s = !0, n = !1, X()) : (s = !1, n = !0, (() => {
					const e = !B;
					return i.a.createElement("div", {
						"data-testid": `${w}-list-placeholder`
					}, r()(H, t => i.a.createElement(P, {
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
				return lt
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
				j = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				v = s("./src/reddit/components/Media/index.tsx"),
				C = s("./src/reddit/components/PostContainer/index.tsx"),
				y = s("./src/reddit/components/Thumbnail/index.tsx"),
				E = s("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = s("./src/reddit/constants/adEvents.ts"),
				k = s("./src/reddit/contexts/PageLayer/index.tsx"),
				S = s("./src/reddit/contexts/Post/index.tsx"),
				w = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				I = s("./src/reddit/helpers/clickSourceData/index.ts"),
				N = s("./src/reddit/helpers/overlay/index.ts"),
				T = s("./src/reddit/helpers/path/index.ts"),
				R = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				P = s("./src/reddit/helpers/trackers/searchResults.ts"),
				M = s("./src/reddit/models/Media/index.ts"),
				L = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				F = s("./src/reddit/selectors/posts.ts"),
				B = s("./src/reddit/selectors/showPromotedCTA.ts"),
				D = s("./src/reddit/selectors/user.ts"),
				A = s("./node_modules/reselect/es/index.js"),
				U = s("./src/lib/getShortenedLink.ts"),
				V = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				H = s("./src/reddit/components/PostTitle/index.tsx"),
				W = s("./src/reddit/components/SearchPostFlatlist/index.tsx"),
				G = s("./src/reddit/components/SearchPostMeta/index.tsx"),
				K = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				q = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				Y = s("./src/reddit/components/CallToActionButton/index.tsx"),
				J = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				z = s("./src/reddit/hooks/useTheme.ts"),
				X = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Q = s("./src/reddit/components/SearchDiscoveryUnits/HeroUnit/index.m.less"),
				Z = s.n(Q);
			const {
				fbt: $
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ee = `${p.a.assetPath}/img/link-placeholder.png`, te = Object(A.c)({
				autoplayPref: D.b,
				showPromotedCTA: B.a,
				flairStyleTemplate: k.W,
				showCTAExperiment: L.a
			});

			function se(e) {
				var t;
				const {
					postId: s,
					listingKey: a,
					searchOptions: c,
					discoveryUnit: d
				} = e, l = Object(r.useRef)(), m = Object(r.useRef)(), {
					autoplayPref: u,
					flairStyleTemplate: L,
					showPromotedCTA: B,
					showCTAExperiment: D
				} = Object(i.e)(t => te(t, e)), A = Object(i.e)(e => Object(F.d)(e, {
					postId: s
				})), Q = Object(i.e)(X.b), se = Object(i.e)(X.c), ne = Object(k.gb)(), re = Object(E.b)(), oe = Object(i.d)(), ie = Object(z.a)(), {
					post: ae,
					subredditOrProfile: ce
				} = Object(S.d)(s), de = Object(r.useCallback)((e, t) => {
					oe(Object(f.Q)(e, t))
				}, [oe]), le = !!ae.source && !A;
				if (Object(r.useEffect)(() => (l.current && Object(b.a)(l.current, (e, t) => {
						m.current && (t ? m.current.focusContent() : m.current.pauseContent())
					}), Object(P.w)(a, ae.id, c, ne, d), () => {
						l.current && Object(b.b)(l.current), m.current && m.current.stopContent(), l.current = null, m.current = null
					}), []), !ae) return null;
				const {
					media: me
				} = A || ae || {}, ue = (null == me ? void 0 : me.type) === M.o.EMBED && (null == me ? void 0 : me.provider) === M.v.Twitter, pe = (null == me ? void 0 : me.type) === M.o.VIDEO || (null == me ? void 0 : me.type) === M.o.GIFVIDEO;

				function be(e) {
					e.stopPropagation(), e.preventDefault(), ae.isSponsored ? (oe(Object(f.z)(ae, _.a.Click)), ae.source ? ae.source.outboundUrl ? Object(x.e)(ae.source.outboundUrl, x.d.BLANK) : Object(x.e)(ae.source.url, x.d.BLANK) : Object(x.e)(ae.permalink, x.d.BLANK)) : oe(Q || se ? Object(f.bb)(Object(T.b)(ae.permalink), ae.id) : Object(N.a)({
						pathname: Object(T.b)(ae.permalink),
						state: Object(I.b)(ne)
					}))
				}

				function he(e) {
					ae.isSponsored && pe || be(e), ae.isSponsored && function(e) {
						pe || (e.stopPropagation(), e.preventDefault()), re(Object(P.x)(ae.id, c, d, a, ne))
					}(e)
				}
				return ae.isBlank ? o.a.createElement(O.BlankPost, {
					onPostViewable: de,
					post: ae,
					postId: ae.id
				}) : o.a.createElement(S.a, {
					postId: s
				}, o.a.createElement(C.a, {
					className: Z.a.postContainer,
					eventFactory: function(e, t) {
						var s;
						let n = null,
							r = R.x;
						return ae.isSponsored || (r = R.z, n = null !== (s = P.D[t]) && void 0 !== s ? s : P.e.POST), r(c, ne, n, a, d)(e)
					},
					onClick: be,
					post: ae,
					"data-click-id": "hero_unit",
					style: {
						...Object(J.d)({
							theme: ie,
							flairStyleTemplate: L,
							redditStyle: !1
						}),
						...Object(J.b)(L)
					}
				}, o.a.createElement(V.a, {
					"data-click-id": "background"
				}, o.a.createElement(g.a, {
					className: Z.a.eventMeta,
					post: ae
				}), o.a.createElement("div", {
					className: Object(n.a)(Z.a.postContent, {}),
					"data-click-id": "body"
				}, o.a.createElement(G.a, {
					className: Z.a.postItemMetaContainer,
					key: "PostMeta",
					shouldShowSubscribeButton: !1,
					post: ae,
					subredditOrProfile: ce
				}), o.a.createElement("div", {
					className: Z.a.postItemTitleContainer
				}, o.a.createElement(H.c, {
					hideSourceLink: !0,
					post: ae,
					size: H.b.Medium,
					isOverlay: !1
				}), !B && le && o.a.createElement(K.a, {
					className: Z.a.outboundLink,
					href: (null === (t = null == ae ? void 0 : ae.source) || void 0 === t ? void 0 : t.url) || "",
					isSponsored: ae.isSponsored,
					postId: ae.id,
					source: ae.source
				}, Object(U.a)(ae))), function() {
					let e = o.a.createElement(o.a.Fragment, null);
					const t = !!ae.source && Object(h.a)(ae.source.url) || !!ae.thumbnail && Object(h.a)(ae.thumbnail.url),
						s = !(null == me ? void 0 : me.type) && t,
						r = Object(n.a)(Z.a.mediaWrapper, {
							[Z.a.marginCancel]: B && !!ae.source,
							[Z.a.promotedTrend]: ae.isSponsored
						});
					if (s) e = o.a.createElement("div", {
						className: r
					}, o.a.createElement(y.a, {
						className: Z.a.thumbnail,
						post: ae,
						templatePlaceholderImage: ee,
						usePreview: !0
					}));
					else if (me)
						if (me.type !== M.o.RTJSON && me.type !== M.o.TEXT) e = o.a.createElement("div", {
							className: Object(n.a)(r, ue && Z.a.twitterEmbed),
							onClickCapture: he,
							ref: e => l.current = e
						}, o.a.createElement(v.a, {
							className: Z.a.mediaContent,
							autoplayPref: u,
							isListing: !1,
							isMiniCard: !1,
							isNotCardView: !0,
							isPromotedTrend: ae.isSponsored,
							post: A || ae,
							primaryContent: !0,
							scrollerItemRef: e => m.current = e,
							shouldLoad: !0,
							shouldPause: !0,
							showCentered: !0,
							showFull: !0
						}));
						else {
							e = o.a.createElement("div", {
								className: Z.a.mediaPlaceholder
							}), (me.type === M.o.RTJSON && me.richtextContent || me.type === M.o.TEXT && me.content) && Object(w.a)(ae) && (e = o.a.createElement("div", {
								className: r,
								onClickCapture: be,
								ref: e => l.current = e
							}, o.a.createElement(v.a, {
								autoplayPref: u,
								className: Z.a.textMedia,
								isListing: !1,
								isMiniCard: !1,
								isNotCardView: !1,
								post: A || ae,
								shouldPause: !0,
								shouldLoad: !0,
								showCentered: !0,
								showFull: !0
							}), o.a.createElement("div", {
								className: Z.a.seeMore
							}, $._("More", null, {
								hk: "362mDE"
							}))))
						} return e
				}(), B && ae.source && o.a.createElement(q.a, {
					className: Z.a.adLinkWrapper,
					ctaExperimentDesign: D && "card"
				}, o.a.createElement(K.a, {
					className: Object(n.a)(Z.a.outboundLink, {
						[Z.a.ctaExperiment]: D
					}),
					href: ae.source.url.replace(p.a.redditUrl, ""),
					isSponsored: ae.isSponsored,
					postId: ae.id,
					source: ae.source
				}, ae.source.displayText), ae.callToAction && o.a.createElement(Y.a, {
					className: Z.a.adCallToAction,
					href: ae.source.url.replace(p.a.redditUrl, ""),
					isSponsored: ae.isSponsored,
					postId: ae.id,
					source: ae.source,
					showCTAExperiment: D
				}, ae.callToAction)), !ae.isSponsored && o.a.createElement(W.c, {
					className: Object(n.a)(Z.a.postItemFlatlistContainer),
					post: ae
				}), o.a.createElement(j.d, null)))))
			}
			var ne = s("./src/lib/LRUCache/index.ts"),
				re = s("./src/reddit/components/Scroller/Simple.tsx"),
				oe = s("./src/reddit/components/SearchResultsContent/helpers/viewSearchThingTracker.ts"),
				ie = s("./src/reddit/hooks/usePageLayer.ts"),
				ae = s("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const ce = 376,
				de = new ne.a(1);

			function le(e) {
				let {
					discoveryUnit: t,
					listingKey: s,
					searchOptions: n,
					postId: r,
					children: a
				} = e;
				const c = Object(i.d)(),
					d = Object(ie.a)();
				if (!t || !r) return null;
				const l = () => {
					const e = `entered-hero-unit-${r}`;
					let o = oe.a.get(e);
					if (void 0 === o) {
						const i = t.layout.viewTypeWeb === ae.b.PromotedTrendHero;
						o = () => {
							c((e, o) => Object(R.A)(o(), t, r, n, d, s, i))
						}, oe.a.set(e, o)
					}
					return o
				};
				return o.a.createElement(re.b, null, (() => {
					const e = `hero-unit-search-${s}`;
					let n;
					return void 0 === (n = de.get(e)) && (n = {
						estHeight: ce,
						trackOnEnteredViewport: l(),
						id: t.id,
						render: () => a
					}), de.set(e, n), [n]
				})())
			}
			var me = s("./src/reddit/constants/page.ts"),
				ue = s("./src/reddit/helpers/trackers/screenview.ts"),
				pe = s("./src/reddit/hooks/useTracking.ts"),
				be = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				he = s("./src/reddit/selectors/listings.ts"),
				xe = s("./src/reddit/selectors/platform.ts");
			const fe = e => {
				const t = e.listings.activeKey,
					s = e.searchDiscoveryUnits.models[t];
				return s || {}
			};
			var Oe = s("./src/reddit/selectors/searchFix.ts"),
				ge = s("./src/reddit/selectors/searchResults.ts"),
				je = s("./src/telemetry/index.ts"),
				ve = s("./src/telemetry/models/Timer.ts");
			const {
				Hero: Ce,
				PromotedTrendHero: ye
			} = ae.b;

			function Ee(e) {
				const t = Object.values(e).find(e => e.layout.viewTypeWeb === Ce || e.layout.viewTypeWeb === ye);
				if (null == t ? void 0 : t.postOrder) return t.postOrder[0]
			}
			var _e = s("./src/reddit/helpers/search/searchClickSearchBarOriginElement.ts"),
				ke = s("./src/reddit/pages/SearchResults/index.tsx"),
				Se = s("./src/reddit/components/SearchResultsContent/NoResults/index.m.less"),
				we = s.n(Se);
			const {
				fbt: Ie
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ne = `${p.a.assetPath}/img/telescope-snoo.png`;
			var Te;

			function Re(e) {
				let {
					query: t,
					type: s,
					searchOptions: i,
					tab: a
				} = e;
				const c = Object(pe.a)();
				Object(r.useEffect)(() => {
					c(Object(P.n)(s, i))
				}, [s]);
				const d = i.restrict_sr || ke.pageConfig[a].sidebar;
				return o.a.createElement("div", {
					className: Object(n.a)(we.a.noResults, d && we.a.withSidebar),
					"data-testid": "no-results"
				}, o.a.createElement("img", {
					alt: Ie._("No results image", null, {
						hk: "1BoGUJ"
					}),
					src: Ne,
					className: we.a.image
				}), o.a.createElement("h2", {
					className: we.a.header
				}, Ie._("Hm... we couldn’t find any results for “", null, {
					hk: "4fFM7J"
				}), Ie._("{search query}", [Ie._param("search query", t)], {
					hk: "4vP3YT"
				}), "”"), o.a.createElement("p", {
					className: we.a.text
				}, Ie._("Double-check your spelling or try different keywords to {=adjust your search}", [Ie._param("=adjust your search", o.a.createElement("button", {
					className: we.a.button,
					onClick: () => {
						const e = document.querySelector('input[type="search"]');
						_e.b.set(_e.a.ADJUST_SEARCH_BUTTON), null == e || e.focus()
					}
				}, Ie._("adjust your search", null, {
					hk: "1pUIox"
				})))], {
					hk: "33XStx"
				})))
			}! function(e) {
				e.Comments = "comments", e.Communities = "communities", e.People = "people", e.Posts = "posts"
			}(Te || (Te = {}));
			var Pe = s("./src/reddit/components/PostList/index.tsx"),
				Me = s("./src/reddit/components/SearchPost/index.tsx"),
				Le = s("./src/reddit/constants/postLayout.ts"),
				Fe = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				Be = s("./src/reddit/helpers/trackers/post.ts"),
				De = s("./src/reddit/selectors/tracking.ts"),
				Ae = s("./src/reddit/connectors/PostList/index.ts");
			const Ue = Object(Ae.c)(),
				Ve = Object(A.c)({
					...Ae.d,
					layout: () => Le.g.Search,
					viewportDataLoaded: De.a,
					postIds: (e, t) => {
						let {
							heroPostId: s,
							listingKey: n,
							listingName: r,
							inSubredditOrProfile: o,
							searchDiscoveryUnit: i
						} = t;
						const a = i && i.postOrder,
							c = Ee(fe(e));
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
				He = (e, t, s, n) => {
					if (s) return Object(Be.k)(e, t);
					const {
						listingKey: r,
						searchOptions: o,
						pageLayer: i,
						searchDiscoveryUnit: a,
						sendEvent: c
					} = n;
					return c(Object(P.r)(e, {
						...o,
						id: e,
						eventType: "post"
					}, i, P.D[t], r, a)), Object(Be.k)(e, t)
				},
				We = Object(i.b)(Ve, (e, t) => ({
					...Object(Ae.b)(e),
					trackOnPostEnteredViewport: e => {
						t.sendEvent(Object(P.w)(t.listingKey, e, {
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
						return t.isBlank ? Fe.a : Me.a
					}
				}));
			const Ge = (e => Object(E.c)(Ue(We(e))))(Pe.a),
				Ke = () => null,
				qe = Object(A.c)({
					viewTreatment: ge.w,
					searchDiscoveryUnitsModels: fe,
					hasPostResults: ge.n,
					apiPending: he.d,
					postIds: F.z,
					posts: F.y,
					loadMore: he.g,
					isOverlayOpen: xe.i
				});

			function Ye(e) {
				const {
					listingKey: t,
					listingName: s,
					location: n,
					searchOptions: a
				} = e, p = Object(ie.a)(), b = Object(pe.a)(), h = Object(i.d)(), {
					viewTreatment: x,
					searchDiscoveryUnitsModels: f,
					hasPostResults: O,
					postIds: g,
					isOverlayOpen: j,
					apiPending: v
				} = Object(i.e)(t => qe(t, e)), C = Object(l.a)(j), y = Object(r.useRef)(!1), E = void 0 === v || v, _ = (e, s) => b(Object(ue.v)(t, a, s, e, p, Object(Oe.b)({
					pageLayer: p
				})));
				let k;
				Object(r.useEffect)(() => {
					O && !c()(g) && N()
				}, [O, g]), Object(r.useEffect)(() => {
					C && !j && N()
				}, [j, C]), x === ae.c.Trending && (k = Ee(f));
				const S = Object(m.a)(a.q || ""),
					w = Object(r.useMemo)(() => Object.values(f).find(e => e.name === be.l || e.name === be.f), [f]),
					I = k && w;

				function N() {
					if (je.c.has(t) || !y.current) {
						y.current = !0;
						const e = je.c.end(t);
						_(e, ve.TimerType.InApp)
					}
				}
				return O || I || E ? o.a.createElement(o.a.Fragment, null, I && o.a.createElement(le, {
					key: k,
					postId: k,
					discoveryUnit: w,
					searchOptions: a,
					listingKey: t
				}, o.a.createElement(se, {
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
						h(Object(u.o)([d.cc.Posts]))
					},
					searchOptions: a
				})) : o.a.createElement(Re, {
					query: S,
					type: Te.Posts,
					searchOptions: a,
					tab: me.h.Posts
				})
			}
			var Je = s("./node_modules/lodash/constant.js"),
				ze = s.n(Je),
				Xe = s("./node_modules/lodash/times.js"),
				Qe = s.n(Xe),
				Ze = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.tsx"),
				$e = s("./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.tsx"),
				et = s("./src/reddit/components/SearchResultsContent/Communities/index.m.less"),
				tt = s.n(et);
			const st = e => {
				const {
					listingKey: t,
					searchOptions: s
				} = e, n = Object(i.e)(e => Object(ge.d)(e, {
					listingKey: t
				})), r = Object(i.e)(e => Object(ge.t)(e, {
					listingKey: t
				})), a = Boolean(r && r.token) && n.length > 0;
				return o.a.createElement("div", {
					className: tt.a.container,
					"data-testid": "comments-list"
				}, o.a.createElement(Ze.b, {
					identifiers: n,
					listingKey: t,
					searchOptions: s,
					componentType: d.bc.Comments
				}), a && o.a.Children.toArray(Qe()(3, ze()(o.a.createElement($e.a, {
					className: tt.a.loadMoreItem,
					isLoading: !0
				})))))
			};
			var nt = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx");
			const rt = (e, t) => Boolean(t && t.token) && e.length > 0,
				ot = e => {
					const {
						listingKey: t,
						searchOptions: s
					} = e, n = Object(i.e)(e => Object(ge.g)(e, {
						listingKey: t
					})), r = Object(i.e)(e => Object(ge.u)(e, {
						listingKey: t
					}));
					return o.a.createElement("div", {
						className: tt.a.container,
						"data-testid": "communities-list"
					}, !s.is_multi && o.a.createElement(Ze.b, {
						identifiers: n,
						listingKey: t,
						searchOptions: s,
						componentType: d.bc.Subreddits
					}), rt(n, r) && o.a.Children.toArray(Qe()(3, ze()(o.a.createElement(nt.a, {
						className: tt.a.loadMoreItem,
						isLoading: !0
					})))))
				};
			var it = s("./src/reddit/components/SearchResultsContent/index.m.less"),
				at = s.n(it);
			const ct = e => {
				const {
					listingKey: t,
					searchOptions: s
				} = e, n = Object(i.e)(e => Object(ge.a)(e, {
					listingKey: t
				})), r = Object(i.e)(e => Object(ge.s)(e, {
					listingKey: t
				}));
				return o.a.createElement("div", {
					className: tt.a.container,
					"data-testid": "people-list"
				}, !s.is_multi && o.a.createElement(Ze.b, {
					identifiers: n,
					listingKey: t,
					searchOptions: s,
					componentType: d.bc.Users
				}), rt(n, r) && o.a.Children.toArray(Qe()(3, ze()(o.a.createElement(nt.a, {
					className: tt.a.loadMoreItem,
					isLoading: !0
				})))))
			};

			function dt(e) {
				const {
					hasResults: t,
					searchOptions: s,
					noResultsType: n,
					searchResultsTab: r,
					pendingSelector: a
				} = e, c = Object(m.a)(s.q || ""), d = Object(i.e)(t => a(t, e)), l = void 0 === d || d;
				return o.a.createElement(o.a.Fragment, null, t || l ? e.children : o.a.createElement(Re, {
					searchOptions: s,
					query: c,
					type: n,
					tab: r
				}))
			}

			function lt(e) {
				const {
					listingKey: t,
					listingName: s,
					location: r,
					searchOptions: a,
					tab: c
				} = e, d = Object(i.e)(e => Object(ge.m)(e, {
					listingKey: t
				})), l = Object(i.e)(e => Object(ge.k)(e, {
					listingKey: t
				})), m = Object(i.e)(e => Object(ge.l)(e, {
					listingKey: t
				}));
				return o.a.createElement("div", {
					className: Object(n.a)(at.a.resultsContainer)
				}, c === me.h.Listings ? o.a.createElement(dt, {
					hasResults: d,
					searchOptions: a,
					noResultsType: Te.Communities,
					searchResultsTab: me.h.Listings,
					listingKey: t,
					pendingSelector: ge.i
				}, o.a.createElement(ot, {
					listingKey: t,
					searchOptions: a,
					key: me.h.Listings
				})) : c === me.h.People ? o.a.createElement(dt, {
					hasResults: l,
					searchOptions: a,
					noResultsType: Te.People,
					searchResultsTab: me.h.People,
					listingKey: t,
					pendingSelector: ge.c
				}, o.a.createElement(ct, {
					listingKey: t,
					searchOptions: a,
					key: me.h.People
				})) : c === me.h.Comments ? o.a.createElement(dt, {
					hasResults: m,
					searchOptions: a,
					noResultsType: Te.Comments,
					searchResultsTab: me.h.Comments,
					listingKey: t,
					pendingSelector: ge.f
				}, o.a.createElement(st, {
					listingKey: t,
					searchOptions: a,
					key: me.h.Comments
				})) : o.a.createElement(Ye, {
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
				return s ? Object(r.A)(e, {
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
				h = s("./src/reddit/helpers/trackers/searchResults.ts"),
				x = s("./src/reddit/hooks/useTracking.ts"),
				f = s("./src/reddit/models/SearchDiscoveryUnit/index.ts"),
				O = s("./src/reddit/selectors/searchResults.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/Pill/PillButton/index.tsx"),
				v = s("./node_modules/history/esm/history.js"),
				C = s("./node_modules/react-router-redux/es/index.js"),
				y = s("./src/lib/addQueryParams/index.ts"),
				E = s("./src/lib/classNames/index.ts"),
				_ = s("./src/lib/colors/constants.ts"),
				k = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				S = s("./src/reddit/constants/parameters.ts"),
				w = s("./src/reddit/constants/tracking.ts"),
				I = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				N = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				T = s("./src/reddit/hooks/usePageLayer.ts"),
				R = s("./src/reddit/selectors/telemetry.ts"),
				P = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				M = s("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				L = s("./src/reddit/components/SearchNSFWToggle/SearchNSFWToggle.m.less"),
				F = s.n(L);
			const B = "safe-search-toggle";

			function D(e) {
				let {
					searchOptions: t
				} = e;
				const s = Object(x.a)(),
					[r, o] = a.a.useState(!0);
				a.a.useEffect(() => o(null), []);
				const i = Object(N.a)({}),
					{
						nsfwSessionSetting: d,
						setNsfwSessionSetting: l
					} = Object(M.b)(),
					m = Object(T.a)(),
					u = Object(c.d)();
				i.arrowProps.style = {
					...i.arrowProps.style,
					borderBottom: `3px solid ${_.e}`
				}, i.popperProps.style = {
					...i.popperProps.style,
					backgroundColor: _.e
				};
				const p = null != r ? r : !d;
				return a.a.createElement("div", {
					className: Object(E.a)(F.a.searchNSFWToggle),
					"data-testid": B,
					onMouseEnter: i.show,
					onMouseLeave: i.hide
				}, a.a.createElement("label", {
					htmlFor: B,
					className: Object(E.a)(F.a.searchNSFWToggleLabel)
				}, n.fbt._("Safe Search", null, {
					hk: "x1C2Y"
				})), a.a.createElement(I.a, {
					activeColorOverride: _.a,
					id: B,
					onToggle: function() {
						var e;
						s(e => (function(e, s) {
							const n = R.G(e, m);
							return {
								action: s ? w.c.DISABLE : w.c.ENABLE,
								source: h.c.SEARCH,
								noun: h.a.NSFW,
								actionInfo: Object(h.k)(e, m, n, {}),
								search: R.bb(e, t, P.a.SERP)
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
								[S.h]: "1"
							}
						}, c = {
							pathname: i,
							search: Object(y.a)("", {
								...a
							})
						};
						u(Object(C.b)(Object(v.c)(c)))
					},
					on: p,
					redditStyle: !0,
					ref: i.target.ref
				}), a.a.createElement(k.a, {
					visible: i.visible,
					arrowProps: i.arrowProps,
					popperProps: i.popperProps
				}, p && n.fbt._("Turn off safe search to show adult and NSFW (Not Safe for Work) search results", null, {
					hk: "E5puY"
				}), !p && n.fbt._("Turn on safe search to hide adult and NSFW (Not Safe for Work) search results", null, {
					hk: "1G2k8"
				})))
			}
			var A = s("./src/reddit/components/SearchResultsNav/index.m.less"),
				U = s.n(A);

			function V(e) {
				let {
					activeTab: t,
					searchOptions: s,
					searchSwitcher: r
				} = e;
				const i = Object(x.a)(),
					v = Object(c.e)(g.kb),
					C = Object(c.e)(O.w),
					y = Object(u.gb)(),
					E = C === f.c.Trending,
					_ = {
						condition: !0,
						active: t === m.h.Posts,
						target: h.b.Posts,
						contentType: d.cc.Posts,
						text: n.fbt._("Posts", null, {
							hk: "vNVpl"
						})
					},
					k = {
						condition: !s.is_multi && !s.restrict_sr,
						active: t === m.h.Listings,
						target: h.b.Communities,
						contentType: d.cc.Subreddits,
						text: n.fbt._("Communities", null, {
							hk: "45NgGC"
						})
					},
					S = {
						condition: !s.is_multi && !s.restrict_sr,
						active: t === m.h.People,
						target: h.b.People,
						contentType: d.cc.Users,
						text: n.fbt._("People", null, {
							hk: "Ttxbf"
						})
					},
					w = [_, {
						condition: !(s.source === l.a.Trending || s.source === l.a.PromotedTrend),
						active: t === m.h.Comments,
						target: h.b.Comments,
						contentType: d.cc.Comments,
						text: n.fbt._("Comments", null, {
							hk: "z0DGA"
						})
					}, k, S],
					I = v && !E && "1" !== s.sr_nsfw;
				return a.a.createElement("div", {
					"data-testid": "search-results-nav",
					className: U.a.searchResultsNav
				}, a.a.createElement("div", {
					className: U.a.pillRow,
					role: "tablist"
				}, w.filter(e => e.condition).map(e => {
					const {
						active: t,
						target: n,
						text: r,
						contentType: c
					} = e;
					return a.a.createElement(p.default, {
						key: n,
						"data-testid": n,
						to: Object(b.b)({
							searchType: c,
							pageLayer: y
						}),
						"aria-selected": t,
						role: "tab",
						className: U.a.pillElement,
						onClick: () => (e => {
							e.active || i(Object(h.m)(e.target, s))
						})(e)
					}, a.a.createElement(j.a, {
						active: t,
						onClick: o.a,
						variant: j.b.TAB_GROUP
					}, r))
				})), r && a.a.createElement("div", {
					className: U.a.searchSwitcherContainer
				}, r), I && a.a.createElement("div", {
					className: U.a.nsfwToggleContainer
				}, a.a.createElement(D, {
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = p.a.div("ButtonContainer", u.a), x = p.a.div("Container", u.a), f = p.a.img("BannerImg", u.a), O = p.a.img("SnooImg", u.a), g = p.a.div("CommunityText", u.a);
			var j = () => o.a.createElement(x, null, o.a.createElement(f, {
					src: `${d.a.assetPath}/img/search-results-community-banner.png`
				}), o.a.createElement(O, {
					src: `${d.a.assetPath}/img/snoo-thinking.png`
				}), o.a.createElement(g, null, b._("Have an idea for a new community?", null, {
					hk: "LfgUP"
				})), o.a.createElement(h, null, o.a.createElement(l.a, {
					className: u.a.Button,
					eventSource: "sidebar"
				}))),
				v = s("./src/reddit/components/IdCard/async.tsx"),
				C = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.tsx"),
				y = s("./src/reddit/components/SidebarContainer/index.tsx"),
				E = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				_ = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				k = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				S = s("./src/reddit/controls/InternalLink/index.tsx"),
				w = s("./src/reddit/helpers/search/searchResultsTabTo.ts"),
				I = s("./src/reddit/hooks/usePageLayer.ts"),
				N = s("./src/reddit/selectors/platform.ts"),
				T = s("./src/reddit/selectors/searchResults.ts"),
				R = s("./src/reddit/selectors/subreddit.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				M = s("./src/reddit/selectors/widgets.ts"),
				L = s("./src/reddit/components/SearchResultsSidebar/index.m.less"),
				F = s.n(L);
			const B = Object(a.c)({
					authorIdentifiers: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(T.a)(e, {
							listingKey: s
						})
					},
					authorLoadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(T.s)(e, {
							listingKey: s
						})
					},
					communityIdentifiers: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(T.g)(e, {
							listingKey: s
						})
					},
					communitiesLoadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(T.u)(e, {
							listingKey: s
						})
					},
					currentSubreddit: N.e,
					isLoggedIn: P.Q,
					hasCommunityResults: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(T.m)(e, {
							listingKey: s
						})
					},
					hasAuthorResults: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(T.k)(e, {
							listingKey: s
						})
					},
					subredditId: (e, t) => {
						let {
							listingName: s
						} = t;
						return Object(R.G)(e, s)
					},
					postFlairWidgets: (e, t) => {
						let {
							listingName: s
						} = t;
						const n = Object(R.G)(e, s);
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
				D = e => {
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
						N = i.length > C.a || !!a,
						T = t.length > C.a || !!s;
					let R;
					const P = Object(I.a)();
					return O ? R = o.a.createElement(o.a.Fragment, null, p && o.a.createElement(v.a, {
						listingName: u
					}), h && h.map((e, t) => o.a.createElement(E.a, {
						key: `widgetSpacer-${t}`
					}, o.a.createElement(k.a, {
						subredditName: u,
						widget: e
					})))) : g || (R = o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: F.a.container,
						"data-testid": "communities-list"
					}, o.a.createElement("h4", {
						className: F.a.header
					}, n.fbt._("Communities", null, {
						hk: "3cMR66"
					})), l ? o.a.createElement(o.a.Fragment, null, !x.is_multi && o.a.createElement(C.b, {
						componentType: c.bc.Subreddits,
						identifiers: i,
						listingKey: m,
						searchOptions: x,
						sidebar: !0
					}), N && o.a.createElement(S.default, {
						to: Object(w.b)({
							searchType: c.cc.Subreddits,
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
					})), d ? o.a.createElement(o.a.Fragment, null, !x.is_multi && o.a.createElement(C.b, {
						componentType: c.bc.Users,
						identifiers: t,
						listingKey: m,
						searchOptions: x,
						sidebar: !0
					}), T && o.a.createElement(S.default, {
						to: Object(w.b)({
							searchType: c.cc.Users,
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
					}, o.a.createElement(j, null)))), o.a.createElement(y.a, {
						"data-testid": "search-results-sidebar",
						className: r
					}, R, o.a.createElement(_.a, null))
				},
				A = e => {
					const t = Object(i.e)(t => B(t, e)),
						s = {
							...e,
							...t
						};
					return o.a.createElement(D, s)
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
			const h = (e, t, s, n, r, o) => {
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
			var x = s("./src/higherOrderComponents/asTooltip.tsx"),
				f = s("./src/reddit/components/Pill/PillButton/index.tsx"),
				O = s("./src/reddit/controls/Dropdown/index.tsx"),
				g = s("./src/reddit/icons/fonts/index.tsx"),
				j = s("./src/reddit/actions/tooltip.ts"),
				v = s("./src/reddit/selectors/tooltip.ts");
			const C = Object(i.c)({
				isOpen: (e, t) => {
					let {
						tooltipId: s
					} = t;
					return Object(v.b)(s)(e)
				}
			});
			var y = s("./src/reddit/components/SearchResultsSubNav/Select/index.m.less"),
				E = s.n(y),
				_ = s("./node_modules/query-string/index.js"),
				k = s.n(_),
				S = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				w = s("./src/reddit/components/TrackingHelper/index.tsx"),
				I = s("./src/reddit/constants/history.ts"),
				N = s("./src/reddit/controls/Dropdown/Row.tsx"),
				T = s("./src/reddit/helpers/history/index.ts"),
				R = s("./node_modules/lodash/fromPairs.js"),
				P = s.n(R),
				M = s("./src/lib/extractQueryParams/index.ts"),
				L = s("./src/reddit/helpers/correlationIdTracker.ts"),
				F = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				B = s("./src/reddit/helpers/trackers/searchResults.ts"),
				D = s("./src/reddit/selectors/telemetry.ts");
			const A = (e, t) => {
					const s = P()([...Object(M.a)(e)]);
					return Object(m.tc)(s.sort) && (t.sort = s.sort), Object(m.uc)(s.t) && (t.t = s.t), t
				},
				U = (e, t, s, n) => () => e(e => ({
					...Object(B.g)(e),
					source: "search",
					action: "click",
					noun: t,
					correlationId: Object(L.c)(L.a.SearchResults),
					actionInfo: D.d(e),
					search: D.bb(e, A(s, n), F.a.SERP)
				})),
				V = e => {
					let {
						isSelected: t,
						option: s,
						searchOptions: n,
						type: o,
						styles: i,
						displayText: c
					} = e;
					const d = Object(w.b)();
					return r.a.createElement(S.a, {
						key: s,
						to: {
							pathname: k.a.parseUrl(s).url,
							state: {
								[I.b.SearchOriginPage]: Object(T.b)(I.b.SearchOriginPage)
							},
							search: s.replace(k.a.parseUrl(s).url + "?", "")
						},
						onClick: U(d, o, s, n)
					}, r.a.createElement(N.b, {
						className: Object(a.a)(i.SelectOption, t && i.mIsSelected),
						displayText: c,
						isSelected: t
					}))
				};
			var H = s("./src/reddit/components/SearchResultsSubNav/Select/SelectOption/index.m.less"),
				W = s.n(H);

			function G() {
				return (G = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const K = Object(x.a)(e => r.a.createElement(O.a, G({
					className: E.a.Component
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
						} = Object(o.e)(t => C(t, {
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
						className: E.a.Wrapper
					}, r.a.createElement(f.a, G({}, u, {
						active: p,
						className: Object(a.a)(E.a.filterButton, t && E.a.hasValue),
						onClick: b,
						variant: f.b.TAB_GROUP
					}), s, r.a.createElement(g.a, {
						name: "caret_down",
						className: Object(a.a)(E.a.caret, p && E.a.caretOpen)
					})), r.a.createElement("div", {
						id: d
					}, r.a.createElement(K, {
						className: E.a.Dropdown,
						isOpen: p,
						tooltipId: d
					}, n.map((e, t) => r.a.createElement(V, {
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
				Y = [m.Zb.Relevance, m.Zb.Hot, m.Zb.Top, m.Zb.New, m.Zb.Comments],
				J = {
					[m.Zb.Hot]: () => u.fbt._("Hot", null, {
						hk: "3c99Ga"
					}),
					[m.Zb.Relevance]: () => u.fbt._("Relevance", null, {
						hk: "LvJkD"
					}),
					[m.Zb.Top]: () => u.fbt._("Top", null, {
						hk: "bijGV"
					}),
					[m.Zb.New]: () => u.fbt._("New", null, {
						hk: "23egpt"
					}),
					[m.Zb.Comments]: () => u.fbt._("Most Comments", null, {
						hk: "4k1FoM"
					})
				};

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const X = [m.ic.HOUR, m.ic.DAY, m.ic.WEEK, m.ic.MONTH, m.ic.YEAR, m.ic.ALL],
				Q = {
					[m.ic.HOUR]: () => u.fbt._("Past Hour", null, {
						hk: "4qCarL"
					}),
					[m.ic.DAY]: () => u.fbt._("Past 24 Hours", null, {
						hk: "GI5qN"
					}),
					[m.ic.WEEK]: () => u.fbt._("Past Week", null, {
						hk: "3jQHYQ"
					}),
					[m.ic.MONTH]: () => u.fbt._("Past Month", null, {
						hk: "11eVJy"
					}),
					[m.ic.YEAR]: () => u.fbt._("Past Year", null, {
						hk: "38MavC"
					}),
					[m.ic.ALL]: () => u.fbt._("All Time", null, {
						hk: "2buTB7"
					})
				};

			function Z() {
				return (Z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const $ = [m.Yb.Sort, m.Yb.Time],
				ee = {
					[m.Yb.Sort]: e => {
						const {
							options: t,
							optionLabels: s,
							value: n
						} = h(e.queryParams, e.url, p.y, Y, m.Qb, J), o = {
							"data-testid": "search-results-filter-sort",
							options: t,
							optionLabels: s,
							searchOptions: e.searchOptions,
							tooltipId: "search-results-sort",
							value: n
						};
						return r.a.createElement(q, z({}, o, {
							active: Boolean(e.queryParams[p.y]),
							label: e.queryParams[p.y] ? s[n] : u.fbt._("Sort", null, {
								hk: "2COMme"
							}),
							type: m.Yb.Sort
						}))
					},
					[m.Yb.Time]: e => {
						const {
							options: t,
							optionLabels: s,
							value: n
						} = h(e.queryParams, e.url, p.C, X.slice().reverse(), m.Rb, Q);
						if (!e.searchOptions || e.searchOptions.sort === m.W.NEW || e.searchOptions.sort === m.W.HOT) return null;
						const o = {
							"data-testid": "search-results-filter-time",
							options: t,
							optionLabels: s,
							searchOptions: e.searchOptions,
							tooltipId: "search-results-time",
							value: n
						};
						return r.a.createElement(q, Z({}, o, {
							active: Boolean(e.queryParams[p.C]),
							label: e.queryParams[p.C] ? s[n] : u.fbt._("Time", null, {
								hk: "3hL0P3"
							}),
							type: m.Yb.Filter
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
				const t = Object(w.b)();
				return r.a.createElement(S.a, {
					to: Object(ne.a)(e.queryParams)
				}, r.a.createElement(ce, {
					onClick: () => {
						t(t => ({
							...Object(B.g)(t, e.searchOptions),
							action: "click",
							noun: "unrestrict_to_subreddit",
							source: "search_results"
						}))
					},
					"data-redditstyle": !0
				}, ie._("All reddit results", null, {
					hk: "2IBCsX"
				}), r.a.createElement(g.a, {
					name: "forward"
				})))
			};
			var le = s("./src/reddit/components/SearchResultsSubNav/index.m.less"),
				me = s.n(le);
			const ue = Object(i.c)({
					subreddit: l.A
				}),
				pe = e => {
					const {
						subreddit: t
					} = Object(o.e)(t => ue(t, e)), s = Object(c.gb)(), n = Object(c.X)(s), i = Object(c.fb)(s), l = t && !!e.searchOptions.restrict_sr && !e.shouldHideGlobalSearchLink;
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
				h = s("./src/reddit/helpers/trackers/searchResults.ts"),
				x = s("./src/reddit/icons/fonts/index.tsx"),
				f = s("./src/reddit/components/SearchSwitcher/index.m.less"),
				O = s.n(f);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class j extends r.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							searchOptions: e,
							sendEvent: t,
							subreddit: s
						} = this.props;
						t(Object(h.B)(!!s, e))
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
					} = i.a.parse(s), m = t ? c.ac.ToSubreddit : c.ac.ToGlobal, h = t ? r.a.createElement(r.a.Fragment, null, r.a.createElement("span", null, g._("Show results from", null, {
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
			}, r.a.createElement(j, e)) : r.a.createElement(j, e))
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
				h = s("./src/reddit/actions/tooltip.ts"),
				x = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				f = s("./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx"),
				O = s("./src/reddit/constants/parameters.ts"),
				g = s("./src/reddit/controls/Dropdown/index.tsx"),
				j = s("./src/reddit/controls/Dropdown/Row.tsx"),
				v = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				C = s("./src/reddit/helpers/trackers/shareToChat.ts"),
				y = s("./src/reddit/hooks/useTracking.ts"),
				E = s("./src/reddit/icons/fonts/index.tsx"),
				_ = s("./src/reddit/models/Post/index.ts"),
				k = s("./src/reddit/models/Subreddit/index.ts"),
				S = s("./src/reddit/routes/postCreation/constants.ts"),
				w = s("./src/reddit/selectors/activeModalId.ts"),
				I = s("./src/reddit/selectors/experiments/shareToChatButton.ts"),
				N = s("./src/reddit/selectors/tooltip.ts"),
				T = s("./src/reddit/components/ShareMenu/index.m.less"),
				R = s.n(T);
			const P = Object(x.a)(g.a),
				M = c()(),
				L = o.a.memo(e => {
					const t = Object(i.d)(),
						s = Object(y.a)(),
						a = Object(i.e)(I.a),
						c = Object(i.e)(t => Object(N.b)(e.dropdownId)(t)),
						x = Object(i.e)(t => Object(w.b)(Object(f.a)(e.dropdownId))(t)),
						g = Object(r.useCallback)(() => {
							t(Object(h.h)({
								tooltipId: e.dropdownId
							}))
						}, [t, e.dropdownId]),
						T = e => t(Object(p.D)(e)),
						L = Object(r.useCallback)(() => {
							e.post && (t(Object(b.d)(e.post.id)), t(Object(u.i)(Object(f.a)(e.post.id))))
						}, [t, e.post]),
						F = !e.subredditType || e.subredditType === k.f.Public,
						B = !!e.post && e.post.isCrosspostable && !e.post.isSponsored,
						D = Object(r.useCallback)(e => {
							t(Object(m.e)(e)), s(Object(C.a)())
						}, [t, s]);
					return o.a.createElement("div", {
						className: e.className,
						onClick: g,
						id: e.dropdownId
					}, e.children, o.a.createElement(P, {
						className: R.a.dropdown,
						isOpen: c,
						tooltipId: e.dropdownId
					}, o.a.createElement(j.b, {
						className: R.a.dropdownRow,
						displayText: n.fbt._("Copy link", null, {
							hk: "1tCqox"
						}),
						onClick: () => {
							const {
								permalink: t,
								post: s
							} = e;
							if (s && Object(_.q)(s)) e.sendEventWithName("share_copy", {
								referralId: M
							}), L();
							else {
								const s = Object(l.a)(t, {
									utm_source: "share",
									utm_medium: "web2x",
									context: 3
								});
								e.sendEventWithName("share_copy"), T(s)
							}
						}
					}, o.a.createElement(E.a, {
						name: "link_post",
						className: R.a.linkIcon
					})), B && o.a.createElement(j.b, {
						className: R.a.dropdownRow,
						displayText: n.fbt._("crosspost", null, {
							hk: "23zSN6"
						}),
						onClick: () => {
							e.sendEventWithName("share_crosspost"), e.post && window.open(`${S.b}?source_id=${e.post.id}`, "_blank")
						}
					}, o.a.createElement(E.a, {
						name: "crosspost",
						className: R.a.crosspostIcon
					})), F && o.a.createElement(j.b, {
						className: R.a.dropdownRow,
						displayText: n.fbt._("Embed", null, {
							hk: "2CcsuC"
						}),
						onClick: () => {
							e.sendEventWithName("share_embed"), window.open(`${d.a.rebedMediaUrl}/embed?url=${e.permalink}`, "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, o.a.createElement(E.a, {
						name: "embed",
						className: R.a.embedIcon
					})), a && o.a.createElement(j.b, {
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
							D(s)
						}
					}, o.a.createElement(E.a, {
						name: "chat",
						className: R.a.chatIcon
					}))), x && e.post && o.a.createElement(f.b, {
						className: R.a.modalBody,
						onClose: t => {
							t && (e.sendEventWithName("copy_link", {
								referralId: M
							}), T(t)), L()
						},
						url: Object(l.a)(Object(v.a)(e.post.id), {
							[O.q]: M,
							utm_source: "share",
							utm_medium: "web2x",
							utm_content: "rpan_stream"
						})
					}))
				});
			t.a = L
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
				j = Object(i.c)({
					isFeatureFlagEnabled: f.b,
					isUserInTreatment: f.e,
					userVariant: f.a
				}),
				v = Object(o.b)(j),
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
						case h.Ff.SmIcon:
							return r.a.createElement(p, {
								subredditName: n,
								rtJsonElementProps: i
							});
						case h.Ff.SmIconHc:
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
			t.b = v(C)
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
				j = s("./src/reddit/models/Widgets/index.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
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
					filterName: e => Object(h.X)(e)[b.e],
					url: e => Object(h.fb)(e)
				}),
				S = Object(a.c)({
					subredditId: (e, t) => Object(v.G)(e, t.subredditName)
				}),
				w = Object(i.b)(S),
				I = l.a.div("WidgetContent", y.a),
				N = e => {
					let {
						display: t,
						isFlairFilter: s,
						onMouseDown: n,
						onClick: r,
						...i
					} = e;
					return o.a.createElement("li", {
						className: Object(c.a)(y.a.StyledFlair, t === j.g.Cloud && y.a.cloudDisplay, {
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
			class T extends o.a.Component {
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
					}, e.map(e => o.a.createElement(N, {
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
					return o.a.createElement("ul", null, o.a.createElement(N, {
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
					}, o.a.createElement(I, null, i && this.renderSelectedFlairFilter(i), !i && this.renderFlairFilters(r), a && this.renderButton()))
				}
			}
			t.a = k(w(Object(u.c)(T)))
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
				j = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
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
					postsById: j.T,
					postIds: Object(o.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: r
						} = t;
						return Object(j.D)(e, s, n, r)
					}),
					subredditsById: v.cb,
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
						})), e(d.L(t))
					},
					fireAdPixelsOfType: (t, s) => {
						e(d.z(t, s))
					},
					trackOnPostEnteredViewport: (t, s, n, r) => {
						e(d.O(t, n, r))
					},
					trackOnPostExitedViewport: (t, s, n, r) => {
						e(d.P(t, n, r))
					},
					showModalOnScroll: () => e(d.cb()),
					surveyTriggerScrollCounted: () => e(Object(m.l)())
				}),
				w = e => Object(b.b)({
					...e
				}),
				I = (e, t, s, n) => {
					const {
						listingKey: r,
						hostPostData: o,
						listingBelowVariant: i
					} = n;
					return Object(h.k)(e, t, "post", r, o, i, void 0)
				},
				N = Object(n.b)(k, S, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: w,
					postClickEventFactory: I
				}));
			t.a = e => Object(u.c)(E(N(e)))
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
				return j
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
			const j = e => {
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
				v = e => d.a.createElement(j, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = g
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
			const o = (e, t) => e.includes(n.cc.Comments) ? r.h.Comments : t || e.includes(n.cc.Posts) ? r.h.Posts : e.includes(n.cc.Users) && !e.includes(n.cc.Subreddits) ? r.h.People : r.h.Listings
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
					i = e && e[r.p] || "";
				return t ? (i = i.replace("flair:", "flair_name:"), s = `/r/${t}/search`, o = "1", Object(n.a)(s, {
					[r.p]: i,
					[r.s]: o
				})) : (i = i.replace("flair_name:", "flair:"), Object(n.a)(s, {
					[r.p]: i
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
				return j
			})), s.d(t, "j", (function() {
				return v
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
						...c.n(e),
						action: o.c.CLICK,
						subreddit: c.ib(e)
					};
					return void 0 === t ? s : {
						...s,
						post: c.J(e, t),
						postCollection: c.L(e, {
							postId: t
						}),
						postEvent: c.M(e, {
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
					...c.n(e),
					subreddit: c.ib(e),
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
				j = () => e => ({
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
				C = () => e => ({
					...u(e),
					source: n.collectionComposer,
					noun: r.collectionSelect
				}),
				y = e => t => ({
					...c.n(t),
					subreddit: c.ib(t),
					source: n.collectionComposer,
					action: o.c.CLICK,
					noun: r.collectionDelete,
					postCollection: c.K(t, {
						collectionId: e
					})
				}),
				E = e => t => ({
					...u(t),
					source: n.collectionComposer,
					noun: r.collectionEdit,
					postCollection: c.K(t, {
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
						...m.n(e),
						source: n.postComposer,
						action: a.c.CLICK,
						noun: "event_create",
						subreddit: m.ib(e)
					})
				},
				h = e => {
					Object(u.a)({
						...m.n(e),
						source: n.postComposer,
						action: a.c.CLICK,
						noun: "event_edit",
						subreddit: m.ib(e),
						postEvent: j(e),
						postComposer: v(e)
					})
				},
				x = () => e => ({
					source: n.eventComposer,
					action: a.c.VIEW,
					noun: a.b.SCREEN,
					actionInfo: p(e),
					postEvent: j(e)
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
					postComposer: v(t),
					postEvent: y(e)
				}),
				j = e => {
					const t = Object(l.p)(e);
					return t && y(t)
				},
				v = e => C(Object(l.p)(e)),
				C = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === c.j.AtEventTime ? Object(i.f)(e.startDate).getTime() / r.Sb : void 0
					}
				},
				y = e => {
					const t = Object(i.f)(e.startDate).getTime() / r.Sb,
						s = Object(i.f)(e.endDate).getTime() / r.Sb;
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
						subreddit: m.ib(e)
					};
					return t ? {
						...s,
						post: m.J(e, t),
						postEvent: m.M(e, {
							postId: t
						}),
						postCollection: m.L(e, {
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
				subreddit: Object(r.ib)(e)
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
				return j
			})), s.d(t, "d", (function() {
				return v
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
					...m.n(e),
					source: r.LINK,
					action: o.c.CLICK,
					noun: n.INTERNAL_LINK
				}),
				p = e => ({
					...m.n(e),
					source: r,
					screen: m.ab(e),
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
						d = Object(l.A)(e, {
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
						post: m.J(e, s.id),
						subreddit: m.jb(e, n),
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
					subreddit: m.kb(t, e),
					screen: m.ab(t)
				}),
				O = (e, t) => s => ({
					...p(s),
					source: r.DISCOVERY_UNIT,
					action: o.c.VIEW,
					noun: n.ITEM_POST,
					post: m.J(s, t),
					subreddit: m.kb(s, e),
					screen: m.ab(s)
				}),
				g = (e, t) => s => ({
					...p(s),
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.ITEM_POST,
					post: m.J(s, t),
					subreddit: m.kb(s, e),
					screen: m.ab(s)
				}),
				j = e => t => ({
					...p(t),
					subreddit: m.jb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT
				}),
				v = e => t => ({
					...p(t),
					subreddit: m.jb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				C = e => t => ({
					...p(t),
					subreddit: m.jb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT_UNSUBSCRIBE
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
				return z
			})), s.d(t, "default", (function() {
				return X
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
				j = s("./src/reddit/components/SearchResultsSidebar/index.tsx"),
				v = s("./src/reddit/components/SearchResultsSubNav/index.tsx"),
				C = s("./src/reddit/components/SearchSwitcher/index.tsx"),
				y = s("./src/reddit/components/TrackingHelper/index.tsx"),
				E = s("./src/reddit/constants/covid.ts"),
				_ = s("./src/reddit/constants/page.ts"),
				k = s("./src/reddit/constants/parameters.ts"),
				S = s("./src/reddit/contexts/PageLayer/index.tsx"),
				w = s("./src/reddit/helpers/correlationIdTracker.ts"),
				I = s("./src/reddit/helpers/search/searchImpressionId.ts"),
				N = s("./src/reddit/helpers/search/searchQueryId.ts"),
				T = s("./src/reddit/helpers/search/searchTabType.ts"),
				R = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				P = s("./src/reddit/helpers/search/switchSearchScope.ts"),
				M = s("./src/reddit/helpers/trackers/searchResults.ts"),
				L = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				F = s("./src/reddit/hooks/useTheme.ts"),
				B = s("./src/reddit/layout/page/SearchResults/index.tsx"),
				D = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				A = s("./src/reddit/selectors/searchFix.ts"),
				U = s("./src/reddit/selectors/searchQueryId.ts"),
				V = s("./src/reddit/selectors/subreddit.ts"),
				H = s("./node_modules/lodash/isEmpty.js"),
				W = s.n(H),
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
			const Y = 3e3,
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
				z = {
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

			function X(e) {
				let {
					location: t,
					match: s
				} = e;
				const n = Object(c.d)(),
					r = Object(S.gb)(),
					u = Object(y.b)(),
					H = Object(F.a)(),
					G = Object(i.useRef)(!1),
					X = Object(i.useRef)(!1),
					Q = Object(c.e)(e => Object(V.A)(e, {
						subredditName: s.params.subredditName
					})),
					Z = Object(c.e)(e => Object(O.a)(e, {
						pageLayer: r
					})),
					$ = Object(c.e)(e => Object(A.c)(e, {
						pageLayer: r
					})),
					{
						searchQueryId: ee
					} = Object(c.e)(e => Object(U.a)(e)),
					te = Object(S.X)(r),
					se = Object(S.db)(r),
					[ne, re] = Object(i.useState)(!1),
					oe = Object(l.a)(te) || null;
				Object(L.c)(), Object(i.useEffect)((function() {
					return () => {
						I.a.clear(R.a.SERP)
					}
				}), []), Object(i.useEffect)(() => {
					let e = 0;
					return e = window.setTimeout(() => n(Object(h.j)()), Y), () => {
						Object(w.b)(w.a.SearchResults), window.clearTimeout(e)
					}
				}, []), Object(i.useEffect)(() => {
					te !== oe && (G.current = !1, re(!1)), te && oe && te[k.p] !== oe[k.p] && (Object(w.b)(w.a.SearchResults), Object(w.d)(w.a.SearchResults))
				}, [te, oe]), Object(i.useEffect)(() => {
					const e = {
							...te,
							type: void 0
						},
						t = {
							...oe,
							type: void 0
						};
					!p()(e, t) && !W()(oe) && I.a.update(R.a.SERP)
				}, [te, oe]);
				const ie = s.params.multiredditName,
					ae = s.params.subredditName || ie || "",
					ce = s.params.username,
					de = Object(m.e)(o()(te || {}, k.t)),
					le = Object(m.b)(ae, ce, de);
				ee && (N.a.set(R.a.SERP, le, ee), n(Object(b.c)()));
				const me = Q && de.restrict_sr,
					ue = Object(T.a)(de.type, me),
					pe = {
						...de,
						type: [d.cc.Posts, d.cc.Subreddits, d.cc.Users]
					},
					be = Object(m.b)(ae, ce, pe),
					he = {
						redesign: !0,
						searchOptions: de
					};
				let xe;
				Object(S.Q)(r) || Object(S.C)(r) ? xe = a.a.createElement(C.a, q({}, he, {
					url: Object(P.a)(te)
				})) : Z && $ && (xe = a.a.createElement(C.a, q({}, he, {
					subreddit: Z,
					url: Object(P.a)(te, Z.name)
				})));
				const fe = z[ue].tab,
					Oe = Boolean(me) || z[ue].sidebar && !ie,
					ge = z[ue].filterNav,
					je = Object(D.a)({
						redditStyle: !0,
						theme: H
					});
				return Object(i.useEffect)(() => {
					if (fe === _.h.Comments && !X.current) {
						let e = 0;
						return e = window.setTimeout(() => {
							X.current = !0, n(Object(h.i)())
						}, Y), () => {
							window.clearTimeout(e)
						}
					}
				}, [fe]), a.a.createElement(B.a, {
					backgroundColor: je.canvas,
					content: a.a.createElement(a.a.Fragment, null, a.a.createElement(x.a, null), se && !ne && (() => {
						const e = e => u(Object(M.f)(e, Object(m.e)(o()(te || {}, k.t))));
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
					}), ge && a.a.createElement(v.a, {
						key: "subNav",
						searchOptions: de,
						shouldHideGlobalSearchLink: !0,
						subredditName: ae,
						tab: fe
					}), xe && a.a.createElement("div", {
						className: K.a.searchSwitcherContainer
					}, xe)),
					sidebar: Oe && a.a.createElement(j.a, {
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
			const a = Object(n.a)(i.Q, i.P, (e, t) => e || t),
				c = Object(n.a)(e => Object(o.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: r.R
				}), e => e === r.bb.Enabled)
		},
		"./src/reddit/selectors/experiments/econ/marketplace.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
					return !(Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: n.le
					}) === n.Ed)
				},
				i = e => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: n.me
				}) === n.Ed
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
				experimentEligibilitySelector: i.Q,
				experimentName: n.n
			}) === n.g.Enabled
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
				experimentEligibilitySelector: i.Q,
				experimentName: r.Bc
			}), e => e === r.Ed)
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
					experimentName: r.Uf,
					experimentEligibilitySelector: o.a
				}), e => e),
				a = Object(n.a)(i, e => e === r.Lf)
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
				return x
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "f", (function() {
				return O
			})), s.d(t, "c", (function() {
				return g
			})), s.d(t, "g", (function() {
				return j
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
						const t = Object(i.V)(e, {
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
					const n = Object(i.Z)(e, {
						subredditName: s.name
					});
					return n && n.postIds && n.postIds.length ? n.postIds : m
				}),
				p = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(i.V)(e, {
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
				h = [3],
				x = Object(n.a)((e, t) => {
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
					return h.forEach(t => {
						let s = i + t;
						if (!(s >= a.length)) {
							for (; s < a.length && !b(e, s, t, a, r);) s += 1;
							s < a.length && (c.push(s), i = s)
						}
					}), c
				}),
				f = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				O = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				g = e => e.focusedVerticals.category,
				j = e => e.focusedVerticals.lastLoadedEnv,
				v = e => {
					const t = Object(a.P)(e),
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
						experimentName: n.zf
					}) || ""
				},
				d = e => {
					const t = c(e);
					return t === n.Ff.SmIcon || t === n.Ff.SmIconHc
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
					const n = Object(i.Z)(e, {
						subredditName: s
					});
					return (n && n.postIds || []).slice(0, 2)
				}
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"eb5aa411d697"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SearchResults.450b745fc80d50dfd05c.js.map