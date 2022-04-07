// https://www.redditstatic.com/desktop2x/ModPnSettingsSubredditList.21f65e594e255cbf631b.js
// Retrieved at 4/7/2022, 1:00:04 PM by Reddit Dataminer v1.0.0
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
		"./src/reddit/components/Settings/Notifications/LoadingSection.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var i = n("./node_modules/lodash/times.js"),
				o = n.n(i),
				s = n("./node_modules/react/index.js"),
				d = n.n(s),
				a = n("./src/reddit/components/Settings/Notifications/index.m.less"),
				r = n.n(a);
			const c = e => {
				let {
					rowsCount: t
				} = e;
				return d.a.createElement("div", {
					role: "alert",
					"aria-busy": "true"
				}, d.a.createElement("div", {
					className: r.a.loadingSectionHeader
				}), o()(t, e => d.a.createElement("div", {
					className: r.a.loadingToggleWrapper,
					key: e
				}, d.a.createElement("span", {
					className: r.a.loadingToggleName
				}), d.a.createElement("span", {
					className: r.a.loadingToggleButton
				}))))
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
				return g
			}));
			var i = n("./node_modules/react/index.js"),
				o = n.n(i),
				s = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/reddit/actions/moderatingSubreddits.ts"),
				a = n("./src/reddit/components/Settings/Notifications/LoadingSection.tsx"),
				r = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				c = n("./src/reddit/components/SubredditIcon/index.tsx"),
				l = n("./src/reddit/selectors/user.ts"),
				m = n("./src/reddit/components/Settings/Notifications/ModPnSettingsSubredditList/index.m.less"),
				u = n.n(m);

			function g(e) {
				const {
					handleModPnSubredditClick: t
				} = e, n = Object(s.d)(), m = Object(s.e)(l.j), [g, _] = Object(i.useState)(!0);
				return Object(i.useEffect)(() => {
					n(Object(d.b)())
				}, [n]), Object(i.useEffect)(() => {
					m.length > 0 && _(!1)
				}, [m]), t ? g ? o.a.createElement(a.a, {
					rowsCount: 5
				}) : o.a.createElement(o.a.Fragment, null, m.map(e => o.a.createElement("div", {
					className: u.a.ModPnSettingLink,
					key: e.id
				}, o.a.createElement(c.b, {
					iconUrl: e.communityIcon,
					className: u.a.CommunityIcon
				}), o.a.createElement(r.a, {
					className: u.a.ActionLinkSetting,
					label: e.displayText,
					onClick: () => t(e.id, e.name),
					color: "none"
				})))) : null
			}
		},
		"./src/reddit/components/Settings/Notifications/index.m.less": function(e, t, n) {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModPnSettingsSubredditList.21f65e594e255cbf631b.js.map