// https://www.redditstatic.com/desktop2x/Frontpage~ModListing~Subreddit.c6b247ed65da2a75693c.js
// Retrieved at 4/26/2022, 5:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Frontpage~ModListing~Subreddit"], {
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "c", (function() {
				return y
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
			var p = n("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				m = n("./src/reddit/selectors/platform.ts"),
				b = n("./src/reddit/selectors/user.ts");
			const h = Object(s.a)(a.g),
				g = Object(s.a)(a.e),
				f = Object(s.a)(a.h),
				w = Object(s.a)(a.c),
				_ = Object(s.a)(a.f),
				S = Object(s.a)(a.j),
				y = Object(s.a)(a.i),
				O = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					const o = t(),
						a = Object(p.e)(o),
						d = Object(p.d)(o),
						m = Object(b.Q)(o);
					if (a || !d) return;
					e(f());
					let _ = !1;
					try {
						const t = m ? r.LoggedInGeo : r.LoggedOutGeo,
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
							if (x(t)) {
								if (k(t)) {
									e(w({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), _ = !0
								} else if (C(t)) {
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
										p = {
											recommendedSubredditIds: [r.id],
											interactedSubredditIds: [s.id],
											subreddits: i,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: o,
											lastLoadedEnv: "client"
										};
									e(h(p)), _ = !0
								}
							} else _ = !1
						}
					} catch (S) {
						_ = !1
					}
					_ || e(g({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, x = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, k = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations;
					return !(!n || 0 !== n.length)
				}, C = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations,
						r = t && t.type;
					return !!(n && !k(e) && r === d.GEO && n[0] && n[0].recommendedSubreddit && n[0].interactedSubreddit)
				}, v = () => async (e, t, n) => {
					var r, s;
					const a = t(),
						i = Object(p.g)(a);
					if (Object(p.f)(a) || null === i || "client" === i) {
						const n = null === (s = null === (r = Object(m.b)(t())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === s ? void 0 : s.route.chunk,
							i = Object(b.R)(a);
						return Object(o.i)(() => e(O()), {
							name: "getFocusedVerticalsRequested",
							page: n,
							isLoggedIn: i
						})
					}
					if ("server" === i) return e(_({
						lastLoadedEnv: "client"
					}))
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
				return m
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
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function m(e) {
				let {
					survey: t,
					subredditId: n
				} = e;
				const [a, m] = Object(r.useState)(!1), b = Object(d.a)();
				return Object(r.useEffect)(() => b(Object(c.h)()), [b]), s.a.createElement("div", {
					className: i.a.feedBanner,
					onClick: function() {
						m(!0), b(Object(c.g)())
					}
				}, s.a.createElement("div", {
					className: i.a.notepadSnoo
				}, s.a.createElement("img", {
					src: `${o.a.assetPath}/img/snoovatar-notepad.png`
				})), s.a.createElement("div", {
					className: i.a.bannerCopy
				}, s.a.createElement("p", {
					className: i.a.copy
				}, p._("Set up this community’s content tag", null, {
					hk: "3ssqQf"
				})), s.a.createElement("p", {
					className: i.a.meta
				}, p._("Take a quick survey to help people know what to expect when they visit this community", null, {
					hk: "3sUbRf"
				}))), s.a.createElement(l.a, {
					name: "caret_right",
					className: i.a.chevron
				}), a && s.a.createElement(u.a, {
					withOverlay: !0,
					subredditId: n,
					survey: t,
					onClose: () => m(!1)
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
					importAsync: () => Promise.all([n.e(5), n.e(7)]).then(n.bind(null, "./src/reddit/components/ContentSurvey/index.tsx")),
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
				p = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/components/PostList/Placeholder.tsx"),
				b = n("./src/reddit/components/EmptySubreddit.m.less"),
				h = n.n(b),
				g = n("./src/lib/classNames/index.ts"),
				f = n("./src/lib/lessComponent.tsx"),
				w = n("./src/reddit/pages/Subreddit/SurveyUnit.tsx");
			const _ = f.a.wrapped(m.a, "BackgroundPlaceholder", h.a),
				S = f.a.wrapped(p.n, "SubmitLink", h.a),
				y = e => {
					switch (e) {
						case d.X.RISING:
							return r.fbt._("Create a new post and take all the glory", null, {
								hk: "1NhXUe"
							});
						case d.X.TOP:
						case d.X.CONTROVERSIAL:
							return null;
						default:
							return r.fbt._("Be the first to till this fertile land.", null, {
								hk: "VYQD0"
							})
					}
				},
				O = e => {
					let {
						listingName: t,
						sort: n
					} = e;
					const s = y(n);
					return i.a.createElement("div", {
						className: h.a.MainContent
					}, i.a.createElement("div", {
						className: h.a.PrimaryText
					}, (e => {
						switch (e) {
							case d.X.RISING:
								return r.fbt._("Looks like nothing is rising fast enough in this subreddit", null, {
									hk: "kJ3Te"
								});
							case d.X.TOP:
							case d.X.CONTROVERSIAL:
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
					}, y(n)), i.a.createElement(S, {
						to: `/r/${t}/submit`
					}, r.fbt._("Add a post", null, {
						hk: "1vnCSW"
					}))))
				},
				x = () => i.a.createElement("div", {
					className: h.a.MainContent
				}, i.a.createElement("img", {
					className: h.a.SnooImg,
					src: `${c.a.assetPath}/img/snoo_discovery@1x.png`
				}), i.a.createElement("div", {
					className: h.a.PrimaryText
				}, r.fbt._("Reddit gets better when you join communities, so find some that you’ll love!", null, {
					hk: "7B6oq"
				})), i.a.createElement(S, {
					to: "/r/popular"
				}, r.fbt._("Browse Popular Posts", null, {
					hk: "2zfgXv"
				})));
			t.a = e => i.a.createElement(i.a.Fragment, null, e.subreddit && i.a.createElement(w.a, {
				subredditId: e.subreddit.id,
				subredditSubscribers: e.subreddit.subscribers
			}), i.a.createElement("div", {
				"data-testid": "empty-subreddit",
				className: Object(g.a)(h.a.Component, h.a.EmptyHomepage)
			}, i.a.createElement(_, {
				isLoading: !1,
				layout: u.g.Classic
			}), i.a.createElement("div", {
				className: h.a.MainContentWrapper
			}, e.subreddit ? i.a.createElement(O, e) : i.a.createElement(x, null))))
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
				p = n("./src/reddit/actions/tooltip.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/constants/postLayout.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				g = n("./src/reddit/contexts/Tooltip.ts"),
				f = n("./src/reddit/controls/Dropdown/index.tsx"),
				w = n("./src/reddit/controls/Dropdown/Row.tsx"),
				_ = n("./src/reddit/icons/fonts/index.tsx"),
				S = n("./src/reddit/selectors/telemetry.ts"),
				y = n("./src/reddit/selectors/tooltip.ts"),
				O = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				x = n.n(O);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const C = "view--layout--FUE",
				v = "LayoutSwitch--picker",
				j = Object(c.a)(f.a),
				N = {
					[b.d.Card]: function(e) {
						return o.a.createElement(_.a, k({}, e, {
							name: "view_card"
						}))
					},
					[b.d.Classic]: function(e) {
						return o.a.createElement(_.a, k({}, e, {
							name: "view_classic"
						}))
					},
					[b.d.Compact]: function(e) {
						return o.a.createElement(_.a, k({}, e, {
							name: "view_compact"
						}))
					}
				},
				E = {
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
				I = Object(h.u)(),
				P = Object(i.c)({
					dropdownIsOpen: Object(y.b)(v),
					postLayout: h.R,
					redditStyle: h.D
				}),
				L = Object(a.b)(P, e => ({
					onListingLayoutChange: (t, n) => e(Object(u.y)(t, n)),
					openDropdown: () => e(Object(p.h)({
						tooltipId: v
					}))
				}));
			class T extends o.a.Component {
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
							screen: Object(S.Y)(t),
							subreddit: Object(S.gb)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: n,
							onLayoutClick: r,
							postLayout: s
						} = this.props, a = n || b.e[s], i = e === a, c = N[e], l = E[e];
						return o.a.createElement(w.b, k({}, t, {
							className: Object(d.a)(x.a.LayoutItem, {
								[x.a.selected]: i,
								[x.a.DropdownButton]: null == t ? void 0 : t.showDropdownTriangle
							}),
							"data-layout": e,
							displayText: l(),
							iconWrapperClassName: x.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: x.a.LayoutItemTextClassName
						}), o.a.createElement(c, {
							className: x.a.LayoutIcon,
							onClick: i ? void 0 : r,
							isFilled: i && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return o.a.createElement(j, k({}, e, {
							className: x.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: x.a.DropdownRow,
							rowIconClassName: x.a.DropdownRowIcon,
							rowSelectedClassName: x.a.DropdownRowSelected,
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
						className: Object(d.a)(x.a.Container, e),
						id: C
					}, o.a.createElement("div", {
						className: x.a.DropdownContainer,
						onClick: n
					}, this.renderItem(s, {
						id: v,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), o.a.createElement(g.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = I(L(Object(m.c)(Object(l.a)(T))))
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
				p = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				m = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/lib/addQueryParams/index.ts")),
				b = n("./src/lib/constants/index.ts"),
				h = n("./node_modules/react-router-redux/es/index.js"),
				g = n("./node_modules/reselect/es/index.js"),
				f = n("./src/reddit/actions/tooltip.ts"),
				w = n("./node_modules/fbt/lib/FbtPublic.js"),
				_ = n("./src/higherOrderComponents/asTooltip.tsx"),
				S = n("./src/reddit/constants/history.ts"),
				y = n("./src/reddit/constants/listingSorts.ts"),
				O = n("./src/reddit/contexts/Tooltip.ts"),
				x = n("./src/reddit/controls/Dropdown/index.tsx"),
				k = n("./src/reddit/controls/Dropdown/Row.tsx"),
				C = n("./src/reddit/helpers/path/index.ts"),
				v = n("./src/reddit/helpers/trackers/navigation.ts"),
				j = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				N = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				E = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				I = n("./src/reddit/selectors/tooltip.ts"),
				P = n("./src/reddit/selectors/user.ts"),
				L = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				T = n("./src/reddit/components/ListingSort/index.m.less"),
				D = n.n(T),
				A = n("./src/lib/lessComponent.tsx");

			function R() {
				return (R = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const B = "ListingSort--SortPicker",
				M = Object(_.a)(A.a.wrapped(x.a, "Dropdown", D.a)),
				H = A.a.wrapped(L.a, "ListingSortIcon", D.a),
				U = (A.a.wrapped(j.b, "DropdownTriangle", D.a), A.a.div("Title", D.a)),
				X = A.a.wrapped(e => s.a.createElement(k.b, R({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", D.a),
				F = e => {
					let {
						disabled: t,
						...n
					} = e;
					return s.a.createElement("div", R({}, n, {
						className: Object(a.a)(D.a.SortWrapper, n.className, {
							[D.a.isDisabled]: t
						})
					}))
				},
				G = A.a.div("DropdownRowDisabled", D.a),
				V = Object(l.u)({
					isFrontpage: l.A,
					isProfilePage: l.J,
					pageLayer: e => e
				}),
				K = Object(g.c)({
					isAwardListingExperimentEnabled: E.a,
					isBestSortPopularEnabled: N.a,
					user: P.l,
					dropdownIsOpen: (e, t) => Object(I.b)(t.dropdownId || B)(e),
					isPopularPage: l.F
				}),
				q = Object(o.b)(K, (e, t) => {
					let {
						dropdownId: n,
						pageLayer: r
					} = t;
					return {
						onOpenDropdown: () => e(Object(f.h)({
							tooltipId: n || B
						}))
					}
				});
			var W = A.a.wrapped(V(q(Object(d.c)(e => s.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && s.a.createElement(U, null, w.fbt._("Sort", null, {
					hk: "2BfINq"
				})), s.a.createElement(F, {
					disabled: e.disabled
				}, e.children || s.a.createElement(X, {
					className: e.buttonClassName,
					displayText: Object(y.a)(e.sort),
					id: e.dropdownId || B,
					showDropdownTriangle: !0
				}, s.a.createElement(H, {
					sort: e.sort
				}))), s.a.createElement(O.a.Consumer, null, t => s.a.createElement(M, R({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || B
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? s.a.createElement(G, null, w.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, n, r, s) => {
					const o = [b.X.HOT, b.X.NEW, b.X.TOP, b.X.RISING];
					return (e && (n || r) || t && r) && o.unshift(b.X.BEST), t && s && o.splice(3, 0, b.X.AWARDED), o
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => {
					const n = e.isProfilePage ? Object(m.a)(e.baseUrl, {
							sort: t
						}) : Object(C.a)(e.baseUrl, `${t}/`),
						r = n.split("?")[0],
						o = e.isProfilePage ? n.replace(r + "?", "") : void 0;
					return s.a.createElement(k.b, {
						className: Object(a.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
						displayText: Object(y.a)(t),
						onClick: () => {
							e.onChange(t), e.sendEvent(Object(v.b)(t))
						},
						href: {
							pathname: r,
							state: {
								[S.b.FeedLoadReason]: S.a.SortChange
							},
							search: o
						},
						isSelected: e.sort === t,
						key: t
					}, s.a.createElement(H, {
						className: e.rowIconClassName,
						sort: t
					}))
				}))))))), "ListingSort", D.a),
				z = n("./src/reddit/constants/parameters.ts");
			const Y = e => {
					const t = Q[e];
					return t && t() || ""
				},
				Q = {
					[b.gc.AllStates]: () => w.fbt._("All", null, {
						hk: "3FfdRL"
					}),
					[b.gc.Alaska]: () => w.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[b.gc.Alabama]: () => w.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[b.gc.Arkansas]: () => w.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[b.gc.Arizona]: () => w.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[b.gc.California]: () => w.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[b.gc.Colorado]: () => w.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[b.gc.Connecticut]: () => w.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[b.gc.DistrictOfColumbia]: () => w.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[b.gc.Delaware]: () => w.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[b.gc.Florida]: () => w.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[b.gc.Georgia]: () => w.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[b.gc.Hawaii]: () => w.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[b.gc.Iowa]: () => w.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[b.gc.Idaho]: () => w.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[b.gc.Illinois]: () => w.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[b.gc.Indiana]: () => w.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[b.gc.Kansas]: () => w.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[b.gc.Kentucky]: () => w.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[b.gc.Louisiana]: () => w.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[b.gc.Massachusetts]: () => w.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[b.gc.Maryland]: () => w.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[b.gc.Maine]: () => w.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[b.gc.Michigan]: () => w.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[b.gc.Minnesota]: () => w.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[b.gc.Missouri]: () => w.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[b.gc.Mississippi]: () => w.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[b.gc.Montana]: () => w.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[b.gc.NorthCarolina]: () => w.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[b.gc.NorthDakota]: () => w.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[b.gc.Nebraska]: () => w.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[b.gc.NewHampshire]: () => w.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[b.gc.NewJersey]: () => w.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[b.gc.NewMexico]: () => w.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[b.gc.Nevada]: () => w.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[b.gc.NewYork]: () => w.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[b.gc.Ohio]: () => w.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[b.gc.Oklahoma]: () => w.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[b.gc.Oregon]: () => w.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[b.gc.Pennsylvania]: () => w.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[b.gc.RhodeIsland]: () => w.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[b.gc.SouthCarolina]: () => w.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[b.gc.SouthDakota]: () => w.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[b.gc.Tennessee]: () => w.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[b.gc.Texas]: () => w.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[b.gc.Utah]: () => w.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[b.gc.Virginia]: () => w.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[b.gc.Vermont]: () => w.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[b.gc.Washington]: () => w.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[b.gc.Wisconsin]: () => w.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[b.gc.WestVirginia]: () => w.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[b.gc.Wyoming]: () => w.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var J = n("./src/reddit/components/StateSort/index.m.less"),
				Z = n.n(J);

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = A.a.wrapped(x.a, "_Dropdown", Z.a),
				te = Object(_.a)(ee),
				ne = e => {
					return e.indexOf("_") > 0 && se(e) === b.A.UnitedStates
				},
				re = e => {
					if (ne(e)) {
						return e.split("_")[1]
					}
					return b.gc.AllStates
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
				ie = Object(g.c)({
					dropdownIsOpen: Object(I.b)("StateSort--StateSortPicker")
				}),
				ce = Object(o.b)(ie, e => ({
					onOpenDropdown: () => e(Object(f.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, n) => {
						e(Object(h.b)(t)), e(Object(c.w)(b.A.UnitedStates + "_" + n))
					}
				}));
			var de = A.a.wrapped(ae(ce(e => {
				const t = `${e.baseUrl}?${z.j}=${b.A.UnitedStates}`;
				return s.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, s.a.createElement(F, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, s.a.createElement(X, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : Y(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), s.a.createElement(O.a.Consumer, null, n => s.a.createElement(te, $({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, n, {
					renderContentsHidden: !0
				}), Object.keys(b.gc).map(n => {
					const r = b.gc[n];
					return s.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === b.gc.AllStates ? t : `${t}_${e}`)(r), oe(r))
					}, s.a.createElement(k.b, {
						className: Object(a.a)(e.rowClassName, e.sort === r ? e.rowSelectedClassName : void 0),
						displayText: Y(r),
						isSelected: e.sort === r
					}))
				}))))
			})), "Component", Z.a);
			const le = {
				[b.A.Everywhere]: () => w.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[b.A.UnitedStates]: () => w.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[b.A.Argentina]: () => w.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[b.A.Australia]: () => w.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[b.A.Bulgaria]: () => w.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[b.A.Canada]: () => w.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[b.A.Chile]: () => w.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[b.A.Colombia]: () => w.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[b.A.Croatia]: () => w.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[b.A.CzechRepublic]: () => w.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[b.A.Finland]: () => w.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[b.A.France]: () => w.fbt._("France", null, {
					hk: "1fX2Y8"
				}),
				[b.A.Germany]: () => w.fbt._("Germany", null, {
					hk: "2mADuB"
				}),
				[b.A.Greece]: () => w.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[b.A.Hungary]: () => w.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[b.A.Iceland]: () => w.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[b.A.India]: () => w.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[b.A.Ireland]: () => w.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[b.A.Italy]: () => w.fbt._("Italy", null, {
					hk: "3EvGjk"
				}),
				[b.A.Japan]: () => w.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[b.A.Malaysia]: () => w.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[b.A.Mexico]: () => w.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[b.A.NewZealand]: () => w.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[b.A.Philippines]: () => w.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[b.A.Poland]: () => w.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[b.A.Portugal]: () => w.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[b.A.PuertoRico]: () => w.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[b.A.Romania]: () => w.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[b.A.Serbia]: () => w.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[b.A.Singapore]: () => w.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[b.A.Spain]: () => w.fbt._("Spain", null, {
					hk: "44RpFE"
				}),
				[b.A.Sweden]: () => w.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[b.A.Taiwan]: () => w.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[b.A.Thailand]: () => w.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[b.A.Turkey]: () => w.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[b.A.UnitedKingdom]: () => w.fbt._("United Kingdom", null, {
					hk: "rs1fl"
				})
			};
			var ue = n("./src/reddit/components/CountrySort/index.m.less"),
				pe = n.n(ue);

			function me() {
				return (me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const be = "CountrySort--CountrySortPicker",
				he = Object(l.u)(),
				ge = Object(g.c)({
					dropdownIsOpen: Object(I.b)(be)
				});
			var fe = he(Object(o.b)(ge, e => ({
					onCloseDropdown: t => e(Object(f.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(f.g)({
						tooltipId: t
					})),
					onClickLink: (t, n) => {
						e(Object(h.b)(t, {
							[S.b.FeedLoadReason]: S.a.GeoModeChange
						})), e(Object(c.w)(n))
					}
				}))(e => {
					const t = se(e.sort),
						n = re(e.sort),
						r = `${e.baseUrl}?${z.j}=`;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: Object(a.a)(pe.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(be) : e.onOpenDropdown(be)
					}, s.a.createElement(F, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, s.a.createElement(X, {
						className: e.buttonClassName,
						displayText: (() => t in le ? le[t]() : le[b.A.Everywhere]())(),
						id: be,
						showDropdownTriangle: !0
					})), s.a.createElement(O.a.Consumer, null, n => s.a.createElement(te, me({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: be
					}, n, {
						renderContentsHidden: !0
					}), Object.keys(b.A).map(n => {
						const o = b.A[n];
						return s.a.createElement("div", {
							key: o,
							onClick: () => e.onClickLink(`${r}${oe(o)}`, o)
						}, s.a.createElement(k.b, {
							className: Object(a.a)(e.rowClassName, t === o ? e.rowSelectedClassName : void 0),
							displayText: le[o](),
							isSelected: t === o
						}))
					})))), t === b.A.UnitedStates && s.a.createElement(de, {
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
				_e = n.n(we),
				Se = n("./src/reddit/components/TimeSort/index.m.less"),
				ye = n.n(Se);

			function Oe() {
				return (Oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const xe = Object(_.a)(x.a),
				ke = A.a.div("ListingSortContainer", ye.a),
				Ce = Object(l.u)(),
				ve = Object(g.c)({
					dropdownIsOpen: Object(I.b)("TimeSort--SortPicker")
				});
			var je = Ce(Object(o.b)(ve, e => ({
					onOpenDropdown: () => e(Object(f.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(d.c)(e => s.a.createElement(ke, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, s.a.createElement(F, {
					className: e.wrapperClassName,
					disabled: !1
				}, s.a.createElement(X, {
					className: e.buttonClassName,
					displayText: Object(y.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), s.a.createElement(O.a.Consumer, null, t => s.a.createElement(xe, Oe({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [b.jc.HOUR, b.jc.DAY, b.jc.WEEK, b.jc.MONTH, b.jc.YEAR, b.jc.ALL].map(t => {
					const n = ((e, t) => {
							let n = e.url;
							return e.urlParams.sort || Object(l.J)(e) || (n = _e.a.join(n, t)), n
						})(e.pageLayer, e.listingSort),
						r = Object(m.a)(n, {
							[z.E]: t
						}),
						o = r.split("?")[0],
						i = `${r.replace(o+"?","")}`;
					return s.a.createElement(k.b, {
						className: Object(a.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
						key: `time_sort_${t}`,
						displayText: Object(y.b)(t),
						href: {
							pathname: o,
							state: {
								[S.b.FeedLoadReason]: S.a.SortChange
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
				Ee = n("./src/reddit/controls/Button/index.tsx"),
				Ie = n("./src/reddit/icons/fonts/index.tsx"),
				Pe = n("./src/reddit/selectors/meta.ts"),
				Le = n("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				Te = n.n(Le);

			function De() {
				return (De = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Ae = new Set([b.X.CONTROVERSIAL, b.X.TOP]),
				Re = new Set([b.X.CONTROVERSIAL, b.X.RISING]),
				Be = new Set([b.X.CONTROVERSIAL]),
				Me = "ListingSort--Overflow",
				He = Object(l.u)({
					isFrontpage: l.A,
					isProfilePage: l.J,
					pageLayer: e => e
				}),
				Ue = Object(g.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, N.a, P.l, l.F, E.a, Pe.i, (e, t, n, r, s, o, a) => {
					if (e) return {
						isPopularPage: s,
						sortOptions: e,
						locale: a
					};
					const i = [b.X.HOT, b.X.NEW, b.X.TOP, b.X.RISING];
					return (t && (r || n) || s && n) && i.unshift(b.X.BEST), s && o && i.splice(3, 0, b.X.AWARDED), {
						isPopularPage: s,
						sortOptions: i,
						locale: a
					}
				});
			class Xe extends s.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(v.b)(e))
					}, this.renderSortButton = e => {
						const {
							sort: t,
							baseUrl: n,
							isProfilePage: r
						} = this.props, o = r ? Object(m.a)(n, {
							sort: e
						}) : Object(C.a)(n, `${e}/`), i = o.split("?")[0], c = r ? o.replace(i + "?", "") : void 0;
						return s.a.createElement(Ee.t, {
							className: Object(a.a)(Te.a.SortLink, e === t && Te.a.selected),
							kind: Ee.b.InternalLink,
							priority: Ee.c.Plain,
							Icon: n => s.a.createElement(H, De({}, n, {
								className: Object(a.a)(Te.a.SortIcon, n.className),
								sort: e,
								isFilled: e === t
							})),
							text: Object(y.a)(e),
							onClick: () => this.changeSort(e),
							to: {
								pathname: i,
								state: {
									[S.b.FeedLoadReason]: S.a.SortChange
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
						} = this.props, a = r && !!n && e === b.X.HOT && o === b.X.HOT;
						return s.a.createElement(s.a.Fragment, {
							key: e
						}, this.renderSortButton(e), a && s.a.createElement(fe, {
							baseUrl: Ne.c[Ne.b.Popular],
							buttonClassName: Te.a.DropdownButton,
							className: Te.a.CountrySort,
							disabled: t,
							dropdownClassName: Te.a.Dropdown,
							rowClassName: Te.a.DropdownRow,
							rowSelectedClassName: Te.a.DropdownRowSelected,
							wrapperClassName: Te.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: n,
							stateSortClassName: Te.a.StateSort
						}))
					}
				}
				isLocaleDependentOverflowSort(e) {
					const {
						sort: t,
						isPopularPage: n,
						locale: r
					} = this.props;
					return !r.startsWith("en") && (n ? e === b.X.AWARDED && (t === b.X.HOT || t === b.X.TOP) : e === b.X.BEST && t === b.X.TOP)
				}
				isWideSortCurrentSelected(e) {
					const {
						sort: t
					} = this.props, n = new Set([b.X.TOP, b.X.NEW]);
					return Be.has(t) && n.has(e)
				}
				isOverflowSort(e) {
					return Re.has(e) || this.isLocaleDependentOverflowSort(e) || this.isWideSortCurrentSelected(e)
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: n,
						sort: r,
						sortOptions: o,
						timeSort: i
					} = this.props, c = !t && Ae.has(r), d = Re.has(r), l = o.filter(e => !this.isOverflowSort(e)), u = o.filter(e => this.isOverflowSort(e) && e !== r);
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(W, De({}, this.props, {
						buttonClassName: Te.a.DropdownButton,
						className: Object(a.a)(Te.a.SortDropdown, e),
						rowClassName: Te.a.DropdownRow,
						rowIconClassName: Te.a.DropdownRowIcon,
						rowSelectedClassName: Te.a.DropdownRowSelected,
						showTitle: !1
					})), s.a.createElement("div", {
						className: Object(a.a)(Te.a.SortButtons, e)
					}, l.map(this.renderSort)), d && this.renderSort(r), c && s.a.createElement(je, {
						buttonClassName: Te.a.DropdownButton,
						className: Te.a.TimeSort,
						dropdownClassName: Te.a.Dropdown,
						listingSort: r,
						onChange: n,
						rowClassName: Te.a.DropdownRow,
						rowSelectedClassName: Te.a.DropdownRowSelected,
						timeSort: i || b.kc,
						wrapperClassName: Te.a.DropdownSortWrapper
					}), u.length > 0 && s.a.createElement(W, De({}, this.props, {
						className: Object(a.a)(Te.a.SortOverflow, e),
						dropdownClassName: Te.a.Dropdown,
						dropdownId: Me,
						rowClassName: Te.a.DropdownRow,
						rowIconClassName: Te.a.DropdownRowIcon,
						rowSelectedClassName: Te.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: u
					}), s.a.createElement("button", {
						className: Te.a.SortOverflowButton,
						id: Me
					}, s.a.createElement(Ie.a, {
						name: "overflow_horizontal"
					}))))
				}
			}
			var Fe = He(Object(o.b)(Ue)(Object(d.c)(Xe))),
				Ge = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				Ve = n.n(Ge);
			const Ke = Object(l.u)({
					isProfilePage: l.J,
					pageLayer: e => e
				}),
				qe = Object(o.b)(null, (e, t) => {
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
			class We extends s.a.Component {
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
						className: Object(a.a)(Ve.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, s.a.createElement(Fe, {
						baseUrl: e,
						disabled: r,
						geopopularSort: n,
						onChange: u,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: c,
						timeSort: l
					}), !o && s.a.createElement(p.a, {
						className: Ve.a.LayoutSwitch,
						subredditId: d
					}))
				}
			}
			t.a = Ke(qe(Object(d.c)(We)))
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
				[a.X.BEST]: "best",
				[a.X.HOT]: "hot",
				[a.X.NEW]: "new",
				[a.X.CONTROVERSIAL]: "controversial",
				[a.X.TOP]: "top",
				[a.X.RISING]: "rising",
				[a.X.AWARDED]: "award"
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
				p = n("./src/reddit/icons/fonts/index.tsx"),
				m = n("./src/reddit/routes/powerups/index.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/components/PowerupsCncModule/index.m.less"),
				g = n.n(h);
			const {
				fbt: f
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
					_ = !!h;
				return Object(s.useEffect)(() => {
					_ && (Object(d.T)(c.b.POWERUPS_CNC_MODULE_VISIBILITY_STORE, t), w(t) || n(Object(l.c)()))
				}, [n, _, t]), _ ? o.a.createElement("a", {
					className: g.a.feedBanner,
					onClick: () => {
						n(Object(l.b)())
					},
					href: `${r.a.redditUrl}${m.a}`,
					rel: i.c,
					target: "_blank"
				}, o.a.createElement("div", {
					className: g.a.powerupsLogo
				}, o.a.createElement("img", {
					className: g.a.bolt,
					src: `${r.a.assetPath}/img/powerups/powerups-cnc.svg`,
					alt: f._("powerups lightning bolt", null, {
						hk: "2QR5Up"
					})
				})), o.a.createElement("div", {
					className: g.a.bannerText
				}, o.a.createElement("p", {
					className: g.a.heading
				}, f._("Give {subreddit name} members a way to give back", [f._param("subreddit name", h.displayText)], {
					hk: "4poXz"
				})), o.a.createElement("p", {
					className: g.a.description
				}, f._("Harness the power of your community to unlock special perks and features using Powerups.", null, {
					hk: "fJGis"
				}))), o.a.createElement(p.a, {
					name: "caret_right",
					className: g.a.chevron
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
		"./src/reddit/connectors/PostList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return x
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "b", (function() {
				return j
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
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = n("./src/reddit/helpers/trackers/post.ts"),
				g = n("./src/reddit/components/PostList/Placeholder.tsx"),
				f = n("./src/reddit/featureFlags/index.ts"),
				w = n("./src/reddit/selectors/experiments/survey.ts"),
				_ = n("./src/reddit/selectors/listings.ts"),
				S = n("./src/reddit/selectors/posts.ts"),
				y = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/selectors/tracking.ts");

			function x() {
				return Object(m.u)({
					currentProfileName: m.i,
					isCommentPermalink: m.w,
					isCommentsPage: m.x,
					isFrontpage: m.A,
					isProfilePostListing: m.L,
					isTopicPage: m.Q,
					pageLayer: e => e
				})
			}
			const k = x(),
				C = {
					apiError: _.c,
					apiPending: _.d,
					measureScrollFPS: f.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(m.R)(e, t),
					loadMore: _.g,
					postsById: S.S,
					postIds: Object(o.a)((e, t) => {
						let {
							listingKey: n,
							listingName: r,
							inSubredditOrProfile: s
						} = t;
						return Object(S.D)(e, n, r, s)
					}),
					subredditsById: y.bb,
					viewportDataLoaded: O.a,
					pageReferrer: m.U,
					postListPlaceholderComponent: () => g.a,
					isNpsScrollSurveyEnabled: w.e
				},
				v = Object(s.c)(C),
				j = e => ({
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
					trackOnPostExitedViewport: (t, n, r, s, o) => {
						e(d.P(t, r, s, o))
					},
					showModalOnScroll: () => e(d.cb()),
					surveyTriggerScrollCounted: () => e(Object(u.l)())
				}),
				N = e => Object(b.b)({
					...e
				}),
				E = (e, t, n, r) => {
					const {
						listingKey: s,
						hostPostData: o,
						listingBelowVariant: a
					} = r;
					return Object(h.h)(e, t, "post", s, o, a, void 0)
				},
				I = Object(r.b)(v, j, (e, t, n) => ({
					...e,
					...t,
					...n,
					postComponentForLayout: N,
					postClickEventFactory: E
				}));
			t.a = e => Object(p.c)(k(I(e)))
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
					[s.X.BEST]: () => r.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[s.X.HOT]: () => r.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[s.X.NEW]: () => r.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[s.X.CONTROVERSIAL]: () => r.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[s.X.RISING]: () => r.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[s.X.TOP]: () => r.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[s.X.AWARDED]: () => r.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				a = e => {
					const t = o[e];
					return t && t() || ""
				},
				i = {
					[s.jc.HOUR]: () => r.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[s.jc.DAY]: () => r.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[s.jc.WEEK]: () => r.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[s.jc.MONTH]: () => r.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[s.jc.YEAR]: () => r.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[s.jc.ALL]: () => r.fbt._("All Time", null, {
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
				return p
			})), n.d(t, "m", (function() {
				return m
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "o", (function() {
				return h
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "d", (function() {
				return f
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
				p = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_rating_summary",
					actionInfo: {
						pageType: "survey_rating_summary"
					}
				}),
				m = () => () => ({
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
				g = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "message_modsupport",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				f = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "learn_more",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				})
		},
		"./src/reddit/pages/Subreddit/SurveyUnit.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
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
				p = n("./src/reddit/constants/postLayout.ts"),
				m = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				b = n("./src/reddit/selectors/gold/powerups/index.ts");
			const h = Object(r.a)({
				resolved: {},
				chunkName: () => "NewCommunityProgress",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~ModProgressModule~NewCommunityProgress"), n.e(5), n.e("NewCommunityProgress")]).then(n.bind(null, "./src/reddit/components/NewCommunityProgress/NewCommunityProgress.tsx")),
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

			function g(e) {
				let {
					postLayout: t,
					subredditId: n,
					subredditSubscribers: r
				} = e;
				var s;
				const g = Object(a.e)(e => e.subreddits.survey[n]),
					f = Object(a.e)(e => e.subreddits.progressModule[n]),
					w = Object(a.e)(e => Object(b.b)(e, {
						subredditId: n
					})),
					_ = Object(a.e)(m.a),
					S = _ !== u.ue.NewModule;
				return (null === (s = null == f ? void 0 : f.cards) || void 0 === s ? void 0 : s.length) > 0 && S ? o.a.createElement(h, {
					closeModuleOnMount: !!t && t !== p.g.Large,
					subredditId: n,
					progressModule: f
				}) : t !== p.g.Large ? null : (null == g ? void 0 : g.isEligible) && !(null == g ? void 0 : g.response) && (!_ || _ && r > 100) ? o.a.createElement(c.a, {
					subredditId: n,
					survey: g
				}) : w && !Object(d.isPowerupsCncModuleHiddenBySpamLimit)(n) ? o.a.createElement(l.a, {
					subredditId: n
				}) : o.a.createElement(i.a, {
					subredditId: n
				})
			}
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
						experimentEligibilitySelector: o.R,
						experimentName: r.Tc
					});
					return !(!t || Object(r.Of)(t))
				},
				i = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: o.R,
						experimentName: r.Tc
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
				return p
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "f", (function() {
				return w
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "g", (function() {
				return S
			})), n.d(t, "d", (function() {
				return y
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
				p = Object(r.a)((e, t) => {
					const n = m(e, t);
					if (!n) return u;
					const r = Object(a.Y)(e, {
						subredditName: n.name
					});
					return r && r.postIds && r.postIds.length ? r.postIds : u
				}),
				m = (e, t) => {
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
				g = Object(r.a)((e, t) => {
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
				f = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				w = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				_ = e => e.focusedVerticals.category,
				S = e => e.focusedVerticals.lastLoadedEnv,
				y = e => {
					const t = Object(i.Q)(e),
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Frontpage~ModListing~Subreddit.c6b247ed65da2a75693c.js.map