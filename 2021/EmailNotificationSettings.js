// https://www.redditstatic.com/desktop2x/EmailNotificationSettings.58adf960a9fcfabe1d65.js
// Retrieved at 10/6/2021, 1:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EmailNotificationSettings"], {
		"./node_modules/lodash/times.js": function(e, t, i) {
			var s = i("./node_modules/lodash/_baseTimes.js"),
				n = i("./node_modules/lodash/_castFunction.js"),
				o = i("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				d = 4294967295,
				r = Math.min;
			e.exports = function(e, t) {
				if ((e = o(e)) < 1 || e > a) return [];
				var i = d,
					c = r(e, d);
				t = n(t), e -= d;
				for (var l = s(c, t); ++i < e;) t(i);
				return l
			}
		},
		"./src/reddit/components/Settings/Notifications/EmailNotificationSettings/index.tsx": function(e, t, i) {
			"use strict";
			i.r(t);
			var s = i("./node_modules/react-redux/es/index.js"),
				n = i("./node_modules/reselect/es/index.js"),
				o = i("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				a = i("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				d = i("./src/reddit/selectors/user.ts"),
				r = i("./src/reddit/components/Settings/Notifications/NotificationToggles.tsx");
			const c = Object(n.c)({
					hasError: d.q,
					rows: d.Z,
					sections: d.ab
				}),
				l = Object(s.b)(c, e => ({
					fetchNotificationSettings: () => e(Object(o.a)(a.a.Email)),
					updateNotificationPreference: t => e(Object(o.b)(t))
				}))(r.a);
			t.default = l
		},
		"./src/reddit/components/Settings/Notifications/LoadingState/index.m.less": function(e, t, i) {
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
		"./src/reddit/components/Settings/Notifications/LoadingState/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				o = i("./src/lib/lessComponent.tsx"),
				a = i("./node_modules/lodash/times.js"),
				d = i.n(a),
				r = i("./src/reddit/components/Settings/Notifications/LoadingState/index.m.less"),
				c = i.n(r);
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
		"./src/reddit/components/Settings/Notifications/NotificationToggles.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return f
			}));
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./node_modules/react/index.js"),
				o = i.n(n),
				a = i("./src/reddit/components/Settings/Notifications/Loader.ts"),
				d = i("./src/reddit/components/Settings/Notifications/LoadingState/index.tsx"),
				r = i("./src/reddit/helpers/trackers/notifications.ts"),
				c = i("./src/reddit/hooks/useTracking.ts"),
				l = i("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				g = i("./src/reddit/components/Settings/shared/Widgets.tsx"),
				m = i("./src/reddit/components/Settings/Notifications/index.m.less"),
				u = i.n(m);
			const f = e => {
				Object(n.useEffect)(() => {
					e.fetchNotificationSettings()
				}, []);
				const t = Object(c.a)(),
					i = (i, s, n) => {
						const a = e.rows && e.rows.byId[i];
						return a ? o.a.createElement(g.o, {
							disabled: e.disabled,
							forceOn: a.isEnabled && e.disabled,
							key: a.displayName,
							label: a.displayName,
							last: n.length === s + 1,
							on: a.isEnabled,
							onClick: () => (i => {
								if (i.messageType) {
									const s = e.isEmailSettings;
									t(s ? Object(r.b)(!i.isEnabled, i.messageType) : Object(r.g)(!i.isEnabled, i.messageType))
								}
								e.updateNotificationPreference({
									isEnabled: !i.isEnabled,
									messageType: i.messageType
								})
							})(a),
							subtext: a.description
						}) : null
					},
					m = o.a.createElement("span", {
						className: "errorMessage",
						"data-testid": "error-message"
					}, s.fbt._("There was an issue fetching your notification settings. Please try again later.", null, {
						hk: "4pmBD4"
					})),
					f = e.sections && e.sections.allIds,
					p = f && f.map(t => {
						const s = e.sections && e.sections.byId && e.sections.byId[t];
						if (!s) return null;
						const n = "Moderation" === s.title;
						return o.a.createElement("div", {
							key: t
						}, o.a.createElement(l.a, null, s.title), s.rows ? s.rows.map(i) : null, n && o.a.createElement("div", {
							className: u.a.ModPnSettingsSubredditList,
							"data-testid": "mod-pn-settings-subreddit-list-container"
						}, o.a.createElement(a.b, {
							handleModPnSubredditClick: e.handleModPnClick
						})))
					});
				return e.hasError ? m : f && f.length > 0 ? o.a.createElement(o.a.Fragment, null, p) : o.a.createElement(d.a, null)
			}
		},
		"./src/reddit/components/Settings/Notifications/index.m.less": function(e, t, i) {
			e.exports = {
				errorMessage: "_3wk25QxRP-Wk1zL9JaaNAH",
				ModPnSettingsSubredditList: "_1Wq_iiOCv9Zlu6GiZmzuEY",
				modPnSettingsSubredditList: "_1Wq_iiOCv9Zlu6GiZmzuEY"
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EmailNotificationSettings.58adf960a9fcfabe1d65.js.map