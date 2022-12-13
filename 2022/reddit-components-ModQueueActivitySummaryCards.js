// https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards.e8bf320eba669802816a.js
// Retrieved at 12/13/2022, 4:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModQueueActivitySummaryCards", "reddit-components-ModQueueActivitySummaryCards-ModActivityPreview"], {
		"./src/reddit/components/ModQueueActivitySummaryCards/ModActivityPreview.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/higherOrderComponents/asTooltip.tsx"),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/constants/index.ts"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/UserIcon/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/index.tsx"),
				m = s("./src/reddit/endpoints/modQueue/modActivity.ts"),
				b = s("./src/reddit/helpers/graphql/helpers.ts"),
				v = s("./src/reddit/helpers/trackers/modListing.ts"),
				p = s("./src/reddit/hooks/useGqlContext.ts"),
				g = s("./src/reddit/hooks/useTracking.ts"),
				h = s("./src/reddit/selectors/modQueue.ts"),
				O = s("./src/reddit/selectors/platform.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				_ = s("./src/reddit/selectors/tooltip.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/ModQueueActivitySummaryCards/index.m.less"),
				j = s.n(f),
				E = s("./src/config.ts"),
				C = s("./node_modules/fbt/lib/FbtPublic.js"),
				k = s("./src/lib/timeAgo/index.ts"),
				S = s("./src/reddit/components/ModQueueActivitySummaryCards/helpers.ts");
			const N = `${E.a.assetPath}/img/snoo-sunglasses.png`,
				w = e => {
					let {
						data: t
					} = e;
					var s, o, a, i, d, c, u;
					const m = (null === (s = t.info) || void 0 === s ? void 0 : s.displayName) || (null === (o = t.info) || void 0 === o ? void 0 : o.name),
						{
							lastModAction: v
						} = t;
					return r.a.createElement("div", {
						className: Object(n.a)(j.a.modRow, "hover:bg-neutral-background-hover"),
						onClick: e => {
							e.stopPropagation(), e.preventDefault()
						}
					}, r.a.createElement(l.a, {
						className: j.a.modIcon,
						userName: m || "",
						iconUrl: null === (i = null === (a = null == t ? void 0 : t.info) || void 0 === a ? void 0 : a.icon) || void 0 === i ? void 0 : i.url,
						isNSFW: !!(null === (c = null === (d = t.info) || void 0 === d ? void 0 : d.profile) || void 0 === c ? void 0 : c.isNsfw),
						style: {
							height: "24px",
							width: "24px"
						}
					}), r.a.createElement("div", {
						className: j.a.subredditRowText
					}, r.a.createElement("div", {
						className: Object(n.a)(j.a.username, "text-neutral-content-strong")
					}, m), r.a.createElement("div", {
						className: Object(n.a)(j.a.detailText, "text-neutral-content-weak")
					}, v && r.a.createElement(r.a.Fragment, null, Object(S.a)(null == v ? void 0 : v.action, null === (u = null == v ? void 0 : v.target) || void 0 === u ? void 0 : u.__typename), " ", Object(k.d)(Object(b.g)(v.createdAt) / 1e3)))))
				},
				T = e => {
					let {
						mostRecentAction: t
					} = e;
					return r.a.createElement("div", {
						className: j.a.emptyTooltip
					}, r.a.createElement("img", {
						alt: C.fbt._("Snoo face image", null, {
							hk: "35RYyE"
						}),
						src: N,
						className: j.a.snooImage
					}), r.a.createElement("div", {
						className: Object(n.a)(j.a.emptyText, "text-neutral-content-strong")
					}, C.fbt._("The queue is all yours", null, {
						hk: "16NnPV"
					})), r.a.createElement("div", {
						className: Object(n.a)(j.a.emptyDetailText, "text-neutral-content-weak")
					}, C.fbt._("We’ll let you know if another mod joins you in moderating the community.", null, {
						hk: "4EOUML"
					})), t && r.a.createElement("div", {
						className: j.a.lastActionContainer
					}, r.a.createElement("div", {
						className: Object(n.a)(j.a.lastActionTitle, "text-neutral-content-weak")
					}, C.fbt._("Last Action taken", null, {
						hk: "4F3ynJ"
					})), r.a.createElement(w, {
						data: t
					})))
				},
				A = e => {
					let {
						orderedModsList: t,
						subredditName: s,
						mods: o,
						mostRecentAction: a
					} = e;
					return 0 === t.length ? r.a.createElement(T, {
						mostRecentAction: a
					}) : r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(n.a)(j.a.tooltipTitle, "text-neutral-content-weak")
					}, t.length, " ", C.fbt._({
						"*": "mods active in r/",
						_1: "mod active in r/"
					}, [C.fbt._plural(t.length)], {
						hk: "3o3C52"
					}), s), o && t.slice(0, 10).map(e => r.a.createElement(w, {
						data: o[e],
						key: e
					})), t.length > 10 && r.a.createElement("div", {
						className: Object(n.a)(j.a.detailText, j.a.more, "text-neutrtal-content-weak")
					}, "+", t.length - 10, " ", C.fbt._("more active moderators", null, {
						hk: "13CPFV"
					})))
				},
				I = Object(o.a)(u.a),
				M = e => e ? Object.keys(e).sort((t, s) => ((e, t, s) => {
					var o, n, a, i;
					const r = null === (n = null === (o = s[e]) || void 0 === o ? void 0 : o.lastModAction) || void 0 === n ? void 0 : n.createdAt,
						d = null === (i = null === (a = s[t]) || void 0 === a ? void 0 : a.lastModAction) || void 0 === i ? void 0 : i.createdAt,
						c = Object(b.g)(r || "");
					return Object(b.g)(d || "") - c
				})(t, s, e)).filter(t => {
					var s, o;
					return (new Date).getTime() - Object(b.g)((null === (o = null === (s = e[t]) || void 0 === s ? void 0 : s.lastModAction) || void 0 === o ? void 0 : o.createdAt) || "") < 15 * a.pb
				}) : [];
			t.default = e => {
				let {
					className: t,
					subredditId: s,
					maxMods: o,
					isModqueue: a
				} = e;
				const u = Object(d.e)(O.c),
					b = s || u,
					f = Object(d.e)(e => Object(y.h)(e, {
						subredditId: b || ""
					})) || "",
					E = Object(d.e)(e => {
						var t;
						return (null === (t = null == e ? void 0 : e.features) || void 0 === t ? void 0 : t.modActivitySummaries[b || ""]) || {}
					}),
					{
						mods: C
					} = E,
					k = Object(i.useCallback)(e => M(e), [])(C),
					[S, N] = Object(i.useState)(void 0),
					w = Object(p.a)();
				Object(i.useEffect)(() => {
					(async () => {
						var e, t, s, o;
						if (0 === k.length && f) {
							const n = null === (t = null === (e = (await Object(m.c)(w(), {
								subredditName: f
							})).body.data) || void 0 === e ? void 0 : e.subreddit) || void 0 === t ? void 0 : t.moderation;
							(null == n ? void 0 : n.actions) && (null === (o = null === (s = n.actions) || void 0 === s ? void 0 : s.edges) || void 0 === o || o.map(e => {
								var t;
								const {
									moderatorInfo: s,
									...o
								} = null == e ? void 0 : e.node, n = null === (t = null == s ? void 0 : s.displayName) || void 0 === t ? void 0 : t.toLowerCase();
								"reddit" !== n && "automoderator" !== n && N({
									info: s,
									lastModAction: o
								})
							}))
						}
					})()
				}, [w, k.length, f]);
				const T = (e => `mod_activity_tooltip_id-${e}`)(f || ""),
					D = Object(d.d)(),
					P = Object(g.a)(),
					R = Object(i.useCallback)(e => {
						e.stopPropagation(), e.preventDefault(), D(Object(c.h)({
							tooltipId: T
						})), P(Object(v.a)(!!a, f))
					}, [D, T, P, f, a]),
					L = Object(d.e)(e => Object(_.b)(T)(e)),
					B = Object(d.e)(h.c),
					U = Object(d.e)(x.m),
					W = o || 5;
				return r.a.createElement("div", {
					className: Object(n.a)(j.a.preview, t),
					id: T,
					onClick: R,
					"data-testid": "mod-activity-preview"
				}, C && k.length > 0 ? k.slice(0, W).map((e, t) => {
					var s, o, a, i, d, c, u, m, b, v;
					return r.a.createElement(l.a, {
						className: Object(n.a)(j.a.userIcon, {
							[j.a.noMargin]: t === k.length - 1 && !(t === W - 1 && k.length > W)
						}),
						style: {
							height: "24px",
							width: "24px"
						},
						key: null === (o = null === (s = C[e]) || void 0 === s ? void 0 : s.info) || void 0 === o ? void 0 : o.displayName,
						userName: (null === (i = null === (a = C[e]) || void 0 === a ? void 0 : a.info) || void 0 === i ? void 0 : i.displayName) || "",
						iconUrl: null === (u = null === (c = null === (d = C[e]) || void 0 === d ? void 0 : d.info) || void 0 === c ? void 0 : c.icon) || void 0 === u ? void 0 : u.url,
						isNSFW: !!(null === (v = null === (b = null === (m = C[e]) || void 0 === m ? void 0 : m.info) || void 0 === b ? void 0 : b.profile) || void 0 === v ? void 0 : v.isNsfw)
					})
				}) : B ? null : r.a.createElement(l.a, {
					className: Object(n.a)(j.a.userIcon, j.a.noMargin),
					userName: (null == U ? void 0 : U.displayName) || "",
					iconUrl: null == U ? void 0 : U.accountIcon,
					isNSFW: !1,
					style: {
						height: "24px",
						width: "24px"
					}
				}), k.length > W && r.a.createElement("div", {
					className: Object(n.a)(j.a.moreMods, "text-neutral-content-weak")
				}, "+", k.length - W), r.a.createElement(I, {
					tooltipId: T,
					isOpen: L,
					className: j.a.tooltip,
					targetPosition: ["right", "bottom"],
					tooltipPosition: ["right", "top"]
				}, r.a.createElement(A, {
					orderedModsList: k,
					subredditName: f || "",
					mods: C,
					mostRecentAction: S
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
			var o = s("./src/config.ts"),
				n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
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
				y = s("./src/reddit/helpers/trackers/modListing.ts"),
				_ = s("./src/reddit/hooks/useLocalStorage.ts"),
				x = s("./src/reddit/hooks/usePageLayer.ts"),
				f = s("./src/reddit/hooks/useTracking.ts"),
				j = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				E = s("./src/reddit/selectors/meta.ts"),
				C = s("./src/reddit/selectors/subreddit.ts"),
				k = s("./src/reddit/components/ModQueueActivitySummaryCards/index.m.less"),
				S = s.n(k),
				N = s("./src/reddit/components/ModQueueActivitySummaryCards/ModActivityPreview.tsx");

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const T = `${o.a.assetPath}/img/snoo-no-mouth.png`,
				A = `${o.a.assetPath}/img/snoo-thumbs-up.png`,
				I = e => {
					let {
						subredditId: t,
						activityData: s,
						origin: o,
						currentPageUrl: l
					} = e;
					var b;
					const p = Object(r.e)(e => Object(C.Y)(e, {
							subredditId: t
						})),
						g = Object(f.a)(),
						_ = Object(a.useCallback)(() => {
							g(Object(y.b)(Object.keys((null == s ? void 0 : s.mods) || {}).length > 0, p.name, !0))
						}, [g, s.mods, p.name]);
					return i.a.createElement(h.default, {
						className: Object(c.a)(S.a.subredditRow, "hover:bg-neutral-background-hover"),
						key: null == p ? void 0 : p.displayText,
						to: Object(d.a)(Object(u.a)(`${o}${l}`, ["after", "before", "page", "profile", "subreddit"]), {
							subreddit: null == p ? void 0 : p.name
						}),
						onClick: _
					}, i.a.createElement(v.b, {
						className: S.a.subredditIcon,
						iconUrl: "",
						subredditOrProfile: p
					}), i.a.createElement("div", {
						className: S.a.subredditRowText
					}, i.a.createElement("div", {
						className: Object(c.a)(S.a.subredditName, "text-neutral-content-strong")
					}, null == p ? void 0 : p.displayText), i.a.createElement("div", {
						className: Object(c.a)(S.a.detailText, "text-neutral-content-weak")
					}, (null === (b = null == s ? void 0 : s.sub) || void 0 === b ? void 0 : b.lastModActionAt) ? i.a.createElement(i.a.Fragment, null, n.fbt._("Last action", null, {
						hk: "2lt40w"
					}), " ", Object(m.d)(Object(O.g)(s.sub.lastModActionAt) / 1e3)) : n.fbt._("No recent actions", null, {
						hk: "1qiZq9"
					}))), i.a.createElement(N.default, {
						subredditId: t,
						maxMods: 3,
						isModqueue: !0
					}))
				},
				M = e => {
					let {
						subredditIdsList: t,
						totalSubs: s,
						modActivitySummaryData: o,
						isActive: a,
						origin: r,
						currentPageUrl: d,
						isCollapsed: u,
						setIsCollapsed: m
					} = e;
					const b = t.sort((e, t) => ((e, t, s) => {
						var o, n, a, i;
						const r = Object(O.g)(null === (n = null === (o = s[e]) || void 0 === o ? void 0 : o.sub) || void 0 === n ? void 0 : n.lastModActionAt),
							d = Object(O.g)(null === (i = null === (a = s[t]) || void 0 === a ? void 0 : a.sub) || void 0 === i ? void 0 : i.lastModActionAt);
						return r > d ? -1 : r < d ? 1 : 0
					})(e, t, o)).filter(e => {
						var t, s;
						return !a || (new Date).getTime() - Object(O.g)((null === (s = null === (t = o[e]) || void 0 === t ? void 0 : t.sub) || void 0 === s ? void 0 : s.lastModActionAt) || "") < 15 * l.pb
					}).slice(0, 10);
					return i.a.createElement(p.a, {
						title: i.a.createElement("div", {
							className: S.a.titleContainer
						}, a ? n.fbt._("Actively being moderated", null, {
							hk: "43BqG4"
						}) : n.fbt._("Inactive", null, {
							hk: "1MbMLw"
						})),
						className: S.a.widget,
						contentOnly: !0,
						headerButton: i.a.createElement("div", {
							className: S.a.headerButtonContainer
						}, i.a.createElement(j.a, {
							className: Object(c.a)(S.a.headerButtonIcon, {
								[S.a.up]: u
							}, "text-neutral-content-strong")
						})),
						headerStyles: {
							borderRadius: 4
						},
						onHeaderClick: () => m(u ? "false" : "true"),
						redditStyle: !0
					}, !u && i.a.createElement("div", {
						className: S.a.widgetContent
					}, 0 === b.length && i.a.createElement("div", {
						className: S.a.emptyCard
					}, i.a.createElement("img", {
						alt: n.fbt._("Snoo face image", null, {
							hk: "35RYyE"
						}),
						src: a ? T : A,
						className: S.a.snooImage
					}), i.a.createElement("div", {
						className: Object(c.a)(S.a.emptyText, "text-neutral-content-strong")
					}, a ? n.fbt._("No communities are being moderated", null, {
						hk: "1cAhYD"
					}) : n.fbt._("It’s all covered", null, {
						hk: "32tVnu"
					})), i.a.createElement("div", {
						className: Object(c.a)(S.a.emptyDetailText, "text-neutral-content-weak")
					}, a ? n.fbt._("Look up above at the “inactive” section to see what communities might require moderation.", null, {
						hk: "2yELqG"
					}) : n.fbt._("Jump into the “actively being moderated” section below to see where else you could jump in.", null, {
						hk: "2t7nuw"
					}))), b.map(e => {
						const t = o[e];
						return i.a.createElement(I, {
							key: e,
							subredditId: e,
							activityData: t,
							origin: r,
							currentPageUrl: d
						})
					}), s > 10 && i.a.createElement("div", {
						className: Object(c.a)(S.a.detailText, S.a.more, "text-neutral-content-weak")
					}, "+", s - 10, " ", a ? n.fbt._("more being moderated", null, {
						hk: "2tAu2k"
					}) : n.fbt._("more not being moderated", null, {
						hk: "1Djx0e"
					}))))
				},
				D = "inactive_mod_summaries_collapsed",
				P = "active_mod_summaries_collapsed";
			t.default = () => {
				const e = Object(r.e)(e => {
						var t;
						return null === (t = null == e ? void 0 : e.features) || void 0 === t ? void 0 : t.modActivitySummaries
					}) || {},
					t = [],
					s = [];
				let o = 0,
					n = 0;
				Object.keys(e).map(a => {
					e[a].sub.activeMods.length > 0 ? (o < 10 && t.push(a), o++) : (n < 10 && s.push(a), n++)
				});
				const a = Object(r.e)(E.k),
					d = Object(x.a)(),
					c = {
						origin: a,
						currentPageUrl: Object(g.f)(d),
						modActivitySummaryData: e
					},
					[l, u] = Object(_.a)(D, "false"),
					[m, v] = Object(_.a)(P, "false");
				return i.a.createElement("span", {
					"data-testid": "mod-activity-cards"
				}, i.a.createElement(b.a, null, i.a.createElement(M, w({
					subredditIdsList: s,
					totalSubs: n,
					isCollapsed: "true" === l,
					setIsCollapsed: u
				}, c))), i.a.createElement(b.a, null, i.a.createElement(M, w({
					isActive: !0,
					subredditIdsList: t,
					totalSubs: o,
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
			var o = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				n = s.n(o),
				a = s("./src/lib/lessComponent.tsx");
			t.a = a.a.div("Component", n.a)
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/classNames/index.ts"),
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
				y = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const _ = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(y.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				x = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(y.a)(e).widgetColors.sidebarWidgetHeaderColor,
				f = e => {
					const t = _(e);
					return Object(O.f)(t)
				},
				j = e => {
					const t = x(e);
					return Object(O.f)(t)
				};
			var E = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				C = s.n(E);
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), S = Object(u.v)(), N = Object(a.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(u.o)(e, t) || void 0,
						o = t.redditStyle || Object(g.l)(e, {
							subredditId: s
						}),
						n = Object(h.fb)(e);
					return o || n
				},
				nigtmode: h.fb,
				subredditId: u.o,
				topPostVariant: p.d
			}));
			class w extends n.a.Component {
				constructor() {
					super(...arguments), this.contentRef = n.a.createRef(), this.state = {
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
					return e.backgroundColor = _(this.props), e.borderColor = Object(v.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = f(this.props), e
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
						forceRedditStyle: o,
						headerButton: a,
						id: i,
						onClick: d,
						onHeaderClick: l,
						title: u,
						titleClassName: b,
						truncateThreshold: v
					} = this.props, p = s ? C.a.widgetContentOnly : C.a.widgetContent, g = !o && this.props.styles, h = g ? this.getWidgetBackgroundStyles() : {}, O = g ? this.getWidgetHeaderStyles() : {};
					return n.a.createElement("div", {
						className: Object(r.a)(t, C.a.widgetBackground, {
							[C.a.redditStyle]: o,
							[C.a.clickable]: !!d,
							[C.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": o,
						onClick: d,
						style: h
					}, u && n.a.createElement("div", {
						className: Object(r.a)(C.a.widgetHeader, {
							[C.a.clickable]: !!l
						}),
						id: i,
						style: {
							...O,
							...this.props.headerStyles
						},
						onClick: l
					}, n.a.createElement("div", {
						className: Object(r.a)(C.a.widgetTitle, b)
					}, n.a.createElement(c.b, {
						type: c.a.Widget
					}, u)), a), n.a.createElement("div", {
						className: Object(r.a)(p, {
							[C.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? v : "none"
						}
					}, e), this.state.isTruncated && n.a.createElement(m.r, {
						className: C.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, k._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = S(N(Object(d.a)(Object(l.c)(w))))
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			}));
			var o, n, a = s("./src/reddit/constants/tracking.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(o || (o = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {}));
			const r = (e, t) => s => ({
					source: n.COMMUNITY_WIDGETS,
					action: a.c.CLICK,
					noun: o.SEE_MORE,
					widget: Object(i.yb)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...i.o
				}),
				d = (e, t) => s => ({
					source: n.POST,
					action: a.c.CLICK,
					noun: o.REREDDIT_PROMO,
					post: i.K(s, e),
					subreddit: i.lb(s),
					...t && {
						banner: {
							buttonText: t,
							id: o.REREDDIT_PROMO
						}
					},
					...i.o(s)
				}),
				c = () => e => ({
					source: n.SIDEBAR,
					action: a.c.VIEW,
					noun: o.TOPICS_WIDGET,
					...i.o(e)
				}),
				l = e => t => ({
					source: n.TOPICS_WIDGET,
					action: a.c.CLICK,
					noun: o.TOPIC,
					...i.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards.e8bf320eba669802816a.js.map