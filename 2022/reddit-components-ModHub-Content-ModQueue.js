// https://www.redditstatic.com/desktop2x/reddit-components-ModHub-Content-ModQueue.09c431d034f53066deee.js
// Retrieved at 9/22/2022, 10:30:05 AM by Reddit Dataminer v1.0.0
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
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/controls/InternalLink/index.tsx"),
				p = n("./src/reddit/controls/Link/index.m.less"),
				b = n.n(p),
				C = n("./src/reddit/selectors/telemetry.ts");
			var f = n("./src/reddit/icons/fonts/index.tsx"),
				x = n("./src/reddit/components/CrowdControlAdoptionCampaign/CrowdControlModQueueCTA.m.less"),
				_ = n.n(x);
			var N = e => {
					let {
						subredditName: t,
						onDismiss: n
					} = e;
					const o = Object(l.b)();
					Object(r.useEffect)(() => {
						o((() => e => ({
							source: "modqueue",
							action: "view",
							noun: "cc_banner",
							subreddit: C.jb(e),
							...C.o(e)
						}))())
					}, [o]);
					return i.a.createElement("aside", {
						className: _.a.container
					}, i.a.createElement("div", {
						className: _.a.iconWrapper
					}, i.a.createElement(f.a, {
						name: "crowd_control",
						className: _.a.icon
					})), i.a.createElement("div", {
						className: _.a.contentWrapper
					}, i.a.createElement("h1", {
						className: _.a.heading
					}, s.fbt._("Your community may benefit from Crowd Control", null, {
						hk: "1SXwBi"
					})), i.a.createElement("p", {
						className: _.a.description
					}, s.fbt._("Crowd Control is a community setting that lets you automatically filter posts or comments from within your community (i.e., people with negative karma in your community). {=Try it out}.", [s.fbt._param("=Try it out", i.a.createElement(m.default, {
						className: `${b.a.link} ${_.a.link}`,
						to: `/r/${t}/about/edit?page=safety`,
						onClick: () => {
							o((() => e => ({
								source: "modqueue",
								action: "click",
								noun: "cc_banner",
								subreddit: C.jb(e),
								...C.o(e)
							}))())
						}
					}, s.fbt._("Try it out", null, {
						hk: "3r1RpO"
					})))], {
						hk: "FEBdR"
					}))), i.a.createElement(u.t, {
						onClick: () => {
							o((() => e => ({
								source: "modqueue",
								action: "dismiss",
								noun: "cc_banner",
								subreddit: C.jb(e),
								...C.o(e)
							}))()), n()
						},
						priority: u.c.PlainLink,
						Icon: Object(f.b)("close"),
						isSquare: !0,
						size: u.d.XXS,
						"aria-label": s.fbt._("Dismiss crowd control message", null, {
							hk: "1aTxpe"
						})
					}))
				},
				y = n("./src/reddit/components/CrowdControlAdoptionCampaign/useCrowdControlCampaign.tsx"),
				g = n("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				h = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				w = n("./src/reddit/components/ModQueueList/index.tsx"),
				k = n("./src/reddit/components/ModQueueList/LayoutNavigation.tsx"),
				E = n("./src/reddit/components/ModHub/Content/index.m.less"),
				L = n.n(E);
			t.default = e => {
				const {
					showCrowdControlCampaign: t,
					dismissCrowdControlCampaign: n
				} = Object(y.a)();
				return i.a.createElement(h.a, {
					className: Object(a.a)(L.a.container, e.layout === c.g.Large ? L.a.isLargePostLayout : void 0)
				}, t && i.a.createElement(N, {
					subredditName: e.subredditName,
					onDismiss: n
				}), i.a.createElement(h.b, null, (e => {
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
				})(e.pageName), i.a.createElement(g.a, {
					linkUrl: `${o.a.redditModHelpUrl}/hc/en-us/articles/360010090132`
				})), i.a.createElement(k.a, {
					hideSubredditFilter: !0,
					postTypeFilter: e.postTypeFilter,
					postSort: e.postSort,
					sendEventWithName: e.sendEventWithName,
					showTypeFilter: e.pageName !== d.kc.Unmoderated,
					subredditName: e.subredditName
				}), i.a.createElement(w.a, {
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
				i = n("./src/reddit/constants/colors.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				d = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				c = n.n(d);
			const l = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: Object(r.a)(e.className, Object(a.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || i.a.gold
				}
			}), "CoinIcon", c.a);
			t.a = l
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModHub-Content-ModQueue.09c431d034f53066deee.js.map