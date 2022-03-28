// https://www.redditstatic.com/desktop2x/CreatorStats.22961f8c504b7ac53002.js
// Retrieved at 3/28/2022, 6:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CreatorStats"], {
		"./src/reddit/components/CreatorStats/Stats.tsx": function(t, e, s) {
			"use strict";
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s.n(a),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/icons.ts"),
				c = s("./src/lib/hooks/useTooltip.ts"),
				d = s("./src/lib/prettyPrintNumber/index.ts"),
				u = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				m = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				p = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				h = s("./src/reddit/components/CreatorStats/index.m.less"),
				f = s.n(h);

			function v() {
				return (v = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var s = arguments[e];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (t[a] = s[a])
					}
					return t
				}).apply(this, arguments)
			}
			const _ = Object(p.a)({
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
				C = {
					placement: "top-start",
					modifiers: [{
						name: "offset",
						options: {
							offset: [50, -2]
						}
					}]
				},
				S = t => {
					let {
						className: e,
						hoverTooltip: s,
						statNumber: a,
						statNumberIconName: o,
						statDescription: r,
						iconName: l,
						tooltipClassName: c,
						tooltipTitleText: d,
						tooltipDescriptionText: m,
						tooltipExtra: p
					} = t;
					return n.a.createElement("div", {
						className: Object(i.a)(f.a.singleStat, e),
						onMouseEnter: s && s.show,
						onMouseLeave: s && s.hide,
						ref: s && s.target.ref
					}, n.a.createElement("div", {
						className: f.a.statNumber
					}, a, o && n.a.createElement(b.a, {
						name: o,
						className: f.a.statNumberIcon
					})), n.a.createElement("div", {
						className: f.a.statDescription
					}, l && n.a.createElement(b.a, {
						name: l,
						className: f.a.icon
					}), r), s && n.a.createElement(u.a, v({}, s, {
						className: Object(i.a)(f.a.hoverTooltip, c)
					}), d && n.a.createElement("div", {
						className: f.a.tooltipTitle
					}, d), m && n.a.createElement("div", {
						className: f.a.tooltipDescription
					}, m), p))
				},
				N = t => {
					let {
						leftStatNumber: e,
						leftStatDescription: s,
						rightStatNumber: a,
						rightStatDescription: o
					} = t;
					return n.a.createElement("div", {
						className: f.a.twoColumnContainer
					}, n.a.createElement(S, {
						className: f.a.twoColumnSingleStat,
						statNumber: e,
						statDescription: s
					}), n.a.createElement(S, {
						className: f.a.twoColumnSingleStat,
						statNumber: a,
						statDescription: o
					}))
				},
				O = t => {
					var e, s, o, r;
					const i = Object(c.b)(C),
						u = Object(m.a)();
					return n.a.createElement("div", {
						className: f.a.statsContainer
					}, (null === (e = t.postStats.viewCountTotals) || void 0 === e ? void 0 : e.totalCount) && n.a.createElement(S, {
						hoverTooltip: i,
						statNumber: Object(d.b)(t.postStats.viewCountTotals.totalCount),
						statNumberIconName: l.a.statistics_fill,
						statDescription: a.fbt._("Total Views", null, {
							hk: "2xi7om"
						}),
						iconName: l.a.show,
						tooltipClassName: f.a.statsTooltip,
						tooltipExtra: n.a.createElement(_, {
							totalCount: t.postStats.viewCountTotals.totalCount,
							viewsData: (null === (s = t.postStats.viewCountTrends) || void 0 === s ? void 0 : s.data) || []
						})
					}), n.a.createElement(S, {
						hoverTooltip: Object(m.a)(),
						statNumber: void 0 !== t.upvoteRatio ? `${Math.round(100*t.upvoteRatio).toString()}%` : "N/A",
						statDescription: a.fbt._("Upvote Rate", null, {
							hk: "1lDa0E"
						}),
						iconName: l.a.upvote,
						tooltipTitleText: a.fbt._("Upvote rate", null, {
							hk: "341cRk"
						}),
						tooltipDescriptionText: a.fbt._("Ratio between number of upvotes and downvotes on this post", null, {
							hk: "XMWKv"
						})
					}), n.a.createElement(S, {
						hoverTooltip: Object(m.a)(),
						statNumber: void 0 !== t.subredditKarma && t.isUserOp ? Object(d.b)(t.subredditKarma.fromComments + t.subredditKarma.fromPosts) : "N/A",
						statDescription: a.fbt._("Community Karma", null, {
							hk: "2iy1C6"
						}),
						iconName: l.a.karma,
						tooltipTitleText: a.fbt._("Community Karma", null, {
							hk: "3Rh5OO"
						}),
						tooltipDescriptionText: t.isUserOp ? a.fbt._("Total amount of karma you’ve earned in this community", null, {
							hk: "14lTnt"
						}) : a.fbt._("Available only for the author of the post", null, {
							hk: "4yp5u7"
						}),
						tooltipExtra: n.a.createElement(N, {
							leftStatNumber: void 0 !== t.subredditKarma && t.isUserOp ? Object(d.b)(t.subredditKarma.fromComments) : "N/A",
							leftStatDescription: a.fbt._("Comment karma", null, {
								hk: "3GKYzp"
							}),
							rightStatNumber: null != t.subredditKarma && t.isUserOp ? Object(d.b)(t.subredditKarma.fromPosts) : "N/A",
							rightStatDescription: a.fbt._("Post karma", null, {
								hk: "24aVld"
							})
						})
					}), null != (null === (o = t.postStats.shareAllCountTotals) || void 0 === o ? void 0 : o.totalCount) && null != (null === (r = t.postStats.shareCopyCountTotals) || void 0 === r ? void 0 : r.totalCount) && n.a.createElement(S, {
						hoverTooltip: u,
						statNumber: Object(d.b)(t.postStats.shareAllCountTotals.totalCount),
						statDescription: a.fbt._("Total Shares", null, {
							hk: "3dSwgg"
						}),
						iconName: l.a.share_ios,
						tooltipTitleText: a.fbt._({
							"*": "This post was shared {number} times",
							_1: "This post was shared 1 time"
						}, [a.fbt._plural(parseInt(Object(d.b)(t.postStats.shareAllCountTotals.totalCount)), "number")], {
							hk: "1KGD5P"
						}),
						tooltipExtra: n.a.createElement(N, {
							leftStatNumber: Object(d.b)(t.numCrossposts),
							leftStatDescription: a.fbt._("Communities", null, {
								hk: "5VCd3"
							}),
							rightStatNumber: Object(d.b)(t.postStats.shareCopyCountTotals.totalCount),
							rightStatDescription: a.fbt._("Link copies", null, {
								hk: "49c1jO"
							})
						})
					}))
				};
			e.a = O
		},
		"./src/reddit/components/CreatorStats/index.m.less": function(t, e, s) {
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
				b = s("./src/reddit/selectors/experiments/creatorStats.ts"),
				p = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/actions/creatorStats/constants.ts"),
				f = s("./src/lib/initializeClient/installReducer.ts"),
				v = s("./src/reddit/reducers/features/creatorStats/index.ts");
			Object(f.a)({
				features: {
					creatorStats: v.a
				}
			});
			const _ = Object(l.a)(h.b),
				C = Object(l.a)(h.a),
				S = t => {
					let {
						postId: e,
						subredditId: s
					} = t;
					return async (t, a, o) => {
						let {
							gqlContext: r
						} = o;
						var n, i;
						const l = a();
						if (!Object(b.a)(l, e)) return;
						if (!Object(m.a)(l, e)) return;
						const h = Object(p.G)(l, {
							postId: e
						});
						if (!(h && Object(c.d)(h.created))) return;
						if (null === (i = null === (n = a().features) || void 0 === n ? void 0 : n.creatorStats) || void 0 === i ? void 0 : i.postStats[e]) return;
						t(_());
						const f = await (async (t, e) => {
							return await Object(d.a)(t, {
								...u,
								variables: e
							})
						})(r(), {
							postId: e,
							subredditId: s
						});
						if (f.ok && f.body) {
							const {
								data: e
							} = f.body, s = (t => {
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
							})(e);
							s && t(C(s))
						}
					}
				};
			var N = s("./src/reddit/components/ShareMenu/index.tsx"),
				O = s("./src/reddit/constants/tracking.ts"),
				j = s("./src/reddit/selectors/telemetry.ts");
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
			var w = s("./src/reddit/hooks/useTracking.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				T = s("./src/reddit/components/CreatorStats/index.m.less"),
				x = s.n(T),
				y = s("./src/reddit/components/CreatorStats/Stats.tsx");
			e.default = t => {
				const e = Object(w.a)(),
					s = Object(i.d)(),
					[l, d] = Object(r.useState)(c.b.NotAvailableYet);
				Object(r.useEffect)(() => {
					s(S({
						postId: t.post.id,
						subredditId: t.subreddit.id
					}))
				}, [t.post.id, t.subreddit.id, s]);
				const u = Object(i.e)(e => Object(m.b)(e, t.post.id)),
					b = Object(i.e)(e => Object(m.c)(e, t.subreddit.id)),
					p = Object(i.e)(e => Object(E.Bb)(e, {
						postId: t.post.id
					}));
				return Object(r.useEffect)(() => {
					const e = Object(c.c)(t.post, u);
					d(e)
				}, [t.post, u]), Object(r.useEffect)(() => {
					e(((t, e) => s => ({
						...Object(j.o)(s),
						action: O.c.VIEW,
						noun: "aggregate_stats",
						source: "creator_stats",
						subreddit: Object(j.ib)(s),
						post: Object(j.I)(s, t),
						userSubreddit: Object(j.sb)(s),
						actionInfo: Object(j.d)(s, {
							reason: k(e)
						})
					}))(t.post.id, l))
				}, [e, t.post.id, l]), n.a.createElement("div", {
					className: x.a.container
				}, n.a.createElement("div", {
					className: x.a.titleContainer
				}, n.a.createElement("div", {
					className: x.a.title
				}, a.fbt._("Post Insights", null, {
					hk: "3ZuB9z"
				})), n.a.createElement("div", {
					className: x.a.subtitle
				}, ((t, e, s, r, i) => {
					switch (t) {
						case c.b.NotAvailableYet:
							return n.a.createElement(n.a.Fragment, null, a.fbt._("Check back later to see views, shares, and more.", null, {
								hk: "4rItwf"
							}), " ", r && a.fbt._("{=Share your post} to spread the word!", [a.fbt._param("=Share your post", n.a.createElement(N.a, {
								className: x.a.shareMenu,
								dropdownId: "share-menu-creator-stats",
								permalink: e.permalink,
								post: e,
								sendEventWithName: i,
								subredditType: s.type
							}, a.fbt._("{=Share your post}", [a.fbt._param("=Share your post", n.a.createElement("button", {
								className: x.a.linkText
							}, a.fbt._("Share your post", null, {
								hk: "4afsjM"
							})))], {
								hk: "1YHWPm"
							})))], {
								hk: "1pr8Cr"
							}));
						case c.b.NotAvailable:
							return n.a.createElement(n.a.Fragment, null, a.fbt._("Insights are only available for posts created after {date}.", [a.fbt._param("date", Object(o.a)(c.a / 1e3, {
								showDay: !0
							}))], {
								hk: "44JOdg"
							}), " ", r && a.fbt._("{=Create a new post} and see how it performs!", [a.fbt._param("=Create a new post", n.a.createElement("a", {
								href: `/r/${s.name}/submit`,
								className: x.a.linkText
							}, a.fbt._("Create a new post", null, {
								hk: "ByQXU"
							})))], {
								hk: "3MXH1f"
							}));
						case c.b.Available:
							return r ? a.fbt._("Only you and mods of this community can see this", null, {
								hk: "1w08e1"
							}) : a.fbt._("Only the author of the post and mods can see this", null, {
								hk: "4Gwpc4"
							});
						case c.b.Expired:
							return n.a.createElement(n.a.Fragment, null, a.fbt._("Insights are only available for 45 days after post creation.", null, {
								hk: "3ZzrwZ"
							}), " ", r && a.fbt._("{=Create a new post} and see how it performs!", [a.fbt._param("=Create a new post", n.a.createElement("a", {
								href: `/r/${s.name}/submit`,
								className: x.a.linkText
							}, a.fbt._("Create a new post", null, {
								hk: "ByQXU"
							})))], {
								hk: "3MXH1f"
							}));
						default:
							return ""
					}
				})(l, t.post, t.subreddit, p, s => e(((t, e) => s => ({
					...Object(j.o)(s),
					action: O.c.CLICK,
					noun: t,
					source: "creator_stats",
					post: Object(j.I)(s, e),
					subreddit: Object(j.ib)(s),
					userSubreddit: Object(j.sb)(s)
				}))(s, t.post.id))))), l === c.b.Available && u && n.a.createElement(y.a, {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CreatorStats.22961f8c504b7ac53002.js.map