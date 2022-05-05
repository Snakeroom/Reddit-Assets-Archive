// https://www.redditstatic.com/desktop2x/EmailNotificationSettings.98e153e7b967be18c728.js
// Retrieved at 5/5/2022, 12:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EmailNotificationSettings"], {
		"./node_modules/lodash/times.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseTimes.js"),
				i = s("./node_modules/lodash/_castFunction.js"),
				a = s("./node_modules/lodash/toInteger.js"),
				o = 9007199254740991,
				r = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = a(e)) < 1 || e > o) return [];
				var s = r,
					d = c(e, r);
				t = i(t), e -= r;
				for (var l = n(d, t); ++s < e;) t(s);
				return l
			}
		},
		"./src/reddit/components/Settings/Notifications/EmailNotificationSettings/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				o = s("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				r = s("./src/reddit/selectors/user.ts"),
				c = s("./src/reddit/components/Settings/Notifications/NotificationToggles.tsx");
			const d = Object(i.c)({
					hasError: r.t,
					rows: r.fb,
					sections: r.gb
				}),
				l = Object(n.b)(d, e => ({
					fetchNotificationSettings: () => e(Object(a.a)(o.a.Email)),
					updateNotificationPreference: t => e(Object(a.d)(t))
				}))(c.a);
			t.default = l
		},
		"./src/reddit/components/Settings/Notifications/LoadingSection.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/lodash/times.js"),
				i = s.n(n),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/reddit/components/Settings/Notifications/index.m.less"),
				c = s.n(r);
			const d = e => {
				let {
					rowsCount: t
				} = e;
				return o.a.createElement("div", {
					role: "alert",
					"aria-busy": "true"
				}, o.a.createElement("div", {
					className: c.a.loadingSectionHeader
				}), i()(t, e => o.a.createElement("div", {
					className: c.a.loadingToggleWrapper,
					key: e
				}, o.a.createElement("span", {
					className: c.a.loadingToggleName
				}), o.a.createElement("span", {
					className: c.a.loadingToggleButton
				}))))
			}
		},
		"./src/reddit/components/Settings/Notifications/NotificationToggles.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				o = s("./src/reddit/components/Settings/Notifications/Loader.ts"),
				r = s("./src/reddit/components/Settings/Notifications/LoadingSection.tsx"),
				c = s("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				d = s("./src/reddit/components/Settings/shared/Widgets.tsx"),
				l = s("./src/reddit/helpers/trackers/notifications.ts"),
				m = s("./src/reddit/hooks/useTracking.ts"),
				u = s("./src/reddit/icons/fonts/index.tsx"),
				g = s("./src/reddit/components/Settings/Notifications/index.m.less"),
				f = s.n(g);
			const b = e => {
				Object(i.useEffect)(() => {
					e.fetchNotificationSettings()
				}, []);
				const t = Object(m.a)(),
					s = (s, n, i) => {
						const o = e.rows && e.rows.byId[s];
						return o ? a.a.createElement(d.p, {
							disabled: e.disabled,
							forceOn: o.isEnabled && e.disabled,
							key: o.displayName,
							label: o.displayName,
							last: i.length === n + 1,
							on: o.isEnabled,
							onClick: () => (s => {
								if (s.messageType) {
									const n = e.isEmailSettings;
									t(n ? Object(l.b)(!s.isEnabled, s.messageType) : Object(l.h)(!s.isEnabled, s.messageType))
								}
								e.updateNotificationPreference({
									isEnabled: !s.isEnabled,
									messageType: s.messageType
								})
							})(o),
							subtext: o.description
						}) : null
					},
					g = a.a.createElement("span", {
						className: "errorMessage",
						"data-testid": "error-message"
					}, n.fbt._("There was an issue fetching your notification settings. Please try again later.", null, {
						hk: "4pmBD4"
					})),
					b = e.sections && e.sections.allIds,
					_ = b && b.map(t => {
						const i = e.sections && e.sections.byId && e.sections.byId[t];
						if (!i) return null;
						const r = "Moderation" === i.title;
						return a.a.createElement("div", {
							key: t
						}, a.a.createElement(c.a, null, i.title), !e.isEmailSettings && "Activity" === i.title && e.handleCommunityNavClick && a.a.createElement(d.k, null, a.a.createElement("button", {
							onClick: e.handleCommunityNavClick,
							className: f.a.communityAlert
						}, a.a.createElement("h3", {
							className: f.a.header
						}, n.fbt._("Community alerts", null, {
							hk: "3jkfcH"
						})), a.a.createElement(u.a, {
							name: "forward_fill",
							className: f.a.arrow
						}))), i.rows ? i.rows.map(s) : null, r && a.a.createElement("div", {
							className: f.a.ModPnSettingsSubredditList,
							"data-testid": "mod-pn-settings-subreddit-list-container"
						}, a.a.createElement(o.c, {
							handleModPnSubredditClick: e.handleModPnClick
						})))
					});
				return e.hasError ? g : b && b.length > 0 ? a.a.createElement(a.a.Fragment, null, _) : a.a.createElement(r.a, {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EmailNotificationSettings.98e153e7b967be18c728.js.map