// https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards-ModActivityPreview.32cbb6074535a8443531.js
// Retrieved at 12/13/2022, 4:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModQueueActivitySummaryCards-ModActivityPreview"], {
		"./src/reddit/components/ModQueueActivitySummaryCards/ModActivityPreview.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = o("./src/higherOrderComponents/asTooltip.tsx"),
				i = o("./src/lib/classNames/index.ts"),
				n = o("./src/lib/constants/index.ts"),
				d = o("./node_modules/react/index.js"),
				l = o.n(d),
				s = o("./node_modules/react-redux/es/index.js"),
				r = o("./src/reddit/actions/tooltip.ts"),
				c = o("./src/reddit/components/UserIcon/index.tsx"),
				m = o("./src/reddit/controls/Dropdown/index.tsx"),
				u = o("./src/reddit/endpoints/modQueue/modActivity.ts"),
				v = o("./src/reddit/helpers/graphql/helpers.ts"),
				b = o("./src/reddit/helpers/trackers/modListing.ts"),
				p = o("./src/reddit/hooks/useGqlContext.ts"),
				g = o("./src/reddit/hooks/useTracking.ts"),
				h = o("./src/reddit/selectors/modQueue.ts"),
				_ = o("./src/reddit/selectors/platform.ts"),
				O = o("./src/reddit/selectors/subreddit.ts"),
				y = o("./src/reddit/selectors/tooltip.ts"),
				N = o("./src/reddit/selectors/user.ts"),
				j = o("./src/reddit/components/ModQueueActivitySummaryCards/index.m.less"),
				x = o.n(j),
				f = o("./src/config.ts"),
				w = o("./node_modules/fbt/lib/FbtPublic.js"),
				A = o("./src/lib/timeAgo/index.ts"),
				E = o("./src/reddit/components/ModQueueActivitySummaryCards/helpers.ts");
			const k = `${f.a.assetPath}/img/snoo-sunglasses.png`,
				C = e => {
					let {
						data: t
					} = e;
					var o, a, n, d, s, r, m;
					const u = (null === (o = t.info) || void 0 === o ? void 0 : o.displayName) || (null === (a = t.info) || void 0 === a ? void 0 : a.name),
						{
							lastModAction: b
						} = t;
					return l.a.createElement("div", {
						className: Object(i.a)(x.a.modRow, "hover:bg-neutral-background-hover"),
						onClick: e => {
							e.stopPropagation(), e.preventDefault()
						}
					}, l.a.createElement(c.a, {
						className: x.a.modIcon,
						userName: u || "",
						iconUrl: null === (d = null === (n = null == t ? void 0 : t.info) || void 0 === n ? void 0 : n.icon) || void 0 === d ? void 0 : d.url,
						isNSFW: !!(null === (r = null === (s = t.info) || void 0 === s ? void 0 : s.profile) || void 0 === r ? void 0 : r.isNsfw),
						style: {
							height: "24px",
							width: "24px"
						}
					}), l.a.createElement("div", {
						className: x.a.subredditRowText
					}, l.a.createElement("div", {
						className: Object(i.a)(x.a.username, "text-neutral-content-strong")
					}, u), l.a.createElement("div", {
						className: Object(i.a)(x.a.detailText, "text-neutral-content-weak")
					}, b && l.a.createElement(l.a.Fragment, null, Object(E.a)(null == b ? void 0 : b.action, null === (m = null == b ? void 0 : b.target) || void 0 === m ? void 0 : m.__typename), " ", Object(A.d)(Object(v.g)(b.createdAt) / 1e3)))))
				},
				D = e => {
					let {
						mostRecentAction: t
					} = e;
					return l.a.createElement("div", {
						className: x.a.emptyTooltip
					}, l.a.createElement("img", {
						alt: w.fbt._("Snoo face image", null, {
							hk: "35RYyE"
						}),
						src: k,
						className: x.a.snooImage
					}), l.a.createElement("div", {
						className: Object(i.a)(x.a.emptyText, "text-neutral-content-strong")
					}, w.fbt._("The queue is all yours", null, {
						hk: "16NnPV"
					})), l.a.createElement("div", {
						className: Object(i.a)(x.a.emptyDetailText, "text-neutral-content-weak")
					}, w.fbt._("We’ll let you know if another mod joins you in moderating the community.", null, {
						hk: "4EOUML"
					})), t && l.a.createElement("div", {
						className: x.a.lastActionContainer
					}, l.a.createElement("div", {
						className: Object(i.a)(x.a.lastActionTitle, "text-neutral-content-weak")
					}, w.fbt._("Last Action taken", null, {
						hk: "4F3ynJ"
					})), l.a.createElement(C, {
						data: t
					})))
				},
				S = e => {
					let {
						orderedModsList: t,
						subredditName: o,
						mods: a,
						mostRecentAction: n
					} = e;
					return 0 === t.length ? l.a.createElement(D, {
						mostRecentAction: n
					}) : l.a.createElement(l.a.Fragment, null, l.a.createElement("div", {
						className: Object(i.a)(x.a.tooltipTitle, "text-neutral-content-weak")
					}, t.length, " ", w.fbt._({
						"*": "mods active in r/",
						_1: "mod active in r/"
					}, [w.fbt._plural(t.length)], {
						hk: "3o3C52"
					}), o), a && t.slice(0, 10).map(e => l.a.createElement(C, {
						data: a[e],
						key: e
					})), t.length > 10 && l.a.createElement("div", {
						className: Object(i.a)(x.a.detailText, x.a.more, "text-neutrtal-content-weak")
					}, "+", t.length - 10, " ", w.fbt._("more active moderators", null, {
						hk: "13CPFV"
					})))
				},
				T = Object(a.a)(m.a),
				M = e => e ? Object.keys(e).sort((t, o) => ((e, t, o) => {
					var a, i, n, d;
					const l = null === (i = null === (a = o[e]) || void 0 === a ? void 0 : a.lastModAction) || void 0 === i ? void 0 : i.createdAt,
						s = null === (d = null === (n = o[t]) || void 0 === n ? void 0 : n.lastModAction) || void 0 === d ? void 0 : d.createdAt,
						r = Object(v.g)(l || "");
					return Object(v.g)(s || "") - r
				})(t, o, e)).filter(t => {
					var o, a;
					return (new Date).getTime() - Object(v.g)((null === (a = null === (o = e[t]) || void 0 === o ? void 0 : o.lastModAction) || void 0 === a ? void 0 : a.createdAt) || "") < 15 * n.pb
				}) : [];
			t.default = e => {
				let {
					className: t,
					subredditId: o,
					maxMods: a,
					isModqueue: n
				} = e;
				const m = Object(s.e)(_.c),
					v = o || m,
					j = Object(s.e)(e => Object(O.h)(e, {
						subredditId: v || ""
					})) || "",
					f = Object(s.e)(e => {
						var t;
						return (null === (t = null == e ? void 0 : e.features) || void 0 === t ? void 0 : t.modActivitySummaries[v || ""]) || {}
					}),
					{
						mods: w
					} = f,
					A = Object(d.useCallback)(e => M(e), [])(w),
					[E, k] = Object(d.useState)(void 0),
					C = Object(p.a)();
				Object(d.useEffect)(() => {
					(async () => {
						var e, t, o, a;
						if (0 === A.length && j) {
							const i = null === (t = null === (e = (await Object(u.c)(C(), {
								subredditName: j
							})).body.data) || void 0 === e ? void 0 : e.subreddit) || void 0 === t ? void 0 : t.moderation;
							(null == i ? void 0 : i.actions) && (null === (a = null === (o = i.actions) || void 0 === o ? void 0 : o.edges) || void 0 === a || a.map(e => {
								var t;
								const {
									moderatorInfo: o,
									...a
								} = null == e ? void 0 : e.node, i = null === (t = null == o ? void 0 : o.displayName) || void 0 === t ? void 0 : t.toLowerCase();
								"reddit" !== i && "automoderator" !== i && k({
									info: o,
									lastModAction: a
								})
							}))
						}
					})()
				}, [C, A.length, j]);
				const D = (e => `mod_activity_tooltip_id-${e}`)(j || ""),
					R = Object(s.d)(),
					L = Object(g.a)(),
					I = Object(d.useCallback)(e => {
						e.stopPropagation(), e.preventDefault(), R(Object(r.h)({
							tooltipId: D
						})), L(Object(b.a)(!!n, j))
					}, [R, D, L, j, n]),
					P = Object(s.e)(e => Object(y.b)(D)(e)),
					q = Object(s.e)(h.c),
					K = Object(s.e)(N.m),
					B = a || 5;
				return l.a.createElement("div", {
					className: Object(i.a)(x.a.preview, t),
					id: D,
					onClick: I,
					"data-testid": "mod-activity-preview"
				}, w && A.length > 0 ? A.slice(0, B).map((e, t) => {
					var o, a, n, d, s, r, m, u, v, b;
					return l.a.createElement(c.a, {
						className: Object(i.a)(x.a.userIcon, {
							[x.a.noMargin]: t === A.length - 1 && !(t === B - 1 && A.length > B)
						}),
						style: {
							height: "24px",
							width: "24px"
						},
						key: null === (a = null === (o = w[e]) || void 0 === o ? void 0 : o.info) || void 0 === a ? void 0 : a.displayName,
						userName: (null === (d = null === (n = w[e]) || void 0 === n ? void 0 : n.info) || void 0 === d ? void 0 : d.displayName) || "",
						iconUrl: null === (m = null === (r = null === (s = w[e]) || void 0 === s ? void 0 : s.info) || void 0 === r ? void 0 : r.icon) || void 0 === m ? void 0 : m.url,
						isNSFW: !!(null === (b = null === (v = null === (u = w[e]) || void 0 === u ? void 0 : u.info) || void 0 === v ? void 0 : v.profile) || void 0 === b ? void 0 : b.isNsfw)
					})
				}) : q ? null : l.a.createElement(c.a, {
					className: Object(i.a)(x.a.userIcon, x.a.noMargin),
					userName: (null == K ? void 0 : K.displayName) || "",
					iconUrl: null == K ? void 0 : K.accountIcon,
					isNSFW: !1,
					style: {
						height: "24px",
						width: "24px"
					}
				}), A.length > B && l.a.createElement("div", {
					className: Object(i.a)(x.a.moreMods, "text-neutral-content-weak")
				}, "+", A.length - B), l.a.createElement(T, {
					tooltipId: D,
					isOpen: P,
					className: x.a.tooltip,
					targetPosition: ["right", "bottom"],
					tooltipPosition: ["right", "top"]
				}, l.a.createElement(S, {
					orderedModsList: A,
					subredditName: j || "",
					mods: w,
					mostRecentAction: E
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards-ModActivityPreview.32cbb6074535a8443531.js.map