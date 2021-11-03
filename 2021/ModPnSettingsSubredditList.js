// https://www.redditstatic.com/desktop2x/ModPnSettingsSubredditList.a071c02c9aee43fb7d39.js
// Retrieved at 11/3/2021, 2:30:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModPnSettingsSubredditList"], {
		"./node_modules/lodash/times.js": function(e, t, n) {
			var i = n("./node_modules/lodash/_baseTimes.js"),
				o = n("./node_modules/lodash/_castFunction.js"),
				s = n("./node_modules/lodash/toInteger.js"),
				d = 9007199254740991,
				a = 4294967295,
				r = Math.min;
			e.exports = function(e, t) {
				if ((e = s(e)) < 1 || e > d) return [];
				var n = a,
					c = r(e, a);
				t = o(t), e -= a;
				for (var l = i(c, t); ++n < e;) t(n);
				return l
			}
		},
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
				d = n("./node_modules/lodash/times.js"),
				a = n.n(d),
				r = n("./src/reddit/components/Settings/Notifications/LoadingState/index.m.less"),
				c = n.n(r);
			const l = s.a.div("LoadingSectionHeader", c.a),
				m = s.a.div("LoadingToggleWrapper", c.a),
				g = s.a.span("LoadingToggleName", c.a),
				u = s.a.span("LoadingToggleButton", c.a);
			t.a = () => o.a.createElement("div", {
				role: "alert",
				"aria-busy": "true"
			}, o.a.createElement(l, null), a()(5, e => o.a.createElement(m, {
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
				return _
			}));
			var i = n("./node_modules/react/index.js"),
				o = n.n(i),
				s = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/reddit/actions/moderatingSubreddits.ts"),
				a = n("./src/reddit/components/Settings/Notifications/LoadingState/index.tsx"),
				r = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				c = n("./src/reddit/components/SubredditIcon/index.tsx"),
				l = n("./src/reddit/constants/experiments.ts"),
				m = n("./src/reddit/hooks/useExperimentVariant.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				u = n("./src/reddit/components/Settings/Notifications/ModPnSettingsSubredditList/index.m.less"),
				S = n.n(u);

			function _(e) {
				return Object(m.a)(l.td) !== l.xd.Enabled ? null : o.a.createElement(L, e)
			}

			function L(e) {
				const {
					handleModPnSubredditClick: t
				} = e, n = Object(s.d)(), l = Object(s.e)(g.j), [m, u] = Object(i.useState)(!0);
				return Object(i.useEffect)(() => {
					n(Object(d.b)())
				}, [n]), Object(i.useEffect)(() => {
					l.length > 0 && u(!1)
				}, [l]), t ? m ? o.a.createElement(a.a, null) : o.a.createElement(o.a.Fragment, null, l.map(e => o.a.createElement("div", {
					className: S.a.ModPnSettingLink,
					key: e.id
				}, o.a.createElement(c.b, {
					iconUrl: e.communityIcon,
					className: S.a.CommunityIcon
				}), o.a.createElement(r.a, {
					className: S.a.ActionLinkSetting,
					label: e.displayText,
					onClick: () => t(e.id, e.name),
					color: "none"
				})))) : null
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModPnSettingsSubredditList.a071c02c9aee43fb7d39.js.map