// https://www.redditstatic.com/desktop2x/CreatorStats.3c9ba091732b27c43d44.js
// Retrieved at 9/23/2021, 5:40:07 PM by Reddit Dataminer v1.0.0
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
			var o = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/lodash/noop.js"),
				n = a.n(s),
				r = a("./node_modules/react/index.js"),
				i = a.n(r),
				l = a("./src/lib/humanizeDate/index.ts"),
				c = a("./src/reddit/components/ShareMenu/index.tsx"),
				m = a("./src/lib/constants/index.ts");
			var u;
			! function(t) {
				t.NotAvailableYet = "NotAvailableYet", t.NotAvailable = "NotAvailable", t.Available = "Available"
			}(u || (u = {}));
			var p = a("./src/lib/constants/icons.ts"),
				d = a("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				b = a("./src/reddit/hooks/useInfoTextTooltip.ts"),
				h = a("./src/reddit/icons/fonts/index.tsx"),
				f = a("./src/reddit/components/CreatorStats/index.m.less"),
				v = a.n(f);
			const _ = 32,
				N = 1,
				k = {
					fromComments: 1,
					fromPosts: 1
				};

			function T() {
				return (T = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var a = arguments[e];
						for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
					}
					return t
				}).apply(this, arguments)
			}
			const E = t => {
				const e = Object(b.a)();
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: v.a.singleStat,
					onMouseEnter: e.show,
					onMouseLeave: e.hide,
					ref: e.target.ref
				}, i.a.createElement("div", {
					className: v.a.statNumber
				}, t.statNumber), i.a.createElement("div", {
					className: v.a.statDescription
				}, i.a.createElement(h.a, {
					name: t.iconName,
					className: v.a.icon
				}), t.statDescription)), i.a.createElement(d.a, T({}, e, {
					className: v.a.hoverTooltip
				}), i.a.createElement("div", {
					className: v.a.tooltipTitle
				}, t.tooltipTitleText), i.a.createElement("div", {
					className: v.a.tooltipDescription
				}, t.tooltipDescriptionText)))
			};
			var x = t => i.a.createElement("div", {
				className: v.a.statsContainer
			}, i.a.createElement(E, {
				statNumber: _,
				statDescription: o.fbt._("Total Views", null, {
					hk: "2xi7om"
				}),
				iconName: p.a.show,
				tooltipTitleText: o.fbt._("Total views", null, {
					hk: "4sCYIU"
				}),
				tooltipDescriptionText: o.fbt._("Total number of views this post has gotten", null, {
					hk: "4cgE8k"
				})
			}), t.upvoteRatio && i.a.createElement(E, {
				statNumber: `${Math.round(100*t.upvoteRatio).toString()}%`,
				statDescription: o.fbt._("Upvote Rate", null, {
					hk: "1lDa0E"
				}),
				iconName: p.a.upvote,
				tooltipTitleText: o.fbt._("Upvote rate", null, {
					hk: "341cRk"
				}),
				tooltipDescriptionText: o.fbt._("Ratio between number of upvotes and downvotes on your post", null, {
					hk: "41J83l"
				})
			}), i.a.createElement(E, {
				statNumber: k.fromComments + k.fromPosts,
				statDescription: o.fbt._("Community Karma", null, {
					hk: "2iy1C6"
				}),
				iconName: p.a.karma,
				tooltipTitleText: o.fbt._("Community Karma", null, {
					hk: "3Rh5OO"
				}),
				tooltipDescriptionText: o.fbt._("Total amount of karma you’ve earned in this community", null, {
					hk: "14lTnt"
				})
			}), i.a.createElement(E, {
				statNumber: N,
				statDescription: o.fbt._("Total Shares", null, {
					hk: "3dSwgg"
				}),
				iconName: p.a.share_ios,
				tooltipTitleText: o.fbt._("Total Shares", null, {
					hk: "EtOSY"
				}),
				tooltipDescriptionText: o.fbt._("Total number of times this post was shared", null, {
					hk: "4D7ogp"
				})
			}));
			e.default = t => {
				const e = (t => {
					if (t < 1632171936644) return u.NotAvailable;
					return Date.now() - t < m.P ? u.NotAvailableYet : u.Available
				})(t.postCreated);
				return i.a.createElement("div", {
					className: v.a.container
				}, i.a.createElement("div", {
					className: v.a.titleContainer
				}, i.a.createElement("div", {
					className: v.a.title
				}, o.fbt._("Post Insights", null, {
					hk: "3ZuB9z"
				})), i.a.createElement("div", {
					className: v.a.subtitle
				}, ((t, e) => {
					switch (t) {
						case u.NotAvailableYet:
							return o.fbt._("Check back later to see views, shares, and more. {=Share your post} to spread the word!", [o.fbt._param("=Share your post", i.a.createElement(c.a, {
								className: v.a.shareMenu,
								dropdownId: "share-menu-creator-stats",
								permalink: e,
								sendEventWithName: n.a,
								subredditType: null
							}, o.fbt._("{=Share your post}", [o.fbt._param("=Share your post", i.a.createElement("span", {
								className: v.a.linkText
							}, o.fbt._("Share your post", null, {
								hk: "KaGzf"
							})))], {
								hk: "2raA5P"
							})))], {
								hk: "4cVRhO"
							});
						case u.NotAvailable:
							return o.fbt._("Insights are only available for posts created after {date} . {=Create a new post} to see how it performs!", [o.fbt._param("date", Object(l.a)(1632171936.644, {
								showDay: !0
							})), o.fbt._param("=Create a new post", i.a.createElement("a", {
								href: "/submit",
								className: v.a.linkText
							}, o.fbt._("Create a new post", null, {
								hk: "1Oo6yI"
							})))], {
								hk: "1uktBD"
							});
						case u.Available:
							return o.fbt._("Only you can see this", null, {
								hk: "1Cmt1f"
							});
						default:
							return ""
					}
				})(e, t.permalink))), e === u.Available && i.a.createElement(x, {
					upvoteRatio: t.upvoteRatio
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CreatorStats.3c9ba091732b27c43d44.js.map