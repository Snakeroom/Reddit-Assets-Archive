// https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards.ef2964abef0e25314c81.js
// Retrieved at 1/4/2023, 12:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModQueueActivitySummaryCards", "reddit-components-ModQueueActivitySummaryCards-ModActivityPreview"], {
		"./src/reddit/components/ModQueueActivitySummaryCards/ModActivityPreview.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/higherOrderComponents/asTooltip.tsx"),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/UserIcon/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/index.tsx"),
				m = s("./src/reddit/helpers/graphql/helpers.ts"),
				b = s("./src/reddit/helpers/trackers/modListing.ts"),
				v = s("./src/reddit/hooks/useTracking.ts"),
				p = s("./src/reddit/selectors/modQueue.ts"),
				g = s("./src/reddit/selectors/platform.ts"),
				h = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/selectors/tooltip.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/components/ModQueueActivitySummaryCards/index.m.less"),
				x = s.n(y),
				f = s("./src/config.ts"),
				j = s("./node_modules/fbt/lib/FbtPublic.js"),
				E = s("./src/lib/timeAgo/index.ts"),
				k = s("./src/reddit/components/ModQueueActivitySummaryCards/helpers.ts");
			const C = `${f.a.assetPath}/img/snoo-sunglasses.png`,
				S = e => {
					let {
						modAction: t,
						modInfo: s
					} = e;
					var n, a, r;
					const d = (null == s ? void 0 : s.displayName) || (null == s ? void 0 : s.name);
					return i.a.createElement("div", {
						className: Object(o.a)(x.a.modRow, "hover:bg-neutral-background-hover"),
						onClick: e => {
							e.stopPropagation(), e.preventDefault()
						}
					}, i.a.createElement(l.a, {
						className: x.a.modIcon,
						userName: d || "",
						iconUrl: null === (n = null == s ? void 0 : s.icon) || void 0 === n ? void 0 : n.url,
						isNSFW: !!(null === (a = null == s ? void 0 : s.profile) || void 0 === a ? void 0 : a.isNsfw),
						style: {
							height: "24px",
							width: "24px"
						}
					}), i.a.createElement("div", {
						className: x.a.subredditRowText
					}, i.a.createElement("div", {
						className: Object(o.a)(x.a.username, "text-neutral-content-strong")
					}, d), i.a.createElement("div", {
						className: Object(o.a)(x.a.detailText, "text-neutral-content-weak")
					}, t && i.a.createElement(i.a.Fragment, null, Object(k.a)(t.action, null === (r = t.target) || void 0 === r ? void 0 : r.__typename), " ", Object(E.d)(Object(m.g)(t.createdAt) / 1e3)))))
				},
				N = e => {
					let {
						mostRecentAction: t
					} = e;
					return i.a.createElement("div", {
						className: x.a.emptyTooltip
					}, i.a.createElement("img", {
						alt: j.fbt._("Snoo face image", null, {
							hk: "35RYyE"
						}),
						src: C,
						className: x.a.snooImage
					}), i.a.createElement("div", {
						className: Object(o.a)(x.a.emptyText, "text-neutral-content-strong")
					}, j.fbt._("The queue is all yours", null, {
						hk: "16NnPV"
					})), i.a.createElement("div", {
						className: Object(o.a)(x.a.emptyDetailText, "text-neutral-content-weak")
					}, j.fbt._("We’ll let you know if another mod joins you in moderating the community.", null, {
						hk: "4EOUML"
					})), t && i.a.createElement("div", {
						className: x.a.lastActionContainer
					}, i.a.createElement("div", {
						className: Object(o.a)(x.a.lastActionTitle, "text-neutral-content-weak")
					}, j.fbt._("Last Action taken", null, {
						hk: "4F3ynJ"
					})), i.a.createElement(S, {
						modAction: t,
						modInfo: t.moderatorInfo
					})))
				},
				w = e => {
					let {
						orderedModsList: t,
						subredditName: s,
						mods: n,
						mostRecentAction: a
					} = e;
					return 0 === t.length ? i.a.createElement(N, {
						mostRecentAction: a
					}) : i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: Object(o.a)(x.a.tooltipTitle, "text-neutral-content-weak")
					}, t.length, " ", j.fbt._({
						"*": "mods active in r/",
						_1: "mod active in r/"
					}, [j.fbt._plural(t.length)], {
						hk: "3o3C52"
					}), s), n && t.slice(0, 10).map(e => {
						var t, s;
						return i.a.createElement(S, {
							modAction: null === (t = n[e]) || void 0 === t ? void 0 : t.lastModAction,
							modInfo: null === (s = n[e]) || void 0 === s ? void 0 : s.info,
							key: e
						})
					}), t.length > 10 && i.a.createElement("div", {
						className: Object(o.a)(x.a.detailText, x.a.more, "text-neutrtal-content-weak")
					}, "+", t.length - 10, " ", j.fbt._("more active moderators", null, {
						hk: "13CPFV"
					})))
				},
				T = Object(n.a)(u.a),
				A = e => e ? Object.keys(e).sort((t, s) => ((e, t, s) => {
					var n, o, a, r;
					const i = null === (o = null === (n = s[e]) || void 0 === n ? void 0 : n.lastModAction) || void 0 === o ? void 0 : o.createdAt,
						d = null === (r = null === (a = s[t]) || void 0 === a ? void 0 : a.lastModAction) || void 0 === r ? void 0 : r.createdAt,
						c = Object(m.g)(i || "");
					return Object(m.g)(d || "") - c
				})(t, s, e)).filter(t => {
					var s, n;
					return (new Date).getTime() - Object(m.g)((null === (n = null === (s = e[t]) || void 0 === s ? void 0 : s.lastModAction) || void 0 === n ? void 0 : n.createdAt) || "") < 15 * a.pb
				}) : [];
			t.default = e => {
				let {
					className: t,
					subredditId: s,
					maxMods: n,
					isModqueue: a
				} = e;
				var u;
				const m = Object(d.e)(g.c),
					y = s || m,
					f = Object(d.e)(e => Object(h.h)(e, {
						subredditId: y || ""
					})) || "",
					j = Object(d.e)(e => {
						var t;
						return (null === (t = null == e ? void 0 : e.features) || void 0 === t ? void 0 : t.modActivitySummaries[y || ""]) || {}
					}),
					{
						mods: E
					} = j,
					k = Object(r.useCallback)(e => A(e), [])(E),
					C = 0 === k.length && f ? null === (u = null == j ? void 0 : j.sub) || void 0 === u ? void 0 : u.lastModAction : void 0,
					S = (e => `mod_activity_tooltip_id-${e}`)(f || ""),
					N = Object(d.d)(),
					I = Object(v.a)(),
					M = Object(r.useCallback)(e => {
						e.stopPropagation(), e.preventDefault(), N(Object(c.h)({
							tooltipId: S
						})), I(Object(b.a)(!!a, f))
					}, [N, S, I, f, a]),
					D = Object(d.e)(e => Object(O.b)(S)(e)),
					P = Object(d.e)(p.c),
					R = Object(d.e)(_.m),
					L = n || 5;
				return i.a.createElement("div", {
					className: Object(o.a)(x.a.preview, t),
					id: S,
					onClick: M,
					"data-testid": "mod-activity-preview"
				}, E && k.length > 0 ? k.slice(0, L).map((e, t) => {
					var s, n, a, r, d, c, u, m, b, v;
					return i.a.createElement(l.a, {
						className: Object(o.a)(x.a.userIcon, {
							[x.a.noMargin]: t === k.length - 1 && !(t === L - 1 && k.length > L)
						}),
						style: {
							height: "24px",
							width: "24px"
						},
						key: null === (n = null === (s = E[e]) || void 0 === s ? void 0 : s.info) || void 0 === n ? void 0 : n.displayName,
						userName: (null === (r = null === (a = E[e]) || void 0 === a ? void 0 : a.info) || void 0 === r ? void 0 : r.displayName) || "",
						iconUrl: null === (u = null === (c = null === (d = E[e]) || void 0 === d ? void 0 : d.info) || void 0 === c ? void 0 : c.icon) || void 0 === u ? void 0 : u.url,
						isNSFW: !!(null === (v = null === (b = null === (m = E[e]) || void 0 === m ? void 0 : m.info) || void 0 === b ? void 0 : b.profile) || void 0 === v ? void 0 : v.isNsfw)
					})
				}) : P ? null : i.a.createElement(l.a, {
					className: Object(o.a)(x.a.userIcon, x.a.noMargin),
					userName: (null == R ? void 0 : R.displayName) || "",
					iconUrl: null == R ? void 0 : R.accountIcon,
					isNSFW: !1,
					style: {
						height: "24px",
						width: "24px"
					}
				}), k.length > L && i.a.createElement("div", {
					className: Object(o.a)(x.a.moreMods, "text-neutral-content-weak")
				}, "+", k.length - L), i.a.createElement(T, {
					tooltipId: S,
					isOpen: D,
					className: x.a.tooltip,
					targetPosition: ["right", "bottom"],
					tooltipPosition: ["right", "top"]
				}, i.a.createElement(w, {
					orderedModsList: k,
					subredditName: f || "",
					mods: E,
					mostRecentAction: C
				})))
			}
		},
		"./src/reddit/components/ModQueueActivitySummaryCards/index.m.less": function(e, t, s) {
			e.exports = {
				widget: "_2S3Rmz2Q8AgpyxfJD6L9Ni",
				titleContainer: "pg3jNvZKVsr3JdwcUwg2Q",
				widgetContent: "k9g6oop3qzXe5kYHchR2G",
				modIcon: "_3_ODW9yvfhSXaAyu-nkEVf",
				subredditIcon: "_3xHqnRKD2oZKVSbBsrhnhK",
				modRow: "_5sL4TmBPDSK5a3KCST8_D",
				subredditRow: "_13BVggQ6qexDLjYZd0OF_G",
				subredditRowText: "_251DNBern7Si-he5HNkDm7",
				emptyCard: "_1Df-DRjGp1nY8gKsqVuIWB",
				emptyText: "_25rN30WWKtFVSZo9ZhYJLx",
				subredditName: "_1-JqcOMFgfEZRr9C1rwtvN",
				tooltipTitle: "Edh6iORXd4A_ZV0h1CB8j",
				username: "_3iBG4sU_nNewURNnz2rmHn",
				emptyDetailText: "_138KBSl-Hzt-QdKbcCX4tv",
				detailText: "_1rZ6aZqtR9nzTvKOqVb7dP",
				snooImage: "Vg69__zCqDdWEkb_CTQcn",
				headerButtonContainer: "EzEg04ghsOqxnE1GnfnIr",
				headerButtonIcon: "yga1BOrh_Ki70reuqnYLi",
				up: "B30eRoRGRtXKAX8-rAmXV",
				more: "_22P9QU0SjkaqhoKGnofYXo",
				preview: "_2akotn_qPD4--TkwhPFyTR",
				moreMods: "NbzlGrDvVUNrngQOyDY28",
				userIcon: "_1hC77l9y_LwLvok2bogZDP",
				noMargin: "_3K_wetbUvC8wNm6ueBwvh-",
				tooltip: "kRLDbyQSWoBrnkmHt5nmj",
				emptyTooltip: "_1yrR_PVgnpPVl0FS5aNxmY",
				lastActionContainer: "rU1nWYL0Qtmi0poIUJXmm",
				lastActionTitle: "_2bxj74obMqZ-SI9UrnCg7x"
			}
		},
		"./src/reddit/components/ModQueueActivitySummaryCards/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "SNOO_NO_MOUTH_IMAGE_PATH", (function() {
				return T
			})), s.d(t, "SNOO_THUMBS_UP_IMAGE_PATH", (function() {
				return A
			})), s.d(t, "INACTIVE_MOD_SUMMARIES_COLLAPSED", (function() {
				return D
			})), s.d(t, "ACTIVE_MOD_SUMMARIES_COLLAPSED", (function() {
				return P
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/config.ts"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/addQueryParams/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/filterQueryParams/index.ts"),
				m = s("./src/lib/timeAgo/index.ts"),
				b = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				v = s("./src/reddit/components/SubredditIcon/index.tsx"),
				p = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/controls/InternalLink/index.tsx"),
				O = s("./src/reddit/helpers/graphql/helpers.ts"),
				_ = s("./src/reddit/helpers/trackers/modListing.ts"),
				y = s("./src/reddit/hooks/useLocalStorage.ts"),
				x = s("./src/reddit/hooks/usePageLayer.ts"),
				f = s("./src/reddit/hooks/useTracking.ts"),
				j = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				E = s("./src/reddit/selectors/meta.ts"),
				k = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/components/ModQueueActivitySummaryCards/index.m.less"),
				S = s.n(C),
				N = s("./src/reddit/components/ModQueueActivitySummaryCards/ModActivityPreview.tsx");

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const T = `${n.a.assetPath}/img/snoo-no-mouth.png`,
				A = `${n.a.assetPath}/img/snoo-thumbs-up.png`,
				I = e => {
					let {
						subredditId: t,
						activityData: s,
						origin: n,
						currentPageUrl: l
					} = e;
					var b, p, g;
					const y = Object(i.e)(e => Object(k.X)(e, {
							subredditId: t
						})),
						x = Object(f.a)(),
						j = Object(a.useCallback)(() => {
							x(Object(_.b)(Object.keys((null == s ? void 0 : s.mods) || {}).length > 0, y.name, !0))
						}, [x, s.mods, y.name]);
					return r.a.createElement(h.default, {
						className: Object(c.a)(S.a.subredditRow, "hover:bg-neutral-background-hover"),
						key: null == y ? void 0 : y.displayText,
						to: Object(d.a)(Object(u.a)(`${n}${l}`, ["after", "before", "page", "profile", "subreddit"]), {
							subreddit: null == y ? void 0 : y.name
						}),
						onClick: j
					}, r.a.createElement(v.b, {
						className: S.a.subredditIcon,
						iconUrl: "",
						subredditOrProfile: y
					}), r.a.createElement("div", {
						className: S.a.subredditRowText
					}, r.a.createElement("div", {
						className: Object(c.a)(S.a.subredditName, "text-neutral-content-strong")
					}, null == y ? void 0 : y.displayText), r.a.createElement("div", {
						className: Object(c.a)(S.a.detailText, "text-neutral-content-weak")
					}, (null === (p = null === (b = null == s ? void 0 : s.sub) || void 0 === b ? void 0 : b.lastModAction) || void 0 === p ? void 0 : p.createdAt) ? r.a.createElement(r.a.Fragment, null, o.fbt._("Last action", null, {
						hk: "2lt40w"
					}), " ", Object(m.d)(Object(O.g)(null === (g = s.sub.lastModAction) || void 0 === g ? void 0 : g.createdAt) / 1e3)) : o.fbt._("No recent actions", null, {
						hk: "1qiZq9"
					}))), r.a.createElement(N.default, {
						subredditId: t,
						maxMods: 3,
						isModqueue: !0
					}))
				},
				M = e => {
					let {
						subredditIdsList: t,
						totalSubs: s,
						modActivitySummaryData: n,
						isActive: a,
						origin: i,
						currentPageUrl: d,
						isCollapsed: u,
						setIsCollapsed: m
					} = e;
					const b = t.sort((e, t) => ((e, t, s) => {
						var n, o, a, r, i, d;
						const c = Object(O.g)(null === (a = null === (o = null === (n = s[e]) || void 0 === n ? void 0 : n.sub) || void 0 === o ? void 0 : o.lastModAction) || void 0 === a ? void 0 : a.createdAt),
							l = Object(O.g)(null === (d = null === (i = null === (r = s[t]) || void 0 === r ? void 0 : r.sub) || void 0 === i ? void 0 : i.lastModAction) || void 0 === d ? void 0 : d.createdAt);
						return c > l ? -1 : c < l ? 1 : 0
					})(e, t, n)).filter(e => {
						var t, s, o;
						return !a || (new Date).getTime() - Object(O.g)((null === (o = null === (s = null === (t = n[e]) || void 0 === t ? void 0 : t.sub) || void 0 === s ? void 0 : s.lastModAction) || void 0 === o ? void 0 : o.createdAt) || "") < 15 * l.pb
					}).slice(0, 10);
					return r.a.createElement(p.a, {
						title: r.a.createElement("div", {
							className: S.a.titleContainer
						}, a ? o.fbt._("Actively being moderated", null, {
							hk: "43BqG4"
						}) : o.fbt._("Inactive", null, {
							hk: "1MbMLw"
						})),
						className: S.a.widget,
						contentOnly: !0,
						headerButton: r.a.createElement("div", {
							className: S.a.headerButtonContainer
						}, r.a.createElement(j.a, {
							className: Object(c.a)(S.a.headerButtonIcon, {
								[S.a.up]: u
							}, "text-neutral-content-strong")
						})),
						headerStyles: {
							borderRadius: 4
						},
						onHeaderClick: () => m(u ? "false" : "true"),
						redditStyle: !0
					}, !u && r.a.createElement("div", {
						className: S.a.widgetContent
					}, 0 === b.length && r.a.createElement("div", {
						className: S.a.emptyCard
					}, r.a.createElement("img", {
						alt: o.fbt._("Snoo face image", null, {
							hk: "35RYyE"
						}),
						src: a ? T : A,
						className: S.a.snooImage
					}), r.a.createElement("div", {
						className: Object(c.a)(S.a.emptyText, "text-neutral-content-strong")
					}, a ? o.fbt._("No communities are being moderated", null, {
						hk: "1cAhYD"
					}) : o.fbt._("It’s all covered", null, {
						hk: "32tVnu"
					})), r.a.createElement("div", {
						className: Object(c.a)(S.a.emptyDetailText, "text-neutral-content-weak")
					}, a ? o.fbt._("Look up above at the “inactive” section to see what communities might require moderation.", null, {
						hk: "2yELqG"
					}) : o.fbt._("Jump into the “actively being moderated” section below to see where else you could jump in.", null, {
						hk: "2t7nuw"
					}))), b.map(e => {
						const t = n[e];
						return r.a.createElement(I, {
							key: e,
							subredditId: e,
							activityData: t,
							origin: i,
							currentPageUrl: d
						})
					}), s > 10 && r.a.createElement("div", {
						className: Object(c.a)(S.a.detailText, S.a.more, "text-neutral-content-weak")
					}, "+", s - 10, " ", a ? o.fbt._("more being moderated", null, {
						hk: "2tAu2k"
					}) : o.fbt._("more not being moderated", null, {
						hk: "1Djx0e"
					}))))
				},
				D = "inactive_mod_summaries_collapsed",
				P = "active_mod_summaries_collapsed";
			t.default = () => {
				const e = Object(i.e)(e => {
						var t;
						return null === (t = null == e ? void 0 : e.features) || void 0 === t ? void 0 : t.modActivitySummaries
					}) || {},
					t = [],
					s = [];
				let n = 0,
					o = 0;
				Object.keys(e).map(a => {
					e[a].sub.activeMods.length > 0 ? (n < 10 && t.push(a), n++) : (o < 10 && s.push(a), o++)
				});
				const a = Object(i.e)(E.k),
					d = Object(x.a)(),
					c = {
						origin: a,
						currentPageUrl: Object(g.f)(d),
						modActivitySummaryData: e
					},
					[l, u] = Object(y.a)(D, "false"),
					[m, v] = Object(y.a)(P, "false");
				return r.a.createElement("span", {
					"data-testid": "mod-activity-cards"
				}, r.a.createElement(b.a, null, r.a.createElement(M, w({
					subredditIdsList: s,
					totalSubs: o,
					isCollapsed: "true" === l,
					setIsCollapsed: u
				}, c))), r.a.createElement(b.a, null, r.a.createElement(M, w({
					isActive: !0,
					subredditIdsList: t,
					totalSubs: n,
					isCollapsed: "true" === m,
					setIsCollapsed: v
				}, c))))
			}
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				o = s.n(n),
				a = s("./src/lib/lessComponent.tsx");
			t.a = a.a.div("Component", o.a)
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, s) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/trackers/widgets.ts"),
				v = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				p = s("./src/reddit/selectors/experiments/topPosts.ts"),
				g = s("./src/reddit/selectors/structuredStyles.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/models/Theme/index.ts"),
				_ = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const y = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(_.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				x = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(_.a)(e).widgetColors.sidebarWidgetHeaderColor,
				f = e => {
					const t = y(e);
					return Object(O.f)(t)
				},
				j = e => {
					const t = x(e);
					return Object(O.f)(t)
				};
			var E = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				k = s.n(E);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), S = Object(u.v)(), N = Object(a.b)(() => Object(r.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(u.o)(e, t) || void 0,
						n = t.redditStyle || Object(g.l)(e, {
							subredditId: s
						}),
						o = Object(h.fb)(e);
					return n || o
				},
				nigtmode: h.fb,
				subredditId: u.o,
				topPostVariant: p.d
			}));
			class w extends o.a.Component {
				constructor() {
					super(...arguments), this.contentRef = o.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(b.b)(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = y(this.props), e.borderColor = Object(v.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = f(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = x(this.props), e.color = e.fill = j(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: a,
						id: r,
						onClick: d,
						onHeaderClick: l,
						title: u,
						titleClassName: b,
						truncateThreshold: v
					} = this.props, p = s ? k.a.widgetContentOnly : k.a.widgetContent, g = !n && this.props.styles, h = g ? this.getWidgetBackgroundStyles() : {}, O = g ? this.getWidgetHeaderStyles() : {};
					return o.a.createElement("div", {
						className: Object(i.a)(t, k.a.widgetBackground, {
							[k.a.redditStyle]: n,
							[k.a.clickable]: !!d,
							[k.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: d,
						style: h
					}, u && o.a.createElement("div", {
						className: Object(i.a)(k.a.widgetHeader, {
							[k.a.clickable]: !!l
						}),
						id: r,
						style: {
							...O,
							...this.props.headerStyles
						},
						onClick: l
					}, o.a.createElement("div", {
						className: Object(i.a)(k.a.widgetTitle, b)
					}, o.a.createElement(c.b, {
						type: c.a.Widget
					}, u)), a), o.a.createElement("div", {
						className: Object(i.a)(p, {
							[k.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? v : "none"
						}
					}, e), this.state.isTruncated && o.a.createElement(m.r, {
						className: k.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, C._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = S(N(Object(d.a)(Object(l.c)(w))))
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			}));
			var n, o, a = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(o || (o = {}));
			const i = (e, t) => s => ({
					source: o.COMMUNITY_WIDGETS,
					action: a.c.CLICK,
					noun: n.SEE_MORE,
					widget: Object(r.yb)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...r.o
				}),
				d = (e, t) => s => ({
					source: o.POST,
					action: a.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: r.K(s, e),
					subreddit: r.lb(s),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...r.o(s)
				}),
				c = () => e => ({
					source: o.SIDEBAR,
					action: a.c.VIEW,
					noun: n.TOPICS_WIDGET,
					...r.o(e)
				}),
				l = e => t => ({
					source: o.TOPICS_WIDGET,
					action: a.c.CLICK,
					noun: n.TOPIC,
					...r.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards.ef2964abef0e25314c81.js.map