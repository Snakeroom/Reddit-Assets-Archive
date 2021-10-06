// https://www.redditstatic.com/desktop2x/PushNotificationSettings.bb16024463de1091d6da.js
// Retrieved at 10/6/2021, 1:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PushNotificationSettings"], {
		"./node_modules/lodash/times.js": function(e, t, s) {
			var i = s("./node_modules/lodash/_baseTimes.js"),
				n = s("./node_modules/lodash/_castFunction.js"),
				o = s("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				d = 4294967295,
				r = Math.min;
			e.exports = function(e, t) {
				if ((e = o(e)) < 1 || e > a) return [];
				var s = d,
					c = r(e, d);
				t = n(t), e -= d;
				for (var l = i(c, t); ++s < e;) t(s);
				return l
			}
		},
		"./src/reddit/components/Settings/Notifications/LoadingState/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Settings/Notifications/LoadingState/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./src/lib/lessComponent.tsx"),
				a = s("./node_modules/lodash/times.js"),
				d = s.n(a),
				r = s("./src/reddit/components/Settings/Notifications/LoadingState/index.m.less"),
				c = s.n(r);
			const l = o.a.div("LoadingSectionHeader", c.a),
				g = o.a.div("LoadingToggleWrapper", c.a),
				m = o.a.span("LoadingToggleName", c.a),
				u = o.a.span("LoadingToggleButton", c.a);
			t.a = () => n.a.createElement("div", {
				role: "alert",
				"aria-busy": "true"
			}, n.a.createElement(l, null), d()(5, e => n.a.createElement(g, {
				key: e
			}, n.a.createElement(m, null), n.a.createElement(u, null))))
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
				d = s("./src/reddit/components/Settings/Notifications/LoadingState/index.tsx"),
				r = s("./src/reddit/helpers/trackers/notifications.ts"),
				c = s("./src/reddit/hooks/useTracking.ts"),
				l = s("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				g = s("./src/reddit/components/Settings/shared/Widgets.tsx"),
				m = s("./src/reddit/components/Settings/Notifications/index.m.less"),
				u = s.n(m);
			const f = e => {
				Object(n.useEffect)(() => {
					e.fetchNotificationSettings()
				}, []);
				const t = Object(c.a)(),
					s = (s, i, n) => {
						const a = e.rows && e.rows.byId[s];
						return a ? o.a.createElement(g.o, {
							disabled: e.disabled,
							forceOn: a.isEnabled && e.disabled,
							key: a.displayName,
							label: a.displayName,
							last: n.length === i + 1,
							on: a.isEnabled,
							onClick: () => (s => {
								if (s.messageType) {
									const i = e.isEmailSettings;
									t(i ? Object(r.b)(!s.isEnabled, s.messageType) : Object(r.g)(!s.isEnabled, s.messageType))
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
						}, o.a.createElement(l.a, null, i.title), i.rows ? i.rows.map(s) : null, n && o.a.createElement("div", {
							className: u.a.ModPnSettingsSubredditList,
							"data-testid": "mod-pn-settings-subreddit-list-container"
						}, o.a.createElement(a.b, {
							handleModPnSubredditClick: e.handleModPnClick
						})))
					});
				return e.hasError ? m : f && f.length > 0 ? o.a.createElement(o.a.Fragment, null, b) : o.a.createElement(d.a, null)
			}
		},
		"./src/reddit/components/Settings/Notifications/PushNotificationSettings/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var i = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				a = s("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				d = s("./src/reddit/selectors/user.ts"),
				r = s("./src/reddit/components/Settings/Notifications/NotificationToggles.tsx");
			const c = Object(n.c)({
					hasError: d.r,
					rows: d.bb,
					sections: d.cb
				}),
				l = Object(i.b)(c, e => ({
					fetchNotificationSettings: () => e(Object(o.a)(a.a.Push)),
					updateNotificationPreference: t => e(Object(o.b)(t))
				}))(r.a);
			t.default = l
		},
		"./src/reddit/components/Settings/Notifications/index.m.less": function(e, t, s) {
			e.exports = {
				errorMessage: "_3wk25QxRP-Wk1zL9JaaNAH",
				ModPnSettingsSubredditList: "_1Wq_iiOCv9Zlu6GiZmzuEY",
				modPnSettingsSubredditList: "_1Wq_iiOCv9Zlu6GiZmzuEY"
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PushNotificationSettings.bb16024463de1091d6da.js.map