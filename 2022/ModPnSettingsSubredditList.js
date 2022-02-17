// https://www.redditstatic.com/desktop2x/ModPnSettingsSubredditList.e2830529fd3b5d293f9b.js
// Retrieved at 2/16/2022, 7:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModPnSettingsSubredditList"], {
		"./src/reddit/components/Settings/Notifications/LoadingSection.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var i = n("./node_modules/lodash/times.js"),
				o = n.n(i),
				s = n("./node_modules/react/index.js"),
				d = n.n(s),
				a = n("./src/reddit/components/Settings/Notifications/index.m.less"),
				c = n.n(a);
			const r = ({
				rowsCount: e
			}) => d.a.createElement("div", {
				role: "alert",
				"aria-busy": "true"
			}, d.a.createElement("div", {
				className: c.a.loadingSectionHeader
			}), o()(e, e => d.a.createElement("div", {
				className: c.a.loadingToggleWrapper,
				key: e
			}, d.a.createElement("span", {
				className: c.a.loadingToggleName
			}), d.a.createElement("span", {
				className: c.a.loadingToggleButton
			}))))
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
				d = n("./src/reddit/actions/moderatingSubreddits.ts"),
				a = n("./src/reddit/components/Settings/Notifications/LoadingSection.tsx"),
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
					n(Object(d.b)())
				}, [n]), Object(i.useEffect)(() => {
					m.length > 0 && S(!1)
				}, [m]), t ? u ? o.a.createElement(a.a, {
					rowsCount: 5
				}) : o.a.createElement(o.a.Fragment, null, m.map(e => o.a.createElement("div", {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModPnSettingsSubredditList.e2830529fd3b5d293f9b.js.map