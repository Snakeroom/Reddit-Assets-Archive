// https://www.redditstatic.com/desktop2x/PushNotificationSettings.572d8b3ed52f7a88c047.js
// Retrieved at 1/10/2022, 3:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PushNotificationSettings"], {
		"./src/reddit/components/Settings/Notifications/LoadingSection.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var i = s("./node_modules/lodash/times.js"),
				n = s.n(i),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				r = s("./src/reddit/components/Settings/Notifications/index.m.less"),
				c = s.n(r);
			const d = ({
				rowsCount: e
			}) => a.a.createElement("div", {
				role: "alert",
				"aria-busy": "true"
			}, a.a.createElement("div", {
				className: c.a.loadingSectionHeader
			}), n()(e, e => a.a.createElement("div", {
				className: c.a.loadingToggleWrapper,
				key: e
			}, a.a.createElement("span", {
				className: c.a.loadingToggleName
			}), a.a.createElement("span", {
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
				o = s.n(n),
				a = s("./src/reddit/components/Settings/Notifications/Loader.ts"),
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
						const a = e.rows && e.rows.byId[s];
						return a ? o.a.createElement(d.p, {
							disabled: e.disabled,
							forceOn: a.isEnabled && e.disabled,
							key: a.displayName,
							label: a.displayName,
							last: n.length === i + 1,
							on: a.isEnabled,
							onClick: () => (s => {
								if (s.messageType) {
									const i = e.isEmailSettings;
									t(i ? Object(l.b)(!s.isEnabled, s.messageType) : Object(l.g)(!s.isEnabled, s.messageType))
								}
								e.updateNotificationPreference({
									isEnabled: !s.isEnabled,
									messageType: s.messageType
								})
							})(a),
							subtext: a.description
						}) : null
					},
					m = o.a.createElement("span", {
						className: "errorMessage",
						"data-testid": "error-message"
					}, i.fbt._("There was an issue fetching your notification settings. Please try again later.", null, {
						hk: "4pmBD4"
					})),
					f = e.sections && e.sections.allIds,
					b = f && f.map(t => {
						const i = e.sections && e.sections.byId && e.sections.byId[t];
						if (!i) return null;
						const n = "Moderation" === i.title;
						return o.a.createElement("div", {
							key: t
						}, o.a.createElement(c.a, null, i.title), i.rows ? i.rows.map(s) : null, n && o.a.createElement("div", {
							className: u.a.ModPnSettingsSubredditList,
							"data-testid": "mod-pn-settings-subreddit-list-container"
						}, o.a.createElement(a.b, {
							handleModPnSubredditClick: e.handleModPnClick
						})))
					});
				return e.hasError ? m : f && f.length > 0 ? o.a.createElement(o.a.Fragment, null, b) : o.a.createElement(r.a, {
					rowsCount: 5
				})
			}
		},
		"./src/reddit/components/Settings/Notifications/PushNotificationSettings/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var i = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				a = s("./src/reddit/components/Settings/Notifications/NotificationToggles.tsx"),
				r = s("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				c = s("./src/reddit/selectors/user.ts");
			const d = Object(n.c)({
					hasError: c.r,
					rows: c.ab,
					sections: c.bb
				}),
				l = Object(i.b)(d, e => ({
					fetchNotificationSettings: () => e(Object(o.a)(r.a.Push)),
					updateNotificationPreference: t => e(Object(o.b)(t))
				}))(a.a);
			t.default = l
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PushNotificationSettings.572d8b3ed52f7a88c047.js.map