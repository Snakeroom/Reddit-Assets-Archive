// https://www.redditstatic.com/desktop2x/SubredditLeaderboard.7411f09d61616ae69cc6.js
// Retrieved at 2/6/2020, 1:30:14 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditLeaderboard"], {
		"./node_modules/lodash/_arrayShuffle.js": function(e, t, a) {
			var r = a("./node_modules/lodash/_copyArray.js"),
				s = a("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e) {
				return s(r(e))
			}
		},
		"./node_modules/lodash/_baseShuffle.js": function(e, t, a) {
			var r = a("./node_modules/lodash/_shuffleSelf.js"),
				s = a("./node_modules/lodash/values.js");
			e.exports = function(e) {
				return r(s(e))
			}
		},
		"./node_modules/lodash/first.js": function(e, t, a) {
			e.exports = a("./node_modules/lodash/head.js")
		},
		"./node_modules/lodash/head.js": function(e, t) {
			e.exports = function(e) {
				return e && e.length ? e[0] : void 0
			}
		},
		"./node_modules/lodash/shuffle.js": function(e, t, a) {
			var r = a("./node_modules/lodash/_arrayShuffle.js"),
				s = a("./node_modules/lodash/_baseShuffle.js"),
				n = a("./node_modules/lodash/isArray.js");
			e.exports = function(e) {
				return (n(e) ? r : s)(e)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, a) {
			var r = a("./node_modules/lodash/_baseTimes.js"),
				s = a("./node_modules/lodash/_castFunction.js"),
				n = a("./node_modules/lodash/toInteger.js"),
				o = 9007199254740991,
				d = 4294967295,
				i = Math.min;
			e.exports = function(e, t) {
				if ((e = n(e)) < 1 || e > o) return [];
				var a = d,
					c = i(e, d);
				t = s(t), e -= d;
				for (var l = r(c, t); ++a < e;) t(a);
				return l
			}
		},
		"./src/reddit/components/CategoryPickerWidget/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_1Le71sZe40-ak2-JlezTO9",
				header: "_1xEfG7rp7vrKfyvMhw4d7B",
				categoryList: "_2TokM04UC_UEG0cmYY5zqV",
				expanded: "H2nL15newZjevdZ9kmsw6",
				categoryLink: "_3p0xqZowgYYjYMOdinU151",
				active: "_1eQr_TkUOm6M6XqM8GTZqp",
				button: "_36EQoGTqXwZI27n50gESaC"
			}
		},
		"./src/reddit/components/CommunitiesDirectoryWidget/index.m.less": function(e, t, a) {
			e.exports = {
				Widget: "_36_8mPRaeDNCpkQ5-w8TS9",
				widget: "_36_8mPRaeDNCpkQ5-w8TS9",
				LinkContainer: "_65zQcMEUkFZAyLyrKPlA0",
				linkContainer: "_65zQcMEUkFZAyLyrKPlA0",
				Title: "oaSSd7FLyCKYFcVrHeOpC",
				title: "oaSSd7FLyCKYFcVrHeOpC",
				Link: "_1EnYMKlnIu6EN56KYszO66",
				link: "_1EnYMKlnIu6EN56KYszO66"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, a) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./src/reddit/components/SidebarSpacer/index.m.less"),
				s = a.n(r),
				n = a("./src/lib/lessComponent.tsx");
			t.a = n.a.div("Component", s.a)
		},
		"./src/reddit/components/TopSubredditsWidget/Container.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/lodash/sampleSize.js"),
				s = a.n(r),
				n = a("./node_modules/react/index.js"),
				o = a.n(n),
				d = a("./node_modules/lodash/first.js"),
				i = a.n(d),
				c = a("./node_modules/lodash/times.js"),
				l = a.n(c),
				m = a("./node_modules/react-router-dom/esm/react-router-dom.js"),
				u = a("./src/config.ts"),
				g = a("./src/lib/classNames/index.ts"),
				p = a("./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx"),
				b = a("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				h = a("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				y = a("./src/reddit/constants/subredditLeaderboard.ts"),
				E = a("./src/reddit/controls/Button/index.tsx"),
				k = a("./src/reddit/controls/Chip/index.m.less"),
				C = a.n(k);
			var x = e => {
					const t = e.to ? m.a : "div",
						a = Object(g.a)(C.a.chip, e.isActive && C.a.active, e.className);
					return o.a.createElement(t, {
						className: a,
						to: e.to || ""
					}, e.children)
				},
				N = a("./src/reddit/helpers/name/index.ts"),
				f = a("./src/reddit/i18n/components.tsx"),
				_ = a("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				S = a.n(_);
			const v = e => {
					const t = !(!e.rankings || !e.rankings.length),
						a = !t && S.a.communityBannerPlaceholder;
					return o.a.createElement("div", {
						className: Object(g.a)(e.className, S.a.communityBanner, a),
						style: {
							backgroundImage: "url(".concat(e.bannerBackgroundImage, ")")
						}
					}, t && o.a.createElement("h2", {
						className: S.a.communityBannerText
					}, o.a.createElement(m.a, {
						onMouseDown: () => e.onSendEventClick("banner", e.categoryName || y.c),
						to: e.categoryName === y.m ? "".concat(y.e).concat(y.m) : y.e
					}, o.a.createElement(o.a.Fragment, null, e.categoryName ? (e => e === y.m ? o.a.createElement(f.c, null, "Up-and-coming Communities") : o.a.createElement(o.a.Fragment, null, "Top", o.a.createElement("span", {
						className: S.a.categoryName
					}, " ", o.a.createElement(f.b, {
						name: "categoryName"
					}, e || ""), " "), "Communities"))(e.categoryName) : "Today's Top Growing Communities"))))
				},
				j = e => o.a.createElement("ol", null, e.rankings && e.rankings.map(t => {
					const a = e.subreddits[t.id];
					return o.a.createElement(p.a, {
						delta: t.rankDelta,
						key: t.id,
						large: e.large,
						onItemClick: () => e.onSendEventClick("subreddit", e.categoryName || y.c, a.name),
						rank: t.rank,
						shouldDisplayDelta: e.shouldDisplayDelta,
						subreddit: a
					})
				}), !e.rankings.length && O),
				O = o.a.createElement(o.a.Fragment, null, l()(5, e => o.a.createElement(b.a, {
					key: e
				}))),
				T = e => {
					const t = e.isSecondaryButton ? E.k : E.h;
					return o.a.createElement("div", {
						className: S.a.footer
					}, o.a.createElement(t, {
						className: S.a.linkButton,
						onMouseDown: () => e.onSendEventClick("button_cta", e.categoryName || y.c),
						to: e.to || ""
					}, e.isSecondaryButton ? e.categoryName ? o.a.createElement(f.c, null, "See All ", o.a.createElement(f.b, {
						name: "categoryName"
					}, e.categoryName)) : o.a.createElement(f.c, null, "See All") : o.a.createElement(f.c, null, "View all")))
				},
				I = e => o.a.createElement("div", {
					className: S.a.categoryPicker
				}, e.categories && e.categories.map(e => o.a.createElement(x, {
					className: S.a.chip,
					key: e.name,
					to: "".concat(y.e).concat(Object(N.f)(e.name), "/")
				}, e.name)));
			var L = e => {
					const t = i()(e.rankings),
						a = e.subreddits && t && e.subreddits[t.id],
						r = "".concat(u.a.assetPath, "/img/leaderboard/banner-background.png"),
						s = a ? a.bannerBackgroundImage || r : void 0,
						n = e.to || e.categoryName && "".concat(y.e).concat(Object(N.f)(e.categoryName) || "", "/");
					return o.a.createElement(h.a, {
						className: e.className,
						contentOnly: !0
					}, o.a.createElement(v, {
						bannerBackgroundImage: s,
						categoryName: e.categoryName,
						onSendEventClick: e.onSendEventClick,
						rankings: e.rankings
					}), o.a.createElement(j, {
						categoryName: e.categoryName,
						large: e.large,
						onSendEventClick: e.onSendEventClick,
						rankings: e.rankings,
						shouldDisplayDelta: !1,
						subreddits: e.subreddits
					}), o.a.createElement(T, {
						categoryName: e.categoryName,
						isSecondaryButton: e.isSecondaryButton,
						onSendEventClick: e.onSendEventClick,
						to: n
					}), e.categories && o.a.createElement(I, {
						categories: e.categories
					}))
				},
				D = a("./src/reddit/components/TrackingHelper/index.tsx"),
				w = a("./src/reddit/contexts/ApiContext.tsx"),
				B = a("./src/reddit/endpoints/subreddit/models.ts"),
				P = a("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				W = a("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts"),
				A = a("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				M = a("./src/reddit/selectors/experiments/upAndComingLeaderboard.ts");

			function R() {
				return (R = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
					}
					return e
				}).apply(this, arguments)
			}
			const H = async (e, t) => {
				const a = await Object(P.a)(e, t);
				if (a && a.ok) {
					const e = a.body,
						t = e && e.data && e.data.subredditLeaderboard;
					return Object(W.c)(t)
				}
			}, F = async e => {
				const t = s()(M.a, 5),
					a = await Object(B.a)(e, {
						names: t
					});
				if (a && a.ok) {
					const e = a.body,
						t = e && e.data && e.data.subredditsInfoByNames;
					return Object(W.a)(t)
				}
			};
			class V extends o.a.Component {
				constructor(e) {
					super(e), this.fetchTopSubreddits = () => {
						const {
							category: e,
							first: t
						} = this.props, a = e && e.id;
						a !== y.l ? (a || a === y.d) && H(this.props.gqlContext(), {
							categoryId: a,
							first: t
						}).then(e => {
							const t = e && e.rankings,
								a = e && e.subreddits,
								r = this.props.category && this.props.category.name || y.a;
							t && a && this.setState(e => Object.assign({}, e, {
								[r]: {
									rankings: t,
									subreddits: a
								}
							}))
						}).catch(e => console.error("Error >>>", e)) : F(this.props.gqlContext()).then(e => {
							if (!e) return;
							const {
								rankings: t,
								subreddits: a
							} = e;
							this.setState(e => Object.assign({}, e, {
								[y.m]: {
									rankings: t,
									subreddits: a
								}
							}))
						})
					}, this.sendEventClick = (e, t, a) => {
						this.props.sendEvent(Object(A.c)(e, t, a)), this.props.onSendEventClick && this.props.onSendEventClick(e, t, a)
					}, this.state = {}
				}
				componentDidMount() {
					this.fetchTopSubreddits()
				}
				componentDidUpdate(e) {
					const t = e.category && e.category.id,
						a = this.props && this.props.category && this.props.category.id,
						r = this.props.category && this.props.category.name;
					t !== a && r && !this.state[r] && this.fetchTopSubreddits()
				}
				render() {
					const e = this.props.category,
						t = e && e.name,
						a = t || y.a,
						r = this.state[a],
						s = r ? r.rankings : [],
						n = r ? r.subreddits : {};
					return o.a.createElement(L, R({
						categoryName: t,
						onSendEventClick: this.sendEventClick,
						rankings: s,
						shouldDisplayDelta: this.props.shouldDisplayDelta,
						subreddits: n
					}, this.props))
				}
			}
			t.a = Object(w.b)(Object(D.b)(V))
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx": function(e, t, a) {
			"use strict";
			a("./node_modules/core-js/modules/es6.regexp.split.js");
			var r = a("./node_modules/react/index.js"),
				s = a.n(r),
				n = a("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = a("./src/lib/classNames/index.ts"),
				d = a("./src/lib/prettyPrintNumber/index.ts"),
				i = a("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				c = a("./src/reddit/components/SubredditIcon/index.tsx"),
				l = a("./src/reddit/i18n/components.tsx"),
				m = e => s.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 10 8",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("g", null, s.a.createElement("path", {
					d: "M4.152 1.3568C4.54367 0.730128 5.45633 0.730129 5.848 1.3568L9.04375 6.47C9.46003 7.13605 8.98119 8 8.19575 8H1.80425C1.01881 8 0.539969 7.13605 0.956249 6.47L4.152 1.3568Z"
				}))),
				u = a("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				g = a.n(u);
			a.d(t, "a", (function() {
				return b
			}));
			const p = e => s.a.createElement(s.a.Fragment, null, s.a.createElement(c.b, {
					className: g.a.subredditIcon,
					subredditOrProfile: e.subreddit
				}), s.a.createElement("span", {
					className: g.a.subredditDetailsContainer
				}, e.large ? s.a.createElement(i.a, {
					subredditName: e.subreddit.name
				}, s.a.createElement("span", {
					className: g.a.regularText
				}, e.subreddit.displayText)) : s.a.createElement("span", {
					className: g.a.regularText
				}, e.subreddit.displayText), null === e.rank && s.a.createElement("span", {
					className: g.a.smallText
				}, s.a.createElement(l.c, null, "This community hasn't been ranked yet.")))),
				b = e => {
					const t = Object(o.a)(g.a.subredditRankItem, e.large && g.a.large),
						a = e.delta && e.delta > 0,
						r = null === e.rank || void 0 === e.rank ? "--" : (e => {
							const t = Object(d.b)(e);
							if (t.length > 3) {
								const e = t.split(".")[0];
								return "".concat(e, "k")
							}
							return t
						})(e.rank + 1),
						i = e.delta ? a ? "#46D160" : "#EA0027" : "transparent";
					return s.a.createElement("li", {
						className: g.a.listItem,
						key: e.subreddit.displayText
					}, s.a.createElement(n.a, {
						className: t,
						onMouseDown: e.onItemClick,
						rel: "noopener",
						target: "_blank",
						to: e.subreddit.url
					}, s.a.createElement("div", {
						className: g.a.subredditRankItemColumn
					}, s.a.createElement("span", {
						className: g.a.rankText
					}, r), s.a.createElement(m, {
						className: Object(o.a)(g.a.arrow, !a && g.a.negative),
						style: {
							fill: i
						}
					}), s.a.createElement(p, {
						large: e.large,
						rank: e.rank,
						subreddit: e.subreddit
					})), e.shouldDisplayDelta && s.a.createElement("span", {
						className: g.a.regularText
					}, e.delta ? Object(d.b)(Math.abs(e.delta)) : 0)))
				}
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return i
			}));
			var r = a("./node_modules/react/index.js"),
				s = a.n(r),
				n = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				d = a.n(o);
			const i = e => s.a.createElement("div", {
				className: Object(n.a)(d.a.placeholderWrapper, e.large && d.a.large)
			}, s.a.createElement("span", {
				className: d.a.subredditIconLoading
			}), s.a.createElement("span", {
				className: d.a.subredditNameLoading
			}))
		},
		"./src/reddit/components/TopSubredditsWidget/index.m.less": function(e, t, a) {
			e.exports = {
				communityBanner: "_2-aCCpAklEV0DkVWrpodjE",
				communityBannerText: "_3t8QC0In-G5By0nAIZqfAZ",
				communityBannerCategoryName: "_3tu4wA7qDe2qAPwXNSHPo8",
				footer: "_3fyECztJ8AQeIuhZWW-tNU",
				linkButton: "_1Q1oKEA1qDipo5Tk0b_YlY",
				categoryPicker: "_1O_evNy72kVXzYqUj80m_n",
				chip: "_3VVeutMKl2leQEGhurm7YN",
				listItem: "_267lcOmg8VvXcoj9O0Q1TB",
				subredditRankItem: "_2ARwkAW45Urhf_fMfAMi5_",
				large: "_3WPeZCt6k7JXmTo4Kcf1vQ",
				regularText: "_3A9bf_kZ6VBA2VBRND5gvf",
				subredditIcon: "_3XIp3RTd4tSLZOvILNQorh",
				delta: "b8PFL61jVtugGDJnIQfBO",
				subredditRankItemColumn: "_2NS1CWm-CUQYu57CmZ05ep",
				subredditDetailsContainer: "_1XUTmupLRN-FTmJ6PQB7kO",
				categoryLink: "_25MytV8CK2IS_fK867Q3qH",
				rankText: "_2B-BDgM13P2SLJX-GZrxHV",
				smallText: "_3BO4rLcAUZY_jK4h2rZj7y",
				arrow: "ztLeQJcDYVKbL9h94QtI_",
				negative: "_3dHwI98vF7PVi8MmZFpeXj",
				communityBannerPlaceholder: "_2-cUhM9bP2B5FPfQsDLJGR",
				glimmer: "NJdRTjquS3Maw_lWbQTkw",
				placeholderWrapper: "_2jtVdXcFC3Ioe3B_hXF5Eh",
				subredditIconLoading: "_1F-hYShaC9dYxEEe3_TCGR",
				subredditNameLoading: "_YedzkdLjjcYoXUE26Cyb"
			}
		},
		"./src/reddit/controls/Chip/index.m.less": function(e, t, a) {
			e.exports = {
				chip: "_3K5j589m2GGg7J3pR96mQf",
				active: "PrkN-68SZ_ce-8V-W4ciS"
			}
		},
		"./src/reddit/helpers/trackers/subredditLeaderboard.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			})), a.d(t, "b", (function() {
				return o
			})), a.d(t, "d", (function() {
				return d
			})), a.d(t, "c", (function() {
				return i
			}));
			var r = a("./src/reddit/constants/categories.tsx"),
				s = a("./src/reddit/selectors/telemetry.ts");
			const n = e => t => Object.assign({}, s.defaults(t), {
					action: "click",
					noun: Object(r.d)(e),
					source: "leaderboard_category"
				}),
				o = (e, t, a) => n => Object.assign({}, s.defaults(n), {
					action: "click",
					noun: e,
					source: "leaderboard_featured_category",
					subreddit: {
						categoryName: Object(r.d)(t),
						name: a && a.toLowerCase()
					}
				}),
				d = (e, t) => a => Object.assign({}, s.defaults(a), {
					action: "click",
					noun: "subreddit",
					source: "leaderboard_subreddit",
					subreddit: {
						categoryName: Object(r.d)(t),
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				i = (e, t, a) => n => Object.assign({}, s.defaults(n), {
					action: "click",
					noun: e,
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(r.d)(t),
						name: a && a.toLowerCase()
					}
				})
		},
		"./src/reddit/pages/SubredditLeaderboard/index.m.less": function(e, t, a) {
			e.exports = {
				SidebarLeft: "_2TB9TZ4gV-vIStjv6ocuVU",
				sidebarLeft: "_2TB9TZ4gV-vIStjv6ocuVU",
				SidebarRight: "_3J5RkbDcTmj01rM7fNcvO7",
				sidebarRight: "_3J5RkbDcTmj01rM7fNcvO7",
				bannerBackground: "_1xtP5WlAH3pNEC6rHXHeXD",
				bannerContentContainer: "_3cH0x5dE0jolJn0db5DqCT",
				bannerHeader: "_2N_HhXeWtDPq6aBy9lSnQK",
				bannerDescription: "_28W4vqZux6r8Ji5kDHIH2g",
				mainContent: "_3GPSAJ3Tfj_PbjPQbBl707",
				mainContentHeader: "HDnd1PwEGlAuS4a0n11JH",
				mainContentHeaderText: "_FryWXes2c2GhZzBHd7Rz",
				mainContentRankChangeText: "NF1HHniDqzG-0fox1nFBs",
				subredditRankingsList: "UGHNtX0DV78XSU_nT_p_l"
			}
		},
		"./src/reddit/pages/SubredditLeaderboard/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var r = a("./node_modules/lodash/shuffle.js"),
				s = a.n(r),
				n = a("./node_modules/react/index.js"),
				o = a.n(n),
				d = a("./node_modules/react-redux/es/index.js"),
				i = a("./node_modules/reselect/es/index.js"),
				c = a("./src/lib/classNames/index.ts"),
				l = a("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				m = a("./src/reddit/components/TrackingHelper/index.tsx"),
				u = a("./src/reddit/constants/experiments.ts"),
				g = a("./src/reddit/constants/subredditLeaderboard.ts"),
				p = a("./src/reddit/contexts/PageLayer/index.tsx"),
				b = a("./src/reddit/helpers/categoryPickerWidget/index.ts"),
				h = a("./src/reddit/helpers/trackers/screenview.ts"),
				y = a("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				E = a("./src/reddit/icons/svgs/Moderate/index.tsx"),
				k = a("./src/reddit/layout/page/Listing/index.tsx"),
				C = a("./src/reddit/i18n/components.tsx"),
				x = a("./src/reddit/pages/SubredditLeaderboard/index.m.less"),
				N = a.n(x);
			const f = () => o.a.createElement("div", {
				className: N.a.bannerBackground
			}, o.a.createElement("div", {
				className: N.a.bannerContentContainer
			}, o.a.createElement("h1", {
				className: N.a.bannerHeader
			}, o.a.createElement(C.c, null, "Today's Top Growing Communities")), o.a.createElement("span", {
				className: N.a.bannerDescription
			}, o.a.createElement(C.c, null, "Browse Reddit's top growing communities. Find the top communities in your favorite category."))));
			var _ = a("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				S = a("./node_modules/lodash/last.js"),
				v = a.n(S),
				j = a("./node_modules/lodash/times.js"),
				O = a.n(j),
				T = a("./node_modules/lodash/upperFirst.js"),
				I = a.n(T),
				L = a("./src/reddit/actions/pages/subredditLeaderboard.ts"),
				D = a("./src/reddit/actions/subreddit/topSubreddits.ts"),
				w = a("./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx"),
				B = a("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				P = a("./src/reddit/selectors/subreddit.ts"),
				W = a("./src/reddit/selectors/subredditLeaderboard.ts"),
				A = a("./src/reddit/selectors/user.ts");
			const M = 25,
				R = .5,
				H = Object(i.c)({
					hasPreviousPage: (e, t) => {
						let {
							categoryId: a
						} = t;
						return Object(W.c)(e, a)
					},
					hasNextPage: (e, t) => {
						let {
							categoryId: a
						} = t;
						return Object(W.b)(e, a)
					},
					isMod: A.H,
					rankings: (e, t) => {
						let {
							categoryId: a
						} = t;
						return Object(P.K)(e, a)
					},
					subreddits: P.V
				}),
				F = Object(d.b)(H, e => ({
					fetchMoreSubreddits: (t, a) => e(Object(D.a)(t, a))
				}));
			class V extends o.a.Component {
				constructor() {
					super(...arguments), this.fetchMoreSubreddits = e => {
						const t = this.makeFetchVariables(),
							a = this.makeCategoryRankingsKey();
						e.isIntersecting && t.after && this.props.fetchMoreSubreddits(t, a)
					}, this.sendLeaderboardSubredditEventClick = e => this.props.sendEvent(Object(y.d)(e, this.props.categoryName || g.c)), this.renderSubredditRankItemPlaceholders = () => o.a.createElement(o.a.Fragment, null, O()(5, e => o.a.createElement(B.a, {
						key: e,
						large: !0
					}))), this.renderSubredditRankItems = e => this.props.rankings.map(t => {
						const a = this.props.subreddits[t.id];
						return o.a.createElement(w.a, {
							delta: t.rankDelta,
							key: a.id,
							large: !0,
							onItemClick: () => this.sendLeaderboardSubredditEventClick(a),
							rank: t.rank,
							shouldDisplayDelta: e,
							subreddit: a
						})
					})
				}
				makeFetchVariables() {
					const {
						categoryId: e,
						categoryName: t,
						isMod: a,
						rankings: r
					} = this.props, s = v()(r), n = s && s.cursor, o = Object(L.a)(t, a);
					return {
						after: n,
						categoryId: e === g.a ? g.d : e,
						first: M,
						isOnlyModIncluded: o
					}
				}
				makeCategoryRankingsKey() {
					const {
						categoryId: e,
						categoryName: t
					} = this.props;
					return Object(W.d)(e, t === g.h, t === g.m)
				}
				render() {
					const {
						categoryName: e,
						hasNextPage: t,
						hasPreviousPage: a,
						isMod: r,
						rankings: s
					} = this.props, n = t || a, d = e === g.m, i = r && !d;
					return o.a.createElement("div", {
						className: N.a.mainContent
					}, o.a.createElement("div", {
						className: N.a.mainContentHeader
					}, o.a.createElement("h2", null, o.a.createElement("span", {
						className: N.a.mainContentHeaderText
					}, e ? d ? o.a.createElement(C.c, null, "Up-and-coming Communities") : o.a.createElement(C.c, null, "Today's Top Growing in ", o.a.createElement(C.b, {
						name: "categoryName"
					}, I()(e))) : o.a.createElement(C.c, null, "Today's Top Growing Communities"))), i && o.a.createElement("span", {
						className: N.a.mainContentRankChangeText
					}, o.a.createElement(C.c, null, "Rank Change"))), o.a.createElement("ol", {
						className: N.a.subredditRankingsList
					}, s ? this.renderSubredditRankItems(i) : this.renderSubredditRankItemPlaceholders(), n && o.a.createElement(_.a, {
						onChange: this.fetchMoreSubreddits,
						threshold: R,
						rootMargin: "0px 0px 0px 0px"
					}, o.a.createElement("li", null, o.a.createElement(B.a, {
						large: !0
					})))))
				}
			}
			var U = Object(m.b)(F(V)),
				Z = a("./node_modules/react-router-dom/esm/react-router-dom.js"),
				Q = a("./src/reddit/components/CategoryPickerWidget/index.m.less"),
				Y = a.n(Q);

			function K() {
				return (K = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
					}
					return e
				}).apply(this, arguments)
			}
			const G = e => {
				const {
					category: t,
					children: a,
					className: r,
					isActive: s,
					tabIndex: n
				} = e, d = Object(c.a)(Y.a.categoryLink, s && Y.a.active, r);
				return o.a.createElement("li", null, o.a.createElement(Z.a, K({}, t.anchorProps, {
					className: d,
					"data-active": s,
					onMouseDown: () => e.onSendEventClick(t.name),
					tabIndex: n,
					to: t.path || ""
				}), o.a.createElement(C.c, null, a, t.customIcon)))
			};
			var q = a("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				X = a("./src/reddit/controls/Button/index.tsx"),
				J = a("./src/reddit/helpers/name/index.ts");
			const z = 36;
			class $ extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isExpanded: !1
					}, this.shouldAutoExpand = () => {
						const {
							categories: e,
							currentCategoryName: t,
							initialNumberOfCategories: a
						} = this.props, {
							isExpanded: r
						} = this.state;
						if (!t || r || !a) return;
						return a < e.findIndex(e => e.name === t) + 1
					}, this.toggleExpanded = () => {
						this.setState(e => ({
							isExpanded: !e.isExpanded
						}), this.props.onMoreLessClick)
					}
				}
				componentDidMount() {
					this.shouldAutoExpand() && this.toggleExpanded()
				}
				componentDidUpdate() {
					this.shouldAutoExpand() && this.toggleExpanded()
				}
				renderCategoryList() {
					const {
						categories: e,
						categoryItemClassName: t,
						categoryItemHeight: a = z,
						categoryListContainerClassName: r,
						children: s,
						childrenOffset: n = 0,
						currentCategoryName: d,
						initialNumberOfCategories: i,
						onItemClick: l
					} = this.props, {
						isExpanded: m
					} = this.state, u = !m && i && a * i, g = n + (e ? a * e.length : 0), p = Object(c.a)(Y.a.categoryList, m && Y.a.expanded), b = e => !(!d || d !== Object(J.f)(e)), h = o.a.createElement("ul", {
						className: p,
						style: {
							height: u || g
						}
					}, s, e && e.map((e, r) => {
						const s = n + r * a;
						return o.a.createElement(G, {
							category: e,
							className: t,
							isActive: b(e.name),
							key: e.id,
							onSendEventClick: l,
							tabIndex: u && s >= u ? -1 : 0
						}, e.name)
					}));
					return o.a.createElement("div", {
						className: Object(c.a)(Y.a.categoryListContainer, r)
					}, h)
				}
				render() {
					const {
						buttonClassName: e,
						buttonText: t = "Show",
						categories: a,
						className: r,
						header: s,
						headerClassName: n,
						initialNumberOfCategories: d
					} = this.props, i = a && d && a.length > d, l = i && !this.state.isExpanded ? "".concat(t, " More") : "".concat(t, " Less"), m = Object(c.a)(r, Y.a.container);
					return o.a.createElement(q.a, {
						className: m,
						contentOnly: !0
					}, o.a.createElement("div", {
						className: Object(c.a)(Y.a.header, n)
					}, o.a.createElement("h2", null, s || o.a.createElement(C.c, null, "Categories"))), this.renderCategoryList(), i && o.a.createElement(X.n, {
						className: Object(c.a)(Y.a.button, e),
						onClick: this.toggleExpanded
					}, o.a.createElement(C.c, null, l)))
				}
			}
			var ee = $,
				te = a("./src/lib/lessComponent.tsx"),
				ae = a("./src/reddit/components/CommunitiesDirectoryWidget/index.m.less"),
				re = a.n(ae);
			const se = te.a.a("Link", re.a),
				ne = e => {
					const t = "#" === e ? "0" : e.toLowerCase();
					return o.a.createElement(se, {
						href: "/subreddits/".concat(t, "-1"),
						key: e
					}, e)
				};
			var oe = e => o.a.createElement(q.a, {
					className: re.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, o.a.createElement("div", {
					className: re.a.Title
				}, o.a.createElement(C.c, null, "Browse Communities A-Z")), o.a.createElement("div", {
					className: re.a.LinkContainer
				}, Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ#").map(ne))),
				de = a("./src/reddit/components/SidebarContainer/index.tsx"),
				ie = a("./src/reddit/components/SidebarSpacer/index.tsx"),
				ce = a("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				le = a("./src/reddit/components/TopSubredditsWidget/Container.tsx");
			const me = e => {
					const t = e.categoryName && Object(J.f)(e.categoryName);
					return o.a.createElement("div", {
						className: N.a.SidebarLeft
					}, o.a.createElement(de.a, null, o.a.createElement(ee, {
						categories: e.categories,
						currentCategoryName: t,
						initialNumberOfCategories: 12,
						onItemClick: e.onSendEventClick
					})))
				},
				ue = e => {
					const t = e.widgetCategories[0],
						a = e.widgetCategories[1];
					return o.a.createElement("div", {
						className: N.a.SidebarRight
					}, o.a.createElement(de.a, null, o.a.createElement(le.a, {
						category: t,
						first: 5,
						isSecondaryButton: !0,
						onSendEventClick: e.onSendEventClick
					}), o.a.createElement(ie.a, null), o.a.createElement(ce.a, null, o.a.createElement(le.a, {
						category: a,
						className: N.a.stickyWidget,
						first: 5,
						isSecondaryButton: !0,
						onSendEventClick: e.onSendEventClick
					}), o.a.createElement(oe, null))))
				};
			var ge = a("./src/reddit/selectors/category.ts"),
				pe = a("./src/reddit/selectors/experiments/upAndComingLeaderboard.ts"),
				be = a("./src/reddit/selectors/moderatorPermissions.ts");
			const he = Object(p.t)(),
				ye = (e, t) => {
					let {
						match: a
					} = t;
					return Object(b.b)(a.params.categoryName || "")
				},
				Ee = Object(u.Mb)(g.f),
				ke = Object(i.c)({
					categories: e => Object(ge.c)(e, {
						categoriesOrder: Ee
					}),
					categoryId: (e, t) => {
						const a = ye(0, t);
						return a === g.m ? g.l : a ? e.categories.nameToId[a] : g.a
					},
					categoryName: ye,
					isMod: be.h,
					isUpAndComingExperiment: pe.b
				}),
				Ce = Object(d.b)(ke),
				xe = {
					id: g.a,
					name: g.b,
					path: g.e
				},
				Ne = {
					customIcon: o.a.createElement(E.a, null),
					id: g.g,
					name: g.h
				};
			class fe extends o.a.Component {
				constructor(e) {
					super(e), this.getWidgetCategories = () => {
						const {
							categories: e
						} = this.props, t = e.filter(this.filterActiveCategory);
						return s()(t).slice(0, 2)
					}, this.updateWidgetCategories = e => {
						const {
							categories: t,
							categoryName: a
						} = this.props;
						if (e.categoryName !== a || e.categories.length !== t.length) {
							const e = this.getWidgetCategories();
							this.setWidgetCategories(e)
						}
					}, this.setWidgetCategories = e => this.setState({
						widgetCategories: e
					}), this.filterCategories = e => this.filterActiveCategory(e), this.filterActiveCategory = e => e.name !== this.props.categoryName, this.resetScrollPosition = () => {
						window.scrollTo(0, 0)
					}, this.sendCategoryWidgetEventClick = e => this.props.sendEvent(Object(y.a)(e)), this.sendFeaturedCategoryEventClick = (e, t, a) => this.props.sendEvent(Object(y.b)(e, t, a)), this.state = {
						widgetCategories: []
					}
				}
				componentDidMount() {
					const e = this.getWidgetCategories();
					this.setWidgetCategories(e), this.props.sendEvent(Object(h.c)())
				}
				componentDidUpdate(e) {
					this.resetScrollPosition(), this.updateWidgetCategories(e)
				}
				render() {
					const {
						className: e,
						isMod: t,
						isUpAndComingExperiment: a
					} = this.props, r = [xe, ...a ? [g.k] : [], ...this.props.categories];
					t && r.unshift(Ne);
					const s = Object(b.a)(g.e, r),
						n = t && this.props.categoryName === g.h,
						d = this.props.categoryId ? this.props.categoryName : n ? g.h : void 0,
						i = this.props.categoryId ? this.props.categoryId : n ? g.g : g.a;
					return o.a.createElement(l.a, null, o.a.createElement(k.a, {
						className: Object(c.a)(e, N.a.mainContent),
						content: o.a.createElement(U, {
							categoryId: i,
							categoryName: d
						}),
						disableFullscreen: !0,
						navBar: o.a.createElement(f, null),
						sidebars: [o.a.createElement(me, {
							categories: s,
							categoryName: d || g.b,
							onSendEventClick: this.sendCategoryWidgetEventClick
						}), o.a.createElement(ue, {
							widgetCategories: this.state.widgetCategories,
							onSendEventClick: this.sendFeaturedCategoryEventClick
						})]
					}))
				}
			}
			t.default = he(Ce(Object(m.b)(fe)))
		}
	}
]);
//# sourceMappingURL=SubredditLeaderboard.7411f09d61616ae69cc6.js.map