// https://www.redditstatic.com/desktop2x/Frontpage~ModListing.3529ceaa87b7fef5fedb.js
// Retrieved at 7/27/2022, 5:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Frontpage~ModListing"], {
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "b", (function() {
				return v
			}));
			var s, r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/performanceTimings/index.tsx"),
				a = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(s || (s = {}));
			var d, l = n("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var m = n("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				p = n("./src/reddit/selectors/platform.ts"),
				b = n("./src/reddit/selectors/user.ts");
			const h = Object(r.a)(a.g),
				f = Object(r.a)(a.e),
				g = Object(r.a)(a.h),
				y = Object(r.a)(a.c),
				S = Object(r.a)(a.f),
				w = Object(r.a)(a.j),
				_ = Object(r.a)(a.i),
				k = () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					const o = t(),
						a = Object(m.e)(o),
						d = Object(m.d)(o),
						p = Object(b.P)(o);
					if (a || !d) return;
					e(g());
					let S = !1;
					try {
						const t = p ? s.LoggedInGeo : s.LoggedOutGeo,
							n = await ((e, t, n) => Object(i.a)(e, {
								...c,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(r(), t);
						if (n.ok && n.body) {
							const {
								data: t
							} = n.body;
							if (O(t)) {
								if (x(t)) {
									e(y({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), S = !0
								} else if (C(t)) {
									const n = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: s,
											interactedSubreddit: r,
											category: o
										} = n.focusRecommendations[0],
										a = [s, r],
										i = Object(u.d)(a),
										c = Object(l.b)(a),
										d = Object(u.c)(s),
										m = {
											recommendedSubredditIds: [s.id],
											interactedSubredditIds: [r.id],
											subreddits: i,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: o,
											lastLoadedEnv: "client"
										};
									e(h(m)), S = !0
								}
							} else S = !1
						}
					} catch (w) {
						S = !1
					}
					S || e(f({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, O = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, x = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations;
					return !(!n || 0 !== n.length)
				}, C = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations,
						s = t && t.type;
					return !!(n && !x(e) && s === d.GEO && n[0] && n[0].recommendedSubreddit && n[0].interactedSubreddit)
				}, v = () => async (e, t, n) => {
					var s, r;
					const a = t(),
						i = Object(m.g)(a);
					if (Object(m.f)(a) || null === i || "client" === i) {
						const n = null === (r = null === (s = Object(p.b)(t())) || void 0 === s ? void 0 : s.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							i = Object(b.Q)(a);
						return Object(o.i)(() => e(k()), {
							name: "getFocusedVerticalsRequested",
							page: n,
							isLoggedIn: i
						})
					}
					if ("server" === i) return e(S({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/BackToTop/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/elementIds.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/components/BackToTop/index.m.less"),
				d = n.n(c);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js"), u = e => {
				if (e) {
					const e = document.getElementById(a.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: n,
					style: s
				} = e;
				return r.a.createElement("div", {
					className: Object(o.a)(t, d.a.container),
					style: s
				}, r.a.createElement(i.l, {
					className: d.a.button,
					onClick: () => u(n)
				}, l._("Back to Top", null, {
					hk: "YjBtV"
				})))
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "CommunityTopicSurvey",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: async () => n.e("CommunityTopicSurvey").then(n.bind(null, "./src/reddit/components/CommunityTopicSurvey/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/CommunityTopicSurvey/index.tsx"
				}
			});
			t.a = r
		},
		"./src/reddit/components/ContentSurvey/ContentRatingSurveyBanner.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/config.ts"),
				a = n("./src/reddit/components/ContentSurvey/index.m.less"),
				i = n.n(a),
				c = n("./src/reddit/helpers/trackers/contentTag.ts"),
				d = n("./src/reddit/hooks/useTracking.ts"),
				l = n("./src/reddit/icons/fonts/index.tsx"),
				u = n("./src/reddit/components/ContentSurvey/SurveyModal.tsx");
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function p(e) {
				let {
					survey: t,
					subredditId: n
				} = e;
				const [a, p] = Object(s.useState)(!1), b = Object(d.a)();
				return Object(s.useEffect)(() => b(Object(c.h)()), [b]), r.a.createElement("div", {
					className: i.a.feedBanner,
					onClick: function() {
						p(!0), b(Object(c.g)())
					}
				}, r.a.createElement("div", {
					className: i.a.notepadSnoo
				}, r.a.createElement("img", {
					src: `${o.a.assetPath}/img/snoovatar-notepad.png`
				})), r.a.createElement("div", {
					className: i.a.bannerCopy
				}, r.a.createElement("p", {
					className: i.a.copy
				}, m._("Set up this community’s content tag", null, {
					hk: "3ssqQf"
				})), r.a.createElement("p", {
					className: i.a.meta
				}, m._("Take a quick survey to help people know what to expect when they visit this community", null, {
					hk: "3sUbRf"
				}))), r.a.createElement(l.a, {
					name: "caret_right",
					className: i.a.chevron
				}), a && r.a.createElement(u.a, {
					withOverlay: !0,
					subredditId: n,
					survey: t,
					onClose: () => p(!1)
				}))
			}
		},
		"./src/reddit/components/ContentSurvey/SurveyModal.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/higherOrderComponents/asModal/index.tsx");
			const o = Object(s.a)({
					resolved: {},
					chunkName: () => "",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e(6), n.e(8)]).then(n.bind(null, "./src/reddit/components/ContentSurvey/index.tsx")),
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
				a = Object(r.a)(o);
			t.a = a
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
		"./src/reddit/components/CountrySort/index.m.less": function(e, t, n) {
			e.exports = {
				countrySort: "_1JaK9h42mq2UXvugO7VriI"
			}
		},
		"./src/reddit/components/EmptySubreddit.m.less": function(e, t, n) {
			e.exports = {
				PrimaryText: "_11KlaBYJq9fbo0p9We9Q-X",
				primaryText: "_11KlaBYJq9fbo0p9We9Q-X",
				SecondaryText: "_1mDuZKKi5R1yARCN4kbfb8",
				secondaryText: "_1mDuZKKi5R1yARCN4kbfb8",
				MainContentWrapper: "_3rhMc0U_KMJO_5-yIKPke3",
				mainContentWrapper: "_3rhMc0U_KMJO_5-yIKPke3",
				MainContent: "_3Tl09Mc2pqGPdIu3beZW4b",
				mainContent: "_3Tl09Mc2pqGPdIu3beZW4b",
				BackgroundPlaceholder: "_3-P94khWh-8LNZgpznmZm5",
				backgroundPlaceholder: "_3-P94khWh-8LNZgpznmZm5",
				SubmitLink: "_2lrHxBsyZpA36hEKC_alta",
				submitLink: "_2lrHxBsyZpA36hEKC_alta",
				SnooImg: "_3-gJfiulV3xKAI7pwX0Cq-",
				snooImg: "_3-gJfiulV3xKAI7pwX0Cq-",
				Component: "_2_C857z2MF49YnHj6VQteT",
				component: "_2_C857z2MF49YnHj6VQteT",
				EmptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg",
				emptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg"
			}
		},
		"./src/reddit/components/EmptySubreddit.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/upperFirst.js"),
				o = n.n(r),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./src/config.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/isFakeSubreddit/index.ts"),
				u = n("./src/reddit/constants/postLayout.ts"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/components/PostList/Placeholder.tsx"),
				b = n("./src/reddit/components/EmptySubreddit.m.less"),
				h = n.n(b),
				f = n("./src/lib/classNames/index.ts"),
				g = n("./src/lib/lessComponent.tsx"),
				y = n("./src/reddit/pages/Subreddit/SurveyUnit.tsx");
			const S = g.a.wrapped(p.a, "BackgroundPlaceholder", h.a),
				w = g.a.wrapped(m.n, "SubmitLink", h.a),
				_ = e => {
					switch (e) {
						case d.W.RISING:
							return s.fbt._("Create a new post and take all the glory", null, {
								hk: "1NhXUe"
							});
						case d.W.TOP:
						case d.W.CONTROVERSIAL:
							return null;
						default:
							return s.fbt._("Be the first to till this fertile land.", null, {
								hk: "VYQD0"
							})
					}
				},
				k = e => {
					let {
						listingName: t,
						sort: n
					} = e;
					const r = _(n);
					return i.a.createElement("div", {
						className: h.a.MainContent
					}, i.a.createElement("div", {
						className: h.a.PrimaryText
					}, (e => {
						switch (e) {
							case d.W.RISING:
								return s.fbt._("Looks like nothing is rising fast enough in this subreddit", null, {
									hk: "kJ3Te"
								});
							case d.W.TOP:
							case d.W.CONTROVERSIAL:
								return s.fbt._("No posts were found using the {listing sort option} sort. Try changing the sort.", [s.fbt._param("listing sort option", o()(e))], {
									hk: "48BeCW"
								});
							default:
								return s.fbt._("There are no posts in this subreddit", null, {
									hk: "5mVkT"
								})
						}
					})(n)), t && !Object(l.a)(t) && !!r && i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: h.a.SecondaryText
					}, _(n)), i.a.createElement(w, {
						to: `/r/${t}/submit`
					}, s.fbt._("Add a post", null, {
						hk: "1vnCSW"
					}))))
				},
				O = () => i.a.createElement("div", {
					className: h.a.MainContent
				}, i.a.createElement("img", {
					className: h.a.SnooImg,
					src: `${c.a.assetPath}/img/snoo_discovery@1x.png`
				}), i.a.createElement("div", {
					className: h.a.PrimaryText
				}, s.fbt._("Reddit gets better when you join communities, so find some that you’ll love!", null, {
					hk: "7B6oq"
				})), i.a.createElement(w, {
					to: "/r/popular"
				}, s.fbt._("Browse Popular Posts", null, {
					hk: "2zfgXv"
				})));
			t.a = e => i.a.createElement(i.a.Fragment, null, e.subreddit && i.a.createElement(y.a, {
				subredditId: e.subreddit.id,
				subredditSubscribers: e.subreddit.subscribers
			}), i.a.createElement("div", {
				"data-testid": "empty-subreddit",
				className: Object(f.a)(h.a.Component, h.a.EmptyHomepage)
			}, i.a.createElement(S, {
				isLoading: !1,
				layout: u.g.Classic
			}), i.a.createElement("div", {
				className: h.a.MainContentWrapper
			}, e.subreddit ? i.a.createElement(k, e) : i.a.createElement(O, null))))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, n) {
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
				DropdownButton: "_3EHmSVytc7PNTijH2qfAan",
				dropdownButton: "_3EHmSVytc7PNTijH2qfAan",
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/asTooltip.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = n("./src/reddit/actions/preferences.ts"),
				m = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/constants/postLayout.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/contexts/Tooltip.ts"),
				g = n("./src/reddit/controls/Dropdown/index.tsx"),
				y = n("./src/reddit/controls/Dropdown/Row.tsx"),
				S = n("./src/reddit/icons/fonts/index.tsx"),
				w = n("./src/reddit/selectors/telemetry.ts"),
				_ = n("./src/reddit/selectors/tooltip.ts"),
				k = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				O = n.n(k);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const C = "view--layout--FUE",
				v = "LayoutSwitch--picker",
				E = Object(c.a)(g.a),
				j = {
					[b.d.Card]: function(e) {
						return o.a.createElement(S.a, x({}, e, {
							name: "view_card"
						}))
					},
					[b.d.Classic]: function(e) {
						return o.a.createElement(S.a, x({}, e, {
							name: "view_classic"
						}))
					},
					[b.d.Compact]: function(e) {
						return o.a.createElement(S.a, x({}, e, {
							name: "view_compact"
						}))
					}
				},
				N = {
					[b.d.Card]: () => s.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[b.d.Classic]: () => s.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[b.d.Compact]: () => s.fbt._("compact", null, {
						hk: "1N7pcz"
					}),
					[b.d.Search]: () => s.fbt._("search", null, {
						hk: "49uLRt"
					})
				},
				T = Object(h.u)(),
				I = Object(i.c)({
					dropdownIsOpen: Object(_.b)(v),
					postLayout: h.S,
					redditStyle: h.D
				}),
				P = Object(a.b)(I, e => ({
					onListingLayoutChange: (t, n) => e(Object(u.y)(t, n)),
					openDropdown: () => e(Object(m.h)({
						tooltipId: v
					}))
				}));
			class L extends o.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: n,
							sendEvent: s,
							subredditId: r
						} = this.props;
						t ? t(e) : (n(e, r), s(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(w.Z)(t),
							subreddit: Object(w.hb)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: n,
							onLayoutClick: s,
							postLayout: r
						} = this.props, a = n || b.e[r], i = e === a, c = j[e], l = N[e];
						return o.a.createElement(y.b, x({}, t, {
							className: Object(d.a)(O.a.LayoutItem, {
								[O.a.selected]: i,
								[O.a.DropdownButton]: null == t ? void 0 : t.showDropdownTriangle
							}),
							"data-layout": e,
							displayText: l(),
							iconWrapperClassName: O.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: O.a.LayoutItemTextClassName
						}), o.a.createElement(c, {
							className: O.a.LayoutIcon,
							onClick: i ? void 0 : s,
							isFilled: i && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return o.a.createElement(E, x({}, e, {
							className: O.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: O.a.DropdownRow,
							rowIconClassName: O.a.DropdownRowIcon,
							rowSelectedClassName: O.a.DropdownRowSelected,
							tooltipId: v
						}), this.renderItem(b.d.Card), this.renderItem(b.d.Classic), this.renderItem(b.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: n,
						postLayout: s
					} = this.props, r = t || b.e[s];
					return o.a.createElement("div", {
						className: Object(d.a)(O.a.Container, e),
						id: C
					}, o.a.createElement("div", {
						className: O.a.DropdownContainer,
						onClick: n
					}, this.renderItem(r, {
						id: v,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), o.a.createElement(f.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = T(P(Object(p.c)(Object(l.a)(L))))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less": function(e, t, n) {
			e.exports = {
				SortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				sortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				SortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				sortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				SortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				sortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				SortLink: "M2Hk_S2yvXpsNPfZMBMur",
				sortLink: "M2Hk_S2yvXpsNPfZMBMur",
				active: "_2VxDgoEy96XoqXUPsQooJk",
				selected: "_1s79QnBguPbckxiiPvFXGP",
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
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "wBtTDilkW_rtT2k5x3eie",
				container: "wBtTDilkW_rtT2k5x3eie",
				LayoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5",
				layoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/listingSort/index.ts"),
				c = n("./src/reddit/actions/preferences.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				m = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				p = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/lib/addQueryParams/index.ts")),
				b = n("./src/lib/constants/index.ts"),
				h = n("./node_modules/react-router-redux/es/index.js"),
				f = n("./node_modules/reselect/es/index.js"),
				g = n("./src/reddit/actions/tooltip.ts"),
				y = n("./node_modules/fbt/lib/FbtPublic.js"),
				S = n("./src/higherOrderComponents/asTooltip.tsx"),
				w = n("./src/reddit/constants/history.ts"),
				_ = n("./src/reddit/constants/listingSorts.ts"),
				k = n("./src/reddit/contexts/Tooltip.ts"),
				O = n("./src/reddit/controls/Dropdown/index.tsx"),
				x = n("./src/reddit/controls/Dropdown/Row.tsx"),
				C = n("./src/reddit/helpers/path/index.ts"),
				v = n("./src/reddit/helpers/trackers/navigation.ts"),
				E = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				j = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				N = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				T = n("./src/reddit/selectors/tooltip.ts"),
				I = n("./src/reddit/selectors/user.ts"),
				P = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				L = n("./src/reddit/components/ListingSort/index.m.less"),
				D = n.n(L),
				R = n("./src/lib/lessComponent.tsx");

			function W() {
				return (W = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const B = "ListingSort--SortPicker",
				A = Object(S.a)(R.a.wrapped(O.a, "Dropdown", D.a)),
				z = R.a.wrapped(P.a, "ListingSortIcon", D.a),
				H = (R.a.wrapped(E.b, "DropdownTriangle", D.a), R.a.div("Title", D.a)),
				F = R.a.wrapped(e => r.a.createElement(x.b, W({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", D.a),
				M = e => {
					let {
						disabled: t,
						...n
					} = e;
					return r.a.createElement("div", W({}, n, {
						className: Object(a.a)(D.a.SortWrapper, n.className, {
							[D.a.isDisabled]: t
						})
					}))
				},
				G = R.a.div("DropdownRowDisabled", D.a),
				V = Object(l.u)({
					isFrontpage: l.A,
					isProfilePage: l.J,
					pageLayer: e => e
				}),
				U = Object(f.c)({
					isAwardListingExperimentEnabled: N.a,
					isBestSortPopularEnabled: j.a,
					user: I.k,
					dropdownIsOpen: (e, t) => Object(T.b)(t.dropdownId || B)(e),
					isPopularPage: l.F
				}),
				K = Object(o.b)(U, (e, t) => {
					let {
						dropdownId: n,
						pageLayer: s
					} = t;
					return {
						onOpenDropdown: () => e(Object(g.h)({
							tooltipId: n || B
						}))
					}
				});
			var q = R.a.wrapped(V(K(Object(d.c)(e => r.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && r.a.createElement(H, null, y.fbt._("Sort", null, {
					hk: "2BfINq"
				})), r.a.createElement(M, {
					disabled: e.disabled
				}, e.children || r.a.createElement(F, {
					className: e.buttonClassName,
					displayText: Object(_.a)(e.sort),
					id: e.dropdownId || B,
					showDropdownTriangle: !0
				}, r.a.createElement(z, {
					sort: e.sort
				}))), r.a.createElement(k.a.Consumer, null, t => r.a.createElement(A, W({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || B
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? r.a.createElement(G, null, y.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, n, s, r) => {
					const o = [b.W.HOT, b.W.NEW, b.W.TOP, b.W.RISING];
					return (e && (n || s) || t && s) && o.unshift(b.W.BEST), t && r && o.splice(3, 0, b.W.AWARDED), o
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => {
					const n = e.isProfilePage ? Object(p.a)(e.baseUrl, {
							sort: t
						}) : Object(C.a)(e.baseUrl, `${t}/`),
						s = n.split("?")[0],
						o = e.isProfilePage ? n.replace(s + "?", "") : void 0;
					return r.a.createElement(x.b, {
						className: Object(a.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
						displayText: Object(_.a)(t),
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(v.b)(t))
						},
						href: {
							pathname: s,
							state: {
								[w.b.FeedLoadReason]: w.a.SortChange
							},
							search: o
						},
						isSelected: e.sort === t,
						key: t
					}, r.a.createElement(z, {
						className: e.rowIconClassName,
						sort: t
					}))
				}))))))), "ListingSort", D.a),
				Y = n("./src/reddit/constants/parameters.ts");
			const J = e => {
					const t = Z[e];
					return t && t() || ""
				},
				Z = {
					[b.fc.AllStates]: () => y.fbt._("All", null, {
						hk: "3FfdRL"
					}),
					[b.fc.Alaska]: () => y.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[b.fc.Alabama]: () => y.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[b.fc.Arkansas]: () => y.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[b.fc.Arizona]: () => y.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[b.fc.California]: () => y.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[b.fc.Colorado]: () => y.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[b.fc.Connecticut]: () => y.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[b.fc.DistrictOfColumbia]: () => y.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[b.fc.Delaware]: () => y.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[b.fc.Florida]: () => y.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[b.fc.Georgia]: () => y.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[b.fc.Hawaii]: () => y.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[b.fc.Iowa]: () => y.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[b.fc.Idaho]: () => y.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[b.fc.Illinois]: () => y.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[b.fc.Indiana]: () => y.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[b.fc.Kansas]: () => y.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[b.fc.Kentucky]: () => y.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[b.fc.Louisiana]: () => y.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[b.fc.Massachusetts]: () => y.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[b.fc.Maryland]: () => y.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[b.fc.Maine]: () => y.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[b.fc.Michigan]: () => y.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[b.fc.Minnesota]: () => y.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[b.fc.Missouri]: () => y.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[b.fc.Mississippi]: () => y.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[b.fc.Montana]: () => y.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[b.fc.NorthCarolina]: () => y.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[b.fc.NorthDakota]: () => y.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[b.fc.Nebraska]: () => y.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[b.fc.NewHampshire]: () => y.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[b.fc.NewJersey]: () => y.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[b.fc.NewMexico]: () => y.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[b.fc.Nevada]: () => y.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[b.fc.NewYork]: () => y.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[b.fc.Ohio]: () => y.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[b.fc.Oklahoma]: () => y.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[b.fc.Oregon]: () => y.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[b.fc.Pennsylvania]: () => y.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[b.fc.RhodeIsland]: () => y.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[b.fc.SouthCarolina]: () => y.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[b.fc.SouthDakota]: () => y.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[b.fc.Tennessee]: () => y.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[b.fc.Texas]: () => y.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[b.fc.Utah]: () => y.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[b.fc.Virginia]: () => y.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[b.fc.Vermont]: () => y.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[b.fc.Washington]: () => y.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[b.fc.Wisconsin]: () => y.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[b.fc.WestVirginia]: () => y.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[b.fc.Wyoming]: () => y.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var Q = n("./src/reddit/components/StateSort/index.m.less"),
				X = n.n(Q);

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = R.a.wrapped(O.a, "_Dropdown", X.a),
				te = Object(S.a)(ee),
				ne = e => {
					return e.indexOf("_") > 0 && re(e) === b.z.UnitedStates
				},
				se = e => {
					if (ne(e)) {
						return e.split("_")[1]
					}
					return b.fc.AllStates
				},
				re = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				oe = e => {
					const t = re(e),
						n = se(e);
					return ne(e) ? `${t}_${n}` : t
				},
				ae = Object(l.u)(),
				ie = Object(f.c)({
					dropdownIsOpen: Object(T.b)("StateSort--StateSortPicker")
				}),
				ce = Object(o.b)(ie, e => ({
					onOpenDropdown: () => e(Object(g.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, n) => {
						e(Object(h.b)(t)), e(Object(c.w)(b.z.UnitedStates + "_" + n))
					}
				}));
			var de = R.a.wrapped(ae(ce(e => {
				const t = `${e.baseUrl}?${Y.g}=${b.z.UnitedStates}`;
				return r.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, r.a.createElement(M, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, r.a.createElement(F, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : J(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), r.a.createElement(k.a.Consumer, null, n => r.a.createElement(te, $({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, n, {
					renderContentsHidden: !0
				}), Object.keys(b.fc).map(n => {
					const s = b.fc[n];
					return r.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === b.fc.AllStates ? t : `${t}_${e}`)(s), oe(s))
					}, r.a.createElement(x.b, {
						className: Object(a.a)(e.rowClassName, e.sort === s ? e.rowSelectedClassName : void 0),
						displayText: J(s),
						isSelected: e.sort === s
					}))
				}))))
			})), "Component", X.a);
			const le = {
				[b.z.Everywhere]: () => y.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[b.z.UnitedStates]: () => y.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[b.z.Argentina]: () => y.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[b.z.Australia]: () => y.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[b.z.Bulgaria]: () => y.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[b.z.Canada]: () => y.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[b.z.Chile]: () => y.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[b.z.Colombia]: () => y.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[b.z.Croatia]: () => y.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[b.z.CzechRepublic]: () => y.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[b.z.Finland]: () => y.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[b.z.France]: () => y.fbt._("France", null, {
					hk: "1fX2Y8"
				}),
				[b.z.Germany]: () => y.fbt._("Germany", null, {
					hk: "2mADuB"
				}),
				[b.z.Greece]: () => y.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[b.z.Hungary]: () => y.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[b.z.Iceland]: () => y.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[b.z.India]: () => y.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[b.z.Ireland]: () => y.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[b.z.Italy]: () => y.fbt._("Italy", null, {
					hk: "3EvGjk"
				}),
				[b.z.Japan]: () => y.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[b.z.Malaysia]: () => y.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[b.z.Mexico]: () => y.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[b.z.NewZealand]: () => y.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[b.z.Philippines]: () => y.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[b.z.Poland]: () => y.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[b.z.Portugal]: () => y.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[b.z.PuertoRico]: () => y.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[b.z.Romania]: () => y.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[b.z.Serbia]: () => y.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[b.z.Singapore]: () => y.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[b.z.Spain]: () => y.fbt._("Spain", null, {
					hk: "44RpFE"
				}),
				[b.z.Sweden]: () => y.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[b.z.Taiwan]: () => y.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[b.z.Thailand]: () => y.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[b.z.Turkey]: () => y.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[b.z.UnitedKingdom]: () => y.fbt._("United Kingdom", null, {
					hk: "rs1fl"
				})
			};
			var ue = n("./src/reddit/components/CountrySort/index.m.less"),
				me = n.n(ue);

			function pe() {
				return (pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const be = "CountrySort--CountrySortPicker",
				he = Object(l.u)(),
				fe = Object(f.c)({
					dropdownIsOpen: Object(T.b)(be)
				});
			var ge = he(Object(o.b)(fe, e => ({
					onCloseDropdown: t => e(Object(g.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(g.g)({
						tooltipId: t
					})),
					onClickLink: (t, n) => {
						e(Object(h.b)(t, {
							[w.b.FeedLoadReason]: w.a.GeoModeChange
						})), e(Object(c.w)(n))
					}
				}))(e => {
					const t = re(e.sort),
						n = se(e.sort),
						s = `${e.baseUrl}?${Y.g}=`;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(a.a)(me.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(be) : e.onOpenDropdown(be)
					}, r.a.createElement(M, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, r.a.createElement(F, {
						className: e.buttonClassName,
						displayText: (() => t in le ? le[t]() : le[b.z.Everywhere]())(),
						id: be,
						showDropdownTriangle: !0
					})), r.a.createElement(k.a.Consumer, null, n => r.a.createElement(te, pe({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: be
					}, n, {
						renderContentsHidden: !0
					}), Object.keys(b.z).map(n => {
						const o = b.z[n];
						return r.a.createElement("div", {
							key: o,
							onClick: () => e.onClickLink(`${s}${oe(o)}`, o)
						}, r.a.createElement(x.b, {
							className: Object(a.a)(e.rowClassName, t === o ? e.rowSelectedClassName : void 0),
							displayText: le[o](),
							isSelected: t === o
						}))
					})))), t === b.z.UnitedStates && r.a.createElement(de, {
						baseUrl: e.baseUrl,
						buttonClassName: e.buttonClassName,
						className: e.stateSortClassName,
						disabled: e.disabled,
						dropdownClassName: e.dropdownClassName,
						rowClassName: e.rowClassName,
						rowSelectedClassName: e.rowSelectedClassName,
						showStateAbbreviations: e.showStateAbbreviations,
						sort: n,
						wrapperClassName: e.wrapperClassName
					}))
				})),
				ye = n("./node_modules/path-browserify/index.js"),
				Se = n.n(ye),
				we = n("./src/reddit/components/TimeSort/index.m.less"),
				_e = n.n(we);

			function ke() {
				return (ke = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Oe = Object(S.a)(O.a),
				xe = R.a.div("ListingSortContainer", _e.a),
				Ce = Object(l.u)(),
				ve = Object(f.c)({
					dropdownIsOpen: Object(T.b)("TimeSort--SortPicker")
				});
			var Ee = Ce(Object(o.b)(ve, e => ({
					onOpenDropdown: () => e(Object(g.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(d.c)(e => r.a.createElement(xe, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, r.a.createElement(M, {
					className: e.wrapperClassName,
					disabled: !1
				}, r.a.createElement(F, {
					className: e.buttonClassName,
					displayText: Object(_.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), r.a.createElement(k.a.Consumer, null, t => r.a.createElement(Oe, ke({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [b.ic.HOUR, b.ic.DAY, b.ic.WEEK, b.ic.MONTH, b.ic.YEAR, b.ic.ALL].map(t => {
					const n = ((e, t) => {
							let n = e.url;
							return e.urlParams.sort || Object(l.J)(e) || (n = Se.a.join(n, t)), n
						})(e.pageLayer, e.listingSort),
						s = Object(p.a)(n, {
							[Y.C]: t
						}),
						o = s.split("?")[0],
						i = `${s.replace(o+"?","")}`;
					return r.a.createElement(x.b, {
						className: Object(a.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
						key: `time_sort_${t}`,
						displayText: Object(_.b)(t),
						href: {
							pathname: o,
							state: {
								[w.b.FeedLoadReason]: w.a.SortChange
							},
							search: i
						},
						isSelected: e.timeSort === t,
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(v.d)(t))
						}
					})
				}))))))),
				je = n("./src/reddit/constants/listings.ts"),
				Ne = n("./src/reddit/controls/Button/index.tsx"),
				Te = n("./src/reddit/icons/fonts/index.tsx"),
				Ie = n("./src/reddit/selectors/meta.ts"),
				Pe = n("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				Le = n.n(Pe);

			function De() {
				return (De = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Re = new Set([b.W.CONTROVERSIAL, b.W.TOP]),
				We = new Set([b.W.CONTROVERSIAL, b.W.RISING]),
				Be = new Set([b.W.CONTROVERSIAL]),
				Ae = "ListingSort--Overflow",
				ze = Object(l.u)({
					isFrontpage: l.A,
					isProfilePage: l.J,
					pageLayer: e => e
				}),
				He = Object(f.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, j.a, I.k, l.F, N.a, Ie.j, (e, t, n, s, r, o, a) => {
					if (e) return {
						isPopularPage: r,
						sortOptions: e,
						locale: a
					};
					const i = [b.W.HOT, b.W.NEW, b.W.TOP, b.W.RISING];
					return (t && (s || n) || r && n) && i.unshift(b.W.BEST), r && o && i.splice(3, 0, b.W.AWARDED), {
						isPopularPage: r,
						sortOptions: i,
						locale: a
					}
				});
			class Fe extends r.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(v.b)(e))
					}, this.renderSortButton = e => {
						const {
							sort: t,
							baseUrl: n,
							isProfilePage: s
						} = this.props, o = s ? Object(p.a)(n, {
							sort: e
						}) : Object(C.a)(n, `${e}/`), i = o.split("?")[0], c = s ? o.replace(i + "?", "") : void 0;
						return r.a.createElement(Ne.t, {
							className: Object(a.a)(Le.a.SortLink, e === t && Le.a.selected),
							kind: Ne.b.InternalLink,
							priority: Ne.c.Plain,
							Icon: n => r.a.createElement(z, De({}, n, {
								className: Object(a.a)(Le.a.SortIcon, n.className),
								sort: e,
								isFilled: e === t
							})),
							text: Object(_.a)(e),
							onClick: () => this.changeSort(e),
							to: {
								pathname: i,
								state: {
									[w.b.FeedLoadReason]: w.a.SortChange
								},
								search: c
							},
							key: e
						})
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: n,
							isPopularPage: s,
							sort: o
						} = this.props, a = s && !!n && e === b.W.HOT && o === b.W.HOT;
						return r.a.createElement(r.a.Fragment, {
							key: e
						}, this.renderSortButton(e), a && r.a.createElement(ge, {
							baseUrl: je.c[je.b.Popular],
							buttonClassName: Le.a.DropdownButton,
							className: Le.a.CountrySort,
							disabled: t,
							dropdownClassName: Le.a.Dropdown,
							rowClassName: Le.a.DropdownRow,
							rowSelectedClassName: Le.a.DropdownRowSelected,
							wrapperClassName: Le.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: n,
							stateSortClassName: Le.a.StateSort
						}))
					}
				}
				isLocaleDependentOverflowSort(e) {
					const {
						sort: t,
						isPopularPage: n,
						locale: s
					} = this.props;
					return !s.startsWith("en") && (n ? e === b.W.AWARDED && (t === b.W.HOT || t === b.W.TOP) : e === b.W.BEST && t === b.W.TOP)
				}
				isWideSortCurrentSelected(e) {
					const {
						sort: t
					} = this.props, n = new Set([b.W.TOP, b.W.NEW]);
					return Be.has(t) && n.has(e)
				}
				isOverflowSort(e) {
					return We.has(e) || this.isLocaleDependentOverflowSort(e) || this.isWideSortCurrentSelected(e)
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: n,
						sort: s,
						sortOptions: o,
						timeSort: i
					} = this.props, c = !t && Re.has(s), d = We.has(s), l = o.filter(e => !this.isOverflowSort(e)), u = o.filter(e => this.isOverflowSort(e) && e !== s);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(q, De({}, this.props, {
						buttonClassName: Le.a.DropdownButton,
						className: Object(a.a)(Le.a.SortDropdown, e),
						rowClassName: Le.a.DropdownRow,
						rowIconClassName: Le.a.DropdownRowIcon,
						rowSelectedClassName: Le.a.DropdownRowSelected,
						showTitle: !1
					})), r.a.createElement("div", {
						className: Object(a.a)(Le.a.SortButtons, e)
					}, l.map(this.renderSort)), d && this.renderSort(s), c && r.a.createElement(Ee, {
						buttonClassName: Le.a.DropdownButton,
						className: Le.a.TimeSort,
						dropdownClassName: Le.a.Dropdown,
						listingSort: s,
						onChange: n,
						rowClassName: Le.a.DropdownRow,
						rowSelectedClassName: Le.a.DropdownRowSelected,
						timeSort: i || b.jc,
						wrapperClassName: Le.a.DropdownSortWrapper
					}), u.length > 0 && r.a.createElement(q, De({}, this.props, {
						className: Object(a.a)(Le.a.SortOverflow, e),
						dropdownClassName: Le.a.Dropdown,
						dropdownId: Ae,
						rowClassName: Le.a.DropdownRow,
						rowIconClassName: Le.a.DropdownRowIcon,
						rowSelectedClassName: Le.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: u
					}), r.a.createElement("button", {
						className: Le.a.SortOverflowButton,
						id: Ae
					}, r.a.createElement(Te.a, {
						name: "overflow_horizontal"
					}))))
				}
			}
			var Me = ze(Object(o.b)(He)(Object(d.c)(Fe))),
				Ge = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				Ve = n.n(Ge);
			const Ue = Object(l.u)({
					isProfilePage: l.J,
					pageLayer: e => e
				}),
				Ke = Object(o.b)(null, (e, t) => {
					let {
						subredditId: n
					} = t;
					return {
						updateSortPreference: (t, s) => {
							if (n) {
								const r = Object(i.c)({
									sort: t,
									timeSort: s
								});
								e(Object(c.J)(n, r))
							}
						}
					}
				});
			class qe extends r.a.Component {
				constructor() {
					super(...arguments), this.blurListingBroadcast = () => {
						u.a.setState({
							isListingFocused: !1
						})
					}, this.focusListingBroadcast = () => {
						u.a.setState({
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
						countrySort: n,
						disabled: s = !1,
						isProfilePage: o,
						sort: i,
						sortOptions: c,
						subredditId: d,
						timeSort: l,
						updateSortPreference: u
					} = this.props;
					return r.a.createElement("div", {
						className: Object(a.a)(Ve.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, r.a.createElement(Me, {
						baseUrl: e,
						disabled: s,
						geopopularSort: n,
						onChange: u,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: c,
						timeSort: l
					}), !o && r.a.createElement(m.a, {
						className: Ve.a.LayoutSwitch,
						subredditId: d
					}))
				}
			}
			t.a = Ue(Ke(Object(d.c)(qe)))
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/PostList/index.tsx"),
				r = n("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(r.a)(s.a)
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/controls/Dropdown/index.m.less"),
				d = n.n(c);
			const l = {
				[a.W.BEST]: "best",
				[a.W.HOT]: "hot",
				[a.W.NEW]: "new",
				[a.W.CONTROVERSIAL]: "controversial",
				[a.W.TOP]: "top",
				[a.W.RISING]: "rising",
				[a.W.AWARDED]: "award"
			};

			function u(e) {
				let {
					className: t,
					isFilled: n,
					sort: s
				} = e;
				return l[s] ? r.a.createElement(i.a, {
					name: l[s],
					isFilled: n,
					className: Object(o.a)(t, d.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/ListingSort/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/SidebarContainer/index.m.less"),
				o = n.n(r);
			t.a = s.a.div("container", o.a)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = n("./src/reddit/constants/experiments.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/helpers/trackers/navigation.ts"),
				b = n("./src/reddit/selectors/experiments/countrySites.ts"),
				h = n("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				f = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				g = n("./src/reddit/components/SidebarFooter/index.m.less"),
				y = n.n(g);
			const {
				fbt: S
			} = n("./node_modules/fbt/lib/FbtPublic.js"), w = c.a.a("Link", y.a), _ = Object(a.c)({
				d2xPdpSideRailRecsVariant: h.a,
				isCountrySitesEnabled: b.b,
				isD2xPdpSideRailRecsEnabled: h.b,
				isNavbarLikeMwebEnabled: f.a
			}), k = Object(o.b)(_), O = Object(m.u)({
				isFrontpage: m.A,
				isCountrySitePage: m.y
			}), x = e => {
				let {
					reredditContent: t
				} = e;
				return r.a.createElement("div", {
					className: y.a.GreyRereddit
				}, t, r.a.createElement("div", {
					className: y.a.LinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(w, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, S._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(w, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, S._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(w, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, S._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(w, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, S._("Moderator Guidelines", null, {
					hk: "2O9otm"
				})))), r.a.createElement("div", {
					className: y.a.Copyright
				}, S._("Reddit Inc © {year}. All rights reserved", [S._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = O(k(Object(d.c)(e => {
				const t = Object(o.f)().getState(),
					n = Object(b.a)(t, Object(i.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === u.Jc.GreyRereddit || e.d2xPdpSideRailRecsVariant === u.Jc.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === u.Jc.LargeImagePreview ? e.reredditButtons : [];
					return r.a.createElement(x, {
						reredditContent: t
					})
				}
				if (!e.isFrontpage) return null;
				const s = t => {
					const s = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "English",
						it: "Italiano",
						pt: "Português"
					};
					return n.includes(t) || "en" === t ? r.a.createElement(w, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(p.a)(t))
					}, s[t]) : null
				};
				return r.a.createElement(l.a, {
					className: y.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, r.a.createElement("div", {
					className: y.a.LinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(w, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, S._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(w, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, S._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: y.a.Column
				}, r.a.createElement(w, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, S._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(w, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, S._("Moderator Guidelines", null, {
					hk: "2O9otm"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && r.a.createElement("div", {
					className: y.a.CountryLinkContainer
				}, r.a.createElement("div", {
					className: y.a.Column
				}, s("en"), s("fr"), s("it")), r.a.createElement("div", {
					className: y.a.Column
				}, s("de"), s("es"), s("pt"))), r.a.createElement("div", {
					className: y.a.Copyright
				}, S._("Reddit Inc © {year}. All rights reserved", [S._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			})))
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/lodash/throttle.js"),
				o = n.n(r),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/components/BackToTop/index.tsx"),
				l = n("./src/reddit/components/SidebarFooter/index.tsx"),
				u = n("./src/reddit/constants/componentSizes.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				b = n.n(p),
				h = n("./src/lib/lessComponent.tsx");

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const g = c.e[1] + 24,
				y = u.f + 8,
				S = y + 152 + 16,
				w = S + g + 8,
				_ = h.a.div("Container", b.a),
				k = h.a.wrapped(e => {
					let {
						className: t,
						isOverlay: n,
						...s
					} = e;
					return i.a.createElement(d.a, f({
						className: t,
						isOverlay: n,
						style: {
							top: `calc(100vh - ${n?y:8}px)`
						}
					}, s))
				}, "BackToTop", b.a),
				O = e => {
					let {
						children: t,
						className: n,
						isFakeOverlay: r,
						isSticky: o,
						shouldStickToBottom: a
					} = e;
					return i.a.createElement("div", {
						className: Object(s.a)(n, {
							[b.a.BottomStickyStyles]: a,
							[b.a.StickyStyles]: !a && o && !r,
							[b.a.StickyStylesFakeOverlay]: !a && !!r
						})
					}, t)
				};
			class x extends a.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > w,
						shouldFooterSticky: this.windowHeight > S
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
					}, c.K), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
							adComponentOnFakeOverlay: n,
							children: s,
							className: r,
							hideFooter: o,
							pageLayer: a,
							recommendationsComponent: c,
							reredditButtons: d
						}
					} = this, u = this.state.isAdSticky && !(!t && !s), m = this.state.isBottomSticky;
					return i.a.createElement(_, {
						className: r,
						innerRef: this.setWrapperRef
					}, i.a.createElement(O, {
						isFakeOverlay: n,
						isSticky: u,
						shouldStickToBottom: m
					}, t, s, c, !o && i.a.createElement(l.a, {
						reredditButtons: d
					})), !c && !this.props.hideBackToTop && i.a.createElement(k, {
						isOverlay: !!(null === (e = null == a ? void 0 : a.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const C = Object(m.u)();
			t.a = C(x)
		},
		"./src/reddit/components/StateSort/index.m.less": function(e, t, n) {
			e.exports = {
				_Dropdown: "KZGTzwiGn_74p_B8yZaKw",
				dropdown: "KZGTzwiGn_74p_B8yZaKw",
				Component: "_3-D0oENu00AlV9AmpZqxfm",
				component: "_3-D0oENu00AlV9AmpZqxfm"
			}
		},
		"./src/reddit/components/TimeSort/index.m.less": function(e, t, n) {
			e.exports = {
				ListingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey",
				listingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/reddit/components/SEOTitle/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/trackers/widgets.ts"),
				b = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = n("./src/reddit/selectors/experiments/topPosts.ts"),
				f = n("./src/reddit/selectors/structuredStyles.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				y = n("./src/reddit/models/Theme/index.ts"),
				S = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const w = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(S.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				_ = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(S.a)(e).widgetColors.sidebarWidgetHeaderColor,
				k = e => {
					const t = w(e);
					return Object(y.f)(t)
				},
				O = e => {
					const t = _(e);
					return Object(y.f)(t)
				};
			var x = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				C = n.n(x);
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = Object(u.u)(), j = Object(o.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.n)(e, t) || void 0,
						s = t.redditStyle || Object(f.l)(e, {
							subredditId: n
						}),
						r = Object(g.db)(e);
					return s || r
				},
				nigtmode: g.db,
				subredditId: u.n,
				topPostVariant: h.d
			}));
			class N extends r.a.Component {
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
					return e.backgroundColor = w(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = k(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = _(this.props), e.color = e.fill = O(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: s,
						headerButton: o,
						id: a,
						onClick: c,
						onHeaderClick: l,
						title: u,
						titleClassName: p,
						truncateThreshold: b
					} = this.props, h = n ? C.a.widgetContentOnly : C.a.widgetContent, f = !s && this.props.styles, g = f ? this.getWidgetBackgroundStyles() : {}, y = f ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(i.a)(t, C.a.widgetBackground, {
							[C.a.redditStyle]: s,
							[C.a.clickable]: !!c,
							[C.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: c,
						style: g
					}, u && r.a.createElement("div", {
						className: Object(i.a)(C.a.widgetHeader, {
							[C.a.clickable]: !!l
						}),
						id: a,
						style: y,
						onClick: l
					}, r.a.createElement("div", {
						className: Object(i.a)(C.a.widgetTitle, p)
					}, r.a.createElement(d.b, {
						type: d.a.Widget
					}, u)), o), r.a.createElement("div", {
						className: Object(i.a)(h, {
							[C.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(m.r, {
						className: C.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, v._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = E(j(Object(c.a)(Object(l.c)(N))))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "b", (function() {
				return E
			}));
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/reddit/actions/ads/index.ts"),
				i = n("./src/reddit/actions/focusedVerticals/index.ts"),
				c = n("./src/reddit/actions/gold/tooltips.ts"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/actions/postList.ts"),
				u = n("./src/reddit/actions/survey/index.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = n("./src/reddit/helpers/trackers/post.ts"),
				f = n("./src/reddit/components/PostList/Placeholder.tsx"),
				g = n("./src/reddit/featureFlags/index.ts"),
				y = n("./src/reddit/selectors/experiments/survey.ts"),
				S = n("./src/reddit/selectors/listings.ts"),
				w = n("./src/reddit/selectors/posts.ts"),
				_ = n("./src/reddit/selectors/subreddit.ts"),
				k = n("./src/reddit/selectors/tracking.ts");

			function O() {
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
			const x = O(),
				C = {
					apiError: S.c,
					apiPending: S.d,
					measureScrollFPS: g.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.S)(e, t),
					loadMore: S.g,
					postsById: w.T,
					postIds: Object(o.a)((e, t) => {
						let {
							listingKey: n,
							listingName: s,
							inSubredditOrProfile: r
						} = t;
						return Object(w.D)(e, n, s, r)
					}),
					subredditsById: _.bb,
					viewportDataLoaded: k.a,
					pageReferrer: p.V,
					postListPlaceholderComponent: () => f.a,
					isNpsScrollSurveyEnabled: y.e
				},
				v = Object(r.c)(C),
				E = e => ({
					onBottomViewed: (t, n) => e(l.c(t, n)),
					onFirstPostChanged: t => e(Object(c.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(a.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(i.a)({
							lastLoadedEnv: "server"
						})), e(d.L(t))
					},
					fireAdPixelsOfType: (t, n) => {
						e(d.z(t, n))
					},
					trackOnPostEnteredViewport: (t, n, s, r) => {
						e(d.O(t, s, r))
					},
					trackOnPostExitedViewport: (t, n, s, r) => {
						e(d.P(t, s, r))
					},
					showModalOnScroll: () => e(d.cb()),
					surveyTriggerScrollCounted: () => e(Object(u.l)())
				}),
				j = e => Object(b.b)({
					...e
				}),
				N = (e, t, n, s) => {
					const {
						listingKey: r,
						hostPostData: o,
						listingBelowVariant: a
					} = s;
					return Object(h.k)(e, t, "post", r, o, a, void 0)
				},
				T = Object(s.b)(v, E, (e, t, n) => ({
					...e,
					...t,
					...n,
					postComponentForLayout: j,
					postClickEventFactory: N
				}));
			t.a = e => Object(m.c)(x(T(e)))
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");
			const o = {
					[r.W.BEST]: () => s.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[r.W.HOT]: () => s.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[r.W.NEW]: () => s.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[r.W.CONTROVERSIAL]: () => s.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[r.W.RISING]: () => s.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[r.W.TOP]: () => s.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[r.W.AWARDED]: () => s.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				a = e => {
					const t = o[e];
					return t && t() || ""
				},
				i = {
					[r.ic.HOUR]: () => s.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[r.ic.DAY]: () => s.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[r.ic.WEEK]: () => s.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[r.ic.MONTH]: () => s.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[r.ic.YEAR]: () => s.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[r.ic.ALL]: () => s.fbt._("All Time", null, {
						hk: "3qt6Ct"
					})
				},
				c = e => {
					const t = i[e];
					return t && t() || ""
				}
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = r.a.createContext({})
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/models/WhitelistStatus/index.ts");
			const r = (e, t) => {
				const n = e.some(e => e.isNSFW),
					r = t.some(e => e.wls === s.b.NO_ADS);
				return !n && !r
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
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				o = n.n(r);
			const a = e => {
					let {
						isLoading: t
					} = e;
					return Object(s.a)(o.a.loadingBackground, {
						[o.a["m-loading"]]: t
					})
				},
				i = e => Object(s.a)(o.a.loadingBar, a(e))
		},
		"./src/reddit/helpers/trackers/contentTag.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return s
			})), n.d(t, "g", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "l", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "j", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "n", (function() {
				return m
			})), n.d(t, "m", (function() {
				return p
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "o", (function() {
				return h
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "d", (function() {
				return g
			}));
			const s = () => () => ({
					source: "content_tag",
					action: "view",
					noun: "verify_topics_module"
				}),
				r = () => () => ({
					source: "content_tag",
					action: "click",
					noun: "verify_topics_module"
				}),
				o = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_intro",
					actionInfo: {
						pageType: "survey_intro"
					}
				}),
				a = () => () => ({
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
				c = e => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: e,
					actionInfo: {
						pageType: e
					}
				}),
				d = e => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "survey_answer",
					actionInfo: {
						pageType: e
					}
				}),
				l = (e, t) => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "next",
					actionInfo: {
						reason: t.join(),
						pageType: e
					}
				}),
				u = e => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "back",
					actionInfo: {
						pageType: e
					}
				}),
				m = () => () => ({
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
				f = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "message_modsupport",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				g = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "learn_more",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			}));
			var s, r, o = n("./src/reddit/constants/tracking.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {}));
			const i = (e, t) => n => ({
					source: r.COMMUNITY_WIDGETS,
					action: o.c.CLICK,
					noun: s.SEE_MORE,
					widget: Object(a.vb)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...a.n
				}),
				c = (e, t) => n => ({
					source: r.POST,
					action: o.c.CLICK,
					noun: s.REREDDIT_PROMO,
					post: a.I(n, e),
					subreddit: a.hb(n),
					...t && {
						banner: {
							buttonText: t,
							id: s.REREDDIT_PROMO
						}
					},
					...a.n(n)
				}),
				d = () => e => ({
					source: r.SIDEBAR,
					action: o.c.VIEW,
					noun: s.TOPICS_WIDGET,
					...a.n(e)
				}),
				l = e => t => ({
					source: r.TOPICS_WIDGET,
					action: o.c.CLICK,
					noun: s.TOPIC,
					...a.n(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/pages/Subreddit/SurveyUnit.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/CommunityTopicSurvey/async.tsx"),
				c = n("./src/reddit/components/ContentSurvey/ContentRatingSurveyBanner.tsx"),
				d = n("./src/reddit/constants/experiments.ts"),
				l = n("./src/reddit/constants/postLayout.ts"),
				u = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts");
			const m = Object(s.a)({
				resolved: {},
				chunkName: () => "NewCommunityProgress",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e(6), n.e("CollectionCommentsPage~ModProgressModule~NewCommunityProgress"), n.e("NewCommunityProgress")]).then(n.bind(null, "./src/reddit/components/NewCommunityProgress/NewCommunityProgress.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/NewCommunityProgress/NewCommunityProgress.tsx"
				}
			});

			function p(e) {
				let {
					postLayout: t,
					subredditId: n,
					subredditSubscribers: s
				} = e;
				var r;
				const p = Object(a.e)(e => e.subreddits.survey[n]),
					b = Object(a.e)(e => e.subreddits.progressModule[n]),
					h = Object(a.e)(u.a),
					f = h !== d.Ae.NewModule;
				return (null === (r = null == b ? void 0 : b.cards) || void 0 === r ? void 0 : r.length) > 0 && f ? o.a.createElement(m, {
					closeModuleOnMount: !!t && t !== l.g.Large,
					subredditId: n,
					progressModule: b
				}) : t !== l.g.Large ? null : (null == p ? void 0 : p.isEligible) && !(null == p ? void 0 : p.response) && (!h || h && s > 100) ? o.a.createElement(c.a, {
					subredditId: n,
					survey: p
				}) : o.a.createElement(i.a, {
					subredditId: n
				})
			}
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/experiments/index.ts"),
				a = n("./src/reddit/selectors/experiments/utils.ts"),
				i = n("./src/reddit/selectors/meta.ts"),
				c = n("./node_modules/reselect/es/index.js");
			const d = Object(c.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => Object(i.h)(e) && Object(o.f)(e),
					experimentName: s.nc
				}), a.a),
				l = Object(c.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => !Object(i.h)(e) && Object(o.f)(e),
					experimentName: s.mc
				}), a.a),
				u = Object(c.a)(d, l, (e, t) => e || t),
				m = Object(c.a)(d, l, (e, t) => !(!e && !t))
		},
		"./src/reddit/selectors/experiments/econLeaderboards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const a = e => {
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: o.Q,
						experimentName: s.cd
					});
					return !(!t || Object(s.Tf)(t))
				},
				i = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: o.Q,
						experimentName: s.cd
					}) === s.Dd.ListingEnabled
				}
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return c
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "c", (function() {
				return S
			})), n.d(t, "g", (function() {
				return w
			})), n.d(t, "d", (function() {
				return _
			}));
			var s = n("./src/lib/objectSelector/index.ts"),
				r = n("./src/reddit/featureFlags/index.ts"),
				o = n("./src/reddit/selectors/posts.ts"),
				a = n("./src/reddit/selectors/subreddit.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const c = (e, t) => {
					const n = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (n) {
						const t = Object(a.U)(e, {
							subredditId: n
						});
						return t && t.displayText || ""
					}
					return ""
				},
				d = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				l = e => e.focusedVerticals.components.dismissed,
				u = [],
				m = Object(s.a)((e, t) => {
					const n = p(e, t);
					if (!n) return u;
					const s = Object(a.Y)(e, {
						subredditName: n.name
					});
					return s && s.postIds && s.postIds.length ? s.postIds : u
				}),
				p = (e, t) => {
					const n = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return n ? Object(a.U)(e, {
						subredditId: n
					}) : null
				},
				b = (e, t, n, s, r) => {
					const a = r.find(e => e <= t) || -1,
						i = r.find(e => e > t) || 1 / 0;
					return t !== i && t !== a && (!(a + n > t) && (!(t + n > i) && !((e, t, n) => {
						const s = n[t - 1],
							r = n[t],
							a = r && Object(o.G)(e, {
								postId: s
							}) || null,
							i = r && Object(o.G)(e, {
								postId: r
							}) || null;
						return a && a.isSponsored || i && i.isSponsored
					})(e, t, s)))
				},
				h = [3],
				f = Object(s.a)((e, t) => {
					let {
						existingDUPositions: n,
						listingProps: s
					} = t;
					const r = n.slice().sort();
					let a = -1;
					const i = Object(o.z)(e, {
							listingKey: s.listingKey
						}),
						c = [];
					return h.forEach(t => {
						let n = a + t;
						if (!(n >= i.length)) {
							for (; n < i.length && !b(e, n, t, i, r);) n += 1;
							n < i.length && (c.push(n), a = n)
						}
					}), c
				}),
				g = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				y = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				S = e => e.focusedVerticals.category,
				w = e => e.focusedVerticals.lastLoadedEnv,
				_ = e => {
					const t = Object(i.P)(e),
						n = r.d.geoSubredditRecommendationDULoggedIn(e),
						s = r.d.geoSubredditRecommendationDULoggedOut(e);
					return t && n || !t && s
				}
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = (e, t) => {
				let {
					listingKey: n
				} = t;
				return e.tracking.viewportDataLoaded[n]
			}
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"eb5aa411d697"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Frontpage~ModListing.3529ceaa87b7fef5fedb.js.map