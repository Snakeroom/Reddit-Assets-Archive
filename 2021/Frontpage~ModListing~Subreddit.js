// https://www.redditstatic.com/desktop2x/Frontpage~ModListing~Subreddit.51d984c9a5c29d6f0ebc.js
// Retrieved at 3/30/2021, 4:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Frontpage~ModListing~Subreddit"], {
		"./src/graphql/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"34f3ef97014d"}')
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return S
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "b", (function() {
				return k
			}));
			var n, r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/performanceTimings/index.tsx"),
				i = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/graphql/operations/SubredditGeoRecommendationViaFocusVertical.json");
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
			const h = Object(r.a)(i.g),
				g = Object(r.a)(i.e),
				f = Object(r.a)(i.h),
				w = Object(r.a)(i.c),
				S = Object(r.a)(i.f),
				y = Object(r.a)(i.j),
				v = Object(r.a)(i.i),
				x = () => async (e, t, {
					gqlContext: s
				}) => {
					const r = t(),
						o = Object(p.e)(r),
						i = Object(p.d)(r),
						d = Object(b.I)(r);
					if (o || !i) return;
					e(f());
					let m = !1;
					try {
						const t = d ? n.LoggedInGeo : n.LoggedOutGeo,
							r = await ((e, t, s) => Object(a.a)(e, {
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
							if (_(t)) {
								if (C(t)) {
									e(w({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), m = !0
								} else if (O(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: n,
											interactedSubreddit: r,
											category: o
										} = s.focusRecommendations[0],
										i = [n, r],
										a = Object(u.d)(i),
										c = Object(l.b)(i),
										d = Object(u.c)(n),
										p = {
											recommendedSubredditIds: [n.id],
											interactedSubredditIds: [r.id],
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
					} catch (S) {
						m = !1
					}
					m || e(g({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, _ = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, C = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				}, O = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						n = t && t.type;
					return !!(s && !C(e) && n === d.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				}, k = () => async (e, t, s) => {
					var n, r;
					const i = t(),
						a = Object(p.g)(i);
					if (Object(p.f)(i) || null === a || "client" === a) {
						const s = null === (r = null === (n = Object(m.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							a = Object(b.J)(i);
						return Object(o.i)(() => e(x()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(S({
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
				return h
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/config.ts"),
				i = s("./src/reddit/components/ContentSurvey/index.m.less"),
				a = s.n(i),
				c = s("./src/reddit/helpers/trackers/contentTag.ts"),
				d = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				u = s("./src/reddit/icons/fonts/index.tsx"),
				p = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				m = s("./src/reddit/components/ContentSurvey/SurveyModal.tsx");
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function h({
				survey: e,
				subredditId: t
			}) {
				const [s, i] = Object(n.useState)(!1), h = Object(l.a)();
				Object(n.useEffect)(() => h(Object(c.h)()), [h]);
				const g = Object(d.a)();
				return r.a.createElement("div", {
					className: a.a.feedBanner,
					onClick: function() {
						i(!0), h(Object(c.g)())
					}
				}, r.a.createElement("div", {
					className: a.a.notepadSnoo
				}, r.a.createElement("img", {
					src: `${o.a.assetPath}/img/snoovatar-notepad.png`
				})), r.a.createElement("div", {
					className: a.a.bannerCopy
				}, r.a.createElement("p", {
					className: a.a.copy
				}, b._("Set up this community’s content tag", null, {
					hk: "3ssqQf"
				})), r.a.createElement("p", {
					className: a.a.meta
				}, b._("Take a quick survey to help people know what to expect when they visit this community", null, {
					hk: "3sUbRf"
				}))), g ? r.a.createElement(u.a, {
					name: "caret_right",
					className: a.a.chevron
				}) : r.a.createElement(p.a, {
					className: a.a.chevron
				}), s && r.a.createElement(m.a, {
					withOverlay: !0,
					subredditId: t,
					survey: e,
					onClose: () => i(!1)
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
				i = Object(r.a)(o);
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/upperFirst.js"),
				o = s.n(r),
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
				w = s("./src/reddit/pages/Subreddit/SurveyUnit.tsx");
			const S = f.a.wrapped(m.a, "BackgroundPlaceholder", h.a),
				y = f.a.wrapped(p.k, "SubmitLink", h.a),
				v = e => {
					switch (e) {
						case d.P.RISING:
							return n.fbt._("Create a new post and take all the glory", null, {
								hk: "1NhXUe"
							});
						case d.P.TOP:
						case d.P.CONTROVERSIAL:
							return null;
						default:
							return n.fbt._("Be the first to till this fertile land.", null, {
								hk: "VYQD0"
							})
					}
				},
				x = ({
					listingName: e,
					sort: t
				}) => {
					const s = v(t);
					return a.a.createElement("div", {
						className: h.a.MainContent
					}, a.a.createElement("div", {
						className: h.a.PrimaryText
					}, (e => {
						switch (e) {
							case d.P.RISING:
								return n.fbt._("Looks like nothing is rising fast enough in this subreddit", null, {
									hk: "kJ3Te"
								});
							case d.P.TOP:
							case d.P.CONTROVERSIAL:
								return n.fbt._("No posts were found using the {listing sort option} sort. Try changing the sort.", [n.fbt._param("listing sort option", o()(e))], {
									hk: "48BeCW"
								});
							default:
								return n.fbt._("There are no posts in this subreddit", null, {
									hk: "5mVkT"
								})
						}
					})(t)), e && !Object(l.a)(e) && !!s && a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: h.a.SecondaryText
					}, v(t)), a.a.createElement(y, {
						to: `/r/${e}/submit`
					}, n.fbt._("Add a post", null, {
						hk: "1vnCSW"
					}))))
				},
				_ = () => a.a.createElement("div", {
					className: h.a.MainContent
				}, a.a.createElement("img", {
					className: h.a.SnooImg,
					src: `${c.a.assetPath}/img/snoo_discovery@1x.png`
				}), a.a.createElement("div", {
					className: h.a.PrimaryText
				}, n.fbt._("Reddit gets better when you join communities, so find some that you’ll love!", null, {
					hk: "7B6oq"
				})), a.a.createElement(y, {
					to: "/r/popular"
				}, n.fbt._("Browse Popular Posts", null, {
					hk: "2zfgXv"
				})));
			t.a = e => a.a.createElement(a.a.Fragment, null, e.subreddit && a.a.createElement(w.a, {
				subredditId: e.subreddit.id
			}), a.a.createElement("div", {
				className: Object(g.a)(h.a.Component, h.a.EmptyHomepage)
			}, a.a.createElement(S, {
				isLoading: !1,
				layout: u.g.Classic
			}), a.a.createElement("div", {
				className: h.a.MainContentWrapper
			}, e.subreddit ? a.a.createElement(x, e) : a.a.createElement(_, null))))
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
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
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
				w = s("./src/reddit/controls/Dropdown/Row.tsx"),
				S = s("./src/reddit/icons/fonts/index.tsx"),
				y = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				v = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				x = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				_ = s("./src/reddit/selectors/experiments/coreStyles.ts"),
				C = s("./src/reddit/selectors/telemetry.ts"),
				O = s("./src/reddit/selectors/tooltip.ts"),
				k = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				E = s.n(k);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const I = "view--layout--FUE",
				N = "LayoutSwitch--picker",
				j = Object(c.a)(f.a),
				L = {
					[b.d.Card]: x.a,
					[b.d.Classic]: y.a,
					[b.d.Compact]: v.a
				},
				T = {
					[b.d.Card]: function(e) {
						return o.a.createElement(S.a, P({}, e, {
							name: "view_card"
						}))
					},
					[b.d.Classic]: function(e) {
						return o.a.createElement(S.a, P({}, e, {
							name: "view_classic"
						}))
					},
					[b.d.Compact]: function(e) {
						return o.a.createElement(S.a, P({}, e, {
							name: "view_compact"
						}))
					}
				},
				D = {
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
				R = Object(h.t)(),
				A = Object(a.c)({
					dropdownIsOpen: Object(O.b)(N),
					isInIcons2020: _.a,
					postLayout: h.O,
					redditStyle: h.A
				}),
				B = Object(i.b)(A, e => ({
					onListingLayoutChange: (t, s) => e(Object(u.x)(t, s)),
					openDropdown: () => e(Object(p.h)({
						tooltipId: N
					}))
				}));
			class M extends o.a.Component {
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
							screen: Object(C.screen)(t),
							subreddit: Object(C.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							isInIcons2020: s,
							layout: n,
							onLayoutClick: r,
							postLayout: i
						} = this.props, a = n || b.e[i], c = e === a, l = s ? T[e] : L[e], u = D[e];
						return o.a.createElement(w.b, P({}, t, {
							className: Object(d.a)(E.a.LayoutItem, {
								[E.a.selected]: c
							}),
							"data-layout": e,
							displayText: u(),
							iconWrapperClassName: E.a.LayoutItemIconWrapper,
							isSelected: c,
							noHover: c,
							onClick: c ? void 0 : () => this.changeLayout(e),
							textClassName: E.a.LayoutItemTextClassName
						}), o.a.createElement(l, {
							className: E.a.LayoutIcon,
							onClick: c ? void 0 : r,
							isFilled: s && c && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return o.a.createElement(j, P({}, e, {
							className: E.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: E.a.DropdownRow,
							rowIconClassName: E.a.DropdownRowIcon,
							rowSelectedClassName: E.a.DropdownRowSelected,
							tooltipId: N
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
						className: Object(d.a)(E.a.Container, e),
						id: I
					}, o.a.createElement("div", {
						className: E.a.DropdownContainer,
						onClick: s
					}, this.renderItem(r, {
						id: N,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), o.a.createElement(g.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = R(B(Object(m.c)(Object(l.a)(M))))
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
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/listingSort/index.ts"),
				c = s("./src/reddit/actions/preferences.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				p = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				m = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/reselect/es/index.js")),
				b = s("./src/lib/addQueryParams/index.ts"),
				h = s("./src/lib/constants/index.ts"),
				g = s("./node_modules/react-router-redux/es/index.js"),
				f = s("./src/reddit/actions/tooltip.ts"),
				w = s("./node_modules/fbt/lib/FbtPublic.js"),
				S = s("./src/higherOrderComponents/asTooltip.tsx"),
				y = s("./src/reddit/constants/listingSorts.ts"),
				v = s("./src/reddit/contexts/Tooltip.ts"),
				x = s("./src/reddit/controls/Dropdown/index.tsx"),
				_ = s("./src/reddit/controls/Dropdown/Row.tsx"),
				C = s("./src/reddit/helpers/path/index.ts"),
				O = s("./src/reddit/helpers/trackers/navigation.ts"),
				k = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				E = s("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				P = s("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				I = s("./src/reddit/selectors/tooltip.ts"),
				N = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				L = s("./src/reddit/components/ListingSort/index.m.less"),
				T = s.n(L),
				D = s("./src/lib/lessComponent.tsx");

			function R() {
				return (R = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const A = "ListingSort--SortPicker",
				B = Object(S.a)(D.a.wrapped(x.a, "Dropdown", T.a)),
				M = D.a.wrapped(j.a, "ListingSortIcon", T.a),
				V = (D.a.wrapped(k.b, "DropdownTriangle", T.a), D.a.div("Title", T.a)),
				F = D.a.wrapped(e => r.a.createElement(_.b, R({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", T.a),
				H = ({
					disabled: e,
					...t
				}) => r.a.createElement("div", R({}, t, {
					className: Object(i.a)(T.a.SortWrapper, t.className, {
						[T.a.isDisabled]: e
					})
				})),
				U = D.a.div("DropdownRowDisabled", T.a),
				K = Object(l.t)({
					isFrontpage: l.y,
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				G = Object(m.c)({
					isAwardListingExperimentEnabled: P.a,
					isBestSortPopularEnabled: E.a,
					user: N.i,
					dropdownIsOpen: (e, t) => Object(I.b)(t.dropdownId || A)(e),
					isPopularPage: l.C
				}),
				W = Object(o.b)(G, (e, {
					dropdownId: t,
					pageLayer: s
				}) => ({
					onOpenDropdown: () => e(Object(f.h)({
						tooltipId: t || A
					}))
				}));
			var z = D.a.wrapped(K(W(Object(d.c)(e => r.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && r.a.createElement(V, null, w.fbt._("Sort", null, {
					hk: "2BfINq"
				})), r.a.createElement(H, {
					disabled: e.disabled
				}, e.children || r.a.createElement(F, {
					className: e.buttonClassName,
					displayText: Object(y.a)(e.sort),
					id: e.dropdownId || A,
					showDropdownTriangle: !0
				}, r.a.createElement(M, {
					sort: e.sort
				}))), r.a.createElement(v.a.Consumer, null, t => r.a.createElement(B, R({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || A
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? r.a.createElement(U, null, w.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, s, n, r) => {
					const o = [h.P.HOT, h.P.NEW, h.P.TOP, h.P.RISING];
					return (e && (s || n) || t && n) && o.unshift(h.P.BEST), t && r && o.splice(3, 0, h.P.AWARDED), o
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => r.a.createElement(_.b, {
					className: Object(i.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
					displayText: Object(y.a)(t),
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(O.a)(t))
					},
					href: e.isProfilePage ? Object(b.a)(e.baseUrl, {
						sort: t
					}) : Object(C.a)(e.baseUrl, `${t}/`),
					isSelected: e.sort === t,
					key: t
				}, r.a.createElement(M, {
					className: e.rowIconClassName,
					sort: t
				}))))))))), "ListingSort", T.a),
				q = s("./src/reddit/constants/parameters.ts");
			const Z = e => {
					const t = Y[e];
					return t && t() || ""
				},
				Y = {
					[h.Sb.AllStates]: () => w.fbt._("All", null, {
						hk: "3mz2P1"
					}),
					[h.Sb.Alaska]: () => w.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[h.Sb.Alabama]: () => w.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[h.Sb.Arkansas]: () => w.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[h.Sb.Arizona]: () => w.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[h.Sb.California]: () => w.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[h.Sb.Colorado]: () => w.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[h.Sb.Connecticut]: () => w.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[h.Sb.DistrictOfColumbia]: () => w.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[h.Sb.Delaware]: () => w.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[h.Sb.Florida]: () => w.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[h.Sb.Georgia]: () => w.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[h.Sb.Hawaii]: () => w.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[h.Sb.Iowa]: () => w.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[h.Sb.Idaho]: () => w.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[h.Sb.Illinois]: () => w.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[h.Sb.Indiana]: () => w.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[h.Sb.Kansas]: () => w.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[h.Sb.Kentucky]: () => w.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[h.Sb.Louisiana]: () => w.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[h.Sb.Massachusetts]: () => w.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[h.Sb.Maryland]: () => w.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[h.Sb.Maine]: () => w.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[h.Sb.Michigan]: () => w.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[h.Sb.Minnesota]: () => w.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[h.Sb.Missouri]: () => w.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[h.Sb.Mississippi]: () => w.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[h.Sb.Montana]: () => w.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[h.Sb.NorthCarolina]: () => w.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[h.Sb.NorthDakota]: () => w.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[h.Sb.Nebraska]: () => w.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[h.Sb.NewHampshire]: () => w.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[h.Sb.NewJersey]: () => w.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[h.Sb.NewMexico]: () => w.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[h.Sb.Nevada]: () => w.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[h.Sb.NewYork]: () => w.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[h.Sb.Ohio]: () => w.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[h.Sb.Oklahoma]: () => w.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[h.Sb.Oregon]: () => w.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[h.Sb.Pennsylvania]: () => w.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[h.Sb.RhodeIsland]: () => w.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[h.Sb.SouthCarolina]: () => w.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[h.Sb.SouthDakota]: () => w.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[h.Sb.Tennessee]: () => w.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[h.Sb.Texas]: () => w.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[h.Sb.Utah]: () => w.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[h.Sb.Virginia]: () => w.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[h.Sb.Vermont]: () => w.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[h.Sb.Washington]: () => w.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[h.Sb.Wisconsin]: () => w.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[h.Sb.WestVirginia]: () => w.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[h.Sb.Wyoming]: () => w.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var J = s("./src/reddit/components/StateSort/index.m.less"),
				Q = s.n(J);

			function X() {
				return (X = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const $ = D.a.wrapped(x.a, "_Dropdown", Q.a),
				ee = Object(S.a)($),
				te = e => {
					return e.indexOf("_") > 0 && ne(e) === h.w.UnitedStates
				},
				se = e => {
					if (te(e)) {
						return e.split("_")[1]
					}
					return h.Sb.AllStates
				},
				ne = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				re = e => {
					const t = ne(e),
						s = se(e);
					return te(e) ? `${t}_${s}` : t
				},
				oe = Object(l.t)(),
				ie = Object(m.c)({
					dropdownIsOpen: Object(I.b)("StateSort--StateSortPicker")
				}),
				ae = Object(o.b)(ie, e => ({
					onOpenDropdown: () => e(Object(f.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, s) => {
						e(Object(g.b)(t)), e(Object(c.u)(h.w.UnitedStates + "_" + s))
					}
				}));
			var ce = D.a.wrapped(oe(ae(e => {
				const t = `${e.baseUrl}?${q.h}=${h.w.UnitedStates}`;
				return r.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, r.a.createElement(H, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, r.a.createElement(F, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : Z(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), r.a.createElement(v.a.Consumer, null, s => r.a.createElement(ee, X({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, s, {
					renderContentsHidden: !0
				}), Object.keys(h.Sb).map(s => {
					const n = h.Sb[s];
					return r.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === h.Sb.AllStates ? t : `${t}_${e}`)(n), re(n))
					}, r.a.createElement(_.b, {
						className: Object(i.a)(e.rowClassName, e.sort === n ? e.rowSelectedClassName : void 0),
						displayText: Z(n),
						isSelected: e.sort === n
					}))
				}))))
			})), "Component", Q.a);
			const de = {
				[h.w.Everywhere]: () => w.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[h.w.UnitedStates]: () => w.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[h.w.Argentina]: () => w.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[h.w.Australia]: () => w.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[h.w.Bulgaria]: () => w.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[h.w.Canada]: () => w.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[h.w.Chile]: () => w.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[h.w.Colombia]: () => w.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[h.w.Croatia]: () => w.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[h.w.CzechRepublic]: () => w.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[h.w.Finland]: () => w.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[h.w.France]: () => w.fbt._("France", null, {
					hk: "1fX2Y8"
				}),
				[h.w.Germany]: () => w.fbt._("Germany", null, {
					hk: "2mADuB"
				}),
				[h.w.Greece]: () => w.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[h.w.Hungary]: () => w.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[h.w.Iceland]: () => w.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[h.w.India]: () => w.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[h.w.Ireland]: () => w.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[h.w.Italy]: () => w.fbt._("Italy", null, {
					hk: "3EvGjk"
				}),
				[h.w.Japan]: () => w.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[h.w.Malaysia]: () => w.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[h.w.Mexico]: () => w.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[h.w.NewZealand]: () => w.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[h.w.Philippines]: () => w.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[h.w.Poland]: () => w.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[h.w.Portugal]: () => w.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[h.w.PuertoRico]: () => w.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[h.w.Romania]: () => w.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[h.w.Serbia]: () => w.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[h.w.Singapore]: () => w.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[h.w.Spain]: () => w.fbt._("Spain", null, {
					hk: "44RpFE"
				}),
				[h.w.Sweden]: () => w.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[h.w.Taiwan]: () => w.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[h.w.Thailand]: () => w.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[h.w.Turkey]: () => w.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[h.w.UnitedKingdom]: () => w.fbt._("United Kingdom", null, {
					hk: "rs1fl"
				})
			};
			var le = s("./src/reddit/components/CountrySort/index.m.less"),
				ue = s.n(le);

			function pe() {
				return (pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const me = "CountrySort--CountrySortPicker",
				be = Object(l.t)(),
				he = Object(m.c)({
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
						e(Object(g.b)(t)), e(Object(c.u)(s))
					}
				}))(e => {
					const t = ne(e.sort),
						s = se(e.sort),
						n = `${e.baseUrl}?${q.h}=`;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(i.a)(ue.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(me) : e.onOpenDropdown(me)
					}, r.a.createElement(H, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, r.a.createElement(F, {
						className: e.buttonClassName,
						displayText: (() => t in de ? de[t]() : de[h.w.Everywhere]())(),
						id: me,
						showDropdownTriangle: !0
					})), r.a.createElement(v.a.Consumer, null, s => r.a.createElement(ee, pe({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: me
					}, s, {
						renderContentsHidden: !0
					}), Object.keys(h.w).map(s => {
						const o = h.w[s];
						return r.a.createElement("div", {
							key: o,
							onClick: () => e.onClickLink(`${n}${re(o)}`, o)
						}, r.a.createElement(_.b, {
							className: Object(i.a)(e.rowClassName, t === o ? e.rowSelectedClassName : void 0),
							displayText: de[o](),
							isSelected: t === o
						}))
					})))), t === h.w.UnitedStates && r.a.createElement(ce, {
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
				we = s.n(fe),
				Se = s("./src/reddit/components/TimeSort/index.m.less"),
				ye = s.n(Se);

			function ve() {
				return (ve = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const xe = Object(S.a)(x.a),
				_e = (e, t, s) => {
					let n = e.url;
					return e.urlParams.sort || Object(l.G)(e) || (n = we.a.join(n, t)), Object(b.a)(n, {
						[q.x]: s
					})
				},
				Ce = D.a.div("ListingSortContainer", ye.a),
				Oe = Object(l.t)(),
				ke = Object(m.c)({
					dropdownIsOpen: Object(I.b)("TimeSort--SortPicker")
				});
			var Ee = Oe(Object(o.b)(ke, e => ({
					onOpenDropdown: () => e(Object(f.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(d.c)(e => r.a.createElement(Ce, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, r.a.createElement(H, {
					className: e.wrapperClassName,
					disabled: !1
				}, r.a.createElement(F, {
					className: e.buttonClassName,
					displayText: Object(y.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), r.a.createElement(v.a.Consumer, null, t => r.a.createElement(xe, ve({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [h.Vb.HOUR, h.Vb.DAY, h.Vb.WEEK, h.Vb.MONTH, h.Vb.YEAR, h.Vb.ALL].map(t => r.a.createElement(_.b, {
					className: Object(i.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
					displayText: Object(y.b)(t),
					href: _e(e.pageLayer, e.listingSort, t),
					isSelected: e.timeSort === t,
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(O.c)(t))
					}
				})))))))),
				Pe = s("./src/reddit/constants/listings.ts"),
				Ie = s("./src/reddit/contexts/CoreStyleExperiments.ts"),
				Ne = s("./src/reddit/controls/Button/index.tsx"),
				je = s("./src/reddit/icons/fonts/index.tsx"),
				Le = s("./src/reddit/icons/fonts/Menu/index.tsx"),
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
			const Ae = new Set([h.P.CONTROVERSIAL, h.P.TOP]),
				Be = new Set([h.P.CONTROVERSIAL, h.P.RISING]),
				Me = "ListingSort--Overflow",
				Ve = Object(l.t)({
					isFrontpage: l.y,
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				Fe = Object(m.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, E.a, N.i, l.C, P.a, (e, t, s, n, r, o) => {
					if (e) return {
						isPopularPage: r,
						sortOptions: e
					};
					const i = [h.P.HOT, h.P.NEW, h.P.TOP, h.P.RISING];
					return (t && (n || s) || r && s) && i.unshift(h.P.BEST), r && o && i.splice(3, 0, h.P.AWARDED), {
						isPopularPage: r,
						sortOptions: i
					}
				});
			class He extends r.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(O.a)(e))
					}, this.getSortUrl = e => {
						const {
							baseUrl: t,
							isProfilePage: s
						} = this.props;
						return s ? Object(b.a)(t, {
							sort: e
						}) : Object(C.a)(t, `${e}/`)
					}, this.renderSortButton = e => {
						const {
							sort: t
						} = this.props;
						return r.a.createElement(Ne.q, {
							className: Object(i.a)(De.a.SortLink, e === t && De.a.selected),
							kind: Ne.a.InternalLink,
							priority: Ne.b.Plain,
							Icon: s => r.a.createElement(M, Re({}, s, {
								className: Object(i.a)(De.a.SortIcon, s.className),
								sort: e,
								isFilled: e === t
							})),
							text: Object(y.a)(e),
							onClick: () => this.changeSort(e),
							to: this.getSortUrl(e),
							key: e
						})
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: s,
							isPopularPage: n,
							sort: o
						} = this.props, i = n && !!s && e === h.P.HOT && o === h.P.HOT;
						return r.a.createElement(r.a.Fragment, {
							key: e
						}, this.renderSortButton(e), i && r.a.createElement(ge, {
							baseUrl: Pe.c[Pe.b.Popular],
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
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: s,
						sort: n,
						sortOptions: o,
						timeSort: a
					} = this.props, c = !t && Ae.has(n), d = Be.has(n), l = o.filter(e => !Be.has(e)), u = o.filter(e => Be.has(e) && e !== n);
					return r.a.createElement(Ie.b.Consumer, null, ({
						icons2020: t
					}) => r.a.createElement(r.a.Fragment, null, r.a.createElement(z, Re({}, this.props, {
						buttonClassName: De.a.DropdownButton,
						className: Object(i.a)(De.a.SortDropdown, e),
						rowClassName: De.a.DropdownRow,
						rowIconClassName: De.a.DropdownRowIcon,
						rowSelectedClassName: De.a.DropdownRowSelected,
						showTitle: !1
					})), r.a.createElement("div", {
						className: Object(i.a)(De.a.SortButtons, e)
					}, l.map(this.renderSort)), d && this.renderSort(n), c && r.a.createElement(Ee, {
						baseUrl: this.getSortUrl(n),
						buttonClassName: De.a.DropdownButton,
						className: De.a.TimeSort,
						dropdownClassName: De.a.Dropdown,
						listingSort: n,
						onChange: s,
						rowClassName: De.a.DropdownRow,
						rowSelectedClassName: De.a.DropdownRowSelected,
						timeSort: a || h.Wb,
						wrapperClassName: De.a.DropdownSortWrapper
					}), u.length > 0 && r.a.createElement(z, Re({}, this.props, {
						className: Object(i.a)(De.a.SortOverflow, e),
						dropdownClassName: De.a.Dropdown,
						dropdownId: Me,
						rowClassName: De.a.DropdownRow,
						rowIconClassName: De.a.DropdownRowIcon,
						rowSelectedClassName: De.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: u
					}), r.a.createElement("button", {
						className: De.a.SortOverflowButton,
						id: Me
					}, t ? r.a.createElement(je.a, {
						name: "overflow_horizontal"
					}) : r.a.createElement(Le.a, null)))))
				}
			}
			var Ue = Ve(Object(o.b)(Fe)(Object(d.c)(He))),
				Ke = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				Ge = s.n(Ke);
			const We = Object(l.t)({
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				ze = Object(o.b)(null, (e, {
					subredditId: t
				}) => ({
					updateSortPreference: (s, n) => {
						if (t) {
							const r = Object(a.c)({
								sort: s,
								timeSort: n
							});
							e(Object(c.I)(t, r))
						}
					}
				}));
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
						countrySort: s,
						disabled: n = !1,
						isProfilePage: o,
						sort: a,
						sortOptions: c,
						subredditId: d,
						timeSort: l,
						updateSortPreference: u
					} = this.props;
					return r.a.createElement("div", {
						className: Object(i.a)(Ge.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, r.a.createElement(Ue, {
						baseUrl: e,
						disabled: n,
						geopopularSort: s,
						onChange: u,
						onTimeSortChange: this.updateTimeSort,
						sort: a,
						sortOptions: c,
						timeSort: l
					}), !o && r.a.createElement(p.a, {
						className: Ge.a.LayoutSwitch,
						subredditId: d
					}))
				}
			}
			t.a = We(ze(Object(d.c)(qe)))
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
				return y
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				c = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				l = s("./src/reddit/icons/svgs/Best/index.tsx"),
				u = s("./src/reddit/icons/svgs/Controversial/index.tsx"),
				p = s("./src/reddit/icons/svgs/Hot/index.tsx"),
				m = s("./src/reddit/icons/svgs/New/index.tsx"),
				b = s("./src/reddit/icons/svgs/Rising/index.tsx"),
				h = s("./src/reddit/icons/svgs/Top/index.tsx"),
				g = s("./src/reddit/controls/Dropdown/index.m.less"),
				f = s.n(g);
			const w = {
					[i.P.BEST]: l.a,
					[i.P.HOT]: p.a,
					[i.P.NEW]: m.a,
					[i.P.CONTROVERSIAL]: u.a,
					[i.P.TOP]: h.a,
					[i.P.RISING]: b.a,
					[i.P.AWARDED]: d.a
				},
				S = {
					[i.P.BEST]: "best",
					[i.P.HOT]: "hot",
					[i.P.NEW]: "new",
					[i.P.CONTROVERSIAL]: "controversial",
					[i.P.TOP]: "top",
					[i.P.RISING]: "rising",
					[i.P.AWARDED]: "award"
				};

			function y({
				className: e,
				isFilled: t,
				sort: s
			}) {
				if (Object(a.a)() && void 0 !== S[s]) return r.a.createElement(c.a, {
					name: S[s],
					isFilled: t,
					className: Object(o.a)(e, f.a.iconStyles)
				});
				const n = w[s];
				return n ? r.a.createElement(n, {
					className: Object(o.a)(e, f.a.iconStyles)
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
				return Z
			})), s.d(t, "a", (function() {
				return J
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/history/esm/history.js"),
				r = s("./node_modules/lodash/debounce.js"),
				o = s.n(r),
				i = s("./node_modules/lodash/last.js"),
				a = s.n(i),
				c = s("./node_modules/lodash/throttle.js"),
				d = s.n(c),
				l = s("./node_modules/react/index.js"),
				u = s.n(l),
				p = s("./src/lib/addQueryParams/index.ts"),
				m = s("./src/lib/ads/index.ts"),
				b = s("./src/lib/classNames/index.ts"),
				h = s("./src/lib/constants/index.ts"),
				g = s("./src/lib/fastdom/index.ts"),
				f = s("./src/lib/lessComponent.tsx"),
				w = s("./src/lib/opener/index.ts"),
				S = s("./src/lib/sentry/index.ts"),
				y = s("./src/reddit/components/PostList/LoadMore.tsx"),
				v = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				x = s("./src/reddit/components/Scroller/Simple.tsx"),
				_ = s("./src/reddit/constants/adEvents.ts"),
				C = s("./src/reddit/constants/componentSizes.ts"),
				O = s("./src/reddit/constants/postLayout.ts"),
				k = s("./src/reddit/controls/InternalLink/index.tsx"),
				E = s("./src/reddit/controls/OutboundLink/index.tsx"),
				P = s("./src/reddit/helpers/getClickInfo.ts"),
				I = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				N = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				j = s("./src/reddit/models/Media/index.ts"),
				L = s("./src/reddit/helpers/brandSafety/index.ts"),
				T = s("./src/lib/LRUCache/index.ts"),
				D = s("./src/telemetry/index.ts"),
				R = s("./src/telemetry/models/Timer.ts"),
				A = s("./src/reddit/components/PostList/index.m.less"),
				B = s.n(A);
			const {
				fbt: M
			} = s("./node_modules/fbt/lib/FbtPublic.js"), V = 500, F = new T.a(V), H = new T.a(V), U = new T.a(V), K = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5
			}, G = f.a.div("SeeMore", B.a), W = f.a.wrapped(N.a, "ArrowRight", B.a), z = (e, t, s, n, r, o, i, a) => {
				const c = `entered-${e}-${t}-${s?`last-${n}-${r}`:""}-${o}`;
				let d = F.get(c);
				return void 0 === d && (d = () => {
					s && i.onBottomViewed(n, r), i.trackOnPostEnteredViewport(e, t, a)
				}, F.set(c, d)), d
			}, q = (e, t, s, n, r) => {
				const o = `left-${e}-${t}`;
				let i = H.get(o);
				return void 0 === i && (i = o => {
					s.trackOnPostExitedViewport(e, t, o, n, r)
				}, H.set(o, i)), i
			}, Z = (e, t) => {
				const s = `click-${e}`;
				let n = U.get(s);
				return void 0 === n && (n = (e, s, n, r) => {
					if (s.isSponsored) {
						t.fireAdPixelsOfType(s, _.a.Click);
						const {
							source: e
						} = Object(m.t)(s, r);
						if (e && e.outboundUrl) {
							let t = e.outboundUrl;
							n && (t = Object(E.a)(s.id, n, t).url), Object(w.d)(t, w.c.BLANK)
						}
					} else t.openPost({
						postOrComment: s,
						clickInfo: Object(P.a)(e)
					})
				}, U.set(s, n)), n
			}, Y = (e, t) => {
				const s = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					s.splice(e, 0, t[e])
				}), s
			};
			class J extends u.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new T.a(V), this.surveyTriggerCounted = !1, this.viewportHeight = null, this.updateScrollerRef = e => {
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
						} = this.props, n = e(), r = [];
						n.forEach(e => r.push(e.id));
						const o = r.map(e => t[e]).filter(Boolean),
							i = o.map(e => s[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(L.a)(o, i))
					}, h.d, {
						leading: !0
					})
				}
				UNSAFE_componentWillMount() {
					this.timerId && D.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = D.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.viewportHeight = window.innerHeight, this.timerId) {
						const e = D.c.end(this.timerId);
						setTimeout(() => Object(D.b)(h.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && D.c.cancel(this.timerId), e.postIds.length && (this.timerId = D.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					var t, s;
					if (g.a.read(() => this.checkAndSendScreenview()), this.timerId && D.c.has(this.timerId)) {
						const e = D.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(D.b)(h.l.Redesign, {
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
					this.timerId && D.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
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
					return D.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const n = D.c.end(e);
					setTimeout(() => {
						s(t(n, R.TimerType.InApp))
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
						...s
					} = this.props, {
						postsById: n,
						...r
					} = e, o = Object.keys(s), i = Object.keys(r);
					if (i.length !== o.length) return !0;
					if (i.some(e => s[e] !== r[e])) return !0;
					if (t === n) return !1;
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
				scrollChildForPost(e, t, s, n) {
					const {
						currentProfileName: r,
						hostPostId: o,
						isCommentPermalink: i,
						isCommentsPage: a,
						isFrontpage: c,
						isProfilePostListing: d,
						isTopicPage: l,
						listingKey: p,
						listingName: m,
						pageLayer: b,
						pageReferrer: g,
						postClickEventFactory: f,
						redditStyle: w,
						shouldHideFlair: y,
						isActionBarAnimationEnabled: v,
						postIds: x
					} = this.props, _ = 0 === t, C = `post-${n}-${e}-${t}-${s?"last-index":""}-${m}-${p}-${g}`;
					let k;
					if (void 0 === (k = this.scrollChildCache.get(C))) {
						const {
							inSubredditOrProfile: E,
							postsById: P
						} = this.props, N = P[e], L = N.crosspostRootId && P[N.crosspostRootId] ? P[N.crosspostRootId] : N;
						N.crosspostRootId && !P[N.crosspostRootId] && S.c.withScope(e => {
							e.setExtra("errorType", h.q.API), e.setExtra("description", `Post ${N.id} is crosspost of ${N.crosspostRootId}, but ` + `${N.crosspostRootId} details are missing in the state`), S.c.captureMessage("Crosspost parent details are missing")
						});
						const T = this.props.postComponentForLayout({
								isCrosspost: !!N.crosspostRootId,
								isFirstPost: _,
								layout: n,
								post: L
							}),
							D = `post-list-item-[layout: ${n}]-[postId: ${e}]`,
							R = z(e, n, s, p, m, g, this.props, t),
							A = q(e, n, this.props, t, b),
							B = Z(e, this.props),
							M = L.media && L.media.type === j.o.EMBED ? L.media.provider : null;
						k = {
							estHeight: Object(I.c)(N, n),
							id: e,
							isFocusable: !(!L.media || !(n === O.g.Large || n === O.g.Classic && Object(j.G)(L.media))) && (j.d.has(L.media.type) && (!M || !j.s.has(M)) && !L.isSpoiler && !L.isNSFW),
							trackOnEnteredViewport: R,
							trackOnExitedViewport: A,
							render: ({
								className: t,
								height: n,
								width: h,
								remeasure: g,
								setScrollerChildRef: S,
								shouldLoadInitially: C
							}) => u.a.createElement(T, {
								className: t,
								currentProfileName: r,
								key: D,
								availableWidth: h,
								eventFactory: f,
								first: _,
								forceLoadMedia: C,
								hostPostId: o,
								inSubredditOrProfile: E,
								isActionBarAnimationEnabled: v,
								isCommentPermalink: i,
								isCommentsPage: a,
								isFrontpage: c,
								isProfilePostListing: d,
								isTopicPage: l,
								listingKey: p,
								listingName: m,
								pageLayer: b,
								last: s,
								onClickPost: B,
								onSizeChanged: g,
								postId: e,
								postIds: x,
								redditStyle: w,
								sendEvent: this.props.sendEvent,
								scrollerItemRef: S,
								shouldHideFlair: y
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
						layout: n,
						onTryAgain: r,
						postListPlaceholderComponent: o
					} = this.props;
					if (s) return;
					const i = o;
					return u.a.createElement("div", {
						className: B.a.placeholder
					}, u.a.createElement(i, {
						className: t,
						isLoading: !e,
						layout: n
					}), !!e && u.a.createElement(v.a, {
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
					if (!s) return u.a.createElement("div", {
						className: B.a.placeholder
					}, u.a.createElement(y.a, {
						className: r,
						isLoading: !!t,
						layout: n,
						countOverride: K[n]
					}), !!e && u.a.createElement(v.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: r,
						isTruncated: o,
						layout: i,
						location: a,
						loadMore: c,
						postIds: d,
						onLoadMore: m
					} = this.props;
					let g = d.map((e, t, s) => {
						const n = t === d.length - 1;
						return this.scrollChildForPost(e, t, n, i)
					});
					r && (g = Y(g, r));
					const f = this.props.measureScrollFPS ? `post-listings-${i}` : void 0,
						w = a ? Object(n.e)(a) : null,
						S = w || o;
					return u.a.createElement(l.Fragment, null, u.a.createElement(x.b, {
						innerRef: this.updateScrollerRef,
						className: S ? B.a.truncatedPostList : Object(b.a)(B.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: c && c.token ? c.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: m,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: f,
						viewportTopPadding: C.f
					}, g), w && u.a.createElement(G, {
						className: B.a.seeMoreButton
					}, u.a.createElement(k.a, {
						className: B.a.seeMorePostsText,
						to: Object(p.a)(w, {
							type: h.Qb.Posts
						})
					}, M._("See More Posts", null, {
						hk: "3o0CqI"
					}), u.a.createElement(W, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			J.defaultProps = {
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
				return C
			})), s.d(t, "d", (function() {
				return k
			})), s.d(t, "b", (function() {
				return P
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
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
				h = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/components/PostList/Placeholder.tsx"),
				f = s("./src/reddit/featureFlags/index.ts"),
				w = s("./src/reddit/selectors/experiments/survey.ts"),
				S = s("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				y = s("./src/reddit/selectors/listings.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/subreddit.ts"),
				_ = s("./src/reddit/selectors/tracking.ts");

			function C() {
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
			const O = C(),
				k = {
					apiError: y.c,
					apiPending: y.d,
					measureScrollFPS: f.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(m.O)(e, t),
					loadMore: (e, t) => t.isPredictionsPage && !Object(S.a)(e, t.listingKey) ? null : Object(y.g)(e, t),
					postsById: (e, t) => Object(v.N)(e, {
						...t
					}),
					postIds: Object(o.a)((e, {
						listingKey: t,
						listingName: s,
						isPredictionsPage: n,
						inSubredditOrProfile: r
					}) => {
						if (n) {
							const n = Object(x.F)(e, s);
							return Object(S.l)(e, {
								subredditId: n,
								listingKey: t
							})
						}
						return Object(v.A)(e, t, s, r)
					}),
					subredditsById: x.ab,
					viewportDataLoaded: _.a,
					pageReferrer: m.R,
					postListPlaceholderComponent: () => g.a,
					isNpsScrollSurveyEnabled: w.d
				},
				E = Object(r.c)(k),
				P = (e, {
					isFrontpage: t
				}) => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(c.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(i.d({
							isViewSafe: t
						}))
					},
					openPost: s => {
						t && e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(d.E(s))
					},
					fireAdPixelsOfType: (t, s) => {
						e(d.u(t, s))
					},
					trackOnPostEnteredViewport: (t, s, n) => {
						e(d.H(t, n))
					},
					trackOnPostExitedViewport: (t, s, n, r, o) => {
						e(d.I(t, n, r, o))
					},
					surveyTriggerScrollCounted: () => e(Object(u.h)())
				}),
				I = Object(n.b)(E, P, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(h.f)(e, t, "post", s.listingKey, s.hostPostId, s.listingBelowVariant, void 0, s.listingBelowMonthlyVariant),
					postComponentForLayout: e => Object(b.b)({
						...e
					})
				}));
			t.a = e => Object(p.c)(O(I(e)))
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts");
			const o = {
					[r.P.BEST]: () => n.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[r.P.HOT]: () => n.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[r.P.NEW]: () => n.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[r.P.CONTROVERSIAL]: () => n.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[r.P.RISING]: () => n.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[r.P.TOP]: () => n.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[r.P.AWARDED]: () => n.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				i = e => {
					const t = o[e];
					return t && t() || ""
				},
				a = {
					[r.Vb.HOUR]: () => n.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[r.Vb.DAY]: () => n.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[r.Vb.WEEK]: () => n.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[r.Vb.MONTH]: () => n.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[r.Vb.YEAR]: () => n.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[r.Vb.ALL]: () => n.fbt._("All Time", null, {
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
		"./src/reddit/icons/fonts/Gift/index.m.less": function(e, t, s) {
			e.exports = {
				GiftIcon: "_12P1l1cITUMF05krI6QUSj",
				giftIcon: "_12P1l1cITUMF05krI6QUSj"
			}
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Gift/index.m.less"),
				a = s.n(i),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/hooks/useCoreStyleExperiments.ts");
			const l = c.a.wrapped(e => {
				const t = Object(d.a)();
				return r.a.createElement("i", {
					className: `${Object(o.b)(t?"award":"gift")} ${e.className}`,
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, r.a.createElement(o.a, null, e.desc))
			}, "GiftIcon", a.a);
			t.a = l
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
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Menu/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: `${Object(o.b)("menu",e.isFilled)} ${e.className}`
			}), "MenuIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
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
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Best/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M18.06,3a1,1,0,0,0-1-1A11.16,11.16,0,0,0,9.11,5.29L6.72,7.68A4.45,4.45,0,0,0,4.33,7,4.5,4.5,0,0,0,1.15,8.3a.5.5,0,0,0,0,.71L4,11.84l4.25,4.24,2.83,2.83h0a.48.48,0,0,0,.7,0,4.49,4.49,0,0,0,.62-5.57L14.76,11A11.15,11.15,0,0,0,18.06,3ZM13.47,9.41a2,2,0,0,1-2.88-2.77l.05,0a2,2,0,0,1,2.83,2.82Z"
			}), r.a.createElement("path", {
				d: "M3.21,14.73h0A3.89,3.89,0,0,0,2.06,17.5a.5.5,0,0,0,.5.5,4,4,0,0,0,2.83-1.21,1.5,1.5,0,1,0-2.18-2.06Z"
			}))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, s) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = s.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(a.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, r.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, s) {
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
				d: "M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"
			}))
		},
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, s) {
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
				d: "M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Controversial/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				points: "16 0 7.25 0 3.5 10.108 8.5 10.108 4.475 20 16 8 11 8"
			})))
		},
		"./src/reddit/icons/svgs/Hot/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("title", null, "Hot"), r.a.createElement("path", {
				d: "M10.31.61a.5.5,0,0,0-.61,0C9.41.83,2.75,6.07,2.75,11.47a8.77,8.77,0,0,0,3.14,6.91.5.5,0,0,0,.75-.64,3.84,3.84,0,0,1-.55-2A7.2,7.2,0,0,1,10,9.56a7.2,7.2,0,0,1,3.91,6.23,3.84,3.84,0,0,1-.55,2,.5.5,0,0,0,.75.64,8.77,8.77,0,0,0,3.14-6.91C17.25,6.07,10.59.83,10.31.61Z"
			}))
		},
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, s) {
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
				d: "M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"
			}))
		},
		"./src/reddit/icons/svgs/New/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
			})))
		},
		"./src/reddit/icons/svgs/Rising/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
			})))
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
			})))
		},
		"./src/reddit/pages/Subreddit/SurveyUnit.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/CommunityTopicSurvey/async.tsx"),
				c = s("./src/reddit/components/ContentSurvey/ContentRatingSurveyBanner.tsx");
			const d = Object(n.a)({
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

			function l({
				subredditId: e
			}) {
				var t;
				const s = Object(i.e)(t => t.subreddits.survey[e]),
					n = Object(i.e)(t => t.subreddits.progressModule[e]);
				return (null === (t = null == n ? void 0 : n.cards) || void 0 === t ? void 0 : t.length) > 0 ? o.a.createElement(d, {
					subredditId: e,
					progressModule: n
				}) : (null == s ? void 0 : s.isEligible) && !(null == s ? void 0 : s.response) ? o.a.createElement(c.a, {
					subredditId: e,
					survey: s
				}) : o.a.createElement(a.a, {
					subredditId: e
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
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/user.ts");
			const i = e => {
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: o.J,
						experimentName: n.zb
					});
					return !(!t || Object(n.Dd)(t))
				},
				a = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: o.J,
						experimentName: n.zb
					}) === n.Lb.ListingEnabled
				}
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return a
			})), s.d(t, "h", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "k", (function() {
				return u
			})), s.d(t, "j", (function() {
				return p
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "c", (function() {
				return w
			})), s.d(t, "g", (function() {
				return S
			})), s.d(t, "d", (function() {
				return y
			}));
			var n = s("./src/reddit/featureFlags/index.ts"),
				r = s("./src/reddit/selectors/posts.ts"),
				o = s("./src/reddit/selectors/subreddit.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = (e, t) => {
					const s = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (s) {
						const t = Object(o.T)(e, {
							subredditId: s
						});
						return t && t.displayText || ""
					}
					return ""
				},
				c = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				d = e => e.focusedVerticals.components.dismissed,
				l = [],
				u = (e, t) => {
					const s = p(e, t);
					if (!s) return l;
					const n = Object(o.X)(e, {
						subredditName: s.name
					});
					return n && n.postIds && n.postIds.length ? n.postIds : l
				},
				p = (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(o.T)(e, {
						subredditId: s
					}) : null
				},
				m = (e, t, s, n, o) => {
					const i = o.find(e => e <= t) || -1,
						a = o.find(e => e > t) || 1 / 0;
					return t !== a && t !== i && (!(i + s > t) && (!(t + s > a) && !((e, t, s) => {
						const n = s[t - 1],
							o = s[t],
							i = o && Object(r.D)(e, {
								postId: n
							}) || null,
							a = o && Object(r.D)(e, {
								postId: o
							}) || null;
						return i && i.isSponsored || a && a.isSponsored
					})(e, t, n)))
				},
				b = [3],
				h = (e, t, {
					listingKey: s
				}) => {
					const n = t.slice().sort();
					let o = -1;
					const i = Object(r.w)(e, {
							listingKey: s
						}),
						a = [];
					return b.forEach(t => {
						let s = o + t;
						if (!(s >= i.length)) {
							for (; s < i.length && !m(e, s, t, i, n);) s += 1;
							s < i.length && (a.push(s), o = s)
						}
					}), a
				},
				g = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				f = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				w = e => e.focusedVerticals.category,
				S = e => e.focusedVerticals.lastLoadedEnv,
				y = e => {
					const t = Object(i.I)(e),
						s = n.d.geoSubredditRecommendationDULoggedIn(e),
						r = n.d.geoSubredditRecommendationDULoggedOut(e);
					return t && s || !t && r
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Frontpage~ModListing~Subreddit.51d984c9a5c29d6f0ebc.js.map