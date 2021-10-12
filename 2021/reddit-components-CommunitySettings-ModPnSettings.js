// https://www.redditstatic.com/desktop2x/reddit-components-CommunitySettings-ModPnSettings.9119700b4909d88a7d70.js
// Retrieved at 10/12/2021, 3:50:11 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-CommunitySettings-ModPnSettings"], {
		"./node_modules/lodash/times.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseTimes.js"),
				a = n("./node_modules/lodash/_castFunction.js"),
				o = n("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				r = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = o(e)) < 1 || e > i) return [];
				var n = r,
					c = d(e, r);
				t = a(t), e -= r;
				for (var l = s(c, t); ++n < e;) t(n);
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
				return K
			})), n.d(t, "default", (function() {
				return U
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/debounce.js"),
				a = n.n(s),
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
					title: s,
					id: a
				} = t;
				return i.a.createElement(c.a, {
					label: s,
					onClick: () => n(a),
					hintText: e,
					color: "none"
				})
			}
			var u = n("./src/reddit/selectors/telemetry.ts"),
				g = n("./src/redditGQL/types.ts");
			const m = Object.values(g.b),
				p = Object.values(g.c),
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
				_ = e => t => {
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
				f = e => t => {
					const n = u.defaults(t),
						s = e.id,
						a = e.id.toUpperCase();
					if (p.includes(a)) {
						const t = e,
							a = "set",
							o = t.isAuto ? -1 : t.currentRange;
						return {
							source: "mod_pn_settings",
							action: a,
							noun: s,
							actionInfo: {
								...n.actionInfo,
								settingValue: o
							}
						}
					}
					return {
						source: "mod_pn_settings",
						action: e.isEnabled ? "enable" : "disable",
						noun: s
					}
				},
				S = e => t => {
					return {
						source: "mod_pn_settings",
						action: e.isAuto ? "disable_manual_control" : "enable_manual_control",
						noun: e.id
					}
				};
			var x = n("./src/reddit/hooks/useTracking.ts"),
				y = n("./src/reddit/components/CommunitySettings/ModPnSettings/index.m.less"),
				h = n.n(y);

			function E({
				settingLayoutData: e,
				disabled: t,
				isAuto: n,
				currentRange: s,
				onChange: a
			}) {
				const o = Object(x.a)(),
					{
						ranges: r,
						id: d,
						rangeTitle: l,
						title: u,
						description: g
					} = e,
					m = r.reduce((e, t, n) => (e[n] = {
						text: t,
						color: "var(--newCommunityTheme-active)"
					}, e), {}),
					p = l.replace("{count}", `${s}`);
				return i.a.createElement(i.a.Fragment, null, i.a.createElement(c.p, {
					on: !n,
					onClick: () => {
						a(d, {
							isAuto: !n
						}), o(S({
							id: d,
							isAuto: !n
						}))
					},
					label: u,
					subtext: g,
					disabled: t
				}), i.a.createElement(c.j, {
					ticks: m,
					min: 0,
					max: r.length - 1,
					step: 1,
					value: r.indexOf(s),
					onChange: e => {
						a(d, {
							currentRange: r[e.target.value]
						})
					},
					label: p,
					disabled: n || t,
					hideSubtext: !0,
					className: h.a.RangeSetting
				}))
			}

			function L({
				isEnabled: e,
				onChange: t,
				settingLayoutData: n
			}) {
				const {
					title: s,
					description: a,
					id: o
				} = n;
				return i.a.createElement(c.p, {
					on: e,
					onClick: () => t(o, {
						isEnabled: !e
					}),
					label: s,
					subtext: a
				})
			}

			function v({
				disabled: e,
				isEnabled: t,
				onChange: n,
				settingLayoutData: s
			}) {
				const {
					title: a,
					description: o,
					id: r
				} = s;
				return i.a.createElement(c.p, {
					on: t,
					onClick: () => n(r, {
						isEnabled: !t
					}),
					label: a,
					subtext: o,
					disabled: e
				})
			}

			function C(e, t, n) {
				const s = t.pages[e].sections.map(e => t.sections[e].rows).flat().map(e => n[e]),
					[a] = s.filter(e => m.includes(e.id.toUpperCase()));
				if (a && !a.isEnabled) return "Disabled";
				const [o] = s.filter(e => p.includes(e.id.toUpperCase()));
				return o.isAuto ? "Auto" : `${o.currentRange}`
			}

			function j({
				isSectionDisabled: e,
				layoutData: t,
				pushPage: n,
				rowLayoutData: s,
				settings: a,
				updateSetting: o
			}) {
				switch (s.__typename) {
					case "ModPnSettingsLayoutRowPage":
						return i.a.createElement(l, {
							pageLayoutData: s,
							pushPage: n,
							displayValue: s.displayValue ? C(s.id, t, a) : null
						});
					case "ModPnSettingsLayoutRowSectionToggle": {
						const e = a[s.id];
						return i.a.createElement(L, {
							settingLayoutData: s,
							onChange: o,
							isEnabled: e.isEnabled
						})
					}
					case "ModPnSettingsLayoutRowToggle": {
						const t = a[s.id];
						return i.a.createElement(v, {
							settingLayoutData: s,
							disabled: e,
							onChange: o,
							isEnabled: t.isEnabled
						})
					}
					case "ModPnSettingsLayoutRowRange": {
						const t = a[s.id];
						return i.a.createElement(E, {
							settingLayoutData: s,
							disabled: e,
							onChange: o,
							currentRange: t.currentRange,
							isAuto: t.isAuto
						})
					}
					default:
						return null
				}
			}
			var k = n("./src/reddit/components/Settings/shared/SectionHeading.tsx");

			function w({
				layoutData: e,
				pushPage: t,
				sectionId: n,
				settings: s,
				updateSetting: a
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
					const e = s[l.id];
					u = !e.isEnabled
				}
				return i.a.createElement("div", null, !!r && i.a.createElement(k.a, null, r), c.map(n => i.a.createElement(j, {
					isSectionDisabled: u,
					key: n.id,
					layoutData: e,
					pushPage: t,
					rowLayoutData: n,
					settings: s,
					updateSetting: a
				})))
			}
			var P = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				O = n("./src/reddit/components/StructuredStyles/Breadcrumbs/index.tsx"),
				D = n("./src/reddit/components/TrackingHelper/index.tsx");

			function M({
				goBack: e,
				layoutData: t,
				pageId: n,
				pushPage: s,
				settings: a,
				showBackButton: r,
				subredditName: d,
				updateSetting: l
			}) {
				const u = Object(D.b)(),
					g = t.pages[n],
					{
						title: m,
						description: p,
						sections: _
					} = g;
				return Object(o.useEffect)(() => {
					u(b(n))
				}, [u, n]), i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: h.a.TitleContainer
				}, r && i.a.createElement(c.f, {
					onClick: e,
					"data-testid": "mod-pns-back-button"
				}, i.a.createElement(O.a, null)), i.a.createElement(P.b, null, m)), i.a.createElement(k.a, null, !!p && p.replace("{community}", d)), _.map(e => i.a.createElement(w, {
					sectionId: e,
					layoutData: t,
					settings: a,
					updateSetting: l,
					pushPage: s,
					key: e
				})))
			}
			var R = n("./src/reddit/components/Settings/Notifications/LoadingState/index.tsx"),
				N = n("./src/lib/makeGqlRequest/index.ts"),
				A = n("./src/redditGQL/operations/GetModPnSettingsLayout.json"),
				T = n("./src/redditGQL/operations/UpdateModPnSettingStatus.json"),
				B = n("./src/redditGQL/operations/UpdateModPnSettingThreshold.json");
			const I = (e, t) => Object(N.a)(e, {
					...A,
					variables: {
						subredditIds: [t]
					}
				}),
				G = (e, t) => "threshold" in t ? q(e, t) : H(e, t),
				q = (e, t) => Object(N.a)(e, {
					...B,
					variables: {
						input: {
							...t
						}
					}
				}),
				H = (e, t) => Object(N.a)(e, {
					...T,
					variables: {
						input: {
							...t
						}
					}
				}),
				V = e => {
					const {
						subredditsInfoByIds: t
					} = e, n = {};
					return t.forEach(e => {
						const {
							id: t,
							modPnSettingsLayout: s
						} = e;
						n[t] = function(e) {
							const t = {},
								n = {},
								s = {};

							function a(e) {
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
									s[e.id] = n, a(e)
								} else s[e.id] = {
									...e
								}
							}
							return a(e.page), {
								pages: t,
								sections: n,
								rows: s
							}
						}(s)
					}), n
				};
			var Y = n("./src/reddit/hooks/useGqlContext.ts");
			const K = 500;

			function U(e) {
				const {
					subredditId: t,
					subredditName: n
				} = e, [s, c] = Object(o.useState)(null), [l, u] = Object(o.useState)({}), [b, S] = Object(o.useState)(!0), y = Object(Y.a)(), h = Object(r.d)(), E = Object(x.a)(), [L, v] = Object(o.useState)(["page__root"]);
				Object(o.useEffect)(() => {
					(async () => {
						const e = await I(y(), t);
						if (e && e.ok) {
							const n = e.body,
								s = V(n.data)[t],
								a = {};
							Object.values(s.rows).map(e => {
								if ("ModPnSettingsLayoutRowRange" === e.__typename) {
									const {
										id: t,
										isAuto: n,
										currentRange: s
									} = e;
									a[t] = {
										id: t,
										isAuto: n,
										currentRange: s
									}
								}
								if ("ModPnSettingsLayoutRowSectionToggle" === e.__typename || "ModPnSettingsLayoutRowToggle" === e.__typename) {
									const {
										id: t,
										isEnabled: n
									} = e;
									a[t] = {
										id: t,
										isEnabled: n
									}
								}
							}), c(s), u(a), S(!1)
						} else h(Object(d.d)())
					})()
				}, []);
				const C = Object(o.useCallback)(a()(async ({
					oldSetting: e,
					newSetting: n
				}) => {
					const s = function(e, t) {
						const n = e.id.toUpperCase();
						if (m.includes(n)) {
							return {
								subredditId: t,
								name: n,
								status: e.isEnabled ? g.d.Enabled : g.d.Disabled
							}
						}
						if (p.includes(n)) {
							const s = e;
							return {
								subredditId: t,
								name: n,
								threshold: s.isAuto ? -1 : s.currentRange
							}
						}
					}(n, t);
					if (!s) return;
					const a = await G(y(), s);
					if (a.ok && E(f(n)), !a.ok) {
						const {
							id: t
						} = e;
						u({
							...l,
							[t]: {
								...e
							}
						}), h(Object(d.d)())
					}
				}, K), []);
				if (b || !s) return i.a.createElement(R.a, null);
				const j = L[L.length - 1],
					k = L.length > 1;
				return i.a.createElement(M, {
					pageId: j,
					showBackButton: k,
					updateSetting: (e, t) => {
						const n = l[e],
							s = {
								...l[e],
								...t
							};
						u({
							...l,
							[e]: {
								...s
							}
						}), C({
							oldSetting: n,
							newSetting: s
						})
					},
					layoutData: s,
					settings: l,
					pushPage: e => {
						v([...L, e]), E(_(e))
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
			var s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/ModHub/StyledComponents/index.m.less"),
				o = n.n(a);
			const i = s.a.div("ContentContainer", o.a),
				r = s.a.div("PageTitle", o.a),
				d = s.a.div("TopBar", o.a)
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
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./node_modules/lodash/times.js"),
				r = n.n(i),
				d = n("./src/reddit/components/Settings/Notifications/LoadingState/index.m.less"),
				c = n.n(d);
			const l = o.a.div("LoadingSectionHeader", c.a),
				u = o.a.div("LoadingToggleWrapper", c.a),
				g = o.a.span("LoadingToggleName", c.a),
				m = o.a.span("LoadingToggleButton", c.a);
			t.a = () => a.a.createElement("div", {
				role: "alert",
				"aria-busy": "true"
			}, a.a.createElement(l, null), r()(5, e => a.a.createElement(u, {
				key: e
			}, a.a.createElement(g, null), a.a.createElement(m, null))))
		},
		"./src/reddit/components/StructuredStyles/Breadcrumbs/index.m.less": function(e, t, n) {
			e.exports = {
				StyledChevron: "_2iNDx2lEuGuIyvMjz5ujOL",
				styledChevron: "_2iNDx2lEuGuIyvMjz5ujOL",
				BreadcrumbElement: "_32_k0a9y4N9cAnw6gApo5X",
				breadcrumbElement: "_32_k0a9y4N9cAnw6gApo5X",
				BreadcrumbContainer: "_1PgkMUbe7dhkAqRt4-VPGe",
				breadcrumbContainer: "_1PgkMUbe7dhkAqRt4-VPGe"
			}
		},
		"./src/reddit/components/StructuredStyles/Breadcrumbs/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx"),
				r = n("./src/reddit/helpers/trackers/blade.ts"),
				d = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				c = n("./src/reddit/components/StructuredStyles/Breadcrumbs/index.m.less"),
				l = n.n(c);
			const u = o.a.wrapped(d.a, "StyledChevron", l.a),
				g = o.a.div("BreadcrumbElement", l.a),
				m = o.a.div("BreadcrumbContainer", l.a);
			t.b = Object(i.c)(e => a.a.createElement(m, null, e.breadcrumbs.map(t => a.a.createElement(g, {
				key: t.title,
				onClick: () => {
					e.sendEvent(Object(r.a)()), e.onNavigate(t)
				}
			}, a.a.createElement(u, null), t.title))))
		},
		"./src/reddit/hooks/useGqlContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				a = n("./src/reddit/contexts/ApiContext.tsx");

			function o() {
				const {
					gqlContext: e
				} = Object(s.useContext)(a.a);
				return e
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				r = n.n(i);
			t.a = e => a.a.createElement("svg", {
				className: Object(o.a)(r.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, a.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), a.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/redditGQL/operations/GetModPnSettingsLayout.json": function(e) {
			e.exports = JSON.parse('{"id":"5a4132322dc0"}')
		},
		"./src/redditGQL/operations/UpdateModPnSettingStatus.json": function(e) {
			e.exports = JSON.parse('{"id":"fb41cb5f551a"}')
		},
		"./src/redditGQL/operations/UpdateModPnSettingThreshold.json": function(e) {
			e.exports = JSON.parse('{"id":"7fc476f8098b"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-CommunitySettings-ModPnSettings.9119700b4909d88a7d70.js.map