// https://www.redditstatic.com/desktop2x/CreatorStats.abbe8ef31e6009b74fd3.js
// Retrieved at 11/11/2021, 3:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CreatorStats"], {
		"./src/reddit/components/CreatorStats/Stats.tsx": function(t, e, s) {
			"use strict";
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s.n(a),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/lib/constants/icons.ts"),
				l = s("./src/lib/hooks/useTooltip.ts"),
				c = s("./src/lib/prettyPrintNumber/index.ts"),
				d = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				u = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				m = s("./src/reddit/icons/fonts/index.tsx"),
				p = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				b = s("./src/reddit/components/CreatorStats/index.m.less"),
				h = s.n(b);

			function f() {
				return (f = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var s = arguments[e];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (t[a] = s[a])
					}
					return t
				}).apply(this, arguments)
			}
			const v = Object(p.a)({
					resolved: {},
					chunkName: () => "ViewsTooltip",
					isReady(t) {
						const e = this.resolve(t);
						return !1 !== this.resolved[e] && !!s.m[e]
					},
					importAsync: () => Promise.all([s.e("vendors~ModStatsChart~Settings~ViewsTooltip"), s.e("vendors~ModStatsChart~ViewsTooltip"), s.e("ViewsTooltip")]).then(s.bind(null, "./src/reddit/components/CreatorStats/ViewsTooltip.tsx")),
					requireAsync(t) {
						const e = this.resolve(t);
						return this.resolved[e] = !1, this.importAsync(t).then(t => (this.resolved[e] = !0, t))
					},
					requireSync(t) {
						const e = this.resolve(t);
						return s(e)
					},
					resolve() {
						return "./src/reddit/components/CreatorStats/ViewsTooltip.tsx"
					}
				}, {
					ssr: !1
				}),
				_ = {
					placement: "top-start",
					modifiers: [{
						name: "offset",
						options: {
							offset: [50, 10]
						}
					}]
				},
				S = ({
					statNumber: t,
					iconName: e,
					statDescription: s,
					tooltipTitleText: a,
					tooltipDescriptionText: o
				}) => {
					const r = Object(u.a)();
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: h.a.singleStat,
						onMouseEnter: r.show,
						onMouseLeave: r.hide,
						ref: r.target.ref
					}, n.a.createElement("div", {
						className: h.a.statNumber
					}, t), n.a.createElement("div", {
						className: h.a.statDescription
					}, n.a.createElement(m.a, {
						name: e,
						className: h.a.icon
					}), s)), n.a.createElement(d.a, f({}, r, {
						className: h.a.hoverTooltip
					}), n.a.createElement("div", {
						className: h.a.tooltipTitle
					}, a), n.a.createElement("div", {
						className: h.a.tooltipDescription
					}, o)))
				},
				E = ({
					statNumber: t,
					iconName: e,
					statDescription: s,
					totalCount: a,
					lastHourCount: o
				}) => {
					const i = Object(l.b)(_),
						c = i.visible,
						u = Object(r.useRef)();
					return Object(r.useEffect)(() => {
						const t = () => {
								c && i.hide()
							},
							e = t => {
								c && u.current && !u.current.contains(t.target) && i.hide()
							};
						return document.addEventListener("mousedown", e), document[c ? "addEventListener" : "removeEventListener"]("scroll", t), () => {
							document.removeEventListener("mousedown", e), document.removeEventListener("scroll", t)
						}
					}, [c, i, u]), n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: h.a.totalViewsStat,
						onClick: i.toggle,
						ref: i.target.ref
					}, n.a.createElement("div", {
						className: h.a.statNumber
					}, t), n.a.createElement("div", {
						className: h.a.statDescription
					}, n.a.createElement(m.a, {
						name: e,
						className: h.a.icon
					}), s)), n.a.createElement("div", {
						ref: u
					}, n.a.createElement(d.a, f({}, i, {
						className: `${h.a.hoverTooltip} ${h.a.statsTooltip}`
					}), n.a.createElement(v, {
						totalCount: a,
						lastHourCount: o
					}))))
				},
				k = t => {
					var e, s;
					return n.a.createElement("div", {
						className: h.a.statsContainer
					}, (null === (e = t.postStats.viewCountTotals) || void 0 === e ? void 0 : e.totalCount) && n.a.createElement(E, {
						statNumber: Object(c.b)(t.postStats.viewCountTotals.totalCount),
						statDescription: a.fbt._("Total Views", null, {
							hk: "2xi7om"
						}),
						iconName: i.a.show,
						totalCount: t.postStats.viewCountTotals.totalCount,
						lastHourCount: 3
					}), t.upvoteRatio && n.a.createElement(S, {
						statNumber: `${Math.round(100*t.upvoteRatio).toString()}%`,
						statDescription: a.fbt._("Upvote Rate", null, {
							hk: "1lDa0E"
						}),
						iconName: i.a.upvote,
						tooltipTitleText: a.fbt._("Upvote rate", null, {
							hk: "341cRk"
						}),
						tooltipDescriptionText: a.fbt._("Ratio between number of upvotes and downvotes on this post", null, {
							hk: "XMWKv"
						})
					}), null != t.subredditKarma && n.a.createElement(S, {
						statNumber: t.isUserOp ? Object(c.b)(t.subredditKarma) : "N/A",
						statDescription: a.fbt._("Community Karma", null, {
							hk: "2iy1C6"
						}),
						iconName: i.a.karma,
						tooltipTitleText: a.fbt._("Community Karma", null, {
							hk: "3Rh5OO"
						}),
						tooltipDescriptionText: t.isUserOp ? a.fbt._("Total amount of karma you’ve earned in this community", null, {
							hk: "14lTnt"
						}) : a.fbt._("Available only for the author of the post", null, {
							hk: "4yp5u7"
						})
					}), null != (null === (s = t.postStats.shareCountTotals) || void 0 === s ? void 0 : s.totalCount) && n.a.createElement(S, {
						statNumber: t.postStats.shareCountTotals.totalCount,
						statDescription: a.fbt._("Total Shares", null, {
							hk: "3dSwgg"
						}),
						iconName: i.a.share_ios,
						tooltipTitleText: a.fbt._("Total Shares", null, {
							hk: "EtOSY"
						}),
						tooltipDescriptionText: a.fbt._("Total number of times this post was shared", null, {
							hk: "4D7ogp"
						})
					}))
				};
			e.a = k
		},
		"./src/reddit/components/CreatorStats/index.m.less": function(t, e, s) {
			t.exports = {
				container: "_25QUf-LgSKaPBLrEIkabN-",
				titleContainer: "_2wE4rmi1kNP5pg2G30ujUH",
				title: "Lquv-leHQsbcKtuQ0KPWS",
				subtitle: "TAyCHeyBvqdENHYHpUsol",
				linkText: "_1inj2DsmNMwZAexztXN5qZ",
				statsContainer: "_3JBuW0fm4kU1I2YWyAoz8m",
				singleStat: "_1Lg8Swn7dBvW0nGqe1otwk",
				totalViewsStat: "ZDinoMt3pD1VnANU6M0bN",
				statNumber: "_1GYxwGvUImaYeMVNkdJD0d",
				statDescription: "_2XjmeZtC-BE7IBe1Iu36Xa",
				icon: "jL0CE0RprIm7WxeOUkQkX",
				hoverTooltip: "_1KsB3T19iQkJhr_UZ95Rof",
				tooltipTitle: "a-6WyjSpEmnkXxyVj87gS",
				tooltipDescription: "BK2NIA3409dVm0CnrnjQs",
				shareMenu: "u03ABNdo3ClgDN2Y4Ba3b",
				statsTooltip: "_2Zqhcli4RtiO2wyqEFhFZM",
				barContainerStats: "_2JeD7-qN9EwOaDAcPDL9Lv",
				graphTitle: "_1gkjyxhlOk1GEtZXCEde3F",
				graphSingleStat: "_1rOgl_jjymF6FfcuxW-KZi",
				copyContainer: "_2V0Q97053umYYAxiUkv7pf",
				copyHeader: "_1rPCa40fNA-7k7J_Jt0nhN",
				copyDescription: "_1mAGUVZcZI_Wz1531h-_gq",
				copyAwardIcon: "_2UiqSAy7HEITuZQwrosHEL"
			}
		},
		"./src/reddit/components/CreatorStats/index.tsx": function(t, e, s) {
			"use strict";
			s.r(e);
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/humanizeDate/index.ts"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/reddit/components/CreatorStats/helpers.ts"),
				d = s("./src/lib/makeGqlRequest/index.ts"),
				u = s("./src/redditGQL/operations/CreatorStats.json");
			var m = s("./src/reddit/selectors/creatorStats.ts"),
				p = s("./src/reddit/selectors/experiments/creatorStats.ts"),
				b = s("./src/reddit/actions/creatorStats/constants.ts"),
				h = s("./src/lib/initializeClient/installReducer.ts"),
				f = s("./src/reddit/reducers/features/creatorStats/index.ts");
			Object(h.a)({
				features: {
					creatorStats: f.a
				}
			});
			const v = Object(l.a)(b.b),
				_ = Object(l.a)(b.a),
				S = ({
					postId: t,
					subredditId: e
				}) => async (s, a, {
					gqlContext: o
				}) => {
					var r, n;
					const i = a();
					if (!Object(p.a)(i, t)) return;
					if (!Object(m.a)(i, t)) return;
					const l = i.posts.models[t];
					if (!(l && Object(c.d)(l.created))) return;
					if (null === (n = null === (r = a().features) || void 0 === r ? void 0 : r.creatorStats) || void 0 === n ? void 0 : n.postStats[t]) return;
					s(v());
					const b = await (async (t, e) => {
						return await Object(d.a)(t, {
							...u,
							variables: e
						})
					})(o(), {
						postId: t,
						subredditId: e
					});
					if (b.ok && b.body) {
						const {
							data: t
						} = b.body, e = (t => {
							const e = {},
								s = {},
								{
									postStatsById: a,
									subredditInfoById: o
								} = t;
							if (!a) return;
							const {
								id: r
							} = a;
							return e[r] = a, o && "id" in o && (s[o.id] = o), {
								postStats: e,
								subredditKarma: s
							}
						})(t);
						e && s(_(e))
					}
				};
			var E = s("./src/reddit/components/ShareMenu/index.tsx"),
				k = s("./src/reddit/constants/tracking.ts"),
				N = s("./src/reddit/selectors/telemetry.ts");
			var C = s("./src/reddit/hooks/useTracking.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/CreatorStats/index.m.less"),
				T = s.n(j),
				y = s("./src/reddit/components/CreatorStats/Stats.tsx");
			e.default = t => {
				const e = Object(C.a)(),
					s = Object(i.d)();
				Object(r.useEffect)(() => {
					s(S({
						postId: t.post.id,
						subredditId: t.subreddit.id
					}))
				}, [t.post.id, t.subreddit.id, s]);
				const l = Object(i.e)(e => Object(m.b)(e, t.post.id)),
					d = Object(c.c)(t.post, l),
					u = Object(i.e)(e => Object(m.c)(e, t.subreddit.id)),
					p = Object(i.e)(e => Object(O.qb)(e, {
						postId: t.post.id
					}));
				return Object(r.useEffect)(() => {
					d === c.b.Available && e((t => e => ({
						...Object(N.defaults)(e),
						action: k.c.VIEW,
						noun: "aggregate_stats",
						source: "creator_stats",
						subreddit: Object(N.subreddit)(e),
						post: Object(N.post)(e, t),
						userSubreddit: Object(N.userSubreddit)(e)
					}))(t.post.id))
				}, [e, t.post.id, d]), n.a.createElement("div", {
					className: T.a.container
				}, n.a.createElement("div", {
					className: T.a.titleContainer
				}, n.a.createElement("div", {
					className: T.a.title
				}, a.fbt._("Post Insights", null, {
					hk: "3ZuB9z"
				})), n.a.createElement("div", {
					className: T.a.subtitle
				}, ((t, e, s, r, i) => {
					switch (t) {
						case c.b.NotAvailableYet:
							return n.a.createElement(n.a.Fragment, null, a.fbt._("Check back later to see views, shares, and more.", null, {
								hk: "4rItwf"
							}), " ", r ? a.fbt._("{=Share your post} to spread the word!", [a.fbt._param("=Share your post", n.a.createElement(E.a, {
								className: T.a.shareMenu,
								dropdownId: "share-menu-creator-stats",
								permalink: e.permalink,
								post: e,
								sendEventWithName: i,
								subredditType: s.type
							}, a.fbt._("{=Share your post}", [a.fbt._param("=Share your post", n.a.createElement("button", {
								className: T.a.linkText
							}, a.fbt._("Share your post", null, {
								hk: "4afsjM"
							})))], {
								hk: "1YHWPm"
							})))], {
								hk: "1pr8Cr"
							}) : a.fbt._("{=Share this post} to spread the word!", [a.fbt._param("=Share this post", n.a.createElement(E.a, {
								className: T.a.shareMenu,
								dropdownId: "share-menu-creator-stats",
								permalink: e.permalink,
								post: e,
								sendEventWithName: i,
								subredditType: s.type
							}, a.fbt._("{=Share this post}", [a.fbt._param("=Share this post", n.a.createElement("button", {
								className: T.a.linkText
							}, a.fbt._("Share this post", null, {
								hk: "xuWdX"
							})))], {
								hk: "16u8Oe"
							})))], {
								hk: "37kpnP"
							}));
						case c.b.NotAvailable:
							return n.a.createElement(n.a.Fragment, null, a.fbt._("Insights are only available for posts created after {date} .", [a.fbt._param("date", Object(o.a)(c.a / 1e3, {
								showDay: !0
							}))], {
								hk: "4qfr48"
							}), r && a.fbt._("{=Create a new post} to see how it performs!", [a.fbt._param("=Create a new post", n.a.createElement("a", {
								href: `/r/${s.name}/submit`,
								className: T.a.linkText
							}, a.fbt._("Create a new post", null, {
								hk: "OR9Dg"
							})))], {
								hk: "CDLiL"
							}));
						case c.b.Available:
							return r ? a.fbt._("Only you and mods of this community can see this", null, {
								hk: "1w08e1"
							}) : a.fbt._("Only the author of the post and mods can see this", null, {
								hk: "4Gwpc4"
							});
						default:
							return ""
					}
				})(d, t.post, t.subreddit, p, s => e(((t, e) => s => ({
					...Object(N.defaults)(s),
					action: k.c.CLICK,
					noun: t,
					source: "creator_stats",
					post: Object(N.post)(s, e),
					subreddit: Object(N.subreddit)(s),
					userSubreddit: Object(N.userSubreddit)(s)
				}))(s, t.post.id))))), d === c.b.Available && l && n.a.createElement(y.a, {
					isUserOp: p,
					upvoteRatio: t.post.upvoteRatio || void 0,
					postStats: l,
					subredditKarma: u
				}))
			}
		},
		"./src/redditGQL/operations/CreatorStats.json": function(t) {
			t.exports = JSON.parse('{"id":"b3a25d285bff"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CreatorStats.abbe8ef31e6009b74fd3.js.map