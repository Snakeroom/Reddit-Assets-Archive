// https://www.redditstatic.com/desktop2x/EmailNotificationSettings.dc911b6e4f108147b951.js
// Retrieved at 2/16/2022, 7:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EmailNotificationSettings"], {
		"./src/reddit/components/Settings/Notifications/EmailNotificationSettings/index.tsx": function(e, t, i) {
			"use strict";
			i.r(t);
			var s = i("./node_modules/react-redux/es/index.js"),
				n = i("./node_modules/reselect/es/index.js"),
				a = i("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				o = i("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				r = i("./src/reddit/selectors/user.ts"),
				c = i("./src/reddit/components/Settings/Notifications/NotificationToggles.tsx");
			const d = Object(n.c)({
					hasError: r.s,
					rows: r.cb,
					sections: r.db
				}),
				l = Object(s.b)(d, e => ({
					fetchNotificationSettings: () => e(Object(a.a)(o.a.Email)),
					updateNotificationPreference: t => e(Object(a.d)(t))
				}))(c.a);
			t.default = l
		},
		"./src/reddit/components/Settings/Notifications/LoadingSection.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return d
			}));
			var s = i("./node_modules/lodash/times.js"),
				n = i.n(s),
				a = i("./node_modules/react/index.js"),
				o = i.n(a),
				r = i("./src/reddit/components/Settings/Notifications/index.m.less"),
				c = i.n(r);
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
		"./src/reddit/components/Settings/Notifications/NotificationToggles.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return b
			}));
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./node_modules/react/index.js"),
				a = i.n(n),
				o = i("./src/reddit/components/Settings/Notifications/Loader.ts"),
				r = i("./src/reddit/components/Settings/Notifications/LoadingSection.tsx"),
				c = i("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				d = i("./src/reddit/components/Settings/shared/Widgets.tsx"),
				l = i("./src/reddit/helpers/trackers/notifications.ts"),
				m = i("./src/reddit/hooks/useTracking.ts"),
				g = i("./src/reddit/icons/fonts/index.tsx"),
				u = i("./src/reddit/components/Settings/Notifications/index.m.less"),
				f = i.n(u);
			const b = e => {
				Object(n.useEffect)(() => {
					e.fetchNotificationSettings()
				}, []);
				const t = Object(m.a)(),
					i = (i, s, n) => {
						const o = e.rows && e.rows.byId[i];
						return o ? a.a.createElement(d.p, {
							disabled: e.disabled,
							forceOn: o.isEnabled && e.disabled,
							key: o.displayName,
							label: o.displayName,
							last: n.length === s + 1,
							on: o.isEnabled,
							onClick: () => (i => {
								if (i.messageType) {
									const s = e.isEmailSettings;
									t(s ? Object(l.b)(!i.isEnabled, i.messageType) : Object(l.g)(!i.isEnabled, i.messageType))
								}
								e.updateNotificationPreference({
									isEnabled: !i.isEnabled,
									messageType: i.messageType
								})
							})(o),
							subtext: o.description
						}) : null
					},
					u = a.a.createElement("span", {
						className: "errorMessage",
						"data-testid": "error-message"
					}, s.fbt._("There was an issue fetching your notification settings. Please try again later.", null, {
						hk: "4pmBD4"
					})),
					b = e.sections && e.sections.allIds,
					p = b && b.map(t => {
						const n = e.sections && e.sections.byId && e.sections.byId[t];
						if (!n) return null;
						const r = "Moderation" === n.title;
						return a.a.createElement("div", {
							key: t
						}, a.a.createElement(c.a, null, n.title), !e.isEmailSettings && "Activity" === n.title && e.handleCommunityNavClick && a.a.createElement(d.k, null, a.a.createElement("button", {
							onClick: e.handleCommunityNavClick,
							className: f.a.communityAlert
						}, a.a.createElement("h3", {
							className: f.a.header
						}, s.fbt._("Community alerts", null, {
							hk: "3jkfcH"
						})), a.a.createElement(g.a, {
							name: "forward_fill",
							className: f.a.arrow
						}))), n.rows ? n.rows.map(i) : null, r && a.a.createElement("div", {
							className: f.a.ModPnSettingsSubredditList,
							"data-testid": "mod-pn-settings-subreddit-list-container"
						}, a.a.createElement(o.c, {
							handleModPnSubredditClick: e.handleModPnClick
						})))
					});
				return e.hasError ? u : b && b.length > 0 ? a.a.createElement(a.a.Fragment, null, p) : a.a.createElement(r.a, {
					rowsCount: 5
				})
			}
		},
		"./src/reddit/components/Settings/Notifications/index.m.less": function(e, t, i) {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EmailNotificationSettings.dc911b6e4f108147b951.js.map