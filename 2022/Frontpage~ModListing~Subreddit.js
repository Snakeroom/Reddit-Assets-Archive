// https://www.redditstatic.com/desktop2x/Frontpage~ModListing~Subreddit.964342173d5ba04174b2.js
// Retrieved at 6/29/2022, 9:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Frontpage~ModListing~Subreddit"], {
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "c", (function() {
				return S
			})), n.d(t, "b", (function() {
				return v
			}));
			var r, s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/performanceTimings/index.tsx"),
				a = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(r || (r = {}));
			var d, l = n("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var m = n("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				p = n("./src/reddit/selectors/platform.ts"),
				b = n("./src/reddit/selectors/user.ts");
			const h = Object(s.a)(a.g),
				f = Object(s.a)(a.e),
				g = Object(s.a)(a.h),
				w = Object(s.a)(a.c),
				y = Object(s.a)(a.f),
				_ = Object(s.a)(a.j),
				S = Object(s.a)(a.i),
				k = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const o = t(),
						a = Object(m.e)(o),
						d = Object(m.d)(o),
						p = Object(b.P)(o);
					if (a || !d) return;
					e(g());
					let y = !1;
					try {
						const t = p ? r.LoggedInGeo : r.LoggedOutGeo,
							n = await ((e, t, n) => Object(i.a)(e, {
								...c,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(s(), t);
						if (n.ok && n.body) {
							const {
								data: t
							} = n.body;
							if (O(t)) {
								if (C(t)) {
									e(w({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), y = !0
								} else if (x(t)) {
									const n = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: r,
											interactedSubreddit: s,
											category: o
										} = n.focusRecommendations[0],
										a = [r, s],
										i = Object(u.d)(a),
										c = Object(l.b)(a),
										d = Object(u.c)(r),
										m = {
											recommendedSubredditIds: [r.id],
											interactedSubredditIds: [s.id],
											subreddits: i,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: o,
											lastLoadedEnv: "client"
										};
									e(h(m)), y = !0
								}
							} else y = !1
						}
					} catch (_) {
						y = !1
					}
					y || e(f({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, O = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, C = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations;
					return !(!n || 0 !== n.length)
				}, x = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations,
						r = t && t.type;
					return !!(n && !C(e) && r === d.GEO && n[0] && n[0].recommendedSubreddit && n[0].interactedSubreddit)
				}, v = () => async (e, t, n) => {
					var r, s;
					const a = t(),
						i = Object(m.g)(a);
					if (Object(m.f)(a) || null === i || "client" === i) {
						const n = null === (s = null === (r = Object(p.b)(t())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === s ? void 0 : s.route.chunk,
							i = Object(b.Q)(a);
						return Object(o.i)(() => e(k()), {
							name: "getFocusedVerticalsRequested",
							page: n,
							isLoggedIn: i
						})
					}
					if ("server" === i) return e(y({
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
		"./src/reddit/components/CommunityTopicSurvey/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(r.a)({
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
			t.a = s
		},
		"./src/reddit/components/ContentSurvey/ContentRatingSurveyBanner.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
				const [a, p] = Object(r.useState)(!1), b = Object(d.a)();
				return Object(r.useEffect)(() => b(Object(c.h)()), [b]), s.a.createElement("div", {
					className: i.a.feedBanner,
					onClick: function() {
						p(!0), b(Object(c.g)())
					}
				}, s.a.createElement("div", {
					className: i.a.notepadSnoo
				}, s.a.createElement("img", {
					src: `${o.a.assetPath}/img/snoovatar-notepad.png`
				})), s.a.createElement("div", {
					className: i.a.bannerCopy
				}, s.a.createElement("p", {
					className: i.a.copy
				}, m._("Set up this community’s content tag", null, {
					hk: "3ssqQf"
				})), s.a.createElement("p", {
					className: i.a.meta
				}, m._("Take a quick survey to help people know what to expect when they visit this community", null, {
					hk: "3sUbRf"
				}))), s.a.createElement(l.a, {
					name: "caret_right",
					className: i.a.chevron
				}), a && s.a.createElement(u.a, {
					withOverlay: !0,
					subredditId: n,
					survey: t,
					onClose: () => p(!1)
				}))
			}
		},
		"./src/reddit/components/ContentSurvey/SurveyModal.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./src/higherOrderComponents/asModal/index.tsx");
			const o = Object(r.a)({
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
				a = Object(s.a)(o);
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/upperFirst.js"),
				o = n.n(s),
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
				w = n("./src/reddit/pages/Subreddit/SurveyUnit.tsx");
			const y = g.a.wrapped(p.a, "BackgroundPlaceholder", h.a),
				_ = g.a.wrapped(m.n, "SubmitLink", h.a),
				S = e => {
					switch (e) {
						case d.W.RISING:
							return r.fbt._("Create a new post and take all the glory", null, {
								hk: "1NhXUe"
							});
						case d.W.TOP:
						case d.W.CONTROVERSIAL:
							return null;
						default:
							return r.fbt._("Be the first to till this fertile land.", null, {
								hk: "VYQD0"
							})
					}
				},
				k = e => {
					let {
						listingName: t,
						sort: n
					} = e;
					const s = S(n);
					return i.a.createElement("div", {
						className: h.a.MainContent
					}, i.a.createElement("div", {
						className: h.a.PrimaryText
					}, (e => {
						switch (e) {
							case d.W.RISING:
								return r.fbt._("Looks like nothing is rising fast enough in this subreddit", null, {
									hk: "kJ3Te"
								});
							case d.W.TOP:
							case d.W.CONTROVERSIAL:
								return r.fbt._("No posts were found using the {listing sort option} sort. Try changing the sort.", [r.fbt._param("listing sort option", o()(e))], {
									hk: "48BeCW"
								});
							default:
								return r.fbt._("There are no posts in this subreddit", null, {
									hk: "5mVkT"
								})
						}
					})(n)), t && !Object(l.a)(t) && !!s && i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: h.a.SecondaryText
					}, S(n)), i.a.createElement(_, {
						to: `/r/${t}/submit`
					}, r.fbt._("Add a post", null, {
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
				}, r.fbt._("Reddit gets better when you join communities, so find some that you’ll love!", null, {
					hk: "7B6oq"
				})), i.a.createElement(_, {
					to: "/r/popular"
				}, r.fbt._("Browse Popular Posts", null, {
					hk: "2zfgXv"
				})));
			t.a = e => i.a.createElement(i.a.Fragment, null, e.subreddit && i.a.createElement(w.a, {
				subredditId: e.subreddit.id,
				subredditSubscribers: e.subreddit.subscribers
			}), i.a.createElement("div", {
				"data-testid": "empty-subreddit",
				className: Object(f.a)(h.a.Component, h.a.EmptyHomepage)
			}, i.a.createElement(y, {
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
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
				w = n("./src/reddit/controls/Dropdown/Row.tsx"),
				y = n("./src/reddit/icons/fonts/index.tsx"),
				_ = n("./src/reddit/selectors/telemetry.ts"),
				S = n("./src/reddit/selectors/tooltip.ts"),
				k = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				O = n.n(k);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const x = "view--layout--FUE",
				v = "LayoutSwitch--picker",
				E = Object(c.a)(g.a),
				N = {
					[b.d.Card]: function(e) {
						return o.a.createElement(y.a, C({}, e, {
							name: "view_card"
						}))
					},
					[b.d.Classic]: function(e) {
						return o.a.createElement(y.a, C({}, e, {
							name: "view_classic"
						}))
					},
					[b.d.Compact]: function(e) {
						return o.a.createElement(y.a, C({}, e, {
							name: "view_compact"
						}))
					}
				},
				j = {
					[b.d.Card]: () => r.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[b.d.Classic]: () => r.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[b.d.Compact]: () => r.fbt._("compact", null, {
						hk: "1N7pcz"
					}),
					[b.d.Search]: () => r.fbt._("search", null, {
						hk: "49uLRt"
					})
				},
				T = Object(h.u)(),
				I = Object(i.c)({
					dropdownIsOpen: Object(S.b)(v),
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
							sendEvent: r,
							subredditId: s
						} = this.props;
						t ? t(e) : (n(e, s), r(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(_.Z)(t),
							subreddit: Object(_.hb)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: n,
							onLayoutClick: r,
							postLayout: s
						} = this.props, a = n || b.e[s], i = e === a, c = N[e], l = j[e];
						return o.a.createElement(w.b, C({}, t, {
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
							onClick: i ? void 0 : r,
							isFilled: i && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return o.a.createElement(E, C({}, e, {
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
						postLayout: r
					} = this.props, s = t || b.e[r];
					return o.a.createElement("div", {
						className: Object(d.a)(O.a.Container, e),
						id: x
					}, o.a.createElement("div", {
						className: O.a.DropdownContainer,
						onClick: n
					}, this.renderItem(s, {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
				w = n("./node_modules/fbt/lib/FbtPublic.js"),
				y = n("./src/higherOrderComponents/asTooltip.tsx"),
				_ = n("./src/reddit/constants/history.ts"),
				S = n("./src/reddit/constants/listingSorts.ts"),
				k = n("./src/reddit/contexts/Tooltip.ts"),
				O = n("./src/reddit/controls/Dropdown/index.tsx"),
				C = n("./src/reddit/controls/Dropdown/Row.tsx"),
				x = n("./src/reddit/helpers/path/index.ts"),
				v = n("./src/reddit/helpers/trackers/navigation.ts"),
				E = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				N = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				j = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				T = n("./src/reddit/selectors/tooltip.ts"),
				I = n("./src/reddit/selectors/user.ts"),
				P = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				L = n("./src/reddit/components/ListingSort/index.m.less"),
				D = n.n(L),
				R = n("./src/lib/lessComponent.tsx");

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const W = "ListingSort--SortPicker",
				z = Object(y.a)(R.a.wrapped(O.a, "Dropdown", D.a)),
				A = R.a.wrapped(P.a, "ListingSortIcon", D.a),
				M = (R.a.wrapped(E.b, "DropdownTriangle", D.a), R.a.div("Title", D.a)),
				F = R.a.wrapped(e => s.a.createElement(C.b, B({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", D.a),
				H = e => {
					let {
						disabled: t,
						...n
					} = e;
					return s.a.createElement("div", B({}, n, {
						className: Object(a.a)(D.a.SortWrapper, n.className, {
							[D.a.isDisabled]: t
						})
					}))
				},
				G = R.a.div("DropdownRowDisabled", D.a),
				U = Object(l.u)({
					isFrontpage: l.A,
					isProfilePage: l.J,
					pageLayer: e => e
				}),
				V = Object(f.c)({
					isAwardListingExperimentEnabled: j.a,
					isBestSortPopularEnabled: N.a,
					user: I.k,
					dropdownIsOpen: (e, t) => Object(T.b)(t.dropdownId || W)(e),
					isPopularPage: l.F
				}),
				K = Object(o.b)(V, (e, t) => {
					let {
						dropdownId: n,
						pageLayer: r
					} = t;
					return {
						onOpenDropdown: () => e(Object(g.h)({
							tooltipId: n || W
						}))
					}
				});
			var q = R.a.wrapped(U(K(Object(d.c)(e => s.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && s.a.createElement(M, null, w.fbt._("Sort", null, {
					hk: "2BfINq"
				})), s.a.createElement(H, {
					disabled: e.disabled
				}, e.children || s.a.createElement(F, {
					className: e.buttonClassName,
					displayText: Object(S.a)(e.sort),
					id: e.dropdownId || W,
					showDropdownTriangle: !0
				}, s.a.createElement(A, {
					sort: e.sort
				}))), s.a.createElement(k.a.Consumer, null, t => s.a.createElement(z, B({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || W
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? s.a.createElement(G, null, w.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, n, r, s) => {
					const o = [b.W.HOT, b.W.NEW, b.W.TOP, b.W.RISING];
					return (e && (n || r) || t && r) && o.unshift(b.W.BEST), t && s && o.splice(3, 0, b.W.AWARDED), o
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => {
					const n = e.isProfilePage ? Object(p.a)(e.baseUrl, {
							sort: t
						}) : Object(x.a)(e.baseUrl, `${t}/`),
						r = n.split("?")[0],
						o = e.isProfilePage ? n.replace(r + "?", "") : void 0;
					return s.a.createElement(C.b, {
						className: Object(a.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
						displayText: Object(S.a)(t),
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(v.b)(t))
						},
						href: {
							pathname: r,
							state: {
								[_.b.FeedLoadReason]: _.a.SortChange
							},
							search: o
						},
						isSelected: e.sort === t,
						key: t
					}, s.a.createElement(A, {
						className: e.rowIconClassName,
						sort: t
					}))
				}))))))), "ListingSort", D.a),
				Y = n("./src/reddit/constants/parameters.ts");
			const J = e => {
					const t = Q[e];
					return t && t() || ""
				},
				Q = {
					[b.fc.AllStates]: () => w.fbt._("All", null, {
						hk: "3FfdRL"
					}),
					[b.fc.Alaska]: () => w.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[b.fc.Alabama]: () => w.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[b.fc.Arkansas]: () => w.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[b.fc.Arizona]: () => w.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[b.fc.California]: () => w.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[b.fc.Colorado]: () => w.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[b.fc.Connecticut]: () => w.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[b.fc.DistrictOfColumbia]: () => w.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[b.fc.Delaware]: () => w.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[b.fc.Florida]: () => w.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[b.fc.Georgia]: () => w.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[b.fc.Hawaii]: () => w.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[b.fc.Iowa]: () => w.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[b.fc.Idaho]: () => w.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[b.fc.Illinois]: () => w.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[b.fc.Indiana]: () => w.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[b.fc.Kansas]: () => w.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[b.fc.Kentucky]: () => w.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[b.fc.Louisiana]: () => w.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[b.fc.Massachusetts]: () => w.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[b.fc.Maryland]: () => w.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[b.fc.Maine]: () => w.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[b.fc.Michigan]: () => w.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[b.fc.Minnesota]: () => w.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[b.fc.Missouri]: () => w.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[b.fc.Mississippi]: () => w.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[b.fc.Montana]: () => w.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[b.fc.NorthCarolina]: () => w.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[b.fc.NorthDakota]: () => w.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[b.fc.Nebraska]: () => w.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[b.fc.NewHampshire]: () => w.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[b.fc.NewJersey]: () => w.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[b.fc.NewMexico]: () => w.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[b.fc.Nevada]: () => w.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[b.fc.NewYork]: () => w.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[b.fc.Ohio]: () => w.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[b.fc.Oklahoma]: () => w.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[b.fc.Oregon]: () => w.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[b.fc.Pennsylvania]: () => w.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[b.fc.RhodeIsland]: () => w.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[b.fc.SouthCarolina]: () => w.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[b.fc.SouthDakota]: () => w.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[b.fc.Tennessee]: () => w.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[b.fc.Texas]: () => w.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[b.fc.Utah]: () => w.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[b.fc.Virginia]: () => w.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[b.fc.Vermont]: () => w.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[b.fc.Washington]: () => w.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[b.fc.Wisconsin]: () => w.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[b.fc.WestVirginia]: () => w.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[b.fc.Wyoming]: () => w.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var Z = n("./src/reddit/components/StateSort/index.m.less"),
				X = n.n(Z);

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = R.a.wrapped(O.a, "_Dropdown", X.a),
				te = Object(y.a)(ee),
				ne = e => {
					return e.indexOf("_") > 0 && se(e) === b.z.UnitedStates
				},
				re = e => {
					if (ne(e)) {
						return e.split("_")[1]
					}
					return b.fc.AllStates
				},
				se = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				oe = e => {
					const t = se(e),
						n = re(e);
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
				return s.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, s.a.createElement(H, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, s.a.createElement(F, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : J(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), s.a.createElement(k.a.Consumer, null, n => s.a.createElement(te, $({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, n, {
					renderContentsHidden: !0
				}), Object.keys(b.fc).map(n => {
					const r = b.fc[n];
					return s.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === b.fc.AllStates ? t : `${t}_${e}`)(r), oe(r))
					}, s.a.createElement(C.b, {
						className: Object(a.a)(e.rowClassName, e.sort === r ? e.rowSelectedClassName : void 0),
						displayText: J(r),
						isSelected: e.sort === r
					}))
				}))))
			})), "Component", X.a);
			const le = {
				[b.z.Everywhere]: () => w.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[b.z.UnitedStates]: () => w.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[b.z.Argentina]: () => w.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[b.z.Australia]: () => w.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[b.z.Bulgaria]: () => w.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[b.z.Canada]: () => w.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[b.z.Chile]: () => w.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[b.z.Colombia]: () => w.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[b.z.Croatia]: () => w.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[b.z.CzechRepublic]: () => w.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[b.z.Finland]: () => w.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[b.z.France]: () => w.fbt._("France", null, {
					hk: "1fX2Y8"
				}),
				[b.z.Germany]: () => w.fbt._("Germany", null, {
					hk: "2mADuB"
				}),
				[b.z.Greece]: () => w.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[b.z.Hungary]: () => w.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[b.z.Iceland]: () => w.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[b.z.India]: () => w.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[b.z.Ireland]: () => w.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[b.z.Italy]: () => w.fbt._("Italy", null, {
					hk: "3EvGjk"
				}),
				[b.z.Japan]: () => w.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[b.z.Malaysia]: () => w.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[b.z.Mexico]: () => w.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[b.z.NewZealand]: () => w.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[b.z.Philippines]: () => w.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[b.z.Poland]: () => w.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[b.z.Portugal]: () => w.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[b.z.PuertoRico]: () => w.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[b.z.Romania]: () => w.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[b.z.Serbia]: () => w.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[b.z.Singapore]: () => w.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[b.z.Spain]: () => w.fbt._("Spain", null, {
					hk: "44RpFE"
				}),
				[b.z.Sweden]: () => w.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[b.z.Taiwan]: () => w.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[b.z.Thailand]: () => w.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[b.z.Turkey]: () => w.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[b.z.UnitedKingdom]: () => w.fbt._("United Kingdom", null, {
					hk: "rs1fl"
				})
			};
			var ue = n("./src/reddit/components/CountrySort/index.m.less"),
				me = n.n(ue);

			function pe() {
				return (pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
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
							[_.b.FeedLoadReason]: _.a.GeoModeChange
						})), e(Object(c.w)(n))
					}
				}))(e => {
					const t = se(e.sort),
						n = re(e.sort),
						r = `${e.baseUrl}?${Y.g}=`;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: Object(a.a)(me.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(be) : e.onOpenDropdown(be)
					}, s.a.createElement(H, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, s.a.createElement(F, {
						className: e.buttonClassName,
						displayText: (() => t in le ? le[t]() : le[b.z.Everywhere]())(),
						id: be,
						showDropdownTriangle: !0
					})), s.a.createElement(k.a.Consumer, null, n => s.a.createElement(te, pe({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: be
					}, n, {
						renderContentsHidden: !0
					}), Object.keys(b.z).map(n => {
						const o = b.z[n];
						return s.a.createElement("div", {
							key: o,
							onClick: () => e.onClickLink(`${r}${oe(o)}`, o)
						}, s.a.createElement(C.b, {
							className: Object(a.a)(e.rowClassName, t === o ? e.rowSelectedClassName : void 0),
							displayText: le[o](),
							isSelected: t === o
						}))
					})))), t === b.z.UnitedStates && s.a.createElement(de, {
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
				we = n("./node_modules/path-browserify/index.js"),
				ye = n.n(we),
				_e = n("./src/reddit/components/TimeSort/index.m.less"),
				Se = n.n(_e);

			function ke() {
				return (ke = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Oe = Object(y.a)(O.a),
				Ce = R.a.div("ListingSortContainer", Se.a),
				xe = Object(l.u)(),
				ve = Object(f.c)({
					dropdownIsOpen: Object(T.b)("TimeSort--SortPicker")
				});
			var Ee = xe(Object(o.b)(ve, e => ({
					onOpenDropdown: () => e(Object(g.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(d.c)(e => s.a.createElement(Ce, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, s.a.createElement(H, {
					className: e.wrapperClassName,
					disabled: !1
				}, s.a.createElement(F, {
					className: e.buttonClassName,
					displayText: Object(S.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), s.a.createElement(k.a.Consumer, null, t => s.a.createElement(Oe, ke({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [b.ic.HOUR, b.ic.DAY, b.ic.WEEK, b.ic.MONTH, b.ic.YEAR, b.ic.ALL].map(t => {
					const n = ((e, t) => {
							let n = e.url;
							return e.urlParams.sort || Object(l.J)(e) || (n = ye.a.join(n, t)), n
						})(e.pageLayer, e.listingSort),
						r = Object(p.a)(n, {
							[Y.A]: t
						}),
						o = r.split("?")[0],
						i = `${r.replace(o+"?","")}`;
					return s.a.createElement(C.b, {
						className: Object(a.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
						key: `time_sort_${t}`,
						displayText: Object(S.b)(t),
						href: {
							pathname: o,
							state: {
								[_.b.FeedLoadReason]: _.a.SortChange
							},
							search: i
						},
						isSelected: e.timeSort === t,
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(v.d)(t))
						}
					})
				}))))))),
				Ne = n("./src/reddit/constants/listings.ts"),
				je = n("./src/reddit/controls/Button/index.tsx"),
				Te = n("./src/reddit/icons/fonts/index.tsx"),
				Ie = n("./src/reddit/selectors/meta.ts"),
				Pe = n("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				Le = n.n(Pe);

			function De() {
				return (De = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Re = new Set([b.W.CONTROVERSIAL, b.W.TOP]),
				Be = new Set([b.W.CONTROVERSIAL, b.W.RISING]),
				We = new Set([b.W.CONTROVERSIAL]),
				ze = "ListingSort--Overflow",
				Ae = Object(l.u)({
					isFrontpage: l.A,
					isProfilePage: l.J,
					pageLayer: e => e
				}),
				Me = Object(f.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, N.a, I.k, l.F, j.a, Ie.i, (e, t, n, r, s, o, a) => {
					if (e) return {
						isPopularPage: s,
						sortOptions: e,
						locale: a
					};
					const i = [b.W.HOT, b.W.NEW, b.W.TOP, b.W.RISING];
					return (t && (r || n) || s && n) && i.unshift(b.W.BEST), s && o && i.splice(3, 0, b.W.AWARDED), {
						isPopularPage: s,
						sortOptions: i,
						locale: a
					}
				});
			class Fe extends s.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(v.b)(e))
					}, this.renderSortButton = e => {
						const {
							sort: t,
							baseUrl: n,
							isProfilePage: r
						} = this.props, o = r ? Object(p.a)(n, {
							sort: e
						}) : Object(x.a)(n, `${e}/`), i = o.split("?")[0], c = r ? o.replace(i + "?", "") : void 0;
						return s.a.createElement(je.t, {
							className: Object(a.a)(Le.a.SortLink, e === t && Le.a.selected),
							kind: je.b.InternalLink,
							priority: je.c.Plain,
							Icon: n => s.a.createElement(A, De({}, n, {
								className: Object(a.a)(Le.a.SortIcon, n.className),
								sort: e,
								isFilled: e === t
							})),
							text: Object(S.a)(e),
							onClick: () => this.changeSort(e),
							to: {
								pathname: i,
								state: {
									[_.b.FeedLoadReason]: _.a.SortChange
								},
								search: c
							},
							key: e
						})
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: n,
							isPopularPage: r,
							sort: o
						} = this.props, a = r && !!n && e === b.W.HOT && o === b.W.HOT;
						return s.a.createElement(s.a.Fragment, {
							key: e
						}, this.renderSortButton(e), a && s.a.createElement(ge, {
							baseUrl: Ne.c[Ne.b.Popular],
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
						locale: r
					} = this.props;
					return !r.startsWith("en") && (n ? e === b.W.AWARDED && (t === b.W.HOT || t === b.W.TOP) : e === b.W.BEST && t === b.W.TOP)
				}
				isWideSortCurrentSelected(e) {
					const {
						sort: t
					} = this.props, n = new Set([b.W.TOP, b.W.NEW]);
					return We.has(t) && n.has(e)
				}
				isOverflowSort(e) {
					return Be.has(e) || this.isLocaleDependentOverflowSort(e) || this.isWideSortCurrentSelected(e)
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: n,
						sort: r,
						sortOptions: o,
						timeSort: i
					} = this.props, c = !t && Re.has(r), d = Be.has(r), l = o.filter(e => !this.isOverflowSort(e)), u = o.filter(e => this.isOverflowSort(e) && e !== r);
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(q, De({}, this.props, {
						buttonClassName: Le.a.DropdownButton,
						className: Object(a.a)(Le.a.SortDropdown, e),
						rowClassName: Le.a.DropdownRow,
						rowIconClassName: Le.a.DropdownRowIcon,
						rowSelectedClassName: Le.a.DropdownRowSelected,
						showTitle: !1
					})), s.a.createElement("div", {
						className: Object(a.a)(Le.a.SortButtons, e)
					}, l.map(this.renderSort)), d && this.renderSort(r), c && s.a.createElement(Ee, {
						buttonClassName: Le.a.DropdownButton,
						className: Le.a.TimeSort,
						dropdownClassName: Le.a.Dropdown,
						listingSort: r,
						onChange: n,
						rowClassName: Le.a.DropdownRow,
						rowSelectedClassName: Le.a.DropdownRowSelected,
						timeSort: i || b.jc,
						wrapperClassName: Le.a.DropdownSortWrapper
					}), u.length > 0 && s.a.createElement(q, De({}, this.props, {
						className: Object(a.a)(Le.a.SortOverflow, e),
						dropdownClassName: Le.a.Dropdown,
						dropdownId: ze,
						rowClassName: Le.a.DropdownRow,
						rowIconClassName: Le.a.DropdownRowIcon,
						rowSelectedClassName: Le.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: u
					}), s.a.createElement("button", {
						className: Le.a.SortOverflowButton,
						id: ze
					}, s.a.createElement(Te.a, {
						name: "overflow_horizontal"
					}))))
				}
			}
			var He = Ae(Object(o.b)(Me)(Object(d.c)(Fe))),
				Ge = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				Ue = n.n(Ge);
			const Ve = Object(l.u)({
					isProfilePage: l.J,
					pageLayer: e => e
				}),
				Ke = Object(o.b)(null, (e, t) => {
					let {
						subredditId: n
					} = t;
					return {
						updateSortPreference: (t, r) => {
							if (n) {
								const s = Object(i.c)({
									sort: t,
									timeSort: r
								});
								e(Object(c.J)(n, s))
							}
						}
					}
				});
			class qe extends s.a.Component {
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
						disabled: r = !1,
						isProfilePage: o,
						sort: i,
						sortOptions: c,
						subredditId: d,
						timeSort: l,
						updateSortPreference: u
					} = this.props;
					return s.a.createElement("div", {
						className: Object(a.a)(Ue.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, s.a.createElement(He, {
						baseUrl: e,
						disabled: r,
						geopopularSort: n,
						onChange: u,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: c,
						timeSort: l
					}), !o && s.a.createElement(m.a, {
						className: Ue.a.LayoutSwitch,
						subredditId: d
					}))
				}
			}
			t.a = Ve(Ke(Object(d.c)(qe)))
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/PostList/index.tsx"),
				s = n("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(s.a)(r.a)
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
					sort: r
				} = e;
				return l[r] ? s.a.createElement(i.a, {
					name: l[r],
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
		"./src/reddit/components/PowerupsCncModule/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(r.a)({
				resolved: {},
				chunkName: () => "PowerupsCncModule",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.resolve().then(n.bind(null, "./src/reddit/components/PowerupsCncModule/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/PowerupsCncModule/index.tsx"
				}
			})
		},
		"./src/reddit/components/PowerupsCncModule/index.m.less": function(e, t, n) {
			e.exports = {
				feedBanner: "_2I3Bfot0_z2fpeo6zu0l2J",
				powerupsLogo: "TQxDD5iDKrkEL8_gkvPUG",
				bolt: "lLsxHGuplL1k0pxt72AKH",
				bannerText: "_3yaV1tcyLQQaYxZ9yj1uPA",
				heading: "_2lL5MmI9e4lUGXlgHCdMMq",
				description: "_2Q6-RCjBdZlxyT48OReije",
				chevron: "_1GgOcxnjXNupiwBONGaA3T"
			}
		},
		"./src/reddit/components/PowerupsCncModule/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "isPowerupsCncModuleHiddenBySpamLimit", (function() {
				return w
			}));
			var r = n("./src/config.ts"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/opener/index.ts"),
				c = n("./src/reddit/constants/localStorage.ts"),
				d = n("./src/reddit/helpers/localStorage/index.ts"),
				l = n("./src/reddit/helpers/trackers/powerups.ts"),
				u = n("./src/reddit/hooks/useTracking.ts"),
				m = n("./src/reddit/icons/fonts/index.tsx"),
				p = n("./src/reddit/routes/powerups/index.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/components/PowerupsCncModule/index.m.less"),
				f = n.n(h);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js"), w = e => {
				return Object(d.j)(c.b.POWERUPS_CNC_MODULE_VISIBILITY_STORE, e) > 1
			};
			t.default = e => {
				let {
					subredditId: t
				} = e;
				const n = Object(u.a)(),
					h = Object(a.e)(e => Object(b.U)(e, {
						subredditId: t
					})),
					y = !!h;
				return Object(s.useEffect)(() => {
					y && (Object(d.T)(c.b.POWERUPS_CNC_MODULE_VISIBILITY_STORE, t), w(t) || n(Object(l.c)()))
				}, [n, y, t]), y ? o.a.createElement("a", {
					className: f.a.feedBanner,
					onClick: () => {
						n(Object(l.b)())
					},
					href: `${r.a.redditUrl}${p.a}`,
					rel: i.c,
					target: "_blank"
				}, o.a.createElement("div", {
					className: f.a.powerupsLogo
				}, o.a.createElement("img", {
					className: f.a.bolt,
					src: `${r.a.assetPath}/img/powerups/powerups-cnc.svg`,
					alt: g._("powerups lightning bolt", null, {
						hk: "2QR5Up"
					})
				})), o.a.createElement("div", {
					className: f.a.bannerText
				}, o.a.createElement("p", {
					className: f.a.heading
				}, g._("Give {subreddit name} members a way to give back", [g._param("subreddit name", h.displayText)], {
					hk: "4poXz"
				})), o.a.createElement("p", {
					className: f.a.description
				}, g._("Harness the power of your community to unlock special perks and features using Powerups.", null, {
					hk: "fJGis"
				}))), o.a.createElement(m.a, {
					name: "caret_right",
					className: f.a.chevron
				})) : null
			}
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/SidebarContainer/index.m.less"),
				o = n.n(s);
			t.a = r.a.div("container", o.a)
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = n("./src/reddit/constants/experiments.ts"),
				m = n("./src/reddit/constants/location.ts"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/helpers/getReredditLinkWithYear/index.ts"),
				h = n("./src/reddit/helpers/trackers/navigation.ts"),
				f = n("./src/reddit/selectors/experiments/countrySites.ts"),
				g = n("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				w = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				y = n("./src/reddit/selectors/meta.ts"),
				_ = n("./src/reddit/components/SidebarFooter/index.m.less"),
				S = n.n(_);
			const {
				fbt: k
			} = n("./node_modules/fbt/lib/FbtPublic.js"), O = c.a.a("Link", S.a), C = Object(a.c)({
				countryCode: y.b,
				d2xPdpSideRailRecsVariant: g.a,
				isCountrySitesEnabled: f.b,
				isD2xPdpSideRailRecsEnabled: g.b,
				isNavbarLikeMwebEnabled: w.a
			}), x = Object(o.b)(C), v = Object(p.u)({
				isFrontpage: p.A,
				isCountrySitePage: p.y
			}), E = e => {
				let {
					countryCode: t,
					reredditContent: n
				} = e;
				return s.a.createElement("div", {
					className: S.a.GreyRereddit
				}, n, s.a.createElement(O, {
					href: "https://www.reddithelp.com"
				}, k._("help", null, {
					hk: "4lyYaD"
				})), s.a.createElement(O, {
					href: "https://www.reddit.com/coins"
				}, k._("Reddit coins", null, {
					hk: "32iMaN"
				})), s.a.createElement(O, {
					href: "https://www.reddit.com/premium"
				}, k._("Reddit premium", null, {
					hk: "RuO3A"
				})), !!m.c[t] && s.a.createElement(s.a.Fragment, null, s.a.createElement(O, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, k._("Impressum", null, {
					hk: "4cKXSI"
				})), s.a.createElement(O, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, k._("Transparency report", null, {
					hk: "3CgBdG"
				})), s.a.createElement(O, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: S.a.NoneCapitalizeLink
				}, k._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), s.a.createElement(O, {
					href: "https://www.redditinc.com/"
				}, k._("about", null, {
					hk: "1sqJKs"
				})), s.a.createElement(O, {
					href: "https://www.redditinc.com/careers"
				}, k._("careers", null, {
					hk: "26ABvc"
				})), s.a.createElement(O, {
					href: "https://www.redditinc.com/press"
				}, k._("press", null, {
					hk: "2Qmgdz"
				})), s.a.createElement(O, {
					href: "https://www.redditinc.com/advertising"
				}, k._("advertise", null, {
					hk: "Mt40U"
				})), s.a.createElement(O, {
					href: "http://www.redditblog.com/"
				}, k._("blog", null, {
					hk: "46IQJw"
				})), s.a.createElement(O, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, k._("Terms", null, {
					hk: "4qRzfE"
				})), s.a.createElement(O, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, k._("Content policy", null, {
					hk: "1DyxZS"
				})), s.a.createElement(O, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, k._("Privacy policy", null, {
					hk: "10K04G"
				})), s.a.createElement(O, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, k._("Mod policy", null, {
					hk: "2gYc2T"
				})), s.a.createElement("div", {
					className: S.a.Copyright
				}, k._("Reddit Inc © {year}. All rights reserved", [k._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = v(x(Object(d.c)(e => {
				const t = Object(o.f)().getState(),
					n = Object(f.a)(t, Object(i.c)());
				if (e.isNavbarLikeMwebEnabled) return e.isFrontpage ? s.a.createElement(l.a, {
					className: S.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, s.a.createElement("div", {
					className: S.a.LinkContainer
				}, s.a.createElement("div", {
					className: S.a.Column
				}, s.a.createElement(O, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, k._("User Agreement", null, {
					hk: "2RA6JL"
				})), s.a.createElement(O, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, k._("Privacy policy", null, {
					hk: "10K04G"
				}))), s.a.createElement("div", {
					className: S.a.Column
				}, s.a.createElement(O, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, k._("Content policy", null, {
					hk: "1DyxZS"
				})), s.a.createElement(O, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, k._("Moderator Guidelines", null, {
					hk: "2O9otm"
				})))), s.a.createElement("div", {
					className: S.a.Copyright
				}, k._("© {year} Reddit, Inc. All rights reserved.", [k._param("year", (new Date).getFullYear().toString())], {
					hk: "sR7zP"
				}))) : null;
				const r = t => {
					const r = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "English",
						it: "Italiano",
						pt: "Português"
					};
					return n.includes(t) || "en" === t ? s.a.createElement(O, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(h.a)(t))
					}, r[t]) : null
				};
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === u.Ic.GreyRereddit ? e.reredditButtons : [];
					return s.a.createElement(E, {
						reredditContent: t,
						countryCode: e.countryCode
					})
				}
				return s.a.createElement(l.a, {
					className: S.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, s.a.createElement("div", {
					className: S.a.LinkContainer
				}, s.a.createElement("div", {
					className: S.a.Column
				}, s.a.createElement(O, {
					href: "https://www.reddithelp.com"
				}, k._("help", null, {
					hk: "4lyYaD"
				})), s.a.createElement(O, {
					href: "https://www.reddit.com/coins"
				}, k._("Reddit coins", null, {
					hk: "32iMaN"
				})), s.a.createElement(O, {
					href: "https://www.reddit.com/premium"
				}, k._("Reddit premium", null, {
					hk: "RuO3A"
				})), e.isFrontpage && s.a.createElement(s.a.Fragment, null, s.a.createElement(O, {
					href: "https://www.reddit.com/subreddits/a-1/"
				}, k._("Communities", null, {
					hk: "3CJu37"
				})), s.a.createElement(O, {
					href: `https://www.reddit.com${Object(b.a)()}`
				}, k._("Rereddit", null, {
					hk: "1z3k7C"
				})), s.a.createElement(O, {
					href: "https://www.reddit.com/topics/a-1/"
				}, k._("Topics", null, {
					hk: "349RFt"
				}))), !!m.c[e.countryCode] && s.a.createElement(s.a.Fragment, null, s.a.createElement(O, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, k._("Impressum", null, {
					hk: "4cKXSI"
				})), s.a.createElement(O, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, k._("Transparency report", null, {
					hk: "3CgBdG"
				})), s.a.createElement(O, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: S.a.NoneCapitalizeLink
				}, k._("Report NetzDG Content", null, {
					hk: "1nszCF"
				})))), s.a.createElement("div", {
					className: S.a.Column
				}, s.a.createElement(O, {
					href: "https://www.redditinc.com/"
				}, k._("about", null, {
					hk: "1sqJKs"
				})), s.a.createElement(O, {
					href: "https://www.redditinc.com/careers"
				}, k._("careers", null, {
					hk: "26ABvc"
				})), s.a.createElement(O, {
					href: "https://www.redditinc.com/press"
				}, k._("press", null, {
					hk: "2Qmgdz"
				})), s.a.createElement(O, {
					href: "https://www.redditinc.com/advertising"
				}, k._("advertise", null, {
					hk: "Mt40U"
				})), s.a.createElement(O, {
					href: "http://www.redditblog.com/"
				}, k._("blog", null, {
					hk: "46IQJw"
				})), s.a.createElement(O, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, k._("Terms", null, {
					hk: "4qRzfE"
				})), s.a.createElement(O, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, k._("Content policy", null, {
					hk: "1DyxZS"
				})), s.a.createElement(O, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, k._("Privacy policy", null, {
					hk: "10K04G"
				})), s.a.createElement(O, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, k._("Mod policy", null, {
					hk: "2gYc2T"
				})))), (e.isCountrySitePage || e.isFrontpage && e.isCountrySitesEnabled) && s.a.createElement("div", {
					className: S.a.CountryLinkContainer
				}, s.a.createElement("div", {
					className: S.a.Column
				}, r("en"), r("fr"), r("it")), s.a.createElement("div", {
					className: S.a.Column
				}, r("de"), r("es"), r("pt"))), s.a.createElement("div", {
					className: S.a.Copyright
				}, k._("Reddit Inc © {year}. All rights reserved", [k._param("year", (new Date).getFullYear().toString())], {
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
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/lodash/throttle.js"),
				o = n.n(s),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/constants/elementIds.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/components/BackToTop/index.m.less"),
				m = n.n(u);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), b = e => {
				if (e) {
					const e = document.getElementById(d.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			var h = e => {
					let {
						className: t,
						isOverlay: n,
						style: s
					} = e;
					return i.a.createElement("div", {
						className: Object(r.a)(t, m.a.container),
						style: s
					}, i.a.createElement(l.l, {
						className: m.a.button,
						onClick: () => b(n)
					}, p._("Back to Top", null, {
						hk: "YjBtV"
					})))
				},
				f = n("./src/reddit/components/SidebarFooter/index.tsx"),
				g = n("./src/reddit/constants/componentSizes.ts"),
				w = n("./src/reddit/contexts/PageLayer/index.tsx"),
				y = n("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				_ = n.n(y),
				S = n("./src/lib/lessComponent.tsx");

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const O = c.e[1] + 24,
				C = g.f + 8,
				x = C + 152 + 16,
				v = x + O + 8,
				E = S.a.div("Container", _.a),
				N = S.a.wrapped(e => {
					let {
						className: t,
						isOverlay: n,
						...r
					} = e;
					return i.a.createElement(h, k({
						className: t,
						isOverlay: n,
						style: {
							top: `calc(100vh - ${n?C:8}px)`
						}
					}, r))
				}, "BackToTop", _.a),
				j = e => {
					let {
						children: t,
						className: n,
						isFakeOverlay: s,
						isSticky: o,
						shouldStickToBottom: a
					} = e;
					return i.a.createElement("div", {
						className: Object(r.a)(n, {
							[_.a.BottomStickyStyles]: a,
							[_.a.StickyStyles]: !a && o && !s,
							[_.a.StickyStylesFakeOverlay]: !a && !!s
						})
					}, t)
				};
			class T extends a.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > v,
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
							children: r,
							className: s,
							hideFooter: o,
							pageLayer: a,
							recommendationsComponent: c,
							reredditButtons: d
						}
					} = this, l = this.state.isAdSticky && !(!t && !r), u = this.state.isBottomSticky;
					return i.a.createElement(E, {
						className: s,
						innerRef: this.setWrapperRef
					}, i.a.createElement(j, {
						isFakeOverlay: n,
						isSticky: l,
						shouldStickToBottom: u
					}, t, r, c, !o && i.a.createElement(f.a, {
						reredditButtons: d
					})), !c && !this.props.hideBackToTop && i.a.createElement(N, {
						isOverlay: !!(null === (e = null == a ? void 0 : a.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const I = Object(w.u)();
			t.a = I(T)
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
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
				w = n("./src/reddit/models/Theme/index.ts"),
				y = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const _ = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(y.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				S = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(y.a)(e).widgetColors.sidebarWidgetHeaderColor,
				k = e => {
					const t = _(e);
					return Object(w.f)(t)
				},
				O = e => {
					const t = S(e);
					return Object(w.f)(t)
				};
			var C = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				x = n.n(C);
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = Object(u.u)(), N = Object(o.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.n)(e, t) || void 0,
						r = t.redditStyle || Object(f.l)(e, {
							subredditId: n
						}),
						s = Object(g.db)(e);
					return r || s
				},
				nigtmode: g.db,
				subredditId: u.n,
				topPostVariant: h.d
			}));
			class j extends s.a.Component {
				constructor() {
					super(...arguments), this.contentRef = s.a.createRef(), this.state = {
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
					return e.backgroundColor = _(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = k(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = S(this.props), e.color = e.fill = O(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: r,
						headerButton: o,
						id: a,
						onClick: c,
						onHeaderClick: l,
						title: u,
						titleClassName: p,
						truncateThreshold: b
					} = this.props, h = n ? x.a.widgetContentOnly : x.a.widgetContent, f = !r && this.props.styles, g = f ? this.getWidgetBackgroundStyles() : {}, w = f ? this.getWidgetHeaderStyles() : {};
					return s.a.createElement("div", {
						className: Object(i.a)(t, x.a.widgetBackground, {
							[x.a.redditStyle]: r,
							[x.a.clickable]: !!c,
							[x.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": r,
						onClick: c,
						style: g
					}, u && s.a.createElement("div", {
						className: Object(i.a)(x.a.widgetHeader, {
							[x.a.clickable]: !!l
						}),
						id: a,
						style: w,
						onClick: l
					}, s.a.createElement("div", {
						className: Object(i.a)(x.a.widgetTitle, p)
					}, s.a.createElement(d.b, {
						type: d.a.Widget
					}, u)), o), s.a.createElement("div", {
						className: Object(i.a)(h, {
							[x.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && s.a.createElement(m.r, {
						className: x.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, v._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = E(N(Object(c.a)(Object(l.c)(j))))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "b", (function() {
				return E
			}));
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
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
				w = n("./src/reddit/selectors/experiments/survey.ts"),
				y = n("./src/reddit/selectors/listings.ts"),
				_ = n("./src/reddit/selectors/posts.ts"),
				S = n("./src/reddit/selectors/subreddit.ts"),
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
			const C = O(),
				x = {
					apiError: y.c,
					apiPending: y.d,
					measureScrollFPS: g.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.S)(e, t),
					loadMore: y.g,
					postsById: _.S,
					postIds: Object(o.a)((e, t) => {
						let {
							listingKey: n,
							listingName: r,
							inSubredditOrProfile: s
						} = t;
						return Object(_.D)(e, n, r, s)
					}),
					subredditsById: S.bb,
					viewportDataLoaded: k.a,
					pageReferrer: p.V,
					postListPlaceholderComponent: () => f.a,
					isNpsScrollSurveyEnabled: w.e
				},
				v = Object(s.c)(x),
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
					trackOnPostEnteredViewport: (t, n, r, s) => {
						e(d.O(t, r, s))
					},
					trackOnPostExitedViewport: (t, n, r, s) => {
						e(d.P(t, r, s))
					},
					showModalOnScroll: () => e(d.cb()),
					surveyTriggerScrollCounted: () => e(Object(u.l)())
				}),
				N = e => Object(b.b)({
					...e
				}),
				j = (e, t, n, r) => {
					const {
						listingKey: s,
						hostPostData: o,
						listingBelowVariant: a
					} = r;
					return Object(h.k)(e, t, "post", s, o, a, void 0)
				},
				T = Object(r.b)(v, E, (e, t, n) => ({
					...e,
					...t,
					...n,
					postComponentForLayout: N,
					postClickEventFactory: j
				}));
			t.a = e => Object(m.c)(C(T(e)))
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");
			const o = {
					[s.W.BEST]: () => r.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[s.W.HOT]: () => r.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[s.W.NEW]: () => r.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[s.W.CONTROVERSIAL]: () => r.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[s.W.RISING]: () => r.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[s.W.TOP]: () => r.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[s.W.AWARDED]: () => r.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				a = e => {
					const t = o[e];
					return t && t() || ""
				},
				i = {
					[s.ic.HOUR]: () => r.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[s.ic.DAY]: () => r.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[s.ic.WEEK]: () => r.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[s.ic.MONTH]: () => r.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[s.ic.YEAR]: () => r.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[s.ic.ALL]: () => r.fbt._("All Time", null, {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = s.a.createContext({})
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/reddit/models/WhitelistStatus/index.ts");
			const s = (e, t) => {
				const n = e.some(e => e.isNSFW),
					s = t.some(e => e.wls === r.b.NO_ADS);
				return !n && !s
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
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				o = n.n(s);
			const a = e => {
					let {
						isLoading: t
					} = e;
					return Object(r.a)(o.a.loadingBackground, {
						[o.a["m-loading"]]: t
					})
				},
				i = e => Object(r.a)(o.a.loadingBar, a(e))
		},
		"./src/reddit/helpers/trackers/contentTag.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return r
			})), n.d(t, "g", (function() {
				return s
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
			const r = () => () => ({
					source: "content_tag",
					action: "view",
					noun: "verify_topics_module"
				}),
				s = () => () => ({
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
			var r, s, o = n("./src/reddit/constants/tracking.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {}));
			const i = (e, t) => n => ({
					source: s.COMMUNITY_WIDGETS,
					action: o.c.CLICK,
					noun: r.SEE_MORE,
					widget: Object(a.vb)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...a.n
				}),
				c = (e, t) => n => ({
					source: s.POST,
					action: o.c.CLICK,
					noun: r.REREDDIT_PROMO,
					post: a.I(n, e),
					subreddit: a.hb(n),
					...t && {
						banner: {
							buttonText: t,
							id: r.REREDDIT_PROMO
						}
					},
					...a.n(n)
				}),
				d = () => e => ({
					source: s.SIDEBAR,
					action: o.c.VIEW,
					noun: r.TOPICS_WIDGET,
					...a.n(e)
				}),
				l = e => t => ({
					source: s.TOPICS_WIDGET,
					action: o.c.CLICK,
					noun: r.TOPIC,
					...a.n(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/pages/Subreddit/SurveyUnit.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/CommunityTopicSurvey/async.tsx"),
				c = n("./src/reddit/components/ContentSurvey/ContentRatingSurveyBanner.tsx"),
				d = n("./src/reddit/components/PowerupsCncModule/index.tsx"),
				l = n("./src/reddit/components/PowerupsCncModule/async.ts"),
				u = n("./src/reddit/constants/experiments.ts"),
				m = n("./src/reddit/constants/postLayout.ts"),
				p = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				b = n("./src/reddit/selectors/gold/powerups/index.ts");
			const h = Object(r.a)({
				resolved: {},
				chunkName: () => "NewCommunityProgress",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), n.e(6), n.e("NewCommunityProgress")]).then(n.bind(null, "./src/reddit/components/NewCommunityProgress/NewCommunityProgress.tsx")),
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

			function f(e) {
				let {
					postLayout: t,
					subredditId: n,
					subredditSubscribers: r
				} = e;
				var s;
				const f = Object(a.e)(e => e.subreddits.survey[n]),
					g = Object(a.e)(e => e.subreddits.progressModule[n]),
					w = Object(a.e)(e => Object(b.b)(e, {
						subredditId: n
					})),
					y = Object(a.e)(p.a),
					_ = y !== u.Be.NewModule;
				return (null === (s = null == g ? void 0 : g.cards) || void 0 === s ? void 0 : s.length) > 0 && _ ? o.a.createElement(h, {
					closeModuleOnMount: !!t && t !== m.g.Large,
					subredditId: n,
					progressModule: g
				}) : t !== m.g.Large ? null : (null == f ? void 0 : f.isEligible) && !(null == f ? void 0 : f.response) && (!y || y && r > 100) ? o.a.createElement(c.a, {
					subredditId: n,
					survey: f
				}) : w && !Object(d.isPowerupsCncModuleHiddenBySpamLimit)(n) ? o.a.createElement(l.a, {
					subredditId: n
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
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/experiments/index.ts"),
				a = n("./src/reddit/selectors/experiments/utils.ts"),
				i = n("./src/reddit/selectors/meta.ts"),
				c = n("./node_modules/reselect/es/index.js");
			const d = Object(c.a)(e => Object(s.c)(e, {
					experimentEligibilitySelector: e => Object(i.g)(e) && Object(o.f)(e),
					experimentName: r.oc
				}), a.a),
				l = Object(c.a)(e => Object(s.c)(e, {
					experimentEligibilitySelector: e => !Object(i.g)(e) && Object(o.f)(e),
					experimentName: r.nc
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
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const a = e => {
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: o.Q,
						experimentName: r.bd
					});
					return !(!t || Object(r.Xf)(t))
				},
				i = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: o.Q,
						experimentName: r.bd
					}) === r.Ad.ListingEnabled
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
				return w
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "d", (function() {
				return S
			}));
			var r = n("./src/lib/objectSelector/index.ts"),
				s = n("./src/reddit/featureFlags/index.ts"),
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
				m = Object(r.a)((e, t) => {
					const n = p(e, t);
					if (!n) return u;
					const r = Object(a.Y)(e, {
						subredditName: n.name
					});
					return r && r.postIds && r.postIds.length ? r.postIds : u
				}),
				p = (e, t) => {
					const n = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return n ? Object(a.U)(e, {
						subredditId: n
					}) : null
				},
				b = (e, t, n, r, s) => {
					const a = s.find(e => e <= t) || -1,
						i = s.find(e => e > t) || 1 / 0;
					return t !== i && t !== a && (!(a + n > t) && (!(t + n > i) && !((e, t, n) => {
						const r = n[t - 1],
							s = n[t],
							a = s && Object(o.G)(e, {
								postId: r
							}) || null,
							i = s && Object(o.G)(e, {
								postId: s
							}) || null;
						return a && a.isSponsored || i && i.isSponsored
					})(e, t, r)))
				},
				h = [3],
				f = Object(r.a)((e, t) => {
					let {
						existingDUPositions: n,
						listingProps: r
					} = t;
					const s = n.slice().sort();
					let a = -1;
					const i = Object(o.z)(e, {
							listingKey: r.listingKey
						}),
						c = [];
					return h.forEach(t => {
						let n = a + t;
						if (!(n >= i.length)) {
							for (; n < i.length && !b(e, n, t, i, s);) n += 1;
							n < i.length && (c.push(n), a = n)
						}
					}), c
				}),
				g = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				w = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				y = e => e.focusedVerticals.category,
				_ = e => e.focusedVerticals.lastLoadedEnv,
				S = e => {
					const t = Object(i.P)(e),
						n = s.d.geoSubredditRecommendationDULoggedIn(e),
						r = s.d.geoSubredditRecommendationDULoggedOut(e);
					return t && n || !t && r
				}
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = (e, t) => {
				let {
					listingKey: n
				} = t;
				return e.tracking.viewportDataLoaded[n]
			}
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"c10a566d5f55"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Frontpage~ModListing~Subreddit.964342173d5ba04174b2.js.map