// https://www.redditstatic.com/desktop2x/PushNotificationSettings.30ab24c30b51e92b2c5a.js
// Retrieved at 3/1/2021, 12:20:19 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PushNotificationSettings"], {
		"./node_modules/lodash/times.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseTimes.js"),
				o = n("./node_modules/lodash/_castFunction.js"),
				i = n("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				r = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = i(e)) < 1 || e > a) return [];
				var n = r,
					d = c(e, r);
				t = o(t), e -= r;
				for (var l = s(d, t); ++n < e;) t(n);
				return l
			}
		},
		"./src/graphql/operations/NotificationSettingsLayoutByChannel.json": function(e) {
			e.exports = JSON.parse('{"id":"d03522f8a8d4"}')
		},
		"./src/graphql/operations/UpdateNotificationPreferences.json": function(e) {
			e.exports = JSON.parse('{"id":"129085be0500"}')
		},
		"./src/reddit/actions/notificationSettingsLayout/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "c", (function() {
				return _
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/notificationSettingsLayout/constants.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				r = n("./src/reddit/endpoints/notificationSettingsLayoutByChannelEndpoint.ts"),
				c = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				d = n("./src/reddit/models/Toast/index.ts");
			const l = Object(o.a)(i.c),
				u = Object(o.a)(i.b),
				g = Object(o.a)(i.a),
				f = Object(o.a)(i.f),
				b = Object(o.a)(i.e),
				m = Object(o.a)(i.d),
				p = e => async (t, n, {
					gqlContext: s
				}) => {
					e === c.a.Push ? t(f()) : t(l()), await async function(e, t, n) {
						const s = await Object(r.a)(e(), {
							channel: t
						});
						if (s.ok && s.body) {
							const e = function(e) {
								const t = e && e.data,
									n = t && t.notificationSettingsLayoutByChannel,
									s = n && n.sections;
								if (s) return function(e) {
									const t = {},
										n = [];
									let s = {},
										o = [];
									const i = e => {
										const {
											rowIds: i,
											rowsCollection: a
										} = function(e) {
											const t = [],
												n = {};
											if (e.rows)
												for (let s = 0; s < e.rows.length; s++) {
													const o = e.rows[s],
														i = o.messageType;
													t.push(i), n[i] = o
												}
											return {
												rowsCollection: n,
												rowIds: t
											}
										}(e);
										s = {
											...s,
											...a
										}, o = [...o, ...i];
										const r = e.id;
										n.push(r), t[r] = {
											...e,
											rows: i
										}
									};
									for (let a = 0; a < e.length; a++) i(e[a]);
									return {
										sections: {
											byId: t,
											allIds: n
										},
										rows: {
											byId: s,
											allIds: o
										}
									}
								}(s)
							}(s.body);
							t === c.a.Push ? n(b(e)) : n(u(e))
						} else t === c.a.Push ? n(m({
							error: s.error
						})) : n(g({
							error: s.error
						}))
					}(s, e, t)
				};
			const y = Object(o.a)(i.g),
				h = e => async (t, n, {
					gqlContext: o
				}) => {
					(await Object(r.b)(o(), e)).ok ? (_(t, e), function(e) {
						e(Object(a.e)({
							kind: d.b.SuccessCommunity,
							text: s.fbt._("Changes saved", null, {
								hk: "UBoVR"
							})
						}))
					}(t)) : function(e) {
						e(Object(a.e)({
							kind: d.b.Error,
							text: s.fbt._("We had some issues saving your changes. Please try again.", null, {
								hk: "1OvQi6"
							})
						}))
					}(t)
				};

			function _(e, t) {
				e(y({
					isEnabled: t.isEnabled,
					messageType: t.messageType
				}))
			}
		},
		"./src/reddit/components/Settings/Notifications/NotificationToggles.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/times.js"),
				i = n.n(o),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/helpers/trackers/notifications.ts"),
				l = n("./src/reddit/hooks/useTracking.ts"),
				u = n("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				g = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				f = n("./src/reddit/components/Settings/Notifications/index.m.less"),
				b = n.n(f);
			const m = c.a.div("LoadingSectionHeader", b.a),
				p = c.a.div("LoadingToggleWrapper", b.a),
				y = c.a.span("LoadingToggleName", b.a),
				h = c.a.span("LoadingToggleButton", b.a),
				_ = () => r.a.createElement("div", {
					role: "alert",
					"aria-busy": "true"
				}, r.a.createElement(m, null), i()(5, e => r.a.createElement(p, {
					key: e
				}, r.a.createElement(y, null), r.a.createElement(h, null)))),
				E = e => {
					Object(a.useEffect)(() => {
						e.fetchNotificationSettings()
					}, []);
					const t = Object(l.a)(),
						n = (n, s, o) => {
							const i = e.rows && e.rows.byId[n];
							return i ? r.a.createElement(g.o, {
								disabled: e.disabled,
								forceOn: i.isEnabled && e.disabled,
								key: i.displayName,
								label: i.displayName,
								last: o.length === s + 1,
								on: i.isEnabled,
								onClick: () => (n => {
									if (n.messageType) {
										const s = e.isEmailSettings;
										t(Object(d.f)(!n.isEnabled, n.messageType, s))
									}
									e.updateNotificationPreference({
										isEnabled: !n.isEnabled,
										messageType: n.messageType
									})
								})(i),
								subtext: i.description
							}) : null
						},
						o = r.a.createElement("span", {
							className: "errorMessage",
							"data-testid": "error-message"
						}, s.fbt._("There was an issue fetching your notification settings. Please try again later.", null, {
							hk: "4pmBD4"
						})),
						i = e.sections && e.sections.allIds,
						c = i && i.map(t => {
							const s = e.sections && e.sections.byId && e.sections.byId[t];
							return s ? r.a.createElement("div", {
								key: t
							}, r.a.createElement(u.a, null, s.title), s.rows ? s.rows.map(n) : null) : null
						});
					return e.hasError ? o : i && i.length > 0 ? r.a.createElement(r.a.Fragment, null, c) : r.a.createElement(_, null)
				}
		},
		"./src/reddit/components/Settings/Notifications/PushNotificationSettings/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				a = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				r = n("./src/reddit/selectors/user.ts"),
				c = n("./src/reddit/components/Settings/Notifications/NotificationToggles.tsx");
			const d = Object(o.c)({
					hasError: r.q,
					rows: r.Y,
					sections: r.Z
				}),
				l = Object(s.b)(d, e => ({
					fetchNotificationSettings: () => e(Object(i.a)(a.a.Push)),
					updateNotificationPreference: t => e(Object(i.b)(t))
				}))(c.a);
			t.default = l
		},
		"./src/reddit/components/Settings/Notifications/index.m.less": function(e, t, n) {
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
		},
		"./src/reddit/endpoints/notificationSettingsLayoutByChannelEndpoint.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return r
			}));
			var s = n("./src/graphql/operations/NotificationSettingsLayoutByChannel.json"),
				o = n("./src/graphql/operations/UpdateNotificationPreferences.json"),
				i = n("./src/lib/makeGqlRequest/index.ts");
			const a = (e, t) => Object(i.a)(e, {
					...s,
					variables: t
				}),
				r = (e, t) => Object(i.a)(e, {
					...o,
					variables: {
						input: {
							preferences: [t]
						}
					}
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PushNotificationSettings.30ab24c30b51e92b2c5a.js.map