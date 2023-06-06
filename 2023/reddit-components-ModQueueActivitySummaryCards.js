// https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards.b14140b727dde7faeb28.js
// Retrieved at 6/6/2023, 5:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModQueueActivitySummaryCards", "reddit-components-ModQueueActivitySummaryCards-ModActivityPreview"], {
		"./src/reddit/components/ModQueueActivitySummaryCards/ModActivityPreview.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = a("./src/higherOrderComponents/asTooltip.tsx"),
				o = a("./src/lib/classNames/index.ts"),
				i = a("./src/lib/constants/index.ts"),
				s = a("./node_modules/react/index.js"),
				r = a.n(s),
				d = a("./node_modules/react-redux/es/index.js"),
				l = a("./src/reddit/actions/tooltip.ts"),
				c = a("./src/reddit/components/UserIcon/index.tsx"),
				u = a("./src/reddit/controls/Dropdown/index.tsx"),
				m = a("./src/reddit/helpers/graphql/helpers.ts"),
				v = a("./src/reddit/helpers/trackers/modListing.ts"),
				b = a("./src/reddit/hooks/useTracking.ts"),
				p = a("./src/reddit/selectors/modQueue.ts"),
				g = a("./src/reddit/selectors/platform.ts"),
				h = a("./src/reddit/selectors/subreddit.ts"),
				_ = a("./src/reddit/selectors/tooltip.ts"),
				x = a("./src/reddit/selectors/user.ts"),
				O = a("./src/reddit/components/ModQueueActivitySummaryCards/index.m.less"),
				y = a.n(O),
				j = a("./src/config.ts"),
				f = a("./node_modules/fbt/lib/FbtPublic.js"),
				A = a("./src/lib/timeAgo/index.ts"),
				N = a("./src/reddit/components/ModQueueActivitySummaryCards/helpers.ts");
			const E = `${j.a.assetPath}/img/snoo-sunglasses.png`,
				k = e => {
					let {
						modAction: t,
						modInfo: a
					} = e;
					var n, i, s;
					const d = (null == a ? void 0 : a.displayName) || (null == a ? void 0 : a.name);
					return r.a.createElement("div", {
						className: Object(o.a)(y.a.modRow, "hover:bg-neutral-background-hover"),
						onClick: e => {
							e.stopPropagation(), e.preventDefault()
						}
					}, r.a.createElement(c.a, {
						className: y.a.modIcon,
						userName: d || "",
						iconUrl: null === (n = null == a ? void 0 : a.icon) || void 0 === n ? void 0 : n.url,
						isNSFW: !!(null === (i = null == a ? void 0 : a.profile) || void 0 === i ? void 0 : i.isNsfw),
						style: {
							height: "24px",
							width: "24px"
						}
					}), r.a.createElement("div", {
						className: y.a.subredditRowText
					}, r.a.createElement("div", {
						className: Object(o.a)(y.a.username, "text-neutral-content-strong")
					}, d), r.a.createElement("div", {
						className: Object(o.a)(y.a.detailText, "text-neutral-content-weak")
					}, t && r.a.createElement(r.a.Fragment, null, Object(N.a)(t.action, null === (s = t.target) || void 0 === s ? void 0 : s.__typename), " ", Object(A.d)(Object(m.g)(t.createdAt) / 1e3)))))
				},
				w = e => {
					let {
						mostRecentAction: t
					} = e;
					return r.a.createElement("div", {
						className: y.a.emptyTooltip
					}, r.a.createElement("img", {
						alt: f.fbt._("Snoo face image", null, {
							hk: "35RYyE"
						}),
						src: E,
						className: y.a.snooImage
					}), r.a.createElement("div", {
						className: Object(o.a)(y.a.emptyText, "text-neutral-content-strong")
					}, f.fbt._("The queue is all yours", null, {
						hk: "16NnPV"
					})), r.a.createElement("div", {
						className: Object(o.a)(y.a.emptyDetailText, "text-neutral-content-weak")
					}, f.fbt._("We’ll let you know if another mod joins you in moderating the community.", null, {
						hk: "4EOUML"
					})), t && r.a.createElement("div", {
						className: y.a.lastActionContainer
					}, r.a.createElement("div", {
						className: Object(o.a)(y.a.lastActionTitle, "text-neutral-content-weak")
					}, f.fbt._("Last Action taken", null, {
						hk: "4F3ynJ"
					})), r.a.createElement(k, {
						modAction: t,
						modInfo: t.moderatorInfo
					})))
				},
				C = e => {
					let {
						orderedModsList: t,
						subredditName: a,
						mods: n,
						mostRecentAction: i
					} = e;
					return 0 === t.length ? r.a.createElement(w, {
						mostRecentAction: i
					}) : r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(o.a)(y.a.tooltipTitle, "text-neutral-content-weak")
					}, t.length, " ", f.fbt._({
						"*": "mods active in r/",
						_1: "mod active in r/"
					}, [f.fbt._plural(t.length)], {
						hk: "3o3C52"
					}), a), n && t.slice(0, 10).map(e => {
						var t, a;
						return r.a.createElement(k, {
							modAction: null === (t = n[e]) || void 0 === t ? void 0 : t.lastModAction,
							modInfo: null === (a = n[e]) || void 0 === a ? void 0 : a.info,
							key: e
						})
					}), t.length > 10 && r.a.createElement("div", {
						className: Object(o.a)(y.a.detailText, y.a.more, "text-neutrtal-content-weak")
					}, "+", t.length - 10, " ", f.fbt._("more active moderators", null, {
						hk: "13CPFV"
					})))
				},
				S = Object(n.a)(u.a),
				M = e => e ? Object.keys(e).sort((t, a) => ((e, t, a) => {
					var n, o, i, s;
					const r = null === (o = null === (n = a[e]) || void 0 === n ? void 0 : n.lastModAction) || void 0 === o ? void 0 : o.createdAt,
						d = null === (s = null === (i = a[t]) || void 0 === i ? void 0 : i.lastModAction) || void 0 === s ? void 0 : s.createdAt,
						l = Object(m.g)(r || "");
					return Object(m.g)(d || "") - l
				})(t, a, e)).filter(t => {
					var a, n;
					return (new Date).getTime() - Object(m.g)((null === (n = null === (a = e[t]) || void 0 === a ? void 0 : a.lastModAction) || void 0 === n ? void 0 : n.createdAt) || "") < 15 * i.pb
				}) : [];
			t.default = e => {
				let {
					className: t,
					subredditId: a,
					maxMods: n,
					isModqueue: i
				} = e;
				var u;
				const m = Object(d.e)(g.c),
					O = a || m,
					j = Object(d.e)(e => Object(h.h)(e, {
						subredditId: O || ""
					})) || "",
					f = Object(d.e)(e => {
						var t;
						return (null === (t = null == e ? void 0 : e.features) || void 0 === t ? void 0 : t.modActivitySummaries[O || ""]) || {}
					}),
					{
						mods: A
					} = f,
					N = Object(s.useCallback)(e => M(e), [])(A),
					E = 0 === N.length && j ? null === (u = null == f ? void 0 : f.sub) || void 0 === u ? void 0 : u.lastModAction : void 0,
					k = (e => `mod_activity_tooltip_id-${e}`)(j || ""),
					w = Object(d.d)(),
					I = Object(b.a)(),
					D = Object(s.useCallback)(e => {
						e.stopPropagation(), e.preventDefault(), w(Object(l.h)({
							tooltipId: k
						})), I(Object(v.a)(!!i, j))
					}, [w, k, I, j, i]),
					T = Object(d.e)(e => Object(_.b)(k)(e)),
					P = Object(d.e)(p.c),
					L = Object(d.e)(x.m),
					R = n || 5;
				return r.a.createElement("div", {
					className: Object(o.a)(y.a.preview, t),
					id: k,
					onClick: D,
					"data-testid": "mod-activity-preview"
				}, A && N.length > 0 ? N.slice(0, R).map((e, t) => {
					var a, n, i, s, d, l, u, m, v, b;
					return r.a.createElement(c.a, {
						className: Object(o.a)(y.a.userIcon, {
							[y.a.noMargin]: t === N.length - 1 && !(t === R - 1 && N.length > R)
						}),
						style: {
							height: "24px",
							width: "24px"
						},
						key: null === (n = null === (a = A[e]) || void 0 === a ? void 0 : a.info) || void 0 === n ? void 0 : n.displayName,
						userName: (null === (s = null === (i = A[e]) || void 0 === i ? void 0 : i.info) || void 0 === s ? void 0 : s.displayName) || "",
						iconUrl: null === (u = null === (l = null === (d = A[e]) || void 0 === d ? void 0 : d.info) || void 0 === l ? void 0 : l.icon) || void 0 === u ? void 0 : u.url,
						isNSFW: !!(null === (b = null === (v = null === (m = A[e]) || void 0 === m ? void 0 : m.info) || void 0 === v ? void 0 : v.profile) || void 0 === b ? void 0 : b.isNsfw)
					})
				}) : P ? null : r.a.createElement(c.a, {
					className: Object(o.a)(y.a.userIcon, y.a.noMargin),
					userName: (null == L ? void 0 : L.displayName) || "",
					iconUrl: null == L ? void 0 : L.accountIcon,
					isNSFW: !1,
					style: {
						height: "24px",
						width: "24px"
					}
				}), N.length > R && r.a.createElement("div", {
					className: Object(o.a)(y.a.moreMods, "text-neutral-content-weak")
				}, "+", N.length - R), r.a.createElement(S, {
					tooltipId: k,
					isOpen: T,
					className: y.a.tooltip,
					targetPosition: ["right", "bottom"],
					tooltipPosition: ["right", "top"]
				}, r.a.createElement(C, {
					orderedModsList: N,
					subredditName: j || "",
					mods: A,
					mostRecentAction: E
				})))
			}
		},
		"./src/reddit/components/ModQueueActivitySummaryCards/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/ModQueueActivitySummaryCards/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "SNOO_NO_MOUTH_IMAGE_PATH", (function() {
				return S
			})), a.d(t, "SNOO_THUMBS_UP_IMAGE_PATH", (function() {
				return M
			})), a.d(t, "INACTIVE_MOD_SUMMARIES_COLLAPSED", (function() {
				return T
			})), a.d(t, "ACTIVE_MOD_SUMMARIES_COLLAPSED", (function() {
				return P
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = a("./src/config.ts"),
				o = a("./node_modules/fbt/lib/FbtPublic.js"),
				i = a("./node_modules/react/index.js"),
				s = a.n(i),
				r = a("./node_modules/react-redux/es/index.js"),
				d = a("./src/lib/addQueryParams/index.ts"),
				l = a("./src/lib/classNames/index.ts"),
				c = a("./src/lib/constants/index.ts"),
				u = a("./src/lib/filterQueryParams/index.ts"),
				m = a("./src/lib/timeAgo/index.ts"),
				v = a("./src/reddit/components/SidebarSpacer/index.tsx"),
				b = a("./src/reddit/components/SubredditIcon/index.tsx"),
				p = a("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				g = a("./src/reddit/contexts/PageLayer/index.tsx"),
				h = a("./src/reddit/controls/InternalLink/index.tsx"),
				_ = a("./src/reddit/helpers/graphql/helpers.ts"),
				x = a("./src/reddit/helpers/trackers/modListing.ts"),
				O = a("./src/reddit/hooks/useLocalStorage.ts"),
				y = a("./src/reddit/hooks/usePageLayer.ts"),
				j = a("./src/reddit/hooks/useTracking.ts"),
				f = a("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				A = a("./src/reddit/selectors/meta.ts"),
				N = a("./src/reddit/selectors/subreddit.ts"),
				E = a("./src/reddit/components/ModQueueActivitySummaryCards/index.m.less"),
				k = a.n(E),
				w = a("./src/reddit/components/ModQueueActivitySummaryCards/ModActivityPreview.tsx");

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			const S = `${n.a.assetPath}/img/snoo-no-mouth.png`,
				M = `${n.a.assetPath}/img/snoo-thumbs-up.png`,
				I = e => {
					let {
						subredditId: t,
						activityData: a,
						origin: n,
						currentPageUrl: c
					} = e;
					var v, p, g;
					const O = Object(r.e)(e => Object(N.X)(e, {
							subredditId: t
						})),
						y = Object(j.a)(),
						f = Object(i.useCallback)(() => {
							y(Object(x.b)(Object.keys((null == a ? void 0 : a.mods) || {}).length > 0, O.name, !0))
						}, [y, a.mods, O.name]);
					return s.a.createElement(h.default, {
						className: Object(l.a)(k.a.subredditRow, "hover:bg-neutral-background-hover"),
						key: null == O ? void 0 : O.displayText,
						to: Object(d.a)(Object(u.a)(`${n}${c}`, ["after", "before", "page", "profile", "subreddit"]), {
							subreddit: null == O ? void 0 : O.name
						}),
						onClick: f
					}, s.a.createElement(b.b, {
						className: k.a.subredditIcon,
						iconUrl: "",
						subredditOrProfile: O
					}), s.a.createElement("div", {
						className: k.a.subredditRowText
					}, s.a.createElement("div", {
						className: Object(l.a)(k.a.subredditName, "text-neutral-content-strong")
					}, null == O ? void 0 : O.displayText), s.a.createElement("div", {
						className: Object(l.a)(k.a.detailText, "text-neutral-content-weak")
					}, (null === (p = null === (v = null == a ? void 0 : a.sub) || void 0 === v ? void 0 : v.lastModAction) || void 0 === p ? void 0 : p.createdAt) ? s.a.createElement(s.a.Fragment, null, o.fbt._("Last action", null, {
						hk: "2lt40w"
					}), " ", Object(m.d)(Object(_.g)(null === (g = a.sub.lastModAction) || void 0 === g ? void 0 : g.createdAt) / 1e3)) : o.fbt._("No recent actions", null, {
						hk: "1qiZq9"
					}))), s.a.createElement(w.default, {
						subredditId: t,
						maxMods: 3,
						isModqueue: !0
					}))
				},
				D = e => {
					let {
						subredditIdsList: t,
						totalSubs: a,
						modActivitySummaryData: n,
						isActive: i,
						origin: r,
						currentPageUrl: d,
						isCollapsed: u,
						setIsCollapsed: m
					} = e;
					const v = t.sort((e, t) => ((e, t, a) => {
						var n, o, i, s, r, d;
						const l = Object(_.g)(null === (i = null === (o = null === (n = a[e]) || void 0 === n ? void 0 : n.sub) || void 0 === o ? void 0 : o.lastModAction) || void 0 === i ? void 0 : i.createdAt),
							c = Object(_.g)(null === (d = null === (r = null === (s = a[t]) || void 0 === s ? void 0 : s.sub) || void 0 === r ? void 0 : r.lastModAction) || void 0 === d ? void 0 : d.createdAt);
						return l > c ? -1 : l < c ? 1 : 0
					})(e, t, n)).filter(e => {
						var t, a, o;
						return !i || (new Date).getTime() - Object(_.g)((null === (o = null === (a = null === (t = n[e]) || void 0 === t ? void 0 : t.sub) || void 0 === a ? void 0 : a.lastModAction) || void 0 === o ? void 0 : o.createdAt) || "") < 15 * c.pb
					}).slice(0, 10);
					return s.a.createElement(p.a, {
						title: s.a.createElement("div", {
							className: k.a.titleContainer
						}, i ? o.fbt._("Actively being moderated", null, {
							hk: "43BqG4"
						}) : o.fbt._("Inactive", null, {
							hk: "1MbMLw"
						})),
						className: k.a.widget,
						contentOnly: !0,
						headerButton: s.a.createElement("div", {
							className: k.a.headerButtonContainer
						}, s.a.createElement(f.a, {
							className: Object(l.a)(k.a.headerButtonIcon, {
								[k.a.up]: u
							}, "text-neutral-content-strong")
						})),
						headerStyles: {
							borderRadius: 4
						},
						onHeaderClick: () => m(u ? "false" : "true"),
						redditStyle: !0
					}, !u && s.a.createElement("div", {
						className: k.a.widgetContent
					}, 0 === v.length && s.a.createElement("div", {
						className: k.a.emptyCard
					}, s.a.createElement("img", {
						alt: o.fbt._("Snoo face image", null, {
							hk: "35RYyE"
						}),
						src: i ? S : M,
						className: k.a.snooImage
					}), s.a.createElement("div", {
						className: Object(l.a)(k.a.emptyText, "text-neutral-content-strong")
					}, i ? o.fbt._("No communities are being moderated", null, {
						hk: "1cAhYD"
					}) : o.fbt._("It’s all covered", null, {
						hk: "32tVnu"
					})), s.a.createElement("div", {
						className: Object(l.a)(k.a.emptyDetailText, "text-neutral-content-weak")
					}, i ? o.fbt._("Look up above at the “inactive” section to see what communities might require moderation.", null, {
						hk: "2yELqG"
					}) : o.fbt._("Jump into the “actively being moderated” section below to see where else you could jump in.", null, {
						hk: "2t7nuw"
					}))), v.map(e => {
						const t = n[e];
						return s.a.createElement(I, {
							key: e,
							subredditId: e,
							activityData: t,
							origin: r,
							currentPageUrl: d
						})
					}), a > 10 && s.a.createElement("div", {
						className: Object(l.a)(k.a.detailText, k.a.more, "text-neutral-content-weak")
					}, "+", a - 10, " ", i ? o.fbt._("more being moderated", null, {
						hk: "2tAu2k"
					}) : o.fbt._("more not being moderated", null, {
						hk: "1Djx0e"
					}))))
				},
				T = "inactive_mod_summaries_collapsed",
				P = "active_mod_summaries_collapsed";
			t.default = () => {
				const e = Object(r.e)(e => {
						var t;
						return null === (t = null == e ? void 0 : e.features) || void 0 === t ? void 0 : t.modActivitySummaries
					}) || {},
					t = [],
					a = [];
				let n = 0,
					o = 0;
				Object.keys(e).map(i => {
					e[i].sub.activeMods.length > 0 ? (n < 10 && t.push(i), n++) : (o < 10 && a.push(i), o++)
				});
				const i = Object(r.e)(A.l),
					d = Object(y.a)(),
					l = {
						origin: i,
						currentPageUrl: Object(g.f)(d),
						modActivitySummaryData: e
					},
					[c, u] = Object(O.a)(T, "false"),
					[m, b] = Object(O.a)(P, "false");
				return s.a.createElement("span", {
					"data-testid": "mod-activity-cards"
				}, s.a.createElement(v.a, null, s.a.createElement(D, C({
					subredditIdsList: a,
					totalSubs: o,
					isCollapsed: "true" === c,
					setIsCollapsed: u
				}, l))), s.a.createElement(v.a, null, s.a.createElement(D, C({
					isActive: !0,
					subredditIdsList: t,
					totalSubs: n,
					isCollapsed: "true" === m,
					setIsCollapsed: b
				}, l))))
			}
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, a) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./src/reddit/components/SidebarSpacer/index.m.less"),
				o = a.n(n),
				i = a("./src/lib/lessComponent.tsx");
			t.a = i.a.div("Component", o.a)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards.b14140b727dde7faeb28.js.map