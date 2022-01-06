// https://www.redditstatic.com/desktop2x/CreatorStats.f9b275af538f3ca03a6f.js
// Retrieved at 1/6/2022, 12:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CreatorStats"], {
		"./src/reddit/components/CreatorStats/Stats.tsx": function(t, e, a) {
			"use strict";
			var s = a("./node_modules/fbt/lib/FbtPublic.js"),
				r = a.n(s),
				o = a("./node_modules/react/index.js"),
				n = a.n(o),
				i = a("./src/lib/constants/icons.ts"),
				l = a("./src/lib/hooks/useTooltip.ts"),
				c = a("./src/lib/prettyPrintNumber/index.ts"),
				d = a("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				m = a("./src/reddit/hooks/useInfoTextTooltip.ts"),
				u = a("./src/reddit/icons/fonts/index.tsx"),
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
					tooltipDescriptionText: r,
					tooltipExtra: o
				}) => {
					const i = Object(m.a)();
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: h.a.singleStat,
						onMouseEnter: i.show,
						onMouseLeave: i.hide,
						ref: i.target.ref
					}, n.a.createElement("div", {
						className: h.a.statNumber
					}, t), n.a.createElement("div", {
						className: h.a.statDescription
					}, n.a.createElement(u.a, {
						name: e,
						className: h.a.icon
					}), a)), n.a.createElement(d.a, f({}, i, {
						className: h.a.hoverTooltip
					}), n.a.createElement("div", {
						className: h.a.tooltipTitle
					}, s), n.a.createElement("div", {
						className: h.a.tooltipDescription
					}, r), o))
				},
				S = ({
					statNumber: t,
					iconName: e,
					statDescription: a,
					totalCount: s,
					lastHourCount: r
				}) => {
					const i = Object(l.b)(_),
						c = i.visible,
						m = Object(o.useRef)();
					return Object(o.useEffect)(() => {
						const t = () => {
								c && i.hide()
							},
							e = t => {
								c && m.current && !m.current.contains(t.target) && i.hide()
							};
						return document.addEventListener("mousedown", e), document[c ? "addEventListener" : "removeEventListener"]("scroll", t), () => {
							document.removeEventListener("mousedown", e), document.removeEventListener("scroll", t)
						}
					}, [c, i, m]), n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: h.a.totalViewsStat,
						onClick: i.toggle,
						ref: i.target.ref
					}, n.a.createElement("div", {
						className: h.a.statNumber
					}, t), n.a.createElement("div", {
						className: h.a.statDescription
					}, n.a.createElement(u.a, {
						name: e,
						className: h.a.icon
					}), a)), n.a.createElement("div", {
						ref: m
					}, n.a.createElement(d.a, f({}, i, {
						className: `${h.a.hoverTooltip} ${h.a.statsTooltip}`
					}), n.a.createElement(v, {
						totalCount: s,
						lastHourCount: r
					}))))
				},
				N = t => {
					var e, a;
					return n.a.createElement("div", {
						className: h.a.statsContainer
					}, (null === (e = t.postStats.viewCountTotals) || void 0 === e ? void 0 : e.totalCount) && n.a.createElement(S, {
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
						statNumber: t.isUserOp ? Object(c.b)(t.subredditKarma.fromComments + t.subredditKarma.fromPosts) : "N/A",
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
						}),
						tooltipExtra: t.isUserOp ? n.a.createElement("div", {
							className: h.a.karmaContainer
						}, n.a.createElement("div", {
							className: h.a.graphSingleStat
						}, n.a.createElement("div", {
							className: h.a.statNumber
						}, Object(c.b)(t.subredditKarma.fromComments)), n.a.createElement("div", {
							className: h.a.statDescription
						}, s.fbt._("Comment karma", null, {
							hk: "3GKYzp"
						}))), n.a.createElement("div", {
							className: h.a.graphSingleStat
						}, n.a.createElement("div", {
							className: h.a.statNumber
						}, Object(c.b)(t.subredditKarma.fromPosts)), n.a.createElement("div", {
							className: h.a.statDescription
						}, s.fbt._("Post karma", null, {
							hk: "24aVld"
						})))) : null
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
			e.a = N
		},
		"./src/reddit/components/CreatorStats/index.m.less": function(t, e, a) {
			t.exports = {
				container: "_25QUf-LgSKaPBLrEIkabN-",
				titleContainer: "_2wE4rmi1kNP5pg2G30ujUH",
				title: "Lquv-leHQsbcKtuQ0KPWS",
				subtitle: "TAyCHeyBvqdENHYHpUsol",
				linkText: "_1inj2DsmNMwZAexztXN5qZ",
				karmaContainer: "_1miO8BYu3nrhAgCMncxkYn",
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
				r = a("./src/lib/humanizeDate/index.ts"),
				o = a("./node_modules/react/index.js"),
				n = a.n(o),
				i = a("./node_modules/react-redux/es/index.js"),
				l = a("./src/lib/makeActionCreator/index.ts"),
				c = a("./src/reddit/components/CreatorStats/helpers.ts"),
				d = a("./src/lib/makeGqlRequest/index.ts"),
				m = a("./src/redditGQL/operations/CreatorStats.json");
			var u = a("./src/reddit/selectors/creatorStats.ts"),
				p = a("./src/reddit/selectors/experiments/creatorStats.ts"),
				b = a("./src/reddit/actions/creatorStats/constants.ts"),
				h = a("./src/lib/initializeClient/installReducer.ts"),
				f = a("./src/reddit/reducers/features/creatorStats/index.ts");
			Object(h.a)({
				features: {
					creatorStats: f.a
				}
			});
			const v = Object(l.a)(b.b),
				_ = Object(l.a)(b.a),
				E = ({
					postId: t,
					subredditId: e
				}) => async (a, s, {
					gqlContext: r
				}) => {
					var o, n;
					const i = s();
					if (!Object(p.a)(i, t)) return;
					if (!Object(u.a)(i, t)) return;
					const l = i.posts.models[t];
					if (!(l && Object(c.d)(l.created))) return;
					if (null === (n = null === (o = s().features) || void 0 === o ? void 0 : o.creatorStats) || void 0 === n ? void 0 : n.postStats[t]) return;
					a(v());
					const b = await (async (t, e) => {
						return await Object(d.a)(t, {
							...m,
							variables: e
						})
					})(r(), {
						postId: t,
						subredditId: e
					});
					if (b.ok && b.body) {
						const {
							data: t
						} = b.body, e = (t => {
							const e = {},
								a = {},
								{
									postStatsById: s,
									subredditInfoById: r
								} = t;
							if (!s) return;
							const {
								id: o
							} = s;
							return e[o] = s, r && "id" in r && (a[r.id] = r), {
								postStats: e,
								subredditKarma: a
							}
						})(t);
						e && a(_(e))
					}
				};
			var S = a("./src/reddit/components/ShareMenu/index.tsx"),
				N = a("./src/reddit/constants/tracking.ts"),
				k = a("./src/reddit/selectors/telemetry.ts");
			var C = a("./src/reddit/hooks/useTracking.ts"),
				O = a("./src/reddit/selectors/user.ts"),
				j = a("./src/reddit/components/CreatorStats/index.m.less"),
				x = a.n(j),
				T = a("./src/reddit/components/CreatorStats/Stats.tsx");
			e.default = t => {
				const e = Object(C.a)(),
					a = Object(i.d)();
				Object(o.useEffect)(() => {
					a(E({
						postId: t.post.id,
						subredditId: t.subreddit.id
					}))
				}, [t.post.id, t.subreddit.id, a]);
				const l = Object(i.e)(e => Object(u.b)(e, t.post.id)),
					d = Object(c.c)(t.post, l),
					m = Object(i.e)(e => Object(u.c)(e, t.subreddit.id)),
					p = Object(i.e)(e => Object(O.pb)(e, {
						postId: t.post.id
					}));
				return Object(o.useEffect)(() => {
					d === c.b.Available && e((t => e => ({
						...Object(k.o)(e),
						action: N.c.VIEW,
						noun: "aggregate_stats",
						source: "creator_stats",
						subreddit: Object(k.jb)(e),
						post: Object(k.I)(e, t),
						userSubreddit: Object(k.sb)(e)
					}))(t.post.id))
				}, [e, t.post.id, d]), n.a.createElement("div", {
					className: x.a.container
				}, n.a.createElement("div", {
					className: x.a.titleContainer
				}, n.a.createElement("div", {
					className: x.a.title
				}, s.fbt._("Post Insights", null, {
					hk: "3ZuB9z"
				})), n.a.createElement("div", {
					className: x.a.subtitle
				}, ((t, e, a, o, i) => {
					switch (t) {
						case c.b.NotAvailableYet:
							return n.a.createElement(n.a.Fragment, null, s.fbt._("Check back later to see views, shares, and more.", null, {
								hk: "4rItwf"
							}), " ", o ? s.fbt._("{=Share your post} to spread the word!", [s.fbt._param("=Share your post", n.a.createElement(S.a, {
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
							}) : s.fbt._("{=Share this post} to spread the word!", [s.fbt._param("=Share this post", n.a.createElement(S.a, {
								className: x.a.shareMenu,
								dropdownId: "share-menu-creator-stats",
								permalink: e.permalink,
								post: e,
								sendEventWithName: i,
								subredditType: a.type
							}, s.fbt._("{=Share this post}", [s.fbt._param("=Share this post", n.a.createElement("button", {
								className: x.a.linkText
							}, s.fbt._("Share this post", null, {
								hk: "xuWdX"
							})))], {
								hk: "16u8Oe"
							})))], {
								hk: "37kpnP"
							}));
						case c.b.NotAvailable:
							return n.a.createElement(n.a.Fragment, null, s.fbt._("Insights are only available for posts created after {date} .", [s.fbt._param("date", Object(r.a)(c.a / 1e3, {
								showDay: !0
							}))], {
								hk: "4qfr48"
							}), o && s.fbt._("{=Create a new post} to see how it performs!", [s.fbt._param("=Create a new post", n.a.createElement("a", {
								href: `/r/${a.name}/submit`,
								className: x.a.linkText
							}, s.fbt._("Create a new post", null, {
								hk: "OR9Dg"
							})))], {
								hk: "CDLiL"
							}));
						case c.b.Available:
							return o ? s.fbt._("Only you and mods of this community can see this", null, {
								hk: "1w08e1"
							}) : s.fbt._("Only the author of the post and mods can see this", null, {
								hk: "4Gwpc4"
							});
						default:
							return ""
					}
				})(d, t.post, t.subreddit, p, a => e(((t, e) => a => ({
					...Object(k.o)(a),
					action: N.c.CLICK,
					noun: t,
					source: "creator_stats",
					post: Object(k.I)(a, e),
					subreddit: Object(k.jb)(a),
					userSubreddit: Object(k.sb)(a)
				}))(a, t.post.id))))), d === c.b.Available && l && n.a.createElement(T.a, {
					isUserOp: p,
					upvoteRatio: t.post.upvoteRatio || void 0,
					postStats: l,
					subredditKarma: m
				}))
			}
		},
		"./src/redditGQL/operations/CreatorStats.json": function(t) {
			t.exports = JSON.parse('{"id":"b3a25d285bff"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CreatorStats.f9b275af538f3ca03a6f.js.map