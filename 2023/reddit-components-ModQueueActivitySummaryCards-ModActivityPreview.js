// https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards-ModActivityPreview.77b9724f3f595897c5da.js
// Retrieved at 3/6/2023, 9:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModQueueActivitySummaryCards-ModActivityPreview"], {
		"./src/reddit/components/ModQueueActivitySummaryCards/ModActivityPreview.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./src/higherOrderComponents/asTooltip.tsx"),
				a = o("./src/lib/classNames/index.ts"),
				i = o("./src/lib/constants/index.ts"),
				l = o("./node_modules/react/index.js"),
				r = o.n(l),
				d = o("./node_modules/react-redux/es/index.js"),
				s = o("./src/reddit/actions/tooltip.ts"),
				c = o("./src/reddit/components/UserIcon/index.tsx"),
				m = o("./src/reddit/controls/Dropdown/index.tsx"),
				u = o("./src/reddit/helpers/graphql/helpers.ts"),
				v = o("./src/reddit/helpers/trackers/modListing.ts"),
				b = o("./src/reddit/hooks/useTracking.ts"),
				p = o("./src/reddit/selectors/modQueue.ts"),
				g = o("./src/reddit/selectors/platform.ts"),
				h = o("./src/reddit/selectors/subreddit.ts"),
				_ = o("./src/reddit/selectors/tooltip.ts"),
				N = o("./src/reddit/selectors/user.ts"),
				O = o("./src/reddit/components/ModQueueActivitySummaryCards/index.m.less"),
				y = o.n(O),
				j = o("./src/config.ts"),
				x = o("./node_modules/fbt/lib/FbtPublic.js"),
				A = o("./src/lib/timeAgo/index.ts"),
				w = o("./src/reddit/components/ModQueueActivitySummaryCards/helpers.ts");
			const f = `${j.a.assetPath}/img/snoo-sunglasses.png`,
				E = e => {
					let {
						modAction: t,
						modInfo: o
					} = e;
					var n, i, l;
					const d = (null == o ? void 0 : o.displayName) || (null == o ? void 0 : o.name);
					return r.a.createElement("div", {
						className: Object(a.a)(y.a.modRow, "hover:bg-neutral-background-hover"),
						onClick: e => {
							e.stopPropagation(), e.preventDefault()
						}
					}, r.a.createElement(c.a, {
						className: y.a.modIcon,
						userName: d || "",
						iconUrl: null === (n = null == o ? void 0 : o.icon) || void 0 === n ? void 0 : n.url,
						isNSFW: !!(null === (i = null == o ? void 0 : o.profile) || void 0 === i ? void 0 : i.isNsfw),
						style: {
							height: "24px",
							width: "24px"
						}
					}), r.a.createElement("div", {
						className: y.a.subredditRowText
					}, r.a.createElement("div", {
						className: Object(a.a)(y.a.username, "text-neutral-content-strong")
					}, d), r.a.createElement("div", {
						className: Object(a.a)(y.a.detailText, "text-neutral-content-weak")
					}, t && r.a.createElement(r.a.Fragment, null, Object(w.a)(t.action, null === (l = t.target) || void 0 === l ? void 0 : l.__typename), " ", Object(A.d)(Object(u.g)(t.createdAt) / 1e3)))))
				},
				k = e => {
					let {
						mostRecentAction: t
					} = e;
					return r.a.createElement("div", {
						className: y.a.emptyTooltip
					}, r.a.createElement("img", {
						alt: x.fbt._("Snoo face image", null, {
							hk: "35RYyE"
						}),
						src: f,
						className: y.a.snooImage
					}), r.a.createElement("div", {
						className: Object(a.a)(y.a.emptyText, "text-neutral-content-strong")
					}, x.fbt._("The queue is all yours", null, {
						hk: "16NnPV"
					})), r.a.createElement("div", {
						className: Object(a.a)(y.a.emptyDetailText, "text-neutral-content-weak")
					}, x.fbt._("We’ll let you know if another mod joins you in moderating the community.", null, {
						hk: "4EOUML"
					})), t && r.a.createElement("div", {
						className: y.a.lastActionContainer
					}, r.a.createElement("div", {
						className: Object(a.a)(y.a.lastActionTitle, "text-neutral-content-weak")
					}, x.fbt._("Last Action taken", null, {
						hk: "4F3ynJ"
					})), r.a.createElement(E, {
						modAction: t,
						modInfo: t.moderatorInfo
					})))
				},
				C = e => {
					let {
						orderedModsList: t,
						subredditName: o,
						mods: n,
						mostRecentAction: i
					} = e;
					return 0 === t.length ? r.a.createElement(k, {
						mostRecentAction: i
					}) : r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(a.a)(y.a.tooltipTitle, "text-neutral-content-weak")
					}, t.length, " ", x.fbt._({
						"*": "mods active in r/",
						_1: "mod active in r/"
					}, [x.fbt._plural(t.length)], {
						hk: "3o3C52"
					}), o), n && t.slice(0, 10).map(e => {
						var t, o;
						return r.a.createElement(E, {
							modAction: null === (t = n[e]) || void 0 === t ? void 0 : t.lastModAction,
							modInfo: null === (o = n[e]) || void 0 === o ? void 0 : o.info,
							key: e
						})
					}), t.length > 10 && r.a.createElement("div", {
						className: Object(a.a)(y.a.detailText, y.a.more, "text-neutrtal-content-weak")
					}, "+", t.length - 10, " ", x.fbt._("more active moderators", null, {
						hk: "13CPFV"
					})))
				},
				D = Object(n.a)(m.a),
				T = e => e ? Object.keys(e).sort((t, o) => ((e, t, o) => {
					var n, a, i, l;
					const r = null === (a = null === (n = o[e]) || void 0 === n ? void 0 : n.lastModAction) || void 0 === a ? void 0 : a.createdAt,
						d = null === (l = null === (i = o[t]) || void 0 === i ? void 0 : i.lastModAction) || void 0 === l ? void 0 : l.createdAt,
						s = Object(u.g)(r || "");
					return Object(u.g)(d || "") - s
				})(t, o, e)).filter(t => {
					var o, n;
					return (new Date).getTime() - Object(u.g)((null === (n = null === (o = e[t]) || void 0 === o ? void 0 : o.lastModAction) || void 0 === n ? void 0 : n.createdAt) || "") < 15 * i.qb
				}) : [];
			t.default = e => {
				let {
					className: t,
					subredditId: o,
					maxMods: n,
					isModqueue: i
				} = e;
				var m;
				const u = Object(d.e)(g.d),
					O = o || u,
					j = Object(d.e)(e => Object(h.h)(e, {
						subredditId: O || ""
					})) || "",
					x = Object(d.e)(e => {
						var t;
						return (null === (t = null == e ? void 0 : e.features) || void 0 === t ? void 0 : t.modActivitySummaries[O || ""]) || {}
					}),
					{
						mods: A
					} = x,
					w = Object(l.useCallback)(e => T(e), [])(A),
					f = 0 === w.length && j ? null === (m = null == x ? void 0 : x.sub) || void 0 === m ? void 0 : m.lastModAction : void 0,
					E = (e => `mod_activity_tooltip_id-${e}`)(j || ""),
					k = Object(d.d)(),
					M = Object(b.a)(),
					R = Object(l.useCallback)(e => {
						e.stopPropagation(), e.preventDefault(), k(Object(s.h)({
							tooltipId: E
						})), M(Object(v.a)(!!i, j))
					}, [k, E, M, j, i]),
					S = Object(d.e)(e => Object(_.b)(E)(e)),
					I = Object(d.e)(p.c),
					L = Object(d.e)(N.m),
					P = n || 5;
				return r.a.createElement("div", {
					className: Object(a.a)(y.a.preview, t),
					id: E,
					onClick: R,
					"data-testid": "mod-activity-preview"
				}, A && w.length > 0 ? w.slice(0, P).map((e, t) => {
					var o, n, i, l, d, s, m, u, v, b;
					return r.a.createElement(c.a, {
						className: Object(a.a)(y.a.userIcon, {
							[y.a.noMargin]: t === w.length - 1 && !(t === P - 1 && w.length > P)
						}),
						style: {
							height: "24px",
							width: "24px"
						},
						key: null === (n = null === (o = A[e]) || void 0 === o ? void 0 : o.info) || void 0 === n ? void 0 : n.displayName,
						userName: (null === (l = null === (i = A[e]) || void 0 === i ? void 0 : i.info) || void 0 === l ? void 0 : l.displayName) || "",
						iconUrl: null === (m = null === (s = null === (d = A[e]) || void 0 === d ? void 0 : d.info) || void 0 === s ? void 0 : s.icon) || void 0 === m ? void 0 : m.url,
						isNSFW: !!(null === (b = null === (v = null === (u = A[e]) || void 0 === u ? void 0 : u.info) || void 0 === v ? void 0 : v.profile) || void 0 === b ? void 0 : b.isNsfw)
					})
				}) : I ? null : r.a.createElement(c.a, {
					className: Object(a.a)(y.a.userIcon, y.a.noMargin),
					userName: (null == L ? void 0 : L.displayName) || "",
					iconUrl: null == L ? void 0 : L.accountIcon,
					isNSFW: !1,
					style: {
						height: "24px",
						width: "24px"
					}
				}), w.length > P && r.a.createElement("div", {
					className: Object(a.a)(y.a.moreMods, "text-neutral-content-weak")
				}, "+", w.length - P), r.a.createElement(D, {
					tooltipId: E,
					isOpen: S,
					className: y.a.tooltip,
					targetPosition: ["right", "bottom"],
					tooltipPosition: ["right", "top"]
				}, r.a.createElement(C, {
					orderedModsList: w,
					subredditName: j || "",
					mods: A,
					mostRecentAction: f
				})))
			}
		},
		"./src/reddit/components/ModQueueActivitySummaryCards/index.m.less": function(e, t, o) {
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards-ModActivityPreview.77b9724f3f595897c5da.js.map