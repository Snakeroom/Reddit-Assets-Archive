// https://www.redditstatic.com/desktop2x/reddit-components-CommunitySettings-ModPnSettings.c8ab1e7114b8b7667e4d.js
// Retrieved at 3/7/2022, 12:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-CommunitySettings-ModPnSettings"], {
		"./src/reddit/components/CommunitySettings/ModPnSettings/index.m.less": function(e, t, n) {
			e.exports = {
				TitleContainer: "_1h0ywddtivk9McccMAYdrx",
				titleContainer: "_1h0ywddtivk9McccMAYdrx",
				RangeSetting: "cLJCzoqradPYaq8LVSlRI",
				rangeSetting: "cLJCzoqradPYaq8LVSlRI"
			}
		},
		"./src/reddit/components/CommunitySettings/ModPnSettings/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "DEBOUNCE_DELAY_MS", (function() {
				return J
			})), n.d(t, "default", (function() {
				return Q
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/lodash/debounce.js"),
				s = n.n(a),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/components/Settings/shared/Widgets.tsx");

			function u({
				displayValue: e,
				pageLayoutData: t,
				pushPage: n
			}) {
				const {
					title: a,
					id: s
				} = t;
				return i.a.createElement(c.a, {
					label: a,
					onClick: () => n(s),
					hintText: e,
					color: "none"
				})
			}
			var l = n("./src/reddit/selectors/telemetry.ts"),
				g = n("./src/redditGQL/types.ts");
			const m = Object.values(g.l),
				p = Object.values(g.m),
				b = e => t => {
					return {
						source: "mod_pn_settings",
						action: "view",
						noun: "mod_pn_settings",
						actionInfo: {
							...l.o(t).actionInfo,
							paneName: e
						}
					}
				},
				S = e => t => {
					return {
						source: "mod_pn_settings",
						action: "click",
						noun: "mod_pn_settings",
						actionInfo: {
							...l.o(t).actionInfo,
							paneName: e
						}
					}
				},
				_ = e => t => {
					const n = l.o(t),
						a = e.id,
						s = e.id.toUpperCase();
					if (p.includes(s)) {
						const t = e,
							s = "set",
							o = t.isAuto ? -1 : t.currentRange;
						return {
							source: "mod_pn_settings",
							action: s,
							noun: a,
							actionInfo: {
								...n.actionInfo,
								settingValue: o
							}
						}
					}
					return {
						source: "mod_pn_settings",
						action: e.isEnabled ? "enable" : "disable",
						noun: a
					}
				},
				f = e => t => {
					return {
						source: "mod_pn_settings",
						action: e.isAuto ? "disable_manual_control" : "enable_manual_control",
						noun: e.id
					}
				};
			var y = n("./src/reddit/hooks/useTracking.ts"),
				E = n("./src/reddit/components/CommunitySettings/ModPnSettings/index.m.less"),
				h = n.n(E);

			function C({
				settingLayoutData: e,
				disabled: t,
				isAuto: n,
				autoRange: a,
				currentRange: s,
				onChange: o
			}) {
				const r = Object(y.a)(),
					{
						ranges: d,
						id: u,
						rangeTitle: l,
						title: g,
						description: m
					} = e,
					p = d.reduce((e, t, n) => (e[n] = {
						text: t,
						color: "var(--newCommunityTheme-active)"
					}, e), {}),
					b = n ? a : s,
					S = l.replace("{count}", `${b}`);
				return i.a.createElement(i.a.Fragment, null, i.a.createElement(c.p, {
					on: !n,
					onClick: () => {
						o(u, {
							isAuto: !n
						}), r(f({
							id: u,
							isAuto: !n
						}))
					},
					label: g,
					subtext: m,
					disabled: t
				}), i.a.createElement(c.j, {
					ticks: p,
					min: 0,
					max: d.length - 1,
					step: 1,
					value: d.indexOf(b),
					onChange: e => {
						o(u, {
							currentRange: d[e.target.value]
						})
					},
					label: S,
					disabled: n || t,
					hideSubtext: !0,
					className: h.a.RangeSetting
				}))
			}

			function x({
				isEnabled: e,
				onChange: t,
				settingLayoutData: n
			}) {
				const {
					title: a,
					description: s,
					id: o
				} = n;
				return i.a.createElement(c.p, {
					on: e,
					onClick: () => t(o, {
						isEnabled: !e
					}),
					label: a,
					subtext: s
				})
			}

			function L({
				disabled: e,
				isEnabled: t,
				onChange: n,
				settingLayoutData: a
			}) {
				const {
					title: s,
					description: o,
					id: r
				} = a;
				return i.a.createElement(c.p, {
					on: t,
					onClick: () => n(r, {
						isEnabled: !t
					}),
					label: s,
					subtext: o,
					disabled: e
				})
			}

			function P(e, t, n) {
				const a = t.pages[e].sections.map(e => t.sections[e].rows).flat().map(e => n[e]),
					[s] = a.filter(e => m.includes(e.id.toUpperCase()));
				if (s && !s.isEnabled) return "Disabled";
				const [o] = a.filter(e => p.includes(e.id.toUpperCase()));
				return o.isAuto ? `${o.autoRange}` : `${o.currentRange}`
			}

			function j({
				isSectionDisabled: e,
				layoutData: t,
				pushPage: n,
				rowLayoutData: a,
				settings: s,
				updateSetting: o
			}) {
				switch (a.__typename) {
					case "ModPnSettingsLayoutRowPage":
						return i.a.createElement(u, {
							pageLayoutData: a,
							pushPage: n,
							displayValue: a.displayValue ? P(a.id, t, s) : null
						});
					case "ModPnSettingsLayoutRowSectionToggle": {
						const e = s[a.id];
						return i.a.createElement(x, {
							settingLayoutData: a,
							onChange: o,
							isEnabled: e.isEnabled
						})
					}
					case "ModPnSettingsLayoutRowToggle": {
						const t = s[a.id];
						return i.a.createElement(L, {
							settingLayoutData: a,
							disabled: e,
							onChange: o,
							isEnabled: t.isEnabled
						})
					}
					case "ModPnSettingsLayoutRowRange": {
						const t = s[a.id];
						return i.a.createElement(C, {
							settingLayoutData: a,
							disabled: e,
							onChange: o,
							currentRange: t.currentRange,
							isAuto: t.isAuto,
							autoRange: t.autoRange
						})
					}
					default:
						return null
				}
			}
			var v = n("./src/reddit/components/Settings/shared/SectionHeading.tsx");

			function w({
				layoutData: e,
				pushPage: t,
				sectionId: n,
				settings: a,
				updateSetting: s
			}) {
				const o = e.sections[n],
					{
						title: r,
						rows: d
					} = o,
					c = d.map(t => e.rows[t]),
					[u] = c.filter(e => "ModPnSettingsLayoutRowSectionToggle" === e.__typename);
				let l = !1;
				if (u) {
					const e = a[u.id];
					l = !e.isEnabled
				}
				return i.a.createElement("div", null, !!r && i.a.createElement(v.a, null, r), c.map(n => i.a.createElement(j, {
					isSectionDisabled: l,
					key: n.id,
					layoutData: e,
					pushPage: t,
					rowLayoutData: n,
					settings: a,
					updateSetting: s
				})))
			}
			var R = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				k = n("./src/reddit/components/StructuredStyles/Breadcrumbs/index.tsx"),
				O = n("./src/reddit/components/TrackingHelper/index.tsx");

			function N({
				goBack: e,
				layoutData: t,
				pageId: n,
				pushPage: a,
				settings: s,
				showBackButton: r,
				subredditName: d,
				updateSetting: u
			}) {
				const l = Object(O.b)(),
					g = t.pages[n],
					{
						title: m,
						description: p,
						sections: S
					} = g;
				return Object(o.useEffect)(() => {
					l(b(n))
				}, [l, n]), i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: h.a.TitleContainer
				}, r && i.a.createElement(c.f, {
					onClick: e,
					"data-testid": "mod-pns-back-button"
				}, i.a.createElement(k.a, null)), i.a.createElement(R.b, null, m)), i.a.createElement(v.a, null, !!p && p.replace("{community}", d)), S.map(e => i.a.createElement(w, {
					sectionId: e,
					layoutData: t,
					settings: s,
					updateSetting: u,
					pushPage: a,
					key: e
				})))
			}
			var M = n("./src/reddit/components/Settings/Notifications/LoadingSection.tsx"),
				D = n("./src/lib/makeGqlRequest/index.ts"),
				A = n("./src/redditGQL/operations/GetModPnSettingsLayout.json"),
				T = n("./src/redditGQL/operations/UpdateModPnSettingStatus.json"),
				B = n("./src/redditGQL/operations/UpdateModPnSettingThreshold.json");
			const I = (e, t) => Object(D.a)(e, {
					...A,
					variables: {
						subredditIds: [t]
					}
				}),
				V = (e, t) => "threshold" in t ? G(e, t) : q(e, t),
				G = (e, t) => Object(D.a)(e, {
					...B,
					variables: {
						input: {
							...t
						}
					}
				}),
				q = (e, t) => Object(D.a)(e, {
					...T,
					variables: {
						input: {
							...t
						}
					}
				}),
				H = e => {
					const {
						subredditsInfoByIds: t
					} = e, n = {};
					return t.forEach(e => {
						const {
							id: t,
							modPnSettingsLayout: a
						} = e;
						n[t] = function(e) {
							const t = {},
								n = {},
								a = {};

							function s(e) {
								t[e.id] = {
									...e,
									sections: e.sections.map(e => e.id)
								}, e.sections.forEach(o)
							}

							function o(e) {
								n[e.id] = {
									...e,
									rows: e.rows.map(e => e.id)
								}, e.rows.forEach(i)
							}

							function i(e) {
								if ("ModPnSettingsLayoutRowPage" === e.__typename) {
									const {
										sections: t,
										...n
									} = e;
									a[e.id] = n, s(e)
								} else a[e.id] = {
									...e
								}
							}
							return s(e.page), {
								pages: t,
								sections: n,
								rows: a
							}
						}(a)
					}), n
				};
			var Y = n("./src/reddit/hooks/useGqlContext.ts");
			const J = 500;

			function Q(e) {
				const {
					subredditId: t,
					subredditName: n
				} = e, [a, c] = Object(o.useState)(null), [u, l] = Object(o.useState)({}), [b, f] = Object(o.useState)(!0), E = Object(Y.a)(), h = Object(r.d)(), C = Object(y.a)(), [x, L] = Object(o.useState)(["page__root"]);
				Object(o.useEffect)(() => {
					(async () => {
						const e = await I(E(), t);
						if (e && e.ok) {
							const n = e.body,
								a = H(n.data)[t],
								s = {};
							Object.values(a.rows).map(e => {
								if ("ModPnSettingsLayoutRowRange" === e.__typename) {
									const {
										id: t,
										isAuto: n,
										currentRange: a,
										autoRange: o
									} = e;
									s[t] = {
										id: t,
										isAuto: n,
										currentRange: a,
										autoRange: o
									}
								}
								if ("ModPnSettingsLayoutRowSectionToggle" === e.__typename || "ModPnSettingsLayoutRowToggle" === e.__typename) {
									const {
										id: t,
										isEnabled: n
									} = e;
									s[t] = {
										id: t,
										isEnabled: n
									}
								}
							}), c(a), l(s), f(!1)
						} else h(Object(d.d)())
					})()
				}, []);
				const P = Object(o.useCallback)(s()(async ({
					oldSetting: e,
					newSetting: n
				}) => {
					const a = function(e, t) {
						const n = e.id.toUpperCase();
						if (m.includes(n)) {
							return {
								subredditId: t,
								name: n,
								status: e.isEnabled ? g.n.Enabled : g.n.Disabled
							}
						}
						if (p.includes(n)) {
							const a = e;
							return {
								subredditId: t,
								name: n,
								threshold: a.isAuto ? -1 : a.currentRange
							}
						}
					}(n, t);
					if (!a) return;
					const s = await V(E(), a);
					if (s.ok && C(_(n)), !s.ok) {
						const {
							id: t
						} = e;
						l({
							...u,
							[t]: {
								...e
							}
						}), h(Object(d.d)())
					}
				}, J), []);
				if (b || !a) return i.a.createElement(M.a, {
					rowsCount: 5
				});
				const j = x[x.length - 1],
					v = x.length > 1;
				return i.a.createElement(N, {
					pageId: j,
					showBackButton: v,
					updateSetting: (e, t) => {
						const n = u[e],
							a = {
								...u[e],
								...t
							};
						l({
							...u,
							[e]: {
								...a
							}
						}), P({
							oldSetting: n,
							newSetting: a
						})
					},
					layoutData: a,
					settings: u,
					pushPage: e => {
						L([...x, e]), C(S(e))
					},
					goBack: () => {
						if (1 === x.length) return;
						const e = [...x];
						e.pop(), L(e)
					},
					subredditName: n
				})
			}
		},
		"./src/reddit/components/ModHub/StyledComponents/index.m.less": function(e, t, n) {
			e.exports = {
				ContentContainer: "_3mbqgd00Kdlh6nVVVhZYdS",
				contentContainer: "_3mbqgd00Kdlh6nVVVhZYdS",
				PageTitle: "_3rnK1gNGg1hiVaiRd9Hidl",
				pageTitle: "_3rnK1gNGg1hiVaiRd9Hidl",
				TopBar: "_2YY5qLRbI5q6_0JQVKiGt_",
				topBar: "_2YY5qLRbI5q6_0JQVKiGt_"
			}
		},
		"./src/reddit/components/ModHub/StyledComponents/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return d
			}));
			var a = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/ModHub/StyledComponents/index.m.less"),
				o = n.n(s);
			const i = a.a.div("ContentContainer", o.a),
				r = a.a.div("PageTitle", o.a),
				d = a.a.div("TopBar", o.a)
		},
		"./src/reddit/components/Settings/Notifications/LoadingSection.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var a = n("./node_modules/lodash/times.js"),
				s = n.n(a),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				r = n("./src/reddit/components/Settings/Notifications/index.m.less"),
				d = n.n(r);
			const c = ({
				rowsCount: e
			}) => i.a.createElement("div", {
				role: "alert",
				"aria-busy": "true"
			}, i.a.createElement("div", {
				className: d.a.loadingSectionHeader
			}), s()(e, e => i.a.createElement("div", {
				className: d.a.loadingToggleWrapper,
				key: e
			}, i.a.createElement("span", {
				className: d.a.loadingToggleName
			}), i.a.createElement("span", {
				className: d.a.loadingToggleButton
			}))))
		},
		"./src/reddit/components/Settings/Notifications/index.m.less": function(e, t, n) {
			e.exports = {
				loadingSectionHeader: "_1JAbJoDWgS5w77rjLy_a7c",
				glimmer: "_1VqfnmhCxLKQ6Pb1zId6Ip",
				loadingToggleWrapper: "_3hfCPonrfNQjCQe_kHaSDY",
				loadingToggleName: "_2nmcEilpCLrMUDYAFuRPhZ",
				loadingToggleButton: "RXOVV5JR-ysmH1CtOhOzv",
				errorMessage: "_3wk25QxRP-Wk1zL9JaaNAH",
				ModPnSettingsSubredditList: "_1Wq_iiOCv9Zlu6GiZmzuEY",
				modPnSettingsSubredditList: "_1Wq_iiOCv9Zlu6GiZmzuEY",
				communityAlert: "_1kjkPylfnJVOQOlvkz5mRN",
				header: "_3ppHgcPj1O00wgJFJhnPgl",
				arrow: "_2TrPYhNtc4V7otMW_Lfj3L"
			}
		},
		"./src/reddit/components/StructuredStyles/Breadcrumbs/index.m.less": function(e, t, n) {
			e.exports = {
				StyledChevron: "_2iNDx2lEuGuIyvMjz5ujOL",
				styledChevron: "_2iNDx2lEuGuIyvMjz5ujOL",
				BreadcrumbElement: "_32_k0a9y4N9cAnw6gApo5X",
				breadcrumbElement: "_32_k0a9y4N9cAnw6gApo5X",
				BreadcrumbContainer: "_1PgkMUbe7dhkAqRt4-VPGe",
				breadcrumbContainer: "_1PgkMUbe7dhkAqRt4-VPGe",
				breadcrumbTitle: "_2N7RnlFNJblZD8KUBuiBEQ"
			}
		},
		"./src/reddit/components/StructuredStyles/Breadcrumbs/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx"),
				r = n("./src/reddit/helpers/trackers/blade.ts"),
				d = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				c = n("./src/reddit/components/StructuredStyles/Breadcrumbs/index.m.less"),
				u = n.n(c);
			const l = o.a.wrapped(d.a, "StyledChevron", u.a),
				g = o.a.div("BreadcrumbElement", u.a),
				m = o.a.div("BreadcrumbContainer", u.a);
			t.b = Object(i.c)(e => s.a.createElement(m, null, e.breadcrumbs.map(t => s.a.createElement(g, {
				key: t.title,
				onClick: () => {
					e.sendEvent(Object(r.a)()), e.onNavigate(t)
				}
			}, s.a.createElement(l, null), s.a.createElement("span", {
				className: u.a.breadcrumbTitle
			}, t.title)))))
		},
		"./src/redditGQL/operations/GetModPnSettingsLayout.json": function(e) {
			e.exports = JSON.parse('{"id":"7e96f2bfcc6c"}')
		},
		"./src/redditGQL/operations/UpdateModPnSettingStatus.json": function(e) {
			e.exports = JSON.parse('{"id":"fb41cb5f551a"}')
		},
		"./src/redditGQL/operations/UpdateModPnSettingThreshold.json": function(e) {
			e.exports = JSON.parse('{"id":"7fc476f8098b"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-CommunitySettings-ModPnSettings.c8ab1e7114b8b7667e4d.js.map