// https://www.redditstatic.com/desktop2x/CreatorStats.4008a5b726ca971ab085.js
// Retrieved at 1/26/2022, 2:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CreatorStats"], {
		"./src/reddit/components/CreatorStats/Stats.tsx": function(t, e, a) {
			"use strict";
			var s = a("./node_modules/fbt/lib/FbtPublic.js"),
				o = a.n(s),
				r = a("./node_modules/react/index.js"),
				n = a.n(r),
				i = a("./src/lib/classNames/index.ts"),
				l = a("./src/lib/constants/icons.ts"),
				c = a("./src/lib/hooks/useTooltip.ts"),
				d = a("./src/lib/prettyPrintNumber/index.ts"),
				u = a("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				m = a("./src/reddit/hooks/useInfoTextTooltip.ts"),
				b = a("./src/reddit/icons/fonts/index.tsx"),
				p = a("./node_modules/@loadable/component/dist/loadable.esm.js"),
				h = a("./src/reddit/components/CreatorStats/index.m.less"),
				f = a.n(h);

			function v() {
				return (v = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var a = arguments[e];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (t[s] = a[s])
					}
					return t
				}).apply(this, arguments)
			}
			const _ = Object(p.a)({
					resolved: {},
					chunkName: () => "ViewsTooltip",
					isReady(t) {
						const e = this.resolve(t);
						return !1 !== this.resolved[e] && !!a.m[e]
					},
					importAsync: () => Promise.all([a.e("vendors~ModStatsChart~Settings~ViewsTooltip"), a.e("vendors~ModStatsChart~ViewsTooltip"), a.e("ViewsTooltip")]).then(a.bind(null, "./src/reddit/components/CreatorStats/ViewsTooltip.tsx")),
					requireAsync(t) {
						const e = this.resolve(t);
						return this.resolved[e] = !1, this.importAsync(t).then(t => (this.resolved[e] = !0, t))
					},
					requireSync(t) {
						const e = this.resolve(t);
						return a(e)
					},
					resolve() {
						return "./src/reddit/components/CreatorStats/ViewsTooltip.tsx"
					}
				}, {
					ssr: !1
				}),
				C = {
					placement: "top-start",
					modifiers: [{
						name: "offset",
						options: {
							offset: [50, -2]
						}
					}]
				},
				S = ({
					className: t,
					hoverTooltip: e,
					statNumber: a,
					statNumberIconName: s,
					statDescription: o,
					iconName: r,
					tooltipClassName: l,
					tooltipTitleText: c,
					tooltipDescriptionText: d,
					tooltipExtra: m
				}) => n.a.createElement("div", {
					className: Object(i.a)(f.a.singleStat, t),
					onMouseEnter: e && e.show,
					onMouseLeave: e && e.hide,
					ref: e && e.target.ref
				}, n.a.createElement("div", {
					className: f.a.statNumber
				}, a, s && n.a.createElement(b.a, {
					name: s,
					className: f.a.statNumberIcon
				})), n.a.createElement("div", {
					className: f.a.statDescription
				}, r && n.a.createElement(b.a, {
					name: r,
					className: f.a.icon
				}), o), e && n.a.createElement(u.a, v({}, e, {
					className: Object(i.a)(f.a.hoverTooltip, l)
				}), c && n.a.createElement("div", {
					className: f.a.tooltipTitle
				}, c), d && n.a.createElement("div", {
					className: f.a.tooltipDescription
				}, d), m)),
				N = ({
					leftStatNumber: t,
					leftStatDescription: e,
					rightStatNumber: a,
					rightStatDescription: s
				}) => n.a.createElement("div", {
					className: f.a.twoColumnContainer
				}, n.a.createElement(S, {
					className: f.a.twoColumnSingleStat,
					statNumber: t,
					statDescription: e
				}), n.a.createElement(S, {
					className: f.a.twoColumnSingleStat,
					statNumber: a,
					statDescription: s
				})),
				O = t => {
					var e, a, o, r;
					const i = Object(c.b)(C),
						u = Object(m.a)();
					return n.a.createElement("div", {
						className: f.a.statsContainer
					}, (null === (e = t.postStats.viewCountTotals) || void 0 === e ? void 0 : e.totalCount) && n.a.createElement(S, {
						hoverTooltip: i,
						statNumber: Object(d.b)(t.postStats.viewCountTotals.totalCount),
						statNumberIconName: l.a.statistics_fill,
						statDescription: s.fbt._("Total Views", null, {
							hk: "2xi7om"
						}),
						iconName: l.a.show,
						tooltipClassName: f.a.statsTooltip,
						tooltipExtra: n.a.createElement(_, {
							totalCount: t.postStats.viewCountTotals.totalCount,
							viewsData: (null === (a = t.postStats.viewCountTrends) || void 0 === a ? void 0 : a.data) || []
						})
					}), n.a.createElement(S, {
						hoverTooltip: Object(m.a)(),
						statNumber: void 0 !== t.upvoteRatio ? `${Math.round(100*t.upvoteRatio).toString()}%` : "N/A",
						statDescription: s.fbt._("Upvote Rate", null, {
							hk: "1lDa0E"
						}),
						iconName: l.a.upvote,
						tooltipTitleText: s.fbt._("Upvote rate", null, {
							hk: "341cRk"
						}),
						tooltipDescriptionText: s.fbt._("Ratio between number of upvotes and downvotes on this post", null, {
							hk: "XMWKv"
						})
					}), n.a.createElement(S, {
						hoverTooltip: Object(m.a)(),
						statNumber: void 0 !== t.subredditKarma && t.isUserOp ? Object(d.b)(t.subredditKarma.fromComments + t.subredditKarma.fromPosts) : "N/A",
						statDescription: s.fbt._("Community Karma", null, {
							hk: "2iy1C6"
						}),
						iconName: l.a.karma,
						tooltipTitleText: s.fbt._("Community Karma", null, {
							hk: "3Rh5OO"
						}),
						tooltipDescriptionText: t.isUserOp ? s.fbt._("Total amount of karma you’ve earned in this community", null, {
							hk: "14lTnt"
						}) : s.fbt._("Available only for the author of the post", null, {
							hk: "4yp5u7"
						}),
						tooltipExtra: n.a.createElement(N, {
							leftStatNumber: void 0 !== t.subredditKarma && t.isUserOp ? Object(d.b)(t.subredditKarma.fromComments) : "N/A",
							leftStatDescription: s.fbt._("Comment karma", null, {
								hk: "3GKYzp"
							}),
							rightStatNumber: null != t.subredditKarma && t.isUserOp ? Object(d.b)(t.subredditKarma.fromPosts) : "N/A",
							rightStatDescription: s.fbt._("Post karma", null, {
								hk: "24aVld"
							})
						})
					}), null != (null === (o = t.postStats.shareAllCountTotals) || void 0 === o ? void 0 : o.totalCount) && null != (null === (r = t.postStats.shareCopyCountTotals) || void 0 === r ? void 0 : r.totalCount) && n.a.createElement(S, {
						hoverTooltip: u,
						statNumber: Object(d.b)(t.postStats.shareAllCountTotals.totalCount),
						statDescription: s.fbt._("Total Shares", null, {
							hk: "3dSwgg"
						}),
						iconName: l.a.share_ios,
						tooltipTitleText: s.fbt._({
							"*": "This post was shared {number} times",
							_1: "This post was shared 1 time"
						}, [s.fbt._plural(parseInt(Object(d.b)(t.postStats.shareAllCountTotals.totalCount)), "number")], {
							hk: "1KGD5P"
						}),
						tooltipExtra: n.a.createElement(N, {
							leftStatNumber: Object(d.b)(t.numCrossposts),
							leftStatDescription: s.fbt._("Communities", null, {
								hk: "5VCd3"
							}),
							rightStatNumber: Object(d.b)(t.postStats.shareCopyCountTotals.totalCount),
							rightStatDescription: s.fbt._("Link copies", null, {
								hk: "49c1jO"
							})
						})
					}))
				};
			e.a = O
		},
		"./src/reddit/components/CreatorStats/index.m.less": function(t, e, a) {
			t.exports = {
				container: "_25QUf-LgSKaPBLrEIkabN-",
				titleContainer: "_2wE4rmi1kNP5pg2G30ujUH",
				title: "Lquv-leHQsbcKtuQ0KPWS",
				subtitle: "TAyCHeyBvqdENHYHpUsol",
				linkText: "_1inj2DsmNMwZAexztXN5qZ",
				statsContainer: "_3JBuW0fm4kU1I2YWyAoz8m",
				twoColumnContainer: "_1JsL7Lj14kxSmlQd1ooXC_",
				twoColumnSingleStat: "_1jkkbc7YiGTtfbVorhY5m2",
				singleStat: "_1Lg8Swn7dBvW0nGqe1otwk",
				statNumber: "_1GYxwGvUImaYeMVNkdJD0d",
				statNumberIcon: "_2-UOXnaDoBiPk5c5k4H6Ql",
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
		"./src/reddit/components/CreatorStats/index.tsx": function(t, e, a) {
			"use strict";
			a.r(e);
			var s = a("./node_modules/fbt/lib/FbtPublic.js"),
				o = a("./src/lib/humanizeDate/index.ts"),
				r = a("./node_modules/react/index.js"),
				n = a.n(r),
				i = a("./node_modules/react-redux/es/index.js"),
				l = a("./src/lib/makeActionCreator/index.ts"),
				c = a("./src/reddit/components/CreatorStats/helpers.ts"),
				d = a("./src/lib/makeGqlRequest/index.ts"),
				u = a("./src/redditGQL/operations/CreatorStats.json");
			var m = a("./src/reddit/selectors/creatorStats.ts"),
				b = a("./src/reddit/selectors/experiments/creatorStats.ts"),
				p = a("./src/reddit/selectors/posts.ts"),
				h = a("./src/reddit/actions/creatorStats/constants.ts"),
				f = a("./src/lib/initializeClient/installReducer.ts"),
				v = a("./src/reddit/reducers/features/creatorStats/index.ts");
			Object(f.a)({
				features: {
					creatorStats: v.a
				}
			});
			const _ = Object(l.a)(h.b),
				C = Object(l.a)(h.a),
				S = ({
					postId: t,
					subredditId: e
				}) => async (a, s, {
					gqlContext: o
				}) => {
					var r, n;
					const i = s();
					if (!Object(b.a)(i, t)) return;
					if (!Object(m.a)(i, t)) return;
					const l = Object(p.H)(i, {
						postId: t
					});
					if (!(l && Object(c.d)(l.created))) return;
					if (null === (n = null === (r = s().features) || void 0 === r ? void 0 : r.creatorStats) || void 0 === n ? void 0 : n.postStats[t]) return;
					a(_());
					const h = await (async (t, e) => {
						return await Object(d.a)(t, {
							...u,
							variables: e
						})
					})(o(), {
						postId: t,
						subredditId: e
					});
					if (h.ok && h.body) {
						const {
							data: t
						} = h.body, e = (t => {
							const e = {},
								a = {},
								{
									postStatsById: s,
									subredditInfoById: o
								} = t;
							if (!s) return;
							const {
								id: r
							} = s;
							return e[r] = s, o && "id" in o && (a[o.id] = o), {
								postStats: e,
								subredditKarma: a
							}
						})(t);
						e && a(C(e))
					}
				};
			var N = a("./src/reddit/components/ShareMenu/index.tsx"),
				O = a("./src/reddit/constants/tracking.ts"),
				j = a("./src/reddit/selectors/telemetry.ts");
			const k = t => {
				switch (t) {
					case c.b.Available:
						return "insights_shown";
					case c.b.NotAvailableYet:
						return "not_enough_views";
					case c.b.NotAvailable:
						return "post_too_old";
					case c.b.Expired:
						return "insights_expired";
					default:
						return ""
				}
			};
			var w = a("./src/reddit/hooks/useTracking.ts"),
				E = a("./src/reddit/selectors/user.ts"),
				T = a("./src/reddit/components/CreatorStats/index.m.less"),
				x = a.n(T),
				y = a("./src/reddit/components/CreatorStats/Stats.tsx");
			e.default = t => {
				const e = Object(w.a)(),
					a = Object(i.d)(),
					[l, d] = Object(r.useState)(c.b.NotAvailableYet);
				Object(r.useEffect)(() => {
					a(S({
						postId: t.post.id,
						subredditId: t.subreddit.id
					}))
				}, [t.post.id, t.subreddit.id, a]);
				const u = Object(i.e)(e => Object(m.b)(e, t.post.id)),
					b = Object(i.e)(e => Object(m.c)(e, t.subreddit.id)),
					p = Object(i.e)(e => Object(E.ub)(e, {
						postId: t.post.id
					}));
				return Object(r.useEffect)(() => {
					const e = Object(c.c)(t.post, u);
					d(e)
				}, [t.post, u]), Object(r.useEffect)(() => {
					e(((t, e) => a => ({
						...Object(j.m)(a),
						action: O.c.VIEW,
						noun: "aggregate_stats",
						source: "creator_stats",
						subreddit: Object(j.hb)(a),
						post: Object(j.G)(a, t),
						userSubreddit: Object(j.qb)(a),
						actionInfo: Object(j.c)(a, {
							reason: k(e)
						})
					}))(t.post.id, l))
				}, [e, t.post.id, l]), n.a.createElement("div", {
					className: x.a.container
				}, n.a.createElement("div", {
					className: x.a.titleContainer
				}, n.a.createElement("div", {
					className: x.a.title
				}, s.fbt._("Post Insights", null, {
					hk: "3ZuB9z"
				})), n.a.createElement("div", {
					className: x.a.subtitle
				}, ((t, e, a, r, i) => {
					switch (t) {
						case c.b.NotAvailableYet:
							return n.a.createElement(n.a.Fragment, null, s.fbt._("Check back later to see views, shares, and more.", null, {
								hk: "4rItwf"
							}), " ", r && s.fbt._("{=Share your post} to spread the word!", [s.fbt._param("=Share your post", n.a.createElement(N.a, {
								className: x.a.shareMenu,
								dropdownId: "share-menu-creator-stats",
								permalink: e.permalink,
								post: e,
								sendEventWithName: i,
								subredditType: a.type
							}, s.fbt._("{=Share your post}", [s.fbt._param("=Share your post", n.a.createElement("button", {
								className: x.a.linkText
							}, s.fbt._("Share your post", null, {
								hk: "4afsjM"
							})))], {
								hk: "1YHWPm"
							})))], {
								hk: "1pr8Cr"
							}));
						case c.b.NotAvailable:
							return n.a.createElement(n.a.Fragment, null, s.fbt._("Insights are only available for posts created after {date}.", [s.fbt._param("date", Object(o.a)(c.a / 1e3, {
								showDay: !0
							}))], {
								hk: "44JOdg"
							}), " ", r && s.fbt._("{=Create a new post} and see how it performs!", [s.fbt._param("=Create a new post", n.a.createElement("a", {
								href: `/r/${a.name}/submit`,
								className: x.a.linkText
							}, s.fbt._("Create a new post", null, {
								hk: "ByQXU"
							})))], {
								hk: "3MXH1f"
							}));
						case c.b.Available:
							return r ? s.fbt._("Only you and mods of this community can see this", null, {
								hk: "1w08e1"
							}) : s.fbt._("Only the author of the post and mods can see this", null, {
								hk: "4Gwpc4"
							});
						case c.b.Expired:
							return n.a.createElement(n.a.Fragment, null, s.fbt._("Insights are only available for 45 days after post creation.", null, {
								hk: "3ZzrwZ"
							}), " ", r && s.fbt._("{=Create a new post} and see how it performs!", [s.fbt._param("=Create a new post", n.a.createElement("a", {
								href: `/r/${a.name}/submit`,
								className: x.a.linkText
							}, s.fbt._("Create a new post", null, {
								hk: "ByQXU"
							})))], {
								hk: "3MXH1f"
							}));
						default:
							return ""
					}
				})(l, t.post, t.subreddit, p, a => e(((t, e) => a => ({
					...Object(j.m)(a),
					action: O.c.CLICK,
					noun: t,
					source: "creator_stats",
					post: Object(j.G)(a, e),
					subreddit: Object(j.hb)(a),
					userSubreddit: Object(j.qb)(a)
				}))(a, t.post.id))))), l === c.b.Available && u && n.a.createElement(y.a, {
					isUserOp: p,
					upvoteRatio: t.post.upvoteRatio || void 0,
					postStats: u,
					numCrossposts: t.post.numCrossposts,
					subredditKarma: b
				}))
			}
		},
		"./src/redditGQL/operations/CreatorStats.json": function(t) {
			t.exports = JSON.parse('{"id":"b73048dbf918"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CreatorStats.4008a5b726ca971ab085.js.map