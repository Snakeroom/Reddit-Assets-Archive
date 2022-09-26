// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~SearchResults.0ed0b110c2520624c0d5.js
// Retrieved at 9/26/2022, 3:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~SearchResults"], {
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
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "b", (function() {
				return w
			}));
			var n, r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/performanceTimings/index.tsx"),
				i = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				d = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(n || (n = {}));
			var c, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				m = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(c || (c = {}));
			var u = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				p = s("./src/reddit/selectors/platform.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(r.a)(i.g),
				g = Object(r.a)(i.e),
				f = Object(r.a)(i.h),
				C = Object(r.a)(i.c),
				x = Object(r.a)(i.f),
				O = Object(r.a)(i.j),
				v = Object(r.a)(i.i),
				y = () => async (e, t, s) => {
					let {
						gqlContext: r
					} = s;
					const o = t(),
						i = Object(u.e)(o),
						c = Object(u.d)(o),
						p = Object(b.P)(o);
					if (i || !c) return;
					e(f());
					let x = !1;
					try {
						const t = p ? n.LoggedInGeo : n.LoggedOutGeo,
							s = await ((e, t, s) => Object(d.a)(e, {
								...a,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(r(), t);
						if (s.ok && s.body) {
							const {
								data: t
							} = s.body;
							if (E(t)) {
								if (k(t)) {
									e(C({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), x = !0
								} else if (j(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: n,
											interactedSubreddit: r,
											category: o
										} = s.focusRecommendations[0],
										i = [n, r],
										d = Object(m.d)(i),
										a = Object(l.b)(i),
										c = Object(m.c)(n),
										u = {
											recommendedSubredditIds: [n.id],
											interactedSubredditIds: [r.id],
											subreddits: d,
											subredditsAboutInfo: a,
											subredditTopContent: c,
											category: o,
											lastLoadedEnv: "client"
										};
									e(h(u)), x = !0
								}
							} else x = !1
						}
					} catch (O) {
						x = !1
					}
					x || e(g({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, E = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, k = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, j = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						n = t && t.type;
					return !!(s && !k(e) && n === c.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, w = () => async (e, t, s) => {
					var n, r;
					const i = t(),
						d = Object(u.g)(i);
					if (Object(u.f)(i) || null === d || "client" === d) {
						const s = null === (r = null === (n = Object(p.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							d = Object(b.Q)(i);
						return Object(o.i)(() => e(y()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: d
						})
					}
					if ("server" === d) return e(x({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/subreddit/muting.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return E
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/toaster.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/redditGQL/operations/DeleteSubredditMuteSettings.json"),
				a = s("./src/redditGQL/operations/UpdateSubredditMuteSettings.json"),
				c = s("./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json");
			const l = (e, t) => Object(i.a)(e, {
					...a,
					variables: {
						input: {
							subredditId: t
						}
					}
				}),
				m = (e, t) => Object(i.a)(e, {
					...d,
					variables: {
						input: {
							subredditId: t
						}
					}
				});
			var u = s("./src/reddit/models/Toast/index.ts"),
				p = s("./src/reddit/actions/subreddit/constants.ts"),
				b = s("./src/reddit/actions/subreddit/notifications.ts");
			const h = e => Object(o.f)({
					id: e,
					kind: u.b.Error,
					text: n.fbt._("An error has occured. Please try again later", null, {
						hk: "2FpsLy"
					})
				}),
				g = (e, t) => Object(o.f)({
					kind: u.b.SuccessCommunityGreen,
					text: n.fbt._("Muted r/{subreddit name}", [n.fbt._param("subreddit name", e)], {
						hk: "Mg9mO"
					}),
					buttonText: n.fbt._("Undo", null, {
						hk: "1lx02Y"
					}),
					buttonAction: t
				}),
				f = (e, t) => Object(o.f)({
					kind: u.b.SuccessCommunityGreen,
					text: n.fbt._("Unmuted r/{subreddit name}", [n.fbt._param("subreddit name", e)], {
						hk: "Fhnht"
					}),
					buttonText: n.fbt._("Undo", null, {
						hk: "2siioQ"
					}),
					buttonAction: t
				}),
				C = Object(r.a)(p.C),
				x = (Object(r.a)(p.f), Object(r.a)(p.B), e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, r, o) => {
						let {
							gqlContext: i
						} = o;
						if ((await l(i(), t)).ok) n && n(), g(s, O({
							subredditId: t,
							subredditName: s
						}));
						else {
							e(h(`error-muting-${t}`))
						}
					}
				}),
				O = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, r, o) => {
						let {
							gqlContext: i
						} = o;
						if ((await m(i(), t)).ok) n && n(), f(s, x({
							subredditId: t,
							subredditName: s
						}));
						else {
							e(h(`error-muting-${t}`))
						}
					}
				},
				v = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, r, o) => {
						let {
							gqlContext: i
						} = o;
						if ((await l(i(), t)).ok) n && n(), e(Object(b.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !0
								}
							}
						})), e(g(s, y({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(h(`error-muting-${t}`))
						}
					}
				},
				y = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, r, o) => {
						let {
							gqlContext: i
						} = o;
						if ((await m(i(), t)).ok) n && n(), e(Object(b.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !1
								}
							}
						})), e(f(s, v({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(h(`error-muting-${t}`))
						}
					}
				},
				E = e => {
					let {
						subredditId: t,
						notificationLevel: s
					} = e;
					return async (e, r, d) => {
						let {
							gqlContext: a
						} = d;
						const l = Object(b.a)(s);
						(await ((e, t, s) => Object(i.a)(e, {
							...c,
							variables: {
								input: {
									...s,
									subredditId: t
								}
							}
						}))(a(), t, l)).ok ? (e(C({
							subredditId: t,
							notificationLevel: s
						})), e(Object(o.f)({
							kind: u.b.SuccessCommunityGreen,
							text: Object(b.b)(s)
						}))) : e(Object(o.f)({
							kind: u.b.Error,
							text: n.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
								hk: "4avFFV"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return u
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "d", (function() {
				return f
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				i = s("./src/reddit/actions/notificationsInbox/index.ts"),
				d = s("./src/reddit/actions/subreddit/constants.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = s("./src/reddit/models/Subreddit/index.ts"),
				m = s("./src/reddit/models/Toast/index.ts");
			const u = Object(r.a)(d.v),
				p = Object(r.a)(d.u),
				b = Object(r.a)(d.t),
				h = e => {
					switch (e) {
						case l.b.FREQUENT:
							return {
								isSubredditUpdatesInterestingPostEnabled: !0, isUpdateFromSubredditEnabled: !0
							};
						case l.b.LOW:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !0
							};
						case l.b.OFF:
						default:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !1
							}
					}
				},
				g = e => {
					switch (e) {
						case l.b.OFF:
							return n.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case l.b.FREQUENT:
							return n.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case l.b.LOW:
							return n.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
								hk: "4x3TS8"
							});
						default:
							return null
					}
				};
			const f = e => {
				let {
					subredditId: t,
					notificationLevel: s,
					successCallback: r,
					undoCallback: d
				} = e;
				return async (e, l, f) => {
					let {
						gqlContext: C
					} = f;
					var x, O, v;
					e(p());
					const y = h(s),
						E = await Object(c.b)(C(), t, y);
					if ((null === (O = null === (x = E.error) || void 0 === x ? void 0 : x.fields) || void 0 === O ? void 0 : O.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(E.body) && (null === (v = E.body.data.updateSubredditNotificationSettings.errors) || void 0 === v ? void 0 : v.length)) return e(b()), e(Object(a.f)({
						kind: m.b.Error,
						text: n.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					E.ok && (e(Object(o.c)({
						subredditId: t,
						notificationLevel: s
					})), e(u({
						subredditAboutInfo: {
							[t]: {
								notificationLevel: s
							}
						}
					})), r && r(), e(d ? Object(a.f)(Object(a.e)(g(s), m.b.Undo, n.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(i.i)(t, d))) : Object(a.f)(Object(a.e)(g(s), m.b.SuccessCommunityGreen))))
				}
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/BackToTop/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/constants/elementIds.ts"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/components/BackToTop/index.m.less"),
				c = s.n(a);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), m = e => {
				if (e) {
					const e = document.getElementById(i.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: s,
					style: n
				} = e;
				return r.a.createElement("div", {
					className: Object(o.a)(t, c.a.container),
					style: n
				}, r.a.createElement(d.l, {
					className: c.a.button,
					onClick: () => m(s)
				}, l._("Back to Top", null, {
					hk: "YjBtV"
				})))
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
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/RichTextEditor/Placeholder.tsx"),
				c = s("./src/reddit/helpers/styles/mixins/loading.ts"),
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
				g = Object(d.c)({
					isCommentBoxDesignEnabled: l.a
				}),
				f = Object(i.b)(g),
				C = e => {
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
				x = () => o.a.createElement("div", {
					className: Object(m.a)(p.a.byline, Object(c.a)({
						isLoading: !0
					}))
				}),
				O = () => o.a.createElement("div", {
					className: Object(m.a)(p.a.avatar, Object(c.a)({
						isLoading: !0
					}))
				}),
				v = e => o.a.createElement(C, e, e.isCommentBoxDesignEnabled ? o.a.createElement(O, null) : o.a.createElement(x, null), o.a.createElement(a.a, {
					className: p.a.editor,
					isCommentBoxDesignEnabled: e.isCommentBoxDesignEnabled,
					isLoading: !0,
					toolbarPosition: h
				})),
				y = f(v),
				E = Object(n.a)({
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
				k = e => o.a.createElement(E, b({}, e, {
					fallback: o.a.createElement(y, {
						isTopLevelComment: e.isTopLevelComment
					})
				}));
			t.a = k
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
				d = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				a = s("./src/reddit/components/LottieAnimation/index.tsx"),
				c = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.m.less"),
				l = s.n(c);
			! function(e) {
				e.Lottie = "lottie"
			}(n || (n = {}));
			const m = {
				threshold: [.75, .001]
			};
			t.b = i.a.memo(e => {
				const t = Object(o.useRef)(null),
					[s, c] = Object(o.useState)(!1),
					u = Object(o.useCallback)(e => {
						e.forEach(e => {
							const {
								intersectionRatio: t
							} = e;
							t >= .75 && c(!1), t <= .001 && c(!0)
						})
					}, []);
				Object(d.a)(t, u, m);
				const p = e.type;
				return i.a.createElement("div", {
					className: Object(r.a)(l.a.effectContainer, l.a[p + "EffectContainer"]),
					ref: t,
					role: "presentation"
				}, p === n.Lottie && i.a.createElement(a.a, {
					assetUrl: e.assetUrl,
					prefersReducedAnimation: e.prefersReducedAnimation,
					hidden: s
				}))
			})
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
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/models/PostDraft/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/makeDraftKey/index.ts"),
				m = s("./src/lib/objectSelector/index.ts"),
				u = s("./src/reddit/actions/comment/index.ts"),
				p = s("./src/reddit/actions/comment/authoring.ts"),
				b = s("./src/reddit/actions/comment/moderation.ts"),
				h = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				g = s("./src/reddit/icons/fonts/Expand/index.tsx"),
				f = s("./src/reddit/components/Comments/Comment/ExpandButton/index.m.less"),
				C = s.n(f);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var O, v, y = s("./node_modules/lodash/defer.js"),
				E = s.n(y),
				k = s("./src/lib/lessComponent.tsx"),
				j = s("./src/reddit/actions/tooltip.ts"),
				w = s("./src/reddit/selectors/tooltip.ts"),
				S = s("./src/reddit/actions/gold/modals.ts"),
				_ = s("./src/reddit/actions/modal.ts"),
				I = s("./src/reddit/actions/reportFlow/index.ts"),
				N = s("./src/reddit/helpers/correlationIdTracker.ts"),
				F = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				R = s("./src/reddit/helpers/trackers/lightbox.ts"),
				T = s("./src/reddit/models/Comment/index.ts"),
				P = s("./src/reddit/selectors/activeModalId.ts"),
				M = s("./src/reddit/selectors/comments.ts"),
				L = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				D = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				V = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				A = s("./src/reddit/selectors/posts.ts"),
				B = s("./src/reddit/selectors/subreddit.ts"),
				U = s("./src/reddit/selectors/user.ts"),
				G = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				W = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				H = s.n(W);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(O || (O = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(v || (v = {}));
			const K = (e, t) => {
					const s = H.a[t],
						n = H.a[e];
					return Object(c.a)(s, n)
				},
				z = e => Object(c.a)(H.a[`depth${Math.min(3*Math.ceil(e.depth/3),10)}`], {
					[H.a.isInOverlay]: e.isInOverlay,
					[H.a.isModModeEnabled]: e.isModModeEnabled,
					[H.a.isFollowCommentEnabled]: e.isFollowCommentEnabled
				});
			var q = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				Y = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				Q = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				J = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				X = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				Z = s("./src/reddit/components/ModModeReports/helpers.ts"),
				$ = s("./src/reddit/components/OverflowMenu/index.tsx"),
				ee = s("./src/reddit/components/ReportFlow/index.tsx"),
				te = s("./src/reddit/components/ReportFlow/new.tsx"),
				se = s("./src/reddit/components/ShareMenu/index.tsx"),
				ne = s("./src/reddit/components/TrackingHelper/index.tsx"),
				re = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				oe = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				ie = s("./src/reddit/helpers/trackers/modTools.ts"),
				de = s("./src/reddit/layout/row/Inline/index.tsx"),
				ae = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.tsx"),
				ce = s("./src/reddit/icons/fonts/index.tsx"),
				le = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				me = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				ue = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				pe = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				be = s("./src/reddit/icons/fonts/Report/index.tsx"),
				he = s("./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx"),
				ge = s("./src/devPlatform/constants.ts"),
				fe = s("./src/reddit/selectors/experiments/devPlatform.ts"),
				Ce = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				xe = s.n(Ce);
			const Oe = k.a.wrapped(le.a, "CommentIcon", xe.a),
				ve = k.a.wrapped(be.a, "Report", xe.a),
				ye = k.a.wrapped(ue.a, "IgnoreReport", xe.a),
				Ee = k.a.wrapped(X.a, "ModActionsMenu", xe.a),
				ke = k.a.div("OverflowMenuSpacer", xe.a),
				je = k.a.wrapped($.a, "DropdownRow", xe.a),
				we = k.a.wrapped(de.a, "Flatlist", xe.a),
				Se = k.a.button("Button", xe.a),
				_e = k.a.wrapped(q.a, "ModToolsFlatlist", xe.a),
				Ie = k.a.wrapped(re.a, "ViewReportsDropdown", xe.a),
				Ne = e => `Comment-${e}--Modal--DeleteComment`,
				Fe = e => `Distinguish--Dropdown--${e}`,
				Re = e => `${e}-overflow-menu`,
				Te = e => `View--Reports--${e}`,
				Pe = Object(d.c)({
					claimedFreeAward: V.b,
					currentUser: U.k,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(P.a)(e) === Ne(s.id)
					},
					isDistinguishDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(w.b)(Fe(s.id))(e)
					},
					isFollowed: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(M.y)(e, {
							commentId: s.id
						})
					},
					isFollowedCommentExpired: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(M.A)(e, {
							commentId: s.id
						})
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(M.D)(e, {
							commentId: s.id
						})
					},
					isReportsDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(w.b)(Te(s.id))(e)
					},
					isLoggedIn: U.Q,
					postIsArchived: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(A.A)(e, {
							postId: s.postId
						})
					},
					isBlockedUserBannerEnabled: (e, t) => {
						let {
							comment: s
						} = t;
						return !!Object(A.w)(e, {
							postId: s.postId
						}) && Object(L.a)(e)
					},
					postAuthorIsBlocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(A.w)(e, {
							postId: s.postId
						})
					},
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(A.B)(e, {
							postId: s.postId
						})
					},
					commentPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(M.m)(e, {
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
						return Object(M.J)(e, {
							commentId: s.id
						})
					},
					subredditAboutInfo: (e, t) => {
						let {
							subreddit: s
						} = t;
						return s ? Object(B.x)(e, {
							subredditName: s.name
						}) : void 0
					},
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(A.V)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: D.a,
					isPostUnrepliable: (e, t) => {
						let {
							comment: s
						} = t;
						var n;
						return null === (n = Object(A.G)(e, {
							postId: s.postId
						})) || void 0 === n ? void 0 : n.unrepliableReason
					},
					isTrueblockPCBlockeeEnabled: L.e,
					isDevPlatformEnabled: e => Object(fe.a)(e)
				});
			class Me extends o.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(R.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(ie.b)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(ie.f)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						this.props.sendEvent(Object(ie.e)("edit", this.props.comment.id)), this.props.handleEdit()
					}, this.handleGild = async () => {
						var e;
						const t = Object(N.d)(N.a.GildingFlow, !0);
						this.props.onGildClick(t, null === (e = this.props.claimedFreeAward) || void 0 === e ? void 0 : e.id);
						const {
							clickGildEvent: n
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(n(this.props.comment.id))
					}, this.handleDelete = () => {
						this.props.sendEvent(Object(ie.e)("delete", this.props.comment.id)), this.props.toggleDeleteCommentModal()
					}, this.handleReportClick = () => {
						this.props.sendEvent(Object(ie.b)("report", this.props.comment.id)), this.props.onReportClick()
					}, this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(ie.b)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleFollow = () => {
						const {
							onCommentFollow: e,
							sendEvent: t,
							comment: s,
							isFollowed: n
						} = this.props;
						e(n ? T.a.UNFOLLOWED : T.a.FOLLOWED), t(n ? Object(ie.g)("follow", s.id) : Object(ie.b)("follow", s.id))
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(ie.c)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? o.a.createElement(te.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: ee.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : o.a.createElement(ee.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: ee.b,
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
						deleteComment: d,
						depth: a,
						handleReply: l,
						isAvatarsInCommentsEnabled: m,
						isFollowed: u,
						isLoggedIn: p,
						isPendingDeletion: b,
						onDistinguishComment: h,
						onIgnoreReports: g,
						onToggleReportsDropdown: f,
						moderatorPermissions: C,
						modModeEnabled: x,
						postIsArchived: y,
						postAuthorIsBlocked: k,
						isBlockedUserBannerEnabled: j,
						postIsLocked: w,
						renderedInOverlay: S,
						sendEvent: _,
						subreddit: I,
						subredditAboutInfo: N,
						toggleDeleteCommentModal: R,
						toggleSendReplies: P,
						trackCommentClick: M,
						isPostUnrepliable: L,
						isTrueblockPCBlockeeEnabled: D,
						isDevPlatformEnabled: V
					} = this.props, A = Object(F.a)(C), B = !!s && s.displayText === e.author, U = !!s && s.isEmployee, W = D && e.unrepliableReason, H = D && L, q = !(k && D) && !(Object(T.g)(e) && D) && !(L && D) && !W && !H && !(N && N.userIsBanned) && (w || y || k && j || A && p || e.isLocked ? A && p : p || m), X = Object(Z.a)(e), ee = A && B && !e.bannedBy, te = B && U && !e.bannedBy, ne = ee || te, re = !(Object(T.g)(e) && D) && s && e.isGildable && !H && !(W && "[deleted]" === e.author), de = !y && !W, le = [];
					q && le.push(o.a.createElement(Se, {
						disabled: b,
						key: "reply",
						onClick: () => {
							l(), E()(() => M("reply", e.id)())
						}
					}, o.a.createElement(Oe, null), n.fbt._("Reply", null, {
						hk: "dq9W0"
					}))), re && le.push({
						breakpointGroup: v.LoggedInUser,
						icon: o.a.createElement(ae.a, null),
						isIconOverflowOnly: !0,
						key: "award",
						onClick: this.handleGild,
						text: () => n.fbt._("Give Award", null, {
							hk: "1GmM1v"
						})
					}), le.push(o.a.createElement(se.a, {
						dropdownId: `${e.id}-comment-share-menu`,
						key: "share",
						permalink: i,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == I ? void 0 : I.type
					}, o.a.createElement(Se, {
						onClick: () => this.sendCommentEventWithName("share")
					}, n.fbt._("Share", null, {
						hk: "3Ak3Tw"
					})))), B || le.push({
						breakpointGroup: v.LoggedInUser,
						icon: o.a.createElement(be.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: () => n.fbt._("Report", null, {
							hk: "4oVcnd"
						})
					}), le.push({
						breakpointGroup: v.LoggedInUser,
						icon: o.a.createElement(ce.a, {
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
					}), B && le.push({
						breakpointGroup: v.LoggedInUser,
						icon: o.a.createElement(ce.a, {
							name: "edit"
						}),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: () => n.fbt._("Edit", null, {
							hk: "1nftDt"
						})
					}), de && le.push({
						breakpointGroup: v.LoggedInUser,
						icon: o.a.createElement(ce.a, {
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
					const ue = le.map(e => o.a.isValidElement(e) ? e : o.a.createElement(Se, {
							className: K(e.breakpointGroup, O.HideIfVWSmaller),
							disabled: b,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text())),
						fe = le.map(e => o.a.isValidElement(e) ? null : o.a.createElement(je, {
							className: K(e.breakpointGroup, O.HideIfVWLarger),
							displayText: e.text(),
							key: e.key,
							onClick: e.onClick,
							textClassName: xe.a.dropdownRowText
						}, e.icon));
					return o.a.createElement(r.Fragment, null, o.a.createElement(we, {
						className: Object(c.a)(z({
							depth: a,
							isInOverlay: S,
							isModModeEnabled: A && x || V,
							isFollowCommentEnabled: de
						}), t)
					}, ue, o.a.createElement(ke, {
						className: B ? void 0 : K(v.LoggedInUser, O.HideIfVWLarger)
					}, o.a.createElement($.b, {
						className: xe.a.overflowMenu,
						disabled: b,
						dropdownId: Re(e.id),
						onClick: () => _(Object(ie.b)("comment_overflow_menu", e.id))
					}, fe, B && o.a.createElement(o.a.Fragment, null, o.a.createElement(je, {
						displayText: n.fbt._("Delete comment", null, {
							hk: "4lMUDO"
						}),
						onClick: this.handleDelete,
						textClassName: xe.a.dropdownRowText
					}, o.a.createElement(ce.a, {
						name: "delete"
					})), o.a.createElement(oe.a, {
						text: n.fbt._("Send me reply notifications", null, {
							hk: "4ebRRu"
						}),
						onClick: P,
						isSelected: this.props.sendRepliesToggled
					})), o.a.createElement(he.a, {
						contextType: ge.a.COMMENT,
						contextData: e
					}))), this.props.isConfirmModalOpen && o.a.createElement(Q.a, {
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
						onConfirm: d,
						toggleModal: R,
						trackClick: () => {},
						withOverlay: !0
					}), A && o.a.createElement(o.a.Fragment, null, x && o.a.createElement(_e, {
						className: K(v.Moderator, O.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: B
					}), o.a.createElement(Ee, {
						className: x ? K(v.Moderator, O.HideIfVWLarger) : void 0,
						dropdownId: `${e.id}-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: () => _(Object(ie.b)("comment_mod_action_menu", e.id))
					}, o.a.createElement(pe.a, null), o.a.createElement(G.a, {
						comment: e,
						tooltipId: `${e.id}-mod-actions-menu`
					}))), Object(Z.c)(e) && !x && o.a.createElement(Y.a, {
						text: `${X}`,
						onClick: () => {
							f(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: Te(e.id)
					}, o.a.createElement(Ie, {
						model: e,
						onIgnoreReports: () => {
							g(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Te(e.id)
					}), e.ignoreReports ? o.a.createElement(ye, null) : o.a.createElement(ve, null)), ne && o.a.createElement(Y.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, o.a.createElement(me.a, null), o.a.createElement(J.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: U,
						isUserMod: A,
						onDistinguishComment: h,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Fe(e.id)
					}))), (!this.props.renderedInOverlay || !this.props.isCommentFocused) && this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Le = Object(i.b)(Pe, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n
					} = t;
					return {
						deleteComment: () => n && e(Object(p.i)(s.id, s.postId)),
						handleDelete: () => {
							e(Object(_.i)(Ne(s.id))), e(Object(j.h)({
								tooltipId: Re(s.id)
							}))
						},
						handleEdit: () => {
							const t = s.media && s.media.rteMode;
							n && e(Object(p.e)({
								commentId: s.id,
								draftKey: Object(l.a)(a.c.edit, s.id),
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
						onFollowedCommentExpire: () => e(Object(u.p)({
							id: s.id,
							expiresAt: 0
						})),
						onGildClick: (t, n) => e(Object(S.d)({
							awardId: n,
							correlationId: t,
							thingId: s.id
						})),
						onIgnoreReports: () => e(Object(b.g)(s.id)),
						onReportClick: () => e(Object(I.c)(s.id)),
						onToggleSave: () => e(Object(u.o)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(j.h)({
							tooltipId: Fe(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(j.h)({
							tooltipId: Te(s.id)
						})),
						toggleDeleteCommentModal: () => e(Object(_.i)(Ne(s.id))),
						toggleSendReplies: () => e(Object(p.l)(s.id))
					}
				})(Object(ne.c)(Me)),
				De = s("./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less"),
				Ve = s.n(De);
			var Ae = o.a.memo(e => {
					const {
						hexColor: t
					} = e;
					return o.a.createElement("div", {
						className: Ve.a.glowHighlightContainer,
						role: "presentation",
						style: {
							boxShadow: `#${t} 0px 0px 14px`
						}
					})
				}),
				Be = s("./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less"),
				Ue = s.n(Be);
			var Ge = o.a.memo(e => o.a.createElement("div", {
					className: Ue.a.gradientHighlightContainer,
					role: "presentation"
				})),
				We = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.tsx"),
				He = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Ke = s("./src/reddit/components/Comments/PredictionComment/async.ts"),
				ze = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				qe = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				Ye = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				Qe = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				Je = s("./src/reddit/components/ModModeReports/index.tsx"),
				Xe = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Ze = s("./src/reddit/components/RichTextJson/index.tsx"),
				$e = s("./src/reddit/components/UserIcon/index.tsx"),
				et = s("./src/reddit/components/UserIcon/constants.ts"),
				tt = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				st = s("./src/reddit/helpers/author.ts"),
				nt = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				rt = s("./src/reddit/constants/componentTestIds.ts"),
				ot = s("./src/reddit/contexts/PageLayer/index.tsx"),
				it = s("./src/reddit/contexts/Visibility.tsx"),
				dt = s("./src/reddit/controls/ErrorText/index.tsx"),
				at = s("./src/reddit/controls/InternalLink/index.tsx"),
				ct = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				lt = s("./src/reddit/helpers/flair.ts"),
				mt = s("./src/reddit/models/Subreddit/index.ts"),
				ut = s("./src/reddit/models/User/index.ts"),
				pt = s("./src/reddit/models/Vote/index.ts"),
				bt = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				ht = s("./src/reddit/selectors/commentSelector.ts"),
				gt = s("./src/reddit/selectors/experiments/econ/marketplace.ts"),
				ft = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Ct = s("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				xt = s("./src/reddit/selectors/gold/powerups/flairs.ts"),
				Ot = s("./src/reddit/selectors/moderatorPermissions.ts"),
				vt = s("./src/reddit/selectors/poll/index.ts"),
				yt = s("./src/reddit/selectors/userPrefs.ts"),
				Et = s("./src/reddit/selectors/moderatingComments.ts"),
				kt = s("./src/reddit/components/Comments/Comment/index.m.less"),
				jt = s.n(kt),
				wt = s("./src/config.ts"),
				St = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				_t = s("./src/reddit/components/SubredditIcon/index.tsx");

			function It() {
				return (It = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Nt = 300,
				Ft = k.a.wrapped((function(e) {
					const {
						className: t,
						...s
					} = e;
					return o.a.createElement("button", x({}, s, {
						className: Object(c.a)(t, C.a.expandButton)
					}), o.a.createElement(g.a, {
						className: C.a.expandIcon
					}))
				}), "ExpandButton", jt.a),
				Rt = k.a.wrapped(Le, "FlatList", jt.a),
				Tt = k.a.wrapped(dt.b, "ErrorText", jt.a),
				Pt = k.a.wrapped(ze.a, "HorizontalVotes", jt.a),
				Mt = k.a.div("ActionBar", jt.a),
				Lt = k.a.wrapped(He.a, "TopMeta", jt.a),
				Dt = k.a.div("CommentContentWrapper", jt.a),
				Vt = k.a.wrapped(qe.b, "AuthorHovercard", jt.a),
				At = Object(ot.u)(),
				Bt = Object(i.b)(() => Object(d.c)({
					comment: (e, t) => Object(ht.b)(e, t),
					currentProfileModPermissions: ot.h,
					depth: (e, t) => Object(M.j)(e, t),
					collapsed: Et.b,
					collapsedBecauseCrowdControl: Et.a,
					currentUser: U.k,
					flair: M.e,
					focused: (e, t) => !t.noFocus && Object(M.t)(e, t),
					highlightAnimationDisabled: yt.d,
					isAdmin: U.K,
					isEditing: M.z,
					isLoggedIn: U.Q,
					isPendingDeletion: M.D,
					isPresenceConsumptionExpEnabled: Ct.c,
					moderatorPermissions: (e, t) => {
						const s = Object(ht.b)(e, t);
						return s ? Object(Ot.n)(e, {
							subredditId: s.subredditId
						}) : null
					},
					prediction: vt.f,
					modModeEnabled: ot.U,
					errorMsgs: M.H,
					replyFormOpen: M.K,
					subreddit: ot.r,
					subredditType: M.N,
					showNftSpecialtyTreatment: gt.b,
					hasSupporterRing: xt.a,
					isOnlineConsumptionLoadTest: Ct.a,
					isOnlineUserPref: U.V,
					userIsBanned: (e, t) => {
						const s = Object(ht.b)(e, t);
						return !!s && Object(B.hb)(e, {
							subredditId: s.subredditId
						})
					},
					isBlockingInterstitialEnabled: ft.b,
					isBlockingInterstitialV2Enabled: ft.c
				}), (e, t) => {
					let {
						commentId: s,
						commentsPageKey: n,
						scrollToAndRemeasure: r,
						trackCommentClick: o
					} = t;
					return {
						onCollapseClick: () => e(Object(u.q)({
							commentId: s,
							commentsPageKey: n,
							scrollToAndRemeasure: r
						})),
						onIgnoreReports: () => e(Object(b.g)(s)),
						onVoteClick: t => {
							const [n, r] = t === pt.a.upvoted ? [Object(u.s)(s), "upvote_comment"] : [Object(u.k)(s), "downvote_comment"];
							o(r, s)(), e(n)
						},
						onMediaReload: () => {
							e(Object(u.l)(s))
						}
					}
				}),
				Ut = Object(m.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				Gt = e => o.a.createElement("div", e, e.children),
				Wt = e => o.a.createElement(o.a.Fragment, null, e.children),
				Ht = At(Bt(e => {
					const {
						childrenInfo: t,
						clearHovered: s,
						collapsed: i,
						collapsedBecauseCrowdControl: d,
						comment: m,
						commentsPageKey: u,
						currentProfileModPermissions: b,
						currentUser: g,
						depth: f,
						errorMsgs: C,
						flair: x,
						flatlist: O,
						focused: v,
						hasAwardGradient: y,
						hasSupporterRing: E,
						highlightAnimationDisabled: k,
						highlightTreatment: j,
						index: w,
						isActive: S,
						isAdmin: _,
						isAvatarsInCommentsEnabled: I,
						isBlockingInterstitialEnabled: N,
						isBlockingInterstitialV2Enabled: R,
						isEditing: P,
						isFirstInList: M,
						isHighlighted: L,
						isLoggedIn: D,
						isOnlineConsumptionLoadTest: V,
						isOnlineUserPref: A,
						isPendingDeletion: B,
						isPresenceConsumptionExpEnabled: U,
						moderatorPermissions: G,
						modModeEnabled: W,
						noSpacing: H = !1,
						onCommentAuthorClick: K,
						onCommentTimestampClick: z,
						onCollapseClick: q,
						onIgnoreReports: Y,
						onLineMouseOver: Q,
						onPresenceIndicatorInViewport: J,
						onVoteClick: X,
						postId: $,
						prediction: ee,
						renderedInOverlay: te,
						replyFormOpen: se,
						restrictHeight: ne,
						rtJSONRedditStyle: re,
						showBlockingInterstitial: oe,
						showNftSpecialtyTreatment: ie,
						subreddit: de,
						subredditType: ae,
						trackCommentClick: ce,
						userIconSmall: le,
						userIsBanned: me,
						onClickRevealSpoilerText: ue,
						onMediaReload: pe
					} = e, be = m.isDeleted, he = !P && !be && !!C && C.length > 0, ge = Object(l.a)(a.c.edit, m.id), fe = Object(l.a)(a.c.replyToComment, m.id), Ce = Object(F.a)(G), xe = Object(Qe.a)(m), Oe = Object(Z.c)(m), ve = m.authorIsContractor && ae === mt.f.EmployeesOnly, ye = m.isLocked, Ee = Ce && W, ke = !P && !be && (D || I), je = I && !m.unrepliableReason, we = !!g && Object(ut.e)(g) === m.author, [Se, _e] = Object(r.useState)(null), [Ie, Ne] = Object(r.useState)(null), Fe = Object(r.useRef)(null), Re = Object(T.f)(m) || Object(T.g)(m), Te = Re ? Gt : at.default, Pe = Object(T.f)(m) ? Wt : Vt;
					Object(r.useEffect)(() => {
						if (!P && !be && (y && _e(o.a.createElement(Ge, null)), null !== j)) {
							if (j.glowHexColor) {
								const e = j.glowHexColor;
								_e(o.a.createElement(Ae, {
									hexColor: e
								}))
							}
							if (j.effectHighlight) {
								const {
									type: e,
									assetUrl: t
								} = j.effectHighlight;
								Ne(o.a.createElement(We.b, {
									prefersReducedAnimation: k,
									type: e,
									assetUrl: t
								}))
							}
						}
					}, [P, be, y, k, j]);
					const Me = Object(it.b)();
					(N || R) && Me && w >= ft.a - 1 && oe();
					const Le = !be && !Object(T.f)(m) && (!me || me && we) && !Object(T.g)(m) && D,
						De = Object(r.useCallback)(() => {
							Le && U && !we && J && J(m.id)
						}, [m.id, J, Le, U, we]),
						Ve = Object(nt.a)(m),
						Be = !!g && Object(ut.e)(g) === m.author ? null == g ? void 0 : g.accountIcon : m.profileImage,
						Ue = Object(St.c)(Be),
						He = !(!Ue && !ie) && Object(St.b)(Be);
					return o.a.createElement("div", {
						key: `comment-${m.id}`,
						className: Object(c.a)(`Comment ${m.id}`, jt.a.CommentWrapper, {
							[jt.a.highlightComment]: L,
							[jt.a.deleted]: be,
							[jt.a.focused]: v,
							[jt.a.redesign]: I,
							[jt.a.topLevel]: !f,
							[jt.a.noSpacing]: H
						})
					}, Se, Ie, !P && !be && M && o.a.createElement("div", {
						className: jt.a.commentPerfMarkVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n                <img alt='' src='${wt.a.assetPath}/img/renderTimingPixel.png' style='width: 1px; height: 1px;' onLoad='(__markFirstCommentVisible || function(){})();' />\n              `
						}
					}), o.a.createElement(Ft, {
						className: Object(c.a)(m.id, {
							[jt.a.hidden]: !i,
							[jt.a.visible]: i
						}),
						onClick: () => {
							s(), q(), ce("collapse", m.id)()
						},
						onMouseOver: () => Q(m.id),
						onMouseOut: s
					}), Object(st.a)(m.author) ? de ? o.a.createElement(_t.b, {
						className: Object(c.a)(jt.a.UserIconContainer, le && jt.a.UserIconContainerSmall),
						subredditOrProfile: de,
						linkTo: `/user/${m.author}/`
					}) : null : o.a.createElement(Pe, {
						alwaysShowChildren: !0,
						collapsed: i,
						hoverDivClassName: jt.a.AuthorHoverDiv,
						isCommentAuthorBlocked: Object(T.g)(m),
						postOrComment: m,
						tooltipIdPrefix: "AvatarUserInfoTooltip",
						tooltipType: te ? Xe.c.Lightbox : void 0
					}, o.a.createElement(Te, {
						className: Object(c.a)(jt.a.UserIconContainer, le && jt.a.UserIconContainerSmall),
						"data-testid": Re ? void 0 : "comment_author_icon",
						onClick: Re ? void 0 : K,
						to: `/user/${m.author}/`
					}, Me ? o.a.createElement(o.a.Fragment, null, E && !He && o.a.createElement("div", {
						className: jt.a.supporterRing
					}), o.a.createElement($e.a, {
						isNft: He,
						className: Object(c.a)(jt.a.UserIcon, {
							[jt.a.v1NftTreatment]: Ue
						}),
						iconUrl: Be,
						isNSFW: m.profileOver18 || !1,
						nsfwIconUrl: et.a,
						userName: m.author,
						isHighlighted: L,
						shouldShowPresenceIndicator: Le && U,
						onPresenceIndicatorInViewport: De,
						isCommentAuthorBlocked: Object(T.g)(m),
						collapsed: i,
						shouldUseOnlineOverride: we,
						isOnlineOverrideValue: A,
						isOnlineStatusLoadTest: Le && V,
						authorId: m.authorId
					})) : o.a.createElement("div", {
						className: jt.a.UserIcon
					}))), o.a.createElement(Dt, {
						className: Object(c.a)({
							[jt.a.isActive]: S,
							[jt.a.isCollapsed]: i,
							[jt.a.isLocked]: ye && Ee,
							[jt.a.isPendingDeletion]: B,
							[jt.a.isRemoved]: !!m.bannedBy && Ee || m.isDeleted && _
						})
					}, o.a.createElement(ct.a, null, n.fbt._("level {depth}", [n.fbt._param("depth", f + 1)], {
						hk: "2XnyAV"
					})), o.a.createElement(Lt, {
						userHasNft: He,
						childrenInfo: t,
						className: Object(c.a)({
							[jt.a.collapsed]: i,
							[jt.a.noFlair]: Object(lt.o)(x || null)
						}),
						collapsed: i,
						collapsedBecauseCrowdControl: d,
						comment: m,
						commentsPageKey: u,
						flair: x,
						isAdmin: _,
						isPostComment: !0,
						onCommentAuthorClick: K,
						onCommentTimestampClick: z,
						renderedInOverlay: te,
						renderContractorBadge: ve
					}), !i && o.a.createElement(r.Fragment, null, P && o.a.createElement(h.a, {
						className: Object(c.a)(jt.a.EditCommentForm, jt.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: u,
						depth: f,
						draftType: a.c.edit,
						draftKey: ge,
						postId: $,
						rtJson: Object(nt.a)(m),
						mediaMetadata: m.media && m.media.mediaMetadata || void 0,
						isTopLevelComment: !1,
						parentCommentId: m.id,
						submitAction: e => Object(p.j)({
							id: m.id,
							commentsPageKey: u,
							draftKey: ge,
							formData: e
						}),
						submitButtonText: n.fbt._("Save Edits", null, {
							hk: "2NKEFr"
						})
					}), !P && (!be || _) && o.a.createElement("div", {
						"data-testid": rt.d,
						ref: Fe,
						className: Object(c.a)(jt.a.CommentBody, {
							[jt.a.restrictHeight]: !(!ne || !Fe.current) && Fe.current.clientHeight > Nt
						})
					}, ee ? o.a.createElement(Ke.a, {
						comment: m,
						prediction: ee
					}) : o.a.createElement(Ze.b, {
						content: Ve,
						mediaMetadata: m.media && m.media.mediaMetadata,
						redditStyle: re,
						rtJsonElementProps: Ut(e),
						onClickRevealSpoilerText: ue,
						mediaProps: {
							alignLeft: !0,
							renderSmallMedia: !0,
							onReload: pe
						}
					}), o.a.createElement(bt.b, {
						content: Ve
					})), W && Ce && xe && o.a.createElement(Ye.a, {
						thing: m
					}), W && Ce && Oe && o.a.createElement(Je.a, {
						onIgnoreReports: Y,
						reportable: m
					}), null != O ? O : ke && o.a.createElement(Mt, null, je && o.a.createElement(Pt, {
						downvoteButtonClassName: jt.a.voteButton,
						downvoteClassName: jt.a.upDownVote,
						model: m,
						onVoteClick: X,
						scoreClassName: jt.a.score,
						upvoteButtonClassName: jt.a.voteButton,
						upvoteClassName: jt.a.upDownVote
					}), o.a.createElement(Rt, {
						comment: m,
						commentsPageKey: u,
						depth: f,
						isAvatarsInCommentsEnabled: I,
						collapsedBecauseCrowdControl: d,
						modModeEnabled: W,
						moderatorPermissions: b || G,
						renderedInOverlay: te,
						isCommentFocused: v,
						subreddit: de,
						trackCommentClick: ce
					})), he && C.map(e => o.a.createElement(Tt, {
						key: e
					}, e)), se && o.a.createElement(h.a, {
						className: Object(c.a)(jt.a.EditCommentForm, jt.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: u,
						depth: f,
						draftType: a.c.replyToComment,
						draftKey: fe,
						isTopLevelComment: !1,
						parentCommentId: m.id,
						postId: $,
						submitAction: (e, t) => {
							let {
								validate: s,
								...n
							} = e;
							return s ? Object(p.v)({
								commentsPageKey: u,
								draftKey: fe,
								parentCommentDepth: f,
								parentCommentId: m.id,
								formData: n,
								editorMode: t
							}) : Object(p.o)({
								commentsPageKey: u,
								draftKey: fe,
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
			t.a = e => o.a.createElement(tt.a.Consumer, null, t => o.a.createElement(Ht, It({}, e, {
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
				d = s("./src/reddit/components/FocusableContent/index.m.less"),
				a = s.n(d);
			t.a = i.a.wrapped(e => r.a.createElement("div", {
				className: Object(o.a)(e.className, {
					[a.a.isFocused]: e.isFocused,
					[a.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", a.a)
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
				d = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = s("./src/reddit/components/RichTextEditor/Placeholder.m.less"),
				c = s.n(a);
			t.a = e => {
				let {
					className: t,
					isCommentBoxDesignEnabled: s,
					isLoading: n,
					toolbarPosition: a
				} = e;
				return r.a.createElement("div", {
					className: t
				}, r.a.createElement(i.a, {
					isFocused: !1
				}, !s && "top" === a && r.a.createElement("div", {
					className: Object(o.a)(c.a.toolbar, c.a.topToolbar, Object(d.a)({
						isLoading: n
					}))
				}), r.a.createElement("div", {
					className: Object(o.a)(c.a.content, {
						[c.a.mCollapsed]: s
					})
				}, r.a.createElement("div", {
					className: Object(o.a)(c.a.prompt, Object(d.a)({
						isLoading: !0
					}))
				})), !s && "bottom" === a && r.a.createElement("div", {
					className: Object(o.a)(c.a.toolbar, c.a.bottomToolbar, Object(d.a)({
						isLoading: n
					}))
				})))
			}
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
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				m = s("./src/reddit/constants/experiments.ts"),
				u = s("./src/reddit/constants/location.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/trackers/navigation.ts"),
				h = s("./src/reddit/selectors/experiments/countrySites.ts"),
				g = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				f = s("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				C = s("./src/reddit/selectors/meta.ts"),
				x = s("./src/reddit/components/SidebarFooter/index.m.less"),
				O = s.n(x);
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js"), y = a.a.a("Link", O.a), E = Object(i.c)({
				countryCode: C.b,
				d2xPdpSideRailRecsVariant: g.a,
				isCountrySitesEnabled: h.b,
				isD2xPdpSideRailRecsEnabled: g.b,
				isNavbarLikeMwebEnabled: f.a
			}), k = Object(o.b)(E), j = Object(p.u)({
				isFrontpage: p.A,
				isCountrySitePage: p.y
			}), w = e => {
				let {
					countryCode: t,
					reredditContent: s
				} = e;
				return r.a.createElement("div", {
					className: O.a.GreyRereddit
				}, s, !!u.c[t] && r.a.createElement("div", {
					className: O.a.LinkContainer
				}, r.a.createElement("div", {
					className: O.a.Column
				}, r.a.createElement(y, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, v._("Impressum", null, {
					hk: "4cKXSI"
				})), r.a.createElement(y, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: O.a.NoneCapitalizeLink
				}, v._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: O.a.Column
				}, r.a.createElement(y, {
					href: "https://www.reddithelp.com"
				}, v._("help", null, {
					hk: "4lyYaD"
				})), r.a.createElement(y, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, v._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: O.a.LinkContainer
				}, r.a.createElement("div", {
					className: O.a.Column
				}, r.a.createElement(y, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, v._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(y, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, v._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: O.a.Column
				}, r.a.createElement(y, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, v._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(y, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, v._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), r.a.createElement("div", {
					className: O.a.Copyright
				}, v._("Reddit Inc © {year}. All rights reserved", [v._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = j(k(Object(c.c)(e => {
				const t = Object(o.f)().getState(),
					s = Object(h.a)(t, Object(d.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === m.Tc.GreyRereddit || e.d2xPdpSideRailRecsVariant === m.Tc.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === m.Tc.LargeImagePreview ? e.reredditButtons : [];
					return r.a.createElement(w, {
						reredditContent: t,
						countryCode: e.countryCode
					})
				}
				if (!e.isFrontpage && !e.isCountrySitePage) return null;
				const n = t => {
					const n = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "English",
						it: "Italiano",
						pt: "Português"
					};
					return s.includes(t) || "en" === t ? r.a.createElement(y, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(b.a)(t))
					}, n[t]) : null
				};
				return r.a.createElement(l.a, {
					className: O.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, !!u.c[e.countryCode] && r.a.createElement("div", {
					className: O.a.LinkContainer
				}, r.a.createElement("div", {
					className: O.a.Column
				}, r.a.createElement(y, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, v._("Impressum", null, {
					hk: "4cKXSI"
				})), r.a.createElement(y, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: O.a.NoneCapitalizeLink
				}, v._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: O.a.Column
				}, r.a.createElement(y, {
					href: "https://www.reddithelp.com"
				}, v._("help", null, {
					hk: "4lyYaD"
				})), r.a.createElement(y, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, v._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: O.a.LinkContainer
				}, r.a.createElement("div", {
					className: O.a.Column
				}, r.a.createElement(y, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, v._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(y, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, v._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: O.a.Column
				}, r.a.createElement(y, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, v._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(y, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, v._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && r.a.createElement("div", {
					className: O.a.LinkContainer
				}, r.a.createElement("div", {
					className: O.a.Column
				}, n("en"), n("fr"), n("it")), r.a.createElement("div", {
					className: O.a.Column
				}, n("de"), n("es"), n("pt"))), r.a.createElement("div", {
					className: O.a.Copyright
				}, v._("Reddit Inc © {year}. All rights reserved", [v._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			})))
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				BottomStickyStyles: "xTKAJNhaO7iI3cnAQ1PpJ",
				bottomStickyStyles: "xTKAJNhaO7iI3cnAQ1PpJ",
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
				d = s.n(i),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/components/BackToTop/index.tsx"),
				l = s("./src/reddit/components/SidebarFooter/index.tsx"),
				m = s("./src/reddit/constants/componentSizes.ts"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				b = s.n(p),
				h = s("./src/lib/lessComponent.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const f = a.f[1] + 24,
				C = m.f + 8,
				x = C + 152 + 16,
				O = x + f + 8,
				v = h.a.div("Container", b.a),
				y = h.a.wrapped(e => {
					let {
						className: t,
						isOverlay: s,
						...n
					} = e;
					return d.a.createElement(c.a, g({
						className: t,
						isOverlay: s,
						style: {
							top: `calc(100vh - ${s?C:8}px)`
						}
					}, n))
				}, "BackToTop", b.a),
				E = e => {
					let {
						children: t,
						className: s,
						isFakeOverlay: r,
						isSticky: o,
						shouldStickToBottom: i
					} = e;
					return d.a.createElement("div", {
						className: Object(n.a)(s, {
							[b.a.BottomStickyStyles]: i,
							[b.a.StickyStyles]: !i && o && !r,
							[b.a.StickyStylesFakeOverlay]: !i && !!r
						})
					}, t)
				};
			class k extends i.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > O,
						shouldFooterSticky: this.windowHeight > x
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
					}, a.M), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isBottomSticky: !1,
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
							recommendationsComponent: a,
							reredditButtons: c
						}
					} = this, m = this.state.isAdSticky && !(!t && !n), u = this.state.isBottomSticky;
					return d.a.createElement(v, {
						className: r,
						innerRef: this.setWrapperRef
					}, d.a.createElement(E, {
						isFakeOverlay: s,
						isSticky: m,
						shouldStickToBottom: u
					}, t, n, a, !o && d.a.createElement(l.a, {
						reredditButtons: c
					})), !a && !this.props.hideBackToTop && d.a.createElement(y, {
						isOverlay: !!(null === (e = null == i ? void 0 : i.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const j = Object(u.u)();
			t.a = j(k)
		},
		"./src/reddit/components/UserIcon/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = "https://www.redditstatic.com/avatars/avatar_default_02_24A0ED.png"
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
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/fastdom/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/Flair/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = s("./src/reddit/constants/parameters.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/helpers/correlationIdTracker.ts"),
				C = s("./src/reddit/helpers/flair.ts"),
				x = s("./src/reddit/helpers/trackers/postFlair.ts"),
				O = s("./src/reddit/models/Widgets/index.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				E = s.n(y);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const j = 129,
				w = Object(h.u)({
					filterName: e => Object(h.X)(e)[b.e],
					url: e => Object(h.db)(e)
				}),
				S = Object(d.c)({
					subredditId: (e, t) => Object(v.G)(e, t.subredditName)
				}),
				_ = Object(i.b)(S),
				I = l.a.div("WidgetContent", E.a),
				N = e => {
					let {
						display: t,
						isFlairFilter: s,
						onMouseDown: n,
						onClick: r,
						...i
					} = e;
					return o.a.createElement("li", {
						className: Object(a.a)(E.a.StyledFlair, t === O.g.Cloud && E.a.cloudDisplay, {
							[E.a.flairFilter]: s,
							[E.a["m-selected"]]: i.isSelected
						}),
						onClick: () => null == r ? void 0 : r(Object(C.g)(i.flair)),
						onMouseDown: n
					}, o.a.createElement(m.b, k({}, i, {
						className: E.a.Flair,
						isFlairFilter: s,
						forceSmallEmojis: !0
					})))
				};
			class F extends o.a.Component {
				constructor(e) {
					super(e), this.flairListRef = o.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(x.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(x.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(x.d)())
					}, this.onClickFlair = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(f.d)(f.a.SearchResults), this.props.sendEvent(Object(x.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(C.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(C.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					c.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > j && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return o.a.createElement(g.r, {
						className: E.a.flairFilterButton,
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
						to: Object(C.e)(this.props.url, Object(C.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, s = t ? j : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return o.a.createElement("div", {
						className: E.a.flairFilterContainer,
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
						to: Object(C.e)(this.props.url, Object(C.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: s
					} = this.state, n = t.order, r = this.getFlairsFromIds(n), i = e && this.getSelectedFlair(r) || void 0, d = t.order.length > n.length || s && !i;
					return o.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, o.a.createElement(I, null, i && this.renderSelectedFlairFilter(i), !i && this.renderFlairFilters(r), d && this.renderButton()))
				}
			}
			t.a = w(_(Object(u.c)(F)))
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
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/trackers/widgets.ts"),
				b = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = s("./src/reddit/selectors/experiments/topPosts.ts"),
				g = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/models/Theme/index.ts"),
				x = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const O = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(x.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				v = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(x.a)(e).widgetColors.sidebarWidgetHeaderColor,
				y = e => {
					const t = O(e);
					return Object(C.f)(t)
				},
				E = e => {
					const t = v(e);
					return Object(C.f)(t)
				};
			var k = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				j = s.n(k);
			const {
				fbt: w
			} = s("./node_modules/fbt/lib/FbtPublic.js"), S = Object(m.u)(), _ = Object(o.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(m.n)(e, t) || void 0,
						n = t.redditStyle || Object(g.l)(e, {
							subredditId: s
						}),
						r = Object(f.db)(e);
					return n || r
				},
				nigtmode: f.db,
				subredditId: m.n,
				topPostVariant: h.d
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
					return e.backgroundColor = O(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = y(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = v(this.props), e.color = e.fill = E(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: o,
						id: i,
						onClick: a,
						onHeaderClick: l,
						title: m,
						titleClassName: p,
						truncateThreshold: b
					} = this.props, h = s ? j.a.widgetContentOnly : j.a.widgetContent, g = !n && this.props.styles, f = g ? this.getWidgetBackgroundStyles() : {}, C = g ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(d.a)(t, j.a.widgetBackground, {
							[j.a.redditStyle]: n,
							[j.a.clickable]: !!a,
							[j.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: a,
						style: f
					}, m && r.a.createElement("div", {
						className: Object(d.a)(j.a.widgetHeader, {
							[j.a.clickable]: !!l
						}),
						id: i,
						style: C,
						onClick: l
					}, r.a.createElement("div", {
						className: Object(d.a)(j.a.widgetTitle, p)
					}, r.a.createElement(c.b, {
						type: c.a.Widget
					}, m)), o), r.a.createElement("div", {
						className: Object(d.a)(h, {
							[j.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(u.r, {
						className: j.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, w._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = S(_(Object(a.a)(Object(l.c)(I))))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return E
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "b", (function() {
				return S
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/actions/ads/index.ts"),
				d = s("./src/reddit/actions/focusedVerticals/index.ts"),
				a = s("./src/reddit/actions/gold/tooltips.ts"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				m = s("./src/reddit/actions/survey/index.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/components/PostList/Placeholder.tsx"),
				f = s("./src/reddit/featureFlags/index.ts"),
				C = s("./src/reddit/selectors/experiments/survey.ts"),
				x = s("./src/reddit/selectors/listings.ts"),
				O = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/selectors/tracking.ts");

			function E() {
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
			const k = E(),
				j = {
					apiError: x.c,
					apiPending: x.d,
					measureScrollFPS: f.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.S)(e, t),
					loadMore: x.g,
					postsById: O.T,
					postIds: Object(o.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: r
						} = t;
						return Object(O.D)(e, s, n, r)
					}),
					subredditsById: v.db,
					viewportDataLoaded: y.a,
					pageReferrer: p.V,
					postListPlaceholderComponent: () => g.a,
					isNpsScrollSurveyEnabled: C.e
				},
				w = Object(r.c)(j),
				S = e => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(a.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(i.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(d.a)({
							lastLoadedEnv: "server"
						})), e(c.L(t))
					},
					fireAdPixelsOfType: (t, s) => {
						e(c.z(t, s))
					},
					trackOnPostEnteredViewport: (t, s, n, r) => {
						e(c.O(t, n, r))
					},
					trackOnPostExitedViewport: (t, s, n, r) => {
						e(c.P(t, n, r))
					},
					showModalOnScroll: () => e(c.cb()),
					surveyTriggerScrollCounted: () => e(Object(m.l)())
				}),
				_ = e => Object(b.b)({
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
				N = Object(n.b)(w, S, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: _,
					postClickEventFactory: I
				}));
			t.a = e => Object(u.c)(k(N(e)))
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
				d = s.n(i);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const c = {
					rootMargin: "100px 0px",
					threshold: .01
				},
				l = d.a.createContext(!1);
			class m extends d.a.Component {
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
						...c,
						...t
					};
					return d.a.createElement(n.a, a({}, r, {
						onChange: this.handleIntersectionChange
					}), d.a.createElement("div", null, d.a.createElement(l.Provider, {
						value: s
					}, e)))
				}
			}

			function u() {
				return Object(i.useContext)(l)
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/models/WhitelistStatus/index.ts");
			const r = (e, t) => {
				const s = e.some(e => e.isNSFW),
					r = t.some(e => e.wls === n.b.NO_ADS);
				return !s && !r
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, s) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return d
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				o = s.n(r);
			const i = e => {
					let {
						isLoading: t
					} = e;
					return Object(n.a)(o.a.loadingBackground, {
						[o.a["m-loading"]]: t
					})
				},
				d = e => Object(n.a)(o.a.loadingBar, i(e))
		},
		"./src/reddit/helpers/trackers/subredditMuting.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "d", (function() {
				return l
			}));
			var n = s("./src/reddit/selectors/telemetry.ts"),
				r = s("./src/telemetry/models/Event.ts");
			const o = () => e => ({
					source: r.f.HomeFeed,
					action: r.d.Click,
					noun: r.e.MuteSubreddit,
					targetUser: {
						id: n.rb(e).id
					},
					...n.o(e)
				}),
				i = () => e => ({
					source: r.f.CommunityNotificationsSettings,
					action: r.d.Click,
					noun: r.e.UnmuteSubreddit,
					targetUser: {
						id: n.rb(e).id
					},
					...n.o(e)
				}),
				d = () => e => ({
					source: r.f.PopularFeed,
					action: r.d.Click,
					noun: r.e.MuteSubreddit,
					targetUser: {
						id: n.rb(e).id
					},
					...n.o(e)
				}),
				a = () => e => ({
					source: r.f.SubredditIdBanner,
					action: r.d.Click,
					noun: r.e.UnmuteSubreddit,
					targetUser: {
						id: n.rb(e).id
					},
					...n.o(e)
				}),
				c = () => e => ({
					source: r.f.AboutCommunityOverflow,
					action: r.d.Click,
					noun: r.e.MuteSubreddit,
					targetUser: {
						id: n.rb(e).id
					},
					...n.o(e)
				}),
				l = () => e => ({
					source: r.f.AboutCommunityOverflow,
					action: r.d.Click,
					noun: r.e.UnmuteSubreddit,
					targetUser: {
						id: n.rb(e).id
					},
					...n.o(e)
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "d", (function() {
				return c
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
			const d = (e, t) => s => ({
					source: r.COMMUNITY_WIDGETS,
					action: o.c.CLICK,
					noun: n.SEE_MORE,
					widget: Object(i.xb)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...i.o
				}),
				a = (e, t) => s => ({
					source: r.POST,
					action: o.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: i.K(s, e),
					subreddit: i.jb(s),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...i.o(s)
				}),
				c = () => e => ({
					source: r.SIDEBAR,
					action: o.c.VIEW,
					noun: n.TOPICS_WIDGET,
					...i.o(e)
				}),
				l = e => t => ({
					source: r.TOPICS_WIDGET,
					action: o.c.CLICK,
					noun: n.TOPIC,
					...i.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/icons/fonts/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("expand", e.isFilled), e.className)
			})
		},
		"./src/reddit/selectors/experiments/commentBox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const d = Object(n.a)(i.Q, i.P, (e, t) => e || t),
				a = Object(n.a)(e => Object(o.c)(e, {
					experimentEligibilitySelector: d,
					experimentName: r.O
				}), e => e === r.Y.Enabled)
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
				d = s("./src/reddit/selectors/meta.ts"),
				a = s("./node_modules/reselect/es/index.js");
			const c = Object(a.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => Object(d.h)(e) && Object(o.f)(e),
					experimentName: n.qc
				}), i.a),
				l = Object(a.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => !Object(d.h)(e) && Object(o.f)(e),
					experimentName: n.pc
				}), i.a),
				m = Object(a.a)(c, l, (e, t) => e || t),
				u = Object(a.a)(c, l, (e, t) => !(!e && !t))
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
						experimentName: n.se
					}) === n.Jd)
				},
				i = e => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: n.te
				}) === n.Jd
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return a
			})), s.d(t, "h", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "k", (function() {
				return u
			})), s.d(t, "j", (function() {
				return p
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "f", (function() {
				return C
			})), s.d(t, "c", (function() {
				return x
			})), s.d(t, "g", (function() {
				return O
			})), s.d(t, "d", (function() {
				return v
			}));
			var n = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/reddit/featureFlags/index.ts"),
				o = s("./src/reddit/selectors/posts.ts"),
				i = s("./src/reddit/selectors/subreddit.ts"),
				d = s("./src/reddit/selectors/user.ts");
			const a = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(i.W)(e, {
							subredditId: s
						});
						return t && t.displayText || ""
					}
					return ""
				},
				c = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				l = e => e.focusedVerticals.components.dismissed,
				m = [],
				u = Object(n.a)((e, t) => {
					const s = p(e, t);
					if (!s) return m;
					const n = Object(i.ab)(e, {
						subredditName: s.name
					});
					return n && n.postIds && n.postIds.length ? n.postIds : m
				}),
				p = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(i.W)(e, {
						subredditId: s
					}) : null
				},
				b = (e, t, s, n, r) => {
					const i = r.find(e => e <= t) || -1,
						d = r.find(e => e > t) || 1 / 0;
					return t !== d && t !== i && (!(i + s > t) && (!(t + s > d) && !((e, t, s) => {
						const n = s[t - 1],
							r = s[t],
							i = r && Object(o.G)(e, {
								postId: n
							}) || null,
							d = r && Object(o.G)(e, {
								postId: r
							}) || null;
						return i && i.isSponsored || d && d.isSponsored
					})(e, t, n)))
				},
				h = [3],
				g = Object(n.a)((e, t) => {
					let {
						existingDUPositions: s,
						listingProps: n
					} = t;
					const r = s.slice().sort();
					let i = -1;
					const d = Object(o.z)(e, {
							listingKey: n.listingKey
						}),
						a = [];
					return h.forEach(t => {
						let s = i + t;
						if (!(s >= d.length)) {
							for (; s < d.length && !b(e, s, t, d, r);) s += 1;
							s < d.length && (a.push(s), i = s)
						}
					}), a
				}),
				f = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				C = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				x = e => e.focusedVerticals.category,
				O = e => e.focusedVerticals.lastLoadedEnv,
				v = e => {
					const t = Object(d.P)(e),
						s = r.d.geoSubredditRecommendationDULoggedIn(e),
						n = r.d.geoSubredditRecommendationDULoggedOut(e);
					return t && s || !t && n
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
		"./src/redditGQL/operations/DeleteSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"c518a45f60a5"}')
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"dd6aa8aaf456"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"2620d72fd633"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"432f6b475ece"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~SearchResults.0ed0b110c2520624c0d5.js.map