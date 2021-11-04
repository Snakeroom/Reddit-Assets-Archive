// https://www.redditstatic.com/desktop2x/EmailNotificationSettings.24494542c523e5589b3f.js
// Retrieved at 11/4/2021, 4:00:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EmailNotificationSettings"], {
		"./node_modules/lodash/times.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseTimes.js"),
				i = s("./node_modules/lodash/_castFunction.js"),
				o = s("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				r = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = o(e)) < 1 || e > a) return [];
				var s = r,
					c = d(e, r);
				t = i(t), e -= r;
				for (var l = n(c, t); ++s < e;) t(s);
				return l
			}
		},
		"./src/reddit/components/Settings/Notifications/EmailNotificationSettings/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				a = s("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				r = s("./src/reddit/selectors/user.ts"),
				d = s("./src/reddit/components/Settings/Notifications/NotificationToggles.tsx");
			const c = Object(i.c)({
					hasError: r.q,
					rows: r.Z,
					sections: r.ab
				}),
				l = Object(n.b)(c, e => ({
					fetchNotificationSettings: () => e(Object(o.a)(a.a.Email)),
					updateNotificationPreference: t => e(Object(o.b)(t))
				}))(d.a);
			t.default = l
		},
		"./src/reddit/components/Settings/Notifications/LoadingSection.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/lodash/times.js"),
				i = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				r = s("./src/reddit/components/Settings/Notifications/index.m.less"),
				d = s.n(r);
			const c = ({
				rowsCount: e
			}) => a.a.createElement("div", {
				role: "alert",
				"aria-busy": "true"
			}, a.a.createElement("div", {
				className: d.a.loadingSectionHeader
			}), i()(e, e => a.a.createElement("div", {
				className: d.a.loadingToggleWrapper,
				key: e
			}, a.a.createElement("span", {
				className: d.a.loadingToggleName
			}), a.a.createElement("span", {
				className: d.a.loadingToggleButton
			}))))
		},
		"./src/reddit/components/Settings/Notifications/NotificationToggles.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./src/reddit/components/Settings/Notifications/Loader.ts"),
				r = s("./src/reddit/components/Settings/Notifications/LoadingSection.tsx"),
				d = s("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				c = s("./src/reddit/components/Settings/shared/Widgets.tsx"),
				l = s("./src/reddit/helpers/trackers/notifications.ts"),
				m = s("./src/reddit/hooks/useTracking.ts"),
				g = s("./src/reddit/components/Settings/Notifications/index.m.less"),
				u = s.n(g);
			const f = e => {
				Object(i.useEffect)(() => {
					e.fetchNotificationSettings()
				}, []);
				const t = Object(m.a)(),
					s = (s, n, i) => {
						const a = e.rows && e.rows.byId[s];
						return a ? o.a.createElement(c.p, {
							disabled: e.disabled,
							forceOn: a.isEnabled && e.disabled,
							key: a.displayName,
							label: a.displayName,
							last: i.length === n + 1,
							on: a.isEnabled,
							onClick: () => (s => {
								if (s.messageType) {
									const n = e.isEmailSettings;
									t(n ? Object(l.b)(!s.isEnabled, s.messageType) : Object(l.g)(!s.isEnabled, s.messageType))
								}
								e.updateNotificationPreference({
									isEnabled: !s.isEnabled,
									messageType: s.messageType
								})
							})(a),
							subtext: a.description
						}) : null
					},
					g = o.a.createElement("span", {
						className: "errorMessage",
						"data-testid": "error-message"
					}, n.fbt._("There was an issue fetching your notification settings. Please try again later.", null, {
						hk: "4pmBD4"
					})),
					f = e.sections && e.sections.allIds,
					b = f && f.map(t => {
						const n = e.sections && e.sections.byId && e.sections.byId[t];
						if (!n) return null;
						const i = "Moderation" === n.title;
						return o.a.createElement("div", {
							key: t
						}, o.a.createElement(d.a, null, n.title), n.rows ? n.rows.map(s) : null, i && o.a.createElement("div", {
							className: u.a.ModPnSettingsSubredditList,
							"data-testid": "mod-pn-settings-subreddit-list-container"
						}, o.a.createElement(a.b, {
							handleModPnSubredditClick: e.handleModPnClick
						})))
					});
				return e.hasError ? g : f && f.length > 0 ? o.a.createElement(o.a.Fragment, null, b) : o.a.createElement(r.a, {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EmailNotificationSettings.24494542c523e5589b3f.js.map