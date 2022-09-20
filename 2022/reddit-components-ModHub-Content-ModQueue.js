// https://www.redditstatic.com/desktop2x/reddit-components-ModHub-Content-ModQueue.d64f596eefc13881988d.js
// Retrieved at 9/20/2022, 11:00:05 AM by Reddit Dataminer v1.0.0
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
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/controls/InternalLink/index.tsx"),
				p = n("./src/reddit/controls/Link/index.m.less"),
				b = n.n(p),
				C = n("./src/reddit/selectors/telemetry.ts");
			var f = n("./src/reddit/icons/fonts/index.tsx"),
				_ = n("./src/reddit/components/CrowdControlAdoptionCampaign/CrowdControlModQueueCTA.m.less"),
				N = n.n(_);
			var y = e => {
					let {
						subredditName: t,
						onDismiss: n
					} = e;
					const o = Object(l.b)();
					Object(s.useEffect)(() => {
						o((() => e => ({
							source: "modqueue",
							action: "view",
							noun: "cc_banner",
							subreddit: C.jb(e),
							...C.o(e)
						}))())
					}, [o]);
					return a.a.createElement("aside", {
						className: N.a.container
					}, a.a.createElement("div", {
						className: N.a.iconWrapper
					}, a.a.createElement(f.a, {
						name: "crowd_control",
						className: N.a.icon
					})), a.a.createElement("div", {
						className: N.a.contentWrapper
					}, a.a.createElement("h1", {
						className: N.a.heading
					}, r.fbt._("Your community may benefit from Crowd Control", null, {
						hk: "1SXwBi"
					})), a.a.createElement("p", {
						className: N.a.description
					}, r.fbt._("Crowd Control is a community setting that lets you automatically filter posts or comments from within your community (i.e., people with negative karma in your community). {=Try it out}.", [r.fbt._param("=Try it out", a.a.createElement(m.default, {
						className: `${b.a.link} ${N.a.link}`,
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
					}, r.fbt._("Try it out", null, {
						hk: "3r1RpO"
					})))], {
						hk: "FEBdR"
					}))), a.a.createElement(u.t, {
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
						"aria-label": r.fbt._("Dismiss crowd control message", null, {
							hk: "1aTxpe"
						})
					}))
				},
				g = n("./src/reddit/components/CrowdControlAdoptionCampaign/useCrowdControlCampaign.tsx"),
				h = n("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				x = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				k = n("./src/reddit/components/ModQueueList/index.tsx"),
				E = n("./src/reddit/components/ModQueueList/LayoutNavigation.tsx"),
				w = n("./src/reddit/components/ModHub/Content/index.m.less"),
				L = n.n(w);
			t.default = e => {
				const {
					showCrowdControlCampaign: t,
					dismissCrowdControlCampaign: n
				} = Object(g.a)();
				return a.a.createElement(x.a, {
					className: Object(i.a)(L.a.container, e.layout === c.g.Large ? L.a.isLargePostLayout : void 0)
				}, t && a.a.createElement(y, {
					subredditName: e.subredditName,
					onDismiss: n
				}), a.a.createElement(x.b, null, (e => {
					switch (e) {
						case "modqueue":
							return r.fbt._("Mod Queue", null, {
								hk: "XBRcQ"
							});
						case "reports":
							return r.fbt._("Reports", null, {
								hk: "14I8Zy"
							});
						case "spam":
							return r.fbt._("Spam", null, {
								hk: "3JIGi7"
							});
						case "edited":
							return r.fbt._("Edited", null, {
								hk: "3BN3ms"
							});
						case "unmoderated":
							return r.fbt._("Unmoderated", null, {
								hk: "36ryPx"
							});
						default:
							return r.fbt._("Mod Queue", null, {
								hk: "XBRcQ"
							})
					}
				})(e.pageName), a.a.createElement(h.a, {
					linkUrl: `${o.a.redditModHelpUrl}/hc/en-us/articles/360010090132`
				})), a.a.createElement(E.a, {
					hideSubredditFilter: !0,
					postTypeFilter: e.postTypeFilter,
					postSort: e.postSort,
					sendEventWithName: e.sendEventWithName,
					showTypeFilter: e.pageName !== d.kc.Unmoderated,
					subredditName: e.subredditName
				}), a.a.createElement(k.a, {
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModHub-Content-ModQueue.d64f596eefc13881988d.js.map