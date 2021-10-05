// https://www.redditstatic.com/desktop2x/CreatorStats.b90d84ca834c07c6ec89.js
// Retrieved at 10/5/2021, 12:30:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CreatorStats"], {
		"./src/reddit/components/CreatorStats/index.m.less": function(t, e, a) {
			t.exports = {
				container: "_25QUf-LgSKaPBLrEIkabN-",
				titleContainer: "_2wE4rmi1kNP5pg2G30ujUH",
				title: "Lquv-leHQsbcKtuQ0KPWS",
				subtitle: "TAyCHeyBvqdENHYHpUsol",
				linkText: "_1inj2DsmNMwZAexztXN5qZ",
				statsContainer: "_3JBuW0fm4kU1I2YWyAoz8m",
				singleStat: "_1Lg8Swn7dBvW0nGqe1otwk",
				statNumber: "_1GYxwGvUImaYeMVNkdJD0d",
				statDescription: "_2XjmeZtC-BE7IBe1Iu36Xa",
				icon: "jL0CE0RprIm7WxeOUkQkX",
				hoverTooltip: "_1KsB3T19iQkJhr_UZ95Rof",
				tooltipTitle: "a-6WyjSpEmnkXxyVj87gS",
				tooltipDescription: "BK2NIA3409dVm0CnrnjQs",
				shareMenu: "u03ABNdo3ClgDN2Y4Ba3b"
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
				u = a("./src/reddit/selectors/telemetry.ts");
			var m = a("./src/reddit/hooks/useTracking.ts"),
				d = a("./src/reddit/selectors/creatorStats.ts"),
				p = a("./src/reddit/components/CreatorStats/helpers.ts"),
				b = a("./src/lib/constants/icons.ts"),
				h = a("./src/lib/prettyPrintNumber/index.ts"),
				f = a("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				_ = a("./src/reddit/hooks/useInfoTextTooltip.ts"),
				v = a("./src/reddit/icons/fonts/index.tsx"),
				k = a("./src/reddit/components/CreatorStats/index.m.less"),
				N = a.n(k);

			function T() {
				return (T = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var a = arguments[e];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (t[s] = a[s])
					}
					return t
				}).apply(this, arguments)
			}
			const E = t => {
				const e = Object(_.a)();
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: N.a.singleStat,
					onMouseEnter: e.show,
					onMouseLeave: e.hide,
					ref: e.target.ref
				}, r.a.createElement("div", {
					className: N.a.statNumber
				}, t.statNumber), r.a.createElement("div", {
					className: N.a.statDescription
				}, r.a.createElement(v.a, {
					name: t.iconName,
					className: N.a.icon
				}), t.statDescription)), r.a.createElement(f.a, T({}, e, {
					className: N.a.hoverTooltip
				}), r.a.createElement("div", {
					className: N.a.tooltipTitle
				}, t.tooltipTitleText), r.a.createElement("div", {
					className: N.a.tooltipDescription
				}, t.tooltipDescriptionText)))
			};
			var x = t => {
				var e, a;
				return r.a.createElement("div", {
					className: N.a.statsContainer
				}, (null === (e = t.postStats.viewCountTotals) || void 0 === e ? void 0 : e.totalCount) && r.a.createElement(E, {
					statNumber: Object(h.b)(t.postStats.viewCountTotals.totalCount),
					statDescription: s.fbt._("Total Views", null, {
						hk: "2xi7om"
					}),
					iconName: b.a.show,
					tooltipTitleText: s.fbt._("Total views", null, {
						hk: "4sCYIU"
					}),
					tooltipDescriptionText: s.fbt._("Total number of views this post has gotten", null, {
						hk: "4cgE8k"
					})
				}), t.upvoteRatio && r.a.createElement(E, {
					statNumber: `${Math.round(100*t.upvoteRatio).toString()}%`,
					statDescription: s.fbt._("Upvote Rate", null, {
						hk: "1lDa0E"
					}),
					iconName: b.a.upvote,
					tooltipTitleText: s.fbt._("Upvote rate", null, {
						hk: "341cRk"
					}),
					tooltipDescriptionText: s.fbt._("Ratio between number of upvotes and downvotes on your post", null, {
						hk: "41J83l"
					})
				}), null != t.subredditKarma && r.a.createElement(E, {
					statNumber: t.subredditKarma,
					statDescription: s.fbt._("Community Karma", null, {
						hk: "2iy1C6"
					}),
					iconName: b.a.karma,
					tooltipTitleText: s.fbt._("Community Karma", null, {
						hk: "3Rh5OO"
					}),
					tooltipDescriptionText: s.fbt._("Total amount of karma you’ve earned in this community", null, {
						hk: "14lTnt"
					})
				}), null != (null === (a = t.postStats.shareCountTotals) || void 0 === a ? void 0 : a.totalCount) && r.a.createElement(E, {
					statNumber: t.postStats.shareCountTotals.totalCount,
					statDescription: s.fbt._("Total Shares", null, {
						hk: "3dSwgg"
					}),
					iconName: b.a.share_ios,
					tooltipTitleText: s.fbt._("Total Shares", null, {
						hk: "EtOSY"
					}),
					tooltipDescriptionText: s.fbt._("Total number of times this post was shared", null, {
						hk: "4D7ogp"
					})
				}))
			};
			e.default = t => {
				const e = Object(m.a)(),
					a = Object(n.e)(e => Object(d.b)(e, t.post.id)),
					b = Object(p.c)(t.post, a),
					h = Object(n.e)(e => Object(d.c)(e, t.subreddit.id));
				return Object(o.useEffect)(() => {
					a && e((() => t => ({
						...Object(u.defaults)(t),
						action: c.c.VIEW,
						noun: "aggregate_stats",
						source: "creator_stats"
					}))())
				}, [a, e]), r.a.createElement("div", {
					className: N.a.container
				}, r.a.createElement("div", {
					className: N.a.titleContainer
				}, r.a.createElement("div", {
					className: N.a.title
				}, s.fbt._("Post Insights", null, {
					hk: "3ZuB9z"
				})), r.a.createElement("div", {
					className: N.a.subtitle
				}, ((t, e, a, o) => {
					switch (t) {
						case p.b.NotAvailableYet:
							return s.fbt._("Check back later to see views, shares, and more. {=Share your post} to spread the word!", [s.fbt._param("=Share your post", r.a.createElement(l.a, {
								className: N.a.shareMenu,
								dropdownId: "share-menu-creator-stats",
								permalink: e.permalink,
								post: e,
								sendEventWithName: o,
								subredditType: a.type
							}, s.fbt._("{=Share your post}", [s.fbt._param("=Share your post", r.a.createElement("button", {
								className: N.a.linkText
							}, s.fbt._("Share your post", null, {
								hk: "KaGzf"
							})))], {
								hk: "2raA5P"
							})))], {
								hk: "4cVRhO"
							});
						case p.b.NotAvailable:
							return s.fbt._("Insights are only available for posts created after {date} . {=Create a new post} to see how it performs!", [s.fbt._param("date", Object(i.a)(p.a / 1e3, {
								showDay: !0
							})), s.fbt._param("=Create a new post", r.a.createElement("a", {
								href: `/r/${a.name}/submit`,
								className: N.a.linkText
							}, s.fbt._("Create a new post", null, {
								hk: "1Oo6yI"
							})))], {
								hk: "1uktBD"
							});
						case p.b.Available:
							return s.fbt._("Only you and mods of this community can see this", null, {
								hk: "1w08e1"
							});
						default:
							return ""
					}
				})(b, t.post, t.subreddit, t => e((t => e => ({
					...Object(u.defaults)(e),
					action: c.c.CLICK,
					noun: t,
					source: "creator_stats"
				}))(t))))), b === p.b.Available && a && r.a.createElement(x, {
					upvoteRatio: t.post.upvoteRatio || void 0,
					postStats: a,
					subredditKarma: h
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CreatorStats.b90d84ca834c07c6ec89.js.map