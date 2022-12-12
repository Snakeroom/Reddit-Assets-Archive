// https://www.redditstatic.com/desktop2x/reddit-components-ModHub-Content-ModQueue.ccdd0beb3e1c1066315c.js
// Retrieved at 12/12/2022, 12:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModHub-Content-ModQueue"], {
		"./src/reddit/components/CrowdControlAdoptionCampaign/CrowdControlModQueueCTA.m.less": function(e, t, n) {
			e.exports = {
				container: "_2hBKGDUw3WZSgfHxbC1F3q",
				iconWrapper: "_1CDWYLMPOcgoFg94it8gFB",
				icon: "_2z7cRwMJ0XWiNSlb5JDd-V",
				contentWrapper: "_1IAU81f04QBWeGl7B4OobS",
				heading: "-DPiKXzJID6WByNnx2GhV",
				description: "_3oS91GK9v_BEdf87NnspgU",
				link: "l6ezzBokvILdCN1L5Shd2"
			}
		},
		"./src/reddit/components/ModHub/Content/ModQueue.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/throttle.js"),
				a = n.n(r),
				i = n("./node_modules/react/index.js"),
				d = n.n(i),
				c = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/constants/index.ts"),
				u = n("./src/realtime/GQLSubscription/async.tsx"),
				p = n("./src/reddit/constants/postLayout.ts"),
				b = n("./src/reddit/actions/modQueue/realtime.ts"),
				C = n("./src/reddit/components/TrackingHelper/index.tsx"),
				x = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/controls/InternalLink/index.tsx"),
				_ = n("./src/reddit/controls/Link/index.m.less"),
				y = n.n(_),
				N = n("./src/reddit/selectors/telemetry.ts");
			var E = n("./src/reddit/icons/fonts/index.tsx"),
				h = n("./src/reddit/components/CrowdControlAdoptionCampaign/CrowdControlModQueueCTA.m.less"),
				g = n.n(h);
			var w = e => {
					let {
						subredditName: t,
						onDismiss: n
					} = e;
					const o = Object(C.b)();
					Object(i.useEffect)(() => {
						o((() => e => ({
							source: "modqueue",
							action: "view",
							noun: "cc_banner",
							subreddit: N.lb(e),
							...N.o(e)
						}))())
					}, [o]);
					return d.a.createElement("aside", {
						className: g.a.container
					}, d.a.createElement("div", {
						className: g.a.iconWrapper
					}, d.a.createElement(E.a, {
						name: "crowd_control",
						className: g.a.icon
					})), d.a.createElement("div", {
						className: g.a.contentWrapper
					}, d.a.createElement("h1", {
						className: g.a.heading
					}, s.fbt._("Your community may benefit from Crowd Control", null, {
						hk: "1SXwBi"
					})), d.a.createElement("p", {
						className: g.a.description
					}, s.fbt._("Crowd Control is a community setting that lets you automatically filter posts or comments from within your community (i.e., people with negative karma in your community). {=Try it out}.", [s.fbt._param("=Try it out", d.a.createElement(f.default, {
						className: `${y.a.link} ${g.a.link}`,
						to: `/r/${t}/about/edit?page=safety`,
						onClick: () => {
							o((() => e => ({
								source: "modqueue",
								action: "click",
								noun: "cc_banner",
								subreddit: N.lb(e),
								...N.o(e)
							}))())
						}
					}, s.fbt._("Try it out", null, {
						hk: "3r1RpO"
					})))], {
						hk: "FEBdR"
					}))), d.a.createElement(x.t, {
						onClick: () => {
							o((() => e => ({
								source: "modqueue",
								action: "dismiss",
								noun: "cc_banner",
								subreddit: N.lb(e),
								...N.o(e)
							}))()), n()
						},
						priority: x.c.PlainLink,
						Icon: Object(E.b)("close"),
						isSquare: !0,
						size: x.d.XXS,
						"aria-label": s.fbt._("Dismiss crowd control message", null, {
							hk: "1aTxpe"
						})
					}))
				},
				k = n("./src/reddit/components/CrowdControlAdoptionCampaign/useCrowdControlCampaign.tsx"),
				v = n("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				L = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				M = n("./src/reddit/components/ModQueueActivitySummaryCards/async.ts"),
				O = n("./src/reddit/components/ModQueueList/index.tsx"),
				D = n("./src/reddit/components/ModQueueList/LayoutNavigation.tsx"),
				Q = n("./src/reddit/components/ModHub/Content/index.m.less"),
				S = n.n(Q);
			t.default = e => {
				const {
					showCrowdControlCampaign: t,
					dismissCrowdControlCampaign: n
				} = Object(k.a)(), r = Object(c.d)(), C = Object(i.useCallback)(a()(t => {
					r(Object(b.a)(e.subredditId)), r(Object(b.c)(t))
				}, 1e3), []), x = Object(i.useMemo)(() => ({
					input: {
						channel: {
							teamOwner: "MOD",
							subredditID: e.subredditId,
							category: "MOD_UPDATE"
						}
					}
				}), [e.subredditId]);
				return d.a.createElement(L.a, {
					className: Object(l.a)(S.a.container, e.layout === p.g.Large ? S.a.isLargePostLayout : void 0)
				}, t && d.a.createElement(w, {
					subredditName: e.subredditName,
					onDismiss: n
				}), d.a.createElement("div", {
					className: S.a.titleContainer
				}, d.a.createElement(L.b, null, (e => {
					switch (e) {
						case "modqueue":
							return s.fbt._("Mod Queue", null, {
								hk: "XBRcQ"
							});
						case "reports":
							return s.fbt._("Reports", null, {
								hk: "14I8Zy"
							});
						case "spam":
							return s.fbt._("Spam", null, {
								hk: "3JIGi7"
							});
						case "edited":
							return s.fbt._("Edited", null, {
								hk: "3BN3ms"
							});
						case "unmoderated":
							return s.fbt._("Unmoderated", null, {
								hk: "36ryPx"
							});
						default:
							return s.fbt._("Mod Queue", null, {
								hk: "XBRcQ"
							})
					}
				})(e.pageName), d.a.createElement(v.a, {
					linkUrl: `${o.a.redditModHelpUrl}/hc/en-us/articles/360010090132`
				})), e.isRealtimeMQUpdatesExperimentEnabled ? d.a.createElement(d.a.Fragment, null, d.a.createElement(M.a, {
					className: S.a.modActivity
				}), d.a.createElement(u.a, {
					variables: x,
					onData: C,
					queryKey: "onModUpdate"
				})) : d.a.createElement("div", null)), d.a.createElement(D.a, {
					hideSubredditFilter: !0,
					postTypeFilter: e.postTypeFilter,
					postSort: e.postSort,
					sendEventWithName: e.sendEventWithName,
					showTypeFilter: e.pageName !== m.mc.Unmoderated,
					subredditName: e.subredditName
				}), d.a.createElement(O.a, {
					after: e.after,
					layout: e.layout,
					sendEventWithName: e.sendEventWithName,
					subredditName: e.subredditName,
					page: e.page,
					pageName: e.pageName,
					postTypeFilter: e.postTypeFilter,
					postSort: e.postSort
				}))
			}
		},
		"./src/reddit/controls/Link/index.m.less": function(e, t, n) {
			e.exports = {
				link: "zrXDKcys3Vl7vt1f6ef4V"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, n) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				d = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				c = n.n(d);
			const l = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: Object(r.a)(e.className, Object(i.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || a.a.gold
				}
			}), "CoinIcon", c.a);
			t.a = l
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModHub-Content-ModQueue.ccdd0beb3e1c1066315c.js.map