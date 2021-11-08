// https://www.redditstatic.com/desktop2x/CreatorStats.4246bbdc8ec9bdae4411.js
// Retrieved at 11/8/2021, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CreatorStats"], {
		"./src/reddit/components/CreatorStats/Stats.tsx": function(t, e, a) {
			"use strict";
			var s = a("./node_modules/fbt/lib/FbtPublic.js"),
				o = a.n(s),
				r = a("./node_modules/react/index.js"),
				n = a.n(r),
				i = a("./src/lib/constants/icons.ts"),
				l = a("./src/lib/hooks/useTooltip.ts"),
				c = a("./src/lib/prettyPrintNumber/index.ts"),
				d = a("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				u = a("./src/reddit/hooks/useInfoTextTooltip.ts"),
				m = a("./src/reddit/icons/fonts/index.tsx"),
				p = a("./node_modules/@loadable/component/dist/loadable.esm.js"),
				b = a("./src/reddit/components/CreatorStats/index.m.less"),
				h = a.n(b);

			function f() {
				return (f = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var a = arguments[e];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (t[s] = a[s])
					}
					return t
				}).apply(this, arguments)
			}
			const v = Object(p.a)({
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
				_ = {
					placement: "top-start",
					modifiers: [{
						name: "offset",
						options: {
							offset: [50, 10]
						}
					}]
				},
				E = ({
					statNumber: t,
					iconName: e,
					statDescription: a,
					tooltipTitleText: s,
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
					}), a)), n.a.createElement(d.a, f({}, r, {
						className: h.a.hoverTooltip
					}), n.a.createElement("div", {
						className: h.a.tooltipTitle
					}, s), n.a.createElement("div", {
						className: h.a.tooltipDescription
					}, o)))
				},
				N = ({
					statNumber: t,
					iconName: e,
					statDescription: a,
					totalCount: s,
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
					}), a)), n.a.createElement("div", {
						ref: u
					}, n.a.createElement(d.a, f({}, i, {
						className: `${h.a.hoverTooltip} ${h.a.statsTooltip}`
					}), n.a.createElement(v, {
						totalCount: s,
						lastHourCount: o
					}))))
				},
				k = t => {
					var e, a;
					return n.a.createElement("div", {
						className: h.a.statsContainer
					}, (null === (e = t.postStats.viewCountTotals) || void 0 === e ? void 0 : e.totalCount) && n.a.createElement(N, {
						statNumber: Object(c.b)(t.postStats.viewCountTotals.totalCount),
						statDescription: s.fbt._("Total Views", null, {
							hk: "2xi7om"
						}),
						iconName: i.a.show,
						totalCount: t.postStats.viewCountTotals.totalCount,
						lastHourCount: 3
					}), t.upvoteRatio && n.a.createElement(E, {
						statNumber: `${Math.round(100*t.upvoteRatio).toString()}%`,
						statDescription: s.fbt._("Upvote Rate", null, {
							hk: "1lDa0E"
						}),
						iconName: i.a.upvote,
						tooltipTitleText: s.fbt._("Upvote rate", null, {
							hk: "341cRk"
						}),
						tooltipDescriptionText: s.fbt._("Ratio between number of upvotes and downvotes on this post", null, {
							hk: "XMWKv"
						})
					}), null != t.subredditKarma && n.a.createElement(E, {
						statNumber: t.isUserOp ? Object(c.b)(t.subredditKarma) : "N/A",
						statDescription: s.fbt._("Community Karma", null, {
							hk: "2iy1C6"
						}),
						iconName: i.a.karma,
						tooltipTitleText: s.fbt._("Community Karma", null, {
							hk: "3Rh5OO"
						}),
						tooltipDescriptionText: t.isUserOp ? s.fbt._("Total amount of karma you’ve earned in this community", null, {
							hk: "14lTnt"
						}) : s.fbt._("Available only for the author of the post", null, {
							hk: "4yp5u7"
						})
					}), null != (null === (a = t.postStats.shareCountTotals) || void 0 === a ? void 0 : a.totalCount) && n.a.createElement(E, {
						statNumber: t.postStats.shareCountTotals.totalCount,
						statDescription: s.fbt._("Total Shares", null, {
							hk: "3dSwgg"
						}),
						iconName: i.a.share_ios,
						tooltipTitleText: s.fbt._("Total Shares", null, {
							hk: "EtOSY"
						}),
						tooltipDescriptionText: s.fbt._("Total number of times this post was shared", null, {
							hk: "4D7ogp"
						})
					}))
				};
			e.a = k
		},
		"./src/reddit/components/CreatorStats/index.m.less": function(t, e, a) {
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
		"./src/reddit/components/CreatorStats/index.tsx": function(t, e, a) {
			"use strict";
			a.r(e);
			var s = a("./node_modules/fbt/lib/FbtPublic.js"),
				o = a("./node_modules/react/index.js"),
				r = a.n(o),
				n = a("./node_modules/react-redux/es/index.js"),
				i = a("./src/lib/humanizeDate/index.ts"),
				l = a("./src/reddit/components/ShareMenu/index.tsx"),
				c = a("./src/reddit/constants/tracking.ts"),
				d = a("./src/reddit/selectors/telemetry.ts");
			var u = a("./src/reddit/hooks/useTracking.ts"),
				m = a("./src/reddit/selectors/creatorStats.ts"),
				p = a("./src/reddit/selectors/user.ts"),
				b = a("./src/reddit/components/CreatorStats/helpers.ts"),
				h = a("./src/reddit/components/CreatorStats/Stats.tsx"),
				f = a("./src/reddit/components/CreatorStats/index.m.less"),
				v = a.n(f);
			e.default = t => {
				const e = Object(u.a)(),
					a = Object(n.e)(e => Object(m.b)(e, t.post.id)),
					f = Object(b.c)(t.post, a),
					_ = Object(n.e)(e => Object(m.c)(e, t.subreddit.id)),
					E = Object(n.e)(e => Object(p.qb)(e, {
						postId: t.post.id
					}));
				return Object(o.useEffect)(() => {
					f === b.b.Available && e((t => e => ({
						...Object(d.defaults)(e),
						action: c.c.VIEW,
						noun: "aggregate_stats",
						source: "creator_stats",
						subreddit: Object(d.subreddit)(e),
						post: Object(d.post)(e, t),
						userSubreddit: Object(d.userSubreddit)(e)
					}))(t.post.id))
				}, [e, t.post.id, f]), r.a.createElement("div", {
					className: v.a.container
				}, r.a.createElement("div", {
					className: v.a.titleContainer
				}, r.a.createElement("div", {
					className: v.a.title
				}, s.fbt._("Post Insights", null, {
					hk: "3ZuB9z"
				})), r.a.createElement("div", {
					className: v.a.subtitle
				}, ((t, e, a, o, n) => {
					switch (t) {
						case b.b.NotAvailableYet:
							return r.a.createElement(r.a.Fragment, null, s.fbt._("Check back later to see views, shares, and more.", null, {
								hk: "4rItwf"
							}), " ", o ? s.fbt._("{=Share your post} to spread the word!", [s.fbt._param("=Share your post", r.a.createElement(l.a, {
								className: v.a.shareMenu,
								dropdownId: "share-menu-creator-stats",
								permalink: e.permalink,
								post: e,
								sendEventWithName: n,
								subredditType: a.type
							}, s.fbt._("{=Share your post}", [s.fbt._param("=Share your post", r.a.createElement("button", {
								className: v.a.linkText
							}, s.fbt._("Share your post", null, {
								hk: "4afsjM"
							})))], {
								hk: "1YHWPm"
							})))], {
								hk: "1pr8Cr"
							}) : s.fbt._("{=Share this post} to spread the word!", [s.fbt._param("=Share this post", r.a.createElement(l.a, {
								className: v.a.shareMenu,
								dropdownId: "share-menu-creator-stats",
								permalink: e.permalink,
								post: e,
								sendEventWithName: n,
								subredditType: a.type
							}, s.fbt._("{=Share this post}", [s.fbt._param("=Share this post", r.a.createElement("button", {
								className: v.a.linkText
							}, s.fbt._("Share this post", null, {
								hk: "xuWdX"
							})))], {
								hk: "16u8Oe"
							})))], {
								hk: "37kpnP"
							}));
						case b.b.NotAvailable:
							return r.a.createElement(r.a.Fragment, null, s.fbt._("Insights are only available for posts created after {date} .", [s.fbt._param("date", Object(i.a)(b.a / 1e3, {
								showDay: !0
							}))], {
								hk: "4qfr48"
							}), o && s.fbt._("{=Create a new post} to see how it performs!", [s.fbt._param("=Create a new post", r.a.createElement("a", {
								href: `/r/${a.name}/submit`,
								className: v.a.linkText
							}, s.fbt._("Create a new post", null, {
								hk: "OR9Dg"
							})))], {
								hk: "CDLiL"
							}));
						case b.b.Available:
							return o ? s.fbt._("Only you and mods of this community can see this", null, {
								hk: "1w08e1"
							}) : s.fbt._("Only the author of the post and mods can see this", null, {
								hk: "4Gwpc4"
							});
						default:
							return ""
					}
				})(f, t.post, t.subreddit, E, a => e(((t, e) => a => ({
					...Object(d.defaults)(a),
					action: c.c.CLICK,
					noun: t,
					source: "creator_stats",
					post: Object(d.post)(a, e),
					subreddit: Object(d.subreddit)(a),
					userSubreddit: Object(d.userSubreddit)(a)
				}))(a, t.post.id))))), f === b.b.Available && a && r.a.createElement(h.a, {
					isUserOp: E,
					upvoteRatio: t.post.upvoteRatio || void 0,
					postStats: a,
					subredditKarma: _
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CreatorStats.4246bbdc8ec9bdae4411.js.map