// https://www.redditstatic.com/desktop2x/Frontpage~ModListing.a88188c9ba63d750bccb.js
// Retrieved at 7/8/2021, 12:50:03 PM by Reddit Dataminer v1.0.0
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
			var r, n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/performanceTimings/index.tsx"),
				i = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(r || (r = {}));
			var d, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var p = s("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				m = s("./src/reddit/selectors/platform.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(n.a)(i.g),
				g = Object(n.a)(i.e),
				f = Object(n.a)(i.h),
				y = Object(n.a)(i.c),
				w = Object(n.a)(i.f),
				S = Object(n.a)(i.j),
				_ = Object(n.a)(i.i),
				v = () => async (e, t, {
					gqlContext: s
				}) => {
					const n = t(),
						o = Object(p.e)(n),
						i = Object(p.d)(n),
						d = Object(b.J)(n);
					if (o || !i) return;
					e(f());
					let m = !1;
					try {
						const t = d ? r.LoggedInGeo : r.LoggedOutGeo,
							n = await ((e, t, s) => Object(a.a)(e, {
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
									e(y({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), m = !0
								} else if (k(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: r,
											interactedSubreddit: n,
											category: o
										} = s.focusRecommendations[0],
										i = [r, n],
										a = Object(u.d)(i),
										c = Object(l.b)(i),
										d = Object(u.c)(r),
										p = {
											recommendedSubredditIds: [r.id],
											interactedSubredditIds: [n.id],
											subreddits: a,
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
				}, O = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, C = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, k = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						r = t && t.type;
					return !!(s && !C(e) && r === d.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, x = () => async (e, t, s) => {
					var r, n;
					const i = t(),
						a = Object(p.g)(i);
					if (Object(p.f)(i) || null === a || "client" === a) {
						const s = null === (n = null === (r = Object(m.b)(t())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === n ? void 0 : n.route.chunk,
							a = Object(b.K)(i);
						return Object(o.i)(() => e(v()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(w({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/components/CommunityTopicSurvey/async.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(r.a)({
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
			t.a = n
		},
		"./src/reddit/components/ContentSurvey/ContentRatingSurveyBanner.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/config.ts"),
				i = s("./src/reddit/components/ContentSurvey/index.m.less"),
				a = s.n(i),
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
				const [s, i] = Object(r.useState)(!1), m = Object(d.a)();
				return Object(r.useEffect)(() => m(Object(c.h)()), [m]), n.a.createElement("div", {
					className: a.a.feedBanner,
					onClick: function() {
						i(!0), m(Object(c.g)())
					}
				}, n.a.createElement("div", {
					className: a.a.notepadSnoo
				}, n.a.createElement("img", {
					src: `${o.a.assetPath}/img/snoovatar-notepad.png`
				})), n.a.createElement("div", {
					className: a.a.bannerCopy
				}, n.a.createElement("p", {
					className: a.a.copy
				}, p._("Set up this community’s content tag", null, {
					hk: "3ssqQf"
				})), n.a.createElement("p", {
					className: a.a.meta
				}, p._("Take a quick survey to help people know what to expect when they visit this community", null, {
					hk: "3sUbRf"
				}))), n.a.createElement(l.a, {
					name: "caret_right",
					className: a.a.chevron
				}), s && n.a.createElement(u.a, {
					withOverlay: !0,
					subredditId: t,
					survey: e,
					onClose: () => i(!1)
				}))
			}
		},
		"./src/reddit/components/ContentSurvey/SurveyModal.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./src/higherOrderComponents/asModal/index.tsx");
			const o = Object(r.a)({
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
				i = Object(n.a)(o);
			t.a = i
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
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/upperFirst.js"),
				o = s.n(n),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
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
				S = f.a.wrapped(p.k, "SubmitLink", h.a),
				_ = e => {
					switch (e) {
						case d.U.RISING:
							return r.fbt._("Create a new post and take all the glory", null, {
								hk: "1NhXUe"
							});
						case d.U.TOP:
						case d.U.CONTROVERSIAL:
							return null;
						default:
							return r.fbt._("Be the first to till this fertile land.", null, {
								hk: "VYQD0"
							})
					}
				},
				v = ({
					listingName: e,
					sort: t
				}) => {
					const s = _(t);
					return a.a.createElement("div", {
						className: h.a.MainContent
					}, a.a.createElement("div", {
						className: h.a.PrimaryText
					}, (e => {
						switch (e) {
							case d.U.RISING:
								return r.fbt._("Looks like nothing is rising fast enough in this subreddit", null, {
									hk: "kJ3Te"
								});
							case d.U.TOP:
							case d.U.CONTROVERSIAL:
								return r.fbt._("No posts were found using the {listing sort option} sort. Try changing the sort.", [r.fbt._param("listing sort option", o()(e))], {
									hk: "48BeCW"
								});
							default:
								return r.fbt._("There are no posts in this subreddit", null, {
									hk: "5mVkT"
								})
						}
					})(t)), e && !Object(l.a)(e) && !!s && a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: h.a.SecondaryText
					}, _(t)), a.a.createElement(S, {
						to: `/r/${e}/submit`
					}, r.fbt._("Add a post", null, {
						hk: "1vnCSW"
					}))))
				},
				O = () => a.a.createElement("div", {
					className: h.a.MainContent
				}, a.a.createElement("img", {
					className: h.a.SnooImg,
					src: `${c.a.assetPath}/img/snoo_discovery@1x.png`
				}), a.a.createElement("div", {
					className: h.a.PrimaryText
				}, r.fbt._("Reddit gets better when you join communities, so find some that you’ll love!", null, {
					hk: "7B6oq"
				})), a.a.createElement(S, {
					to: "/r/popular"
				}, r.fbt._("Browse Popular Posts", null, {
					hk: "2zfgXv"
				})));
			t.a = e => a.a.createElement(a.a.Fragment, null, e.subreddit && a.a.createElement(y.a, {
				subredditId: e.subreddit.id
			}), a.a.createElement("div", {
				className: Object(g.a)(h.a.Component, h.a.EmptyHomepage)
			}, a.a.createElement(w, {
				isLoading: !1,
				layout: u.g.Classic
			}), a.a.createElement("div", {
				className: h.a.MainContentWrapper
			}, e.subreddit ? a.a.createElement(v, e) : a.a.createElement(O, null))))
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
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
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
				v = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				O = s.n(v);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const k = "view--layout--FUE",
				x = "LayoutSwitch--picker",
				E = Object(c.a)(f.a),
				j = {
					[b.d.Card]: function(e) {
						return o.a.createElement(w.a, C({}, e, {
							name: "view_card"
						}))
					},
					[b.d.Classic]: function(e) {
						return o.a.createElement(w.a, C({}, e, {
							name: "view_classic"
						}))
					},
					[b.d.Compact]: function(e) {
						return o.a.createElement(w.a, C({}, e, {
							name: "view_compact"
						}))
					}
				},
				I = {
					[b.d.Card]: () => r.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[b.d.Classic]: () => r.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[b.d.Compact]: () => r.fbt._("compact", null, {
						hk: "1N7pcz"
					})
				},
				N = Object(h.t)(),
				P = Object(a.c)({
					dropdownIsOpen: Object(_.b)(x),
					postLayout: h.O,
					redditStyle: h.A
				}),
				L = Object(i.b)(P, e => ({
					onListingLayoutChange: (t, s) => e(Object(u.v)(t, s)),
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
							sendEvent: r,
							subredditId: n
						} = this.props;
						t ? t(e) : (s(e, n), r(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(S.screen)(t),
							subreddit: Object(S.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: s,
							onLayoutClick: r,
							postLayout: n
						} = this.props, i = s || b.e[n], a = e === i, c = j[e], l = I[e];
						return o.a.createElement(y.b, C({}, t, {
							className: Object(d.a)(O.a.LayoutItem, {
								[O.a.selected]: a,
								[O.a.DropdownButton]: null == t ? void 0 : t.showDropdownTriangle
							}),
							"data-layout": e,
							displayText: l(),
							iconWrapperClassName: O.a.LayoutItemIconWrapper,
							isSelected: a,
							noHover: a,
							onClick: a ? void 0 : () => this.changeLayout(e),
							textClassName: O.a.LayoutItemTextClassName
						}), o.a.createElement(c, {
							className: O.a.LayoutIcon,
							onClick: a ? void 0 : r,
							isFilled: a && (!t || !1 !== t.forceIconFill)
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
							tooltipId: x
						}), this.renderItem(b.d.Card), this.renderItem(b.d.Classic), this.renderItem(b.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: s,
						postLayout: r
					} = this.props, n = t || b.e[r];
					return o.a.createElement("div", {
						className: Object(d.a)(O.a.Container, e),
						id: k
					}, o.a.createElement("div", {
						className: O.a.DropdownContainer,
						onClick: s
					}, this.renderItem(n, {
						id: x,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), o.a.createElement(g.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = N(L(Object(m.c)(Object(l.a)(T))))
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/listingSort/index.ts"),
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
				S = s("./src/reddit/constants/listingSorts.ts"),
				_ = s("./src/reddit/contexts/Tooltip.ts"),
				v = s("./src/reddit/controls/Dropdown/index.tsx"),
				O = s("./src/reddit/controls/Dropdown/Row.tsx"),
				C = s("./src/reddit/helpers/path/index.ts"),
				k = s("./src/reddit/helpers/trackers/navigation.ts"),
				x = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				E = s("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				j = s("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				I = s("./src/reddit/selectors/tooltip.ts"),
				N = s("./src/reddit/selectors/user.ts"),
				P = s("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				L = s("./src/reddit/components/ListingSort/index.m.less"),
				T = s.n(L),
				D = s("./src/lib/lessComponent.tsx");

			function R() {
				return (R = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const U = "ListingSort--SortPicker",
				A = Object(w.a)(D.a.wrapped(v.a, "Dropdown", T.a)),
				B = D.a.wrapped(P.a, "ListingSortIcon", T.a),
				Y = (D.a.wrapped(x.b, "DropdownTriangle", T.a), D.a.div("Title", T.a)),
				H = D.a.wrapped(e => n.a.createElement(O.b, R({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", T.a),
				F = ({
					disabled: e,
					...t
				}) => n.a.createElement("div", R({}, t, {
					className: Object(i.a)(T.a.SortWrapper, t.className, {
						[T.a.isDisabled]: e
					})
				})),
				M = D.a.div("DropdownRowDisabled", T.a),
				V = Object(l.t)({
					isFrontpage: l.y,
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				K = Object(g.c)({
					isAwardListingExperimentEnabled: j.a,
					isBestSortPopularEnabled: E.a,
					user: N.j,
					dropdownIsOpen: (e, t) => Object(I.b)(t.dropdownId || U)(e),
					isPopularPage: l.C
				}),
				G = Object(o.b)(K, (e, {
					dropdownId: t,
					pageLayer: s
				}) => ({
					onOpenDropdown: () => e(Object(f.h)({
						tooltipId: t || U
					}))
				}));
			var W = D.a.wrapped(V(G(Object(d.c)(e => n.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && n.a.createElement(Y, null, y.fbt._("Sort", null, {
					hk: "2BfINq"
				})), n.a.createElement(F, {
					disabled: e.disabled
				}, e.children || n.a.createElement(H, {
					className: e.buttonClassName,
					displayText: Object(S.a)(e.sort),
					id: e.dropdownId || U,
					showDropdownTriangle: !0
				}, n.a.createElement(B, {
					sort: e.sort
				}))), n.a.createElement(_.a.Consumer, null, t => n.a.createElement(A, R({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || U
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? n.a.createElement(M, null, y.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, s, r, n) => {
					const o = [b.U.HOT, b.U.NEW, b.U.TOP, b.U.RISING];
					return (e && (s || r) || t && r) && o.unshift(b.U.BEST), t && n && o.splice(3, 0, b.U.AWARDED), o
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => n.a.createElement(O.b, {
					className: Object(i.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
					displayText: Object(S.a)(t),
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(k.a)(t))
					},
					href: e.isProfilePage ? Object(m.a)(e.baseUrl, {
						sort: t
					}) : Object(C.a)(e.baseUrl, `${t}/`),
					isSelected: e.sort === t,
					key: t
				}, n.a.createElement(B, {
					className: e.rowIconClassName,
					sort: t
				}))))))))), "ListingSort", T.a),
				q = s("./src/reddit/constants/parameters.ts");
			const z = e => {
					const t = Q[e];
					return t && t() || ""
				},
				Q = {
					[b.Yb.AllStates]: () => y.fbt._("All", null, {
						hk: "3mz2P1"
					}),
					[b.Yb.Alaska]: () => y.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[b.Yb.Alabama]: () => y.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[b.Yb.Arkansas]: () => y.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[b.Yb.Arizona]: () => y.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[b.Yb.California]: () => y.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[b.Yb.Colorado]: () => y.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[b.Yb.Connecticut]: () => y.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[b.Yb.DistrictOfColumbia]: () => y.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[b.Yb.Delaware]: () => y.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[b.Yb.Florida]: () => y.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[b.Yb.Georgia]: () => y.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[b.Yb.Hawaii]: () => y.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[b.Yb.Iowa]: () => y.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[b.Yb.Idaho]: () => y.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[b.Yb.Illinois]: () => y.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[b.Yb.Indiana]: () => y.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[b.Yb.Kansas]: () => y.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[b.Yb.Kentucky]: () => y.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[b.Yb.Louisiana]: () => y.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[b.Yb.Massachusetts]: () => y.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[b.Yb.Maryland]: () => y.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[b.Yb.Maine]: () => y.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[b.Yb.Michigan]: () => y.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[b.Yb.Minnesota]: () => y.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[b.Yb.Missouri]: () => y.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[b.Yb.Mississippi]: () => y.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[b.Yb.Montana]: () => y.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[b.Yb.NorthCarolina]: () => y.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[b.Yb.NorthDakota]: () => y.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[b.Yb.Nebraska]: () => y.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[b.Yb.NewHampshire]: () => y.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[b.Yb.NewJersey]: () => y.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[b.Yb.NewMexico]: () => y.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[b.Yb.Nevada]: () => y.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[b.Yb.NewYork]: () => y.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[b.Yb.Ohio]: () => y.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[b.Yb.Oklahoma]: () => y.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[b.Yb.Oregon]: () => y.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[b.Yb.Pennsylvania]: () => y.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[b.Yb.RhodeIsland]: () => y.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[b.Yb.SouthCarolina]: () => y.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[b.Yb.SouthDakota]: () => y.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[b.Yb.Tennessee]: () => y.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[b.Yb.Texas]: () => y.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[b.Yb.Utah]: () => y.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[b.Yb.Virginia]: () => y.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[b.Yb.Vermont]: () => y.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[b.Yb.Washington]: () => y.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[b.Yb.Wisconsin]: () => y.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[b.Yb.WestVirginia]: () => y.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[b.Yb.Wyoming]: () => y.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var Z = s("./src/reddit/components/StateSort/index.m.less"),
				J = s.n(Z);

			function X() {
				return (X = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const $ = D.a.wrapped(v.a, "_Dropdown", J.a),
				ee = Object(w.a)($),
				te = e => {
					return e.indexOf("_") > 0 && re(e) === b.y.UnitedStates
				},
				se = e => {
					if (te(e)) {
						return e.split("_")[1]
					}
					return b.Yb.AllStates
				},
				re = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				ne = e => {
					const t = re(e),
						s = se(e);
					return te(e) ? `${t}_${s}` : t
				},
				oe = Object(l.t)(),
				ie = Object(g.c)({
					dropdownIsOpen: Object(I.b)("StateSort--StateSortPicker")
				}),
				ae = Object(o.b)(ie, e => ({
					onOpenDropdown: () => e(Object(f.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, s) => {
						e(Object(h.b)(t)), e(Object(c.t)(b.y.UnitedStates + "_" + s))
					}
				}));
			var ce = D.a.wrapped(oe(ae(e => {
				const t = `${e.baseUrl}?${q.h}=${b.y.UnitedStates}`;
				return n.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, n.a.createElement(F, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, n.a.createElement(H, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : z(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), n.a.createElement(_.a.Consumer, null, s => n.a.createElement(ee, X({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, s, {
					renderContentsHidden: !0
				}), Object.keys(b.Yb).map(s => {
					const r = b.Yb[s];
					return n.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === b.Yb.AllStates ? t : `${t}_${e}`)(r), ne(r))
					}, n.a.createElement(O.b, {
						className: Object(i.a)(e.rowClassName, e.sort === r ? e.rowSelectedClassName : void 0),
						displayText: z(r),
						isSelected: e.sort === r
					}))
				}))))
			})), "Component", J.a);
			const de = {
				[b.y.Everywhere]: () => y.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[b.y.UnitedStates]: () => y.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[b.y.Argentina]: () => y.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[b.y.Australia]: () => y.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[b.y.Bulgaria]: () => y.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[b.y.Canada]: () => y.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[b.y.Chile]: () => y.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[b.y.Colombia]: () => y.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[b.y.Croatia]: () => y.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[b.y.CzechRepublic]: () => y.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[b.y.Finland]: () => y.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[b.y.France]: () => y.fbt._("France", null, {
					hk: "1fX2Y8"
				}),
				[b.y.Germany]: () => y.fbt._("Germany", null, {
					hk: "2mADuB"
				}),
				[b.y.Greece]: () => y.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[b.y.Hungary]: () => y.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[b.y.Iceland]: () => y.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[b.y.India]: () => y.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[b.y.Ireland]: () => y.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[b.y.Italy]: () => y.fbt._("Italy", null, {
					hk: "3EvGjk"
				}),
				[b.y.Japan]: () => y.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[b.y.Malaysia]: () => y.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[b.y.Mexico]: () => y.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[b.y.NewZealand]: () => y.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[b.y.Philippines]: () => y.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[b.y.Poland]: () => y.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[b.y.Portugal]: () => y.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[b.y.PuertoRico]: () => y.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[b.y.Romania]: () => y.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[b.y.Serbia]: () => y.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[b.y.Singapore]: () => y.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[b.y.Spain]: () => y.fbt._("Spain", null, {
					hk: "44RpFE"
				}),
				[b.y.Sweden]: () => y.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[b.y.Taiwan]: () => y.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[b.y.Thailand]: () => y.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[b.y.Turkey]: () => y.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[b.y.UnitedKingdom]: () => y.fbt._("United Kingdom", null, {
					hk: "rs1fl"
				})
			};
			var le = s("./src/reddit/components/CountrySort/index.m.less"),
				ue = s.n(le);

			function pe() {
				return (pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const me = "CountrySort--CountrySortPicker",
				be = Object(l.t)(),
				he = Object(g.c)({
					dropdownIsOpen: Object(I.b)(me)
				});
			var ge = be(Object(o.b)(he, e => ({
					onCloseDropdown: t => e(Object(f.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(f.g)({
						tooltipId: t
					})),
					onClickLink: (t, s) => {
						e(Object(h.b)(t)), e(Object(c.t)(s))
					}
				}))(e => {
					const t = re(e.sort),
						s = se(e.sort),
						r = `${e.baseUrl}?${q.h}=`;
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: Object(i.a)(ue.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(me) : e.onOpenDropdown(me)
					}, n.a.createElement(F, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, n.a.createElement(H, {
						className: e.buttonClassName,
						displayText: (() => t in de ? de[t]() : de[b.y.Everywhere]())(),
						id: me,
						showDropdownTriangle: !0
					})), n.a.createElement(_.a.Consumer, null, s => n.a.createElement(ee, pe({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: me
					}, s, {
						renderContentsHidden: !0
					}), Object.keys(b.y).map(s => {
						const o = b.y[s];
						return n.a.createElement("div", {
							key: o,
							onClick: () => e.onClickLink(`${r}${ne(o)}`, o)
						}, n.a.createElement(O.b, {
							className: Object(i.a)(e.rowClassName, t === o ? e.rowSelectedClassName : void 0),
							displayText: de[o](),
							isSelected: t === o
						}))
					})))), t === b.y.UnitedStates && n.a.createElement(ce, {
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
				fe = s("./node_modules/path-browserify/index.js"),
				ye = s.n(fe),
				we = s("./src/reddit/components/TimeSort/index.m.less"),
				Se = s.n(we);

			function _e() {
				return (_e = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const ve = Object(w.a)(v.a),
				Oe = (e, t, s) => {
					let r = e.url;
					return e.urlParams.sort || Object(l.G)(e) || (r = ye.a.join(r, t)), Object(m.a)(r, {
						[q.x]: s
					})
				},
				Ce = D.a.div("ListingSortContainer", Se.a),
				ke = Object(l.t)(),
				xe = Object(g.c)({
					dropdownIsOpen: Object(I.b)("TimeSort--SortPicker")
				});
			var Ee = ke(Object(o.b)(xe, e => ({
					onOpenDropdown: () => e(Object(f.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(d.c)(e => n.a.createElement(Ce, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, n.a.createElement(F, {
					className: e.wrapperClassName,
					disabled: !1
				}, n.a.createElement(H, {
					className: e.buttonClassName,
					displayText: Object(S.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), n.a.createElement(_.a.Consumer, null, t => n.a.createElement(ve, _e({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [b.bc.HOUR, b.bc.DAY, b.bc.WEEK, b.bc.MONTH, b.bc.YEAR, b.bc.ALL].map(t => n.a.createElement(O.b, {
					className: Object(i.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
					displayText: Object(S.b)(t),
					href: Oe(e.pageLayer, e.listingSort, t),
					isSelected: e.timeSort === t,
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(k.c)(t))
					}
				})))))))),
				je = s("./src/reddit/constants/listings.ts"),
				Ie = s("./src/reddit/controls/Button/index.tsx"),
				Ne = s("./src/reddit/icons/fonts/index.tsx"),
				Pe = s("./src/reddit/selectors/meta.ts"),
				Le = s("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				Te = s.n(Le);

			function De() {
				return (De = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Re = new Set([b.U.CONTROVERSIAL, b.U.TOP]),
				Ue = new Set([b.U.CONTROVERSIAL, b.U.RISING]),
				Ae = "ListingSort--Overflow",
				Be = Object(l.t)({
					isFrontpage: l.y,
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				Ye = Object(g.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, E.a, N.j, l.C, j.a, Pe.i, (e, t, s, r, n, o, i) => {
					if (e) return {
						isPopularPage: n,
						sortOptions: e,
						locale: i
					};
					const a = [b.U.HOT, b.U.NEW, b.U.TOP, b.U.RISING];
					return (t && (r || s) || n && s) && a.unshift(b.U.BEST), n && o && a.splice(3, 0, b.U.AWARDED), {
						isPopularPage: n,
						sortOptions: a,
						locale: i
					}
				});
			class He extends n.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(k.a)(e))
					}, this.getSortUrl = e => {
						const {
							baseUrl: t,
							isProfilePage: s
						} = this.props;
						return s ? Object(m.a)(t, {
							sort: e
						}) : Object(C.a)(t, `${e}/`)
					}, this.renderSortButton = e => {
						const {
							sort: t
						} = this.props;
						return n.a.createElement(Ie.q, {
							className: Object(i.a)(Te.a.SortLink, e === t && Te.a.selected),
							kind: Ie.a.InternalLink,
							priority: Ie.b.Plain,
							Icon: s => n.a.createElement(B, De({}, s, {
								className: Object(i.a)(Te.a.SortIcon, s.className),
								sort: e,
								isFilled: e === t
							})),
							text: Object(S.a)(e),
							onClick: () => this.changeSort(e),
							to: this.getSortUrl(e),
							key: e
						})
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: s,
							isPopularPage: r,
							sort: o
						} = this.props, i = r && !!s && e === b.U.HOT && o === b.U.HOT;
						return n.a.createElement(n.a.Fragment, {
							key: e
						}, this.renderSortButton(e), i && n.a.createElement(ge, {
							baseUrl: je.c[je.b.Popular],
							buttonClassName: Te.a.DropdownButton,
							className: Te.a.CountrySort,
							disabled: t,
							dropdownClassName: Te.a.Dropdown,
							rowClassName: Te.a.DropdownRow,
							rowSelectedClassName: Te.a.DropdownRowSelected,
							wrapperClassName: Te.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: s,
							stateSortClassName: Te.a.StateSort
						}))
					}
				}
				isLocaleDependentSortOverflow(e) {
					const {
						sort: t,
						isPopularPage: s,
						locale: r
					} = this.props;
					return !r.startsWith("en") && (s ? e === b.U.AWARDED && (t === b.U.HOT || t === b.U.TOP) : e === b.U.BEST && t === b.U.TOP)
				}
				isOverflowSort(e) {
					return Ue.has(e) || this.isLocaleDependentSortOverflow(e)
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: s,
						sort: r,
						sortOptions: o,
						timeSort: a
					} = this.props, c = !t && Re.has(r), d = Ue.has(r), l = o.filter(e => !this.isOverflowSort(e)), u = o.filter(e => this.isOverflowSort(e) && e !== r);
					return n.a.createElement(n.a.Fragment, null, n.a.createElement(W, De({}, this.props, {
						buttonClassName: Te.a.DropdownButton,
						className: Object(i.a)(Te.a.SortDropdown, e),
						rowClassName: Te.a.DropdownRow,
						rowIconClassName: Te.a.DropdownRowIcon,
						rowSelectedClassName: Te.a.DropdownRowSelected,
						showTitle: !1
					})), n.a.createElement("div", {
						className: Object(i.a)(Te.a.SortButtons, e)
					}, l.map(this.renderSort)), d && this.renderSort(r), c && n.a.createElement(Ee, {
						baseUrl: this.getSortUrl(r),
						buttonClassName: Te.a.DropdownButton,
						className: Te.a.TimeSort,
						dropdownClassName: Te.a.Dropdown,
						listingSort: r,
						onChange: s,
						rowClassName: Te.a.DropdownRow,
						rowSelectedClassName: Te.a.DropdownRowSelected,
						timeSort: a || b.cc,
						wrapperClassName: Te.a.DropdownSortWrapper
					}), u.length > 0 && n.a.createElement(W, De({}, this.props, {
						className: Object(i.a)(Te.a.SortOverflow, e),
						dropdownClassName: Te.a.Dropdown,
						dropdownId: Ae,
						rowClassName: Te.a.DropdownRow,
						rowIconClassName: Te.a.DropdownRowIcon,
						rowSelectedClassName: Te.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: u
					}), n.a.createElement("button", {
						className: Te.a.SortOverflowButton,
						id: Ae
					}, n.a.createElement(Ne.a, {
						name: "overflow_horizontal"
					}))))
				}
			}
			var Fe = Be(Object(o.b)(Ye)(Object(d.c)(He))),
				Me = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				Ve = s.n(Me);
			const Ke = Object(l.t)({
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				Ge = Object(o.b)(null, (e, {
					subredditId: t
				}) => ({
					updateSortPreference: (s, r) => {
						if (t) {
							const n = Object(a.c)({
								sort: s,
								timeSort: r
							});
							e(Object(c.G)(t, n))
						}
					}
				}));
			class We extends n.a.Component {
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
						disabled: r = !1,
						isProfilePage: o,
						sort: a,
						sortOptions: c,
						subredditId: d,
						timeSort: l,
						updateSortPreference: u
					} = this.props;
					return n.a.createElement("div", {
						className: Object(i.a)(Ve.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, n.a.createElement(Fe, {
						baseUrl: e,
						disabled: r,
						geopopularSort: s,
						onChange: u,
						onTimeSortChange: this.updateTimeSort,
						sort: a,
						sortOptions: c,
						timeSort: l
					}), !o && n.a.createElement(p.a, {
						className: Ve.a.LayoutSwitch,
						subredditId: d
					}))
				}
			}
			t.a = Ke(Ge(Object(d.c)(We)))
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/components/PostList/index.tsx"),
				n = s("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(n.a)(r.a)
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/controls/Dropdown/index.m.less"),
				d = s.n(c);
			const l = {
				[i.U.BEST]: "best",
				[i.U.HOT]: "hot",
				[i.U.NEW]: "new",
				[i.U.CONTROVERSIAL]: "controversial",
				[i.U.TOP]: "top",
				[i.U.RISING]: "rising",
				[i.U.AWARDED]: "award"
			};

			function u({
				className: e,
				isFilled: t,
				sort: s
			}) {
				return l[s] ? n.a.createElement(a.a, {
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
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return X
			})), s.d(t, "a", (function() {
				return ee
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/history/esm/history.js"),
				n = s("./node_modules/lodash/debounce.js"),
				o = s.n(n),
				i = s("./node_modules/lodash/last.js"),
				a = s.n(i),
				c = s("./node_modules/lodash/throttle.js"),
				d = s.n(c),
				l = s("./node_modules/react/index.js"),
				u = s.n(l),
				p = s("./node_modules/shallowequal/index.js"),
				m = s.n(p),
				b = s("./src/lib/addQueryParams/index.ts"),
				h = s("./src/lib/ads/index.ts"),
				g = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/constants/index.ts"),
				y = s("./src/lib/fastdom/index.ts"),
				w = s("./src/lib/lessComponent.tsx"),
				S = s("./src/lib/opener/index.ts"),
				_ = s("./src/lib/sentry/index.ts"),
				v = s("./src/reddit/components/PostList/LoadMore.tsx"),
				O = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				C = s("./src/reddit/components/Scroller/Simple.tsx"),
				k = s("./src/reddit/constants/adEvents.ts"),
				x = s("./src/reddit/constants/componentSizes.ts"),
				E = s("./src/reddit/constants/postLayout.ts"),
				j = s("./src/reddit/controls/InternalLink/index.tsx"),
				I = s("./src/reddit/controls/OutboundLink/index.tsx"),
				N = s("./src/reddit/helpers/getClickInfo.ts"),
				P = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				L = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				T = s("./src/reddit/models/Media/index.ts"),
				D = s("./src/reddit/helpers/brandSafety/index.ts"),
				R = s("./src/reddit/helpers/trackers/ads.ts"),
				U = s("./src/reddit/helpers/trackers/post.ts"),
				A = s("./src/lib/LRUCache/index.ts"),
				B = s("./src/telemetry/index.ts"),
				Y = s("./src/telemetry/models/Timer.ts"),
				H = s("./src/reddit/components/PostList/index.m.less"),
				F = s.n(H);
			const {
				fbt: M
			} = s("./node_modules/fbt/lib/FbtPublic.js"), V = 500, K = new A.a(V), G = new A.a(V), W = new A.a(V), q = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5
			}, z = w.a.div("SeeMore", F.a), Q = w.a.wrapped(L.a, "ArrowRight", F.a), Z = (e, t, s, r, n, o, i, a, c) => {
				const d = `entered-${e}-${t}-${s?`last-${r}-${n}`:""}-${o}`;
				let l = K.get(d);
				return void 0 === l && (l = () => {
					s && i.onBottomViewed(r, n), i.trackOnPostEnteredViewport(e, t, a, c)
				}, K.set(d, l)), l
			}, J = (e, t, s, r, n) => {
				const o = `left-${e}-${t}`;
				let i = G.get(o);
				return void 0 === i && (i = o => {
					s.trackOnPostExitedViewport(e, t, o, r, n)
				}, G.set(o, i)), i
			}, X = (e, t, s = !1) => {
				const r = `click-${e}`;
				let n = W.get(r);
				return void 0 === n && (n = (e, r, n, o, i) => {
					if (r.isSponsored) {
						t.fireAdPixelsOfType(r, k.a.Click);
						const {
							source: e
						} = Object(h.t)(r, o);
						if (e && e.outboundUrl) {
							let t = e.outboundUrl;
							n && (t = Object(I.a)(r.id, n, t).url), Object(R.a)(r, i), Object(S.d)(t, S.c.BLANK)
						}
					} else t.openPost({
						postOrComment: r,
						clickInfo: Object(N.a)(e),
						isFrontpage: s
					})
				}, W.set(r, n)), n
			}, $ = (e, t) => {
				const s = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					s.splice(e, 0, t[e])
				}), s
			};
			class ee extends u.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new A.a(V), this.surveyTriggerCounted = !1, this.timerId = void 0, this.viewportHeight = null, this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						this.dispatchBrandSafety(e), this.props.isNpsScrollSurveyEnabled && this.props.surveyTriggerScrollCounted && !this.surveyTriggerCounted && this.surveyTriggerListener(e)
					}, this.surveyTriggerListener = d()(({
						primaryChild: e
					}) => {
						this.viewportHeight && e && e.rectangle && e.rectangle.top > this.viewportHeight && (this.props.surveyTriggerScrollCounted && this.props.surveyTriggerScrollCounted(), this.surveyTriggerCounted = !0)
					}, 500), this.dispatchBrandSafety = o()(({
						getVisibleItemsInViewport: e
					}) => {
						const {
							postsById: t,
							subredditsById: s
						} = this.props, r = e(), n = [];
						r.forEach(e => n.push(e.id));
						const o = n.map(e => t[e]).filter(Boolean),
							i = o.map(e => s[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(D.a)(o, i))
					}, f.d, {
						leading: !0
					})
				}
				UNSAFE_componentWillMount() {
					void 0 !== this.timerId && B.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = B.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.viewportHeight = window.innerHeight, void 0 !== this.timerId) {
						const e = B.c.end(this.timerId);
						setTimeout(() => Object(B.b)(f.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					void 0 !== this.timerId && B.c.cancel(this.timerId), e.postIds.length && (this.timerId = B.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					var t, s;
					if (y.a.read(() => this.checkAndSendScreenview()), this.timerId && B.c.has(this.timerId)) {
						const e = B.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(B.b)(f.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
					this.props.listingKey !== e.listingKey && (this.surveyTriggerCounted = !1);
					const r = null === (t = this.props.postIds) || void 0 === t ? void 0 : t[0];
					r && r !== (null === (s = e.postIds) || void 0 === s ? void 0 : s[0]) && this.props.onFirstPostChanged(r)
				}
				componentWillUnmount() {
					this.timerId && B.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && a()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return B.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const r = B.c.end(e);
					setTimeout(() => {
						s(t(r, Y.TimerType.InApp))
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
						...r
					} = this.props, {
						postsById: n,
						triggerNewPostPill: o,
						...i
					} = e, a = Object.keys(r), c = Object.keys(i);
					if (c.length !== a.length) return !0;
					if (c.some(e => {
							let t = !1;
							return t = "function" == typeof r[e] || "object" == typeof r[e] ? !m()(r[e], i[e]) : r[e] !== i[e]
						})) return !0;
					if (t === n) return !1;
					if (s !== o) return !0;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: s
						} = this.props;
						return this.props.postIds.some((r, o) => {
							const i = 0 === o;
							return s({
								isFirstPost: i,
								layout: e,
								post: t[r]
							}) !== s({
								isFirstPost: i,
								layout: e,
								post: n[r]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, r) {
					const {
						currentProfileName: n,
						hostPostData: o,
						isCommentPermalink: i,
						isCommentsPage: a,
						isFrontpage: c,
						isProfilePostListing: d,
						isTopicPage: l,
						listingBelowVariant: p,
						listingKey: m,
						listingName: b,
						pageLayer: h,
						pageReferrer: g,
						redditStyle: y,
						shouldHideFlair: w,
						triggerNewPostPill: S,
						postIds: v
					} = this.props, O = 0 === t, C = `post-${r}-${e}-${t}-${s?"last-index":""}-${b}-${m}-${g}`;
					let k;
					if (void 0 === (k = this.scrollChildCache.get(C))) {
						const {
							inSubredditOrProfile: x,
							postsById: j
						} = this.props, I = j[e], N = I.crosspostRootId && j[I.crosspostRootId] ? j[I.crosspostRootId] : I;
						I.crosspostRootId && !j[I.crosspostRootId] && _.c.withScope(e => {
							e.setExtra("errorType", f.r.API), e.setExtra("description", `Post ${I.id} is crosspost of ${I.crosspostRootId}, but ` + `${I.crosspostRootId} details are missing in the state`), _.c.captureMessage("Crosspost parent details are missing")
						});
						const L = this.props.postComponentForLayout({
							isCrosspost: !!I.crosspostRootId,
							isFirstPost: O,
							layout: r,
							post: N
						});
						let D = `post-list-item-[layout: ${r}]-[postId: ${e}]`;
						this.props.listingBelowVariant && m && (D += `--${m}`);
						const R = Z(e, r, s, m, b, g, this.props, t, this.props.hostPostData),
							A = J(e, r, this.props, t, h),
							B = X(e, this.props, c),
							Y = N.media && N.media.type === T.o.EMBED ? N.media.provider : null;
						k = {
							estHeight: Object(P.c)(I, r),
							id: e,
							isFocusable: !(!N.media || !(r === E.g.Large || r === E.g.Classic && Object(T.G)(N.media))) && (T.d.has(N.media.type) && (!Y || !T.s.has(Y)) && !N.isSpoiler && !N.isNSFW),
							trackOnEnteredViewport: R,
							trackOnExitedViewport: A,
							render: ({
								className: r,
								height: g,
								width: f,
								remeasure: _,
								setScrollerChildRef: C,
								shouldLoadInitially: k
							}) => u.a.createElement(L, {
								className: r,
								currentProfileName: n,
								key: D,
								availableWidth: f,
								eventFactory: (e, t) => Object(U.h)(e, t, "post", m, o, p, void 0),
								first: O,
								forceLoadMedia: k,
								hostPostData: o,
								inSubredditOrProfile: x,
								isCommentPermalink: i,
								isCommentsPage: a,
								isFrontpage: c,
								isProfilePostListing: d,
								isTopicPage: l,
								listingBelowVariant: p,
								listingKey: m,
								listingName: b,
								pageLayer: h,
								last: s,
								onClickPost: B,
								onSizeChanged: _,
								postId: e,
								postIds: v,
								redditStyle: y,
								sendEvent: this.props.sendEvent,
								scrollerItemRef: C,
								shouldHideFlair: w,
								onceInViewport: () => {
									null == S || S(t)
								}
							})
						}, this.scrollChildCache.set(C, k)
					}
					return k
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return u.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: s,
						layout: r,
						onTryAgain: n,
						postListPlaceholderComponent: o
					} = this.props;
					if (s) return;
					const i = o;
					return u.a.createElement("div", {
						className: F.a.placeholder
					}, u.a.createElement(i, {
						className: t,
						isLoading: !e,
						layout: r
					}), !!e && u.a.createElement(O.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: r,
						loadMoreClassName: n,
						onLoadMore: o
					} = this.props;
					if (!s) return u.a.createElement("div", {
						className: F.a.placeholder
					}, u.a.createElement(v.a, {
						className: n,
						isLoading: !!t,
						layout: r,
						countOverride: q[r]
					}), !!e && u.a.createElement(O.a, {
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
						isTruncated: o,
						layout: i,
						location: a,
						loadMore: c,
						postIds: d,
						onLoadMore: p
					} = this.props;
					let m = d.map((e, t, s) => {
						const r = t === d.length - 1;
						return this.scrollChildForPost(e, t, r, i)
					});
					n && (m = $(m, n));
					const h = this.props.measureScrollFPS ? `post-listings-${i}` : void 0,
						y = a ? Object(r.e)(a) : null,
						w = y || o;
					return u.a.createElement(l.Fragment, null, u.a.createElement(C.b, {
						innerRef: this.updateScrollerRef,
						className: w ? F.a.truncatedPostList : Object(g.a)(F.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: c && c.token ? c.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: p,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: h,
						viewportTopPadding: x.f
					}, m), y && u.a.createElement(z, {
						className: F.a.seeMoreButton
					}, u.a.createElement(j.a, {
						className: F.a.seeMorePostsText,
						to: Object(b.a)(y, {
							type: f.Vb.Posts
						})
					}, M._("See More Posts", null, {
						hk: "3o0CqI"
					}), u.a.createElement(Q, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			ee.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: u.a.Fragment
			}
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/SidebarContainer/index.m.less"),
				o = s.n(n);
			t.a = r.a.div("container", o.a)
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
				return O
			})), s.d(t, "d", (function() {
				return k
			})), s.d(t, "b", (function() {
				return E
			}));
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/index.ts"),
				c = s("./src/reddit/actions/gold/tooltips.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				u = s("./src/reddit/actions/survey/index.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = s("./src/reddit/components/PostList/Placeholder.tsx"),
				g = s("./src/reddit/featureFlags/index.ts"),
				f = s("./src/reddit/selectors/experiments/survey.ts"),
				y = s("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				w = s("./src/reddit/selectors/listings.ts"),
				S = s("./src/reddit/selectors/posts.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				v = s("./src/reddit/selectors/tracking.ts");

			function O() {
				return Object(m.t)({
					currentProfileName: m.h,
					isCommentPermalink: m.v,
					isCommentsPage: m.w,
					isFrontpage: m.y,
					isPredictionsPage: m.L,
					isProfilePostListing: m.I,
					isTopicPage: m.N,
					pageLayer: e => e
				})
			}
			const C = O(),
				k = {
					apiError: w.c,
					apiPending: w.d,
					measureScrollFPS: g.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(m.O)(e, t),
					loadMore: (e, t) => t.isPredictionsPage ? null : Object(w.g)(e, t),
					postsById: (e, t) => {
						if (t.isPredictionsPage) {
							const s = Object(_.D)(e, t.listingName);
							return Object(y.k)(e, {
								subredditId: s
							})
						}
						return Object(S.P)(e, {
							...t
						})
					},
					postIds: Object(o.a)((e, {
						listingKey: t,
						listingName: s,
						isPredictionsPage: r,
						inSubredditOrProfile: n
					}) => {
						if (r) {
							const t = Object(_.D)(e, s);
							return Object(y.l)(e, {
								subredditId: t
							})
						}
						return Object(S.C)(e, t, s, n)
					}),
					subredditsById: _.Z,
					viewportDataLoaded: v.a,
					pageReferrer: m.R,
					postListPlaceholderComponent: () => h.a,
					isNpsScrollSurveyEnabled: f.d
				},
				x = Object(n.c)(k),
				E = e => ({
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
						})), e(d.M(t))
					},
					fireAdPixelsOfType: (t, s) => {
						e(d.z(t, s))
					},
					trackOnPostEnteredViewport: (t, s, r, n) => {
						e(d.P(t, r, n))
					},
					trackOnPostExitedViewport: (t, s, r, n, o) => {
						e(d.Q(t, r, n, o))
					},
					surveyTriggerScrollCounted: () => e(Object(u.h)())
				}),
				j = e => Object(b.b)({
					...e
				}),
				I = Object(r.b)(x, E, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: j
				}));
			t.a = e => Object(p.c)(C(I(e)))
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts");
			const o = {
					[n.U.BEST]: () => r.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[n.U.HOT]: () => r.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[n.U.NEW]: () => r.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[n.U.CONTROVERSIAL]: () => r.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[n.U.RISING]: () => r.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[n.U.TOP]: () => r.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[n.U.AWARDED]: () => r.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				i = e => {
					const t = o[e];
					return t && t() || ""
				},
				a = {
					[n.bc.HOUR]: () => r.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[n.bc.DAY]: () => r.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[n.bc.WEEK]: () => r.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[n.bc.MONTH]: () => r.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[n.bc.YEAR]: () => r.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[n.bc.ALL]: () => r.fbt._("All Time", null, {
						hk: "3qt6Ct"
					})
				},
				c = e => {
					const t = a[e];
					return t && t() || ""
				}
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = n.a.createContext({})
		},
		"./src/reddit/helpers/trackers/contentTag.ts": function(e, t, s) {
			"use strict";
			s.d(t, "h", (function() {
				return r
			})), s.d(t, "g", (function() {
				return n
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "l", (function() {
				return i
			})), s.d(t, "e", (function() {
				return a
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
			const r = () => () => ({
					source: "content_tag",
					action: "view",
					noun: "verify_topics_module"
				}),
				n = () => () => ({
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
				i = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "start",
					actionInfo: {
						pageType: "survey_intro"
					}
				}),
				a = () => () => ({
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
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", o({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/pages/Subreddit/SurveyUnit.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/CommunityTopicSurvey/async.tsx"),
				c = s("./src/reddit/components/ContentSurvey/ContentRatingSurveyBanner.tsx"),
				d = s("./src/reddit/constants/postLayout.ts");
			const l = Object(r.a)({
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

			function u({
				postLayout: e,
				subredditId: t
			}) {
				var s;
				const r = Object(i.e)(e => e.subreddits.survey[t]),
					n = Object(i.e)(e => e.subreddits.progressModule[t]);
				return (null === (s = null == n ? void 0 : n.cards) || void 0 === s ? void 0 : s.length) > 0 ? o.a.createElement(l, {
					closeModuleOnMount: !!e && e !== d.g.Large,
					subredditId: t,
					progressModule: n
				}) : e !== d.g.Large ? null : (null == r ? void 0 : r.isEligible) && !(null == r ? void 0 : r.response) ? o.a.createElement(c.a, {
					subredditId: t,
					survey: r
				}) : o.a.createElement(a.a, {
					subredditId: t
				})
			}
		},
		"./src/reddit/selectors/experiments/econLeaderboards.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			}));
			var r = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/user.ts");
			const i = e => {
					const t = Object(n.c)(e, {
						experimentEligibilitySelector: o.K,
						experimentName: r.Kb
					});
					return !(!t || Object(r.Ud)(t))
				},
				a = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: o.K,
						experimentName: r.Kb
					}) === r.Zb.ListingEnabled
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
			var r = s("./src/lib/objectSelector/index.ts"),
				n = s("./src/reddit/featureFlags/index.ts"),
				o = s("./src/reddit/selectors/posts.ts"),
				i = s("./src/reddit/selectors/subreddit.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const c = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(i.S)(e, {
							subredditId: s
						});
						return t && t.displayText || ""
					}
					return ""
				},
				d = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				l = e => e.focusedVerticals.components.dismissed,
				u = [],
				p = Object(r.a)((e, t) => {
					const s = m(e, t);
					if (!s) return u;
					const r = Object(i.W)(e, {
						subredditName: s.name
					});
					return r && r.postIds && r.postIds.length ? r.postIds : u
				}),
				m = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(i.S)(e, {
						subredditId: s
					}) : null
				},
				b = (e, t, s, r, n) => {
					const i = n.find(e => e <= t) || -1,
						a = n.find(e => e > t) || 1 / 0;
					return t !== a && t !== i && (!(i + s > t) && (!(t + s > a) && !((e, t, s) => {
						const r = s[t - 1],
							n = s[t],
							i = n && Object(o.F)(e, {
								postId: r
							}) || null,
							a = n && Object(o.F)(e, {
								postId: n
							}) || null;
						return i && i.isSponsored || a && a.isSponsored
					})(e, t, r)))
				},
				h = [3],
				g = Object(r.a)((e, {
					existingDUPositions: t,
					listingProps: s
				}) => {
					const r = t.slice().sort();
					let n = -1;
					const i = Object(o.y)(e, {
							listingKey: s.listingKey
						}),
						a = [];
					return h.forEach(t => {
						let s = n + t;
						if (!(s >= i.length)) {
							for (; s < i.length && !b(e, s, t, i, r);) s += 1;
							s < i.length && (a.push(s), n = s)
						}
					}), a
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
					const t = Object(a.J)(e),
						s = n.d.geoSubredditRecommendationDULoggedIn(e),
						r = n.d.geoSubredditRecommendationDULoggedOut(e);
					return t && s || !t && r
				}
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"0c0a6fd04a2c"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Frontpage~ModListing.a88188c9ba63d750bccb.js.map