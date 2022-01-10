// https://www.redditstatic.com/desktop2x/ModPnSettingsSubredditList.6885f55c8c365cff2020.js
// Retrieved at 1/10/2022, 3:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModPnSettingsSubredditList"], {
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
			var i = n("./node_modules/react/index.js"),
				o = n.n(i),
				s = n("./src/lib/lessComponent.tsx"),
				a = n("./node_modules/lodash/times.js"),
				d = n.n(a),
				c = n("./src/reddit/components/Settings/Notifications/LoadingState/index.m.less"),
				r = n.n(c);
			const l = s.a.div("LoadingSectionHeader", r.a),
				m = s.a.div("LoadingToggleWrapper", r.a),
				g = s.a.span("LoadingToggleName", r.a),
				u = s.a.span("LoadingToggleButton", r.a);
			t.a = () => o.a.createElement("div", {
				role: "alert",
				"aria-busy": "true"
			}, o.a.createElement(l, null), d()(5, e => o.a.createElement(m, {
				key: e
			}, o.a.createElement(g, null), o.a.createElement(u, null))))
		},
		"./src/reddit/components/Settings/Notifications/ModPnSettingsSubredditList/index.m.less": function(e, t, n) {
			e.exports = {
				ModPnSettingLink: "BkS1DG8rcfehaT1B9Yiw",
				modPnSettingLink: "BkS1DG8rcfehaT1B9Yiw",
				CommunityIcon: "cz5OiRKo46pds7fBzm4_k",
				communityIcon: "cz5OiRKo46pds7fBzm4_k",
				ActionLinkSetting: "_10O2u7-Ik_7Qw8-mqlNngq",
				actionLinkSetting: "_10O2u7-Ik_7Qw8-mqlNngq"
			}
		},
		"./src/reddit/components/Settings/Notifications/ModPnSettingsSubredditList/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "default", (function() {
				return u
			}));
			var i = n("./node_modules/react/index.js"),
				o = n.n(i),
				s = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/actions/moderatingSubreddits.ts"),
				d = n("./src/reddit/components/Settings/Notifications/LoadingState/index.tsx"),
				c = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				r = n("./src/reddit/components/SubredditIcon/index.tsx"),
				l = n("./src/reddit/selectors/user.ts"),
				m = n("./src/reddit/components/Settings/Notifications/ModPnSettingsSubredditList/index.m.less"),
				g = n.n(m);

			function u(e) {
				const {
					handleModPnSubredditClick: t
				} = e, n = Object(s.d)(), m = Object(s.e)(l.j), [u, S] = Object(i.useState)(!0);
				return Object(i.useEffect)(() => {
					n(Object(a.b)())
				}, [n]), Object(i.useEffect)(() => {
					m.length > 0 && S(!1)
				}, [m]), t ? u ? o.a.createElement(d.a, null) : o.a.createElement(o.a.Fragment, null, m.map(e => o.a.createElement("div", {
					className: g.a.ModPnSettingLink,
					key: e.id
				}, o.a.createElement(r.b, {
					iconUrl: e.communityIcon,
					className: g.a.CommunityIcon
				}), o.a.createElement(c.a, {
					className: g.a.ActionLinkSetting,
					label: e.displayText,
					onClick: () => t(e.id, e.name),
					color: "none"
				})))) : null
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModPnSettingsSubredditList.6885f55c8c365cff2020.js.map