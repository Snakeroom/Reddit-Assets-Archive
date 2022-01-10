// https://www.redditstatic.com/desktop2x/EmailNotificationSettings.73bdf3c1b44f6e266363.js
// Retrieved at 1/10/2022, 3:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EmailNotificationSettings"], {
		"./src/reddit/components/Settings/Notifications/EmailNotificationSettings/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var i = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				o = s("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				r = s("./src/reddit/selectors/user.ts"),
				c = s("./src/reddit/components/Settings/Notifications/NotificationToggles.tsx");
			const d = Object(n.c)({
					hasError: r.q,
					rows: r.Y,
					sections: r.Z
				}),
				l = Object(i.b)(d, e => ({
					fetchNotificationSettings: () => e(Object(a.a)(o.a.Email)),
					updateNotificationPreference: t => e(Object(a.b)(t))
				}))(c.a);
			t.default = l
		},
		"./src/reddit/components/Settings/Notifications/LoadingSection.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var i = s("./node_modules/lodash/times.js"),
				n = s.n(i),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/reddit/components/Settings/Notifications/index.m.less"),
				c = s.n(r);
			const d = ({
				rowsCount: e
			}) => o.a.createElement("div", {
				role: "alert",
				"aria-busy": "true"
			}, o.a.createElement("div", {
				className: c.a.loadingSectionHeader
			}), n()(e, e => o.a.createElement("div", {
				className: c.a.loadingToggleWrapper,
				key: e
			}, o.a.createElement("span", {
				className: c.a.loadingToggleName
			}), o.a.createElement("span", {
				className: c.a.loadingToggleButton
			}))))
		},
		"./src/reddit/components/Settings/Notifications/NotificationToggles.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/reddit/components/Settings/Notifications/Loader.ts"),
				r = s("./src/reddit/components/Settings/Notifications/LoadingSection.tsx"),
				c = s("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				d = s("./src/reddit/components/Settings/shared/Widgets.tsx"),
				l = s("./src/reddit/helpers/trackers/notifications.ts"),
				g = s("./src/reddit/hooks/useTracking.ts"),
				m = s("./src/reddit/components/Settings/Notifications/index.m.less"),
				u = s.n(m);
			const f = e => {
				Object(n.useEffect)(() => {
					e.fetchNotificationSettings()
				}, []);
				const t = Object(g.a)(),
					s = (s, i, n) => {
						const o = e.rows && e.rows.byId[s];
						return o ? a.a.createElement(d.p, {
							disabled: e.disabled,
							forceOn: o.isEnabled && e.disabled,
							key: o.displayName,
							label: o.displayName,
							last: n.length === i + 1,
							on: o.isEnabled,
							onClick: () => (s => {
								if (s.messageType) {
									const i = e.isEmailSettings;
									t(i ? Object(l.b)(!s.isEnabled, s.messageType) : Object(l.g)(!s.isEnabled, s.messageType))
								}
								e.updateNotificationPreference({
									isEnabled: !s.isEnabled,
									messageType: s.messageType
								})
							})(o),
							subtext: o.description
						}) : null
					},
					m = a.a.createElement("span", {
						className: "errorMessage",
						"data-testid": "error-message"
					}, i.fbt._("There was an issue fetching your notification settings. Please try again later.", null, {
						hk: "4pmBD4"
					})),
					f = e.sections && e.sections.allIds,
					p = f && f.map(t => {
						const i = e.sections && e.sections.byId && e.sections.byId[t];
						if (!i) return null;
						const n = "Moderation" === i.title;
						return a.a.createElement("div", {
							key: t
						}, a.a.createElement(c.a, null, i.title), i.rows ? i.rows.map(s) : null, n && a.a.createElement("div", {
							className: u.a.ModPnSettingsSubredditList,
							"data-testid": "mod-pn-settings-subreddit-list-container"
						}, a.a.createElement(o.b, {
							handleModPnSubredditClick: e.handleModPnClick
						})))
					});
				return e.hasError ? m : f && f.length > 0 ? a.a.createElement(a.a.Fragment, null, p) : a.a.createElement(r.a, {
					rowsCount: 5
				})
			}
		},
		"./src/reddit/components/Settings/Notifications/index.m.less": function(e, t, s) {
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EmailNotificationSettings.73bdf3c1b44f6e266363.js.map