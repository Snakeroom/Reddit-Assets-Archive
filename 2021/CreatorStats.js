// https://www.redditstatic.com/desktop2x/CreatorStats.3927d7286721ab8969bf.js
// Retrieved at 10/7/2021, 3:10:05 PM by Reddit Dataminer v1.0.0
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
			var d = a("./src/reddit/hooks/useTracking.ts"),
				m = a("./src/reddit/selectors/creatorStats.ts"),
				p = a("./src/reddit/selectors/user.ts"),
				b = a("./src/reddit/components/CreatorStats/helpers.ts"),
				h = a("./src/lib/constants/icons.ts"),
				f = a("./src/lib/prettyPrintNumber/index.ts"),
				v = a("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				_ = a("./src/reddit/hooks/useInfoTextTooltip.ts"),
				k = a("./src/reddit/icons/fonts/index.tsx"),
				N = a("./src/reddit/components/CreatorStats/index.m.less"),
				T = a.n(N);

			function E() {
				return (E = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var a = arguments[e];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (t[s] = a[s])
					}
					return t
				}).apply(this, arguments)
			}
			const O = t => {
				const e = Object(_.a)();
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: T.a.singleStat,
					onMouseEnter: e.show,
					onMouseLeave: e.hide,
					ref: e.target.ref
				}, r.a.createElement("div", {
					className: T.a.statNumber
				}, t.statNumber), r.a.createElement("div", {
					className: T.a.statDescription
				}, r.a.createElement(k.a, {
					name: t.iconName,
					className: T.a.icon
				}), t.statDescription)), r.a.createElement(v.a, E({}, e, {
					className: T.a.hoverTooltip
				}), r.a.createElement("div", {
					className: T.a.tooltipTitle
				}, t.tooltipTitleText), r.a.createElement("div", {
					className: T.a.tooltipDescription
				}, t.tooltipDescriptionText)))
			};
			var x = t => {
				var e, a;
				return r.a.createElement("div", {
					className: T.a.statsContainer
				}, (null === (e = t.postStats.viewCountTotals) || void 0 === e ? void 0 : e.totalCount) && r.a.createElement(O, {
					statNumber: Object(f.b)(t.postStats.viewCountTotals.totalCount),
					statDescription: s.fbt._("Total Views", null, {
						hk: "2xi7om"
					}),
					iconName: h.a.show,
					tooltipTitleText: s.fbt._("Total views", null, {
						hk: "4sCYIU"
					}),
					tooltipDescriptionText: s.fbt._("Total number of views this post has gotten", null, {
						hk: "4cgE8k"
					})
				}), t.upvoteRatio && r.a.createElement(O, {
					statNumber: `${Math.round(100*t.upvoteRatio).toString()}%`,
					statDescription: s.fbt._("Upvote Rate", null, {
						hk: "1lDa0E"
					}),
					iconName: h.a.upvote,
					tooltipTitleText: s.fbt._("Upvote rate", null, {
						hk: "341cRk"
					}),
					tooltipDescriptionText: s.fbt._("Ratio between number of upvotes and downvotes on your post", null, {
						hk: "41J83l"
					})
				}), null != t.subredditKarma && r.a.createElement(O, {
					statNumber: t.isUserOp ? Object(f.b)(t.subredditKarma) : "N/A",
					statDescription: s.fbt._("Community Karma", null, {
						hk: "2iy1C6"
					}),
					iconName: h.a.karma,
					tooltipTitleText: s.fbt._("Community Karma", null, {
						hk: "3Rh5OO"
					}),
					tooltipDescriptionText: t.isUserOp ? s.fbt._("Total amount of karma you’ve earned in this community", null, {
						hk: "14lTnt"
					}) : s.fbt._("Availabe only for the author of the post", null, {
						hk: "2DFQRe"
					})
				}), null != (null === (a = t.postStats.shareCountTotals) || void 0 === a ? void 0 : a.totalCount) && r.a.createElement(O, {
					statNumber: t.postStats.shareCountTotals.totalCount,
					statDescription: s.fbt._("Total Shares", null, {
						hk: "3dSwgg"
					}),
					iconName: h.a.share_ios,
					tooltipTitleText: s.fbt._("Total Shares", null, {
						hk: "EtOSY"
					}),
					tooltipDescriptionText: s.fbt._("Total number of times this post was shared", null, {
						hk: "4D7ogp"
					})
				}))
			};
			e.default = t => {
				const e = Object(d.a)(),
					a = Object(n.e)(e => Object(m.b)(e, t.post.id)),
					h = Object(b.c)(t.post, a),
					f = Object(n.e)(e => Object(m.c)(e, t.subreddit.id)),
					v = Object(n.e)(e => Object(p.qb)(e, {
						postId: t.post.id
					}));
				return Object(o.useEffect)(() => {
					h === b.b.Available && e((t => e => ({
						...Object(u.defaults)(e),
						action: c.c.VIEW,
						noun: "aggregate_stats",
						source: "creator_stats",
						subreddit: Object(u.subreddit)(e),
						post: Object(u.post)(e, t),
						userSubreddit: Object(u.userSubreddit)(e)
					}))(t.post.id))
				}, [e, t.post.id, h]), r.a.createElement("div", {
					className: T.a.container
				}, r.a.createElement("div", {
					className: T.a.titleContainer
				}, r.a.createElement("div", {
					className: T.a.title
				}, s.fbt._("Post Insights", null, {
					hk: "3ZuB9z"
				})), r.a.createElement("div", {
					className: T.a.subtitle
				}, ((t, e, a, o) => {
					switch (t) {
						case b.b.NotAvailableYet:
							return s.fbt._("Check back later to see views, shares, and more. {=Share your post} to spread the word!", [s.fbt._param("=Share your post", r.a.createElement(l.a, {
								className: T.a.shareMenu,
								dropdownId: "share-menu-creator-stats",
								permalink: e.permalink,
								post: e,
								sendEventWithName: o,
								subredditType: a.type
							}, s.fbt._("{=Share your post}", [s.fbt._param("=Share your post", r.a.createElement("button", {
								className: T.a.linkText
							}, s.fbt._("Share your post", null, {
								hk: "KaGzf"
							})))], {
								hk: "2raA5P"
							})))], {
								hk: "4cVRhO"
							});
						case b.b.NotAvailable:
							return s.fbt._("Insights are only available for posts created after {date} . {=Create a new post} to see how it performs!", [s.fbt._param("date", Object(i.a)(b.a / 1e3, {
								showDay: !0
							})), s.fbt._param("=Create a new post", r.a.createElement("a", {
								href: `/r/${a.name}/submit`,
								className: T.a.linkText
							}, s.fbt._("Create a new post", null, {
								hk: "1Oo6yI"
							})))], {
								hk: "1uktBD"
							});
						case b.b.Available:
							return s.fbt._("Only you and mods of this community can see this", null, {
								hk: "1w08e1"
							});
						default:
							return ""
					}
				})(h, t.post, t.subreddit, a => e(((t, e) => a => ({
					...Object(u.defaults)(a),
					action: c.c.CLICK,
					noun: t,
					source: "creator_stats",
					post: Object(u.post)(a, e),
					subreddit: Object(u.subreddit)(a),
					userSubreddit: Object(u.userSubreddit)(a)
				}))(a, t.post.id))))), h === b.b.Available && a && r.a.createElement(x, {
					isUserOp: v,
					upvoteRatio: t.post.upvoteRatio || void 0,
					postStats: a,
					subredditKarma: f
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CreatorStats.3927d7286721ab8969bf.js.map