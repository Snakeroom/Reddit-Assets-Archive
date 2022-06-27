// https://www.redditstatic.com/desktop2x/CreatorStats.4ec83c65bc235b3c4c53.js
// Retrieved at 6/27/2022, 1:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CreatorStats"], {
		"./src/reddit/components/CreatorStats/Stats.tsx": function(t, e, s) {
			"use strict";
			var o = s("./node_modules/core-js/modules/web.dom.iterable.js"),
				a = s.n(o),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s.n(r),
				i = s("./node_modules/react/index.js"),
				l = s.n(i),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/icons.ts"),
				u = s("./src/lib/hooks/useTooltip.ts"),
				b = s("./src/lib/prettyPrintNumber/index.ts"),
				p = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				m = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				h = s("./src/reddit/icons/fonts/index.tsx"),
				f = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				v = s("./src/reddit/components/CreatorStats/index.m.less"),
				O = s.n(v);

			function C() {
				return (C = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var s = arguments[e];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (t[o] = s[o])
					}
					return t
				}).apply(this, arguments)
			}
			const S = Object(f.a)({
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
				_ = Object(f.a)({
					resolved: {},
					chunkName: () => "CrosspostsStat",
					isReady(t) {
						const e = this.resolve(t);
						return !1 !== this.resolved[e] && !!s.m[e]
					},
					importAsync: () => s.e("CrosspostsStat").then(s.bind(null, "./src/reddit/components/CreatorStats/CrosspostsStat.tsx")),
					requireAsync(t) {
						const e = this.resolve(t);
						return this.resolved[e] = !1, this.importAsync(t).then(t => (this.resolved[e] = !0, t))
					},
					requireSync(t) {
						const e = this.resolve(t);
						return s(e)
					},
					resolve() {
						return "./src/reddit/components/CreatorStats/CrosspostsStat.tsx"
					}
				}, {
					ssr: !1
				}),
				j = {
					placement: "bottom-start",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, -2]
						}
					}]
				},
				N = t => {
					let {
						className: e,
						hoverTooltip: s,
						statNumber: o,
						statNumberClassName: a,
						statNumberIconName: r,
						statDescription: n,
						iconName: i,
						onStartHover: d,
						onStopHover: u,
						tooltipClassName: b,
						tooltipTitleClassName: m,
						tooltipTitleText: f,
						tooltipDescriptionText: v,
						tooltipExtra: S
					} = t;
					return l.a.createElement("div", {
						className: Object(c.a)(O.a.singleStat, e),
						onMouseEnter: d || s && s.show,
						onMouseLeave: u || s && s.hide,
						ref: s && s.target.ref
					}, l.a.createElement("div", {
						className: Object(c.a)(O.a.statNumber, a)
					}, o, r && l.a.createElement(h.a, {
						name: r,
						className: O.a.statNumberIcon
					})), l.a.createElement("div", {
						className: O.a.statDescription
					}, i && l.a.createElement(h.a, {
						name: i,
						className: O.a.icon
					}), n), s && l.a.createElement(p.a, C({}, s, {
						className: Object(c.a)(O.a.hoverTooltip, b)
					}), f && l.a.createElement("div", {
						className: Object(c.a)(O.a.tooltipTitle, m)
					}, f), v && l.a.createElement("div", {
						className: O.a.tooltipDescription
					}, v), S))
				},
				k = t => {
					let {
						className: e,
						leftStatNumber: s,
						leftStatDescription: o,
						rightStatNumber: a,
						rightStatDescription: r
					} = t;
					return l.a.createElement("div", {
						className: Object(c.a)(O.a.twoColumnContainer, e)
					}, l.a.createElement(N, {
						className: O.a.twoColumnSingleStat,
						statNumber: s,
						statNumberClassName: O.a.twoColumnStatNumber,
						statDescription: o
					}), l.a.createElement(N, {
						className: O.a.twoColumnSingleStat,
						statNumber: a,
						statNumberClassName: O.a.twoColumnStatNumber,
						statDescription: r
					}))
				},
				w = t => {
					var e, s, o, a, n, c;
					const p = Object(u.b)(j),
						h = Object(m.a)(),
						[f, v] = Object(i.useState)(!1),
						C = Object(i.useRef)(null),
						w = Object(i.useCallback)(t => {
							t.stopPropagation(), v(!0)
						}, []),
						T = Object(i.useCallback)(() => {
							h.show(), C.current && clearTimeout(C.current)
						}, [h]),
						y = Object(i.useCallback)(() => C.current = setTimeout(() => {
							v(!1), h.hide()
						}, 300), [h]);
					return Object(i.useEffect)(() => () => {
						C.current && clearTimeout(C.current)
					}, []), l.a.createElement("div", {
						className: O.a.statsContainer
					}, (null === (e = t.postStats.viewCountTotals) || void 0 === e ? void 0 : e.totalCount) && (null === (s = t.postStats.viewCountTrends) || void 0 === s ? void 0 : s.data) && (null === (o = t.postStats.viewCountTrends) || void 0 === o ? void 0 : o.data.length) > 0 && l.a.createElement(N, {
						hoverTooltip: p,
						statNumber: Object(b.b)(t.postStats.viewCountTotals.totalCount),
						statNumberIconName: d.a.statistics_fill,
						statDescription: r.fbt._("Total Views", null, {
							hk: "2xi7om"
						}),
						iconName: d.a.show,
						tooltipClassName: O.a.statsTooltip,
						tooltipExtra: l.a.createElement(S, {
							totalCount: t.postStats.viewCountTotals.totalCount,
							viewsData: t.postStats.viewCountTrends.data
						})
					}), l.a.createElement(N, {
						hoverTooltip: Object(m.a)(),
						statNumber: void 0 !== t.upvoteRatio ? `${Math.round(100*t.upvoteRatio).toString()}%` : r.fbt._("N/A", null, {
							hk: "1msIWk"
						}),
						statDescription: r.fbt._("Upvote Rate", null, {
							hk: "1lDa0E"
						}),
						iconName: d.a.upvote,
						tooltipTitleText: r.fbt._("Upvote Rate", null, {
							hk: "kJ3fu"
						}),
						tooltipDescriptionText: r.fbt._("The ratio between the number of upvotes and downvotes on your post.", null, {
							hk: "2GcnXN"
						})
					}), l.a.createElement(N, {
						hoverTooltip: Object(m.a)(),
						statNumber: void 0 !== t.subredditKarma && t.isUserOp ? Object(b.b)(t.subredditKarma.fromComments + t.subredditKarma.fromPosts) : r.fbt._("N/A", null, {
							hk: "1msIWk"
						}),
						statDescription: r.fbt._("Community Karma", null, {
							hk: "2iy1C6"
						}),
						iconName: d.a.karma,
						tooltipTitleText: r.fbt._("Community Karma", null, {
							hk: "3Rh5OO"
						}),
						tooltipDescriptionText: t.isUserOp ? r.fbt._("The total amount of karma you’ve earned in this community.", null, {
							hk: "4zYgiT"
						}) : r.fbt._("Available only for the author of the post", null, {
							hk: "4yp5u7"
						}),
						tooltipExtra: l.a.createElement(k, {
							leftStatNumber: void 0 !== t.subredditKarma && t.isUserOp ? Object(b.b)(t.subredditKarma.fromComments) : r.fbt._("N/A", null, {
								hk: "1msIWk"
							}),
							leftStatDescription: r.fbt._("Comment Karma", null, {
								hk: "B6gWH"
							}),
							rightStatNumber: null != t.subredditKarma && t.isUserOp ? Object(b.b)(t.subredditKarma.fromPosts) : r.fbt._("N/A", null, {
								hk: "1msIWk"
							}),
							rightStatDescription: r.fbt._("Post Karma", null, {
								hk: "1Raa2b"
							})
						})
					}), null != (null === (a = t.postStats.shareAllCountTotals) || void 0 === a ? void 0 : a.totalCount) && null != (null === (n = t.postStats.shareCopyCountTotals) || void 0 === n ? void 0 : n.totalCount) && l.a.createElement(N, {
						hoverTooltip: h,
						statNumber: Object(b.b)(t.postStats.shareAllCountTotals.totalCount),
						statDescription: r.fbt._("Total Shares", null, {
							hk: "3dSwgg"
						}),
						iconName: d.a.share_ios,
						onStartHover: T,
						onStopHover: y,
						tooltipClassName: O.a.crosspostsHoverTooltip,
						tooltipTitleText: r.fbt._({
							"*": "{post ownership} post was shared {number} times",
							_1: "{post ownership} post was shared 1 time"
						}, [r.fbt._param("post ownership", t.isUserOp ? "Your" : "This"), r.fbt._plural(parseInt(Object(b.b)(t.postStats.shareAllCountTotals.totalCount)), "number")], {
							hk: "22iJcd"
						}),
						tooltipTitleClassName: O.a.crosspostsStatTooltipTitle,
						tooltipExtra: l.a.createElement(k, {
							className: f ? O.a.twoRowContainer : void 0,
							leftStatNumber: t.postOtherDiscussions && 0 !== Object.keys(t.postOtherDiscussions).length ? l.a.createElement(_, {
								crosspostedDestinations: t.postOtherDiscussions,
								onClick: w,
								isExpanded: f,
								postId: t.postStats.id,
								postViews: (null === (c = t.postStats.viewCountTotals) || void 0 === c ? void 0 : c.totalCount) || 0
							}) : Object(b.b)(t.numCrossposts),
							leftStatDescription: r.fbt._("Crossposts", null, {
								hk: "26BfLD"
							}),
							rightStatNumber: Object(b.b)(t.postStats.shareCopyCountTotals.totalCount),
							rightStatDescription: r.fbt._("Link Shares", null, {
								hk: "3IIw6m"
							})
						})
					}))
				};
			e.a = w
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
				twoColumnStatNumber: "_1mgjIFa21KQTZ1rW_XmQZ2",
				singleStat: "_1Lg8Swn7dBvW0nGqe1otwk",
				twoRowContainer: "_2brvvnCKZErB_Yh-pAJbij",
				statNumber: "_1GYxwGvUImaYeMVNkdJD0d",
				statNumberIcon: "_2-UOXnaDoBiPk5c5k4H6Ql",
				statDescription: "_2XjmeZtC-BE7IBe1Iu36Xa",
				icon: "jL0CE0RprIm7WxeOUkQkX",
				hoverTooltip: "_1KsB3T19iQkJhr_UZ95Rof",
				tooltipTitle: "a-6WyjSpEmnkXxyVj87gS",
				crosspostsStatTooltipTitle: "UnPP-nDBd9MWjJ2uDodsx",
				tooltipDescription: "BK2NIA3409dVm0CnrnjQs",
				crosspostsHoverTooltip: "_1ykPgKJ3t-GrPgWdWPYWN_",
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/humanizeDate/index.ts"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				l = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/reddit/components/CreatorStats/helpers.ts"),
				u = s("./src/lib/makeGqlRequest/index.ts"),
				b = s("./src/redditGQL/operations/CreatorStats.json");
			var p = s("./src/reddit/selectors/creatorStats.ts"),
				m = s("./src/reddit/selectors/experiments/creatorStats.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				f = s("./src/reddit/selectors/subreddit.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/actions/creatorStats/constants.ts"),
				C = s("./src/lib/initializeClient/installReducer.ts"),
				S = s("./src/reddit/reducers/features/creatorStats/index.ts");
			Object(C.a)({
				features: {
					creatorStats: S.a
				}
			});
			const _ = Object(c.a)(O.b),
				j = Object(c.a)(O.a),
				N = (t, e, s) => {
					var o, a;
					if (!(s in t)) return !1;
					return !t[s].isQuarantined && !((null === (a = null === (o = t.crosspostRoot) || void 0 === o ? void 0 : o.postInfo) || void 0 === a ? void 0 : a.id) !== e)
				},
				k = t => {
					let {
						postId: e,
						subredditId: s
					} = t;
					return async (t, o, a) => {
						let {
							gqlContext: r
						} = a;
						var n, i;
						const l = o(),
							c = Object(h.G)(l, {
								postId: e
							});
						if (!(c && Object(d.d)(c.created))) return;
						if (null === (i = null === (n = o().features) || void 0 === n ? void 0 : n.creatorStats) || void 0 === i ? void 0 : i.postStats[e]) return;
						t(_());
						const p = await (async (t, e) => {
							return await Object(u.a)(t, {
								...b,
								variables: e
							})
						})(r(), {
							postId: e,
							subredditId: s
						});
						if (p.ok && p.body) {
							const {
								data: e
							} = p.body, s = (t => {
								var e;
								const s = {},
									o = {},
									a = {},
									r = {},
									{
										postInfoById: n,
										postStatsById: i,
										subredditInfoById: l
									} = t;
								if (!i) return;
								const {
									id: c
								} = i;
								return s[c] = i, l && "id" in l && (o[l.id] = l), "SubredditPost" !== (null == n ? void 0 : n.__typename) && "ProfilePost" !== (null == n ? void 0 : n.__typename) || (null === (e = n.otherDiscussions) || void 0 === e || e.edges.forEach(t => {
									var e, s;
									const o = null == t ? void 0 : t.node;
									if ("SubredditPost" === (null == o ? void 0 : o.__typename)) {
										if (N(o, c, "subreddit")) {
											const t = o.subreddit.prefixedName;
											a[t] = {
												iconUrl: null === (e = o.subreddit.styles) || void 0 === e ? void 0 : e.icon,
												postUrl: o.permalink
											}
										}
									} else if ("ProfilePost" === (null == o ? void 0 : o.__typename)) {
										if (N(o, c, "profile")) {
											const t = `u/${o.profile.redditorInfo.displayName}`;
											a[t] = {
												iconUrl: null === (s = o.profile.styles) || void 0 === s ? void 0 : s.icon,
												postUrl: o.permalink
											}
										}
									}
								}), r[c] = a), {
									postOtherDiscussions: r,
									postStats: s,
									subredditKarma: o
								}
							})(e);
							s && t(j(s))
						}
					}
				};
			var w = s("./src/reddit/components/ShareMenu/index.tsx"),
				T = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				y = s("./src/reddit/hooks/useTracking.ts"),
				I = s("./src/reddit/components/CreatorStats/index.m.less"),
				x = s.n(I),
				E = s("./src/reddit/components/CreatorStats/Stats.tsx");
			e.default = t => {
				const e = Object(y.a)(),
					s = Object(l.d)(),
					[c, u] = Object(n.useState)(d.b.NotAvailableYet);
				Object(n.useEffect)(() => {
					const e = t.post.id,
						o = t.subreddit.id;
					t.isOwnProfileStats ? s((t => {
						let {
							postId: e,
							subredditId: s
						} = t;
						return async (t, o) => {
							const a = o();
							Object(m.a)(a) && Object(v.Db)(a, {
								postId: e
							}) && (Object(f.U)(a, {
								subredditId: s
							}).isQuarantined || t(k({
								postId: e,
								subredditId: s
							})))
						}
					})({
						postId: e,
						subredditId: o
					})) : s((t => {
						let {
							postId: e,
							subredditId: s
						} = t;
						return async (t, o) => {
							const a = o();
							Object(p.a)(a, e) && t(k({
								postId: e,
								subredditId: s
							}))
						}
					})({
						postId: e,
						subredditId: o
					}))
				}, [t.isOwnProfileStats, t.post.id, t.subreddit.id, s]);
				const b = Object(l.e)(e => Object(p.b)(e, t.post.id)),
					h = Object(l.e)(e => Object(p.c)(e, t.post.id)),
					O = Object(l.e)(e => Object(p.d)(e, t.subreddit.id)),
					C = Object(l.e)(e => Object(v.Db)(e, {
						postId: t.post.id
					}));
				Object(n.useEffect)(() => {
					const e = Object(d.c)(t.post, h, t.isOwnProfileStats, t.subreddit.isQuarantined);
					u(e)
				}, [t.post, h, t.isOwnProfileStats, t.subreddit.isQuarantined]), Object(n.useEffect)(() => {
					var s;
					if (t.isOwnProfileStats) {
						const o = (null === (s = null == h ? void 0 : h.viewCountTotals) || void 0 === s ? void 0 : s.totalCount) || 0;
						e(Object(T.e)(t.post.id, c, o))
					} else e(Object(T.f)(t.post.id, c))
				}, [e, t.post.id, c, h, t.isOwnProfileStats]);
				const S = Object(n.useCallback)(() => {
					var s;
					const o = (null === (s = null == h ? void 0 : h.viewCountTotals) || void 0 === s ? void 0 : s.totalCount) || 0;
					e(Object(T.c)(t.post.id, c, o))
				}, [e, t.post.id, c, h]);
				return i.a.createElement("div", {
					className: Object(a.a)(x.a.container, t.className)
				}, i.a.createElement("div", {
					className: x.a.titleContainer
				}, i.a.createElement("div", {
					className: x.a.title
				}, o.fbt._("Post Insights", null, {
					hk: "3ZuB9z"
				})), i.a.createElement("div", {
					className: x.a.subtitle
				}, ((t, e, s, a, n, l) => {
					switch (t) {
						case d.b.NotAvailableYet:
							return i.a.createElement(i.a.Fragment, null, o.fbt._("Check back later to see views, shares, and more.", null, {
								hk: "4rItwf"
							}), " ", a && o.fbt._("{=Share your post} to spread the word!", [o.fbt._param("=Share your post", i.a.createElement(w.a, {
								className: x.a.shareMenu,
								dropdownId: "share-menu-creator-stats",
								permalink: e.permalink,
								post: e,
								sendEventWithName: n,
								subredditType: s.type
							}, o.fbt._("{=Share your post}", [o.fbt._param("=Share your post", i.a.createElement("button", {
								className: x.a.linkText,
								onClick: l
							}, o.fbt._("Share your post", null, {
								hk: "4afsjM"
							})))], {
								hk: "1YHWPm"
							})))], {
								hk: "1pr8Cr"
							}));
						case d.b.NotAvailable:
							return i.a.createElement(i.a.Fragment, null, o.fbt._("Insights are only available for posts created after {date}.", [o.fbt._param("date", Object(r.a)(d.a / 1e3, {
								showDay: !0
							}))], {
								hk: "44JOdg"
							}), " ", a && o.fbt._("{=Create a new post} and see how it performs!", [o.fbt._param("=Create a new post", i.a.createElement("a", {
								href: `/r/${s.name}/submit`,
								className: x.a.linkText
							}, o.fbt._("Create a new post", null, {
								hk: "ByQXU"
							})))], {
								hk: "3MXH1f"
							}));
						case d.b.Available:
							return a ? o.fbt._("Only you and mods of this community can see this", null, {
								hk: "1w08e1"
							}) : o.fbt._("Only the author of the post and mods can see this", null, {
								hk: "4Gwpc4"
							});
						case d.b.Expired:
							return i.a.createElement(i.a.Fragment, null, o.fbt._("Insights are only available for 45 days after post creation.", null, {
								hk: "3ZzrwZ"
							}), " ", a && o.fbt._("{=Create a new post} and see how it performs!", [o.fbt._param("=Create a new post", i.a.createElement("a", {
								href: `/r/${s.name}/submit`,
								className: x.a.linkText
							}, o.fbt._("Create a new post", null, {
								hk: "ByQXU"
							})))], {
								hk: "3MXH1f"
							}));
						case d.b.Quarantined:
							return o.fbt._("Looks like insights are not available for this post.", null, {
								hk: "3xLVdj"
							});
						default:
							return ""
					}
				})(c, t.post, t.subreddit, C, s => e(Object(T.b)(s, t.post.id)), t.isOwnProfileStats ? S : void 0))), c === d.b.Available && h && i.a.createElement(E.a, {
					isUserOp: C,
					upvoteRatio: t.post.upvoteRatio || void 0,
					postOtherDiscussions: t.isOwnProfileStats ? b : void 0,
					postStats: h,
					numCrossposts: t.post.numCrossposts,
					subredditKarma: O
				}))
			}
		},
		"./src/reddit/helpers/trackers/creatorStats.ts": function(t, e, s) {
			"use strict";
			s.d(e, "f", (function() {
				return i
			})), s.d(e, "b", (function() {
				return l
			})), s.d(e, "d", (function() {
				return d
			})), s.d(e, "e", (function() {
				return u
			})), s.d(e, "a", (function() {
				return b
			})), s.d(e, "c", (function() {
				return p
			}));
			var o = s("./src/reddit/components/CreatorStats/helpers.ts"),
				a = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const n = t => {
					switch (t) {
						case o.b.Available:
							return "insights_shown";
						case o.b.NotAvailableYet:
							return "not_enough_views";
						case o.b.NotAvailable:
							return "post_too_old";
						case o.b.Expired:
							return "insights_expired";
						default:
							return ""
					}
				},
				i = (t, e) => s => ({
					...Object(r.n)(s),
					action: a.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(r.hb)(s),
					post: Object(r.I)(s, t),
					userSubreddit: Object(r.rb)(s),
					actionInfo: Object(r.d)(s, {
						reason: n(e)
					})
				}),
				l = (t, e) => s => ({
					...Object(r.n)(s),
					action: a.c.CLICK,
					noun: t,
					source: "creator_stats",
					post: Object(r.I)(s, e),
					subreddit: Object(r.hb)(s),
					userSubreddit: Object(r.rb)(s)
				}),
				c = t => {
					switch (t) {
						case o.b.Available:
							return "stats";
						case o.b.NotAvailableYet:
							return "not_enough_views";
						case o.b.NotAvailable:
						case o.b.Expired:
							return "no_data";
						case o.b.Quarantined:
							return "quarantined";
						default:
							return ""
					}
				},
				d = t => e => ({
					...Object(r.n)(e),
					action: a.c.CLICK,
					noun: "post_stats",
					source: "post",
					actionInfo: Object(r.d)(e, {
						pageType: "profile"
					}),
					post: Object(r.I)(e, t, void 0, 0),
					profile: Object(r.R)(e)
				}),
				u = (t, e, s) => o => ({
					...Object(r.n)(o),
					action: a.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(r.d)(o, {
						reason: c(e)
					}),
					post: Object(r.I)(o, t, void 0, s)
				}),
				b = (t, e, s, o, n, i) => l => ({
					...Object(r.n)(l),
					action: a.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(r.d)(l, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(r.I)(l, t, void 0, i),
					subreddit: Object(r.hb)(l),
					outbound: {
						postId: s,
						url: e,
						subredditId: o,
						subredditName: n
					}
				}),
				p = (t, e, s) => o => ({
					...Object(r.n)(o),
					action: a.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(r.d)(o, {
						pageType: "post_stats",
						reason: c(e)
					}),
					post: Object(r.I)(o, t, void 0, s),
					subreddit: Object(r.hb)(o)
				})
		},
		"./src/reddit/selectors/experiments/creatorStats.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return n
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				a = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const n = t => {
				return Object(a.c)(t, {
					experimentEligibilitySelector: r.Q,
					experimentName: o.Ne
				}) === o.vd
			}
		},
		"./src/redditGQL/operations/CreatorStats.json": function(t) {
			t.exports = JSON.parse('{"id":"556ffe7b3296"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CreatorStats.4ec83c65bc235b3c4c53.js.map