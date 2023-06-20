// https://www.redditstatic.com/desktop2x/reddit-components-CommunitySettings-ModPnSettings.5c626e7b7781dbcd111b.js
// Retrieved at 6/20/2023, 4:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-CommunitySettings-ModPnSettings"], {
		"./node_modules/lodash/times.js": function(e, t, n) {
			var a = n("./node_modules/lodash/_baseTimes.js"),
				s = n("./node_modules/lodash/_castFunction.js"),
				o = n("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				r = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = o(e)) < 1 || e > i) return [];
				var n = r,
					c = d(e, r);
				t = s(t), e -= r;
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

			function l(e) {
				let {
					displayValue: t,
					pageLayoutData: n,
					pushPage: a
				} = e;
				const {
					title: s,
					id: o
				} = n;
				return i.a.createElement(c.a, {
					label: s,
					onClick: () => a(o),
					hintText: t,
					color: "none"
				})
			}
			var u = n("./src/reddit/selectors/telemetry.ts"),
				g = n("./src/redditGQL/types.ts");
			const m = Object.values(g.B),
				p = Object.values(g.C),
				b = e => t => {
					return {
						source: "mod_pn_settings",
						action: "view",
						noun: "mod_pn_settings",
						actionInfo: {
							...u.p(t).actionInfo,
							paneName: e
						}
					}
				},
				_ = e => t => {
					return {
						source: "mod_pn_settings",
						action: "click",
						noun: "mod_pn_settings",
						actionInfo: {
							...u.p(t).actionInfo,
							paneName: e
						}
					}
				},
				f = e => t => {
					const n = u.p(t),
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
				S = e => t => {
					return {
						source: "mod_pn_settings",
						action: e.isAuto ? "disable_manual_control" : "enable_manual_control",
						noun: e.id
					}
				};
			var h = n("./src/reddit/hooks/useTracking.ts"),
				y = n("./src/reddit/components/CommunitySettings/ModPnSettings/index.m.less"),
				E = n.n(y);

			function x(e) {
				let {
					settingLayoutData: t,
					disabled: n,
					isAuto: a,
					autoRange: s,
					currentRange: o,
					onChange: r
				} = e;
				const d = Object(h.a)(),
					{
						ranges: l,
						id: u,
						rangeTitle: g,
						title: m,
						description: p
					} = t,
					b = l.reduce((e, t, n) => (e[n] = {
						text: t,
						color: "var(--newCommunityTheme-active)"
					}, e), {}),
					_ = a ? s : o,
					f = g.replace("{count}", `${_}`);
				return i.a.createElement(i.a.Fragment, null, i.a.createElement(c.q, {
					on: !a,
					onClick: () => {
						r(u, {
							isAuto: !a
						}), d(S({
							id: u,
							isAuto: !a
						}))
					},
					label: m,
					subtext: p,
					disabled: n
				}), i.a.createElement(c.k, {
					ticks: b,
					min: 0,
					max: l.length - 1,
					step: 1,
					value: l.indexOf(_),
					onChange: e => {
						r(u, {
							currentRange: l[e.target.value]
						})
					},
					label: f,
					disabled: a || n,
					hideSubtext: !0,
					className: E.a.RangeSetting
				}))
			}

			function C(e) {
				let {
					isEnabled: t,
					onChange: n,
					settingLayoutData: a
				} = e;
				const {
					title: s,
					description: o,
					id: r
				} = a;
				return i.a.createElement(c.q, {
					on: t,
					onClick: () => n(r, {
						isEnabled: !t
					}),
					label: s,
					subtext: o
				})
			}

			function v(e) {
				let {
					disabled: t,
					isEnabled: n,
					onChange: a,
					settingLayoutData: s
				} = e;
				const {
					title: o,
					description: r,
					id: d
				} = s;
				return i.a.createElement(c.q, {
					on: n,
					onClick: () => a(d, {
						isEnabled: !n
					}),
					label: o,
					subtext: r,
					disabled: t
				})
			}

			function L(e, t, n) {
				const a = t.pages[e].sections.map(e => t.sections[e].rows).flat().map(e => n[e]),
					[s] = a.filter(e => m.includes(e.id.toUpperCase()));
				if (s && !s.isEnabled) return "Disabled";
				const [o] = a.filter(e => p.includes(e.id.toUpperCase()));
				return o.isAuto ? `${o.autoRange}` : `${o.currentRange}`
			}

			function j(e) {
				let {
					isSectionDisabled: t,
					layoutData: n,
					pushPage: a,
					rowLayoutData: s,
					settings: o,
					updateSetting: r
				} = e;
				switch (s.__typename) {
					case "ModPnSettingsLayoutRowPage":
						return i.a.createElement(l, {
							pageLayoutData: s,
							pushPage: a,
							displayValue: s.displayValue ? L(s.id, n, o) : null
						});
					case "ModPnSettingsLayoutRowSectionToggle": {
						const e = o[s.id];
						return i.a.createElement(C, {
							settingLayoutData: s,
							onChange: r,
							isEnabled: e.isEnabled
						})
					}
					case "ModPnSettingsLayoutRowToggle": {
						const e = o[s.id];
						return i.a.createElement(v, {
							settingLayoutData: s,
							disabled: t,
							onChange: r,
							isEnabled: e.isEnabled
						})
					}
					case "ModPnSettingsLayoutRowRange": {
						const e = o[s.id];
						return i.a.createElement(x, {
							settingLayoutData: s,
							disabled: t,
							onChange: r,
							currentRange: e.currentRange,
							isAuto: e.isAuto,
							autoRange: e.autoRange
						})
					}
					default:
						return null
				}
			}
			var w = n("./src/reddit/components/Settings/shared/SectionHeading.tsx");

			function P(e) {
				let {
					layoutData: t,
					pushPage: n,
					sectionId: a,
					settings: s,
					updateSetting: o
				} = e;
				const r = t.sections[a],
					{
						title: d,
						rows: c
					} = r,
					l = c.map(e => t.rows[e]),
					[u] = l.filter(e => "ModPnSettingsLayoutRowSectionToggle" === e.__typename);
				let g = !1;
				if (u) {
					const e = s[u.id];
					g = !e.isEnabled
				}
				return i.a.createElement("div", null, !!d && i.a.createElement(w.a, null, d), l.map(e => i.a.createElement(j, {
					isSectionDisabled: g,
					key: e.id,
					layoutData: t,
					pushPage: n,
					rowLayoutData: e,
					settings: s,
					updateSetting: o
				})))
			}
			var k = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				R = n("./src/reddit/components/StructuredStyles/Breadcrumbs/index.tsx"),
				O = n("./src/reddit/components/TrackingHelper/index.tsx");

			function N(e) {
				let {
					goBack: t,
					layoutData: n,
					pageId: a,
					pushPage: s,
					settings: r,
					showBackButton: d,
					subredditName: l,
					updateSetting: u
				} = e;
				const g = Object(O.b)(),
					m = n.pages[a],
					{
						title: p,
						description: _,
						sections: f
					} = m;
				return Object(o.useEffect)(() => {
					g(b(a))
				}, [g, a]), i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: E.a.TitleContainer
				}, d && i.a.createElement(c.f, {
					onClick: t,
					"data-testid": "mod-pns-back-button"
				}, i.a.createElement(R.a, null)), i.a.createElement(k.b, null, p)), i.a.createElement(w.a, null, !!_ && _.replace("{community}", l)), f.map(e => i.a.createElement(P, {
					sectionId: e,
					layoutData: n,
					settings: r,
					updateSetting: u,
					pushPage: s,
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
				V = (e, t) => "threshold" in t ? q(e, t) : G(e, t),
				q = (e, t) => Object(D.a)(e, {
					...B,
					variables: {
						input: {
							...t
						}
					}
				}),
				G = (e, t) => Object(D.a)(e, {
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
				} = e, [a, c] = Object(o.useState)(null), [l, u] = Object(o.useState)({}), [b, S] = Object(o.useState)(!0), y = Object(Y.a)(), E = Object(r.d)(), x = Object(h.a)(), [C, v] = Object(o.useState)(["page__root"]);
				Object(o.useEffect)(() => {
					(async () => {
						const e = await I(y(), t);
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
							}), c(a), u(s), S(!1)
						} else E(Object(d.d)())
					})()
				}, []);
				const L = Object(o.useCallback)(s()(async e => {
					let {
						oldSetting: n,
						newSetting: a
					} = e;
					const s = function(e, t) {
						const n = e.id.toUpperCase();
						if (m.includes(n)) {
							return {
								subredditId: t,
								name: n,
								status: e.isEnabled ? g.D.Enabled : g.D.Disabled
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
					}(a, t);
					if (!s) return;
					const o = await V(y(), s);
					if (o.ok && x(f(a)), !o.ok) {
						const {
							id: e
						} = n;
						u({
							...l,
							[e]: {
								...n
							}
						}), E(Object(d.d)())
					}
				}, J), []);
				if (b || !a) return i.a.createElement(M.a, {
					rowsCount: 5
				});
				const j = C[C.length - 1],
					w = C.length > 1;
				return i.a.createElement(N, {
					pageId: j,
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
						}), L({
							oldSetting: n,
							newSetting: a
						})
					},
					layoutData: a,
					settings: l,
					pushPage: e => {
						v([...C, e]), x(_(e))
					},
					goBack: () => {
						if (1 === C.length) return;
						const e = [...C];
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
				topBar: "_2YY5qLRbI5q6_0JQVKiGt_",
				default: "_8_dE1DV6_ih2BqmmjMMZr"
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
			const c = e => {
				let {
					rowsCount: t
				} = e;
				return i.a.createElement("div", {
					role: "alert",
					"aria-busy": "true"
				}, i.a.createElement("div", {
					className: d.a.loadingSectionHeader
				}), s()(t, e => i.a.createElement("div", {
					className: d.a.loadingToggleWrapper,
					key: e
				}, i.a.createElement("span", {
					className: d.a.loadingToggleName
				}), i.a.createElement("span", {
					className: d.a.loadingToggleButton
				}))))
			}
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-CommunitySettings-ModPnSettings.5c626e7b7781dbcd111b.js.map