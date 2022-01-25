// https://www.redditstatic.com/desktop2x/reddit-components-CommunitySettings-ModPnSettings.3f65df4e3f106f1f5e7c.js
// Retrieved at 1/25/2022, 10:20:04 AM by Reddit Dataminer v1.0.0
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
				return K
			})), n.d(t, "default", (function() {
				return U
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/lodash/debounce.js"),
				s = n.n(a),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/components/Settings/shared/Widgets.tsx");

			function l({
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
			var u = n("./src/reddit/selectors/telemetry.ts"),
				g = n("./src/redditGQL/types.ts");
			const m = Object.values(g.f),
				p = Object.values(g.g),
				b = e => t => {
					return {
						source: "mod_pn_settings",
						action: "view",
						noun: "mod_pn_settings",
						actionInfo: {
							...u.m(t).actionInfo,
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
							...u.m(t).actionInfo,
							paneName: e
						}
					}
				},
				_ = e => t => {
					const n = u.m(t),
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
				h = n("./src/reddit/components/CommunitySettings/ModPnSettings/index.m.less"),
				x = n.n(h);

			function E({
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
						id: l,
						rangeTitle: u,
						title: g,
						description: m
					} = e,
					p = d.reduce((e, t, n) => (e[n] = {
						text: t,
						color: "var(--newCommunityTheme-active)"
					}, e), {}),
					b = n ? a : s,
					S = u.replace("{count}", `${b}`);
				return i.a.createElement(i.a.Fragment, null, i.a.createElement(c.p, {
					on: !n,
					onClick: () => {
						o(l, {
							isAuto: !n
						}), r(f({
							id: l,
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
						o(l, {
							currentRange: d[e.target.value]
						})
					},
					label: S,
					disabled: n || t,
					hideSubtext: !0,
					className: x.a.RangeSetting
				}))
			}

			function L({
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

			function v({
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

			function C(e, t, n) {
				const a = t.pages[e].sections.map(e => t.sections[e].rows).flat().map(e => n[e]),
					[s] = a.filter(e => m.includes(e.id.toUpperCase()));
				if (s && !s.isEnabled) return "Disabled";
				const [o] = a.filter(e => p.includes(e.id.toUpperCase()));
				return o.isAuto ? `${o.autoRange}` : `${o.currentRange}`
			}

			function k({
				isSectionDisabled: e,
				layoutData: t,
				pushPage: n,
				rowLayoutData: a,
				settings: s,
				updateSetting: o
			}) {
				switch (a.__typename) {
					case "ModPnSettingsLayoutRowPage":
						return i.a.createElement(l, {
							pageLayoutData: a,
							pushPage: n,
							displayValue: a.displayValue ? C(a.id, t, s) : null
						});
					case "ModPnSettingsLayoutRowSectionToggle": {
						const e = s[a.id];
						return i.a.createElement(L, {
							settingLayoutData: a,
							onChange: o,
							isEnabled: e.isEnabled
						})
					}
					case "ModPnSettingsLayoutRowToggle": {
						const t = s[a.id];
						return i.a.createElement(v, {
							settingLayoutData: a,
							disabled: e,
							onChange: o,
							isEnabled: t.isEnabled
						})
					}
					case "ModPnSettingsLayoutRowRange": {
						const t = s[a.id];
						return i.a.createElement(E, {
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
			var w = n("./src/reddit/components/Settings/shared/SectionHeading.tsx");

			function j({
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
					[l] = c.filter(e => "ModPnSettingsLayoutRowSectionToggle" === e.__typename);
				let u = !1;
				if (l) {
					const e = a[l.id];
					u = !e.isEnabled
				}
				return i.a.createElement("div", null, !!r && i.a.createElement(w.a, null, r), c.map(n => i.a.createElement(k, {
					isSectionDisabled: u,
					key: n.id,
					layoutData: e,
					pushPage: t,
					rowLayoutData: n,
					settings: a,
					updateSetting: s
				})))
			}
			var R = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				P = n("./src/reddit/components/StructuredStyles/Breadcrumbs/index.tsx"),
				D = n("./src/reddit/components/TrackingHelper/index.tsx");

			function O({
				goBack: e,
				layoutData: t,
				pageId: n,
				pushPage: a,
				settings: s,
				showBackButton: r,
				subredditName: d,
				updateSetting: l
			}) {
				const u = Object(D.b)(),
					g = t.pages[n],
					{
						title: m,
						description: p,
						sections: S
					} = g;
				return Object(o.useEffect)(() => {
					u(b(n))
				}, [u, n]), i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: x.a.TitleContainer
				}, r && i.a.createElement(c.f, {
					onClick: e,
					"data-testid": "mod-pns-back-button"
				}, i.a.createElement(P.a, null)), i.a.createElement(R.b, null, m)), i.a.createElement(w.a, null, !!p && p.replace("{community}", d)), S.map(e => i.a.createElement(j, {
					sectionId: e,
					layoutData: t,
					settings: s,
					updateSetting: l,
					pushPage: a,
					key: e
				})))
			}
			var N = n("./src/reddit/components/Settings/Notifications/LoadingState/index.tsx"),
				M = n("./src/lib/makeGqlRequest/index.ts"),
				T = n("./src/redditGQL/operations/GetModPnSettingsLayout.json"),
				B = n("./src/redditGQL/operations/UpdateModPnSettingStatus.json"),
				A = n("./src/redditGQL/operations/UpdateModPnSettingThreshold.json");
			const I = (e, t) => Object(M.a)(e, {
					...T,
					variables: {
						subredditIds: [t]
					}
				}),
				G = (e, t) => "threshold" in t ? H(e, t) : V(e, t),
				H = (e, t) => Object(M.a)(e, {
					...A,
					variables: {
						input: {
							...t
						}
					}
				}),
				V = (e, t) => Object(M.a)(e, {
					...B,
					variables: {
						input: {
							...t
						}
					}
				}),
				q = e => {
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
			const K = 500;

			function U(e) {
				const {
					subredditId: t,
					subredditName: n
				} = e, [a, c] = Object(o.useState)(null), [l, u] = Object(o.useState)({}), [b, f] = Object(o.useState)(!0), h = Object(Y.a)(), x = Object(r.d)(), E = Object(y.a)(), [L, v] = Object(o.useState)(["page__root"]);
				Object(o.useEffect)(() => {
					(async () => {
						const e = await I(h(), t);
						if (e && e.ok) {
							const n = e.body,
								a = q(n.data)[t],
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
							}), c(a), u(s), f(!1)
						} else x(Object(d.d)())
					})()
				}, []);
				const C = Object(o.useCallback)(s()(async ({
					oldSetting: e,
					newSetting: n
				}) => {
					const a = function(e, t) {
						const n = e.id.toUpperCase();
						if (m.includes(n)) {
							return {
								subredditId: t,
								name: n,
								status: e.isEnabled ? g.h.Enabled : g.h.Disabled
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
					const s = await G(h(), a);
					if (s.ok && E(_(n)), !s.ok) {
						const {
							id: t
						} = e;
						u({
							...l,
							[t]: {
								...e
							}
						}), x(Object(d.d)())
					}
				}, K), []);
				if (b || !a) return i.a.createElement(N.a, null);
				const k = L[L.length - 1],
					w = L.length > 1;
				return i.a.createElement(O, {
					pageId: k,
					showBackButton: w,
					updateSetting: (e, t) => {
						const n = l[e],
							a = {
								...l[e],
								...t
							};
						u({
							...l,
							[e]: {
								...a
							}
						}), C({
							oldSetting: n,
							newSetting: a
						})
					},
					layoutData: a,
					settings: l,
					pushPage: e => {
						v([...L, e]), E(S(e))
					},
					goBack: () => {
						if (1 === L.length) return;
						const e = [...L];
						e.pop(), v(e)
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
		"./src/reddit/components/Settings/Notifications/LoadingState/index.m.less": function(e, t, n) {
			e.exports = {
				LoadingSectionHeader: "O4PpMIHtSZRm2uXmmvBkX",
				loadingSectionHeader: "O4PpMIHtSZRm2uXmmvBkX",
				glimmer: "_3J09VVJDa8w9BsFag7OBI2",
				LoadingToggleWrapper: "_3mYFgWNYqADfQo8_Ld8G3r",
				loadingToggleWrapper: "_3mYFgWNYqADfQo8_Ld8G3r",
				LoadingToggleName: "_3JRyG4NgltIykHiWDtHxkK",
				loadingToggleName: "_3JRyG4NgltIykHiWDtHxkK",
				LoadingToggleButton: "_3iDAL20rOm8LbD0TlhrWmK",
				loadingToggleButton: "_3iDAL20rOm8LbD0TlhrWmK"
			}
		},
		"./src/reddit/components/Settings/Notifications/LoadingState/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./node_modules/lodash/times.js"),
				r = n.n(i),
				d = n("./src/reddit/components/Settings/Notifications/LoadingState/index.m.less"),
				c = n.n(d);
			const l = o.a.div("LoadingSectionHeader", c.a),
				u = o.a.div("LoadingToggleWrapper", c.a),
				g = o.a.span("LoadingToggleName", c.a),
				m = o.a.span("LoadingToggleButton", c.a);
			t.a = () => s.a.createElement("div", {
				role: "alert",
				"aria-busy": "true"
			}, s.a.createElement(l, null), r()(5, e => s.a.createElement(u, {
				key: e
			}, s.a.createElement(g, null), s.a.createElement(m, null))))
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
				return u
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx"),
				r = n("./src/reddit/helpers/trackers/blade.ts"),
				d = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				c = n("./src/reddit/components/StructuredStyles/Breadcrumbs/index.m.less"),
				l = n.n(c);
			const u = o.a.wrapped(d.a, "StyledChevron", l.a),
				g = o.a.div("BreadcrumbElement", l.a),
				m = o.a.div("BreadcrumbContainer", l.a);
			t.b = Object(i.c)(e => s.a.createElement(m, null, e.breadcrumbs.map(t => s.a.createElement(g, {
				key: t.title,
				onClick: () => {
					e.sendEvent(Object(r.a)()), e.onNavigate(t)
				}
			}, s.a.createElement(u, null), s.a.createElement("span", {
				className: l.a.breadcrumbTitle
			}, t.title)))))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				r = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(o.a)(r.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, s.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-CommunitySettings-ModPnSettings.3f65df4e3f106f1f5e7c.js.map