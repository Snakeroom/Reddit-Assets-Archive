// https://www.redditstatic.com/desktop2x/PushNotificationSettings.fa29511550a3ac2e79f4.js
// Retrieved at 11/5/2020, 6:00:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PushNotificationSettings"], {
		"./node_modules/lodash/times.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseTimes.js"),
				a = s("./node_modules/lodash/_castFunction.js"),
				o = s("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				r = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = o(e)) < 1 || e > i) return [];
				var s = r,
					l = c(e, r);
				t = a(t), e -= r;
				for (var d = n(l, t); ++s < e;) t(s);
				return d
			}
		},
		"./src/graphql/operations/NotificationSettingsLayoutByChannel.json": function(e) {
			e.exports = JSON.parse('{"id":"d03522f8a8d4"}')
		},
		"./src/graphql/operations/UpdateNotificationPreferences.json": function(e) {
			e.exports = JSON.parse('{"id":"129085be0500"}')
		},
		"./src/reddit/components/Settings/PushNotificationSettings/index.m.less": function(e, t, s) {
			e.exports = {
				LoadingSectionHeader: "_3tBGaQ2u97VaFBDXPX3AjQ",
				loadingSectionHeader: "_3tBGaQ2u97VaFBDXPX3AjQ",
				glimmer: "_3FZpQ5BWgijvPIP6NbqjUp",
				LoadingToggleWrapper: "_2iXY4D6JAlWa8T35C4JVfq",
				loadingToggleWrapper: "_2iXY4D6JAlWa8T35C4JVfq",
				LoadingToggleName: "_1h2l04XjK5Kx2AdQbslTef",
				loadingToggleName: "_1h2l04XjK5Kx2AdQbslTef",
				LoadingToggleButton: "_1ALK1lbPXViKty12fDwxPf",
				loadingToggleButton: "_1ALK1lbPXViKty12fDwxPf",
				errorMessage: "_3e_QQ5eeFW9zjfVpab5ZPH"
			}
		},
		"./src/reddit/components/Settings/PushNotificationSettings/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				c = s("./src/lib/makeActionCreator/index.ts"),
				l = s("./src/reddit/actions/notificationSettingsLayout/constants.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				g = s("./src/graphql/operations/NotificationSettingsLayoutByChannel.json"),
				u = s("./src/graphql/operations/UpdateNotificationPreferences.json"),
				f = s("./src/lib/makeGqlRequest/index.ts");
			const b = (e, t) => Object(f.a)(e, Object.assign(Object.assign({}, g), {
				variables: t
			}));
			var m = s("./src/reddit/models/Toast/index.ts");
			const p = Object(c.a)(l.c),
				h = Object(c.a)(l.b),
				j = Object(c.a)(l.a),
				y = e => async (t, s, n) => {
					let {
						gqlContext: a
					} = n;
					t(p()), await async function(e, t, s) {
						const n = await b(e(), {
							channel: t
						});
						if (n.ok && n.body) {
							const e = function(e) {
								const t = e && e.data,
									s = t && t.notificationSettingsLayoutByChannel,
									n = s && s.sections;
								if (n) return function(e) {
									const t = {},
										s = [];
									let n = {},
										a = [];
									const o = e => {
										const {
											rowIds: o,
											rowsCollection: i
										} = function(e) {
											const t = [],
												s = {};
											if (e.rows)
												for (let n = 0; n < e.rows.length; n++) {
													const a = e.rows[n],
														o = a.messageType;
													t.push(o), s[o] = a
												}
											return {
												rowsCollection: s,
												rowIds: t
											}
										}(e);
										n = Object.assign(Object.assign({}, n), i), a = [...a, ...o];
										const r = e.id;
										s.push(r), t[r] = Object.assign(Object.assign({}, e), {
											rows: o
										})
									};
									for (let i = 0; i < e.length; i++) o(e[i]);
									return {
										sections: {
											byId: t,
											allIds: s
										},
										rows: {
											byId: n,
											allIds: a
										}
									}
								}(n)
							}(n.body);
							s(h(e))
						} else s(j({
							error: n.error
						}))
					}(a, e, t)
				};
			const _ = Object(c.a)(l.d),
				E = e => async (t, s, n) => {
					let {
						gqlContext: a
					} = n;
					(await ((e, t) => Object(f.a)(e, Object.assign(Object.assign({}, u), {
						variables: {
							input: {
								preferences: [t]
							}
						}
					})))(a(), e)).ok ? (function(e, t) {
						e(_({
							isEnabled: t.isEnabled,
							messageType: t.messageType
						}))
					}(t, e), function(e) {
						e(Object(d.e)({
							kind: m.b.SuccessCommunity,
							text: r.fbt._("Changes saved", null, {
								hk: "UBoVR"
							})
						}))
					}(t)) : function(e) {
						e(Object(d.e)({
							kind: m.b.Error,
							text: r.fbt._("We had some issues saving your changes. Please try again.", null, {
								hk: "1OvQi6"
							})
						}))
					}(t)
				};
			var O = s("./node_modules/lodash/times.js"),
				x = s.n(O),
				S = s("./src/lib/lessComponent.tsx"),
				w = s("./src/reddit/helpers/trackers/notifications.ts"),
				T = s("./src/reddit/hooks/useTracking.ts"),
				N = s("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				P = s("./src/reddit/components/Settings/shared/Widgets.tsx"),
				L = s("./src/reddit/components/Settings/PushNotificationSettings/index.m.less"),
				v = s.n(L);
			const k = S.a.div("LoadingSectionHeader", v.a),
				A = S.a.div("LoadingToggleWrapper", v.a),
				C = S.a.span("LoadingToggleName", v.a),
				B = S.a.span("LoadingToggleButton", v.a),
				D = () => a.a.createElement("div", {
					role: "alert",
					"aria-busy": "true"
				}, a.a.createElement(k, null), x()(5, e => a.a.createElement(A, {
					key: e
				}, a.a.createElement(C, null), a.a.createElement(B, null)))),
				I = e => {
					Object(n.useEffect)(() => {
						e.fetchNotificationSettings()
					}, []);
					const t = Object(T.a)(),
						s = (s, n, o) => {
							const i = e.rows && e.rows.byId[s];
							return i ? a.a.createElement(P.o, {
								key: i.displayName,
								label: i.displayName,
								last: o.length === n + 1,
								on: i.isEnabled,
								onClick: () => (s => {
									s.messageType && t(Object(w.e)(!s.isEnabled, s.messageType)), e.updateNotificationPreference({
										isEnabled: !s.isEnabled,
										messageType: s.messageType
									})
								})(i),
								subtext: i.description
							}) : null
						},
						o = a.a.createElement("span", {
							className: "errorMessage",
							"data-testid": "error-message"
						}, r.fbt._("There was an issue fetching your notification settings. Please try again later.", null, {
							hk: "4pmBD4"
						})),
						i = e.sections && e.sections.allIds,
						c = i && i.map(t => {
							const n = e.sections && e.sections.byId && e.sections.byId[t];
							return n ? a.a.createElement("div", {
								key: t
							}, a.a.createElement(N.a, null, n.title), n.rows ? n.rows.map(s) : null) : null
						});
					return e.hasError ? o : i && i.length > 0 ? a.a.createElement(a.a.Fragment, null, c) : a.a.createElement(D, null)
				};
			var q;
			! function(e) {
				e.Email = "EMAIL", e.Push = "PUSH"
			}(q || (q = {}));
			var K = s("./src/reddit/selectors/user.ts");
			const Q = Object(i.c)({
					hasError: K.p,
					rows: K.V,
					sections: K.W
				}),
				W = Object(o.b)(Q, e => ({
					fetchNotificationSettings: () => e(y(q.Push)),
					updateNotificationPreference: t => e(E(t))
				}))(e => a.a.createElement(I, e));
			t.default = W
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PushNotificationSettings.fa29511550a3ac2e79f4.js.map