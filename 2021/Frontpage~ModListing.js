// https://www.redditstatic.com/desktop2x/Frontpage~ModListing.ce8f8e549b5fc679b778.js
// Retrieved at 11/3/2021, 4:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Frontpage~ModListing"], {
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return w
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "b", (function() {
				return x
			}));
			var n, r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/performanceTimings/index.tsx"),
				a = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(n || (n = {}));
			var d, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var p = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				m = s("./src/reddit/selectors/platform.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(r.a)(a.g),
				g = Object(r.a)(a.e),
				f = Object(r.a)(a.h),
				y = Object(r.a)(a.c),
				w = Object(r.a)(a.f),
				S = Object(r.a)(a.j),
				_ = Object(r.a)(a.i),
				C = () => async (e, t, {
					gqlContext: s
				}) => {
					const r = t(),
						o = Object(p.e)(r),
						a = Object(p.d)(r),
						d = Object(b.J)(r);
					if (o || !a) return;
					e(f());
					let m = !1;
					try {
						const t = d ? n.LoggedInGeo : n.LoggedOutGeo,
							r = await ((e, t, s) => Object(i.a)(e, {
								...c,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(s(), t);
						if (r.ok && r.body) {
							const {
								data: t
							} = r.body;
							if (v(t)) {
								if (O(t)) {
									e(y({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), m = !0
								} else if (k(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: n,
											interactedSubreddit: r,
											category: o
										} = s.focusRecommendations[0],
										a = [n, r],
										i = Object(u.d)(a),
										c = Object(l.b)(a),
										d = Object(u.c)(n),
										p = {
											recommendedSubredditIds: [n.id],
											interactedSubredditIds: [r.id],
											subreddits: i,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: o,
											lastLoadedEnv: "client"
										};
									e(h(p)), m = !0
								}
							} else m = !1
						}
					} catch (w) {
						m = !1
					}
					m || e(g({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, v = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, O = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, k = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						n = t && t.type;
					return !!(s && !O(e) && n === d.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, x = () => async (e, t, s) => {
					var n, r;
					const a = t(),
						i = Object(p.g)(a);
					if (Object(p.f)(a) || null === i || "client" === i) {
						const s = null === (r = null === (n = Object(m.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							i = Object(b.K)(a);
						return Object(o.i)(() => e(C()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: i
						})
					}
					if ("server" === i) return e(w({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/components/CommunityTopicSurvey/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(n.a)({
				resolved: {},
				chunkName: () => "CommunityTopicSurvey",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: async () => s.e("CommunityTopicSurvey").then(s.bind(null, "./src/reddit/components/CommunityTopicSurvey/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CommunityTopicSurvey/index.tsx"
				}
			});
			t.a = r
		},
		"./src/reddit/components/ContentSurvey/ContentRatingSurveyBanner.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/config.ts"),
				a = s("./src/reddit/components/ContentSurvey/index.m.less"),
				i = s.n(a),
				c = s("./src/reddit/helpers/trackers/contentTag.ts"),
				d = s("./src/reddit/hooks/useTracking.ts"),
				l = s("./src/reddit/icons/fonts/index.tsx"),
				u = s("./src/reddit/components/ContentSurvey/SurveyModal.tsx");
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function m({
				survey: e,
				subredditId: t
			}) {
				const [s, a] = Object(n.useState)(!1), m = Object(d.a)();
				return Object(n.useEffect)(() => m(Object(c.h)()), [m]), r.a.createElement("div", {
					className: i.a.feedBanner,
					onClick: function() {
						a(!0), m(Object(c.g)())
					}
				}, r.a.createElement("div", {
					className: i.a.notepadSnoo
				}, r.a.createElement("img", {
					src: `${o.a.assetPath}/img/snoovatar-notepad.png`
				})), r.a.createElement("div", {
					className: i.a.bannerCopy
				}, r.a.createElement("p", {
					className: i.a.copy
				}, p._("Set up this community’s content tag", null, {
					hk: "3ssqQf"
				})), r.a.createElement("p", {
					className: i.a.meta
				}, p._("Take a quick survey to help people know what to expect when they visit this community", null, {
					hk: "3sUbRf"
				}))), r.a.createElement(l.a, {
					name: "caret_right",
					className: i.a.chevron
				}), s && r.a.createElement(u.a, {
					withOverlay: !0,
					subredditId: t,
					survey: e,
					onClose: () => a(!1)
				}))
			}
		},
		"./src/reddit/components/ContentSurvey/SurveyModal.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/higherOrderComponents/asModal/index.tsx");
			const o = Object(n.a)({
					resolved: {},
					chunkName: () => "",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e(0), s.e(1)]).then(s.bind(null, "./src/reddit/components/ContentSurvey/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ContentSurvey/index.tsx"
					}
				}),
				a = Object(r.a)(o);
			t.a = a
		},
		"./src/reddit/components/ContentSurvey/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/CountrySort/index.m.less": function(e, t, s) {
			e.exports = {
				countrySort: "_1JaK9h42mq2UXvugO7VriI"
			}
		},
		"./src/reddit/components/EmptySubreddit.m.less": function(e, t, s) {
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
		"./src/reddit/components/EmptySubreddit.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/upperFirst.js"),
				o = s.n(r),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				c = s("./src/config.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/isFakeSubreddit/index.ts"),
				u = s("./src/reddit/constants/postLayout.ts"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/components/PostList/Placeholder.tsx"),
				b = s("./src/reddit/components/EmptySubreddit.m.less"),
				h = s.n(b),
				g = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/lessComponent.tsx"),
				y = s("./src/reddit/pages/Subreddit/SurveyUnit.tsx");
			const w = f.a.wrapped(m.a, "BackgroundPlaceholder", h.a),
				S = f.a.wrapped(p.m, "SubmitLink", h.a),
				_ = e => {
					switch (e) {
						case d.V.RISING:
							return n.fbt._("Create a new post and take all the glory", null, {
								hk: "1NhXUe"
							});
						case d.V.TOP:
						case d.V.CONTROVERSIAL:
							return null;
						default:
							return n.fbt._("Be the first to till this fertile land.", null, {
								hk: "VYQD0"
							})
					}
				},
				C = ({
					listingName: e,
					sort: t
				}) => {
					const s = _(t);
					return i.a.createElement("div", {
						className: h.a.MainContent
					}, i.a.createElement("div", {
						className: h.a.PrimaryText
					}, (e => {
						switch (e) {
							case d.V.RISING:
								return n.fbt._("Looks like nothing is rising fast enough in this subreddit", null, {
									hk: "kJ3Te"
								});
							case d.V.TOP:
							case d.V.CONTROVERSIAL:
								return n.fbt._("No posts were found using the {listing sort option} sort. Try changing the sort.", [n.fbt._param("listing sort option", o()(e))], {
									hk: "48BeCW"
								});
							default:
								return n.fbt._("There are no posts in this subreddit", null, {
									hk: "5mVkT"
								})
						}
					})(t)), e && !Object(l.a)(e) && !!s && i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: h.a.SecondaryText
					}, _(t)), i.a.createElement(S, {
						to: `/r/${e}/submit`
					}, n.fbt._("Add a post", null, {
						hk: "1vnCSW"
					}))))
				},
				v = () => i.a.createElement("div", {
					className: h.a.MainContent
				}, i.a.createElement("img", {
					className: h.a.SnooImg,
					src: `${c.a.assetPath}/img/snoo_discovery@1x.png`
				}), i.a.createElement("div", {
					className: h.a.PrimaryText
				}, n.fbt._("Reddit gets better when you join communities, so find some that you’ll love!", null, {
					hk: "7B6oq"
				})), i.a.createElement(S, {
					to: "/r/popular"
				}, n.fbt._("Browse Popular Posts", null, {
					hk: "2zfgXv"
				})));
			t.a = e => i.a.createElement(i.a.Fragment, null, e.subreddit && i.a.createElement(y.a, {
				subredditId: e.subreddit.id
			}), i.a.createElement("div", {
				className: Object(g.a)(h.a.Component, h.a.EmptyHomepage)
			}, i.a.createElement(w, {
				isLoading: !1,
				layout: u.g.Classic
			}), i.a.createElement("div", {
				className: h.a.MainContentWrapper
			}, e.subreddit ? i.a.createElement(C, e) : i.a.createElement(v, null))))
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
				DropdownButton: "_3EHmSVytc7PNTijH2qfAan",
				dropdownButton: "_3EHmSVytc7PNTijH2qfAan",
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/reddit/actions/preferences.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/constants/postLayout.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/contexts/Tooltip.ts"),
				f = s("./src/reddit/controls/Dropdown/index.tsx"),
				y = s("./src/reddit/controls/Dropdown/Row.tsx"),
				w = s("./src/reddit/icons/fonts/index.tsx"),
				S = s("./src/reddit/selectors/telemetry.ts"),
				_ = s("./src/reddit/selectors/tooltip.ts"),
				C = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				v = s.n(C);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const k = "view--layout--FUE",
				x = "LayoutSwitch--picker",
				E = Object(c.a)(f.a),
				j = {
					[b.d.Card]: function(e) {
						return o.a.createElement(w.a, O({}, e, {
							name: "view_card"
						}))
					},
					[b.d.Classic]: function(e) {
						return o.a.createElement(w.a, O({}, e, {
							name: "view_classic"
						}))
					},
					[b.d.Compact]: function(e) {
						return o.a.createElement(w.a, O({}, e, {
							name: "view_compact"
						}))
					}
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
					}),
					[b.d.Search]: () => n.fbt._("search", null, {
						hk: "49uLRt"
					})
				},
				I = Object(h.u)(),
				P = Object(i.c)({
					dropdownIsOpen: Object(_.b)(x),
					postLayout: h.Q,
					redditStyle: h.C
				}),
				L = Object(a.b)(P, e => ({
					onListingLayoutChange: (t, s) => e(Object(u.x)(t, s)),
					openDropdown: () => e(Object(p.h)({
						tooltipId: x
					}))
				}));
			class T extends o.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: s,
							sendEvent: n,
							subredditId: r
						} = this.props;
						t ? t(e) : (s(e, r), n(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(S.screen)(t),
							subreddit: Object(S.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: s,
							onLayoutClick: n,
							postLayout: r
						} = this.props, a = s || b.e[r], i = e === a, c = j[e], l = N[e];
						return o.a.createElement(y.b, O({}, t, {
							className: Object(d.a)(v.a.LayoutItem, {
								[v.a.selected]: i,
								[v.a.DropdownButton]: null == t ? void 0 : t.showDropdownTriangle
							}),
							"data-layout": e,
							displayText: l(),
							iconWrapperClassName: v.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: v.a.LayoutItemTextClassName
						}), o.a.createElement(c, {
							className: v.a.LayoutIcon,
							onClick: i ? void 0 : n,
							isFilled: i && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return o.a.createElement(E, O({}, e, {
							className: v.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: v.a.DropdownRow,
							rowIconClassName: v.a.DropdownRowIcon,
							rowSelectedClassName: v.a.DropdownRowSelected,
							tooltipId: x
						}), this.renderItem(b.d.Card), this.renderItem(b.d.Classic), this.renderItem(b.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: s,
						postLayout: n
					} = this.props, r = t || b.e[n];
					return o.a.createElement("div", {
						className: Object(d.a)(v.a.Container, e),
						id: k
					}, o.a.createElement("div", {
						className: v.a.DropdownContainer,
						onClick: s
					}, this.renderItem(r, {
						id: x,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), o.a.createElement(g.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = I(L(Object(m.c)(Object(l.a)(T))))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less": function(e, t, s) {
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/listingSort/index.ts"),
				c = s("./src/reddit/actions/preferences.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				p = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				m = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/addQueryParams/index.ts")),
				b = s("./src/lib/constants/index.ts"),
				h = s("./node_modules/react-router-redux/es/index.js"),
				g = s("./node_modules/reselect/es/index.js"),
				f = s("./src/reddit/actions/tooltip.ts"),
				y = s("./node_modules/fbt/lib/FbtPublic.js"),
				w = s("./src/higherOrderComponents/asTooltip.tsx"),
				S = s("./src/reddit/constants/history.ts"),
				_ = s("./src/reddit/constants/listingSorts.ts"),
				C = s("./src/reddit/contexts/Tooltip.ts"),
				v = s("./src/reddit/controls/Dropdown/index.tsx"),
				O = s("./src/reddit/controls/Dropdown/Row.tsx"),
				k = s("./src/reddit/helpers/path/index.ts"),
				x = s("./src/reddit/helpers/trackers/navigation.ts"),
				E = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				j = s("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				N = s("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				I = s("./src/reddit/selectors/tooltip.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				L = s("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				T = s("./src/reddit/components/ListingSort/index.m.less"),
				D = s.n(T),
				R = s("./src/lib/lessComponent.tsx");

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const A = "ListingSort--SortPicker",
				F = Object(w.a)(R.a.wrapped(v.a, "Dropdown", D.a)),
				B = R.a.wrapped(L.a, "ListingSortIcon", D.a),
				H = (R.a.wrapped(E.b, "DropdownTriangle", D.a), R.a.div("Title", D.a)),
				M = R.a.wrapped(e => r.a.createElement(O.b, V({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", D.a),
				U = ({
					disabled: e,
					...t
				}) => r.a.createElement("div", V({}, t, {
					className: Object(a.a)(D.a.SortWrapper, t.className, {
						[D.a.isDisabled]: e
					})
				})),
				z = R.a.div("DropdownRowDisabled", D.a),
				K = Object(l.u)({
					isFrontpage: l.z,
					isProfilePage: l.I,
					pageLayer: e => e
				}),
				G = Object(g.c)({
					isAwardListingExperimentEnabled: N.a,
					isBestSortPopularEnabled: j.a,
					user: P.k,
					dropdownIsOpen: (e, t) => Object(I.b)(t.dropdownId || A)(e),
					isPopularPage: l.E
				}),
				q = Object(o.b)(G, (e, {
					dropdownId: t,
					pageLayer: s
				}) => ({
					onOpenDropdown: () => e(Object(f.h)({
						tooltipId: t || A
					}))
				}));
			var W = R.a.wrapped(K(q(Object(d.c)(e => r.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && r.a.createElement(H, null, y.fbt._("Sort", null, {
					hk: "2BfINq"
				})), r.a.createElement(U, {
					disabled: e.disabled
				}, e.children || r.a.createElement(M, {
					className: e.buttonClassName,
					displayText: Object(_.a)(e.sort),
					id: e.dropdownId || A,
					showDropdownTriangle: !0
				}, r.a.createElement(B, {
					sort: e.sort
				}))), r.a.createElement(C.a.Consumer, null, t => r.a.createElement(F, V({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || A
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? r.a.createElement(z, null, y.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, s, n, r) => {
					const o = [b.V.HOT, b.V.NEW, b.V.TOP, b.V.RISING];
					return (e && (s || n) || t && n) && o.unshift(b.V.BEST), t && r && o.splice(3, 0, b.V.AWARDED), o
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => r.a.createElement(O.b, {
					className: Object(a.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
					displayText: Object(_.a)(t),
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(x.a)(t))
					},
					href: {
						pathname: e.isProfilePage ? Object(m.a)(e.baseUrl, {
							sort: t
						}) : Object(k.a)(e.baseUrl, `${t}/`),
						state: {
							[S.b.FeedLoadReason]: S.a.SortChange
						}
					},
					isSelected: e.sort === t,
					key: t
				}, r.a.createElement(B, {
					className: e.rowIconClassName,
					sort: t
				}))))))))), "ListingSort", D.a),
				Y = s("./src/reddit/constants/parameters.ts");
			const Q = e => {
					const t = X[e];
					return t && t() || ""
				},
				X = {
					[b.bc.AllStates]: () => y.fbt._("All", null, {
						hk: "3FfdRL"
					}),
					[b.bc.Alaska]: () => y.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[b.bc.Alabama]: () => y.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[b.bc.Arkansas]: () => y.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[b.bc.Arizona]: () => y.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[b.bc.California]: () => y.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[b.bc.Colorado]: () => y.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[b.bc.Connecticut]: () => y.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[b.bc.DistrictOfColumbia]: () => y.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[b.bc.Delaware]: () => y.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[b.bc.Florida]: () => y.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[b.bc.Georgia]: () => y.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[b.bc.Hawaii]: () => y.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[b.bc.Iowa]: () => y.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[b.bc.Idaho]: () => y.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[b.bc.Illinois]: () => y.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[b.bc.Indiana]: () => y.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[b.bc.Kansas]: () => y.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[b.bc.Kentucky]: () => y.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[b.bc.Louisiana]: () => y.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[b.bc.Massachusetts]: () => y.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[b.bc.Maryland]: () => y.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[b.bc.Maine]: () => y.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[b.bc.Michigan]: () => y.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[b.bc.Minnesota]: () => y.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[b.bc.Missouri]: () => y.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[b.bc.Mississippi]: () => y.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[b.bc.Montana]: () => y.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[b.bc.NorthCarolina]: () => y.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[b.bc.NorthDakota]: () => y.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[b.bc.Nebraska]: () => y.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[b.bc.NewHampshire]: () => y.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[b.bc.NewJersey]: () => y.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[b.bc.NewMexico]: () => y.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[b.bc.Nevada]: () => y.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[b.bc.NewYork]: () => y.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[b.bc.Ohio]: () => y.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[b.bc.Oklahoma]: () => y.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[b.bc.Oregon]: () => y.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[b.bc.Pennsylvania]: () => y.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[b.bc.RhodeIsland]: () => y.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[b.bc.SouthCarolina]: () => y.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[b.bc.SouthDakota]: () => y.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[b.bc.Tennessee]: () => y.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[b.bc.Texas]: () => y.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[b.bc.Utah]: () => y.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[b.bc.Virginia]: () => y.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[b.bc.Vermont]: () => y.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[b.bc.Washington]: () => y.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[b.bc.Wisconsin]: () => y.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[b.bc.WestVirginia]: () => y.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[b.bc.Wyoming]: () => y.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var Z = s("./src/reddit/components/StateSort/index.m.less"),
				J = s.n(Z);

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = R.a.wrapped(v.a, "_Dropdown", J.a),
				te = Object(w.a)(ee),
				se = e => {
					return e.indexOf("_") > 0 && re(e) === b.z.UnitedStates
				},
				ne = e => {
					if (se(e)) {
						return e.split("_")[1]
					}
					return b.bc.AllStates
				},
				re = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				oe = e => {
					const t = re(e),
						s = ne(e);
					return se(e) ? `${t}_${s}` : t
				},
				ae = Object(l.u)(),
				ie = Object(g.c)({
					dropdownIsOpen: Object(I.b)("StateSort--StateSortPicker")
				}),
				ce = Object(o.b)(ie, e => ({
					onOpenDropdown: () => e(Object(f.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, s) => {
						e(Object(h.b)(t)), e(Object(c.v)(b.z.UnitedStates + "_" + s))
					}
				}));
			var de = R.a.wrapped(ae(ce(e => {
				const t = `${e.baseUrl}?${Y.h}=${b.z.UnitedStates}`;
				return r.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, r.a.createElement(U, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, r.a.createElement(M, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : Q(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), r.a.createElement(C.a.Consumer, null, s => r.a.createElement(te, $({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, s, {
					renderContentsHidden: !0
				}), Object.keys(b.bc).map(s => {
					const n = b.bc[s];
					return r.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === b.bc.AllStates ? t : `${t}_${e}`)(n), oe(n))
					}, r.a.createElement(O.b, {
						className: Object(a.a)(e.rowClassName, e.sort === n ? e.rowSelectedClassName : void 0),
						displayText: Q(n),
						isSelected: e.sort === n
					}))
				}))))
			})), "Component", J.a);
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
			var ue = s("./src/reddit/components/CountrySort/index.m.less"),
				pe = s.n(ue);

			function me() {
				return (me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
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
					onClickLink: (t, s) => {
						e(Object(h.b)(t, {
							[S.b.FeedLoadReason]: S.a.GeoModeChange
						})), e(Object(c.v)(s))
					}
				}))(e => {
					const t = re(e.sort),
						s = ne(e.sort),
						n = `${e.baseUrl}?${Y.h}=`;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(a.a)(pe.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(be) : e.onOpenDropdown(be)
					}, r.a.createElement(U, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, r.a.createElement(M, {
						className: e.buttonClassName,
						displayText: (() => t in le ? le[t]() : le[b.z.Everywhere]())(),
						id: be,
						showDropdownTriangle: !0
					})), r.a.createElement(C.a.Consumer, null, s => r.a.createElement(te, me({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: be
					}, s, {
						renderContentsHidden: !0
					}), Object.keys(b.z).map(s => {
						const o = b.z[s];
						return r.a.createElement("div", {
							key: o,
							onClick: () => e.onClickLink(`${n}${oe(o)}`, o)
						}, r.a.createElement(O.b, {
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
						sort: s,
						wrapperClassName: e.wrapperClassName
					}))
				})),
				ye = s("./node_modules/path-browserify/index.js"),
				we = s.n(ye),
				Se = s("./src/reddit/components/TimeSort/index.m.less"),
				_e = s.n(Se);

			function Ce() {
				return (Ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ve = Object(w.a)(v.a),
				Oe = (e, t) => {
					let s = e.url;
					return e.urlParams.sort || Object(l.I)(e) || (s = we.a.join(s, t)), s
				},
				ke = R.a.div("ListingSortContainer", _e.a),
				xe = Object(l.u)(),
				Ee = Object(g.c)({
					dropdownIsOpen: Object(I.b)("TimeSort--SortPicker")
				});
			var je = xe(Object(o.b)(Ee, e => ({
					onOpenDropdown: () => e(Object(f.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(d.c)(e => r.a.createElement(ke, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, r.a.createElement(U, {
					className: e.wrapperClassName,
					disabled: !1
				}, r.a.createElement(M, {
					className: e.buttonClassName,
					displayText: Object(_.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), r.a.createElement(C.a.Consumer, null, t => r.a.createElement(ve, Ce({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [b.ec.HOUR, b.ec.DAY, b.ec.WEEK, b.ec.MONTH, b.ec.YEAR, b.ec.ALL].map(t => r.a.createElement(O.b, {
					className: Object(a.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
					key: `time_sort_${t}`,
					displayText: Object(_.b)(t),
					href: {
						pathname: new URL(Oe(e.pageLayer, e.listingSort), "https://fallback.hostname").pathname,
						state: {
							[S.b.FeedLoadReason]: S.a.SortChange
						},
						search: `${Y.A}=${t}`
					},
					isSelected: e.timeSort === t,
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(x.c)(t))
					}
				})))))))),
				Ne = s("./src/reddit/constants/listings.ts"),
				Ie = s("./src/reddit/controls/Button/index.tsx"),
				Pe = s("./src/reddit/icons/fonts/index.tsx"),
				Le = s("./src/reddit/selectors/meta.ts"),
				Te = s("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				De = s.n(Te);

			function Re() {
				return (Re = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ve = new Set([b.V.CONTROVERSIAL, b.V.TOP]),
				Ae = new Set([b.V.CONTROVERSIAL, b.V.RISING]),
				Fe = "ListingSort--Overflow",
				Be = Object(l.u)({
					isFrontpage: l.z,
					isProfilePage: l.I,
					pageLayer: e => e
				}),
				He = Object(g.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, j.a, P.k, l.E, N.a, Le.i, (e, t, s, n, r, o, a) => {
					if (e) return {
						isPopularPage: r,
						sortOptions: e,
						locale: a
					};
					const i = [b.V.HOT, b.V.NEW, b.V.TOP, b.V.RISING];
					return (t && (n || s) || r && s) && i.unshift(b.V.BEST), r && o && i.splice(3, 0, b.V.AWARDED), {
						isPopularPage: r,
						sortOptions: i,
						locale: a
					}
				});
			class Me extends r.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(x.a)(e))
					}, this.getSortUrl = e => {
						const {
							baseUrl: t,
							isProfilePage: s
						} = this.props;
						return s ? Object(m.a)(t, {
							sort: e
						}) : Object(k.a)(t, `${e}/`)
					}, this.renderSortButton = e => {
						const {
							sort: t
						} = this.props;
						return r.a.createElement(Ie.s, {
							className: Object(a.a)(De.a.SortLink, e === t && De.a.selected),
							kind: Ie.a.InternalLink,
							priority: Ie.b.Plain,
							Icon: s => r.a.createElement(B, Re({}, s, {
								className: Object(a.a)(De.a.SortIcon, s.className),
								sort: e,
								isFilled: e === t
							})),
							text: Object(_.a)(e),
							onClick: () => this.changeSort(e),
							to: {
								pathname: this.getSortUrl(e),
								state: {
									[S.b.FeedLoadReason]: S.a.SortChange
								}
							},
							key: e
						})
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: s,
							isPopularPage: n,
							sort: o
						} = this.props, a = n && !!s && e === b.V.HOT && o === b.V.HOT;
						return r.a.createElement(r.a.Fragment, {
							key: e
						}, this.renderSortButton(e), a && r.a.createElement(fe, {
							baseUrl: Ne.c[Ne.b.Popular],
							buttonClassName: De.a.DropdownButton,
							className: De.a.CountrySort,
							disabled: t,
							dropdownClassName: De.a.Dropdown,
							rowClassName: De.a.DropdownRow,
							rowSelectedClassName: De.a.DropdownRowSelected,
							wrapperClassName: De.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: s,
							stateSortClassName: De.a.StateSort
						}))
					}
				}
				isLocaleDependentSortOverflow(e) {
					const {
						sort: t,
						isPopularPage: s,
						locale: n
					} = this.props;
					return !n.startsWith("en") && (s ? e === b.V.AWARDED && (t === b.V.HOT || t === b.V.TOP) : e === b.V.BEST && t === b.V.TOP)
				}
				isOverflowSort(e) {
					return Ae.has(e) || this.isLocaleDependentSortOverflow(e)
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: s,
						sort: n,
						sortOptions: o,
						timeSort: i
					} = this.props, c = !t && Ve.has(n), d = Ae.has(n), l = o.filter(e => !this.isOverflowSort(e)), u = o.filter(e => this.isOverflowSort(e) && e !== n);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(W, Re({}, this.props, {
						buttonClassName: De.a.DropdownButton,
						className: Object(a.a)(De.a.SortDropdown, e),
						rowClassName: De.a.DropdownRow,
						rowIconClassName: De.a.DropdownRowIcon,
						rowSelectedClassName: De.a.DropdownRowSelected,
						showTitle: !1
					})), r.a.createElement("div", {
						className: Object(a.a)(De.a.SortButtons, e)
					}, l.map(this.renderSort)), d && this.renderSort(n), c && r.a.createElement(je, {
						baseUrl: this.getSortUrl(n),
						buttonClassName: De.a.DropdownButton,
						className: De.a.TimeSort,
						dropdownClassName: De.a.Dropdown,
						listingSort: n,
						onChange: s,
						rowClassName: De.a.DropdownRow,
						rowSelectedClassName: De.a.DropdownRowSelected,
						timeSort: i || b.fc,
						wrapperClassName: De.a.DropdownSortWrapper
					}), u.length > 0 && r.a.createElement(W, Re({}, this.props, {
						className: Object(a.a)(De.a.SortOverflow, e),
						dropdownClassName: De.a.Dropdown,
						dropdownId: Fe,
						rowClassName: De.a.DropdownRow,
						rowIconClassName: De.a.DropdownRowIcon,
						rowSelectedClassName: De.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: u
					}), r.a.createElement("button", {
						className: De.a.SortOverflowButton,
						id: Fe
					}, r.a.createElement(Pe.a, {
						name: "overflow_horizontal"
					}))))
				}
			}
			var Ue = Be(Object(o.b)(He)(Object(d.c)(Me))),
				ze = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				Ke = s.n(ze);
			const Ge = Object(l.u)({
					isProfilePage: l.I,
					pageLayer: e => e
				}),
				qe = Object(o.b)(null, (e, {
					subredditId: t
				}) => ({
					updateSortPreference: (s, n) => {
						if (t) {
							const r = Object(i.c)({
								sort: s,
								timeSort: n
							});
							e(Object(c.I)(t, r))
						}
					}
				}));
			class We extends r.a.Component {
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
						countrySort: s,
						disabled: n = !1,
						isProfilePage: o,
						sort: i,
						sortOptions: c,
						subredditId: d,
						timeSort: l,
						updateSortPreference: u
					} = this.props;
					return r.a.createElement("div", {
						className: Object(a.a)(Ke.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, r.a.createElement(Ue, {
						baseUrl: e,
						disabled: n,
						geopopularSort: s,
						onChange: u,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: c,
						timeSort: l
					}), !o && r.a.createElement(p.a, {
						className: Ke.a.LayoutSwitch,
						subredditId: d
					}))
				}
			}
			t.a = Ge(qe(Object(d.c)(We)))
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/PostList/index.tsx"),
				r = s("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(r.a)(n.a)
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/controls/Dropdown/index.m.less"),
				d = s.n(c);
			const l = {
				[a.V.BEST]: "best",
				[a.V.HOT]: "hot",
				[a.V.NEW]: "new",
				[a.V.CONTROVERSIAL]: "controversial",
				[a.V.TOP]: "top",
				[a.V.RISING]: "rising",
				[a.V.AWARDED]: "award"
			};

			function u({
				className: e,
				isFilled: t,
				sort: s
			}) {
				return l[s] ? r.a.createElement(i.a, {
					name: l[s],
					isFilled: t,
					className: Object(o.a)(e, d.a.iconStyles)
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
		"./src/reddit/components/OneFeed/Footer.m.less": function(e, t, s) {
			e.exports = {
				Footer: "_3AaWcDg070_adHsR2kuysq",
				footer: "_3AaWcDg070_adHsR2kuysq",
				ClassicLayout: "_2haLgsTDyDtdH_2cecOvLP",
				classicLayout: "_2haLgsTDyDtdH_2cecOvLP",
				LargeLayout: "_1nHCEySWEWsOIjYYvrF3Ay",
				largeLayout: "_1nHCEySWEWsOIjYYvrF3Ay",
				SeeFewerPostsView: "_3EYDFTyujo6kmshltlBq10",
				seeFewerPostsView: "_3EYDFTyujo6kmshltlBq10",
				Title: "_21u1WVXVWqUtM7v_Y0c9_0",
				title: "_21u1WVXVWqUtM7v_Y0c9_0",
				Button: "_3FNnHKnM8zvRUpKS2hqoVu",
				button: "_3FNnHKnM8zvRUpKS2hqoVu",
				Divider: "_5XRkOTBpwyH-aTpv3Uj2",
				divider: "_5XRkOTBpwyH-aTpv3Uj2",
				ThankYouView: "_3jke_Z4bAXFPXe4m2Z_ocv",
				thankYouView: "_3jke_Z4bAXFPXe4m2Z_ocv",
				Icon: "_3Qyit4QoTHIo9Mp3ed0NZg",
				icon: "_3Qyit4QoTHIo9Mp3ed0NZg",
				Subtitle: "_2f9EhN-2fH0l-KxOeQ_wj8",
				subtitle: "_2f9EhN-2fH0l-KxOeQ_wj8"
			}
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return _e
			})), s.d(t, "a", (function() {
				return ve
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, r = s("./node_modules/history/esm/history.js"),
				o = s("./node_modules/lodash/debounce.js"),
				a = s.n(o),
				i = s("./node_modules/lodash/last.js"),
				c = s.n(i),
				d = s("./node_modules/lodash/throttle.js"),
				l = s.n(d),
				u = s("./node_modules/react/index.js"),
				p = s.n(u),
				m = s("./node_modules/shallowequal/index.js"),
				b = s.n(m),
				h = s("./src/lib/addQueryParams/index.ts"),
				g = s("./src/lib/ads/index.ts"),
				f = s("./src/lib/classNames/index.ts"),
				y = s("./src/lib/constants/index.ts"),
				w = s("./src/lib/fastdom/index.ts"),
				S = s("./src/lib/lessComponent.tsx"),
				_ = s("./src/lib/opener/index.ts"),
				C = s("./src/lib/sentry/index.ts"),
				v = s("./node_modules/react-redux/es/index.js"),
				O = s("./src/reddit/actions/post.ts"),
				k = s("./src/reddit/actions/toaster.ts"),
				x = s("./src/reddit/constants/oneFeed.ts"),
				E = s("./src/reddit/constants/postLayout.ts"),
				j = s("./src/reddit/contexts/ApiContext.tsx"),
				N = s("./src/lib/makeGqlRequest/index.ts"),
				I = s("./src/redditGQL/operations/UpdateRecommendationPreferences.json");
			! function(e) {
				e.ADD = "ADD", e.REMOVE = "REMOVE"
			}(n || (n = {}));
			const P = (e, t) => Object(N.a)(e, {
					...I,
					variables: t
				}),
				L = (e, t) => P(e(), {
					input: {
						dislikedSimilarSubredditSeedPreference: {
							action: n.ADD,
							subredditId: t
						}
					}
				}),
				T = (e, t) => P(e(), {
					input: {
						dislikedSubredditPreference: {
							action: n.ADD,
							subredditId: t
						}
					}
				});
			var D = s("./src/reddit/helpers/trackers/post.ts"),
				R = s("./src/reddit/hooks/useRecommendationPostContext.ts"),
				V = s("./src/reddit/hooks/useTracking.ts"),
				A = s("./src/reddit/icons/fonts/index.tsx"),
				F = s("./src/reddit/components/OneFeed/Footer.m.less"),
				B = s.n(F);
			const {
				fbt: H
			} = s("./node_modules/fbt/lib/FbtPublic.js"), M = async ({
				dispatch: e,
				gqlContext: t,
				setRecommendationFooterView: s,
				similar: n,
				subredditId: r
			}) => {
				const o = n ? L : T;
				try {
					if (!0 === (await o(t, r)).ok) return void s(x.a.ThankYouView);
					e(Object(k.d)())
				} catch (a) {
					e(Object(k.d)())
				}
			}, U = ({
				displayText: e,
				seeLessFromThisCommunity: t,
				seeLessLikeThisCommunity: s,
				seeLessOfThisPostClick: n
			}) => p.a.createElement("div", {
				className: B.a.SeeFewerPostsView
			}, p.a.createElement("div", {
				className: B.a.Title
			}, H._("What would you like to see less of?", null, {
				hk: "mw3bZ"
			})), p.a.createElement("div", null, p.a.createElement("button", {
				className: B.a.Button,
				onClick: n
			}, H._("This individual post", null, {
				hk: "103pQH"
			}))), p.a.createElement("hr", {
				className: B.a.Divider
			}), p.a.createElement("div", null, p.a.createElement("button", {
				className: B.a.Button,
				onClick: t
			}, H._("Posts from this community", null, {
				hk: "RacDp"
			}))), !!e && p.a.createElement(p.a.Fragment, null, p.a.createElement("hr", {
				className: B.a.Divider
			}), p.a.createElement("div", null, p.a.createElement("button", {
				className: B.a.Button,
				onClick: s
			}, H._("Posts from communities similar to {subreddit name}", [H._param("subreddit name", e)], {
				hk: "3pCPAD"
			}))))), z = () => p.a.createElement("div", {
				className: B.a.ThankYouView
			}, p.a.createElement("div", {
				className: B.a.Title
			}, p.a.createElement(A.a, {
				name: "checkmark",
				className: B.a.Icon
			}), H._("Thanks for letting us know!", null, {
				hk: "2VBsFC"
			})), p.a.createElement("div", {
				className: B.a.Subtitle
			}, H._("Your feedback improves your feed.", null, {
				hk: "2WLaqS"
			})));
			var K = Object(j.b)(({
					gqlContext: e,
					layout: t,
					post: s
				}) => {
					var n;
					const r = Object(v.d)(),
						o = Object(V.a)(),
						a = Object(u.useRef)(!1),
						{
							hideRecommendationFooter: i,
							recommendationFooterView: c,
							setRecommendationFooterView: d
						} = Object(R.a)(),
						l = s.belongsTo.id,
						m = s.id,
						{
							subredditId: b,
							subredditName: h
						} = (null === (n = s.recommendationContext) || void 0 === n ? void 0 : n.source) || {};
					Object(u.useEffect)(() => {
						if (c === x.a.ThankYouView) {
							const e = a.current ? () => r(Object(O.Y)(m, !0, !1, !0)) : i,
								t = setTimeout(e, 1500);
							return () => clearTimeout(t)
						}
					}, [r, i, m, c]);
					const g = Object(u.useCallback)(() => {
							a.current = !0, d(x.a.ThankYouView), o(Object(D.j)(m))
						}, [m, o, d]),
						y = Object(u.useCallback)(() => {
							M({
								dispatch: r,
								gqlContext: e,
								setRecommendationFooterView: d,
								similar: !1,
								subredditId: l
							}), a.current = !0, o(Object(D.b)(m))
						}, [r, e, m, o, d, l]),
						w = Object(u.useCallback)(() => {
							b && (M({
								dispatch: r,
								gqlContext: e,
								setRecommendationFooterView: d,
								similar: !0,
								subredditId: b
							}), a.current = !0, o(Object(D.m)(m)))
						}, [r, e, m, b, o, d]);
					return c && c !== x.a.None ? p.a.createElement("div", {
						className: Object(f.a)(B.a.Footer, {
							[B.a.ClassicLayout]: t === E.g.Classic,
							[B.a.CompactLayout]: t === E.g.Compact,
							[B.a.LargeLayout]: t === E.g.Large
						})
					}, c === x.a.SeeFewerPostsView && p.a.createElement(U, {
						displayText: h,
						seeLessFromThisCommunity: y,
						seeLessLikeThisCommunity: w,
						seeLessOfThisPostClick: g
					}), c === x.a.ThankYouView && p.a.createElement(z, null)) : null
				}),
				G = s("./src/reddit/components/PostList/LoadMore.tsx"),
				q = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				W = s("./src/reddit/components/Scroller/Simple.tsx"),
				Y = s("./src/reddit/constants/adEvents.ts"),
				Q = s("./src/reddit/constants/componentSizes.ts"),
				X = s("./src/reddit/contexts/OneFeed/index.ts");
			var Z = function({
					children: e
				}) {
					const [t, s] = Object(u.useState)(x.a.None), n = Object(u.useCallback)(() => s(x.a.None), []), r = Object(u.useMemo)(() => ({
						hideRecommendationFooter: n,
						recommendationFooterView: t,
						setRecommendationFooterView: s
					}), [n, t, s]);
					return p.a.createElement(X.a.Provider, {
						value: r
					}, e)
				},
				J = s("./src/reddit/controls/InternalLink/index.tsx"),
				$ = s("./src/reddit/controls/OutboundLink/index.tsx"),
				ee = s("./src/reddit/helpers/getClickInfo.ts"),
				te = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				se = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				ne = s("./src/reddit/models/Media/index.ts"),
				re = s("./src/reddit/helpers/brandSafety/index.ts"),
				oe = s("./src/reddit/helpers/trackers/ads.ts"),
				ae = s("./src/lib/LRUCache/index.ts"),
				ie = s("./src/telemetry/index.ts"),
				ce = s("./src/telemetry/models/Timer.ts"),
				de = s("./src/reddit/components/PostList/index.m.less"),
				le = s.n(de);
			const {
				fbt: ue
			} = s("./node_modules/fbt/lib/FbtPublic.js"), pe = 500, me = new ae.a(pe), be = new ae.a(pe), he = new ae.a(pe), ge = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5,
				SEARCH: 3
			}, fe = S.a.div("SeeMore", le.a), ye = S.a.wrapped(se.a, "ArrowRight", le.a), we = (e, t, s, n, r, o, a, i, c) => {
				const d = `entered-${e}-${t}-${s?`last-${n}-${r}`:""}-${o}`;
				let l = me.get(d);
				return void 0 === l && (l = () => {
					s && a.onBottomViewed(n, r), a.trackOnPostEnteredViewport(e, t, i, c)
				}, me.set(d, l)), l
			}, Se = (e, t, s, n, r) => {
				const o = `left-${e}-${t}`;
				let a = be.get(o);
				return void 0 === a && (a = o => {
					s.trackOnPostExitedViewport(e, t, o, n, r)
				}, be.set(o, a)), a
			}, _e = (e, t, s = !1) => {
				const n = `click-${e}`;
				let r = he.get(n);
				return void 0 === r && (r = (e, n, r, o, a) => {
					if (n.isSponsored) {
						t.fireAdPixelsOfType(n, Y.a.Click);
						const {
							source: e
						} = Object(g.t)(n, o);
						if (e && e.outboundUrl) {
							let t = e.outboundUrl;
							r && (t = Object($.a)(n.id, r, t).url), Object(oe.a)(n, a), Object(_.e)(t, _.d.BLANK)
						}
					} else t.openPost({
						postOrComment: n,
						clickInfo: Object(ee.a)(e),
						isFrontpage: s
					})
				}, he.set(n, r)), r
			}, Ce = (e, t) => {
				const s = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					s.splice(e, 0, t[e])
				}), s
			};
			class ve extends p.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new ae.a(pe), this.surveyTriggerCounted = !1, this.timerId = void 0, this.viewportHeight = null, this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						const {
							isNpsScrollSurveyEnabled: t,
							onScroll: s,
							surveyTriggerScrollCounted: n
						} = this.props;
						this.dispatchBrandSafety(e), t && n && !this.surveyTriggerCounted && this.surveyTriggerListener(e), s && s(e)
					}, this.surveyTriggerListener = l()(({
						primaryChild: e
					}) => {
						this.viewportHeight && e && e.rectangle && e.rectangle.top > this.viewportHeight && (this.props.surveyTriggerScrollCounted && this.props.surveyTriggerScrollCounted(), this.surveyTriggerCounted = !0)
					}, 500), this.dispatchBrandSafety = a()(({
						getVisibleItemsInViewport: e
					}) => {
						const {
							postsById: t,
							subredditsById: s
						} = this.props, n = e(), r = [];
						n.forEach(e => r.push(e.id));
						const o = r.map(e => t[e]).filter(Boolean),
							a = o.map(e => s[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(re.a)(o, a))
					}, y.d, {
						leading: !0
					}), this.eventFactoryHandler = (e, t, s) => this.props.postClickEventFactory(e, t, s, this.props)
				}
				UNSAFE_componentWillMount() {
					void 0 !== this.timerId && ie.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = ie.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.viewportHeight = window.innerHeight, void 0 !== this.timerId) {
						const e = ie.c.end(this.timerId);
						setTimeout(() => Object(ie.b)(y.m.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					void 0 !== this.timerId && ie.c.cancel(this.timerId), e.postIds.length && (this.timerId = ie.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					var t, s;
					if (w.a.read(() => this.checkAndSendScreenview()), this.timerId && ie.c.has(this.timerId)) {
						const e = ie.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(ie.b)(y.m.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
					this.props.listingKey !== e.listingKey && (this.surveyTriggerCounted = !1);
					const n = null === (t = this.props.postIds) || void 0 === t ? void 0 : t[0];
					n && n !== (null === (s = e.postIds) || void 0 === s ? void 0 : s[0]) && this.props.onFirstPostChanged(n)
				}
				componentWillUnmount() {
					this.timerId && ie.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && c()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return ie.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview() || !t) return;
					const n = ie.c.end(e);
					setTimeout(() => {
						s(t(n, ce.TimerType.InApp))
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
					const {
						postsById: t,
						triggerNewPostPill: s,
						...n
					} = this.props, {
						postsById: r,
						triggerNewPostPill: o,
						...a
					} = e, i = Object.keys(n), c = Object.keys(a);
					if (c.length !== i.length) return !0;
					if (c.some(e => {
							let t = !1;
							return t = "function" == typeof n[e] || "object" == typeof n[e] ? !b()(n[e], a[e]) : n[e] !== a[e]
						})) return !0;
					if (t === r) return !1;
					if (s !== o) return !0;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: s
						} = this.props;
						return this.props.postIds.some((n, o) => {
							const a = 0 === o;
							return s({
								isFirstPost: a,
								layout: e,
								post: t[n]
							}) !== s({
								isFirstPost: a,
								layout: e,
								post: r[n]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, n) {
					const {
						currentProfileName: r,
						hostPostData: o,
						isCommentPermalink: a,
						isCommentsPage: i,
						isFrontpage: c,
						isProfilePostListing: d,
						isTopicPage: l,
						isCommentCountAnimationEnabled: u,
						isVoteCountAnimationEnabled: m,
						isCountAnimShadowTestEnabled: b,
						listingBelowVariant: h,
						listingKey: g,
						listingName: f,
						pageLayer: w,
						pageReferrer: S,
						redditStyle: _,
						shouldHideFlair: v,
						triggerNewPostPill: O,
						postIds: k
					} = this.props, x = 0 === t, j = `post-${n}-${e}-${t}-${s?"last-index":""}-${f}-${g}-${S}`;
					let N;
					if (void 0 === (N = this.scrollChildCache.get(j))) {
						const {
							inSubredditOrProfile: I,
							postsById: P
						} = this.props, L = P[e], T = L.crosspostRootId && P[L.crosspostRootId] ? P[L.crosspostRootId] : L;
						L.crosspostRootId && !P[L.crosspostRootId] && C.c.withScope(e => {
							e.setExtra("errorType", y.s.API), e.setExtra("description", `Post ${L.id} is crosspost of ${L.crosspostRootId}, but ` + `${L.crosspostRootId} details are missing in the state`), C.c.captureMessage("Crosspost parent details are missing")
						});
						const D = this.props.postComponentForLayout({
							isCrosspost: !!L.crosspostRootId,
							isFirstPost: x,
							layout: n,
							post: T
						});
						let R = `post-list-item-[layout: ${n}]-[postId: ${e}]`;
						this.props.listingBelowVariant && g && (R += `--${g}`);
						const V = we(e, n, s, g, f, S, this.props, t, this.props.hostPostData),
							A = Se(e, n, this.props, t, w),
							F = _e(e, this.props, c),
							B = T.media && T.media.type === ne.o.EMBED ? T.media.provider : null,
							H = u && !L.isSponsored,
							M = m && !L.isSponsored && !L.isScoreHidden,
							U = !!(null == L ? void 0 : L.recommendationContext);
						N = {
							estHeight: Object(te.c)(L, n),
							id: e,
							isFocusable: !(!T.media || !(n === E.g.Large || n === E.g.Classic && Object(ne.H)(T.media))) && (ne.d.has(T.media.type) && (!B || !ne.s.has(B)) && !T.isSpoiler),
							trackOnEnteredViewport: V,
							trackOnExitedViewport: A,
							render: ({
								className: u,
								height: m,
								width: y,
								remeasure: S,
								setScrollerChildRef: C,
								shouldLoadInitially: E
							}) => p.a.createElement(Z, {
								key: R
							}, p.a.createElement(D, {
								availableWidth: y,
								className: u,
								currentProfileName: r,
								eventFactory: this.eventFactoryHandler,
								first: x,
								forceLoadMedia: E,
								hostPostData: o,
								inSubredditOrProfile: I,
								isCommentCountAnimationEnabled: H,
								isCommentPermalink: a,
								isCommentsPage: i,
								isCountAnimShadowTestEnabled: b,
								isFrontpage: c,
								isProfilePostListing: d,
								isTopicPage: l,
								isVoteCountAnimationEnabled: M,
								key: R,
								last: s,
								listingBelowVariant: h,
								listingIndex: t,
								listingKey: g,
								listingName: f,
								onceInViewport: O,
								onClickPost: F,
								onSizeChanged: S,
								pageLayer: w,
								postId: e,
								postIds: k,
								redditStyle: _,
								scrollerItemRef: C,
								sendEvent: this.props.sendEvent,
								shouldHideFlair: v
							}), U && p.a.createElement(K, {
								post: T,
								layout: n
							}))
						}, this.scrollChildCache.set(j, N)
					}
					return N
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return p.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: s,
						layout: n,
						onTryAgain: r,
						postListPlaceholderComponent: o
					} = this.props;
					if (s) return;
					const a = o;
					return p.a.createElement("div", {
						className: le.a.placeholder
					}, p.a.createElement(a, {
						className: t,
						isLoading: !e,
						layout: n
					}), !!e && p.a.createElement(q.a, {
						apiError: e,
						onTryAgain: r
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: n,
						loadMoreClassName: r,
						onLoadMore: o
					} = this.props;
					if (!s) return p.a.createElement("div", {
						className: le.a.placeholder
					}, p.a.createElement(G.a, {
						className: r,
						isLoading: !!t,
						layout: n,
						countOverride: ge[n]
					}), !!e && p.a.createElement(q.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: n,
						isSerpExperimentOverride: o,
						isTruncated: a,
						layout: i,
						location: c,
						loadMore: d,
						postIds: l,
						postsById: m,
						onLoadMore: b
					} = this.props;
					let g = l.filter(e => Boolean(m[e])).map((e, t, s) => {
						const n = t === s.length - 1;
						return this.scrollChildForPost(e, t, n, i)
					});
					n && (g = Ce(g, n));
					const w = this.props.measureScrollFPS ? `post-listings-${i}` : void 0,
						S = c ? Object(r.e)(c) : null,
						_ = S || a;
					return p.a.createElement(u.Fragment, null, p.a.createElement(W.b, {
						innerRef: this.updateScrollerRef,
						className: _ ? le.a.truncatedPostList : Object(f.a)(le.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: d && d.token ? d.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: b,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: w,
						viewportTopPadding: Q.f
					}, g), !o && S && p.a.createElement(fe, {
						className: le.a.seeMoreButton
					}, p.a.createElement(J.a, {
						className: le.a.seeMorePostsText,
						to: Object(h.a)(S, {
							type: y.Yb.Posts
						})
					}, ue._("See More Posts", null, {
						hk: "3o0CqI"
					}), p.a.createElement(ye, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			ve.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: p.a.Fragment
			}
		},
		"./src/reddit/components/PowerupsCncModule/async.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(n.a)({
				resolved: {},
				chunkName: () => "PowerupsCncModule",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.resolve().then(s.bind(null, "./src/reddit/components/PowerupsCncModule/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/PowerupsCncModule/index.tsx"
				}
			})
		},
		"./src/reddit/components/PowerupsCncModule/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/PowerupsCncModule/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "isPowerupsCncModuleHiddenBySpamLimit", (function() {
				return f
			}));
			var n = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/opener/index.ts"),
				c = s("./src/reddit/constants/localStorage.ts"),
				d = s("./src/reddit/helpers/localStorage/index.ts"),
				l = s("./src/reddit/helpers/trackers/powerups.ts"),
				u = s("./src/reddit/hooks/useTracking.ts"),
				p = s("./src/reddit/icons/fonts/index.tsx"),
				m = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/reddit/components/PowerupsCncModule/index.m.less"),
				h = s.n(b);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js"), f = e => {
				return Object(d.j)(c.b.POWERUPS_CNC_MODULE_VISIBILITY_STORE, e) > 1
			};
			t.default = ({
				subredditId: e
			}) => {
				const t = Object(u.a)(),
					s = Object(a.e)(t => Object(m.Q)(t, {
						subredditId: e
					})),
					b = !!s;
				return Object(r.useEffect)(() => {
					b && (Object(d.R)(c.b.POWERUPS_CNC_MODULE_VISIBILITY_STORE, e), f(e) || t(Object(l.c)()))
				}, [t, b, e]), b ? o.a.createElement("a", {
					className: h.a.feedBanner,
					onClick: () => {
						t(Object(l.b)())
					},
					href: `${n.a.redditUrl}/powerups`,
					rel: i.c,
					target: "_blank"
				}, o.a.createElement("div", {
					className: h.a.powerupsLogo
				}, o.a.createElement("img", {
					className: h.a.bolt,
					src: `${n.a.assetPath}/img/powerups/powerups-cnc.svg`,
					alt: "powerups lightning bolt"
				})), o.a.createElement("div", {
					className: h.a.bannerText
				}, o.a.createElement("p", {
					className: h.a.heading
				}, g._("Give {subreddit name} members a way to give back", [g._param("subreddit name", s.displayText)], {
					hk: "4poXz"
				})), o.a.createElement("p", {
					className: h.a.description
				}, g._("Harness the power of your community to unlock special perks and features using Powerups.", null, {
					hk: "fJGis"
				}))), o.a.createElement(p.a, {
					name: "caret_right",
					className: h.a.chevron
				})) : null
			}
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
		"./src/reddit/components/StateSort/index.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "KZGTzwiGn_74p_B8yZaKw",
				dropdown: "KZGTzwiGn_74p_B8yZaKw",
				Component: "_3-D0oENu00AlV9AmpZqxfm",
				component: "_3-D0oENu00AlV9AmpZqxfm"
			}
		},
		"./src/reddit/components/TimeSort/index.m.less": function(e, t, s) {
			e.exports = {
				ListingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey",
				listingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey"
			}
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return v
			})), s.d(t, "d", (function() {
				return k
			})), s.d(t, "b", (function() {
				return E
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/actions/ads/index.ts"),
				i = s("./src/reddit/actions/focusedVerticals/index.ts"),
				c = s("./src/reddit/actions/gold/tooltips.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				u = s("./src/reddit/actions/survey/index.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/components/PostList/Placeholder.tsx"),
				f = s("./src/reddit/featureFlags/index.ts"),
				y = s("./src/reddit/selectors/experiments/survey.ts"),
				w = s("./src/reddit/selectors/listings.ts"),
				S = s("./src/reddit/selectors/posts.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/selectors/tracking.ts");

			function v() {
				return Object(m.u)({
					currentProfileName: m.i,
					isCommentPermalink: m.w,
					isCommentsPage: m.x,
					isFrontpage: m.z,
					isProfilePostListing: m.K,
					isTopicPage: m.P,
					pageLayer: e => e
				})
			}
			const O = v(),
				k = {
					apiError: w.c,
					apiPending: w.d,
					measureScrollFPS: f.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(m.Q)(e, t),
					loadMore: w.g,
					postsById: S.S,
					postIds: Object(o.a)((e, {
						listingKey: t,
						listingName: s,
						inSubredditOrProfile: n
					}) => Object(S.E)(e, t, s, n)),
					subredditsById: _.X,
					viewportDataLoaded: C.a,
					pageReferrer: m.T,
					postListPlaceholderComponent: () => g.a,
					isNpsScrollSurveyEnabled: y.e
				},
				x = Object(r.c)(k),
				E = e => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(c.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(a.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(i.a)({
							lastLoadedEnv: "server"
						})), e(d.K(t))
					},
					fireAdPixelsOfType: (t, s) => {
						e(d.z(t, s))
					},
					trackOnPostEnteredViewport: (t, s, n, r) => {
						e(d.N(t, n, r))
					},
					trackOnPostExitedViewport: (t, s, n, r, o) => {
						e(d.O(t, n, r, o))
					},
					surveyTriggerScrollCounted: () => e(Object(u.k)())
				}),
				j = e => Object(b.b)({
					...e
				}),
				N = (e, t, s, n) => {
					const {
						listingKey: r,
						hostPostData: o,
						listingBelowVariant: a
					} = n;
					return Object(h.i)(e, t, "post", r, o, a, void 0)
				},
				I = Object(n.b)(x, E, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: j,
					postClickEventFactory: N
				}));
			t.a = e => Object(p.c)(O(I(e)))
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts");
			const o = {
					[r.V.BEST]: () => n.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[r.V.HOT]: () => n.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[r.V.NEW]: () => n.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[r.V.CONTROVERSIAL]: () => n.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[r.V.RISING]: () => n.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[r.V.TOP]: () => n.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[r.V.AWARDED]: () => n.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				a = e => {
					const t = o[e];
					return t && t() || ""
				},
				i = {
					[r.ec.HOUR]: () => n.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[r.ec.DAY]: () => n.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[r.ec.WEEK]: () => n.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[r.ec.MONTH]: () => n.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[r.ec.YEAR]: () => n.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[r.ec.ALL]: () => n.fbt._("All Time", null, {
						hk: "3qt6Ct"
					})
				},
				c = e => {
					const t = i[e];
					return t && t() || ""
				}
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = r.a.createContext({})
		},
		"./src/reddit/helpers/trackers/contentTag.ts": function(e, t, s) {
			"use strict";
			s.d(t, "h", (function() {
				return n
			})), s.d(t, "g", (function() {
				return r
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "l", (function() {
				return a
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "j", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "i", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "n", (function() {
				return p
			})), s.d(t, "m", (function() {
				return m
			})), s.d(t, "k", (function() {
				return b
			})), s.d(t, "o", (function() {
				return h
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "d", (function() {
				return f
			}));
			const n = () => () => ({
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
		"./src/reddit/pages/Subreddit/SurveyUnit.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/components/CommunityTopicSurvey/async.tsx"),
				c = s("./src/reddit/components/ContentSurvey/ContentRatingSurveyBanner.tsx"),
				d = s("./src/reddit/components/PowerupsCncModule/index.tsx"),
				l = s("./src/reddit/components/PowerupsCncModule/async.ts"),
				u = s("./src/reddit/constants/postLayout.ts"),
				p = s("./src/reddit/selectors/gold/powerups/index.ts");
			const m = Object(n.a)({
				resolved: {},
				chunkName: () => "NewCommunityProgress",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e(0), s.e("NewCommunityProgress")]).then(s.bind(null, "./src/reddit/components/NewCommunityProgress/NewCommunityProgress.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/NewCommunityProgress/NewCommunityProgress.tsx"
				}
			});

			function b({
				postLayout: e,
				subredditId: t
			}) {
				var s;
				const n = Object(a.e)(e => e.subreddits.survey[t]),
					r = Object(a.e)(e => e.subreddits.progressModule[t]),
					b = Object(a.e)(e => Object(p.b)(e, {
						subredditId: t
					}));
				return (null === (s = null == r ? void 0 : r.cards) || void 0 === s ? void 0 : s.length) > 0 ? o.a.createElement(m, {
					closeModuleOnMount: !!e && e !== u.g.Large,
					subredditId: t,
					progressModule: r
				}) : e !== u.g.Large ? null : (null == n ? void 0 : n.isEligible) && !(null == n ? void 0 : n.response) ? o.a.createElement(c.a, {
					subredditId: t,
					survey: n
				}) : b && !Object(d.isPowerupsCncModuleHiddenBySpamLimit)(t) ? o.a.createElement(l.a, {
					subredditId: t
				}) : o.a.createElement(i.a, {
					subredditId: t
				})
			}
		},
		"./src/reddit/selectors/experiments/econLeaderboards.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/user.ts");
			const a = e => {
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: o.K,
						experimentName: n.mc
					});
					return !(!t || Object(n.af)(t))
				},
				i = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: o.K,
						experimentName: n.mc
					}) === n.Mc.ListingEnabled
				}
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
				return p
			})), s.d(t, "j", (function() {
				return m
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "f", (function() {
				return y
			})), s.d(t, "c", (function() {
				return w
			})), s.d(t, "g", (function() {
				return S
			})), s.d(t, "d", (function() {
				return _
			}));
			var n = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/reddit/featureFlags/index.ts"),
				o = s("./src/reddit/selectors/posts.ts"),
				a = s("./src/reddit/selectors/subreddit.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const c = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(a.Q)(e, {
							subredditId: s
						});
						return t && t.displayText || ""
					}
					return ""
				},
				d = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				l = e => e.focusedVerticals.components.dismissed,
				u = [],
				p = Object(n.a)((e, t) => {
					const s = m(e, t);
					if (!s) return u;
					const n = Object(a.U)(e, {
						subredditName: s.name
					});
					return n && n.postIds && n.postIds.length ? n.postIds : u
				}),
				m = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(a.Q)(e, {
						subredditId: s
					}) : null
				},
				b = (e, t, s, n, r) => {
					const a = r.find(e => e <= t) || -1,
						i = r.find(e => e > t) || 1 / 0;
					return t !== i && t !== a && (!(a + s > t) && (!(t + s > i) && !((e, t, s) => {
						const n = s[t - 1],
							r = s[t],
							a = r && Object(o.H)(e, {
								postId: n
							}) || null,
							i = r && Object(o.H)(e, {
								postId: r
							}) || null;
						return a && a.isSponsored || i && i.isSponsored
					})(e, t, n)))
				},
				h = [3],
				g = Object(n.a)((e, {
					existingDUPositions: t,
					listingProps: s
				}) => {
					const n = t.slice().sort();
					let r = -1;
					const a = Object(o.A)(e, {
							listingKey: s.listingKey
						}),
						i = [];
					return h.forEach(t => {
						let s = r + t;
						if (!(s >= a.length)) {
							for (; s < a.length && !b(e, s, t, a, n);) s += 1;
							s < a.length && (i.push(s), r = s)
						}
					}), i
				}),
				f = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				y = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				w = e => e.focusedVerticals.category,
				S = e => e.focusedVerticals.lastLoadedEnv,
				_ = e => {
					const t = Object(i.J)(e),
						s = r.d.geoSubredditRecommendationDULoggedIn(e),
						n = r.d.geoSubredditRecommendationDULoggedOut(e);
					return t && s || !t && n
				}
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"5c3cbc62be22"}')
		},
		"./src/redditGQL/operations/UpdateRecommendationPreferences.json": function(e) {
			e.exports = JSON.parse('{"id":"fa7b23e7dbc7"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Frontpage~ModListing.ce8f8e549b5fc679b778.js.map