// https://www.redditstatic.com/desktop2x/PushNotificationSettings.722c0a3fdcd21515db01.js
// Retrieved at 3/23/2023, 3:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PushNotificationSettings"], {
		"./node_modules/lodash/times.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseTimes.js"),
				i = s("./node_modules/lodash/_castFunction.js"),
				a = s("./node_modules/lodash/toInteger.js"),
				o = 9007199254740991,
				r = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = a(e)) < 1 || e > o) return [];
				var s = r,
					c = d(e, r);
				t = i(t), e -= r;
				for (var l = n(c, t); ++s < e;) t(s);
				return l
			}
		},
		"./src/reddit/components/Settings/Notifications/LoadingSection.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/lodash/times.js"),
				i = s.n(n),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/reddit/components/Settings/Notifications/index.m.less"),
				d = s.n(r);
			const c = e => {
				let {
					rowsCount: t
				} = e;
				return o.a.createElement("div", {
					role: "alert",
					"aria-busy": "true"
				}, o.a.createElement("div", {
					className: d.a.loadingSectionHeader
				}), i()(t, e => o.a.createElement("div", {
					className: d.a.loadingToggleWrapper,
					key: e
				}, o.a.createElement("span", {
					className: d.a.loadingToggleName
				}), o.a.createElement("span", {
					className: d.a.loadingToggleButton
				}))))
			}
		},
		"./src/reddit/components/Settings/Notifications/NotificationToggles.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return _
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/reddit/components/Settings/Notifications/Loader.ts"),
				d = s("./src/reddit/components/Settings/Notifications/LoadingSection.tsx"),
				c = s("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				l = s("./src/reddit/components/Settings/shared/Widgets.tsx"),
				m = s("./src/reddit/helpers/trackers/notifications.ts"),
				u = s("./src/reddit/hooks/useTracking.ts"),
				g = s("./src/reddit/icons/fonts/index.tsx"),
				f = s("./src/reddit/selectors/user.ts"),
				b = s("./src/reddit/components/Settings/Notifications/index.m.less"),
				p = s.n(b);
			const _ = e => {
				Object(i.useEffect)(() => {
					e.fetchNotificationSettings()
				}, []);
				const t = Object(u.a)(),
					s = Object(o.e)(f.l),
					b = (s, n, i) => {
						const o = e.rows && e.rows.byId[s];
						return o ? a.a.createElement("span", {
							id: o.displayName.replace(/[^\w\s]|\s/gi, "").toLowerCase()
						}, a.a.createElement(l.q, {
							disabled: e.disabled,
							forceOn: o.isEnabled && e.disabled,
							key: o.displayName,
							label: o.displayName,
							last: i.length === n + 1,
							on: o.isEnabled,
							onClick: () => (s => {
								if (s.messageType) {
									const n = e.isEmailSettings;
									t(n ? Object(m.b)(!s.isEnabled, s.messageType) : Object(m.i)(!s.isEnabled, s.messageType))
								}
								e.updateNotificationPreference({
									isEnabled: !s.isEnabled,
									messageType: s.messageType
								})
							})(o),
							subtext: o.description
						})) : null
					},
					_ = a.a.createElement("span", {
						className: "errorMessage",
						"data-testid": "error-message"
					}, n.fbt._("There was an issue fetching your notification settings. Please try again later.", null, {
						hk: "4pmBD4"
					})),
					N = e.sections && e.sections.allIds,
					h = N && N.map(t => {
						const i = e.sections && e.sections.byId && e.sections.byId[t];
						if (!i) return null;
						const o = "Moderation" === i.title;
						return a.a.createElement("div", {
							key: t
						}, !s.length && o ? null : a.a.createElement(c.a, null, i.title), !e.isEmailSettings && "Activity" === i.title && e.handleCommunityNavClick && a.a.createElement(l.l, null, a.a.createElement("button", {
							onClick: e.handleCommunityNavClick,
							className: p.a.communityAlert
						}, a.a.createElement("h3", {
							className: p.a.header
						}, n.fbt._("Community alerts", null, {
							hk: "3jkfcH"
						})), a.a.createElement(g.a, {
							name: "forward_fill",
							className: p.a.arrow
						}))), i.rows ? !s.length && o ? null : i.rows.map(b) : null, o ? a.a.createElement("div", {
							className: p.a.ModPnSettingsSubredditList,
							"data-testid": "mod-pn-settings-subreddit-list-container"
						}, a.a.createElement(r.c, {
							handleModPnSubredditClick: e.handleModPnClick
						})) : null)
					});
				return e.hasError ? _ : N && N.length > 0 ? a.a.createElement(a.a.Fragment, null, h) : a.a.createElement(d.a, {
					rowsCount: 5
				})
			}
		},
		"./src/reddit/components/Settings/Notifications/PushNotificationSettings/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				o = s("./src/reddit/components/Settings/Notifications/NotificationToggles.tsx"),
				r = s("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				d = s("./src/reddit/selectors/user.ts");
			const c = Object(i.c)({
					hasError: d.w,
					rows: d.jb,
					sections: d.kb
				}),
				l = Object(n.b)(c, e => ({
					fetchNotificationSettings: () => e(Object(a.a)(r.a.Push)),
					updateNotificationPreference: t => e(Object(a.d)(t))
				}))(o.a);
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PushNotificationSettings.722c0a3fdcd21515db01.js.map