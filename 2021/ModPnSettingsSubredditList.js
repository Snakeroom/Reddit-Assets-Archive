// https://www.redditstatic.com/desktop2x/ModPnSettingsSubredditList.ebb9681ddfbd819204a2.js
// Retrieved at 10/12/2021, 12:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModPnSettingsSubredditList"], {
		"./node_modules/lodash/times.js": function(e, t, n) {
			var i = n("./node_modules/lodash/_baseTimes.js"),
				o = n("./node_modules/lodash/_castFunction.js"),
				s = n("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				d = 4294967295,
				r = Math.min;
			e.exports = function(e, t) {
				if ((e = s(e)) < 1 || e > a) return [];
				var n = d,
					c = r(e, d);
				t = o(t), e -= d;
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
				return N
			}));
			var i = n("./node_modules/react/index.js"),
				o = n.n(i),
				s = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/actions/moderatingSubreddits.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				r = n("./node_modules/lodash/times.js"),
				c = n.n(r),
				l = n("./src/reddit/components/Settings/Notifications/LoadingState/index.m.less"),
				m = n.n(l);
			const g = d.a.div("LoadingSectionHeader", m.a),
				u = d.a.div("LoadingToggleWrapper", m.a),
				_ = d.a.span("LoadingToggleName", m.a),
				S = d.a.span("LoadingToggleButton", m.a);
			var L = () => o.a.createElement("div", {
					role: "alert",
					"aria-busy": "true"
				}, o.a.createElement(g, null), c()(5, e => o.a.createElement(u, {
					key: e
				}, o.a.createElement(_, null), o.a.createElement(S, null)))),
				p = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				f = n("./src/reddit/components/SubredditIcon/index.tsx"),
				b = n("./src/reddit/constants/experiments.ts"),
				k = n("./src/reddit/hooks/useExperimentVariant.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/components/Settings/Notifications/ModPnSettingsSubredditList/index.m.less"),
				E = n.n(O);

			function N(e) {
				return Object(k.a)(b.nd) !== b.rd.Enabled ? null : o.a.createElement(D, e)
			}

			function D(e) {
				const {
					handleModPnSubredditClick: t
				} = e, n = Object(s.d)(), d = Object(s.e)(x.j), [r, c] = Object(i.useState)(!0);
				return Object(i.useEffect)(() => {
					n(Object(a.b)())
				}, [n]), Object(i.useEffect)(() => {
					d.length > 0 && c(!1)
				}, [d]), t ? r ? o.a.createElement(L, null) : o.a.createElement(o.a.Fragment, null, d.map(e => o.a.createElement("div", {
					className: E.a.ModPnSettingLink,
					key: e.id
				}, o.a.createElement(f.b, {
					iconUrl: e.communityIcon,
					className: E.a.CommunityIcon
				}), o.a.createElement(p.a, {
					className: E.a.ActionLinkSetting,
					label: e.displayText,
					onClick: () => t(e.id, e.name),
					color: "none"
				})))) : null
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModPnSettingsSubredditList.ebb9681ddfbd819204a2.js.map