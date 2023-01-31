// https://www.redditstatic.com/desktop2x/reddit-components-ModHub-Content-ModQueue.f8f2a9b06874be9cb0bd.js
// Retrieved at 1/30/2023, 7:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModHub-Content-ModQueue"], {
		"./src/reddit/components/ModHub/Content/ModQueue.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./src/config.ts"),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/throttle.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				d = s.n(i),
				l = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				u = s("./src/realtime/GQLSubscription/async.tsx"),
				b = s("./src/reddit/constants/postLayout.ts"),
				p = s("./src/reddit/actions/modQueue/realtime.ts"),
				x = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/controls/InternalLink/index.tsx"),
				_ = s("./src/reddit/selectors/telemetry.ts");
			var N = s("./src/reddit/controls/Button/index.tsx"),
				y = s("./src/reddit/icons/fonts/index.tsx");
			const E = e => {
					let {
						iconName: t,
						heading: s,
						children: n,
						onView: o = (() => {}),
						onDismiss: r = (() => {})
					} = e;
					Object(i.useEffect)(o, []);
					return d.a.createElement("aside", {
						className: "rounded-sm flex items-center mb-lg p-md bg-tone-7"
					}, d.a.createElement(y.a, {
						name: t,
						className: "text-24 p-sm bg-global-orangered text-white mr-md rounded-sm"
					}), d.a.createElement("div", {
						className: "flex-auto"
					}, d.a.createElement("h3", {
						className: "text-16 font-semibold leading-5"
					}, s), d.a.createElement("p", {
						className: "text-14"
					}, n)), d.a.createElement(N.t, {
						className: "self-start",
						onClick: () => r(),
						priority: N.c.PlainLink,
						Icon: Object(y.b)("close"),
						isSquare: !0,
						size: N.d.XXS,
						"aria-label": a.fbt._("Dismiss message", null, {
							hk: "3rWaLv"
						})
					}))
				},
				{
					fbt: g
				} = s("./node_modules/fbt/lib/FbtPublic.js"),
				h = e => {
					let {
						subredditName: t,
						onDismiss: s
					} = e;
					const n = Object(x.b)();
					return d.a.createElement(E, {
						iconName: "spam",
						onView: () => {
							n((() => e => ({
								source: "modqueue",
								action: "view",
								noun: "modmail_filter_banner",
								subreddit: _.lb(e),
								..._.o(e)
							}))())
						},
						onDismiss: () => {
							n((() => e => ({
								source: "modqueue",
								action: "dismiss",
								noun: "modmail_filter_banner",
								subreddit: _.lb(e),
								..._.o(e)
							}))()), s()
						},
						heading: g._("NEW! Automatically filter harassing messages from Modmail", null, {
							hk: "XrLvQ"
						})
					}, g._("To try it out, turn on the new Modmail filtered folder setting. {=Try it now}", [g._param("=Try it now", d.a.createElement(f.default, {
						className: "font-bold text-action-primary hover:underline",
						to: `/r/${t}/about/edit?page=safety`,
						onClick: () => {
							n((() => e => ({
								source: "modqueue",
								action: "click",
								noun: "modmail_filter_banner",
								subreddit: _.lb(e),
								..._.o(e)
							}))())
						}
					}, g._("Try it now", null, {
						hk: "1S0Nbm"
					})))], {
						hk: "1d7Tza"
					}))
				};
			var C = s("./src/reddit/components/CommunitySafetyFeatureAdoptionCampaign/ModmailHarassment/useModmailHarassmentAdoptionCampaign.tsx"),
				M = s("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				v = s("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				k = s("./src/reddit/components/ModQueueActivitySummaryCards/async.ts"),
				w = s("./src/reddit/components/ModQueueList/index.tsx"),
				L = s("./src/reddit/components/ModQueueList/LayoutNavigation.tsx"),
				O = s("./src/reddit/components/ModHub/Content/index.m.less"),
				j = s.n(O);
			t.default = e => {
				const {
					showCampaign: t,
					dismissCampaign: s
				} = Object(C.a)(), o = Object(l.d)(), x = Object(i.useCallback)(r()(t => {
					o(Object(p.a)(e.subredditId)), o(Object(p.c)(t))
				}, 1e3), []), f = Object(i.useMemo)(() => ({
					input: {
						channel: {
							teamOwner: "MOD",
							subredditID: e.subredditId,
							category: "MOD_UPDATE"
						}
					}
				}), [e.subredditId]);
				return d.a.createElement(v.a, {
					className: Object(c.a)(j.a.container, e.layout === b.g.Large ? j.a.isLargePostLayout : void 0)
				}, t && d.a.createElement(h, {
					subredditName: e.subredditName,
					onDismiss: s
				}), d.a.createElement("div", {
					className: j.a.titleContainer
				}, d.a.createElement(v.b, null, (e => {
					switch (e) {
						case "modqueue":
							return a.fbt._("Mod Queue", null, {
								hk: "XBRcQ"
							});
						case "reports":
							return a.fbt._("Reports", null, {
								hk: "14I8Zy"
							});
						case "spam":
							return a.fbt._("Spam", null, {
								hk: "3JIGi7"
							});
						case "edited":
							return a.fbt._("Edited", null, {
								hk: "3BN3ms"
							});
						case "unmoderated":
							return a.fbt._("Unmoderated", null, {
								hk: "36ryPx"
							});
						default:
							return a.fbt._("Mod Queue", null, {
								hk: "XBRcQ"
							})
					}
				})(e.pageName), d.a.createElement(M.a, {
					linkUrl: `${n.a.redditModHelpUrl}/hc/en-us/articles/360010090132`
				})), e.isRealtimeMQUpdatesExperimentEnabled ? d.a.createElement(d.a.Fragment, null, d.a.createElement(k.a, {
					className: j.a.modActivity
				}), d.a.createElement(u.a, {
					variables: f,
					onData: x,
					queryKey: "onModUpdate"
				})) : d.a.createElement("div", null)), d.a.createElement(L.a, {
					hideSubredditFilter: !0,
					postTypeFilter: e.postTypeFilter,
					postSort: e.postSort,
					sendEventWithName: e.sendEventWithName,
					showTypeFilter: e.pageName !== m.mc.Unmoderated,
					subredditName: e.subredditName
				}), d.a.createElement(w.a, {
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
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, s) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/constants/colors.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				d = s("./src/reddit/icons/fonts/Coin/index.m.less"),
				l = s.n(d);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: Object(o.a)(e.className, Object(i.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || r.a.gold
				}
			}), "CoinIcon", l.a);
			t.a = c
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModHub-Content-ModQueue.f8f2a9b06874be9cb0bd.js.map