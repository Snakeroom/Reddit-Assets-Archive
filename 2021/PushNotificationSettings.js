// https://www.redditstatic.com/desktop2x/PushNotificationSettings.d9be77385e5ac3f4b630.js
// Retrieved at 3/18/2021, 4:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PushNotificationSettings"], {
		"./node_modules/lodash/times.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseTimes.js"),
				a = s("./node_modules/lodash/_castFunction.js"),
				i = s("./node_modules/lodash/toInteger.js"),
				o = 9007199254740991,
				r = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = i(e)) < 1 || e > o) return [];
				var s = r,
					c = d(e, r);
				t = a(t), e -= r;
				for (var l = n(c, t); ++s < e;) t(s);
				return l
			}
		},
		"./src/reddit/components/Settings/Notifications/NotificationToggles.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return T
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/lodash/times.js"),
				i = s.n(a),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/helpers/trackers/notifications.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				g = s("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				m = s("./src/reddit/components/Settings/shared/Widgets.tsx"),
				u = s("./src/reddit/components/Settings/Notifications/index.m.less"),
				b = s.n(u);
			const f = d.a.div("LoadingSectionHeader", b.a),
				_ = d.a.div("LoadingToggleWrapper", b.a),
				p = d.a.span("LoadingToggleName", b.a),
				E = d.a.span("LoadingToggleButton", b.a),
				N = () => r.a.createElement("div", {
					role: "alert",
					"aria-busy": "true"
				}, r.a.createElement(f, null), i()(5, e => r.a.createElement(_, {
					key: e
				}, r.a.createElement(p, null), r.a.createElement(E, null)))),
				T = e => {
					Object(o.useEffect)(() => {
						e.fetchNotificationSettings()
					}, []);
					const t = Object(l.a)(),
						s = (s, n, a) => {
							const i = e.rows && e.rows.byId[s];
							return i ? r.a.createElement(m.o, {
								disabled: e.disabled,
								forceOn: i.isEnabled && e.disabled,
								key: i.displayName,
								label: i.displayName,
								last: a.length === n + 1,
								on: i.isEnabled,
								onClick: () => (s => {
									if (s.messageType) {
										const n = e.isEmailSettings;
										t(n ? Object(c.b)(!s.isEnabled, s.messageType) : Object(c.g)(!s.isEnabled, s.messageType))
									}
									e.updateNotificationPreference({
										isEnabled: !s.isEnabled,
										messageType: s.messageType
									})
								})(i),
								subtext: i.description
							}) : null
						},
						a = r.a.createElement("span", {
							className: "errorMessage",
							"data-testid": "error-message"
						}, n.fbt._("There was an issue fetching your notification settings. Please try again later.", null, {
							hk: "4pmBD4"
						})),
						i = e.sections && e.sections.allIds,
						d = i && i.map(t => {
							const n = e.sections && e.sections.byId && e.sections.byId[t];
							return n ? r.a.createElement("div", {
								key: t
							}, r.a.createElement(g.a, null, n.title), n.rows ? n.rows.map(s) : null) : null
						});
					return e.hasError ? a : i && i.length > 0 ? r.a.createElement(r.a.Fragment, null, d) : r.a.createElement(N, null)
				}
		},
		"./src/reddit/components/Settings/Notifications/PushNotificationSettings/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				o = s("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				r = s("./src/reddit/selectors/user.ts"),
				d = s("./src/reddit/components/Settings/Notifications/NotificationToggles.tsx");
			const c = Object(a.c)({
					hasError: r.q,
					rows: r.Z,
					sections: r.ab
				}),
				l = Object(n.b)(c, e => ({
					fetchNotificationSettings: () => e(Object(i.a)(o.a.Push)),
					updateNotificationPreference: t => e(Object(i.b)(t))
				}))(d.a);
			t.default = l
		},
		"./src/reddit/components/Settings/Notifications/index.m.less": function(e, t, s) {
			e.exports = {
				LoadingSectionHeader: "_2W91N2EYmGXA3UspceNbT5",
				loadingSectionHeader: "_2W91N2EYmGXA3UspceNbT5",
				glimmer: "_1VqfnmhCxLKQ6Pb1zId6Ip",
				LoadingToggleWrapper: "_15AKXte165gaPlZY_U49q_",
				loadingToggleWrapper: "_15AKXte165gaPlZY_U49q_",
				LoadingToggleName: "yryytG_EcZg8aB9Ed6HHd",
				loadingToggleName: "yryytG_EcZg8aB9Ed6HHd",
				LoadingToggleButton: "_1JeAoaBUBb6WWqaa03mTST",
				loadingToggleButton: "_1JeAoaBUBb6WWqaa03mTST",
				errorMessage: "_3wk25QxRP-Wk1zL9JaaNAH"
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PushNotificationSettings.d9be77385e5ac3f4b630.js.map