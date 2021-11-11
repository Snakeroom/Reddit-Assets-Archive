// https://www.redditstatic.com/desktop2x/reddit-components-CommunitySettings-ModPnSettings.59729efdfe3494bfa683.js
// Retrieved at 11/11/2021, 1:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-CommunitySettings-ModPnSettings"], {
		"./node_modules/lodash/times.js": function(e, t, n) {
			var a = n("./node_modules/lodash/_baseTimes.js"),
				o = n("./node_modules/lodash/_castFunction.js"),
				s = n("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				r = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = s(e)) < 1 || e > i) return [];
				var n = r,
					c = d(e, r);
				t = o(t), e -= r;
				for (var l = a(c, t); ++n < e;) t(n);
				return l
			}
		},
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
				return U
			})), n.d(t, "default", (function() {
				return K
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/lodash/debounce.js"),
				o = n.n(a),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
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
					id: o
				} = t;
				return i.a.createElement(c.a, {
					label: a,
					onClick: () => n(o),
					hintText: e,
					color: "none"
				})
			}
			var u = n("./src/reddit/selectors/telemetry.ts"),
				g = n("./src/redditGQL/types.ts");
			const m = Object.values(g.e),
				p = Object.values(g.f),
				b = e => t => {
					return {
						source: "mod_pn_settings",
						action: "view",
						noun: "mod_pn_settings",
						actionInfo: {
							...u.defaults(t).actionInfo,
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
							...u.defaults(t).actionInfo,
							paneName: e
						}
					}
				},
				_ = e => t => {
					const n = u.defaults(t),
						a = e.id,
						o = e.id.toUpperCase();
					if (p.includes(o)) {
						const t = e,
							o = "set",
							s = t.isAuto ? -1 : t.currentRange;
						return {
							source: "mod_pn_settings",
							action: o,
							noun: a,
							actionInfo: {
								...n.actionInfo,
								settingValue: s
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
				E = n.n(h);

			function x({
				settingLayoutData: e,
				disabled: t,
				isAuto: n,
				autoRange: a,
				currentRange: o,
				onChange: s
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
					b = n ? a : o,
					S = u.replace("{count}", `${b}`);
				return i.a.createElement(i.a.Fragment, null, i.a.createElement(c.p, {
					on: !n,
					onClick: () => {
						s(l, {
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
						s(l, {
							currentRange: d[e.target.value]
						})
					},
					label: S,
					disabled: n || t,
					hideSubtext: !0,
					className: E.a.RangeSetting
				}))
			}

			function L({
				isEnabled: e,
				onChange: t,
				settingLayoutData: n
			}) {
				const {
					title: a,
					description: o,
					id: s
				} = n;
				return i.a.createElement(c.p, {
					on: e,
					onClick: () => t(s, {
						isEnabled: !e
					}),
					label: a,
					subtext: o
				})
			}

			function C({
				disabled: e,
				isEnabled: t,
				onChange: n,
				settingLayoutData: a
			}) {
				const {
					title: o,
					description: s,
					id: r
				} = a;
				return i.a.createElement(c.p, {
					on: t,
					onClick: () => n(r, {
						isEnabled: !t
					}),
					label: o,
					subtext: s,
					disabled: e
				})
			}

			function v(e, t, n) {
				const a = t.pages[e].sections.map(e => t.sections[e].rows).flat().map(e => n[e]),
					[o] = a.filter(e => m.includes(e.id.toUpperCase()));
				if (o && !o.isEnabled) return "Disabled";
				const [s] = a.filter(e => p.includes(e.id.toUpperCase()));
				return s.isAuto ? `${s.autoRange}` : `${s.currentRange}`
			}

			function j({
				isSectionDisabled: e,
				layoutData: t,
				pushPage: n,
				rowLayoutData: a,
				settings: o,
				updateSetting: s
			}) {
				switch (a.__typename) {
					case "ModPnSettingsLayoutRowPage":
						return i.a.createElement(l, {
							pageLayoutData: a,
							pushPage: n,
							displayValue: a.displayValue ? v(a.id, t, o) : null
						});
					case "ModPnSettingsLayoutRowSectionToggle": {
						const e = o[a.id];
						return i.a.createElement(L, {
							settingLayoutData: a,
							onChange: s,
							isEnabled: e.isEnabled
						})
					}
					case "ModPnSettingsLayoutRowToggle": {
						const t = o[a.id];
						return i.a.createElement(C, {
							settingLayoutData: a,
							disabled: e,
							onChange: s,
							isEnabled: t.isEnabled
						})
					}
					case "ModPnSettingsLayoutRowRange": {
						const t = o[a.id];
						return i.a.createElement(x, {
							settingLayoutData: a,
							disabled: e,
							onChange: s,
							currentRange: t.currentRange,
							isAuto: t.isAuto,
							autoRange: t.autoRange
						})
					}
					default:
						return null
				}
			}
			var k = n("./src/reddit/components/Settings/shared/SectionHeading.tsx");

			function R({
				layoutData: e,
				pushPage: t,
				sectionId: n,
				settings: a,
				updateSetting: o
			}) {
				const s = e.sections[n],
					{
						title: r,
						rows: d
					} = s,
					c = d.map(t => e.rows[t]),
					[l] = c.filter(e => "ModPnSettingsLayoutRowSectionToggle" === e.__typename);
				let u = !1;
				if (l) {
					const e = a[l.id];
					u = !e.isEnabled
				}
				return i.a.createElement("div", null, !!r && i.a.createElement(k.a, null, r), c.map(n => i.a.createElement(j, {
					isSectionDisabled: u,
					key: n.id,
					layoutData: e,
					pushPage: t,
					rowLayoutData: n,
					settings: a,
					updateSetting: o
				})))
			}
			var D = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				P = n("./src/reddit/components/StructuredStyles/Breadcrumbs/index.tsx"),
				w = n("./src/reddit/components/TrackingHelper/index.tsx");

			function O({
				goBack: e,
				layoutData: t,
				pageId: n,
				pushPage: a,
				settings: o,
				showBackButton: r,
				subredditName: d,
				updateSetting: l
			}) {
				const u = Object(w.b)(),
					g = t.pages[n],
					{
						title: m,
						description: p,
						sections: S
					} = g;
				return Object(s.useEffect)(() => {
					u(b(n))
				}, [u, n]), i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: E.a.TitleContainer
				}, r && i.a.createElement(c.f, {
					onClick: e,
					"data-testid": "mod-pns-back-button"
				}, i.a.createElement(P.a, null)), i.a.createElement(D.b, null, m)), i.a.createElement(k.a, null, !!p && p.replace("{community}", d)), S.map(e => i.a.createElement(R, {
					sectionId: e,
					layoutData: t,
					settings: o,
					updateSetting: l,
					pushPage: a,
					key: e
				})))
			}
			var M = n("./src/reddit/components/Settings/Notifications/LoadingState/index.tsx"),
				N = n("./src/lib/makeGqlRequest/index.ts"),
				T = n("./src/redditGQL/operations/GetModPnSettingsLayout.json"),
				A = n("./src/redditGQL/operations/UpdateModPnSettingStatus.json"),
				B = n("./src/redditGQL/operations/UpdateModPnSettingThreshold.json");
			const I = (e, t) => Object(N.a)(e, {
					...T,
					variables: {
						subredditIds: [t]
					}
				}),
				G = (e, t) => "threshold" in t ? H(e, t) : V(e, t),
				H = (e, t) => Object(N.a)(e, {
					...B,
					variables: {
						input: {
							...t
						}
					}
				}),
				V = (e, t) => Object(N.a)(e, {
					...A,
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

							function o(e) {
								t[e.id] = {
									...e,
									sections: e.sections.map(e => e.id)
								}, e.sections.forEach(s)
							}

							function s(e) {
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
									a[e.id] = n, o(e)
								} else a[e.id] = {
									...e
								}
							}
							return o(e.page), {
								pages: t,
								sections: n,
								rows: a
							}
						}(a)
					}), n
				};
			var Y = n("./src/reddit/hooks/useGqlContext.ts");
			const U = 500;

			function K(e) {
				const {
					subredditId: t,
					subredditName: n
				} = e, [a, c] = Object(s.useState)(null), [l, u] = Object(s.useState)({}), [b, f] = Object(s.useState)(!0), h = Object(Y.a)(), E = Object(r.d)(), x = Object(y.a)(), [L, C] = Object(s.useState)(["page__root"]);
				Object(s.useEffect)(() => {
					(async () => {
						const e = await I(h(), t);
						if (e && e.ok) {
							const n = e.body,
								a = q(n.data)[t],
								o = {};
							Object.values(a.rows).map(e => {
								if ("ModPnSettingsLayoutRowRange" === e.__typename) {
									const {
										id: t,
										isAuto: n,
										currentRange: a,
										autoRange: s
									} = e;
									o[t] = {
										id: t,
										isAuto: n,
										currentRange: a,
										autoRange: s
									}
								}
								if ("ModPnSettingsLayoutRowSectionToggle" === e.__typename || "ModPnSettingsLayoutRowToggle" === e.__typename) {
									const {
										id: t,
										isEnabled: n
									} = e;
									o[t] = {
										id: t,
										isEnabled: n
									}
								}
							}), c(a), u(o), f(!1)
						} else E(Object(d.d)())
					})()
				}, []);
				const v = Object(s.useCallback)(o()(async ({
					oldSetting: e,
					newSetting: n
				}) => {
					const a = function(e, t) {
						const n = e.id.toUpperCase();
						if (m.includes(n)) {
							return {
								subredditId: t,
								name: n,
								status: e.isEnabled ? g.g.Enabled : g.g.Disabled
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
					const o = await G(h(), a);
					if (o.ok && x(_(n)), !o.ok) {
						const {
							id: t
						} = e;
						u({
							...l,
							[t]: {
								...e
							}
						}), E(Object(d.d)())
					}
				}, U), []);
				if (b || !a) return i.a.createElement(M.a, null);
				const j = L[L.length - 1],
					k = L.length > 1;
				return i.a.createElement(O, {
					pageId: j,
					showBackButton: k,
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
						}), v({
							oldSetting: n,
							newSetting: a
						})
					},
					layoutData: a,
					settings: l,
					pushPage: e => {
						C([...L, e]), x(S(e))
					},
					goBack: () => {
						if (1 === L.length) return;
						const e = [...L];
						e.pop(), C(e)
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
				o = n("./src/reddit/components/ModHub/StyledComponents/index.m.less"),
				s = n.n(o);
			const i = a.a.div("ContentContainer", s.a),
				r = a.a.div("PageTitle", s.a),
				d = a.a.div("TopBar", s.a)
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
				o = n.n(a),
				s = n("./src/lib/lessComponent.tsx"),
				i = n("./node_modules/lodash/times.js"),
				r = n.n(i),
				d = n("./src/reddit/components/Settings/Notifications/LoadingState/index.m.less"),
				c = n.n(d);
			const l = s.a.div("LoadingSectionHeader", c.a),
				u = s.a.div("LoadingToggleWrapper", c.a),
				g = s.a.span("LoadingToggleName", c.a),
				m = s.a.span("LoadingToggleButton", c.a);
			t.a = () => o.a.createElement("div", {
				role: "alert",
				"aria-busy": "true"
			}, o.a.createElement(l, null), r()(5, e => o.a.createElement(u, {
				key: e
			}, o.a.createElement(g, null), o.a.createElement(m, null))))
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
				o = n.n(a),
				s = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx"),
				r = n("./src/reddit/helpers/trackers/blade.ts"),
				d = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				c = n("./src/reddit/components/StructuredStyles/Breadcrumbs/index.m.less"),
				l = n.n(c);
			const u = s.a.wrapped(d.a, "StyledChevron", l.a),
				g = s.a.div("BreadcrumbElement", l.a),
				m = s.a.div("BreadcrumbContainer", l.a);
			t.b = Object(i.c)(e => o.a.createElement(m, null, e.breadcrumbs.map(t => o.a.createElement(g, {
				key: t.title,
				onClick: () => {
					e.sendEvent(Object(r.a)()), e.onNavigate(t)
				}
			}, o.a.createElement(u, null), o.a.createElement("span", {
				className: l.a.breadcrumbTitle
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-CommunitySettings-ModPnSettings.59729efdfe3494bfa683.js.map