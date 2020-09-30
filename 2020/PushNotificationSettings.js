// https://www.redditstatic.com/desktop2x/PushNotificationSettings.8911f03436f5949ad35e.js
// Retrieved at 9/30/2020, 5:50:09 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PushNotificationSettings"], {
		"./src/graphql/operations/NotificationSettingsLayoutByChannel.json": function(e) {
			e.exports = JSON.parse('{"id":"d03522f8a8d4"}')
		},
		"./src/graphql/operations/UpdateNotificationPreferences.json": function(e) {
			e.exports = JSON.parse('{"id":"129085be0500"}')
		},
		"./src/reddit/components/Settings/PushNotificationSettings/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				l = s("./src/reddit/actions/notificationSettingsLayout/constants.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				u = s("./src/graphql/operations/NotificationSettingsLayoutByChannel.json"),
				b = s("./src/graphql/operations/UpdateNotificationPreferences.json"),
				f = s("./src/lib/makeGqlRequest/index.ts");
			const g = (e, t) => Object(f.a)(e, Object.assign(Object.assign({}, u), {
				variables: t
			}));
			var p = s("./src/reddit/models/Toast/index.ts");
			const y = Object(r.a)(l.c),
				h = Object(r.a)(l.b),
				j = Object(r.a)(l.a),
				m = e => async (t, s, n) => {
					let {
						gqlContext: i
					} = n;
					t(y());
					const o = await async function(e, t) {
						const s = await g(e(), {
							channel: t
						});
						if (s.ok && s.body) {
							return function(e) {
								const t = e && e.data,
									s = t && t.notificationSettingsLayoutByChannel;
								return function(e) {
									const t = {},
										s = [];
									let n = {},
										i = [];
									const o = e => {
										const {
											rowIds: o,
											rowsCollection: a
										} = function(e) {
											const t = [],
												s = {};
											if (e.rows)
												for (let n = 0; n < e.rows.length; n++) {
													const i = e.rows[n],
														o = i.messageType;
													t.push(o), s[o] = i
												}
											return {
												rowsCollection: s,
												rowIds: t
											}
										}(e);
										n = Object.assign(Object.assign({}, n), a), i = [...i, ...o];
										const c = e.id;
										s.push(c), t[c] = Object.assign(Object.assign({}, e), {
											rows: o
										})
									};
									for (let a = 0; a < e.length; a++) o(e[a]);
									return {
										sections: {
											byId: t,
											allIds: s
										},
										rows: {
											byId: n,
											allIds: i
										}
									}
								}(s && s.sections)
							}(s.body)
						}
					}(i, e);
					t(o ? h(o) : j())
				};
			const O = Object(r.a)(l.d),
				w = e => async (t, s, n) => {
					let {
						gqlContext: i
					} = n;
					(await ((e, t) => Object(f.a)(e, Object.assign(Object.assign({}, b), {
						variables: {
							input: {
								preferences: [t]
							}
						}
					})))(i(), e)).ok ? (function(e, t) {
						e(O({
							isEnabled: t.isEnabled,
							messageType: t.messageType
						}))
					}(t, e), function(e) {
						e(Object(d.e)({
							kind: p.b.SuccessCommunity,
							text: c.fbt._("Changes saved", null, {
								hk: "UBoVR"
							})
						}))
					}(t)) : function(e) {
						e(Object(d.e)({
							kind: p.b.Error,
							text: c.fbt._("We had some issues saving your changes. Please try again.", null, {
								hk: "1OvQi6"
							})
						}))
					}(t)
				};
			var E = s("./src/reddit/helpers/trackers/notifications.ts"),
				x = s("./src/reddit/hooks/useTracking.ts"),
				N = s("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				S = s("./src/reddit/components/Settings/shared/Widgets.tsx");
			const _ = e => {
				Object(n.useEffect)(() => {
					e.fetchNotificationSettings()
				}, []);
				const t = Object(x.a)(),
					s = (s, n, o) => {
						const a = e.rows && e.rows.byId[s];
						return a ? i.a.createElement(S.o, {
							key: a.displayName,
							label: a.displayName,
							last: o.length === n + 1,
							on: a.isEnabled,
							onClick: () => (s => {
								s.analyticsNoun && t(Object(E.e)(s.analyticsNoun, !s.isEnabled)), e.updateNotificationPreference({
									isEnabled: !s.isEnabled,
									messageType: s.messageType
								})
							})(a),
							subtext: a.description
						}) : null
					},
					o = e.sections && e.sections.allIds;
				return i.a.createElement(i.a.Fragment, null, o ? o.map(t => {
					const n = e.sections && e.sections.byId && e.sections.byId[t];
					return n ? i.a.createElement("div", {
						key: t
					}, i.a.createElement(N.a, null, n.title), n.rows ? n.rows.map(s) : null) : null
				}) : null)
			};
			var k;
			! function(e) {
				e.Email = "EMAIL", e.Push = "PUSH"
			}(k || (k = {}));
			var C = s("./src/reddit/selectors/user.ts");
			const v = Object(a.c)({
					rows: C.U,
					sections: C.V
				}),
				I = Object(o.b)(v, e => ({
					fetchNotificationSettings: () => e(m(k.Push)),
					updateNotificationPreference: t => e(w(t))
				}))(e => i.a.createElement(_, e));
			t.default = I
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PushNotificationSettings.8911f03436f5949ad35e.js.map