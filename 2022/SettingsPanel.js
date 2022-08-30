// https://www.redditstatic.com/desktop2x/SettingsPanel.b113c93d93632e9406c0.js
// Retrieved at 8/30/2022, 4:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SettingsPanel"], {
		"./src/chat/components/Sidebar/SettingsPanel/SettingsGroup/index.m.less": function(e, t, a) {
			e.exports = {
				SettingsGroup: "_2ApKr2yBwlCkBN2QPhVYQo",
				settingsGroup: "_2ApKr2yBwlCkBN2QPhVYQo",
				Header: "_1eV-Z4a_QWg8i3jiEzMZ8s",
				header: "_1eV-Z4a_QWg8i3jiEzMZ8s",
				Content: "_34rzQjeZPrSMl-W5-AX8NH",
				content: "_34rzQjeZPrSMl-W5-AX8NH"
			}
		},
		"./src/chat/components/Sidebar/SettingsPanel/SettingsItem/index.m.less": function(e, t, a) {
			e.exports = {
				SettingsItem: "_39bS2ejhWnNYFR2sIIb1c_",
				settingsItem: "_39bS2ejhWnNYFR2sIIb1c_",
				selected: "ilZAJEO9WRpIjyjeQPjuI",
				Icon: "_3ZRET3ueLX_N-MPUFlr3Rr",
				icon: "_3ZRET3ueLX_N-MPUFlr3Rr",
				OpenScreenArrow: "_25tcqAU__87eaqtM0wZ29l",
				openScreenArrow: "_25tcqAU__87eaqtM0wZ29l",
				Text: "_36dSdo2c499iJ6BynUnosi",
				text: "_36dSdo2c499iJ6BynUnosi"
			}
		},
		"./src/chat/components/Sidebar/SettingsPanel/index.m.less": function(e, t, a) {
			e.exports = {
				SettingsPanel: "_3OZ_wqD6RQWJaQGn-usl6J",
				settingsPanel: "_3OZ_wqD6RQWJaQGn-usl6J",
				Header: "_19BPJQDtd2Hb0LTzjnjhz-",
				header: "_19BPJQDtd2Hb0LTzjnjhz-",
				BackIcon: "_3WSSc4i5g6FcQAkPzQT6-q",
				backIcon: "_3WSSc4i5g6FcQAkPzQT6-q",
				Content: "_1DfbMwHHZti3CsxAd-mJAl",
				content: "_1DfbMwHHZti3CsxAd-mJAl",
				Theme: "_3QlqMvslIGQX30JuDA9z7s",
				theme: "_3QlqMvslIGQX30JuDA9z7s"
			}
		},
		"./src/chat/components/Sidebar/SettingsPanel/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				c = a("./node_modules/react/index.js"),
				s = a.n(c),
				l = a("./node_modules/react-redux/es/index.js"),
				r = a("./src/chat/actions/channel.ts"),
				o = a("./src/chat/actions/channel/dropdown.ts"),
				i = a("./src/chat/actions/settings/index.ts"),
				u = a("./src/chat/actions/tracking.ts"),
				h = a("./src/chat/components/Modals/BlockUser/index.tsx"),
				m = a("./src/chat/actions/channel/hide.ts"),
				d = a("./src/chat/components/Modals/ModalOverlay/index.tsx");
			const {
				fbt: b
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var v = e => {
					let {
						userToLeave: t
					} = e;
					const a = Object(l.d)();
					return s.a.createElement(d.c, {
						submit: () => {
							a(Object(m.a)()), a(Object(u.I)())
						},
						submitButtonText: b._("Yes, Leave", null, {
							hk: "4aBFrU"
						})
					}, s.a.createElement(d.b, null, b._("Leave chat?", null, {
						hk: "1BniWn"
					})), s.a.createElement(d.a, null, b._("This conversation will be hidden but you won't lose your chat history, so you can continue chatting with {userName}{=at any time.}", [b._param("userName", `u/${t.name}`), b._param("=at any time.", s.a.createElement("span", null, b._("at any time.", null, {
						hk: "2mWUkR"
					})))], {
						hk: "12UAIN"
					})))
				},
				p = a("./src/chat/selectors/channels.ts");
			const {
				fbt: _
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var A = () => {
					const e = Object(l.d)(),
						t = Object(l.e)(p.n);
					return s.a.createElement(d.c, {
						submit: () => {
							t && e(Object(r.H)(t)), e(Object(u.I)())
						},
						submitButtonText: _._("Yes, Leave", null, {
							hk: "1lG6hO"
						})
					}, s.a.createElement(d.b, null, _._("Leave group?", null, {
						hk: "4qlYAa"
					})), s.a.createElement(d.a, null, _._("Once you leave, you won't get new messages and will need another invite to rejoin.", null, {
						hk: "1fBcJy"
					})))
				},
				k = a("./src/lib/makeGqlRequest/index.ts"),
				x = a("./src/redditGQL/operations/UpdateChatMessagesAsRead.json");
			var E = a("./src/reddit/hooks/useGqlContext.ts");
			const {
				fbt: S
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var f = () => {
					const e = Object(E.a)();
					return s.a.createElement(d.c, {
						submit: async () => {
							await ((e, t) => {
								const a = {
									channels: t
								};
								return Object(k.a)(e, {
									...x,
									variables: {
										input: a
									}
								})
							})(e(), [])
						},
						submitButtonText: S._("Mark as Read", null, {
							hk: "2GTSlC"
						})
					}, s.a.createElement(d.b, null, S._("Mark all as read?", null, {
						hk: "1XCKs7"
					})), s.a.createElement(d.a, null, S._("Mark all conversations and invites as read.", null, {
						hk: "1iyaXi"
					})))
				},
				j = a("./src/chat/components/Sidebar/SettingsPanel/SettingsGroup/index.m.less"),
				g = a.n(j);
			var O = e => {
					let {
						headerText: t,
						children: a
					} = e;
					return s.a.createElement("div", {
						className: g.a.SettingsGroup
					}, s.a.createElement("div", {
						className: g.a.Header
					}, t), a ? s.a.createElement("div", {
						className: g.a.Content
					}, a) : null)
				},
				w = a("./src/lib/classNames/index.ts"),
				L = a("./src/chat/controls/Svg/index.tsx");

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			var C = e => s.a.createElement(L.a, M({}, e, {
					viewBox: "0 0 20 20"
				}), e.isFilled ? s.a.createElement("path", {
					d: "M8.207,15.707,6.793,14.293,11.086,10,6.793,5.707,8.207,4.293l5,5a1,1,0,0,1,0,1.414Z"
				}) : s.a.createElement("path", {
					d: "M7.942,15.442l-.884-.884L11.616,10,7.058,5.442l.884-.884,5,5a.625.625,0,0,1,0,.884Z"
				})),
				N = a("./src/chat/components/Sidebar/SettingsPanel/SettingsItem/index.m.less"),
				I = a.n(N),
				P = a("./src/chat/helpers/dom.ts");
			var y, T = e => {
					let {
						className: t,
						text: a,
						onclick: n,
						children: c,
						isSelected: l,
						shouldShowArrow: r
					} = e;
					return s.a.createElement("div", {
						className: Object(w.a)(I.a.SettingsItem, {
							[I.a.selected]: l && r
						}, t),
						onClick: Object(P.a)(n)
					}, s.a.createElement("div", {
						className: I.a.Icon
					}, c), s.a.createElement("div", {
						className: I.a.Text
					}, a), r && !l ? s.a.createElement("div", {
						className: I.a.OpenScreenArrow
					}, s.a.createElement(C, null)) : null)
				},
				B = a("./src/chat/constants/channels.ts");
			! function(e) {
				e.About = "about", e.InvitePeople = "invitePeople", e.MuteNotifications = "muteNotifications", e.UnmuteNotifications = "unmuteNotifications", e.LeaveGroup = "leaveGroup", e.LeaveChat = "leaveChat", e.InviteLink = "inviteLink", e.MemberRequirements = "memberRequirements", e.Theme = "theme", e.PrivacyAndSupport = "privacyAndSupport", e.MarkAllAsRead = "markAllAsRead", e.StartGroupChat = "startGroupChat", e.BlockUser = "blockUser", e.LeaveLiveChat = "leaveLiveChat"
			}(y || (y = {}));
			const {
				About: G,
				InvitePeople: H,
				MuteNotifications: R,
				UnmuteNotifications: U,
				LeaveChat: Z,
				LeaveGroup: Q,
				InviteLink: q,
				Theme: V,
				PrivacyAndSupport: D,
				MarkAllAsRead: F,
				StartGroupChat: J,
				BlockUser: W,
				LeaveLiveChat: z
			} = y, Y = {
				directChannel: [J, W, R, U, Z],
				groupChannel: [G, H, R, U, Q],
				liveChat: [z],
				hostTools: [q],
				globalSettings: [V, D, F]
			}, K = (e, t) => !(e === R && t), X = (e, t) => !(e === U && !t), $ = (e, t) => !(e === V && !t);
			var ee = a("./src/chat/icons/svgs/ArrowLeft/index.tsx"),
				te = a("./src/chat/icons/svgs/Block/index.tsx"),
				ae = a("./src/chat/icons/svgs/ChangeTheme/index.tsx"),
				ne = a("./src/chat/icons/svgs/DisableNotifications/index.tsx"),
				ce = a("./src/chat/icons/svgs/EnableNotifications/index.tsx"),
				se = a("./src/chat/icons/svgs/InfoIcon/index.tsx"),
				le = a("./src/chat/icons/svgs/InviteMember/index.tsx");

			function re() {
				return (re = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			var oe = e => s.a.createElement(L.a, re({}, e, {
					viewBox: "0 0 20 20"
				}), s.a.createElement(s.a.Fragment, null, s.a.createElement("path", {
					d: "M13,.375A6.633,6.633,0,0,0,6.375,7,6.559,6.559,0,0,0,6.8,9.318L.375,15.741v3.884h5.25v-3h3v-3H13A6.625,6.625,0,0,0,13,.375Zm0,12H7.375v3h-3v3H1.625V16.259L8.282,9.6,8.1,9.209A5.373,5.373,0,1,1,13,12.375Z"
				}), s.a.createElement("circle", {
					cx: "14",
					cy: "6",
					r: "1.625"
				}))),
				ie = a("./src/chat/icons/svgs/Leave/index.tsx"),
				ue = a("./src/chat/icons/svgs/Link/index.tsx");

			function he() {
				return (he = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			var me = e => s.a.createElement(L.a, he({}, e, {
				viewBox: "0 0 20 20"
			}), e.isFilled ? s.a.createElement("path", {
				d: "M16.5,7.875H16V6A6,6,0,0,0,4,6V7.875H3.5A1.627,1.627,0,0,0,1.875,9.5v8A1.627,1.627,0,0,0,3.5,19.125h13A1.627,1.627,0,0,0,18.125,17.5v-8A1.627,1.627,0,0,0,16.5,7.875ZM6,6a4,4,0,0,1,8,0V7.875H6Z"
			}) : s.a.createElement("path", {
				d: "M16.5,7.875H15.125V6.188A5.227,5.227,0,0,0,10,.875,5.227,5.227,0,0,0,4.875,6.188V7.875H3.5A1.627,1.627,0,0,0,1.875,9.5v8A1.627,1.627,0,0,0,3.5,19.125h13A1.627,1.627,0,0,0,18.125,17.5v-8A1.627,1.627,0,0,0,16.5,7.875ZM6.125,6.188A3.976,3.976,0,0,1,10,2.125a3.976,3.976,0,0,1,3.875,4.063V7.875H6.125ZM16.875,17.5a.375.375,0,0,1-.375.375H3.5a.375.375,0,0,1-.375-.375v-8A.375.375,0,0,1,3.5,9.125h13a.375.375,0,0,1,.375.375Z"
			}));

			function de() {
				return (de = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			var be = e => s.a.createElement(L.a, de({}, e, {
					viewBox: "0 0 20 20"
				}), e.isFilled ? s.a.createElement("path", {
					d: "M18.324,4.171,12.345.654a4.629,4.629,0,0,0-4.69,0L1.676,4.171a1.633,1.633,0,0,0-.8,1.4V16.5A1.627,1.627,0,0,0,2.5,18.125h15A1.627,1.627,0,0,0,19.125,16.5V5.572A1.633,1.633,0,0,0,18.324,4.171ZM8.881,13.179l-.381.029H8.189l-.29-.249L5.97,11.03,7.03,9.97,8.5,11.439,12.97,6.97l1.06,1.06Z"
				}) : s.a.createElement(s.a.Fragment, null, s.a.createElement("path", {
					d: "M18.324,4.171,12.345.654a4.629,4.629,0,0,0-4.69,0L1.676,4.171a1.633,1.633,0,0,0-.8,1.4V16.5A1.627,1.627,0,0,0,2.5,18.125h15A1.627,1.627,0,0,0,19.125,16.5V5.572A1.633,1.633,0,0,0,18.324,4.171ZM17.875,16.5a.375.375,0,0,1-.375.375H2.5a.375.375,0,0,1-.375-.375V5.572a.375.375,0,0,1,.185-.323L8.289,1.731a3.38,3.38,0,0,1,3.422,0L17.69,5.249a.375.375,0,0,1,.185.323Z"
				}), s.a.createElement("polygon", {
					points: "8.5 11.616 6.942 10.058 6.058 10.942 7.987 12.871 8.241 13.083 8.5 13.083 8.83 13.054 13.942 7.942 13.058 7.058 8.5 11.616"
				}))),
				ve = a("./src/chat/models/Channel/index.ts"),
				pe = a("./src/chat/models/Settings/index.ts"),
				_e = a("./src/chat/selectors/experiments.ts"),
				Ae = a("./src/chat/selectors/platform.ts"),
				ke = a("./src/chat/selectors/theme.ts"),
				xe = a("./src/chat/components/Sidebar/SettingsPanel/index.m.less"),
				Ee = a.n(xe);
			const {
				BLOCK_USER: Se,
				LEAVE_CHAT: fe,
				LEAVE_GROUP: je,
				MARK_ALL_AS_READ: ge
			} = pe.a, Oe = e => {
				switch (e) {
					case y.About:
						return {
							text: n.fbt._("About", null, {
								hk: "3WuxG2"
							}), icon: s.a.createElement(se.a, null), shouldShowArrow: !0, channelAction: B.a.VIEW_ABOUT
						};
					case y.InvitePeople:
						return {
							text: n.fbt._("Invite people", null, {
								hk: "cLHG7"
							}), icon: s.a.createElement(le.a, null), shouldShowArrow: !0, channelAction: B.a.INVITE_MEMBERS
						};
					case y.MuteNotifications:
						return {
							text: n.fbt._("Mute notifications", null, {
								hk: "1x4lSk"
							}), icon: s.a.createElement(ne.a, null)
						};
					case y.UnmuteNotifications:
						return {
							text: n.fbt._("Unmute notifications", null, {
								hk: "71iyb"
							}), icon: s.a.createElement(ce.a, null)
						};
					case y.LeaveGroup:
						return {
							text: n.fbt._("Leave group", null, {
								hk: "2yrVhm"
							}), icon: s.a.createElement(ie.a, null)
						};
					case y.LeaveLiveChat:
					case y.LeaveChat:
						return {
							text: n.fbt._("Leave chat", null, {
								hk: "399LRd"
							}), icon: s.a.createElement(ie.a, null)
						};
					case y.InviteLink:
						return {
							text: n.fbt._("Invite link", null, {
								hk: "4hT3Ob"
							}), icon: s.a.createElement(ue.a, null), shouldShowArrow: !0, channelAction: B.a.INVITE_LINK_SETTINGS
						};
					case y.MemberRequirements:
						return {
							text: n.fbt._("Member requirements", null, {
								hk: "npHyq"
							}), icon: s.a.createElement(me, null), shouldShowArrow: !0
						};
					case y.Theme:
						return {
							text: n.fbt._("Theme", null, {
								hk: "4mjZrI"
							}), icon: s.a.createElement(ae.a, null), shouldShowArrow: !0, className: Ee.a.Theme, channelAction: B.a.THEMES
						};
					case y.PrivacyAndSupport:
						return {
							text: n.fbt._("Privacy & support", null, {
								hk: "36YF4A"
							}), icon: s.a.createElement(oe, null), shouldShowArrow: !0
						};
					case y.MarkAllAsRead:
						return {
							text: n.fbt._("Mark all as read", null, {
								hk: "2FiPP9"
							}), icon: s.a.createElement(be, null)
						};
					case y.StartGroupChat:
						return {
							text: n.fbt._("Start a group chat", null, {
								hk: "2YJQkg"
							}), icon: s.a.createElement(le.a, null), shouldShowArrow: !0
						};
					case y.BlockUser:
						return {
							text: n.fbt._("Block user", null, {
								hk: "3mQRgx"
							}), icon: s.a.createElement(te.a, null)
						};
					default:
						return {
							text: "Unknown item", icon: s.a.createElement("span", null)
						}
				}
			}, we = e => {
				let {
					channel: t
				} = e;
				const a = d.d,
					r = Object(l.d)(),
					[m, b] = Object(c.useState)(null),
					_ = Object(l.e)(e => Object(p.M)(e, t.channelId)),
					k = Object(l.e)(_e.y),
					x = Object(l.e)(_e.i),
					E = Object(l.e)(p.a),
					S = Object(l.e)(ke.e),
					j = Object(l.e)(Ae.d),
					g = Object(l.e)(p.s),
					w = E && t.type === ve.b.Group,
					L = Object(c.useMemo)(() => {
						if (t) switch (t.type) {
							case ve.b.Direct:
								return Y.directChannel.filter(e => K(e, _) && X(e, _) && $(e, k));
							case ve.b.Group:
								return Y.groupChannel.filter(e => K(e, _) && X(e, _) && $(e, k))
						}
					}, [t, _, k]),
					M = e => e.map(e => e !== y.InviteLink || x ? s.a.createElement(T, {
						className: S && k && e === y.Theme ? Ee.a.Theme : void 0,
						onclick: () => (e => {
							switch (e) {
								case y.About:
									r(Object(o.k)()), r(Object(u.ob)());
									break;
								case y.InvitePeople:
									r(Object(o.c)()), r(Object(u.c)());
									break;
								case y.MuteNotifications:
									r(Object(o.e)()), r(Object(u.R)());
									break;
								case y.UnmuteNotifications:
									r(Object(o.g)()), r(Object(u.db)());
									break;
								case y.LeaveChat:
									b(fe);
									break;
								case y.LeaveGroup:
									b(je);
									break;
								case y.Theme:
									r(Object(i.h)()), r(Object(u.f)());
									break;
								case y.InviteLink:
									r(Object(i.e)(i.b.SESSION_LAST)), r(Object(o.b)(t.channelId));
									break;
								case y.StartGroupChat:
									r(Object(o.i)());
									break;
								case y.BlockUser:
									b(Se);
									break;
								case y.MarkAllAsRead:
									b(ge);
									break;
								case y.PrivacyAndSupport:
									return r(Object(i.g)())
							}
						})(e),
						isSelected: !!j && Oe(e).channelAction === j,
						key: e,
						text: Oe(e).text,
						shouldShowArrow: Oe(e).shouldShowArrow
					}, Oe(e).icon) : null);
				return s.a.createElement("div", {
					className: Ee.a.SettingsPanel
				}, s.a.createElement("div", {
					className: Ee.a.Header
				}, s.a.createElement(ee.a, {
					className: Ee.a.BackIcon,
					onClick: () => {
						r(Object(i.i)())
					}
				}), n.fbt._("Settings", null, {
					hk: "Mj4q4"
				})), s.a.createElement("div", {
					className: Ee.a.Content
				}, s.a.createElement(O, {
					headerText: (() => t.type === ve.b.Direct ? n.fbt._("This chat", null, {
						hk: "ao8jp"
					}) : n.fbt._("This group", null, {
						hk: "1phz2a"
					}))()
				}, L ? M(L) : null), w && x ? s.a.createElement(O, {
					headerText: n.fbt._("Host tools", null, {
						hk: "2cuDsU"
					})
				}, M(Y.hostTools)) : null, s.a.createElement(O, {
					headerText: (() => w ? n.fbt._("Global settings", null, {
						hk: "1wpYs8"
					}) : n.fbt._("Global", null, {
						hk: "3UNhmn"
					}))()
				}, M(Y.globalSettings)), s.a.createElement(a.Provider, {
					value: () => {
						b(null)
					}
				}, (() => {
					switch (m) {
						case Se:
							return g ? s.a.createElement(h.a, {
								userToBlock: g
							}) : null;
						case je:
							return s.a.createElement(A, null);
						case ge:
							return s.a.createElement(f, null);
						case fe:
							return g ? s.a.createElement(v, {
								userToLeave: g
							}) : null;
						default:
							return null
					}
				})())))
			}, Le = e => {
				let {
					liveChatPost: t
				} = e;
				const a = Object(l.d)(),
					c = () => {
						a(Object(i.i)())
					};
				return s.a.createElement("div", {
					className: Ee.a.SettingsPanel
				}, s.a.createElement("div", {
					className: Ee.a.Header
				}, s.a.createElement(ee.a, {
					className: Ee.a.BackIcon,
					onClick: c
				}), n.fbt._("Settings", null, {
					hk: "Mj4q4"
				})), s.a.createElement("div", {
					className: Ee.a.Content
				}, s.a.createElement(O, {
					headerText: n.fbt._("This chat", null, {
						hk: "ao8jp"
					})
				}, (e => e.map(e => s.a.createElement(T, {
					onclick: () => (e => {
						switch (e) {
							case y.LeaveLiveChat:
								a(Object(r.I)(t.post.id)), c()
						}
					})(e),
					key: e,
					text: Oe(e).text,
					shouldShowArrow: Oe(e).shouldShowArrow
				}, Oe(e).icon)))(Y.liveChat))))
			};
			t.default = e => {
				let {
					channel: t,
					liveChatPost: a
				} = e;
				return Object(l.e)(_e.r) && a ? s.a.createElement(Le, {
					liveChatPost: a
				}) : t ? s.a.createElement(we, {
					channel: t
				}) : null
			}
		},
		"./src/reddit/hooks/useGqlContext.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			}));
			var n = a("./node_modules/react/index.js"),
				c = a("./src/reddit/contexts/ApiContext.tsx");

			function s() {
				const {
					gqlContext: e
				} = Object(n.useContext)(c.a);
				return e
			}
		},
		"./src/redditGQL/operations/UpdateChatMessagesAsRead.json": function(e) {
			e.exports = JSON.parse('{"id":"bfc6fe51708d"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SettingsPanel.b113c93d93632e9406c0.js.map