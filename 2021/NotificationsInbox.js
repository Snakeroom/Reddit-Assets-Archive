// https://www.redditstatic.com/desktop2x/NotificationsInbox.de3289ccf5361011bd34.js
// Retrieved at 3/8/2021, 3:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NotificationsInbox"], {
		"./src/graphql/operations/DeleteInboxNotifications.json": function(e) {
			e.exports = JSON.parse('{"id":"ce2deb9deef7"}')
		},
		"./src/graphql/operations/NotificationInboxFeed.json": function(e) {
			e.exports = JSON.parse('{"id":"94f052872d00"}')
		},
		"./src/graphql/operations/NotificationSettingsLayoutByChannel.json": function(e) {
			e.exports = JSON.parse('{"id":"d03522f8a8d4"}')
		},
		"./src/graphql/operations/UpdateInboxActivitySeenState.json": function(e) {
			e.exports = JSON.parse('{"id":"85d656894a08"}')
		},
		"./src/graphql/operations/UpdateNotificationPreferences.json": function(e) {
			e.exports = JSON.parse('{"id":"129085be0500"}')
		},
		"./src/reddit/actions/notificationSettingsLayout/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return O
			}));
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/notificationSettingsLayout/constants.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				r = n("./src/reddit/endpoints/notificationSettingsLayoutByChannelEndpoint.ts"),
				c = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				d = n("./src/reddit/models/Toast/index.ts");
			const l = Object(s.a)(a.c),
				u = Object(s.a)(a.b),
				b = Object(s.a)(a.a),
				m = Object(s.a)(a.f),
				f = Object(s.a)(a.e),
				p = Object(s.a)(a.d),
				g = e => async (t, n, {
					gqlContext: i
				}) => {
					e === c.a.Push ? t(m()) : t(l()), await async function(e, t, n) {
						const i = await Object(r.a)(e(), {
							channel: t
						});
						if (i.ok && i.body) {
							const e = function(e) {
								const t = e && e.data,
									n = t && t.notificationSettingsLayoutByChannel,
									i = n && n.sections;
								if (i) return function(e) {
									const t = {},
										n = [];
									let i = {},
										s = [];
									const a = e => {
										const {
											rowIds: a,
											rowsCollection: o
										} = function(e) {
											const t = [],
												n = {};
											if (e.rows)
												for (let i = 0; i < e.rows.length; i++) {
													const s = e.rows[i],
														a = s.messageType;
													t.push(a), n[a] = s
												}
											return {
												rowsCollection: n,
												rowIds: t
											}
										}(e);
										i = {
											...i,
											...o
										}, s = [...s, ...a];
										const r = e.id;
										n.push(r), t[r] = {
											...e,
											rows: a
										}
									};
									for (let o = 0; o < e.length; o++) a(e[o]);
									return {
										sections: {
											byId: t,
											allIds: n
										},
										rows: {
											byId: i,
											allIds: s
										}
									}
								}(i)
							}(i.body);
							t === c.a.Push ? n(f(e)) : n(u(e))
						} else t === c.a.Push ? n(p({
							error: i.error
						})) : n(b({
							error: i.error
						}))
					}(i, e, t)
				};
			const h = Object(s.a)(a.g),
				x = e => async (t, n, {
					gqlContext: s
				}) => {
					(await Object(r.b)(s(), e)).ok ? (O(t, e), function(e) {
						e(Object(o.e)({
							kind: d.b.SuccessCommunity,
							text: i.fbt._("Changes saved", null, {
								hk: "UBoVR"
							})
						}))
					}(t)) : function(e) {
						e(Object(o.e)({
							kind: d.b.Error,
							text: i.fbt._("We had some issues saving your changes. Please try again.", null, {
								hk: "1OvQi6"
							})
						}))
					}(t)
				};

			function O(e, t) {
				e(h({
					isEnabled: t.isEnabled,
					messageType: t.messageType
				}))
			}
		},
		"./src/reddit/actions/notificationsInbox/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return L
			})), n.d(t, "a", (function() {
				return F
			})), n.d(t, "e", (function() {
				return U
			})), n.d(t, "b", (function() {
				return B
			})), n.d(t, "c", (function() {
				return G
			})), n.d(t, "g", (function() {
				return q
			})), n.d(t, "h", (function() {
				return H
			})), n.d(t, "f", (function() {
				return W
			}));
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				o = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				r = n("./src/reddit/actions/notificationsInbox/constants.ts"),
				c = n("./src/reddit/actions/tabBadging.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/graphql/operations/DeleteInboxNotifications.json"),
				u = n("./src/lib/makeGqlRequest/index.ts");
			var b = n("./src/reddit/endpoints/notificationSettingsLayoutByChannelEndpoint.ts"),
				m = n("./src/graphql/operations/NotificationInboxFeed.json"),
				f = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				g = n("./src/lib/omitHeaders/index.ts"),
				h = n("./src/reddit/constants/headers.ts"),
				x = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var O;
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(O || (O = {}));
			var E = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				j = n("./src/graphql/operations/UpdateInboxActivitySeenState.json");
			var v = n("./src/reddit/models/Badge/index.ts"),
				y = n("./src/reddit/models/NotificationInbox/index.ts"),
				C = n("./src/reddit/models/Toast/index.ts"),
				_ = n("./src/reddit/selectors/appBadges.ts"),
				S = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				N = n("./src/reddit/selectors/notificationPrefs.ts"),
				k = n("./src/reddit/selectors/notificationsInbox.tsx");
			const I = Object(s.a)(r.d),
				T = Object(s.a)(r.b),
				P = Object(s.a)(r.a),
				L = e => async (t, n, {
					gqlContext: i
				}) => {
					const s = n(),
						a = Object(k.a)(s);
					t(I());
					const o = await ((e, t) => Object(u.a)(e, {
						...m,
						variables: t
					}))(i(), e);
					if (!o.ok) return void P({
						error: o.error
					});
					const r = o && o.body,
						c = w(r);
					if (null === a) {
						const e = Object(k.f)(s);
						t(R(c.nodes, e.length))
					}
					t(T(c))
				}, w = e => {
					const t = e && e.data,
						n = t && t.notificationInbox,
						i = n && n.elements,
						s = i && i.pageInfo;
					return {
						nodes: (i && i.edges).map(e => e.node),
						pageInfo: s
					}
				}, R = (e, t) => async (n, i) => {
					const s = i(),
						a = Object(k.a)(s),
						o = ((e, t) => {
							let n, i = 0;
							const s = new Date,
								a = s.getDate(),
								o = s.getMonth(),
								r = s.getFullYear();
							for (; i < e.length && !n;) {
								const s = e[i],
									c = new Date(s.sentAt),
									d = c.getDate(),
									l = c.getMonth(),
									u = c.getFullYear();
								if ((d !== a || l !== o || u !== r) && !n) {
									n = ((t || 0) + i).toString()
								} else i++
							}
							return n
						})(e, t);
					o && o !== a && n(A({
						index: o
					}))
				}, A = Object(s.a)(r.f), M = (Object(s.a)(r.g), Object(s.a)(r.e)), F = e => async (t, n, {
					gqlContext: s
				}) => {
					const a = [e];
					if ((await ((e, t) => Object(u.a)(e, {
							...l,
							variables: {
								input: t
							}
						}))(s(), {
							notificationIds: a
						})).ok) {
						t(M({
							id: e
						}));
						const s = Object(k.f)(n());
						t(R(s)), t(Object(d.e)(Object(d.d)(i.fbt._("Notification hidden", null, {
							hk: "1jfPqO"
						}), C.b.SuccessCommunityGreen)))
					} else t(Object(d.e)(Object(d.d)(i.fbt._("Failed to hide notification, please try again.", null, {
						hk: "fL7uB"
					}), C.b.Error)))
				}, U = (e, t) => async (n, s, {
					gqlContext: a
				}) => {
					if (!e) return;
					const o = s(),
						r = () => {
							const n = Object(S.e)(o),
								s = i.fbt._("Success! You won't see notifications from this community in the future.", null, {
									hk: "2tkhbk"
								});
							return n ? Object(d.e)(Object(d.d)(s, C.b.Undo, i.fbt._("Undo", null, {
								hk: "4zFGDk"
							}), ((e, t) => async (n, s, {
								gqlContext: a
							}) => {
								if (!e) return;
								(await Object(E.b)(a(), e, {
									isSubredditUpdatesInterestingPostEnabled: !0,
									isUpdateFromSubredditEnabled: !0
								})).ok ? (t && t(), n(Object(d.e)(Object(d.d)(i.fbt._("Success! Undone hiding notifications from this community.", null, {
									hk: "1na0NP"
								}), C.b.SuccessCommunityGreen)))) : n(Object(d.e)(Object(d.d)(i.fbt._("Failed to undo hiding notifications, please try again.", null, {
									hk: "4jo7Pf"
								}), C.b.Error)))
							})(e, t))) : Object(d.e)(Object(d.d)(s, C.b.SuccessCommunityGreen))
						};
					(await Object(E.b)(a(), e, {
						isSubredditUpdatesInterestingPostEnabled: !1,
						isUpdateFromSubredditEnabled: !1
					})).ok ? n(r()) : n(Object(d.e)(Object(d.d)(i.fbt._("Failed to hide notifications, please try again.", null, {
						hk: "KEGcB"
					}), C.b.Error)))
				}, B = (e, t) => async (n, s, {
					gqlContext: a
				}) => {
					if (!e) return;
					const r = s(),
						c = () => {
							const n = Object(S.e)(r),
								s = i.fbt._("Success! You won't see notifications like this in the future.", null, {
									hk: "1ijcqU"
								});
							return n ? Object(d.e)(Object(d.d)(s, C.b.Undo, i.fbt._("Undo", null, {
								hk: "4zFGDk"
							}), ((e, t) => async (n, s, {
								gqlContext: a
							}) => {
								(await Object(b.b)(a(), {
									isEnabled: !0,
									messageType: e
								})).ok ? (Object(N.c)(s(), e) && Object(o.c)(n, {
									isEnabled: !1,
									messageType: e
								}), t && t(), n(Object(d.e)(Object(d.d)(i.fbt._("Success! Notifications like this were turned on.", null, {
									hk: "2krVMd"
								}), C.b.SuccessCommunityGreen)))) : n(Object(d.e)(Object(d.d)(i.fbt._("Failed to turn on these types of notifications.", null, {
									hk: "1dBLEQ"
								}), C.b.Error)))
							})(e, t))) : Object(d.e)(Object(d.d)(s, C.b.SuccessCommunityGreen))
						};
					(await Object(b.b)(a(), {
						isEnabled: !1,
						messageType: e
					})).ok ? (Object(N.c)(r, e) && Object(o.c)(n, {
						isEnabled: !1,
						messageType: e
					}), n(c())) : n(Object(d.e)(Object(d.d)(i.fbt._("Failed to turn off these types of notifications, please try again.", null, {
						hk: "2pNRDO"
					}), C.b.Error)))
				}, G = e => async (t, n, {
					apiContext: s
				}) => {
					if (!e) return;
					(await ((e, t) => Object(p.a)(Object(g.a)(e, [h.a]), {
						endpoint: Object(x.a)(`${e.apiUrl}/api/sendreplies`),
						method: f.cb.POST,
						data: {
							id: t
						}
					}))(s(), e)).ok ? t(Object(d.e)(Object(d.d)(i.fbt._("Success! You won't see updates on this in the future", null, {
						hk: "wtDa4"
					}), C.b.SuccessCommunityGreen))) : t(Object(d.e)(Object(d.d)(i.fbt._("Failed to turn off updates on this, please try again", null, {
						hk: "1zhpEy"
					}), C.b.Error)))
				}, D = Object(s.a)(r.c), q = (e, t) => async (n, i, {
					apiContext: s
				}) => {
					let o;
					if (t === y.a.CommentReply || t === y.a.PostReply || t === y.a.PrivateMessage || t === y.a.UsernameMention) {
						if ((o = await ((e, t) => Object(p.a)(Object(g.a)(e, [h.a]), {
								endpoint: Object(x.a)(`${e.apiUrl}/api/read_message`),
								method: f.cb.POST,
								data: {
									id: t
								}
							}))(s(), e)).ok) {
							let e = Object(_.a)(i());
							if (e > 0) {
								e--;
								const t = Object(a.e)({
									count: e,
									key: v.c.ActivityTab
								});
								n(Object(a.a)(t)), n(Object(c.e)())
							}
						}
					} else o = await ((e, t) => Object(p.a)(Object(g.a)(e, [h.a]), {
						endpoint: Object(x.a)(`${e.apiUrl}/api/read_notification`),
						method: f.cb.POST,
						data: {
							id: t
						}
					}))(s(), e);
					if (o.ok) {
						const t = (new Date).toISOString();
						n(D({
							id: e,
							now: t
						}))
					}
				}, H = () => async (e, t, {
					gqlContext: n
				}) => {
					const i = (new Date).toLocaleDateString(),
						s = await ((e, t) => Object(u.a)(e, {
							...j,
							variables: {
								input: t
							}
						}))(n(), {
							lastSentAt: i
						});
					if (s.ok) {
						const t = s.body,
							n = t && t.data && t.data.updateInboxActivitySeenState && t.data.updateInboxActivitySeenState.badgeIndicators;
						n && (e(Object(a.a)(n)), e(Object(c.d)()))
					}
				}, W = () => async (e, t, {
					apiContext: n
				}) => {
					if ((await ((e, t) => Object(p.a)(Object(g.a)(e, [h.a]), {
							endpoint: Object(x.a)(`${e.apiUrl}/api/read_all_messages`),
							method: f.cb.POST,
							data: {
								filter_type: t
							}
						}))(n())).ok) {
						const t = Object(a.e)({
								count: 0,
								key: v.c.MessageTab
							}),
							n = Object(a.e)({
								count: 0,
								key: v.c.ActivityTab
							});
						e(Object(a.a)({
							...t,
							...n
						}))
					} else e(Object(d.e)(Object(d.d)(i.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
						hk: "VW7c3"
					}), C.b.Error)))
				}
		},
		"./src/reddit/actions/pages/notificationsInbox.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "notificationsInboxPageRequested", (function() {
				return f
			}));
			var i = n("./node_modules/react-router-redux/es/index.js"),
				s = n("./src/lib/pageTitle.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				o = n("./src/reddit/actions/notificationsInbox/index.ts"),
				r = n("./src/reddit/actions/platform.ts"),
				c = n("./src/reddit/actions/users.ts"),
				d = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				l = n("./src/reddit/routes/notificationsInbox/index.ts"),
				u = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				b = n("./src/reddit/selectors/notificationsInbox.tsx"),
				m = n("./src/reddit/selectors/user.ts");
			const f = () => async (e, t) => {
				const n = t();
				if (!(Object(m.J)(n) || Object(m.I)(n))) return Object(d.a)(e, n);
				Object(u.d)(n) ? (e(p()), e(g()), await e(h())) : e(Object(i.c)("/"))
			}, p = () => Object(a.k)({
				actionSource: a.a.NotificationsInbox,
				redirectUrl: l.b
			}), g = () => r.l({
				title: Object(s.e)()
			}), h = () => async (e, t) => {
				const n = t(),
					i = Object(b.g)(t()),
					s = !(!i || !i.length),
					a = Object(m.J)(n) || Object(m.I)(n);
				if (s || !a || !Object(u.d)(n)) return;
				const r = {
					first: 10
				};
				await e(Object(c.r)()), e(Object(o.d)(r))
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less": function(e, t, n) {
			e.exports = {
				BladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				bladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				Container: "_2lnfWQQ2rf3LByOAo0AIxK",
				container: "_2lnfWQQ2rf3LByOAo0AIxK",
				isSubscriptionPinned: "_3VGAuEF6xANTry3OLdIkY-",
				CloseIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				closeIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				LoadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loading: "ZKk731y0xKgZOe9Tjjniq",
				gradientAnimation: "U7_QESggl5iLUzCuBiLcO",
				LoadingTitle: "XP9o26f6xTYlWRW8E4xg",
				loadingTitle: "XP9o26f6xTYlWRW8E4xg",
				LoadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				loadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				LoadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				loadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				ShortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				shortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				ThemedChevron: "_3yekFtL72Ta99kZASWWCIh",
				themedChevron: "_3yekFtL72Ta99kZASWWCIh"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/lodash/values.js"),
				s = n.n(i),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/higherOrderComponents/makeAsync.tsx"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				b = n("./src/lib/loadWithRetries/index.ts"),
				m = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				f = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				p = n("./src/reddit/icons/svgs/Close/index.tsx"),
				g = n("./src/reddit/selectors/moderatorPermissions.ts"),
				h = n("./src/reddit/selectors/structuredStyles.ts"),
				x = n("./src/reddit/selectors/userPrefs.ts"),
				O = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				E = n.n(O);
			const {
				fbt: j
			} = n("./node_modules/fbt/lib/FbtPublic.js"), v = u.a.div("BladeContainer", E.a), y = u.a.wrapped(p.a, "CloseIcon", E.a), C = u.a.div("LoadingTitleContainer", E.a), _ = u.a.div("LoadingNavContainer", E.a), S = u.a.div("ShortLoadingNav", E.a), N = u.a.wrapped(f.a, "ThemedChevron", E.a), k = ({
				...e
			}) => o.a.createElement(v, null, o.a.createElement(y, null), o.a.createElement(m.k, null, o.a.createElement(m.p, null, j._("Back to mod tools", null, {
				hk: "1YCI0W"
			})), o.a.createElement(m.o, null, o.a.createElement(C, null, o.a.createElement("div", {
				className: Object(l.a)(E.a.LoadingTitle, e.isLoading && E.a.loading)
			})), o.a.createElement(_, null, o.a.createElement("div", {
				className: Object(l.a)(E.a.LoadingNav, e.isLoading && E.a.loading)
			}), o.a.createElement(N, null)), o.a.createElement(_, null, o.a.createElement(S, null), o.a.createElement(N, null)), o.a.createElement(_, null, o.a.createElement("div", {
				className: Object(l.a)(E.a.LoadingNav, e.isLoading && E.a.loading)
			}), o.a.createElement(N, null)), o.a.createElement(_, null, o.a.createElement(S, null), o.a.createElement(N, null)), o.a.createElement(_, null, o.a.createElement("div", {
				className: Object(l.a)(E.a.LoadingNav, e.isLoading && E.a.loading)
			}), o.a.createElement(N, null))))), I = Object(d.a)({
				getComponent: () => Object(b.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("StructuredStyles")]).then(n.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => o.a.createElement(k, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => o.a.createElement(k, {
					gradientType: "posts",
					isLoading: !0
				})
			}), T = Object(c.c)({
				isEditing: h.i,
				isSubscriptionsPinned: x.b,
				moderatorPermissions: g.i
			});
			t.a = Object(r.b)(T)(e => {
				const t = e.moderatorPermissions && s()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? o.a.createElement("div", {
					className: Object(l.a)(E.a.Container, e.isSubscriptionsPinned && E.a.isSubscriptionPinned)
				}, e.children, o.a.createElement(I, {
					subredditId: e.subredditId
				})) : o.a.createElement(a.Fragment, null, e.children)
			})
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, n) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return o
			})), n.d(t, "p", (function() {
				return r
			})), n.d(t, "n", (function() {
				return c
			})), n.d(t, "o", (function() {
				return d
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "j", (function() {
				return j
			}));
			var i = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				a = n.n(s);
			const o = i.a.section("FormPage", a.a),
				r = i.a.h1("HomePageTitle", a.a),
				c = i.a.button("HomePageBreadcrumb", a.a),
				d = i.a.div("HomePageGroup", a.a),
				l = i.a.h1("FormPageTitle", a.a),
				u = i.a.div("FormPageSection", a.a),
				b = i.a.div("FormGroup", a.a),
				m = i.a.h2("FormGroupTitle", a.a),
				f = i.a.div("FormElement", a.a),
				p = i.a.div("FormGroupDescription", a.a),
				g = i.a.div("FormItem", a.a),
				h = i.a.h3("FormElementTitle", a.a),
				x = i.a.div("FormElementDescription", a.a),
				O = i.a.div("FormElementError", a.a),
				E = i.a.div("FormElementSubGroup", a.a),
				j = i.a.li("FormListItem", a.a)
		},
		"./src/reddit/components/TabNav/index.m.less": function(e, t, n) {
			e.exports = {
				Gear: "_1USoXyqC8EXT8sZzm2JJYM",
				gear: "_1USoXyqC8EXT8sZzm2JJYM",
				Title: "_1VNcq3ynegRchfLyPqmKJ_",
				title: "_1VNcq3ynegRchfLyPqmKJ_",
				mConstrainWidth: "_2F7lbod1n6khHmvkBHQLQW",
				mResponsive: "_28QD3wRQT74vkz8KPzFC43",
				TabNavContainer: "_3FtOlkq31vuUJkzTkq4--W",
				tabNavContainer: "_3FtOlkq31vuUJkzTkq4--W",
				Tabs: "M7VDHU4AdgCc6tHaZ-UUy",
				tabs: "M7VDHU4AdgCc6tHaZ-UUy",
				Tab: "_1PoD47oSHsBQ37RfRPY-G-",
				tab: "_1PoD47oSHsBQ37RfRPY-G-",
				mIsActive: "_1Ico4fvlryEwDknLqa0-lP",
				mIsEnabled: "_3ZTJ0aNoM983-ysCWCpmrA"
			}
		},
		"./src/reddit/components/TabNav/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return v
			}));
			var i, s = n("./node_modules/lodash/throttle.js"),
				a = n.n(s),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/constants/componentSizes.ts"),
				b = n("./src/reddit/constants/zIndex.ts"),
				m = n("./src/reddit/controls/InternalLink/index.tsx"),
				f = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				p = n("./src/reddit/components/TabNav/index.m.less"),
				g = n.n(p);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.GEAR = "gear"
			}(i || (i = {}));
			const x = l.a.wrapped(f.a, "Gear", g.a),
				O = l.a.h3("Title", g.a),
				E = l.a.div("TabNavContainer", g.a),
				j = l.a.div("Tabs", g.a),
				v = l.a.wrapped(({
					active: e,
					children: t,
					enabled: n,
					...i
				}) => r.a.createElement(m.a, h({}, i, {
					"aria-selected": e,
					className: Object(c.a)(i.className, {
						[g.a.mIsActive]: e,
						[g.a.mIsEnabled]: !1 !== n
					}),
					role: "tab"
				}), t), "Tab", g.a),
				y = e => {
					switch (e) {
						case i.GEAR:
							return r.a.createElement(x, null);
						default:
							return null
					}
				},
				C = () => window.pageYOffset || window.scrollY,
				_ = 75,
				S = {
					paddingLeft: 15,
					left: 0,
					position: "fixed",
					right: 0,
					top: u.f,
					willChange: "transform",
					zIndex: b.g
				};
			class N extends r.a.Component {
				constructor(e) {
					super(e), this.toggleSticky = a()(() => {
						this.state.sticky || this.forceUnsticky ? C() < _ && (this.forceUnsticky = !0, this.wrapperRef.firstElementChild.setAttribute("style", ""), this.setState({
							sticky: !1
						}, () => this.forceUnsticky = !1)) : C() >= _ && this.setState({
							sticky: !0
						})
					}, d.G), this.forceUnsticky = !1, this.wrapperRef = null, this.state = {
						sticky: !1
					}
				}
				componentDidMount() {
					this.props.isCategoryPage && (this.toggleSticky(), window.addEventListener("orientationchange", this.toggleSticky), window.addEventListener("resize", this.toggleSticky), window.addEventListener("scroll", this.toggleSticky))
				}
				componentWillUnmount() {
					this.props.isCategoryPage && (window.removeEventListener("orientationchange", this.toggleSticky), window.removeEventListener("resize", this.toggleSticky), window.removeEventListener("scroll", this.toggleSticky))
				}
				render() {
					const {
						innerRef: e,
						isResponsiveSettingsEnabled: t,
						onTouchMove: n
					} = this.props, i = Object(c.a)({
						[g.a.mResponsive]: t
					});
					return r.a.createElement(E, {
						className: Object(c.a)(i, this.props.className),
						innerRef: e,
						onTouchMove: n
					}, r.a.createElement(O, {
						className: Object(c.a)(i, {
							[g.a.mConstrainWidth]: !!this.props.constrainWidth
						})
					}, y(this.props.icon), this.props.title), r.a.createElement(j, {
						className: Object(c.a)(i, {
							[g.a.mConstrainWidth]: !!this.props.constrainWidth
						}),
						role: "tablist",
						innerRef: e => this.wrapperRef = e,
						style: this.props.isCategoryPage && this.state.sticky && !this.forceUnsticky ? S : void 0
					}, this.props.children))
				}
			}
			t.c = N
		},
		"./src/reddit/endpoints/notificationSettingsLayoutByChannelEndpoint.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			var i = n("./src/graphql/operations/NotificationSettingsLayoutByChannel.json"),
				s = n("./src/graphql/operations/UpdateNotificationPreferences.json"),
				a = n("./src/lib/makeGqlRequest/index.ts");
			const o = (e, t) => Object(a.a)(e, {
					...i,
					variables: t
				}),
				r = (e, t) => Object(a.a)(e, {
					...s,
					variables: {
						input: {
							preferences: [t]
						}
					}
				})
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/react/index.js"),
				s = n.n(i),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				r = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: Object(a.a)(r.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, s.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/models/NotificationInbox/index.ts": function(e, t, n) {
			"use strict";
			var i, s;
			n.d(t, "a", (function() {
					return i
				})), n.d(t, "b", (function() {
					return s
				})),
				function(e) {
					e.CakeDay = "CAKE_DAY", e.ChatMessage = "CHAT_MESSAGE", e.CommentReply = "COMMENT_REPLY", e.LifecyclePostSuggestions = "LIFECYCLE_POST_SUGGESTIONS", e.PostReply = "POST_REPLY", e.PrivateMessage = "PRIVATE_MESSAGE", e.SubredditRecommendation = "SUBREDDIT_RECOMMENDATION", e.ThreadReplies = "THREAD_REPLIES", e.TopLevelComment = "TOP_LEVEL_COMMENT", e.UpvoteComment = "UPVOTE_COMMENT", e.UpvotePost = "UPVOTE_POST", e.UsernameMention = "USERNAME_MENTION", e.UserNewFollower = "USER_NEW_FOLLOWER"
				}(i || (i = {})),
				function(e) {
					e.Bell = "BELL", e.Chat = "CHAT", e.Comment = "COMMENT", e.Heart = "HEART", e.Trophy = "TROPHY", e.Reply = "REPLY", e.SortRising = "SORT_RISING", e.SortLive = "SORT_LIVE", e.SortTop = "SORT_TOP", e.Live = "LIVE", e.Redditor = "REDDITOR", e.Upvote = "UPVOTE"
				}(s || (s = {}))
		},
		"./src/reddit/models/NotificationSettingsLayout/index.ts": function(e, t, n) {
			"use strict";
			var i;
			n.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.Email = "EMAIL", e.Push = "PUSH"
				}(i || (i = {}))
		},
		"./src/reddit/pages/NotificationsInbox/NavBar/index.m.less": function(e, t, n) {
			e.exports = {
				navContainer: "_12OY7TkUMEzB4Dcb45flW4",
				navHeader: "_2LFc4YaOIyX_CuErU3hk7i",
				navBar: "_3C3k7jI3ZTmLbJfMRgwMp0",
				Tab: "_2yqeFE_vFRXsXeI8F0no7I",
				tab: "_2yqeFE_vFRXsXeI8F0no7I",
				Badge: "EHcqVS0S_Zy4T26UTcl95",
				badge: "EHcqVS0S_Zy4T26UTcl95",
				navLink: "_2AmngOKrvLvv8AgoVNkerf",
				Gear: "_1-OQiyZa9rGijwU8SjAbUC",
				gear: "_1-OQiyZa9rGijwU8SjAbUC",
				MarkAsRead: "P4zM8oVx2ZbSz4I2pyce_",
				markAsRead: "P4zM8oVx2ZbSz4I2pyce_"
			}
		},
		"./src/reddit/pages/NotificationsInbox/index.m.less": function(e, t, n) {
			e.exports = {
				contentClassName: "_3fT9oQmQ-SzBAXvVS2nTCd"
			}
		},
		"./src/reddit/pages/NotificationsInbox/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var i = n("./node_modules/react/index.js"),
				s = n.n(i),
				a = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				o = n("./src/reddit/components/TrackingHelper/index.tsx"),
				r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/layout/page/Listing/index.tsx"),
				d = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				u = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				b = n("./src/reddit/actions/notificationsInbox/index.ts"),
				m = n("./src/reddit/actions/tooltip.ts"),
				f = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				p = n("./src/lib/lessComponent.tsx"),
				g = n("./src/reddit/components/NotificationUnit/Loader.tsx"),
				h = n("./src/reddit/components/NotificationUnit/Placeholder.tsx"),
				x = n("./src/reddit/helpers/trackers/inbox.ts"),
				O = n("./src/reddit/pages/NotificationsInbox/Content/EmptyState.tsx"),
				E = n("./src/reddit/pages/NotificationsInbox/Content/index.m.less"),
				j = n.n(E);
			const v = "",
				y = .5,
				C = p.a.span("divider", j.a),
				_ = p.a.wrapped(g.a, "NotificationUnit", j.a);
			class S extends s.a.Component {
				constructor() {
					super(...arguments), this.earlierDividerNotificationId = v, this.todayDividerNotificationId = v, this.fetchNotifications = e => {
						const {
							cursor: t
						} = this.props;
						e.isIntersecting && t && this.props.fetchNotifications({
							after: t,
							first: 10
						})
					}, this.renderNotificationItem = e => s.a.createElement(_, {
						activeOverflowMenuId: this.props.activeOverflowMenuId,
						disableMessageTypeNotifications: this.props.disableMessageTypeNotifications,
						disableNotificationUpdates: this.props.disableNotificationUpdates,
						hideNotification: this.props.hideNotification,
						hideSubredditNotifications: this.props.hideSubredditNotifications,
						isInboxPostEmbedEnabled: this.props.isInboxPostEmbedEnabled,
						key: e.id,
						markNotificationAsRead: this.props.markNotificationAsRead,
						notification: e,
						setActiveOverflowMenuId: this.props.setActiveOverflowMenuId
					}), this.renderNotifications = () => {
						const {
							earlierNotifications: e,
							todayNotifications: t
						} = this.props, n = !(!e || !e.length), i = !(!t || !t.length);
						return s.a.createElement(s.a.Fragment, null, i && s.a.createElement(C, null, "Today"), i && s.a.createElement("ul", null, t.map(this.renderNotificationItem)), n && s.a.createElement(C, null, "Earlier"), n && s.a.createElement("ul", null, e && e.map(this.renderNotificationItem)))
					}
				}
				componentDidMount() {
					this.props.updateInboxActivitySeenState(), this.props.sendEvent(Object(x.k)({
						badgeCount: this.props.inboxBadgeCount,
						tab: x.c.Activity
					}))
				}
				render() {
					const {
						hasNextPage: e,
						earlierNotifications: t,
						isPending: n,
						todayNotifications: i
					} = this.props, a = !!((t && t.length || 0) + (i && i.length));
					return s.a.createElement("div", {
						className: j.a.notificationsContainer
					}, !a && n && s.a.createElement(h.a, null), !a && !n && s.a.createElement(O.a, null), a && this.renderNotifications(), a && !n && e && s.a.createElement(f.a, {
						onChange: this.fetchNotifications,
						rootMargin: "0px 0px 0px 0px",
						threshold: y
					}, s.a.createElement("div", null)))
				}
			}
			var N = Object(o.c)(S),
				k = n("./src/reddit/selectors/appBadges.ts"),
				I = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				T = n("./src/reddit/selectors/notificationsInbox.tsx"),
				P = n("./src/reddit/selectors/tooltip.ts");
			const L = Object(l.c)({
				activeOverflowMenuId: P.a,
				cursor: T.c,
				earlierNotifications: T.b,
				hasNextPage: T.d,
				inboxBadgeCount: k.g,
				isInboxPostEmbedEnabled: I.c,
				isPending: T.e,
				todayNotifications: T.h
			});
			var w = Object(d.b)(L, e => ({
					clearMessageTabBadgeCount: () => e(Object(u.b)()),
					disableMessageTypeNotifications: (t, n) => e(Object(b.b)(t, n)),
					disableNotificationUpdates: t => e(Object(b.c)(t)),
					fetchNotifications: t => e(Object(b.d)(t)),
					hideNotification: t => e(Object(b.a)(t)),
					hideSubredditNotifications: (t, n) => e(Object(b.e)(t, n)),
					markNotificationAsRead: (t, n) => e(Object(b.g)(t, n)),
					setActiveOverflowMenuId: t => {
						e(Object(m.h)({
							tooltipId: t
						}))
					},
					updateInboxActivitySeenState: () => e(Object(b.h)())
				}))(N),
				R = n("./node_modules/fbt/lib/FbtPublic.js"),
				A = n("./src/reddit/components/BadgeCounter/index.tsx"),
				M = n("./src/reddit/components/TabNav/index.tsx"),
				F = n("./src/reddit/controls/InternalLink/index.tsx"),
				U = n("./src/reddit/hooks/useTracking.ts"),
				B = n("./src/reddit/icons/svgs/MarkAsRead/index.tsx"),
				G = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				D = n("./src/reddit/pages/NotificationsInbox/NavBar/index.m.less"),
				q = n.n(D);
			const H = p.a.wrapped(A.a, "Badge", q.a),
				W = p.a.wrapped(G.a, "Gear", q.a),
				J = p.a.wrapped(B.a, "MarkAsRead", q.a),
				z = p.a.wrapped(M.a, "Tab", q.a);
			var Q = e => {
				const {
					isInboxMarkAllAsReadEnabled: t,
					messagesTabBadgeCount: n,
					notificationsTabBadgeCount: i
				} = e, a = Object(U.a)(), o = !!n;
				return s.a.createElement("div", {
					className: q.a.navContainer
				}, s.a.createElement("h1", {
					className: q.a.navHeader
				}, R.fbt._("Notifications", null, {
					hk: "18kEAD"
				})), s.a.createElement("nav", {
					className: q.a.navBar
				}, s.a.createElement("ul", null, s.a.createElement("li", null, s.a.createElement(z, {
					active: !0,
					to: "/notifications"
				}, R.fbt._("Activity", null, {
					hk: "24wHCv"
				})), s.a.createElement(H, {
					isActive: !!i,
					unreadCount: i
				})), s.a.createElement("li", null, s.a.createElement(z, {
					active: !1,
					onMouseDown: () => {
						a(Object(x.k)({
							badgeCount: n + i,
							tab: x.c.Messages
						})), e.clearMessageTabBadgeCount()
					},
					to: o ? "/message/unread" : "/message/messages"
				}, R.fbt._("Messages", null, {
					hk: "Xl3Wz"
				})), s.a.createElement(H, {
					isActive: o,
					unreadCount: n
				})), t && s.a.createElement("li", null, s.a.createElement("button", {
					className: q.a.navLink,
					onClick: () => {
						e.markAllAsRead(), a(Object(x.d)({
							isMiniInbox: !1
						}))
					}
				}, s.a.createElement(J, null), R.fbt._("Mark as read", null, {
					hk: "3IycES"
				}))), s.a.createElement("li", null, s.a.createElement(F.a, {
					className: q.a.navLink,
					onClick: () => a(Object(x.j)(x.a.Inbox)),
					to: "/settings/notifications"
				}, s.a.createElement(W, null), R.fbt._("Settings", null, {
					hk: "1e9Jn"
				}))))))
			};
			const Y = Object(l.c)({
				isInboxMarkAllAsReadEnabled: I.b,
				messagesTabBadgeCount: k.h,
				notificationsTabBadgeCount: k.a
			});
			var V = Object(d.b)(Y, e => ({
					clearMessageTabBadgeCount: () => e(Object(u.b)()),
					markAllAsRead: () => e(Object(b.f)())
				}))(e => s.a.createElement(Q, e)),
				K = n("./src/reddit/pages/NotificationsInbox/index.m.less"),
				X = n.n(K);
			const Z = Object(r.t)();
			class $ extends s.a.Component {
				render() {
					return s.a.createElement(a.a, null, s.a.createElement(c.a, {
						contentClassName: X.a.contentClassName,
						content: s.a.createElement(w, null),
						disableFullscreen: !0,
						navBar: s.a.createElement(V, null)
					}))
				}
			}
			t.default = Z(Object(o.c)($))
		},
		"./src/reddit/selectors/notificationsInbox.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return s
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "b", (function() {
				return b
			}));
			var i = n("./node_modules/reselect/es/index.js");
			const s = e => e.notificationsInbox && e.notificationsInbox.api && e.notificationsInbox.api.pending,
				a = e => e.notificationsInbox && e.notificationsInbox.pageInfo,
				o = Object(i.a)(a, e => !(!e || !e.hasNextPage)),
				r = Object(i.a)(a, e => e && e.endCursor),
				c = e => e.notificationsInbox && e.notificationsInbox.notifications,
				d = Object(i.a)(c, e => e.slice(0, 5)),
				l = e => e.notificationsInbox && e.notificationsInbox.earlierDividerIndex,
				u = Object(i.a)(c, l, (e, t) => {
					if (t) {
						const n = parseInt(t);
						return e.slice(0, n)
					}
					return e
				}),
				b = Object(i.a)(c, l, (e, t) => {
					if (t) {
						const n = parseInt(t);
						return e.slice(n)
					}
					return null
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NotificationsInbox.de3289ccf5361011bd34.js.map